# Guide de rédaction du contenu ÉCLORE

Un **module** = un niveau × une matière, dans `content/<niveau>/<matiere>.js`
(ex. `content/5e/maths.js`). Il exporte par défaut un objet JavaScript (pas de JSON : on peut
commenter), validé par `node tools/validate.mjs content/5e/maths.js`.

Niveaux : `6e` (cycle 3), `5e`, `4e`, `3e` (cycle 4).
Matières (ids) : `francais`, `maths`, `histoire`, `geographie`, `emc`, `svt`, `physique-chimie`,
`technologie`, `anglais`, `espagnol` (5e→3e seulement), `arts-plastiques`, `education-musicale`, `eps`.

## Principes pédagogiques (non négociables)

1. **Fidélité au programme officiel** (BO, cycles 3 et 4) : les chapitres suivent les thèmes et
   attendus de fin d'année/cycle du niveau. On vise l'exhaustivité du programme du niveau.
2. **Pratique de récupération** : tout s'apprend en répondant. La fiche « retenir » est courte et
   sert d'appui, pas de cours magistral.
3. **Feedback élaboré** : chaque item (sauf `flash`) a une `explication` qui dit *pourquoi* la bonne
   réponse est bonne et, pour un QCM, pourquoi les distracteurs sont tentants mais faux.
   1 à 3 phrases, ton bienveillant, tutoiement.
