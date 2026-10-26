// Cours ÉCLORE — 3e Physique-Chimie. Schéma : docs/COURS.md
export default {
  id: "3e-physique-chimie",
  chapitres: {
    "3e-physique-chimie-01-atome-et-ions": {
      accroche: "En 1909, des physiciens bombardent une feuille d'or très fine avec des particules minuscules. Presque toutes la traversent comme si elle n'existait pas… mais quelques-unes rebondissent en arrière ! « C'est comme si un obus rebondissait sur du papier de soie », dira Ernest Rutherford. Il venait de découvrir que l'atome est presque vide, avec un minuscule noyau très dense au centre.",
      objectifs: [
        "Décrire la structure de l'atome : noyau (protons, neutrons) et électrons",
        "Expliquer pourquoi un atome est électriquement neutre",
        "Comprendre comment se forme un ion et compter ses électrons",
        "Lire le tableau périodique des éléments",
      ],
      sections: [
        {
          titre: "Au cœur de l'atome",
          blocs: [
            { t: "texte", md: "Toute la matière est faite d'atomes. Un atome est si petit qu'il en faudrait environ 10 millions côte à côte pour faire 1 mm. Pourtant, on sait aujourd'hui décrire ce qu'il y a à l'intérieur." },
            { t: "definition", terme: "Atome", md: "Un **noyau** central, formé de **protons** (chargés **+**) et de **neutrons** (**neutres**), autour duquel se déplacent des **électrons** (chargés **−**). Entre le noyau et les électrons : ==du vide==." },
            { t: "schema", titre: "L'atome de lithium (Z = 3)", legende: "Échelle non respectée : en vrai, le noyau est environ 100 000 fois plus petit que l'atome.", svg: `<svg viewBox="0 0 400 240"><circle class="pointille" cx="150" cy="120" r="80"/><circle class="aplat-fort" cx="143" cy="112" r="9"/><circle class="aplat-papier" cx="157" cy="112" r="9"/><circle class="trait-fin" cx="157" cy="112" r="9"/><circle class="aplat-papier" cx="136" cy="125" r="9"/><circle class="trait-fin" cx="136" cy="125" r="9"/><circle class="aplat-fort" cx="150" cy="125" r="9"/><circle class="aplat-papier" cx="164" cy="125" r="9"/><circle class="trait-fin" cx="164" cy="125" r="9"/><circle class="aplat-papier" cx="143" cy="138" r="9"/><circle class="trait-fin" cx="143" cy="138" r="9"/><circle class="aplat-fort" cx="157" cy="138" r="9"/><text class="texte-petit" x="143" y="116" text-anchor="middle" style="fill:var(--papier)">+</text><text class="texte-petit" x="150" y="129" text-anchor="middle" style="fill:var(--papier)">+</text><text class="texte-petit" x="157" y="142" text-anchor="middle" style="fill:var(--papier)">+</text><circle class="aplat-papier" cx="190" cy="51" r="7"/><circle class="trait" cx="190" cy="51" r="7"/><text class="texte-petit" x="190" y="55" text-anchor="middle">−</text><circle class="aplat-papier" cx="70" cy="120" r="7"/><circle class="trait" cx="70" cy="120" r="7"/><text class="texte-petit" x="70" y="124" text-anchor="middle">−</text><circle class="aplat-papier" cx="190" cy="189" r="7"/><circle class="trait" cx="190" cy="189" r="7"/><text class="texte-petit" x="190" y="193" text-anchor="middle">−</text><line class="trait-fin" x1="198" y1="50" x2="262" y2="50"/><text class="texte" x="266" y="54">électron (−)</text><line class="trait-fin" x1="173" y1="118" x2="262" y2="104"/><text class="texte" x="266" y="104">noyau</text><text class="texte-petit" x="266" y="119">3 protons + 4 neutrons</text><circle class="aplat-fort" cx="272" cy="152" r="7"/><text class="texte-petit" x="284" y="156">proton (+)</text><circle class="aplat-papier" cx="272" cy="174" r="7"/><circle class="trait-fin" cx="272" cy="174" r="7"/><text class="texte-petit" x="284" y="178">neutron (neutre)</text><text class="texte-main" x="12" y="228">surtout du vide !</text></svg>` },
            { t: "tableau", titre: "Les trois particules de l'atome", entetes: ["Particule", "Où ?", "Charge", "Masse"], lignes: [["Proton", "dans le noyau", "**+** (positive)", "lourd"], ["Neutron", "dans le noyau", "**0** (neutre)", "lourd (comme le proton)"], ["Électron", "autour du noyau", "**−** (négative)", "environ 2 000 fois plus léger"]] },
            { t: "savais-tu", md: "Si un atome avait la taille d'un stade de football, son noyau serait une bille posée au centre, et les électrons des grains de poussière dans les tribunes. Le noyau est minuscule, mais il contient ==presque toute la masse== de l'atome." },
            { t: "verifie", q: "Où se trouve la quasi-totalité de la masse d'un atome ?", choix: ["Dans les électrons", "Dans le noyau", "Dans le vide entre les particules", "Elle est répartie partout"], bonne: 1, explication: "Protons et neutrons sont environ 2 000 fois plus lourds que les électrons : presque toute la masse est concentrée dans le noyau, pourtant minuscule." },
          ],
        },
        {
          titre: "Un atome est électriquement neutre",
          blocs: [
            { t: "propriete", titre: "Neutralité de l'atome", md: "Un atome possède ==autant d'électrons que de protons==. Les charges + du noyau et les charges − des électrons se compensent : l'atome est **électriquement neutre**.\n\nLe nombre de protons s'appelle le **numéro atomique Z**. Il caractérise l'élément : tous les atomes de carbone ont Z = 6." },
            { t: "exemple", titre: "Combien d'électrons pour le carbone (Z = 6) ?", etapes: ["Z = 6 : le noyau contient 6 protons, sa charge est +6.", "L'atome est neutre : il faut 6 charges − pour compenser.", "L'atome de carbone possède donc **6 électrons**."] },
            { t: "attention", md: "Z donne le nombre de **protons**, pas de neutrons ! Un atome d'aluminium a 13 protons et 14 neutrons : Z = 13, et la charge de son noyau est **+13** (les neutrons ne comptent pas, ils sont neutres)." },
            { t: "verifie", q: "Un atome d'aluminium a 13 protons et 14 neutrons. Quelle est la charge de son noyau ?", choix: ["+27", "+13", "+14", "0"], bonne: 1, explication: "Seuls les protons sont chargés : 13 protons donnent une charge +13. Les 14 neutrons ne changent pas la charge." },
          ],
        },
        {
          titre: "Les ions : des électrons gagnés ou perdus",
          blocs: [
            { t: "definition", terme: "Ion", md: "Un atome (ou un groupe d'atomes) qui a **gagné** ou **perdu** un ou plusieurs électrons. Il n'est plus neutre. ==Le noyau, lui, ne change jamais.==" },
            { t: "schema", titre: "Formation des ions Na⁺ et Cl⁻", legende: "Le nombre de protons reste le même : seuls les électrons changent.", svg: `<svg viewBox="0 0 400 262"><circle class="pointille" cx="60" cy="60" r="40"/><circle class="aplat-fort" cx="60" cy="60" r="18"/><text class="texte-petit" x="60" y="64" text-anchor="middle" style="fill:var(--papier)">11+</text><text class="texte" x="60" y="118" text-anchor="middle">atome Na</text><text class="texte-petit" x="60" y="132" text-anchor="middle">11 p · 11 e⁻</text><line class="trait" x1="110" y1="60" x2="175" y2="60" marker-end="url(#fl)"/><circle class="aplat-papier" cx="142" cy="36" r="7"/><circle class="trait" cx="142" cy="36" r="7"/><text class="texte-petit" x="142" y="40" text-anchor="middle">−</text><path class="trait-fin" d="M150 32 L172 22" marker-end="url(#fl)"/><text class="texte-petit" x="142" y="80" text-anchor="middle">perd 1 e⁻</text><circle class="pointille" cx="230" cy="60" r="34"/><circle class="aplat-fort" cx="230" cy="60" r="18"/><text class="texte-petit" x="230" y="64" text-anchor="middle" style="fill:var(--papier)">11+</text><text class="texte" x="230" y="118" text-anchor="middle">ion Na⁺</text><text class="texte-petit" x="230" y="132" text-anchor="middle">11 p · 10 e⁻</text><text class="texte" x="285" y="56">+11 − 10 = +1</text><text class="texte-pigment" x="285" y="76">cation</text><circle class="pointille" cx="60" cy="185" r="40"/><circle class="aplat-fort" cx="60" cy="185" r="18"/><text class="texte-petit" x="60" y="189" text-anchor="middle" style="fill:var(--papier)">17+</text><text class="texte" x="60" y="242" text-anchor="middle">atome Cl</text><text class="texte-petit" x="60" y="256" text-anchor="middle">17 p · 17 e⁻</text><line class="trait" x1="110" y1="185" x2="175" y2="185" marker-end="url(#fl)"/><circle class="aplat-papier" cx="142" cy="161" r="7"/><circle class="trait" cx="142" cy="161" r="7"/><text class="texte-petit" x="142" y="165" text-anchor="middle">−</text><path class="trait-fin" d="M122 150 L134 156" marker-end="url(#fl)"/><text class="texte-petit" x="142" y="205" text-anchor="middle">gagne 1 e⁻</text><circle class="pointille" cx="230" cy="185" r="44"/><circle class="aplat-fort" cx="230" cy="185" r="18"/><text class="texte-petit" x="230" y="189" text-anchor="middle" style="fill:var(--papier)">17+</text><text class="texte" x="230" y="246" text-anchor="middle">ion Cl⁻</text><text class="texte-petit" x="230" y="259" text-anchor="middle">17 p · 18 e⁻</text><text class="texte" x="290" y="181">+17 − 18 = −1</text><text class="texte-pigment" x="290" y="201">anion</text></svg>` },
            { t: "propriete", titre: "Cation et anion", md: "Un atome qui **perd** des électrons devient un **cation** : ion **positif** (Na⁺, H⁺, Cu²⁺, Fe²⁺, Fe³⁺).\nUn atome qui **gagne** des électrons devient un **anion** : ion **négatif** (Cl⁻, HO⁻).\n\nLe chiffre écrit en haut indique le nombre de charges : Cu²⁺ a perdu **2** électrons." },
            { t: "tableau", titre: "Les ions à connaître", entetes: ["Ion", "Formule", "Protons", "Électrons"], lignes: [["hydrogène", "H⁺", "1", "0"], ["sodium", "Na⁺", "11", "10"], ["fer II", "Fe²⁺", "26", "24"], ["fer III", "Fe³⁺", "26", "23"], ["cuivre II", "Cu²⁺", "29", "27"], ["chlorure", "Cl⁻", "17", "18"], ["hydroxyde", "HO⁻", "9 (O + H)", "10"]] },
            { t: "exemple", titre: "Combien d'électrons dans l'ion Fe³⁺ ?", etapes: ["Le fer a Z = 26 : l'atome a 26 protons et 26 électrons.", "« 3+ » signifie qu'il a **perdu** 3 électrons.", "26 − 3 = **23 électrons**. Il garde ses 26 protons : charge +26 − 23 = +3."] },
            { t: "attention", md: "Pour former Cu²⁺, l'atome de cuivre perd **deux électrons**, pas deux protons ! Si le noyau perdait des protons, ce ne serait plus du cuivre. Lors d'une transformation chimique, ==le noyau ne bouge pas==." },
            { t: "astuce", md: "Pour ne pas confondre : dans ca**t**ion, le **t** ressemble à un signe **+**. Et un a**n**ion est **n**égatif." },
          ],
        },
        {
          titre: "Le tableau périodique",
          blocs: [
            { t: "texte", md: "En 1869, le chimiste russe Dmitri Mendeleïev a eu l'idée de ranger les éléments dans un tableau. Aujourd'hui, on les classe par **numéro atomique Z croissant**, ligne après ligne. Chaque case donne le symbole de l'élément et son Z : tu y lis directement le nombre de protons." },
            { t: "schema", titre: "Les trois premières lignes du tableau", legende: "Les éléments d'une même colonne forment une famille.", svg: `<svg viewBox="0 0 400 200"><text class="texte-petit" x="20" y="16">Z croissant →</text><rect class="aplat-papier" x="20" y="24" width="44" height="40"/><rect class="trait-fin" x="20" y="24" width="44" height="40"/><text class="texte-petit" x="25" y="36">1</text><text class="texte" x="42" y="54" text-anchor="middle">H</text><rect class="aplat" x="342" y="24" width="44" height="40"/><rect class="trait-fin" x="342" y="24" width="44" height="40"/><text class="texte-petit" x="347" y="36">2</text><text class="texte" x="364" y="54" text-anchor="middle">He</text><rect class="aplat" x="20" y="66" width="44" height="40"/><rect class="trait-fin" x="20" y="66" width="44" height="40"/><text class="texte-petit" x="25" y="78">3</text><text class="texte" x="42" y="96" text-anchor="middle">Li</text><rect class="trait-fin" x="66" y="66" width="44" height="40"/><text class="texte-petit" x="71" y="78">4</text><text class="texte" x="88" y="96" text-anchor="middle">Be</text><rect class="trait-fin" x="112" y="66" width="44" height="40"/><text class="texte-petit" x="117" y="78">5</text><text class="texte" x="134" y="96" text-anchor="middle">B</text><rect class="trait-fin" x="158" y="66" width="44" height="40"/><text class="texte-petit" x="163" y="78">6</text><text class="texte" x="180" y="96" text-anchor="middle">C</text><rect class="trait-fin" x="204" y="66" width="44" height="40"/><text class="texte-petit" x="209" y="78">7</text><text class="texte" x="226" y="96" text-anchor="middle">N</text><rect class="trait-fin" x="250" y="66" width="44" height="40"/><text class="texte-petit" x="255" y="78">8</text><text class="texte" x="272" y="96" text-anchor="middle">O</text><rect class="aplat" x="296" y="66" width="44" height="40"/><rect class="trait-fin" x="296" y="66" width="44" height="40"/><text class="texte-petit" x="301" y="78">9</text><text class="texte" x="318" y="96" text-anchor="middle">F</text><rect class="aplat" x="342" y="66" width="44" height="40"/><rect class="trait-fin" x="342" y="66" width="44" height="40"/><text class="texte-petit" x="347" y="78">10</text><text class="texte" x="364" y="96" text-anchor="middle">Ne</text><rect class="aplat" x="20" y="108" width="44" height="40"/><rect class="trait-fin" x="20" y="108" width="44" height="40"/><text class="texte-petit" x="25" y="120">11</text><text class="texte" x="42" y="138" text-anchor="middle">Na</text><rect class="trait-fin" x="66" y="108" width="44" height="40"/><text class="texte-petit" x="71" y="120">12</text><text class="texte" x="88" y="138" text-anchor="middle">Mg</text><rect class="trait-fin" x="112" y="108" width="44" height="40"/><text class="texte-petit" x="117" y="120">13</text><text class="texte" x="134" y="138" text-anchor="middle">Al</text><rect class="trait-fin" x="158" y="108" width="44" height="40"/><text class="texte-petit" x="163" y="120">14</text><text class="texte" x="180" y="138" text-anchor="middle">Si</text><rect class="trait-fin" x="204" y="108" width="44" height="40"/><text class="texte-petit" x="209" y="120">15</text><text class="texte" x="226" y="138" text-anchor="middle">P</text><rect class="trait-fin" x="250" y="108" width="44" height="40"/><text class="texte-petit" x="255" y="120">16</text><text class="texte" x="272" y="138" text-anchor="middle">S</text><rect class="aplat" x="296" y="108" width="44" height="40"/><rect class="trait-fin" x="296" y="108" width="44" height="40"/><text class="texte-petit" x="301" y="120">17</text><text class="texte" x="318" y="138" text-anchor="middle">Cl</text><rect class="aplat" x="342" y="108" width="44" height="40"/><rect class="trait-fin" x="342" y="108" width="44" height="40"/><text class="texte-petit" x="347" y="120">18</text><text class="texte" x="364" y="138" text-anchor="middle">Ar</text><text class="texte-pigment" x="42" y="170" text-anchor="middle">alcalins</text><text class="texte-pigment" x="318" y="170" text-anchor="middle">halogènes</text><text class="texte-pigment" x="364" y="190" text-anchor="middle">gaz nobles</text></svg>` },
            { t: "propriete", titre: "Lignes et colonnes", md: "Les éléments sont rangés par **Z croissant**. Une **colonne** regroupe une **famille** d'éléments aux **propriétés chimiques voisines** : le lithium et le sodium réagissent violemment avec l'eau ; l'hélium, le néon et l'argon ne réagissent presque avec rien." },
            { t: "verifie", q: "Le fluor F et le chlore Cl sont dans la même colonne. Qu'ont-ils en commun ?", choix: ["Le même nombre de protons", "Des propriétés chimiques voisines", "La même masse", "Rien du tout"], bonne: 1, explication: "Une colonne forme une famille : les halogènes ont des propriétés chimiques proches. Leurs Z sont différents (9 et 17), donc leurs noyaux aussi." },
          ],
        },
      ],
      bilan: "Un noyau de protons et de neutrons, des électrons autour, beaucoup de vide : l'atome est neutre. Un ion a gagné ou perdu des électrons, jamais des protons.",
    },
    "3e-physique-chimie-02-acides-et-bases": {
      accroche: "Fais bouillir quelques feuilles de chou rouge : tu obtiens un jus violet. Verses-en un peu dans du jus de citron : il devient rose vif ! Dans de l'eau savonneuse, il vire au vert. Ce jus de cuisine est un détecteur d'acides et de bases.",
      objectifs: [
        "Classer une solution grâce à l'échelle de pH",
        "Relier l'acidité aux ions H⁺ et HO⁻",
        "Mesurer un pH et prévoir l'effet d'une dilution",
        "Manipuler en sécurité et connaître la réaction entre un acide et le fer",
      ],
      sections: [
        {
          titre: "L'échelle de pH",
          blocs: [
            { t: "definition", terme: "pH", md: "Un nombre, **de 0 à 14**, qui indique si une solution aqueuse est **acide**, **neutre** ou **basique**." },
            { t: "schema", titre: "L'échelle de pH et quelques solutions du quotidien", legende: "Couleurs prises par le papier pH (indicateur universel).", svg: `<svg viewBox="0 0 400 194"><text class="texte-petit" x="104" y="22" text-anchor="middle">vinaigre</text><text class="texte-petit" x="320" y="22" text-anchor="middle">eau de Javel</text><line class="trait-fin" x1="104" y1="27" x2="104" y2="88"/><line class="trait-fin" x1="320" y1="27" x2="320" y2="88"/><text class="texte-petit" x="80" y="48" text-anchor="middle">citron</text><text class="texte-petit" x="200" y="48" text-anchor="middle">eau pure</text><text class="texte-petit" x="272" y="48" text-anchor="middle">savon</text><text class="texte-petit" x="368" y="48" text-anchor="middle">déboucheur</text><line class="trait-fin" x1="80" y1="53" x2="80" y2="88"/><line class="trait-fin" x1="200" y1="53" x2="200" y2="88"/><line class="trait-fin" x1="272" y1="53" x2="272" y2="88"/><line class="trait-fin" x1="368" y1="53" x2="368" y2="88"/><rect class="c-rouge" x="20" y="90" width="72" height="28"/><rect class="c-orange" x="92" y="90" width="48" height="28"/><rect class="c-jaune" x="140" y="90" width="48" height="28"/><rect class="c-vert" x="188" y="90" width="24" height="28"/><rect class="c-bleu" x="212" y="90" width="48" height="28"/><rect class="c-indigo" x="260" y="90" width="48" height="28"/><rect class="c-violet" x="308" y="90" width="72" height="28"/><rect class="trait" x="20" y="90" width="360" height="28"/><text class="texte-petit" x="32" y="132" text-anchor="middle">0</text><text class="texte-petit" x="56" y="132" text-anchor="middle">1</text><text class="texte-petit" x="80" y="132" text-anchor="middle">2</text><text class="texte-petit" x="104" y="132" text-anchor="middle">3</text><text class="texte-petit" x="128" y="132" text-anchor="middle">4</text><text class="texte-petit" x="152" y="132" text-anchor="middle">5</text><text class="texte-petit" x="176" y="132" text-anchor="middle">6</text><text class="texte" x="200" y="133" text-anchor="middle">7</text><text class="texte-petit" x="224" y="132" text-anchor="middle">8</text><text class="texte-petit" x="248" y="132" text-anchor="middle">9</text><text class="texte-petit" x="272" y="132" text-anchor="middle">10</text><text class="texte-petit" x="296" y="132" text-anchor="middle">11</text><text class="texte-petit" x="320" y="132" text-anchor="middle">12</text><text class="texte-petit" x="344" y="132" text-anchor="middle">13</text><text class="texte-petit" x="368" y="132" text-anchor="middle">14</text><text class="texte" x="104" y="152" text-anchor="middle">ACIDE</text><text class="texte" x="200" y="152" text-anchor="middle">neutre</text><text class="texte" x="296" y="152" text-anchor="middle">BASIQUE</text><line class="trait-fin" x1="185" y1="166" x2="25" y2="166" marker-end="url(#fl)"/><line class="trait-fin" x1="215" y1="166" x2="375" y2="166" marker-end="url(#fl)"/><text class="texte-petit" x="104" y="184" text-anchor="middle">de plus en plus acide</text><text class="texte-petit" x="296" y="184" text-anchor="middle">de plus en plus basique</text></svg>` },
            { t: "propriete", titre: "Lire un pH", md: "**pH < 7** : solution **acide**.\n**pH = 7** : solution **neutre** (eau pure).\n**pH > 7** : solution **basique**.\n\nPlus le pH est ==petit==, plus la solution est acide. Plus il est ==grand==, plus elle est basique." },
            { t: "attention", md: "Le pH 0 ne veut pas dire « rien » : c'est **le plus acide** de l'échelle ! Le milieu de l'échelle, 7, est la neutralité." },
            { t: "verifie", q: "Laquelle de ces solutions est la plus acide ?", choix: ["pH = 5", "pH = 7", "pH = 2", "pH = 12"], bonne: 2, explication: "Plus le pH est petit, plus la solution est acide : pH 2 est plus acide que pH 5. pH 7 est neutre et pH 12 est basique." },
          ],
        },
        {
          titre: "Les ions H⁺ et HO⁻",
          blocs: [
            { t: "texte", md: "Pourquoi une solution est-elle acide ? Toute solution aqueuse contient à la fois des ions **hydrogène H⁺** et des ions **hydroxyde HO⁻**. Ce n'est pas leur présence qui compte, c'est leur **proportion**." },
            { t: "tableau", titre: "Qui est majoritaire ?", entetes: ["Solution", "Ions", "pH"], lignes: [["Acide", "plus de **H⁺** que de HO⁻", "inférieur à 7"], ["Neutre", "**autant** de H⁺ que de HO⁻", "égal à 7"], ["Basique", "plus de **HO⁻** que de H⁺", "supérieur à 7"]] },
            { t: "attention", md: "Une solution basique contient **aussi** des ions H⁺ : ils sont simplement **moins nombreux** que les ions HO⁻. Ne dis pas « une base ne contient pas d'ions H⁺ »." },
            { t: "savais-tu", md: "Les **pluies acides** viennent des fumées des usines, des véhicules et des centrales à charbon. Elles contiennent des oxydes de soufre et d'azote qui, dissous dans l'eau des nuages, forment des acides. Le pH de la pluie descend alors sous 5 et abîme forêts, lacs et monuments." },
          ],
        },
        {
          titre: "Mesurer un pH et diluer",
          blocs: [
            { t: "liste", titre: "Trois façons de mesurer", items: ["Le **papier pH** : on y dépose une goutte et on compare sa couleur à une échelle. Rapide, mais peu précis.", "Un **indicateur coloré**, comme le bleu de bromothymol (BBT) ou le jus de chou rouge : il change de couleur selon le pH.", "Le **pH-mètre** : un appareil à électrode qui affiche une valeur précise."] },
            { t: "tableau", titre: "Les couleurs du bleu de bromothymol (BBT)", entetes: ["Milieu", "Couleur du BBT"], lignes: [["acide", "**jaune**"], ["neutre", "**vert**"], ["basique", "**bleu**"]] },
            { t: "propriete", titre: "Effet d'une dilution", md: "**Diluer**, c'est ajouter de l'eau. La dilution ==rapproche le pH de 7== :\n• le pH d'un acide dilué **augmente** ;\n• le pH d'une base diluée **diminue**.\n\nPour un acide, diluer 10 fois augmente le pH d'environ 1 unité." },
            { t: "graphique", type: "courbe", titre: "pH d'un jus de citron de plus en plus dilué", unite: "pH", donnees: [{ label: "pur", valeur: 2 }, { label: "× 10", valeur: 3 }, { label: "× 100", valeur: 4 }, { label: "× 1 000", valeur: 5 }, { label: "× 10 000", valeur: 6 }] },
            { t: "exemple", titre: "Le citron dilué", md: "Un jus de citron a un pH ≈ 2. On le dilue 10 fois : pH ≈ 3. Encore 10 fois : pH ≈ 4. Le pH monte vers 7, mais ==ne le dépasse jamais== par simple ajout d'eau : un acide dilué reste un acide." },
            { t: "verifie", q: "On dilue une solution basique de pH 12 avec beaucoup d'eau. Que devient son pH ?", choix: ["Il augmente vers 14", "Il diminue et se rapproche de 7", "Il devient 0", "Il ne change pas"], bonne: 1, explication: "La dilution rapproche toujours le pH de 7. Pour une base, le pH diminue donc, sans descendre sous 7." },
          ],
        },
        {
          titre: "Sécurité et réaction avec les métaux",
          blocs: [
            { t: "texte", md: "Les acides et les bases concentrés sont **corrosifs** : ils attaquent la peau, les yeux et certains matériaux. Leur pictogramme montre un liquide qui ronge une main et une surface. On porte toujours **lunettes, blouse et gants**." },
            { t: "etapes", titre: "Diluer un acide concentré en sécurité", items: [{ titre: "Se protéger", md: "Lunettes, blouse, gants, cheveux attachés." }, { titre: "L'eau d'abord", md: "Verser de l'eau dans le bécher." }, { titre: "Ajouter l'acide", md: "Verser **lentement l'acide dans l'eau**, jamais l'inverse : sinon, projections brûlantes." }, { titre: "Agiter", md: "Mélanger doucement pour homogénéiser." }, { titre: "Mesurer", md: "Contrôler le pH avec du papier pH." }] },
            { t: "propriete", titre: "Un acide attaque le fer", md: "L'acide chlorhydrique réagit avec le fer : le métal disparaît peu à peu, il se forme des **ions fer Fe²⁺** et un gaz, le **dihydrogène H₂**.\n\nFe + 2 H⁺ → Fe²⁺ + H₂" },
            { t: "exemple", titre: "Reconnaître le dihydrogène", md: "On recueille le gaz dans un tube retourné, puis on approche une allumette enflammée de l'ouverture : on entend une petite détonation, comme un ==« aboiement »==. C'est le test du dihydrogène." },
          ],
        },
      ],
      bilan: "pH < 7 acide (H⁺ majoritaires), pH = 7 neutre, pH > 7 basique (HO⁻ majoritaires). Diluer rapproche le pH de 7, et on verse toujours l'acide dans l'eau.",
    },
    "3e-physique-chimie-03-tests-ions-reactions": {
      accroche: "Prends deux liquides parfaitement limpides : de l'eau salée et une solution de nitrate d'argent. Mélange-les : un nuage blanc apparaît instantanément, comme du lait ! Un solide est né de deux liquides transparents. Les chimistes utilisent ce genre de « magie » pour savoir ce que contient une solution.",
      objectifs: [
        "Identifier des ions et des molécules grâce à des tests caractéristiques",
        "Écrire et équilibrer une équation de réaction",
        "Appliquer la conservation des atomes et de la masse",
        "Décrire l'oxydation des métaux et le principe d'une pile",
      ],
      sections: [
        {
          titre: "Reconnaître un ion par un test",
          blocs: [
            { t: "definition", terme: "Précipité", md: "Un **solide** qui apparaît dans une solution et la trouble quand on ajoute un réactif. Sa **couleur** permet d'identifier l'ion présent." },
            { t: "schema", titre: "Les tests d'ions et leurs précipités", legende: "Ce qui compte, c'est la couleur du précipité, pas celle de la solution de départ.", svg: `<svg viewBox="0 0 400 250"><text class="texte-petit" x="150" y="18" text-anchor="middle">+ quelques gouttes de soude</text><line class="trait-fin" x1="60" y1="26" x2="60" y2="46" marker-end="url(#fl)"/><line class="trait-fin" x1="150" y1="26" x2="150" y2="46" marker-end="url(#fl)"/><line class="trait-fin" x1="240" y1="26" x2="240" y2="46" marker-end="url(#fl)"/><text class="texte-petit" x="330" y="18" text-anchor="middle">+ nitrate d'argent</text><line class="trait-fin" x1="330" y1="26" x2="330" y2="46" marker-end="url(#fl)"/><path class="aplat" d="M44 95 L44 160 A16 16 0 0 0 76 160 L76 95 Z"/><path class="trait c-bleu" d="M44 140 L44 160 A16 16 0 0 0 76 160 L76 140 Z"/><circle class="c-bleu" cx="52" cy="112" r="3"/><circle class="c-bleu" cx="66" cy="122" r="3"/><circle class="c-bleu" cx="56" cy="130" r="2.5"/><path class="trait" d="M44 50 L44 160 A16 16 0 0 0 76 160 L76 50"/><path class="aplat" d="M134 95 L134 160 A16 16 0 0 0 166 160 L166 95 Z"/><path class="trait c-vert" d="M134 140 L134 160 A16 16 0 0 0 166 160 L166 140 Z"/><circle class="c-vert" cx="142" cy="114" r="3"/><circle class="c-vert" cx="157" cy="124" r="3"/><circle class="c-vert" cx="146" cy="131" r="2.5"/><path class="trait" d="M134 50 L134 160 A16 16 0 0 0 166 160 L166 50"/><path class="aplat" d="M224 95 L224 160 A16 16 0 0 0 256 160 L256 95 Z"/><path class="trait c-orange" d="M224 140 L224 160 A16 16 0 0 0 256 160 L256 140 Z"/><circle class="c-orange" cx="232" cy="112" r="3"/><circle class="c-orange" cx="247" cy="121" r="3"/><circle class="c-orange" cx="236" cy="130" r="2.5"/><path class="trait" d="M224 50 L224 160 A16 16 0 0 0 256 160 L256 50"/><path class="aplat" d="M314 95 L314 160 A16 16 0 0 0 346 160 L346 95 Z"/><path class="trait c-blanc" d="M314 140 L314 160 A16 16 0 0 0 346 160 L346 140 Z"/><circle class="c-blanc" cx="322" cy="113" r="3"/><circle class="c-blanc" cx="337" cy="122" r="3"/><circle class="c-blanc" cx="326" cy="131" r="2.5"/><path class="trait" d="M314 50 L314 160 A16 16 0 0 0 346 160 L346 50"/><text class="texte-petit" x="60" y="196" text-anchor="middle">précipité</text><text class="texte-petit" x="60" y="209" text-anchor="middle">bleu</text><text class="texte" x="60" y="230" text-anchor="middle">Cu²⁺</text><text class="texte-petit" x="150" y="196" text-anchor="middle">précipité</text><text class="texte-petit" x="150" y="209" text-anchor="middle">vert</text><text class="texte" x="150" y="230" text-anchor="middle">Fe²⁺</text><text class="texte-petit" x="240" y="196" text-anchor="middle">précipité</text><text class="texte-petit" x="240" y="209" text-anchor="middle">rouille</text><text class="texte" x="240" y="230" text-anchor="middle">Fe³⁺</text><text class="texte-petit" x="330" y="196" text-anchor="middle">précipité blanc</text><text class="texte-petit" x="330" y="209" text-anchor="middle">noircit à la lumière</text><text class="texte" x="330" y="230" text-anchor="middle">Cl⁻</text></svg>` },
            { t: "tableau", titre: "Les tests d'ions à connaître", entetes: ["Ion recherché", "Réactif", "Résultat positif"], lignes: [["cuivre II **Cu²⁺**", "soude (hydroxyde de sodium)", "précipité **bleu**"], ["fer II **Fe²⁺**", "soude", "précipité **vert**"], ["fer III **Fe³⁺**", "soude", "précipité **rouille** (orangé)"], ["chlorure **Cl⁻**", "nitrate d'argent", "précipité **blanc** qui noircit à la lumière"]] },
            { t: "etapes", titre: "Protocole : tester les ions cuivre", items: [{ titre: "Prélever", md: "Verser un peu de solution à tester dans un tube à essais (avec lunettes et blouse)." }, { titre: "Ajouter le réactif", md: "Ajouter quelques gouttes de soude." }, { titre: "Observer", md: "Un précipité bleu se forme… ou non." }, { titre: "Conclure", md: "Précipité bleu : la solution contient des ions Cu²⁺. Sinon, elle n'en contient pas." }] },
            { t: "verifie", q: "On ajoute de la soude à une solution : un précipité vert apparaît. Quel ion contient-elle ?", choix: ["Cu²⁺", "Fe²⁺", "Fe³⁺", "Cl⁻"], bonne: 1, explication: "Avec la soude, le vert signe les ions fer II Fe²⁺. Le bleu correspond à Cu²⁺, la rouille à Fe³⁺. Cl⁻ se teste au nitrate d'argent." },
          ],
        },
        {
          titre: "Tester l'eau et le dioxyde de carbone",
          blocs: [
            { t: "tableau", titre: "Tests de quelques molécules", entetes: ["Espèce recherchée", "Test", "Résultat positif"], lignes: [["dioxyde de carbone CO₂", "buller dans l'**eau de chaux**", "l'eau de chaux se **trouble**"], ["eau H₂O", "**sulfate de cuivre anhydre** (blanc)", "il devient **bleu**"], ["dihydrogène H₂", "flamme à l'ouverture du tube", "petite détonation (« aboiement »)"], ["dioxygène O₂", "bûchette incandescente", "elle se **rallume**"]] },
            { t: "exemple", titre: "Ton souffle contient du CO₂", md: "Souffle doucement avec une paille dans un tube d'eau de chaux limpide : au bout de quelques secondes, elle devient trouble et blanchâtre. ==L'air que tu expires contient du dioxyde de carbone.==" },
          ],
        },
        {
          titre: "Écrire et équilibrer une équation",
          blocs: [
            { t: "definition", terme: "Équation de réaction", md: "L'écriture symbolique d'une transformation chimique : **réactifs → produits**. Les réactifs, consommés, sont à gauche de la flèche ; les produits, formés, à droite." },
            { t: "propriete", titre: "Les atomes se conservent", md: "Pendant une transformation, les atomes se **réarrangent** : aucun n'apparaît, aucun ne disparaît. Une équation est **équilibrée** quand on trouve ==le même nombre de chaque sorte d'atome== des deux côtés. On l'ajuste avec des **coefficients** placés devant les formules." },
            { t: "exemple", titre: "Équilibrer la combustion du méthane", etapes: ["On écrit : CH₄ + O₂ → CO₂ + H₂O.", "Hydrogène : 4 H à gauche, 2 H à droite. On place 2 devant H₂O : CH₄ + O₂ → CO₂ + 2 H₂O.", "Oxygène : à droite, 2 (dans CO₂) + 2 (dans 2 H₂O) = 4 O. À gauche, il faut donc 2 O₂.", "Résultat : **CH₄ + 2 O₂ → CO₂ + 2 H₂O**. On vérifie : 1 C, 4 H, 4 O de chaque côté."] },
            { t: "tableau", titre: "Bilan des atomes : CH₄ + 2 O₂ → CO₂ + 2 H₂O", entetes: ["Atome", "Réactifs", "Produits"], lignes: [["C", "1", "1"], ["H", "4", "2 × 2 = 4"], ["O", "2 × 2 = 4", "2 + 2 = 4"]] },
            { t: "attention", md: "On ne change **jamais** une formule pour équilibrer : transformer H₂O en H₂O₂, c'est inventer une autre molécule ! On ajoute seulement des coefficients.\n\nNe confonds pas coefficient et indice : **3 Fe₂O₃**, c'est 3 groupes de Fe₂O₃, donc 6 atomes de fer et **3 × 3 = 9 atomes d'oxygène**." },
            { t: "verifie", q: "Dans 2 H₂ + O₂ → 2 H₂O, que peut-on dire des molécules ?", choix: ["Il y en a autant avant qu'après", "Il y a 3 molécules avant et 2 après", "Il y a plus de molécules après"], bonne: 1, explication: "2 + 1 = 3 molécules de réactifs, 2 molécules de produits. Ce sont les **atomes** qui se conservent (4 H et 2 O de chaque côté), pas forcément les molécules." },
          ],
        },
        {
          titre: "La masse se conserve",
          blocs: [
            { t: "citation", texte: "Rien ne se crée, ni dans les opérations de l'art, ni dans celles de la nature, et l'on peut poser en principe que, dans toute opération, il y a une égale quantité de matière avant et après l'opération.", auteur: "Antoine Lavoisier", source: "Traité élémentaire de chimie, 1789" },
            { t: "propriete", titre: "Loi de Lavoisier", md: "Puisque les atomes se conservent, ==la masse totale des réactifs consommés est égale à la masse totale des produits formés==. Dans un récipient fermé, la balance affiche la même valeur avant et après la réaction." },
            { t: "exemple", titre: "Fer et soufre", md: "On chauffe 7 g de fer avec 4 g de soufre et tout réagit. Masse de sulfure de fer obtenue : 7 + 4 = **11 g**." },
          ],
        },
        {
          titre: "Les métaux s'oxydent, les piles fonctionnent",
          blocs: [
            { t: "texte", md: "Laisse un clou dehors : il se couvre de **rouille**. Le fer réagit avec le **dioxygène** de l'air, en présence d'**eau** : c'est une **oxydation**. L'aluminium et le cuivre s'oxydent aussi, mais leur couche d'oxyde les protège. L'**or** et le **platine** ne s'oxydent pratiquement pas : c'est pour cela qu'un bijou en or brille encore après des siècles." },
            { t: "schema", titre: "Une pile cuivre-zinc", legende: "Une réaction chimique entre les deux métaux et la solution fournit le courant.", svg: `<svg viewBox="0 0 400 240"><path class="trait" d="M120 90 L120 200 L280 200 L280 90"/><rect class="aplat" x="121" y="120" width="158" height="79"/><rect class="aplat-papier" x="150" y="70" width="12" height="115"/><rect class="trait" x="150" y="70" width="12" height="115"/><rect class="aplat-fort" x="238" y="70" width="12" height="115"/><rect class="trait" x="238" y="70" width="12" height="115"/><path class="trait" d="M156 70 L156 30 L188 30"/><path class="trait" d="M244 70 L244 30 L212 30"/><circle class="aplat-papier" cx="200" cy="30" r="12"/><circle class="trait" cx="200" cy="30" r="12"/><path class="trait-fin" d="M192 22 L208 38 M208 22 L192 38"/><text class="texte" x="200" y="12" text-anchor="middle">lampe</text><text class="texte" x="144" y="82" text-anchor="end">zinc</text><text class="texte" x="256" y="82">cuivre</text><text class="texte-petit" x="200" y="180" text-anchor="middle">solution ionique</text><text class="texte-main" x="200" y="230" text-anchor="middle">énergie chimique → énergie électrique</text></svg>` },
            { t: "propriete", titre: "Le principe d'une pile", md: "Une pile convertit de l'**énergie chimique** en **énergie électrique** grâce à une réaction entre **deux métaux différents** et une **solution ionique**. Quand les réactifs sont épuisés, la pile est « usée »." },
          ],
        },
      ],
      bilan: "Un précipité coloré trahit un ion ; l'eau de chaux trahit le CO₂. Dans une réaction, les atomes se réarrangent sans disparaître : l'équation s'équilibre et la masse se conserve.",
    },
    "3e-physique-chimie-04-masse-volumique": {
      accroche: "Plonge deux canettes de soda fermées dans un grand bac d'eau : une canette classique et une canette « zéro sucre ». La première coule, la seconde flotte ! Elles ont pourtant la même taille. Le secret tient en deux mots : masse volumique.",
      objectifs: [
        "Calculer une masse volumique avec ρ = m / V et convertir ses unités",
        "Identifier une espèce chimique grâce à sa masse volumique",
        "Prévoir si un objet flotte ou coule",
        "Mesurer la masse volumique d'un solide",
      ],
      sections: [
        {
          titre: "Masse et volume : deux grandeurs différentes",
          blocs: [
            { t: "texte", md: "Qu'est-ce qui est le plus lourd : un kilo de plumes ou un kilo de plomb ? Ni l'un ni l'autre : ils ont la même **masse**. Mais les plumes occupent un **volume** énorme. Pour comparer des matériaux, il faut savoir ==quelle masse tient dans un même volume==." },
            { t: "definition", terme: "Masse volumique ρ", md: "La masse d'une unité de volume d'une substance : **ρ = m / V**. On la note ρ (la lettre grecque « rhô »)." },
            { t: "tableau", titre: "Grandeurs et unités", entetes: ["Grandeur", "Symbole", "Unités courantes", "Instrument"], lignes: [["masse", "m", "g, kg", "balance"], ["volume", "V", "cm³, mL, L, m³", "éprouvette graduée"], ["masse volumique", "ρ", "g/cm³ (ou g/mL), kg/m³", "calcul : ρ = m / V"]] },
            { t: "attention", md: "« Le fer est plus lourd que le bois » est faux tel quel : une grosse poutre pèse plus qu'un petit clou ! Il faut comparer **à volume égal**. La phrase correcte : ==le fer a une masse volumique plus grande que le bois==." },
          ],
        },
        {
          titre: "Calculer et convertir",
          blocs: [
            { t: "propriete", titre: "Formule et conversion", md: "**ρ = m / V**\n\nUnités : **g/cm³** (1 g/cm³ = 1 g/mL) ou **kg/m³**, l'unité du Système international.\n\n==1 g/cm³ = 1 000 kg/m³== : un cube de 1 m³ contient 1 000 000 cm³, donc 1 000 000 g, soit 1 000 kg. L'eau liquide a une masse volumique de **1 g/cm³ = 1 000 kg/m³**." },
            { t: "exemple", titre: "Un cube de métal mystère", etapes: ["Données : m = 54 g ; V = 20 cm³.", "Formule : ρ = m / V.", "Calcul : ρ = 54 / 20 = **2,7 g/cm³**.", "Dans une table, 2,7 g/cm³ est la masse volumique de l'**aluminium**."] },
            { t: "schema", titre: "Le triangle pour isoler une grandeur", legende: "Cache avec ton doigt la grandeur cherchée : il reste la formule.", svg: `<svg viewBox="0 0 400 220"><path class="aplat" d="M160 20 L270 200 L50 200 Z"/><path class="trait" d="M160 20 L270 200 L50 200 Z"/><line class="trait" x1="106" y1="110" x2="214" y2="110"/><line class="trait" x1="160" y1="110" x2="160" y2="200"/><text class="texte-main" x="160" y="90" text-anchor="middle">m</text><text class="texte-main" x="125" y="172" text-anchor="middle">ρ</text><text class="texte-main" x="195" y="172" text-anchor="middle">V</text><text class="texte-petit" x="160" y="158" text-anchor="middle">×</text><text class="texte" x="290" y="80">m = ρ × V</text><text class="texte" x="290" y="120">ρ = m ÷ V</text><text class="texte" x="290" y="160">V = m ÷ ρ</text></svg>` },
            { t: "etapes", titre: "Méthode : trouver un volume", items: [{ titre: "Écrire la formule", md: "ρ = m / V" }, { titre: "Isoler V", md: "V = m / ρ" }, { titre: "Remplacer", md: "Bloc de fer : m = 158 g et ρ = 7,9 g/cm³, donc V = 158 / 7,9." }, { titre: "Conclure avec l'unité", md: "V = **20 cm³** (des g divisés par des g/cm³ donnent des cm³)." }] },
            { t: "verifie", q: "Combien vaut 1 g/cm³ en kg/m³ ?", choix: ["1 kg/m³", "100 kg/m³", "1 000 kg/m³", "1 000 000 kg/m³"], bonne: 2, explication: "1 m³ = 1 000 000 cm³ : il contient donc 1 000 000 g, soit 1 000 kg. Donc 1 g/cm³ = 1 000 kg/m³." },
          ],
        },
        {
          titre: "Identifier une espèce chimique",
          blocs: [
            { t: "propriete", titre: "Une propriété caractéristique", md: "La masse volumique **ne dépend pas de la taille** de l'échantillon : une bille de 1 cm³ et un lingot de 1 dm³ du même métal ont la même ρ. Elle est propre à chaque substance : elle permet donc de l'==identifier==." },
            { t: "graphique", type: "barres", titre: "Masses volumiques de quelques substances", unite: "g/cm³", donnees: [{ label: "éthanol", valeur: 0.79 }, { label: "huile", valeur: 0.92 }, { label: "eau", valeur: 1 }, { label: "glycérine", valeur: 1.26 }, { label: "aluminium", valeur: 2.7 }, { label: "fer", valeur: 7.9 }, { label: "plomb", valeur: 11.3 }, { label: "or", valeur: 19.3 }] },
            { t: "exemple", titre: "Quel est ce liquide ?", md: "50 mL d'un liquide ont une masse de 46 g. ρ = 46 / 50 = **0,92 g/mL**. D'après le graphique, c'est de l'**huile**." },
            { t: "definition", terme: "Corps pur et mélange", md: "Un **corps pur** ne contient qu'**une seule espèce chimique** (eau distillée). Un **mélange** en contient plusieurs (eau du robinet, avec ses sels dissous). Les propriétés caractéristiques, comme la masse volumique ou la température d'ébullition, servent à reconnaître un corps pur." },
          ],
        },
        {
          titre: "Flotter ou couler",
          blocs: [
            { t: "propriete", titre: "La règle de flottaison", md: "Un objet **flotte** dans un liquide si sa masse volumique est ==plus petite== que celle du liquide. Il **coule** si elle est plus grande." },
            { t: "schema", titre: "Trois objets dans l'eau (ρ = 1 g/cm³)", svg: `<svg viewBox="0 0 400 240"><rect class="aplat" x="61" y="80" width="198" height="139"/><path class="trait" d="M60 40 L60 220 L260 220 L260 40"/><line class="pointille" x1="60" y1="80" x2="260" y2="80"/><rect class="aplat-papier" x="80" y="61" width="40" height="25"/><rect class="trait" x="80" y="61" width="40" height="25"/><rect class="aplat-papier" x="140" y="76" width="40" height="50"/><rect class="trait-fin" x="140" y="76" width="40" height="50"/><circle class="aplat-fort" cx="220" cy="206" r="12"/><circle class="trait" cx="220" cy="206" r="12"/><text class="texte-petit" x="160" y="180" text-anchor="middle">eau : 1 g/cm³</text><line class="trait-fin" x1="120" y1="66" x2="270" y2="60"/><text class="texte" x="274" y="58">liège 0,24</text><text class="texte-petit" x="274" y="72">flotte</text><line class="trait-fin" x1="180" y1="110" x2="270" y2="112"/><text class="texte" x="274" y="110">glace 0,92</text><text class="texte-petit" x="274" y="124">flotte à peine</text><line class="trait-fin" x1="232" y1="204" x2="270" y2="200"/><text class="texte" x="274" y="198">fer 7,9</text><text class="texte-petit" x="274" y="212">coule</text></svg>`, legende: "Plus ρ est proche de celle de l'eau, plus la partie immergée est grande." },
            { t: "savais-tu", md: "La glace (0,92 g/cm³) flotte, mais tout juste : environ ==90 % d'un iceberg est caché sous l'eau==. C'est ce qui a rendu l'iceberg du Titanic si dangereux." },
            { t: "verifie", q: "Deux cubes ont le même volume : l'un en aluminium (2,7 g/cm³), l'autre en fer (7,9 g/cm³). Lequel a la plus grande masse ?", choix: ["L'aluminium", "Le fer", "Ils ont la même masse"], bonne: 1, explication: "À volume égal, la masse est proportionnelle à ρ : m = ρ × V. Le fer, de plus grande masse volumique, est presque 3 fois plus lourd." },
          ],
        },
        {
          titre: "Mesurer la masse volumique d'un solide",
          blocs: [
            { t: "etapes", titre: "Protocole", items: [{ titre: "Peser", md: "Poser le solide sur la balance : on obtient **m**." }, { titre: "Premier volume", md: "Verser de l'eau dans une éprouvette graduée et lire **V₁**." }, { titre: "Immerger", md: "Plonger délicatement le solide (incliner l'éprouvette) et lire **V₂**." }, { titre: "Volume du solide", md: "**V = V₂ − V₁** : c'est le volume d'eau déplacé." }, { titre: "Calculer", md: "**ρ = m / V**, en g et en cm³." }] },
            { t: "schema", titre: "Mesurer un volume par déplacement d'eau", svg: `<svg viewBox="0 0 400 250"><rect class="aplat" x="81" y="110" width="38" height="100"/><path class="trait" d="M80 30 L80 210 L120 210 L120 30"/><rect class="trait" x="68" y="210" width="64" height="8"/><path class="trait-fin" d="M81 190 L89 190 M81 170 L89 170 M81 150 L89 150 M81 130 L89 130 M81 110 L89 110 M81 90 L89 90 M81 70 L89 70 M81 50 L89 50"/><text class="texte" x="128" y="114">V₁ = 50 mL</text><path class="trait-fin" d="M150 150 L220 150" marker-end="url(#fl)"/><text class="texte-petit" x="185" y="142" text-anchor="middle">on plonge</text><text class="texte-petit" x="185" y="166" text-anchor="middle">le caillou</text><rect class="aplat" x="241" y="86" width="38" height="124"/><path class="trait" d="M240 30 L240 210 L280 210 L280 30"/><rect class="trait" x="228" y="210" width="64" height="8"/><path class="trait-fin" d="M241 190 L249 190 M241 170 L249 170 M241 150 L249 150 M241 130 L249 130 M241 110 L249 110 M241 90 L249 90 M241 70 L249 70 M241 50 L249 50"/><path class="aplat-fort" d="M250 205 L256 188 L270 186 L275 200 L266 208 Z"/><text class="texte" x="288" y="90">V₂ = 62 mL</text><text class="texte-main" x="200" y="242" text-anchor="middle">V = V₂ − V₁ = 12 mL = 12 cm³</text></svg>` },
            { t: "exemple", titre: "Le caillou de 30 g", md: "V = 62 − 50 = 12 mL = 12 cm³ (car **1 mL = 1 cm³**). ρ = 30 / 12 = **2,5 g/cm³** : plus que l'eau, le caillou coule." },
          ],
        },
      ],
      bilan: "ρ = m / V : la masse volumique ne dépend pas de la taille de l'échantillon, elle identifie une substance et décide si un objet flotte ou coule.",
    },
    "3e-physique-chimie-05-gravitation-poids-masse": {
      accroche: "En 1971, sur la Lune, l'astronaute David Scott lâche en même temps un marteau et une plume de faucon. Sur Terre, la plume flotterait doucement. Là-haut, sans air pour la freiner, elle touche le sol exactement en même temps que le marteau ! Ce jour-là, la gravitation s'est montrée sans déguisement.",
      objectifs: [
        "Décrire l'interaction gravitationnelle et son rôle dans le système solaire",
        "Distinguer poids et masse : unités et instruments",
        "Calculer un poids avec P = m × g, sur Terre et sur la Lune",
        "Représenter une force par une flèche",
      ],
      sections: [
        {
          titre: "Tout ce qui a une masse s'attire",
          blocs: [
            { t: "definition", terme: "Interaction gravitationnelle", md: "L'attraction qui s'exerce **à distance** entre deux corps ayant une **masse**. Chacun attire l'autre, avec la ==même force==, dans des sens opposés." },
            { t: "schema", titre: "L'interaction Terre-Lune", legende: "F Terre/Lune : force exercée par la Terre sur la Lune. Sans elle, la Lune filerait tout droit, dans la direction de sa vitesse.", svg: `<svg viewBox="0 0 400 200"><path class="pointille" d="M307 199 A240 240 0 0 0 307 1"/><circle class="trait c-bleu" cx="90" cy="100" r="50"/><circle class="trait c-gris" cx="330" cy="100" r="16"/><line class="pointille" x1="140" y1="100" x2="314" y2="100"/><line class="trait" x1="90" y1="100" x2="170" y2="100" marker-end="url(#fl-p)"/><line class="trait" x1="330" y1="100" x2="250" y2="100" marker-end="url(#fl-p)"/><text class="texte-pigment" x="176" y="92">F Lune/Terre</text><text class="texte-pigment" x="310" y="120" text-anchor="end">F Terre/Lune</text><line class="trait-fin" x1="342" y1="88" x2="342" y2="40" marker-end="url(#fl)"/><text class="texte-petit" x="350" y="52">vitesse</text><text class="texte" x="90" y="172" text-anchor="middle">Terre</text><text class="texte" x="330" y="136" text-anchor="middle">Lune</text><text class="texte-main" x="200" y="190" text-anchor="middle">même valeur, sens opposés</text></svg>` },
            { t: "propriete", titre: "Ce qui renforce l'attraction", md: "L'interaction gravitationnelle est d'autant plus forte que les **masses sont grandes** et que la **distance est petite**." },
            { t: "texte", md: "C'est elle qui organise le **système solaire** : le Soleil retient les planètes sur leurs orbites, la Terre retient la Lune et les satellites artificiels. La Lune *tombe* en permanence vers la Terre, mais sa vitesse la fait avancer sur le côté : elle tourne autour sans jamais s'écraser." },
            { t: "astuce", md: "Les huit planètes, de la plus proche à la plus éloignée du Soleil : **Me**rcure, **V**énus, **T**erre, **M**ars, **J**upiter, **S**aturne, **U**ranus, **N**eptune. Retiens : « **Me V**oici **T**oute **M**ouillée, **J**'ai **S**uivi **U**n **N**uage »." },
            { t: "verifie", q: "Pourquoi la Lune tourne-t-elle autour de la Terre au lieu de partir en ligne droite ?", choix: ["Parce que la Terre l'attire", "Parce qu'il n'y a pas d'air dans l'espace", "Parce qu'elle est aimantée", "Parce que le Soleil la pousse"], bonne: 0, explication: "L'attraction gravitationnelle de la Terre courbe sans cesse la trajectoire de la Lune. Sans elle, la Lune continuerait tout droit." },
          ],
        },
        {
          titre: "Masse et poids : ne pas confondre",
          blocs: [
            { t: "tableau", titre: "Deux grandeurs bien différentes", entetes: ["", "Masse m", "Poids P"], lignes: [["Ce que c'est", "la quantité de matière", "la force d'attraction exercée par la Terre (ou un astre)"], ["Unité", "**kilogramme (kg)**", "**newton (N)**"], ["Instrument", "**balance**", "**dynamomètre**"], ["Dépend du lieu ?", "**non** : la même partout", "**oui** : plus faible sur la Lune"]] },
            { t: "attention", md: "Dans la vie courante, on dit « je pèse 50 kg ». En physique, c'est ta **masse** qui vaut 50 kg ; ton **poids**, lui, vaut environ 490 N. Une masse ne diminue jamais quand on va sur la Lune !" },
          ],
        },
        {
          titre: "Calculer un poids : P = m × g",
          blocs: [
            { t: "propriete", titre: "Relation entre poids et masse", md: "**P = m × g**\nP : poids en **newtons (N)** ; m : masse en **kilogrammes (kg)** ; g : intensité de pesanteur en **N/kg**.\n\nSur Terre, ==g ≈ 9,8 N/kg== : un objet de 1 kg pèse environ 10 N. Sur la Lune, g ≈ 1,6 N/kg, environ 6 fois moins. En un lieu donné, le poids est **proportionnel** à la masse." },
            { t: "exemple", titre: "Un astronaute de 80 kg", etapes: ["Sur Terre : P = 80 × 9,8 = **784 N**.", "Sur la Lune : P = 80 × 1,6 = **128 N**, environ 6 fois moins.", "Sa masse, elle, reste **80 kg** partout."] },
            { t: "graphique", type: "barres", titre: "Poids d'un astronaute de 80 kg selon l'astre", unite: "N", donnees: [{ label: "Lune", valeur: 128 }, { label: "Mars", valeur: 296 }, { label: "Terre", valeur: 784 }, { label: "Jupiter", valeur: 1984 }] },
            { t: "exemple", titre: "Retrouver une masse", md: "Un objet pèse 49 N sur Terre. On isole m : **m = P / g** = 49 / 9,8 = **5 kg**." },
            { t: "verifie", q: "Quel est, environ, le poids d'un sac de 2 kg sur Terre ?", choix: ["2 N", "20 N", "2 kg", "200 N"], bonne: 1, explication: "P = m × g = 2 × 9,8 ≈ 20 N. « 2 kg » est la masse, pas le poids : un poids s'exprime en newtons." },
          ],
        },
        {
          titre: "Représenter une force par une flèche",
          blocs: [
            { t: "liste", titre: "Les quatre caractéristiques d'une force", items: ["son **point d'application** : là où commence la flèche ;", "sa **direction** : la droite qui porte la flèche ;", "son **sens** : là où pointe la flèche ;", "sa **valeur** (en N) : la **longueur** de la flèche, proportionnelle à la valeur selon une échelle."] },
            { t: "schema", titre: "Le poids d'un sac de 2 kg", legende: "Le poids s'applique au centre de gravité G. Il est vertical et dirigé vers le centre de la Terre.", svg: `<svg viewBox="0 0 400 240"><text class="texte" x="120" y="30" text-anchor="middle">sac de 2 kg</text><rect class="aplat" x="80" y="40" width="80" height="76" rx="10"/><rect class="trait" x="80" y="40" width="80" height="76" rx="10"/><circle class="aplat-fort" cx="120" cy="78" r="3.5"/><text class="texte" x="108" y="74" text-anchor="end">G</text><line class="trait" x1="120" y1="78" x2="120" y2="158" marker-end="url(#fl-p)"/><path class="trait-fin" d="M115 98 L125 98 M115 118 L125 118 M115 138 L125 138"/><text class="texte-pigment" x="132" y="140">P ≈ 20 N</text><line class="pointille" x1="120" y1="164" x2="120" y2="222"/><text class="texte-petit" x="128" y="220">vers le centre de la Terre</text><line class="trait" x1="20" y1="200" x2="40" y2="200"/><path class="trait-fin" d="M20 195 L20 205 M40 195 L40 205"/><text class="texte-petit" x="30" y="190" text-anchor="middle">5 N</text><text class="texte-petit" x="250" y="60">point d'application : G</text><text class="texte-petit" x="250" y="84">direction : verticale</text><text class="texte-petit" x="250" y="108">sens : vers le bas</text><text class="texte-petit" x="250" y="132">valeur : 20 N</text><text class="texte-petit" x="250" y="146">(4 segments de 5 N)</text></svg>` },
            { t: "verifie", q: "Que représente la longueur de la flèche d'une force ?", choix: ["Sa direction", "Sa valeur", "Son point d'application", "La masse de l'objet"], bonne: 1, explication: "La longueur est proportionnelle à la valeur de la force, selon l'échelle choisie : ici, 1 segment pour 5 N." },
          ],
        },
      ],
      bilan: "La masse (kg, balance) ne change jamais ; le poids (N, dynamomètre) dépend de l'astre : P = m × g. Et tout ce qui a une masse s'attire.",
    },
    "3e-physique-chimie-06-mouvement-vitesse": {
      accroche: "Percuter un mur à 50 km/h, c'est comme tomber du 3e étage d'un immeuble. À 100 km/h, ce n'est pas du 6e étage… mais du 13e ! Pourquoi doubler la vitesse rend-il le choc quatre fois plus violent ? La physique de la route va te l'expliquer.",
      objectifs: [
        "Calculer une vitesse moyenne et convertir km/h et m/s",
        "Décrire un mouvement : uniforme, accéléré, ralenti, relatif",
        "Exploiter la distance d'arrêt et l'énergie cinétique pour la sécurité routière",
        "Relier les interactions aux changements de mouvement",
      ],
      sections: [
        {
          titre: "Calculer une vitesse moyenne",
          blocs: [
            { t: "propriete", titre: "Vitesse moyenne", md: "**v = d / t**\nd : distance parcourue ; t : durée du trajet.\nUnités : **m/s** (d en m, t en s) ou **km/h** (d en km, t en h).\n\nConversion : ==m/s × 3,6 → km/h== et ==km/h ÷ 3,6 → m/s==." },
            { t: "texte", md: "Pourquoi 3,6 ? Rouler à 1 m/s, c'est parcourir 1 m chaque seconde, donc 3 600 m en une heure (3 600 s), soit **3,6 km/h**." },
            { t: "exemple", titre: "Le train", md: "Un train parcourt 150 km en 2 h : v = 150 / 2 = **75 km/h**, soit 75 / 3,6 ≈ 20,8 m/s." },
            { t: "tableau", titre: "Quelques correspondances", entetes: ["km/h", "36", "54", "72", "90", "108"], lignes: [["m/s", "10", "15", "20", "25", "30"]] },
            { t: "etapes", titre: "Isoler une grandeur dans v = d / t", items: [{ titre: "Vitesse", md: "v = d / t" }, { titre: "Distance", md: "On multiplie : **d = v × t**. À 20 m/s pendant 1 s : d = 20 m." }, { titre: "Durée", md: "On divise : **t = d / v**. 300 km à 100 km/h : t = 3 h." }] },
            { t: "verifie", q: "Convertis 108 km/h en m/s.", choix: ["30 m/s", "388,8 m/s", "10,8 m/s", "108 m/s"], bonne: 0, explication: "De km/h vers m/s, on divise par 3,6 : 108 / 3,6 = 30 m/s. Multiplier donnerait une vitesse absurde de 388,8 m/s." },
          ],
        },
        {
          titre: "Décrire un mouvement",
          blocs: [
            { t: "definition", terme: "Uniforme, accéléré, ralenti", md: "Un mouvement est **uniforme** si la vitesse est **constante**, **accéléré** si elle **augmente**, **ralenti** si elle **diminue**." },
            { t: "schema", titre: "Trois chronophotographies (une image toutes les 0,5 s)", legende: "Même durée entre deux images : plus l'écart est grand, plus l'objet va vite.", svg: `<svg viewBox="0 0 400 200"><line class="trait-fin" x1="110" y1="14" x2="330" y2="14" marker-end="url(#fl)"/><text class="texte-petit" x="110" y="28">sens du mouvement</text><text class="texte" x="10" y="64">uniforme</text><text class="texte-petit" x="10" y="80">écarts égaux</text><circle class="aplat-fort" cx="110" cy="60" r="5"/><circle class="aplat-fort" cx="155" cy="60" r="5"/><circle class="aplat-fort" cx="200" cy="60" r="5"/><circle class="aplat-fort" cx="245" cy="60" r="5"/><circle class="aplat-fort" cx="290" cy="60" r="5"/><circle class="aplat-fort" cx="335" cy="60" r="5"/><text class="texte" x="10" y="119">accéléré</text><text class="texte-petit" x="10" y="135">écarts croissants</text><circle class="aplat-fort" cx="110" cy="115" r="5"/><circle class="aplat-fort" cx="120" cy="115" r="5"/><circle class="aplat-fort" cx="140" cy="115" r="5"/><circle class="aplat-fort" cx="170" cy="115" r="5"/><circle class="aplat-fort" cx="210" cy="115" r="5"/><circle class="aplat-fort" cx="260" cy="115" r="5"/><circle class="aplat-fort" cx="320" cy="115" r="5"/><text class="texte" x="10" y="174">ralenti</text><text class="texte-petit" x="10" y="190">écarts décroissants</text><circle class="aplat-fort" cx="130" cy="170" r="5"/><circle class="aplat-fort" cx="190" cy="170" r="5"/><circle class="aplat-fort" cx="240" cy="170" r="5"/><circle class="aplat-fort" cx="280" cy="170" r="5"/><circle class="aplat-fort" cx="310" cy="170" r="5"/><circle class="aplat-fort" cx="330" cy="170" r="5"/><circle class="aplat-fort" cx="340" cy="170" r="5"/></svg>` },
            { t: "propriete", titre: "Le mouvement est relatif", md: "Un mouvement se décrit ==par rapport à un référentiel== (un objet de référence). Une passagère assise dans un train est **immobile par rapport au train** (et à son siège), mais **en mouvement par rapport au quai**." },
          ],
        },
        {
          titre: "La distance d'arrêt",
          blocs: [
            { t: "propriete", titre: "Deux distances qui s'ajoutent", md: "**Distance d'arrêt = distance de réaction + distance de freinage**\n\n• **Réaction** : le temps de voir le danger et d'appuyer sur le frein (environ **1 s**). La voiture roule encore à pleine vitesse !\n• **Freinage** : la distance parcourue pendant que les freins ralentissent la voiture." },
            { t: "schema", titre: "De l'obstacle vu à l'arrêt complet", svg: `<svg viewBox="0 0 400 200"><line class="trait" x1="5" y1="120" x2="395" y2="120"/><rect class="aplat-fort" x="12" y="98" width="44" height="16" rx="5"/><circle class="trait" cx="22" cy="116" r="5"/><circle class="trait" cx="46" cy="116" r="5"/><line class="pointille" x1="60" y1="70" x2="60" y2="148"/><line class="pointille" x1="190" y1="70" x2="190" y2="148"/><line class="pointille" x1="370" y1="70" x2="370" y2="148"/><text class="texte-petit" x="60" y="62" text-anchor="middle">il voit le danger</text><text class="texte-petit" x="190" y="62" text-anchor="middle">il freine</text><text class="texte-petit" x="370" y="62" text-anchor="middle">arrêt</text><line class="trait" x1="60" y1="140" x2="190" y2="140"/><line class="trait" x1="190" y1="140" x2="370" y2="140"/><text class="texte" x="125" y="158" text-anchor="middle">réaction</text><text class="texte" x="280" y="158" text-anchor="middle">freinage</text><line class="trait-fin" x1="60" y1="176" x2="370" y2="176"/><path class="trait-fin" d="M60 171 L60 181 M370 171 L370 181"/><text class="texte-pigment" x="215" y="194" text-anchor="middle">distance d'arrêt</text></svg>` },
            { t: "texte", md: "La distance de réaction est **proportionnelle** à la vitesse : à 20 m/s, en 1 s, la voiture parcourt 20 m avant même de freiner. La distance de freinage, elle, grandit beaucoup plus vite : quand la vitesse **double**, elle est ==multipliée par 4==." },
            { t: "graphique", type: "courbe", titre: "Distance de freinage sur route sèche", unite: "m", donnees: [{ label: "30 km/h", valeur: 5 }, { label: "50 km/h", valeur: 14 }, { label: "70 km/h", valeur: 27 }, { label: "90 km/h", valeur: 45 }, { label: "110 km/h", valeur: 68 }, { label: "130 km/h", valeur: 95 }] },
            { t: "attention", md: "« Deux fois plus vite, deux fois plus loin pour freiner » : **faux** ! La courbe n'est pas une droite. La fatigue, l'alcool ou le téléphone allongent la réaction ; une route mouillée ou des pneus usés allongent le freinage." },
          ],
        },
        {
          titre: "L'énergie cinétique",
          blocs: [
            { t: "propriete", titre: "Énergie de mouvement", md: "**Ec = ½ × m × v²**\nEc en **joules (J)** ; m en **kg** ; v en **m/s**.\n\nLa vitesse est **au carré** : si v double, Ec est ==multipliée par 4==. Pour s'arrêter, les freins doivent dissiper toute cette énergie en chaleur : voilà pourquoi la distance de freinage, elle aussi, est multipliée par 4." },
            { t: "exemple", titre: "Une voiture de 1 000 kg à 90 km/h", etapes: ["Convertir : 90 / 3,6 = 25 m/s.", "Ec = ½ × 1 000 × 25² = ½ × 1 000 × 625.", "Ec = **312 500 J**, soit 312,5 kJ."] },
            { t: "graphique", type: "courbe", titre: "Énergie cinétique d'une voiture de 1 000 kg", unite: "kJ", donnees: [{ label: "0 m/s", valeur: 0 }, { label: "5 m/s", valeur: 12.5 }, { label: "10 m/s", valeur: 50 }, { label: "15 m/s", valeur: 112.5 }, { label: "20 m/s", valeur: 200 }, { label: "25 m/s", valeur: 312.5 }, { label: "30 m/s", valeur: 450 }] },
            { t: "verifie", q: "Si la vitesse d'une voiture double, son énergie cinétique est…", choix: ["multipliée par 2", "multipliée par 4", "inchangée", "divisée par 2"], bonne: 1, explication: "Ec dépend de v² : (2v)² = 4v². À 10 m/s, Ec = 50 kJ ; à 20 m/s, Ec = 200 kJ, quatre fois plus." },
          ],
        },
        {
          titre: "Ce qui change un mouvement",
          blocs: [
            { t: "propriete", titre: "Principe d'inertie", md: "Un objet ne change de mouvement (vitesse ou direction) que s'il subit une **interaction**. Sans aucune interaction, ou si elles se compensent, il reste immobile ou ==continue tout droit à vitesse constante==." },
            { t: "exemple", titre: "Le palet de hockey", md: "Sur une glace parfaite, sans frottement, un palet lancé glisserait tout droit sans jamais ralentir. Dans la réalité, il finit par s'arrêter : les **frottements** sont une interaction qui le freine." },
            { t: "savais-tu", md: "Lors d'un choc, la voiture s'arrête brutalement, mais ton corps, lui, continue d'avancer à la même vitesse : c'est l'inertie. La **ceinture de sécurité** est l'interaction qui te retient." },
          ],
        },
      ],
      bilan: "v = d / t, et ÷ 3,6 pour passer en m/s. Distance d'arrêt = réaction + freinage, et comme Ec = ½ m v², doubler la vitesse multiplie l'énergie et le freinage par 4.",
    },
    "3e-physique-chimie-07-energie-conversions": {
      accroche: "Lâche une balle de tennis : elle rebondit, mais un peu moins haut à chaque fois, puis finit par s'arrêter. Son énergie a-t-elle disparu ? Pas du tout ! Si tu avais un thermomètre assez précis, tu verrais que la balle et le sol se sont légèrement réchauffés. L'énergie ne disparaît jamais : elle change de forme.",
      objectifs: [
        "Reconnaître les formes d'énergie et leurs unités (J, kWh)",
        "Construire la chaîne énergétique d'une centrale électrique",
        "Appliquer la conservation de l'énergie et calculer un rendement",
        "Distinguer sources d'énergie renouvelables et non renouvelables",
      ],
      sections: [
        {
          titre: "Les formes de l'énergie",
          blocs: [
            { t: "texte", md: "Un objet possède de l'**énergie** s'il est capable de produire un mouvement, de chauffer, d'éclairer… L'énergie se présente sous plusieurs formes." },
            { t: "tableau", titre: "Les formes d'énergie", entetes: ["Forme", "Liée à…", "Exemple"], lignes: [["**cinétique**", "la vitesse", "une voiture qui roule"], ["**potentielle de position**", "l'altitude", "l'eau retenue derrière un barrage"], ["**thermique**", "la température", "l'eau chaude d'un radiateur"], ["**chimique**", "les réactions chimiques", "aliments, carburants, piles"], ["**électrique**", "le courant", "une prise de courant"], ["**lumineuse**", "la lumière", "les rayons du Soleil"], ["**nucléaire**", "les noyaux des atomes", "l'uranium d'une centrale"]] },
            { t: "propriete", titre: "Unités de l'énergie", md: "L'unité du Système international est le **joule (J)**. Pour l'électricité, on utilise aussi le **kilowattheure (kWh)** :\n\n==1 kWh = 3 600 000 J = 3,6 MJ==\n\nC'est l'énergie fournie par un appareil de 1 000 W pendant 1 h, soit 3 600 s : 1 000 × 3 600 = 3 600 000 J." },
            { t: "verifie", q: "Combien de joules valent 1 kWh ?", choix: ["1 000 J", "3 600 J", "3 600 000 J", "60 000 J"], bonne: 2, explication: "1 kWh = 1 000 W × 3 600 s = 3 600 000 J, soit 3,6 MJ." },
          ],
        },
        {
          titre: "Convertir l'énergie : la chaîne énergétique",
          blocs: [
            { t: "definition", terme: "Convertisseur", md: "Un objet qui **transforme** une forme d'énergie en une autre : un moteur (électrique → mécanique), une lampe (électrique → lumineuse), un panneau solaire (lumineuse → électrique)." },
            { t: "texte", md: "Une **chaîne énergétique** suit l'énergie pas à pas : un **réservoir** (combustible, barrage…), puis des **convertisseurs** reliés par des flèches qui indiquent la forme d'énergie transférée. Dans presque toutes les centrales, le dernier convertisseur est un **alternateur** : il transforme la rotation de la turbine (énergie **mécanique**) en énergie **électrique**." },
            { t: "schema", titre: "Chaîne énergétique d'une centrale thermique à flamme", legende: "À chaque étape, une partie de l'énergie est perdue, surtout sous forme de chaleur : le rendement global est d'environ 35 à 40 %.", svg: `<svg viewBox="0 0 400 300"><ellipse class="aplat" cx="200" cy="27" rx="78" ry="20"/><ellipse class="trait" cx="200" cy="27" rx="78" ry="20"/><text class="texte" x="200" y="25" text-anchor="middle">combustible</text><text class="texte-petit" x="200" y="39" text-anchor="middle">(charbon, gaz)</text><line class="trait" x1="200" y1="47" x2="200" y2="72" marker-end="url(#fl)"/><text class="texte-pigment" x="210" y="64">énergie chimique</text><rect class="aplat-papier" x="130" y="74" width="140" height="32"/><rect class="trait" x="130" y="74" width="140" height="32"/><text class="texte" x="200" y="95" text-anchor="middle">Chaudière</text><line class="trait" x1="200" y1="106" x2="200" y2="134" marker-end="url(#fl)"/><text class="texte-pigment" x="210" y="125">énergie thermique</text><rect class="aplat-papier" x="130" y="136" width="140" height="32"/><rect class="trait" x="130" y="136" width="140" height="32"/><text class="texte" x="200" y="157" text-anchor="middle">Turbine</text><line class="trait" x1="200" y1="168" x2="200" y2="196" marker-end="url(#fl)"/><text class="texte-pigment" x="210" y="187">énergie mécanique</text><rect class="aplat-papier" x="130" y="198" width="140" height="32"/><rect class="trait" x="130" y="198" width="140" height="32"/><text class="texte" x="200" y="219" text-anchor="middle">Alternateur</text><line class="trait" x1="200" y1="230" x2="200" y2="262" marker-end="url(#fl)"/><text class="texte-pigment" x="210" y="250">énergie électrique</text><text class="texte" x="200" y="284" text-anchor="middle">réseau → habitations</text><line class="pointille" x1="270" y1="90" x2="318" y2="90" marker-end="url(#fl)"/><text class="texte-petit" x="324" y="94">pertes</text><line class="pointille" x1="270" y1="152" x2="318" y2="152" marker-end="url(#fl)"/><text class="texte-petit" x="324" y="156">pertes</text><line class="pointille" x1="270" y1="214" x2="318" y2="214" marker-end="url(#fl)"/><text class="texte-petit" x="324" y="218">pertes</text><text class="texte-main" x="12" y="32">réservoir</text><path class="trait-fin" d="M112 80 L104 80 L104 224 L112 224"/><text class="texte-main" x="12" y="150">conver-</text><text class="texte-main" x="12" y="168">tisseurs</text></svg>` },
            { t: "tableau", titre: "D'autres centrales", entetes: ["Centrale", "Chaîne des conversions"], lignes: [["nucléaire", "nucléaire → thermique → mécanique → électrique"], ["hydraulique", "potentielle (eau en altitude) → cinétique → mécanique → électrique"], ["éolienne", "cinétique (vent) → mécanique → électrique"], ["photovoltaïque", "lumineuse → électrique, **sans** alternateur ni turbine"]] },
          ],
        },
        {
          titre: "Rien ne se perd : conservation et rendement",
          blocs: [
            { t: "propriete", titre: "Conservation de l'énergie", md: "L'énergie ==ne se crée pas et ne se détruit pas== : elle se **convertit** d'une forme à une autre ou se **transfère** d'un objet à un autre. L'énergie totale reste la même." },
            { t: "attention", md: "Une lampe ne « consomme » pas l'énergie au sens de la faire disparaître : elle la **convertit**, en lumière et surtout en chaleur. Ce qu'on appelle « pertes », c'est de l'énergie qui part sous une forme **inutile**, le plus souvent de la chaleur." },
            { t: "propriete", titre: "Rendement", md: "**Rendement = énergie utile / énergie reçue**\n\nIl s'exprime souvent en pourcentage et il est ==toujours inférieur à 100 %==, car une partie de l'énergie est toujours dissipée." },
            { t: "exemple", titre: "Le moteur électrique", etapes: ["Énergie reçue : 500 J (électrique). Énergie utile : 150 J (mécanique).", "Rendement = 150 / 500 = 0,30, soit **30 %**.", "Les 500 − 150 = 350 J restants sont dissipés en chaleur : rien n'a disparu."] },
            { t: "graphique", type: "barres", titre: "Rendements typiques de quelques convertisseurs", unite: "%", donnees: [{ label: "lampe à incandescence", valeur: 5 }, { label: "panneau solaire", valeur: 20 }, { label: "moteur à essence", valeur: 35 }, { label: "centrale thermique", valeur: 38 }, { label: "moteur électrique", valeur: 90 }] },
            { t: "texte", md: "Une balle qui tombe sans frottement transforme son énergie **potentielle** en énergie **cinétique** : elle perd de l'altitude, gagne de la vitesse, et la somme des deux reste ==constante==." },
            { t: "verifie", q: "Un panneau solaire reçoit 1 000 J d'énergie lumineuse et fournit 200 J d'énergie électrique. Quelle énergie est dissipée en chaleur ?", choix: ["200 J", "800 J", "1 200 J", "0 J"], bonne: 1, explication: "Conservation de l'énergie : 1 000 = 200 + énergie dissipée, donc 800 J partent en chaleur. Rendement : 200 / 1 000 = 20 %." },
          ],
        },
        {
          titre: "Sources renouvelables ou non",
          blocs: [
            { t: "definition", terme: "Source renouvelable", md: "Une source qui se **reconstitue** à l'échelle d'une vie humaine : **Soleil**, **vent**, **eau** (cours d'eau, marées), **biomasse** (bois, déchets végétaux), **géothermie** (chaleur du sous-sol)." },
            { t: "definition", terme: "Source non renouvelable", md: "Un **stock** qui s'épuise, car il s'est formé en des millions d'années : **charbon**, **pétrole**, **gaz naturel** (combustibles fossiles) et **uranium**." },
            { t: "attention", md: "Une centrale nucléaire rejette très peu de CO₂, mais elle utilise une source **non renouvelable** : l'uranium est un minerai dont les réserves s'épuisent. Peu polluer l'air et être renouvelable, ce n'est pas la même chose." },
            { t: "verifie", q: "Laquelle de ces sources d'énergie est renouvelable ?", choix: ["Le charbon", "L'uranium", "Le vent", "Le pétrole"], bonne: 2, explication: "Le vent se renouvelle sans cesse grâce au Soleil qui chauffe l'atmosphère. Les trois autres sont des stocks qui s'épuisent." },
          ],
        },
      ],
      bilan: "L'énergie (en J ou en kWh) ne se crée pas et ne se perd pas : elle se convertit, et le rendement, toujours inférieur à 100 %, mesure la part utile.",
    },
    "3e-physique-chimie-08-electricite-puissance-energie": {
      accroche: "Touche les deux bornes d'une pile plate de 4,5 V avec un morceau de paille de fer : en une seconde, les fils fins rougissent, crépitent et s'enflamment ! Le courant électrique chauffe tout ce qu'il traverse. C'est le même phénomène qui fait griller ton pain le matin… et qui peut déclencher un incendie si l'installation est mal protégée.",
      objectifs: [
        "Calculer une puissance électrique avec P = U × I",
        "Calculer une énergie consommée avec E = P × t et un coût",
        "Utiliser la loi d'Ohm et connaître l'effet Joule",
        "Expliquer le rôle du disjoncteur, du fusible et de la prise de terre",
      ],
      sections: [
        {
          titre: "La puissance électrique : P = U × I",
          blocs: [
            { t: "definition", terme: "Puissance électrique", md: "Elle indique ==la rapidité avec laquelle un appareil convertit l'énergie==. Elle s'exprime en **watts (W)**. Un radiateur de 2 000 W chauffe plus vite qu'un radiateur de 1 000 W." },
            { t: "propriete", titre: "Relation de la puissance", md: "**P = U × I**\nP en **watts (W)** ; U (tension) en **volts (V)** ; I (intensité) en **ampères (A)**." },
            { t: "tableau", titre: "Les grandeurs de l'électricité", entetes: ["Grandeur", "Symbole", "Unité", "Mesure ou calcul"], lignes: [["tension", "U", "volt (V)", "voltmètre, en dérivation"], ["intensité", "I", "ampère (A)", "ampèremètre, en série"], ["résistance", "R", "ohm (Ω)", "ohmmètre"], ["puissance", "P", "watt (W)", "P = U × I"], ["énergie", "E", "joule (J) ou kWh", "E = P × t"]] },
            { t: "exemple", titre: "Un appareil sur le secteur", md: "Un appareil branché sur 230 V est traversé par un courant de 2 A : P = 230 × 2 = **460 W**." },
            { t: "graphique", type: "barres", titre: "Puissance de quelques appareils", unite: "W", donnees: [{ label: "chargeur", valeur: 5 }, { label: "lampe LED", valeur: 10 }, { label: "téléviseur", valeur: 100 }, { label: "aspirateur", valeur: 800 }, { label: "bouilloire", valeur: 2000 }] },
          ],
        },
        {
          titre: "L'énergie consommée : E = P × t",
          blocs: [
            { t: "propriete", titre: "Énergie électrique", md: "**E = P × t**\n• P en **W** et t en **s** → E en **joules (J)** ;\n• P en **kW** et t en **h** → E en **kilowattheures (kWh)**, l'unité des factures." },
            { t: "etapes", titre: "Calculer le coût d'un appareil", items: [{ titre: "Puissance en kW", md: "Radiateur de 2 000 W = **2 kW** (on divise par 1 000)." }, { titre: "Durée en heures", md: "Il fonctionne **3 h**." }, { titre: "Énergie", md: "E = P × t = 2 × 3 = **6 kWh**." }, { titre: "Coût", md: "À 0,20 € le kWh : 6 × 0,20 = **1,20 €**." }] },
            { t: "exemple", titre: "Une lampe pendant un mois", md: "Une lampe de 60 W (0,06 kW) reste allumée 5 h par jour pendant 30 jours, soit 150 h. E = 0,06 × 150 = **9 kWh**." },
            { t: "attention", md: "Ne confonds pas **puissance** (W) et **énergie** (kWh). La facture compte l'énergie, car elle dépend à la fois de la puissance **et** de la durée d'utilisation : une LED de 10 W allumée 10 h consomme autant qu'un radiateur de 2 000 W pendant 3 minutes." },
            { t: "verifie", q: "Une LED de 10 W éclaire autant qu'une halogène de 50 W. Pendant la même durée, la LED consomme…", choix: ["5 fois moins d'énergie", "5 fois plus d'énergie", "autant d'énergie", "40 kWh de moins"], bonne: 0, explication: "E = P × t : à durée égale, l'énergie est proportionnelle à la puissance. 50 / 10 = 5 : la LED consomme 5 fois moins." },
          ],
        },
        {
          titre: "Loi d'Ohm et effet Joule",
          blocs: [
            { t: "propriete", titre: "Loi d'Ohm", md: "Pour une **résistance** (un dipôle ohmique) : **U = R × I**, avec R en **ohms (Ω)**. ==La tension est proportionnelle à l'intensité== : la caractéristique est une droite qui passe par l'origine." },
            { t: "graphique", type: "courbe", titre: "Caractéristique d'une résistance de 100 Ω", unite: "V", donnees: [{ label: "0 A", valeur: 0 }, { label: "0,01 A", valeur: 1 }, { label: "0,02 A", valeur: 2 }, { label: "0,03 A", valeur: 3 }, { label: "0,04 A", valeur: 4 }, { label: "0,05 A", valeur: 5 }] },
            { t: "exemple", titre: "Utiliser la loi d'Ohm dans les deux sens", etapes: ["Tension : R = 100 Ω et I = 0,05 A, donc U = 100 × 0,05 = **5 V**.", "Intensité : on isole I = U / R. Avec U = 12 V et R = 48 Ω : I = 12 / 48 = **0,25 A**."] },
            { t: "definition", terme: "Effet Joule", md: "L'échauffement de tout conducteur traversé par un courant. **Utile** dans un radiateur, un grille-pain, une bouilloire ou un fer à repasser ; **gênant** dans les fils et les appareils, où il provoque des pertes d'énergie." },
          ],
        },
        {
          titre: "Se protéger des dangers",
          blocs: [
            { t: "schema", titre: "Une installation protégée", legende: "Si la phase touche la carcasse, le courant de fuite part dans le sol par le fil de terre, et le disjoncteur différentiel coupe.", svg: `<svg viewBox="0 0 400 240"><text class="texte-petit" x="20" y="22">depuis le compteur</text><rect class="aplat" x="20" y="30" width="100" height="80"/><rect class="trait" x="20" y="30" width="100" height="80"/><text class="texte" x="70" y="56" text-anchor="middle">Disjoncteur</text><text class="texte-petit" x="70" y="76" text-anchor="middle">coupe en cas de</text><text class="texte-petit" x="70" y="90" text-anchor="middle">surintensité</text><line class="trait" x1="120" y1="50" x2="300" y2="50"/><line class="trait" x1="120" y1="90" x2="300" y2="90"/><text class="texte-petit" x="210" y="44" text-anchor="middle">phase</text><text class="texte-petit" x="210" y="84" text-anchor="middle">neutre</text><rect class="aplat-papier" x="300" y="30" width="80" height="110" rx="4"/><rect class="trait" x="300" y="30" width="80" height="110" rx="4"/><text class="texte" x="340" y="104" text-anchor="middle">appareil</text><text class="texte-petit" x="340" y="120" text-anchor="middle">carcasse</text><text class="texte-petit" x="340" y="133" text-anchor="middle">métallique</text><line class="trait" x1="340" y1="140" x2="340" y2="196"/><line class="trait" x1="322" y1="196" x2="358" y2="196"/><line class="trait" x1="328" y1="203" x2="352" y2="203"/><line class="trait" x1="334" y1="210" x2="346" y2="210"/><line class="trait-fin" x1="352" y1="150" x2="352" y2="182" marker-end="url(#fl-p)"/><text class="texte" x="330" y="166" text-anchor="end">fil de terre</text><text class="texte-petit" x="330" y="180" text-anchor="end">(vert et jaune)</text><text class="texte" x="340" y="230" text-anchor="middle">terre</text><text class="texte-pigment" x="20" y="160">fuite de courant</text><text class="texte-petit" x="20" y="176">→ évacuée vers le sol</text></svg>` },
            { t: "tableau", titre: "Les dispositifs de sécurité", entetes: ["Dispositif", "Rôle"], lignes: [["**fusible**", "fond et ouvre le circuit en cas de **surintensité**"], ["**disjoncteur**", "coupe automatiquement en cas de **surintensité** (court-circuit, trop d'appareils sur une prise)"], ["**disjoncteur différentiel**", "coupe s'il détecte une **fuite de courant** : il protège les **personnes**"], ["**prise de terre**", "évacue vers le sol le courant d'une carcasse métallique mise accidentellement sous tension"]] },
            { t: "verifie", q: "À quoi sert la prise de terre d'un appareil électrique ?", choix: ["À évacuer vers le sol le courant de fuite d'une carcasse métallique", "À augmenter la puissance de l'appareil", "À réduire la facture", "À allumer l'appareil"], bonne: 0, explication: "Sans prise de terre, une carcasse sous tension ferait passer le courant par la personne qui la touche. Avec elle, le courant part dans le sol et le différentiel coupe le circuit." },
            { t: "liste", titre: "Économiser l'énergie", items: ["Choisir des **LED** plutôt que des halogènes : 5 fois moins d'énergie pour la même lumière.", "**Éteindre les veilles** : un appareil en veille consomme jour et nuit.", "**Isoler** son logement pour moins chauffer.", "Préférer les appareils de **classe énergétique** élevée (A)."] },
          ],
        },
      ],
      bilan: "P = U × I donne la puissance, E = P × t l'énergie payée en kWh, U = R × I relie tension et intensité. Fusible, disjoncteur et prise de terre veillent sur ta sécurité.",
    },
    "3e-physique-chimie-09-signaux-sonores-lumineux": {
      accroche: "On place un réveil qui sonne sous une cloche de verre, puis on pompe l'air qu'elle contient. Peu à peu, la sonnerie s'affaiblit… jusqu'au silence complet. Pourtant, on voit toujours le petit marteau frapper la cloche ! Sans air, le son ne passe plus. La lumière, elle, traverse le vide sans problème.",
      objectifs: [
        "Caractériser un son : fréquence, période, hauteur, niveau sonore, vitesse",
        "Utiliser la vitesse de la lumière et l'année-lumière",
        "Décrire le spectre de la lumière et les rayonnements invisibles",
        "Distinguer signal analogique et numérique, et les modes de transmission",
      ],
      sections: [
        {
          titre: "Le son, une vibration qui voyage",
          blocs: [
            { t: "definition", terme: "Son", md: "Une **vibration** qui se propage de proche en proche dans la **matière** : l'air, l'eau, les solides. ==Le son ne se propage pas dans le vide.==" },
            { t: "propriete", titre: "Vitesse du son", md: "Dans l'air, le son parcourt environ **340 m/s**. Il va plus vite dans l'eau (environ 1 500 m/s) et encore plus vite dans l'acier (environ 5 000 m/s)." },
            { t: "exemple", titre: "L'écho de la falaise", etapes: ["Tu cries face à une falaise et tu entends l'écho 2 s plus tard.", "En 2 s, le son parcourt d = v × t = 340 × 2 = 680 m.", "Mais il a fait **l'aller et le retour** : la falaise est à 680 / 2 = **340 m**."] },
            { t: "verifie", q: "Pendant un orage, pourquoi voit-on l'éclair avant d'entendre le tonnerre ?", choix: ["La lumière va beaucoup plus vite que le son", "Le tonnerre se produit après l'éclair", "Le son va plus vite que la lumière", "Les yeux sont plus rapides que les oreilles"], bonne: 0, explication: "Éclair et tonnerre naissent en même temps. La lumière arrive presque instantanément (300 000 km/s), le son ne parcourt que 340 m/s : environ 3 s de retard par kilomètre." },
          ],
        },
        {
          titre: "Fréquence, période et hauteur",
          blocs: [
            { t: "schema", titre: "Un signal sonore périodique vu sur un oscilloscope", legende: "Le motif se répète à l'identique : sa durée est la période T.", svg: `<svg viewBox="0 0 400 220"><line class="trait-fin" x1="40" y1="200" x2="40" y2="15" marker-end="url(#fl)"/><line class="trait-fin" x1="40" y1="110" x2="385" y2="110" marker-end="url(#fl)"/><text class="texte-petit" x="46" y="16">tension</text><text class="texte-petit" x="385" y="126" text-anchor="end">temps</text><path class="trait" d="M40 110 C58 30 72 30 90 110 C108 190 122 190 140 110 C158 30 172 30 190 110 C208 190 222 190 240 110 C258 30 272 30 290 110"/><line class="pointille" x1="65" y1="50" x2="65" y2="30"/><line class="pointille" x1="165" y1="50" x2="165" y2="30"/><line class="trait-fin" x1="115" y1="36" x2="67" y2="36" marker-end="url(#fl-p)"/><line class="trait-fin" x1="115" y1="36" x2="163" y2="36" marker-end="url(#fl-p)"/><text class="texte-pigment" x="115" y="28" text-anchor="middle">période T</text><line class="pointille" x1="265" y1="50" x2="330" y2="50"/><line class="trait-fin" x1="320" y1="110" x2="320" y2="53" marker-end="url(#fl-p)"/><text class="texte-pigment" x="326" y="86">amplitude</text><text class="texte-main" x="200" y="212" text-anchor="middle">f = 1 / T</text></svg>` },
            { t: "propriete", titre: "Fréquence et période", md: "La **période T** (en secondes) est la durée d'une vibration. La **fréquence f** (en **hertz, Hz**) est le nombre de vibrations par seconde : ==f = 1 / T==.\n\n• Fréquence **élevée** → son **aigu** ; fréquence **basse** → son **grave**.\n• Grande **amplitude** → son **fort** ; petite amplitude → son faible." },
            { t: "exemple", titre: "Calculer une fréquence", md: "Un son a une période T = 0,002 s. f = 1 / 0,002 = **500 Hz**." },
            { t: "tableau", titre: "Ce que l'oreille entend", entetes: ["Domaine", "Fréquences", "Exemples"], lignes: [["infrasons", "moins de 20 Hz", "séismes, éléphants"], ["sons audibles", "de 20 Hz à 20 000 Hz", "voix, musique"], ["**ultrasons**", "plus de 20 000 Hz", "chauves-souris, dauphins, échographie, sonar"]] },
            { t: "attention", md: "Ne confonds pas **hauteur** et **niveau sonore** : un son aigu n'est pas forcément fort ! La hauteur dépend de la fréquence ; le niveau sonore dépend de l'amplitude." },
          ],
        },
        {
          titre: "Le niveau sonore et ton audition",
          blocs: [
            { t: "definition", terme: "Niveau sonore", md: "Il mesure l'intensité perçue d'un son. Il s'exprime en **décibels (dB)** et se mesure avec un **sonomètre**." },
            { t: "graphique", type: "barres", titre: "Niveaux sonores de la vie courante", unite: "dB", donnees: [{ label: "chuchotement", valeur: 30 }, { label: "conversation", valeur: 60 }, { label: "rue animée", valeur: 70 }, { label: "cantine", valeur: 85 }, { label: "baladeur à fond", valeur: 100 }, { label: "concert", valeur: 110 }, { label: "seuil de douleur", valeur: 120 }] },
            { t: "propriete", titre: "Seuils de danger", md: "Au-delà de **85 dB**, l'audition est ==en danger si l'exposition dure==. À **120 dB**, c'est le seuil de douleur. Les cellules abîmées de l'oreille ne repoussent jamais." },
            { t: "astuce", md: "En concert, éloigne-toi des enceintes et porte des bouchons d'oreilles. Avec un casque, la règle du « 60-60 » : pas plus de 60 % du volume, pas plus de 60 minutes d'affilée." },
          ],
        },
        {
          titre: "La lumière et son spectre",
          blocs: [
            { t: "propriete", titre: "Vitesse de la lumière", md: "La lumière se propage, même dans le vide, à **300 000 km/s** environ. La lumière du Soleil, situé à 150 millions de km, met 150 000 000 / 300 000 = **500 s** (environ 8 min 20 s) pour nous parvenir." },
            { t: "definition", terme: "Année-lumière", md: "La **distance** parcourue par la lumière en un an : environ **9 500 milliards de km**. Regarder une étoile lointaine, c'est la voir telle qu'elle était quand sa lumière est partie : ==regarder loin, c'est regarder dans le passé==." },
            { t: "attention", md: "Malgré son nom, l'année-lumière n'est **pas une durée** : c'est une **distance**, utilisée pour les étoiles et les galaxies." },
            { t: "schema", titre: "La lumière blanche décomposée par un prisme", legende: "Au-delà du violet : les ultraviolets (UV). En deçà du rouge : les infrarouges (IR). Tous deux sont invisibles.", svg: `<svg viewBox="0 0 400 240"><polygon class="c-rouge" points="147,125 330,60 330,80"/><polygon class="c-orange" points="147,125 330,80 330,100"/><polygon class="c-jaune" points="147,125 330,100 330,120"/><polygon class="c-vert" points="147,125 330,120 330,140"/><polygon class="c-bleu" points="147,125 330,140 330,160"/><polygon class="c-indigo" points="147,125 330,160 330,180"/><polygon class="c-violet" points="147,125 330,180 330,200"/><polygon class="aplat" points="120,50 70,190 170,190"/><polygon class="trait" points="120,50 70,190 170,190"/><line class="trait" x1="10" y1="140" x2="95" y2="120"/><line class="trait-fin" x1="95" y1="120" x2="147" y2="125"/><text class="texte-petit" x="10" y="160">lumière</text><text class="texte-petit" x="10" y="173">blanche</text><text class="texte-petit" x="120" y="208" text-anchor="middle">prisme</text><rect class="trait" x="330" y="36" width="12" height="188"/><rect class="pointille" x="332" y="40" width="8" height="20"/><rect class="pointille" x="332" y="200" width="8" height="20"/><text class="texte-pigment" x="350" y="54">IR</text><text class="texte-petit" x="350" y="74">rouge</text><text class="texte-petit" x="350" y="94">orange</text><text class="texte-petit" x="350" y="114">jaune</text><text class="texte-petit" x="350" y="134">vert</text><text class="texte-petit" x="350" y="154">bleu</text><text class="texte-petit" x="350" y="174">indigo</text><text class="texte-petit" x="350" y="194">violet</text><text class="texte-pigment" x="350" y="216">UV</text></svg>` },
            { t: "texte", md: "La lumière blanche est un **mélange** de couleurs, du violet au rouge : c'est son **spectre**. Les **ultraviolets** donnent les coups de soleil ; les **infrarouges** transportent la chaleur et servent dans les télécommandes et les caméras thermiques." },
            { t: "verifie", q: "Une année-lumière, c'est…", choix: ["une durée d'un an", "la distance parcourue par la lumière en un an", "la vitesse de la lumière", "l'âge d'une étoile"], bonne: 1, explication: "C'est une distance, environ 9 500 milliards de km : 300 000 km/s multipliés par le nombre de secondes dans une année." },
          ],
        },
        {
          titre: "Transmettre l'information",
          blocs: [
            { t: "definition", terme: "Analogique ou numérique", md: "Un signal **analogique** varie de façon **continue** (la tension produite par un micro). Un signal **numérique** ne prend qu'un **nombre fini de valeurs**, codées en **0 et 1**. Il se copie et se transmet sans se dégrader." },
            { t: "etapes", titre: "Le voyage d'un message par fibre optique", items: [{ titre: "Coder", md: "Le message est transformé en signal numérique (0 et 1)." }, { titre: "Émettre", md: "Un émetteur convertit les 0 et 1 en impulsions lumineuses." }, { titre: "Guider", md: "La lumière se propage dans la fibre optique, sur des milliers de kilomètres." }, { titre: "Recevoir", md: "Un récepteur reconvertit la lumière en signal électrique." }, { titre: "Afficher", md: "Le message apparaît sur l'écran du destinataire." }] },
            { t: "liste", titre: "Les trois grands canaux", items: ["les **fils électriques** (câbles en cuivre) ;", "la **fibre optique**, qui guide la **lumière** ;", "les **ondes radio** : Wi-Fi, 4G et 5G, Bluetooth."] },
          ],
        },
      ],
      bilan: "Le son a besoin de matière (340 m/s dans l'air) ; la lumière traverse le vide à 300 000 km/s. f = 1 / T fixe la hauteur, les décibels mesurent le danger, et le numérique code tout en 0 et 1.",
    },
    "3e-physique-chimie-10-methode-dnb": {
      accroche: "Plonge un œuf frais dans un verre d'eau du robinet : il coule. Ajoute du sel, cuillère après cuillère, en remuant : soudain, l'œuf remonte et flotte entre deux eaux ! Pour expliquer ce mystère, il faut une hypothèse, une mesure, une unité, un calcul… bref, toute la méthode du physicien, celle que le brevet attend de toi.",
      objectifs: [
        "Maîtriser les unités, les préfixes, les conversions et l'écriture scientifique",
        "Calculer avec une formule et isoler une grandeur",
        "Lire un graphique et exploiter un document scientifique",
        "Suivre une démarche expérimentale en sécurité",
      ],
      sections: [
        {
          titre: "Grandeurs, unités et préfixes",
          blocs: [
            { t: "propriete", titre: "Une mesure = une valeur + une unité", md: "Écrire « 12 » ne veut rien dire : 12 g, 12 kg ou 12 N ? ==Un résultat sans unité est un résultat faux.==" },
            { t: "tableau", titre: "Les unités du Système international (SI)", entetes: ["Grandeur", "Symbole", "Unité SI", "Instrument"], lignes: [["masse", "m", "kilogramme (kg)", "balance"], ["longueur, distance", "d", "mètre (m)", "règle, mètre ruban"], ["durée", "t", "seconde (s)", "chronomètre"], ["force, poids", "F, P", "newton (N)", "dynamomètre"], ["énergie", "E", "joule (J)", "compteur (en kWh)"], ["puissance", "P", "watt (W)", "wattmètre"], ["tension", "U", "volt (V)", "voltmètre"], ["intensité", "I", "ampère (A)", "ampèremètre"]] },
            { t: "tableau", titre: "Les préfixes", entetes: ["Préfixe", "Symbole", "Effet", "Exemple"], lignes: [["méga", "M", "× 1 000 000", "1 MJ = 1 000 000 J"], ["kilo", "k", "× 1 000", "2,5 km = 2 500 m"], ["centi", "c", "÷ 100", "1 cm = 0,01 m"], ["milli", "m", "÷ 1 000", "1 mL = 0,001 L"]] },
            { t: "exemple", titre: "Convertir des volumes", md: "Retiens : **1 L = 1 dm³** et **1 mL = 1 cm³**. Donc 1 500 cm³ = 1 500 mL = **1,5 L**." },
            { t: "attention", md: "Majuscule ou minuscule, ça change tout : **M** (méga) multiplie par un million, **m** (milli) divise par mille. Une centrale de 900 **M**W n'a rien à voir avec 900 **m**W !" },
          ],
        },
        {
          titre: "Puissances de dix et écriture scientifique",
          blocs: [
            { t: "definition", terme: "Écriture scientifique", md: "Un nombre écrit sous la forme **a × 10ⁿ**, avec a compris entre 1 et 10 (10 exclu) et n un entier relatif." },
            { t: "exemple", titre: "Deux exemples", etapes: ["3 600 000 : on déplace la virgule de 6 rangs vers la gauche → **3,6 × 10⁶**.", "0,0042 : on déplace la virgule de 3 rangs vers la droite → **4,2 × 10⁻³**.", "Dans l'autre sens : 4,2 × 10⁻³ = **0,0042**."] },
            { t: "astuce", md: "Exposant **positif** : grand nombre (la virgule part vers la droite pour l'écrire en entier). Exposant **négatif** : petit nombre, inférieur à 1." },
            { t: "verifie", q: "Quelle est l'écriture scientifique de 3 600 000 ?", choix: ["36 × 10⁵", "3,6 × 10⁶", "3,6 × 10⁻⁶", "0,36 × 10⁷"], bonne: 1, explication: "Le nombre devant doit être compris entre 1 et 10 : 3,6. On a déplacé la virgule de 6 rangs, donc 10⁶. 36 × 10⁵ est juste, mais pas en écriture scientifique." },
          ],
        },
        {
          titre: "Calculer avec une formule",
          blocs: [
            { t: "tableau", titre: "Les formules du brevet", entetes: ["Formule", "Grandeurs et unités"], lignes: [["**ρ = m / V**", "ρ en g/cm³ (ou kg/m³), m en g, V en cm³"], ["**P = m × g**", "P en N, m en kg, g en N/kg (9,8 sur Terre)"], ["**v = d / t**", "v en m/s, d en m, t en s (ou km/h, km, h)"], ["**Ec = ½ × m × v²**", "Ec en J, m en kg, v en m/s"], ["**P = U × I**", "P en W, U en V, I en A"], ["**E = P × t**", "E en J (W, s) ou en kWh (kW, h)"], ["**U = R × I**", "U en V, R en Ω, I en A"], ["**f = 1 / T**", "f en Hz, T en s"]] },
            { t: "etapes", titre: "La méthode en six étapes", items: [{ titre: "Écrire la formule", md: "P = m × g" }, { titre: "Isoler la grandeur cherchée", md: "Si a = b × c, alors **b = a / c**. Ici : m = P / g." }, { titre: "Convertir", md: "Vérifier que chaque grandeur est dans la bonne unité." }, { titre: "Remplacer", md: "m = 588 / 9,8" }, { titre: "Calculer", md: "m = 60" }, { titre: "Conclure", md: "Écrire le résultat **avec son unité** : m = **60 kg**." }] },
            { t: "propriete", titre: "Chiffres significatifs", md: "On ne recopie pas tous les chiffres de la calculatrice : le résultat doit être ==aussi précis que les données==, pas plus. 12,5 ÷ 3 = 4,1666666… s'arrondit à 3 chiffres significatifs : **4,17**." },
          ],
        },
        {
          titre: "Lire un graphique, exploiter un document",
          blocs: [
            { t: "texte", md: "Sur un graphique, commence toujours par lire les **axes** : l'axe horizontal est l'**axe des abscisses**, l'axe vertical l'**axe des ordonnées**. Note la grandeur et l'unité de chacun avant de lire un point." },
            { t: "graphique", type: "courbe", titre: "Distance parcourue par un cycliste", unite: "m", donnees: [{ label: "0 s", valeur: 0 }, { label: "10 s", valeur: 50 }, { label: "20 s", valeur: 100 }, { label: "30 s", valeur: 150 }, { label: "40 s", valeur: 200 }] },
            { t: "propriete", titre: "Droite passant par l'origine", md: "Si la courbe est une **droite qui passe par l'origine**, les deux grandeurs sont ==proportionnelles==. Ici, la distance est proportionnelle à la durée : le cycliste roule à vitesse constante, v = 200 / 40 = **5 m/s**." },
            { t: "exemple", titre: "Exploiter un document", md: "Un document indique : eau douce 1,000 g/cm³ ; œuf périmé 0,98 g/cm³. On compare : 0,98 < 1,000, donc l'œuf périmé **flotte** dans l'eau douce. Méthode : relever les données utiles, les comparer, puis ==justifier avec une règle du cours==." },
            { t: "verifie", q: "Le graphique de la distance en fonction du temps est une droite passant par l'origine. Que peut-on conclure ?", choix: ["La vitesse est constante", "Le cycliste accélère", "Le cycliste est immobile", "On ne peut rien conclure"], bonne: 0, explication: "Une droite passant par l'origine traduit la proportionnalité : la distance augmente de la même quantité à chaque seconde, la vitesse est constante." },
          ],
        },
        {
          titre: "Démarche expérimentale et sécurité",
          blocs: [
            { t: "etapes", titre: "La démarche expérimentale", items: [{ titre: "Question", md: "Pourquoi l'œuf remonte-t-il dans l'eau salée ?" }, { titre: "Hypothèse", md: "Le sel augmente la masse volumique de l'eau." }, { titre: "Expérience", md: "On mesure m et V d'eau de plus en plus salée." }, { titre: "Observations", md: "ρ passe de 1,00 à 1,10 g/cm³ et plus." }, { titre: "Conclusion", md: "Hypothèse validée : quand ρ(eau salée) dépasse ρ(œuf), l'œuf flotte." }] },
            { t: "liste", titre: "Les règles de sécurité au laboratoire", items: ["Porter des **lunettes** et une **blouse** en coton, attacher ses cheveux.", "Lire l'**étiquette** et les **pictogrammes** avant d'utiliser un produit.", "Ne **jamais goûter** et ne jamais sentir directement un produit.", "Prévenir **immédiatement** le professeur en cas de problème."] },
            { t: "attention", md: "Si de l'acide est projeté sur ta peau, **rince abondamment à l'eau** et préviens le professeur. N'essaie jamais de « neutraliser » avec une base comme la soude : tu aggraverais la brûlure." },
          ],
        },
      ],
      bilan: "Une formule, une grandeur isolée, des unités converties, un résultat avec son unité : c'est la méthode qui fait gagner les points au brevet, en toute sécurité.",
    },
  },
};
