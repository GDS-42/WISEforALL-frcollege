// ÉCLORE — Planches botaniques génératives (charte « Herbier » : encre, lavis d'aquarelle, papier en réserve).
// Chaque chapitre est une plante ; elle grandit avec la mémoire. Repère 80 × 120, sol à y = 120.
// Stades : 0 graine endormie, 1 germe, 2 jeune pousse, 3 bouton, 4 floraison, 5 splendeur.
// Couleurs : uniquement des jetons CSS hérités (--encre, --pigment, --or, --papier, --seve) avec repli.
// Filtres et marqueurs globaux : voir src/ui/defs.js (#aquarelle, #halo).
import { svg } from "./ui/dom.js";

export const NOMS_STADES = ["Graine", "Germe", "Pousse", "Bouton", "Floraison", "Splendeur"];

const ENCRE = "var(--encre, #3b2a1e)";
const PIG = "var(--pigment, #c4553d)";
const SEVE = "var(--seve, var(--ok, #6f8a4e))";
const OR = "var(--or, #c9a03c)";
const PAPIER = "var(--papier, #f6efe0)";
const REFLET = "var(--reflet, var(--papier, #f6efe0))";
const MAIN = "var(--f-main, 'Caveat', 'Segoe Script', cursive)";

// ───────────────────────── hasard déterministe et géométrie ─────────────────────────
function rng(graine) {
  let s = 2166136261;
  for (const c of String(graine)) s = Math.imul(s ^ c.charCodeAt(0), 16777619) >>> 0;
  return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
let COMPTEUR = 0;
const f = v => Math.round(v * 10) / 10;
const rad = d => d * Math.PI / 180;
const deg = a => a * 180 / Math.PI;
const pt = p => `${f(p[0])} ${f(p[1])}`;
function bz(p, t) { const u = 1 - t; return [0, 1].map(i => u * u * u * p[0][i] + 3 * u * u * t * p[1][i] + 3 * u * t * t * p[2][i] + t * t * t * p[3][i]); }
function bzd(p, t) { const u = 1 - t; return [0, 1].map(i => 3 * u * u * (p[1][i] - p[0][i]) + 6 * u * t * (p[2][i] - p[1][i]) + 3 * t * t * (p[3][i] - p[2][i])); }
const angB = (p, t) => { const d = bzd(p, t); return deg(Math.atan2(d[1], d[0])); };
/** Repère local : u le long de l'angle, v en travers. */
const mk = (x, y, a, sx = 1, sy = 1) => { const c = Math.cos(rad(a)), s = Math.sin(rad(a)); return (u, v) => [x + u * sx * c - v * sy * s, y + u * sx * s + v * sy * c]; };
function seg(pts) {
  let d = "";
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += `C${pt([p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6])} ${pt([p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6])} ${pt(p2)}`;
  }
  return d;
}
const courbe = pts => `M${pt(pts[0])}` + seg(pts);
const aire = pts => pts.reduce((a, p, i) => { const q = pts[(i + 1) % pts.length]; return a + p[0] * q[1] - q[0] * p[1]; }, 0);
/** Contour fermé de deux bords partant du même point et finissant au même point (orientation normalisée). */
function contour(a, b) {
  if (aire(a.concat(b.slice().reverse())) < 0) [a, b] = [b, a];
  return courbe(a) + seg(b.slice().reverse()) + "Z";
}
function ferme(pts) {
  if (aire(pts) < 0) pts = pts.slice().reverse();
  const n = pts.length, q = i => pts[(i + n) % n];
  let d = `M${pt(pts[0])}`;
  for (let i = 0; i < n; i++) {
    const p0 = q(i - 1), p1 = q(i), p2 = q(i + 1), p3 = q(i + 2);
    d += `C${pt([p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6])} ${pt([p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6])} ${pt(p2)}`;
  }
  return d + "Z";
}
const ovale = (cx, cy, rx, ry, a = 0, n = 10) => { const T = mk(cx, cy, a); return ferme(Array.from({ length: n }, (_, i) => T(Math.cos(i / n * 2 * Math.PI) * rx, Math.sin(i / n * 2 * Math.PI) * ry))); };
const point = (x, y, r) => `M${f(x - r)} ${f(y)}a${f(r)} ${f(r)} 0 1 0 ${f(2 * r)} 0a${f(r)} ${f(r)} 0 1 0 ${f(-2 * r)} 0`;

// Profils de demi-largeur (t de 0 à la base à 1 à la pointe).
const PROF = {
  lanceole: t => Math.pow(Math.sin(Math.PI * Math.pow(t, .85)), .85) * (1 - .25 * t),
  ovale: t => Math.pow(Math.sin(Math.PI * Math.pow(t, .78)), .75),
  coeur: t => Math.pow(Math.sin(Math.PI * Math.pow(t, .62)), .7) * (t < .1 ? .55 + t * 4.5 : 1),
  epee: t => Math.min(1, t * 7) * Math.pow(1 - Math.pow(t, 2.6), .7),
  aiguille: t => Math.sin(Math.PI * t),
  chene: t => Math.pow(Math.sin(Math.PI * Math.pow(t, .9)), .6) * (.58 + .42 * Math.abs(Math.cos(Math.PI * 3.5 * t))),
  spatule: t => t < .7 ? Math.pow(Math.sin(t / .7 * Math.PI / 2), .65) : Math.pow(Math.cos((t - .7) / .3 * Math.PI / 2), .75),
  petale: t => Math.pow(Math.sin(Math.PI * Math.pow(t, .55)), .8),
  bouton: t => Math.pow(Math.sin(Math.PI * Math.pow(t, .5)), 1.15),
  raquette: t => Math.pow(Math.sin(Math.PI * Math.pow(t, .72)), .62),
  lanterne: t => Math.pow(Math.sin(Math.PI * Math.pow(t, .62)), .95) * (1 - .1 * t),
  chute: t => (t < .3 ? .32 + t * .9 : 1) * Math.pow(Math.sin(Math.PI * Math.pow(t, .5)), .7),
  gland: t => Math.pow(Math.sin(Math.PI * Math.pow(t, 1.25)), .6),
};

// ───────────────────────── l'atelier : calques d'encre et de lavis ─────────────────────────
class Atelier {
  constructor(r, k, soif) { this.r = r; this.k = k; this.detail = k < 1.3; this.soif = soif; this.plans = []; this.plan(0); }
  plan(n) { while (this.plans.length <= n) this.plans.push({ lav: [], ink: new Map(), sil: [], dessus: [] }); this.P = this.plans[n]; this.n = n; return this; }
  lav(d, c = PIG, o = .35, seul = false) {
    const L = this.P.lav, cle = `${c}|${o}`;
    const ex = !seul && L.find(l => l.cle === cle && !l.seul);
    if (ex) ex.d += d; else L.push({ cle, d, c, o, seul });
  }
  ink(d, w = .6, c = ENCRE, o = .9) { const cle = `s|${c}|${f(w * this.k * 100) / 100}|${o}`; this.P.ink.set(cle, (this.P.ink.get(cle) || "") + d); }
  inkF(d, c = ENCRE, o = .9) { const cle = `f|${c}|${o}`; this.P.ink.set(cle, (this.P.ink.get(cle) || "") + d); }
  sil(d) { if (this.n > 0) this.P.sil.push(d); }
  top(n) { this.P.dessus.push(n); }

  /** Trait de plume à épaisseur variable le long d'une cubique (pointe biseautée à 35°). */
  plumeD(p, w0, w1, nib = true) {
    const L = [], R = [], n = 14, e = 1 + (this.k - 1) * .55;
    for (let i = 0; i <= n; i++) {
      const t = i / n, [x, y] = bz(p, t), [dx, dy] = bzd(p, t), l = Math.hypot(dx, dy) || 1;
      const a = Math.atan2(dy, dx), m = nib ? .72 + .28 * Math.abs(Math.sin(a - rad(35))) : 1;
      const w = (w0 + (w1 - w0) * t) * m * e / 2;
      L.push([x - dy / l * w, y + dx / l * w]); R.push([x + dy / l * w, y - dx / l * w]);
    }
    const [x0, y0] = bz(p, 0), [x1, y1] = bz(p, 1), d0 = bzd(p, 0), d1 = bzd(p, 1), l0 = Math.hypot(...d0) || 1, l1 = Math.hypot(...d1) || 1;
    const c0 = [x0 - d0[0] / l0 * w0 * .3, y0 - d0[1] / l0 * w0 * .3], c1 = [x1 + d1[0] / l1 * w1 * .35, y1 + d1[1] / l1 * w1 * .35];
    return ferme([c0, ...L, c1, ...R.reverse()]);
  }
  plume(p, w0, w1, c = ENCRE, o = .92) { this.inkF(this.plumeD(p, w0, w1), c, o); }

  tige(x0, y0, x1, y1, o = {}) {
    let { cintre = 0, w0 = 2, w1 = .8 } = o;
    const L = Math.hypot(x1 - x0, y1 - y0) || 1;
    if (o.libre !== false && L > 14) { cintre += (this.r() - .5) * L * .16; x1 += (this.r() - .5) * L * .1; }
    if (this.soif && o.penche !== false && L > 25) { x1 += L * .1; y1 += L * .06; cintre -= L * .05; }
    const dx = x1 - x0, dy = y1 - y0, nx = -dy / L, ny = dx / L;
    const p = [[x0, y0], [x0 + dx * .33 + nx * cintre, y0 + dy * .33 + ny * cintre], [x0 + dx * .68 + nx * cintre * .8, y0 + dy * .68 + ny * cintre * .8], [x1, y1]];
    if (w0 * (1 + (this.k - 1) * .55) >= 2.9 || o.contour) { const d = this.plumeD(p, w0, w1, false); this.lav(d, o.cTronc || (o.c === PIG ? PIG : ENCRE), o.cTronc ? .3 : .15); this.ink(d, .55); }
    else this.plume(p, w0, w1);
    if (o.lavis !== false) this.lav(this.plumeD(p, w0 * 1.6 + 1.6, w1 * 1.6 + .8, false), o.c || SEVE, .2);
    return { p, at: t => bz(p, t), ang: t => angB(p, t), fin: [x1, y1], angFin: angB(p, 1) };
  }

