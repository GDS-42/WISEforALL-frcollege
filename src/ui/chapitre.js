// ÉCLORE — Un chapitre : trois onglets. Cours illustré, entraînement, épreuve (planche dorée).
import { h, mdEl, pluriel, toast, poser, remplacer } from "./dom.js";
import { icone } from "./icones.js";
import { trouverChapitre, chargerModule, coursDuChapitre, MATIERES, SOCLE } from "../content.js";
import { maitrise, couverture, nbDus, stadeChapitre } from "../engine.js";
import { paliersElo } from "../adapt.js";
import { plantePetite, NOMS_STADES } from "../plants.js";
import { etatPlanche, epreuveDisponible, appliquerEvenement } from "../gamification.js";
import { sons } from "../audio.js";

const NIVEAUX_COMP = ["à découvrir", "en éveil", "en route", "solide", "experte"];

export async function ecranChapitre(main, [chapId, ongletDemande], app) {
  const e = app.etat;
  const c = await trouverChapitre(chapId);
  if (!c) { poser(main, h("p", {}, "Chapitre introuvable.")); return; }
  const [mod, cours] = await Promise.all([chargerModule(c.niveau, c.matiere), coursDuChapitre(c)]);
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
          planche === "doree" ? h("span", { class: "puce", style: { color: "var(--or)", borderColor: "var(--or)" } }, icone("epreuve"), "Planche dorée") : null))));

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
    else if (n.type === "planche") toast(h("span", {}, h("strong", {}, n.etat === "doree" ? "Planche dorée !" : "Nouvelle planche dans l'herbier"), h("br"), "Va la voir dans ton herbier."), { icone: n.etat === "doree" ? "🏅" : "🌸", classe: "succes", duree: 5200 });
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
  const e = app.etat;
  const etat = etatPlanche(e, c);
  const dispo = epreuveDisponible(e, c);
  return h("section", { class: "feuillet", style: { maxWidth: "640px" } },
    h("h2", {}, etat === "doree" ? "Planche dorée obtenue" : "L'épreuve du chapitre"),
    h("p", {}, "Dix questions qui couvrent toutes les compétences du chapitre, sans aide ni seconde chance. Réussis-en au moins 8 pour dorer la planche de ce chapitre dans ton herbier."),
    dispo
      ? h("a", { class: "btn or large", href: `#/session/epreuve/${c.id}` }, icone("epreuve"), etat === "doree" ? "Rejouer l'épreuve" : "Tenter l'épreuve")
      : h("div", {}, h("p", { class: "muet", style: { display: "flex", gap: ".5rem", alignItems: "center" } }, icone("cadenas"), "L'épreuve s'ouvre quand la planche de ce chapitre est coloriée : environ 60 % de maîtrise et 80 % des questions rencontrées."), h("a", { class: "btn", href: `#/session/decouvrir/${c.id}` }, "M'entraîner d'abord", icone("suivant"))));
}
