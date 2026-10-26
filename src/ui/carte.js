// ÉCLORE — Cartes dessinées (bloc de cours `carte`, voir docs/COURS.md).
//
//   import { rendreCarte } from "./carte.js";
//   const figure = await rendreCarte({ t: "carte", fond: "monde", titre: "…", cadre, zones, reperes, traits, legende });
//
// Aucune dépendance : les fonds (TopoJSON quantifié, lon/lat) sont chargés paresseusement depuis
// assets/cartes/ et mis en cache ; la projection est calculée ici :
//   - monde entier : Equal Earth (Šavrič, Patterson, Jenny 2018) ;
//   - `cadre` (et fond France) : équirectangulaire corrigée par le cosinus de la latitude centrale.
// Styles : src/styles/carte.css (jetons de la charte « Herbier », aucune couleur codée en dur).

const NS = "http://www.w3.org/2000/svg";
const L = 800; // largeur du viewBox (unités utilisateur)
const CADRE_FRANCE = [-5.4, 41.2, 9.9, 51.3];
const SEUIL_DETAIL = 140; // en dessous de cette amplitude en longitude, on prend le fond détaillé

const donnees = new Map();
let compteur = 0;

// ———————————————————————————————————— Données ————————————————————————————————————

function charger(nom) {
  if (!donnees.has(nom)) {
    const p = fetch(new URL(`../../assets/cartes/${nom}.json`, import.meta.url))
      .then((r) => { if (!r.ok) throw new Error(`Fond de carte « ${nom} » introuvable (${r.status})`); return r.json(); })
      .then(decoder);
    p.catch(() => donnees.delete(nom)); // nouvel essai possible plus tard
    donnees.set(nom, p);
  }
  return donnees.get(nom);
}

/** Décode un TopoJSON quantifié : arcs absolus en [lon, lat], géométries en anneaux d'indices d'arcs. */
function decoder(topo) {
  const [kx, ky] = topo.transform?.scale || [1, 1];
  const [tx, ty] = topo.transform?.translate || [0, 0];
  const arcs = topo.arcs.map((arc) => {
    let x = 0, y = 0;
    return arc.map(([dx, dy]) => { x += dx; y += dy; return [x * kx + tx, y * ky + ty]; });
  });
  const boite = (idx) => {
    let a = 180, b = 90, c = -180, d = -90;
    for (const i of idx) for (const [x, y] of arcs[i < 0 ? ~i : i]) { if (x < a) a = x; if (x > c) c = x; if (y < b) b = y; if (y > d) d = y; }
    return [a, b, c, d];
  };
  const objets = {};
  for (const [nom, obj] of Object.entries(topo.objects)) {
    objets[nom] = obj.geometries.filter((g) => g.arcs).map((g) => {
      const polys = g.type === "Polygon" ? [g.arcs] : g.arcs;
      return { props: g.properties || {}, polys, bbox: boite(polys.flat(2)) };
    });
  }
  return { arcs, objets };
}

function anneau(arcs, indices) {
  const pts = [];
  for (const i of indices) {
    const a = i < 0 ? arcs[~i].slice().reverse() : arcs[i];
    for (let k = pts.length ? 1 : 0; k < a.length; k++) pts.push(a[k]);
  }
  return pts;
}

// ———————————————————————————————————— Projections ————————————————————————————————————

const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = Math.sqrt(3) / 2;
function equalEarthBrut(lon, lat) {
  const l = (lon * Math.PI) / 180, p = (lat * Math.PI) / 180;
  const t = Math.asin(M * Math.sin(p)), t2 = t * t, t6 = t2 * t2 * t2;
  return [(l * Math.cos(t)) / (M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2))), t * (A1 + A2 * t2 + t6 * (A3 + A4 * t2))];
}

function projectionMonde() {
  const marge = 6;
  const [xm] = equalEarthBrut(180, 0), [, ym] = equalEarthBrut(0, 90);
  const s = (L - 2 * marge) / (2 * xm);
  const H = Math.round(2 * ym * s + 2 * marge);
  const p = (lon, lat) => { const [x, y] = equalEarthBrut(lon, lat); return [L / 2 + x * s, H / 2 - y * s]; };
  // Contour du globe : méridiens ±180° et lignes des pôles (Equal Earth a des pôles plats).
  const contour = [];
  for (let lat = 90; lat >= -90; lat -= 2) contour.push(p(180, lat));
  for (let lat = -90; lat <= 90; lat += 2) contour.push(p(-180, lat));
  return { type: "monde", H, p, contour, kmParUnite: null, cadre: [-180, -90, 180, 90] };
}

