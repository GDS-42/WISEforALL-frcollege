import { test } from "node:test";
import assert from "node:assert/strict";
import { segments, retirerBalises, classerVoix } from "../src/lecture.js";
import { md } from "../src/ui/dom.js";

const langues = (t, m) => segments(t, m).map(s => `${s.lang}|${s.texte}`);

test("le français d'un cours de langue n'est plus lu avec la voix étrangère", () => {
  const t = "En anglais, il existe un « bonjour » passe-partout. **[[Hello]]** (ou **[[Hi]]**, plus familier) s'emploie à tout moment.";
  assert.deepEqual(langues(t, "anglais"), [
    "fr-FR|En anglais, il existe un « bonjour » passe-partout.",
    "en-GB|Hello",
    "fr-FR|(ou",
    "en-GB|Hi",
    "fr-FR|, plus familier) s'emploie à tout moment.",
  ]);
});

test("balises : langue de la matière, langue explicite, et texte sans balise tout en français", () => {
  assert.deepEqual(langues("on colle l'unité devant [[zehn]] (dix), comme l'anglais *[[en:thirteen]]*.", "allemand"),
    ["fr-FR|on colle l'unité devant", "de-DE|zehn", "fr-FR|(dix), comme l'anglais", "en-GB|thirteen."]);
  assert.deepEqual(langues("[[¿Cómo te llamas?]] veut dire « Comment t'appelles-tu ? »", "espagnol"),
    ["es-ES|¿Cómo te llamas?", "fr-FR|veut dire « Comment t'appelles-tu ? »"]);
  assert.deepEqual(langues("La somme de **3** et *4* vaut 7.", "maths"), ["fr-FR|La somme de 3 et 4 vaut 7."]);
  assert.deepEqual(langues("Good morning sans balise", "anglais"), ["fr-FR|Good morning sans balise"]);
});

test("arabe et chinois sont reconnus à leur écriture, sans balise", () => {
  assert.deepEqual(langues("On dit مرحبا (marhaban) pour saluer.", "arabe"),
    ["fr-FR|On dit", "ar|مرحبا", "fr-FR|(marhaban) pour saluer."]);
  assert.deepEqual(langues("Bonjour se dit 你好，nǐ hǎo.", "chinois"),
    ["fr-FR|Bonjour se dit", "zh-CN|你好，", "fr-FR|nǐ hǎo."]);
});

test("ponctuation rattachée, segments voisins fusionnés, blancs marqués d'une pause", () => {
  assert.deepEqual(langues("[[I am]], [[I'm]], [[I'm not]]", "anglais"), ["en-GB|I am, I'm, I'm not"]);
  assert.deepEqual(langues("[[My ___ is Emma.]]", "anglais"), ["en-GB|My … is Emma."]);
  assert.deepEqual(langues("✔ [[spielen → gespielt]] ; [[he / she / it is]] ; 3/4", "allemand"),
    ["de-DE|spielen, gespielt ; he, she, it is", "fr-FR|; 3/4"]);
  assert.deepEqual(langues("Les verbes en [[-ar]], le préfixe [[ge-]] et [[-ing]] ; a-t-il vu « [[well-known]] » ?", "anglais"),
    ["fr-FR|Les verbes en", "en-GB|ar", "fr-FR|, le préfixe", "en-GB|ge", "fr-FR|et", "en-GB|ing", "fr-FR|; a-t-il vu «", "en-GB|well-known » ?"]);
  assert.deepEqual(langues("« [[Nice to meet you]] » veut dire « Ravi de te rencontrer ».", "anglais"),
    ["en-GB|Nice to meet you", "fr-FR|» veut dire « Ravi de te rencontrer »."]);
  assert.deepEqual(segments("", "anglais"), []);
  assert.deepEqual(segments("[[ ]]", "anglais"), []);
});

test("les balises ne s'affichent jamais, même coupées", () => {
  assert.equal(retirerBalises("Dis **[[Hello]]** puis [[fr:merci]] et [[de:danke]]."), "Dis **Hello** puis merci et danke.");
  assert.equal(retirerBalises("[[Hello! My "), "Hello! My ");
  assert.equal(retirerBalises(" is Emma.]]"), " is Emma.");
  assert.equal(md("**[[Hello]]** (ou *[[Hi]]*)"), "<strong>Hello</strong> (ou <em>Hi</em>)");
  assert.equal(retirerBalises(undefined), "");
});

const V = (name, lang, extra = {}) => ({ name, lang, localService: true, default: false, ...extra });

test("la voix la plus naturelle passe devant", () => {
  const voix = [
    V("Microsoft Hortense - French (France)", "fr-FR"),
    V("Microsoft Denise Online (Natural) - French (France)", "fr-FR", { localService: false }),
    V("eSpeak French", "fr"),
    V("Google français", "fr-FR", { localService: false }),
    V("Google US English", "en-US", { localService: false }),
  ];
  assert.deepEqual(classerVoix(voix, "fr-FR").map(v => v.name),
    ["Microsoft Denise Online (Natural) - French (France)", "Google français", "Microsoft Hortense - French (France)", "eSpeak French"]);
  assert.deepEqual(classerVoix([V("Amélie", "fr-CA"), V("Thomas", "fr-FR")], "fr-FR").map(v => v.name), ["Thomas", "Amélie"]);
  assert.deepEqual(classerVoix([V("Thomas (compact)", "fr-FR"), V("Audrey (Premium)", "fr-FR")], "fr-FR").map(v => v.name), ["Audrey (Premium)", "Thomas (compact)"]);
  assert.deepEqual(classerVoix([V("Grand-mère (français (France))", "fr-FR"), V("Thomas", "fr-FR")], "fr-FR").map(v => v.name)[0], "Thomas");
  assert.deepEqual(classerVoix([V("fr-fr-x-frc-local", "fr_FR"), V("fr-fr-x-frd-network", "fr_FR")], "fr-FR").map(v => v.name)[0], "fr-fr-x-frd-network");
});

test("choix de l'élève, hors connexion, langues cibles", () => {
  const voix = [V("Thomas", "fr-FR"), V("Google français", "fr-FR", { localService: false })];
  assert.equal(classerVoix(voix, "fr-FR", { choisie: "Thomas" })[0].name, "Thomas");
  assert.equal(classerVoix(voix, "fr-FR", { enLigne: false })[0].name, "Thomas");
  assert.equal(classerVoix([V("Daniel", "en-GB"), V("Samantha", "en-US")], "en-GB")[0].name, "Daniel");
  assert.equal(classerVoix([V("Samantha", "en-US")], "en-GB")[0].name, "Samantha");
  assert.equal(classerVoix([V("Maged", "ar-SA")], "ar")[0].name, "Maged");
  assert.equal(classerVoix([V("Sin-ji", "zh-HK"), V("Tingting", "zh-CN")], "zh-CN")[0].name, "Tingting");
  assert.deepEqual(classerVoix([V("Thomas", "fr-FR")], "de-DE"), []);
});
