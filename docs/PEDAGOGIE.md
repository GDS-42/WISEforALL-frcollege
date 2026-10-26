# ÉCLORE — dossier pédagogique

ÉCLORE a été conçu autour de six exigences : clarté et accessibilité, pertinence pédagogique,
engagement et motivation, qualité didactique, évaluabilité et adaptation, équilibre. Ce document
explique quels principes issus de la recherche sont mis en œuvre, et comment, dans le code.

## 1. Pertinence pédagogique : apprendre en se souvenant

**Pratique de récupération (testing effect).** Tout l'apprentissage passe par des questions. La
fiche « Je retiens » est volontairement courte : elle sert d'appui avant de répondre, pas de cours à
relire. (Roediger & Karpicke, 2006 ; Dunlosky et al., 2013.)

**Répétition espacée.** Le planificateur `src/scheduler.js` implémente FSRS (Free Spaced Repetition
Scheduler, paramètres v4.5), l'algorithme ouvert le plus performant à ce jour pour prédire l'oubli.
Chaque question a un état mémoire (stabilité, difficulté) ; la rétrievabilité R(t) = (1 + t/9S)^-1
décroît avec le temps ; on replanifie pour une rétention cible de 90 %. Dans le jeu, cela devient
« une plante a soif » : la métaphore rend visible la courbe de l'oubli.

**Entrelacement (interleaving).** La session « Arroser » mêle les matières ; la session
« Découvrir » glisse une ou deux révisions venues d'ailleurs ; le « Défi éclair » mélange tout
(`entrelacer()` dans `src/engine.js`). Varier les contextes de rappel renforce la discrimination
et le transfert. (Rohrer & Taylor, 2007.)

**Feedback élaboré.** Chaque question (hors carte mémoire) porte une explication qui dit pourquoi
la bonne réponse est bonne et pourquoi les distracteurs sont tentants. Le feedback est immédiat,
après l'engagement de l'élève, jamais avant. (Hattie & Timperley, 2007 ; Shute, 2008.)

**Rattrapage.** Une erreur revient en fin de session : la réponse correcte est produite par l'élève
avant de quitter, ce qui consolide la correction plutôt que l'erreur.

**Exemples travaillés et charge cognitive.** Les fiches comportent un exemple résolu pas à pas ;
les énoncés sont courts ; une seule question à l'écran ; aucun chronomètre contraignant hors défi
(Sweller, 1988).

## 2. Évaluabilité et adaptation

**Modèle de l'élève.** Pour chaque compétence du programme, un niveau Elo (`src/adapt.js`)
est mis à jour à chaque réponse. Les nouvelles questions sont choisies pour viser une probabilité
de réussite d'environ 70 % : assez difficile pour apprendre, assez accessible pour ne pas décourager
(zone proximale de développement, difficultés désirables, Bjork).

**Diagnostic.** « Où en suis-je ? » propose une à deux questions par chapitre d'une matière, situe
l'élève, et ajuste immédiatement la difficulté. Le résultat, chapitre par chapitre, oriente le
travail.

**Maîtrise, pas note.** La maîtrise d'un chapitre est l'estimation de ce dont l'élève se souviendra
aujourd'hui, pondérée par la stabilité acquise (`maitrise()` dans `src/engine.js`). Elle redescend
quand on n'arrose plus : c'est honnête, et c'est ce que l'on veut que l'élève comprenne.

**Métacognition.** Avant de valider, l'élève indique sa confiance (je devine, je crois, j'en suis
sûr). Le jeu calcule une calibration (« boussole ») et en tire des conseils : une certitude
erronée est signalée comme précieuse à démonter ; un « je devine » juste devient une révision
rapprochée. (Judgments of learning, Dunlosky & Metcalfe.)

**Espace adulte.** Un tableau de bord par matière, chapitre et compétence, agrégé par domaine du
socle commun, avec historique des séances, calibration, export JSON/CSV et version imprimable.

## 3. Engagement et motivation : sans manipulation

Le jeu suit la théorie de l'autodétermination (Deci & Ryan) : **autonomie** (choisir sa matière,
son chapitre, son rythme, son objectif quotidien), **compétence** (progression visible à l'échelle
de la question, du chapitre et de la matière), **relation** (Lume, la luciole mentor, qui parle
d'effort et de stratégies, jamais de don).

Les récompenses sont douces et jamais punitives : les lumens récompensent l'effort (y compris les
erreurs rattrapées), la série de jours comporte un joker hebdomadaire, les succès célèbrent la
régularité, la lucidité et la persévérance plutôt que la seule performance. Les messages d'erreur
sont formulés dans un état d'esprit de développement (Dweck) : « Pas encore ».

Le « rituel du jour » fixe un objectif petit et tenable ; le jeu rappelle que revenir demain compte
plus que tout faire aujourd'hui.

## 4. Clarté et accessibilité

- Interface en français simple, tutoiement, une action principale par écran.
- Police de lecture facilitée (Atkinson Hyperlegible), interlignes et espacements augmentés,
  quatre tailles de texte, thème nuit ou jour, animations désactivables, respect de
  `prefers-reduced-motion`.
- Navigation au clavier (Entrée pour valider et continuer, chiffres pour choisir), rôles ARIA,
  focus visible, cibles tactiles de 44 px minimum.
- Lecture à voix haute optionnelle (synthèse vocale de l'appareil, en anglais ou espagnol pour les
  langues).
- Tolérance aux coquilles et aux variantes dans les réponses saisies (accents, articles, virgule
  ou point décimal), sauf quand l'orthographe est l'objet de la question.

## 5. Qualité didactique du contenu

Chaque module suit les thèmes et attendus du programme officiel de son niveau. Les distracteurs
sont construits à partir des erreurs réelles des élèves (misconceptions). Un validateur
(`tools/validate.mjs`) impose le schéma, l'unicité des identifiants, la présence d'explications,
la variété des types et l'étalement des difficultés. Le guide de rédaction (`docs/CONTENU.md`)
fixe les règles de forme : phrases courtes, exactitude, neutralité, bienveillance.

## 6. L'équilibre

Le jeu ne cherche pas à retenir l'élève le plus longtemps possible : il cherche à le faire revenir
peu, souvent, et à le laisser partir. Pas de notifications, pas de classement, pas de pression
sociale, pas de temps limité hors défi volontaire. Il peut être utilisé seul, en classe, ou avec un
adulte qui lit le bilan. Les données restent sur l'appareil.

## Références

- Dunlosky, J. et al. (2013). Improving Students' Learning With Effective Learning Techniques. *Psychological Science in the Public Interest*.
- Roediger, H. L., & Karpicke, J. D. (2006). Test-Enhanced Learning. *Psychological Science*.
- Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. *Instructional Science*.
- Hattie, J., & Timperley, H. (2007). The Power of Feedback. *Review of Educational Research*.
- Shute, V. (2008). Focus on Formative Feedback. *Review of Educational Research*.
- Sweller, J. (1988). Cognitive load during problem solving. *Cognitive Science*.
- Bjork, R. A. (1994). Memory and metamemory considerations in the training of human beings.
- Deci, E. L., & Ryan, R. M. (2000). Self-Determination Theory. *Psychological Inquiry*.
- Dweck, C. (2006). *Mindset: The New Psychology of Success*.
- FSRS : open-spaced-repetition (algorithme libre, 2022-2024).
