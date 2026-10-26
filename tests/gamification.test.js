import { test } from "node:test";
import assert from "node:assert/strict";
import * as G from "../src/gamification.js";
import { etatVierge, creerStore, cleJournee } from "../src/store.js";
import { enregistrerReponse, cloreSession } from "../src/engine.js";

globalThis.localStorage = { _m: {}, getItem(k) { return this._m[k] ?? null; }, setItem(k, v) { this._m[k] = v; }, removeItem(k) { delete this._m[k]; } };

const JOUR = 86400000;
const T0 = new Date(2026, 9, 26, 17, 0, 0).getTime(); // date locale : indépendant du fuseau
const vierge = (graine = 42) => etatVierge({ id: "t", prenom: "T", niveau: "6e", graine });

function faireChapitre(id = "6e-maths-01-test", nComp = 3, nItems = 18) {
  const types = ["qcm", "vf", "num", "flash", "trous", "ordre"];
  const items = [];
  for (let k = 0; k < nItems; k++) items.push({ id: `${id}-q${String(k).padStart(2, "0")}`, type: types[k % types.length], difficulte: 1 + (k % 3), competence: `${id}-c${k % nComp}`, chapitre: id, matiere: "maths" });
  return { id, titre: "Test", items, competences: Array.from({ length: nComp }, (_, i) => ({ id: `${id}-c${i}` })) };
}
const reponse = (o = {}) => ({ type: "reponse", juste: true, difficulte: 2, matiere: "maths", chapitre: "6e-maths-01-test", confiance: 2, dejaVu: false, rattrapage: false, ...o });
/** Imite le moteur : crédite la base dans etat.lumens, puis prévient la gamification. */
function repondre(etat, o = {}, t = T0) {
  const e = reponse(o);
  const base = e.rattrapage ? 0 : 1 + (e.juste ? 1 : 0) + (e.juste && e.difficulte === 3 ? 1 : 0);
  etat.lumens += base;
  return G.appliquerEvenement(etat, { ...e, lumens: base }, t);
}
function forcerQuetes(etat, ids, t = T0) {
  G.quetesDuJour(etat, t);
  const g = etat.gamif;
  g.quetes.liste = ids.map(id => { const m = G.VIVIER_QUETES.find(q => q.id === id); return { id, libelle: m.libelle, objectif: m.objectif ?? 15, progres: 0, recompense: m.recompense, reclamee: false }; });
}

// ─── Niveaux ──────────────────────────────────────────────────────────────────────────────────
test("NIVEAUX : 20 niveaux botaniques, seuils croissants, bornes", () => {
  assert.equal(G.NIVEAUX.length, 20);
  assert.equal(G.NIVEAUX[0].nom, "Graine"); assert.equal(G.NIVEAUX[0].xp, 0);
  assert.equal(G.NIVEAUX[18].nom, "Chêne centenaire"); assert.equal(G.NIVEAUX[19].nom, "Forêt");
  assert.equal(new Set(G.NIVEAUX.map(n => n.nom)).size, 20);
  for (let i = 1; i < 20; i++) {
    assert.ok(G.NIVEAUX[i].xp > G.NIVEAUX[i - 1].xp);
    if (i > 1) assert.ok(G.NIVEAUX[i].xp - G.NIVEAUX[i - 1].xp >= G.NIVEAUX[i - 1].xp - G.NIVEAUX[i - 2].xp, "écarts croissants");
  }
  assert.ok(G.NIVEAUX[1].xp <= 40, "niveau 2 en une séance");
  assert.deepEqual(G.niveauDepuisXp(0), { niveau: 1, nom: "Graine", xpNiveau: 0, xpSuivant: G.NIVEAUX[1].xp, progression: 0 });
  assert.equal(G.niveauDepuisXp(-50).niveau, 1);
  assert.equal(G.niveauDepuisXp(NaN).niveau, 1);
  assert.equal(G.niveauDepuisXp(G.NIVEAUX[4].xp).niveau, 5);
  assert.equal(G.niveauDepuisXp(G.NIVEAUX[4].xp - 1).niveau, 4);
  const max = G.niveauDepuisXp(1e9);
  assert.equal(max.niveau, 20); assert.equal(max.xpSuivant, null); assert.equal(max.progression, 1);
  const mi = G.niveauDepuisXp((G.NIVEAUX[2].xp + G.NIVEAUX[3].xp) / 2);
  assert.ok(Math.abs(mi.progression - 0.5) < 1e-9);
});

