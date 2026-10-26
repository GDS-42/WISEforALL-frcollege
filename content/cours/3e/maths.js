// Cours ÉCLORE — 3e Mathématiques. Schéma : docs/COURS.md
export default {
  id: "3e-maths",
  chapitres: {
    "3e-maths-01-arithmetique": {
      accroche: "Une fleuriste a 180 roses et 108 tulipes. Elle veut faire le plus grand nombre possible de bouquets tous identiques, sans laisser une seule fleur. Combien ? La réponse se cache dans les « atomes » des nombres : les nombres premiers.",
      objectifs: [
        "Utiliser les critères de divisibilité et reconnaître un nombre premier",
        "Décomposer un entier en produit de facteurs premiers",
        "Calculer un PGCD et rendre une fraction irréductible",
        "Résoudre un problème de partage en lots identiques",
      ],
      sections: [
        {
          titre: "Diviseurs et critères de divisibilité",
          blocs: [
            { t: "texte", md: "Dire que 7 est un **diviseur** de 84, c'est dire que la division de 84 par 7 tombe juste : 84 = 7 × 12. On dit aussi que 84 est un **multiple** de 7, ou que 84 est **divisible** par 7.\n\nPour savoir vite si une division tombe juste, sans poser l'opération, on utilise des critères." },
            { t: "tableau", titre: "Les critères à connaître", entetes: ["Divisible par…", "si…", "Exemple"], lignes: [["2", "le chiffre des unités est pair (0, 2, 4, 6, 8)", "4 726"], ["3", "la somme des chiffres est un multiple de 3", "4 725 : 4 + 7 + 2 + 5 = 18"], ["5", "le nombre se termine par 0 ou 5", "4 725"], ["9", "la somme des chiffres est un multiple de 9", "4 725 : 18 = 2 × 9"], ["10", "le nombre se termine par 0", "3 410"]] },
            { t: "exemple", titre: "Lister tous les diviseurs de 36", etapes: ["On cherche les produits qui donnent 36, en avançant de 1 en 1 : 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6.", "On s'arrête quand les deux facteurs se rejoignent (6 × 6).", "Les diviseurs de 36 sont 1, 2, 3, 4, 6, 9, 12, 18 et 36 : il y en a **9**."] },
          ],
        },
        {
          titre: "Les nombres premiers, briques des entiers",
          blocs: [
            { t: "definition", terme: "Nombre premier", md: "Un entier qui a **exactement deux diviseurs** : 1 et lui-même. Les premiers inférieurs à 30 sont : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29." },
            { t: "attention", md: "**1 n'est pas premier** : il n'a qu'un seul diviseur, lui-même. Et **2 est le seul nombre premier pair** : tout autre nombre pair est divisible par 2, il a donc au moins trois diviseurs." },
            { t: "propriete", titre: "Décomposition en facteurs premiers", md: "Tout entier supérieur à 1 s'écrit comme un produit de nombres premiers, et cette écriture est **unique** (à l'ordre près). Exemple : 84 = 2 × 2 × 3 × 7 = ==2² × 3 × 7==." },
            { t: "schema", titre: "L'arbre de 84", legende: "On casse 84 en deux facteurs, puis on recommence jusqu'à n'avoir que des nombres premiers (entourés).", svg: `<svg viewBox="0 0 400 240"><line class="trait-fin" x1="160" y1="36" x2="104" y2="66"/><line class="trait-fin" x1="160" y1="36" x2="216" y2="66"/><line class="trait-fin" x1="220" y1="86" x2="164" y2="116"/><line class="trait-fin" x1="220" y1="86" x2="276" y2="116"/><line class="trait-fin" x1="280" y1="136" x2="224" y2="166"/><line class="trait-fin" x1="280" y1="136" x2="336" y2="166"/><text class="texte" x="160" y="30" text-anchor="middle">84</text><circle class="aplat" cx="100" cy="76" r="14"/><circle class="trait-fin" cx="100" cy="76" r="14" fill="none"/><text class="texte" x="100" y="81" text-anchor="middle">2</text><text class="texte" x="220" y="81" text-anchor="middle">42</text><circle class="aplat" cx="160" cy="126" r="14"/><circle class="trait-fin" cx="160" cy="126" r="14" fill="none"/><text class="texte" x="160" y="131" text-anchor="middle">2</text><text class="texte" x="280" y="131" text-anchor="middle">21</text><circle class="aplat" cx="220" cy="176" r="14"/><circle class="trait-fin" cx="220" cy="176" r="14" fill="none"/><text class="texte" x="220" y="181" text-anchor="middle">3</text><circle class="aplat" cx="340" cy="176" r="14"/><circle class="trait-fin" cx="340" cy="176" r="14" fill="none"/><text class="texte" x="340" y="181" text-anchor="middle">7</text><text class="texte-main" x="200" y="226" text-anchor="middle">84 = 2 × 2 × 3 × 7 = 2² × 3 × 7</text></svg>` },
            { t: "etapes", titre: "Décomposer 126 par divisions successives", items: [{ titre: "Diviser par 2", md: "126 est pair : 126 ÷ 2 = 63." }, { titre: "Diviser par 3", md: "6 + 3 = 9 : 63 ÷ 3 = 21." }, { titre: "Encore par 3", md: "21 ÷ 3 = 7." }, { titre: "Arrêt", md: "7 est premier : on s'arrête." }, { titre: "Résultat", md: "126 = 2 × 3 × 3 × 7 = **2 × 3² × 7**." }] },
            { t: "verifie", q: "Lequel de ces nombres est premier ?", choix: ["1", "21", "29", "51"], bonne: 2, explication: "29 n'est divisible que par 1 et 29. 1 n'a qu'un diviseur, 21 = 3 × 7 et 51 = 3 × 17 (5 + 1 = 6, multiple de 3)." },
          ],
        },
        {
          titre: "Le PGCD et les fractions irréductibles",
          blocs: [
            { t: "definition", terme: "PGCD", md: "Le **plus grand diviseur commun** de deux entiers. Deux nombres dont le PGCD vaut 1 sont dits **premiers entre eux** : leur seul diviseur commun est 1." },
            { t: "propriete", titre: "Calculer un PGCD par décomposition", md: "On décompose les deux nombres, puis on garde les **facteurs communs**, chacun avec son **plus petit exposant**." },
            { t: "exemple", titre: "Rendre 84/126 irréductible", etapes: ["84 = 2² × 3 × 7 et 126 = 2 × 3² × 7.", "Facteurs communs : 2 (au plus petit exposant, 2¹), 3 (3¹) et 7.", "PGCD = 2 × 3 × 7 = 42.", "On divise en haut et en bas par 42 : 84/126 = 2/3, fraction irréductible car 2 et 3 sont premiers entre eux."] },
            { t: "astuce", md: "Avec des puissances, c'est encore plus rapide. Pour A = 2³ × 3 × 5² et B = 2² × 3² × 5, on prend le plus petit exposant de chaque facteur : PGCD = 2² × 3 × 5 = **60**." },
            { t: "verifie", q: "Quelle est la forme irréductible de 90/126 ?", choix: ["45/63", "15/21", "5/7", "10/14"], bonne: 2, explication: "90 = 2 × 3² × 5 et 126 = 2 × 3² × 7, donc PGCD = 2 × 3² = 18. 90 ÷ 18 = 5 et 126 ÷ 18 = 7. Les autres fractions sont égales mais encore simplifiables." },
          ],
        },
        {
          titre: "Problèmes de partage",
          blocs: [
            { t: "texte", md: "Revenons à la fleuriste. Chaque bouquet doit contenir le même nombre de roses et le même nombre de tulipes. Le nombre de bouquets doit donc **diviser 180 et diviser 108** : c'est un diviseur commun. Et on veut le plus grand : c'est le **PGCD**." },
            { t: "exemple", titre: "180 roses et 108 tulipes", etapes: ["180 = 2² × 3² × 5 et 108 = 2² × 3³.", "PGCD = 2² × 3² = 36.", "Elle fait **36 bouquets**.", "Chaque bouquet contient 180 ÷ 36 = 5 roses et 108 ÷ 36 = 3 tulipes."] },
            { t: "astuce", md: "Repère les mots-clés : « le plus grand nombre de lots identiques », « sans reste », « carreaux les plus grands possibles » : tous annoncent un PGCD." },
            { t: "savais-tu", md: "Divisible par 3 et par 4 ? Alors divisible par 12, car 3 et 4 sont premiers entre eux. Mais divisible par 2 et par 4 n'entraîne pas « par 8 » : 4 lui-même en est la preuve !" },
          ],
        },
      ],
      bilan: "Les nombres premiers sont les briques de tous les entiers : en décomposant, on voit ce que deux nombres ont en commun, leur PGCD, qui simplifie les fractions et règle les partages.",
    },
    "3e-maths-02-puissances-racines": {
      accroche: "Le Soleil est à 150 000 000 km de nous, un globule rouge mesure 0,000 007 m. Écrire tous ces zéros, c'est long et risqué. Les puissances de 10 permettent d'écrire l'immense et le minuscule en quelques signes.",
      objectifs: [
        "Appliquer les règles de calcul sur les puissances",
        "Écrire un nombre en notation scientifique et donner un ordre de grandeur",
        "Calculer avec les racines carrées sans tomber dans leurs pièges",
      ],
      sections: [
        {
          titre: "Les puissances et leurs règles",
          blocs: [
            { t: "definition", terme: "Puissance", md: "Pour un nombre a et un entier n ≥ 1, **aⁿ** = a × a × … × a (n facteurs). n s'appelle l'**exposant**. Exemple : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Par convention, a⁰ = 1 et a⁻ⁿ = 1/aⁿ (a ≠ 0)." },
            { t: "propriete", titre: "Règles de calcul", md: "• aⁿ × aᵐ = aⁿ⁺ᵐ (on **ajoute** les exposants)\n• aⁿ ÷ aᵐ = aⁿ⁻ᵐ (on les **soustrait**)\n• (aⁿ)ᵐ = aⁿ×ᵐ (on les **multiplie**)" },
            { t: "texte", md: "Pourquoi ? 10³ × 10⁵, c'est 3 facteurs 10 suivis de 5 autres : 8 facteurs en tout, donc 10⁸. Et (10²)³ = 10² × 10² × 10² = 10⁶." },
            { t: "attention", md: "Un exposant négatif ne rend pas le nombre négatif ! 10⁻² = 1/10² = **0,01**, et non −100. De même, 2⁵ n'est pas 2 × 5." },
            { t: "tableau", titre: "Les puissances de 10", entetes: ["Puissance", "Écriture décimale", "En mots"], lignes: [["10⁻³", "0,001", "un millième"], ["10⁻²", "0,01", "un centième"], ["10⁻¹", "0,1", "un dixième"], ["10⁰", "1", "un"], ["10³", "1 000", "mille"], ["10⁶", "1 000 000", "un million"], ["10⁹", "1 000 000 000", "un milliard"]] },
          ],
        },
        {
          titre: "La notation scientifique",
          blocs: [
            { t: "definition", terme: "Notation scientifique", md: "L'écriture **a × 10ⁿ** où a a **un seul chiffre non nul avant la virgule** (1 ≤ a < 10) et n est un entier relatif. Exemples : 150 000 000 = 1,5 × 10⁸ et 0,000 45 = 4,5 × 10⁻⁴." },
            { t: "astuce", md: "Compte de combien de rangs la virgule doit glisser. Vers la gauche (grand nombre) : exposant positif. Vers la droite (petit nombre) : exposant négatif. Pour 0,000 45, la virgule saute 4 rangs vers la droite jusqu'à 4,5 : exposant −4." },
            { t: "exemple", titre: "Calculer (3 × 10⁴) × (2 × 10⁻⁶)", etapes: ["On regroupe les nombres et les puissances : (3 × 2) × (10⁴ × 10⁻⁶).", "3 × 2 = 6 et 4 + (−6) = −2.", "Résultat : 6 × 10⁻² = **0,06**."] },
            { t: "texte", md: "L'**ordre de grandeur** d'un nombre est la puissance de 10 la plus proche. La distance Terre-Soleil, 1,5 × 10⁸ km, est de l'ordre de 10⁸ km. Pour (2 × 10³)², on calcule 2² × (10³)² = 4 × 10⁶." },
            { t: "verifie", q: "Quelle est la notation scientifique de 0,000 45 ?", choix: ["45 × 10⁻⁵", "4,5 × 10⁻⁴", "4,5 × 10⁴", "0,45 × 10⁻³"], bonne: 1, explication: "Il faut un seul chiffre non nul avant la virgule : 4,5. La virgule a glissé de 4 rangs vers la droite, donc l'exposant est −4. 45 × 10⁻⁵ et 0,45 × 10⁻³ sont égaux mais pas « scientifiques »." },
          ],
        },
        {
          titre: "La racine carrée",
          blocs: [
            { t: "definition", terme: "Racine carrée", md: "Pour a ≥ 0, **√a** est le nombre **positif** dont le carré vaut a. √49 = 7 car 7² = 49 et 7 ≥ 0. C'est aussi le côté d'un carré d'aire a." },
            { t: "tableau", titre: "Carrés parfaits à connaître par cœur", entetes: ["n", "n²", "n", "n²"], lignes: [["1", "1", "7", "49"], ["2", "4", "8", "64"], ["3", "9", "9", "81"], ["4", "16", "10", "100"], ["5", "25", "11", "121"], ["6", "36", "12", "144"]] },
            { t: "propriete", titre: "Propriétés", md: "Pour a ≥ 0 et b ≥ 0 : (√a)² = a et ==√a × √b = √(a × b)==.\nExemple : √2 × √8 = √16 = 4." },
            { t: "texte", md: "Quand a n'est pas un carré parfait, √a n'est pas un décimal : on en donne une valeur approchée à la calculatrice. √7 ≈ 2,65 au centième (car 2,65² ≈ 7,02)." },
          ],
        },
        {
          titre: "Le grand piège : √(a + b)",
          blocs: [
            { t: "attention", md: "**√(a + b) n'est pas égal à √a + √b.** Exemple : √(9 + 16) = √25 = **5**, alors que √9 + √16 = 3 + 4 = 7. La racine carrée se « partage » dans un produit, jamais dans une somme." },
            { t: "schema", titre: "Pourquoi 5 et pas 7 ?", legende: "Dans ce triangle rectangle, l'hypoténuse mesure √(3² + 4²) = 5 (Pythagore). Faire le tour par les deux côtés (3 + 4 = 7) est plus long que le raccourci.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M60 70 L60 190 L220 190 Z"/><path class="trait" d="M60 70 L60 190 L220 190 Z"/><path class="trait-fin" d="M60 178 L72 178 L72 190"/><text class="texte" x="46" y="135" text-anchor="end">3</text><text class="texte" x="140" y="210" text-anchor="middle">4</text><text class="texte-pigment" x="150" y="118">5 = √(9 + 16)</text><text class="texte" x="310" y="70" text-anchor="middle">Par les côtés :</text><text class="texte" x="310" y="90" text-anchor="middle">3 + 4 = 7</text><text class="texte" x="310" y="140" text-anchor="middle">Le raccourci :</text><text class="texte-pigment" x="310" y="160" text-anchor="middle">√(9 + 16) = 5</text><text class="texte-main" x="310" y="210" text-anchor="middle">5 ≠ 7</text></svg>` },
            { t: "verifie", q: "√(9 + 16) est égal à…", choix: ["7", "5", "25", "√9 + √16"], bonne: 1, explication: "On calcule d'abord sous la racine : 9 + 16 = 25, puis √25 = 5. Le résultat 7 vient de l'erreur √(a + b) = √a + √b." },
          ],
        },
      ],
      bilan: "Les exposants s'ajoutent quand on multiplie, la notation scientifique range l'infiniment grand et l'infiniment petit, et la racine carrée se partage dans un produit, jamais dans une somme.",
    },
    "3e-maths-03-calcul-litteral": {
      accroche: "Choisis un entier, ajoute 1, élève au carré, puis retire le carré du nombre de départ. Avec 10, tu trouves 21 ; avec 3, tu trouves 7 ; toujours un nombre impair ! Coïncidence ? Le calcul littéral permet de le prouver pour tous les nombres à la fois.",
      objectifs: [
        "Développer et réduire avec la double distributivité et les identités remarquables",
        "Factoriser avec un facteur commun ou avec a² − b²",
        "Traduire un programme de calcul et démontrer une propriété",
      ],
      sections: [
        {
          titre: "Réduire et développer",
          blocs: [
            { t: "texte", md: "**Réduire**, c'est regrouper les termes de même nature : les x² ensemble, les x ensemble, les nombres ensemble. 3x + 5 − x + 2 = **2x + 7**.\n\n**Développer**, c'est transformer un produit en somme." },
            { t: "propriete", titre: "Distributivité", md: "• Simple : k(a + b) = ka + kb. Exemple : 3(2x − 5) = 6x − 15.\n• Double : ==(a + b)(c + d) = ac + ad + bc + bd==. Chaque terme de la première parenthèse multiplie chaque terme de la seconde." },
            { t: "exemple", titre: "Développer et réduire (x + 3)(x − 2)", etapes: ["Quatre produits : x × x = x², x × (−2) = −2x, 3 × x = 3x, 3 × (−2) = −6.", "On écrit la somme : x² − 2x + 3x − 6.", "On réduit les termes en x : −2x + 3x = x.", "Résultat : **x² + x − 6**."] },
            { t: "attention", md: "Ne confonds pas produit et somme : 2x × 3x = 6x² (deux x multipliés), alors que 2x + 3x = 5x." },
          ],
        },
        {
          titre: "Les identités remarquables",
          blocs: [
            { t: "tableau", titre: "Trois égalités à connaître par cœur", entetes: ["Identité", "Exemple"], lignes: [["(a + b)² = a² + 2ab + b²", "(x + 5)² = x² + 10x + 25"], ["(a − b)² = a² − 2ab + b²", "(x − 4)² = x² − 8x + 16"], ["(a + b)(a − b) = a² − b²", "(x + 1)(x − 1) = x² − 1"]] },
            { t: "schema", titre: "(a + b)² vu comme une aire", legende: "Le grand carré de côté a + b se découpe en un carré a², un carré b² et deux rectangles ab.", svg: `<svg viewBox="0 0 400 250"><rect class="aplat-papier" x="40" y="30" width="130" height="130"/><rect class="aplat" x="170" y="30" width="70" height="130"/><rect class="aplat" x="40" y="160" width="130" height="70"/><rect class="aplat-papier" x="170" y="160" width="70" height="70"/><rect class="trait" x="40" y="30" width="200" height="200" fill="none"/><line class="trait-fin" x1="170" y1="30" x2="170" y2="230"/><line class="trait-fin" x1="40" y1="160" x2="240" y2="160"/><text class="texte" x="105" y="22" text-anchor="middle">a</text><text class="texte" x="205" y="22" text-anchor="middle">b</text><text class="texte" x="28" y="100" text-anchor="middle">a</text><text class="texte" x="28" y="200" text-anchor="middle">b</text><text class="texte-main" x="105" y="100" text-anchor="middle">a²</text><text class="texte-pigment" x="205" y="100" text-anchor="middle">ab</text><text class="texte-pigment" x="105" y="200" text-anchor="middle">ab</text><text class="texte-main" x="205" y="200" text-anchor="middle">b²</text><text class="texte" x="320" y="80" text-anchor="middle">(a + b)²</text><text class="texte" x="320" y="102" text-anchor="middle">= a² + 2ab + b²</text><text class="texte-petit" x="320" y="150" text-anchor="middle">et non a² + b² :</text><text class="texte-petit" x="320" y="168" text-anchor="middle">il manque les</text><text class="texte-petit" x="320" y="186" text-anchor="middle">deux rectangles ab</text></svg>` },
            { t: "attention", md: "**(a + b)² ≠ a² + b²** ! Avec a = 3 et b = 4 : (3 + 4)² = 49, alors que 3² + 4² = 25. La différence, 24, c'est le double produit 2ab = 2 × 3 × 4. De même, (x − 4)² n'est pas x² − 16 : c'est x² − 8x + 16." },
            { t: "verifie", q: "(a + b)² est égal à…", choix: ["a² + b²", "a² + 2ab + b²", "2a + 2b", "a² + ab + b²"], bonne: 1, explication: "(a + b)² = (a + b)(a + b) = a² + ab + ba + b² = a² + 2ab + b². Le piège a² + b² oublie le double produit." },
          ],
        },
        {
          titre: "Factoriser",
          blocs: [
            { t: "definition", terme: "Factoriser", md: "Transformer une somme en **produit**. C'est l'opération inverse du développement." },
            { t: "propriete", titre: "Deux outils", md: "• **Facteur commun** : kA + kB = k(A + B). Exemple : 7x + 14 = 7 × x + 7 × 2 = 7(x + 2).\n• **Différence de deux carrés** : a² − b² = (a − b)(a + b). Exemple : x² − 25 = x² − 5² = (x − 5)(x + 5)." },
            { t: "exemple", titre: "Factoriser (2x + 1)(x − 3) + (2x + 1)(x + 5)", etapes: ["Le facteur commun est la parenthèse entière (2x + 1).", "On l'écrit devant : (2x + 1)[(x − 3) + (x + 5)].", "On réduit le crochet : x − 3 + x + 5 = 2x + 2.", "Résultat : **(2x + 1)(2x + 2)**."] },
            { t: "astuce", md: "Pour vérifier une factorisation, développe-la : tu dois retrouver l'expression de départ." },
          ],
        },
        {
          titre: "Programmes de calcul et démonstrations",
          blocs: [
            { t: "texte", md: "Un programme de calcul se traduit en expression : « Choisir x, le multiplier par 2, ajouter 5 » donne **2x + 5**. Avec « ajouter 3, multiplier par le nombre de départ, soustraire 10 », on obtient (x + 3) × x − 10 ; en partant de 5 : 8 × 5 − 10 = 30." },
            { t: "exemple", titre: "Prouver que (n + 1)² − n² est toujours impair", etapes: ["On développe : (n + 1)² = n² + 2n + 1.", "On soustrait n² : n² + 2n + 1 − n² = 2n + 1.", "2n est pair, donc 2n + 1 est **impair**, quel que soit l'entier n.", "Vérification avec n = 10 : 11² − 10² = 121 − 100 = 21 = 2 × 10 + 1."] },
            { t: "attention", md: "Tester plusieurs exemples ne prouve rien : seul le calcul avec la lettre n vaut pour **tous** les nombres. En revanche, un seul contre-exemple suffit pour prouver qu'une affirmation est fausse." },
            { t: "verifie", q: "Pour tout nombre n, (n + 1)² − (n − 1)² est égal à…", choix: ["2", "4n", "2n²", "0"], bonne: 1, explication: "(n² + 2n + 1) − (n² − 2n + 1) = n² + 2n + 1 − n² + 2n − 1 = 4n. Attention au signe moins devant la parenthèse : il change tous les signes." },
          ],
        },
      ],
      bilan: "Développer transforme un produit en somme, factoriser fait le chemin inverse ; et avec une lettre, un seul calcul démontre une propriété pour tous les nombres à la fois.",
    },
    "3e-maths-04-equations-inequations": {
      accroche: "Léa a 12 ans, sa mère 40. Dans combien d'années la mère aura-t-elle exactement le double de l'âge de sa fille ? On peut tâtonner longtemps… ou poser une équation et la résoudre en trois lignes.",
      objectifs: [
        "Résoudre une équation du premier degré",
        "Résoudre une équation produit nul et une équation x² = a",
        "Résoudre une inéquation et représenter ses solutions sur une droite graduée",
        "Mettre un problème en équation",
      ],
      sections: [
        {
          titre: "Résoudre une équation du premier degré",
          blocs: [
            { t: "definition", terme: "Solution d'une équation", md: "Un nombre qui, mis à la place de l'inconnue, rend l'égalité **vraie**. Résoudre, c'est trouver **toutes** les solutions." },
            { t: "propriete", titre: "La règle de la balance", md: "On ne change pas les solutions d'une équation si l'on **ajoute** ou **soustrait** un même nombre aux deux membres, ou si l'on **multiplie** ou **divise** les deux membres par un même nombre **non nul**." },
            { t: "exemple", titre: "Résoudre 5x + 4 = 2x − 8", etapes: ["On regroupe les x à gauche : on soustrait 2x des deux côtés. 3x + 4 = −8.", "On isole 3x : on soustrait 4. 3x = −12.", "On divise par 3 : x = −4.", "Vérification : 5 × (−4) + 4 = −16 et 2 × (−4) − 8 = −16. ✓"] },
            { t: "astuce", md: "Termine toujours par la **vérification** : remplace x par ta solution dans chaque membre. Si les deux résultats sont égaux, tu es sûr de toi." },
          ],
        },
        {
          titre: "Équations produit nul et x² = a",
          blocs: [
            { t: "propriete", titre: "Produit nul", md: "==Un produit est nul si et seulement si l'un au moins de ses facteurs est nul.== Si A × B = 0, alors A = 0 ou B = 0." },
            { t: "etapes", titre: "Résoudre (x − 3)(2x + 8) = 0", items: [{ titre: "Reconnaître", md: "C'est un produit égal à 0 : une **équation produit nul**." }, { titre: "Séparer", md: "x − 3 = 0 **ou** 2x + 8 = 0." }, { titre: "Premier facteur", md: "x − 3 = 0 donne x = 3." }, { titre: "Second facteur", md: "2x + 8 = 0 donne 2x = −8, soit x = −4." }, { titre: "Conclure", md: "Deux solutions : **3 et −4**." }] },
            { t: "tableau", titre: "L'équation x² = a", entetes: ["Si…", "Nombre de solutions", "Exemple"], lignes: [["a > 0", "deux : √a et −√a", "x² = 49 : x = 7 ou x = −7"], ["a = 0", "une seule : 0", "x² = 0 : x = 0"], ["a < 0", "aucune (un carré n'est jamais négatif)", "x² = −9 : pas de solution"]] },
            { t: "attention", md: "N'oublie pas la **solution négative** : x² = 36 a deux solutions, 6 **et −6**, car (−6)² = 36 aussi. Autre piège : 2x = 0 a bien une solution, x = 0. « Égal à zéro » ne veut pas dire « impossible »." },
            { t: "verifie", q: "Quelles sont les solutions de x² = 49 ?", choix: ["7", "7 et −7", "24,5", "aucune"], bonne: 1, explication: "7² = 49 et (−7)² = 49 : il y a deux solutions. Oublier −7 est l'erreur la plus fréquente." },
          ],
        },
        {
          titre: "Les inéquations",
          blocs: [
            { t: "texte", md: "Une **inéquation** compare deux expressions avec <, >, ≤ ou ≥. Ses solutions ne sont plus un ou deux nombres, mais toute une **zone** de la droite graduée.\n\nOn la résout comme une équation, avec **une règle en plus**." },
            { t: "propriete", titre: "Changer le sens", md: "Quand on multiplie ou divise les deux membres par un nombre **négatif**, ==on change le sens de l'inégalité==. Exemple : −3x ≤ 12 donne x ≥ 12 ÷ (−3), soit **x ≥ −4**." },
            { t: "exemple", titre: "Résoudre 2x + 3 > 11", etapes: ["On soustrait 3 : 2x > 8.", "On divise par 2, nombre positif : le sens ne change pas. x > 4.", "Les solutions sont tous les nombres **strictement** supérieurs à 4 ; 4 lui-même n'en fait pas partie."] },
            { t: "schema", titre: "Représenter les solutions", legende: "Le trait épais montre les solutions. Crochet tourné vers les solutions : la borne est incluse (≤, ≥). Crochet tourné vers l'extérieur : elle est exclue (<, >).", svg: `<svg viewBox="0 0 400 220"><text class="texte" x="200" y="40" text-anchor="middle">x &gt; 4 : 4 est exclu</text><line class="trait-fin" x1="40" y1="80" x2="372" y2="80" marker-end="url(#fl)"/><path class="trait-fin" d="M50 75v10M75 75v10M100 75v10M125 75v10M150 75v10M175 75v10M200 75v10M225 75v10M250 75v10M275 75v10M300 75v10M325 75v10M350 75v10"/><line x1="200" y1="80" x2="362" y2="80" stroke="var(--pigment)" stroke-width="5"/><path d="M193 68 L200 68 L200 92 L193 92" fill="none" stroke="var(--pigment)" stroke-width="3"/><g class="texte-petit" text-anchor="middle"><text x="50" y="104">−2</text><text x="100" y="104">0</text><text x="150" y="104">2</text><text x="200" y="104">4</text><text x="250" y="104">6</text><text x="300" y="104">8</text><text x="350" y="104">10</text></g><text class="texte" x="200" y="145" text-anchor="middle">x ≤ 2 : 2 est inclus</text><line class="trait-fin" x1="40" y1="180" x2="372" y2="180" marker-end="url(#fl)"/><path class="trait-fin" d="M50 175v10M75 175v10M100 175v10M125 175v10M150 175v10M175 175v10M200 175v10M225 175v10M250 175v10M275 175v10M300 175v10M325 175v10M350 175v10"/><line x1="40" y1="180" x2="150" y2="180" stroke="var(--pigment)" stroke-width="5"/><path d="M143 168 L150 168 L150 192 L143 192" fill="none" stroke="var(--pigment)" stroke-width="3"/><g class="texte-petit" text-anchor="middle"><text x="50" y="204">−2</text><text x="100" y="204">0</text><text x="150" y="204">2</text><text x="200" y="204">4</text><text x="250" y="204">6</text><text x="300" y="204">8</text><text x="350" y="204">10</text></g></svg>` },
            { t: "droite", titre: "Tester des valeurs dans −3x ≤ 12 (solutions : x ≥ −4)", min: -6, max: 2, pas: 1, points: [{ x: -5, label: "−5 : non" }, { x: -4, label: "−4 : oui" }, { x: 0, label: "0 : oui" }] },
            { t: "verifie", q: "Quelles sont les solutions de −3x ≤ 12 ?", choix: ["x ≤ −4", "x ≥ −4", "x ≤ 4", "x ≥ 4"], bonne: 1, explication: "On divise par −3, un nombre négatif : on change le sens. x ≥ −4. Vérifie avec 0 : −3 × 0 = 0 ≤ 12, c'est vrai, et 0 ≥ −4." },
          ],
        },
        {
          titre: "Mettre un problème en équation",
          blocs: [
            { t: "liste", titre: "La méthode en cinq temps", ordonnee: true, items: ["**Choisir** l'inconnue et dire ce qu'elle représente.", "**Traduire** l'énoncé par une équation.", "**Résoudre** l'équation.", "**Vérifier** que la solution convient à l'énoncé.", "**Répondre** à la question par une phrase."] },
            { t: "exemple", titre: "L'âge de Léa", etapes: ["Soit t le nombre d'années cherché. Dans t ans, Léa aura 12 + t ans et sa mère 40 + t ans.", "On veut : 40 + t = 2(12 + t), soit 40 + t = 24 + 2t.", "On soustrait t et 24 : 16 = t.", "Vérification : dans 16 ans, Léa aura 28 ans et sa mère 56 ans, et 56 = 2 × 28. ✓", "Réponse : dans **16 ans**."] },
            { t: "exemple", titre: "Un rectangle", md: "La longueur est le triple de la largeur ℓ et le périmètre vaut 48 cm. Donc 2(ℓ + 3ℓ) = 48, soit 8ℓ = 48 et **ℓ = 6 cm** (longueur 18 cm ; 2 × (6 + 18) = 48 ✓)." },
          ],
        },
      ],
      bilan: "Une équation se résout en gardant la balance équilibrée ; un produit nul se coupe en deux équations ; x² = a cache souvent deux solutions ; et dans une inéquation, diviser par un négatif retourne le sens.",
    },
    "3e-maths-05-fonctions": {
      accroche: "Au marché, les pommes coûtent 2,50 € le kilo. À chaque masse correspond un seul prix : 1 kg, 2,50 € ; 2 kg, 5 €. Cette machine qui transforme un nombre en un autre, c'est une fonction. Et elle se dessine !",
      objectifs: [
        "Utiliser le vocabulaire image, antécédent et la notation f(x)",
        "Lire un tableau de valeurs et une courbe",
        "Reconnaître une fonction linéaire ou affine et sa droite",
        "Calculer le coefficient directeur et l'ordonnée à l'origine",
      ],
      sections: [
        {
          titre: "Une fonction, une machine à nombres",
          blocs: [
            { t: "definition", terme: "Fonction", md: "Une **fonction** f associe à chaque nombre x **un unique** nombre, noté **f(x)** (« f de x »). On écrit f : x ⟼ f(x)." },
            { t: "definition", terme: "Image et antécédent", md: "Si f(2) = 7, alors **7 est l'image de 2** par f, et **2 est un antécédent de 7**. Un nombre a toujours une seule image, mais il peut avoir zéro, un ou plusieurs antécédents." },
            { t: "attention", md: "Ne mélange pas le sens ! Dans f(2) = 7, le nombre « qui entre » (2) est l'antécédent, le nombre « qui sort » (7) est l'image. Dire « 2 est l'image de 7 » est faux." },
            { t: "exemple", titre: "Avec f(x) = 2x + 5", etapes: ["Image de 3 : f(3) = 2 × 3 + 5 = 11.", "Antécédent de 13 : on résout 2x + 5 = 13, donc 2x = 8 et x = 4.", "Vérification : f(4) = 8 + 5 = 13. ✓"] },
          ],
        },
        {
          titre: "Tableau de valeurs et courbe",
          blocs: [
            { t: "tableau", titre: "Tableau de valeurs de f(x) = x² − 1", entetes: ["x", "−3", "−2", "−1", "0", "1", "2", "3"], lignes: [["f(x)", "8", "3", "0", "−1", "0", "3", "8"]] },
            { t: "graphique", type: "courbe", titre: "Courbe de f(x) = x² − 1 (points du tableau)", donnees: [{ label: "−3", valeur: 8 }, { label: "−2", valeur: 3 }, { label: "−1", valeur: 0 }, { label: "0", valeur: -1 }, { label: "1", valeur: 0 }, { label: "2", valeur: 3 }, { label: "3", valeur: 8 }] },
            { t: "propriete", titre: "Lire un graphique", md: "Le point de la courbe d'abscisse x a pour ordonnée f(x).\n• **Image** : on part de l'axe des **abscisses** (horizontal), on monte jusqu'à la courbe, on lit l'ordonnée.\n• **Antécédents** : on part de l'axe des **ordonnées** (vertical), on va horizontalement jusqu'à la courbe, on lit **toutes** les abscisses." },
            { t: "texte", md: "Sur cette courbe, l'image de 2 est 3. Mais 3 a **deux antécédents** : −2 et 2, car la droite horizontale d'ordonnée 3 coupe la courbe deux fois. De même, si une courbe passe par (−1 ; 2), (0 ; 4) et (3 ; 2), les antécédents de 2 sont −1 et 3." },
            { t: "verifie", q: "Si f(2) = 7, laquelle de ces phrases est juste ?", choix: ["2 est l'image de 7", "7 est un antécédent de 2", "7 est l'image de 2", "f(7) = 2"], bonne: 2, explication: "On part de 2, la fonction donne 7 : 7 est l'image de 2, et 2 est un antécédent de 7." },
          ],
        },
        {
          titre: "Fonctions linéaires et affines",
          blocs: [
            { t: "definition", terme: "Fonction affine", md: "Une fonction de la forme **f(x) = ax + b**. Sa représentation graphique est une **droite**. a est le **coefficient directeur** (la pente), b l'**ordonnée à l'origine** : f(0) = b.\nCas particulier : si b = 0, f(x) = ax est **linéaire** ; sa droite passe par l'**origine**." },
            { t: "schema", titre: "Une droite affine, une droite linéaire", legende: "La droite de f coupe l'axe vertical en b = 1 ; quand x avance de 1, f(x) monte de a = 2. La droite de g passe par l'origine O.", svg: `<svg viewBox="0 0 400 250"><g class="trait-fin" opacity="0.3"><path d="M60 30V230M85 30V230M110 30V230M135 30V230M185 30V230M210 30V230M235 30V230M260 30V230M285 30V230M310 30V230M335 30V230M360 30V230M60 30H360M60 55H360M60 80H360M60 105H360M60 130H360M60 155H360M60 205H360M60 230H360"/></g><line class="trait" x1="50" y1="180" x2="375" y2="180" marker-end="url(#fl)"/><line class="trait" x1="160" y1="240" x2="160" y2="18" marker-end="url(#fl)"/><text class="texte-petit" x="152" y="194" text-anchor="end">O</text><text class="texte-petit" x="185" y="194" text-anchor="middle">1</text><text class="texte-petit" x="152" y="84" text-anchor="end">4</text><line x1="122.5" y1="230" x2="222.5" y2="30" stroke="var(--pigment)" stroke-width="2.5"/><line class="trait" x1="60" y1="230" x2="360" y2="80"/><path class="pointille" d="M185 105 H210 V55"/><text class="texte-petit" x="198" y="120" text-anchor="middle">+1</text><text class="texte-petit" x="216" y="84">+2</text><circle cx="160" cy="155" r="4" fill="var(--pigment)"/><text class="texte-pigment" x="150" y="152" text-anchor="end">b = 1</text><text class="texte-pigment" x="228" y="40">f(x) = 2x + 1</text><text class="texte" x="355" y="70" text-anchor="end">g(x) = 0,5x</text></svg>` },
            { t: "tableau", titre: "Valeurs des deux fonctions", entetes: ["x", "−1", "0", "1", "2"], lignes: [["f(x) = 2x + 1", "−1", "1", "3", "5"], ["g(x) = 0,5x", "−0,5", "0", "0,5", "1"]] },
            { t: "texte", md: "Une fonction linéaire traduit une **proportionnalité** : le prix des pommes est p(m) = 2,5m. Toute situation de proportionnalité se modélise ainsi. Si a > 0, la droite monte ; si a < 0, elle descend : f(x) = −2x + 3 a pour coefficient directeur −2." },
          ],
        },
        {
          titre: "Retrouver a et b",
          blocs: [
            { t: "propriete", titre: "Coefficient directeur", md: "Si la droite passe par les points d'abscisses x₁ et x₂ : ==a = (f(x₂) − f(x₁)) ÷ (x₂ − x₁)==. C'est « ce qui monte » divisé par « ce qui avance »." },
            { t: "exemple", titre: "f est affine, f(1) = 5 et f(3) = 11", etapes: ["a = (11 − 5) ÷ (3 − 1) = 6 ÷ 2 = 3.", "Donc f(x) = 3x + b. On utilise f(1) = 5 : 3 × 1 + b = 5, donc b = 2.", "Conclusion : f(x) = 3x + 2.", "Vérification : f(3) = 9 + 2 = 11. ✓"] },
            { t: "astuce", md: "Si un des points est sur l'axe vertical, b se lit directement : une droite qui passe par (0 ; 3) et (2 ; 7) a b = 3 et a = (7 − 3) ÷ 2 = 2." },
            { t: "verifie", q: "Pour f(x) = 4x − 1, que vaut l'ordonnée à l'origine ?", choix: ["4", "−1", "1", "3"], bonne: 1, explication: "Dans f(x) = ax + b, b est le nombre seul : ici b = −1, et f(0) = −1. Le coefficient directeur est a = 4." },
          ],
        },
      ],
      bilan: "Une fonction associe à chaque nombre une seule image ; les fonctions affines se dessinent en droites, de pente a et d'ordonnée à l'origine b, et les linéaires passent par l'origine.",
    },
    "3e-maths-06-pourcentages-grandeurs": {
      accroche: "Un pull augmente de 10 %, puis baisse de 10 %. Retrouve-t-il son prix de départ ? Non : il coûte 1 % de moins ! Pour ne plus se faire piéger, il suffit de penser « coefficient multiplicateur ».",
      objectifs: [
        "Calculer une évolution en pourcentage avec un coefficient multiplicateur",
        "Calculer avec des vitesses, des débits et des énergies, et convertir les unités",
        "Utiliser une échelle et l'effet d'un agrandissement sur aires et volumes",
      ],
      sections: [
        {
          titre: "Évolutions et coefficients multiplicateurs",
          blocs: [
            { t: "propriete", titre: "Coefficient multiplicateur", md: "• Augmenter de t %, c'est multiplier par **1 + t/100**.\n• Diminuer de t %, c'est multiplier par **1 − t/100**." },
            { t: "tableau", titre: "Quelques coefficients", entetes: ["Évolution", "Coefficient"], lignes: [["+20 %", "× 1,2"], ["+5 %", "× 1,05"], ["+100 % (doubler)", "× 2"], ["−15 %", "× 0,85"], ["−40 %", "× 0,6"], ["−50 % (moitié)", "× 0,5"]] },
            { t: "exemple", titre: "Un jeu à 80 € soldé à −15 %", md: "80 × 0,85 = **68 €**. Une seule multiplication, au lieu de calculer 15 % puis de soustraire." },
            { t: "definition", terme: "Taux d'évolution", md: "(valeur finale − valeur initiale) ÷ valeur initiale. Un abonnement qui passe de 50 € à 62 € : 12 ÷ 50 = 0,24, soit **+24 %**." },
          ],
        },
        {
          titre: "Évolutions successives et retour en arrière",
          blocs: [
            { t: "propriete", titre: "Évolutions successives", md: "Deux évolutions successives se **multiplient**, elles ne s'additionnent pas. +10 % puis −10 % : × 1,1 × 0,9 = × 0,99, soit **−1 %**." },
            { t: "attention", md: "+50 % puis encore +50 %, ce n'est pas +100 % : 1,5 × 1,5 = 2,25, soit **+125 %**. Le second pourcentage porte sur un prix déjà augmenté." },
            { t: "exemple", titre: "Après une hausse de 25 %, un article coûte 75 €. Prix de départ ?", etapes: ["Le coefficient de la hausse est 1,25 : prix initial × 1,25 = 75.", "On fait l'opération inverse : 75 ÷ 1,25 = 60.", "Le prix initial était **60 €**. Vérification : 60 × 1,25 = 75. ✓", "Retirer 25 % de 75 donnerait 56,25 € : c'est faux, car les 25 % portaient sur 60, pas sur 75."] },
            { t: "verifie", q: "Une hausse de 10 % suivie d'une baisse de 10 % ramène-t-elle au prix de départ ?", choix: ["Oui, les deux s'annulent", "Non, on perd 1 %", "Non, on gagne 1 %"], bonne: 1, explication: "1,1 × 0,9 = 0,99 : le prix final vaut 99 % du prix initial. La baisse de 10 % s'applique à un prix plus grand." },
          ],
        },
        {
          titre: "Grandeurs composées",
          blocs: [
            { t: "texte", md: "Une **grandeur composée** se calcule à partir de deux autres. Une **vitesse** relie une distance et une durée, un **débit** un volume et une durée, une **énergie** une puissance et une durée." },
            { t: "tableau", titre: "Trois formules", entetes: ["Grandeur", "Formule", "Unités"], lignes: [["Vitesse", "distance ÷ durée", "km/h, m/s"], ["Débit", "volume ÷ durée", "L/min, m³/s"], ["Énergie", "puissance × durée", "kWh (kW × h)"]] },
            { t: "exemple", titre: "Trois calculs", etapes: ["Un train fait 150 km en 1 h 15 min = 1,25 h : v = 150 ÷ 1,25 = **120 km/h**.", "Convertir 90 km/h : 90 000 m en 3 600 s, soit 90 000 ÷ 3 600 = **25 m/s**.", "Un radiateur de 1 500 W = 1,5 kW pendant 4 h : E = 1,5 × 4 = **6 kWh**."] },
            { t: "attention", md: "1 h 15 min ne vaut pas 1,15 h ! 15 min, c'est un quart d'heure : **1,25 h**. Et pour passer des km/h aux m/s, on **divise par 3,6**." },
          ],
        },
        {
          titre: "Échelles, agrandissements et réductions",
          blocs: [
            { t: "texte", md: "Sur une carte à l'échelle **1/25 000**, 1 cm représente 25 000 cm = 250 m. Deux villages à 4 cm sur la carte sont donc à 4 × 250 m = **1 km**." },
            { t: "propriete", titre: "Effet d'un agrandissement ou d'une réduction de rapport k", md: "Les **longueurs** sont multipliées par **k**, les **aires** par **k²**, les **volumes** par **k³**. (Agrandissement si k > 1, réduction si 0 < k < 1.)" },
            { t: "schema", titre: "Tripler les côtés d'un carré", legende: "Côté × 3 : le grand carré contient 3 × 3 = 9 petits carrés. Pour un cube, il en contiendrait 3 × 3 × 3 = 27.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat" x="40" y="110" width="40" height="40"/><rect class="trait" x="40" y="110" width="40" height="40" fill="none"/><text class="texte-petit" x="60" y="168" text-anchor="middle">1</text><line class="trait-fin" x1="88" y1="130" x2="122" y2="130" marker-end="url(#fl)"/><text class="texte-main" x="105" y="120" text-anchor="middle">× 3</text><rect class="aplat" x="130" y="50" width="120" height="120"/><path class="trait-fin" d="M170 50V170M210 50V170M130 90H250M130 130H250"/><rect class="trait" x="130" y="50" width="120" height="120" fill="none"/><text class="texte-petit" x="190" y="188" text-anchor="middle">3</text><text class="texte" x="265" y="80">longueurs × 3</text><text class="texte" x="265" y="110">aires × 3² = 9</text><text class="texte" x="265" y="140">volumes × 3³ = 27</text><text class="texte-main" x="200" y="218" text-anchor="middle">9 petits carrés dans le grand</text></svg>` },
            { t: "tableau", titre: "Rapport k et ses effets", entetes: ["Rapport k", "Longueurs × k", "Aires × k²", "Volumes × k³"], lignes: [["2", "× 2", "× 4", "× 8"], ["3", "× 3", "× 9", "× 27"], ["1/2", "× 0,5", "× 0,25", "× 0,125"]] },
            { t: "exemple", titre: "Deux applications", etapes: ["Un cube d'arête 2 cm a un volume de 8 cm³. On triple l'arête : le volume est multiplié par 27, il vaut 8 × 27 = **216 cm³** (et 6³ = 216 ✓).", "Un solide de 400 cm³ réduit de rapport 1/2 : 400 × (1/2)³ = 400 ÷ 8 = **50 cm³**."] },
            { t: "verifie", q: "On agrandit une figure avec un rapport 3. Par combien son aire est-elle multipliée ?", choix: ["3", "6", "9", "27"], bonne: 2, explication: "Une aire est un produit de deux longueurs, chacune multipliée par 3 : l'aire est multipliée par 3² = 9. 27 = 3³ concerne les volumes." },
          ],
        },
      ],
      bilan: "Une évolution, c'est une multiplication ; deux évolutions, deux multiplications. Et quand les longueurs sont multipliées par k, les aires le sont par k² et les volumes par k³.",
    },
    "3e-maths-07-statistiques": {
      accroche: "Deux classes ont exactement la même moyenne au contrôle : 12. Pourtant, dans l'une, tout le monde a entre 10 et 14, et dans l'autre, les notes vont de 5 à 19. Une moyenne seule ne raconte pas toute l'histoire : il faut d'autres indicateurs.",
      objectifs: [
        "Calculer une moyenne (simple ou pondérée), une médiane et une étendue",
        "Calculer des fréquences et des effectifs cumulés",
        "Comparer deux séries et interpréter les indicateurs",
        "Utiliser un tableur et choisir un diagramme adapté",
      ],
      sections: [
        {
          titre: "La moyenne",
          blocs: [
            { t: "definition", terme: "Moyenne", md: "La somme de toutes les valeurs divisée par l'**effectif total** (le nombre de valeurs). Pour 8 ; 12 ; 15 ; 9 ; 12 ; 14 ; 10 ; 16 : la somme vaut 96, l'effectif 8, la moyenne **96 ÷ 8 = 12**." },
            { t: "propriete", titre: "Moyenne pondérée", md: "Quand des valeurs se répètent ou ont des coefficients, on **multiplie chaque valeur par son effectif** (ou son coefficient), on additionne, puis on divise par la somme des effectifs (ou des coefficients)." },
            { t: "graphique", type: "barres", titre: "Notes d'un groupe de 10 élèves", unite: "élèves", donnees: [{ label: "5/20", valeur: 2 }, { label: "10/20", valeur: 5 }, { label: "15/20", valeur: 3 }] },
            { t: "exemple", titre: "Deux moyennes pondérées", etapes: ["Le groupe ci-dessus : (2 × 5 + 5 × 10 + 3 × 15) ÷ 10 = (10 + 50 + 45) ÷ 10 = **10,5**.", "Un élève a 10 (coef. 1), 14 (coef. 2) et 8 (coef. 3) : (10 + 28 + 24) ÷ 6 = 62 ÷ 6 ≈ **10,33**.", "Une série de 9 notes de moyenne 11 a une somme de 99. Avec une 10e note de 16 : 115 ÷ 10 = **11,5**."] },
          ],
        },
        {
          titre: "La médiane et l'étendue",
          blocs: [
            { t: "definition", terme: "Médiane", md: "Une valeur qui partage la série **rangée dans l'ordre croissant** en deux moitiés de même effectif : au moins la moitié des valeurs lui sont inférieures ou égales, au moins la moitié supérieures ou égales." },
            { t: "etapes", titre: "Trouver la médiane", items: [{ titre: "Ranger", md: "On range les valeurs dans l'ordre croissant." }, { titre: "Compter", md: "On compte l'effectif N." }, { titre: "N impair", md: "La médiane est la valeur du milieu, de rang (N + 1) ÷ 2. Pour 11 valeurs : la 6e." }, { titre: "N pair", md: "La médiane est la moyenne des deux valeurs du milieu, de rangs N ÷ 2 et N ÷ 2 + 1." }] },
            { t: "exemple", titre: "Deux séries", etapes: ["3 ; 7 ; 12 ; 5 ; 20 se range en 3 ; 5 ; **7** ; 12 ; 20. Cinq valeurs : la médiane est la 3e, **7**.", "2 ; 4 ; 5 ; 9 ; 10 ; 15 : six valeurs. Les deux du milieu sont 5 et 9 : médiane = (5 + 9) ÷ 2 = **7**.", "Pour 8 ; 12 ; 15 ; 9 ; 12 ; 14 ; 10 ; 16, rangée 8 ; 9 ; 10 ; 12 ; 12 ; 14 ; 15 ; 16 : médiane = (12 + 12) ÷ 2 = 12."] },
            { t: "attention", md: "Ne cherche **jamais** la médiane sans avoir rangé la série ! Et ne confonds pas médiane et moyenne : dans 3 ; 5 ; 7 ; 12 ; 20, la médiane vaut 7 mais la moyenne 47 ÷ 5 = 9,4. La valeur extrême 20 tire la moyenne vers le haut, pas la médiane." },
            { t: "definition", terme: "Étendue", md: "Valeur maximale − valeur minimale. Pour 4 ; 9 ; 15 ; 2 ; 11 : 15 − 2 = **13**. Elle mesure la **dispersion** : plus elle est grande, plus les valeurs sont étalées." },
            { t: "verifie", q: "Deux classes ont une moyenne de 12. L'étendue est de 4 dans la classe A et de 14 dans la classe B. Que peut-on dire ?", choix: ["La classe B a de meilleures notes", "Les notes de B sont plus dispersées", "Les deux classes ont les mêmes notes"], bonne: 1, explication: "Même moyenne, mais une étendue bien plus grande : les notes de B sont plus étalées, avec des notes très basses et très hautes. A est plus homogène." },
          ],
        },
        {
          titre: "Fréquences et effectifs cumulés",
          blocs: [
            { t: "definition", terme: "Fréquence", md: "Effectif d'une valeur ÷ effectif total. On l'écrit souvent en pourcentage. L'**effectif cumulé croissant** additionne les effectifs au fur et à mesure." },
            { t: "tableau", titre: "Taille des 25 élèves d'une classe", entetes: ["Taille", "Effectif", "Effectif cumulé", "Fréquence"], lignes: [["moins de 150 cm", "5", "5", "5 ÷ 25 = 20 %"], ["de 150 à 160 cm", "12", "17", "12 ÷ 25 = 48 %"], ["plus de 160 cm", "8", "25", "8 ÷ 25 = 32 %"], ["Total", "25", "", "100 %"]] },
            { t: "texte", md: "Lecture : 17 élèves mesurent **moins de 160 cm** (5 + 12). La somme des fréquences vaut toujours 100 %, et le dernier effectif cumulé est l'effectif total." },
          ],
        },
        {
          titre: "Tableur et diagrammes",
          blocs: [
            { t: "texte", md: "Dans un tableur, une formule commence **toujours par =**. Si les notes sont dans les cellules B2 à B11, on écrit **=MOYENNE(B2:B11)** pour la moyenne, **=SOMME(B2:B11)** pour la somme, **=MAX(B2:B11) − MIN(B2:B11)** pour l'étendue et =MEDIANE(B2:B11) pour la médiane. « B2:B11 » désigne toute la plage de B2 à B11." },
            { t: "tableau", titre: "Quel diagramme choisir ?", entetes: ["Pour montrer…", "Diagramme"], lignes: [["des parts d'un tout (répartition en %)", "circulaire"], ["des effectifs à comparer", "en bâtons ou en barres"], ["une évolution dans le temps", "courbe"]] },
            { t: "verifie", q: "Les notes sont en B2 à B11. Quelle formule calcule leur moyenne ?", choix: ["MOYENNE(B2:B11)", "=MOYENNE(B2:B11)", "=SOMME(B2:B11)", "=MOYENNE(B2+B11)"], bonne: 1, explication: "Une formule commence par = et B2:B11 désigne toute la plage. B2+B11 n'additionnerait que deux cellules, et SOMME donne le total, pas la moyenne." },
          ],
        },
      ],
      bilan: "La moyenne résume, la médiane coupe la série en deux, l'étendue mesure l'étalement : ensemble, ils décrivent une série bien mieux qu'un seul nombre.",
    },
    "3e-maths-08-probabilites": {
      accroche: "Une pièce est tombée sur « face » sept fois de suite. Au huitième lancer, « pile » est-il plus probable ? Beaucoup de joueurs le croient… et ils ont tort. Les probabilités apprennent à raisonner juste face au hasard.",
      objectifs: [
        "Décrire une expérience aléatoire, ses issues et ses événements",
        "Calculer la probabilité d'un événement et de son contraire",
        "Utiliser un arbre ou un tableau pour deux épreuves",
        "Relier fréquence observée et probabilité",
      ],
      sections: [
        {
          titre: "Expériences aléatoires et issues",
          blocs: [
            { t: "definition", terme: "Expérience aléatoire", md: "Une expérience dont on connaît tous les résultats possibles, appelés **issues**, mais dont on ne peut pas prévoir le résultat. Un **événement** est un ensemble d'issues : « obtenir un nombre pair » avec un dé, c'est {2 ; 4 ; 6}." },
            { t: "propriete", titre: "Issues équiprobables", md: "Quand toutes les issues ont la même chance de se produire : ==P(A) = nombre d'issues favorables ÷ nombre d'issues possibles==. Une probabilité est toujours comprise entre **0** (impossible) et **1** (certain), et la somme des probabilités de toutes les issues vaut 1." },
            { t: "exemple", titre: "Trois calculs", etapes: ["Dé équilibré, nombre pair : 3 issues favorables sur 6, P = 3/6 = **1/2**.", "Urne de 3 rouges, 5 bleues, 2 vertes : P(rouge) = 3/10 = **0,3**.", "Roue de 8 secteurs identiques numérotés de 1 à 8 : multiple de 3 (3 ou 6), P = 2/8 ; « plus grand que 8 » est impossible, P = 0."] },
            { t: "attention", md: "« 4 secteurs, donc 1/4 chacun » n'est vrai que si les secteurs sont **identiques**. Sur une roue aux secteurs de tailles différentes, les issues ne sont pas équiprobables." },
          ],
        },
        {
          titre: "L'événement contraire",
          blocs: [
            { t: "propriete", titre: "Contraire", md: "L'événement contraire de A, noté « non A », se réalise quand A ne se réalise pas. ==P(non A) = 1 − P(A)==, autrement dit P(A) + P(non A) = 1." },
            { t: "exemple", titre: "Pluie ou pas pluie", md: "La probabilité qu'il pleuve demain est 0,35. Celle qu'il ne pleuve pas : 1 − 0,35 = **0,65**." },
            { t: "astuce", md: "Le contraire de « **au moins un** 6 » est « **aucun** 6 », et non « exactement un 6 » ni « deux 6 ». Quand « au moins » apparaît, passer par le contraire est souvent plus rapide." },
            { t: "verifie", q: "On lance deux dés. Quel est le contraire de « obtenir au moins un 6 » ?", choix: ["Obtenir exactement un 6", "N'obtenir aucun 6", "Obtenir deux 6"], bonne: 1, explication: "« Au moins un 6 » regroupe « un 6 » et « deux 6 ». Ce qui reste, c'est « aucun 6 »." },
          ],
        },
        {
          titre: "Deux épreuves : arbres et tableaux",
          blocs: [
            { t: "texte", md: "Une urne contient 2 boules rouges (R) et 3 bleues (B). On tire une boule, on note sa couleur, **on la remet**, puis on en tire une seconde. Un **arbre** représente toutes les possibilités." },
            { t: "schema", titre: "Arbre des deux tirages avec remise", legende: "Sur chaque branche, la probabilité. La probabilité d'un chemin est le produit des probabilités de ses branches. Les quatre résultats font 25/25 = 1.", svg: `<svg viewBox="0 0 400 240"><circle cx="30" cy="120" r="4" fill="var(--encre)"/><line class="trait-fin" x1="34" y1="118" x2="138" y2="62"/><line class="trait-fin" x1="34" y1="122" x2="138" y2="178"/><line class="trait-fin" x1="162" y1="60" x2="278" y2="32"/><line class="trait-fin" x1="162" y1="60" x2="278" y2="90"/><line class="trait-fin" x1="162" y1="180" x2="278" y2="150"/><line class="trait-fin" x1="162" y1="180" x2="278" y2="208"/><text class="texte" x="150" y="64" text-anchor="middle">R</text><text class="texte" x="150" y="184" text-anchor="middle">B</text><text class="texte-pigment" x="72" y="82" text-anchor="middle">2/5</text><text class="texte-pigment" x="72" y="170" text-anchor="middle">3/5</text><text class="texte" x="290" y="36" text-anchor="middle">R</text><text class="texte" x="290" y="94" text-anchor="middle">B</text><text class="texte" x="290" y="154" text-anchor="middle">R</text><text class="texte" x="290" y="212" text-anchor="middle">B</text><text class="texte-petit" x="214" y="38" text-anchor="middle">2/5</text><text class="texte-petit" x="214" y="94" text-anchor="middle">3/5</text><text class="texte-petit" x="214" y="158" text-anchor="middle">2/5</text><text class="texte-petit" x="214" y="214" text-anchor="middle">3/5</text><text class="texte-petit" x="308" y="36">RR : 4/25</text><text class="texte-petit" x="308" y="94">RB : 6/25</text><text class="texte-petit" x="308" y="154">BR : 6/25</text><text class="texte-petit" x="308" y="212">BB : 9/25</text></svg>` },
            { t: "exemple", titre: "Probabilité d'obtenir deux rouges", etapes: ["On suit le chemin R puis R.", "On multiplie : 2/5 × 2/5 = **4/25**.", "Autre lecture : 5 × 5 = 25 couples équiprobables, dont 2 × 2 = 4 donnent rouge-rouge.", "Deux fois « pile » avec une pièce : 1/2 × 1/2 = 1/4 = **0,25**."] },
            { t: "tableau", titre: "Somme de deux dés : 36 issues équiprobables", entetes: ["+", "1", "2", "3", "4", "5", "6"], lignes: [["**1**", "2", "3", "4", "5", "6", "**7**"], ["**2**", "3", "4", "5", "6", "**7**", "8"], ["**3**", "4", "5", "6", "**7**", "8", "9"], ["**4**", "5", "6", "**7**", "8", "9", "10"], ["**5**", "6", "**7**", "8", "9", "10", "11"], ["**6**", "**7**", "8", "9", "10", "11", "12"]] },
            { t: "texte", md: "La somme 7 apparaît **6 fois** sur la diagonale : P(somme = 7) = 6/36 = 1/6. C'est la somme la plus probable, alors que 2 et 12 n'apparaissent qu'une fois." },
          ],
        },
        {
          titre: "Fréquence et probabilité",
          blocs: [
            { t: "propriete", titre: "Loi des grands nombres", md: "Quand on répète une expérience un **grand nombre de fois**, la fréquence observée d'un événement se rapproche de sa probabilité. Sur 1 000 lancers d'une pièce équilibrée, la fréquence de « pile » sera proche de 0,5." },
            { t: "attention", md: "Le hasard n'a pas de mémoire : chaque lancer est **indépendant** des précédents. Après sept « face », la probabilité de « face » au 8e lancer reste **1/2**." },
            { t: "verifie", q: "Une pièce équilibrée a donné « face » 7 fois de suite. Probabilité d'obtenir « face » au 8e lancer ?", choix: ["Moins de 1/2", "1/2", "Plus de 1/2", "1/256"], bonne: 1, explication: "La pièce ne se souvient de rien : chaque lancer donne « face » avec la probabilité 1/2. 1/256 = (1/2)⁸ serait la probabilité de 8 « face » de suite, calculée avant de lancer." },
          ],
        },
      ],
      bilan: "Une probabilité compte les issues favorables parmi les issues possibles ; le contraire se calcule par 1 − P ; un arbre multiplie le long des chemins ; et la fréquence rejoint la probabilité sur un grand nombre d'essais.",
    },
    "3e-maths-09-thales": {
      accroche: "Comment Thalès de Milet aurait-il mesuré la hauteur de la grande pyramide sans y grimper ? Avec un bâton planté dans le sable et les ombres du soleil. Le secret : deux triangles de même forme, l'un minuscule, l'autre géant.",
      objectifs: [
        "Reconnaître une configuration de Thalès (triangle ou papillon) et écrire les rapports égaux",
        "Calculer une longueur avec le théorème de Thalès",
        "Démontrer que deux droites sont parallèles ou non avec la réciproque",
        "Utiliser les triangles semblables et le rapport k",
      ],
      sections: [
        {
          titre: "Le théorème de Thalès",
          blocs: [
            { t: "propriete", titre: "Théorème de Thalès", md: "Les droites (BM) et (CN) se coupent en A. **Si** (MN) // (BC), **alors** ==AM/AB = AN/AC = MN/BC==." },
            { t: "schema", titre: "Configuration « triangle »", legende: "M est sur [AB], N sur [AC] et (MN) est parallèle à (BC) : le petit triangle AMN est une réduction du grand triangle ABC.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M200 25 L116 139 L284 139 Z"/><path class="trait" d="M200 25 L60 215 L340 215 Z"/><line x1="116" y1="139" x2="284" y2="139" stroke="var(--pigment)" stroke-width="2.5"/><line x1="60" y1="215" x2="340" y2="215" stroke="var(--pigment)" stroke-width="2.5"/><circle cx="116" cy="139" r="3" fill="var(--encre)"/><circle cx="284" cy="139" r="3" fill="var(--encre)"/><text class="texte" x="200" y="17" text-anchor="middle">A</text><text class="texte" x="52" y="228" text-anchor="end">B</text><text class="texte" x="348" y="228">C</text><text class="texte" x="106" y="140" text-anchor="end">M</text><text class="texte" x="294" y="140">N</text><text class="texte-petit" x="200" y="182" text-anchor="middle">(MN) // (BC)</text></svg>` },
            { t: "schema", titre: "Configuration « papillon »", legende: "Les droites (AB) et (CD) se coupent en O, et (AC) // (BD). Les deux triangles sont de part et d'autre de O : OA/OB = OC/OD = AC/BD.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M200 120 L120 70 L120 170 Z"/><path class="aplat" d="M200 120 L320 45 L320 195 Z"/><line class="trait" x1="120" y1="70" x2="320" y2="195"/><line class="trait" x1="120" y1="170" x2="320" y2="45"/><line x1="120" y1="70" x2="120" y2="170" stroke="var(--pigment)" stroke-width="2.5"/><line x1="320" y1="45" x2="320" y2="195" stroke="var(--pigment)" stroke-width="2.5"/><circle cx="200" cy="120" r="3" fill="var(--encre)"/><text class="texte" x="200" y="104" text-anchor="middle">O</text><text class="texte" x="112" y="66" text-anchor="end">A</text><text class="texte" x="112" y="182" text-anchor="end">C</text><text class="texte" x="330" y="42">D</text><text class="texte" x="330" y="205">B</text><text class="texte-petit" x="200" y="226" text-anchor="middle">(AC) // (BD)</text></svg>` },
            { t: "attention", md: "Le théorème ne s'applique que si l'on **sait** que les droites sont parallèles. Sans cette hypothèse, aucun rapport n'est égal à coup sûr. Et chaque rapport compare le petit triangle au grand, **dans le même ordre**, en partant du sommet commun." },
          ],
        },
        {
          titre: "Calculer une longueur",
          blocs: [
            { t: "exemple", titre: "Configuration triangle", etapes: ["M ∈ [AB], N ∈ [AC], (MN) // (BC), AM = 3 cm, AB = 5 cm, AN = 4,5 cm. On cherche AC.", "Thalès : AM/AB = AN/AC, donc 3/5 = 4,5/AC.", "Produit en croix : AC = 4,5 × 5 ÷ 3 = **7,5 cm**."] },
            { t: "exemple", titre: "Configuration papillon", etapes: ["(AB) et (CD) se coupent en O, (AC) // (BD), OA = 4 cm, OB = 6 cm, OC = 5 cm.", "Thalès : OA/OB = OC/OD, donc 4/6 = 5/OD.", "OD = 5 × 6 ÷ 4 = **7,5 cm**."] },
            { t: "exemple", titre: "L'ombre de l'arbre", md: "Au même instant, un bâton de 1,5 m a une ombre de 2 m et un arbre une ombre de 12 m. Les rayons du soleil sont parallèles : h/1,5 = 12/2, donc h = 1,5 × 6 = **9 m**." },
            { t: "verifie", q: "M ∈ [AB], N ∈ [AC] et (MN) // (BC). Quelle égalité est juste ?", choix: ["AM/AB = AN/AC", "AM/MB = AC/AN", "AB/AM = AN/AC", "MN/AB = BC/AC"], bonne: 0, explication: "On compare le petit triangle AMN au grand ABC, côté par côté et dans le même ordre : AM/AB = AN/AC = MN/BC." },
          ],
        },
        {
          titre: "La réciproque : prouver un parallélisme",
          blocs: [
            { t: "propriete", titre: "Réciproque du théorème de Thalès", md: "**Si** les points A, M, B et A, N, C sont alignés **dans le même ordre** et **si** AM/AB = AN/AC, **alors** (MN) // (BC).\nSi les rapports sont différents, les droites ne sont **pas** parallèles." },
            { t: "etapes", titre: "Rédiger avec la réciproque (O, A, B et O, C, D alignés dans cet ordre)", items: [{ titre: "Calculer un rapport", md: "OA = 3 cm, OB = 4,5 cm : OA/OB = 3/4,5 = 2/3." }, { titre: "Calculer l'autre", md: "OC = 4 cm, OD = 6 cm : OC/OD = 4/6 = 2/3." }, { titre: "Comparer", md: "Les deux rapports sont égaux." }, { titre: "Vérifier l'ordre", md: "Les points sont alignés dans le même ordre." }, { titre: "Conclure", md: "D'après la réciproque du théorème de Thalès, **(AC) // (BD)**." }] },
            { t: "exemple", titre: "Un contre-exemple", md: "Dans ABC, AM = 2 cm, AB = 5 cm, AN = 3 cm, AC = 7 cm. AM/AB = 0,4 mais AN/AC = 3/7 ≈ 0,43. Les rapports sont différents : (MN) et (BC) **ne sont pas parallèles**." },
            { t: "astuce", md: "Pour comparer deux fractions sans arrondi, fais un produit en croix : 2 × 7 = 14 et 5 × 3 = 15. 14 ≠ 15, donc 2/5 ≠ 3/7." },
          ],
        },
        {
          titre: "Triangles semblables",
          blocs: [
            { t: "definition", terme: "Triangles semblables", md: "Deux triangles dont les angles sont deux à deux de **même mesure**. Leurs côtés sont alors deux à deux **proportionnels** : l'un est un agrandissement ou une réduction de l'autre." },
            { t: "texte", md: "Dans une configuration de Thalès, AMN et ABC sont semblables. Le rapport **k** = AM/AB multiplie toutes les longueurs de ABC pour obtenir celles de AMN. Avec AM = 2 cm et AB = 6 cm, k = 2/6 = 1/3. Avec MN = 4,2 cm et BC = 7 cm, k = 4,2 ÷ 7 = 0,6." },
            { t: "propriete", titre: "Longueurs et aires", md: "Si les longueurs sont multipliées par k, les **aires** sont multipliées par **k²**. Un triangle semblable de rapport 2 a des côtés doublés et une aire multipliée par 4." },
            { t: "verifie", q: "Un triangle de côtés 3, 4, 5 cm est agrandi en un triangle de côtés 6, 8, 10 cm. Par combien son aire est-elle multipliée ?", choix: ["2", "4", "8"], bonne: 1, explication: "Le rapport d'agrandissement est k = 6/3 = 2, donc l'aire est multipliée par k² = 4 (6 cm² devient 24 cm²)." },
          ],
        },
      ],
      bilan: "Des parallèles qui coupent deux droites sécantes créent des triangles semblables : Thalès calcule les longueurs, sa réciproque prouve le parallélisme, et le rapport k s'élève au carré pour les aires.",
    },
    "3e-maths-10-trigonometrie": {
      accroche: "Tu es à 50 m d'une tour et tu vois son sommet sous un angle de 30°. Sans mètre ni échelle, tu peux calculer sa hauteur. Dans un triangle rectangle, les angles et les longueurs sont liés par trois rapports : cosinus, sinus et tangente.",
      objectifs: [
        "Connaître les définitions du cosinus, du sinus et de la tangente (SOH CAH TOA)",
        "Calculer une longueur avec la trigonométrie ou le théorème de Pythagore",
        "Calculer un angle avec arccos, arcsin ou arctan",
        "Résoudre un problème concret",
      ],
      sections: [
        {
          titre: "Nommer les côtés d'un triangle rectangle",
          blocs: [
            { t: "texte", md: "Tout part d'un **triangle rectangle** et d'un **angle aigu** que l'on regarde. Les côtés changent de nom selon cet angle, sauf un." },
            { t: "definition", terme: "Hypoténuse, côté opposé, côté adjacent", md: "• L'**hypoténuse** est le plus grand côté, en face de l'angle droit.\n• Le côté **opposé** à l'angle est celui qui lui fait face.\n• Le côté **adjacent** touche l'angle, sans être l'hypoténuse." },
            { t: "schema", titre: "Le triangle ABC rectangle en A, vu depuis l'angle B", legende: "Pour l'angle B : [BC] est l'hypoténuse, [AC] le côté opposé, [AB] le côté adjacent. Vu depuis l'angle C, opposé et adjacent échangeraient leurs rôles.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M80 60 L80 200 L320 200 Z"/><path class="trait" d="M80 60 L80 200 L320 200 Z"/><path class="trait-fin" d="M80 188 L92 188 L92 200"/><path d="M285 200 A35 35 0 0 1 289.8 182.4" fill="none" stroke="var(--pigment)" stroke-width="2.5"/><text class="texte" x="70" y="216" text-anchor="end">A</text><text class="texte" x="330" y="214">B</text><text class="texte" x="72" y="54" text-anchor="end">C</text><text class="texte-pigment" x="200" y="222" text-anchor="middle">adjacent</text><text class="texte-pigment" x="68" y="134" text-anchor="end">opposé</text><text class="texte-pigment" x="215" y="118">hypoténuse</text><text class="texte" x="200" y="30">CAH : cos B = AB / BC</text><text class="texte" x="200" y="52">SOH : sin B = AC / BC</text><text class="texte" x="200" y="74">TOA : tan B = AC / AB</text></svg>` },
            { t: "attention", md: "Avant toute formule, **repère l'angle** dont tu parles. Le côté [AC] est opposé à l'angle B, mais adjacent à l'angle C. Seule l'hypoténuse ne change jamais." },
          ],
        },
        {
          titre: "Cosinus, sinus, tangente",
          blocs: [
            { t: "propriete", titre: "Les trois rapports", md: "Pour un angle aigu d'un triangle rectangle :\n• **cos** = adjacent ÷ hypoténuse\n• **sin** = opposé ÷ hypoténuse\n• **tan** = opposé ÷ adjacent" },
            { t: "astuce", md: "Retiens **SOH CAH TOA** : **S**inus = **O**pposé / **H**ypoténuse ; **C**osinus = **A**djacent / **H**ypoténuse ; **T**angente = **O**pposé / **A**djacent." },
            { t: "tableau", titre: "Valeurs remarquables (arrondies au millième)", entetes: ["Angle", "cos", "sin", "tan"], lignes: [["30°", "≈ 0,866", "0,5", "≈ 0,577"], ["45°", "≈ 0,707", "≈ 0,707", "1"], ["60°", "0,5", "≈ 0,866", "≈ 1,732"]] },
            { t: "texte", md: "L'hypoténuse étant le plus grand côté, **cos et sin d'un angle aigu sont toujours compris entre 0 et 1**. La tangente, elle, peut dépasser 1 (tan 60° ≈ 1,73).\n\nExemple : ABC rectangle en A, AB = 6 cm, AC = 8 cm, BC = 10 cm. sin B = AC/BC = 8/10 = **0,8**." },
            { t: "verifie", q: "ABC est rectangle en A. Quelle est l'expression de cos B ?", choix: ["AC/BC", "AB/BC", "AC/AB", "BC/AB"], bonne: 1, explication: "CAH : cosinus = adjacent / hypoténuse. Pour l'angle B, le côté adjacent est [AB] et l'hypoténuse [BC] : cos B = AB/BC." },
          ],
        },
        {
          titre: "Calculer une longueur",
          blocs: [
            { t: "etapes", titre: "La méthode", items: [{ titre: "Repérer", md: "L'angle connu, le côté connu, le côté cherché." }, { titre: "Nommer", md: "Pour cet angle, ces deux côtés sont-ils opposé, adjacent ou hypoténuse ?" }, { titre: "Choisir", md: "La formule (SOH, CAH ou TOA) qui contient ces deux côtés." }, { titre: "Calculer", md: "Produit en croix, calculatrice **en degrés**, arrondi demandé." }] },
            { t: "exemple", titre: "Deux calculs", etapes: ["ABC rectangle en A, angle B = 35°, BC = 10 cm. On cherche AC, opposé à B ; BC est l'hypoténuse : SOH. sin 35° = AC/10, donc AC = 10 × sin 35° ≈ **5,7 cm**.", "ABC rectangle en A, AB = 7 cm, angle B = 40°. On cherche AC (opposé), on connaît AB (adjacent) : TOA. AC = 7 × tan 40° ≈ **5,9 cm**."] },
            { t: "exemple", titre: "La hauteur de la tour", md: "Le sol, la tour et le rayon visuel forment un triangle rectangle. La distance 50 m est adjacente à l'angle de 30°, la hauteur h lui est opposée : tan 30° = h/50, donc h = 50 × tan 30° ≈ **28,9 m**." },
            { t: "propriete", titre: "Et Pythagore ?", md: "Quand on connaît **deux côtés** et qu'on cherche le troisième, pas besoin d'angle : si ABC est rectangle en A, **BC² = AB² + AC²**. Avec AB = 5 et AC = 12 : BC² = 25 + 144 = 169, donc BC = 13 cm." },
          ],
        },
        {
          titre: "Calculer un angle",
          blocs: [
            { t: "texte", md: "Si l'on connaît un rapport, la calculatrice retrouve l'angle avec les touches **arccos** (cos⁻¹), **arcsin** (sin⁻¹) et **arctan** (tan⁻¹). Si sin B = 0,45, on utilise arcsin : B ≈ 26,7°." },
            { t: "exemple", titre: "ABC rectangle en A, AB = 6 cm, BC = 10 cm", etapes: ["AB est adjacent à B, BC est l'hypoténuse : CAH.", "cos B = 6/10 = 0,6.", "B = arccos(0,6) ≈ **53°** (53,13…).", "Les angles aigus sont complémentaires : C = 90° − 53° = **37°**.", "Bonus Pythagore : AC² = 10² − 6² = 64, donc AC = 8 cm."] },
            { t: "exemple", titre: "Une route en pente de 8 %", md: "Elle monte de 8 m pour 100 m à l'horizontale : tan(angle) = 8/100 = 0,08, et arctan(0,08) ≈ **4,6°**. Une pente de 8 % n'est donc pas un angle de 8° !" },
            { t: "attention", md: "Vérifie que ta calculatrice est réglée en **degrés** (mode DEG). En radians, cos 60 donne −0,95 au lieu de 0,5 !" },
            { t: "verifie", q: "On sait que sin B = 0,45. Quelle touche donne la mesure de l'angle B ?", choix: ["sin", "arcsin (sin⁻¹)", "arccos (cos⁻¹)", "tan"], bonne: 1, explication: "La touche sin transforme un angle en rapport ; arcsin fait le chemin inverse, du rapport vers l'angle." },
          ],
        },
      ],
      bilan: "Dans un triangle rectangle, SOH CAH TOA relie un angle aigu à deux côtés : on calcule une longueur avec sin, cos ou tan, un angle avec arcsin, arccos ou arctan, et Pythagore reste là quand on connaît deux côtés.",
    },
    "3e-maths-11-transformations-espace": {
      accroche: "Un projecteur de cinéma transforme une petite image en une image géante, et une boule de glace coupée en deux montre un disque parfait. Agrandir, couper, repérer sur un globe : bienvenue dans la géométrie de l'espace.",
      objectifs: [
        "Construire l'image d'une figure par une homothétie et connaître ses effets",
        "Se repérer sur une sphère avec la latitude et la longitude",
        "Décrire la section d'un solide par un plan",
        "Calculer l'aire d'une sphère et les volumes de la boule, de la pyramide et du cône",
      ],
      sections: [
        {
          titre: "L'homothétie, une machine à agrandir",
          blocs: [
            { t: "definition", terme: "Homothétie de centre O et de rapport k", md: "L'image M′ d'un point M est sur la droite (OM), avec **OM′ = |k| × OM**. Si **k > 0**, M′ est du **même côté** que M par rapport à O ; si **k < 0**, M′ est **de l'autre côté** de O." },
            { t: "schema", titre: "Deux homothéties de centre O", legende: "F′ est l'image de F par l'homothétie de rapport 2 (même côté, deux fois plus grande). F″ est son image par l'homothétie de rapport −1,5 (de l'autre côté de O, retournée, 1,5 fois plus grande).", svg: `<svg viewBox="0 0 400 210"><g class="pointille"><line x1="110" y1="165" x2="250" y2="60"/><line x1="80" y1="150" x2="290" y2="80"/><line x1="102.5" y1="120" x2="260" y2="120"/></g><path class="aplat-fort" d="M210 90 L230 100 L215 120 Z"/><path class="trait" d="M210 90 L230 100 L215 120 Z"/><path class="aplat" d="M250 60 L290 80 L260 120 Z"/><path class="trait" d="M250 60 L290 80 L260 120 Z"/><path class="aplat" d="M110 165 L80 150 L102.5 120 Z"/><path class="trait" d="M110 165 L80 150 L102.5 120 Z"/><circle cx="170" cy="120" r="3.5" fill="var(--encre)"/><text class="texte" x="170" y="137" text-anchor="middle">O</text><text class="texte" x="222" y="138" text-anchor="middle">F</text><text class="texte" x="268" y="140">F′ (k = 2)</text><text class="texte" x="95" y="190" text-anchor="middle">F″ (k = −1,5)</text></svg>` },
            { t: "propriete", titre: "Effets d'une homothétie", md: "Elle multiplie les **longueurs par |k|** et les **aires par k²**. Elle conserve les angles et le parallélisme. Avec k = −1, c'est la **symétrie centrale** de centre O." },
            { t: "texte", md: "Par une homothétie de rapport 3, un segment de 2 cm devient un segment de 6 cm, et un triangle de 5 cm² devient un triangle de 5 × 9 = **45 cm²**. Les translations (glissements), rotations (autour d'un point) et symétries, elles, conservent longueurs, angles et aires : seule l'homothétie (avec k ≠ 1 et k ≠ −1) change les longueurs." },
            { t: "verifie", q: "Une homothétie de rapport −1 est en réalité…", choix: ["une translation", "une symétrie centrale", "une symétrie axiale", "une réduction"], bonne: 1, explication: "Avec k = −1, OM′ = OM et M′ est de l'autre côté de O : O est le milieu de [MM′]. C'est la symétrie centrale de centre O." },
          ],
        },
        {
          titre: "Se repérer sur une sphère",
          blocs: [
            { t: "texte", md: "La Terre est presque une sphère. Pour y repérer un point, on utilise deux angles. Les **parallèles** sont des cercles parallèles à l'**équateur** ; les **méridiens** sont des demi-cercles qui joignent les deux pôles." },
            { t: "schema", titre: "Latitude et longitude du point M", legende: "La latitude se mesure à partir de l'équateur (ici 45° vers le nord), la longitude à partir du méridien de Greenwich (ici 30° vers l'est).", svg: `<svg viewBox="0 0 400 250"><circle class="aplat-papier" cx="200" cy="125" r="100"/><circle class="trait" cx="200" cy="125" r="100" fill="none"/><line class="trait" x1="100" y1="125" x2="300" y2="125"/><line x1="200" y1="125" x2="250" y2="125" stroke="var(--pigment)" stroke-width="3"/><line class="trait-fin" x1="200" y1="25" x2="200" y2="225"/><path class="trait-fin" d="M200 25 A50 100 0 0 1 200 225" fill="none"/><line class="pointille" x1="129.3" y1="54.3" x2="270.7" y2="54.3"/><line class="trait-fin" x1="200" y1="125" x2="270.7" y2="54.3"/><path d="M222 125 A22 22 0 0 0 215.6 109.4" fill="none" stroke="var(--pigment)" stroke-width="2"/><circle cx="235.4" cy="54.3" r="4.5" fill="var(--pigment)"/><line class="trait-fin" x1="240" y1="52" x2="273" y2="46"/><text class="texte-petit" x="276" y="48">M (45° N ; 30° E)</text><text class="texte-petit" x="228" y="118">45°</text><text class="texte-petit" x="225" y="140" text-anchor="middle">30°</text><text class="texte-petit" x="196" y="175" text-anchor="end">Greenwich 0°</text><text class="texte-petit" x="306" y="129">équateur 0°</text><text class="texte" x="200" y="18" text-anchor="middle">Pôle Nord</text><text class="texte" x="200" y="243" text-anchor="middle">Pôle Sud</text></svg>` },
            { t: "definition", terme: "Latitude et longitude", md: "La **latitude** (de 0° à 90°, Nord ou Sud) mesure l'écart à l'**équateur**, parallèle de latitude 0°. La **longitude** (de 0° à 180°, Est ou Ouest) mesure l'écart au **méridien de Greenwich**, de longitude 0°." },
            { t: "exemple", titre: "Où est le point 48° N ; 2° E ?", md: "48° au nord de l'équateur, 2° à l'est de Greenwich : c'est **Paris**. On donne toujours la latitude en premier." },
          ],
        },
        {
          titre: "Sections de solides",
          blocs: [
            { t: "liste", titre: "Les sections à connaître", items: ["**Cube ou pavé** coupé parallèlement à une face : un carré ou un rectangle **identique à cette face**. Un cube d'arête 4 cm donne un carré de 4 cm de côté.", "Coupé parallèlement à une arête : un rectangle.", "**Cylindre** coupé perpendiculairement à son axe : un **disque** identique à la base ; parallèlement à l'axe : un rectangle.", "**Sphère** coupée par un plan : un **cercle**."] },
            { t: "schema", titre: "Section d'une sphère par un plan", legende: "Le centre H de la section, le centre O de la sphère et un point M du cercle forment un triangle rectangle en H.", svg: `<svg viewBox="0 0 400 240"><circle class="aplat-papier" cx="120" cy="125" r="90"/><circle class="trait" cx="120" cy="125" r="90" fill="none"/><path class="pointille" d="M45.2 75 A74.8 14 0 0 1 194.8 75"/><path d="M45.2 75 A74.8 14 0 0 0 194.8 75" fill="none" stroke="var(--pigment)" stroke-width="2.5"/><line class="pointille" x1="120" y1="125" x2="120" y2="75"/><line class="trait-fin" x1="120" y1="125" x2="194.8" y2="75"/><line x1="120" y1="75" x2="194.8" y2="75" stroke="var(--pigment)" stroke-width="2"/><path class="trait-fin" d="M132 75 L132 87 L120 87"/><circle cx="120" cy="125" r="3" fill="var(--encre)"/><text class="texte" x="112" y="140" text-anchor="end">O</text><text class="texte" x="112" y="92" text-anchor="end">H</text><text class="texte" x="202" y="72">M</text><text class="texte-petit" x="126" y="104">d</text><text class="texte-petit" x="165" y="116">R</text><text class="texte-petit" x="157" y="85" text-anchor="middle">r</text><text class="texte-petit" x="225" y="60">Le plan coupe la sphère</text><text class="texte-petit" x="225" y="76">selon un cercle de centre H.</text><text class="texte-petit" x="225" y="120">OHM est rectangle en H :</text><text class="texte" x="225" y="142">r² = R² − d²</text><text class="texte-petit" x="225" y="180">Avec R = 9 cm et d = 5 cm :</text><text class="texte-petit" x="225" y="198">r = √56 ≈ 7,5 cm</text></svg>` },
            { t: "verifie", q: "On coupe un cylindre par un plan perpendiculaire à son axe. Quelle est la section ?", choix: ["Un rectangle", "Un disque", "Un triangle", "Une ellipse"], bonne: 1, explication: "Perpendiculairement à l'axe, on coupe le cylindre « en rondelles » : chaque section est un disque identique à la base." },
          ],
        },
        {
          titre: "Aires et volumes",
          blocs: [
            { t: "tableau", titre: "Les formules à connaître", entetes: ["Solide", "Formule"], lignes: [["Sphère de rayon r (aire)", "4πr²"], ["Boule de rayon r (volume)", "(4/3)πr³"], ["Pyramide (volume)", "(aire de la base × hauteur) ÷ 3"], ["Cône de rayon r (volume)", "(πr² × hauteur) ÷ 3"], ["Prisme, cylindre (volume)", "aire de la base × hauteur"]] },
            { t: "exemple", titre: "Quatre calculs", etapes: ["Boule de rayon 3 cm : V = (4/3) × π × 27 = 36π ≈ **113 cm³**.", "Sphère de rayon 5 cm : A = 4 × π × 25 = 100π ≈ **314 cm²**.", "Pyramide à base carrée de 6 cm de côté, hauteur 10 cm : V = 36 × 10 ÷ 3 = **120 cm³**.", "Cône de rayon 3 cm, hauteur 4 cm : V = π × 9 × 4 ÷ 3 = 12π ≈ **37,7 cm³**."] },
            { t: "attention", md: "Ne confonds pas la **sphère** (la surface, on calcule une aire en cm²) et la **boule** (le solide plein, on calcule un volume en cm³). Et n'oublie pas le « ÷ 3 » des pyramides et des cônes : un cône remplit exactement le tiers du cylindre de même base et de même hauteur." },
          ],
        },
      ],
      bilan: "L'homothétie agrandit ou réduit en multipliant les longueurs par |k| ; latitude et longitude repèrent un point sur le globe ; une sphère coupée par un plan donne un cercle ; et pyramides et cônes valent le tiers d'un prisme ou d'un cylindre.",
    },
    "3e-maths-12-algorithmique": {
      accroche: "Un jeu vidéo, c'est des milliers d'instructions simples : « si le joueur touche la pièce, ajouter 1 au score ». Avec Scratch, tu peux écrire ces instructions toi-même, tracer des figures parfaites et même lancer des dés virtuels.",
      objectifs: [
        "Utiliser des variables, des boucles et des instructions conditionnelles",
        "Écrire ou compléter un script de tracé de polygone",
        "Lire un script et prévoir son résultat avec une trace",
        "Utiliser événements, blocs personnalisés et nombres aléatoires",
      ],
      sections: [
        {
          titre: "Variables et boucles",
          blocs: [
            { t: "definition", terme: "Variable", md: "Une **boîte** qui porte un nom et contient une valeur qui peut changer : « mettre score à 0 », « ajouter 1 à score ». C'est la mémoire du programme." },
            { t: "tableau", titre: "Trois boucles", entetes: ["Bloc", "Quand l'utiliser ?"], lignes: [["répéter n fois", "le nombre de tours est connu à l'avance"], ["répéter jusqu'à (condition)", "on s'arrête **dès que** la condition devient vraie"], ["répéter indéfiniment", "boucle sans fin, typique des jeux"]] },
            { t: "propriete", titre: "Instruction conditionnelle", md: "« **si** (condition) **alors** … **sinon** … » : selon que la condition est vraie ou fausse, **une seule** des deux branches s'exécute." },
            { t: "exemple", titre: "Un quiz", md: "demander « 3 + 4 ? » ; si (réponse = 7) alors dire « Bravo » sinon dire « Perdu ». Si l'utilisateur tape 5, la condition est fausse : le lutin dit **« Perdu »**." },
          ],
        },
        {
          titre: "Lire un script : la trace",
          blocs: [
            { t: "texte", md: "Pour prévoir ce que fait un script, on joue l'ordinateur : on exécute les instructions **une par une**, en notant la valeur de chaque variable. C'est une **trace**." },
            { t: "exemple", titre: "mettre x à 2 ; répéter 3 fois { mettre x à x × 2 } ; dire x", etapes: ["Départ : x = 2.", "1er tour : x = 4.", "2e tour : x = 8.", "3e tour : x = 16.", "Le lutin dit **16**."] },
            { t: "tableau", titre: "Trace de : mettre s à 0 ; mettre i à 1 ; répéter jusqu'à (i > 5) { ajouter i à s ; ajouter 1 à i } ; dire s", entetes: ["Moment", "s", "i", "i > 5 ?"], lignes: [["départ", "0", "1", "non"], ["après le 1er tour", "1", "2", "non"], ["après le 2e tour", "3", "3", "non"], ["après le 3e tour", "6", "4", "non"], ["après le 4e tour", "10", "5", "non"], ["après le 5e tour", "15", "6", "**oui** : on sort"]] },
            { t: "texte", md: "Le lutin dit **15** : le script a calculé 1 + 2 + 3 + 4 + 5. Autre exemple : mettre n à 7 ; si (n modulo 2 = 0) alors mettre n à n ÷ 2 sinon mettre n à 3 × n + 1. 7 est impair (reste 1), donc n = 3 × 7 + 1 = **22**." },
            { t: "verifie", q: "La boucle « répéter jusqu'à (condition) » s'arrête…", choix: ["dès que la condition devient vraie", "dès que la condition devient fausse", "après 10 tours"], bonne: 0, explication: "On répète **jusqu'à** ce que la condition soit vraie : tant qu'elle est fausse, on continue ; dès qu'elle est vraie, on sort de la boucle." },
          ],
        },
        {
          titre: "Tracer des polygones réguliers",
          blocs: [
            { t: "propriete", titre: "Le script d'un polygone à n côtés", md: "répéter **n** fois { avancer de L ; tourner de **360/n** degrés }. Le lutin fait un tour complet (360°) en n virages égaux." },
            { t: "tableau", titre: "Angles de rotation", entetes: ["Polygone", "Côtés n", "Tourner de 360/n"], lignes: [["Triangle équilatéral", "3", "120°"], ["Carré", "4", "90°"], ["Pentagone", "5", "72°"], ["Hexagone", "6", "60°"]] },
            { t: "attention", md: "Pour un triangle équilatéral, on ne tourne **pas** de 60° ! 60° est l'angle **intérieur** du triangle ; le lutin, lui, tourne de l'angle **extérieur**, 180° − 60° = 120°. Avec 60°, il tracerait la moitié d'un hexagone." },
            { t: "verifie", q: "Pour tracer un pentagone régulier, on répète 5 fois « avancer de 60, tourner de … degrés ».", choix: ["60", "72", "108", "360"], bonne: 1, explication: "360 ÷ 5 = 72. 108° est l'angle intérieur du pentagone, pas l'angle dont le lutin doit tourner." },
          ],
        },
        {
          titre: "Programmer un jeu",
          blocs: [
            { t: "texte", md: "Un **événement** déclenche un script : « quand le drapeau vert est cliqué », « quand la touche espace est pressée », « quand ce lutin est cliqué ». Un **bloc personnalisé**, créé avec « définir … », regroupe des instructions réutilisables, comme une fonction : « définir carré (côté) » puis « carré (50) »." },
            { t: "etapes", titre: "Un jeu : un point à chaque clic sur le lutin", items: [{ titre: "Démarrer", md: "quand le drapeau vert est cliqué" }, { titre: "Initialiser", md: "mettre score à 0" }, { titre: "Attendre le clic", md: "quand ce lutin est cliqué" }, { titre: "Récompenser", md: "ajouter 1 à score" }, { titre: "Bouger", md: "aller à x : (nombre aléatoire entre −200 et 200), y : (nombre aléatoire entre −150 et 150)" }] },
            { t: "astuce", md: "« **nombre aléatoire entre 1 et 6** » renvoie un entier au hasard de 1 à 6 : c'est un dé ! « mettre d à (nombre aléatoire entre 1 et 6) » range ce lancer dans la variable d. Et pour avancer tant que le lutin ne touche pas le bord : répéter jusqu'à (touche le bord ?) { avancer de 5 }." },
          ],
        },
      ],
      bilan: "Une variable mémorise, une boucle répète, une condition choisit, un événement déclenche : avec ces quatre briques et une trace bien tenue, tu lis, écris et corriges n'importe quel script.",
    },
  },
};
