import { test } from "node:test";
import assert from "node:assert/strict";
import { normaliser, texteCorrespond, parseNombre, nombreCorrespond, corriger, levenshtein } from "../src/grader.js";

test("normalisation : casse, accents, articles, espaces", () => {
  assert.equal(normaliser("  L'Opposé  "), "oppose");
  assert.equal(normaliser("Les Métropoles."), "metropoles");
  assert.equal(normaliser("É", { strict: true }), "é");
});

test("correspondance texte : exact, tolérance aux coquilles, strict", () => {
  assert.ok(texteCorrespond("opposé", ["opposé"]).ok);
  assert.ok(texteCorrespond("Charlemagne", ["charlemagne"]).ok);
  assert.ok(texteCorrespond("photosynthese", ["photosynthèse"]).ok);
  assert.ok(texteCorrespond("photosynthése", ["photosynthèse"]).ok);
  assert.ok(texteCorrespond("photosyntese", ["photosynthèse"]).ok, "une coquille tolérée sur un mot long");
  assert.ok(!texteCorrespond("photo", ["photosynthèse"]).ok);
  assert.ok(!texteCorrespond("chantais", ["chantait"], { strict: true }).ok, "strict : pas de tolérance");
  assert.ok(!texteCorrespond("chantait", ["chantaît"], { strict: true }).ok);
  assert.ok(texteCorrespond("went", ["went"], { strict: true }).ok);
  assert.ok(!texteCorrespond("", ["x"]).ok);
});

test("nombres : virgule, espaces, signe moins typographique, fractions", () => {
  assert.equal(parseNombre("2,5"), 2.5);
  assert.equal(parseNombre("1 250"), 1250);
  assert.equal(parseNombre("−8"), -8);
  assert.equal(parseNombre("3/4"), 0.75);
  assert.equal(parseNombre("12 cm"), 12);
  assert.ok(Number.isNaN(parseNombre("abc")));
  assert.ok(nombreCorrespond("3,14", 3.14159, 0.01));
  assert.ok(!nombreCorrespond("3", 3.14159, 0.01));
  assert.ok(nombreCorrespond("-753", -753));
});

test("levenshtein", () => {
  assert.equal(levenshtein("chat", "chat"), 0);
  assert.equal(levenshtein("chat", "chats"), 1);
  assert.equal(levenshtein("kitten", "sitting"), 3);
});

test("corriger : chaque type", () => {
  assert.ok(corriger({ type: "qcm", bonne: 2 }, 2).juste);
  assert.ok(!corriger({ type: "qcm", bonne: 2 }, 1).juste);
  assert.ok(corriger({ type: "vf", reponse: false }, false).juste);
  const trous = { type: "trous", reponses: [["4", "+4"], ["0", "zéro"]] };
  assert.ok(corriger(trous, ["+4", "zero"]).juste);
  assert.equal(corriger(trous, ["4", "1"]).score, 0.5);
  const ordre = { type: "ordre", elements: ["a", "b", "c"] };
  assert.ok(corriger(ordre, [0, 1, 2]).juste);
  assert.ok(!corriger(ordre, [1, 0, 2]).juste);
  const assoc = { type: "assoc", paires: [["a", "1"], ["b", "2"], ["c", "3"]] };
  assert.ok(corriger(assoc, [0, 1, 2]).juste);
  assert.equal(corriger(assoc, [0, 2, 1]).score, 1 / 3);
  assert.ok(corriger({ type: "num", reponse: -8, tolerance: 0 }, "−8").juste);
  assert.ok(corriger({ type: "texte", reponses: ["opposé"] }, "l'opposé").juste);
  const flash = corriger({ type: "flash" }, 3);
  assert.ok(flash.juste && flash.autoNote === 3);
  assert.ok(!corriger({ type: "flash" }, 1).juste);
});
