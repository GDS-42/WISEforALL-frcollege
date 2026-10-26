// ÉCLORE — Le bilan de l'élève : progression visible, calendrier, calibration, succès. Jamais une note : une carte.
import { h, pluriel, duree } from "./dom.js";
import { chargerNiveau, MATIERES } from "../content.js";
import { statsGlobales, calibration, maitrise, couverture } from "../engine.js";
import { SUCCES } from "../succes.js";
import { NOMS_STADES } from "../plants.js";
import { cleJour } from "../store.js";

export async function ecranBilan(main, params, app) {
  const e = app.etat;
  const modules = (await chargerNiveau(e.profil.niveau)).filter(m => m.matiere !== "espagnol" || e.profil.lv2 !== "aucune");
  const tous = modules.flatMap(m => m.chapitres.flatMap(c => c.items));
  const s = statsGlobales(e, tous);
  const cal = calibration(e);

  // Calendrier des 16 dernières semaines
  const jours = [];
  const auj = new Date(); auj.setHours(12);
  for (let i = 16 * 7 - 1; i >= 0; i--) { const d = new Date(auj); d.setDate(d.getDate() - i); jours.push(d); }
  const calendrier = h("div", { class: "calendrier", role: "img", "aria-label": `Activité des 16 dernières semaines : ${s.jours} jours actifs` }, jours.map(d => {
    const j = e.jours[cleJour(d)]; const n = j ? (j.n >= 40 ? 4 : j.n >= 20 ? 3 : j.n >= 10 ? 2 : 1) : 0;
    return h("span", { dataset: { n }, title: `${d.toLocaleDateString("fr-FR")} : ${j ? pluriel(j.n, "question") : "repos"}` });
  }));

  const maxStade = Math.max(1, ...s.stades);
  const stadesEl = h("div", { class: "stades", role: "img", "aria-label": "Répartition des graines par stade" }, s.stades.map((n, i) => h("div", { class: "colonne-stade" }, h("span", { class: "tres-muet" }, String(n)), h("div", { class: "bar", style: { height: `${(n / maxStade) * 80}%`, opacity: 0.35 + i * 0.13 } }), h("span", { class: "lab" }, NOMS_STADES[i]))));

  const libConf = ["Je devine", "Je crois", "J'en suis sûr"];
  const calibEl = h("div", { class: "calibration" }, cal.map((c, i) => h("div", { class: "cas" }, h("div", { class: "tres-muet" }, libConf[i]), h("div", { class: "taux" }, c.taux === null ? "—" : `${Math.round(c.taux * 100)} %`), h("div", { class: "tres-muet" }, c.n ? `de réussite (${c.n})` : "pas encore de données"))));
  let lecture = "Plus tu réponds, plus cette boussole devient précise.";
  if (cal[2].n >= 10 && cal[2].taux < 0.75) lecture = "Quand tu dis « sûr », tu te trompes encore souvent : ralentis une seconde avant de valider, et relis la consigne.";
  else if (cal[2].n >= 10 && cal[2].taux >= 0.9 && cal[0].n >= 5 && cal[0].taux < 0.6) lecture = "Ta boussole est bien réglée : tu sais ce que tu sais, et tu sais ce que tu devines. C'est une force rare.";
  else if (cal[0].n >= 10 && cal[0].taux >= 0.75) lecture = "Tu « devines » souvent juste : tu en sais plus que tu ne le crois. Ose dire « je crois ».";

  main.append(
    h("h1", {}, "Mon bilan"),
    h("div", { class: "rituel", style: { marginBottom: "1rem" } },
      stat(s.vus, "graines plantées", `sur ${s.total}`), stat(`${Math.round(s.taux * 100)} %`, "de réussite", pluriel(s.tentatives, "réponse")),
      stat(s.jours, "jours actifs", `record : ${e.serie.record} de suite`), stat(s.minutes, "minutes d'attention", "cumulées")),
    h("div", { class: "grille-2" },
      h("div", { class: "carte" }, h("h3", {}, "Mon calendrier"), calendrier, h("p", { class: "tres-muet", style: { marginTop: ".6rem", marginBottom: 0 } }, "Une case par jour. La régularité compte plus que la quantité.")),
      h("div", { class: "carte" }, h("h3", {}, "Mes graines, par stade"), stadesEl, h("p", { class: "tres-muet", style: { marginTop: ".6rem", marginBottom: 0 } }, `${s.dus ? pluriel(s.dus, "plante a", "plantes ont") + " soif aujourd'hui." : "Rien n'a soif aujourd'hui."}`))),
    h("div", { class: "carte", style: { marginTop: "1rem" } },
      h("h3", {}, "Ma boussole (savoir ce que je sais)"), calibEl, h("p", { class: "muet", style: { marginTop: ".8rem", marginBottom: 0 } }, lecture)),
    h("div", { class: "carte", style: { marginTop: "1rem" } },
      h("h3", {}, "Par matière"),
      modules.map(m => { const info = MATIERES[m.matiere]; const items = m.chapitres.flatMap(c => c.items); const mt = maitrise(items, e), cv = couverture(items, e);
        return h("a", { class: "competence", href: `#/matiere/${m.niveau}/${m.matiere}`, style: { textDecoration: "none", color: "inherit" } }, h("div", { class: "rang espace" }, h("span", { class: "lib" }, info.emoji, " ", info.nom), h("span", { class: "niv" }, `${Math.round(mt * 100)} % · ${Math.round(cv * 100)} % exploré`)), h("div", { class: "barre" }, h("span", { style: { "--v": `${Math.round(mt * 100)}%`, "--c": info.couleur } }))); })),
    h("div", { class: "carte", style: { marginTop: "1rem" } },
      h("h3", {}, "Mes succès"),
      h("div", { class: "succes-grille" }, SUCCES.map(su => h("div", { class: `badge ${e.succes[su.id] ? "obtenu" : "verrou"}`, title: su.desc }, h("div", { class: "ico", "aria-hidden": "true" }, su.icone), h("div", { class: "nom" }, su.nom), h("div", { class: "desc" }, su.desc))))),
    h("p", { class: "tres-muet", style: { marginTop: "1rem" } }, "Un adulte (parent, professeur) peut consulter un bilan détaillé et exporter tes progrès depuis ", h("a", { href: "#/adulte" }, "l'espace adulte"), "."));
}

function stat(valeur, libelle, sous = "") {
  return h("div", { class: "stat" }, h("div", { class: "valeur" }, String(valeur)), h("div", { class: "libelle" }, libelle), sous ? h("div", { class: "tres-muet" }, sous) : null);
}
