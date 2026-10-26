import { test } from "node:test";
import assert from "node:assert/strict";
import { construireFichier, lireFichier, resumeEtat, nomFichier, sauvegardeConseillee } from "../src/sauvegarde.js";
import { etatVierge, VERSION_ETAT } from "../src/store.js";

const JOUR = 86400000;
const carnet = (id, prenom, niveau = "5e") => etatVierge({ id, prenom, niveau, lv2: "espagnol", graine: 1 });

test("aller-retour d'un carnet puis de plusieurs", () => {
  const lea = carnet("p1", "Léa");
  lea.items["5e-maths-q1"] = { reps: 3, n: 3, ok: 2, last: 1000 };
  const un = lireFichier(construireFichier(lea, Date.UTC(2026, 9, 26)));
  assert.equal(un.profils.length, 1);
  assert.equal(un.profils[0].profil.prenom, "Léa");
  assert.deepEqual(un.profils[0].items, lea.items);
  assert.equal(un.exporte, Date.UTC(2026, 9, 26));
  const deux = lireFichier(construireFichier([lea, carnet("p2", "Sam", "3e")]));
  assert.deepEqual(deux.profils.map(e => e.profil.id), ["p1", "p2"]);
});

test("lit l'ancien format { etat } et un état nu", () => {
  const e = carnet("p1", "Léa");
  const ancien = JSON.stringify({ application: "ECLORE", version: 2, exporte: "2026-10-01T10:00:00.000Z", etat: e });
  assert.equal(lireFichier(ancien).profils[0].profil.id, "p1");
  assert.equal(lireFichier(JSON.stringify(e)).profils[0].profil.id, "p1");
  assert.equal(lireFichier("﻿" + JSON.stringify(e)).profils.length, 1); // BOM toléré
});

test("refuse les fichiers invalides avec un message clair", () => {
  const e = carnet("p1", "Léa");
  assert.throws(() => lireFichier("pas du json"), /JSON illisible/);
  assert.throws(() => lireFichier(JSON.stringify({ application: "AUTRE", profils: [e] })), /autre application/);
  assert.throws(() => lireFichier(JSON.stringify({ profils: [] })), /aucun carnet/);
  assert.throws(() => lireFichier(JSON.stringify({ profils: [{ ...e, profil: { ...e.profil, id: "" } }] })), /profil valide/);
  assert.throws(() => lireFichier(JSON.stringify({ profils: [{ ...e, profil: { ...e.profil, niveau: "2nde" } }] })), /classe/);
  assert.throws(() => lireFichier(JSON.stringify({ profils: [{ ...e, items: null }] })), /incomplet/);
  assert.throws(() => lireFichier(JSON.stringify({ application: "ECLORE", version: VERSION_ETAT + 1, profils: [e] })), /plus récente/);
});

test("résumé d'un carnet et nom de fichier", () => {
  const e = carnet("p1", "Léa Côté");
  assert.equal(resumeEtat(e).notions, 0);
  assert.equal(resumeEtat(e).derniereActivite, null);
  e.items.a = { reps: 2, last: 5000 }; e.items.b = { reps: 0, n: 0 };
  e.journal.push({ t: 9000, n: 10, ok: 7 });
  const r = resumeEtat(e);
  assert.equal(r.notions, 1); assert.equal(r.seances, 1); assert.equal(r.derniereActivite, 9000);
  assert.equal(nomFichier(e, new Date(2026, 9, 26)), "eclore-lea-cote-2026-10-26.json");
  assert.equal(nomFichier([e, e], new Date(2026, 0, 5)), "eclore-carnets-2026-01-05.json");
});

test("rappel de sauvegarde : seulement s'il y a des progrès non sauvegardés depuis une semaine", () => {
  const maintenant = 100 * JOUR;
  const e = carnet("p1", "Léa"); e.profil.cree = 80 * JOUR;
  assert.equal(sauvegardeConseillee(e, maintenant), false); // rien fait
  e.journal.push({ t: 99 * JOUR });
  assert.equal(sauvegardeConseillee(e, maintenant), true); // jamais sauvegardé, profil créé il y a 20 jours
  e.sauvegarde.derniere = 98 * JOUR;
  assert.equal(sauvegardeConseillee(e, maintenant), false); // sauvegardé il y a 2 jours
  e.sauvegarde.derniere = 90 * JOUR;
  assert.equal(sauvegardeConseillee(e, maintenant), true); // activité depuis, et plus de 7 jours
  e.journal = [{ t: 89 * JOUR }];
  assert.equal(sauvegardeConseillee(e, maintenant), false); // rien de neuf depuis la sauvegarde
});
