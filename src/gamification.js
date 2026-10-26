// ÉCLORE — Gamification : niveaux, combo, quêtes du jour, herbier, épreuves, boutique.
// Fonctions pures sur l'état (`etat`), aucune manipulation du DOM. Tout vit dans `etat.gamif`.
// Esprit (docs/PEDAGOGIE.md) : on récompense l'effort, la régularité et la lucidité ; rien n'est
// jamais retiré (une erreur remet le combo à zéro sans rien enlever), aucune comparaison sociale.
//
// ─── QUI CRÉDITE QUOI (pas de double comptage) ────────────────────────────────────────────────
//  • Le moteur (`enregistrerReponse`, `cloreSession`) crédite comme avant ses lumens de base dans
//    `etat.lumens`. On n'y touche pas.
//  • Ce module crédite lui-même, dans `etat.lumens` ET `gamif.xp`, uniquement ses propres gains :
//    bonus de combo, cours, quêtes réclamées, épreuves.
//  • `gamif.xp` (lumens gagnés depuis toujours) rattrape les gains du moteur par différence :
//    `gamif.lumensSync` mémorise le dernier solde vu ; toute hausse de `etat.lumens` faite ailleurs
//    est ajoutée à l'XP au prochain appel (`appliquerEvenement`, `synchroniserXp`…). Les achats
//    débitent `etat.lumens` et recalent `lumensSync` : dépenser ne fait jamais perdre d'XP.
//  → Le jeu ne doit donc JAMAIS ajouter lui-même à `etat.lumens` les `lumens` renvoyés ici.
//
// ─── API ──────────────────────────────────────────────────────────────────────────────────────
//  initialiser(etat) → gamif                       crée/complète etat.gamif (idempotent, migre les anciens profils)
//  synchroniserXp(etat) → xp ajoutée               intègre à l'XP les lumens crédités par le moteur
//  NIVEAUX : [{ niveau, nom, xp }]                 20 niveaux ; xp = seuil d'entrée
//  niveauDepuisXp(xp) → { niveau, nom, xpNiveau, xpSuivant, progression }
//        xpNiveau = seuil du niveau atteint, xpSuivant = seuil du suivant (null au niveau 20), progression 0..1
//  PALIERS_COMBO ; combo(serieJustes) → { multiplicateur, palier (0..3), nom, prochain (série du palier suivant | null) }
//  VIVIER_QUETES : [{ id, famille, libelle, objectif, recompense }]
//  quetesDuJour(etat, date = Date.now(), contexte?) → [{ id, libelle, objectif, progres, recompense, reclamee }] ×3
//        contexte (facultatif) : { coursDisponibles = true, nouveauxChapitres = true, matieres = ∞ } pour écarter
//        les quêtes impossibles. Les quêtes accomplies et non réclamées la veille sont créditées automatiquement.
//  reclamerQuete(etat, id) → lumens crédités (0 si non accomplie ou déjà réclamée)
//  conditionsPlanche(etat, chapitre, maintenant) → { total, vues, maitrise, competences[], jours, etendue, ok{…}, toutes }
//        garde-fous de la planche coloriée (docs/PEDAGOGIE.md) : toutes les questions rencontrées, maîtrise ≥ 0,60,
//        chaque compétence ≥ 0,45, au moins 3 journées travaillées sur au moins 7 jours
//  projectionOuverture(etat, chapitre, maintenant) → date estimée d'ouverture de l'épreuve (réponses « Bien » à chaque échéance) | null
//  etatPlanche(etat, chapitre, maintenant) → "cachee" | "esquisse" | "coloriee" | "doree"   (chapitre = { id, items })
//  verifierPlanches(etat, chapitres, maintenant) → [chapitreId] nouvellement coloriées (mémorisées dans gamif.herbier ;
//        au tout premier passage d'un profil migré, elles sont enregistrées sans être renvoyées : pas d'avalanche)
//  epreuveDisponible(etat, chapitre, maintenant) → bool (planche coloriée une journée précédente, pas d'échec aujourd'hui)
//  construireEpreuve(chapitre, etat, maintenant?) → items[] (10 max, sans carte flash, toutes compétences, difficultés mêlées ;
//        compétences les plus faibles servies d'abord, questions déjà vues aujourd'hui en dernier)
//  resultatEpreuve(etat, chapitreId, justes, total, maintenant?) → { reussie, taux, bonus, doree, message }  (seuil 80 %, bonus 1re fois ;
//        un échec ferme l'épreuve jusqu'à la journée suivante)
//  CATALOGUE : 12 × { id, nom, desc, prix, niveauMin }
//  acheter(etat, id) → { ok: true, prix } | { ok: false, raison: "inconnu"|"possede"|"niveau"|"fonds", manque? }
//  placer(etat, id, x) → bool (x borné à [0, 1]) ; retirer(etat, id) → bool (retour à l'inventaire)
//  appliquerEvenement(etat, evt, maintenant = Date.now(), options?) → { lumens, xp, notifications }
//        Point d'entrée unique. evt.type :
//          "reponse"      { juste, difficulte, matiere, chapitre, confiance, dejaVu, rattrapage, lumens? }
//                          (lumens = valeur renvoyée par enregistrerReponse, sert de base au combo ; estimée sinon)
//          "sessionFin"   { seance, n, ok }         (seance = type de séance : "decouvrir"|"arroser"|"defi"|"diagnostic" ;
//                                                     `type` étant pris par l'événement ; remet le combo à zéro)
//          "coursSection" { chapitre, index, total }
//          "coursLu"      { chapitre }               (+5 lumens à la première lecture complète d'un chapitre)
//          "verifieCours" { chapitre, juste }        (+2 si juste, +1 sinon : l'effort compte)
//          "epreuveFin"   { chapitre, justes, total } (délègue à resultatEpreuve : ne pas appeler les deux)
//        options : { contexte (cf. quetesDuJour), chapitres (objets chapitre : vérifie l'herbier en fin de session) }
//        lumens = lumens crédités ICI (déjà ajoutés à etat.lumens) ; xp = XP ajoutée (gains du moteur inclus)
//        notifications : { type: "niveau", niveau, nom } | { type: "quete", id, libelle, recompense }
//                      | { type: "planche", chapitre, etat: "coloriee"|"doree" } | { type: "combo", palier, nom, multiplicateur, serie }
//  verifierNiveau(etat) → notification "niveau" | null (appelée par appliquerEvenement ; utile après reclamerQuete)

