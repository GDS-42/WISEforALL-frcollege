// ÉCLORE — Planificateur de répétition espacée.
// Implémentation compacte de FSRS (Free Spaced Repetition Scheduler, v4.5),
// l'état de l'art ouvert en matière de mémorisation à long terme.
// Chaque item a un état mémoire : stabilité S (jours), difficulté D (1..10).
// La rétrievabilité R(t) = (1 + t / (9·S))^(-1) décroît avec le temps écoulé t.
// On replanifie pour une rétention cible de 90 %.

export const NOTES = { ENCORE: 1, DIFFICILE: 2, BIEN: 3, FACILE: 4 };

// Paramètres par défaut FSRS-4.5
const w = [0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61];
const JOUR = 86400000;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export function retrievabilite(S, joursEcoules) {
  if (!S || S <= 0) return 0;
  return Math.pow(1 + joursEcoules / (9 * S), -1);
}

function stabiliteInitiale(note) { return Math.max(0.1, w[note - 1]); }
function difficulteInitiale(note) { return clamp(w[4] - (note - 3) * w[5], 1, 10); }

function nouvelleDifficulte(D, note) {
  const d = D - w[6] * (note - 3);
  return clamp(w[7] * difficulteInitiale(3) + (1 - w[7]) * d, 1, 10);
}

function stabiliteApresSucces(D, S, R, note) {
  const bonusDifficile = note === NOTES.DIFFICILE ? w[15] : 1;
  const bonusFacile = note === NOTES.FACILE ? w[16] : 1;
  return S * (Math.exp(w[8]) * (11 - D) * Math.pow(S, -w[9]) * (Math.exp(w[10] * (1 - R)) - 1) * bonusDifficile * bonusFacile + 1);
}

function stabiliteApresOubli(D, S, R) {
  return Math.min(S, w[11] * Math.pow(D, -w[12]) * (Math.pow(S + 1, w[13]) - 1) * Math.exp(w[14] * (1 - R)));
}

export function intervalle(S, retention = 0.9) {
  // I tel que R(I) = retention  →  I = 9·S·(1/retention − 1)
  return Math.max(1, Math.round(9 * S * (1 / retention - 1)));
}

/**
 * Met à jour l'état mémoire d'un item.
 * @param {object|null} etat  { s, d, due, reps, lapses, last, etape }
 * @param {number} note        1..4
 * @param {number} maintenant  timestamp ms
 */
export function reviser(etat, note, maintenant = Date.now()) {
  const n = clamp(Math.round(note), 1, 4);
  if (!etat || !etat.s) {
    // Première rencontre.
    const s = stabiliteInitiale(n), d = difficulteInitiale(n);
    const enApprentissage = n === NOTES.ENCORE || n === NOTES.DIFFICILE;
    return {
      s, d, reps: 1, lapses: n === NOTES.ENCORE ? 1 : 0, last: maintenant,
      // « Encore » et « Difficile » : on revoit dans la session (étape d'apprentissage), sinon demain ou plus.
      due: enApprentissage ? maintenant + 10 * 60000 : maintenant + intervalle(s) * JOUR,
      etape: enApprentissage ? 1 : 0,
    };
  }
  const jours = Math.max(0, (maintenant - etat.last) / JOUR);
  const R = retrievabilite(etat.s, jours);
  const d = nouvelleDifficulte(etat.d, n);
  let s, due, etape = 0, lapses = etat.lapses || 0;
  if (n === NOTES.ENCORE) {
    s = stabiliteApresOubli(etat.d, etat.s, R);
    lapses += 1;
    due = maintenant + 10 * 60000; // relecture dans la session
    etape = 1;
  } else {
    s = stabiliteApresSucces(etat.d, etat.s, R, n);
    if (etat.etape && n === NOTES.DIFFICILE) { due = maintenant + 20 * 60000; etape = 1; }
    else due = maintenant + intervalle(s) * JOUR;
  }
  return { s: Math.max(0.1, s), d, reps: (etat.reps || 0) + 1, lapses, last: maintenant, due, etape };
}

/** Rétrievabilité actuelle (0..1) ; 0 si jamais vu. */
export function memoireActuelle(etat, maintenant = Date.now()) {
  if (!etat || !etat.s) return 0;
  return retrievabilite(etat.s, Math.max(0, (maintenant - etat.last) / JOUR));
}

/** Convertit un résultat de réponse (juste/faux, confiance, indice, temps) en note FSRS. */
export function noteDepuisReponse({ juste, confiance = 2, indice = false, dureeMs = 0, autoNote = null }) {
  if (autoNote) return autoNote; // cartes flash auto-évaluées
  if (!juste) return NOTES.ENCORE;
  if (indice) return NOTES.DIFFICILE;
  if (confiance <= 1) return NOTES.DIFFICILE;            // « je devine » mais juste : fragile
  if (confiance >= 3 && dureeMs > 0 && dureeMs < 8000) return NOTES.FACILE; // sûr et rapide
  return NOTES.BIEN;
}

/** Stade de la plante (0..5) à partir de l'état mémoire : graine, pousse, bourgeon, fleur, floraison, arbre. */
export function stade(etat, maintenant = Date.now()) {
  if (!etat || !etat.s) return 0;
  const R = memoireActuelle(etat, maintenant);
  const S = etat.s;
  if (R < 0.5) return 1;                 // la plante a soif : à arroser
  if (S < 2) return 1;
  if (S < 7) return 2;
  if (S < 21) return 3;
  if (S < 60) return 4;
  return 5;
}
