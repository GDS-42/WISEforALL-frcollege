// Cours ÉCLORE — 5e EPS. Schéma : docs/COURS.md
export default {
  id: "5e-eps",
  chapitres: {
    "5e-eps-01-sante-entrainement": {
      accroche: "Après un sprint, ton cœur cogne si fort que tu l'entends presque. Après dix minutes de footing tranquille, il bat vite mais régulièrement. Ton cœur est un compteur précis : apprends à le lire, et tu sauras régler ton effort comme un vrai sportif.",
      objectifs: [
        "Mesurer sa fréquence cardiaque et l'utiliser pour régler son effort",
        "Connaître la FC maximale, les zones d'effort et la VMA",
        "S'échauffer, s'étirer, boire et s'alimenter pour préparer l'effort et récupérer",
      ],
      sections: [
        {
          titre: "Le cœur, compteur de l'effort",
          blocs: [
            { t: "definition", terme: "Fréquence cardiaque (FC)", md: "Le **nombre de battements du cœur par minute**. Au repos, elle est d'environ **60 à 80 battements par minute** chez un collégien. Pendant l'effort, elle augmente pour envoyer plus de sang, donc plus d'oxygène, aux muscles." },
            { t: "astuce", md: "Pas de montre connectée ? Pose deux doigts sur le côté de ton **cou** (ou à l'intérieur du poignet), compte tes pulsations pendant **15 secondes** et **multiplie par 4**. 36 pulsations en 15 s, c'est 36 × 4 = **144** battements par minute." },
            { t: "graphique", type: "courbe", titre: "La fréquence cardiaque de Léa pendant une séance d'EPS", unite: "battements/min", donnees: [{ label: "0 min", valeur: 72 }, { label: "5", valeur: 105 }, { label: "10", valeur: 128 }, { label: "15", valeur: 148 }, { label: "20", valeur: 152 }, { label: "25", valeur: 178 }, { label: "30", valeur: 182 }, { label: "35", valeur: 140 }, { label: "40", valeur: 105 }, { label: "45", valeur: 88 }] },
            { t: "texte", md: "Lis la courbe : la FC monte doucement pendant l'**échauffement** (0 à 10 min), se stabilise vers 150 pendant la **course en endurance**, grimpe vers 180 lors des **accélérations** (zone de résistance), puis redescend pendant la **récupération** et le retour au calme." },
          ],
        },
        {
          titre: "FC maximale et zones d'effort",
          blocs: [
            { t: "propriete", titre: "La FC maximale", md: "On l'estime avec la formule : **FC max ≈ 220 − âge**. À 12 ans : 220 − 12 = **208** battements par minute." },
            { t: "tableau", titre: "Les zones d'effort pour un élève de 12 ans (FC max 208)", entetes: ["Zone", "% de la FC max", "FC visée", "On peut tenir…"], lignes: [["Repos, récupération", "moins de 50 %", "moins de 104", "très longtemps"], ["**Endurance**", "60 à 75 %", "125 à 156", "longtemps (30 min et plus)"], ["**Résistance**", "75 à 90 %", "156 à 187", "quelques minutes"], ["**Effort maximal**", "plus de 90 %", "plus de 187", "quelques secondes"]] },
            { t: "exemple", titre: "Léa veut courir en endurance", etapes: ["Léa a 12 ans : FC max ≈ 220 − 12 = 208.", "Pour l'endurance, elle vise 70 % : 0,7 × 208 ≈ **146** battements par minute.", "Pendant la course, elle compte ses pulsations 15 s au cou et multiplie par 4 : si elle trouve plus de 156, elle ralentit."] },
            { t: "verifie", q: "Avec la formule 220 − âge, quelle est la FC maximale théorique d'un élève de 12 ans ?", choix: ["180", "198", "208", "232"], bonne: 2, explication: "220 − 12 = 208 battements par minute. Ce n'est qu'une estimation : chaque personne est un peu différente." },
          ],
        },
        {
          titre: "La VMA : ta vitesse de référence",
          blocs: [
            { t: "definition", terme: "VMA (vitesse maximale aérobie)", md: "La vitesse de course à laquelle ton corps consomme le **maximum d'oxygène**. On ne peut la tenir que quelques minutes. Elle sert de référence pour régler ses allures : on court souvent à un **pourcentage** de sa VMA." },
            { t: "propriete", titre: "Le test demi-Cooper", md: "On court le plus loin possible pendant **6 minutes**. Puis : **VMA (en km/h) = distance (en m) ÷ 100**." },
            { t: "exemple", titre: "Calculer et utiliser sa VMA", etapes: ["Tom parcourt 1 300 m en 6 minutes : sa VMA vaut 1 300 ÷ 100 = **13 km/h**.", "Une élève de VMA 12 km/h qui court à 80 % vise 0,8 × 12 = **9,6 km/h**.", "Un élève de VMA 15 km/h, à 80 %, vise 0,8 × 15 = **12 km/h**."] },
            { t: "verifie", q: "Au demi-Cooper, Tom parcourt 1 300 m. Quelle est sa VMA ?", choix: ["6 km/h", "13 km/h", "130 km/h", "1,3 km/h"], bonne: 1, explication: "VMA = distance en mètres ÷ 100 = 1 300 ÷ 100 = 13 km/h. Cela marche car 6 minutes font un dixième d'heure." },
          ],
        },
        {
          titre: "Se préparer et récupérer",
          blocs: [
            { t: "texte", md: "L'**échauffement** prépare le corps à l'effort : il fait monter la température des muscles, accélère le cœur et la respiration, réveille les articulations. Il réduit le risque de blessure et améliore la performance. Il dure **10 à 15 minutes** : d'abord **général**, puis **spécifique** à l'activité." },
            { t: "etapes", titre: "Un échauffement complet avant une course de haies", items: [{ titre: "Course lente", md: "Quelques minutes de footing tranquille." }, { titre: "Mobilisation", md: "Cercles de chevilles, de hanches, d'épaules." }, { titre: "Étirements dynamiques", md: "Montées de genoux, talons-fesses, mouvements amples." }, { titre: "Gammes et accélérations", md: "Accélérations progressives sur 20 à 30 m." }, { titre: "Spécifique", md: "Passages sur les premières haies, à allure réduite." }] },
            { t: "attention", md: "Avant un sprint, évite les **longs étirements passifs** (tenir la position 30 secondes) : ils endorment le muscle. Garde-les pour **après** la séance, ou à un autre moment, pour entretenir ta souplesse." },
            { t: "texte", md: "Bois de l'**eau** avant, pendant et après l'effort : les boissons énergisantes sucrées ne sont pas adaptées. La veille d'une course, mange des **féculents** (pâtes, riz, pain) qui fournissent l'énergie ; les **protéines** (viande, œufs, poisson, légumineuses) réparent les muscles. Évite un repas lourd et gras juste avant de courir." },
          ],
        },
      ],
      bilan: "Ton cœur est ton compteur : avec la FC max, les zones d'effort et la VMA, tu règles ton allure ; avec l'échauffement, l'eau et une bonne alimentation, tu protèges ton corps.",
    },
    "5e-eps-02-performance": {
      accroche: "Malik part comme une fusée sur son 1 000 m… et finit en marchant. Inès part plus doucement, garde la même allure, et le double dans le dernier tour. En athlétisme comme en natation, la performance se construit avec la tête autant qu'avec les jambes.",
      objectifs: [
        "Courir à allure régulière en demi-fond et franchir des haies",
        "Connaître les règles du relais et des lancers",
        "Nager efficacement et mesurer une performance avec précision",
      ],
      sections: [
        {
          titre: "Le demi-fond : la régularité avant tout",
          blocs: [
            { t: "texte", md: "En **demi-fond** (de 500 m à 1 500 m), la clé est la **régularité** : on part à l'allure que l'on peut **tenir jusqu'au bout**, et non au sprint. Partir trop vite fait monter le cœur dans la zone d'effort maximal : les muscles s'épuisent et il faut ralentir brutalement. On règle son allure sur des repères : plots, temps de passage." },
            { t: "propriete", titre: "Calculer une vitesse", md: "**Vitesse (km/h) = distance (m) × 3,6 ÷ temps (s)**.\nUn tour de piste d'athlétisme mesure **400 m**." },
            { t: "exemple", titre: "Deux calculs utiles", etapes: ["Inès court 500 m en 2 min 30 s, soit 150 s : 500 × 3,6 ÷ 150 = **12 km/h**.", "Pour courir 2 000 m sur une piste de 400 m, il faut 2 000 ÷ 400 = **5 tours**.", "Sur 3 × 500 m, Malik court 1 min 50 s, puis 2 min 20 s, puis 2 min 45 s : il est parti **beaucoup trop vite** et n'a pas su gérer son allure."] },
            { t: "verifie", q: "Quelle est la meilleure stratégie pour réussir un 1 000 m ?", choix: ["Sprinter dès le départ pour prendre de l'avance", "Partir à une allure régulière que l'on peut tenir", "Marcher la moitié du temps puis sprinter"], bonne: 1, explication: "Une allure régulière, adaptée à sa VMA, permet de tenir jusqu'au bout. Le départ en sprint épuise les muscles en quelques dizaines de secondes." },
          ],
        },
        {
          titre: "Haies, relais et lancers",
          blocs: [
            { t: "texte", md: "En **haies**, la **jambe d'attaque** passe **tendue** au-dessus de la haie ; la **jambe d'esquive** revient **pliée sur le côté**. Entre deux haies, on fait un **nombre impair d'appuis** (3 ou 5) pour attaquer toujours avec la même jambe." },
            { t: "schema", titre: "La transmission du témoin en relais", legende: "Le témoin doit changer de main à l'intérieur de la zone de transmission. Le receveur démarre quand son coéquipier passe la marque.", svg: `<svg viewBox="0 0 400 200"><rect class="aplat" x="200" y="80" width="140" height="60"/><line class="trait" x1="10" y1="80" x2="390" y2="80"/><line class="trait" x1="10" y1="140" x2="390" y2="140"/><line class="trait" x1="200" y1="76" x2="200" y2="144"/><line class="trait" x1="340" y1="76" x2="340" y2="144"/><text class="texte" x="270" y="68" text-anchor="middle">zone de transmission</text><line x1="150" y1="82" x2="150" y2="138" stroke="var(--pigment)" stroke-width="4"/><text class="texte-petit texte-pigment" x="150" y="158" text-anchor="middle">marque au sol</text><circle class="aplat-papier trait" cx="95" cy="110" r="13"/><text class="texte" x="95" y="115" text-anchor="middle">A</text><rect class="aplat-fort" x="110" y="113" width="14" height="5" rx="2"/><path class="trait-fin" d="M40 110 L78 110" marker-end="url(#fl)"/><circle class="aplat-papier trait" cx="222" cy="110" r="13"/><text class="texte" x="222" y="115" text-anchor="middle">B</text><path class="trait-fin" d="M238 110 L320 110" marker-end="url(#fl-p)"/><text class="texte-petit" x="85" y="184" text-anchor="middle">A arrive avec le témoin</text><text class="texte-petit" x="280" y="184" text-anchor="middle">B part, main tendue en arrière</text><text class="texte-petit" x="340" y="158" text-anchor="middle">fin de zone</text></svg>` },
            { t: "etapes", titre: "Une transmission réussie", items: [{ titre: "Se placer", md: "Le receveur se place au début de la zone et regarde arriver son coéquipier." }, { titre: "Démarrer", md: "Quand le coureur atteint la **marque au sol**, le receveur démarre à fond." }, { titre: "Le signal", md: "Le coureur crie « hop » quand il est tout près." }, { titre: "Tendre la main", md: "Le receveur tend la main vers l'arrière, **sans se retourner**." }, { titre: "Donner", md: "Le coureur place le témoin dans la main du receveur, dans la zone." }] },
            { t: "texte", md: "En **lancer** (poids, javelot, disque, balle lestée), l'engin doit retomber **dans le secteur**. On mesure du **point de chute** à la ligne de lancer. **Sortir du cercle** (ou mordre la ligne d'élan) annule l'essai." },
            { t: "verifie", q: "En relais, où le témoin doit-il être transmis ?", choix: ["N'importe où sur la piste", "Dans la zone de transmission", "Seulement après la ligne d'arrivée"], bonne: 1, explication: "La transmission doit se faire dans la zone délimitée au sol. Hors de la zone, l'équipe est disqualifiée." },
          ],
        },
        {
          titre: "Nager vite et bien",
          blocs: [
            { t: "tableau", titre: "Les quatre nages", entetes: ["Nage", "Caractéristique", "Au virage"], lignes: [["**Crawl**", "La plus rapide : bras alternés, battements de jambes", "Culbute possible"], ["**Dos**", "Sur le dos, visage hors de l'eau, bras alternés", "Culbute après s'être retourné"], ["**Brasse**", "Mouvements simultanés, jambes en ciseaux : la plus lente", "Toucher des **deux mains**"], ["**Papillon**", "Les deux bras sortent ensemble, ondulation du corps", "Toucher des **deux mains**"]] },
            { t: "definition", terme: "Culbute", md: "Le virage du crawl : le nageur fait une **roulade avant** près du mur, puis repart en **poussant avec les pieds**. On ne touche pas le mur avec les mains." },
            { t: "exemple", titre: "Combien de longueurs ?", md: "Dans un bassin de **25 m**, pour nager **200 m**, il faut 200 ÷ 25 = **8 longueurs**." },
          ],
        },
        {
          titre: "Mesurer une performance",
          blocs: [
            { t: "texte", md: "Une performance se **mesure avec précision** : chronomètre au dixième ou au centième de seconde, décamètre pour les distances. Pour être juste, on prend **plusieurs chronométreurs**, qui déclenchent au **signal de départ** (le coup de sifflet, le bras qui s'abaisse), et non quand ils voient le coureur bouger. Un **faux départ** est sanctionné." },
            { t: "attention", md: "Un seul chronométreur qui démarre en voyant le coureur partir ajoute son propre temps de réaction : le temps mesuré est faux. Démarre au **signal**, pas au mouvement." },
          ],
        },
      ],
      bilan: "Courir régulier, franchir les haies avec la même jambe, transmettre dans la zone, lancer dans le secteur, nager efficacement : une performance se prépare, se gère et se mesure avec précision.",
    },
    "5e-eps-03-deplacements": {
      accroche: "Une forêt, une carte, une boussole, et quelque part entre les arbres, un fanion orange et blanc. Ou bien un mur de 8 mètres, une corde et un partenaire en bas. Se déplacer dans un milieu inconnu, c'est d'abord apprendre à le lire et à s'y sentir en sécurité.",
      objectifs: [
        "Lire une carte de course d'orientation, l'orienter et suivre un azimut",
        "Grimper en sécurité : encordement, assurage, communication",
        "Se déplacer en VTT et nager en milieu naturel en sécurité",
      ],
      sections: [
        {
          titre: "Lire une carte de course d'orientation",
          blocs: [
            { t: "texte", md: "En **course d'orientation**, tu cherches des **balises** (des fanions **orange et blanc**) avec une carte et parfois une boussole. Tu valides ton passage avec une pince ou un boîtier électronique. La carte a sa propre **légende** : chaque couleur a un sens." },
            { t: "schema", titre: "Une carte de course d'orientation simplifiée", legende: "Sur une vraie carte, l'eau est bleue, la forêt dense verte, le relief marron, les chemins noirs et les terrains découverts jaunes.", svg: `<svg viewBox="0 0 400 300"><rect class="aplat-papier trait" x="10" y="10" width="280" height="280"/><path class="aplat trait-fin" d="M40 60 Q60 35 95 45 Q120 60 105 85 Q80 105 50 92 Q30 80 40 60 Z"/><path class="aplat-fort" opacity="0.35" d="M180 190 Q230 170 275 195 L282 282 L170 282 Q158 232 180 190 Z"/><g class="trait-fin"><ellipse cx="215" cy="90" rx="62" ry="40"/><ellipse cx="226" cy="88" rx="42" ry="26"/><ellipse cx="236" cy="86" rx="22" ry="13"/></g><path class="pointille" d="M20 255 Q120 235 140 160 T262 22"/><g fill="none" stroke="var(--pigment)" stroke-width="2"><path d="M40 228 L51 247 L29 247 Z"/><circle cx="115" cy="175" r="10"/><circle cx="150" cy="50" r="10"/><circle cx="230" cy="150" r="10"/><circle cx="250" cy="240" r="8"/><circle cx="250" cy="240" r="12"/><path d="M49 232 L107 182 M118 164 L147 61 M157 59 L223 141 M232 161 L247 226"/></g><g class="texte-petit texte-pigment"><text x="128" y="180">1</text><text x="163" y="44">2</text><text x="243" y="146">3</text></g><path class="trait-fin" d="M320 40 L320 14" marker-end="url(#fl)"/><text class="texte" x="330" y="30">N</text><rect class="aplat trait-fin" x="300" y="56" width="14" height="10"/><text class="texte-petit" x="320" y="65">eau</text><rect class="aplat-fort" opacity="0.35" x="300" y="80" width="14" height="10"/><text class="texte-petit" x="320" y="89">forêt dense</text><path class="pointille" d="M300 110 L314 110"/><text class="texte-petit" x="320" y="114">chemin</text><path class="trait-fin" d="M300 140 Q307 128 314 140"/><text class="texte-petit" x="320" y="139">relief</text><path d="M307 160 L313 171 L301 171 Z" fill="none" stroke="var(--pigment)" stroke-width="2"/><text class="texte-petit" x="320" y="170">départ</text><circle cx="307" cy="192" r="6" fill="none" stroke="var(--pigment)" stroke-width="2"/><text class="texte-petit" x="320" y="196">poste</text><circle cx="307" cy="218" r="4" fill="none" stroke="var(--pigment)" stroke-width="1.5"/><circle cx="307" cy="218" r="7" fill="none" stroke="var(--pigment)" stroke-width="1.5"/><text class="texte-petit" x="320" y="222">arrivée</text><text class="texte-petit" x="300" y="258">échelle</text><text class="texte-petit" x="300" y="272">1:10 000</text></svg>` },
            { t: "tableau", titre: "Les couleurs de la carte", entetes: ["Couleur", "Ce qu'elle représente"], lignes: [["**Bleu**", "L'eau : lac, ruisseau, marais"], ["**Noir**", "Rochers, chemins, constructions"], ["**Marron**", "Le relief : courbes de niveau, fossés"], ["**Jaune**", "Terrain découvert : prairie, clairière"], ["**Vert**", "Végétation dense : plus c'est vert, plus c'est difficile à traverser"]] },
            { t: "propriete", titre: "Courbes de niveau", md: "Une courbe de niveau relie les points de **même altitude**. ==Plus les courbes sont serrées, plus la pente est raide.== Sur la carte ci-dessus, la colline est plus raide à l'est, où les courbes se rapprochent." },
          ],
        },
        {
          titre: "Échelle, orientation et azimut",
          blocs: [
            { t: "texte", md: "L'**échelle 1:10 000** signifie que **1 cm sur la carte représente 10 000 cm, soit 100 m** sur le terrain. Avant de partir, on **oriente la carte** : on la tourne pour que son nord coïncide avec le nord indiqué par la boussole. Ainsi, ce qui est devant toi sur la carte est devant toi dans la forêt." },
            { t: "definition", terme: "Azimut", md: "L'**angle**, en degrés, entre la direction du **nord** et la direction à suivre, mesuré dans le sens des aiguilles d'une montre." },
            { t: "droite", titre: "Les azimuts des quatre points cardinaux (en degrés)", min: 0, max: 360, pas: 30, points: [{ x: 0, label: "N" }, { x: 90, label: "E" }, { x: 180, label: "S" }, { x: 270, label: "O" }, { x: 360, label: "N" }] },
            { t: "exemple", titre: "Rejoindre la balise", md: "Sur ta carte au 1:10 000, la balise est à **4 cm** de ta position, plein **est**. Sur le terrain, elle est donc à 4 × 100 = **400 m**, azimut **90°**. Tu orientes la carte, tu repères un chemin qui part vers l'est et tu le suis en comptant tes pas." },
            { t: "verifie", q: "Sur une carte au 1:10 000, deux balises sont séparées de 3,5 cm. Quelle distance les sépare sur le terrain ?", choix: ["35 m", "350 m", "3 500 m"], bonne: 1, explication: "1 cm représente 100 m, donc 3,5 cm représentent 3,5 × 100 = 350 m." },
          ],
        },
        {
          titre: "Grimper en sécurité",
          blocs: [
            { t: "texte", md: "En **escalade**, le grimpeur porte un **baudrier** et s'encorde avec un **nœud de huit**. L'**assureur** contrôle la corde avec un système d'assurage. En **moulinette**, la corde passe déjà par un point d'ancrage en haut de la voie : le grimpeur ne peut presque pas chuter. Pour grimper longtemps, on **pousse sur les jambes** plutôt que de tirer sur les bras." },
            { t: "etapes", titre: "Avant de grimper en moulinette", items: [{ titre: "Baudrier", md: "Enfiler le baudrier et serrer la ceinture au-dessus des hanches." }, { titre: "Nœud de huit", md: "Le grimpeur fait son nœud de huit sur le pontet du baudrier." }, { titre: "Assurage", md: "L'assureur installe la corde dans son système d'assurage." }, { titre: "Vérification croisée", md: "Les deux partenaires **se vérifient mutuellement** : nœud, baudrier, système." }, { titre: "Départ", md: "Le grimpeur annonce « **départ** » et commence à grimper." }] },
            { t: "tableau", titre: "Les mots de la cordée", entetes: ["Le grimpeur dit…", "Ce que cela veut dire", "L'assureur…"], lignes: [["« **Sec** ! »", "Tends la corde", "avale la corde et la bloque"], ["« **Du mou** ! »", "Donne de la corde, elle me gêne", "laisse filer un peu de corde"], ["« **Arrivé** ! »", "Je suis en haut", "tend la corde puis le fait descendre lentement"]] },
            { t: "attention", md: "Le casque et le baudrier ne dispensent **jamais** de la **vérification croisée**. Un nœud mal fait peut se défaire : on vérifie **avant** que le grimpeur quitte le sol, à chaque voie." },
          ],
        },
        {
          titre: "VTT et baignade en sécurité",
          blocs: [
            { t: "liste", titre: "Les règles d'or", items: ["En **VTT**, le **casque est obligatoire**. On vérifie les freins, les pneus et la chaîne avant de partir.", "Dans une descente raide, on se met **debout sur les pédales**, on **recule le bassin** et on dose le **frein avant**, sans le bloquer.", "En **natation** en milieu naturel, on nage dans une **zone surveillée** et on n'entre **jamais brutalement** dans une eau froide après une exposition au soleil : on se mouille progressivement la nuque et le corps."] },
            { t: "verifie", q: "En VTT, quelle est la bonne position dans une descente raide ?", choix: ["Assis, le poids vers l'avant", "Debout sur les pédales, bassin reculé", "Une main sur le guidon pour garder l'équilibre"], bonne: 1, explication: "Reculer le bassin évite de passer par-dessus le guidon ; les jambes fléchies amortissent les chocs." },
          ],
        },
      ],
      bilan: "Lire la carte, l'orienter et suivre un azimut ; s'encorder, se vérifier et parler clair en escalade ; s'équiper et rester prudent à vélo comme dans l'eau : c'est ainsi qu'on explore en sécurité.",
    },
    "5e-eps-04-expression": {
      accroche: "Une tempête qui se lève, un groupe qui s'effondre au ralenti, une pyramide humaine qui tient trois secondes sous les applaudissements : s'exprimer devant les autres, c'est transformer son corps en langage, et sa classe en public.",
      objectifs: [
        "Utiliser l'espace, le temps et l'énergie pour composer une chorégraphie",
        "Construire des figures d'acrosport et de cirque en sécurité",
        "Tenir les rôles de chorégraphe, d'interprète et de spectateur",
      ],
      sections: [
        {
          titre: "Les ingrédients de la danse",
          blocs: [
            { t: "texte", md: "Un même geste, lever le bras, peut exprimer la joie, la colère ou la tristesse. Tout dépend de **comment** tu le fais. Le danseur compose avec trois grands paramètres, auxquels s'ajoute la **relation** entre les danseurs." },
            { t: "tableau", titre: "Les paramètres du mouvement", entetes: ["Paramètre", "Ce que l'on fait varier", "Exemple"], lignes: [["**Espace**", "Niveaux (haut, moyen, bas), directions, trajets", "Danser au sol, puis debout sur demi-pointes"], ["**Temps**", "Vitesse, durée, arrêts, accélérations", "Accélérer, puis s'arrêter net"], ["**Énergie**", "Fluide ou saccadé, léger ou lourd", "Passer d'un geste fluide à un geste saccadé"], ["**Relation**", "Unisson, canon, cascade, question-réponse, contact", "Tous font le même geste en même temps"]] },
            { t: "definition", terme: "Unisson et canon", md: "À l'**unisson**, tous les danseurs font **le même mouvement en même temps**. En **canon**, ils font le même mouvement **en décalé**, les uns après les autres. En **cascade**, le mouvement se propage d'un danseur à l'autre, comme une vague." },
            { t: "verifie", q: "Votre chorégraphie sur le thème de la colère paraît molle aux spectateurs. Quel changement est le plus efficace ?", choix: ["Danser plus lentement et plus doucement", "Utiliser une énergie saccadée, des arrêts nets et des accélérations", "Regarder ses pieds pour ne pas se tromper"], bonne: 1, explication: "La colère passe par l'énergie : gestes saccadés, appuis forts, contrastes de vitesse. Ralentir et adoucir rendrait la danse encore plus molle." },
          ],
        },
        {
          titre: "Composer une chorégraphie",
          blocs: [
            { t: "texte", md: "Une **chorégraphie** a un **début**, un **développement** et une **fin** nets : le public doit savoir quand ça commence et quand ça s'arrête. On la construit avec des **procédés** : la **répétition** (un geste qui revient), le **contraste** (lent/rapide, haut/bas), l'**accumulation** (on ajoute un geste à chaque reprise). Le **regard** fait partie du spectacle : un interprète qui regarde ses pieds coupe le lien avec le public." },
            { t: "exemple", titre: "Le thème de la tempête", etapes: ["**Début** : tous immobiles, niveau bas, regard au sol.", "**Développement** : courses rapides en diagonale, énergie saccadée, puis un tourbillon en canon.", "**Fin** : chute lente à l'unisson, puis regard vers le public.", "Le **contraste** entre les parties rend l'histoire lisible."] },
          ],
        },
        {
          titre: "L'acrosport : construire en sécurité",
          blocs: [
            { t: "definition", terme: "Les trois rôles en acrosport", md: "Le **porteur** est la base solide. Le **voltigeur** monte sur lui. Le **pareur** assure la sécurité : il aide à monter, protège la chute et aide à descendre. Une figure doit être **tenue 3 secondes** pour être validée." },
            { t: "schema", titre: "Où poser ses appuis sur un porteur ?", legende: "On s'appuie au-dessus des bras et des jambes du porteur (épaules, bassin), jamais au milieu du dos.", svg: `<svg viewBox="0 0 400 250"><line class="trait-fin" x1="20" y1="210" x2="380" y2="210"/><circle class="trait" cx="88" cy="150" r="9"/><path class="trait" d="M97 152 L105 155 M105 155 L205 155 M105 155 L105 210 M205 155 L205 210 L245 210"/><circle class="aplat-fort" cx="110" cy="152" r="5"/><circle class="aplat-fort" cx="200" cy="152" r="5"/><circle class="trait" cx="155" cy="42" r="9"/><path class="trait" d="M155 51 L155 95 M155 95 L112 150 M155 95 L198 150 M155 62 L130 45 M155 62 L180 45"/><path d="M149 149 L161 161 M161 149 L149 161" stroke="var(--pigment)" stroke-width="2.4"/><text class="texte-petit texte-pigment" x="155" y="182" text-anchor="middle">jamais ici</text><circle class="trait" cx="290" cy="100" r="9"/><path class="trait" d="M290 109 L290 160 M290 160 L280 210 M290 160 L300 210 M290 125 L252 112 M290 125 L256 132"/><g class="texte"><text x="185" y="40">voltigeur</text><text x="290" y="84" text-anchor="middle">pareur</text><text x="60" y="194" text-anchor="middle">porteur</text></g><g class="texte-petit" text-anchor="middle"><text x="105" y="230">épaules : oui</text><text x="210" y="230">bassin : oui</text></g></svg>` },
            { t: "etapes", titre: "Monter et démonter une pyramide à trois", items: [{ titre: "Se placer", md: "Les porteurs se placent et se stabilisent, dos plat." }, { titre: "Monter", md: "Le voltigeur monte avec l'aide du pareur, appuis sur bassin et épaules." }, { titre: "Tenir", md: "La figure est tenue **3 secondes**, regard vers le public." }, { titre: "Descendre", md: "Le voltigeur redescend **en premier**, aidé du pareur, sans sauter." }, { titre: "Se relever", md: "Les porteurs se relèvent en dernier." }] },
            { t: "attention", md: "Le dernier monté est le **premier à descendre**, et on ne **saute jamais** depuis une figure. Un appui au milieu du dos peut blesser la colonne vertébrale du porteur." },
            { t: "verifie", q: "En acrosport, quel est le rôle du pareur ?", choix: ["Il porte tout le poids de la figure", "Il assure la sécurité : il aide à monter, à descendre et protège la chute", "Il note la figure"], bonne: 1, explication: "Le pareur est l'ange gardien de la figure. Le porteur sert de base ; le juge, lui, note." },
          ],
        },
        {
          titre: "Arts du cirque et rôles",
          blocs: [
            { t: "texte", md: "Les **arts du cirque** regroupent le **jonglage** (balles, foulards, anneaux, massues, diabolo), les **équilibres** (fil, boule, rouleau américain, pédalgo) et l'acrobatie. La **cascade à 3 balles** est la figure de base du jongleur : les balles se croisent en dessinant un 8 couché." },
            { t: "tableau", titre: "Les engins de cirque", entetes: ["Engin", "Comment l'utiliser"], lignes: [["Massues", "On les lance et on les rattrape en rotation"], ["Diabolo", "On le fait tourner sur une ficelle tendue entre deux baguettes"], ["Rouleau américain", "On tient debout sur une planche posée sur un cylindre"], ["Boule", "On marche dessus en gardant l'équilibre"]] },
            { t: "liste", titre: "Trois rôles", items: ["Le **chorégraphe** imagine et organise les mouvements.", "L'**interprète** exécute avec précision et **présence**.", "Le **spectateur** observe avec respect et donne un avis **argumenté** à partir de critères : « Le canon était décalé, mais la fin à l'unisson était très nette. »"] },
          ],
        },
      ],
      bilan: "Espace, temps, énergie et relation sont les outils du danseur ; porteur, voltigeur et pareur ceux de l'acrosport : et chacun, chorégraphe, interprète ou spectateur, fait vivre le spectacle.",
    },
    "5e-eps-05-affrontement": {
      accroche: "Ton équipe vient de récupérer le ballon, et tous les adversaires sont encore dans ton camp. Tu as deux secondes pour décider. Dans un affrontement, la victoire ne va pas au plus fort, mais à celui qui lit le jeu le plus vite et respecte les règles.",
      objectifs: [
        "Connaître les règles, les postes et les stratégies de base des sports collectifs",
        "Appliquer les règles de score et de service en badminton et en tennis de table",
        "Respecter les règles de sécurité des sports de combat et savoir arbitrer",
      ],
      sections: [
        {
          titre: "Les sports collectifs : postes et règles",
          blocs: [
            { t: "texte", md: "Chaque équipe répartit ses joueurs sur des **postes** : gardien, défenseurs, ailiers, pivot, meneur (ou demi-centre). Chacun a un rôle, mais tous attaquent et défendent ensemble." },
            { t: "tableau", titre: "Joueurs sur le terrain et fautes courantes", entetes: ["Sport", "Joueurs par équipe", "Une faute typique"], lignes: [["Handball", "7", "Entrer dans la **zone** du gardien"], ["Basket-ball", "5", "**Reprise de dribble** : dribbler, s'arrêter, puis redribbler"], ["Volley-ball", "6", "Toucher le filet"], ["Football", "11", "Toucher le ballon de la main"]] },
            { t: "liste", titre: "D'autres fautes à connaître", items: ["**Marcher** : faire trop de pas avec le ballon sans dribbler.", "**Passage en force** : bousculer un défenseur déjà placé.", "**Contact irrégulier** : pousser, tenir, accrocher un adversaire."] },
          ],
        },
        {
          titre: "Se démarquer et contre-attaquer",
          blocs: [
            { t: "definition", terme: "Se démarquer", md: "Se déplacer vers un **espace libre**, loin de son défenseur, pour pouvoir **recevoir le ballon**. On fait un **appel de balle** avec la main et la voix." },
            { t: "schema", titre: "Un démarquage au handball", legende: "G : gardien, AG et AD : ailiers, ArG et ArD : arrières, DC : demi-centre, PV : pivot. L'arrière droit quitte son défenseur pour l'espace libre et reçoit la passe.", svg: `<svg viewBox="0 0 400 252"><text class="texte-petit" x="20" y="20">sens de l'attaque</text><path class="trait-fin" d="M126 16 L184 16" marker-end="url(#fl)"/><text class="texte-petit" x="390" y="20" text-anchor="end">zone : 6 m</text><rect class="aplat-papier trait" x="10" y="30" width="380" height="190"/><line class="trait-fin" x1="200" y1="30" x2="200" y2="220"/><path class="trait" d="M10 68 A57 57 0 0 1 10 182 M390 68 A57 57 0 0 0 390 182"/><path class="pointille" d="M10 40 A85 85 0 0 1 10 210 M390 40 A85 85 0 0 0 390 210"/><line x1="10" y1="111" x2="10" y2="139" stroke="var(--encre)" stroke-width="5"/><line x1="390" y1="111" x2="390" y2="139" stroke="var(--encre)" stroke-width="5"/><g class="aplat-fort"><rect x="312" y="62" width="12" height="12"/><rect x="292" y="98" width="12" height="12"/><rect x="292" y="144" width="12" height="12"/><rect x="312" y="180" width="12" height="12"/><rect x="372" y="119" width="12" height="12"/></g><g class="aplat-papier trait"><circle cx="26" cy="125" r="12"/><circle cx="348" cy="46" r="12"/><circle cx="268" cy="78" r="12"/><circle cx="248" cy="125" r="12"/><circle cx="324" cy="128" r="12"/><circle cx="280" cy="172" r="12"/><circle cx="348" cy="204" r="12"/></g><g class="texte-petit" text-anchor="middle"><text x="26" y="129">G</text><text x="348" y="50">AG</text><text x="268" y="82">ArG</text><text x="248" y="129">DC</text><text x="324" y="132">PV</text><text x="280" y="176">ArD</text><text x="348" y="208">AD</text></g><circle cx="236" cy="136" r="4" fill="var(--encre)"/><path d="M270 180 L246 196" fill="none" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><path class="pointille" d="M240 140 L238 186" marker-end="url(#fl)"/><text class="texte-petit texte-pigment" x="214" y="212" text-anchor="middle">espace libre</text><circle class="aplat-papier trait-fin" cx="20" cy="240" r="5"/><text class="texte-petit" x="30" y="244">attaquants</text><rect class="aplat-fort" x="100" y="235" width="10" height="10"/><text class="texte-petit" x="115" y="244">défenseurs</text><path d="M190 240 L214 240" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><text class="texte-petit" x="220" y="244">démarquage</text><path class="pointille" d="M295 240 L320 240"/><text class="texte-petit" x="325" y="244">passe</text></svg>` },
            { t: "definition", terme: "Contre-attaque", md: "Une attaque **très rapide**, lancée dès que l'on **récupère le ballon**, avant que la défense adverse soit replacée. On joue vers l'avant, avec des **passes longues**." },
            { t: "exemple", titre: "Contre-attaque ou attaque placée ?", md: "Au handball, ton équipe récupère le ballon. Le gardien fait aussitôt une **passe longue** à l'ailier qui a déjà couru vers l'avant : c'est une **contre-attaque**. Si la défense est déjà en place, on construit plutôt une **attaque placée**, avec des passes et des démarquages." },
            { t: "verifie", q: "Ton équipe vient de récupérer le ballon et tous les adversaires sont encore dans ton camp. Quelle est la meilleure décision ?", choix: ["Ralentir et attendre que tout le monde soit placé", "Lancer une contre-attaque rapide vers l'avant", "Dribbler sur place pour garder le ballon"], bonne: 1, explication: "La défense adverse n'est pas replacée : il faut en profiter tout de suite avec une contre-attaque et des passes longues." },
          ],
        },
        {
          titre: "Les sports de raquette : compter et servir",
          blocs: [
            { t: "tableau", titre: "Badminton et tennis de table", entetes: ["Règle", "Badminton", "Tennis de table"], lignes: [["Points pour gagner un set", "**21**, avec 2 points d'écart", "**11**, avec 2 points d'écart"], ["Qui marque ?", "Chaque échange donne un point", "Chaque échange donne un point"], ["Service", "En diagonale, volant frappé sous la taille", "La balle rebondit d'abord dans son camp, puis chez l'adversaire"], ["Côté ou changement de service", "Score **pair** : on sert à **droite** ; impair : à gauche", "On change de serveur tous les **2 points**"], ["Volant ou balle sur la ligne", "**Bon**", "La balle qui touche l'arête du dessus de la table est bonne"]] },
            { t: "exemple", titre: "De quel côté servir ?", md: "En badminton, tu as 6 points et tu gagnes l'échange : tu as 7 points, un score **impair**, donc tu sers depuis la **gauche**. Si tu avais 8 points, tu servirais à **droite**." },
            { t: "verifie", q: "En badminton, un volant qui tombe sur la ligne est…", choix: ["faute", "bon", "à rejouer"], bonne: 1, explication: "La ligne fait partie du terrain : un volant qui la touche est bon." },
          ],
        },
        {
          titre: "Combattre et arbitrer avec respect",
          blocs: [
            { t: "texte", md: "En **sports de combat** scolaires (lutte, judo), on cherche à **déséquilibrer**, **retourner** ou **immobiliser** l'adversaire. Sont **interdits** : les coups, les saisies au cou, les torsions des articulations. On **s'arrête immédiatement** au signal de l'arbitre ou quand l'adversaire **tape** au sol ou sur soi." },
            { t: "propriete", titre: "Le rôle de l'arbitre", md: "L'**arbitre** fait respecter les règles, siffle les fautes, reste **impartial** et explique ses décisions avec des **gestes clairs**. Les joueurs acceptent ses décisions **sans contester**. Si un joueur conteste bruyamment, l'arbitre reste calme, rappelle la règle et peut le sanctionner." },
            { t: "etapes", titre: "L'arbitre constate une faute au handball", items: [{ titre: "Siffler", md: "Un coup de sifflet fort pour arrêter le jeu." }, { titre: "Montrer", md: "Faire le geste correspondant à la faute." }, { titre: "Indiquer", md: "Montrer avec le bras le sens de la remise en jeu." }, { titre: "Vérifier", md: "Contrôler que les joueurs sont à bonne distance." }, { titre: "Reprendre", md: "Siffler ou faire signe pour relancer le jeu." }] },
          ],
        },
      ],
      bilan: "Se démarquer, contre-attaquer, compter juste, servir du bon côté, combattre sans danger et accepter l'arbitre : l'affrontement est un jeu d'intelligence encadré par des règles.",
    },
    "5e-eps-06-citoyennete-sportive": {
      accroche: "Une joueuse signale qu'elle a touché le ballon avant qu'il sorte, alors que l'arbitre ne l'avait pas vu. Son équipe perd le point… et gagne le respect de tout le gymnase. Le sport n'apprend pas seulement à courir ou à lancer : il apprend à vivre ensemble.",
      objectifs: [
        "Adopter une attitude de fair-play et de respect dans la mixité",
        "Connaître le handisport, les Jeux paralympiques et les dangers du dopage",
        "Tenir les rôles de juge, de coach et d'observateur avec une fiche",
      ],
      sections: [
        {
          titre: "Le fair-play et la mixité",
          blocs: [
            { t: "definition", terme: "Fair-play", md: "Respecter les **règles**, les **adversaires**, les **partenaires** et l'**arbitre** ; accepter la défaite **sans excuse** et la victoire **sans moquerie** ; **signaler ses propres fautes**." },
            { t: "texte", md: "La **mixité** en EPS, c'est jouer et apprendre **ensemble**, filles et garçons, en adaptant les règles si besoin pour que **chacun ait sa place**. Si un élève ne passe jamais le ballon aux filles de son équipe, la réaction juste est de lui rappeler que l'équipe gagne quand **tous** participent, et de proposer une règle qui oblige à faire circuler le ballon." },
            { t: "verifie", q: "Laquelle de ces attitudes relève du fair-play ?", choix: ["Contester chaque décision de l'arbitre", "Serrer la main de l'adversaire après une défaite", "Se moquer de l'équipe perdante"], bonne: 1, explication: "Saluer l'adversaire, même après une défaite, montre le respect. Contester et se moquer sont le contraire du fair-play." },
          ],
        },
        {
          titre: "Handisport et Jeux paralympiques",
          blocs: [
            { t: "definition", terme: "Handisport et sport adapté", md: "Le **handisport** concerne les personnes en situation de **handicap physique ou sensoriel** (moteur, visuel, auditif). Le **sport adapté** concerne le **handicap mental ou psychique**. Les athlètes sont répartis en **catégories** selon leur handicap, pour que la compétition soit **équitable**." },
            { t: "frise", titre: "Des Jeux pour tous", evenements: [{ date: 1948, label: "Les jeux de Stoke Mandeville", detail: "En Angleterre, le médecin Ludwig Guttmann organise des compétitions pour des blessés de guerre en fauteuil." }, { date: 1960, label: "Premiers Jeux paralympiques à Rome", detail: "Environ 400 athlètes venus de 23 pays." }, { date: 1976, label: "Premiers Jeux paralympiques d'hiver", detail: "En Suède." }, { date: 1988, label: "Séoul", detail: "Les Jeux paralympiques se tiennent dans les mêmes sites que les Jeux olympiques." }, { date: 2024, label: "Paris", detail: "La France accueille les Jeux paralympiques, quelques semaines après les JO." }] },
            { t: "tableau", titre: "Quelques disciplines paralympiques", entetes: ["Discipline", "Description"], lignes: [["**Cécifoot**", "Football pour joueurs déficients visuels, avec un ballon à grelots"], ["**Goalball**", "Ballon sonore lancé à la main, joueurs aux yeux bandés"], ["**Boccia**", "Boules de précision, proche de la pétanque"], ["**Basket fauteuil**", "Basket joué en fauteuil roulant"], ["**Para athlétisme**", "Courses, sauts et lancers avec prothèses, fauteuils ou guides"]] },
            { t: "verifie", q: "Pourquoi les athlètes paralympiques sont-ils répartis en catégories ?", choix: ["Pour que la compétition soit équitable entre handicaps comparables", "Pour qu'il y ait moins de médailles", "Pour séparer les pays"], bonne: 0, explication: "La classification regroupe les athlètes dont les capacités sont comparables : chacun peut ainsi gagner grâce à son talent et à son entraînement." },
          ],
        },
        {
          titre: "Le dopage : tricher et se mettre en danger",
          blocs: [
            { t: "definition", terme: "Dopage", md: "L'usage de **produits** ou de **méthodes interdits** pour améliorer ses performances. C'est une **tricherie** envers les autres sportifs et un **danger pour la santé** (cœur, foie, dépendance)." },
            { t: "texte", md: "Les contrôles sont organisés par l'**Agence mondiale antidopage** (**AMA**), créée en 1999, et en France par l'**AFLD** (Agence française de lutte contre le dopage)." },
            { t: "attention", md: "Le sportif est **responsable** de tout ce qu'il absorbe. Certains médicaments courants contiennent des substances interdites : même prescrits par un médecin, ils peuvent entraîner une **sanction** si le sportif n'a pas demandé d'autorisation spéciale. L'ignorance ne protège pas." },
          ],
        },
        {
          titre: "Juge, coach, observateur : des rôles utiles",
          blocs: [
            { t: "tableau", titre: "Les rôles en EPS", entetes: ["Rôle", "Mission"], lignes: [["**Arbitre**", "Faire respecter les règles pendant le jeu"], ["**Juge**", "Noter une prestation à partir de critères"], ["**Coach**", "Conseiller et encourager son équipe"], ["**Observateur**", "Relever des actions précises sur une fiche"], ["**Chronométreur**", "Mesurer le temps avec précision"]] },
            { t: "propriete", titre: "Calculer un pourcentage de réussite", md: "**Pourcentage = réussites ÷ tentatives × 100**.\nLa fiche d'observation sert à **progresser**, pas à juger la personne." },
            { t: "exemple", titre: "La fiche de Sami", etapes: ["Pendant le match, tu coches chaque passe de Sami : 15 tentées, 12 réussies.", "Pourcentage : 12 ÷ 15 × 100 = **80 %**.", "Tu remarques que ses 3 passes ratées étaient des passes longues.", "En coach, tu lui donnes un conseil **précis et bienveillant** : « Sur les longues distances, fais plutôt deux passes courtes. »"] },
            { t: "graphique", type: "barres", titre: "Passes réussies relevées par les observateurs", unite: "%", donnees: [{ label: "Sami (12/15)", valeur: 80 }, { label: "Lina (14/20)", valeur: 70 }, { label: "Noé (9/15)", valeur: 60 }, { label: "Jade (17/20)", valeur: 85 }] },
            { t: "verifie", q: "Un gymnaste tente 8 figures. Sa fiche indique 75 % de figures tenues 3 secondes. Combien de figures a-t-il réussies ?", choix: ["4", "6", "7", "75"], bonne: 1, explication: "75 % de 8 = 0,75 × 8 = 6 figures réussies. Savoir lire un pourcentage dans les deux sens est utile pour analyser une fiche." },
          ],
        },
      ],
      bilan: "Fair-play, mixité, respect de tous les corps, refus du dopage et rôles bien tenus : le sport devient une école de citoyenneté où chacun a sa place.",
    },
  },
};