import { maitrise, couverture, melanger } from "./engine.js";
import { cleJour, cleJournee, ecartJours, noterJournee } from "./store.js";
import { reviser, NOTES } from "./scheduler.js";

export const VERSION_GAMIF = 1;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const num = (x, d = 0) => (Number.isFinite(x) ? x : d);

// ─── 1. Niveaux ─────────────────────────────────────────────────────────────────────────────────
// Seuil du niveau n (k = n − 1) : 25·k + 3·k³, arrondi à 5. Niveau 2 dès la 1re séance (≈ 30 XP),
// niveaux 3-4 dans les premiers jours, puis croissance douce : niveau 20 = 21 050 XP, soit environ
// 10 mois à 15 questions par jour (≈ 70 XP par jour, mesuré par simulation dans les tests).
const NOMS = ["Graine", "Germe", "Pousse", "Brin", "Tige", "Bouton", "Corolle", "Fleur", "Fruit", "Arbrisseau",
  "Buisson", "Jeune arbre", "Arbre", "Grand arbre", "Ramure", "Canopée", "Chêne", "Vieux chêne", "Chêne centenaire", "Forêt"];
const seuil = (n) => { const k = n - 1; return Math.round((25 * k + 3 * k ** 3) / 5) * 5; };
export const NIVEAUX = Object.freeze(NOMS.map((nom, i) => Object.freeze({ niveau: i + 1, nom, xp: seuil(i + 1) })));

export function niveauDepuisXp(xp) {
  const x = Math.max(0, num(xp));
  let i = 0;
  while (i + 1 < NIVEAUX.length && NIVEAUX[i + 1].xp <= x) i++;
  const cur = NIVEAUX[i], next = NIVEAUX[i + 1] || null;
  return { niveau: cur.niveau, nom: cur.nom, xpNiveau: cur.xp, xpSuivant: next ? next.xp : null,
    progression: next ? clamp((x - cur.xp) / (next.xp - cur.xp), 0, 1) : 1 };
}

// ─── 2. Combo ───────────────────────────────────────────────────────────────────────────────────
export const PALIERS_COMBO = Object.freeze([
  { palier: 0, des: 0, multiplicateur: 1, nom: "Brise" },
  { palier: 1, des: 3, multiplicateur: 1.5, nom: "Rosée" },
  { palier: 2, des: 6, multiplicateur: 2, nom: "Pollen" },
  { palier: 3, des: 10, multiplicateur: 3, nom: "Floraison" },
]);

