// Cours ÉCLORE — 6e EPS. Schéma : docs/COURS.md
export default {
  id: "6e-eps",
  chapitres: {
    "6e-eps-01-sante-securite": {
      accroche: "Pose deux doigts sur ton cou, sous la mâchoire : tu sens ton cœur battre. Après dix allers-retours en courant, recommence. Que s'est-il passé, et pourquoi ?",
      objectifs: [
        "Connaître le rôle de l'échauffement, du retour au calme et des étirements",
        "Mesurer sa fréquence cardiaque et comprendre ses variations",
        "Adopter de bonnes habitudes : hydratation, sommeil, tenue",
      ],
      sections: [
        {
          titre: "Une séance en trois temps",
          blocs: [
            { t: "texte", md: "Un moteur de voiture froid tourne mal ; tes muscles, c'est pareil. Avant de courir vite ou de sauter haut, il faut les **préparer**. Et après l'effort, on ne s'arrête pas d'un coup : on aide le corps à **revenir au calme**." },
            { t: "definition", terme: "Échauffement", md: "Une suite d'exercices progressifs qui **prépare le corps à l'effort** : il augmente la température des muscles, accélère le cœur et la respiration, et **réduit le risque de blessure**." },
            { t: "etapes", titre: "Le déroulement d'une séance d'EPS", items: [{ titre: "Échauffement", md: "Course lente, mobilisation des articulations (chevilles, genoux, épaules), petites accélérations." }, { titre: "Activité principale", md: "Le cœur de la séance : match, course, enchaînement…" }, { titre: "Retour au calme", md: "Marche lente et respiration profonde : le cœur ralentit peu à peu." }, { titre: "Étirements doux", md: "Une fois le cœur calmé, sans forcer ni à-coups, puis on boit." }] },
            { t: "exemple", titre: "Calculer le temps de l'activité principale", md: "Le cours dure 2 heures, soit **120 minutes**. L'échauffement prend 20 minutes et le retour au calme 10 minutes. Il reste 120 − 20 − 10 = **90 minutes** pour l'activité principale." },
          ],
        },
        {
          titre: "Le cœur pendant l'effort",
          blocs: [
            { t: "definition", terme: "Fréquence cardiaque", md: "Le **nombre de battements du cœur par minute**. Au repos, chez un collégien, elle est d'environ **70 à 90** battements par minute." },
            { t: "texte", md: "Pourquoi le cœur accélère-t-il quand tu cours ? Tes muscles travaillent : ils ont besoin de beaucoup plus d'**oxygène** et de sucre. Le cœur bat plus vite pour leur envoyer plus de sang, et tu respires plus vite pour capter plus d'air. Tu transpires aussi : la sueur refroidit ton corps qui chauffe." },
            { t: "propriete", titre: "Mesurer sa fréquence cardiaque", md: "Compte tes battements pendant **15 secondes**, puis **multiplie par 4** (car 4 × 15 s = 1 minute)." },
            { t: "exemple", titre: "Avant et après la course", etapes: ["Après la course, tu comptes 30 battements en 15 secondes : 30 × 4 = **120 battements par minute**.", "Tu marches deux minutes et tu recomptes : 20 battements, soit 20 × 4 = 80.", "Ton cœur redescend : c'est la **récupération**. Plus tu t'entraînes, plus elle est rapide."] },
            { t: "graphique", type: "courbe", titre: "Fréquence cardiaque pendant une séance de 90 minutes", unite: "battements/min", donnees: [{ label: "0 min", valeur: 80 }, { label: "5 min", valeur: 110 }, { label: "15 min", valeur: 130 }, { label: "30 min", valeur: 160 }, { label: "50 min", valeur: 175 }, { label: "70 min", valeur: 165 }, { label: "80 min", valeur: 120 }, { label: "90 min", valeur: 95 }] },
            { t: "verifie", q: "Tu comptes 18 battements en 15 secondes. Quelle est ta fréquence cardiaque ?", choix: ["18 battements par minute", "60 battements par minute", "72 battements par minute"], bonne: 2, explication: "On multiplie par 4 : 18 × 4 = 72 battements par minute. C'est une fréquence de repos." },
          ],
        },
        {
          titre: "Les zones d'effort",
          blocs: [
            { t: "schema", titre: "Repères de fréquence cardiaque d'un collégien", legende: "Valeurs approximatives : chacun a son propre cœur. Plus l'effort est intense, plus la fréquence monte.", svg: `<svg viewBox="0 0 400 250"><rect class="aplat-fort trait-fin" x="80" y="20" width="120" height="50"/><rect class="aplat trait-fin" x="80" y="70" width="120" height="50"/><rect class="aplat-papier trait-fin" x="80" y="120" width="120" height="60"/><rect class="aplat-papier trait-fin" x="80" y="180" width="120" height="40"/><text class="texte-petit" x="72" y="24" text-anchor="end">190</text><text class="texte-petit" x="72" y="74" text-anchor="end">160</text><text class="texte-petit" x="72" y="124" text-anchor="end">130</text><text class="texte-petit" x="72" y="184" text-anchor="end">90</text><text class="texte-petit" x="72" y="224" text-anchor="end">70</text><text class="texte" x="215" y="40">effort intense</text><text class="texte-petit" x="215" y="56">sprint, fin de match</text><text class="texte" x="215" y="90">effort moyen</text><text class="texte-petit" x="215" y="106">course d'endurance</text><text class="texte" x="215" y="145">effort léger</text><text class="texte-petit" x="215" y="161">échauffement, marche rapide</text><text class="texte" x="215" y="205">repos</text><path class="trait-fin" d="M40 220 L40 24" marker-end="url(#fl)"/><text class="texte-petit" x="40" y="242" text-anchor="middle">battements/min</text></svg>` },
            { t: "attention", md: "Un **point de côté** pendant la course ? N'accélère pas et ne bloque pas ta respiration : **ralentis**, souffle longuement et calmement, et appuie doucement sur la zone douloureuse." },
          ],
        },
        {
          titre: "Les bonnes habitudes",
          blocs: [
            { t: "tableau", titre: "Prendre soin de son corps", entetes: ["Habitude", "Quand ?", "Pourquoi ?"], lignes: [["**Boire de l'eau**", "Avant, pendant et après l'effort, sans attendre la soif", "On perd de l'eau en transpirant ; la soif arrive trop tard"], ["**Dormir 9 à 11 heures**", "Chaque nuit", "Pour récupérer, grandir et bien apprendre"], ["**S'échauffer**", "Juste avant l'effort", "Pour éviter les blessures"], ["**S'étirer doucement**", "Après l'effort, au retour au calme", "Pour détendre les muscles"]] },
            { t: "liste", titre: "La tenue adaptée", items: ["Des **baskets lacées** qui tiennent le pied.", "Des vêtements **souples**, dans lesquels on bouge facilement.", "Les **cheveux attachés**, **pas de bijoux** (ils peuvent blesser toi ou un camarade).", "Une bouteille d'**eau** : c'est la meilleure boisson, bien avant les sodas."] },
            { t: "verifie", q: "Pendant un effort, faut-il attendre d'avoir soif pour boire ?", choix: ["Oui, la soif dit quand boire", "Non, il faut boire régulièrement avant d'avoir soif"], bonne: 1, explication: "Quand la soif apparaît, le corps manque déjà d'eau. On boit par petites gorgées, avant, pendant et après l'effort." },
          ],
        },
      ],
      bilan: "S'échauffer, écouter son cœur, revenir au calme, boire, dormir : un sportif en bonne santé, c'est d'abord quelqu'un qui prend soin de son corps.",
    },

    "6e-eps-02-produire-une-performance": {
      accroche: "Courir plus vite, sauter plus loin, lancer plus fort : en athlétisme, tout se mesure. Mais pour progresser, il ne suffit pas de « tout donner », il faut savoir comment.",
      objectifs: [
        "Réaliser et mesurer une performance en course, saut et lancer",
        "Gérer son allure en demi-fond et calculer une vitesse",
        "Nager en sécurité et respecter les règles de la piscine",
      ],
      sections: [
        {
          titre: "Mesurer une performance",
          blocs: [
            { t: "definition", terme: "Performance", md: "Le **résultat mesuré** d'un effort : un temps, une distance, une hauteur. Le **record** est la meilleure performance jamais réalisée dans une épreuve." },
            { t: "tableau", titre: "Chaque épreuve a sa mesure", entetes: ["Épreuve", "Ce que l'on mesure", "Unité"], lignes: [["Course de vitesse", "Le temps, au chronomètre", "secondes (s)"], ["Demi-fond", "Le temps sur une distance, ou la distance en un temps donné", "minutes, mètres"], ["Saut en longueur", "La distance sautée", "mètres (m)"], ["Lancer", "La distance de chute de l'engin", "mètres (m)"]] },
            { t: "texte", md: "En **course de vitesse**, on court le plus vite possible sur une courte distance (50 m, 80 m). Le départ se fait au signal : « À vos marques, **prêts**, partez ! ». Le meilleur temps est le **plus petit**." },
          ],
        },
        {
          titre: "Vitesse et allure",
          blocs: [
            { t: "propriete", titre: "Calculer une vitesse", md: "**vitesse = distance ÷ temps**\nSi tu cours 100 m en 20 s, ta vitesse est 100 ÷ 20 = **5 m/s** (mètres par seconde)." },
            { t: "definition", terme: "Demi-fond", md: "Une course de **800 m à 1 500 m environ**. Il faut y trouver une **allure régulière** : partir trop vite fait s'effondrer à la fin." },
            { t: "graphique", type: "barres", titre: "Un coureur parti trop vite sur 1 000 m : temps de chaque tranche de 200 m", unite: "s", donnees: [{ label: "1er 200 m", valeur: 45 }, { label: "2e 200 m", valeur: 55 }, { label: "3e 200 m", valeur: 65 }, { label: "4e 200 m", valeur: 75 }, { label: "5e 200 m", valeur: 80 }] },
            { t: "texte", md: "Ce coureur a fini en 45 + 55 + 65 + 75 + 80 = **320 secondes**. S'il avait couru chaque 200 m en 60 secondes, régulièrement, il aurait fini en 5 × 60 = **300 secondes**, soit 5 minutes : plus vite, et moins épuisé !" },
            { t: "exemple", titre: "Tenir 1 000 m en 5 minutes", etapes: ["5 minutes pour 1 000 m, c'est **200 m par minute**.", "On place un plot tous les 200 m.", "À chaque coup de sifflet (toutes les minutes), tu dois passer à un plot : en avance, tu ralentis ; en retard, tu accélères.", "Vitesse moyenne : 1 km en 5 min, donc 12 km en 60 min, soit **12 km/h**."] },
            { t: "verifie", q: "Pour réussir un 1 000 m, quelle est la meilleure stratégie ?", choix: ["Partir le plus vite possible", "Garder une allure régulière", "Marcher au début puis sprinter"], bonne: 1, explication: "Une allure régulière évite de s'épuiser au début : on termine plus vite et en meilleur état." },
          ],
        },
        {
          titre: "Sauter et lancer en sécurité",
          blocs: [
            { t: "etapes", titre: "Les quatre phases du saut en longueur", items: [{ titre: "Course d'élan", md: "Accélère progressivement sur une distance toujours identique." }, { titre: "Impulsion", md: "Pousse fort sur un pied, sur la planche ou dans la zone d'appel." }, { titre: "Suspension", md: "En l'air, monte les genoux et garde l'équilibre." }, { titre: "Réception", md: "Atterris dans le sable, pieds devant, et tombe vers l'avant. On mesure jusqu'à la trace la plus proche de la planche." }] },
            { t: "schema", titre: "L'atelier de lancer", legende: "On lance tous au signal ; on ne va chercher l'engin que lorsque tout le monde a lancé.", svg: `<svg viewBox="0 0 400 220"><rect class="aplat-papier trait-fin" x="110" y="20" width="280" height="180"/><line class="trait" x1="100" y1="20" x2="100" y2="200" stroke-width="3"/><line class="pointille" x1="190" y1="20" x2="190" y2="200"/><line class="pointille" x1="270" y1="20" x2="270" y2="200"/><line class="pointille" x1="350" y1="20" x2="350" y2="200"/><text class="texte-petit" x="190" y="214" text-anchor="middle">5 m</text><text class="texte-petit" x="270" y="214" text-anchor="middle">10 m</text><text class="texte-petit" x="350" y="214" text-anchor="middle">15 m</text><circle class="aplat-fort" cx="82" cy="60" r="8"/><circle class="aplat-fort" cx="82" cy="110" r="8"/><circle class="aplat-fort" cx="82" cy="160" r="8"/><circle class="trait-fin" cx="28" cy="85" r="7" fill="none"/><circle class="trait-fin" cx="28" cy="135" r="7" fill="none"/><path class="trait-fin" d="M92 110 Q180 50 300 110" fill="none" marker-end="url(#fl-p)"/><text class="texte-main" x="250" y="160" text-anchor="middle">zone de chute vide</text><text class="texte-petit" x="82" y="40" text-anchor="middle">lanceurs</text><text class="texte-petit" x="28" y="190" text-anchor="middle">attente</text><text class="texte-petit" x="104" y="14">ligne de lancer</text></svg>` },
            { t: "attention", md: "Un engin de lancer, même en mousse ou une balle lestée, peut blesser. On ne lance **qu'au signal** du professeur, pour être sûr que **personne** ne se trouve dans la zone de chute." },
          ],
        },
        {
          titre: "Savoir nager en sécurité",
          blocs: [
            { t: "texte", md: "Savoir nager, ce n'est pas nager vite : c'est pouvoir **se débrouiller seul dans l'eau**, par exemple si tu tombes d'un bateau. L'**attestation du savoir-nager en sécurité (ASNS)**, à valider en fin de cycle 3, vérifie que tu sais **entrer dans l'eau, te déplacer, flotter, t'immerger et sortir sans aide**." },
            { t: "liste", titre: "Les règles de la piscine", items: ["Passer à la **douche** avant d'entrer dans le bassin.", "**Ne pas courir** sur le bord : le sol mouillé glisse.", "Ne **pas plonger** dans le petit bassin, trop peu profond.", "Attendre le **signal** du professeur ou du maître-nageur pour entrer dans l'eau."] },
            { t: "verifie", q: "Que vérifie l'attestation du savoir-nager en sécurité (ASNS) ?", choix: ["Que l'on nage le crawl très vite", "Que l'on sait entrer dans l'eau, se déplacer, flotter, s'immerger et sortir sans aide", "Que l'on sait plonger de 3 m"], bonne: 1, explication: "L'ASNS n'est pas une course : c'est un parcours qui prouve que l'on est autonome et en sécurité dans l'eau." },
          ],
        },
      ],
      bilan: "Mesurer, calculer sa vitesse, gérer son allure, respecter le signal et les règles de l'eau : la performance se construit avec la tête autant qu'avec les jambes.",
    },

    "6e-eps-03-adapter-ses-deplacements": {
      accroche: "Une forêt inconnue, une carte, et quelque part entre les arbres, des balises orange et blanc à trouver. Ou un mur de six mètres avec, au bout de ta corde, un camarade qui veille sur toi.",
      objectifs: [
        "Lire et orienter une carte, utiliser l'échelle, trouver des balises",
        "Grimper et assurer en respectant les règles de sécurité",
        "Se déplacer en sécurité dans un milieu inhabituel",
      ],
      sections: [
        {
          titre: "La course d'orientation",
          blocs: [
            { t: "definition", terme: "Course d'orientation", md: "Une activité où l'on cherche des **balises** (postes orange et blanc) à l'aide d'une **carte**, et parfois d'une **boussole**, en choisissant son propre itinéraire." },
            { t: "tableau", titre: "Les outils de l'orienteur", entetes: ["Outil", "Son rôle"], lignes: [["**Carte**", "Représente le terrain **vu du dessus**"], ["**Légende**", "Explique les symboles de la carte (forêt, chemin, bâtiment…)"], ["**Boussole**", "Son aiguille rouge indique le **nord**"], ["**Balise**", "Le poste à trouver, souvent orange et blanc"]] },
            { t: "schema", titre: "Une carte de course d'orientation", legende: "Le triangle marque le départ, les cercles numérotés les balises, le double cercle l'arrivée.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier trait" x="20" y="20" width="280" height="200"/><path class="aplat" d="M40 40 L150 36 L170 110 L60 120 Z"/><ellipse class="aplat-fort" cx="230" cy="170" rx="40" ry="22"/><path class="pointille" d="M30 200 Q120 150 200 120 T290 40" fill="none"/><path class="trait-fin" d="M70 190 L100 70 L250 70 L170 175 L120 200" fill="none"/><path class="trait" d="M70 180 L80 197 L60 197 Z" fill="none"/><circle class="trait" cx="100" cy="70" r="9" fill="none"/><circle class="trait" cx="250" cy="70" r="9" fill="none"/><circle class="trait" cx="170" cy="175" r="9" fill="none"/><circle class="trait" cx="120" cy="200" r="9" fill="none"/><circle class="trait" cx="120" cy="200" r="5" fill="none"/><text class="texte-pigment" x="112" y="62">1</text><text class="texte-pigment" x="262" y="62">2</text><text class="texte-pigment" x="182" y="166">3</text><path class="trait" d="M350 90 L350 30" marker-end="url(#fl-p)"/><text class="texte" x="350" y="106" text-anchor="middle">N</text><rect class="aplat" x="315" y="130" width="14" height="10"/><text class="texte-petit" x="334" y="139">forêt</text><rect class="aplat-fort" x="315" y="150" width="14" height="10"/><text class="texte-petit" x="334" y="159">étang</text><line class="pointille" x1="315" y1="175" x2="329" y2="175"/><text class="texte-petit" x="334" y="179">chemin</text><line class="trait" x1="315" y1="205" x2="355" y2="205"/><text class="texte-petit" x="335" y="222" text-anchor="middle">1 cm = 50 m</text></svg>` },
            { t: "propriete", titre: "Orienter sa carte", md: "Avant de partir, on **oriente** sa carte : on la tourne pour que son **nord** soit dirigé vers le **nord du terrain** (indiqué par l'aiguille rouge de la boussole). Ainsi, ce qui est à droite sur la carte est aussi à droite devant toi." },
          ],
        },
        {
          titre: "Utiliser l'échelle",
          blocs: [
            { t: "definition", terme: "Échelle", md: "Elle indique combien de mètres sur le terrain représente **1 cm** sur la carte." },
            { t: "exemple", titre: "Une carte au 1/5 000", etapes: ["Au 1/5 000, 1 cm sur la carte représente 5 000 cm sur le terrain.", "5 000 cm = 50 m.", "La balise est à 2 cm de toi sur la carte : 2 × 50 = **100 m** sur le terrain."] },
            { t: "verifie", q: "Avant de partir en course d'orientation, que faut-il faire en premier ?", choix: ["Courir le plus vite possible", "Orienter sa carte vers le nord", "Chercher la balise la plus lointaine"], bonne: 1, explication: "Une carte orientée correspond au terrain devant toi : c'est la base pour ne pas se perdre. Les quatre points cardinaux principaux sont nord, sud, est, ouest." },
          ],
        },
        {
          titre: "L'escalade : grimper et assurer",
          blocs: [
            { t: "texte", md: "En escalade **en moulinette**, la corde monte du grimpeur jusqu'à un point d'ancrage en haut du mur, le **relais**, puis redescend jusqu'à l'**assureur**. Si le grimpeur lâche prise, l'assureur bloque la corde : il reste suspendu, en sécurité." },
            { t: "schema", titre: "Grimper en moulinette", legende: "Le grimpeur est encordé à son baudrier ; l'assureur tient la corde et le retient s'il tombe.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier trait" x="120" y="20" width="120" height="200"/><line class="trait" x1="20" y1="220" x2="390" y2="220"/><circle class="aplat-fort trait" cx="200" cy="30" r="7"/><circle class="aplat" cx="150" cy="80" r="5"/><circle class="aplat" cx="210" cy="110" r="5"/><circle class="aplat" cx="160" cy="160" r="5"/><circle class="trait" cx="185" cy="120" r="8" fill="none"/><line class="trait" x1="185" y1="128" x2="185" y2="155"/><line class="trait" x1="185" y1="134" x2="208" y2="112"/><line class="trait" x1="185" y1="134" x2="160" y2="150"/><line class="trait" x1="185" y1="155" x2="165" y2="168"/><line class="trait" x1="185" y1="155" x2="200" y2="180"/><path class="trait-fin" d="M190 150 L200 37 L300 190" fill="none"/><circle class="trait" cx="310" cy="172" r="8" fill="none"/><line class="trait" x1="310" y1="180" x2="310" y2="200"/><line class="trait" x1="310" y1="186" x2="300" y2="192"/><line class="trait" x1="310" y1="200" x2="302" y2="219"/><line class="trait" x1="310" y1="200" x2="318" y2="219"/><text class="texte-petit" x="212" y="26">relais</text><text class="texte" x="40" y="130">grimpeur</text><text class="texte-petit" x="40" y="146">baudrier + nœud de huit</text><text class="texte" x="330" y="160">assureur</text><text class="texte-petit" x="270" y="110">corde</text></svg>` },
            { t: "etapes", titre: "Avant de grimper : les contrôles", items: [{ titre: "Baudrier", md: "Mets ton baudrier et serre-le bien à la taille." }, { titre: "Nœud de huit", md: "Fais le **nœud de huit** pour relier la corde au baudrier." }, { titre: "Vérification croisée", md: "Chacun vérifie le nœud de l'autre et le système d'assurage." }, { titre: "Prêt !", md: "Annonce « prêt », attends l'accord de l'assureur, puis grimpe." }] },
            { t: "attention", md: "Même pressé, **on ne grimpe jamais** sans avoir fait vérifier son nœud. Une seule erreur peut provoquer une chute grave." },
          ],
        },
        {
          titre: "Dans l'eau et dans la nature",
          blocs: [
            { t: "texte", md: "Un lac, une rivière ou la mer ne ressemblent pas à une piscine : pas de bord où s'accrocher, une eau parfois froide ou trouble, des courants. Il faut donc des règles strictes : on ne s'éloigne **jamais seul**, on respecte les **zones de baignade surveillées**, on porte un gilet en kayak." },
            { t: "astuce", md: "Fatigué dans l'eau ? Mets-toi sur le dos, bras et jambes écartés **en étoile**, le visage hors de l'eau : ton corps flotte presque sans effort et tu peux reprendre ton souffle." },
            { t: "verifie", q: "Dans l'eau, pour reprendre son souffle en sécurité, on peut :", choix: ["Agiter les bras très vite", "Flotter sur le dos en étoile, le visage hors de l'eau", "Retenir sa respiration le plus longtemps possible"], bonne: 1, explication: "La position en étoile sur le dos permet de flotter sans s'épuiser. S'agiter fatigue et fait couler." },
          ],
        },
      ],
      bilan: "Carte orientée, échelle calculée, nœud vérifié, partenaire attentif : dans un milieu inconnu, la sécurité vient de la méthode et de la confiance entre coéquipiers.",
    },

    "6e-eps-04-s-exprimer": {
      accroche: "Une roulade parfaite, une pyramide humaine qui tient trois secondes, une chorégraphie qui fait taire la salle : s'exprimer devant les autres demande du courage, de la précision et de la confiance.",
      objectifs: [
        "Réaliser des figures gymniques simples en sécurité",
        "Tenir les rôles de porteur, voltigeur, pareur et juge en acrosport",
        "Composer et présenter une chorégraphie, et être un spectateur attentif",
      ],
      sections: [
        {
          titre: "Les figures de gymnastique",
          blocs: [
            { t: "tableau", titre: "Quatre figures à connaître", entetes: ["Figure", "Description"], lignes: [["**Roulade avant**", "Rotation vers l'avant, menton rentré, on roule sur la nuque et le dos"], ["**Roue**", "Rotation sur le côté : les mains puis les pieds se posent l'un après l'autre"], ["**Chandelle**", "Équilibre sur les épaules, jambes tendues vers le haut"], ["**ATR**", "Appui tendu renversé : équilibre sur les mains, corps aligné et tendu"]] },
            { t: "etapes", titre: "Réussir sa roulade avant", items: [{ titre: "Position de départ", md: "Accroupis-toi, mains à plat au sol devant toi, écartées de la largeur des épaules." }, { titre: "Menton rentré", md: "Rentre le menton sur la poitrine, comme pour regarder ton nombril." }, { titre: "Rouler", md: "Pousse sur les jambes et roule sur la **nuque** puis le dos, bien arrondi." }, { titre: "Se relever", md: "Termine accroupi et relève-toi **sans l'aide des mains**." }] },
            { t: "attention", md: "On ne pose **jamais le sommet de la tête** au sol : tout le poids du corps écraserait le cou. C'est la **nuque** qui touche le tapis, menton rentré." },
            { t: "verifie", q: "Que signifie ATR ?", choix: ["Appui tendu renversé", "Arrêt total rapide", "Accroupi, tendu, roulé"], bonne: 0, explication: "L'ATR est un appui tendu renversé : on est en équilibre sur les mains, le corps aligné et tendu vers le haut." },
          ],
        },
        {
          titre: "L'acrosport : chacun son rôle",
          blocs: [
            { t: "texte", md: "En acrosport, on construit à plusieurs des **figures** (pyramides, portés) qu'on tient quelques secondes. Personne ne réussit seul : chaque élève a un rôle précis, et la sécurité de tous dépend de chacun." },
            { t: "tableau", titre: "Les quatre rôles", entetes: ["Rôle", "Sa mission"], lignes: [["**Porteur**", "La base solide : il **soutient** la figure, dos plat et gainé"], ["**Voltigeur**", "Il **monte** sur le porteur, doucement, et tient la position"], ["**Pareur**", "Il **aide et sécurise** la montée et la descente"], ["**Juge**", "Il **observe et évalue** avec des critères précis"]] },
            { t: "schema", titre: "Où poser ses appuis sur un porteur ?", legende: "On appuie sur les zones solides (épaules, bassin), jamais au milieu du dos.", svg: `<svg viewBox="0 0 400 220"><line class="trait" x1="20" y1="190" x2="380" y2="190"/><circle class="aplat-papier trait" cx="88" cy="112" r="16"/><line class="trait" x1="106" y1="112" x2="290" y2="112" stroke-width="3"/><line class="trait" x1="115" y1="114" x2="115" y2="190"/><line class="trait" x1="285" y1="114" x2="285" y2="190"/><line class="trait" x1="285" y1="190" x2="350" y2="190"/><circle class="aplat-fort" cx="125" cy="100" r="11"/><circle class="aplat-fort" cx="275" cy="100" r="11"/><line class="trait" x1="190" y1="88" x2="210" y2="108"/><line class="trait" x1="210" y1="88" x2="190" y2="108"/><text class="texte" x="125" y="70" text-anchor="middle">épaules</text><text class="texte-pigment" x="125" y="54" text-anchor="middle">OUI</text><text class="texte" x="275" y="70" text-anchor="middle">bassin</text><text class="texte-pigment" x="275" y="54" text-anchor="middle">OUI</text><text class="texte" x="200" y="70" text-anchor="middle">milieu du dos</text><text class="texte-main" x="200" y="54" text-anchor="middle">NON</text><text class="texte-petit" x="200" y="210" text-anchor="middle">porteur à quatre pattes, dos plat</text></svg>` },
            { t: "exemple", titre: "Une pyramide à trois", md: "Deux **porteurs** se placent à quatre pattes, côte à côte. Le **voltigeur** (il n'y en a qu'un) monte doucement, un genou sur chaque bassin, aidé par le **pareur**. Il tient la position **3 secondes**, sans bouger, puis redescend **par où il est monté**." },
          ],
        },
        {
          titre: "Composer une chorégraphie",
          blocs: [
            { t: "definition", terme: "Chorégraphie", md: "Une suite de mouvements **composée** et présentée devant les autres, avec un **début**, un **développement** et une **fin** bien nets." },
            { t: "liste", titre: "Les trois ingrédients de la danse", items: ["L'**espace** : devant, derrière, haut, bas, les niveaux (au sol, debout, en saut), les directions.", "Le **temps** : lent, rapide, accélérations, **arrêts**. Rester immobile peut faire partie de la chorégraphie !", "L'**énergie** : fort, doux, saccadé, fluide."] },
            { t: "astuce", md: "Pour composer, pars d'un geste simple (se lever, tendre la main) et transforme-le : fais-le **au ralenti**, puis **au sol**, puis **très fort**. Tu obtiens trois mouvements différents à partir d'une seule idée." },
            { t: "verifie", q: "En danse, rester immobile peut-il faire partie de la chorégraphie ?", choix: ["Non, il faut toujours bouger", "Oui, un arrêt est un choix qui joue avec le temps"], bonne: 1, explication: "L'immobilité crée un contraste et attire l'attention : c'est une façon de jouer avec le temps." },
          ],
        },
        {
          titre: "Juger et regarder",
          blocs: [
            { t: "propriete", titre: "Les critères du juge", md: "Le juge ne note pas la personne, mais **ce qu'elle réalise** : la **tenue** du corps (jambes tendues, pointes de pieds), l'**alignement** et la **stabilité** (figure tenue sans bouger)." },
            { t: "texte", md: "Le **spectateur** a aussi un rôle : il regarde en **silence**, ne se moque jamais, respecte ceux qui passent et **applaudit à la fin**. Se montrer devant les autres demande du courage : un public bienveillant aide chacun à oser." },
          ],
        },
      ],
      bilan: "Menton rentré pour la roulade, appuis sur les épaules et le bassin en acrosport, espace, temps et énergie en danse : s'exprimer, c'est oser devant des camarades qui te respectent.",
    },

    "6e-eps-05-affrontement": {
      accroche: "Au handball, tu as le ballon et trois défenseurs devant toi. Foncer seul ? Ou trouver le coéquipier démarqué ? Dans un affrontement, gagner, c'est d'abord lire le jeu et respecter les règles.",
      objectifs: [
        "Connaître les règles de base et l'effectif des sports collectifs",
        "Attaquer et défendre en coopérant avec ses coéquipiers",
        "Respecter les règles des raquettes et des combats, et accepter l'arbitrage",
      ],
      sections: [
        {
          titre: "Quatre sports collectifs",
          blocs: [
            { t: "tableau", titre: "Les règles de base", entetes: ["Sport", "Joueurs par équipe sur le terrain", "Règle essentielle"], lignes: [["**Football**", "11", "On joue au pied ; seul le gardien utilise les mains, dans sa surface"], ["**Handball**", "7 (gardien compris)", "On joue à la main, **3 pas** maximum avec le ballon, zone interdite aux joueurs de champ"], ["**Basket**", "5", "On avance en **dribblant** ; on marque dans le **panier**"], ["**Volley**", "6", "Le ballon ne touche pas le sol de son camp ; **3 touches** maximum pour le renvoyer"]] },
            { t: "exemple", titre: "Avancer au handball", md: "Tu reçois le ballon : tu fais **trois pas**, tu **dribbles**, tu reprends le ballon et tu refais **trois pas** pour tirer, sans poser le pied dans la zone du gardien." },
            { t: "verifie", q: "Combien de joueurs par équipe sont sur le terrain au handball, gardien compris ?", choix: ["5", "6", "7", "11"], bonne: 2, explication: "Au handball, 7 joueurs : 6 joueurs de champ et 1 gardien. 5 au basket, 6 au volley, 11 au football." },
          ],
        },
        {
          titre: "Attaquer et défendre ensemble",
          blocs: [
            { t: "schema", titre: "Le terrain de handball", legende: "40 m sur 20 m. La zone (à 6 m du but) est réservée au gardien. L'attaquant passe au coéquipier démarqué.", svg: `<svg viewBox="0 0 400 220"><rect class="aplat-papier trait" x="20" y="20" width="360" height="180"/><line class="trait-fin" x1="200" y1="20" x2="200" y2="200"/><path class="aplat trait" d="M20 42.5 A54 54 0 0 1 74 96.5 L74 123.5 A54 54 0 0 1 20 177.5 Z"/><path class="aplat trait" d="M380 42.5 A54 54 0 0 0 326 96.5 L326 123.5 A54 54 0 0 0 380 177.5 Z"/><line x1="20" y1="96.5" x2="20" y2="123.5" stroke="var(--encre)" stroke-width="6"/><line x1="380" y1="96.5" x2="380" y2="123.5" stroke="var(--encre)" stroke-width="6"/><circle class="aplat-papier trait" cx="365" cy="110" r="7"/><circle class="aplat-fort" cx="230" cy="80" r="8"/><circle class="aplat-fort" cx="250" cy="160" r="8"/><circle class="trait" cx="280" cy="95" r="8" fill="none"/><circle class="trait" cx="285" cy="140" r="8" fill="none"/><path class="pointille" d="M236 88 L246 150" marker-end="url(#fl-p)"/><path class="trait-fin" d="M258 156 L300 176" marker-end="url(#fl)"/><text class="texte-petit" x="352" y="40" text-anchor="middle">zone</text><text class="texte-petit" x="365" y="135" text-anchor="middle">gardien</text><text class="texte-petit" x="210" y="70">attaquant</text><text class="texte-petit" x="215" y="190">démarqué</text><text class="texte-petit" x="290" y="86">défenseur</text><text class="texte-petit" x="104" y="215" text-anchor="middle">40 m</text></svg>` },
            { t: "propriete", titre: "Les principes du jeu collectif", md: "**En attaque**, on **se démarque** (on se place là où aucun défenseur ne peut intercepter), on fait des **passes** et on progresse vers le but.\n\n**En défense**, on se replace **entre l'adversaire et son but** pour l'empêcher d'avancer et récupérer le ballon." },
            { t: "etapes", titre: "Une attaque simple", items: [{ titre: "Récupérer", md: "On récupère le ballon (interception, renvoi du gardien…)." }, { titre: "Se démarquer et passer", md: "Les coéquipiers se rendent disponibles ; le porteur passe au joueur libre." }, { titre: "Progresser", md: "On avance vers le but adverse, en gardant le ballon." }, { titre: "Tirer", md: "Le joueur le mieux placé tire au but." }] },
            { t: "verifie", q: "Au handball, un joueur de champ pénètre dans la zone du gardien avec le ballon. Que décide l'arbitre ?", choix: ["Le but est accordé", "Le ballon est rendu à l'équipe adverse", "Rien, c'est autorisé"], bonne: 1, explication: "La zone est le territoire du gardien : l'attaquant qui y pose le pied perd le ballon au profit de l'adversaire." },
          ],
        },
        {
          titre: "Raquettes et combats",
          blocs: [
            { t: "texte", md: "Au **badminton** (raquette, volant, filet haut) et au **tennis de table** (raquette, balle légère, table avec filet bas), on marque le point quand le volant ou la balle **tombe dans le camp adverse**, ou quand l'adversaire **fait une faute** (envoi dans le filet ou hors du terrain)." },
            { t: "definition", terme: "Activités de combat", md: "En **lutte** et au **judo**, on cherche à **immobiliser** l'adversaire au sol ou à le **projeter**, en respectant des règles strictes. Au judo, on combat sur un **tatami**, vêtu d'un **judogi** (souvent appelé kimono)." },
            { t: "attention", md: "On **salue** l'adversaire avant et après le combat. Il est **interdit** de frapper, d'étrangler, de tirer les cheveux ou de faire mal volontairement, même pour gagner." },
          ],
        },
        {
          titre: "L'arbitre et le respect des règles",
          blocs: [
            { t: "definition", terme: "Arbitre", md: "La personne qui **fait respecter les règles** du jeu. Ses décisions s'acceptent **sans discuter**, même quand on n'est pas d'accord." },
            { t: "texte", md: "Sans arbitre ni règles, un match deviendrait une bagarre. Les règles protègent les joueurs et rendent le jeu juste. En EPS, tu seras toi aussi arbitre : tu découvriras qu'il est difficile de tout voir, et tu respecteras d'autant plus ce rôle." },
          ],
        },
      ],
      bilan: "Se démarquer, passer, se replacer, saluer l'adversaire et respecter l'arbitre : on gagne un affrontement avec ses coéquipiers et grâce aux règles, jamais contre elles.",
    },

    "6e-eps-06-valeurs-et-roles": {
      accroche: "Ton équipe vient de perdre 4 à 1. Tu peux bouder, accuser l'arbitre… ou serrer la main de chaque adversaire. Ce geste-là, c'est déjà du sport.",
      objectifs: [
        "Adopter une attitude de fair-play et de respect",
        "Assumer les rôles sociaux : arbitre, observateur, capitaine, chronométreur",
        "Connaître les symboles et les valeurs de l'olympisme",
      ],
      sections: [
        {
          titre: "Le fair-play et la coopération",
          blocs: [
            { t: "definition", terme: "Fair-play", md: "Une attitude qui consiste à **respecter les règles, l'adversaire et l'arbitre**, que l'on gagne ou que l'on perde." },
            { t: "texte", md: "**Coopérer**, c'est réussir **ensemble** : chacun a un rôle, on encourage, on partage le ballon, on accepte les erreurs des autres. Faire tout le travail soi-même n'est pas coopérer : c'est oublier qu'une équipe gagne à plusieurs." },
            { t: "etapes", titre: "Le déroulement d'un match respectueux", items: [{ titre: "Saluer", md: "On salue les adversaires et l'arbitre avant de commencer." }, { titre: "Jouer", md: "On joue en respectant les règles et les autres." }, { titre: "Accepter", md: "On accepte le résultat, victoire ou défaite." }, { titre: "Féliciter", md: "On serre la main des adversaires et on remercie l'arbitre." }] },
            { t: "verifie", q: "Ton équipe vient de perdre. Quelle attitude montre le respect ?", choix: ["Accuser l'arbitre", "Serrer la main des adversaires et les féliciter", "Partir sans rien dire"], bonne: 1, explication: "Le fair-play se voit surtout dans la défaite : féliciter les adversaires, c'est reconnaître leur mérite." },
          ],
        },
        {
          titre: "Les rôles sociaux",
          blocs: [
            { t: "tableau", titre: "Quatre rôles à tenir en EPS", entetes: ["Rôle", "Sa mission"], lignes: [["**Arbitre**", "Fait respecter les règles"], ["**Observateur**", "Note ce que fait un camarade pour l'aider à progresser"], ["**Capitaine**", "Organise et encourage son équipe"], ["**Chronométreur**", "Mesure le temps de jeu ou de l'épreuve"]] },
            { t: "exemple", titre: "Être observateur", md: "Pendant le match, tu notes chaque passe de ton camarade. À la fin, tu lui dis : « Tu as réussi **6 passes sur 8**. Les deux ratées étaient des passes longues : essaie de te rapprocher. » Ton regard l'aide à progresser." },
          ],
        },
        {
          titre: "L'olympisme",
          blocs: [
            { t: "frise", titre: "Quelques dates des Jeux olympiques", evenements: [{ date: -776, label: "Premiers Jeux d'Olympie", detail: "En Grèce antique, en l'honneur de Zeus." }, { date: 393, label: "Fin des Jeux antiques", detail: "Vers 393, l'empereur romain Théodose les fait interdire." }, { date: 1896, label: "Jeux d'Athènes", detail: "Premiers Jeux modernes, relancés par Pierre de Coubertin." }, { date: 1924, label: "Jeux de Paris", detail: "La France accueille les Jeux pour la deuxième fois." }, { date: 1960, label: "Premiers Jeux paralympiques", detail: "À Rome, pour les athlètes en situation de handicap." }, { date: 2024, label: "Jeux de Paris", detail: "Jeux olympiques et paralympiques d'été." }] },
            { t: "schema", titre: "Les anneaux olympiques", legende: "Cinq anneaux entrelacés, symbole des cinq continents unis par le sport.", svg: `<svg viewBox="0 0 400 200"><circle class="trait" cx="120" cy="80" r="36" fill="none" stroke-width="5"/><circle class="trait" cx="200" cy="80" r="36" fill="none" stroke-width="5"/><circle class="trait" cx="280" cy="80" r="36" fill="none" stroke-width="5"/><circle class="trait" cx="160" cy="118" r="36" fill="none" stroke-width="5"/><circle class="trait" cx="240" cy="118" r="36" fill="none" stroke-width="5"/><text class="texte" x="120" y="84" text-anchor="middle">bleu</text><text class="texte" x="200" y="84" text-anchor="middle">noir</text><text class="texte" x="280" y="84" text-anchor="middle">rouge</text><text class="texte" x="160" y="132" text-anchor="middle">jaune</text><text class="texte" x="240" y="132" text-anchor="middle">vert</text><text class="texte-main" x="200" y="186" text-anchor="middle">sur un fond blanc</text></svg>` },
            { t: "propriete", titre: "Devise et valeurs olympiques", md: "**Devise** : *Citius, Altius, Fortius – Communiter*, c'est-à-dire « plus vite, plus haut, plus fort – ensemble ».\n\n**Les trois valeurs** :\n- l'**excellence** : donner le meilleur de soi-même ;\n- l'**amitié** : se lier aux autres malgré les différences ;\n- le **respect** : des règles, des autres et de soi-même." },
            { t: "savais-tu", md: "Pierre de Coubertin a choisi ces couleurs parce qu'avec le **blanc** du fond, elles permettaient de dessiner le drapeau de **tous les pays** participants de l'époque." },
            { t: "verifie", q: "Combien d'anneaux figurent sur le drapeau olympique ?", choix: ["4", "5", "6"], bonne: 1, explication: "Cinq anneaux, bleu, jaune, noir, vert et rouge, pour les cinq continents unis." },
          ],
        },
        {
          titre: "Les Jeux paralympiques",
          blocs: [
            { t: "texte", md: "Les **Jeux paralympiques** réunissent les athlètes en **situation de handicap** : handicap moteur, visuel ou intellectuel. Ils ont lieu juste après les Jeux olympiques, dans la même ville. En 2024, à Paris, les spectateurs ont pu admirer le cécifoot, le basket fauteuil ou le para-athlétisme." },
            { t: "attention", md: "Les Jeux olympiques ont lieu **tous les 4 ans**. Depuis 1994, Jeux d'été et Jeux d'hiver alternent : il y a donc des Jeux tous les **2 ans**, mais chaque type revient tous les 4 ans." },
          ],
        },
      ],
      bilan: "Fair-play dans la victoire comme dans la défaite, rôles tenus avec sérieux, excellence, amitié et respect : les valeurs de l'olympisme se vivent dès ton cours d'EPS.",
    },
  },
};
