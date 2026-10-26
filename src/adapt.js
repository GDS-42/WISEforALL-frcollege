// ÉCLORE — Adaptation de la difficulté (modèle Elo par compétence).
// L'élève a un niveau θ par compétence ; chaque item a une « force » selon sa difficulté déclarée,
// ajustée par l'historique. La probabilité de réussite P = 1 / (1 + 10^((d − θ)/400)).
// On propose en priorité des items dont P est dans la « zone de confort productif » (≈ 0,6 à 0,85),
// ce qui correspond à la zone proximale de développement et aux « difficultés désirables ».

export const ELO_DEPART = 1200;
const FORCE_PAR_DIFFICULTE = { 1: 1000, 2: 1200, 3: 1420 };

export function forceItem(item, etatItem) {
  const base = FORCE_PAR_DIFFICULTE[item.difficulte] || 1200;
  // Un item souvent raté par cet élève devient « plus fort » pour lui (max ±150).
  if (!etatItem || !etatItem.reps) return base;
  const taux = (etatItem.lapses || 0) / etatItem.reps;
  return base + Math.round((taux - 0.25) * 200);
}

export function probaReussite(theta, force) {
  return 1 / (1 + Math.pow(10, (force - theta) / 400));
}

export function majElo(comp, juste, force) {
  const c = comp || { elo: ELO_DEPART, n: 0 };
  const K = c.n < 5 ? 48 : c.n < 20 ? 32 : 20;
  const P = probaReussite(c.elo, force);
  return { elo: Math.round(c.elo + K * ((juste ? 1 : 0) - P)), n: c.n + 1 };
}

/** Score de pertinence d'un nouvel item pour la zone de confort productif (plus haut = mieux). */
export function pertinence(theta, force, cible = 0.72) {
  const P = probaReussite(theta, force);
  return 1 - Math.abs(P - cible);
}

/** Niveau lisible : 0..4 (en découverte → expert). */
export function paliersElo(elo) {
  if (elo < 1050) return 0;
  if (elo < 1200) return 1;
  if (elo < 1350) return 2;
  if (elo < 1500) return 3;
  return 4;
}
