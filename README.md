# ÉCLORE — le jardin du collège

> Il y a, quelque part, un jardin qui ne pousse qu'à la lumière de ce que tu apprends.

ÉCLORE est un jeu vidéo d'apprentissage qui couvre **l'ensemble des programmes du collège**
(6e, 5e, 4e, 3e, treize matières) sous la forme d'un **carnet de naturaliste** : chaque chapitre
est une plante dessinée à l'encre et à l'aquarelle, chaque connaissance une graine. On lit un cours
illustré, on plante en répondant à des questions, on arrose en revenant au bon moment, et la plante
finit par fleurir dans le jardin et par rejoindre l'herbier.

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

## Ce qu'on y trouve

- **Des cours illustrés** pour chaque chapitre : plan cliquable, définitions, propriétés,
  exemples résolus pas à pas, schémas dessinés, frises chronologiques, cartes (fonds Natural
  Earth), graphiques, droites graduées, et des vérifications interactives au fil de la lecture.
- **Huit types d'exercices** : choix, vrai/faux, texte à trous, remise en ordre par
  glisser-déposer, associations reliées par des traits, calcul, réponse courte, carte mémoire.
- **Une correction tolérante sur la forme** : unités écrites ou non (« 30 cm3 », « 3 L » pour
  3 000 mL), virgule ou point, fractions, puissances de dix, nombres en lettres, articles,
  pluriels, petites coquilles ; et un bouton « J'avais juste » si une bonne réponse est refusée.
- **Une gamification douce** : niveaux botaniques, quêtes du jour, série de bonnes réponses,
  herbier de planches à colorier puis à dorer par une épreuve, boutique de décorations pour le
  jardin. Rien n'est jamais retiré, aucune comparaison entre élèves.

## Sauvegarder et emporter sa progression

Tout vit dans le navigateur. Pour se protéger d'un effacement des données du site, ou pour
continuer sur un autre appareil :

- **Réglages → Mes données → Télécharger ma sauvegarde** crée un fichier
  `eclore-<prénom>-AAAA-MM-JJ.json` (sur mobile, « Envoyer… » l'expédie vers Drive, le mail…).
  L'accueil propose aussi de sauvegarder **tous les carnets** de l'appareil en un fichier.
- Sur le nouvel appareil (ou après un effacement), **Accueil → J'ai déjà un carnet** puis choisir
  ou déposer le fichier : la progression reprend à l'identique.
- Si le carnet existe déjà, une **comparaison** (dernière activité, notions, séances) précède le
  remplacement ; l'état local est gardé en copie de secours et l'import peut être **annulé**.
- Le jardin rappelle discrètement de sauvegarder après une semaine de progrès non sauvegardés, et
  l'application demande au navigateur un stockage persistant.

Le format est documenté dans `src/sauvegarde.js` (les anciens fichiers restent lisibles).

## Contenu

| Niveau | Matières |
|---|---|
| 6e | Français, Mathématiques, Histoire, Géographie, EMC, SVT, Physique-Chimie, Technologie, Anglais, Arts plastiques, Éducation musicale, EPS |
| 5e, 4e, 3e | les mêmes + Espagnol (LV2) |

Chaque module (niveau × matière) suit les thèmes officiels du programme : chapitres avec fiche
« Je retiens », exemple travaillé, compétences évaluables rattachées aux domaines du socle commun,
et 12 à 16 questions de huit types (choix multiple, vrai/faux, texte à trous, remise en ordre,
association, calcul, réponse courte, carte mémoire), chacune avec une explication élaborée.

Pour ajouter ou corriger des questions : [docs/CONTENU.md](docs/CONTENU.md), puis
`node tools/validate.mjs` (zéro erreur exigé) et `node tools/build-index.mjs`.
Pour les cours : [docs/COURS.md](docs/COURS.md) et `node tools/validate-cours.mjs`.
Charte graphique : [docs/DESIGN.md](docs/DESIGN.md). Crédits : [docs/CREDITS.md](docs/CREDITS.md).

## Tests

```sh
npm test          # tests unitaires (planificateur, correcteur, moteur, gamification) + validation du contenu et des cours
npm run parcours  # parcours complet dans un navigateur sans tête (Playwright), serveur lancé sur le port 8765
```

## Structure

```
index.html            coquille de l'application
src/                  moteur (FSRS, Elo, correcteur, séances, gamification) et écrans (src/ui)
src/styles/           charte « Herbier » : jetons, écrans, séance, cours, cartes
content/<niveau>/     questions : un fichier par matière, validé par tools/validate.mjs
content/cours/        cours illustrés : un fichier par matière, validé par tools/validate-cours.mjs
assets/               icône, polices auto-hébergées, fonds de cartes
tools/                serveur statique, validateur, générateur d'index
tests/                tests unitaires (node:test)
docs/                 guide de contenu, dossier pédagogique
```

## Licence

Code et contenu sous licence MIT. Les citations d'auteurs restent la propriété de leurs auteurs.
