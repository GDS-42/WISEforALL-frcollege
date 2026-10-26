// ÉCLORE — La séance : récupération active, confiance, retour immédiat, combo, rattrapage, épreuve.
import { h, svg, mdEl, md, lettre, toast, pluriel, duree, poser, remplacer } from "./dom.js";
import { icone } from "./icones.js";
import { chargerNiveau, chargerModule, trouverChapitre, MATIERES } from "../content.js";
import { construireSession, enregistrerReponse, cloreSession, melanger } from "../engine.js";
import { corriger, formaterReponseAttendue } from "../grader.js";
import { stade } from "../scheduler.js";
import { retourReponse, motFin } from "../mentor.js";
import { sons } from "../audio.js";
import { lire } from "../lecture.js";
import { plantePetite } from "../plants.js";
import { lume } from "./illustrations.js";
import { appliquerEvenement, construireEpreuve, combo as comboDe, niveauDepuisXp, quetesDuJour } from "../gamification.js";
import { notifier } from "./chapitre.js";
import { modulesVisibles } from "./jardin.js";

const TYPES_LIB = { qcm: "Choisis", vf: "Vrai ou faux", trous: "Complète", ordre: "Remets dans l'ordre", assoc: "Associe", num: "Calcule", texte: "Réponds", flash: "Carte mémoire" };
const TITRES = { decouvrir: "Découvrir", arroser: "Arroser", defi: "Défi éclair", diagnostic: "Où en suis-je ?", epreuve: "Épreuve" };

export async function ecranSession(main, [type, param], app) {
  const e = app.etat;
  let chapitre = null, modules = [], session;
  if (type === "decouvrir" || type === "epreuve") {
    chapitre = await trouverChapitre(param);
    if (!chapitre) { poser(main, h("p", {}, "Chapitre introuvable.")); return; }
    modules = await chargerNiveau(chapitre.niveau);
  } else if ((type === "arroser" || type === "diagnostic") && param) {
    const [niv, ...reste] = param.split("-");
    const mod = await chargerModule(niv, reste.join("-"));
    modules = mod ? [mod] : [];
  } else modules = modulesVisibles(await chargerNiveau(e.profil.niveau), e);
  if (type === "epreuve") session = { type, chapitre: chapitre.id, items: construireEpreuve(chapitre, e), debut: Date.now(), reponses: [] };
  else {
    const n = type === "defi" ? 10 : type === "diagnostic" ? 14 : Math.max(8, Math.min(16, e.prefs.objectifItems || 12));
    session = construireSession({ type, etat: e, chapitre, modules, n });
  }
  if (!session.items.length) { poser(main, seanceVide(type, modules, e)); return; }
  const stadesAvant = {};
  for (const it of session.items) stadesAvant[it.id] = stade(e.items[it.id]);
  const ctx = { app, session, type, chapitre, modules, index: 0, file: session.items.slice(), rattrapes: new Set(), stadesAvant, serie: 0, meilleure: 0, xpAvant: e.gamif.xp, niveauAvant: niveauDepuisXp(e.gamif.xp), lumensAvant: e.lumens, resultats: [] };
  poser(main, h("div", { class: "seance", id: "seance" }));
  afficherItem(ctx);
}