  /** Feuille (ou pétale) : lavis plein, lavis d'ombre sur une moitié, contour interrompu côté lumière, nervures. */
  feuille(x, y, a, len, larg, o = {}) {
    const k = this.k, prof = o.profil || PROF.lanceole;
    const n = o.dents ? o.dents * 2 : (o.n || 12);
    const cambre = (o.cambre ?? (this.r() - .5) * .22) * len, asym = o.asym ?? 0;
    const T = mk(x, y, a), up = [], dn = [], mid = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n, m = cambre * Math.sin(Math.PI * t) * (o.crochet ? t : 1);
      let w = prof(t) * larg; if (!(w > 0)) w = 0;
      if (o.dents && i > 0 && i < n) w *= i % 2 ? 1 : 1 - (o.creux ?? .16);
      up.push(T(t * len, m - w * (1 + asym))); dn.push(T(t * len, m + w * (1 - asym))); mid.push(T(t * len, m));
    }
    const d = contour(up, dn), c = o.c || SEVE;
    this.lav(d, c, o.o ?? .32, o.seul);
    // l'ombre tombe en bas à droite : on glace la moitié qui lui fait face
    const ombreHaut = Math.sin(rad(a)) - Math.cos(rad(a)) > 0;
    if (o.o2 !== 0) this.lav(contour(ombreHaut ? up : dn, mid), c, o.o2 ?? .24, o.seul);
    if (o.reserve && this.detail !== false) this.lav(ferme([mid[Math.round(n * .3)], (ombreHaut ? dn : up)[Math.round(n * .42)], mid[Math.round(n * .6)]].map((p, i) => i === 1 ? [(p[0] * 2 + mid[Math.round(n * .45)][0]) / 3, (p[1] * 2 + mid[Math.round(n * .45)][1]) / 3] : p)), REFLET, .55, true);
    this.sil(d);
    if (o.trait !== 0) {
      const w = (o.trait ?? .55), cote = ombreHaut ? up : dn, lum = ombreHaut ? dn : up, ci = o.encre || ENCRE;
      this.ink(courbe(cote), w, ci);
      const c1 = Math.round(n * .5), c2 = Math.round(n * .68);
      this.ink(courbe(lum.slice(0, c1 + 1)) + courbe(lum.slice(c2)), w * .8, ci);
    }
    if (o.nervure !== false) this.ink(courbe(mid.slice(0, n)), .38, o.encre || ENCRE, .75);
    const nv = o.nerv ?? (len > 9 ? 3 : 0);
    if (nv && this.detail) {
      let dv = "";
      for (let j = 1; j <= nv; j++) {
        const t = .16 + .62 * j / (nv + 1), i = Math.round(t * n), i2 = Math.min(n, i + Math.max(1, Math.round(n * .14)));
        for (const bord of [up, dn]) { const q = bord[i2], m = mid[i]; dv += courbe([m, [(m[0] * .35 + q[0] * .65), (m[1] * .35 + q[1] * .65)]]); }
      }
      this.ink(dv, .3, o.encre || ENCRE, .55);
    }
    return { up, dn, mid, T };
  }

  epine(T, t, cote) {
    const [x, y] = T.at(t), a = rad(T.ang(t)), nx = -Math.sin(a) * cote, ny = Math.cos(a) * cote;
    const b1 = [x - Math.cos(a) * 1.1, y - Math.sin(a) * 1.1], b2 = [x + Math.cos(a) * 1.1, y + Math.sin(a) * 1.1];
    const tip = [x + nx * 2.8 + Math.cos(a) * 1.6, y + ny * 2.8 + Math.sin(a) * 1.6];
    this.inkF(`M${pt(b1)}Q${pt([x + nx * 1.4, y + ny * 1.4])} ${pt(tip)}Q${pt([x + nx * .9 + Math.cos(a), y + ny * .9 + Math.sin(a)])} ${pt(b2)}Z`, ENCRE, .85);
  }

  hachures(x0, y0, x1, y1, n, ang, long, w = .3, o = .5) {
    let d = ""; const c = Math.cos(rad(ang)) * long / 2, s = Math.sin(rad(ang)) * long / 2;
    for (let i = 0; i < n; i++) { const t = n === 1 ? .5 : i / (n - 1), x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t; d += `M${pt([x - c, y - s])}L${pt([x + c, y + s])}`; }
    this.ink(d, w, ENCRE, o);
  }

  papillon(x, y, s, a = -10) {
    const T = mk(x, y, a, s, s), r = this.r;
    const ailes = [
      [[0, 0], [-2.5, -6], [-8.5, -8.4], [-10, -5.5], [-6.5, -.6]], [[0, .4], [-5.5, 1.4], [-6.6, 5.2], [-2.6, 6], [-.4, 2.2]],
      [[0, 0], [2, -6.2], [7.4, -8], [8.6, -5.2], [5.6, -.6]], [[0, .4], [4.8, 1.4], [5.6, 4.8], [2.2, 5.6], [.4, 2.2]],
    ].map(q => q.map(([u, v]) => T(u, v)));
    for (const [i, q] of ailes.entries()) { const d = ferme(q); this.lav(d, i % 2 ? PIG : OR, i % 2 ? .4 : .55); this.ink(d, .45); }
    if (this.detail) this.ink(courbe([T(-1, -.5), T(-6, -6.5)]) + courbe([T(1, -.5), T(5.4, -6)]) + courbe([T(-1, 1), T(-4.5, 4)]), .28, ENCRE, .6);
    this.inkF(point(...T(-8.2, -6.8), .9 * s) + point(...T(6.8, -6.4), .8 * s), ENCRE, .8);
    this.plume([T(0, -1.6), T(.2, 0), T(.1, 2), T(0, 4)], 1.5 * s, .6 * s);
    this.ink(courbe([T(0, -1.6), T(-1.6, -4.5), T(-1.2, -6.4)]) + courbe([T(0, -1.6), T(1.4, -4.6), T(2.2, -6.2)]), .32);
    void r;
  }

  lucioles(n, zone, lueur = 1) {
    for (let i = 0; i < n; i++) {
      const x = zone[0] + this.r() * (zone[2] - zone[0]), y = zone[1] + this.r() * (zone[3] - zone[1]);
      this.top(svg("circle", { cx: f(x), cy: f(y), r: 3.4, fill: OR, opacity: f(.42 * lueur * 100) / 100, filter: "url(#halo)" }));
      this.top(svg("path", { d: point(x, y, .9) + courbe([[x - .8, y - .6], [x - 2.4, y - 2]]) + courbe([[x + .6, y - .7], [x + 1.6, y - 2.4]]), fill: OR, stroke: ENCRE, "stroke-width": .25, "stroke-opacity": .5 }));
    }
  }
}

// ───────────────────────── motifs communs ─────────────────────────
function sol(A, s, larg) {
  const r = A.r, w = larg ?? 10 + s * 3.4;
  A.lav(ferme([[40 - w, 120.6], [40 - w * .45, 118.2], [40 + w * .5, 118.4], [40 + w, 120.8], [40 + w * .3, 122.6], [40 - w * .5, 122.4]]), ENCRE, .08);
  A.plume([[40 - w, 120.4], [40 - w * .4, 119.6], [40 + w * .3, 120.5], [40 + w * .85, 120.1]], .5, .9, ENCRE, .75);
  if (A.detail) {
    let d = "";
    for (const cx of [40 - w * .8, 40 + w * .7 + r() * 2]) for (let j = -1; j <= 1; j++) d += courbe([[cx + j * 1.2, 120.2], [cx + j * 2 + (r() - .5), 117 - Math.abs(1 - j) * .8]]);
    A.ink(d, .35, ENCRE, .6);
    A.ink(ovale(40 + w * .45, 121, 1.4, .8, 0, 6), .35, ENCRE, .5);
  }
}

function dessinGraine(A, forme) {
  const r = A.r, a = (r() - .5) * 36, x = 40 + (r() - .5) * 4, y = 112.6;
  // monticule de terre, hachures d'ombre, petite racine
  A.lav(ferme([[15, 120.5], [26, 114.5], [40, 110.2], [54, 114], [66, 120.5], [40, 122]]), ENCRE, .13);
  A.plume([[13, 120.6], [26, 112.4], [52, 110.6], [67, 120.6]], .5, .5, ENCRE, .85);
  A.plume([[8, 120.4], [16, 120.9], [62, 120.9], [72, 120.3]], .4, .6, ENCRE, .55);
  if (A.detail) {
    let d = "";
    for (let i = 0; i < 6; i++) { const xx = 47 + i * 2.6, yy = 114.5 + i * .9; d += `M${pt([xx, yy])}l1.6 2.6`; }
    A.ink(d, .3, ENCRE, .5);
  }
  A.ink(courbe([[x + 1, y + 4.5], [x + 2.4, y + 7], [x + .6, y + 8.6], [x + 1.8, y + 10.4]]), .35, ENCRE, .65);
  const T = mk(x, y, a - 90);
  if (forme === "chene") {
    A.feuille(...T(-5, 0), a - 90, 11, 4.6, { profil: PROF.gland, c: PIG, o: .5, o2: .3, nervure: false, cambre: 0, reserve: true });
    A.lav(ferme([T(-6.5, -5.4), T(-3, -5.8), T(-1.4, 0), T(-3, 5.8), T(-6.5, 5.4), T(-7.4, 0)]), ENCRE, .2);
    A.ink(ferme([T(-6.5, -5.4), T(-3, -5.8), T(-1.4, 0), T(-3, 5.8), T(-6.5, 5.4), T(-7.4, 0)]), .5);
    A.ink(courbe([T(-6, -3.6), T(-2.6, -2.6)]) + courbe([T(-6.4, 0), T(-2, 0)]) + courbe([T(-6, 3.6), T(-2.6, 2.6)]) + courbe([T(-4.8, -5.4), T(-4.4, 5.4)]), .3, ENCRE, .6);
    A.ink(courbe([T(-7.4, 0), T(-9.5, .6)]), .6);
  } else if (forme === "olivier") {
    A.feuille(...T(-5, 0), a - 90, 10, 3.2, { profil: PROF.ovale, c: PIG, o: .55, o2: .32, nervure: false, reserve: true });
    A.ink(courbe([T(-1.5, -1.2), T(2, -1.6), T(4, -.6)]), .3, ENCRE, .5);
  } else if (forme === "tournesol") {
    A.feuille(...T(-5, 0), a - 90, 10, 2.9, { profil: PROF.bouton, c: ENCRE, o: .22, o2: .2, nervure: false });
    A.ink(courbe([T(-3, -1.4), T(3, -1.5)]) + courbe([T(-3.4, 1.2), T(3.6, 1.4)]), .45, ENCRE, .8);
  } else if (forme === "fougere") {
    A.lav(ovale(x, y + 1.6, 4.6, 3, a), ENCRE, .14);
    const sp = Array.from({ length: 9 }, (_, i) => { const th = i * .7, rr = 4.2 - i * .42; return [x + Math.cos(th + 2.6) * rr, y - 1 + Math.sin(th + 2.6) * rr]; });
    A.plume(sp.length ? [[x - 1, y + 4], [x - 4, y + 1], sp[3], sp[8]] : [], 1.4, .6);
    A.lav(courbe(sp) + "Z", PIG, .4);
    A.ink(courbe(sp), .6);
  } else {
    A.feuille(...T(-5, 0), a - 90, 10, 3.6, { profil: PROF.ovale, c: PIG, o: .42, o2: .28, nervure: false, reserve: true });
    A.ink(courbe([T(-3.6, 1.4), T(0, 2.4), T(3.4, 1.6)]), .32, ENCRE, .55);
  }
  if (forme !== "fougere") {
    const s0 = T(4.6, 0), s1 = T(7.5, -1.2), s2 = T(8.6, 1.6);
    A.plume([s0, s1, T(9.8, -.2), s2], .9, .5, ENCRE, .8);
    A.lav(ovale(s2[0], s2[1], 1.6, 1, a), SEVE, .5);
  }
  if (A.detail) {
    const z = svg("text", { x: f(x + 9), y: f(y - 7), "font-size": 6.2, fill: ENCRE, opacity: .5, "font-family": MAIN, transform: `rotate(-12 ${f(x + 9)} ${f(y - 7)})` }, "z");
    const z2 = svg("text", { x: f(x + 13), y: f(y - 11.5), "font-size": 4.8, fill: ENCRE, opacity: .38, "font-family": MAIN }, "z");
    A.top(z); A.top(z2);
  }
}

