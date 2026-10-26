// ÉCLORE — Un chapitre : trois onglets. Cours illustré, entraînement, épreuve (planche dorée).
import { h, mdEl, pluriel, toast, poser, remplacer } from "./dom.js";
import { icone } from "./icones.js";
import { trouverChapitre, chargerModule, coursDuChapitre, MATIERES, SOCLE } from "../content.js";
import { maitrise, couverture, nbDus, stadeChapitre, contribution } from "../engine.js";
import { paliersElo } from "../adapt.js";
import { plantePetite, NOMS_STADES } from "../plants.js";
import { etatPlanche, epreuveDisponible, appliquerEvenement, verifierPlanches, conditionsPlanche, projectionOuverture, SEUIL_MAITRISE, SEUIL_COMPETENCE, JOURS_MIN, ETENDUE_MIN } from "../gamification.js";
import { cleJournee } from "../store.js";
import { retirerBalises } from "../lecture.js";
import { sons } from "../audio.js";

const NIVEAUX_COMP = ["à découvrir", "en éveil", "en route", "solide", "experte"];

export async function ecranChapitre(main, [chapId, ongletDemande], app) {
  const e = app.etat;
  const c = await trouverChapitre(chapId);
  if (!c) { poser(main, h("p", {}, "Chapitre introuvable.")); return; }
  const [mod, cours] = await Promise.all([chargerModule(c.niveau, c.matiere), coursDuChapitre(c)]);
  // Une planche peut se colorier sans nouvelle réponse (il suffit que les jours passent) : on l'enregistre ici aussi.
  let nouvelles = [];
  app.store.maj(x => { nouvelles = verifierPlanches(x, [c]); });
  if (nouvelles.length) notifier({ notifications: [{ type: "planche", chapitre: c.id, etat: "coloriee" }] });
  const info = MATIERES[c.matiere];
  const idx = mod.chapitres.findIndex(x => x.id === c.id);
  const s = stadeChapitre(c, e), mt = maitrise(c.items, e), cv = couverture(c.items, e), dus = nbDus(c.items, e);
  const planche = etatPlanche(e, c);
  const coursLu = !!e.cours?.[c.id]?.lu;
  const onglet = ongletDemande || (cours && !coursLu && cv < 0.3 ? "cours" : "entrainement");

  const racine = h("div", { style: { "--pigment": info.couleur } });
  poser(main, racine);
  const plante = plantePetite({ forme: info.plante, couleur: info.couleur, stade: s, graine: c.id + e.profil.graine, soif: dus > 3 }, 92, { cadre: "sol" }); plante.classList.add("plante-chap");
  poser(racine, 
    h("nav", { class: "fil", "aria-label": "Fil d'Ariane" }, h("a", { href: "#/jardin" }, "Jardin"), "›", h("a", { href: `#/atlas/${c.niveau}` }, `Atlas ${c.niveau}`), "›", h("a", { href: `#/matiere/${c.niveau}/${c.matiere}` }, info.nom), "›", h("span", { "aria-current": "page" }, `Chapitre ${idx + 1}`)),
    h("header", { class: "chapitre-entete" }, plante,
      h("div", {},
        h("span", { class: "etiquette" }, `${info.nom} · ${c.theme}`),
        h("h1", {}, c.titre),
        h("div", { class: "rang", style: { gap: ".4rem" } },
          h("span", { class: "puce pigment" }, NOMS_STADES[s]),
          h("span", { class: "puce" }, `${Math.round(mt * 100)} % maîtrisé`),
          h("span", { class: "puce" }, pluriel(c.items.length, "question")),
          dus ? h("span", { class: "puce pigment" }, icone("goutte"), pluriel(dus, "révision")) : null,
          planche === "doree" ? h("span", { class: "puce", style: { color: "var(--or)", borderColor: "var(--or)" } }, icone("epreuve"), "Planche dorée")
            : epreuveDisponible(e, c) ? h("a", { class: "puce", href: `#/chapitre/${c.id}/epreuve`, style: { color: "var(--or)", borderColor: "var(--or)" } }, icone("epreuve"), "Épreuve prête") : null))));

  const tabs = [["cours", "livre", "Le cours"], ["entrainement", "crayon", "S'entraîner"], ["epreuve", "epreuve", "L'épreuve"]];
  const barre = h("div", { class: "onglets", role: "tablist", "aria-label": "Parties du chapitre" });
  const panneau = h("div", { role: "tabpanel", tabindex: "-1" });
  poser(racine, barre, panneau);
  const ouvrir = (id, focus = false) => {
    remplacer(barre, ...tabs.map(([t, ico, lib]) => h("button", { role: "tab", id: `onglet-${t}`, "aria-selected": t === id ? "true" : "false", "aria-controls": "panneau-chap", onclick: () => ouvrir(t, true) }, icone(ico), lib)));
    panneau.id = "panneau-chap"; panneau.setAttribute("aria-labelledby", `onglet-${id}`);
    history.replaceState(null, "", `#/chapitre/${c.id}/${id}`);
    remplacer(panneau, );
    if (id === "cours") poser(panneau, vueCours(c, cours, app, () => ouvrir("entrainement", true)));
    else if (id === "entrainement") poser(panneau, vueEntrainement(c, mod, idx, app, { cours, coursLu, cv, dus }));
    else poser(panneau, vueEpreuve(c, app));
    if (focus) panneau.focus({ preventScroll: true });
  };
  ouvrir(onglet);
}

