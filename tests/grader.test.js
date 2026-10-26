import { test } from "node:test";
import assert from "node:assert/strict";
import { normaliser, texteCorrespond, parseNombre, lireNombre, comparerNombre, nombreCorrespond, corriger, levenshtein, nombreEnLettres, lireUnite, formaterNombre } from "../src/grader.js";

const num = (saisie, reponse, unite = "", tolerance = 0) => comparerNombre(saisie, { reponse, unite, tolerance }).ok;

test("le bogue « 30 cm3 » est corrigé : l'unité n'est plus collée au nombre", () => {
  assert.equal(parseNombre("30 cm3"), 30);
  assert.equal(parseNombre("30cm3"), 30);
  assert.ok(num("30 cm3", 30, "cm³"));
  assert.ok(num("30cm³", 30, "cm³"));
  assert.ok(num("30 cm^3", 30, "cm³"));
  assert.ok(num("30 centimètres cubes", 30, "cm³"));
  assert.ok(num("30", 30, "cm³"));
  assert.ok(!num("31 cm3", 30, "cm³"));
});

test("conversions d'unités de même nature", () => {
  assert.ok(num("0,03 dm3", 30, "cm³"));
  assert.ok(num("3 L", 3000, "mL"));
  assert.ok(num("1,5 km", 1500, "m"));
  assert.ok(num("2 kg", 2000, "g"));
  assert.ok(num("72 km/h", 20, "m/s"));
  assert.ok(num("1 h 30", 90, "min"));
  assert.ok(num("1h30min", 90, "min"));
  assert.ok(num("2 min 30 s", 150, "s"));
  assert.ok(num("1 ha", 10000, "m²"));
  assert.ok(num("8 milliards", 8, "milliards"));
  assert.ok(num("8000000000", 8, "milliards"));
});

test("mauvaise dimension d'unité : accepté avec une remarque", () => {
  const r = comparerNombre("30 cm2", { reponse: 30, unite: "cm³" });
  assert.ok(r.ok);
  assert.match(r.remarque, /unité/);
});

test("écritures variées des nombres", () => {
  assert.equal(parseNombre("2,5"), 2.5);
  assert.equal(parseNombre("1 250"), 1250);
  assert.equal(parseNombre("1 250 €"), 1250);
  assert.equal(parseNombre("−8"), -8);
  assert.equal(parseNombre("3/4"), 0.75);
  assert.equal(parseNombre("x = 4"), 4);
  assert.equal(parseNombre("environ 12"), 12);
  assert.equal(parseNombre("3,2 × 10^5"), 320000);
  assert.equal(parseNombre("3,2x10^5"), 320000);
  assert.equal(parseNombre("10⁵"), 100000);
  assert.equal(parseNombre("2 × 10⁻³"), 0.002);
  assert.equal(parseNombre("4e-3"), 0.004);
  assert.equal(parseNombre("douze"), 12);
  assert.equal(parseNombre("vingt-trois"), 23);
  assert.equal(parseNombre("soixante-dix"), 70);
  assert.equal(parseNombre("quatre-vingt-dix"), 90);
  assert.equal(parseNombre("deux cents"), 200);
  assert.ok(Number.isNaN(parseNombre("abc")));
  assert.ok(Number.isNaN(parseNombre("")));
});

test("dates avant J.-C. et pourcentages", () => {
  assert.ok(num("753 av. J.-C.", -753));
  assert.ok(num("753 avant JC", -753));
  assert.ok(num("-753", -753));
  assert.ok(num("en 1789", 1789));
  assert.ok(num("25 %", 25, "%"));
  assert.ok(num("25 %", 0.25));
  assert.ok(num("0,25", 25, "%"));
});

test("précision : une valeur plus précise qui s'arrondit à la réponse est acceptée", () => {
  assert.ok(num("3,14159", 3.14));
  assert.ok(num("12,0", 12));
  assert.ok(!num("3,1", 3.14));
  assert.ok(num("3,1", 3.14, "", 0.05));
  assert.ok(nombreCorrespond("3,14", 3.14159, 0.01));
  assert.ok(!nombreCorrespond("3", 3.14159, 0.01));
});

test("texte : articles, formules d'introduction, ponctuation, majuscules", () => {
  assert.ok(texteCorrespond("l'opposé", ["opposé"]).ok);
  assert.ok(texteCorrespond("C'est la photosynthèse.", ["photosynthèse"]).ok);
  assert.ok(texteCorrespond("Les Métropoles", ["métropole"]).ok, "pluriel toléré");
  assert.ok(texteCorrespond("pharaons", ["pharaon"]).ok);
  assert.ok(texteCorrespond("cyber harcelement", ["cyberharcèlement"]).ok);
  assert.ok(texteCorrespond("chevaux", ["cheval"]).ok);
  assert.ok(texteCorrespond("il s'agit de la Révolution française", ["Révolution française"]).ok);
  assert.ok(texteCorrespond("Charlemagne", ["charlemagne"]).ok);
  assert.ok(texteCorrespond("photosyntese", ["photosynthèse"]).ok, "une coquille");
  assert.ok(texteCorrespond("huit", ["8"]).ok);
  assert.ok(texteCorrespond("8", ["huit"]).ok);
  assert.ok(texteCorrespond("1789", ["1789"]).ok);
  assert.ok(texteCorrespond("en 1789", ["1789"]).ok);
  assert.ok(!texteCorrespond("photo", ["photosynthèse"]).ok);
  assert.ok(!texteCorrespond("pas la photosynthèse", ["photosynthèse"]).ok, "négation refusée");
  assert.ok(!texteCorrespond("", ["x"]).ok);
  assert.ok(!texteCorrespond("respiration", ["photosynthèse"]).ok);
});