test("courbe : niveau 2 dès la 1re séance, niveau 20 en 9 à 12 mois à 15 questions/jour", () => {
  const etat = vierge(7);
  let s = 11; const rnd = () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
  let jour20 = null, niveauJour1 = 0;
  for (let d = 0; d < 400 && !jour20; d++) {
    const t = T0 + d * JOUR;
    for (let k = 0; k < 15; k++) repondre(etat, { juste: rnd() < 0.8, difficulte: 1 + Math.floor(rnd() * 3), matiere: ["maths", "svt", "histoire"][k % 3], confiance: 1 + Math.floor(rnd() * 3), dejaVu: d > 0, chapitre: `c${Math.floor(d / 6)}` }, t);
    etat.lumens += 5; // bonus de fin de séance du moteur
    G.appliquerEvenement(etat, { type: "sessionFin", seance: "decouvrir", n: 15, ok: 12 }, t);
    for (const q of G.quetesDuJour(etat, t)) G.reclamerQuete(etat, q.id);
    if (d === 0) niveauJour1 = G.niveauDepuisXp(etat.gamif.xp).niveau;
    if (G.niveauDepuisXp(etat.gamif.xp).niveau === 20) jour20 = d + 1;
  }
  assert.ok(niveauJour1 >= 2, `niveau ${niveauJour1} après une séance`);
  assert.ok(jour20 >= 270 && jour20 <= 365, `niveau 20 atteint au jour ${jour20}`);
});

// ─── Combo ────────────────────────────────────────────────────────────────────────────────────
test("combo : paliers et multiplicateurs", () => {
  const cas = [[0, 1, "Brise"], [2, 1, "Brise"], [3, 1.5, "Rosée"], [5, 1.5, "Rosée"], [6, 2, "Pollen"], [9, 2, "Pollen"], [10, 3, "Floraison"], [500, 3, "Floraison"], [-4, 1, "Brise"], [NaN, 1, "Brise"]];
  for (const [n, m, nom] of cas) { const c = G.combo(n); assert.equal(c.multiplicateur, m, `série ${n}`); assert.equal(c.nom, nom); }
  assert.equal(G.combo(4).prochain, 6); assert.equal(G.combo(12).prochain, null);
});

test("combo en jeu : bonus multiplié, notification à chaque palier, erreur remet à 0 sans rien retirer", () => {
  const etat = vierge();
  const paliers = [];
  for (let i = 1; i <= 10; i++) {
    const r = repondre(etat, { juste: true, difficulte: 1 }); // base 2
    const attendu = i < 3 ? 0 : i < 6 ? 1 : i < 10 ? 2 : 4;
    assert.equal(r.lumens, attendu, `réponse ${i}`);
    paliers.push(...r.notifications.filter(n => n.type === "combo").map(n => n.serie));
  }
  assert.deepEqual(paliers, [3, 6, 10]);
  const avant = etat.lumens, xpAvant = etat.gamif.xp;
  const r = repondre(etat, { juste: false });
  assert.equal(etat.gamif.combo.serie, 0);
  assert.equal(r.lumens, 0);
  assert.ok(etat.lumens >= avant && etat.gamif.xp >= xpAvant, "rien n'est retiré");
  assert.equal(etat.gamif.combo.meilleure, 10);
  // Le rattrapage ne casse ni ne nourrit la série ; la fin de séance la remet à zéro.
  repondre(etat, {}); repondre(etat, {});
  repondre(etat, { juste: false, rattrapage: true });
  assert.equal(etat.gamif.combo.serie, 2);
  G.appliquerEvenement(etat, { type: "sessionFin", seance: "arroser", n: 12, ok: 9 }, T0);
  assert.equal(etat.gamif.combo.serie, 0);
});

// ─── Pas de double comptage ───────────────────────────────────────────────────────────────────
test("XP = lumens gagnés partout, une seule fois ; dépenser ne fait pas perdre d'XP", () => {
  const etat = vierge();
  G.initialiser(etat);
  let credits = 0;
  for (let i = 0; i < 8; i++) {
    const avant = etat.lumens;
    const r = repondre(etat, { juste: i !== 4, difficulte: 3 });
    credits += etat.lumens - avant;
    assert.equal(etat.lumens - avant, (i !== 4 ? 3 : 1) + r.lumens, "base du moteur + bonus, sans doublon");
  }
  assert.equal(etat.gamif.xp, credits);
  assert.equal(G.synchroniserXp(etat), 0); assert.equal(G.synchroniserXp(etat), 0);
  assert.equal(etat.gamif.xp, credits);
  etat.lumens += 500; // gains extérieurs (moteur) non encore vus
  assert.equal(G.synchroniserXp(etat), 500);
  const xp = etat.gamif.xp;
  assert.equal(G.acheter(etat, "lanterne").ok, true);
  assert.equal(etat.gamif.xp, xp);
  assert.equal(G.synchroniserXp(etat), 0, "la dépense n'est pas recomptée");
  etat.lumens += 3; G.synchroniserXp(etat);
  assert.equal(etat.gamif.xp, xp + 3);
});

