// ÉCLORE — L'Atlas : les matières d'un niveau (planches), puis le parcours des chapitres d'une matière.
import { h, svg, pluriel, poser, remplacer } from "./dom.js";
import { icone } from "./icones.js";
import { chargerNiveau, chargerModule, chargerCours, MATIERES, NIVEAUX } from "../content.js";
import { maitrise, couverture, nbDus, stadeChapitre } from "../engine.js";
import { plantePetite, NOMS_STADES } from "../plants.js";
import { embleme } from "./illustrations.js";
import { etatPlanche } from "../gamification.js";
import { modulesVisibles } from "./jardin.js";

export async function ecranAtlas(main, [niveauParam], app) {
  const e = app.etat;
  const niveau = NIVEAUX.includes(niveauParam) ? niveauParam : e.profil.niveau;
  let modules = await chargerNiveau(niveau);
  if (niveau === e.profil.niveau) modules = modulesVisibles(modules, e);
  poser(main, 
    h("div", { class: "entete-page" },
      h("div", { style: { flex: 1, minWidth: "240px" } }, h("span", { class: "etiquette" }, `Programme de ${niveau}`), h("h1", { style: { margin: ".1rem 0 0" } }, "L'Atlas"), h("p", { class: "intro" }, "Chaque matière est une parcelle du jardin. Choisis où planter.")),
      h("div", { class: "segments", role: "group", "aria-label": "Niveau" }, NIVEAUX.map(n => h("button", { "aria-pressed": n === niveau ? "true" : "false", onclick: () => app.naviguer(`#/atlas/${n}`) }, n)))),
    niveau !== e.profil.niveau ? h("p", { class: "petit muet" }, `Tu explores la ${niveau}. Ta classe de référence reste la ${e.profil.niveau} ; tout ce que tu travailles ici compte aussi.`) : null,
    h("div", { class: "grille" }, modules.map((m, i) => planche(m, e, i))));
}

function planche(m, e, i) {
  const info = MATIERES[m.matiere];
  const items = m.chapitres.flatMap(c => c.items);
  const mt = maitrise(items, e), cv = couverture(items, e), dus = nbDus(items, e);
  const em = embleme(m.matiere, 64); em.classList.add("embleme");
  return h("a", { class: "planche-matiere apparait", style: { "--pigment": info.couleur, animationDelay: `${i * 40}ms` }, href: `#/matiere/${m.niveau}/${m.matiere}` },
    em,
    h("div", {}, h("div", { class: "nom" }, info.nom), h("div", { class: "meta" }, `${pluriel(m.chapitres.length, "chapitre")} · ${pluriel(items.length, "question")}`)),
    h("div", { class: "bas" },
      h("div", { class: "jauge fine", role: "progressbar", "aria-label": `Maîtrise de ${info.nom}`, "aria-valuenow": Math.round(mt * 100), "aria-valuemin": 0, "aria-valuemax": 100 }, h("span", { style: { "--v": `${Math.round(mt * 100)}%` } })),
      h("span", {}, `${Math.round(mt * 100)} %`),
      dus ? h("span", { class: "soif", title: "Révisions à faire" }, icone("goutte", { taille: 14 }), String(dus)) : cv === 0 ? h("span", { class: "tres-muet" }, "à découvrir") : null));
}

