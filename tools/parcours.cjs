#!/usr/bin/env node
// Test de parcours complet dans un navigateur sans tête (optionnel : nécessite Playwright + Chromium).
// Usage : node tools/serve.mjs 8765 &  puis  node tools/parcours.cjs [dossier-captures]
const { chromium } = require("playwright");
const { mkdirSync } = require("node:fs");
const S = (process.argv[2] || "captures") + "/";
mkdirSync(S, { recursive: true });
const BASE = process.env.ECLORE_URL || "http://localhost:8765/";

async function repondre(page, i) {
  const type = await page.$eval(".fiche-question", c => c.querySelector(".choix-liste") ? "qcm" : c.querySelector(".vf") ? "vf" : c.querySelector(".trou") ? "trous" : c.querySelector(".liste-ordre") ? "ordre" : c.querySelector(".assoc") ? "assoc" : c.querySelector(".carte-flash") ? "flash" : "saisie");
  if (type === "qcm") await page.click(".choix-liste .choix");
  else if (type === "vf") await page.click(".vf .choix");
  else if (type === "trous") { for (const t of await page.$$(".trou")) await t.fill("3"); }
  else if (type === "assoc") { const n = (await page.$$(".assoc-g")).length; for (let k = 0; k < n; k++) { await page.click(`.assoc-g >> nth=${k}`); await page.click(`.assoc-d >> nth=${k}`); } }
  else if (type === "flash") { await page.click("text=Retourner la carte"); await page.click(".auto-eval button >> nth=2"); }
  else if (type === "saisie") await page.fill(".saisie", "-3");
  if (type === "ordre") { // glisser le premier jeton deux crans plus bas
    const b = await (await page.$(".jeton")).boundingBox();
    await page.mouse.move(b.x + 30, b.y + b.height / 2); await page.mouse.down();
    await page.mouse.move(b.x + 30, b.y + b.height * 2.6, { steps: 8 }); await page.mouse.up();
  }
  if (type !== "flash") await page.click('button:has-text("Valider")');
  await page.waitForSelector(".retour");
  if (i === 1) { await page.waitForTimeout(400); await page.screenshot({ path: S + "07-correction.png", fullPage: true }); }
  await page.click("#continuer"); await page.waitForTimeout(60);
}

