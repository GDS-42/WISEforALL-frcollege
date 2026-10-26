// ÉCLORE — Moteur pédagogique : construction des sessions, enregistrement des réponses, maîtrise.
import { reviser, memoireActuelle, noteDepuisReponse, stade, NOTES } from "./scheduler.js";
import { majElo, forceItem, pertinence, ELO_DEPART, probaReussite } from "./adapt.js";
import { cleJour } from "./store.js";
import { verifierSucces } from "./succes.js";

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

// Mélange déterministe (graine) pour que l'ordre des choix soit stable dans un rendu.
export function melanger(tab, graine = Math.random() * 1e9) {
  const a = tab.slice();
  let s = Math.floor(graine) || 1;
  const rnd = () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/** Entrelace plusieurs listes (round-robin) : pratique de l'entrelacement (interleaving). */
export function entrelacer(listes) {
  const out = [];
  const copies = listes.map(l => l.slice()).filter(l => l.length);
  while (copies.length) {
    for (let i = copies.length - 1; i >= 0; i--) {
      out.push(copies[i].shift());
      if (!copies[i].length) copies.splice(i, 1);
    }
  }
  return out;
}

export function itemsDus(items, etat, maintenant = Date.now()) {
  return items.filter(it => { const e = etat.items[it.id]; return e && e.s && e.due <= maintenant; });
}
export function itemsFragiles(items, etat, maintenant = Date.now()) {
  return items
    .map(it => ({ it, R: memoireActuelle(etat.items[it.id], maintenant) }))
    .filter(x => etat.items[x.it.id]?.s && x.R < 0.92)
    .sort((a, b) => a.R - b.R)
    .map(x => x.it);
}

/** Choisit des items jamais vus dans la zone de confort productif, en couvrant les compétences à tour de rôle. */
export function choisirNouveaux(items, etat, n) {
  const nouveaux = items.filter(it => !etat.items[it.id]?.s);
  if (!nouveaux.length) return [];
  const parComp = new Map();
  for (const it of nouveaux) {
    const theta = etat.comp[it.competence]?.elo ?? ELO_DEPART;
    const score = pertinence(theta, forceItem(it)) + Math.random() * 0.08; // léger aléa : variété
    if (!parComp.has(it.competence)) parComp.set(it.competence, []);
    parComp.get(it.competence).push({ it, score });
  }
  const files = [...parComp.values()].map(l => l.sort((a, b) => b.score - a.score).map(x => x.it));
  return entrelacer(melanger(files)).slice(0, n);
}

/**
 * Construit une session.
 * type : "decouvrir" (un chapitre) | "arroser" (révisions dues, tout le niveau) | "defi" (mélange chronométré) | "diagnostic" (une matière)
 */
export function construireSession({ type, etat, chapitre = null, modules = [], n = 12, maintenant = Date.now() }) {
  const tousItems = modules.flatMap(m => m.chapitres.flatMap(c => c.items));
  let liste = [];
  if (type === "decouvrir" && chapitre) {
    const dus = melanger(itemsDus(chapitre.items, etat, maintenant)).slice(0, Math.ceil(n * 0.4));
    // Entrelacement : 1 à 2 révisions venues d'ailleurs (autres chapitres du niveau), si disponibles.
    const ailleurs = melanger(itemsDus(tousItems.filter(i => i.chapitre !== chapitre.id), etat, maintenant)).slice(0, 2);
    let budget = Math.max(0, n - dus.length - ailleurs.length);
    const nouveaux = choisirNouveaux(chapitre.items, etat, budget);
    budget -= nouveaux.length;
    const vus = new Set([...dus, ...nouveaux].map(i => i.id));
    // S'il n'y a plus de nouveautés, on consolide les items les plus fragiles du chapitre.
    const consolidation = itemsFragiles(chapitre.items, etat, maintenant).filter(i => !vus.has(i.id)).slice(0, budget);
    consolidation.forEach(i => vus.add(i.id));
    budget -= consolidation.length;
    // Chapitre épuisé : on complète avec des items déjà vus (rappel) plutôt que rien.
    const complement = budget > 0 ? melanger(chapitre.items.filter(i => !vus.has(i.id) && etat.items[i.id]?.s)).slice(0, budget) : [];
    // Réactiver d'abord (révisions), puis découvrir, en entrelaçant pour soutenir l'attention.
    const revisions = [...dus, ...ailleurs];
    const decouvertes = [...nouveaux, ...consolidation, ...complement];
    liste = entrelacer([decouvertes, revisions]);
  } else if (type === "arroser") {
    const dus = itemsDus(tousItems, etat, maintenant)
      .map(it => ({ it, R: memoireActuelle(etat.items[it.id], maintenant) }))
      .sort((a, b) => a.R - b.R).map(x => x.it);
    const parMatiere = new Map();
    for (const it of dus) { if (!parMatiere.has(it.matiere)) parMatiere.set(it.matiere, []); parMatiere.get(it.matiere).push(it); }
    liste = entrelacer([...parMatiere.values()]).slice(0, n);
    if (liste.length < Math.min(5, n)) {
      const ids = new Set(liste.map(i => i.id));
      liste = liste.concat(itemsFragiles(tousItems, etat, maintenant).filter(i => !ids.has(i.id)).slice(0, n - liste.length));
    }
  } else if (type === "defi") {
    const touches = new Set(Object.keys(etat.items));
    let reservoir = tousItems.filter(i => touches.has(i.id));
    if (reservoir.length < n * 2) reservoir = tousItems;
    const parMatiere = new Map();
    for (const it of melanger(reservoir)) {
      const theta = etat.comp[it.competence]?.elo ?? ELO_DEPART;
      const P = probaReussite(theta, forceItem(it, etat.items[it.id]));
      if (P < 0.35 && Math.random() < 0.7) continue; // éviter l'écrasement
      if (!parMatiere.has(it.matiere)) parMatiere.set(it.matiere, []);
      parMatiere.get(it.matiere).push(it);
    }
    liste = entrelacer([...parMatiere.values()]).slice(0, n);
  } else if (type === "diagnostic" && modules.length === 1) {
    const chapitres = modules[0].chapitres;
    const parChap = chapitres.map(c => {
      const d1 = melanger(c.items.filter(i => i.difficulte === 1 && i.type !== "flash"));
      const d2 = melanger(c.items.filter(i => i.difficulte >= 2 && i.type !== "flash"));
      return [d1[0], d2[0]].filter(Boolean);
    });
    liste = entrelacer(parChap).slice(0, Math.max(n, chapitres.length));
  }
  return { type, chapitre: chapitre?.id || null, items: liste, debut: maintenant, reponses: [], rattrapages: 0 };
}

/** Résultat d'une réponse : met à jour mémoire (FSRS), niveau (Elo), statistiques, journée, lumens. */
export function enregistrerReponse(store, item, { juste, score = juste ? 1 : 0, confiance = 2, indice = false, dureeMs = 0, autoNote = null, rattrapage = false }, maintenant = Date.now()) {
  const note = noteDepuisReponse({ juste, confiance, indice, dureeMs, autoNote });
  let lumens = 0;
  store.maj(e => {
    const prev = e.items[item.id];
    const prochain = reviser(prev, note, maintenant);
    const stats = prev || {};
    const conf = stats.conf ? stats.conf.slice() : [[0, 0], [0, 0], [0, 0]]; // par niveau de confiance : [réponses, justes]
    if (!autoNote && confiance >= 1 && confiance <= 3) { conf[confiance - 1][0]++; if (juste) conf[confiance - 1][1]++; }
    e.items[item.id] = { ...prochain, n: (stats.n || 0) + 1, ok: (stats.ok || 0) + (juste ? 1 : 0), conf, tempsMs: (stats.tempsMs || 0) + (dureeMs || 0), derniereNote: note };
    if (!rattrapage) {
      e.comp[item.competence] = majElo(e.comp[item.competence], juste, forceItem(item, prev));
      const j = cleJour(new Date(maintenant));
      const jour = e.jours[j] || { n: 0, ok: 0, ms: 0 };
      jour.n++; if (juste) jour.ok++; jour.ms += dureeMs || 0;
      e.jours[j] = jour;
      lumens = 1 + (juste ? 1 : 0) + (juste && item.difficulte === 3 ? 1 : 0) + (juste && prev && prev.lapses > 0 && !prev.etape ? 1 : 0);
      e.lumens += lumens;
    }
  });
  return { note, lumens };
}

export function cloreSession(store, session, maintenant = Date.now()) {
  let nouveaux = [];
  store.maj(e => {
    const n = session.reponses.length;
    const ok = session.reponses.filter(r => r.juste).length;
    e.journal.push({ t: session.debut, duree: maintenant - session.debut, n, ok, type: session.type, chapitre: session.chapitre, matieres: [...new Set(session.items.map(i => i.matiere))] });
    if (e.journal.length > 500) e.journal.splice(0, e.journal.length - 500);
    if (n >= 5) e.lumens += 5;
    // Série de jours (avec un joker hebdomadaire : une journée manquée ne casse pas tout).
    const j = cleJour(new Date(maintenant));
    if (e.serie.dernierJour !== j && n >= 5) {
      const hier = cleJour(new Date(maintenant - 86400000));
      const avantHier = cleJour(new Date(maintenant - 2 * 86400000));
      if (e.serie.dernierJour === hier) e.serie.actuelle++;
      else if (e.serie.dernierJour === avantHier && e.serie.joker > 0) { e.serie.joker--; e.serie.actuelle++; }
      else e.serie.actuelle = 1;
      e.serie.dernierJour = j;
      e.serie.record = Math.max(e.serie.record, e.serie.actuelle);
      if (new Date(maintenant).getDay() === 1) e.serie.joker = 1; // le lundi, le joker revient
    }
    if (session.chapitre) { const c = e.chapitres[session.chapitre] || {}; c.decouvert = c.decouvert || maintenant; e.chapitres[session.chapitre] = c; }
    nouveaux = verifierSucces(e, maintenant);
  });
  return nouveaux;
}

/** Maîtrise d'un ensemble d'items (0..1) : mémoire actuelle pondérée par la stabilité acquise. */
export function maitrise(items, etat, maintenant = Date.now()) {
  if (!items.length) return 0;
  let total = 0;
  for (const it of items) {
    const e = etat.items[it.id];
    if (!e || !e.s) continue;
    const R = memoireActuelle(e, maintenant);
    total += R * clamp(e.s / 21, 0.3, 1);
  }
  return total / items.length;
}

export function couverture(items, etat) {
  if (!items.length) return 0;
  return items.filter(it => etat.items[it.id]?.s).length / items.length;
}

/** Stade du chapitre pour le jardin (0..5). */
export function stadeChapitre(chapitre, etat, maintenant = Date.now()) {
  const m = maitrise(chapitre.items, etat, maintenant);
  const c = couverture(chapitre.items, etat);
  if (c === 0) return 0;
  const s = m * 0.7 + c * 0.3;
  if (s < 0.2) return 1;
  if (s < 0.4) return 2;
  if (s < 0.6) return 3;
  if (s < 0.8) return 4;
  return 5;
}

export function nbDus(items, etat, maintenant = Date.now()) { return itemsDus(items, etat, maintenant).length; }

/** Calibration métacognitive : taux de réussite par niveau de confiance (1 = je devine, 3 = sûr). */
export function calibration(etat) {
  const tot = [[0, 0], [0, 0], [0, 0]];
  for (const e of Object.values(etat.items)) if (e.conf) for (let k = 0; k < 3; k++) { tot[k][0] += e.conf[k][0]; tot[k][1] += e.conf[k][1]; }
  return tot.map(([n, ok]) => ({ n, taux: n ? ok / n : null }));
}

export function statsGlobales(etat, items) {
  const vus = items.filter(i => etat.items[i.id]?.s);
  const tentatives = vus.reduce((s, i) => s + (etat.items[i.id].n || 0), 0);
  const justes = vus.reduce((s, i) => s + (etat.items[i.id].ok || 0), 0);
  const ms = Object.values(etat.jours).reduce((s, j) => s + (j.ms || 0), 0);
  const stades = [0, 0, 0, 0, 0, 0];
  for (const i of items) stades[stade(etat.items[i.id])]++;
  return { total: items.length, vus: vus.length, tentatives, justes, taux: tentatives ? justes / tentatives : 0, minutes: Math.round(ms / 60000), stades, dus: nbDus(items, etat), jours: Object.keys(etat.jours).length };
}

export { NOTES };
