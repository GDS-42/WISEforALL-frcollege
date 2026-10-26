#!/usr/bin/env node
// Balisage de lecture à voix haute [[…]] des modules de langue (docs/LANGUES.md).
//
//   node tools/annotations.mjs extraire <fichier> [--chapitre N]   champs lus à voix haute, en JSON { chemin: texte }
//   node tools/annotations.mjs appliquer <fichier> <lot.json>       pose les balises de ces champs (le texte lui-même ne change pas)
//   node tools/annotations.mjs signaler <fichier> [--chapitre N]    passages probablement oubliés ou mal balisés
//   node tools/annotations.mjs controler [ref]                      le contenu, balises retirées, est identique à <ref> (HEAD)
//
// Lot pour `appliquer` : { chemin: valeur }, la valeur étant au choix
//   ["Hello", "Hi", "en:thirteen"]  la liste COMPLÈTE des passages à baliser dans ce champ, dans l'ordre de lecture
//                                  (chacun cherché après le précédent, sur des limites de mots ; « xx: » = langue explicite) ;
//   true                           tout le champ est dans la langue étudiée ;
//   []                             retirer toutes les balises du champ ;
//   "texte [[balisé]]"             le texte complet, balises comprises.
// `appliquer` refuse toute modification qui change le texte affiché : seules les balises peuvent bouger.
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { resolve, relative, join } from "node:path";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import vm from "node:vm";
import { isDeepStrictEqual } from "node:util";
import { retirerBalises } from "../src/lecture.js";
import { chaines, champLu, problemesBalises, aDesBalises } from "./balises.mjs";

const root = resolve(new URL("..", import.meta.url).pathname);
const [cmd, ...args] = process.argv.slice(2);
const option = (nom) => { const i = args.indexOf(nom); return i >= 0 ? args.splice(i, 2)[1] : null; };
const chapitre = option("--chapitre");
const sortir = (msg) => { console.error(msg); process.exit(2); };

const estCours = (f) => relative(root, f).split("/").includes("cours");
const charger = async (f) => (await import(`${pathToFileURL(f).href}?t=${Date.now()}${Math.random()}`)).default;

/** Littéraux de chaîne de la source, dans l'ordre, avec leur position et leur valeur. */
function litteraux(src) {
  const out = [], ctx = vm.createContext({});
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (c === "/" && src[i + 1] === "/") { const j = src.indexOf("\n", i); i = j < 0 ? src.length : j; continue; }
    if (c === "/" && src[i + 1] === "*") { const j = src.indexOf("*/", i + 2); i = j < 0 ? src.length : j + 1; continue; }
    if (c !== '"' && c !== "'" && c !== "`") continue;
    let j = i + 1;
    while (j < src.length && src[j] !== c) j += src[j] === "\\" ? 2 : 1;
    const brut = src.slice(i, j + 1);
    if (c === "`" && brut.includes("${")) throw new Error(`gabarit avec \${…} non pris en charge (position ${i})`);
    out.push({ debut: i, fin: j + 1, valeur: vm.runInContext(brut, ctx) });
    i = j;
  }
  return out;
}

/** Associe chaque chaîne du module à son littéral dans la source (les clés entre guillemets sont sautées). */
function localiser(src, mod) {
  const lits = litteraux(src), places = new Map();
  let j = 0;
  for (const [chemin, valeur] of chaines(mod)) {
    while (j < lits.length && lits[j].valeur !== valeur) {
      if (!/^\s*:/.test(src.slice(lits[j].fin, lits[j].fin + 40))) throw new Error(`source et module désalignés près de « ${String(lits[j].valeur).slice(0, 40)} » (attendu ${chemin})`);
      j++;
    }
    if (j >= lits.length) throw new Error(`littéral introuvable pour ${chemin}`);
    places.set(chemin, lits[j++]);
  }
  return places;
}

function filtreChapitre(mod, cours) {
  const n = chapitre;
  if (!n) return () => true;
  const ids = cours ? Object.keys(mod.chapitres || {}) : (mod.chapitres || []).map((_, i) => String(i));
  const cle = ids[Number(n) - 1];
  if (cle === undefined) sortir(`--chapitre ${n} : ce module a ${ids.length} chapitres`);
  const prefixe = cours ? `chapitres.${cle}.` : `chapitres[${cle}].`;
  return (chemin) => chemin.startsWith(prefixe);
}

async function champsLus(f) {
  const mod = await charger(f), cours = estCours(f), garder = filtreChapitre(mod, cours);
  return { mod, cours, champs: [...chaines(mod)].filter(([c]) => champLu(c, cours) && garder(c)) };
}

// ————————————————————————————— extraire —————————————————————————————

async function extraire(f) {
  const { champs } = await champsLus(f);
  console.log(JSON.stringify(Object.fromEntries(champs), null, 1));
}

// ————————————————————————————— appliquer —————————————————————————————

const lettreOuChiffre = (c) => c !== undefined && /[\p{L}\p{N}]/u.test(c);