test("intégration avec le vrai moteur : etat.lumens = XP − dépenses", () => {
  const store = creerStore(vierge());
  const chap = faireChapitre();
  G.initialiser(store.etat);
  const session = { type: "decouvrir", chapitre: chap.id, items: chap.items.slice(0, 8), debut: T0, reponses: [], rattrapages: 0 };
  for (const [i, it] of session.items.entries()) {
    const juste = i % 4 !== 3;
    const { lumens } = enregistrerReponse(store, it, { juste, confiance: 2, dureeMs: 3000 }, T0 + i * 1000);
    session.reponses.push({ id: it.id, juste });
    store.maj(e => G.appliquerEvenement(e, { type: "reponse", juste, difficulte: it.difficulte, matiere: it.matiere, chapitre: it.chapitre, confiance: 2, dejaVu: false, rattrapage: false, lumens }, T0 + i * 1000));
  }
  cloreSession(store, session, T0 + 60000);
  store.maj(e => G.appliquerEvenement(e, { type: "sessionFin", seance: "decouvrir", n: 8, ok: 6 }, T0 + 60000));
  const e = store.etat;
  assert.ok(e.gamif.xp > 0);
  assert.equal(e.gamif.xp, e.lumens, "aucune dépense : XP = solde");
  e.lumens += 100; // lumens du moteur pas encore synchronisés
  assert.equal(G.acheter(e, "banc").ok, true);
  assert.equal(e.gamif.xp - e.lumens, 45);
});

// ─── Migration ────────────────────────────────────────────────────────────────────────────────
test("initialiser : migration d'un ancien profil, idempotence, complétion des champs", () => {
  const etat = vierge();
  etat.lumens = 320;
  etat.items = { "6e-maths-01-test-q01": { s: 3, due: T0 + JOUR, last: T0, n: 2, ok: 1 }, "6e-svt-02-x-q04": { s: 1, due: T0, last: T0, n: 1, ok: 1 } };
  etat.journal = [{ t: T0, n: 6, ok: 4, type: "decouvrir", chapitre: "6e-histoire-03-y" }];
  const g = G.initialiser(etat);
  assert.equal(g.xp, 320); assert.equal(g.lumensSync, 320);
  assert.ok(g.chapitresVus["6e-maths-01-test"] && g.chapitresVus["6e-svt-02-x"] && g.chapitresVus["6e-histoire-03-y"]);
  assert.equal(g.niveauVu, G.niveauDepuisXp(320).niveau);
  // Pas d'annonce rétroactive de niveau à la migration.
  const r = G.appliquerEvenement(etat, { type: "verifieCours", chapitre: "x", juste: false }, T0);
  assert.equal(r.notifications.filter(n => n.type === "niveau").length, 0);
  g.xp = 999; g.combo.serie = 4;
  const g2 = G.initialiser(etat);
  assert.equal(g2, g); assert.equal(g2.xp, 999); assert.equal(g2.combo.serie, 4);
  // Profil partiellement migré : champs manquants complétés.
  const e3 = vierge(); e3.gamif = { xp: 10 };
  const g3 = G.initialiser(e3);
  assert.equal(g3.xp, 10); assert.ok(g3.quetes && g3.herbier && g3.jardin && g3.combo && g3.cours);
  // Profil sans lumens valides.
  const e4 = vierge(); delete e4.lumens;
  assert.equal(G.initialiser(e4).xp, 0); assert.equal(e4.lumens, 0);
});

// ─── Quêtes ───────────────────────────────────────────────────────────────────────────────────
test("vivier : au moins 14 modèles, identifiants uniques", () => {
  assert.ok(G.VIVIER_QUETES.length >= 14);
  assert.equal(new Set(G.VIVIER_QUETES.map(q => q.id)).size, G.VIVIER_QUETES.length);
});

