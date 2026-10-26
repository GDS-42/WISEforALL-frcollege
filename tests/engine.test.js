import { test } from "node:test";
import assert from "node:assert/strict";
import { construireSession, enregistrerReponse, cloreSession, maitrise, stadeChapitre, entrelacer, calibration } from "../src/engine.js";
import { creerStore, etatVierge, chargerProfil, VERSION_ETAT } from "../src/store.js";

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

test("découvrir : rien d'utile à revoir le jour même → séance vide (pas de questions réussies resservies)", () => {
  const mod = faireModule(), chap = mod.chapitres[0];
  const store = creerStore(etatVierge({ id: "t4", prenom: "T", niveau: "6e" }));
  const t0 = Date.now();
  for (const it of chap.items) enregistrerReponse(store, it, { juste: true, confiance: 2, dureeMs: 4000 }, t0);
  const s = construireSession({ type: "decouvrir", etat: store.etat, chapitre: chap, modules: [mod], n: 10, maintenant: t0 + 60000 });
  assert.equal(s.items.length, 0);
  // Une question ratée revient en tête, même avant son échéance (10 min).
  enregistrerReponse(store, chap.items[3], { juste: false, confiance: 2, dureeMs: 4000 }, t0 + 60000);
  const s2 = construireSession({ type: "decouvrir", etat: store.etat, chapitre: chap, modules: [mod], n: 10, maintenant: t0 + 120000 });
  assert.deepEqual(s2.items.map(i => i.id), [chap.items[3].id]);
});

test("libre : questions déjà vues seulement, ratées d'abord, sans doublon", () => {
  const mod = faireModule(), chap = mod.chapitres[0];
  const store = creerStore(etatVierge({ id: "t5", prenom: "T", niveau: "6e" }));
  const t0 = Date.now();
  for (const it of chap.items.slice(0, 6)) enregistrerReponse(store, it, { juste: true, confiance: 2, dureeMs: 4000 }, t0);
  enregistrerReponse(store, chap.items[4], { juste: false, confiance: 2, dureeMs: 4000 }, t0);
  const s = construireSession({ type: "libre", etat: store.etat, chapitre: chap, modules: [mod], n: 10, maintenant: t0 + 60000 });
  assert.equal(s.items.length, 6);
  assert.equal(new Set(s.items.map(i => i.id)).size, 6);
  assert.equal(s.items[0].id, chap.items[4].id);
  assert.ok(s.items.every(i => store.etat.items[i.id]?.s));
});

test("journées travaillées : une par journée (bascule à 4 h), et reconstituées pour un ancien profil", () => {
  const mod = faireModule(), chap = mod.chapitres[0];
  const store = creerStore(etatVierge({ id: "t6", prenom: "T", niveau: "6e" }));
  const soir = new Date(2026, 9, 26, 22, 0, 0).getTime(), nuit = new Date(2026, 9, 27, 2, 0, 0).getTime(), matin = new Date(2026, 9, 27, 9, 0, 0).getTime();
  enregistrerReponse(store, chap.items[0], { juste: true }, soir);
  enregistrerReponse(store, chap.items[1], { juste: true }, nuit);   // même journée que la soirée
  enregistrerReponse(store, chap.items[2], { juste: true }, matin);  // après le sommeil : nouvelle journée
  assert.deepEqual(store.etat.chapitres[chap.id].jours, ["2026-10-26", "2026-10-27"]);
  // Ancien profil (version 2) : journées tirées de la dernière révision des questions et du journal.
  const ancien = etatVierge({ id: "vieux", prenom: "V", niveau: "6e" });
  ancien.version = 2; delete ancien.chapitres;
  ancien.items[chap.items[0].id] = { s: 3, last: new Date(2026, 9, 1, 15).getTime() };
  ancien.items[chap.items[1].id] = { s: 3, last: new Date(2026, 9, 5, 15).getTime() };
  ancien.journal.push({ t: new Date(2026, 9, 3, 15).getTime(), chapitre: chap.id, type: "decouvrir", n: 8, ok: 7 });
  localStorage.setItem("eclore:profil:vieux", JSON.stringify(ancien));
  const migre = chargerProfil("vieux");
  assert.equal(migre.version, VERSION_ETAT);
  assert.deepEqual(migre.chapitres[chap.id].jours, ["2026-10-01", "2026-10-03", "2026-10-05"]);
});
