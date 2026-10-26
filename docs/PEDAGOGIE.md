# ÉCLORE — dossier pédagogique

ÉCLORE a été conçu autour de six exigences : clarté et accessibilité, pertinence pédagogique,
engagement et motivation, qualité didactique, évaluabilité et adaptation, équilibre. Ce document
explique quels principes issus de la recherche sont mis en œuvre, et comment, dans le code.

## 1. Pertinence pédagogique : apprendre en se souvenant

**Pratique de récupération (testing effect).** Tout l'apprentissage passe par des questions. La
fiche « Je retiens » est volontairement courte : elle sert d'appui avant de répondre, pas de cours à
relire. (Roediger & Karpicke, 2006 ; Dunlosky et al., 2013.)

**Répétition espacée.** Le planificateur `src/scheduler.js` implémente FSRS (Free Spaced Repetition
Scheduler, courbe et paramètres par défaut de la version 4), l'algorithme ouvert de référence pour prédire l'oubli.
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

### Ouverture de l'épreuve : des journées de réussite, pas des répétitions

La planche d'un chapitre se colorie, et son épreuve devient possible, quand cinq garde-fous sont réunis
(`conditionsPlanche` dans `src/gamification.js`) :

- **toutes les questions du chapitre rencontrées** (l'épreuve ne pose pas de question inconnue) ;
- **maîtrise ≥ 0,60**. C'est la moyenne de R × min(1, max(0,3 ; S/21 j)) : une question ne compte
  pleinement que lorsque sa prochaine révision est à trois semaines ou plus. En pratique, cela demande
  que 40 à 50 % des questions aient réussi leur troisième rappel espacé ;
- **chaque compétence ≥ 0,45**, pour qu'une compétence fragile ne soit pas masquée par la moyenne ;
- **au moins 3 journées d'entraînement distinctes** sur le chapitre (plusieurs séances le même jour
  comptent pour une) ;
- **au moins 7 jours** entre la première séance et la planche coloriée.

La journée bascule à 4 h : c'est le sommeil qui sépare deux journées. L'épreuve s'ouvre **la journée
suivante**, et, après un échec, de nouveau la journée suivante, avec les compétences fragiles servies
d'abord. Pour un élève assidu qui répond juste, l'épreuve s'ouvre vers J10–J14.

Pourquoi : se rappeler une fois dans chacune de trois séances espacées donne bien plus de rétention
qu'en trois fois dans une même séance (68 % contre 26 % à une semaine, Rawson & Dunlosky). Le sommeil
consolide entre deux séances (Mazza et al., 2016). Un test passé au moins un jour plus tard mesure
l'apprentissage durable, pas la performance du moment (Rowland, 2014 ; Soderstrom & Bjork, 2015).
Relever le seuil n'apporte presque rien de durable (Matayoshi et al., 2022 et 2025).

Ce qui relève de la science et ce qui relève d'un choix de conception :
- **établi :** plusieurs journées de réussite et au moins une nuit avant l'épreuve ;
- **choix de conception, à ajuster sur les données d'ÉCLORE :** 0,60, 21 jours, 0,45, 3 jours, 7 jours
  et la bascule à 4 h.

L'élève voit la règle :
- l'onglet « L'épreuve » coche chaque condition avec son compteur, liste les questions les moins
  enracinées avec leur prochain rendez-vous, et donne une date d'ouverture estimée ;
- la planche coloriée annonce l'épreuve « demain matin » ;
- le rituel du jour signale « Épreuve prête ».

Quand tout un chapitre est réussi pour l'instant, « M'entraîner » le dit, donne la prochaine révision
utile et propose un entraînement libre, au lieu de resservir les mêmes questions. Le rapport complet,
sources comprises, a été produit lors de la conception (« Calibrage du seuil de maîtrise »).

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
- Rawson, K. A., & Dunlosky, J. (2011). Optimizing schedules of retrieval practice for durable and efficient learning. *Journal of Experimental Psychology: General*.
- Cepeda, N. J. et al. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. *Psychological Science*.
- Mazza, S. et al. (2016). Relearn faster and retain longer: Along with practice, sleep makes perfect. *Psychological Science*.
- Rowland, C. A. (2014). The effect of testing versus restudy on retention: A meta-analytic review. *Psychological Bulletin*.
- Soderstrom, N. C., & Bjork, R. A. (2015). Learning versus performance: An integrative review. *Perspectives on Psychological Science*.
- Matayoshi, J., Cosyn, E., & Uzun, H. (2022). Does practice make perfect? Analyzing the relationship between higher mastery and forgetting. *EDM 2022*.
