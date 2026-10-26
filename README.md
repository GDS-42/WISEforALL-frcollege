# ÉCLORE — le jardin du collège

> Il y a, quelque part, un jardin qui ne pousse qu'à la lumière de ce que tu apprends.

ÉCLORE est un jeu vidéo d'apprentissage qui couvre **l'ensemble des programmes du collège**
(6e, 5e, 4e, 3e, treize matières) sous la forme d'un jardin nocturne : chaque chapitre est une
plante, chaque connaissance une graine. On la plante en répondant à des questions, on l'arrose en
y revenant au bon moment, et elle finit par devenir un arbre qui éclaire le jardin.

- **Aucune installation, aucune dépendance, aucun compte** : un dossier de fichiers statiques
  (HTML, CSS, JavaScript modules). Fonctionne hors ligne une fois visité (PWA).
- **Aucune donnée ne quitte l'appareil** : profils, progrès et préférences sont stockés
  localement, exportables et importables en JSON.
- **Pédagogie fondée sur la recherche** : pratique de récupération, répétition espacée (FSRS),
  entrelacement, feedback élaboré, métacognition, difficulté adaptative, état d'esprit de
  développement. Voir [docs/PEDAGOGIE.md](docs/PEDAGOGIE.md).

## Lancer le jeu

```sh
node tools/serve.mjs        # puis ouvrir http://localhost:8080
```
ou n'importe quel serveur statique (`python3 -m http.server`, GitHub Pages, Netlify…).
Le jeu doit être servi en HTTP (les modules ES ne se chargent pas depuis `file://`).

## Contenu

| Niveau | Matières |
|---|---|
| 6e | Français, Mathématiques, Histoire, Géographie, EMC, SVT, Physique-Chimie, Technologie, Anglais, Arts plastiques, Éducation musicale, EPS |
| 5e, 4e, 3e | les mêmes + Espagnol (LV2) |

Chaque module (niveau × matière) suit les thèmes officiels du programme : chapitres avec fiche
« Je retiens », exemple travaillé, compétences évaluables rattachées aux domaines du socle commun,
et 12 à 16 questions de huit types (choix multiple, vrai/faux, texte à trous, remise en ordre,
association, calcul, réponse courte, carte mémoire), chacune avec une explication élaborée.

Pour ajouter ou corriger du contenu : [docs/CONTENU.md](docs/CONTENU.md), puis
`node tools/validate.mjs` (zéro erreur exigé) et `node tools/build-index.mjs`.

## Tests

```sh
npm test      # tests unitaires (planificateur, correcteur, moteur) + validation de tout le contenu
```

## Structure

```
index.html            coquille de l'application
src/                  moteur (scheduler FSRS, adaptation Elo, correcteur, sessions) et écrans
content/<niveau>/     un fichier par matière, validé par tools/validate.mjs
tools/                serveur statique, validateur, générateur d'index
tests/                tests unitaires (node:test)
docs/                 guide de contenu, dossier pédagogique
```

## Licence

Code et contenu sous licence MIT. Les citations d'auteurs restent la propriété de leurs auteurs.