function germe(A, o = {}) {
  const r = A.r, h = (o.h ?? 18) + r() * 4, x1 = 40 + (r() - .5) * 6;
  const T = A.tige(40, 120, x1, 120 - h, { cintre: (r() - .5) * 6, w0: 1.6, w1: 1 });
  const [x, y] = T.fin;
  // tégument de la graine resté au sol
  A.lav(ovale(34 + r() * 2, 119, 2.6, 1.3, -14), PIG, .4); A.ink(courbe([[31.6, 119.6], [33.6, 117.8], [36.4, 118.4]]), .4, ENCRE, .7);
  const L = o.long ?? 8.5, W = o.larg ?? 3.5;
  A.feuille(x, y, -158 + r() * 10, L, W, { profil: o.profil || PROF.ovale, o: .4, nerv: 0, cambre: .12 });
  A.feuille(x, y, -22 - r() * 10, L, W, { profil: o.profil || PROF.ovale, o: .4, nerv: 0, cambre: -.12 });
  A.feuille(x, y, -92, 4, 1.4, { o: .45, nerv: 0, o2: 0 });
  sol(A, 1);
}

function finale(A, s, lueur, prefer = "papillon", zone = [12, 20, 68, 70]) {
  if (s < 5) return;
  const r = A.r, choix = r() < (prefer === "papillon" ? .7 : .3) ? "papillon" : "lucioles";
  if (choix === "papillon" && !A.soif) { A.plan(9); A.papillon(zone[0] + r() * (zone[2] - zone[0]), zone[1] + r() * 14, .62, -18 + r() * 30); }
  if (lueur > 0) { A.plan(9); A.lucioles(choix === "papillon" ? 1 : 3, zone, lueur); }
}

// ───────────────────────── les espèces ─────────────────────────
function feuilleComposee(A, x, y, a, len, paires = 2) {
  const T = mk(x, y, a), b = (A.r() - .5) * .15 * len;
  A.ink(courbe([T(0, 0), T(len * .5, b), T(len, b * .6)]), .5);
  for (let j = 0; j < paires; j++) {
    const u = len * (.38 + .3 * j), [px, py] = T(u, b * Math.sin(Math.PI * u / len)), s = len * (.42 - .05 * j);
    for (const c of [-1, 1]) A.feuille(px, py, a + c * 52, s, s * .42, { profil: PROF.ovale, dents: 6, creux: .14, nerv: 0, trait: .45, o: .34 });
  }
  A.feuille(...T(len, b * .6), a, len * .46, len * .2, { profil: PROF.ovale, dents: 6, creux: .14, nerv: 0, trait: .45, o: .34 });
}

function eglantine(A, cx, cy, R, rot = 0, sq = .86) {
  const r = A.r;
  for (let i = 0; i < 5; i++) {
    const a = rot + i * 72 + (r() - .5) * 8, c = Math.cos(rad(a)), s = Math.sin(rad(a));
    const loc = [[.0, 0], [.36, -.42], [.76, -.6], [1, -.38], [.9, -.04], [1, .36], [.76, .62], [.36, .44]];
    const pts = loc.map(([u, v]) => [cx + (u * c - v * s) * R, cy + (u * s + v * c) * R * sq]);
    const d = ferme(pts);
    A.lav(d, PIG, .3, true); A.sil(d); A.ink(d, .45);
    if (A.detail) A.ink(courbe([[cx + c * R * .3, cy + s * R * .3 * sq], [cx + c * R * .7 + s * R * .1, cy + (s * R * .7 - c * R * .1) * sq]]), .25, PIG, .6);
  }
  A.lav(ovale(cx, cy, R * .55, R * .55 * sq, 0, 10), PIG, .28);
  A.lav(ovale(cx, cy, R * .3, R * .3 * sq), OR, .75);
  let st = "", dots = "";
  const n = A.detail ? 16 : 9;
  for (let i = 0; i < n; i++) {
    const a = i / n * 2 * Math.PI + r() * .2, r1 = R * .14, r2 = R * (.34 + r() * .08);
    const p2 = [cx + Math.cos(a) * r2, cy + Math.sin(a) * r2 * sq];
    st += `M${pt([cx + Math.cos(a) * r1, cy + Math.sin(a) * r1 * sq])}L${pt(p2)}`; dots += point(p2[0], p2[1], .5);
  }
  A.ink(st, .3, ENCRE, .7); A.inkF(dots, ENCRE, .85);
  A.ink(ovale(cx, cy, R * .1, R * .1 * sq, 0, 6), .4);
}

function boutonRose(A, x, y, a, L, couleur = PIG) {
  A.feuille(x, y, a, L, L * .36, { profil: PROF.bouton, c: couleur, o: .45, o2: .3, nervure: false, cambre: 0 });
  for (const s of [-1, 1, 0]) A.ink(courbe([mk(x, y, a)(L * .1, 0), mk(x, y, a)(L * .45, s * L * .32), mk(x, y, a)(L * .9, s * L * .42)]), .35, ENCRE, .75);
  A.lav(ovale(...mk(x, y, a)(L * .12, 0), L * .14, L * .12), SEVE, .5);
}

