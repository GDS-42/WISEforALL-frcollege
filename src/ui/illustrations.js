// ÉCLORE — Illustrations du carnet « Herbier » : Lume, paysages, décorations du jardin, emblèmes, planches.
// Encre + lavis d'aquarelle, couleurs exclusivement par jetons CSS (avec valeurs de repli).
// Nécessite les définitions globales de src/ui/defs.js (#aquarelle, #aquarelle-large, #halo, #grain).
import { svg } from "./dom.js";
import { plante, outilsTrace } from "../plants.js";

const { courbe, ferme, ovale, point, f, rng } = outilsTrace;
const ENCRE = "var(--encre, #3b2a1e)";
const PIG = "var(--pigment, #c4553d)";
const OR = "var(--or, #c9a03c)";
const PAPIER = "var(--papier, #f6efe0)";
const REFLET = "var(--reflet, var(--papier, #f6efe0))";
const SEVE = "var(--seve, var(--ok, #6f8a4e))";
const BOIS = "var(--bois, #9c7148)";
const PIERRE = "var(--pierre, #9b9486)";
const EAU = "var(--eau, #6b9fb4)";
const ZINC = "var(--zinc, #8fa2a6)";
const FLEUR = "var(--fleur, #c9607a)";
const MAIN = "var(--f-main, 'Caveat', 'Segoe Script', cursive)";
const TEXTE = "var(--f-texte, 'Lexend', system-ui, sans-serif)";
const TITRE = "var(--f-titre, 'Young Serif', Georgia, serif)";

// ───────────────────────── petit atelier : un calque de lavis filtré sous un calque d'encre ─────────────────────────
function atelier(filtre = "aquarelle") {
  const lav = svg("g", { filter: `url(#${filtre})`, transform: "translate(.6 -.4)" });
  const enc = svg("g", {});
  const A = {
    lav(d, c = PIG, o = .35) { lav.append(svg("path", { d, fill: c, "fill-opacity": o, style: `fill-opacity:calc(var(--lavis-k, 1) * ${o})` })); return A; },
    reserve(d, o = .75) { lav.append(svg("path", { d, fill: REFLET, "fill-opacity": o })); return A; },
    ink(d, w = 1, o = .9, c = ENCRE) { enc.append(svg("path", { d, fill: "none", stroke: c, "stroke-width": w, "stroke-opacity": o, "stroke-linecap": "round", "stroke-linejoin": "round" })); return A; },
    fill(d, c = ENCRE, o = .9) { enc.append(svg("path", { d, fill: c, "fill-opacity": o })); return A; },
    plume(pts, w0, w1, o = .92, c = ENCRE) { enc.append(svg("path", { d: plumeD(pts, w0, w1), fill: c, "fill-opacity": o })); return A; },
    node(n) { enc.append(n); return A; },
    sous(n) { (A._sous = A._sous || []).push(n); return A; },
    g(attrs = {}) { const g = svg("g", attrs); if (A._sous) g.append(...A._sous); g.append(lav, enc); return g; },
  };
  return A;
}
function bz(p, t) { const u = 1 - t; return [0, 1].map(i => u * u * u * p[0][i] + 3 * u * u * t * p[1][i] + 3 * u * t * t * p[2][i] + t * t * t * p[3][i]); }
function bzd(p, t) { const u = 1 - t; return [0, 1].map(i => 3 * u * u * (p[1][i] - p[0][i]) + 6 * u * t * (p[2][i] - p[1][i]) + 3 * t * t * (p[3][i] - p[2][i])); }
/** Trait de plume effilé le long d'une cubique (4 points). */
function plumeD(p, w0, w1) {
  const L = [], R = [], n = 12;
  for (let i = 0; i <= n; i++) {
    const t = i / n, [x, y] = bz(p, t), [dx, dy] = bzd(p, t), l = Math.hypot(dx, dy) || 1, a = Math.atan2(dy, dx);
    const w = (w0 + (w1 - w0) * t) * (.75 + .25 * Math.abs(Math.sin(a - .6))) / 2;
    L.push([x - dy / l * w, y + dx / l * w]); R.push([x + dy / l * w, y - dx / l * w]);
  }
  return ferme([...L, ...R.reverse()]);
}
const texte = (x, y, s, attrs = {}) => svg("text", { x, y, fill: ENCRE, ...attrs }, s);
const etoile = (x, y, r) => `M${f(x)} ${f(y - r)}Q${f(x + r * .18)} ${f(y - r * .18)} ${f(x + r)} ${f(y)}Q${f(x + r * .18)} ${f(y + r * .18)} ${f(x)} ${f(y + r)}Q${f(x - r * .18)} ${f(y + r * .18)} ${f(x - r)} ${f(y)}Q${f(x - r * .18)} ${f(y - r * .18)} ${f(x)} ${f(y - r)}Z`;
const vbox = (vb, taille, attrs = {}) => svg("svg", { viewBox: vb, width: taille, height: taille, "aria-hidden": "true", overflow: "visible", ...attrs });

// ───────────────────────── Lume, la luciole mentor ─────────────────────────
/**
 * Lume dans un <svg viewBox="0 0 100 100">.
 * @param {object} o { humeur: "calme" | "joie" | "encourage" | "pense" | "dort", taille? }
 */