export function combo(serieJustes) {
  const s = Math.max(0, Math.floor(num(serieJustes)));
  let p = PALIERS_COMBO[0];
  for (const x of PALIERS_COMBO) if (s >= x.des) p = x;
  const suivant = PALIERS_COMBO[p.palier + 1];
  return { multiplicateur: p.multiplicateur, palier: p.palier, nom: p.nom, prochain: suivant ? suivant.des : null };
}

// ─── État ───────────────────────────────────────────────────────────────────────────────────────
const chapDeItem = (id) => id.slice(0, id.lastIndexOf("-"));

export function initialiser(etat) {
  if (!Number.isFinite(etat.lumens)) etat.lumens = 0;
  if (!etat.items) etat.items = {};
  let g = etat.gamif;
  if (!g || typeof g !== "object") {
    // Migration : avant la boutique, rien ne se dépensait → les lumens actuels = tout ce qui a été gagné.
    const vus = {};
    for (const id of Object.keys(etat.items)) vus[chapDeItem(id)] = 1;
    for (const s of etat.journal || []) if (s && s.chapitre) vus[s.chapitre] = 1;
    for (const [id, c] of Object.entries(etat.chapitres || {})) if (c && c.decouvert) vus[id] = 1;
    const ancien = Object.keys(etat.items).length > 0 || (etat.journal || []).length > 0;
    g = etat.gamif = { xp: Math.max(0, etat.lumens), lumensSync: etat.lumens, chapitresVus: vus, herbierSilencieux: ancien };
    g.niveauVu = niveauDepuisXp(g.xp).niveau; // pas d'annonce rétroactive des niveaux
  }
  if (!Number.isFinite(g.xp)) g.xp = Math.max(0, etat.lumens);
  if (!Number.isFinite(g.lumensSync)) g.lumensSync = etat.lumens;
  if (!Number.isFinite(g.niveauVu)) g.niveauVu = niveauDepuisXp(g.xp).niveau;
  if (!g.combo) g.combo = { serie: 0, meilleure: 0 };
  if (!g.quetes) g.quetes = { jour: null, liste: [], suivi: null };
  if (!g.herbier) g.herbier = {};
  if (!g.cours) g.cours = {};
  if (!g.jardin) g.jardin = {};
  if (!g.chapitresVus) g.chapitresVus = {};
  if (g.herbierSilencieux === undefined) g.herbierSilencieux = false;
  g.version = VERSION_GAMIF;
  return g;
}

export function synchroniserXp(etat) {
  const g = initialiser(etat);
  const delta = etat.lumens - g.lumensSync;
  g.lumensSync = etat.lumens;
  if (delta > 0) { g.xp += delta; return delta; }
  return 0;
}

function crediter(etat, n) {
  const g = initialiser(etat);
  synchroniserXp(etat);
  const v = Math.max(0, Math.round(n));
  etat.lumens += v; g.xp += v; g.lumensSync = etat.lumens;
  return v;
}

export function verifierNiveau(etat) {
  const g = initialiser(etat);
  synchroniserXp(etat);
  const n = niveauDepuisXp(g.xp);
  if (n.niveau > g.niveauVu) { g.niveauVu = n.niveau; return { type: "niveau", niveau: n.niveau, nom: n.nom }; }
  return null;
}