/** Occurrence de `cible` dans `base` à partir de `pos`, sans couper un mot. */
function chercher(base, cible, pos) {
  for (let i = base.indexOf(cible, pos); i >= 0; i = base.indexOf(cible, i + 1)) {
    const avantOk = !lettreOuChiffre(cible[0]) || !lettreOuChiffre(base[i - 1]);
    const apresOk = !lettreOuChiffre(cible[cible.length - 1]) || !lettreOuChiffre(base[i + cible.length]);
    if (avantOk && apresOk) return i;
  }
  return -1;
}

/** Texte balisé à partir d'une valeur de lot (voir l'en-tête). */
function texteBalise(ancien, valeur) {
  const base = retirerBalises(ancien);
  if (typeof valeur === "string") return valeur;
  if (valeur === true) {
    const debut = base.length - base.trimStart().length, fin = base.trimEnd().length;
    return `${base.slice(0, debut)}[[${base.slice(debut, fin)}]]${base.slice(fin)}`;
  }
  if (!Array.isArray(valeur)) throw new Error("valeur attendue : liste de passages, true ou texte complet");
  let out = "", pos = 0;
  for (const s of valeur) {
    if (typeof s !== "string" || !s.trim()) throw new Error(`passage vide ou invalide : ${JSON.stringify(s)}`);
    const m = s.match(/^(fr|en|es|de|ar|zh):(.+)$/s), code = m ? `${m[1]}:` : "", cible = m ? m[2] : s;
    const i = chercher(base, cible, pos);
    if (i < 0) throw new Error(`passage « ${s} » introuvable${pos ? " après le passage précédent" : ""} (respecte l'ordre de lecture et le texte exact)`);
    out += `${base.slice(pos, i)}[[${code}${cible}]]`;
    pos = i + cible.length;
  }
  return out + base.slice(pos);
}

async function appliquer(f, fichierLot) {
  if (!fichierLot) sortir("usage : appliquer <fichier> <lot.json>");
  const lot = JSON.parse(readFileSync(resolve(fichierLot), "utf8"));
  const src = readFileSync(f, "utf8"), mod = await charger(f), cours = estCours(f);
  const places = localiser(src, mod), valeurs = new Map(chaines(mod));
  const erreurs = [], changements = [];
  let inchanges = 0;
  for (const [chemin, valeur] of Object.entries(lot)) {
    if (!valeurs.has(chemin)) { erreurs.push(`${chemin} : chemin inconnu`); continue; }
    if (!champLu(chemin, cours)) { erreurs.push(`${chemin} : champ non lu à voix haute, on n'y balise rien`); continue; }
    const ancien = valeurs.get(chemin);
    let nouveau;
    try { nouveau = texteBalise(ancien, valeur); } catch (e) { erreurs.push(`${chemin} : ${e.message}\n      texte : ${JSON.stringify(retirerBalises(ancien))}`); continue; }
    if (retirerBalises(nouveau) !== retirerBalises(ancien)) {
      erreurs.push(`${chemin} : le texte a changé (seules les balises [[…]] peuvent être ajoutées ou retirées)\n      avant : ${JSON.stringify(retirerBalises(ancien))}\n      après : ${JSON.stringify(retirerBalises(nouveau))}`);
      continue;
    }
    const pb = problemesBalises(nouveau);
    if (pb.length) { erreurs.push(`${chemin} : ${pb.join(" ; ")}`); continue; }
    if (nouveau === ancien) { inchanges++; continue; }
    changements.push({ ...places.get(chemin), texte: JSON.stringify(nouveau) });
  }
  let sortie = src;
  for (const c of changements.sort((a, b) => b.debut - a.debut)) sortie = sortie.slice(0, c.debut) + c.texte + sortie.slice(c.fin);
  if (changements.length) {
    writeFileSync(f, sortie);
    // Contre-épreuve : le module réécrit, balises retirées, est identique à l'original.
    const relu = await charger(f);
    const sans = (m) => JSON.parse(JSON.stringify(m), (_, v) => (typeof v === "string" ? retirerBalises(v) : v));
    if (!isDeepStrictEqual(sans(relu), sans(mod))) { writeFileSync(f, src); sortir("✖ contre-épreuve échouée : fichier restauré, rien n'a été modifié"); }
  }
  for (const e of erreurs) console.log(`  ✖ ${e}`);
  console.log(`${relative(root, f)} : ${changements.length} champ(s) modifié(s), ${inchanges} inchangé(s), ${erreurs.length} erreur(s)`);
  process.exit(erreurs.length ? 1 : 0);
}

// ————————————————————————————— signaler —————————————————————————————