export function lume({ humeur = "calme", taille = 96 } = {}) {
  const h = ["calme", "joie", "encourage", "pense", "dort"].includes(humeur) ? humeur : "calme";
  const s = vbox("0 0 100 100", taille, { class: `lume lume-${h}`, role: "img", "aria-label": `Lume, la luciole (${h})` });
  const A = atelier();
  const dort = h === "dort", joie = h === "joie";
  const halo = dort ? .16 : joie ? .55 : h === "encourage" ? .48 : .38;
  for (const [rr, o] of [[34, .1], [26, .16], [19, .26]]) A.sous(svg("path", { d: ovale(50, 70, rr, rr * .95, 0, 14), fill: OR, opacity: f(o * halo / .38 * 100) / 100, filter: "url(#aquarelle)" }));
  // ailes (derrière), translucides : encre légère, nervures
  const ail = { calme: [-28, 0], joie: [-52, -8], encourage: [-40, -4], pense: [-22, 2], dort: [-6, 10] }[h];
  for (const c of [-1, 1]) {
    const cx = 50 + c * 17, cy = 44 + ail[1], a = ail[0] * c;
    const d = ovale(cx, cy, 11, 20, a + 90 * 0, 12);
    A.lav(d, ENCRE, .07).ink(d, 1.3, .75);
    const t = (u, v) => { const ca = Math.cos(a * Math.PI / 180), sa = Math.sin(a * Math.PI / 180); return [cx + u * ca - v * sa, cy + u * sa + v * ca]; };
    A.ink(courbe([t(0, 16), t(c * -1, 2), t(c * 2, -12)]) + courbe([t(0, 8), t(c * 5, -2)]) + courbe([t(0, 2), t(c * -5, -8)]), .6, .45);
  }
  // abdomen lumineux (la lanterne de la luciole), puis élytres sombres qui le coiffent
  const abdo = ovale(50, 69, 14, 16.5, 0, 12);
  A.lav(abdo, OR, .85).lav(ovale(50, 74, 10, 10.5, 0, 10), OR, .75).lav(ovale(50, 76, 6.4, 6, 0, 10), OR, dort ? .2 : .6);
  A.ink(abdo, 1.9).ink(courbe([[38.5, 76], [50, 80], [61.5, 76]]), 1, .45);
  for (const c of [-1, 1]) {
    const ely = `M50 55Q${50 + c * 11} 54 ${50 + c * 12.5} 59Q${50 + c * 12} 63.5 ${50 + c * 7} 64Q${50 + c * 2.5} 62.5 50 61Z`;
    A.lav(ely, ENCRE, .38).lav(ely, OR, .12).ink(ely, 1.4);
  }
  // pattes
  const pattes = h === "pense" ? [[[41, 54], [35, 60], [33, 66]], [[59, 54], [65, 60], [67, 66]], [[42, 56], [40, 62], [42, 64]]] : [[[41, 54], [34, 59], [32, 65]], [[59, 54], [66, 59], [68, 65]], [[43, 57], [38, 63], [37, 68]], [[57, 57], [62, 63], [63, 68]]];
  for (const p of pattes) A.ink(courbe(p), 1.3, .85);
  if (h === "encourage") A.ink(courbe([[61, 50], [69, 46], [72, 36]]), 1.5).fill(point(72.5, 34.5, 2.6)).lav(point(72.5, 34.5, 2.4), OR, .5);
  if (h === "pense") A.ink(courbe([[44, 51], [42, 47], [44, 44.5]]), 1.5).fill(point(44.6, 44, 1.8), ENCRE, .9);
  // corselet et tête
  const cors = ovale(50, 51, 11.5, 6.4, 0, 10);
  A.lav(cors, OR, .35).lav(cors, ENCRE, .12).ink(cors, 1.5);
  const tete = ovale(50, 35, 14, 13, 0, 12);
  A.lav(tete, ENCRE, .1).lav(ovale(55, 39, 8, 7), ENCRE, .06).ink(tete, 2);
  // antennes
  const ant = { calme: [[44, 23, 37, 14, 35, 8], [56, 23, 63, 14, 65, 8]], joie: [[44, 23, 36, 13, 39, 5], [56, 23, 64, 13, 61, 5]], encourage: [[44, 23, 39, 12, 36, 6], [56, 23, 62, 12, 66, 6]], pense: [[44, 23, 40, 13, 36, 10], [56, 23, 62, 14, 69, 12]], dort: [[44, 23, 36, 19, 30, 22], [56, 23, 64, 19, 70, 22]] }[h];
  for (const [x0, y0, x1, y1, x2, y2] of ant) { A.ink(courbe([[x0, y0], [x1, y1], [x2, y2]]), 1.4); A.fill(point(x2, y2, 2), ENCRE, .9).lav(point(x2, y2, 2.2), OR, .6); }
  // joues
  if (!dort) A.lav(ovale(40.5, 40, 3.2, 2, 0, 8), OR, .55).lav(ovale(59.5, 40, 3.2, 2, 0, 8), OR, .55);
  // visage selon l'humeur
  const yeuxOuverts = (dx = 0, dy = 0) => { for (const x of [44, 56]) { A.fill(ovale(x + dx, 34 + dy, 3, 3.8, 0, 8)); A.node(svg("circle", { cx: x + dx - 1, cy: 32.6 + dy, r: 1.1, fill: PAPIER })); } };
  if (h === "calme") { yeuxOuverts(); A.ink(courbe([[46, 41.5], [50, 44], [54, 41.5]]), 1.5); }
  if (joie) {
    A.ink(courbe([[41, 35.5], [44, 31.5], [47, 35.5]]) + courbe([[53, 35.5], [56, 31.5], [59, 35.5]]), 1.8);
    A.fill("M45 40.5Q50 47.5 55 40.5Q50 42 45 40.5Z", ENCRE, .9).lav(ovale(50, 43.6, 2.4, 1.2), OR, .7);
    for (const [x, y, r] of [[20, 26, 4], [82, 22, 3.4], [84, 48, 2.6], [16, 50, 2.4]]) A.lav(etoile(x, y, r), OR, .8).ink(etoile(x, y, r), .7, .7);
  }
  if (h === "encourage") {
    yeuxOuverts(0, .5);
    A.ink(courbe([[40.5, 28.5], [44, 27.6], [47, 28.8]]) + courbe([[53, 28.8], [56, 27.6], [59.5, 28.5]]), 1.3);
    A.fill("M45.5 41Q50 46 54.5 41Q50 42.3 45.5 41Z", ENCRE, .9);
    A.ink(courbe([[76, 30], [80, 27]]) + courbe([[77, 36], [82, 35]]) + courbe([[75, 24], [77, 20]]), 1.1, .7);
  }
  if (h === "pense") {
    yeuxOuverts(1.6, -1.6);
    A.ink(courbe([[47, 42.5], [50, 41.6], [53, 42.8]]), 1.3);
    A.ink(ovale(70, 22, 2, 2, 0, 6), 1, .7).ink(ovale(76, 15, 3, 3, 0, 8), 1, .7);
    A.node(texte(80, 11, "?", { "font-family": MAIN, "font-size": 15, opacity: .8 }));
  }
  if (dort) {
    A.ink(courbe([[41, 34.5], [44, 37], [47, 34.5]]) + courbe([[53, 34.5], [56, 37], [59, 34.5]]), 1.6);
    A.ink(ovale(50, 42.5, 1.5, 1.2, 0, 6), 1.1);
    A.node(texte(68, 24, "z", { "font-family": MAIN, "font-size": 12, opacity: .7 })).node(texte(76, 15, "z", { "font-family": MAIN, "font-size": 9, opacity: .5 }));
  }
  s.append(A.g());
  return s;
}

// ───────────────────────── paysage ─────────────────────────
const CIELS = {
  aube: ["var(--ciel-aube-haut, #9fb2cc)", "var(--ciel-aube-bas, #efbf9c)"],
  jour: ["var(--ciel-jour-haut, #8db6cf)", "var(--ciel-jour-bas, #d3e2d6)"],
  crepuscule: ["var(--ciel-crepuscule-haut, #6c6898)", "var(--ciel-crepuscule-bas, #e4956a)"],
  nuit: ["var(--ciel-nuit-haut, #1d2747)", "var(--ciel-nuit-bas, #3c4a72)"],
};
function vague(W, y0, amp, n, r, bas) {
  const pts = [];
  for (let i = 0; i <= n; i++) { const x = -W * .05 + i * (W * 1.1 / n); pts.push([x, y0 + Math.sin(i * 1.3 + r() * 2) * amp * (.5 + r() * .5)]); }
  return { d: courbe(pts) + `L${f(W * 1.05)} ${f(bas)}L${f(-W * .05)} ${f(bas)}Z`, pts };
}
/**
 * Fond de jardin dans un <g> (repère largeur × hauteur).
 * @param {object} o { largeur, hauteur, moment: "aube" | "jour" | "crepuscule" | "nuit" }
 */
