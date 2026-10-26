#!/usr/bin/env node
// Test de parcours complet dans un navigateur sans tête (optionnel : nécessite Playwright + Chromium).
// Usage : node tools/serve.mjs 8765 &  puis  node tools/parcours.cjs [dossier-captures]
const { chromium } = require("playwright");
const { mkdirSync } = require("node:fs");
const S = (process.argv[2] || "captures") + "/";
mkdirSync(S, { recursive: true });
const BASE = process.env.ECLORE_URL || "http://localhost:8765/";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  const erreurs = [];
  page.on("console", m => { if (m.type() === "error") erreurs.push("[console] " + m.text()); });
  page.on("pageerror", e => erreurs.push("[pageerror] " + e.message));
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.screenshot({ path: S + "01-accueil.png" });
  await page.click("text=Entrer dans le jardin");
  await page.fill("#prenom", "Léa");
  await page.click(".choix-niveau button:nth-child(2)");
  await page.click("text=Planter ma première graine");
  await page.waitForSelector(".jardin-scene"); await page.waitForTimeout(600);
  await page.screenshot({ path: S + "02-jardin.png", fullPage: true });
  await page.goto(BASE + "#/atlas"); await page.waitForSelector(".matiere-carte");
  await page.screenshot({ path: S + "03-atlas.png", fullPage: true });
  await page.goto(BASE + "#/matiere/5e/maths"); await page.waitForSelector(".chapitre-carte");
  const href = await page.getAttribute(".chapitre-carte", "href");
  await page.goto(BASE + href); await page.waitForSelector(".fiche");
  await page.screenshot({ path: S + "04-chapitre.png", fullPage: true });
  await page.click("a.bouton.primaire.large"); await page.waitForSelector(".carte-question");
  for (let i = 0; i < 40; i++) {
    if (await page.$(".fin-session")) break;
    const type = await page.$eval(".carte-question", c => c.querySelector(".choix-liste") ? "qcm" : c.querySelector(".vf") ? "vf" : c.querySelector(".trou") ? "trous" : c.querySelector(".ordre-zone") ? "ordre" : c.querySelector(".assoc") ? "assoc" : c.querySelector(".flash") ? "flash" : "saisie");
    if (type === "qcm") await page.click(".choix-liste .choix");
    else if (type === "vf") await page.click(".vf .choix");
    else if (type === "trous") { for (const t of await page.$$(".trou")) await t.fill("x"); }
    else if (type === "ordre") { while (await page.$(".ordre-liste:not(.cible) .jeton")) await page.click(".ordre-liste:not(.cible) .jeton"); }
    else if (type === "assoc") { const n = (await page.$$(".assoc .colonne:first-child .choix")).length; for (let k = 0; k < n; k++) { await page.click(`.assoc .colonne:first-child .choix:nth-child(${k + 1})`); await page.click(`.assoc .colonne:last-child .choix:nth-child(${k + 1})`); } }
    else if (type === "flash") { await page.click("text=Retourner la carte"); await page.click(".auto-eval button:nth-child(3)"); }
    else await page.fill(".saisie", "42");
    if (type !== "flash") await page.click('button:has-text("Valider")');
    await page.waitForSelector(".feedback");
    if (i === 1) { await page.waitForTimeout(500); await page.screenshot({ path: S + "05-feedback.png", fullPage: true }); }
    await page.click("#continuer"); await page.waitForTimeout(80);
  }
  await page.waitForSelector(".fin-session"); await page.waitForTimeout(1200);
  await page.screenshot({ path: S + "06-fin.png", fullPage: true });
  for (const [route, sel, nom] of [["#/jardin", ".jardin-scene", "07-jardin"], ["#/bilan", ".calendrier", "08-bilan"], ["#/adulte", "table", "09-adulte"], ["#/reglages", ".interrupteur", "10-reglages"]]) {
    await page.goto(BASE + route); await page.waitForSelector(sel); await page.waitForTimeout(400);
    await page.screenshot({ path: S + nom + ".png", fullPage: true });
  }
  await page.goto(BASE + "#/session/defi"); await page.waitForSelector(".carte-question");
  await page.goto(BASE + "#/session/arroser"); await page.waitForTimeout(500);
  await page.goto(BASE + "#/session/diagnostic/5e-svt"); await page.waitForSelector(".carte-question");
  console.log(erreurs.length ? "ERREURS :\n" + erreurs.join("\n") : "Parcours complet : aucune erreur.");
  await browser.close();
  process.exit(erreurs.length ? 1 : 0);
})().catch(e => { console.error("ÉCHEC", e.message); process.exit(1); });
