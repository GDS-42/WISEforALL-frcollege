// ÉCLORE — Plantes génératives en SVG. Chaque chapitre est une plante ; elle grandit avec la mémoire.
// Stade : 0 graine, 1 pousse, 2 bourgeon, 3 fleur, 4 floraison, 5 arbre. Un chapitre « assoiffé » (révisions dues) scintille moins.
import { svg } from "./ui/dom.js";

// Générateur pseudo-aléatoire déterministe (chaque plante a sa personnalité, stable d'un rendu à l'autre).
function rng(graine) {
  let s = 0;
  for (const c of String(graine)) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

const FORMES = {
  rose: "fleur", cristal: "cristal", chene: "arbre", fougere: "fougere", olivier: "arbre", feuille: "fougere",
  lanterne: "lanterne", engrenage: "cristal", bruyere: "fleur", cactus: "cactus", iris: "fleur", campanule: "cloche", tournesol: "soleil",
};

/**
 * Dessine une plante dans un <g>. Taille de référence : largeur 80, hauteur 120, sol à y = 120.
 * @param {object} o { forme, couleur, stade (0..5), graine, soif (bool), lueur (0..1) }
 */
export function plante({ forme = "fleur", couleur = "#7ef0c2", stade = 0, graine = "x", soif = false, lueur = 1 }) {
  const r = rng(graine + forme);
  const g = svg("g", { class: "plante", "data-stade": stade });
  const type = FORMES[forme] || forme;
  const alpha = soif ? 0.55 : 1;
  const glow = svg("filter", { id: `g-${hash(graine)}`, x: "-50%", y: "-50%", width: "200%", height: "200%" },
    svg("feGaussianBlur", { stdDeviation: 2.2 + stade * 0.5, result: "b" }),
    svg("feMerge", {}, svg("feMergeNode", { in: "b" }), svg("feMergeNode", { in: "SourceGraphic" })));
  g.append(svg("defs", {}, glow));
  const filtre = stade >= 2 && lueur > 0 ? `url(#g-${hash(graine)})` : null;
  // Sol : petite butte
  g.append(svg("ellipse", { cx: 40, cy: 120, rx: 22 + stade * 3, ry: 4, fill: couleur, opacity: 0.12 * alpha }));
  if (stade === 0) {
    // Graine endormie : un monticule, une graine, une lueur discrète qui dit « ici, quelque chose attend ».
    g.append(svg("path", { d: "M18 120 Q 40 104 62 120 Z", fill: melange(couleur, "#3a3350", 0.8), opacity: 0.9 }));
    g.append(svg("circle", { cx: 40, cy: 110, r: 14, fill: couleur, opacity: 0.1 }));
    g.append(svg("ellipse", { cx: 40, cy: 111, rx: 5, ry: 7.5, fill: "#c9b58a", opacity: 0.95, transform: `rotate(${(r() - 0.5) * 30} 40 111)` }));
    g.append(svg("path", { d: "M40 104 q 2 -6 7 -8", stroke: couleur, "stroke-width": 1.6, fill: "none", "stroke-linecap": "round", opacity: 0.8 }));
    g.append(svg("circle", { cx: 47, cy: 96, r: 1.6, fill: "#fff6c8", opacity: 0.9 }));
    return g;
  }
  const hauteur = [0, 22, 42, 62, 80, 100][stade];
  const courbe = (r() - 0.5) * 14;
  const tige = `M40 120 C ${40 + courbe} ${120 - hauteur * 0.4}, ${40 - courbe} ${120 - hauteur * 0.7}, 40 ${120 - hauteur}`;
  g.append(svg("path", { d: tige, stroke: melange(couleur, "#2b8a5a", 0.55), "stroke-width": 1.8 + stade * 0.5, fill: "none", "stroke-linecap": "round", opacity: alpha }));
  // Feuilles le long de la tige
  const nbFeuilles = Math.min(2 + stade, 6);
  for (let i = 0; i < nbFeuilles; i++) {
    const t = 0.25 + (i / nbFeuilles) * 0.6;
    const y = 120 - hauteur * t;
    const cote = i % 2 === 0 ? -1 : 1;
    const long = 8 + stade * 2.5 + r() * 4;
    const x = 40 + courbe * Math.sin(t * Math.PI) * 0.8;
    g.append(svg("path", { d: `M${x} ${y} q ${cote * long * 0.6} ${-long * 0.4} ${cote * long} ${-long * 0.05} q ${-cote * long * 0.5} ${long * 0.35} ${-cote * long} ${long * 0.05} z`, fill: melange(couleur, "#2b8a5a", 0.35), opacity: 0.85 * alpha, transform: `rotate(${(r() - 0.5) * 20} ${x} ${y})` }));
  }
  const sommetY = 120 - hauteur;
  if (stade >= 2) {
    const taille = [0, 0, 5, 9, 12, 15][stade];
    const tete = svg("g", { filter: filtre, opacity: alpha });
    if (type === "fleur" || type === "soleil") {
      const petales = type === "soleil" ? 12 : 5 + Math.floor(r() * 3);
      if (stade === 2) tete.append(svg("ellipse", { cx: 40, cy: sommetY - 3, rx: taille * 0.7, ry: taille, fill: couleur, opacity: 0.8 }));
      else for (let i = 0; i < petales; i++) {
        const a = (i / petales) * 360;
        tete.append(svg("ellipse", { cx: 40, cy: sommetY - taille * 0.9, rx: taille * 0.42, ry: taille * 0.95, fill: couleur, opacity: 0.85, transform: `rotate(${a} 40 ${sommetY})` }));
      }
      if (stade >= 3) tete.append(svg("circle", { cx: 40, cy: sommetY, r: taille * 0.45, fill: "#fff6c8", opacity: 0.95 }));
    } else if (type === "cristal") {
      const n = stade >= 4 ? 3 : 1;
      for (let i = 0; i < n; i++) {
        const dx = (i - (n - 1) / 2) * taille * 0.9, hh = taille * (1.6 - Math.abs(i - (n - 1) / 2) * 0.4);
        tete.append(svg("path", { d: `M${40 + dx} ${sommetY - hh} l ${taille * 0.5} ${hh * 0.6} l ${-taille * 0.5} ${hh * 0.7} l ${-taille * 0.5} ${-hh * 0.7} z`, fill: couleur, opacity: 0.85, stroke: "#fff", "stroke-opacity": 0.35, "stroke-width": 0.6 }));
      }
    } else if (type === "arbre") {
      const r1 = taille * 1.3;
      tete.append(svg("circle", { cx: 40, cy: sommetY, r: r1, fill: melange(couleur, "#2b8a5a", 0.3), opacity: 0.9 }));
      if (stade >= 3) { tete.append(svg("circle", { cx: 40 - r1 * 0.7, cy: sommetY + r1 * 0.3, r: r1 * 0.75, fill: melange(couleur, "#2b8a5a", 0.3), opacity: 0.9 })); tete.append(svg("circle", { cx: 40 + r1 * 0.7, cy: sommetY + r1 * 0.3, r: r1 * 0.75, fill: melange(couleur, "#2b8a5a", 0.3), opacity: 0.9 })); }
      if (stade >= 4) for (let i = 0; i < 4 + stade; i++) tete.append(svg("circle", { cx: 40 + (r() - 0.5) * r1 * 2.4, cy: sommetY + (r() - 0.5) * r1 * 1.6, r: 1.6, fill: "#fff6c8", opacity: 0.9 }));
    } else if (type === "fougere") {
      for (let i = 0; i < 2 + stade; i++) {
        const a = -70 + i * (140 / (1 + stade)), long = taille * 2;
        tete.append(svg("path", { d: `M40 ${sommetY} q ${Math.sin(a * Math.PI / 180) * long * 0.6} ${-long * 0.5} ${Math.sin(a * Math.PI / 180) * long} ${-Math.cos(a * Math.PI / 180) * long * 0.9}`, stroke: couleur, "stroke-width": 2, fill: "none", "stroke-linecap": "round", opacity: 0.9 }));
      }
    } else if (type === "lanterne") {
      tete.append(svg("path", { d: `M40 ${sommetY - taille} l ${taille * 0.8} ${taille * 0.7} l ${-taille * 0.25} ${taille * 1.1} l ${-taille * 1.1} 0 l ${-taille * 0.25} ${-taille * 1.1} z`, fill: couleur, opacity: 0.85 }));
      tete.append(svg("circle", { cx: 40, cy: sommetY + taille * 0.1, r: taille * 0.35, fill: "#fff6c8", opacity: 0.95 }));
    } else if (type === "cactus") {
      tete.append(svg("rect", { x: 40 - taille * 0.6, y: sommetY - taille, width: taille * 1.2, height: taille * 2.2, rx: taille * 0.6, fill: melange(couleur, "#2b8a5a", 0.4), opacity: 0.9 }));
      if (stade >= 3) tete.append(svg("circle", { cx: 40, cy: sommetY - taille, r: taille * 0.4, fill: couleur, opacity: 0.95 }));
    } else if (type === "cloche") {
      for (let i = 0; i < Math.min(stade - 1, 3); i++) {
        const dx = (i - 1) * taille * 0.9, dy = i * 4;
        tete.append(svg("path", { d: `M${40 + dx} ${sommetY + dy - taille} q ${taille * 0.9} 0 ${taille * 0.7} ${taille * 1.3} l ${-taille * 1.4} 0 q ${-taille * 0.2} ${-taille * 1.3} ${taille * 0.7} ${-taille * 1.3} z`, fill: couleur, opacity: 0.85 }));
      }
    }
    g.append(tete);
  } else {
    g.append(svg("circle", { cx: 40, cy: sommetY, r: 2.5, fill: couleur, opacity: alpha }));
  }
  // Petites lucioles autour des plantes épanouies
  if (stade >= 4 && !soif) for (let i = 0; i < stade - 2; i++) {
    g.append(svg("circle", { cx: 40 + (r() - 0.5) * 50, cy: sommetY + (r() - 0.3) * 40, r: 1.3, fill: "#fff6c8", opacity: 0.6 + r() * 0.4 }));
  }
  return g;
}

export function plantePetite(o, taille = 44) {
  const s = svg("svg", { viewBox: "0 0 80 120", width: taille, height: taille * 1.5, "aria-hidden": "true" });
  s.append(plante(o));
  return s;
}

export const NOMS_STADES = ["Graine", "Pousse", "Bourgeon", "Fleur", "Floraison", "Arbre"];

function hash(s) { let x = 0; for (const c of String(s)) x = (x * 31 + c.charCodeAt(0)) >>> 0; return x.toString(36); }

function melange(a, b, t) {
  const pa = hex(a), pb = hex(b);
  const m = pa.map((v, i) => Math.round(v + (pb[i] - v) * t));
  return `#${m.map(v => v.toString(16).padStart(2, "0")).join("")}`;
}
function hex(c) { const s = c.replace("#", ""); return [0, 2, 4].map(i => parseInt(s.slice(i, i + 2), 16)); }