export function paysage({ largeur = 800, hauteur = 400, moment = "jour" } = {}) {
  const W = largeur, H = hauteur, m = CIELS[moment] ? moment : "jour", r = rng(`paysage|${m}|${W}|${H}`);
  const [haut, bas] = CIELS[m], nuit = m === "nuit", crep = m === "crepuscule";
  const g = svg("g", { class: `paysage paysage-${m}` });
  // ciel : lavis mouillé dans le mouillé, bandes qui se fondent, papier en réserve
  const C = atelier("aquarelle-large");
  C.lav(vague(W, H * .42, H * .04, 6, r, -H * .1).d, haut, nuit ? .85 : .5);
  C.lav(courbe([[-W * .05, H * .28], [W * .3, H * .33], [W * .7, H * .26], [W * 1.05, H * .31]]) + `L${f(W * 1.05)} ${f(H * .8)}L${f(-W * .05)} ${f(H * .8)}Z`, bas, nuit ? .6 : .55);
  C.lav(`M${f(-W * .05)} ${f(H * .18)}L${f(W * 1.05)} ${f(H * .12)}L${f(W * 1.05)} ${f(H * .42)}L${f(-W * .05)} ${f(H * .5)}Z`, haut, nuit ? .3 : .16);
  const R = Math.min(W, H);
  if (m === "aube") { C.lav(point(W * .22, H * .6, R * .2), OR, .2).lav(point(W * .22, H * .6, R * .085), OR, .7); }
  if (m === "jour") { C.lav(point(W * .8, H * .2, R * .17), OR, .14).lav(point(W * .8, H * .2, R * .07), OR, .55); }
  if (crep) { C.lav(point(W * .7, H * .6, R * .24), bas, .45).lav(point(W * .7, H * .62, R * .1), OR, .75).lav(point(W * .7, H * .62, R * .1), bas, .35); }
  if (nuit) { C.lav(point(W * .8, H * .2, R * .16), OR, .12).lav(point(W * .8, H * .2, R * .065), OR, .7).lav(point(W * .8 + R * .03, H * .2 - R * .015, R * .058), haut, .9); }
  if (!nuit) for (let i = 0; i < 3; i++) { const x = W * (.12 + i * .3 + r() * .1), y = H * (.14 + r() * .14), w = W * (.08 + r() * .06); C.reserve(ferme([[x - w, y + 6], [x - w * .5, y - 7], [x, y - 11], [x + w * .5, y - 6], [x + w, y + 5], [x, y + 9]]), crep ? .4 : .7); }
  g.append(C.g({ class: "ciel" }));
  // encre du ciel : astres, quelques traits de nuages, étoiles
  const E = atelier();
  if (m === "aube" || m === "jour") { const [x, y, rr] = m === "aube" ? [W * .22, H * .6, R * .085] : [W * .8, H * .2, R * .07]; E.ink(courbe(Array.from({ length: 10 }, (_, i) => [x + Math.cos(i * .62 + 2.4) * rr, y + Math.sin(i * .62 + 2.4) * rr])), 1, .55); }
  if (nuit) { const x = W * .8, y = H * .2, rr = R * .065; E.ink(courbe(Array.from({ length: 9 }, (_, i) => [x + Math.cos(1.1 + i * .55) * rr, y + Math.sin(1.1 + i * .55) * rr])), 1.1, .7); }
  if (nuit || crep) { let d = ""; for (let i = 0; i < (nuit ? 16 : 5); i++) { const x = r() * W, y = r() * H * (nuit ? .45 : .25); d += r() < .3 ? etoile(x, y, 2.6 + r() * 2) : point(x, y, .8 + r() * .8); } E.fill(d, OR, nuit ? .9 : .6); }
  if (!nuit) { let d = ""; for (let i = 0; i < 4; i++) { const x = W * (.1 + r() * .8), y = H * (.12 + r() * .2), w = W * (.04 + r() * .05); d += courbe([[x - w, y], [x - w * .3, y - 3], [x + w * .4, y - 1], [x + w, y + 1]]); } E.ink(d, .9, .35); }
  // collines superposées
  const Hc = atelier("aquarelle-large");
  const loin = vague(W, H * .6, H * .045, 5, r, H), milieu = vague(W, H * .68, H * .04, 4, r, H), pres = vague(W, H * .78, H * .03, 4, r, H);
  Hc.lav(loin.d, "var(--colline-loin, #8fa69e)", .4).lav(loin.d, haut, .15);
  Hc.lav(milieu.d, SEVE, .34);
  Hc.lav(pres.d, SEVE, .45).lav(pres.d, ENCRE, .06);
  Hc.lav(`M${f(-W * .05)} ${f(H * .9)}` + `L${f(W * 1.05)} ${f(H * .88)}L${f(W * 1.05)} ${f(H * 1.02)}L${f(-W * .05)} ${f(H * 1.02)}Z`, ENCRE, .1);
  if (nuit || crep) Hc.lav(`M${f(-W * .05)} ${f(H * .55)}L${f(W * 1.05)} ${f(H * .55)}L${f(W * 1.05)} ${f(H * 1.05)}L${f(-W * .05)} ${f(H * 1.05)}Z`, "var(--voile-nuit, #1d2541)", nuit ? .32 : .12);
  g.append(Hc.g({ class: "collines" }));
  // encre des collines : contours interrompus, arbres lointains, herbes
  E.ink(courbe(loin.pts.slice(0, 3)) + courbe(loin.pts.slice(4)), .7, .35).ink(courbe(milieu.pts.slice(1, 4)), .8, .45).ink(courbe(pres.pts.slice(0, 2)) + courbe(pres.pts.slice(2)), 1.1, .6);
  const arbres = atelier("aquarelle-large");
  for (let i = 0; i < 7; i++) {
    const t = .05 + i * .14 + r() * .05, idx = Math.min(milieu.pts.length - 2, Math.floor(t * (milieu.pts.length - 1))), p0 = milieu.pts[idx], p1 = milieu.pts[idx + 1], u = t * (milieu.pts.length - 1) - idx;
    const x = W * t, y = p0[1] + (p1[1] - p0[1]) * u + 2, hh = H * (.035 + r() * .03);
    const cypres = r() < .5, d = cypres ? ferme([[x, y - hh * 1.6], [x + hh * .25, y - hh * .6], [x + hh * .2, y], [x - hh * .2, y], [x - hh * .25, y - hh * .6]]) : ovale(x, y - hh * .9, hh * .6, hh * .55, 0, 9);
    arbres.lav(d, SEVE, .5); E.ink(d, .7, .5); if (!cypres) E.ink(courbe([[x, y], [x, y - hh * .5]]), .8, .6);
  }
  g.append(arbres.g());
  let herbes = "";
  for (let i = 0; i < Math.round(W / 22); i++) { const x = r() * W, y = H * (.86 + r() * .12); for (let j = -1; j <= 1; j++) herbes += courbe([[x + j * 1.6, y], [x + j * 2.6 + (r() - .5) * 2, y - 4 - r() * 5]]); }
  E.ink(herbes, .8, .5);
  if (nuit) for (let i = 0; i < 6; i++) { const x = r() * W, y = H * (.5 + r() * .35); E.node(svg("circle", { cx: f(x), cy: f(y), r: 4, fill: OR, opacity: .4, filter: "url(#halo)" })).fill(point(x, y, 1.1), OR, 1); }
  g.append(E.g());
  return g;
}

// ───────────────────────── décorations de la boutique (repère 80 × 80, base à y = 80) ─────────────────────────
export const DECORATIONS = [
  { id: "lanterne", nom: "Lanterne", description: "Une lanterne de papier sur sa crosse, pour veiller sur les semis à la nuit tombée." },
  { id: "banc", nom: "Banc de jardin", description: "Un banc de bois patiné, pour s'asseoir et regarder pousser ce qu'on a appris." },
  { id: "nichoir", nom: "Nichoir", description: "Une petite maison pour les mésanges, qui chantent quand on révise." },
  { id: "arrosoir", nom: "Arrosoir", description: "L'arrosoir de zinc : chaque révision est une goutte d'eau pour la mémoire." },
  { id: "ruche", nom: "Ruche de paille", description: "Une ruche tressée ; ses abeilles butinent les chapitres en fleur." },
  { id: "mare", nom: "Mare", description: "Une mare aux roseaux et son nénuphar, où le ciel se reflète." },
  { id: "arche", nom: "Arche fleurie", description: "Une arche de treillage couverte de roses grimpantes." },
  { id: "fontaine", nom: "Fontaine", description: "Une fontaine de pierre qui murmure dans le jardin." },
  { id: "papillons", nom: "Papillons", description: "Un trio de papillons qui dansent d'une fleur à l'autre." },
  { id: "cabane", nom: "Cabane", description: "La cabane du jardinier : outils, graines et carnets bien rangés." },
  { id: "cerf-volant", nom: "Cerf-volant", description: "Un cerf-volant à longue queue, pour les jours de grand vent." },
  { id: "observatoire", nom: "Observatoire", description: "Un petit observatoire à coupole, pour lire les étoiles après l'étude." },
];

function papillon(A, x, y, s, a = 0, c1 = OR, c2 = FLEUR) {
  const rot = (u, v) => { const ca = Math.cos(a * Math.PI / 180), sa = Math.sin(a * Math.PI / 180); return [x + (u * ca - v * sa) * s, y + (u * sa + v * ca) * s]; };
  const ailes = [[[0, 0], [-3, -7], [-9, -9], [-10.5, -5], [-7, -.5]], [[0, .5], [-5.6, 1.5], [-6.6, 5.5], [-2.6, 6], [-.4, 2.2]], [[0, 0], [2.4, -7], [7.6, -8.6], [9, -5], [6, -.5]], [[0, .5], [5, 1.5], [5.8, 5], [2.3, 5.7], [.4, 2.2]]];
  ailes.forEach((q, i) => { const d = ferme(q.map(([u, v]) => rot(u, v))); A.lav(d, i % 2 ? c2 : c1, i % 2 ? .45 : .6).ink(d, .8, .85); });
  A.fill(point(...rot(-8.4, -6.8), 1.1 * s) + point(...rot(7, -6.4), 1 * s), ENCRE, .8);
  A.plume([rot(0, -1.8), rot(.2, 0), rot(.1, 2), rot(0, 4.6)], 1.8 * s, .7 * s);
  A.ink(courbe([rot(0, -1.8), rot(-1.6, -5), rot(-1, -7)]) + courbe([rot(0, -1.8), rot(1.5, -5), rot(2.4, -6.8)]), .7, .85);
}

