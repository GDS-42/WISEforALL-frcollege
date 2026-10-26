#!/usr/bin/env node
// Génère src/ui/icones.js à partir de lucide-static (licence ISC).
// Usage : node tools/build-icones.cjs <chemin/vers/node_modules>
const fs = require("fs");
const D = process.argv[2] || "node_modules";
const noms = { jardin: "sprout", atlas: "map", herbier: "book-open", bilan: "chart-no-axes-column", reglages: "settings", quetes: "scroll-text", boutique: "store", retour: "arrow-left", suivant: "arrow-right", fermer: "x", valider: "check", ko: "circle-x", ok: "circle-check", indice: "lightbulb", son: "volume-2", flamme: "flame", lumen: "sparkles", goutte: "droplets", eclair: "zap", boussole: "compass", trophee: "trophy", cadenas: "lock", plus: "plus", moins: "minus", haut: "chevron-up", bas: "chevron-down", droite: "chevron-right", gauche: "chevron-left", livre: "book-marked", crayon: "pencil-line", cible: "target", horloge: "clock", etoile: "star", coeur: "heart", profil: "user-round", telecharger: "download", importer: "upload", imprimer: "printer", lune: "moon", soleil: "sun", poignee: "grip-vertical", melanger: "shuffle", recommencer: "rotate-ccw", drapeau: "flag", carte: "map-pinned", feuille: "leaf", graine: "bean", fleur: "flower-2", arbre: "tree-deciduous", lecture: "glasses", epreuve: "medal", cadeau: "gift", info: "info", alerte: "triangle-alert", menu: "menu", accueil: "house", ecouter: "headphones", main: "hand", parcours: "route", adulte: "graduation-cap", contester: "message-circle-question" };
let out = "// ÉCLORE — icônes (sous-ensemble de Lucide, licence ISC). Généré par tools/build-icones.cjs.\nconst SVG = {\n";
for (const [k, v] of Object.entries(noms)) {
  const f = `${D}/lucide-static/icons/${v}.svg`;
  if (!fs.existsSync(f)) { console.error("manque", v); continue; }
  let s = fs.readFileSync(f, "utf8").replace(/<!--[\s\S]*?-->/g, "").replace(/\n\s*/g, "");
  s = s.replace(/^.*?<svg[^>]*>/, "").replace(/<\/svg>.*$/, "");
  out += `  ${JSON.stringify(k)}: ${JSON.stringify(s)},\n`;
}
out += `};

/** Renvoie un <svg> d'icône ; le trait hérite de la couleur du texte. */
export function icone(nom, { taille = 20, titre = null, classe = "" } = {}) {
  const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const attrs = { viewBox: "0 0 24 24", width: taille, height: taille, fill: "none", stroke: "currentColor", "stroke-width": "1.75", "stroke-linecap": "round", "stroke-linejoin": "round", class: ("icone " + classe).trim() };
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
  if (titre) { s.setAttribute("role", "img"); s.setAttribute("aria-label", titre); } else s.setAttribute("aria-hidden", "true");
  s.innerHTML = SVG[nom] || SVG.info;
  return s;
}
export const ICONES = Object.keys(SVG);
`;
fs.writeFileSync("src/ui/icones.js", out);
console.log("icônes :", Object.keys(noms).length);
