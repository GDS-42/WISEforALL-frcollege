// Cours ÉCLORE — 6e Histoire. Schéma : docs/COURS.md
export default {
  id: "6e-histoire",
  chapitres: {
    "6e-histoire-01-debuts-humanite": {
      accroche: "Septembre 1940, en Dordogne. Quatre adolescents se glissent dans un trou au pied d'un arbre déraciné. À la lueur d'une lampe, ils découvrent des chevaux, des taureaux et des cerfs peints sur les parois. Qui a peint ces animaux, et comment le savoir alors qu'aucun texte n'en parle ?",
      objectifs: [
        "Situer en Afrique l'apparition des premiers humains et raconter leurs migrations",
        "Décrire la vie des chasseurs-cueilleurs nomades du Paléolithique",
        "Expliquer comment les archéologues connaissent un passé sans écriture",
      ],
      sections: [
        {
          titre: "Comment connaître un passé sans écriture ?",
          blocs: [
            { t: "texte", md: "Pendant des centaines de milliers d'années, les humains n'ont laissé aucun texte, car l'écriture n'existait pas. Cette immense période s'appelle la **Préhistoire** : elle se termine avec l'invention de l'écriture, vers −3300.\n\nPour la connaître, on fait parler les **traces** restées dans le sol : os, outils, foyers, peintures." },
            { t: "definition", terme: "Archéologue", md: "Scientifique qui **fouille le sol** avec méthode pour retrouver, dater et étudier les traces matérielles laissées par les humains du passé." },
            { t: "definition", terme: "Fossile", md: "Reste ou trace d'un être vivant (os, dent, empreinte) conservé dans les roches pendant des milliers, voire des millions d'années." },
            { t: "schema", titre: "Les couches du sol racontent le temps", legende: "Les couches se déposent les unes sur les autres : plus on creuse profond, plus on remonte loin dans le passé. Une couche de cendre volcanique se date en laboratoire.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier" x="30" y="20" width="270" height="40"/><rect class="aplat" x="30" y="60" width="270" height="55"/><rect class="aplat-papier" x="30" y="115" width="270" height="35"/><rect class="aplat" x="30" y="150" width="270" height="65"/><rect class="trait" x="30" y="20" width="270" height="195" fill="none"/><line class="trait-fin" x1="30" y1="60" x2="300" y2="60"/><line class="trait-fin" x1="30" y1="115" x2="300" y2="115"/><line class="trait-fin" x1="30" y1="150" x2="300" y2="150"/><text class="texte" x="165" y="45" text-anchor="middle">Sol actuel</text><path class="trait" d="M60 100 L75 76 L90 100 Q75 108 60 100 Z"/><path class="trait-fin" d="M235 102 L245 84 L255 102 M242 102 L250 88"/><text class="texte" x="165" y="93" text-anchor="middle">Outils et foyer</text><text class="texte" x="165" y="137" text-anchor="middle">Cendre volcanique datée</text><ellipse class="trait" cx="95" cy="185" rx="34" ry="7"/><circle class="trait" cx="58" cy="185" r="7"/><circle class="trait" cx="132" cy="185" r="7"/><text class="texte" x="215" y="190" text-anchor="middle">Fossile</text><path class="trait" d="M340 205 L340 32" marker-end="url(#fl)"/><text class="texte-petit" x="340" y="20" text-anchor="middle">plus récent</text><text class="texte-petit" x="340" y="228" text-anchor="middle">plus ancien</text></svg>` },
            { t: "exemple", titre: "Comment on a daté Lucy", etapes: ["En 1974, à Hadar, en Éthiopie, une équipe de chercheurs (dont le Français Yves Coppens) découvre une cinquantaine de fragments d'os d'un même individu.", "Ils la surnomment **Lucy** : c'est une **australopithèque** qui marchait debout.", "Pour la dater, ils analysent les couches de roches volcaniques qui entourent ses os : elles ont environ **3,2 millions d'années**."] },
            { t: "verifie", q: "Pourquoi parle-t-on de « Préhistoire » pour cette période ?", choix: ["Parce qu'il n'y a aucune trace", "Parce que l'écriture n'existe pas encore", "Parce qu'il n'y a pas encore d'humains"], bonne: 1, explication: "La Préhistoire, c'est le temps d'avant l'écriture : il y a des humains et des traces, mais aucun texte." },
          ],
        },
        {
          titre: "L'Afrique, berceau de l'humanité",
          blocs: [
            { t: "texte", md: "Les plus anciens fossiles d'humains ont tous été trouvés en **Afrique**, surtout à l'est et au sud du continent. C'est là qu'apparaît le genre *Homo*, il y a environ 2,5 à 3 millions d'années.\n\nIl a existé **plusieurs espèces humaines** ; la nôtre, *Homo sapiens* (« l'homme qui sait »), est la seule qui survit." },
            { t: "tableau", titre: "Quelques espèces de la grande famille humaine", entetes: ["Espèce", "Quand ?", "Ce qui la caractérise"], lignes: [["Australopithèque (Lucy)", "il y a plus de 3 millions d'années", "marche debout, mais n'est pas encore du genre *Homo*"], ["Premiers *Homo*", "il y a 2,5 à 3 millions d'années", "taillent des outils en pierre"], ["*Homo erectus*", "il y a environ 2 millions d'années", "premier à **quitter l'Afrique** ; maîtrise le **feu** il y a environ 400 000 ans"], ["Néandertal", "de 400 000 à 40 000 ans environ", "vit en Europe, enterre parfois ses morts"], ["*Homo sapiens*", "il y a environ **300 000 ans**", "notre espèce, née en Afrique, peuple toute la Terre"]] },
            { t: "savais-tu", md: "Le plus vieux fossile connu d'*Homo sapiens* a été trouvé au **Maroc**, à Jebel Irhoud : il a environ 300 000 ans." },
            { t: "attention", md: "*Homo sapiens* n'est pas apparu en Europe ! Il est né en **Afrique**, puis il a migré vers les autres continents." },
          ],
        },
        {
          titre: "À la conquête de la Terre",
          blocs: [
            { t: "texte", md: "*Homo erectus* quitte l'Afrique il y a environ 2 millions d'années et atteint l'Asie puis l'Europe : ses os ont été retrouvés à Dmanissi, en Géorgie.\n\nBien plus tard, *Homo sapiens* sort à son tour d'Afrique, **par vagues successives**. Il atteint l'Asie, l'**Australie** (il y a au moins 50 000 ans, en traversant des bras de mer), puis l'**Europe** (il y a environ 45 000 ans).\n\nL'**Amérique** est peuplée en dernier : pendant la période glaciaire, la mer est plus basse et des groupes venus d'Asie franchissent à pied le détroit de Béring, il y a au moins 15 000 ans." },
            { t: "carte", fond: "monde", titre: "Les migrations d'Homo sapiens", reperes: [{ nom: "Hadar (Lucy)", lat: 11.10, lon: 40.58 }, { nom: "Jebel Irhoud", lat: 31.85, lon: -8.87 }, { nom: "Dmanissi", lat: 41.34, lon: 44.34 }, { nom: "Lascaux", lat: 45.05, lon: 1.17 }], traits: [{ de: [5, 37], a: [31, 35], label: "sortie d'Afrique" }, { de: [31, 35], a: [46, 10], label: "Europe : il y a 45 000 ans" }, { de: [31, 35], a: [22, 78], label: "Asie du Sud" }, { de: [22, 78], a: [-25, 134], label: "Australie : il y a 50 000 ans" }, { de: [22, 78], a: [40, 110], label: "Asie de l'Est" }, { de: [40, 110], a: [65, 175], label: "vers la Béringie" }, { de: [64, -155], a: [-10, -62], label: "Amérique : il y a 15 000 ans" }], legende: "Les flèches montrent les grandes routes de migration d'Homo sapiens (dates approximatives, en années avant aujourd'hui)." },
            { t: "frise", titre: "Des premiers humains à la fin du Paléolithique", evenements: [{ date: -3200000, label: "Lucy vit en Éthiopie" }, { date: -2500000, label: "Premiers humains du genre Homo" }, { date: -2000000, label: "Homo erectus quitte l'Afrique" }, { date: -400000, label: "Maîtrise du feu" }, { date: -300000, label: "Homo sapiens apparaît en Afrique" }, { date: -48000, label: "Homo sapiens en Australie" }, { date: -43000, label: "Homo sapiens en Europe" }, { date: -16000, label: "Peintures de Lascaux", detail: "Il y a environ 18 000 ans." }, { date: -13000, label: "Homo sapiens en Amérique" }, { date: -10000, label: "Fin du Paléolithique au Proche-Orient" }] },
            { t: "verifie", q: "Quel continent Homo sapiens a-t-il peuplé en dernier ?", choix: ["L'Europe", "L'Australie", "L'Amérique", "L'Asie"], bonne: 2, explication: "L'Amérique est atteinte en dernier, il y a au moins 15 000 ans, par le détroit de Béring, alors à sec." },
          ],
        },
        {
          titre: "Vivre au Paléolithique",
          blocs: [
            { t: "definition", terme: "Paléolithique", md: "« Âge de la **pierre ancienne** » (en grec, *palaios* : ancien ; *lithos* : pierre). C'est la période où les humains **taillent la pierre** et vivent de chasse, de pêche et de cueillette." },
            { t: "definition", terme: "Nomade", md: "Personne ou groupe qui **se déplace sans cesse** et n'a pas d'habitat fixe. Le contraire est **sédentaire**." },
            { t: "texte", md: "Les humains du Paléolithique ne cultivent pas : ce sont des **chasseurs-cueilleurs**. Par petits groupes, ils suivent les troupeaux et les saisons, et dorment dans des huttes de peaux ou sous des abris de roche. En Europe, le climat est souvent glacial : on y chasse le renne, le mammouth, le bison. Le **feu** réchauffe, éclaire, éloigne les bêtes et permet de cuire la viande." },
            { t: "exemple", titre: "Fabriquer un biface", etapes: ["Choisir un bloc de silex, une pierre dure qui casse en éclats tranchants.", "Le frapper avec un galet (le percuteur) pour enlever des éclats **sur les deux faces**.", "Obtenir un outil en forme d'amande, coupant sur les bords : le **biface**.", "S'en servir pour découper la viande, gratter les peaux ou travailler le bois."] },
            { t: "verifie", q: "Quel outil est caractéristique du Paléolithique ?", choix: ["La charrue en fer", "Le biface en pierre taillée", "La faucille en bronze"], bonne: 1, explication: "Le biface est taillé sur ses deux faces. Le bronze et le fer viendront bien plus tard." },
          ],
        },
        {
          titre: "Lascaux, un chef-d'œuvre de la Préhistoire",
          blocs: [
            { t: "texte", md: "La grotte de **Lascaux**, en Dordogne, a été peinte il y a environ **18 000 ans**. On y compte des centaines de peintures et de gravures. On y voit surtout des **animaux** : chevaux, aurochs (de grands bœufs sauvages), cerfs, bisons. Les humains sont presque absents.\n\nLes artistes peignent avec de l'ocre (une terre colorée) et du charbon de bois, au doigt, au pinceau ou en soufflant la couleur. Pourquoi ? On l'ignore : peut-être pour des cérémonies ou des récits." },
            { t: "savais-tu", md: "Lascaux est fermée au public depuis 1963 : la respiration des visiteurs abîmait les peintures. On visite aujourd'hui une copie fidèle." },
          ],
        },
      ],
      bilan: "Nés en Afrique, les humains ont peuplé toute la Terre en chassant, en cueillant et en taillant la pierre. Leurs os, leurs outils et leurs peintures, étudiés par les archéologues, racontent cette histoire sans écriture.",
    },
    "6e-histoire-02-revolution-neolithique": {
      accroche: "Il y a 9 000 ans, dans un village de l'actuelle Turquie, on n'entre pas chez soi par une porte mais par le toit, avec une échelle ! Autour, des champs de blé et des moutons. Les humains sont passés de la chasse à la ferme. Comment, et pourquoi parle-t-on de « révolution » ?",
      objectifs: [
        "Expliquer la naissance de l'agriculture et de l'élevage",
        "Décrire la vie dans les premiers villages de sédentaires",
        "Situer les foyers du Néolithique dans le temps et sur une carte",
      ],
      sections: [
        {
          titre: "Le Croissant fertile, là où tout commence",
          blocs: [
            { t: "texte", md: "Vers **−10 000**, la dernière période glaciaire s'achève et le climat se réchauffe. Au **Proche-Orient**, dans une région en forme d'arc qui va de la vallée du Jourdain jusqu'aux montagnes de l'Iran, poussent du blé et de l'orge sauvages. On l'appelle le **Croissant fertile**.\n\nLes habitants récoltent d'abord ces céréales sauvages. Puis ils comprennent qu'en semant les grains, ils peuvent faire pousser leur nourriture : c'est la naissance de l'**agriculture**." },
            { t: "definition", terme: "Néolithique", md: "« Âge de la **pierre nouvelle** » (en grec, *neos* : nouveau ; *lithos* : pierre), car on se met à **polir** la pierre. Surtout, les humains **produisent** leur nourriture par l'agriculture et l'élevage au lieu de la prélever dans la nature. Il commence vers −10 000 au Proche-Orient." },
            { t: "carte", fond: "monde", titre: "Les foyers du Néolithique", reperes: [{ nom: "Jéricho", lat: 31.87, lon: 35.44 }, { nom: "Göbekli Tepe", lat: 37.22, lon: 38.92 }, { nom: "Çatal Höyük", lat: 37.67, lon: 32.83 }, { nom: "Carnac", lat: 47.58, lon: -3.08 }, { nom: "Fleuve Jaune (millet)", lat: 34.62, lon: 112.45 }, { nom: "Yangzi (riz)", lat: 30.59, lon: 114.31 }, { nom: "Mexique (maïs)", lat: 17.06, lon: -96.72 }, { nom: "Andes (pomme de terre)", lat: -15.8, lon: -69.4 }, { nom: "Nouvelle-Guinée (taro)", lat: -5.78, lon: 144.33 }], traits: [{ de: [37.5, 34], a: [41, 23], label: "diffusion vers l'Europe" }, { de: [41, 23], a: [48.5, 10], label: "par le Danube" }, { de: [41, 23], a: [43.3, 5.4], label: "par la Méditerranée" }], legende: "Le Croissant fertile est le premier foyer (vers −10 000), mais l'agriculture est inventée plusieurs fois, sans contact, en Chine, en Amérique, en Nouvelle-Guinée et en Afrique." },
            { t: "verifie", q: "Dans quelle région du monde l'agriculture apparaît-elle en premier ?", choix: ["En Europe de l'Ouest", "Au Proche-Orient, dans le Croissant fertile", "En Amérique du Sud"], bonne: 1, explication: "Le premier foyer est le Croissant fertile, vers −10 000. L'agriculture se diffuse ensuite jusqu'en Europe : elle atteint le sud de la France vers −5800." },
          ],
        },
        {
          titre: "Des chasseurs devenus paysans",
          blocs: [
            { t: "texte", md: "Génération après génération, les humains choisissent les plus beaux épis et les animaux les plus dociles : c'est la **domestication**. On cultive le **blé**, l'orge, les lentilles ; on élève la **chèvre**, le **mouton**, puis le bœuf et le porc. Le chien, lui, était déjà domestiqué au Paléolithique.\n\nDe nouveaux outils apparaissent : la **faucille** (une lame de silex fixée dans un manche) pour couper les épis, la meule pour moudre le grain, la hache en pierre polie pour défricher la forêt." },
            { t: "tableau", titre: "Deux façons de vivre", entetes: ["", "Paléolithique", "Néolithique"], lignes: [["Nourriture", "chasse, pêche, cueillette", "**agriculture** et **élevage**"], ["Habitat", "**nomade** : huttes, abris", "**sédentaire** : maisons, villages"], ["Pierre", "taillée", "taillée et **polie**"], ["Objets nouveaux", "biface, harpon, aiguille en os", "faucille, meule, **poterie**, tissu"]] },
            { t: "attention", md: "« Révolution » ne veut pas dire « rapide » ! Ce changement prend **plusieurs milliers d'années**. Pendant longtemps, les paysans continuent aussi à chasser et à cueillir. On parle de révolution parce que la vie des humains change **en profondeur**." },
          ],
        },
        {
          titre: "La vie au village : Çatal Höyük",
          blocs: [
            { t: "definition", terme: "Sédentaire", md: "Qui vit **toujours au même endroit**, dans un habitat fixe. C'est le contraire de nomade." },
            { t: "exemple", titre: "Un village vers −7000", md: "**Çatal Höyük**, dans l'actuelle **Turquie**, est l'un des plus anciens gros villages connus : plusieurs milliers d'habitants vers −7000. Les maisons en briques de terre crue sont **collées les unes aux autres**, sans rues. On circule sur les toits et on entre par une ouverture, avec une échelle. Les murs sont décorés de peintures, et les morts sont enterrés sous le sol des maisons. Les habitants cultivent des céréales et élèvent des moutons." },
            { t: "schema", titre: "Les maisons de Çatal Höyük", legende: "Pas de porte ni de rue : on marche sur les toits et on descend chez soi par une échelle.", svg: `<svg viewBox="0 0 400 220"><line class="trait-fin" x1="10" y1="190" x2="390" y2="190"/><rect class="aplat" x="40" y="100" width="100" height="90"/><rect class="aplat-papier" x="140" y="80" width="110" height="110"/><rect class="aplat" x="250" y="110" width="100" height="80"/><rect class="trait" x="40" y="100" width="100" height="90" fill="none"/><rect class="trait" x="140" y="80" width="110" height="110" fill="none"/><rect class="trait" x="250" y="110" width="100" height="80" fill="none"/><line class="trait" x1="185" y1="45" x2="190" y2="150"/><line class="trait" x1="205" y1="45" x2="210" y2="150"/><line class="trait-fin" x1="186" y1="60" x2="206" y2="60"/><line class="trait-fin" x1="187" y1="80" x2="207" y2="80"/><line class="trait-fin" x1="188" y1="100" x2="208" y2="100"/><line class="trait-fin" x1="189" y1="120" x2="209" y2="120"/><line class="trait-fin" x1="190" y1="140" x2="210" y2="140"/><text class="texte-petit" x="90" y="92" text-anchor="middle">toit-terrasse</text><text class="texte-petit" x="300" y="102" text-anchor="middle">toit-terrasse</text><text class="texte-main" x="232" y="40">échelle</text><text class="texte-petit" x="90" y="150" text-anchor="middle">briques</text><text class="texte-petit" x="90" y="164" text-anchor="middle">de terre crue</text><text class="texte-petit" x="300" y="155" text-anchor="middle">murs collés</text><text class="texte-petit" x="200" y="210" text-anchor="middle">aucune rue entre les maisons</text></svg>` },
            { t: "texte", md: "Être sédentaire change tout. On **stocke** les récoltes dans des greniers et des poteries : les famines reculent, les enfants survivent mieux, la **population augmente**. Certains deviennent potiers ou tisserands. Mais il faut aussi défendre ses réserves : apparaissent des chefs, des inégalités et des guerres." },
            { t: "etapes", titre: "La « révolution » néolithique, étape par étape", items: [{ titre: "Chasseurs-cueilleurs", md: "Les humains sont nomades et vivent de ce que la nature offre." }, { titre: "Agriculture et élevage", md: "Ils sèment des céréales et domestiquent des animaux." }, { titre: "Villages", md: "Ils construisent des maisons fixes : ils deviennent sédentaires." }, { titre: "Poterie et tissage", md: "Ils fabriquent des pots en terre cuite pour stocker et des tissus de laine ou de lin." }, { titre: "Métaux", md: "Ils travaillent le cuivre, puis le bronze (vers −3000 au Proche-Orient)." }] },
            { t: "verifie", q: "Quelle conséquence la sédentarisation a-t-elle eue sur la population ?", choix: ["Elle a diminué", "Elle a augmenté, car on stocke la nourriture", "Elle n'a pas changé"], bonne: 1, explication: "Avec des réserves de nourriture, les famines reculent et davantage d'enfants survivent : la population augmente fortement." },
          ],
        },
        {
          titre: "Des géants de pierre en Bretagne",
          blocs: [
            { t: "texte", md: "Le Néolithique gagne l'Europe peu à peu. Il atteint les côtes méditerranéennes de la France vers −5800. À partir de −4500 environ, des paysans de l'ouest de l'Europe dressent d'énormes blocs de pierre : les **mégalithes**. Il a fallu des centaines de bras, des cordes, des rondins et beaucoup d'organisation pour les déplacer." },
            { t: "definition", terme: "Mégalithe", md: "« Grande pierre » (en grec, *megas* : grand). Monument fait de gros blocs de pierre élevé au Néolithique. Le **menhir** est une pierre **dressée** verticalement ; le **dolmen** est une **tombe** formée de grandes dalles posées comme une table." },
            { t: "astuce", md: "En breton, *men* veut dire « pierre », *hir* « longue » et *dol* « table ». Le **menhir** est une pierre longue, debout ; le **dolmen** est une table de pierre." },
            { t: "savais-tu", md: "À **Carnac**, en Bretagne, près de 3 000 menhirs sont alignés sur plusieurs kilomètres. Ils ont été dressés il y a plus de 5 000 ans, et l'on ignore encore à quoi servaient exactement ces alignements." },
            { t: "frise", titre: "Le Néolithique, du Proche-Orient à la Bretagne", evenements: [{ date: -10000, label: "Début du Néolithique au Proche-Orient" }, { date: -9500, label: "Sanctuaire de Göbekli Tepe" }, { date: -9000, label: "Jéricho, l'un des premiers villages" }, { date: -7000, label: "Village de Çatal Höyük" }, { date: -5800, label: "Le Néolithique atteint le sud de la France" }, { date: -4500, label: "Premiers mégalithes en Bretagne" }, { date: -3000, label: "Le bronze au Proche-Orient" }] },
          ],
        },
      ],
      bilan: "En semant, en élevant et en se fixant dans des villages, les humains du Néolithique ont inventé une nouvelle façon de vivre : celle des paysans, qui dure encore aujourd'hui.",
    },
    "6e-histoire-03-premiers-etats-ecritures": {
      accroche: "Une petite tablette d'argile, pas plus grande qu'une main, couverte de signes tracés avec un roseau. Elle a plus de 5 000 ans. Ce n'est ni un poème ni une histoire : c'est un compte de sacs d'orge ! Pourquoi les tout premiers textes de l'humanité sont-ils des comptes ?",
      objectifs: [
        "Situer la Mésopotamie et l'Égypte et décrire les premiers États",
        "Expliquer l'invention de l'écriture et son rôle",
        "Comprendre pourquoi l'écriture marque le passage de la Préhistoire à l'Histoire",
      ],
      sections: [
        {
          titre: "Deux vallées fertiles au milieu du désert",
          blocs: [
            { t: "texte", md: "La **Mésopotamie** (en grec, « le pays entre les fleuves ») s'étend entre le **Tigre** et l'**Euphrate**, dans l'actuel Irak. L'**Égypte** s'allonge sur les bords du **Nil**. Autour, c'est le désert : il ne pleut presque jamais.\n\nPourtant, ces vallées sont très riches. Chaque année, la **crue** dépose une boue noire très fertile, le **limon**. Mais pour profiter de l'eau, il faut creuser des canaux, bâtir des digues, partager l'eau entre les villages. Ces grands travaux d'**irrigation** demandent une organisation commune et des chefs : c'est ainsi que naissent les premiers États, vers −3500." },
            { t: "citation", texte: "L'Égypte où naviguent les Grecs est pour les Égyptiens une terre gagnée sur les eaux : c'est un don du fleuve.", auteur: "Hérodote, historien grec (Ve siècle av. J.-C.)", source: "Histoires, livre II, 5 (traduction libre)" },
            { t: "carte", fond: "monde", titre: "La Mésopotamie et l'Égypte", cadre: [26, 22, 50, 38], reperes: [{ nom: "Uruk", lat: 31.32, lon: 45.64 }, { nom: "Ur", lat: 30.96, lon: 46.10 }, { nom: "Babylone", lat: 32.54, lon: 44.42 }, { nom: "Rosette", lat: 31.40, lon: 30.42 }, { nom: "Gizeh", lat: 29.98, lon: 31.13 }, { nom: "Memphis", lat: 29.84, lon: 31.25 }, { nom: "Thèbes", lat: 25.70, lon: 32.64 }], legende: "Les premières cités et les premiers États naissent le long des grands fleuves : le Tigre et l'Euphrate en Mésopotamie, le Nil en Égypte." },
            { t: "verifie", q: "Pourquoi les premiers États apparaissent-ils dans des vallées de grands fleuves ?", choix: ["Parce qu'il y pleut beaucoup", "Parce que les crues fertilisent les terres et que l'irrigation demande une organisation", "Parce qu'il n'y a pas de désert autour"], bonne: 1, explication: "Le limon des crues rend les terres très fertiles, mais il faut organiser ensemble les canaux et les digues. Il faut donc des chefs, des lois et des fonctionnaires : un État." },
          ],
        },
        {
          titre: "Cités-États et pharaon",
          blocs: [
            { t: "definition", terme: "État", md: "Organisation qui **gouverne un territoire** et sa population, avec un chef, des lois, des impôts, une armée et des fonctionnaires." },
            { t: "definition", terme: "Cité-État", md: "**Ville indépendante** qui gouverne la campagne qui l'entoure. En Mésopotamie, **Uruk**, **Ur** ou Lagash ont chacune leur roi et leur dieu protecteur." },
            { t: "texte", md: "En Mésopotamie, chaque cité-État est dominée par le temple de son dieu et par une haute tour à étages, la **ziggourat**. Le roi gouverne au nom des dieux. Les cités se font souvent la guerre. Vers −1750, **Hammurabi**, roi de Babylone, en réunit beaucoup et fait graver ses lois sur une stèle.\n\nEn Égypte, un roi unifie tout le pays vers **−3100** : c'est le premier **pharaon**. Considéré comme un **dieu** vivant, il possède la terre, lève les impôts en céréales et dirige une armée de fonctionnaires et de prêtres. À sa mort, il est enterré dans une tombe monumentale." },
            { t: "schema", titre: "Coupe de la pyramide de Khéops", legende: "La pyramide de Khéops, à Gizeh (vers −2560), mesurait environ 146 m de haut. C'est un tombeau : le corps du pharaon reposait dans la chambre du roi.", svg: `<svg viewBox="0 0 400 260"><path class="aplat" d="M160 30 L290 210 L30 210 Z"/><path class="trait" d="M160 30 L290 210 L30 210 Z"/><line class="trait-fin" x1="5" y1="210" x2="395" y2="210"/><text class="texte-petit" x="8" y="226">sol</text><line class="trait" x1="50" y1="183" x2="150" y2="236"/><rect class="aplat-papier" x="150" y="228" width="30" height="14"/><rect class="trait" x="150" y="228" width="30" height="14" fill="none"/><line class="trait" x1="75" y1="196" x2="115" y2="168"/><line class="trait" x1="115" y1="168" x2="150" y2="168"/><rect class="aplat-papier" x="150" y="160" width="16" height="12"/><rect class="trait" x="150" y="160" width="16" height="12" fill="none"/><line class="trait" x1="115" y1="168" x2="152" y2="122" stroke-width="5"/><rect class="aplat-papier" x="152" y="112" width="24" height="12"/><rect class="trait" x="152" y="112" width="24" height="12" fill="none"/><text class="texte-petit" x="44" y="178" text-anchor="end">Entrée</text><line class="trait-fin" x1="176" y1="118" x2="296" y2="100"/><text class="texte-petit" x="300" y="104">Chambre du roi</text><line class="trait-fin" x1="134" y1="145" x2="296" y2="132"/><text class="texte-petit" x="300" y="136">Grande galerie</text><line class="trait-fin" x1="166" y1="166" x2="296" y2="166"/><text class="texte-petit" x="300" y="162">Chambre de</text><text class="texte-petit" x="300" y="175">la reine</text><line class="trait-fin" x1="180" y1="236" x2="296" y2="236"/><text class="texte-petit" x="300" y="234">Chambre</text><text class="texte-petit" x="300" y="247">souterraine</text></svg>` },
            { t: "tableau", titre: "Deux civilisations comparées", entetes: ["", "Mésopotamie", "Égypte"], lignes: [["Fleuves", "Tigre et Euphrate", "Nil"], ["Pouvoir", "cités-États, chacune avec un roi", "un seul roi-dieu, le **pharaon** (unification vers −3100)"], ["Écriture", "**cunéiforme**", "**hiéroglyphes**"], ["Support", "tablettes d'**argile**", "pierre et **papyrus**"], ["Monuments", "temples, ziggourats", "temples, **pyramides**"]] },
          ],
        },
        {
          titre: "L'invention de l'écriture",
          blocs: [
            { t: "texte", md: "Vers **−3300**, à **Uruk**, les fonctionnaires du temple doivent noter des milliers de livraisons d'orge, de moutons, de bière. La mémoire ne suffit plus ! Ils tracent alors de petits dessins dans l'argile fraîche avec un roseau taillé. Peu à peu, ces signes deviennent des traits en forme de clous ou de coins : c'est le **cunéiforme** (du latin *cuneus*, « coin »).\n\nPresque en même temps, les Égyptiens inventent les **hiéroglyphes**, gravés sur la pierre ou peints sur le **papyrus**, une feuille fabriquée avec un roseau du Nil." },
            { t: "exemple", titre: "Lire une tablette d'Uruk", md: "Une tablette d'Uruk, vers −3300, porte le dessin d'un épi, des encoches et le signe d'un temple. Les spécialistes la lisent ainsi : « tant de mesures d'orge livrées au temple ». Les premiers textes sont des **comptes**, pas des récits : l'écriture sert d'abord à **compter les récoltes**, gérer les **impôts** et les échanges. Les lois, les prières et les poèmes viendront plus tard." },
            { t: "definition", terme: "Scribe", md: "Spécialiste de l'écriture. Formé pendant des années à l'école, il compte les récoltes, calcule les impôts, rédige les lois et les lettres du roi. C'est un métier très respecté." },
            { t: "verifie", q: "Sur quel support les Mésopotamiens écrivent-ils le cunéiforme ?", choix: ["Sur du papyrus", "Sur des tablettes d'argile", "Sur du papier"], bonne: 1, explication: "Le cunéiforme s'imprime dans l'argile fraîche avec un roseau. Le papyrus est le support égyptien ; le papier sera inventé en Chine bien plus tard." },
          ],
        },
        {
          titre: "De la Préhistoire à l'Histoire",
          blocs: [
            { t: "propriete", titre: "Le début de l'Histoire", md: "L'**Histoire** commence quand apparaissent les **premiers documents écrits**. Avant, c'est la **Préhistoire**. Une tablette de comptes, un papyrus ou une inscription prouvent qu'une société est entrée dans l'Histoire." },
            { t: "attention", md: "Ce passage n'a pas lieu partout en même temps. La Mésopotamie entre dans l'Histoire vers −3300 ; la Gaule, elle, ne connaît presque pas de textes avant l'arrivée des Grecs et des Romains." },
            { t: "texte", md: "Pendant des siècles, plus personne ne sut lire les hiéroglyphes. En 1799, des soldats français de l'expédition de Bonaparte en Égypte découvrent à Rosette une pierre gravée. Elle porte le même texte (un décret de −196) en **trois écritures** : hiéroglyphes, démotique et grec. En comparant avec le grec, le savant français **Jean-François Champollion** déchiffre les hiéroglyphes en **1822**." },
            { t: "frise", titre: "Les premiers États et l'écriture", evenements: [{ date: -10000, label: "Début du Néolithique au Proche-Orient" }, { date: -3500, label: "Premières cités-États en Mésopotamie" }, { date: -3300, label: "Invention de l'écriture à Uruk", detail: "Fin de la Préhistoire, début de l'Histoire." }, { date: -3100, label: "Unification de l'Égypte par un pharaon" }, { date: -2560, label: "Pyramide de Khéops à Gizeh" }, { date: -1750, label: "Code de Hammurabi à Babylone" }, { date: 1799, label: "Découverte de la pierre de Rosette" }, { date: 1822, label: "Champollion déchiffre les hiéroglyphes" }] },
            { t: "verifie", q: "Lequel de ces documents montre qu'une société est entrée dans l'Histoire ?", choix: ["Un biface en silex", "Une peinture de bison dans une grotte", "Une tablette d'argile avec des comptes de récoltes"], bonne: 2, explication: "L'Histoire commence avec l'écriture. Le biface et la peinture de Lascaux sont des traces de la Préhistoire, sans texte." },
          ],
        },
      ],
      bilan: "Le long du Tigre, de l'Euphrate et du Nil, il a fallu s'organiser pour maîtriser l'eau : sont nés des États, des rois et des scribes, et l'écriture, inventée pour compter, a fait entrer l'humanité dans l'Histoire.",
    },
    "6e-histoire-04-cites-grecques": {
      accroche: "Été −776, à Olympie. Des athlètes venus de toutes les cités grecques s'élancent pour une course d'environ 192 mètres, sous le regard de Zeus. Pourtant, ces Grecs vivent dans des centaines de cités rivales qui se font souvent la guerre. Qu'est-ce qui fait d'eux un même peuple ?",
      objectifs: [
        "Présenter les récits fondateurs d'Homère : l'Iliade et l'Odyssée",
        "Expliquer les croyances des Grecs et le rôle des sanctuaires panhelléniques",
        "Décrire le fonctionnement et les limites de la démocratie athénienne",
      ],
      sections: [
        {
          titre: "Un monde de cités",
          blocs: [
            { t: "definition", terme: "Cité", md: "Petit **État indépendant** formé d'une ville et de la campagne qui l'entoure, avec ses lois, son armée et ses dieux protecteurs. Athènes, Sparte, Corinthe sont des cités." },
            { t: "texte", md: "La Grèce est un pays de montagnes et d'îles : les vallées sont isolées et la mer est la meilleure route. Au Ier millénaire av. J.-C., les Grecs vivent donc dans des **centaines de cités**. Beaucoup fondent des colonies tout autour de la Méditerranée : vers −600, des Grecs venus de Phocée fondent **Marseille** (Massalia).\n\nMalgré leurs rivalités, les Grecs se sentent un même peuple, les **Hellènes** : ils parlent la même langue, honorent les mêmes dieux et connaissent les mêmes récits. Ceux qui ne parlent pas grec, ils les appellent les « barbares »." },
            { t: "carte", fond: "monde", titre: "Le monde des cités grecques", cadre: [2, 33, 30, 46], reperes: [{ nom: "Athènes", lat: 37.98, lon: 23.73 }, { nom: "Sparte", lat: 37.07, lon: 22.43 }, { nom: "Corinthe", lat: 37.91, lon: 22.88 }, { nom: "Olympie", lat: 37.64, lon: 21.63 }, { nom: "Delphes", lat: 38.48, lon: 22.50 }, { nom: "Troie", lat: 39.96, lon: 26.24 }, { nom: "Ithaque", lat: 38.42, lon: 20.67 }, { nom: "Milet", lat: 37.53, lon: 27.28 }, { nom: "Syracuse", lat: 37.08, lon: 15.29 }, { nom: "Marseille", lat: 43.30, lon: 5.37 }], traits: [{ de: [38.67, 26.75], a: [43.30, 5.37], label: "fondation de Marseille (vers −600)" }, { de: [39.96, 26.24], a: [38.42, 20.67], label: "le long retour d'Ulysse" }], legende: "Les cités grecques bordent la mer Égée et essaiment jusqu'en Italie et en Gaule. Olympie et Delphes sont des sanctuaires communs à tous les Grecs." },
          ],
        },
        {
          titre: "Homère et les récits fondateurs",
          blocs: [
            { t: "texte", md: "Au **VIIIe siècle av. J.-C.**, le poète **Homère** (dont on ne sait presque rien) met en forme deux longs poèmes chantés depuis des générations.\n\nL'**Iliade** raconte un épisode de la **guerre de Troie** : les Grecs assiègent la ville pendant dix ans, et le héros **Achille** affronte le Troyen Hector. L'**Odyssée** raconte le retour d'**Ulysse**, roi d'Ithaque, qui met **dix ans** à rentrer chez lui : il affronte le cyclope Polyphème, la magicienne Circé, les sirènes, avant de retrouver sa femme Pénélope." },
            { t: "citation", texte: "Chante, déesse, la colère d'Achille, fils de Pélée, colère funeste qui causa mille souffrances aux Grecs.", auteur: "Homère", source: "Iliade, chant I, premiers vers (traduction libre)" },
            { t: "definition", terme: "Récit fondateur", md: "Récit transmis de génération en génération qui raconte les origines d'un peuple et lui donne des **héros**, des **dieux** et des **valeurs** communes." },
            { t: "exemple", titre: "Pourquoi l'Iliade et l'Odyssée sont-elles fondatrices ?", md: "Dans toutes les cités, les enfants apprennent ces vers par cœur. Achille incarne le courage, Ulysse la ruse et l'amour de sa patrie ; les poèmes montrent aussi comment honorer les dieux et accueillir un étranger. En partageant ces héros et ces valeurs, un Athénien et un Spartiate se sentent tous deux **grecs**." },
          ],
        },
        {
          titre: "Des dieux et des sanctuaires pour tous les Grecs",
          blocs: [
            { t: "definition", terme: "Polythéisme", md: "Croyance en **plusieurs dieux** (en grec, *poly* : nombreux ; *theos* : dieu). Les Grecs sont polythéistes." },
            { t: "tableau", titre: "Quelques dieux de l'Olympe", entetes: ["Dieu", "Domaine", "Symbole"], lignes: [["**Zeus**", "roi des dieux, le ciel", "la foudre"], ["**Athéna**", "sagesse, protectrice d'Athènes", "la chouette"], ["**Apollon**", "lumière, arts, oracle de Delphes", "la lyre"], ["**Poséidon**", "la mer", "le trident"]] },
            { t: "texte", md: "Les Grecs imaginent leurs dieux comme des humains immortels et très puissants. Pour gagner leur protection, ils leur offrent des **sacrifices** sur un autel, devant le temple qui abrite la statue du dieu, et organisent de grandes fêtes.\n\nCertains sanctuaires accueillent tous les Grecs. À **Olympie**, des **jeux** sont organisés tous les quatre ans en l'honneur de **Zeus**, depuis **−776** ; une trêve sacrée suspend les guerres pour que les athlètes puissent venir. À **Delphes**, une prêtresse, la Pythie, transmet les réponses d'**Apollon** : c'est l'**oracle** que l'on consulte avant une décision importante." },
            { t: "definition", terme: "Panhellénique", md: "« De **tous les Grecs** » (*pan* : tout ; *Hellènes* : les Grecs). Olympie et Delphes sont des sanctuaires panhelléniques." },
            { t: "verifie", q: "En l'honneur de quel dieu les jeux d'Olympie sont-ils organisés ?", choix: ["Apollon", "Zeus", "Poséidon", "Athéna"], bonne: 1, explication: "Les jeux d'Olympie honorent Zeus, roi des dieux, dont une immense statue se dressait dans le temple du sanctuaire. Delphes est le sanctuaire d'Apollon." },
          ],
        },
        {
          titre: "Athènes invente la démocratie",
          blocs: [
            { t: "definition", terme: "Démocratie", md: "« **Pouvoir du peuple** » (en grec, *dêmos* : le peuple ; *kratos* : le pouvoir). Ce sont les citoyens qui décident des lois." },
            { t: "texte", md: "En **−508**, l'Athénien **Clisthène** réforme la cité : la démocratie est née. Au **Ve siècle av. J.-C.**, les citoyens se réunissent environ quarante fois par an sur la colline de la **Pnyx** : c'est l'**Ecclésia**, l'assemblée du peuple. Ils y votent les lois, décident de la guerre ou de la paix et élisent dix stratèges, les chefs de l'armée.\n\nLa plupart des magistrats, les 500 membres du conseil (la Boulè) et les juges sont **tirés au sort** parmi les citoyens : chacun peut gouverner à son tour. Pour se protéger d'un homme trop ambitieux, l'Ecclésia peut voter l'**ostracisme** : on écrit un nom sur un tesson de poterie, et le citoyen désigné est banni pour **dix ans**.\n\n**Périclès** (vers −495 / −429), stratège réélu quinze fois, dirige Athènes vers −450. Il fait construire le **Parthénon**, temple d'Athéna sur l'Acropole." },
            { t: "citation", texte: "Notre constitution est appelée démocratie, parce que le pouvoir est entre les mains du plus grand nombre, et non d'une minorité.", auteur: "Périclès, cité par l'historien Thucydide", source: "La Guerre du Péloponnèse, livre II, 37 (traduction libre)" },
            { t: "verifie", q: "Comment la plupart des magistrats athéniens sont-ils désignés ?", choix: ["Par l'hérédité, de père en fils", "Par tirage au sort parmi les citoyens", "Par le choix d'un roi"], bonne: 1, explication: "Pour les Athéniens, le tirage au sort est le plus démocratique : tous les citoyens ont la même chance. Seuls les stratèges sont élus." },
          ],
        },
        {
          titre: "Une démocratie réservée à quelques-uns",
          blocs: [
            { t: "texte", md: "Être **citoyen** à Athènes, c'est être un **homme** libre, majeur, né d'un père et d'une mère athéniens. Cela représente une minorité des habitants : environ 40 000 hommes.\n\nSont **exclus** de la vie politique : les **femmes**, qui vivent surtout à la maison ; les **métèques**, étrangers libres qui paient des impôts et servent dans l'armée ; les **esclaves**, souvent prisonniers de guerre, qui appartiennent à un maître." },
            { t: "schema", titre: "La société athénienne au Ve siècle av. J.-C.", legende: "Seuls les citoyens, en haut de la pyramide, participent à la vie politique.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M110 20 L190 20 L208 65 L92 65 Z"/><path class="aplat-papier" d="M92 65 L208 65 L228 115 L72 115 Z"/><path class="aplat-papier" d="M72 115 L228 115 L248 165 L52 165 Z"/><path class="aplat-papier" d="M52 165 L248 165 L270 220 L30 220 Z"/><path class="trait" d="M110 20 L190 20 L270 220 L30 220 Z"/><line class="trait-fin" x1="92" y1="65" x2="208" y2="65"/><line class="trait-fin" x1="72" y1="115" x2="228" y2="115"/><line class="trait-fin" x1="52" y1="165" x2="248" y2="165"/><text class="texte" x="150" y="47" text-anchor="middle">Citoyens</text><text class="texte" x="150" y="95" text-anchor="middle">Femmes, enfants</text><text class="texte" x="150" y="145" text-anchor="middle">Métèques</text><text class="texte" x="150" y="197" text-anchor="middle">Esclaves</text><text class="texte-petit" x="222" y="40">votent à l'Ecclésia,</text><text class="texte-petit" x="222" y="54">sont magistrats</text><line class="trait-fin" x1="280" y1="70" x2="280" y2="215"/><text class="texte-main" x="290" y="135">exclus de la</text><text class="texte-main" x="290" y="155">vie politique</text></svg>` },
            { t: "attention", md: "Ne confonds pas la démocratie athénienne avec la nôtre : à Athènes, les **femmes ne votent pas**, et la cité possède de nombreux esclaves." },
            { t: "frise", titre: "Repères du monde grec", evenements: [{ date: -1200, label: "Guerre de Troie selon la légende" }, { date: -776, label: "Premiers jeux olympiques" }, { date: -750, label: "Homère compose l'Iliade et l'Odyssée", detail: "VIIIe siècle av. J.-C." }, { date: -600, label: "Fondation de Marseille par des Grecs de Phocée" }, { date: -508, label: "Réformes de Clisthène : naissance de la démocratie" }, { date: -480, label: "Victoire navale de Salamine contre les Perses" }, { date: -450, label: "Périclès dirige Athènes" }, { date: -447, label: "Début de la construction du Parthénon" }] },
          ],
        },
      ],
      bilan: "Divisés en cités rivales, les Grecs sont unis par Homère, par leurs dieux et par leurs sanctuaires ; à Athènes, ils inventent la démocratie, un pouvoir du peuple réservé pourtant aux seuls citoyens.",
    },
    "6e-histoire-05-rome-mythe-histoire": {
      accroche: "À Rome, au musée du Capitole, une louve de bronze allaite deux bébés : Romulus et Rémus, les fondateurs légendaires de la ville. Mais les jumeaux ont été ajoutés au XVe siècle, et des analyses suggèrent que la louve elle-même date du Moyen Âge ! Comment démêler le mythe et l'histoire ?",
      objectifs: [
        "Raconter les récits de fondation de Rome, d'Énée à Romulus",
        "Distinguer le mythe de ce que révèle l'archéologie",
        "Décrire les institutions et la société de la République romaine",
      ],
      sections: [
        {
          titre: "D'Énée à Romulus : la légende",
          blocs: [
            { t: "etapes", titre: "Le récit légendaire de la fondation de Rome", items: [{ titre: "La fuite de Troie", md: "**Énée**, prince troyen et fils de la déesse Vénus, fuit **Troie** en flammes en portant son vieux père sur ses épaules." }, { titre: "L'arrivée dans le Latium", md: "Après un long voyage en Méditerranée, il s'installe dans le **Latium**, en Italie. Son fils fonde la ville d'Albe." }, { titre: "Les jumeaux abandonnés", md: "Des siècles plus tard, **Romulus et Rémus**, fils du dieu **Mars**, sont abandonnés sur le **Tibre** par un roi qui craint de perdre son trône." }, { titre: "La louve", md: "Une **louve** recueille et allaite les jumeaux, puis un berger les élève." }, { titre: "La fondation", md: "Devenus adultes, ils veulent fonder une ville. Ils se disputent : **Romulus tue Rémus** et fonde **Rome** en **−753**." }] },
            { t: "citation", texte: "Une louve assoiffée, descendue des montagnes voisines, entendit les cris des enfants ; elle s'approcha et leur offrit ses mamelles.", auteur: "Tite-Live, historien romain", source: "Histoire romaine, livre I, 4 (traduction libre)" },
            { t: "carte", fond: "monde", titre: "Le voyage légendaire d'Énée", cadre: [8, 33, 30, 45], reperes: [{ nom: "Troie", lat: 39.96, lon: 26.24 }, { nom: "Carthage", lat: 36.85, lon: 10.32 }, { nom: "Cumes", lat: 40.85, lon: 14.05 }, { nom: "Lavinium (Latium)", lat: 41.66, lon: 12.47 }, { nom: "Rome", lat: 41.90, lon: 12.50 }, { nom: "Tarquinia (Étrusques)", lat: 42.25, lon: 11.76 }], traits: [{ de: [39.96, 26.24], a: [35.30, 25.16], label: "Crète" }, { de: [35.30, 25.16], a: [38.02, 12.51], label: "Sicile" }, { de: [38.02, 12.51], a: [36.85, 10.32], label: "chez la reine Didon" }, { de: [36.85, 10.32], a: [40.85, 14.05] }, { de: [40.85, 14.05], a: [41.66, 12.47], label: "arrivée dans le Latium" }], legende: "Selon Virgile, Énée erre pendant sept ans en Méditerranée avant d'atteindre le Latium. Au nord de Rome vivent les Étrusques." },
          ],
        },
        {
          titre: "Mythe ou histoire ? Ce que disent les fouilles",
          blocs: [
            { t: "definition", terme: "Mythe", md: "Récit merveilleux, avec des dieux et des héros, qui explique les origines d'un peuple. Il n'est pas vrai au sens historique, mais il dit ce que ce peuple **croit de lui-même**." },
            { t: "texte", md: "Ces récits nous sont connus par deux auteurs : le poète **Virgile**, qui écrit l'**Énéide**, et l'historien **Tite-Live**. Tous deux vivent au **Ier siècle av. J.-C.**, sous Auguste : plus de 700 ans après la date supposée de la fondation !\n\nL'**archéologie** raconte une autre histoire. Sur la colline du **Palatin**, les fouilleurs ont retrouvé les trous des poteaux de **cabanes** du **VIIIe siècle av. J.-C.** Rome naît du **regroupement de villages** de bergers latins installés sur des collines au bord du Tibre. Elle est ensuite fortement influencée par ses voisins du nord, les **Étrusques**, qui lui donnent des rois, des techniques (assèchement des marais, grands temples) et des rites religieux." },
            { t: "attention", md: "Tite-Live et Virgile n'ont **pas connu** Romulus : ils écrivent sept siècles plus tard, en mêlant traditions orales et légendes. Leur récit est une source sur ce que croyaient les Romains, pas un reportage." },
            { t: "exemple", titre: "Pourquoi descendre d'un Troyen ?", md: "Les Romains admirent les Grecs et leurs poèmes d'Homère. En se disant descendants d'Énée, héros de la guerre de Troie et fils de Vénus, ils se donnent un **passé aussi glorieux que celui des Grecs**. Jules César et Auguste prétendaient même que leur famille descendait du fils d'Énée : Virgile écrit l'Énéide pour Auguste." },
            { t: "verifie", q: "Que montrent les fouilles archéologiques sur les origines de Rome ?", choix: ["Une grande ville fondée en un jour par Romulus", "Des villages de cabanes sur le Palatin dès le VIIIe siècle av. J.-C.", "Aucune trace avant l'an 1"], bonne: 1, explication: "Les trous de poteaux de cabanes du Palatin montrent que Rome est née lentement, du regroupement de villages, et non d'une fondation en un jour." },
          ],
        },
        {
          titre: "Des rois à la République",
          blocs: [
            { t: "texte", md: "Selon la tradition, Rome est d'abord gouvernée par **sept rois** ; les trois derniers sont étrusques. Le dernier, **Tarquin le Superbe**, se comporte en tyran. En **−509**, les Romains le chassent et décident de ne plus jamais avoir de roi : c'est la **République**." },
            { t: "definition", terme: "République", md: "Du latin *res publica*, « la chose publique » : un régime où le pouvoir n'appartient pas à un roi mais est partagé entre des **magistrats élus** pour une durée limitée, un conseil et les citoyens." },
            { t: "schema", titre: "Les institutions de la République romaine", legende: "Le pouvoir est partagé pour qu'aucun homme ne redevienne roi.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat" x="140" y="16" width="120" height="48" rx="6"/><rect class="trait" x="140" y="16" width="120" height="48" rx="6" fill="none"/><text class="texte" x="200" y="38" text-anchor="middle">2 consuls</text><text class="texte-petit" x="200" y="54" text-anchor="middle">élus pour un an</text><rect class="aplat-papier" x="10" y="110" width="130" height="48" rx="6"/><rect class="trait" x="10" y="110" width="130" height="48" rx="6" fill="none"/><text class="texte" x="75" y="131" text-anchor="middle">Sénat</text><text class="texte-petit" x="75" y="147" text-anchor="middle">anciens magistrats</text><rect class="aplat-papier" x="260" y="110" width="130" height="48" rx="6"/><rect class="trait" x="260" y="110" width="130" height="48" rx="6" fill="none"/><text class="texte" x="325" y="131" text-anchor="middle">Tribuns</text><text class="texte-petit" x="325" y="147" text-anchor="middle">de la plèbe</text><rect class="aplat" x="120" y="188" width="160" height="46" rx="6"/><rect class="trait" x="120" y="188" width="160" height="46" rx="6" fill="none"/><text class="texte" x="200" y="208" text-anchor="middle">Comices</text><text class="texte-petit" x="200" y="224" text-anchor="middle">les citoyens votent</text><path class="trait" d="M200 186 L200 70" marker-end="url(#fl)"/><text class="texte-petit" x="206" y="130">élisent</text><path class="trait" d="M95 108 L148 70" marker-end="url(#fl)"/><text class="texte-petit" x="62" y="88" text-anchor="middle">conseille</text><path class="trait" d="M305 108 L252 70" marker-end="url(#fl-p)"/><text class="texte-petit" x="345" y="86" text-anchor="middle">peuvent s'opposer</text><path class="trait-fin" d="M270 196 L310 162" marker-end="url(#fl)"/></svg>` },
            { t: "texte", md: "Les deux **consuls** gouvernent et commandent l'armée. Ils sont **élus pour un an** et chacun peut bloquer l'autre : ainsi, personne ne garde trop de pouvoir. Le **Sénat**, formé d'environ 300 anciens magistrats, les conseille et dirige la politique extérieure. Les citoyens, réunis dans les **comices**, élisent les magistrats et votent les lois." },
            { t: "savais-tu", md: "**SPQR**, gravé sur les monuments romains, signifie *Senatus PopulusQue Romanus* : « le Sénat et le peuple romain ». On le lit encore aujourd'hui sur les plaques d'égout de Rome !" },
          ],
        },
        {
          titre: "Patriciens et plébéiens",
          blocs: [
            { t: "tableau", titre: "Deux groupes dans la société romaine", entetes: ["", "Patriciens", "Plébéiens"], lignes: [["Qui ?", "les **grandes familles nobles**", "le **reste du peuple** : paysans, artisans, marchands"], ["Au début de la République", "monopolisent les magistratures et le Sénat", "servent dans l'armée mais ont peu de droits"]] },
            { t: "texte", md: "Les plébéiens se révoltent : vers **−494**, ils se retirent hors de la ville et refusent de combattre. Les patriciens cèdent et créent les **tribuns de la plèbe**, des magistrats chargés de **défendre les plébéiens** : ils peuvent s'opposer à une décision injuste. Vers −450, les lois sont écrites sur douze tables de bronze exposées au forum. En −366, un plébéien devient consul pour la première fois." },
            { t: "frise", titre: "Les débuts de Rome", evenements: [{ date: -753, label: "Fondation légendaire de Rome par Romulus" }, { date: -750, label: "Cabanes du Palatin", detail: "VIIIe siècle av. J.-C." }, { date: -616, label: "Premier roi étrusque selon la tradition" }, { date: -509, label: "Fin de la royauté : la République" }, { date: -494, label: "Création des tribuns de la plèbe" }, { date: -450, label: "Loi des Douze Tables" }, { date: -366, label: "Premier consul plébéien" }, { date: -29, label: "Virgile commence l'Énéide" }] },
            { t: "verifie", q: "Quel magistrat, créé vers −494, défend les plébéiens ?", choix: ["Le consul", "Le tribun de la plèbe", "Le sénateur"], bonne: 1, explication: "Les tribuns de la plèbe protègent les plébéiens contre les abus des patriciens : ils peuvent bloquer une décision en disant *veto*, « je m'oppose »." },
          ],
        },
      ],
      bilan: "La légende fait naître Rome d'un héros troyen et de jumeaux nourris par une louve ; l'archéologie montre des villages de bergers devenus une République où le pouvoir est partagé entre consuls, Sénat et citoyens.",
    },
    "6e-histoire-06-monotheisme-juif": {
      accroche: "À Jérusalem, des fidèles prient devant un grand mur de pierres et glissent de petits papiers entre les blocs. Ce mur soutenait l'esplanade du Temple, détruit par les Romains en 70. Comment un petit peuple du Proche-Orient a-t-il donné naissance à la croyance en un Dieu unique ?",
      objectifs: [
        "Connaître les grands récits de la Bible hébraïque : Abraham, Moïse",
        "Expliquer comment et quand naît le monothéisme juif",
        "Situer Jérusalem, le Temple, l'exil et la diaspora",
      ],
      sections: [
        {
          titre: "La Bible hébraïque, un livre et une source",
          blocs: [
            { t: "texte", md: "Les **Hébreux** sont un petit peuple installé dans le pays de **Canaan** (la future Palestine), coincé entre deux puissances : l'Égypte et les empires de Mésopotamie. Leur histoire et leurs croyances sont racontées dans la **Bible hébraïque**, un recueil de livres écrits en hébreu pendant plusieurs siècles." },
            { t: "definition", terme: "Torah", md: "Les **cinq premiers livres** de la Bible hébraïque (Genèse, Exode, Lévitique, Nombres, Deutéronome). Le mot signifie « enseignement » ou « loi »." },
            { t: "schema", titre: "Les trois parties de la Bible hébraïque", legende: "Les Juifs appellent la Bible hébraïque Tanakh, d'après les initiales de ses trois parties.", svg: `<svg viewBox="0 0 400 220"><rect class="aplat" x="10" y="12" width="380" height="34" rx="6"/><rect class="trait" x="10" y="12" width="380" height="34" rx="6" fill="none"/><text class="texte" x="200" y="34" text-anchor="middle">La Bible hébraïque (Tanakh)</text><rect class="aplat-papier" x="10" y="60" width="120" height="150" rx="6"/><rect class="trait" x="10" y="60" width="120" height="150" rx="6" fill="none"/><rect class="aplat-papier" x="140" y="60" width="120" height="150" rx="6"/><rect class="trait" x="140" y="60" width="120" height="150" rx="6" fill="none"/><rect class="aplat-papier" x="270" y="60" width="120" height="150" rx="6"/><rect class="trait" x="270" y="60" width="120" height="150" rx="6" fill="none"/><text class="texte-pigment" x="70" y="82" text-anchor="middle">Torah</text><text class="texte-petit" x="70" y="98" text-anchor="middle">(la Loi)</text><text class="texte-petit" x="70" y="122" text-anchor="middle">Genèse</text><text class="texte-petit" x="70" y="140" text-anchor="middle">Exode</text><text class="texte-petit" x="70" y="158" text-anchor="middle">Lévitique</text><text class="texte-petit" x="70" y="176" text-anchor="middle">Nombres</text><text class="texte-petit" x="70" y="194" text-anchor="middle">Deutéronome</text><text class="texte-pigment" x="200" y="82" text-anchor="middle">Prophètes</text><text class="texte-petit" x="200" y="122" text-anchor="middle">Josué, Samuel,</text><text class="texte-petit" x="200" y="140" text-anchor="middle">les Rois, Isaïe,</text><text class="texte-petit" x="200" y="158" text-anchor="middle">Jérémie…</text><text class="texte-pigment" x="330" y="82" text-anchor="middle">Écrits</text><text class="texte-petit" x="330" y="122" text-anchor="middle">Psaumes,</text><text class="texte-petit" x="330" y="140" text-anchor="middle">Proverbes,</text><text class="texte-petit" x="330" y="158" text-anchor="middle">Job…</text></svg>` },
            { t: "exemple", titre: "Comment l'historien utilise la Bible", md: "La Bible est un **texte religieux**, écrit par des croyants, souvent longtemps après les faits. L'historien la lit comme un document qui dit **les croyances d'un peuple**, et il la **confronte** à l'archéologie et aux textes des peuples voisins. Certains faits sont confirmés : une stèle trouvée à Tel Dan (IXe siècle av. J.-C.) mentionne la « maison de David », et les chroniques babyloniennes racontent la prise de Jérusalem. D'autres, comme la sortie d'Égypte, n'ont laissé aucune trace archéologique." },
            { t: "verifie", q: "Comment un historien utilise-t-il la Bible hébraïque ?", choix: ["Il croit tout ce qu'elle raconte", "Comme un document sur les croyances d'un peuple, à confronter à l'archéologie", "Il ne l'utilise jamais"], bonne: 1, explication: "La Bible est une source précieuse, mais religieuse : l'historien la compare avec les fouilles et les autres textes anciens." },
          ],
        },
        {
          titre: "Les récits fondateurs : Abraham et Moïse",
          blocs: [
            { t: "texte", md: "Selon la Bible, **Abraham** quitte la ville d'Ur, en Mésopotamie, à l'appel de Dieu, pour s'installer en Canaan. Dieu conclut avec lui une **alliance** : il lui promet une terre et une descendance nombreuse. Abraham est considéré comme l'ancêtre des Hébreux.\n\nPlus tard, les Hébreux sont esclaves en Égypte. **Moïse** les fait sortir du pays : c'est l'**Exode**. Dans le désert, sur le **mont Sinaï**, il reçoit de Dieu les **Dix Commandements**, gravés sur deux tables de pierre. Après quarante ans d'errance, les Hébreux atteignent Canaan, la « Terre promise »." },
            { t: "definition", terme: "Alliance", md: "Dans la Bible, un **pacte entre Dieu et son peuple** : Dieu protège les Hébreux, qui doivent en échange respecter ses commandements." },
            { t: "citation", texte: "Je suis l'Éternel, ton Dieu, qui t'ai fait sortir du pays d'Égypte, de la maison de servitude. Tu n'auras pas d'autres dieux devant ma face.", auteur: "La Bible", source: "Exode 20, 2-3 (traduction Louis Segond, 1910)" },
            { t: "carte", fond: "monde", titre: "Le monde des Hébreux", cadre: [28, 26, 50, 40], reperes: [{ nom: "Ur", lat: 30.96, lon: 46.10 }, { nom: "Harran", lat: 36.87, lon: 39.03 }, { nom: "Jérusalem", lat: 31.78, lon: 35.23 }, { nom: "Samarie", lat: 32.28, lon: 35.19 }, { nom: "Ramsès (Égypte)", lat: 30.80, lon: 31.83 }, { nom: "Mont Sinaï", lat: 28.54, lon: 33.97 }, { nom: "Babylone", lat: 32.54, lon: 44.42 }], traits: [{ de: [30.96, 46.10], a: [36.87, 39.03], label: "Abraham" }, { de: [36.87, 39.03], a: [31.9, 35.2] }, { de: [30.80, 31.83], a: [28.54, 33.97], label: "l'Exode" }, { de: [28.54, 33.97], a: [31.6, 35.5] }, { de: [31.78, 35.23], a: [32.54, 44.42], label: "l'exil (−587)" }], legende: "Les récits d'Abraham et de Moïse, puis l'exil à Babylone : l'histoire des Hébreux se joue entre l'Égypte et la Mésopotamie." },
          ],
        },
        {
          titre: "Jérusalem et le Temple",
          blocs: [
            { t: "texte", md: "Vers **−1000**, selon la Bible, le roi **David** fait de **Jérusalem** sa capitale. Son fils **Salomon** y fait construire le **Temple**, la maison de Dieu. Après Salomon, le royaume se divise en deux : Israël au nord (capitale Samarie), détruit par les Assyriens en −722, et Juda au sud (capitale Jérusalem).\n\nÀ cette époque, la plupart des Hébreux honorent surtout leur dieu, **Yahvé**, mais pas lui seul. Les archéologues ont retrouvé de nombreuses statuettes de déesses et une inscription qui parle de « Yahvé et son Ashérah », une déesse. Les prophètes protestent contre ces cultes : le monothéisme n'est **pas encore établi**." },
            { t: "verifie", q: "Que nous apprend l'archéologie sur la religion des Hébreux avant l'exil ?", choix: ["Ils croyaient tous déjà en un seul Dieu", "Ils honoraient encore souvent plusieurs dieux", "Ils n'avaient aucune religion"], bonne: 1, explication: "Statuettes de déesses et inscriptions montrent qu'avant l'exil, beaucoup d'Hébreux honoraient d'autres divinités à côté de Yahvé. Le monothéisme s'impose progressivement." },
          ],
        },
        {
          titre: "L'exil à Babylone, un tournant",
          blocs: [
            { t: "texte", md: "En **−587**, **Nabuchodonosor**, roi de **Babylone**, prend Jérusalem, **détruit le Temple** et déporte une partie des habitants : c'est l'**exil**. Loin de leur terre, privés du Temple, les exilés se rassemblent autour de leurs textes. C'est pendant et après l'exil que la **Bible est mise par écrit**. Ils affirment alors que leur Dieu est le **seul Dieu**, créateur du monde entier.\n\nEn −539, le roi perse Cyrus prend Babylone et permet aux exilés de rentrer. Le Temple est reconstruit et achevé vers −515 : c'est le second Temple." },
            { t: "citation", texte: "Sur les bords des fleuves de Babylone, nous étions assis et nous pleurions, en nous souvenant de Sion.", auteur: "La Bible", source: "Psaume 137, 1 (traduction Louis Segond, 1910)" },
            { t: "definition", terme: "Monothéisme", md: "Croyance en **un seul Dieu** (en grec, *monos* : seul ; *theos* : dieu). Le **judaïsme** est la première grande religion monothéiste." },
            { t: "propriete", titre: "Pourquoi l'exil est un moment clé", md: "Privés de leur Temple et de leur terre, les Hébreux fondent leur religion sur **le Livre** et sur la croyance en un **Dieu unique**. Le judaïsme peut alors se pratiquer **partout**, loin de Jérusalem." },
          ],
        },
        {
          titre: "Du second Temple à la diaspora",
          blocs: [
            { t: "texte", md: "En −63, les Romains prennent le contrôle de la région. En 66, les Juifs se révoltent. En **70**, l'armée romaine du futur empereur Titus détruit Jérusalem et le **second Temple**. De nombreux Juifs vivent désormais hors de Palestine.\n\nSans Temple, la religion continue grâce à la lecture de la Torah dans les **synagogues**, sous la direction des rabbins, les maîtres qui enseignent la Loi." },
            { t: "definition", terme: "Diaspora", md: "Mot grec signifiant « **dispersion** » : l'ensemble des Juifs qui vivent **dispersés hors de Palestine**." },
            { t: "definition", terme: "Synagogue", md: "Mot grec signifiant « assemblée » : le lieu où les Juifs se réunissent pour **prier et lire la Torah**." },
            { t: "frise", titre: "Repères de l'histoire des Hébreux et des Juifs", evenements: [{ date: -1000, label: "Règnes de David et Salomon à Jérusalem" }, { date: -722, label: "Les Assyriens détruisent le royaume d'Israël" }, { date: -587, label: "Destruction du Temple par Babylone : l'exil" }, { date: -539, label: "Cyrus prend Babylone, retour des exilés" }, { date: -515, label: "Achèvement du second Temple" }, { date: -63, label: "Les Romains contrôlent la région" }, { date: 70, label: "Les Romains détruisent le second Temple" }] },
          ],
        },
      ],
      bilan: "Des récits d'Abraham et de Moïse à l'épreuve de l'exil, les Hébreux ont peu à peu affirmé la croyance en un Dieu unique : fondé sur la Torah, le judaïsme survit à la perte du Temple et se transmet dans la diaspora.",
    },
    "6e-histoire-07-paix-romaine-romanisation": {
      accroche: "Près de Nîmes, trois étages d'arches de pierre enjambent la rivière du Gardon à près de 50 mètres de haut. Ce pont ne servait ni aux chars ni aux piétons, mais à l'eau ! Pourquoi les Romains ont-ils bâti de tels monuments jusqu'au fond de la Gaule ?",
      objectifs: [
        "Expliquer le passage de la République à l'Empire avec Auguste",
        "Décrire l'étendue, la défense et la paix de l'empire romain",
        "Caractériser la romanisation à travers la ville et la citoyenneté",
      ],
      sections: [
        {
          titre: "Des conquêtes au premier empereur",
          blocs: [
            { t: "texte", md: "Sous la République, Rome conquiert l'Italie, puis tout le pourtour de la Méditerranée. De **−58 à −51**, le général **Jules César** conquiert la **Gaule** ; en **−52**, il assiège **Alésia** et le chef gaulois **Vercingétorix** se rend.\n\nCes conquêtes rendent les généraux très puissants. Des **guerres civiles** déchirent Rome. César prend le pouvoir, mais il est assassiné en −44. Son fils adoptif **Octave** bat son rival Marc Antoine et la reine d'Égypte Cléopâtre à Actium, en −31. En **−27**, le Sénat lui donne le titre d'**Auguste** (« le vénérable ») : il devient le **premier empereur**." },
            { t: "citation", texte: "Par un décret du Sénat, je fus appelé Auguste. […] Dès lors, je l'emportai sur tous par mon autorité, mais je n'eus pas plus de pouvoir que mes collègues magistrats.", auteur: "Auguste", source: "Res gestae (Hauts faits du divin Auguste), 34 (traduction libre)" },
            { t: "definition", terme: "Empereur", md: "Chef unique de l'empire romain. Il commande l'**armée**, fait les **lois**, dirige la **religion** et choisit souvent son successeur. Il n'est pas élu. On lui rend un **culte impérial** : on l'honore comme un être presque divin." },
            { t: "attention", md: "Auguste prétend avoir rétabli la République : le Sénat et les consuls existent toujours. Mais en réalité, il concentre tous les pouvoirs. L'empereur n'est **pas élu chaque année** comme les consuls : il règne à vie." },
            { t: "verifie", q: "En quelle année Octave devient-il Auguste, premier empereur ?", choix: ["−509", "−52", "−27", "212"], bonne: 2, explication: "En −27, le Sénat lui donne le titre d'Auguste. −509 est la fondation de la République, −52 la bataille d'Alésia, 212 l'édit de Caracalla." },
          ],
        },
        {
          titre: "Un empire autour de « notre mer »",
          blocs: [
            { t: "texte", md: "Vers **117**, sous l'empereur Trajan, l'empire atteint sa plus grande étendue : de l'Écosse au Sahara, de l'océan Atlantique à l'Euphrate. Il compte peut-être 60 millions d'habitants. La Méditerranée est entièrement romaine : les Romains l'appellent *Mare nostrum*, « **notre mer** »." },
            { t: "carte", fond: "monde", titre: "L'empire romain vers 117", cadre: [-12, 25, 45, 58], reperes: [{ nom: "Rome", lat: 41.90, lon: 12.50 }, { nom: "Lyon (Lugdunum)", lat: 45.76, lon: 4.83 }, { nom: "Nîmes", lat: 43.84, lon: 4.36 }, { nom: "Alésia", lat: 47.54, lon: 4.50 }, { nom: "Londres (Londinium)", lat: 51.51, lon: -0.13 }, { nom: "Mur d'Hadrien", lat: 55.01, lon: -2.33 }, { nom: "Cologne", lat: 50.94, lon: 6.96 }, { nom: "Mérida", lat: 38.92, lon: -6.34 }, { nom: "Carthage", lat: 36.85, lon: 10.32 }, { nom: "Alexandrie", lat: 31.20, lon: 29.92 }, { nom: "Antioche", lat: 36.20, lon: 36.16 }, { nom: "Byzance", lat: 41.01, lon: 28.98 }], traits: [{ de: [41.90, 12.50], a: [47.54, 4.50], label: "César en Gaule (−58 / −51)" }], legende: "L'empire entoure la Méditerranée. Au nord, il est protégé par le limes : le mur d'Hadrien en Bretagne, des forts le long du Rhin et du Danube." },
            { t: "definition", terme: "Limes", md: "**Frontière fortifiée** de l'empire, avec des murs, des fossés, des tours et des camps de soldats. Le **mur d'Hadrien**, construit à partir de 122, coupe la Bretagne (l'actuelle Grande-Bretagne) sur 117 km." },
            { t: "definition", terme: "Légion", md: "Unité de base de l'armée romaine : environ **5 000 soldats** citoyens, les légionnaires, très entraînés. L'empire compte une trentaine de légions, installées surtout près des frontières." },
          ],
        },
        {
          titre: "La paix romaine",
          blocs: [
            { t: "definition", terme: "Paix romaine (pax romana)", md: "Longue période, aux **Ier et IIe siècles**, sans grande guerre à l'intérieur de l'empire. Les combats ont lieu surtout aux frontières." },
            { t: "texte", md: "Grâce à cette paix, on voyage et on commerce comme jamais. Les Romains construisent plus de 80 000 km de **routes** pavées, avec des bornes qui indiquent les distances. Elles servent d'abord à **déplacer vite les légions**, mais aussi aux messagers de l'empereur, aux fonctionnaires et aux marchands. Les navires sillonnent *Mare nostrum* : le blé d'Égypte nourrit Rome, l'huile vient d'Espagne, le vin de Gaule." },
            { t: "citation", texte: "Vous avez arpenté toute la terre habitée, jeté des ponts sur les fleuves, taillé des routes à travers les montagnes et rempli les déserts de relais.", auteur: "Aelius Aristide, orateur grec, vers 144", source: "Éloge de Rome (traduction libre)" },
            { t: "verifie", q: "Pourquoi les Romains construisent-ils un immense réseau de routes ?", choix: ["Pour les courses de chars", "Pour déplacer vite les légions et faciliter le commerce et l'administration", "Pour empêcher les peuples de voyager"], bonne: 1, explication: "Les routes relient Rome aux provinces : l'armée, les messagers, les fonctionnaires et les marchandises circulent rapidement." },
          ],
        },
        {
          titre: "Devenir romain : la romanisation",
          blocs: [
            { t: "definition", terme: "Romanisation", md: "Adoption du **mode de vie romain** par les peuples conquis : la ville, la langue **latine**, les dieux, les vêtements, les loisirs, le droit." },
            { t: "schema", titre: "Le plan d'une ville romaine", legende: "Deux grandes rues se croisent à angle droit, le cardo et le decumanus. Le forum, cœur de la ville, se trouve près de leur croisement.", svg: `<svg viewBox="0 0 400 245"><rect class="trait" x="40" y="20" width="280" height="200" fill="none"/><line class="trait-fin" x1="120" y1="20" x2="120" y2="220"/><line class="trait-fin" x1="280" y1="20" x2="280" y2="220"/><line class="trait-fin" x1="40" y1="70" x2="320" y2="70"/><line class="trait-fin" x1="40" y1="170" x2="320" y2="170"/><line class="trait" x1="200" y1="20" x2="200" y2="220" stroke-width="3"/><line class="trait" x1="40" y1="120" x2="320" y2="120" stroke-width="3"/><rect class="aplat-papier" x="50" y="30" width="62" height="34"/><rect class="trait-fin" x="50" y="30" width="62" height="34" fill="none"/><text class="texte-petit" x="81" y="51" text-anchor="middle">Thermes</text><path class="aplat" d="M210 62 A30 30 0 0 1 270 62 Z"/><path class="trait" d="M210 62 A30 30 0 0 1 270 62 Z"/><text class="texte-petit" x="240" y="56" text-anchor="middle">Théâtre</text><path class="trait" d="M134 84 L160 74 L186 84 Z"/><rect class="aplat-papier" x="136" y="84" width="48" height="24"/><rect class="trait-fin" x="136" y="84" width="48" height="24" fill="none"/><text class="texte-petit" x="160" y="100" text-anchor="middle">Temple</text><rect class="aplat" x="206" y="126" width="68" height="38"/><rect class="trait" x="206" y="126" width="68" height="38" fill="none"/><text class="texte" x="240" y="150" text-anchor="middle">Forum</text><rect class="pointille" x="50" y="180" width="26" height="30" fill="none"/><rect class="pointille" x="84" y="180" width="26" height="30" fill="none"/><text class="texte-petit" x="160" y="200" text-anchor="middle">Maisons</text><text class="texte-petit" x="46" y="114">decumanus</text><text class="texte-petit" x="206" y="212">cardo</text><ellipse class="aplat" cx="362" cy="190" rx="28" ry="18"/><ellipse class="trait" cx="362" cy="190" rx="28" ry="18" fill="none"/><text class="texte-petit" x="362" y="162" text-anchor="middle">Amphithéâtre</text><path class="pointille" d="M396 40 L324 40" marker-end="url(#fl-p)"/><text class="texte-petit" x="360" y="32" text-anchor="middle">Aqueduc</text><text class="texte-petit" x="40" y="236">Remparts</text></svg>` },
            { t: "tableau", titre: "Les monuments d'une ville romaine", entetes: ["Monument", "Fonction"], lignes: [["**Forum**", "place publique, politique et religieuse : temples, tribunal, marché"], ["**Thermes**", "bains publics, lieu de rencontre et de sport"], ["**Amphithéâtre**", "combats de gladiateurs et chasses aux fauves"], ["**Théâtre**", "pièces de théâtre"], ["**Aqueduc**", "apporter l'eau des sources jusqu'à la ville"]] },
            { t: "exemple", titre: "Des Gaulois devenus Romains", md: "**Lyon** (Lugdunum), fondée en −43, devient la **capitale des Gaules**. Chaque année, les délégués des peuples gaulois s'y réunissent pour honorer Rome et l'empereur.\n\nÀ **Nîmes**, on admire encore la **Maison carrée**, un temple, et un amphithéâtre. Un aqueduc d'environ 50 km, dont le **pont du Gard** est le tronçon le plus spectaculaire, apporte l'eau d'une source près d'Uzès. Les habitants, des Gaulois devenus Romains, profitent des thermes, des fontaines et des jeux. Le **latin** qu'ils apprennent deviendra, des siècles plus tard, le français." },
          ],
        },
        {
          titre: "Citoyens de l'empire",
          blocs: [
            { t: "texte", md: "Être **citoyen romain** est un privilège : on peut voter, devenir magistrat, être jugé selon le droit romain et faire appel à l'empereur. Peu à peu, Rome accorde la citoyenneté aux notables des provinces et aux soldats auxiliaires après leur service. En 48, l'empereur Claude, né à Lyon, fait entrer des nobles gaulois au Sénat.\n\nEn **212**, l'**édit de Caracalla** donne la citoyenneté à **tous les hommes libres** de l'empire. Les esclaves restent exclus." },
            { t: "frise", titre: "Repères de l'histoire romaine", evenements: [{ date: -509, label: "Fondation de la République" }, { date: -58, label: "César commence la conquête de la Gaule" }, { date: -52, label: "Bataille d'Alésia, reddition de Vercingétorix" }, { date: -44, label: "Assassinat de Jules César" }, { date: -27, label: "Octave devient Auguste, premier empereur" }, { date: 14, label: "Mort d'Auguste" }, { date: 117, label: "Plus grande étendue de l'empire sous Trajan" }, { date: 122, label: "Début du mur d'Hadrien" }, { date: 212, label: "Édit de Caracalla sur la citoyenneté" }, { date: 476, label: "Fin de l'empire romain d'Occident" }] },
            { t: "verifie", q: "Que décide l'édit de Caracalla en 212 ?", choix: ["Il interdit les jeux de l'amphithéâtre", "Tous les hommes libres de l'empire deviennent citoyens romains", "Il libère tous les esclaves"], bonne: 1, explication: "L'édit de Caracalla fait de tous les hommes libres de l'empire des citoyens romains. Les esclaves, eux, ne sont pas concernés." },
          ],
        },
      ],
      bilan: "Avec Auguste, Rome devient un empire qui unit la Méditerranée ; protégé par ses légions et son limes, il vit deux siècles de paix pendant lesquels les peuples conquis adoptent la ville, la langue et la citoyenneté romaines.",
    },
    "6e-histoire-08-chretiens-empire": {
      accroche: "Lyon, été 177. Dans l'amphithéâtre, une jeune esclave, Blandine, est livrée aux bêtes devant la foule. Son crime ? Être chrétienne et refuser de sacrifier aux dieux de Rome. Deux siècles plus tard, le christianisme sera pourtant la religion officielle de l'empire. Comment expliquer un tel retournement ?",
      objectifs: [
        "Connaître les origines du christianisme : Jésus, les Évangiles, Paul",
        "Expliquer la diffusion du christianisme et les persécutions",
        "Situer les étapes qui font du christianisme la religion de l'empire",
      ],
      sections: [
        {
          titre: "Jésus, un Juif de Palestine",
          blocs: [
            { t: "texte", md: "**Jésus** naît quelques années avant l'an 1 et grandit à Nazareth, en Galilée. Il vit en **Palestine** (Judée et Galilée), une région de l'empire romain peuplée de Juifs. Sous l'empereur Tibère, il parcourt le pays et prêche l'amour du prochain, le pardon et la venue du royaume de Dieu. Des disciples le suivent, dont douze **apôtres**.\n\nSon succès inquiète les autorités juives et romaines. Vers **30**, à **Jérusalem**, le gouverneur romain **Ponce Pilate** le condamne à mort : il est **crucifié**. Ses disciples affirment ensuite qu'il est ressuscité." },
            { t: "definition", terme: "Christ", md: "Pour ses disciples, Jésus est le **Messie**, l'envoyé de Dieu annoncé par la Bible hébraïque. « Messie » se dit **Christos** en grec : d'où le nom de **chrétiens**." },
            { t: "definition", terme: "Évangiles", md: "« **Bonne nouvelle** » en grec. Les quatre livres (de Marc, Matthieu, Luc et Jean) qui racontent la vie et le message de Jésus, écrits entre **65 et 100** environ. Ils font partie du Nouveau Testament." },
            { t: "exemple", titre: "Une source non chrétienne", md: "Les Évangiles sont écrits par des croyants. L'historien cherche donc aussi des sources extérieures. L'historien romain **Tacite**, qui n'aime pas les chrétiens, raconte vers 116 que Néron les a persécutés à Rome en 64, et que leur nom vient du Christ, exécuté par Ponce Pilate. C'est une preuve indépendante que des chrétiens vivaient à Rome dès le Ier siècle." },
            { t: "citation", texte: "Ce nom leur vient de Christ que, sous le règne de Tibère, le procurateur Ponce Pilate avait livré au supplice.", auteur: "Tacite, historien romain", source: "Annales, livre XV, 44 (traduction libre)" },
          ],
        },
        {
          titre: "Paul et la diffusion du message",
          blocs: [
            { t: "texte", md: "**Paul de Tarse** est un Juif et un citoyen romain. Il persécute d'abord les disciples de Jésus, puis se convertit sur la route de Damas. Entre 45 et 58 environ, il **voyage** en Asie Mineure et en Grèce, fonde des communautés et leur écrit des lettres. Surtout, il annonce le message de Jésus **aux non-Juifs** : le christianisme devient une religion distincte du judaïsme. Arrêté, il est conduit à Rome, où il meurt vers 64-67." },
            { t: "carte", fond: "monde", titre: "Les voyages de Paul et les premières communautés", cadre: [2, 28, 40, 47], reperes: [{ nom: "Jérusalem", lat: 31.78, lon: 35.23 }, { nom: "Damas", lat: 33.51, lon: 36.29 }, { nom: "Tarse", lat: 36.92, lon: 34.89 }, { nom: "Antioche", lat: 36.20, lon: 36.16 }, { nom: "Éphèse", lat: 37.94, lon: 27.34 }, { nom: "Thessalonique", lat: 40.64, lon: 22.94 }, { nom: "Corinthe", lat: 37.91, lon: 22.88 }, { nom: "Athènes", lat: 37.98, lon: 23.73 }, { nom: "Rome", lat: 41.90, lon: 12.50 }, { nom: "Lyon", lat: 45.76, lon: 4.83 }], traits: [{ de: [31.78, 35.23], a: [33.51, 36.29], label: "route de Damas" }, { de: [36.20, 36.16], a: [37.94, 27.34], label: "voyages de Paul" }, { de: [37.94, 27.34], a: [40.64, 22.94] }, { de: [40.64, 22.94], a: [37.91, 22.88] }, { de: [32.50, 34.89], a: [41.90, 12.50], label: "Paul conduit à Rome" }], legende: "Le christianisme se répand d'abord dans les villes, le long des routes et des voies maritimes de l'empire." },
            { t: "texte", md: "Pourquoi le message se répand-il si vite ? Grâce à la **paix romaine**, aux **routes** et aux bateaux qui relient les **villes**, et au **grec**, compris dans tout l'Orient. Les communautés accueillent des riches et des pauvres, des femmes et des esclaves, et pratiquent l'entraide." },
            { t: "verifie", q: "Comment le christianisme se diffuse-t-il dans l'empire aux trois premiers siècles ?", choix: ["Par une conquête militaire", "Par les routes et les villes, grâce à la paix romaine et aux voyageurs", "Par une loi de l'empereur dès le Ier siècle"], bonne: 1, explication: "Missionnaires, marchands et soldats voyagent sur les routes sûres de l'empire : les communautés chrétiennes naissent d'abord dans les villes." },
          ],
        },
        {
          titre: "Des chrétiens persécutés",
          blocs: [
            { t: "texte", md: "Les Romains acceptent beaucoup de dieux étrangers. Mais les chrétiens sont **monothéistes** : ils **refusent de sacrifier aux dieux** de Rome et de rendre un **culte à l'empereur**. On les accuse d'être de mauvais citoyens, responsables des malheurs. Certains sont **persécutés** : sous **Néron** en 64, après l'incendie de Rome ; à **Lyon** en 177 ; et surtout sous **Dioclétien**, lors de la « grande persécution » qui commence en 303." },
            { t: "definition", terme: "Martyr", md: "Mot grec qui signifie « **témoin** » : un chrétien mis à mort parce qu'il refuse de renier sa foi. Blandine est une martyre." },
            { t: "attention", md: "Les persécutions ne sont pas continues : elles sont locales ou limitées dans le temps, avec de longues périodes de calme. Les chrétiens restent pourtant longtemps une minorité suspecte." },
            { t: "schema", titre: "Deux signes des premiers chrétiens", legende: "Le poisson se dit ichthus en grec : ses lettres sont les initiales de « Jésus-Christ, Fils de Dieu, Sauveur ». Le chrisme superpose X (khi) et P (rhô), les deux premières lettres de « Christ » en grec.", svg: `<svg viewBox="0 0 400 200"><path class="aplat" d="M30 85 Q100 25 165 110 L165 60 Q100 145 30 85 Z"/><path class="trait" d="M30 85 Q100 25 170 115"/><path class="trait" d="M30 85 Q100 145 170 55"/><text class="texte" x="92" y="90" text-anchor="middle">ΙΧΘΥΣ</text><text class="texte-petit" x="100" y="160" text-anchor="middle">Ichthus :</text><text class="texte-petit" x="100" y="176" text-anchor="middle">« poisson » en grec</text><circle class="aplat-papier" cx="295" cy="85" r="52"/><circle class="trait-fin" cx="295" cy="85" r="52" fill="none"/><line class="trait" x1="265" y1="55" x2="325" y2="115" stroke-width="3"/><line class="trait" x1="325" y1="55" x2="265" y2="115" stroke-width="3"/><line class="trait" x1="295" y1="40" x2="295" y2="130" stroke-width="3"/><path class="trait" d="M295 40 Q325 40 325 57 Q325 74 295 74" fill="none" stroke-width="3"/><text class="texte-petit" x="295" y="160" text-anchor="middle">Chrisme :</text><text class="texte-petit" x="295" y="176" text-anchor="middle">X et P, initiales de Christ</text></svg>` },
          ],
        },
        {
          titre: "De l'édit de Milan à la religion officielle",
          blocs: [
            { t: "texte", md: "Au début du IVe siècle, tout change. L'empereur **Constantin** se tourne vers le Dieu des chrétiens. En **313**, par l'**édit de Milan**, il **autorise le christianisme** : chacun peut pratiquer librement sa religion. Il fait construire de grandes **basiliques**, comme la première basilique Saint-Pierre à Rome.\n\nEn **380**, l'empereur **Théodose** fait du christianisme la **religion officielle** de l'empire ; quelques années plus tard, il interdit les cultes païens. Les chrétiens sont organisés en **Église**, dirigée dans chaque ville par un **évêque**." },
            { t: "citation", texte: "Nous avons décidé d'accorder aux chrétiens, comme à tous, la liberté de suivre la religion de leur choix.", auteur: "Constantin et Licinius, empereurs", source: "Édit de Milan (313), rapporté par Lactance (traduction libre)" },
            { t: "tableau", titre: "Judaïsme et christianisme", entetes: ["", "Judaïsme", "Christianisme"], lignes: [["Dieu", "un Dieu unique", "un Dieu unique"], ["Jésus", "un prédicateur juif ; le Messie est encore attendu", "le **Messie**, fils de Dieu, ressuscité"], ["Textes sacrés", "la Bible hébraïque", "la Bible hébraïque (Ancien Testament) et le Nouveau Testament"], ["Lieu de culte", "la synagogue", "l'église, la basilique"]] },
            { t: "frise", titre: "Les chrétiens dans l'empire", evenements: [{ date: 30, label: "Crucifixion de Jésus à Jérusalem", detail: "Vers 30." }, { date: 45, label: "Voyages de Paul", detail: "Vers 45-58." }, { date: 64, label: "Persécution de Néron à Rome" }, { date: 65, label: "Rédaction des Évangiles", detail: "Entre 65 et 100 environ." }, { date: 177, label: "Martyrs de Lyon, dont Blandine" }, { date: 303, label: "Grande persécution de Dioclétien" }, { date: 313, label: "Édit de Milan de Constantin" }, { date: 380, label: "Édit de Théodose : religion officielle" }] },
            { t: "verifie", q: "Le christianisme devient-il la religion officielle dès la mort de Jésus ?", choix: ["Oui, dès l'an 30", "Non, seulement en 380 avec Théodose", "Oui, en 64 avec Néron"], bonne: 1, explication: "Il faut 350 ans : les chrétiens sont d'abord minoritaires et parfois persécutés, puis autorisés en 313 et enfin religion officielle en 380." },
          ],
        },
      ],
      bilan: "Né en Palestine avec Jésus, diffusé par Paul le long des routes de l'empire, le christianisme passe en trois siècles du statut de religion persécutée à celui de religion officielle.",
    },
    "6e-histoire-09-route-soie-chine-han": {
      accroche: "Rome, Ier siècle. Les dames riches portent des robes de soie si fines qu'on voit presque à travers, et le philosophe Sénèque s'en indigne. Ce tissu vient du « pays des Sères », à plus de 7 000 km, qu'aucun Romain n'a jamais vu. Comment la soie a-t-elle fait un tel voyage ?",
      objectifs: [
        "Présenter la Chine des Han, un autre grand empire de l'Antiquité",
        "Décrire les routes de la soie et les échanges indirects entre Rome et la Chine",
        "Comparer les deux empires et montrer les limites de leurs contacts",
      ],
      sections: [
        {
          titre: "La Chine des Han, un autre grand empire",
          blocs: [
            { t: "texte", md: "En −221, le roi de Qin unifie la Chine et devient son premier empereur. Peu après sa mort, un chef rebelle, Liu Bang, fonde en **−206** la dynastie des **Han**, qui règne jusqu'en **220**. Sa capitale est **Chang'an** (l'actuelle Xi'an), puis **Luoyang**. Vers l'an 2, un recensement compte près de **58 millions** d'habitants : autant que l'empire romain !" },
            { t: "definition", terme: "Dynastie", md: "Suite de souverains appartenant à **une même famille**, qui se transmettent le pouvoir. Les Han gouvernent la Chine pendant plus de quatre siècles." },
            { t: "texte", md: "L'empereur, appelé « **Fils du Ciel** », gouverne grâce à des **fonctionnaires lettrés**. Ils sont choisis pour leur connaissance des textes de **Confucius**, un sage du VIe siècle av. J.-C. (−551 / −479), qui enseigne le respect des parents, le sens du devoir et le bon gouvernement. Une école impériale, créée en −124, les forme.\n\nAu nord vivent des nomades cavaliers redoutables, les **Xiongnu**. Pour s'en protéger, les Han renforcent et prolongent la **Grande Muraille**, gardée par des soldats." },
            { t: "savais-tu", md: "C'est sous les Han que le **papier** est mis au point : en 105, le fonctionnaire Cai Lun en perfectionne la fabrication." },
          ],
        },
        {
          titre: "Le secret de la soie",
          blocs: [
            { t: "etapes", titre: "De la chenille à l'étoffe", items: [{ titre: "Les œufs", md: "Un papillon de nuit, le bombyx, pond des centaines d'œufs." }, { titre: "Les chenilles", md: "Les « vers à soie » dévorent des feuilles de mûrier pendant un mois." }, { titre: "Le cocon", md: "Chaque chenille s'enferme dans un cocon fait d'un seul fil, long de près d'un kilomètre." }, { titre: "Le dévidage", md: "On plonge les cocons dans l'eau bouillante et on déroule le fil." }, { titre: "Le tissage", md: "Les fils sont teints et tissés : on obtient une étoffe légère, brillante et solide." }] },
            { t: "texte", md: "Les Chinois gardent jalousement le **secret** de fabrication : il est interdit de faire sortir les œufs de bombyx. À Rome, la soie est un luxe très recherché, que l'on paie en **or et en argent**. L'écrivain Pline l'Ancien s'en plaint." },
            { t: "citation", texte: "Chaque année, l'Inde, le pays des Sères et l'Arabie enlèvent à notre empire cent millions de sesterces, au bas mot : voilà ce que nous coûtent le luxe et les femmes.", auteur: "Pline l'Ancien, savant romain (Ier siècle)", source: "Histoire naturelle, livre XII, 84 (traduction libre)" },
          ],
        },
        {
          titre: "Les routes de la soie",
          blocs: [
            { t: "definition", terme: "Routes de la soie", md: "**Réseau** de pistes caravanières et de routes maritimes, long de plus de **7 000 km**, qui relie la Chine à la Méditerranée à travers l'Asie centrale, la Perse et l'Inde. Le nom a été inventé au XIXe siècle par un géographe allemand." },
            { t: "texte", md: "Vers −138, l'empereur Wu envoie un ambassadeur, **Zhang Qian**, chercher des alliés contre les Xiongnu. Il revient treize ans plus tard sans alliance, mais avec des récits sur les royaumes de l'Ouest et leurs magnifiques chevaux. Les Han ouvrent alors la route vers l'Asie centrale.\n\nUne balle de soie part de **Chang'an**, longe le **désert du Taklamakan** d'oasis en oasis, franchit les montagnes du Pamir, atteint **Samarcande**, traverse l'**empire des Parthes** (en Perse), gagne les villes romaines de Syrie comme **Antioche**, puis embarque vers **Rome**. Une autre route passe par la mer : de l'Égypte romaine, des navires gagnent l'Inde grâce aux vents de la mousson." },
            { t: "carte", fond: "monde", titre: "Les routes de la soie aux Ier et IIe siècles", cadre: [5, 0, 125, 55], reperes: [{ nom: "Chang'an", lat: 34.34, lon: 108.94 }, { nom: "Luoyang", lat: 34.62, lon: 112.45 }, { nom: "Dunhuang", lat: 40.14, lon: 94.66 }, { nom: "Kashgar", lat: 39.47, lon: 75.99 }, { nom: "Samarcande", lat: 39.65, lon: 66.96 }, { nom: "Merv", lat: 37.66, lon: 62.19 }, { nom: "Ctésiphon (Parthes)", lat: 33.09, lon: 44.58 }, { nom: "Palmyre", lat: 34.55, lon: 38.27 }, { nom: "Antioche", lat: 36.20, lon: 36.16 }, { nom: "Rome", lat: 41.90, lon: 12.50 }, { nom: "Alexandrie", lat: 31.20, lon: 29.92 }, { nom: "Muziris (Inde)", lat: 10.16, lon: 76.21 }, { nom: "Óc Eo", lat: 10.24, lon: 105.15 }], traits: [{ de: [34.34, 108.94], a: [40.14, 94.66] }, { de: [40.14, 94.66], a: [39.47, 75.99], label: "oasis du Taklamakan" }, { de: [39.47, 75.99], a: [39.65, 66.96] }, { de: [39.65, 66.96], a: [37.66, 62.19] }, { de: [37.66, 62.19], a: [33.09, 44.58], label: "empire des Parthes" }, { de: [33.09, 44.58], a: [34.55, 38.27] }, { de: [34.55, 38.27], a: [36.20, 36.16] }, { de: [36.20, 36.16], a: [41.90, 12.50], label: "par la mer" }, { de: [23.91, 35.47], a: [10.16, 76.21], label: "route maritime de l'Inde" }, { de: [10.16, 76.21], a: [10.24, 105.15] }], legende: "Les marchandises passent de main en main, d'est en ouest : aucun marchand ne fait tout le trajet." },
            { t: "tableau", titre: "Ce qui circule sur les routes de la soie", entetes: ["Produit", "Région d'origine"], lignes: [["**Soie**, laque", "Chine"], ["**Épices**, poivre, cotonnades", "Inde"], ["**Chevaux**", "Asie centrale"], ["Encens", "Arabie"], ["**Verrerie**, **or** et argent, vin", "empire romain"]] },
          ],
        },
        {
          titre: "Des échanges indirects",
          blocs: [
            { t: "texte", md: "Les échanges sont **indirects** : la soie passe de main en main, entre marchands chinois, sogdiens (de Samarcande), parthes, indiens, syriens. Chacun prend un bénéfice, et le prix grimpe à chaque étape. **Aucun Romain n'atteint la Chine**, et les deux empires se connaissent à peine : les Han appellent Rome **Da Qin**, « la grande Qin »." },
            { t: "exemple", titre: "Le voyage manqué de Gan Ying (97)", md: "Vers 97, le général chinois Ban Chao envoie l'émissaire **Gan Ying** vers l'ouest pour atteindre Da Qin. Arrivé au bord du golfe Persique, il est accueilli par les **Parthes**. Ils lui décrivent une traversée terrible, qui pourrait durer deux ans. Gan Ying renonce. Les Parthes avaient intérêt à l'effrayer : ils gagnent beaucoup d'argent comme **intermédiaires** et ne veulent pas que Romains et Chinois commercent directement." },
            { t: "texte", md: "Sur ces routes circulent aussi des **idées** et des **religions** : venu d'Inde, le **bouddhisme** arrive en Chine au Ier siècle. L'archéologie apporte des preuves des échanges : on a retrouvé des **verres romains** dans des tombes chinoises et des **monnaies romaines** en Inde et jusqu'à Óc Eo, au Vietnam." },
            { t: "verifie", q: "Pourquoi les Parthes ne veulent-ils pas que Romains et Chinois se rencontrent directement ?", choix: ["Parce qu'ils sont en guerre contre la Chine", "Parce qu'ils gagnent beaucoup d'argent comme intermédiaires", "Parce qu'ils ne connaissent pas la route"], bonne: 1, explication: "Placés au milieu de la route, les Parthes revendent la soie avec un gros bénéfice : un contact direct le leur ferait perdre." },
          ],
        },
        {
          titre: "Rome et les Han, deux empires face à face",
          blocs: [
            { t: "tableau", titre: "Deux empires comparés", entetes: ["", "Empire romain", "Empire des Han"], lignes: [["Dates", "de −27 à 476 (en Occident)", "de −206 à 220"], ["Chef", "l'**empereur**, honoré par un culte", "l'**empereur**, « Fils du Ciel »"], ["Capitale", "Rome", "Chang'an, puis Luoyang"], ["Administration", "gouverneurs et fonctionnaires", "**fonctionnaires lettrés** confucéens"], ["Frontière fortifiée", "le **limes**", "la **Grande Muraille**"], ["Voisins menaçants", "peuples germains, Parthes", "nomades Xiongnu"]] },
            { t: "propriete", titre: "Points communs et limites", md: "Rome et les Han sont deux **vastes empires** dirigés par un **empereur**, avec une armée, des fonctionnaires et des **frontières fortifiées**. Ils échangent des produits, mais **indirectement** : ils ne se rencontrent jamais vraiment." },
            { t: "frise", titre: "Repères de la Chine et des routes de la soie", evenements: [{ date: -551, label: "Naissance de Confucius" }, { date: -221, label: "Premier empereur de Chine (Qin)" }, { date: -206, label: "Début de la dynastie des Han" }, { date: -138, label: "Départ de Zhang Qian vers l'ouest" }, { date: -27, label: "Auguste, premier empereur romain" }, { date: 97, label: "Mission de Gan Ying" }, { date: 105, label: "Cai Lun perfectionne le papier" }, { date: 220, label: "Fin de la dynastie des Han" }] },
            { t: "verifie", q: "Quel point commun ont l'empire romain et l'empire des Han ?", choix: ["Ils parlent la même langue", "Un vaste territoire dirigé par un empereur, protégé par des frontières fortifiées", "Ils ont la même religion"], bonne: 1, explication: "Les deux empires ont un empereur, une administration et des frontières défendues (limes, Grande Muraille), mais leurs langues et leurs religions sont différentes." },
          ],
        },
      ],
      bilan: "Pendant que Rome domine la Méditerranée, les Han gouvernent la Chine ; reliés par les routes de la soie, les deux empires échangent soie, or et idées, mais toujours par des intermédiaires.",
    },
    "6e-histoire-10-reperes-methode": {
      accroche: "Un historien étudie deux inscriptions : l'une de −480, l'autre de 313. Laquelle est la plus ancienne ? À quels siècles appartiennent-elles ? Combien d'années les séparent ? Pour répondre sans te tromper, il te faut quelques outils… et la méthode de l'historien.",
      objectifs: [
        "Se repérer dans le temps : avant et après J.-C., siècles, chiffres romains",
        "Connaître les grandes périodes de l'histoire et les repères de l'année",
        "Comprendre comment l'historien travaille à partir de sources",
      ],
      sections: [
        {
          titre: "Compter les années : avant et après J.-C.",
          blocs: [
            { t: "texte", md: "Notre calendrier compte les années à partir de la **naissance supposée de Jésus**, l'**an 1**. Cette date a été calculée au VIe siècle par un moine, Denys le Petit, qui s'est d'ailleurs trompé de quelques années. Après l'an 1, on compte normalement : on écrit « apr. J.-C. » ou rien du tout. Avant, on **compte à rebours** : « av. J.-C. », ou un signe moins (−753)." },
            { t: "schema", titre: "De part et d'autre de l'an 1", legende: "Il n'y a pas d'année zéro : on passe directement de l'an −1 à l'an 1.", svg: `<svg viewBox="0 0 400 200"><path class="trait" d="M190 62 L28 62" marker-end="url(#fl)"/><text class="texte" x="110" y="52" text-anchor="middle">avant J.-C.</text><path class="trait" d="M210 62 L372 62" marker-end="url(#fl)"/><text class="texte" x="290" y="52" text-anchor="middle">après J.-C.</text><line class="trait" x1="10" y1="110" x2="392" y2="110"/><line class="trait" x1="20" y1="102" x2="20" y2="118"/><line class="trait" x1="80" y1="102" x2="80" y2="118"/><line class="trait" x1="140" y1="102" x2="140" y2="118"/><line class="trait" x1="200" y1="96" x2="200" y2="124" stroke-width="3"/><line class="trait" x1="260" y1="102" x2="260" y2="118"/><line class="trait" x1="320" y1="102" x2="320" y2="118"/><line class="trait" x1="380" y1="102" x2="380" y2="118"/><text class="texte-petit" x="20" y="134" text-anchor="middle">−300</text><text class="texte-petit" x="80" y="134" text-anchor="middle">−200</text><text class="texte-petit" x="140" y="134" text-anchor="middle">−100</text><text class="texte-pigment" x="200" y="138" text-anchor="middle">1</text><text class="texte-petit" x="260" y="134" text-anchor="middle">100</text><text class="texte-petit" x="320" y="134" text-anchor="middle">200</text><text class="texte-petit" x="380" y="134" text-anchor="middle">300</text><text class="texte-petit" x="50" y="96" text-anchor="middle">IIIe av.</text><text class="texte-petit" x="110" y="96" text-anchor="middle">IIe av.</text><text class="texte-petit" x="170" y="96" text-anchor="middle">Ier av.</text><text class="texte-petit" x="230" y="96" text-anchor="middle">Ier</text><text class="texte-petit" x="290" y="96" text-anchor="middle">IIe</text><text class="texte-petit" x="350" y="96" text-anchor="middle">IIIe</text><text class="texte-main" x="200" y="170" text-anchor="middle">naissance supposée de Jésus</text><line class="pointille" x1="200" y1="144" x2="200" y2="154"/></svg>` },
            { t: "propriete", titre: "Comparer deux dates avant J.-C.", md: "Avant J.-C., **plus le nombre est grand, plus la date est ancienne** : −753 est plus ancien que −509. Après J.-C., c'est l'inverse : 380 est plus récent que 313." },
            { t: "exemple", titre: "Combien d'années entre −753 et 313 ?", etapes: ["De −753 à −1 : 752 ans.", "De −1 à 1 : 1 an (il n'y a pas d'année zéro).", "De 1 à 313 : 312 ans.", "Total : 752 + 1 + 312 = **1 065 ans**. Raccourci : 753 + 313 − 1 = 1 065."] },
            { t: "verifie", q: "Combien d'années séparent l'an −50 de l'an 50 ?", choix: ["100 ans", "99 ans", "50 ans"], bonne: 1, explication: "Quand on passe d'avant à après J.-C., on additionne puis on retire 1, car il n'y a pas d'année zéro : 50 + 50 − 1 = 99 ans." },
          ],
        },
        {
          titre: "Les siècles et les chiffres romains",
          blocs: [
            { t: "definition", terme: "Siècle", md: "Période de **100 ans**. Le Ier siècle va de l'an 1 à l'an 100 ; le XIXe siècle de 1801 à 1900 ; le XXIe siècle a commencé en 2001." },
            { t: "tableau", titre: "Les chiffres romains", entetes: ["Chiffre romain", "I", "V", "X", "L", "C", "D", "M"], lignes: [["Valeur", "1", "5", "10", "50", "100", "500", "1 000"]] },
            { t: "propriete", titre: "Lire un nombre en chiffres romains", md: "On **additionne** les chiffres rangés du plus grand au plus petit : VI = 6, XIV = 14, XXI = 21.\nUn chiffre plus petit placé **avant** un plus grand se **soustrait** : IV = 4, IX = 9, XIX = 19, XL = 40, XC = 90." },
            { t: "exemple", titre: "Trouver le siècle d'une année", etapes: ["On prend le nombre de centaines et on ajoute 1 : 1515 → 15 + 1 = 16, soit le **XVIe siècle**.", "1789 → 17 + 1 = 18 : **XVIIIe siècle**.", "Exception : une année qui finit par 00 appartient au siècle de son nombre de centaines. 1900 → **XIXe siècle**.", "Avant J.-C., même méthode : −480 → 4 + 1 = 5 : **Ve siècle av. J.-C.** ; −753 → **VIIIe siècle av. J.-C.**"] },
            { t: "attention", md: "L'an 2000 appartient encore au **XXe siècle** ! Le XXIe siècle commence le 1er janvier 2001, puisque le Ier siècle a commencé en l'an 1." },
            { t: "verifie", q: "À quel siècle appartient l'année 1515 ?", choix: ["XVe siècle", "XVIe siècle", "XIVe siècle"], bonne: 1, explication: "15 centaines + 1 = 16 : 1515 est au XVIe siècle, qui va de 1501 à 1600." },
          ],
        },
        {
          titre: "Les grandes périodes et les repères de 6e",
          blocs: [
            { t: "tableau", titre: "Les cinq grandes périodes de l'histoire", entetes: ["Période", "Début", "Fin"], lignes: [["**Préhistoire**", "apparition des premiers humains", "invention de l'**écriture** (vers −3300)"], ["**Antiquité**", "vers −3300", "**476** : chute de l'empire romain d'Occident"], ["**Moyen Âge**", "476", "1492 : Christophe Colomb atteint l'Amérique"], ["**Temps modernes**", "1492", "1789 : Révolution française"], ["**Époque contemporaine**", "1789", "aujourd'hui"]] },
            { t: "astuce", md: "Pour retenir l'ordre des périodes, pense à la phrase : « **P**apa **A**ime **M**anger **T**rois **C**rêpes » : Préhistoire, Antiquité, Moyen Âge, Temps modernes, époque Contemporaine." },
            { t: "frise", titre: "Les repères de l'année de 6e", evenements: [{ date: -10000, label: "Début du Néolithique" }, { date: -3300, label: "Invention de l'écriture" }, { date: -776, label: "Premiers jeux olympiques" }, { date: -753, label: "Fondation légendaire de Rome" }, { date: -509, label: "Naissance de la République romaine" }, { date: -508, label: "Clisthène : démocratie athénienne" }, { date: -52, label: "Bataille d'Alésia" }, { date: -27, label: "Auguste, premier empereur" }, { date: 30, label: "Mort de Jésus (vers 30)" }, { date: 313, label: "Édit de Milan" }, { date: 380, label: "Édit de Théodose" }, { date: 476, label: "Fin de l'empire romain d'Occident" }] },
            { t: "carte", fond: "monde", titre: "Les lieux de l'année de 6e", cadre: [-10, 20, 120, 55], reperes: [{ nom: "Lascaux", lat: 45.05, lon: 1.17 }, { nom: "Alésia", lat: 47.54, lon: 4.50 }, { nom: "Rome", lat: 41.90, lon: 12.50 }, { nom: "Athènes", lat: 37.98, lon: 23.73 }, { nom: "Çatal Höyük", lat: 37.67, lon: 32.83 }, { nom: "Jérusalem", lat: 31.78, lon: 35.23 }, { nom: "Gizeh", lat: 29.98, lon: 31.13 }, { nom: "Uruk", lat: 31.32, lon: 45.64 }, { nom: "Chang'an", lat: 34.34, lon: 108.94 }], legende: "De la grotte de Lascaux à Chang'an, capitale des Han : les principaux lieux étudiés cette année." },
          ],
        },
        {
          titre: "Le travail de l'historien",
          blocs: [
            { t: "definition", terme: "Source", md: "Tout document qui nous renseigne sur le passé et que l'historien étudie : un texte, un objet, un monument, une image." },
            { t: "tableau", titre: "Les différents types de sources", entetes: ["Type", "Exemples"], lignes: [["**Écrite**", "tablette d'argile cunéiforme, papyrus, inscription, livre d'un historien ancien"], ["**Matérielle**", "outil, os, poterie, monnaie, monument, trouvés par l'**archéologie**"], ["**Iconographique**", "peinture, mosaïque, sculpture, vase peint"]] },
            { t: "etapes", titre: "Critiquer un document", items: [{ titre: "Quoi ?", md: "Quelle est la nature du document : texte, objet, image ?" }, { titre: "Qui ?", md: "Qui l'a écrit ou fabriqué ? Quel est son point de vue ?" }, { titre: "Quand ?", md: "À quelle date ? Longtemps après les faits, ou au moment même ?" }, { titre: "Pourquoi ?", md: "Pour qui et dans quel but : informer, glorifier, convaincre ?" }, { titre: "Confronter", md: "Le comparer avec d'autres sources et avec l'archéologie." }] },
            { t: "exemple", titre: "Peut-on croire Tite-Live ?", md: "Tite-Live raconte la fondation de Rome en −753. Mais il écrit plus de **700 ans après**, sous Auguste, pour glorifier Rome. Son récit dit ce que croyaient les Romains, pas forcément ce qui s'est passé. L'historien le **confronte** aux fouilles du Palatin, qui montrent des villages de cabanes du VIIIe siècle av. J.-C." },
            { t: "verifie", q: "Pourquoi l'historien se demande-t-il « qui a écrit ce document et pourquoi ? »", choix: ["Pour connaître l'écriture de l'auteur", "Parce que l'auteur a un point de vue et peut transformer les faits", "Parce que tous les textes anciens sont faux"], bonne: 1, explication: "Un auteur ancien n'est pas neutre : il peut vouloir glorifier un chef ou une cité. L'historien ne le croit pas sur parole et vérifie avec d'autres sources." },
          ],
        },
      ],
      bilan: "Avant ou après J.-C., siècles en chiffres romains, grandes périodes : avec ces repères et des sources critiquées avec méthode, tu peux remonter le temps comme un véritable historien.",
    },
  },
};