const DECOS = {
  lanterne(A) {
    A.plume([[30, 80], [30.5, 60], [29.5, 34], [31, 18]], 2.6, 1.8).ink(courbe([[31, 18], [33, 9], [44, 8], [47, 15]]), 1.8);
    A.ink(courbe([[47, 15], [47, 21]]), 1);
    A.sous(svg("circle", { cx: 47, cy: 34, r: 15, fill: OR, opacity: .35, filter: "url(#halo)" }));
    const corps = "M39 25Q47 21 55 25Q58 34 55 43Q47 47 39 43Q36 34 39 25Z";
    A.lav(corps, OR, .7).lav("M47 23Q53 25 55 25Q58 34 55 43Q51 45 47 45Z", OR, .35).ink(corps, 1.3);
    A.ink(courbe([[38.2, 30], [47, 28], [55.8, 30]]) + courbe([[37.6, 36], [47, 34.6], [56.4, 36]]) + courbe([[38.4, 41], [47, 40], [55.6, 41]]), .6, .55);
    A.lav("M41 21L53 21L51 24L43 24Z", ENCRE, .5).ink("M41 21L53 21L51 24L43 24Z", 1).lav("M43 44L51 44L50 47L44 47Z", ENCRE, .5).ink("M43 44L51 44L50 47L44 47Z", 1);
    A.ink(courbe([[47, 47], [46.5, 50], [47.5, 53]]), .9).lav(ovale(30, 80, 9, 2), ENCRE, .15);
    A.ink(courbe([[22, 80], [28, 79.4], [36, 80.2]]), 1, .6);
  },
  banc(A) {
    A.lav(ovale(40, 79, 30, 2.4), ENCRE, .14);
    for (const y of [38, 45]) { const d = `M14 ${y}L66 ${y - 1}L66 ${y + 4.4}L14 ${y + 5.2}Z`; A.lav(d, BOIS, .55).ink(d, 1.1); A.ink(courbe([[18, y + 2.4], [34, y + 2], [50, y + 2.6]]), .5, .4); }
    const assise = "M10 55L70 54L71 59L9 60Z"; A.lav(assise, BOIS, .65).lav("M9 58L71 57L71 59L9 60Z", ENCRE, .2).ink(assise, 1.3);
    A.ink(courbe([[14, 59.5], [36, 59], [62, 58.6]]), .5, .4);
    for (const [x0, x1] of [[15, 13], [65, 67]]) { A.plume([[x0, 60], [x0 - .2, 68], [x1 + .2, 74], [x1, 79.5]], 2.6, 2.4); A.plume([[x0 + 1, 36], [x0 + 1, 44], [x0 + .5, 50], [x0 + .5, 55]], 2.2, 2.2); }
    for (const c of [-1, 1]) { const x = 40 + c * 31; A.ink(courbe([[x - c * 3, 47], [x + c * 2, 46], [x + c * 3, 51], [x, 54]]) + courbe([[x, 54], [x - c * 1.6, 51.5], [x + c * .4, 50.4]]), 1.4); }
  },
  nichoir(A) {
    A.plume([[40, 80], [40.4, 66], [39.6, 54], [40, 44]], 3.4, 2.8).lav("M38.3 44L41.7 44L42 80L38 80Z", BOIS, .5);
    const maison = "M26 26L40 14L54 26L54 46L26 46Z";
    A.lav(maison, BOIS, .55).lav("M40 14L54 26L54 46L40 46Z", ENCRE, .1).ink(maison, 1.3);
    A.ink(courbe([[29, 32], [40, 31.5], [51, 32]]) + courbe([[29, 39], [40, 38.6], [51, 39.2]]), .5, .4);
    const toit = "M22 28L40 10.5L58 28L55.5 30L40 15L24.5 30Z"; A.lav(toit, ENCRE, .35).lav(toit, FLEUR, .3).ink(toit, 1.3);
    A.lav(ovale(40, 29, 3.6, 3.6, 0, 8), ENCRE, .75).ink(ovale(40, 29, 3.8, 3.8, 0, 8), 1.1).ink(courbe([[40, 36], [40, 39.6]]), 1.6);
    // une mésange sur le toit
    const corps = "M48 13Q51 8 56 9Q59 10 60 12L64 11L60.5 14Q57 17 52 16Q49 15.5 48 13Z";
    A.lav(corps, OR, .7).lav("M52 9.6Q55 8.6 57.5 9.6Q56 12 52 11.6Z", ZINC, .6).ink(corps, 1).fill(point(54.4, 11.2, .8)).ink("M50 12.6L47.6 13.1", 1).ink(courbe([[54, 16], [54.4, 18]]) + courbe([[56, 16], [56.6, 18]]), .7);
    A.lav(ovale(40, 79.6, 8, 1.8), ENCRE, .15);
  },
  arrosoir(A) {
    A.lav(ovale(36, 79, 22, 2.4), ENCRE, .15);
    const corps = "M20 46Q36 43 52 46L50 77Q36 79 22 77Z";
    A.lav(corps, ZINC, .55).lav("M40 44.6Q47 45 52 46L50 77Q45 78 40 78.4Z", ENCRE, .14).reserve("M25 50Q27 62 26 74L28.5 74Q30 62 28 50Z", .5).ink(corps, 1.4);
    A.ink(courbe([[21, 55], [36, 53.6], [51.4, 55]]) + courbe([[22.4, 70], [36, 69], [50.4, 70]]), .6, .5);
    A.ink("M24 45.6Q22 28 36 27Q50 28 48 45.4", 1.8).ink("M27 45.4Q26 31 36 30.4Q46 31 45 45.2", .8, .6);
    const bec = "M51 62L69 38L72 40L53 67Z"; A.lav(bec, ZINC, .5).ink(bec, 1.2);
    const pomme = "M67 35.6L74 33L77 41.4L70.4 43Z"; A.lav(pomme, ZINC, .6).ink(pomme, 1.2).fill(point(73.4, 36, .5) + point(74.6, 39, .5) + point(72, 39.8, .5), ENCRE, .7);
    for (const [x, y] of [[76, 47], [79, 53], [74, 55]]) { const g = `M${x} ${y - 2.6}Q${x + 1.6} ${y} ${x} ${y + 1.2}Q${x - 1.6} ${y} ${x} ${y - 2.6}Z`; A.lav(g, EAU, .7).ink(g, .7, .7); }
  },
  ruche(A) {
    A.lav(ovale(40, 79, 24, 2.4), ENCRE, .15);
    A.lav("M14 70L66 70L64 75L16 75Z", BOIS, .6).ink("M14 70L66 70L64 75L16 75Z", 1.2).plume([[20, 75], [20, 77], [20, 78], [20, 80]], 2.6, 2.4).plume([[60, 75], [60, 77], [60, 78], [60, 80]], 2.6, 2.4);
    const dome = "M18 70Q16 48 26 36Q33 28 40 28Q47 28 54 36Q64 48 62 70Z";
    A.lav(dome, OR, .55).lav("M40 28Q47 28 54 36Q64 48 62 70L44 70Q50 50 40 28Z", BOIS, .4).ink(dome, 1.4);
    let anneaux = ""; for (const [y, w] of [[34, 10], [40, 15], [46, 18.5], [52, 20.5], [58, 21.6], [64, 22]]) anneaux += courbe([[40 - w, y], [40, y + 2], [40 + w, y]]);
    A.ink(anneaux, .8, .6);
    A.lav("M34 70Q34 63 40 63Q46 63 46 70Z", ENCRE, .75).ink("M34 70Q34 63 40 63Q46 63 46 70", 1.1);
    for (const [x, y, a] of [[66, 30, -20], [72, 44, 15], [58, 18, 5]]) { A.lav(ovale(x, y, 2.6, 1.7, a, 8), OR, .85).ink(ovale(x, y, 2.6, 1.7, a, 8), .8).ink(courbe([[x - 1, y], [x - 1.4, y - 1.8]]) + courbe([[x + .6, y], [x + .2, y - 1.8]]), .5).lav(ovale(x - .4, y - 2.6, 2, 1.4, a - 30, 6), PAPIER, .7).ink(ovale(x - .4, y - 2.6, 2, 1.4, a - 30, 6), .5, .6); }
    A.ink("M62 36Q66 38 66 30", .6, .45).ink("M66 44Q70 40 72 44", .6, .45);
  },
  mare(A) {
    const eau = "M8 70Q10 61 26 59Q44 57 60 60Q74 63 72 71Q70 78 50 78.6Q26 79 14 76Q7 74 8 70Z";
    A.lav(eau, EAU, .55).lav("M14 66Q32 62 50 63", EAU, 0).lav("M30 72Q46 69 66 70Q64 76 48 77Q34 77 30 72Z", EAU, .35).ink(eau, 1.2);
    A.ink(courbe([[18, 66], [26, 65.4]]) + courbe([[38, 70], [50, 69.4]]) + courbe([[56, 64], [62, 64.4]]), .6, .5);
    for (const [x, y, rx] of [[9, 72, 4], [70, 66, 3.6], [64, 76, 4.4], [14, 77, 3.4]]) { const d = ovale(x, y, rx, rx * .62, 0, 8); A.lav(d, PIERRE, .6).ink(d, 1); }
    const n = "M40 69Q33 69 33 66Q34 63 40 63.4L41 66.4Z"; A.lav(n, SEVE, .6).ink(n, 1);
    for (let i = 0; i < 5; i++) { const a = -150 + i * 30, p = `M46 64L${f(46 + Math.cos(a * Math.PI / 180) * 4.4)} ${f(64 + Math.sin(a * Math.PI / 180) * 4.4 - 1)}L${f(46 + Math.cos((a + 15) * Math.PI / 180) * 2)} ${f(64 + Math.sin((a + 15) * Math.PI / 180) * 2)}Z`; A.lav(p, FLEUR, .55).ink(p, .7); }
    A.lav(point(46, 63.4, 1.2), OR, .9);
    for (const [x, h, c] of [[62, 34, 1], [66, 42, -1], [70, 28, 1]]) { A.plume([[x, 62], [x + c * .6, 62 - h * .4], [x - c * .4, 62 - h * .8], [x + c, 62 - h]], 1.4, .6); const q = ovale(x + c * .6, 62 - h * .82, 1.6, 4, c * 4, 8); A.lav(q, BOIS, .8).ink(q, .8); A.lav(`M${x} ${60}Q${x - c * 8} ${50} ${x - c * 7} ${40}Q${x - c * 4} ${50} ${x + c} ${60}Z`, SEVE, .45).ink(`M${x} ${60}Q${x - c * 8} ${50} ${x - c * 7} ${40}`, .8, .7); }
  },
  arche(A) {
    A.lav(ovale(40, 79.4, 32, 2.2), ENCRE, .14);
    for (const x of [14, 60]) { const d = `M${x} 80L${x} 32L${x + 6} 32L${x + 6} 80Z`; A.lav(d, BOIS, .3).ink(d, 1.1); let t = ""; for (let y = 36; y < 78; y += 7) t += `M${x} ${y}L${x + 6} ${y + 5}M${x + 6} ${y}L${x} ${y + 5}`; A.ink(t, .5, .55); }
    A.ink("M14 32Q14 6 40 6Q66 6 66 32", 1.4).ink("M20 32Q20 12 40 12Q60 12 60 32", 1.4).ink(courbe([[17, 20], [22, 22]]) + courbe([[25, 11.4], [28, 15.6]]) + courbe([[40, 6], [40, 12]]) + courbe([[55, 11.4], [52, 15.6]]) + courbe([[63, 20], [58, 22]]), .8, .7);
    const fl = [[16, 26], [22, 14], [31, 8], [44, 7.6], [55, 11], [63, 22], [18, 44], [64, 40], [62, 58], [16, 62], [36, 9]];
    for (const [x, y] of [[19, 34], [14, 50], [62, 30], [65, 50], [27, 12], [50, 8], [60, 16], [17, 68], [63, 66]]) { const d = ovale(x, y, 3.4, 1.8, (x * 7) % 90, 8); A.lav(d, SEVE, .6).ink(d, .7, .8); }
    for (const [x, y] of fl) { const d = ovale(x, y, 2.6, 2.4, 0, 8); A.lav(d, FLEUR, .7).ink(d, .8).ink(courbe([[x - 1, y + .2], [x, y - .8], [x + 1, y + .1]]), .5, .7); }
  },
  fontaine(A) {
    A.lav(ovale(40, 79, 30, 2.4), ENCRE, .15);
    const bassin = "M10 62Q40 56 70 62L66 76Q40 80 14 76Z";
    A.lav(bassin, PIERRE, .5).lav("M40 58Q56 59 70 62L66 76Q54 78.6 40 79Z", ENCRE, .1).ink(bassin, 1.3);
    A.lav(ovale(40, 62, 30, 4.6, 0, 12), EAU, .55).ink(ovale(40, 62, 30, 4.6, 0, 12), 1);
    const pied = "M36 60L35 40L45 40L44 60Z"; A.lav(pied, PIERRE, .55).ink(pied, 1.2);
    const vasque = "M22 36Q40 33 58 36Q54 45 40 46Q26 45 22 36Z"; A.lav(vasque, PIERRE, .55).lav("M40 34Q50 34.6 58 36Q54 45 40 46Z", ENCRE, .12).ink(vasque, 1.2);
    A.lav(ovale(40, 36, 18, 2.6, 0, 10), EAU, .6);
    A.plume([[40, 35], [40, 26], [40.4, 20], [40, 16]], 2.4, 1.2, .7, EAU);
    A.ink("M40 17Q30 14 25 34M40 17Q50 14 55 34", 1.2, .85, EAU).ink("M40 18Q34 19 31 34M40 18Q46 19 49 34", .8, .7, EAU).ink("M22 40Q18 48 17 60M58 40Q62 48 63 60", .9, .7, EAU);
    A.ink(courbe([[24, 63], [30, 62.4]]) + courbe([[48, 64], [56, 63.6]]), .6, .55);
  },
  papillons(A) {
    A.ink("M10 70Q22 50 30 58Q40 66 46 48", .7, .5).node(svg("path", { d: "M46 48Q52 30 64 30Q74 30 70 18", fill: "none", stroke: ENCRE, "stroke-width": .7, "stroke-dasharray": "1.6 2.4", "stroke-opacity": .55, "stroke-linecap": "round" }));
    papillon(A, 30, 56, 1.25, -12, OR, FLEUR); papillon(A, 58, 34, 1, 18, FLEUR, OR); papillon(A, 68, 14, .8, -25, ZINC, OR);
    A.ink(courbe([[6, 80], [10, 74], [12, 70]]) + courbe([[16, 80], [17, 76]]), .9, .6);
  },
  cabane(A) {
    A.lav(ovale(40, 79.4, 32, 2.2), ENCRE, .15);
    const murs = "M14 44L66 44L66 80L14 80Z"; A.lav(murs, BOIS, .5).lav("M48 44L66 44L66 80L48 80Z", ENCRE, .12).ink(murs, 1.3);
    let pl = ""; for (let x = 20; x < 66; x += 6) pl += `M${x} 45L${x - .3} 79`; A.ink(pl, .5, .4);
    const toit = "M8 46L40 18L72 46L68 48L40 23.6L12 48Z"; A.lav(toit, FLEUR, .35).lav(toit, ENCRE, .25).ink(toit, 1.4);
    A.ink(courbe([[19, 38], [40, 37.4], [61, 38]]) + courbe([[26, 32], [40, 31.4], [54, 32]]) + courbe([[33, 26], [40, 25.6], [47, 26]]), .5, .5);
    const porte = "M22 80L22 56Q28 52 34 56L34 80Z"; A.lav(porte, BOIS, .5).lav(porte, ENCRE, .15).ink(porte, 1.1).fill(point(31.6, 68, .9));
    const fen = "M44 52L58 52L58 64L44 64Z"; A.lav(fen, OR, .55).ink(fen, 1.2).ink("M51 52L51 64M44 58L58 58", .9);
    A.lav("M54 22L54 12L60 12L60 27Z", PIERRE, .6).ink("M54 22L54 12L60 12L60 27", 1.1).ink(courbe([[57, 10], [55, 6], [59, 3], [56, -2]]), .8, .45);
  },
  "cerf-volant"(A) {
    const k = "M40 4L54 18L40 40L26 18Z";
    A.lav("M40 4L54 18L40 18Z", FLEUR, .6).lav("M40 18L54 18L40 40Z", OR, .6).lav("M40 18L40 40L26 18Z", FLEUR, .45).lav("M26 18L40 4L40 18Z", OR, .5).ink(k, 1.3).ink("M40 4L40 40M26 18L54 18", .8, .8);
    A.ink("M40 40Q30 50 36 58Q42 66 32 74", .8, .75);
    for (const [x, y] of [[33, 48], [37, 57], [35, 67]]) { const n = `M${x - 3} ${y - 2}L${x} ${y}L${x - 3} ${y + 2}ZM${x + 3} ${y - 2}L${x} ${y}L${x + 3} ${y + 2}Z`; A.lav(n, FLEUR, .7).ink(n, .6); }
    A.node(svg("path", { d: "M40 18Q58 40 62 79", fill: "none", stroke: ENCRE, "stroke-width": .6, "stroke-opacity": .6 }));
    A.plume([[62, 80], [62, 78], [62, 76.5], [62, 75]], 1.8, 1.4).ink(courbe([[56, 80], [62, 79.6], [70, 80]]), .8, .6);
    A.ink("M10 22Q16 20 20 23M8 30Q14 29 17 31", .7, .45);
  },
  observatoire(A) {
    A.lav(ovale(40, 79.4, 30, 2.2), ENCRE, .15);
    const base = "M16 50L64 50L64 80L16 80Z"; A.lav(base, PIERRE, .5).lav("M46 50L64 50L64 80L46 80Z", ENCRE, .12).ink(base, 1.3);
    let pierres = ""; for (const y of [58, 66, 74]) pierres += `M16.6 ${y}L63.4 ${y}`; for (const [x, y] of [[26, 50], [42, 58], [30, 66], [50, 66], [22, 74], [46, 74], [56, 50]]) pierres += `M${x} ${y}L${x} ${y + 8}`; A.ink(pierres, .5, .4);
    const dome = "M14 50Q14 22 40 22Q66 22 66 50Z"; A.lav(dome, ZINC, .55).lav("M40 22Q66 22 66 50L46 50Q52 34 40 22Z", ENCRE, .15).ink(dome, 1.4);
    A.ink(courbe([[22, 32], [40, 30], [58, 32]]) + courbe([[16, 42], [40, 40], [64, 42]]), .5, .4);
    const fente = "M36 22.4L44 22.4L45 50L35 50Z"; A.lav(fente, ENCRE, .6).ink(fente, 1);
    const lun = "M38 34L58 12L62 15L42 38Z"; A.lav(lun, OR, .6).ink(lun, 1.2).ink("M56 12.6L63 17.6", 1.6);
    const porte = "M34 80L34 66Q40 62 46 66L46 80Z"; A.lav(porte, BOIS, .6).ink(porte, 1.1);
    for (const [x, y, r] of [[14, 10, 3], [70, 30, 2.4], [26, 4, 2]]) A.lav(etoile(x, y, r), OR, .9).ink(etoile(x, y, r), .6, .7);
    const lune = "M70 4Q63 8 66 15Q70 19 75 15Q69 13 70 4Z"; A.lav(lune, OR, .75).ink(lune, .8);
  },
};