test("quêtes du jour : 3, forme exacte, déterministes, stables dans la journée, variées", () => {
  const a = G.quetesDuJour(vierge(42), T0), b = G.quetesDuJour(vierge(42), T0 + 3600000);
  assert.equal(a.length, 3);
  assert.deepEqual(a, b, "même date et même graine → mêmes quêtes");
  for (const q of a) {
    assert.deepEqual(Object.keys(q).sort(), ["id", "libelle", "objectif", "progres", "recompense", "reclamee"].sort());
    assert.equal(q.progres, 0); assert.equal(q.reclamee, false); assert.ok(q.objectif > 0 && q.recompense > 0);
  }
  const familles = a.map(q => G.VIVIER_QUETES.find(m => m.id === q.id).famille);
  assert.equal(new Set(familles).size, 3);
  const etat = vierge(42);
  const l1 = G.quetesDuJour(etat, T0);
  assert.equal(G.quetesDuJour(etat, T0 + 1000), l1, "renvoie la liste stockée");
  const vus = new Set(); let diffGraine = 0;
  for (let d = 0; d < 40; d++) {
    const x = G.quetesDuJour(vierge(42), T0 + d * JOUR).map(q => q.id).join();
    const y = G.quetesDuJour(vierge(43), T0 + d * JOUR).map(q => q.id).join();
    x.split(",").forEach(id => vus.add(id));
    if (x !== y) diffGraine++;
  }
  assert.ok(vus.size >= 10, `${vus.size} modèles différents en 40 jours`);
  assert.ok(diffGraine > 10, "la graine du profil change le tirage");
});

test("quêtes adaptées : pas d'arrosage sans révision due, pas de quête impossible", () => {
  for (let d = 0; d < 60; d++) {
    const ids = G.quetesDuJour(vierge(d), T0 + d * JOUR, { coursDisponibles: false, matieres: 2 }).map(q => q.id);
    assert.ok(!ids.some(id => id.startsWith("arroser")), "rien à arroser");
    assert.ok(!ids.some(id => ["cours-lu", "sections-3", "verif-cours-2"].includes(id)), "pas de cours");
    assert.ok(!ids.includes("matieres-3") && !ids.includes("epreuve") && !ids.includes("defi") && !ids.includes("rattrapage-2"));
  }
  for (let d = 0; d < 40; d++) { const e = vierge(d); e.prefs.confiance = false; assert.ok(!G.quetesDuJour(e, T0 + d * JOUR).some(q => q.id === "devine")); }
  let arrosage = 0;
  for (let d = 0; d < 60; d++) {
    const e = vierge(d);
    for (let k = 0; k < 12; k++) e.items[`6e-maths-01-a-q${k}`] = { s: 2, due: T0 - JOUR, last: T0 - 3 * JOUR, n: 1, ok: 1 };
    const qs = G.quetesDuJour(e, T0 + d * JOUR);
    if (qs.some(q => q.id.startsWith("arroser"))) arrosage++;
  }
  assert.ok(arrosage > 0, "l'arrosage revient quand des plantes ont soif");
  const e = vierge(); e.prefs.objectifItems = 20;
  forcerQuetes(e, []);
  e.gamif.quetes.jour = null;
  for (let d = 0; d < 60; d++) { const q = G.quetesDuJour(e, T0 + d * JOUR).find(x => x.id === "objectif-jour"); if (q) { assert.equal(q.objectif, 20); assert.match(q.libelle, /20/); break; } }
});

test("progression des quêtes, notification unique, réclamation", () => {
  const etat = vierge();
  forcerQuetes(etat, ["difficiles-3", "matieres-3", "serie-5"]);
  repondre(etat, { difficulte: 3, matiere: "maths" });
  repondre(etat, { difficulte: 3, juste: false, matiere: "maths" });
  assert.equal(G.reclamerQuete(etat, "difficiles-3"), 0, "pas encore accomplie");
  repondre(etat, { difficulte: 3, matiere: "svt" });
  const r = repondre(etat, { difficulte: 3, matiere: "anglais" });
  const notes = r.notifications.filter(n => n.type === "quete").map(n => n.id).sort();
  assert.deepEqual(notes, ["difficiles-3", "matieres-3"]);
  assert.equal(repondre(etat, { difficulte: 3 }).notifications.filter(n => n.type === "quete" && n.id === "difficiles-3").length, 0);
  const q = etat.gamif.quetes.liste.find(x => x.id === "difficiles-3");
  assert.equal(q.progres, 3, "plafonné à l'objectif");
  const l0 = etat.lumens, x0 = etat.gamif.xp;
  assert.equal(G.reclamerQuete(etat, "difficiles-3"), q.recompense);
  assert.equal(etat.lumens - l0, q.recompense); assert.equal(etat.gamif.xp - x0, q.recompense);
  assert.equal(G.reclamerQuete(etat, "difficiles-3"), 0, "pas deux fois");
  assert.equal(G.reclamerQuete(etat, "inexistante"), 0);
  for (let i = 0; i < 3; i++) repondre(etat, {});
  assert.equal(etat.gamif.quetes.liste.find(x => x.id === "serie-5").progres, 5);
});

