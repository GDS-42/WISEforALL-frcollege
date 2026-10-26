export default {
  id: "4e-histoire",
  chapitres: {
    "4e-histoire-01-negoces-traites": {
      accroche: "Nantes, 1780. Sur le quai de la Fosse, un armateur surveille le chargement de son navire : des tissus, des fusils, des barils d'eau-de-vie. Dans quinze mois, s'il revient, la cale sera pleine de sucre et de café. Entre les deux, des centaines d'Africains auront été achetés, enchaînés, vendus. Comment ce commerce a-t-il enrichi l'Europe au prix de millions de vies ?",
      objectifs: [
        "Décrire les étapes du commerce triangulaire",
        "Expliquer l'enrichissement des ports et de la bourgeoisie marchande",
        "Décrire la société des plantations, la condition des esclaves et leurs résistances",
        "Situer les grandes dates de la traite atlantique, de 1685 à 1848",
      ],
      sections: [
        {
          titre: "Un commerce entre trois continents",
          blocs: [
            { t: "texte", md: "Au XVIIIe siècle, l'Europe consomme de plus en plus de **sucre**, de **café**, de **cacao**. Ces produits viennent des colonies d'Amérique, où il faut une main-d'œuvre nombreuse. Les Européens vont la chercher en Afrique, par la force et par le commerce.\n\nAinsi naît un circuit en trois étapes qui relie l'**Europe**, l'**Afrique** et l'**Amérique** : on l'appelle le **commerce triangulaire**." },
            { t: "definition", terme: "Traite négrière", md: "Commerce d'êtres humains : des **captifs africains** sont achetés puis transportés de force pour être vendus comme **esclaves**. La traite atlantique est la plus massive : environ **12 à 13 millions** d'Africains déportés vers l'Amérique entre le XVIe et le XIXe siècle. Le XVIIIe siècle en est le sommet." },
            { t: "carte", fond: "monde", titre: "Le commerce triangulaire au XVIIIe siècle", cadre: [-80, -2, 15, 52],
              reperes: [
                { nom: "Nantes", lat: 47.22, lon: -1.55 },
                { nom: "Bordeaux", lat: 44.84, lon: -0.58 },
                { nom: "Gorée", lat: 14.67, lon: -17.40 },
                { nom: "Ouidah", lat: 6.36, lon: 2.09 },
                { nom: "Cap-Français (Saint-Domingue)", lat: 19.76, lon: -72.20 },
                { nom: "Fort-Royal (Martinique)", lat: 14.60, lon: -61.07 },
              ],
              traits: [
                { de: [47.22, -1.55], a: [6.36, 2.09], label: "tissus, armes, alcool" },
                { de: [6.36, 2.09], a: [19.76, -72.20], label: "captifs africains" },
                { de: [19.76, -72.20], a: [44.84, -0.58], label: "sucre, café, cacao" },
              ],
              legende: "Premier côté : de l'Europe vers le golfe de Guinée. Deuxième côté : la traversée de l'Atlantique, le « passage du milieu ». Troisième côté : le retour vers Nantes ou Bordeaux." },
            { t: "exemple", titre: "Raconter un voyage négrier au départ de Nantes", etapes: [
              "Le navire quitte **Nantes** chargé de tissus, d'armes, d'alcool et de barres de fer.",
              "Sur la côte du **golfe de Guinée**, le capitaine échange ces marchandises contre des captifs, auprès de marchands et de rois africains qui les ont capturés lors de guerres ou de razzias.",
              "Les captifs, enchaînés dans la cale, traversent l'Atlantique pendant un à trois mois : c'est le **passage du milieu**. Beaucoup meurent de maladie, de faim ou de mauvais traitements.",
              "À **Saint-Domingue**, les survivants sont vendus aux planteurs.",
              "Le navire revient en France chargé de **sucre** et de **café**, revendus avec un gros bénéfice.",
            ] },
            { t: "verifie", q: "Pourquoi les navires européens apportent-ils des armes et des tissus sur les côtes d'Afrique ?", choix: ["Pour les offrir aux missionnaires", "Pour les échanger contre des captifs", "Pour équiper les colons d'Amérique"], bonne: 1, explication: "Ces marchandises servent de monnaie d'échange : les capitaines les troquent contre des captifs auprès de marchands et de souverains africains." },
          ],
        },
        {
          titre: "Les ports et la bourgeoisie marchande s'enrichissent",
          blocs: [
            { t: "texte", md: "**Nantes** est le ==premier port négrier de France== : plus de 40 % des expéditions de traite françaises en partent. **Bordeaux**, lui, est le premier port du commerce colonial : il importe et réexporte vers toute l'Europe le sucre, le café et l'indigo des Antilles.\n\nCes profits enrichissent les **armateurs** (qui équipent les navires) et les **négociants** (qui achètent et revendent les marchandises). Ils font bâtir de beaux hôtels particuliers, comme sur l'île Feydeau à Nantes ou autour de la place de la Bourse à Bordeaux." },
            { t: "attention", md: "Les négociants, même très riches, ne sont **pas des nobles** : ils appartiennent au **tiers état**. C'est une **bourgeoisie** marchande qui possède la fortune mais pas les privilèges. Elle réclame donc une place plus grande dans la société, ce qui pèsera en 1789." },
            { t: "tableau", titre: "Qui fait quoi dans le commerce colonial ?", entetes: ["Acteur", "Rôle"], lignes: [
              ["Armateur", "Finance et équipe le navire, recrute l'équipage"],
              ["Négociant", "Achète et revend les produits coloniaux en Europe"],
              ["Capitaine", "Conduit le navire et négocie l'achat des captifs"],
              ["Planteur", "Possède la plantation et les esclaves en Amérique"],
            ] },
          ],
        },
        {
          titre: "La société des plantations",
          blocs: [
            { t: "texte", md: "Aux Antilles (**Saint-Domingue**, Martinique, Guadeloupe), les esclaves travaillent surtout dans les **plantations de canne à sucre**, mais aussi de café, de coton ou d'indigo. Ils ne reçoivent aucun salaire. Les journées sont épuisantes, la discipline est imposée par le fouet.\n\nSaint-Domingue est la colonie française la plus riche : à la fin du XVIIIe siècle, elle compte environ **500 000 esclaves** pour à peine 30 000 colons blancs." },
            { t: "propriete", titre: "Le Code noir (1685)", md: "Cet édit royal, signé par **Louis XIV** en **1685**, fixe le statut des esclaves dans les colonies françaises. Il les considère comme des **biens meubles** : des objets que le maître peut vendre, léguer ou punir. Il prévoit des châtiments terribles pour les fugitifs." },
            { t: "citation", texte: "Déclarons les esclaves être meubles, et comme tels entrer dans la communauté.", auteur: "Code noir, article 44", source: "édit de mars 1685" },
            { t: "texte", md: "Les esclaves résistent pourtant. Certains ralentissent le travail ou sabotent les outils. D'autres s'enfuient dans les montagnes : c'est le **marronnage**. En août **1791**, une immense révolte éclate à Saint-Domingue. Menée notamment par **Toussaint Louverture**, elle aboutit en **1804** à l'indépendance de la colonie, qui prend le nom d'**Haïti**." },
            { t: "verifie", q: "Comment appelle-t-on la fuite d'un esclave hors de la plantation ?", choix: ["La traite", "Le marronnage", "Le négoce"], bonne: 1, explication: "Le marronnage est la fuite d'un esclave. Les « marrons » se cachaient dans les forêts et les montagnes, au risque de terribles punitions s'ils étaient repris." },
          ],
        },
        {
          titre: "De l'apogée de la traite à son abolition",
          blocs: [
            { t: "frise", titre: "La traite et l'esclavage dans les colonies françaises", evenements: [
              { date: 1685, label: "Code noir", detail: "Louis XIV fixe le statut des esclaves, considérés comme des biens meubles." },
              { date: 1791, label: "Révolte de Saint-Domingue", detail: "Les esclaves du nord de l'île se soulèvent en août." },
              { date: 1794, label: "Première abolition", detail: "La Convention abolit l'esclavage le 4 février." },
              { date: 1802, label: "Rétablissement", detail: "Bonaparte rétablit l'esclavage dans les colonies." },
              { date: 1804, label: "Indépendance d'Haïti", detail: "Saint-Domingue devient la première république noire." },
              { date: 1848, label: "Abolition définitive", detail: "Décret du 27 avril, préparé par Victor Schœlcher." },
            ] },
            { t: "savais-tu", md: "Au XVIIIe siècle, certains philosophes des Lumières dénoncent déjà l'esclavage. Dans *Candide* (1759), Voltaire fait dire à un esclave mutilé : « C'est à ce prix que vous mangez du sucre en Europe. »" },
          ],
        },
      ],
      bilan: "Le sucre des tables européennes avait un prix : des millions d'Africains déportés et réduits en esclavage. Les ports et la bourgeoisie marchande s'enrichissent, mais les esclaves résistent, jusqu'à arracher l'indépendance d'Haïti.",
    },
    "4e-histoire-02-europe-lumieres": {
      accroche: "Toulouse, 10 mars 1762. Jean Calas, un marchand protestant, est supplicié en place publique : on l'accuse, sans preuve, d'avoir tué son fils pour l'empêcher de devenir catholique. Au bord du lac Léman, un vieil écrivain s'indigne et prend la plume. Il s'appelle Voltaire, et il va faire de cette injustice une affaire européenne.",
      objectifs: [
        "Identifier les grands philosophes des Lumières et leurs idées",
        "Expliquer comment les idées nouvelles circulent malgré la censure",
        "Expliquer la critique de l'absolutisme et les limites du despotisme éclairé",
        "Dater les grandes œuvres du siècle des Lumières",
      ],
      sections: [
        {
          titre: "Éclairer les esprits par la raison",
          blocs: [
            { t: "texte", md: "Au XVIIIe siècle, des savants et des écrivains veulent chasser les « ténèbres » de l'ignorance, de la superstition et de l'intolérance. Leur outil : la **raison**, c'est-à-dire la capacité de chacun à réfléchir par lui-même, à observer, à douter.\n\nOn les appelle les **philosophes**, et leur mouvement les **Lumières**. Ils s'appuient sur les progrès des sciences, comme les travaux de Newton, pour tout examiner : la nature, la religion, la société, le pouvoir." },
            { t: "definition", terme: "Les Lumières", md: "Mouvement intellectuel du XVIIIe siècle, né en Europe, qui veut **éclairer les esprits par la raison**. Il défend la liberté, la tolérance, le bonheur et le progrès, et critique l'arbitraire du pouvoir." },
            { t: "tableau", titre: "Quatre philosophes, quatre combats", entetes: ["Philosophe", "Œuvre clé", "Idée principale"], lignes: [
              ["Montesquieu", "*De l'esprit des lois* (1748)", "La **séparation des pouvoirs**"],
              ["Voltaire", "*Traité sur la tolérance* (1763)", "La **tolérance** et la liberté d'expression"],
              ["Rousseau", "*Du contrat social* (1762)", "La **souveraineté** appartient au peuple"],
              ["Diderot", "L'*Encyclopédie* (1751-1772)", "Rassembler et diffuser **tous les savoirs**"],
            ] },
            { t: "citation", texte: "Qu'est-ce que la tolérance ? C'est l'apanage de l'humanité. Nous sommes tous pétris de faiblesses et d'erreurs ; pardonnons-nous réciproquement nos sottises.", auteur: "Voltaire", source: "Dictionnaire philosophique, article « Tolérance », 1764" },
          ],
        },
        {
          titre: "Contester la monarchie absolue",
          blocs: [
            { t: "texte", md: "En France, le roi gouverne par **droit divin** : il tient son pouvoir de Dieu et n'a de comptes à rendre à personne. Il fait les lois, les fait appliquer et rend la justice. Il peut faire emprisonner sans jugement par une simple *lettre de cachet* : Voltaire a connu deux fois la Bastille.\n\nLes philosophes critiquent cet **absolutisme**. Pour Diderot, aucun pouvoir ne vient de Dieu ou de la nature : il doit reposer sur l'accord des hommes." },
            { t: "citation", texte: "Aucun homme n'a reçu de la nature le droit de commander aux autres.", auteur: "Diderot", source: "Encyclopédie, article « Autorité politique », 1751" },
            { t: "schema", titre: "La séparation des pouvoirs selon Montesquieu", legende: "Dans la monarchie absolue, le roi réunit les trois pouvoirs. Montesquieu propose de les confier à des personnes différentes, pour éviter la tyrannie.", svg: `<svg viewBox="0 0 400 230"><text class="texte-main" x="200" y="24" text-anchor="middle">« le pouvoir arrête le pouvoir »</text><rect class="aplat" x="10" y="44" width="120" height="96" rx="8"/><rect class="trait" x="10" y="44" width="120" height="96" rx="8"/><rect class="aplat" x="140" y="44" width="120" height="96" rx="8"/><rect class="trait" x="140" y="44" width="120" height="96" rx="8"/><rect class="aplat" x="270" y="44" width="120" height="96" rx="8"/><rect class="trait" x="270" y="44" width="120" height="96" rx="8"/><text class="texte" x="70" y="70" text-anchor="middle">Législatif</text><text class="texte-petit" x="70" y="96" text-anchor="middle">fait les lois</text><text class="texte-petit" x="70" y="118" text-anchor="middle">une assemblée</text><text class="texte" x="200" y="70" text-anchor="middle">Exécutif</text><text class="texte-petit" x="200" y="96" text-anchor="middle">applique les lois</text><text class="texte-petit" x="200" y="118" text-anchor="middle">le roi, les ministres</text><text class="texte" x="330" y="70" text-anchor="middle">Judiciaire</text><text class="texte-petit" x="330" y="96" text-anchor="middle">juge</text><text class="texte-petit" x="330" y="118" text-anchor="middle">les tribunaux</text><path class="pointille" d="M70 140 L70 160 L330 160 L330 140 M200 140 L200 160"/><text class="texte-petit" x="200" y="178" text-anchor="middle">trois pouvoirs séparés qui se limitent l'un l'autre</text><rect class="aplat-papier" x="40" y="194" width="320" height="28" rx="6"/><rect class="trait-fin" x="40" y="194" width="320" height="28" rx="6"/><text class="texte-petit" x="200" y="212" text-anchor="middle">Monarchie absolue : le roi détient les trois pouvoirs</text></svg>` },
            { t: "exemple", titre: "Présenter Montesquieu en quelques lignes", md: "Noble bordelais, magistrat, Montesquieu publie *De l'esprit des lois* en **1748**. Il a observé l'Angleterre, où le Parlement limite le roi. Il en tire une leçon : un pouvoir unique mène à la tyrannie. Il faut donc que « le pouvoir arrête le pouvoir ». Cette idée sera reprise en 1789 dans la Déclaration des droits de l'homme et du citoyen." },
            { t: "verifie", q: "Quel philosophe a théorisé la séparation des pouvoirs ?", choix: ["Rousseau", "Voltaire", "Montesquieu", "Diderot"], bonne: 2, explication: "C'est Montesquieu, dans De l'esprit des lois (1748). Rousseau, lui, insiste sur la souveraineté du peuple." },
          ],
        },
        {
          titre: "Comment circulent les idées ?",
          blocs: [
            { t: "texte", md: "Les idées nouvelles voyagent par les **livres** et les **journaux**, mais aussi par la conversation. À Paris, des femmes de la haute société tiennent des **salons** où l'on discute de science et de politique : celui de **Madame Geoffrin** est l'un des plus célèbres. On débat aussi dans les **cafés** (comme le Procope), les **académies** de province et les loges maçonniques.\n\nLe français est alors la langue des élites dans toute l'Europe : un livre publié à Paris est lu à Berlin ou à Saint-Pétersbourg." },
            { t: "attention", md: "Les Lumières ne circulent pas librement ! La **censure** royale et l'Église surveillent les livres. L'*Encyclopédie* est **interdite** en 1752, puis condamnée en 1759 ; elle continue de paraître en secret. Beaucoup d'ouvrages sont imprimés à Amsterdam ou à Genève, puis introduits en France en contrebande." },
            { t: "carte", fond: "monde", titre: "L'Europe des Lumières", cadre: [-12, 40, 38, 62],
              reperes: [
                { nom: "Paris", lat: 48.86, lon: 2.35 },
                { nom: "Londres", lat: 51.51, lon: -0.13 },
                { nom: "Amsterdam", lat: 52.37, lon: 4.90 },
                { nom: "Ferney (Voltaire)", lat: 46.26, lon: 6.11 },
                { nom: "Potsdam (Frédéric II)", lat: 52.39, lon: 13.07 },
                { nom: "Vienne", lat: 48.21, lon: 16.37 },
                { nom: "Saint-Pétersbourg (Catherine II)", lat: 59.93, lon: 30.36 },
              ],
              traits: [
                { de: [48.86, 2.35], a: [52.39, 13.07], label: "Voltaire, 1750" },
                { de: [48.86, 2.35], a: [59.93, 30.36], label: "Diderot, 1773" },
              ],
              legende: "Voltaire séjourne à la cour de Frédéric II de 1750 à 1753 ; Diderot rend visite à Catherine II en 1773. Amsterdam imprime de nombreux livres interdits en France." },
          ],
        },
        {
          titre: "Les despotes éclairés : réformer sans partager",
          blocs: [
            { t: "texte", md: "Certains souverains admirent les philosophes et correspondent avec eux. **Frédéric II**, roi de **Prusse**, accueille Voltaire et accorde la tolérance religieuse. **Catherine II**, impératrice de **Russie**, achète la bibliothèque de Diderot et s'inspire de Montesquieu pour rédiger des instructions sur les lois." },
            { t: "definition", terme: "Despotisme éclairé", md: "Façon de gouverner d'un monarque qui s'inspire des idées des Lumières pour **moderniser** son État (écoles, justice, économie) tout en **gardant un pouvoir absolu**." },
            { t: "texte", md: "Ces réformes ont des **limites** : le souverain décide seul, et rien ne garantit les droits des sujets. En Russie, Catherine II renforce même le servage. Les philosophes rêvaient de liberté ; les despotes voulaient surtout un État plus efficace." },
            { t: "verifie", q: "Pourquoi peut-on dire que le despotisme éclairé a des limites ?", choix: ["Parce que les souverains refusent toute réforme", "Parce que les souverains réforment mais gardent tout le pouvoir", "Parce que les philosophes gouvernent à leur place"], bonne: 1, explication: "Les despotes éclairés modernisent leur État, mais ils ne partagent pas le pouvoir et ne garantissent pas les libertés." },
            { t: "frise", titre: "Les grandes œuvres des Lumières", evenements: [
              { date: 1721, label: "*Lettres persanes*", detail: "Montesquieu se moque de la société française à travers le regard de deux Persans." },
              { date: 1748, label: "*De l'esprit des lois*", detail: "Montesquieu théorise la séparation des pouvoirs." },
              { date: 1751, label: "Premier volume de l'*Encyclopédie*", detail: "Dirigée par Diderot et d'Alembert, achevée en 1772." },
              { date: 1759, label: "*Candide*", detail: "Conte de Voltaire contre l'intolérance et la guerre." },
              { date: 1762, label: "*Du contrat social*", detail: "Rousseau ; la même année, exécution de Jean Calas." },
              { date: 1763, label: "*Traité sur la tolérance*", detail: "Voltaire obtient la réhabilitation de Calas en 1765." },
            ] },
          ],
        },
      ],
      bilan: "Par la raison, les philosophes des Lumières remettent en cause l'intolérance et l'absolutisme. Leurs idées, séparation des pouvoirs, tolérance, souveraineté du peuple, franchissent les frontières et la censure : elles prépareront 1789.",
    },
    "4e-histoire-03-revolution-empire": {
      accroche: "Au printemps 1789, une gravure circule : un vieux paysan courbé porte sur son dos un évêque et un noble bien nourris. La légende dit : « À faut espérer q'eu s'jeu la finira ben tôt. » Ce jeu va finir plus vite que prévu. En quelques mois, la France abolit les privilèges et proclame que tous les hommes sont égaux en droits.",
      objectifs: [
        "Raconter les journées révolutionnaires de 1789 et leurs conséquences",
        "Expliquer le passage de la monarchie constitutionnelle à la République",
        "Décrire l'œuvre de Bonaparte, du Consulat à l'Empire",
        "Ordonner les grandes dates de 1789 à 1815",
      ],
      sections: [
        {
          titre: "1789 : la fin de la société d'ordres",
          blocs: [
            { t: "schema", titre: "La société d'ordres en 1789", legende: "Environ 28 millions de Français. Les deux premiers ordres, très minoritaires, ont des privilèges : ils ne paient pas la plupart des impôts.", svg: `<svg viewBox="0 0 400 240"><text class="texte" x="200" y="22" text-anchor="middle">Le roi, au-dessus des trois ordres</text><path class="aplat-fort" d="M200 35 L236 85 L164 85 Z"/><path class="aplat" d="M164 85 L236 85 L272 135 L128 135 Z"/><path class="aplat-papier" d="M128 135 L272 135 L340 225 L60 225 Z"/><path class="trait" d="M200 35 L340 225 L60 225 Z"/><line class="trait-fin" x1="164" y1="85" x2="236" y2="85"/><line class="trait-fin" x1="128" y1="135" x2="272" y2="135"/><text class="texte" x="168" y="68" text-anchor="end">Clergé</text><text class="texte-petit" x="232" y="68">prier, ≈ 0,5 %</text><text class="texte" x="138" y="114" text-anchor="end">Noblesse</text><text class="texte-petit" x="266" y="114">combattre, ≈ 1,5 %</text><text class="texte" x="200" y="172" text-anchor="middle">Tiers état</text><text class="texte-petit" x="200" y="192" text-anchor="middle">travailler, ≈ 98 %</text><text class="texte-petit" x="200" y="210" text-anchor="middle">paysans, artisans, bourgeois</text><path class="trait-fin" d="M68 40 L58 40 L58 135 L68 135"/><text class="texte-main" x="44" y="88" text-anchor="middle" transform="rotate(-90 44 88)">privilégiés</text></svg>` },
            { t: "texte", md: "Le royaume est en crise : les caisses sont vides et le pain est cher. Louis XVI convoque les **états généraux**, qui s'ouvrent à Versailles le **5 mai 1789**. Le tiers état, qui représente presque toute la nation, refuse d'être une simple minorité face aux deux ordres privilégiés. Le **17 juin**, ses députés se proclament **Assemblée nationale** : c'est le peuple, et non plus le roi, qui doit faire la loi." },
            { t: "exemple", titre: "Raconter le 14 juillet 1789", etapes: [
              "Le roi renvoie son ministre Necker, populaire, et rassemble des troupes autour de Paris.",
              "Les Parisiens, inquiets et affamés, cherchent des armes et de la poudre.",
              "Ils prennent la **Bastille**, prison symbole de l'arbitraire royal.",
              "Le roi recule et retire ses troupes : la souveraineté a changé de camp.",
            ] },
            { t: "texte", md: "Dans les campagnes, la peur et la colère gagnent. Dans la nuit du **4 août**, l'Assemblée **abolit les privilèges** : c'est la fin de la société d'ordres. Le **26 août**, elle adopte la **Déclaration des droits de l'homme et du citoyen** (DDHC)." },
            { t: "citation", texte: "Art. 1. Les hommes naissent et demeurent libres et égaux en droits.\nArt. 3. Le principe de toute souveraineté réside essentiellement dans la Nation.", auteur: "Déclaration des droits de l'homme et du citoyen", source: "26 août 1789" },
            { t: "propriete", titre: "Ce que change la DDHC", md: "La **souveraineté** passe du roi à la **nation**. Les hommes sont **égaux en droits** : fin des privilèges. Les libertés (d'opinion, d'expression) sont garanties. La loi est la même pour tous, et les pouvoirs doivent être **séparés** (article 16), comme le voulait Montesquieu." },
          ],
        },
        {
          titre: "De la monarchie constitutionnelle à la République",
          blocs: [
            { t: "texte", md: "La **Constitution de 1791** crée une **monarchie constitutionnelle** : le roi garde le pouvoir exécutif, mais une Assemblée élue vote les lois. Ce compromis échoue vite. En **juin 1791**, Louis XVI tente de fuir ; il est arrêté à **Varennes** et perd la confiance du peuple. En **avril 1792**, la France entre en guerre contre l'Autriche, et le roi est soupçonné de souhaiter la victoire de l'ennemi.\n\nLe **10 août 1792**, les Parisiens prennent le palais des Tuileries : la royauté tombe. Le **22 septembre 1792**, la **République** est proclamée. Jugé pour trahison, Louis XVI est guillotiné le **21 janvier 1793**." },
            { t: "definition", terme: "La Terreur (1793-1794)", md: "Période où le gouvernement révolutionnaire, dominé par **Robespierre** et le **Comité de salut public**, suspend les libertés pour sauver la République menacée par la guerre et les révoltes. Des milliers de « suspects » sont exécutés. Robespierre est renversé et guillotiné en **juillet 1794**. Le **Directoire** gouverne ensuite de 1795 à 1799." },
            { t: "texte", md: "La Révolution ouvre aussi de nouveaux débats. En **1791**, **Olympe de Gouges** rédige une *Déclaration des droits de la femme et de la citoyenne* : les femmes restent pourtant exclues du vote. Le **4 février 1794**, la Convention **abolit l'esclavage** dans les colonies." },
            { t: "verifie", q: "Pourquoi la monarchie constitutionnelle de 1791 échoue-t-elle ?", choix: ["Parce que la Bastille est reprise par le roi", "Parce que la fuite du roi et la guerre ruinent la confiance envers Louis XVI", "Parce que Bonaparte prend le pouvoir"], bonne: 1, explication: "La fuite à Varennes (juin 1791) puis la guerre (avril 1792) font de Louis XVI un suspect. Le 10 août 1792, la royauté est renversée." },
          ],
        },
        {
          titre: "Bonaparte : du Consulat à l'Empire",
          blocs: [
            { t: "texte", md: "Le Directoire est fragile. Un jeune général couvert de gloire, **Napoléon Bonaparte**, en profite. Le **18 brumaire an VIII**, soit le **9 novembre 1799**, il fait un **coup d'État** et installe le **Consulat**. Premier consul, il concentre l'essentiel du pouvoir.\n\nIl réorganise la France : les **préfets** dans chaque département (1800), la **Banque de France** (1800), le **Concordat** avec le pape (1801), les **lycées** et la **Légion d'honneur** (1802). Le **Code civil** de **1804** fixe pour longtemps l'égalité devant la loi, la liberté individuelle et le droit de propriété." },
            { t: "attention", md: "Bonaparte conserve des acquis de la Révolution (égalité civile, fin des privilèges) mais en renie d'autres : il supprime les libertés politiques, censure la presse et **rétablit l'esclavage** dans les colonies en **1802**." },
            { t: "texte", md: "En **1804**, il devient empereur sous le nom de **Napoléon Ier** : c'est le **Premier Empire**. Par ses victoires (Austerlitz, 1805), il domine l'Europe et y diffuse le Code civil et la fin des privilèges. Mais la guerre d'Espagne, puis la désastreuse **campagne de Russie** (1812), l'affaiblissent. Il abdique en 1814, revient pour les Cent-Jours, puis est définitivement vaincu à **Waterloo**, le **18 juin 1815**." },
            { t: "carte", fond: "monde", titre: "L'Europe napoléonienne", cadre: [-12, 35, 42, 60],
              reperes: [
                { nom: "Paris", lat: 48.86, lon: 2.35 },
                { nom: "Austerlitz (1805)", lat: 49.15, lon: 16.88 },
                { nom: "Iéna (1806)", lat: 50.93, lon: 11.59 },
                { nom: "Madrid (1808)", lat: 40.42, lon: -3.70 },
                { nom: "Moscou (1812)", lat: 55.76, lon: 37.62 },
                { nom: "Leipzig (1813)", lat: 51.34, lon: 12.37 },
                { nom: "Waterloo (1815)", lat: 50.71, lon: 4.40 },
              ],
              traits: [
                { de: [48.86, 2.35], a: [55.76, 37.62], label: "campagne de Russie, 1812" },
              ],
              legende: "Austerlitz et Iéna sont des victoires ; l'Espagne se soulève dès 1808 ; Moscou, Leipzig et Waterloo marquent la chute de l'Empire." },
          ],
        },
        {
          titre: "Vingt-six ans qui ont changé la France",
          blocs: [
            { t: "frise", titre: "De la Révolution à la chute de l'Empire", evenements: [
              { date: 1789, label: "Révolution", detail: "États généraux (5 mai), Bastille (14 juillet), abolition des privilèges (4 août), DDHC (26 août)." },
              { date: 1791, label: "Monarchie constitutionnelle", detail: "Fuite à Varennes en juin ; Constitution en septembre." },
              { date: 1792, label: "Première République", detail: "Chute de la royauté le 10 août ; République le 22 septembre." },
              { date: 1793, label: "Exécution de Louis XVI", detail: "Le 21 janvier ; début de la Terreur à l'automne." },
              { date: 1799, label: "Coup d'État de Bonaparte", detail: "18 brumaire an VIII (9 novembre) : le Consulat." },
              { date: 1804, label: "Empire et Code civil", detail: "Napoléon Ier est sacré le 2 décembre." },
              { date: 1815, label: "Waterloo", detail: "Défaite définitive le 18 juin." },
            ] },
            { t: "verifie", q: "Quel principe de la DDHC rompt le plus nettement avec la monarchie absolue ?", choix: ["Le roi tient son pouvoir de Dieu", "La souveraineté réside dans la nation", "Le clergé est le premier ordre"], bonne: 1, explication: "Dans la monarchie absolue, la souveraineté appartient au roi de droit divin. L'article 3 de la DDHC la donne à la nation : c'est une rupture complète." },
          ],
        },
      ],
      bilan: "De 1789 à 1815, la France passe de la monarchie absolue à la République puis à l'Empire. Les régimes changent, mais l'essentiel demeure : la fin des privilèges, l'égalité devant la loi et l'idée que le pouvoir vient de la nation.",
    },
    "4e-histoire-04-revolution-industrielle": {
      accroche: "Manchester, 1840. Au-dessus des toits, des dizaines de cheminées crachent une fumée noire jour et nuit. Dans les filatures, des milliers de métiers tournent au même rythme, entraînés par une seule machine à vapeur. Parmi les ouvriers qui surveillent les fils, beaucoup ont moins de douze ans. Bienvenue dans le monde de l'industrie.",
      objectifs: [
        "Identifier les innovations techniques et les sources d'énergie de l'industrialisation",
        "Décrire la bourgeoisie, le monde ouvrier et les conditions de travail",
        "Expliquer l'exode rural et la croissance des villes",
        "Présenter les réponses au monde industriel : syndicats, socialisme, lois sociales",
      ],
      sections: [
        {
          titre: "Charbon, vapeur et chemin de fer",
          blocs: [
            { t: "texte", md: "Pendant des siècles, on a produit avec la force des bras, des animaux, de l'eau ou du vent. À la fin du XVIIIe siècle, en **Angleterre**, tout change : on brûle du **charbon** pour faire de la vapeur, et cette vapeur fait tourner des machines.\n\nL'ingénieur écossais **James Watt** perfectionne la **machine à vapeur** en **1769**. Elle actionne bientôt les métiers à tisser, les pompes des mines, puis les locomotives. La ligne **Liverpool-Manchester**, ouverte en **1830**, est la première grande ligne de chemin de fer pour voyageurs. En France, la ligne Paris-Saint-Germain ouvre en 1837." },
            { t: "definition", terme: "Révolution industrielle", md: "Passage d'une économie surtout agricole et artisanale à une économie dominée par l'**industrie** et les **machines**. Elle commence en Angleterre à la fin du XVIIIe siècle, puis gagne l'Europe et les États-Unis au XIXe siècle." },
            { t: "exemple", titre: "Pourquoi l'industrialisation naît-elle en Angleterre ?", etapes: [
              "Le pays possède beaucoup de **charbon** et de **fer**.",
              "Des **capitaux** sont disponibles, issus notamment du commerce colonial.",
              "Une agriculture modernisée nourrit plus de monde avec moins de bras : elle libère de la **main-d'œuvre**.",
              "Des **inventeurs** comme Watt trouvent des entrepreneurs pour financer leurs machines.",
              "Résultat : les usines de Manchester produisent des tissus de coton pour le monde entier.",
            ] },
            { t: "attention", md: "La révolution industrielle ne commence **pas** en France. Elle part d'Angleterre, puis touche la Belgique, la France et l'Allemagne au XIXe siècle. À la fin du siècle, une seconde industrialisation repose sur l'**électricité**, le **pétrole** et la **chimie**." },
          ],
        },
        {
          titre: "L'usine, un nouveau monde du travail",
          blocs: [
            { t: "schema", titre: "L'organisation d'une usine textile au XIXe siècle", legende: "Une seule machine à vapeur entraîne tous les métiers grâce à l'arbre de transmission et aux courroies. Le rythme de la machine s'impose à tous.", svg: `<svg viewBox="0 0 400 260"><rect class="aplat" x="10" y="100" width="100" height="80" rx="6"/><rect class="trait" x="10" y="100" width="100" height="80" rx="6"/><text class="texte" x="60" y="134" text-anchor="middle">Machine</text><text class="texte" x="60" y="152" text-anchor="middle">à vapeur</text><path class="aplat-fort" d="M25 222 L60 200 L95 222 Z"/><text class="texte-petit" x="60" y="240" text-anchor="middle">charbon</text><path class="trait-fin" d="M60 198 L60 186" marker-end="url(#fl)"/><path class="trait" d="M90 100 L90 40 L390 40"/><text class="texte-petit" x="260" y="28" text-anchor="middle">arbre de transmission</text><circle class="aplat-papier" cx="170" cy="40" r="7"/><circle class="trait" cx="170" cy="40" r="7"/><circle class="aplat-papier" cx="260" cy="40" r="7"/><circle class="trait" cx="260" cy="40" r="7"/><circle class="aplat-papier" cx="350" cy="40" r="7"/><circle class="trait" cx="350" cy="40" r="7"/><line class="trait-fin" x1="170" y1="47" x2="170" y2="100"/><line class="trait-fin" x1="260" y1="47" x2="260" y2="100"/><line class="trait-fin" x1="350" y1="47" x2="350" y2="100"/><text class="texte-petit" x="214" y="76" text-anchor="middle">courroies</text><rect class="aplat-papier" x="135" y="100" width="70" height="44" rx="4"/><rect class="trait" x="135" y="100" width="70" height="44" rx="4"/><rect class="aplat-papier" x="225" y="100" width="70" height="44" rx="4"/><rect class="trait" x="225" y="100" width="70" height="44" rx="4"/><rect class="aplat-papier" x="315" y="100" width="70" height="44" rx="4"/><rect class="trait" x="315" y="100" width="70" height="44" rx="4"/><text class="texte-petit" x="170" y="126" text-anchor="middle">métier</text><text class="texte-petit" x="260" y="126" text-anchor="middle">métier</text><text class="texte-petit" x="350" y="126" text-anchor="middle">métier</text><text class="texte-petit" x="260" y="164" text-anchor="middle">ouvriers, ouvrières, enfants : 12 à 15 h par jour</text><rect class="aplat" x="135" y="178" width="250" height="74" rx="6"/><rect class="trait-fin" x="135" y="178" width="250" height="74" rx="6"/><text class="texte-petit" x="147" y="198">Patron : possède l'usine et les machines</text><text class="texte-petit" x="147" y="220">Contremaître : surveille, impose le rythme</text><text class="texte-petit" x="147" y="242">Ouvriers : vendent leur travail</text></svg>` },
            { t: "texte", md: "Le travail se concentre dans de grandes **usines** : filatures, mines, hauts-fourneaux. Deux groupes sociaux se font face. La **bourgeoisie** (patrons, banquiers, ingénieurs) possède les usines et les capitaux. Les **ouvriers**, ou **prolétaires**, ne possèdent que leur force de travail, qu'ils vendent contre un salaire.\n\nLes conditions sont très dures : journées de **12 à 15 heures**, salaires faibles, accidents fréquents, aucune protection en cas de maladie ou de vieillesse. Les **enfants** travaillent dès 6 ou 7 ans, car ils sont peu payés et assez petits pour passer sous les machines." },
            { t: "citation", texte: "Des hommes poussaient, une armée noire, vengeresse, qui germait lentement dans les sillons, grandissant pour les récoltes du siècle futur.", auteur: "Émile Zola", source: "Germinal, 1885" },
            { t: "verifie", q: "Quelle source d'énergie est au cœur de la première industrialisation ?", choix: ["L'électricité", "Le pétrole", "Le charbon"], bonne: 2, explication: "Le charbon fait tourner les machines à vapeur. L'électricité et le pétrole n'arrivent qu'avec la seconde industrialisation, à la fin du XIXe siècle." },
          ],
        },
        {
          titre: "Des villes qui explosent",
          blocs: [
            { t: "texte", md: "Attirés par le travail et les salaires, des milliers de paysans quittent les campagnes : c'est l'**exode rural**. Les villes industrielles grossissent à toute vitesse. Les ouvriers s'entassent dans des quartiers insalubres, sans eau courante ni égouts, où le choléra fait des ravages.\n\nSous le Second Empire, le préfet **Haussmann** transforme Paris : larges boulevards, égouts, parcs, immeubles en pierre de taille. La ville devient plus saine, mais les ouvriers, chassés par la hausse des loyers, partent vers les faubourgs." },
            { t: "definition", terme: "Exode rural", md: "Départ massif des habitants des campagnes vers les villes. Il nourrit l'**urbanisation**, c'est-à-dire la croissance de la population urbaine." },
            { t: "graphique", type: "courbe", titre: "La population de Paris au XIXe siècle", unite: "millions d'habitants", donnees: [
              { label: "1801", valeur: 0.55 }, { label: "1831", valeur: 0.79 }, { label: "1851", valeur: 1.05 },
              { label: "1861", valeur: 1.7 }, { label: "1881", valeur: 2.27 }, { label: "1901", valeur: 2.71 },
            ] },
          ],
        },
        {
          titre: "Les ouvriers s'organisent",
          blocs: [
            { t: "texte", md: "Face à la misère, les ouvriers réagissent. Ils s'entraident, font **grève** (droit reconnu en France en **1864**), créent des **syndicats**, légalisés par la loi **Waldeck-Rousseau** de **1884**. Les États votent aussi les premières **lois sociales** : en France, la loi de **1841** interdit le travail des enfants de moins de 8 ans dans les manufactures." },
            { t: "propriete", titre: "Le socialisme", md: "Doctrine qui dénonce l'exploitation des ouvriers et veut une société plus égalitaire, où les **moyens de production** (usines, machines, terres) appartiendraient à la collectivité. En **1848**, **Karl Marx** et **Friedrich Engels** publient le *Manifeste du parti communiste*, qui appelle à la révolution des prolétaires." },
            { t: "citation", texte: "Prolétaires de tous les pays, unissez-vous !", auteur: "Karl Marx et Friedrich Engels", source: "Manifeste du parti communiste, 1848" },
            { t: "frise", titre: "Les étapes de l'industrialisation", evenements: [
              { date: 1769, label: "Machine à vapeur de Watt", detail: "James Watt dépose son brevet." },
              { date: 1830, label: "Liverpool-Manchester", detail: "Première grande ligne de chemin de fer pour voyageurs." },
              { date: 1841, label: "Loi sur le travail des enfants", detail: "Interdit avant 8 ans dans les manufactures." },
              { date: 1848, label: "*Manifeste du parti communiste*", detail: "Marx et Engels." },
              { date: 1853, label: "Haussmann, préfet de la Seine", detail: "Début des grands travaux de Paris." },
              { date: 1864, label: "Droit de grève en France", detail: "La grève n'est plus un délit." },
              { date: 1884, label: "Loi Waldeck-Rousseau", detail: "Les syndicats deviennent légaux." },
              { date: 1885, label: "*Germinal*", detail: "Zola raconte une grève de mineurs du Nord." },
            ] },
            { t: "verifie", q: "En quelle année les syndicats sont-ils légalisés en France ?", choix: ["1841", "1864", "1884"], bonne: 2, explication: "La loi Waldeck-Rousseau de 1884 autorise les syndicats. En 1864, c'est le droit de grève qui est reconnu ; 1841 est la loi sur le travail des enfants." },
          ],
        },
      ],
      bilan: "Le charbon et la vapeur font naître l'usine, la ville industrielle et la classe ouvrière. Face à des conditions de travail très dures, les ouvriers s'organisent et obtiennent peu à peu syndicats et lois sociales.",
    },
    "4e-histoire-05-conquetes-coloniales": {
      accroche: "Berlin, novembre 1884. Autour d'une grande table, des diplomates européens se penchent sur une carte de l'Afrique. Ils discutent de fleuves, de ports, de « zones d'influence ». Pas un seul Africain n'est dans la salle. En une génération, presque tout le continent passe sous domination européenne.",
      objectifs: [
        "Situer les grands empires coloniaux et dater les conquêtes",
        "Expliquer les motivations des Européens et le discours de la « mission civilisatrice »",
        "Décrire une société coloniale, l'exploitation et les résistances",
        "Connaître les étapes de l'abolition de l'esclavage",
      ],
      sections: [
        {
          titre: "Le partage du monde",
          blocs: [
            { t: "texte", md: "Au XIXe siècle, les puissances industrielles d'Europe conquièrent de vastes territoires en **Afrique** et en **Asie**. Le **Royaume-Uni** bâtit le plus grand empire du monde : l'Inde, le Canada, l'Australie, une grande partie de l'Afrique. Vers 1914, il rassemble près d'un quart de l'humanité. La **France** possède le deuxième empire.\n\nLa conquête française commence en **1830** avec la **prise d'Alger**. Elle se poursuit en Afrique de l'Ouest, en Indochine (à partir de 1858), en Tunisie (1881), à Madagascar (1895)." },
            { t: "definition", terme: "Colonie", md: "Territoire conquis, dominé et exploité par un État étranger, appelé **métropole**. Les habitants n'y ont pas les mêmes droits que les colons venus de la métropole." },
            { t: "carte", fond: "monde", titre: "L'empire colonial français vers 1914", cadre: [-20, -30, 112, 50],
              zones: ["DZ", "TN", "MA", "MR", "SN", "ML", "GN", "CI", "BF", "NE", "BJ", "TD", "CF", "CG", "GA", "DJ", "MG", "VN", "LA", "KH"],
              reperes: [
                { nom: "Alger", lat: 36.75, lon: 3.06 },
                { nom: "Dakar", lat: 14.69, lon: -17.44 },
                { nom: "Tananarive", lat: -18.88, lon: 47.51 },
                { nom: "Hanoï", lat: 21.03, lon: 105.85 },
                { nom: "Saïgon", lat: 10.82, lon: 106.63 },
              ],
              legende: "Les territoires colorés sont ceux que la France domine vers 1914, dessinés avec les frontières des États actuels, qui n'existaient pas encore. L'empire britannique, plus vaste, n'est pas représenté ici." },
            { t: "texte", md: "En **1884-1885**, la **conférence de Berlin** fixe les règles du partage de l'Afrique : une puissance qui occupe réellement une côte peut en revendiquer l'arrière-pays. ==Aucun représentant africain n'y participe.==" },
          ],
        },
        {
          titre: "Pourquoi coloniser ?",
          blocs: [
            { t: "liste", titre: "Les motivations des Européens", items: [
              "**Économiques** : trouver des matières premières (coton, caoutchouc, minerais) et des débouchés pour vendre les produits de l'industrie.",
              "**Politiques** : accroître la puissance et le prestige de la nation, contrôler des ports et des routes maritimes.",
              "**Religieuses** : les missionnaires veulent convertir les populations au christianisme.",
              "**Idéologiques** : la « **mission civilisatrice** », qui prétend apporter le progrès à des peuples jugés inférieurs.",
            ] },
            { t: "citation", texte: "Il y a pour les races supérieures un droit, parce qu'il y a un devoir pour elles. Elles ont le devoir de civiliser les races inférieures.", auteur: "Jules Ferry", source: "discours à la Chambre des députés, 28 juillet 1885" },
            { t: "citation", texte: "Races supérieures ! Races inférieures ! C'est bientôt dit. Pour ma part, j'en rabats singulièrement.", auteur: "Georges Clemenceau", source: "réponse à Jules Ferry, 30 juillet 1885" },
            { t: "exemple", titre: "Analyser le débat Ferry-Clemenceau", etapes: [
              "**Nature** : deux discours prononcés devant les députés, en juillet 1885.",
              "**Ferry** justifie la colonisation par un prétendu devoir de « civiliser », mais aussi par des intérêts économiques (débouchés) et politiques (puissance).",
              "**Clemenceau** refuse l'idée de races inférieures et rappelle les violences de la conquête.",
              "**Bilan** : le discours de la mission civilisatrice sert à justifier la domination ; il est contesté dès l'époque.",
            ] },
            { t: "verifie", q: "Que reproche Clemenceau à Jules Ferry en 1885 ?", choix: ["De ne pas conquérir assez vite", "De diviser l'humanité en races supérieures et inférieures", "De dépenser trop pour l'armée de terre"], bonne: 1, explication: "Clemenceau conteste l'idée même de « races inférieures » sur laquelle Ferry fonde le devoir de civiliser." },
          ],
        },
        {
          titre: "Vivre dans une société coloniale",
          blocs: [
            { t: "texte", md: "Dans les colonies, une petite minorité de colons domine une immense majorité de colonisés. En Algérie vers 1911, on compte environ 750 000 Européens pour près de 5 millions d'Algériens. Les meilleures terres sont confisquées au profit des colons. Les colonisés paient des impôts, subissent le **travail forcé** sur les routes ou les chemins de fer, et produisent pour l'exportation (arachide au Sénégal, caoutchouc en Afrique équatoriale)." },
            { t: "definition", terme: "Code de l'indigénat (1881)", md: "Ensemble de règles qui s'applique aux colonisés, appelés **indigènes**, d'abord en Algérie puis dans d'autres colonies. Il permet de les punir sans jugement (amendes, prison) pour des actes qui ne sont pas des délits pour les citoyens français." },
            { t: "tableau", titre: "Colons et colonisés : des droits inégaux", entetes: ["Domaine", "Colon européen", "Colonisé (« indigène »)"], lignes: [
              ["Statut", "Citoyen", "Sujet"],
              ["Vote", "Oui (pour les hommes)", "Non, ou très limité"],
              ["Justice", "Tribunaux ordinaires", "Peines sans jugement (indigénat)"],
              ["Travail", "Libre", "Travail forcé possible"],
            ] },
            { t: "attention", md: "Ne confonds pas : dans une colonie, colons et colonisés **n'ont pas les mêmes droits**. Les écoles, les hôpitaux ou les routes construits servent d'abord les intérêts de la métropole et ne profitent qu'à une minorité de colonisés." },
          ],
        },
        {
          titre: "Résister à la conquête",
          blocs: [
            { t: "texte", md: "Les peuples colonisés ne se laissent pas faire. En **Algérie**, l'émir **Abd el-Kader** mène la résistance pendant quinze ans, jusqu'à sa reddition en **1847**. En **Afrique de l'Ouest**, **Samory Touré** combat les Français jusqu'à sa capture en 1898. En **Inde**, la **révolte des cipayes** (soldats indiens de l'armée britannique) éclate en **1857**. Toutes ces résistances sont écrasées par des armées mieux équipées." },
            { t: "verifie", q: "Qui est Abd el-Kader ?", choix: ["Un explorateur français", "Un émir qui résiste à la conquête de l'Algérie", "Un roi africain présent à la conférence de Berlin"], bonne: 1, explication: "Abd el-Kader dirige la résistance algérienne contre l'armée française de 1832 à 1847." },
          ],
        },
        {
          titre: "L'abolition de l'esclavage",
          blocs: [
            { t: "texte", md: "Au même moment, l'esclavage recule. Le Royaume-Uni l'abolit dans ses colonies en 1833. En France, après la révolution de février 1848, **Victor Schœlcher** fait adopter le décret du **27 avril 1848** : l'esclavage est ==définitivement aboli== dans les colonies françaises, et environ 250 000 esclaves sont libérés." },
            { t: "frise", titre: "L'esclavage et la colonisation française", evenements: [
              { date: 1794, label: "Première abolition", detail: "Votée par la Convention le 4 février." },
              { date: 1802, label: "Rétablissement", detail: "Bonaparte rétablit l'esclavage." },
              { date: 1830, label: "Prise d'Alger", detail: "Début de la conquête de l'Algérie." },
              { date: 1847, label: "Reddition d'Abd el-Kader", detail: "Fin de sa résistance en Algérie." },
              { date: 1848, label: "Abolition définitive", detail: "Décret du 27 avril, porté par Victor Schœlcher." },
              { date: 1857, label: "Révolte des cipayes", detail: "Soulèvement en Inde britannique." },
              { date: 1881, label: "Code de l'indigénat", detail: "Appliqué d'abord en Algérie." },
              { date: 1884, label: "Conférence de Berlin", detail: "Jusqu'en février 1885 : règles du partage de l'Afrique." },
              { date: 1885, label: "Discours de Jules Ferry", detail: "La « mission civilisatrice » devant les députés." },
              { date: 1898, label: "Capture de Samory Touré", detail: "Fin de la résistance en Afrique de l'Ouest." },
            ] },
          ],
        },
      ],
      bilan: "Au XIXe siècle, l'Europe industrielle se partage le monde au nom de ses intérêts et d'une prétendue mission civilisatrice. Les sociétés coloniales reposent sur l'inégalité des droits, malgré les résistances et l'abolition de l'esclavage en 1848.",
    },
    "4e-histoire-06-voter-1815-1870": {
      accroche: "Avril 1848, dans un village du Limousin. Pour la première fois de sa vie, un paysan de cinquante ans marche jusqu'au chef-lieu de canton pour voter. Six semaines plus tôt, il n'en avait pas le droit : il ne payait pas assez d'impôts. Comment est-on passé, en France, du vote de quelques milliers de riches à celui de tous les hommes ?",
      objectifs: [
        "Distinguer suffrage censitaire et suffrage universel",
        "Raconter les révolutions de 1830 et de 1848",
        "Expliquer le coup d'État de 1851 et l'usage du plébiscite sous le Second Empire",
        "Ordonner les régimes politiques de 1815 à 1870",
      ],
      sections: [
        {
          titre: "La Restauration : un vote réservé aux plus riches",
          blocs: [
            { t: "texte", md: "Après la chute de Napoléon, les frères de Louis XVI reviennent sur le trône : c'est la **Restauration** (1814-1830). **Louis XVIII** accorde en **1814** une **Charte**, un texte qui organise les pouvoirs. Le roi garde l'essentiel du pouvoir, mais une Chambre des députés vote les lois et les impôts.\n\nQui élit ces députés ? Seuls les hommes de plus de 30 ans qui paient au moins **300 francs** d'impôts directs, soit environ **90 000 électeurs** pour près de 30 millions d'habitants." },
            { t: "definition", terme: "Suffrage censitaire", md: "Système de vote réservé aux citoyens qui paient un impôt minimum, appelé le **cens**. Seuls les plus riches votent : grands propriétaires, riches bourgeois." },
            { t: "definition", terme: "Suffrage universel", md: "Système où tous les citoyens votent, sans condition de fortune. En France, en 1848, il est dit « universel » mais il est **masculin** : seuls les hommes de 21 ans et plus votent." },
          ],
        },
        {
          titre: "1830 : les Trois Glorieuses",
          blocs: [
            { t: "texte", md: "**Charles X**, roi depuis 1824, veut revenir à une monarchie plus autoritaire. En juillet 1830, il signe des **ordonnances** qui suspendent la liberté de la presse, dissolvent la Chambre et réduisent encore le nombre d'électeurs.\n\nLes Parisiens dressent des barricades pendant trois jours, les **27, 28 et 29 juillet 1830** : ce sont les **Trois Glorieuses**. Charles X s'enfuit. Les libéraux placent sur le trône **Louis-Philippe**, « roi des Français » : c'est la **monarchie de Juillet**." },
            { t: "attention", md: "La révolution de 1830 ne donne **pas** le droit de vote au peuple. Le cens baisse seulement à **200 francs** : le nombre d'électeurs monte à environ 240 000 en 1846. Un ouvrier ou un paysan ne vote toujours pas." },
            { t: "verifie", q: "Quelle mesure de Charles X provoque la révolution de juillet 1830 ?", choix: ["Des ordonnances qui suppriment la liberté de la presse", "L'instauration du suffrage universel", "L'abolition de l'esclavage"], bonne: 0, explication: "Les ordonnances de juillet 1830 suspendent la liberté de la presse et réduisent le corps électoral : Paris se soulève." },
          ],
        },
        {
          titre: "1848 : le suffrage universel masculin",
          blocs: [
            { t: "texte", md: "Sous Louis-Philippe, les républicains réclament un élargissement du vote. Le gouvernement refuse. En **février 1848**, une nouvelle révolution éclate à Paris : Louis-Philippe abdique et s'enfuit. La **IIe République** est proclamée.\n\nLe **5 mars 1848**, le gouvernement provisoire instaure le **suffrage universel masculin** : le corps électoral passe d'environ 240 000 à plus de **9 millions** d'hommes. En décembre 1848, **Louis-Napoléon Bonaparte**, neveu de Napoléon Ier, est élu président de la République." },
            { t: "graphique", type: "barres", titre: "Le nombre d'électeurs en France", unite: "milliers d'électeurs", donnees: [
              { label: "Restauration", valeur: 90 }, { label: "1846", valeur: 240 }, { label: "Avril 1848", valeur: 9000 },
            ] },
            { t: "exemple", titre: "Comparer avant et après 1848", md: "Sous Louis-Philippe, un ouvrier ou un paysan ne vote pas : il ne paie pas 200 francs d'impôts directs. Après le 5 mars 1848, tout homme de 21 ans vote : le corps électoral est multiplié par plus de 35. C'est une rupture majeure. Mais les **femmes** restent exclues : elles n'obtiendront le droit de vote qu'en **1944**." },
            { t: "verifie", q: "Pourquoi dit-on que le suffrage de 1848 est « universel » alors que les femmes ne votent pas ?", choix: ["Parce qu'il ne dépend plus de la fortune", "Parce que les femmes votent aux élections locales", "Parce qu'il est valable dans toute l'Europe"], bonne: 0, explication: "On parle de suffrage universel parce que le cens disparaît : tous les hommes votent, riches ou pauvres. Mais il reste masculin." },
          ],
        },
        {
          titre: "1851 : le coup d'État et le Second Empire",
          blocs: [
            { t: "texte", md: "La Constitution interdit au président de se représenter. Le **2 décembre 1851**, Louis-Napoléon Bonaparte fait un **coup d'État** : il dissout l'Assemblée et fait arrêter les opposants. Victor Hugo part en exil. Pour se donner une légitimité, il fait approuver son coup de force par un **plébiscite** : plus de 7 millions de « oui ».\n\nUn an plus tard, le **2 décembre 1852**, il devient empereur sous le nom de **Napoléon III** : c'est le **Second Empire**." },
            { t: "definition", terme: "Plébiscite", md: "Vote par lequel le peuple répond **oui ou non** à une question posée par le dirigeant. Napoléon III s'en sert pour faire approuver sa politique et se présenter comme l'élu du peuple." },
            { t: "attention", md: "Le Second Empire **ne supprime pas** le suffrage universel masculin, mais il l'**encadre** : les préfets soutiennent des « candidats officiels », la presse est surveillée, les opposants sont gênés. Le vote existe, mais il n'est pas vraiment libre." },
          ],
        },
        {
          titre: "Cinquante-cinq ans de régimes successifs",
          blocs: [
            { t: "tableau", titre: "Les régimes de 1814 à 1870", entetes: ["Régime", "Dates", "Dirigeant", "Vote"], lignes: [
              ["Restauration", "1814-1830", "Louis XVIII puis Charles X", "Censitaire (300 F)"],
              ["Monarchie de Juillet", "1830-1848", "Louis-Philippe", "Censitaire (200 F)"],
              ["IIe République", "1848-1852", "Louis-Napoléon Bonaparte, président", "Universel masculin"],
              ["Second Empire", "1852-1870", "Napoléon III", "Universel masculin encadré"],
            ] },
            { t: "frise", titre: "Voter en France de 1814 à 1870", evenements: [
              { date: 1814, label: "Charte de Louis XVIII", detail: "Début de la Restauration et du suffrage censitaire." },
              { date: 1830, label: "Trois Glorieuses", detail: "27-29 juillet : Louis-Philippe remplace Charles X." },
              { date: 1848, label: "Révolution de février", detail: "IIe République ; suffrage universel masculin le 5 mars." },
              { date: 1851, label: "Coup d'État", detail: "Le 2 décembre, approuvé par plébiscite." },
              { date: 1852, label: "Second Empire", detail: "Louis-Napoléon devient Napoléon III." },
              { date: 1870, label: "Chute de l'Empire", detail: "Défaite de Sedan ; République proclamée le 4 septembre." },
            ] },
          ],
        },
      ],
      bilan: "De 1815 à 1870, le droit de vote s'élargit au rythme des révolutions : de 90 000 électeurs censitaires à 9 millions d'hommes en 1848. Mais un vote universel n'est pas toujours libre, et les femmes en restent exclues.",
    },
    "4e-histoire-07-troisieme-republique": {
      accroche: "Paris, 4 septembre 1870. L'empereur Napoléon III vient d'être fait prisonnier par les Prussiens à Sedan. Devant l'Hôtel de Ville, la foule acclame Léon Gambetta qui proclame la République. Personne ne sait alors qu'elle durera soixante-dix ans et qu'elle façonnera la France d'aujourd'hui : son école, ses libertés, ses symboles.",
      objectifs: [
        "Raconter la naissance difficile de la République (1870-1875)",
        "Présenter les grandes lois républicaines sur l'école et les libertés",
        "Expliquer l'affaire Dreyfus et la séparation des Églises et de l'État",
        "Identifier les symboles de la République",
      ],
      sections: [
        {
          titre: "Une naissance dans la guerre et la guerre civile",
          blocs: [
            { t: "texte", md: "La République naît le **4 septembre 1870**, dans la défaite face à la Prusse. En 1871, par le traité de Francfort, la France perd l'Alsace et une partie de la Lorraine. Les députés élus en février 1871 sont en majorité **monarchistes** et s'installent à Versailles.\n\nÀ Paris, le peuple, qui a subi le siège, refuse de rendre les armes. Le **18 mars 1871**, la ville se soulève : c'est la **Commune de Paris**. Elle se donne un gouvernement révolutionnaire et prend des mesures sociales. Le gouvernement d'Adolphe Thiers l'écrase pendant la **Semaine sanglante** (21-28 mai 1871) : plusieurs milliers de morts et des milliers de déportés." },
            { t: "texte", md: "Les monarchistes, divisés, ne parviennent pas à rétablir un roi. En **1875**, des **lois constitutionnelles** organisent enfin le régime. La République n'est votée qu'à une voix de majorité, grâce à l'amendement Wallon. En 1879, les républicains sont majoritaires dans les deux chambres : la République est installée." },
            { t: "schema", titre: "Les institutions de la IIIe République (lois de 1875)", legende: "Les députés et les sénateurs votent les lois. Réunis ensemble, ils élisent le président de la République pour 7 ans.", svg: `<svg viewBox="0 0 400 250"><rect class="aplat" x="90" y="10" width="220" height="48" rx="8"/><rect class="trait" x="90" y="10" width="220" height="48" rx="8"/><text class="texte" x="200" y="31" text-anchor="middle">Président de la République</text><text class="texte-petit" x="200" y="48" text-anchor="middle">élu pour 7 ans</text><rect class="aplat" x="20" y="104" width="160" height="50" rx="8"/><rect class="trait" x="20" y="104" width="160" height="50" rx="8"/><text class="texte" x="100" y="125" text-anchor="middle">Chambre des députés</text><text class="texte-petit" x="100" y="142" text-anchor="middle">élue pour 4 ans</text><rect class="aplat" x="220" y="104" width="160" height="50" rx="8"/><rect class="trait" x="220" y="104" width="160" height="50" rx="8"/><text class="texte" x="300" y="125" text-anchor="middle">Sénat</text><text class="texte-petit" x="300" y="142" text-anchor="middle">élu pour 9 ans</text><path class="trait-fin" d="M110 104 L160 62" marker-end="url(#fl)"/><path class="trait-fin" d="M290 104 L240 62" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="88" text-anchor="middle">élisent ensemble</text><rect class="aplat-papier" x="20" y="196" width="160" height="46" rx="8"/><rect class="trait-fin" x="20" y="196" width="160" height="46" rx="8"/><text class="texte-petit" x="100" y="214" text-anchor="middle">Citoyens : hommes de 21 ans</text><text class="texte-petit" x="100" y="232" text-anchor="middle">suffrage universel direct</text><rect class="aplat-papier" x="220" y="196" width="160" height="46" rx="8"/><rect class="trait-fin" x="220" y="196" width="160" height="46" rx="8"/><text class="texte-petit" x="300" y="214" text-anchor="middle">Élus locaux</text><text class="texte-petit" x="300" y="232" text-anchor="middle">suffrage indirect</text><path class="trait-fin" d="M100 196 L100 158" marker-end="url(#fl)"/><path class="pointille" d="M300 196 L300 158" marker-end="url(#fl)"/></svg>` },
            { t: "verifie", q: "Qu'est-ce que la Commune de Paris (1871) ?", choix: ["Le nom de la mairie de Paris depuis 1789", "Un soulèvement révolutionnaire des Parisiens, écrasé en mai 1871", "La première assemblée de la IIIe République"], bonne: 1, explication: "De mars à mai 1871, les Parisiens insurgés gouvernent la ville. Le gouvernement de Versailles reprend Paris pendant la Semaine sanglante." },
          ],
        },
        {
          titre: "L'école et les libertés pour enraciner la République",
          blocs: [
            { t: "texte", md: "Pour les républicains, une République ne tient que si les citoyens sont instruits et libres. Ministre de l'Instruction publique, **Jules Ferry** fait voter des lois décisives : l'école primaire devient **gratuite** (1881), puis **obligatoire** pour les enfants de 6 à 13 ans et **laïque** (1882). Les grandes libertés suivent." },
            { t: "tableau", titre: "Les grandes lois républicaines", entetes: ["Date", "Loi", "Ce qu'elle change"], lignes: [
              ["1881", "Liberté de la presse", "Un journal paraît sans autorisation préalable"],
              ["1881", "Loi Ferry", "École primaire publique **gratuite**"],
              ["1882", "Loi Ferry", "École **obligatoire** de 6 à 13 ans et **laïque**"],
              ["1884", "Loi Waldeck-Rousseau", "Liberté de créer des **syndicats**"],
              ["1901", "Loi sur les associations", "Liberté de créer une **association**"],
              ["1905", "Séparation des Églises et de l'État", "La République ne reconnaît ni ne salarie aucun culte"],
            ] },
            { t: "exemple", titre: "Comment l'école de Ferry forme des républicains", md: "Les instituteurs, surnommés les « **hussards noirs** » de la République, enseignent à tous les enfants la lecture, le calcul, l'histoire et la géographie de la France, la morale et l'instruction civique, en français et non en patois. Gratuite et laïque, l'école ne dépend plus de l'Église : elle apprend aux élèves à devenir des citoyens." },
          ],
        },
        {
          titre: "L'affaire Dreyfus : la République à l'épreuve",
          blocs: [
            { t: "texte", md: "En **1894**, le capitaine **Alfred Dreyfus**, officier juif, est condamné pour avoir livré des secrets militaires à l'Allemagne. Il est dégradé et déporté au bagne. Les preuves sont fausses : le vrai traître est le commandant Esterhazy, que l'armée fait pourtant acquitter.\n\nLe **13 janvier 1898**, l'écrivain **Émile Zola** publie dans le journal *L'Aurore* une lettre ouverte au président de la République : **« J'accuse... ! »**. Il dénonce les mensonges de l'état-major." },
            { t: "citation", texte: "Mon devoir est de parler, je ne veux pas être complice. Mes nuits seraient hantées par le spectre de l'innocent qui expie là-bas, dans la plus affreuse des tortures, un crime qu'il n'a pas commis.", auteur: "Émile Zola", source: "« J'accuse... ! », L'Aurore, 13 janvier 1898" },
            { t: "texte", md: "La France se déchire. Les **dreyfusards** défendent la justice et les droits de l'individu ; ils fondent la Ligue des droits de l'homme. Les **antidreyfusards** veulent protéger l'honneur de l'armée, et beaucoup sont animés par l'**antisémitisme**. Dreyfus est enfin **réhabilité en 1906** et réintégré dans l'armée." },
            { t: "verifie", q: "Pourquoi l'affaire Dreyfus divise-t-elle profondément la France ?", choix: ["Parce qu'elle oppose la défense de la justice à celle de l'honneur de l'armée", "Parce que Dreyfus veut rétablir la monarchie", "Parce qu'elle provoque une guerre contre l'Allemagne"], bonne: 0, explication: "Les dreyfusards placent la vérité et les droits de l'individu au-dessus de tout ; les antidreyfusards défendent l'armée, souvent par antisémitisme." },
          ],
        },
        {
          titre: "La laïcité et les symboles de la République",
          blocs: [
            { t: "propriete", titre: "La loi du 9 décembre 1905", md: "Elle **sépare les Églises et l'État**. La République garantit la **liberté de conscience** et le libre exercice des cultes, mais elle ne reconnaît, ne salarie ni ne subventionne aucun culte. C'est le principe de **laïcité** : l'État est neutre en matière religieuse." },
            { t: "liste", titre: "Les symboles de la République", items: [
              "**Marianne** : une femme coiffée du bonnet phrygien, qui incarne la République.",
              "Le **drapeau tricolore** bleu, blanc, rouge, né pendant la Révolution.",
              "***La Marseillaise***, chant de guerre de 1792, hymne national en **1879**.",
              "Le **14 juillet**, fête nationale depuis **1880**.",
              "La devise **« Liberté, Égalité, Fraternité »**, inscrite sur les mairies et les écoles.",
            ] },
            { t: "frise", titre: "La IIIe République s'enracine", evenements: [
              { date: 1870, label: "Proclamation de la République", detail: "Le 4 septembre, après Sedan." },
              { date: 1871, label: "Commune de Paris", detail: "De mars à mai ; Semaine sanglante du 21 au 28 mai." },
              { date: 1875, label: "Lois constitutionnelles", detail: "Président, Chambre des députés, Sénat." },
              { date: 1880, label: "Le 14 juillet, fête nationale", detail: "La Marseillaise est l'hymne national depuis 1879." },
              { date: 1881, label: "Presse libre, école gratuite", detail: "Lois du 16 juin et du 29 juillet." },
              { date: 1882, label: "École obligatoire et laïque", detail: "Loi Ferry du 28 mars." },
              { date: 1894, label: "Condamnation de Dreyfus", detail: "Début de l'affaire." },
              { date: 1898, label: "« J'accuse... ! »", detail: "Zola dans L'Aurore, le 13 janvier." },
              { date: 1905, label: "Séparation des Églises et de l'État", detail: "Loi du 9 décembre." },
              { date: 1906, label: "Réhabilitation de Dreyfus", detail: "Il est reconnu innocent." },
            ] },
          ],
        },
      ],
      bilan: "Née dans la défaite et la guerre civile, la IIIe République s'enracine par l'école, les libertés et la laïcité. L'affaire Dreyfus montre qu'elle sait finalement faire triompher la justice.",
    },
    "4e-histoire-08-conditions-feminines": {
      accroche: "1861, Lyon. Une femme de 37 ans, Julie-Victoire Daubié, se présente au baccalauréat. Le jury hésite : aucune femme ne l'a jamais passé. Elle le réussit et devient la première bachelière de France. Au XIXe siècle, chaque droit gagné par les femmes est une conquête de ce genre.",
      objectifs: [
        "Décrire la place des femmes dans le Code civil et la société du XIXe siècle",
        "Présenter le travail des femmes et les progrès de l'éducation des filles",
        "Identifier des figures féminines et les premiers combats féministes",
        "Dater les étapes de l'évolution des droits des femmes",
      ],
      sections: [
        {
          titre: "Le Code civil : des femmes mineures devant la loi",
          blocs: [
            { t: "texte", md: "La Révolution proclame l'égalité des droits, mais pour les hommes. Dès 1791, **Olympe de Gouges** le dénonce dans sa *Déclaration des droits de la femme et de la citoyenne*. Elle est guillotinée en 1793.\n\nLe **Code civil de 1804**, voulu par Napoléon, aggrave la situation : la femme mariée passe sous l'autorité de son mari. Elle ne peut ni travailler, ni ouvrir un compte, ni signer un contrat, ni aller en justice sans son accord." },
            { t: "citation", texte: "La femme naît libre et demeure égale à l'homme en droits.", auteur: "Olympe de Gouges", source: "Déclaration des droits de la femme et de la citoyenne, 1791, article 1" },
            { t: "definition", terme: "Incapacité juridique", md: "Situation d'une personne qui ne peut pas agir seule devant la loi. Selon le Code civil de 1804, la **femme mariée** est dans ce cas, comme un enfant mineur : elle doit obtenir l'autorisation de son mari pour la plupart des actes." },
            { t: "exemple", titre: "Analyser l'article 213 du Code civil", etapes: [
              "**Texte** : « Le mari doit protection à sa femme, la femme obéissance à son mari. »",
              "**Nature** : un article de loi. **Auteur** : Napoléon Bonaparte et ses juristes. **Date** : 1804.",
              "**Explication** : la loi organise l'inégalité dans le couple ; l'homme commande, la femme obéit.",
              "**Portée** : la Révolution a donné l'égalité civile aux hommes, pas aux femmes, qui restent des mineures devant la loi.",
            ] },
            { t: "verifie", q: "Selon le Code civil de 1804, que doit la femme mariée à son mari ?", choix: ["La protection", "L'obéissance", "Rien : ils sont égaux"], bonne: 1, explication: "Article 213 : le mari doit protection, la femme doit obéissance. C'est une inégalité inscrite dans la loi." },
          ],
        },
        {
          titre: "Des femmes qui travaillent beaucoup",
          blocs: [
            { t: "texte", md: "On imagine parfois que les femmes du XIXe siècle restent au foyer. C'est vrai pour les femmes de la bourgeoisie, à qui l'on demande de tenir la maison et d'élever les enfants. Mais les femmes des milieux populaires travaillent dur : vers 1900, elles représentent plus d'un tiers des actifs en France.\n\nElles sont presque toujours **moins payées** que les hommes, souvent deux fois moins, et cumulent travail et tâches domestiques." },
            { t: "tableau", titre: "Les métiers féminins au XIXe siècle", entetes: ["Métier", "Milieu", "Conditions"], lignes: [
              ["Paysanne", "Campagne", "Travaux des champs, du bétail et de la maison"],
              ["Ouvrière du textile", "Usine", "Longues journées, salaire faible"],
              ["Domestique", "Maison bourgeoise en ville", "Logée chez ses patrons, disponible jour et nuit"],
              ["Employée", "Grands magasins, Postes", "Métier nouveau de la fin du siècle"],
              ["Institutrice", "École publique", "Métier respecté, voie d'émancipation"],
            ] },
            { t: "attention", md: "Ne dis pas que les femmes « ne travaillent pas » au XIXe siècle : ce sont surtout les **bourgeoises** qui ne travaillent pas hors du foyer. Paysannes, ouvrières et domestiques forment une main-d'œuvre immense." },
          ],
        },
        {
          titre: "L'instruction des filles progresse",
          blocs: [
            { t: "texte", md: "Au début du siècle, beaucoup de filles ne vont pas à l'école. La **loi Falloux** (1850) oblige les communes de plus de 800 habitants à ouvrir une école de filles. La **loi Camille Sée** (**1880**) crée les **lycées de jeunes filles**. Avec les **lois Ferry** (1881-1882), l'école primaire devient gratuite, obligatoire et laïque pour **tous** les enfants, filles comprises.\n\nDevenir **institutrice** permet alors à des jeunes femmes instruites de gagner leur vie et d'être indépendantes. Quelques-unes accèdent à l'université : Madeleine Brès devient en 1875 la première Française docteure en médecine." },
            { t: "savais-tu", md: "**Marie Curie** est la première femme à recevoir un prix Nobel : celui de **physique** en **1903**, avec Pierre Curie et Henri Becquerel. Elle obtient seule le prix Nobel de **chimie** en **1911**. Elle reste à ce jour la seule personne récompensée dans deux sciences différentes." },
          ],
        },
        {
          titre: "Les premiers combats féministes",
          blocs: [
            { t: "texte", md: "Des femmes s'imposent malgré les obstacles. La romancière **George Sand** signe ses livres d'un nom d'homme pour être publiée et lue. **Louise Michel**, institutrice, combat sur les barricades de la Commune en 1871 et est déportée en Nouvelle-Calédonie.\n\nÀ la fin du siècle naît le **féminisme**, le combat pour l'égalité entre hommes et femmes. **Hubertine Auclert** fonde en **1881** le journal *La Citoyenne* et réclame le **droit de vote** des femmes." },
            { t: "propriete", titre: "Des progrès lents", md: "Le **divorce**, aboli en 1816, est rétabli par la loi Naquet en **1884**. En **1907**, la femme mariée peut enfin **disposer librement de son salaire**. Mais le droit de vote n'est accordé aux Françaises qu'en **1944**." },
            { t: "frise", titre: "Les droits des femmes en France", evenements: [
              { date: 1791, label: "Déclaration d'Olympe de Gouges", detail: "Elle réclame l'égalité des droits." },
              { date: 1804, label: "Code civil", detail: "La femme mariée doit obéissance à son mari." },
              { date: 1850, label: "Loi Falloux", detail: "Écoles de filles dans les communes de plus de 800 habitants." },
              { date: 1861, label: "Première bachelière", detail: "Julie-Victoire Daubié." },
              { date: 1880, label: "Loi Camille Sée", detail: "Création des lycées de jeunes filles." },
              { date: 1881, label: "*La Citoyenne*", detail: "Journal d'Hubertine Auclert pour le vote des femmes." },
              { date: 1884, label: "Rétablissement du divorce", detail: "Loi Naquet." },
              { date: 1903, label: "Prix Nobel de Marie Curie", detail: "En physique ; chimie en 1911." },
              { date: 1907, label: "Libre disposition du salaire", detail: "Pour la femme mariée." },
              { date: 1944, label: "Droit de vote des femmes", detail: "Premier vote en avril 1945." },
            ] },
            { t: "verifie", q: "Pourquoi peut-on dire que la Révolution n'a pas apporté l'égalité aux femmes ?", choix: ["Parce qu'elle leur refuse le droit de vote et que le Code civil les soumet à leur mari", "Parce qu'elle les oblige à travailler en usine", "Parce qu'elle leur interdit d'aller à l'école"], bonne: 0, explication: "Les droits de 1789 profitent aux hommes : les femmes ne votent pas, et le Code civil de 1804 les place sous l'autorité de leur mari." },
          ],
        },
      ],
      bilan: "Au XIXe siècle, la loi fait de la femme mariée une mineure, alors que les femmes travaillent, s'instruisent et commencent à se battre pour leurs droits. Les conquêtes sont lentes : il faudra attendre 1944 pour le droit de vote.",
    },
    "4e-histoire-09-reperes-methode": {
      accroche: "En 1801, le peintre David achève un portrait célèbre : Bonaparte, cape au vent, franchit les Alpes sur un cheval cabré. En réalité, il les a traversées sur une mule, par un chemin sûr. Un historien ne prend jamais un document pour argent comptant : il le date, le situe, interroge son auteur. Voici ses outils.",
      objectifs: [
        "Se repérer dans le temps : siècles et grandes dates du XVIIIe au XIXe siècle",
        "Ordonner les régimes politiques français de 1789 à 1870",
        "Analyser un document : nature, auteur, date, contexte",
        "Maîtriser le vocabulaire politique du programme",
      ],
      sections: [
        {
          titre: "Trouver le siècle d'une année",
          blocs: [
            { t: "propriete", titre: "La règle des siècles", md: "Un siècle dure 100 ans et commence par une année en **01**. Le **XVIIIe siècle** va de **1701 à 1800**, le **XIXe siècle** de **1801 à 1900**.\n\nPour trouver le siècle d'une année, on prend les **deux premiers chiffres** et on **ajoute 1**. Exception : les années qui finissent par **00** appartiennent au siècle indiqué par leurs deux premiers chiffres (1800 est la dernière année du XVIIIe siècle)." },
            { t: "exemple", titre: "Appliquer la règle", etapes: [
              "1789 : 17 + 1 = 18, donc **XVIIIe siècle**.",
              "1848 : 18 + 1 = 19, donc **XIXe siècle**.",
              "1800 : année en 00, donc **XVIIIe siècle** (sa dernière année).",
              "1900 : dernière année du **XIXe siècle** ; le XXe commence en 1901.",
            ] },
            { t: "verifie", q: "À quel siècle appartient l'année 1789 ?", choix: ["XVIIe siècle", "XVIIIe siècle", "XIXe siècle"], bonne: 1, explication: "On prend 17 et on ajoute 1 : 1789 est au XVIIIe siècle, qui va de 1701 à 1800." },
          ],
        },
        {
          titre: "Dix régimes en moins d'un siècle",
          blocs: [
            { t: "texte", md: "De 1789 à 1870, la France change sans cesse de régime : monarchies, républiques et empires se succèdent, souvent après une révolution ou un coup d'État. Pour ne pas t'y perdre, retiens la date de début de chacun." },
            { t: "schema", titre: "La succession des régimes, de 1789 à 1870", legende: "Les républiques sont sur fond coloré, les empires entourés de pointillés, les monarchies sur fond clair. La France a connu deux empires et trois républiques jusqu'en 1870.", svg: `<svg viewBox="0 0 400 290"><rect class="aplat-papier" x="62" y="14" width="318" height="22" rx="5"/><rect class="trait-fin" x="62" y="14" width="318" height="22" rx="5"/><text class="texte" x="54" y="30" text-anchor="end">→ 1789</text><text class="texte" x="72" y="30">Monarchie absolue</text><text class="texte-petit" x="372" y="29" text-anchor="end">roi de droit divin</text><rect class="aplat-papier" x="62" y="41" width="318" height="22" rx="5"/><rect class="trait-fin" x="62" y="41" width="318" height="22" rx="5"/><text class="texte" x="54" y="57" text-anchor="end">1791</text><text class="texte" x="72" y="57">Monarchie constitutionnelle</text><text class="texte-petit" x="372" y="56" text-anchor="end">Louis XVI</text><rect class="aplat" x="62" y="68" width="318" height="22" rx="5"/><rect class="trait-fin" x="62" y="68" width="318" height="22" rx="5"/><text class="texte" x="54" y="84" text-anchor="end">1792</text><text class="texte" x="72" y="84">Ire République</text><text class="texte-petit" x="372" y="83" text-anchor="end">Convention, puis Directoire</text><rect class="aplat-papier" x="62" y="95" width="318" height="22" rx="5"/><rect class="pointille" x="62" y="95" width="318" height="22" rx="5"/><text class="texte" x="54" y="111" text-anchor="end">1799</text><text class="texte" x="72" y="111">Consulat</text><text class="texte-petit" x="372" y="110" text-anchor="end">Bonaparte, Premier consul</text><rect class="aplat-papier" x="62" y="122" width="318" height="22" rx="5"/><rect class="pointille" x="62" y="122" width="318" height="22" rx="5"/><text class="texte" x="54" y="138" text-anchor="end">1804</text><text class="texte" x="72" y="138">Premier Empire</text><text class="texte-petit" x="372" y="137" text-anchor="end">Napoléon Ier</text><rect class="aplat-papier" x="62" y="149" width="318" height="22" rx="5"/><rect class="trait-fin" x="62" y="149" width="318" height="22" rx="5"/><text class="texte" x="54" y="165" text-anchor="end">1814</text><text class="texte" x="72" y="165">Restauration</text><text class="texte-petit" x="372" y="164" text-anchor="end">Louis XVIII, Charles X</text><rect class="aplat-papier" x="62" y="176" width="318" height="22" rx="5"/><rect class="trait-fin" x="62" y="176" width="318" height="22" rx="5"/><text class="texte" x="54" y="192" text-anchor="end">1830</text><text class="texte" x="72" y="192">Monarchie de Juillet</text><text class="texte-petit" x="372" y="191" text-anchor="end">Louis-Philippe</text><rect class="aplat" x="62" y="203" width="318" height="22" rx="5"/><rect class="trait-fin" x="62" y="203" width="318" height="22" rx="5"/><text class="texte" x="54" y="219" text-anchor="end">1848</text><text class="texte" x="72" y="219">IIe République</text><text class="texte-petit" x="372" y="218" text-anchor="end">Louis-Napoléon, président</text><rect class="aplat-papier" x="62" y="230" width="318" height="22" rx="5"/><rect class="pointille" x="62" y="230" width="318" height="22" rx="5"/><text class="texte" x="54" y="246" text-anchor="end">1852</text><text class="texte" x="72" y="246">Second Empire</text><text class="texte-petit" x="372" y="245" text-anchor="end">Napoléon III</text><rect class="aplat" x="62" y="257" width="318" height="22" rx="5"/><rect class="trait-fin" x="62" y="257" width="318" height="22" rx="5"/><text class="texte" x="54" y="273" text-anchor="end">1870</text><text class="texte" x="72" y="273">IIIe République</text><text class="texte-petit" x="372" y="272" text-anchor="end">jusqu'en 1940</text><path class="trait-fin" d="M392 14 L392 278" marker-end="url(#fl)"/></svg>` },
            { t: "attention", md: "Le **Directoire** (1795-1799) n'est pas un régime à part : c'est une période de la **Ire République**. Et la Restauration est interrompue en 1815 par les **Cent-Jours**, le bref retour de Napoléon." },
            { t: "verifie", q: "Quel régime commence en 1852 ?", choix: ["La IIe République", "Le Second Empire", "La monarchie de Juillet"], bonne: 1, explication: "Louis-Napoléon Bonaparte, président depuis 1848, devient Napoléon III en 1852 : c'est le Second Empire." },
          ],
        },
        {
          titre: "Analyser un document comme un historien",
          blocs: [
            { t: "etapes", titre: "La méthode en quatre temps", items: [
              { titre: "Présenter", md: "La **nature** (texte de loi, discours, caricature, tableau, affiche), l'**auteur**, la **date**, le **destinataire**." },
              { titre: "Situer", md: "Le **contexte** : que se passe-t-il à ce moment-là ?" },
              { titre: "Expliquer", md: "Que dit ou montre le document ? Relève les éléments importants et explique-les avec tes connaissances." },
              { titre: "Critiquer", md: "L'auteur est-il témoin ? Quel est son point de vue ? Que veut-il obtenir ? Le document dit-il toute la vérité ?" },
            ] },
            { t: "exemple", titre: "Présenter une caricature de 1789", md: "**Nature** : une caricature, c'est-à-dire un dessin satirique. **Auteur** : anonyme. **Date** : 1789, à la veille des états généraux. **Contexte** : la crise financière et le mécontentement du tiers état. Elle montre un vieux paysan courbé qui porte sur son dos un ecclésiastique et un noble, avec la légende « À faut espérer q'eu s'jeu la finira ben tôt ». **But** : dénoncer les privilèges du clergé et de la noblesse." },
            { t: "savais-tu", md: "Le tableau de David, *Bonaparte franchissant le Grand-Saint-Bernard*, est une œuvre de **propagande** : il fait de Bonaparte un héros invincible. Face à un tableau officiel, l'historien se demande toujours **qui l'a commandé** et **dans quel but**." },
          ],
        },
        {
          titre: "Les mots du pouvoir",
          blocs: [
            { t: "definition", terme: "Souveraineté", md: "Pouvoir suprême de décider. Dans la monarchie absolue, elle appartient au **roi** ; après 1789, elle appartient à la **nation** ou au **peuple**." },
            { t: "tableau", titre: "Le vocabulaire à maîtriser", entetes: ["Mot", "Définition"], lignes: [
              ["Révolution", "Changement brutal et profond de l'ordre politique et social, qui renverse le pouvoir en place"],
              ["Révolte", "Soulèvement contre le pouvoir, souvent réprimé, qui ne change pas forcément le régime"],
              ["Nation", "Communauté de citoyens qui se reconnaissent une histoire et des lois communes"],
              ["République", "Régime où le pouvoir n'est pas héréditaire mais vient des citoyens"],
              ["Empire", "Régime dirigé par un empereur au pouvoir fort et héréditaire"],
              ["Suffrage", "Droit de vote : **censitaire** (réservé à ceux qui paient un impôt) ou **universel**"],
              ["Colonie", "Territoire conquis et dominé par un État étranger, la métropole"],
            ] },
          ],
        },
        {
          titre: "Les grands repères du programme",
          blocs: [
            { t: "frise", titre: "Du XVIIIe au XIXe siècle", evenements: [
              { date: 1751, label: "Premier volume de l'*Encyclopédie*", detail: "Les Lumières diffusent l'esprit critique." },
              { date: 1789, label: "Début de la Révolution", detail: "Prise de la Bastille, DDHC." },
              { date: 1792, label: "Ire République", detail: "Proclamée le 22 septembre." },
              { date: 1799, label: "Coup d'État de Bonaparte", detail: "Le Consulat." },
              { date: 1804, label: "Premier Empire et Code civil", detail: "Napoléon Ier." },
              { date: 1815, label: "Waterloo", detail: "Chute de l'Empire, Restauration." },
              { date: 1830, label: "Trois Glorieuses ; prise d'Alger", detail: "Monarchie de Juillet." },
              { date: 1848, label: "IIe République", detail: "Suffrage universel masculin, abolition de l'esclavage." },
              { date: 1851, label: "Coup d'État de Louis-Napoléon", detail: "Le Second Empire suit en 1852." },
              { date: 1870, label: "IIIe République", detail: "Proclamée le 4 septembre." },
              { date: 1881, label: "Lois Ferry", detail: "École gratuite (1881), obligatoire et laïque (1882)." },
              { date: 1905, label: "Séparation des Églises et de l'État", detail: "La laïcité." },
            ] },
            { t: "verifie", q: "Quelle est la différence entre une révolte et une révolution ?", choix: ["Il n'y en a aucune", "Une révolution change profondément et durablement l'ordre politique et social", "Une révolte dure toujours plus longtemps"], bonne: 1, explication: "Une révolte peut être réprimée sans rien changer ; une révolution renverse le pouvoir et transforme la société, comme en 1789." },
          ],
        },
      ],
      bilan: "Dater, situer, présenter, critiquer : avec ces gestes et quelques mots précis, tu peux lire deux siècles d'histoire, de la monarchie absolue à la IIIe République.",
    },
  },
};
