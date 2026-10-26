# Rédiger un cours ÉCLORE

Chaque module a un fichier de cours : `content/cours/<niveau>/<matiere>.js`, à côté du fichier
de questions `content/<niveau>/<matiere>.js` (qu'on ne modifie pas). Le cours est la **leçon
illustrée** que l'élève lit avant de s'entraîner : un plan, des sections, des définitions, des
schémas, des frises, des cartes, des exemples résolus, et de petites vérifications interactives.

Afficher le plan d'un module (titres, compétences, points « retenir ») :

```sh
node tools/plan-module.mjs 5e maths
```

Valider :

```sh
node tools/validate-cours.mjs content/cours/5e/maths.js
```

## Structure

```js
export default {
  id: "5e-maths",
  chapitres: {
    "5e-maths-01-priorites-operatoires": {          // id EXACT du chapitre
      accroche: "Une situation ou une question intrigante qui donne envie (1 à 2 phrases).",
      objectifs: ["Calculer une expression avec parenthèses", "…"],   // 2 à 4, « À la fin, tu sauras… »
      sections: [                                   // 3 à 5 sections = le PLAN du cours
        { titre: "Pourquoi des règles de priorité ?", blocs: [ /* 2 à 6 blocs */ ] },
        { titre: "…", blocs: [ … ] },
      ],
      bilan: "Une phrase de synthèse finale, mémorable.",
    },
    // … un objet par chapitre du module, TOUS les chapitres
  },
};
```

## Les blocs

Mise en forme du texte (`md`) : `**gras**`, `*italique*`, `==surligné==`, `\n` (saut de ligne),
`\n\n` (nouveau paragraphe). Exposants Unicode (cm³, 10⁵), symboles × ÷ − ≤ ≥ ≈ π √.

| `t` | Champs | Usage |
|---|---|---|
| `texte` | `md` | Paragraphe(s) d'explication. Court, concret, tutoiement. |
| `definition` | `terme`, `md` | Une notion clé, définie précisément. |
| `propriete` | `titre`?, `md` | Règle, loi, théorème, propriété à connaître. |
| `exemple` | `titre`?, `md`? , `etapes`? (tableau de chaînes) | Exemple résolu, pas à pas si `etapes`. |
| `attention` | `md` | Erreur fréquente à éviter (« piège »). |
| `astuce` | `md` | Moyen mnémotechnique, méthode, conseil. |
| `savais-tu` | `md` | Curiosité qui éveille l'intérêt. |
| `citation` | `texte`, `auteur`, `source`? | Extrait court (≤ 4 lignes) d'un texte libre de droits. |
| `liste` | `titre`?, `items` (chaînes, md permis), `ordonnee`? | Énumération. |
| `tableau` | `titre`?, `entetes` (chaînes), `lignes` (tableau de tableaux) | Tableau comparatif, conjugaison, données. |
| `frise` | `titre`?, `evenements`: `[{ date, label, detail? }]` | Frise chronologique interactive. `date` = année (nombre, négatif avant J.-C.), en ordre croissant. 3 à 10 événements. |
| `etapes` | `titre`?, `items`: `[{ titre, md }]`, `cycle`? | Processus en étapes ; `cycle: true` pour un cycle (eau, vie…). 3 à 7 étapes. |
| `graphique` | `type`: `"barres"`/`"courbe"`/`"secteurs"`, `titre`, `unite`?, `donnees`: `[{ label, valeur }]` | Diagramme dessiné automatiquement. 2 à 12 données. |
| `droite` | `titre`?, `min`, `max`, `pas`, `points`: `[{ x, label }]`, `fractions`? (dénominateur) | Droite graduée (relatifs, fractions, repérage). Avec `fractions: 3`, les graduations s'écrivent en tiers. |
| `carte` | `fond`: `"monde"`/`"france"`, `titre`, `cadre`? `[lonMin, latMin, lonMax, latMax]`, `zones`? , `reperes`? `[{ nom, lat, lon }]`, `traits`? `[{ de:[lat,lon], a:[lat,lon], label? }]`, `legende`? | Carte dessinée. `zones` : codes pays ISO 3166-1 alpha-2 (`"FR"`, `"EG"`) pour `monde` ; pour `france`, identifiants de région (voir plus bas). `cadre` zoome (ex. Méditerranée `[-10, 28, 40, 48]`). Repères en coordonnées décimales exactes. |
| `schema` | `titre`, `svg`, `legende`? | Dessin sur mesure en SVG (voir règles). |
| `verifie` | `q`, `choix` (2 à 4), `bonne` (index), `explication` | Mini-question interactive au fil du cours (« Vérifie que tu as compris »). |

Régions (`fond: "france"`) : `ile-de-france`, `centre-val-de-loire`, `bourgogne-franche-comte`,
`normandie`, `hauts-de-france`, `grand-est`, `pays-de-la-loire`, `bretagne`, `nouvelle-aquitaine`,
`occitanie`, `auvergne-rhone-alpes`, `provence-alpes-cote-d-azur`, `corse`.

Pour l'histoire ancienne, préfère `reperes` (villes, sites) et `traits` (routes, conquêtes) aux
`zones` (les frontières actuelles seraient anachroniques).

## Règles des schémas SVG

- Commence par `<svg viewBox="0 0 400 240" …>` (largeur 400, hauteur 160 à 320). Pas de `width`/`height`.
- **Interdit** : `<script>`, attributs `on…`, `<foreignObject>`, liens externes, images, `<style>`.
- Couleurs uniquement par classes ou variables : `class="trait"` (contour encre),
  `class="trait-fin"`, `class="pointille"`, `class="aplat"` (lavis pigment), `class="aplat-fort"`
  (pigment), `class="aplat-papier"`, `class="texte"` (texte encre 13 px), `class="texte-petit"`
  (11 px), `class="texte-main"` (manuscrit 16 px), `class="texte-pigment"`.
  Ou `fill="var(--pigment)"`, `stroke="var(--encre)"`.
- Vraies couleurs, quand la couleur est le sujet (cercle chromatique, drapeaux, spectre) : classes de remplissage `c-rouge`, `c-orange`, `c-jaune`, `c-vert`, `c-bleu`, `c-indigo`, `c-violet`, `c-rose`, `c-marron`, `c-noir`, `c-blanc`, `c-gris`.
- Flèches : `marker-end="url(#fl)"` (ou `url(#fl-p)` en pigment).
- Textes lisibles : labels courts, jamais de chevauchement, `text-anchor="middle"` pour centrer.
- Simple et juste : un schéma clair vaut mieux qu'un dessin chargé. Moins de 6 000 caractères.
- Bons sujets de schéma : cellule, appareil digestif simplifié, circuit électrique, atome, triangle
  et ses droites remarquables, solides, schéma narratif, structure d'une phrase, chaîne d'énergie,
  coupe d'un volcan, plaques tectoniques, pyramide des âges simplifiée, organisation d'une ville…

## Exigences de contenu

1. **Tous les chapitres** du module ont un cours, avec leurs ids exacts.
2. 3 à 5 sections par chapitre, titres parlants (ils forment le plan affiché).
3. Par chapitre : **au moins 2 blocs visuels** parmi `schema`, `frise`, `carte`, `tableau`,
   `graphique`, `droite`, `etapes` ; **1 à 3 blocs `verifie`** ; au moins 1 `definition` ou
   `propriete` ; au moins 1 `exemple`.
4. 450 à 1 000 mots par chapitre. Phrases courtes, vocabulaire du niveau, tutoiement, chaleur,
   exactitude irréprochable (dates, formules, orthographe). Pas de point médian.
5. Le cours **explique** (pourquoi, comment) au lieu de seulement lister. Il part du concret,
   donne des exemples, anticipe les erreurs. Il couvre tout ce que les questions du chapitre
   évaluent et les compétences listées.
6. Langues vivantes : explications en français, exemples dans la langue cible.
