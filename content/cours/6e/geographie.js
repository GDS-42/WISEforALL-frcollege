// Cours ÉCLORE — 6e Géographie. Schéma : docs/COURS.md
export default {
  id: "6e-geographie",
  chapitres: {
    "6e-geographie-01-reperes-terre": {
      accroche: "Imagine une carte postale sans adresse, avec seulement deux nombres : 49° N et 2° E. Grâce à eux, tu peux retrouver la ville d'où elle vient : Paris ! Les géographes ont entouré la Terre de lignes imaginaires pour que chaque lieu ait sa propre « adresse ».",
      objectifs: [
        "Nommer et situer les 6 continents et les 5 océans",
        "Utiliser l'équateur, les tropiques, les pôles et les hémisphères",
        "Lire une carte : légende, échelle, latitude et longitude",
        "Localiser les grands reliefs et les grands fleuves du monde",
      ],
      sections: [
        {
          titre: "Une planète bleue : continents et océans",
          blocs: [
            { t: "texte", md: "Vue de l'espace, la Terre est surtout bleue : les **océans** couvrent environ ==71 % de sa surface==. Les terres émergées forment six grands ensembles, les **continents** : l'Asie, l'Amérique, l'Afrique, l'Antarctique, l'Europe et l'Océanie. On sépare souvent l'Amérique en deux, l'Amérique du Nord et l'Amérique du Sud, reliées par une étroite bande de terre, l'isthme de Panama.\n\nL'Antarctique est un continent à part : recouvert d'une immense calotte de glace, il n'a pas d'habitants permanents, seulement des scientifiques dans des bases de recherche." },
            { t: "definition", terme: "Continent", md: "Une très vaste étendue de terre émergée, entourée en grande partie par les océans." },
            { t: "tableau", titre: "Les continents, du plus vaste au plus petit", entetes: ["Continent", "Superficie (environ)", "Une ville repère"], lignes: [["Asie", "44 millions de km²", "Mumbai (Inde)"], ["Afrique", "30 millions de km²", "Lagos (Nigeria)"], ["Amérique du Nord", "24 millions de km²", "New York (États-Unis)"], ["Amérique du Sud", "18 millions de km²", "São Paulo (Brésil)"], ["Antarctique", "14 millions de km²", "aucune ville, des bases scientifiques"], ["Europe", "10 millions de km²", "Paris (France)"], ["Océanie", "moins de 9 millions de km²", "Sydney (Australie)"]] },
            { t: "carte", fond: "monde", titre: "Les cinq océans", reperes: [{ nom: "Océan Pacifique", lat: 0, lon: -150 }, { nom: "Océan Atlantique", lat: 25, lon: -40 }, { nom: "Océan Indien", lat: -20, lon: 75 }, { nom: "Océan Austral", lat: -60, lon: 0 }, { nom: "Océan Arctique", lat: 78, lon: -160 }], legende: "Les cinq océans communiquent entre eux : ils forment un seul océan mondial, découpé en cinq parties." },
            { t: "graphique", type: "barres", titre: "Superficie des océans (valeurs arrondies)", unite: "millions de km²", donnees: [{ label: "Pacifique", valeur: 161 }, { label: "Atlantique", valeur: 85 }, { label: "Indien", valeur: 70 }, { label: "Austral", valeur: 22 }, { label: "Arctique", valeur: 15 }] },
            { t: "texte", md: "Le **Pacifique** est de loin le plus vaste : il pourrait contenir tous les continents réunis ! L'**Atlantique** sépare l'Europe et l'Afrique de l'Amérique. L'océan **Indien** baigne le sud de l'Asie et l'est de l'Afrique. L'océan **Austral** entoure l'Antarctique, et l'océan **Arctique**, en partie gelé, occupe la région du pôle Nord." },
            { t: "verifie", q: "Quel océan entoure l'Antarctique ?", choix: ["L'océan Arctique", "L'océan Austral", "L'océan Indien"], bonne: 1, explication: "L'océan Austral fait le tour de l'Antarctique, tout au sud du globe. L'Arctique est à l'opposé, autour du pôle Nord : attention à ne pas les confondre !" },
          ],
        },
        {
          titre: "Des lignes imaginaires autour du globe",
          blocs: [
            { t: "texte", md: "Pour se repérer sur une sphère, les géographes ont tracé des **lignes imaginaires**. Tu ne les verras jamais sur le terrain, mais elles figurent sur presque toutes les cartes.\n\nL'**équateur** fait le tour de la Terre à égale distance des deux pôles : c'est la latitude 0°. Les **tropiques** sont deux cercles parallèles à l'équateur, à environ 23° de latitude : le **tropique du Cancer** au nord, le **tropique du Capricorne** au sud. Les **pôles** Nord et Sud sont les deux points extrêmes, à 90°." },
            { t: "schema", titre: "Les parallèles du globe", legende: "Les parallèles sont des cercles parallèles à l'équateur. Plus on s'approche des pôles, plus ils sont petits.", svg: `<svg viewBox="0 0 400 260"><circle class="aplat" cx="145" cy="130" r="90"/><circle class="trait" cx="145" cy="130" r="90" fill="none"/><line class="trait" x1="55" y1="130" x2="235" y2="130"/><line class="pointille" x1="62" y1="94" x2="228" y2="94"/><line class="pointille" x1="62" y1="166" x2="228" y2="166"/><circle class="aplat-fort" cx="145" cy="40" r="4"/><circle class="aplat-fort" cx="145" cy="220" r="4"/><text class="texte-petit" x="145" y="28" text-anchor="middle">Pôle Nord (90° N)</text><text class="texte-petit" x="145" y="240" text-anchor="middle">Pôle Sud (90° S)</text><text class="texte-main" x="145" y="120" text-anchor="middle">hémisphère Nord</text><text class="texte-main" x="145" y="153" text-anchor="middle">hémisphère Sud</text><text class="texte-petit" x="245" y="98">Tropique du Cancer</text><text class="texte" x="245" y="134">Équateur</text><text class="texte-petit" x="245" y="170">Tropique du Capricorne</text><text class="texte-petit" x="54" y="98" text-anchor="end">23° N</text><text class="texte-petit" x="48" y="134" text-anchor="end">0°</text><text class="texte-petit" x="54" y="170" text-anchor="end">23° S</text></svg>` },
            { t: "definition", terme: "Hémisphère", md: "Une moitié de la Terre. L'équateur partage le globe en **hémisphère Nord** et **hémisphère Sud**. Le méridien de Greenwich, lui, sépare l'hémisphère Ouest de l'hémisphère Est." },
            { t: "astuce", md: "Pour ne pas confondre les tropiques : dans l'alphabet, **Can**cer vient avant **Cap**ricorne, comme le Nord, en haut de la carte, vient avant le Sud quand tu la lis de haut en bas." },
            { t: "verifie", q: "Sydney (Australie) est située à environ 34° de latitude Sud. Dans quel hémisphère se trouve-t-elle ?", choix: ["L'hémisphère Nord", "L'hémisphère Sud", "Sur l'équateur"], bonne: 1, explication: "« Sud » signifie que Sydney est au sud de l'équateur : elle est dans l'hémisphère Sud. Quand c'est l'été en France, c'est l'hiver à Sydney !" },
          ],
        },
        {
          titre: "Lire une carte et donner l'adresse d'un lieu",
          blocs: [
            { t: "texte", md: "Un **planisphère** représente toute la surface de la Terre à plat. Or on ne peut pas aplatir une sphère sans la déformer (essaie avec une peau d'orange !). Sur beaucoup de planisphères, le Groenland paraît aussi grand que l'Afrique, alors qu'il est environ 14 fois plus petit.\n\nUne bonne carte a toujours un **titre**, une **légende** qui explique les couleurs et les symboles, une **échelle** et une **orientation** : le nord est en général en haut." },
            { t: "definition", terme: "Latitude", md: "La position d'un lieu au nord ou au sud de l'équateur, mesurée en degrés : de 0° à l'équateur jusqu'à 90° aux pôles, **Nord** ou **Sud**." },
            { t: "definition", terme: "Longitude", md: "La position d'un lieu à l'est ou à l'ouest du **méridien de Greenwich** (qui passe près de Londres), mesurée en degrés : de 0° à 180°, **Est** ou **Ouest**." },
            { t: "exemple", titre: "Donner l'adresse de Paris sur le globe", etapes: ["Je repère Paris : la ville est au-dessus de l'équateur, donc dans l'hémisphère Nord.", "Je lis la latitude sur les parallèles : environ 49° Nord.", "Je lis la longitude sur les méridiens : environ 2° Est, car Paris est un peu à droite (à l'est) du méridien de Greenwich.", "J'écris l'adresse complète, latitude en premier : ==49° N, 2° E==."] },
            { t: "propriete", titre: "Lire une échelle", md: "Une échelle **1/100 000** signifie que 1 cm sur la carte représente 100 000 cm dans la réalité, soit **1 km**. Plus le nombre du bas est grand, plus la carte montre un vaste espace, avec peu de détails." },
            { t: "attention", md: "Ne mélange pas les deux mesures. Les **parallèles** (lignes couchées, comme l'équateur) servent à lire la **latitude**. Les **méridiens**, longues lignes qui vont d'un pôle à l'autre, servent à lire la **longitude**." },
          ],
        },
        {
          titre: "Les grands repères : montagnes, déserts et fleuves",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quelques grands repères du relief et des fleuves", reperes: [{ nom: "Mont Everest (Himalaya)", lat: 27.99, lon: 86.93 }, { nom: "Mont Blanc (Alpes)", lat: 45.83, lon: 6.86 }, { nom: "Rocheuses", lat: 40.34, lon: -105.68 }, { nom: "Aconcagua (Andes)", lat: -32.65, lon: -70.01 }, { nom: "Sahara", lat: 23, lon: 12 }, { nom: "Nil (Assouan)", lat: 24.09, lon: 32.9 }, { nom: "Amazone (Óbidos)", lat: -1.9, lon: -55.52 }, { nom: "Paris", lat: 48.86, lon: 2.35 }] },
            { t: "tableau", titre: "Les repères à connaître", entetes: ["Repère", "Nature", "Continent", "Un chiffre"], lignes: [["Himalaya", "chaîne de montagnes", "Asie", "mont Everest : 8 849 m, le plus haut sommet du monde"], ["Andes", "chaîne de montagnes", "Amérique du Sud", "Aconcagua : 6 961 m"], ["Rocheuses", "chaîne de montagnes", "Amérique du Nord", "près de 5 000 km de long"], ["Alpes", "chaîne de montagnes", "Europe", "mont Blanc : environ 4 806 m"], ["Sahara", "désert", "Afrique", "environ 9 millions de km², le plus grand désert chaud"], ["Nil", "fleuve", "Afrique", "environ 6 650 km, jusqu'à la Méditerranée"], ["Amazone", "fleuve", "Amérique du Sud", "le plus fort débit du monde"]] },
            { t: "texte", md: "Un **fleuve** est un cours d'eau qui se jette dans une mer ou un océan ; l'endroit où il se jette s'appelle l'**embouchure**. Le Nil traverse l'Afrique du sud au nord, passe par l'Égypte et se jette dans la mer Méditerranée. L'Amazone traverse la forêt amazonienne d'ouest en est jusqu'à l'océan Atlantique." },
            { t: "savais-tu", md: "Le Nil coule vers le nord : sur la carte, il a l'air de « monter » ! Mais un fleuve ne coule ni vers le haut ni vers le bas de la carte : il descend toujours des terres hautes vers la mer." },
            { t: "verifie", q: "Dans quelle chaîne de montagnes se trouve le mont Everest ?", choix: ["Les Alpes", "Les Andes", "L'Himalaya", "Les Rocheuses"], bonne: 2, explication: "L'Everest (8 849 m) se trouve dans l'Himalaya, en Asie, à la frontière entre le Népal et la Chine." },
          ],
        },
      ],
      bilan: "Six continents, cinq océans, des lignes imaginaires et deux nombres, latitude et longitude : te voilà capable de donner l'adresse de n'importe quel lieu de la Terre.",
    },
    "6e-geographie-02-metropoles": {
      accroche: "Il est 8 heures à la gare de Shinjuku, à Tokyo. Chaque jour, environ 3 millions de voyageurs passent par cette seule gare, la plus fréquentée du monde. Bienvenue dans une métropole, une ville si grande qu'elle ne s'arrête presque jamais.",
      objectifs: [
        "Définir une métropole et ses fonctions",
        "Décrire l'organisation d'une métropole, du centre à la périphérie",
        "Comparer la vie à New York ou Paris avec la vie à Mumbai ou Lagos",
        "Localiser les grandes métropoles et connaître leur taille",
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'une métropole ?",
          blocs: [
            { t: "texte", md: "Toutes les grandes villes ne sont pas des métropoles. Une métropole **concentre** les habitants, les emplois, les pouvoirs et les richesses, et elle **commande** un vaste territoire autour d'elle, parfois le monde entier.\n\nOn y trouve des fonctions rares : un gouvernement ou de grandes administrations, des sièges d'entreprises, des banques, une Bourse, des universités, des musées, des hôpitaux spécialisés, un grand aéroport international." },
            { t: "definition", terme: "Métropole", md: "Une très grande ville qui concentre la population, les pouvoirs politiques et économiques et les activités, et qui exerce son influence sur un vaste territoire." },
            { t: "definition", terme: "Agglomération", md: "Une ville-centre et toutes les communes de banlieue qui l'entourent, sans coupure de campagne. La commune de Paris ne compte qu'environ **2 millions** d'habitants, mais son agglomération en rassemble **plus de 10 millions**." },
            { t: "graphique", type: "barres", titre: "Quelques agglomérations (ordres de grandeur, vers 2020)", unite: "millions d'hab.", donnees: [{ label: "Tokyo", valeur: 37 }, { label: "Mumbai", valeur: 21 }, { label: "New York", valeur: 20 }, { label: "Lagos", valeur: 15 }, { label: "Paris", valeur: 11 }, { label: "Lyon", valeur: 2 }] },
            { t: "attention", md: "Les chiffres changent selon les sources, car chaque pays ne trace pas les limites d'une agglomération de la même façon. Retiens des **ordres de grandeur** : dans les classements les plus utilisés, Tokyo, la plus grande agglomération du monde, dépasse 35 millions d'habitants." },
            { t: "carte", fond: "monde", titre: "Quelques grandes métropoles du monde", reperes: [{ nom: "Tokyo", lat: 35.68, lon: 139.69 }, { nom: "Shanghai", lat: 31.23, lon: 121.47 }, { nom: "Delhi", lat: 28.61, lon: 77.21 }, { nom: "Mumbai", lat: 19.08, lon: 72.88 }, { nom: "Le Caire", lat: 30.04, lon: 31.24 }, { nom: "Lagos", lat: 6.45, lon: 3.39 }, { nom: "Paris", lat: 48.86, lon: 2.35 }, { nom: "New York", lat: 40.71, lon: -74.01 }, { nom: "Mexico", lat: 19.43, lon: -99.13 }, { nom: "São Paulo", lat: -23.55, lon: -46.63 }], legende: "Les plus grandes métropoles se trouvent aujourd'hui surtout en Asie, mais elles existent sur tous les continents habités." },
          ],
        },
        {
          titre: "Du centre à la périphérie",
          blocs: [
            { t: "texte", md: "Vue d'avion, une métropole ressemble à une cible. Au **centre**, les quartiers anciens côtoient le **quartier d'affaires**, hérissé de gratte-ciel : le terrain y est si rare et si cher qu'on construit en hauteur. Plus on s'éloigne, plus les immeubles deviennent bas : viennent les **banlieues**, puis des lotissements de maisons au milieu des champs." },
            { t: "schema", titre: "L'organisation d'une métropole", legende: "Une métropole s'organise en auréoles : du centre vers la périphérie, les densités baissent et la ville s'étale sur les campagnes.", svg: `<svg viewBox="0 0 400 280"><circle class="aplat-papier" cx="130" cy="140" r="120"/><circle class="pointille" cx="130" cy="140" r="120" fill="none"/><circle class="aplat" cx="130" cy="140" r="88"/><circle class="trait-fin" cx="130" cy="140" r="88" fill="none"/><circle class="aplat" cx="130" cy="140" r="54"/><circle class="trait-fin" cx="130" cy="140" r="54" fill="none"/><circle class="aplat-papier" cx="130" cy="140" r="20"/><circle class="trait" cx="130" cy="140" r="20" fill="none"/><text class="texte" x="130" y="145" text-anchor="middle">CBD</text><text class="texte-petit" x="130" y="40" text-anchor="middle">Périurbain</text><text class="texte-petit" x="130" y="72" text-anchor="middle">Banlieues</text><text class="texte-petit" x="130" y="106" text-anchor="middle">Centre ancien</text><path d="M22 140 L104 140" fill="none" stroke="var(--pigment)" stroke-width="2.5" marker-end="url(#fl-p)"/><path d="M238 140 L156 140" fill="none" stroke="var(--pigment)" stroke-width="2.5" marker-end="url(#fl-p)"/><path d="M130 252 L130 166" fill="none" stroke="var(--pigment)" stroke-width="2.5" marker-end="url(#fl-p)"/><path class="pointille" d="M215 55 L240 30" marker-end="url(#fl)"/><path class="pointille" d="M45 225 L20 250" marker-end="url(#fl)"/><text class="texte" x="268" y="48">Au centre :</text><text class="texte-petit" x="268" y="66">bureaux, banques,</text><text class="texte-petit" x="268" y="82">musées, pouvoirs</text><text class="texte" x="268" y="116">En périphérie :</text><text class="texte-petit" x="268" y="134">logements, usines,</text><text class="texte-petit" x="268" y="150">zones commerciales</text><path d="M268 186 L298 186" fill="none" stroke="var(--pigment)" stroke-width="2.5" marker-end="url(#fl-p)"/><text class="texte-petit" x="306" y="184">migrations</text><text class="texte-petit" x="306" y="199">pendulaires</text><path class="pointille" d="M268 236 L298 236" marker-end="url(#fl)"/><text class="texte-petit" x="306" y="234">étalement</text><text class="texte-petit" x="306" y="249">urbain</text></svg>` },
            { t: "definition", terme: "CBD (Central Business District)", md: "Le **quartier central des affaires** : bureaux, banques et sièges d'entreprises dans des tours. À New York, c'est **Manhattan**, avec Wall Street ; pour Paris, c'est **La Défense**, à l'ouest de la ville." },
            { t: "definition", terme: "Étalement urbain", md: "L'extension de la ville sur les campagnes voisines : nouveaux quartiers, routes et centres commerciaux grignotent les champs et les forêts." },
            { t: "verifie", q: "Où trouve-t-on le plus souvent les gratte-ciel d'une métropole ?", choix: ["Dans le quartier d'affaires, au centre", "Dans les lotissements de la périphérie", "Dans les champs autour de la ville"], bonne: 0, explication: "Au centre, le terrain est rare et très cher : on construit en hauteur. Les tours du CBD abritent bureaux et sièges d'entreprises." },
          ],
        },
        {
          titre: "Habiter New York ou Paris",
          blocs: [
            { t: "exemple", titre: "Une journée de Maria, à New York", md: "Maria habite une maison du New Jersey, de l'autre côté du fleuve Hudson. Chaque matin, elle prend le train puis le métro pour rejoindre son bureau de Manhattan : près d'une heure de trajet. Comme elle, des millions de personnes entrent chaque jour à Manhattan pour travailler, puis en repartent le soir. Le jour, l'île compte bien plus de monde que la nuit !" },
            { t: "definition", terme: "Migrations pendulaires", md: "Les déplacements quotidiens entre le domicile et le lieu de travail ou d'études : aller le matin, retour le soir, comme le balancier d'une horloge." },
            { t: "texte", md: "Dans les métropoles des pays riches, presque tous les logements ont l'eau courante et l'électricité, et les services sont nombreux : écoles, hôpitaux, transports. Mais tout n'est pas simple. Les logements du centre sont très chers, alors beaucoup de familles s'installent loin, en périphérie. Les trajets s'allongent, les embouteillages et la pollution augmentent, et la ville s'étale." },
          ],
        },
        {
          titre: "Habiter Mumbai ou Lagos",
          blocs: [
            { t: "texte", md: "Mumbai (Inde) et Lagos (Nigeria) grandissent à toute vitesse, pour deux raisons : beaucoup de **naissances**, et l'arrivée de ruraux pauvres qui quittent les campagnes dans l'espoir de trouver du travail en ville. La ville n'a pas le temps de construire assez de logements, de routes ni de réseaux d'eau. Ces métropoles ont pourtant, elles aussi, leurs tours de bureaux et leurs quartiers riches : les inégalités y sont immenses." },
            { t: "definition", terme: "Bidonville", md: "Un quartier construit sans autorisation avec des matériaux de récupération (tôle, bois, bâches). Les logements y sont **précaires**, souvent sans eau courante ni égouts." },
            { t: "exemple", titre: "Dharavi, une ville dans la ville", md: "À Mumbai, le bidonville de **Dharavi** abrite entre 600 000 et un million de personnes sur à peine plus de 2 km², moins que la surface moyenne d'un arrondissement de Paris. Les ruelles sont étroites, l'eau est rare. Mais Dharavi est aussi une ruche : des milliers de petits ateliers y recyclent le plastique, travaillent le cuir ou cousent des vêtements vendus dans toute l'Inde." },
            { t: "tableau", titre: "Deux façons d'habiter une métropole", entetes: ["Thème", "New York, Paris", "Mumbai, Lagos"], lignes: [["Croissance", "lente", "très rapide"], ["Logement", "cher, mais équipé", "nombreux bidonvilles, souvent sans eau courante"], ["Transports", "réseaux de métro et de trains très développés", "trains bondés à Mumbai, embouteillages géants à Lagos"], ["Points communs", "CBD, gratte-ciel, migrations pendulaires", "CBD, gratte-ciel, migrations pendulaires"]] },
            { t: "verifie", q: "Un bidonville comme Dharavi est-il seulement un lieu de misère ?", choix: ["Oui, il n'y a aucune activité", "Non, on y trouve aussi beaucoup d'ateliers et de commerces", "Non, c'est le quartier des banques"], bonne: 1, explication: "Les conditions de vie sont très dures (logements précaires, peu d'eau), mais les habitants y travaillent énormément : recyclage, artisanat, petits commerces." },
          ],
        },
      ],
      bilan: "Une métropole concentre habitants, emplois et pouvoirs. Du CBD aux banlieues, ses habitants vivent des réalités très différentes : tours de verre et bidonvilles peuvent se côtoyer dans la même ville.",
    },
    "6e-geographie-03-ville-de-demain": {
      accroche: "À Copenhague, au Danemark, il est 8 heures. Au feu rouge, ce ne sont pas des voitures qui attendent, mais des dizaines de cyclistes, sous la pluie comme sous le soleil. Dans cette ville, on compte bien plus de vélos que de voitures. Et si la ville de demain ressemblait à ça ?",
      objectifs: [
        "Identifier les grands défis des villes d'aujourd'hui",
        "Décrire les solutions d'une ville durable",
        "Argumenter sur la ville de demain à partir d'exemples réels",
      ],
      sections: [
        {
          titre: "Une planète de citadins",
          blocs: [
            { t: "texte", md: "En 1950, moins d'un humain sur trois vivait en ville. Depuis 2007, c'est plus d'un sur deux : environ ==55 %== aujourd'hui. D'ici 2050, près de 7 humains sur 10 devraient être des citadins, surtout en Afrique et en Asie, où les villes grandissent le plus vite.\n\nInventer la ville de demain, c'est donc décider de la façon dont vivra la majorité de l'humanité." },
            { t: "graphique", type: "courbe", titre: "Part de la population mondiale vivant en ville (valeurs arrondies)", unite: "%", donnees: [{ label: "1950", valeur: 30 }, { label: "1975", valeur: 37 }, { label: "2000", valeur: 47 }, { label: "2007", valeur: 50 }, { label: "2020", valeur: 56 }, { label: "2050 (prévision)", valeur: 68 }] },
            { t: "verifie", q: "D'après la courbe, que devrait-il se passer d'ici 2050 ?", choix: ["La part des citadins va baisser", "La part des citadins va continuer d'augmenter", "La part des citadins ne bougera plus"], bonne: 1, explication: "La courbe monte sans cesse depuis 1950 et la prévision pour 2050 est d'environ 68 % : de plus en plus d'humains vivront en ville." },
          ],
        },
        {
          titre: "Les défis de la ville d'aujourd'hui",
          blocs: [
            { t: "texte", md: "Les villes attirent parce qu'on y trouve du travail, des écoles, des hôpitaux, des loisirs. Mais quand des millions de personnes vivent au même endroit, les problèmes s'accumulent. Pour chaque défi, un géographe cherche la **cause** : c'est elle qui permet de trouver une solution." },
            { t: "tableau", titre: "Des défis, leurs causes, leurs conséquences", entetes: ["Défi", "D'où vient-il ?", "Conséquence"], lignes: [["Pollution de l'air", "voitures, chauffages, usines", "maladies respiratoires"], ["Embouteillages", "trajets en voiture, souvent seul à bord", "temps perdu, bruit, stress"], ["Manque de logements", "la population augmente plus vite que les constructions", "loyers chers, bidonvilles"], ["Déchets", "consommation importante", "décharges, sols pollués"], ["Chaleur en été", "béton et bitume qui stockent la chaleur", "canicules étouffantes"], ["Étalement urbain", "maisons construites toujours plus loin", "champs et forêts grignotés"]] },
            { t: "definition", terme: "Îlot de chaleur urbain", md: "Le phénomène qui rend la ville plus chaude que la campagne autour : le béton, le bitume et les toits sombres stockent la chaleur du soleil le jour et la relâchent la nuit. Pendant une canicule, l'écart peut atteindre plusieurs degrés." },
            { t: "attention", md: "L'étalement urbain n'est pas un détail. Pour loger le même nombre d'habitants, une ville de maisons individuelles occupe beaucoup plus de place qu'une ville d'immeubles. Elle mange des terres agricoles et oblige à prendre la voiture pour tout. Une ville **dense**, mais agréable et verte, est souvent plus économe." },
          ],
        },
        {
          titre: "Les solutions d'une ville durable",
          blocs: [
            { t: "definition", terme: "Développement durable", md: "Un développement qui répond aux besoins des personnes d'aujourd'hui sans empêcher les générations futures de répondre aux leurs." },
            { t: "definition", terme: "Ville durable", md: "Une ville qui permet à ses habitants de se loger, de se déplacer et de travailler sans abîmer l'environnement ni l'avenir des générations futures." },
            { t: "schema", titre: "Coupe d'un écoquartier", legende: "Dans un écoquartier, chaque aménagement répond à un défi : l'énergie, la chaleur, l'eau, les déplacements.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier" x="10" y="190" width="380" height="40"/><line class="trait" x1="10" y1="190" x2="390" y2="190"/><rect class="aplat" x="30" y="80" width="80" height="110"/><rect class="trait" x="30" y="80" width="80" height="110" fill="none"/><path class="aplat-fort" d="M36 80 L56 68 L62 72 L42 80 Z"/><path class="aplat-fort" d="M70 80 L90 68 L96 72 L76 80 Z"/><text class="texte-petit" x="70" y="56" text-anchor="middle">panneaux solaires</text><text class="texte-petit" x="70" y="130" text-anchor="middle">logements</text><line class="trait-fin" x1="30" y1="160" x2="110" y2="160"/><text class="texte-petit" x="70" y="180" text-anchor="middle">commerces</text><rect class="aplat-fort" x="130" y="102" width="70" height="8"/><rect class="aplat" x="130" y="110" width="70" height="80"/><rect class="trait" x="130" y="110" width="70" height="80" fill="none"/><text class="texte-petit" x="165" y="94" text-anchor="middle">toit végétalisé</text><path class="trait-fin" d="M200 106 L206 106 L206 206 L200 206" fill="none"/><rect class="aplat" x="140" y="198" width="60" height="22"/><rect class="trait-fin" x="140" y="198" width="60" height="22" fill="none"/><text class="texte-petit" x="212" y="214">récupération de l'eau de pluie</text><line class="trait" x1="232" y1="190" x2="232" y2="162"/><circle class="aplat" cx="232" cy="150" r="16"/><circle class="trait-fin" cx="232" cy="150" r="16" fill="none"/><text class="texte-petit" x="232" y="126" text-anchor="middle">arbres</text><rect class="aplat-papier" x="256" y="160" width="68" height="26" rx="6"/><rect class="trait" x="256" y="160" width="68" height="26" rx="6" fill="none"/><line class="trait-fin" x1="262" y1="170" x2="318" y2="170"/><text class="texte-petit" x="290" y="152" text-anchor="middle">tramway</text><circle class="trait-fin" cx="350" cy="182" r="8" fill="none"/><circle class="trait-fin" cx="374" cy="182" r="8" fill="none"/><path class="trait-fin" d="M350 182 L360 170 L374 182 M360 170 L366 170" fill="none"/><text class="texte-petit" x="362" y="160" text-anchor="middle">vélo</text></svg>` },
            { t: "liste", titre: "Les grandes solutions", items: ["**Mobilités douces** : la marche et le vélo, grâce à des trottoirs larges et des pistes cyclables séparées des voitures.", "**Transports en commun** : tramway, métro, bus, qui transportent beaucoup de monde avec peu d'énergie par personne.", "**Écoquartiers** : bâtiments bien isolés, panneaux solaires, récupération de l'eau de pluie, place laissée à la nature.", "**Nature en ville** : arbres, parcs, toits végétalisés et jardins partagés, qui rafraîchissent l'air.", "**Agriculture urbaine** : des légumes cultivés sur les toits, dans des jardins partagés ou des fermes en pleine ville.", "**Tri et recyclage** des déchets, pour en faire de nouvelles ressources."] },
            { t: "exemple", titre: "Copenhague, la ville du vélo", md: "À Copenhague, près d'un habitant sur deux se rend au travail ou à l'école à vélo. La ville a construit des centaines de kilomètres de pistes cyclables larges et séparées des voitures, et même des ponts réservés aux vélos. Résultat : moins de bruit, moins de pollution et des habitants en meilleure santé. La ville s'est aussi fixé l'objectif de ne plus réchauffer le climat ; ce but prend plus de temps que prévu, mais il la pousse à se transformer." },
            { t: "verifie", q: "Lequel de ces aménagements aide le plus à lutter contre l'îlot de chaleur urbain ?", choix: ["Un grand parking en bitume", "Un parc planté d'arbres", "Une autoroute urbaine"], bonne: 1, explication: "Les arbres font de l'ombre et rafraîchissent l'air en rejetant de la vapeur d'eau. Le bitume, au contraire, stocke la chaleur." },
          ],
        },
        {
          titre: "Villes nouvelles ou villes transformées ?",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quelques villes laboratoires de la ville durable", cadre: [-20, 15, 140, 62], reperes: [{ nom: "Copenhague", lat: 55.68, lon: 12.57 }, { nom: "Fribourg-en-Brisgau", lat: 47.99, lon: 7.85 }, { nom: "Paris", lat: 48.86, lon: 2.35 }, { nom: "Masdar", lat: 24.43, lon: 54.62 }, { nom: "Songdo", lat: 37.39, lon: 126.65 }] },
            { t: "texte", md: "Certaines villes ont été conçues dès le départ pour être durables. **Masdar**, aux Émirats arabes unis, a été lancée en 2006 en plein désert : rues étroites et ombragées, énergie solaire. Mais elle compte encore bien moins d'habitants que prévu. **Songdo**, en Corée du Sud, a été bâtie sur des terres gagnées sur la mer, autour d'un grand parc central.\n\nCes villes nouvelles restent rares. La plupart des villes de 2050 existent déjà : la ville de demain sera surtout ==la ville d'aujourd'hui, transformée==. À Fribourg-en-Brisgau (Allemagne), le quartier Vauban, construit sur une ancienne caserne, compte des maisons solaires, peu de voitures et beaucoup de jardins. À Paris, des rues deviennent piétonnes et des cours d'école se transforment en « cours oasis » plantées d'arbres." },
            { t: "definition", terme: "Écoquartier", md: "Un quartier conçu pour consommer peu d'énergie, recycler l'eau de pluie, limiter la voiture et laisser une grande place à la nature." },
            { t: "astuce", md: "Pour argumenter sur la ville de demain, pars d'un **problème** (la chaleur en été), propose une **solution** (planter des arbres) et donne un **exemple** réel (les cours oasis de Paris). Problème, solution, exemple : ton argument tient debout." },
            { t: "verifie", q: "Pourquoi une ville d'immeubles consomme-t-elle moins d'espace qu'une ville de pavillons ?", choix: ["Parce qu'on loge plus de monde sur un même terrain en construisant en hauteur", "Parce que les immeubles sont toujours construits sur la mer", "Parce que les habitants y sont moins nombreux"], bonne: 0, explication: "En hauteur, plusieurs familles partagent le même terrain. Une ville dense laisse plus de place aux champs et aux forêts autour d'elle." },
          ],
        },
      ],
      bilan: "La ville de demain se construit aujourd'hui : moins de voitures, plus d'arbres, des logements économes et des transports partagés. Chaque ville peut devenir plus durable, à commencer par la tienne.",
    },
    "6e-geographie-04-contraintes-biodiversite": {
      accroche: "À Iqaluit, capitale du Nunavut, dans le Grand Nord canadien, il fait souvent −30 °C en février. Aucune route ne relie la ville au reste du pays : tout arrive par avion ou, l'été, par bateau. Pourtant, plus de 7 000 personnes y vivent toute l'année. Comment fait-on pour habiter là ?",
      objectifs: [
        "Définir une contrainte naturelle et un espace de faible densité",
        "Expliquer comment les habitants s'adaptent au froid, à l'aridité, à l'altitude et à l'isolement",
        "Comprendre pourquoi l'Amazonie est un espace précieux et menacé",
        "Localiser des espaces de faible densité dans le monde",
      ],
      sections: [
        {
          titre: "Des espaces peu peuplés, mais pas vides",
          blocs: [
            { t: "texte", md: "Sur une grande partie de la Terre, les habitants sont rares : la glace du Grand Nord, le sable du Sahara, les sommets de l'Himalaya, la forêt amazonienne. Ce sont des espaces de **faible densité**. Attention : peu peuplé ne veut pas dire vide ! Des peuples y vivent depuis des siècles, en s'adaptant à un milieu difficile." },
            { t: "definition", terme: "Espace de faible densité", md: "Un espace qui compte peu d'habitants au km² : souvent moins de 10, parfois moins de 1." },
            { t: "definition", terme: "Contrainte naturelle", md: "Un élément du milieu qui rend la vie humaine difficile : le **froid**, l'**aridité** (le manque d'eau), l'**altitude**, l'**isolement** ou une **forêt très dense**." },
            { t: "carte", fond: "monde", titre: "Des espaces à fortes contraintes naturelles", reperes: [{ nom: "Iqaluit (froid)", lat: 63.75, lon: -68.52 }, { nom: "Agadez (aridité)", lat: 16.97, lon: 7.99 }, { nom: "Namche Bazar (altitude)", lat: 27.8, lon: 86.71 }, { nom: "Manaus (forêt dense)", lat: -3.12, lon: -60.02 }, { nom: "Pitcairn (isolement)", lat: -25.07, lon: -130.1 }], legende: "Chaque repère montre un lieu habité où une contrainte domine." },
            { t: "tableau", titre: "Des densités très faibles (ordres de grandeur)", entetes: ["Espace", "Densité approximative"], lignes: [["Nunavut (Grand Nord canadien)", "moins de 0,1 hab/km²"], ["Groenland", "moins de 0,1 hab/km²"], ["Sahara", "moins de 1 hab/km² en moyenne"], ["État d'Amazonas (Brésil)", "environ 2 à 3 hab/km²"], ["Pour comparer : la France", "environ 100 hab/km²"]] },
          ],
        },
        {
          titre: "Vivre avec le froid : le Grand Nord",
          blocs: [
            { t: "texte", md: "Dans le Grand Nord, l'hiver dure huit mois et le soleil se montre à peine quelques heures par jour en décembre. Le sol lui-même est gelé en profondeur : c'est le **pergélisol**. Si l'on posait une maison chauffée directement dessus, la chaleur ferait fondre la glace du sol, qui deviendrait boueux, et la maison s'enfoncerait." },
            { t: "definition", terme: "Pergélisol", md: "Un sol gelé en profondeur toute l'année. Seule une mince couche, en surface, dégèle pendant le court été." },
            { t: "schema", titre: "Une maison sur pilotis dans le Grand Nord", legende: "Les pilotis tiennent la maison au-dessus du sol : la chaleur ne fait pas fondre le pergélisol, et le sol ne s'affaisse pas.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier" x="10" y="130" width="380" height="20"/><rect class="aplat" x="10" y="150" width="380" height="80"/><line class="trait" x1="10" y1="130" x2="390" y2="130"/><line class="pointille" x1="10" y1="150" x2="390" y2="150"/><path class="aplat" d="M110 60 L180 25 L250 60 Z"/><path class="trait" d="M110 60 L180 25 L250 60 Z" fill="none"/><rect class="aplat-papier" x="120" y="60" width="120" height="50"/><rect class="trait" x="120" y="60" width="120" height="50" fill="none"/><rect class="trait-fin" x="140" y="72" width="22" height="18" fill="none"/><rect class="trait-fin" x="198" y="72" width="22" height="18" fill="none"/><line class="trait" x1="135" y1="110" x2="135" y2="195"/><line class="trait" x1="180" y1="110" x2="180" y2="195"/><line class="trait" x1="225" y1="110" x2="225" y2="195"/><path class="trait-fin" d="M95 121 L240 121" marker-end="url(#fl)"/><text class="texte-petit" x="250" y="124">air froid</text><text class="texte-petit" x="255" y="144">sol qui dégèle l'été</text><text class="texte" x="255" y="185">pergélisol</text><text class="texte-petit" x="255" y="202">gelé toute l'année</text><text class="texte-petit" x="126" y="178" text-anchor="end">pilotis</text></svg>` },
            { t: "exemple", titre: "Les Inuits, hier et aujourd'hui", md: "Dans le Grand Nord canadien, les **Inuits** vivaient autrefois de la chasse au phoque et de la pêche, et se déplaçaient en traîneau à chiens. Aujourd'hui, ils circulent en motoneige, habitent des maisons chauffées sur pilotis et reçoivent une grande partie de leur nourriture par avion, à des prix très élevés. Ils gardent pourtant la chasse et la pêche traditionnelles, qui font partie de leur culture." },
            { t: "savais-tu", md: "En inuktitut, la langue des Inuits, le mot « iglou » veut simplement dire « maison ». Les iglous de neige servaient surtout d'abris pendant les longues expéditions de chasse." },
          ],
        },
        {
          titre: "Vivre avec le manque d'eau et l'altitude",
          blocs: [
            { t: "texte", md: "Le **Sahara** est le plus grand désert chaud du monde : dans certaines régions, il tombe moins de 20 mm de pluie par an. Les hommes vivent surtout dans les **oasis**, là où l'on peut atteindre l'eau souterraine. Des canaux souterrains, les **foggaras**, amènent l'eau sans qu'elle s'évapore. À l'ombre des palmiers-dattiers, on cultive légumes et céréales. Les **Touaregs**, peuple traditionnellement nomade, parcourent le désert avec leurs troupeaux ; leurs vêtements amples et leur chèche les protègent du soleil et du sable." },
            { t: "definition", terme: "Oasis", md: "Un lieu du désert où l'eau est présente (source, nappe souterraine), ce qui permet de cultiver et d'habiter." },
            { t: "texte", md: "En montagne, la contrainte, c'est l'**altitude** : plus on monte, plus il fait froid et plus l'air manque d'oxygène. Les pentes sont raides. Dans l'Himalaya, les habitants aménagent des **cultures en terrasses**, de petits champs plats taillés en escaliers sur les versants. Les **Sherpas**, au Népal, sont réputés pour leur résistance en altitude : beaucoup guident aujourd'hui les alpinistes vers l'Everest." },
            { t: "graphique", type: "barres", titre: "Quelques grands sommets du monde", unite: "m", donnees: [{ label: "Everest", valeur: 8849 }, { label: "Aconcagua", valeur: 6961 }, { label: "Kilimandjaro", valeur: 5895 }, { label: "Mont Blanc", valeur: 4806 }] },
            { t: "verifie", q: "À quoi servent les cultures en terrasses ?", choix: ["À créer des surfaces planes pour cultiver sur des pentes raides", "À attirer les skieurs en hiver", "À protéger les maisons du pergélisol"], bonne: 0, explication: "Sur un versant raide, la terre et l'eau dévalent la pente. Les terrasses créent de petits champs plats qui retiennent le sol et l'eau." },
          ],
        },
        {
          titre: "L'Amazonie, un trésor de biodiversité menacé",
          blocs: [
            { t: "texte", md: "L'**Amazonie** est la plus grande forêt tropicale du monde : environ ==6 millions de km²==, plus de dix fois la France. Elle s'étend sur neuf pays et territoires d'Amérique du Sud, surtout le **Brésil**, qui en possède environ 60 %. Il y fait chaud et humide toute l'année. La forêt est si dense que les routes sont rares : on se déplace surtout en bateau sur l'Amazone et ses affluents." },
            { t: "definition", terme: "Biodiversité", md: "La diversité de toutes les formes de vie (plantes, animaux, champignons, micro-organismes) dans un milieu. L'Amazonie abrite environ une espèce connue sur dix." },
            { t: "definition", terme: "Déforestation", md: "La destruction de la forêt pour cultiver, élever du bétail, extraire des minerais ou construire des routes." },
            { t: "texte", md: "Depuis les années 1970, la forêt recule. La **première cause** est l'**élevage de bovins** : on brûle la forêt pour créer des pâturages. Viennent ensuite les champs de soja, les mines d'or et les routes, qui ouvrent la forêt à de nouveaux arrivants. Près d'un cinquième de l'Amazonie brésilienne a déjà disparu.\n\nCette destruction menace les animaux et les plantes, mais aussi les **peuples autochtones**, comme les **Yanomamis**, qui vivent de la chasse, de la pêche et de petites cultures. Leur territoire est envahi par des chercheurs d'or illégaux qui polluent les rivières au mercure." },
          ],
        },
        {
          titre: "Quand la contrainte devient un atout",
          blocs: [
            { t: "texte", md: "Une contrainte peut aussi devenir une **richesse**. La neige et les pentes des Alpes attirent des millions de skieurs chaque hiver. Le sous-sol glacé de l'**Alaska** contient du pétrole, exploité depuis les années 1970. Les dunes du Sahara, les sommets de l'Himalaya et la forêt amazonienne attirent des touristes du monde entier. Ces activités apportent des emplois, mais elles peuvent aussi abîmer des milieux fragiles et bousculer la vie des peuples qui y habitent." },
            { t: "verifie", q: "Lequel de ces exemples montre une contrainte devenue un atout ?", choix: ["La neige des Alpes qui attire les skieurs", "Le pergélisol qui fait s'enfoncer les maisons", "La sécheresse qui détruit les récoltes"], bonne: 0, explication: "La neige rend la vie difficile en montagne, mais elle permet aussi le tourisme d'hiver, qui fait vivre de nombreuses vallées alpines." },
          ],
        },
      ],
      bilan: "Froid, aridité, altitude, isolement, forêt dense : ces contraintes expliquent la faible densité de nombreux espaces. Mais partout, les habitants s'adaptent, et certaines contraintes deviennent même des atouts.",
    },
    "6e-geographie-05-espaces-agricoles": {
      accroche: "En juillet, au cœur de la Beauce, une moissonneuse-batteuse avance seule au milieu d'un océan de blé doré. À l'horizon, pas une haie, pas un arbre : seulement les flèches de la cathédrale de Chartres, que l'on aperçoit à des kilomètres. Ici, les champs sont immenses, mais les habitants sont rares.",
      objectifs: [
        "Distinguer agriculture productiviste et agriculture vivrière",
        "Décrire la Beauce, les Grandes Plaines et le Sahel",
        "Expliquer comment ces espaces sont reliés au reste du monde",
        "Comparer les espaces agricoles des pays riches et des pays pauvres",
      ],
      sections: [
        {
          titre: "Deux façons de cultiver la terre",
          blocs: [
            { t: "texte", md: "Partout dans le monde, des agriculteurs nourrissent l'humanité, mais ils ne travaillent pas de la même façon. En France, un céréalier cultive seul des centaines d'hectares avec ses machines. Au Niger, toute une famille travaille à la main un petit champ de mil. Deux agricultures, deux façons d'habiter un espace de faible densité." },
            { t: "definition", terme: "Agriculture productiviste", md: "Une agriculture qui cherche à produire le plus possible sur chaque hectare, avec des machines, des engrais, des pesticides et peu de travailleurs. La production est vendue, souvent exportée." },
            { t: "definition", terme: "Agriculture vivrière", md: "Une agriculture qui sert d'abord à **nourrir la famille** de l'agriculteur. Le peu qui reste est vendu au marché local." },
            { t: "definition", terme: "Rendement agricole", md: "La quantité récoltée sur une surface donnée, par exemple en quintaux (1 quintal = 100 kg) par hectare. En Beauce, le blé dépasse souvent 70 quintaux par hectare ; au Sahel, le mil en donne souvent moins de 10." },
            { t: "tableau", titre: "Deux agricultures face à face", entetes: ["Critère", "Agriculture productiviste", "Agriculture vivrière"], lignes: [["But", "vendre, exporter", "nourrir la famille"], ["Taille des exploitations", "très grande (centaines d'hectares)", "petite (quelques hectares)"], ["Outils", "tracteurs guidés par GPS, moissonneuses", "houe, parfois un animal de trait"], ["Travailleurs", "très peu", "toute la famille"], ["Exemples", "Beauce, Grandes Plaines, Pampa", "Sahel"]] },
          ],
        },
        {
          titre: "La Beauce et les Grandes Plaines : des champs à perte de vue",
          blocs: [
            { t: "citation", texte: "Étoile de la mer, voici la lourde nappe\nEt la profonde houle et l'océan des blés", auteur: "Charles Péguy", source: "Présentation de la Beauce à Notre-Dame de Chartres (1913)" },
            { t: "texte", md: "La **Beauce**, au sud-ouest de Paris, est surnommée le « grenier à blé de la France ». Sur ses sols limoneux très fertiles, on cultive surtout le **blé** et la **betterave sucrière**. Les champs sont immenses et ouverts, les villages groupés et espacés : c'est un paysage d'**openfield**." },
            { t: "schema", titre: "Croquis d'un paysage de Beauce", legende: "Un paysage d'openfield : de vastes champs sans haies, des silos, un gros village groupé et, au loin, la cathédrale de Chartres.", svg: `<svg viewBox="0 0 400 220"><path class="aplat" d="M10 90 L150 90 L60 210 L10 210 Z"/><path class="aplat-papier" d="M150 90 L250 90 L260 210 L60 210 Z"/><path class="aplat" d="M250 90 L390 90 L390 210 L260 210 Z"/><path class="trait-fin" d="M150 90 L60 210 M250 90 L260 210" fill="none"/><line class="trait" x1="10" y1="90" x2="390" y2="90"/><rect class="aplat-fort" x="55" y="55" width="10" height="35"/><rect class="aplat-fort" x="67" y="55" width="10" height="35"/><rect class="aplat-fort" x="79" y="55" width="10" height="35"/><text class="texte-petit" x="72" y="46" text-anchor="middle">silos</text><rect class="aplat-papier" x="186" y="80" width="10" height="10"/><rect class="trait-fin" x="186" y="80" width="10" height="10" fill="none"/><rect class="aplat-papier" x="198" y="78" width="10" height="12"/><rect class="trait-fin" x="198" y="78" width="10" height="12" fill="none"/><rect class="aplat-papier" x="212" y="80" width="10" height="10"/><rect class="trait-fin" x="212" y="80" width="10" height="10" fill="none"/><path class="trait" d="M203 78 L203 66 M199 70 L207 70" fill="none"/><text class="texte-petit" x="204" y="58" text-anchor="middle">village groupé</text><rect class="aplat-fort" x="322" y="74" width="22" height="16"/><path class="aplat-fort" d="M322 74 L326 54 L330 74 Z"/><path class="aplat-fort" d="M336 74 L340 50 L344 74 Z"/><text class="texte-petit" x="333" y="42" text-anchor="middle">Chartres</text><path class="trait" d="M205 92 L160 210" fill="none"/><text class="texte-main" x="200" y="175" text-anchor="middle">openfield</text><rect class="aplat-fort" x="300" y="146" width="30" height="14"/><circle class="aplat-papier" cx="306" cy="163" r="5"/><circle class="trait-fin" cx="306" cy="163" r="5" fill="none"/><circle class="aplat-papier" cx="324" cy="163" r="5"/><circle class="trait-fin" cx="324" cy="163" r="5" fill="none"/><text class="texte-petit" x="315" y="138" text-anchor="middle">moissonneuse</text></svg>` },
            { t: "exemple", titre: "Un céréalier de Beauce", md: "Pierre cultive 200 hectares de blé presque seul, avec un tracteur guidé par GPS et une moissonneuse-batteuse. En été, sa récolte part en camion vers les silos de la coopérative, puis vers les ports, comme Rouen, pour être exportée vers d'autres pays." },
            { t: "etapes", titre: "Du champ de blé au client", items: [{ titre: "Labour", md: "En fin d'été, on retourne et prépare la terre." }, { titre: "Semis", md: "À l'automne, on sème les graines de blé." }, { titre: "Croissance", md: "Le blé pousse au printemps ; on apporte engrais et traitements." }, { titre: "Moisson", md: "En juillet, la moissonneuse-batteuse récolte le grain." }, { titre: "Stockage et vente", md: "Le grain est stocké dans les silos, puis vendu en France ou exporté par bateau." }] },
            { t: "texte", md: "Aux États-Unis, les **Grandes Plaines** occupent le centre du pays, du Texas jusqu'à la frontière du Canada. Les exploitations y font des centaines, parfois des milliers d'hectares de blé, de maïs et de soja. Les machines font presque tout le travail : il faut très peu d'agriculteurs. Voilà pourquoi ces campagnes très riches sont **peu peuplées** : les fermes sont isolées, et l'école ou le médecin sont parfois à des dizaines de kilomètres. En Argentine, la **Pampa** est une autre immense plaine, célèbre pour l'élevage de bovins." },
            { t: "graphique", type: "courbe", titre: "Part des agriculteurs parmi les travailleurs en France (valeurs arrondies)", unite: "%", donnees: [{ label: "1950", valeur: 30 }, { label: "1970", valeur: 12 }, { label: "1990", valeur: 5 }, { label: "2020", valeur: 2 }] },
            { t: "verifie", q: "D'après la courbe, comment a évolué la part des agriculteurs en France depuis 1950 ?", choix: ["Elle a fortement baissé", "Elle a fortement augmenté", "Elle n'a pas changé"], bonne: 0, explication: "Les machines ont remplacé les bras : moins de 2 % des travailleurs sont aujourd'hui agriculteurs, contre environ 30 % en 1950. Pourtant, la France produit bien plus qu'avant." },
          ],
        },
        {
          titre: "Le Sahel : cultiver d'abord pour se nourrir",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quatre espaces agricoles de faible densité", zones: ["FR", "US", "AR", "SN", "ML", "BF", "NE", "TD"], reperes: [{ nom: "Beauce (Chartres)", lat: 48.45, lon: 1.49 }, { nom: "Grandes Plaines (Kansas)", lat: 38.5, lon: -98.5 }, { nom: "Pampa", lat: -35, lon: -61.5 }, { nom: "Sahel (Niger)", lat: 14, lon: 5 }], legende: "En couleur : les pays de ces espaces agricoles (France, États-Unis, Argentine) et cinq pays du Sahel, du Sénégal au Tchad." },
            { t: "texte", md: "Le **Sahel** est une longue bande de terres au sud du Sahara, de l'océan Atlantique à la mer Rouge. Il ne pleut que pendant trois ou quatre mois, en été : c'est la **saison des pluies**. Les familles cultivent à la main le **mil** et le **sorgho**, des céréales qui supportent la sécheresse, et élèvent des chèvres, des moutons ou des bœufs.\n\nQuand les pluies sont trop faibles, les récoltes ne suffisent plus. Les sécheresses provoquent alors de l'**insécurité alimentaire**, et beaucoup de jeunes partent vers les villes, comme Niamey, Bamako ou Dakar : c'est l'**exode rural**." },
            { t: "definition", terme: "Exode rural", md: "Le départ définitif des habitants des campagnes vers les villes." },
            { t: "definition", terme: "Insécurité alimentaire", md: "La situation de personnes qui ne sont pas sûres de pouvoir manger à leur faim, en quantité et en qualité suffisantes." },
            { t: "savais-tu", md: "Au Burkina Faso, des paysans ont remis à l'honneur le **zaï** : avant les pluies, on creuse de petits trous qu'on remplit de fumier. L'eau et l'engrais naturel s'y concentrent, et le mil ou le sorgho repoussent sur des terres que l'on croyait perdues." },
          ],
        },
        {
          titre: "Des campagnes reliées au monde, des défis à relever",
          blocs: [
            { t: "texte", md: "Ces espaces peu peuplés sont pourtant **reliés au monde entier**. Le blé de Beauce part par le port de Rouen vers l'Afrique du Nord ou le Moyen-Orient. Le maïs et le soja des Grandes Plaines nourrissent des élevages jusqu'en Asie. Le Sahel, lui, vend du bétail aux pays voisins et du coton à l'étranger, mais doit souvent acheter du riz et du blé venus d'ailleurs." },
            { t: "attention", md: "« Productiviste » ne veut pas dire « meilleure ». Cette agriculture produit beaucoup, mais les engrais et les pesticides peuvent polluer les sols et les rivières, et la disparition des haies appauvrit la biodiversité. L'agriculture vivrière, elle, pollue peu, mais elle reste fragile face aux sécheresses et peine à nourrir une population qui augmente vite." },
            { t: "liste", titre: "Des solutions qui existent déjà", items: ["L'**agriculture biologique**, sans engrais ni pesticides chimiques.", "L'**irrigation au goutte-à-goutte**, qui apporte l'eau au pied des plantes, sans gaspillage.", "Les **coopératives**, où les paysans s'unissent pour acheter des outils et mieux vendre.", "La replantation de **haies**, qui protègent les sols du vent et abritent oiseaux et insectes."] },
            { t: "verifie", q: "Une paysanne du Sahel cultive du mil pour nourrir sa famille et vend le reste au marché du village. Quelle agriculture pratique-t-elle ?", choix: ["Une agriculture vivrière", "Une agriculture productiviste tournée vers l'exportation"], bonne: 0, explication: "Elle produit d'abord pour nourrir sa famille, sur une petite parcelle : c'est la définition de l'agriculture vivrière." },
          ],
        },
      ],
      bilan: "Champs immenses et machines en Beauce ou dans les Grandes Plaines, petits champs de mil au Sahel : ces campagnes sont peu peuplées, mais elles nourrissent le monde et sont reliées à lui.",
    },
    "6e-geographie-06-littoral-industrialo-portuaire": {
      accroche: "Le jouet que tu as reçu à ton anniversaire a peut-être parcouru près de 20 000 km avant d'arriver chez toi. Fabriqué en Chine, il a voyagé dans une boîte d'acier, à bord d'un navire presque aussi long que quatre terrains de football. Son voyage a commencé et s'est terminé dans un port géant.",
      objectifs: [
        "Définir un littoral et une zone industrialo-portuaire (ZIP)",
        "Décrire les aménagements d'un grand port comme Rotterdam ou Shanghai",
        "Expliquer le rôle des ports dans les échanges mondiaux",
        "Identifier les conséquences sur l'environnement et les conflits d'usage",
      ],
      sections: [
        {
          titre: "Le littoral, là où la terre rencontre la mer",
          blocs: [
            { t: "definition", terme: "Littoral", md: "La zone de contact entre la terre et la mer : la côte, mais aussi la bande de terre et de mer proche du rivage." },
            { t: "texte", md: "Les littoraux attirent les hommes depuis toujours : près de 4 humains sur 10 vivent à moins de 100 km d'une côte. On y pêche, on y commerce, on y installe des usines et des ports, on y passe ses vacances. Le littoral est une **interface** : un lieu d'échanges entre la terre et la mer, et donc entre les pays du monde." },
          ],
        },
        {
          titre: "Rotterdam, un port gagné sur la mer",
          blocs: [
            { t: "exemple", titre: "Maasvlakte 2, une terre sortie de la mer du Nord", md: "**Rotterdam**, aux Pays-Bas, est le premier port d'Europe. Il s'étend sur plus de 40 km, de la ville jusqu'à la mer du Nord. Manquant de place, le port a créé un nouveau terrain sur la mer : **Maasvlakte 2**, ouvert en 2013, fait d'environ 2 000 hectares de sable déposé. Des grues automatiques y déchargent, jour et nuit, des porte-conteneurs longs de 400 m." },
            { t: "definition", terme: "Zone industrialo-portuaire (ZIP)", md: "Un espace qui associe un port et des usines (raffineries, pétrochimie, sidérurgie), installées directement au bord de l'eau." },
            { t: "definition", terme: "Terre-plein", md: "Un terrain artificiel construit en déposant du sable ou des remblais dans la mer, pour gagner de l'espace." },
            { t: "schema", titre: "Plan simplifié d'une zone industrialo-portuaire", legende: "Les navires arrivent par un chenal dragué ; les marchandises sont transformées ou stockées sur place, puis repartent vers l'intérieur du continent.", svg: `<svg viewBox="0 0 400 250"><rect class="aplat-papier" x="0" y="0" width="400" height="250"/><rect class="aplat" x="0" y="0" width="130" height="250"/><path class="aplat" d="M130 150 L400 150 L400 175 L130 175 Z"/><rect class="aplat-papier" x="60" y="50" width="70" height="90"/><rect class="pointille" x="60" y="50" width="70" height="90" fill="none"/><line class="pointille" x1="0" y1="150" x2="130" y2="150"/><line class="pointille" x1="0" y1="175" x2="130" y2="175"/><text class="texte" x="30" y="24" text-anchor="middle">Mer</text><rect class="aplat-fort" x="22" y="55" width="22" height="80" rx="8"/><text class="texte-petit" x="70" y="40" text-anchor="middle">porte-conteneurs</text><path class="trait" d="M48 66 L70 66 M52 66 L52 80 M66 66 L66 80 M48 104 L70 104 M52 104 L52 118 M66 104 L66 118" fill="none"/><rect class="aplat-fort" x="82" y="60" width="14" height="8"/><rect class="aplat-fort" x="100" y="60" width="14" height="8"/><rect class="aplat-fort" x="82" y="72" width="14" height="8"/><rect class="aplat-fort" x="100" y="72" width="14" height="8"/><text class="texte-petit" x="97" y="100" text-anchor="middle">terminal à</text><text class="texte-petit" x="97" y="114" text-anchor="middle">conteneurs</text><text class="texte-petit" x="65" y="196" text-anchor="middle">chenal dragué</text><circle class="aplat-fort" cx="170" cy="50" r="12"/><circle class="aplat-fort" cx="200" cy="50" r="12"/><circle class="aplat-fort" cx="170" cy="82" r="12"/><text class="texte-petit" x="188" y="118" text-anchor="middle">raffinerie</text><rect class="aplat" x="228" y="38" width="40" height="30"/><rect class="trait-fin" x="228" y="38" width="40" height="30" fill="none"/><rect class="aplat-fort" x="256" y="22" width="6" height="16"/><text class="texte-petit" x="248" y="86" text-anchor="middle">usines</text><rect class="aplat" x="290" y="42" width="30" height="22"/><rect class="trait-fin" x="290" y="42" width="30" height="22" fill="none"/><rect class="aplat" x="326" y="42" width="30" height="22"/><rect class="trait-fin" x="326" y="42" width="30" height="22" fill="none"/><text class="texte-petit" x="323" y="86" text-anchor="middle">entrepôts</text><text class="texte-petit" x="230" y="167" text-anchor="middle">fleuve ou canal : péniches</text><path class="trait-fin" d="M330 162 L392 162" marker-end="url(#fl)"/><path class="trait" d="M135 210 L392 210" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="204" text-anchor="middle">voie ferrée</text><path class="trait" d="M135 236 L392 236" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="230" text-anchor="middle">autoroute</text><text class="texte-petit" x="392" y="196" text-anchor="end">vers l'hinterland</text></svg>` },
            { t: "texte", md: "Pourquoi gagner des terres sur la mer ? Parce que les navires sont de plus en plus grands : il leur faut des quais immenses et une eau profonde. On **drague** donc le fond pour creuser des chenaux. Et pourquoi installer des usines dans le port ? Parce que le pétrole brut ou le minerai arrivent par bateau : on les transforme sur place, sans payer un nouveau transport." },
            { t: "verifie", q: "Quel aménagement permet aux navires géants d'entrer dans le port ?", choix: ["Un chenal dragué, creusé au fond de l'eau", "Une marina", "Un entrepôt logistique"], bonne: 0, explication: "Les plus gros navires s'enfoncent de plus de 15 m dans l'eau. On creuse donc le fond pour leur ouvrir un passage : c'est le chenal dragué." },
          ],
        },
        {
          titre: "Le conteneur, roi des échanges mondiaux",
          blocs: [
            { t: "definition", terme: "Conteneur", md: "Une grande boîte métallique de taille standard (environ 6 m ou 12 m de long), qui passe d'un navire à un train ou à un camion sans être ouverte." },
            { t: "texte", md: "Environ ==80 % des marchandises== échangées dans le monde voyagent par la mer : c'est le moyen le moins cher pour transporter de lourdes quantités très loin. Les plus grands **porte-conteneurs** dépassent 20 000 conteneurs à bord. À l'arrivée, des **portiques**, grues géantes, les déchargent en quelques minutes chacun. Les plus grands ports à conteneurs sont aujourd'hui en Asie : **Shanghai** (Chine) est le premier du monde." },
            { t: "graphique", type: "barres", titre: "Trafic de quelques ports, vers 2023 (valeurs arrondies)", unite: "millions de conteneurs (EVP)", donnees: [{ label: "Shanghai", valeur: 49 }, { label: "Singapour", valeur: 39 }, { label: "Ningbo", valeur: 35 }, { label: "Shenzhen", valeur: 30 }, { label: "Rotterdam", valeur: 13 }, { label: "Anvers", valeur: 12 }, { label: "Hambourg", valeur: 8 }, { label: "Le Havre", valeur: 3 }] },
            { t: "carte", fond: "monde", titre: "Quelques grands ports du monde", reperes: [{ nom: "Shanghai", lat: 31.23, lon: 121.47 }, { nom: "Singapour", lat: 1.29, lon: 103.85 }, { nom: "Jebel Ali (Dubaï)", lat: 25.01, lon: 55.06 }, { nom: "Rotterdam", lat: 51.92, lon: 4.48 }, { nom: "Los Angeles", lat: 33.74, lon: -118.27 }, { nom: "Santos", lat: -23.96, lon: -46.33 }], legende: "Les grands ports jalonnent les routes maritimes qui relient l'Asie, l'Europe et l'Amérique." },
            { t: "etapes", titre: "Le voyage d'un jouet, de la Chine à la France", items: [{ titre: "Usine", md: "Le jouet est fabriqué dans une usine en Chine." }, { titre: "Port de départ", md: "Il est chargé dans un conteneur au port de Shanghai." }, { titre: "Traversée", md: "Le porte-conteneurs traverse les océans pendant environ un mois." }, { titre: "Port d'arrivée", md: "Les portiques du Havre déchargent le conteneur." }, { titre: "Magasin", md: "Un camion ou un train l'amène jusqu'au magasin." }] },
          ],
        },
        {
          titre: "Un port et son arrière-pays",
          blocs: [
            { t: "definition", terme: "Hinterland", md: "L'arrière-pays d'un port : la région intérieure qu'il approvisionne et dont il reçoit les marchandises." },
            { t: "carte", fond: "monde", titre: "Rotterdam et son hinterland", cadre: [-2, 46, 12, 55], reperes: [{ nom: "Rotterdam", lat: 51.92, lon: 4.48 }, { nom: "Anvers", lat: 51.22, lon: 4.4 }, { nom: "Le Havre", lat: 49.49, lon: 0.11 }, { nom: "Hambourg", lat: 53.55, lon: 9.99 }, { nom: "Duisbourg", lat: 51.43, lon: 6.76 }, { nom: "Bâle", lat: 47.56, lon: 7.59 }], traits: [{ de: [51.92, 4.48], a: [51.43, 6.76], label: "Rhin" }, { de: [51.43, 6.76], a: [47.56, 7.59] }], legende: "Les flèches résument la grande voie du Rhin, qui relie Rotterdam au cœur de l'Europe." },
            { t: "texte", md: "Rotterdam est situé à l'**embouchure du Rhin**, le grand fleuve qui traverse l'Allemagne jusqu'à la Suisse. Des péniches remontent le fleuve jusqu'à Duisbourg, le plus grand port fluvial d'Europe, et jusqu'à Bâle. Des trains et des camions complètent le voyage. Grâce à cet immense hinterland, Rotterdam alimente une grande partie de l'Europe. Le Havre, premier port français pour les conteneurs, dessert surtout la région parisienne, par la Seine, le rail et l'autoroute." },
          ],
        },
        {
          titre: "Un littoral sous pression",
          blocs: [
            { t: "texte", md: "Une ZIP transforme profondément le littoral. Les dunes et les marais disparaissent sous le béton, les usines rejettent des fumées, les navires peuvent polluer l'eau. Certaines usines présentent des **risques industriels** (incendie, explosion), surveillés de près. Pour compenser Maasvlakte 2, Rotterdam a dû protéger une zone de fonds marins et créer de nouvelles dunes.\n\nSur le même littoral, chacun voudrait aussi l'espace pour lui : les pêcheurs pour leurs bateaux, les touristes pour les plages, les habitants pour un cadre de vie calme, les défenseurs de la nature pour les oiseaux." },
            { t: "definition", terme: "Conflit d'usage", md: "Une opposition entre plusieurs acteurs qui veulent utiliser un même espace de façons différentes." },
            { t: "verifie", q: "Un port veut agrandir ses quais sur un marais où nichent des oiseaux et où des pêcheurs travaillent. De quoi s'agit-il ?", choix: ["D'un conflit d'usage", "D'une migration pendulaire", "D'un exode rural"], bonne: 0, explication: "Le port, les pêcheurs et les protecteurs de la nature veulent utiliser le même espace de façons incompatibles : c'est un conflit d'usage. Il se règle par la discussion, la loi, parfois des compensations." },
          ],
        },
      ],
      bilan: "Une ZIP, c'est un port et des usines au bord de l'eau, branchés sur le monde par la mer et sur leur hinterland par les fleuves, le rail et la route. Elle crée des richesses, mais transforme et fragilise le littoral.",
    },
    "6e-geographie-07-littoral-touristique": {
      accroche: "Le 15 août, sur la plage de La Grande-Motte, il faut parfois slalomer entre les serviettes. En janvier, la même plage est presque déserte et beaucoup de volets restent fermés. Une ville qui gonfle et se dégonfle comme un ballon, au rythme des saisons !",
      objectifs: [
        "Expliquer pourquoi les littoraux attirent les touristes",
        "Décrire les aménagements d'un littoral touristique",
        "Identifier les impacts positifs et négatifs du tourisme",
        "Localiser de grands littoraux touristiques : Méditerranée, Maldives",
      ],
      sections: [
        {
          titre: "Le soleil, la mer, la plage",
          blocs: [
            { t: "definition", terme: "Tourisme balnéaire", md: "Le tourisme du bord de mer : soleil, baignade, plage. C'est la première forme de tourisme dans le monde." },
            { t: "texte", md: "Pourquoi tant de monde au bord de la mer ? Pour la chaleur, la baignade et le repos, bien sûr. Mais aussi parce que, depuis un siècle, les gens ont plus de temps libre : en France, les **congés payés** existent depuis 1936. Les voitures, les trains rapides et les avions à bas prix ont ensuite rapproché les plages de tout le monde.\n\nLa **Méditerranée** est la première région touristique du monde : près d'un touriste international sur trois y passe ses vacances. Son climat est chaud et sec en été, et ses côtes sont proches des pays riches d'Europe." },
            { t: "carte", fond: "monde", titre: "Quelques lieux touristiques de la Méditerranée", cadre: [-10, 28, 40, 48], reperes: [{ nom: "La Grande-Motte", lat: 43.56, lon: 4.08 }, { nom: "Côte d'Azur (Nice)", lat: 43.7, lon: 7.27 }, { nom: "Benidorm", lat: 38.54, lon: -0.13 }, { nom: "Djerba", lat: 33.81, lon: 10.86 }, { nom: "Crète", lat: 35.34, lon: 25.13 }, { nom: "Antalya", lat: 36.9, lon: 30.71 }] },
            { t: "verifie", q: "Quelle est la première région touristique du monde ?", choix: ["La Méditerranée", "La mer du Nord", "L'océan Arctique"], bonne: 0, explication: "Soleil, mer chaude et proximité des pays riches d'Europe : la Méditerranée accueille chaque été des dizaines de millions de touristes." },
          ],
        },
        {
          titre: "La Grande-Motte, une station sortie des marais",
          blocs: [
            { t: "exemple", titre: "Construire une ville pour les vacances", md: "Au début des années 1960, la côte du Languedoc n'était que marais, dunes et moustiques. Pour retenir les touristes français qui partaient en Espagne, l'État décide d'aménager toute la côte. À **La Grande-Motte**, l'architecte Jean Balladur dessine des immeubles en forme de **pyramides**, une marina d'environ 1 500 places, des routes et des espaces verts. Aujourd'hui, la ville passe d'environ 9 000 habitants l'hiver à plus de 100 000 l'été." },
            { t: "definition", terme: "Station balnéaire", md: "Une ville aménagée au bord de la mer pour accueillir les touristes : hôtels, résidences, plages, commerces, port de plaisance." },
            { t: "definition", terme: "Marina", md: "Un port de plaisance, qui accueille les bateaux de loisirs, souvent entouré de logements et de commerces." },
            { t: "etapes", titre: "La naissance d'une station balnéaire", items: [{ titre: "Un littoral presque vide", md: "Des marais et des dunes, peu d'habitants." }, { titre: "La décision", md: "L'État décide d'aménager la côte pour le tourisme." }, { titre: "Les travaux", md: "On assèche, on construit immeubles, marina et routes." }, { titre: "Les touristes", md: "Ils arrivent en masse chaque été." }, { titre: "Gérer", md: "Il faut traiter les déchets, fournir l'eau, protéger les dunes." }] },
            { t: "graphique", type: "barres", titre: "Population de La Grande-Motte (ordres de grandeur)", unite: "habitants", donnees: [{ label: "En hiver", valeur: 9000 }, { label: "En été", valeur: 100000 }] },
            { t: "schema", titre: "Coupe d'un littoral touristique aménagé", legende: "De la mer vers l'intérieur : marina, plage, promenade, front de mer bâti, route, puis l'étang et l'arrière-pays.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M0 195 L100 195 L100 240 L0 240 Z"/><path class="aplat-papier" d="M100 195 L160 182 L400 182 L400 240 L100 240 Z"/><path class="trait" d="M100 195 L160 182 L400 182" fill="none"/><path class="trait-fin" d="M8 190 q10 -6 20 0 t20 0 t20 0" fill="none"/><path class="aplat-fort" d="M25 192 L55 192 L50 199 L30 199 Z"/><line class="trait-fin" x1="40" y1="192" x2="40" y2="165"/><path class="aplat" d="M41 166 L41 188 L54 188 Z"/><text class="texte-petit" x="40" y="155" text-anchor="middle">marina</text><line class="trait-fin" x1="120" y1="190" x2="120" y2="174"/><path class="aplat-fort" d="M110 175 Q120 164 130 175 Z"/><text class="texte-petit" x="122" y="155" text-anchor="middle">plage</text><text class="texte-petit" x="172" y="174" text-anchor="middle">promenade</text><path class="aplat" d="M200 182 L230 92 L260 182 Z"/><path class="trait" d="M200 182 L230 92 L260 182" fill="none"/><path class="aplat" d="M248 182 L272 122 L296 182 Z"/><path class="trait" d="M248 182 L272 122 L296 182" fill="none"/><text class="texte-petit" x="248" y="80" text-anchor="middle">hôtels, résidences</text><line class="trait" x1="306" y1="186" x2="326" y2="186"/><text class="texte-petit" x="316" y="174" text-anchor="middle">route</text><path class="aplat" d="M336 182 Q365 200 394 182 Z"/><text class="texte-petit" x="365" y="174" text-anchor="middle">étang</text><text class="texte" x="40" y="226" text-anchor="middle">Mer</text><text class="texte-petit" x="330" y="226" text-anchor="middle">arrière-pays</text></svg>` },
          ],
        },
        {
          titre: "Les Maldives, un archipel pour touristes",
          blocs: [
            { t: "definition", terme: "Archipel", md: "Un ensemble d'îles proches les unes des autres." },
            { t: "texte", md: "Les **Maldives** sont un archipel de l'océan Indien, au sud-ouest de l'Inde : environ 1 200 petites îles de corail, regroupées en atolls. Seule une partie est habitée, et beaucoup d'îles sont occupées chacune par un seul hôtel de luxe : on les appelle des « îles-hôtels ». Les touristes arrivent par avion à Malé, la capitale, puis rejoignent leur île en bateau ou en hydravion. Le **tourisme est la première source de revenus** du pays.\n\nMais les Maldives sont parmi les pays les plus bas du monde : ==environ 1,5 m d'altitude moyenne==. Avec le réchauffement climatique, le niveau de la mer monte. Le pays construit des digues et a même créé une île artificielle surélevée, Hulhumalé, pour loger ses habitants." },
            { t: "carte", fond: "monde", titre: "De grands littoraux touristiques du monde", reperes: [{ nom: "Malé (Maldives)", lat: 4.18, lon: 73.51 }, { nom: "Côte d'Azur", lat: 43.7, lon: 7.27 }, { nom: "Djerba", lat: 33.81, lon: 10.86 }, { nom: "Cancún", lat: 21.16, lon: -86.85 }] },
            { t: "verifie", q: "Pourquoi la montée du niveau de la mer menace-t-elle particulièrement les Maldives ?", choix: ["Parce que les îles ne dépassent guère 1 à 2 m d'altitude", "Parce que les Maldives sont une chaîne de montagnes", "Parce que l'archipel se trouve dans l'océan Arctique"], bonne: 0, explication: "Avec une altitude moyenne d'environ 1,5 m, quelques dizaines de centimètres d'eau en plus suffisent pour inonder plages, maisons et hôtels." },
          ],
        },
        {
          titre: "Le tourisme, une chance et un danger",
          blocs: [
            { t: "tableau", titre: "Les impacts du tourisme sur un littoral", entetes: ["Impacts positifs", "Impacts négatifs"], lignes: [["des emplois (hôtels, restaurants, loisirs)", "la **bétonisation** du rivage"], ["des revenus pour les habitants et les communes", "des déchets et de la pollution"], ["des routes, des aéroports, des équipements", "une forte consommation d'eau en été"], ["la découverte d'autres cultures", "des coraux abîmés et des villes vides hors saison"]] },
            { t: "definition", terme: "Bétonisation", md: "La construction massive d'immeubles, d'hôtels et de parkings qui recouvre les côtes de béton." },
            { t: "definition", terme: "Tourisme durable", md: "Un tourisme qui limite ses dégâts sur la nature et profite aux habitants, aujourd'hui comme demain." },
            { t: "texte", md: "En France, le **Conservatoire du littoral**, créé en 1975, achète des espaces côtiers pour les protéger à jamais. La **loi Littoral** de 1986 limite les constructions près du rivage. Dans le parc national des Calanques, près de Marseille, il faut réserver pour accéder à certaines criques en été. Ailleurs, on replante les dunes, on installe des ganivelles (barrières de bois) et on limite le nombre de plongeurs sur les récifs." },
            { t: "verifie", q: "Lequel de ces choix relève du tourisme durable ?", choix: ["Limiter le nombre de visiteurs dans un site fragile", "Construire un parking sur une dune", "Multiplier les piscines dans une région qui manque d'eau"], bonne: 0, explication: "Limiter la fréquentation protège un site fragile tout en permettant de le visiter. Les deux autres choix abîment le littoral." },
          ],
        },
      ],
      bilan: "Le soleil et la mer ont transformé des marais et des îles en lieux de vacances. Le tourisme fait vivre les littoraux, mais il les fragilise : tout l'enjeu est de le rendre durable.",
    },
    "6e-geographie-08-population-mondiale": {
      accroche: "Regarde une photo de la Terre prise de nuit depuis l'espace : des colliers de lumière brillent en Europe, en Inde, en Chine, au Japon… et d'immenses régions restent noires. Ces lumières dessinent presque la carte des humains. Pourquoi sommes-nous si nombreux à certains endroits, et presque absents ailleurs ?",
      objectifs: [
        "Décrire la répartition de la population : foyers de peuplement et déserts humains",
        "Expliquer cette répartition par des facteurs naturels, historiques et économiques",
        "Calculer et comparer des densités de population",
        "Connaître les ordres de grandeur de la population mondiale",
      ],
      sections: [
        {
          titre: "8 milliards d'humains",
          blocs: [
            { t: "texte", md: "Fin 2022, la Terre a franchi le cap des ==8 milliards d'habitants==. Il a fallu des dizaines de milliers d'années pour atteindre le premier milliard, vers 1800. Puis tout s'est accéléré : 2 milliards vers 1930, 6 milliards en 1999. Aujourd'hui, la population augmente encore d'environ 70 millions de personnes par an, mais de moins en moins vite.\n\nL'**Asie** est le continent le plus peuplé : près de 6 humains sur 10 y vivent. L'**Inde** est devenue en 2023 le pays le plus peuplé du monde, avec plus de 1,4 milliard d'habitants, devant la Chine. C'est en **Afrique** que la population augmente aujourd'hui le plus vite." },
            { t: "graphique", type: "courbe", titre: "La population mondiale depuis 1800", unite: "milliards", donnees: [{ label: "1800", valeur: 1 }, { label: "1930", valeur: 2 }, { label: "1960", valeur: 3 }, { label: "1974", valeur: 4 }, { label: "1987", valeur: 5 }, { label: "1999", valeur: 6 }, { label: "2011", valeur: 7 }, { label: "2022", valeur: 8 }] },
            { t: "verifie", q: "D'après la courbe, combien de temps a-t-il fallu pour passer de 1 à 2 milliards d'humains ?", choix: ["Environ 130 ans", "Environ 11 ans", "Environ 1 000 ans"], bonne: 0, explication: "De 1800 à 1930, il s'est écoulé 130 ans. Pour passer de 7 à 8 milliards, il n'a fallu qu'environ 11 ans (de 2011 à 2022)." },
          ],
        },
        {
          titre: "Foyers de peuplement et déserts humains",
          blocs: [
            { t: "definition", terme: "Foyer de peuplement", md: "Une région du monde où vivent de très nombreux habitants, avec de fortes densités." },
            { t: "definition", terme: "Désert humain", md: "Un espace presque vide d'habitants, souvent à cause de fortes contraintes naturelles." },
            { t: "texte", md: "Trois grands foyers rassemblent plus de la moitié de l'humanité : l'**Asie de l'Est** (Chine, Japon, Corée), l'**Asie du Sud** (Inde, Pakistan, Bangladesh) et l'**Europe**. Il existe aussi des foyers secondaires : le golfe de Guinée (Nigeria), le Nord-Est des États-Unis, le littoral du Brésil.\n\nÀ l'inverse, les **déserts humains** sont immenses : déserts chauds (Sahara), déserts froids (Antarctique, Groenland, Sibérie), hautes montagnes et forêts denses comme l'Amazonie." },
            { t: "carte", fond: "monde", titre: "Les grands foyers de peuplement et quelques déserts humains", zones: ["CN", "JP", "KR", "IN", "PK", "BD", "FR", "DE", "GB", "IT", "BE", "NL", "PL"], reperes: [{ nom: "Golfe de Guinée (Lagos)", lat: 6.45, lon: 3.39 }, { nom: "Nord-Est des États-Unis (New York)", lat: 40.71, lon: -74.01 }, { nom: "Littoral du Brésil (São Paulo)", lat: -23.55, lon: -46.63 }, { nom: "Désert humain : Sahara", lat: 23, lon: 12 }, { nom: "Désert humain : Groenland", lat: 72, lon: -40 }, { nom: "Désert humain : Sibérie", lat: 65, lon: 100 }, { nom: "Désert humain : Amazonie", lat: -4, lon: -63 }], legende: "En couleur : des pays des trois grands foyers (Asie de l'Est, Asie du Sud, Europe). Repères : foyers secondaires et déserts humains." },
            { t: "verifie", q: "Lequel de ces espaces est un désert humain ?", choix: ["Le Groenland", "Le delta du Gange", "La région de Paris"], bonne: 0, explication: "Le Groenland, couvert de glace, compte environ 56 000 habitants pour plus de 2 millions de km² : c'est un désert froid." },
          ],
        },
        {
          titre: "Calculer et comparer des densités",
          blocs: [
            { t: "propriete", titre: "Densité de population", md: "**Densité = nombre d'habitants ÷ superficie (en km²)**.\nElle s'exprime en habitants par km² (hab/km²) : c'est le nombre moyen de personnes qui vivraient sur un carré de 1 km de côté." },
            { t: "exemple", titre: "La densité du Bangladesh", etapes: ["Le Bangladesh compte environ 170 millions d'habitants pour environ 148 000 km².", "Je divise : 170 000 000 ÷ 148 000 ≈ 1 150.", "Sa densité est donc d'environ ==1 150 hab/km²==, plus de dix fois celle de la France.", "Pourquoi ? Le delta du Gange, fertile et bien arrosé, nourrit des rizières depuis des siècles."] },
            { t: "tableau", titre: "Quelques densités (ordres de grandeur)", entetes: ["Pays", "Population", "Densité"], lignes: [["Bangladesh", "environ 170 millions", "plus de 1 000 hab/km²"], ["Pays-Bas", "environ 18 millions", "environ 500 hab/km²"], ["Inde", "plus de 1,4 milliard", "plus de 400 hab/km²"], ["Chine", "environ 1,4 milliard", "environ 150 hab/km²"], ["France", "environ 68 millions", "environ 100 hab/km²"], ["Russie", "environ 145 millions", "moins de 10 hab/km²"], ["Canada", "environ 40 millions", "environ 4 hab/km²"]] },
            { t: "attention", md: "Une densité est une **moyenne**. La Russie est le pays le plus vaste du monde, mais sa population est surtout regroupée à l'ouest, et la Sibérie est presque vide. De même, les Canadiens vivent surtout près de la frontière des États-Unis, et le Grand Nord n'a presque personne." },
            { t: "verifie", q: "Un pays compte 2 millions d'habitants sur 50 000 km². Quelle est sa densité ?", choix: ["40 hab/km²", "400 hab/km²", "4 hab/km²"], bonne: 0, explication: "2 000 000 ÷ 50 000 = 40. Astuce : retire le même nombre de zéros en haut et en bas (200 ÷ 5 = 40)." },
          ],
        },
        {
          titre: "Pourquoi une répartition si inégale ?",
          blocs: [
            { t: "texte", md: "Les humains s'installent là où la vie est plus facile, mais la nature n'explique pas tout. Un géographe cherche toujours **plusieurs facteurs** à la fois." },
            { t: "liste", titre: "Trois familles de facteurs", items: ["**Facteurs naturels** : climats tempérés ou tropicaux humides, plaines, vallées et deltas des fleuves, sols fertiles, littoraux. À l'inverse, le froid, l'aridité et l'altitude repoussent les hommes.", "**Facteurs historiques** : en Asie, on cultive le riz depuis des millénaires dans les plaines et les deltas, et les villages se sont densifiés génération après génération. L'Europe est peuplée depuis très longtemps.", "**Facteurs économiques** : les emplois, les villes et les ports attirent les habitants, comme sur le littoral chinois ou dans le Nord-Est des États-Unis."] },
            { t: "savais-tu", md: "Les lumières de la Terre la nuit montrent aussi la **richesse** : l'Afrique, pourtant très peuplée par endroits, est peu éclairée, car beaucoup d'habitants n'ont pas encore l'électricité. Une carte doit toujours être lue avec un esprit critique !" },
          ],
        },
      ],
      bilan: "8 milliards d'humains, mais très inégalement répartis : trois grands foyers en Asie et en Europe, d'immenses déserts humains. La densité permet de mesurer ces contrastes, et plusieurs facteurs les expliquent.",
    },
    "6e-geographie-09-formes-occupation": {
      accroche: "Saraa a 11 ans et vit en Mongolie. L'hiver, sa famille habite une yourte de feutre à la périphérie d'Oulan-Bator, et elle va au collège en bus. L'été, on replie la yourte et toute la famille rejoint la steppe avec les chevaux et les moutons. En une seule année, deux façons d'habiter !",
      objectifs: [
        "Comprendre ce que signifie habiter : se loger, travailler, se déplacer, se divertir",
        "Distinguer espaces urbains, périurbains et ruraux",
        "Reconnaître différentes formes d'habitat dans le monde",
        "Comprendre que les espaces habités sont reliés par des mobilités et des réseaux",
      ],
      sections: [
        {
          titre: "Habiter, un mot de géographe",
          blocs: [
            { t: "definition", terme: "Habiter", md: "Pour un géographe, habiter un lieu, c'est y vivre : s'y **loger**, y **travailler**, s'y **déplacer** et s'y **divertir**." },
            { t: "texte", md: "Habiter, ce n'est donc pas seulement avoir une maison. Une collégienne habite son quartier, mais aussi son collège, le bus qu'elle prend, le stade où elle joue. Les façons d'habiter changent selon les lieux, les cultures et la richesse des habitants." },
            { t: "tableau", titre: "Habiter, ici et ailleurs", entetes: ["Verbe", "À Tokyo", "Dans la steppe mongole", "En Amazonie"], lignes: [["Se loger", "appartement dans un immeuble", "yourte démontable", "maison de bois au bord du fleuve"], ["Travailler", "bureau, commerce, usine", "élevage de chevaux et de moutons", "pêche, chasse, petites cultures"], ["Se déplacer", "métro et train", "cheval, moto, 4×4", "pirogue et bateau"], ["Se divertir", "cinéma, parcs, karaoké", "fête du Naadam (courses de chevaux, lutte)", "football au village, baignade"]] },
            { t: "verifie", q: "Pour un géographe, une personne qui dort à la campagne et travaille en ville habite :", choix: ["Les deux lieux, car habiter, c'est aussi travailler et se déplacer", "Seulement la campagne, où elle dort", "Seulement la ville, où elle travaille"], bonne: 0, explication: "Habiter regroupe se loger, travailler, se déplacer et se divertir. Cette personne habite donc la campagne, la ville et le trajet entre les deux." },
          ],
        },
        {
          titre: "Ville, campagne et entre les deux",
          blocs: [
            { t: "definition", terme: "Espace urbain", md: "L'espace des villes : fortes densités, immeubles, beaucoup d'emplois et de **services** (commerces, bureaux, écoles, hôpitaux)." },
            { t: "definition", terme: "Espace rural", md: "L'espace des campagnes : faibles densités, villages, champs, forêts et activités agricoles." },
            { t: "definition", terme: "Espace périurbain", md: "Les campagnes proches des villes, où se construisent des lotissements pour des habitants qui travaillent en ville." },
            { t: "graphique", type: "secteurs", titre: "Où vivent les humains aujourd'hui ?", unite: "%", donnees: [{ label: "En ville", valeur: 55 }, { label: "À la campagne", valeur: 45 }] },
            { t: "texte", md: "Dans le monde, plus d'un humain sur deux vit en ville. En France, la proportion est encore plus forte : ==environ 8 habitants sur 10== vivent dans une ville ou dans sa périphérie. Dans les espaces urbains, la plupart des gens travaillent dans les **services**. Dans les campagnes éloignées, la densité chute." },
            { t: "tableau", titre: "Du plus dense au moins dense (ordres de grandeur)", entetes: ["Espace", "Densité approximative"], lignes: [["Centre de Paris", "plus de 20 000 hab/km²"], ["Banlieue pavillonnaire", "environ 2 000 hab/km²"], ["Village de Beauce et ses champs", "moins de 50 hab/km²"], ["Désert du Sahara", "moins de 1 hab/km²"]] },
          ],
        },
        {
          titre: "Une grande variété d'habitats",
          blocs: [
            { t: "definition", terme: "Habitat", md: "La façon dont les logements sont construits et répartis dans un espace." },
            { t: "liste", titre: "Les grandes formes d'habitat", items: ["**Groupé** : les maisons sont serrées les unes contre les autres, dans un village ou en ville (immeubles, gratte-ciel).", "**Dispersé** : les maisons sont éparpillées dans la campagne, en fermes isolées, comme dans le bocage.", "**Précaire** : des logements fragiles et sans confort, comme les cabanes de tôle des bidonvilles.", "**Nomade** : un habitat mobile, comme la yourte mongole ou la tente des Touaregs, qui suit les troupeaux.", "**Sur pilotis** : des maisons surélevées, dans les zones inondables d'Asie du Sud-Est ou sur le pergélisol du Grand Nord."] },
            { t: "schema", titre: "Habitat groupé et habitat dispersé", legende: "À gauche, un village : les maisons se serrent autour de l'église. À droite, un bocage : des fermes isolées entourées de haies.", svg: `<svg viewBox="0 0 400 220"><text class="texte" x="100" y="22" text-anchor="middle">habitat groupé</text><text class="texte" x="300" y="22" text-anchor="middle">habitat dispersé</text><rect class="aplat-papier" x="10" y="32" width="180" height="150"/><rect class="trait-fin" x="10" y="32" width="180" height="150" fill="none"/><rect class="aplat-papier" x="210" y="32" width="180" height="150"/><rect class="trait-fin" x="210" y="32" width="180" height="150" fill="none"/><path class="trait-fin" d="M100 107 L10 70 M100 107 L190 90 M100 107 L80 182 M100 107 L130 32" fill="none"/><rect class="aplat-papier" x="94" y="98" width="12" height="14"/><rect class="trait" x="94" y="98" width="12" height="14" fill="none"/><path class="trait" d="M100 98 L100 88 M96 92 L104 92" fill="none"/><rect class="aplat-fort" x="78" y="88" width="8" height="8"/><rect class="aplat-fort" x="112" y="86" width="8" height="8"/><rect class="aplat-fort" x="84" y="114" width="8" height="8"/><rect class="aplat-fort" x="110" y="116" width="8" height="8"/><rect class="aplat-fort" x="70" y="102" width="8" height="8"/><rect class="aplat-fort" x="122" y="102" width="8" height="8"/><rect class="aplat-fort" x="96" y="124" width="8" height="8"/><rect class="aplat-fort" x="90" y="76" width="8" height="8"/><rect class="aplat-fort" x="104" y="74" width="8" height="8"/><rect class="aplat-fort" x="128" y="88" width="8" height="8"/><rect class="aplat-fort" x="64" y="88" width="8" height="8"/><rect class="aplat-fort" x="124" y="118" width="8" height="8"/><rect class="aplat-fort" x="72" y="120" width="8" height="8"/><path class="pointille" d="M210 95 L390 105 M285 32 L272 182 M330 102 L346 182 M210 150 L272 140" fill="none"/><path class="trait-fin" d="M210 120 Q250 110 290 118 T390 140" fill="none"/><rect class="aplat-fort" x="236" y="56" width="8" height="8"/><rect class="aplat-fort" x="246" y="58" width="6" height="6"/><rect class="aplat-fort" x="330" y="52" width="8" height="8"/><rect class="aplat-fort" x="340" y="54" width="6" height="6"/><rect class="aplat-fort" x="294" y="122" width="8" height="8"/><rect class="aplat-fort" x="232" y="160" width="8" height="8"/><rect class="aplat-fort" x="356" y="156" width="8" height="8"/><rect class="aplat-fort" x="366" y="158" width="6" height="6"/><text class="texte-petit" x="100" y="202" text-anchor="middle">village : maisons serrées</text><text class="texte-petit" x="300" y="202" text-anchor="middle">fermes isolées et haies</text></svg>` },
            { t: "carte", fond: "monde", titre: "Des formes d'habitat dans le monde", reperes: [{ nom: "Yourtes (Oulan-Bator)", lat: 47.89, lon: 106.91 }, { nom: "Gratte-ciel (Tokyo)", lat: 35.68, lon: 139.69 }, { nom: "Pilotis (Tonlé Sap, Cambodge)", lat: 13.21, lon: 103.98 }, { nom: "Bidonville (Dharavi, Mumbai)", lat: 19.04, lon: 72.85 }, { nom: "Tentes touarègues (Agadez)", lat: 16.97, lon: 7.99 }, { nom: "Bocage (Normandie)", lat: 48.9, lon: -0.9 }] },
          ],
        },
        {
          titre: "Des espaces reliés : mobilités et réseaux",
          blocs: [
            { t: "definition", terme: "Mobilité", md: "L'ensemble des déplacements des personnes d'un lieu à un autre : quotidiens (aller au travail), saisonniers (partir en vacances) ou définitifs (les migrations)." },
            { t: "texte", md: "Aucun lieu ne vit seul. Les espaces habités sont **reliés** par des **réseaux** : routes, voies ferrées, ports, aéroports, mais aussi lignes électriques et internet, dont les câbles traversent le fond des océans. Les personnes, les marchandises et les informations circulent sans cesse d'un lieu à l'autre." },
            { t: "exemple", titre: "Une journée de Lucas, dans le périurbain lyonnais", md: "Lucas habite un village à 30 km de Lyon. Le matin, son père prend la voiture pour aller travailler en ville, pendant que Lucas va au collège en car. Le soir, la famille fait ses courses dans une zone commerciale. Le week-end, Lucas joue au football au village et regarde des vidéos venues du monde entier. En une semaine, il relie la campagne, la ville et le monde." },
            { t: "definition", terme: "Conflit d'usage", md: "Une situation où plusieurs acteurs veulent utiliser un même espace de façons différentes : un agriculteur, un promoteur, des promeneurs…" },
            { t: "verifie", q: "Des promeneurs veulent protéger une forêt, une entreprise veut y installer un entrepôt. Comment appelle-t-on cette situation ?", choix: ["Un conflit d'usage", "Un exode rural", "Une migration pendulaire"], bonne: 0, explication: "Deux acteurs veulent utiliser le même espace de façons différentes : c'est un conflit d'usage. Les élus doivent alors arbitrer." },
          ],
        },
      ],
      bilan: "Habiter, c'est se loger, travailler, se déplacer et se divertir. Du gratte-ciel à la yourte, du centre-ville à la ferme isolée, les façons d'habiter sont variées, mais tous les lieux sont reliés entre eux.",
    },
  },
};
