#!/usr/bin/env node
// Validateur des cours ÉCLORE. Usage : node tools/validate-cours.mjs [content/cours/<niveau>/<matiere>.js ...]
import { readdirSync, existsSync } from "node:fs";
import { resolve, join, relative } from "node:path";
import { pathToFileURL } from "node:url";
import { NIVEAUX } from "../content/matieres.js";

const root = resolve(new URL("..", import.meta.url).pathname);
const REGIONS = ["ile-de-france", "centre-val-de-loire", "bourgogne-franche-comte", "normandie", "hauts-de-france", "grand-est", "pays-de-la-loire", "bretagne", "nouvelle-aquitaine", "occitanie", "auvergne-rhone-alpes", "provence-alpes-cote-d-azur", "corse"];
const VISUELS = new Set(["schema", "frise", "carte", "tableau", "graphique", "droite", "etapes"]);
const TYPES = new Set(["texte", "definition", "propriete", "exemple", "attention", "astuce", "savais-tu", "citation", "liste", "tableau", "frise", "etapes", "graphique", "droite", "carte", "schema", "verifie"]);

let args = process.argv.slice(2);
const strictCouverture = !args.includes("--partiel");
args = args.filter(a => !a.startsWith("--"));
const files = args.length ? args.map(a => resolve(a)) : NIVEAUX.flatMap(n => { const d = join(root, "content", "cours", n); return existsSync(d) ? readdirSync(d).filter(f => f.endsWith(".js")).map(f => join(d, f)) : []; });

let errors = 0, warnings = 0, totalMots = 0, totalChap = 0, totalVisuels = 0;
const err = (m) => { errors++; console.log(`  ✖ ${m}`); };
const warn = (m) => { warnings++; console.log(`  ⚠ ${m}`); };
const str = (s, min = 1) => typeof s === "string" && s.trim().length >= min;
const mots = (s) => (String(s || "").match(/[\p{L}\p{N}]+/gu) || []).length;

