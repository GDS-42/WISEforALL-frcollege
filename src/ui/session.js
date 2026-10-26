// ÉCLORE — La session : là où l'on apprend. Récupération active, confiance, feedback, rattrapage.
import { h, mdEl, md, lettre, toast, pluriel, duree } from "./dom.js";
import { chargerNiveau, chargerModule, trouverChapitre, MATIERES } from "../content.js";
import { construireSession, enregistrerReponse, cloreSession, melanger, stadeChapitre } from "../engine.js";
import { corriger, formaterReponseAttendue, formaterNombre } from "../grader.js";
import { stade } from "../scheduler.js";
import { retourReponse, motFin } from "../mentor.js";
import { sons } from "../audio.js";
import { plantePetite, NOMS_STADES } from "../plants.js";

const TYPES_LIB = { qcm: "Choix", vf: "Vrai ou faux", trous: "À compléter", ordre: "À ranger", assoc: "À associer", num: "Calcul", texte: "Réponse courte", flash: "Carte mémoire" };
const TITRES = { decouvrir: "Découvrir", arroser: "Arroser", defi: "Défi éclair", diagnostic: "Où en suis-je ?" };

export async function ecranSession(main, [type, param], app) {
  const e = app.etat;
  let chapitre = null, modules = [];
  if (type === "decouvrir") {
    chapitre = await trouverChapitre(param);
    if (!chapitre) { main.append(h("p", {}, "Chapitre introuvable.")); return; }
    modules = await chargerNiveau(chapitre.niveau);
  } else if ((type === "arroser" || type === "diagnostic") && param) {
    const [niv, ...reste] = param.split("-");
    const mod = await chargerModule(niv, reste.join("-"));
    modules = mod ? [mod] : [];
  } else {
    modules = (await chargerNiveau(e.profil.niveau)).filter(m => m.matiere !== "espagnol" || e.profil.lv2 !== "aucune");
  }
  const n = type === "defi" ? 10 : type === "diagnostic" ? 14 : Math.max(8, Math.min(16, e.prefs.objectifItems || 12));
  const session = construireSession({ type, etat: e, chapitre, modules, n });
  if (!session.items.length) {
    main.append(h("div", { class: "session" }, h("div", { class: "carte fin-session" }, h("h2", {}, "Rien à arroser pour l'instant"), h("p", { class: "muet" }, "Aucune graine n'a soif. Profites-en pour découvrir un nouveau chapitre."), h("a", { class: "bouton primaire", href: "#/atlas" }, "Ouvrir l'Atlas"))));
    return;
  }
  const stadesAvant = {};
  for (const it of session.items) stadesAvant[it.id] = stade(e.items[it.id]);
  const ctx = { app, session, type, chapitre, modules, index: 0, file: session.items.slice(), rattrapes: new Set(), stadesAvant, debutItem: 0, main };
  main.append(h("div", { class: "session", id: "session" }));
  afficherItem(ctx);
}