function vueCours(c, cours, app, versEntrainement) {
  if (!cours) return h("div", { class: "feuillet cours-absent" }, h("p", { class: "main-ecrite" }, "Le cours illustré de ce chapitre arrive bientôt."), h("p", { class: "muet" }, "En attendant, la fiche « Je retiens » de l'onglet S'entraîner résume l'essentiel."), h("button", { class: "btn", onclick: versEntrainement }, "S'entraîner", icone("suivant")));
  const zone = h("div", { class: "cours-chargement" }, h("p", { class: "muet" }, "Ouverture du cours…"));
  import("./cours.js").then(({ rendreCours }) => {
    const el = rendreCours(cours, {
      chapitre: c,
      onSection: (index) => app.store.maj(e => {
        const st = e.cours[c.id] || (e.cours[c.id] = { sections: [], verifies: 0 });
        if (!st.sections.includes(index)) st.sections.push(index);
        appliquerEvenement(e, { type: "coursSection", chapitre: c.id, index, total: cours.sections.length });
      }),
      onVerifie: (juste, info = {}) => {
        if (info.essai && info.essai > 1) return; // seul le premier essai compte
        let r;
        app.store.maj(e => { const st = e.cours[c.id] || (e.cours[c.id] = { sections: [], verifies: 0 }); st.verifies++; r = appliquerEvenement(e, { type: "verifieCours", chapitre: c.id, juste }); });
        notifier(r);
      },
      onFin: () => {
        let r, premier = false;
        app.store.maj(e => { const st = e.cours[c.id] || (e.cours[c.id] = { sections: [], verifies: 0 }); premier = !st.lu; st.lu = st.lu || Date.now(); r = appliquerEvenement(e, { type: "coursLu", chapitre: c.id }); });
        if (premier) { sons.pousse(); toast("Cours lu en entier. À toi de jouer !", { icone: "📖", classe: "succes" }); }
        notifier(r);
        versEntrainement();
      },
    });
    zone.replaceWith(el);
    app.enQuittant(() => el.detruire?.());
  }).catch(err => { console.error(err); remplacer(zone, h("p", { class: "muet" }, "Le cours n'a pas pu s'ouvrir.")); });
  return zone;
}

export function notifier(r) {
  for (const n of r?.notifications || []) {
    if (n.type === "niveau") { sons.succes(); toast(h("span", {}, h("strong", {}, `Niveau ${n.niveau} : ${n.nom}`), h("br"), "Ton jardin grandit avec toi."), { icone: "🌿", classe: "succes", duree: 5200 }); }
    else if (n.type === "quete") toast(h("span", {}, h("strong", {}, "Quête accomplie"), h("br"), `${n.libelle} · réclame +${n.recompense} ✦ au jardin`), { icone: "📜", classe: "succes", duree: 4600 });
    else if (n.type === "planche") toast(n.etat === "doree"
      ? h("span", {}, h("strong", {}, "Planche dorée !"), h("br"), "Va la voir dans ton herbier.")
      : h("span", {}, h("strong", {}, "Planche coloriée !"), h("br"), "Ton épreuve dorée s'ouvre demain matin : la nuit va consolider ce que tu sais."), { icone: n.etat === "doree" ? "🏅" : "🌸", classe: "succes", duree: 6500 });
  }
}