test("chaque type d'événement fait avancer sa quête", () => {
  const cas = [
    ["arroser-5", [reponse({ dejaVu: true })], 1],
    ["devine", [reponse({ confiance: 1, juste: false })], 1],
    ["rattrapage-2", [reponse({ rattrapage: true })], 1],
    ["nouveau-chapitre", [reponse({ chapitre: "6e-svt-09-z" }), reponse({ chapitre: "6e-svt-09-z" })], 1],
    ["cours-lu", [{ type: "coursLu", chapitre: "a" }], 1],
    ["sections-3", [{ type: "coursSection", chapitre: "a", index: 0, total: 4 }, { type: "coursSection", chapitre: "a", index: 0, total: 4 }, { type: "coursSection", chapitre: "a", index: 1, total: 4 }], 2],
    ["verif-cours-2", [{ type: "verifieCours", chapitre: "a", juste: true }, { type: "verifieCours", chapitre: "a", juste: false }], 1],
    ["defi", [{ type: "sessionFin", seance: "arroser", n: 10, ok: 8 }, { type: "sessionFin", seance: "defi", n: 10, ok: 8 }], 1],
    ["decouvrir", [{ type: "sessionFin", seance: "decouvrir", n: 6, ok: 5 }], 1],
    ["epreuve", [{ type: "epreuveFin", chapitre: "a", justes: 5, total: 10 }], 1],
    ["justes-10", [reponse(), reponse({ juste: false })], 1],
  ];
  for (const [id, evts, attendu] of cas) {
    const etat = vierge(); forcerQuetes(etat, [id]);
    for (const ev of evts) G.appliquerEvenement(etat, ev, T0);
    assert.equal(etat.gamif.quetes.liste[0].progres, attendu, id);
  }
});

test("une quête accomplie hier mais non réclamée est créditée au changement de jour", () => {
  const etat = vierge(); forcerQuetes(etat, ["cours-lu"]);
  G.appliquerEvenement(etat, { type: "coursLu", chapitre: "a" }, T0);
  const l0 = etat.lumens;
  G.quetesDuJour(etat, T0 + JOUR);
  assert.equal(etat.lumens - l0, G.VIVIER_QUETES.find(q => q.id === "cours-lu").recompense);
  G.quetesDuJour(etat, T0 + 2 * JOUR);
  assert.equal(etat.lumens - l0, G.VIVIER_QUETES.find(q => q.id === "cours-lu").recompense, "une seule fois");
});

// ─── Cours ────────────────────────────────────────────────────────────────────────────────────
test("cours : lecture complète récompensée une fois, vérifications récompensent l'effort", () => {
  const etat = vierge();
  assert.equal(G.appliquerEvenement(etat, { type: "coursLu", chapitre: "a" }, T0).lumens, G.LUMENS_COURS_LU);
  assert.equal(G.appliquerEvenement(etat, { type: "coursLu", chapitre: "a" }, T0).lumens, 0);
  assert.equal(G.appliquerEvenement(etat, { type: "verifieCours", chapitre: "a", juste: true }, T0).lumens, 2);
  assert.equal(G.appliquerEvenement(etat, { type: "verifieCours", chapitre: "a", juste: false }, T0).lumens, 1);
  G.appliquerEvenement(etat, { type: "coursSection", chapitre: "a", index: 2, total: 3 }, T0);
  G.appliquerEvenement(etat, { type: "coursSection", chapitre: "a", index: 0, total: 3 }, T0);
  assert.deepEqual(etat.gamif.cours.a.sections, [0, 2]);
  assert.equal(etat.gamif.xp, etat.lumens);
});