/** Décoration de jardin dans un <g> (repère 80 × 80, base à y = 80). */
export function decoration(id) {
  const A = atelier();
  (DECOS[id] || DECOS.lanterne)(A);
  return A.g({ class: `decoration decoration-${DECOS[id] ? id : "lanterne"}`, "data-id": id });
}

// ───────────────────────── emblèmes (ex-libris) ─────────────────────────
const PIGMENTS = { francais: "#c4553d", maths: "#3d5a99", histoire: "#a35d32", geographie: "#5f8a6e", emc: "#7d4f73", svt: "#5a8a3a", "physique-chimie": "#b86f32", technologie: "#56707e", anglais: "#a83e48", espagnol: "#cc8a24", "arts-plastiques": "#b04a82", "education-musicale": "#2c7b80", eps: "#d06a2c" };

const MOTIFS = {
  francais(A, P) {
    const jar = "M24 66Q22 58 28 56L44 56Q50 58 48 66L47 74Q36 77 25 74Z";
    A.lav(jar, P, .55).lav("M36 56L44 56Q50 58 48 66L47 74Q42 75.6 36 76Z", ENCRE, .15).ink(jar, 2.2).ink("M29 56L29 51L43 51L43 56", 2).lav("M29 51L43 51L43 56L29 56Z", ENCRE, .5);
    const plume = "M40 60Q44 40 58 28Q68 20 76 16Q72 26 66 34Q58 46 40 60Z";
    A.lav(plume, PAPIER, .7).lav("M40 60Q56 42 76 16Q72 26 66 34Q58 46 40 60Z", P, .35).ink(plume, 2.2).ink("M36 64Q52 42 74 19", 1.6);
    A.ink(courbe([[60, 30], [64, 34]]) + courbe([[55, 36], [59, 40]]) + courbe([[66, 24], [69, 27]]), 1, .6);
  },
  maths(A, P) {
    const rap = "M20 72A30 30 0 0 1 80 72Z";
    A.lav(rap, P, .3).ink(rap, 2.2).ink("M36 72A14 14 0 0 1 64 72", 1.2, .7);
    let t = ""; for (let i = 1; i < 12; i++) { const a = Math.PI * i / 12, l = i % 3 === 0 ? 6 : 3.5; t += `M${f(50 - Math.cos(a) * 30)} ${f(72 - Math.sin(a) * 30)}L${f(50 - Math.cos(a) * (30 - l))} ${f(72 - Math.sin(a) * (30 - l))}`; } A.ink(t, 1.1, .8);
    A.ink("M50 20L34 70M50 20L62 66", 2.8).ink("M62 66L63.5 72", 1.6).fill(point(50, 20, 4)).lav(point(50, 20, 4.6), P, .6).ink("M50 16L50 10", 2.2);
    A.ink("M38 56Q48 52 59 56", 1.4, .8);
  },
  histoire(A, P) {
    const amph = "M42 22L58 22L56 30Q70 40 68 56Q66 72 54 78L46 78Q34 72 32 56Q30 40 44 30Z";
    A.lav(amph, P, .55).lav("M50 22L58 22L56 30Q70 40 68 56Q66 72 54 78L50 78Z", ENCRE, .15).ink(amph, 2.4);
    A.ink("M44 30Q34 26 34 36Q34 42 38 44M56 30Q66 26 66 36Q66 42 62 44", 2);
    A.ink("M34 50L66 50M33.4 60L66.6 60", 1.4, .8).ink("M36 50L36 54L40 54L40 57L44 57L44 53L48 53L48 57L52 57L52 53L56 53L56 57L60 57L60 54L64 54L64 50", 1, .85);
    A.lav("M33.4 50L66.6 50L66.6 60L33.4 60Z", PAPIER, .5).ink("M40 22L60 22", 2.2).ink("M46 78L45 82L55 82L54 78", 1.8);
  },
  geographie(A, P) {
    A.ink(ovale(50, 52, 27, 27, 0, 16), 1.6, .8).ink(ovale(50, 52, 22, 22, 0, 16), .9, .6);
    const rose = "M50 18L55 47L84 52L55 57L50 86L45 57L16 52L45 47Z";
    A.lav("M50 18L55 47L50 52Z", P, .75).lav("M50 86L45 57L50 52Z", P, .75).lav("M84 52L55 57L50 52Z", P, .4).lav("M16 52L45 47L50 52Z", P, .4).ink(rose, 2).ink("M50 18L50 86M16 52L84 52", .9, .6);
    const d = "M50 32L53 49L68 52L53 55L50 72L47 55L32 52L47 49Z"; A.ink(d, .9, .5);
    A.fill(point(50, 52, 2.2));
    A.node(texte(50, 15, "N", { "font-family": TITRE, "font-size": 11, "text-anchor": "middle" }));
  },
  emc(A, P) {
    A.plume([[50, 80], [50, 60], [50, 40], [50, 22]], 3.4, 2.4).ink("M38 82L62 82", 2.6).ink("M42 79Q50 74 58 79", 1.6);
    A.ink("M22 32Q50 26 78 32", 2.6).fill(point(50, 22, 3.2)).lav(point(50, 22, 3.6), P, .6);
    for (const x of [24, 76]) { A.ink(`M${x} 32L${x - 10} 54M${x} 32L${x + 10} 54`, 1.1, .85); const pl = `M${x - 13} 54Q${x} 64 ${x + 13} 54Z`; A.lav(pl, P, .5).ink(pl, 2); }
    const f1 = ovale(58, 70, 5, 2, -30, 8), f2 = ovale(42, 70, 5, 2, 30, 8); A.lav(f1, SEVE, .6).lav(f2, SEVE, .6).ink(f1, 1).ink(f2, 1).ink("M50 74Q47 68 42 66M50 74Q53 68 58 66", 1);
  },
  svt(A, P) {
    const fe = "M24 76Q20 46 40 30Q56 18 76 18Q76 40 64 56Q48 74 24 76Z";
    A.lav(fe, P, .5).lav("M24 76Q50 48 76 18Q76 40 64 56Q48 74 24 76Z", P, .3).ink(fe, 2.2).ink("M20 80Q46 50 72 22", 1.8);
    A.ink("M36 60Q34 48 38 42M44 52Q44 40 50 34M52 44Q54 34 60 28M38 62Q48 62 56 58M46 54Q56 52 64 46M54 44Q62 42 68 34", 1, .7);
    A.lav(ovale(62, 62, 12, 12, 0, 12), PAPIER, .55).ink(ovale(62, 62, 12, 12, 0, 12), 2.6).plume([[70.5, 70.5], [74, 74], [77, 77], [82, 82]], 4.6, 4.6);
    A.ink(courbe([[56, 57], [58, 54], [62, 53]]), 1.2, .7);
  },
  "physique-chimie"(A, P) {
    const fiole = "M38 22L50 22L50 40L66 74Q68 80 62 80L26 80Q20 80 22 74L38 40Z";
    A.lav("M30 58L58 58L66 74Q68 80 62 80L26 80Q20 80 22 74Z", P, .6).lav(fiole, P, .15).ink(fiole, 2.4).ink("M35 22L53 22", 2.4).ink(courbe([[30, 58], [44, 60], [58, 58]]), 1.2, .7);
    A.fill(point(36, 70, 1.6) + point(46, 66, 1.2) + point(52, 73, 1.8), REFLET, .8);
    for (const a of [0, 60, 120]) A.ink(ovale(68, 30, 14, 5, a, 12), 1.3, .85);
    A.fill(point(68, 30, 3)).lav(point(68, 30, 3.4), P, .7).fill(point(80, 28, 1.6) + point(62, 19, 1.6), ENCRE, .9);
  },
  technologie(A, P) {
    const roue = (cx, cy, R, n, ph) => { const pts = []; for (let i = 0; i < n * 4; i++) { const a = ph + i / (n * 4) * Math.PI * 2, rr = (i % 4 === 1 || i % 4 === 2) ? R : R * .8; pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]); } return "M" + pts.map(p => `${f(p[0])} ${f(p[1])}`).join("L") + "Z"; };
    const g1 = roue(40, 56, 24, 10, 0), g2 = roue(70, 30, 15, 7, .2);
    A.lav(g1, P, .5).lav(g2, P, .35).ink(g1, 2.2).ink(g2, 2);
    A.ink(ovale(40, 56, 9, 9, 0, 12), 1.8).ink(ovale(70, 30, 5, 5, 0, 10), 1.6).lav(ovale(40, 56, 9, 9, 0, 12), PAPIER, .6);
    A.ink("M40 38L40 47M40 65L40 74M22 56L31 56M49 56L58 56", 1.4, .8).fill(point(40, 56, 2.4) + point(70, 30, 1.8));
  },
  anglais(A, P) {
    const corps = "M26 52Q26 38 50 38Q74 38 74 52Q76 70 62 76L38 76Q24 70 26 52Z";
    A.lav(corps, P, .55).lav("M50 38Q74 38 74 52Q76 70 62 76L50 76Z", ENCRE, .15).ink(corps, 2.4);
    A.ink("M74 50Q86 48 84 60Q82 68 72 68", 2.2).ink("M28 56Q18 52 14 40", 2.6).ink("M14 40L11 37", 2);
    A.lav("M36 38Q36 30 50 30Q64 30 64 38Z", P, .4).ink("M36 38Q36 30 50 30Q64 30 64 38", 2).fill(point(50, 27, 3)).ink(courbe([[30, 56], [50, 58], [70, 56]]), 1, .55);
    A.ink("M42 22Q38 16 43 12Q47 8 44 4M56 22Q52 16 57 12", 1.2, .55);
    A.reserve("M34 46Q36 42 42 41", .7);
  },
  espagnol(A, P) {
    const c = "M30 56Q22 50 28 42Q34 36 42 42Q48 36 54 44Q58 52 52 58Q60 64 54 74Q46 82 38 76Q30 82 24 74Q18 64 30 56Z";
    A.lav(c, P, .55).ink(c, 2.3).lav(ovale(38, 58, 5, 5, 0, 10), ENCRE, .8).ink(ovale(38, 58, 6.6, 6.6, 0, 12), 1, .7);
    A.ink("M30 70L48 70", 1.8).plume([[42, 50], [52, 40], [62, 30], [72, 20]], 4.6, 3.6);
    const tete = "M70 22L78 12L84 16L76 26Z"; A.lav(tete, ENCRE, .45).ink(tete, 1.8).fill(point(76, 13.6, 1.1) + point(80, 18, 1.1), ENCRE, .9);
    A.ink("M32 68L71 23M34 70L73 25", .6, .55);
  },
  "arts-plastiques"(A, P) {
    const pal = "M50 22Q76 22 80 44Q82 60 66 60Q58 60 60 70Q62 80 46 80Q22 78 20 54Q18 26 50 22Z";
    A.lav(pal, PIERRE, .3).lav(pal, P, .15).ink(pal, 2.3).ink(ovale(64, 48, 4.4, 3.6, 0, 8), 1.8);
    for (const [x, y, c] of [[38, 32, P], [54, 30, OR], [30, 46, P], [32, 62, SEVE], [44, 70, EAU]]) A.lav(ovale(x, y, 5, 4, 20, 8), c, .85).ink(ovale(x, y, 5, 4, 20, 8), 1, .7);
    A.plume([[84, 12], [70, 30], [58, 46], [48, 58]], 3.2, 2.4).lav("M44 56L50 60L42 68Q38 70 40 64Z", P, .8).ink("M44 56L50 60L42 68Q38 70 40 64Z", 1.6);
  },
  "education-musicale"(A, P) {
    const luth = "M30 58Q30 40 46 40Q62 42 62 58Q62 78 46 80Q30 80 30 58Z";
    A.lav(luth, P, .5).lav("M46 40Q62 42 62 58Q62 78 46 80Z", ENCRE, .14).ink(luth, 2.3).ink(ovale(46, 58, 4.6, 4.6, 0, 10), 1.4).lav(ovale(46, 58, 4.6, 4.6, 0, 10), ENCRE, .5);
    A.plume([[46, 40], [46, 32], [46, 26], [46, 20]], 4.4, 3.6).ink("M46 20L36 14", 3).ink("M43 66L49 66M44 40L44 66M48 40L48 66", .7, .8);
    A.ink("M64 28L64 52M78 24L78 48M64 28L78 24", 2.4).ink("M64 32L78 28", 2).fill(ovale(60, 52, 4.6, 3.4, -20, 10)).fill(ovale(74, 48, 4.6, 3.4, -20, 10));
  },
  eps(A, P) {
    const ballon = ovale(64, 32, 16, 16, 0, 16);
    A.lav(ballon, P, .55).lav("M64 16Q80 16 80 32Q80 48 64 48Q72 32 64 16Z", ENCRE, .15).ink(ballon, 2.2).ink("M50 26Q64 34 78 26M52 42Q64 34 76 42M64 16Q58 32 64 48", 1.2, .75);
    const chaussure = "M14 74Q14 64 22 62L34 56Q40 54 44 58L58 66Q70 68 76 72Q80 78 72 80L20 80Q14 80 14 74Z";
    A.lav(chaussure, P, .3).lav("M14 76L80 76Q80 78 72 80L20 80Q14 80 14 76Z", ENCRE, .6).ink(chaussure, 2.2).ink("M36 60L40 66M42 62L46 68M48 64L50 69", 1.2, .8);
    A.ink("M12 50L26 50M8 58L18 58M30 44L40 44", 1.4, .55);
  },
};

