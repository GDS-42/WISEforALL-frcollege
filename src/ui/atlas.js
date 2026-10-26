// ÉCLORE — L'atlas : les matières d'un niveau, puis les chapitres d'une matière.
import { h, pluriel } from "./dom.js";
import { chargerNiveau, chargerModule, MATIERES, NIVEAUX } from "../content.js";
import { maitrise, couverture, nbDus, stadeChapitre } from "../engine.js";
import { plantePetite, NOMS_STADES } from "../plants.js";

export async function ecranAtlas(main, [niveauParam], app) {
  const e = app.etat;
  const niveau = NIVEAUX.includes(niveauParam) ? niveauParam : e.profil.niveau;
  const modules = (await chargerNiveau(niveau)).filter(m => m.matiere !== "espagnol" || e.profil.lv2 !== "aucune" || niveau !== e.profil.niveau);
  main.append(
    h("div", { class: "entete-page" },
      h("div", {}, h("h1", {}, "L'Atlas"), h("p", { class: "muet", style: { margin: 0 } }, "Chaque matière est une parcelle du jardin. Choisis où planter.")),
      h("div", { class: "segments", role: "tablist", "aria-label": "Niveau", style: { marginLeft: "auto" } },
        NIVEAUX.map(n => h("button", { role: "tab", "aria-pressed": n === niveau ? "true" : "false", onclick: () => app.naviguer(`#/atlas/${n}`) }, n)))),
    niveau !== e.profil.niveau ? h("p", { class: "petit-texte muet" }, `Tu explores le programme de ${niveau}. Ton niveau de référence reste la ${e.profil.niveau} : tout ce que tu travailles ici compte aussi.`) : null,
    h("div", { class: "grille" }, modules.map(m => carteMatiere(m, e))));
}

function carteMatiere(m, e) {
  const info = MATIERES[m.matiere];
  const items = m.chapitres.flatMap(c => c.items);
  const mt = maitrise(items, e), cv = couverture(items, e), dus = nbDus(items, e);
  return h("a", { class: "matiere-carte", href: `#/matiere/${m.niveau}/${m.matiere}`, style: { "--c": info.couleur } },
    h("div", { class: "icone", "aria-hidden": "true" }, info.emoji),
    h("div", { class: "corps" },
      h("div", { class: "titre" }, info.nom),
      h("div", { class: "sous" }, `${pluriel(m.chapitres.length, "chapitre")} · ${pluriel(items.length, "question")}${dus ? ` · 💧 ${dus}` : ""}`),
      h("div", { class: "barre", style: { marginTop: ".5rem" } }, h("span", { style: { "--v": `${Math.round(mt * 100)}%`, "--c": info.couleur } }))),
    h("div", { class: "tres-muet", style: { textAlign: "right", minWidth: "3.5rem" } }, `${Math.round(mt * 100)} %`, h("br"), h("span", { style: { fontSize: ".75rem" } }, `${Math.round(cv * 100)} % vu`)));
}

export async function ecranMatiere(main, [niveau, matiere], app) {
  const e = app.etat;
  const mod = await chargerModule(niveau, matiere);
  if (!mod) { main.append(h("p", {}, "Cette matière n'existe pas pour ce niveau.")); return; }
  const info = MATIERES[matiere];
  const items = mod.chapitres.flatMap(c => c.items);
  const mt = maitrise(items, e), dus = nbDus(items, e);
  const diag = e.chapitres[`diag:${mod.id}`];
  main.append(
    h("nav", { class: "fil", "aria-label": "Fil d'Ariane" }, h("a", { href: "#/jardin" }, "Jardin"), "›", h("a", { href: `#/atlas/${niveau}` }, `Atlas ${niveau}`), "›", h("span", {}, info.nom)),
    h("div", { class: "entete-page", style: { "--c": info.couleur } },
      h("div", { class: "icone-grande", "aria-hidden": "true" }, info.emoji),
      h("div", { style: { flex: 1, minWidth: "240px" } },
        h("h1", { style: { marginBottom: ".2rem" } }, info.nom, " ", h("span", { class: "muet", style: { fontSize: ".6em" } }, niveau)),
        h("p", { class: "muet", style: { margin: 0, fontStyle: "italic", fontFamily: "var(--police-titre)" } }, mod.intro || "")),
      h("div", { class: "rang" },
        dus ? h("a", { class: "bouton menthe", href: `#/session/arroser/${mod.id}` }, `💧 Arroser (${dus})`) : null,
        h("a", { class: "bouton", href: `#/session/diagnostic/${mod.id}`, title: "Une question ou deux par chapitre pour situer ton niveau et ajuster la difficulté" }, diag ? "🧭 Refaire le positionnement" : "🧭 Où en suis-je ?"))),
    h("div", { class: "carte", style: { marginBottom: "1rem" } },
      h("div", { class: "rang espace" }, h("strong", {}, `Maîtrise globale : ${Math.round(mt * 100)} %`), h("span", { class: "tres-muet" }, `${pluriel(items.length, "question")} · ${pluriel(mod.chapitres.length, "chapitre")}`)),
      h("div", { class: "barre", style: { marginTop: ".5rem" } }, h("span", { style: { "--v": `${Math.round(mt * 100)}%`, "--c": info.couleur } }))),
    h("div", { style: { display: "flex", flexDirection: "column", gap: ".6rem" } }, mod.chapitres.map((c, i) => carteChapitre(c, i, e, info))));
}

function carteChapitre(c, i, e, info) {
  const s = stadeChapitre(c, e), mt = maitrise(c.items, e), cv = couverture(c.items, e), dus = nbDus(c.items, e);
  return h("a", { class: "chapitre-carte", href: `#/chapitre/${c.id}` },
    h("span", { class: "num", "aria-hidden": "true" }, String(i + 1).padStart(2, "0")),
    h("div", { class: "mini-plante", "aria-hidden": "true" }, plantePetite({ forme: info.plante, couleur: info.couleur, stade: s, graine: c.id + e.profil.graine, soif: dus > 3 }, 40)),
    h("div", { class: "corps" },
      h("div", { class: "titre" }, c.titre),
      h("div", { class: "meta" }, h("span", {}, c.theme), h("span", {}, NOMS_STADES[s]), cv > 0 ? h("span", {}, `${Math.round(mt * 100)} % · ${Math.round(cv * 100)} % vu`) : h("span", {}, `${pluriel(c.items.length, "question")}`), dus ? h("span", { style: { color: "var(--menthe)" } }, `💧 ${dus}`) : null)),
    h("span", { class: "muet", "aria-hidden": "true" }, "›"));
}
