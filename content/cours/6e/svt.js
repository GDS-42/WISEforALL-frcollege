// Cours ÉCLORE — 6e Sciences de la vie et de la Terre. Schéma : docs/COURS.md
export default {
  id: "6e-svt",
  chapitres: {
    "6e-svt-01-classer-le-vivant": {
      accroche: "Le dauphin a la forme d'un poisson, nage comme un poisson et vit au milieu des poissons. Pourtant, les scientifiques le rangent avec le chat et la chauve-souris ! Pour comprendre pourquoi, il faut apprendre à regarder les êtres vivants comme un détective.",
      objectifs: [
        "Définir une espèce et mesurer l'immense diversité du vivant",
        "Classer des êtres vivants en groupes emboîtés grâce à leurs attributs",
        "Lire un arbre de parenté pour savoir qui est proche de qui",
      ],
      sections: [
        {
          titre: "Une diversité immense, des espèces",
          blocs: [
            { t: "texte", md: "Bactéries, champignons, mousses, chênes, fourmis, humains… Les scientifiques ont déjà décrit **près de 2 millions d'espèces**, et il en reste sans doute des millions à découvrir, surtout parmi les insectes et les êtres vivants microscopiques.\n\nLe vivant ne se limite donc pas aux animaux : les **plantes**, les **champignons** et les **micro-organismes** sont eux aussi des êtres vivants, et ils sont classés." },
            { t: "definition", terme: "Espèce", md: "Ensemble d'êtres vivants qui se ressemblent et qui peuvent ==se reproduire entre eux== en donnant des descendants **eux-mêmes fertiles** (capables à leur tour d'avoir des petits)." },
            { t: "exemple", titre: "Labrador et caniche : deux espèces ?", md: "Ils ne se ressemblent pas du tout. Mais un labrador et un caniche peuvent avoir ensemble des chiots, et ces chiots pourront à leur tour se reproduire. Ils appartiennent donc à **la même espèce** : le chien domestique. Les races sont seulement des variétés à l'intérieur d'une espèce." },
            { t: "savais-tu", md: "Le cheval et l'âne peuvent avoir un petit : le mulet. Mais le mulet est presque toujours stérile. Le cheval et l'âne restent donc deux espèces différentes." },
          ],
        },
        {
          titre: "Observer les attributs",
          blocs: [
            { t: "definition", terme: "Attribut", md: "Un caractère que l'on **observe** sur un être vivant : des poils, des plumes, des mamelles, un squelette interne, des nageoires, des fleurs…" },
            { t: "propriete", titre: "La règle d'or du classement", md: "On regroupe les êtres vivants selon les attributs qu'ils **possèdent en commun**.\n\nOn ne classe jamais selon ce qu'ils *n'ont pas*, ni selon leur **milieu de vie** (eau, air, sol), ni selon leur **utilité** pour l'humain, ni selon leur façon de se déplacer." },
            { t: "tableau", titre: "Qui possède quoi ?", entetes: ["Animal", "Squelette interne", "4 membres", "Poils et mamelles", "Plumes"], lignes: [["Thon", "oui", "non (nageoires)", "non", "non"], ["Grenouille", "oui", "oui", "non", "non"], ["Pigeon", "oui", "oui (2 ailes, 2 pattes)", "non", "oui"], ["Chauve-souris", "oui", "oui (2 ailes, 2 pattes)", "oui", "non"], ["Dauphin", "oui", "oui (2 nageoires avant, membres arrière presque disparus)", "oui", "non"], ["Escargot", "non", "non", "non", "non"]] },
            { t: "attention", md: "La chauve-souris vole et a des ailes, comme le pigeon. Mais voler est une *façon de se déplacer*, pas un attribut de classement. Elle a des **poils** et allaite ses petits avec des **mamelles** : c'est un **mammifère**. Ses ailes sont des bras dont les doigts très longs portent une peau fine." },
          ],
        },
        {
          titre: "Des boîtes dans des boîtes",
          blocs: [
            { t: "texte", md: "Chaque attribut partagé dessine une **boîte**. Tous les animaux à squelette interne vont dans la boîte des **vertébrés**. Dans cette boîte, ceux qui ont 4 membres forment une boîte plus petite. Et dans celle-ci, ceux qui ont des poils et des mamelles forment la boîte des **mammifères**.\n\nOn dit que les groupes sont **emboîtés** : tous les mammifères sont des vertébrés, mais tous les vertébrés ne sont pas des mammifères." },
            { t: "schema", titre: "Une classification en groupes emboîtés", legende: "Chaque boîte correspond à un attribut partagé. Les animaux sans squelette interne restent dehors : ils n'ont pas de boîte commune.", svg: `<svg viewBox="0 0 400 260"><rect class="aplat" x="10" y="12" width="290" height="236" rx="10"/><rect class="trait" x="10" y="12" width="290" height="236" rx="10" fill="none"/><text class="texte" x="22" y="32">Squelette interne : VERTÉBRÉS</text><rect class="aplat-papier" x="22" y="44" width="266" height="164" rx="8"/><rect class="trait" x="22" y="44" width="266" height="164" rx="8" fill="none"/><text class="texte" x="34" y="63">4 membres : TÉTRAPODES</text><rect class="aplat" x="34" y="76" width="140" height="120" rx="6"/><rect class="trait" x="34" y="76" width="140" height="120" rx="6" fill="none"/><text class="texte" x="104" y="96" text-anchor="middle">Poils, mamelles</text><text class="texte-pigment" x="104" y="112" text-anchor="middle">MAMMIFÈRES</text><text class="texte-main" x="104" y="138" text-anchor="middle">chat</text><text class="texte-main" x="104" y="160" text-anchor="middle">dauphin</text><text class="texte-main" x="104" y="182" text-anchor="middle">chauve-souris</text><rect class="aplat" x="184" y="76" width="94" height="120" rx="6"/><rect class="trait" x="184" y="76" width="94" height="120" rx="6" fill="none"/><text class="texte" x="231" y="96" text-anchor="middle">Plumes</text><text class="texte-pigment" x="231" y="112" text-anchor="middle">OISEAUX</text><text class="texte-main" x="231" y="138" text-anchor="middle">pigeon</text><text class="texte-main" x="231" y="160" text-anchor="middle">manchot</text><text class="texte-main" x="155" y="232" text-anchor="middle">thon</text><text class="texte-petit" x="350" y="40" text-anchor="middle">Sans squelette</text><text class="texte-petit" x="350" y="54" text-anchor="middle">interne :</text><text class="texte-main" x="350" y="90" text-anchor="middle">escargot</text><text class="texte-main" x="350" y="120" text-anchor="middle">criquet</text><text class="texte-main" x="350" y="150" text-anchor="middle">ver de terre</text><text class="texte-petit" x="350" y="186" text-anchor="middle">« invertébrés » :</text><text class="texte-petit" x="350" y="200" text-anchor="middle">pas une vraie</text><text class="texte-petit" x="350" y="214" text-anchor="middle">boîte</text></svg>` },
            { t: "verifie", q: "Où placer la grenouille dans ce schéma (squelette interne, 4 membres, peau nue sans poils ni plumes) ?", choix: ["Dans la boîte des mammifères", "Dans la boîte « 4 membres », hors des mammifères et des oiseaux", "Dehors, avec l'escargot", "Avec le thon, car elle vit dans l'eau"], bonne: 1, explication: "La grenouille a un squelette interne et 4 membres : elle entre dans ces deux boîtes. Elle n'a ni poils ni plumes : elle reste hors des mammifères et des oiseaux. Son milieu de vie ne compte pas." },
            { t: "attention", md: "Les **invertébrés** (insectes, escargots, vers, méduses…) sont définis par ce qu'ils *n'ont pas* : une colonne vertébrale. Le mot est pratique, mais ce n'est **pas un vrai groupe** de classification. Un escargot est d'ailleurs plus proche parent d'une pieuvre que d'un criquet !" },
            { t: "exemple", titre: "Du plus grand au plus petit groupe", etapes: ["Animaux : la plus grande boîte de cet exemple.", "Vertébrés : les animaux à squelette interne.", "Mammifères : les vertébrés à poils et mamelles.", "Carnivores : les mammifères à canines puissantes et griffes.", "Chat domestique : une seule espèce, la boîte la plus petite."] },
          ],
        },
        {
          titre: "Lire un arbre de parenté",
          blocs: [
            { t: "texte", md: "Pourquoi des espèces partagent-elles des attributs ? Parce qu'elles les ont **hérités d'un ancêtre commun**. Un **arbre de parenté** montre ces liens : chaque embranchement représente un ancêtre commun, et l'attribut qu'il a transmis à tous ses descendants." },
            { t: "schema", titre: "Arbre de parenté de quatre vertébrés", legende: "Plus un ancêtre commun est placé haut (récent), plus les espèces qui en descendent sont proches parentes.", svg: `<svg viewBox="0 0 400 230"><text class="texte-main" x="60" y="36" text-anchor="middle">thon</text><text class="texte-main" x="160" y="36" text-anchor="middle">grenouille</text><text class="texte-main" x="260" y="36" text-anchor="middle">chat</text><text class="texte-main" x="350" y="36" text-anchor="middle">dauphin</text><path class="trait" d="M260 48 V100 H350 V48" fill="none"/><path class="trait" d="M305 100 V145 H160 V48" fill="none"/><path class="trait" d="M232 145 V190 H60 V48" fill="none"/><path class="trait" d="M146 190 V218" fill="none"/><circle cx="305" cy="100" r="5" fill="var(--pigment)"/><circle cx="232" cy="145" r="5" fill="var(--pigment)"/><circle cx="146" cy="190" r="5" fill="var(--pigment)"/><text class="texte-petit" x="305" y="118" text-anchor="middle">poils, mamelles</text><text class="texte-petit" x="240" y="163" text-anchor="start">4 membres</text><text class="texte-petit" x="158" y="210" text-anchor="start">squelette interne</text><path class="pointille" d="M30 200 V60" marker-end="url(#fl)"/><text class="texte-petit" x="22" y="214">temps</text></svg>` },
            { t: "propriete", titre: "Proches parents", md: "Deux espèces sont d'autant plus proches parentes qu'elles partagent **plus d'attributs**, car elles ont un **ancêtre commun plus récent**." },
            { t: "verifie", q: "Le dauphin (poumons, mamelles) et le requin (branchies, nageoires) ont une forme très semblable. Que peut-on en conclure ?", choix: ["Ce sont de proches parents", "Ce sont deux poissons", "La forme ne suffit pas : le dauphin est plus proche du chat que du requin", "Le dauphin est un requin à poumons"], bonne: 2, explication: "Une forme semblable s'explique par la vie dans l'eau, pas par la parenté. Les attributs (poils, mamelles, poumons) montrent que le dauphin partage un ancêtre plus récent avec le chat." },
          ],
        },
      ],
      bilan: "Pour classer, on cherche ce que les êtres vivants ont en commun : chaque attribut partagé est une boîte, et chaque boîte raconte un ancêtre commun.",
    },

    "6e-svt-02-la-cellule": {
      accroche: "Ta peau, une feuille de salade et un champignon de Paris n'ont rien en commun… en apparence. Mais glisse un fragment de chacun sous un microscope : tu découvriras les mêmes petites briques, collées par millions. Ces briques, ce sont les cellules.",
      objectifs: [
        "Utiliser un microscope et calculer son grossissement",
        "Reconnaître la membrane, le cytoplasme et le noyau d'une cellule",
        "Distinguer cellule animale et cellule végétale",
        "Distinguer êtres unicellulaires et pluricellulaires",
      ],
      sections: [
        {
          titre: "Une brique invisible à l'œil nu",
          blocs: [
            { t: "texte", md: "En 1665, le savant anglais Robert Hooke observe une fine tranche de liège avec un microscope de sa fabrication. Il voit de petites cases vides et les appelle « cellules », comme les petites chambres d'un monastère.\n\nOn sait aujourd'hui que **tous les êtres vivants**, animaux, plantes, champignons, bactéries, sont formés de cellules." },
            { t: "definition", terme: "Cellule", md: "La plus petite unité du vivant : la **brique de base** dont sont faits tous les êtres vivants." },
            { t: "texte", md: "Une cellule humaine mesure en général entre **0,01 et 0,1 mm**. C'est bien trop petit pour l'œil, qui ne distingue rien en dessous de 0,1 mm environ. On utilise donc une unité adaptée, le **micromètre** (µm) : 1 mm = 1 000 µm.\n\nExemple : 0,05 mm × 1 000 = **50 µm**." },
            { t: "attention", md: "Même en regardant ta peau de très près, tu ne verras jamais une cellule à l'œil nu. Ce que tu vois (petits plis, pores) est formé de milliers de cellules. Il faut un **microscope**." },
          ],
        },
        {
          titre: "Utiliser le microscope",
          blocs: [
            { t: "propriete", titre: "Calculer le grossissement", md: "Grossissement total = grossissement de l'**oculaire** × grossissement de l'**objectif**." },
            { t: "tableau", titre: "Les grossissements d'un microscope de collège (oculaire ×10)", entetes: ["Objectif", "Calcul", "Grossissement total"], lignes: [["×4", "10 × 4", "×40"], ["×10", "10 × 10", "×100"], ["×40", "10 × 40", "×400"]] },
            { t: "etapes", titre: "Observer une préparation", items: [{ titre: "Préparer", md: "Choisir le **plus petit objectif** et régler la lumière." }, { titre: "Placer", md: "Poser la lame sur la platine et la fixer avec les valets." }, { titre: "Mettre au point", md: "Tourner la vis jusqu'à obtenir une image nette." }, { titre: "Centrer", md: "Déplacer la lame pour amener la zone intéressante au centre." }, { titre: "Grossir", md: "Seulement alors, passer à un objectif plus fort et refaire la netteté." }] },
            { t: "astuce", md: "Pourquoi commencer par le plus petit objectif ? Il montre un grand champ, ce qui aide à trouver ce que l'on cherche, et il est loin de la lame : pas de risque de la casser." },
          ],
        },
        {
          titre: "Ce que toutes les cellules ont en commun",
          blocs: [
            { t: "texte", md: "Observe ces deux cellules. L'une vient de l'intérieur de ta joue, l'autre d'une feuille de mousse. Elles sont différentes, mais elles partagent trois constituants." },
            { t: "schema", titre: "Cellule animale et cellule végétale", legende: "Les deux cellules ont une membrane, un cytoplasme et un noyau. La cellule végétale a en plus une paroi rigide et des chloroplastes verts.", svg: `<svg viewBox="0 0 400 250"><path class="aplat" d="M85 70 C120 66 145 95 142 128 C139 162 112 182 82 178 C50 175 27 152 28 122 C29 92 52 73 85 70 Z"/><path class="trait" d="M85 70 C120 66 145 95 142 128 C139 162 112 182 82 178 C50 175 27 152 28 122 C29 92 52 73 85 70 Z" fill="none"/><circle class="aplat-fort" cx="78" cy="118" r="16"/><circle class="trait" cx="78" cy="118" r="16" fill="none"/><rect class="aplat-papier" x="255" y="60" width="120" height="130" rx="4"/><rect class="trait" x="255" y="60" width="120" height="130" rx="4" fill="none" stroke-width="4"/><rect class="aplat" x="262" y="67" width="106" height="116" rx="3"/><rect class="trait-fin" x="262" y="67" width="106" height="116" rx="3" fill="none"/><circle class="aplat-fort" cx="290" cy="95" r="13"/><circle class="trait" cx="290" cy="95" r="13" fill="none"/><ellipse class="aplat-fort" cx="345" cy="88" rx="9" ry="4"/><ellipse class="aplat-fort" cx="352" cy="132" rx="9" ry="4"/><ellipse class="aplat-fort" cx="330" cy="172" rx="9" ry="4"/><ellipse class="aplat-fort" cx="283" cy="170" rx="9" ry="4"/><ellipse class="aplat-fort" cx="318" cy="118" rx="9" ry="4"/><text class="texte" x="198" y="74" text-anchor="middle">membrane</text><path class="trait-fin" d="M166 70 L128 85"/><path class="trait-fin" d="M232 70 L262 76"/><text class="texte" x="198" y="116" text-anchor="middle">noyau</text><path class="trait-fin" d="M176 112 L95 117"/><path class="trait-fin" d="M220 112 L278 99"/><text class="texte" x="198" y="156" text-anchor="middle">cytoplasme</text><path class="trait-fin" d="M164 152 L112 152"/><path class="trait-fin" d="M232 152 L290 150"/><text class="texte" x="315" y="48" text-anchor="middle">paroi</text><path class="trait-fin" d="M315 52 L315 60"/><text class="texte" x="315" y="210" text-anchor="middle">chloroplaste</text><path class="trait-fin" d="M322 199 L330 177"/><text class="texte-main" x="85" y="238" text-anchor="middle">Cellule animale</text><text class="texte-main" x="315" y="238" text-anchor="middle">Cellule végétale</text></svg>` },
            { t: "tableau", titre: "Les constituants d'une cellule", entetes: ["Constituant", "Rôle", "Cellule animale", "Cellule végétale"], lignes: [["**Membrane**", "Enveloppe fine qui délimite la cellule", "oui", "oui"], ["**Cytoplasme**", "Contenu gélatineux où se déroule la vie de la cellule", "oui", "oui"], ["**Noyau**", "Renferme l'information qui commande la cellule", "oui", "oui"], ["**Paroi**", "Enveloppe épaisse et rigide autour de la membrane", "non", "oui"], ["**Chloroplastes**", "Petits éléments verts (chlorophylle)", "non", "souvent"]] },
            { t: "verifie", q: "Au microscope, tu vois des cellules en forme de cases rectangulaires, collées les unes aux autres par une enveloppe épaisse et rigide. De quel type de cellules s'agit-il probablement ?", choix: ["Des cellules animales", "Des cellules végétales", "Des bactéries"], bonne: 1, explication: "L'enveloppe épaisse et rigide est une paroi : elle donne cette forme de cases bien rangées. C'est la signature des cellules végétales, comme celles de l'épiderme d'oignon." },
            { t: "savais-tu", md: "Les bactéries sont des cellules **sans noyau** : leur information flotte directement dans le cytoplasme. C'est pourquoi on dit que le noyau existe « chez la plupart » des êtres vivants." },
          ],
        },
        {
          titre: "Une seule cellule ou des milliards",
          blocs: [
            { t: "definition", terme: "Unicellulaire / pluricellulaire", md: "Un être vivant **unicellulaire** est formé d'**une seule cellule** qui fait tout : se nourrir, bouger, se reproduire. Un être vivant **pluricellulaire** est formé de **nombreuses cellules**, souvent des milliards." },
            { t: "exemple", titre: "Classer quelques êtres vivants", md: "Unicellulaires : la **paramécie** (qui nage dans l'eau des mares), la **levure** (qui fait gonfler le pain), les **bactéries**.\n\nPluricellulaires : l'**humain** (des dizaines de milliers de milliards de cellules), le **chêne**, la **fourmi**, le champignon de Paris." },
            { t: "attention", md: "La taille ne dit pas tout : une fourmi est minuscule mais elle est faite de millions de cellules. Et les plantes sont bien faites de cellules, comme les animaux." },
            { t: "texte", md: "Chez un être pluricellulaire, les cellules ne sont pas toutes pareilles : elles se **spécialisent**. Les cellules des muscles se contractent, celles du sang transportent le dioxygène, celles des nerfs transmettent des messages. Elles travaillent ensemble pour faire vivre l'organisme entier." },
            { t: "verifie", q: "Avec un oculaire ×10 et un objectif ×40, quel est le grossissement total ?", choix: ["×50", "×400", "×4", "×1 040"], bonne: 1, explication: "On multiplie : 10 × 40 = 400. L'image apparaît 400 fois plus grande que l'objet réel. On n'additionne pas les deux grossissements." },
          ],
        },
      ],
      bilan: "Membrane, cytoplasme, noyau : du microbe à la baleine, tout le vivant est bâti avec des cellules, seules ou par milliards.",
    },

    "6e-svt-03-developpement-et-cycles-de-vie": {
      accroche: "Au printemps, une mare grouille de petites boules noires à queue qui nagent comme des poissons. Quelques semaines plus tard, elles ont disparu… et des grenouilles sautent sur la berge. Ce ne sont pas d'autres animaux : ce sont les mêmes, transformés.",
      objectifs: [
        "Décrire les stades du cycle de vie d'un animal et d'une plante",
        "Distinguer croissance continue, mue et métamorphose",
        "Expliquer le rôle de la fécondation",
        "Connaître les conditions de la germination",
      ],
      sections: [
        {
          titre: "Naître, grandir, se reproduire",
          blocs: [
            { t: "definition", terme: "Cycle de vie", md: "La suite des étapes de la vie d'un être vivant : **naissance, croissance, reproduction, mort**. Les petits produits recommencent le cycle : c'est pour cela qu'on parle de *cycle*." },
            { t: "texte", md: "Chez les animaux, la vie commence par un **œuf** ou par une **naissance**. Chez les plantes à fleurs, elle commence par une **graine**. La **croissance** fait ensuite augmenter la taille et la masse de l'individu, jusqu'à l'âge adulte où il peut se reproduire." },
            { t: "exemple", titre: "Mesurer une croissance", md: "Un plant de haricot mesure 4 cm le lundi et 13 cm le lundi suivant. Il a grandi de 13 − 4 = 9 cm en 7 jours, soit en moyenne 9 ÷ 7 ≈ **1,3 cm par jour**." },
          ],
        },
        {
          titre: "Grandir sans changer… ou se transformer",
          blocs: [
            { t: "texte", md: "Un lapereau ressemble déjà à un lapin adulte, en plus petit : il grandit sans changer de forme. C'est une **croissance continue**, comme chez l'humain, le chat ou la poule.\n\nLe criquet, lui, est enfermé dans une carapace rigide qui ne grandit pas. Pour grandir, il doit la quitter : il **mue**. Juste après la mue, sa nouvelle carapace encore molle s'agrandit, puis durcit. Sa croissance se fait donc **par paliers**." },
            { t: "definition", terme: "Métamorphose", md: "Une **transformation profonde du corps** au cours du développement : la larve ne ressemble pas à l'adulte, ni par sa forme, ni par sa façon de vivre." },
            { t: "etapes", titre: "Le cycle de vie du papillon", cycle: true, items: [{ titre: "Œuf", md: "Pondu par la femelle sur une plante." }, { titre: "Chenille (larve)", md: "Elle mange des feuilles et grandit en muant plusieurs fois." }, { titre: "Chrysalide (nymphe)", md: "Immobile, elle se transforme complètement à l'intérieur." }, { titre: "Papillon adulte", md: "Il vole, se nourrit de nectar, se reproduit et pond." }] },
            { t: "etapes", titre: "Le développement de la grenouille", items: [{ titre: "Œuf", md: "Pondu dans l'eau, en amas gélatineux." }, { titre: "Têtard sans pattes", md: "Il nage avec sa queue et respire par des **branchies**." }, { titre: "Têtard à pattes arrière", md: "Les pattes arrière, puis avant, apparaissent." }, { titre: "Jeune grenouille", md: "Des **poumons** se forment, la queue raccourcit." }, { titre: "Grenouille adulte", md: "Sans queue, elle vit dans l'eau et sur terre." }] },
            { t: "attention", md: "Le têtard et la grenouille appartiennent à **la même espèce** : ce sont deux stades de la vie du même animal. De même, la chenille et le papillon sont un seul et même être vivant." },
            { t: "verifie", q: "Pourquoi un criquet doit-il muer pour grandir ?", choix: ["Parce que sa carapace rigide ne grandit pas avec lui", "Pour changer de couleur", "Parce qu'il devient une autre espèce"], bonne: 0, explication: "Sa carapace est un squelette externe dur, qui ne s'agrandit pas. Le criquet s'en débarrasse lors de la mue, grandit pendant que la nouvelle est encore molle, puis elle durcit." },
          ],
        },
        {
          titre: "La fécondation : deux cellules s'unissent",
          blocs: [
            { t: "propriete", titre: "Reproduction sexuée", md: "Elle fait intervenir **deux parents**. Une cellule reproductrice **mâle** (spermatozoïde chez les animaux, contenue dans le grain de pollen chez les plantes) s'unit à une cellule reproductrice **femelle** (l'**ovule**). Cette union est la **fécondation** : elle donne une **cellule-œuf**, qui se développe en un nouvel individu." },
            { t: "tableau", titre: "Où a lieu la fécondation ?", entetes: ["Type", "Où ?", "Exemples"], lignes: [["Fécondation **externe**", "Dans l'eau, hors du corps de la femelle", "truite, grenouille"], ["Fécondation **interne**", "Dans le corps de la femelle", "mammifères, oiseaux, insectes"]] },
            { t: "schema", titre: "Une fleur en coupe", legende: "La fleur est l'organe de reproduction des plantes à fleurs : les étamines sont la partie mâle, le pistil la partie femelle.", svg: `<svg viewBox="0 0 400 240"><path class="trait" d="M200 230 V178" fill="none" stroke-width="3"/><path class="aplat" d="M190 172 C160 182 140 176 130 160 C152 160 174 166 192 170 Z"/><path class="trait-fin" d="M190 172 C160 182 140 176 130 160 C152 160 174 166 192 170 Z" fill="none"/><path class="aplat" d="M210 172 C240 182 260 176 270 160 C248 160 226 166 208 170 Z"/><path class="trait-fin" d="M210 172 C240 182 260 176 270 160 C248 160 226 166 208 170 Z" fill="none"/><path class="aplat-papier" d="M188 168 C140 160 104 112 120 64 C150 86 176 128 192 160 Z"/><path class="trait" d="M188 168 C140 160 104 112 120 64 C150 86 176 128 192 160 Z" fill="none"/><path class="aplat-papier" d="M212 168 C260 160 296 112 280 64 C250 86 224 128 208 160 Z"/><path class="trait" d="M212 168 C260 160 296 112 280 64 C250 86 224 128 208 160 Z" fill="none"/><path class="trait-fin" d="M188 166 L166 100" fill="none"/><path class="trait-fin" d="M212 166 L234 100" fill="none"/><ellipse class="aplat-fort" cx="165" cy="95" rx="5" ry="9"/><ellipse class="aplat-fort" cx="235" cy="95" rx="5" ry="9"/><ellipse class="aplat" cx="200" cy="160" rx="16" ry="15"/><ellipse class="trait" cx="200" cy="160" rx="16" ry="15" fill="none"/><path class="trait" d="M196 146 V96 M204 146 V96" fill="none"/><ellipse class="aplat-fort" cx="200" cy="92" rx="9" ry="5"/><circle cx="194" cy="158" r="3.5" fill="var(--pigment)"/><circle cx="206" cy="158" r="3.5" fill="var(--pigment)"/><circle cx="200" cy="166" r="3.5" fill="var(--pigment)"/><text class="texte" x="30" y="82">pétale</text><path class="trait-fin" d="M72 78 L128 88"/><text class="texte" x="30" y="190">sépale</text><path class="trait-fin" d="M74 186 L148 172"/><text class="texte" x="300" y="56">étamine</text><text class="texte-petit" x="300" y="70">(pollen)</text><path class="trait-fin" d="M298 60 L242 90"/><text class="texte" x="300" y="122">pistil</text><path class="trait-fin" d="M298 118 L206 118"/><text class="texte" x="300" y="200">ovules</text><path class="trait-fin" d="M298 196 L208 164"/></svg>` },
            { t: "liste", titre: "Le rôle de chaque partie de la fleur", items: ["**Étamines** : produisent le **pollen**, qui contient les cellules mâles.", "**Pistil** : contient les **ovules**, cellules femelles.", "**Pétales** : souvent colorés, ils **attirent les insectes** pollinisateurs.", "**Sépales** : verts, ils **protègent le bouton** de fleur."] },
            { t: "etapes", titre: "De la fleur à la nouvelle plante", cycle: true, items: [{ titre: "Pollinisation", md: "Le vent ou un insecte transporte le pollen jusqu'au pistil." }, { titre: "Fécondation", md: "Les cellules mâles du pollen s'unissent aux ovules." }, { titre: "Fruit", md: "Le pistil se transforme en **fruit** ; les ovules deviennent des **graines**." }, { titre: "Dispersion", md: "Le vent, l'eau ou les animaux emportent les graines." }, { titre: "Germination", md: "Une graine donne une nouvelle plante, qui fleurira à son tour." }] },
          ],
        },
        {
          titre: "La germination d'une graine",
          blocs: [
            { t: "texte", md: "Une graine contient une **plantule** (une minuscule plante) et des **réserves** de nourriture. Tant que les conditions ne sont pas réunies, elle reste en vie ralentie, parfois pendant des années. Quand elles le sont, elle gonfle, une petite racine sort, puis une tige et les premières feuilles : c'est la **germination**." },
            { t: "propriete", titre: "Les trois conditions de la germination", md: "Une graine a besoin d'**eau**, de **chaleur** (une température suffisante) et d'**air** (dioxygène).\n\n==La lumière n'est pas nécessaire== au départ : la plantule utilise les réserves de la graine." },
            { t: "exemple", titre: "Haricots en expérience", md: "Haricot sur coton humide à 20 °C : il germe.\nSur coton sec à 20 °C : rien, il manque l'eau.\nSur coton humide au réfrigérateur : rien, il manque la chaleur.\nSur coton humide dans un placard sombre à 20 °C : **il germe** ! La lumière n'était pas indispensable." },
            { t: "verifie", q: "Des lentilles sont posées sur du coton humide dans un placard sombre à 20 °C. Que va-t-il se passer ?", choix: ["Elles ne germent pas, faute de lumière", "Elles germent, car eau, chaleur et air sont réunis", "Elles pourrissent immédiatement"], bonne: 1, explication: "Les trois conditions sont là : eau, chaleur, air. La lumière ne devient utile qu'ensuite, quand les feuilles doivent fabriquer la matière de la plante." },
          ],
        },
      ],
      bilan: "Un cycle de vie tourne sans fin : la fécondation crée un nouvel individu, qui grandit (d'un coup, par mues ou par métamorphose), puis se reproduit à son tour.",
    },

    "6e-svt-04-nutrition-des-animaux": {
      accroche: "Sous un vieux grenier, on trouve parfois de petites boules grises et feutrées. Décortique-en une avec une pince : tu y découvriras des os minuscules et même des crânes de souris ! Qui a laissé ces indices, et que nous apprennent-ils ?",
      objectifs: [
        "Identifier le régime alimentaire d'un animal grâce à des indices",
        "Expliquer pourquoi un animal a besoin de se nourrir",
        "Décrire le trajet et la transformation des aliments dans le tube digestif",
      ],
      sections: [
        {
          titre: "Qui mange quoi ?",
          blocs: [
            { t: "texte", md: "Un animal ne fabrique pas lui-même sa nourriture. Il mange de la **matière organique** déjà fabriquée par d'autres êtres vivants : des végétaux, des animaux, ou les deux." },
            { t: "definition", terme: "Régime alimentaire", md: "L'ensemble de ce qu'un animal mange habituellement. Il peut être **végétarien** (herbivore, granivore, frugivore), **carnivore** (on dit aussi zoophage) ou **omnivore** (végétaux et animaux)." },
            { t: "tableau", titre: "Trois grands régimes", entetes: ["Régime", "Il mange…", "Exemples"], lignes: [["Végétarien", "des végétaux : herbe, graines, fruits", "lapin, vache, mouton, écureuil"], ["Carnivore", "d'autres animaux", "chat, loup, chouette, araignée"], ["Omnivore", "des végétaux et des animaux", "humain, sanglier, ours brun"]] },
            { t: "verifie", q: "Comment appelle-t-on un animal qui mange à la fois des végétaux et des animaux ?", choix: ["Un herbivore", "Un omnivore", "Un carnivore"], bonne: 1, explication: "« Omni » signifie « tout » en latin : l'omnivore mange de tout. L'humain et le sanglier en sont de bons exemples." },
          ],
        },
        {
          titre: "Mener l'enquête : dents, intestin, pelotes",
          blocs: [
            { t: "texte", md: "Même sans voir un animal manger, on peut deviner son régime grâce à son corps.\n\nLes **dents** sont de précieux indices : les **incisives** coupent, les **canines** pointues déchirent la viande, les **molaires** broient. Un carnivore a de longues canines et des molaires tranchantes. Un herbivore n'a souvent pas de canines, mais de larges molaires plates qui écrasent l'herbe." },
            { t: "texte", md: "La **longueur de l'intestin** aussi parle : les végétaux sont longs à digérer. Chez le mouton, l'intestin mesure plus de 20 fois la longueur du corps ; chez le chat, environ 4 fois seulement." },
            { t: "exemple", titre: "La pelote de réjection de la chouette", md: "La chouette avale ses proies entières. Elle digère la chair, mais pas les os, les poils ni les carapaces dures (élytres) des scarabées. Elle les rejette par le bec sous forme d'une **pelote de réjection**.\n\nUne pelote qui contient des crânes de souris et des élytres de scarabées nous apprend que la chouette **mange des rongeurs et des insectes** : elle est **carnivore**." },
            { t: "attention", md: "Une pelote de réjection n'est **pas** un excrément : elle sort par le bec, pas par l'anus. Elle contient ce que l'oiseau n'a pas pu digérer dans son estomac." },
          ],
        },
        {
          titre: "Pourquoi manger ?",
          blocs: [
            { t: "propriete", titre: "Les aliments apportent matière et énergie", md: "Se nourrir sert à **grandir**, à **renouveler** son corps (réparer une blessure, remplacer des cellules), à **bouger** et à **se maintenir en vie** (respirer, garder sa température)." },
            { t: "exemple", titre: "Le chaton qui grossit", md: "Un chaton a doublé de masse en un mois. D'où vient cette nouvelle matière ? Elle ne sort pas de nulle part : elle vient **du lait et des aliments** qu'il a mangés, transformés et intégrés à son propre corps." },
            { t: "verifie", q: "Pourquoi un animal doit-il manger ?", choix: ["Uniquement pour ne pas avoir faim", "Pour obtenir la matière et l'énergie nécessaires à sa croissance, ses mouvements et sa survie", "Seulement pendant sa croissance"], bonne: 1, explication: "Même un adulte qui ne grandit plus doit manger : il renouvelle son corps et dépense de l'énergie pour bouger, respirer et rester en vie." },
          ],
        },
        {
          titre: "Le voyage des aliments",
          blocs: [
            { t: "texte", md: "Une tartine ne peut pas passer telle quelle dans ton sang. Elle doit d'abord être découpée et transformée en particules minuscules : c'est la **digestion**. Elle se déroule dans le **tube digestif**, un long tuyau d'environ **8 mètres** chez l'adulte, plus de cinq fois ta taille !" },
            { t: "schema", titre: "Le tube digestif simplifié", legende: "Les aliments suivent toujours le même trajet : bouche, œsophage, estomac, intestin grêle, gros intestin, anus.", svg: `<svg viewBox="0 0 400 270"><ellipse class="aplat" cx="200" cy="22" rx="14" ry="7"/><ellipse class="trait" cx="200" cy="22" rx="14" ry="7" fill="none"/><path class="trait" d="M200 29 V88" fill="none" stroke-width="3"/><path class="aplat" d="M198 86 Q194 128 234 128 Q268 126 262 96 Q256 80 238 88 Q222 96 210 86 Z"/><path class="trait" d="M198 86 Q194 128 234 128 Q268 126 262 96 Q256 80 238 88 Q222 96 210 86 Z" fill="none"/><path d="M140 226 V150 H262 V226" fill="none" stroke-width="12" stroke="var(--pigment-lavis)"/><path class="trait" d="M140 226 V150 H262 V226 Q262 240 206 240 V256" fill="none" stroke-width="2.5"/><path class="trait-fin" d="M212 127 V162 H245 V174 H157 V186 H245 V198 H157 V210 H245 V222 H152 L142 226" fill="none" stroke-linejoin="round" stroke-width="2"/><text class="texte" x="120" y="26" text-anchor="end">bouche</text><path class="trait-fin" d="M124 22 L184 22"/><text class="texte" x="120" y="64" text-anchor="end">œsophage</text><path class="trait-fin" d="M124 60 L198 60"/><text class="texte" x="290" y="104">estomac</text><path class="trait-fin" d="M286 100 L264 102"/><text class="texte" x="290" y="196">intestin grêle</text><path class="trait-fin" d="M286 192 L246 192"/><text class="texte" x="120" y="196" text-anchor="end">gros intestin</text><path class="trait-fin" d="M124 192 L138 192"/><text class="texte" x="216" y="262">anus</text></svg>` },
            { t: "tableau", titre: "Le rôle de chaque organe", entetes: ["Organe", "Ce qu'il fait"], lignes: [["**Bouche**", "Les dents coupent et broient, la salive humidifie et commence la transformation."], ["**Œsophage**", "Conduit les aliments jusqu'à l'estomac."], ["**Estomac**", "Malaxe les aliments avec des sucs digestifs."], ["**Intestin grêle**", "Termine la digestion ; les **nutriments** passent dans le **sang**."], ["**Gros intestin**", "Récupère de l'eau et forme les excréments."], ["**Anus**", "Rejette les **excréments**."]] },
            { t: "definition", terme: "Nutriment", md: "Une particule issue de la digestion, ==assez petite pour passer dans le sang== à travers la paroi de l'intestin grêle. Le sang la distribue ensuite à toutes les cellules du corps." },
            { t: "attention", md: "Les **excréments** ne sont pas « des aliments digérés » : ils sont surtout formés de ce qui **n'a pas été digéré** (comme les fibres des végétaux), avec de l'eau et des bactéries de l'intestin." },
          ],
        },
      ],
      bilan: "Dents, intestin et pelotes trahissent ce que mange un animal ; dans son tube digestif, les aliments deviennent des nutriments qui, par le sang, construisent et font fonctionner tout son corps.",
    },

    "6e-svt-05-nutrition-des-vegetaux": {
      accroche: "Un grand chêne de plusieurs tonnes est sorti d'un gland de quelques grammes. Il n'a pourtant jamais mangé une seule bouchée, et la terre à son pied n'a presque pas diminué. Alors, d'où vient toute cette matière ?",
      objectifs: [
        "Citer les quatre besoins d'une plante verte",
        "Expliquer que la plante fabrique sa propre matière : la photosynthèse",
        "Associer racines, tige et feuilles à leur rôle",
      ],
      sections: [
        {
          titre: "Une plante ne mange pas la terre",
          blocs: [
            { t: "texte", md: "Au XVIIᵉ siècle, le savant flamand Jean-Baptiste Van Helmont fait une expérience restée célèbre. Il plante un petit saule de 2 kg dans un grand pot de terre bien pesée. Pendant cinq ans, il ne fait que l'arroser." },
            { t: "graphique", type: "barres", titre: "L'expérience de Van Helmont", unite: "kg", donnees: [{ label: "Saule au départ", valeur: 2 }, { label: "Saule après 5 ans", valeur: 76 }, { label: "Terre perdue", valeur: 0.06 }] },
            { t: "exemple", titre: "Ce que disent les mesures", md: "Le saule a gagné 76 − 2 = **74 kg**, alors que la terre n'a perdu qu'environ 60 grammes. La matière de l'arbre ne vient donc **pas de la terre**. Van Helmont pensait qu'elle venait de l'eau. On sait aujourd'hui qu'elle vient de l'eau **et surtout d'un gaz de l'air**, le dioxyde de carbone." },
            { t: "attention", md: "Les plantes ne « mangent » pas la terre ! Le sol leur apporte seulement l'**eau** et les **sels minéraux**. La preuve : on cultive des salades sans aucune terre, les racines dans de l'eau enrichie en sels minéraux, sous une lumière forte. C'est l'**hydroponie**." },
          ],
        },
        {
          titre: "Les quatre besoins d'une plante verte",
          blocs: [
            { t: "liste", titre: "Pour se développer, une plante verte a besoin de :", items: ["**lumière**, captée par les feuilles ;", "**dioxyde de carbone** (CO₂), un gaz pris dans l'air par les feuilles ;", "**eau**, puisée dans le sol par les racines ;", "**sels minéraux**, dissous dans l'eau du sol, puisés eux aussi par les racines."] },
            { t: "exemple", titre: "Lumière ou placard ?", md: "Deux plants de haricot identiques sont arrosés de la même façon. L'un est à la lumière, l'autre dans un placard sombre. Après deux semaines, le plant du placard est **jaune, très allongé et fragile** ; il finira par mourir quand les réserves de sa graine seront épuisées. Sans lumière, la plante ne peut pas fabriquer sa matière." },
            { t: "verifie", q: "Où une plante prélève-t-elle le dioxyde de carbone dont elle a besoin ?", choix: ["Dans le sol, par les racines", "Dans l'air, par les feuilles", "Dans l'eau d'arrosage"], bonne: 1, explication: "Le CO₂ est un gaz de l'air. Il entre dans la feuille par de minuscules ouvertures. Les racines, elles, prélèvent l'eau et les sels minéraux." },
          ],
        },
        {
          titre: "La photosynthèse : une usine dans chaque feuille",
          blocs: [
            { t: "definition", terme: "Photosynthèse", md: "La fabrication de **matière organique** par les parties vertes d'une plante, **à la lumière**, à partir d'**eau**, de **sels minéraux** et de **dioxyde de carbone**. Elle se fait grâce à la **chlorophylle**, le pigment vert des feuilles, et elle rejette du **dioxygène** (O₂)." },
            { t: "schema", titre: "Ce qui entre et ce qui sort d'une plante verte", legende: "Les racines absorbent, la tige transporte, les feuilles fabriquent la matière organique.", svg: `<svg viewBox="0 0 400 260"><circle class="aplat-fort" cx="48" cy="40" r="18"/><path class="trait-fin" d="M48 12 V4 M48 68 V76 M20 40 H12 M76 40 H84 M28 20 L22 14 M68 60 L74 66 M68 20 L74 14 M28 60 L22 66" fill="none"/><path class="trait" d="M82 58 L150 86" marker-end="url(#fl-p)" fill="none"/><text class="texte-pigment" x="30" y="88">lumière</text><line class="trait" x1="0" y1="180" x2="400" y2="180"/><path class="trait" d="M200 180 V60" fill="none" stroke-width="3"/><path class="aplat-fort" d="M200 120 C180 100 150 98 128 108 C150 128 180 130 200 120 Z"/><path class="trait-fin" d="M200 120 C180 100 150 98 128 108 C150 128 180 130 200 120 Z" fill="none"/><path class="aplat-fort" d="M200 92 C220 72 252 70 274 80 C252 100 222 102 200 92 Z"/><path class="trait-fin" d="M200 92 C220 72 252 70 274 80 C252 100 222 102 200 92 Z" fill="none"/><path class="aplat-fort" d="M200 62 C190 44 172 38 156 42 C166 58 184 66 200 62 Z"/><path class="trait-fin" d="M200 62 C190 44 172 38 156 42 C166 58 184 66 200 62 Z" fill="none"/><path class="trait-fin" d="M200 180 L180 210 L170 238 M200 180 L220 214 L236 236 M200 180 L200 244 M180 210 L160 220 M220 214 L246 216" fill="none"/><path class="trait" d="M370 112 L282 90" marker-end="url(#fl)" fill="none"/><text class="texte" x="300" y="128">CO₂ de l'air</text><path class="trait" d="M262 66 L350 40" marker-end="url(#fl-p)" fill="none"/><text class="texte-pigment" x="298" y="34">O₂ rejeté</text><path class="trait" d="M330 236 L252 228" marker-end="url(#fl)" fill="none"/><text class="texte" x="250" y="256">eau + sels minéraux</text><path class="pointille" d="M212 172 V112" marker-end="url(#fl)" fill="none"/><text class="texte-petit" x="218" y="150">sève brute</text><text class="texte-main" x="20" y="132">feuilles</text><path class="trait-fin" d="M82 126 L128 110" fill="none"/><text class="texte-main" x="20" y="166">tige</text><path class="trait-fin" d="M56 162 L196 150" fill="none"/><text class="texte-main" x="20" y="226">racines</text><path class="trait-fin" d="M80 222 L168 222" fill="none"/></svg>` },
            { t: "propriete", titre: "La plante verte est productrice", md: "Une plante verte **fabrique elle-même** sa matière organique : on dit qu'elle est **productrice**. Tous les animaux, eux, dépendent de cette matière fabriquée par les plantes." },
            { t: "verifie", q: "Quel gaz une plante verte rejette-t-elle à la lumière grâce à la photosynthèse ?", choix: ["Du dioxyde de carbone", "Du dioxygène", "De la vapeur de sel"], bonne: 1, explication: "La photosynthèse absorbe du dioxyde de carbone et rejette du dioxygène. C'est ce dioxygène que respirent les animaux, toi compris." },
          ],
        },
        {
          titre: "Racines, tige, feuilles : chacun son travail",
          blocs: [
            { t: "etapes", titre: "Le trajet de l'eau dans la plante", items: [{ titre: "Absorption", md: "L'eau et les sels minéraux entrent par les **poils absorbants** des racines." }, { titre: "Montée", md: "Ils montent dans de petits tuyaux de la tige : c'est la **sève brute**." }, { titre: "Arrivée aux feuilles", md: "L'eau arrive dans les feuilles." }, { titre: "Utilisation", md: "Une partie sert à la photosynthèse ; une grande partie **s'évapore** par de minuscules ouvertures des feuilles." }] },
            { t: "tableau", titre: "Les organes et leur rôle", entetes: ["Organe", "Rôle dans la nutrition"], lignes: [["**Racines**", "Absorbent l'eau et les sels minéraux du sol"], ["**Tige**", "Transporte la sève entre racines et feuilles"], ["**Feuilles**", "Captent la lumière et le CO₂ ; fabriquent la matière organique"]] },
            { t: "texte", md: "La matière fabriquée dans les feuilles est transportée dans toute la plante par la **sève élaborée**. Elle sert à grandir et à faire des **réserves** : dans une graine, un fruit, ou un **tubercule** comme la pomme de terre. Quand tu manges une frite, tu manges de la matière fabriquée à la lumière par les feuilles du plant de pomme de terre !" },
            { t: "savais-tu", md: "Un grand arbre peut faire monter plusieurs centaines de litres d'eau par jour, de ses racines jusqu'à ses feuilles les plus hautes, sans aucune pompe." },
          ],
        },
      ],
      bilan: "Lumière, eau, sels minéraux et CO₂ : avec ces quatre ingrédients, la feuille verte fabrique sa propre matière et rejette le dioxygène que nous respirons.",
    },

    "6e-svt-06-alimentation-et-sante": {
      accroche: "Ton corps renouvelle sans cesse ses cellules : une partie de ce que tu as mangé ce mois-ci est déjà devenue toi. Alors, que mettre dans ton assiette, et que faire de tes journées, pour grandir en forme ?",
      objectifs: [
        "Classer les aliments en groupes et connaître leurs apports",
        "Composer un repas équilibré adapté à ses besoins",
        "Adopter de bonnes habitudes : hygiène, sommeil, activité physique",
      ],
      sections: [
        {
          titre: "Les familles d'aliments",
          blocs: [
            { t: "texte", md: "Aucun aliment ne contient à lui seul tout ce dont le corps a besoin. C'est pourquoi on les range en **groupes**, selon ce qu'ils apportent. En piochant dans chaque groupe, on est sûr de ne manquer de rien." },
            { t: "tableau", titre: "Les groupes d'aliments et leurs apports", entetes: ["Groupe", "Exemples", "Apport principal"], lignes: [["Fruits et légumes", "pomme, carotte, tomate, haricots verts", "vitamines, fibres, eau"], ["Féculents", "pain, pâtes, riz, pommes de terre", "**énergie** durable"], ["Produits laitiers", "lait, yaourt, fromage", "**calcium** pour les os"], ["Viandes, poissons, œufs, légumineuses", "poulet, sardine, œuf, lentilles", "**protéines** pour les muscles"], ["Matières grasses", "beurre, huile", "énergie, certaines vitamines"], ["Produits sucrés", "bonbons, gâteaux, sodas", "énergie rapide, à limiter"], ["Eau", "eau du robinet ou en bouteille", "seule boisson **indispensable**"]] },
            { t: "attention", md: "Supprimer complètement les matières grasses n'est **pas** bon pour la santé ! Le corps en a besoin en petite quantité (pour fabriquer ses cellules, utiliser certaines vitamines). Ce qu'il faut, c'est **ne pas en abuser**." },
            { t: "verifie", q: "Quel élément apporté par les produits laitiers est indispensable à la solidité des os ?", choix: ["Le calcium", "Le sucre", "Les fibres"], bonne: 0, explication: "Le calcium est le principal constituant minéral des os et des dents. À ton âge, tes os grandissent vite : ils en ont particulièrement besoin." },
          ],
        },
        {
          titre: "Composer un repas équilibré",
          blocs: [
            { t: "propriete", titre: "Une alimentation équilibrée", md: "Elle **varie les groupes** d'aliments, **limite** le sucre, le gras et le sel, et se répartit en **plusieurs repas** dans la journée, dont un **petit-déjeuner**." },
            { t: "schema", titre: "Un repas équilibré", legende: "La moitié de l'assiette en fruits et légumes, un quart de féculents, un quart de protéines, avec de l'eau et un produit laitier.", svg: `<svg viewBox="0 0 400 240"><circle class="aplat-papier" cx="140" cy="120" r="104"/><circle class="trait" cx="140" cy="120" r="104" fill="none"/><circle class="trait-fin" cx="140" cy="120" r="92" fill="none"/><path class="aplat" d="M140 28 A92 92 0 0 0 140 212 Z"/><path class="trait" d="M140 28 V212 M140 120 H232" fill="none"/><text class="texte" x="92" y="114" text-anchor="middle">fruits et</text><text class="texte" x="92" y="130" text-anchor="middle">légumes</text><text class="texte-petit" x="92" y="148" text-anchor="middle">la moitié</text><text class="texte" x="182" y="88" text-anchor="middle">féculents</text><text class="texte-petit" x="182" y="104" text-anchor="middle">un quart</text><text class="texte-petit" x="182" y="146" text-anchor="middle">viande, poisson,</text><text class="texte-petit" x="182" y="160" text-anchor="middle">œufs ou</text><text class="texte-petit" x="182" y="174" text-anchor="middle">légumineuses</text><path class="aplat" d="M282 112 L328 112 L324 180 L286 180 Z"/><path class="trait" d="M278 70 L332 70 L324 180 L286 180 Z" fill="none"/><text class="texte" x="305" y="200" text-anchor="middle">eau</text><path class="aplat-papier" d="M350 140 L388 140 L384 180 L354 180 Z"/><path class="trait" d="M350 140 L388 140 L384 180 L354 180 Z" fill="none"/><text class="texte-petit" x="369" y="200" text-anchor="middle">produit</text><text class="texte-petit" x="369" y="214" text-anchor="middle">laitier</text></svg>` },
            { t: "exemple", titre: "Un plateau de cantine équilibré", md: "Salade de tomates (légumes), poisson (protéines), riz (féculents), yaourt (produit laitier), pomme (fruit), et une carafe d'eau. Un gâteau de temps en temps n'est pas interdit : il reste **occasionnel**." },
            { t: "texte", md: "Les besoins ne sont pas les mêmes pour tout le monde. Ils dépendent de l'**âge**, de la **taille** et de l'**activité physique**. Un adolescent de 14 ans qui fait du sport a besoin de plus d'énergie qu'un adulte assis toute la journée : il **grandit** et il **se dépense** beaucoup." },
            { t: "verifie", q: "Un élève saute le petit-déjeuner tous les matins. Quelle conséquence est la plus probable en classe ?", choix: ["Il sera plus concentré", "Il risque d'être fatigué et moins attentif en fin de matinée", "Aucune conséquence"], bonne: 1, explication: "Après une nuit sans manger, le corps a besoin d'énergie. Sans petit-déjeuner, le « coup de fatigue » arrive souvent vers 11 h : l'attention baisse." },
          ],
        },
        {
          titre: "Hygiène, sommeil et activité physique",
          blocs: [
            { t: "texte", md: "Bien manger ne suffit pas. Trois autres piliers protègent ta santé : l'**hygiène**, le **sommeil** et l'**activité physique**." },
            { t: "liste", items: ["**Hygiène** : se laver les mains avant de manger et après être allé aux toilettes limite la transmission des microbes. Se brosser les dents deux fois par jour, deux minutes, avec un dentifrice fluoré, évite les caries.", "**Sommeil** : à 11 ans, il faut dormir **9 à 11 heures** par nuit. Le sommeil sert à grandir, à mémoriser ce que tu as appris et à rester attentif.", "**Activité physique** : au moins **une heure par jour** (60 minutes), selon l'Organisation mondiale de la santé. Elle renforce le cœur, les muscles et les os."] },
            { t: "graphique", type: "barres", titre: "Durée minimale de sommeil conseillée selon l'âge", unite: "heures", donnees: [{ label: "3-5 ans", valeur: 10 }, { label: "6-13 ans", valeur: 9 }, { label: "14-17 ans", valeur: 8 }, { label: "Adulte", valeur: 7 }] },
            { t: "attention", md: "Les **écrans** juste avant de dormir retardent l'endormissement : leur lumière fait croire au cerveau qu'il fait encore jour, et les jeux ou vidéos l'excitent. Mieux vaut les éteindre une heure avant le coucher." },
            { t: "savais-tu", md: "Les caries sont causées par des bactéries de la bouche qui transforment le sucre en acide. C'est cet acide qui attaque l'émail des dents. Moins de sucre et un bon brossage : les bactéries n'ont plus de quoi travailler !" },
          ],
        },
      ],
      bilan: "Des repas variés et réguliers, de l'eau, des mains propres, de longues nuits et une heure de mouvement par jour : voilà le carburant d'un corps qui grandit.",
    },

    "6e-svt-07-peuplement-des-milieux-et-ecosystemes": {
      accroche: "Chaque automne, une forêt laisse tomber des tonnes de feuilles. Pourtant, au printemps suivant, le sol n'est pas enseveli sous des montagnes de feuilles mortes. Qui fait disparaître tout ça, et à quoi cela sert-il ?",
      objectifs: [
        "Construire et lire une chaîne alimentaire",
        "Connaître le rôle des producteurs, des consommateurs et des décomposeurs",
        "Expliquer comment un milieu change de peuplement au fil des saisons",
        "Définir la biodiversité et repérer l'effet des actions humaines",
      ],
      sections: [
        {
          titre: "Un milieu et ses habitants",
          blocs: [
            { t: "definition", terme: "Écosystème", md: "Un **milieu** de vie (le sol, l'eau, le climat) et **tous les êtres vivants** qui y habitent et **interagissent** : ils se nourrissent les uns des autres, s'abritent, se font concurrence. Une mare, une forêt, une haie sont des écosystèmes." },
            { t: "texte", md: "Dans un écosystème, chaque être vivant a besoin des autres. La façon la plus visible de le montrer, c'est de suivre la nourriture : qui mange qui ?" },
          ],
        },
        {
          titre: "Qui est mangé par qui ?",
          blocs: [
            { t: "propriete", titre: "Lire une chaîne alimentaire", md: "Une **chaîne alimentaire** relie des êtres vivants par des flèches. ==La flèche signifie « est mangé par »== : herbe → lapin → renard se lit « l'herbe est mangée par le lapin, qui est mangé par le renard ». La flèche suit le trajet de la matière." },
            { t: "schema", titre: "Une chaîne alimentaire de la forêt et ses décomposeurs", legende: "Flèches en pointillés : feuilles mortes, cadavres et excréments de tous les maillons vont aux décomposeurs, qui les recyclent en matière minérale réutilisée par les plantes.", svg: `<svg viewBox="0 0 400 240"><text class="texte-petit" x="200" y="16" text-anchor="middle">→ se lit « est mangé par »</text><rect class="aplat" x="10" y="28" width="80" height="40" rx="6"/><rect class="trait" x="10" y="28" width="80" height="40" rx="6" fill="none"/><text class="texte" x="50" y="46" text-anchor="middle">feuille</text><text class="texte" x="50" y="61" text-anchor="middle">de chêne</text><rect class="aplat-papier" x="110" y="28" width="80" height="40" rx="6"/><rect class="trait" x="110" y="28" width="80" height="40" rx="6" fill="none"/><text class="texte" x="150" y="53" text-anchor="middle">chenille</text><rect class="aplat-papier" x="210" y="28" width="80" height="40" rx="6"/><rect class="trait" x="210" y="28" width="80" height="40" rx="6" fill="none"/><text class="texte" x="250" y="53" text-anchor="middle">mésange</text><rect class="aplat-papier" x="310" y="28" width="80" height="40" rx="6"/><rect class="trait" x="310" y="28" width="80" height="40" rx="6" fill="none"/><text class="texte" x="350" y="53" text-anchor="middle">épervier</text><path class="trait" d="M91 48 H107" marker-end="url(#fl)"/><path class="trait" d="M191 48 H207" marker-end="url(#fl)"/><path class="trait" d="M291 48 H307" marker-end="url(#fl)"/><text class="texte-pigment" x="50" y="86" text-anchor="middle">producteur</text><text class="texte-petit" x="150" y="84" text-anchor="middle">consommateur</text><text class="texte-petit" x="150" y="97" text-anchor="middle">1er ordre</text><text class="texte-petit" x="250" y="84" text-anchor="middle">consommateur</text><text class="texte-petit" x="250" y="97" text-anchor="middle">2e ordre</text><text class="texte-petit" x="350" y="84" text-anchor="middle">consommateur</text><text class="texte-petit" x="350" y="97" text-anchor="middle">3e ordre</text><rect class="aplat" x="140" y="150" width="240" height="46" rx="8"/><rect class="trait" x="140" y="150" width="240" height="46" rx="8" fill="none"/><text class="texte" x="260" y="169" text-anchor="middle">DÉCOMPOSEURS</text><text class="texte-petit" x="260" y="186" text-anchor="middle">champignons, bactéries, vers de terre</text><path class="pointille" d="M72 104 L150 146" marker-end="url(#fl)"/><path class="pointille" d="M160 104 L190 146" marker-end="url(#fl)"/><path class="pointille" d="M250 104 L250 146" marker-end="url(#fl)"/><path class="pointille" d="M346 104 L320 146" marker-end="url(#fl)"/><path class="trait" d="M138 186 Q40 196 32 102" fill="none" marker-end="url(#fl-p)"/><text class="texte-pigment" x="20" y="226">matière minérale du sol</text></svg>` },
            { t: "texte", md: "Le **premier maillon** est toujours un **producteur** : une plante verte (ou une algue). Pourquoi ? Parce que c'est le seul être vivant capable de **fabriquer sa propre matière** grâce à la lumière. Tous les autres maillons sont des **consommateurs** : ils mangent de la matière déjà fabriquée." },
            { t: "exemple", titre: "La chaîne de la mare", md: "Algues → larves d'insectes → tritons → héron.\nLes algues sont les **producteurs**. Les larves sont des consommateurs de **1ᵉʳ ordre** (herbivores), les tritons de **2ᵉ ordre**, le héron de **3ᵉ ordre**. Au fond, les bactéries décomposent les cadavres et les feuilles mortes." },
            { t: "verifie", q: "Dans la chaîne « algues → daphnies → épinoches → brochet », combien y a-t-il de consommateurs ?", choix: ["2", "3", "4"], bonne: 1, explication: "Les algues sont le producteur. Les daphnies, les épinoches et le brochet mangent tous de la matière déjà fabriquée : ce sont 3 consommateurs." },
          ],
        },
        {
          titre: "Les décomposeurs et les réseaux",
          blocs: [
            { t: "definition", terme: "Décomposeurs", md: "Êtres vivants (champignons, bactéries, vers de terre, cloportes…) qui se nourrissent des **restes** : feuilles mortes, cadavres, excréments. Ils les transforment en **matière minérale** que les plantes absorbent à nouveau par leurs racines." },
            { t: "attention", md: "Les décomposeurs ne sont pas des « mangeurs de déchets » inutiles : sans eux, les restes s'accumuleraient et les plantes manqueraient de sels minéraux. Ils **bouclent le cycle de la matière**. C'est grâce à eux que la forêt n'est pas ensevelie sous ses feuilles mortes !" },
            { t: "texte", md: "Dans la nature, un animal mange rarement une seule sorte de nourriture, et il a souvent plusieurs prédateurs. Les chaînes s'entrecroisent et forment un **réseau alimentaire**. Si un maillon disparaît, tout le réseau est perturbé.\n\nPar exemple, si les renards d'une forêt disparaissent à cause d'une maladie, les lapins et les campagnols, qui ne sont plus chassés, deviennent **plus nombreux** à court terme. Ils mangent alors plus de plantes…" },
          ],
        },
        {
          titre: "Le peuplement change avec les saisons",
          blocs: [
            { t: "texte", md: "En hiver, il fait froid et la nourriture se fait rare. Le milieu semble se vider. Pourtant, les êtres vivants n'ont pas disparu : chacun a sa **stratégie** pour passer la mauvaise saison. Au printemps, le milieu se repeuple." },
            { t: "tableau", titre: "Comment passer l'hiver ?", entetes: ["Stratégie", "Ce qui se passe", "Exemples"], lignes: [["**Migrer**", "Partir vers une région plus chaude", "hirondelle, cigogne (vers l'Afrique)"], ["**Hiberner**", "Dormir profondément, le corps refroidi, dans un abri", "hérisson, marmotte, loir"], ["**Vie ralentie**", "Rester immobile, à l'abri du gel", "grenouille, couleuvre, chêne (sans feuilles)"], ["**Forme résistante**", "Passer l'hiver sous une autre forme du cycle de vie", "œufs, chrysalide du papillon piéride"], ["**Graine ou bulbe**", "La plante meurt ou disparaît sous terre ; une partie survit", "coquelicot (graines), tulipe (bulbe)"]] },
            { t: "verifie", q: "Un arbre perd ses feuilles en automne. Pourquoi n'est-il pas mort ?", choix: ["Il est en vie ralentie : ses bourgeons, protégés, donneront de nouvelles feuilles au printemps", "Il est mort, mais repoussera grâce à ses graines", "Il fabrique encore beaucoup de matière sans feuilles"], bonne: 0, explication: "Sans feuilles, l'arbre ne fait plus de photosynthèse et ralentit sa vie en puisant dans ses réserves. Ses bourgeons, bien protégés par des écailles, s'ouvriront au printemps." },
            { t: "savais-tu", md: "La plupart des papillons adultes meurent à l'automne : l'espèce passe l'hiver sous forme d'œufs, de chenilles ou de chrysalides. Quelques espèces, comme le citron, hivernent même à l'état adulte, cachées dans le lierre." },
          ],
        },
        {
          titre: "La biodiversité, une richesse fragile",
          blocs: [
            { t: "definition", terme: "Biodiversité", md: "La **diversité du vivant** : diversité des **espèces**, des **milieux** et des **individus** au sein d'une même espèce." },
            { t: "tableau", titre: "Les humains et la biodiversité", entetes: ["Actions qui la réduisent", "Actions qui la protègent"], lignes: [["Déforestation", "Créer des réserves naturelles"], ["Pollution de l'eau et de l'air", "Planter des haies, laisser des coins de prairie fleurie"], ["Pesticides qui tuent les insectes", "Limiter les pesticides, installer des nichoirs"], ["Déchets abandonnés", "Réduire et trier ses déchets"]] },
            { t: "texte", md: "Protéger la biodiversité, c'est aussi **nous protéger** : les insectes pollinisent les fruits et légumes que nous mangeons, les plantes produisent du dioxygène, les décomposeurs rendent les sols fertiles." },
          ],
        },
      ],
      bilan: "Producteurs, consommateurs et décomposeurs forment un réseau où la matière circule en boucle : chaque espèce compte, et l'humain peut l'abîmer ou le protéger.",
    },

    "6e-svt-08-la-terre-dans-le-systeme-solaire": {
      accroche: "Chaque matin, le Soleil « se lève » à l'est, traverse le ciel et « se couche » à l'ouest. Pendant des siècles, presque tout le monde a cru qu'il tournait autour de nous. Et si c'était nous qui bougions ?",
      objectifs: [
        "Situer la Terre parmi les planètes du système solaire",
        "Expliquer le jour et la nuit par la rotation, l'année par la révolution",
        "Expliquer les saisons par l'inclinaison de l'axe de la Terre",
        "Décrire les phases de la Lune",
      ],
      sections: [
        {
          titre: "Notre adresse dans l'espace",
          blocs: [
            { t: "texte", md: "Le **système solaire** est formé d'une étoile, le **Soleil**, et de tout ce qui tourne autour de lui : huit **planètes**, leurs satellites, des astéroïdes et des comètes." },
            { t: "definition", terme: "Étoile ou planète ?", md: "Une **étoile** comme le Soleil **produit sa propre lumière**. Une **planète** ne brille pas par elle-même : elle **renvoie** la lumière du Soleil. Un **satellite** est un astre qui tourne autour d'une planète, comme la Lune autour de la Terre." },
            { t: "graphique", type: "barres", titre: "Distance moyenne des planètes au Soleil", unite: "millions de km", donnees: [{ label: "Mercure", valeur: 58 }, { label: "Vénus", valeur: 108 }, { label: "Terre", valeur: 150 }, { label: "Mars", valeur: 228 }, { label: "Jupiter", valeur: 778 }, { label: "Saturne", valeur: 1434 }, { label: "Uranus", valeur: 2871 }, { label: "Neptune", valeur: 4495 }] },
            { t: "astuce", md: "Pour retenir l'ordre des planètes : « **Me V**oici **T**out **M**ouillé, **J**e **S**uis **U**n **N**uage » : Mercure, Vénus, Terre, Mars (petites et **rocheuses**), puis Jupiter, Saturne, Uranus, Neptune (**géantes gazeuses**)." },
            { t: "attention", md: "La Lune ne produit **pas** de lumière ! Elle nous paraît brillante parce qu'elle renvoie la lumière du Soleil, comme un miroir un peu terne." },
          ],
        },
        {
          titre: "Le jour, la nuit et l'année",
          blocs: [
            { t: "texte", md: "La Terre **tourne sur elle-même** autour d'un axe imaginaire qui passe par les pôles. Il y a donc toujours une moitié éclairée par le Soleil (le jour) et une moitié dans l'ombre (la nuit). En tournant, chaque endroit passe du jour à la nuit. Le Soleil semble se déplacer dans le ciel, mais **c'est la Terre qui tourne**, d'ouest en est." },
            { t: "tableau", titre: "Deux mouvements de la Terre", entetes: ["Mouvement", "Durée", "Conséquence"], lignes: [["**Rotation** : la Terre tourne sur elle-même", "24 heures", "l'alternance du jour et de la nuit"], ["**Révolution** : la Terre tourne autour du Soleil", "365 jours et environ un quart", "une année"], ["La Lune tourne autour de la Terre", "environ un mois", "le cycle des phases de la Lune"]] },
            { t: "exemple", titre: "Pourquoi un 29 février ?", etapes: ["Une révolution dure environ 365 jours et un quart.", "Un calendrier de 365 jours prend donc un quart de jour de retard chaque année.", "En 4 ans : 4 × ¼ = 1 jour de retard.", "On ajoute alors un jour, le 29 février : c'est l'**année bissextile**."] },
            { t: "verifie", q: "Pourquoi y a-t-il une alternance de jour et de nuit sur Terre ?", choix: ["Parce que le Soleil tourne autour de la Terre", "Parce que la Terre tourne sur elle-même en 24 heures", "Parce que la Terre tourne autour du Soleil en un an"], bonne: 1, explication: "C'est la rotation de la Terre sur elle-même qui fait passer chaque lieu de la moitié éclairée à la moitié dans l'ombre. La révolution autour du Soleil, elle, donne l'année." },
          ],
        },
        {
          titre: "Pourquoi des saisons ?",
          blocs: [
            { t: "propriete", titre: "La cause des saisons", md: "Les saisons sont dues à l'**inclinaison de l'axe de rotation** de la Terre (environ **23°**). Cet axe garde toujours la même direction pendant que la Terre tourne autour du Soleil. ==Ce n'est pas la distance au Soleil qui explique les saisons.==" },
            { t: "schema", titre: "La Terre autour du Soleil au fil de l'année", legende: "Vue de l'espace, sans respecter les distances. L'axe garde la même direction : en juin, l'hémisphère nord est penché vers le Soleil (été) ; en décembre, il est penché à l'opposé (hiver).", svg: `<svg viewBox="0 0 400 260"><ellipse class="pointille" cx="200" cy="130" rx="160" ry="85" fill="none"/><path class="trait-fin" d="M62 174 Q90 200 130 210" fill="none" marker-end="url(#fl)"/><circle class="aplat-fort" cx="200" cy="130" r="22"/><circle class="trait" cx="200" cy="130" r="22" fill="none"/><text class="texte" x="200" y="134" text-anchor="middle">Soleil</text><circle class="aplat-papier" cx="40" cy="130" r="14"/><path d="M40 116 A14 14 0 0 0 40 144 Z" fill="var(--encre)" opacity="0.35"/><circle class="trait" cx="40" cy="130" r="14" fill="none"/><path class="trait" d="M33 147 L47 113" fill="none"/><text class="texte-petit" x="50" y="111">N</text><text class="texte" x="40" y="200" text-anchor="middle">juin</text><text class="texte-petit" x="40" y="214" text-anchor="middle">été au nord</text><circle class="aplat-papier" cx="360" cy="130" r="14"/><path d="M360 116 A14 14 0 0 1 360 144 Z" fill="var(--encre)" opacity="0.35"/><circle class="trait" cx="360" cy="130" r="14" fill="none"/><path class="trait" d="M353 147 L367 113" fill="none"/><text class="texte-petit" x="370" y="111">N</text><text class="texte" x="360" y="200" text-anchor="middle">décembre</text><text class="texte-petit" x="360" y="214" text-anchor="middle">hiver au nord</text><circle class="aplat-papier" cx="200" cy="45" r="14"/><path d="M186 45 A14 14 0 0 1 214 45 Z" fill="var(--encre)" opacity="0.35"/><circle class="trait" cx="200" cy="45" r="14" fill="none"/><path class="trait" d="M193 62 L207 28" fill="none"/><text class="texte-petit" x="210" y="26">N</text><text class="texte" x="226" y="20">mars</text><text class="texte-petit" x="262" y="20">équinoxe</text><circle class="aplat-papier" cx="200" cy="215" r="14"/><path d="M186 215 A14 14 0 0 0 214 215 Z" fill="var(--encre)" opacity="0.35"/><circle class="trait" cx="200" cy="215" r="14" fill="none"/><path class="trait" d="M193 232 L207 198" fill="none"/><text class="texte-petit" x="210" y="196">N</text><text class="texte" x="222" y="238">septembre</text><text class="texte-petit" x="296" y="238">équinoxe</text></svg>` },
            { t: "texte", md: "En **été**, notre hémisphère est penché vers le Soleil. Le Soleil monte **haut** dans le ciel : ses rayons arrivent plus directement et chauffent davantage. Les **jours sont plus longs** que les nuits. En **hiver**, c'est l'inverse : le Soleil reste bas, ses rayons rasants chauffent peu, et les jours sont courts." },
            { t: "attention", md: "La Terre est un peu **plus proche** du Soleil début janvier qu'en juillet ! Si la distance expliquait les saisons, nous aurions l'été en janvier. Autre preuve : quand c'est l'été en France, c'est **l'hiver en Australie**, de l'autre côté de l'équateur. Les deux hémisphères sont pourtant à la même distance du Soleil." },
            { t: "verifie", q: "Quelle est la cause des saisons ?", choix: ["La Terre s'approche et s'éloigne du Soleil", "L'inclinaison de l'axe de rotation de la Terre", "Le Soleil chauffe plus fort en été"], bonne: 1, explication: "L'axe incliné fait qu'au fil de l'année, chaque hémisphère est tour à tour penché vers le Soleil (été) ou à l'opposé (hiver). La distance varie trop peu pour jouer ce rôle." },
          ],
        },
        {
          titre: "La Lune et ses phases",
          blocs: [
            { t: "texte", md: "La **Lune** est le **satellite naturel** de la Terre. Le Soleil en éclaire toujours une moitié. Mais en tournant autour de nous, la Lune nous montre cette moitié éclairée sous un angle qui change : on voit tantôt toute la partie éclairée, tantôt une partie seulement, tantôt rien. Ce sont les **phases** de la Lune." },
            { t: "etapes", titre: "Le cycle des phases (environ 29,5 jours)", cycle: true, items: [{ titre: "Nouvelle lune", md: "La face éclairée est tournée vers le Soleil : on ne voit rien." }, { titre: "Premier croissant", md: "Un fin croissant apparaît le soir." }, { titre: "Premier quartier", md: "On voit une moitié de disque éclairée." }, { titre: "Pleine lune", md: "Tout le disque visible est éclairé." }, { titre: "Dernier quartier", md: "L'autre moitié du disque est éclairée." }, { titre: "Dernier croissant", md: "Un fin croissant visible au petit matin, avant la nouvelle lune." }] },
            { t: "astuce", md: "« La Lune est menteuse » : vue depuis la France, quand elle forme un **D**, elle est **croissante** ; quand elle forme un **C**, elle est **décroissante** !" },
            { t: "savais-tu", md: "La Lune nous montre toujours **la même face** : elle tourne sur elle-même exactement dans le temps qu'il lui faut pour faire le tour de la Terre. Le mot « mois » vient d'ailleurs du cycle de la Lune." },
          ],
        },
      ],
      bilan: "La Terre tourne sur elle-même (le jour), autour du Soleil (l'année), avec un axe penché (les saisons), et la Lune qui l'accompagne change de visage chaque mois.",
    },

    "6e-svt-09-phenomenes-geologiques-et-meteorologiques": {
      accroche: "En 1943, au Mexique, un paysan voit son champ de maïs se fendre, fumer… puis cracher des cendres. Un an plus tard, une montagne de plus de 300 mètres se dresse à la place : le volcan Paricutín est né. Notre planète, si calme en apparence, est bien vivante !",
      objectifs: [
        "Décrire un séisme et une éruption volcanique, et les risques associés",
        "Expliquer l'érosion et reconnaître quelques roches",
        "Distinguer météo et climat",
        "Décrire le cycle de l'eau",
      ],
      sections: [
        {
          titre: "Quand le sol tremble : les séismes",
          blocs: [
            { t: "definition", terme: "Séisme", md: "Une **secousse brutale du sol** (un tremblement de terre), provoquée par une **cassure** des roches en profondeur, le long d'une **faille**. Le point de départ en profondeur est le **foyer** ; le point de la surface situé juste au-dessus est l'**épicentre**." },
            { t: "schema", titre: "Foyer, épicentre et ondes sismiques", legende: "Les ondes sismiques partent du foyer dans toutes les directions. C'est à l'épicentre qu'elles arrivent en premier à la surface.", svg: `<svg viewBox="0 0 400 220"><rect class="aplat-papier" x="0" y="50" width="400" height="170"/><line class="trait" x1="0" y1="50" x2="400" y2="50"/><rect class="aplat" x="100" y="32" width="24" height="18"/><path class="trait-fin" d="M100 50 V32 H124 V50 M97 32 L112 21 L127 32" fill="none"/><rect class="aplat" x="300" y="30" width="20" height="20"/><path class="trait-fin" d="M300 50 V30 H320 V50 M297 30 L310 20 L323 30" fill="none"/><path class="trait" d="M150 215 L250 52" fill="none"/><circle class="pointille" cx="200" cy="133" r="22" fill="none"/><circle class="pointille" cx="200" cy="133" r="44" fill="none"/><circle class="pointille" cx="200" cy="133" r="66" fill="none"/><path class="pointille" d="M200 128 V56" fill="none"/><circle cx="200" cy="133" r="5" fill="var(--pigment)"/><path d="M193 50 L207 50 L200 40 Z" fill="var(--pigment)"/><text class="texte" x="200" y="32" text-anchor="middle">épicentre</text><text class="texte" x="20" y="150">foyer</text><path class="trait-fin" d="M58 146 L194 134" fill="none"/><text class="texte" x="262" y="70">faille</text><text class="texte" x="282" y="140">ondes sismiques</text></svg>` },
            { t: "texte", md: "On ne peut ni prévoir précisément ni empêcher un séisme. Mais on peut **réduire les risques** : construire des bâtiments **parasismiques** (qui plient sans s'effondrer), apprendre les bons gestes (se protéger sous une table solide, s'éloigner des vitres), faire des exercices d'évacuation." },
            { t: "verifie", q: "Deux séismes de même force frappent une région aux bâtiments parasismiques et une région aux constructions fragiles. Que peut-on dire ?", choix: ["Les dégâts seront les mêmes partout", "Les dégâts et les victimes seront probablement moins nombreux dans la région parasismique", "Les bâtiments parasismiques empêchent le séisme"], bonne: 1, explication: "Le séisme est le même, mais le **risque** dépend aussi de la préparation des humains. Des constructions adaptées sauvent de nombreuses vies." },
          ],
        },
        {
          titre: "Les volcans",
          blocs: [
            { t: "texte", md: "Sous un volcan, à plusieurs kilomètres de profondeur, se trouve un réservoir de **magma** : de la roche fondue, mélangée à des gaz. Poussé par ces gaz, le magma monte par la **cheminée** et sort par le **cratère**. À l'air libre, on l'appelle la **lave**." },
            { t: "schema", titre: "Coupe d'un volcan en éruption", legende: "Le magma monte du réservoir par la cheminée ; en surface, il devient de la lave qui s'écoule, tandis que gaz et cendres s'échappent.", svg: `<svg viewBox="0 0 400 300"><path class="aplat-papier" d="M0 190 H110 L185 72 L192 82 H208 L215 72 L290 190 H400 V300 H0 Z"/><path class="trait" d="M0 190 H110 L185 72 L192 82 H208 L215 72 L290 190 H400" fill="none"/><ellipse class="aplat-fort" cx="200" cy="262" rx="75" ry="22"/><ellipse class="trait" cx="200" cy="262" rx="75" ry="22" fill="none"/><rect class="aplat-fort" x="193" y="82" width="14" height="162"/><path class="trait-fin" d="M193 82 V242 M207 82 V242" fill="none"/><path class="aplat-fort" d="M212 72 L217 68 L297 186 L306 190 L290 190 Z"/><path class="trait-fin" d="M212 72 L217 68 L297 186 L306 190 L290 190 Z" fill="none"/><ellipse class="aplat" cx="175" cy="52" rx="20" ry="12"/><ellipse class="aplat" cx="228" cy="30" rx="22" ry="13"/><ellipse class="aplat" cx="200" cy="42" rx="28" ry="16"/><ellipse class="trait-fin" cx="200" cy="42" rx="28" ry="16" fill="none"/><text class="texte" x="258" y="34">gaz et cendres</text><text class="texte" x="120" y="70" text-anchor="end">cratère</text><path class="trait-fin" d="M124 66 L188 80" fill="none"/><text class="texte" x="120" y="150" text-anchor="end">cheminée</text><path class="trait-fin" d="M124 146 L192 150" fill="none"/><text class="texte" x="300" y="122">coulée de lave</text><path class="trait-fin" d="M298 120 L258 126" fill="none"/><text class="texte-petit" x="214" y="214">magma</text><text class="texte" x="200" y="297" text-anchor="middle">réservoir de magma</text></svg>` },
            { t: "tableau", titre: "Deux types d'éruptions", entetes: ["Éruption", "Magma", "Ce qu'on observe", "Exemple"], lignes: [["**Effusive**", "fluide", "des coulées de lave qui s'écoulent", "Piton de la Fournaise (La Réunion)"], ["**Explosive**", "pâteux", "des explosions, des nuées de cendres et de gaz", "montagne Pelée (Martinique), 1902"]] },
            { t: "attention", md: "Un volcan ne « crache pas du feu » ! Ce qui brille en rouge orangé, c'est de la **roche fondue** à plus de **1 000 °C**. Il n'y a pas de flammes comme dans un feu de bois. Pour réduire les risques, on **surveille** les volcans (secousses, gonflement du sol, gaz) et on prépare l'**évacuation** des habitants." },
          ],
        },
        {
          titre: "L'érosion et les roches",
          blocs: [
            { t: "definition", terme: "Érosion", md: "L'**usure des roches** par l'eau, le vent, le gel et les racines des plantes. Les débris arrachés sont **transportés** puis **déposés** : ce sont les **sédiments**, qui peuvent, avec le temps, former de nouvelles roches (grès, calcaire)." },
            { t: "exemple", titre: "L'histoire d'un grain de sable", etapes: ["En montagne, l'eau gèle dans une fissure : en gelant, elle **prend plus de place** et fait éclater la roche.", "Des fragments tombent et sont emportés par le torrent.", "Dans la rivière, ils sont roulés, cassés et arrondis : galets, puis sable.", "Le sable se dépose à l'embouchure et sur la plage. Avec le temps, il peut devenir du grès."] },
            { t: "tableau", titre: "Reconnaître quelques roches", entetes: ["Roche", "Aspect", "Origine ou test"], lignes: [["**Granite**", "grenu, dur, cristaux visibles", "refroidi lentement en profondeur"], ["**Basalte**", "sombre, grain très fin", "lave volcanique refroidie vite"], ["**Calcaire**", "clair, souvent avec des fossiles", "fait des bulles avec l'acide"], ["**Argile**", "molle, colle aux doigts", "imperméable quand elle est mouillée"]] },
          ],
        },
        {
          titre: "Météo, climat et cycle de l'eau",
          blocs: [
            { t: "propriete", titre: "Météo ou climat ?", md: "La **météo** décrit le temps qu'il fait **à un endroit et à un moment précis** : « Il neige ce matin à Grenoble. »\n\nLe **climat** décrit le temps **moyen** d'une région sur une **longue durée** (au moins 30 ans) : « En Bretagne, les hivers sont doux et pluvieux. »" },
            { t: "attention", md: "Une journée très froide en janvier ne prouve **pas** que le climat ne se réchauffe pas. Une journée, c'est de la météo ! Le réchauffement climatique se mesure sur des **moyennes** de dizaines d'années." },
            { t: "etapes", titre: "Le cycle de l'eau", cycle: true, items: [{ titre: "Évaporation", md: "Chauffée par le Soleil, l'eau des mers, des lacs et des plantes devient **vapeur d'eau**." }, { titre: "Condensation", md: "En altitude, il fait froid : la vapeur se transforme en fines gouttelettes qui forment les **nuages**." }, { titre: "Précipitations", md: "Les gouttes grossissent et retombent : **pluie**, neige, grêle." }, { titre: "Ruissellement et infiltration", md: "L'eau coule sur le sol ou s'infiltre dans les nappes souterraines." }, { titre: "Retour à la mer", md: "Les rivières ramènent l'eau à la mer, et le cycle recommence." }] },
            { t: "texte", md: "La quantité d'eau sur Terre **ne change pas** : elle **circule** sans cesse entre les mers, l'air et les continents. L'eau que tu bois a peut-être déjà été un nuage, un glacier… ou une goutte de pluie au temps des dinosaures." },
            { t: "verifie", q: "Laquelle de ces phrases parle du climat et non de la météo ?", choix: ["Demain, il pleuvra à Lille", "Il fait 30 °C cet après-midi à Nîmes", "Dans le sud de la France, les étés sont chauds et secs"], bonne: 2, explication: "Seule la troisième phrase décrit le temps moyen d'une région sur de longues années : c'est le climat. Les deux autres parlent d'un moment précis : c'est la météo." },
          ],
        },
      ],
      bilan: "Séismes, volcans et érosion façonnent sans cesse les paysages, tandis que l'eau circule en boucle entre mer, ciel et terre : la Terre est une planète active.",
    },

    "6e-svt-10-demarche-scientifique": {
      accroche: "Tu as oublié des graines au fond d'un placard, dans le noir… et elles ont germé ! Pourtant, tu pensais que les plantes avaient besoin de lumière. Comment savoir qui a raison ? Pas en discutant : en enquêtant comme un scientifique.",
      objectifs: [
        "Formuler une question et une hypothèse testable à partir d'une observation",
        "Concevoir une expérience avec un témoin, en ne faisant varier qu'un facteur",
        "Mesurer, présenter des résultats et conclure",
      ],
      sections: [
        {
          titre: "De l'observation à l'hypothèse",
          blocs: [
            { t: "texte", md: "Tout commence par une **observation** qui étonne et pose une **question** : « Pourquoi la mousse pousse-t-elle surtout du côté nord des troncs ? »\n\nOn propose alors une réponse possible : une **hypothèse**. Elle doit pouvoir être **testée** par une expérience ou une observation." },
            { t: "definition", terme: "Hypothèse", md: "Une **réponse possible** à une question scientifique, que l'on peut **tester**. Ce n'est ni une certitude, ni une simple opinion." },
            { t: "exemple", titre: "Testable ou pas ?", md: "« La mousse pousse côté nord **parce que ce côté reste plus humide**. » : c'est une hypothèse testable. On peut mesurer l'humidité des deux côtés du tronc.\n\n« La mousse aime le nord. » : impossible à tester, ce n'est pas une hypothèse scientifique." },
            { t: "etapes", titre: "Les six étapes de la démarche scientifique", items: [{ titre: "Observation", md: "Je remarque un fait étonnant." }, { titre: "Question", md: "Je me demande pourquoi ou comment." }, { titre: "Hypothèse", md: "Je propose une réponse possible, testable." }, { titre: "Expérience", md: "Je teste en ne faisant varier qu'**un seul facteur**." }, { titre: "Résultats", md: "Je mesure et je note dans un tableau ou un graphique." }, { titre: "Conclusion", md: "Je reviens à l'hypothèse : confirmée ou rejetée ?" }] },
          ],
        },
        {
          titre: "Une expérience juste : un seul facteur et un témoin",
          blocs: [
            { t: "propriete", titre: "La règle du facteur unique", md: "Dans une expérience, on ne fait varier qu'**un seul facteur** à la fois : celui que l'on veut étudier. Le montage **témoin** est **identique en tout point** au montage test, **sauf pour ce facteur**. Il sert de comparaison." },
            { t: "schema", titre: "La lumière est-elle nécessaire à la germination ?", legende: "Même nombre de graines, même coton humide, même température : seule la lumière change entre les deux montages.", svg: `<svg viewBox="0 0 400 230"><text class="texte-main" x="100" y="22" text-anchor="middle">Montage témoin</text><text class="texte-main" x="300" y="22" text-anchor="middle">Montage test</text><circle class="aplat-fort" cx="100" cy="62" r="12"/><path class="trait-fin" d="M100 42 V36 M100 82 V88 M80 62 H74 M120 62 H126 M86 48 L82 44 M114 76 L118 80 M114 48 L118 44 M86 76 L82 80" fill="none"/><text class="texte-petit" x="132" y="66">lumière</text><ellipse class="aplat-papier" cx="100" cy="150" rx="70" ry="18"/><ellipse class="trait" cx="100" cy="150" rx="70" ry="18" fill="none"/><ellipse class="aplat" cx="100" cy="147" rx="62" ry="13"/><g fill="var(--encre)"><ellipse cx="56" cy="145" rx="4" ry="2.5"/><ellipse cx="68" cy="145" rx="4" ry="2.5"/><ellipse cx="80" cy="145" rx="4" ry="2.5"/><ellipse cx="92" cy="145" rx="4" ry="2.5"/><ellipse cx="104" cy="145" rx="4" ry="2.5"/><ellipse cx="116" cy="145" rx="4" ry="2.5"/><ellipse cx="128" cy="145" rx="4" ry="2.5"/><ellipse cx="140" cy="145" rx="4" ry="2.5"/><ellipse cx="80" cy="153" rx="4" ry="2.5"/><ellipse cx="120" cy="153" rx="4" ry="2.5"/></g><ellipse class="aplat-papier" cx="300" cy="150" rx="70" ry="18"/><ellipse class="trait" cx="300" cy="150" rx="70" ry="18" fill="none"/><ellipse class="aplat" cx="300" cy="147" rx="62" ry="13"/><g fill="var(--encre)"><ellipse cx="256" cy="145" rx="4" ry="2.5"/><ellipse cx="268" cy="145" rx="4" ry="2.5"/><ellipse cx="280" cy="145" rx="4" ry="2.5"/><ellipse cx="292" cy="145" rx="4" ry="2.5"/><ellipse cx="304" cy="145" rx="4" ry="2.5"/><ellipse cx="316" cy="145" rx="4" ry="2.5"/><ellipse cx="328" cy="145" rx="4" ry="2.5"/><ellipse cx="340" cy="145" rx="4" ry="2.5"/><ellipse cx="280" cy="153" rx="4" ry="2.5"/><ellipse cx="320" cy="153" rx="4" ry="2.5"/></g><rect x="222" y="52" width="156" height="122" rx="4" fill="var(--encre)" opacity="0.18"/><rect class="trait" x="222" y="52" width="156" height="122" rx="4" fill="none"/><text class="texte-petit" x="300" y="76" text-anchor="middle">carton opaque :</text><text class="texte-petit" x="300" y="90" text-anchor="middle">obscurité</text><text class="texte-pigment" x="200" y="200" text-anchor="middle">Seul facteur qui varie : la lumière</text><text class="texte-petit" x="200" y="220" text-anchor="middle">Identiques : 10 graines, coton humide, 20 °C</text></svg>` },
            { t: "attention", md: "Faire varier plusieurs facteurs à la fois ne fait **pas** gagner de temps : on ne peut plus savoir lequel est responsable du résultat.\n\nExemple : une élève compare une plante **avec musique près de la fenêtre** et une plante **sans musique au fond de la salle**. Si la première pousse mieux, est-ce grâce à la musique… ou à la lumière ? Impossible de conclure !" },
            { t: "verifie", q: "On veut tester si la lumière est nécessaire à la germination. Quel protocole est correct ?", choix: ["Des graines arrosées à la lumière, des graines sèches dans le noir", "Des graines identiques, même eau, même température, les unes à la lumière, les autres dans le noir", "Des graines à la lumière seulement"], bonne: 1, explication: "Seule la lumière doit changer entre les deux lots. Dans le premier protocole, l'eau et la lumière changent en même temps : on ne pourrait pas savoir lequel compte. Sans lot dans le noir, aucune comparaison n'est possible." },
          ],
        },
        {
          titre: "Mesurer et présenter ses résultats",
          blocs: [
            { t: "tableau", titre: "Chaque grandeur a son instrument", entetes: ["Grandeur", "Instrument", "Unité"], lignes: [["Longueur d'une tige", "règle graduée", "cm, mm"], ["Masse d'une graine", "balance", "g"], ["Température de l'eau", "thermomètre", "°C"], ["Durée d'une réaction", "chronomètre", "s, min"], ["Volume d'eau", "éprouvette graduée", "mL"]] },
            { t: "exemple", titre: "Faire la moyenne de plusieurs mesures", md: "Trois élèves mesurent la même tige : 8,2 cm, 8,4 cm et 8,3 cm.\nMoyenne : (8,2 + 8,4 + 8,3) ÷ 3 = 24,9 ÷ 3 = **8,3 cm**.\nPlusieurs mesures limitent l'effet d'une petite erreur de lecture." },
            { t: "graphique", type: "barres", titre: "Graines germées après 5 jours (sur 10)", unite: "graines", donnees: [{ label: "Témoin (lumière)", valeur: 9 }, { label: "Test (obscurité)", valeur: 9 }] },
            { t: "astuce", md: "Écris toujours l'**unité** à côté d'un nombre : « 8,3 » ne veut rien dire, « 8,3 cm » est une mesure." },
          ],
        },
        {
          titre: "Conclure et recommencer",
          blocs: [
            { t: "texte", md: "La **conclusion** revient toujours à l'hypothèse de départ. Dans notre expérience, l'hypothèse était : « les graines ont besoin de lumière pour germer ». Or elles germent aussi bien dans le noir qu'à la lumière. L'hypothèse est donc **rejetée** : la lumière n'est pas nécessaire à la germination." },
            { t: "propriete", titre: "Une hypothèse rejetée n'est pas un échec", md: "Que l'hypothèse soit **confirmée** ou **rejetée**, on a appris quelque chose. Une hypothèse rejetée permet d'en proposer une nouvelle (« les graines ont besoin d'eau ? ») et de relancer l'enquête." },
            { t: "texte", md: "Un résultat scientifique doit pouvoir être **reproduit** par d'autres personnes. C'est pourquoi les scientifiques **répètent** leurs expériences, avec plusieurs graines, plusieurs fois : un résultat obtenu une seule fois peut être dû au hasard." },
            { t: "exemple", titre: "Les vers de farine aiment-ils l'obscurité ?", md: "On place 10 vers au milieu d'une boîte dont une moitié est couverte. Même température, même nourriture partout : seule la lumière varie. Après dix minutes, 9 vers sont du côté sombre. L'hypothèse est **confirmée**… et on recommencera pour en être sûr !" },
            { t: "verifie", q: "Comment appelle-t-on le montage de comparaison, identique au montage test sauf pour le facteur étudié ?", choix: ["Le montage modèle", "Le montage témoin", "Le montage final"], bonne: 1, explication: "C'est le témoin : il « témoigne » de ce qui se passe sans la modification étudiée. Sans lui, impossible de savoir si le facteur testé a un effet." },
          ],
        },
      ],
      bilan: "Observer, questionner, supposer, tester un seul facteur face à un témoin, mesurer, conclure : voilà comment la science transforme une simple curiosité en connaissance solide.",
    },
  },
};