function projectionCadre(cadre) {
  const [x0, y0, x1, y1] = cadre;
  const k = Math.cos((((y0 + y1) / 2) * Math.PI) / 180);
  const s = L / ((x1 - x0) * k);
  const H = Math.round((y1 - y0) * s);
  const p = (lon, lat) => [(lon - x0) * k * s, (y1 - lat) * s];
  const contour = [[0, 0], [L, 0], [L, H], [0, H]];
  return { type: "cadre", H, p, contour, kmParUnite: 111.32 / s, cadre };
}

function cadreValide(c) {
  return Array.isArray(c) && c.length === 4 && c.every(Number.isFinite) && c[0] < c[2] && c[1] < c[3] && c[1] >= -89 && c[3] <= 89;
}

// ———————————————————————————————————— Outils SVG ————————————————————————————————————

function el(tag, attrs = {}, parent) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) if (v !== null && v !== undefined && v !== false) e.setAttribute(k, v);
  if (parent) parent.append(e);
  return e;
}
const r1 = (v) => Math.round(v * 10) / 10;

/** Chemin d'une suite de points projetés ; ignore les points à moins de `tol` unités du précédent. */
function tracer(pts, ferme, tol = 0.5) {
  let d = "", px = Infinity, py = Infinity, n = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x, y] = pts[i];
    if (i && i < pts.length - 1 && Math.abs(x - px) < tol && Math.abs(y - py) < tol) continue;
    d += (n ? "L" : "M") + r1(x) + " " + r1(y);
    px = x; py = y; n++;
  }
  return n > 1 ? d + (ferme ? "Z" : "") : "";
}

function intersecte(b, c, marge) {
  return b[0] <= c[2] + marge && b[2] >= c[0] - marge && b[1] <= c[3] + marge && b[3] >= c[1] - marge;
}

function filtreDisponible(id) {
  return typeof document !== "undefined" && !!document.getElementById(id);
}

function texteDegre(v, pos, neg) {
  const a = Math.abs(v);
  return `${Number.isInteger(a) ? a : a.toFixed(2).replace(".", ",")}° ${v >= 0 ? pos : neg}`;
}

// ———————————————————————————————————— Fond : terres, mer, frontières ————————————————————————————————————

function dessinerFond(svg, defs, id, geo, proj, { entites, zones, cle }) {
  const c = proj.cadre, marge = proj.type === "monde" ? 999 : 2;
  const visibles = entites.filter((f) => intersecte(f.bbox, c, marge));
  const P = (pt) => proj.p(pt[0], pt[1]);

  // Usage des arcs : 1 = côte, 2 = frontière (entre deux pays) ou limite (dans un même pays).
  const usage = new Map();
  for (const f of visibles) for (const poly of f.polys) for (const r of poly) for (const i of r) {
    const j = i < 0 ? ~i : i;
    const u = usage.get(j);
    if (u) u.push(cle(f)); else usage.set(j, [cle(f)]);
  }

  const chemins = new Map();
  for (const f of visibles) {
    let d = "";
    for (const poly of f.polys) for (const r of poly) d += tracer(anneau(geo.arcs, r).map(P), true);
    if (d) chemins.set(f, d);
  }
  let cote = "", frontiere = "", limite = "";
  for (const [j, cles] of usage) {
    const d = tracer(geo.arcs[j].map(P), false);
    if (cles.length < 2) cote += d;
    else if (cles[0] === cles[1]) limite += d;
    else frontiere += d;
  }

  // Mer : aplat + hachures fines, puis « lignes d'eau » concentriques le long des côtes.
  const contour = tracer(proj.contour, true, 0);
  const clip = el("clipPath", { id: `${id}-clip` }, defs);
  el("path", { d: contour }, clip);
  const motif = el("pattern", { id: `${id}-eau`, width: 7, height: 7, patternUnits: "userSpaceOnUse" }, defs);
  el("path", { d: "M0 3.5H7", class: "carte-hachure" }, motif);

  el("path", { d: contour, class: "carte-mer" }, svg);
  el("path", { d: contour, class: "carte-mer-hachure", fill: `url(#${id}-eau)` }, svg);

  const g = el("g", { "clip-path": `url(#${id}-clip)` }, svg);
  const eau = el("g", { class: "carte-lignes-eau", "aria-hidden": "true" }, g);
  el("path", { d: cote, class: "carte-eau-1" }, eau);
  el("path", { d: cote, class: "carte-eau-2" }, eau);
  el("path", { d: cote, class: "carte-eau-3" }, eau);

  const graticule = el("g", { class: "carte-graticule" }, g);

  const terres = el("g", { class: "carte-terres" }, g);
  for (const [f, d] of chemins) el("path", { d, class: f.props.voisin ? "carte-terre carte-voisin" : "carte-terre" }, terres);

  const enZone = [...chemins.keys()].filter((f) => zones.has(f.props.iso) || zones.has(f.props.id));
  if (enZone.length) {
    const gz = el("g", { class: "carte-zones" }, g);
    if (filtreDisponible("aquarelle")) gz.setAttribute("filter", "url(#aquarelle)");
    for (const f of enZone) el("path", { d: chemins.get(f), class: "carte-zone" }, gz);
  }

  const traits = el("g", { class: "carte-limites" }, g);
  if (limite) el("path", { d: limite, class: "carte-limite" }, traits);
  if (frontiere) el("path", { d: frontiere, class: "carte-frontiere" }, traits);
  const gc = el("path", { d: cote, class: "carte-cote" }, traits);
  if (filtreDisponible("tremble")) gc.setAttribute("filter", "url(#tremble)");

  return { g, graticule, contour, enZone, chemins };
}

