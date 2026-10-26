// Cours ÉCLORE — 3e EPS. Schéma : docs/COURS.md
export default {
  id: "3e-eps",
  chapitres: {
    "3e-eps-01-entrainement-sante": {
      accroche: "Deux élèves courent ensemble. Au bout de dix minutes, l'un discute tranquillement, l'autre est à bout de souffle. Ils ne sont pas « nuls » ou « doués » : ils ne courent simplement pas à la bonne allure pour eux. En 3e, tu apprends à calculer la tienne et à construire ton propre entraînement.",
      objectifs: [
        "Calculer sa VMA et sa fréquence cardiaque maximale pour planifier un entraînement",
        "Équilibrer charge, récupération, étirements, alimentation et sommeil",
        "Prévenir les blessures, le dopage et les conduites à risque",
      ],
      sections: [
        {
          titre: "Connaître son moteur : VMA et fréquence cardiaque",
          blocs: [
            { t: "definition", terme: "VMA (vitesse maximale aérobie)", md: "La vitesse de course à laquelle ton corps **consomme le maximum d'oxygène**. Au-delà, tu t'essouffles très vite. On la mesure par un test : **Luc Léger** (paliers de plus en plus rapides) ou **demi-Cooper** : la distance parcourue en 6 minutes, divisée par 100, donne la VMA en km/h." },
            { t: "exemple", titre: "Léa calcule ses allures", etapes: ["Au demi-Cooper, Léa parcourt 1 400 m en 6 min : VMA = 1 400 ÷ 100 = **14 km/h**.", "Endurance à 70 % de VMA : 14 × 0,7 ≈ **10 km/h**.", "Un 500 m à 100 % de VMA : 14 km/h = 14 ÷ 3,6 ≈ 3,9 m/s, donc 500 ÷ 3,9 ≈ 129 s, soit **2 min 09 s**.", "Entre deux 500 m, elle **marche 3 minutes** pour récupérer."] },
            { t: "propriete", titre: "Fréquence cardiaque maximale (FC max)", md: "Une formule approximative : **FC max ≈ 220 − âge**. À 14 ans : environ 206 battements par minute. On s'entraîne en général entre **70 et 90 %** de cette valeur, selon l'objectif. On prend son pouls au poignet ou au cou, pendant 15 secondes, puis on multiplie par 4." },
            { t: "verifie", q: "Un élève a une VMA de 15 km/h. À quelle allure court-il une séance d'endurance à 70 % de VMA ?", choix: ["7 km/h", "10,5 km/h", "15 km/h"], bonne: 1, explication: "70 % de 15, c'est 15 × 0,7 = 10,5 km/h. À cette allure, il peut courir longtemps en parlant encore." },
          ],
        },
        {
          titre: "Construire une séance et un plan d'entraînement",
          blocs: [
            { t: "etapes", titre: "Une séance bien construite", items: [{ titre: "Échauffement", md: "10 à 15 min : footing lent, mobilisations articulaires, étirements **dynamiques**, accélérations." }, { titre: "Corps de séance", md: "Le travail principal, à l'intensité choisie (par exemple 3 × 500 m à 95 % de VMA)." }, { titre: "Retour au calme", md: "Footing très lent ou marche : le cœur redescend progressivement." }, { titre: "Récupération", md: "Étirements doux, eau, collation ; analyse de la séance dans le carnet." }] },
            { t: "graphique", type: "courbe", titre: "Profil d'une séance de demi-fond (intensité en % de VMA)", unite: "% VMA", donnees: [{ label: "Échauffement", valeur: 60 }, { label: "Accélérations", valeur: 80 }, { label: "500 m n° 1", valeur: 95 }, { label: "Récup.", valeur: 40 }, { label: "500 m n° 2", valeur: 95 }, { label: "Récup.", valeur: 40 }, { label: "500 m n° 3", valeur: 95 }, { label: "Retour au calme", valeur: 50 }] },
            { t: "tableau", titre: "Choisir son intensité", entetes: ["Objectif", "% de VMA", "% de FC max", "Sensation"], lignes: [["Endurance fondamentale", "60 à 75 %", "environ 70 %", "Je peux parler"], ["Seuil, résistance", "80 à 90 %", "80 à 90 %", "Phrases courtes"], ["Travail de VMA", "95 à 105 %", "plus de 90 %", "Je ne peux plus parler"]] },
          ],
        },
        {
          titre: "Progresser grâce au repos",
          blocs: [
            { t: "propriete", titre: "Charge et récupération", md: "L'entraînement **fatigue** le corps ; c'est pendant la **récupération** qu'il se répare et devient un peu plus fort qu'avant : c'est la **surcompensation**. Trop de charge sans repos mène au **surentraînement** : fatigue persistante, baisse des performances, sommeil perturbé, irritabilité, blessures." },
            { t: "liste", titre: "Les alliés de la récupération", items: ["**Sommeil** : 8 à 10 heures par nuit pour un adolescent.", "**Alimentation** : des glucides (pâtes, riz, pain) avant l'effort, des protéines et de l'eau pour récupérer, des repas équilibrés.", "**Étirements** : dynamiques à l'échauffement, doux après l'effort ou à distance. **Jamais** sur un muscle douloureux.", "**Hydratation** avant, pendant et après."] },
            { t: "verifie", q: "Le corps progresse-t-il pendant l'effort ou pendant la récupération ?", choix: ["Pendant l'effort", "Pendant la récupération", "Ni l'un ni l'autre"], bonne: 1, explication: "L'effort crée de la fatigue et de petites lésions ; le repos permet au corps de se reconstruire en mieux. Sans récupération, pas de progrès." },
          ],
        },
        {
          titre: "Prévenir les blessures et les conduites à risque",
          blocs: [
            { t: "texte", md: "La plupart des blessures se préviennent : **échauffement progressif**, **matériel adapté** (chaussures, protections), **progressivité** de la charge. En cas d'**entorse**, on arrête aussitôt l'activité et on applique de la **glace**, puis repos, élévation et compression (méthode **GREC** : glace, repos, élévation, compression). On consulte si la douleur persiste." },
            { t: "definition", terme: "Dopage", md: "L'usage de **substances ou de méthodes interdites** pour améliorer artificiellement ses performances. Il est **dangereux pour la santé** (cœur, foie, hormones) et **sanctionné**. L'**Agence mondiale antidopage** (AMA), créée en **1999**, coordonne la lutte ; en France, c'est l'**AFLD**." },
            { t: "attention", md: "Les **boissons énergisantes** ne sont pas des boissons de sport : très sucrées et chargées en caféine, elles accélèrent le cœur et déshydratent. Avant un effort, rien ne vaut **l'eau**. Compléments « miracles » achetés en ligne et alcool sont aussi des conduites à risque." },
          ],
        },
      ],
      bilan: "Connaître sa VMA et son cœur, doser l'effort, respecter le repos et refuser les raccourcis dangereux : c'est ainsi qu'on devient l'entraîneur de son propre corps.",
    },
    "3e-eps-02-performance": {
      accroche: "Au départ du 3 × 500 m, tout le monde part comme une fusée. Au troisième 500 m, ceux qui ont gagné le premier marchent presque. Le secret des meilleurs n'est pas d'aller vite : c'est d'aller à **leur** vitesse, du début à la fin.",
      objectifs: [
        "Gérer son allure en demi-fond à partir de sa VMA, avec des temps de passage",
        "Connaître les règles et les mesures en athlétisme et en natation",
        "Tenir les rôles de starter, chronométreur et juge ; savoir comment l'EPS compte au DNB",
      ],
      sections: [
        {
          titre: "Le projet d'allure en demi-fond",
          blocs: [
            { t: "definition", terme: "Projet d'allure", md: "Le plan de course que tu fixes **avant** l'épreuve : le **pourcentage de VMA** visé et les **temps de passage** à respecter (tous les 100 m, par exemple). Il évite de partir trop vite et de s'effondrer ensuite." },
            { t: "propriete", titre: "Convertir vitesse et temps", md: "**Vitesse en m/s = vitesse en km/h ÷ 3,6.**\nTemps = distance ÷ vitesse. Pour 500 m : temps (en s) = 1 800 ÷ vitesse (en km/h).\nÀ **15 km/h** : 500 m en **120 s** (2 min 00 s). À **12 km/h** : 500 m en **150 s** (2 min 30 s)." },
            { t: "tableau", titre: "Allures pour une VMA de 14 km/h", entetes: ["% de VMA", "Vitesse", "Temps au 500 m", "Temps au 100 m"], lignes: [["90 %", "12,6 km/h", "2 min 23 s", "29 s"], ["95 %", "13,3 km/h", "2 min 15 s", "27 s"], ["100 %", "14 km/h", "2 min 09 s", "26 s"]] },
            { t: "verifie", q: "Un élève court 500 m en 2 min 30 s. Quelle est sa vitesse ?", choix: ["10 km/h", "12 km/h", "15 km/h"], bonne: 1, explication: "2 min 30 s = 150 s. Vitesse = 500 ÷ 150 ≈ 3,33 m/s, et 3,33 × 3,6 = 12 km/h." },
          ],
        },
        {
          titre: "Respecter ses temps de passage",
          blocs: [
            { t: "graphique", type: "barres", titre: "Nina part trop vite : son temps à chaque 100 m (projet : 27 s)", unite: "s", donnees: [{ label: "1er 100 m", valeur: 22 }, { label: "2e 100 m", valeur: 25 }, { label: "3e 100 m", valeur: 28 }, { label: "4e 100 m", valeur: 31 }, { label: "5e 100 m", valeur: 33 }] },
            { t: "exemple", titre: "Lire et corriger un départ trop rapide", md: "Nina visait 27 s par 100 m, soit 2 min 15 s au 500 m. Elle passe le premier 100 m en **22 s** : bien trop vite. Résultat : elle ralentit à chaque tranche et finit en 2 min 19 s, épuisée. Au signal du chronométreur, elle aurait dû **ralentir tout de suite** pour revenir à 27 s. Une allure **régulière** est toujours plus efficace." },
            { t: "astuce", md: "Au départ, l'adrénaline fausse tes sensations : ce qui te semble facile est souvent trop rapide. Fie-toi aux **temps de passage** annoncés, pas à ton impression." },
          ],
        },
        {
          titre: "Règles, mesures et records",
          blocs: [
            { t: "texte", md: "**Sprint** : le départ se donne en trois temps, « À vos marques », « Prêts », puis le **signal**. Un **faux départ** entraîne la disqualification. **Saut en longueur** : on mesure de la **planche d'appel** jusqu'à la trace la plus proche laissée dans le sable ; si le pied dépasse la planche, l'essai est **nul**.\n\n**Records du monde du 100 m** : **Usain Bolt**, 9 s 58 (Berlin, 2009) ; **Florence Griffith-Joyner**, 10 s 49 (1988)." },
            { t: "texte", md: "**Natation** : quatre nages de compétition, le **papillon**, le **dos**, la **brasse** et le **crawl** (nage libre). En **sauvetage**, on apprend à plonger, à remonter un objet lesté et à **remorquer** une victime sur le dos, le visage hors de l'eau. Au collège, l'**attestation du savoir-nager en sécurité** (ASNS) certifie que tu sais te sauver toi-même." },
            { t: "verifie", q: "Au saut en longueur, que se passe-t-il si le pied dépasse la planche d'appel ?", choix: ["On mesure depuis le pied", "Le saut est nul", "On retire 10 cm"], bonne: 1, explication: "La planche marque la limite. Mordre dessus, c'est un essai nul, même si le saut était très long." },
          ],
        },
        {
          titre: "Les rôles et l'évaluation",
          blocs: [
            { t: "tableau", titre: "Qui fait quoi pendant une course ?", entetes: ["Rôle", "Mission"], lignes: [["**Starter**", "Donne les commandements et le signal du départ ; rappelle un faux départ"], ["**Chronométreur**", "Déclenche au signal, arrête au passage du **buste** sur la ligne, annonce les temps de passage"], ["**Juge**", "Vérifie la validité : couloir, planche, faux départ"], ["**Secrétaire**", "Note les temps et les performances"]] },
            { t: "attention", md: "Le chronomètre s'arrête quand le **buste** (le tronc) franchit la ligne, pas la tête, ni le bras tendu, ni le pied." },
            { t: "propriete", titre: "L'EPS au diplôme national du brevet", md: "L'EPS n'a **pas d'épreuve finale** au DNB : ce que tu réussis toute l'année compte dans le **contrôle continu**. Chaque rôle tenu, chaque projet d'allure respecté, chaque progrès compte." },
          ],
        },
      ],
      bilan: "En performance, on gagne avec la tête : une VMA connue, un projet d'allure, des temps de passage respectés et des rôles bien tenus.",
    },
    "3e-eps-03-deplacements": {
      accroche: "En forêt, sans GPS, avec une carte et une boussole, tu dois trouver une balise cachée à 400 m. Sur un mur, à huit mètres du sol, tu dois choisir la prise suivante et faire confiance à la corde. Dans les deux cas, ce qui compte n'est pas la force : c'est de lire le terrain et de décider juste.",
      objectifs: [
        "Choisir un itinéraire et s'orienter avec carte et boussole : azimut, échelle, courbes de niveau",
        "Grimper en tête en sécurité : nœud de huit, vérifications, assurage, communication",
        "Pratiquer en pleine nature en respectant sécurité, météo et environnement",
      ],
      sections: [
        {
          titre: "Lire la carte : échelle et courbes de niveau",
          blocs: [
            { t: "texte", md: "En **course d'orientation**, la carte se tient **orientée** : son nord pointe vers le nord réel, et tu la tournes quand tu changes de direction. Tu valides chaque **balise** avec un poinçon ou un doigt électronique." },
            { t: "propriete", titre: "L'échelle", md: "Une échelle de **1/10 000** signifie que **1 cm sur la carte = 10 000 cm sur le terrain = 100 m**. Deux balises séparées de 3 cm sur la carte sont donc à **300 m** l'une de l'autre." },
            { t: "definition", terme: "Courbes de niveau", md: "Des lignes qui relient les points de **même altitude**. Quand elles sont **serrées**, la pente est **forte** ; quand elles sont **espacées**, le terrain est presque **plat**." },
            { t: "verifie", q: "Sur une carte au 1/10 000, deux balises sont séparées de 4,5 cm. Quelle distance sur le terrain ?", choix: ["45 m", "450 m", "4 500 m"], bonne: 1, explication: "1 cm représente 100 m, donc 4,5 cm représentent 4,5 × 100 = 450 m." },
          ],
        },
        {
          titre: "Suivre un azimut, choisir un itinéraire",
          blocs: [
            { t: "definition", terme: "Azimut", md: "L'**angle**, en degrés, entre le **nord** et la direction à suivre, mesuré dans le sens des aiguilles d'une montre. 0° = nord, 90° = est, 180° = sud, **270° = ouest**." },
            { t: "tableau", titre: "Le vocabulaire de l'orienteur", entetes: ["Notion", "Définition"], lignes: [["**Ligne directrice**", "Un élément long et facile à suivre : chemin, ruisseau, lisière, clôture"], ["**Main courante**", "Une ligne que l'on longe sans la quitter des yeux"], ["**Point d'attaque**", "Un repère sûr et proche de la balise, d'où l'on part pour la trouver"], ["**Ligne d'arrêt**", "Un élément au-delà de la balise qui t'avertit que tu es allé trop loin"]] },
            { t: "exemple", titre: "Deux itinéraires pour la balise 5", md: "La balise est à 400 m à travers un bois dense. **Option 1** : tout droit à l'azimut 60°. Court, mais on se perd facilement et on avance lentement. **Option 2** : suivre le chemin (**ligne directrice**) jusqu'au croisement (**point d'attaque**), puis 80 m à l'azimut 120°. Plus long, mais **plus sûr et souvent plus rapide**. En orientation, le chemin le plus court n'est pas toujours le meilleur." },
          ],
        },
        {
          titre: "Grimper en tête en sécurité",
          blocs: [
            { t: "texte", md: "En **moulinette**, la corde passe déjà par le relais en haut de la voie : si tu lâches, tu ne tombes presque pas. **En tête**, c'est toi qui **mousquetonnes** la corde dans les dégaines en montant. Si tu tombes, tu chutes jusqu'en dessous de ta dernière dégaine : la chute est plus longue, il faut donc une sécurité parfaite." },
            { t: "schema", titre: "Le nœud de huit doublé", legende: "Schéma simplifié : un premier huit sur la corde, le brin passé dans les deux pontets du baudrier, puis le même chemin refait en sens inverse. On termine par un nœud d'arrêt.", svg: `<svg viewBox="0 0 400 260"><path d="M150 10 L150 48 C192 48 192 108 150 108 C108 108 108 168 150 168 C192 168 192 108 150 108 C108 108 108 48 150 48" fill="none" stroke="var(--pigment)" stroke-width="4"/><path d="M158 52 C200 52 200 112 158 112 C116 112 116 172 158 172 C200 172 200 112 158 112 C116 112 116 52 158 52 L210 40 L250 40" fill="none" stroke="var(--encre)" stroke-width="2.4"/><path d="M150 168 L144 208 C140 242 176 242 172 208 L160 174" fill="none" stroke="var(--pigment)" stroke-width="4"/><rect class="aplat-fort" x="128" y="214" width="62" height="12" rx="4"/><circle class="trait" cx="258" cy="40" r="6"/><circle class="trait" cx="270" cy="40" r="6"/><path class="trait-fin" d="M160 20 L230 14"/><text class="texte-petit" x="234" y="17">vers le grimpeur, puis le haut de la voie</text><path class="trait-fin" d="M196 82 L250 82"/><text class="texte-petit" x="254" y="86">nœud de huit</text><path class="trait-fin" d="M190 140 L250 140"/><text class="texte-petit" x="254" y="138">doublé : deux brins</text><text class="texte-petit" x="254" y="152">bien parallèles</text><text class="texte-petit" x="282" y="44">nœud d'arrêt</text><path class="trait-fin" d="M190 220 L250 220"/><text class="texte-petit" x="254" y="218">pontets du baudrier</text><text class="texte-petit" x="254" y="232">boucle petite comme un poing</text></svg>` },
            { t: "etapes", titre: "Avant de quitter le sol", items: [{ titre: "S'équiper", md: "Baudrier bien serré au-dessus des hanches, boucles vérifiées." }, { titre: "S'encorder", md: "**Nœud de huit doublé** dans les deux pontets, suivi d'un **nœud d'arrêt**." }, { titre: "Vérification mutuelle", md: "Le grimpeur contrôle l'assureur, l'assureur contrôle le grimpeur : baudrier, nœud, système d'assurage, **mousqueton verrouillé**." }, { titre: "Communiquer", md: "« Prêt ? » « Prêt ! » On convient des mots : « **Sec !** » (tends la corde), « **Mou !** » (donne de la corde)." }, { titre: "Grimper", md: "L'assureur garde **toujours une main sur le brin aval** (le brin libre, sous le système d'assurage)." }] },
            { t: "verifie", q: "Quelle est la différence entre la moulinette et la grimpe en tête ?", choix: ["En tête, le grimpeur passe lui-même la corde dans les dégaines en montant", "En moulinette, il n'y a pas de corde", "Il n'y en a aucune"], bonne: 0, explication: "En moulinette, la corde est déjà en haut. En tête, le grimpeur l'installe au fur et à mesure dans les dégaines : les chutes sont plus longues." },
          ],
        },
        {
          titre: "Pleine nature : sécurité, météo, environnement",
          blocs: [
            { t: "liste", titre: "Les règles de base", items: ["**Kayak** : gilet de sauvetage **obligatoire**, même pour un bon nageur.", "**VTT** : casque et contrôle des freins avant de partir.", "**Randonnée** : eau, carte, vêtements adaptés ; **horaire de retour** communiqué à quelqu'un.", "**Météo** consultée avant le départ ; en cas d'**orage**, on quitte les crêtes et on s'éloigne des arbres isolés.", "**Environnement** : rester sur les sentiers, ne rien laisser, ne pas déranger la faune."] },
            { t: "attention", md: "Savoir bien nager ne protège pas d'un choc, de l'eau froide ou d'un courant. Le gilet de sauvetage n'est **jamais** facultatif en kayak." },
            { t: "savais-tu", md: "Le **112** est le numéro d'urgence européen : il fonctionne dans tous les pays de l'Union européenne, gratuitement, même sans crédit sur ton téléphone." },
          ],
        },
      ],
      bilan: "Lire le terrain, choisir l'itinéraire le plus sûr, vérifier avant de grimper, communiquer et respecter la nature : en milieu incertain, la sécurité est une compétence.",
    },
    "3e-eps-04-expression": {
      accroche: "Quatre danseurs immobiles au sol. L'un se lève et tourne, les autres le suivent un à un, puis tous ensemble, de plus en plus vite. Sans un mot, le public a compris : une tempête se lève. Comment fabrique-t-on du sens avec des corps qui bougent ?",
      objectifs: [
        "Composer une chorégraphie avec des procédés : répétition, unisson, canon, contraste",
        "Réaliser des pyramides d'acrosport et des enchaînements gymniques en sécurité",
        "Porter un regard critique et juger avec un code",
      ],
      sections: [
        {
          titre: "Composer une chorégraphie",
          blocs: [
            { t: "texte", md: "Une **composition chorégraphique** a un **début**, un **développement** et une **fin**. Elle n'est pas obligée de raconter une histoire avec des personnages : elle peut exprimer une émotion, une image, une idée. Mais son **propos** doit être **lisible**." },
            { t: "definition", terme: "Procédés de composition", md: "Les outils pour organiser les mouvements entre danseurs : **répétition** (refaire un motif), **unisson** (tous ensemble, le même geste), **canon** (le même mouvement avec des départs décalés), **cascade** (un geste qui se propage très vite d'un danseur à l'autre), **miroir**, **question-réponse**, **contraste** (lent/rapide, haut/bas)." },
            { t: "schema", titre: "Trois procédés vus sur une partition de danse", legende: "Chaque ligne est un danseur (D1 à D4), le temps avance vers la droite.", svg: `<svg viewBox="0 0 400 220"><text class="texte" x="70" y="28" text-anchor="middle">Unisson</text><rect class="aplat-fort" x="26" y="44" width="20" height="20"/><rect class="aplat-fort" x="50" y="44" width="20" height="20"/><rect class="trait-fin" x="74" y="44" width="20" height="20"/><rect class="trait-fin" x="98" y="44" width="20" height="20"/><rect class="aplat-fort" x="26" y="68" width="20" height="20"/><rect class="aplat-fort" x="50" y="68" width="20" height="20"/><rect class="trait-fin" x="74" y="68" width="20" height="20"/><rect class="trait-fin" x="98" y="68" width="20" height="20"/><rect class="aplat-fort" x="26" y="92" width="20" height="20"/><rect class="aplat-fort" x="50" y="92" width="20" height="20"/><rect class="trait-fin" x="74" y="92" width="20" height="20"/><rect class="trait-fin" x="98" y="92" width="20" height="20"/><rect class="aplat-fort" x="26" y="116" width="20" height="20"/><rect class="aplat-fort" x="50" y="116" width="20" height="20"/><rect class="trait-fin" x="74" y="116" width="20" height="20"/><rect class="trait-fin" x="98" y="116" width="20" height="20"/><path class="trait-fin" d="M26 148 L120 148" marker-end="url(#fl)"/><text class="texte-petit" x="73" y="162" text-anchor="middle">temps</text><text class="texte" x="195" y="28" text-anchor="middle">Canon</text><rect class="aplat-fort" x="151" y="44" width="20" height="20"/><rect class="trait-fin" x="175" y="44" width="20" height="20"/><rect class="trait-fin" x="199" y="44" width="20" height="20"/><rect class="trait-fin" x="223" y="44" width="20" height="20"/><rect class="trait-fin" x="151" y="68" width="20" height="20"/><rect class="aplat-fort" x="175" y="68" width="20" height="20"/><rect class="trait-fin" x="199" y="68" width="20" height="20"/><rect class="trait-fin" x="223" y="68" width="20" height="20"/><rect class="trait-fin" x="151" y="92" width="20" height="20"/><rect class="trait-fin" x="175" y="92" width="20" height="20"/><rect class="aplat-fort" x="199" y="92" width="20" height="20"/><rect class="trait-fin" x="223" y="92" width="20" height="20"/><rect class="trait-fin" x="151" y="116" width="20" height="20"/><rect class="trait-fin" x="175" y="116" width="20" height="20"/><rect class="trait-fin" x="199" y="116" width="20" height="20"/><rect class="aplat-fort" x="223" y="116" width="20" height="20"/><path class="trait-fin" d="M151 148 L245 148" marker-end="url(#fl)"/><text class="texte-petit" x="198" y="162" text-anchor="middle">temps</text><text class="texte" x="320" y="28" text-anchor="middle">Question-réponse</text><rect class="aplat-fort" x="276" y="44" width="20" height="20"/><rect class="trait-fin" x="300" y="44" width="20" height="20"/><rect class="aplat-fort" x="324" y="44" width="20" height="20"/><rect class="trait-fin" x="348" y="44" width="20" height="20"/><rect class="aplat-fort" x="276" y="68" width="20" height="20"/><rect class="trait-fin" x="300" y="68" width="20" height="20"/><rect class="aplat-fort" x="324" y="68" width="20" height="20"/><rect class="trait-fin" x="348" y="68" width="20" height="20"/><rect class="trait-fin" x="276" y="92" width="20" height="20"/><rect class="aplat-fort" x="300" y="92" width="20" height="20"/><rect class="trait-fin" x="324" y="92" width="20" height="20"/><rect class="aplat-fort" x="348" y="92" width="20" height="20"/><rect class="trait-fin" x="276" y="116" width="20" height="20"/><rect class="aplat-fort" x="300" y="116" width="20" height="20"/><rect class="trait-fin" x="324" y="116" width="20" height="20"/><rect class="aplat-fort" x="348" y="116" width="20" height="20"/><path class="trait-fin" d="M276 148 L370 148" marker-end="url(#fl)"/><text class="texte-petit" x="323" y="162" text-anchor="middle">temps</text><g class="texte-petit"><text x="12" y="58" text-anchor="middle">D1</text><text x="12" y="82" text-anchor="middle">D2</text><text x="12" y="106" text-anchor="middle">D3</text><text x="12" y="130" text-anchor="middle">D4</text></g><text class="texte-petit" x="70" y="184" text-anchor="middle">tous ensemble,</text><text class="texte-petit" x="70" y="198" text-anchor="middle">même geste</text><text class="texte-petit" x="195" y="184" text-anchor="middle">même geste,</text><text class="texte-petit" x="195" y="198" text-anchor="middle">départs décalés</text><text class="texte-petit" x="320" y="184" text-anchor="middle">un groupe agit,</text><text class="texte-petit" x="320" y="198" text-anchor="middle">l'autre répond</text><text class="texte-pigment" x="200" y="216" text-anchor="middle">case pleine = le danseur exécute le motif</text></svg>` },
            { t: "propriete", titre: "Les quatre paramètres du mouvement", md: "**Espace** (niveaux haut, moyen, bas ; directions ; trajets), **temps** (vitesse, accélérations, arrêts), **énergie** (fluide, saccadé, lourd, léger), **relations** (contact, regard, distance entre danseurs). « Varier les niveaux », c'est passer du sol à la station debout, puis au saut." },
            { t: "exemple", titre: "La tempête", etapes: ["**Début** : quatre danseurs immobiles au sol, niveau bas.", "**Développement** : D1 se lève et tourne ; les autres reprennent le geste en **canon**.", "Puis tous à l'**unisson**, de plus en plus vite : **contraste** de temps.", "**Fin** : chute lente, retour au sol, silence. Les juges vérifient que le thème se lit sans explication."] },
            { t: "verifie", q: "Ton groupe veut montrer une foule qui se disperse. Quel enchaînement est le plus cohérent ?", choix: ["Unisson groupé au centre, puis départs en cascade vers les bords", "Tous immobiles du début à la fin", "Un solo au centre sans jamais bouger les autres"], bonne: 0, explication: "L'unisson groupé montre la foule ; la cascade de départs vers l'extérieur rend lisible la dispersion. Les procédés servent le propos." },
          ],
        },
        {
          titre: "L'acrosport : construire en sécurité",
          blocs: [
            { t: "tableau", titre: "Trois rôles indispensables", entetes: ["Rôle", "Mission"], lignes: [["**Porteur**", "Supporte : dos plat, appuis solides, bras tendus et verrouillés"], ["**Voltigeur**", "Monte et descend en douceur, corps **gainé**, sans à-coups"], ["**Pareur**", "Surveille et sécurise : prêt à aider ou à rattraper"]] },
            { t: "etapes", titre: "Réaliser une pyramide", items: [{ titre: "Se placer", md: "Porteurs en position, pareurs à côté, voltigeur prêt." }, { titre: "Communiquer", md: "Un signal convenu (« Hop ! ») avant chaque montée." }, { titre: "Monter", md: "Le voltigeur pose ses appuis sur les **zones sûres** : bassin, épaules, cuisses." }, { titre: "Tenir", md: "Pyramide figée **3 secondes**, regard au loin, corps gainés." }, { titre: "Démonter", md: "Dans l'**ordre inverse** de la montée, sans sauter." }] },
            { t: "attention", md: "**Jamais d'appui au milieu du dos** du porteur à quatre pattes (zone lombaire) : c'est la zone fragile de la colonne. On s'appuie au-dessus du **bassin** ou sur les **épaules**." },
          ],
        },
        {
          titre: "Gymnastique, cirque et regard critique",
          blocs: [
            { t: "texte", md: "En **gymnastique**, un **enchaînement** combine des éléments de difficulté croissante (A, B, C) : roulade, roue, **appui tendu renversé** (l'équilibre à la verticale sur les mains, bras tendus), sauts, éléments de maintien. Les **arts du cirque** mêlent jonglage, équilibre (boule, fil, rola-bola) et jeu d'acteur : l'enchaînement devient un **numéro** avec un personnage." },
            { t: "definition", terme: "Code de pointage", md: "Le document qui fixe la **valeur de chaque élément** (difficulté) et les **fautes d'exécution** à pénaliser : jambes pliées, pointes de pieds relâchées, manque d'amplitude, réception instable." },
            { t: "liste", titre: "Juger une chorégraphie : des critères, pas des goûts", items: ["**Lisibilité** du propos : comprend-on le thème ?", "**Originalité** des mouvements et des procédés.", "**Engagement** des danseurs, concentration, regard.", "**Utilisation de l'espace** et **synchronisation** des unissons."] },
            { t: "verifie", q: "En gymnastique, qu'évalue la note d'exécution ?", choix: ["La difficulté des éléments choisis", "La qualité de réalisation : jambes tendues, amplitude, réception", "La musique choisie"], bonne: 1, explication: "La difficulté, c'est la valeur des éléments ; l'exécution, c'est la façon dont ils sont réalisés. Une roue simple parfaitement exécutée peut rapporter plus qu'un élément difficile raté." },
          ],
        },
      ],
      bilan: "Des procédés pour composer, des rôles pour construire en sécurité, des critères pour juger : s'exprimer devant les autres s'apprend et se travaille.",
    },
    "3e-eps-05-affrontement": {
      accroche: "Ton équipe de handball perd 8 ballons sur 20 attaques. Le problème n'est ni la vitesse ni la force : vos passes longues sont interceptées. Un observateur l'a noté, l'équipe a changé de plan… et au match suivant, plus que 3 ballons perdus. Bienvenue dans le monde du projet tactique.",
      objectifs: [
        "Construire un projet tactique en sport collectif et connaître les règles essentielles",
        "Maîtriser le score officiel et les choix tactiques en badminton et en tennis de table",
        "Respecter les règles et l'adversaire en sport de combat ; arbitrer et observer",
      ],
      sections: [
        {
          titre: "Construire un projet tactique",
          blocs: [
            { t: "definition", terme: "Projet tactique", md: "Le plan collectif qui répond à la question : **comment battre cet adversaire-là ?** Il fixe le type d'attaque (**contre-attaque** rapide ou attaque **placée**), la défense (**individuelle** ou **de zone**), l'occupation de l'espace et le **rôle** de chacun : porteur de balle, soutiens, relanceur." },
            { t: "etapes", titre: "Du constat au progrès", items: [{ titre: "Observer", md: "Un observateur relève des données : tirs, pertes de balle, buts encaissés. La **vidéo** montre ce qu'on ne sent pas en jouant." }, { titre: "Analyser", md: "Trouver la cause principale : par exemple, des passes trop longues interceptées." }, { titre: "Choisir", md: "Un projet simple : passes courtes, un soutien derrière le porteur." }, { titre: "Appliquer", md: "Jouer le match suivant avec ce projet, chacun dans son rôle." }, { titre: "Évaluer", md: "Comparer les nouvelles données aux anciennes, puis ajuster." }] },
            { t: "schema", titre: "Un projet d'attaque au handball", legende: "L'équipe attaque vers la droite. Au lieu de la passe longue risquée, elle monte la balle en passes courtes, avec un soutien derrière le porteur.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat-papier" x="20" y="20" width="360" height="180"/><rect class="trait" x="20" y="20" width="360" height="180"/><path class="trait-fin" d="M200 20 L200 200"/><path class="aplat" d="M380 56 A54 54 0 0 0 380 164 Z"/><path class="trait" d="M380 56 A54 54 0 0 0 380 164 M20 56 A54 54 0 0 1 20 164"/><path class="pointille" d="M380 29 A81 81 0 0 0 380 191 M20 29 A81 81 0 0 1 20 191"/><rect class="aplat-fort" x="380" y="97" width="7" height="27"/><rect class="aplat-fort" x="13" y="97" width="7" height="27"/><text class="texte-petit" x="362" y="114" text-anchor="middle">6 m</text><g class="aplat"><rect x="300" y="48" width="12" height="12"/><rect x="294" y="78" width="12" height="12"/><rect x="294" y="128" width="12" height="12"/><rect x="300" y="158" width="12" height="12"/></g><g class="trait-fin"><rect x="300" y="48" width="12" height="12"/><rect x="294" y="78" width="12" height="12"/><rect x="294" y="128" width="12" height="12"/><rect x="300" y="158" width="12" height="12"/></g><g class="aplat-fort"><circle cx="336" cy="34" r="7"/><circle cx="270" cy="62" r="7"/><circle cx="256" cy="110" r="7"/><circle cx="270" cy="160" r="7"/><circle cx="336" cy="186" r="7"/><circle cx="222" cy="126" r="7"/></g><path d="M260 102 L267 74" fill="none" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><path d="M277 56 L326 38" fill="none" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><path class="pointille" d="M262 117 L328 180"/><path class="trait" d="M289 140 L301 152 M301 140 L289 152"/><text class="texte-petit" x="256" y="96" text-anchor="end">porteur</text><text class="texte-petit" x="214" y="146" text-anchor="middle">soutien</text><circle class="aplat-fort" cx="40" cy="40" r="7"/><text class="texte-petit" x="54" y="44">attaquant</text><rect class="aplat" x="34" y="56" width="12" height="12"/><rect class="trait-fin" x="34" y="56" width="12" height="12"/><text class="texte-petit" x="54" y="66">défenseur</text><path d="M32 86 L60 86" fill="none" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><text class="texte-petit" x="68" y="90">passe courte</text><path class="pointille" d="M32 106 L60 106"/><path class="trait" d="M42 101 L50 111 M50 101 L42 111"/><text class="texte-petit" x="68" y="110">passe longue interceptée</text><text class="texte-petit" x="200" y="220" text-anchor="middle">zone des 6 m : interdite aux joueurs de champ</text></svg>` },
          ],
        },
        {
          titre: "Les règles essentielles des sports collectifs",
          blocs: [
            { t: "tableau", titre: "Règles clés", entetes: ["Sport", "Joueurs par équipe", "Règles à connaître"], lignes: [["**Handball**", "7 (dont le gardien)", "Zone des 6 m interdite aux joueurs de champ ; 3 pas et 3 secondes balle en main ; jet de 7 m"], ["**Basket-ball**", "5", "**24 secondes** pour tirer ; marcher et reprise de dribble interdits ; 5 fautes = exclusion"], ["**Volley-ball**", "6", "3 touches maximum par équipe ; sets de 25 points avec 2 points d'écart"], ["**Ultimate**", "7", "**Auto-arbitrage** : pas d'arbitre, les joueurs règlent les fautes ; aucun contact"]] },
            { t: "verifie", q: "Au handball, combien de pas un joueur peut-il faire balle en main sans dribbler ?", choix: ["2", "3", "5"], bonne: 1, explication: "La règle des 3 pas : au-delà, c'est un « marcher ». Le joueur ne peut pas non plus garder la balle plus de 3 secondes sans jouer." },
            { t: "texte", md: "Arbitrer, observer, coacher : ces **rôles** font partie de l'apprentissage. L'**arbitre** applique les règles et protège les joueurs ; l'**observateur** relève des données objectives ; le **coach** transforme ces données en consignes." },
          ],
        },
        {
          titre: "Badminton et tennis de table : marquer et faire bouger l'adversaire",
          blocs: [
            { t: "propriete", titre: "Le score officiel", md: "**Badminton** : set en **21 points**, avec 2 points d'écart (plafond à 30) ; **2 sets gagnants** ; service par-dessous, en diagonale.\n**Tennis de table** : manche en **11 points**, avec 2 points d'écart ; le service change **tous les 2 points** ; match en 3 manches gagnantes en compétition." },
            { t: "texte", md: "La tactique de base est la même dans les deux sports : **déplacer l'adversaire** pour créer un espace libre, puis **conclure**. Au badminton, on alterne le **dégagé** (volant envoyé haut au fond) et l'**amorti** (volant qui tombe juste derrière le filet), avant le **smash**. Au tennis de table, on varie les placements et les **effets** : le lifté (*topspin*) fait plonger la balle, le coupé la freine." },
            { t: "exemple", titre: "L'adversaire reste au fond du terrain", md: "Au badminton, ton adversaire recule pour attendre tes dégagés. Coup gagnant : l'**amorti**. Le volant tombe près du filet, loin de lui : il doit courir vers l'avant, et s'il le rattrape, il libère le fond pour ton prochain dégagé." },
          ],
        },
        {
          titre: "Sports de combat, arbitrage et fair-play",
          blocs: [
            { t: "tableau", titre: "Trois sports de combat", entetes: ["Sport", "Principe", "Vocabulaire"], lignes: [["**Boxe française** (savate)", "Touches pied et poing", "**Assaut** : touches contrôlées, sans puissance, pour marquer"], ["**Judo**", "Projeter ou immobiliser au sol", "**Ippon** (fin immédiate du combat), **waza-ari**, salut, code moral"], ["**Lutte**", "Amener l'adversaire au sol", "**Tombé** : les deux épaules au sol"]] },
            { t: "attention", md: "En sport de combat, l'adversaire est un **partenaire** : on salue, on **contrôle sa force**, on arrête **immédiatement** au signal de l'arbitre ou quand l'autre abandonne." },
            { t: "verifie", q: "L'arbitre élève siffle une faute contre toi que tu juges injuste. Quelle attitude relève du fair-play ?", choix: ["Contester bruyamment pour qu'il change d'avis", "Accepter la décision et continuer à jouer", "Arrêter de jouer pour protester"], bonne: 1, explication: "Le fair-play, c'est accepter la décision de l'arbitre, saluer l'adversaire, reconnaître ses fautes et refuser la violence ou la tricherie. On peut en reparler calmement après le match." },
          ],
        },
      ],
      bilan: "Observer, analyser, choisir un plan, l'appliquer et l'évaluer, dans le respect des règles et de l'adversaire : c'est ainsi qu'on gagne avec intelligence.",
    },
    "3e-eps-06-culture-citoyennete-secours": {
      accroche: "Un camarade s'effondre pendant le cross. Autour de lui, tout le monde panique. Toi, tu sais exactement quoi faire, dans l'ordre, et tu sauves peut-être une vie. Le sport, c'est aussi cela : des valeurs, une histoire, une citoyenneté.",
      objectifs: [
        "Connaître l'histoire, les valeurs et les symboles des Jeux olympiques et paralympiques",
        "Analyser les liens entre sport et société : égalité, inclusion, médias, argent, santé",
        "Connaître les gestes de premiers secours (PSC1) et des métiers du sport",
      ],
      sections: [
        {
          titre: "Des Jeux antiques à Paris 2024",
          blocs: [
            { t: "texte", md: "Les **Jeux olympiques antiques** se déroulaient à **Olympie**, en Grèce, dès **776 av. J.-C.**, en l'honneur de Zeus. Le Français **Pierre de Coubertin** veut les faire renaître : il fonde le **Comité international olympique** (CIO) en **1894**, et les premiers Jeux modernes ont lieu à **Athènes en 1896**." },
            { t: "frise", titre: "Les Jeux olympiques modernes", evenements: [{ date: 1896, label: "Athènes", detail: "Premiers Jeux modernes." }, { date: 1900, label: "Paris", detail: "Premières femmes en compétition." }, { date: 1924, label: "Paris", detail: "Deuxièmes Jeux à Paris ; premiers Jeux d'hiver à Chamonix." }, { date: 1936, label: "Berlin", detail: "Utilisés par la propagande nazie ; quatre médailles d'or pour Jesse Owens." }, { date: 1960, label: "Rome", detail: "Premiers Jeux paralympiques." }, { date: 1968, label: "Mexico", detail: "Poings levés de Tommie Smith et John Carlos contre le racisme." }, { date: 2024, label: "Paris", detail: "Troisièmes Jeux à Paris, parité parfaite." }] },
            { t: "citation", texte: "L'important dans la vie ce n'est point le triomphe, mais le combat ; l'essentiel ce n'est pas d'avoir vaincu, mais de s'être bien battu.", auteur: "Pierre de Coubertin", source: "Discours de Londres, 1908" },
            { t: "attention", md: "Coubertin, fondateur génial, était pourtant **opposé** à la participation des femmes aux Jeux. L'égalité s'est construite **contre** ses idées : il a fallu attendre **Paris 2024** pour une parité parfaite entre athlètes femmes et hommes." },
          ],
        },
        {
          titre: "Symboles et valeurs olympiques et paralympiques",
          blocs: [
            { t: "tableau", titre: "Les symboles", entetes: ["Symbole", "Signification"], lignes: [["**Cinq anneaux** (1913)", "Les continents unis par le sport"], ["*Citius, Altius, Fortius*", "Plus vite, plus haut, plus fort"], ["*Communiter* (ajouté en 2021)", "Ensemble"], ["**Trois agitos**", "Symbole paralympique : « je bouge », en latin"], ["**Flamme olympique**", "Allumée à Olympie, elle relie Jeux antiques et modernes"]] },
            { t: "texte", md: "Les **Jeux paralympiques** naissent des jeux de **Stoke Mandeville**, en Angleterre, organisés en **1948** par le médecin **Ludwig Guttmann** pour des soldats blessés à la colonne vertébrale. Les premiers Jeux paralympiques officiels ont lieu à **Rome en 1960**.\n\n**Paris 2024** : cérémonie d'ouverture sur la **Seine**, **breaking** au programme, quatre titres individuels pour le nageur **Léon Marchand**, l'or pour Teddy Riner, Antoine Dupont (rugby à 7), et chez les paralympiques Aurélie Aubert (boccia) et Alexis Hanquinquant (paratriathlon)." },
            { t: "verifie", q: "Quelle particularité de Paris 2024 illustre le progrès de l'égalité dans le sport ?", choix: ["La cérémonie sur la Seine", "La parité parfaite entre athlètes femmes et hommes", "Le breaking au programme"], bonne: 1, explication: "Pour la première fois, il y avait autant de places pour les femmes que pour les hommes parmi les athlètes. La Seine et le breaking sont des nouveautés, mais pas des progrès d'égalité." },
          ],
        },
        {
          titre: "Sport et société",
          blocs: [
            { t: "texte", md: "Le sport peut **rassembler** : inclusion, **handisport**, mixité, rencontres entre cultures. Il peut aussi **exclure** : racisme, sexisme, homophobie, violence de certains supporters. Les **médias** et l'**argent** transforment le sport professionnel : droits de retransmission télévisée (aujourd'hui la principale source de revenus des grandes compétitions), sponsors, transferts de joueurs à des millions d'euros." },
            { t: "propriete", titre: "Sport et santé", md: "L'**OMS** recommande aux enfants et adolescents au moins **60 minutes d'activité physique par jour**. Le sport prévient l'obésité et les maladies du cœur, améliore le sommeil, la concentration et le moral." },
            { t: "texte", md: "**Métiers du sport** : éducateur sportif (diplôme **BPJEPS**), **professeur d'EPS** (licence **STAPS**, puis concours), kinésithérapeute, préparateur physique, arbitre, journaliste sportif, gestionnaire d'équipements. À l'école, tu tiens déjà des **rôles sociaux** : capitaine, arbitre, juge, coach, organisateur." },
          ],
        },
        {
          titre: "Savoir porter secours : le PSC1",
          blocs: [
            { t: "etapes", titre: "Les trois actions du secouriste", items: [{ titre: "Protéger", md: "Supprimer le danger ou éloigner la victime, **sans te mettre toi-même en danger** (écarter les coureurs, baliser)." }, { titre: "Alerter", md: "Appeler les secours et donner le **lieu précis**, ce qui s'est passé, l'état de la victime. Ne raccrocher que quand on te le dit." }, { titre: "Secourir", md: "Faire les gestes adaptés à l'état de la victime et la **surveiller** jusqu'à l'arrivée des secours." }] },
            { t: "tableau", titre: "Les numéros d'urgence", entetes: ["Numéro", "Service"], lignes: [["**15**", "SAMU (urgence médicale)"], ["**17**", "Police, gendarmerie"], ["**18**", "Sapeurs-pompiers"], ["**112**", "Numéro d'urgence européen"], ["**114**", "Par SMS, pour les personnes qui ne peuvent pas parler ou entendre"]] },
            { t: "etapes", titre: "Mettre en PLS (victime inconsciente qui respire)", items: [{ titre: "Préparer", md: "À genoux à côté de la victime ; retirer ses lunettes ; placer son bras, côté toi, à angle droit." }, { titre: "La main sous la joue", md: "Prendre son autre main et la plaquer, **dos de la main contre son oreille**, de ton côté. La maintenir." }, { titre: "Relever la jambe", md: "Saisir la jambe opposée derrière le genou et la relever, pied au sol." }, { titre: "Tourner", md: "Tirer sur la jambe pour faire **rouler** la victime vers toi, d'un seul bloc." }, { titre: "Stabiliser", md: "Ajuster la jambe du dessus (hanche et genou à angle droit) ; ouvrir sa bouche." }, { titre: "Alerter et surveiller", md: "Appeler le 15 ou le 112, puis **surveiller sa respiration** sans arrêt." }] },
            { t: "propriete", titre: "Si la victime ne respire pas", md: "Faire alerter, puis **massage cardiaque** : **30 compressions** au centre de la poitrine, au rythme de **100 à 120 par minute**, puis **2 insufflations**, et ainsi de suite. Utiliser **dès que possible** un **défibrillateur** (DAE) : il guide à la voix, on ne peut pas se tromper." },
            { t: "exemple", titre: "Le camarade du cross", md: "Tu **protèges** (tu écartes les autres coureurs). Il ne répond pas mais **respire** : tu le mets en **PLS**, tu fais **alerter le 15** en donnant le lieu précis, puis tu **surveilles** sa respiration. S'il cesse de respirer : massage cardiaque et défibrillateur." },
            { t: "verifie", q: "Une personne est inconsciente mais respire. Que fais-tu ?", choix: ["Je commence un massage cardiaque", "Je la mets en PLS, j'alerte et je surveille sa respiration", "Je la fais asseoir et boire"], bonne: 1, explication: "La PLS garde les voies respiratoires libres : la langue ne bascule pas, les vomissements s'écoulent. Le massage cardiaque est réservé à une victime qui ne respire pas." },
          ],
        },
      ],
      bilan: "Connaître l'histoire et les valeurs du sport, en voir les dérives, et savoir protéger, alerter, secourir : l'EPS forme des sportifs, mais aussi des citoyens.",
    },
  },
};