// ─── Herbier ──────────────────────────────────────────────────────────────────────────────────
test("herbier : cachée → esquisse → coloriée (garde-fous, célébrée une fois, permanente) → dorée", () => {
  const etat = vierge(); const chap = faireChapitre();
  G.initialiser(etat);
  assert.equal(G.etatPlanche(etat, chap, T0), "cachee");
  etat.items[chap.items[0].id] = { s: 0.4, due: T0, last: T0, n: 1, ok: 0 };
  assert.equal(G.etatPlanche(etat, chap, T0), "esquisse");
  assert.deepEqual(G.verifierPlanches(etat, [chap], T0), []);
  // Mémoire solide partout, mais tout travaillé en une seule journée : pas encore.
  for (const it of chap.items) etat.items[it.id] = { s: 30, d: 4, due: T0 + 20 * JOUR, last: T0, n: 3, ok: 3 };
  etat.chapitres[chap.id] = { jours: [cleJournee(T0)] };
  const c = G.conditionsPlanche(etat, chap, T0);
  assert.deepEqual(c.ok, { decouverte: true, racines: true, competences: true, jours: false, etendue: false });
  assert.equal(G.etatPlanche(etat, chap, T0), "esquisse");
  // Trois journées sur une semaine : coloriée.
  const T7 = T0 + 7 * JOUR;
  etat.chapitres[chap.id].jours = [T0, T0 + 3 * JOUR, T7].map(t => cleJournee(t));
  for (const it of chap.items) etat.items[it.id].last = T7;
  assert.equal(G.conditionsPlanche(etat, chap, T7).toutes, true);
  assert.equal(G.etatPlanche(etat, chap, T7), "coloriee");
  assert.deepEqual(G.verifierPlanches(etat, [chap], T7), [chap.id]);
  assert.deepEqual(G.verifierPlanches(etat, [chap], T7), [], "célébrée une seule fois");
  assert.equal(G.etatPlanche(etat, chap, T7 + 400 * JOUR), "coloriee", "l'oubli ne décolore pas l'herbier");
  // L'épreuve s'ouvre la journée suivante, pas dans la séance qui colorie la planche.
  assert.equal(G.epreuveDisponible(etat, chap, T7), false);
  assert.equal(G.epreuveDisponible(etat, chap, T7 + JOUR), true);
  // Un échec la referme jusqu'à la journée suivante.
  G.resultatEpreuve(etat, chap.id, 5, 10, T7 + JOUR);
  assert.equal(G.epreuveDisponible(etat, chap, T7 + JOUR + 3600000), false);
  assert.equal(G.epreuveDisponible(etat, chap, T7 + 2 * JOUR), true);
  G.resultatEpreuve(etat, chap.id, 9, 10, T7 + 2 * JOUR);
  assert.equal(G.etatPlanche(etat, chap, T7 + 2 * JOUR), "doree");
  // Couverture incomplète : pas coloriée, même avec une mémoire solide et des journées espacées.
  const e2 = vierge(); const c2 = faireChapitre("6e-svt-01-x");
  for (const it of c2.items.slice(0, 17)) e2.items[it.id] = { s: 60, due: T7 + 60 * JOUR, last: T7 };
  e2.chapitres[c2.id] = { jours: etat.chapitres[chap.id].jours.slice() };
  assert.equal(G.etatPlanche(e2, c2, T7), "esquisse");
  assert.equal(G.epreuveDisponible(e2, c2, T7 + JOUR), false);
  assert.equal(G.etatPlanche(e2, { id: "vide", items: [] }, T0), "cachee");
});

test("herbier : une compétence restée fragile retient la planche, même avec une bonne moyenne", () => {
  const etat = vierge(); const chap = faireChapitre();
  const T7 = T0 + 7 * JOUR;
  for (const it of chap.items) etat.items[it.id] = it.competence.endsWith("-c0")
    ? { s: 2.4, d: 5, due: T7 + 2 * JOUR, last: T7, n: 1, ok: 1 }
    : { s: 30, d: 4, due: T7 + 20 * JOUR, last: T7, n: 3, ok: 3 };
  etat.chapitres[chap.id] = { jours: [T0, T0 + 3 * JOUR, T7].map(t => cleJournee(t)) };
  const c = G.conditionsPlanche(etat, chap, T7);
  assert.ok(c.maitrise >= G.SEUIL_MAITRISE, "la moyenne passe");
  assert.equal(c.competencesOk, 2);
  assert.equal(c.ok.competences, false);
  assert.equal(G.etatPlanche(etat, chap, T7), "esquisse");
});