function dessinerGraticule(gr, proj) {
  const lignes = [];
  if (proj.type === "monde") {
    for (let lon = -150; lon <= 150; lon += 30) {
      const pts = []; for (let lat = -90; lat <= 90; lat += 3) pts.push(proj.p(lon, lat));
      lignes.push([tracer(pts, false, 0), lon === 0]);
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const pts = []; for (let lon = -180; lon <= 180; lon += 3) pts.push(proj.p(lon, lat));
      lignes.push([tracer(pts, false, 0), lat === 0]);
    }
    for (const lat of [23.44, -23.44, 66.56, -66.56]) {
      const pts = []; for (let lon = -180; lon <= 180; lon += 3) pts.push(proj.p(lon, lat));
      lignes.push([tracer(pts, false, 0), "tropique"]);
    }
  } else {
    const [x0, y0, x1, y1] = proj.cadre, amp = Math.max(x1 - x0, y1 - y0);
    const pas = amp > 90 ? 20 : amp > 36 ? 10 : amp > 14 ? 5 : 2;
    for (let lon = Math.ceil(x0 / pas) * pas; lon <= x1; lon += pas) lignes.push([tracer([proj.p(lon, y0), proj.p(lon, y1)], false, 0), lon === 0]);
    for (let lat = Math.ceil(y0 / pas) * pas; lat <= y1; lat += pas) lignes.push([tracer([proj.p(x0, lat), proj.p(x1, lat)], false, 0), lat === 0]);
    proj.pasGraticule = pas;
  }
  for (const [d, fort] of lignes) el("path", { d, class: fort === "tropique" ? "carte-tropique" : fort ? "carte-graticule-fort" : "carte-graticule-ligne" }, gr);
}

// ———————————————————————————————————— Habillage : rose, échelle, cadre ————————————————————————————————————

function dessinerRose(svg, x, y, r) {
  const g = el("g", { class: "carte-rose", transform: `translate(${r1(x)} ${r1(y)})`, "aria-hidden": "true" }, svg);
  el("circle", { r: r * 0.62, class: "carte-rose-cercle" }, g);
  const b = r * 0.16, c = r * 0.55;
  // Branches secondaires (NE, SE…), puis principales en demi-pointes claires et foncées.
  for (const a of [45, 135, 225, 315]) {
    const gg = el("g", { transform: `rotate(${a})` }, g);
    el("path", { d: `M0 ${-c} L${b * 0.7} 0 L${-b * 0.7} 0Z`, class: "carte-rose-clair" }, gg);
  }
  for (const a of [0, 90, 180, 270]) {
    const gg = el("g", { transform: `rotate(${a})` }, g);
    el("path", { d: `M0 ${-r} L${b} ${-b} L0 0Z`, class: "carte-rose-fonce" }, gg);
    el("path", { d: `M0 ${-r} L${-b} ${-b} L0 0Z`, class: "carte-rose-clair" }, gg);
  }
  const n = el("text", { y: -r - 4, class: "carte-rose-n", "text-anchor": "middle" }, g);
  n.textContent = "N";
  return [x - r, y - r - 16, x + r, y + r];
}

function dessinerEchelle(svg, proj, x, y, k) {
  if (!proj.kmParUnite) return null;
  const cible = 110 * proj.kmParUnite * Math.max(1, k * 0.9);
  const pas = [10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000];
  const km = pas.reduce((m, v) => (Math.abs(v - cible) < Math.abs(m - cible) ? v : m), pas[0]);
  const w = km / proj.kmParUnite, hh = 4.5 * Math.max(1, k * 0.9);
  const g = el("g", { class: "carte-echelle", transform: `translate(${r1(x)} ${r1(y)})`, "aria-hidden": "true" }, svg);
  el("rect", { x: 0, y: 0, width: r1(w), height: hh, class: "carte-echelle-clair" }, g);
  el("rect", { x: 0, y: 0, width: r1(w / 2), height: hh, class: "carte-echelle-fonce" }, g);
  const fs = 10 * k;
  const t0 = el("text", { x: 0, y: -4, "font-size": r1(fs), class: "carte-echelle-texte", "text-anchor": "start" }, g); t0.textContent = "0";
  const t1 = el("text", { x: r1(w), y: -4, "font-size": r1(fs), class: "carte-echelle-texte", "text-anchor": "end" }, g); t1.textContent = `${km.toLocaleString("fr-FR")} km`;
  return [x - 4, y - fs - 6, x + w + 4, y + hh + 2];
}