/** Emblème d'une matière, à la manière d'un ex-libris : <svg viewBox="0 0 100 100">. */
export function embleme(matiere, taille = 64) {
  const id = MOTIFS[matiere] ? matiere : "francais", P = `var(--pigment, ${PIGMENTS[id]})`;
  const s = vbox("0 0 100 100", taille, { class: `embleme embleme-${id}`, role: "img", "aria-label": `Emblème : ${id}` });
  const fin = taille < 48;
  const A = atelier();
  A.lav(ovale(50, 50, 44, 44, 0, 18), P, .13);
  A.ink(ovale(50, 50, 47, 47, 0, 20), fin ? 3.2 : 2.2).ink(ovale(50, 50, 42.5, 42.5, 0, 20), fin ? 1.4 : .8, .7);
  if (!fin) { let d = ""; for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4; d += point(50 + Math.cos(a) * 44.8, 50 + Math.sin(a) * 44.8, 1.2); } A.fill(d, ENCRE, .8); }
  const M = atelier();
  MOTIFS[id](M, P);
  const motif = M.g({ transform: "translate(50 51) scale(.78) translate(-50 -50)" });
  if (fin) motif.querySelectorAll("path[stroke]").forEach(p => p.setAttribute("stroke-width", f(Number(p.getAttribute("stroke-width")) * 1.45)));
  s.append(A.g(), motif);
  return s;
}