test("projection d'ouverture : au plus tôt après une semaine et trois journées, jamais pour une planche déjà coloriée", () => {
  const etat = vierge(); const chap = faireChapitre();
  const p = G.projectionOuverture(etat, chap, T0);
  assert.ok(p >= T0 + 8 * JOUR, "au moins J7 pour colorier, épreuve le lendemain");
  assert.ok(p <= T0 + 30 * JOUR);
  // Tout est déjà réuni aujourd'hui : coloriée aujourd'hui, épreuve demain.
  for (const it of chap.items) etat.items[it.id] = { s: 30, d: 4, due: T0 + 20 * JOUR, last: T0, n: 3, ok: 3 };
  etat.chapitres[chap.id] = { jours: [T0 - 7 * JOUR, T0 - 4 * JOUR, T0].map(t => cleJournee(t)) };
  assert.equal(G.projectionOuverture(etat, chap, T0), T0 + JOUR);
  G.verifierPlanches(etat, [chap], T0);
  assert.equal(G.projectionOuverture(etat, chap, T0), null);
});

test("herbier d'un profil migré : premier passage silencieux", () => {
  const etat = vierge(); const chap = faireChapitre();
  const jours = [T0 - 9 * JOUR, T0 - 4 * JOUR, T0].map(t => cleJournee(t));
  for (const it of chap.items) etat.items[it.id] = { s: 40, due: T0 + 30 * JOUR, last: T0, n: 4, ok: 4 };
  etat.chapitres[chap.id] = { jours: [...jours] };
  G.initialiser(etat);
  assert.deepEqual(G.verifierPlanches(etat, [chap], T0), []);
  assert.ok(etat.gamif.herbier[chap.id].coloriee, "mémorisée quand même");
  const chap2 = faireChapitre("6e-maths-02-b");
  for (const it of chap2.items) etat.items[it.id] = { s: 40, due: T0 + 30 * JOUR, last: T0 };
  etat.chapitres[chap2.id] = { jours: [...jours] };
  const r = G.appliquerEvenement(etat, { type: "sessionFin", seance: "decouvrir", n: 10, ok: 9 }, T0, { chapitres: [chap, chap2] });
  assert.deepEqual(r.notifications.filter(n => n.type === "planche"), [{ type: "planche", chapitre: chap2.id, etat: "coloriee" }]);
});

// ─── Épreuve ──────────────────────────────────────────────────────────────────────────────────
test("construireEpreuve : 10 questions variées, toutes compétences, sans carte flash", () => {
  const chap = faireChapitre("6e-maths-03-e", 4, 40);
  const etat = vierge();
  const ep = G.construireEpreuve(chap, etat);
  assert.equal(ep.length, 10);
  assert.equal(new Set(ep.map(i => i.id)).size, 10);
  assert.ok(ep.every(i => i.type !== "flash"));
  assert.equal(new Set(ep.map(i => i.competence)).size, 4);
  assert.equal(new Set(ep.map(i => i.difficulte)).size, 3);
  assert.ok(new Set(ep.map(i => i.type)).size >= 3);
  assert.deepEqual(G.construireEpreuve(chap, etat).map(i => i.id), ep.map(i => i.id), "déterministe");
  G.resultatEpreuve(etat, chap.id, 2, 10);
  assert.notDeepEqual(G.construireEpreuve(chap, etat).map(i => i.id), ep.map(i => i.id), "un nouvel essai change les questions");
  const petit = faireChapitre("6e-maths-04-p", 2, 6); // 5 items hors flash
  assert.equal(G.construireEpreuve(petit, etat).length, 5);
  assert.deepEqual(G.construireEpreuve({ id: "v", items: [] }, etat), []);
});

test("resultatEpreuve : seuil 80 %, bonus une seule fois, encouragement, bornes", () => {
  const etat = vierge(); const id = "6e-maths-01-test";
  const echec = G.resultatEpreuve(etat, id, 7, 10);
  assert.equal(echec.reussie, false); assert.equal(echec.bonus, 0); assert.match(echec.message, /pas encore/i);
  assert.equal(etat.gamif.herbier[id].essais, 1);
  const l0 = etat.lumens;
  const ok = G.resultatEpreuve(etat, id, 8, 10);
  assert.equal(ok.reussie, true); assert.equal(ok.doree, true); assert.equal(ok.bonus, G.BONUS_EPREUVE);
  assert.equal(etat.lumens - l0, G.BONUS_EPREUVE); assert.equal(etat.gamif.xp, etat.lumens);
  const encore = G.resultatEpreuve(etat, id, 10, 10);
  assert.equal(encore.reussie, true); assert.equal(encore.bonus, 0); assert.equal(encore.doree, false);
  assert.equal(G.resultatEpreuve(etat, "z", 0, 0).reussie, false);
  assert.equal(G.resultatEpreuve(etat, "z2", 15, 10).taux, 1);
  assert.equal(G.resultatEpreuve(etat, "z3", -3, 10).taux, 0);
  const r = G.appliquerEvenement(vierge(), { type: "epreuveFin", chapitre: id, justes: 9, total: 10 }, T0);
  assert.equal(r.lumens, G.BONUS_EPREUVE);
  assert.deepEqual(r.notifications.find(n => n.type === "planche"), { type: "planche", chapitre: id, etat: "doree" });
});