const ESPECES = {
  rose(A, s, r, lueur) {
    if (s === 1) return germe(A);
    const H = [0, 0, 44, 62, 82, 98][s];
    const T = [A.tige(40, 120, 40 + (r() - .5) * 8, 120 - H, { cintre: (r() - .5) * 10, w0: 2.4, w1: .9 })];
    if (s >= 4) T.push(A.tige(40.5, 120, 14 + r() * 4, 120 - H * .6, { cintre: 10, w0: 1.9, w1: .8 }));
    if (s >= 5) T.push(A.tige(39.5, 120, 64 + r() * 4, 120 - H * .5, { cintre: -9, w0: 1.7, w1: .7 }));
    T.forEach(t => [.24, .43, .62, .8].forEach((u, i) => A.epine(t, u, i % 2 ? 1 : -1)));
    T.forEach((t, ti) => {
      const nb = ti ? 2 : [0, 0, 2, 3, 3, 3][s];
      for (let i = 0; i < nb; i++) {
        const u = .28 + i * (.5 / nb) + r() * .05, [x, y] = t.at(u), cote = (i + ti) % 2 ? 1 : -1;
        feuilleComposee(A, x, y, t.ang(u) + cote * (48 + r() * 30), (10 + s * 1.2) * (.85 + r() * .3), s >= 4 ? 2 : 1);
      }
    });
    A.plan(1);
    const [x, y] = T[0].fin;
    if (s === 2) A.feuille(x, y, T[0].angFin, 5, 1.8, { o: .4, nerv: 0 });
    if (s === 3) { boutonRose(A, x, y, T[0].angFin, 9); boutonRose(A, ...T[0].at(.8), T[0].ang(.8) + 40, 6); }
    if (s >= 4) {
      eglantine(A, x, y - 3, s === 4 ? 11 : 12, r() * 72, .84);
      if (s === 4) boutonRose(A, ...T[1].fin, T[1].angFin, 7);
      else {
        eglantine(A, T[1].fin[0], T[1].fin[1] - 2, 9.5, r() * 72, .8);
        for (const [u, t] of [[.62, T[2]], [.7, T[1]]]) {
          const [hx, hy] = t.at(u), a = t.ang(u) + 70;
          const [fx, fy] = mk(hx, hy, a)(4, 0);
          A.ink(courbe([[hx, hy], [fx, fy]]), .45);
          A.feuille(fx, fy, a + 20, 7, 2.9, { profil: PROF.ovale, c: PIG, o: .6, o2: .35, nervure: false, cambre: 0, reserve: true });
          const [tx, ty] = mk(fx, fy, a + 20)(7, 0);
          A.ink(courbe([[tx, ty], [tx + 2, ty + 1.2]]) + courbe([[tx, ty], [tx - .4, ty + 2.4]]) + courbe([[tx, ty], [tx + 2.2, ty - .8]]), .35);
        }
        boutonRose(A, ...T[2].fin, T[2].angFin, 7);
      }
    }
    sol(A, s); finale(A, s, lueur, "papillon", [50, 12, 72, 40]);
  },

  cristal(A, s, r, lueur) {
    // Échévéria vue de trois quarts : feuilles charnues en spatule, pointe aiguë rougie, pruine en réserve.
    const cx = 40 + (r() - .5) * 3, cy = 116 - s * .8, S = [0, 6, 10, 13, 15, 17][s];
    const feuilleE = (a, l, w, ox = 0, oy = 0) => {
      const c = Math.cos(rad(a)), cambre = Math.abs(c) > .5 ? (c < 0 ? .1 : -.1) : 0;
      const F = A.feuille(cx + c * 3.4 + ox, cy + Math.sin(rad(a)) * 1.4 + oy, a, l, w, { profil: PROF.spatule, c: PIG, o: .24, o2: .3, nerv: 0, nervure: false, cambre, trait: .6, reserve: false });
      const n = F.mid.length - 1, tip = F.mid[n];
      A.lav(ferme([tip, F.up[n - 2], F.mid[n - 3], F.dn[n - 2]]), PIG, .6);
    };
    if (s >= 4) {
      const H = s === 4 ? 72 : 94, T = A.tige(cx + 3, cy - 4, cx + 18 + r() * 5, 120 - H, { cintre: -12, w0: 1.6, w1: .8, c: PIG });
      for (const u of [.22, .4, .58]) A.feuille(...T.at(u), T.ang(u) + 55, 4, 1.4, { profil: PROF.spatule, c: PIG, o: .3, nerv: 0, nervure: false, trait: .45 });
      const nf = s === 4 ? 4 : 6;
      for (let i = 0; i < nf; i++) {
        const u = .7 + i * (.3 / nf), [fx, fy] = T.at(u), ang = T.ang(u) + 78 + (r() - .5) * 8;
        A.ink(courbe([[fx, fy], mk(fx, fy, ang)(2.6, .6)]), .35);
        const [bx, by] = mk(fx, fy, ang)(2.6, .6);
        A.feuille(bx, by, ang + 18, 5.4, 2.2, { profil: PROF.bouton, c: OR, o: .6, o2: .3, nervure: false, cambre: 0, trait: .45 });
        A.lav(ovale(...mk(bx, by, ang + 18)(5, 0), 1.4, 1), PIG, .55);
      }
    }
    if (s === 1) { for (const a of [-150, -90, -30]) feuilleE(a, S, S * .42); sol(A, 1, 9); return; }
    // rangs de feuilles de l'arrière vers l'avant : éventail large au fond, feuilles courtes et dressées devant
    const rangs = s === 2 ? [[5, 84, 1.05], [3, 50, .78], [2, 22, .55]] : [[7, 86, 1.1], [5, 66, .92], [4, 42, .74], [3, 20, .56]];
    rangs.forEach(([n, ouv, l], k) => {
      A.plan(k);
      for (let i = 0; i < n; i++) { const a = -90 - ouv + (2 * ouv) * (n === 1 ? .5 : i / (n - 1)) + (r() - .5) * 5; feuilleE(a, S * l * (.95 + r() * .1), S * (.31 + k * .025), 0, k * 1.3 - 1); }
    });
    if (s >= 5) {
      A.plan(1);
      for (const [ox, sz] of [[-27, 5.6], [25, 4.8]]) for (const a of [-160, -120, -60, -20]) A.feuille(cx + ox, 119.2, a + (r() - .5) * 10, sz, sz * .42, { profil: PROF.spatule, c: PIG, o: .3, nerv: 0, nervure: false, trait: .5 });
      if (A.detail) {
        A.plan(9);
        const R = S * 1.45, oy = cy - 3, a0 = -160, a1 = a0 + 137.5, P = a => [cx + Math.cos(rad(a)) * R, oy + Math.sin(rad(a)) * R * .8];
        A.top(svg("path", { d: `M${pt(P(a0))}A${f(R)} ${f(R * .8)} 0 0 1 ${pt(P(a1))}`, fill: "none", stroke: PIG, "stroke-width": .45, "stroke-dasharray": "1.2 1.5", opacity: .85 }));
        A.top(svg("text", { x: f(cx - R * .55), y: f(oy - R * .86), "font-size": 6.2, fill: PIG, "font-family": MAIN, transform: `rotate(-6 ${f(cx - R * .55)} ${f(oy - R * .86)})` }, "137,5°"));
      }
    }
    sol(A, s, 14 + s * 2.6); finale(A, s, lueur, "lucioles", [12, 30, 70, 70]);
  },
  chene(A, s, r, lueur) {
    const lobe = (x, y, a, l) => A.feuille(x, y, a, l, l * .3, { profil: PROF.chene, n: 24, o: .34, nerv: l > 8 ? 3 : 0, trait: .5 });
    const gland = (x, y, a, L) => {
      A.feuille(x, y, a, L, L * .36, { profil: PROF.gland, c: PIG, o: .5, o2: .32, nervure: false, cambre: 0, reserve: L > 4, trait: .5 });
      const T = mk(x, y, a), cup = [T(-.4, -L * .38), T(L * .32, -L * .4), T(L * .42, 0), T(L * .32, L * .4), T(-.4, L * .38), T(-L * .1, 0)];
      A.lav(ferme(cup), ENCRE, .22); A.ink(ferme(cup), .45);
      if (A.detail && L > 4) A.ink(courbe([T(L * .05, -L * .3), T(L * .3, L * .1)]) + courbe([T(L * .05, L * .3), T(L * .3, -L * .1)]), .25, ENCRE, .6);
    };
    if (s === 1) {
      gland(30, 117, 160, 7);
      A.ink(courbe([[31, 118], [33, 121], [32, 124]]), .4, ENCRE, .6);
      const T = A.tige(33, 117, 40, 99, { cintre: -4, w0: 1.3, w1: .8 });
      lobe(...T.fin, -140, 7); lobe(...T.fin, -40, 8);
      sol(A, 1); return;
    }
    if (s <= 3) {
      const H = s === 2 ? 42 : 62, T = A.tige(40, 120, 40 + (r() - .5) * 6, 120 - H, { cintre: (r() - .5) * 8, w0: s === 2 ? 2 : 3, w1: .9 });
      const br = s === 3 ? [A.tige(...T.at(.55), 22 + r() * 4, 120 - H * .78, { cintre: 4, w0: 1.4, w1: .6 }), A.tige(...T.at(.68), 58 + r() * 4, 120 - H * .86, { cintre: -4, w0: 1.3, w1: .6 })] : [];
      const nb = s === 2 ? 4 : 5;
      for (let i = 0; i < nb; i++) { const u = .4 + i * .14; lobe(...T.at(Math.min(u, .98)), T.ang(u) + (i % 2 ? 60 : -60), 9 + r() * 2); }
      lobe(...T.fin, T.angFin + (r() - .5) * 20, 10);
      for (const b of br) { lobe(...b.fin, b.angFin - 30, 8.5); lobe(...b.fin, b.angFin + 30, 8); lobe(...b.at(.6), b.ang(.6) - 70, 7.5); }
      if (s === 3) { A.plan(1); gland(...br[0].at(.75), 100, 4.2); }
      sol(A, s); return;
    }
    const H = s === 4 ? 88 : 106, W = s === 4 ? 29 : 37, top = 120 - H, base = 120 - H * .36, tw = s === 4 ? 4.4 : 5.8, pen = (r() - .5) * 4;
    // tronc : deux contours, empattement, écorce hachée, lavis de terre de Sienne
    const ga = [[40 - tw - 4.5, 120.5], [40 - tw * .95, 114], [40 - tw * .78 + pen * .3, 103], [40 - tw * .72 + pen, base - 2]];
    const dr = [[40 + tw + 5, 120.5], [40 + tw, 113], [40 + tw * .82 + pen * .3, 103], [40 + tw * .72 + pen, base - 2]];
    A.lav(ferme([...ga, ...dr.slice().reverse()]), PIG, .36);
    A.lav(ferme([[40 + pen * .5, 120], ...dr.slice(1, 3).reverse().reverse(), [40 + tw * .7 + pen, base - 2], [40 + pen * .8, base - 2]]), ENCRE, .14);
    A.plume(ga, 1.2, .8); A.plume(dr, 1.6, 1);
    if (A.detail) { let d = ""; for (let i = 0; i < 8; i++) { const x = 40 - tw * .45 + i * tw * .16 + (i > 4 ? .4 : 0), y0 = 118.5 - r() * 3, y1 = base + 2 + r() * 12; d += courbe([[x, y0], [x + (r() - .5) * 1.6, (y0 + y1) / 2], [x + (r() - .5) + pen * .5, y1]]); } A.ink(d, .3, ENCRE, .55); }
    // charpentières (masquées par le houppier, visibles sous lui)
    const tete = [40 + tw * .1 + pen, base - 1];
    for (const [bx, by, w] of [[40 - W * .62, top + W * .9, 2.4], [40 + W * .64, top + W * .85, 2.4], [40 - W * .12, top + W * .4, 2.6], [40 + W * .25, top + W * .5, 2]]) A.plume([tete, [tete[0] + (bx - tete[0]) * .3, tete[1] - 6], [bx - (bx - 40) * .1, (by + tete[1]) / 2], [bx, by]], w * (s === 5 ? 1.25 : 1), .6);
    // houppier : masses de lavis superposées, festons d'encre du côté de l'ombre
    A.plan(1);
    const masses = [[0, .45, .6, .44], [-.56, .78, .48, .38], [.56, .74, .5, .4], [-.3, .24, .44, .34], [.32, .22, .44, .33], [-.24, 1.06, .52, .3], [.32, 1.08, .5, .3]];
    masses.forEach(([mx, my, rx, ry], i) => {
      mx = 40 + mx * W; my = top + my * W; rx *= W; ry *= W;
      const n = 16, ph = r() * 6, pts = Array.from({ length: n }, (_, j) => { const th = j / n * 2 * Math.PI, m = 1 + .09 * Math.sin(th * 5 + ph) + (r() - .5) * .08; return [mx + Math.cos(th) * rx * m, my + Math.sin(th) * ry * m]; });
      const d = ferme(pts); A.lav(d, SEVE, [.3, .26, .28, .24, .24, .3, .3][i]); A.sil(d);
      if (i > 0) {
        const dir = deg(Math.atan2(my - (top + W * .7), mx - 40)), fes = [];
        for (let j = 0; j <= 18; j++) { const th = rad(dir - 75 + j * (150 / 18)), m = j % 2 ? 1.06 : .99; fes.push([mx + Math.cos(th) * rx * m, my + Math.sin(th) * ry * m]); }
        A.ink(courbe(fes), .5, ENCRE, .72);
      }
    });
    A.lav(ferme([[40 + W * .05, top + W * .95], [40 + W * .7, top + W * .62], [40 + W * 1, top + W * .95], [40 + W * .7, top + W * 1.32], [40 + W * .05, top + W * 1.36]]), SEVE, .2);
    const nf = s === 4 ? 4 : 6;
    for (let i = 0; i < nf; i++) { const th = rad(25 + i * (130 / (nf - 1)) + (r() - .5) * 8), lx = 40 + Math.cos(th) * W * .78, ly = top + W * .78 + Math.sin(th) * W * .5; lobe(lx, ly, deg(th) + (r() - .5) * 30, 6.4); }
    if (s >= 5) {
      A.plan(2);
      for (const [gx, gy] of [[40 - W * .5, top + W * 1.3], [40 + W * .62, top + W * 1.28], [40 + W * .08, top + W * 1.4]]) { A.ink(courbe([[gx + 1, gy - 2.6], [gx + 1.6, gy]]), .4); gland(gx, gy, 95, 4.6); gland(gx + 3.2, gy + .6, 72, 4.2); }
      gland(57, 118.6, 8, 5);
      A.plan(0);
      A.plume([[40 - tw - 4, 120.4], [40 - tw - 8, 120.6], [40 - tw - 11, 121.2], [40 - tw - 14, 120.8]], 1.6, .4);
      A.plume([[40 + tw + 4.5, 120.4], [40 + tw + 8, 120.4], [40 + tw + 10, 121.2], [40 + tw + 13, 121]], 1.6, .4);
    }
    sol(A, s, 22 + s * 3); finale(A, s, lueur, "lucioles", [6, 34, 74, 78]);
  },

  fougere(A, s, r, lueur) {
    const crosse = (x, y, h, dir, sz) => {
      const c = [x + dir * sz, y - h], sp = Array.from({ length: 10 }, (_, i) => { const th = Math.PI + (dir > 0 ? -1 : 1) * i * .62, rr = sz * (1 - i * .085); return [c[0] + Math.cos(th) * rr * dir * -1 * -1, c[1] + Math.sin(th) * rr]; });
      const tige = [[x, y], [x + dir * .5, y - h * .4], [x - dir * sz * .2, y - h * .85], sp[0]];
      A.plume(tige, 1.4, 1.1, ENCRE, .9);
      A.lav(courbe(sp) + "Z", PIG, .45);
      A.ink(courbe(sp), .7 + .1 * sz);
      if (A.detail) A.hachures(x + dir * .6, y - h * .3, x + dir * .2, y - h * .8, 4, -30 * dir, 1.4, .25, .5);
    };
    const fronde = (a, L, cintre, sori) => {
      const [x1, y1] = [40 + Math.cos(rad(a)) * L, 120 + Math.sin(rad(a)) * L];
      const T = A.tige(40 + (r() - .5) * 2, 120, x1, y1, { cintre, w0: 1.4, w1: .4, c: PIG });
      const n = Math.max(5, Math.round(L / 5.5));
      for (let i = 1; i <= n; i++) {
        const t = .12 + .86 * i / (n + 1), lp = L * .3 * Math.pow(Math.sin(Math.PI * (t * .85 + .12)), .9) * (1 - t * .35);
        if (lp < 1.6) continue;
        for (const c of [-1, 1]) A.feuille(...T.at(t), T.ang(t) + c * (64 - t * 20), lp, lp * .24, { profil: PROF.lanceole, c: PIG, o: .3, o2: .22, nerv: 0, trait: .45, dents: s >= 4 && lp > 5 && A.detail ? 5 : 0, creux: .28, cambre: c * .12 });
        if (sori && A.detail && i % 2 && lp > 4) { const F = mk(...T.at(t), T.ang(t) + 60, 1, 1); let d = ""; for (let j = 1; j < 4; j++) d += point(...F(lp * j * .22, lp * .1), .45); A.inkF(d, PIG, .8); }
      }
    };
    if (s === 1) { crosse(40, 120, 15, 1, 3); crosse(37, 120, 8, -1, 2); sol(A, 1); return; }
    const conf = { 2: [[-118, 28, 6], [-64, 26, -6]], 3: [[-128, 40, 8], [-90, 46, 4], [-52, 40, -8]], 4: [[-148, 46, 10], [-118, 60, 8], [-86, 66, 2], [-58, 58, -8], [-30, 46, -10]], 5: [[-160, 50, 12], [-136, 64, 10], [-110, 78, 6], [-86, 84, 2], [-64, 76, -6], [-40, 62, -10], [-18, 48, -12]] }[s];
    conf.forEach(([a, L, c], i) => fronde(a + (r() - .5) * 8, L * (.92 + r() * .14), c, s >= 5 && i === 2));
    A.plan(1);
    if (s >= 3) { crosse(43, 120, 14, 1, 2.6); if (s >= 4) crosse(36, 120, 10, -1, 2.2); }
    sol(A, s, 14 + s * 3); finale(A, s, lueur, "papillon", [8, 14, 70, 36]);
  },

  olivier(A, s, r, lueur) {
    const fo = (x, y, a, l) => A.feuille(x, y, a, l, l * .16, { profil: PROF.lanceole, o: .3, o2: .22, nerv: 0, trait: .45 });
    const rameau = (x, y, a, l, n) => { const T = mk(x, y, a); A.ink(courbe([T(0, 0), T(l * .5, .6), T(l, 0)]), .5); for (let i = 0; i < n; i++) { const u = l * (.25 + .75 * i / n); fo(...T(u, .3), a + (i % 2 ? 42 : -42) + (r() - .5) * 14, 6 + r() * 2.5); } fo(...T(l, 0), a + (r() - .5) * 16, 7); };
    const olive = (x, y, a, L = 3.6) => A.feuille(x, y, a, L, L * .36, { profil: PROF.ovale, c: PIG, o: .62, o2: .35, nervure: false, cambre: 0, reserve: true, trait: .45 });
    if (s === 1) return germe(A, { profil: PROF.lanceole, long: 8, larg: 1.8 });
    if (s === 2) {
      const T = A.tige(40, 120, 40 + (r() - .5) * 6, 78, { cintre: (r() - .5) * 8, w0: 1.8, w1: .8 });
      for (const u of [.4, .62, .82]) for (const c of [-1, 1]) fo(...T.at(u), T.ang(u) + c * 50, 9);
      fo(...T.fin, T.angFin, 7); sol(A, 2); return;
    }
    const H = [0, 0, 0, 56, 74, 88][s], W = [0, 0, 0, 17, 30, 38][s], base = 120 - H * (s === 3 ? .45 : .34);
    // tronc noueux, court et tors : deux brins qui s'enroulent, un creux
    const tw = s === 3 ? 2.4 : s === 4 ? 5 : 6.6, sw = (r() - .5) * 3;
    const ga = [[40 - tw - 3.5, 120.4], [40 - tw * .1 + sw, 111], [40 - tw * 1.3, 102], [40 - tw * .6 + sw, base]];
    const dr = [[40 + tw + 4, 120.4], [40 + tw * 1.5, 111], [40 + tw * .2 + sw, 103], [40 + tw * .8 + sw, base]];
    A.lav(ferme([...ga, ...dr.slice().reverse()]), ENCRE, .15);
    A.lav(ferme([[40 + tw * .3, 120], dr[1], dr[2], dr[3], [40 + tw * .3 + sw, base]]), ENCRE, .12);
    A.plume(ga, 1.3, .9); A.plume(dr, 1.6, .9);
    if (s >= 4) {
      A.plume([[40 - tw * .7, 118], [40 + tw * .9, 110], [40 - tw * .6, 103], [40 + tw * .3 + sw, base + 1]], .7, .4, ENCRE, .6);
      A.plume([[40 + tw * .8, 117], [40 - tw * .2, 112], [40 + tw * .7, 106], [40 + sw, base + 3]], .5, .3, ENCRE, .5);
      const [hx, hy] = [40 + tw * .45, 109]; A.lav(ovale(hx, hy, tw * .28, tw * .55, 12, 8), ENCRE, .45); A.ink(ovale(hx, hy, tw * .32, tw * .6, 12, 8), .45, ENCRE, .75);
    }
    // charpentières en éventail, larges et basses
    const tips = s === 3 ? [[40 - W, 120 - H * .7], [40 - W * .3, 120 - H], [40 + W * .45, 120 - H * .95], [40 + W, 120 - H * .72]]
      : [[40 - W, 120 - H * .62], [40 - W * .55, 120 - H * .92], [40 + W * .05, 120 - H], [40 + W * .6, 120 - H * .9], [40 + W, 120 - H * .6]];
    for (const [tx, ty] of tips) A.plume([[40 + sw, base + 1], [40 + (tx - 40) * .35, base - 3], [tx - (tx - 40) * .15, ty + 10], [tx, ty]], s === 3 ? 1.8 : 2.4, .5);
    // nuées de feuillage argenté, rameaux de feuilles étroites
    for (const [tx, ty] of tips) A.lav(ovale(tx - (tx - 40) * .2, ty + 7, W * .5, W * .3, (tx - 40) * .4), SEVE, .13);
    A.lav(ovale(40, 120 - H * .74, W * .9, H * .2), SEVE, .1);
    tips.forEach(([tx, ty], i) => { const a = deg(Math.atan2(ty - base, tx - 40)); rameau(tx - (tx - 40) * .3, ty + 7, a - 24, 9, 3); rameau(tx, ty, a + (i % 2 ? 18 : -18), 9, s === 3 ? 3 : 4); });
    A.plan(1);
    if (s === 4) for (const [tx, ty] of tips) { let d = ""; for (let j = 0; j < 4; j++) { const x = tx - (tx - 40) * .25 + (r() - .5) * 7, y = ty + 4 + (r() - .5) * 6; d += point(x, y, 1.1); A.inkF(point(x, y, .35), OR, 1); } A.lav(d, REFLET, .9); A.ink(d, .3, ENCRE, .7); }
    if (s >= 5) { for (const [tx, ty] of tips) { const x = tx - (tx - 40) * .3, y = ty + 10; A.ink(courbe([[x, y - 2], [x + 1, y + 1]]) + courbe([[x, y - 2], [x + 3.4, y + 1.4]]), .35); olive(x + 1, y + 1, 95); olive(x + 3.4, y + 1.4, 70, 3.2); } olive(58, 118.6, 0, 3.4); }
    sol(A, s, 18 + s * 3); finale(A, s, lueur, "lucioles", [8, 20, 72, 64]);
  },

  feuille(A, s, r, lueur) {
    const eventail = (x, y, a, R, c = PIG, o = .34) => {
      const n = 10, pts = [];
      for (let i = 0; i <= n; i++) { const t = i / n, th = rad(a - 50 + 100 * t), m = 1 - .22 * Math.exp(-Math.pow((t - .5) / .06, 2)) + .04 * Math.sin(t * 19 + R); pts.push([x + Math.cos(th) * R * m, y + Math.sin(th) * R * m]); }
      const d = `M${pt([x, y])}L${pt(pts[0])}` + seg(pts) + "Z";
      const ok = aire([[x, y], ...pts]) > 0 ? d : `M${pt([x, y])}L${pt(pts[n])}` + seg(pts.slice().reverse()) + "Z";
      A.lav(ok, c, o); A.lav(`M${pt([x, y])}L${pt(pts[5])}` + seg(pts.slice(5)) + "Z", c, o * .7); A.sil(ok);
      A.ink(courbe([[x, y], pts[0]]) + courbe(pts.slice(0, 6)) + courbe(pts.slice(6)) + courbe([pts[n], [x, y]]), .45);
      if (A.detail && R > 4.5) { let dv = ""; for (let i = 1; i < n; i += 1.5) { const th = rad(a - 50 + 100 * i / n); dv += `M${pt([x + Math.cos(th) * R * .12, y + Math.sin(th) * R * .12])}L${pt([x + Math.cos(th) * R * .88, y + Math.sin(th) * R * .88])}`; } A.ink(dv, .25, ENCRE, .5); }
    };
    const fan = (x, y, a, R, c, o) => { const [ex, ey] = mk(x, y, a)(R * .7, 0); A.ink(courbe([[x, y], [(x + ex) / 2 + 1, (y + ey) / 2], [ex, ey]]), .4); eventail(ex, ey, a, R, c, o); };
    const bouquet = (x, y, a, n, R, dore) => { for (let i = 0; i < n; i++) { const g = dore && i % 2 === 0; fan(x, y, a - 50 + i * (100 / Math.max(1, n - 1)), R * (.85 + r() * .25), g ? OR : PIG, g ? .5 : .32); } A.inkF(point(x, y, .8)); };
    if (s === 1) { const T = A.tige(40, 120, 40 + (r() - .5) * 4, 101, { cintre: 2, w0: 1.4, w1: .9 }); fan(...T.fin, -130, 6.2); fan(...T.fin, -55, 6.8); sol(A, 1); return; }
    if (s === 2) { const T = A.tige(40, 120, 41, 80, { cintre: (r() - .5) * 6, w0: 1.8, w1: .8 }); [.38, .55, .72].forEach((u, i) => fan(...T.at(u), T.ang(u) + (i % 2 ? 60 : -60), 7)); fan(...T.fin, -90, 7.5); sol(A, 2); return; }
    const H = [0, 0, 0, 62, 86, 104][s], tw = [0, 0, 0, 2.6, 3.8, 5][s];
    const T = A.tige(40, 120, 40 + (r() - .5) * 3, 120 - H, { cintre: (r() - .5) * 4, w0: tw * 1.6, w1: 1, lavis: false });
    A.lav(A.plumeD(T.p, tw * 1.6 + .5, 1.4, false), ENCRE, .14);
    const niveaux = s === 3 ? 3 : s === 4 ? 5 : 6;
    for (let i = 0; i < niveaux; i++) {
      const u = .35 + i * (.6 / niveaux), [bx, by] = T.at(u), larg = (1 - u) * (s === 3 ? 26 : s === 4 ? 40 : 52) + 5, c = i % 2 ? 1 : -1;
      const B = A.tige(bx, by, bx + c * larg * .55, by - 4 - r() * 4, { cintre: c * 2, w0: 1.4, w1: .5, lavis: false });
      bouquet(...B.fin, -90 + c * 20, 3, s === 3 ? 5 : 5.4, s >= 5 && r() < .55);
      bouquet(...B.at(.5), -90 - c * 10, 2, 4.6, s >= 5 && r() < .4);
    }
    bouquet(...T.fin, -90, 3, 5.6, false);
    if (s >= 5) { A.plan(1); for (const [gx, gy] of [[28, 66], [53, 58], [30, 88], [55, 82]]) { A.ink(courbe([[gx, gy - 4], [gx + .6, gy - 1]]), .4); A.lav(ovale(gx + .6, gy + 1, 1.8, 2.1), OR, .7); A.ink(ovale(gx + .6, gy + 1, 1.8, 2.1), .4); } eventail(60, 118, -160, 5, OR, .5); }
    sol(A, s, 16 + s * 3); finale(A, s, lueur, "papillon", [10, 14, 70, 40]);
  },

  lanterne(A, s, r, lueur) {
    const lant = (x, y, L, mur, squelette) => {
      const a = 88 + (r() - .5) * 12, [lx, ly] = [x + 2.2, y + 3.4];
      A.ink(courbe([[x, y], [x + 1.8, y + .6], [lx, ly]]), .45);
      const F = A.feuille(lx, ly, a, L, L * .44, { profil: PROF.lanterne, c: mur ? PIG : SEVE, o: squelette ? 0 : .42, o2: squelette ? 0 : .3, nervure: true, nerv: 0, cambre: 0, trait: squelette ? .4 : .55, reserve: !squelette });
      const T = F.T, side = [];
      for (const c of [-.5, .5]) { const p = []; for (let i = 0; i <= 8; i++) { const t = i / 8; p.push(T(t * L, c * PROF.lanterne(t) * L * .44 * 1.1)); } side.push(p); A.ink(courbe(p), .35, ENCRE, .7); }
      if (squelette) {
        let d = ""; for (let i = 1; i < 7; i++) { const t = i / 7, w = PROF.lanterne(t) * L * .44; d += courbe([T(t * L, -w * .95), T(t * L + .8, -w * .5), T(t * L, 0), T(t * L + .8, w * .5), T(t * L, w * .95)]); }
        A.ink(d, .25, ENCRE, .6);
        const [bx, by] = T(L * .55, 0); A.lav(point(bx, by, L * .2), PIG, .8, true); A.lav(point(bx, by, L * .2), OR, .4); A.lav(point(bx - L * .07, by - L * .07, L * .06), REFLET, .8); A.ink(point(bx, by, L * .2), .45);
      } else if (A.detail && L > 7) { let d = ""; for (let i = 2; i < 7; i += 2) { const t = i / 8; d += courbe([T(t * L, -L * .1), T(t * L + 1, -L * .2)]); } A.ink(d, .25, ENCRE, .5); }
    };
    if (s === 1) return germe(A, { profil: PROF.coeur });
    const H = [0, 0, 42, 62, 82, 98][s];
    const pts = [[40, 120]]; let x = 40;
    const nn = s === 2 ? 2 : s === 3 ? 3 : 4;
    for (let i = 1; i <= nn; i++) { x += (i % 2 ? 1 : -1) * (3 + r() * 2.5); pts.push([x, 120 - H * i / nn]); }
    const segs = [];
    for (let i = 0; i < nn; i++) segs.push(A.tige(...pts[i], ...pts[i + 1], { cintre: (i % 2 ? -1 : 1) * 1.5, w0: 2.2 - i * .3, w1: 1.9 - i * .35 }));
    segs.forEach((t, i) => { const c = i % 2 ? -1 : 1; A.feuille(...t.fin, t.angFin + c * (60 + r() * 15), 10 + s * .5 - i * .6, 4.6 + s * .25, { profil: PROF.coeur, o: .32, nerv: 3, cambre: c * .15 }); });
    if (s >= 4) { const b = A.tige(...segs[1].fin, segs[1].fin[0] - 20, segs[1].fin[1] - 14, { cintre: 4, w0: 1.4, w1: .7 }); A.feuille(...b.fin, b.angFin - 20, 11, 5, { profil: PROF.coeur, o: .3, nerv: 3 }); segs.push(b); }
    A.plan(1);
    if (s === 2) A.feuille(...segs.at(-1).fin, -90, 5, 2, { o: .4, nerv: 0 });
    if (s === 3) { const [fx, fy] = segs[1].fin; A.ink(courbe([[fx, fy], [fx - 2, fy + 2], [fx - 2.6, fy + 4]]), .4); A.feuille(fx - 2.6, fy + 4, 92, 4.5, 2.2, { profil: PROF.petale, c: REFLET, o: .9, o2: 0, nervure: false }); A.lav(ovale(fx - 2.6, fy + 8, 1.2, .8), OR, .7); lant(...segs[0].fin, 8, false, false); }
    if (s >= 4) {
      const ls = s === 4 ? [[0, 12.5, true], [1, 11.5, false], [3, 11, true]] : [[0, 13.5, true], [1, 13, true], [2, 12, true], [3, 12.5, false], [4, 11, true]];
      ls.forEach(([i, L, m]) => { const t = segs[Math.min(i, segs.length - 1)]; lant(...t.at(.95), L, m, false); });
      if (s >= 5) lant(...segs[2].at(.5), 12, true, true);
    }
    sol(A, s); finale(A, s, lueur, "lucioles", [10, 20, 72, 70]);
  },

  engrenage(A, s, r, lueur) {
    const fleur = (cx, cy, R, ouvert, rot = 0) => {
      const sq = .5;
      if (ouvert) {
        A.plan(1); const n = 11;
        for (let i = 0; i < n; i++) {
          const th = rad(-8 + i * (196 / (n - 1))), ox = cx + Math.cos(th) * R * .55, oy = cy + Math.sin(th) * R * .55 * sq;
          const a = deg(Math.atan2(Math.sin(th) * .7 + .9, Math.cos(th))) + (r() - .5) * 10;
          A.feuille(ox, oy, a + rot, R * (1.35 + r() * .2), R * .2, { profil: PROF.lanceole, c: PIG, o: .36, o2: .24, nervure: false, nerv: 0, cambre: (Math.cos(th) > 0 ? -1 : 1) * .08, trait: .42, seul: i % 3 === 0 });
          if (A.detail) A.ink(courbe([mk(ox, oy, a + rot)(R * .2, 0), mk(ox, oy, a + rot)(R * 1.1, .2)]), .22, PIG, .6);
        }
      }
      A.plan(2);
      // cœur en engrenage : un dôme à dents carrées, un moyeu
      const dents = 14, pts = [];
      for (let i = 0; i < dents * 4; i++) { const th = Math.PI + i / (dents * 4) * Math.PI * 2, haut = (i % 4 === 1 || i % 4 === 2) ? 1.16 : 1; const ry = Math.sin(th) < 0 ? R * .62 : R * .3; pts.push([cx + Math.cos(th) * R * .62 * haut, cy - R * .12 + Math.sin(th) * ry * haut]); }
      let d = `M${pt(pts[0])}` + pts.slice(1).map(p => `L${pt(p)}`).join("") + "Z";
      if (aire(pts) < 0) d = `M${pt(pts[pts.length - 1])}` + pts.slice(0, -1).reverse().map(p => `L${pt(p)}`).join("") + "Z";
      A.lav(d, OR, ouvert ? .55 : .3); A.lav(d, ouvert ? ENCRE : SEVE, ouvert ? .16 : .4); A.sil(d); A.ink(d, .45);
      // moyeu concentrique et fleurons en spirale (régulièrement répartis, sans « visage »)
      A.ink(courbe(Array.from({ length: 9 }, (_, i) => { const th = Math.PI + i / 8 * Math.PI; return [cx + Math.cos(th) * R * .4, cy - R * .12 + Math.sin(th) * R * .34]; })), .3, ENCRE, .55);
      if (ouvert) { let dd = ""; const nd = A.detail ? 30 : 14; for (let i = 1; i < nd; i++) { const th = i * 2.39996, rr = Math.sqrt(i / nd); const x = cx + Math.cos(th) * rr * R * .52, y = cy - R * .12 + Math.sin(th) * rr * R * .5 * (Math.sin(th) < 0 ? 1 : .5); dd += point(x, y, A.detail ? .32 : .45); } A.inkF(dd, ENCRE, .6); }
    };
    if (s === 1) return germe(A, { profil: PROF.lanceole, long: 9, larg: 2.6 });
    const H = [0, 0, 44, 64, 84, 98][s];
    const T = A.tige(40, 120, 40 + (r() - .5) * 8, 120 - H, { cintre: (r() - .5) * 6, w0: 2.2, w1: 1.2 });
    [[.1, -1, 16], [.14, 1, 15], [.35, -1, 12], [.5, 1, 10]].slice(0, s === 2 ? 3 : 4).forEach(([u, c, l]) => A.feuille(...T.at(u), T.ang(u) + c * 62, l + s, 2.8 + s * .25, { profil: PROF.lanceole, o: .32, nerv: 3, dents: 6, creux: .06, cambre: c * .14 }));
    if (A.detail) { let d = ""; for (let i = 0; i < 8; i++) { const [x, y] = T.at(.2 + i * .1); d += `M${pt([x, y])}l${f(1.2)} ${f(-.6)}`; } A.ink(d, .25, ENCRE, .6); }
    if (s === 2) { A.plan(1); A.feuille(...T.fin, -90, 5, 2, { o: .4, nerv: 0 }); }
    if (s === 3) fleur(T.fin[0], T.fin[1] + 2, 7, false);
    if (s >= 4) fleur(T.fin[0], T.fin[1] + 4, s === 4 ? 12 : 13, true);
    if (s >= 5) {
      A.plan(0); const B = A.tige(...T.at(.4), 13 + r() * 3, 120 - H * .64, { cintre: 6, w0: 1.5, w1: .9 });
      const B2 = A.tige(...T.at(.3), 66, 120 - H * .5, { cintre: -5, w0: 1.4, w1: .8 });
      fleur(B.fin[0], B.fin[1] + 3, 9.5, true, 4); fleur(B2.fin[0], B2.fin[1] + 2, 6, false);
    }
    sol(A, s); finale(A, s, lueur, "papillon", [8, 10, 34, 28]);
  },

  bruyere(A, s, r, lueur) {
    if (s === 1) {
      const T = A.tige(40, 120, 41, 104, { cintre: 2, w0: 1.4, w1: .7 });
      let d = ""; for (let i = 0; i < 6; i++) { const [x, y] = T.at(.3 + i * .12); const c = i % 2 ? 1 : -1; d += `M${pt([x, y])}l${c * 2.6} -1.6`; } A.ink(d, .5); A.lav(A.plumeD(T.p, 5, 3, false), SEVE, .3); sol(A, 1); return;
    }
    const nb = [0, 0, 4, 6, 8, 11][s], Hm = [0, 0, 34, 50, 66, 78][s];
    let aig = "", fl = "", flc = "", bt = "";
    for (let i = 0; i < nb; i++) {
      const a = -90 + (i - (nb - 1) / 2) * (110 / nb) + (r() - .5) * 10, L = Hm * (.7 + r() * .3) * (1 - Math.abs(a + 90) / 160);
      const x1 = 40 + Math.cos(rad(a)) * L, y1 = 120 + Math.sin(rad(a)) * L;
      const T = A.tige(40 + (r() - .5) * 3, 120, x1, y1, { cintre: (a + 90) * -.08, w0: 1.8, w1: .5, lavis: false });
      A.lav(A.plumeD(T.p, 5, 2.2, false), SEVE, .2);
      for (let j = 0; j < 12; j++) { const u = .15 + j * .07, [x, y] = T.at(u), an = rad(T.ang(u) + (j % 2 ? 50 : -50)); aig += `M${pt([x, y])}l${f(Math.cos(an) * 2.4)} ${f(Math.sin(an) * 2.4)}`; }
      if (s >= 3) for (let j = 0; j < 9; j++) {
        const u = .52 + j * .052, [x, y] = T.at(u), c = j % 2 ? 1 : -1, an = T.ang(u) + c * 80, [bx, by] = mk(x, y, an)(2.2, 0);
        if (s === 3) bt += point(bx, by, .9);
        else { const cl = ovale(bx, by + .6, 1.3, 1.8, (an - 90) * .3, 7); if (j % 3 === 2) flc += cl; else fl += cl; }
      }
    }
    A.ink(aig, .3, ENCRE, .7);
    A.plan(1);
    if (bt) { A.lav(bt, PIG, .4); A.ink(bt, .3, ENCRE, .65); }
    if (fl) { A.lav(fl, PIG, .42); A.lav(flc, PIG, .62); A.ink(fl + flc, .32, ENCRE, .7); }
    sol(A, s, 14 + s * 3.4); finale(A, s, lueur, "papillon", [12, 20, 68, 40]);
  },

  cactus(A, s, r, lueur) {
    const raquette = (x, y, a, L, W) => {
      const F = A.feuille(x, y, a, L, W, { profil: PROF.raquette, o: .32, o2: .22, nervure: false, nerv: 0, cambre: (r() - .5) * .05, trait: .6, reserve: true });
      let dots = "", spines = "";
      for (let i = 1; i <= 4; i++) for (let j = -1; j <= 1; j++) {
        const t = .16 + i * .17, w = PROF.raquette(t) * W * .62, v = j * w + (i % 2 ? w * .3 : 0);
        if (Math.abs(v) > w * 1.1) continue;
        const [px, py] = F.T(t * L, v); dots += point(px, py, .42);
        if (A.detail) spines += `M${pt([px, py])}l-1.4 -1.2M${pt([px, py])}l1.5 -.9`;
      }
      A.inkF(dots, ENCRE, .8); if (spines) A.ink(spines, .22, ENCRE, .7);
      return F;
    };
    const tipOf = (F, t, v) => F.T(...[t, v]);
    const fleur = (x, y, a) => { A.plan(9); for (let i = 0; i < 6; i++) A.feuille(x, y, a - 52 + i * 21, 6.4, 2.4, { profil: PROF.petale, c: PIG, o: .4, o2: .28, nervure: false, nerv: 0, trait: .4, seul: i % 2 === 0 }); A.lav(ovale(...mk(x, y, a)(1.4, 0), 2.2, 1.6, a), OR, .7); A.inkF(point(...mk(x, y, a)(2, 0), .5)); };
    const figue = (x, y, a) => { A.plan(9); const F = A.feuille(x, y, a, 7, 2.9, { profil: PROF.ovale, c: PIG, o: .55, o2: .32, nervure: false, cambre: 0, trait: .5, reserve: true }); A.inkF(point(...F.T(2.6, -.8), .3) + point(...F.T(4.4, .9), .3) + point(...F.T(3.4, -1.9), .3)); A.ink(courbe([F.T(7, -1.2), F.T(6.4, 0), F.T(7, 1.2)]), .4); };
    if (s === 1) { raquette(40, 120.5, -90 + (r() - .5) * 10, 11, 4.4); sol(A, 1, 10); return; }
    const sc = [0, 0, .62, .8, .94, 1.04][s];
    A.plan(0); const P0 = raquette(40, 121, -90 + (r() - .5) * 8, 34 * sc, 12 * sc);
    const t1 = tipOf(P0, 32 * sc, -6 * sc), t2 = tipOf(P0, 30 * sc, 6.5 * sc);
    if (s === 2) { A.plan(1); raquette(...t2, -60, 12, 5); }
    let P1, P2;
    if (s >= 3) { A.plan(1); P1 = raquette(...t1, -122 + (r() - .5) * 8, 28 * sc, 10 * sc); P2 = raquette(...t2, -58 + (r() - .5) * 8, 26 * sc, 10 * sc); }
    if (s === 3) { A.plan(9); for (const [P, v] of [[P1, 1], [P2, -1]]) { const [bx, by] = P.T(26 * sc, v * 3); A.lav(ovale(bx, by, 1.8, 2.4), SEVE, .5); A.lav(ovale(bx, by - 1.5, 1.2, 1.2), PIG, .55); A.ink(ovale(bx, by - .5, 1.8, 2.8), .4); } }
    if (s >= 4) {
      A.plan(2); const P3 = raquette(...tipOf(P1, 26 * sc, 3), -100, 22 * sc, 8.4 * sc);
      fleur(...P3.T(22 * sc, 0), -96); fleur(...P2.T(25 * sc, -3), -55);
      if (s === 4) fleur(...P1.T(24 * sc, -4), -140);
      if (s >= 5) { figue(...P1.T(25 * sc, -5), -150); figue(...P2.T(24 * sc, 5), -20); figue(...P3.T(16 * sc, 7), -15); figue(...P2.T(19 * sc, -8), -80); }
    }
    A.plan(0);
    if (A.detail) { A.lav(ovale(58, 120.4, 3, 1.6), ENCRE, .15); A.ink(ovale(58, 120.4, 3, 1.6), .4, ENCRE, .6); }
    sol(A, s, 14 + s * 3); finale(A, s, lueur, "papillon", [10, 14, 70, 34]);
  },

  iris(A, s, r, lueur) {
    const epee = (a, L, w) => A.feuille(40 + (a + 90) * .05, 120, a, L, w, { profil: PROF.epee, o: .3, o2: .24, nervure: true, nerv: 0, cambre: (a + 90) * .004 + (r() - .5) * .06, trait: .5 });
    const fleur = (cx, cy, R) => {
      A.plan(1); // étendards dressés
      for (const [a, c] of [[-118, .1], [-62, -.1]]) A.feuille(cx, cy, a, R * 1.15, R * .42, { profil: PROF.petale, c: PIG, o: .3, o2: .26, nervure: false, nerv: 0, cambre: c, crochet: true, trait: .45, seul: true });
      A.feuille(cx, cy - 1, -90, R * 1.25, R * .38, { profil: PROF.petale, c: PIG, o: .34, o2: .22, nervure: false, nerv: 0, cambre: 0, trait: .45, seul: true });
      A.plan(2); // sépales retombants et leur barbe d'or
      const chutes = [[168, -.38], [12, .38], [96, .08]];
      for (const [a, c] of chutes) {
        const F = A.feuille(cx, cy + 1, a, R * 1.3, R * .48, { profil: PROF.chute, c: PIG, o: .45, o2: .32, nervure: false, nerv: 0, cambre: c, crochet: true, trait: .5, seul: true });
        const n = F.mid.length - 1; A.ink(courbe(F.mid.slice(1, Math.round(n * .45))), 1.1, OR, .9);
        if (A.detail) { let d = ""; for (const k of [.3, .5, .7]) { const i = Math.round(n * k), q = F.up[i], m = F.mid[i], q2 = F.dn[i]; d += courbe([F.mid[Math.round(n * .2)], [(m[0] + q[0]) / 2, (m[1] + q[1]) / 2]]) + courbe([F.mid[Math.round(n * .2)], [(m[0] + q2[0]) / 2, (m[1] + q2[1]) / 2]]); } A.ink(d, .25, ENCRE, .55); }
      }
      A.lav(ovale(cx, cy + 1.5, R * .22, R * .16), SEVE, .5);
    };
    if (s === 1) { epee(-100, 14, 2); epee(-80, 11, 1.8); sol(A, 1); return; }
    const L = [0, 0, 40, 54, 66, 78][s], nb = [0, 0, 3, 5, 6, 7][s];
    for (let i = 0; i < nb; i++) { const a = -90 + (i - (nb - 1) / 2) * (44 / nb) + (r() - .5) * 6; epee(a, L * (1 - Math.abs(a + 90) / 70) * (.9 + r() * .15), 3 + s * .2); }
    if (s >= 3) {
      const H = [0, 0, 0, 74, 92, 104][s], T = A.tige(40, 120, 40 + (r() - .5) * 6, 120 - H, { cintre: (r() - .5) * 4, w0: 2, w1: 1.2 });
      A.feuille(...T.at(.55), T.ang(.55) + 8, 11, 2.2, { profil: PROF.epee, o: .3, nervure: false, nerv: 0, cambre: .1 });
      if (s === 3) { A.plan(1); A.feuille(...T.at(.92), -92, 15, 3.4, { profil: PROF.bouton, c: PIG, o: .45, o2: .3, nervure: false, cambre: 0 }); A.feuille(...T.at(.86), -98, 9, 2.2, { profil: PROF.lanceole, o: .45, nervure: false, cambre: .1 }); }
      else {
        fleur(T.fin[0], T.fin[1] + 6, s === 4 ? 10 : 11);
        A.plan(1); A.feuille(...T.at(.82), T.ang(.82) + 34, 10, 2.4, { profil: PROF.bouton, c: PIG, o: .45, o2: .3, nervure: false, cambre: 0 });
        if (s >= 5) { A.plan(0); const B = A.tige(...T.at(.5), 66, 120 - H * .66, { cintre: -6, w0: 1.4, w1: 1 }); fleur(B.fin[0], B.fin[1] + 5, 8.5); }
      }
    }
    sol(A, s); finale(A, s, lueur, "papillon", [10, 12, 32, 30]);
  },

  campanule(A, s, r, lueur) {
    const cloche = (x, y, a, L, ouverte) => {
      const T = mk(x, y, a), n = 8, up = [], dn = [];
      for (let i = 0; i <= n; i++) { const t = i / n, w = L * (ouverte ? .16 + .3 * Math.pow(t, 1.5) : .26 * Math.sin(Math.PI * Math.pow(t, .7))); up.push(T(t * L, -w)); dn.push(T(t * L, w)); }
      if (!ouverte) { const d = contour(up, dn); A.lav(d, PIG, .45); A.ink(d, .45); A.sil(d); return; }
      const lob = [T(L * 1.12, -L * .52), T(L * .94, -L * .24), T(L * 1.14, 0), T(L * .94, L * .24), T(L * 1.12, L * .52)];
      const poly = [...up, ...lob, ...dn.slice().reverse()];
      const d = (aire(poly) >= 0 ? `M${pt(up[0])}` + seg(up) + lob.map(p => `L${pt(p)}`).join("") + `L${pt(dn[n])}` + seg(dn.slice().reverse()) : `M${pt(dn[0])}` + seg(dn) + lob.slice().reverse().map(p => `L${pt(p)}`).join("") + `L${pt(up[n])}` + seg(up.slice().reverse())) + "Z";
      A.lav(d, PIG, .34, true); A.lav(contour(up, up.map((p, i) => [(p[0] + dn[i][0]) / 2, (p[1] + dn[i][1]) / 2])), PIG, .24); A.sil(d); A.ink(d, .5);
      A.ink(courbe([T(L * .92, -L * .4), T(L * .8, 0), T(L * .92, L * .4)]), .35, ENCRE, .7);
      A.ink(courbe([T(L * .5, 0), T(L * 1.05, .3), T(L * 1.25, 0)]), .35, ENCRE, .8);
      A.lav(ovale(...T(.6, 0), L * .14, L * .2, a), SEVE, .6);
    };
    if (s === 1) return germe(A, { profil: PROF.ovale, long: 7, larg: 3.2 });
    const H = [0, 0, 40, 64, 84, 96][s];
    const tiges = [[40 + (r() - .5) * 4, 120 - H, -10 - r() * 6]];
    if (s >= 5) tiges.push([62, 120 - H * .72, -8]);
    tiges.forEach(([x1, y1, c], ti) => {
      const T = A.tige(40 + ti * 1.5, 120, x1, y1, { cintre: c * (ti ? -1 : 1), w0: 1.8, w1: .7 });
      for (const [u, k] of [[.12, -1], [.2, 1], [.32, -1], [.45, 1]]) A.feuille(...T.at(u), T.ang(u) + k * 52, 11 + s * .6 - u * 8, 2.6, { profil: PROF.lanceole, o: .3, nerv: 0, dents: 4, creux: .08, cambre: k * .1 });
      if (s === 2) A.feuille(...T.fin, T.angFin, 5.5, 1.8, { o: .4, nerv: 0 });
      if (s >= 3) {
        A.plan(1); const nbc = s === 3 ? 4 : s === 4 ? 5 : 4;
        for (let i = 0; i < nbc; i++) {
          const u = .56 + i * (.44 / nbc), [px, py] = T.at(u), side = (ti === 0 ? 1 : -1) * (i % 2 ? -1 : 1);
          const [cx, cy] = mk(px, py, T.ang(u) + side * 70)(2.6, 0);
          A.ink(courbe([[px, py], [cx, cy]]), .4);
          const ouverte = s >= 4 && i < nbc - (s === 4 ? 2 : 1);
          cloche(cx, cy, 90 + side * (ouverte ? 30 : 15) + (r() - .5) * 14, ouverte ? 10.5 : 6.8, ouverte);
        }
        A.plan(0);
      }
    });
    if (s >= 5 && A.detail) { A.plan(9); A.top(svg("text", { x: 12, y: 30, "font-size": 9, fill: PIG, opacity: .75, "font-family": MAIN, transform: "rotate(-14 12 30)" }, "♪")); A.top(svg("text", { x: 19, y: 22, "font-size": 7, fill: PIG, opacity: .55, "font-family": MAIN }, "♫")); }
    sol(A, s); finale(A, s, lueur, "lucioles", [8, 30, 72, 80]);
  },

  tournesol(A, s, r, lueur) {
    const tete = (cx, cy, R, rot, sq, ouverte) => {
      const P = (u, v) => { const c = Math.cos(rad(rot)), si = Math.sin(rad(rot)); return [cx + u * c - v * sq * si, cy + u * si + v * sq * c]; };
      A.plan(1);
      if (!ouverte) {
        for (let i = 0; i < 9; i++) { const th = i / 9 * 360; const [x, y] = P(Math.cos(rad(th)) * R * .4, Math.sin(rad(th)) * R * .4); A.feuille(x, y, deg(Math.atan2(Math.sin(rad(th)) * sq, Math.cos(rad(th)))) + rot, R * .7, R * .2, { profil: PROF.lanceole, o: .4, o2: .25, nervure: false, nerv: 0, trait: .42 }); }
        const d = ferme(Array.from({ length: 10 }, (_, i) => P(Math.cos(i / 10 * 2 * Math.PI) * R * .48, Math.sin(i / 10 * 2 * Math.PI) * R * .48)));
        A.lav(d, SEVE, .5); A.ink(d, .45); A.lav(d, PIG, .15); return;
      }
      for (const [ring, o, dec] of [[0, .32, 0], [1, .4, 14]]) {
        const n = 16;
        for (let i = 0; i < n; i++) {
          const th = rad(i / n * 360 + dec + (r() - .5) * 6), ox = Math.cos(th) * R * .48, oy = Math.sin(th) * R * .48, [x, y] = P(ox, oy);
          const a = deg(Math.atan2(Math.sin(th) * sq, Math.cos(th))) + rot;
          A.feuille(x, y, a, R * (.58 + r() * .1) * (1 - ring * .06) * (1 - .25 * Math.abs(Math.sin(th)) * (1 - sq)), R * .14, { profil: PROF.lanceole, c: ring ? PIG : OR, o, o2: ring ? .22 : .3, nervure: false, nerv: 0, trait: .4, cambre: (r() - .5) * .2 });
        }
      }
      A.plan(2);
      const disque = ferme(Array.from({ length: 12 }, (_, i) => P(Math.cos(i / 12 * 2 * Math.PI) * R * .5, Math.sin(i / 12 * 2 * Math.PI) * R * .5)));
      A.lav(disque, ENCRE, .42); A.lav(disque, PIG, .3); A.sil(disque); A.ink(disque, .55);
      let g = ""; const ns = A.detail ? 90 : 34;
      for (let i = 1; i < ns; i++) { const th = i * 137.508 * Math.PI / 180, rr = R * .46 * Math.sqrt(i / ns); g += point(...P(Math.cos(th) * rr, Math.sin(th) * rr), R * (A.detail ? .028 : .045)); }
      A.inkF(g, OR, .85);
    };
    if (s === 1) return germe(A, { profil: PROF.ovale, long: 9, larg: 3.8 });
    const H = [0, 0, 40, 62, 84, 100][s];
    const T = A.tige(40, 120, 40 + (r() - .5) * 6, 120 - H, { cintre: (r() - .5) * 6, w0: s >= 4 ? 3.4 : 2.4, w1: s >= 4 ? 2 : 1.2 });
    const nf = [0, 0, 3, 5, 6, 6][s];
    for (let i = 0; i < nf; i++) {
      const u = .12 + i * (.72 / nf), c = i % 2 ? 1 : -1, [x, y] = T.at(u), a = T.ang(u) + c * (62 + r() * 10), [px, py] = mk(x, y, a)(3 + s * .4, 0);
      A.ink(courbe([[x, y], [(x + px) / 2, (y + py) / 2 - 1], [px, py]]), .6);
      A.feuille(px, py, a + c * 12, (10 + s * 1.6) * (1.14 - i * .1), (4.6 + s * .6) * (1.14 - i * .1), { profil: PROF.coeur, o: .32, nerv: 3, dents: 7, creux: .05, cambre: c * .16 });
    }
    if (A.detail) { let d = ""; for (let i = 0; i < 12; i++) { const u = .1 + i * .07, [x, y] = T.at(u), a = rad(T.ang(u) + (i % 2 ? 60 : -60)); d += `M${pt([x + Math.cos(a) * 1.2, y + Math.sin(a) * 1.2])}l${f(Math.cos(a) * 1)} ${f(Math.sin(a) * 1)}`; } A.ink(d, .25, ENCRE, .6); }
    if (s === 2) { A.plan(1); A.feuille(...T.fin, -90, 5, 2.2, { o: .4, nerv: 0 }); }
    if (s === 3) tete(T.fin[0], T.fin[1], 9, 0, .8, false);
    if (s >= 4) tete(T.fin[0] + (s >= 5 ? 3 : 0), T.fin[1] + (s >= 5 ? 3 : 1), s === 4 ? 15 : 17, s >= 5 ? 14 : -6, .72, true);
    if (s >= 5) { A.plan(0); const B = A.tige(...T.at(.5), 16, 120 - H * .64, { cintre: 5, w0: 1.5, w1: 1 }); tete(B.fin[0], B.fin[1], 7.5, -20, .75, true); }
    sol(A, s); finale(A, s, lueur, "papillon", [8, 12, 30, 34]);
  },
};