test("texte strict : orthographe exigée, forme tolérée", () => {
  assert.ok(!texteCorrespond("chantais", ["chantait"], { strict: true }).ok);
  assert.ok(texteCorrespond("Chantait.", ["chantait"], { strict: true }).ok);
  assert.ok(texteCorrespond(" chantait ", ["chantait"], { strict: true }).ok);
  assert.ok(!texteCorrespond("miercoles", ["miércoles"], { strict: true, item: { matiere: "espagnol" } }).ok);
  assert.ok(texteCorrespond("went", ["went"], { strict: true }).ok);
});

test("anglais : contractions équivalentes, articles", () => {
  const en = { matiere: "anglais" };
  assert.ok(texteCorrespond("do not", ["don't"], { strict: true, item: en }).ok);
  assert.ok(texteCorrespond("doesn’t", ["does not"], { strict: true, item: en }).ok);
  assert.ok(texteCorrespond("I'm", ["I am"], { strict: true, item: en }).ok);
  assert.ok(texteCorrespond("cannot", ["can't"], { strict: true, item: en }).ok);
  assert.ok(texteCorrespond("the Thames", ["Thames"], { item: en }).ok);
  assert.ok(!texteCorrespond("a", ["the"], { item: en }).ok, "un article seul n'est pas effacé");
});

test("utilitaires", () => {
  assert.equal(levenshtein("kitten", "sitting"), 3);
  assert.equal(nombreEnLettres("trois"), 3);
  assert.equal(lireUnite("cm³").dim, "volume");
  assert.equal(lireUnite("km/h").dim, "vitesse");
  assert.equal(normaliser("  L'Opposé  "), "l oppose");
  assert.equal(formaterNombre(-753), "−753");
  assert.equal(formaterNombre(2.5), "2,5");
  assert.equal(formaterNombre(12500), "12 500");
  assert.equal(lireNombre("1 h 30").duree, true);
});

test("corriger : chaque type", () => {
  assert.ok(corriger({ type: "qcm", bonne: 2 }, 2).juste);
  assert.ok(corriger({ type: "vf", reponse: false }, false).juste);
  const trous = { type: "trous", reponses: [["4", "+4"], ["0", "zéro"]] };
  assert.ok(corriger(trous, ["+4", "zero"]).juste);
  assert.ok(corriger(trous, ["quatre", "0"]).juste);
  assert.equal(corriger(trous, ["4", "1"]).score, 0.5);
  assert.ok(corriger({ type: "ordre", elements: ["a", "b", "c"] }, [0, 1, 2]).juste);
  assert.equal(corriger({ type: "assoc", paires: [["a", "1"], ["b", "2"], ["c", "3"]] }, [0, 2, 1]).score, 1 / 3);
  assert.ok(corriger({ type: "num", reponse: 30, unite: "cm³" }, "30 cm3").juste);
  assert.ok(corriger({ type: "texte", reponses: ["opposé"] }, "l'opposé").juste);
  assert.ok(corriger({ type: "flash" }, 3).autoNote === 3);
});

test("réponses symboliques", () => {
  assert.ok(texteCorrespond("-", ["−"]).ok);
  assert.ok(texteCorrespond("moins", ["−"]).ok);
  assert.ok(texteCorrespond("Ω", ["Ω"]).ok);
  assert.ok(texteCorrespond("ohm", ["Ω"]).ok);
  assert.ok(texteCorrespond("=", ["="]).ok);
  assert.ok(!texteCorrespond("+", ["−"]).ok);
});

test("LV2 : allemand, arabe, chinois", () => {
  const ok = (s, a, matiere, strict = false) => texteCorrespond(s, a, { item: { matiere }, strict }).ok;
  // Allemand : umlauts et ß équivalents, même en strict ; le genre compte en strict.
  assert.ok(ok("schoene Gruesse", ["schöne Grüße"], "allemand"));
  assert.ok(ok("Strasse", ["Straße"], "allemand", true));
  assert.ok(ok("der hund", ["der Hund"], "allemand", true));
  assert.ok(!ok("die Hund", ["der Hund"], "allemand", true));
  // Arabe : sans harakat, alif hamza unifié, ة/ه ; la réponse en écriture arabe n'est pas effacée.
  assert.ok(ok("مدرسة", ["مَدْرَسَةٌ"], "arabe"));
  assert.ok(ok("كتاب", ["كِتابٌ"], "arabe", true));
  assert.ok(ok("احمد", ["أحمد"], "arabe"));
  assert.ok(ok("salam", ["salām", "سلام"], "arabe"));
  assert.ok(!ok("بيت", ["مدرسة"], "arabe"));
  assert.equal(normaliser("مَدْرَسَةٌ", { langue: "ar" }), "مدرسه");
  // Chinois : caractères ou pinyin, tons en accents, en chiffres ou absents, espaces et ponctuation ignorés.
  for (const s of ["你好", "你好！", "nǐ hǎo", "ni3 hao3", "ni hao", "nihao", "Ni Hao"]) assert.ok(ok(s, ["你好", "nǐ hǎo"], "chinois", true), s);
  assert.ok(ok("lvse", ["lǜsè"], "chinois"));
  assert.ok(!ok("ni hao ma", ["你好", "nǐ hǎo"], "chinois"));
  assert.ok(!ok("再见", ["你好", "nǐ hǎo"], "chinois"));
});
