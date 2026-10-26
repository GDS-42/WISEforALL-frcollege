#!/usr/bin/env node
// Génère content/index.js : la liste des modules disponibles (chargés à la demande par le jeu).
import { readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { NIVEAUX } from "../content/matieres.js";
const root = resolve(new URL("..", import.meta.url).pathname);
const entries = [];
for (const niv of NIVEAUX) {
  let files = [];
  try { files = readdirSync(join(root, "content", niv)).filter(f => f.endsWith(".js")).sort(); } catch {}
  for (const f of files) entries.push({ niveau: niv, matiere: f.replace(/\.js$/, ""), path: `./${niv}/${f}` });
}
const src = `// Fichier généré par tools/build-index.mjs — ne pas éditer à la main.
export const MODULES = ${JSON.stringify(entries, null, 2)};
export const charger = (niveau, matiere) => import(\`./\${niveau}/\${matiere}.js\`).then(m => m.default);
`;
writeFileSync(join(root, "content", "index.js"), src);
console.log(`content/index.js : ${entries.length} modules`);