// ─── 3. Quêtes du jour ──────────────────────────────────────────────────────────────────────────
// avancer(progres, evt, suivi) → nouveau progrès ; possible(ctx) → la quête est réalisable aujourd'hui.
const rep = (f) => (p, e) => (e.type === "reponse" && f(e) ? p + 1 : p);
const MODELES = [
  { id: "arroser-5", famille: "arroser", libelle: "Arrose 5 plantes qui ont soif", objectif: 5, recompense: 10,
    possible: c => c.dus >= 5, avancer: rep(e => e.dejaVu && !e.rattrapage) },
  { id: "arroser-10", famille: "arroser", libelle: "Arrose 10 plantes", objectif: 10, recompense: 15,
    possible: c => c.dus >= 10, avancer: rep(e => e.dejaVu && !e.rattrapage) },
  { id: "difficiles-3", famille: "reussir", libelle: "Réussis 3 questions difficiles", objectif: 3, recompense: 15,
    possible: () => true, avancer: rep(e => e.juste && e.difficulte === 3 && !e.rattrapage) },
  { id: "justes-10", famille: "reussir", libelle: "Réponds juste à 10 questions", objectif: 10, recompense: 10,
    possible: () => true, avancer: rep(e => e.juste && !e.rattrapage) },
  { id: "objectif-jour", famille: "rythme", libelle: "Atteins ton objectif du jour : {n} questions", objectif: c => c.objectifItems, recompense: 15,
    possible: () => true, avancer: rep(e => !e.rattrapage) },
  { id: "serie-5", famille: "serie", libelle: "Fais une série de 5 bonnes réponses", objectif: 5, recompense: 10,
    possible: () => true, avancer: (p, e, s) => (e.type === "reponse" ? Math.max(p, s.serie) : p) },
  { id: "cours-lu", famille: "cours", libelle: "Lis un cours en entier", objectif: 1, recompense: 15,
    possible: c => c.coursDisponibles, avancer: (p, e) => (e.type === "coursLu" ? p + 1 : p) },
  { id: "sections-3", famille: "cours", libelle: "Lis 3 sections de cours", objectif: 3, recompense: 10,
    possible: c => c.coursDisponibles, avancer: (p, e, s) => (e.type === "coursSection" && s.sectionNouvelle ? p + 1 : p) },
  { id: "verif-cours-2", famille: "verif", libelle: "Réponds juste à 2 vérifications de cours", objectif: 2, recompense: 10,
    possible: c => c.coursDisponibles, avancer: (p, e) => (e.type === "verifieCours" && e.juste ? p + 1 : p) },
  { id: "nouveau-chapitre", famille: "explorer", libelle: "Découvre un nouveau chapitre", objectif: 1, recompense: 15,
    possible: c => c.nouveauxChapitres, avancer: (p, e, s) => (s.nouveauChapitre ? p + 1 : p) },
  { id: "matieres-3", famille: "varier", libelle: "Travaille 3 matières différentes", objectif: 3, recompense: 15,
    possible: c => c.matieres >= 3, avancer: (p, e, s) => (e.type === "reponse" ? Math.max(p, s.matieres.length) : p) },
  { id: "devine", famille: "lucidite", libelle: "Dis « je devine » et apprends de ta réponse", objectif: 1, recompense: 10,
    possible: c => c.confiance, avancer: rep(e => e.confiance === 1 && !e.rattrapage) },
  { id: "rattrapage-2", famille: "compost", libelle: "Corrige 2 erreurs en fin de séance", objectif: 2, recompense: 15,
    possible: c => c.dejaRate, avancer: rep(e => e.rattrapage && e.juste) },
  { id: "defi", famille: "defi", libelle: "Termine un défi éclair", objectif: 1, recompense: 15,
    possible: c => c.vus >= 20, avancer: (p, e) => (e.type === "sessionFin" && e.evtType === "defi" && e.n > 0 ? p + 1 : p) },
  { id: "decouvrir", famille: "seance", libelle: "Termine une séance de découverte", objectif: 1, recompense: 10,
    possible: () => true, avancer: (p, e) => (e.type === "sessionFin" && e.evtType === "decouvrir" && e.n > 0 ? p + 1 : p) },
  { id: "epreuve", famille: "epreuve", libelle: "Tente l'épreuve d'un chapitre colorié", objectif: 1, recompense: 20,
    possible: c => c.epreuvePossible, avancer: (p, e) => (e.type === "epreuveFin" ? p + 1 : p) },
];
export const VIVIER_QUETES = Object.freeze(MODELES.map(m => Object.freeze({
  id: m.id, famille: m.famille, libelle: m.libelle, objectif: typeof m.objectif === "number" ? m.objectif : null, recompense: m.recompense })));