async function seance(page, route) {
  await page.goto(BASE + route); await page.waitForSelector(".fiche-question");
  for (let i = 0; i < 40 && !(await page.$(".fin-seance")); i++) await repondre(page, i);
  await page.waitForSelector(".fin-seance");
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const erreurs = [];
  page.on("console", m => { if (m.type() === "error") erreurs.push("[console] " + m.text()); });
  page.on("pageerror", e => erreurs.push("[pageerror] " + e.message));
  const ecran = async (route, attente, nom) => {
    await page.goto(BASE + route); await page.waitForSelector(attente); await page.waitForTimeout(700);
    await page.screenshot({ path: S + nom + ".png", fullPage: true });
  };

  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.screenshot({ path: S + "01-accueil.png" });
  await page.click("text=Ouvrir mon carnet");
  await page.fill("#prenom", "Léa");
  await page.click(".choix-niveau button:nth-child(2)");
  await page.click("text=Planter ma première graine");
  await page.waitForSelector(".scene-jardin"); await page.waitForTimeout(900);
  await page.screenshot({ path: S + "02-jardin.png", fullPage: true });
  await ecran("#/atlas", ".planche-matiere", "03-atlas");
  await ecran("#/matiere/5e/maths", ".etape-parcours", "04-matiere");
  const chap = await page.getAttribute(".etape-parcours", "href");
  await ecran(chap + "/cours", ".schema-eclore, .cours-section", "05-cours");
  await ecran(chap + "/entrainement", ".btn", "06-entrainement");

  await seance(page, "#/session/decouvrir/5e-maths-02-nombres-relatifs");
  await page.waitForTimeout(1200); await page.screenshot({ path: S + "08-fin.png", fullPage: true });
  // « Encore une séance » pointe vers la page en cours : elle doit tout de même relancer une séance.
  await page.click("text=Encore une séance");
  try { await page.waitForSelector(".fiche-question, .seance-vide", { timeout: 5000 }); } catch { erreurs.push("[séance] « Encore une séance » ne relance rien"); }

  await ecran("#/jardin", ".scene-jardin", "09-jardin-apres");
  await ecran("#/herbier", "main h1, main h2", "10-herbier");
  await ecran("#/boutique", "main h1, main h2", "11-boutique");
  await ecran("#/bilan", ".calendrier", "12-bilan");
  await ecran("#/adulte", "table", "13-adulte");
  await ecran("#/reglages", ".interrupteur", "14-reglages");
  // Chapitre d'une matière à tiret (régression : trouverChapitre).
  await ecran("#/chapitre/5e-physique-chimie-01-etats-de-la-matiere/cours", "main", "15-pc");
  if (await page.$("text=Chapitre introuvable")) erreurs.push("[parcours] chapitre de physique-chimie introuvable");

  for (const r of ["#/session/defi", "#/session/diagnostic/5e-svt"]) { await page.goto(BASE + r); await page.waitForSelector(".fiche-question"); }
  await page.goto(BASE + "#/session/arroser"); await page.waitForTimeout(600);

  // Sauvegarde : exporter, effacer les données du navigateur, reprendre depuis l'accueil.
  page.on("dialog", d => d.accept());
  const lumens = async () => page.textContent('#entete a[href="#/boutique"] span');
  await ecran("#/reglages", ".donnees", "20-reglages-donnees");
  const avant = await lumens();
  const [dl] = await Promise.all([page.waitForEvent("download"), page.click("text=Télécharger ma sauvegarde")]);
  const fichier = S + "sauvegarde.json"; await dl.saveAs(fichier);
  if (!/^eclore-lea-\d{4}-\d{2}-\d{2}\.json$/.test(dl.suggestedFilename())) erreurs.push("[sauvegarde] nom de fichier inattendu : " + dl.suggestedFilename());
  await page.evaluate(() => localStorage.clear());
  await page.goto(BASE); await page.reload({ waitUntil: "networkidle" });
  await page.click("text=J'ai déjà un carnet");
  await page.waitForSelector(".import-zone"); await page.screenshot({ path: S + "21-reprendre.png", fullPage: true });
  await page.setInputFiles('.import-zone input[type="file"]', fichier);
  await page.waitForSelector(".scene-jardin"); await page.waitForTimeout(500);
  const apres = await lumens(), prenom = await page.textContent('#entete a[href="#/profils"] span');
  if (apres !== avant || prenom !== "Léa") erreurs.push(`[sauvegarde] reprise incomplète : lumens ${avant} → ${apres}, prénom ${prenom}`);
  // Réimporter le même carnet : comparaison, remplacement, puis annulation.
  await page.goto(BASE + "#/reglages"); await page.waitForSelector(".donnees");
  if (!(await page.textContent(".derniere-sauvegarde")).includes("aujourd'hui")) erreurs.push("[sauvegarde] la date de sauvegarde n'a pas suivi le fichier");
  await page.click("text=Reprendre un fichier");
  await page.setInputFiles('.import-zone input[type="file"]', fichier);
  await page.waitForSelector(".compare"); await page.screenshot({ path: S + "22-comparaison.png", fullPage: true });
  await page.click("text=Remplacer par le fichier"); await page.waitForTimeout(400);
  await page.click("text=Annuler le dernier import"); await page.waitForTimeout(400);
  if (await page.$("text=Annuler le dernier import")) erreurs.push("[sauvegarde] la copie de secours n'a pas été consommée");
  // Fichier invalide : message clair, pas de plantage.
  await page.click("text=Reprendre un fichier");
  await page.setInputFiles('.import-zone input[type="file"]', { name: "x.json", mimeType: "application/json", buffer: Buffer.from("{oups") });
  // La lecture du fichier est asynchrone : on attend le message plutôt que de le lire aussitôt.
  try { await page.waitForFunction(() => document.querySelector(".import-message")?.textContent.includes("illisible"), null, { timeout: 4000 }); }
  catch { erreurs.push("[sauvegarde] pas de message pour un fichier invalide"); }
  // Rappel du jardin quand la dernière sauvegarde est ancienne (modifié hors de l'appli, qui réécrit son état en partant).
  await page.goto(BASE + "manifest.json");
  await page.evaluate(() => {
    const id = JSON.parse(localStorage.getItem("eclore:profil-actif")), cle = `eclore:profil:${id}`, e = JSON.parse(localStorage.getItem(cle));
    e.sauvegarde = { derniere: Date.now() - 10 * 86400000 }; e.journal.push({ t: Date.now() - 3600000, n: 1, ok: 1 });
    localStorage.setItem(cle, JSON.stringify(e));
  });
  await page.goto(BASE + "#/jardin");
  await page.waitForSelector(".rappel-sauvegarde"); await page.screenshot({ path: S + "23-rappel.png" });

  // Thème nuit et mobile.
  await page.emulateMedia({ colorScheme: "dark" }); // thème « auto » → nuit
  await ecran("#/jardin", ".scene-jardin", "16-jardin-nuit");
  await ecran(chap + "/cours", ".schema-eclore, .cours-section", "16b-cours-nuit");
  await page.setViewportSize({ width: 390, height: 844 });
  await ecran("#/jardin", ".scene-jardin", "17-mobile-jardin");
  await ecran(chap + "/cours", "main", "18-mobile-cours");
  await page.goto(BASE + "#/session/defi"); await page.waitForSelector(".fiche-question"); await page.waitForTimeout(400);
  await page.screenshot({ path: S + "19-mobile-question.png", fullPage: true });

  console.log(erreurs.length ? "ERREURS :\n" + erreurs.join("\n") : "Parcours complet : aucune erreur.");
  await browser.close();
  process.exit(erreurs.length ? 1 : 0);
})().catch(e => { console.error("ÉCHEC", e.message); process.exit(1); });