4. **Distracteurs plausibles** : fondés sur les erreurs réelles des élèves (misconceptions).
5. **Variété** : au moins 4 types d'items par chapitre, difficulté 1 (~40 %), 2 (~40 %), 3 (~20 %).
6. **Langue** : français clair, phrases courtes, vocabulaire du niveau. Pas de point médian
   (écriture inclusive) : préférer des tournures neutres (« les élèves », « on »). Accents et
   typographie françaises soignées (« guillemets », apostrophe droite ' acceptée).
7. **Exactitude** : dates, formules, orthographe irréprochables. Pas d'opinion, pas de contenu
   sensible inadapté à 11-15 ans. En histoire/EMC : rester sur les faits et les notions du programme.
8. Les items `texte` attendent une réponse de **1 à 4 mots** (sinon préférer `qcm`/`trous`).
   Les items `num` attendent un nombre (le jeu accepte virgule ou point).

## Mise en forme légère (dans q, texte, retenir, explication)

`**gras**`, `*italique*`, `\n` saut de ligne. Exposants en Unicode : x², cm³, 10⁵. Fractions : « 3/4 ».
Symboles : × ÷ − ≤ ≥ ≠ ≈ √ π °.

## Schéma

```js
export default {
  id: "5e-maths",             // "<niveau>-<matiere>"
  niveau: "5e",
  matiere: "maths",
  intro: "Une phrase d'accroche poétique et motivante pour la matière à ce niveau.",
  chapitres: [
    {
      id: "5e-maths-01-nombres-relatifs",   // "<niveau>-<matiere>-NN-slug", unique
      titre: "Les nombres relatifs",
      theme: "Nombres et calculs",           // thème officiel du programme
      socle: [1, 4],                          // domaines du socle commun (1..5)
      competences: [                          // 2 à 5 compétences évaluables (attendus)
        { id: "5e-maths-01-nombres-relatifs-c1", libelle: "Repérer et comparer des nombres relatifs" },
        { id: "5e-maths-01-nombres-relatifs-c2", libelle: "Additionner et soustraire des nombres relatifs" },
      ],
      retenir: [                              // 4 à 8 points essentiels (fiche « Je retiens »)
        "Un **nombre relatif** a un signe (+ ou −) et une distance à zéro.",
        "Pour additionner deux relatifs de même signe, on ajoute les distances à zéro et on garde le signe.",
        "Soustraire un nombre, c'est ajouter son opposé : 3 − (−2) = 3 + 2 = 5.",
      ],
      exemple: "Calculer (−7) + 4 : les signes sont différents, on soustrait 7 − 4 = 3 et on garde le signe du plus éloigné de zéro : −3.", // optionnel, exemple travaillé
      items: [
        { id: "5e-maths-01-nombres-relatifs-q01", type: "qcm", competence: "5e-maths-01-nombres-relatifs-c1", difficulte: 1,
          q: "Quel nombre est le plus petit ?", choix: ["−8", "−2", "0", "3"], bonne: 0,
          explication: "Sur une droite graduée, −8 est le plus à gauche : plus un négatif a une grande distance à zéro, plus il est petit. Attention : −2 est plus grand que −8.",
          indice: "Imagine un thermomètre." },                  // indice optionnel
        { id: "5e-maths-01-nombres-relatifs-q02", type: "vf", competence: "5e-maths-01-nombres-relatifs-c2", difficulte: 1,
          q: "(−3) + (−5) = −8", reponse: true,
          explication: "Même signe : on ajoute 3 + 5 = 8 et on garde le signe −." },
        { id: "5e-maths-01-nombres-relatifs-q03", type: "trous", competence: "5e-maths-01-nombres-relatifs-c2", difficulte: 2,
          texte: "L'opposé de −4 est ___ et la somme (−4) + 4 vaut ___.",
          reponses: [["4", "+4"], ["0", "zéro"]],              // une liste d'acceptables par ___
          explication: "Deux nombres opposés ont la même distance à zéro et des signes contraires ; leur somme est toujours 0." },
        { id: "5e-maths-01-nombres-relatifs-q04", type: "ordre", competence: "5e-maths-01-nombres-relatifs-c1", difficulte: 2,
          q: "Range ces nombres du plus petit au plus grand.", elements: ["−6", "−1,5", "0", "2", "7"],   // dans l'ordre correct
          explication: "Les négatifs sont à gauche de 0 ; entre eux, c'est celui qui a la plus grande distance à zéro qui est le plus petit." },
        { id: "5e-maths-01-nombres-relatifs-q05", type: "assoc", competence: "5e-maths-01-nombres-relatifs-c2", difficulte: 2,
          q: "Associe chaque calcul à son résultat.", paires: [["5 − 8", "−3"], ["−5 + 8", "3"], ["−5 − 8", "−13"]],
          explication: "Signes différents : on soustrait les distances à zéro et on garde le signe du plus éloigné de zéro. Même signe : on additionne." },
        { id: "5e-maths-01-nombres-relatifs-q06", type: "num", competence: "5e-maths-01-nombres-relatifs-c2", difficulte: 3,
          q: "Calcule : (−12) − (−7) + (−3)", reponse: -8, tolerance: 0,             // unite optionnelle : unite: "cm"
          explication: "(−12) − (−7) = (−12) + 7 = −5, puis −5 + (−3) = −8." },
        { id: "5e-maths-01-nombres-relatifs-q07", type: "texte", competence: "5e-maths-01-nombres-relatifs-c1", difficulte: 1,
          q: "Comment appelle-t-on le nombre qui a la même distance à zéro que 9 mais le signe contraire ?", reponses: ["opposé", "l'opposé", "son opposé"],
          explication: "−9 est l'opposé de 9 : même distance à zéro, signe contraire." },
        { id: "5e-maths-01-nombres-relatifs-q08", type: "flash", competence: "5e-maths-01-nombres-relatifs-c1", difficulte: 1,
          recto: "Distance à zéro de −3,5 ?", verso: "3,5" },                        // carte recto/verso auto-évaluée
      ]
    }
  ]
}
```

## Volume attendu par module

- Matières principales (français, maths, histoire, géographie, EMC, SVT, physique-chimie,
  technologie, anglais, espagnol) : **8 à 12 chapitres**, **12 à 16 items** chacun.
- Arts plastiques, éducation musicale, EPS : **5 à 7 chapitres**, **10 à 14 items** chacun.

## Vérification

```sh
node tools/validate.mjs content/5e/maths.js
```
Zéro erreur exigé ; les avertissements sont à réduire au maximum.
