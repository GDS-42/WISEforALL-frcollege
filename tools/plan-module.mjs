#!/usr/bin/env node
// Affiche le plan d'un module (chapitres, thèmes, compétences, points « retenir ») sans les questions.
// Usage : node tools/plan-module.mjs 5e maths [--questions]
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
const [niveau, matiere, opt] = process.argv.slice(2);
if (!niveau || !matiere) { console.error("Usage : node tools/plan-module.mjs <niveau> <matiere> [--questions]"); process.exit(1); }
const root = resolve(new URL("..", import.meta.url).pathname);
const mod = (await import(pathToFileURL(resolve(root, "content", niveau, `${matiere}.js`)).href)).default;
console.log(`# ${mod.id} — ${mod.chapitres.length} chapitres\n${mod.intro || ""}\n`);
for (const c of mod.chapitres) {
  console.log(`## ${c.id}\n   ${c.titre}  [${c.theme}]`);
  for (const k of c.competences) console.log(`   • compétence : ${k.libelle}`);
  for (const r of c.retenir) console.log(`   – ${r}`);
  if (c.exemple) console.log(`   ex. ${c.exemple}`);
  if (opt === "--questions") for (const it of c.items) console.log(`     ? [${it.type}] ${it.q || it.texte || it.recto}`);
  console.log("");
}
