// Cours ÉCLORE — 4e Physique-Chimie. Schéma : docs/COURS.md
export default {
  id: "4e-physique-chimie",
  chapitres: {
    "4e-physique-chimie-01-atomes-et-molecules": {
      accroche: "Si on grossissait une goutte d'eau jusqu'à la taille de la Terre, ses plus petits morceaux auraient à peu près la taille d'une orange. Ces grains minuscules, invisibles même au meilleur microscope optique, ce sont les atomes. Et ils sont presque entièrement… vides.",
      objectifs: [
        "Décrire le modèle de l'atome : un noyau, des électrons et beaucoup de vide",
        "Connaître les symboles des éléments courants et lire la formule d'une molécule",
        "Distinguer corps pur simple, corps pur composé et mélange",
        "Te repérer dans le tableau périodique des éléments",
      ],
      sections: [
        {
          titre: "Tout est fait d'atomes",
          blocs: [
            { t: "texte", md: "Ton stylo, l'air que tu respires, ta main : toute la matière est construite avec des briques minuscules, les **atomes**. Il en existe une centaine de sortes différentes, et leurs combinaisons forment tout ce qui t'entoure." },
            { t: "definition", terme: "Atome", md: "Le plus petit constituant de la matière dans les transformations chimiques. Il est formé d'un **noyau** central, très petit et très lourd, autour duquel tournent des **électrons**. Entre le noyau et les électrons, il y a ==du vide==." },
            { t: "schema", titre: "Le modèle de l'atome", legende: "Échelle non respectée : si l'atome avait la taille d'un stade, son noyau serait une bille posée au centre.", svg: `<svg viewBox="0 0 400 240"><ellipse class="pointille" cx="200" cy="120" rx="110" ry="36"/><ellipse class="pointille" cx="200" cy="120" rx="110" ry="36" transform="rotate(60 200 120)"/><ellipse class="pointille" cx="200" cy="120" rx="110" ry="36" transform="rotate(-60 200 120)"/><circle class="aplat-fort" cx="200" cy="120" r="11"/><text x="200" y="125" text-anchor="middle" font-size="15" fill="var(--papier)">+</text><circle class="aplat-papier" cx="90" cy="120" r="8"/><circle class="trait" cx="90" cy="120" r="8"/><text class="texte" x="90" y="124" text-anchor="middle">−</text><circle class="aplat-papier" cx="255" cy="215" r="8"/><circle class="trait" cx="255" cy="215" r="8"/><text class="texte" x="255" y="219" text-anchor="middle">−</text><circle class="aplat-papier" cx="255" cy="25" r="8"/><circle class="trait" cx="255" cy="25" r="8"/><text class="texte" x="255" y="29" text-anchor="middle">−</text><text class="texte-petit" x="76" y="124" text-anchor="end">électron (−)</text><line class="trait-fin" x1="213" y1="116" x2="318" y2="78"/><text class="texte" x="322" y="76">noyau (+)</text><text class="texte-main" x="322" y="180">du vide !</text><text class="texte-petit" x="322" y="196">partout ailleurs</text></svg>` },
            { t: "propriete", titre: "Un atome est électriquement neutre", md: "Le noyau porte des **charges positives**, les électrons portent des **charges négatives**. Il y a exactement autant de charges + que de charges − : elles se compensent. L'atome, dans son ensemble, n'est donc ni positif ni négatif : il est **neutre**." },
            { t: "texte", md: "Presque toute la **masse** de l'atome est concentrée dans son noyau : les électrons sont des milliers de fois plus légers.\n\nQuelques **ordres de grandeur** : un atome mesure environ **10⁻¹⁰ m** (un dix-milliardième de mètre). Son noyau mesure environ **10⁻¹⁵ m** : il est ==100 000 fois plus petit que l'atome==. Du plus petit au plus grand : le noyau, l'atome, la molécule, la cellule, le grain de sable." },
            { t: "verifie", q: "Où se trouve presque toute la masse d'un atome ?", choix: ["Dans les électrons", "Dans le vide entre noyau et électrons", "Dans le noyau"], bonne: 2, explication: "Le noyau est minuscule mais très lourd : il concentre presque toute la masse. Les électrons sont très légers, et le vide… ne pèse rien." },
          ],
        },
        {
          titre: "Des symboles pour chaque élément",
          blocs: [
            { t: "texte", md: "Tous les atomes d'une même sorte forment un **élément chimique**. Pour écrire vite, les chimistes du monde entier utilisent le même **symbole** : une majuscule, parfois suivie d'une minuscule." },
            { t: "tableau", titre: "Les symboles à connaître", entetes: ["Élément", "Symbole", "Où le rencontre-t-on ?"], lignes: [["hydrogène", "**H**", "dans l'eau, dans le méthane"], ["carbone", "**C**", "charbon, êtres vivants"], ["oxygène", "**O**", "air, eau"], ["azote", "**N**", "78 % de l'air"], ["fer", "**Fe**", "clous, poutres, sang"], ["cuivre", "**Cu**", "fils électriques"], ["sodium", "**Na**", "sel de cuisine"], ["chlore", "**Cl**", "sel de cuisine, eau de piscine"]] },
            { t: "astuce", md: "Attention à la minuscule ! **Co** est le cobalt, un seul élément. **CO** (deux majuscules) désigne deux atomes : un carbone et un oxygène. Certains symboles viennent du latin : Fe pour *ferrum* (fer), Cu pour *cuprum* (cuivre), Na pour *natrium* (sodium)." },
            { t: "definition", terme: "Tableau périodique des éléments", md: "Le tableau qui **classe tous les éléments connus** (118 aujourd'hui), du plus léger, l'hydrogène, au plus lourd. Les éléments d'une **même colonne** ont des **propriétés chimiques voisines** : ils réagissent de façon semblable." },
            { t: "savais-tu", md: "C'est le chimiste russe Dmitri Mendeleïev qui a proposé ce classement en 1869. Génial : il avait laissé des cases vides pour des éléments encore inconnus, et prédit leurs propriétés. On les a découverts ensuite, exactement comme il l'avait annoncé." },
          ],
        },
        {
          titre: "Les molécules et leurs formules",
          blocs: [
            { t: "definition", terme: "Molécule", md: "Un assemblage d'atomes **liés entre eux**. Sa **formule** indique quels atomes la composent (par leurs symboles) et combien il y en a (par un **indice** placé en bas à droite). Un symbole sans indice compte pour **1**." },
            { t: "schema", titre: "Quatre molécules en modèles moléculaires", legende: "Code couleur international des modèles : hydrogène blanc, carbone noir, oxygène rouge.", svg: `<svg viewBox="0 0 400 240"><g stroke="var(--encre)" stroke-width="1.5"><circle class="c-blanc" cx="31" cy="99" r="11"/><circle class="c-blanc" cx="69" cy="99" r="11"/><circle class="c-rouge" cx="50" cy="82" r="18"/><circle class="c-rouge" cx="124" cy="85" r="16"/><circle class="c-rouge" cx="176" cy="85" r="16"/><circle class="c-noir" cx="150" cy="85" r="15"/><circle class="c-rouge" cx="238" cy="85" r="17"/><circle class="c-rouge" cx="262" cy="85" r="17"/><circle class="c-blanc" cx="350" cy="62" r="10"/><circle class="c-blanc" cx="328" cy="97" r="10"/><circle class="c-blanc" cx="372" cy="97" r="10"/><circle class="c-noir" cx="350" cy="86" r="15"/><circle class="c-blanc" cx="356" cy="106" r="10"/></g><text class="texte" x="50" y="142" text-anchor="middle">H₂O</text><text class="texte" x="150" y="142" text-anchor="middle">CO₂</text><text class="texte" x="250" y="142" text-anchor="middle">O₂</text><text class="texte" x="350" y="142" text-anchor="middle">CH₄</text><text class="texte-petit" x="50" y="158" text-anchor="middle">eau</text><text class="texte-petit" x="150" y="158" text-anchor="middle">dioxyde de carbone</text><text class="texte-petit" x="250" y="158" text-anchor="middle">dioxygène</text><text class="texte-petit" x="350" y="158" text-anchor="middle">méthane</text><text class="texte-pigment" x="50" y="176" text-anchor="middle">3 atomes</text><text class="texte-pigment" x="150" y="176" text-anchor="middle">3 atomes</text><text class="texte-pigment" x="250" y="176" text-anchor="middle">2 atomes</text><text class="texte-pigment" x="350" y="176" text-anchor="middle">5 atomes</text><g stroke="var(--encre)" stroke-width="1.2"><circle class="c-blanc" cx="80" cy="216" r="7"/><circle class="c-noir" cx="185" cy="216" r="7"/><circle class="c-rouge" cx="285" cy="216" r="7"/></g><text class="texte-petit" x="92" y="220">H hydrogène</text><text class="texte-petit" x="197" y="220">C carbone</text><text class="texte-petit" x="297" y="220">O oxygène</text></svg>` },
            { t: "exemple", titre: "Lire la formule CH₄ (méthane)", etapes: ["Les symboles : C et H. La molécule contient du **carbone** et de l'**hydrogène**.", "Les indices : C n'a pas d'indice, donc **1 atome de carbone** ; H porte l'indice 4, donc **4 atomes d'hydrogène**.", "Total : 1 + 4 = **5 atomes** dans une molécule de méthane."] },
            { t: "attention", md: "L'indice ne concerne que **l'atome juste avant lui**. Dans CO₂, le 2 porte sur O : 1 carbone et 2 oxygènes. Et pour compter dans **plusieurs** molécules, on multiplie : 3 CO₂ contiennent 3 × 2 = **6 atomes d'oxygène** (et 3 atomes de carbone)." },
            { t: "verifie", q: "Combien d'atomes contient une molécule d'eau H₂O ?", choix: ["2", "3", "4"], bonne: 1, explication: "2 atomes d'hydrogène (indice 2) et 1 atome d'oxygène (pas d'indice, donc 1) : 3 atomes en tout." },
          ],
        },
        {
          titre: "Corps purs et mélanges",
          blocs: [
            { t: "texte", md: "Une **espèce chimique** est un ensemble de molécules (ou d'atomes) toutes identiques. Selon ce qu'on trouve dans un échantillon, on parle de corps pur ou de mélange." },
            { t: "tableau", titre: "Trois familles à distinguer", entetes: ["Famille", "Ce qu'elle contient", "Exemples"], lignes: [["**Corps pur simple**", "une seule espèce, faite d'**un seul type d'atome**", "dioxygène O₂, diazote N₂, fer Fe"], ["**Corps pur composé**", "une seule espèce, faite de **plusieurs types d'atomes**", "eau H₂O, dioxyde de carbone CO₂, méthane CH₄"], ["**Mélange**", "**plusieurs espèces** chimiques différentes", "l'air, l'eau de mer, le jus d'orange"]] },
            { t: "exemple", titre: "Classer le dioxyde de carbone", md: "Un échantillon de CO₂ ne contient qu'une sorte de molécule : c'est un **corps pur**. Mais cette molécule contient deux types d'atomes (C et O) : c'est un corps pur **composé**." },
            { t: "verifie", q: "Lequel de ces corps est un corps pur simple ?", choix: ["L'eau H₂O", "Le diazote N₂", "L'air", "Le méthane CH₄"], bonne: 1, explication: "Le diazote ne contient qu'un seul type d'atome (N). L'eau et le méthane sont des corps purs composés ; l'air est un mélange." },
          ],
        },
      ],
      bilan: "Un noyau lourd, des électrons légers et beaucoup de vide : l'atome est la brique de tout. Assemblés, les atomes forment des molécules, que leur formule décrit atome par atome.",
    },
    "4e-physique-chimie-02-transformations-chimiques": {
      accroche: "Une bûche de 2 kg brûle dans la cheminée. Le lendemain, il ne reste qu'une poignée de cendres. La matière a-t-elle disparu ? Non : elle s'est envolée, transformée en gaz invisibles. En chimie, rien ne se perd.",
      objectifs: [
        "Distinguer une transformation physique d'une transformation chimique",
        "Identifier réactifs et produits et utiliser la conservation de la masse",
        "Écrire et ajuster une équation de réaction",
        "Décrire les combustions, leurs produits et leurs dangers",
      ],
      sections: [
        {
          titre: "Physique ou chimique ?",
          blocs: [
            { t: "texte", md: "Un glaçon fond : c'était de l'eau, c'est toujours de l'eau. Une allumette brûle : le bois disparaît et des fumées apparaissent. Ces deux changements ne sont pas du tout de la même nature." },
            { t: "definition", terme: "Transformation physique", md: "Les molécules **ne changent pas** : seul leur arrangement change. Exemples : les changements d'état (fusion, vaporisation…) et la dissolution du sucre dans l'eau." },
            { t: "definition", terme: "Transformation chimique", md: "Des espèces chimiques **disparaissent** et de **nouvelles espèces apparaissent**. Les atomes se séparent et se réassemblent autrement. Indices : flamme, dégagement de gaz, changement de couleur, odeur nouvelle." },
            { t: "tableau", titre: "Classer quelques transformations", entetes: ["Transformation", "Type", "Pourquoi ?"], lignes: [["Le beurre fond", "physique", "c'est toujours du beurre, à l'état liquide"], ["Le sel se dissout", "physique", "on peut récupérer le sel en évaporant l'eau"], ["Le bois brûle", "chimique", "il se forme du CO₂ et de l'eau"], ["Le fer rouille", "chimique", "la rouille est une nouvelle espèce"], ["Le gâteau cuit", "chimique", "nouvelles saveurs, nouvelles couleurs"]] },
            { t: "verifie", q: "Laquelle de ces transformations est chimique ?", choix: ["L'eau qui bout", "Le chocolat qui fond", "Une bougie qui brûle", "Le sucre qui se dissout"], bonne: 2, explication: "La combustion de la bougie fait apparaître de nouvelles espèces (dioxyde de carbone, eau). Les trois autres sont des changements d'état ou une dissolution : les molécules ne changent pas." },
          ],
        },
        {
          titre: "Réactifs, produits et conservation de la masse",
          blocs: [
            { t: "definition", terme: "Réactifs et produits", md: "Les **réactifs** sont les espèces qui **disparaissent** pendant la transformation. Les **produits** sont les espèces qui **apparaissent**." },
            { t: "schema", titre: "Combustion du carbone : les atomes se réorganisent", legende: "Avant comme après : 1 atome de carbone et 2 atomes d'oxygène. Aucun atome n'est créé ni détruit.", svg: `<svg viewBox="0 0 400 200"><text class="texte-pigment" x="118" y="30" text-anchor="middle">réactifs</text><text class="texte-pigment" x="328" y="30" text-anchor="middle">produit</text><g stroke="var(--encre)" stroke-width="1.5"><circle class="c-noir" cx="60" cy="80" r="18"/><circle class="c-rouge" cx="150" cy="80" r="16"/><circle class="c-rouge" cx="178" cy="80" r="16"/><circle class="c-rouge" cx="302" cy="80" r="15"/><circle class="c-rouge" cx="354" cy="80" r="15"/><circle class="c-noir" cx="328" cy="80" r="16"/></g><text class="texte" x="105" y="86" text-anchor="middle">+</text><path class="trait" d="M215 80 L262 80" marker-end="url(#fl)"/><text class="texte-petit" x="60" y="122" text-anchor="middle">carbone C</text><text class="texte-petit" x="164" y="122" text-anchor="middle">dioxygène O₂</text><text class="texte-petit" x="328" y="122" text-anchor="middle">dioxyde de carbone CO₂</text><text class="texte" x="118" y="158" text-anchor="middle">12 g + 32 g</text><text class="texte" x="328" y="158" text-anchor="middle">44 g</text><text class="texte-main" x="238" y="185" text-anchor="middle">masse conservée</text></svg>` },
            { t: "propriete", titre: "Conservation de la masse", md: "Au cours d'une transformation chimique, ==la masse totale des produits est égale à la masse totale des réactifs==. Les atomes se réorganisent, mais aucun n'est créé et aucun n'est détruit.\n\nLe chimiste français Antoine **Lavoisier** l'a démontré à la fin du XVIIIe siècle, en pesant ses expériences dans des récipients fermés. On résume souvent sa découverte par la formule : « Rien ne se perd, rien ne se crée, tout se transforme. »" },
            { t: "exemple", titre: "Calculer une masse de produit", etapes: ["On brûle 12 g de carbone dans 32 g de dioxygène ; tout est consommé.", "Masse des réactifs : 12 + 32 = 44 g.", "Conservation de la masse : il se forme **44 g** de dioxyde de carbone.", "Même raisonnement pour le méthane : 16 g + 64 g = 80 g de réactifs, donc 44 g de CO₂ + m d'eau = 80 g, soit **m = 36 g**."] },
            { t: "attention", md: "« La bûche a perdu presque toute sa masse » : c'est faux ! Les produits de la combustion (dioxyde de carbone et vapeur d'eau) sont des **gaz** qui s'échappent dans l'air. Si on brûlait la bûche dans un récipient fermé, la balance afficherait **la même masse** avant et après." },
          ],
        },
        {
          titre: "Écrire et ajuster une équation",
          blocs: [
            { t: "propriete", titre: "L'équation de réaction", md: "On écrit les formules des réactifs à gauche, celles des produits à droite, séparées par une flèche qui se lit « ==donne== » :\n\n**réactifs → produits**\n\nExemple : C + O₂ → CO₂ se lit « carbone plus dioxygène donne dioxyde de carbone »." },
            { t: "etapes", titre: "Ajuster l'équation de la combustion du méthane", items: [{ titre: "Écrire l'équation", md: "CH₄ + O₂ → CO₂ + H₂O" }, { titre: "Compter le carbone", md: "1 C à gauche, 1 C à droite : c'est bon." }, { titre: "Équilibrer l'hydrogène", md: "4 H à gauche, 2 H à droite. On place un **2** devant H₂O : CH₄ + O₂ → CO₂ + **2** H₂O (4 H de chaque côté)." }, { titre: "Équilibrer l'oxygène", md: "À droite : 2 O (dans CO₂) + 2 O (dans 2 H₂O) = 4 O. À gauche, il faut **2** O₂." }, { titre: "Vérifier", md: "CH₄ + 2 O₂ → CO₂ + 2 H₂O : 1 C, 4 H et 4 O de chaque côté. ✔" }] },
            { t: "attention", md: "Pour ajuster, on ajoute des nombres **devant** les formules. On ne touche **jamais aux indices** : changer H₂O en H₂O₂, ce serait inventer une autre molécule (l'eau oxygénée) !" },
            { t: "verifie", q: "Dans l'équation 2 H₂ + O₂ → 2 H₂O, combien y a-t-il d'atomes d'hydrogène de chaque côté ?", choix: ["2", "4", "6"], bonne: 1, explication: "À gauche : 2 molécules de H₂, soit 2 × 2 = 4 H. À droite : 2 molécules de H₂O, soit 2 × 2 = 4 H. L'équation est bien ajustée." },
          ],
        },
        {
          titre: "Les combustions et le triangle du feu",
          blocs: [
            { t: "texte", md: "Une **combustion** est une transformation chimique qui dégage de la chaleur et souvent de la lumière. Pour qu'un feu démarre et continue, il faut **trois ingrédients à la fois**." },
            { t: "schema", titre: "Le triangle du feu", legende: "Supprime un seul côté du triangle, et le feu s'éteint.", svg: `<svg viewBox="0 0 400 256"><path class="aplat" d="M200 30 L320 210 L80 210 Z"/><path class="trait" d="M200 30 L320 210 L80 210 Z"/><path class="aplat-fort" d="M200 182 C174 162 180 136 198 104 C204 128 228 140 220 166 C216 176 208 182 200 182 Z"/><path class="aplat-papier" d="M200 178 C190 170 192 156 199 144 C204 156 212 164 208 172 C206 176 203 178 200 178 Z"/><text class="texte" x="128" y="112" text-anchor="end">combustible</text><text class="texte-petit" x="128" y="128" text-anchor="end">bois, gaz, papier</text><text class="texte" x="272" y="112">comburant</text><text class="texte-petit" x="272" y="128">dioxygène de l'air</text><text class="texte" x="200" y="232" text-anchor="middle">énergie d'activation</text><text class="texte-petit" x="200" y="248" text-anchor="middle">flamme, étincelle, chaleur</text></svg>` },
            { t: "definition", terme: "Combustible et comburant", md: "Le **combustible** est ce qui brûle (bois, charbon, gaz, essence). Le **comburant** est ce qui permet de brûler : le plus souvent, le **dioxygène** de l'air. L'**énergie d'activation** est l'apport de départ qui déclenche la réaction." },
            { t: "etapes", titre: "Protocole : brûler du carbone dans le dioxygène", items: [{ titre: "Préparer", md: "Remplir un flacon de dioxygène. Mettre lunettes et blouse." }, { titre: "Chauffer", md: "Porter un morceau de charbon de bois à **incandescence** dans la flamme du bec électrique." }, { titre: "Introduire", md: "Plonger le charbon rougeoyant dans le flacon : il brûle **vivement**, sans flamme, en éclatant de lumière." }, { titre: "Observer", md: "Le charbon diminue puis disparaît : c'est un réactif." }, { titre: "Tester le produit", md: "Verser de l'**eau de chaux** et agiter : elle se **trouble** (devient blanchâtre). Il s'est formé du **dioxyde de carbone**." }] },
            { t: "tableau", titre: "Des combustions complètes", entetes: ["Combustible", "Équation", "Produits"], lignes: [["carbone", "C + O₂ → CO₂", "dioxyde de carbone"], ["méthane (gaz de ville)", "CH₄ + 2 O₂ → CO₂ + 2 H₂O", "dioxyde de carbone et eau"], ["butane C₄H₁₀ (gaz en bouteille)", "il contient C et H", "dioxyde de carbone et eau"]] },
            { t: "attention", md: "Ne jette **jamais d'eau sur une friteuse en feu** : l'eau se vaporise d'un coup sous l'huile brûlante et projette des gouttes enflammées partout. Coupe le gaz et pose un couvercle ou un linge humide : tu prives le feu de **comburant**." },
          ],
        },
        {
          titre: "Combustion incomplète : un tueur invisible",
          blocs: [
            { t: "texte", md: "Quand le dioxygène **manque** (chaudière mal réglée, pièce mal aérée, brasero dans un garage), la combustion est **incomplète**. La flamme devient jaune et fumante, des suies noires apparaissent, et surtout il se forme un gaz très dangereux." },
            { t: "propriete", titre: "Le monoxyde de carbone CO", md: "Gaz **invisible**, **inodore** et **mortel** : il prend la place du dioxygène dans le sang. Chaque hiver, il provoque des intoxications en France. Protection : aérer, faire entretenir les appareils de chauffage chaque année, installer un **détecteur de monoxyde de carbone**." },
            { t: "verifie", q: "Pourquoi le monoxyde de carbone est-il si dangereux ?", choix: ["Il sent très mauvais", "On ne le voit pas et on ne le sent pas", "Il est très lourd"], bonne: 1, explication: "Invisible et sans odeur, le CO ne prévient pas : on peut s'intoxiquer sans s'en rendre compte. D'où l'importance des détecteurs." },
          ],
        },
      ],
      bilan: "Dans une transformation chimique, les atomes des réactifs se réarrangent en produits : rien ne se perd, rien ne se crée, et l'équation ajustée le prouve atome par atome.",
    },
    "4e-physique-chimie-03-air-et-gaz": {
      accroche: "Pose une bouteille rigide sur une balance, puis pompe de l'air à l'intérieur avec une pompe à vélo : la balance monte ! Cet air que l'on croit « rien du tout » a bel et bien une masse.",
      objectifs: [
        "Connaître la composition de l'air",
        "Décrire les propriétés des gaz : masse, compressibilité, pression",
        "Relier le dioxygène aux combustions et à la respiration",
        "Identifier les principaux polluants de l'air et leurs effets",
      ],
      sections: [
        {
          titre: "L'air, un mélange de gaz",
          blocs: [
            { t: "texte", md: "L'air n'est pas une seule substance : c'est un **mélange** de plusieurs gaz. Deux d'entre eux représentent presque tout le volume." },
            { t: "graphique", type: "secteurs", titre: "Composition de l'air sec (en volume)", unite: "%", donnees: [{ label: "diazote N₂", valeur: 78 }, { label: "dioxygène O₂", valeur: 21 }, { label: "autres gaz", valeur: 1 }] },
            { t: "tableau", titre: "Les gaz de l'air", entetes: ["Gaz", "Formule", "Proportion", "À retenir"], lignes: [["diazote", "N₂", "**78 %**", "le plus abondant, peu réactif"], ["dioxygène", "O₂", "**21 %**", "respiration et combustions"], ["argon", "Ar", "près de 1 %", "gaz rare"], ["dioxyde de carbone", "CO₂", "**0,04 %**", "très peu abondant mais gaz à effet de serre"]] },
            { t: "attention", md: "On croit souvent que le dioxyde de carbone est un gaz important de l'air. En proportion, c'est faux : il n'en représente que **0,04 %**, bien moins que l'argon. Cela suffit pourtant à jouer sur le climat." },
            { t: "verifie", q: "Quel est le gaz le plus abondant dans l'air ?", choix: ["Le dioxygène", "Le diazote", "Le dioxyde de carbone"], bonne: 1, explication: "Le diazote représente environ 78 % de l'air, presque quatre fois plus que le dioxygène (21 %)." },
          ],
        },
        {
          titre: "L'air a une masse",
          blocs: [
            { t: "propriete", titre: "Masse d'un litre d'air", md: "Dans les conditions habituelles, ==1 L d'air a une masse d'environ 1,3 g==. On dit que sa **masse volumique** est 1,3 g/L." },
            { t: "exemple", titre: "Masse de l'air d'un ballon", etapes: ["Un ballon contient 5 L d'air.", "Chaque litre a une masse de 1,3 g.", "Masse d'air : 5 × 1,3 = **6,5 g**.", "De même, 10 L d'air ont une masse de 13 g, et 2,5 L une masse de 3,25 g."] },
            { t: "savais-tu", md: "L'air d'une salle de classe (environ 200 m³) a une masse d'à peu près **260 kg**, celle de trois ou quatre adultes ! On ne la sent pas, car l'air nous entoure et pousse de tous les côtés à la fois." },
          ],
        },
        {
          titre: "Les gaz se compriment : le modèle particulaire",
          blocs: [
            { t: "texte", md: "Bouche une seringue pleine d'air et pousse le piston : il s'enfonce, puis résiste de plus en plus. Lâche-le : il revient. Pour expliquer cela, on imagine le gaz comme des **particules** très éloignées les unes des autres, qui bougent en tous sens." },
            { t: "schema", titre: "On comprime l'air d'une seringue bouchée", legende: "Même nombre de particules, donc même masse. Elles sont plus serrées et frappent plus souvent les parois : la pression augmente.", svg: `<svg viewBox="0 0 400 200"><rect class="aplat-fort" x="8" y="80" width="12" height="20"/><rect class="trait" x="20" y="60" width="150" height="60"/><rect class="aplat" x="150" y="62" width="6" height="56"/><rect class="trait" x="156" y="84" width="48" height="12"/><g class="aplat-fort"><circle cx="35" cy="72" r="4"/><circle cx="62" cy="95" r="4"/><circle cx="90" cy="70" r="4"/><circle cx="118" cy="88" r="4"/><circle cx="138" cy="110" r="4"/><circle cx="45" cy="108" r="4"/><circle cx="78" cy="112" r="4"/><circle cx="105" cy="108" r="4"/><circle cx="130" cy="68" r="4"/><circle cx="100" cy="90" r="4"/></g><rect class="aplat-fort" x="208" y="80" width="12" height="20"/><rect class="trait" x="220" y="60" width="150" height="60"/><rect class="aplat" x="285" y="62" width="6" height="56"/><rect class="trait" x="291" y="84" width="104" height="12"/><g class="aplat-fort"><circle cx="232" cy="70" r="4"/><circle cx="250" cy="68" r="4"/><circle cx="268" cy="72" r="4"/><circle cx="240" cy="87" r="4"/><circle cx="258" cy="88" r="4"/><circle cx="275" cy="94" r="4"/><circle cx="231" cy="104" r="4"/><circle cx="249" cy="106" r="4"/><circle cx="266" cy="108" r="4"/><circle cx="277" cy="113" r="4"/></g><path class="trait" d="M390 74 L340 74" marker-end="url(#fl-p)"/><text class="texte-petit" x="365" y="52" text-anchor="middle">on pousse</text><text class="texte" x="95" y="145" text-anchor="middle">avant : 40 mL</text><text class="texte" x="295" y="145" text-anchor="middle">après : 20 mL</text><text class="texte-petit" x="6" y="52">bouchon</text><text class="texte-main" x="200" y="182" text-anchor="middle">10 particules de chaque côté</text></svg>` },
            { t: "propriete", titre: "Propriétés des gaz", md: "Un gaz est **compressible** : on peut réduire son volume. Il est aussi **expansible** : il occupe tout l'espace qu'on lui offre.\n\nQuand on comprime un gaz, ==ses particules se rapprochent, mais leur nombre et la masse ne changent pas==." },
            { t: "definition", terme: "Pression d'un gaz", md: "Elle traduit les **chocs des particules** sur les parois du récipient. Plus les chocs sont nombreux, plus la pression est forte. On la mesure avec un **manomètre**, en **pascal (Pa)** ou en bar. La pression atmosphérique normale, au niveau de la mer, vaut environ **1013 hPa**, soit à peu près **1 bar**." },
            { t: "verifie", q: "On comprime de l'air dans une pompe à vélo bouchée. Que deviennent sa masse et son volume ?", choix: ["La masse diminue, le volume diminue", "La masse reste la même, le volume diminue", "La masse augmente, le volume reste le même"], bonne: 1, explication: "Aucune particule n'entre ni ne sort : la masse ne change pas. Les particules se rapprochent : le volume diminue et la pression augmente." },
          ],
        },
        {
          titre: "Le dioxygène, gaz du feu et de la vie",
          blocs: [
            { t: "texte", md: "Couvre une bougie allumée avec un bocal : au bout de quelques secondes, la flamme faiblit puis s'éteint. Elle a consommé le **dioxygène** enfermé, et l'air extérieur ne peut plus en apporter. Le dioxygène est le **comburant** des combustions.\n\nC'est aussi le gaz dont nos cellules ont besoin : à chaque inspiration, le sang capte le dioxygène dans les poumons et l'apporte à tous les organes." },
            { t: "exemple", titre: "Une flamme comme détecteur", md: "Dans un flacon de dioxygène pur, une bûchette qui ne fait que rougeoyer se **rallume** brusquement. C'est le test qui permet d'identifier le dioxygène." },
          ],
        },
        {
          titre: "Les polluants de l'air",
          blocs: [
            { t: "tableau", titre: "Principaux polluants", entetes: ["Polluant", "Principales sources", "Effets"], lignes: [["particules fines", "moteurs diesel, chauffage au bois, industrie", "pénètrent au fond des poumons, jusque dans le sang"], ["dioxyde d'azote NO₂", "circulation automobile", "irrite les bronches"], ["ozone O₃ au sol", "se forme au soleil à partir d'autres polluants", "irrite les yeux et les poumons, aggrave l'asthme"], ["dioxyde de soufre SO₂", "industrie, charbon", "irritations, pluies acides"], ["monoxyde de carbone CO", "combustions incomplètes", "mortel à forte dose"]] },
            { t: "savais-tu", md: "L'**ozone** O₃ a deux visages. Près du sol, c'est un polluant. Mais vers 25 km d'altitude, la couche d'ozone filtre les rayons ultraviolets du Soleil et nous protège." },
            { t: "verifie", q: "Pourquoi les particules fines sont-elles particulièrement dangereuses ?", choix: ["Elles sentent mauvais", "Elles sont si petites qu'elles pénètrent profondément dans les poumons", "Elles sont radioactives"], bonne: 1, explication: "Plus une particule est petite, plus elle descend loin dans les voies respiratoires : les plus fines passent même dans le sang." },
          ],
        },
      ],
      bilan: "L'air est un mélange de 78 % de diazote et 21 % de dioxygène ; comme tout gaz, il a une masse, se comprime et exerce une pression. À nous de le garder propre.",
    },
    "4e-physique-chimie-04-vitesse-et-mouvement": {
      accroche: "Assis dans un TGV à 300 km/h, tu poses ton verre sur la tablette : il ne bouge pas d'un millimètre. Pourtant, vu du quai, il file à toute allure. Alors, ce verre est-il immobile ou en mouvement ? Les deux !",
      objectifs: [
        "Décrire un mouvement : référentiel, trajectoire, relativité du mouvement",
        "Calculer une vitesse moyenne avec v = d / t",
        "Convertir une vitesse entre m/s et km/h",
        "Lire un graphique distance-temps et reconnaître un mouvement uniforme, accéléré ou ralenti",
      ],
      sections: [
        {
          titre: "Tout dépend du référentiel",
          blocs: [
            { t: "definition", terme: "Référentiel", md: "L'objet de référence **par rapport auquel** on décrit un mouvement : le quai, le sol, le siège du train, la Terre, le Soleil…" },
            { t: "propriete", titre: "Relativité du mouvement", md: "Un même objet peut être ==immobile dans un référentiel et en mouvement dans un autre==. Dans le train, tu es immobile par rapport à ton siège, mais en mouvement par rapport au quai. Dire « il bouge » n'a de sens que si l'on précise **par rapport à quoi**." },
            { t: "savais-tu", md: "En ce moment même, assis sur ta chaise, tu tournes avec la Terre autour du Soleil à environ **30 km/s**. Immobile par rapport à ta salle, tu es un bolide par rapport au Soleil !" },
            { t: "verifie", q: "Un passager est assis dans un bus qui roule. Par rapport à quoi est-il immobile ?", choix: ["Par rapport au trottoir", "Par rapport à son siège", "Par rapport aux arbres"], bonne: 1, explication: "Le passager et son siège se déplacent ensemble : la distance entre eux ne change pas. Par rapport au trottoir ou aux arbres, il est en mouvement." },
          ],
        },
        {
          titre: "La forme de la trajectoire",
          blocs: [
            { t: "definition", terme: "Trajectoire", md: "La ligne formée par les positions successives d'un point de l'objet au cours du mouvement." },
            { t: "schema", titre: "Trois formes de trajectoire", legende: "Chaque point marque une position de l'objet à intervalles de temps réguliers.", svg: `<svg viewBox="0 0 400 180"><line class="trait" x1="30" y1="40" x2="110" y2="120"/><g class="aplat-fort"><circle cx="30" cy="40" r="4"/><circle cx="57" cy="67" r="4"/><circle cx="83" cy="93" r="4"/><circle cx="110" cy="120" r="4"/></g><circle class="trait" cx="200" cy="80" r="42"/><circle class="aplat" cx="200" cy="80" r="10"/><g class="aplat-fort"><circle cx="242" cy="80" r="4"/><circle cx="200" cy="38" r="4"/><circle cx="158" cy="80" r="4"/><circle cx="200" cy="122" r="4"/></g><path class="trait" d="M290 120 Q330 10 375 120"/><g class="aplat-fort"><circle cx="290" cy="120" r="4"/><circle cx="310" cy="80" r="4"/><circle cx="332" cy="65" r="4"/><circle cx="355" cy="80" r="4"/><circle cx="375" cy="120" r="4"/></g><text class="texte" x="70" y="150" text-anchor="middle">rectiligne</text><text class="texte" x="200" y="150" text-anchor="middle">circulaire</text><text class="texte" x="332" y="150" text-anchor="middle">curviligne</text><text class="texte-petit" x="70" y="168" text-anchor="middle">une ligne droite</text><text class="texte-petit" x="200" y="168" text-anchor="middle">un cercle</text><text class="texte-petit" x="332" y="168" text-anchor="middle">une courbe quelconque</text></svg>` },
            { t: "exemple", titre: "Reconnaître la trajectoire", md: "Une bille lâchée qui tombe : trajectoire **rectiligne**. La valve d'une roue de vélo, vue du cadre : **circulaire**. La Lune autour de la Terre : presque **circulaire**. Un ballon de basket lancé vers le panier : **curviligne**." },
          ],
        },
        {
          titre: "Calculer une vitesse moyenne",
          blocs: [
            { t: "propriete", titre: "La formule de la vitesse moyenne", md: "==v = d / t==\n\n• v : la vitesse moyenne ;\n• d : la distance parcourue ;\n• t : la durée du parcours.\n\nUnité du système international : le **mètre par seconde (m/s)**. Dans la vie courante, on utilise aussi le **kilomètre par heure (km/h)**." },
            { t: "exemple", titre: "La vitesse d'une cycliste", etapes: ["Elle parcourt 45 km en 1 h 30 min.", "On convertit la durée en heures : 30 min = 0,5 h, donc t = 1,5 h.", "v = d / t = 45 / 1,5 = **30 km/h**."] },
            { t: "astuce", md: "La même formule donne la distance et la durée : **d = v × t** et **t = d / v**. Une voiture à 100 km/h de moyenne met t = 150 / 100 = **1,5 h** pour parcourir 150 km. Et un sprinteur qui court 100 m en 10 s va à 100 / 10 = **10 m/s**." },
            { t: "attention", md: "Une durée de 1 h 30 min ne s'écrit **pas** 1,30 h ! Une heure compte 60 minutes : 30 min, c'est une demi-heure, donc **1,5 h**. De même, 1 h 15 min = 1,25 h." },
            { t: "tableau", titre: "Quelques vitesses, de la plus lente à la plus rapide", entetes: ["Mobile", "Vitesse approximative"], lignes: [["escargot", "0,001 m/s"], ["piéton", "5 km/h"], ["cycliste", "20 à 30 km/h"], ["voiture sur autoroute", "130 km/h"], ["TGV", "320 km/h"], ["son dans l'air", "340 m/s, soit 1 224 km/h"], ["lumière", "300 000 km/s"]] },
          ],
        },
        {
          titre: "Convertir entre m/s et km/h",
          blocs: [
            { t: "texte", md: "Pourquoi le nombre 3,6 ? Rouler à 1 m/s, c'est parcourir 1 m chaque seconde. En une heure (3 600 s), on parcourt 3 600 m, soit 3,6 km. Donc **1 m/s = 3,6 km/h**." },
            { t: "propriete", titre: "La règle de conversion", md: "• De **m/s vers km/h** : on **multiplie par 3,6**.\n• De **km/h vers m/s** : on **divise par 3,6**." },
            { t: "exemple", titre: "Deux conversions", etapes: ["72 km/h en m/s : 72 ÷ 3,6 = **20 m/s**.", "15 m/s en km/h : 15 × 3,6 = **54 km/h**.", "Contrôle : une vitesse en km/h est toujours un nombre **plus grand** que la même vitesse en m/s."] },
            { t: "verifie", q: "Combien font 10 m/s en km/h ?", choix: ["2,8 km/h", "36 km/h", "100 km/h"], bonne: 1, explication: "De m/s vers km/h, on multiplie par 3,6 : 10 × 3,6 = 36 km/h. Le nombre en km/h est bien plus grand." },
          ],
        },
        {
          titre: "Uniforme, accéléré ou ralenti ?",
          blocs: [
            { t: "definition", terme: "Mouvement uniforme, accéléré, ralenti", md: "**Uniforme** : la vitesse reste constante. **Accéléré** : la vitesse augmente. **Ralenti** (ou décéléré) : la vitesse diminue." },
            { t: "schema", titre: "Positions prises à intervalles de temps égaux", legende: "Plus les points s'écartent, plus l'objet parcourt de distance pendant la même durée : il va plus vite.", svg: `<svg viewBox="0 0 400 180"><text class="texte" x="30" y="24">uniforme : écarts égaux</text><line class="trait-fin" x1="30" y1="42" x2="340" y2="42"/><g class="aplat-fort"><circle cx="30" cy="42" r="5"/><circle cx="80" cy="42" r="5"/><circle cx="130" cy="42" r="5"/><circle cx="180" cy="42" r="5"/><circle cx="230" cy="42" r="5"/><circle cx="280" cy="42" r="5"/><circle cx="330" cy="42" r="5"/></g><text class="texte" x="30" y="84">accéléré : écarts de plus en plus grands</text><line class="trait-fin" x1="30" y1="102" x2="340" y2="102"/><g class="aplat-fort"><circle cx="30" cy="102" r="5"/><circle cx="42" cy="102" r="5"/><circle cx="62" cy="102" r="5"/><circle cx="90" cy="102" r="5"/><circle cx="126" cy="102" r="5"/><circle cx="170" cy="102" r="5"/><circle cx="222" cy="102" r="5"/><circle cx="282" cy="102" r="5"/></g><text class="texte" x="30" y="144">ralenti : écarts de plus en plus petits</text><line class="trait-fin" x1="30" y1="162" x2="340" y2="162"/><g class="aplat-fort"><circle cx="30" cy="162" r="5"/><circle cx="90" cy="162" r="5"/><circle cx="140" cy="162" r="5"/><circle cx="180" cy="162" r="5"/><circle cx="210" cy="162" r="5"/><circle cx="232" cy="162" r="5"/><circle cx="246" cy="162" r="5"/></g><path class="trait" d="M355 102 L392 102" marker-end="url(#fl)"/><text class="texte-petit" x="373" y="94" text-anchor="middle">sens</text></svg>` },
            { t: "graphique", type: "courbe", titre: "Trajet d'un coureur : distance parcourue en fonction du temps", unite: "m", donnees: [{ label: "0 s", valeur: 0 }, { label: "1 s", valeur: 5 }, { label: "2 s", valeur: 10 }, { label: "3 s", valeur: 15 }, { label: "4 s", valeur: 15 }, { label: "5 s", valeur: 15 }, { label: "6 s", valeur: 25 }, { label: "7 s", valeur: 35 }] },
            { t: "propriete", titre: "Lire un graphique distance-temps", md: "• Une **droite qui passe par l'origine** : mouvement **uniforme**.\n• Une portion **horizontale** : la distance ne change plus, l'objet est **immobile**.\n• Plus la **pente** est forte, plus la vitesse est **grande**.\n\nIci, de 0 à 3 s, le coureur avance à 15 / 3 = 5 m/s ; de 3 à 5 s, il s'arrête ; de 5 à 7 s, il repart deux fois plus vite : 20 / 2 = 10 m/s." },
            { t: "verifie", q: "Sur un graphique distance-temps, la courbe est une droite qui passe par l'origine. Le mouvement est…", choix: ["accéléré", "uniforme", "ralenti"], bonne: 1, explication: "Une droite passant par l'origine signifie que la distance augmente toujours de la même quantité à chaque seconde : la vitesse est constante, le mouvement est uniforme." },
          ],
        },
      ],
      bilan: "Un mouvement se décrit toujours par rapport à un référentiel ; sa vitesse moyenne vaut v = d / t, et pour passer des m/s aux km/h, on multiplie par 3,6.",
    },
    "4e-physique-chimie-05-forces-et-interactions": {
      accroche: "Sur la Lune, un astronaute de 80 kg saute six fois plus haut que sur Terre. A-t-il maigri pendant le voyage ? Pas du tout : sa masse n'a pas changé. C'est son poids qui a fondu.",
      objectifs: [
        "Identifier des interactions et modéliser une action par une force",
        "Caractériser une force et mesurer sa valeur avec un dynamomètre",
        "Distinguer poids et masse et utiliser la relation P = m × g",
        "Décrire la gravitation universelle et ses effets",
      ],
      sections: [
        {
          titre: "Des interactions partout",
          blocs: [
            { t: "definition", terme: "Interaction", md: "Une **action réciproque** entre deux objets : si A agit sur B, alors B agit aussi sur A. Quand tu pousses un mur, le mur te pousse aussi : c'est pour cela que tu peux reculer en patins en poussant la rambarde." },
            { t: "tableau", titre: "Deux grandes familles d'actions", entetes: ["Type", "Ce qui se passe", "Exemples"], lignes: [["**de contact**", "les deux objets se touchent", "main qui pousse, pied qui frappe un ballon, frottement, fil tendu"], ["**à distance**", "les objets agissent sans se toucher", "aimant qui attire un clou, attraction de la Terre (gravitation), électricité statique"]] },
            { t: "verifie", q: "Laquelle de ces actions est une action à distance ?", choix: ["La raquette frappe la balle", "Un aimant attire un trombone", "Le vent pousse une voile"], bonne: 1, explication: "L'aimant agit sur le trombone sans le toucher. La raquette et le vent sont en contact avec l'objet." },
          ],
        },
        {
          titre: "Modéliser une action par une force",
          blocs: [
            { t: "definition", terme: "Force", md: "Le **modèle** d'une action mécanique, représenté par une **flèche**. Une force est caractérisée par ses quatre éléments :\n\n• son **point d'application** (où elle agit) ;\n• sa **direction** (la droite le long de laquelle elle agit) ;\n• son **sens** (indiqué par la pointe de la flèche) ;\n• sa **valeur**, en **newton (N)**, représentée par la longueur de la flèche." },
            { t: "schema", titre: "On tire une caisse avec une corde", legende: "La flèche part du point d'application. Avec l'échelle choisie, sa longueur correspond à 30 N.", svg: `<svg viewBox="0 0 400 240"><line class="pointille" x1="20" y1="140" x2="385" y2="140"/><line class="trait" x1="20" y1="180" x2="385" y2="180"/><rect class="aplat" x="60" y="110" width="90" height="70"/><rect class="trait" x="60" y="110" width="90" height="70"/><text class="texte-petit" x="105" y="168" text-anchor="middle">caisse</text><path d="M150 140 L292 140" stroke="var(--pigment)" stroke-width="3" fill="none" marker-end="url(#fl-p)"/><g stroke="var(--pigment)" stroke-width="2"><line x1="200" y1="134" x2="200" y2="146"/><line x1="250" y1="134" x2="250" y2="146"/></g><circle cx="150" cy="140" r="4.5" fill="var(--encre)"/><line class="trait-fin" x1="150" y1="134" x2="150" y2="96"/><text class="texte-petit" x="150" y="88" text-anchor="middle">point d'application</text><text class="texte-pigment" x="225" y="127" text-anchor="middle">F = 30 N</text><text class="texte-petit" x="385" y="100" text-anchor="end">direction : horizontale</text><text class="texte-petit" x="385" y="115" text-anchor="end">sens : vers la droite</text><text class="texte-petit" x="262" y="218" text-anchor="end">échelle :</text><line class="trait" x1="270" y1="214" x2="320" y2="214"/><line class="trait-fin" x1="270" y1="208" x2="270" y2="220"/><line class="trait-fin" x1="320" y1="208" x2="320" y2="220"/><text class="texte-petit" x="328" y="218">10 N</text></svg>` },
            { t: "texte", md: "On mesure la valeur d'une force avec un **dynamomètre** : un ressort qui s'allonge d'autant plus que la force est grande, devant une graduation en newtons.\n\nUne force peut avoir deux effets : **déformer** un objet (écraser une balle en mousse, tendre un ressort) ou **modifier son mouvement** : le mettre en mouvement, l'accélérer, le ralentir ou changer sa trajectoire." },
            { t: "exemple", titre: "Ordres de grandeur", md: "Le poids d'une pomme : environ **1 N**. Pousser une porte : environ **10 N**. Le poids d'un élève de 50 kg : environ **490 N**. La poussée d'un moteur de fusée : des **millions de newtons**." },
          ],
        },
        {
          titre: "Poids et masse : ne pas confondre",
          blocs: [
            { t: "tableau", titre: "Deux grandeurs bien différentes", entetes: ["", "Masse", "Poids"], lignes: [["Ce que c'est", "la quantité de matière", "la force d'attraction exercée par la Terre (ou un autre astre)"], ["Symbole et unité", "m, en **kilogramme (kg)**", "P, en **newton (N)**"], ["Instrument", "balance", "dynamomètre"], ["Dépend du lieu ?", "**non**, jamais", "**oui** : il change d'un astre à l'autre"]] },
            { t: "propriete", titre: "Relation entre poids et masse", md: "==P = m × g==\n\nP en newtons (N), m en kilogrammes (kg), g en newtons par kilogramme (N/kg). **g** est l'**intensité de la pesanteur** : g ≈ 9,8 N/kg sur Terre, 1,6 N/kg sur la Lune.\n\nLe poids est **vertical**, dirigé **vers le bas** (vers le centre de la Terre)." },
            { t: "exemple", titre: "L'astronaute sur la Lune", etapes: ["Sur Terre : P = 80 × 9,8 = **784 N**.", "Sur la Lune : sa masse reste **80 kg**, mais P = 80 × 1,6 = **128 N**.", "Inversement, un objet de poids 196 N sur Terre a une masse m = P / g = 196 / 9,8 = **20 kg**."] },
            { t: "attention", md: "Dans la vie courante, on dit « je pèse 50 kilos ». En physique, c'est faux : 50 kg est ta **masse**. Ton **poids** sur Terre vaut 50 × 9,8 = 490 **N**. Poids et masse sont liés, mais ce ne sont pas la même grandeur et ils n'ont pas la même unité." },
            { t: "graphique", type: "barres", titre: "Poids d'une personne de 60 kg selon l'astre", unite: "N", donnees: [{ label: "Lune", valeur: 96 }, { label: "Mars", valeur: 222 }, { label: "Terre", valeur: 588 }, { label: "Jupiter", valeur: 1488 }] },
            { t: "verifie", q: "Un astronaute va de la Terre à la Lune. Que deviennent sa masse et son poids ?", choix: ["Les deux diminuent", "Sa masse reste la même, son poids diminue", "Sa masse diminue, son poids reste le même"], bonne: 1, explication: "La quantité de matière ne change pas : la masse reste la même. La Lune attire moins que la Terre (g plus petit) : le poids diminue." },
          ],
        },
        {
          titre: "La gravitation universelle",
          blocs: [
            { t: "propriete", titre: "Gravitation", md: "Deux objets qui ont une masse **s'attirent mutuellement**, à distance. Cette attraction est d'autant plus forte que les masses sont grandes et qu'elles sont proches. Elle agit **partout dans l'Univers** : pas seulement près de la Terre." },
            { t: "schema", titre: "La Terre et la Lune s'attirent", legende: "Échelle non respectée. Les deux forces ont la même direction, la même valeur, et des sens opposés.", svg: `<svg viewBox="0 0 400 200"><circle class="aplat" cx="90" cy="100" r="48"/><circle class="trait" cx="90" cy="100" r="48"/><circle class="aplat-papier" cx="330" cy="100" r="16"/><circle class="trait" cx="330" cy="100" r="16"/><line class="pointille" x1="30" y1="100" x2="385" y2="100"/><path d="M90 100 L158 100" stroke="var(--pigment)" stroke-width="3" fill="none" marker-end="url(#fl-p)"/><path d="M330 100 L262 100" stroke="var(--pigment)" stroke-width="3" fill="none" marker-end="url(#fl-p)"/><circle cx="90" cy="100" r="3.5" fill="var(--encre)"/><circle cx="330" cy="100" r="3.5" fill="var(--encre)"/><text class="texte-pigment" x="160" y="62" text-anchor="middle">Lune sur Terre</text><text class="texte-pigment" x="272" y="62" text-anchor="middle">Terre sur Lune</text><text class="texte" x="90" y="172" text-anchor="middle">Terre</text><text class="texte" x="330" y="140" text-anchor="middle">Lune</text></svg>` },
            { t: "texte", md: "C'est la gravitation qui **retient la Lune** autour de la Terre et les **planètes autour du Soleil**. Sans elle, la Lune filerait en ligne droite dans l'espace. Le poids d'un objet n'est rien d'autre que la gravitation exercée par la Terre sur lui." },
            { t: "savais-tu", md: "La Lune attire elle aussi la Terre, et cela se voit : c'est elle qui soulève les océans et provoque les **marées**. Isaac Newton a compris en 1687 que la même force fait tomber une pomme et tourner la Lune." },
            { t: "verifie", q: "La Terre attire la Lune. Et la Lune ?", choix: ["Elle n'attire pas la Terre", "Elle attire la Terre, avec une force de même valeur", "Elle attire la Terre, mais beaucoup moins fort"], bonne: 1, explication: "C'est une interaction : la Lune attire la Terre avec une force de même valeur et de sens opposé. Cette force a moins d'effet visible sur la Terre parce que la Terre est bien plus massive." },
          ],
        },
      ],
      bilan: "Une force se dessine par une flèche : point d'application, direction, sens, valeur en newtons. Ta masse en kg te suit partout ; ton poids, P = m × g, dépend de l'astre où tu te trouves.",
    },
    "4e-physique-chimie-06-intensite-et-tension": {
      accroche: "Une lampe traversée par le courant s'allume. Le courant qui en ressort est-il « usé », plus faible qu'à l'entrée ? Branche deux ampèremètres, l'un avant, l'autre après : ils affichent exactement la même valeur. Le courant ne s'use pas.",
      objectifs: [
        "Mesurer une intensité et une tension avec un multimètre",
        "Appliquer les lois du circuit en série : unicité de l'intensité, additivité des tensions",
        "Appliquer les lois du circuit en dérivation : loi des nœuds, égalité des tensions",
        "Adapter une lampe à un générateur et respecter les règles de sécurité",
      ],
      sections: [
        {
          titre: "Deux grandeurs pour décrire le courant",
          blocs: [
            { t: "texte", md: "Imagine une rivière : son **débit** dit combien d'eau passe chaque seconde, et la **différence de hauteur** entre deux points fait couler l'eau. En électricité, c'est pareil : l'**intensité** est le débit du courant, la **tension** est ce qui le fait circuler entre deux points." },
            { t: "definition", terme: "Intensité I", md: "Elle mesure le **débit** du courant électrique dans un fil. Unité : l'**ampère (A)**. On la mesure avec un **ampèremètre** branché **en série** : le courant doit le traverser." },
            { t: "definition", terme: "Tension U", md: "Elle existe **entre deux points** d'un circuit. Unité : le **volt (V)**. On la mesure avec un **voltmètre** branché **en dérivation**, c'est-à-dire **aux bornes** du dipôle." },
            { t: "tableau", titre: "Grandeurs, unités et appareils de mesure", entetes: ["Grandeur", "Symbole", "Unité", "Appareil", "Branchement"], lignes: [["intensité", "I", "ampère (A)", "ampèremètre", "**en série**"], ["tension", "U", "volt (V)", "voltmètre", "**en dérivation**"]] },
            { t: "schema", titre: "Circuit en série avec un ampèremètre et un voltmètre", legende: "L'ampèremètre est dans la boucle, le courant le traverse. Le voltmètre est branché aux deux bornes de la lampe L1.", svg: `<svg viewBox="0 0 400 260"><g class="trait"><line x1="60" y1="100" x2="60" y2="150"/><line x1="44" y1="150" x2="76" y2="150"/><line x1="60" y1="162" x2="60" y2="220"/><line x1="60" y1="100" x2="106" y2="100"/><circle cx="120" cy="100" r="14"/><line x1="134" y1="100" x2="216" y2="100"/><circle cx="230" cy="100" r="14"/><line x1="220.1" y1="90.1" x2="239.9" y2="109.9"/><line x1="220.1" y1="109.9" x2="239.9" y2="90.1"/><line x1="244" y1="100" x2="340" y2="100"/><path d="M195 100 L195 40 L216 40"/><circle cx="230" cy="40" r="14"/><path d="M244 40 L265 40 L265 100"/><line x1="340" y1="100" x2="340" y2="146"/><circle cx="340" cy="160" r="14"/><line x1="330.1" y1="150.1" x2="349.9" y2="169.9"/><line x1="330.1" y1="169.9" x2="349.9" y2="150.1"/><line x1="340" y1="174" x2="340" y2="220"/><line x1="340" y1="220" x2="222" y2="220"/><line x1="178" y1="220" x2="60" y2="220"/></g><rect x="52" y="157" width="16" height="5" fill="var(--encre)"/><line class="trait-fin" x1="181" y1="219" x2="222" y2="219"/><circle cx="180" cy="220" r="3" fill="var(--encre)"/><circle cx="222" cy="220" r="3" fill="var(--encre)"/><circle cx="195" cy="100" r="3.5" fill="var(--encre)"/><circle cx="265" cy="100" r="3.5" fill="var(--encre)"/><text class="texte" x="120" y="105" text-anchor="middle">A</text><text class="texte" x="230" y="45" text-anchor="middle">V</text><text class="texte-petit" x="84" y="153">+</text><text class="texte-petit" x="84" y="168">−</text><text class="texte" x="34" y="164" text-anchor="middle">G</text><text class="texte" x="230" y="132" text-anchor="middle">L1</text><text class="texte" x="364" y="165">L2</text><text class="texte-petit" x="200" y="242" text-anchor="middle">interrupteur K fermé</text><text class="texte-petit" x="120" y="132" text-anchor="middle">en série</text><text class="texte-petit" x="230" y="16" text-anchor="middle">en dérivation</text><path class="trait-fin" d="M150 90 L178 90" marker-end="url(#fl-p)"/><text class="texte-pigment" x="164" y="84" text-anchor="middle">I</text></svg>` },
          ],
        },
        {
          titre: "Mesurer avec un multimètre",
          blocs: [
            { t: "etapes", titre: "Mesurer une intensité", items: [{ titre: "Ouvrir le circuit", md: "On ne branche jamais un appareil de mesure sur un circuit fermé." }, { titre: "Régler", md: "Choisir la fonction **ampèremètre** (A, courant continu) sur le **plus grand calibre**." }, { titre: "Brancher en série", md: "Insérer le multimètre dans la boucle : le courant entre par la borne **A** (ou mA) et ressort par la borne **COM**." }, { titre: "Fermer et lire", md: "Fermer l'interrupteur et lire la valeur, sans oublier l'unité." }, { titre: "Affiner", md: "Si la valeur est petite, passer au calibre juste au-dessus d'elle pour plus de précision." }] },
            { t: "astuce", md: "Pour une **tension**, c'est plus simple : fonction **voltmètre** (V, continu), puis on pose les deux fils **aux bornes** du dipôle, borne **V** du côté de la borne + du générateur, borne **COM** de l'autre côté. Pas besoin d'ouvrir le circuit." },
            { t: "attention", md: "Aux bornes d'un **fil de connexion** ou d'un **interrupteur fermé**, la tension est **pratiquement nulle**. En revanche, aux bornes d'un interrupteur **ouvert**, on mesure toute la tension du générateur." },
          ],
        },
        {
          titre: "Les lois du circuit en série",
          blocs: [
            { t: "propriete", titre: "Loi d'unicité de l'intensité", md: "Dans un circuit en série, ==l'intensité est la même en tout point==. Avant la première lampe, entre les deux, après la seconde : l'ampèremètre affiche partout la même valeur." },
            { t: "attention", md: "Le courant **ne s'use pas** en traversant une lampe ! Ce que la lampe utilise, c'est de l'**énergie**, pas du courant. Comme l'eau qui fait tourner un moulin : elle ressort du moulin en même quantité." },
            { t: "propriete", titre: "Loi d'additivité des tensions", md: "Dans un circuit en série, la tension aux bornes du générateur est égale à la **somme** des tensions aux bornes des autres dipôles : U = U₁ + U₂ + …" },
            { t: "exemple", titre: "Calculer une tension manquante", etapes: ["Deux lampes en série sur un générateur de 12 V ; U₁ = 4,5 V.", "Additivité : U₂ = 12 − 4,5 = **7,5 V**.", "Avec trois lampes sur 9 V, U₁ = 2 V et U₂ = 3,5 V : U₃ = 9 − 2 − 3,5 = **3,5 V**."] },
            { t: "verifie", q: "Deux lampes identiques sont en série. Comparée à l'intensité avant la première lampe, l'intensité après la deuxième est…", choix: ["deux fois plus faible", "la même", "nulle"], bonne: 1, explication: "Loi d'unicité : dans un circuit en série, l'intensité est la même partout. Le courant ne s'use pas en traversant les lampes." },
          ],
        },
        {
          titre: "Les lois du circuit en dérivation",
          blocs: [
            { t: "definition", terme: "Nœud", md: "Un point d'un circuit où se rejoignent **au moins trois fils**. Le courant s'y partage entre plusieurs branches." },
            { t: "schema", titre: "La loi des nœuds", legende: "Le courant qui arrive au nœud se partage entre les deux branches, sans rien perdre.", svg: `<svg viewBox="0 0 400 220"><g class="trait"><line x1="30" y1="110" x2="170" y2="110"/><path d="M170 110 L170 50 L276 50"/><circle cx="290" cy="50" r="14"/><line x1="280.1" y1="40.1" x2="299.9" y2="59.9"/><line x1="280.1" y1="59.9" x2="299.9" y2="40.1"/><path d="M304 50 L370 50 L370 170 L304 170"/><path d="M170 110 L170 170 L276 170"/><circle cx="290" cy="170" r="14"/><line x1="280.1" y1="160.1" x2="299.9" y2="179.9"/><line x1="280.1" y1="179.9" x2="299.9" y2="160.1"/><line x1="370" y1="110" x2="395" y2="110"/></g><circle cx="170" cy="110" r="4.5" fill="var(--encre)"/><circle cx="370" cy="110" r="4.5" fill="var(--encre)"/><path class="trait" d="M60 100 L110 100" marker-end="url(#fl-p)"/><text class="texte-pigment" x="85" y="90" text-anchor="middle">I = 0,8 A</text><path class="trait" d="M195 40 L240 40" marker-end="url(#fl-p)"/><text class="texte-pigment" x="218" y="30" text-anchor="middle">I₁ = 0,3 A</text><path class="trait" d="M195 160 L240 160" marker-end="url(#fl-p)"/><text class="texte-pigment" x="218" y="150" text-anchor="middle">I₂ = 0,5 A</text><text class="texte-petit" x="160" y="130" text-anchor="end">nœud</text><text class="texte-main" x="200" y="210" text-anchor="middle">I = I₁ + I₂</text></svg>` },
            { t: "propriete", titre: "Lois du circuit en dérivation", md: "• **Loi des nœuds** : l'intensité dans la branche principale est égale à la **somme** des intensités dans les branches dérivées : I = I₁ + I₂.\n• **Égalité des tensions** : la **tension** est la **même** aux bornes de chaque branche." },
            { t: "exemple", titre: "Trouver l'intensité d'une branche", md: "Branche principale : 0,8 A. Première branche : 0,3 A. Seconde branche : I₂ = 0,8 − 0,3 = **0,5 A**." },
            { t: "verifie", q: "Deux lampes sont en dérivation sur une pile de 4,5 V. Quelle est la tension aux bornes de chacune ?", choix: ["2,25 V chacune", "4,5 V chacune", "9 V chacune"], bonne: 1, explication: "En dérivation, la tension est la même aux bornes de chaque branche : chaque lampe reçoit les 4,5 V de la pile. Le partage par deux, c'est l'additivité du circuit en série." },
          ],
        },
        {
          titre: "Bien alimenter une lampe, et rester en sécurité",
          blocs: [
            { t: "definition", terme: "Tension nominale", md: "La tension sous laquelle un appareil fonctionne **normalement**, inscrite sur lui. Sur une lampe marquée « 6 V ; 100 mA », la tension nominale est **6 V** (et 100 mA est l'intensité qui la traverse alors)." },
            { t: "tableau", titre: "Une lampe de 6 V selon le générateur", entetes: ["Générateur", "Situation", "Ce qu'on observe"], lignes: [["pile de 3 V", "sous-tension", "elle brille faiblement, ou pas du tout"], ["générateur de 6 V", "fonctionnement normal", "elle brille normalement"], ["générateur de 12 V", "surtension", "elle brille très fort puis **grille**"]] },
            { t: "propriete", titre: "Règles de sécurité", md: "Le secteur délivre **230 V** : c'est très dangereux. Une tension devient dangereuse pour le corps humain à partir de **50 V en milieu sec** et de **25 V en milieu humide**, car l'eau facilite le passage du courant. On ne touche jamais un appareil branché avec les mains mouillées, et on ne fait jamais d'expérience avec le secteur." },
          ],
        },
      ],
      bilan: "En série, l'intensité est partout la même et les tensions s'additionnent ; en dérivation, la tension est la même et les intensités s'additionnent au nœud. Le courant ne s'use jamais.",
    },
    "4e-physique-chimie-07-resistance-et-energie-electrique": {
      accroche: "Un grille-pain et une lampe LED sont branchés sur la même prise, à la même tension de 230 V. Pourtant, l'un rougit et chauffe, l'autre reste presque froid. Leur différence ? Leur puissance… et la façon dont ils freinent le courant.",
      objectifs: [
        "Mesurer une résistance et utiliser la loi d'Ohm U = R × I",
        "Calculer une puissance électrique avec P = U × I",
        "Calculer une énergie avec E = P × t et lire une facture d'électricité",
        "Adopter des gestes d'économie d'énergie et de sécurité électrique",
      ],
      sections: [
        {
          titre: "La résistance, un frein au courant",
          blocs: [
            { t: "definition", terme: "Résistance R", md: "Elle mesure la capacité d'un dipôle à **s'opposer au passage du courant**. Unité : l'**ohm (Ω)**. On la mesure avec un **ohmmètre** (un multimètre réglé sur Ω), le dipôle étant **débranché** du circuit." },
            { t: "texte", md: "Un conducteur traversé par un courant **chauffe** : c'est l'**effet Joule**. Il est utile dans un radiateur, un grille-pain, un fer à repasser ou une bouilloire. Il est gênant ailleurs : il fait chauffer les fils, les chargeurs, les ordinateurs, et gaspille de l'énergie." },
            { t: "savais-tu", md: "Les anciennes lampes à filament transformaient environ 95 % de l'énergie reçue en chaleur par effet Joule : elles chauffaient plus qu'elles n'éclairaient ! Les lampes LED, elles, consomment environ dix fois moins pour la même lumière." },
            { t: "verifie", q: "Pourquoi doit-on débrancher un dipôle avant de mesurer sa résistance ?", choix: ["Parce que l'ohmmètre fournit lui-même un petit courant pour la mesure", "Parce que la résistance n'existe que hors du circuit", "Pour économiser la pile du circuit"], bonne: 0, explication: "L'ohmmètre envoie son propre petit courant dans le dipôle. Si le dipôle est encore dans un circuit alimenté, la mesure est faussée et l'appareil peut être abîmé." },
          ],
        },
        {
          titre: "La loi d'Ohm",
          blocs: [
            { t: "propriete", titre: "Loi d'Ohm", md: "Pour une résistance, la tension à ses bornes est **proportionnelle** à l'intensité qui la traverse :\n\n==U = R × I==\n\nU en volts (V), R en ohms (Ω), I en ampères (A). À tension fixée, **plus R est grande, plus I est faible**." },
            { t: "graphique", type: "courbe", titre: "Tension aux bornes d'une résistance de 100 Ω en fonction de l'intensité", unite: "V", donnees: [{ label: "0 A", valeur: 0 }, { label: "0,02 A", valeur: 2 }, { label: "0,04 A", valeur: 4 }, { label: "0,06 A", valeur: 6 }, { label: "0,08 A", valeur: 8 }, { label: "0,10 A", valeur: 10 }] },
            { t: "texte", md: "Les points sont **alignés sur une droite qui passe par l'origine** : c'est la signature d'une situation de proportionnalité. Le coefficient de proportionnalité est la résistance : 2 ÷ 0,02 = 4 ÷ 0,04 = **100 Ω**." },
            { t: "exemple", titre: "Utiliser la loi d'Ohm dans les deux sens", etapes: ["Calculer U : R = 100 Ω et I = 0,05 A, donc U = 100 × 0,05 = **5 V**.", "Calculer I : U = 12 V et R = 24 Ω, donc I = U / R = 12 / 24 = **0,5 A**.", "Calculer R : U = 6 V et I = 0,2 A, donc R = U / I = 6 / 0,2 = **30 Ω**."] },
            { t: "attention", md: "La loi d'Ohm exige l'intensité **en ampères**. Si on te donne 50 mA, convertis d'abord : 50 mA = **0,05 A**. Sinon, ton résultat sera mille fois trop grand." },
          ],
        },
        {
          titre: "La puissance électrique",
          blocs: [
            { t: "propriete", titre: "Puissance électrique", md: "==P = U × I==\n\nP en **watts (W)**, U en volts, I en ampères. 1 kilowatt (kW) = 1 000 W. La puissance indique **à quelle vitesse** un appareil consomme de l'énergie." },
            { t: "exemple", titre: "La puissance d'un four", md: "Un four alimenté sous 230 V est traversé par un courant de 10 A. P = 230 × 10 = **2 300 W**, soit 2,3 kW." },
            { t: "tableau", titre: "Puissance de quelques appareils (ordres de grandeur)", entetes: ["Appareil", "Puissance"], lignes: [["lampe LED", "8 W"], ["chargeur de téléphone", "10 W"], ["télévision", "100 W"], ["réfrigérateur", "150 W"], ["aspirateur", "800 W"], ["sèche-cheveux", "1 800 W"], ["radiateur électrique", "2 000 W"], ["four", "2 300 W"]] },
            { t: "verifie", q: "Une bouilloire est alimentée sous 230 V et traversée par un courant de 8 A. Quelle est sa puissance ?", choix: ["238 W", "1 840 W", "28,75 W"], bonne: 1, explication: "P = U × I = 230 × 8 = 1 840 W. On multiplie la tension par l'intensité, on ne les additionne pas." },
          ],
        },
        {
          titre: "L'énergie et la facture d'électricité",
          blocs: [
            { t: "propriete", titre: "Énergie électrique", md: "==E = P × t==\n\n• P en watts et t en secondes : E en **joules (J)**.\n• P en kilowatts et t en heures : E en **kilowattheures (kWh)**.\n\n1 kWh = 1 000 W × 3 600 s = **3 600 000 J**. Le **compteur** électrique et la facture comptent des kWh." },
            { t: "exemple", titre: "Ce que coûte un radiateur", etapes: ["Radiateur de 2 000 W, soit 2 kW, allumé 3 h par jour.", "Énergie : E = 2 × 3 = **6 kWh** par jour.", "Prix du kWh : 0,25 €. Coût : 6 × 0,25 = **1,50 €** par jour.", "Sur un mois de 30 jours : 30 × 1,50 = 45 €."] },
            { t: "attention", md: "Puissance et énergie, ce n'est pas pareil ! Un appareil **puissant** utilisé peu de temps peut consommer **moins** qu'un appareil peu puissant allumé longtemps. Un sèche-cheveux de 1,8 kW utilisé 10 minutes consomme 0,3 kWh ; un réfrigérateur de 0,15 kW qui tourne 24 h consomme 3,6 kWh." },
            { t: "liste", titre: "Des gestes pour économiser l'énergie", items: ["Éteindre la lumière en quittant une pièce et choisir des **lampes LED**.", "Ne pas laisser les appareils **en veille** : une multiprise à interrupteur coupe tout d'un geste.", "Baisser le chauffage d'un degré : environ 7 % d'énergie en moins.", "Laver le linge à 30 °C plutôt qu'à 60 °C."] },
          ],
        },
        {
          titre: "Sécurité électrique à la maison",
          blocs: [
            { t: "texte", md: "Le **disjoncteur** du tableau électrique **coupe le courant** automatiquement en cas de **surintensité** (trop d'appareils branchés) ou de **court-circuit**. Il évite que les fils surchauffent et déclenchent un incendie." },
            { t: "liste", titre: "Les règles d'or", items: ["Ne jamais toucher un appareil branché avec les **mains mouillées**.", "Ne pas **surcharger** une multiprise ni brancher des multiprises les unes sur les autres.", "Débrancher un appareil en tirant sur la **prise**, pas sur le fil.", "Si un appareil branché tombe dans l'eau : **ne pas le toucher**, couper d'abord le courant au disjoncteur."] },
            { t: "verifie", q: "Un sèche-cheveux branché tombe dans l'eau du lavabo. Que faut-il faire ?", choix: ["Le sortir vite de l'eau", "Couper le courant au disjoncteur avant de toucher quoi que ce soit", "Le débrancher en tirant sur le fil mouillé"], bonne: 1, explication: "L'eau peut conduire le courant jusqu'à toi. On coupe d'abord l'alimentation au tableau électrique ; ensuite seulement on peut débrancher et retirer l'appareil." },
          ],
        },
      ],
      bilan: "U = R × I, P = U × I, E = P × t : trois formules pour comprendre ce que font nos appareils, ce qu'ils consomment et ce qu'ils coûtent. L'électricité se respecte et s'économise.",
    },
    "4e-physique-chimie-08-la-lumiere": {
      accroche: "En 1666, dans une chambre obscure, Isaac Newton fait passer un fin rayon de soleil à travers un morceau de verre triangulaire. Sur le mur apparaît un arc-en-ciel. La lumière blanche cachait toutes les couleurs !",
      objectifs: [
        "Décomposer la lumière blanche et décrire son spectre",
        "Expliquer la synthèse additive des couleurs (rouge, vert, bleu)",
        "Expliquer la couleur d'un objet par l'absorption et la diffusion",
        "Utiliser la vitesse de la lumière et l'année-lumière, et protéger tes yeux",
      ],
      sections: [
        {
          titre: "La lumière blanche contient toutes les couleurs",
          blocs: [
            { t: "texte", md: "La lumière du Soleil ou d'une lampe nous paraît blanche. En réalité, c'est un **mélange de toutes les lumières colorées**. Un **prisme** (un bloc de verre triangulaire) ou un **réseau** (une fine plaque striée, comme la surface d'un CD) sait les séparer : c'est la **décomposition** de la lumière." },
            { t: "schema", titre: "Décomposition de la lumière blanche par un prisme", legende: "Le prisme dévie chaque lumière colorée d'un angle différent : le rouge le moins, le violet le plus.", svg: `<svg viewBox="0 0 400 240"><path class="c-rouge" d="M225 128 L342 126 L342 141 Z"/><path class="c-orange" d="M225 128 L342 141 L342 156 Z"/><path class="c-jaune" d="M225 128 L342 156 L342 171 Z"/><path class="c-vert" d="M225 128 L342 171 L342 186 Z"/><path class="c-bleu" d="M225 128 L342 186 L342 201 Z"/><path class="c-violet" d="M225 128 L342 201 L342 216 Z"/><path class="aplat" d="M190 40 L250 190 L130 190 Z"/><path class="trait" d="M190 40 L250 190 L130 190 Z"/><line class="trait" x1="20" y1="150" x2="160" y2="115"/><path class="trait" d="M70 137.5 L100 130" marker-end="url(#fl)"/><line class="trait-fin" x1="160" y1="115" x2="225" y2="128"/><line class="trait" x1="342" y1="112" x2="342" y2="228"/><text class="texte-petit" x="352" y="137">rouge</text><text class="texte-petit" x="352" y="152">orange</text><text class="texte-petit" x="352" y="167">jaune</text><text class="texte-petit" x="352" y="182">vert</text><text class="texte-petit" x="352" y="197">bleu</text><text class="texte-petit" x="352" y="212">violet</text><text class="texte" x="22" y="178">lumière blanche</text><text class="texte" x="190" y="212" text-anchor="middle">prisme</text><text class="texte-petit" x="342" y="104" text-anchor="middle">écran</text></svg>` },
            { t: "definition", terme: "Spectre", md: "La bande colorée obtenue en décomposant une lumière. Le spectre de la lumière blanche est **continu** : les couleurs se succèdent sans interruption, dans l'ordre **rouge, orange, jaune, vert, bleu, violet**." },
            { t: "savais-tu", md: "L'arc-en-ciel est un spectre géant : chaque gouttelette de pluie agit comme un petit prisme et décompose la lumière du Soleil. Pour le voir, il faut avoir le Soleil **dans le dos**." },
            { t: "verifie", q: "Que se passe-t-il quand la lumière blanche traverse un prisme ?", choix: ["Le prisme colore la lumière", "La lumière est décomposée en lumières colorées", "La lumière est absorbée"], bonne: 1, explication: "Le prisme n'ajoute aucune couleur : il sépare les lumières colorées déjà présentes dans la lumière blanche, en les déviant différemment." },
          ],
        },
        {
          titre: "La synthèse additive : rouge, vert, bleu",
          blocs: [
            { t: "texte", md: "Faisons l'inverse : au lieu de séparer les couleurs, superposons des lumières colorées sur un écran blanc, avec trois projecteurs." },
            { t: "schema", titre: "Superposer trois lumières colorées", legende: "Là où les trois lumières se superposent, l'écran est éclairé en blanc.", svg: `<svg viewBox="0 0 400 250"><clipPath id="rvb4-r"><circle cx="165" cy="95" r="58"/></clipPath><clipPath id="rvb4-v"><circle cx="235" cy="95" r="58"/></clipPath><circle class="c-rouge" cx="165" cy="95" r="58"/><circle class="c-vert" cx="235" cy="95" r="58"/><circle class="c-bleu" cx="200" cy="155" r="58"/><circle class="c-jaune" cx="235" cy="95" r="58" clip-path="url(#rvb4-r)"/><circle class="c-rose" cx="200" cy="155" r="58" clip-path="url(#rvb4-r)"/><circle class="c-vert" cx="200" cy="155" r="58" clip-path="url(#rvb4-v)"/><circle class="c-bleu" cx="200" cy="155" r="58" opacity="0.5" clip-path="url(#rvb4-v)"/><g clip-path="url(#rvb4-r)"><circle class="c-blanc" cx="200" cy="155" r="58" clip-path="url(#rvb4-v)"/></g><g class="trait-fin"><circle cx="165" cy="95" r="58"/><circle cx="235" cy="95" r="58"/><circle cx="200" cy="155" r="58"/></g><text class="texte" x="104" y="36" text-anchor="end">rouge</text><text class="texte" x="296" y="36">vert</text><text class="texte" x="200" y="236" text-anchor="middle">bleu</text><text class="texte-petit" x="200" y="72" text-anchor="middle">jaune</text><text class="texte-petit" x="200" y="120" text-anchor="middle">blanc</text><line class="trait-fin" x1="108" y1="176" x2="168" y2="140"/><text class="texte" x="104" y="182" text-anchor="end">magenta</text><line class="trait-fin" x1="292" y1="176" x2="232" y2="140"/><text class="texte" x="296" y="182">cyan</text></svg>` },
            { t: "propriete", titre: "Synthèse additive des couleurs", md: "Les trois **lumières primaires** sont le **rouge**, le **vert** et le **bleu** (RVB). En les superposant :\n\n• rouge + vert = **jaune** ;\n• vert + bleu = **cyan** ;\n• rouge + bleu = **magenta** ;\n• rouge + vert + bleu = ==**blanc**==." },
            { t: "texte", md: "Approche une loupe de l'écran d'un téléphone : chaque **pixel** est fait de trois minuscules sources, rouge, verte et bleue. En dosant leur éclat, l'écran fabrique toutes les couleurs. Pour afficher du **jaune**, il allume le rouge et le vert, et éteint le bleu." },
            { t: "attention", md: "Ne confonds pas avec la peinture ! Mélanger des **pigments** (gouache, encre d'imprimante) ne suit pas les mêmes règles : chaque pigment **retire** des lumières. Avec la lumière, on **ajoute** : c'est pour cela qu'on parle de synthèse **additive**." },
          ],
        },
        {
          titre: "Pourquoi les objets ont-ils une couleur ?",
          blocs: [
            { t: "propriete", titre: "Absorption et diffusion", md: "Un objet n'a pas de couleur « en lui-même ». Il **absorbe** certaines lumières colorées et **diffuse** (renvoie dans toutes les directions) les autres. ==La couleur que l'on voit est celle de la lumière diffusée.==\n\nUn objet **blanc** diffuse toutes les lumières ; un objet **noir** les absorbe toutes." },
            { t: "tableau", titre: "Ce que l'on voit dépend aussi de la lumière reçue", entetes: ["Objet", "Éclairé en", "Il diffuse", "Il absorbe", "Il paraît"], lignes: [["pomme rouge", "lumière blanche", "le rouge", "le vert et le bleu", "**rouge**"], ["pomme rouge", "lumière verte", "rien", "le vert", "**noire**"], ["tee-shirt jaune", "lumière blanche", "le rouge et le vert", "le bleu", "**jaune**"], ["tee-shirt jaune", "lumière bleue", "rien", "le bleu", "**noir**"], ["feuille blanche", "lumière rouge", "le rouge", "rien", "**rouge**"]] },
            { t: "exemple", titre: "L'objet rouge en lumière verte", etapes: ["Un objet rouge diffuse le rouge et absorbe les autres lumières.", "Éclairé en lumière verte seule, il absorbe ce vert.", "Il n'a aucune lumière rouge à renvoyer : il paraît **noir**."] },
            { t: "verifie", q: "Une feuille blanche est éclairée uniquement en lumière bleue. De quelle couleur paraît-elle ?", choix: ["Blanche", "Bleue", "Noire"], bonne: 1, explication: "Une feuille blanche diffuse toutes les lumières qu'elle reçoit. Elle ne reçoit que du bleu : elle diffuse du bleu et paraît bleue." },
          ],
        },
        {
          titre: "La lumière, vitesse record",
          blocs: [
            { t: "propriete", titre: "Vitesse de la lumière", md: "Dans le vide (et presque autant dans l'air), la lumière se propage **en ligne droite** à environ ==300 000 km/s==. Rien ne va plus vite." },
            { t: "exemple", titre: "Combien de temps met la lumière du Soleil ?", etapes: ["Distance Terre-Soleil : 150 000 000 km. Vitesse : 300 000 km/s.", "t = d / v = 150 000 000 / 300 000 = **500 s**, soit environ 8 min 20 s.", "Pour la Lune, à 384 000 km : t = 384 000 / 300 000 = **1,28 s**."] },
            { t: "definition", terme: "Année-lumière (al)", md: "Une **distance** : celle que parcourt la lumière dans le vide en **une année**, soit environ **9 500 milliards de km**. L'étoile la plus proche du Soleil, Proxima du Centaure, est à environ 4,2 années-lumière." },
            { t: "attention", md: "Malgré son nom, l'année-lumière n'est **pas une durée** : c'est une **longueur**, comme le kilomètre, mais adaptée aux distances immenses de l'Univers." },
            { t: "savais-tu", md: "Regarder loin, c'est regarder dans le passé. La lumière d'une étoile située à 100 années-lumière a voyagé 100 ans : tu vois l'étoile telle qu'elle était il y a un siècle. Elle a peut-être déjà changé depuis !" },
          ],
        },
        {
          titre: "Protéger ses yeux",
          blocs: [
            { t: "liste", titre: "Règles de sécurité", items: ["Ne **jamais** regarder le Soleil en face, même avec des lunettes de soleil, et encore moins avec des jumelles.", "Pour observer une éclipse, utiliser uniquement des **lunettes spéciales** aux normes.", "Ne **jamais** diriger un **pointeur laser** vers les yeux de quelqu'un, ni vers un avion ou une voiture : même peu puissant, un laser peut **brûler la rétine** de façon définitive."] },
          ],
        },
      ],
      bilan: "La lumière blanche est un mélange de couleurs que le prisme sépare et que le rouge, le vert et le bleu reconstituent. Un objet ne fait que trier la lumière qu'il reçoit, et cette lumière voyage à 300 000 km/s.",
    },
    "4e-physique-chimie-09-le-son": {
      accroche: "Frappe un diapason, puis touche la surface de l'eau avec : l'eau gicle en fines gouttelettes ! Le diapason qui « chante » est en train de vibrer, des centaines de fois par seconde. Tout son commence ainsi, par une vibration.",
      objectifs: [
        "Décrire l'émission et la propagation d'un son",
        "Relier la fréquence à la hauteur et l'amplitude à l'intensité sonore",
        "Utiliser la vitesse du son pour calculer une distance ou une durée",
        "Connaître les risques auditifs et des applications des ultrasons",
      ],
      sections: [
        {
          titre: "Un son naît d'une vibration",
          blocs: [
            { t: "texte", md: "Pose les doigts sur ta gorge et parle : tu sens tes **cordes vocales** vibrer. Une corde de guitare pincée, la membrane d'un haut-parleur ou d'un tambour, une règle qui tremble au bord de la table : à chaque fois, un objet **vibre**, et ce mouvement de va-et-vient rapide produit un son." },
            { t: "definition", terme: "Son", md: "Une **vibration** produite par une source, qui se **propage** de proche en proche dans un **milieu matériel** (air, eau, solide) jusqu'à notre oreille." },
            { t: "schema", titre: "Le son se propage de proche en proche", legende: "La membrane vibre et pousse les couches d'air voisines, qui poussent les suivantes : c'est la vibration qui voyage, pas l'air lui-même.", svg: `<svg viewBox="0 0 400 190"><rect class="aplat-fort" x="20" y="80" width="18" height="50"/><path class="trait" d="M38 92 L62 68 L62 142 L38 118 Z"/><g class="trait-fin"><line x1="82" y1="70" x2="82" y2="140"/><line x1="86" y1="70" x2="86" y2="140"/><line x1="90" y1="70" x2="90" y2="140"/><line x1="94" y1="70" x2="94" y2="140"/><line x1="112" y1="70" x2="112" y2="140"/><line x1="128" y1="70" x2="128" y2="140"/><line x1="142" y1="70" x2="142" y2="140"/><line x1="146" y1="70" x2="146" y2="140"/><line x1="150" y1="70" x2="150" y2="140"/><line x1="154" y1="70" x2="154" y2="140"/><line x1="172" y1="70" x2="172" y2="140"/><line x1="188" y1="70" x2="188" y2="140"/><line x1="202" y1="70" x2="202" y2="140"/><line x1="206" y1="70" x2="206" y2="140"/><line x1="210" y1="70" x2="210" y2="140"/><line x1="214" y1="70" x2="214" y2="140"/><line x1="232" y1="70" x2="232" y2="140"/><line x1="248" y1="70" x2="248" y2="140"/><line x1="262" y1="70" x2="262" y2="140"/><line x1="266" y1="70" x2="266" y2="140"/><line x1="270" y1="70" x2="270" y2="140"/><line x1="274" y1="70" x2="274" y2="140"/><line x1="292" y1="70" x2="292" y2="140"/><line x1="308" y1="70" x2="308" y2="140"/></g><path class="trait" d="M345 78 C378 72 384 112 362 126 C352 133 358 146 344 146"/><path class="trait-fin" d="M352 96 C364 94 366 110 356 114"/><text class="texte-petit" x="148" y="58" text-anchor="middle">air comprimé</text><text class="texte-petit" x="180" y="158" text-anchor="middle">air dilaté</text><text class="texte-petit" x="6" y="152">haut-parleur</text><text class="texte-petit" x="362" y="166" text-anchor="middle">oreille</text><path class="trait" d="M110 178 L300 178" marker-end="url(#fl-p)"/><text class="texte-pigment" x="205" y="172" text-anchor="middle">propagation</text></svg>` },
            { t: "propriete", titre: "Pas de son dans le vide", md: "Le son a besoin de **matière** pour se propager. ==Dans le vide, il n'y a pas de son.== Une sonnerie placée sous une cloche dont on retire l'air devient de plus en plus faible, jusqu'au silence. Dans l'espace, les explosions des films de science-fiction seraient… muettes !" },
            { t: "verifie", q: "Qu'est-ce qui produit un son ?", choix: ["Un objet qui vibre", "Un objet qui chauffe", "Un objet qui brille"], bonne: 0, explication: "Toute source sonore est un objet qui vibre : corde, membrane, cordes vocales, colonne d'air dans une flûte." },
          ],
        },
        {
          titre: "La vitesse du son",
          blocs: [
            { t: "tableau", titre: "Vitesse du son selon le milieu", entetes: ["Milieu", "Vitesse approximative"], lignes: [["air", "**340 m/s**"], ["eau", "**1 500 m/s**"], ["acier", "**5 000 m/s**"], ["vide", "pas de propagation"]] },
            { t: "texte", md: "Le son va plus vite dans les solides et les liquides que dans l'air. Mais il reste **très lent comparé à la lumière** (300 000 km/s, presque un million de fois plus rapide). Voilà pourquoi on voit l'éclair avant d'entendre le tonnerre." },
            { t: "exemple", titre: "À quelle distance est l'orage ?", etapes: ["Tu vois l'éclair, puis tu entends le tonnerre 3 s plus tard.", "La lumière arrive presque instantanément : le retard est dû au son.", "d = v × t = 340 × 3 = **1 020 m** : l'orage est à environ 1 km."] },
            { t: "astuce", md: "Compte les secondes entre l'éclair et le tonnerre, puis **divise par 3** : tu obtiens à peu près la distance de l'orage en kilomètres. Le son parcourt environ 1 km en 3 s." },
          ],
        },
        {
          titre: "Grave ou aigu, faible ou fort",
          blocs: [
            { t: "definition", terme: "Fréquence", md: "Le **nombre de vibrations par seconde**. Elle s'exprime en **hertz (Hz)** : 440 Hz, c'est 440 vibrations chaque seconde (la note *la* du diapason). Un son **aigu** a une fréquence **élevée** ; un son **grave** a une fréquence **basse**." },
            { t: "schema", titre: "Trois sons vus sur un oscilloscope", legende: "La fréquence fixe la hauteur (grave ou aigu) ; l'amplitude fixe l'intensité (faible ou fort).", svg: `<svg viewBox="0 0 400 255"><text class="texte" x="30" y="16">son de référence</text><line class="pointille" x1="30" y1="45" x2="350" y2="45"/><path class="trait" d="M30 45 q20 -40 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"/><text class="texte" x="30" y="92">plus aigu : fréquence 2 fois plus grande</text><line class="pointille" x1="30" y1="120" x2="350" y2="120"/><path class="trait" d="M30 120 q10 -40 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0"/><text class="texte" x="30" y="160">plus fort : amplitude 2 fois plus grande</text><line class="pointille" x1="30" y1="208" x2="350" y2="208"/><path class="trait" d="M30 208 q20 -80 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"/><line class="trait-fin" x1="368" y1="168" x2="368" y2="208"/><text class="texte-petit" x="374" y="192">A</text></svg>` },
            { t: "propriete", titre: "Ce que l'oreille entend", md: "L'oreille humaine perçoit les sons de **20 Hz à 20 000 Hz**.\n\n• Au-dessus de 20 000 Hz : les **ultrasons** (chauve-souris, dauphins, échographie, sonar).\n• En dessous de 20 Hz : les **infrasons** (éléphants, baleines, séismes)." },
            { t: "texte", md: "L'**intensité sonore** (son faible ou fort) dépend de l'**amplitude** de la vibration : plus la corde ou la membrane s'écarte loin, plus le son est fort. Deux sons de même fréquence ont la même hauteur ; si l'un a une amplitude plus grande, il est simplement **plus fort**." },
            { t: "verifie", q: "Deux sons ont la même fréquence, mais le second a une amplitude deux fois plus grande. Le second son est…", choix: ["plus aigu", "plus grave", "plus fort", "plus faible"], bonne: 2, explication: "L'amplitude règle l'intensité : plus grande amplitude, son plus fort. La hauteur, elle, ne change pas, car la fréquence est la même." },
          ],
        },
        {
          titre: "Protéger ses oreilles",
          blocs: [
            { t: "texte", md: "Le **niveau sonore** se mesure avec un **sonomètre**, en **décibels (dB)**. L'échelle est trompeuse : quand le niveau augmente de 10 dB, l'intensité est multipliée par 10 !" },
            { t: "graphique", type: "barres", titre: "Niveau sonore de situations courantes", unite: "dB", donnees: [{ label: "chuchotement", valeur: 30 }, { label: "conversation", valeur: 60 }, { label: "rue animée", valeur: 75 }, { label: "tondeuse", valeur: 90 }, { label: "concert", valeur: 105 }, { label: "avion au décollage", valeur: 130 }] },
            { t: "propriete", titre: "Seuils de danger", md: "Au-delà de **85 dB**, une exposition prolongée **abîme l'oreille**. À **120 dB**, c'est le **seuil de douleur**. Les cellules de l'oreille interne détruites ne repoussent jamais." },
            { t: "attention", md: "« Tant que ça ne fait pas mal, ce n'est pas grave » : c'est faux ! À 100 dB, on ne ressent aucune douleur, mais quelques dizaines de minutes suffisent à léser l'oreille. Baisse le volume du casque, fais des pauses, et porte des bouchons en concert." },
          ],
        },
        {
          titre: "L'écho, le sonar et les ultrasons",
          blocs: [
            { t: "definition", terme: "Écho", md: "Le son **réfléchi** par un obstacle (falaise, mur, fond de la mer) qui revient vers son point de départ." },
            { t: "schema", titre: "L'écho fait un aller-retour", legende: "Pendant la durée t mesurée, le son parcourt deux fois la distance d.", svg: `<svg viewBox="0 0 400 210"><line class="trait" x1="10" y1="160" x2="395" y2="160"/><path class="aplat" d="M330 160 L330 40 L345 30 L395 30 L395 160 Z"/><path class="trait" d="M330 160 L330 40 L345 30 L395 30"/><circle class="trait" cx="40" cy="80" r="10"/><g class="trait"><line x1="40" y1="90" x2="40" y2="132"/><line x1="26" y1="106" x2="54" y2="106"/><line x1="40" y1="132" x2="28" y2="160"/><line x1="40" y1="132" x2="52" y2="160"/></g><path class="trait" d="M70 88 L320 88" marker-end="url(#fl-p)"/><text class="texte-pigment" x="195" y="78" text-anchor="middle">aller</text><path class="trait" d="M320 118 L70 118" marker-end="url(#fl)"/><text class="texte" x="195" y="138" text-anchor="middle">retour : l'écho</text><path class="trait-fin" d="M180 185 L46 185" marker-end="url(#fl)"/><path class="trait-fin" d="M210 185 L324 185" marker-end="url(#fl)"/><text class="texte-main" x="195" y="190" text-anchor="middle">d</text><text class="texte-petit" x="362" y="100" text-anchor="middle">falaise</text></svg>` },
            { t: "propriete", titre: "Distance de l'obstacle", md: "Le son fait l'**aller-retour**, donc :\n\n==d = (v × t) / 2==\n\navec v la vitesse du son et t la durée entre l'émission et le retour de l'écho." },
            { t: "exemple", titre: "La falaise et le sonar", etapes: ["Tu cries face à une falaise et l'écho revient 2 s plus tard : d = 340 × 2 / 2 = **340 m**.", "Un **sonar** de bateau émet un ultrason qui revient après 0,5 s. Dans l'eau, v = 1 500 m/s.", "Profondeur : d = 1 500 × 0,5 / 2 = **375 m**."] },
            { t: "savais-tu", md: "La chauve-souris chasse dans le noir grâce à l'écho de ses cris **ultrasonores** : elle « voit » les insectes avec ses oreilles. Les médecins utilisent le même principe pour l'**échographie**, qui montre un bébé avant sa naissance." },
            { t: "verifie", q: "Pourquoi divise-t-on par 2 dans le calcul de la distance d'un obstacle par écho ?", choix: ["Parce que le son ralentit au retour", "Parce que le son fait l'aller et le retour", "Parce que l'écho est deux fois moins fort"], bonne: 1, explication: "Pendant la durée mesurée, le son va jusqu'à l'obstacle puis revient : il parcourt 2 × d. La distance de l'obstacle est donc la moitié de v × t." },
          ],
        },
      ],
      bilan: "Un son est une vibration qui voyage dans la matière à 340 m/s dans l'air : sa fréquence le rend grave ou aigu, son amplitude faible ou fort. Au-delà de 85 dB, tes oreilles sont en danger.",
    },
    "4e-physique-chimie-10-mesures-et-demarche": {
      accroche: "En 1999, une sonde spatiale de la NASA s'est écrasée sur Mars. La cause ? Une équipe calculait en unités anglaises, l'autre en unités du système international. Une simple erreur d'unité a coûté des centaines de millions de dollars.",
      objectifs: [
        "Utiliser les unités du système international, leurs préfixes et les conversions",
        "Utiliser les puissances de dix et les chiffres significatifs",
        "Lire un graphique, suivre un protocole et mener une démarche d'investigation",
        "Reconnaître les pictogrammes de danger et respecter les règles de sécurité au laboratoire",
      ],
      sections: [
        {
          titre: "Des unités communes au monde entier",
          blocs: [
            { t: "texte", md: "Pour que les scientifiques du monde entier se comprennent, ils utilisent les mêmes unités : celles du **système international (SI)**. Un résultat de mesure s'écrit toujours avec ==un nombre ET une unité== : « 12 » ne veut rien dire, « 12 cm » ou « 12 kg » oui." },
            { t: "tableau", titre: "Grandeurs, unités et instruments de mesure", entetes: ["Grandeur", "Unité SI", "Symbole", "Instrument"], lignes: [["longueur", "mètre", "m", "règle, mètre ruban"], ["masse", "kilogramme", "kg", "balance"], ["durée", "seconde", "s", "chronomètre"], ["intensité du courant", "ampère", "A", "ampèremètre"], ["température", "kelvin", "K", "thermomètre (souvent gradué en °C)"], ["tension électrique", "volt", "V", "voltmètre"], ["volume", "mètre cube", "m³", "éprouvette graduée (en mL)"]] },
            { t: "savais-tu", md: "La température de l'eau qui gèle est 0 °C, soit 273,15 K. Le zéro de l'échelle kelvin, −273,15 °C, est la température la plus basse possible : le **zéro absolu**." },
          ],
        },
        {
          titre: "Préfixes et conversions",
          blocs: [
            { t: "tableau", titre: "Les préfixes à connaître", entetes: ["Préfixe", "Symbole", "Signification", "Exemple"], lignes: [["kilo", "k", "× 1 000", "1 km = 1 000 m"], ["hecto", "h", "× 100", "1 hPa = 100 Pa"], ["déca", "da", "× 10", "1 dam = 10 m"], ["déci", "d", "÷ 10", "1 dm = 0,1 m"], ["centi", "c", "÷ 100", "1 cm = 0,01 m"], ["milli", "m", "÷ 1 000", "1 mL = 0,001 L"], ["micro", "µ", "÷ 1 000 000", "1 µm = 0,000 001 m"]] },
            { t: "exemple", titre: "Trois conversions", etapes: ["2,5 km en m : kilo = × 1 000, donc 2,5 × 1 000 = **2 500 m**.", "150 mL en L : 1 L = 1 000 mL, donc 150 ÷ 1 000 = **0,15 L**.", "1 kg = 1 000 g et 1 L = 1 000 mL : le même préfixe donne toujours le même facteur."] },
            { t: "astuce", md: "Pour vérifier une conversion, pose-toi la question : « l'unité d'arrivée est-elle plus petite ? » Si oui, il en faut **plus**, donc le nombre doit **grandir** (2,5 km → 2 500 m). Sinon, il doit diminuer (150 mL → 0,15 L)." },
            { t: "verifie", q: "Que signifie le préfixe « centi » ?", choix: ["Cent fois l'unité", "Un centième de l'unité", "Un millième de l'unité"], bonne: 1, explication: "Centi signifie « divisé par 100 » : 1 cm est un centième de mètre. C'est hecto qui signifie « fois 100 »." },
          ],
        },
        {
          titre: "Puissances de dix et écriture scientifique",
          blocs: [
            { t: "propriete", titre: "Puissances de dix", md: "• 10³ = 1 000 (un 1 suivi de 3 zéros) ; 10⁶ = 1 000 000.\n• 10⁻³ = 0,001 (le 1 est en 3e position après la virgule).\n\n**Écriture scientifique** : un nombre **entre 1 et 10** (10 exclu), multiplié par une puissance de dix. Par exemple ==0,003 m = 3 × 10⁻³ m==." },
            { t: "exemple", titre: "Écrire et convertir", etapes: ["150 000 000 km (distance Terre-Soleil) = **1,5 × 10⁸ km**.", "Taille d'un atome : 0,000 000 000 1 m = **10⁻¹⁰ m**.", "4,5 × 10⁴ m = 45 000 m = **45 km**."] },
            { t: "verifie", q: "Comment s'écrit 0,003 m en écriture scientifique ?", choix: ["3 × 10³ m", "3 × 10⁻³ m", "0,3 × 10⁻² m"], bonne: 1, explication: "0,003 = 3 millièmes = 3 × 10⁻³. L'écriture 0,3 × 10⁻² vaut la même chose mais n'est pas scientifique : le premier nombre doit être entre 1 et 10." },
          ],
        },
        {
          titre: "Toute mesure a ses limites",
          blocs: [
            { t: "texte", md: "Mesure trois fois le même crayon : tu trouveras peut-être 14,3 cm, 14,2 cm et 14,3 cm. Ce n'est pas une faute ! Toute mesure a une **incertitude**, due à l'instrument, à l'œil de l'expérimentateur et à l'objet lui-même. Il est normal que deux mesures faites avec soin diffèrent un peu." },
            { t: "schema", titre: "Lire une règle graduée au millimètre", legende: "La pointe du crayon tombe sur la 3e graduation après 14 cm : on lit 14,3 cm, pas davantage.", svg: `<svg viewBox="0 0 400 160"><rect class="aplat-papier" x="20" y="80" width="360" height="50"/><rect class="trait" x="20" y="80" width="360" height="50"/><g class="trait-fin"><line x1="40" y1="80" x2="40" y2="104"/><line x1="48" y1="80" x2="48" y2="89"/><line x1="56" y1="80" x2="56" y2="89"/><line x1="64" y1="80" x2="64" y2="89"/><line x1="72" y1="80" x2="72" y2="89"/><line x1="80" y1="80" x2="80" y2="96"/><line x1="88" y1="80" x2="88" y2="89"/><line x1="96" y1="80" x2="96" y2="89"/><line x1="104" y1="80" x2="104" y2="89"/><line x1="112" y1="80" x2="112" y2="89"/><line x1="120" y1="80" x2="120" y2="104"/><line x1="128" y1="80" x2="128" y2="89"/><line x1="136" y1="80" x2="136" y2="89"/><line x1="144" y1="80" x2="144" y2="89"/><line x1="152" y1="80" x2="152" y2="89"/><line x1="160" y1="80" x2="160" y2="96"/><line x1="168" y1="80" x2="168" y2="89"/><line x1="176" y1="80" x2="176" y2="89"/><line x1="184" y1="80" x2="184" y2="89"/><line x1="192" y1="80" x2="192" y2="89"/><line x1="200" y1="80" x2="200" y2="104"/><line x1="208" y1="80" x2="208" y2="89"/><line x1="216" y1="80" x2="216" y2="89"/><line x1="224" y1="80" x2="224" y2="89"/><line x1="232" y1="80" x2="232" y2="89"/><line x1="240" y1="80" x2="240" y2="96"/><line x1="248" y1="80" x2="248" y2="89"/><line x1="256" y1="80" x2="256" y2="89"/><line x1="264" y1="80" x2="264" y2="89"/><line x1="272" y1="80" x2="272" y2="89"/><line x1="280" y1="80" x2="280" y2="104"/><line x1="288" y1="80" x2="288" y2="89"/><line x1="296" y1="80" x2="296" y2="89"/><line x1="304" y1="80" x2="304" y2="89"/><line x1="312" y1="80" x2="312" y2="89"/><line x1="320" y1="80" x2="320" y2="96"/><line x1="328" y1="80" x2="328" y2="89"/><line x1="336" y1="80" x2="336" y2="89"/><line x1="344" y1="80" x2="344" y2="89"/><line x1="352" y1="80" x2="352" y2="89"/><line x1="360" y1="80" x2="360" y2="104"/></g><text class="texte-petit" x="40" y="120" text-anchor="middle">12</text><text class="texte-petit" x="120" y="120" text-anchor="middle">13</text><text class="texte-petit" x="200" y="120" text-anchor="middle">14</text><text class="texte-petit" x="280" y="120" text-anchor="middle">15</text><text class="texte-petit" x="360" y="120" text-anchor="middle">16 cm</text><rect class="aplat" x="20" y="46" width="190" height="20"/><rect class="trait" x="20" y="46" width="190" height="20"/><path class="aplat-fort" d="M210 46 L224 56 L210 66 Z"/><line class="pointille" x1="224" y1="56" x2="224" y2="80"/><text class="texte-pigment" x="224" y="32" text-anchor="middle">14,3 cm</text><text class="texte-petit" x="100" y="60" text-anchor="middle">crayon</text></svg>` },
            { t: "propriete", titre: "Chiffres significatifs", md: "On écrit un résultat avec **autant de chiffres que la précision de l'instrument le permet**, pas plus. Avec une règle graduée au millimètre, on écrit **14,3 cm** ; écrire 14,3000 cm laisserait croire qu'on a mesuré au cent-millième de centimètre !" },
            { t: "exemple", titre: "Le crayon en écriture scientifique", md: "14,3 cm = **1,43 × 10¹ cm**. En mètres : 14,3 cm = 0,143 m = **1,43 × 10⁻¹ m**. Les trois chiffres significatifs 1, 4, 3 sont conservés." },
          ],
        },
        {
          titre: "La démarche d'investigation et la sécurité",
          blocs: [
            { t: "etapes", titre: "Les étapes de la démarche d'investigation", items: [{ titre: "Observer, questionner", md: "Une situation intrigue : « Pourquoi le sucre disparaît-il dans l'eau ? »" }, { titre: "Formuler une hypothèse", md: "Une réponse possible, à vérifier : « Le sucre est toujours là, dissous. »" }, { titre: "Concevoir et réaliser une expérience", md: "Un protocole qui teste l'hypothèse : peser l'eau et le sucre avant et après, goûter (hors labo !), faire évaporer l'eau." }, { titre: "Analyser les résultats", md: "Comparer les mesures, tracer un graphique, chercher des régularités." }, { titre: "Conclure", md: "L'hypothèse est validée ou rejetée. Si elle est rejetée, on en formule une nouvelle." }] },
            { t: "graphique", type: "courbe", titre: "Température de l'eau chauffée en fonction du temps", unite: "°C", donnees: [{ label: "0 min", valeur: 20 }, { label: "1 min", valeur: 40 }, { label: "2 min", valeur: 58 }, { label: "3 min", valeur: 75 }, { label: "4 min", valeur: 90 }, { label: "5 min", valeur: 100 }, { label: "6 min", valeur: 100 }, { label: "7 min", valeur: 100 }, { label: "8 min", valeur: 100 }, { label: "9 min", valeur: 100 }] },
            { t: "texte", md: "Lire un graphique, c'est d'abord repérer **ce qui est en abscisse** (ici le temps) et **en ordonnée** (la température). La température monte, puis, de 5 à 9 min, la courbe devient **horizontale à 100 °C** : c'est un **palier**. L'eau est en train de **bouillir** : tant que dure le changement d'état, la température ne change pas." },
            { t: "tableau", titre: "Pictogrammes de danger", entetes: ["Pictogramme", "Danger signalé"], lignes: [["une flamme", "**inflammable** : tenir loin des flammes"], ["une tête de mort", "**toxique** : mortel à faible dose"], ["une main et une surface rongées", "**corrosif** : brûle la peau et les yeux"], ["un point d'exclamation", "**irritant ou nocif**"]] },
            { t: "liste", titre: "Au laboratoire", items: ["**Blouse en coton** fermée, **lunettes de protection**, cheveux attachés.", "Lire l'étiquette et les pictogrammes **avant** d'ouvrir un flacon.", "Ne jamais goûter ni sentir directement un produit."] },
          ],
        },
      ],
      bilan: "Un nombre, une unité, une précision honnête : c'est la base de toute mesure. Avec une démarche rigoureuse et les bons gestes de sécurité, tu peux interroger le monde comme un vrai scientifique.",
    },
  },
};