function vueEntrainement(c, mod, idx, app, { cours, coursLu, cv, dus }) {
  const e = app.etat;
  const nouveaux = c.items.filter(i => !e.items[i.id]?.s).length;
  const premiere = cv === 0;
  const fiche = h("section", { class: "fiche-retenir ruban" },
    h("div", { class: "rang espace" }, h("h2", { style: { margin: 0, fontSize: "1.4rem" } }, "Je retiens"), h("span", { class: "main-ecrite", style: { color: "var(--pigment-texte)" } }, "l'essentiel")),
    h("ul", {}, c.retenir.map(r => h("li", {}, mdEl(r)))),
    c.exemple ? h("div", { class: "feuillet plat pigmente", style: { marginTop: "1rem", padding: ".8rem 1rem" } }, h("span", { class: "etiquette" }, "Exemple"), mdEl(c.exemple, "div")) : null);
  const lancer = h("section", { class: "feuillet" },
    h("h2", { style: { fontSize: "1.35rem" } }, premiere ? "Première séance" : dus ? "Des graines ont soif" : nouveaux ? "Continuer à planter" : "Consolider"),
    h("p", { class: "muet" }, premiere
      ? "Une douzaine de questions variées, choisies pour toi. On commence doucement, puis on monte. Te tromper est prévu, et même utile."
      : dus ? "On commence par les révisions dues, puis on découvre la suite." : nouveaux ? `Il reste ${pluriel(nouveaux, "question nouvelle", "questions nouvelles")}, mêlées à quelques rappels.` : "Tout est planté. On revient sur ce qui est le plus fragile."),
    cours && !coursLu ? h("p", { class: "petit", style: { display: "flex", gap: ".4rem", alignItems: "center" } }, icone("lecture"), "Conseil : lis le cours avant, tu retiendras mieux.") : null,
    h("div", { class: "rang" },
      h("a", { class: "btn encre large", href: `#/session/decouvrir/${c.id}`, onclick: () => app.store.maj(x => { x.chapitres[c.id] = { ...(x.chapitres[c.id] || {}), fiche: Date.now() }; }) }, icone(premiere ? "graine" : dus ? "goutte" : "crayon"), premiere ? "Planter mes premières graines" : dus ? "Arroser et continuer" : "Continuer"),
      idx + 1 < mod.chapitres.length ? h("a", { class: "btn discret", href: `#/chapitre/${mod.chapitres[idx + 1].id}` }, "Chapitre suivant", icone("suivant")) : null));
  const comps = h("section", { class: "feuillet" },
    h("h3", {}, "Ce que tu sauras faire"),
    c.competences.map(co => {
      const x = e.comp[co.id]; const n = x?.n || 0;
      return h("div", { class: "competence" },
        h("div", { class: "rang espace", style: { flexWrap: "nowrap", alignItems: "baseline" } }, h("span", {}, co.libelle), h("span", { class: "niv" }, n ? NIVEAUX_COMP[paliersElo(x.elo)] : "à découvrir")),
        h("div", { class: "jauge fine" }, h("span", { style: { "--v": `${n ? Math.min(100, Math.max(6, ((x.elo - 900) / 700) * 100)) : 0}%` } })));
    }),
    h("p", { class: "tres-muet", style: { margin: ".8rem 0 0" } }, "Socle commun : ", c.socle.map(d => `${d}. ${SOCLE[d]}`).join(" · ")));
  return h("div", { class: "grille-2" }, h("div", { class: "pile" }, lancer, fiche), comps);
}