// ———————————————————————————————————— Étiquettes (évitement simple des chevauchements) ————————————————————————————————————

const LARG_MAIN = 0.47, LARG_CAPS = 0.74;

function recouvrement(a, b) {
  const w = Math.min(a[2], b[2]) - Math.max(a[0], b[0]), h = Math.min(a[3], b[3]) - Math.max(a[1], b[1]);
  return w > 0 && h > 0 ? w * h : 0;
}
function cout(boite, occupees, H) {
  let c = 0;
  for (const o of occupees) c += recouvrement(boite, o);
  const hors = Math.max(0, 3 - boite[0]) + Math.max(0, boite[2] - (L - 3)) + Math.max(0, 3 - boite[1]) + Math.max(0, boite[3] - (H - 3));
  return c + hors * 400;
}

function boiteTexte(x, y, largeur, fs, ancre) {
  const x0 = ancre === "start" ? x : ancre === "end" ? x - largeur : x - largeur / 2;
  return [x0 - 2, y - fs * 0.78, x0 + largeur + 2, y + fs * 0.22];
}

/** Choisit, parmi des positions candidates, la première qui ne chevauche rien (ou la moins gênante). */
function placer(candidats, occupees, H) {
  let mieux = null;
  for (const cnd of candidats) {
    const c = cout(cnd.boite, occupees, H) + (cnd.penalite || 0);
    if (!mieux || c < mieux.c) mieux = { ...cnd, c };
    if (c === 0) break;
  }
  return mieux;
}

// ———————————————————————————————————— Rendu principal ————————————————————————————————————

function libelleLieu(lat, lon, reperes) {
  const proche = reperes.find((r) => Math.abs(r.lat - lat) < 0.6 && Math.abs(r.lon - lon) < 0.6);
  return proche ? proche.nom : `${texteDegre(lat, "N", "S")}, ${texteDegre(lon, "E", "O")}`;
}

function petitMd(texte) {
  const span = document.createElement("span");
  const morceaux = String(texte).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/);
  for (const m of morceaux) {
    if (!m) continue;
    if (/^\*\*.+\*\*$/.test(m)) { const b = document.createElement("strong"); b.textContent = m.slice(2, -2); span.append(b); }
    else if (/^\*.+\*$/.test(m)) { const i = document.createElement("em"); i.textContent = m.slice(1, -1); span.append(i); }
    else span.append(document.createTextNode(m));
  }
  return span;
}

/**
 * Construit la figure d'un bloc `carte`.
 * @param {{fond?: "monde"|"france", titre?: string, cadre?: number[], zones?: string[],
 *          reperes?: {nom: string, lat: number, lon: number}[],
 *          traits?: {de: number[], a: number[], label?: string}[], legende?: string}} bloc
 * @returns {Promise<HTMLElement>} une <figure class="carte-eclore">
 */
