// ÉCLORE — Accès au contenu (catalogue des modules, chargement paresseux, index des items).
import { MODULES, charger } from "../content/index.js";
import { MATIERES, NIVEAUX, SOCLE } from "../content/matieres.js";

export { MATIERES, NIVEAUX, SOCLE };

const cache = new Map();

export function modulesDuNiveau(niveau) {
  return MODULES.filter(m => m.niveau === niveau);
}
export function matieresDuNiveau(niveau) {
  const ids = Object.keys(MATIERES).filter(id => MATIERES[id].cycles.includes(niveau));
  return ids.filter(id => MODULES.some(m => m.niveau === niveau && m.matiere === id));
}

export async function chargerModule(niveau, matiere) {
  const cle = `${niveau}-${matiere}`;
  if (cache.has(cle)) return cache.get(cle);
  if (!MODULES.some(m => m.niveau === niveau && m.matiere === matiere)) return null;
  const p = charger(niveau, matiere).then(mod => {
    // Index pratique : chaque item connaît son chapitre et son module.
    for (const ch of mod.chapitres) {
      ch.module = cle; ch.niveau = niveau; ch.matiere = matiere;
      for (const it of ch.items) { it.chapitre = ch.id; it.module = cle; it.niveau = niveau; it.matiere = matiere; }
    }
    return mod;
  });
  cache.set(cle, p);
  return p;
}

const cacheCours = new Map();
/** Cours illustré d'un module (content/cours/<niveau>/<matiere>.js), ou null s'il n'existe pas encore. */
export function chargerCours(niveau, matiere) {
  const cle = `${niveau}-${matiere}`;
  if (!cacheCours.has(cle)) cacheCours.set(cle, import(`../content/cours/${niveau}/${matiere}.js`).then(m => m.default).catch(() => null));
  return cacheCours.get(cle);
}
export async function coursDuChapitre(chapitre) {
  const c = await chargerCours(chapitre.niveau, chapitre.matiere);
  return c?.chapitres?.[chapitre.id] || null;
}

export async function chargerNiveau(niveau) {
  const mods = await Promise.all(matieresDuNiveau(niveau).map(m => chargerModule(niveau, m)));
  return mods.filter(Boolean);
}

export async function trouverChapitre(chapId) {
  // Les matières peuvent contenir un tiret (physique-chimie) : on cherche le module dont l'id préfixe le chapitre.
  const m = MODULES.filter(x => chapId.startsWith(`${x.niveau}-${x.matiere}-`)).sort((a, b) => b.matiere.length - a.matiere.length)[0];
  if (!m) return null;
  const mod = await chargerModule(m.niveau, m.matiere);
  return mod?.chapitres.find(c => c.id === chapId) || null;
}

/** Tous les items d'un niveau, indexés par id. */
export async function indexItems(niveau) {
  const mods = await chargerNiveau(niveau);
  const idx = new Map();
  for (const m of mods) for (const ch of m.chapitres) for (const it of ch.items) idx.set(it.id, it);
  return idx;
}