// ───────────────────────── planche d'herbier ─────────────────────────
const VIDES = new Set(["le", "la", "les", "l", "un", "une", "des", "de", "du", "d", "et", "en", "à", "a", "au", "aux", "ou", "par", "pour", "sur", "dans", "avec", "son", "sa", "ses", "leur", "leurs", "ce", "cette", "ces", "qui", "que", "est"]);
const sansAccent = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
function nomLatin(titre, graine) {
  const mots = sansAccent(String(titre || "Planta")).toLowerCase().replace(/[^a-z\s'-]/g, " ").split(/[\s'-]+/).filter(m => m.length > 2 && !VIDES.has(m));
  const r = rng(graine || titre);
  const genre = m => {
    if (!m) return "Planta";
    let x = m;
    if (/tions?$/.test(x)) x = x.replace(/tions?$/, "tio");
    else if (/ites?$/.test(x)) x = x.replace(/ites?$/, "itas");
    else if (/ismes?$/.test(x)) x = x.replace(/ismes?$/, "ismus");
    else if (/iques?$/.test(x)) x = x.replace(/iques?$/, "ica");
    else if (/eurs?$/.test(x)) x = x.replace(/eurs?$/, "or");
    else if (/ies?$/.test(x)) x = x.replace(/ies?$/, "ia");
    else if (/ees?$/.test(x)) x = x.replace(/ees?$/, "ea");
    else if (/es?$/.test(x)) x = x.replace(/es?$/, "a");
    else if (/[aeiou]s$/.test(x)) x = x.replace(/s$/, "");
    else if (/[^aeiou]s$/.test(x)) x = x.replace(/s$/, "us");
    else if (/[^aeiou]$/.test(x)) x += "us";
    return x[0].toUpperCase() + x.slice(1);
  };
  const espece = m => {
    if (!m) return ["vulgaris", "eclorensis", "memorabilis", "studiosa", "scholaris"][Math.floor(r() * 5)];
    let x = m;
    if (/(aux|ales?)$/.test(x)) return x.replace(/(aux|ales?)$/, "alis");
    if (/(elles?|els?)$/.test(x)) return x.replace(/(elles?|els?)$/, "alis");
    if (/aires?$/.test(x)) return x.replace(/aires?$/, "aris");
    if (/iques?$/.test(x)) return x.replace(/iques?$/, "ica");
    if (/(ales?|eaux?)$/.test(x)) return x.replace(/(ales?|eaux?)$/, "alis");
    if (/(ees?|es)$/.test(x) && x.length > 5) return x.replace(/(ees?|es)$/, "ata");
    if (/(e)$/.test(x)) return x.replace(/e$/, "is");
    if (/s$/.test(x)) return x.replace(/s$/, "ii");
    return x + (r() < .5 ? "ensis" : "alis");
  };
  // quelques racines savantes pour les mots les plus courants
  const LEX = { egal: "aequalis", egales: "aequalis", egaux: "aequalis", lumiere: "lux", couleurs: "colorata", couleur: "color", eau: "aqua", terre: "terra", nombre: "numerus", nombres: "numeri", temps: "tempus", ville: "urbs", guerre: "bellum", societe: "societas", feodale: "feudalis", corps: "corpus", vie: "vita", mots: "verba", phrase: "sententia", fraction: "fractio", fractions: "fractio", energie: "energia", air: "aer", monde: "mundus", roi: "rex", republique: "res publica" };
  const m1 = mots[0], m2 = mots[1];
  const g = LEX[m1] && !LEX[m1].includes(" ") && !/(is|ata|alis)$/.test(LEX[m1]) ? LEX[m1][0].toUpperCase() + LEX[m1].slice(1) : genre(m1);
  const e = m2 ? (LEX[m2] && /(is|ata|alis|a)$/.test(LEX[m2]) ? LEX[m2] : espece(m2)) : espece(null);
  return `${g} ${e.toLowerCase()}`;
}
const ruban = (x, y, w, h, a) => {
  const pts = [[-w / 2, -h / 2], [-w / 4, -h / 2 - .6], [w / 4, -h / 2 + .4], [w / 2, -h / 2], [w / 2 - 1.4, -h / 4], [w / 2 + .8, 0], [w / 2 - 1, h / 4], [w / 2, h / 2], [0, h / 2 + .5], [-w / 2, h / 2], [-w / 2 + 1.2, h / 4], [-w / 2 - .8, 0], [-w / 2 + 1, -h / 4]];
  const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180);
  return "M" + pts.map(([u, v]) => `${f(x + u * c - v * s)} ${f(y + u * s + v * c)}`).join("L") + "Z";
};