function afficherItem(ctx) {
  const { app, session, file } = ctx;
  const zone = document.getElementById("session");
  if (!zone) return;
  zone.replaceChildren();
  if (ctx.index >= file.length) return afficherFin(ctx);
  const item = file[ctx.index];
  const e = app.etat;
  const info = MATIERES[item.matiere];
  const etatItem = e.items[item.id];
  const rattrapage = !!item._rattrapage;
  const statut = rattrapage ? "rattrapage" : etatItem?.s ? "révision" : "nouveau";
  ctx.debutItem = Date.now();
  let confiance = 2, indiceUtilise = false, repondu = false;
  let lireReponse = () => null; // fourni par le rendu du type
  let chrono = null;

  const barre = h("div", { class: "session-barre" },
    h("a", { class: "bouton petit discret", href: ctx.chapitre ? `#/chapitre/${ctx.chapitre.id}` : "#/jardin", "aria-label": "Quitter la session", onclick: () => { if (session.reponses.length) cloreSession(app.store, session); } }, "✕"),
    h("div", { class: "barre", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": file.length, "aria-valuenow": ctx.index }, h("span", { style: { "--v": `${(ctx.index / file.length) * 100}%`, "--c": info.couleur } })),
    h("span", { class: "compteur" }, `${ctx.index + 1} / ${file.length}`),
    ctx.type === "defi" ? (chrono = h("span", { class: "chrono", "aria-label": "Temps écoulé" }, "0:00")) : null);
  if (chrono) {
    const t0 = session.debut;
    const tick = () => { if (!document.body.contains(chrono)) return; const s = Math.floor((Date.now() - t0) / 1000); chrono.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; requestAnimationFrame(() => setTimeout(tick, 250)); };
    tick();
  }

  const meta = h("div", { class: "question-meta" },
    h("span", { class: "puce couleur", style: { "--c": info.couleur } }, info.emoji, " ", info.court),
    h("span", { class: "puce" }, TYPES_LIB[item.type]),
    h("span", { class: "puce", style: statut === "rattrapage" ? { color: "var(--attention)" } : statut === "nouveau" ? { color: "var(--menthe)" } : {} }, statut === "rattrapage" ? "↻ on y revient" : statut === "nouveau" ? "🌱 nouveau" : "💧 révision"),
    h("span", { class: "puce", title: "Difficulté" }, "★".repeat(item.difficulte) + "☆".repeat(3 - item.difficulte)),
    e.prefs.tts ? h("button", { class: "bouton petit discret", "aria-label": "Lire la question à voix haute", onclick: () => lire(texteQuestion(item), item.matiere) }, "🔊") : null);

  const carte = h("div", { class: "carte carte-question" }, meta);
  const corps = h("div", {});
  carte.append(corps);

  // Rendu selon le type (le bouton Valider est déclaré avant, car certains rendus appellent onPret immédiatement).
  let boutonValider = null, valider = null;
  const majValider = () => { if (boutonValider) boutonValider.disabled = !rendu.pret(); };
  const rendu = RENDUS[item.type](item, corps, { onPret: () => majValider(), onValiderAuto: () => valider() });
  lireReponse = rendu.lire;

  // Confiance (jugement d'apprentissage) : optionnelle, simple, non bloquante.
  let ligneConfiance = null;
  if (item.type !== "flash" && e.prefs.confiance) {
    const boutons = [[1, "Je devine"], [2, "Je crois"], [3, "J'en suis sûr"]].map(([v, lib]) => h("button", { type: "button", "aria-pressed": v === confiance ? "true" : "false", onclick: (ev) => { confiance = v; boutons.forEach(b => b.setAttribute("aria-pressed", b === ev.currentTarget ? "true" : "false")); } }, lib));
    ligneConfiance = h("div", { class: "confiance", role: "group", "aria-label": "Ta confiance" }, h("span", { class: "lib" }, "Confiance :"), boutons);
    corps.append(ligneConfiance);
  }

  // Pied : indice + valider
  boutonValider = item.type === "flash" ? null : h("button", { class: "bouton primaire", disabled: true, onclick: () => valider() }, "Valider");
  majValider();
  const boutonIndice = item.indice && item.type !== "flash" ? h("button", { class: "bouton petit discret", onclick: () => { indiceUtilise = true; boutonIndice.replaceWith(h("div", { class: "indice-boite" }, "💡 ", mdEl(item.indice))); } }, "💡 Un indice ?") : null;
  const pied = h("div", { class: "pied-question" }, boutonIndice || h("span"), boutonValider);
  if (boutonValider) carte.append(pied);
  zone.append(barre, carte);

  valider = function () {
    if (repondu) return;
    const reponse = lireReponse();
    if (reponse === null || reponse === undefined) return;
    repondu = true;
    const dureeMs = Date.now() - ctx.debutItem;
    const res = corriger(item, reponse);
    const dejaRate = (etatItem?.lapses || 0) > 0;
    const { note, lumens } = enregistrerReponse(app.store, item, { juste: res.juste, score: res.score, confiance, indice: indiceUtilise, dureeMs, autoNote: res.autoNote, rattrapage });
    session.reponses.push({ id: item.id, juste: res.juste, note, confiance, dureeMs, rattrapage });
    rendu.montrer(res);
    if (boutonValider) boutonValider.remove();
    boutonIndice?.remove?.();
    ligneConfiance?.querySelectorAll("button").forEach(b => (b.disabled = true));
    if (res.juste) sons.juste(); else sons.faux();
    // Rattrapage : une erreur revient en fin de session (une seule fois).
    if (!res.juste && !rattrapage && !ctx.rattrapes.has(item.id) && ctx.type !== "diagnostic") {
      ctx.rattrapes.add(item.id);
      const copie = Object.create(item); copie._rattrapage = true;
      file.push(copie);
    }
    const fb = h("div", { class: `feedback ${res.juste ? "ok" : "ko"}`, role: "status" },
      h("div", { class: "verdict" }, res.juste ? (res.score < 1 ? "Presque !" : "Juste.") : res.score > 0 ? "En partie." : "Pas encore."),
      h("p", { class: "encouragement", style: { marginTop: 0 } }, item.type === "flash" ? "" : retourReponse({ juste: res.juste, confiance, dejaRate })),
      !res.juste || res.score < 1 ? h("div", { class: "attendu" }, "Réponse attendue : ", formaterReponseAttendue(item)) : null,
      item.explication ? h("div", { class: "explication" }, h("span", { class: "etiquette" }, "Pourquoi"), h("div", {}, mdEl(item.explication))) : null,
      lumens ? h("div", { class: "tres-muet", style: { marginTop: ".6rem" } }, `✦ +${lumens} lumen${lumens > 1 ? "s" : ""}`) : null,
      e.prefs.tts && item.explication ? h("button", { class: "bouton petit discret", onclick: () => lire(item.explication, "fr") }, "🔊 Lire l'explication") : null,
      h("div", { class: "rang", style: { marginTop: "1rem", justifyContent: "flex-end" } }, h("button", { class: "bouton primaire", id: "continuer", onclick: () => { ctx.index++; afficherItem(ctx); } }, ctx.index + 1 >= file.length ? "Terminer" : "Continuer →")));
    carte.append(fb);
    setTimeout(() => document.getElementById("continuer")?.focus(), 60);
  };

  // Clavier : Entrée valide / continue ; 1-9 sélectionne un choix.
  zone.onkeydown = (ev) => {
    if (ev.key === "Enter" && !ev.shiftKey && document.activeElement?.tagName !== "BUTTON" && document.activeElement?.tagName !== "TEXTAREA") {
      if (repondu) { ev.preventDefault(); document.getElementById("continuer")?.click(); }
      else if (rendu.pret()) { ev.preventDefault(); valider(); }
    }
    if (!repondu && /^[1-9]$/.test(ev.key) && document.activeElement?.tagName !== "INPUT") rendu.touche?.(Number(ev.key) - 1);
  };
  setTimeout(() => rendu.focus?.(), 60);
}

/* ---------- Rendus par type d'item ---------- */
const RENDUS = {
  qcm(item, corps, { onPret }) {
    const ordre = melanger(item.choix.map((_, i) => i), hashCode(item.id));
    let choisi = null;
    const boutons = ordre.map((idx, k) => h("button", { class: "choix", "aria-pressed": "false", onclick: () => { choisi = idx; boutons.forEach(b => b.setAttribute("aria-pressed", b.dataset.idx == idx ? "true" : "false")); onPret(); }, dataset: { idx } }, h("span", { class: "lettre", "aria-hidden": "true" }, lettre(k)), mdEl(String(item.choix[idx]))));
    corps.append(h("p", { class: "question-texte" }, mdEl(item.q)), h("div", { class: "choix-liste", role: "group", "aria-label": "Réponses" }, boutons));
    return { pret: () => choisi !== null, lire: () => choisi, touche: (k) => boutons[k]?.click(),
      montrer: () => boutons.forEach(b => { b.disabled = true; const i = Number(b.dataset.idx); if (i === item.bonne) b.classList.add("juste"); else if (i === choisi) b.classList.add("faux"); }) };
  },
  vf(item, corps, { onPret }) {
    let choisi = null;
    const faire = (v, lib) => h("button", { class: "choix", "aria-pressed": "false", onclick: () => { choisi = v; boutons.forEach(b => b.setAttribute("aria-pressed", b === (v ? boutons[0] : boutons[1]) ? "true" : "false")); onPret(); } }, lib);
    const boutons = [faire(true, "Vrai"), faire(false, "Faux")];
    corps.append(h("p", { class: "question-texte" }, mdEl(item.q)), h("div", { class: "vf" }, boutons));
    return { pret: () => choisi !== null, lire: () => choisi, touche: (k) => boutons[k]?.click(),
      montrer: () => boutons.forEach((b, i) => { b.disabled = true; const v = i === 0; if (v === item.reponse) b.classList.add("juste"); else if (v === choisi) b.classList.add("faux"); }) };
  },
  trous(item, corps, { onPret }) {
    const parts = item.texte.split("___");
    const inputs = [];
    const p = h("p", { class: "trous-texte" });
    parts.forEach((t, i) => {
      p.append(h("span", { html: md(t) }));
      if (i < parts.length - 1) {
        const inp = h("input", { class: "trou", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": `Trou ${i + 1}`, oninput: onPret, size: Math.max(4, Math.min(16, String(item.reponses[i][0]).length + 1)) });
        inputs.push(inp); p.append(inp);
      }
    });
    corps.append(h("p", { class: "muet petit-texte", style: { marginBottom: ".2rem" } }, "Complète :"), p);
    return { pret: () => inputs.every(i => i.value.trim()), lire: () => inputs.map(i => i.value), focus: () => inputs[0]?.focus(),
      montrer: (res) => inputs.forEach((inp, i) => { inp.disabled = true; inp.classList.add(res.detail?.[i]?.ok ? "juste" : "faux"); if (!res.detail?.[i]?.ok) inp.title = `Attendu : ${item.reponses[i][0]}`; }) };
  },
  ordre(item, corps, { onPret }) {
    const idx = melanger(item.elements.map((_, i) => i), hashCode(item.id) + 7);
    let reserve = idx.slice(), reponse = [];
    const zoneR = h("div", { class: "ordre-liste", "aria-label": "Éléments à ranger" }), zoneA = h("div", { class: "ordre-liste cible", "aria-label": "Ton ordre" });
    const rendre = () => {
      zoneR.replaceChildren(...reserve.map(i => h("button", { class: "jeton", onclick: () => { reserve = reserve.filter(x => x !== i); reponse.push(i); rendre(); } }, h("span", { class: "rang-num" }, "+"), mdEl(String(item.elements[i])))));
      if (!reserve.length) zoneR.append(h("span", { class: "tres-muet", style: { padding: ".3rem .5rem" } }, "Tout est placé. Tu peux encore réordonner."));
      zoneA.replaceChildren(...reponse.map((i, k) => h("div", { class: "jeton", dataset: { i } }, h("span", { class: "rang-num" }, String(k + 1)), mdEl(String(item.elements[i])),
        h("span", { class: "fleches" },
          h("button", { "aria-label": "Monter", disabled: k === 0, onclick: () => { [reponse[k - 1], reponse[k]] = [reponse[k], reponse[k - 1]]; rendre(); } }, "▲"),
          h("button", { "aria-label": "Descendre", disabled: k === reponse.length - 1, onclick: () => { [reponse[k + 1], reponse[k]] = [reponse[k], reponse[k + 1]]; rendre(); } }, "▼"),
          h("button", { "aria-label": "Retirer", onclick: () => { reponse.splice(k, 1); reserve.push(i); rendre(); } }, "✕")))));
      if (!reponse.length) zoneA.append(h("span", { class: "tres-muet", style: { padding: ".3rem .5rem" } }, "Touche les éléments dans le bon ordre."));
      onPret();
    };
    rendre();
    corps.append(h("p", { class: "question-texte" }, mdEl(item.q)), h("div", { class: "ordre-zone" }, zoneA, zoneR));
    return { pret: () => reponse.length === item.elements.length, lire: () => reponse.slice(),
      montrer: () => { zoneA.querySelectorAll(".jeton").forEach((j, k) => { j.classList.add(Number(j.dataset.i) === k ? "juste" : "faux"); j.querySelectorAll("button").forEach(b => (b.disabled = true)); }); zoneR.querySelectorAll("button").forEach(b => (b.disabled = true)); } };
  },
  assoc(item, corps, { onPret }) {
    const n = item.paires.length;
    const ordreD = melanger(item.paires.map((_, i) => i), hashCode(item.id) + 3);
    const liens = new Array(n).fill(null); // gauche i → droite j
    let selG = null;
    const bG = item.paires.map((p, i) => h("button", { class: "choix", "aria-pressed": "false", onclick: () => { if (liens[i] !== null) { liens[i] = null; } selG = i; rendre(); } }, mdEl(String(p[0])), h("span", { class: "marque", style: { visibility: "hidden" } })));
    const bD = ordreD.map(j => h("button", { class: "choix", onclick: () => { if (selG === null) return; const deja = liens.indexOf(j); if (deja >= 0) liens[deja] = null; liens[selG] = j; selG = liens.indexOf(null); rendre(); }, dataset: { j } }, mdEl(String(item.paires[j][1])), h("span", { class: "marque", style: { visibility: "hidden" } })));
    const rendre = () => {
      bG.forEach((b, i) => { b.setAttribute("aria-pressed", selG === i ? "true" : "false"); b.classList.toggle("lie", liens[i] !== null); const m = b.querySelector(".marque"); m.style.visibility = liens[i] !== null ? "visible" : "hidden"; m.textContent = liens[i] !== null ? String(i + 1) : ""; });
      bD.forEach(b => { const j = Number(b.dataset.j); const i = liens.indexOf(j); b.classList.toggle("lie", i >= 0); const m = b.querySelector(".marque"); m.style.visibility = i >= 0 ? "visible" : "hidden"; m.textContent = i >= 0 ? String(i + 1) : ""; });
      onPret();
    };
    selG = 0; rendre();
    corps.append(h("p", { class: "question-texte" }, mdEl(item.q)), h("p", { class: "tres-muet", style: { marginTop: "-.6rem" } }, "Touche un élément à gauche, puis son correspondant à droite."),
      h("div", { class: "assoc" }, h("div", { class: "colonne" }, bG), h("div", { class: "colonne" }, bD)));
    return { pret: () => liens.every(l => l !== null), lire: () => liens.slice(),
      montrer: () => { bG.forEach((b, i) => { b.disabled = true; b.classList.add(liens[i] === i ? "juste" : "faux"); }); bD.forEach(b => { b.disabled = true; const j = Number(b.dataset.j); const i = liens.indexOf(j); b.classList.add(i === j ? "juste" : "faux"); if (i !== j) b.title = `Correspond à : ${item.paires[j][0]}`; }); } };
  },
  num(item, corps, { onPret }) {
    const inp = h("input", { class: "saisie", type: "text", inputmode: "decimal", autocomplete: "off", placeholder: "Ta réponse", "aria-label": "Réponse numérique", oninput: onPret });
    corps.append(h("p", { class: "question-texte" }, mdEl(item.q)), h("div", { class: "saisie-ligne" }, inp, item.unite ? h("span", { class: "unite" }, item.unite) : null),
      h("p", { class: "tres-muet", style: { marginTop: ".4rem" } }, "Virgule ou point, c'est pareil. Pour un négatif, commence par −."));
    return { pret: () => inp.value.trim() !== "", lire: () => inp.value, focus: () => inp.focus(),
      montrer: (res) => { inp.disabled = true; inp.classList.add(res.juste ? "juste" : "faux"); } };
  },
  texte(item, corps, { onPret }) {
    const inp = h("input", { class: "saisie", type: "text", autocomplete: "off", autocapitalize: "off", placeholder: "Ta réponse", "aria-label": "Réponse", oninput: onPret });
    corps.append(h("p", { class: "question-texte" }, mdEl(item.q)), h("div", { class: "saisie-ligne" }, inp),
      h("p", { class: "tres-muet", style: { marginTop: ".4rem" } }, item.strict ? "L'orthographe exacte compte ici." : "Un ou quelques mots suffisent. Une petite coquille est tolérée."));
    return { pret: () => inp.value.trim() !== "", lire: () => inp.value, focus: () => inp.focus(),
      montrer: (res) => { inp.disabled = true; inp.classList.add(res.juste ? "juste" : "faux"); } };
  },
  flash(item, corps, { onValiderAuto }) {
    let note = null, retournee = false;
    const face = h("div", { class: "face recto" }, mdEl(item.recto, "div"));
    const zone = h("div", { class: "flash" }, face);
    const autoEval = h("div", { class: "auto-eval", role: "group", "aria-label": "Comment c'était ?" },
      [[1, "Encore", "oublié"], [2, "Difficile", "retrouvé avec peine"], [3, "Bien", "retrouvé"], [4, "Facile", "immédiat"]].map(([v, lib, sous]) => h("button", { onclick: () => { note = v; onValiderAuto(); } }, lib, h("small", {}, sous))));
    const retourner = h("button", { class: "bouton primaire large", style: { marginTop: "1rem" }, onclick: () => { retournee = true; zone.append(h("div", { class: "face verso" }, mdEl(item.verso, "div"))); retourner.replaceWith(h("p", { class: "muet petit-texte", style: { marginTop: "1rem" } }, "Sois honnête avec toi-même : c'est ce qui rend l'arrosage efficace."), autoEval); } }, "Retourner la carte");
    corps.append(h("p", { class: "tres-muet" }, "Cherche la réponse dans ta tête avant de retourner."), zone, retourner);
    return { pret: () => note !== null, lire: () => note, touche: (k) => { if (!retournee) retourner.click(); else autoEval.children[k]?.click(); },
      montrer: () => autoEval.querySelectorAll("button").forEach((b, i) => { b.disabled = true; if (i + 1 === note) b.style.borderColor = "var(--or)"; }) };
  },
};

function afficherFin(ctx) {
  const { app, session, type } = ctx;
  const zone = document.getElementById("session");
  const nouveauxSucces = cloreSession(app.store, session);
  const e = app.etat;
  const reps = session.reponses.filter(r => !r.rattrapage);
  const ok = reps.filter(r => r.juste).length, n = reps.length;
  const taux = n ? ok / n : 0;
  const lumensSession = reps.reduce((s, r) => s + 1 + (r.juste ? 1 : 0), 0) + 5;
  sons.fin();
  nouveauxSucces.forEach((s, i) => setTimeout(() => { toast(h("span", {}, h("strong", {}, s.nom), h("br"), s.desc), { icone: s.icone, classe: "succes", duree: 5000 }); sons.succes(); }, 900 + i * 900));

  // Plantes qui ont poussé
  const uniques = [...new Map(session.items.map(i => [i.id, i])).values()];
  const pousses = uniques.map(it => ({ it, avant: ctx.stadesAvant[it.id] ?? 0, apres: stade(e.items[it.id]) }));
  const plantesFin = h("div", { class: "plantes-fin", "aria-hidden": "true" }, pousses.map((p, i) => { const info = MATIERES[p.it.matiere]; const s = plantePetite({ forme: info.plante, couleur: info.couleur, stade: p.apres, graine: p.it.id + e.profil.graine }, 40); s.classList.add("pousse-fin"); s.style.setProperty("--i", i); return s; }));
  const grandi = pousses.filter(p => p.apres > p.avant).length;

  const recap = h("div", { class: "recap-liste" }, uniques.map(it => {
    const r = session.reponses.find(x => x.id === it.id);
    const r2 = session.reponses.find(x => x.id === it.id && x.rattrapage);
    return h("div", { class: "ligne" }, h("span", { class: `etat ${r?.juste ? "ok-pt" : "ko-pt"}` }), h("span", { style: { flex: 1 } }, mdEl(texteQuestion(it).slice(0, 90) + (texteQuestion(it).length > 90 ? "…" : ""))), r2 ? h("span", { class: "tres-muet" }, r2.juste ? "↻ rattrapé" : "↻ à revoir") : null);
  }));

  let diagnostic = null;
  if (type === "diagnostic" && ctx.modules[0]) {
    const mod = ctx.modules[0];
    app.store.maj(x => { x.chapitres[`diag:${mod.id}`] = Date.now(); });
    diagnostic = h("div", { class: "carte", style: { textAlign: "left" } }, h("h3", {}, "Ce que ça dit, chapitre par chapitre"),
      mod.chapitres.map(c => { const rs = session.reponses.filter(r => c.items.some(i => i.id === r.id)); const okc = rs.filter(r => r.juste).length;
        return h("div", { class: "competence" }, h("div", { class: "rang espace" }, h("a", { href: `#/chapitre/${c.id}`, style: { color: "inherit", textDecoration: "none" } }, c.titre), h("span", { class: "niv" }, rs.length ? `${okc}/${rs.length}` : "—")), h("div", { class: "barre" }, h("span", { style: { "--v": `${rs.length ? (okc / rs.length) * 100 : 0}%`, "--c": okc === rs.length ? "var(--menthe)" : okc ? "var(--attention)" : "var(--ko)" } }))); }),
      h("p", { class: "tres-muet", style: { marginTop: ".8rem" } }, "Les chapitres en rouge ou orange sont de bons endroits où planter en premier. La difficulté des prochaines questions s'est ajustée à tes réponses."));
  }

  zone.replaceChildren(h("div", { class: "carte fin-session" },
    h("p", { class: "etiquette" }, TITRES[type] || "Session"),
    h("h2", {}, taux >= 0.8 ? "Belle séance." : taux >= 0.5 ? "Bonne séance." : "Séance exigeante. Bravo d'être resté."),
    h("div", { class: "grand-chiffre" }, `${ok} / ${n}`),
    h("p", { class: "muet" }, `${pluriel(grandi, "plante a grandi", "plantes ont grandi")} · ✦ +${lumensSession} lumens · ${duree(Date.now() - session.debut)}`),
    plantesFin,
    h("div", { class: "mentor", style: { textAlign: "left", margin: "1rem 0" } }, h("div", { class: "lume", "aria-hidden": "true" }), h("div", { class: "bulle" }, motFin(taux))),
    h("div", { class: "rang centre" },
      ctx.chapitre ? h("a", { class: "bouton primaire", href: `#/session/decouvrir/${ctx.chapitre.id}` }, "Encore une séance") : h("a", { class: "bouton primaire", href: `#/session/${type}${ctx.modules.length === 1 && type !== "defi" ? "/" + ctx.modules[0].id : ""}` }, "Encore une séance"),
      ctx.chapitre ? h("a", { class: "bouton", href: `#/chapitre/${ctx.chapitre.id}` }, "Retour au chapitre") : null,
      h("a", { class: "bouton", href: "#/jardin" }, "Retour au jardin")),
    h("details", { style: { marginTop: "1.2rem", textAlign: "left" } }, h("summary", { class: "muet", style: { cursor: "pointer" } }, "Le détail des questions"), recap)),
    ...(diagnostic ? [diagnostic] : []));
}

function texteQuestion(item) { return item.q || item.texte || item.recto || ""; }
function hashCode(s) { let x = 0; for (const c of String(s)) x = (x * 31 + c.charCodeAt(0)) >>> 0; return x; }

function lire(texte, matiere) {
  try {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(texte).replace(/\*\*|__|\*/g, "").replace(/___/g, " … "));
    u.lang = matiere === "anglais" ? "en-GB" : matiere === "espagnol" ? "es-ES" : "fr-FR";
    u.rate = 0.95;
    speechSynthesis.speak(u);
  } catch {}
}