// ───────────────────────── rendu ─────────────────────────
/**
 * Dessine une plante dans un <g>. Repère : largeur 80, hauteur 120, sol à y = 120.
 * @param {object} o { forme, couleur?, stade (0..5), graine, soif (bool), lueur (0..1), epaisseur? (≥ 1 pour les petites tailles) }
 */
export function plante({ forme = "rose", couleur = null, stade = 0, graine = "x", soif = false, lueur = 1, epaisseur = 1 } = {}) {
  const s = Math.max(0, Math.min(5, Math.round(Number(stade) || 0)));
  const esp = ESPECES[forme] ? forme : "rose";
  const r = rng(`${graine}|${esp}`);
  const A = new Atelier(r, Math.max(1, epaisseur), !!soif);
  if (s === 0) dessinGraine(A, esp); else ESPECES[esp](A, s, r, Math.max(0, Math.min(1, lueur ?? 1)));
  if (soif && s >= 2) { A.plan(0); A.feuille(56 + r() * 6, 119.4, -8 + r() * 10, 4.2, 1.8, { profil: PROF.petale, c: s >= 4 ? PIG : SEVE, o: .3, o2: .2, nervure: false, trait: .35 }); }

  const g = svg("g", { class: `plante plante-${esp}${soif ? " assoiffee" : ""}`, "data-stade": s, "data-forme": esp });
  if (couleur) g.setAttribute("style", `--pigment:${couleur}`);
  // personnalité de chaque plante : sens, port et taille légèrement différents selon la graine
  const rv = rng(`${graine}|port`), sens = s >= 1 && rv() < .5 ? -1 : 1, taille = s >= 2 ? .9 + rv() * .16 : 1;
  const tr = [soif && s >= 1 ? `rotate(${s >= 3 ? 5 : 3} 40 120)` : "", sens < 0 || taille !== 1 ? `translate(40 120) scale(${f(sens * taille * 100) / 100} ${f(taille * 100) / 100}) translate(-40 -120)` : ""].join(" ").trim();
  const corps = svg("g", tr ? { transform: tr } : {});
  if (sens < 0) for (const P of A.plans) for (const n of P.dessus) if (n.tagName === "text") { const x = Number(n.getAttribute("x")) || 0; n.setAttribute("transform", `translate(${f(2 * x)} 0) scale(-1 1) ${n.getAttribute("transform") || ""}`.trim()); }
  const fane = soif ? .58 : 1, encreO = soif ? .78 : 1;
  const plans = A.plans;
  let defs = null;
  plans.forEach((P, k) => {
    if (!P.lav.length && !P.ink.size && !P.dessus.length) return;
    const pg = svg("g", {});
    if (P.lav.length) {
      const lg = svg("g", { filter: "url(#aquarelle)", transform: "translate(.45 -.3)" });
      for (const l of P.lav) { const op = f(l.o * (l.c === PAPIER || l.c === REFLET ? 1 : fane) * 100) / 100; lg.append(svg("path", { d: l.d, fill: l.c, "fill-opacity": op, style: l.c === PAPIER || l.c === REFLET ? null : `fill-opacity:calc(var(--lavis-k, 1) * ${op})` })); }
      pg.append(lg);
    }
    if (P.ink.size) {
      const ig = svg("g", encreO < 1 ? { opacity: encreO } : {});
      for (const [cle, d] of P.ink) {
        const [type, c, w, o] = cle.split("|");
        if (type === "f") ig.append(svg("path", { d: d, fill: c, "fill-opacity": o }));
        else ig.append(svg("path", { d: d, fill: "none", stroke: c, "stroke-width": w, "stroke-opacity": o, "stroke-linecap": "round", "stroke-linejoin": "round" }));
      }
      pg.append(ig);
    }
    for (const n of P.dessus) pg.append(n);
    const dessus = plans.slice(k + 1).flatMap(p => p.sil);
    if (dessus.length && P.lav.length + P.ink.size > 0) {
      const id = `pm${(++COMPTEUR).toString(36)}`;
      defs = defs || svg("defs", {});
      defs.append(svg("mask", { id, maskUnits: "userSpaceOnUse", x: -40, y: -40, width: 160, height: 200 },
        svg("rect", { x: -40, y: -40, width: 160, height: 200, fill: "white" }),
        svg("path", { d: dessus.join(""), fill: "black", stroke: "black", "stroke-width": .4 })));
      pg.setAttribute("mask", `url(#${id})`);
    }
    corps.append(pg);
  });
  if (defs) g.append(defs);
  g.append(corps);
  return g;
}

