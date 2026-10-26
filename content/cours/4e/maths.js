// Cours ÉCLORE — 4e Mathématiques. Schéma : docs/COURS.md
export default {
  id: "4e-maths",
  chapitres: {
    "4e-maths-01-nombres-relatifs": {
      accroche: "Un plongeur descend de 4 mètres par minute. Où était-il il y a 3 minutes ? Pour répondre en un seul calcul, (−4) × (−3), il faut savoir multiplier deux nombres négatifs. Et le résultat va te surprendre : il est positif !",
      objectifs: [
        "Multiplier et diviser des nombres relatifs avec la règle des signes",
        "Trouver le signe d'un produit de plusieurs facteurs",
        "Enchaîner des calculs avec des relatifs en respectant les priorités",
        "Calculer le carré ou le cube d'un relatif sans se tromper d'écriture",
      ],
      sections: [
        {
          titre: "Multiplier deux relatifs : la règle des signes",
          blocs: [
            { t: "texte", md: "Tu sais déjà additionner et soustraire des relatifs. Pour les multiplier, c'est plus simple encore : on s'occupe **séparément** du nombre et du signe.\n\nPourquoi (−4) × (−3) est-il positif ? Regarde la suite : (−4) × 2 = −8, (−4) × 1 = −4, (−4) × 0 = 0. Chaque fois que le second facteur baisse de 1, le résultat **monte** de 4. On continue logiquement : (−4) × (−1) = 4, puis (−4) × (−3) = 12. Le plongeur était donc 12 m **plus haut**." },
            { t: "propriete", titre: "Règle des signes", md: "Pour multiplier deux relatifs, on multiplie leurs **distances à zéro**, puis on choisit le signe :\n• deux facteurs de **même signe** → produit **positif** ;\n• deux facteurs de **signes contraires** → produit **négatif**.\n\n(−4) × (−5) = 20 et (−4) × 5 = −20." },
            { t: "tableau", titre: "Le tableau des signes", entetes: ["×", "facteur positif", "facteur négatif"], lignes: [["**facteur positif**", "+ (ex. 3 × 2 = 6)", "− (ex. 3 × (−2) = −6)"], ["**facteur négatif**", "− (ex. (−3) × 2 = −6)", "+ (ex. (−3) × (−2) = 6)"]] },
            { t: "verifie", q: "Combien vaut (−6) × (−3) ?", choix: ["−18", "18", "−9", "9"], bonne: 1, explication: "6 × 3 = 18, et les deux facteurs sont négatifs : même signe, donc produit positif. (−6) × (−3) = 18." },
          ],
        },
        {
          titre: "Diviser et multiplier plusieurs facteurs",
          blocs: [
            { t: "propriete", titre: "Quotient de deux relatifs", md: "La division suit **exactement la même règle** : même signe → quotient positif, signes contraires → quotient négatif.\n(−24) ÷ 6 = −4 et (−24) ÷ (−6) = 4." },
            { t: "propriete", titre: "Produit de plusieurs facteurs", md: "On **compte les facteurs négatifs** :\n• nombre **pair** de facteurs négatifs → résultat **positif** ;\n• nombre **impair** → résultat **négatif**." },
            { t: "exemple", titre: "Calculer (−2) × (−3) × (−4)", etapes: ["On compte les facteurs négatifs : il y en a 3, un nombre impair. Le résultat sera négatif.", "On multiplie les distances à zéro : 2 × 3 × 4 = 24.", "Donc (−2) × (−3) × (−4) = −24."] },
            { t: "exemple", titre: "Et (−1) × (−2) × (−3) × 4 ?", md: "Trois facteurs négatifs (le 4 est positif, il ne compte pas) : impair, donc négatif. 1 × 2 × 3 × 4 = 24, d'où **−24**. De même, (−1) multiplié 5 fois par lui-même donne **−1** : 5 est impair." },
            { t: "astuce", md: "Les signes « − » vont par paires : deux « moins » s'annulent. Tu peux les barrer deux par deux ; s'il en reste un, le résultat est négatif." },
          ],
        },
        {
          titre: "Enchaîner les calculs : les priorités ne changent pas",
          blocs: [
            { t: "texte", md: "Avec des relatifs, l'ordre des opérations reste celui que tu connais. On ajoute simplement les **puissances** (carrés, cubes) juste après les parenthèses." },
            { t: "etapes", titre: "L'ordre des calculs", items: [{ titre: "Parenthèses", md: "On calcule d'abord ce qui est entre parenthèses." }, { titre: "Puissances", md: "Puis les carrés et les cubes." }, { titre: "× et ÷", md: "Puis les multiplications et divisions, de gauche à droite." }, { titre: "+ et −", md: "Enfin les additions et soustractions, de gauche à droite." }] },
            { t: "exemple", titre: "Calculer 12 − (−3) × (−4) + (−6) ÷ 2", etapes: ["Les produits et quotients d'abord : (−3) × (−4) = 12 et (−6) ÷ 2 = −3.", "On remplace : 12 − 12 + (−3).", "De gauche à droite : 12 − 12 = 0, puis 0 + (−3) = −3.", "Résultat : −3."] },
            { t: "exemple", titre: "Deux calculs rapides", md: "• 5 − 2 × (−4) = 5 − (−8) = 5 + 8 = **13**.\n• −3 + 4 × (−2) = −3 + (−8) = **−11**.\n• (−8 + 3) × (−2) = (−5) × (−2) = **10** : la parenthèse d'abord !" },
            { t: "verifie", q: "Combien vaut −3 + 4 × (−2) ?", choix: ["−2", "2", "−11", "−14"], bonne: 2, explication: "La multiplication passe avant l'addition : 4 × (−2) = −8, puis −3 + (−8) = −11. Le piège « −2 » vient d'un calcul de gauche à droite." },
          ],
        },
        {
          titre: "Carrés et cubes de relatifs",
          blocs: [
            { t: "definition", terme: "Carré et cube", md: "Le **carré** de a, noté a², est a × a. Le **cube** de a, noté a³, est a × a × a.\n(−3)² = (−3) × (−3) = 9 et (−2)³ = (−2) × (−2) × (−2) = −8." },
            { t: "propriete", titre: "Le signe d'un carré", md: "Un carré contient **deux** facteurs de même signe : il est **toujours positif ou nul**. Un cube garde le signe du nombre : le cube d'un négatif est négatif." },
            { t: "attention", md: "**−3² n'est pas (−3)² !**\n• (−3)² : la parenthèse dit qu'on élève −3 au carré : (−3) × (−3) = **9**.\n• −3² : le carré passe avant le signe « − ». On calcule 3² = 9, puis on prend l'opposé : **−9**.\nLa calculatrice fait la même différence : tape bien les parenthèses." },
            { t: "texte", md: "Puisqu'un carré est positif, une question comme « quel nombre a pour carré 49 ? » a **deux réponses** : 7 et −7, car 7² = 49 et (−7)² = 49. Sur la droite graduée, ces deux nombres sont opposés, à égale distance de zéro." },
            { t: "droite", titre: "Deux nombres ont pour carré 49", min: -8, max: 8, pas: 1, points: [{ x: -7, label: "−7" }, { x: 0, label: "0" }, { x: 7, label: "7" }] },
            { t: "verifie", q: "Que vaut −3² (sans parenthèses) ?", choix: ["9", "−9", "−6", "6"], bonne: 1, explication: "Sans parenthèses, le carré s'applique seulement à 3 : 3² = 9, puis on prend l'opposé. −3² = −9, alors que (−3)² = 9." },
          ],
        },
      ],
      bilan: "Même signe, résultat positif ; signes contraires, résultat négatif. Compte les « − » deux par deux, garde tes priorités, et méfie-toi de −3² qui vaut −9.",
    },
    "4e-maths-02-fractions": {
      accroche: "Une recette demande 3/4 de litre de lait, mais tu ne fais que les 2/3 de la recette. Combien de lait verser ? Pour le savoir, il faut multiplier deux fractions. Bonne nouvelle : c'est l'opération la plus facile avec les fractions !",
      objectifs: [
        "Additionner et soustraire des fractions de dénominateurs quelconques",
        "Multiplier des fractions et simplifier avant de calculer",
        "Diviser par une fraction en utilisant son inverse",
        "Résoudre des problèmes avec des fractions",
      ],
      sections: [
        {
          titre: "Additionner et soustraire : le même dénominateur d'abord",
          blocs: [
            { t: "texte", md: "On ne peut additionner que des parts **de même taille**. Des tiers et des cinquièmes ne s'ajoutent pas directement, tout comme on n'additionne pas des euros et des dollars sans les convertir. On transforme donc les deux fractions pour qu'elles aient le **même dénominateur**." },
            { t: "propriete", titre: "Somme et différence", md: "Pour additionner ou soustraire deux fractions, on les écrit avec un **dénominateur commun**, puis on additionne (ou soustrait) les numérateurs et on garde le dénominateur.\n2/3 + 1/5 = 10/15 + 3/15 = **13/15**." },
            { t: "exemple", titre: "Calculer 5/6 − 1/4", etapes: ["On cherche un multiple commun à 6 et 4 : 12 (plus petit que 24, donc plus pratique).", "5/6 = (5 × 2)/(6 × 2) = 10/12 et 1/4 = (1 × 3)/(4 × 3) = 3/12.", "10/12 − 3/12 = 7/12.", "7 et 12 n'ont pas de diviseur commun : 7/12 est irréductible."] },
            { t: "attention", md: "On n'additionne **jamais** les dénominateurs : 1/2 + 1/4 n'est pas 2/6 ! La moitié plus un quart, c'est 2/4 + 1/4 = **3/4**, soit 0,75." },
          ],
        },
        {
          titre: "Multiplier : tout droit, en haut et en bas",
          blocs: [
            { t: "propriete", titre: "Produit de fractions", md: "On multiplie les numérateurs entre eux et les dénominateurs entre eux : (a/b) × (c/d) = (a × c)/(b × d).\n2/3 × 5/7 = 10/21. ==Pas besoin de même dénominateur !==" },
            { t: "schema", titre: "Les 2/3 de 3/4", legende: "On colorie 3 colonnes sur 4 (les 3/4), puis 2 lignes sur 3 de cette partie. La zone foncée fait 6 cases sur 12 : 2/3 × 3/4 = 6/12 = 1/2.", svg: `<svg viewBox="0 0 400 200"><rect class="aplat" x="80" y="30" width="180" height="120"/><rect class="aplat-fort" x="80" y="30" width="180" height="80" opacity="0.7"/><rect class="trait" x="80" y="30" width="240" height="120" fill="none"/><line class="trait-fin" x1="140" y1="30" x2="140" y2="150"/><line class="trait-fin" x1="200" y1="30" x2="200" y2="150"/><line class="trait-fin" x1="260" y1="30" x2="260" y2="150"/><line class="trait-fin" x1="80" y1="70" x2="320" y2="70"/><line class="trait-fin" x1="80" y1="110" x2="320" y2="110"/><text class="texte-petit" x="170" y="20" text-anchor="middle">3/4 de la largeur</text><text class="texte-petit" x="70" y="74" text-anchor="end">2/3 de</text><text class="texte-petit" x="70" y="88" text-anchor="end">la hauteur</text><text class="texte-main" x="200" y="180" text-anchor="middle">6 cases sur 12 = 1/2</text></svg>` },
            { t: "exemple", titre: "Simplifier avant de multiplier : 4/9 × 3/8", etapes: ["On écrit le produit sans le calculer : (4 × 3)/(9 × 8).", "On repère les facteurs communs : 4 est dans 8 (8 = 4 × 2) et 3 est dans 9 (9 = 3 × 3).", "On simplifie : (4 × 3)/(3 × 3 × 4 × 2) = 1/(3 × 2).", "Résultat : 1/6. Sans simplifier, on aurait obtenu 12/72, qu'il faut ensuite réduire."] },
            { t: "texte", md: "Prendre « les 2/3 de » une quantité, c'est la **multiplier** par 2/3. Pour la recette : 2/3 × 3/4 = 6/12 = **1/2 litre** de lait." },
          ],
        },
        {
          titre: "Diviser : multiplier par l'inverse",
          blocs: [
            { t: "definition", terme: "Inverse", md: "L'inverse d'un nombre non nul est le nombre par lequel il faut le multiplier pour obtenir **1**. L'inverse de a/b est **b/a** : on retourne la fraction. L'inverse de 3/5 est 5/3, l'inverse de 4 (= 4/1) est 1/4." },
            { t: "propriete", titre: "Quotient de fractions", md: "==Diviser par une fraction, c'est multiplier par son inverse.==\n3/4 ÷ 2/5 = 3/4 × 5/2 = **15/8**." },
            { t: "exemple", titre: "Deux divisions", md: "• 5 ÷ 2/3 = 5 × 3/2 = **15/2** : dans 5 pizzas, il y a 7,5 parts de 2/3 de pizza.\n• 3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = **1/4** : partager trois quarts en 3, c'est un quart chacun." },
            { t: "attention", md: "On retourne **seulement la fraction qui divise** (la deuxième), jamais la première. Et on n'oublie pas de changer ÷ en × !" },
            { t: "verifie", q: "Combien vaut 3/4 ÷ 2/5 ?", choix: ["6/20", "15/8", "8/15", "3/10"], bonne: 1, explication: "On multiplie par l'inverse de 2/5, qui est 5/2 : 3/4 × 5/2 = 15/8. La réponse 6/20 vient d'une multiplication par 2/5 au lieu d'une division." },
          ],
        },
        {
          titre: "Enchaîner et résoudre des problèmes",
          blocs: [
            { t: "tableau", titre: "Quelle méthode pour quelle opération ?", entetes: ["Opération", "Même dénominateur ?", "Méthode", "Exemple"], lignes: [["Addition", "oui", "on ajoute les numérateurs", "1/2 + 1/4 = 3/4"], ["Soustraction", "oui", "on soustrait les numérateurs", "5/6 − 1/4 = 7/12"], ["Multiplication", "non", "haut × haut, bas × bas", "2/3 × 5/7 = 10/21"], ["Division", "non", "× l'inverse", "3/4 ÷ 2/5 = 15/8"]] },
            { t: "exemple", titre: "Calculer 7/10 − 1/2 × 4/5", etapes: ["Priorité à la multiplication : 1/2 × 4/5 = 4/10.", "Puis la soustraction, même dénominateur : 7/10 − 4/10 = 3/10.", "En écriture décimale : 0,3."] },
            { t: "exemple", titre: "Une classe de 30 élèves", md: "Les 2/5 font de l'anglais renforcé et la moitié des **autres** font du latin. 2/5 × 30 = 12 élèves en anglais renforcé. Il en reste 30 − 12 = 18. La moitié : 18 ÷ 2 = **9 élèves** font du latin." },
            { t: "verifie", q: "On boit les 2/3 d'une bouteille de 3/4 de litre. Quelle quantité a-t-on bue ?", choix: ["0,5 L", "1,4 L", "0,75 L"], bonne: 0, explication: "« Les 2/3 de » se traduit par une multiplication : 2/3 × 3/4 = 6/12 = 1/2 L, soit 0,5 L." },
          ],
        },
      ],
      bilan: "Pour + et −, même dénominateur ; pour ×, tout droit en haut et en bas ; pour ÷, on retourne la deuxième fraction et on multiplie.",
    },
    "4e-maths-03-puissances": {
      accroche: "Une goutte d'eau contient environ 1 670 000 000 000 000 000 000 molécules. Un virus mesure 0,000 000 12 m. Écrire ces nombres est une torture… sauf avec les puissances de 10 : 1,67 × 10²¹ et 1,2 × 10⁻⁷. Deux écritures courtes pour l'infiniment grand et l'infiniment petit.",
      objectifs: [
        "Calculer une puissance d'exposant positif, nul ou négatif",
        "Utiliser les règles de calcul sur les puissances",
        "Passer d'une écriture décimale à l'écriture scientifique",
        "Associer les préfixes d'unités (kilo, méga, nano…) aux puissances de 10",
      ],
      sections: [
        {
          titre: "Une puissance, c'est une multiplication répétée",
          blocs: [
            { t: "definition", terme: "Puissance", md: "Pour un nombre a et un entier n ≥ 1, **aⁿ** (« a exposant n ») est le produit de **n facteurs** égaux à a : aⁿ = a × a × … × a.\n2³ = 2 × 2 × 2 = 8 ; 5² = 25 ; 10⁴ = 10 000." },
            { t: "attention", md: "2³ n'est **pas** 2 × 3 = 6 ! L'exposant compte les facteurs, il ne multiplie pas. Et attention aux signes : (−2)⁴ = 16 (quatre facteurs négatifs, nombre pair), alors que −2⁴ = −16." },
            { t: "definition", terme: "Exposant nul ou négatif", md: "Pour tout a non nul : **a⁰ = 1** (7⁰ = 1) et **a⁻ⁿ = 1/aⁿ**, l'inverse de aⁿ.\n2⁻³ = 1/2³ = 1/8." },
            { t: "texte", md: "Pourquoi a⁰ = 1 ? Regarde : 2³ = 8, 2² = 4, 2¹ = 2. Chaque fois que l'exposant baisse de 1, on **divise par 2**. On continue : 2⁰ = 1, puis 2⁻¹ = 1/2, 2⁻² = 1/4. Tout s'enchaîne logiquement." },
            { t: "verifie", q: "Que vaut 7⁰ ?", choix: ["0", "7", "1", "70"], bonne: 2, explication: "Tout nombre non nul élevé à la puissance 0 vaut 1. 7⁰ = 1." },
          ],
        },
        {
          titre: "Les puissances de 10",
          blocs: [
            { t: "propriete", titre: "Écrire une puissance de 10", md: "• 10ⁿ s'écrit **1 suivi de n zéros** : 10⁵ = 100 000.\n• 10⁻ⁿ s'écrit avec le **1 à la n-ième décimale** : 10⁻² = 0,01 et 10⁻³ = 0,001." },
            { t: "tableau", titre: "De 10⁻³ à 10⁶", entetes: ["Puissance", "Écriture décimale", "En mots"], lignes: [["10⁶", "1 000 000", "un million"], ["10³", "1 000", "mille"], ["10²", "100", "cent"], ["10¹", "10", "dix"], ["10⁰", "1", "un"], ["10⁻¹", "0,1", "un dixième"], ["10⁻²", "0,01", "un centième"], ["10⁻³", "0,001", "un millième"]] },
            { t: "propriete", titre: "Règles de calcul (m et n entiers)", md: "• **Produit** : aᵐ × aⁿ = aᵐ⁺ⁿ, on additionne les exposants : 2⁵ × 2³ = 2⁸.\n• **Quotient** : aᵐ ÷ aⁿ = aᵐ⁻ⁿ : 10⁷ ÷ 10³ = 10⁴.\n• **Puissance de puissance** : (aᵐ)ⁿ = aᵐˣⁿ : (10³)² = 10⁶." },
            { t: "exemple", titre: "Calculer 10⁻² × 10⁵", md: "Même base 10 : on additionne les exposants. −2 + 5 = 3, donc 10⁻² × 10⁵ = **10³** = 1 000. Vérifie : 0,01 × 100 000 = 1 000." },
            { t: "attention", md: "Ces règles ne marchent qu'avec la **même base**. 2³ × 5² ne se simplifie pas en une seule puissance. Et 2⁵ × 2³ n'est pas 2¹⁵ : on additionne, on ne multiplie pas les exposants." },
          ],
        },
        {
          titre: "L'écriture scientifique",
          blocs: [
            { t: "definition", terme: "Écriture scientifique", md: "Un nombre positif est en écriture scientifique quand il s'écrit **a × 10ⁿ**, avec **1 ≤ a < 10** (un seul chiffre non nul avant la virgule) et n entier.\n45 000 = 4,5 × 10⁴ ; 0,0032 = 3,2 × 10⁻³." },
            { t: "etapes", titre: "Écrire 0,00047 en écriture scientifique", items: [{ titre: "Trouver a", md: "On place la virgule après le premier chiffre non nul : a = 4,7." }, { titre: "Compter les rangs", md: "La virgule passe de 0,00047 à 4,7 : elle se déplace de 4 rangs vers la droite." }, { titre: "Choisir le signe", md: "Le nombre de départ est plus petit que 1 : l'exposant est négatif, n = −4." }, { titre: "Conclure", md: "0,00047 = 4,7 × 10⁻⁴." }] },
            { t: "exemple", titre: "Calculer (3 × 10⁴) × (2 × 10⁵)", etapes: ["On regroupe les nombres et les puissances : (3 × 2) × (10⁴ × 10⁵).", "3 × 2 = 6 et 10⁴ × 10⁵ = 10⁹.", "Résultat : 6 × 10⁹, déjà en écriture scientifique."] },
            { t: "astuce", md: "Grand nombre (≥ 10) → exposant **positif**. Petit nombre (< 1) → exposant **négatif**. Pour revenir en décimal, déplace la virgule d'autant de rangs : 3,2 × 10⁻³ = 0,0032." },
            { t: "verifie", q: "Quelle est l'écriture scientifique de 45 000 ?", choix: ["45 × 10³", "4,5 × 10⁴", "0,45 × 10⁵", "4,5 × 10³"], bonne: 1, explication: "Il faut un seul chiffre avant la virgule : 4,5. Pour passer de 4,5 à 45 000, on multiplie par 10 000 = 10⁴. Les écritures 45 × 10³ et 0,45 × 10⁵ sont justes, mais pas scientifiques." },
          ],
        },
        {
          titre: "Les préfixes : des puissances de 10 cachées",
          blocs: [
            { t: "tableau", titre: "Préfixes d'unités", entetes: ["Préfixe", "Symbole", "Puissance", "Exemple"], lignes: [["giga", "G", "10⁹", "1 Go = 10⁹ octets"], ["méga", "M", "10⁶", "1 MW = 10⁶ W"], ["kilo", "k", "10³", "1 km = 10³ m"], ["milli", "m", "10⁻³", "1 mm = 10⁻³ m"], ["micro", "µ", "10⁻⁶", "1 µm = 10⁻⁶ m"], ["nano", "n", "10⁻⁹", "1 nm = 10⁻⁹ m"]] },
            { t: "exemple", titre: "Un virus de 120 nm, en mètres", etapes: ["1 nm = 10⁻⁹ m, donc 120 nm = 120 × 10⁻⁹ m.", "120 = 1,2 × 10².", "120 × 10⁻⁹ = 1,2 × 10² × 10⁻⁹ = 1,2 × 10⁻⁷ m."] },
            { t: "exemple", titre: "La distance Terre–Soleil", md: "Environ 150 millions de km = 150 × 10⁶ km = 1,5 × 10⁸ km. Comme 1 km = 10³ m : 1,5 × 10⁸ × 10³ = **1,5 × 10¹¹ m**." },
            { t: "savais-tu", md: "Les préfixes viennent du grec : *kilo* signifie « mille », *méga* « grand », *giga* « géant », *nano* « nain ». Un nanomètre est environ 100 000 fois plus fin qu'un cheveu !" },
          ],
        },
      ],
      bilan: "aⁿ compte n facteurs, a⁰ = 1, a⁻ⁿ = 1/aⁿ ; on additionne les exposants pour multiplier, et l'écriture scientifique a × 10ⁿ range l'univers, des virus aux étoiles.",
    },
    "4e-maths-04-calcul-litteral": {
      accroche: "Pense à un nombre, ajoute 3, multiplie par ton nombre de départ, puis enlève son carré. Quel que soit ton choix, tu tombes sur le triple de ton nombre ! Le calcul littéral permet de prouver ce genre de « tour de magie » pour tous les nombres à la fois.",
      objectifs: [
        "Développer et réduire avec la simple et la double distributivité",
        "Factoriser une expression grâce à un facteur commun",
        "Tester une égalité et substituer une valeur dans une formule",
      ],
      sections: [
        {
          titre: "Des lettres pour dire « n'importe quel nombre »",
          blocs: [
            { t: "texte", md: "Une lettre comme x représente un nombre qu'on ne connaît pas encore, ou **n'importe quel** nombre. On convient d'alléger l'écriture : 3 × x s'écrit 3x, x × x s'écrit x², et 1x s'écrit x." },
            { t: "definition", terme: "Réduire", md: "Réduire une expression, c'est **regrouper les termes de même nature** : les x avec les x, les x² avec les x², les nombres avec les nombres.\n2x + 3x = 5x ; 4a − 7a = −3a ; mais 2x + 3x² **ne se réduit pas**." },
            { t: "attention", md: "2x + 3x = 5x, et non 5x² ! Tu ajoutes 2 « paquets de x » et 3 « paquets de x » : 5 paquets de x. Le carré n'apparaît que si on **multiplie** x par x : 2x × 3x = 6x²." },
            { t: "exemple", titre: "Substituer une valeur", md: "Pour x = 4, calculons 2x² − 3. On remplace x par 4 : 2 × 4² − 3 = 2 × 16 − 3 = 32 − 3 = **29**. Attention, la puissance passe avant la multiplication : on ne fait pas (2 × 4)²." },
          ],
        },
        {
          titre: "Développer : simple et double distributivité",
          blocs: [
            { t: "propriete", titre: "Distributivité", md: "• **Simple** : k(a + b) = ka + kb. 3(x + 4) = 3x + 12 et 5(2x − 3) = 10x − 15.\n• **Double** : (a + b)(c + d) = ac + ad + bc + bd. Chaque terme de la première parenthèse multiplie **chaque** terme de la seconde." },
            { t: "schema", titre: "(x + 2)(x + 5), l'aire d'un rectangle", legende: "Le grand rectangle mesure x + 5 sur x + 2. Ses quatre morceaux donnent les quatre produits : x² + 5x + 2x + 10.", svg: `<svg viewBox="0 0 400 210"><rect class="aplat" x="100" y="40" width="120" height="120"/><rect class="aplat-papier" x="220" y="40" width="75" height="120"/><rect class="aplat-papier" x="100" y="160" width="120" height="30"/><rect class="aplat" x="220" y="160" width="75" height="30"/><rect class="trait" x="100" y="40" width="195" height="150" fill="none"/><line class="trait-fin" x1="220" y1="40" x2="220" y2="190"/><line class="trait-fin" x1="100" y1="160" x2="295" y2="160"/><text class="texte" x="160" y="30" text-anchor="middle">x</text><text class="texte" x="257" y="30" text-anchor="middle">5</text><text class="texte" x="86" y="105" text-anchor="middle">x</text><text class="texte" x="86" y="180" text-anchor="middle">2</text><text class="texte-main" x="160" y="106" text-anchor="middle">x²</text><text class="texte-main" x="257" y="106" text-anchor="middle">5x</text><text class="texte" x="160" y="180" text-anchor="middle">2x</text><text class="texte" x="257" y="180" text-anchor="middle">10</text></svg>` },
            { t: "exemple", titre: "Développer et réduire (x + 2)(x + 5)", etapes: ["x × x + x × 5 + 2 × x + 2 × 5", "= x² + 5x + 2x + 10", "On réduit les termes en x : x² + 7x + 10."] },
            { t: "exemple", titre: "Avec des signes « − » : (3x − 1)(2x + 4)", etapes: ["3x × 2x + 3x × 4 + (−1) × 2x + (−1) × 4", "= 6x² + 12x − 2x − 4", "= 6x² + 10x − 4."] },
            { t: "verifie", q: "Développe et réduis (x + 2)(x + 5).", choix: ["x² + 10", "x² + 7x + 10", "2x + 7", "x² + 7x + 7"], bonne: 1, explication: "Quatre produits : x², 5x, 2x et 10. On réduit 5x + 2x = 7x : x² + 7x + 10. Oublier les produits « croisés » donne la fausse réponse x² + 10." },
          ],
        },
        {
          titre: "Le piège du carré d'une somme",
          blocs: [
            { t: "attention", md: "**(a + b)² n'est pas égal à a² + b² !**\nAvec a = 1 et b = 1 : (1 + 1)² = 2² = 4, mais 1² + 1² = 2. Un seul contre-exemple suffit à prouver que l'égalité est fausse en général." },
            { t: "texte", md: "Pour développer (a + b)², écris-le comme un produit : (a + b)(a + b) = a² + ab + ba + b² = a² + 2ab + b². Le terme 2ab est celui qu'on oublie. Par exemple, (x + 3)² = x² + 6x + 9. Pour x = 5 : 25 + 30 + 9 = 64, et on vérifie que (5 + 3)² = 8² = 64." },
            { t: "propriete", titre: "Tester une égalité", md: "Pour savoir si une égalité est vraie pour une valeur, on calcule **séparément** chaque membre, puis on compare.\n• Si les résultats sont égaux, l'égalité est vraie **pour cette valeur**.\n• S'ils sont différents, l'égalité est fausse : c'est un **contre-exemple**." },
            { t: "tableau", titre: "3x + 5 = 2x + 9 est-elle vraie ?", entetes: ["Valeur de x", "3x + 5", "2x + 9", "Conclusion"], lignes: [["x = 1", "8", "11", "fausse"], ["x = 4", "17", "17", "vraie"], ["x = 10", "35", "29", "fausse"]] },
          ],
        },
        {
          titre: "Factoriser : le chemin inverse",
          blocs: [
            { t: "definition", terme: "Factoriser", md: "Factoriser, c'est transformer une **somme** en **produit**. On repère un **facteur commun** à tous les termes et on l'écrit devant une parenthèse : ka + kb = k(a + b)." },
            { t: "exemple", titre: "Factoriser 6x + 9 puis 4x² + 8x", etapes: ["6x = 3 × 2x et 9 = 3 × 3 : le facteur commun est 3.", "6x + 9 = 3(2x + 3).", "4x² = 4x × x et 8x = 4x × 2 : le facteur commun est 4x.", "4x² + 8x = 4x(x + 2). On vérifie en redéveloppant : 4x × x + 4x × 2 = 4x² + 8x."] },
            { t: "etapes", titre: "Développer et réduire 2(x + 5) − 3(x − 1)", items: [{ titre: "Distribuer le 2", md: "2(x + 5) = 2x + 10." }, { titre: "Distribuer le −3", md: "−3(x − 1) = −3x + 3 : le « − » change le signe de chaque terme." }, { titre: "Assembler", md: "2x + 10 − 3x + 3." }, { titre: "Réduire", md: "−x + 13." }] },
            { t: "exemple", titre: "Le « tour de magie » prouvé", md: "Nombre x ; on ajoute 3 : x + 3 ; on multiplie par x : x(x + 3) = x² + 3x ; on enlève le carré : x² + 3x − x² = **3x**. Le résultat est toujours le triple du nombre de départ, pour **tous** les nombres." },
            { t: "verifie", q: "Quelle est une forme factorisée de 6x + 9 ?", choix: ["6(x + 9)", "3(2x + 3)", "3(2x + 9)", "15x"], bonne: 1, explication: "3 divise 6x et 9 : 6x = 3 × 2x et 9 = 3 × 3. Donc 6x + 9 = 3(2x + 3). Redévelopper permet toujours de vérifier." },
          ],
        },
      ],
      bilan: "Développer transforme un produit en somme, factoriser fait l'inverse ; on ne réduit que des termes de même nature, et (a + b)² vaut a² + 2ab + b², jamais a² + b².",
    },
    "4e-maths-05-equations": {
      accroche: "Pierre a 3 ans de plus que Léa, et à eux deux ils ont 27 ans. Quel âge a Léa ? On peut tâtonner longtemps… ou écrire une équation et la résoudre en trois lignes. Une équation, c'est une balance en équilibre qu'on n'a pas le droit de faire pencher.",
      objectifs: [
        "Vérifier si un nombre est solution d'une équation",
        "Résoudre une équation du premier degré à une inconnue",
        "Mettre un problème en équation et interpréter la solution",
      ],
      sections: [
        {
          titre: "Une équation, une balance en équilibre",
          blocs: [
            { t: "definition", terme: "Équation", md: "Une **égalité** dans laquelle figure une lettre, l'**inconnue** (souvent x). **Résoudre** l'équation, c'est trouver toutes les valeurs de x qui rendent l'égalité vraie : ce sont les **solutions**." },
            { t: "schema", titre: "L'équation 2x + 3 = 11", legende: "À gauche, deux boîtes de masse x et une masse de 3 ; à droite, une masse de 11. La balance est en équilibre : les deux plateaux pèsent autant.", svg: `<svg viewBox="0 0 400 240"><line class="trait" x1="200" y1="60" x2="200" y2="220"/><line class="trait" x1="160" y1="220" x2="240" y2="220"/><line class="trait" x1="90" y1="60" x2="310" y2="60"/><circle cx="200" cy="60" r="5" fill="var(--encre)"/><line class="trait-fin" x1="100" y1="60" x2="45" y2="170"/><line class="trait-fin" x1="100" y1="60" x2="155" y2="170"/><line class="trait" x1="40" y1="170" x2="160" y2="170"/><line class="trait-fin" x1="300" y1="60" x2="245" y2="170"/><line class="trait-fin" x1="300" y1="60" x2="355" y2="170"/><line class="trait" x1="240" y1="170" x2="360" y2="170"/><rect class="aplat-fort" x="62" y="142" width="22" height="27" opacity="0.45"/><rect class="trait-fin" x="62" y="142" width="22" height="27" fill="none"/><rect class="aplat-fort" x="88" y="142" width="22" height="27" opacity="0.45"/><rect class="trait-fin" x="88" y="142" width="22" height="27" fill="none"/><rect class="aplat" x="114" y="142" width="24" height="27"/><rect class="trait-fin" x="114" y="142" width="24" height="27" fill="none"/><text class="texte" x="73" y="160" text-anchor="middle">x</text><text class="texte" x="99" y="160" text-anchor="middle">x</text><text class="texte" x="126" y="160" text-anchor="middle">3</text><rect class="aplat" x="280" y="142" width="40" height="27"/><rect class="trait-fin" x="280" y="142" width="40" height="27" fill="none"/><text class="texte" x="300" y="160" text-anchor="middle">11</text><text class="texte-main" x="100" y="196" text-anchor="middle">2x + 3</text><text class="texte-main" x="300" y="196" text-anchor="middle">11</text><text class="texte-main" x="200" y="40" text-anchor="middle">=</text></svg>` },
            { t: "texte", md: "Si on retire 3 de **chaque** plateau, la balance reste en équilibre : 2x = 8. Puis si on garde la **moitié** de chaque plateau : x = 4. Une boîte pèse 4." },
            { t: "propriete", titre: "Les règles de la balance", md: "Une égalité reste vraie si :\n• on **ajoute ou soustrait le même nombre** aux deux membres ;\n• on **multiplie ou divise** les deux membres par le **même nombre non nul**." },
          ],
        },
        {
          titre: "Vérifier qu'un nombre est solution",
          blocs: [
            { t: "texte", md: "Pour savoir si un nombre est solution, on le **remplace** dans chaque membre et on compare. C'est rapide, et c'est aussi la meilleure façon de contrôler une résolution." },
            { t: "exemple", titre: "4 est-il solution de 2x − 3 = 5 ?", md: "Membre de gauche : 2 × 4 − 3 = 8 − 3 = 5. Membre de droite : 5. Les deux sont égaux : **oui**, 4 est solution." },
            { t: "verifie", q: "Quel nombre est solution de 7 − 2x = 1 ?", choix: ["−3", "3", "4", "6"], bonne: 1, explication: "On teste x = 3 : 7 − 2 × 3 = 7 − 6 = 1. C'est bien égal à 1. Avec x = 4, on obtiendrait 7 − 8 = −1." },
          ],
        },
        {
          titre: "La méthode pour résoudre",
          blocs: [
            { t: "etapes", titre: "Résoudre 5x − 4 = 3x + 10", items: [{ titre: "Regrouper les x", md: "On soustrait 3x des deux côtés : 5x − 3x − 4 = 10, soit 2x − 4 = 10." }, { titre: "Isoler les x", md: "On ajoute 4 des deux côtés : 2x = 14." }, { titre: "Diviser", md: "On divise les deux membres par 2, le coefficient de x : x = 7." }, { titre: "Vérifier", md: "5 × 7 − 4 = 31 et 3 × 7 + 10 = 31. C'est égal : la solution est 7." }] },
            { t: "exemple", titre: "Avec des parenthèses : 3(x − 2) = 2(x + 4)", etapes: ["On développe d'abord : 3x − 6 = 2x + 8.", "On soustrait 2x : x − 6 = 8.", "On ajoute 6 : x = 14.", "Vérification : 3 × 12 = 36 et 2 × 18 = 36. ✔"] },
            { t: "exemple", titre: "Avec une fraction : (x + 1)/2 = 4", etapes: ["On multiplie les deux membres par 2 pour chasser le dénominateur : x + 1 = 8.", "On soustrait 1 : x = 7.", "Vérification : (7 + 1)/2 = 8/2 = 4. ✔"] },
            { t: "attention", md: "Quand on « fait passer » un terme de l'autre côté, il **change de signe** : c'est juste un raccourci pour « ajouter l'opposé des deux côtés ». Dans x − 9 = 4, on ajoute 9 des deux côtés : x = 13, et non x = −5." },
            { t: "savais-tu", md: "Certaines équations n'ont **aucune solution** : x + 5 = x + 2 donnerait 5 = 2 après avoir enlevé x des deux côtés, ce qui est impossible. Aucun nombre augmenté de 5 ne peut être égal à ce même nombre augmenté de 2." },
          ],
        },
        {
          titre: "Mettre un problème en équation",
          blocs: [
            { t: "liste", titre: "Les quatre temps d'un problème", ordonnee: true, items: ["**Choisir l'inconnue** : écrire clairement ce que représente x.", "**Traduire** l'énoncé par une équation.", "**Résoudre** l'équation (et vérifier).", "**Répondre** à la question par une phrase, avec l'unité."] },
            { t: "exemple", titre: "Pierre et Léa", etapes: ["On note x l'âge de Léa. Pierre a alors x + 3 ans.", "À eux deux, ils ont 27 ans : x + (x + 3) = 27.", "On réduit : 2x + 3 = 27, puis 2x = 24, donc x = 12.", "Réponse : Léa a 12 ans et Pierre 15 ans (12 + 15 = 27 ✔)."] },
            { t: "exemple", titre: "Un rectangle de périmètre 36 cm", md: "Sa longueur est le double de sa largeur. Notons ℓ la largeur ; la longueur vaut 2ℓ. Périmètre : 2 × (ℓ + 2ℓ) = 36, soit 6ℓ = 36, donc **ℓ = 6 cm** (et la longueur 12 cm)." },
            { t: "verifie", q: "Quelle est la solution de 2(x + 3) = 14 ?", choix: ["x = 4", "x = 5,5", "x = 7", "x = 8"], bonne: 0, explication: "On développe : 2x + 6 = 14. On soustrait 6 : 2x = 8. On divise par 2 : x = 4. Vérification : 2 × (4 + 3) = 14." },
          ],
        },
      ],
      bilan: "Une équation est une balance : on fait la même chose des deux côtés, on regroupe les x, on divise par leur coefficient, et on vérifie toujours en remplaçant.",
    },
    "4e-maths-06-proportionnalite-pourcentages": {
      accroche: "Un jean à 60 € est soldé à 45 €. Le magasin annonce « −25 % ». Est-ce vrai ? Et si un prix monte de 10 % puis baisse de 10 %, revient-il à son point de départ ? Réponse surprenante : non ! Les pourcentages et la proportionnalité cachent quelques pièges.",
      objectifs: [
        "Calculer une vitesse, un débit ou une masse volumique et convertir leurs unités",
        "Appliquer une augmentation ou une réduction de p % avec un coefficient multiplicateur",
        "Calculer un pourcentage d'évolution",
        "Reconnaître une situation de proportionnalité dans un tableau ou un graphique",
      ],
      sections: [
        {
          titre: "Reconnaître la proportionnalité",
          blocs: [
            { t: "definition", terme: "Situation de proportionnalité", md: "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant **toujours par le même nombre**, le **coefficient de proportionnalité**." },
            { t: "tableau", titre: "Un cycliste à vitesse constante", entetes: ["Durée (h)", "0", "1", "1,25", "2", "3"], lignes: [["Distance (km)", "0", "24", "30", "48", "72"]] },
            { t: "texte", md: "Chaque distance s'obtient en multipliant la durée par **24** : c'est un tableau de proportionnalité, de coefficient 24. Dans un tableau qui n'est pas proportionnel, les quotients distance ÷ durée ne seraient pas tous égaux." },
            { t: "graphique", type: "courbe", titre: "Distance parcourue à 24 km/h", unite: "km", donnees: [{ label: "0 h", valeur: 0 }, { label: "1 h", valeur: 24 }, { label: "2 h", valeur: 48 }, { label: "3 h", valeur: 72 }, { label: "4 h", valeur: 96 }] },
            { t: "propriete", titre: "Proportionnalité et graphique", md: "Une situation de proportionnalité se représente par des points **alignés sur une droite qui passe par l'origine** du repère. Si la droite passe par (0 ; 0) et (4 ; 10), le coefficient est 10 ÷ 4 = **2,5**." },
          ],
        },
        {
          titre: "Les grandeurs quotients",
          blocs: [
            { t: "definition", terme: "Grandeur quotient", md: "Une grandeur obtenue en **divisant** deux autres grandeurs. Son unité s'écrit avec une barre : km/h, L/min, g/cm³." },
            { t: "tableau", titre: "Trois grandeurs quotients", entetes: ["Grandeur", "Formule", "Unité", "Exemple"], lignes: [["Vitesse", "distance ÷ durée", "km/h, m/s", "150 km en 2 h → 75 km/h"], ["Débit", "volume ÷ durée", "L/min", "45 L en 9 min → 5 L/min"], ["Masse volumique", "masse ÷ volume", "g/cm³", "54 g pour 20 cm³ → 2,7 g/cm³"]] },
            { t: "exemple", titre: "Convertir 36 km/h en m/s", etapes: ["36 km/h signifie 36 km parcourus en 1 h.", "36 km = 36 000 m et 1 h = 3 600 s.", "36 000 ÷ 3 600 = 10, donc 36 km/h = 10 m/s."] },
            { t: "exemple", titre: "Distance à 24 km/h pendant 1 h 15 min", etapes: ["Convertir la durée en heures : 15 min = 15/60 h = 0,25 h, donc 1 h 15 min = 1,25 h.", "Distance = vitesse × durée = 24 × 1,25 = 30 km."] },
            { t: "attention", md: "1 h 15 min n'est **pas** 1,15 h ! Une heure compte 60 minutes, pas 100. 15 min = un quart d'heure = 0,25 h." },
          ],
        },
        {
          titre: "Augmenter ou diminuer de p %",
          blocs: [
            { t: "propriete", titre: "Coefficient multiplicateur", md: "• **Augmenter** de p %, c'est multiplier par **1 + p/100** : +20 % → × 1,2 ; +15 % → × 1,15.\n• **Diminuer** de p %, c'est multiplier par **1 − p/100** : −25 % → × 0,75 ; −15 % → × 0,85." },
            { t: "exemple", titre: "Un article à 40 € augmente de 20 %", md: "40 × 1,2 = **48 €**. On peut aussi calculer la hausse : 20 % de 40 = 8 €, puis 40 + 8 = 48 €. Le coefficient fait tout en un seul calcul." },
            { t: "propriete", titre: "Pourcentage d'évolution", md: "Évolution en % = (nouvelle valeur − ancienne valeur) ÷ ancienne valeur × 100.\nLe jean : (45 − 60) ÷ 60 × 100 = −15 ÷ 60 × 100 = **−25 %**. Le magasin dit vrai." },
            { t: "verifie", q: "Baisser un prix de 25 % revient à le multiplier par :", choix: ["0,25", "0,75", "1,25", "−25"], bonne: 1, explication: "Il reste 100 % − 25 % = 75 % du prix, soit un coefficient de 0,75. Multiplier par 0,25 donnerait le montant de la remise, pas le nouveau prix." },
          ],
        },
        {
          titre: "Évolutions successives : le grand piège",
          blocs: [
            { t: "propriete", titre: "Deux évolutions de suite", md: "Les coefficients se **multiplient**, les pourcentages ne s'ajoutent pas.\n+10 % puis −10 % : × 1,1 × 0,9 = × 0,99, soit **−1 %** au total." },
            { t: "exemple", titre: "80 € : +10 %, puis −10 %", etapes: ["Après la hausse : 80 × 1,1 = 88 €.", "La baisse de 10 % porte sur 88 € (et non sur 80 €) : 88 × 0,9 = 79,20 €.", "Le prix final est 79,20 € : il a baissé de 0,80 €."] },
            { t: "attention", md: "Une hausse de 50 % suivie d'une baisse de 50 % ne ramène pas au départ : × 1,5 × 0,5 = × 0,75. Un prix de 100 € passe à 150 €, puis à **75 €**. Chaque pourcentage s'applique à la valeur **du moment**." },
            { t: "verifie", q: "Une hausse de 50 % suivie d'une baisse de 50 % ramène-t-elle au prix de départ ?", choix: ["Oui, les deux s'annulent", "Non, on perd 25 %", "Non, on gagne 25 %"], bonne: 1, explication: "Les coefficients se multiplient : 1,5 × 0,5 = 0,75. Le prix final vaut 75 % du prix de départ : il a baissé de 25 %." },
          ],
        },
      ],
      bilan: "Proportionnalité : un même coefficient, une droite par l'origine. Pourcentages : on multiplie par 1 + p/100 ou 1 − p/100, et deux évolutions de suite se multiplient.",
    },
    "4e-maths-07-statistiques": {
      accroche: "Dans une petite entreprise, trois salariés gagnent 1 000 €, 2 000 € et 3 000 € par mois, et le patron 100 000 €. Le salaire moyen ? 26 500 €. Impressionnant… mais personne ne gagne ça ! Pour décrire une série sans se faire piéger, il faut plusieurs outils : moyenne, médiane, étendue.",
      objectifs: [
        "Calculer une moyenne simple ou pondérée",
        "Déterminer la médiane et l'étendue d'une série",
        "Lire un diagramme en barres ou circulaire",
        "Utiliser les formules simples d'un tableur",
      ],
      sections: [
        {
          titre: "La moyenne, simple ou pondérée",
          blocs: [
            { t: "definition", terme: "Moyenne", md: "La moyenne d'une série est la **somme des valeurs divisée par le nombre de valeurs**. C'est la valeur que chacun aurait si l'on partageait le total équitablement.\nNotes 12, 8, 15, 9 : (12 + 8 + 15 + 9) ÷ 4 = 44 ÷ 4 = **11**." },
            { t: "propriete", titre: "Moyenne pondérée", md: "Quand les valeurs ont des **coefficients** (ou des effectifs), on multiplie chaque valeur par son coefficient, on additionne, puis on divise par la **somme des coefficients**." },
            { t: "exemple", titre: "Un 10 coefficient 1 et un 14 coefficient 3", etapes: ["On multiplie : 10 × 1 = 10 et 14 × 3 = 42.", "On additionne : 10 + 42 = 52.", "On divise par la somme des coefficients, 1 + 3 = 4 : 52 ÷ 4 = 13.", "La moyenne est 13, plus proche de 14 qui « compte » trois fois."] },
            { t: "tableau", titre: "Une série avec effectifs", entetes: ["Valeur", "8", "10", "14", "Total"], lignes: [["Effectif", "3", "5", "2", "10"], ["Valeur × effectif", "24", "50", "28", "102"]] },
            { t: "texte", md: "Moyenne : 102 ÷ 10 = **10,2**. Attention à diviser par l'**effectif total** (10), pas par le nombre de valeurs différentes (3). De même, si 10 élèves ont 12 et 20 élèves ont 15, la moyenne de la classe est (120 + 300) ÷ 30 = **14**, et non 13,5." },
            { t: "verifie", q: "Un élève a 11 de moyenne sur 4 notes. Quelle note doit-il avoir au 5e contrôle pour atteindre 12 ?", choix: ["12", "13", "16", "17"], bonne: 2, explication: "Total actuel : 11 × 4 = 44. Pour 12 de moyenne sur 5 notes, il faut un total de 12 × 5 = 60. Il lui faut donc 60 − 44 = 16." },
          ],
        },
        {
          titre: "La médiane : la valeur du milieu",
          blocs: [
            { t: "definition", terme: "Médiane", md: "Une fois les valeurs **rangées dans l'ordre croissant**, la médiane partage la série en **deux moitiés de même effectif** : autant de valeurs en dessous qu'au-dessus." },
            { t: "etapes", titre: "Médiane de 9, 3, 7, 12, 5", items: [{ titre: "Ranger", md: "Ordre croissant : 3, 5, 7, 9, 12." }, { titre: "Compter", md: "5 valeurs : un nombre impair." }, { titre: "Trouver le milieu", md: "La 3e valeur a deux valeurs de chaque côté." }, { titre: "Conclure", md: "La médiane est **7**." }] },
            { t: "propriete", titre: "Effectif pair", md: "S'il y a un nombre **pair** de valeurs, la médiane est la **moyenne des deux valeurs centrales**.\nSérie 4, 6, 9, 11, 15, 20 : les deux valeurs du milieu sont 9 et 11, la médiane est (9 + 11) ÷ 2 = **10**." },
            { t: "attention", md: "N'oublie pas de **ranger** d'abord ! Dans 9, 3, 7, 12, 5, la valeur écrite au milieu est 7 par hasard, mais dans 9, 3, 12, 7, 5 ce serait 12, ce qui est faux." },
          ],
        },
        {
          titre: "Étendue, et quel indicateur choisir ?",
          blocs: [
            { t: "definition", terme: "Étendue", md: "L'étendue est la **différence entre la plus grande et la plus petite valeur**. Elle mesure la **dispersion** : plus elle est grande, plus les valeurs sont éparpillées.\nSérie 5, 9, 14, 2, 11 : étendue = 14 − 2 = **12**." },
            { t: "texte", md: "Reprends les salaires 1, 2, 3 et 100 (en milliers d'euros). La moyenne vaut 106 ÷ 4 = **26,5**, tirée vers le haut par une seule valeur extrême. La médiane vaut (2 + 3) ÷ 2 = **2,5** : elle décrit bien mieux le salaire « habituel ». L'étendue, 99, signale l'écart énorme." },
            { t: "astuce", md: "Moyenne : sensible aux valeurs extrêmes. Médiane : insensible, elle ne regarde que le milieu. Étendue : elle dit si la série est serrée ou éparpillée. Pour bien décrire une série, utilise-les **ensemble**." },
            { t: "verifie", q: "Série 2, 4, 4, 6, 9. Quelle affirmation est vraie ?", choix: ["Moyenne 5, médiane 4, étendue 7", "Moyenne 4, médiane 5, étendue 9", "Moyenne 5, médiane 6, étendue 7"], bonne: 0, explication: "Somme 25, 5 valeurs : moyenne 5. Valeurs rangées, la 3e est 4 : médiane 4. Étendue : 9 − 2 = 7." },
          ],
        },
        {
          titre: "Lire des diagrammes et utiliser un tableur",
          blocs: [
            { t: "graphique", type: "barres", titre: "Ventes de gâteaux d'une boulangerie", unite: "gâteaux", donnees: [{ label: "lundi", valeur: 12 }, { label: "mardi", valeur: 8 }, { label: "mercredi", valeur: 15 }, { label: "jeudi", valeur: 5 }] },
            { t: "texte", md: "La barre la plus haute est celle du **mercredi** (15). Le total des ventes est 12 + 8 + 15 + 5 = **40** gâteaux, soit une moyenne de 10 par jour." },
            { t: "graphique", type: "secteurs", titre: "Comment viennent 200 élèves au collège", unite: "élèves", donnees: [{ label: "bus", valeur: 80 }, { label: "à pied", valeur: 50 }, { label: "voiture", valeur: 40 }, { label: "vélo", valeur: 30 }] },
            { t: "propriete", titre: "Diagramme circulaire", md: "L'angle d'un secteur est **proportionnel** à l'effectif : le disque entier (360°) représente le total. Ici 200 élèves ↔ 360°. Le secteur « à pied » (50 élèves) mesure 50 × 360 ÷ 200 = **90°**, un quart du disque. Inversement, un secteur de 90° représente un quart des élèves : 50." },
            { t: "tableau", titre: "Formules de tableur (les notes sont dans A1 à A5)", entetes: ["Cellule", "On tape", "Le tableur affiche"], lignes: [["A1 à A5", "12 ; 8 ; 15 ; 9 ; 11", "les cinq notes"], ["A6", "=SOMME(A1:A5)", "55"], ["A7", "=MOYENNE(A1:A5)", "11"], ["A8", "=MAX(A1:A5)-MIN(A1:A5)", "7 (l'étendue)"]] },
            { t: "astuce", md: "Une formule de tableur commence **toujours par le signe =**. « A1:A5 » désigne toutes les cellules de A1 à A5. Pour des notes en B2 à B10, on tape =MOYENNE(B2:B10)." },
          ],
        },
      ],
      bilan: "La moyenne partage le total, la médiane coupe la série rangée en deux, l'étendue mesure l'écart : trois regards complémentaires sur les mêmes données.",
    },
    "4e-maths-08-probabilites": {
      accroche: "Une pièce tombe trois fois de suite sur « pile ». Au quatrième lancer, « face » a-t-elle plus de chances de sortir ? Beaucoup de joueurs le croient… et ils ont tort. Les probabilités permettent de mesurer le hasard sans se laisser tromper par l'intuition.",
      objectifs: [
        "Décrire une expérience aléatoire, ses issues et l'événement contraire",
        "Calculer une probabilité en situation d'équiprobabilité",
        "Utiliser un tableau à double entrée ou un arbre pour deux épreuves",
      ],
      sections: [
        {
          titre: "Expériences aléatoires et issues",
          blocs: [
            { t: "definition", terme: "Expérience aléatoire", md: "Une expérience dont on connaît **tous les résultats possibles**, appelés **issues**, mais dont on ne peut pas prévoir le résultat. Lancer un dé est aléatoire (issues 1, 2, 3, 4, 5, 6). Mesurer la longueur de ta table ne l'est pas : le résultat est connu d'avance." },
            { t: "definition", terme: "Événement", md: "Un ensemble d'issues. « Obtenir un nombre pair » est réalisé par les issues 2, 4 et 6. Son **événement contraire**, « obtenir un nombre impair », est réalisé par 1, 3 et 5 : il se produit exactement quand le premier ne se produit pas." },
            { t: "droite", titre: "L'échelle des probabilités", min: 0, max: 1, pas: 0.1, points: [{ x: 0, label: "impossible" }, { x: 0.3, label: "rouge 0,3" }, { x: 0.5, label: "pile 1/2" }, { x: 1, label: "certain" }] },
            { t: "propriete", titre: "Une probabilité est entre 0 et 1", md: "Une probabilité est un nombre compris entre **0** (événement **impossible**) et **1** (événement **certain**). On l'écrit en fraction, en décimal ou en pourcentage : 1/2 = 0,5 = 50 %." },
          ],
        },
        {
          titre: "Calculer une probabilité",
          blocs: [
            { t: "propriete", titre: "Situation d'équiprobabilité", md: "Quand toutes les issues ont la même chance de se produire :\n**P(événement) = nombre d'issues favorables ÷ nombre d'issues possibles**." },
            { t: "exemple", titre: "Trois situations", md: "• Dé à 6 faces, obtenir 4 : une issue favorable sur 6, P = **1/6**.\n• Obtenir au moins 5 : issues 5 et 6, P = 2/6 = **1/3**.\n• Urne de 3 boules rouges et 7 bleues : P(rouge) = 3/10 = **0,3**.\n• Un jeu de 32 cartes contient 4 rois : P(roi) = 4/32 = **1/8**." },
            { t: "propriete", titre: "Événement contraire", md: "P(contraire de A) = **1 − P(A)**. S'il y a 0,35 de chances qu'il pleuve demain, il y a 1 − 0,35 = **0,65** de chances qu'il ne pleuve pas." },
            { t: "exemple", titre: "Une roue de 8 secteurs égaux, numérotés de 1 à 8", etapes: ["Issues possibles : 8.", "Nombres premiers entre 1 et 8 : 2, 3, 5 et 7 (attention, 1 n'est pas premier).", "4 issues favorables : P = 4/8 = 0,5."] },
            { t: "verifie", q: "On lance un dé équilibré. Quelle est la probabilité d'obtenir au moins 5 ?", choix: ["1/6", "1/3", "5/6", "1/2"], bonne: 1, explication: "« Au moins 5 » signifie 5 ou 6 : 2 issues favorables sur 6. P = 2/6 = 1/3." },
          ],
        },
        {
          titre: "Deux épreuves : le tableau à double entrée",
          blocs: [
            { t: "texte", md: "On lance **deux dés** et on additionne. Les sommes de 2 à 12 n'ont **pas** toutes la même chance : pour lister proprement les issues, on dresse un tableau. Chaque case est une issue équiprobable : il y en a 6 × 6 = **36**." },
            { t: "tableau", titre: "Somme de deux dés", entetes: ["+", "1", "2", "3", "4", "5", "6"], lignes: [["**1**", "2", "3", "4", "5", "6", "**7**"], ["**2**", "3", "4", "5", "6", "**7**", "8"], ["**3**", "4", "5", "6", "**7**", "8", "9"], ["**4**", "5", "6", "**7**", "8", "9", "10"], ["**5**", "6", "**7**", "8", "9", "10", "11"], ["**6**", "**7**", "8", "9", "10", "11", "12"]] },
            { t: "exemple", titre: "Probabilité d'obtenir une somme de 7", md: "La somme 7 apparaît dans **6 cases** (1+6, 2+5, 3+4, 4+3, 5+2, 6+1). P(somme = 7) = 6/36 = **1/6**. C'est la somme la plus probable ! La somme 2 n'apparaît qu'une fois : 1/36." },
          ],
        },
        {
          titre: "Deux épreuves : l'arbre des possibles",
          blocs: [
            { t: "schema", titre: "Deux tirages avec remise : 2 boules rouges (R), 1 verte (V)", legende: "On multiplie les probabilités le long d'un chemin. Les quatre résultats font 4/9 + 2/9 + 2/9 + 1/9 = 1.", svg: `<svg viewBox="0 0 400 250"><circle cx="40" cy="130" r="4" fill="var(--encre)"/><line class="trait" x1="45" y1="128" x2="140" y2="74"/><line class="trait" x1="45" y1="132" x2="140" y2="186"/><text class="texte" x="152" y="75" text-anchor="middle">R</text><text class="texte" x="152" y="195" text-anchor="middle">V</text><line class="trait-fin" x1="163" y1="70" x2="262" y2="42"/><line class="trait-fin" x1="163" y1="72" x2="262" y2="98"/><line class="trait-fin" x1="163" y1="188" x2="262" y2="162"/><line class="trait-fin" x1="163" y1="192" x2="262" y2="218"/><text class="texte" x="272" y="46" text-anchor="middle">R</text><text class="texte" x="272" y="104" text-anchor="middle">V</text><text class="texte" x="272" y="166" text-anchor="middle">R</text><text class="texte" x="272" y="224" text-anchor="middle">V</text><text class="texte-pigment" x="82" y="96" text-anchor="middle">2/3</text><text class="texte-pigment" x="82" y="176" text-anchor="middle">1/3</text><text class="texte-pigment" x="205" y="48" text-anchor="middle">2/3</text><text class="texte-pigment" x="214" y="104" text-anchor="middle">1/3</text><text class="texte-pigment" x="207" y="164" text-anchor="middle">2/3</text><text class="texte-pigment" x="214" y="226" text-anchor="middle">1/3</text><text class="texte" x="298" y="46">RR : 4/9</text><text class="texte" x="298" y="104">RV : 2/9</text><text class="texte" x="298" y="166">VR : 2/9</text><text class="texte" x="298" y="224">VV : 1/9</text><text class="texte-petit" x="152" y="20" text-anchor="middle">1er tirage</text><text class="texte-petit" x="272" y="20" text-anchor="middle">2e tirage</text></svg>` },
            { t: "exemple", titre: "Probabilité d'obtenir deux boules rouges", etapes: ["Au 1er tirage, 2 boules rouges sur 3 : P(R) = 2/3.", "On remet la boule : au 2e tirage, encore 2/3.", "On suit le chemin R puis R et on multiplie : 2/3 × 2/3 = 4/9."] },
            { t: "attention", md: "**Le hasard n'a pas de mémoire.** Après trois « pile », la pièce ne « sait » pas ce qui s'est passé : P(pile) reste **1/2**. De même, dans une urne de 5 boules vertes et 5 noires, tirées avec remise, la noire n'a jamais plus de chances que la verte." },
            { t: "verifie", q: "On lance deux pièces. Quelle est la probabilité d'obtenir deux fois pile ?", choix: ["1/2", "1/3", "1/4"], bonne: 2, explication: "Quatre issues équiprobables : PP, PF, FP et FF. Une seule est favorable : 1/4. Le piège 1/3 vient de l'oubli que PF et FP sont deux issues différentes." },
          ],
        },
      ],
      bilan: "Favorables sur possibles, toujours entre 0 et 1 ; le contraire vaut 1 − P ; pour deux épreuves, un tableau ou un arbre, et le hasard n'a pas de mémoire.",
    },
    "4e-maths-09-pythagore": {
      accroche: "Une échelle de 5 m est posée contre un mur, son pied à 1,4 m du mur. À quelle hauteur touche-t-elle le mur ? Impossible d'y monter avec un mètre… mais un théorème vieux de 2 500 ans donne la réponse au centimètre près : celui de Pythagore.",
      objectifs: [
        "Repérer l'hypoténuse d'un triangle rectangle",
        "Calculer une longueur avec le théorème de Pythagore",
        "Prouver qu'un triangle est rectangle ou ne l'est pas",
        "Résoudre un problème concret : échelle, diagonale, distance",
      ],
      sections: [
        {
          titre: "Le triangle rectangle et son hypoténuse",
          blocs: [
            { t: "definition", terme: "Hypoténuse", md: "Dans un triangle rectangle, l'**hypoténuse** est le côté **opposé à l'angle droit**. C'est toujours le **plus grand** des trois côtés. Les deux autres sont les **côtés de l'angle droit**." },
            { t: "schema", titre: "Des carrés sur les côtés d'un triangle rectangle", legende: "Triangle rectangle en A, avec AB = 3 et AC = 4. L'aire du carré construit sur l'hypoténuse BC égale la somme des aires des deux autres : 9 + 16 = 25, donc BC = 5.", svg: `<svg viewBox="0 0 400 270"><rect class="aplat" x="100" y="110" width="60" height="60"/><rect class="trait-fin" x="100" y="110" width="60" height="60" fill="none"/><rect class="aplat" x="160" y="170" width="80" height="80"/><rect class="trait-fin" x="160" y="170" width="80" height="80" fill="none"/><path class="aplat-fort" opacity="0.5" d="M160 110 L240 170 L300 90 L220 30 Z"/><path class="trait-fin" fill="none" d="M160 110 L240 170 L300 90 L220 30 Z"/><path class="trait" fill="none" d="M160 110 L160 170 L240 170 Z"/><path class="trait-fin" fill="none" d="M170 170 L170 160 L160 160"/><text class="texte" x="130" y="145" text-anchor="middle">3² = 9</text><text class="texte" x="200" y="215" text-anchor="middle">4² = 16</text><text class="texte" x="230" y="104" text-anchor="middle">5² = 25</text><text class="texte" x="155" y="186" text-anchor="end">A</text><text class="texte" x="154" y="104" text-anchor="end">B</text><text class="texte" x="246" y="186">C</text><text class="texte-main" x="330" y="232" text-anchor="middle">9 + 16 = 25</text></svg>` },
            { t: "verifie", q: "Le triangle ABC est rectangle en A. Quel est son plus grand côté ?", choix: ["[AB]", "[AC]", "[BC]"], bonne: 2, explication: "L'hypoténuse est le côté opposé à l'angle droit. L'angle droit est en A, le côté opposé est [BC] : c'est le plus grand côté." },
          ],
        },
        {
          titre: "Le théorème : calculer une longueur",
          blocs: [
            { t: "propriete", titre: "Théorème de Pythagore", md: "Si un triangle ABC est **rectangle en A**, alors **BC² = AB² + AC²**.\n==Le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.==" },
            { t: "exemple", titre: "Calculer l'hypoténuse : côtés de l'angle droit 5 cm et 7 cm", etapes: ["Le triangle est rectangle : on applique Pythagore. Hypoténuse² = 5² + 7².", "= 25 + 49 = 74.", "Hypoténuse = √74 ≈ 8,6 cm (arrondi au dixième, à la calculatrice)."] },
            { t: "exemple", titre: "Calculer un côté de l'angle droit : hypoténuse 13 cm, un côté 5 cm", etapes: ["13² = 5² + x², donc x² = 13² − 5².", "x² = 169 − 25 = 144.", "x = √144 = 12 cm."] },
            { t: "astuce", md: "Hypoténuse inconnue → on **additionne** les carrés. Côté de l'angle droit inconnu → on **soustrait** les carrés (le grand moins le petit). Dans les deux cas, on termine par la **racine carrée**." },
            { t: "attention", md: "**N'oublie pas la racine !** Si BC² = 25, alors BC = √25 = **5**, pas 25. Et vérifie ton résultat : l'hypoténuse doit rester le plus grand côté. Un « côté » de 14 cm dans un triangle d'hypoténuse 13 cm trahit une erreur." },
          ],
        },
        {
          titre: "Le triangle est-il rectangle ? Réciproque et contraposée",
          blocs: [
            { t: "propriete", titre: "Réciproque et contraposée", md: "On repère le **plus grand côté**, par exemple [BC], puis on compare BC² et AB² + AC².\n• **Réciproque** : si BC² = AB² + AC², alors le triangle **est rectangle** en A.\n• **Contraposée** : si BC² ≠ AB² + AC², alors le triangle **n'est pas rectangle**." },
            { t: "tableau", titre: "Trois triangles à tester", entetes: ["Côtés", "Plus grand côté au carré", "Somme des deux autres carrés", "Conclusion"], lignes: [["5 ; 12 ; 13", "13² = 169", "25 + 144 = 169", "rectangle"], ["8 ; 15 ; 17", "17² = 289", "64 + 225 = 289", "rectangle"], ["6 ; 7 ; 9", "9² = 81", "36 + 49 = 85", "pas rectangle"]] },
            { t: "attention", md: "On calcule les deux membres **séparément** et on compare à la fin. N'écris pas « 9² = 6² + 7² » au début : c'est justement ce qu'on cherche à savoir, et ici c'est faux !" },
            { t: "verifie", q: "Un triangle a pour côtés 6 cm, 7 cm et 9 cm. Est-il rectangle ?", choix: ["Oui", "Non"], bonne: 1, explication: "Plus grand côté : 9² = 81. Somme des deux autres : 6² + 7² = 36 + 49 = 85. 81 ≠ 85, donc d'après la contraposée, le triangle n'est pas rectangle." },
          ],
        },
        {
          titre: "Pythagore dans la vraie vie",
          blocs: [
            { t: "schema", titre: "L'échelle contre le mur", legende: "Le mur, le sol et l'échelle forment un triangle rectangle. L'échelle est l'hypoténuse.", svg: `<svg viewBox="0 0 400 260"><rect class="aplat" x="300" y="30" width="16" height="200"/><rect class="trait-fin" x="300" y="30" width="16" height="200" fill="none"/><line class="trait" x1="150" y1="230" x2="360" y2="230"/><line class="trait" x1="244" y1="230" x2="300" y2="38" stroke-width="3"/><path class="trait-fin" fill="none" d="M288 230 L288 218 L300 218"/><line class="pointille" x1="244" y1="242" x2="300" y2="242"/><text class="texte" x="258" y="130" text-anchor="end">5 m</text><text class="texte" x="272" y="256" text-anchor="middle">1,4 m</text><text class="texte-main" x="324" y="138">h = ?</text><text class="texte-petit" x="190" y="222" text-anchor="middle">sol</text><text class="texte-petit" x="308" y="22" text-anchor="middle">mur</text></svg>` },
            { t: "exemple", titre: "La hauteur atteinte par l'échelle", etapes: ["Le triangle est rectangle (mur vertical, sol horizontal). L'hypoténuse est l'échelle : 5² = 1,4² + h².", "h² = 25 − 1,96 = 23,04.", "h = √23,04 = 4,8. L'échelle touche le mur à 4,8 m de haut."] },
            { t: "exemple", titre: "Diagonales", md: "• Rectangle de 9 cm sur 12 cm : d² = 81 + 144 = 225, donc d = √225 = **15 cm**.\n• Carré de côté 4 cm : d² = 16 + 16 = 32, donc d = √32 ≈ **5,7 cm**." },
            { t: "savais-tu", md: "Bien avant Pythagore, les arpenteurs égyptiens utilisaient une corde à 13 nœuds régulièrement espacés : tendue en triangle 3 – 4 – 5, elle donnait un angle droit parfait pour tracer les champs." },
          ],
        },
      ],
      bilan: "Rectangle en A ⇒ BC² = AB² + AC² : on additionne pour l'hypoténuse, on soustrait pour un autre côté, et on n'oublie jamais la racine carrée.",
    },
    "4e-maths-10-thales-cosinus": {
      accroche: "Comment mesurer la hauteur d'un arbre sans y grimper ? Plante un bâton, mesure son ombre et celle de l'arbre : un simple calcul de proportion suffit. Thalès aurait mesuré ainsi la grande pyramide d'Égypte, il y a plus de 2 500 ans.",
      objectifs: [
        "Reconnaître des triangles semblables et utiliser la proportionnalité de leurs côtés",
        "Calculer une longueur avec le théorème de Thalès",
        "Utiliser le cosinus pour calculer une longueur ou un angle dans un triangle rectangle",
      ],
      sections: [
        {
          titre: "Des triangles semblables",
          blocs: [
            { t: "definition", terme: "Triangles semblables", md: "Deux triangles sont **semblables** quand leurs angles sont **deux à deux de même mesure**. L'un est alors un **agrandissement** ou une **réduction** de l'autre : leurs côtés sont **proportionnels**." },
            { t: "schema", titre: "Un agrandissement de rapport 1,5", legende: "Les angles sont les mêmes ; chaque côté du grand triangle mesure 1,5 fois le côté correspondant du petit.", svg: `<svg viewBox="0 0 400 230"><path class="aplat" d="M40 190 L120 190 L40 130 Z"/><path class="trait" fill="none" d="M40 190 L120 190 L40 130 Z"/><path class="aplat" d="M190 200 L310 200 L190 110 Z"/><path class="trait" fill="none" d="M190 200 L310 200 L190 110 Z"/><path class="trait-fin" fill="none" d="M40 180 L50 180 L50 190"/><path class="trait-fin" fill="none" d="M190 190 L200 190 L200 200"/><path fill="none" stroke="var(--pigment)" stroke-width="2" d="M102 190 A18 18 0 0 1 105.6 179.2"/><path fill="none" stroke="var(--pigment)" stroke-width="2" d="M292 200 A18 18 0 0 1 295.6 189.2"/><text class="texte" x="34" y="204" text-anchor="end">A</text><text class="texte" x="126" y="204">B</text><text class="texte" x="34" y="128" text-anchor="end">C</text><text class="texte" x="184" y="214" text-anchor="end">D</text><text class="texte" x="316" y="214">E</text><text class="texte" x="184" y="108" text-anchor="end">F</text><text class="texte-petit" x="80" y="206" text-anchor="middle">4</text><text class="texte-petit" x="90" y="152">5</text><text class="texte-petit" x="30" y="164" text-anchor="end">3</text><text class="texte-petit" x="250" y="216" text-anchor="middle">6</text><text class="texte-petit" x="260" y="148">7,5</text><text class="texte-petit" x="180" y="160" text-anchor="end">4,5</text><text class="texte-main" x="80" y="30" text-anchor="middle">× 1,5</text><path class="trait-fin" fill="none" d="M110 40 Q160 20 200 60" marker-end="url(#fl)"/></svg>` },
            { t: "propriete", titre: "Ce qui change, ce qui reste", md: "Dans un agrandissement ou une réduction de rapport k, les **longueurs sont multipliées par k**, mais les **angles ne changent pas**. Réciproquement, si les côtés de deux triangles sont proportionnels, ces triangles sont semblables." },
            { t: "exemple", titre: "Calculer EF", md: "ABC et DEF sont semblables, AB correspond à DE et BC à EF. AB = 4 cm, DE = 6 cm, BC = 5 cm. Rapport : k = 6 ÷ 4 = 1,5. Donc EF = 5 × 1,5 = **7,5 cm**." },
            { t: "exemple", titre: "La hauteur de l'arbre", md: "Au même instant, les rayons du soleil font le même angle avec le sol : le bâton et son ombre, l'arbre et son ombre forment deux triangles semblables. Bâton 1,5 m pour 2 m d'ombre ; arbre h pour 12 m d'ombre. h/12 = 1,5/2, donc h = 12 × 1,5 ÷ 2 = **9 m**." },
          ],
        },
        {
          titre: "Le théorème de Thalès",
          blocs: [
            { t: "propriete", titre: "Théorème de Thalès (dans un triangle)", md: "Dans un triangle ABC, si M est sur [AB], N sur [AC] et si **(MN) // (BC)**, alors les triangles AMN et ABC sont semblables, et :\n**AM/AB = AN/AC = MN/BC**." },
            { t: "schema", titre: "La configuration de Thalès", legende: "Le petit triangle AMN est une réduction du grand triangle ABC, car (MN) est parallèle à (BC). Ici le rapport est 4/10 = 0,4.", svg: `<svg viewBox="0 0 400 250"><path class="aplat" d="M200 30 L144 106 L256 106 Z"/><path class="trait" fill="none" d="M200 30 L60 220 L340 220 Z"/><line class="trait" x1="144" y1="106" x2="256" y2="106" stroke="var(--pigment)"/><path class="trait-fin" fill="none" d="M196 102 L203 106 L196 110"/><path class="trait-fin" fill="none" d="M196 216 L203 220 L196 224"/><circle cx="144" cy="106" r="3" fill="var(--encre)"/><circle cx="256" cy="106" r="3" fill="var(--encre)"/><text class="texte" x="200" y="22" text-anchor="middle">A</text><text class="texte" x="54" y="232" text-anchor="end">B</text><text class="texte" x="346" y="232">C</text><text class="texte" x="136" y="106" text-anchor="end">M</text><text class="texte" x="264" y="106">N</text><text class="texte-pigment" x="200" y="98" text-anchor="middle">MN = ?</text><text class="texte-petit" x="200" y="240" text-anchor="middle">BC = 15</text><text class="texte-petit" x="20" y="40">AM = 4</text><text class="texte-petit" x="20" y="58">AB = 10</text><text class="texte-petit" x="20" y="76">(MN) // (BC)</text></svg>` },
            { t: "exemple", titre: "Calculer MN avec AM = 4, AB = 10 et BC = 15", etapes: ["M est sur [AB], N sur [AC] et (MN) // (BC) : on peut appliquer le théorème de Thalès.", "AM/AB = AN/AC = MN/BC, donc 4/10 = MN/15.", "Produit en croix : MN = 4 × 15 ÷ 10 = 6.", "MN = 6 cm."] },
            { t: "exemple", titre: "Calculer AC avec AM = 3, AB = 6 et AN = 5", etapes: ["On écrit l'égalité utile : AM/AB = AN/AC.", "On remplace : 3/6 = 5/AC.", "Produit en croix : AC = 6 × 5 ÷ 3 = 10."] },
            { t: "attention", md: "Mets toujours **en haut les côtés du petit triangle** (AM, AN, MN) et **en bas ceux du grand** (AB, AC, BC). Écrire AM/MB à la place de AM/AB est l'erreur la plus fréquente : MB n'est pas un côté du grand triangle !" },
            { t: "verifie", q: "(MN) // (BC), AM = 3 cm, AB = 9 cm et AC = 12 cm. Que vaut AN ?", choix: ["4 cm", "6 cm", "36 cm", "9 cm"], bonne: 0, explication: "Thalès : AM/AB = AN/AC, donc 3/9 = AN/12. AN = 3 × 12 ÷ 9 = 4 cm. Le rapport de réduction est 1/3." },
          ],
        },
        {
          titre: "Le cosinus d'un angle aigu",
          blocs: [
            { t: "texte", md: "Dans tous les triangles rectangles qui ont un angle de 60°, le rapport « côté adjacent ÷ hypoténuse » est le même : ils sont semblables ! Ce rapport ne dépend que de l'angle. On l'appelle son **cosinus**." },
            { t: "schema", titre: "Les côtés vus depuis l'angle B", legende: "Le côté adjacent à B touche l'angle B sans être l'hypoténuse. Le côté opposé est en face de B.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M80 200 L300 200 L300 60 Z"/><path class="trait" fill="none" d="M80 200 L300 200 L300 60 Z"/><path class="trait-fin" fill="none" d="M288 200 L288 188 L300 188"/><path fill="none" stroke="var(--pigment)" stroke-width="2" d="M110 200 A30 30 0 0 0 105.3 183.9"/><text class="texte" x="72" y="206" text-anchor="end">B</text><text class="texte" x="306" y="216">A</text><text class="texte" x="306" y="56">C</text><text class="texte-pigment" x="170" y="118" text-anchor="end">hypoténuse</text><text class="texte-petit" x="190" y="222" text-anchor="middle">côté adjacent à B</text><text class="texte-petit" x="308" y="128">côté opposé</text><text class="texte-petit" x="308" y="143">à B</text><text class="texte-main" x="40" y="50">cos B = AB / BC</text></svg>` },
            { t: "propriete", titre: "Cosinus", md: "Dans un triangle **rectangle**, le cosinus d'un angle aigu est :\n**cos = côté adjacent ÷ hypoténuse**.\nTriangle ABC rectangle en A : cos B = AB/BC. Comme l'hypoténuse est le plus grand côté, un cosinus est toujours **compris entre 0 et 1**." },
            { t: "tableau", titre: "Quelques cosinus (arrondis au millième)", entetes: ["Angle", "30°", "40°", "45°", "60°"], lignes: [["Cosinus", "≈ 0,866", "≈ 0,766", "≈ 0,707", "0,5"]] },
            { t: "verifie", q: "Le triangle ABC est rectangle en A. Comment s'écrit cos B ?", choix: ["AC/BC", "AB/BC", "AB/AC", "BC/AB"], bonne: 1, explication: "Le côté adjacent à B (autre que l'hypoténuse) est [AB], l'hypoténuse est [BC]. Donc cos B = AB/BC." },
          ],
        },
        {
          titre: "Calculer avec le cosinus",
          blocs: [
            { t: "exemple", titre: "Une longueur : BC = 10 cm et l'angle B mesure 60°", etapes: ["ABC est rectangle en A : cos B = AB/BC.", "cos 60° = AB/10, donc AB = 10 × cos 60°.", "AB = 10 × 0,5 = 5 cm."] },
            { t: "exemple", titre: "L'hypoténuse : AB = 5 cm et l'angle B mesure 40°", etapes: ["cos 40° = AB/BC = 5/BC.", "Produit en croix : BC = 5 ÷ cos 40°.", "À la calculatrice : BC ≈ 5 ÷ 0,766 ≈ 6,5 cm (au dixième)."] },
            { t: "exemple", titre: "Un angle : AB = 6 cm et BC = 8 cm", etapes: ["cos B = AB/BC = 6/8 = 0,75.", "On utilise la touche cos⁻¹ (ou arccos, ou Acs) : B = cos⁻¹(0,75).", "B ≈ 41° (arrondi au degré)."] },
            { t: "attention", md: "Règle ta calculatrice en **degrés** (mode « D » ou « Deg ») ! Sinon cos 60 n'affichera pas 0,5. Et le cosinus ne s'utilise **que dans un triangle rectangle**." },
          ],
        },
      ],
      bilan: "Triangles semblables : mêmes angles, côtés proportionnels. Thalès : AM/AB = AN/AC = MN/BC quand (MN) // (BC). Cosinus : adjacent sur hypoténuse, dans un triangle rectangle.",
    },
    "4e-maths-11-transformations-solides": {
      accroche: "Un cornet de glace, une tente canadienne, la pyramide du Louvre, un verre à cocktail… Combien contiennent-ils ? Et pourquoi un cône rempli à ras bord contient-il exactement trois fois moins qu'un cylindre de même base et de même hauteur ?",
      objectifs: [
        "Reconnaître une translation, une rotation et une symétrie et savoir ce qu'elles conservent",
        "Connaître le vocabulaire des pyramides et des cônes",
        "Calculer le volume d'un prisme, d'un cylindre, d'une pyramide et d'un cône",
        "Convertir des unités de volume et de contenance",
      ],
      sections: [
        {
          titre: "Glisser et tourner : translation et rotation",
          blocs: [
            { t: "definition", terme: "Translation", md: "Une translation fait **glisser** une figure selon une **direction**, un **sens** et une **longueur**, donnés par une flèche. La figure ne tourne pas et ne se retourne pas." },
            { t: "definition", terme: "Rotation", md: "Une rotation fait **tourner** une figure autour d'un point fixe, le **centre**, d'un certain **angle**, dans un sens donné. Chaque point reste à la même distance du centre." },
            { t: "schema", titre: "Une translation et une rotation de 90°", legende: "À gauche, F glisse selon la flèche et devient F'. À droite, G tourne de 90° autour de O, dans le sens inverse des aiguilles d'une montre, et devient G'.", svg: `<svg viewBox="0 0 400 220"><path class="aplat" d="M30 190 L90 190 L45 140 Z"/><path class="trait" fill="none" d="M30 190 L90 190 L45 140 Z"/><path class="aplat-fort" opacity="0.5" d="M130 130 L190 130 L145 80 Z"/><path class="trait" fill="none" d="M130 130 L190 130 L145 80 Z"/><line class="pointille" x1="90" y1="190" x2="190" y2="130"/><line class="pointille" x1="45" y1="140" x2="145" y2="80"/><line x1="30" y1="190" x2="126" y2="132" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><text class="texte-petit" x="55" y="178" text-anchor="middle">F</text><text class="texte-petit" x="155" y="118" text-anchor="middle">F'</text><text class="texte-petit" x="110" y="212" text-anchor="middle">translation</text><line class="pointille" x1="225" y1="20" x2="225" y2="210"/><path class="aplat" d="M340 170 L380 170 L360 140 Z"/><path class="trait" fill="none" d="M340 170 L380 170 L360 140 Z"/><path class="aplat-fort" opacity="0.5" d="M300 130 L300 90 L270 110 Z"/><path class="trait" fill="none" d="M300 130 L300 90 L270 110 Z"/><line class="pointille" x1="300" y1="170" x2="340" y2="170"/><line class="pointille" x1="300" y1="170" x2="300" y2="130"/><path fill="none" stroke="var(--pigment)" stroke-width="2" d="M340 170 A40 40 0 0 0 302 130" marker-end="url(#fl-p)"/><circle cx="300" cy="170" r="3" fill="var(--encre)"/><text class="texte" x="292" y="186" text-anchor="end">O</text><text class="texte-pigment" x="334" y="126" text-anchor="middle">90°</text><text class="texte-petit" x="360" y="164" text-anchor="middle">G</text><text class="texte-petit" x="291" y="114" text-anchor="middle">G'</text><text class="texte-petit" x="315" y="212" text-anchor="middle">rotation de centre O</text></svg>` },
            { t: "propriete", titre: "Ce que conservent les transformations", md: "Translation, rotation, symétrie axiale et symétrie centrale **conservent les longueurs, les angles, les aires et l'alignement**. L'image d'un segment de 4 cm par une rotation est donc un segment de **4 cm**." },
            { t: "tableau", titre: "Quatre transformations", entetes: ["Transformation", "Ce qu'elle fait", "Elle est définie par"], lignes: [["Symétrie axiale", "retourne la figure, comme un pliage", "un axe"], ["Symétrie centrale", "fait un demi-tour", "un centre"], ["Translation", "fait glisser la figure", "une flèche (direction, sens, longueur)"], ["Rotation", "fait tourner la figure", "un centre, un angle et un sens"]] },
            { t: "savais-tu", md: "Une **frise** est un motif répété par translation le long d'une bande. Un **pavage** recouvre le plan sans trou ni chevauchement. Les mosaïques de l'Alhambra, à Grenade, en sont des chefs-d'œuvre." },
          ],
        },
        {
          titre: "Pyramides et cônes",
          blocs: [
            { t: "definition", terme: "Pyramide", md: "Un solide dont la **base** est un polygone et dont les **faces latérales** sont des triangles qui se rejoignent en un point, le **sommet**. La **hauteur** est la distance du sommet à la base, mesurée **perpendiculairement** à la base." },
            { t: "definition", terme: "Cône de révolution", md: "Un solide dont la base est un **disque** et dont le sommet est à la verticale du centre du disque. Il est engendré par un triangle rectangle qui tourne autour d'un côté de l'angle droit." },
            { t: "schema", titre: "Une pyramide à base carrée et un cône", legende: "La hauteur h (en pointillés) part du sommet et tombe perpendiculairement au centre de la base. Les traits cachés sont en pointillés.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M40 200 L140 200 L170 170 L70 170 Z"/><line class="trait" x1="40" y1="200" x2="140" y2="200"/><line class="trait" x1="140" y1="200" x2="170" y2="170"/><line class="pointille" x1="170" y1="170" x2="70" y2="170"/><line class="pointille" x1="70" y1="170" x2="40" y2="200"/><line class="trait" x1="105" y1="50" x2="40" y2="200"/><line class="trait" x1="105" y1="50" x2="140" y2="200"/><line class="trait" x1="105" y1="50" x2="170" y2="170"/><line class="pointille" x1="105" y1="50" x2="70" y2="170"/><line x1="105" y1="50" x2="105" y2="185" stroke="var(--pigment)" stroke-width="2" stroke-dasharray="5 4"/><path class="trait-fin" fill="none" d="M105 177 L112 177 L112 185"/><text class="texte" x="105" y="42" text-anchor="middle">S</text><text class="texte-petit" x="98" y="196" text-anchor="end">H</text><text class="texte-pigment" x="111" y="128">h</text><text class="texte-petit" x="105" y="228" text-anchor="middle">pyramide</text><path class="aplat" d="M230 190 A70 18 0 0 0 370 190 Z"/><path class="trait" fill="none" d="M230 190 A70 18 0 0 0 370 190"/><path class="pointille" fill="none" d="M230 190 A70 18 0 0 1 370 190"/><line class="trait" x1="300" y1="50" x2="230" y2="190"/><line class="trait" x1="300" y1="50" x2="370" y2="190"/><line x1="300" y1="50" x2="300" y2="190" stroke="var(--pigment)" stroke-width="2" stroke-dasharray="5 4"/><line class="trait-fin" x1="300" y1="190" x2="370" y2="190"/><path class="trait-fin" fill="none" d="M300 182 L308 182 L308 190"/><text class="texte" x="300" y="42" text-anchor="middle">S</text><text class="texte-pigment" x="306" y="125">h</text><text class="texte-petit" x="338" y="187" text-anchor="middle">r</text><text class="texte-petit" x="300" y="228" text-anchor="middle">cône</text></svg>` },
            { t: "exemple", titre: "Combien de côtés a la base ?", md: "Une pyramide dont la base a n côtés possède n arêtes sur la base et n arêtes latérales, soit 2n arêtes. Avec 12 arêtes : 2n = 12, donc n = 6. Sa base est un **hexagone**." },
          ],
        },
        {
          titre: "Calculer des volumes",
          blocs: [
            { t: "tableau", titre: "Les formules de volume", entetes: ["Solide", "Volume", "Exemple"], lignes: [["Pavé droit", "longueur × largeur × hauteur", "5 × 4 × 3 = 60 cm³"], ["Prisme droit", "aire de la base × hauteur", "12 × 7 = 84 cm³"], ["Cylindre", "π × r² × h", "π × 3² × 10 ≈ 283 cm³"], ["Pyramide", "(aire de la base × hauteur) ÷ 3", "36 × 10 ÷ 3 = 120 cm³"], ["Cône", "(π × r² × h) ÷ 3", "π × 2² × 9 ÷ 3 ≈ 37,7 cm³"]] },
            { t: "propriete", titre: "Pyramide et cône : diviser par 3", md: "**V = (aire de la base × hauteur) ÷ 3**.\nUne pyramide (ou un cône) contient exactement **trois fois moins** que le prisme (ou le cylindre) de même base et de même hauteur. On peut le vérifier en versant du sable : il faut trois cônes pleins pour remplir le cylindre." },
            { t: "exemple", titre: "Pyramide à base carrée de côté 6 cm, hauteur 10 cm", etapes: ["Aire de la base : 6 × 6 = 36 cm².", "Volume : 36 × 10 ÷ 3 = 120 cm³."] },
            { t: "exemple", titre: "Cylindre de rayon 3 cm et de hauteur 10 cm (π ≈ 3,14)", etapes: ["Aire du disque de base : π × r² ≈ 3,14 × 3 × 3 = 28,26 cm².", "Volume : 28,26 × 10 = 282,6 cm³, soit environ 283 cm³."] },
            { t: "attention", md: "π × r² signifie π × r × r, et non 2 × π × r, qui est la formule du **périmètre** du cercle. Avec r = 3 : r² = 9, pas 6. Et pour un cône ou une pyramide, n'oublie pas le **÷ 3**." },
            { t: "verifie", q: "Une pyramide a une base carrée de côté 6 cm et une hauteur de 10 cm. Quel est son volume ?", choix: ["360 cm³", "120 cm³", "60 cm³", "20 cm³"], bonne: 1, explication: "Aire de la base : 36 cm². V = 36 × 10 ÷ 3 = 120 cm³. La réponse 360 cm³ est celle d'un pavé : on a oublié de diviser par 3." },
          ],
        },
        {
          titre: "Volumes et contenances",
          blocs: [
            { t: "propriete", titre: "Les correspondances à connaître", md: "**1 L = 1 dm³** ; **1 m³ = 1 000 L** ; **1 cm³ = 1 mL**.\n2,5 m³ = 2,5 × 1 000 = **2 500 L**." },
            { t: "exemple", titre: "Un verre conique de rayon 4 cm et de hauteur 9 cm", etapes: ["V = π × r² × h ÷ 3 ≈ 3,14 × 16 × 9 ÷ 3.", "V ≈ 150,72 cm³.", "1 cm³ = 1 mL, donc V ≈ 150,72 mL.", "1 cL = 10 mL : V ≈ 15 cL (arrondi à l'unité)."] },
            { t: "verifie", q: "Quelle transformation fait glisser une figure sans la tourner ni la retourner ?", choix: ["Une rotation", "Une symétrie axiale", "Une translation", "Une symétrie centrale"], bonne: 2, explication: "La translation fait glisser la figure selon une flèche. La rotation la fait tourner, la symétrie axiale la retourne." },
          ],
        },
      ],
      bilan: "Les transformations déplacent sans déformer ; base × hauteur pour prismes et cylindres, divisé par 3 pour pyramides et cônes ; et 1 dm³ = 1 L.",
    },
    "4e-maths-12-algorithmique": {
      accroche: "Comment demander à un ordinateur de dessiner 100 carrés en spirale ? En écrivant 400 instructions à la main ? Non : avec une boucle, une variable et un bloc bien pensé, quelques lignes suffisent. C'est tout l'art de la programmation.",
      objectifs: [
        "Utiliser des variables, des boucles et des instructions conditionnelles",
        "Écrire et interpréter un script Scratch qui trace une figure",
        "Suivre l'évolution d'une variable pas à pas",
        "Décomposer un problème et créer un bloc personnalisé",
      ],
      sections: [
        {
          titre: "Les briques d'un programme",
          blocs: [
            { t: "definition", terme: "Variable", md: "Une **boîte nommée** qui contient une valeur pouvant **changer** pendant l'exécution du programme. « mettre score à 0 » range 0 dans la boîte ; « ajouter 1 à score » augmente son contenu de 1." },
            { t: "definition", terme: "Boucle", md: "Une structure qui **répète** des instructions : « répéter 4 fois », « répéter jusqu'à ce que… », « répéter indéfiniment »." },
            { t: "definition", terme: "Instruction conditionnelle", md: "Un choix selon un **test** : « si … alors … sinon … ». Si le test est vrai, on exécute le premier bloc ; sinon, le second." },
            { t: "tableau", titre: "Les notions et leurs blocs Scratch", entetes: ["Notion", "Exemple de bloc", "Catégorie"], lignes: [["Événement", "quand le drapeau vert est cliqué", "Événements"], ["Variable", "mettre score à 0", "Variables"], ["Boucle", "répéter 10 fois", "Contrôle"], ["Condition", "si réponse = 12 alors … sinon …", "Contrôle"], ["Déplacement", "avancer de 100 pas", "Mouvement"]] },
            { t: "exemple", titre: "Un quiz", md: "Script : demander « Combien font 3 × 4 ? » ; **si** réponse = 12 **alors** dire « Bravo » **sinon** dire « Non ». L'utilisateur tape 15 : le test « 15 = 12 » est faux, le lutin dit **« Non »**." },
          ],
        },
        {
          titre: "Suivre une variable pas à pas",
          blocs: [
            { t: "texte", md: "Pour comprendre un script, joue le rôle de l'ordinateur : note la valeur de chaque variable **après chaque passage** dans la boucle. Un tableau de suivi évite les erreurs." },
            { t: "tableau", titre: "mettre x à 3 ; répéter 4 fois : mettre x à x × 2", entetes: ["Moment", "Départ", "Tour 1", "Tour 2", "Tour 3", "Tour 4"], lignes: [["Valeur de x", "3", "6", "12", "24", "48"]] },
            { t: "exemple", titre: "Deux variables : s et i", etapes: ["mettre s à 0 ; mettre i à 1 ; répéter 4 fois : ajouter i à s, puis ajouter 1 à i.", "Tour 1 : s = 0 + 1 = 1, puis i = 2.", "Tour 2 : s = 1 + 2 = 3, puis i = 3.", "Tour 3 : s = 3 + 3 = 6, puis i = 4.", "Tour 4 : s = 6 + 4 = 10, puis i = 5. À la fin, s vaut 10."] },
            { t: "exemple", titre: "Une boucle avec une condition", md: "mettre compteur à 0 ; mettre i à 1 ; répéter 10 fois : **si** i est pair **alors** ajouter 1 à compteur ; puis ajouter 1 à i. i prend les valeurs 1 à 10 ; les pairs sont 2, 4, 6, 8, 10. Le compteur vaut **5**." },
            { t: "attention", md: "Dans « répéter jusqu'à ce que x > 10 », la boucle s'arrête **dès que** x devient strictement supérieur à 10. Si x vaut exactement 10, elle continue encore un tour !" },
            { t: "verifie", q: "Script : mettre score à 0 ; répéter 5 fois : ajouter 2 à score. Quelle est la valeur finale de score ?", choix: ["2", "7", "10", "25"], bonne: 2, explication: "Le score part de 0 et gagne 2 à chacun des 5 tours : 0 → 2 → 4 → 6 → 8 → 10." },
          ],
        },
        {
          titre: "Tracer des polygones réguliers",
          blocs: [
            { t: "etapes", titre: "Script : tracer un trait rouge de 100 pas", items: [{ titre: "Événement", md: "quand le drapeau vert est cliqué" }, { titre: "Couleur", md: "mettre la couleur du stylo à rouge" }, { titre: "Stylo", md: "stylo en position d'écriture" }, { titre: "Déplacement", md: "avancer de 100 pas" }] },
            { t: "schema", titre: "Le lutin trace un triangle équilatéral", legende: "Au coin B, le lutin allait tout droit (pointillés). Pour repartir vers C, il tourne de 120°, l'angle extérieur, et non de 60°.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M100 200 L260 200 L180 61 Z"/><line class="trait" x1="100" y1="200" x2="252" y2="200" marker-end="url(#fl)"/><line class="trait" x1="260" y1="200" x2="184" y2="68" marker-end="url(#fl)"/><line class="trait" x1="180" y1="61" x2="104" y2="193" marker-end="url(#fl)"/><line class="pointille" x1="260" y1="200" x2="330" y2="200"/><path fill="none" stroke="var(--pigment)" stroke-width="2" d="M285 200 A25 25 0 0 0 247.5 178.4" marker-end="url(#fl-p)"/><text class="texte-pigment" x="292" y="182">120°</text><text class="texte" x="94" y="214" text-anchor="end">A</text><text class="texte" x="262" y="216">B</text><text class="texte" x="180" y="52" text-anchor="middle">C</text><text class="texte-petit" x="180" y="218" text-anchor="middle">avancer de 80</text><text class="texte-petit" x="232" y="190" text-anchor="middle">60°</text><text class="texte-petit" x="96" y="228" text-anchor="middle">départ</text></svg>` },
            { t: "propriete", titre: "Polygone régulier à n côtés", md: "On répète **n fois** : avancer de la longueur du côté, puis **tourner de 360° ÷ n**. Le lutin fait un tour complet (360°) en revenant à son point de départ." },
            { t: "tableau", titre: "L'angle à tourner", entetes: ["Polygone", "Nombre de côtés", "Répéter", "Tourner de"], lignes: [["Triangle équilatéral", "3", "3 fois", "120°"], ["Carré", "4", "4 fois", "90°"], ["Pentagone régulier", "5", "5 fois", "72°"], ["Hexagone régulier", "6", "6 fois", "60°"], ["Octogone régulier", "8", "8 fois", "45°"]] },
            { t: "verifie", q: "Pour tracer un triangle équilatéral, de combien de degrés le lutin doit-il tourner à chaque coin ?", choix: ["60°", "90°", "120°", "180°"], bonne: 2, explication: "360° ÷ 3 = 120°. Les angles du triangle mesurent 60°, mais le lutin tourne de l'angle extérieur : 180° − 60° = 120°." },
          ],
        },
        {
          titre: "Décomposer : les blocs personnalisés",
          blocs: [
            { t: "texte", md: "Un gros problème se découpe en **petits problèmes**. Pour dessiner une maison, on trace un carré, puis un triangle pour le toit. Chaque morceau peut devenir un **bloc personnalisé** (une fonction) qu'on réutilise." },
            { t: "definition", terme: "Bloc personnalisé", md: "Un bloc qu'on crée soi-même pour **regrouper des instructions sous un nom**, parfois avec un **paramètre**. « carré (taille) » trace un carré dont le côté vaut le paramètre taille : répéter 4 fois, avancer de taille, tourner de 90°." },
            { t: "exemple", titre: "Une rangée de carrés de tailles différentes", md: "carré (30), carré (60), carré (90) : trois appels, trois tailles, un seul bloc écrit une fois. Si on veut changer la couleur, on modifie le bloc **une seule fois** et tous les carrés en profitent." },
            { t: "astuce", md: "L'intérêt d'un bloc personnalisé : **ne pas réécrire** plusieurs fois les mêmes instructions, rendre le script **plus lisible** et le corriger plus facilement." },
          ],
        },
      ],
      bilan: "Des variables pour mémoriser, des boucles pour répéter, des conditions pour choisir, des blocs pour découper : avec 360° ÷ n, le lutin trace tous les polygones réguliers.",
    },
  },
};
