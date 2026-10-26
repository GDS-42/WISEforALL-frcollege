#!/usr/bin/env node
// Validateur de contenu ÉCLORE.
// Usage : node tools/validate.mjs [fichier.js ...]   (sans argument : tout content/**)
import { readdirSync, statSync } from "node:fs";
import { resolve, join, relative } from "node:path";
import { pathToFileURL } from "node:url";
import { MATIERES, NIVEAUX, TYPES_ITEMS } from "../content/matieres.js";

const root = resolve(new URL("..", import.meta.url).pathname);
const args = process.argv.slice(2);

function listContent() {
  const out = [];
  for (const niv of NIVEAUX) {
    const dir = join(root, "content", niv);
    let files = [];
    try { files = readdirSync(dir); } catch { continue; }
    for (const f of files) if (f.endsWith(".js")) out.push(join(dir, f));
  }
  return out;
}

const files = args.length ? args.map(a => resolve(a)) : listContent();
let errors = 0, warnings = 0;
const globalIds = new Map();
const stats = { modules: 0, chapitres: 0, items: 0, parType: {}, parNiveau: {}, parMatiere: {} };

const err = (f, msg) => { errors++; console.log(`  ✖ ${msg}`); };
const warn = (f, msg) => { warnings++; console.log(`  ⚠ ${msg}`); };
const isStr = (s, min = 1) => typeof s === "string" && s.trim().length >= min;
const countBlanks = (t) => (t.match(/___/g) || []).length;

function checkId(f, id, where) {
  if (!isStr(id)) return err(f, `${where} : id manquant`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) err(f, `${where} : id « ${id} » doit être en kebab-case ascii minuscule`);
  if (globalIds.has(id)) err(f, `${where} : id « ${id} » déjà utilisé dans ${relative(root, globalIds.get(id))}`);
  else globalIds.set(id, f);
}