// Cadres carrés ajustés à chaque stade : une graine remplit son médaillon autant qu'une plante en fleur.
const CADRES = ["10 80 60 60", "15 84 48 48", "12 69 56 56", "-1 41 82 82", "-10 25 98 98", "-16 13 110 110"];
// Variante « sol » : même zoom, mais le sol reste au bas du cadre (rangées de plantes alignées).
const CADRES_SOL = ["12 74 56 56", "15 76 48 48", "12 66 56 56", "-1 42 82 82", "-10 26 98 98", "-16 14 110 110"];

/**
 * Petite plante autonome dans son <svg> (traits épaissis pour rester lisible à 40 px).
 * Avec { cadre: true }, le <svg> est carré (taille × taille) et zoomé sur la plante selon son stade ;
 * { cadre: "sol" } garde en plus le sol au bas du cadre.
 */
export function plantePetite(o, taille = 44, { cadre = false } = {}) {
  const stade = Math.max(0, Math.min(5, Math.round(Number(o?.stade) || 0)));
  const vb = cadre === "sol" ? CADRES_SOL[stade] : cadre ? CADRES[stade] : "0 0 80 120";
  const equivalent = cadre ? taille * 80 / Number(vb.split(" ")[2]) : taille;
  const e = equivalent <= 48 ? 1.9 : equivalent <= 80 ? 1.4 : 1;
  const s = svg("svg", { viewBox: vb, width: taille, height: cadre ? taille : taille * 1.5, "aria-hidden": "true", class: `plante-petite${cadre ? " cadree" : ""}`, overflow: cadre ? "hidden" : "visible" });
  s.append(plante({ epaisseur: e, ...o }));
  return s;
}

/** Outils de tracé partagés avec les autres illustrations (src/ui/illustrations.js). */
export const outilsTrace = { courbe, ferme, ovale, point, mk, f, pt, rng, PROF };
