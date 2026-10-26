// ÉCLORE — Espace adulte : évaluabilité. Maîtrise par chapitre et par compétence, socle commun, export, impression.
import { h, pluriel, duree, dateCourte, poser, remplacer } from "./dom.js";
import { chargerNiveau, MATIERES, SOCLE, NIVEAUX } from "../content.js";
import { maitrise, couverture, nbDus, calibration, statsGlobales } from "../engine.js";
import { paliersElo } from "../adapt.js";
import { telecharger, boutonsExport } from "./sauvegarde.js";
import { modulesVisibles } from "./jardin.js";

const PALIERS = ["non évalué", "fragile", "en cours", "satisfaisant", "très bonne maîtrise"];

export async function ecranAdulte(main, params, app) {
  const e = app.etat;
  let niveau = e.profil.niveau;
  const conteneur = h("div");
  poser(main, 
    h("div", { class: "entete-page pas-impression" },
      h("div", {}, h("span", { class: "etiquette" }, "Parents et professeurs"), h("h1", { style: { margin: ".1rem 0 .3rem" } }, "Espace adulte"), h("p", { class: "muet", style: { margin: 0 } }, `Bilan de ${e.profil.prenom} (${e.profil.niveau}). Les données restent sur cet appareil.`)),
      h("div", { class: "rang", style: { marginLeft: "auto" } },
        h("button", { class: "btn", onclick: () => window.print() }, "Imprimer"),
        ...boutonsExport(app, { libelle: "Sauvegarde (JSON)" }),
        h("button", { class: "btn", onclick: async () => telecharger(`eclore-${e.profil.prenom}-maitrise.csv`, await csv(e), "text/csv") }, "Exporter (CSV)"),
        h("a", { class: "btn", href: "#/reglages" }, "Reprendre un fichier"))),
    conteneur);

  async function rendre() {
    const modules = modulesVisibles(await chargerNiveau(niveau), e);
    const tous = modules.flatMap(m => m.chapitres.flatMap(c => c.items));
    const s = statsGlobales(e, tous);
    const cal = calibration(e);
    // Socle commun : agrège la maîtrise des chapitres par domaine.
    const socle = {};
    for (const m of modules) for (const c of m.chapitres) { const mt = maitrise(c.items, e), cv = couverture(c.items, e); for (const d of c.socle) { socle[d] = socle[d] || { somme: 0, n: 0, vus: 0 }; socle[d].somme += mt; socle[d].n++; if (cv > 0) socle[d].vus++; } }
    const tableSocle = h("table", { class: "tableau" }, h("thead", {}, h("tr", {}, h("th", {}, "Domaine du socle"), h("th", {}, "Chapitres abordés"), h("th", {}, "Maîtrise moyenne"))),
      h("tbody", {}, Object.keys(SOCLE).map(d => { const x = socle[d] || { somme: 0, n: 0, vus: 0 }; const mt = x.n ? x.somme / x.n : 0; return h("tr", {}, h("td", {}, `${d}. ${SOCLE[d]}`), h("td", { class: "num" }, `${x.vus} / ${x.n}`), h("td", {}, cellule(mt, x.vus === 0))); })));

    const parMatiere = modules.map(m => {
      const info = MATIERES[m.matiere];
      const lignes = m.chapitres.map((c, i) => {
        const mt = maitrise(c.items, e), cv = couverture(c.items, e), dus = nbDus(c.items, e);
        const n = c.items.reduce((a, it) => a + (e.items[it.id]?.n || 0), 0), ok = c.items.reduce((a, it) => a + (e.items[it.id]?.ok || 0), 0);
        const comps = c.competences.map(co => { const x = e.comp[co.id]; return h("div", { class: "petit", style: { display: "flex", gap: ".5rem", alignItems: "center" } }, cellule(x ? (paliersElo(x.elo) + 1) / 5 : 0, !x, x ? PALIERS[paliersElo(x.elo)] : PALIERS[0]), h("span", {}, co.libelle)); });
        return h("tr", {}, h("td", {}, h("strong", {}, `${i + 1}. ${c.titre}`), h("div", { class: "tres-muet" }, c.theme), h("details", { class: "pas-impression" }, h("summary", { class: "tres-muet", style: { cursor: "pointer" } }, pluriel(c.competences.length, "compétence")), h("div", { style: { display: "grid", gap: ".3rem", marginTop: ".3rem" } }, comps)), h("div", { style: { display: "none" } }, comps.map(x => x.cloneNode(true)))),
          h("td", {}, cellule(mt, cv === 0)), h("td", { class: "num" }, `${Math.round(cv * 100)} %`), h("td", { class: "num" }, n ? `${ok}/${n}` : "—"), h("td", { class: "num" }, dus || "—"));
      });
      const items = m.chapitres.flatMap(c => c.items);
      return h("div", { class: "feuillet", style: { marginTop: "1rem" } },
        h("div", { class: "rang espace" }, h("h3", { style: { margin: 0 } }, info.nom), h("span", { class: "muet" }, `maîtrise ${Math.round(maitrise(items, e) * 100)} % · exploré ${Math.round(couverture(items, e) * 100)} %`)),
        h("div", { class: "tableau-wrap" }, h("table", { class: "tableau" }, h("thead", {}, h("tr", {}, h("th", {}, "Chapitre"), h("th", {}, "Maîtrise"), h("th", {}, "Exploré"), h("th", {}, "Réussites"), h("th", {}, "À revoir"))), h("tbody", {}, lignes))));
    });

    const dernieres = [...e.journal].reverse().slice(0, 12);
    remplacer(conteneur, 
      h("div", { class: "rang pas-impression", style: { marginBottom: "1rem" } }, h("span", { class: "muet" }, "Niveau :"), h("div", { class: "segments" }, NIVEAUX.map(n => h("button", { "aria-pressed": n === niveau ? "true" : "false", onclick: () => { niveau = n; rendre(); } }, n)))),
      h("div", { class: "stats" },
        stat(`${s.vus} / ${s.total}`, "questions abordées"), stat(`${Math.round(s.taux * 100)} %`, "réussite globale", pluriel(s.tentatives, "réponse")),
        stat(s.jours, "jours actifs", `série : ${e.serie.actuelle} (record ${e.serie.record})`), stat(duree(s.minutes * 60000), "temps d'attention")),
      h("div", { class: "feuillet", style: { marginTop: "1rem" } },
        h("h3", {}, "Comment lire ce bilan"),
        h("p", { class: "petit muet", style: { marginBottom: 0 } }, "La « maîtrise » n'est pas une note : c'est une estimation de ce dont l'élève se souviendra aujourd'hui, pondérée par la solidité de la mémoire (modèle FSRS de répétition espacée). « Exploré » indique la part du chapitre déjà rencontrée. Les compétences sont estimées par un modèle adaptatif (Elo) : « fragile » signale un besoin d'étayage, « très bonne maîtrise » une autonomie réelle. La « boussole » mesure la lucidité de l'élève sur ses propres connaissances (métacognition).")),
      h("div", { class: "feuillet", style: { marginTop: "1rem" } }, h("h3", {}, "Socle commun de connaissances, de compétences et de culture"), h("div", { class: "tableau-wrap" }, tableSocle)),
      h("div", { class: "feuillet", style: { marginTop: "1rem" } }, h("h3", {}, "Métacognition (boussole)"),
        h("div", { class: "calibration" }, ["Je devine", "Je crois", "J'en suis sûr"].map((l, i) => h("div", { class: "cas" }, h("div", { class: "tres-muet" }, l), h("div", { class: "taux" }, cal[i].taux === null ? "—" : `${Math.round(cal[i].taux * 100)} %`), h("div", { class: "tres-muet" }, pluriel(cal[i].n, "réponse")))))),
      ...parMatiere,
      h("div", { class: "feuillet", style: { marginTop: "1rem" } }, h("h3", {}, "Dernières séances"),
        dernieres.length ? h("div", { class: "tableau-wrap" }, h("table", { class: "tableau" }, h("thead", {}, h("tr", {}, h("th", {}, "Date"), h("th", {}, "Type"), h("th", {}, "Matières"), h("th", {}, "Réussite"), h("th", {}, "Durée"))),
          h("tbody", {}, dernieres.map(j => h("tr", {}, h("td", {}, dateCourte(j.t)), h("td", {}, j.type), h("td", {}, (j.matieres || []).map(m => MATIERES[m]?.court || m).join(", ")), h("td", { class: "num" }, `${j.ok}/${j.n}`), h("td", { class: "num" }, duree(j.duree))))))) : h("p", { class: "muet" }, "Aucune séance pour l'instant.")),
      h("div", { class: "feuillet pas-impression", style: { marginTop: "1rem" } },
        h("h3", {}, "Pistes pour accompagner"),
        h("ul", { class: "petit muet" },
          h("li", {}, "Dix à quinze minutes par jour valent mieux qu'une heure le dimanche : l'oubli se combat par le retour régulier."),
          h("li", {}, "Demandez à l'élève d'expliquer une réponse à voix haute : c'est l'élaboration, un des leviers les plus puissants."),
          h("li", {}, "Les chapitres « fragiles » ne sont pas des échecs : ce sont les meilleurs endroits où investir."),
          h("li", {}, "Le « Défi éclair » prépare au format du brevet (questions mêlées, temps visible) sans pression de note."))));
  }
  await rendre();
}

