// Cours ÉCLORE — 5e Français. Schéma : docs/COURS.md
export default {
  id: "5e-francais",
  chapitres: {
    "5e-francais-01-voyage-aventure": {
      accroche: "Un gentleman anglais parie toute sa fortune qu'il fera le tour de la Terre en quatre-vingts jours. Un marchand vénitien traverse l'Asie à cheval jusqu'au palais de l'empereur de Chine. Pourquoi des hommes et des femmes, réels ou inventés, quittent-ils tout pour l'inconnu ? Et pourquoi aimons-nous tant lire leurs aventures ?",
      objectifs: [
        "Reconnaître un récit de voyage et un récit d'aventure",
        "Situer les grands voyageurs et les grands auteurs du voyage",
        "Identifier le narrateur et les péripéties d'un récit",
      ],
      sections: [
        {
          titre: "Raconter un voyage : du réel à l'imaginaire",
          blocs: [
            { t: "texte", md: "Depuis l'Antiquité, on raconte des voyages. Homère, dans *L'Odyssée*, suit Ulysse qui met dix ans à rentrer chez lui après la guerre de Troie. Certains récits racontent des voyages **réels** : l'explorateur dit ce qu'il a vu. D'autres sont **inventés** : l'écrivain imagine un monde à découvrir.\n\nDans les deux cas, le récit mêle trois ingrédients : la **description des lieux** (paysages, villes, peuples), les **rencontres** (amis, ennemis, inconnus) et les **émotions** du voyageur (émerveillement, peur, nostalgie)." },
            { t: "definition", terme: "Récit de voyage", md: "Texte qui raconte un déplacement, réel ou imaginaire, vers l'inconnu. Il décrit les lieux, rapporte les rencontres et exprime ce que ressent le voyageur." },
            { t: "definition", terme: "Carnet de bord", md: "Journal tenu **jour après jour** pendant le voyage, souvent avec la date et le lieu. C'est un texte réel, écrit sur le moment, comme le journal de Christophe Colomb." },
            { t: "verifie", q: "Un explorateur note chaque soir la date, la position du navire et les événements du jour. Qu'écrit-il ?", choix: ["Un carnet de bord", "Une robinsonnade", "Un roman d'aventure", "Une pièce de théâtre"], bonne: 0, explication: "Un texte tenu jour après jour, daté, pendant le voyage : c'est un carnet de bord. Une robinsonnade et un roman d'aventure sont des fictions." },
          ],
        },
        {
          titre: "Les grands voyageurs et leurs récits",
          blocs: [
            { t: "texte", md: "Vers 1298, le Vénitien **Marco Polo**, prisonnier à Gênes, dicte ses souvenirs à un compagnon de cellule : c'est *Le Devisement du monde* (on l'appelle aussi *Le Livre des merveilles*). Il y raconte son long séjour en **Chine**, auprès de l'empereur mongol **Kubilaï Khan**, au XIIIe siècle.\n\nDeux siècles plus tard viennent les **grandes découvertes**. En **1492**, Christophe Colomb atteint l'Amérique en croyant arriver en Inde. De 1519 à 1522, l'expédition de **Magellan** réalise le premier tour du monde. Magellan meurt en route, aux Philippines : c'est son compagnon Elcano qui ramène le dernier navire en Espagne." },
            { t: "frise", titre: "Voyages réels et récits inventés", evenements: [
              { date: 1298, label: "Le Devisement du monde", detail: "Marco Polo raconte la Chine de Kubilaï Khan." },
              { date: 1492, label: "Colomb atteint l'Amérique", detail: "Il tient un journal de bord pendant la traversée." },
              { date: 1519, label: "Départ de Magellan", detail: "Premier tour du monde, achevé en 1522." },
              { date: 1719, label: "Robinson Crusoé", detail: "Roman de Daniel Defoe : un naufragé seul sur une île." },
              { date: 1870, label: "Vingt mille lieues sous les mers", detail: "Jules Verne invente le Nautilus du capitaine Nemo." },
              { date: 1872, label: "Le Tour du monde en 80 jours", detail: "Le pari de Phileas Fogg et de son valet Passepartout." },
            ] },
            { t: "texte", md: "**Jules Verne** (1828-1905) écrit des **romans d'aventure scientifiques** : ses héros voyagent grâce aux inventions de leur temps, ou à des machines qui n'existent pas encore. Dans *Le Tour du monde en quatre-vingts jours*, Phileas Fogg parie qu'il bouclera le tour de la Terre en **80 jours**. Il gagne grâce au décalage horaire : en allant vers l'est, il a « gagné » un jour sans s'en rendre compte !" },
            { t: "carte", fond: "monde", titre: "Les principales étapes de Phileas Fogg", legende: "Fogg voyage toujours vers l'est, en bateau et en train ; de Yokohama, il traverse le Pacifique jusqu'à San Francisco.", reperes: [
              { nom: "Londres", lat: 51.51, lon: -0.13 }, { nom: "Suez", lat: 29.97, lon: 32.55 }, { nom: "Bombay", lat: 18.96, lon: 72.82 }, { nom: "Calcutta", lat: 22.57, lon: 88.36 }, { nom: "Hong Kong", lat: 22.32, lon: 114.17 }, { nom: "Yokohama", lat: 35.44, lon: 139.64 }, { nom: "San Francisco", lat: 37.77, lon: -122.42 }, { nom: "New York", lat: 40.71, lon: -74.01 },
            ], traits: [
              { de: [51.51, -0.13], a: [29.97, 32.55] }, { de: [29.97, 32.55], a: [18.96, 72.82] }, { de: [18.96, 72.82], a: [22.57, 88.36], label: "en train" }, { de: [22.57, 88.36], a: [22.32, 114.17] }, { de: [22.32, 114.17], a: [35.44, 139.64] }, { de: [37.77, -122.42], a: [40.71, -74.01], label: "en train" }, { de: [40.71, -74.01], a: [51.51, -0.13] },
            ] },
          ],
        },
        {
          titre: "Robinson et les robinsonnades",
          blocs: [
            { t: "texte", md: "En **1719**, l'Anglais **Daniel Defoe** publie *Robinson Crusoé*. Seul survivant d'un naufrage, Robinson vit vingt-huit ans sur une île déserte. Il construit une cabane, cultive, élève des chèvres, puis rencontre un compagnon qu'il nomme Vendredi. Le succès est immense : on imite ce récit pendant des siècles." },
            { t: "definition", terme: "Robinsonnade", md: "Récit inspiré de *Robinson Crusoé* : un ou plusieurs naufragés doivent **survivre seuls** sur une île et y recréer une vie. Jules Verne en écrit une : *L'Île mystérieuse* (1875)." },
            { t: "savais-tu", md: "Defoe s'est inspiré d'une histoire vraie : un marin écossais, Alexander Selkirk, a vécu seul plus de quatre ans sur une île du Pacifique, au large du Chili." },
          ],
        },
        {
          titre: "Qui raconte ? Narrateur et péripéties",
          blocs: [
            { t: "texte", md: "Attention à ne pas confondre l'**auteur** et le **narrateur**. L'auteur est la personne réelle qui a écrit le livre (Jules Verne). Le narrateur est la « voix » qui raconte l'histoire à l'intérieur du livre." },
            { t: "tableau", titre: "Les deux grands types de narrateurs", entetes: ["Narrateur", "Pronoms", "Exemple"], lignes: [
              ["Personnage de l'histoire : récit à la **1re personne**", "je, nous", "Le professeur Aronnax raconte ce qu'il vit à bord du Nautilus."],
              ["Extérieur à l'histoire : récit à la **3e personne**", "il, elle, ils", "Dans *Le Tour du monde…*, une voix extérieure raconte le voyage de Fogg."],
            ] },
            { t: "citation", texte: "L'année 1866 fut marquée par un événement bizarre, un phénomène inexpliqué et inexplicable que personne n'a sans doute oublié.", auteur: "Jules Verne", source: "Vingt mille lieues sous les mers (1870), première phrase" },
            { t: "definition", terme: "Péripétie", md: "Événement imprévu (obstacle, danger, rencontre) qui **relance l'action**. Le récit d'aventure enchaîne les péripéties entre la situation initiale, l'élément perturbateur, le dénouement et la situation finale." },
            { t: "exemple", titre: "Lire une péripétie", md: "« La mer déchaînée rugissait et les vagues avalaient le pont du navire. »\n\nLes verbes violents (*rugissait*, *avalaient*) font de la mer un monstre vivant : c'est une **personnification**. Le passage crée une **tension dramatique** : le lecteur sent le danger et veut savoir si les marins survivront. Dans *Vingt mille lieues sous les mers*, l'attaque du calmar géant ou l'emprisonnement sous la banquise jouent le même rôle." },
            { t: "verifie", q: "« Je descendis seul dans la cale. » Qui est le narrateur ?", choix: ["Un personnage de l'histoire, à la 1re personne", "Une voix extérieure, à la 3e personne", "L'auteur en personne, forcément", "Il n'y a pas de narrateur"], bonne: 0, explication: "Le pronom « je » montre que le narrateur est un personnage qui vit l'histoire. Même au « je », le narrateur n'est pas forcément l'auteur : Aronnax n'est pas Jules Verne." },
          ],
        },
      ],
      bilan: "Partir, découvrir, raconter : de Marco Polo à Phileas Fogg, le récit de voyage fait de chaque obstacle une péripétie, et de chaque lecteur un voyageur.",
    },
    "5e-francais-02-avec-autrui-comedie": {
      accroche: "Un père avare enfermé dans un sac qui reçoit des coups de bâton sans savoir de qui. Un valet qui berne deux vieillards à la fois. Depuis plus de trois cents ans, le public rit aux mêmes scènes de Molière. Quel est son secret ?",
      objectifs: [
        "Connaître Molière et ses principales comédies",
        "Utiliser le vocabulaire du théâtre : acte, scène, réplique, didascalie…",
        "Reconnaître les formes du comique",
        "Comprendre les conflits entre parents, enfants et valets",
      ],
      sections: [
        {
          titre: "Molière et la comédie",
          blocs: [
            { t: "texte", md: "Jean-Baptiste Poquelin, dit **Molière** (1622-1673), est à la fois auteur, acteur et chef de troupe. Il écrit pour le roi Louis XIV des comédies restées célèbres : *L'Avare* (1668), *Les Fourberies de Scapin* (1671), *Le Malade imaginaire* (1673). Il meurt quelques heures après la quatrième représentation de cette dernière pièce, où il jouait lui-même le malade." },
            { t: "definition", terme: "Comédie", md: "Pièce de théâtre qui **fait rire** et qui **se termine bien**, souvent par un mariage ou une réconciliation. En riant, elle se moque des défauts humains : avarice, hypocrisie, pères autoritaires, peur maladive des médecins." },
            { t: "texte", md: "Molière disait vouloir « corriger les hommes en les divertissant ». Le rire n'est pas gratuit : quand on rit d'Harpagon, l'avare qui préfère sa cassette à ses enfants, on rit d'un défaut qu'on pourrait avoir. La **tragédie**, elle, fait pleurer et finit souvent par la mort du héros." },
          ],
        },
        {
          titre: "Comment est construite une pièce ?",
          blocs: [
            { t: "schema", titre: "De la pièce à la réplique", legende: "Une pièce se divise en actes, les actes en scènes, les scènes en répliques. Les didascalies accompagnent le texte sans être dites.", svg: `<svg viewBox="0 0 400 270"><rect class="aplat" x="110" y="10" width="180" height="34" rx="6"/><rect class="trait" x="110" y="10" width="180" height="34" rx="6" fill="none"/><text class="texte" x="200" y="32" text-anchor="middle">La pièce</text><line class="trait-fin" x1="200" y1="44" x2="70" y2="74"/><line class="trait-fin" x1="200" y1="44" x2="170" y2="74"/><line class="trait-fin" x1="200" y1="44" x2="290" y2="74"/><rect class="aplat-papier" x="25" y="74" width="90" height="30" rx="5"/><rect class="trait-fin" x="25" y="74" width="90" height="30" rx="5" fill="none"/><text class="texte" x="70" y="94" text-anchor="middle">Acte I</text><rect class="aplat-papier" x="125" y="74" width="90" height="30" rx="5"/><rect class="trait-fin" x="125" y="74" width="90" height="30" rx="5" fill="none"/><text class="texte" x="170" y="94" text-anchor="middle">Acte II</text><rect class="aplat" x="245" y="74" width="90" height="30" rx="5"/><rect class="trait" x="245" y="74" width="90" height="30" rx="5" fill="none"/><text class="texte" x="290" y="94" text-anchor="middle">Acte III</text><line class="trait-fin" x1="290" y1="104" x2="230" y2="134"/><line class="trait-fin" x1="290" y1="104" x2="290" y2="134"/><line class="trait-fin" x1="290" y1="104" x2="350" y2="134"/><rect class="aplat-papier" x="204" y="134" width="52" height="28" rx="4"/><rect class="trait-fin" x="204" y="134" width="52" height="28" rx="4" fill="none"/><text class="texte-petit" x="230" y="152" text-anchor="middle">Scène 1</text><rect class="aplat" x="264" y="134" width="52" height="28" rx="4"/><rect class="trait" x="264" y="134" width="52" height="28" rx="4" fill="none"/><text class="texte-petit" x="290" y="152" text-anchor="middle">Scène 2</text><rect class="aplat-papier" x="324" y="134" width="52" height="28" rx="4"/><rect class="trait-fin" x="324" y="134" width="52" height="28" rx="4" fill="none"/><text class="texte-petit" x="350" y="152" text-anchor="middle">…</text><line class="trait-fin" x1="290" y1="162" x2="240" y2="200"/><line class="trait-fin" x1="290" y1="162" x2="345" y2="200"/><rect class="aplat-papier" x="195" y="200" width="90" height="28" rx="4"/><rect class="trait-fin" x="195" y="200" width="90" height="28" rx="4" fill="none"/><text class="texte" x="240" y="219" text-anchor="middle">Répliques</text><rect class="aplat-papier" x="300" y="200" width="90" height="28" rx="4"/><rect class="pointille" x="300" y="200" width="90" height="28" rx="4" fill="none"/><text class="texte" x="345" y="219" text-anchor="middle">Didascalies</text><text class="texte-petit" x="240" y="246" text-anchor="middle">dites par les acteurs</text><text class="texte-petit" x="345" y="246" text-anchor="middle">jamais dites</text><text class="texte-main" x="20" y="148">On change</text><text class="texte-main" x="20" y="168">de scène quand</text><text class="texte-main" x="20" y="188">un personnage</text><text class="texte-main" x="20" y="208">entre ou sort.</text></svg>` },
            { t: "tableau", titre: "Le vocabulaire du théâtre", entetes: ["Mot", "Définition"], lignes: [
              ["**Acte**", "Grande partie d'une pièce, qui correspond à une étape de l'action. *Les Fourberies de Scapin* compte **3 actes**."],
              ["**Scène**", "Partie d'un acte. On change de scène chaque fois qu'un personnage **entre ou sort**."],
              ["**Réplique**", "Ce que dit un personnage quand il prend la parole."],
              ["**Tirade**", "Longue réplique d'un personnage, devant d'autres personnages."],
              ["**Monologue**", "Paroles d'un personnage **seul en scène**."],
              ["**Aparté**", "Réplique que le public entend, mais que les autres personnages ne sont pas censés entendre."],
              ["**Didascalie**", "Indication de l'auteur (gestes, ton, décor), souvent en italique. Elle n'est **pas prononcée**."],
              ["**Quiproquo**", "Malentendu : on prend un personnage pour un autre, ou une chose pour une autre."],
            ] },
            { t: "attention", md: "Ne confonds pas **tirade** et **monologue** : les deux sont des répliques longues, mais seul le monologue est dit par un personnage seul sur scène." },
            { t: "verifie", q: "Le texte indique : *(Il se cache derrière un arbre.)* De quoi s'agit-il ?", choix: ["D'une didascalie", "D'un aparté", "D'une tirade", "D'une réplique"], bonne: 0, explication: "C'est une indication de mise en scène, en italique et entre parenthèses : une didascalie. L'acteur la joue, mais ne la dit pas." },
          ],
        },
        {
          titre: "Les Fourberies de Scapin : maîtres, pères et valets",
          blocs: [
            { t: "texte", md: "À Naples, deux pères partent en voyage : **Argante** et **Géronte**. Pendant leur absence, leurs fils tombent amoureux : **Octave** épouse en secret la pauvre Hyacinthe, **Léandre** s'éprend de Zerbinette. Au retour des pères, c'est la catastrophe ! Les fils appellent au secours **Scapin**, le valet rusé de Léandre, qui va tromper les deux vieillards pour leur soutirer de l'argent." },
            { t: "citation", texte: "Que diable allait-il faire dans cette galère ?", auteur: "Molière", source: "Les Fourberies de Scapin, acte II, scène 7" },
            { t: "texte", md: "Scapin fait croire à Géronte que son fils Léandre a été enlevé par des Turcs sur une galère, et qu'il faut payer une rançon de cinq cents écus. Géronte, très avare, **répète** plusieurs fois cette phrase pour retarder le moment de payer. Plus il la répète, plus le public rit." },
            { t: "texte", md: "Dans *Le Malade imaginaire*, on retrouve un père autoritaire. Argan se croit toujours malade : il veut marier sa fille Angélique au jeune médecin Thomas Diafoirus, pour **avoir un médecin dans sa famille**. Mais Angélique aime Cléante. Grâce à la servante Toinette, la comédie finit bien." },
          ],
        },
        {
          titre: "Les formes du comique",
          blocs: [
            { t: "tableau", titre: "Quatre façons de faire rire", entetes: ["Comique de…", "Il repose sur…", "Exemple chez Molière"], lignes: [
              ["**gestes**", "coups de bâton, chutes, poursuites (c'est l'héritage de la farce)", "Scapin roue de coups Géronte caché dans un sac."],
              ["**mots**", "jeux de mots, accents imités, **répétitions**", "« Que diable allait-il faire dans cette galère ? »"],
              ["**situation**", "quiproquos, personnages cachés, ruses", "Géronte croit que des ennemis le cherchent."],
              ["**caractère**", "un défaut poussé à l'extrême", "L'avarice d'Harpagon, la peur d'Argan d'être malade."],
            ] },
            { t: "exemple", titre: "La scène du sac (acte III, scène 2)", etapes: [
              "Scapin fait croire à Géronte que des hommes armés veulent le tuer.",
              "Il lui conseille de se cacher dans un grand sac pour leur échapper.",
              "Il imite la voix et l'accent de plusieurs ennemis imaginaires : comique de **mots**.",
              "Il frappe le sac à coups de bâton en prétendant protéger Géronte : comique de **gestes**.",
              "Le père, qui croyait tout contrôler, est trompé par son valet : comique de **situation**.",
            ] },
            { t: "verifie", q: "Pourquoi Géronte répète-t-il « Que diable allait-il faire dans cette galère ? » ?", choix: ["Il ne veut pas payer la rançon de son fils", "Il veut partir lui-même en mer", "Il se moque de Scapin", "Il cherche sa fille disparue"], bonne: 0, explication: "Géronte est avare : il répète la question pour retarder le paiement. C'est un comique de répétition, qui révèle aussi son caractère." },
          ],
        },
      ],
      bilan: "Actes, scènes, répliques et didascalies : voilà la charpente ; gestes, mots, situations et caractères : voilà les ressorts du rire. Molière s'en sert pour faire rire de nos défauts.",
    },
    "5e-francais-03-univers-nouveaux": {
      accroche: "Chaque nuit, une jeune femme risque sa vie. Le sultan qu'elle a épousé a juré de la faire exécuter au matin. Pour survivre, Shéhérazade a une arme étonnante : une histoire, qu'elle interrompt toujours au moment le plus passionnant…",
      objectifs: [
        "Reconnaître les caractéristiques du conte merveilleux",
        "Distinguer le merveilleux, le fantastique et la fantasy",
        "Retrouver le schéma narratif d'un récit",
        "Identifier les rôles des personnages : héros, adjuvant, opposant",
      ],
      sections: [
        {
          titre: "Des contes venus d'Orient et de France",
          blocs: [
            { t: "texte", md: "*Les Mille et Une Nuits* est un recueil de contes orientaux. Le récit-cadre est célèbre : le sultan Shahriar, trahi, épouse chaque soir une femme qu'il fait tuer le lendemain. **Shéhérazade** lui raconte une histoire chaque nuit sans la finir. Curieux de connaître la suite, le sultan la laisse vivre… pendant mille et une nuits. On y trouve **Sindbad le marin**, **Aladin** et sa **lampe merveilleuse** qui abrite un génie, ou **Ali Baba**, qui ouvre la caverne des voleurs avec la formule « Sésame, ouvre-toi ! »." },
            { t: "savais-tu", md: "Les histoires d'Aladin et d'Ali Baba n'existaient dans aucun manuscrit arabe connu. C'est Antoine Galland, le traducteur français du recueil (1704-1717), qui les a ajoutées après les avoir entendues d'un conteur syrien, Hanna Diyab." },
            { t: "texte", md: "En France, **Charles Perrault** publie en **1697**, à la fin du XVIIe siècle, les *Contes de ma mère l'Oye* : *Cendrillon*, *Le Petit Chaperon rouge*, *Barbe-Bleue*, *Le Chat botté*… Plus tard, le Danois Hans Christian Andersen écrira *La Petite Sirène* (XIXe siècle)." },
            { t: "citation", texte: "Il était une fois une petite fille de village, la plus jolie qu'on eût su voir.", auteur: "Charles Perrault", source: "Le Petit Chaperon rouge (1697)" },
            { t: "texte", md: "Remarque la formule « **Il était une fois** » et les temps : l'**imparfait** pose le décor (*il était*, *elle avait*), le **passé simple** raconte les actions (*un jour, elle partit*). Ce sont les deux temps du conte." },
          ],
        },
        {
          titre: "Merveilleux, fantastique ou fantasy ?",
          blocs: [
            { t: "tableau", titre: "Trois façons d'inventer des mondes", entetes: ["Genre", "Le monde", "La magie", "Exemples"], lignes: [
              ["**Merveilleux**", "Un monde lointain, hors du temps", "Elle est **normale** : personne ne s'étonne d'une fée ou d'un ogre", "Perrault, *Les Mille et Une Nuits*"],
              ["**Fantastique**", "Notre monde réel", "Un événement étrange surgit et provoque le **doute** et la **peur**", "Maupassant, *Le Horla* (1887)"],
              ["**Fantasy**", "Un monde **entièrement inventé**, avec sa carte, ses peuples, ses langues", "Elle obéit à des règles propres", "Tolkien, *Le Seigneur des anneaux*"],
            ] },
            { t: "exemple", titre: "Quel genre ?", md: "« Minuit sonna. La porte de l'armoire s'ouvrit lentement, toute seule. Je n'osais plus respirer. »\n\nNous sommes dans une maison ordinaire (monde réel). Un fait inexplicable survient (la porte s'ouvre seule) et le narrateur a peur : c'est du **fantastique**. Dans un conte merveilleux, une armoire magique n'étonnerait personne." },
            { t: "verifie", q: "Dans *Cendrillon*, une fée change une citrouille en carrosse et personne ne s'en étonne. Quel est le genre ?", choix: ["Le merveilleux", "Le fantastique", "La fantasy", "Le récit de voyage"], bonne: 0, explication: "La magie est acceptée comme normale : c'est le merveilleux. Le fantastique ferait naître le doute et la peur dans le monde réel." },
          ],
        },
        {
          titre: "Le schéma narratif",
          blocs: [
            { t: "propriete", titre: "Les cinq étapes du schéma narratif", md: "1. **Situation initiale** : le cadre et les personnages, dans un état stable.\n2. **Élément perturbateur** : un événement rompt l'équilibre et lance l'histoire.\n3. **Péripéties** : les actions, obstacles et rebondissements.\n4. **Dénouement** : l'événement qui met fin aux péripéties.\n5. **Situation finale** : un nouvel équilibre." },
            { t: "schema", titre: "La tension monte… puis retombe", legende: "La courbe montre la tension du récit : calme au début, elle grimpe avec les péripéties et retombe après le dénouement.", svg: `<svg viewBox="0 0 400 215"><path class="trait-fin" d="M10 165 L10 30" marker-end="url(#fl)"/><text class="texte-petit" x="16" y="30">tension</text><path class="trait" fill="none" d="M20 150 L65 150 L130 112 L155 128 L185 92 L215 108 L255 56 L290 56 L315 150 L380 150"/><circle class="aplat-papier" cx="36" cy="150" r="9"/><circle class="trait-fin" cx="36" cy="150" r="9" fill="none"/><text class="texte-petit" x="36" y="154" text-anchor="middle">1</text><circle class="aplat-papier" cx="97" cy="131" r="9"/><circle class="trait-fin" cx="97" cy="131" r="9" fill="none"/><text class="texte-petit" x="97" y="135" text-anchor="middle">2</text><circle class="aplat-papier" cx="185" cy="92" r="9"/><circle class="trait-fin" cx="185" cy="92" r="9" fill="none"/><text class="texte-petit" x="185" y="96" text-anchor="middle">3</text><circle class="aplat-papier" cx="302" cy="100" r="9"/><circle class="trait-fin" cx="302" cy="100" r="9" fill="none"/><text class="texte-petit" x="302" y="104" text-anchor="middle">4</text><circle class="aplat-papier" cx="350" cy="150" r="9"/><circle class="trait-fin" cx="350" cy="150" r="9" fill="none"/><text class="texte-petit" x="350" y="154" text-anchor="middle">5</text><text class="texte-petit" x="36" y="185" text-anchor="middle">Situation</text><text class="texte-petit" x="36" y="198" text-anchor="middle">initiale</text><text class="texte-petit" x="100" y="185" text-anchor="middle">Élément</text><text class="texte-petit" x="100" y="198" text-anchor="middle">perturbateur</text><text class="texte-petit" x="190" y="185" text-anchor="middle">Péripéties</text><text class="texte-petit" x="285" y="185" text-anchor="middle">Dénouement</text><text class="texte-petit" x="352" y="185" text-anchor="middle">Situation</text><text class="texte-petit" x="352" y="198" text-anchor="middle">finale</text></svg>` },
            { t: "exemple", titre: "Le schéma narratif du Chat botté", etapes: [
              "Situation initiale : un meunier meurt et ne laisse à son plus jeune fils qu'un chat.",
              "Élément perturbateur : le chat demande des bottes et un sac, et promet d'aider son maître.",
              "Péripéties : les ruses du chat auprès du roi, puis face à l'ogre qu'il pousse à se changer en souris… pour le dévorer.",
              "Dénouement : le jeune homme, devenu « marquis de Carabas », épouse la princesse.",
              "Situation finale : le maître vit dans le château de l'ogre, et le chat devient un grand seigneur.",
            ] },
            { t: "attention", md: "Dans *Le Petit Chaperon rouge*, l'élément perturbateur n'est pas la galette préparée par la mère (c'est la situation initiale) : c'est **la rencontre avec le loup** dans la forêt. C'est elle qui fait basculer l'histoire." },
          ],
        },
        {
          titre: "Les rôles des personnages",
          blocs: [
            { t: "definition", terme: "Adjuvant et opposant", md: "L'**adjuvant** aide le héros à atteindre son but ; l'**opposant** lui met des obstacles. Un même personnage peut changer de rôle en cours de route." },
            { t: "liste", items: [
              "**Héros** : celui qui poursuit une quête (Aladin veut épouser la fille du sultan).",
              "**Adjuvants** : le génie de la lampe, la fée de Cendrillon, le chat du meunier.",
              "**Opposants** : le loup, l'ogre, le magicien qui veut voler la lampe d'Aladin.",
            ] },
            { t: "verifie", q: "Dans *Cendrillon*, quel rôle joue la marraine fée ?", choix: ["Adjuvant", "Opposant", "Narrateur", "Élément perturbateur"], bonne: 0, explication: "La fée aide l'héroïne à aller au bal : c'est un adjuvant. Les demi-sœurs et la belle-mère, qui lui nuisent, sont des opposants." },
          ],
        },
      ],
      bilan: "Merveilleux qui ne s'étonne de rien, fantastique qui fait douter, fantasy qui invente tout un monde : trois chemins vers l'imaginaire, avec souvent le même schéma narratif pour guider le lecteur.",
    },
    "5e-francais-04-heros-heroismes": {
      accroche: "Encerclé par des milliers d'ennemis dans un col des Pyrénées, un chevalier tient à la main un cor d'ivoire. Il lui suffirait de souffler pour que l'armée de Charlemagne revienne le sauver. Il refuse. Courage admirable ou orgueil fatal ?",
      objectifs: [
        "Connaître la chanson de geste et le roman de chevalerie",
        "Identifier les valeurs chevaleresques",
        "Reconnaître les procédés de l'épopée",
        "Réfléchir à ce qui fait un héros, et à ses faiblesses",
      ],
      sections: [
        {
          titre: "La Chanson de Roland, une chanson de geste",
          blocs: [
            { t: "definition", terme: "Chanson de geste", md: "Long poème épique du Moyen Âge, **chanté ou récité par des jongleurs**, qui raconte les exploits guerriers (*gesta* en latin) de héros chrétiens. La *Chanson de Roland* (vers 1100) est la plus ancienne qui nous soit parvenue." },
            { t: "texte", md: "L'armée de **Charlemagne** rentre d'Espagne. À l'arrière, **Roland**, son neveu, protège la retraite avec son ami **Olivier**. Trahis par **Ganelon**, ils sont attaqués par des milliers de Sarrasins au col de **Roncevaux**. Olivier supplie Roland de sonner de l'**olifant**, son cor d'ivoire, pour appeler Charlemagne. Roland refuse **par orgueil** : il ne veut pas passer pour un lâche. Quand il se décide enfin, il est trop tard. Il souffle si fort que ses tempes éclatent, et meurt en héros, le visage tourné vers l'Espagne." },
            { t: "citation", texte: "Rollant est proz e Oliver est sage.\n(Roland est preux, et Olivier est sage.)", auteur: "La Chanson de Roland", source: "vers 1093" },
            { t: "texte", md: "Ce vers résume le drame : Roland a le courage (il est **preux**), Olivier a la sagesse. Le héros a donc une faiblesse : sa **démesure**. C'est elle qui cause sa perte et celle de ses compagnons." },
            { t: "savais-tu", md: "La vraie bataille de Roncevaux a eu lieu le 15 août **778**. Les ennemis n'étaient pas des Sarrasins mais des montagnards basques. Trois siècles plus tard, le poète a transformé une défaite en épopée de la chrétienté." },
          ],
        },
        {
          titre: "Les procédés de l'épopée",
          blocs: [
            { t: "propriete", titre: "Comment l'épopée grandit les exploits", md: "- **Hyperboles** : exagérations (« d'un seul coup, il fend l'ennemi et son cheval »).\n- **Nombres énormes** : cent mille soldats, vingt mille morts.\n- **Combats surhumains** : un seul héros affronte des centaines d'ennemis.\n- **Intervention du divin** : des anges emportent l'âme de Roland au paradis.\n- **Objets presque magiques** : l'épée **Durendal**, l'olifant." },
            { t: "exemple", titre: "Analyser un passage épique", md: "« D'un seul coup, Roland fend le casque, la tête, le corps de son ennemi et l'échine de son cheval. »\n\nAucun bras humain ne pourrait réussir un tel coup : c'est une **hyperbole**. L'énumération (casque, tête, corps, échine) allonge la phrase pour montrer la puissance du geste. Même chose quand Roland, mourant, frappe Durendal contre une pierre pour la briser : l'acier grince mais ne se brise pas. L'épée refuse de mourir, comme son maître." },
            { t: "verifie", q: "« Cent mille Sarrasins couvrent toute la vallée. » Quel procédé épique reconnais-tu ?", choix: ["L'exagération des nombres (hyperbole)", "La comparaison", "L'intervention du divin", "Le dialogue"], bonne: 0, explication: "Le nombre énorme grandit le danger et donc l'héroïsme : c'est une hyperbole, procédé typique de l'épopée." },
          ],
        },
        {
          titre: "Chrétien de Troyes et le roman de chevalerie",
          blocs: [
            { t: "texte", md: "Au XIIe siècle, **Chrétien de Troyes** invente un nouveau genre : le **roman de chevalerie**. Ses héros sont les chevaliers de la **Table ronde**, à la cour du roi Arthur. Ils ne se battent pas seulement pour leur seigneur : ils partent en **quête**, affrontent des épreuves et se montrent dignes de leur dame." },
            { t: "tableau", titre: "Les héros de Chrétien de Troyes", entetes: ["Roman", "Héros", "Sa quête"], lignes: [
              ["*Lancelot ou le Chevalier de la charrette*", "Lancelot", "Délivrer la reine Guenièvre, quitte à monter dans la charrette des condamnés."],
              ["*Yvain ou le Chevalier au lion*", "Yvain", "Reconquérir l'amour de sa dame, aidé par un lion qu'il a sauvé."],
              ["*Perceval ou le Conte du Graal*", "Perceval", "Retrouver le **Graal**, mystérieux objet sacré."],
            ] },
            { t: "definition", terme: "Roman", md: "Au Moyen Âge, le mot « roman » désigne d'abord un texte écrit en **langue romane** (l'ancien français, langue du peuple) et non en latin, langue des savants et de l'Église." },
            { t: "verifie", q: "Qui a écrit *Perceval ou le Conte du Graal* ?", choix: ["Chrétien de Troyes", "Le jongleur de la Chanson de Roland", "Charlemagne", "Molière"], bonne: 0, explication: "Chrétien de Troyes, au XIIe siècle, est l'auteur de *Perceval*, de *Lancelot* et d'*Yvain*. La *Chanson de Roland*, elle, est anonyme." },
          ],
        },
        {
          titre: "Des valeurs et des héros, du mythe à l'histoire",
          blocs: [
            { t: "liste", titre: "Les valeurs chevaleresques", items: [
              "**Courage** au combat : ne jamais fuir.",
              "**Loyauté** envers son seigneur : ne jamais trahir (Ganelon est le contre-modèle).",
              "**Fidélité** à sa dame, qu'il sert et honore.",
              "**Protection des faibles** : veuves, orphelins, pauvres.",
              "**Foi chrétienne** : le chevalier combat au service de Dieu.",
            ] },
            { t: "texte", md: "L'héroïsme n'existe pas que dans les livres. **Jeanne d'Arc** (1412-1431), jeune paysanne de Lorraine, convainc le futur roi Charles VII de lui confier des troupes. Pendant la **guerre de Cent Ans**, elle délivre **Orléans** assiégée par les Anglais, en **1429**. Capturée, elle est brûlée à Rouen en 1431." },
            { t: "frise", titre: "Héros et héroïnes du Moyen Âge", evenements: [
              { date: 778, label: "Bataille de Roncevaux", detail: "Mort de Roland, sous Charlemagne." },
              { date: 1100, label: "La Chanson de Roland", detail: "Le poème est mis par écrit vers 1100." },
              { date: 1177, label: "Lancelot, Yvain", detail: "Chrétien de Troyes, vers 1177-1181." },
              { date: 1181, label: "Perceval ou le Conte du Graal", detail: "Roman inachevé, vers 1181-1190." },
              { date: 1429, label: "Jeanne d'Arc délivre Orléans", detail: "Pendant la guerre de Cent Ans." },
              { date: 1431, label: "Mort de Jeanne d'Arc", detail: "Brûlée à Rouen." },
            ] },
          ],
        },
      ],
      bilan: "Le héros épique dépasse les forces humaines, mais il reste fragile : la démesure de Roland le perd. Le chevalier, lui, se grandit par la loyauté, le courage et la quête.",
    },
    "5e-francais-05-humain-nature": {
      accroche: "Un berger solitaire plante des glands, cent par jour, dans une région désertée. Des années plus tard, une forêt a poussé, les ruisseaux coulent de nouveau et les villages revivent. L'être humain peut-il faire renaître la nature ? Ou n'est-il qu'un minuscule passager face à l'océan et aux tempêtes ?",
      objectifs: [
        "Lire et écrire une description organisée de la nature",
        "Distinguer texte littéraire, documentaire et argumentatif",
        "Comprendre les regards des écrivains sur l'humain et la nature",
      ],
      sections: [
        {
          titre: "Décrire un paysage",
          blocs: [
            { t: "texte", md: "Une bonne description ne jette pas les détails au hasard : elle **guide le regard** du lecteur, comme une caméra. Elle suit un ordre et fait appel aux **cinq sens** : la vue, l'ouïe, l'odorat, le toucher et le goût. On voit la forêt, mais on entend aussi le vent, on sent la résine, on touche l'écorce rugueuse." },
            { t: "etapes", titre: "Trois ordres possibles pour décrire", items: [
              { titre: "Du proche au lointain", md: "« À mes pieds, l'herbe mouillée. Plus loin, la forêt sombre. Au loin, les sommets bleus. »" },
              { titre: "Du haut vers le bas", md: "Le ciel, puis les cimes des arbres, puis les troncs, puis le sol couvert de feuilles." },
              { titre: "Du général au détail", md: "Une vaste vallée verte → une rivière au fond → un pont de pierre → une mousse sur une pierre du pont : un vrai **zoom**." },
            ] },
            { t: "propriete", titre: "Les outils de la description au passé", md: "- l'**imparfait**, temps de la description : *le ciel était gris, le vent soufflait* ;\n- des **adjectifs qualificatifs** précis : *noueux, mouillée, sombre* ;\n- des **compléments circonstanciels de lieu** qui organisent l'espace : *à gauche, au loin, au-dessus* ;\n- des **figures de style** : comparaisons, métaphores, personnifications." },
            { t: "verifie", q: "Quel temps sert surtout à décrire un paysage dans un récit au passé ?", choix: ["L'imparfait", "Le passé simple", "Le futur", "Le subjonctif"], bonne: 0, explication: "L'imparfait installe le décor et dure : c'est le temps de la description. Le passé simple sert aux actions soudaines." },
          ],
        },
        {
          titre: "Quand la nature prend vie : la personnification",
          blocs: [
            { t: "definition", terme: "Personnification", md: "Figure de style qui donne des **traits humains** (actions, sentiments, parole) à un élément de la nature, un animal ou un objet : « le vent hurle », « la forêt respire », « le ruisseau chante »." },
            { t: "exemple", titre: "Repérer une personnification", md: "« La montagne dort sous son manteau de neige. »\n\nUne montagne ne dort pas : c'est une action humaine. La phrase en fait une géante paisible. « Manteau » est une métaphore : la neige recouvre la montagne comme un vêtement." },
            { t: "citation", texte: "Homme libre, toujours tu chériras la mer !", auteur: "Charles Baudelaire", source: "« L'Homme et la mer », Les Fleurs du mal (1857)" },
            { t: "texte", md: "Baudelaire compare l'homme et la mer : tous deux sont profonds, mystérieux, indomptables. La nature devient un **miroir** de l'être humain." },
          ],
        },
        {
          titre: "Dominer la nature ou la respecter ?",
          blocs: [
            { t: "texte", md: "Deux grandes visions s'opposent dans les textes. Dans la première, l'être humain **domine et exploite** la nature : il défriche, construit, maîtrise les fleuves. Dans la seconde, la nature est **puissante et fragile** à la fois : l'homme doit la craindre, la respecter, parfois la réparer." },
            { t: "texte", md: "**Victor Hugo** (1802-1885) peint une nature formidable. Dans son roman *Les Travailleurs de la mer* (1866), le marin **Gilliatt** lutte seul, sur un écueil, contre la tempête et une pieuvre géante. L'océan y devient un adversaire presque vivant : l'homme n'en est pas le maître, il doit se battre pour survivre. Hugo célèbre aussi la nature dans ses poèmes des *Contemplations* (1856)." },
            { t: "texte", md: "**Jean Giono**, dans *L'Homme qui plantait des arbres* (1953), raconte l'histoire du berger **Elzéard Bouffier**. Seul, patiemment, sans rien attendre, il plante des glands dans une région de Provence aride et abandonnée." },
            { t: "exemple", titre: "Deux descriptions qui se répondent", etapes: [
              "Au début du récit, Giono décrit des terres nues et monotones, des villages en ruine, un vent violent : une nature morte.",
              "Trente ans plus tard, le narrateur revient : des forêts, de l'eau qui coule, des familles revenues. Tout a changé, même l'air.",
              "Le **contraste** entre les deux descriptions montre le pouvoir de l'homme sur la nature, utilisé ici pour la faire revivre.",
            ] },
          ],
        },
        {
          titre: "Littéraire, documentaire ou argumentatif ?",
          blocs: [
            { t: "texte", md: "On peut parler de la nature de trois façons très différentes. Pour reconnaître un texte, cherche son **but** et ses **indices**." },
            { t: "tableau", titre: "Trois types de textes sur la forêt", entetes: ["Type", "But", "Indices", "Exemple"], lignes: [
              ["**Documentaire**", "Informer", "Faits vérifiables, **chiffres**, vocabulaire précis, ton **neutre**", "« Le chêne peut vivre plus de 500 ans et atteindre 40 m. »"],
              ["**Argumentatif**", "Convaincre", "Une **thèse**, des arguments, « il faut », « car », « donc »", "« Il faut protéger nos forêts car elles abritent une vie précieuse. »"],
              ["**Littéraire** (descriptif ou narratif)", "Émouvoir, faire voir", "Images, imparfait pour décrire, passé simple pour raconter", "« Le vieux chêne tendait ses bras noueux vers le ciel gris. »"],
            ] },
            { t: "attention", md: "Un texte documentaire **n'exprime pas les sentiments** de son auteur : il reste objectif. Si tu lis « c'est magnifique » ou « il faut absolument », tu n'es plus dans le documentaire." },
            { t: "verifie", q: "« Soudain, l'arbre craqua et s'abattit sur le sentier. » De quel type de texte s'agit-il ?", choix: ["Narratif", "Documentaire", "Argumentatif", "Explicatif"], bonne: 0, explication: "« Soudain » et les passés simples (craqua, s'abattit) racontent un événement : c'est un texte narratif. Aucun chiffre, aucune opinion défendue." },
          ],
        },
      ],
      bilan: "Décrire avec ordre et avec les cinq sens, reconnaître le but d'un texte, et se demander avec Hugo et Giono si l'humain doit dominer la nature ou en prendre soin.",
    },
    "5e-francais-06-natures-fonctions": {
      accroche: "Prends le mot « rapide ». Dans « un train rapide », il qualifie le nom ; dans « le train est rapide », il dit ce qu'est le sujet. Même mot, même nature… mais deux fonctions différentes. Comprendre cette différence, c'est avoir la clé de toute la grammaire.",
      objectifs: [
        "Distinguer la nature d'un mot et sa fonction",
        "Reconnaître les pronoms relatifs et les adverbes",
        "Identifier COD, COI, COS et attribut du sujet",
        "Distinguer épithète, apposition et compléments circonstanciels",
      ],
      sections: [
        {
          titre: "Nature et fonction : deux questions différentes",
          blocs: [
            { t: "definition", terme: "Nature (ou classe grammaticale)", md: "Ce qu'**est** un mot : nom, verbe, adjectif, déterminant, pronom, adverbe, préposition, conjonction. On la trouve dans le dictionnaire, et elle **ne change pas**." },
            { t: "definition", terme: "Fonction", md: "Le **rôle** que joue un mot ou un groupe dans une phrase précise : sujet, COD, attribut… Elle **dépend de la phrase**." },
            { t: "texte", md: "Deux mots de nature invariable à bien connaître cette année :\n\n- l'**adverbe** ne change jamais de forme ; il modifie un verbe (*il court* **vite**), un adjectif (**très** *grand*) ou un autre adverbe (**trop** *lentement*). Beaucoup se terminent en *-ment* ; d'autres indiquent le temps (*hier*) ou le lieu (*ici*) ;\n- le **pronom relatif** (*qui, que, quoi, dont, où, lequel*) remplace un nom déjà cité, l'**antécédent**, et introduit une proposition relative." },
            { t: "exemple", titre: "Que remplace le pronom relatif ?", etapes: [
              "« Le livre **que** je lis est passionnant. » → *que* remplace « le livre » : je lis le livre.",
              "« La maison **dont** je rêve est au bord de la mer. » → *dont* remplace « de la maison » : je rêve de la maison.",
              "« La ville **où** je suis né a changé. » → *où* remplace « dans cette ville » : dans la relative, il est **CC de lieu**.",
            ] },
          ],
        },
        {
          titre: "Les compléments du verbe",
          blocs: [
            { t: "texte", md: "Pour trouver la fonction d'un complément, **pose la question juste après le verbe**. La réponse, et la présence ou non d'une préposition (*à*, *de*), te donnent la fonction." },
            { t: "tableau", titre: "Les fonctions autour du verbe", entetes: ["Fonction", "Question", "Exemple"], lignes: [
              ["**COD** (complément d'objet direct)", "verbe + qui ? quoi ? (sans préposition)", "Elle mange **une pomme**."],
              ["**COI** (complément d'objet indirect)", "verbe + à qui ? à quoi ? de qui ? de quoi ?", "Elle pense **à ses vacances**."],
              ["**COS** (complément d'objet second)", "un second complément, à côté d'un COD", "Elle donne un livre **à Paul**."],
              ["**Attribut du sujet**", "après un verbe d'état, il dit ce qu'est le sujet", "Ma sœur est devenue **médecin**."],
            ] },
            { t: "propriete", titre: "Les verbes d'état", md: "**être, sembler, paraître, devenir, rester** (et aussi *demeurer, avoir l'air*). Après eux, le mot ne subit pas d'action : il **qualifie le sujet**. C'est un attribut, jamais un COD." },
            { t: "attention", md: "« À sa mère » peut être COI ou COS ! Dans « Il parle **à sa mère** », c'est le seul complément : **COI**. Dans « Il offre un cadeau **à sa mère** », il y a déjà un COD (un cadeau) : c'est un **COS**." },
            { t: "verifie", q: "Dans « Il semble heureux. », quelle est la fonction de « heureux » ?", choix: ["Attribut du sujet", "COD", "Épithète", "CC de manière"], bonne: 0, explication: "« Sembler » est un verbe d'état : « heureux » dit comment est le sujet « il ». C'est un attribut du sujet." },
          ],
        },
        {
          titre: "Autour du nom : épithète et apposition",
          blocs: [
            { t: "texte", md: "L'adjectif peut aussi compléter directement un nom. Tout dépend de sa **place** et de la **ponctuation**." },
            { t: "tableau", titre: "Épithète ou apposition ?", entetes: ["Fonction", "Comment la reconnaître", "Exemple"], lignes: [
              ["**Épithète**", "L'adjectif est collé au nom, sans virgule", "Le chien **affamé** dévore sa pâtée."],
              ["**Apposition**", "Le mot ou groupe est **séparé par une virgule** et désigne la même réalité que le nom", "Le chien, **affamé**, dévore sa pâtée.\nParis, **capitale de la France**, attire les touristes."],
            ] },
            { t: "verifie", q: "« Paul, épuisé, dort. » Quelle est la fonction de « épuisé » ?", choix: ["Apposition", "Épithète", "Attribut du sujet", "COD"], bonne: 0, explication: "« Épuisé » est encadré par des virgules : il est mis en apposition au nom « Paul »." },
          ],
        },
        {
          titre: "Les compléments circonstanciels",
          blocs: [
            { t: "propriete", titre: "Le test du CC", md: "Un complément circonstanciel est en général **déplaçable** et **supprimable** : la phrase reste correcte sans lui. Il précise les circonstances de l'action :\n- **temps** (quand ?) : *demain, hier soir* ;\n- **lieu** (où ?) : *à la bibliothèque* ;\n- **manière** (comment ?) : *soigneusement* ;\n- **cause** (pourquoi ?) : *à cause de la pluie*." },
            { t: "attention", md: "« Il travaille **à la bibliothèque** » : malgré le « à », ce n'est pas un COI ! La question est « où ? » et non « à quoi ? » : c'est un **CC de lieu**." },
            { t: "schema", titre: "Analyser une phrase groupe par groupe", legende: "Chaque groupe a une fonction. « Hier » se déplace ; « un bouquet » répond à « quoi ? » ; « à sa grand-mère » est un second complément.", svg: `<svg viewBox="0 0 400 190"><text class="texte" x="34" y="40" text-anchor="middle">Hier,</text><text class="texte" x="84" y="40" text-anchor="middle">Léa</text><text class="texte" x="146" y="40" text-anchor="middle">a offert</text><text class="texte" x="232" y="40" text-anchor="middle">un bouquet</text><text class="texte" x="334" y="40" text-anchor="middle">à sa grand-mère.</text><line class="trait" x1="15" y1="50" x2="53" y2="50"/><line class="trait" x1="70" y1="50" x2="98" y2="50"/><line class="trait" x1="116" y1="50" x2="176" y2="50"/><line class="trait" x1="195" y1="50" x2="270" y2="50"/><line class="trait" x1="277" y1="50" x2="391" y2="50"/><line class="trait-fin" x1="34" y1="54" x2="34" y2="80"/><line class="trait-fin" x1="84" y1="54" x2="84" y2="106"/><line class="trait-fin" x1="146" y1="54" x2="146" y2="80"/><line class="trait-fin" x1="232" y1="54" x2="232" y2="106"/><line class="trait-fin" x1="334" y1="54" x2="334" y2="80"/><text class="texte-pigment" x="34" y="95" text-anchor="middle">CC temps</text><text class="texte-pigment" x="146" y="95" text-anchor="middle">verbe</text><text class="texte-pigment" x="334" y="95" text-anchor="middle">COS</text><text class="texte-pigment" x="84" y="121" text-anchor="middle">sujet</text><text class="texte-pigment" x="232" y="121" text-anchor="middle">COD</text><text class="texte-petit" x="34" y="109" text-anchor="middle">quand ?</text><text class="texte-petit" x="232" y="135" text-anchor="middle">a offert quoi ?</text><text class="texte-petit" x="334" y="109" text-anchor="middle">à qui ?</text><text class="texte-main" x="200" y="172" text-anchor="middle">COD + COS : deux compléments du même verbe</text></svg>` },
            { t: "exemple", titre: "Tout analyser", md: "« Il écrit **soigneusement** une lettre à sa grand-mère. »\n\n*Soigneusement* répond à « comment ? » : **CC de manière**. *Une lettre* répond à « écrit quoi ? » : **COD**. *À sa grand-mère* est un second complément : **COS**. Et dans « Elle est tombée **à cause de la pluie** », le groupe répond à « pourquoi ? » : **CC de cause**." },
          ],
        },
      ],
      bilan: "La nature dit ce qu'est un mot, la fonction dit ce qu'il fait. Pose la bonne question après le verbe, regarde les virgules, teste le déplacement : la phrase n'aura plus de secret.",
    },
    "5e-francais-07-phrase-complexe": {
      accroche: "« Lorsque le soleil se leva, les oiseaux chantèrent et la ville s'éveilla. » Combien de phrases y a-t-il là-dedans ? Une seule… mais trois propositions, assemblées de trois façons différentes. Apprends à démonter les phrases comme on démonte un mécanisme.",
      objectifs: [
        "Distinguer phrase simple et phrase complexe",
        "Reconnaître juxtaposition, coordination et subordination",
        "Identifier une subordonnée relative et son antécédent",
        "Identifier une subordonnée conjonctive complétive",
      ],
      sections: [
        {
          titre: "Phrase simple, phrase complexe",
          blocs: [
            { t: "propriete", titre: "Compter les propositions", md: "Une **phrase simple** contient **un seul verbe conjugué**. Une **phrase complexe** en contient plusieurs. Règle d'or : **autant de verbes conjugués, autant de propositions**." },
            { t: "exemple", titre: "Compter pas à pas", etapes: [
              "Repère les verbes conjugués : « Lorsque le soleil **se leva**, les oiseaux **chantèrent** et la ville **s'éveilla**. »",
              "Il y en a trois : la phrase contient donc **trois propositions**.",
              "Les infinitifs et les participes seuls ne comptent pas : « Il veut **partir** » n'a qu'un verbe conjugué (*veut*).",
            ] },
            { t: "attention", md: "Un point sépare deux **phrases**. « Il court. Il saute. » : ce sont deux phrases simples, pas une phrase complexe." },
          ],
        },
        {
          titre: "Trois façons de relier les propositions",
          blocs: [
            { t: "tableau", titre: "Juxtaposition, coordination, subordination", entetes: ["Lien", "Comment ?", "Exemple"], lignes: [
              ["**Juxtaposition**", "Une **ponctuation** : virgule, point-virgule, deux-points", "Il pleut, je reste à la maison."],
              ["**Coordination**", "Une **conjonction de coordination** : mais, ou, et, donc, or, ni, car", "Il est petit **mais** fort.\nJe pense **donc** je suis."],
              ["**Subordination**", "Un **mot subordonnant** (pronom relatif ou conjonction de subordination) : la subordonnée **dépend** de la principale", "Il court **parce qu'**il est en retard."],
            ] },
            { t: "astuce", md: "Pour retenir les sept conjonctions de coordination : « **Mais où est donc Or ni car ?** » → mais, ou, et, donc, or, ni, car." },
            { t: "texte", md: "Dans la subordination, les propositions ne sont pas à égalité. La **principale** peut souvent exister seule ; la **subordonnée**, non. Les subordonnées **circonstancielles** sont introduites par *quand, lorsque, parce que, si, comme, pour que…* : « **Quand** la cloche sonna, les élèves entrèrent. »" },
            { t: "verifie", q: "« Il pleut, je reste à la maison. » Comment les propositions sont-elles reliées ?", choix: ["Par juxtaposition", "Par coordination", "Par subordination", "Il n'y a qu'une proposition"], bonne: 0, explication: "Deux verbes conjugués (pleut, reste), donc deux propositions, séparées par une simple virgule : c'est une juxtaposition." },
          ],
        },
        {
          titre: "La subordonnée relative",
          blocs: [
            { t: "definition", terme: "Proposition subordonnée relative", md: "Proposition introduite par un **pronom relatif** (*qui, que, quoi, dont, où, lequel*). Elle complète un **nom** placé juste avant, appelé l'**antécédent**, que le pronom remplace." },
            { t: "exemple", titre: "Trouver l'antécédent", etapes: [
              "« Le film **que j'ai vu** était long. » → *que* remplace « le film » (j'ai vu le film) : l'antécédent est **film**.",
              "« L'ami **dont je te parle** habite Lyon. » → je te parle de l'ami : l'antécédent est **ami**.",
              "« Les élèves **qui attendaient dans la cour** entrèrent en classe. » → l'antécédent est **élèves**.",
            ] },
            { t: "texte", md: "La relative est comme un adjectif géant : on peut souvent la supprimer sans que la phrase devienne fausse. « Le film était long » reste correct." },
          ],
        },
        {
          titre: "La subordonnée conjonctive complétive",
          blocs: [
            { t: "definition", terme: "Proposition subordonnée conjonctive complétive", md: "Proposition introduite par la **conjonction de subordination « que »**. Elle complète un **verbe** et a le plus souvent la fonction de **COD** : « Je pense **que tu as raison** » (je pense quoi ? → que tu as raison)." },
            { t: "propriete", titre: "Les deux « que »", md: "- **Pronom relatif** : il suit un **nom** (l'antécédent) qu'il **remplace**. « La chanson **que** tu fredonnes » = tu fredonnes la chanson.\n- **Conjonction de subordination** : elle suit un **verbe** et **ne remplace rien**. « Je veux **que** tu viennes. »" },
            { t: "schema", titre: "Démonter une phrase à trois propositions", legende: "« Je crois que le film que tu as choisi plaira à tous » : une principale, une complétive (COD de « crois ») et, à l'intérieur, une relative qui complète « film ».", svg: `<svg viewBox="0 0 400 250"><rect class="aplat" x="20" y="18" width="150" height="46" rx="6"/><rect class="trait" x="20" y="18" width="150" height="46" rx="6" fill="none"/><text class="texte" x="95" y="39" text-anchor="middle">Je crois</text><text class="texte-petit" x="95" y="56" text-anchor="middle">proposition principale</text><path class="trait-fin" fill="none" d="M60 64 L60 114 L106 114" marker-end="url(#fl)"/><rect class="aplat-papier" x="110" y="92" width="275" height="44" rx="6"/><rect class="trait" x="110" y="92" width="275" height="44" rx="6" fill="none"/><text class="texte" x="247" y="112" text-anchor="middle">que le film … plaira à tous</text><text class="texte-petit" x="247" y="128" text-anchor="middle">complétive, COD de « crois »</text><path class="trait-fin" fill="none" d="M214 136 L214 166" marker-end="url(#fl-p)"/><rect class="aplat-papier" x="150" y="168" width="235" height="44" rx="6"/><rect class="pointille" x="150" y="168" width="235" height="44" rx="6" fill="none"/><text class="texte" x="267" y="188" text-anchor="middle">que tu as choisi</text><text class="texte-petit" x="267" y="204" text-anchor="middle">relative, antécédent « film »</text><text class="texte-main" x="20" y="240">3 verbes conjugués = 3 propositions</text></svg>` },
            { t: "verifie", q: "Quelle phrase contient une subordonnée conjonctive complétive ?", choix: ["Nous souhaitons que le concert ait lieu.", "Le concert que nous attendions a eu lieu.", "Le concert a eu lieu et nous étions ravis.", "Le concert a eu lieu, quelle joie !"], bonne: 0, explication: "« Que le concert ait lieu » complète le verbe « souhaitons » : complétive COD. Dans la 2e phrase, « que » suit le nom « concert » qu'il remplace : c'est un relatif." },
            { t: "verifie", q: "Dans « Le gâteau que tu as fait est délicieux », quelle est la nature de « que » ?", choix: ["Pronom relatif", "Conjonction de subordination", "Conjonction de coordination", "Adverbe"], bonne: 0, explication: "« Que » suit le nom « gâteau » et le remplace (tu as fait le gâteau) : c'est un pronom relatif, et « gâteau » est son antécédent." },
          ],
        },
      ],
      bilan: "Compte les verbes conjugués pour compter les propositions, puis regarde ce qui les relie : une ponctuation, une conjonction de coordination, ou un mot subordonnant. Et devant « que », demande-toi : suit-il un nom ou un verbe ?",
    },
    "5e-francais-08-conjugaison": {
      accroche: "« Il faisait nuit. Soudain, un cri retentit. » Change un seul temps et toute la scène bascule : « Il fit nuit. Soudain, un cri retentissait » ne fait plus peur à personne. Les temps ne servent pas qu'à dater : ils mettent en scène.",
      objectifs: [
        "Choisir entre imparfait et passé simple dans un récit",
        "Former le plus-que-parfait, le futur simple et le conditionnel présent",
        "Former le subjonctif présent et l'impératif, verbes irréguliers compris",
      ],
      sections: [
        {
          titre: "Imparfait et passé simple : le décor et l'action",
          blocs: [
            { t: "propriete", titre: "Deux temps, deux rôles", md: "- L'**imparfait** est le temps de l'**arrière-plan** : il décrit, exprime une habitude ou une action qui dure. *Le soleil brillait. Nous mangions souvent des crêpes le dimanche.*\n- Le **passé simple** est le temps du **premier plan** : il exprime une action **brève, soudaine**, qui fait avancer le récit. *Soudain, un cri déchira le silence.*" },
            { t: "schema", titre: "Le décor dure, l'action surgit", legende: "En haut : l'imparfait s'étale comme un décor, le passé simple le traverse. En bas : le plus-que-parfait se place avant une autre action passée.", svg: `<svg viewBox="0 0 400 200"><text class="texte-petit" x="275" y="22" text-anchor="middle">passé simple : l'action surgit</text><rect class="aplat" x="30" y="40" width="340" height="18" rx="4"/><text class="texte-petit" x="36" y="53">imparfait : décor, durée</text><line class="trait" x1="230" y1="30" x2="230" y2="66" stroke-width="3"/><line class="trait" x1="320" y1="30" x2="320" y2="66" stroke-width="3"/><text class="texte-pigment" x="230" y="82" text-anchor="middle">un cri retentit</text><text class="texte-pigment" x="320" y="96" text-anchor="middle">il s'enfuit</text><path class="trait-fin" d="M20 160 L385 160" marker-end="url(#fl)"/><text class="texte-petit" x="385" y="152" text-anchor="end">temps</text><circle class="aplat-fort" cx="90" cy="160" r="5"/><circle class="aplat-fort" cx="220" cy="160" r="5"/><circle class="aplat-fort" cx="340" cy="160" r="5"/><text class="texte" x="90" y="145" text-anchor="middle">était parti</text><text class="texte" x="220" y="145" text-anchor="middle">arriva</text><text class="texte" x="340" y="145" text-anchor="middle">présent</text><text class="texte-petit" x="90" y="182" text-anchor="middle">plus-que-parfait</text><text class="texte-petit" x="220" y="182" text-anchor="middle">passé simple</text><text class="texte-petit" x="340" y="182" text-anchor="middle">aujourd'hui</text><path class="trait-fin" fill="none" d="M100 128 Q155 112 205 128" marker-end="url(#fl-p)"/><text class="texte-petit" x="155" y="110" text-anchor="middle">avant</text></svg>` },
            { t: "verifie", q: "« Il faisait nuit. Soudain, un cri retentit. » Quel temps exprime l'action soudaine ?", choix: ["Le passé simple (retentit)", "L'imparfait (faisait)", "Le présent", "Le plus-que-parfait"], bonne: 0, explication: "« Retentit » est au passé simple : l'action est brève et surgit sur le décor posé par l'imparfait « faisait »." },
          ],
        },
        {
          titre: "Former le passé simple et le plus-que-parfait",
          blocs: [
            { t: "tableau", titre: "Les terminaisons du passé simple", entetes: ["Personne", "chanter (1er gr.)", "finir (en -i-)", "vouloir (en -u-)", "venir (en -in-)"], lignes: [
              ["je", "chant**ai**", "fin**is**", "voul**us**", "v**ins**"],
              ["tu", "chant**as**", "fin**is**", "voul**us**", "v**ins**"],
              ["il, elle", "chant**a**", "fin**it**", "voul**ut**", "v**int**"],
              ["nous", "chant**âmes**", "fin**îmes**", "voul**ûmes**", "v**înmes**"],
              ["vous", "chant**âtes**", "fin**îtes**", "voul**ûtes**", "v**întes**"],
              ["ils, elles", "chant**èrent**", "fin**irent**", "voul**urent**", "v**inrent**"],
            ] },
            { t: "texte", md: "Le 2e groupe et beaucoup de verbes du 3e groupe prennent **-is** (*il prit, il dit, il fit*). D'autres prennent **-us** : *il put, il sut, il eut*, et **être** : *je fus, il fut, ils furent*. Retiens aussi *nous prîmes* : l'accent circonflexe aux personnes *nous* et *vous* est la signature du passé simple." },
            { t: "attention", md: "Au 1er groupe, la 1re personne s'écrit **-ai** : *je chantai* (passé simple), et non *je chantais* (imparfait). Et « venir » ne fait pas « ils venirent » mais **ils vinrent**." },
            { t: "propriete", titre: "Le plus-que-parfait", md: "**Auxiliaire *avoir* ou *être* à l'imparfait + participe passé** : *elle avait mangé, il avait fini, elle était partie*. Il exprime une action **antérieure** à une autre action passée : « Quand il arriva, le train **était** déjà **parti**. »" },
          ],
        },
        {
          titre: "Le futur simple et le conditionnel présent",
          blocs: [
            { t: "propriete", titre: "Un même radical, deux séries de terminaisons", md: "- **Futur** = infinitif + **-ai, -as, -a, -ons, -ez, -ont** : *je finirai, nous finirons*.\n- **Conditionnel présent** = même radical + terminaisons de l'**imparfait** **-ais, -ais, -ait, -ions, -iez, -aient** : *je finirais*.\n- Les verbes en *-re* perdent leur *e* : *prendre → je prendrai*." },
            { t: "tableau", titre: "Des radicaux irréguliers à connaître", entetes: ["Verbe", "Futur simple", "Conditionnel présent"], lignes: [
              ["être", "je serai", "je serais"], ["avoir", "j'aurai", "j'aurais"], ["aller", "j'irai", "j'irais"], ["faire", "je ferai", "je ferais"], ["venir", "je viendrai", "je viendrais"], ["voir", "je verrai", "je verrais"], ["pouvoir", "je pourrai", "je pourrais"], ["vouloir", "je voudrai", "je voudrais"], ["savoir", "je saurai", "je saurais"], ["prendre", "je prendrai", "je prendrais"],
            ] },
            { t: "astuce", md: "Futur ou conditionnel ? Remplace « je » par « nous » : *je voudrai* → *nous voudrons* (futur) ; *je voudrais* → *nous voudrions* (conditionnel). Le conditionnel exprime souvent une demande polie : « Je **voudrais** bien venir avec vous. »" },
          ],
        },
        {
          titre: "Le subjonctif présent et l'impératif",
          blocs: [
            { t: "propriete", titre: "Former le subjonctif présent", md: "Il suit souvent « **il faut que** », « **je veux que** ». On prend le radical de **ils** au présent + **-e, -es, -e, -ions, -iez, -ent** : *ils finissent → que je finisse* ; *ils prennent → que je prenne*. Pour *nous* et *vous*, on reprend la forme de l'imparfait : *que nous prenions, que vous preniez*." },
            { t: "tableau", titre: "Les subjonctifs irréguliers", entetes: ["Verbe", "que je…", "que nous…"], lignes: [
              ["être", "que je **sois**", "que nous soyons"], ["avoir", "que j'**aie**", "que nous ayons"], ["aller", "que j'**aille** (que tu ailles)", "que nous allions"], ["faire", "que je **fasse**", "que nous fassions (que vous fassiez)"], ["pouvoir", "que je **puisse**", "que nous puissions"], ["savoir", "que je **sache**", "que nous sachions"], ["vouloir", "que je **veuille**", "que nous voulions"],
            ] },
            { t: "propriete", titre: "L'impératif", md: "Il sert à donner un ordre ou un conseil. Il n'a que **trois personnes** (tu, nous, vous) et **pas de sujet** : *prends, prenons, prenez*. Au 1er groupe et pour *aller*, **pas de -s** à la 2e personne du singulier : « **Mange** ta soupe ! », « **Va** dehors ! » (mais *vas-y*). Irréguliers : *sois, aie, sache, veuille*." },
            { t: "exemple", titre: "Reconnaître les formes de « prendre »", md: "*nous prîmes* : passé simple. *nous prenions* : imparfait. *que nous prenions* : subjonctif présent (seul le « que » permet de trancher). *nous prendrions* : conditionnel présent. *nous avions pris* : plus-que-parfait." },
            { t: "verifie", q: "Complète : « Il faut que tu … chez le médecin. » (aller)", choix: ["ailles", "vas", "allais", "iras"], bonne: 0, explication: "Après « il faut que », on emploie le subjonctif : « que tu ailles ». « Vas » est le présent de l'indicatif, « allais » l'imparfait, « iras » le futur." },
          ],
        },
      ],
      bilan: "L'imparfait pose le décor, le passé simple lance l'action, le plus-que-parfait regarde en arrière. Et pour le futur, le conditionnel, le subjonctif et l'impératif : un radical, des terminaisons, et quelques irréguliers à savoir par cœur.",
    },
    "5e-francais-09-orthographe-accords": {
      accroche: "« Les lettres qu'elle a écrit sont arrivé. » Deux fautes en huit mots, et pourtant on les entend à peine ! L'orthographe grammaticale ne s'écoute pas : elle se raisonne. Avec quelques questions bien posées, tu peux la maîtriser.",
      objectifs: [
        "Accorder le participe passé avec être et avec avoir",
        "Distinguer les homophones leur/leurs, quel/qu'elle, peu/peut/peux, tout, même",
        "Réussir les accords dans le groupe nominal",
        "Reconnaître les mots invariables",
      ],
      sections: [
        {
          titre: "L'accord du participe passé",
          blocs: [
            { t: "propriete", titre: "Avec être, avec avoir", md: "- Avec l'auxiliaire **être**, le participe passé s'accorde avec le **sujet** : « Elles sont **arrivées** en retard. »\n- Avec l'auxiliaire **avoir**, il ne s'accorde **jamais avec le sujet** : « Ils ont **mangé**. » Il s'accorde avec le **COD** seulement si ce COD est **placé avant** le verbe : « Les pommes que j'ai **mangées**. »" },
            { t: "etapes", titre: "Méthode pour un participe passé avec avoir", items: [
              { titre: "Trouve le COD", md: "Pose la question « quoi ? » ou « qui ? » après le verbe : *j'ai mangé quoi ?* → les pommes." },
              { titre: "Regarde sa place", md: "Le COD est-il écrit **avant** le verbe ? Souvent, c'est le pronom *que*, *l'*, *les* qui le reprend." },
              { titre: "Accorde… ou pas", md: "COD avant : accord avec lui (*les pommes que j'ai mangées*). COD après ou absent : pas d'accord (*j'ai mangé des pommes*)." },
            ] },
            { t: "exemple", titre: "Deux participes, deux règles", md: "« Les lettres qu'elle a **écrites** sont **arrivées**. »\n\n*Écrites* : auxiliaire *avoir* ; le COD *que* (= les lettres, féminin pluriel) est placé avant *a* → **-es**. *Arrivées* : auxiliaire *être* → accord avec le sujet *les lettres* → **-ées**." },
            { t: "verifie", q: "« Les règles qu'il a … » (apprendre) : quelle forme choisir ?", choix: ["apprises", "appris", "apprise", "apprit"], bonne: 0, explication: "Le COD « qu' » reprend « les règles » (féminin pluriel) et il est placé avant « a » : le participe s'accorde, « apprises »." },
          ],
        },
        {
          titre: "Les homophones grammaticaux",
          blocs: [
            { t: "texte", md: "Des homophones se prononcent de la même façon mais s'écrivent différemment. Pour choisir, **remplace** le mot par un autre : le bon test lève le doute." },
            { t: "tableau", titre: "Le bon test pour chaque homophone", entetes: ["Homophone", "Nature", "Test", "Exemple"], lignes: [
              ["**leur**", "pronom, devant un **verbe** : invariable", "= « à eux »", "Je **leur** parle souvent."],
              ["**leur / leurs**", "déterminant, devant un **nom** : s'accorde", "un seul objet ou plusieurs ?", "**leur** réussite, **leurs** manteaux"],
              ["**quel(s), quelle(s)**", "déterminant : s'accorde avec le nom", "suivi d'un nom", "**Quelle** belle journée !"],
              ["**qu'elle(s)**", "« que » + « elle »", "on peut dire **qu'il**", "Je crois **qu'elle** viendra."],
              ["**peut / peux**", "verbe pouvoir (il peut, je/tu peux)", "on peut dire « pourra »", "Il **peut** pleuvoir. Tu **peux** sortir."],
              ["**peu**", "adverbe de quantité", "= « pas beaucoup »", "Il y a **peu** de nuages."],
            ] },
            { t: "verifie", q: "Complète : « Je … ai prêté mes livres. »", choix: ["leur", "leurs", "leurent", "l'heure"], bonne: 0, explication: "Devant le verbe « ai prêté », « leur » est un pronom (= à eux) : il ne prend jamais de -s." },
          ],
        },
        {
          titre: "Tout et même : variables ou invariables ?",
          blocs: [
            { t: "tableau", titre: "Tout et même selon leur place", entetes: ["Mot", "Il s'accorde…", "Il est invariable…"], lignes: [
              ["**tout**", "devant un **nom** ou un déterminant : *tous les garçons, **toutes** les filles*", "devant un **adjectif**, il signifie « tout à fait » : *ils sont **tout** contents*"],
              ["**même**", "**adjectif**, il signifie « identique » : *les **mêmes** jours*", "**adverbe**, il signifie « aussi » : ***même** les enfants ont compris*"],
            ] },
            { t: "attention", md: "Une exception pour l'oreille : devant un adjectif **féminin** qui commence par une consonne, *tout* s'accorde quand même : « Elles sont **toutes** petites », mais « elles sont **tout** émues »." },
            { t: "exemple", titre: "Une phrase, deux pièges", md: "« Ils étaient **tout** contents de **leur** réussite. »\n\n*Tout* est devant l'adjectif *contents* : adverbe invariable (= tout à fait). *Leur* est devant le nom *réussite*, au singulier : chacun a sa réussite." },
          ],
        },
        {
          titre: "Les accords dans le groupe nominal et les mots invariables",
          blocs: [
            { t: "propriete", titre: "Le nom commande", md: "Dans le groupe nominal, le **déterminant** et les **adjectifs** s'accordent en genre et en nombre avec le **nom** : *de belles fleurs rouges*. Les adjectifs courts (*beau, grand, petit*) se placent souvent avant le nom, les adjectifs de couleur après." },
            { t: "texte", md: "**Les noms composés** : seuls le **nom** et l'**adjectif** peuvent prendre la marque du pluriel ; le verbe, l'adverbe et la préposition restent invariables.\n\n- *un chou-fleur* → *des **choux-fleurs*** (deux noms) ;\n- *un grand-père* → *des **grands-pères*** (adjectif + nom) ;\n- *un arc-en-ciel* → *des **arcs**-en-ciel* (seul *arc* prend le -s : il y a plusieurs arcs, mais un seul ciel)." },
            { t: "definition", terme: "Mot invariable", md: "Mot qui **ne change jamais de forme** : les adverbes (*toujours, beaucoup, souvent*), les prépositions (*parmi, pendant, chez*) et les conjonctions (*mais, car*). « Les grandes filles chantent **toujours** » : seul *toujours* ne s'accorde pas." },
            { t: "verifie", q: "Quel est le pluriel de « un chou-fleur » ?", choix: ["des choux-fleurs", "des chou-fleurs", "des choux-fleur", "des chous-fleurs"], bonne: 0, explication: "Les deux mots sont des noms : ils prennent tous deux la marque du pluriel. Et « chou » fait son pluriel en -x : des choux." },
          ],
        },
      ],
      bilan: "Avec être, regarde le sujet ; avec avoir, cherche le COD placé avant. Pour les homophones, remplace ; pour tout et même, regarde le mot qui suit. L'orthographe se raisonne.",
    },
    "5e-francais-10-lexique-figures": {
      accroche: "Que partagent un aquarium, une aquarelle et un aqueduc ? De l'eau, bien sûr… et un mot latin vieux de deux mille ans : *aqua*. Les mots ont une histoire, une famille et des pouvoirs. Apprends à les ouvrir comme des coffres.",
      objectifs: [
        "Utiliser l'étymologie latine et grecque pour comprendre un mot",
        "Décomposer un mot en préfixe, radical et suffixe",
        "Maîtriser champ lexical, polysémie et connotation",
        "Reconnaître les principales figures de style",
      ],
      sections: [
        {
          titre: "D'où viennent nos mots ? L'étymologie",
          blocs: [
            { t: "texte", md: "La plupart des mots français viennent du **latin**, la langue des Romains, qui s'est transformée peu à peu en ancien français. Le **grec** ancien, lui, nous a surtout donné des **mots savants**, souvent scientifiques. Connaître quelques racines permet de deviner le sens de centaines de mots." },
            { t: "tableau", titre: "Quelques racines à connaître", entetes: ["Racine", "Origine", "Sens", "Exemples"], lignes: [
              ["*aqua*", "latin", "eau", "aquarium, aquatique, aqueduc, aquarelle"],
              ["*terra*", "latin", "terre", "terrain, territoire, terrestre"],
              ["*bio*", "grec", "vie", "biologie, biographie"],
              ["*graph*", "grec", "écrire", "orthographe, autographe, géographie"],
              ["*télé*", "grec", "loin", "téléphone, télévision, télescope"],
              ["*phone*", "grec", "voix, son", "téléphone, microphone"],
              ["*logie*", "grec", "étude, science", "biologie, zoologie"],
            ] },
            { t: "attention", md: "Méfie-toi des faux amis ! « Aigle » ne vient pas de *aqua* mais du latin *aquila* : rien à voir avec l'eau." },
          ],
        },
        {
          titre: "Construire un mot : préfixe, radical, suffixe",
          blocs: [
            { t: "definition", terme: "Radical, préfixe, suffixe", md: "Le **radical** porte le sens de base. Le **préfixe** se place **avant** et modifie le sens (*re-lire* : lire de nouveau). Le **suffixe** se place **après** et change souvent la classe du mot (*chant-eur* : celui qui chante)." },
            { t: "schema", titre: "Décomposer « déboisement »", legende: "Trois morceaux, trois indices : on comprend le mot sans dictionnaire.", svg: `<svg viewBox="0 0 400 190"><text class="texte-pigment" x="80" y="36" text-anchor="middle">préfixe</text><text class="texte-pigment" x="190" y="36" text-anchor="middle">radical</text><text class="texte-pigment" x="310" y="36" text-anchor="middle">suffixe</text><rect class="aplat-papier" x="40" y="48" width="80" height="50" rx="6"/><rect class="trait" x="40" y="48" width="80" height="50" rx="6" fill="none"/><rect class="aplat" x="130" y="48" width="120" height="50" rx="6"/><rect class="trait" x="130" y="48" width="120" height="50" rx="6" fill="none"/><rect class="aplat-papier" x="260" y="48" width="100" height="50" rx="6"/><rect class="trait" x="260" y="48" width="100" height="50" rx="6" fill="none"/><text class="texte" x="80" y="80" text-anchor="middle" font-size="22">dé</text><text class="texte" x="190" y="80" text-anchor="middle" font-size="22">bois</text><text class="texte" x="310" y="80" text-anchor="middle" font-size="22">ement</text><text class="texte-petit" x="80" y="120" text-anchor="middle">enlever</text><text class="texte-petit" x="190" y="120" text-anchor="middle">les arbres</text><text class="texte-petit" x="310" y="120" text-anchor="middle">l'action de</text><text class="texte-main" x="200" y="165" text-anchor="middle">= l'action d'enlever les arbres</text></svg>` },
            { t: "tableau", titre: "Des préfixes savants", entetes: ["Préfixe", "Sens", "Exemple"], lignes: [
              ["anti-", "contre", "antigel"], ["poly-", "plusieurs", "polygone"], ["hydro-", "eau", "hydravion"], ["péri-", "autour", "périmètre"], ["in-, im-", "contraire", "invisible, impossible"], ["re-", "de nouveau", "relire, refaire"],
            ] },
            { t: "verifie", q: "Dans « relire », quel est le préfixe ?", choix: ["re-", "lire", "-ire", "rel-"], bonne: 0, explication: "« Re- » signifie « de nouveau » ; « lire » est le radical. Relire, c'est lire de nouveau." },
          ],
        },
        {
          titre: "Le sens des mots : champ lexical, polysémie, connotation",
          blocs: [
            { t: "definition", terme: "Champ lexical", md: "Ensemble de mots qui renvoient à un **même thème**. La mer : *vague, écume, navire, marée*. La peur : *effroi, trembler, terrifié, angoisse*." },
            { t: "definition", terme: "Mot polysémique", md: "Mot qui a **plusieurs sens** selon le contexte (*poly* = plusieurs, *sémie* = sens). Une *glace* : un miroir, de l'eau gelée ou un dessert. Une *feuille* : d'arbre ou de papier." },
            { t: "definition", terme: "Connotation", md: "Sens **suggéré**, positif ou négatif, qui s'ajoute au sens premier. *Maison* est neutre, *demeure* est valorisant, *taudis* suggère la saleté et la pauvreté." },
            { t: "attention", md: "Un champ lexical ne regroupe pas tout ce qui *fait penser* au thème. La nuit peut faire peur, mais *nuit* n'appartient pas au champ lexical de la peur : *angoisse* et *frisson*, oui." },
          ],
        },
        {
          titre: "Les figures de style",
          blocs: [
            { t: "texte", md: "Une **figure de style** est une façon de dire les choses qui frappe l'imagination. Les écrivains s'en servent pour faire voir, ressentir, exagérer." },
            { t: "tableau", titre: "Cinq figures à reconnaître", entetes: ["Figure", "Principe", "Exemple"], lignes: [
              ["**Comparaison**", "Rapproche deux éléments **avec un outil** : comme, tel, pareil à, ressembler à", "Il est rusé **comme** un renard."],
              ["**Métaphore**", "Même rapprochement, **sans outil** de comparaison", "Cet homme est un lion. Cette fille est une vraie tornade."],
              ["**Personnification**", "Un objet ou un animal agit ou ressent comme un humain", "Le vent chuchote dans les arbres."],
              ["**Hyperbole**", "Une **exagération**", "Je meurs de faim. J'ai mille choses à faire !"],
              ["**Énumération**", "Une suite de termes qui crée un effet d'accumulation", "Des pommes, des poires, des prunes et des cerises."],
            ] },
            { t: "exemple", titre: "Trois façons de dire la vitesse", etapes: [
              "« Cette fille est rapide **comme** l'éclair » : il y a l'outil *comme* → **comparaison**.",
              "« Cette fille est **un éclair** » : plus d'outil, l'image est directe → **métaphore**.",
              "« Elle court plus vite que la lumière » : c'est impossible, on exagère → **hyperbole**.",
            ] },
            { t: "verifie", q: "« Ses yeux brillaient comme des étoiles. » Quelle figure de style reconnais-tu ?", choix: ["Une comparaison", "Une métaphore", "Une hyperbole", "Une énumération"], bonne: 0, explication: "L'outil « comme » relie les yeux et les étoiles : c'est une comparaison. Sans « comme » (« ses yeux sont des étoiles »), ce serait une métaphore." },
          ],
        },
      ],
      bilan: "Une racine pour deviner, un préfixe et un suffixe pour construire, un contexte pour choisir le sens : les mots s'ouvrent. Et avec les figures de style, ils se mettent à peindre.",
    },
    "5e-francais-11-poesie-types-textes": {
      accroche: "« Demain, dès l'aube, à l'heure où blanchit la campagne… » On croit lire le début d'un rendez-vous. Douze vers plus loin, le dernier mot nous serre le cœur. Comment quelques lignes, bien comptées et bien rimées, peuvent-elles bouleverser autant ?",
      objectifs: [
        "Compter les syllabes d'un vers et nommer le mètre",
        "Reconnaître les rimes, les strophes et le sonnet",
        "Lire et interpréter un poème : thème, images, sons",
        "Identifier les cinq types de textes",
      ],
      sections: [
        {
          titre: "Le vers et ses syllabes",
          blocs: [
            { t: "definition", terme: "Vers", md: "Une **ligne de poème**. On mesure un vers en comptant ses **syllabes** prononcées : c'est son **mètre**. Les plus fréquents sont l'**octosyllabe** (8 syllabes), le **décasyllabe** (10) et l'**alexandrin** (12)." },
            { t: "propriete", titre: "La règle du e muet", md: "- Devant une **consonne**, le *e* muet **se prononce** et compte : « U-ne-ro-se » = 4 syllabes.\n- Devant une **voyelle** (ou un *h* muet), il **s'élide** et ne compte pas : « la lu-n(e) éclaire ».\n- En **fin de vers**, il ne compte **jamais**." },
            { t: "exemple", titre: "Compter un alexandrin de Victor Hugo", etapes: [
              "Le vers : « Demain, dès l'aube, à l'heure où blanchit la campagne ».",
              "Le *e* de « aube » et celui de « heure » sont suivis d'une voyelle (*à*, *où*) : ils s'élident.",
              "Le *e* final de « campagne » est en fin de vers : il ne compte pas.",
              "De-main-dès-l'au-b(e) à-l'heu-r(e) où-blan-chit-la-cam-pagne : **12 syllabes**, c'est un **alexandrin**.",
            ] },
            { t: "verifie", q: "Combien de syllabes compte « Une rose fleurit dans le jardin » ?", choix: ["10", "8", "12", "9"], bonne: 0, explication: "U-ne-ro-se-fleu-rit-dans-le-jar-din : les e de « une » et « rose » sont suivis d'une consonne, ils comptent. 10 syllabes : un décasyllabe." },
          ],
        },
        {
          titre: "Rimes, strophes et sonnet",
          blocs: [
            { t: "schema", titre: "Trois dispositions de rimes", legende: "Chaque lettre désigne un son de rime : les vers marqués A riment entre eux, les vers marqués B aussi.", svg: `<svg viewBox="0 0 400 200"><text class="texte" x="70" y="24" text-anchor="middle">Plates</text><text class="texte" x="200" y="24" text-anchor="middle">Croisées</text><text class="texte" x="330" y="24" text-anchor="middle">Embrassées</text><text class="texte-petit" x="70" y="40" text-anchor="middle">AABB</text><text class="texte-petit" x="200" y="40" text-anchor="middle">ABAB</text><text class="texte-petit" x="330" y="40" text-anchor="middle">ABBA</text><line class="trait-fin" x1="25" y1="60" x2="85" y2="60"/><line class="trait-fin" x1="25" y1="90" x2="85" y2="90"/><line class="trait-fin" x1="25" y1="120" x2="85" y2="120"/><line class="trait-fin" x1="25" y1="150" x2="85" y2="150"/><text class="texte-pigment" x="97" y="64">A</text><text class="texte-pigment" x="97" y="94">A</text><text class="texte" x="97" y="124">B</text><text class="texte" x="97" y="154">B</text><path class="trait" fill="none" d="M110 60 Q122 75 110 90"/><path class="pointille" fill="none" d="M110 120 Q122 135 110 150"/><line class="trait-fin" x1="155" y1="60" x2="215" y2="60"/><line class="trait-fin" x1="155" y1="90" x2="215" y2="90"/><line class="trait-fin" x1="155" y1="120" x2="215" y2="120"/><line class="trait-fin" x1="155" y1="150" x2="215" y2="150"/><text class="texte-pigment" x="227" y="64">A</text><text class="texte" x="227" y="94">B</text><text class="texte-pigment" x="227" y="124">A</text><text class="texte" x="227" y="154">B</text><path class="trait" fill="none" d="M240 60 Q256 90 240 120"/><path class="pointille" fill="none" d="M240 90 Q266 120 240 150"/><line class="trait-fin" x1="285" y1="60" x2="345" y2="60"/><line class="trait-fin" x1="285" y1="90" x2="345" y2="90"/><line class="trait-fin" x1="285" y1="120" x2="345" y2="120"/><line class="trait-fin" x1="285" y1="150" x2="345" y2="150"/><text class="texte-pigment" x="357" y="64">A</text><text class="texte" x="357" y="94">B</text><text class="texte" x="357" y="124">B</text><text class="texte-pigment" x="357" y="154">A</text><path class="trait" fill="none" d="M370 60 Q392 105 370 150"/><path class="pointille" fill="none" d="M370 90 Q380 105 370 120"/><text class="texte-petit" x="200" y="188" text-anchor="middle">trait plein : rimes A, pointillé : rimes B</text></svg>` },
            { t: "texte", md: "Une rime est **féminine** quand elle se termine par un *e* muet (*rose / chose*, *campagne / montagne*) ; sinon, elle est **masculine** (*m'attends / longtemps*)." },
            { t: "tableau", titre: "Les strophes", entetes: ["Nombre de vers", "Nom de la strophe"], lignes: [["2", "distique"], ["3", "**tercet**"], ["4", "**quatrain**"]] },
            { t: "propriete", titre: "Le sonnet", md: "Poème de **14 vers** : **deux quatrains** puis **deux tercets**. Venu d'Italie, il est rendu célèbre en France au XVIe siècle par Ronsard et du Bellay." },
            { t: "citation", texte: "Heureux qui, comme Ulysse, a fait un beau voyage,\nOu comme cestuy-là qui conquit la toison,\nEt puis est retourné, plein d'usage et raison,\nVivre entre ses parents le reste de son âge !", auteur: "Joachim du Bellay", source: "Les Regrets (1558), premier quatrain d'un sonnet" },
            { t: "texte", md: "Ce quatrain en alexandrins a des **rimes embrassées** : *voyage* (A), *toison* (B), *raison* (B), *âge* (A). La poésie peut aussi se libérer de ces règles : on parle de **vers libres** (sans rimes ni mètre régulier) ou de **poème en prose**." },
          ],
        },
        {
          titre: "Lire et interpréter un poème",
          blocs: [
            { t: "liste", titre: "Quatre questions pour lire un poème", ordonnee: true, items: [
              "**Le thème** : de quoi parle le poème ? (l'amour, la nature, le deuil, le voyage…)",
              "**Les images** : quelles figures de style ? (comparaisons, métaphores, personnifications)",
              "**Les sons** : l'**allitération** répète une consonne, l'**assonance** répète une voyelle.",
              "**Le rythme** : la longueur des vers, les pauses, les mots mis en valeur.",
            ] },
            { t: "citation", texte: "Pour qui sont ces serpents qui sifflent sur vos têtes ?", auteur: "Jean Racine", source: "Andromaque (1667), acte V" },
            { t: "texte", md: "La répétition du son **[s]** imite le sifflement des serpents : c'est une **allitération**. Chez Verlaine, « Les sanglots longs / Des violons / De l'automne » répète le son **[on]** : c'est une **assonance**, qui rend la mélancolie presque audible." },
            { t: "exemple", titre: "« Demain, dès l'aube » (Hugo, Les Contemplations, 1856)", md: "Le poète annonce qu'il partira à travers la campagne : on croit à un rendez-vous amoureux. Les **rimes croisées** (*campagne / m'attends / montagne / longtemps*) donnent un rythme de marche. Mais le dernier vers révèle le but du voyage : « Et quand j'arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » Le thème est le **deuil** : Hugo va se recueillir sur la tombe de sa fille Léopoldine, morte noyée en 1843." },
            { t: "frise", titre: "Des poètes à travers les siècles", evenements: [
              { date: 1100, label: "La Chanson de Roland", detail: "Poème épique en décasyllabes." },
              { date: 1552, label: "Ronsard, Les Amours", detail: "Sonnets d'amour." },
              { date: 1558, label: "Du Bellay, Les Regrets", detail: "« Heureux qui, comme Ulysse… »" },
              { date: 1667, label: "Racine, Andromaque", detail: "Une tragédie en alexandrins." },
              { date: 1668, label: "La Fontaine, Fables", detail: "Premier recueil des Fables." },
              { date: 1856, label: "Hugo, Les Contemplations", detail: "« Demain, dès l'aube »" },
              { date: 1857, label: "Baudelaire, Les Fleurs du mal", detail: "« L'Homme et la mer »" },
              { date: 1866, label: "Verlaine, Poèmes saturniens", detail: "« Chanson d'automne »" },
            ] },
          ],
        },
        {
          titre: "Les cinq types de textes",
          blocs: [
            { t: "tableau", titre: "Reconnaître un type de texte", entetes: ["Type", "Il sert à…", "Exemple"], lignes: [
              ["**Narratif**", "raconter une histoire", "« Il était une fois un roi qui avait trois fils. Un jour, il décida de les mettre à l'épreuve. »"],
              ["**Descriptif**", "faire voir un lieu, un personnage", "« La salle était vaste, sombre, aux murs couverts de tableaux. »"],
              ["**Explicatif**", "expliquer (pourquoi ? comment ?)", "« Le volcan entre en éruption lorsque la pression du magma devient trop forte. »"],
              ["**Argumentatif**", "convaincre", "« Il faut lire chaque jour, car la lecture enrichit le vocabulaire. »"],
              ["**Dialogal**", "faire parler des personnages", "« — Tu viens ? — Attends, j'arrive ! »"],
            ] },
            { t: "verifie", q: "Comment appelle-t-on une strophe de quatre vers ?", choix: ["Un quatrain", "Un tercet", "Un distique", "Un sonnet"], bonne: 0, explication: "Quatre vers forment un quatrain. Le tercet en a trois, le distique deux, et le sonnet est un poème entier de 14 vers." },
          ],
        },
      ],
      bilan: "Compter les syllabes, écouter les rimes, repérer images et sons : c'est ainsi qu'on entre dans un poème. Et pour tout texte, demande-toi : raconte-t-il, décrit-il, explique-t-il, argumente-t-il ou fait-il parler ?",
    },
    "5e-francais-12-expression-ecrite-orale": {
      accroche: "Tu as des idées plein la tête, mais devant la feuille blanche ou devant la classe, tout se bloque ? Rassure-toi : écrire et parler, cela s'apprend comme un artisanat. Chaque genre a ses outils et ses gestes. Voici ta boîte à outils.",
      objectifs: [
        "Écrire un récit d'aventure, un portrait et une scène de théâtre",
        "Rédiger un paragraphe argumenté avec des connecteurs logiques",
        "Préparer et réussir une prise de parole",
      ],
      sections: [
        {
          titre: "Écrire un récit d'aventure",
          blocs: [
            { t: "texte", md: "Ton récit suit le **schéma narratif**. Les temps se partagent le travail : l'**imparfait** pour le décor et ce qui dure, le **passé simple** pour les actions rapides. Les **connecteurs temporels** guident le lecteur : *soudain, tout à coup, le lendemain, pendant ce temps, plus tard*." },
            { t: "etapes", titre: "Un court récit bien construit", items: [
              { titre: "Situation initiale", md: "« Le navire **voguait** paisiblement depuis dix jours. » (imparfait)" },
              { titre: "Élément perturbateur", md: "« **Tout à coup**, une tempête se leva. » (connecteur brusque + passé simple)" },
              { titre: "Péripétie", md: "« Les marins **luttèrent** toute la nuit contre les vagues. »" },
              { titre: "Dénouement", md: "« Au matin, ils découvrirent une île inconnue. »" },
              { titre: "Situation finale", md: "« Ils décidèrent d'y débarquer. »" },
            ] },
            { t: "verifie", q: "Quelle phrase introduit le mieux une péripétie ?", choix: ["Soudain, un grondement fit trembler le sol.", "Il était une fois une forêt tranquille.", "Finalement, tout rentra dans l'ordre.", "Depuis toujours, le village vivait en paix."], bonne: 0, explication: "« Soudain » et le passé simple « fit » annoncent un rebondissement. Les autres phrases ouvrent ou ferment le récit." },
          ],
        },
        {
          titre: "Faire un portrait",
          blocs: [
            { t: "propriete", titre: "L'ordre du portrait", md: "On décrit d'abord le **physique** (du général au détail : silhouette, visage, regard), puis le **caractère** (qualités, défauts, manières). On choisit des **adjectifs précis**, des **comparaisons** et des verbes variés." },
            { t: "exemple", titre: "Améliorer une phrase de portrait", etapes: [
              "Phrase vague : « Il était grand et il était gentil et il était beau. » (répétitions, mots plats)",
              "Phrase précise : « Ses yeux gris, vifs comme ceux d'un faucon, ne laissaient rien échapper. »",
              "Ce qui change : une **couleur** (gris), une **qualité** (vifs), une **comparaison** (comme ceux d'un faucon) et un trait de caractère suggéré (rien ne lui échappe).",
            ] },
          ],
        },
        {
          titre: "Écrire une scène de théâtre",
          blocs: [
            { t: "texte", md: "Au théâtre, pas de narrateur : tout passe par les **répliques**. Le **nom du personnage**, souvent en majuscules, précède chaque réplique. Les **didascalies** (gestes, ton, décor) sont écrites en italique ou entre parenthèses : « SCAPIN, *à part*. — Voilà mon homme ! »" },
            { t: "schema", titre: "La mise en page d'une scène", legende: "Le titre de scène, les didascalies en italique, le nom du personnage avant chaque réplique.", svg: `<svg viewBox="0 0 400 220"><rect class="aplat-papier" x="20" y="10" width="250" height="200" rx="4"/><rect class="trait-fin" x="20" y="10" width="250" height="200" rx="4" fill="none"/><text class="texte" x="145" y="36" text-anchor="middle" font-weight="bold">SCÈNE 1</text><text class="texte-petit" x="145" y="56" text-anchor="middle" font-style="italic">(Une forêt, la nuit.)</text><text class="texte" x="36" y="88" font-weight="bold">LÉA</text><text class="texte" x="36" y="106">Tu as entendu ce bruit ?</text><text class="texte" x="36" y="138" font-weight="bold">TOM</text><text class="texte" x="36" y="156"><tspan font-style="italic">(tremblant)</tspan> C'est le vent.</text><text class="texte" x="36" y="190"><tspan font-weight="bold">LÉA</tspan>, <tspan font-style="italic">à part</tspan>. — Il a peur !</text><path class="trait-fin" d="M280 36 L190 36" marker-end="url(#fl)"/><path class="trait-fin" d="M280 56 L222 56" marker-end="url(#fl)"/><path class="trait-fin" d="M280 88 L72 88" marker-end="url(#fl)"/><path class="trait-fin" d="M280 106 L218 106" marker-end="url(#fl)"/><path class="trait-fin" d="M280 156 L226 156" marker-end="url(#fl)"/><path class="trait-fin" d="M280 190 L254 190" marker-end="url(#fl)"/><text class="texte-petit" x="284" y="40">titre de scène</text><text class="texte-petit" x="284" y="60">didascalie : décor</text><text class="texte-petit" x="284" y="92">personnage</text><text class="texte-petit" x="284" y="110">réplique</text><text class="texte-petit" x="284" y="160">didascalie : ton</text><text class="texte-petit" x="284" y="194">aparté</text></svg>` },
            { t: "attention", md: "N'écris pas « Scapin dit à part qu'il voit son homme » : c'est du récit ! Au théâtre, le personnage **parle directement**, sans guillemets ni « dit-il »." },
          ],
        },
        {
          titre: "Argumenter en un paragraphe",
          blocs: [
            { t: "etapes", titre: "Les quatre temps du paragraphe argumenté", items: [
              { titre: "La thèse", md: "J'affirme mon idée : « Lire des romans d'aventure est utile. »" },
              { titre: "L'argument", md: "Je justifie : « **En effet**, ils font voyager sans quitter sa chambre. »" },
              { titre: "L'exemple", md: "Je prouve : « **Par exemple**, *Vingt mille lieues sous les mers* nous emmène au fond des océans. »" },
              { titre: "La conclusion", md: "Je referme : « **C'est pourquoi** je conseille ce genre à tous. »" },
            ] },
            { t: "tableau", titre: "Les connecteurs logiques", entetes: ["Ce qu'il exprime", "Connecteurs"], lignes: [
              ["Ordre des idées", "d'abord, ensuite, enfin"],
              ["Cause", "car, parce que, en effet"],
              ["Conséquence", "donc, ainsi, c'est pourquoi"],
              ["Opposition", "mais, pourtant, cependant"],
              ["Temps (récit)", "soudain, tout à coup, le lendemain, plus tard"],
            ] },
            { t: "verifie", q: "« Il pleuvait, … nous sommes sortis. » Quel connecteur convient ?", choix: ["pourtant", "parce que", "donc", "ensuite"], bonne: 0, explication: "Sortir sous la pluie est inattendu : il faut un connecteur d'opposition, « pourtant ». « Donc » indiquerait une conséquence, ce qui n'a pas de sens ici." },
          ],
        },
        {
          titre: "Prendre la parole et se relire",
          blocs: [
            { t: "liste", titre: "Réussir un exposé oral", items: [
              "**Regarder le public**, pas seulement ta feuille.",
              "**Articuler** et **parler assez fort** pour le fond de la classe.",
              "**Varier le ton** pour garder l'attention, faire des pauses.",
              "S'appuyer sur des **notes courtes** (mots-clés), **sans lire** son texte mot à mot.",
            ] },
            { t: "astuce", md: "Avant de rendre un écrit, relis-le **plusieurs fois**, avec un objectif à chaque lecture : la ponctuation, puis les accords, puis les temps des verbes, puis les répétitions." },
          ],
        },
      ],
      bilan: "Un genre, des codes : schéma narratif pour l'aventure, ordre pour le portrait, didascalies pour le théâtre, thèse et connecteurs pour argumenter. Et toujours : regarde ton public, relis ta copie.",
    },
  },
};