function hash32(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function aleatoire(graine) {
  let a = graine >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

function contexteQuetes(etat, maintenant, contexte = {}) {
  const valeurs = Object.values(etat.items);
  const g = etat.gamif;
  return {
    dus: valeurs.filter(e => e && e.s && e.due <= maintenant).length,
    vus: valeurs.filter(e => e && e.s).length,
    dejaRate: valeurs.some(e => e && e.lapses > 0),
    confiance: etat.prefs?.confiance !== false,
    objectifItems: clamp(Math.round(num(etat.prefs?.objectifItems, 15)), 5, 50),
    epreuvePossible: Object.values(g.herbier).some(h => !h.doree && epreuveOuverte(h, maintenant)),
    coursDisponibles: contexte.coursDisponibles !== false,
    nouveauxChapitres: contexte.nouveauxChapitres !== false,
    matieres: num(contexte.matieres, Infinity),
  };
}

export function quetesDuJour(etat, date = Date.now(), contexte = {}) {
  const g = initialiser(etat);
  const t = date instanceof Date ? date.getTime() : num(date, Date.now());
  const jour = cleJour(new Date(t));
  if (g.quetes.jour === jour) return g.quetes.liste;
  // Une quête accomplie n'est jamais perdue : celles d'hier non réclamées sont créditées.
  for (const q of g.quetes.liste) if (!q.reclamee && q.progres >= q.objectif) { q.reclamee = true; crediter(etat, q.recompense); }
  const ctx = contexteQuetes(etat, t, contexte);
  const rnd = aleatoire(hash32(`${jour}|${etat.profil?.graine ?? 0}`));
  const ordre = MODELES.map(m => ({ m, k: rnd() })).sort((a, b) => a.k - b.k).map(x => x.m);
  const familles = new Set(), liste = [];
  for (const m of ordre) {
    if (liste.length === 3) break;
    if (familles.has(m.famille) || !m.possible(ctx)) continue;
    familles.add(m.famille);
    const objectif = typeof m.objectif === "function" ? m.objectif(ctx) : m.objectif;
    liste.push({ id: m.id, libelle: m.libelle.replace("{n}", objectif), objectif, progres: 0, recompense: m.recompense, reclamee: false });
  }
  g.quetes = { jour, liste, suivi: { matieres: [], sections: [] } };
  return liste;
}

export function reclamerQuete(etat, id) {
  const g = initialiser(etat);
  const q = g.quetes.liste.find(x => x.id === id);
  if (!q || q.reclamee || q.progres < q.objectif) return 0;
  q.reclamee = true;
  return crediter(etat, q.recompense);
}

// ─── 4. Herbier ─────────────────────────────────────────────────────────────────────────────────
// Garde-fous calibrés sur la recherche (docs/PEDAGOGIE.md, « Ouverture de l'épreuve ») : la durabilité se compte
// en journées de réussite espacées, séparées par le sommeil, et non en bonnes réponses le même jour.
export const SEUIL_MAITRISE = 0.6, SEUIL_COMPETENCE = 0.45, JOURS_MIN = 3, ETENDUE_MIN = 7;

export function conditionsPlanche(etat, chapitre, maintenant = Date.now()) {
  const items = chapitre.items || [];
  const parComp = new Map();
  for (const it of items) { if (!parComp.has(it.competence)) parComp.set(it.competence, []); parComp.get(it.competence).push(it); }
  const competences = [...parComp].map(([id, liste]) => ({ id, maitrise: maitrise(liste, etat, maintenant) }));
  const jours = etat.chapitres?.[chapitre.id]?.jours || [];
  const c = {
    total: items.length,
    vues: Math.round(couverture(items, etat) * items.length),
    maitrise: maitrise(items, etat, maintenant),
    competences,
    competencesOk: competences.filter(x => x.maitrise >= SEUIL_COMPETENCE).length,
    jours: jours.length,
    etendue: jours.length ? ecartJours(jours[0], cleJournee(maintenant)) : 0,
  };
  c.ok = {
    decouverte: c.total > 0 && c.vues === c.total,
    racines: c.maitrise >= SEUIL_MAITRISE,
    competences: competences.length > 0 && c.competencesOk === competences.length,
    jours: c.jours >= JOURS_MIN,
    etendue: c.etendue >= ETENDUE_MIN,
  };
  c.toutes = Object.values(c.ok).every(Boolean);
  return c;
}

function merite(etat, chapitre, maintenant) {
  return conditionsPlanche(etat, chapitre, maintenant).toutes;
}

/** Date estimée d'ouverture de l'épreuve si l'élève répond « Bien » à chaque échéance (projection, pas promesse). */
export function projectionOuverture(etat, chapitre, maintenant = Date.now(), horizonJours = 60) {
  const items = chapitre.items || [];
  if (!items.length || etat.gamif?.herbier?.[chapitre.id]?.coloriee) return null;
  const sim = { items: {}, chapitres: { [chapitre.id]: { jours: [...(etat.chapitres?.[chapitre.id]?.jours || [])] } } };
  for (const it of items) if (etat.items[it.id]) sim.items[it.id] = { ...etat.items[it.id] };
  for (let d = 0; d <= horizonJours; d++) {
    const t = maintenant + d * 86400000;
    let actif = false;
    for (const it of items) {
      const e = sim.items[it.id];
      if (!e?.s || e.due <= t) { sim.items[it.id] = reviser(e, NOTES.BIEN, t); actif = true; }
    }
    if (actif) noterJournee(sim, chapitre.id, t);
    if (merite(sim, chapitre, t)) return t + 86400000; // planche coloriée ce jour-là, épreuve le lendemain
  }
  return null;
}

export function etatPlanche(etat, chapitre, maintenant = Date.now()) {
  const h = etat.gamif?.herbier?.[chapitre.id];
  if (h?.doree) return "doree";
  if (h?.coloriee || merite(etat, chapitre, maintenant)) return "coloriee"; // une planche coloriée le reste
  return (chapitre.items || []).some(it => etat.items[it.id]) ? "esquisse" : "cachee";
}

export function verifierPlanches(etat, chapitres, maintenant = Date.now()) {
  const g = initialiser(etat);
  const nouvelles = [];
  for (const c of chapitres || []) {
    if (g.herbier[c.id]?.coloriee || !merite(etat, c, maintenant)) continue;
    g.herbier[c.id] = { ...(g.herbier[c.id] || {}), coloriee: maintenant };
    nouvelles.push(c.id);
  }
  if (g.herbierSilencieux) { g.herbierSilencieux = false; return []; }
  return nouvelles;
}

// ─── 5. Épreuve de chapitre ─────────────────────────────────────────────────────────────────────
export const TAILLE_EPREUVE = 10, SEUIL_EPREUVE = 0.8, BONUS_EPREUVE = 40;

/** L'épreuve s'ouvre la journée qui suit la planche coloriée (la nuit consolide) et, après un échec, la journée suivante. */
function epreuveOuverte(h, maintenant) {
  if (!h?.coloriee) return false;
  const auj = cleJournee(maintenant);
  return auj > cleJournee(h.coloriee) && (!h.dernierEchec || auj > cleJournee(h.dernierEchec));
}

export function epreuveDisponible(etat, chapitre, maintenant = Date.now()) {
  return epreuveOuverte(etat.gamif?.herbier?.[chapitre.id], maintenant);
}

export function construireEpreuve(chapitre, etat, maintenant = Date.now()) {
  const candidats = (chapitre.items || []).filter(it => it.type !== "flash");
  const essais = etat.gamif?.herbier?.[chapitre.id]?.essais || 0;
  const graine = hash32(`${chapitre.id}|${etat.profil?.graine ?? 0}|${essais}`) || 1;
  // Les questions déjà vues aujourd'hui passent en dernier : l'épreuve mesure ce qui tient, pas ce qui vient d'être corrigé.
  const auj = cleJournee(maintenant);
  const vueAujourdhui = (it) => (etat.items?.[it.id]?.last && cleJournee(etat.items[it.id].last) === auj ? 1 : 0);
  // Par compétence : on alterne les difficultés (départ décalé d'une compétence à l'autre).
  const parComp = new Map();
  for (const it of melanger(candidats, graine).sort((a, b) => vueAujourdhui(a) - vueAujourdhui(b))) {
    if (!parComp.has(it.competence)) parComp.set(it.competence, []);
    parComp.get(it.competence).push(it);
  }
  // Les compétences les plus fragiles d'abord : elles reçoivent les questions en plus quand le partage n'est pas égal.
  const faiblesse = (liste) => (etat.items ? maitrise(liste, etat, maintenant) : 0);
  const files = [...parComp.values()].sort((a, b) => faiblesse(a) - faiblesse(b)).map((liste, ci) => {
    const seaux = [1, 2, 3].map(d => liste.filter(it => (it.difficulte || 2) === d));
    const autres = liste.filter(it => ![1, 2, 3].includes(it.difficulte || 2));
    const out = [];
    for (let k = ci; seaux.some(s => s.length); k++) { const s = seaux[k % 3]; if (s.length) out.push(s.shift()); }
    return out.concat(autres);
  });
  // Tour de rôle entre compétences, en évitant si possible deux types identiques d'affilée.
  const choisis = [];
  while (choisis.length < TAILLE_EPREUVE && files.some(f => f.length)) {
    for (const f of files) {
      if (choisis.length >= TAILLE_EPREUVE || !f.length) continue;
      const dernier = choisis[choisis.length - 1]?.type;
      const j = f.findIndex(it => it.type !== dernier);
      choisis.push(f.splice(j < 0 ? 0 : j, 1)[0]);
    }
  }
  return choisis;
}

export function resultatEpreuve(etat, chapitreId, justes, total, maintenant = Date.now()) {
  const g = initialiser(etat);
  const tot = Math.max(0, Math.floor(num(total)));
  const ok = clamp(Math.floor(num(justes)), 0, tot);
  const taux = tot ? ok / tot : 0;
  const h = g.herbier[chapitreId] = { ...(g.herbier[chapitreId] || {}) };
  h.essais = (h.essais || 0) + 1;
  const reussie = tot > 0 && taux >= SEUIL_EPREUVE;
  if (!reussie) {
    h.dernierEchec = maintenant;
    return { reussie, taux, bonus: 0, doree: false,
      message: `${ok} sur ${tot} : pas encore la planche dorée. Revois les compétences fragiles ; tu pourras retenter l'épreuve dès demain, après une nuit de sommeil.` };
  }
  const premiere = !h.doree;
  if (premiere) { h.doree = maintenant; h.coloriee = h.coloriee || h.doree; }
  const bonus = premiere ? crediter(etat, BONUS_EPREUVE) : 0;
  return { reussie, taux, bonus, doree: premiere,
    message: premiere ? `${ok} sur ${tot} : la planche se pare d'or ! Ce chapitre est bien enraciné.` : `${ok} sur ${tot} : toujours solide, bravo.` };
}

// ─── 6. Boutique ────────────────────────────────────────────────────────────────────────────────
export const CATALOGUE = Object.freeze([
  { id: "lanterne", nom: "Lanterne", desc: "Une petite lueur pour les soirs d'étude.", prix: 30, niveauMin: 1 },
  { id: "banc", nom: "Banc", desc: "Pour se poser et regarder pousser.", prix: 45, niveauMin: 1 },
  { id: "nichoir", nom: "Nichoir", desc: "Les mésanges aiment les jardins patients.", prix: 60, niveauMin: 2 },
  { id: "arrosoir", nom: "Arrosoir", desc: "L'outil de la régularité.", prix: 80, niveauMin: 3 },
  { id: "ruche", nom: "Ruche", desc: "Des abeilles qui butinent tes fleurs.", prix: 110, niveauMin: 4 },
  { id: "mare", nom: "Mare", desc: "Un miroir d'eau où chantent les grenouilles.", prix: 150, niveauMin: 5 },
  { id: "arche", nom: "Arche fleurie", desc: "Une arche de roses grimpantes.", prix: 200, niveauMin: 6 },
  { id: "fontaine", nom: "Fontaine", desc: "Le murmure de l'eau, toujours.", prix: 260, niveauMin: 8 },
  { id: "papillons", nom: "Papillons", desc: "Un nuage de papillons attirés par tes fleurs.", prix: 330, niveauMin: 10 },
  { id: "cabane", nom: "Cabane", desc: "Une cabane de bois pour rêver.", prix: 400, niveauMin: 12 },
  { id: "cerf-volant", nom: "Cerf-volant", desc: "Il danse dans le vent au-dessus du jardin.", prix: 480, niveauMin: 14 },
  { id: "observatoire", nom: "Observatoire", desc: "Pour regarder les étoiles, et plus loin encore.", prix: 600, niveauMin: 16 },
].map(Object.freeze));

export function acheter(etat, id) {
  const g = initialiser(etat);
  synchroniserXp(etat);
  const art = CATALOGUE.find(a => a.id === id);
  if (!art) return { ok: false, raison: "inconnu" };
  if (g.jardin[id]) return { ok: false, raison: "possede" };
  if (niveauDepuisXp(g.xp).niveau < art.niveauMin) return { ok: false, raison: "niveau", niveauMin: art.niveauMin };
  if (etat.lumens < art.prix) return { ok: false, raison: "fonds", manque: art.prix - etat.lumens };
  etat.lumens -= art.prix;
  g.lumensSync = etat.lumens; // dépenser ne touche pas à l'XP
  g.jardin[id] = { achete: Date.now(), x: null };
  return { ok: true, prix: art.prix };
}

export function placer(etat, id, x) {
  const g = initialiser(etat);
  if (!g.jardin[id] || !Number.isFinite(x)) return false;
  g.jardin[id].x = clamp(x, 0, 1);
  return true;
}

export function retirer(etat, id) {
  const g = initialiser(etat);
  if (!g.jardin[id]) return false;
  g.jardin[id].x = null;
  return true;
}

// ─── 7. Événements ──────────────────────────────────────────────────────────────────────────────
export const LUMENS_COURS_LU = 5;

export function appliquerEvenement(etat, evt, maintenant = Date.now(), options = {}) {
  const g = initialiser(etat);
  const xpAvant = g.xp;
  const notifications = [];
  let lumens = 0;
  synchroniserXp(etat);
  const quetes = quetesDuJour(etat, maintenant, options.contexte);
  const suivi = g.quetes.suivi;
  // `type` désigne l'événement : le type de séance de sessionFin voyage dans `seance` (alias `typeSession`).
  const e = { ...evt, evtType: evt.type === "sessionFin" ? (evt.seance ?? evt.typeSession) : undefined };
  const s = { serie: g.combo.serie, matieres: suivi.matieres, nouveauChapitre: false, sectionNouvelle: false };

  if (evt.type === "reponse") {
    if (!evt.rattrapage) {
      const avant = combo(g.combo.serie).palier;
      g.combo.serie = evt.juste ? g.combo.serie + 1 : 0;
      g.combo.meilleure = Math.max(g.combo.meilleure, g.combo.serie);
      const c = combo(g.combo.serie);
      if (evt.juste) {
        const base = Number.isFinite(evt.lumens) ? evt.lumens : 2 + (evt.difficulte === 3 ? 1 : 0);
        lumens += crediter(etat, base * (c.multiplicateur - 1));
      }
      if (c.palier > avant) notifications.push({ type: "combo", palier: c.palier, nom: c.nom, multiplicateur: c.multiplicateur, serie: g.combo.serie });
      if (evt.matiere && !suivi.matieres.includes(evt.matiere)) suivi.matieres.push(evt.matiere);
    }
    if (evt.chapitre && !g.chapitresVus[evt.chapitre]) { g.chapitresVus[evt.chapitre] = maintenant; s.nouveauChapitre = true; }
    s.serie = g.combo.serie;
  } else if (evt.type === "sessionFin") {
    g.combo.serie = 0;
    if (options.chapitres) for (const id of verifierPlanches(etat, options.chapitres, maintenant)) notifications.push({ type: "planche", chapitre: id, etat: "coloriee" });
  } else if (evt.type === "coursSection") {
    const cle = `${evt.chapitre}#${evt.index}`;
    if (!suivi.sections.includes(cle)) { suivi.sections.push(cle); s.sectionNouvelle = true; }
    const c = g.cours[evt.chapitre] = { ...(g.cours[evt.chapitre] || {}) };
    const lues = new Set(c.sections || []); lues.add(evt.index); c.sections = [...lues].sort((a, b) => a - b);
  } else if (evt.type === "coursLu") {
    const c = g.cours[evt.chapitre] = { ...(g.cours[evt.chapitre] || {}) };
    if (!c.lu) { c.lu = maintenant; lumens += crediter(etat, LUMENS_COURS_LU); }
  } else if (evt.type === "verifieCours") {
    lumens += crediter(etat, evt.juste ? 2 : 1);
  } else if (evt.type === "epreuveFin") {
    const r = resultatEpreuve(etat, evt.chapitre, evt.justes, evt.total, maintenant);
    lumens += r.bonus;
    if (r.doree) notifications.push({ type: "planche", chapitre: evt.chapitre, etat: "doree" });
  }

  for (const q of quetes) {
    if (q.progres >= q.objectif) continue;
    const m = MODELES.find(x => x.id === q.id);
    q.progres = Math.min(q.objectif, m.avancer(q.progres, e, s));
    if (q.progres >= q.objectif) notifications.push({ type: "quete", id: q.id, libelle: q.libelle, recompense: q.recompense });
  }
  const niv = verifierNiveau(etat);
  if (niv) notifications.push(niv);
  return { lumens, xp: g.xp - xpAvant, notifications };
}
