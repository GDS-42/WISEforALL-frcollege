// ÉCLORE — Le jardin : vue d'ensemble vivante du niveau, rituel du jour, voix de Lume.
import { h, svg, pluriel } from "./dom.js";
import { chargerNiveau, MATIERES } from "../content.js";
import { nbDus, maitrise, couverture, statsGlobales } from "../engine.js";
import { plante } from "../plants.js";
import { salut, citationDuJour } from "../mentor.js";
import { cleJour } from "../store.js";

export async function ecranJardin(main, params, app) {
  const e = app.etat;
  const modules = await chargerNiveau(e.profil.niveau);
  const visibles = modules.filter(m => m.matiere !== "espagnol" || e.profil.lv2 !== "aucune");
  const tous = visibles.flatMap(m => m.chapitres.flatMap(c => c.items));
  const dus = nbDus(tous, e);
  const stats = statsGlobales(e, tous);
  const aujourdhui = e.jours[cleJour()] || { n: 0, ok: 0, ms: 0 };
  const objectif = e.prefs.objectifItems || 15;
  const [cit, auteur] = citationDuJour();

  // Scène du jardin : une plante par matière, sur deux rangs de collines.
  const n = visibles.length;
  const deuxRangs = n > 7;
  const colonnes = deuxRangs ? Math.ceil(n / 2) : n;
  const largeur = Math.max(500, colonnes * 100), hauteur = deuxRangs ? 225 : 185;
  const scene = svg("svg", { viewBox: `0 0 ${largeur} ${hauteur}`, role: "img", "aria-label": "Ton jardin : une plante par matière, qui grandit avec ta mémoire." });
  const colline = (y, amp, fill, op) => svg("path", { d: `M0 ${hauteur} L0 ${y} Q ${largeur * 0.25} ${y - amp} ${largeur * 0.5} ${y} T ${largeur} ${y} L${largeur} ${hauteur} Z`, fill, opacity: op });
  scene.append(colline(hauteur - 105, 34, "var(--sol)", 0.45), colline(hauteur - 62, 24, "var(--sol)", 0.75), colline(hauteur - 22, 12, "var(--sol)", 1));
  const boutonsPlantes = [];
  visibles.forEach((m, i) => {
    const info = MATIERES[m.matiere];
    const items = m.chapitres.flatMap(c => c.items);
    const mt = maitrise(items, e), cv = couverture(items, e);
    const s = cv === 0 ? 0 : Math.min(5, Math.max(1, Math.round((mt * 0.7 + cv * 0.3) * 6)));
    const soif = nbDus(items, e) > Math.max(5, items.length * 0.1);
    const rang = deuxRangs ? i % 2 : 1;             // 0 = arrière, 1 = avant
    const col = deuxRangs ? Math.floor(i / 2) : i;
    const pas = largeur / colonnes;
    const x = pas * (col + 0.5) + (rang === 0 ? pas * 0.22 : -pas * 0.1);
    const ySol = rang === 0 ? hauteur - 78 : hauteur - 26;
    const echelle = (rang === 0 ? 0.85 : 1.15) * (0.85 + (s / 5) * 0.5);
    const g = svg("g", { transform: `translate(${x - 40 * echelle} ${ySol - 120 * echelle}) scale(${echelle})` });
    g.append(plante({ forme: info.plante, couleur: info.couleur, stade: s, graine: m.id + e.profil.graine, soif }));
    const lien = svg("a", { href: `#/matiere/${m.niveau}/${m.matiere}`, class: "plante-bouton", "aria-label": `${info.nom} : ${Math.round(mt * 100)} % de maîtrise` });
    lien.append(g);
    lien.append(svg("text", { x, y: ySol + (rang === 0 ? 16 : 20), "text-anchor": "middle", "font-size": rang === 0 ? 15 : 18, fill: rang === 0 ? "var(--texte-3)" : "var(--texte-2)", "font-family": "var(--police-texte)", "font-weight": 700 }, info.court));
    if (rang === 0) scene.insertBefore(lien, scene.childNodes[2]); else scene.append(lien);
    boutonsPlantes.push(lien);
  });

  const mentorTexte = dus > 0
    ? `${salut(e.profil.prenom)} ${pluriel(dus, "plante a", "plantes ont")} soif : ${dus > 1 ? "elles" : "elle"} ${dus > 1 ? "attendent" : "attend"} une goutte de ta mémoire.`
    : stats.vus === 0 ? `${salut(e.profil.prenom)} Tout est encore graine ici. Choisis une matière dans l'Atlas, et plantons.`
    : `${salut(e.profil.prenom)} Rien n'a soif aujourd'hui. C'est le moment idéal pour découvrir du neuf.`;

  main.append(
    h("section", { class: "carte", style: { padding: ".6rem" } },
      h("div", { class: "jardin-scene" }, h("div", { class: "lune", "aria-hidden": "true" }), scene),
      h("div", { class: "legende-jardin" }, h("span", {}, "🌱 graine"), h("span", {}, "🌿 pousse"), h("span", {}, "🌸 fleur"), h("span", {}, "🌳 arbre"), h("span", { class: "muet" }, "· une plante pâle a soif : des révisions l'attendent"))),
    h("section", { class: "carte", style: { marginTop: "1rem" } },
      h("div", { class: "mentor" }, h("div", { class: "lume", "aria-hidden": "true" }), h("div", { class: "bulle" }, mentorTexte))),
    h("section", { class: "carte" },
      h("div", { class: "rang espace", style: { marginBottom: ".8rem" } }, h("h2", { style: { margin: 0 } }, "Le rituel du jour"), h("span", { class: "tres-muet" }, `${aujourdhui.n} / ${objectif} questions`)),
      h("div", { class: "barre", style: { marginBottom: "1rem" } }, h("span", { style: { "--v": `${Math.min(100, (aujourdhui.n / objectif) * 100)}%`, "--c": "var(--or)" } })),
      h("div", { class: "actions-jardin" },
        h("a", { class: `action ${dus > 0 ? "prioritaire" : ""}`, href: "#/session/arroser" }, h("span", { class: "ico" }, "💧"), h("strong", {}, "Arroser"), h("span", { class: "desc" }, dus > 0 ? `${pluriel(dus, "révision")} à faire, toutes matières mêlées.` : "Consolider ce qui est fragile.")),
        h("a", { class: `action ${dus === 0 ? "prioritaire" : ""}`, href: "#/atlas" }, h("span", { class: "ico" }, "🌱"), h("strong", {}, "Découvrir"), h("span", { class: "desc" }, "Choisir un chapitre et planter de nouvelles graines.")),
        h("a", { class: "action", href: "#/session/defi" }, h("span", { class: "ico" }, "⚡"), h("strong", {}, "Défi éclair"), h("span", { class: "desc" }, "10 questions mêlées, chronométrées. Pour s'entraîner au brevet.")),
        derniereActivite(e))),
    h("section", { class: "grille-2" },
      h("div", { class: "carte" },
        h("h3", {}, "En un coup d'œil"),
        h("div", { class: "rituel" },
          stat(stats.vus, `graine${stats.vus > 1 ? "s" : ""} plantée${stats.vus > 1 ? "s" : ""}`, `sur ${stats.total}`),
          stat(stats.stades[4] + stats.stades[5], "en pleine floraison"),
          stat(e.serie.actuelle, `jour${e.serie.actuelle > 1 ? "s" : ""} de suite`, e.serie.record > e.serie.actuelle ? `record : ${e.serie.record}` : ""),
          stat(stats.minutes, "minutes d'attention"))),
      h("div", { class: "carte" },
        h("h3", {}, "Une lanterne pour la route"),
        h("blockquote", { class: "citation" }, cit, h("small", {}, "— ", auteur)))));

  // Petite animation de pousse à l'arrivée
  requestAnimationFrame(() => boutonsPlantes.forEach((b, i) => setTimeout(() => b.querySelector(".plante")?.classList.add("pousse"), i * 70)));
}

function stat(valeur, libelle, sous = "") {
  return h("div", { class: "stat" }, h("div", { class: "valeur" }, String(valeur)), h("div", { class: "libelle" }, libelle), sous ? h("div", { class: "tres-muet" }, sous) : null);
}

function derniereActivite(e) {
  const derniere = [...e.journal].reverse().find(s => s.chapitre);
  if (!derniere) return h("a", { class: "action", href: "#/bilan" }, h("span", { class: "ico" }, "🧭"), h("strong", {}, "Mon bilan"), h("span", { class: "desc" }, "Voir où j'en suis, matière par matière."));
  return h("a", { class: "action", href: `#/chapitre/${derniere.chapitre}` }, h("span", { class: "ico" }, "↩︎"), h("strong", {}, "Reprendre"), h("span", { class: "desc" }, "Revenir au dernier chapitre travaillé."));
}