export async function rendreCarte(bloc = {}) {
  const id = `carte-eclore-${++compteur}`;
  const fond = bloc.fond === "france" ? "france" : "monde";
  const titre = String(bloc.titre || (fond === "france" ? "Carte de France" : "Carte du monde"));
  const reperes = (Array.isArray(bloc.reperes) ? bloc.reperes : []).filter((r) => r && Number.isFinite(r.lat) && Number.isFinite(r.lon) && r.nom);
  const point = (p) => Array.isArray(p) && p.length >= 2 && Number.isFinite(p[0]) && Number.isFinite(p[1]);
  const traits = (Array.isArray(bloc.traits) ? bloc.traits : []).filter((t) => t && point(t.de) && point(t.a));
  const zones = new Set((Array.isArray(bloc.zones) ? bloc.zones : []).map((z) => (fond === "france" ? String(z).toLowerCase() : String(z).toUpperCase())));

  const figure = document.createElement("figure");
  figure.className = `carte-eclore carte-eclore--${fond}`;
  const cap = document.createElement("figcaption");
  cap.className = "carte-titre";
  cap.textContent = titre;
  figure.append(cap);

  let cadre = cadreValide(bloc.cadre) ? bloc.cadre.slice() : fond === "france" ? CADRE_FRANCE : null;
  let geo, entites;
  try {
    if (fond === "france") {
      geo = await charger("france");
      entites = [
        ...geo.objets.voisins.map((f) => ({ ...f, props: { ...f.props, voisin: true } })),
        ...geo.objets.regions.map((f) => ({ ...f, props: { ...f.props, pays: "FR" } })),
      ];
    } else {
      geo = await charger(cadre && cadre[2] - cadre[0] <= SEUIL_DETAIL ? "monde-detail" : "monde");
      entites = geo.objets.pays;
    }
  } catch (e) {
    figure.classList.add("carte-eclore--erreur");
    const p = document.createElement("p");
    p.className = "carte-indisponible";
    p.textContent = "Carte indisponible pour le moment.";
    figure.append(p);
    figure.append(listeTexte(reperes, [], traits));
    return figure;
  }

  const proj = cadre ? projectionCadre(cadre) : projectionMonde();
  const H = proj.H;

  const svg = el("svg", { viewBox: `0 0 ${L} ${H}`, class: "carte-svg", role: "img", preserveAspectRatio: "xMidYMid meet" });
  const defs = el("defs", {}, svg);
  const cle = (f) => f.props.pays || f.props.iso || f.props.nom;
  const fondDessin = dessinerFond(svg, defs, id, geo, proj, { entites, zones, cle });
  dessinerGraticule(fondDessin.graticule, proj);

  // Contour : double filet d'encre pour un cadre, simple pour le globe.
  if (proj.type === "cadre") {
    el("rect", { x: 0.75, y: 0.75, width: L - 1.5, height: H - 1.5, class: "carte-filet" }, svg);
    el("rect", { x: 5, y: 5, width: L - 10, height: H - 10, class: "carte-filet-fin" }, svg);
  } else {
    el("path", { d: fondDessin.contour, class: "carte-filet" }, svg);
  }

  // Marqueur de flèche propre à la carte (indépendant de #defs-eclore).
  const mk = el("marker", { id: `${id}-fl`, viewBox: "0 0 12 10", refX: 10.5, refY: 5, markerWidth: 12, markerHeight: 10, markerUnits: "userSpaceOnUse", orient: "auto-start-reverse" }, defs);
  el("path", { d: "M0 0.8 L12 5 L0 9.2 L3.2 5Z", class: "carte-pointe" }, mk);

  const rang = (f) => { const v = fond === "france" ? f.props.id : f.props.iso; return [...zones].indexOf(v); };
  fondDessin.enZone.sort((a, b) => rang(a) - rang(b));
  const zonesNommees = [...new Set(fondDessin.enZone.map((f) => f.props.nom).filter(Boolean))];
  const zonesInconnues = [...zones].filter((z) => !entites.some((f) => f.props.iso === z || f.props.id === z));
  if (zonesInconnues.length) figure.dataset.zonesInconnues = zonesInconnues.join(" ");

  const surcouche = el("g", { class: "carte-surcouche" }, svg);
  const etat = { k: 0 };
  const groupesReperes = [];

  function disposer(k) {
    if (Math.abs(k - etat.k) < 0.05) return;
    etat.k = k;
    while (surcouche.firstChild) surcouche.firstChild.remove();
    groupesReperes.length = 0;
    const occupees = [];

    // Rose des vents et échelle.
    const rr = Math.min(30, Math.max(18, 20 * k));
    if (proj.type === "cadre") {
      occupees.push(dessinerRose(surcouche, L - rr - 18, rr + 30, rr));
      const e = dessinerEchelle(surcouche, proj, 18, H - 18, k);
      if (e) occupees.push(e);
    } else {
      occupees.push(dessinerRose(surcouche, rr + 14, H - rr - 10, rr));
    }

    // Points des repères : réservés d'abord pour que rien ne les recouvre.
    const rp = 3.4 * Math.max(1, k * 0.85);
    const pts = reperes.map((r) => proj.p(r.lon, r.lat));
    for (const [x, y] of pts) occupees.push([x - rp - 1.5, y - rp - 1.5, x + rp + 1.5, y + rp + 1.5]);

    // Traits : Bézier quadratique, raccourcie aux extrémités, pointe de flèche, libellé au milieu.
    const gt = el("g", { class: "carte-traits" }, surcouche);
    const libelles = [], courbes = [];
    // Plusieurs traits : chacun bombe vers l'extérieur de l'ensemble (circuits, triangles) ; sinon vers le haut.
    const extremites = traits.flatMap((t) => [proj.p(t.de[1], t.de[0]), proj.p(t.a[1], t.a[0])]);
    const centre = extremites.reduce((m, p) => [m[0] + p[0] / extremites.length, m[1] + p[1] / extremites.length], [0, 0]);
    for (const t of traits) {
      const a = proj.p(t.de[1], t.de[0]), b = proj.p(t.a[1], t.a[0]);
      const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy);
      if (d < 2) continue;
      let nx = dy / d, ny = -dx / d;
      const vers = traits.length > 1 ? nx * ((a[0] + b[0]) / 2 - centre[0]) + ny * ((a[1] + b[1]) / 2 - centre[1]) : -ny;
      if (vers < 0 || (vers === 0 && nx < 0)) { nx = -nx; ny = -ny; }
      const c = [(a[0] + b[0]) / 2 + nx * d * 0.2, (a[1] + b[1]) / 2 + ny * d * 0.2];
      const fl = (u, v) => [
        (1 - u) * (1 - v) * a[0] + ((1 - u) * v + u * (1 - v)) * c[0] + u * v * b[0],
        (1 - u) * (1 - v) * a[1] + ((1 - u) * v + u * (1 - v)) * c[1] + u * v * b[1],
      ];
      const t0 = Math.min(0.2, (rp + 4) / d), t1 = 1 - Math.min(0.2, (rp + 3) / d);
      const p0 = fl(t0, t0), pc = fl(t0, t1), p1 = fl(t1, t1);
      el("path", { d: `M${r1(p0[0])} ${r1(p0[1])}Q${r1(pc[0])} ${r1(pc[1])} ${r1(p1[0])} ${r1(p1[1])}`, class: "carte-trait", "marker-end": `url(#${id}-fl)` }, gt);
      // Boîtes le long de la courbe, pour que les autres étiquettes l'évitent un peu.
      const boites = [];
      for (let u = 0.15; u < 0.9; u += 0.1) { const [x, y] = fl(u, u); boites.push([x - 2, y - 2, x + 2, y + 2]); }
      courbes.push(boites);
      if (t.label) libelles.push({ texte: String(t.label), fl, nx, ny, j: courbes.length - 1 });
    }
    const fsT = (k > 1.6 ? 14.5 : 17) * k;
    for (const lb of libelles) {
      const w = lb.texte.length * fsT * LARG_MAIN;
      // À côté de la courbe (dehors, puis dedans), sinon posé sur la courbe avec un halo de papier.
      const cands = [];
      for (const [u, sens] of [[0.5, 1], [0.5, -1], [0.42, 1], [0.58, 1], [0.42, -1], [0.58, -1]]) {
        const m = lb.fl(u, u), o = sens * (6 + Math.abs(lb.nx) * w / 2 + Math.abs(lb.ny) * fsT * 0.55);
        const x = m[0] + lb.nx * o, y = m[1] + lb.ny * o + fsT * 0.3;
        cands.push({ x, y, boite: boiteTexte(x, y, w, fsT, "middle"), penalite: cands.length });
      }
      for (const u of [0.5, 0.4, 0.6]) {
        const [x, y0] = lb.fl(u, u), y = y0 + fsT * 0.3;
        cands.push({ x, y, boite: boiteTexte(x, y, w, fsT, "middle"), penalite: 8 + cands.length });
      }
      const autres = courbes.filter((c, j) => j !== lb.j).flat();
      const ch = placer(cands, occupees.concat(autres), H);
      occupees.push(ch.boite);
      const tx = el("text", { x: r1(ch.x), y: r1(ch.y), "font-size": r1(fsT), "text-anchor": "middle", class: "carte-trait-label" }, gt);
      tx.textContent = lb.texte;
    }
    occupees.push(...courbes.flat());

    // Repères : point d'encre + étiquette manuscrite.
    const gr = el("g", { class: "carte-reperes" }, surcouche);
    const fs = (k > 1.6 ? 16 : 19) * k, ec = rp + 4;
    const ordre = reperes.map((r, i) => i);
    for (const i of ordre) {
      const r = reperes[i], [x, y] = pts[i];
      const w = r.nom.length * fs * LARG_MAIN;
      const pos = [
        [ec, fs * 0.32, "start"], [-ec, fs * 0.32, "end"], [0, -ec - 1, "middle"], [0, ec + fs * 0.72, "middle"],
        [ec * 0.8, -ec * 0.8, "start"], [ec * 0.8, ec * 0.8 + fs * 0.6, "start"], [-ec * 0.8, -ec * 0.8, "end"], [-ec * 0.8, ec * 0.8 + fs * 0.6, "end"],
        [ec + 6, -ec - fs * 0.4, "start"], [-ec - 6, -ec - fs * 0.4, "end"], [0, -ec - fs * 0.9, "middle"], [0, ec + fs * 1.5, "middle"],
      ];
      const cands = pos.map(([ox, oy, an], j) => ({ x: x + ox, y: y + oy, an, boite: boiteTexte(x + ox, y + oy, w, fs, an), penalite: j * 0.5 }));
      const ch = placer(cands, occupees, H);
      occupees.push(ch.boite);
      const g = el("g", { class: "carte-repere", "data-i": i }, gr);
      el("circle", { cx: r1(x), cy: r1(y), r: r1(Math.max(14, rp * 4)), class: "carte-cible" }, g);
      el("circle", { cx: r1(x), cy: r1(y), r: r1(rp), class: "carte-point" }, g);
      const tx = el("text", { x: r1(ch.x), y: r1(ch.y), "font-size": r1(fs), "data-fs": r1(fs), "text-anchor": ch.an, class: "carte-etiquette" }, g);
      tx.textContent = r.nom;
      groupesReperes[i] = g;
    }

    // Noms des zones (petites capitales), seulement s'ils trouvent une place libre.
    if (bloc.nomsZones !== false && fondDessin.enZone.length) {
      const gz = el("g", { class: "carte-noms-zones", "aria-hidden": "true" }, surcouche);
      const fz = 10.5 * k;
      for (const f of fondDessin.enZone) {
        const c = centreVisuel(geo, f, proj);
        if (!c || !f.props.nom) continue;
        const nom = f.props.nom.toLocaleUpperCase("fr-FR");
        const w = nom.length * fz * LARG_CAPS;
        if (c.largeur < w * 0.55) continue;
        const cands = [0, -1, 1, -2, 2].map((o, j) => ({ x: c.x, y: c.y + fz * 0.35 + o * fz * 1.1, boite: boiteTexte(c.x, c.y + fz * 0.35 + o * fz * 1.1, w, fz, "middle"), penalite: j }));
        const ch = placer(cands, occupees, H);
        if (ch.c > 4) continue;
        occupees.push(ch.boite);
        const tx = el("text", { x: r1(ch.x), y: r1(ch.y), "font-size": r1(fz), "text-anchor": "middle", class: "carte-nom-zone" }, gz);
        tx.textContent = nom;
      }
    }

    // Degrés du graticule (cadres seulement), le long des bords gauche et bas, s'il reste de la place.
    if (proj.type === "cadre" && bloc.graduations !== false) {
      const g = el("g", { class: "carte-degres", "aria-hidden": "true" });
      surcouche.prepend(g);
      const fs = 9.5 * k, pas = proj.pasGraticule, [x0, y0, x1, y1] = proj.cadre;
      const poser = (x, y, texte) => {
        const b = [x - 2, y - fs, x + texte.length * fs * 0.62 + 2, y + 2];
        if (b[2] > L - 8 || b[1] < 8 || cout(b, occupees, H) > 0) return;
        occupees.push(b);
        el("text", { x: r1(x), y: r1(y), "font-size": r1(fs), class: "carte-degre" }, g).textContent = texte;
      };
      for (let lat = Math.ceil(y0 / pas) * pas; lat <= y1; lat += pas) poser(10, proj.p(x0, lat)[1] - 3, lat ? texteDegre(lat, "N", "S") : "0°");
      for (let lon = Math.ceil(x0 / pas) * pas; lon <= x1; lon += pas) poser(proj.p(lon, y0)[0] + 3, H - 10, lon ? texteDegre(lon, "E", "O") : "0°");
    }
  }

  // Taille du texte : visée en pixels écran, convertie en unités du viewBox selon la largeur réelle.
  const largeurInitiale = typeof window !== "undefined" ? Math.min(720, Math.max(300, (window.innerWidth || 720) - 32)) : 720;
  disposer(L / largeurInitiale);
  if (typeof ResizeObserver !== "undefined") {
    let attente = 0;
    new ResizeObserver((entrees) => {
      const w = entrees[0]?.contentRect?.width;
      if (!w) return;
      cancelAnimationFrame(attente);
      attente = requestAnimationFrame(() => { disposer(Math.max(0.9, Math.min(2.6, L / w))); relier(); });
    }).observe(svg);
  }

  // Accessibilité : description construite.
  const morceaux = [`Carte : ${titre}.`];
  morceaux.push(fond === "france" ? "Fond : France métropolitaine et ses régions." : cadre ? "Fond : vue rapprochée." : "Fond : le monde entier.");
  if (zonesNommees.length) morceaux.push(`${fond === "france" ? "Régions mises" : "Pays mis"} en évidence : ${zonesNommees.join(", ")}.`);
  if (reperes.length) morceaux.push(`Repères : ${reperes.map((r) => r.nom).join(", ")}.`);
  if (traits.length) morceaux.push(`Trajets : ${traits.map((t) => `de ${libelleLieu(t.de[0], t.de[1], reperes)} à ${libelleLieu(t.a[0], t.a[1], reperes)}${t.label ? ` (${t.label})` : ""}`).join(" ; ")}.`);
  svg.setAttribute("aria-label", morceaux.join(" "));

  const cadreSvg = document.createElement("div");
  cadreSvg.className = "carte-planche";
  cadreSvg.append(svg);
  figure.append(cadreSvg);

  // Légende : texte libre + clé automatique (zones, trajets).
  if (bloc.legende || zonesNommees.length || traits.length) {
    const leg = document.createElement("div");
    leg.className = "carte-legende";
    if (zonesNommees.length) {
      const s = document.createElement("span"); s.className = "carte-cle carte-cle-zone";
      s.append(puce(), document.createTextNode(zonesNommees.join(", ")));
      leg.append(s);
    }
    if (traits.length) {
      const s = document.createElement("span"); s.className = "carte-cle carte-cle-trait";
      s.append(puce(), document.createTextNode(traits.length > 1 ? "trajets" : "trajet"));
      leg.append(s);
    }
    if (bloc.legende) { const p = petitMd(bloc.legende); p.className = "carte-legende-texte"; leg.append(p); }
    figure.append(leg);
  }

  const details = listeTexte(reperes, zonesNommees, traits);
  figure.append(details);

  // Interaction : survol ou toucher d'un repère, ou de sa ligne dans la liste → étiquette mise en avant.
  let actif = null;
  const activer = (i, oui) => {
    const g = groupesReperes[i];
    if (!g) return;
    const tx = g.querySelector(".carte-etiquette");
    if (tx) tx.setAttribute("font-size", r1(Number(tx.dataset.fs) * (oui ? 1.25 : 1)));
    if (oui) { if (actif !== null && actif !== i) activer(actif, false); g.classList.add("actif"); g.parentNode.append(g); actif = i; }
    else { g.classList.remove("actif"); if (actif === i) actif = null; }
    details.querySelectorAll("li[data-i]").forEach((li) => li.classList.toggle("actif", oui && Number(li.dataset.i) === i));
  };
  const indice = (e) => { const g = e.target.closest?.(".carte-repere"); return g ? Number(g.dataset.i) : null; };
  svg.addEventListener("pointerover", (e) => { const i = indice(e); if (i !== null && e.pointerType !== "touch") activer(i, true); });
  svg.addEventListener("pointerout", (e) => { const i = indice(e); if (i !== null && e.pointerType !== "touch" && !e.relatedTarget?.closest?.(`.carte-repere[data-i="${i}"]`)) activer(i, false); });
  svg.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "touch" && e.pointerType !== "pen") return;
    const i = indice(e);
    if (i === null) { if (actif !== null) activer(actif, false); return; }
    activer(i, actif !== i);
  });
  function relier() { if (actif !== null) { const i = actif; actif = null; activer(i, true); } }
  details.querySelectorAll("li[data-i]").forEach((li) => {
    const i = Number(li.dataset.i);
    li.addEventListener("pointerenter", () => activer(i, true));
    li.addEventListener("pointerleave", () => activer(i, false));
    li.addEventListener("focus", () => activer(i, true));
    li.addEventListener("blur", () => activer(i, false));
  });

  return figure;
}