export async function ecranMatiere(main, [niveau, matiere], app) {
  const e = app.etat;
  const mod = await chargerModule(niveau, matiere);
  if (!mod) { poser(main, h("p", {}, "Cette matière n'existe pas pour ce niveau.")); return; }
  const cours = await chargerCours(niveau, matiere);
  const info = MATIERES[matiere];
  const items = mod.chapitres.flatMap(c => c.items);
  const mt = maitrise(items, e), dus = nbDus(items, e);
  const em = embleme(matiere, 78); em.classList.add("embleme");
  const conteneur = h("div", { style: { "--pigment": info.couleur } });
  poser(main, conteneur);
  poser(conteneur, 
    h("nav", { class: "fil", "aria-label": "Fil d'Ariane" }, h("a", { href: "#/jardin" }, "Jardin"), "›", h("a", { href: `#/atlas/${niveau}` }, `Atlas ${niveau}`), "›", h("span", { "aria-current": "page" }, info.nom)),
    h("div", { class: "entete-page" }, em,
      h("div", { style: { flex: 1, minWidth: "240px" } }, h("span", { class: "etiquette" }, `${info.nom} · ${niveau}`), h("h1", { style: { margin: ".1rem 0 0" } }, info.nom), h("p", { class: "intro" }, mod.intro || "")),
      h("div", { class: "pile", style: { gap: ".5rem", minWidth: "220px" } },
        dus ? h("a", { class: "btn pigment", href: `#/session/arroser/${mod.id}` }, icone("goutte"), `Arroser (${dus})`) : null,
        h("a", { class: "btn", href: `#/session/diagnostic/${mod.id}`, title: "Une ou deux questions par chapitre pour situer ton niveau" }, icone("boussole"), e.chapitres[`diag:${mod.id}`] ? "Refaire le positionnement" : "Où en suis-je ?"))),
    h("div", { class: "feuillet plat", style: { marginBottom: "1.2rem" } },
      h("div", { class: "rang espace" }, h("strong", {}, `Maîtrise de la matière : ${Math.round(mt * 100)} %`), h("span", { class: "tres-muet" }, `${pluriel(mod.chapitres.length, "chapitre")} · ${pluriel(items.length, "question")}`)),
      h("div", { class: "jauge", style: { marginTop: ".55rem" } }, h("span", { style: { "--v": `${Math.round(mt * 100)}%` } }))));

  // Parcours : une tige qui relie les chapitres.
  const parcours = h("div", { class: "parcours" });
  const tige = svg("svg", { class: "parcours-svg", "aria-hidden": "true" });
  poser(parcours, tige);
  mod.chapitres.forEach((c, i) => {
    const s = stadeChapitre(c, e), cv = couverture(c.items, e), m2 = maitrise(c.items, e), d = nbDus(c.items, e);
    const pl = etatPlanche(e, c);
    const lu = !!e.cours?.[c.id]?.lu;
    const aCours = !!cours?.chapitres?.[c.id];
    poser(parcours, h("a", { class: `etape-parcours etat-${pl}`, href: `#/chapitre/${c.id}` },
      h("div", { class: "medaillon-plante" }, h("span", { class: "num" }, String(i + 1)), h("div", { class: "fond" }, plantePetite({ forme: info.plante, couleur: info.couleur, stade: s, graine: c.id + e.profil.graine, soif: d > 3 }, 96, { cadre: true }))),
      h("div", { class: "carte-etape" },
        h("div", { class: "titre" }, c.titre),
        h("div", { class: "meta" },
          h("span", { class: "puce" }, c.theme),
          h("span", { class: "puce pigment" }, NOMS_STADES[s]),
          cv > 0 ? h("span", { class: "puce" }, `${Math.round(m2 * 100)} %`) : null,
          aCours ? h("span", { class: "puce" }, icone(lu ? "valider" : "livre"), lu ? "cours lu" : "cours") : null,
          d ? h("span", { class: "puce pigment" }, icone("goutte"), String(d)) : null,
          pl === "doree" ? h("span", { class: "puce", style: { borderColor: "var(--or)", color: "var(--or)" } }, icone("epreuve"), "dorée") : null))));
  });
  poser(conteneur, parcours);
  // Tracé de la tige une fois la mise en page connue.
  const tracer = () => {
    const r0 = parcours.getBoundingClientRect();
    const pts = [...parcours.querySelectorAll(".medaillon-plante")].map(el => { const r = el.getBoundingClientRect(); return [r.left - r0.left + r.width / 2, r.top - r0.top + r.height / 2]; });
    if (pts.length < 2) return;
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let k = 1; k < pts.length; k++) { const [x0, y0] = pts[k - 1], [x1, y1] = pts[k]; const my = (y0 + y1) / 2; d += ` C ${x0} ${my}, ${x1} ${my}, ${x1} ${y1}`; }
    tige.replaceChildren(svg("path", { d }));
  };
  requestAnimationFrame(tracer);
  const ro = new ResizeObserver(() => tracer()); ro.observe(parcours);
}