function cellule(v, vide = false, titre = null) {
  const cls = vide ? "m0" : v < 0.3 ? "m1" : v < 0.55 ? "m2" : v < 0.8 ? "m3" : "m4";
  return h("span", { class: `cellule-maitrise ${cls}`, title: titre || "" }, vide ? "—" : titre || `${Math.round(v * 100)} %`);
}
function stat(valeur, libelle, sous = "") { return h("div", { class: "stat" }, h("div", { class: "valeur" }, String(valeur)), h("div", { class: "libelle" }, libelle), sous ? h("div", { class: "tres-muet" }, sous) : null); }


async function csv(e) {
  const modules = modulesVisibles(await chargerNiveau(e.profil.niveau), e);
  const lignes = [["niveau", "matiere", "chapitre", "theme", "maitrise_pct", "explore_pct", "reponses", "reussites", "a_revoir"]];
  for (const m of modules) for (const c of m.chapitres) {
    const n = c.items.reduce((a, it) => a + (e.items[it.id]?.n || 0), 0), ok = c.items.reduce((a, it) => a + (e.items[it.id]?.ok || 0), 0);
    lignes.push([m.niveau, MATIERES[m.matiere].nom, c.titre, c.theme, Math.round(maitrise(c.items, e) * 100), Math.round(couverture(c.items, e) * 100), n, ok, nbDus(c.items, e)]);
  }
  return "﻿" + lignes.map(l => l.map(v => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\n");
}