function checkSvg(svg, w) {
  if (!str(svg, 20)) return err(`${w} : svg manquant`);
  const s = svg.trim();
  if (!/^<svg[\s>]/.test(s) || !/<\/svg>\s*$/.test(s)) err(`${w} : le svg doit commencer par <svg et finir par </svg>`);
  if (!/viewBox="[\d.\s-]+"/.test(s)) err(`${w} : viewBox manquant`);
  if (/<script|<foreignObject|<style|<image|\son\w+\s*=|javascript:|xlink:href\s*=\s*"(?!#)|\shref\s*=\s*"(?!#)/i.test(s)) err(`${w} : contenu interdit dans le svg`);
  if (/\s(width|height)="[^"]*"\s*[^>]*>/.test(s.slice(0, s.indexOf(">") + 1))) warn(`${w} : retirer width/height de la balise <svg>`);
  if (s.length > 7000) warn(`${w} : svg long (${s.length} caractères)`);
  const ouvre = (s.match(/<(g|text|tspan|svg|defs|marker|linearGradient|radialGradient)\b[^>]*[^/]>/g) || []).length;
  const ferme = (s.match(/<\/(g|text|tspan|svg|defs|marker|linearGradient|radialGradient)>/g) || []).length;
  if (ouvre !== ferme) err(`${w} : balises svg mal fermées (${ouvre} ouvertures, ${ferme} fermetures)`);
}

function checkBloc(b, w) {
  if (!b || !TYPES.has(b.t)) return err(`${w} : type de bloc inconnu « ${b?.t} »`);
  let n = 0;
  switch (b.t) {
    case "texte": case "attention": case "astuce": case "savais-tu":
      if (!str(b.md, 10)) err(`${w} : md manquant`); n += mots(b.md); break;
    case "definition": if (!str(b.terme)) err(`${w} : terme manquant`); if (!str(b.md, 10)) err(`${w} : md manquant`); n += mots(b.md) + mots(b.terme); break;
    case "propriete": if (!str(b.md, 10)) err(`${w} : md manquant`); n += mots(b.md) + mots(b.titre); break;
    case "exemple":
      if (!str(b.md, 5) && !(Array.isArray(b.etapes) && b.etapes.length)) err(`${w} : exemple sans md ni etapes`);
      if (b.etapes && (!Array.isArray(b.etapes) || b.etapes.some(e => !str(e, 2)))) err(`${w} : etapes invalides`);
      n += mots(b.md) + mots((b.etapes || []).join(" ")) + mots(b.titre); break;
    case "citation": if (!str(b.texte, 5) || !str(b.auteur)) err(`${w} : citation incomplète`); n += mots(b.texte); break;
    case "liste": if (!Array.isArray(b.items) || b.items.length < 2 || b.items.some(i => !str(i))) err(`${w} : liste de 2 éléments minimum`); n += mots((b.items || []).join(" ")); break;
    case "tableau": {
      if (!Array.isArray(b.entetes) || b.entetes.length < 2) err(`${w} : entetes (2 colonnes minimum)`);
      if (!Array.isArray(b.lignes) || !b.lignes.length) err(`${w} : lignes manquantes`);
      else b.lignes.forEach((l, i) => { if (!Array.isArray(l) || l.length !== (b.entetes || []).length) err(`${w} : ligne ${i} n'a pas ${b.entetes?.length} cellules`); });
      n += mots(JSON.stringify(b.lignes || [])); break;
    }
    case "frise": {
      const ev = b.evenements;
      if (!Array.isArray(ev) || ev.length < 3 || ev.length > 12) { err(`${w} : frise de 3 à 12 événements`); break; }
      ev.forEach((e, i) => { if (typeof e.date !== "number" || !Number.isFinite(e.date)) err(`${w} : evenements[${i}].date doit être un nombre`); if (!str(e.label, 2)) err(`${w} : evenements[${i}].label manquant`); });
      for (let i = 1; i < ev.length; i++) if (ev[i].date < ev[i - 1].date) err(`${w} : frise non triée (${ev[i - 1].date} puis ${ev[i].date})`);
      n += mots(ev.map(e => `${e.label} ${e.detail || ""}`).join(" ")); break;
    }
    case "etapes": if (!Array.isArray(b.items) || b.items.length < 3 || b.items.length > 8 || b.items.some(i => !str(i?.titre) || !str(i?.md, 3))) err(`${w} : etapes : 3 à 8 items {titre, md}`); n += mots(JSON.stringify(b.items || [])); break;
    case "graphique":
      if (!["barres", "courbe", "secteurs"].includes(b.type)) err(`${w} : type de graphique invalide`);
      if (!str(b.titre)) err(`${w} : titre manquant`);
      if (!Array.isArray(b.donnees) || b.donnees.length < 2 || b.donnees.length > 14 || b.donnees.some(d => !str(String(d?.label ?? "")) || typeof d.valeur !== "number")) err(`${w} : donnees : 2 à 14 {label, valeur:number}`);
      break;
    case "droite":
      if (![b.min, b.max, b.pas].every(x => typeof x === "number") || b.max <= b.min || b.pas <= 0 || (b.max - b.min) / b.pas > 40) err(`${w} : droite : min < max, pas > 0, 40 graduations max`);
      if (!Array.isArray(b.points) || b.points.some(p => typeof p.x !== "number" || p.x < b.min || p.x > b.max || !str(String(p.label ?? "")))) err(`${w} : points invalides`);
      break;
    case "carte":
      if (!["monde", "france"].includes(b.fond)) err(`${w} : fond doit être monde ou france`);
      if (!str(b.titre)) err(`${w} : titre manquant`);
      if (b.cadre && (!Array.isArray(b.cadre) || b.cadre.length !== 4 || b.cadre.some(x => typeof x !== "number") || b.cadre[0] >= b.cadre[2] || b.cadre[1] >= b.cadre[3])) err(`${w} : cadre [lonMin, latMin, lonMax, latMax]`);
      if (b.zones && (!Array.isArray(b.zones) || b.zones.some(z => b.fond === "france" ? !REGIONS.includes(z) : !/^[A-Z]{2}$/.test(z)))) err(`${w} : zones invalides (${(b.zones || []).join(",")})`);
      if (b.reperes && (!Array.isArray(b.reperes) || b.reperes.some(r => !str(r.nom) || typeof r.lat !== "number" || typeof r.lon !== "number" || Math.abs(r.lat) > 90 || Math.abs(r.lon) > 180))) err(`${w} : reperes invalides`);
      if (b.traits && (!Array.isArray(b.traits) || b.traits.some(t => !Array.isArray(t.de) || !Array.isArray(t.a) || t.de.length !== 2 || t.a.length !== 2))) err(`${w} : traits invalides`);
      if (!b.zones?.length && !b.reperes?.length && !b.traits?.length) err(`${w} : carte vide (zones, reperes ou traits)`);
      break;
    case "schema": if (!str(b.titre)) err(`${w} : titre manquant`); checkSvg(b.svg, w); n += mots(b.legende); break;
    case "verifie":
      if (!str(b.q, 5)) err(`${w} : q manquant`);
      if (!Array.isArray(b.choix) || b.choix.length < 2 || b.choix.length > 4) err(`${w} : 2 à 4 choix`);
      else if (!Number.isInteger(b.bonne) || b.bonne < 0 || b.bonne >= b.choix.length) err(`${w} : bonne invalide`);
      if (!str(b.explication, 10)) err(`${w} : explication manquante`);
      n += mots(b.q) + mots(b.explication); break;
  }
  if (/·/.test(JSON.stringify(b).replace(/ · /g, ""))) warn(`${w} : point médian ?`);
  return n;
}

for (const f of files) {
  const rel = relative(root, f);
  console.log(`\n▶ ${rel}`);
  let cours;
  try { cours = (await import(pathToFileURL(f).href + `?t=${Date.now()}`)).default; } catch (e) { err(`import impossible : ${e.message}`); continue; }
  const [niveau, fichier] = rel.split("/").slice(-2);
  const matiere = fichier.replace(/\.js$/, "");
  if (cours?.id !== `${niveau}-${matiere}`) err(`id attendu « ${niveau}-${matiere} »`);
  let mod;
  try { mod = (await import(pathToFileURL(join(root, "content", niveau, `${matiere}.js`)).href)).default; } catch { err("module de questions correspondant introuvable"); continue; }
  const ids = new Set(mod.chapitres.map(c => c.id));
  const chap = cours?.chapitres || {};
  for (const id of Object.keys(chap)) if (!ids.has(id)) err(`chapitre inconnu : ${id}`);
  for (const id of ids) if (!chap[id]) (strictCouverture ? err : warn)(`chapitre sans cours : ${id}`);
  for (const [id, c] of Object.entries(chap)) {
    if (!ids.has(id)) continue;
    const w0 = id.replace(`${niveau}-${matiere}-`, "");
    if (!str(c.accroche, 15)) err(`${w0} : accroche manquante`);
    if (!Array.isArray(c.objectifs) || c.objectifs.length < 2 || c.objectifs.length > 5) err(`${w0} : 2 à 5 objectifs`);
    if (!str(c.bilan, 15)) err(`${w0} : bilan manquant`);
    if (!Array.isArray(c.sections) || c.sections.length < 3 || c.sections.length > 6) { err(`${w0} : 3 à 6 sections`); continue; }
    let n = mots(c.accroche) + mots(c.bilan), visuels = 0, verifs = 0, defs = 0, exemples = 0;
    c.sections.forEach((s, i) => {
      if (!str(s.titre, 3)) err(`${w0} section ${i} : titre manquant`);
      if (!Array.isArray(s.blocs) || !s.blocs.length) return err(`${w0} section ${i} : blocs manquants`);
      s.blocs.forEach((b, k) => {
        n += checkBloc(b, `${w0} §${i + 1}.${k + 1} (${b?.t})`) || 0;
        if (VISUELS.has(b?.t)) visuels++;
        if (b?.t === "verifie") verifs++;
        if (b?.t === "definition" || b?.t === "propriete") defs++;
        if (b?.t === "exemple") exemples++;
      });
    });
    if (visuels < 2) err(`${w0} : au moins 2 blocs visuels (${visuels})`);
    if (verifs < 1 || verifs > 4) err(`${w0} : 1 à 4 blocs verifie (${verifs})`);
    if (defs < 1) err(`${w0} : au moins une definition ou propriete`);
    if (exemples < 1) err(`${w0} : au moins un exemple`);
    if (n < 380) err(`${w0} : cours trop court (${n} mots, viser 450 à 1000)`);
    else if (n < 450) warn(`${w0} : cours un peu court (${n} mots)`);
    if (n > 1400) warn(`${w0} : cours long (${n} mots)`);
    totalMots += n; totalChap++; totalVisuels += visuels;
  }
  console.log(`  ${Object.keys(chap).length}/${ids.size} chapitres`);
}
console.log(`\n═══ Cours : ${files.length} fichiers, ${totalChap} chapitres, ${totalMots} mots, ${totalVisuels} visuels — ${errors} erreur(s), ${warnings} avertissement(s)`);
process.exit(errors ? 1 : 0);