function barreProgression(ctx, info) {
  const n = ctx.file.length;
  const tige = h("div", { class: "tige", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": n, "aria-valuenow": ctx.index, "aria-label": `Question ${ctx.index + 1} sur ${n}` },
    ...ctx.file.map((it, i) => { const r = ctx.resultats[i]; return h("span", { class: `noeud ${r === true ? "ok" : r === false ? "ko" : ""} ${i === ctx.index ? "courant" : ""}` }); }));
  const c = comboDe(ctx.serie);
  return h("div", { class: "seance-haut" },
    h("a", { class: "btn discret rond", href: ctx.chapitre ? `#/chapitre/${ctx.chapitre.id}` : "#/jardin", "aria-label": "Quitter la séance", onclick: () => { if (ctx.session.reponses.length) cloreSession(ctx.app.store, ctx.session); } }, icone("fermer")),
    tige,
    h("span", { class: `combo palier-${c.palier}`, title: c.palier ? `Série de ${ctx.serie} : lumens ×${c.multiplicateur}` : "Enchaîne les bonnes réponses", "aria-live": "polite" }, icone("flamme", { taille: 18 }), h("b", {}, String(ctx.serie)), c.palier ? h("small", {}, `×${c.multiplicateur}`) : null),
    ctx.type === "defi" ? h("span", { class: "chrono", "data-chrono": "1" }, "0:00") : null);
}

function afficherItem(ctx) {
  const { app, session, file } = ctx;
  const zone = document.getElementById("seance");
  if (!zone) return;
  remplacer(zone, );
  if (ctx.index >= file.length) return afficherFin(ctx);
  const item = file[ctx.index];
  const e = app.etat;
  const info = MATIERES[item.matiere];
  const etatItem = e.items[item.id];
  const rattrapage = !!item._rattrapage;
  const statut = rattrapage ? "rattrapage" : etatItem?.s ? "révision" : "nouveau";
  const debut = Date.now();
  let confiance = 2, indiceUtilise = false, repondu = false, valider = null, boutonValider = null;
  zone.style.setProperty("--pigment", info.couleur);
  poser(zone, barreProgression(ctx, info));
  if (ctx.type === "defi") {
    const t0 = session.debut;
    const tick = () => { const el = zone.querySelector("[data-chrono]"); if (!el || !document.body.contains(el)) return; const s = Math.floor((Date.now() - t0) / 1000); el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; setTimeout(tick, 500); };
    tick();
  }

  const carte = h("article", { class: "fiche-question", "aria-labelledby": "enonce" });
  poser(carte, h("div", { class: "onglet-matiere" }, info.nom),
    h("div", { class: "meta-question" },
      h("span", { class: "puce pigment" }, TYPES_LIB[item.type]),
      h("span", { class: "puce" }, statut === "rattrapage" ? "on y revient" : statut === "nouveau" ? "nouvelle graine" : "révision"),
      h("span", { class: "difficulte", title: `Difficulté ${item.difficulte} sur 3`, "aria-label": `Difficulté ${item.difficulte} sur 3` }, ...[1, 2, 3].map(k => h("i", { class: k <= item.difficulte ? "plein" : "" }))),
      e.prefs.tts ? h("button", { class: "btn discret petit", "aria-label": "Écouter la question", onclick: () => lire(texteQuestion(item), { matiere: item.matiere }) }, icone("son")) : null));
  const corps = h("div", { class: "corps-question" });
  poser(carte, corps);

  const majValider = () => { if (boutonValider) boutonValider.disabled = !rendu.pret(); };
  const rendu = RENDUS[item.type](item, corps, { onPret: majValider, onValiderAuto: () => valider() });

  let ligneConfiance = null;
  if (item.type !== "flash" && e.prefs.confiance && ctx.type !== "epreuve") {
    const btns = [[1, "je devine"], [2, "je crois"], [3, "j'en suis sûr"]].map(([v, lib]) => h("button", { type: "button", "aria-pressed": v === confiance ? "true" : "false", onclick: (ev) => { confiance = v; btns.forEach(b => b.setAttribute("aria-pressed", b === ev.currentTarget ? "true" : "false")); } }, lib));
    ligneConfiance = h("div", { class: "confiance", role: "group", "aria-label": "Ta confiance" }, h("span", { class: "main-ecrite" }, "Je suis…"), btns);
  }
  boutonValider = item.type === "flash" ? null : h("button", { class: "btn encre", disabled: true, onclick: () => valider() }, icone("valider"), "Valider");
  const boutonIndice = item.indice && item.type !== "flash" && ctx.type !== "epreuve" ? h("button", { class: "btn discret petit", onclick: () => { indiceUtilise = true; boutonIndice.replaceWith(h("div", { class: "indice" }, icone("indice"), mdEl(item.indice))); } }, icone("indice"), "Un indice ?") : null;
  if (ligneConfiance || boutonValider) poser(carte, h("div", { class: "pied-question" }, ligneConfiance || h("span"), h("div", { class: "rang" }, boutonIndice, boutonValider)));
  majValider();
  poser(zone, carte);

  valider = function () {
    if (repondu) return;
    const reponse = rendu.lire();
    if (reponse === null || reponse === undefined) return;
    repondu = true;
    const dureeMs = Date.now() - debut;
    const res = corriger(item, reponse);
    const dejaRate = (etatItem?.lapses || 0) > 0;
    // Instantané pour pouvoir annuler si l'élève conteste une correction.
    const instantane = JSON.stringify({ item: e.items[item.id] ?? null, comp: e.comp[item.competence] ?? null, jours: e.jours, lumens: e.lumens, gamif: e.gamif });
    const enregistrer = (juste) => {
      const { note, lumens } = enregistrerReponse(app.store, item, { juste, score: juste ? 1 : res.score, confiance, indice: indiceUtilise, dureeMs, autoNote: res.autoNote, rattrapage });
      let g; app.store.maj(x => { g = appliquerEvenement(x, { type: "reponse", juste, difficulte: item.difficulte, matiere: item.matiere, chapitre: item.chapitre, confiance, dejaVu: !!etatItem?.s, rattrapage, lumens }); });
      return { note, lumens: lumens + (g?.lumens || 0), g };
    };
    let r = enregistrer(res.juste);
    session.reponses.push({ id: item.id, juste: res.juste, note: r.note, confiance, dureeMs, rattrapage });
    if (!rattrapage) ctx.resultats[ctx.index] = res.juste;
    ctx.serie = res.juste ? ctx.serie + 1 : 0; ctx.meilleure = Math.max(ctx.meilleure, ctx.serie);
    rendu.montrer(res);
    boutonValider?.remove(); boutonIndice?.remove?.();
    ligneConfiance?.querySelectorAll("button").forEach(b => (b.disabled = true));
    if (res.juste) { sons.juste(); petales(carte); } else { sons.faux(); carte.classList.add("secoue"); }
    poser(carte, h("div", { class: `tampon ${res.juste ? "ok" : "ko"}`, "aria-hidden": "true" }, res.juste ? (res.score < 1 ? "presque" : "juste") : "pas encore"));
    if (!res.juste && !rattrapage && !ctx.rattrapes.has(item.id) && ctx.type !== "diagnostic" && ctx.type !== "epreuve") {
      ctx.rattrapes.add(item.id);
      const copie = Object.create(item); copie._rattrapage = true; file.push(copie);
    }
    const comboNotif = r.g?.notifications?.find(n => n.type === "combo");
    if (comboNotif) toast(h("span", {}, h("strong", {}, `Série ${comboNotif.nom}`), h("br"), `${comboNotif.serie} de suite : lumens ×${comboNotif.multiplicateur}`), { icone: "🔥", classe: "succes", duree: 2600 });
    notifier({ notifications: (r.g?.notifications || []).filter(n => n.type !== "combo") });
    const haut = zone.querySelector(".seance-haut"); haut?.replaceWith(barreProgression(ctx, info));

    const saisieLibre = ["texte", "num", "trous"].includes(item.type);
    const gain = h("span", { class: "gain" }, icone("lumen", { taille: 14 }), `+${r.lumens}`);
    const fb = h("div", { class: `retour ${res.juste ? "ok" : "ko"}`, role: "status" },
      h("p", { class: "voix-lume" }, item.type === "flash" ? (res.juste ? "Bien retrouvé." : "Elle reviendra bientôt.") : retourReponse({ juste: res.juste, confiance, dejaRate })),
      !res.juste || res.score < 1 ? h("div", { class: "attendu" }, h("span", { class: "etiquette" }, "Réponse attendue"), h("div", {}, mdEl(formaterReponseAttendue(item)))) : null,
      res.remarque ? h("p", { class: "remarque" }, icone("info", { taille: 16 }), res.remarque) : null,
      item.explication ? h("div", { class: "explication" }, h("span", { class: "etiquette" }, "Pourquoi"), mdEl(item.explication, "div")) : null,
      h("div", { class: "rang espace", style: { marginTop: "1rem" } },
        h("div", { class: "rang" }, r.lumens ? gain : null,
          !res.juste && saisieLibre && ctx.type !== "epreuve" ? h("button", { class: "btn discret petit", title: "Ta réponse était juste mais écrite autrement ? Signale-le : elle sera comptée juste.", onclick: (ev) => {
            const snap = JSON.parse(instantane);
            app.store.maj(x => { if (snap.item) x.items[item.id] = snap.item; else delete x.items[item.id]; if (snap.comp) x.comp[item.competence] = snap.comp; else delete x.comp[item.competence]; x.jours = snap.jours; x.lumens = snap.lumens; x.gamif = snap.gamif; });
            r = enregistrer(true);
            const rep = session.reponses[session.reponses.length - 1]; rep.juste = true; rep.contestee = true;
            if (!rattrapage) ctx.resultats[ctx.index] = true;
            if (file[file.length - 1]?._rattrapage && file[file.length - 1].id === item.id) { file.pop(); ctx.rattrapes.delete(item.id); }
            ctx.serie = 1;
            app.store.maj(x => { x.contestations = (x.contestations || 0) + 1; });
            ev.currentTarget.replaceWith(h("span", { class: "puce", style: { color: "var(--ok)" } }, icone("valider"), "Compté juste. Merci !"));
            fb.classList.replace("ko", "ok"); carte.querySelector(".tampon")?.replaceWith(h("div", { class: "tampon ok", "aria-hidden": "true" }, "juste"));
            sons.juste();
          } }, icone("contester", { taille: 16 }), "J'avais juste") : null,
          e.prefs.tts && item.explication ? h("button", { class: "btn discret petit", onclick: () => lire(item.explication, { matiere: item.matiere }) }, icone("son", { taille: 16 }), "Écouter") : null),
        h("button", { class: "btn encre", id: "continuer", onclick: () => { ctx.index++; afficherItem(ctx); } }, ctx.index + 1 >= file.length ? "Terminer" : "Continuer", icone("suivant"))));
    poser(carte, fb);
    setTimeout(() => { document.getElementById("continuer")?.focus({ preventScroll: true }); fb.scrollIntoView({ block: "nearest", behavior: "smooth" }); }, 80);
  };

  zone.onkeydown = (ev) => {
    const tag = document.activeElement?.tagName;
    if (ev.key === "Enter" && !ev.shiftKey && tag !== "BUTTON" && tag !== "TEXTAREA" && tag !== "A") {
      if (repondu) { ev.preventDefault(); document.getElementById("continuer")?.click(); }
      else if (rendu.pret()) { ev.preventDefault(); valider(); }
    }
    if (!repondu && /^[1-9]$/.test(ev.key) && tag !== "INPUT") rendu.touche?.(Number(ev.key) - 1);
  };
  setTimeout(() => rendu.focus?.(), 80);
}

/* ---------- Rendus par type ---------- */
function melangerSansIdentite(n, graine) {
  let m = melanger([...Array(n).keys()], graine);
  if (n > 1 && m.every((v, i) => v === i)) m = m.slice(1).concat(m[0]);
  return m;
}
const enonce = (texte) => h("h2", { class: "enonce", id: "enonce" }, mdEl(texte));

const RENDUS = {
  qcm(item, corps, { onPret }) {
    const ordre = melanger(item.choix.map((_, i) => i), hashCode(item.id));
    let choisi = null;
    const boutons = ordre.map((idx, k) => h("button", { class: "choix", "aria-pressed": "false", dataset: { idx }, onclick: () => { choisi = idx; boutons.forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.idx === idx))); onPret(); } },
      h("span", { class: "lettre", "aria-hidden": "true" }, lettre(k)), mdEl(String(item.choix[idx]))));
    poser(corps, enonce(item.q), h("div", { class: "choix-liste", role: "group", "aria-label": "Réponses possibles" }, boutons));
    return { pret: () => choisi !== null, lire: () => choisi, touche: (k) => boutons[k]?.click(),
      montrer: () => boutons.forEach(b => { b.disabled = true; const i = +b.dataset.idx; if (i === item.bonne) b.classList.add("juste"); else if (i === choisi) b.classList.add("faux"); }) };
  },
  vf(item, corps, { onPret }) {
    let choisi = null;
    const faire = (v, lib, ico) => h("button", { class: "choix vf-choix", "aria-pressed": "false", onclick: (ev) => { choisi = v; btns.forEach(b => b.setAttribute("aria-pressed", String(b === ev.currentTarget))); onPret(); } }, icone(ico, { taille: 22 }), lib);
    const btns = [faire(true, "Vrai", "valider"), faire(false, "Faux", "fermer")];
    poser(corps, enonce(item.q), h("div", { class: "vf" }, btns));
    return { pret: () => choisi !== null, lire: () => choisi, touche: (k) => btns[k]?.click(),
      montrer: () => btns.forEach((b, i) => { b.disabled = true; const v = i === 0; if (v === item.reponse) b.classList.add("juste"); else if (v === choisi) b.classList.add("faux"); }) };
  },
  trous(item, corps, { onPret }) {
    const parts = item.texte.split("___"), inputs = [];
    // Phrase arabe : le paragraphe se lit de droite à gauche (blancs compris).
    const premiere = item.texte.match(/[A-Za-zÀ-ÿ\u0600-\u06FF]/)?.[0] || "";
    const p = h("p", { class: "texte-trous", dir: /[\u0600-\u06FF]/.test(premiere) ? "rtl" : null });
    parts.forEach((t, i) => {
      p.append(h("span", { html: md(t) }));
      if (i < parts.length - 1) { const inp = h("input", { class: "trou", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": `Mot manquant ${i + 1}`, oninput: onPret, style: { width: `${Math.max(5, Math.min(16, String(item.reponses[i][0]).length + 2))}ch` } }); inputs.push(inp); p.append(inp); }
    });
    poser(corps, h("p", { class: "consigne" }, "Complète le texte."), p, item.strict ? h("p", { class: "aide" }, "L'orthographe exacte compte ici.") : null);
    return { pret: () => inputs.every(i => i.value.trim()), lire: () => inputs.map(i => i.value), focus: () => inputs[0]?.focus(),
      montrer: (res) => inputs.forEach((inp, i) => { inp.disabled = true; inp.classList.add(res.detail?.[i]?.ok ? "juste" : "faux"); }) };
  },
  ordre(item, corps, { onPret }) {
    let ordre = melangerSansIdentite(item.elements.length, hashCode(item.id) + 7);
    const liste = h("ol", { class: "liste-ordre", "aria-label": "Éléments à ranger ; utilise les flèches ou fais glisser" });
    const dessiner = (focusIdx = null) => {
      remplacer(liste, ...ordre.map((i, k) => {
        const li = h("li", { class: "jeton", dataset: { i, k } },
          h("span", { class: "poignee", "aria-hidden": "true" }, icone("poignee", { taille: 18 })),
          h("span", { class: "rang-num", "aria-hidden": "true" }, String(k + 1)),
          h("span", { class: "texte-jeton" }, mdEl(String(item.elements[i]))),
          h("span", { class: "fleches" },
            h("button", { type: "button", "aria-label": `Monter « ${item.elements[i]} »`, disabled: k === 0, onclick: () => { [ordre[k - 1], ordre[k]] = [ordre[k], ordre[k - 1]]; dessiner(k - 1); } }, icone("haut", { taille: 16 })),
            h("button", { type: "button", "aria-label": `Descendre « ${item.elements[i]} »`, disabled: k === ordre.length - 1, onclick: () => { [ordre[k + 1], ordre[k]] = [ordre[k], ordre[k + 1]]; dessiner(k + 1); } }, icone("bas", { taille: 16 }))));
        glisser(li, liste, () => { ordre = [...liste.children].map(el => +el.dataset.i); dessiner(); });
        return li;
      }));
      if (focusIdx !== null) liste.children[focusIdx]?.querySelector("button:not(:disabled)")?.focus();
      onPret();
    };
    dessiner();
    poser(corps, enonce(item.q), h("p", { class: "aide" }, "Fais glisser les étiquettes, ou utilise les flèches."), liste);
    return { pret: () => true, lire: () => ordre.slice(),
      montrer: () => [...liste.children].forEach((li, k) => { li.classList.add(+li.dataset.i === k ? "juste" : "faux"); li.querySelectorAll("button").forEach(b => (b.disabled = true)); li.classList.add("fige"); }) };
  },
  assoc(item, corps, { onPret }) {
    const n = item.paires.length;
    const ordreD = melangerSansIdentite(n, hashCode(item.id) + 3);
    const liens = new Array(n).fill(null);
    let sel = null;
    const zone = h("div", { class: "assoc" });
    const traits = svg("svg", { class: "traits-assoc", "aria-hidden": "true" });
    const gauche = item.paires.map((p, i) => h("button", { type: "button", class: "choix assoc-g", dataset: { i }, onclick: () => { sel = i; if (liens[i] !== null) liens[i] = null; dessiner(); } }, mdEl(String(p[0])), h("span", { class: "marque" })));
    const droite = ordreD.map(j => h("button", { type: "button", class: "choix assoc-d", dataset: { j }, onclick: () => lier(j) }, mdEl(String(item.paires[j][1])), h("span", { class: "marque" })));
    const lier = (j) => { if (sel === null) return; const deja = liens.indexOf(j); if (deja >= 0) liens[deja] = null; liens[sel] = j; const suivant = liens.indexOf(null); sel = suivant >= 0 ? suivant : null; dessiner(); };
    const couleurs = ["var(--pigment)", "#3d5a99", "#5a8a3a", "#b04a82", "#cc8a24", "#2c7b80"];
    const dessiner = () => {
      gauche.forEach((b, i) => { b.setAttribute("aria-pressed", String(sel === i)); b.classList.toggle("lie", liens[i] !== null); b.style.setProperty("--lien", liens[i] !== null ? couleurs[i % couleurs.length] : ""); b.querySelector(".marque").textContent = liens[i] !== null ? String(i + 1) : ""; b.setAttribute("aria-label", `${item.paires[i][0]}${liens[i] !== null ? ", relié à " + item.paires[liens[i]][1] : ""}`); });
      droite.forEach(b => { const j = +b.dataset.j, i = liens.indexOf(j); b.classList.toggle("lie", i >= 0); b.style.setProperty("--lien", i >= 0 ? couleurs[i % couleurs.length] : ""); b.querySelector(".marque").textContent = i >= 0 ? String(i + 1) : ""; });
      requestAnimationFrame(tracer);
      onPret();
    };
    const tracer = () => {
      const r0 = zone.getBoundingClientRect();
      traits.setAttribute("viewBox", `0 0 ${r0.width} ${r0.height}`);
      remplacer(traits, ...liens.map((j, i) => {
        if (j === null) return null;
        const a = gauche[i].getBoundingClientRect(), b = droite[ordreD.indexOf(j)].getBoundingClientRect();
        const x1 = a.right - r0.left, y1 = a.top + a.height / 2 - r0.top, x2 = b.left - r0.left, y2 = b.top + b.height / 2 - r0.top, mx = (x1 + x2) / 2;
        return svg("path", { d: `M${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`, style: `stroke:${couleurs[i % couleurs.length]}` });
      }).filter(Boolean));
    };
    // Glisser une étiquette de gauche vers une étiquette de droite.
    gauche.forEach((b, i) => b.addEventListener("pointerdown", (ev) => {
      if (ev.button !== 0) return;
      sel = i; dessiner();
      const fin = (ev2) => { document.removeEventListener("pointerup", fin); const cible = document.elementFromPoint(ev2.clientX, ev2.clientY)?.closest(".assoc-d"); if (cible) lier(+cible.dataset.j); };
      document.addEventListener("pointerup", fin);
    }));
    sel = 0;
    poser(zone, traits, h("div", { class: "colonne" }, gauche), h("div", { class: "colonne" }, droite));
    poser(corps, enonce(item.q), h("p", { class: "aide" }, "Touche un élément à gauche puis son partenaire à droite, ou fais glisser de l'un à l'autre."), zone);
    new ResizeObserver(() => tracer()).observe(zone);
    dessiner();
    return { pret: () => liens.every(l => l !== null), lire: () => liens.slice(),
      montrer: () => { gauche.forEach((b, i) => { b.disabled = true; b.classList.add(liens[i] === i ? "juste" : "faux"); }); droite.forEach(b => { b.disabled = true; const j = +b.dataset.j; b.classList.add(liens.indexOf(j) === j ? "juste" : "faux"); }); } };
  },
  num(item, corps, { onPret }) {
    const inp = h("input", { class: "saisie grande", type: "text", inputmode: "decimal", autocomplete: "off", placeholder: "ta réponse", "aria-label": "Ta réponse", oninput: onPret });
    poser(corps, enonce(item.q), h("div", { class: "saisie-ligne" }, inp, item.unite ? h("span", { class: "unite" }, item.unite) : null),
      h("p", { class: "aide" }, item.unite ? `Tu peux écrire l'unité ou non, et convertir si tu veux (par ex. « 3 L » ou « 3000 mL »).` : "Virgule ou point, fraction ou puissance de dix : comme tu préfères."));
    return { pret: () => inp.value.trim() !== "", lire: () => inp.value, focus: () => inp.focus(), montrer: (res) => { inp.disabled = true; inp.classList.add(res.juste ? "juste" : "faux"); } };
  },
  texte(item, corps, { onPret }) {
    const inp = h("input", { class: "saisie grande", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", placeholder: "ta réponse", "aria-label": "Ta réponse", oninput: onPret });
    poser(corps, enonce(item.q), h("div", { class: "saisie-ligne" }, inp), h("p", { class: "aide" }, item.strict ? "L'orthographe exacte compte ici." : "Quelques mots suffisent ; une petite faute de frappe est tolérée."));
    return { pret: () => inp.value.trim() !== "", lire: () => inp.value, focus: () => inp.focus(), montrer: (res) => { inp.disabled = true; inp.classList.add(res.juste ? "juste" : "faux"); } };
  },
  flash(item, corps, { onValiderAuto }) {
    let note = null, retournee = false;
    const carteF = h("div", { class: "carte-flash" },
      h("div", { class: "face recto" }, h("span", { class: "etiquette" }, "Question"), mdEl(item.recto, "div")),
      h("div", { class: "face verso" }, h("span", { class: "etiquette" }, "Réponse"), mdEl(item.verso, "div")));
    const auto = h("div", { class: "auto-eval", role: "group", "aria-label": "Comment c'était ?", hidden: true },
      [[1, "Encore", "oublié"], [2, "Difficile", "avec peine"], [3, "Bien", "retrouvé"], [4, "Facile", "immédiat"]].map(([v, lib, sous]) => h("button", { type: "button", onclick: () => { note = v; onValiderAuto(); } }, h("strong", {}, lib), h("small", {}, sous))));
    const retourner = h("button", { class: "btn encre large", onclick: () => { retournee = true; carteF.classList.add("retournee"); retourner.remove(); auto.hidden = false; auto.querySelector("button")?.focus(); } }, icone("recommencer"), "Retourner la carte");
    poser(corps, h("p", { class: "consigne" }, "Cherche la réponse dans ta tête, puis retourne la carte."), carteF, retourner, auto);
    return { pret: () => note !== null, lire: () => note, touche: (k) => { if (!retournee) retourner.click(); else auto.children[k]?.click(); },
      montrer: () => auto.querySelectorAll("button").forEach((b, i) => { b.disabled = true; if (i + 1 === note) b.classList.add("choisi"); }) };
  },
};

/** Glisser-déposer vertical à la souris, au doigt ou au stylet (pointer events). */
function glisser(li, liste, fin) {
  li.addEventListener("pointerdown", (ev) => {
    if (ev.target.closest("button") || ev.button !== 0) return;
    ev.preventDefault();
    const y0 = ev.clientY, depart = li.getBoundingClientRect().top, hauteur = li.getBoundingClientRect().height;
    let deplace = false;
    li.setPointerCapture(ev.pointerId);
    li.classList.add("saisi");
    const bouger = (e2) => {
      const dy = e2.clientY - y0;
      if (Math.abs(dy) > 4) deplace = true;
      li.style.transform = "";
      const centre = depart + dy + hauteur / 2;
      const prec = li.previousElementSibling, suiv = li.nextElementSibling;
      if (prec) { const r = prec.getBoundingClientRect(); if (centre < r.top + r.height / 2) liste.insertBefore(li, prec); }
      if (suiv) { const r = suiv.getBoundingClientRect(); if (centre > r.top + r.height / 2) liste.insertBefore(li, suiv.nextSibling); }
      const posee = li.getBoundingClientRect().top;
      li.style.transform = `translateY(${depart + dy - posee}px) rotate(-1deg)`;
    };
    const lacher = () => {
      li.removeEventListener("pointermove", bouger); li.removeEventListener("pointerup", lacher); li.removeEventListener("pointercancel", lacher);
      li.classList.remove("saisi"); li.style.transform = "";
      if (deplace) fin();
    };
    li.addEventListener("pointermove", bouger); li.addEventListener("pointerup", lacher); li.addEventListener("pointercancel", lacher);
  });
}

function petales(carte) {
  if (document.documentElement.dataset.animations === "0" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const zone = h("div", { class: "petales", "aria-hidden": "true" });
  for (let i = 0; i < 14; i++) {
    const p = h("i");
    p.style.setProperty("--dx", `${(Math.random() - 0.5) * 260}px`); p.style.setProperty("--dy", `${-60 - Math.random() * 140}px`); p.style.setProperty("--r", `${Math.random() * 540 - 270}deg`); p.style.animationDelay = `${Math.random() * 120}ms`;
    poser(zone, p);
  }
  poser(carte, zone); setTimeout(() => zone.remove(), 1400);
}

function afficherFin(ctx) {
  const { app, session, type } = ctx;
  const zone = document.getElementById("seance");
  const nouveauxSucces = cloreSession(app.store, session);
  const chapitresTouches = [...new Set(session.items.map(i => i.chapitre))].map(id => ctx.modules.flatMap(m => m.chapitres).find(c => c.id === id)).filter(Boolean);
  const reps = session.reponses.filter(r => !r.rattrapage);
  const ok = reps.filter(r => r.juste).length, n = reps.length, taux = n ? ok / n : 0;
  let g, epreuve = null;
  app.store.maj(x => {
    if (type === "epreuve") { g = appliquerEvenement(x, { type: "epreuveFin", chapitre: ctx.chapitre.id, justes: ok, total: n }, Date.now(), { chapitres: chapitresTouches }); epreuve = g.epreuve || g.resultat || null; }
    else g = appliquerEvenement(x, { type: "sessionFin", seance: type, n, ok }, Date.now(), { chapitres: chapitresTouches });
  });
  if (type === "diagnostic" && ctx.modules[0]) app.store.maj(x => { x.chapitres[`diag:${ctx.modules[0].id}`] = Date.now(); });
  const e = app.etat;
  sons.fin();
  notifier(g);
  nouveauxSucces.forEach((s, i) => setTimeout(() => { toast(h("span", {}, h("strong", {}, s.nom), h("br"), s.desc), { icone: s.icone, classe: "succes", duree: 5000 }); sons.succes(); }, 900 + i * 900));

  const uniques = [...new Map(session.items.map(i => [i.id, i])).values()];
  const pousses = uniques.map(it => ({ it, avant: ctx.stadesAvant[it.id] ?? 0, apres: stade(e.items[it.id]) }));
  const grandi = pousses.filter(p => p.apres > p.avant).length;
  const nivApres = niveauDepuisXp(e.gamif.xp);
  const xpGagne = e.gamif.xp - ctx.xpAvant;
  const lumensGagnes = Math.max(0, e.lumens - ctx.lumensAvant);
  const jaugeNiv = h("div", { class: "jauge or", role: "progressbar", "aria-label": "Progression du niveau", "aria-valuenow": Math.round(nivApres.progression * 100) }, h("span", { style: { "--v": `${Math.round((nivApres.niveau > ctx.niveauAvant.niveau ? 0 : ctx.niveauAvant.progression) * 100)}%` } }));
  setTimeout(() => jaugeNiv.firstChild.style.setProperty("--v", `${Math.round(nivApres.progression * 100)}%`), 400);
  const lumeSvg = lume({ humeur: taux >= 0.7 ? "joie" : "encourage" }); lumeSvg.classList.add("lume");
  const quetes = quetesDuJour(e);
  let titre = taux >= 0.8 ? "Belle séance." : taux >= 0.5 ? "Bonne séance." : "Séance exigeante. Bravo d'être resté.";
  if (type === "epreuve") titre = taux >= 0.8 ? "Épreuve réussie !" : "Pas encore cette fois.";

  remplacer(zone, h("div", { class: "feuillet fin-seance" },
    h("p", { class: "etiquette" }, TITRES[type] || "Séance"),
    h("h2", {}, titre),
    h("div", { class: "score" }, h("span", { class: "grand" }, String(ok)), h("span", { class: "sur" }, `/ ${n}`)),
    type === "epreuve" ? h("p", { class: "muet" }, taux >= 0.8 ? "La planche de ce chapitre se pare d'or dans ton herbier." : "Il faut au moins 8 bonnes réponses sur 10. Révise encore un peu : tu peux retenter quand tu veux.") : null,
    h("div", { class: "plantes-fin", "aria-hidden": "true" }, pousses.slice(0, 10).map((p, i) => { const info = MATIERES[p.it.matiere]; const s = plantePetite({ forme: info.plante, couleur: info.couleur, stade: p.apres, graine: p.it.id + e.profil.graine }, 64, { cadre: "sol" }); s.classList.add("pousse-fin"); s.style.setProperty("--i", i); return s; })),
    h("div", { class: "bilan-chiffres" },
      h("div", {}, h("b", {}, String(grandi)), h("span", {}, grandi > 1 ? "plantes ont grandi" : "plante a grandi")),
      h("div", {}, h("b", {}, `+${lumensGagnes}`), h("span", {}, "lumens")),
      h("div", {}, h("b", {}, String(ctx.meilleure)), h("span", {}, "meilleure série")),
      h("div", {}, h("b", {}, duree(Date.now() - session.debut)), h("span", {}, "d'attention"))),
    h("div", { class: "niveau-fin" }, h("div", { class: "rang espace" }, h("span", {}, h("strong", {}, `Niveau ${nivApres.niveau}`), ` · ${nivApres.nom}`), h("span", { class: "tres-muet" }, `+${xpGagne} XP`)), jaugeNiv),
    h("div", { class: "lume-dit", style: { margin: "1.2rem 0", justifyContent: "center" } }, lumeSvg, h("p", { class: "bulle", style: { margin: 0, textAlign: "left" } }, motFin(taux))),
    quetes.length ? h("div", { class: "quetes-fin" }, quetes.map(q => h("span", { class: `puce ${q.progres >= q.objectif ? "encre" : ""}` }, q.progres >= q.objectif ? icone("valider") : null, `${q.libelle} · ${Math.min(q.progres, q.objectif)}/${q.objectif}`))) : null,
    h("div", { class: "rang centre", style: { marginTop: "1.2rem" } },
      type === "epreuve" ? h("a", { class: "btn", href: `#/chapitre/${ctx.chapitre.id}/epreuve` }, "Retour à l'épreuve")
        : ctx.chapitre ? encore(ctx.app, `#/session/decouvrir/${ctx.chapitre.id}`)
        : encore(ctx.app, `#/session/${type}${ctx.modules.length === 1 && type !== "defi" ? "/" + ctx.modules[0].id : ""}`),
      ctx.chapitre ? h("a", { class: "btn", href: `#/chapitre/${ctx.chapitre.id}` }, "Retour au chapitre") : null,
      h("a", { class: "btn", href: "#/jardin" }, icone("jardin"), "Au jardin")),
    h("details", { class: "detail-questions" }, h("summary", {}, "Le détail des questions"),
      h("ol", {}, uniques.map(it => { const r = session.reponses.find(x => x.id === it.id && !x.rattrapage) || session.reponses.find(x => x.id === it.id); const r2 = session.reponses.find(x => x.id === it.id && x.rattrapage);
        return h("li", { class: r?.juste ? "ok" : "ko" }, h("span", { html: md(texteQuestion(it).slice(0, 110) + (texteQuestion(it).length > 110 ? "…" : "")) }), r2 ? h("em", {}, r2.juste ? " — rattrapée" : " — à revoir") : null); })))));
}

function texteQuestion(item) { return item.q || item.texte || item.recto || ""; }
function hashCode(s) { let x = 0; for (const c of String(s)) x = (x * 31 + c.charCodeAt(0)) >>> 0; return x; }

// « Encore une séance » mène souvent à l'adresse de la page en cours : un simple lien ne ferait rien.
function encore(app, href) {
  return h("a", { class: "btn encre", href, onclick: (ev) => { ev.preventDefault(); app.naviguer(href); } }, icone("recommencer"), "Encore une séance");
}

/** Séance sans question (tout est arrosé, ou plus rien de neuf) : on le dit et on propose la suite. */
function seanceVide(type, modules, e) {
  const items = modules.flatMap(m => m.chapitres.flatMap(c => c.items));
  const maintenant = Date.now();
  const prochaine = items.map(it => e.items[it.id]?.due).filter(d => Number.isFinite(d) && d > maintenant).sort((a, b) => a - b)[0];
  const quand = !prochaine ? null : prochaine - maintenant < 3600000 ? "dans moins d'une heure"
    : prochaine - maintenant < 86400000 && new Date(prochaine).getDate() === new Date().getDate() ? `vers ${new Date(prochaine).getHours()} h`
    : new Date(prochaine).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^/, "le ");
  const arroser = type === "arroser";
  const mini = lume({ humeur: "joie" }); mini.classList.add("lume");
  return h("div", { class: "seance" }, h("div", { class: "feuillet fin-seance seance-vide" },
    h("p", { class: "etiquette" }, TITRES[type] || "Séance"),
    mini,
    h("h2", {}, arroser ? "Tout est arrosé !" : "Rien de nouveau ici pour l'instant"),
    h("p", { class: "muet" }, arroser
      ? `Aucune graine n'a soif : ta mémoire a fait son travail. ${quand ? `Les prochaines révisions arriveront ${quand}.` : "Les prochaines révisions viendront au fil des jours."} Réviser trop tôt n'aide pas à retenir : c'est l'oubli léger qui rend le rappel efficace.`
      : "Tu as déjà rencontré toutes les questions disponibles. Reviens plus tard pour les réviser, ou explore un autre chapitre."),
    h("div", { class: "rang", style: { justifyContent: "center", marginTop: "1rem" } },
      h("a", { class: "btn encre", href: "#/atlas" }, icone("graine"), "Découvrir un chapitre"),
      h("a", { class: "btn", href: "#/session/defi" }, icone("eclair"), "Défi éclair"),
      h("a", { class: "btn discret", href: "#/jardin" }, icone("jardin"), "Au jardin"))));
}