for (const f of files) {
  const rel = relative(root, f);
  console.log(`\n▶ ${rel}`);
  let mod;
  try { mod = (await import(pathToFileURL(f).href)).default; }
  catch (e) { err(f, `import impossible : ${e.message}`); continue; }
  if (!mod || typeof mod !== "object") { err(f, "export default doit être un objet"); continue; }
  stats.modules++;
  const { id, niveau, matiere, chapitres } = mod;
  if (!NIVEAUX.includes(niveau)) err(f, `niveau invalide : ${niveau}`);
  if (!MATIERES[matiere]) err(f, `matiere inconnue : ${matiere}`);
  else if (!MATIERES[matiere].cycles.includes(niveau)) err(f, `la matière ${matiere} n'existe pas en ${niveau}`);
  if (id !== `${niveau}-${matiere}`) err(f, `id du module doit être « ${niveau}-${matiere} » (reçu « ${id} »)`);
  const expectedPath = join(root, "content", niveau || "?", `${matiere}.js`);
  if (resolve(f) !== expectedPath) err(f, `le fichier devrait être content/${niveau}/${matiere}.js`);
  if (!isStr(mod.intro, 10)) warn(f, "intro manquante ou trop courte");
  if (!Array.isArray(chapitres) || chapitres.length === 0) { err(f, "chapitres doit être un tableau non vide"); continue; }

  let nItems = 0;
  chapitres.forEach((ch, ci) => {
    const where = `chapitre[${ci}] ${ch?.id || ch?.titre || ""}`;
    checkId(f, ch.id, where);
    if (ch.id && !ch.id.startsWith(`${niveau}-${matiere}-`)) err(f, `${where} : l'id doit commencer par « ${niveau}-${matiere}- »`);
    if (!isStr(ch.titre, 3)) err(f, `${where} : titre manquant`);
    if (!isStr(ch.theme, 3)) err(f, `${where} : theme manquant`);
    if (!Array.isArray(ch.socle) || !ch.socle.length || ch.socle.some(s => ![1,2,3,4,5].includes(s))) err(f, `${where} : socle doit être un tableau de domaines 1..5`);
    if (!Array.isArray(ch.competences) || ch.competences.length < 2) err(f, `${where} : au moins 2 compétences`);
    const compIds = new Set();
    (ch.competences || []).forEach((c, k) => {
      checkId(f, c?.id, `${where} compétence[${k}]`);
      if (c?.id && !c.id.startsWith(ch.id + "-")) err(f, `${where} compétence ${c.id} doit être préfixée par ${ch.id}-`);
      if (!isStr(c?.libelle, 8)) err(f, `${where} compétence[${k}] : libelle manquant`);
      compIds.add(c?.id);
    });
    if (!Array.isArray(ch.retenir) || ch.retenir.length < 3) err(f, `${where} : « retenir » doit contenir au moins 3 points`);
    else ch.retenir.forEach((r, k) => { if (!isStr(r, 15)) err(f, `${where} retenir[${k}] trop court`); });
    if (!Array.isArray(ch.items) || ch.items.length < 8) err(f, `${where} : au moins 8 items (reçu ${ch.items?.length ?? 0})`);
    const types = new Set();
    const used = new Set();
    (ch.items || []).forEach((it, k) => {
      const w = `${where} item[${k}] ${it?.id || ""}`;
      checkId(f, it?.id, w);
      if (it?.id && !it.id.startsWith(ch.id + "-")) err(f, `${w} : l'id doit être préfixé par ${ch.id}-`);
      if (!TYPES_ITEMS.includes(it?.type)) { err(f, `${w} : type invalide « ${it?.type} »`); return; }
      types.add(it.type);
      stats.parType[it.type] = (stats.parType[it.type] || 0) + 1;
      if (!compIds.has(it.competence)) err(f, `${w} : competence « ${it.competence} » inconnue dans ce chapitre`);
      used.add(it.competence);
      if (![1,2,3].includes(it.difficulte)) err(f, `${w} : difficulte doit être 1, 2 ou 3`);
      if (it.type !== "flash" && !isStr(it.explication, 15)) err(f, `${w} : explication manquante ou trop courte`);
      if (it.indice !== undefined && !isStr(it.indice, 3)) err(f, `${w} : indice vide`);
      switch (it.type) {
        case "qcm":
          if (!isStr(it.q, 5)) err(f, `${w} : q manquant`);
          if (!Array.isArray(it.choix) || it.choix.length < 3 || it.choix.length > 5) err(f, `${w} : 3 à 5 choix`);
          else {
            if (!Number.isInteger(it.bonne) || it.bonne < 0 || it.bonne >= it.choix.length) err(f, `${w} : bonne doit être un index valide`);
            if (new Set(it.choix.map(c => String(c).trim().toLowerCase())).size !== it.choix.length) err(f, `${w} : choix en double`);
            it.choix.forEach((c, j) => { if (!isStr(String(c))) err(f, `${w} : choix[${j}] vide`); });
          }
          break;
        case "vf":
          if (!isStr(it.q, 5)) err(f, `${w} : q manquant`);
          if (typeof it.reponse !== "boolean") err(f, `${w} : reponse doit être true/false`);
          break;
        case "trous": {
          if (!isStr(it.texte, 5)) err(f, `${w} : texte manquant`);
          const nb = countBlanks(it.texte || "");
          if (nb < 1) err(f, `${w} : le texte doit contenir au moins un ___`);
          if (!Array.isArray(it.reponses) || it.reponses.length !== nb) err(f, `${w} : reponses doit avoir ${nb} entrée(s) (une par ___)`);
          else it.reponses.forEach((r, j) => { if (!Array.isArray(r) || !r.length || r.some(x => !isStr(String(x)))) err(f, `${w} : reponses[${j}] doit être un tableau non vide de chaînes`); });
          break;
        }
        case "ordre":
          if (!isStr(it.q, 5)) err(f, `${w} : q manquant`);
          if (!Array.isArray(it.elements) || it.elements.length < 3 || it.elements.length > 7) err(f, `${w} : 3 à 7 éléments`);
          else if (new Set(it.elements.map(e => String(e).trim().toLowerCase())).size !== it.elements.length) err(f, `${w} : éléments en double`);
          break;
        case "assoc":
          if (!isStr(it.q, 5)) err(f, `${w} : q manquant`);
          if (!Array.isArray(it.paires) || it.paires.length < 3 || it.paires.length > 6) err(f, `${w} : 3 à 6 paires`);
          else {
            it.paires.forEach((p, j) => { if (!Array.isArray(p) || p.length !== 2 || !isStr(String(p[0])) || !isStr(String(p[1]))) err(f, `${w} : paire[${j}] invalide`); });
            const g = new Set(it.paires.map(p => String(p[0]).trim().toLowerCase())), d = new Set(it.paires.map(p => String(p[1]).trim().toLowerCase()));
            if (g.size !== it.paires.length || d.size !== it.paires.length) err(f, `${w} : les deux colonnes doivent être sans doublon`);
          }
          break;
        case "num":
          if (!isStr(it.q, 5)) err(f, `${w} : q manquant`);
          if (typeof it.reponse !== "number" || !Number.isFinite(it.reponse)) err(f, `${w} : reponse doit être un nombre`);
          if (it.tolerance !== undefined && (typeof it.tolerance !== "number" || it.tolerance < 0)) err(f, `${w} : tolerance invalide`);
          break;
        case "texte":
          if (!isStr(it.q, 5)) err(f, `${w} : q manquant`);
          if (!Array.isArray(it.reponses) || !it.reponses.length || it.reponses.some(x => !isStr(String(x)))) err(f, `${w} : reponses doit être un tableau non vide`);
          if (it.reponses && it.reponses.some(x => String(x).trim().split(/\s+/).length > 4)) warn(f, `${w} : réponse texte de plus de 4 mots (préférer qcm/trous)`);
          break;
        case "flash":
          if (!isStr(it.recto, 2)) err(f, `${w} : recto manquant`);
          if (!isStr(it.verso, 1)) err(f, `${w} : verso manquant`);
          break;
      }
      nItems++;
    });
    if (types.size < 3 && (ch.items || []).length >= 8) warn(f, `${where} : seulement ${types.size} type(s) d'items, viser au moins 4`);
    for (const c of compIds) if (!used.has(c)) warn(f, `${where} : compétence ${c} sans aucun item`);
    const diffs = (ch.items || []).map(i => i.difficulte);
    if (diffs.length && !diffs.includes(1)) warn(f, `${where} : aucun item de difficulté 1`);
    if (diffs.length && !diffs.includes(3)) warn(f, `${where} : aucun item de difficulté 3`);
    stats.chapitres++;
  });
  stats.items += nItems;
  stats.parNiveau[niveau] = (stats.parNiveau[niveau] || 0) + nItems;
  stats.parMatiere[matiere] = (stats.parMatiere[matiere] || 0) + nItems;
  console.log(`  ${chapitres.length} chapitres, ${nItems} items`);
}

console.log(`\n═══ Bilan : ${stats.modules} modules, ${stats.chapitres} chapitres, ${stats.items} items`);
console.log(`    par type : ${Object.entries(stats.parType).map(([k, v]) => `${k}=${v}`).join(", ")}`);
console.log(`    par niveau : ${Object.entries(stats.parNiveau).map(([k, v]) => `${k}=${v}`).join(", ")}`);
console.log(`    ${errors} erreur(s), ${warnings} avertissement(s)`);
process.exit(errors ? 1 : 0);
