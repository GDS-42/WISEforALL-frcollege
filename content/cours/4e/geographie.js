// Cours ÉCLORE — 4e Géographie. Schéma : docs/COURS.md
// Données chiffrées arrondies (ONU, Banque mondiale, ONU Tourisme, CNUCED, HCR) : ordres de grandeur, pas valeurs exactes.
export default {
  id: "4e-geographie",
  chapitres: {
    "4e-geographie-01-espaces-urbanisation": {
      accroche: "Chaque semaine, la population des villes du monde augmente d'environ 1,5 million de personnes : l'équivalent d'une nouvelle ville comme Bordeaux et sa banlieue, tous les sept jours. Où vont tous ces citadins, et à quoi ressemblent les villes qui les accueillent ?",
      objectifs: [
        "Décrire l'urbanisation du monde avec des ordres de grandeur",
        "Situer les grandes mégapoles sur un planisphère",
        "Utiliser le vocabulaire des espaces urbains : centre, CBD, périphérie, périurbain, bidonville",
        "Expliquer la métropolisation, l'étalement urbain, la gentrification et les inégalités",
      ],
      sections: [
        {
          titre: "Un monde devenu majoritairement urbain",
          blocs: [
            { t: "texte", md: "En 1950, seulement **3 humains sur 10** vivaient en ville. Aujourd'hui, c'est **plus de 55 %** de l'humanité. Le cap symbolique des 50 % a été franchi vers **2007-2008** : depuis, il y a plus de citadins que de ruraux sur Terre.\n\nPourquoi ? Les campagnes offrent peu d'emplois, d'écoles ou d'hôpitaux. Les villes, elles, attirent par leurs usines, leurs bureaux, leurs services. C'est l'**exode rural**. S'y ajoute l'**accroissement naturel** : dans beaucoup de villes jeunes, les naissances dépassent largement les décès." },
            { t: "definition", terme: "Urbanisation", md: "L'augmentation de la part de la population qui vit en ville. On la mesure par le **taux d'urbanisation** : le pourcentage de citadins dans la population totale." },
            { t: "graphique", type: "courbe", titre: "Part de la population mondiale vivant en ville (projection pour 2050)", unite: "%", donnees: [{ label: "1950", valeur: 30 }, { label: "1975", valeur: 38 }, { label: "2000", valeur: 47 }, { label: "2010", valeur: 52 }, { label: "2020", valeur: 56 }, { label: "2050", valeur: 68 }] },
            { t: "attention", md: "La croissance urbaine la plus rapide n'a **pas** lieu en Europe ou en Amérique du Nord : ces régions sont déjà urbanisées à près de 75 à 80 %. Aujourd'hui, ce sont ==l'Asie et l'Afrique== qui gagnent le plus de citadins chaque année." },
          ],
        },
        {
          titre: "Métropoles et mégapoles",
          blocs: [
            { t: "definition", terme: "Métropole et mégapole", md: "Une **métropole** est une grande ville qui concentre population, pouvoirs et activités, et qui rayonne sur un vaste territoire. Une **mégapole** est une agglomération de **plus de 10 millions d'habitants**. On en compte une trentaine dans le monde." },
            { t: "carte", fond: "monde", titre: "Quelques mégapoles du monde", zones: ["JP", "IN", "CN", "BR", "EG", "NG", "MX", "BD"], reperes: [{ nom: "Tokyo", lat: 35.68, lon: 139.69 }, { nom: "Delhi", lat: 28.61, lon: 77.21 }, { nom: "Shanghai", lat: 31.23, lon: 121.47 }, { nom: "Dacca", lat: 23.81, lon: 90.41 }, { nom: "São Paulo", lat: -23.55, lon: -46.63 }, { nom: "Mexico", lat: 19.43, lon: -99.13 }, { nom: "Le Caire", lat: 30.04, lon: 31.24 }, { nom: "Lagos", lat: 6.52, lon: 3.38 }], legende: "La plupart des mégapoles se trouvent aujourd'hui en Asie, en Amérique latine et en Afrique." },
            { t: "tableau", titre: "Quelques mégapoles (agglomérations, chiffres arrondis)", entetes: ["Mégapole", "Pays", "Habitants (environ)"], lignes: [["Tokyo", "Japon", "37 millions, la plus peuplée du monde"], ["Delhi", "Inde", "plus de 30 millions"], ["Shanghai", "Chine", "près de 30 millions"], ["São Paulo", "Brésil", "plus de 20 millions"], ["Le Caire", "Égypte", "plus de 20 millions"], ["Lagos", "Nigeria", "plus de 15 millions"]] },
            { t: "definition", terme: "Métropolisation", md: "La concentration des richesses, des sièges d'entreprises, des universités et des pouvoirs dans les plus grandes villes. Plus une ville est grande, plus elle attire… et plus elle grandit." },
            { t: "verifie", q: "À partir de quel seuil parle-t-on de mégapole ?", choix: ["1 million d'habitants", "5 millions d'habitants", "10 millions d'habitants", "50 millions d'habitants"], bonne: 2, explication: "Une mégapole dépasse 10 millions d'habitants. Une métropole peut être plus petite : c'est son rôle de commandement qui compte, pas seulement sa taille." },
          ],
        },
        {
          titre: "Du centre au périurbain : lire le paysage d'une ville",
          blocs: [
            { t: "texte", md: "Quand tu traverses une grande ville du centre vers la campagne, le paysage change par étapes. Au **centre**, les immeubles sont hauts et serrés : c'est là que le terrain coûte le plus cher. Plus on s'éloigne, plus les bâtiments sont bas et espacés." },
            { t: "schema", titre: "Organisation d'une métropole", legende: "Les tours du CBD occupent le centre ; les pavillons du périurbain grignotent la campagne. Chaque jour, des milliers d'habitants font la navette entre les deux.", svg: `<svg viewBox="0 0 400 250"><text class="texte-petit" x="200" y="16" text-anchor="middle">Coupe simplifiée, du centre vers la campagne</text><line class="pointille" x1="92" y1="30" x2="92" y2="200"/><line class="pointille" x1="152" y1="30" x2="152" y2="200"/><line class="pointille" x1="256" y1="30" x2="256" y2="200"/><line class="pointille" x1="348" y1="30" x2="348" y2="200"/><rect class="aplat-fort" x="20" y="70" width="14" height="110"/><rect class="aplat-fort" x="38" y="44" width="16" height="136"/><rect class="aplat-fort" x="58" y="84" width="14" height="96"/><rect class="aplat-fort" x="76" y="104" width="12" height="76"/><rect class="aplat trait-fin" x="98" y="140" width="14" height="40"/><rect class="aplat trait-fin" x="115" y="134" width="14" height="46"/><rect class="aplat trait-fin" x="132" y="144" width="14" height="36"/><rect class="aplat trait-fin" x="160" y="120" width="30" height="60"/><rect class="aplat trait-fin" x="195" y="132" width="10" height="48"/><path class="aplat trait-fin" d="M212 180 L212 158 L224 150 L224 158 L236 150 L236 158 L248 150 L248 180 Z"/><path class="aplat trait-fin" d="M262 180 L262 168 L270 160 L278 168 L278 180 Z"/><path class="aplat trait-fin" d="M284 180 L284 168 L292 160 L300 168 L300 180 Z"/><rect class="aplat trait-fin" x="308" y="164" width="32" height="16"/><line class="trait-fin" x1="370" y1="180" x2="370" y2="168"/><circle class="aplat trait-fin" cx="370" cy="162" r="7"/><path class="trait-fin" d="M354 186 L388 186 M356 192 L386 192"/><line class="trait" x1="10" y1="180" x2="390" y2="180"/><path class="pointille" d="M292 156 Q210 70 94 62" marker-end="url(#fl)"/><text class="texte-petit" x="250" y="80" text-anchor="middle">navettes quotidiennes</text><text class="texte" x="54" y="200" text-anchor="middle">CBD</text><text class="texte-petit" x="54" y="214" text-anchor="middle">centre</text><text class="texte-petit" x="122" y="200" text-anchor="middle">quartiers</text><text class="texte-petit" x="122" y="214" text-anchor="middle">anciens</text><text class="texte" x="204" y="200" text-anchor="middle">Banlieues</text><text class="texte-petit" x="204" y="214" text-anchor="middle">grands ensembles</text><text class="texte" x="302" y="200" text-anchor="middle">Périurbain</text><text class="texte-petit" x="302" y="214" text-anchor="middle">pavillons</text><text class="texte-petit" x="370" y="206" text-anchor="middle">rural</text><path class="trait-fin" d="M110 230 L380 230" marker-end="url(#fl-p)"/><text class="texte-pigment" x="100" y="234" text-anchor="end">étalement</text></svg>` },
            { t: "definition", terme: "CBD (Central Business District)", md: "Le **quartier central des affaires** : tours de bureaux, sièges de banques et de grandes entreprises. Exemples : Manhattan à New York, la City à Londres, La Défense près de Paris." },
            { t: "definition", terme: "Périurbain et étalement urbain", md: "Le **périurbain** est l'espace de lotissements, de zones commerciales et de champs situé au-delà des banlieues, dont les habitants travaillent en ville. L'**étalement urbain** est l'extension de la ville sur les campagnes voisines." },
            { t: "texte", md: "L'étalement a un prix : il **consomme des terres agricoles** et oblige les habitants du périurbain à de **longs trajets quotidiens**, souvent en voiture. Embouteillages, pollution et budget essence : c'est sa principale conséquence pour eux." },
            { t: "verifie", q: "Range ces espaces du centre vers l'extérieur : lequel vient en troisième position ?", choix: ["Le CBD", "Les banlieues", "Le périurbain", "L'espace rural"], bonne: 2, explication: "L'ordre est : CBD (centre), banlieues, périurbain, puis espace rural. Le périurbain est la frange la plus récente de la ville, au contact de la campagne." },
          ],
        },
        {
          titre: "Des villes fragmentées : São Paulo, une étude de cas",
          blocs: [
            { t: "texte", md: "Toutes les villes du monde sont **fragmentées** : des quartiers riches et des quartiers pauvres s'y côtoient sans se mélanger. Ces contrastes viennent des **inégalités de revenus**." },
            { t: "exemple", titre: "Décrire le paysage de São Paulo (Brésil)", etapes: ["Au centre, l'avenue Paulista aligne les tours de bureaux du CBD : banques, sièges d'entreprises.", "Plus loin, des quartiers résidentiels fermés par des murs et gardés jour et nuit : ce sont des **gated communities**.", "Sur les collines et les terrains inondables, des milliers de maisons de briques construites sans autorisation : les **favelas**, c'est-à-dire des bidonvilles.", "Conclusion : riches et pauvres vivent à quelques kilomètres les uns des autres, mais dans deux mondes séparés."] },
            { t: "definition", terme: "Bidonville", md: "Un quartier d'habitat précaire, construit sans autorisation, souvent sans eau courante, sans égouts et sans titre de propriété. Environ **1 milliard** de personnes vivent dans des bidonvilles, surtout dans les pays en développement." },
            { t: "definition", terme: "Gentrification", md: "L'arrivée de ménages aisés dans un ancien quartier populaire du centre. Les logements sont rénovés, les loyers montent… et les anciens habitants, trop pauvres, doivent partir. C'est arrivé à Brooklyn (New York) ou dans l'est de Paris." },
            { t: "savais-tu", md: "À São Paulo, les embouteillages sont si longs que les plus riches se déplacent en hélicoptère d'un toit à l'autre : la ville compte des centaines d'héliports !" },
          ],
        },
      ],
      bilan: "Plus d'un humain sur deux est citadin : les villes s'étalent, se concentrent dans des métropoles et des mégapoles, et juxtaposent tours du CBD, quartiers fermés et bidonvilles.",
    },
    "4e-geographie-02-villes-connectees": {
      accroche: "Un trader de Londres commence sa journée en parlant à Tokyo et la termine en appelant New York. Il a plus de contacts avec ces villes lointaines qu'avec la petite ville anglaise où habitent ses parents. Comment est-ce possible ?",
      objectifs: [
        "Identifier les villes mondiales et leurs fonctions de commandement",
        "Expliquer comment les métropoles sont reliées entre elles : hubs, réseaux, archipel métropolitain mondial",
        "Décrire une ville en marge de la mondialisation, Detroit",
      ],
      sections: [
        {
          titre: "Les villes mondiales, tours de contrôle de la planète",
          blocs: [
            { t: "definition", terme: "Ville mondiale", md: "Une ville qui **commande l'économie de la planète** : elle accueille des sièges de firmes transnationales, une grande Bourse, des banques, de grands aéroports, des universités réputées et des médias. Les quatre principales sont **New York, Londres, Tokyo et Paris**." },
            { t: "tableau", titre: "Les quatre grandes villes mondiales et leurs symboles", entetes: ["Ville", "Un symbole de puissance", "Autre atout"], lignes: [["New York", "Wall Street, première Bourse du monde", "siège de l'ONU"], ["Londres", "la City, grande place financière", "aéroport d'Heathrow"], ["Tokyo", "sièges de Toyota, Sony…", "plus grande agglomération du monde"], ["Paris", "quartier d'affaires de La Défense", "siège de l'UNESCO, tourisme, culture"]] },
            { t: "texte", md: "Ces villes ne sont pas puissantes seulement parce qu'elles sont grandes. Elles le sont parce que ==des décisions prises chez elles s'appliquent partout dans le monde== : une banque de Londres finance une usine au Vietnam, un studio de New York produit une série vue sur tous les continents." },
          ],
        },
        {
          titre: "Hubs et réseaux : l'archipel métropolitain mondial",
          blocs: [
            { t: "texte", md: "Les métropoles sont reliées par des **routes aériennes**, par des **câbles sous-marins** qui transportent les données d'Internet et par les échanges de la **finance** (Bourses, banques). Ces liens sont si denses que les grandes villes échangent souvent **plus entre elles** qu'avec les petites villes de leur propre pays." },
            { t: "definition", terme: "Archipel métropolitain mondial", md: "L'ensemble des grandes métropoles très connectées entre elles, comme des **îles** reliées par des réseaux, au milieu d'espaces moins bien reliés." },
            { t: "definition", terme: "Hub", md: "Un **nœud de réseau** où se croisent et se redistribuent les flux. Un hub aérien comme **Dubaï** ou **Atlanta** reçoit des avions venus de partout et les fait repartir vers d'autres destinations. **Singapour** est un hub portuaire." },
            { t: "carte", fond: "monde", titre: "Quelques îles de l'archipel métropolitain mondial", reperes: [{ nom: "New York", lat: 40.71, lon: -74.01 }, { nom: "Londres", lat: 51.51, lon: -0.13 }, { nom: "Paris", lat: 48.86, lon: 2.35 }, { nom: "Tokyo", lat: 35.68, lon: 139.69 }, { nom: "Dubaï", lat: 25.20, lon: 55.27 }, { nom: "Singapour", lat: 1.29, lon: 103.85 }, { nom: "Shanghai", lat: 31.23, lon: 121.47 }, { nom: "São Paulo", lat: -23.55, lon: -46.63 }, { nom: "Atlanta", lat: 33.75, lon: -84.39 }], traits: [{ de: [40.71, -74.01], a: [51.51, -0.13] }, { de: [51.51, -0.13], a: [25.20, 55.27] }, { de: [25.20, 55.27], a: [1.29, 103.85] }, { de: [1.29, 103.85], a: [35.68, 139.69] }, { de: [40.71, -74.01], a: [-23.55, -46.63] }], legende: "Les traits montrent quelques liaisons majeures (vols, câbles, finance) entre métropoles." },
            { t: "texte", md: "L'archipel s'agrandit : les métropoles des pays émergents, comme **Shanghai**, **Mumbai**, **São Paulo** ou **Dubaï**, montent en puissance. Dubaï, au milieu du désert, est devenue un hub aérien majeur entre l'Europe et l'Asie grâce à sa position et à sa compagnie Emirates." },
            { t: "verifie", q: "Parmi ces villes, laquelle n'est pas l'une des quatre grandes villes mondiales ?", choix: ["Londres", "Tokyo", "Rio de Janeiro", "Paris"], bonne: 2, explication: "Les quatre grandes villes mondiales sont New York, Londres, Tokyo et Paris. Rio de Janeiro est une grande métropole brésilienne, mais elle ne commande pas l'économie mondiale." },
          ],
        },
        {
          titre: "Detroit : une ville en marge",
          blocs: [
            { t: "texte", md: "La mondialisation ne profite pas à toutes les villes. Certaines, mal reliées ou dépendantes d'une seule activité, perdent des emplois et des habitants. On les appelle les **shrinking cities** (« villes qui rétrécissent »). L'exemple type est **Detroit**, aux États-Unis." },
            { t: "graphique", type: "courbe", titre: "Population de la ville de Detroit", unite: "millions d'habitants", donnees: [{ label: "1950", valeur: 1.85 }, { label: "1970", valeur: 1.51 }, { label: "1990", valeur: 1.03 }, { label: "2000", valeur: 0.95 }, { label: "2010", valeur: 0.71 }, { label: "2020", valeur: 0.64 }] },
            { t: "etapes", titre: "Les étapes du déclin d'une shrinking city", items: [{ titre: "Concurrence", md: "Les usines automobiles de Detroit sont concurrencées par celles du Japon, puis du Mexique et de Chine." }, { titre: "Fermetures", md: "Les usines ferment ou partent là où les salaires sont plus bas : des dizaines de milliers d'emplois disparaissent." }, { titre: "Départs", md: "Les habitants qui le peuvent partent chercher du travail ailleurs." }, { titre: "Quartiers abandonnés", md: "Des maisons vides, des rues désertes ; la ville perd ses impôts." }, { titre: "Faillite", md: "En 2013, Detroit fait faillite : c'est la plus grande ville américaine à avoir connu cela." }] },
            { t: "exemple", titre: "Expliquer le déclin de Detroit", md: "Detroit était la **capitale de l'automobile** (Ford, General Motors, Chrysler). Sa cause principale de déclin est la ==désindustrialisation== : la fermeture des usines face à la concurrence mondiale. Elle comptait environ **1,8 million** d'habitants en 1950, et **moins de 700 000** aujourd'hui. Depuis quelques années, son centre se rénove, mais beaucoup de quartiers restent en difficulté." },
          ],
        },
        {
          titre: "Une hiérarchie urbaine mondiale",
          blocs: [
            { t: "texte", md: "Au bout du compte, la mondialisation range les villes en plusieurs étages : au sommet, **quelques villes mondiales** ; ensuite, de **grandes métropoles** régionales bien connectées (Sydney, Mumbai, Johannesburg) ; puis beaucoup de **villes intermédiaires** ; enfin, des **villes à l'écart**, qui déclinent." },
            { t: "verifie", q: "Pourquoi dit-on que Londres est une « île » de l'archipel métropolitain mondial ?", choix: ["Parce qu'elle est sur une île, la Grande-Bretagne", "Parce qu'elle est très connectée aux autres grandes métropoles du monde", "Parce qu'elle est isolée du reste du monde"], bonne: 1, explication: "« Île » est une image : Londres est reliée en permanence à New York, Tokyo ou Dubaï par la finance, les vols et Internet. Le fait que la Grande-Bretagne soit une île n'a rien à voir." },
          ],
        },
      ],
      bilan: "Les villes mondiales commandent, les hubs redistribuent, l'archipel métropolitain relie les gagnants… tandis que des villes comme Detroit montrent le revers de la mondialisation.",
    },
    "4e-geographie-03-monde-de-migrants": {
      accroche: "Dans ta classe, combien d'élèves ont un parent, un grand-parent ou un arrière-grand-parent né dans un autre pays ? Sans doute plusieurs. Pourtant, à l'échelle du monde, migrer reste une exception : environ 96 humains sur 100 vivent dans le pays où ils sont nés.",
      objectifs: [
        "Décrire les migrations internationales avec des ordres de grandeur et localiser les grandes routes",
        "Distinguer les causes des migrations et les statuts : migrant, réfugié, diaspora",
        "Expliquer les effets des migrations sur les pays de départ et d'arrivée, et le rôle des frontières",
      ],
      sections: [
        {
          titre: "Combien de migrants dans le monde ?",
          blocs: [
            { t: "definition", terme: "Migrant international", md: "Une personne qui vit dans un **autre pays** que celui où elle est née, depuis au moins un an. Un touriste ou un étudiant en voyage de deux semaines n'est donc pas un migrant." },
            { t: "graphique", type: "courbe", titre: "Nombre de migrants internationaux dans le monde", unite: "millions", donnees: [{ label: "1990", valeur: 153 }, { label: "2000", valeur: 173 }, { label: "2010", valeur: 221 }, { label: "2020", valeur: 281 }] },
            { t: "texte", md: "Les migrants sont environ **280 millions**. Le chiffre paraît énorme, et il augmente. Mais rapporté aux 8 milliards d'humains, il ne représente qu'environ ==3,5 % de l'humanité==. La grande majorité des gens ne quittent jamais leur pays.\n\nLe **premier pays d'accueil** est de loin les **États-Unis**, avec environ **50 millions** de migrants. Viennent ensuite l'Allemagne, l'Arabie saoudite, la Russie, le Royaume-Uni et la France." },
            { t: "verifie", q: "Quelle part de la population mondiale représentent les migrants internationaux ?", choix: ["Environ 3,5 %", "Environ 15 %", "Environ 35 %"], bonne: 0, explication: "280 millions sur 8 milliards, cela fait environ 3,5 %. Les médias parlent beaucoup des migrations, mais la plupart des humains restent dans leur pays de naissance." },
          ],
        },
        {
          titre: "Pourquoi partir ? Causes et statuts",
          blocs: [
            { t: "texte", md: "On ne quitte pas son pays, sa famille et sa langue sans de bonnes raisons. Les géographes classent les causes en quelques grandes familles. Souvent, plusieurs causes se mêlent." },
            { t: "tableau", titre: "Les causes des migrations", entetes: ["Cause", "Exemple"], lignes: [["**Économique** : chercher un emploi, un meilleur salaire", "Un ouvrier indien part travailler sur un chantier à Dubaï."], ["**Politique** : fuir une guerre, une persécution", "Des familles syriennes fuient la guerre vers la Turquie à partir de 2011."], ["**Climatique** : sécheresse, inondations, montée des eaux", "Des paysans du Sahel quittent des terres devenues trop sèches."], ["**Familiale ou d'études**", "Une étudiante marocaine vient faire ses études à Lyon."]] },
            { t: "definition", terme: "Réfugié", md: "Une personne qui a **fui son pays** à cause d'un danger grave (guerre, persécution) et qui ne peut pas y retourner. Elle est protégée par la **Convention de Genève** (1951) et aidée par le **HCR**, le Haut-Commissariat des Nations unies pour les réfugiés." },
            { t: "attention", md: "On imagine souvent que les réfugiés vont surtout en Europe ou en Amérique du Nord. C'est faux : environ ==7 réfugiés sur 10 sont accueillis dans un pays voisin du leur==, souvent pauvre (Turquie, Iran, Pakistan, Ouganda, Colombie…). Et beaucoup de personnes déplacées de force (plus de 100 millions en tout) restent même à l'intérieur de leur propre pays." },
            { t: "definition", terme: "Diaspora", md: "Une population **dispersée dans plusieurs pays** qui garde des liens avec son pays d'origine : langue, fêtes, argent envoyé, voyages. Les diasporas indienne, chinoise ou libanaise sont présentes sur tous les continents." },
          ],
        },
        {
          titre: "Les grandes routes migratoires",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quelques grandes routes migratoires", zones: ["US", "DE", "ES", "IT", "AE", "SA"], reperes: [{ nom: "Mexico", lat: 19.43, lon: -99.13 }, { nom: "Los Angeles", lat: 34.05, lon: -118.24 }, { nom: "Dakar", lat: 14.72, lon: -17.47 }, { nom: "Madrid", lat: 40.42, lon: -3.70 }, { nom: "Tripoli", lat: 32.89, lon: 13.19 }, { nom: "Rome", lat: 41.90, lon: 12.50 }, { nom: "Damas", lat: 33.51, lon: 36.28 }, { nom: "Berlin", lat: 52.52, lon: 13.40 }, { nom: "Mumbai", lat: 19.08, lon: 72.88 }, { nom: "Dubaï", lat: 25.20, lon: 55.27 }], traits: [{ de: [19.43, -99.13], a: [34.05, -118.24] }, { de: [14.72, -17.47], a: [40.42, -3.70] }, { de: [32.89, 13.19], a: [41.90, 12.50] }, { de: [33.51, 36.28], a: [52.52, 13.40] }, { de: [19.08, 72.88], a: [25.20, 55.27] }], legende: "Trois grandes régions d'arrivée : les États-Unis, l'Europe (par la Méditerranée) et les pays du Golfe." },
            { t: "liste", titre: "Trois grands pôles d'accueil", items: ["**Vers les États-Unis** : depuis le Mexique et l'Amérique centrale, en franchissant la frontière mexicaine.", "**Vers l'Europe** : depuis l'Afrique et le Moyen-Orient, souvent en traversant la **mer Méditerranée** sur des embarcations dangereuses. Plus de 30 000 personnes y sont mortes ou disparues depuis 2014.", "**Vers les pays du Golfe** : depuis l'Inde, le Pakistan, le Bangladesh ou les Philippines, pour travailler sur les chantiers ou comme employés de maison. Aux Émirats arabes unis, près de 9 habitants sur 10 sont étrangers."] },
            { t: "etapes", titre: "Le parcours d'un migrant économique", items: [{ titre: "La décision", md: "Pas de travail au pays : la famille réunit de l'argent pour qu'un de ses membres parte." }, { titre: "Le voyage", md: "Un trajet long et coûteux, parfois aux mains de passeurs." }, { titre: "Le passage de la frontière", md: "Avec un visa… ou clandestinement, au risque de sa vie." }, { titre: "L'installation", md: "Trouver un logement, un emploi, apprendre la langue." }, { titre: "Les transferts", md: "Chaque mois, il envoie une partie de son salaire à sa famille." }] },
          ],
        },
        {
          titre: "Des effets au départ comme à l'arrivée",
          blocs: [
            { t: "exemple", titre: "Un jeune Sénégalais part travailler en Espagne", etapes: ["**Pour lui** : un voyage coûteux et risqué, parfois en pirogue vers les îles Canaries, puis des emplois durs dans l'agriculture ou le bâtiment.", "**Pour l'Espagne** : une main-d'œuvre utile dans des secteurs qui manquent de bras.", "**Pour le Sénégal** : un jeune actif en moins, mais de l'argent envoyé chaque mois à la famille, qui paie l'école ou une maison."] },
            { t: "definition", terme: "Transferts de fonds", md: "L'argent que les migrants envoient à leur famille restée au pays. Au total, ces transferts dépassent **600 milliards de dollars par an** : c'est plus que toute l'aide au développement versée par les pays riches." },
            { t: "texte", md: "Pour le pays de départ, la migration a aussi un coût : quand ce sont des médecins, des ingénieurs ou des informaticiens qui partent, on parle de **fuite des cerveaux**. Le pays a payé leurs études, mais c'est un autre pays qui profite de leurs compétences." },
          ],
        },
        {
          titre: "Des frontières qui se ferment",
          blocs: [
            { t: "texte", md: "Beaucoup de pays d'arrivée renforcent leurs frontières : murs et barrières le long d'une partie des **3 100 km** de frontière entre les États-Unis et le Mexique, patrouilles en Méditerranée, contrôles dans les aéroports.\n\nCes obstacles n'arrêtent pas toujours les migrations. Ils ont une conséquence fréquente : les migrants prennent ==des routes plus longues et plus dangereuses== (désert, haute mer) et paient plus cher les passeurs." },
            { t: "verifie", q: "Une famille fuit la guerre dans son pays. Quel est son statut, et qui peut l'aider ?", choix: ["Migrant économique, aidé par l'OMC", "Réfugié, protégé par la Convention de Genève et aidé par le HCR", "Touriste, aidé par l'ONU"], bonne: 1, explication: "Fuir un danger grave comme une guerre donne droit au statut de réfugié (Convention de Genève, 1951). Le HCR est l'agence de l'ONU chargée de les protéger." },
          ],
        },
      ],
      bilan: "Les migrants ne sont que 3,5 % de l'humanité, mais ils relient les continents : ils fuient la pauvreté, la guerre ou le climat, envoient de l'argent chez eux et se heurtent à des frontières de plus en plus fermées.",
    },
    "4e-geographie-04-tourisme": {
      accroche: "En 1950, 25 millions de personnes seulement partaient en vacances à l'étranger. Avant 2020, elles étaient plus de 1,4 milliard chaque année ! Certaines villes en sont tellement envahies qu'elles font désormais payer l'entrée, comme un musée.",
      objectifs: [
        "Décrire l'essor du tourisme international avec des ordres de grandeur",
        "Localiser les grandes destinations et distinguer les formes de tourisme",
        "Analyser les effets du tourisme et expliquer ce qu'est un tourisme durable",
      ],
      sections: [
        {
          titre: "Une explosion des voyages",
          blocs: [
            { t: "graphique", type: "courbe", titre: "Arrivées de touristes internationaux dans le monde", unite: "millions", donnees: [{ label: "1950", valeur: 25 }, { label: "1980", valeur: 280 }, { label: "2000", valeur: 680 }, { label: "2010", valeur: 950 }, { label: "2019", valeur: 1460 }, { label: "2020", valeur: 400 }, { label: "2024", valeur: 1400 }] },
            { t: "texte", md: "La courbe monte sans arrêt pendant 70 ans… puis s'effondre en **2020** : avec la pandémie de **Covid-19**, les frontières ferment et le tourisme international disparaît presque pendant quelques mois. Il retrouve son niveau d'avant vers **2024**.\n\nPourquoi une telle croissance ? Trois raisons : les **congés payés** (en France dès 1936), la **hausse des revenus** et la **baisse du prix de l'avion**, surtout avec les compagnies à bas coût. Les touristes viennent surtout des pays riches et, de plus en plus, de Chine." },
            { t: "frise", titre: "Les grandes étapes du tourisme", evenements: [{ date: 1841, label: "Premier voyage organisé", detail: "L'Anglais Thomas Cook organise un voyage en train pour un groupe." }, { date: 1936, label: "Congés payés en France", detail: "Deux semaines de vacances payées pour tous les salariés." }, { date: 1963, label: "Aménagement du littoral du Languedoc", detail: "L'État construit des stations balnéaires comme La Grande-Motte : le tourisme de masse s'installe." }, { date: 1992, label: "Ouverture de Disneyland Paris" }, { date: 1995, label: "Essor des compagnies à bas coût en Europe" }, { date: 2020, label: "Pandémie de Covid-19", detail: "Le tourisme international s'effondre." }, { date: 2024, label: "Retour au niveau d'avant la crise", detail: "Venise fait payer l'entrée aux visiteurs à la journée certains jours." }] },
          ],
        },
        {
          titre: "Les grandes destinations",
          blocs: [
            { t: "texte", md: "La **France** est la **première destination mondiale** : elle reçoit environ **90 à 100 millions** de visiteurs étrangers par an, devant l'**Espagne** et les **États-Unis**. Mais ce sont les États-Unis qui **gagnent le plus d'argent** grâce au tourisme, car leurs visiteurs restent plus longtemps et dépensent davantage." },
            { t: "carte", fond: "monde", titre: "Grandes destinations et lieux touristiques célèbres", zones: ["FR", "ES", "US", "IT", "TR", "MX"], reperes: [{ nom: "Paris", lat: 48.86, lon: 2.35 }, { nom: "Venise", lat: 45.44, lon: 12.33 }, { nom: "Barcelone", lat: 41.39, lon: 2.17 }, { nom: "Dubrovnik", lat: 42.65, lon: 18.09 }, { nom: "Machu Picchu", lat: -13.16, lon: -72.55 }, { nom: "Cancún", lat: 21.16, lon: -86.85 }, { nom: "Bangkok", lat: 13.76, lon: 100.50 }], legende: "En couleur, six des pays les plus visités du monde. L'Europe reste la première région touristique." },
            { t: "verifie", q: "Quel est le pays le plus visité du monde ?", choix: ["Les États-Unis", "La France", "La Chine", "L'Espagne"], bonne: 1, explication: "La France reçoit le plus de visiteurs étrangers (environ 90 à 100 millions par an). Attention : ce sont les États-Unis qui tirent le plus de revenus du tourisme." },
          ],
        },
        {
          titre: "Des formes de tourisme qui transforment les paysages",
          blocs: [
            { t: "tableau", titre: "Les principales formes de tourisme", entetes: ["Forme", "Ce qu'on y cherche", "Exemple"], lignes: [["**Balnéaire**", "la mer, la plage, le soleil", "Cancún (Mexique), la Côte d'Azur"], ["**Culturel**", "musées, monuments, patrimoine", "Paris, Venise, le Machu Picchu (Pérou)"], ["**De montagne**", "ski l'hiver, randonnée l'été", "les stations des Alpes"], ["**Vert**", "la nature, le calme", "les parcs nationaux"], ["**D'affaires**", "salons, congrès, réunions", "Las Vegas, Paris"], ["**Parcs de loisirs**", "attractions, spectacles", "Disneyland Paris, site le plus visité d'Europe"]] },
            { t: "definition", terme: "Tourisme de masse", md: "Un tourisme qui concentre **des millions de visiteurs sur quelques lieux**. Pour les accueillir, les territoires construisent des **aménagements** : hôtels, aéroports, autoroutes, ports de plaisance (marinas). Le paysage en est profondément transformé." },
            { t: "texte", md: "Le tourisme apporte beaucoup : des **emplois** (hôtels, restaurants, guides), des **revenus** pour les habitants et l'État, de l'argent pour restaurer les monuments. Mais il a aussi des revers : bétonnage des côtes, consommation d'eau, pollution, prix qui montent pour les habitants." },
          ],
        },
        {
          titre: "Venise : quand le tourisme étouffe une ville",
          blocs: [
            { t: "definition", terme: "Surtourisme", md: "Une situation où les visiteurs sont **trop nombreux** pour un lieu : les habitants sont gênés, les sites s'abîment, la vie quotidienne devient difficile." },
            { t: "exemple", titre: "Venise, un cas d'école", etapes: ["Le centre historique, construit sur une lagune, compte moins de 50 000 habitants… pour jusqu'à 30 millions de visiteurs par an.", "Les paquebots de croisière et les **locations de courte durée** remplacent les logements des habitants : les loyers montent, les commerces de quartier ferment.", "Résultat : le centre a perdu plus de la moitié de sa population depuis 1950.", "La ville réagit : elle interdit les grands navires de croisière dans le centre de la lagune (2021) et fait payer un billet d'entrée aux visiteurs à la journée (depuis 2024)."] },
            { t: "attention", md: "Les **locations touristiques de courte durée** posent problème parce qu'elles **retirent des logements aux habitants** : un propriétaire gagne plus en louant à des touristes à la nuit qu'à une famille à l'année." },
          ],
        },
        {
          titre: "Vers un tourisme durable ?",
          blocs: [
            { t: "definition", terme: "Tourisme durable", md: "Un tourisme qui cherche à **limiter ses dégâts** sur l'environnement et sur les habitants, sans pour autant l'interdire : quotas, saisons étalées, respect des populations locales, moins de trajets en avion." },
            { t: "liste", titre: "Des mesures contre le surtourisme", items: ["**Venise** : billet d'entrée pour les visiteurs à la journée.", "**Machu Picchu** : nombre de visiteurs limité chaque jour, avec des horaires d'entrée.", "**Dubrovnik** (Croatie) : nombre de paquebots de croisière limité chaque jour.", "**Barcelone** : suppression progressive des licences d'appartements touristiques."] },
            { t: "verifie", q: "Le tourisme durable consiste-t-il à interdire le tourisme dans les sites fragiles ?", choix: ["Oui, il faut fermer tous les sites fragiles", "Non, il s'agit d'accueillir les visiteurs en limitant les dégâts"], bonne: 1, explication: "Le tourisme durable ne supprime pas le tourisme, qui fait vivre beaucoup d'habitants : il l'organise mieux (quotas, horaires, respect des lieux) pour qu'il puisse durer." },
          ],
        },
      ],
      bilan: "Le tourisme est devenu une mobilité de masse qui enrichit et aménage les territoires, mais qui peut aussi les étouffer : tout l'enjeu est de le rendre durable.",
    },
    "4e-geographie-05-mers-oceans": {
      accroche: "Regarde autour de toi : ton téléphone, tes baskets, peut-être même ta chaise ont presque sûrement voyagé dans une boîte en métal, à bord d'un navire plus long que quatre terrains de football. Sans les océans, ta chambre serait presque vide.",
      objectifs: [
        "Expliquer le rôle des mers et des océans dans les échanges mondiaux",
        "Localiser les grands détroits, canaux et ports, et expliquer leur importance stratégique",
        "Décrire les ressources, les menaces et la protection des espaces maritimes",
      ],
      sections: [
        {
          titre: "Le conteneur, petite boîte qui a changé le monde",
          blocs: [
            { t: "texte", md: "Environ **80 %** du commerce mondial de marchandises, en volume, passe par la mer. C'est la **maritimisation** de l'économie. Le bateau est lent, mais il transporte d'énormes quantités pour un prix très bas." },
            { t: "definition", terme: "Conteneur", md: "Une **boîte métallique de taille standardisée**, inventée aux États-Unis dans les années 1950. On la charge à l'usine, puis elle passe du camion au train et au navire **sans qu'on ouvre la boîte**. On mesure les conteneurs en **EVP** (équivalent vingt pieds : une boîte d'environ 6 m de long)." },
            { t: "texte", md: "Avant le conteneur, des dockers chargeaient les sacs et les caisses un par un : un navire restait des jours au port. Aujourd'hui, des grues géantes le vident en quelques heures. C'est ==l'élément qui a le plus fait baisser le coût du transport maritime== depuis les années 1960. Les plus grands **porte-conteneurs** mesurent 400 m de long et transportent **plus de 20 000 conteneurs**." },
            { t: "schema", titre: "La chaîne logistique d'un téléviseur fabriqué en Chine et vendu à Paris", legende: "Le même conteneur passe de l'usine au magasin sans être ouvert : c'est ce qui rend le transport si rapide et si bon marché.", svg: `<svg viewBox="0 0 400 240"><path class="aplat trait-fin" d="M22 96 L22 66 L36 56 L36 66 L50 56 L50 66 L64 56 L64 96 Z"/><rect class="aplat trait-fin" x="68" y="44" width="8" height="52"/><line class="trait-fin" x1="16" y1="96" x2="84" y2="96"/><path class="trait-fin" d="M90 76 L140 76" marker-end="url(#fl)"/><path class="trait" d="M160 96 L160 40 L230 40 M214 40 L214 96 M160 40 L146 40"/><line class="trait-fin" x1="190" y1="40" x2="190" y2="60"/><rect class="aplat-fort" x="180" y="60" width="20" height="10"/><line class="trait-fin" x1="140" y1="96" x2="240" y2="96"/><path class="trait-fin" d="M240 76 L264 76" marker-end="url(#fl)"/><rect class="aplat-fort" x="286" y="68" width="13" height="12"/><rect class="aplat-fort" x="301" y="68" width="13" height="12"/><rect class="aplat-fort" x="316" y="68" width="13" height="12"/><rect class="aplat-fort" x="331" y="68" width="13" height="12"/><rect class="aplat-fort" x="301" y="56" width="13" height="12"/><rect class="aplat-fort" x="316" y="56" width="13" height="12"/><rect class="aplat trait-fin" x="352" y="56" width="12" height="24"/><path class="aplat trait-fin" d="M272 80 L384 80 L372 96 L284 96 Z"/><path class="trait-fin" d="M270 102 Q280 98 290 102 T310 102 T330 102 T350 102 T370 102 T390 102"/><text class="texte-petit" x="50" y="116" text-anchor="middle">1. Usine</text><text class="texte-petit" x="190" y="116" text-anchor="middle">2. Port de départ</text><text class="texte-petit" x="328" y="116" text-anchor="middle">3. Traversée</text><text class="texte-petit" x="328" y="130" text-anchor="middle">Malacca, Suez</text><path class="trait-fin" d="M392 108 L392 150" marker-end="url(#fl)"/><path class="trait" d="M370 200 L370 150 L304 150 M320 150 L320 200 M370 150 L384 150"/><line class="trait-fin" x1="344" y1="150" x2="344" y2="168"/><rect class="aplat-fort" x="334" y="168" width="20" height="10"/><line class="trait-fin" x1="296" y1="200" x2="390" y2="200"/><path class="trait-fin" d="M296 182 L252 182" marker-end="url(#fl)"/><rect class="aplat-fort" x="172" y="170" width="46" height="22"/><rect class="aplat trait-fin" x="220" y="178" width="16" height="14"/><circle class="trait-fin" cx="184" cy="196" r="4"/><circle class="trait-fin" cx="206" cy="196" r="4"/><circle class="trait-fin" cx="228" cy="196" r="4"/><path class="trait-fin" d="M166 182 L104 182" marker-end="url(#fl)"/><path class="aplat trait-fin" d="M30 200 L30 168 L60 150 L90 168 L90 200 Z"/><rect class="aplat-papier trait-fin" x="53" y="180" width="14" height="20"/><text class="texte-petit" x="345" y="218" text-anchor="middle">4. Le Havre</text><text class="texte-petit" x="204" y="218" text-anchor="middle">5. Camion ou train</text><text class="texte-petit" x="60" y="218" text-anchor="middle">6. Magasin à Paris</text><text class="texte-pigment" x="200" y="20" text-anchor="middle">un seul conteneur, jamais ouvert</text></svg>` },
          ],
        },
        {
          titre: "Routes maritimes, détroits et canaux",
          blocs: [
            { t: "texte", md: "Les grandes **routes maritimes** relient les trois grands pôles de l'économie : l'**Asie de l'Est**, l'**Europe** et l'**Amérique du Nord**. La plus fréquentée va de l'Asie de l'Est à l'Europe en passant par le détroit de **Malacca** et le canal de **Suez**. Ces routes doivent franchir des **passages étroits**, naturels (les détroits) ou creusés par l'homme (les canaux)." },
            { t: "carte", fond: "monde", titre: "Les grands passages stratégiques", reperes: [{ nom: "Shanghai", lat: 31.23, lon: 121.47 }, { nom: "Détroit de Malacca", lat: 4.00, lon: 100.00 }, { nom: "Détroit d'Ormuz", lat: 26.57, lon: 56.25 }, { nom: "Bab-el-Mandeb", lat: 12.58, lon: 43.33 }, { nom: "Canal de Suez", lat: 30.70, lon: 32.34 }, { nom: "Détroit de Gibraltar", lat: 35.97, lon: -5.48 }, { nom: "Rotterdam", lat: 51.92, lon: 4.48 }, { nom: "Canal de Panama", lat: 9.08, lon: -79.68 }], traits: [{ de: [31.23, 121.47], a: [4.00, 100.00] }, { de: [4.00, 100.00], a: [12.58, 43.33] }, { de: [30.70, 32.34], a: [51.92, 4.48] }], legende: "Les flèches résument la grande route Asie de l'Est-Europe, de Shanghai à Rotterdam, par Malacca, Bab-el-Mandeb, Suez et Gibraltar." },
            { t: "tableau", titre: "Les passages à connaître", entetes: ["Passage", "Il relie…", "Pourquoi il compte"], lignes: [["Détroit de **Malacca**", "l'océan Indien et la mer de Chine (Pacifique)", "le plus fréquenté du monde, sur la route Asie-Europe"], ["Détroit d'**Ormuz**", "le golfe Persique et l'océan Indien", "environ un cinquième du pétrole mondial y passe"], ["Détroit de **Bab-el-Mandeb**", "la mer Rouge et le golfe d'Aden", "porte sud de la route de Suez"], ["Canal de **Suez** (1869)", "la mer Méditerranée et la mer Rouge", "évite le contour de l'Afrique"], ["Détroit de **Gibraltar**", "l'Atlantique et la Méditerranée", "entre l'Espagne et le Maroc"], ["Canal de **Panama** (1914)", "l'Atlantique et le Pacifique", "évite le contour de l'Amérique du Sud"]] },
            { t: "exemple", titre: "Le blocage du canal de Suez (mars 2021)", md: "Le porte-conteneurs géant **Ever Given**, poussé par le vent, s'est mis en travers du canal de Suez pendant **six jours**. Plus de **400 navires** ont été bloqués de part et d'autre, et des usines en Europe ont manqué de pièces. Cet accident a montré à quel point l'économie mondiale dépend de ==quelques passages étroits==." },
            { t: "verifie", q: "Le canal de Suez relie…", choix: ["l'Atlantique et le Pacifique", "la Méditerranée et la mer Rouge", "le golfe Persique et l'océan Indien"], bonne: 1, explication: "Suez relie la Méditerranée à la mer Rouge, à travers l'Égypte. C'est le canal de Panama qui relie l'Atlantique au Pacifique, et le détroit d'Ormuz qui ouvre le golfe Persique." },
          ],
        },
        {
          titre: "Les géants portuaires d'Asie",
          blocs: [
            { t: "graphique", type: "barres", titre: "Trafic de quelques grands ports à conteneurs (2023, arrondi)", unite: "millions d'EVP", donnees: [{ label: "Shanghai", valeur: 49 }, { label: "Singapour", valeur: 39 }, { label: "Ningbo", valeur: 35 }, { label: "Shenzhen", valeur: 30 }, { label: "Busan", valeur: 23 }, { label: "Dubaï", valeur: 14 }, { label: "Rotterdam", valeur: 13 }] },
            { t: "texte", md: "**Shanghai**, en Chine, est le **premier port à conteneurs du monde**. Sur les dix premiers ports, la plupart sont en Asie de l'Est, et surtout en Chine : c'est l'« atelier du monde » qui exporte. **Rotterdam** (Pays-Bas) est le premier port d'Europe, loin derrière. Ces ports s'organisent en **façades maritimes** : des littoraux qui regroupent plusieurs grands ports reliés à un arrière-pays riche, comme la façade de la mer du Nord, de Rotterdam au Havre." },
          ],
        },
        {
          titre: "Des océans convoités et menacés",
          blocs: [
            { t: "definition", terme: "ZEE (zone économique exclusive)", md: "Une bande de mer de **200 milles marins** (environ **370 km**) le long des côtes d'un État. Celui-ci y contrôle seul la pêche et les ressources du sous-sol (pétrole, gaz, minerais). Grâce à ses **outre-mer** dispersés sur tous les océans (Polynésie, Nouvelle-Calédonie, La Réunion…), la **France** possède la **deuxième ZEE du monde**." },
            { t: "liste", titre: "Les richesses des océans", items: ["Le **poisson** : des milliards de personnes en mangent régulièrement.", "Le **pétrole et le gaz** des plateformes *offshore*.", "L'**énergie** des éoliennes en mer.", "Les **câbles sous-marins**, qui transportent presque toutes les données d'Internet entre les continents."] },
            { t: "texte", md: "Ces richesses sont menacées : **surpêche**, **pollution** (plastiques, marées noires), **piraterie** dans le golfe de Guinée ou le golfe d'Aden, **tensions** entre États qui se disputent des îles, comme en mer de Chine méridionale. La piraterie n'a donc pas disparu : elle vise aujourd'hui les cargos et leurs équipages." },
            { t: "definition", terme: "Aire marine protégée", md: "Un espace de mer où les activités humaines (pêche, forage, tourisme) sont **limitées ou interdites** pour protéger la vie marine. Elles couvrent environ **8 %** des océans ; l'objectif mondial est **30 % en 2030**. En 2023, les États ont aussi adopté un traité pour protéger la **haute mer**, qui n'appartient à personne." },
            { t: "verifie", q: "Pourquoi la France possède-t-elle la deuxième ZEE du monde ?", choix: ["Parce que la France métropolitaine a des côtes très longues", "Grâce à ses territoires d'outre-mer répartis sur tous les océans", "Parce qu'elle a acheté des zones de pêche"], bonne: 1, explication: "Chaque île d'outre-mer, même petite, donne droit à 200 milles marins de ZEE tout autour d'elle. Les îles de Polynésie et la Nouvelle-Calédonie, dans le Pacifique, pèsent très lourd." },
          ],
        },
      ],
      bilan: "Par la mer passe l'essentiel du commerce mondial : conteneurs, porte-conteneurs géants, ports d'Asie et passages étroits comme Malacca, Ormuz, Suez ou Panama forment la colonne vertébrale de la mondialisation.",
    },
    "4e-geographie-06-etats-unis": {
      accroche: "Ton smartphone fonctionne sans doute avec un système américain, tes séries viennent souvent d'Hollywood et tes recherches passent par Google. Même sans y être jamais allé, tu vis un peu chaque jour avec les États-Unis. D'où vient cette puissance, et tout le territoire en profite-t-il ?",
      objectifs: [
        "Caractériser la puissance des États-Unis dans la mondialisation",
        "Localiser et décrire les grandes régions : Nord-Est, Sun Belt, Rust Belt, façades maritimes",
        "Expliquer les adaptations du territoire et les inégalités qu'elles créent",
      ],
      sections: [
        {
          titre: "La première puissance mondiale",
          blocs: [
            { t: "texte", md: "Les **États-Unis** comptent environ **335 millions d'habitants** sur **9,8 millions de km²** (18 fois la France). Ils sont la **première économie du monde** : ils produisent à eux seuls environ ==un quart de la richesse mondiale==." },
            { t: "graphique", type: "barres", titre: "Les cinq premières économies du monde (PIB, 2024, ordres de grandeur)", unite: "milliers de milliards de dollars", donnees: [{ label: "États-Unis", valeur: 29 }, { label: "Chine", valeur: 18 }, { label: "Allemagne", valeur: 4.7 }, { label: "Japon", valeur: 4 }, { label: "Inde", valeur: 3.9 }] },
            { t: "liste", titre: "Les formes de la puissance américaine", items: ["**Économique** : des firmes géantes (Apple, Amazon, Google, Microsoft), Wall Street, le **dollar**, monnaie des échanges mondiaux.", "**Militaire** : la première armée du monde, avec des bases sur tous les continents.", "**Culturelle** : cinéma d'Hollywood, musique, réseaux sociaux, universités comme Harvard ou Stanford."] },
            { t: "definition", terme: "Soft power", md: "La puissance « douce » : la capacité d'un pays à **influencer** le reste du monde par l'attrait de sa culture, de ses produits et de son mode de vie, sans utiliser la force." },
          ],
        },
        {
          titre: "Des régions inégalement dynamiques",
          blocs: [
            { t: "carte", fond: "monde", titre: "Les États-Unis : villes et régions clés", cadre: [-126, 23, -66, 50], zones: ["US"], reperes: [{ nom: "Boston", lat: 42.36, lon: -71.06 }, { nom: "New York", lat: 40.71, lon: -74.01 }, { nom: "Washington", lat: 38.91, lon: -77.04 }, { nom: "Chicago", lat: 41.88, lon: -87.63 }, { nom: "Detroit", lat: 42.33, lon: -83.05 }, { nom: "Seattle", lat: 47.61, lon: -122.33 }, { nom: "San Francisco", lat: 37.77, lon: -122.42 }, { nom: "Los Angeles", lat: 34.05, lon: -118.24 }, { nom: "Houston", lat: 29.76, lon: -95.37 }, { nom: "Miami", lat: 25.76, lon: -80.19 }, { nom: "Ciudad Juárez", lat: 31.69, lon: -106.42 }], legende: "Megalopolis au nord-est (Boston-Washington), Rust Belt autour des Grands Lacs (Detroit, Chicago), Sun Belt au sud et à l'ouest (Los Angeles, Houston, Miami). L'Alaska et Hawaï ne sont pas représentés." },
            { t: "definition", terme: "Megalopolis", md: "La chaîne de métropoles du **Nord-Est**, de **Boston à Washington**, en passant par New York, Philadelphie et Baltimore. Environ **50 millions** d'habitants, la Bourse de Wall Street, le pouvoir politique (la Maison-Blanche) : c'est le cœur historique de la puissance." },
            { t: "definition", terme: "Sun Belt", md: "La « ceinture du soleil » : les États du **Sud et de l'Ouest**, de la Floride à la Californie, qui attirent habitants et entreprises depuis les années 1970." },
            { t: "tableau", titre: "Trois grandes régions", entetes: ["Région", "Villes", "Ce qui la caractérise"], lignes: [["**Nord-Est** (Megalopolis)", "Boston, New York, Philadelphie, Washington", "finance, pouvoir politique, universités"], ["**Sun Belt**", "Los Angeles, San Francisco, Houston, Dallas, Miami", "nouvelles technologies, cinéma, pétrole, tourisme ; forte croissance"], ["**Rust Belt**", "Detroit, Cleveland, Pittsburgh", "anciennes industries en déclin, perte d'habitants"]] },
            { t: "texte", md: "Pourquoi la Sun Belt attire-t-elle autant ? Un **climat ensoleillé**, des terrains et des impôts moins chers, des **industries nouvelles** (informatique, aéronautique, pétrole au **Texas**, premier État producteur, avec **Houston** pour capitale économique) et une ouverture vers l'Asie et le Mexique. À l'inverse, la **Rust Belt** (« ceinture de la rouille »), autour des **Grands Lacs**, a perdu ses usines d'acier et d'automobiles." },
            { t: "verifie", q: "Comment appelle-t-on la région industrielle en déclin autour des Grands Lacs ?", choix: ["La Sun Belt", "La Rust Belt", "La Megalopolis", "La Silicon Valley"], bonne: 1, explication: "« Rust » veut dire « rouille » : la Rust Belt est la région des vieilles usines fermées, autour de Detroit, Cleveland ou Pittsburgh." },
          ],
        },
        {
          titre: "Un territoire ouvert sur le monde",
          blocs: [
            { t: "liste", titre: "Trois façades maritimes", items: ["La façade **atlantique**, tournée vers l'Europe, avec **New York**.", "La façade **pacifique**, tournée vers l'**Asie**, avec **Los Angeles-Long Beach**, le premier complexe portuaire du pays.", "La façade du **golfe du Mexique**, avec **Houston**, port du pétrole."] },
            { t: "texte", md: "Au sud, la frontière avec le **Mexique** est à la fois une barrière contre les migrants et une **zone d'échanges intenses**. Côté mexicain, des usines d'assemblage appelées **maquiladoras** (à Ciudad Juárez ou Tijuana) profitent des bas salaires pour monter des téléviseurs, des voitures ou des pièces vendues aux États-Unis. L'accord de libre-échange **ALENA**, signé en **1994** avec le Canada et le Mexique, a été remplacé en **2020** par l'**ACEUM**." },
            { t: "attention", md: "La frontière avec le Mexique n'est **pas fermée** aux échanges : chaque jour, des milliers de camions la traversent. Le Mexique est même l'un des tout premiers partenaires commerciaux des États-Unis." },
          ],
        },
        {
          titre: "Silicon Valley : commander sans fabriquer",
          blocs: [
            { t: "exemple", titre: "Étude de cas : la Silicon Valley", etapes: ["Où ? En **Californie**, au sud de San Francisco, autour de la prestigieuse université **Stanford**.", "Qui ? Apple, Google, Meta et des milliers de jeunes entreprises (start-up).", "Quoi ? On y invente des logiciels et des téléphones utilisés dans le monde entier.", "Mais : les téléphones sont **assemblés en Asie**. La Silicon Valley commande la mondialisation sans produire elle-même les objets.", "Revers : les loyers y sont parmi les plus chers du pays ; beaucoup d'employés modestes ne peuvent plus s'y loger."] },
            { t: "texte", md: "La mondialisation creuse donc des **inégalités** à deux échelles : **entre régions** (Sun Belt et Megalopolis gagnantes, Rust Belt perdante) et **entre habitants** d'une même ville, où des quartiers très riches voisinent avec des quartiers pauvres et des sans-abri." },
            { t: "verifie", q: "Quelle affirmation décrit le mieux les inégalités liées à la mondialisation aux États-Unis ?", choix: ["Toutes les régions en profitent de la même façon", "Certaines régions et certains habitants gagnent, d'autres perdent", "Seule la Rust Belt profite de la mondialisation"], bonne: 1, explication: "La Sun Belt et les grandes métropoles gagnent des emplois ; la Rust Belt en perd. Et même dans une ville riche, tout le monde ne profite pas de la croissance." },
          ],
        },
      ],
      bilan: "Première puissance mondiale, les États-Unis organisent leur territoire autour de la Megalopolis, de la Sun Belt et de leurs façades maritimes, tandis que la Rust Belt rappelle que la mondialisation fait aussi des perdants.",
    },
    "4e-geographie-07-afrique": {
      accroche: "En 1960, Lagos, au Nigeria, était une ville d'à peine un million d'habitants. Aujourd'hui, elle en compte plus de 15 millions. Imagine Paris multipliée par quinze en soixante ans : c'est le rythme de l'Afrique d'aujourd'hui.",
      objectifs: [
        "Décrire la croissance démographique et urbaine de l'Afrique de l'Ouest et de l'Afrique australe",
        "Localiser les principaux États, métropoles et ressources de ces deux ensembles",
        "Expliquer l'intégration inégale de ces régions à la mondialisation",
      ],
      sections: [
        {
          titre: "Le continent le plus jeune du monde",
          blocs: [
            { t: "texte", md: "L'**Afrique** compte environ **1,4 milliard** d'habitants, et sa population devrait **presque doubler d'ici 2050**. C'est le continent le plus **jeune** du monde : environ **4 habitants sur 10 ont moins de 15 ans**.\n\nCette jeunesse est une chance (une énorme force de travail) et un défi. Au **Niger**, les femmes ont en moyenne environ 6 enfants : chaque année, il faut construire des écoles, créer des emplois, produire plus de nourriture et trouver de l'eau pour des millions de personnes en plus." },
            { t: "graphique", type: "courbe", titre: "Population de l'agglomération de Lagos (Nigeria)", unite: "millions d'habitants", donnees: [{ label: "1960", valeur: 0.8 }, { label: "1970", valeur: 1.4 }, { label: "1980", valeur: 2.6 }, { label: "1990", valeur: 4.8 }, { label: "2000", valeur: 7.3 }, { label: "2010", valeur: 10.4 }, { label: "2020", valeur: 14.4 }] },
            { t: "texte", md: "Les villes grandissent encore plus vite que la population totale, pour deux raisons : l'**exode rural** (les jeunes ruraux viennent chercher du travail en ville) et le **fort accroissement naturel** des citadins eux-mêmes." },
          ],
        },
        {
          titre: "Deux ensembles régionaux à localiser",
          blocs: [
            { t: "carte", fond: "monde", titre: "Afrique de l'Ouest et Afrique australe", cadre: [-20, -36, 45, 24], zones: ["NG", "GH", "CI", "SN", "ML", "NE", "BF", "ZA", "BW", "NA", "ZM", "ZW", "MZ", "AO"], reperes: [{ nom: "Dakar", lat: 14.72, lon: -17.47 }, { nom: "Bamako", lat: 12.64, lon: -8.00 }, { nom: "Niamey", lat: 13.51, lon: 2.11 }, { nom: "Abidjan", lat: 5.36, lon: -4.01 }, { nom: "Accra", lat: 5.60, lon: -0.19 }, { nom: "Lagos", lat: 6.52, lon: 3.38 }, { nom: "Luanda", lat: -8.84, lon: 13.23 }, { nom: "Johannesburg", lat: -26.20, lon: 28.05 }, { nom: "Durban", lat: -29.86, lon: 31.02 }, { nom: "Le Cap", lat: -33.92, lon: 18.42 }], legende: "Au nord-ouest, l'Afrique de l'Ouest dominée par le Nigeria ; au sud, l'Afrique australe dominée par l'Afrique du Sud." },
            { t: "texte", md: "L'**Afrique de l'Ouest** est dominée par le **Nigeria**, le pays le plus peuplé du continent (plus de 220 millions d'habitants). Sa métropole économique, **Lagos**, dépasse 15 millions d'habitants.\n\nL'**Afrique australe** est dominée par l'**Afrique du Sud**, le pays le plus **industrialisé** du continent. Sa métropole, **Johannesburg**, est née à la fin du XIXe siècle des **mines d'or**. Ses grands ports sont **Durban** et **Le Cap**." },
            { t: "tableau", titre: "Quelques pays et leurs ressources (chiffres arrondis)", entetes: ["Pays", "Habitants", "Une ressource exportée"], lignes: [["Nigeria", "plus de 220 millions", "pétrole"], ["Afrique du Sud", "environ 63 millions", "or, platine, charbon"], ["Ghana", "environ 34 millions", "or, cacao"], ["Côte d'Ivoire", "environ 30 millions", "cacao (1er producteur mondial)"], ["Niger", "environ 27 millions", "uranium"], ["Zambie", "environ 20 millions", "cuivre"], ["Botswana", "environ 2,5 millions", "diamants"], ["Angola", "plus de 35 millions", "pétrole"]] },
          ],
        },
        {
          titre: "Une intégration inégale à la mondialisation",
          blocs: [
            { t: "texte", md: "Ces régions s'intègrent au monde surtout par leurs **ressources** : pétrole, minerais, cacao. Elles les exportent souvent **brutes**, sans les transformer sur place. Leurs revenus dépendent donc des **prix mondiaux** : si le cours du pétrole ou du cacao s'effondre, tout le pays s'appauvrit. C'est pourquoi on dit que leur intégration est ==fragile==." },
            { t: "texte", md: "Les **littoraux** concentrent les grandes villes, les ports et les activités : Dakar, Abidjan, Lagos, Durban, Le Cap. À l'inverse, certains pays n'ont pas d'accès à la mer." },
            { t: "definition", terme: "Pays enclavé", md: "Un pays **sans accès à la mer**, comme le **Mali**, le **Niger**, le **Burkina Faso** ou la **Zambie**. Ses marchandises doivent traverser un pays voisin pour atteindre un port : elles coûtent plus cher et arrivent plus lentement." },
            { t: "texte", md: "Depuis les années 2000, la **Chine** est devenue le **premier partenaire commercial de l'Afrique**. Elle achète des matières premières et construit des routes, des ports, des chemins de fer et des stades, dans le cadre des « nouvelles routes de la soie ». Pour se renforcer, les pays s'unissent aussi en organisations régionales : la **CEDEAO** en Afrique de l'Ouest, la **SADC** en Afrique australe." },
            { t: "verifie", q: "Pourquoi dit-on que l'intégration de l'Afrique de l'Ouest à la mondialisation est « fragile » ?", choix: ["Parce qu'elle n'exporte rien", "Parce qu'elle dépend de l'exportation de quelques matières premières aux prix variables", "Parce qu'elle n'a aucun port"], bonne: 1, explication: "Pétrole, cacao, or, uranium : quand ces prix baissent, les revenus des États s'effondrent. Exporter des produits peu transformés rend l'économie vulnérable." },
          ],
        },
        {
          titre: "Lagos, métropole des contrastes",
          blocs: [
            { t: "exemple", titre: "Étude de cas : Lagos", etapes: ["Une croissance fulgurante : d'environ 1 million d'habitants en 1960 à plus de 15 millions aujourd'hui.", "Une porte sur le monde : son port et le nouveau port en eau profonde de **Lekki**, construit avec des capitaux chinois et ouvert en 2023, exportent le pétrole et importent les produits manufacturés.", "Un CBD moderne sur les îles de Lagos, avec banques et tours de bureaux.", "Mais la majorité des habitants vivent dans des quartiers précaires, comme **Makoko**, bâti sur pilotis dans la lagune."] },
            { t: "texte", md: "Les **inégalités** sont fortes partout : entre villes et campagnes, entre riches et pauvres (Johannesburg est l'une des villes les plus inégalitaires du monde), entre pays côtiers et pays du **Sahel**, frappés par la pauvreté et l'insécurité. Mais le continent change vite : le **téléphone portable** et le **paiement mobile** permettent à des millions de personnes sans compte en banque d'envoyer et de recevoir de l'argent." },
            { t: "savais-tu", md: "Au Kenya, en Afrique de l'Est, le service de paiement par téléphone M-Pesa, lancé en 2007, est utilisé par la grande majorité des adultes. L'Afrique a souvent sauté l'étape du téléphone fixe pour passer directement au mobile !" },
            { t: "verifie", q: "Quel est le pays le plus peuplé d'Afrique ?", choix: ["L'Afrique du Sud", "L'Égypte", "Le Nigeria", "Le Niger"], bonne: 2, explication: "Le Nigeria compte plus de 220 millions d'habitants, bien plus que l'Égypte (environ 110 millions) ou l'Afrique du Sud (environ 63 millions)." },
          ],
        },
      ],
      bilan: "Jeunes, urbaines et riches en ressources, l'Afrique de l'Ouest et l'Afrique australe s'ouvrent au monde par leurs littoraux et leurs métropoles, mais leur intégration reste fragile et inégale.",
    },
    "4e-geographie-08-mondialisation-acteurs-flux": {
      accroche: "Un simple jean vendu 50 € dans un magasin de Lyon a souvent fait plus de kilomètres que toi dans toute ta vie : coton d'Inde, tissu de Chine, couture au Bangladesh, bateau jusqu'en Europe. Qui organise un tel voyage, et qui y gagne vraiment ?",
      objectifs: [
        "Définir la mondialisation et identifier ses acteurs : FTN, États, organisations internationales, ONG",
        "Décrire les différents flux et les interdépendances entre territoires",
        "Expliquer les délocalisations et l'intégration inégale des territoires",
      ],
      sections: [
        {
          titre: "Qu'est-ce que la mondialisation ?",
          blocs: [
            { t: "definition", terme: "Mondialisation", md: "La **mise en relation de toutes les régions du monde** par des échanges de plus en plus nombreux de **marchandises**, de **capitaux**, d'**informations** et de **personnes**." },
            { t: "tableau", titre: "Les quatre grands types de flux", entetes: ["Flux", "Comment il circule", "Exemple"], lignes: [["**Marchandises**", "surtout par la mer, en conteneurs", "des téléphones de Chine vers l'Europe"], ["**Capitaux**", "instantanément, par les Bourses et les banques", "une entreprise française achète une usine au Brésil"], ["**Informations**", "par Internet et les câbles sous-marins", "une vidéo regardée au même moment sur tous les continents"], ["**Personnes**", "en avion, en bateau, à pied", "les migrants et les touristes"]] },
            { t: "attention", md: "On croit souvent que les données d'Internet passent par les satellites. En réalité, ==presque toutes les données entre les continents voyagent dans des câbles posés au fond des océans==. Les satellites n'en transportent qu'une toute petite part." },
          ],
        },
        {
          titre: "Les acteurs de la mondialisation",
          blocs: [
            { t: "definition", terme: "Firme transnationale (FTN)", md: "Une **entreprise présente dans plusieurs pays**, par ses usines, ses bureaux ou ses magasins : Apple, Toyota, Nestlé, TotalEnergies, Samsung… On en compte **plus de 80 000**. Elles organisent la production à l'échelle de la planète." },
            { t: "tableau", titre: "Qui fait la mondialisation ?", entetes: ["Type d'acteur", "Exemples", "Rôle"], lignes: [["**FTN**", "Apple, Toyota, Nestlé", "produire et vendre dans le monde entier"], ["**États**", "la France, la Chine, les États-Unis", "fixer les règles : douanes, impôts, accords"], ["**Organisations internationales**", "OMC (1995, Genève), FMI et Banque mondiale (1944, Washington), ONU", "encadrer le commerce, prêter aux États en difficulté"], ["**ONG**", "Greenpeace, Médecins sans frontières, Oxfam", "aider, alerter, dénoncer certains effets de la mondialisation"]] },
            { t: "texte", md: "L'**OMC** (Organisation mondiale du commerce) fixe les règles du commerce international et règle les disputes entre pays. Les **ONG** (organisations non gouvernementales) sont des associations indépendantes des États. Les mouvements qui critiquent la mondialisation actuelle, jugée trop injuste, sont appelés **altermondialistes** : ils veulent « un autre monde »." },
            { t: "verifie", q: "Greenpeace et Médecins sans frontières sont…", choix: ["des firmes transnationales", "des ONG", "des organisations de l'ONU"], bonne: 1, explication: "Ce sont des organisations non gouvernementales : des associations indépendantes des États, qui agissent à l'échelle mondiale." },
          ],
        },
        {
          titre: "Délocalisations et division internationale du travail",
          blocs: [
            { t: "definition", terme: "Délocalisation", md: "Le **transfert d'une activité** (une usine, un centre d'appels) **vers un pays où les coûts sont plus bas** : salaires, impôts, normes moins strictes. L'entreprise cherche à produire moins cher pour gagner plus." },
            { t: "carte", fond: "monde", titre: "Le voyage d'un jean", reperes: [{ nom: "Ahmedabad (coton)", lat: 23.02, lon: 72.57 }, { nom: "Canton (tissage)", lat: 23.13, lon: 113.26 }, { nom: "Dacca (couture)", lat: 23.81, lon: 90.41 }, { nom: "Lyon (vente)", lat: 45.76, lon: 4.84 }, { nom: "New York (publicité)", lat: 40.71, lon: -74.01 }], traits: [{ de: [23.02, 72.57], a: [23.13, 113.26] }, { de: [23.13, 113.26], a: [23.81, 90.41] }, { de: [23.81, 90.41], a: [45.76, 4.84] }], legende: "Coton cultivé en Inde, tissé en Chine, cousu au Bangladesh, transporté par conteneur, vendu en France ; la publicité est conçue à New York." },
            { t: "exemple", titre: "Qui gagne quoi sur un jean à 50 € ?", md: "Une dizaine de pays interviennent. Mais l'ouvrière du Bangladesh, qui le coud, touche **moins de 1 €** par jean. L'essentiel du prix revient à la **marque**, à la publicité, au transport et au magasin. C'est la **division internationale du travail** : chaque territoire fait une étape, selon ses atouts (savoir-faire, bas salaires, ports)." },
            { t: "etapes", titre: "La fabrication d'un smartphone", items: [{ titre: "Conception", md: "Ingénieurs et designers en Californie." }, { titre: "Composants", md: "Puces, écrans et mémoires fabriqués en Corée du Sud, au Japon, à Taïwan." }, { titre: "Assemblage", md: "Dans d'immenses usines en Chine ou en Inde." }, { titre: "Transport", md: "Par avion ou par conteneur vers les marchés." }, { titre: "Vente", md: "Dans les magasins et sur Internet du monde entier." }] },
            { t: "graphique", type: "secteurs", titre: "Qui gagne quoi sur un smartphone ? (étude sur l'iPhone 4, 2011, en % du prix)", unite: "%", donnees: [{ label: "Conception et marque", valeur: 58 }, { label: "Composants", valeur: 22 }, { label: "Autres fournisseurs", valeur: 15 }, { label: "Main-d'œuvre hors Chine", valeur: 3 }, { label: "Assemblage en Chine", valeur: 2 }] },
            { t: "verifie", q: "Dans la fabrication d'un smartphone, quelle étape rapporte la plus grande part de la valeur ?", choix: ["L'assemblage en usine", "La conception et la marque", "Le transport par bateau"], bonne: 1, explication: "Plus de la moitié du prix revient à l'entreprise qui conçoit le téléphone et possède la marque. L'assemblage, pourtant indispensable, ne pèse que quelques pour cent." },
          ],
        },
        {
          titre: "Des territoires interdépendants et inégaux",
          blocs: [
            { t: "texte", md: "Les territoires sont **interdépendants** : un événement dans un pays a des conséquences dans de nombreux autres. En 2020, la pandémie a fermé des usines en Asie : l'Europe a manqué de **masques**, puis de **puces électroniques**, au point que des usines automobiles ont dû s'arrêter. Depuis, certaines entreprises **relocalisent** une partie de leur production près de leurs clients, pour moins dépendre de fournisseurs lointains." },
            { t: "texte", md: "La mondialisation est aussi **inégale**. Trois grands pôles concentrent les flux : l'**Amérique du Nord**, l'**Europe** et l'**Asie de l'Est**. Des **pays émergents** (Chine, Inde, Brésil) les ont rejoints en profitant des délocalisations. Mais les **pays les moins avancés**, surtout en Afrique, restent ==en marge== : ils exportent peu, et souvent seulement des matières premières." },
          ],
        },
      ],
      bilan: "FTN, États, organisations internationales et ONG font circuler marchandises, capitaux, informations et personnes : la mondialisation rend les territoires interdépendants, mais elle profite surtout aux pôles qui conçoivent et commandent.",
    },
    "4e-geographie-09-reperes-methodes": {
      accroche: "Sur la plupart des planisphères, le Groenland paraît aussi grand que l'Afrique. Pourtant, l'Afrique est 14 fois plus vaste ! Les cartes ne mentent pas… mais elles font toujours des choix. Apprendre à les lire, c'est apprendre à ne pas se laisser tromper.",
      objectifs: [
        "Localiser sur un planisphère les grandes métropoles, les détroits et les canaux du programme",
        "Lire des cartes variées : projections, anamorphoses, cartes de flux",
        "Réaliser un croquis de synthèse avec une légende organisée et une échelle adaptée",
      ],
      sections: [
        {
          titre: "Les repères à connaître",
          blocs: [
            { t: "carte", fond: "monde", titre: "Villes mondiales et mégapoles", reperes: [{ nom: "New York", lat: 40.71, lon: -74.01 }, { nom: "Londres", lat: 51.51, lon: -0.13 }, { nom: "Paris", lat: 48.86, lon: 2.35 }, { nom: "Tokyo", lat: 35.68, lon: 139.69 }, { nom: "Shanghai", lat: 31.23, lon: 121.47 }, { nom: "Delhi", lat: 28.61, lon: 77.21 }, { nom: "São Paulo", lat: -23.55, lon: -46.63 }, { nom: "Le Caire", lat: 30.04, lon: 31.24 }, { nom: "Lagos", lat: 6.52, lon: 3.38 }], legende: "Quatre villes mondiales (New York, Londres, Paris, Tokyo) et cinq mégapoles d'Asie, d'Amérique latine et d'Afrique." },
            { t: "carte", fond: "monde", titre: "Canaux et détroits", reperes: [{ nom: "Canal de Panama", lat: 9.08, lon: -79.68 }, { nom: "Canal de Suez", lat: 30.70, lon: 32.34 }, { nom: "Gibraltar", lat: 35.97, lon: -5.48 }, { nom: "Bab-el-Mandeb", lat: 12.58, lon: 43.33 }, { nom: "Ormuz", lat: 26.57, lon: 56.25 }, { nom: "Malacca", lat: 4.00, lon: 100.00 }, { nom: "Béring", lat: 65.75, lon: -168.97 }], legende: "Deux canaux creusés par l'homme et cinq détroits naturels." },
            { t: "tableau", titre: "Où sont les détroits ?", entetes: ["Détroit", "Entre…"], lignes: [["Gibraltar", "l'Espagne et le Maroc"], ["Bab-el-Mandeb", "le Yémen et Djibouti"], ["Ormuz", "l'Iran et la péninsule Arabique (Oman)"], ["Malacca", "la Malaisie et l'île de Sumatra (Indonésie)"], ["Béring", "la Russie et l'Alaska (États-Unis)"]] },
            { t: "liste", titre: "De Shanghai à Rotterdam, un porte-conteneurs rencontre dans l'ordre…", ordonnee: true, items: ["le détroit de **Malacca** (près de Singapour)", "le détroit de **Bab-el-Mandeb**, à l'entrée de la mer Rouge", "le canal de **Suez**", "le détroit de **Gibraltar**", "la Manche, puis **Rotterdam**"] },
            { t: "verifie", q: "Quel passage est le plus fréquenté par les navires de commerce ?", choix: ["Le canal de Panama", "Le détroit de Malacca", "Le détroit de Béring"], bonne: 1, explication: "Malacca voit passer plusieurs fois plus de navires que Panama : c'est le passage obligé entre l'Asie de l'Est, l'océan Indien et l'Europe. Béring, près de l'Arctique, est très peu fréquenté." },
          ],
        },
        {
          titre: "Toute carte déforme",
          blocs: [
            { t: "texte", md: "La Terre est ronde ; une carte est plate. Pour passer de l'une à l'autre, il faut choisir une **projection**, et toutes déforment quelque chose. La célèbre **projection de Mercator** conserve les angles (pratique pour naviguer) mais **agrandit énormément les régions proches des pôles**. Voilà pourquoi le Groenland y paraît aussi grand que l'Afrique." },
            { t: "definition", terme: "Carte par anamorphose", md: "Une carte qui **déforme la taille des pays selon une donnée** (population, richesse, touristes) : plus la valeur est grande, plus le pays est gros. Sur une anamorphose de la population, la Chine et l'Inde deviennent énormes, et le Canada, peu peuplé, minuscule." },
            { t: "texte", md: "Sur une **carte des flux**, les flèches ont une **épaisseur proportionnelle** à l'importance de l'échange. Sur une carte des flux touristiques, la flèche la plus épaisse relie ==des pays européens entre eux== : la plupart des touristes voyagent dans leur propre région du monde." },
          ],
        },
        {
          titre: "Choisir la bonne échelle",
          blocs: [
            { t: "tableau", titre: "Une échelle pour chaque question", entetes: ["Échelle", "Ce qu'elle montre", "Exemple de sujet"], lignes: [["**Mondiale**", "les grands ensembles, les flux entre continents", "les grandes routes maritimes"], ["**Nationale**", "les régions d'un pays", "les régions des États-Unis"], ["**Locale**", "les quartiers, les rues", "les quartiers de São Paulo"]] },
            { t: "exemple", titre: "Lire une échelle numérique : 1/1 000 000", etapes: ["1/1 000 000 signifie : 1 cm sur la carte = 1 000 000 cm sur le terrain.", "1 000 000 cm = 10 000 m = 10 km.", "Donc 1 cm sur la carte représente **10 km** sur le terrain.", "Deux villes distantes de 4,5 cm sur la carte sont à 45 km l'une de l'autre."] },
          ],
        },
        {
          titre: "Réaliser un croquis de synthèse",
          blocs: [
            { t: "schema", titre: "Les trois familles de figurés", legende: "On choisit le figuré selon la forme de ce qu'on représente : un point pour un lieu, une ligne pour un trajet, un aplat pour une région.", svg: `<svg viewBox="0 0 400 210"><text class="texte" x="12" y="44">Ponctuels</text><circle class="aplat-fort" cx="130" cy="40" r="8"/><text class="texte-petit" x="144" y="44">métropole</text><rect class="aplat-fort" x="224" y="34" width="12" height="12"/><text class="texte-petit" x="242" y="44">port</text><circle class="aplat-fort" cx="306" cy="40" r="4"/><text class="texte-petit" x="316" y="44">ville</text><line class="trait-fin" x1="10" y1="75" x2="390" y2="75"/><text class="texte" x="12" y="109">Linéaires</text><line class="trait" x1="120" y1="105" x2="160" y2="105"/><text class="texte-petit" x="166" y="109">frontière</text><path d="M232 105 L274 105" stroke="var(--pigment)" stroke-width="5" fill="none" marker-end="url(#fl-p)"/><text class="texte-petit" x="284" y="109">flux</text><line class="pointille" x1="318" y1="105" x2="348" y2="105"/><text class="texte-petit" x="354" y="109">route</text><line class="trait-fin" x1="10" y1="140" x2="390" y2="140"/><text class="texte" x="12" y="174">De surface</text><rect class="aplat-fort" x="120" y="161" width="26" height="18"/><text class="texte-petit" x="152" y="174">espace moteur</text><rect class="aplat trait-fin" x="250" y="161" width="26" height="18"/><text class="texte-petit" x="282" y="174">en difficulté</text></svg>` },
            { t: "propriete", titre: "TOLE : les quatre éléments obligatoires", md: "Tout croquis doit comporter un **T**itre, une **O**rientation (la flèche du nord), une **L**égende et une **É**chelle. La légende est **organisée** en 2 ou 3 parties, chacune avec un titre qui répond au sujet." },
            { t: "etapes", titre: "Réaliser un croquis de synthèse", items: [{ titre: "Analyser le sujet", md: "Comprendre les mots du titre et délimiter l'espace étudié." }, { titre: "Construire la légende", md: "Choisir 2 ou 3 parties et les figurés de chaque information." }, { titre: "Dessiner", md: "Commencer par les aplats de surface, puis les lignes, enfin les points." }, { titre: "Nommer", md: "Écrire les noms des lieux importants, à l'horizontale et lisiblement." }, { titre: "Vérifier TOLE", md: "Titre, orientation, légende, échelle : rien ne manque ?" }] },
            { t: "exemple", titre: "Croquis : « Les États-Unis dans la mondialisation »", etapes: ["**I. Des espaces moteurs** : Megalopolis et Sun Belt en aplat rouge, métropoles en gros points.", "**II. Des espaces en difficulté** : Rust Belt en aplat gris.", "**III. Un territoire ouvert sur le monde** : façades maritimes et flux en flèches, frontière mexicaine en trait épais.", "Sans oublier le titre, le nord et l'échelle : le croquis est complet."] },
            { t: "verifie", q: "Quel figuré utilise-t-on pour représenter un flux de marchandises ?", choix: ["Un point", "Une flèche", "Un aplat de couleur"], bonne: 1, explication: "Un flux est un déplacement : on le représente par une flèche, figuré linéaire. Son épaisseur peut montrer l'importance du flux." },
          ],
        },
      ],
      bilan: "Bien localiser, savoir qu'une carte fait des choix, adapter l'échelle à la question et organiser sa légende : voilà la boîte à outils du géographe.",
    },
  },
};