function vueEpreuve(c, app) {
  const e = app.etat, maintenant = Date.now();
  const etat = etatPlanche(e, c, maintenant);
  const herbier = e.gamif?.herbier?.[c.id];
  const intro = h("p", {}, "Dix questions qui couvrent toutes les compétences du chapitre, sans aide ni seconde chance. Réussis-en au moins 8 pour dorer la planche de ce chapitre dans ton herbier.");
  const titre = h("h2", {}, etat === "doree" ? "Planche dorée obtenue" : "L'épreuve du chapitre");
  const entrainer = (lib) => h("a", { class: "btn", href: `#/session/decouvrir/${c.id}` }, lib, icone("suivant"));
  const feuillet = (...enfants) => h("section", { class: "feuillet", style: { maxWidth: "640px" } }, titre, intro, ...enfants);

  if (epreuveDisponible(e, c, maintenant)) return feuillet(
    h("a", { class: "btn or large", href: `#/session/epreuve/${c.id}` }, icone("epreuve"), etat === "doree" ? "Rejouer l'épreuve" : "Tenter l'épreuve"),
    etat === "doree" ? null : h("p", { class: "tres-muet petit", style: { marginBottom: 0 } }, "Conseil : passe l'épreuve avant d'arroser, pour mesurer ce qui tient vraiment."));

  // Planche coloriée, épreuve pour la journée suivante (planche coloriée aujourd'hui, ou épreuve tentée aujourd'hui).
  if (herbier?.coloriee) {
    const echec = herbier.dernierEchec && cleJournee(herbier.dernierEchec) === cleJournee(maintenant);
    return feuillet(
      h("p", { class: "muet", style: { display: "flex", gap: ".5rem", alignItems: "flex-start" } }, icone("lune"),
        echec ? "Tu as tenté l'épreuve aujourd'hui. Tu pourras la retenter dès demain : une nuit de sommeil aide ta mémoire à consolider ce que tu viens de revoir."
          : "Planche coloriée ! Ton épreuve s'ouvre demain matin : une nuit de sommeil consolide ce que tu sais."),
      entrainer(echec ? "Revoir le chapitre" : "M'entraîner en attendant"));
  }

  // Pas encore coloriée : ce qui est fait, ce qui manque, et quand l'épreuve devrait s'ouvrir.
  const k = conditionsPlanche(e, c, maintenant);
  const pct = (x) => `${Math.round(x * 100)} %`;
  const condition = (ok, libelle, detail) => h("li", { class: ok ? "ok" : "" },
    h("span", { class: "case", "aria-hidden": "true" }, ok ? icone("valider", { taille: 14 }) : null),
    h("span", {}, h("strong", {}, libelle), h("span", { class: "muet" }, ` · ${detail}`), h("span", { class: "cours-sr" }, ok ? " (fait)" : " (à faire)")));
  const faibles = c.competences.filter(comp => (k.competences.find(x => x.id === comp.id)?.maitrise ?? 0) < SEUIL_COMPETENCE);
  const liste = h("ul", { class: "conditions" },
    condition(k.ok.decouverte, "Toutes les questions découvertes", `${k.vues} sur ${k.total}`),
    condition(k.ok.racines, "Racines du chapitre", `${pct(k.maitrise)} sur ${pct(SEUIL_MAITRISE)}`),
    condition(k.ok.competences, "Chaque compétence enracinée", `${k.competencesOk} sur ${k.competences.length}` + (faibles.length && faibles.length <= 2 ? ` (encore fragile : ${faibles.map(x => x.libelle).join(" ; ")})` : "")),
    condition(k.ok.jours, "Plusieurs journées d'entraînement", `${Math.min(k.jours, JOURS_MIN)} sur ${JOURS_MIN}`),
    condition(k.ok.etendue, "Une semaine depuis ta première séance", k.jours ? `J+${Math.min(k.etendue, ETENDUE_MIN)} sur ${ETENDUE_MIN}` : "pas encore commencé"));

  // Ce qui manque : les questions les moins enracinées, avec leur prochain rendez-vous.
  const texte = (it) => { const t = retirerBalises(it.q || it.texte || it.recto || "").replace(/\*\*|==|\*|_{3,}/g, (m) => (m.startsWith("_") ? "…" : "")).replace(/\s+/g, " ").trim(); return t.length > 80 ? `${t.slice(0, 78)}…` : t; };
  const rendezVous = (it) => {
    const x = e.items[it.id];
    if (!x?.s) return "à découvrir";
    if (x.due <= maintenant) return "à revoir aujourd'hui";
    return `prochaine révision ${new Date(x.due).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}`;
  };
  const manquent = c.items.map(it => ({ it, v: contribution(e.items[it.id], maintenant) })).filter(x => x.v < 0.999).sort((a, b) => a.v - b.v).slice(0, 5);
  const projection = projectionOuverture(e, c, maintenant);
  return feuillet(
    h("p", { class: "muet", style: { display: "flex", gap: ".5rem", alignItems: "center", marginBottom: ".2rem" } }, icone("cadenas"), "L'épreuve s'ouvre le lendemain du jour où ces conditions sont réunies :"),
    liste,
    manquent.length ? h("div", { class: "manque" }, h("p", { class: "etiquette" }, "Ce qui manque surtout"),
      h("ul", {}, manquent.map(({ it }) => h("li", {}, h("span", {}, texte(it)), h("span", { class: "tres-muet" }, ` · ${rendezVous(it)}`))))) : null,
    projection ? h("p", { class: "petit" }, "Si tu fais tes révisions quand elles arrivent, l'épreuve devrait s'ouvrir vers ",
      h("strong", {}, new Date(projection).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })), " (c'est une estimation, pas une promesse).") : null,
    h("p", { class: "tres-muet petit" }, "Pourquoi attendre ? Ta mémoire garde durablement ce que tu retrouves plusieurs jours différents, après une nuit de sommeil : trois journées espacées valent bien mieux que trois répétitions le même jour."),
    entrainer("M'entraîner"));
}
