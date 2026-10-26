import { test } from "node:test";
import assert from "node:assert/strict";
import { trouverChapitre } from "../src/content.js";

test("trouverChapitre gère les matières à tiret", async () => {
  for (const id of ["3e-physique-chimie-01-atome-et-ions", "5e-maths-01-priorites-operatoires"]) {
    assert.equal((await trouverChapitre(id))?.id, id);
  }
  assert.equal(await trouverChapitre("3e-inconnue-01"), null);
});
