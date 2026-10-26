// Cours ÉCLORE — 5e Mathématiques. Schéma : docs/COURS.md
export default {
  id: "5e-maths",
  chapitres: {
    "5e-maths-01-priorites-operatoires": {
      accroche: "Deux élèves calculent 20 − 3 × 4. L'un trouve 68, l'autre 8. Les deux ont fait des calculs justes… mais un seul a respecté les règles. Pour que tout le monde trouve le même résultat, les mathématiciens se sont mis d'accord sur un ordre.",
      objectifs: [
        "Calculer une expression en respectant les priorités opératoires",
        "Utiliser des parenthèses pour traduire une phrase en calcul",
        "Appliquer un programme de calcul et le remonter",
      ],
      sections: [
        {
          titre: "Pourquoi un ordre de calcul ?",
          blocs: [
            { t: "texte", md: "Une expression comme 20 − 3 × 4 peut se lire de deux façons. Si on calcule de gauche à droite, on obtient 17 × 4 = 68. Si on commence par la multiplication, on obtient 20 − 12 = 8.\n\nSans règle commune, une même écriture aurait deux valeurs : impossible de se comprendre. La convention internationale est claire : ==la multiplication passe avant la soustraction==. Le bon résultat est donc **8**." },
            { t: "definition", terme: "Expression numérique", md: "Une suite de nombres reliés par des signes d'opération (+, −, ×, ÷) et parfois des parenthèses. **Calculer** une expression, c'est trouver le nombre qu'elle représente." },
            { t: "tableau", titre: "Le vocabulaire des résultats", entetes: ["Opération", "Le résultat s'appelle", "Exemple"], lignes: [["Addition", "une **somme**", "7 + 5 = 12 : 12 est la somme de 7 et 5"], ["Soustraction", "une **différence**", "7 − 5 = 2"], ["Multiplication", "un **produit**", "7 × 5 = 35"], ["Division", "un **quotient**", "35 ÷ 5 = 7"]] },
          ],
        },
        {
          titre: "Les trois règles de priorité",
          blocs: [
            { t: "propriete", titre: "Priorités opératoires", md: "1. On calcule d'abord ce qui est **entre parenthèses**, en commençant par les plus intérieures.\n2. Puis les **multiplications et divisions**.\n3. Enfin les **additions et soustractions**.\n\nQuand il ne reste que des opérations de même priorité, on calcule **de gauche à droite**." },
            { t: "schema", titre: "Une pyramide pour s'en souvenir", legende: "On commence en haut de la pyramide et on descend étage par étage.", svg: `<svg viewBox="0 0 400 230"><path class="aplat" d="M200 18 L330 208 L70 208 Z"/><path class="trait" d="M200 18 L330 208 L70 208 Z"/><line class="trait-fin" x1="157" y1="81" x2="243" y2="81"/><line class="trait-fin" x1="114" y1="145" x2="286" y2="145"/><text class="texte" x="200" y="62" text-anchor="middle">( )</text><text class="texte" x="200" y="120" text-anchor="middle">× et ÷</text><text class="texte" x="200" y="184" text-anchor="middle">+ et −</text><text class="texte-main" x="352" y="62">1er</text><text class="texte-main" x="352" y="120">2e</text><text class="texte-main" x="352" y="184">3e</text><path class="trait-fin" d="M30 40 L30 190" marker-end="url(#fl)"/><text class="texte-petit" x="22" y="30">ordre</text></svg>` },
            { t: "exemple", titre: "Calculer A = 20 − 3 × (2 + 4)", etapes: ["Parenthèses d'abord : 2 + 4 = 6, donc A = 20 − 3 × 6.", "Puis la multiplication : 3 × 6 = 18, donc A = 20 − 18.", "Enfin la soustraction : A = 2."] },
            { t: "attention", md: "Ne calcule pas « de gauche à droite » sans réfléchir : dans 5 + 2 × 10, on ne fait pas 5 + 2 = 7. La multiplication passe d'abord : 5 + 20 = **25**." },
            { t: "verifie", q: "Combien vaut 12 − 8 ÷ 4 ?", choix: ["1", "10", "2", "8"], bonne: 1, explication: "La division passe avant la soustraction : 8 ÷ 4 = 2, puis 12 − 2 = 10. Le piège « 1 » vient d'un calcul de gauche à droite (12 − 8 = 4, puis 4 ÷ 4)." },
          ],
        },
        {
          titre: "Quand tout a la même priorité",
          blocs: [
            { t: "texte", md: "Dans 30 − 10 + 5, il n'y a que des additions et soustractions : on avance **de gauche à droite**. 30 − 10 = 20, puis 20 + 5 = 25. Même règle pour les multiplications et divisions : 40 ÷ 4 × 2 = 10 × 2 = 20." },
            { t: "astuce", md: "Avant de calculer, souligne au crayon l'opération prioritaire. Recopie ensuite toute la ligne avec le résultat à sa place : une étape par ligne, et les erreurs disparaissent." },
            { t: "verifie", q: "Combien vaut 40 ÷ 4 × 2 ?", choix: ["5", "20", "80"], bonne: 1, explication: "Division et multiplication ont la même priorité : on va de gauche à droite. 40 ÷ 4 = 10, puis 10 × 2 = 20." },
          ],
        },
        {
          titre: "Programmes de calcul et parenthèses",
          blocs: [
            { t: "definition", terme: "Programme de calcul", md: "Une suite d'instructions à appliquer, dans l'ordre, à un nombre de départ." },
            { t: "etapes", titre: "Programme : « Choisis un nombre, ajoute 4, multiplie par 3 »", items: [{ titre: "Départ", md: "On choisit 5." }, { titre: "Ajouter 4", md: "5 + 4 = 9" }, { titre: "Multiplier par 3", md: "9 × 3 = 27" }, { titre: "En une ligne", md: "(5 + 4) × 3 = 27 : les **parenthèses** obligent à ajouter avant de multiplier." }] },
            { t: "exemple", titre: "Remonter le programme", md: "On a obtenu 27 et on cherche le nombre de départ. On fait les **opérations inverses dans l'ordre inverse** : 27 ÷ 3 = 9, puis 9 − 4 = 5." },
            { t: "savais-tu", md: "Les parenthèses ne sont apparues dans les calculs qu'au XVIe siècle. Avant, on traçait une barre au-dessus des nombres à regrouper : le *vinculum*." },
          ],
        },
      ],
      bilan: "Parenthèses, puis × et ÷, puis + et − ; à égalité, de gauche à droite. Avec ces règles, tout le monde trouve le même résultat.",
    },
    "5e-maths-02-nombres-relatifs": {
      accroche: "Ce matin, le thermomètre affiche −6 °C. Cet après-midi, il fait 9 degrés de plus. Quelle température fait-il ? Pour répondre, il faut des nombres qui descendent sous zéro : les nombres relatifs.",
      objectifs: [
        "Repérer un nombre relatif sur une droite graduée et un point dans un repère",
        "Comparer et ranger des nombres relatifs, trouver l'opposé d'un nombre",
        "Additionner et soustraire des nombres relatifs",
      ],
      sections: [
        {
          titre: "Des nombres sous zéro",
          blocs: [
            { t: "texte", md: "Tu rencontres des nombres négatifs plus souvent que tu ne le crois : une température de −6 °C, le niveau −2 d'un parking, une plongée à −15 m, un compte en banque à −20 €.\n\nLe zéro sert de **repère** : au-dessus, les nombres positifs ; en dessous, les nombres négatifs. Ensemble, ils forment les **nombres relatifs**." },
            { t: "definition", terme: "Nombre relatif", md: "Un nombre muni d'un **signe** : + pour les positifs, − pour les négatifs. On écrit souvent les positifs sans leur signe : +4 = 4.\n\nSa **distance à zéro** est le nombre sans son signe : la distance à zéro de −7,5 est 7,5. Zéro est à la fois positif et négatif." },
            { t: "droite", titre: "Une droite graduée, de −8 à 6", min: -8, max: 6, pas: 1, points: [{ x: -7, label: "E" }, { x: -3, label: "A" }, { x: 0, label: "O" }, { x: 2.5, label: "B" }, { x: 4, label: "C" }] },
            { t: "texte", md: "Sur une droite graduée, chaque point a une **abscisse** : sa position par rapport à l'origine O. Le point A est 3 unités à gauche de O : son abscisse est **−3**. Le point B est entre 2 et 3, au milieu : son abscisse est 2,5." },
            { t: "definition", terme: "Nombres opposés", md: "Deux nombres qui ont la **même distance à zéro** mais des signes contraires : 4 et −4, ou −7,5 et 7,5. Sur la droite, ils sont symétriques par rapport à l'origine. ==La somme de deux opposés vaut 0.==" },
          ],
        },
        {
          titre: "Comparer et ranger",
          blocs: [
            { t: "propriete", titre: "Comparer deux relatifs", md: "Sur une droite graduée orientée vers la droite, le plus petit nombre est **toujours le plus à gauche**.\n\n• Un négatif est plus petit qu'un positif : −5 < 2.\n• Entre deux négatifs, le plus petit est celui qui a la **plus grande** distance à zéro : −8 < −2." },
            { t: "attention", md: "−8 « a l'air » plus grand que −2 parce que 8 est plus grand que 2. C'est faux ! Pense à la température : il fait plus froid à −8 °C qu'à −2 °C. Donc −8 < −2." },
            { t: "exemple", titre: "Ranger −3 ; 2 ; −7 ; 0 ; 5 ; −1 dans l'ordre croissant", etapes: ["Les négatifs d'abord : −7, −3, −1 (du plus loin de zéro au plus proche).", "Puis zéro.", "Puis les positifs : 2, 5.", "Résultat : −7 < −3 < −1 < 0 < 2 < 5."] },
            { t: "astuce", md: "Pour trouver la **distance entre deux points** d'une droite graduée, compte les unités qui les séparent. Entre −7 et 4 : 7 unités jusqu'à zéro, puis 4 unités, soit **11** en tout." },
            { t: "verifie", q: "L'inégalité −3 > −1 est-elle vraie ?", choix: ["Oui, car 3 est plus grand que 1", "Non, −3 est plus petit que −1"], bonne: 1, explication: "−3 est plus à gauche que −1 sur la droite graduée : −3 < −1. Entre deux négatifs, le plus petit est le plus éloigné de zéro." },
          ],
        },
        {
          titre: "Se repérer dans le plan",
          blocs: [
            { t: "definition", terme: "Repère du plan", md: "Deux droites graduées perpendiculaires qui se coupent en leur zéro, l'**origine O**, de coordonnées (0 ; 0). L'axe horizontal est l'axe des **abscisses**, l'axe vertical celui des **ordonnées**." },
            { t: "schema", titre: "Quatre points dans un repère", legende: "Pour placer A(3 ; 2) : on part de O, on avance de 3 vers la droite, puis on monte de 2.", svg: `<svg viewBox="0 0 400 260"><g class="trait-fin" opacity="0.35"><line x1="50" y1="30" x2="50" y2="230"/><line x1="75" y1="30" x2="75" y2="230"/><line x1="100" y1="30" x2="100" y2="230"/><line x1="125" y1="30" x2="125" y2="230"/><line x1="150" y1="30" x2="150" y2="230"/><line x1="175" y1="30" x2="175" y2="230"/><line x1="225" y1="30" x2="225" y2="230"/><line x1="250" y1="30" x2="250" y2="230"/><line x1="275" y1="30" x2="275" y2="230"/><line x1="300" y1="30" x2="300" y2="230"/><line x1="325" y1="30" x2="325" y2="230"/><line x1="350" y1="30" x2="350" y2="230"/><line x1="50" y1="30" x2="350" y2="30"/><line x1="50" y1="55" x2="350" y2="55"/><line x1="50" y1="80" x2="350" y2="80"/><line x1="50" y1="105" x2="350" y2="105"/><line x1="50" y1="155" x2="350" y2="155"/><line x1="50" y1="180" x2="350" y2="180"/><line x1="50" y1="205" x2="350" y2="205"/><line x1="50" y1="230" x2="350" y2="230"/></g><line class="trait" x1="40" y1="130" x2="365" y2="130" marker-end="url(#fl)"/><line class="trait" x1="200" y1="240" x2="200" y2="18" marker-end="url(#fl)"/><text class="texte-petit" x="190" y="145" text-anchor="middle">O</text><text class="texte-petit" x="225" y="145" text-anchor="middle">1</text><text class="texte-petit" x="190" y="109" text-anchor="middle">1</text><text class="texte-petit" x="362" y="148" text-anchor="end">abscisses</text><text class="texte-petit" x="208" y="22">ordonnées</text><line class="pointille" x1="275" y1="80" x2="275" y2="130"/><line class="pointille" x1="200" y1="80" x2="275" y2="80"/><circle cx="275" cy="80" r="4" fill="var(--pigment)"/><circle cx="125" cy="80" r="4" fill="var(--pigment)"/><circle cx="150" cy="205" r="4" fill="var(--pigment)"/><circle cx="300" cy="155" r="4" fill="var(--pigment)"/><text class="texte" x="282" y="72">A(3 ; 2)</text><text class="texte" x="118" y="72" text-anchor="end">M(−3 ; 2)</text><text class="texte" x="143" y="222" text-anchor="end">C(−2 ; −3)</text><text class="texte" x="307" y="172">D(4 ; −1)</text></svg>` },
            { t: "propriete", titre: "Lire les coordonnées", md: "Un point est repéré par un **couple** (abscisse ; ordonnée). On lit **toujours l'abscisse en premier**, sur l'axe horizontal, puis l'ordonnée, sur l'axe vertical." },
            { t: "exemple", titre: "Où se trouve M(−3 ; 2) ?", md: "Son abscisse −3 est négative : M est **à gauche** de l'axe vertical. Son ordonnée 2 est positive : M est **au-dessus** de l'axe horizontal. M est donc en haut à gauche." },
            { t: "verifie", q: "Dans le couple (−2 ; 5), que représente le nombre −2 ?", choix: ["L'ordonnée", "L'abscisse", "L'origine"], bonne: 1, explication: "Le premier nombre est toujours l'abscisse (lecture horizontale), le second l'ordonnée (lecture verticale)." },
          ],
        },
        {
          titre: "Additionner des nombres relatifs",
          blocs: [
            { t: "texte", md: "Reprenons le thermomètre : on part de −6 °C et on monte de 9 degrés. Sur la droite graduée, on part de −6 et on avance de 9 vers la droite : on arrive à **3**. Donc (−6) + 9 = 3." },
            { t: "droite", titre: "De −6 °C, on monte de 9 degrés", min: -8, max: 5, pas: 1, points: [{ x: -6, label: "matin" }, { x: 3, label: "après-midi" }] },
            { t: "propriete", titre: "La règle d'addition", md: "• **Même signe** : on additionne les distances à zéro et on garde le signe commun. (−4) + (−9) = **−13**.\n• **Signes différents** : on soustrait la plus petite distance à zéro de la plus grande, et on garde le signe du nombre le plus éloigné de zéro. 7 + (−12) = **−5**, car 12 − 7 = 5 et 12 l'emporte." },
            { t: "astuce", md: "Pense à de l'argent : un gain de 7 € et une dette de 12 € te laissent avec une dette de 5 €. Les « + » sont des gains, les « − » des dettes." },
            { t: "verifie", q: "Combien vaut 7 + (−12) ?", choix: ["19", "5", "−5", "−19"], bonne: 2, explication: "Signes différents : 12 − 7 = 5. Le nombre le plus éloigné de zéro est −12, donc le résultat est négatif : −5." },
          ],
        },
        {
          titre: "Soustraire, c'est ajouter l'opposé",
          blocs: [
            { t: "propriete", titre: "Soustraction de relatifs", md: "==Soustraire un nombre revient à ajouter son opposé.==\n5 − (−3) = 5 + 3 = 8 et 4 − 10 = 4 + (−10) = −6." },
            { t: "exemple", titre: "Calculer (−9) − (−4)", etapes: ["On remplace « − (−4) » par « + 4 » : (−9) + 4.", "Signes différents : 9 − 4 = 5.", "Le plus éloigné de zéro est −9 : le résultat est négatif.", "(−9) − (−4) = −5."] },
            { t: "exemple", titre: "Une suite de calculs : (−8) − (−15) + (−4) − 6", etapes: ["On transforme chaque soustraction : (−8) + 15 + (−4) + (−6).", "De gauche à droite : (−8) + 15 = 7.", "Puis 7 + (−4) = 3.", "Enfin 3 + (−6) = −3."] },
            { t: "attention", md: "Dans 5 − (−3), ne réponds pas 2 ! Enlever une dette de 3 €, c'est comme gagner 3 € : le résultat **augmente**. 5 − (−3) = 8." },
          ],
        },
      ],
      bilan: "Le plus petit est le plus à gauche ; même signe, on additionne les distances ; signes différents, on les soustrait ; et soustraire, c'est ajouter l'opposé.",
    },
    "5e-maths-03-fractions": {
      accroche: "Tu coupes une pizza en 4 et tu en manges 2 parts. Ton ami coupe la sienne en 2 et en mange 1 part. Qui a mangé le plus ? Exactement autant : 2/4 = 1/2. Les fractions cachent souvent le même nombre sous des écritures différentes.",
      objectifs: [
        "Reconnaître des fractions égales et simplifier une fraction",
        "Comparer et ranger des fractions",
        "Additionner et soustraire des fractions de dénominateurs égaux ou multiples",
        "Calculer une fraction d'une quantité",
      ],
      sections: [
        {
          titre: "Une fraction, c'est un partage",
          blocs: [
            { t: "definition", terme: "Fraction", md: "Dans la fraction 3/4, le **dénominateur** 4 (en bas) dit en combien de parts égales on partage l'unité ; le **numérateur** 3 (en haut) dit combien de parts on prend. 3/4 est aussi le **quotient** 3 ÷ 4 = 0,75." },
            { t: "schema", titre: "Deux fractions égales", legende: "La même longueur est coloriée : prendre 2 parts sur 3, ou 4 parts sur 6, c'est pareil.", svg: `<svg viewBox="0 0 400 180"><rect class="aplat" x="60" y="30" width="200" height="40"/><rect class="trait" x="60" y="30" width="300" height="40" fill="none"/><line class="trait-fin" x1="160" y1="30" x2="160" y2="70"/><line class="trait-fin" x1="260" y1="30" x2="260" y2="70"/><text class="texte-main" x="32" y="56" text-anchor="middle">2/3</text><rect class="aplat" x="60" y="100" width="200" height="40"/><rect class="trait" x="60" y="100" width="300" height="40" fill="none"/><line class="trait-fin" x1="110" y1="100" x2="110" y2="140"/><line class="trait-fin" x1="160" y1="100" x2="160" y2="140"/><line class="trait-fin" x1="210" y1="100" x2="210" y2="140"/><line class="trait-fin" x1="260" y1="100" x2="260" y2="140"/><line class="trait-fin" x1="310" y1="100" x2="310" y2="140"/><text class="texte-main" x="32" y="126" text-anchor="middle">4/6</text><line class="pointille" x1="260" y1="20" x2="260" y2="150"/><text class="texte" x="200" y="172" text-anchor="middle">2/3 = 4/6</text></svg>` },
            { t: "propriete", titre: "Fractions égales", md: "Une fraction ne change pas si on **multiplie** ou si on **divise** son numérateur et son dénominateur **par le même nombre** (non nul).\n2/3 = (2 × 2)/(3 × 2) = 4/6 et 3/4 = (3 × 3)/(4 × 3) = 9/12." },
            { t: "attention", md: "On multiplie, on ne **ajoute** pas ! 2/3 n'est pas égal à 3/4 (on a ajouté 1 en haut et en bas) : 2/3 ≈ 0,67 alors que 3/4 = 0,75." },
          ],
        },
        {
          titre: "Simplifier une fraction",
          blocs: [
            { t: "texte", md: "**Simplifier**, c'est écrire une fraction égale avec des nombres plus petits. On divise le numérateur et le dénominateur par un même diviseur. Quand on ne peut plus, la fraction est **irréductible**." },
            { t: "exemple", titre: "Simplifier 15/25 puis 24/36", etapes: ["15 et 25 sont tous deux dans la table de 5 : 15/25 = (15 ÷ 5)/(25 ÷ 5) = 3/5.", "3 et 5 n'ont plus de diviseur commun (autre que 1) : 3/5 est irréductible.", "Pour 24/36, on peut diviser par 2 : 12/18, puis par 6 : 2/3.", "Plus rapide : diviser directement par 12, le plus grand diviseur commun : 24/36 = 2/3."] },
            { t: "astuce", md: "Les critères de divisibilité sont tes meilleurs alliés : deux nombres pairs se divisent par 2, deux nombres qui finissent par 0 ou 5 se divisent par 5, et si les sommes des chiffres sont dans la table de 3, on divise par 3." },
            { t: "verifie", q: "Quelle est la forme irréductible de 10/15 ?", choix: ["5/10", "2/3", "1/5", "10/15 ne se simplifie pas"], bonne: 1, explication: "10 et 15 sont divisibles par 5 : 10 ÷ 5 = 2 et 15 ÷ 5 = 3. On obtient 2/3, qui est irréductible." },
          ],
        },
        {
          titre: "Comparer et ranger des fractions",
          blocs: [
            { t: "propriete", titre: "Comparer deux fractions", md: "• **Même dénominateur** : la plus grande est celle qui a le plus grand numérateur. 5/7 > 3/7.\n• **Même numérateur** : la plus grande est celle qui a le plus **petit** dénominateur. 1/3 > 1/5 (un tiers de gâteau est plus gros qu'un cinquième).\n• Une fraction est **inférieure à 1** quand son numérateur est plus petit que son dénominateur." },
            { t: "droite", titre: "Des fractions placées entre 0 et 2", min: 0, max: 2, pas: 0.25, points: [{ x: 0.25, label: "1/4" }, { x: 0.5, label: "1/2" }, { x: 0.75, label: "3/4" }, { x: 1.25, label: "5/4" }, { x: 1.5, label: "3/2" }] },
            { t: "exemple", titre: "Comparer 5/6 et 2/3", etapes: ["Les dénominateurs sont différents, mais 6 est un multiple de 3.", "On transforme : 2/3 = 4/6.", "Même dénominateur : 5 > 4, donc 5/6 > 4/6.", "Conclusion : 5/6 > 2/3."] },
            { t: "verifie", q: "Laquelle de ces fractions est comprise entre 1/2 et 1 ?", choix: ["3/8", "5/4", "7/10", "2/5"], bonne: 2, explication: "7/10 = 0,7, entre 0,5 et 1. 3/8 = 0,375 et 2/5 = 0,4 sont plus petits que 1/2 ; 5/4 = 1,25 dépasse 1." },
          ],
        },
        {
          titre: "Additionner et soustraire",
          blocs: [
            { t: "propriete", titre: "Somme et différence", md: "Pour additionner ou soustraire des fractions, il faut le **même dénominateur**. On additionne (ou on soustrait) alors les **numérateurs** et on garde le dénominateur.\n2/7 + 3/7 = 5/7 et 2/3 + 1/3 = 3/3 = 1." },
            { t: "attention", md: "On n'additionne **jamais** les dénominateurs : 2/3 + 1/3 ne fait pas 3/6. Des tiers plus des tiers, ce sont toujours des tiers !" },
            { t: "exemple", titre: "Calculer 3/4 + 1/8", etapes: ["8 est un multiple de 4 (8 = 4 × 2).", "On transforme 3/4 en huitièmes : 3/4 = 6/8.", "On additionne les numérateurs : 6/8 + 1/8 = 7/8."] },
            { t: "exemple", titre: "Calculer 5/6 − 1/3, puis 2 − 3/5", etapes: ["1/3 = 2/6, donc 5/6 − 2/6 = 3/6 = 1/2 = 0,5.", "Un entier est aussi une fraction : 2 = 10/5.", "Donc 2 − 3/5 = 10/5 − 3/5 = 7/5 = 1,4."] },
          ],
        },
        {
          titre: "Prendre une fraction d'une quantité",
          blocs: [
            { t: "propriete", titre: "Fraction d'une quantité", md: "Prendre les **3/4 de 20**, c'est partager 20 en 4 parts égales et en prendre 3 : 20 ÷ 4 × 3 = 5 × 3 = **15**. On peut aussi calculer 20 × 3 ÷ 4 = 60 ÷ 4 = 15." },
            { t: "exemple", titre: "Les filles de la classe", md: "Dans une classe de 28 élèves, les 3/7 sont des filles. 28 ÷ 7 = 4, puis 4 × 3 = **12 filles**." },
            { t: "etapes", titre: "Un jardin de 240 m² : 2/3 de pelouse, 1/4 de potager, le reste en fleurs", items: [{ titre: "Pelouse", md: "240 ÷ 3 × 2 = 80 × 2 = 160 m²" }, { titre: "Potager", md: "240 ÷ 4 = 60 m²" }, { titre: "Déjà utilisé", md: "160 + 60 = 220 m²" }, { titre: "Fleurs", md: "240 − 220 = **20 m²**" }] },
            { t: "verifie", q: "Combien valent les 3/4 de 20 ?", choix: ["15", "12", "5", "80"], bonne: 0, explication: "20 ÷ 4 = 5 (un quart), puis 5 × 3 = 15 (trois quarts)." },
          ],
        },
      ],
      bilan: "Même dénominateur avant d'additionner, multiplier ou diviser en haut et en bas pour changer d'écriture, et « les 3/4 de » se calcule en divisant par 4 puis en multipliant par 3.",
    },
    "5e-maths-04-division-divisibilite": {
      accroche: "Une fleuriste a 84 roses et 60 tulipes. Elle veut composer des bouquets tous identiques, sans qu'il lui reste une seule fleur. Combien de bouquets au maximum ? Pour le savoir, il faut fouiller dans les diviseurs des nombres.",
      objectifs: [
        "Effectuer une division euclidienne et calculer un quotient décimal",
        "Trouver des multiples et des diviseurs, utiliser les critères de divisibilité",
        "Reconnaître un nombre premier et décomposer un entier en facteurs premiers",
      ],
      sections: [
        {
          titre: "La division euclidienne",
          blocs: [
            { t: "texte", md: "On range 47 œufs dans des boîtes de 6. On remplit 7 boîtes (7 × 6 = 42 œufs) et il reste 5 œufs. C'est une **division euclidienne** : on ne coupe pas les œufs, on cherche un quotient **entier** et un **reste**." },
            { t: "schema", titre: "La division posée de 47 par 6", legende: "On vérifie toujours : 6 × 7 + 5 = 42 + 5 = 47.", svg: `<svg viewBox="0 0 400 200"><text class="texte-main" x="140" y="50" text-anchor="end">47</text><line class="trait" x1="160" y1="28" x2="160" y2="130"/><line class="trait" x1="160" y1="60" x2="230" y2="60"/><text class="texte-main" x="185" y="50" text-anchor="middle">6</text><text class="texte-main" x="185" y="86" text-anchor="middle">7</text><text class="texte-main" x="140" y="82" text-anchor="end">− 42</text><line class="trait-fin" x1="98" y1="92" x2="146" y2="92"/><text class="texte-main" x="140" y="116" text-anchor="end">5</text><text class="texte-petit" x="20" y="46">dividende</text><line class="trait-fin" x1="76" y1="42" x2="110" y2="42" marker-end="url(#fl)"/><text class="texte-petit" x="262" y="46">diviseur</text><line class="trait-fin" x1="258" y1="42" x2="200" y2="42" marker-end="url(#fl)"/><text class="texte-petit" x="262" y="82">quotient</text><line class="trait-fin" x1="258" y1="78" x2="200" y2="78" marker-end="url(#fl)"/><text class="texte-pigment" x="40" y="116">reste</text><line class="trait-fin" x1="80" y1="112" x2="122" y2="112" marker-end="url(#fl-p)"/><text class="texte" x="200" y="170" text-anchor="middle">47 = 6 × 7 + 5, avec 5 &lt; 6</text></svg>` },
            { t: "propriete", titre: "L'égalité de la division euclidienne", md: "**dividende = diviseur × quotient + reste**, avec un reste **strictement plus petit que le diviseur**." },
            { t: "attention", md: "47 = 6 × 6 + 11 est une égalité juste, mais ce n'est **pas** la division euclidienne : le reste 11 est plus grand que 6, on pouvait encore remplir une boîte !" },
          ],
        },
        {
          titre: "Le quotient décimal",
          blocs: [
            { t: "texte", md: "Quand on peut partager les unités (des litres, des euros…), on continue la division après la virgule : on obtient le **quotient décimal**. Parfois il s'arrête (15 ÷ 8 = 1,875), parfois il ne s'arrête jamais : 10 ÷ 3 = 3,333… On donne alors une valeur arrondie." },
            { t: "exemple", titre: "Calculer 7,2 ÷ 4", etapes: ["En 7, combien de fois 4 ? 1 fois, reste 3. On écrit 1.", "On abaisse le 2 et on place la virgule au quotient : 32 dixièmes.", "En 32, combien de fois 4 ? 8 fois, reste 0.", "7,2 ÷ 4 = 1,8. Vérification : 4 × 1,8 = 7,2."] },
            { t: "exemple", titre: "Combien de bouteilles de 0,75 L avec 25,5 L ?", md: "On multiplie les deux nombres par 100 pour se débarrasser des virgules : 25,5 ÷ 0,75 = 2 550 ÷ 75 = **34 bouteilles**. Vérification : 34 × 0,75 = 25,5." },
            { t: "verifie", q: "Quel est le quotient décimal exact de 15 par 8 ?", choix: ["1,7", "1,875", "1 reste 7", "0,533"], bonne: 1, explication: "15 ÷ 8 = 1,875, car 8 × 1,875 = 15. « 1 reste 7 » est la division euclidienne, pas le quotient décimal." },
          ],
        },
        {
          titre: "Multiples et diviseurs",
          blocs: [
            { t: "definition", terme: "Multiple et diviseur", md: "Si a = b × c (avec des entiers), alors a est un **multiple** de b et de c, et b et c sont des **diviseurs** de a. Par exemple 91 = 7 × 13 : 91 est un multiple de 7, et 7 est un diviseur de 91." },
            { t: "exemple", titre: "Trouver tous les diviseurs de 12", etapes: ["On cherche les produits égaux à 12 : 1 × 12, 2 × 6, 3 × 4.", "On s'arrête quand les facteurs se croisent (après 3 vient 4, déjà trouvé).", "Diviseurs de 12 : 1, 2, 3, 4, 6, 12, soit **6 diviseurs**."] },
            { t: "propriete", titre: "Critères de divisibilité", md: "Pour savoir si un nombre est divisible par un autre sans poser la division, on regarde ses chiffres :" },
            { t: "tableau", titre: "Les critères à connaître", entetes: ["Divisible par", "Si…", "Exemple"], lignes: [["2", "le chiffre des unités est pair (0, 2, 4, 6, 8)", "538"], ["5", "il se termine par 0 ou 5", "1 235"], ["10", "il se termine par 0", "4 870"], ["3", "la somme de ses chiffres est divisible par 3", "411 : 4 + 1 + 1 = 6"], ["9", "la somme de ses chiffres est divisible par 9", "4 536 : 4 + 5 + 3 + 6 = 18"], ["4", "ses deux derniers chiffres forment un multiple de 4", "1 316 : 16 = 4 × 4"]] },
            { t: "verifie", q: "Le nombre 4 536 est-il divisible par 9 ?", choix: ["Oui", "Non"], bonne: 0, explication: "4 + 5 + 3 + 6 = 18 et 18 est dans la table de 9. Donc 4 536 est divisible par 9 (et aussi par 3)." },
          ],
        },
        {
          titre: "Les nombres premiers",
          blocs: [
            { t: "definition", terme: "Nombre premier", md: "Un nombre entier qui a **exactement deux diviseurs** : 1 et lui-même. Les premiers nombres premiers sont 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…" },
            { t: "attention", md: "**1 n'est pas premier** : il n'a qu'un seul diviseur. Et 2 est le seul nombre premier pair. Méfie-toi de 51 (= 3 × 17) ou 91 (= 7 × 13) : ils ont l'air premiers, mais ne le sont pas." },
            { t: "etapes", titre: "Décomposer 60 en produit de facteurs premiers", items: [{ titre: "Diviser par 2", md: "60 = 2 × 30" }, { titre: "Encore par 2", md: "30 = 2 × 15, donc 60 = 2 × 2 × 15" }, { titre: "Par 3", md: "15 = 3 × 5, donc 60 = 2 × 2 × 3 × 5" }, { titre: "Stop", md: "Tous les facteurs sont premiers : la décomposition est terminée." }] },
            { t: "exemple", titre: "Retour aux bouquets", etapes: ["84 = 2 × 2 × 3 × 7 et 60 = 2 × 2 × 3 × 5.", "Les facteurs communs sont 2 × 2 × 3 = 12.", "12 est le plus grand diviseur commun de 84 et 60 : **12 bouquets** au maximum.", "Chaque bouquet contient 84 ÷ 12 = 7 roses et 60 ÷ 12 = 5 tulipes."] },
            { t: "savais-tu", md: "Il y a plus de 2 000 ans, le savant grec Ératosthène a inventé une méthode pour trouver les nombres premiers : on écrit les nombres, puis on barre les multiples de 2, de 3, de 5… Ce qui reste est premier. C'est le **crible d'Ératosthène**." },
          ],
        },
      ],
      bilan: "Dividende = diviseur × quotient + reste, avec un reste plus petit que le diviseur ; les critères de divisibilité évitent de poser les divisions ; et tout entier se décompose en nombres premiers.",
    },
    "5e-maths-05-calcul-litteral": {
      accroche: "Le périmètre d'un carré de 3 cm ? 4 × 3. De 7 cm ? 4 × 7. De 100 cm ? 4 × 100. Plutôt que de répéter la même phrase à l'infini, les mathématiciens écrivent une fois pour toutes : 4 × c. Bienvenue dans le calcul avec des lettres !",
      objectifs: [
        "Écrire et simplifier une expression littérale",
        "Calculer une expression en remplaçant la lettre par un nombre, tester une égalité",
        "Développer avec la distributivité k(a + b) = ka + kb",
      ],
      sections: [
        {
          titre: "Des lettres à la place des nombres",
          blocs: [
            { t: "definition", terme: "Expression littérale", md: "Une expression qui contient une ou plusieurs **lettres**. Chaque lettre représente un nombre inconnu ou qui peut changer : on l'appelle une **variable**. Dans 7x + 4, la variable est x." },
            { t: "texte", md: "Une lettre permet d'écrire une **formule** valable pour tous les nombres. Le périmètre d'un carré de côté c est 4 × c, son aire est c × c, et cela marche pour tous les carrés du monde." },
            { t: "tableau", titre: "Traduire une phrase en expression", entetes: ["Phrase", "Expression"], lignes: [["le double de x", "2x"], ["x augmenté de 5", "x + 5"], ["le triple de x, diminué de 1", "3x − 1"], ["le carré de a", "a²"], ["périmètre d'un carré de côté c", "4c"], ["aire d'un carré de côté c", "c²"], ["prix de n cahiers à 2 € et de 3 stylos à 1,50 €", "2n + 4,5"]] },
          ],
        },
        {
          titre: "Simplifier l'écriture",
          blocs: [
            { t: "propriete", titre: "Les conventions d'écriture", md: "• On peut **supprimer le signe ×** devant une lettre ou une parenthèse : 3 × a = 3a et 2 × (x + 1) = 2(x + 1).\n• 1 × y s'écrit simplement **y**.\n• a × a s'écrit **a²** (« a au carré ») et a × a × a s'écrit a³.\n• Entre deux nombres, on garde le × : 3 × 5 ne s'écrit pas 35 !" },
            { t: "attention", md: "Ne confonds pas **2x** et **x²**. 2x = x + x (le double), alors que x² = x × x (le carré). Pour x = 5 : 2x = 10 mais x² = 25." },
            { t: "verifie", q: "Comment s'écrit plus simplement x × x ?", choix: ["2x", "x²", "xx2", "x + x"], bonne: 1, explication: "x × x est le carré de x : on écrit x². 2x, c'est x + x, une autre expression." },
          ],
        },
        {
          titre: "Calculer une expression, tester une égalité",
          blocs: [
            { t: "texte", md: "Pour **calculer** une expression littérale, on remplace la lettre par sa valeur et on **remet les signes ×** qui étaient sous-entendus. Ensuite, on applique les priorités opératoires." },
            { t: "exemple", titre: "Calculer 4x + 1, puis 3x² − 2x, pour x = 4 et x = 5", etapes: ["Pour x = 5 : 4x + 1 = 4 × 5 + 1 = 20 + 1 = 21.", "Pour x = 4 : 3x² − 2x = 3 × 4 × 4 − 2 × 4.", "Priorités : 3 × 16 − 8 = 48 − 8 = 40."] },
            { t: "exemple", titre: "Avec un décimal négatif : 2x + 6 pour x = −1,5", md: "2 × (−1,5) + 6 = −3 + 6 = **3**. Les parenthèses autour du nombre négatif évitent d'écrire « 2 × −1,5 »." },
            { t: "definition", terme: "Tester une égalité", md: "Une égalité a deux **membres**, de part et d'autre du signe =. Pour la tester avec une valeur, on calcule **séparément** chaque membre et on compare. Si les deux résultats sont égaux, l'égalité est vraie pour cette valeur." },
            { t: "tableau", titre: "L'égalité 3x + 2 = 14 est-elle vraie ?", entetes: ["Valeur de x", "Membre de gauche 3x + 2", "Membre de droite", "Vraie ?"], lignes: [["3", "3 × 3 + 2 = 11", "14", "non"], ["4", "3 × 4 + 2 = 14", "14", "**oui**"], ["5", "3 × 5 + 2 = 17", "14", "non"]] },
            { t: "verifie", q: "L'égalité 2x + 5 = 11 est-elle vraie pour x = 3 ?", choix: ["Oui", "Non"], bonne: 0, explication: "Membre de gauche : 2 × 3 + 5 = 6 + 5 = 11. Membre de droite : 11. Les deux membres sont égaux, l'égalité est vraie pour x = 3." },
          ],
        },
        {
          titre: "La distributivité",
          blocs: [
            { t: "schema", titre: "Deux façons de calculer la même aire", legende: "Aire du grand rectangle : 5 × (x + 3). Somme des deux petits : 5 × x + 5 × 3. C'est la même aire !", svg: `<svg viewBox="0 0 400 200"><rect class="aplat" x="60" y="40" width="180" height="100"/><rect class="aplat-fort" x="240" y="40" width="80" height="100"/><rect class="trait" x="60" y="40" width="260" height="100" fill="none"/><line class="trait" x1="240" y1="40" x2="240" y2="140"/><text class="texte-main" x="150" y="30" text-anchor="middle">x</text><text class="texte-main" x="280" y="30" text-anchor="middle">3</text><text class="texte-main" x="44" y="96" text-anchor="middle">5</text><text class="texte" x="150" y="95" text-anchor="middle">5 × x</text><text class="texte" x="280" y="95" text-anchor="middle">5 × 3</text><line class="trait-fin" x1="60" y1="152" x2="320" y2="152"/><line class="trait-fin" x1="60" y1="147" x2="60" y2="157"/><line class="trait-fin" x1="320" y1="147" x2="320" y2="157"/><text class="texte-petit" x="190" y="168" text-anchor="middle">x + 3</text><text class="texte" x="190" y="192" text-anchor="middle">5(x + 3) = 5x + 15</text></svg>` },
            { t: "propriete", titre: "Distributivité simple", md: "Pour tous nombres k, a et b :\n**k(a + b) = k × a + k × b** et **k(a − b) = k × a − k × b**.\nLe facteur k se « distribue » sur chaque terme de la parenthèse. Passer de la gauche à la droite, c'est **développer**." },
            { t: "exemple", titre: "Développer 5(x + 3) et 4(x − 1)", etapes: ["5(x + 3) = 5 × x + 5 × 3 = 5x + 15.", "4(x − 1) = 4 × x − 4 × 1 = 4x − 4."] },
            { t: "attention", md: "Le facteur doit multiplier **tous** les termes de la parenthèse. 4(x − 1) n'est pas égal à 4x − 1 : pour x = 2, 4 × (2 − 1) = 4, alors que 4 × 2 − 1 = 7." },
            { t: "astuce", md: "On peut aussi lire l'égalité à l'envers : c'est **factoriser**. Dans 6x + 9, 3 divise 6 et 9 : 6x + 9 = 3 × 2x + 3 × 3 = **3(2x + 3)**." },
          ],
        },
      ],
      bilan: "Une lettre remplace un nombre ; on supprime les × devant les lettres, on les remet pour calculer, et k(a + b) = ka + kb : le facteur multiplie chaque terme.",
    },
    "5e-maths-06-proportionnalite": {
      accroche: "Au marché, 3 kg de pommes coûtent 7,50 €. Combien pour 5 kg ? Le marchand ne sort pas sa calculatrice : il sait que le prix est proportionnel à la masse. Cette idée simple sert aussi pour les soldes, les cartes et les vitesses.",
      objectifs: [
        "Reconnaître une situation de proportionnalité et trouver son coefficient",
        "Calculer une quatrième proportionnelle par plusieurs méthodes",
        "Appliquer un pourcentage, utiliser une échelle et une vitesse moyenne",
      ],
      sections: [
        {
          titre: "Reconnaître la proportionnalité",
          blocs: [
            { t: "definition", terme: "Grandeurs proportionnelles", md: "Deux grandeurs sont **proportionnelles** si l'on passe de l'une à l'autre en multipliant **toujours par le même nombre**. Ce nombre s'appelle le **coefficient de proportionnalité**." },
            { t: "tableau", titre: "Le prix des pommes : on multiplie toujours par 2,5", entetes: ["Masse (kg)", "1", "2", "3", "5"], lignes: [["Prix (€)", "2,50", "5", "7,50", "12,50"]] },
            { t: "graphique", type: "courbe", titre: "Prix en fonction de la masse", unite: "€", donnees: [{ label: "0 kg", valeur: 0 }, { label: "1 kg", valeur: 2.5 }, { label: "2 kg", valeur: 5 }, { label: "3 kg", valeur: 7.5 }, { label: "4 kg", valeur: 10 }, { label: "5 kg", valeur: 12.5 }] },
            { t: "propriete", titre: "Un signe qui ne trompe pas", md: "Dans une situation de proportionnalité, les points du graphique sont **alignés avec l'origine**. Et si on double une grandeur, l'autre double aussi." },
            { t: "attention", md: "Tout ce qui augmente ensemble n'est pas proportionnel ! L'**âge** et la **taille** : à 10 ans on ne mesure pas deux fois plus qu'à 5 ans. Le **côté d'un carré** et son **aire** : côté 1 → aire 1, côté 2 → aire 4. On a multiplié par 1, puis par 2 : pas de coefficient unique." },
            { t: "verifie", q: "L'âge d'une personne et sa taille sont-ils proportionnels ?", choix: ["Oui", "Non"], bonne: 1, explication: "Non : un adulte de 40 ans ne mesure pas deux fois plus qu'à 20 ans. Il n'existe pas de coefficient fixe." },
          ],
        },
        {
          titre: "Calculer une quatrième proportionnelle",
          blocs: [
            { t: "texte", md: "On connaît trois nombres d'un tableau de proportionnalité et on cherche le quatrième. Trois méthodes, à choisir selon les nombres." },
            { t: "exemple", titre: "4 cahiers coûtent 6 €. Combien coûtent 10 cahiers ?", etapes: ["**Passage à l'unité** : 1 cahier coûte 6 ÷ 4 = 1,50 €, donc 10 cahiers coûtent 10 × 1,50 = 15 €.", "**Avec les colonnes** : 8 cahiers coûtent 2 × 6 = 12 € et 2 cahiers coûtent 6 ÷ 2 = 3 €.", "Comme 10 = 8 + 2, 10 cahiers coûtent 12 + 3 = 15 €."] },
            { t: "tableau", titre: "Le produit en croix : 8 correspond à 20, que correspond à 14 ?", entetes: ["Grandeur A", "8", "14"], lignes: [["Grandeur B", "20", "?"]] },
            { t: "propriete", titre: "Produit en croix", md: "On multiplie les deux nombres connus « en diagonale » et on divise par le troisième : ? = 14 × 20 ÷ 8 = 280 ÷ 8 = **35**." },
            { t: "verifie", q: "Dans un tableau de proportionnalité, 8 correspond à 20. Quel nombre correspond à 14 ?", choix: ["26", "35", "5,6", "28"], bonne: 1, explication: "Produit en croix : 14 × 20 ÷ 8 = 35. On peut vérifier avec le coefficient 20 ÷ 8 = 2,5 : 14 × 2,5 = 35." },
          ],
        },
        {
          titre: "Les pourcentages",
          blocs: [
            { t: "propriete", titre: "Appliquer un pourcentage", md: "Prendre **p %** d'une quantité, c'est la multiplier par p/100.\n15 % de 60 = 60 × 15 ÷ 100 = **9** et 25 % de 80 = 80 × 25 ÷ 100 = **20**." },
            { t: "tableau", titre: "Des pourcentages à connaître par cœur", entetes: ["Pourcentage", "Fraction", "Calcul rapide"], lignes: [["50 %", "1/2", "diviser par 2"], ["25 %", "1/4", "diviser par 4"], ["75 %", "3/4", "diviser par 4, puis × 3"], ["10 %", "1/10", "diviser par 10"], ["20 %", "1/5", "diviser par 5"]] },
            { t: "etapes", titre: "Calculer 30 % de 150 €", items: [{ titre: "Écrire le calcul", md: "30 % de 150 = 150 × 30 ÷ 100" }, { titre: "Multiplier", md: "150 × 30 = 4 500" }, { titre: "Diviser par 100", md: "4 500 ÷ 100 = **45 €**" }] },
            { t: "exemple", titre: "Un pull à 40 € soldé à −30 %", etapes: ["La réduction vaut 30 % de 40 € : 40 × 30 ÷ 100 = 12 €.", "Prix soldé : 40 − 12 = **28 €**."] },
            { t: "attention", md: "« −30 % » ne veut pas dire « 30 € de moins » : 40 − 30 = 10 € serait faux. On calcule d'abord **combien** représentent 30 % du prix." },
          ],
        },
        {
          titre: "Échelles et vitesses moyennes",
          blocs: [
            { t: "definition", terme: "Échelle", md: "Sur un plan à l'échelle **1/200**, 1 cm représente 200 cm dans la réalité. Les longueurs du plan et les longueurs réelles sont proportionnelles." },
            { t: "exemple", titre: "Cartes et maquettes", etapes: ["Carte au 1/50 000 : 1 cm représente 50 000 cm, soit 500 m.", "Maquette au 1/200 d'une tour de 60 m : on convertit 60 m = 6 000 cm.", "Hauteur sur la maquette : 6 000 ÷ 200 = **30 cm**."] },
            { t: "propriete", titre: "Vitesse moyenne", md: "**Vitesse moyenne = distance ÷ durée.** Un vélo qui parcourt 36 km en 2 h roule à 36 ÷ 2 = **18 km/h**. À vitesse constante, la distance est proportionnelle à la durée." },
            { t: "tableau", titre: "Une voiture à 90 km/h", entetes: ["Durée", "1 h = 60 min", "20 min", "10 min"], lignes: [["Distance", "90 km", "30 km", "15 km"]] },
            { t: "astuce", md: "20 min, c'est le tiers d'une heure (60 ÷ 3 = 20). La distance est donc le tiers de 90 km : 30 km. Raisonner en fractions d'heure évite les erreurs de conversion." },
          ],
        },
      ],
      bilan: "Proportionnel veut dire « toujours multiplié par le même nombre » : coefficient, passage à l'unité ou produit en croix, et les pourcentages, échelles et vitesses suivent la même logique.",
    },
    "5e-maths-07-statistiques": {
      accroche: "On a demandé à 40 élèves leur animal préféré. Une liste de 40 réponses en vrac, c'est illisible. Un tableau, une moyenne ou un diagramme, et tout devient clair en un coup d'œil : c'est le travail des statistiques.",
      objectifs: [
        "Organiser des données dans un tableau, calculer des effectifs et des fréquences",
        "Calculer et interpréter une moyenne",
        "Lire et construire un diagramme en bâtons, un diagramme circulaire ou un histogramme",
      ],
      sections: [
        {
          titre: "Effectifs et effectif total",
          blocs: [
            { t: "definition", terme: "Effectif", md: "L'**effectif** d'une valeur est le nombre de fois où elle apparaît dans la série. L'**effectif total** est la somme de tous les effectifs : c'est le nombre total de données." },
            { t: "tableau", titre: "Animal préféré de 40 élèves", entetes: ["Animal", "Effectif", "Fréquence", "En %", "Angle"], lignes: [["Chat", "12", "12/40 = 0,3", "30 %", "108°"], ["Chien", "15", "15/40 = 0,375", "37,5 %", "135°"], ["Poisson", "5", "5/40 = 0,125", "12,5 %", "45°"], ["Autre", "8", "8/40 = 0,2", "20 %", "72°"], ["**Total**", "**40**", "**1**", "**100 %**", "**360°**"]] },
            { t: "astuce", md: "Vérifie toujours ta dernière ligne : la somme des effectifs redonne l'effectif total, la somme des fréquences fait 1 (soit 100 %), et la somme des angles fait 360°." },
          ],
        },
        {
          titre: "Les fréquences",
          blocs: [
            { t: "definition", terme: "Fréquence", md: "La **fréquence** d'une valeur est le quotient **effectif de la valeur ÷ effectif total**. On l'écrit en fraction, en nombre décimal ou en pourcentage. Elle est toujours comprise entre 0 et 1." },
            { t: "exemple", titre: "10 élèves sur 25 pratiquent le football", etapes: ["Fréquence : 10/25.", "En décimal : 10 ÷ 25 = 0,4.", "En pourcentage : 0,4 = 40/100 = **40 %**."] },
            { t: "texte", md: "Les fréquences servent à **comparer** des groupes de tailles différentes. 10 footballeurs sur 25, c'est 40 % ; 12 footballeurs sur 40, c'est seulement 30 %. Le second groupe a plus de footballeurs… mais une proportion plus faible." },
          ],
        },
        {
          titre: "La moyenne",
          blocs: [
            { t: "definition", terme: "Moyenne", md: "La **moyenne** d'une série est la **somme de toutes les valeurs** divisée par le **nombre de valeurs**. C'est la valeur que chacun aurait si l'on partageait le total de façon égale." },
            { t: "exemple", titre: "Les notes de Lina : 8, 12, 12, 15, 18", etapes: ["Somme : 8 + 12 + 12 + 15 + 18 = 65.", "Nombre de notes : 5.", "Moyenne : 65 ÷ 5 = **13**."] },
            { t: "propriete", titre: "Moyenne avec des effectifs", md: "Quand une valeur se répète, on la **multiplie par son effectif**, puis on divise par l'effectif total. 4 élèves ont 8 et 6 élèves ont 13 : (4 × 8 + 6 × 13) ÷ 10 = (32 + 78) ÷ 10 = **11**." },
            { t: "attention", md: "Dans l'exemple ci-dessus, la moyenne n'est **pas** (8 + 13) ÷ 2 = 10,5 ! Il y a 10 élèves, pas 2 : les notes de 13 sont plus nombreuses et « pèsent » plus." },
            { t: "exemple", titre: "Quelle note viser ?", md: "Thomas a 12 de moyenne après 3 contrôles : il a 3 × 12 = 36 points. Pour 13 de moyenne sur 4 contrôles, il lui faut 4 × 13 = 52 points. Il doit donc avoir 52 − 36 = **16**." },
            { t: "verifie", q: "Un élève a obtenu 10, 10 et 16. Quelle est sa moyenne ?", choix: ["13", "12", "10", "36"], bonne: 1, explication: "10 + 10 + 16 = 36 et 36 ÷ 3 = 12. Attention, 13 serait la moyenne de 10 et 16 seulement." },
          ],
        },
        {
          titre: "Représenter des données",
          blocs: [
            { t: "graphique", type: "barres", titre: "Diagramme en bâtons : animal préféré", unite: "élèves", donnees: [{ label: "Chat", valeur: 12 }, { label: "Chien", valeur: 15 }, { label: "Poisson", valeur: 5 }, { label: "Autre", valeur: 8 }] },
            { t: "graphique", type: "secteurs", titre: "Diagramme circulaire : les mêmes données", unite: "élèves", donnees: [{ label: "Chat", valeur: 12 }, { label: "Chien", valeur: 15 }, { label: "Poisson", valeur: 5 }, { label: "Autre", valeur: 8 }] },
            { t: "propriete", titre: "Angle d'un secteur", md: "Dans un diagramme circulaire, le disque entier (**360°**) représente l'effectif total. **Angle = fréquence × 360°.** Une fréquence de 25 % donne 0,25 × 360 = 90°, un quart de disque." },
            { t: "exemple", titre: "16 élèves sur 40 préfèrent le bleu", md: "Fréquence : 16 ÷ 40 = 0,4. Angle : 0,4 × 360 = **144°**." },
            { t: "schema", titre: "Un histogramme : les temps de trajet", legende: "Les rectangles sont collés : chaque classe est un intervalle. [20 ; 30[ contient 9 élèves sur 20, soit une fréquence de 9 ÷ 20 = 45 %.", svg: `<svg viewBox="0 0 400 220"><rect class="aplat" x="90" y="90" width="90" height="90"/><rect class="aplat-fort" x="180" y="45" width="90" height="135"/><rect class="aplat" x="270" y="105" width="90" height="75"/><path class="trait" d="M90 180 L90 90 L180 90 M180 180 L180 45 L270 45 L270 180 M270 105 L360 105 L360 180" fill="none"/><line class="trait" x1="60" y1="180" x2="385" y2="180" marker-end="url(#fl)"/><line class="trait" x1="60" y1="180" x2="60" y2="20" marker-end="url(#fl)"/><text class="texte" x="135" y="84" text-anchor="middle">6</text><text class="texte" x="225" y="39" text-anchor="middle">9</text><text class="texte" x="315" y="99" text-anchor="middle">5</text><text class="texte-petit" x="90" y="196" text-anchor="middle">10</text><text class="texte-petit" x="180" y="196" text-anchor="middle">20</text><text class="texte-petit" x="270" y="196" text-anchor="middle">30</text><text class="texte-petit" x="360" y="196" text-anchor="middle">40</text><text class="texte-petit" x="385" y="214" text-anchor="end">durée (min)</text><text class="texte-petit" x="68" y="18">effectif</text></svg>` },
            { t: "tableau", titre: "Quel diagramme choisir ?", entetes: ["Diagramme", "Il montre le mieux…"], lignes: [["En bâtons", "la comparaison des effectifs de chaque valeur"], ["Circulaire", "la part de chaque valeur dans le total"], ["Histogramme", "des données regroupées en classes (intervalles)"]] },
            { t: "verifie", q: "Sur 40 élèves, 16 préfèrent le bleu. Quel angle représente le bleu dans un diagramme circulaire ?", choix: ["16°", "40°", "144°", "160°"], bonne: 2, explication: "Fréquence : 16 ÷ 40 = 0,4. Angle : 0,4 × 360° = 144°." },
          ],
        },
      ],
      bilan: "Effectif = combien de fois, fréquence = effectif ÷ total, moyenne = somme ÷ nombre de valeurs ; et le bon diagramme fait parler les données.",
    },
    "5e-maths-08-probabilites": {
      accroche: "Tu lances un dé : va-t-il tomber sur 6 ? Impossible de le prévoir. Pourtant, on peut mesurer ses chances par un nombre précis. C'est tout l'art des probabilités : mettre des nombres sur le hasard.",
      objectifs: [
        "Décrire une expérience aléatoire avec ses issues et ses événements",
        "Calculer une probabilité quand toutes les issues ont la même chance",
        "Relier la probabilité d'un événement à sa fréquence observée",
      ],
      sections: [
        {
          titre: "Expériences aléatoires, issues et événements",
          blocs: [
            { t: "definition", terme: "Expérience aléatoire", md: "Une expérience dont on connaît tous les résultats possibles, mais dont on **ne peut pas prévoir** le résultat. Chaque résultat possible s'appelle une **issue**. Avec un dé à 6 faces, il y a 6 issues : 1, 2, 3, 4, 5 et 6." },
            { t: "definition", terme: "Événement", md: "Un **ensemble d'issues**. L'événement « obtenir un nombre pair » est réalisé par les issues 2, 4 et 6 : ce sont ses issues **favorables**." },
            { t: "schema", titre: "Un sac de 10 boules indiscernables au toucher", legende: "R = rouge, V = verte, B = bleue. On tire une boule au hasard : il y a 10 issues, toutes avec la même chance.", svg: `<svg viewBox="0 0 400 240"><path class="aplat-papier" d="M130 60 C80 120 90 215 200 215 C310 215 320 120 270 60 Z"/><path class="trait" d="M130 60 C80 120 90 215 200 215 C310 215 320 120 270 60 Z" fill="none"/><path class="trait" d="M185 60 L172 38 M215 60 L228 38" fill="none"/><circle cx="180" cy="105" r="16" class="aplat-fort" stroke="var(--encre)"/><circle cx="220" cy="105" r="16" class="aplat" stroke="var(--encre)"/><circle cx="140" cy="140" r="16" class="aplat-fort" stroke="var(--encre)"/><circle cx="180" cy="140" r="16" class="aplat-papier" stroke="var(--encre)"/><circle cx="220" cy="140" r="16" class="aplat-papier" stroke="var(--encre)"/><circle cx="260" cy="140" r="16" class="aplat" stroke="var(--encre)"/><circle cx="140" cy="178" r="16" class="aplat-papier" stroke="var(--encre)"/><circle cx="180" cy="178" r="16" class="aplat-fort" stroke="var(--encre)"/><circle cx="220" cy="178" r="16" class="aplat-papier" stroke="var(--encre)"/><circle cx="260" cy="178" r="16" class="aplat-papier" stroke="var(--encre)"/><text class="texte" x="180" y="110" text-anchor="middle">R</text><text class="texte" x="220" y="110" text-anchor="middle">V</text><text class="texte" x="140" y="145" text-anchor="middle">R</text><text class="texte" x="180" y="145" text-anchor="middle">B</text><text class="texte" x="220" y="145" text-anchor="middle">B</text><text class="texte" x="260" y="145" text-anchor="middle">V</text><text class="texte" x="140" y="183" text-anchor="middle">B</text><text class="texte" x="180" y="183" text-anchor="middle">R</text><text class="texte" x="220" y="183" text-anchor="middle">B</text><text class="texte" x="260" y="183" text-anchor="middle">B</text><text class="texte-main" x="325" y="105">3 R</text><text class="texte-main" x="325" y="140">2 V</text><text class="texte-main" x="325" y="175">5 B</text><text class="texte" x="200" y="236" text-anchor="middle">P(verte) = 2/10 = 0,2</text></svg>` },
            { t: "verifie", q: "On lance un dé classique à 6 faces. Combien y a-t-il d'issues possibles ?", choix: ["1", "2", "6", "36"], bonne: 2, explication: "Le dé peut tomber sur 1, 2, 3, 4, 5 ou 6 : il y a 6 issues." },
          ],
        },
        {
          titre: "Une probabilité, entre 0 et 1",
          blocs: [
            { t: "propriete", titre: "L'échelle des probabilités", md: "Une **probabilité** est un nombre compris **entre 0 et 1**.\n• 0 : l'événement est **impossible** (obtenir 7 avec un dé).\n• 1 : l'événement est **certain** (obtenir un nombre inférieur à 7).\n• La somme des probabilités de toutes les issues vaut **1**." },
            { t: "droite", titre: "Du jamais au toujours", min: 0, max: 1, pas: 0.1, points: [{ x: 0, label: "impossible" }, { x: 0.2, label: "verte" }, { x: 0.5, label: "pile" }, { x: 1, label: "certain" }] },
            { t: "attention", md: "Une probabilité ne peut **jamais** valoir 1,5, ni être négative. Si ton calcul donne un tel nombre, il y a une erreur : le nombre d'issues favorables ne peut pas dépasser le nombre total d'issues." },
          ],
        },
        {
          titre: "Calculer une probabilité",
          blocs: [
            { t: "propriete", titre: "Quand toutes les issues ont la même chance", md: "Dans une situation d'**équiprobabilité** (dé équilibré, pièce équilibrée, boules indiscernables…) :\n**probabilité d'un événement = nombre d'issues favorables ÷ nombre total d'issues**." },
            { t: "exemple", titre: "Trois calculs", etapes: ["Pièce équilibrée : « pile » est 1 issue sur 2, probabilité 1/2 = 0,5.", "Roue de 8 secteurs numérotés de 1 à 8 : « moins de 4 » regroupe 1, 2, 3, soit 3/8 = 0,375.", "Jeu de 32 cartes : il y a 4 rois, donc 4/32 = 1/8 = 0,125."] },
            { t: "tableau", titre: "On lance un dé : du moins probable au plus probable", entetes: ["Événement", "Issues favorables", "Probabilité"], lignes: [["obtenir 7", "aucune", "0"], ["obtenir 3", "3", "1/6 ≈ 0,17"], ["obtenir 5 ou plus", "5, 6", "2/6 ≈ 0,33"], ["obtenir un nombre pair", "2, 4, 6", "3/6 = 0,5"], ["obtenir moins de 7", "1, 2, 3, 4, 5, 6", "6/6 = 1"]] },
            { t: "astuce", md: "Pour un événement « **ne pas** … », compte les issues qui ne le réalisent pas, ou calcule 1 moins la probabilité. Un sac de 4 boules rouges et 6 noires : ne pas tirer de rouge, c'est 6/10 = 0,6, soit 1 − 0,4." },
            { t: "verifie", q: "Un sac contient 3 boules rouges, 2 vertes et 5 bleues. Quelle est la probabilité de tirer une verte ?", choix: ["2/3", "0,2", "0,5", "2/5"], bonne: 1, explication: "Il y a 2 issues favorables sur 10 issues en tout : 2/10 = 0,2." },
          ],
        },
        {
          titre: "Probabilité et fréquence",
          blocs: [
            { t: "texte", md: "Si l'on lance une pièce 10 fois, on peut très bien obtenir 7 fois « face ». La **fréquence** observée est alors 0,7… mais la probabilité reste 0,5 ! Sur un petit nombre d'essais, le hasard fait des écarts." },
            { t: "graphique", type: "courbe", titre: "Fréquence de « pile » selon le nombre de lancers (une simulation)", donnees: [{ label: "10", valeur: 0.7 }, { label: "50", valeur: 0.56 }, { label: "100", valeur: 0.47 }, { label: "500", valeur: 0.512 }, { label: "1 000", valeur: 0.496 }, { label: "5 000", valeur: 0.502 }] },
            { t: "propriete", titre: "La loi des grands nombres", md: "Quand on répète une expérience aléatoire **un très grand nombre de fois**, la fréquence d'un événement se **rapproche** de sa probabilité." },
            { t: "exemple", titre: "Le dé est-il truqué ?", md: "Sur 600 lancers, le 6 est sorti 98 fois. Fréquence : 98 ÷ 600 ≈ 0,163. La probabilité théorique est 1/6 ≈ 0,167. C'est très proche : rien ne montre que le dé est truqué." },
            { t: "verifie", q: "On lance une pièce 10 fois et on obtient 7 fois « face ». La probabilité d'obtenir « face » est-elle 0,7 ?", choix: ["Oui", "Non, elle reste 0,5"], bonne: 1, explication: "0,7 est une fréquence observée sur seulement 10 lancers. Pour une pièce équilibrée, la probabilité vaut 1/2 = 0,5." },
          ],
        },
      ],
      bilan: "Une probabilité est un nombre entre 0 et 1 : issues favorables ÷ issues possibles quand tout est équiprobable, et la fréquence s'en approche quand on répète beaucoup.",
    },
    "5e-maths-09-angles-droites": {
      accroche: "Comment être sûr que deux rails de chemin de fer sont parallèles, alors qu'on ne peut pas les suivre jusqu'au bout ? Il suffit de tracer une droite qui les coupe et de mesurer deux angles. Les angles sont de redoutables détectives !",
      objectifs: [
        "Reconnaître des angles adjacents, opposés par le sommet, complémentaires ou supplémentaires",
        "Repérer les angles alternes-internes et correspondants formés par une sécante",
        "Calculer des mesures d'angles en justifiant, et prouver que deux droites sont parallèles",
      ],
      sections: [
        {
          titre: "Nommer et mesurer les angles",
          blocs: [
            { t: "tableau", titre: "Les familles d'angles", entetes: ["Angle", "Mesure", "Image"], lignes: [["aigu", "entre 0° et 90°", "la pointe d'une part de pizza"], ["droit", "exactement 90°", "le coin d'une feuille"], ["obtus", "entre 90° et 180°", "un éventail bien ouvert"], ["plat", "exactement 180°", "une demi-droite qui « continue » l'autre"]] },
            { t: "definition", terme: "Angles adjacents", md: "Deux angles sont **adjacents** s'ils ont le **même sommet**, un **côté commun**, et s'ils sont situés **de part et d'autre** de ce côté commun. Ils sont « collés » sans se chevaucher." },
            { t: "definition", terme: "Complémentaires et supplémentaires", md: "Deux angles sont **complémentaires** si la somme de leurs mesures vaut **90°** (35° et 55°). Ils sont **supplémentaires** si cette somme vaut **180°** (35° et 145°)." },
            { t: "astuce", md: "Pour ne pas confondre : pense à « **c**oin » pour **c**omplémentaires (le coin d'une feuille fait 90°) et à « **s**ur une droite » pour **s**upplémentaires (un angle plat fait 180°)." },
            { t: "verifie", q: "Un angle mesure 35°. Combien mesure son supplémentaire ?", choix: ["55°", "145°", "325°", "35°"], bonne: 1, explication: "Deux angles supplémentaires ont une somme de 180° : 180 − 35 = 145°. 55° est son complémentaire." },
          ],
        },
        {
          titre: "Deux droites sécantes",
          blocs: [
            { t: "schema", titre: "Quatre angles autour d'un point", legende: "Les deux angles de 60° sont opposés par le sommet, comme les deux angles de 120°. Deux angles voisins sont adjacents et supplémentaires : 60 + 120 = 180.", svg: `<svg viewBox="0 0 400 240"><line class="trait" x1="61.4" y1="200" x2="338.6" y2="40"/><line class="trait" x1="61.4" y1="40" x2="338.6" y2="200"/><path d="M226 105 A30 30 0 0 1 226 135" fill="none" stroke="var(--pigment)" stroke-width="3"/><path d="M174 135 A30 30 0 0 1 174 105" fill="none" stroke="var(--pigment)" stroke-width="3"/><path class="trait-fin" d="M181 109 A22 22 0 0 1 219 109" fill="none"/><path class="trait-fin" d="M219 131 A22 22 0 0 1 181 131" fill="none"/><circle cx="200" cy="120" r="3" fill="var(--encre)"/><text class="texte-pigment" x="238" y="124">60°</text><text class="texte-pigment" x="162" y="124" text-anchor="end">60°</text><text class="texte" x="200" y="90" text-anchor="middle">120°</text><text class="texte" x="200" y="160" text-anchor="middle">120°</text></svg>` },
            { t: "propriete", titre: "Angles opposés par le sommet", md: "Deux droites sécantes forment deux paires d'angles **opposés par le sommet** : ils ont le même sommet et leurs côtés se prolongent. ==Deux angles opposés par le sommet ont toujours la même mesure.==" },
            { t: "exemple", titre: "Deux calculs classiques", etapes: ["Deux angles complémentaires mesurent x et 2x : x + 2x = 90, donc 3x = 90 et x = **30°**.", "Trois angles adjacents forment un angle plat ; deux mesurent 47° et 68°.", "Le troisième mesure 180 − 47 − 68 = **65°**."] },
          ],
        },
        {
          titre: "Une sécante coupe deux droites",
          blocs: [
            { t: "texte", md: "Quand une droite (s), la **sécante**, coupe deux droites (d) et (d'), elle forme huit angles. Certains vont par paires, avec des noms précis." },
            { t: "definition", terme: "Angles alternes-internes", md: "Deux angles situés **de part et d'autre** de la sécante (alternes) et **entre** les deux droites (internes)." },
            { t: "schema", titre: "Deux angles alternes-internes", legende: "Les deux angles colorés sont entre (d) et (d'), chacun d'un côté de la sécante (s).", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier" x="40" y="70" width="330" height="100"/><path class="aplat-fort" d="M170 170 L198 170 A28 28 0 0 0 184.4 146 Z"/><path class="aplat-fort" d="M230 70 L202 70 A28 28 0 0 0 215.6 94 Z"/><line class="trait" x1="40" y1="70" x2="370" y2="70"/><line class="trait" x1="40" y1="170" x2="370" y2="170"/><line class="trait" x1="260" y1="20" x2="140" y2="220"/><text class="texte" x="376" y="74">(d)</text><text class="texte" x="376" y="174">(d')</text><text class="texte" x="132" y="228" text-anchor="end">(s)</text><text class="texte-petit" x="60" y="125">entre les droites</text><text class="texte-pigment" x="191" y="96" text-anchor="middle">59°</text><text class="texte-pigment" x="212" y="152" text-anchor="middle">59°</text></svg>` },
            { t: "definition", terme: "Angles correspondants", md: "Deux angles situés **du même côté** de la sécante, l'un **entre** les deux droites et l'autre **à l'extérieur**. Ils occupent la « même place » à chaque croisement." },
            { t: "schema", titre: "Deux angles correspondants", legende: "Les deux angles colorés sont à droite de (s) et au-dessus de leur droite : même position à chaque croisement.", svg: `<svg viewBox="0 0 400 240"><path class="aplat-fort" d="M170 170 L198 170 A28 28 0 0 0 184.4 146 Z"/><path class="aplat-fort" d="M230 70 L258 70 A28 28 0 0 0 244.4 46 Z"/><line class="trait" x1="40" y1="70" x2="370" y2="70"/><line class="trait" x1="40" y1="170" x2="370" y2="170"/><line class="trait" x1="260" y1="20" x2="140" y2="220"/><text class="texte" x="376" y="74">(d)</text><text class="texte" x="376" y="174">(d')</text><text class="texte" x="132" y="228" text-anchor="end">(s)</text><text class="texte-pigment" x="272" y="52" text-anchor="middle">59°</text><text class="texte-pigment" x="212" y="152" text-anchor="middle">59°</text></svg>` },
          ],
        },
        {
          titre: "Angles et droites parallèles",
          blocs: [
            { t: "propriete", titre: "Si les droites sont parallèles…", md: "Si deux droites **parallèles** sont coupées par une sécante, alors les angles **alternes-internes** sont égaux, et les angles **correspondants** sont égaux." },
            { t: "propriete", titre: "… et réciproquement", md: "Si deux droites coupées par une sécante forment deux angles alternes-internes (ou correspondants) **de même mesure**, alors ces droites sont **parallèles**. C'est l'outil pour **prouver** un parallélisme." },
            { t: "exemple", titre: "Calculer en justifiant", etapes: ["**On sait que** (d) // (d') et qu'un angle mesure 68°.", "**Or**, si deux droites parallèles sont coupées par une sécante, les angles alternes-internes sont égaux.", "**Donc** l'angle alterne-interne associé mesure aussi 68°.", "L'angle adjacent qui le complète sur la droite mesure 180 − 68 = **112°** (supplémentaires).", "Même raisonnement avec un angle de 52° : son correspondant sur (d') mesure 52°, et l'angle adjacent à ce dernier mesure 180 − 52 = **128°**."] },
            { t: "attention", md: "Deux angles alternes-internes ne sont égaux **que si** les droites sont parallèles. Si deux angles correspondants mesurent 110° et 115°, les droites ne sont **pas** parallèles : elles finiront par se couper." },
            { t: "verifie", q: "Deux droites sont coupées par une sécante. Deux angles correspondants mesurent 110° et 115°. Que peut-on conclure ?", choix: ["Les droites sont parallèles", "Les droites ne sont pas parallèles", "On ne peut rien dire"], bonne: 1, explication: "Si les droites étaient parallèles, les angles correspondants seraient égaux. Comme 110° ≠ 115°, elles ne sont pas parallèles." },
          ],
        },
      ],
      bilan: "Opposés par le sommet : toujours égaux. Alternes-internes et correspondants : égaux si et seulement si les droites sont parallèles, de quoi calculer et prouver.",
    },
    "5e-maths-10-triangles": {
      accroche: "Prends trois bâtonnets de 3 cm, 4 cm et 8 cm. Essaie de former un triangle avec : impossible, les deux petits n'arrivent pas à se rejoindre ! Avant de tracer un triangle, il faut donc vérifier qu'il peut exister.",
      objectifs: [
        "Décider si un triangle est constructible grâce à l'inégalité triangulaire",
        "Calculer un angle avec la somme des angles d'un triangle",
        "Construire un triangle, ses médiatrices, ses hauteurs et son cercle circonscrit",
      ],
      sections: [
        {
          titre: "Un triangle peut-il exister ?",
          blocs: [
            { t: "propriete", titre: "Inégalité triangulaire", md: "Dans un triangle, la longueur de chaque côté est **plus petite que la somme** des longueurs des deux autres côtés.\nEn pratique, on compare le **plus grand côté** à la somme des deux autres :\n• plus petit : le triangle est constructible ;\n• égal : les trois points sont **alignés** (triangle « aplati ») ;\n• plus grand : le triangle **n'existe pas**." },
            { t: "schema", titre: "3 cm, 4 cm et 8 cm : les arcs ne se croisent pas", legende: "On trace [AB] de 8 cm, un arc de rayon 3 cm autour de A et un arc de rayon 4 cm autour de B. Les arcs ne se rencontrent jamais.", svg: `<svg viewBox="0 0 400 240"><path class="trait-fin" d="M160 170 A120 120 0 0 0 40 50" fill="none"/><path class="trait-fin" d="M200 170 A160 160 0 0 1 360 10" fill="none"/><line class="trait" x1="40" y1="170" x2="360" y2="170"/><line x1="160" y1="170" x2="200" y2="170" stroke="var(--pigment)" stroke-width="5"/><circle cx="40" cy="170" r="3" fill="var(--encre)"/><circle cx="360" cy="170" r="3" fill="var(--encre)"/><text class="texte" x="40" y="190" text-anchor="middle">A</text><text class="texte" x="360" y="190" text-anchor="middle">B</text><text class="texte-petit" x="100" y="160" text-anchor="middle">3 cm</text><text class="texte-petit" x="280" y="160" text-anchor="middle">4 cm</text><text class="texte-pigment" x="180" y="198" text-anchor="middle">il manque 1 cm</text><text class="texte" x="200" y="228" text-anchor="middle">3 + 4 = 7 &lt; 8</text></svg>` },
            { t: "exemple", titre: "Trois cas", etapes: ["3 cm, 4 cm, 8 cm : 3 + 4 = 7 < 8, le triangle n'existe pas.", "4 cm, 5 cm, 6 cm : 4 + 5 = 9 > 6, le triangle est constructible.", "AB = 7 cm, BC = 2 cm, AC = 5 cm : 2 + 5 = 7, donc A, C et B sont alignés, C est sur le segment [AB]."] },
            { t: "verifie", q: "Lequel de ces triangles est constructible ?", choix: ["2 cm, 3 cm, 6 cm", "5 cm, 5 cm, 11 cm", "4 cm, 6 cm, 9 cm", "1 cm, 2 cm, 3 cm"], bonne: 2, explication: "4 + 6 = 10 > 9 : c'est possible. Pour 2, 3, 6 et 5, 5, 11, la somme des petits côtés est trop courte ; pour 1, 2, 3, elle est égale : les points sont alignés." },
          ],
        },
        {
          titre: "La somme des angles d'un triangle",
          blocs: [
            { t: "propriete", titre: "180°, toujours", md: "Dans **n'importe quel** triangle, la somme des mesures des trois angles vaut **180°**." },
            { t: "savais-tu", md: "Découpe un triangle en papier, déchire ses trois coins et colle-les côte à côte, pointes réunies : ils forment toujours un **angle plat**, c'est-à-dire 180° !" },
            { t: "tableau", titre: "Les triangles particuliers", entetes: ["Triangle", "Côtés", "Angles"], lignes: [["isocèle", "2 côtés égaux", "les 2 angles à la base sont égaux"], ["équilatéral", "3 côtés égaux", "3 angles de 60°"], ["rectangle", "le plus long s'appelle l'hypoténuse", "1 angle droit, les 2 autres sont complémentaires"]] },
            { t: "exemple", titre: "Calculer un angle manquant", etapes: ["Angles de 50° et 65° : le troisième mesure 180 − 50 − 65 = **65°**.", "ABC isocèle en A avec Â = 40° : les angles à la base mesurent (180 − 40) ÷ 2 = **70°** chacun.", "ABC rectangle en A avec B̂ = 37° : Ĉ = 90 − 37 = **53°**.", "Angles x, 2x et 3x : 6x = 180, donc x = **30°**."] },
            { t: "attention", md: "Un triangle ne peut **pas** avoir deux angles obtus : deux angles de plus de 90° dépasseraient déjà 180° à eux seuls. Il ne peut pas non plus avoir deux angles droits." },
            { t: "verifie", q: "ABC est isocèle en A et Â mesure 40°. Combien mesure chaque angle à la base ?", choix: ["40°", "70°", "140°", "50°"], bonne: 1, explication: "Il reste 180 − 40 = 140° pour les deux angles à la base, qui sont égaux : 140 ÷ 2 = 70°." },
          ],
        },
        {
          titre: "Construire un triangle",
          blocs: [
            { t: "etapes", titre: "Construire ABC avec AB = 5 cm, AC = 4 cm et BC = 3 cm", items: [{ titre: "Le premier côté", md: "À la règle, trace le segment [AB] de 5 cm." }, { titre: "Autour de A", md: "Ouvre ton **compas** de 4 cm, pointe en A, et trace un arc de cercle." }, { titre: "Autour de B", md: "Ouvre le compas de 3 cm, pointe en B, et trace un arc qui coupe le premier." }, { titre: "Le sommet C", md: "C est le point d'intersection des deux arcs. Trace [AC] et [BC]." }] },
            { t: "astuce", md: "Le **compas** sert à reporter une longueur et à tracer des arcs de cercle. Garde les arcs de construction : ils prouvent que tu as construit, et pas seulement dessiné." },
            { t: "savais-tu", md: "Le triangle 3 cm, 4 cm, 5 cm est **rectangle** ! Les arpenteurs de l'Égypte ancienne utilisaient une corde à 12 nœuds (3 + 4 + 5 = 12) pour tracer des angles droits sur le terrain." },
          ],
        },
        {
          titre: "Médiatrices, hauteurs et cercle circonscrit",
          blocs: [
            { t: "definition", terme: "Médiatrice d'un segment", md: "La droite **perpendiculaire** au segment qui passe par son **milieu**. Tout point de la médiatrice est à la même distance des deux extrémités du segment." },
            { t: "schema", titre: "Les trois médiatrices et le cercle circonscrit", legende: "Les médiatrices de [AB], [BC] et [AC] se coupent en O. Comme OA = OB = OC, le cercle de centre O passe par les trois sommets.", svg: `<svg viewBox="0 0 400 280"><circle class="trait-fin" cx="200" cy="155.3" r="109.5" fill="none"/><path class="aplat" d="M100 200 L300 200 L230 50 Z"/><path class="trait" d="M100 200 L300 200 L230 50 Z" fill="none"/><line class="pointille" x1="200" y1="35" x2="200" y2="270"/><line class="pointille" x1="89.4" y1="59.5" x2="248.1" y2="197"/><line class="pointille" x1="328.4" y1="95.4" x2="129.1" y2="188.4"/><path class="trait-fin" d="M200 192 L208 192 L208 200" fill="none"/><circle cx="200" cy="155.3" r="4" fill="var(--pigment)"/><text class="texte" x="92" y="214" text-anchor="end">A</text><text class="texte" x="308" y="214">B</text><text class="texte" x="236" y="44">C</text><text class="texte-pigment" x="196" y="140" text-anchor="end">O</text></svg>` },
            { t: "propriete", titre: "Le cercle circonscrit", md: "Les trois médiatrices d'un triangle se coupent en un même point : le **centre du cercle circonscrit**, le cercle qui passe par les trois sommets. Dans un triangle rectangle, ce centre est le **milieu de l'hypoténuse**." },
            { t: "definition", terme: "Hauteur", md: "La **hauteur** issue d'un sommet est la droite qui passe par ce sommet et qui est **perpendiculaire au côté opposé**. Les trois hauteurs d'un triangle se coupent en un point appelé l'**orthocentre**." },
            { t: "attention", md: "Ne confonds pas : la médiatrice passe par le **milieu** d'un côté, la hauteur passe par un **sommet**. Les deux sont perpendiculaires à un côté, mais ce ne sont pas les mêmes droites (sauf dans un triangle isocèle, pour la base)." },
          ],
        },
      ],
      bilan: "Le plus grand côté doit être plus petit que la somme des deux autres, les angles font toujours 180°, et les médiatrices se rejoignent au centre du cercle circonscrit.",
    },
    "5e-maths-11-symetrie-parallelogrammes": {
      accroche: "Retourne une carte à jouer, comme le roi de cœur : tête en bas, elle a exactement le même aspect ! Elle possède un centre de symétrie. Ce demi-tour invisible se cache aussi dans les lettres S, N, Z… et dans tous les parallélogrammes.",
      objectifs: [
        "Construire le symétrique d'un point ou d'une figure par une symétrie centrale",
        "Utiliser les propriétés de la symétrie centrale et reconnaître un centre de symétrie",
        "Connaître et utiliser les propriétés du parallélogramme, du rectangle, du losange et du carré",
      ],
      sections: [
        {
          titre: "Un demi-tour autour d'un point",
          blocs: [
            { t: "definition", terme: "Symétrique d'un point", md: "Le **symétrique** du point M par rapport au point O est le point M' tel que **O est le milieu du segment [MM']**. Le symétrique de O est O lui-même." },
            { t: "schema", titre: "Le triangle ABC et son symétrique par rapport à O", legende: "O est le milieu de [AA'], de [BB'] et de [CC'] : le triangle A'B'C' est obtenu par un demi-tour autour de O.", svg: `<svg viewBox="0 0 400 240"><line class="pointille" x1="90" y1="70" x2="310" y2="170"/><line class="pointille" x1="150" y1="50" x2="250" y2="190"/><line class="pointille" x1="130" y1="120" x2="270" y2="120"/><path class="aplat" d="M90 70 L150 50 L130 120 Z"/><path class="trait" d="M90 70 L150 50 L130 120 Z" fill="none"/><path class="aplat" d="M310 170 L250 190 L270 120 Z"/><path class="trait" d="M310 170 L250 190 L270 120 Z" fill="none"/><line class="trait-fin" x1="147.1" y1="90.5" x2="142.9" y2="99.5"/><line class="trait-fin" x1="257.1" y1="140.5" x2="252.9" y2="149.5"/><circle cx="200" cy="120" r="4" fill="var(--pigment)"/><text class="texte-pigment" x="206" y="112">O</text><text class="texte" x="82" y="66" text-anchor="end">A</text><text class="texte" x="150" y="42" text-anchor="middle">B</text><text class="texte" x="122" y="124" text-anchor="end">C</text><text class="texte" x="318" y="176">A'</text><text class="texte" x="250" y="208" text-anchor="middle">B'</text><text class="texte" x="278" y="124">C'</text></svg>` },
            { t: "etapes", titre: "Construire le symétrique A' de A par rapport à O", items: [{ titre: "La demi-droite", md: "À la règle, trace la demi-droite [AO) qui part de A et dépasse O." }, { titre: "Le compas", md: "Pointe le compas en O et prends l'écartement OA." }, { titre: "Le report", md: "Reporte cette longueur de l'autre côté de O, sur la demi-droite." }, { titre: "Le point A'", md: "Nomme A' le point obtenu : OA' = OA et O est le milieu de [AA']." }] },
            { t: "verifie", q: "Le symétrique de M par rapport à O est le point M' tel que :", choix: ["M est le milieu de [OM']", "O est le milieu de [MM']", "OM' = 2 × OM", "(MM') est perpendiculaire à O"], bonne: 1, explication: "Par définition, O est le milieu de [MM'] : M et M' sont à la même distance de O, de part et d'autre." },
          ],
        },
        {
          titre: "Ce que conserve la symétrie centrale",
          blocs: [
            { t: "propriete", titre: "Une transformation fidèle", md: "La symétrie centrale **conserve** les longueurs, les angles, les aires et l'alignement : la figure symétrique est superposable à la figure de départ.\nDe plus, le symétrique d'une droite est une droite **parallèle** à la droite de départ." },
            { t: "definition", terme: "Centre de symétrie", md: "Un point O est un **centre de symétrie** d'une figure si la figure se superpose à elle-même après un **demi-tour** autour de O." },
            { t: "tableau", titre: "Qui a un centre de symétrie ?", entetes: ["Figure", "Centre de symétrie ?"], lignes: [["les lettres S, N, Z, H, O, X", "oui"], ["les lettres A, E, T, V", "non (elles ont seulement un axe)"], ["un cercle", "oui : son centre"], ["un parallélogramme", "oui : le point d'intersection des diagonales"], ["un triangle, même équilatéral", "jamais"]] },
            { t: "attention", md: "Ne confonds pas **axe** et **centre** de symétrie. La lettre A a un axe vertical (pliage), mais retournée tête en bas, elle ne ressemble plus à un A : elle n'a pas de centre de symétrie." },
            { t: "verifie", q: "Quelle lettre majuscule possède un centre de symétrie ?", choix: ["A", "E", "N", "T"], bonne: 2, explication: "Après un demi-tour, N redevient N. A et T ont un axe de symétrie, E aussi, mais aucun des trois n'a de centre." },
          ],
        },
        {
          titre: "Le parallélogramme",
          blocs: [
            { t: "definition", terme: "Parallélogramme", md: "Un quadrilatère dont les **côtés opposés sont parallèles** deux à deux." },
            { t: "schema", titre: "Le parallélogramme ABCD et son centre O", legende: "Les angles marqués en couleur (A et C) sont égaux, les deux autres (B et D) aussi. Les diagonales se coupent en leur milieu O.", svg: `<svg viewBox="0 0 400 220"><path class="aplat" d="M80 180 L280 180 L340 60 L140 60 Z"/><path class="trait" d="M80 180 L280 180 L340 60 L140 60 Z" fill="none"/><line class="pointille" x1="80" y1="180" x2="340" y2="60"/><line class="pointille" x1="280" y1="180" x2="140" y2="60"/><path d="M102 180 A22 22 0 0 0 89.8 160.3" fill="none" stroke="var(--pigment)" stroke-width="3"/><path d="M318 60 A22 22 0 0 0 330.2 79.7" fill="none" stroke="var(--pigment)" stroke-width="3"/><path class="trait-fin" d="M258 180 A22 22 0 0 1 289.8 160.3" fill="none"/><path class="trait-fin" d="M162 60 A22 22 0 0 1 130.2 79.7" fill="none"/><circle cx="210" cy="120" r="4" fill="var(--pigment)"/><text class="texte-pigment" x="210" y="145" text-anchor="middle">O</text><text class="texte" x="72" y="196" text-anchor="end">A</text><text class="texte" x="288" y="196">B</text><text class="texte" x="348" y="56">C</text><text class="texte" x="132" y="56" text-anchor="end">D</text></svg>` },
            { t: "propriete", titre: "Propriétés du parallélogramme", md: "Dans un parallélogramme :\n• les **diagonales se coupent en leur milieu**, qui est le centre de symétrie ;\n• les **côtés opposés ont la même longueur** ;\n• les **angles opposés** sont égaux ;\n• deux **angles consécutifs** (voisins) sont **supplémentaires**.\nRéciproquement, un quadrilatère dont les diagonales se coupent en leur milieu est un parallélogramme." },
            { t: "exemple", titre: "Utiliser les propriétés", etapes: ["ABCD de centre O avec AC = 12 cm : AO = 12 ÷ 2 = **6 cm**.", "AB = 7 cm et BC = 4 cm : périmètre = 7 + 4 + 7 + 4 = **22 cm**.", "Â = 65° : l'angle opposé Ĉ mesure aussi **65°**.", "Un angle de 110° : son voisin mesure 180 − 110 = **70°**."] },
          ],
        },
        {
          titre: "Rectangle, losange et carré",
          blocs: [
            { t: "texte", md: "Le rectangle, le losange et le carré sont des **parallélogrammes particuliers** : ils ont toutes les propriétés du parallélogramme, plus quelques-unes en bonus." },
            { t: "tableau", titre: "Les parallélogrammes particuliers", entetes: ["Quadrilatère", "Définition", "Ses diagonales…"], lignes: [["rectangle", "4 angles droits", "se coupent en leur milieu et ont la **même longueur**"], ["losange", "4 côtés de même longueur", "se coupent en leur milieu et sont **perpendiculaires**"], ["carré", "4 côtés égaux et 4 angles droits", "même longueur **et** perpendiculaires"]] },
            { t: "propriete", titre: "Reconnaître par les diagonales", md: "Un parallélogramme dont les diagonales ont la **même longueur** est un **rectangle**. Un parallélogramme dont les diagonales sont **perpendiculaires** est un **losange**. Un losange dont les diagonales ont la même longueur est donc un **carré**." },
            { t: "verifie", q: "Un losange a ses deux diagonales de même longueur. C'est forcément :", choix: ["un rectangle seulement", "un carré", "un trapèze", "on ne peut pas savoir"], bonne: 1, explication: "Losange : diagonales perpendiculaires. Même longueur : c'est aussi un rectangle. À la fois losange et rectangle, c'est un carré." },
          ],
        },
      ],
      bilan: "La symétrie centrale est un demi-tour : O milieu de [MM']. Le parallélogramme en a un centre, au croisement de ses diagonales, qui se coupent en leur milieu.",
    },
    "5e-maths-12-grandeurs-solides-algorithmique": {
      accroche: "Une boîte de conserve, c'est un cylindre. Combien de soupe contient-elle ? Quelle surface de métal faut-il pour la fabriquer ? Avec quelques formules, tu peux le calculer avant même de l'ouvrir. Et avec Scratch, tu peux même faire calculer l'ordinateur à ta place.",
      objectifs: [
        "Calculer le périmètre d'un cercle et l'aire d'un disque, d'un parallélogramme ou d'un triangle",
        "Calculer le volume d'un prisme droit ou d'un cylindre et convertir des unités d'aire et de volume",
        "Lire et compléter un programme Scratch avec variables, boucles et conditions",
      ],
      sections: [
        {
          titre: "Le cercle et le disque",
          blocs: [
            { t: "definition", terme: "Rayon et diamètre", md: "Le **rayon** r est la distance du centre à un point du cercle. Le **diamètre** vaut deux rayons : d = 2 × r. Le **cercle** est la ligne ; le **disque** est la surface qu'elle entoure." },
            { t: "propriete", titre: "Deux formules avec π", md: "**Périmètre du cercle = 2 × π × r** (ou π × d).\n**Aire du disque = π × r × r.**\nLe nombre **π** (« pi ») ne s'écrit pas exactement en décimal : on prend souvent **π ≈ 3,14**." },
            { t: "exemple", titre: "Rayon 5 cm, puis rayon 3 cm", etapes: ["Périmètre d'un cercle de rayon 5 cm : 2 × 3,14 × 5 = 31,4 cm.", "Aire d'un disque de rayon 3 cm : 3,14 × 3 × 3 = 3,14 × 9 = 28,26 cm²."] },
            { t: "attention", md: "Dans l'aire, c'est **r × r**, pas r × 2 ! Pour r = 3 : r × r = 9, alors que r × 2 = 6. Et n'oublie pas l'unité : un périmètre en cm, une aire en **cm²**." },
          ],
        },
        {
          titre: "Aires du parallélogramme et du triangle",
          blocs: [
            { t: "schema", titre: "D'où viennent les formules", legende: "À gauche, on découpe un triangle et on le déplace : le parallélogramme devient un rectangle de même base et même hauteur. À droite, un triangle est la moitié d'un parallélogramme.", svg: `<svg viewBox="0 0 400 200"><path class="aplat" d="M70 170 L190 170 L230 70 L70 70 Z"/><path class="aplat-fort" d="M30 170 L70 170 L70 70 Z"/><path class="trait" d="M30 170 L190 170 L230 70 L70 70 Z" fill="none"/><line class="pointille" x1="70" y1="70" x2="70" y2="170"/><path class="pointille" d="M190 170 L230 170 L230 70" fill="none"/><path class="trait-fin" d="M70 162 L78 162 L78 170" fill="none"/><path d="M50 64 Q140 30 222 64" fill="none" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><text class="texte-main" x="80" y="125">h</text><text class="texte-petit" x="110" y="188" text-anchor="middle">base</text><text class="texte" x="130" y="24" text-anchor="middle">base × hauteur</text><path class="aplat" d="M250 170 L380 170 L300 70 Z"/><path class="trait" d="M250 170 L380 170 L300 70 Z" fill="none"/><line class="pointille" x1="300" y1="70" x2="300" y2="170"/><path class="trait-fin" d="M300 162 L308 162 L308 170" fill="none"/><text class="texte-main" x="310" y="135">h</text><text class="texte-petit" x="315" y="188" text-anchor="middle">base</text><text class="texte" x="315" y="50" text-anchor="middle">base × hauteur ÷ 2</text></svg>` },
            { t: "propriete", titre: "Les formules", md: "**Aire du parallélogramme = base × hauteur.**\n**Aire du triangle = base × hauteur ÷ 2.**\nLa **hauteur** est toujours **perpendiculaire** à la base : ce n'est pas la longueur du côté penché." },
            { t: "exemple", titre: "Deux calculs", etapes: ["Parallélogramme de base 8 cm et de hauteur 5 cm : 8 × 5 = 40 cm².", "Triangle de base 6 cm et de hauteur 4 cm : 6 × 4 ÷ 2 = 24 ÷ 2 = 12 cm²."] },
          ],
        },
        {
          titre: "Volumes des prismes et des cylindres",
          blocs: [
            { t: "definition", terme: "Prisme droit et cylindre", md: "Un **prisme droit** a deux **bases** polygonales identiques et parallèles, reliées par des faces rectangulaires. Un **cylindre** a deux bases en forme de **disque**. La **hauteur** est la distance entre les deux bases." },
            { t: "schema", titre: "Un prisme droit à base triangulaire et un cylindre", legende: "Les arêtes cachées sont en pointillés. Pour les deux solides : volume = aire de la base × hauteur.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M40 190 L150 190 L80 120 Z"/><path class="trait" d="M40 190 L150 190 L80 120 Z M80 120 L120 80 L190 150 L150 190" fill="none"/><path class="pointille" d="M40 190 L80 150 L190 150 M80 150 L120 80" fill="none"/><text class="texte-petit" x="90" y="180" text-anchor="middle">base</text><text class="texte-main" x="178" y="182">h</text><ellipse class="aplat" cx="300" cy="70" rx="50" ry="14"/><ellipse class="trait" cx="300" cy="70" rx="50" ry="14" fill="none"/><line class="trait" x1="250" y1="70" x2="250" y2="190"/><line class="trait" x1="350" y1="70" x2="350" y2="190"/><path class="trait" d="M250 190 A50 14 0 0 0 350 190" fill="none"/><path class="pointille" d="M250 190 A50 14 0 0 1 350 190" fill="none"/><line class="trait-fin" x1="300" y1="70" x2="350" y2="70"/><circle cx="300" cy="70" r="2.5" fill="var(--encre)"/><text class="texte-main" x="325" y="64" text-anchor="middle">r</text><line class="trait-fin" x1="368" y1="130" x2="368" y2="74" marker-end="url(#fl)"/><line class="trait-fin" x1="368" y1="130" x2="368" y2="186" marker-end="url(#fl)"/><text class="texte-main" x="376" y="135">h</text><text class="texte" x="115" y="228" text-anchor="middle">prisme droit</text><text class="texte" x="300" y="228" text-anchor="middle">cylindre</text></svg>` },
            { t: "propriete", titre: "Volume d'un prisme droit ou d'un cylindre", md: "**V = aire de la base × hauteur.**\nPour le cylindre, la base est un disque : **V = π × r × r × h**." },
            { t: "exemple", titre: "Deux volumes", etapes: ["Prisme de base triangulaire d'aire 12 cm² et de hauteur 7 cm : V = 12 × 7 = 84 cm³.", "Cylindre de rayon 2 cm et de hauteur 10 cm : aire de la base ≈ 3,14 × 2 × 2 = 12,56 cm².", "Volume du cylindre ≈ 12,56 × 10 = 125,6 cm³."] },
            { t: "verifie", q: "Un prisme droit a une base d'aire 12 cm² et une hauteur de 7 cm. Quel est son volume ?", choix: ["19 cm³", "42 cm³", "84 cm³", "84 cm²"], bonne: 2, explication: "V = aire de la base × hauteur = 12 × 7 = 84. Un volume s'exprime en cm³, pas en cm²." },
          ],
        },
        {
          titre: "Convertir les aires et les volumes",
          blocs: [
            { t: "texte", md: "Un carré de 1 m de côté contient 10 × 10 = **100** carrés de 1 dm de côté : 1 m² = 100 dm². Un cube de 1 m de côté contient 10 × 10 × 10 = **1 000** cubes de 1 dm : 1 m³ = 1 000 dm³." },
            { t: "tableau", titre: "Les conversions essentielles", entetes: ["Conversion", "On multiplie par", "Exemple"], lignes: [["m² → dm²", "100", "1 m² = 100 dm²"], ["m² → cm²", "10 000", "0,35 m² = 3 500 cm²"], ["m³ → dm³", "1 000", "2,5 m³ = 2 500 dm³"], ["m³ → cm³", "1 000 000", "1 m³ = 1 000 000 cm³"], ["dm³ → L", "1", "1 dm³ = 1 L"]] },
            { t: "attention", md: "Pour les longueurs, on passe d'une unité à la suivante en multipliant par 10 ; pour les **aires**, par **100** ; pour les **volumes**, par **1 000**. Ainsi 3 500 cm² = 0,35 m² (et non 35 m²)." },
            { t: "verifie", q: "Combien de litres font 2,5 m³ ?", choix: ["25 L", "250 L", "2 500 L", "2,5 L"], bonne: 2, explication: "2,5 m³ = 2,5 × 1 000 dm³ = 2 500 dm³, et 1 dm³ = 1 L : cela fait 2 500 L." },
          ],
        },
        {
          titre: "Programmer avec Scratch",
          blocs: [
            { t: "definition", terme: "Variable, boucle et condition", md: "Une **variable** est une case mémoire qui porte un nom et stocke un nombre. La boucle « **répéter n fois** » recommence les blocs qu'elle contient. Le bloc « **si… alors… sinon** » choisit quoi faire selon qu'une condition est vraie ou fausse." },
            { t: "etapes", titre: "Script : « mettre score à 0 ; répéter 5 fois : ajouter 2 à score »", items: [{ titre: "Départ", md: "score = 0" }, { titre: "Tours 1 et 2", md: "score = 2, puis 4" }, { titre: "Tours 3 et 4", md: "score = 6, puis 8" }, { titre: "Tour 5", md: "score = **10** : la boucle s'arrête." }] },
            { t: "exemple", titre: "Doubler 4 fois", md: "« mettre n à 3 ; répéter 4 fois : mettre n à n × 2 ». On suit n tour après tour : 3 → 6 → 12 → 24 → **48**." },
            { t: "exemple", titre: "Une condition à la fin", etapes: ["« mettre x à 4 ; répéter 3 fois : ajouter 1 à x » : x vaut 5, 6, puis 7.", "« si x > 6 alors dire grand sinon dire petit » : 7 > 6 est vrai.", "Le lutin dit « **grand** »."] },
            { t: "astuce", md: "Pour comprendre un script, joue l'ordinateur : fais un petit tableau avec la valeur de chaque variable après chaque tour de boucle. Un bloc « si … alors » n'agit **que si** la condition est vraie." },
          ],
        },
      ],
      bilan: "Périmètre 2 × π × r, aire π × r × r, volume = aire de la base × hauteur ; ×100 pour les aires, ×1 000 pour les volumes ; et en Scratch, on suit les variables tour après tour.",
    },
  },
};
