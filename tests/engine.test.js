import { test } from "node:test";
import assert from "node:assert/strict";
import { construireSession, enregistrerReponse, cloreSession, maitrise, stadeChapitre, entrelacer, calibration } from "../src/engine.js";
import { creerStore, etatVierge } from "../src/store.js";

// Store de test sans localStorage.
globalThis.localStorage = { _m: {}, getItem(k) { return this._m[k] ?? null; }, setItem(k, v) { this._m[k] = v; }, removeItem(k) { delete this._m[k]; } };

function faireModule() {
  const chapitres = [];
  for (let c = 0; c < 3; c++) {
    const id = `6e-maths-0${c + 1}-test`;
    const items = [];
    for (let k = 0; k < 12; k++) items.push({ id: `${id}-q${k}`, type: "vf", q: `Q${k}`, reponse: true, explication: "x", difficulte: 1 + (k % 3), competence: `${id}-c${k % 2}`, chapitre: id, module: "6e-maths", matiere: "maths", niveau: "6e" });
    chapitres.push({ id, titre: `Chap ${c}`, items, competences: [{ id: `${id}-c0` }, { id: `${id}-c1` }] });
  }
  return { id: "6e-maths", niveau: "6e", matiere: "maths", chapitres };
}

test("entrelacer alterne les listes", () => {
  assert.deepEqual(entrelacer([[1, 2, 3], ["a", "b"]]), ["a", 1, "b", 2, 3]);
});

test("session découverte : n items, nouveaux d'abord, couvre les compétences", () => {
  const mod = faireModule();
  const etat = etatVierge({ id: "t", prenom: "T", niveau: "6e" });
  const s = construireSession({ type: "decouvrir", etat, chapitre: mod.chapitres[0], modules: [mod], n: 10 });
  assert.equal(s.items.length, 10);
  assert.equal(new Set(s.items.map(i => i.id)).size, 10, "pas de doublon");
  const comps = new Set(s.items.map(i => i.competence));
  assert.equal(comps.size, 2);
});

test("réponses → mémoire, Elo, lumens, journée ; puis révisions dues apparaissent plus tard", () => {
  const mod = faireModule();
  const store = creerStore(etatVierge({ id: "t2", prenom: "T", niveau: "6e" }));
  const t0 = Date.now();
  const s = construireSession({ type: "decouvrir", etat: store.etat, chapitre: mod.chapitres[0], modules: [mod], n: 8, maintenant: t0 });
  for (const it of s.items) {
    const r = enregistrerReponse(store, it, { juste: true, confiance: 2, dureeMs: 4000 }, t0);
    s.reponses.push({ id: it.id, juste: true, note: r.note });
    assert.ok(r.lumens >= 2);
  }
  cloreSession(store, s, t0 + 60000);
  const e = store.etat;
  assert.equal(Object.keys(e.items).length, 8);
  assert.ok(e.lumens >= 8 * 2 + 5);
  assert.ok(e.comp[`6e-maths-01-test-c0`].elo > 1200);
  assert.equal(e.journal.length, 1);
  assert.equal(e.serie.actuelle, 1);
  assert.ok(maitrise(mod.chapitres[0].items, e, t0) > 0);
  assert.ok(stadeChapitre(mod.chapitres[0], e, t0) >= 1);
  // Dans 10 jours, ces items sont dus → session « arroser » les propose.
  const plusTard = t0 + 10 * 86400000;
  const arroser = construireSession({ type: "arroser", etat: e, modules: [mod], n: 12, maintenant: plusTard });
  assert.ok(arroser.items.length >= 8);
});

test("défi et diagnostic produisent des sessions non vides et sans doublon", () => {
  const mod = faireModule();
  const etat = etatVierge({ id: "t3", prenom: "T", niveau: "6e" });
  const d = construireSession({ type: "defi", etat, modules: [mod], n: 10 });
  assert.equal(d.items.length, 10);
  const g = construireSession({ type: "diagnostic", etat, modules: [mod], n: 6 });
  assert.ok(g.items.length >= 3);
  assert.equal(new Set(g.items.map(i => i.id)).size, g.items.length);
});

test("calibration agrège par niveau de confiance", () => {
  const mod = faireModule();
  const store = creerStore(etatVierge({ id: "t4", prenom: "T", niveau: "6e" }));
  const it = mod.chapitres[0].items[0];
  enregistrerReponse(store, it, { juste: true, confiance: 3 });
  enregistrerReponse(store, it, { juste: false, confiance: 3 });
  const c = calibration(store.etat);
  assert.equal(c[2].n, 2); assert.equal(c[2].taux, 0.5);
});
