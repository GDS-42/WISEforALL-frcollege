import { test } from "node:test";
import assert from "node:assert/strict";
import { reviser, retrievabilite, intervalle, noteDepuisReponse, NOTES, stade, memoireActuelle } from "../src/scheduler.js";

const JOUR = 86400000;

test("retrievabilité décroît avec le temps et vaut 1 à t=0", () => {
  assert.equal(retrievabilite(10, 0), 1);
  assert.ok(retrievabilite(10, 5) > retrievabilite(10, 20));
  assert.ok(Math.abs(retrievabilite(10, 10) - 0.9) < 0.01, "R(S)=0.9 à t=S");
});

test("intervalle ≈ stabilité pour une rétention de 90 %", () => {
  assert.equal(intervalle(10), 10);
  assert.equal(intervalle(0.3), 1);
});

test("première révision : Bien planifie à ≥ 1 jour, Encore replanifie dans la session", () => {
  const t0 = Date.now();
  const bien = reviser(null, NOTES.BIEN, t0);
  assert.ok(bien.due - t0 >= JOUR);
  assert.equal(bien.reps, 1);
  const encore = reviser(null, NOTES.ENCORE, t0);
  assert.ok(encore.due - t0 < 3600000);
  assert.equal(encore.lapses, 1);
});

test("les succès successifs allongent les intervalles, un oubli les raccourcit", () => {
  let t = Date.now();
  let e = reviser(null, NOTES.BIEN, t);
  const s1 = e.s;
  t = e.due; e = reviser(e, NOTES.BIEN, t);
  const s2 = e.s;
  t = e.due; e = reviser(e, NOTES.BIEN, t);
  const s3 = e.s;
  assert.ok(s2 > s1 && s3 > s2, `stabilités croissantes : ${s1} ${s2} ${s3}`);
  t = e.due; const oubli = reviser(e, NOTES.ENCORE, t);
  assert.ok(oubli.s < s3, "oubli → stabilité réduite");
  assert.equal(oubli.lapses, 1);
});

test("Facile donne une stabilité supérieure à Bien", () => {
  const t = Date.now();
  let a = reviser(null, NOTES.BIEN, t), b = reviser(null, NOTES.FACILE, t);
  assert.ok(b.s > a.s);
  a = reviser(a, NOTES.BIEN, a.due); b = reviser(b, NOTES.FACILE, b.due);
  assert.ok(b.s > a.s);
});

test("la difficulté reste bornée entre 1 et 10", () => {
  let e = reviser(null, NOTES.ENCORE);
  for (let i = 0; i < 40; i++) e = reviser(e, NOTES.ENCORE, e.last + JOUR);
  assert.ok(e.d <= 10 && e.d >= 1);
  let f = reviser(null, NOTES.FACILE);
  for (let i = 0; i < 40; i++) f = reviser(f, NOTES.FACILE, f.due);
  assert.ok(f.d <= 10 && f.d >= 1);
});

test("conversion réponse → note", () => {
  assert.equal(noteDepuisReponse({ juste: false }), NOTES.ENCORE);
  assert.equal(noteDepuisReponse({ juste: true, indice: true }), NOTES.DIFFICILE);
  assert.equal(noteDepuisReponse({ juste: true, confiance: 1 }), NOTES.DIFFICILE);
  assert.equal(noteDepuisReponse({ juste: true, confiance: 2 }), NOTES.BIEN);
  assert.equal(noteDepuisReponse({ juste: true, confiance: 3, dureeMs: 3000 }), NOTES.FACILE);
  assert.equal(noteDepuisReponse({ juste: true, confiance: 3, dureeMs: 30000 }), NOTES.BIEN);
  assert.equal(noteDepuisReponse({ juste: true, autoNote: 4 }), 4);
});

test("stade de plante : 0 jamais vu, monte avec la stabilité, retombe si la mémoire s'estompe", () => {
  assert.equal(stade(null), 0);
  const t = Date.now();
  const e = { s: 30, d: 5, last: t, due: t + 30 * JOUR, reps: 5, lapses: 0 };
  assert.equal(stade(e, t), 4);
  assert.equal(stade(e, t + 400 * JOUR), 1, "plante assoiffée");
  assert.ok(memoireActuelle(e, t + 400 * JOUR) < 0.5);
});