// ─── Boutique ─────────────────────────────────────────────────────────────────────────────────
test("CATALOGUE : 12 décorations imposées, prix progressifs de 30 à 600", () => {
  assert.deepEqual(G.CATALOGUE.map(a => a.id), ["lanterne", "banc", "nichoir", "arrosoir", "ruche", "mare", "arche", "fontaine", "papillons", "cabane", "cerf-volant", "observatoire"]);
  assert.equal(G.CATALOGUE[0].prix, 30); assert.equal(G.CATALOGUE[11].prix, 600);
  for (let i = 1; i < 12; i++) { assert.ok(G.CATALOGUE[i].prix > G.CATALOGUE[i - 1].prix); assert.ok(G.CATALOGUE[i].niveauMin >= G.CATALOGUE[i - 1].niveauMin); }
  assert.ok(G.CATALOGUE.some(a => a.niveauMin > 1));
  assert.ok(G.CATALOGUE.every(a => a.niveauMin >= 1 && a.niveauMin <= 20 && a.nom && a.desc));
});

test("acheter, placer, retirer", () => {
  const etat = vierge(); G.initialiser(etat);
  assert.deepEqual(G.acheter(etat, "licorne"), { ok: false, raison: "inconnu" });
  etat.lumens = 20; G.synchroniserXp(etat);
  assert.deepEqual(G.acheter(etat, "lanterne"), { ok: false, raison: "fonds", manque: 10 });
  assert.equal(etat.lumens, 20);
  etat.lumens = 5000; etat.gamif.lumensSync = 5000; etat.gamif.xp = 0; // fortune sans niveau
  assert.equal(G.acheter(etat, "observatoire").raison, "niveau");
  assert.deepEqual(G.acheter(etat, "lanterne"), { ok: true, prix: 30 });
  assert.equal(etat.lumens, 4970);
  assert.equal(G.acheter(etat, "lanterne").raison, "possede");
  etat.gamif.xp = G.NIVEAUX[15].xp;
  assert.equal(G.acheter(etat, "observatoire").ok, true);
  assert.equal(etat.lumens, 4370);
  assert.equal(G.placer(etat, "banc", 0.5), false, "pas possédé");
  assert.equal(G.placer(etat, "lanterne", NaN), false);
  assert.equal(G.placer(etat, "lanterne", 0.3), true); assert.equal(etat.gamif.jardin.lanterne.x, 0.3);
  G.placer(etat, "lanterne", 1.7); assert.equal(etat.gamif.jardin.lanterne.x, 1);
  G.placer(etat, "lanterne", -2); assert.equal(etat.gamif.jardin.lanterne.x, 0);
  assert.equal(G.retirer(etat, "lanterne"), true); assert.equal(etat.gamif.jardin.lanterne.x, null);
  assert.equal(G.retirer(etat, "banc"), false);
});

// ─── Niveaux en jeu ───────────────────────────────────────────────────────────────────────────
test("notification de niveau au franchissement (y compris après une quête réclamée)", () => {
  const etat = vierge(); G.initialiser(etat);
  let niveaux = [];
  for (let i = 0; i < 20; i++) niveaux.push(...repondre(etat, { juste: i % 2 === 0 }).notifications.filter(n => n.type === "niveau"));
  assert.deepEqual(niveaux, [{ type: "niveau", niveau: 2, nom: "Germe" }]);
  etat.lumens += G.NIVEAUX[2].xp; // gros gain extérieur
  assert.deepEqual(G.verifierNiveau(etat), { type: "niveau", niveau: G.niveauDepuisXp(etat.gamif.xp).niveau, nom: G.niveauDepuisXp(etat.gamif.xp).nom });
  assert.equal(G.verifierNiveau(etat), null);
});