// Indices seulement : la décision revient au relecteur.
const mots = (liste, drapeaux = "giu") => new RegExp(`(?<![\\p{L}'])(${liste})(?![\\p{L}'])`, drapeaux);
const MOTS_CIBLE = {
  en: mots("the|is|are|you|my|your|what|where|how|does|have|has|with|and|he|she|they|we|it's|i'm|don't|can't|this|that|there"),
  es: mots("el|los|las|es|está|estoy|soy|eres|tengo|tiene|muy|pero|con|del|mi|qué|cómo|dónde|yo|usted|hay|nosotros"),
  de: mots("der|die|das|ist|ich|und|nicht|mit|ein|eine|bin|bist|sind|wir|habe|hat|auf|im|mein|dein"),
};
const FRANCAIS = new RegExp(`[àâçèêëîïôœùûÿ]|${mots("le|les|une|des|est|et|ou|qui|pour|avec|dans|sur|il|elle|ne|pas|cette|ses|veut|dire|signifie", "iu").source}`, "iu");

async function signaler(f) {
  const { mod, champs } = await champsLus(f);
  const code = ({ anglais: "en", espagnol: "es", allemand: "de" })[mod.matiere];
  let n = 0;
  const noter = (chemin, msg) => { n++; console.log(`${chemin}\n    ${msg}`); };
  for (const [chemin, t] of champs) {
    for (const m of t.matchAll(/\[\[(?:([a-z]{2}):)?([\s\S]*?)\]\]/g)) {
      if ((m[1] || code) !== "fr" && FRANCAIS.test(m[2])) noter(chemin, `balisé mais semble français : [[${m[1] ? m[1] + ":" : ""}${m[2]}]]`);
    }
    const libre = t.replace(/\[\[[\s\S]*?\]\]/g, " ");
    const mis = [...libre.matchAll(/\*\*(.+?)\*\*|(?:^|[^*])\*([^*\n]+?)\*/g)].map((m) => m[1] || m[2]).filter((x) => /\p{L}/u.test(x));
    if (mis.length) noter(chemin, `mis en valeur sans balise : ${mis.map((x) => `« ${x} »`).join(", ")}`);
    const cible = code ? (libre.match(MOTS_CIBLE[code]) || []) : [];
    if (cible.length >= 2) noter(chemin, `mots ${code} hors balise : ${[...new Set(cible.map((x) => x.toLowerCase()))].join(", ")}`);
    if (!aDesBalises(t) && /\.(lignes\[\d+\]\[\d+\]|choix\[\d+\]|etapes\[\d+\])$/.test(chemin) && /\p{L}/u.test(t)) noter(chemin, `cellule, choix ou étape sans balise : « ${t} »`);
  }
  console.log(`${relative(root, f)} : ${n} signalement(s)`);
}

// ————————————————————————————— controler —————————————————————————————

async function controler(ref = "HEAD") {
  const fichiers = execFileSync("git", ["diff", "--name-only", ref, "--", "content"], { cwd: root, encoding: "utf8" }).split("\n").filter((f) => /^content\/(cours\/)?\d+e\/[^/]+\.js$/.test(f));
  const tmp = mkdtempSync(join(tmpdir(), "eclore-controle-"));
  const sans = (m) => JSON.parse(JSON.stringify(m), (_, v) => (typeof v === "string" ? retirerBalises(v) : v));
  let ko = 0;
  try {
    for (const rel of fichiers) {
      let avant;
      try { avant = execFileSync("git", ["show", `${ref}:${rel}`], { cwd: root, encoding: "utf8" }); } catch { console.log(`  · ${rel} : nouveau fichier`); continue; }
      const copie = join(tmp, rel.replace(/\//g, "__").replace(/\.js$/, ".mjs"));
      writeFileSync(copie, avant);
      const a = sans(await charger(copie)), b = sans(await charger(join(root, rel)));
      if (isDeepStrictEqual(a, b)) { console.log(`  ✓ ${rel}`); continue; }
      ko++;
      const va = new Map(chaines(a));
      const diff = [...chaines(b)].filter(([c, t]) => va.get(c) !== t).slice(0, 5);
      console.log(`  ✖ ${rel} : le texte a changé ailleurs que dans les balises`);
      for (const [c, t] of diff) console.log(`      ${c}\n        avant : ${JSON.stringify(va.get(c))}\n        après : ${JSON.stringify(t)}`);
    }
  } finally { rmSync(tmp, { recursive: true, force: true }); }
  console.log(`${fichiers.length} fichier(s) de contenu modifié(s) depuis ${ref}, ${ko} avec un texte changé`);
  process.exit(ko ? 1 : 0);
}

// —————————————————————————————————————————————————————————————————————————————

const fichier = args[0] && cmd !== "controler" ? resolve(args[0]) : null;
if (cmd !== "controler" && !fichier) sortir("usage : node tools/annotations.mjs extraire|appliquer|signaler <fichier> … ou controler [ref] (voir l'en-tête du fichier)");
try {
  switch (cmd) {
    case "extraire": await extraire(fichier); break;
    case "appliquer": await appliquer(fichier, args[1]); break;
    case "signaler": await signaler(fichier); break;
    case "controler": await controler(args[0]); break;
    default: sortir("usage : node tools/annotations.mjs extraire|appliquer|signaler <fichier> … ou controler [ref] (voir l'en-tête du fichier)");
  }
} catch (e) { sortir(`✖ ${e.message}`); }