/** Centre visuel approché d'une zone : barycentre du plus grand anneau projeté visible. */
function centreVisuel(geo, f, proj) {
  let mieux = null;
  for (const poly of f.polys) {
    const pts = anneau(geo.arcs, poly[0]).map((p) => proj.p(p[0], p[1]));
    let a = 0, cx = 0, cy = 0, x0 = Infinity, x1 = -Infinity;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const cr = pts[j][0] * pts[i][1] - pts[i][0] * pts[j][1];
      a += cr; cx += (pts[j][0] + pts[i][0]) * cr; cy += (pts[j][1] + pts[i][1]) * cr;
      x0 = Math.min(x0, pts[i][0]); x1 = Math.max(x1, pts[i][0]);
    }
    if (!a) continue;
    const c = { x: cx / (3 * a), y: cy / (3 * a), aire: Math.abs(a / 2), largeur: x1 - x0 };
    if (c.x < 0 || c.x > L || c.y < 0 || c.y > proj.H) continue;
    if (!mieux || c.aire > mieux.aire) mieux = c;
  }
  return mieux;
}

function puce() {
  const i = document.createElement("i");
  i.setAttribute("aria-hidden", "true");
  return i;
}

function listeTexte(reperes, zonesNommees, traits) {
  const details = document.createElement("details");
  details.className = "carte-details";
  const s = document.createElement("summary");
  s.textContent = "Lire la carte en texte";
  details.append(s);
  const ul = document.createElement("ul");
  reperes.forEach((r, i) => {
    const li = document.createElement("li");
    li.dataset.i = i;
    li.tabIndex = 0;
    const b = document.createElement("strong"); b.textContent = r.nom;
    li.append(b, document.createTextNode(` — ${texteDegre(r.lat, "N", "S")}, ${texteDegre(r.lon, "E", "O")}`));
    ul.append(li);
  });
  if (zonesNommees.length) {
    const li = document.createElement("li");
    li.textContent = `Zones colorées : ${zonesNommees.join(", ")}.`;
    ul.append(li);
  }
  for (const t of traits) {
    const li = document.createElement("li");
    li.textContent = `Trajet de ${libelleLieu(t.de[0], t.de[1], reperes)} à ${libelleLieu(t.a[0], t.a[1], reperes)}${t.label ? ` : ${t.label}` : ""}.`;
    ul.append(li);
  }
  if (!ul.children.length) {
    const li = document.createElement("li"); li.textContent = "Aucun repère sur cette carte."; ul.append(li);
  }
  details.append(ul);
  return details;
}
