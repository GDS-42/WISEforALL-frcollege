// Cours ÉCLORE — 6e Mathématiques. Schéma : docs/COURS.md
export default {
  id: "6e-maths",
  chapitres: {
    "6e-maths-01-nombres-entiers": {
      accroche: "La Terre compte environ 8 000 000 000 d'habitants : huit milliards ! Comment lire, écrire et comparer des nombres aussi géants avec seulement dix petits symboles ? Le secret tient dans la place de chaque chiffre.",
      objectifs: [
        "Lire, écrire et décomposer un grand nombre entier",
        "Distinguer le chiffre des dizaines et le nombre de dizaines",
        "Comparer, ranger et placer des entiers sur une droite graduée",
        "Arrondir un entier et trouver un ordre de grandeur",
      ],
      sections: [
        {
          titre: "Dix chiffres pour écrire tous les nombres",
          blocs: [
            { t: "texte", md: "Avec seulement **dix chiffres** (0, 1, 2, 3, 4, 5, 6, 7, 8, 9), on peut écrire tous les nombres, même les plus grands. Comme les lettres forment des mots, les chiffres forment des nombres.\n\nCe qui compte, c'est la **position** de chaque chiffre. 352 et 253 utilisent les mêmes chiffres, mais ce ne sont pas les mêmes nombres. Notre système est **décimal** : 10 unités font 1 dizaine, 10 dizaines font 1 centaine, 10 centaines font 1 millier, et ainsi de suite." },
            { t: "definition", terme: "Chiffre et nombre", md: "Un **chiffre** est l'un des dix symboles de 0 à 9. Un **nombre** représente une quantité ; on l'écrit avec un ou plusieurs chiffres. 7 est à la fois un chiffre et un nombre ; 75 est un nombre écrit avec deux chiffres." },
            { t: "tableau", titre: "Les classes de trois chiffres", entetes: ["Nombre", "Milliards", "Millions", "Mille", "Unités"], lignes: [["2 605 318", "–", "2", "605", "318"], ["47 090", "–", "–", "47", "090"], ["8 000 000 000", "8", "000", "000", "000"]] },
            { t: "texte", md: "On groupe les chiffres par **classes** de trois en partant de la droite : unités, mille, millions, milliards. Dans chaque classe, on retrouve les centaines, les dizaines et les unités. On laisse un **espace** entre deux classes : on écrit 2 605 318, et on lit « deux millions six cent cinq mille trois cent dix-huit »." },
            { t: "exemple", titre: "Écrire en chiffres « trois mille quarante-sept »", etapes: ["« Trois mille » : la classe des mille contient 3.", "« Quarante-sept » : la classe des unités contient 047, car il n'y a **aucune centaine**.", "On écrit donc 3 047."] },
            { t: "attention", md: "Ne saute pas le zéro ! « Trois mille quarante-sept » ne s'écrit ni 347 ni 30 047, mais **3 047**. Chaque classe, sauf la première à gauche, a toujours trois chiffres." },
          ],
        },
        {
          titre: "Le chiffre des… ou le nombre de… ?",
          blocs: [
            { t: "texte", md: "Dans 538, le **chiffre des dizaines** est 3 : c'est le chiffre placé au rang des dizaines.\n\nMais combien y a-t-il de dizaines **en tout** dans 538 ? Imagine 538 billes rangées en sachets de 10 : tu remplis 53 sachets, et il reste 8 billes. Le **nombre de dizaines** est donc 53. Pour le trouver, on lit tous les chiffres situés à gauche, jusqu'au rang des dizaines compris." },
            { t: "tableau", titre: "Chiffre ou nombre ?", entetes: ["Nombre", "Chiffre des dizaines", "Nombre de dizaines", "Chiffre des centaines", "Nombre de centaines"], lignes: [["538", "3", "53", "5", "5"], ["4 702", "0", "470", "7", "47"], ["2 605 318", "1", "260 531", "3", "26 053"]] },
            { t: "propriete", titre: "Décomposer un nombre", md: "Chaque chiffre vaut sa valeur multipliée par celle de son rang :\n2 605 318 = 2 × 1 000 000 + 6 × 100 000 + 5 × 1 000 + 3 × 100 + 1 × 10 + 8." },
            { t: "exemple", titre: "Dans 2 605 318", md: "Le chiffre des unités de mille est **5**. Le nombre de milliers est **2 605** (tout ce qui est à gauche, jusqu'aux unités de mille)." },
            { t: "verifie", q: "Dans 4 702, quel est le nombre de centaines ?", choix: ["7", "47", "470"], bonne: 1, explication: "Le chiffre des centaines est 7, mais le nombre de centaines est 47 : 4 702 = 47 centaines + 2 unités." },
            { t: "savais-tu", md: "Un **million**, c'est mille milliers : 1 000 × 1 000 = 1 000 000. Un **milliard**, c'est mille millions. Si tu comptais une unité par seconde sans t'arrêter, il te faudrait plus de onze jours pour atteindre un million, et près de 32 ans pour un milliard !" },
          ],
        },
        {
          titre: "Comparer, ranger, placer sur une droite",
          blocs: [
            { t: "propriete", titre: "Comparer deux entiers", md: "1. Le nombre qui a **le plus de chiffres** est le plus grand.\n2. S'ils ont autant de chiffres, on compare **chiffre par chiffre en partant de la gauche** : le premier chiffre différent décide.\n\nOn écrit 989 < 1 009 (« plus petit que ») et 1 900 > 1 090 (« plus grand que »)." },
            { t: "exemple", titre: "Ranger 1 900 ; 989 ; 10 009 ; 1 090 ; 1 009", etapes: ["989 n'a que 3 chiffres : c'est le plus petit. 10 009 en a 5 : c'est le plus grand.", "Les trois autres ont 4 chiffres et commencent par 1. On regarde les centaines : 0, 0 et 9. Donc 1 900 est le plus grand des trois.", "Entre 1 009 et 1 090, les centaines sont égales (0) ; on compare les dizaines : 0 < 9.", "Rangement : 989 < 1 009 < 1 090 < 1 900 < 10 009."] },
            { t: "texte", md: "Sur une **droite graduée**, les nombres sont rangés du plus petit (à gauche) au plus grand (à droite). Pour lire un point, trouve d'abord le **pas** : de combien on avance à chaque graduation." },
            { t: "droite", titre: "Graduations de 50 en 50 : A est à la 4e graduation après 300", min: 300, max: 600, pas: 50, points: [{ x: 300, label: "300" }, { x: 500, label: "A = 500" }, { x: 600, label: "600" }] },
            { t: "astuce", md: "Pour fabriquer le plus grand nombre de quatre chiffres tous différents, place les plus grands chiffres à gauche : **9 876**. Le plus petit ? 1 023 (il ne peut pas commencer par 0)." },
          ],
        },
        {
          titre: "Arrondir et donner un ordre de grandeur",
          blocs: [
            { t: "texte", md: "Un journal annonce « 4 600 spectateurs » alors qu'il y en avait 4 649. Il a **arrondi** : il a remplacé le nombre exact par un nombre rond, plus simple à retenir. Sur la droite, 4 649 est plus près de 4 600 que de 4 700." },
            { t: "droite", titre: "4 649 est entre 4 600 et 4 700, avant le milieu", min: 4600, max: 4700, pas: 10, points: [{ x: 4600, label: "4 600" }, { x: 4649, label: "4 649" }, { x: 4650, label: "milieu" }, { x: 4700, label: "4 700" }] },
            { t: "propriete", titre: "Arrondir", md: "Pour arrondir à la centaine, on regarde le **chiffre des dizaines** : s'il vaut **5 ou plus**, on monte à la centaine du dessus ; sinon, on garde la centaine du dessous. Même idée au millier (on regarde les centaines) ou à la dizaine (on regarde les unités)." },
            { t: "exemple", titre: "Arrondir 27 500 au millier", etapes: ["Milliers voisins : 27 000 et 28 000.", "Le chiffre des centaines est 5 : on monte.", "L'arrondi est 28 000. De même, à la dizaine : 347 → 350, 342 → 340, 395 → 400, 412 → 410."] },
            { t: "definition", terme: "Ordre de grandeur", md: "Une valeur approchée simple d'un résultat, obtenue avec des nombres arrondis. Elle sert à **vérifier** un calcul : 4 980 × 21 ≈ 5 000 × 20 = **100 000**." },
            { t: "verifie", q: "Quel est l'arrondi de 4 649 à la centaine ?", choix: ["4 600", "4 650", "4 700"], bonne: 0, explication: "Le chiffre des dizaines est 4, plus petit que 5 : on garde 4 600. Attention, 4 650 est un arrondi à la dizaine, pas à la centaine." },
          ],
        },
      ],
      bilan: "Dix chiffres, des classes de trois, et la place qui donne la valeur : avec ça, tu lis, compares et arrondis n'importe quel entier, même huit milliards.",
    },
    "6e-maths-02-nombres-decimaux": {
      accroche: "Au 100 mètres, deux coureuses franchissent la ligne en 10,9 s et en 10,85 s. Laquelle a gagné ? Celle dont le nombre paraît le plus long ? Pour trancher, il faut comprendre ce que racontent les chiffres après la virgule.",
      objectifs: [
        "Nommer les rangs après la virgule et passer d'une fraction décimale à un décimal",
        "Comparer, ranger, intercaler et encadrer des décimaux",
        "Placer un décimal sur une droite graduée et l'arrondir",
      ],
      sections: [
        {
          titre: "Partager l'unité en 10, en 100, en 1 000",
          blocs: [
            { t: "texte", md: "Les entiers ne suffisent pas pour mesurer précisément. Alors on **partage l'unité** : en 10 parts égales, chaque part est un **dixième** ; chaque dixième partagé en 10 donne un **centième** ; chaque centième partagé en 10 donne un **millième**.\n\nLa **virgule** sépare la partie entière (à gauche) de la partie décimale (à droite)." },
            { t: "schema", titre: "0,47 : 47 centièmes de l'unité", legende: "Le grand carré est partagé en 100 carreaux. 4 colonnes entières (4 dixièmes) et 7 carreaux : 0,47.", svg: `<svg viewBox="0 0 400 210"><rect class="aplat" x="40" y="30" width="64" height="160"/><rect class="aplat" x="104" y="30" width="16" height="112"/><path class="trait-fin" d="M56 30V190M72 30V190M88 30V190M104 30V190M120 30V190M136 30V190M152 30V190M168 30V190M184 30V190M40 46H200M40 62H200M40 78H200M40 94H200M40 110H200M40 126H200M40 142H200M40 158H200M40 174H200"/><rect class="trait" x="40" y="30" width="160" height="160" fill="none"/><text class="texte" x="222" y="60">1 grand carré = 1 unité</text><text class="texte" x="222" y="88">1 colonne = 1 dixième</text><text class="texte" x="222" y="116">1 carreau = 1 centième</text><text class="texte" x="222" y="156">47 carreaux colorés :</text><text class="texte-main" x="222" y="182">0,47 = 47/100</text></svg>` },
            { t: "tableau", titre: "Le tableau de numération", entetes: ["Nombre", "Dizaines", "Unités", ",", "Dixièmes", "Centièmes", "Millièmes"], lignes: [["12,375", "1", "2", ",", "3", "7", "5"], ["3,47", "", "3", ",", "4", "7", ""], ["5,208", "", "5", ",", "2", "0", "8"]] },
            { t: "definition", terme: "Fraction décimale", md: "Une fraction dont le dénominateur est 10, 100, 1 000… Elle s'écrit aussi avec une virgule : 3/10 = 0,3 ; 7/100 = 0,07 ; 25/100 = 0,25 ; 347/100 = 3,47." },
          ],
        },
        {
          titre: "Plusieurs écritures pour un même nombre",
          blocs: [
            { t: "propriete", titre: "Décomposer un décimal", md: "3,47 = 3 + 4/10 + 7/100 = 347/100.\nOn peut donc dire que 3,47, c'est **347 centièmes** : 3 unités valent 300 centièmes, 4 dixièmes valent 40 centièmes, plus 7 centièmes." },
            { t: "exemple", titre: "Écrire « 5 unités, 2 dixièmes et 8 millièmes »", etapes: ["Unités : 5. Dixièmes : 2.", "Centièmes : aucun, on écrit **0** pour garder sa place.", "Millièmes : 8. Le nombre est 5,208."] },
            { t: "propriete", titre: "Les zéros inutiles", md: "Ajouter ou enlever des zéros **à droite de la partie décimale** ne change pas le nombre : 12,5 = 12,50 = 12,500. Mais un zéro placé juste après la virgule change tout : 12,05 ≠ 12,5." },
            { t: "attention", md: "0,5 et 0,05 ne sont pas égaux : 0,5 = 5/10 (cinq dixièmes) et 0,05 = 5/100 (cinq centièmes), dix fois moins. De même, 5,5 = 55/10 alors que 0,55 = 55/100." },
            { t: "verifie", q: "Quelle est l'écriture décimale de 7/100 ?", choix: ["0,7", "0,07", "7,100", "0,007"], bonne: 1, explication: "7 centièmes : le 7 se place au deuxième rang après la virgule, celui des centièmes. 0,7 serait 7 dixièmes." },
          ],
        },
        {
          titre: "Comparer et ranger des décimaux",
          blocs: [
            { t: "propriete", titre: "Comparer deux décimaux", md: "On compare d'abord les **parties entières**. Si elles sont égales, on compare les **dixièmes**, puis les **centièmes**, puis les millièmes… Le premier chiffre différent décide." },
            { t: "exemple", titre: "Comparer 2,5 et 2,35", etapes: ["Parties entières : 2 et 2, égales.", "Dixièmes : 5 et 3. Or 5 > 3.", "Donc 2,5 > 2,35. Vérification : 2,50 et 2,35, soit 50 centièmes contre 35 centièmes."] },
            { t: "attention", md: "Ne compare pas les parties décimales comme des entiers ! « 2,35 > 2,5 car 35 > 5 » est **faux** : le 5 de 2,5 compte des dixièmes, bien plus gros que des centièmes. Pour éviter le piège, donne aux deux nombres le même nombre de chiffres après la virgule." },
            { t: "exemple", titre: "Ranger 1,1 ; 0,9 ; 1,15 ; 1,5 ; 1,08", md: "On complète avec des zéros : 0,90 ; 1,08 ; 1,10 ; 1,15 ; 1,50. On range : **0,9 < 1,08 < 1,1 < 1,15 < 1,5**.\n\nEt nos coureuses ? 10,85 < 10,90 : la coureuse à 10,85 s a mis **moins de temps**, c'est elle qui a gagné." },
          ],
        },
        {
          titre: "Placer, intercaler, encadrer, arrondir",
          blocs: [
            { t: "texte", md: "Sur une droite graduée, compte en combien de parts égales l'unité est partagée. Ici, entre 6 et 7, il y a 4 parts : chaque graduation vaut 1 ÷ 4 = **0,25**. À la 3e graduation après 6, on lit 6 + 3 × 0,25 = **6,75**." },
            { t: "droite", titre: "L'unité partagée en 4 : pas de 0,25", min: 6, max: 7, pas: 0.25, points: [{ x: 6, label: "6" }, { x: 6.75, label: "6,75" }, { x: 7, label: "7" }] },
            { t: "texte", md: "Entre deux décimaux, on peut **toujours** en intercaler un autre. Entre 3,4 et 3,5, il semble n'y avoir rien… Mais si on zoome sur les centièmes : 3,40 ; 3,41 ; … ; 3,45 ; … ; 3,50." },
            { t: "droite", titre: "Zoom entre 3,4 et 3,5 : pas de 0,01", min: 3.4, max: 3.5, pas: 0.01, points: [{ x: 3.4, label: "3,4" }, { x: 3.45, label: "3,45" }, { x: 3.5, label: "3,5" }] },
            { t: "propriete", titre: "Encadrer et arrondir", md: "**Encadrer** à l'unité, c'est trouver les deux entiers qui entourent le nombre : 18 < 18,72 < 19. Au dixième : 18,7 < 18,72 < 18,8.\n\n**Arrondir** au dixième, c'est choisir le dixième le plus proche : on regarde le **chiffre des centièmes**. 7,86 → **7,9** (car 6 ≥ 5) ; 7,83 → 7,8." },
            { t: "verifie", q: "Quel nombre est compris entre 3,4 et 3,5 ?", choix: ["3,39", "3,45", "3,6"], bonne: 1, explication: "3,40 < 3,45 < 3,50. 3,39 est plus petit que 3,4 et 3,6 est plus grand que 3,5." },
          ],
        },
      ],
      bilan: "Dixièmes, centièmes, millièmes : chaque rang après la virgule est dix fois plus petit que le précédent. Pour comparer, aligne les rangs, jamais les longueurs.",
    },
    "6e-maths-03-fractions": {
      accroche: "Une tarte est coupée en 8 parts égales, et tu en manges 3. Ton ami, lui, mange la moitié d'une autre tarte coupée en 4. Qui a mangé le plus ? Pour répondre sans se disputer, il faut parler le langage des fractions.",
      objectifs: [
        "Comprendre une fraction comme un partage et la lire",
        "Reconnaître des fractions égales et comparer une fraction à 1",
        "Placer une fraction sur une droite graduée",
        "Calculer une fraction d'une quantité",
      ],
      sections: [
        {
          titre: "Une fraction, c'est un partage",
          blocs: [
            { t: "definition", terme: "Numérateur et dénominateur", md: "Dans la fraction **3/8**, le **dénominateur** 8 (en bas) dit en combien de **parts égales** on a partagé l'unité. Le **numérateur** 3 (en haut) compte les parts que l'on prend." },
            { t: "schema", titre: "3/8 de la tarte", legende: "La tarte est partagée en 8 parts égales ; on en prend 3.", svg: `<svg viewBox="0 0 400 240"><circle class="aplat-papier" cx="130" cy="120" r="80"/><path class="aplat-fort" d="M130 120 L130 40 A80 80 0 0 1 186.57 176.57 Z"/><path class="trait-fin" d="M130 40V200M50 120H210M73.43 63.43L186.57 176.57M186.57 63.43L73.43 176.57"/><circle class="trait" cx="130" cy="120" r="80" fill="none"/><text class="texte" x="240" y="80">8 parts égales</text><text class="texte-petit" x="240" y="100">→ dénominateur 8</text><text class="texte" x="240" y="140">3 parts prises</text><text class="texte-petit" x="240" y="160">→ numérateur 3</text><text class="texte-main" x="240" y="205">3/8 de la tarte</text></svg>` },
            { t: "tableau", titre: "Comment lire une fraction", entetes: ["Fraction", "Se lit", "Sens"], lignes: [["1/2", "un demi", "une moitié"], ["1/3", "un tiers", "une part sur 3"], ["1/4", "un quart", "une part sur 4"], ["3/4", "trois quarts", "3 parts sur 4"], ["3/5", "trois cinquièmes", "3 parts sur 5"], ["7/10", "sept dixièmes", "7 parts sur 10"]] },
            { t: "attention", md: "Les parts doivent être **égales** ! Une tarte coupée en 8 morceaux de tailles différentes ne permet pas de parler de huitièmes." },
          ],
        },
        {
          titre: "Des fractions égales",
          blocs: [
            { t: "schema", titre: "La même longueur, trois écritures", legende: "On partage chaque moitié en 2, puis encore en 2 : la partie coloriée ne change pas.", svg: `<svg viewBox="0 0 400 205"><rect class="aplat-fort" x="120" y="30" width="120" height="30"/><rect class="trait" x="120" y="30" width="240" height="30" fill="none"/><path class="trait-fin" d="M240 30V60"/><rect class="aplat-fort" x="120" y="85" width="120" height="30"/><rect class="trait" x="120" y="85" width="240" height="30" fill="none"/><path class="trait-fin" d="M180 85V115M240 85V115M300 85V115"/><rect class="aplat-fort" x="120" y="140" width="120" height="30"/><rect class="trait" x="120" y="140" width="240" height="30" fill="none"/><path class="trait-fin" d="M150 140V170M180 140V170M210 140V170M240 140V170M270 140V170M300 140V170M330 140V170"/><path class="pointille" d="M240 20V180"/><text class="texte-main" x="100" y="51" text-anchor="end">1/2</text><text class="texte-main" x="100" y="106" text-anchor="end">2/4</text><text class="texte-main" x="100" y="161" text-anchor="end">4/8</text><text class="texte" x="200" y="198" text-anchor="middle">même partie coloriée : 1/2 = 2/4 = 4/8</text></svg>` },
            { t: "propriete", titre: "Fractions égales", md: "On ne change pas une fraction en **multipliant** (ou en **divisant**) son numérateur et son dénominateur **par le même nombre** :\n1/2 = 2/4 = 5/10 (× 2, puis × 5) et 6/8 = 3/4 (÷ 2)." },
            { t: "exemple", titre: "Qui a mangé le plus de tarte ?", etapes: ["Ton ami a mangé la moitié d'une tarte en 4 parts : 2/4.", "Pour comparer avec 3/8, on écrit 2/4 en huitièmes : 2/4 = 4/8 (× 2 en haut et en bas).", "4/8 > 3/8 : ton ami a mangé un huitième de plus que toi."] },
            { t: "verifie", q: "Quelle fraction est égale à 1/2 ?", choix: ["2/3", "3/6", "1/4", "2/1"], bonne: 1, explication: "3/6 = 1/2 car 1 × 3 = 3 et 2 × 3 = 6. On a multiplié le numérateur et le dénominateur par le même nombre." },
          ],
        },
        {
          titre: "Comparer à 1, comparer entre elles",
          blocs: [
            { t: "propriete", titre: "Une fraction et le nombre 1", md: "Si le numérateur **égale** le dénominateur, la fraction vaut 1 : 4/4 = 3/3 = 7/7 = 1 (on a pris toutes les parts).\nS'il est **plus grand**, la fraction est plus grande que 1 : 7/5 > 1. S'il est **plus petit**, elle est plus petite que 1 : 3/4 < 1.\nEt 6/3 = 2, car 6 tiers font 2 unités." },
            { t: "texte", md: "Avec le **même numérateur**, compare la taille des parts : plus on partage l'unité en parts nombreuses, plus chaque part est **petite**. Un tiers de pizza est plus gros qu'un cinquième : **1/5 < 1/3**." },
            { t: "attention", md: "« 1/3 < 1/5 parce que 3 < 5 » est **faux**. Pense aux parts : couper en 5 donne des parts plus petites que couper en 3." },
            { t: "tableau", titre: "Fractions et écritures décimales à connaître", entetes: ["Fraction", "1/10", "1/4", "1/2", "3/4", "1", "5/4"], lignes: [["Décimal", "0,1", "0,25", "0,5", "0,75", "1", "1,25"]] },
            { t: "verifie", q: "Range du plus petit au plus grand : 3/4 ; 1/4 ; 5/4 ; 1/2.", choix: ["1/4 < 1/2 < 3/4 < 5/4", "1/2 < 1/4 < 3/4 < 5/4", "5/4 < 3/4 < 1/2 < 1/4"], bonne: 0, explication: "En décimaux : 0,25 < 0,5 < 0,75 < 1,25. 5/4 dépasse 1 car 5 > 4." },
          ],
        },
        {
          titre: "Placer une fraction sur une droite graduée",
          blocs: [
            { t: "texte", md: "Pour placer **5/3**, on partage chaque unité en **3 parts égales** (le dénominateur), puis on compte **5 parts** à partir de 0 (le numérateur). Après 3 parts, on est sur 1 ; il reste 2 parts : 5/3 = 1 + 2/3." },
            { t: "schema", titre: "Placer 5/3 : chaque unité partagée en 3", legende: "Chaque graduation vaut 1/3. On fait 5 bonds d'un tiers à partir de 0 : on passe 1 (3/3) et on s'arrête 2 tiers plus loin.", svg: `<svg viewBox="0 0 400 160"><path class="trait" d="M20 100H385" marker-end="url(#fl)"/><path class="trait" d="M30 90V110M200 90V110M370 90V110"/><path class="trait-fin" d="M86.67 94V106M143.33 94V106M256.67 94V106M313.33 94V106"/><path d="M30 97Q58.33 70 86.67 97Q115 70 143.33 97Q171.67 70 200 97Q228.33 70 256.67 97Q285 70 313.33 97" stroke="var(--pigment)" stroke-width="1.5" fill="none"/><g class="texte-petit" text-anchor="middle"><text x="58.33" y="76">1</text><text x="115" y="76">2</text><text x="171.67" y="76">3</text><text x="228.33" y="76">4</text><text x="285" y="76">5</text><text x="86.67" y="125">1/3</text><text x="143.33" y="125">2/3</text><text x="256.67" y="125">4/3</text><text x="313.33" y="125">5/3</text><text x="200" y="143">3/3</text></g><g class="texte" text-anchor="middle"><text x="30" y="127">0</text><text x="200" y="127">1</text><text x="370" y="127">2</text></g><circle cx="313.33" cy="100" r="5" fill="var(--pigment)"/><text class="texte-main" x="313" y="50" text-anchor="middle">5/3 = 1 + 2/3</text></svg>` },
            { t: "exemple", titre: "Combien de quarts dans 2 unités et demie ?", etapes: ["Une unité contient 4 quarts, donc 2 unités en contiennent 8.", "Une demie, c'est 2 quarts (1/2 = 2/4).", "Au total : 8 + 2 = 10 quarts. 2 unités et demie = 10/4."] },
            { t: "droite", titre: "En quarts : une graduation = 1/4 = 0,25", min: 0, max: 3, pas: 0.25, points: [{ x: 0.75, label: "3/4" }, { x: 1.25, label: "5/4" }, { x: 2.5, label: "10/4" }] },
          ],
        },
        {
          titre: "Prendre une fraction d'une quantité",
          blocs: [
            { t: "schema", titre: "Les 3/4 de 20 élèves", legende: "On fait 4 groupes égaux de 5, puis on prend 3 groupes.", svg: `<svg viewBox="0 0 400 170"><rect class="aplat" x="20" y="40" width="85" height="50" rx="8"/><rect class="aplat" x="115" y="40" width="85" height="50" rx="8"/><rect class="aplat" x="210" y="40" width="85" height="50" rx="8"/><rect class="aplat-papier" x="305" y="40" width="85" height="50" rx="8"/><rect class="trait-fin" x="20" y="40" width="85" height="50" rx="8" fill="none"/><rect class="trait-fin" x="115" y="40" width="85" height="50" rx="8" fill="none"/><rect class="trait-fin" x="210" y="40" width="85" height="50" rx="8" fill="none"/><rect class="trait-fin" x="305" y="40" width="85" height="50" rx="8" fill="none"/><g fill="var(--encre)"><circle cx="32.5" cy="65" r="5"/><circle cx="47.5" cy="65" r="5"/><circle cx="62.5" cy="65" r="5"/><circle cx="77.5" cy="65" r="5"/><circle cx="92.5" cy="65" r="5"/><circle cx="127.5" cy="65" r="5"/><circle cx="142.5" cy="65" r="5"/><circle cx="157.5" cy="65" r="5"/><circle cx="172.5" cy="65" r="5"/><circle cx="187.5" cy="65" r="5"/><circle cx="222.5" cy="65" r="5"/><circle cx="237.5" cy="65" r="5"/><circle cx="252.5" cy="65" r="5"/><circle cx="267.5" cy="65" r="5"/><circle cx="282.5" cy="65" r="5"/><circle cx="317.5" cy="65" r="5"/><circle cx="332.5" cy="65" r="5"/><circle cx="347.5" cy="65" r="5"/><circle cx="362.5" cy="65" r="5"/><circle cx="377.5" cy="65" r="5"/></g><text class="texte-petit" x="62.5" y="30" text-anchor="middle">1/4</text><text class="texte-petit" x="157.5" y="30" text-anchor="middle">1/4</text><text class="texte-petit" x="252.5" y="30" text-anchor="middle">1/4</text><text class="texte-petit" x="347.5" y="30" text-anchor="middle">1/4</text><text class="texte" x="200" y="122" text-anchor="middle">20 ÷ 4 = 5 élèves par groupe</text><text class="texte-main" x="200" y="150" text-anchor="middle">3 groupes : 3 × 5 = 15 élèves</text></svg>` },
            { t: "propriete", titre: "Fraction d'une quantité", md: "Pour prendre les **3/4 de 20**, on divise par le dénominateur, puis on multiplie par le numérateur : 20 ÷ 4 = 5, puis 5 × 3 = **15**." },
            { t: "exemple", titre: "La cantine", md: "Une classe compte 20 élèves ; les 3/4 mangent à la cantine. Un quart de la classe, c'est 20 ÷ 4 = 5 élèves. Trois quarts, c'est 3 × 5 = **15 élèves**. Les 5 autres rentrent chez eux." },
          ],
        },
      ],
      bilan: "Le dénominateur partage, le numérateur compte. Avec cette seule idée, tu lis, compares, places et calcules n'importe quelle fraction.",
    },
    "6e-maths-04-additionner-soustraire-multiplier": {
      accroche: "À la caisse, Léa achète 3 cahiers à 2,45 € et 2 stylos à 1,30 €. Elle a 10 € en poche : est-ce que ça suffit ? Pour le savoir en quelques secondes, il faut savoir poser, calculer de tête… et estimer.",
      objectifs: [
        "Poser additions, soustractions et multiplications d'entiers et de décimaux",
        "Multiplier par 10, 100, 1 000 et calculer astucieusement de tête",
        "Estimer un ordre de grandeur pour vérifier un résultat",
        "Résoudre un problème avec plusieurs opérations",
      ],
      sections: [
        {
          titre: "Le vocabulaire des opérations",
          blocs: [
            { t: "tableau", titre: "Chaque résultat a son nom", entetes: ["Opération", "Le résultat s'appelle", "Exemple"], lignes: [["Addition", "une **somme**", "347 + 285 = 632"], ["Soustraction", "une **différence**", "1 000 − 457 = 543"], ["Multiplication", "un **produit**", "8 × 7 = 56"]] },
            { t: "propriete", titre: "Changer l'ordre ?", md: "L'addition et la multiplication sont **commutatives** : on peut échanger les nombres sans changer le résultat. 25 + 8 = 8 + 25 et 4 × 9 = 9 × 4.\nLa soustraction, **non** : 8 − 3 = 5, mais 3 − 8 n'est même pas un nombre que tu connais encore !" },
            { t: "astuce", md: "La commutativité permet de regrouper les nombres qui « vont bien ensemble » : 4 × 17 × 25 = (4 × 25) × 17 = 100 × 17 = 1 700." },
            { t: "verifie", q: "Dans une soustraction, peut-on échanger les deux nombres sans changer le résultat ?", choix: ["Oui, toujours", "Non", "Seulement avec des décimaux"], bonne: 1, explication: "10 − 4 = 6 mais 4 − 10 ne vaut pas 6. Seules l'addition et la multiplication sont commutatives." },
          ],
        },
        {
          titre: "Poser une opération avec des décimaux",
          blocs: [
            { t: "texte", md: "Pourquoi aligner les virgules ? Parce qu'on additionne des choses **de même rang** : des unités avec des unités, des dixièmes avec des dixièmes. Si tu alignes les chiffres sans réfléchir, tu ajoutes des dixièmes à des centièmes, comme si tu ajoutais des euros à des centimes." },
            { t: "schema", titre: "Les virgules en colonne", legende: "On aligne les virgules et on complète avec des zéros pour avoir autant de chiffres après la virgule.", svg: `<svg viewBox="0 0 400 195"><rect class="aplat" x="97" y="48" width="14" height="102"/><rect class="aplat" x="297" y="48" width="14" height="102"/><text class="texte" x="95" y="30" text-anchor="middle">3,5 + 1,25</text><text class="texte" x="295" y="30" text-anchor="middle">12,6 − 4,85</text><g class="texte-main" text-anchor="middle"><text x="90" y="72">3</text><text x="104" y="72">,</text><text x="118" y="72">5</text><text x="50" y="102">+</text><text x="90" y="102">1</text><text x="104" y="102">,</text><text x="118" y="102">2</text><text x="138" y="102">5</text><text x="90" y="140">4</text><text x="104" y="140">,</text><text x="118" y="140">7</text><text x="138" y="140">5</text><text x="270" y="72">1</text><text x="290" y="72">2</text><text x="304" y="72">,</text><text x="318" y="72">6</text><text x="245" y="102">−</text><text x="290" y="102">4</text><text x="304" y="102">,</text><text x="318" y="102">8</text><text x="338" y="102">5</text><text x="290" y="140">7</text><text x="304" y="140">,</text><text x="318" y="140">7</text><text x="338" y="140">5</text></g><text class="texte-pigment" x="138" y="72" text-anchor="middle">0</text><text class="texte-pigment" x="338" y="72" text-anchor="middle">0</text><path class="trait" d="M40 114H152M240 114H352"/><text class="texte-petit" x="200" y="182" text-anchor="middle">Le 0 ajouté ne change pas le nombre : 3,5 = 3,50 et 12,6 = 12,60.</text></svg>` },
            { t: "exemple", titre: "Calculer 1 000 − 457", etapes: ["On pose 457 sous 1 000, unités sous unités.", "0 − 7 est impossible : on fait 10 − 7 = 3 et on retient 1, qu'on ajoute au chiffre suivant du bas (5 devient 6).", "10 − 6 = 4, retenue ; 10 − 5 = 5, retenue ; 1 − 1 = 0.", "Résultat : 543. Vérification : 543 + 457 = 1 000."] },
            { t: "exemple", titre: "Le bus", md: "Un bus parcourt 48,5 km le matin et 36,75 km l'après-midi. De combien de kilomètres de plus roule-t-il le matin ? On cherche une **différence** : 48,50 − 36,75 = **11,75 km**." },
          ],
        },
        {
          titre: "Multiplier des décimaux",
          blocs: [
            { t: "texte", md: "Pour calculer 3,2 × 1,5, on peut voir 3,2 comme 32 dixièmes et 1,5 comme 15 dixièmes. Un dixième de dixième, c'est un **centième**. Le produit vaut donc 32 × 15 = 480 **centièmes**, soit 4,80. Voilà pourquoi la règle fonctionne." },
            { t: "propriete", titre: "Placer la virgule d'un produit", md: "On multiplie **sans les virgules**, puis on place la virgule : le produit a **autant de chiffres après la virgule que les deux facteurs réunis**." },
            { t: "exemple", titre: "Calculer 3,2 × 1,5", etapes: ["Sans virgule : 32 × 15 = 32 × 10 + 32 × 5 = 320 + 160 = 480.", "3,2 a un chiffre après la virgule, 1,5 aussi : 2 chiffres en tout.", "On place la virgule : 4,80, c'est-à-dire 4,8.", "Ordre de grandeur : 3 × 1,5 = 4,5. C'est cohérent."] },
            { t: "tableau", titre: "Multiplier par 10, 100, 1 000", entetes: ["Calcul", "La virgule se décale", "Résultat"], lignes: [["4,7 × 10", "d'1 rang vers la droite", "47"], ["4,7 × 100", "de 2 rangs vers la droite", "470"], ["4,7 × 1 000", "de 3 rangs vers la droite", "4 700"], ["0,47 × 10", "d'1 rang vers la droite", "4,7"]] },
            { t: "attention", md: "4,7 × 100 n'est pas 4,700 ! Ajouter des zéros après la partie décimale ne change rien. Multiplier par 100 rend le nombre **cent fois plus grand** : chaque chiffre gagne deux rangs, et on complète avec des zéros si besoin (470)." },
          ],
        },
        {
          titre: "Calculer de tête et estimer",
          blocs: [
            { t: "definition", terme: "Ordre de grandeur", md: "Un résultat approché, calculé avec des nombres arrondis. On le cherche **avant** ou **après** le calcul pour repérer une grosse erreur : 398 + 203 ≈ 400 + 200 = 600 (le résultat exact est 601)." },
            { t: "liste", titre: "Quelques calculs astucieux", items: ["25 × 4 = 100 et 2,5 × 4 = 10 : à retenir par cœur.", "Multiplier par 25, c'est multiplier par 100 puis diviser par 4 : 36 × 25 = 3 600 ÷ 4 = **900**.", "Multiplier par 0,5, c'est prendre la **moitié** : 18 × 0,5 = 9.", "Les tables, sans hésiter : 8 × 7 = 56, 6 × 9 = 54, 7 × 7 = 49."] },
            { t: "exemple", titre: "Léa a-t-elle assez avec 10 € ?", etapes: ["Estimation : 3 × 2,5 + 2 × 1,3 ≈ 7,5 + 2,6, environ 10 €. C'est juste : il faut calculer.", "Cahiers : 3 × 2,45 = 7,35 €.", "Stylos : 2 × 1,30 = 2,60 €.", "Total : 7,35 + 2,60 = 9,95 €. Ouf, il lui reste 5 centimes !"] },
            { t: "verifie", q: "Quel calcul permet de trouver facilement 36 × 25 de tête ?", choix: ["36 × 100 ÷ 4", "36 × 20 + 5", "36 + 25 × 4"], bonne: 0, explication: "25, c'est 100 ÷ 4. Donc 36 × 25 = 3 600 ÷ 4 = 900." },
          ],
        },
      ],
      bilan: "Aligner les virgules pour additionner, les oublier puis les replacer pour multiplier, et toujours estimer avant de conclure : voilà le calcul sûr.",
    },
    "6e-maths-05-division": {
      accroche: "125 élèves partent en sortie dans des bus de 48 places. Combien de bus faut-il réserver ? La calculatrice affiche 2,604… Or on ne réserve pas « 2,6 bus » ! La division cache plusieurs réponses : à toi de choisir la bonne.",
      objectifs: [
        "Effectuer une division euclidienne : quotient et reste",
        "Reconnaître multiples et diviseurs avec les critères de divisibilité",
        "Calculer un quotient décimal",
        "Choisir la bonne réponse dans un problème de partage",
      ],
      sections: [
        {
          titre: "Partager équitablement : la division euclidienne",
          blocs: [
            { t: "texte", md: "On partage 47 billes entre 6 enfants. Chacun en reçoit 7 (car 6 × 7 = 42), et il en reste 5 : impossible de les partager sans casser les billes. C'est une **division euclidienne** : on cherche combien de fois 6 « tient » dans 47, et ce qui reste." },
            { t: "schema", titre: "La potence de 47 ÷ 6", legende: "On cherche le plus grand multiple de 6 inférieur ou égal à 47 : c'est 42 = 6 × 7.", svg: `<svg viewBox="0 0 400 200"><path class="trait" d="M160 45V150M160 82H230"/><text class="texte-main" x="140" y="70" text-anchor="end">47</text><text class="texte-main" x="140" y="102" text-anchor="end">− 42</text><path class="trait-fin" d="M100 112H150"/><text class="texte-main" x="140" y="137" text-anchor="end">5</text><text class="texte-main" x="195" y="70" text-anchor="middle">6</text><text class="texte-main" x="195" y="112" text-anchor="middle">7</text><text class="texte-pigment" x="92" y="70" text-anchor="end">dividende</text><text class="texte-pigment" x="118" y="137" text-anchor="end">reste</text><text class="texte-pigment" x="245" y="70">diviseur</text><text class="texte-pigment" x="245" y="112">quotient</text><text class="texte" x="200" y="182" text-anchor="middle">47 = 6 × 7 + 5, avec 5 &lt; 6</text></svg>` },
            { t: "definition", terme: "Division euclidienne", md: "Diviser le **dividende** 47 par le **diviseur** 6, c'est trouver le **quotient** 7 et le **reste** 5 tels que 47 = 6 × 7 + 5." },
            { t: "propriete", titre: "Le reste est toujours plus petit que le diviseur", md: "Si le reste était 6 ou plus, on pourrait encore donner une bille à chaque enfant : le partage ne serait pas fini." },
            { t: "verifie", q: "Quel est le reste de la division euclidienne de 47 par 6 ?", choix: ["7", "5", "1"], bonne: 1, explication: "47 = 6 × 7 + 5. Le quotient est 7, le reste est 5, bien plus petit que 6." },
          ],
        },
        {
          titre: "Multiples, diviseurs et critères",
          blocs: [
            { t: "definition", terme: "Multiple et diviseur", md: "Quand le reste vaut **0**, la division « tombe juste ». 48 = 6 × 8 : on dit que 48 est un **multiple** de 6, et que 6 est un **diviseur** de 48 (8 aussi). 48 est dans la table de 6." },
            { t: "tableau", titre: "Les critères de divisibilité", entetes: ["Divisible par…", "si…", "Exemple"], lignes: [["2", "il se termine par 0, 2, 4, 6 ou 8", "1 234"], ["5", "il se termine par 0 ou 5", "125"], ["10", "il se termine par 0", "370"], ["3", "la somme de ses chiffres est dans la table de 3", "111 : 1 + 1 + 1 = 3"], ["9", "la somme de ses chiffres est dans la table de 9", "207 : 2 + 0 + 7 = 9"]] },
            { t: "etapes", titre: "3 456 est-il divisible par 9 ?", items: [{ titre: "J'additionne", md: "3 + 4 + 5 + 6" }, { titre: "Je trouve", md: "La somme vaut 18." }, { titre: "Je vérifie", md: "18 = 9 × 2 est dans la table de 9." }, { titre: "Je conclus", md: "3 456 est divisible par 9 (et donc aussi par 3)." }] },
            { t: "attention", md: "Pour 3 et 9, on ne regarde **pas** le dernier chiffre ! 19 se termine par 9 mais n'est pas divisible par 9 (1 + 9 = 10). Et 1 003 n'est divisible ni par 2, ni par 5, ni par 9 (1 + 0 + 0 + 3 = 4)." },
          ],
        },
        {
          titre: "La division décimale",
          blocs: [
            { t: "texte", md: "Si on partage 45 € entre 4 personnes, on peut aller plus loin que le reste : les euros restants se changent en centimes ! Dans une division décimale, on continue **après la virgule** en ajoutant des zéros au dividende (45 = 45,00)." },
            { t: "exemple", titre: "Calculer 45 ÷ 4", etapes: ["45 ÷ 4 : quotient 11, reste 1. On écrit la virgule au quotient.", "1 unité = 10 dixièmes. 10 ÷ 4 = 2, reste 2 dixièmes.", "2 dixièmes = 20 centièmes. 20 ÷ 4 = 5, reste 0 : c'est fini.", "45 ÷ 4 = 11,25. Vérification : 4 × 11,25 = 45."] },
            { t: "exemple", titre: "Deux autres divisions", md: "7,2 ÷ 3 : 7 ÷ 3 = 2 reste 1 ; 12 dixièmes ÷ 3 = 4. Donc **7,2 ÷ 3 = 2,4**.\n17 ÷ 8 = **2,125** (vérification : 8 × 2,125 = 17)." },
          ],
        },
        {
          titre: "Quotient, quotient + 1 ou reste ?",
          blocs: [
            { t: "texte", md: "Dans un problème, le calcul ne suffit pas : il faut **relire la question**. Selon ce qu'on demande, la réponse est le quotient, le quotient plus 1, ou le reste." },
            { t: "exemple", titre: "Les bus", etapes: ["125 = 48 × 2 + 29 : 2 bus pleins, et 29 élèves sans place.", "On ne laisse personne au collège : il faut un bus de plus.", "Réponse : **3 bus** (quotient + 1). Le troisième ne sera pas plein."] },
            { t: "verifie", q: "On range 250 œufs dans des boîtes de 12. Combien d'œufs restent hors des boîtes pleines ?", choix: ["20", "10", "2"], bonne: 1, explication: "250 = 12 × 20 + 10 : 20 boîtes pleines et 10 œufs restants. Ici, la réponse est le reste." },
            { t: "astuce", md: "Vérifie toujours avec l'égalité : diviseur × quotient + reste = dividende. 12 × 20 + 10 = 240 + 10 = 250." },
          ],
        },
      ],
      bilan: "Diviser, c'est partager : le quotient dit combien chacun reçoit, le reste ce qui ne se partage pas. Relis la question pour savoir lequel tu cherches.",
    },
    "6e-maths-06-proportionnalite": {
      accroche: "Une baguette coûte 1,20 €. Deux baguettes ? 2,40 €. Quatre ? 4,80 €. Facile ! Mais si une enfant mesure 1,40 m à 10 ans, mesurera-t-elle 2,80 m à 20 ans ? Heureusement non. Savoir reconnaître la proportionnalité évite bien des bêtises.",
      objectifs: [
        "Reconnaître une situation de proportionnalité",
        "Compléter un tableau par passage à l'unité ou avec le coefficient",
        "Calculer des pourcentages simples",
        "Utiliser une échelle de plan ou de carte",
      ],
      sections: [
        {
          titre: "Reconnaître la proportionnalité",
          blocs: [
            { t: "definition", terme: "Grandeurs proportionnelles", md: "Deux grandeurs sont **proportionnelles** si on passe de l'une à l'autre en multipliant **toujours par le même nombre**. Ce nombre s'appelle le **coefficient de proportionnalité**." },
            { t: "texte", md: "Le prix des baguettes est proportionnel au nombre de baguettes : on multiplie toujours par 1,20. Quand le nombre double, le prix double ; quand il triple, le prix triple." },
            { t: "attention", md: "Beaucoup de situations ne sont **pas** proportionnelles : la taille d'une personne et son âge (on arrête de grandir !), ou un prix avec une partie fixe, comme un taxi qui fait payer 4 € de prise en charge plus 1 € par kilomètre." },
            { t: "verifie", q: "Laquelle de ces situations est une situation de proportionnalité ?", choix: ["L'âge et la taille d'un enfant", "Le nombre de kilos de pommes et leur prix", "La pointure et l'âge"], bonne: 1, explication: "Chaque kilo coûte le même prix : on multiplie toujours le nombre de kilos par le prix d'un kilo." },
          ],
        },
        {
          titre: "Le tableau de proportionnalité",
          blocs: [
            { t: "schema", titre: "Un tableau et ses flèches", legende: "On passe de la 1re ligne à la 2e en multipliant par 1,5 ; et si une colonne double, l'autre aussi.", svg: `<svg viewBox="0 0 400 175"><rect class="aplat" x="20" y="40" width="100" height="80"/><rect class="trait" x="20" y="40" width="295" height="80" fill="none"/><path class="trait-fin" d="M20 80H315M120 40V120M185 40V120M250 40V120"/><text class="texte" x="70" y="65" text-anchor="middle">Stylos</text><text class="texte" x="70" y="105" text-anchor="middle">Prix (€)</text><g class="texte-main" text-anchor="middle"><text x="152.5" y="66">2</text><text x="217.5" y="66">4</text><text x="282.5" y="66">6</text><text x="152.5" y="106">3</text><text x="217.5" y="106">6</text><text x="282.5" y="106">9</text></g><path class="trait-fin" d="M320 60C352 60 352 100 320 100" fill="none" marker-end="url(#fl-p)"/><text class="texte-pigment" x="356" y="85">× 1,5</text><path class="trait-fin" d="M155 34Q186 8 214 34" fill="none" marker-end="url(#fl)"/><text class="texte-petit" x="185" y="16" text-anchor="middle">× 2</text><path class="trait-fin" d="M155 126Q186 152 214 126" fill="none" marker-end="url(#fl)"/><text class="texte-petit" x="185" y="164" text-anchor="middle">× 2</text></svg>` },
            { t: "propriete", titre: "Deux façons de compléter", md: "**Avec le coefficient** : on multiplie la 1re ligne par le même nombre (ici 1,5).\n**Entre les colonnes** : si on multiplie une valeur par un nombre, celle qui lui correspond est multipliée par le même nombre." },
            { t: "exemple", titre: "5 correspond à 12. À quoi correspond 15 ?", md: "15 = 5 × 3. Donc la valeur cherchée est 12 × 3 = **36**. Pas besoin du coefficient !" },
          ],
        },
        {
          titre: "Le passage à l'unité",
          blocs: [
            { t: "texte", md: "Quand les nombres ne « tombent » pas bien, on calcule d'abord la valeur pour **une seule** unité : c'est le **passage à l'unité**." },
            { t: "exemple", titre: "6 stylos coûtent 9 €. Combien coûtent 4 stylos ?", etapes: ["Un stylo coûte 9 ÷ 6 = 1,5 €.", "4 stylos coûtent 4 × 1,5 = 6 €.", "De même : 3 cahiers à 6 € → 1 cahier à 2 € → 5 cahiers à **10 €**. Et 4 kg de pommes à 10 € → 1 kg à 2,50 € → 7 kg à **17,50 €**."] },
            { t: "tableau", titre: "Une voiture consomme 6,5 L pour 100 km", entetes: ["Distance (km)", "100", "50", "250"], lignes: [["Essence (L)", "6,5", "3,25", "16,25"]] },
            { t: "texte", md: "Pour 250 km, on décompose : 250 = 100 + 100 + 50, donc 6,5 + 6,5 + 3,25 = **16,25 L**. On peut aussi multiplier : 6,5 × 2,5 = 16,25." },
          ],
        },
        {
          titre: "Les pourcentages",
          blocs: [
            { t: "definition", terme: "Pourcentage", md: "« 25 % » se lit « 25 pour cent » et signifie **25 sur 100**, c'est-à-dire 25/100. Prendre 25 % d'une quantité, c'est en prendre les 25/100." },
            { t: "graphique", type: "secteurs", titre: "Comment les élèves viennent au collège", unite: "%", donnees: [{ label: "À pied", valeur: 50 }, { label: "En bus", valeur: 25 }, { label: "À vélo", valeur: 15 }, { label: "En voiture", valeur: 10 }] },
            { t: "propriete", titre: "Les pourcentages à connaître", md: "**100 %**, c'est la totalité. **50 %**, la moitié. **25 %**, le quart. **10 %**, le dixième.\n50 % de 80 = 80 ÷ 2 = 40 ; 25 % de 60 = 60 ÷ 4 = 15 ; 10 % de 350 = 350 ÷ 10 = 35 ; 20 % de 50 = 2 × 10 % = 2 × 5 = 10." },
            { t: "verifie", q: "Combien font 25 % de 60 ?", choix: ["25", "15", "6", "35"], bonne: 1, explication: "25 %, c'est le quart : 60 ÷ 4 = 15." },
          ],
        },
        {
          titre: "Les échelles",
          blocs: [
            { t: "definition", terme: "Échelle", md: "Sur un plan à l'échelle **1/100**, les longueurs réelles sont 100 fois plus grandes : 1 cm sur le plan représente 100 cm, soit 1 m, en vrai. Plan et réalité sont proportionnels." },
            { t: "exemple", titre: "Du plan à la réalité", etapes: ["Échelle 1/100 : un mur de 3 cm sur le plan mesure 3 × 100 = 300 cm, soit **3 m**.", "Échelle 1/25 000 : deux villages à 4 cm sur la carte sont à 4 × 25 000 = 100 000 cm.", "100 000 cm = 1 000 m = **1 km**."] },
            { t: "attention", md: "Le résultat d'un calcul d'échelle est dans la même unité que la mesure sur le plan (souvent en cm). Convertis ensuite en m ou en km pour que la réponse ait du sens." },
          ],
        },
      ],
      bilan: "Proportionnel, c'est « toujours multiplié par le même nombre ». Passe par l'unité quand c'est difficile, et vérifie toujours que la situation est vraiment proportionnelle.",
    },
    "6e-maths-07-longueurs-masses-durees": {
      accroche: "Ton film commence à 20 h 45 et dure 1 h 50 min. Tu tapes 20,45 + 1,50 sur la calculatrice et tu trouves 21,95 : il finirait à « 21 h 95 » ?! Les heures ne se comptent pas comme les mètres. Ce chapitre t'apprend à mesurer sans te tromper d'unité.",
      objectifs: [
        "Convertir des longueurs et des masses avec un tableau d'unités",
        "Calculer avec des durées en heures, minutes et secondes",
        "Calculer le périmètre d'un polygone, d'un carré, d'un rectangle",
        "Calculer la longueur d'un cercle",
      ],
      sections: [
        {
          titre: "Les longueurs : tout va de 10 en 10",
          blocs: [
            { t: "texte", md: "L'unité principale de longueur est le **mètre** (m). Les autres unités sont 10, 100, 1 000 fois plus grandes ou plus petites. Chaque unité vaut **10 fois** celle qui est à sa droite : 1 km = 1 000 m, 1 m = 100 cm, 1 cm = 10 mm.\n\nPour convertir, on écrit le nombre dans le **tableau d'unités** : un chiffre par colonne, le chiffre des unités dans la colonne de l'unité donnée." },
            { t: "tableau", titre: "Le tableau des longueurs", entetes: ["Mesure", "km", "hm", "dam", "m", "dm", "cm", "mm", "Résultat"], lignes: [["3,5 km", "3", "5", "0", "0", "", "", "", "3 500 m"], ["4 m 5 cm", "", "", "", "4", "0", "5", "", "405 cm"], ["0,8 m", "", "", "", "0", "8", "0", "", "80 cm"], ["1 dam", "", "", "1", "0", "", "", "", "10 m"]] },
            { t: "exemple", titre: "Convertir 4 m 5 cm en cm", etapes: ["On place 4 dans la colonne des m et 5 dans celle des cm.", "La colonne des dm est vide : on y écrit **0**.", "On lit le nombre jusqu'à la colonne des cm : 405 cm."] },
            { t: "attention", md: "4 m 5 cm ne fait pas 45 cm ! Sans le 0 des décimètres, on perd un rang : le 4 deviendrait 4 décimètres." },
          ],
        },
        {
          titre: "Les masses",
          blocs: [
            { t: "texte", md: "L'unité principale de masse est le **gramme** (g). On utilise surtout le kilogramme : **1 kg = 1 000 g**. Pour les grosses masses : la **tonne**, 1 t = 1 000 kg, et le quintal, 1 q = 100 kg." },
            { t: "tableau", titre: "Le tableau des masses", entetes: ["Mesure", "kg", "hg", "dag", "g", "dg", "cg", "mg", "Résultat"], lignes: [["250 g", "0", "2", "5", "0", "", "", "", "0,25 kg"], ["1,2 kg", "1", "2", "0", "0", "", "", "", "1 200 g"], ["3 g", "", "", "", "3", "0", "0", "0", "3 000 mg"]] },
            { t: "exemple", titre: "Ranger 1,2 kg ; 950 g ; 0,01 t ; 2 kg ; 1 500 g", md: "On convertit tout en grammes : 1 200 g ; 950 g ; 10 000 g (car 0,01 t = 10 kg) ; 2 000 g ; 1 500 g.\nDe la plus légère à la plus lourde : **950 g < 1,2 kg < 1 500 g < 2 kg < 0,01 t**." },
            { t: "verifie", q: "250 g, c'est combien de kilogrammes ?", choix: ["2,5 kg", "0,25 kg", "25 kg", "0,025 kg"], bonne: 1, explication: "1 kg = 1 000 g, donc 250 g = 250/1 000 kg = 0,25 kg. Un quart de kilo, comme une plaquette de beurre !" },
          ],
        },
        {
          titre: "Calculer avec des durées",
          blocs: [
            { t: "propriete", titre: "Les durées comptent par 60", md: "**1 h = 60 min** et **1 min = 60 s**, donc 1 h = 60 × 60 = **3 600 s**.\n2 h 15 min = 2 × 60 + 15 = **135 min**. Et 90 min = 60 min + 30 min = **1 h 30 min**." },
            { t: "attention", md: "1 h 30 min n'est **pas** 1,30 h ! Une demi-heure, c'est 0,5 h, donc 1 h 30 min = 1,5 h. Et 1 h n'est pas 100 min, mais 60." },
            { t: "etapes", titre: "À quelle heure finit le film ? (20 h 45 + 1 h 50 min)", items: [{ titre: "Départ", md: "Le film commence à 20 h 45." }, { titre: "+ 1 h", md: "20 h 45 + 1 h = 21 h 45." }, { titre: "+ 15 min", md: "On complète jusqu'à l'heure ronde : 21 h 45 + 15 min = 22 h." }, { titre: "+ 35 min", md: "Il reste 50 − 15 = 35 min : le film finit à **22 h 35**." }] },
          ],
        },
        {
          titre: "Le périmètre d'un polygone",
          blocs: [
            { t: "definition", terme: "Périmètre", md: "La **longueur du contour** d'une figure. Imagine une fourmi qui fait le tour complet : la distance qu'elle parcourt est le périmètre." },
            { t: "schema", titre: "Le périmètre d'un rectangle", legende: "Les côtés opposés ont la même longueur (même codage) : on additionne une longueur et une largeur, puis on double.", svg: `<svg viewBox="0 0 400 190"><rect class="aplat" x="40" y="40" width="180" height="96"/><rect class="trait" x="40" y="40" width="180" height="96" fill="none"/><path class="trait-fin" d="M50 40V50H40M210 40V50H220M210 136V126H220M50 136V126H40M130 35V45M130 131V141M35 85H45M35 91H45M215 85H225M215 91H225" fill="none"/><text class="texte" x="130" y="28" text-anchor="middle">7,5 cm</text><text class="texte" x="28" y="92" text-anchor="end">4 cm</text><text class="texte" x="250" y="70">P = 2 × (7,5 + 4)</text><text class="texte" x="250" y="96">P = 2 × 11,5</text><text class="texte-main" x="250" y="126">P = 23 cm</text><text class="texte-petit" x="200" y="172" text-anchor="middle">Le périmètre, c'est le tour complet de la figure.</text></svg>` },
            { t: "propriete", titre: "Formules de périmètre", md: "**Polygone** : on additionne les longueurs de tous les côtés.\n**Carré** de côté c : P = 4 × c.\n**Rectangle** de longueur L et largeur l : P = 2 × (L + l)." },
            { t: "exemple", titre: "Trois calculs", etapes: ["Triangle de côtés 5,2 cm, 3,8 cm et 6 cm : P = 5,2 + 3,8 + 6 = 15 cm.", "Carré de 6 cm de côté : P = 4 × 6 = 24 cm.", "Rectangle de périmètre 30 cm et de longueur 9 cm : une longueur et une largeur font 30 ÷ 2 = 15 cm, donc la largeur vaut 15 − 9 = **6 cm**."] },
          ],
        },
        {
          titre: "La longueur d'un cercle",
          blocs: [
            { t: "schema", titre: "On déroule le cercle", legende: "Quel que soit le cercle, sa longueur vaut un peu plus de 3 fois son diamètre : environ 3,14 fois.", svg: `<svg viewBox="0 0 400 190"><circle class="aplat" cx="70" cy="100" r="30"/><circle class="trait" cx="70" cy="100" r="30" fill="none"/><path class="trait-fin" d="M40 100H100"/><text class="texte-petit" x="70" y="94" text-anchor="middle">d</text><path class="trait" d="M130 130H318.5"/><path class="trait-fin" d="M130 122V138M190 122V138M250 122V138M310 122V138M318.5 122V138"/><text class="texte-petit" x="160" y="150" text-anchor="middle">d</text><text class="texte-petit" x="220" y="150" text-anchor="middle">d</text><text class="texte-petit" x="280" y="150" text-anchor="middle">d</text><text class="texte-petit" x="326" y="134">≈ 0,14 d</text><text class="texte" x="224" y="60" text-anchor="middle">Le cercle déroulé mesure</text><text class="texte" x="224" y="80" text-anchor="middle">un peu plus de 3 diamètres</text><text class="texte-main" x="200" y="180" text-anchor="middle">longueur = π × d = 2 × π × r</text></svg>` },
            { t: "propriete", titre: "Longueur d'un cercle", md: "Pour un cercle de rayon r (et de diamètre d = 2 × r) :\n**Longueur = 2 × π × r**, avec **π ≈ 3,14**." },
            { t: "exemple", titre: "Un cercle de rayon 5 cm", md: "Longueur ≈ 2 × 3,14 × 5 = 3,14 × 10 = **31,4 cm**." },
            { t: "savais-tu", md: "π (« pi ») est un nombre qui ne s'arrête jamais : 3,14159265… Des ordinateurs en ont calculé des milliers de milliards de décimales, et on n'a jamais trouvé de fin !" },
            { t: "verifie", q: "Quelle est la longueur d'un cercle de rayon 5 cm (π ≈ 3,14) ?", choix: ["15,7 cm", "31,4 cm", "78,5 cm"], bonne: 1, explication: "2 × π × r = 2 × 3,14 × 5 = 31,4 cm. 15,7 cm oublie le « 2 × »." },
          ],
        },
      ],
      bilan: "Longueurs et masses vont de 10 en 10, les durées de 60 en 60. Le périmètre, c'est le tour de la figure ; pour un cercle, 2 × π × r.",
    },
    "6e-maths-08-aires-volumes": {
      accroche: "Pour repeindre ta chambre, on te demande combien de mètres carrés de mur il faut couvrir. Pour remplir un aquarium, combien de litres d'eau verser. Aire et volume : deux façons de mesurer « combien de place » prend un objet.",
      objectifs: [
        "Calculer l'aire d'un carré, d'un rectangle et d'un triangle rectangle",
        "Distinguer aire et périmètre",
        "Convertir des unités d'aire",
        "Calculer le volume d'un pavé droit et le convertir en litres",
      ],
      sections: [
        {
          titre: "Mesurer une surface : l'aire",
          blocs: [
            { t: "definition", terme: "Aire", md: "L'**aire** d'une figure mesure la surface qu'elle occupe. On l'exprime avec une unité d'aire : le **cm²** (aire d'un carré de 1 cm de côté), le **m²**, etc." },
            { t: "schema", titre: "Combien de carreaux de 1 cm² ?", legende: "8 colonnes de 5 carreaux : 8 × 5 = 40 carreaux. Multiplier est plus rapide que compter !", svg: `<svg viewBox="0 0 400 185"><rect class="aplat" x="40" y="30" width="192" height="120"/><path class="trait-fin" d="M64 30V150M88 30V150M112 30V150M136 30V150M160 30V150M184 30V150M208 30V150M40 54H232M40 78H232M40 102H232M40 126H232"/><rect class="trait" x="40" y="30" width="192" height="120" fill="none"/><text class="texte" x="136" y="170" text-anchor="middle">8 cm</text><text class="texte" x="30" y="95" text-anchor="end">5 cm</text><text class="texte" x="252" y="60">1 carreau = 1 cm²</text><text class="texte" x="252" y="90">8 × 5 = 40 carreaux</text><text class="texte-main" x="252" y="122">Aire = 40 cm²</text></svg>` },
            { t: "propriete", titre: "Aire du rectangle et du carré", md: "**Rectangle** : Aire = longueur × largeur.\n**Carré** de côté c : Aire = c × c.\nUn carré de 7 cm de côté a une aire de 7 × 7 = **49 cm²**." },
            { t: "exemple", titre: "Retrouver une longueur", md: "Un rectangle a une aire de 36 cm² et une largeur de 4 cm. Quel nombre multiplié par 4 donne 36 ? 36 ÷ 4 = 9 : la longueur est **9 cm**." },
          ],
        },
        {
          titre: "L'aire du triangle rectangle",
          blocs: [
            { t: "texte", md: "Trace la diagonale d'un rectangle : tu obtiens **deux triangles rectangles identiques**. Chacun occupe donc exactement **la moitié** du rectangle." },
            { t: "schema", titre: "Un triangle rectangle, c'est un demi-rectangle", legende: "Les deux côtés de l'angle droit mesurent 6 cm et 4 cm.", svg: `<svg viewBox="0 0 400 195"><rect class="aplat-papier" x="60" y="40" width="180" height="120"/><path class="aplat-fort" d="M60 40L60 160L240 160Z"/><path class="pointille" d="M60 40H240V160"/><path class="trait" d="M60 40L60 160L240 160Z" fill="none"/><path class="trait-fin" d="M60 148H72V160" fill="none"/><text class="texte" x="150" y="180" text-anchor="middle">6 cm</text><text class="texte" x="50" y="104" text-anchor="end">4 cm</text><text class="texte-petit" x="255" y="80">rectangle : 24 cm²</text><text class="texte-petit" x="255" y="105">triangle : 24 ÷ 2</text><text class="texte-main" x="255" y="135">= 12 cm²</text></svg>` },
            { t: "propriete", titre: "Aire du triangle rectangle", md: "Aire = (côté de l'angle droit × autre côté de l'angle droit) ÷ 2." },
            { t: "verifie", q: "Un triangle rectangle a des côtés de l'angle droit de 6 cm et 4 cm. Quelle est son aire ?", choix: ["24 cm²", "12 cm²", "10 cm²"], bonne: 1, explication: "C'est la moitié d'un rectangle de 6 cm sur 4 cm : 6 × 4 ÷ 2 = 12 cm². 24 cm² est l'aire du rectangle entier ; 10 est la somme 6 + 4." },
          ],
        },
        {
          titre: "Aire et périmètre : ne pas confondre",
          blocs: [
            { t: "texte", md: "Le **périmètre** mesure le **tour** (en cm), l'**aire** mesure l'**intérieur** (en cm²). Deux figures peuvent avoir le même périmètre et des aires très différentes. Avec une ficelle de 16 cm, tu peux fabriquer plusieurs rectangles :" },
            { t: "tableau", titre: "Même périmètre, aires différentes", entetes: ["Figure", "Périmètre", "Aire"], lignes: [["Rectangle 7 cm × 1 cm", "2 × (7 + 1) = 16 cm", "7 cm²"], ["Rectangle 6 cm × 2 cm", "2 × (6 + 2) = 16 cm", "12 cm²"], ["Carré 4 cm × 4 cm", "4 × 4 = 16 cm", "16 cm²"]] },
            { t: "attention", md: "Le périmètre s'exprime en **cm** (une longueur), l'aire en **cm²** (une surface). Écrire « aire = 16 cm » est une erreur d'unité." },
          ],
        },
        {
          titre: "Les unités d'aire",
          blocs: [
            { t: "texte", md: "Un carré de 1 m de côté mesure aussi 10 dm de côté. On peut donc le remplir avec 10 rangées de 10 carrés de 1 dm² : **1 m² = 100 dm²**. Pour les aires, on passe d'une unité à la suivante en multipliant par **100**, pas par 10." },
            { t: "tableau", titre: "Conversions d'aires", entetes: ["Égalité", "Pourquoi"], lignes: [["1 m² = 100 dm²", "10 × 10 carrés de 1 dm²"], ["1 dm² = 100 cm²", "10 × 10 carrés de 1 cm²"], ["1 m² = 10 000 cm²", "100 × 100 carrés de 1 cm²"], ["1 cm² = 100 mm²", "10 × 10 carrés de 1 mm²"]] },
            { t: "astuce", md: "Dans le tableau de conversion des aires, chaque unité occupe **deux colonnes**. Ainsi 3 m² = **300 dm²** : on décale de deux rangs." },
          ],
        },
        {
          titre: "Volumes et contenances",
          blocs: [
            { t: "definition", terme: "Volume", md: "Le **volume** mesure la place occupée dans l'espace. Un cube de 1 cm d'arête a un volume de **1 cm³** ; un cube de 1 m d'arête, de 1 **mètre cube** (1 m³)." },
            { t: "schema", titre: "L'aquarium : un pavé droit", legende: "Longueur 40 cm, largeur 25 cm (la profondeur), hauteur 30 cm. Les arêtes cachées sont en pointillés.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M80 90H240V210H80Z"/><path class="aplat-papier" d="M80 90L130 50H290L240 90Z"/><path class="pointille" d="M80 210L130 170M130 170V50M130 170H290"/><path class="trait" d="M80 90H240V210H80ZM80 90L130 50H290L240 90M290 50V170L240 210" fill="none"/><text class="texte" x="160" y="230" text-anchor="middle">40 cm</text><text class="texte" x="70" y="155" text-anchor="end">30 cm</text><text class="texte" x="272" y="202">25 cm</text><text class="texte-main" x="210" y="30" text-anchor="middle">V = 40 × 25 × 30</text></svg>` },
            { t: "propriete", titre: "Volume du pavé droit", md: "Volume = longueur × largeur × hauteur.\nUn pavé de 5 cm × 3 cm × 2 cm a un volume de 5 × 3 × 2 = **30 cm³**." },
            { t: "tableau", titre: "Volumes et contenances", entetes: ["Volume", "Contenance"], lignes: [["1 dm³", "1 L"], ["1 cm³", "1 mL"], ["1 m³", "1 000 L"], ["1 L", "100 cL = 1 000 mL"]] },
            { t: "exemple", titre: "Combien de litres dans l'aquarium ?", etapes: ["V = 40 × 25 × 30 = 1 000 × 30 = 30 000 cm³.", "1 000 cm³ = 1 dm³ = 1 L.", "30 000 cm³ = 30 dm³ = **30 L**. Et 2,5 L = 250 cL, puisque 1 L = 100 cL."] },
          ],
        },
      ],
      bilan: "L'aire compte des carrés, le volume compte des cubes : longueur × largeur pour l'une, longueur × largeur × hauteur pour l'autre. Et 1 dm³ = 1 L.",
    },
    "6e-maths-09-angles-droites": {
      accroche: "Un menuisier vérifie que l'angle d'une étagère est bien droit. Un architecte trace des rues parallèles. Un cartographe cherche le point à égale distance de deux villages. Tous utilisent le même vocabulaire précis : celui de la géométrie.",
      objectifs: [
        "Utiliser les notations de droite, segment, demi-droite et longueur",
        "Nommer, mesurer et construire un angle au rapporteur",
        "Reconnaître et tracer des droites parallèles et perpendiculaires",
        "Connaître la médiatrice d'un segment",
      ],
      sections: [
        {
          titre: "Droite, segment, demi-droite",
          blocs: [
            { t: "schema", titre: "Trois objets, trois notations", legende: "La droite est illimitée des deux côtés, le segment est limité par ses deux extrémités, la demi-droite a une origine mais pas de fin.", svg: `<svg viewBox="0 0 400 190"><path class="trait" d="M20 45H230M90 105H190M90 165H230"/><path class="trait-fin" d="M86 41L94 49M94 41L86 49M186 41L194 49M194 41L186 49M86 101L94 109M94 101L86 109M186 101L194 109M194 101L186 109M86 161L94 169M94 161L86 169M186 161L194 169M194 161L186 169"/><g class="texte" text-anchor="middle"><text x="90" y="33">A</text><text x="190" y="33">B</text><text x="90" y="93">A</text><text x="190" y="93">B</text><text x="90" y="153">A</text><text x="190" y="153">B</text></g><text class="texte" x="250" y="50">(AB) : droite</text><text class="texte" x="250" y="110">[AB] : segment</text><text class="texte" x="250" y="170">[AB) : demi-droite</text></svg>` },
            { t: "tableau", titre: "Les notations", entetes: ["Notation", "Ce qu'elle désigne"], lignes: [["(AB)", "la droite qui passe par A et B"], ["[AB]", "le segment d'extrémités A et B"], ["[AB)", "la demi-droite d'origine A passant par B"], ["AB", "la longueur du segment [AB] (un nombre)"]] },
            { t: "astuce", md: "Le crochet « ferme » le tracé : du côté du crochet, on s'arrête au point. Du côté de la parenthèse, on continue sans fin." },
            { t: "verifie", q: "Comment note-t-on la droite qui passe par A et B ?", choix: ["[AB]", "(AB)", "AB", "[AB)"], bonne: 1, explication: "Les parenthèses indiquent une droite, illimitée des deux côtés. [AB] est un segment et AB une longueur." },
          ],
        },
        {
          titre: "Les angles",
          blocs: [
            { t: "definition", terme: "Angle", md: "Deux demi-droites de même origine forment un **angle**. Leur origine commune est le **sommet** de l'angle ; les demi-droites sont ses **côtés**. Un angle se mesure en **degrés** (°)." },
            { t: "schema", titre: "Les types d'angles", legende: "Le petit carré code l'angle droit. L'angle plat est formé de deux demi-droites qui prolongent l'une l'autre.", svg: `<svg viewBox="0 0 400 210"><path class="trait" d="M95 150L25 150L78.6 105M190 150L125 150L125 85M300 150L250 150L211.43 104.04M320 150H390" fill="none"/><path class="trait-fin" d="M45 150A20 20 0 0 0 40.32 137.14M125 138H137V150M268 150A18 18 0 0 0 238.43 136.21M370 150A15 15 0 0 0 340 150" fill="none"/><circle cx="355" cy="150" r="3" fill="var(--encre)"/><g class="texte" text-anchor="middle"><text x="55" y="180">aigu</text><text x="150" y="180">droit</text><text x="255" y="180">obtus</text><text x="355" y="180">plat</text></g><g class="texte-petit" text-anchor="middle"><text x="55" y="197">moins de 90°</text><text x="150" y="197">90°</text><text x="255" y="197">entre 90° et 180°</text><text x="355" y="197">180°</text></g></svg>` },
            { t: "exemple", titre: "Un angle plat partagé en deux", md: "Un angle plat (180°) est partagé en deux angles. L'un mesure 68°. L'autre mesure 180 − 68 = **112°** : c'est un angle obtus." },
            { t: "verifie", q: "Un angle de 120° est un angle…", choix: ["aigu", "droit", "obtus", "plat"], bonne: 2, explication: "120° est compris entre 90° et 180° : l'angle est obtus." },
          ],
        },
        {
          titre: "Mesurer un angle au rapporteur",
          blocs: [
            { t: "etapes", titre: "Mesurer un angle en 4 gestes", items: [{ titre: "Centrer", md: "Je place le **centre** du rapporteur sur le **sommet** de l'angle." }, { titre: "Aligner", md: "Je fais coïncider le **zéro** d'une graduation avec un côté de l'angle." }, { titre: "Lire", md: "Je lis la mesure sur l'**autre côté**, en partant du zéro choisi." }, { titre: "Vérifier", md: "Je vérifie que la mesure est cohérente : un angle aigu mesure moins de 90°, un obtus plus." }] },
            { t: "attention", md: "Le rapporteur a **deux graduations** : l'une va de 0 à 180 dans un sens, l'autre dans l'autre sens. Sur le même trait, tu lis par exemple 35 et 145 (car 35 + 145 = 180)." },
            { t: "exemple", titre: "35° ou 145° ?", md: "On lit 35° et 145° pour le même angle. L'angle est visiblement plus petit qu'un angle droit : il est aigu. Sa mesure est donc **35°**." },
          ],
        },
        {
          titre: "Droites perpendiculaires et parallèles",
          blocs: [
            { t: "definition", terme: "Perpendiculaires et parallèles", md: "Deux droites **perpendiculaires** se coupent en formant un **angle droit** : on note (d) ⊥ (d'). Deux droites **parallèles** ne se coupent jamais, même prolongées : on note (d) // (d')." },
            { t: "schema", titre: "Deux perpendiculaires à une même droite", legende: "On trace les perpendiculaires à l'équerre : elles sont parallèles entre elles.", svg: `<svg viewBox="0 0 400 220"><path class="trait" d="M30 160H370M140 30V200M260 30V200"/><path class="trait-fin" d="M140 148H152V160M260 148H272V160" fill="none"/><text class="texte" x="30" y="150">(d)</text><text class="texte" x="146" y="42">(d1)</text><text class="texte" x="266" y="42">(d2)</text><text class="texte" x="200" y="214" text-anchor="middle">(d1) ⊥ (d) et (d2) ⊥ (d), donc (d1) // (d2)</text></svg>` },
            { t: "propriete", titre: "Perpendiculaires à une même droite", md: "Si deux droites sont **perpendiculaires à une même droite**, alors elles sont **parallèles** entre elles." },
            { t: "attention", md: "Ne dis pas que (d1) et (d2) sont perpendiculaires parce qu'elles sont toutes les deux perpendiculaires à (d) : elles sont **parallèles** ! Regarde le schéma : (d1) et (d2) ne se coupent jamais." },
          ],
        },
        {
          titre: "La médiatrice d'un segment",
          blocs: [
            { t: "definition", terme: "Médiatrice", md: "La **médiatrice** d'un segment est la droite **perpendiculaire** à ce segment **en son milieu**." },
            { t: "schema", titre: "La médiatrice de [AB]", legende: "I est le milieu de [AB] (même codage), (d) est perpendiculaire à [AB] en I. Le point M de (d) est à la même distance de A et de B.", svg: `<svg viewBox="0 0 400 220"><path class="trait" d="M100 150H300"/><path d="M200 25V205" stroke="var(--pigment)" stroke-width="2" fill="none"/><path class="pointille" d="M100 150L200 60L300 150" fill="none"/><path class="trait-fin" d="M200 138H212V150M146 156L154 144M246 156L254 144M96 146L104 154M104 146L96 154M296 146L304 154M304 146L296 154" fill="none"/><circle cx="200" cy="60" r="3" fill="var(--encre)"/><text class="texte" x="90" y="155" text-anchor="end">A</text><text class="texte" x="310" y="155">B</text><text class="texte" x="194" y="168" text-anchor="end">I</text><text class="texte" x="210" y="55">M</text><text class="texte-pigment" x="208" y="200">(d)</text><text class="texte-main" x="300" y="80">MA = MB</text></svg>` },
            { t: "propriete", titre: "Équidistance", md: "Tout point de la médiatrice de [AB] est **à égale distance** de A et de B. Si M est sur la médiatrice de [AB] et MA = 4 cm, alors **MB = 4 cm**." },
          ],
        },
      ],
      bilan: "Parenthèses ou crochets, aigu ou obtus, ⊥ ou // : la géométrie est un langage précis. La médiatrice, elle, est la droite de l'équité, à égale distance de A et de B.",
    },
    "6e-maths-10-triangles-quadrilateres-cercle": {
      accroche: "Regarde autour de toi : la vitre de la fenêtre est un rectangle, le panneau « cédez le passage » un triangle équilatéral, l'horloge un cercle. Pour décrire ces formes sans les dessiner, il suffit de connaître leurs propriétés… et de savoir les construire aux instruments.",
      objectifs: [
        "Reconnaître et nommer les triangles particuliers",
        "Reconnaître et nommer carré, rectangle et losange",
        "Utiliser le vocabulaire du cercle : centre, rayon, diamètre, corde",
        "Construire un triangle connaissant ses trois côtés",
      ],
      sections: [
        {
          titre: "Les triangles particuliers",
          blocs: [
            { t: "texte", md: "Sur une figure, les **codages** donnent les informations : de petits traits identiques sur des côtés signifient qu'ils ont la **même longueur** ; un petit carré signale un **angle droit**." },
            { t: "schema", titre: "Quatre familles de triangles", legende: "Les traits identiques codent des côtés de même longueur ; le petit carré code l'angle droit.", svg: `<svg viewBox="0 0 400 205"><path class="aplat" d="M15 150L85 150L50 89.38ZM115 150L185 150L150 75ZM215 150L285 150L215 90ZM310 150L390 140L335 95Z"/><path class="trait" d="M15 150L85 150L50 89.38ZM115 150L185 150L150 75ZM215 150L285 150L215 90ZM310 150L390 140L335 95Z" fill="none"/><path class="trait-fin" d="M50 144V156M27.3 116.69L37.7 122.69M62.3 122.69L72.7 116.69M127.06 109.96L137.94 115.04M162.06 115.04L172.94 109.96M215 140H225V150" fill="none"/><g class="texte" text-anchor="middle"><text x="50" y="180">équilatéral</text><text x="150" y="180">isocèle</text><text x="250" y="180">rectangle</text><text x="350" y="180">quelconque</text></g><g class="texte-petit" text-anchor="middle"><text x="50" y="197">3 côtés égaux</text><text x="150" y="197">2 côtés égaux</text><text x="250" y="197">1 angle droit</text><text x="350" y="197">côtés différents</text></g></svg>` },
            { t: "propriete", titre: "Les triangles à connaître", md: "**Équilatéral** : ses 3 côtés ont la même longueur.\n**Isocèle** : 2 côtés ont la même longueur ; le troisième s'appelle la **base**.\n**Rectangle** : il a un angle droit.\n**Quelconque** : il n'a aucune de ces propriétés." },
            { t: "exemple", titre: "Deux périmètres", etapes: ["Triangle isocèle de base 5 cm, dont les deux autres côtés mesurent 7 cm : P = 5 + 7 + 7 = 19 cm.", "Triangle équilatéral de périmètre 27 cm : ses 3 côtés sont égaux, donc chacun mesure 27 ÷ 3 = 9 cm."] },
          ],
        },
        {
          titre: "Les quadrilatères particuliers",
          blocs: [
            { t: "schema", titre: "Carré, rectangle, losange", legende: "Un quadrilatère a 4 côtés. Les codages montrent les côtés égaux et les angles droits.", svg: `<svg viewBox="0 0 400 180"><path class="aplat" d="M25 50H105V130H25ZM145 60H265V120H145ZM335 40L380 90L335 140L290 90Z"/><path class="trait" d="M25 50H105V130H25ZM145 60H265V120H145ZM335 40L380 90L335 140L290 90Z" fill="none"/><path class="trait-fin" d="M35 50V60H25M95 50V60H105M95 130V120H105M35 130V120H25M65 45V55M65 125V135M20 90H30M100 90H110M155 60V70H145M255 60V70H265M255 120V110H265M155 120V110H145M205 55V65M205 115V125M140 87H150M140 93H150M260 87H270M260 93H270M353.8 68.3L361.2 61.7M353.8 111.7L361.2 118.3M308.8 118.3L316.2 111.7M308.8 61.7L316.2 68.3" fill="none"/><g class="texte" text-anchor="middle"><text x="65" y="165">carré</text><text x="205" y="165">rectangle</text><text x="335" y="165">losange</text></g></svg>` },
            { t: "tableau", titre: "Les propriétés des quadrilatères", entetes: ["Figure", "Côtés", "Angles"], lignes: [["Carré", "4 côtés égaux", "4 angles droits"], ["Rectangle", "côtés opposés de même longueur", "4 angles droits"], ["Losange", "4 côtés égaux", "pas forcément droits"]] },
            { t: "propriete", titre: "Le carré, champion des deux familles", md: "Un **carré** a 4 angles droits : c'est donc un **rectangle**. Il a aussi 4 côtés égaux : c'est donc un **losange**. Un carré est à la fois un rectangle et un losange !" },
            { t: "attention", md: "Un losange n'a **pas toujours** 4 angles droits : celui du schéma est « penché ». Seul le losange qui a des angles droits est un carré." },
            { t: "verifie", q: "Un carré est-il aussi un rectangle ?", choix: ["Oui", "Non", "Seulement s'il est grand"], bonne: 0, explication: "Un rectangle est un quadrilatère à 4 angles droits. Le carré a 4 angles droits : c'est un rectangle particulier, dont les côtés sont en plus tous égaux." },
          ],
        },
        {
          titre: "Le cercle et son vocabulaire",
          blocs: [
            { t: "definition", terme: "Cercle", md: "Le **cercle** de centre O et de rayon r est formé de tous les points situés **à la distance r** du point O." },
            { t: "schema", titre: "Centre, rayon, diamètre, corde", legende: "Le diamètre [MN] passe par le centre ; la corde [EF], non.", svg: `<svg viewBox="0 0 400 240"><circle class="aplat-papier" cx="150" cy="120" r="90"/><circle class="trait" cx="150" cy="120" r="90" fill="none"/><path class="trait" d="M60 120H240M150 120L207.85 51.06"/><path d="M92.15 188.94L195 197.94" stroke="var(--pigment)" stroke-width="2" fill="none"/><g fill="var(--encre)"><circle cx="150" cy="120" r="3"/><circle cx="60" cy="120" r="3"/><circle cx="240" cy="120" r="3"/><circle cx="207.85" cy="51.06" r="3"/><circle cx="92.15" cy="188.94" r="3"/><circle cx="195" cy="197.94" r="3"/></g><text class="texte" x="144" y="138" text-anchor="end">O</text><text class="texte" x="214" y="46">R</text><text class="texte" x="52" y="124" text-anchor="end">M</text><text class="texte" x="248" y="124">N</text><text class="texte" x="84" y="200" text-anchor="end">E</text><text class="texte" x="202" y="214">F</text><text class="texte" x="258" y="70">O : le centre</text><text class="texte" x="258" y="100">[OR] : un rayon</text><text class="texte" x="258" y="130">[MN] : un diamètre</text><text class="texte" x="258" y="160">[EF] : une corde</text><text class="texte-main" x="258" y="195">MN = 2 × OR</text></svg>` },
            { t: "propriete", titre: "Rayon, diamètre, corde", md: "Un **rayon** joint le centre à un point du cercle. Une **corde** joint deux points du cercle. Un **diamètre** est une corde qui passe par le centre : **diamètre = 2 × rayon**.\nRayon 3,5 cm → diamètre 7 cm. Si M et N sont diamétralement opposés sur un cercle de rayon 4 cm, MN = **8 cm**." },
            { t: "etapes", titre: "Tracer un cercle de centre O et de rayon 3 cm", items: [{ titre: "Préparer", md: "Je place O et je trace un segment [OA] de 3 cm." }, { titre: "Régler", md: "Je pique la pointe sèche du compas en O et j'écarte le compas jusqu'au point A." }, { titre: "Tourner", md: "Je fais tourner le compas sans changer l'écartement." }, { titre: "Vérifier", md: "Je vérifie que le tracé revient bien sur le point A." }] },
          ],
        },
        {
          titre: "Construire un triangle aux instruments",
          blocs: [
            { t: "texte", md: "Pourquoi le compas ? Le sommet C doit être à 4 cm de A : il est donc **sur le cercle** de centre A et de rayon 4 cm. Il doit aussi être à 5 cm de B : il est sur le cercle de centre B et de rayon 5 cm. C est au **croisement** des deux cercles ! Un petit arc suffit pour chacun." },
            { t: "schema", titre: "Construire ABC : AB = 6 cm, AC = 4 cm, BC = 5 cm", legende: "Arc de centre A et de rayon 4 cm, arc de centre B et de rayon 5 cm : ils se coupent en C.", svg: `<svg viewBox="0 0 400 230"><path class="aplat" d="M100 190L340 190L190 57.71Z"/><path class="trait" d="M100 190L340 190L190 57.71Z" fill="none"/><path d="M154.72 39.65A160 160 0 0 1 222.57 87.15M166.8 90A200 200 0 0 1 225.28 26.17" stroke="var(--pigment)" stroke-width="1.5" fill="none"/><g fill="var(--encre)"><circle cx="100" cy="190" r="3"/><circle cx="340" cy="190" r="3"/><circle cx="190" cy="57.71" r="3"/></g><text class="texte" x="92" y="206" text-anchor="middle">A</text><text class="texte" x="348" y="206" text-anchor="middle">B</text><text class="texte" x="190" y="40" text-anchor="middle">C</text><text class="texte" x="220" y="210" text-anchor="middle">6 cm</text><text class="texte" x="138" y="122" text-anchor="end">4 cm</text><text class="texte" x="275" y="122">5 cm</text></svg>` },
            { t: "exemple", titre: "Le programme de construction", etapes: ["Je trace le segment [AB] de 6 cm à la règle.", "Je trace un arc de cercle de centre A et de rayon 4 cm.", "Je trace un arc de cercle de centre B et de rayon 5 cm.", "Les deux arcs se coupent en C : je trace [AC] et [BC]."] },
            { t: "verifie", q: "Après avoir tracé [AB] de 6 cm, que fait-on pour placer C (AC = 4 cm, BC = 5 cm) ?", choix: ["On mesure 4 cm au hasard à partir de A", "On trace un arc de centre A de rayon 4 cm et un arc de centre B de rayon 5 cm", "On trace la médiatrice de [AB]"], bonne: 1, explication: "C est à 4 cm de A et à 5 cm de B : il est à l'intersection des deux arcs de cercle." },
          ],
        },
      ],
      bilan: "Des côtés égaux, des angles droits, un centre et un rayon : quelques propriétés suffisent pour reconnaître une figure, et un compas suffit pour la construire.",
    },
    "6e-maths-11-symetrie-solides": {
      accroche: "Plie une feuille en deux, découpe une forme le long du pli, puis déplie : les deux moitiés sont parfaitement identiques. Les papillons, les visages et bien des monuments ont ce secret : la symétrie axiale. Et si tu déplies une boîte en carton, tu découvres son patron.",
      objectifs: [
        "Reconnaître les axes de symétrie d'une figure",
        "Construire le symétrique d'un point ou d'une figure par rapport à une droite",
        "Décrire un pavé droit et un cube : faces, arêtes, sommets",
        "Reconnaître et dessiner un patron de cube",
      ],
      sections: [
        {
          titre: "Les axes de symétrie d'une figure",
          blocs: [
            { t: "definition", terme: "Axe de symétrie", md: "Une droite est un **axe de symétrie** d'une figure si, quand on plie le long de cette droite, les deux parties de la figure se **superposent exactement**." },
            { t: "schema", titre: "Les axes du carré et du rectangle", legende: "Les axes sont en pointillés. Le carré en a 4 (2 médianes et 2 diagonales), le rectangle 2.", svg: `<svg viewBox="0 0 400 190"><rect class="aplat" x="40" y="40" width="100" height="100"/><rect class="trait" x="40" y="40" width="100" height="100" fill="none"/><rect class="aplat" x="220" y="60" width="150" height="60"/><rect class="trait" x="220" y="60" width="150" height="60" fill="none"/><path d="M90 25V155M25 90H155M30 30L150 150M150 30L30 150M295 45V135M205 90H385" stroke="var(--pigment)" stroke-width="1.5" stroke-dasharray="5 4" fill="none"/><text class="texte" x="90" y="178" text-anchor="middle">carré : 4 axes</text><text class="texte" x="295" y="178" text-anchor="middle">rectangle : 2 axes</text></svg>` },
            { t: "tableau", titre: "Combien d'axes ?", entetes: ["Figure", "Nombre d'axes"], lignes: [["Carré", "4"], ["Triangle équilatéral", "3"], ["Rectangle (non carré)", "2"], ["Losange (non carré)", "2"], ["Triangle isocèle", "1"], ["Lettre A ; lettre H ; lettre F", "1 ; 2 ; 0"], ["Cercle", "une infinité (tous les diamètres)"]] },
            { t: "attention", md: "Les **diagonales d'un rectangle** ne sont **pas** des axes de symétrie ! Plie un rectangle de papier le long d'une diagonale : les deux triangles ne se superposent pas, des coins dépassent." },
            { t: "verifie", q: "Combien un rectangle (qui n'est pas un carré) a-t-il d'axes de symétrie ?", choix: ["0", "2", "4"], bonne: 1, explication: "Les deux droites qui passent par les milieux des côtés opposés. Les diagonales ne sont pas des axes." },
          ],
        },
        {
          titre: "Construire un symétrique",
          blocs: [
            { t: "definition", terme: "Symétrique d'un point", md: "Le symétrique de A par rapport à la droite (d) est le point A' tel que (d) soit la **médiatrice** du segment [AA'] : (d) coupe [AA'] en son milieu, à angle droit. Un point situé **sur l'axe** est son propre symétrique." },
            { t: "schema", titre: "Symétriques de A, de B et de C", legende: "A et A' sont à la même distance de (d), de part et d'autre, sur une perpendiculaire à (d). C est sur l'axe : C' = C.", svg: `<svg viewBox="0 0 400 220"><path d="M200 15V205" stroke="var(--pigment)" stroke-width="2" fill="none"/><path class="pointille" d="M120 70H280M150 170H250"/><path class="trait" d="M120 70L150 170M280 70L250 170"/><path class="trait-fin" d="M200 58H212V70M200 158H212V170M157 76L163 64M237 76L243 64M170 176L176 164M175 176L181 164M220 176L226 164M225 176L231 164" fill="none"/><g fill="var(--encre)"><circle cx="120" cy="70" r="3"/><circle cx="280" cy="70" r="3"/><circle cx="150" cy="170" r="3"/><circle cx="250" cy="170" r="3"/><circle cx="200" cy="120" r="3"/></g><text class="texte" x="110" y="66" text-anchor="end">A</text><text class="texte" x="290" y="66">A'</text><text class="texte" x="140" y="182" text-anchor="end">B</text><text class="texte" x="260" y="182">B'</text><text class="texte" x="208" y="124">C = C'</text><text class="texte-pigment" x="207" y="28">(d)</text></svg>` },
            { t: "etapes", titre: "Construire A' à la règle et à l'équerre", items: [{ titre: "Perpendiculaire", md: "Je trace la perpendiculaire à (d) passant par A." }, { titre: "Mesure", md: "Je mesure la distance entre A et (d)." }, { titre: "Report", md: "Je reporte cette distance de l'autre côté de (d), sur la perpendiculaire." }, { titre: "Nom", md: "Je nomme A' le point obtenu." }] },
            { t: "astuce", md: "Pour le symétrique d'un segment [AB], construis A' et B', puis relie-les : [A'B'] est le symétrique de [AB]. Pour un triangle, fais de même avec ses trois sommets." },
          ],
        },
        {
          titre: "Ce que la symétrie conserve",
          blocs: [
            { t: "propriete", titre: "La symétrie axiale conserve tout", md: "Une figure et sa symétrique sont **superposables** (on passe de l'une à l'autre par pliage). La symétrie conserve donc les **longueurs**, les **angles**, les **aires** et l'**alignement** des points." },
            { t: "exemple", titre: "Sans rien mesurer", md: "Si AB = 3 cm, alors A'B' = 3 cm. Si un triangle a une aire de 12 cm², son symétrique a aussi une aire de **12 cm²**, et ses angles ont les mêmes mesures." },
            { t: "verifie", q: "Une figure et sa symétrique par rapport à une droite ont-elles la même aire ?", choix: ["Oui, toujours", "Non, jamais", "Seulement si la figure touche l'axe"], bonne: 0, explication: "Elles sont superposables par pliage : elles ont exactement la même forme et la même taille, donc la même aire." },
          ],
        },
        {
          titre: "Le pavé droit et le cube",
          blocs: [
            { t: "schema", titre: "Le vocabulaire d'un cube", legende: "En perspective, les arêtes cachées sont dessinées en pointillés.", svg: `<svg viewBox="0 0 400 230"><path class="aplat" d="M70 90H180V200H70Z"/><path class="aplat-papier" d="M70 90L115 50H225L180 90ZM180 90L225 50V160L180 200Z"/><path class="pointille" d="M70 200L115 160M115 160V50M115 160H225"/><path class="trait" d="M70 90H180V200H70ZM70 90L115 50H225L180 90M225 50V160L180 200" fill="none"/><path class="trait-fin" d="M265 41L232 49M265 106L232 106M265 186L212 138" fill="none" marker-end="url(#fl)"/><text class="texte" x="270" y="45">sommet</text><text class="texte" x="270" y="110">arête</text><text class="texte" x="270" y="190">face</text></svg>` },
            { t: "definition", terme: "Pavé droit et cube", md: "Un **pavé droit** est un solide dont les 6 **faces** sont des **rectangles**. Les faces se rejoignent le long des **arêtes**, qui se rejoignent aux **sommets**. Un **cube** est un pavé droit dont les 6 faces sont des **carrés** identiques." },
            { t: "tableau", titre: "Faces, arêtes, sommets", entetes: ["Solide", "Faces", "Arêtes", "Sommets"], lignes: [["Pavé droit", "6 rectangles", "12", "8"], ["Cube", "6 carrés", "12", "8"]] },
            { t: "exemple", titre: "Deux questions de pavés", etapes: ["Un cube a 12 arêtes de 4 cm : longueur totale 12 × 4 = 48 cm.", "Un pavé de 3 cm × 2 cm × 5 cm a ses faces par paires identiques : deux faces de 3 × 5, deux de 3 × 2, deux de 2 × 5.", "Donc **2 faces** mesurent 3 cm sur 5 cm."] },
          ],
        },
        {
          titre: "Les patrons",
          blocs: [
            { t: "definition", terme: "Patron", md: "Un **patron** d'un solide est une figure plane qui, une fois découpée et pliée, permet de fabriquer ce solide. Le patron d'un cube est formé de **6 carrés** identiques." },
            { t: "schema", titre: "Un patron de cube", legende: "Si l'on plie le long des traits intérieurs, le carré 1 et le carré 5 deviennent des faces opposées, comme 2 et 4, ou 3 et 6.", svg: `<svg viewBox="0 0 400 220"><path class="aplat" d="M150 10H200V60H250V110H200V210H150V110H100V60H150Z"/><path class="trait" d="M150 10H200V60H250V110H200V210H150V110H100V60H150Z" fill="none"/><path class="pointille" d="M150 60H200M150 110H200M150 160H200M150 60V110M200 60V110"/><g class="texte" text-anchor="middle"><text x="175" y="40">1</text><text x="125" y="90">2</text><text x="175" y="90">3</text><text x="225" y="90">4</text><text x="175" y="140">5</text><text x="175" y="190">6</text></g><text class="texte" x="275" y="80">6 carrés</text><text class="texte" x="275" y="100">identiques</text><text class="texte-petit" x="275" y="150">pointillés :</text><text class="texte-petit" x="275" y="166">lignes de pliage</text></svg>` },
            { t: "savais-tu", md: "Il existe exactement **11 patrons différents** du cube. Mais attention : 6 carrés collés ne forment pas toujours un patron ! Si 4 carrés sont autour d'un même sommet, ou si deux carrés se superposent au pliage, ça ne marche pas." },
            { t: "verifie", q: "De combien de carrés est formé le patron d'un cube ?", choix: ["4", "6", "8", "12"], bonne: 1, explication: "Un cube a 6 faces, toutes carrées : son patron contient 6 carrés. 8, c'est le nombre de sommets, 12 celui des arêtes." },
          ],
        },
      ],
      bilan: "Plier pour superposer, c'est la symétrie : elle conserve longueurs, angles et aires. Déplier pour aplatir, c'est le patron : 6 faces, 12 arêtes et 8 sommets pour le cube.",
    },
    "6e-maths-12-donnees-algorithmique": {
      accroche: "Chaque jour, des tableaux, des graphiques et des programmes nous entourent : la météo, les résultats d'un sondage, le robot aspirateur qui fait le tour du salon. Apprendre à les lire et à les écrire, c'est apprendre à ne pas se laisser tromper… et à commander une machine.",
      objectifs: [
        "Lire un tableau, un diagramme en bâtons, un diagramme circulaire et un graphique",
        "Coder et décoder des déplacements et des scripts Scratch",
        "Résoudre un problème à étapes en organisant les informations",
      ],
      sections: [
        {
          titre: "Tableaux et diagrammes",
          blocs: [
            { t: "tableau", titre: "Sport préféré des 28 élèves de 6e B", entetes: ["Sport", "Filles", "Garçons", "Total"], lignes: [["Football", "3", "7", "10"], ["Danse", "5", "2", "7"], ["Natation", "4", "2", "6"], ["Basket", "2", "3", "5"], ["Total", "14", "14", "28"]] },
            { t: "propriete", titre: "Lire un tableau à double entrée", md: "On lit une valeur au **croisement d'une ligne et d'une colonne**. Au croisement de « Danse » et de « Total » : 7 élèves préfèrent la danse. Toujours lire d'abord le **titre** et les **unités**." },
            { t: "graphique", type: "barres", titre: "Sport préféré des 28 élèves de 6e B", unite: "élèves", donnees: [{ label: "Football", valeur: 10 }, { label: "Danse", valeur: 7 }, { label: "Natation", valeur: 6 }, { label: "Basket", valeur: 5 }] },
            { t: "texte", md: "Dans un **diagramme en bâtons**, la hauteur de chaque bâton représente une quantité : le plus haut correspond à la plus grande valeur. D'un coup d'œil, on voit que le football est le plus choisi.\n\nDans un **diagramme circulaire**, le disque entier représente le **total** (100 %). La moitié du disque, c'est 50 % ; un quart, 25 %." },
            { t: "graphique", type: "secteurs", titre: "Temps passé par Inès un mercredi après-midi", unite: "%", donnees: [{ label: "Sport", valeur: 50 }, { label: "Devoirs", valeur: 25 }, { label: "Lecture", valeur: 25 }] },
            { t: "verifie", q: "Combien d'élèves de 6e B ne préfèrent pas le football ?", choix: ["10", "18", "28"], bonne: 1, explication: "Il y a 28 élèves en tout, dont 10 préfèrent le football : 28 − 10 = 18." },
          ],
        },
        {
          titre: "Lire un graphique",
          blocs: [
            { t: "texte", md: "Un **graphique** montre comment une grandeur **évolue** au fil du temps. On lit le temps en bas (l'axe horizontal) et la valeur sur le côté (l'axe vertical)." },
            { t: "graphique", type: "courbe", titre: "Température relevée un jour de mai", unite: "°C", donnees: [{ label: "6 h", valeur: 9 }, { label: "8 h", valeur: 12 }, { label: "10 h", valeur: 15 }, { label: "12 h", valeur: 19 }, { label: "14 h", valeur: 21 }, { label: "16 h", valeur: 20 }, { label: "18 h", valeur: 16 }] },
            { t: "exemple", titre: "De combien la température a-t-elle augmenté entre 8 h et 14 h ?", etapes: ["À 8 h, on lit 12 °C.", "À 14 h, on lit 21 °C : c'est le maximum de la journée.", "Augmentation : 21 − 12 = **9 °C**."] },
          ],
        },
        {
          titre: "Coder des déplacements",
          blocs: [
            { t: "definition", terme: "Algorithme", md: "Un **algorithme** est une suite d'instructions exécutées **dans l'ordre** pour accomplir une tâche. Une recette de cuisine en est un ! Écrit dans un langage comme Scratch, il devient un **programme** (ou script)." },
            { t: "schema", titre: "Le robot sur le quadrillage", legende: "Le robot part de A1 face au nord : « avance de 2, tourne à droite, avance de 3 ». Il arrive en D3.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat" x="156" y="104" width="32" height="32"/><path class="trait-fin" d="M60 40V200M92 40V200M124 40V200M156 40V200M188 40V200M220 40V200M60 40H220M60 72H220M60 104H220M60 136H220M60 168H220M60 200H220"/><g class="texte-petit" text-anchor="middle"><text x="76" y="216">A</text><text x="108" y="216">B</text><text x="140" y="216">C</text><text x="172" y="216">D</text><text x="204" y="216">E</text></g><g class="texte-petit" text-anchor="end"><text x="50" y="188">1</text><text x="50" y="156">2</text><text x="50" y="124">3</text><text x="50" y="92">4</text><text x="50" y="60">5</text></g><circle class="aplat-fort" cx="76" cy="184" r="6"/><path d="M76 176V120H164" stroke="var(--pigment)" stroke-width="2.5" fill="none" marker-end="url(#fl-p)"/><path class="trait-fin" d="M240 92V64" marker-end="url(#fl)"/><text class="texte" x="240" y="56" text-anchor="middle">N</text><g class="texte"><text x="262" y="100">Départ : A1</text><text x="262" y="118">face au nord</text><text x="262" y="142">avance de 2 → A3</text><text x="262" y="162">tourne à droite</text><text x="262" y="182">avance de 3 → D3</text></g></svg>` },
            { t: "attention", md: "« Tourner à droite » dépend de la direction dans laquelle on regarde ! Face au nord, tourner à droite fait regarder vers l'est. Suis le robot pas à pas, comme si tu étais à sa place." },
          ],
        },
        {
          titre: "Scratch : répéter des instructions",
          blocs: [
            { t: "schema", titre: "Un script qui trace un carré", legende: "Le bloc « répéter » contient deux instructions : le lutin avance, puis tourne, et cela 4 fois.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat" x="40" y="20" width="250" height="30" rx="12"/><rect class="trait-fin" x="40" y="20" width="250" height="30" rx="12" fill="none"/><rect class="aplat-papier" x="40" y="55" width="250" height="28" rx="4"/><rect class="trait-fin" x="40" y="55" width="250" height="28" rx="4" fill="none"/><path class="aplat" d="M40 88H290V116H60V182H290V200H40Z"/><path class="trait-fin" d="M40 88H290V116H60V182H290V200H40Z" fill="none"/><rect class="aplat-papier" x="60" y="118" width="220" height="28" rx="4"/><rect class="trait-fin" x="60" y="118" width="220" height="28" rx="4" fill="none"/><rect class="aplat-papier" x="60" y="150" width="220" height="28" rx="4"/><rect class="trait-fin" x="60" y="150" width="220" height="28" rx="4" fill="none"/><g class="texte"><text x="52" y="40">quand le drapeau vert est cliqué</text><text x="52" y="74">stylo en position d'écriture</text><text x="52" y="107">répéter 4 fois</text><text x="72" y="137">avancer de 50 pas</text><text x="72" y="169">tourner de 90 degrés</text></g><g class="texte-petit"><text x="300" y="40">lance le script</text><text x="300" y="102">la boucle répète</text><text x="300" y="116">son contenu</text></g><text class="texte-main" x="165" y="228" text-anchor="middle">4 × 50 = 200 pas parcourus</text></svg>` },
            { t: "tableau", titre: "Les blocs et leur rôle", entetes: ["Bloc", "Rôle"], lignes: [["Quand le drapeau vert est cliqué", "lance le script"], ["Répéter 10 fois", "exécute plusieurs fois les blocs qu'il contient"], ["Avancer de 10", "déplace le lutin"], ["Tourner de 15 degrés", "change la direction du lutin"]] },
            { t: "propriete", titre: "Polygones réguliers", md: "Après le dernier virage, le lutin a fait **un tour complet : 360°**.\n**Carré** : répéter 4 fois « avancer, tourner de 360 ÷ 4 = **90°** ».\n**Triangle équilatéral** : répéter 3 fois « avancer, tourner de 360 ÷ 3 = **120°** »." },
            { t: "verifie", q: "Pour tracer un triangle équilatéral, on répète 3 fois « avancer de 100 pas, tourner de … degrés ». Quelle valeur ?", choix: ["60", "90", "120", "180"], bonne: 2, explication: "Trois virages font un tour complet : 360 ÷ 3 = 120°. Les angles du triangle mesurent 60°, mais le lutin tourne de 180 − 60 = 120°." },
          ],
        },
        {
          titre: "Résoudre un problème à étapes",
          blocs: [
            { t: "etapes", titre: "La méthode", items: [{ titre: "Comprendre", md: "Je relis la question : que dois-je trouver, et dans quelle unité ?" }, { titre: "Trier", md: "Je repère les informations utiles (et j'ignore les autres)." }, { titre: "Découper", md: "Je calcule les résultats intermédiaires, un par ligne." }, { titre: "Répondre", md: "Je réponds par une phrase avec l'unité, et je vérifie que c'est vraisemblable." }] },
            { t: "exemple", titre: "La sortie au musée", etapes: ["28 élèves ; entrée 4,50 € par élève ; bus 112 € pour toute la classe. On cherche le coût total.", "Étape 1, les entrées : 28 × 4,50 = 126 €.", "Étape 2, le total : 126 + 112 = 238 €.", "Réponse : la sortie coûte **238 €**."] },
            { t: "exemple", titre: "Le rendu de monnaie", md: "Lucas achète 3 livres à 8,90 € et paie avec un billet de 50 €. Prix des livres : 3 × 8,90 = 26,70 €. Monnaie rendue : 50 − 26,70 = **23,30 €**. Vraisemblable : 3 livres à environ 9 € font 27 €, et 50 − 27 = 23." },
          ],
        },
      ],
      bilan: "Lire un tableau ou un graphique, c'est croiser des informations ; écrire un algorithme, c'est donner des instructions dans le bon ordre. Dans les deux cas : de la méthode, une étape à la fois.",
    },
  },
};
