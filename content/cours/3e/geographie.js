// Cours ÉCLORE — 3e Géographie. Schéma : docs/COURS.md
// Données chiffrées arrondies (INSEE, RTE, Eurostat, ONU) : ordres de grandeur, pas valeurs exactes.
export default {
  id: "3e-geographie",
  chapitres: {
    "3e-geographie-01-aires-urbaines": {
      accroche: "Chaque matin à 7 h, Léa, 14 ans, entend sa mère démarrer la voiture. Elles habitent une maison avec jardin à Saint-Lys, un village à 30 km de Toulouse ; sa mère travaille chez Airbus, à Blagnac. Le soir, elle rentre après une heure de bouchons. Léa vit-elle à la campagne ou en ville ? Les géographes ont un mot pour ça : l'aire urbaine.",
      objectifs: [
        "Définir une aire urbaine : pôle urbain et couronne périurbaine",
        "Situer les dix premières aires urbaines françaises et expliquer la métropolisation",
        "Expliquer la périurbanisation, les mobilités pendulaires et leurs conséquences",
        "Comprendre les difficultés de nombreuses villes moyennes",
      ],
      sections: [
        {
          titre: "De la ville à l'aire urbaine",
          blocs: [
            { t: "texte", md: "Autrefois, on distinguait facilement la ville et la campagne. Aujourd'hui, la ville déborde : des milliers de personnes habitent dans des villages mais travaillent, font leurs courses ou vont au lycée dans la grande ville voisine. Pour décrire cette réalité, l'INSEE a créé la notion d'**aire urbaine** : l'espace qui vit au rythme d'une ville." },
            { t: "definition", terme: "Aire urbaine", md: "Un ensemble formé d'un **pôle urbain** (la **ville-centre** et sa **banlieue**, aux immeubles et maisons continus) et d'une **couronne périurbaine** : des communes plus rurales dont une grande partie des actifs (au moins 40 %) va travailler chaque jour dans le pôle." },
            { t: "schema", titre: "L'organisation d'une aire urbaine", legende: "Aire urbaine = pôle urbain (ville-centre + banlieue) + couronne périurbaine. Les flèches représentent les trajets quotidiens vers le pôle.", svg: `<svg viewBox="0 0 400 260"><circle class="aplat-papier pointille" cx="140" cy="130" r="112"/><circle class="aplat trait" cx="140" cy="130" r="58"/><circle class="aplat-fort trait" cx="140" cy="130" r="24"/><circle cx="70" cy="60" r="5" class="aplat-fort"/><circle cx="228" cy="80" r="5" class="aplat-fort"/><circle cx="60" cy="190" r="5" class="aplat-fort"/><circle cx="200" cy="215" r="5" class="aplat-fort"/><path class="trait-fin" d="M76 66 L114 104" marker-end="url(#fl-p)"/><path class="trait-fin" d="M222 86 L164 116" marker-end="url(#fl-p)"/><path class="trait-fin" d="M66 184 L116 146" marker-end="url(#fl-p)"/><path class="trait-fin" d="M196 208 L156 152" marker-end="url(#fl-p)"/><line class="trait-fin" x1="150" y1="115" x2="262" y2="38"/><line class="trait-fin" x1="190" y1="110" x2="262" y2="96"/><line class="trait-fin" x1="236" y1="160" x2="262" y2="160"/><text class="texte" x="268" y="42">Ville-centre</text><text class="texte" x="268" y="100">Banlieue</text><text class="texte-pigment" x="268" y="70">pôle urbain</text><text class="texte" x="268" y="158">Couronne</text><text class="texte" x="268" y="174">périurbaine</text><text class="texte-petit" x="268" y="214">→ mobilités</text><text class="texte-petit" x="268" y="228">pendulaires</text><text class="texte-petit" x="300" y="252" text-anchor="middle">Autour : espace rural</text></svg>` },
            { t: "verifie", q: "Saint-Lys, village où habite Léa, envoie beaucoup d'actifs travailler à Toulouse. À quelle partie de l'aire urbaine appartient-il ?", choix: ["La ville-centre", "La banlieue", "La couronne périurbaine", "Ce n'est pas dans l'aire urbaine"], bonne: 2, explication: "Saint-Lys n'est pas collé à la ville (ce n'est pas la banlieue), mais une grande partie de ses actifs travaille dans le pôle toulousain : c'est une commune de la couronne périurbaine." },
          ],
        },
        {
          titre: "Une France urbaine dominée par ses métropoles",
          blocs: [
            { t: "texte", md: "Plus de **80 %** des Français vivent dans une aire urbaine, alors que les villes n'occupent qu'une petite partie du territoire. La France est donc un pays ==très urbanisé==.\n\nMais toutes les villes ne pèsent pas le même poids. L'aire urbaine de **Paris** dépasse **12 millions** d'habitants : près d'un Français sur cinq ! Elle est six fois plus peuplée que la deuxième, **Lyon** (environ 2,3 millions). On parle de **macrocéphalie** parisienne : une tête énorme sur un corps plus modeste." },
            { t: "graphique", type: "barres", titre: "Les dix premières aires urbaines de France (population arrondie)", unite: "millions d'hab.", donnees: [{ label: "Paris", valeur: 12.6 }, { label: "Lyon", valeur: 2.3 }, { label: "Marseille-Aix", valeur: 1.8 }, { label: "Toulouse", valeur: 1.4 }, { label: "Bordeaux", valeur: 1.2 }, { label: "Lille", valeur: 1.2 }, { label: "Nice", valeur: 1.0 }, { label: "Nantes", valeur: 1.0 }, { label: "Strasbourg", valeur: 0.8 }, { label: "Rennes", valeur: 0.7 }] },
            { t: "carte", fond: "france", titre: "Les dix premières aires urbaines françaises", zones: ["ile-de-france"], reperes: [{ nom: "Paris", lat: 48.857, lon: 2.352 }, { nom: "Lyon", lat: 45.764, lon: 4.836 }, { nom: "Marseille", lat: 43.296, lon: 5.370 }, { nom: "Toulouse", lat: 43.605, lon: 1.444 }, { nom: "Bordeaux", lat: 44.838, lon: -0.579 }, { nom: "Lille", lat: 50.629, lon: 3.057 }, { nom: "Nice", lat: 43.710, lon: 7.262 }, { nom: "Nantes", lat: 47.218, lon: -1.554 }, { nom: "Strasbourg", lat: 48.573, lon: 7.752 }, { nom: "Rennes", lat: 48.117, lon: -1.678 }], legende: "En couleur : l'Île-de-France, cœur de l'aire urbaine de Paris. Les grandes métropoles sont surtout en périphérie du territoire : littoraux, frontières, vallées." },
            { t: "definition", terme: "Métropolisation", md: "La concentration de la population, des richesses et des **fonctions de commandement** (sièges sociaux d'entreprises, universités, centres de recherche, gares TGV, aéroports internationaux) dans les plus grandes villes, appelées **métropoles**." },
            { t: "texte", md: "Pourquoi dit-on que les métropoles relient la France au monde ? Parce qu'elles concentrent les **aéroports internationaux**, les sièges des entreprises qui exportent, les universités qui accueillent des étudiants étrangers. Toulouse vend des avions sur tous les continents ; Lyon accueille Interpol ; Paris reçoit des touristes du monde entier. Les métropoles sont des **portes d'entrée** de la mondialisation." },
            { t: "savais-tu", md: "Depuis 2020, l'INSEE utilise un nouveau zonage, l'**aire d'attraction des villes**, qui reprend la même idée : un pôle et une couronne. Au DNB, le vocabulaire « aire urbaine, pôle urbain, couronne périurbaine » reste celui du programme." },
          ],
        },
        {
          titre: "La périurbanisation : vivre loin, travailler en ville",
          blocs: [
            { t: "definition", terme: "Périurbanisation", md: "L'installation de citadins dans les communes rurales situées autour des villes. Elle provoque l'**étalement urbain** : la ville s'étend de plus en plus loin sur la campagne, en lotissements et en zones commerciales." },
            { t: "texte", md: "Pourquoi des familles quittent-elles la ville ? Pour une **maison avec jardin**, un logement **moins cher** qu'au centre, le calme et la nature. Ce choix est possible grâce à la **voiture** et aux routes rapides.\n\nMais il a un prix : chaque jour, il faut faire l'aller-retour entre le domicile et le travail. Ces trajets quotidiens s'appellent les **mobilités pendulaires**, car on va et vient comme le balancier d'une horloge." },
            { t: "exemple", titre: "Étude de cas : la famille de Léa, près de Toulouse", etapes: ["La famille quitte un appartement de Toulouse pour une maison à 30 km : c'est la **périurbanisation**.", "Chaque matin, la mère conduit jusqu'à l'usine Airbus de Blagnac : c'est une **mobilité pendulaire**.", "Le village gagne des habitants : on construit un lotissement, on agrandit l'école.", "Des champs disparaissent sous le béton, et les bouchons s'allongent sur la rocade : ce sont les **conséquences** de l'étalement urbain."] },
            { t: "tableau", titre: "Le bilan de la périurbanisation", entetes: ["Pour les habitants", "Pour le territoire"], lignes: [["Maison plus grande, jardin, calme", "Villages qui revivent, nouvelles écoles"], ["Temps perdu dans les transports, budget essence élevé", "**Artificialisation** des terres agricoles et naturelles"], ["Dépendance totale à la **voiture**", "Embouteillages, pollution, gaz à effet de serre"]] },
            { t: "attention", md: "La périurbanisation ne **préserve pas** les terres agricoles : c'est le contraire ! Chaque lotissement, chaque rond-point et chaque parking recouvre des champs. C'est l'un des grands problèmes de l'étalement urbain." },
            { t: "verifie", q: "Quelle est la principale raison du départ des familles vers le périurbain ?", choix: ["Se rapprocher de leur travail", "Avoir une maison avec jardin à un prix plus abordable", "Utiliser moins la voiture", "Trouver plus de services publics"], bonne: 1, explication: "Les familles cherchent un logement plus grand et moins cher. En échange, elles s'éloignent du travail et dépendent davantage de la voiture." },
          ],
        },
        {
          titre: "Des villes moyennes fragilisées",
          blocs: [
            { t: "texte", md: "Entre les métropoles et les campagnes, il y a les **villes moyennes** (de 20 000 à 100 000 habitants environ) : Nevers, Vierzon, Saint-Dizier, Châtellerault… Beaucoup souffrent. Leurs habitants partent vers les métropoles, plus attractives. Les **commerces du centre-ville ferment** (vitrines vides, « à louer »), concurrencés par les grandes zones commerciales de périphérie et par les achats en ligne." },
            { t: "texte", md: "L'État réagit : depuis **2018**, le programme **Action cœur de ville** aide plus de 200 villes moyennes à rénover des logements anciens, embellir les rues piétonnes et réinstaller des commerces et des services dans le centre." },
            { t: "astuce", md: "Au DNB, pour parler des aires urbaines, pense à un trio : **un exemple de métropole** (Lyon, Toulouse), **un mot de vocabulaire précis** (pôle urbain, couronne périurbaine, mobilités pendulaires), **une conséquence** (étalement urbain, dépendance à la voiture). C'est ce que le correcteur attend." },
            { t: "verifie", q: "Quelle situation illustre le mieux les difficultés d'une ville moyenne ?", choix: ["Un nouveau quartier d'affaires avec des tours", "Des vitrines vides dans la rue commerçante du centre", "L'ouverture d'un aéroport international"], bonne: 1, explication: "La vacance commerciale (magasins fermés) en centre-ville est le signe le plus visible de la crise de nombreuses villes moyennes, concurrencées par la périphérie et les métropoles." },
          ],
        },
      ],
      bilan: "La France vit au rythme de ses aires urbaines : des métropoles qui attirent et commandent, une couronne périurbaine qui s'étale, des mobilités pendulaires quotidiennes et des villes moyennes qui cherchent un second souffle.",
    },
    "3e-geographie-02-espaces-productifs": {
      accroche: "À Lens, dans le Pas-de-Calais, Karim montre à son fils les deux terrils géants qui dominent la ville : des montagnes de déchets de charbon. Son grand-père était mineur. Aujourd'hui, Karim travaille dans un entrepôt logistique, et son fils visite le musée du Louvre-Lens, construit sur un ancien carreau de mine. En trois générations, tout a changé.",
      objectifs: [
        "Identifier et localiser les espaces agricoles, industriels et tertiaires",
        "Expliquer la désindustrialisation, la reconversion et l'essor des technopôles",
        "Caractériser les espaces du tourisme, des affaires et de la logistique",
      ],
      sections: [
        {
          titre: "Produire des richesses : trois grands secteurs",
          blocs: [
            { t: "definition", terme: "Espace productif", md: "Un espace aménagé et organisé par les sociétés pour **produire des richesses** : un champ, une usine, un quartier de bureaux, une station de ski ou un port." },
            { t: "texte", md: "On classe les activités en trois secteurs : le **primaire** (agriculture, pêche), le **secondaire** (industrie, construction) et le **tertiaire** (services : commerce, santé, éducation, tourisme, transport, banque). Aujourd'hui, ==le tertiaire regroupe environ trois emplois sur quatre==." },
            { t: "graphique", type: "secteurs", titre: "Répartition des emplois en France par secteur (ordre de grandeur)", unite: "%", donnees: [{ label: "Tertiaire (services)", valeur: 77 }, { label: "Secondaire (industrie, construction)", valeur: 20 }, { label: "Primaire (agriculture)", valeur: 3 }] },
          ],
        },
        {
          titre: "Des espaces agricoles très performants",
          blocs: [
            { t: "texte", md: "L'agriculture emploie **moins de 3 %** des actifs. Pourtant, la France est la **première puissance agricole de l'Union européenne**. Comment ? Grâce à une agriculture **productiviste** : de grandes exploitations, des machines, des engrais, des rendements élevés. Chaque région s'est **spécialisée**." },
            { t: "tableau", titre: "Les grandes spécialisations agricoles", entetes: ["Espace", "Production dominante"], lignes: [["Bassin parisien (Beauce)", "Céréales (blé), betteraves, colza"], ["Bretagne", "Élevage intensif (porcs, volailles, lait)"], ["Bordelais, Champagne, Bourgogne", "Vignobles et vins exportés"], ["Sud-Est (vallée du Rhône, Provence)", "Fruits et légumes"], ["Montagnes (Massif central, Alpes, Jura)", "Élevage et fromages AOP"]] },
            { t: "attention", md: "L'agriculture bretonne est très productive, mais elle **pollue** : les nitrates des élevages ruissellent jusqu'à la mer et nourrissent les **algues vertes** qui envahissent certaines plages. En réaction, l'**agriculture biologique** et les **circuits courts** (vente directe, marchés, AMAP) se développent." },
            { t: "verifie", q: "Quelle affirmation sur l'agriculture française est exacte ?", choix: ["Elle emploie un quart des actifs", "La France est la première puissance agricole de l'UE", "La Bretagne est spécialisée dans le blé"], bonne: 1, explication: "Avec moins de 3 % des actifs, la France reste la première puissance agricole de l'UE. Le blé domine dans le Bassin parisien, l'élevage en Bretagne." },
          ],
        },
        {
          titre: "L'industrie : déclin, reconversion et renouveau",
          blocs: [
            { t: "definition", terme: "Désindustrialisation", md: "La diminution de la part de l'industrie dans les emplois et la production d'un territoire. Usines et mines ferment, souvent parce que la production coûte moins cher ailleurs ou que la ressource est épuisée." },
            { t: "texte", md: "Le **Nord** (charbon, textile) et la **Lorraine** (fer, sidérurgie) ont été les cœurs industriels de la France. À partir des années 1960-1970, les mines s'épuisent et deviennent moins rentables que le charbon importé, et l'acier et le textile subissent la **concurrence** mondiale : des centaines de milliers d'emplois disparaissent. Ces territoires doivent se **reconvertir**." },
            { t: "etapes", titre: "La reconversion d'un bassin minier : l'exemple de Lens", items: [{ titre: "Fermeture", md: "Les puits de mine ferment (le dernier du Nord-Pas-de-Calais en 1990)." }, { titre: "Crise", md: "Chômage élevé, friches industrielles, départ des jeunes." }, { titre: "Aides publiques", md: "L'État, la région et l'Union européenne financent la dépollution et de nouveaux projets." }, { titre: "Nouvelles activités", md: "Louvre-Lens (2012), entrepôts logistiques, usines, tourisme de mémoire : le bassin minier est inscrit à l'UNESCO depuis 2012." }] },
            { t: "definition", terme: "Technopôle", md: "Un espace qui réunit des **entreprises de haute technologie**, des **universités** et des **laboratoires de recherche**, pour que les idées des chercheurs deviennent vite des produits." },
            { t: "exemple", titre: "Sophia Antipolis, un technopôle au soleil", md: "Créé en **1969** sur les collines au-dessus d'Antibes, près de Nice, Sophia Antipolis réunit plus de 2 000 entreprises (informatique, télécommunications, santé), des laboratoires et une université. Pourquoi ici ? Un **aéroport international** tout proche, des **chercheurs qualifiés** et un **cadre de vie** ensoleillé qui attire les cadres. D'autres technopôles : **Toulouse** (Airbus, aéronautique et spatial), **Grenoble** (microélectronique), **Saclay** au sud de Paris." },
            { t: "texte", md: "L'industrie lourde (acier, chimie, raffineries) se concentre, elle, dans les **zones industrialo-portuaires** (ZIP), au bord de la mer : **Dunkerque**, **Le Havre**, **Fos-sur-Mer** près de Marseille. Les matières premières arrivent par bateau et sont transformées sur place." },
            { t: "verifie", q: "Qu'est-ce qui attire surtout les entreprises de haute technologie dans un technopôle ?", choix: ["Des terrains très bon marché loin de tout", "La proximité des universités, des laboratoires et d'une main-d'œuvre qualifiée", "La présence d'une mine de charbon"], bonne: 1, explication: "Une entreprise de haute technologie a besoin de chercheurs et d'ingénieurs : elle s'installe près des universités et des laboratoires, dans un espace bien relié (aéroport, TGV)." },
          ],
        },
        {
          titre: "Les espaces du tertiaire : affaires, tourisme, logistique",
          blocs: [
            { t: "texte", md: "**Paris** concentre les sièges des grandes entreprises. Son quartier de **La Défense**, à l'ouest, avec ses tours de bureaux, est le **premier quartier d'affaires d'Europe**.\n\nLe **tourisme** est une richesse majeure : la France est la **première destination touristique du monde**, avec environ **100 millions** de visiteurs étrangers par an. Ils vont à Paris, sur les littoraux (Côte d'Azur, Bretagne) et à la montagne (stations de ski des Alpes).\n\nEnfin, la **logistique** explose avec le commerce en ligne : d'immenses entrepôts s'installent près des autoroutes, de l'aéroport de **Roissy-Charles-de-Gaulle** (le premier aéroport français) et des grands ports : **Marseille-Fos**, premier port de France, et **Le Havre**, premier port pour les conteneurs." },
            { t: "carte", fond: "france", titre: "Quelques espaces productifs en mutation", zones: ["hauts-de-france", "grand-est"], reperes: [{ nom: "Toulouse", lat: 43.605, lon: 1.444 }, { nom: "Sophia Antipolis", lat: 43.616, lon: 7.055 }, { nom: "Grenoble", lat: 45.188, lon: 5.724 }, { nom: "Saclay", lat: 48.731, lon: 2.170 }, { nom: "Roissy", lat: 49.010, lon: 2.548 }, { nom: "Lens", lat: 50.432, lon: 2.833 }, { nom: "Dunkerque", lat: 51.034, lon: 2.377 }, { nom: "Le Havre", lat: 49.494, lon: 0.108 }, { nom: "Fos-sur-Mer", lat: 43.438, lon: 4.945 }], legende: "En couleur : les anciennes régions industrielles du Nord et de l'Est, en reconversion. Repères : technopôles (Toulouse, Sophia Antipolis, Grenoble, Saclay), zones industrialo-portuaires (Dunkerque, Le Havre, Fos-sur-Mer), plate-forme logistique de Roissy." },
            { t: "astuce", md: "Pour expliquer la **localisation** d'une entreprise, retiens les quatre « A » : **A**ccessibilité (autoroutes, TGV, aéroport), **A**ctifs qualifiés, **A**gglomération proche (une métropole), **A**grément du cadre de vie." },
          ],
        },
      ],
      bilan: "Les espaces productifs français changent avec la mondialisation : une agriculture puissante mais à verdir, une industrie qui recule dans les vieux bassins et renaît dans les technopôles et les ports, et des services qui dominent tout.",
    },
    "3e-geographie-03-faible-densite": {
      accroche: "À Florac, en Lozère, Marion tient le seul café-épicerie à vingt minutes de route. L'été, les randonneurs du chemin de Stevenson se pressent à sa terrasse ; l'hiver, il faut parfois une heure pour trouver un médecin. Et pourtant, depuis trois ans, de nouvelles familles arrivent de Lyon et de Montpellier. Bienvenue dans la France des faibles densités.",
      objectifs: [
        "Localiser la diagonale des faibles densités et caractériser ces espaces",
        "Identifier leurs contraintes : enclavement, éloignement des services, vieillissement",
        "Repérer leurs atouts et leurs nouvelles dynamiques (néoruraux, tourisme vert, AOP)",
        "Connaître les politiques publiques qui leur sont destinées",
      ],
      sections: [
        {
          titre: "Où se trouvent les espaces de faible densité ?",
          blocs: [
            { t: "definition", terme: "Densité de population", md: "Le nombre moyen d'habitants par km². On la calcule ainsi : **population ÷ superficie**. La moyenne française est d'environ **107 hab/km²**. On parle d'**espace de faible densité** en dessous de **30 hab/km²**." },
            { t: "texte", md: "Ces espaces couvrent **plus du tiers** du territoire mais n'abritent **pas 5 %** de la population. Ils dessinent une large bande, la **diagonale des faibles densités**, qui traverse la France des **Ardennes** aux **Pyrénées** en passant par le **Massif central**. S'y ajoutent les hautes montagnes (Alpes du Sud), l'intérieur de la Corse et la forêt des Landes. La **Lozère**, avec environ 76 000 habitants, est le département le **moins peuplé** de France." },
            { t: "carte", fond: "france", titre: "La diagonale des faibles densités", reperes: [{ nom: "Ardennes", lat: 49.773, lon: 4.720 }, { nom: "Creuse (Guéret)", lat: 46.171, lon: 1.872 }, { nom: "Cantal (Aurillac)", lat: 44.926, lon: 2.444 }, { nom: "Lozère (Mende)", lat: 44.518, lon: 3.500 }, { nom: "Ariège (Saint-Girons)", lat: 42.985, lon: 1.146 }, { nom: "Landes", lat: 43.890, lon: -0.500 }, { nom: "Corse intérieure (Corte)", lat: 42.306, lon: 9.150 }], traits: [{ de: [49.773, 4.720], a: [42.985, 1.146], label: "diagonale des faibles densités" }], legende: "Le trait suit la diagonale, des Ardennes aux Pyrénées. Les repères signalent quelques espaces très peu peuplés, sur la diagonale et en dehors." },
            { t: "graphique", type: "barres", titre: "Densité de quelques départements (arrondie)", unite: "hab/km²", donnees: [{ label: "Lozère", valeur: 15 }, { label: "Creuse", valeur: 20 }, { label: "Corrèze", valeur: 41 }, { label: "Moyenne France", valeur: 107 }, { label: "Gironde", valeur: 170 }, { label: "Nord", valeur: 450 }] },
            { t: "verifie", q: "Un département compte 115 000 habitants pour environ 5 600 km². Est-ce un espace de faible densité ?", choix: ["Oui, environ 20 hab/km²", "Non, environ 200 hab/km²", "Non, environ 107 hab/km²"], bonne: 0, explication: "115 000 ÷ 5 600 ≈ 20 hab/km², bien en dessous du seuil de 30. C'est le cas de la Creuse." },
          ],
        },
        {
          titre: "Des contraintes bien réelles",
          blocs: [
            { t: "texte", md: "Vivre dans un espace de faible densité, c'est d'abord vivre **loin** : loin des autoroutes, des gares TGV, des hôpitaux et des lycées. Un territoire mal relié aux grands axes de transport est dit **enclavé**. Ses habitants dépendent de la **voiture** pour tout.\n\nComme il y a peu d'habitants, les services ferment : bureaux de poste, classes d'école, commerces. Quand les médecins partent à la retraite sans être remplacés, on parle de **désert médical**. La population est souvent **âgée**, car les jeunes partent étudier et travailler en ville. Enfin, le réseau internet et mobile y a longtemps été médiocre (les « zones blanches »)." },
            { t: "definition", terme: "Désert médical", md: "Un territoire où il est très difficile d'accéder à un médecin : il y en a trop peu, ils sont loin, et les délais pour un rendez-vous sont très longs." },
            { t: "attention", md: "Faible densité ne veut pas dire « vide » ni « abandonné » ! Ces espaces sont habités, cultivés, visités. Et ==tous ne perdent pas des habitants== : beaucoup en regagnent, surtout dans le Sud et l'Ouest." },
          ],
        },
        {
          titre: "Des atouts et un nouveau dynamisme",
          blocs: [
            { t: "texte", md: "Les espaces de faible densité ont des **atouts** de plus en plus recherchés : des paysages préservés, le calme, un logement moins cher. Ils attirent le **tourisme vert** (randonnée, gîtes, canoë, observation de la nature) et les sports d'hiver en montagne. Ils produisent une **agriculture de qualité**, protégée par des labels comme l'**AOP** (appellation d'origine protégée), et des énergies renouvelables (éoliennes, barrages, bois)." },
            { t: "tableau", titre: "Des fromages AOP, ambassadeurs des montagnes", entetes: ["Fromage AOP", "Massif", "Département ou région"], lignes: [["Roquefort", "Massif central", "Aveyron"], ["Comté", "Jura", "Doubs, Jura"], ["Beaufort", "Alpes", "Savoie"], ["Ossau-iraty", "Pyrénées", "Pays basque, Béarn"]] },
            { t: "definition", terme: "Néorural", md: "Un citadin qui s'installe à la campagne pour y vivre, souvent à la recherche d'un meilleur cadre de vie. Le **télétravail** et la **fibre** lui permettent parfois de garder son emploi à distance." },
            { t: "exemple", titre: "Étude de cas : un village de Lozère", etapes: ["**Contrainte** : le dernier médecin du village part à la retraite sans successeur, c'est un désert médical.", "**Atout** : les randonneurs du chemin de Stevenson dorment au gîte et achètent le fromage local.", "**Dynamique** : des télétravailleurs venus de Montpellier, attirés par le calme et la fibre, rouvrent une classe de l'école.", "**Bilan** : contraintes et atouts se mêlent ; l'avenir dépend des services et des connexions."] },
            { t: "verifie", q: "Comment appelle-t-on le tourisme à la campagne, fondé sur la nature, la randonnée et les gîtes ?", choix: ["Le tourisme balnéaire", "Le tourisme vert", "Le tourisme d'affaires"], bonne: 1, explication: "Le tourisme vert (ou rural) valorise la nature et les paysages. Le tourisme balnéaire concerne les plages, le tourisme d'affaires les congrès et salons." },
          ],
        },
        {
          titre: "Protéger et soutenir ces territoires",
          blocs: [
            { t: "texte", md: "Les **parcs naturels** protègent et valorisent ces espaces. La France compte **11 parcs nationaux** (Vanoise, le premier en 1963, Cévennes, Pyrénées, Écrins, Mercantour, Calanques…) où la nature est strictement protégée. Elle compte aussi plus de cinquante **parcs naturels régionaux** : des territoires habités où l'on cherche à concilier protection des paysages et développement économique (tourisme, artisanat, produits locaux)." },
            { t: "liste", titre: "Les politiques publiques pour les espaces ruraux fragiles", items: ["La **loi Montagne** (1985) protège et aide les territoires de montagne.", "Les **zones de revitalisation rurale** accordent des aides fiscales aux entreprises qui s'y installent (devenues France Ruralités Revitalisation en 2024).", "Les **maisons France services** regroupent en un seul lieu La Poste, les impôts, la CAF, Pôle emploi devenu France Travail.", "Le déploiement de la **fibre** et des antennes mobiles réduit les zones blanches.", "Des aides aident les jeunes médecins à s'installer, et des maisons de santé regroupent plusieurs soignants."] },
            { t: "astuce", md: "Pour décrire un espace de faible densité au DNB, fais toujours **deux colonnes** au brouillon : contraintes (enclavement, services, vieillissement) et atouts (paysages, tourisme vert, AOP, néoruraux). Une bonne réponse montre les deux." },
          ],
        },
      ],
      bilan: "Peu peuplés mais pleins de ressources, les espaces de faible densité cumulent enclavement et éloignement des services, mais séduisent de plus en plus par leurs paysages, leurs produits et leur calme.",
    },
    "3e-geographie-04-amenager-territoire": {
      accroche: "En 2017, Thomas, étudiant à Bordeaux, a vu son trajet vers Paris passer de plus de 3 heures à environ 2 heures grâce à une nouvelle ligne TGV. Pendant ce temps, à Agen, sa cousine attend toujours une ligne à grande vitesse. Qui décide de construire une ligne, une autoroute ou un hôpital ? Et pourquoi ici plutôt que là ?",
      objectifs: [
        "Définir l'aménagement du territoire et identifier ses acteurs",
        "Connaître l'organisation territoriale de la France et la décentralisation",
        "Analyser un aménagement : objectifs, financement, débats",
      ],
      sections: [
        {
          titre: "Pourquoi aménager ? Un territoire inégal",
          blocs: [
            { t: "definition", terme: "Aménagement du territoire", md: "L'ensemble des actions menées par les pouvoirs publics pour **organiser l'espace**, **réduire les inégalités** entre territoires, renforcer leur **attractivité** et respecter l'**environnement**." },
            { t: "texte", md: "Le territoire français est **inégal**. **Paris** concentre richesses et pouvoirs face au reste du pays. Les **métropoles** dynamiques s'opposent aux **villes moyennes** et aux **campagnes isolées**. L'**Ouest** et le **Sud**, attractifs, gagnent des habitants, alors que le **Nord-Est**, marqué par la désindustrialisation, en perd. Même dans une ville, des **quartiers populaires** côtoient des centres rénovés.\n\nL'aménagement cherche à donner à chacun, où qu'il vive, un accès aux transports, aux soins, à l'éducation et à l'emploi." },
            { t: "frise", titre: "Quelques grandes étapes de l'aménagement", evenements: [{ date: 1963, label: "Création de la DATAR", detail: "L'État crée un organisme pour aménager le territoire et rééquilibrer Paris et la province." }, { date: 1981, label: "Première LGV Paris-Lyon", detail: "Le TGV relie Paris à Lyon en 2 heures environ." }, { date: 1982, label: "Lois de décentralisation", detail: "Lois Defferre (1982-1983) : les collectivités gagnent des pouvoirs." }, { date: 2016, label: "13 régions métropolitaines", detail: "Les 22 anciennes régions sont regroupées en 13." }, { date: 2018, label: "Notre-Dame-des-Landes abandonné", detail: "Le projet d'aéroport près de Nantes est abandonné ; lancement d'Action cœur de ville." }, { date: 2020, label: "Création de l'ANCT", detail: "Agence nationale de la cohésion des territoires." }] },
          ],
        },
        {
          titre: "Qui aménage ? Des acteurs nombreux",
          blocs: [
            { t: "texte", md: "Un grand projet d'aménagement n'a jamais un seul responsable. L'**État** décide des grands équipements nationaux (ministères, ANCT). Les **collectivités territoriales** aménagent à leur échelle. L'**Union européenne** finance des projets grâce au **FEDER** (Fonds européen de développement régional). Les **entreprises** construisent et parfois exploitent. Enfin, les **citoyens** donnent leur avis lors des **enquêtes publiques** et peuvent s'opposer à un projet par des **associations**." },
            { t: "schema", titre: "Les acteurs d'un projet d'aménagement", legende: "Tous ces acteurs financent, décident, construisent ou donnent leur avis. Ils ne sont pas toujours d'accord.", svg: `<svg viewBox="0 0 400 262"><rect class="aplat trait" x="135" y="105" width="130" height="50" rx="8"/><text class="texte" x="200" y="126" text-anchor="middle">Projet</text><text class="texte" x="200" y="144" text-anchor="middle">d'aménagement</text><rect class="aplat-papier trait" x="4" y="12" width="128" height="30" rx="6"/><text class="texte" x="68" y="32" text-anchor="middle">Union européenne</text><text class="texte-petit" x="68" y="56" text-anchor="middle">fonds FEDER</text><rect class="aplat-papier trait" x="145" y="12" width="110" height="30" rx="6"/><text class="texte" x="200" y="32" text-anchor="middle">État</text><text class="texte-petit" x="200" y="56" text-anchor="middle">ministères, ANCT</text><rect class="aplat-papier trait" x="280" y="12" width="110" height="30" rx="6"/><text class="texte" x="335" y="32" text-anchor="middle">Région</text><text class="texte-petit" x="335" y="56" text-anchor="middle">lycées, TER</text><rect class="aplat-papier trait" x="5" y="115" width="100" height="30" rx="6"/><text class="texte" x="55" y="135" text-anchor="middle">Citoyens</text><text class="texte-petit" x="55" y="162" text-anchor="middle">enquête publique</text><rect class="aplat-papier trait" x="295" y="115" width="100" height="30" rx="6"/><text class="texte" x="345" y="135" text-anchor="middle">Associations</text><text class="texte-petit" x="345" y="162" text-anchor="middle">débats, recours</text><rect class="aplat-papier trait" x="15" y="210" width="110" height="30" rx="6"/><text class="texte" x="70" y="230" text-anchor="middle">Département</text><text class="texte-petit" x="70" y="255" text-anchor="middle">collèges, routes</text><rect class="aplat-papier trait" x="145" y="210" width="110" height="30" rx="6"/><text class="texte" x="200" y="230" text-anchor="middle">Communes</text><text class="texte-petit" x="200" y="255" text-anchor="middle">écoles, permis</text><rect class="aplat-papier trait" x="275" y="210" width="110" height="30" rx="6"/><text class="texte" x="330" y="230" text-anchor="middle">Entreprises</text><text class="texte-petit" x="330" y="255" text-anchor="middle">construisent</text><path class="trait-fin" d="M80 62 L150 102" marker-end="url(#fl)"/><path class="trait-fin" d="M200 62 L200 101" marker-end="url(#fl)"/><path class="trait-fin" d="M320 62 L250 102" marker-end="url(#fl)"/><path class="trait-fin" d="M105 130 L131 130" marker-end="url(#fl)"/><path class="trait-fin" d="M295 130 L269 130" marker-end="url(#fl)"/><path class="trait-fin" d="M80 208 L150 159" marker-end="url(#fl)"/><path class="trait-fin" d="M200 208 L200 159" marker-end="url(#fl)"/><path class="trait-fin" d="M320 208 L250 159" marker-end="url(#fl)"/></svg>` },
            { t: "verifie", q: "L'Union européenne participe-t-elle à des aménagements en France ?", choix: ["Non, elle ne s'occupe que des lois", "Oui, notamment grâce au FEDER", "Seulement outre-mer"], bonne: 1, explication: "Le FEDER finance des routes, des tramways, le haut débit ou la rénovation de friches, en métropole comme outre-mer." },
          ],
        },
        {
          titre: "L'organisation territoriale et la décentralisation",
          blocs: [
            { t: "texte", md: "La France compte **18 régions** (13 en métropole depuis 2016, 5 outre-mer), **101 départements** et environ **35 000 communes**. Les communes se regroupent en **intercommunalités** pour gérer ensemble l'eau, les déchets ou les transports : communautés de communes, communautés d'agglomération et, autour des plus grandes villes, **métropoles**." },
            { t: "definition", terme: "Décentralisation", md: "Le **transfert de pouvoirs** de l'État vers les **collectivités territoriales** (régions, départements, communes), dirigées par des élus locaux. Elle a été lancée par les **lois Defferre de 1982-1983**." },
            { t: "tableau", titre: "Qui fait quoi ? Les compétences des collectivités", entetes: ["Collectivité", "Elle gère par exemple…", "Élus"], lignes: [["Région", "Lycées, trains TER, aides aux entreprises", "Conseil régional"], ["Département", "Collèges, routes départementales, aide sociale", "Conseil départemental"], ["Intercommunalité", "Collecte des déchets, transports urbains", "Conseil communautaire"], ["Commune", "Écoles primaires, permis de construire, état civil", "Conseil municipal, maire"]] },
            { t: "astuce", md: "Pense à ton parcours scolaire : l'**école** dépend de la **commune**, ton **collège** du **département**, le futur **lycée** de la **région**. Tu as déjà retenu trois compétences !" },
          ],
        },
        {
          titre: "Aménager, c'est aussi débattre",
          blocs: [
            { t: "texte", md: "Les outils de l'aménagement sont variés : **lignes à grande vitesse** et autoroutes pour désenclaver, **Grand Paris Express** (environ 200 km de métro automatique pour relier les banlieues entre elles sans passer par Paris), rénovation des **quartiers prioritaires de la politique de la ville** (environ 1 500 quartiers aux revenus faibles), **fibre** pour les campagnes, **Action cœur de ville** pour les villes moyennes." },
            { t: "carte", fond: "france", titre: "Les lignes à grande vitesse depuis Paris", reperes: [{ nom: "Paris", lat: 48.857, lon: 2.352 }, { nom: "Lyon", lat: 45.764, lon: 4.836 }, { nom: "Marseille", lat: 43.296, lon: 5.370 }, { nom: "Lille", lat: 50.629, lon: 3.057 }, { nom: "Strasbourg", lat: 48.573, lon: 7.752 }, { nom: "Bordeaux", lat: 44.838, lon: -0.579 }, { nom: "Rennes", lat: 48.117, lon: -1.678 }, { nom: "Notre-Dame-des-Landes", lat: 47.355, lon: -1.718 }], traits: [{ de: [48.857, 2.352], a: [45.764, 4.836], label: "1981" }, { de: [45.764, 4.836], a: [43.296, 5.370], label: "2001" }, { de: [48.857, 2.352], a: [50.629, 3.057], label: "1993" }, { de: [48.857, 2.352], a: [48.573, 7.752], label: "2007-2016" }, { de: [48.857, 2.352], a: [44.838, -0.579], label: "2017" }, { de: [48.857, 2.352], a: [48.117, -1.678], label: "2017" }], legende: "Les traits schématisent les grandes LGV, avec une date clé de leur mise en service. Le réseau en étoile autour de Paris montre le poids de la capitale. Notre-Dame-des-Landes : projet d'aéroport abandonné en 2018." },
            { t: "exemple", titre: "Analyser un aménagement : la LGV Sud Europe Atlantique", etapes: ["**Objectif** : mettre Bordeaux à environ 2 h de Paris et renforcer l'attractivité du Sud-Ouest.", "**Acteurs et financement** : l'État, les collectivités, l'Union européenne et une entreprise privée qui exploite la ligne.", "**Effets** : Bordeaux attire de nouveaux habitants et des entreprises ; les prix des logements montent.", "**Débats** : des communes ont contesté le tracé (bruit, terres agricoles) et les villes moyennes sans arrêt TGV se sentent oubliées."] },
            { t: "texte", md: "Les aménagements provoquent souvent des **conflits** : coût, destruction de terres agricoles ou de zones humides, bruit. À **Notre-Dame-des-Landes**, près de Nantes, un projet d'aéroport a été contesté pendant des années par des agriculteurs et des écologistes, qui occupaient le site. Le gouvernement l'a **abandonné en 2018**." },
            { t: "verifie", q: "Pourquoi le projet d'aéroport de Notre-Dame-des-Landes a-t-il été abandonné ?", choix: ["Parce que Nantes n'avait pas d'habitants", "À cause d'une forte opposition liée à l'environnement et aux terres agricoles", "Parce que l'Union européenne l'a interdit"], bonne: 1, explication: "Le projet menaçait des terres agricoles et des zones humides. Après des années d'opposition et d'occupation du site, l'État a renoncé en 2018." },
          ],
        },
      ],
      bilan: "Aménager le territoire, c'est réduire les inégalités entre les territoires grâce à des acteurs multiples (État, collectivités, UE, entreprises, citoyens) qui doivent sans cesse concilier développement et environnement.",
    },
    "3e-geographie-05-outre-mer": {
      accroche: "Il est 10 heures à Kourou, en Guyane, quand une fusée Ariane s'élève au-dessus de la forêt amazonienne. À Paris, en été, il est déjà 15 heures. Et à Saint-Denis de La Réunion, il est 17 heures : Inès, 13 ans, sort du collège. Ces trois lieux sont en France : un pays sur lequel le soleil ne se couche jamais.",
      objectifs: [
        "Localiser les territoires ultramarins et distinguer DROM et COM",
        "Expliquer leurs contraintes : éloignement, insularité, risques, retard de développement",
        "Identifier leurs atouts (ZEE, biodiversité, espace) et les aménagements qui y répondent",
      ],
      sections: [
        {
          titre: "Une France répartie sur trois océans",
          blocs: [
            { t: "texte", md: "Environ **2,8 millions** de Français vivent **outre-mer**, dans une douzaine de territoires répartis dans l'**Atlantique**, l'**océan Indien** et le **Pacifique**. Ce sont pour la plupart d'anciennes colonies. Tous sont des **îles**, sauf la **Guyane**, située sur le continent sud-américain, entre le Suriname et le Brésil." },
            { t: "carte", fond: "monde", titre: "Les territoires ultramarins français", reperes: [{ nom: "Paris", lat: 48.857, lon: 2.352 }, { nom: "Guadeloupe", lat: 16.241, lon: -61.533 }, { nom: "Martinique", lat: 14.616, lon: -61.059 }, { nom: "Guyane", lat: 4.922, lon: -52.313 }, { nom: "La Réunion", lat: -20.882, lon: 55.450 }, { nom: "Mayotte", lat: -12.781, lon: 45.228 }, { nom: "Saint-Pierre-et-Miquelon", lat: 46.780, lon: -56.175 }, { nom: "Polynésie française", lat: -17.535, lon: -149.569 }, { nom: "Nouvelle-Calédonie", lat: -22.276, lon: 166.458 }, { nom: "Wallis-et-Futuna", lat: -13.282, lon: -176.176 }], legende: "Les cinq DROM : Guadeloupe et Martinique (Antilles, mer des Caraïbes), Guyane (Amérique du Sud), La Réunion et Mayotte (océan Indien). Les autres repères sont des COM ou des territoires à statut particulier." },
            { t: "tableau", titre: "DROM et COM : deux statuts", entetes: ["", "DROM", "COM"], lignes: [["Sens du sigle", "Départements et régions d'outre-mer", "Collectivités d'outre-mer"], ["Territoires", "**Guadeloupe, Martinique, Guyane, La Réunion, Mayotte**", "Polynésie française, Wallis-et-Futuna, Saint-Pierre-et-Miquelon, Saint-Barthélemy, Saint-Martin"], ["Lois", "Lois françaises et européennes, comme en métropole", "Plus d'**autonomie** : lois adaptées, parfois propres"], ["Monnaie", "Euro", "Euro ou franc pacifique"]] },
            { t: "texte", md: "La **Nouvelle-Calédonie** a un statut particulier : ses habitants ont voté trois fois sur leur indépendance (référendums de **2018, 2020 et 2021**), et le « non » l'a emporté. S'y ajoutent les **Terres australes et antarctiques françaises**, sans habitants permanents." },
            { t: "verifie", q: "Quelle est la principale différence entre un DROM et une COM ?", choix: ["Un DROM est toujours une île", "Une COM a plus d'autonomie ; dans un DROM, les lois françaises s'appliquent comme en métropole", "Une COM ne fait pas partie de la France"], bonne: 1, explication: "Les DROM fonctionnent comme les départements et régions de métropole. Les COM, elles, sont toujours françaises mais disposent d'une plus large autonomie. Attention : la Guyane, un DROM, n'est pas une île !" },
          ],
        },
        {
          titre: "Des contraintes spécifiques",
          blocs: [
            { t: "definition", terme: "Insularité", md: "Le fait d'être une **île**, et les contraintes qui en découlent : isolement, petite taille, dépendance aux bateaux et aux avions pour tout faire venir ou partir." },
            { t: "texte", md: "Les territoires ultramarins cumulent les difficultés. **L'éloignement** d'abord : La Réunion est à plus de **9 000 km** de Paris. **L'insularité** ensuite : presque tout est **importé** par bateau ou par avion, ce qui rend la **vie chère** (les prix alimentaires sont souvent bien plus élevés qu'en métropole). Le **chômage** y est environ **deux fois plus élevé** qu'en métropole, surtout chez les jeunes.\n\nCes territoires sont aussi très exposés aux **risques naturels** : cyclones, volcans, séismes." },
            { t: "tableau", titre: "Des territoires exposés aux risques", entetes: ["Risque", "Territoire", "Exemple"], lignes: [["Volcan très actif", "La Réunion", "Piton de la Fournaise, plusieurs éruptions par an"], ["Volcan", "Guadeloupe", "La Soufrière"], ["Volcan", "Martinique", "Éruption de la montagne Pelée en **1902** : la ville de Saint-Pierre est détruite"], ["Ouragan", "Saint-Martin", "Ouragan Irma en **2017**"], ["Cyclone", "Mayotte", "Cyclone Chido en **2024**, l'île est dévastée"]] },
            { t: "texte", md: "**Mayotte**, devenue le **101e département** en **2011**, est le territoire le plus pauvre de France. Sa population est très jeune, et une forte immigration arrive des Comores voisines. Près de quatre logements sur dix y sont des cases en tôle, souvent sans eau courante." },
            { t: "verifie", q: "Quelle est une conséquence directe de l'insularité pour les habitants des Antilles ou de La Réunion ?", choix: ["Des prix plus élevés, car beaucoup de produits sont importés", "Un climat froid", "L'absence de touristes"], bonne: 0, explication: "Une île doit faire venir par bateau ou par avion une grande partie de ce qu'elle consomme : le transport renchérit les produits, d'où la « vie chère »." },
          ],
        },
        {
          titre: "Des atouts pour la France entière",
          blocs: [
            { t: "definition", terme: "Zone économique exclusive (ZEE)", md: "L'espace maritime qui s'étend jusqu'à **200 milles marins** (environ 370 km) des côtes, où un État a le droit **exclusif** d'exploiter les ressources : poissons, pétrole, minerais." },
            { t: "texte", md: "Grâce à ses îles dispersées sur tous les océans, la France possède la **2e ZEE du monde** (environ **11 millions de km²**), juste après les États-Unis. ==Environ 97 % de cette ZEE se trouve outre-mer.== Chaque petite île, même isolée, ajoute un immense cercle d'océan.\n\nLes outre-mer offrent aussi une **biodiversité** exceptionnelle (forêt guyanaise, récifs coralliens et lagons de Nouvelle-Calédonie), un fort potentiel **touristique**, le **nickel** de Nouvelle-Calédonie (parmi les plus grandes réserves du monde) et des positions **stratégiques** pour l'armée française." },
            { t: "exemple", titre: "Étude de cas : Kourou, entre fusées et pauvreté", md: "À **Kourou**, en **Guyane**, le Centre spatial guyanais lance les fusées **Ariane** pour la France et l'Europe. Pourquoi là ? La base est **proche de l'équateur** : la rotation de la Terre y est la plus rapide, ce qui donne un « élan » gratuit aux fusées et économise du carburant. La mer à l'est permet aussi des lancements sans survoler de villes.\n\nMais à quelques kilomètres, des quartiers manquent d'eau courante et le chômage des jeunes est très élevé. L'outre-mer, c'est ce **contraste** entre atout stratégique et difficultés de développement." },
            { t: "graphique", type: "barres", titre: "Population de quelques territoires ultramarins (arrondie)", unite: "milliers d'hab.", donnees: [{ label: "La Réunion", valeur: 885 }, { label: "Guadeloupe", valeur: 380 }, { label: "Martinique", valeur: 350 }, { label: "Mayotte", valeur: 320 }, { label: "Guyane", valeur: 295 }, { label: "Polynésie", valeur: 280 }, { label: "Nouvelle-Calédonie", valeur: 270 }, { label: "Wallis-et-Futuna", valeur: 11 }, { label: "St-Pierre-et-Miquelon", valeur: 6 }] },
          ],
        },
        {
          titre: "Aménager les outre-mer",
          blocs: [
            { t: "texte", md: "Pour réduire les écarts avec la métropole, l'État, les collectivités et l'**Union européenne** (les DROM sont des « régions ultrapériphériques » de l'UE, très aidées par ses fonds) financent des **ports**, des **aéroports**, des écoles, des hôpitaux et des logements. À La Réunion, la **nouvelle route du Littoral**, en partie construite sur la mer, doit protéger les automobilistes des chutes de pierres de la falaise.\n\nLa **continuité territoriale** aide aussi les habitants à payer leurs billets d'avion vers la métropole, pour étudier, se soigner ou voir leur famille." },
            { t: "astuce", md: "Retiens les cinq DROM avec une phrase : « **G**entille **M**arie, **G**uide **R**éunionnaise de **M**ayotte » : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte." },
            { t: "attention", md: "Ne confonds pas **Guadeloupe** et **Guyane** ! La Guadeloupe est un archipel des Antilles, dans la mer des Caraïbes. La Guyane est un vaste territoire continental d'Amérique du Sud, couvert de forêt, presque aussi grand que le Portugal." },
          ],
        },
      ],
      bilan: "Dispersés sur trois océans, les territoires ultramarins font de la France une puissance maritime mondiale, mais leurs habitants affrontent éloignement, insularité, risques et vie chère, que l'aménagement cherche à compenser.",
    },
    "3e-geographie-06-union-europeenne": {
      accroche: "Chaque jour, Chloé, lycéenne à Strasbourg, prend le tramway qui franchit le Rhin jusqu'à Kehl, en Allemagne. Pas de douanier, pas de passeport, et elle paie son goûter en euros des deux côtés. Son frère étudie à Madrid grâce à Erasmus. Pour eux, l'Europe n'est pas une idée lointaine : c'est leur quotidien.",
      objectifs: [
        "Connaître les grandes étapes de la construction européenne et ses institutions",
        "Distinguer l'Union européenne, la zone euro et l'espace Schengen",
        "Décrire les inégalités du territoire européen et la politique de cohésion",
        "Expliquer ce que signifie appartenir à l'Union européenne",
      ],
      sections: [
        {
          titre: "De 6 à 27 : la construction européenne",
          blocs: [
            { t: "texte", md: "Après les deux guerres mondiales, des dirigeants européens veulent rendre la guerre impossible en unissant les économies. En **1957**, le **traité de Rome** crée la Communauté économique européenne (CEE) entre **6 pays** fondateurs : la **France**, l'**Allemagne de l'Ouest**, l'**Italie**, la **Belgique**, les **Pays-Bas** et le **Luxembourg**. L'Europe s'élargit ensuite peu à peu." },
            { t: "frise", titre: "Les grandes étapes", evenements: [{ date: 1957, label: "Traité de Rome", detail: "La CEE réunit 6 pays." }, { date: 1987, label: "Programme Erasmus", detail: "Les étudiants peuvent étudier dans un autre pays européen." }, { date: 1992, label: "Traité de Maastricht", detail: "Naissance de l'Union européenne et de la citoyenneté européenne." }, { date: 2002, label: "Pièces et billets en euros", detail: "L'euro entre dans les porte-monnaie." }, { date: 2004, label: "Grand élargissement à l'Est", detail: "Dix nouveaux pays, dont la Pologne et la Hongrie." }, { date: 2013, label: "Adhésion de la Croatie", detail: "Le dernier pays entré dans l'UE." }, { date: 2020, label: "Brexit", detail: "Le Royaume-Uni quitte l'UE le 31 janvier 2020." }] },
            { t: "carte", fond: "monde", titre: "Les 27 États de l'Union européenne et les sièges des institutions", cadre: [-11, 34, 35, 71], zones: ["FR", "DE", "IT", "BE", "NL", "LU", "IE", "DK", "GR", "ES", "PT", "AT", "FI", "SE", "PL", "CZ", "SK", "HU", "SI", "EE", "LV", "LT", "CY", "MT", "RO", "BG", "HR"], reperes: [{ nom: "Bruxelles", lat: 50.850, lon: 4.352 }, { nom: "Strasbourg", lat: 48.573, lon: 7.752 }, { nom: "Luxembourg", lat: 49.611, lon: 6.130 }, { nom: "Francfort", lat: 50.110, lon: 8.682 }], legende: "En couleur : les 27 États membres, environ 450 millions d'habitants. Le Royaume-Uni, la Suisse et la Norvège n'en font pas partie." },
          ],
        },
        {
          titre: "Qui décide dans l'Union européenne ?",
          blocs: [
            { t: "schema", titre: "Les institutions de l'UE et leurs sièges", legende: "La Commission propose les lois ; le Parlement et le Conseil de l'UE les votent ensemble. Les citoyens élisent les députés européens tous les 5 ans.", svg: `<svg viewBox="0 0 400 290"><rect class="aplat trait" x="110" y="8" width="180" height="54" rx="8"/><text class="texte" x="200" y="27" text-anchor="middle">Conseil européen</text><text class="texte-petit" x="200" y="42" text-anchor="middle">Bruxelles</text><text class="texte-petit" x="200" y="55" text-anchor="middle">les 27 chefs d'État</text><rect class="aplat-papier trait" x="10" y="98" width="120" height="54" rx="8"/><text class="texte" x="70" y="117" text-anchor="middle">Commission</text><text class="texte-pigment" x="70" y="133" text-anchor="middle">Bruxelles</text><text class="texte-petit" x="70" y="146" text-anchor="middle">propose les lois</text><rect class="aplat-papier trait" x="140" y="98" width="120" height="54" rx="8"/><text class="texte" x="200" y="117" text-anchor="middle">Parlement</text><text class="texte-pigment" x="200" y="133" text-anchor="middle">Strasbourg</text><text class="texte-petit" x="200" y="146" text-anchor="middle">720 députés</text><rect class="aplat-papier trait" x="270" y="98" width="120" height="54" rx="8"/><text class="texte" x="330" y="117" text-anchor="middle">Conseil de l'UE</text><text class="texte-pigment" x="330" y="133" text-anchor="middle">Bruxelles</text><text class="texte-petit" x="330" y="146" text-anchor="middle">les ministres</text><text class="texte-petit" x="275" y="168" text-anchor="middle">votent les lois ensemble</text><path class="pointille" d="M200 62 L200 96"/><text class="texte-petit" x="208" y="84">grandes orientations</text><rect class="aplat-papier trait" x="30" y="186" width="155" height="54" rx="8"/><text class="texte" x="107" y="205" text-anchor="middle">Cour de justice</text><text class="texte-pigment" x="107" y="221" text-anchor="middle">Luxembourg</text><text class="texte-petit" x="107" y="234" text-anchor="middle">fait respecter le droit</text><rect class="aplat-papier trait" x="215" y="186" width="155" height="54" rx="8"/><text class="texte" x="292" y="205" text-anchor="middle">Banque centrale</text><text class="texte-pigment" x="292" y="221" text-anchor="middle">Francfort</text><text class="texte-petit" x="292" y="234" text-anchor="middle">gère l'euro</text><path class="trait" d="M200 262 L200 156" marker-end="url(#fl-p)"/><text class="texte" x="200" y="282" text-anchor="middle">Les citoyens élisent les députés</text></svg>` },
            { t: "verifie", q: "Dans quelle ville siège le Parlement européen ?", choix: ["Bruxelles", "Strasbourg", "Francfort", "Luxembourg"], bonne: 1, explication: "Le Parlement européen siège à Strasbourg. Bruxelles accueille la Commission et le Conseil, Francfort la Banque centrale européenne, Luxembourg la Cour de justice." },
          ],
        },
        {
          titre: "Zone euro, espace Schengen : des territoires emboîtés",
          blocs: [
            { t: "definition", terme: "Espace Schengen", md: "Un espace de **libre circulation** des personnes : on y passe les frontières sans contrôle systématique. Il compte **29 États**, dont **4 hors de l'UE** (Suisse, Norvège, Islande, Liechtenstein). L'Irlande et Chypre n'en font pas partie." },
            { t: "tableau", titre: "Trois ensembles qui ne se superposent pas", entetes: ["Ensemble", "Nombre d'États", "Ce qu'il permet", "Exemples d'exceptions"], lignes: [["Union européenne", "27", "Marché commun, citoyenneté européenne, lois communes", "Le Royaume-Uni est parti en 2020"], ["Zone euro", "21 en 2026", "Une monnaie commune, l'euro", "La Pologne, la Suède ou le Danemark gardent leur monnaie"], ["Espace Schengen", "29", "Circuler sans contrôle aux frontières", "La Suisse en fait partie sans être dans l'UE"]] },
            { t: "attention", md: "Tous les pays de l'UE n'utilisent **pas** l'euro ! Et l'espace Schengen n'est pas l'UE : la **Suisse** et la **Norvège** en font partie sans être membres de l'Union." },
          ],
        },
        {
          titre: "Un territoire inégal, une politique de cohésion",
          blocs: [
            { t: "texte", md: "Le territoire européen est très **inégal**. Un axe concentre population, villes, ports et richesses : la **dorsale européenne** (ou **mégalopole**), qui s'étire de **Londres** à **Milan** en passant par le Benelux et la vallée du Rhin. Les régions du Sud, de l'Est et les îles sont plus pauvres : le PIB par habitant du **Luxembourg** est plusieurs fois supérieur à celui de la **Bulgarie**.\n\nCes écarts se sont creusés après **2004**, quand des pays de l'Est, beaucoup moins riches après des décennies de régime communiste, sont entrés dans l'UE." },
            { t: "carte", fond: "monde", titre: "La dorsale européenne", cadre: [-6, 42, 16, 56], reperes: [{ nom: "Londres", lat: 51.507, lon: -0.128 }, { nom: "Amsterdam", lat: 52.370, lon: 4.895 }, { nom: "Bruxelles", lat: 50.850, lon: 4.352 }, { nom: "Francfort", lat: 50.110, lon: 8.682 }, { nom: "Milan", lat: 45.464, lon: 9.190 }], traits: [{ de: [51.507, -0.128], a: [45.464, 9.190], label: "dorsale" }], legende: "De Londres à Milan, la dorsale relie les grandes métropoles, les ports de la mer du Nord et la vallée du Rhin." },
            { t: "definition", terme: "Politique de cohésion", md: "La politique européenne qui aide les régions les moins riches à rattraper leur retard, grâce à des fonds comme le **FEDER** (Fonds européen de développement régional) et le **Fonds social européen**. Avec la **PAC** (politique agricole commune, qui soutient les agriculteurs), elle représente environ deux tiers du budget européen." },
            { t: "exemple", titre: "La France et les fonds européens", md: "La France est le **premier bénéficiaire de la PAC** : ses agriculteurs reçoivent environ 9 milliards d'euros par an. Le FEDER finance aussi des tramways, la fibre ou la rénovation de friches dans le bassin minier du Nord, en Guyane ou à La Réunion." },
          ],
        },
        {
          titre: "Se sentir européen",
          blocs: [
            { t: "texte", md: "Le traité de **Maastricht** a créé la **citoyenneté européenne** : un Français peut s'installer, travailler, étudier dans tout pays de l'UE, et voter aux élections municipales et européennes là où il habite. Des symboles rassemblent les Européens : le drapeau aux **12 étoiles**, l'hymne (l'*Ode à la joie* de Beethoven), la journée de l'Europe le **9 mai**. Le programme **Erasmus**, créé en **1987**, a permis à des millions de jeunes d'étudier à l'étranger.\n\nMais tous les citoyens ne sont pas convaincus : l'**euroscepticisme** critique une Europe jugée trop lointaine. Le **Brexit** a montré qu'un pays peut quitter l'Union." },
            { t: "verifie", q: "Quel pays fait partie de l'espace Schengen sans être membre de l'UE ?", choix: ["L'Irlande", "La Suisse", "La Pologne"], bonne: 1, explication: "La Suisse est dans Schengen mais pas dans l'UE. L'Irlande est dans l'UE mais pas dans Schengen. La Pologne est dans les deux." },
          ],
        },
      ],
      bilan: "Née à 6 en 1957, l'Union européenne réunit aujourd'hui 27 États et 450 millions d'habitants : un territoire de libre circulation, de solidarité entre régions et d'appartenance commune, qui reste inégal et débattu.",
    },
    "3e-geographie-07-france-europe-monde": {
      accroche: "Été 2024 : pendant les Jeux olympiques de Paris, des milliards de téléspectateurs regardent la Seine, la tour Eiffel et le Grand Palais. Au même moment, un Airbus assemblé à Toulouse décolle pour l'Asie, et à New York, le représentant de la France siège au Conseil de sécurité de l'ONU. Comment un pays qui compte moins de 1 % de l'humanité pèse-t-il autant dans le monde ?",
      objectifs: [
        "Décrire les fondements de la puissance française : politique, militaire, économique, culturelle",
        "Distinguer hard power et soft power",
        "Évaluer la place de l'Union européenne dans le monde",
        "Identifier les limites de la puissance de la France et de l'UE",
      ],
      sections: [
        {
          titre: "Une puissance moyenne à influence mondiale",
          blocs: [
            { t: "texte", md: "Avec environ **68 millions** d'habitants, la France représente **moins de 1 %** de la population mondiale. Pourtant, elle se classe parmi les **7 premières économies** du monde et fait entendre sa voix sur tous les continents. Les géographes la décrivent comme une ==puissance moyenne à influence mondiale==." },
            { t: "graphique", type: "barres", titre: "Population comparée (arrondie)", unite: "millions d'hab.", donnees: [{ label: "Inde", valeur: 1450 }, { label: "Chine", valeur: 1410 }, { label: "Union européenne", valeur: 450 }, { label: "États-Unis", valeur: 340 }, { label: "France", valeur: 68 }] },
            { t: "definition", terme: "Puissance", md: "La capacité d'un État à **agir** et à **influencer** les autres États, par la force, l'économie, la diplomatie ou la culture." },
          ],
        },
        {
          titre: "Les fondements de la puissance française",
          blocs: [
            { t: "definition", terme: "Hard power et soft power", md: "Le **hard power** (« puissance dure ») repose sur la **contrainte** : armée, arme nucléaire, sanctions économiques. Le **soft power** (« puissance douce ») repose sur l'**influence** et l'attraction : langue, culture, image, valeurs." },
            { t: "texte", md: "**Puissance politique et militaire** : la France est l'un des **5 membres permanents du Conseil de sécurité de l'ONU**, avec les États-Unis, la Russie, la Chine et le Royaume-Uni. Elle dispose du **droit de veto**, qui lui permet de bloquer une décision. Elle possède l'**arme nucléaire** et une armée capable d'intervenir loin, grâce à l'outre-mer et à des bases à l'étranger (Djibouti, Émirats arabes unis).\n\n**Puissance maritime** : elle possède la **2e ZEE du monde**. **Puissance économique** : de grandes entreprises mondiales (Airbus, L'Oréal, LVMH, TotalEnergies) et **Paris**, ville mondiale." },
            { t: "carte", fond: "monde", titre: "La France, une présence mondiale", zones: ["FR", "US", "RU", "CN", "GB"], reperes: [{ nom: "Paris", lat: 48.857, lon: 2.352 }, { nom: "New York (siège de l'ONU)", lat: 40.749, lon: -73.968 }, { nom: "Djibouti", lat: 11.589, lon: 43.145 }, { nom: "Abou Dabi", lat: 24.453, lon: 54.377 }, { nom: "Kourou", lat: 5.159, lon: -52.650 }, { nom: "La Réunion", lat: -20.882, lon: 55.450 }, { nom: "Nouméa", lat: -22.276, lon: 166.458 }, { nom: "Papeete", lat: -17.535, lon: -149.569 }], legende: "En couleur : les 5 membres permanents du Conseil de sécurité de l'ONU. Repères : bases militaires françaises (Djibouti, Abou Dabi) et territoires d'outre-mer qui donnent à la France une présence sur tous les océans." },
            { t: "texte", md: "**Influence culturelle** : la **francophonie** rassemble environ **320 millions** de francophones dans le monde, et l'Organisation internationale de la Francophonie réunit des dizaines d'États. La France a l'un des **trois premiers réseaux diplomatiques** du monde, des lycées français sur tous les continents, une gastronomie et une mode célèbres. Elle est la **première destination touristique mondiale** (environ 100 millions de visiteurs étrangers), et le **Louvre** est le musée le plus visité du monde." },
            { t: "tableau", titre: "Classer les atouts de la France", entetes: ["Atout", "Forme de puissance", "Hard ou soft ?"], lignes: [["Arme nucléaire", "Militaire", "Hard power"], ["Siège permanent à l'ONU, droit de veto", "Diplomatique", "Hard power"], ["Airbus, LVMH, TotalEnergies", "Économique", "Les deux"], ["Francophonie, Louvre, JO de Paris 2024", "Culturelle", "Soft power"]] },
            { t: "verifie", q: "Lequel de ces pays n'est PAS membre permanent du Conseil de sécurité de l'ONU ?", choix: ["Le Royaume-Uni", "L'Allemagne", "La Chine", "La Russie"], bonne: 1, explication: "Les 5 membres permanents sont les États-Unis, la Russie, la Chine, le Royaume-Uni et la France, vainqueurs de la Seconde Guerre mondiale. L'Allemagne n'en fait pas partie." },
          ],
        },
        {
          titre: "L'Union européenne : un géant économique",
          blocs: [
            { t: "texte", md: "Avec environ **450 millions** d'habitants, l'**Union européenne** est la **première puissance commerciale** du monde : c'est elle qui exporte et importe le plus de biens et de services. L'**euro** est la **deuxième monnaie mondiale**, après le dollar. L'UE et ses États membres sont le **premier donateur d'aide au développement** de la planète.\n\nL'UE impose aussi ses **normes** au reste du monde : pour vendre aux Européens, une entreprise chinoise ou américaine doit respecter les règles européennes de sécurité, d'environnement ou de protection des données personnelles (RGPD)." },
            { t: "exemple", titre: "Un Airbus, symbole de coopération européenne", md: "L'Airbus assemblé à Toulouse est un avion **européen** : ses ailes sont fabriquées au Royaume-Uni, des tronçons de fuselage en Allemagne, d'autres pièces en Espagne. Ensemble, les Européens rivalisent avec l'américain Boeing. C'est à la fois la **puissance économique française** et la **coopération européenne** qui s'exportent." },
          ],
        },
        {
          titre: "Des limites à la puissance",
          blocs: [
            { t: "texte", md: "L'UE a des faiblesses. Elle n'a **pas d'armée commune** : sa défense dépend surtout des armées nationales et de l'OTAN. En politique étrangère, les décisions se prennent souvent à l'**unanimité** des 27 : un seul pays peut tout bloquer. L'UE dépend des importations d'énergie, et son poids démographique recule face à l'Asie et à l'Afrique. On dit parfois qu'elle est ==« un géant économique mais un nain politique »==." },
            { t: "texte", md: "La France, elle, pèse peu face aux **États-Unis** et à la **Chine**. Elle est très **endettée**, a perdu une partie de son industrie, et son influence est contestée en **Afrique** : ses soldats ont dû quitter le **Mali**, le **Burkina Faso** et le **Niger** entre 2022 et 2023, à la demande des nouveaux pouvoirs militaires." },
            { t: "verifie", q: "Pourquoi dit-on que l'UE est un « géant économique mais un nain politique » ?", choix: ["Parce qu'elle a peu d'habitants", "Parce qu'elle commerce énormément mais peine à parler d'une seule voix et n'a pas d'armée commune", "Parce qu'elle n'a pas de monnaie"], bonne: 1, explication: "Première puissance commerciale, l'UE est un géant économique. Mais sans armée commune et avec des décisions à l'unanimité en politique étrangère, son action politique reste limitée." },
            { t: "astuce", md: "Au DNB, pour un développement construit sur la puissance française, organise ton texte en deux temps : **des atouts** (hard power puis soft power, avec un exemple chacun) puis **des limites**. Termine en rappelant que l'UE démultiplie la puissance de la France." },
          ],
        },
      ],
      bilan: "La France est une puissance moyenne à influence mondiale, grâce à son siège permanent à l'ONU, son armée, sa ZEE et son rayonnement culturel ; l'Union européenne, géant commercial, l'aide à peser, même si elle reste un acteur politique divisé.",
    },
    "3e-geographie-08-reperes-methodes": {
      accroche: "Jour du DNB, épreuve d'histoire-géographie. Sacha retourne sa copie : « Sur le fond de carte, localisez trois métropoles et le plus long fleuve de France. » Puis : « Rédigez un développement construit. » Ses mains tremblent… mais il a un plan dans la tête. Ce chapitre, c'est ta boîte à outils pour ce jour-là.",
      objectifs: [
        "Localiser les régions et leurs chefs-lieux, les grandes villes, les fleuves, les massifs et les mers",
        "Localiser les États membres de l'UE et leurs capitales",
        "Réaliser un croquis avec une légende organisée",
        "Rédiger un développement construit et analyser un document",
      ],
      sections: [
        {
          titre: "Les 13 régions et leurs chefs-lieux",
          blocs: [
            { t: "carte", fond: "france", titre: "Les chefs-lieux des 13 régions métropolitaines", reperes: [{ nom: "Paris", lat: 48.857, lon: 2.352 }, { nom: "Lille", lat: 50.629, lon: 3.057 }, { nom: "Strasbourg", lat: 48.573, lon: 7.752 }, { nom: "Rouen", lat: 49.443, lon: 1.099 }, { nom: "Rennes", lat: 48.117, lon: -1.678 }, { nom: "Nantes", lat: 47.218, lon: -1.554 }, { nom: "Orléans", lat: 47.903, lon: 1.909 }, { nom: "Dijon", lat: 47.322, lon: 5.041 }, { nom: "Lyon", lat: 45.764, lon: 4.836 }, { nom: "Bordeaux", lat: 44.838, lon: -0.579 }, { nom: "Toulouse", lat: 43.605, lon: 1.444 }, { nom: "Marseille", lat: 43.296, lon: 5.370 }, { nom: "Ajaccio", lat: 41.919, lon: 8.738 }], legende: "Chaque région a un chef-lieu, où siège le conseil régional. Entraîne-toi à placer chaque ville dans sa région." },
            { t: "tableau", titre: "Régions et chefs-lieux", entetes: ["Région", "Chef-lieu", "Région", "Chef-lieu"], lignes: [["Île-de-France", "Paris", "Centre-Val de Loire", "Orléans"], ["Hauts-de-France", "Lille", "Bourgogne-Franche-Comté", "Dijon"], ["Grand Est", "Strasbourg", "Auvergne-Rhône-Alpes", "Lyon"], ["Normandie", "Rouen", "Nouvelle-Aquitaine", "Bordeaux"], ["Bretagne", "Rennes", "Occitanie", "Toulouse"], ["Pays de la Loire", "Nantes", "Provence-Alpes-Côte d'Azur", "Marseille"], ["Corse", "Ajaccio", "", ""]] },
            { t: "texte", md: "Les **10 premières aires urbaines** sont : Paris, Lyon, Marseille-Aix-en-Provence, Toulouse, Bordeaux, Lille, Nice, Nantes, Strasbourg et Rennes. N'oublie pas les **5 DROM** : Guadeloupe, Martinique, Guyane, La Réunion et Mayotte." },
          ],
        },
        {
          titre: "Fleuves, massifs et mers",
          blocs: [
            { t: "tableau", titre: "Les cinq grands fleuves", entetes: ["Fleuve", "Il se jette dans…", "À retenir"], lignes: [["**Loire**", "l'océan Atlantique", "Le plus long fleuve de France (environ 1 000 km)"], ["**Seine**", "la Manche", "Traverse Paris, embouchure au Havre"], ["**Garonne**", "l'océan Atlantique", "Par l'estuaire de la Gironde, après Toulouse et Bordeaux"], ["**Rhône**", "la mer Méditerranée", "Passe à Lyon, delta de la Camargue"], ["**Rhin**", "la mer du Nord", "Frontière avec l'Allemagne, passe à Strasbourg"]] },
            { t: "texte", md: "Les **montagnes jeunes** sont hautes, aux sommets pointus : les **Alpes**, avec le **mont Blanc** (environ **4 806 m**), le plus haut sommet de France, et les **Pyrénées**. Les **massifs anciens**, usés par l'érosion, ont des formes arrondies : le **Massif central**, le **Massif armoricain** (Bretagne), les **Vosges** et les **Ardennes**. Le **Jura**, plissé en même temps que les Alpes, est une montagne de moyenne altitude. Quatre façades maritimes bordent la France : la **mer du Nord**, la **Manche** (entre la France et le Royaume-Uni), l'**océan Atlantique** et la **mer Méditerranée**." },
            { t: "carte", fond: "france", titre: "Les grands massifs", reperes: [{ nom: "Mont Blanc (Alpes)", lat: 45.833, lon: 6.865 }, { nom: "Pyrénées", lat: 42.774, lon: -0.147 }, { nom: "Massif central", lat: 45.528, lon: 2.814 }, { nom: "Massif armoricain", lat: 48.410, lon: -3.930 }, { nom: "Vosges", lat: 47.901, lon: 7.098 }, { nom: "Jura", lat: 46.600, lon: 6.000 }, { nom: "Ardennes", lat: 49.900, lon: 4.700 }], legende: "Montagnes jeunes : Alpes, Pyrénées (et Jura, moins élevé). Massifs anciens : Massif central, Massif armoricain, Vosges, Ardennes." },
            { t: "verifie", q: "Dans quelle mer ou quel océan se jette le Rhône ?", choix: ["La Manche", "L'océan Atlantique", "La mer Méditerranée", "La mer du Nord"], bonne: 2, explication: "Le Rhône descend de Suisse, passe à Lyon et se jette dans la Méditerranée par le delta de la Camargue." },
          ],
        },
        {
          titre: "L'Union européenne : États et capitales",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quelques capitales de l'Union européenne", cadre: [-11, 34, 35, 66], zones: ["FR", "DE", "IT", "BE", "NL", "LU", "IE", "DK", "GR", "ES", "PT", "AT", "FI", "SE", "PL", "CZ", "SK", "HU", "SI", "EE", "LV", "LT", "CY", "MT", "RO", "BG", "HR"], reperes: [{ nom: "Paris", lat: 48.857, lon: 2.352 }, { nom: "Berlin", lat: 52.520, lon: 13.405 }, { nom: "Madrid", lat: 40.417, lon: -3.704 }, { nom: "Rome", lat: 41.903, lon: 12.496 }, { nom: "Lisbonne", lat: 38.722, lon: -9.139 }, { nom: "Amsterdam", lat: 52.370, lon: 4.895 }, { nom: "Varsovie", lat: 52.230, lon: 21.012 }, { nom: "Vienne", lat: 48.208, lon: 16.373 }, { nom: "Budapest", lat: 47.498, lon: 19.040 }, { nom: "Athènes", lat: 37.984, lon: 23.728 }, { nom: "Stockholm", lat: 59.329, lon: 18.069 }], legende: "En couleur : les 27 États membres. Ni la Suisse, ni la Norvège, ni le Royaume-Uni n'en font partie." },
            { t: "attention", md: "La capitale des **Pays-Bas** est **Amsterdam**, même si le gouvernement siège à La Haye. Et la **Norvège**, la **Suisse** et le **Royaume-Uni** sont en Europe mais **pas** dans l'Union européenne." },
          ],
        },
        {
          titre: "Réaliser un croquis",
          blocs: [
            { t: "definition", terme: "Croquis", md: "Une représentation **simplifiée** d'un territoire qui répond à un **sujet** : on ne dessine pas tout, on choisit les informations utiles et on les organise dans une **légende** structurée." },
            { t: "schema", titre: "Les trois familles de figurés", legende: "Ponctuels pour des lieux précis, linéaires pour des axes et des flux, de surface pour des étendues.", svg: `<svg viewBox="0 0 400 210"><text class="texte" x="68" y="22" text-anchor="middle">Ponctuels</text><text class="texte" x="200" y="22" text-anchor="middle">Linéaires</text><text class="texte" x="332" y="22" text-anchor="middle">De surface</text><line class="pointille" x1="135" y1="35" x2="135" y2="200"/><line class="pointille" x1="265" y1="35" x2="265" y2="200"/><circle cx="34" cy="58" r="10" class="aplat-fort"/><text class="texte-petit" x="54" y="62">métropole</text><circle cx="34" cy="98" r="5" class="aplat-fort"/><text class="texte-petit" x="54" y="102">ville</text><path d="M26 146 L42 146 L34 132 Z" class="aplat-fort"/><text class="texte-petit" x="54" y="144">aéroport</text><rect x="27" y="174" width="14" height="14" class="aplat-fort"/><text class="texte-petit" x="54" y="185">port</text><rect x="150" y="56" width="100" height="5" class="aplat-fort"/><text class="texte-petit" x="200" y="80" text-anchor="middle">LGV, autoroute</text><line class="pointille" x1="150" y1="110" x2="250" y2="110"/><text class="texte-petit" x="200" y="128" text-anchor="middle">frontière</text><path class="trait" d="M150 160 L244 160" marker-end="url(#fl-p)"/><text class="texte-petit" x="200" y="182" text-anchor="middle">flux (échanges)</text><rect x="287" y="44" width="90" height="40" class="aplat trait"/><text class="texte-petit" x="332" y="100" text-anchor="middle">région agricole</text><rect x="287" y="124" width="90" height="40" class="trait"/><g class="trait-fin"><line x1="297" y1="124" x2="297" y2="164"/><line x1="307" y1="124" x2="307" y2="164"/><line x1="317" y1="124" x2="317" y2="164"/><line x1="327" y1="124" x2="327" y2="164"/><line x1="337" y1="124" x2="337" y2="164"/><line x1="347" y1="124" x2="347" y2="164"/><line x1="357" y1="124" x2="357" y2="164"/><line x1="367" y1="124" x2="367" y2="164"/></g><text class="texte-petit" x="332" y="180" text-anchor="middle">faible densité</text></svg>` },
            { t: "etapes", titre: "La méthode du croquis au DNB", items: [{ titre: "Lire le sujet", md: "Souligne les mots-clés : que dois-tu montrer ? Le titre du croquis reprend le sujet." }, { titre: "Organiser la légende", md: "**2 ou 3 parties titrées** qui répondent au sujet, du plus important au moins important." }, { titre: "Choisir les figurés", md: "Ponctuels (points, symboles), linéaires (traits, flèches), de surface (aplats de couleur, hachures)." }, { titre: "Dessiner", md: "Commence par les surfaces (crayons de couleur), puis les lignes, puis les points. Travaille proprement." }, { titre: "Nommer", md: "Écris la nomenclature (villes, fleuves, mers) lisiblement, à l'horizontale, en majuscules pour les mers." }] },
            { t: "exemple", titre: "Une légende organisée : « Les aires urbaines, une France mondialisée »", etapes: ["**I. Des métropoles qui commandent le territoire** : cercles de tailles différentes pour Paris et les grandes métropoles.", "**II. Des espaces reliés au monde** : traits épais pour les LGV, flèches pour les flux, symboles pour les aéroports et les ports.", "**III. Des espaces en marge** : un figuré de surface (hachures) pour la diagonale des faibles densités."] },
            { t: "verifie", q: "Pour représenter une ligne à grande vitesse sur un croquis, quel figuré choisis-tu ?", choix: ["Un figuré ponctuel", "Un figuré linéaire", "Un figuré de surface"], bonne: 1, explication: "Une LGV est un axe : elle se représente par un trait, donc un figuré linéaire. Les figurés ponctuels servent aux lieux, ceux de surface aux étendues." },
          ],
        },
        {
          titre: "Rédiger un développement construit et analyser un document",
          blocs: [
            { t: "etapes", titre: "Le développement construit, étape par étape", items: [{ titre: "Lire le sujet", md: "Souligne les mots-clés et repère les limites (lieu, thème)." }, { titre: "Chercher au brouillon", md: "Note des idées et des **exemples localisés**, puis classe-les en 2 ou 3 parties." }, { titre: "Introduction", md: "Définis les mots du sujet et annonce ton plan." }, { titre: "Paragraphes", md: "Un paragraphe = une idée + un exemple précis + du vocabulaire géographique. Va à la ligne entre chaque." }, { titre: "Conclusion et relecture", md: "Réponds au sujet en une ou deux phrases, puis relis l'orthographe." }] },
            { t: "attention", md: "Un développement construit est un texte **objectif** : pas de « je », pas d'avis personnel. « Moi, je trouve que Paris est trop grande » sera pénalisé. Écris plutôt : « L'aire urbaine de Paris concentre près d'un Français sur cinq, ce qui crée des déséquilibres. » Vise une vingtaine de lignes." },
            { t: "liste", titre: "Analyser un document en quatre temps", ordonnee: true, items: ["**Présenter** : nature (carte, texte, photo, graphique), auteur, date, source, sujet.", "**Prélever** des informations précises (chiffres, lieux, citations entre guillemets).", "**Expliquer** ces informations avec tes connaissances du cours.", "**Prendre du recul** : quel est le point de vue de l'auteur ? Quelles sont les limites du document ?"] },
          ],
        },
      ],
      bilan: "Des repères solides (régions, villes, fleuves, massifs, capitales) et trois méthodes (croquis, développement construit, analyse de document) : c'est tout ce qu'il faut pour aborder sereinement la géographie au DNB.",
    },
    "3e-geographie-09-transitions-durables": {
      accroche: "Dans la nuit du 27 au 28 février 2010, à La Faute-sur-Mer, en Vendée, la mer a franchi la digue. En quelques minutes, l'eau est montée jusqu'aux plafonds des maisons d'un lotissement construit sur d'anciens marais. Bilan de la tempête Xynthia : 47 morts en France, dont 29 dans cette seule commune. Pourquoi avait-on construit là ? Et comment la France se prépare-t-elle aux catastrophes de demain ?",
      objectifs: [
        "Définir le développement durable et décrire la transition énergétique française",
        "Expliquer les enjeux des mobilités, de l'artificialisation des sols et de l'agroécologie",
        "Définir un risque (aléa, enjeux, vulnérabilité) et localiser des risques en France",
        "Distinguer la réduction des émissions et l'adaptation au changement climatique",
      ],
      sections: [
        {
          titre: "Le développement durable, un objectif commun",
          blocs: [
            { t: "definition", terme: "Développement durable", md: "Un développement qui répond aux **besoins d'aujourd'hui** sans compromettre la capacité des **générations futures** à répondre aux leurs. Il repose sur **trois piliers** : **économique** (créer des richesses), **social** (réduire les inégalités) et **environnemental** (préserver la planète)." },
            { t: "texte", md: "Le changement climatique, causé par les **gaz à effet de serre** (GES), oblige la France à changer de modèle. Par l'**accord de Paris** (2015), les États se sont engagés à limiter le réchauffement **bien en dessous de 2 °C** par rapport à l'époque préindustrielle. La France vise la **neutralité carbone en 2050** : ne pas émettre plus de GES que ce que les forêts et les sols peuvent absorber." },
          ],
        },
        {
          titre: "La transition énergétique",
          blocs: [
            { t: "definition", terme: "Transition énergétique", md: "Le passage d'un système fondé sur les **énergies fossiles** (pétrole, gaz, charbon), qui émettent beaucoup de CO₂, à un système fondé sur des énergies **bas carbone** (renouvelables, nucléaire) et sur la **sobriété** (consommer moins)." },
            { t: "graphique", type: "secteurs", titre: "D'où vient l'électricité produite en France ? (ordre de grandeur)", unite: "%", donnees: [{ label: "Nucléaire", valeur: 67 }, { label: "Hydraulique", valeur: 12 }, { label: "Éolien", valeur: 9 }, { label: "Solaire", valeur: 5 }, { label: "Gaz, bioénergies et autres", valeur: 7 }] },
            { t: "texte", md: "L'électricité française vient aux **deux tiers** environ du **nucléaire** (18 centrales) et pour environ **un quart** des **renouvelables** : d'abord l'**hydraulique** (barrages des Alpes, du Rhône, des Pyrénées), puis l'**éolien**, le **solaire**, et une toute petite part de **géothermie**. Elle émet donc **peu de CO₂**.\n\nMais attention : l'électricité n'est qu'une partie de l'énergie consommée. Les **voitures**, les camions et une partie du **chauffage** dépendent encore du **pétrole** et du **gaz**, presque entièrement **importés**." },
            { t: "tableau", titre: "Le nucléaire en débat", entetes: ["Arguments pour", "Arguments contre"], lignes: [["Très peu d'émissions de CO₂", "Déchets radioactifs dangereux pendant des milliers d'années"], ["Production stable, quelle que soit la météo", "Risque d'accident (Tchernobyl en 1986, Fukushima en 2011)"], ["Indépendance énergétique", "Coût et retards des nouveaux réacteurs (EPR de Flamanville)"]] },
          ],
        },
        {
          titre: "Mobilités, sols et agriculture : changer nos pratiques",
          blocs: [
            { t: "texte", md: "Les **transports** sont le **premier secteur émetteur** de gaz à effet de serre en France (environ **30 %**), surtout à cause de la voiture individuelle. Les solutions : le train, le vélo, les transports en commun, le **covoiturage**, la voiture électrique. Plusieurs grandes villes ont créé des **zones à faibles émissions** (ZFE), qui limitent la circulation des véhicules les plus polluants ; elles font débat, car elles pénalisent les ménages modestes qui ne peuvent pas changer de voiture." },
            { t: "definition", terme: "Artificialisation des sols", md: "La transformation d'un sol naturel, agricole ou forestier en sol bâti ou revêtu (maisons, routes, parkings, zones commerciales). En France, environ **20 000 hectares** sont artificialisés chaque année, surtout à cause de l'étalement urbain." },
            { t: "texte", md: "Un sol bétonné ne laisse plus l'eau s'infiltrer : l'eau de pluie ruisselle et ==aggrave les inondations==. Il ne nourrit plus personne et n'abrite plus la biodiversité. C'est pourquoi la **loi Climat et résilience** (2021) fixe l'objectif « **zéro artificialisation nette** » (ZAN) en **2050** : chaque hectare bétonné devra être compensé par un hectare rendu à la nature.\n\nL'agriculture change aussi : l'**agroécologie** utilise moins de pesticides et d'engrais chimiques, replante des **haies**, développe le **bio** et les **circuits courts**, en s'appuyant sur le fonctionnement de la nature." },
            { t: "verifie", q: "Pourquoi l'artificialisation des sols aggrave-t-elle les inondations ?", choix: ["Parce que le béton attire la pluie", "Parce que l'eau ne s'infiltre plus et ruisselle plus vite", "Parce que les routes bouchent les rivières"], bonne: 1, explication: "Un sol naturel absorbe l'eau comme une éponge. Le béton et le bitume sont imperméables : l'eau ruisselle, se concentre et provoque des crues plus rapides." },
          ],
        },
        {
          titre: "Des risques qui augmentent",
          blocs: [
            { t: "definition", terme: "Risque", md: "La rencontre entre un **aléa** (un phénomène naturel dangereux : crue, tempête, séisme, incendie) et des **enjeux** (les personnes, bâtiments et activités exposés). Plus une société est **vulnérable** (mal préparée, mal protégée), plus le risque est grand. On résume : **risque = aléa × enjeux**." },
            { t: "schema", titre: "Comprendre un risque", legende: "Un aléa dans un désert ne crée pas de risque. Le risque naît quand l'aléa menace des enjeux, d'autant plus s'ils sont vulnérables.", svg: `<svg viewBox="0 0 400 220"><circle class="aplat trait" cx="150" cy="100" r="78" fill-opacity="0.6"/><circle class="aplat trait" cx="250" cy="100" r="78" fill-opacity="0.6"/><text class="texte" x="115" y="88" text-anchor="middle">Aléa</text><text class="texte-petit" x="115" y="106" text-anchor="middle">crue, tempête,</text><text class="texte-petit" x="115" y="120" text-anchor="middle">séisme, incendie</text><text class="texte" x="290" y="88" text-anchor="middle">Enjeux</text><text class="texte-petit" x="290" y="106" text-anchor="middle">habitants,</text><text class="texte-petit" x="290" y="120" text-anchor="middle">maisons, routes</text><text class="texte-main" x="200" y="106" text-anchor="middle">Risque</text><text class="texte-petit" x="200" y="205" text-anchor="middle">La vulnérabilité augmente ou réduit le risque.</text></svg>` },
            { t: "texte", md: "Un Français sur quatre est exposé aux **inondations** : crues de la Seine, tempête **Alex** dans les vallées des Alpes-Maritimes (2020), inondations du **Pas-de-Calais** (2023-2024). Sur le littoral, la **submersion marine** et le **recul du trait de côte** menacent des maisons. Le réchauffement multiplie aussi les **canicules** (2003), les **sécheresses** et les **incendies** (Gironde, 2022)." },
            { t: "carte", fond: "france", titre: "Quelques catastrophes récentes en France", reperes: [{ nom: "La Faute-sur-Mer (Xynthia, 2010)", lat: 46.333, lon: -1.317 }, { nom: "Paris (crues de la Seine)", lat: 48.857, lon: 2.352 }, { nom: "Pas-de-Calais (inondations, 2023-2024)", lat: 50.750, lon: 2.252 }, { nom: "Vallée de la Roya (tempête Alex, 2020)", lat: 43.937, lon: 7.514 }, { nom: "Landiras (incendies, 2022)", lat: 44.567, lon: -0.414 }, { nom: "Lacanau (recul du trait de côte)", lat: 45.000, lon: -1.200 }], legende: "Submersion marine, crues, incendies, érosion du littoral : aucune région n'est épargnée." },
            { t: "exemple", titre: "Étude de cas : Xynthia à La Faute-sur-Mer", etapes: ["**L'aléa** : une tempête violente coïncide avec une forte marée ; la mer monte et franchit la digue.", "**Les enjeux** : des lotissements construits derrière la digue, sur d'anciens marais, en zone inondable.", "**La vulnérabilité** : des maisons de plain-pied, sans étage refuge, et des habitants mal informés du danger. Bilan : 29 morts dans la commune.", "**Les réponses** : maisons détruites et terrains rendus inconstructibles, digues renforcées, plans de prévention, alertes."] },
          ],
        },
        {
          titre: "Prévenir et s'adapter",
          blocs: [
            { t: "texte", md: "Face au changement climatique, il faut agir de **deux façons**. **Atténuer**, c'est **réduire les émissions** de GES pour limiter le réchauffement. **S'adapter**, c'est **se préparer** aux effets qui arrivent déjà, car la France se prépare à un réchauffement pouvant atteindre **+4 °C en 2100**." },
            { t: "tableau", titre: "Atténuer ou s'adapter ?", entetes: ["Atténuer (réduire les émissions)", "S'adapter (vivre avec le changement)"], lignes: [["Développer les renouvelables et le train", "Interdire de construire en zone inondable (plans de prévention des risques)"], ["Isoler les logements", "Végétaliser les villes et créer des îlots de fraîcheur"], ["Covoiturer, prendre le vélo", "Désimperméabiliser les cours d'école et les parkings"], ["Réduire le gaspillage", "Relocaliser les bâtiments menacés par le recul du trait de côte"]] },
            { t: "verifie", q: "Laquelle de ces mesures relève de l'adaptation au changement climatique ?", choix: ["Installer des éoliennes", "Planter des arbres dans une cour d'école pour la rafraîchir en été", "Prendre le train plutôt que l'avion"], bonne: 1, explication: "Les éoliennes et le train réduisent les émissions : c'est de l'atténuation. Végétaliser une cour aide à supporter les canicules qui arrivent déjà : c'est de l'adaptation." },
            { t: "astuce", md: "Pour analyser un risque au DNB, utilise toujours le trio **aléa, enjeux, vulnérabilité**, puis termine par les **réponses** : prévention (avant), gestion de crise (pendant), reconstruction et adaptation (après)." },
          ],
        },
      ],
      bilan: "Transition énergétique, mobilités plus propres, sols protégés, agriculture repensée, risques prévenus : la France doit à la fois réduire ses émissions et s'adapter à un climat qui change déjà.",
    },
  },
};