/**
 * Grande planche d'herbier pour la collection (<svg viewBox="0 0 300 400">).
 * @param {object} o { chapitre, titre, forme, couleur, numero, doree }
 */
export function planche({ chapitre = "", titre = "", forme = "rose", couleur = null, numero = 1, doree = false } = {}) {
  const s = svg("svg", { viewBox: "0 0 300 400", width: 300, height: 400, role: "img", "aria-label": `Planche n° ${numero} : ${titre}`, class: `planche${doree ? " doree" : ""}` });
  if (couleur) s.setAttribute("style", `--pigment:${couleur}`);
  const r = rng(`planche|${chapitre}|${titre}`);
  const feuille = svg("g", {});
  feuille.append(svg("rect", { x: 4, y: 4, width: 292, height: 392, rx: 2, fill: PAPIER, filter: "url(#grain)" }));
  feuille.append(svg("rect", { x: 4, y: 4, width: 292, height: 392, rx: 2, fill: ENCRE, "fill-opacity": .03 }));
  feuille.append(svg("rect", { x: 4.5, y: 4.5, width: 291, height: 391, rx: 2, fill: "none", stroke: ENCRE, "stroke-width": .8, "stroke-opacity": .45 }));
  if (doree) {
    feuille.append(svg("rect", { x: 11, y: 11, width: 278, height: 378, fill: "none", stroke: OR, "stroke-width": 2.4 }));
    feuille.append(svg("rect", { x: 15.5, y: 15.5, width: 269, height: 369, fill: "none", stroke: OR, "stroke-width": .8 }));
    let coins = ""; for (const [x, y, sx, sy] of [[15.5, 15.5, 1, 1], [284.5, 15.5, -1, 1], [15.5, 384.5, 1, -1], [284.5, 384.5, -1, -1]]) coins += `M${x} ${y + sy * 16}Q${x + sx * 2} ${y + sy * 2} ${x + sx * 16} ${y}M${x + sx * 5} ${y + sy * 5}m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0`;
    feuille.append(svg("path", { d: coins, fill: "none", stroke: OR, "stroke-width": 1.1 }));
  } else feuille.append(svg("rect", { x: 14, y: 14, width: 272, height: 372, fill: "none", stroke: ENCRE, "stroke-width": .5, "stroke-opacity": .35 }));
  s.append(feuille);
  // le spécimen
  const sp = plante({ forme, stade: 5, graine: chapitre || titre, lueur: 1 });
  sp.setAttribute("transform", "translate(58 22) scale(2.3)");
  s.append(sp);
  // rubans adhésifs : coins du spécimen et tige
  const R = atelier();
  for (const [x, y, w, a] of [[150, 297, 30, -4]]) R.lav(ruban(x, y, w, 8, a), OR, .22).lav(ruban(x, y, w, 8, a), PAPIER, .35).ink(ruban(x, y, w, 8, a), .5, .3);
  for (const [x, y, a] of [[18, 18, -40], [282, 18, 40], [18, 382, 40], [282, 382, -40]]) R.lav(ruban(x, y, 30, 10, a), OR, .2).lav(ruban(x, y, 30, 10, a), PAPIER, .35).ink(ruban(x, y, 30, 10, a), .5, .28);
  // étiquette de spécimen
  const ex = 150, ey = 316, ew = 130, eh = 66;
  R.lav(`M${ex} ${ey}L${ex + ew} ${ey - 1}L${ex + ew + 1} ${ey + eh}L${ex + 1} ${ey + eh + 1}Z`, PAPIER, .8);
  R.ink(`M${ex} ${ey}L${ex + ew} ${ey - 1}L${ex + ew + 1} ${ey + eh}L${ex + 1} ${ey + eh + 1}Z`, 1.2, .85).ink(`M${ex + 4} ${ey + 15}L${ex + ew - 3} ${ey + 14.4}`, .6, .6).ink(`M${ex + 4} ${ey + 17}L${ex + ew - 3} ${ey + 16.4}`, .4, .5);
  R.node(texte(ex + ew / 2, ey + 10.5, "HERBIER D'ÉCLORE", { "font-family": TEXTE, "font-size": 6.4, "letter-spacing": 1.6, "text-anchor": "middle", opacity: .75 }));
  R.node(texte(ex + 6, ey + 33, nomLatin(titre, chapitre), { "font-family": MAIN, "font-size": 16.5, "font-style": "italic", fill: `var(--pigment-texte, ${ENCRE})` }));
  const court = String(titre || "").length > 34 ? String(titre).slice(0, 33) + "…" : String(titre || "");
  R.node(texte(ex + 6, ey + 45, court, { "font-family": TEXTE, "font-size": 6.6, opacity: .8 }));
  R.node(texte(ex + 6, ey + 59, `N° ${String(numero).padStart(3, "0")}`, { "font-family": TITRE, "font-size": 8.4 }));
  R.node(texte(ex + ew - 5, ey + 59, "leg. l'élève jardinier", { "font-family": MAIN, "font-size": 9, "text-anchor": "end", opacity: .7 }));
  if (doree) { R.lav(point(ex + ew - 4, ey + 2, 9), OR, .85).ink(point(ex + ew - 4, ey + 2, 9), 1, .8).ink(etoile(ex + ew - 4, ey + 2, 5.4), .9, .85).lav(etoile(ex + ew - 4, ey + 2, 5.4), PAPIER, .5); }
  // annotations de marge : figure et échelle
  R.node(texte(26, 330, "fig. 1", { "font-family": MAIN, "font-size": 13, opacity: .75, transform: "rotate(-4 26 330)" }));
  R.ink("M26 352L86 352M26 349L26 355M46 350L46 354M66 350L66 354M86 349L86 355", .8, .7).lav("M26 351L46 351L46 353L26 353Z", ENCRE, .6).lav("M66 351L86 351L86 353L66 353Z", ENCRE, .6);
  R.node(texte(26, 364, "0", { "font-family": TEXTE, "font-size": 5.6, opacity: .7 })).node(texte(84, 364, "3 cm", { "font-family": TEXTE, "font-size": 5.6, opacity: .7 }));
  R.ink(courbe([[100, 334], [118, 330], [136, 334]]) , .6, .5).ink("M132 331.4L136.4 334L131.6 336", .6, .5);
  void r;
  s.append(R.g());
  return s;
}
