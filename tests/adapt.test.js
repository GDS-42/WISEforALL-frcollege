import { test } from "node:test";
import assert from "node:assert/strict";
import { probaReussite, majElo, forceItem, pertinence, ELO_DEPART } from "../src/adapt.js";

test("probabilité Elo symétrique", () => {
  assert.equal(probaReussite(1200, 1200), 0.5);
  assert.ok(probaReussite(1400, 1200) > 0.7);
  assert.ok(probaReussite(1000, 1200) < 0.3);
});

test("mise à jour : un succès monte, un échec descend, K décroît avec n", () => {
  const a = majElo({ elo: ELO_DEPART, n: 0 }, true, 1200);
  const b = majElo({ elo: ELO_DEPART, n: 0 }, false, 1200);
  assert.ok(a.elo > ELO_DEPART && b.elo < ELO_DEPART);
  const c = majElo({ elo: ELO_DEPART, n: 50 }, true, 1200);
  assert.ok(c.elo - ELO_DEPART < a.elo - ELO_DEPART);
});

test("force d'un item selon difficulté et historique", () => {
  assert.ok(forceItem({ difficulte: 1 }) < forceItem({ difficulte: 2 }) && forceItem({ difficulte: 2 }) < forceItem({ difficulte: 3 }));
  assert.ok(forceItem({ difficulte: 2 }, { reps: 4, lapses: 4 }) > forceItem({ difficulte: 2 }, { reps: 4, lapses: 0 }));
});

test("pertinence maximale quand P ≈ cible", () => {
  // Avec θ = 1200 : un item de force ~1030 donne P ≈ 0.72
  const p1 = pertinence(1200, 1030), p2 = pertinence(1200, 1420), p3 = pertinence(1200, 700);
  assert.ok(p1 > p2 && p1 > p3);
});
