// ÉCLORE — Cours illustrés, 3e Histoire (voir docs/COURS.md).
export default {
  id: "3e-histoire",
  chapitres: {
    "3e-histoire-01-premiere-guerre-mondiale": {
      accroche: "Verdun, printemps 1916. Un soldat français monte en ligne sous un déluge d'obus : la forêt a disparu, la terre est retournée comme un champ labouré. Au même moment, sa sœur fabrique des obus dans une usine d'armement. Tous deux font la même guerre, une guerre qui n'épargne personne.",
      objectifs: [
        "Situer les grandes phases de la guerre, de 1914 à 1918",
        "Décrire la violence de masse subie par les soldats, à Verdun et dans les tranchées",
        "Expliquer ce qu'est une guerre totale et comment l'arrière est mobilisé",
        "Caractériser le génocide des Arméniens et les révolutions russes de 1917",
      ],
      sections: [
        {
          titre: "Un attentat, deux alliances, une guerre européenne",
          blocs: [
            { t: "texte", md: "Le **28 juin 1914**, à **Sarajevo**, un jeune nationaliste serbe de Bosnie assassine l'archiduc **François-Ferdinand**, héritier du trône d'Autriche-Hongrie. Vienne accuse la Serbie et lui déclare la guerre le 28 juillet.\n\nUne crise locale devient alors européenne, car les grandes puissances sont liées par des **alliances**. La Russie, protectrice de la Serbie, mobilise. L'Allemagne déclare la guerre à la Russie (1er août), puis à la France (3 août), et envahit la Belgique neutre : le Royaume-Uni entre en guerre le 4 août. En une semaine, l'Europe bascule." },
            { t: "schema", titre: "Les deux systèmes d'alliances en août 1914", legende: "Les alliances, conclues pour dissuader l'adversaire, entraînent au contraire les puissances les unes après les autres dans la guerre. On parle aussi des « Empires centraux » pour l'Allemagne et ses alliés.", svg: `<svg viewBox="0 0 400 250"><text class="texte-main" x="90" y="22" text-anchor="middle">Triple-Entente</text><text class="texte-main" x="310" y="22" text-anchor="middle">Triple-Alliance</text><rect class="aplat" x="10" y="34" width="160" height="112" rx="8"/><rect class="trait" x="10" y="34" width="160" height="112" rx="8"/><rect class="aplat" x="230" y="34" width="160" height="112" rx="8"/><rect class="trait" x="230" y="34" width="160" height="112" rx="8"/><text class="texte" x="90" y="62" text-anchor="middle">France</text><text class="texte" x="90" y="86" text-anchor="middle">Royaume-Uni</text><text class="texte" x="90" y="110" text-anchor="middle">Russie</text><text class="texte-petit" x="90" y="134" text-anchor="middle">+ Serbie, Belgique</text><text class="texte" x="310" y="62" text-anchor="middle">Allemagne</text><text class="texte" x="310" y="86" text-anchor="middle">Autriche-Hongrie</text><text class="texte-petit" x="310" y="110" text-anchor="middle">Italie : neutre en 1914</text><text class="texte-petit" x="310" y="134" text-anchor="middle">+ Empire ottoman (1914)</text><path class="trait-fin" d="M182 82 L218 82" marker-end="url(#fl)"/><path class="trait-fin" d="M218 98 L182 98" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="72" text-anchor="middle">guerre</text><rect class="aplat-papier" x="10" y="162" width="380" height="80" rx="6"/><rect class="trait-fin" x="10" y="162" width="380" height="80" rx="6"/><text class="texte-petit" x="24" y="184">28 juin : attentat de Sarajevo contre François-Ferdinand</text><text class="texte-petit" x="24" y="206">28 juillet : l'Autriche-Hongrie déclare la guerre à la Serbie</text><text class="texte-petit" x="24" y="228">1er-4 août : le jeu des alliances étend la guerre à l'Europe</text></svg>` },
            { t: "attention", md: "L'**Italie** appartient à la Triple-Alliance, mais elle reste neutre en 1914, puis entre en guerre **aux côtés de l'Entente** en 1915. À l'inverse, l'**Empire ottoman** (fin 1914) puis la Bulgarie (1915) rejoignent l'Allemagne." },
            { t: "frise", titre: "Les grandes étapes de la Première Guerre mondiale", evenements: [
              { date: 1914, label: "Attentat de Sarajevo, entrée en guerre", detail: "28 juin, puis début août 1914" },
              { date: 1914, label: "Bataille de la Marne", detail: "Septembre : l'avancée allemande est stoppée." },
              { date: 1915, label: "Génocide des Arméniens", detail: "Organisé par le gouvernement jeune-turc." },
              { date: 1916, label: "Batailles de Verdun et de la Somme" },
              { date: 1917, label: "Entrée en guerre des États-Unis, révolutions russes" },
              { date: 1918, label: "Armistice du 11 novembre" },
              { date: 1919, label: "Traité de Versailles", detail: "Signé le 28 juin 1919." },
              { date: 1920, label: "Naissance de la SDN" },
            ] },
          ],
        },
        {
          titre: "De la guerre de mouvement à la guerre de position",
          blocs: [
            { t: "texte", md: "En août 1914, chacun croit à une guerre courte. Les armées allemandes traversent la Belgique et foncent vers Paris : c'est la **guerre de mouvement**. Elles sont arrêtées sur la **Marne** en septembre 1914.\n\nIncapables de percer, les deux camps s'enterrent. Fin 1914, une ligne de **tranchées** longue d'environ 700 km court de la mer du Nord à la Suisse. De 1915 à 1917, c'est la **guerre de position** : on attaque pour gagner quelques centaines de mètres, au prix de pertes énormes. Le mouvement ne reprend qu'en **1918**, avec les offensives allemandes du printemps puis la contre-offensive alliée, appuyée par les chars et les soldats américains." },
            { t: "definition", terme: "Guerre de position", md: "Phase d'une guerre où le front est figé : les soldats, enterrés dans des **tranchées** face à face, défendent leurs positions plutôt que d'avancer. Sur le front de l'Ouest, elle dure de la fin 1914 au printemps 1918." },
            { t: "carte", fond: "france", titre: "Le front de l'Ouest et ses grandes batailles", reperes: [
              { nom: "Paris", lat: 48.86, lon: 2.35 },
              { nom: "La Marne (1914)", lat: 48.79, lon: 3.78 },
              { nom: "La Somme (1916)", lat: 50.00, lon: 2.65 },
              { nom: "Verdun (1916)", lat: 49.16, lon: 5.38 },
              { nom: "Chemin des Dames (1917)", lat: 49.44, lon: 3.79 },
              { nom: "Rethondes (armistice)", lat: 49.43, lon: 2.91 },
            ], traits: [
              { de: [51.13, 2.75], a: [50.29, 2.78], label: "front (1915-1917)" },
              { de: [50.29, 2.78], a: [49.58, 3.00] },
              { de: [49.58, 3.00], a: [49.26, 4.03] },
              { de: [49.26, 4.03], a: [49.16, 5.38] },
              { de: [49.16, 5.38], a: [47.50, 7.17] },
            ], legende: "Tracé simplifié du front stabilisé, de Nieuport (mer du Nord) à la frontière suisse." },
            { t: "attention", md: "La guerre de position **ne commence pas** dès les premiers jours d'août 1914 : les premières semaines sont une guerre de mouvement. Les tranchées s'installent à la fin de 1914." },
          ],
        },
        {
          titre: "Verdun, l'enfer des poilus",
          blocs: [
            { t: "texte", md: "Le **21 février 1916**, l'armée allemande attaque **Verdun**. Elle veut épuiser l'armée française. La bataille dure **dix mois**, jusqu'en décembre 1916, et fait environ **300 000 morts**, Français et Allemands. Des dizaines de millions d'obus labourent le sol. Par la route de Bar-le-Duc, surnommée la « Voie sacrée », camions et renforts montent sans arrêt. Grâce à la rotation des troupes voulue par le général Pétain, la majorité des soldats français passe par Verdun.\n\nLes soldats français, les **poilus**, vivent dans la boue, le froid, les rats et les poux. Ils craignent les obus, responsables de la plupart des blessures, les mitrailleuses et les **gaz**, utilisés depuis 1915. Beaucoup reviennent mutilés : on appelle « **gueules cassées** » les blessés au visage." },
            { t: "definition", terme: "Violence de masse", md: "Violence qui frappe un très grand nombre de personnes à la fois, grâce à des armes industrielles (artillerie, mitrailleuses, gaz). Elle est **subie** par des millions de combattants et parfois de civils." },
            { t: "savais-tu", md: "Neuf villages détruits autour de Verdun n'ont jamais été reconstruits. Ils sont officiellement « morts pour la France » et ont toujours un maire, comme Fleury-devant-Douaumont." },
            { t: "verifie", q: "En quelle année se déroule la bataille de Verdun ?", choix: ["1914", "1916", "1918"], bonne: 1, explication: "La bataille de Verdun dure de février à décembre 1916. Elle est devenue le symbole de la violence de masse subie par les poilus." },
          ],
        },
        {
          titre: "Une guerre totale : l'arrière aussi est mobilisé",
          blocs: [
            { t: "definition", terme: "Guerre totale", md: "Guerre qui mobilise **toutes les ressources** d'un pays : les hommes au front, mais aussi l'économie, les finances, les esprits et les colonies. Toute la société participe à l'effort de guerre." },
            { t: "texte", md: "Pour tenir, l'**arrière** travaille pour le front. Les femmes remplacent les hommes aux champs, dans les transports et dans les usines d'armement, où les « munitionnettes » fabriquent les obus. L'État dirige l'économie et lance des **emprunts** auprès de la population.\n\nLa **propagande** et la **censure** soutiennent le moral : la presse cache les défaites et décrit des soldats héroïques, au point que les poilus parlent de « bourrage de crâne ». Les **colonies** fournissent des centaines de milliers de soldats, comme les tirailleurs sénégalais, et de travailleurs." },
            { t: "exemple", titre: "Rédiger au DNB : expliquer la guerre totale", etapes: [
              "Le front : « En 1916, à Verdun, les soldats subissent une violence de masse (obus, gaz). »",
              "L'économie : « À l'arrière, les femmes fabriquent les obus dans les usines et l'État lance des emprunts. »",
              "Les esprits : « La propagande encourage la population à tenir. »",
              "Conclusion : « Toute la société est engagée dans la guerre : c'est une guerre totale. »",
            ] },
            { t: "verifie", q: "Qu'est-ce qu'une « guerre totale » ?", choix: ["Une guerre qui oppose tous les pays du monde", "Une guerre qui mobilise toutes les ressources humaines, économiques et morales d'un pays", "Une guerre qui se termine par la destruction complète d'un pays"], bonne: 1, explication: "Le mot « totale » ne veut pas dire que tous les pays combattent : il signifie que toute la société (soldats, ouvrières, finances, propagande, colonies) est mobilisée." },
          ],
        },
        {
          titre: "Génocide des Arméniens, révolutions russes et sortie de guerre",
          blocs: [
            { t: "texte", md: "Allié de l'Allemagne, l'**Empire ottoman** est dirigé par le gouvernement **jeune-turc**. Il accuse les Arméniens, une minorité chrétienne, de soutenir la Russie. À partir du **24 avril 1915**, il fait arrêter les élites arméniennes de Constantinople, puis organise l'élimination de tout un peuple : les hommes sont massacrés, les femmes, les enfants et les vieillards sont déportés à pied vers les déserts de Syrie. Entre **1,2 et 1,5 million** d'Arméniens meurent." },
            { t: "definition", terme: "Génocide", md: "Destruction volontaire et organisée d'un peuple, en raison de son origine, de sa nationalité ou de sa religion. Le mot a été créé en 1944 par le juriste Raphael Lemkin." },
            { t: "texte", md: "En **1917**, la Russie, épuisée, connaît deux révolutions : en février, le tsar Nicolas II abdique ; en octobre, les **bolcheviks** de **Lénine** prennent le pouvoir. Ils signent la paix avec l'Allemagne à **Brest-Litovsk** (mars 1918). La même année 1917, les **États-Unis** entrent en guerre aux côtés de l'Entente.\n\nL'**armistice** est signé le **11 novembre 1918** à Rethondes. Le **traité de Versailles** (28 juin 1919) enlève à l'Allemagne l'Alsace-Moselle et ses colonies, limite son armée et lui impose des **réparations**. Les Allemands, qui n'ont pas pu le négocier, le surnomment « **diktat** ». La **SDN**, créée en 1920, doit régler les conflits par la discussion. Le bilan est terrible : environ **10 millions de soldats tués**, dont **1,4 million de Français**." },
            { t: "citation", texte: "Les Gouvernements alliés et associés déclarent et l'Allemagne reconnaît que l'Allemagne et ses alliés sont responsables, pour les avoir causés, de toutes les pertes et de tous les dommages subis […].", auteur: "Traité de Versailles, article 231", source: "28 juin 1919" },
            { t: "carte", fond: "monde", titre: "D'autres fronts, d'autres drames", cadre: [-6, 33, 46, 62], reperes: [
              { nom: "Sarajevo (28 juin 1914)", lat: 43.86, lon: 18.41 },
              { nom: "Tannenberg (1914)", lat: 53.50, lon: 20.13 },
              { nom: "Constantinople (24 avril 1915)", lat: 41.01, lon: 28.98 },
              { nom: "Déserts de Syrie (déportations)", lat: 35.34, lon: 40.14 },
              { nom: "Petrograd (révolutions de 1917)", lat: 59.93, lon: 30.36 },
              { nom: "Brest-Litovsk (paix de 1918)", lat: 52.10, lon: 23.69 },
              { nom: "Versailles (traité de 1919)", lat: 48.80, lon: 2.13 },
            ], legende: "Frontières actuelles, pour se repérer." },
            { t: "verifie", q: "Pourquoi beaucoup d'Allemands appellent-ils le traité de Versailles un « diktat » ?", choix: ["Parce qu'il a été rédigé en allemand", "Parce qu'il leur est imposé sans négociation", "Parce qu'il donne la victoire à l'Allemagne"], bonne: 1, explication: "L'Allemagne n'a pas participé aux négociations : elle doit accepter le traité tel quel, avec la responsabilité de la guerre (article 231), des pertes de territoires et des réparations." },
          ],
        },
      ],
      bilan: "De 1914 à 1918, la guerre devient totale : des millions de soldats subissent une violence de masse, l'arrière tout entier est mobilisé, un génocide frappe les Arméniens et la Russie bascule dans la révolution.",
    },

    "3e-histoire-02-entre-deux-guerres": {
      accroche: "New York, jeudi 24 octobre 1929. À la Bourse de Wall Street, les cours des actions s'effondrent ; en quelques jours, des fortunes disparaissent. Trois ans plus tard, l'Allemagne compte six millions de chômeurs, et un homme promet de tout régler par la force : Adolf Hitler.",
      objectifs: [
        "Expliquer la crise de 1929 et ses effets sur les démocraties",
        "Caractériser le régime totalitaire de Staline en URSS",
        "Caractériser le fascisme italien et le nazisme allemand",
        "Décrire le Front populaire et ses grandes réformes",
      ],
      sections: [
        {
          titre: "1929 : une crise venue d'Amérique",
          blocs: [
            { t: "texte", md: "Le **24 octobre 1929**, le « jeudi noir », la Bourse de Wall Street s'effondre. Les banques font faillite, les entreprises ferment, le **chômage de masse** s'installe : aux États-Unis, en 1933, environ un actif sur quatre est sans travail. Les banques américaines rapatrient leurs capitaux prêtés à l'Europe : la crise devient mondiale. L'Allemagne est la plus touchée.\n\nLa misère et la colère font perdre confiance dans les démocraties. Les partis extrémistes, qui promettent des solutions rapides et désignent des boucs émissaires, progressent." },
            { t: "etapes", titre: "L'engrenage de la crise", items: [
              { titre: "Krach boursier", md: "Les actions perdent brutalement leur valeur (octobre 1929)." },
              { titre: "Faillites", md: "Banques et entreprises ruinées ferment leurs portes." },
              { titre: "Chômage de masse", md: "Des millions de travailleurs perdent leur emploi." },
              { titre: "Crise politique", md: "La misère nourrit la colère et les partis extrémistes." },
            ] },
            { t: "verifie", q: "Vrai ou faux : la crise de 1929 a renforcé les démocraties européennes.", choix: ["Vrai", "Faux"], bonne: 1, explication: "Faux : en provoquant chômage et misère, la crise fragilise les démocraties et favorise les partis extrémistes, comme le parti nazi en Allemagne." },
          ],
        },
        {
          titre: "L'URSS de Staline : terreur et collectivisation",
          blocs: [
            { t: "texte", md: "Après la mort de Lénine (1924), **Staline** élimine ses rivaux et gouverne seul l'URSS à partir de la fin des années 1920. Il veut transformer le pays à marche forcée.\n\nÀ la campagne, il impose la **collectivisation** : les paysans doivent mettre leurs terres et leur bétail en commun dans des fermes d'État ou des coopératives (kolkhozes). Les paysans aisés, appelés **koulaks**, sont déportés ou tués. La famine de 1932-1933, surtout en Ukraine, fait plusieurs millions de morts. Dans l'industrie, les **plans quinquennaux** fixent des objectifs de production. La police politique traque les « ennemis du peuple » : procès truqués, exécutions de masse lors de la Grande Terreur (1937-1938), déportation de millions de personnes au **goulag**, un ensemble de camps de travail forcé." },
            { t: "savais-tu", md: "Les photographies officielles étaient retouchées : les dirigeants tombés en disgrâce disparaissaient des images, comme s'ils n'avaient jamais existé." },
          ],
        },
        {
          titre: "Fascisme italien et nazisme allemand",
          blocs: [
            { t: "texte", md: "En **Italie**, **Mussolini** fonde le mouvement fasciste en 1919. Ses « chemises noires » font régner la violence. Après la **marche sur Rome** (octobre 1922), le roi le nomme chef du gouvernement. Le **Duce** (« le guide ») instaure un parti unique, supprime les libertés et embrigade la jeunesse.\n\nEn **Allemagne**, le parti nazi profite de la crise. Le **30 janvier 1933**, **Hitler** est nommé chancelier. En quelques mois, il supprime les libertés, ouvre le camp de concentration de Dachau pour ses opposants et impose le parti unique. Son idéologie est **raciste** et **antisémite** : il prétend que les « Aryens » forment une race supérieure. Les **lois de Nuremberg** (1935) retirent aux Juifs la citoyenneté allemande et interdisent les mariages avec des non-Juifs. Les **Jeunesses hitlériennes** encadrent les garçons." },
            { t: "citation", texte: "Les mariages entre Juifs et ressortissants de sang allemand ou apparenté sont interdits.", auteur: "Loi pour la protection du sang allemand et de l'honneur allemand, article 1", source: "Nuremberg, 15 septembre 1935" },
            { t: "carte", fond: "monde", titre: "L'Europe des régimes totalitaires dans les années 1930", cadre: [-10, 35, 48, 67], zones: ["DE", "IT", "RU", "UA", "BY"], reperes: [
              { nom: "Rome (marche de 1922)", lat: 41.90, lon: 12.50 },
              { nom: "Berlin", lat: 52.52, lon: 13.40 },
              { nom: "Nuremberg (lois de 1935)", lat: 49.45, lon: 11.08 },
              { nom: "Dachau (camp, 1933)", lat: 48.26, lon: 11.43 },
              { nom: "Moscou", lat: 55.76, lon: 37.62 },
              { nom: "Solovki (goulag)", lat: 65.03, lon: 35.71 },
              { nom: "Paris (Front populaire)", lat: 48.86, lon: 2.35 },
            ], legende: "En couleur, l'Allemagne, l'Italie et la partie européenne de l'URSS, figurées avec les frontières actuelles (approximation)." },
          ],
        },
        {
          titre: "Les points communs des régimes totalitaires",
          blocs: [
            { t: "definition", terme: "Régime totalitaire", md: "Régime qui veut contrôler **toute** la vie des individus, jusqu'à leurs pensées. Il repose sur un chef tout-puissant, un **parti unique**, une idéologie officielle, la **propagande**, la **terreur** et l'**embrigadement** de la société." },
            { t: "schema", titre: "Les piliers d'un régime totalitaire", legende: "Chaque pilier renforce les autres : la propagande fabrique le culte du chef, la terreur fait taire ceux qui doutent.", svg: `<svg viewBox="0 0 400 236"><path class="aplat" d="M200 12 L374 64 L26 64 Z"/><path class="trait" d="M200 12 L374 64 L26 64 Z"/><text class="texte-main" x="200" y="54" text-anchor="middle">le chef, objet d'un culte</text><rect class="aplat-papier" x="29" y="72" width="62" height="114"/><rect class="trait" x="29" y="72" width="62" height="114"/><text class="texte" x="65" y="129" text-anchor="middle" transform="rotate(-90 65 129)">parti unique</text><rect class="aplat-papier" x="99" y="72" width="62" height="114"/><rect class="trait" x="99" y="72" width="62" height="114"/><text class="texte" x="135" y="129" text-anchor="middle" transform="rotate(-90 135 129)">idéologie</text><rect class="aplat-papier" x="169" y="72" width="62" height="114"/><rect class="trait" x="169" y="72" width="62" height="114"/><text class="texte" x="205" y="129" text-anchor="middle" transform="rotate(-90 205 129)">propagande</text><rect class="aplat-papier" x="239" y="72" width="62" height="114"/><rect class="trait" x="239" y="72" width="62" height="114"/><text class="texte" x="275" y="129" text-anchor="middle" transform="rotate(-90 275 129)">terreur</text><rect class="aplat-papier" x="309" y="72" width="62" height="114"/><rect class="trait" x="309" y="72" width="62" height="114"/><text class="texte" x="345" y="129" text-anchor="middle" transform="rotate(-90 345 129)">embrigadement</text><rect class="aplat" x="16" y="194" width="368" height="32" rx="4"/><rect class="trait" x="16" y="194" width="368" height="32" rx="4"/><text class="texte" x="200" y="215" text-anchor="middle">une société entièrement contrôlée</text></svg>` },
            { t: "tableau", titre: "Trois régimes comparés", entetes: ["", "URSS", "Italie", "Allemagne"], lignes: [
              ["Chef", "Staline", "Mussolini, le Duce", "Hitler, le Führer"],
              ["Arrivée au pouvoir", "fin des années 1920", "1922", "1933"],
              ["Idéologie", "communisme", "fascisme, nationalisme", "nazisme, racisme, antisémitisme"],
              ["Terreur", "police politique, goulag", "police politique, prison", "Gestapo, camps de concentration"],
            ] },
            { t: "exemple", titre: "Comparer deux régimes totalitaires", md: "« En URSS comme en Allemagne nazie, un chef unique (Staline, Hitler) dirige un parti unique, contrôle l'information par la propagande et élimine ses opposants par la terreur (goulag, camps de concentration). Mais le nazisme repose sur une idéologie **raciste**, alors que le stalinisme se réclame du **communisme**. »" },
            { t: "verifie", q: "Qu'appelle-t-on le « culte de la personnalité » ?", choix: ["L'admiration obligatoire et organisée pour le chef, présenté comme un génie infaillible", "Le droit de chacun à exprimer sa personnalité", "Une religion officielle imposée par l'État"], bonne: 0, explication: "Portraits géants, statues, chants à sa gloire : la propagande présente le chef comme un guide parfait que tous doivent aimer et suivre." },
          ],
        },
        {
          titre: "La France tient bon : le Front populaire",
          blocs: [
            { t: "texte", md: "En France aussi, la crise frappe et des ligues d'extrême droite manifestent violemment le 6 février 1934. Pour défendre la République, socialistes, communistes et radicaux s'unissent dans le **Front populaire**. Il gagne les élections de **mai 1936**. Le socialiste **Léon Blum** devient chef du gouvernement.\n\nUne immense vague de grèves joyeuses, avec occupation des usines, accompagne la victoire. Les **accords Matignon** (juin 1936) et les lois qui suivent accordent des hausses de salaires, des **conventions collectives**, deux semaines de **congés payés** et la **semaine de 40 heures**. Beaucoup d'ouvriers découvrent la mer ou la montagne. La démocratie française résiste donc à la tentation totalitaire." },
            { t: "frise", titre: "L'entre-deux-guerres en repères", evenements: [
              { date: 1922, label: "Marche sur Rome : Mussolini au pouvoir" },
              { date: 1929, label: "Krach de Wall Street ; Staline seul maître de l'URSS" },
              { date: 1933, label: "Hitler chancelier (30 janvier)" },
              { date: 1935, label: "Lois de Nuremberg" },
              { date: 1936, label: "Victoire du Front populaire, accords Matignon" },
              { date: 1937, label: "Grande Terreur en URSS (1937-1938)" },
            ] },
          ],
        },
      ],
      bilan: "La crise de 1929 ébranle les démocraties : l'Italie, l'URSS et l'Allemagne vivent sous des régimes totalitaires, tandis que la France défend sa République avec le Front populaire.",
    },

    "3e-histoire-03-seconde-guerre-mondiale": {
      accroche: "22 juin 1941, à l'aube : trois millions de soldats allemands franchissent la frontière soviétique. Hitler ne cherche pas seulement à vaincre l'URSS : il veut détruire un État, asservir des peuples et exterminer les Juifs. Cette guerre ne vise plus seulement les armées, mais des populations entières.",
      objectifs: [
        "Situer les grandes phases et les grandes batailles de la guerre (1939-1945)",
        "Expliquer ce qu'est une guerre d'anéantissement",
        "Décrire le génocide des Juifs et des Tsiganes",
        "Présenter le bilan de la guerre, la création de l'ONU et le procès de Nuremberg",
      ],
      sections: [
        {
          titre: "1939-1942 : l'Axe à l'offensive",
          blocs: [
            { t: "texte", md: "Le 23 août 1939, l'Allemagne nazie et l'URSS signent un pacte de non-agression. Le **1er septembre 1939**, l'Allemagne envahit la **Pologne** ; la France et le Royaume-Uni lui déclarent la guerre le 3 septembre. Grâce à la **Blitzkrieg**, l'Allemagne occupe au printemps 1940 le Danemark, la Norvège, les Pays-Bas, la Belgique et bat la France. Le Royaume-Uni de Churchill résiste seul.\n\nEn **1941**, la guerre devient vraiment **mondiale**. Le **22 juin**, l'Allemagne attaque l'**URSS**. Le **7 décembre**, le Japon bombarde la flotte américaine à **Pearl Harbor** : les **États-Unis** entrent en guerre. Deux camps s'affrontent désormais sur tous les continents : l'**Axe** (Allemagne, Italie, Japon) et les **Alliés** (Royaume-Uni, URSS, États-Unis, la France libre…)." },
            { t: "definition", terme: "Blitzkrieg (guerre éclair)", md: "Tactique allemande qui associe chars et avions pour percer le front ennemi par surprise et l'emporter en quelques semaines." },
            { t: "carte", fond: "monde", titre: "Une guerre mondiale : quelques lieux clés", reperes: [
              { nom: "Pearl Harbor (7 décembre 1941)", lat: 21.35, lon: -157.95 },
              { nom: "Midway (juin 1942)", lat: 28.21, lon: -177.37 },
              { nom: "El Alamein (1942)", lat: 30.83, lon: 28.95 },
              { nom: "Stalingrad (1942-1943)", lat: 48.71, lon: 44.51 },
              { nom: "Normandie (6 juin 1944)", lat: 49.37, lon: -0.87 },
              { nom: "Hiroshima (6 août 1945)", lat: 34.39, lon: 132.45 },
              { nom: "San Francisco (charte de l'ONU)", lat: 37.77, lon: -122.42 },
            ] },
            { t: "verifie", q: "Pourquoi dit-on que la guerre devient vraiment mondiale en 1941 ?", choix: ["Parce que la France entre en guerre", "Parce que l'URSS est attaquée et que les États-Unis entrent en guerre après Pearl Harbor", "Parce que l'Allemagne envahit la Pologne"], bonne: 1, explication: "En 1941, l'invasion de l'URSS (juin) et l'attaque de Pearl Harbor (décembre) étendent la guerre de l'Europe au Pacifique : on combat désormais sur tous les océans et presque tous les continents." },
          ],
        },
        {
          titre: "1942-1945 : le tournant et la victoire des Alliés",
          blocs: [
            { t: "texte", md: "En 1942, l'Axe atteint son extension maximale, puis recule. Les Américains battent la flotte japonaise à **Midway** (juin 1942), les Britanniques arrêtent les Germano-Italiens à **El Alamein** (Égypte). Surtout, après des mois de combats acharnés, l'armée allemande capitule à **Stalingrad** en **février 1943** : c'est le **tournant** de la guerre. L'Armée rouge avance ensuite vers l'ouest.\n\nLe **6 juin 1944**, les Alliés **débarquent en Normandie**. Pris entre deux fronts, le Reich s'effondre : Hitler se suicide le 30 avril 1945 et l'Allemagne capitule le **8 mai 1945**. Dans le Pacifique, les Américains larguent une bombe atomique sur **Hiroshima** (6 août 1945), puis sur Nagasaki (9 août). Le Japon capitule le **2 septembre 1945**." },
            { t: "frise", titre: "Les grandes phases de la Seconde Guerre mondiale", evenements: [
              { date: 1939, label: "Invasion de la Pologne", detail: "1er septembre 1939" },
              { date: 1940, label: "Défaite de la France" },
              { date: 1941, label: "Invasion de l'URSS, Pearl Harbor", detail: "22 juin et 7 décembre 1941" },
              { date: 1942, label: "Conférence de Wannsee", detail: "Organisation de la « solution finale »" },
              { date: 1943, label: "Victoire soviétique à Stalingrad", detail: "Février 1943 : le tournant" },
              { date: 1944, label: "Débarquement de Normandie", detail: "6 juin 1944" },
              { date: 1945, label: "Capitulations de l'Allemagne et du Japon", detail: "8 mai et 2 septembre 1945" },
              { date: 1945, label: "Création de l'ONU, ouverture du procès de Nuremberg" },
            ] },
          ],
        },
        {
          titre: "Une guerre d'anéantissement",
          blocs: [
            { t: "definition", terme: "Guerre d'anéantissement", md: "Guerre qui vise la **destruction totale** de l'ennemi, de son armée mais aussi de sa population civile. Les civils deviennent des cibles." },
            { t: "texte", md: "Sur le **front de l'Est**, les nazis considèrent les Slaves comme des « sous-hommes ». L'armée allemande brûle des villages, massacre des civils ; environ 3 millions de prisonniers de guerre soviétiques meurent de faim et de mauvais traitements. Le siège de Leningrad (1941-1944) fait près d'un million de victimes civiles.\n\nLes **bombardements** de villes frappent aussi les civils de tous les camps : Londres et Coventry sous les bombes allemandes, Hambourg et Dresde sous les bombes alliées, Tokyo, puis Hiroshima et Nagasaki. En Asie, l'armée japonaise commet de nombreux massacres, comme à Nankin en 1937." },
            { t: "exemple", titre: "Rédiger au DNB : montrer qu'il s'agit d'une guerre d'anéantissement", md: "« Sur le front de l'Est, l'armée allemande détruit les villages et massacre les civils. Les Alliés bombardent les villes allemandes comme Dresde. Les nazis organisent l'extermination des Juifs d'Europe dans des camps comme Auschwitz. **Les civils sont des cibles, pas seulement les soldats.** »" },
          ],
        },
        {
          titre: "La Shoah et le génocide des Tsiganes",
          blocs: [
            { t: "definition", terme: "Shoah", md: "Mot hébreu signifiant « catastrophe ». Il désigne le **génocide des Juifs** d'Europe organisé par le régime nazi : environ **6 millions** de Juifs ont été assassinés." },
            { t: "etapes", titre: "De la persécution à l'extermination", items: [
              { titre: "Exclure (1933-1939)", md: "En Allemagne, les Juifs perdent leurs droits (lois de Nuremberg, 1935) ; violences de la Nuit de cristal (1938)." },
              { titre: "Enfermer (dès 1939)", md: "En Pologne occupée, les Juifs sont entassés dans des **ghettos**, comme à Varsovie." },
              { titre: "Fusiller (dès 1941)", md: "En URSS, les **Einsatzgruppen** fusillent les Juifs : c'est la **Shoah par balles**. À Babi Yar, près de Kiev, près de 34 000 Juifs sont tués en deux jours." },
              { titre: "Exterminer (dès 1942)", md: "La conférence de **Wannsee** (janvier 1942) organise la « solution finale ». Les Juifs d'Europe sont déportés vers des **camps d'extermination** et assassinés dans des chambres à gaz." },
            ] },
            { t: "texte", md: "**Auschwitz-Birkenau**, le plus grand camp d'extermination, est à la fois un camp de concentration et un centre de mise à mort : environ 1,1 million de personnes y sont assassinées, en très grande majorité des Juifs. D'autres centres comme Treblinka, Sobibor ou Belzec ne servent qu'à tuer. Les nazis persécutent aussi les **Tsiganes** : plusieurs centaines de milliers sont assassinés." },
            { t: "attention", md: "Ne confonds pas **camp de concentration** (on y enferme opposants et déportés, qui y meurent de travail forcé, de faim, de maladie) et **camp d'extermination** (conçu pour tuer, dès l'arrivée, des familles entières)." },
            { t: "carte", fond: "monde", titre: "Le front de l'Est et les lieux de la Shoah", cadre: [-8, 40, 48, 62], reperes: [
              { nom: "Normandie (1944)", lat: 49.37, lon: -0.87 },
              { nom: "Berlin", lat: 52.52, lon: 13.40 },
              { nom: "Auschwitz-Birkenau", lat: 50.04, lon: 19.18 },
              { nom: "Treblinka", lat: 52.63, lon: 22.05 },
              { nom: "Babi Yar (Kiev, 1941)", lat: 50.47, lon: 30.45 },
              { nom: "Leningrad (siège)", lat: 59.93, lon: 30.36 },
              { nom: "Stalingrad (1942-1943)", lat: 48.71, lon: 44.51 },
            ], legende: "Frontières actuelles, pour se repérer." },
            { t: "verifie", q: "Qu'appelle-t-on la « Shoah par balles » ?", choix: ["Les combats des résistants juifs du ghetto de Varsovie", "L'assassinat des Juifs par fusillades massives, surtout en URSS, à partir de 1941", "Les bombardements des villes allemandes"], bonne: 1, explication: "À partir de juin 1941, derrière le front de l'Est, des unités mobiles (Einsatzgruppen) fusillent les Juifs près des villes et des villages. Plus d'un million et demi de personnes sont tuées ainsi." },
          ],
        },
        {
          titre: "Un bilan effroyable et une volonté de paix",
          blocs: [
            { t: "tableau", titre: "Quelques pertes humaines (militaires et civiles, estimations)", entetes: ["Pays", "Morts"], lignes: [
              ["URSS", "environ 26 millions"],
              ["Chine", "de 10 à 20 millions"],
              ["Allemagne", "environ 7 millions"],
              ["Pologne", "environ 6 millions, dont 3 millions de Juifs"],
              ["Japon", "environ 3 millions"],
              ["France", "environ 600 000"],
              ["États-Unis", "environ 420 000"],
            ] },
            { t: "texte", md: "Au total, la guerre fait **50 à 60 millions de morts**, en majorité des **civils**. Pour éviter une nouvelle catastrophe, les vainqueurs fondent l'**ONU** : sa charte est signée à **San Francisco** le 26 **juin 1945** ; 51 États en sont les membres fondateurs. De novembre 1945 à octobre 1946, le **procès de Nuremberg** juge les principaux dirigeants nazis. Il définit une notion nouvelle : le **crime contre l'humanité**, c'est-à-dire l'assassinat, l'extermination ou la déportation de populations civiles." },
            { t: "citation", texte: "Nous, peuples des Nations unies, résolus à préserver les générations futures du fléau de la guerre qui deux fois en l'espace d'une vie humaine a infligé à l'humanité d'indicibles souffrances…", auteur: "Charte des Nations unies, préambule", source: "San Francisco, 26 juin 1945" },
            { t: "verifie", q: "Quelle nouveauté juridique apporte le procès de Nuremberg ?", choix: ["Il crée la peine de mort", "Il définit le crime contre l'humanité", "Il crée la Société des Nations"], bonne: 1, explication: "Pour la première fois, un tribunal international juge des dirigeants pour crime contre l'humanité : des crimes si graves qu'ils concernent l'humanité tout entière." },
          ],
        },
      ],
      bilan: "De 1939 à 1945, une guerre mondiale d'anéantissement fait 50 à 60 millions de morts, surtout des civils ; les nazis organisent la Shoah. Le monde répond par l'ONU et la notion de crime contre l'humanité.",
    },

    "3e-histoire-04-vichy-resistance": {
      accroche: "Juin 1940 : sur les routes, des millions de Français fuient l'avancée allemande, avec charrettes et matelas sur le toit des voitures. Le 17, le maréchal Pétain annonce à la radio qu'il faut cesser le combat. Le lendemain, depuis Londres, un général presque inconnu répond que la guerre n'est pas finie.",
      objectifs: [
        "Expliquer la défaite de 1940 et ses conséquences : armistice et occupation",
        "Caractériser le régime de Vichy et la collaboration",
        "Décrire la Résistance intérieure et la France libre",
        "Situer les étapes de la Libération et de l'épuration",
      ],
      sections: [
        {
          titre: "1940 : la défaite et l'armistice",
          blocs: [
            { t: "texte", md: "Le 10 mai 1940, l'armée allemande attaque. En **six semaines**, l'armée française est écrasée. Des millions de civils fuient vers le sud : c'est l'**exode**. Le maréchal **Pétain**, héros de Verdun, devient chef du gouvernement et demande l'armistice. Il est signé le **22 juin 1940** à Rethondes.\n\nLa France est découpée. Le nord et la côte atlantique forment la **zone occupée** par l'armée allemande ; le sud reste une **zone dite « libre »**, séparée par une **ligne de démarcation**. L'Alsace-Moselle est annexée de fait par l'Allemagne. Près de deux millions de soldats français sont prisonniers." },
            { t: "definition", terme: "Armistice", md: "Accord qui arrête les combats entre deux armées. Ce n'est pas un traité de paix : en 1940, la France vaincue doit accepter les conditions de l'Allemagne." },
            { t: "carte", fond: "france", titre: "La France occupée", reperes: [
              { nom: "Paris", lat: 48.86, lon: 2.35 },
              { nom: "Vichy", lat: 46.13, lon: 3.43 },
              { nom: "Montoire (octobre 1940)", lat: 47.75, lon: 0.86 },
              { nom: "Caluire (arrestation de Jean Moulin)", lat: 45.80, lon: 4.85 },
              { nom: "Oradour-sur-Glane (1944)", lat: 45.93, lon: 1.03 },
              { nom: "Vercors (maquis)", lat: 44.90, lon: 5.37 },
              { nom: "Normandie (6 juin 1944)", lat: 49.37, lon: -0.87 },
              { nom: "Provence (15 août 1944)", lat: 43.27, lon: 6.64 },
            ], traits: [
              { de: [43.16, -1.24], a: [43.89, -0.50] },
              { de: [43.89, -0.50], a: [44.55, -0.25] },
              { de: [44.55, -0.25], a: [46.01, 0.67], label: "ligne de démarcation (tracé approché)" },
              { de: [46.01, 0.67], a: [47.22, 2.07] },
              { de: [47.22, 2.07], a: [46.57, 3.33] },
              { de: [46.57, 3.33], a: [46.78, 4.85] },
              { de: [46.78, 4.85], a: [46.33, 6.06] },
            ], legende: "Au nord et à l'ouest de la ligne : zone occupée. Au sud : zone dite « libre », envahie à son tour le 11 novembre 1942. L'Alsace-Moselle est annexée." },
            { t: "verifie", q: "En quelle année la France est-elle vaincue et signe-t-elle l'armistice ?", choix: ["1939", "1940", "1942", "1944"], bonne: 1, explication: "L'offensive allemande commence le 10 mai 1940 et l'armistice est signé le 22 juin 1940." },
          ],
        },
        {
          titre: "Le 18 juin : de Gaulle refuse la défaite",
          blocs: [
            { t: "texte", md: "Le **18 juin 1940**, sur les ondes de la **BBC** à Londres, le général **Charles de Gaulle**, ancien sous-secrétaire d'État à la Guerre, refuse l'armistice. Il explique que la guerre est mondiale, que la France a un empire et des alliés, et appelle les Français à poursuivre le combat. Peu l'entendent ce jour-là, mais il fonde la **France libre** et ses Forces françaises libres (FFL), qui combattent aux côtés des Britanniques, par exemple à Bir Hakeim en 1942." },
            { t: "citation", texte: "Quoi qu'il arrive, la flamme de la résistance française ne doit pas s'éteindre et ne s'éteindra pas.", auteur: "Charles de Gaulle", source: "Appel du 18 juin 1940, BBC, Londres" },
          ],
        },
        {
          titre: "Vichy : un régime autoritaire qui collabore",
          blocs: [
            { t: "texte", md: "Le **10 juillet 1940**, réunis à Vichy, les parlementaires votent les **pleins pouvoirs** à Pétain. La République disparaît : elle est remplacée par l'**État français**, dont la devise est « **Travail, Famille, Patrie** ». Pétain concentre tous les pouvoirs, supprime les élections et les syndicats, organise le culte de sa personne. C'est la **Révolution nationale** : un régime **autoritaire, antirépublicain et antisémite**." },
            { t: "definition", terme: "Collaboration", md: "Politique de coopération avec l'occupant allemand, choisie par le régime de Vichy après l'entrevue entre Pétain et Hitler à **Montoire** (octobre 1940)." },
            { t: "texte", md: "Dès le **3 octobre 1940**, Vichy adopte de lui-même un **statut des Juifs** qui les exclut de nombreux métiers. Les **16 et 17 juillet 1942**, lors de la **rafle du Vél' d'Hiv**, la police française arrête à Paris environ 13 000 Juifs, dont plus de 4 000 enfants ; la plupart sont déportés à Auschwitz. Au total, environ 76 000 Juifs sont déportés de France ; seuls quelque 2 500 reviennent.\n\nLe 11 novembre 1942, l'Allemagne envahit la zone sud. En **1943**, Vichy crée la **Milice**, qui traque les résistants, et le **STO** (Service du travail obligatoire), qui envoie des centaines de milliers de jeunes travailler en Allemagne." },
            { t: "attention", md: "Le statut des Juifs d'octobre 1940 **n'a pas été imposé** par l'Allemagne : Vichy l'a décidé de sa propre initiative. C'est une preuve de l'antisémitisme du régime." },
            { t: "exemple", titre: "Rédiger au DNB : montrer que Vichy collabore", md: "« En octobre 1940, Pétain rencontre Hitler à Montoire et annonce la collaboration. Le régime adopte lui-même un statut des Juifs. En juillet 1942, c'est la police française qui organise la rafle du Vél' d'Hiv. **Vichy participe donc activement à la politique allemande.** »" },
          ],
        },
        {
          titre: "Résister, de l'ombre à l'unité",
          blocs: [
            { t: "texte", md: "Au début, les résistants sont très peu nombreux. Ils forment des **mouvements** (Combat, Libération…) qui impriment tracts et **journaux clandestins**, et des **réseaux** qui renseignent les Alliés. D'autres sabotent les voies ferrées ou cachent des Juifs : des milliers de Français sont aujourd'hui reconnus « Justes parmi les nations ». À partir de 1943, les jeunes qui refusent le STO rejoignent les **maquis**, dans les forêts et les montagnes.\n\nEnvoyé par de Gaulle, **Jean Moulin** unifie ces mouvements : le **27 mai 1943**, à Paris, il réunit le **Conseil national de la Résistance (CNR)**. Arrêté à Caluire le 21 juin 1943, il meurt quelques semaines plus tard des suites des tortures, sans avoir parlé." },
            { t: "tableau", titre: "Deux France face à l'occupant", entetes: ["", "Vichy", "France libre et Résistance"], lignes: [
              ["Chefs", "Pétain, Laval", "de Gaulle, Jean Moulin"],
              ["Choix", "armistice, collaboration", "poursuite du combat"],
              ["Valeurs", "« Travail, Famille, Patrie », autorité", "liberté, République"],
              ["Moyens", "police, Milice, propagande", "journaux, renseignement, sabotage, maquis"],
            ] },
            { t: "verifie", q: "Laquelle de ces actions n'est PAS une forme de résistance ?", choix: ["Imprimer un journal clandestin", "Cacher une famille juive", "Partir travailler en Allemagne avec le STO", "Renseigner les Alliés"], bonne: 2, explication: "Partir au STO, c'est obéir aux ordres de Vichy et de l'occupant. Les réfractaires qui refusaient le STO, eux, rejoignaient souvent les maquis." },
          ],
        },
        {
          titre: "La Libération et l'épuration",
          blocs: [
            { t: "texte", md: "Après le **débarquement de Normandie** (6 juin 1944), puis celui de **Provence** (15 août), où combattent de nombreux soldats venus de l'empire, le territoire est libéré. L'occupant se venge sur les civils : à **Oradour-sur-Glane**, le 10 juin 1944, 642 habitants sont massacrés. **Paris est libéré le 25 août 1944** par l'insurrection des résistants et la 2e division blindée du général Leclerc. De Gaulle prend la tête du **GPRF**." },
            { t: "definition", terme: "Épuration", md: "Punition des personnes accusées d'avoir collaboré avec l'occupant. D'abord souvent sauvage (exécutions sommaires, femmes tondues), elle est ensuite confiée à des tribunaux." },
            { t: "texte", md: "Pétain est condamné à mort en 1945 ; sa peine est commuée en détention à vie. Laval, son chef de gouvernement, est exécuté." },
            { t: "frise", titre: "La France dans la guerre", evenements: [
              { date: 1940, label: "Défaite, appel du 18 juin, armistice du 22 juin" },
              { date: 1940, label: "Pleins pouvoirs à Pétain, statut des Juifs" },
              { date: 1942, label: "Rafle du Vél' d'Hiv, invasion de la zone sud" },
              { date: 1943, label: "STO, Milice, création du CNR" },
              { date: 1944, label: "Débarquements, libération de Paris (25 août)" },
              { date: 1945, label: "Procès de Pétain" },
            ] },
          ],
        },
      ],
      bilan: "Vaincue en 1940, la France se déchire : Vichy abolit la République et collabore, jusqu'à livrer des Juifs à l'Allemagne, tandis que la France libre et la Résistance poursuivent le combat jusqu'à la Libération de 1944.",
    },

    "3e-histoire-05-decolonisation": {
      accroche: "New Delhi, nuit du 14 au 15 août 1947. Peu avant minuit, Nehru annonce qu'au douzième coup l'Inde « s'éveillera à la vie et à la liberté ». Après près de deux siècles de domination britannique, un pays immense devient indépendant. Mais au même moment, il se déchire en deux États.",
      objectifs: [
        "Expliquer pourquoi les empires coloniaux s'effondrent après 1945",
        "Comparer une indépendance négociée (l'Inde) et une guerre d'indépendance (l'Algérie)",
        "Situer dans le temps les grandes étapes de la décolonisation",
        "Expliquer l'affirmation du tiers-monde, de Bandung aux non-alignés",
      ],
      sections: [
        {
          titre: "Pourquoi les empires s'effondrent après 1945",
          blocs: [
            { t: "definition", terme: "Décolonisation", md: "Processus par lequel les colonies obtiennent leur **indépendance** et deviennent des États souverains. Elle s'accélère de 1945 aux années 1960." },
            { t: "liste", titre: "Quatre causes qui se combinent", items: [
              "Les **métropoles** européennes (France, Royaume-Uni, Pays-Bas) sortent **affaiblies** de la guerre ; certaines ont été vaincues ou occupées.",
              "L'**ONU** proclame le **droit des peuples à disposer d'eux-mêmes**.",
              "Les **États-Unis** et l'**URSS**, les deux Grands, sont hostiles au colonialisme.",
              "Dans les colonies, des **mouvements nationalistes**, souvent menés par des élites formées en Europe, réclament l'égalité puis l'indépendance.",
            ] },
            { t: "citation", texte: "Développer entre les nations des relations amicales fondées sur le respect du principe de l'égalité de droits des peuples et de leur droit à disposer d'eux-mêmes…", auteur: "Charte des Nations unies, article 1", source: "26 juin 1945" },
            { t: "verifie", q: "Lequel de ces facteurs n'explique PAS la décolonisation après 1945 ?", choix: ["L'affaiblissement des métropoles européennes", "Le droit des peuples à disposer d'eux-mêmes proclamé par l'ONU", "La puissance militaire renforcée des métropoles", "L'hostilité des États-Unis et de l'URSS au colonialisme"], bonne: 2, explication: "C'est l'inverse : les métropoles sortent affaiblies de la guerre, ce qui encourage les peuples colonisés à réclamer leur indépendance." },
          ],
        },
        {
          titre: "L'Inde : une indépendance négociée, une partition sanglante",
          blocs: [
            { t: "texte", md: "Dès les années 1920, **Gandhi** mène contre la domination britannique une lutte **non violente** : grèves, boycott des produits anglais, **désobéissance civile**. En 1930, sa **marche du sel** défie la loi qui réserve aux Britanniques le commerce du sel : des milliers d'Indiens le suivent jusqu'à la mer.\n\nAffaibli par la guerre, le Royaume-Uni négocie et accorde l'indépendance le **15 août 1947**. Mais le pays est coupé en deux : l'**Inde**, à majorité hindoue, et le **Pakistan**, à majorité musulmane. Cette **partition** déclenche des massacres entre communautés : des centaines de milliers de morts et entre 10 et 15 millions de personnes déplacées. Gandhi lui-même est assassiné en janvier 1948 par un extrémiste hindou." },
            { t: "definition", terme: "Non-violence", md: "Forme de lutte qui refuse d'employer la force : on désobéit à des lois jugées injustes, on boycotte, on manifeste pacifiquement, en acceptant d'être arrêté." },
          ],
        },
        {
          titre: "La France face aux guerres d'indépendance",
          blocs: [
            { t: "texte", md: "La France veut garder son empire. En **Indochine**, Hô Chi Minh proclame l'indépendance du Vietnam en septembre 1945 ; la guerre dure de 1946 à 1954. Elle s'achève par la défaite française de **Diên Biên Phu** (mai 1954).\n\nL'**Algérie**, conquise à partir de 1830, est considérée comme une partie de la France : elle forme des départements, et environ **un million d'Européens**, les « pieds-noirs », y vivent à côté de près de neuf millions d'Algériens musulmans, privés de l'égalité des droits. Le **1er novembre 1954**, le **FLN** (Front de libération nationale) lance une série d'attentats : la guerre commence. Elle est très violente : attentats, **torture** pratiquée par l'armée française, plus de deux millions de paysans déplacés dans des camps de regroupement. Revenu au pouvoir en 1958, de Gaulle accepte l'autodétermination. Les **accords d'Évian** (18 mars 1962) mènent à l'indépendance, le **5 juillet 1962**. Près d'un million de pieds-noirs et des harkis, Algériens qui avaient combattu dans l'armée française, quittent l'Algérie." },
            { t: "tableau", titre: "Deux chemins vers l'indépendance", entetes: ["", "Inde", "Algérie"], lignes: [
              ["Métropole", "Royaume-Uni", "France"],
              ["Figure ou mouvement", "Gandhi, Nehru", "FLN"],
              ["Moyens", "non-violence, négociation", "lutte armée, guerre (1954-1962)"],
              ["Indépendance", "15 août 1947", "5 juillet 1962"],
              ["Conséquences", "partition, millions de déplacés", "départ des pieds-noirs et de harkis"],
            ] },
            { t: "exemple", titre: "Rédiger au DNB : comparer deux indépendances", md: "« L'Inde obtient son indépendance en 1947 par la négociation, après la lutte non violente de Gandhi. L'Algérie l'obtient en 1962 après huit ans de guerre contre la France. **Dans les deux cas, l'indépendance s'accompagne de violences et de départs massifs de populations.** »" },
            { t: "verifie", q: "Pourquoi la France refuse-t-elle si longtemps l'indépendance de l'Algérie ?", choix: ["Parce que l'Algérie est considérée comme une partie de la France, où vit un million d'Européens", "Parce que l'ONU le lui interdit", "Parce que les Algériens ne réclament pas l'indépendance"], bonne: 0, explication: "Divisée en départements, l'Algérie est vue comme un morceau du territoire national : « l'Algérie, c'est la France », disent alors de nombreux responsables politiques." },
          ],
        },
        {
          titre: "1960, l'année de l'Afrique, et la naissance du tiers-monde",
          blocs: [
            { t: "texte", md: "En Afrique subsaharienne, les indépendances sont surtout **négociées**. En **1960**, l'« année de l'Afrique », **17 pays** deviennent indépendants, dont 14 anciennes colonies françaises comme le Sénégal, la Côte d'Ivoire ou Madagascar.\n\nEn avril **1955**, à **Bandung** (Indonésie), 29 pays d'Asie et d'Afrique condamnent le colonialisme : le **tiers-monde** s'affirme sur la scène internationale. En **1961**, à Belgrade, Nehru (Inde), Nasser (Égypte) et Tito (Yougoslavie) lancent le mouvement des **non-alignés**, qui refuse de choisir entre le bloc américain et le bloc soviétique. Mais les nouveaux États affrontent de lourdes difficultés : pauvreté, frontières tracées par les colonisateurs, dépendance économique, parfois dictatures et guerres civiles." },
            { t: "definition", terme: "Tiers-monde", md: "Expression créée en 1952 par le démographe Alfred Sauvy pour désigner les pays pauvres, souvent issus de la décolonisation, qui n'appartiennent ni au bloc de l'Ouest ni au bloc de l'Est." },
            { t: "carte", fond: "monde", titre: "Quelques nouveaux États nés de la décolonisation (1947-1963)", cadre: [-25, -35, 135, 55], zones: ["IN", "PK", "BD", "LK", "MM", "ID", "VN", "LA", "KH", "MA", "TN", "GH", "GN", "SN", "ML", "MR", "NE", "BF", "CI", "TG", "BJ", "NG", "CM", "TD", "CF", "GA", "CG", "CD", "MG", "SO", "DZ", "KE"], reperes: [
              { nom: "New Delhi", lat: 28.61, lon: 77.21 },
              { nom: "Diên Biên Phu (1954)", lat: 21.39, lon: 103.02 },
              { nom: "Bandung (1955)", lat: -6.91, lon: 107.61 },
              { nom: "Belgrade (1961)", lat: 44.79, lon: 20.45 },
              { nom: "Alger", lat: 36.75, lon: 3.06 },
            ], legende: "Frontières actuelles. Le Bangladesh, qui faisait partie du Pakistan en 1947, devient indépendant en 1971." },
            { t: "frise", titre: "Les grandes étapes de la décolonisation", evenements: [
              { date: 1945, label: "Charte de l'ONU : droit des peuples à disposer d'eux-mêmes" },
              { date: 1947, label: "Indépendance de l'Inde et du Pakistan" },
              { date: 1954, label: "Diên Biên Phu ; début de la guerre d'Algérie", detail: "1er novembre 1954" },
              { date: 1955, label: "Conférence de Bandung" },
              { date: 1956, label: "Indépendance du Maroc et de la Tunisie" },
              { date: 1960, label: "Année de l'Afrique : 17 indépendances" },
              { date: 1961, label: "Mouvement des non-alignés (Belgrade)" },
              { date: 1962, label: "Accords d'Évian, indépendance de l'Algérie" },
            ] },
            { t: "verifie", q: "Quelle est la portée de la conférence de Bandung en 1955 ?", choix: ["Elle crée l'Union européenne", "Elle marque l'entrée du tiers-monde sur la scène internationale et condamne le colonialisme", "Elle met fin à la guerre d'Algérie"], bonne: 1, explication: "À Bandung, des pays d'Asie et d'Afrique, pour la plupart récemment décolonisés, parlent d'une seule voix contre le colonialisme : le tiers-monde s'affirme." },
          ],
        },
      ],
      bilan: "Après 1945, les peuples colonisés conquièrent leur indépendance, par la négociation comme en Inde ou par la guerre comme en Algérie ; les nouveaux États s'affirment comme tiers-monde, mais doivent tout construire.",
    },

    "3e-histoire-06-guerre-froide": {
      accroche: "Berlin, nuit du 12 au 13 août 1961. Des soldats est-allemands déroulent des barbelés au milieu des rues. Au matin, des familles se retrouvent séparées par une frontière qui coupe la ville en deux. Bientôt, un mur de béton remplace les barbelés : pendant 28 ans, il sera le symbole d'un monde divisé.",
      objectifs: [
        "Expliquer la formation de deux blocs à partir de 1947",
        "Situer et décrire les grandes crises de la guerre froide",
        "Montrer que Berlin est un symbole de la guerre froide",
        "Expliquer la fin de la guerre froide (1989-1991)",
      ],
      sections: [
        {
          titre: "1947 : deux Grands, deux blocs",
          blocs: [
            { t: "texte", md: "Alliés contre Hitler, les **États-Unis** et l'**URSS** s'opposent dès la fin de la guerre. Ils défendent deux modèles incompatibles. En mars **1947**, la **doctrine Truman** annonce que les États-Unis aideront les peuples à « endiguer » le communisme ; le **plan Marshall** offre une aide économique massive à l'Europe pour sa reconstruction. En septembre, la **doctrine Jdanov** répond en dénonçant l'« impérialisme » américain. Le monde devient **bipolaire**." },
            { t: "citation", texte: "De Stettin dans la Baltique jusqu'à Trieste dans l'Adriatique, un rideau de fer est descendu à travers le continent.", auteur: "Winston Churchill", source: "Discours de Fulton (États-Unis), 5 mars 1946" },
            { t: "schema", titre: "Un monde bipolaire", legende: "Chaque Grand rassemble autour de lui un bloc d'alliés. Les pays du tiers-monde sont l'objet de leur rivalité ; certains refusent de choisir.", svg: `<svg viewBox="0 0 400 270"><circle class="aplat" cx="92" cy="112" r="84"/><circle class="trait" cx="92" cy="112" r="84"/><circle class="aplat" cx="308" cy="112" r="84"/><circle class="trait" cx="308" cy="112" r="84"/><text class="texte-main" x="92" y="20" text-anchor="middle">bloc de l'Ouest</text><text class="texte-main" x="308" y="20" text-anchor="middle">bloc de l'Est</text><text class="texte-pigment" x="92" y="82" text-anchor="middle">États-Unis</text><text class="texte-petit" x="92" y="104" text-anchor="middle">capitalisme</text><text class="texte-petit" x="92" y="124" text-anchor="middle">démocratie libérale</text><text class="texte-petit" x="92" y="146" text-anchor="middle">OTAN (1949)</text><text class="texte-pigment" x="308" y="82" text-anchor="middle">URSS</text><text class="texte-petit" x="308" y="104" text-anchor="middle">communisme</text><text class="texte-petit" x="308" y="124" text-anchor="middle">démocraties populaires</text><text class="texte-petit" x="308" y="146" text-anchor="middle">pacte de Varsovie (1955)</text><path class="pointille" d="M200 34 L200 42 M200 78 L200 200"/><text class="texte-petit" x="200" y="214" text-anchor="middle">rideau de fer</text><text class="texte-petit" x="200" y="56" text-anchor="middle">menace</text><text class="texte-petit" x="200" y="70" text-anchor="middle">nucléaire</text><path class="trait-fin" d="M182 96 L218 96" marker-end="url(#fl)"/><path class="trait-fin" d="M218 112 L182 112" marker-end="url(#fl)"/><rect class="aplat-papier" x="70" y="228" width="260" height="34" rx="6"/><rect class="trait-fin" x="70" y="228" width="260" height="34" rx="6"/><text class="texte" x="200" y="250" text-anchor="middle">tiers-monde : rivalités, non-alignés</text><path class="trait-fin" d="M110 228 L100 200" marker-end="url(#fl)"/><path class="trait-fin" d="M290 228 L300 200" marker-end="url(#fl)"/></svg>` },
            { t: "tableau", titre: "Deux modèles opposés", entetes: ["", "Bloc de l'Ouest", "Bloc de l'Est"], lignes: [
              ["Puissance dominante", "États-Unis", "URSS"],
              ["Économie", "capitalisme, libre entreprise", "communisme, économie planifiée par l'État"],
              ["Régime politique", "démocratie, élections libres", "parti unique, pas de libertés"],
              ["Alliance militaire", "OTAN (1949)", "pacte de Varsovie (1955)"],
            ] },
            { t: "definition", terme: "Guerre froide", md: "Affrontement entre les États-Unis et l'URSS de 1947 à 1991. Elle est « froide » car les deux Grands ne s'affrontent **jamais directement** : possédant tous deux la bombe atomique, ils craignent une guerre nucléaire. C'est l'**équilibre de la terreur**." },
          ],
        },
        {
          titre: "Berlin, ville symbole",
          blocs: [
            { t: "texte", md: "Vaincue, l'Allemagne est partagée en quatre zones d'occupation, comme sa capitale Berlin, située en zone soviétique. En juin **1948**, Staline organise le **blocus** de Berlin-Ouest : routes et voies ferrées sont coupées. Pendant près d'un an, les Américains ravitaillent la ville par un **pont aérien**. En 1949 naissent deux États : la **RFA** à l'ouest, la **RDA** communiste à l'est.\n\nDes millions d'Allemands de l'Est fuient vers l'Ouest par Berlin. Pour arrêter cette hémorragie, la RDA construit le **mur de Berlin** le **13 août 1961**. Le président américain Kennedy vient y affirmer son soutien en 1963." },
            { t: "citation", texte: "Tous les hommes libres, où qu'ils vivent, sont citoyens de Berlin. Et donc, en tant qu'homme libre, je suis fier de prononcer ces mots : « Ich bin ein Berliner ».", auteur: "John F. Kennedy", source: "Discours de Berlin-Ouest, 26 juin 1963" },
            { t: "carte", fond: "monde", titre: "L'Europe coupée en deux", cadre: [-10, 36, 45, 63], zones: ["PL", "CZ", "SK", "HU", "RO", "BG", "RU", "UA", "BY", "LT", "LV", "EE", "MD"], reperes: [
              { nom: "Berlin (blocus 1948, mur 1961)", lat: 52.52, lon: 13.40 },
              { nom: "Bonn (capitale de la RFA)", lat: 50.73, lon: 7.10 },
              { nom: "Varsovie (pacte de 1955)", lat: 52.23, lon: 21.01 },
              { nom: "Budapest (1956)", lat: 47.50, lon: 19.04 },
              { nom: "Prague (1968)", lat: 50.08, lon: 14.44 },
              { nom: "Moscou", lat: 55.76, lon: 37.62 },
            ], traits: [
              { de: [53.43, 14.55], a: [45.65, 13.78], label: "rideau de fer" },
            ], legende: "En couleur : l'URSS et les démocraties populaires (frontières actuelles). La RDA correspond à l'est de l'Allemagne actuelle. À Budapest (1956) et Prague (1968), l'armée soviétique écrase les tentatives de liberté." },
            { t: "exemple", titre: "Rédiger au DNB : Berlin, symbole de la guerre froide", md: "« En 1948, Staline bloque Berlin-Ouest ; les Américains ravitaillent la ville par avion. En 1961, la RDA construit un mur qui coupe la ville en deux. Enfin, sa chute en 1989 annonce la fin de la guerre froide. **Berlin concentre donc toutes les étapes du conflit.** »" },
          ],
        },
        {
          titre: "Une guerre « froide », des crises brûlantes",
          blocs: [
            { t: "texte", md: "Les deux Grands s'affrontent **indirectement**, par pays interposés. En **Corée** (1950-1953), le Nord communiste, soutenu par la Chine et l'URSS, envahit le Sud, défendu par les États-Unis et l'ONU. Au **Vietnam** (1964-1975), les Américains combattent les communistes vietnamiens, aidés par l'URSS et la Chine, et finissent par se retirer.\n\nEn **octobre 1962**, la **crise de Cuba** est le moment le plus dangereux : l'URSS installe des missiles nucléaires sur l'île, à 150 km des côtes américaines. Kennedy impose un blocus maritime et exige leur retrait ; après treize jours de tension, **Khrouchtchev cède**. Les deux Grands ouvrent alors une période de **détente** : un « téléphone rouge » relie Washington et Moscou (1963), des accords limitent les armes nucléaires (1972)." },
            { t: "attention", md: "Pendant la guerre de Corée, les armées **américaine et soviétique ne se combattent pas** directement : l'URSS fournit armes et conseillers au Nord, et ce sont des soldats chinois qui viennent l'aider." },
            { t: "carte", fond: "monde", titre: "Les crises de la guerre froide dans le monde", reperes: [
              { nom: "Washington", lat: 38.90, lon: -77.04 },
              { nom: "Moscou", lat: 55.76, lon: 37.62 },
              { nom: "Cuba (1962)", lat: 23.11, lon: -82.37 },
              { nom: "Berlin (1948, 1961)", lat: 52.52, lon: 13.40 },
              { nom: "Corée (1950-1953)", lat: 37.96, lon: 126.68 },
              { nom: "Vietnam (1964-1975)", lat: 16.46, lon: 107.59 },
              { nom: "Afghanistan (1979)", lat: 34.53, lon: 69.17 },
            ] },
            { t: "verifie", q: "Que se passe-t-il lors de la crise de Cuba en octobre 1962 ?", choix: ["Les États-Unis envahissent l'URSS", "L'URSS installe des missiles nucléaires à Cuba, puis les retire face à la fermeté de Kennedy", "Cuba devient membre de l'OTAN"], bonne: 1, explication: "Le monde frôle la guerre nucléaire. Khrouchtchev accepte finalement de retirer ses missiles : la crise ouvre la voie à la détente." },
          ],
        },
        {
          titre: "1989-1991 : la fin d'un monde bipolaire",
          blocs: [
            { t: "texte", md: "Dans les années 1980, l'URSS s'épuise : économie en panne, course aux armements ruineuse, guerre en Afghanistan (1979-1989). Arrivé au pouvoir en **1985**, **Gorbatchev** lance la **glasnost** (transparence, plus de liberté d'expression) et la **perestroïka** (restructuration de l'économie). Il renonce à intervenir dans les démocraties populaires, qui se libèrent une à une.\n\nLe **9 novembre 1989**, le **mur de Berlin tombe** sous la pression des Berlinois de l'Est. L'Allemagne est réunifiée le 3 octobre 1990. Le **25 décembre 1991**, Gorbatchev démissionne : l'**URSS disparaît**, remplacée par quinze États indépendants, dont la Russie. La guerre froide est terminée." },
            { t: "frise", titre: "La guerre froide en repères", evenements: [
              { date: 1947, label: "Doctrines Truman et Jdanov, plan Marshall" },
              { date: 1948, label: "Blocus de Berlin (1948-1949)" },
              { date: 1949, label: "OTAN ; naissance de la RFA et de la RDA" },
              { date: 1950, label: "Guerre de Corée (1950-1953)" },
              { date: 1955, label: "Pacte de Varsovie" },
              { date: 1961, label: "Construction du mur de Berlin", detail: "13 août 1961" },
              { date: 1962, label: "Crise de Cuba" },
              { date: 1985, label: "Gorbatchev au pouvoir" },
              { date: 1989, label: "Chute du mur de Berlin", detail: "9 novembre 1989" },
              { date: 1991, label: "Disparition de l'URSS", detail: "25 décembre 1991" },
            ] },
            { t: "verifie", q: "Pourquoi parle-t-on de guerre « froide » ?", choix: ["Parce qu'elle se déroule surtout en hiver et dans les pays froids", "Parce que les deux Grands ne s'affrontent jamais directement, par peur de la guerre nucléaire", "Parce qu'il n'y a aucun mort pendant toute la période"], bonne: 1, explication: "Il y a bien des guerres meurtrières (Corée, Vietnam), mais par pays interposés : les États-Unis et l'URSS évitent l'affrontement direct qui pourrait déclencher une guerre atomique." },
          ],
        },
      ],
      bilan: "De 1947 à 1991, deux blocs s'opposent sans jamais se combattre directement ; Berlin, coupée par un mur en 1961, incarne cette division jusqu'à la chute du mur en 1989 et la fin de l'URSS en 1991.",
    },

    "3e-histoire-07-projet-europeen": {
      accroche: "Paris, 9 mai 1950. Cinq ans à peine après la guerre, le ministre français des Affaires étrangères Robert Schuman propose à l'Allemagne, l'ennemie d'hier, de mettre en commun le charbon et l'acier. Ce jour est devenu la journée de l'Europe.",
      objectifs: [
        "Expliquer les objectifs de la construction européenne après 1945",
        "Situer dans le temps les grandes étapes et les grands traités",
        "Décrire les élargissements et les principales institutions de l'Union",
        "Identifier les défis actuels de l'Union européenne",
      ],
      sections: [
        {
          titre: "Pourquoi construire l'Europe ?",
          blocs: [
            { t: "texte", md: "En 1945, l'Europe est en ruines, et la France et l'Allemagne se sont affrontées trois fois en 70 ans (1870, 1914, 1939). Des responsables politiques veulent rompre avec ce cycle. Leur **premier objectif est la paix**, grâce à la **réconciliation franco-allemande**. Ils veulent aussi reconstruire et enrichir le continent, et lui permettre de peser face aux deux Grands de la guerre froide.\n\nLe **9 mai 1950**, **Robert Schuman**, inspiré par **Jean Monnet**, propose de commencer par l'économie. Mettre en commun le charbon et l'acier, c'est-à-dire les matières premières des armes, rendrait une nouvelle guerre « matériellement impossible »." },
            { t: "citation", texte: "L'Europe ne se fera pas d'un coup, ni dans une construction d'ensemble : elle se fera par des réalisations concrètes créant d'abord une solidarité de fait.", auteur: "Robert Schuman", source: "Déclaration du 9 mai 1950" },
            { t: "verifie", q: "Quel est le premier objectif de la construction européenne après 1945 ?", choix: ["Créer une armée européenne contre les États-Unis", "Garantir la paix en réconciliant les anciens ennemis", "Supprimer les États nationaux"], bonne: 1, explication: "Après deux guerres mondiales, il s'agit avant tout de rendre la guerre impossible entre Européens, en commençant par la France et l'Allemagne." },
          ],
        },
        {
          titre: "Des Six au marché commun",
          blocs: [
            { t: "texte", md: "En **1951**, six pays fondent la **CECA** (Communauté européenne du charbon et de l'acier) : la **France**, la **RFA**, l'**Italie**, la **Belgique**, les **Pays-Bas** et le **Luxembourg**. Jean Monnet en dirige la Haute Autorité.\n\nLe **traité de Rome** (25 mars **1957**) va plus loin : il crée la **CEE** (Communauté économique européenne), un **marché commun** où les marchandises circulent sans droits de douane entre les Six. En 1962 naît la **politique agricole commune** (PAC), qui aide les agriculteurs à moderniser leurs exploitations." },
            { t: "carte", fond: "monde", titre: "Les six pays fondateurs (1951-1957)", cadre: [-6, 36, 19, 56], zones: ["FR", "DE", "IT", "BE", "NL", "LU"], reperes: [
              { nom: "Paris (traité CECA, 1951)", lat: 48.86, lon: 2.35 },
              { nom: "Rome (traité CEE, 1957)", lat: 41.90, lon: 12.50 },
            ], legende: "Frontières actuelles : en 1957, seule la RFA, à l'ouest de l'Allemagne actuelle, fait partie de la CEE." },
            { t: "attention", md: "Le **Royaume-Uni n'est pas** un pays fondateur. Il refuse d'abord d'entrer, puis sa candidature est rejetée par de Gaulle. Il n'adhère qu'en **1973**, et il est le premier État membre à quitter l'Union, en 2020." },
            { t: "exemple", titre: "Rédiger au DNB : pourquoi commencer par l'économie ?", md: "« En 1951, la CECA met en commun le charbon et l'acier, c'est-à-dire les matières premières de la guerre. Les anciens ennemis deviennent partenaires : une guerre entre la France et l'Allemagne devient impossible. **L'économie est un moyen au service de la paix.** »" },
          ],
        },
        {
          titre: "Élargir et approfondir",
          blocs: [
            { t: "propriete", titre: "Deux mouvements complémentaires", md: "**Élargir**, c'est accueillir de nouveaux pays membres.\n**Approfondir**, c'est renforcer les liens entre les membres en mettant en commun de nouvelles politiques (marché unique, monnaie, libre circulation)." },
            { t: "tableau", titre: "Les élargissements successifs", entetes: ["Année", "Nouveaux membres", "Total"], lignes: [
              ["1973", "Royaume-Uni, Irlande, Danemark", "9"],
              ["1981", "Grèce", "10"],
              ["1986", "Espagne, Portugal", "12"],
              ["1995", "Autriche, Finlande, Suède", "15"],
              ["2004", "dix pays, dont la Pologne, la Hongrie, la Tchéquie, les pays baltes, Malte et Chypre", "25"],
              ["2007", "Bulgarie, Roumanie", "27"],
              ["2013", "Croatie", "28"],
              ["2020", "sortie du Royaume-Uni (Brexit)", "27"],
            ] },
            { t: "texte", md: "L'élargissement de **2004** est historique : huit des dix nouveaux membres sont d'anciens pays communistes d'Europe de l'Est. Quinze ans après la chute du mur de Berlin, l'Europe divisée par la guerre froide se réunit.\n\nL'Union s'approfondit aussi. Depuis **1979**, le **Parlement européen** est élu au suffrage universel direct. L'espace **Schengen** supprime les contrôles aux frontières intérieures. Le **traité de Maastricht** (**1992**) crée l'**Union européenne** et une **citoyenneté européenne** : un Européen peut voter aux élections municipales et européennes dans le pays où il réside. Il prépare aussi la monnaie unique : l'**euro** circule en pièces et en billets depuis le **1er janvier 2002**." },
            { t: "verifie", q: "La création de l'euro est un exemple d'« approfondissement ». Que signifie ce mot ?", choix: ["Accueillir de nouveaux pays", "Renforcer l'intégration entre les pays membres en mettant de nouvelles politiques en commun", "Quitter l'Union européenne"], bonne: 1, explication: "Partager une même monnaie, c'est aller plus loin ensemble : on approfondit. Accueillir de nouveaux membres, c'est élargir." },
          ],
        },
        {
          titre: "Qui décide dans l'Union européenne ?",
          blocs: [
            { t: "tableau", titre: "Les principales institutions", entetes: ["Institution", "Siège", "Rôle"], lignes: [
              ["Parlement européen", "Strasbourg", "élu par les citoyens, vote les lois et le budget"],
              ["Commission européenne", "Bruxelles", "propose les lois et veille à leur application"],
              ["Conseil européen", "Bruxelles", "réunit les chefs d'État et de gouvernement, fixe les grandes orientations"],
              ["Cour de justice", "Luxembourg", "fait respecter le droit européen"],
              ["Banque centrale européenne", "Francfort", "gère l'euro"],
            ] },
            { t: "carte", fond: "monde", titre: "L'Union européenne à 27", cadre: [-11, 34, 36, 70], zones: ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"], reperes: [
              { nom: "Bruxelles", lat: 50.85, lon: 4.35 },
              { nom: "Strasbourg", lat: 48.57, lon: 7.75 },
              { nom: "Luxembourg", lat: 49.61, lon: 6.13 },
              { nom: "Francfort", lat: 50.11, lon: 8.68 },
            ], legende: "Les 27 États membres depuis le 1er février 2020, et les sièges des principales institutions." },
          ],
        },
        {
          titre: "Les défis de l'Union aujourd'hui",
          blocs: [
            { t: "texte", md: "Prix Nobel de la paix en 2012, l'Union reste pourtant contestée. Lors d'un référendum, le 23 juin **2016**, les Britanniques votent pour quitter l'Union : c'est le **Brexit**, effectif le **31 janvier 2020**. L'Union compte depuis **27 membres**. Ailleurs aussi, l'**euroscepticisme** progresse.\n\nL'Union affronte des crises successives : crise financière de 2008, arrivée de réfugiés en 2015, pandémie de Covid-19, puis **guerre en Ukraine** depuis 2022. Elle doit aussi décider si elle accueille de nouveaux membres, comme l'Ukraine, la Moldavie ou des pays des Balkans." },
            { t: "frise", titre: "La construction européenne en repères", evenements: [
              { date: 1950, label: "Déclaration Schuman", detail: "9 mai 1950" },
              { date: 1951, label: "CECA : les Six" },
              { date: 1957, label: "Traité de Rome : la CEE" },
              { date: 1979, label: "Première élection du Parlement européen" },
              { date: 1992, label: "Traité de Maastricht : l'Union européenne" },
              { date: 2002, label: "L'euro en pièces et en billets" },
              { date: 2004, label: "Élargissement à dix pays" },
              { date: 2020, label: "Sortie du Royaume-Uni", detail: "31 janvier 2020" },
            ] },
          ],
        },
      ],
      bilan: "Née pour garantir la paix, la construction européenne passe de six pays en 1951 à vingt-sept aujourd'hui ; elle s'élargit et s'approfondit, du marché commun à l'euro, malgré les crises et le Brexit.",
    },

    "3e-histoire-08-monde-apres-1989": {
      accroche: "New York, mardi 11 septembre 2001, 8 h 46. Un avion de ligne détourné percute la tour nord du World Trade Center ; dix-sept minutes plus tard, un second frappe la tour sud. En direct à la télévision, le monde découvre que la première puissance de la planète est vulnérable.",
      objectifs: [
        "Expliquer l'espoir d'un « nouvel ordre mondial » après la guerre froide",
        "Situer et caractériser les principaux conflits depuis 1989",
        "Expliquer le rôle de l'ONU dans le maintien de la paix, et ses limites",
        "Identifier les nouvelles menaces et les nouvelles puissances",
      ],
      sections: [
        {
          titre: "Après 1991, l'espoir d'un nouvel ordre mondial",
          blocs: [
            { t: "texte", md: "Avec la chute du mur (1989) et la disparition de l'URSS (1991), les **États-Unis** restent la **seule superpuissance** : on parle d'« hyperpuissance ». Beaucoup espèrent un monde enfin pacifié, où les conflits seraient réglés par le droit international et par l'**ONU**, que la guerre froide paralysait.\n\nLa **guerre du Golfe** semble confirmer cet espoir. Le 2 août **1990**, l'Irak de **Saddam Hussein** envahit le **Koweït**. Avec l'autorisation du Conseil de sécurité, une coalition de 35 pays, menée par les États-Unis, libère le Koweït au début de **1991**." },
            { t: "citation", texte: "De ces temps troublés peut émerger un nouvel ordre mondial : une ère nouvelle, plus libre face à la menace de la terreur, plus forte dans la recherche de la justice et plus sûre dans la quête de la paix.", auteur: "George H. W. Bush, président des États-Unis", source: "Discours devant le Congrès, 11 septembre 1990" },
            { t: "definition", terme: "Nouvel ordre mondial", md: "Espoir, après la guerre froide, d'un monde où la paix serait garantie par le respect du droit international et par l'action collective de l'ONU." },
            { t: "verifie", q: "Quel événement déclenche la guerre du Golfe de 1991 ?", choix: ["Les attentats du 11 septembre", "L'invasion du Koweït par l'Irak", "La chute du mur de Berlin"], bonne: 1, explication: "En août 1990, l'Irak envahit son petit voisin, riche en pétrole. L'ONU autorise une coalition internationale à le libérer : elle y parvient en février 1991." },
          ],
        },
        {
          titre: "Des guerres et des génocides au cœur des années 1990",
          blocs: [
            { t: "texte", md: "La **Yougoslavie**, fédération de six républiques, éclate à partir de 1991 sous la poussée des nationalismes. Les guerres se succèdent : en Croatie, en **Bosnie** (1992-1995), puis au Kosovo (1998-1999). Des milices pratiquent le **nettoyage ethnique**. **Sarajevo** subit un siège de près de quatre ans. En juillet **1995**, à **Srebrenica**, environ 8 000 hommes et adolescents musulmans sont tués par les forces serbes de Bosnie, malgré la présence de casques bleus : la justice internationale a qualifié ce massacre de génocide.\n\nAu **Rwanda**, d'avril à juillet **1994**, le pouvoir extrémiste hutu organise le **génocide des Tutsi** : environ **800 000 personnes** sont assassinées en une centaine de jours. L'ONU, qui retire alors la plupart de ses soldats, n'empêche pas les massacres. Pour juger les responsables, l'ONU crée des tribunaux pénaux internationaux, puis la Cour pénale internationale (2002)." },
            { t: "definition", terme: "Nettoyage ethnique", md: "Politique qui vise à chasser d'un territoire, par la terreur, les massacres ou les déportations, une population considérée comme différente par son origine ou sa religion." },
          ],
        },
        {
          titre: "Le terrorisme djihadiste et ses guerres",
          blocs: [
            { t: "definition", terme: "Terrorisme", md: "Usage de la violence contre des civils, par des attentats, pour semer la peur et faire pression sur un État ou une société." },
            { t: "texte", md: "Le **11 septembre 2001**, des terroristes d'**Al-Qaïda**, l'organisation djihadiste d'Oussama Ben Laden, détournent quatre avions et frappent New York et Washington : près de **3 000 morts**. Les États-Unis répliquent en attaquant l'**Afghanistan** (octobre 2001), dont le régime taliban abritait Al-Qaïda.\n\nEn **2003**, ils envahissent l'**Irak sans l'accord du Conseil de sécurité**, en l'accusant de détenir des armes de destruction massive, qui n'ont jamais été trouvées. La France, l'Allemagne et la Russie s'y opposent. Le pays plonge dans la guerre civile. Le terrorisme frappe aussi l'Europe : Madrid (2004), Londres (2005), puis la France en **2015**, avec les attentats contre Charlie Hebdo (janvier) et ceux du **13 novembre** à Paris et Saint-Denis (130 morts), et à Nice le 14 juillet 2016." },
            { t: "verifie", q: "Pourquoi la guerre d'Irak lancée en 2003 par les États-Unis est-elle très contestée ?", choix: ["Parce qu'elle est menée sans l'accord du Conseil de sécurité de l'ONU", "Parce que l'Irak a attaqué les États-Unis", "Parce qu'elle oppose les États-Unis à la Russie"], bonne: 0, explication: "Sans mandat de l'ONU et sur la base d'accusations qui se sont révélées fausses, cette guerre affaiblit le droit international que l'on espérait renforcer après 1991." },
          ],
        },
        {
          titre: "L'ONU, gardienne fragile de la paix",
          blocs: [
            { t: "texte", md: "Le **Conseil de sécurité** est l'organe chargé de la paix. Il peut décider des sanctions, autoriser l'usage de la force ou envoyer des **casques bleus**, soldats prêtés par les États membres, qui ont reçu le prix Nobel de la paix en 1988. Mais chacun des cinq membres permanents dispose d'un **droit de veto** : il peut bloquer seul toute décision. L'ONU n'a pas d'armée propre et dépend de la bonne volonté des grandes puissances." },
            { t: "schema", titre: "Le Conseil de sécurité de l'ONU", legende: "Les cinq membres permanents sont les grands vainqueurs de 1945. Un seul veto suffit à empêcher une décision.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat" x="8" y="8" width="384" height="214" rx="10"/><rect class="trait" x="8" y="8" width="384" height="214" rx="10"/><text class="texte-main" x="200" y="32" text-anchor="middle">Conseil de sécurité : 15 membres</text><circle class="aplat-fort" cx="50" cy="66" r="16"/><circle class="aplat-fort" cx="125" cy="66" r="16"/><circle class="aplat-fort" cx="200" cy="66" r="16"/><circle class="aplat-fort" cx="275" cy="66" r="16"/><circle class="aplat-fort" cx="350" cy="66" r="16"/><text class="texte-petit" x="50" y="100" text-anchor="middle">États-Unis</text><text class="texte-petit" x="125" y="100" text-anchor="middle">Russie</text><text class="texte-petit" x="200" y="100" text-anchor="middle">Chine</text><text class="texte-petit" x="275" y="100" text-anchor="middle">France</text><text class="texte-petit" x="350" y="100" text-anchor="middle">Royaume-Uni</text><text class="texte" x="200" y="122" text-anchor="middle">5 membres permanents, avec droit de veto</text><line class="pointille" x1="24" y1="134" x2="376" y2="134"/><circle class="aplat-papier" cx="38" cy="156" r="10"/><circle class="aplat-papier" cx="74" cy="156" r="10"/><circle class="aplat-papier" cx="110" cy="156" r="10"/><circle class="aplat-papier" cx="146" cy="156" r="10"/><circle class="aplat-papier" cx="182" cy="156" r="10"/><circle class="aplat-papier" cx="218" cy="156" r="10"/><circle class="aplat-papier" cx="254" cy="156" r="10"/><circle class="aplat-papier" cx="290" cy="156" r="10"/><circle class="aplat-papier" cx="326" cy="156" r="10"/><circle class="aplat-papier" cx="362" cy="156" r="10"/><text class="texte" x="200" y="186" text-anchor="middle">10 membres élus pour 2 ans</text><text class="texte-petit" x="200" y="208" text-anchor="middle">décide : sanctions, casques bleus, usage de la force</text></svg>` },
            { t: "exemple", titre: "Rédiger au DNB : les limites de l'ONU", md: "« En 1991, l'ONU autorise une coalition à libérer le Koweït : c'est un succès. Mais en 1994 au Rwanda et en 1995 à Srebrenica, ses casques bleus n'empêchent pas les massacres. En 2003, les États-Unis attaquent l'Irak sans son accord. **L'ONU dépend donc de la volonté des grandes puissances.** »" },
          ],
        },
        {
          titre: "Vers un monde multipolaire",
          blocs: [
            { t: "texte", md: "La **mondialisation** fait émerger de **nouvelles puissances**. La **Chine** devient la deuxième économie du monde vers 2010 ; l'**Inde** et le **Brésil** pèsent davantage. Les États-Unis restent la première puissance, mais ne décident plus seuls. La **Russie** redevient conflictuelle : elle annexe la **Crimée** en 2014, puis envahit l'**Ukraine** le **24 février 2022**." },
            { t: "definition", terme: "Monde multipolaire", md: "Monde organisé autour de **plusieurs** grands pôles de puissance (États-Unis, Chine, Union européenne, Russie, Inde…), et non plus autour d'un ou deux seulement." },
            { t: "carte", fond: "monde", titre: "Quelques conflits et attentats depuis 1990", cadre: [-80, -15, 75, 60], reperes: [
              { nom: "Koweït (1990-1991)", lat: 29.37, lon: 47.98 },
              { nom: "Sarajevo (1992-1995)", lat: 43.86, lon: 18.41 },
              { nom: "Rwanda (1994)", lat: -1.95, lon: 30.06 },
              { nom: "New York (11 septembre 2001)", lat: 40.71, lon: -74.01 },
              { nom: "Afghanistan (2001)", lat: 34.53, lon: 69.17 },
              { nom: "Irak (2003)", lat: 33.31, lon: 44.37 },
              { nom: "Paris (2015)", lat: 48.86, lon: 2.35 },
              { nom: "Ukraine (2014, 2022)", lat: 50.45, lon: 30.52 },
            ] },
            { t: "frise", titre: "Le monde depuis 1989", evenements: [
              { date: 1989, label: "Chute du mur de Berlin" },
              { date: 1991, label: "Guerre du Golfe, fin de l'URSS" },
              { date: 1994, label: "Génocide des Tutsi au Rwanda" },
              { date: 1995, label: "Massacre de Srebrenica" },
              { date: 2001, label: "Attentats du 11 septembre" },
              { date: 2003, label: "Guerre d'Irak" },
              { date: 2014, label: "Annexion de la Crimée par la Russie" },
              { date: 2015, label: "Attentats de Paris" },
              { date: 2022, label: "Invasion de l'Ukraine par la Russie" },
            ] },
          ],
        },
      ],
      bilan: "L'espoir d'un nouvel ordre mondial s'est vite heurté aux génocides, au terrorisme et aux guerres ; l'ONU agit mais reste limitée par le veto des grandes puissances, dans un monde devenu multipolaire.",
    },

    "3e-histoire-09-refonder-republique": {
      accroche: "Le 29 avril 1945, des millions de Françaises glissent pour la première fois un bulletin dans l'urne, aux élections municipales. Un siècle après les hommes, elles deviennent citoyennes à part entière. La République qui renaît ne se contente pas de revenir : elle se réinvente.",
      objectifs: [
        "Expliquer le rôle du GPRF et du programme du CNR dans la refondation",
        "Décrire les réformes politiques et sociales de la Libération",
        "Caractériser la IVe République et sa Constitution de 1946",
      ],
      sections: [
        {
          titre: "À la Libération, rétablir la République",
          blocs: [
            { t: "texte", md: "En 1944, à mesure que le territoire est libéré, le **GPRF**, dirigé par le général **de Gaulle**, rétablit la légalité républicaine : les lois de Vichy sont annulées, les libertés restaurées. Il s'appuie sur le **programme du CNR**, adopté dans la clandestinité le 15 mars 1944. Ce texte, intitulé « Les Jours heureux », prévoit le retour de la démocratie, la liberté de la presse, une Sécurité sociale pour tous et la « nationalisation » des grandes richesses du pays." },
            { t: "definition", terme: "GPRF", md: "Gouvernement provisoire de la République française. Présidé par de Gaulle jusqu'en janvier 1946, il gouverne la France de la Libération jusqu'à l'adoption d'une nouvelle Constitution." },
            { t: "verifie", q: "Que prévoit le programme du CNR adopté en mars 1944 ?", choix: ["Le maintien du régime de Vichy après la guerre", "Le retour de la démocratie et de grandes réformes sociales", "L'abandon de toutes les colonies"], bonne: 1, explication: "Les résistants veulent une France plus juste : démocratie rétablie, Sécurité sociale, nationalisations, liberté de la presse." },
          ],
        },
        {
          titre: "Les femmes, enfin électrices et éligibles",
          blocs: [
            { t: "texte", md: "Depuis 1848, seuls les hommes votaient. Le rôle des femmes dans la Résistance et dans la société rend ce refus intenable. L'ordonnance signée à Alger le **21 avril 1944** leur accorde le **droit de vote et d'éligibilité**. Elles votent pour la première fois aux élections municipales d'**avril 1945** ; en octobre 1945, 33 femmes entrent à l'Assemblée." },
            { t: "citation", texte: "Les femmes sont électrices et éligibles dans les mêmes conditions que les hommes.", auteur: "Ordonnance du 21 avril 1944, article 17", source: "Comité français de libération nationale, Alger" },
            { t: "attention", md: "Ne confonds pas les deux dates : le droit de vote est **accordé en 1944**, mais les femmes **votent pour la première fois en 1945**." },
          ],
        },
        {
          titre: "Une démocratie sociale : Sécurité sociale et nationalisations",
          blocs: [
            { t: "definition", terme: "Nationalisation", md: "Transfert d'une entreprise privée à l'État, qui en devient propriétaire. Après 1945, l'État veut ainsi diriger la reconstruction et contrôler les secteurs clés de l'économie." },
            { t: "texte", md: "Le GPRF nationalise les **charbonnages**, l'**électricité et le gaz** (EDF et GDF, 1946), les grandes **banques** et les usines **Renault**, dont le patron est accusé d'avoir collaboré.\n\nLes ordonnances d'**octobre 1945** créent la **Sécurité sociale**, mise en place par le ministre du Travail Ambroise Croizat. Financée par les cotisations des salariés et des employeurs, elle protège contre la **maladie**, la **vieillesse** et les **accidents du travail**, et verse les **allocations familiales**. L'État ne se contente plus de garantir les libertés : il protège ses citoyens contre les risques de la vie. C'est la naissance de l'**État-providence**." },
            { t: "tableau", titre: "Les grandes réformes de la Libération", entetes: ["Date", "Réforme", "Ce qui change"], lignes: [
              ["21 avril 1944", "droit de vote des femmes", "le suffrage devient vraiment universel"],
              ["1944-1946", "nationalisations", "l'État contrôle l'énergie, les banques, Renault"],
              ["octobre 1945", "Sécurité sociale", "protection contre la maladie, la vieillesse, les accidents"],
              ["octobre 1946", "Constitution de la IVe République", "droits économiques et sociaux dans le préambule"],
            ] },
            { t: "exemple", titre: "Rédiger au DNB : une refondation, pas un simple retour", md: "« En 1944-1946, la République ne se contente pas de revenir. Les femmes votent, la Sécurité sociale protège tous les travailleurs, l'État nationalise les grandes entreprises et le préambule de 1946 ajoute des droits sociaux aux droits de 1789. **La démocratie devient aussi sociale.** »" },
          ],
        },
        {
          titre: "La IVe République, un régime fragile",
          blocs: [
            { t: "texte", md: "Par référendum, en octobre 1945, plus de 96 % des votants refusent le retour à la IIIe République. Après un premier projet rejeté, la Constitution de la **IVe République** est adoptée par référendum en **octobre 1946**. Opposé à un régime où les partis dominent, de Gaulle a quitté le pouvoir dès janvier 1946.\n\nSon **préambule** ajoute aux droits de 1789 des **droits économiques et sociaux** : droit au travail, droit de grève, liberté syndicale, protection de la santé, **égalité entre les femmes et les hommes**." },
            { t: "citation", texte: "La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme.", auteur: "Préambule de la Constitution de 1946", source: "27 octobre 1946" },
            { t: "schema", titre: "Les institutions de la IVe République", legende: "Un régime parlementaire : l'Assemblée nationale domine. Elle peut renverser le gouvernement, ce qui entraîne une forte instabilité.", svg: `<svg viewBox="0 0 400 256"><rect class="aplat" x="10" y="14" width="160" height="62" rx="6"/><rect class="trait" x="10" y="14" width="160" height="62" rx="6"/><text class="texte" x="90" y="40" text-anchor="middle">Gouvernement</text><text class="texte-petit" x="90" y="58" text-anchor="middle">président du Conseil</text><rect class="aplat-papier" x="230" y="14" width="160" height="62" rx="6"/><rect class="trait" x="230" y="14" width="160" height="62" rx="6"/><text class="texte" x="310" y="34" text-anchor="middle">Président</text><text class="texte-petit" x="310" y="50" text-anchor="middle">de la République</text><text class="texte-petit" x="310" y="66" text-anchor="middle">élu pour 7 ans, rôle limité</text><path class="trait-fin" d="M228 40 L174 40" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="58" text-anchor="middle">désigne</text><rect class="aplat-fort" x="10" y="118" width="160" height="50" rx="6"/><rect class="aplat-papier" x="14" y="122" width="152" height="42" rx="4"/><rect class="trait" x="10" y="118" width="160" height="50" rx="6"/><text class="texte" x="90" y="140" text-anchor="middle">Assemblée nationale</text><text class="texte-petit" x="90" y="157" text-anchor="middle">vote les lois, domine</text><rect class="aplat-papier" x="230" y="118" width="160" height="50" rx="6"/><rect class="trait" x="230" y="118" width="160" height="50" rx="6"/><text class="texte" x="310" y="140" text-anchor="middle">2e chambre</text><text class="texte-petit" x="310" y="157" text-anchor="middle">Conseil de la République</text><path class="trait" d="M90 116 L90 80" marker-end="url(#fl)"/><text class="texte-petit" x="98" y="94">investit,</text><text class="texte-petit" x="98" y="108">peut renverser</text><path class="trait-fin" d="M310 116 L310 80" marker-end="url(#fl)"/><text class="texte-petit" x="318" y="94">le Parlement</text><text class="texte-petit" x="318" y="108">élit</text><rect class="aplat" x="10" y="214" width="380" height="34" rx="6"/><rect class="trait" x="10" y="214" width="380" height="34" rx="6"/><text class="texte-petit" x="200" y="236" text-anchor="middle">Citoyennes et citoyens (suffrage universel)</text><path class="trait-fin" d="M90 212 L90 172" marker-end="url(#fl)"/><text class="texte-petit" x="98" y="196">élisent</text><path class="pointille" d="M310 212 L310 172" marker-end="url(#fl)"/><text class="texte-petit" x="318" y="196">indirect</text></svg>` },
            { t: "texte", md: "En **1947**, la guerre froide divise les partis : les ministres communistes sont renvoyés du gouvernement. Les majorités deviennent fragiles et les gouvernements tombent les uns après les autres : plus d'une vingtaine se succèdent en douze ans. Cette **instabilité ministérielle** est la grande faiblesse du régime." },
            { t: "frise", titre: "Refonder la République (1944-1947)", evenements: [
              { date: 1944, label: "Programme du CNR (mars), droit de vote des femmes (avril)" },
              { date: 1944, label: "Le GPRF s'installe à Paris libéré" },
              { date: 1945, label: "Premier vote des femmes, Sécurité sociale" },
              { date: 1946, label: "Départ de de Gaulle, Constitution de la IVe République" },
              { date: 1947, label: "Renvoi des ministres communistes" },
            ] },
            { t: "verifie", q: "Quelle est la principale faiblesse de la IVe République ?", choix: ["Un président de la République trop puissant", "L'instabilité ministérielle : les gouvernements sont souvent renversés", "L'absence de Parlement"], bonne: 1, explication: "L'Assemblée nationale domine et renverse souvent les gouvernements : plus d'une vingtaine se succèdent de 1947 à 1958." },
          ],
        },
      ],
      bilan: "De 1944 à 1946, la France rétablit la République et la refonde : vote des femmes, Sécurité sociale, nationalisations et droits sociaux du préambule de 1946 font naître une démocratie sociale, dans une IVe République instable.",
    },

    "3e-histoire-10-cinquieme-republique": {
      accroche: "13 mai 1958 : à Alger, des partisans de l'Algérie française envahissent le siège du gouvernement général et réclament le retour du général de Gaulle. La IVe République, impuissante, vacille. Quelques mois plus tard naît un nouveau régime, taillé pour un président fort : la Ve République, toujours en vigueur aujourd'hui.",
      objectifs: [
        "Expliquer la naissance de la Ve République et le rôle du président (1958-1962)",
        "Situer les grandes étapes politiques de 1958 à 2000",
        "Définir et illustrer l'alternance et la cohabitation",
        "Identifier les présidents de la Ve République et leurs principales réformes",
      ],
      sections: [
        {
          titre: "1958-1962 : de Gaulle fonde un nouveau régime",
          blocs: [
            { t: "texte", md: "Paralysée par la guerre d'Algérie, la IVe République fait appel à **de Gaulle**, investi chef du gouvernement le 1er juin 1958. Il fait rédiger une nouvelle Constitution, approuvée par près de 80 % des votants lors du référendum du **28 septembre 1958** : la **Ve République** est née. De Gaulle en devient le premier président.\n\nEn **1962**, après l'indépendance de l'Algérie, il fait approuver par référendum l'**élection du président au suffrage universel direct**. La première a lieu en **1965** : de Gaulle est réélu au second tour face à François Mitterrand. Désormais, le président tient sa légitimité directement du peuple." },
            { t: "citation", texte: "Le Président de la République veille au respect de la Constitution. Il assure, par son arbitrage, le fonctionnement régulier des pouvoirs publics ainsi que la continuité de l'État.", auteur: "Constitution du 4 octobre 1958, article 5" },
          ],
        },
        {
          titre: "Un président au cœur des institutions",
          blocs: [
            { t: "propriete", titre: "Les grands pouvoirs du président", md: "Le président **nomme le Premier ministre**, peut **dissoudre l'Assemblée nationale**, soumettre un projet de loi au **référendum**, et dispose de pouvoirs exceptionnels en cas de crise grave. Il est le **chef des armées**. Élu par tous les citoyens, il est la clé de voûte du régime." },
            { t: "schema", titre: "Les institutions de la Ve République", legende: "L'Assemblée nationale peut renverser le gouvernement par une motion de censure ; le président peut dissoudre l'Assemblée. Le mandat présidentiel est de 7 ans jusqu'en 2002, de 5 ans depuis.", svg: `<svg viewBox="0 0 400 264"><rect class="aplat-fort" x="100" y="8" width="200" height="66" rx="8"/><rect class="aplat-papier" x="104" y="12" width="192" height="58" rx="6"/><rect class="trait" x="100" y="8" width="200" height="66" rx="8"/><text class="texte" x="200" y="30" text-anchor="middle">Président de la République</text><text class="texte-petit" x="200" y="47" text-anchor="middle">élu au suffrage universel direct</text><text class="texte-petit" x="200" y="63" text-anchor="middle">mandat de 5 ans depuis 2002</text><rect class="aplat" x="24" y="112" width="112" height="54" rx="6"/><rect class="trait" x="24" y="112" width="112" height="54" rx="6"/><text class="texte" x="80" y="135" text-anchor="middle">Gouvernement</text><text class="texte-petit" x="80" y="153" text-anchor="middle">Premier ministre</text><rect class="aplat" x="160" y="112" width="110" height="54" rx="6"/><rect class="trait" x="160" y="112" width="110" height="54" rx="6"/><text class="texte" x="215" y="129" text-anchor="middle">Assemblée</text><text class="texte" x="215" y="144" text-anchor="middle">nationale</text><text class="texte-petit" x="215" y="159" text-anchor="middle">577 députés</text><rect class="aplat" x="290" y="112" width="102" height="54" rx="6"/><rect class="trait" x="290" y="112" width="102" height="54" rx="6"/><text class="texte" x="341" y="135" text-anchor="middle">Sénat</text><text class="texte-petit" x="341" y="153" text-anchor="middle">348 sénateurs</text><path class="trait-fin" d="M110 76 L82 108" marker-end="url(#fl)"/><text class="texte-petit" x="90" y="90" text-anchor="end">nomme</text><path class="trait-fin" d="M215 76 L215 108" marker-end="url(#fl)"/><text class="texte-petit" x="221" y="96">peut dissoudre</text><path class="trait-fin" d="M158 150 L140 150" marker-end="url(#fl)"/><text class="texte-petit" x="148" y="184" text-anchor="middle">censure</text><rect class="aplat-papier" x="8" y="222" width="384" height="34" rx="6"/><rect class="trait" x="8" y="222" width="384" height="34" rx="6"/><text class="texte" x="200" y="244" text-anchor="middle">Citoyennes et citoyens : élections, référendum</text><path class="trait-fin" d="M14 220 L14 40 L96 40" marker-end="url(#fl)"/><text class="texte-petit" x="20" y="32">élisent</text><path class="trait-fin" d="M215 220 L215 170" marker-end="url(#fl)"/><text class="texte-petit" x="221" y="200">élisent</text><path class="pointille" d="M341 220 L341 170" marker-end="url(#fl)"/><text class="texte-petit" x="334" y="200" text-anchor="end">indirect</text></svg>` },
            { t: "verifie", q: "Pourquoi dit-on que le président est puissant sous la Ve République ?", choix: ["Parce qu'il vote seul les lois", "Parce qu'il est élu par tous les citoyens et dispose de pouvoirs importants, comme la dissolution de l'Assemblée", "Parce qu'il ne peut jamais être remplacé"], bonne: 1, explication: "Les lois restent votées par le Parlement, mais le président, élu au suffrage universel direct depuis 1962, nomme le Premier ministre, peut dissoudre l'Assemblée et recourir au référendum." },
          ],
        },
        {
          titre: "Mai 1968 et la fin de la République gaullienne",
          blocs: [
            { t: "texte", md: "En **mai 1968**, une révolte étudiante éclate à Paris : les jeunes contestent une société jugée autoritaire. Elle se transforme en **grève générale** : environ dix millions de salariés cessent le travail. Les **accords de Grenelle** augmentent fortement les salaires. De Gaulle dissout l'Assemblée et remporte les élections de juin 1968. Mais en avril **1969**, il perd un référendum sur la réforme du Sénat et des régions, et **démissionne**.\n\n**Georges Pompidou** (1969-1974) poursuit la modernisation industrielle du pays. **Valéry Giscard d'Estaing** (1974-1981) abaisse la **majorité à 18 ans** (1974) et fait voter la **loi Veil** (1975)." },
          ],
        },
        {
          titre: "1981, la première alternance",
          blocs: [
            { t: "definition", terme: "Alternance", md: "Changement de majorité au pouvoir à la suite d'élections : une opposition remplace la majorité sortante, par exemple la gauche à la place de la droite." },
            { t: "texte", md: "Le **10 mai 1981**, **François Mitterrand**, candidat socialiste, est élu président. Pour la première fois sous la Ve République, la gauche succède à la droite, au pouvoir depuis 1958 : c'est la première **alternance**. Elle prouve que les institutions fonctionnent aussi quand l'opposition gagne.\n\nLe garde des Sceaux **Robert Badinter** fait voter l'**abolition de la peine de mort** (loi du 9 octobre 1981). Suivent la **décentralisation** (1982), la cinquième semaine de congés payés et la retraite à 60 ans." },
            { t: "citation", texte: "La peine de mort est abolie.", auteur: "Loi du 9 octobre 1981, article 1" },
          ],
        },
        {
          titre: "Cohabitations et quinquennat",
          blocs: [
            { t: "definition", terme: "Cohabitation", md: "Situation où le président et la majorité de l'Assemblée nationale sont de **camps opposés** : le président doit nommer un Premier ministre issu de cette majorité. Le pouvoir est alors partagé." },
            { t: "tableau", titre: "Les trois cohabitations", entetes: ["Période", "Président", "Premier ministre"], lignes: [
              ["1986-1988", "François Mitterrand (gauche)", "Jacques Chirac (droite)"],
              ["1993-1995", "François Mitterrand (gauche)", "Édouard Balladur (droite)"],
              ["1997-2002", "Jacques Chirac (droite)", "Lionel Jospin (gauche)"],
            ] },
            { t: "exemple", titre: "Distinguer alternance et cohabitation", md: "« En 1981, la gauche remplace la droite au pouvoir après 23 ans : c'est une **alternance**. En 1986, la droite gagne les élections législatives alors que Mitterrand reste président ; il nomme Jacques Chirac Premier ministre : c'est une **cohabitation**. »" },
            { t: "verifie", q: "Qu'est-ce qu'une « cohabitation » ?", choix: ["Le président et le Premier ministre appartiennent à des camps politiques opposés", "Deux présidents gouvernent ensemble", "La gauche remplace la droite au pouvoir"], bonne: 0, explication: "La troisième réponse décrit une alternance. La cohabitation, elle, oblige un président à gouverner avec un Premier ministre de l'autre camp, comme Mitterrand avec Chirac en 1986." },
            { t: "texte", md: "Pour éviter de nouvelles cohabitations, un référendum réduit en **2000** le mandat du président de 7 à **5 ans** : c'est le **quinquennat**, appliqué dès l'élection de 2002. Depuis, les élections législatives suivent de peu l'élection présidentielle." },
            { t: "tableau", titre: "Les présidents de la Ve République", entetes: ["Président", "Mandat", "Un repère"], lignes: [
              ["Charles de Gaulle", "1959-1969", "élection au suffrage universel direct (1962)"],
              ["Georges Pompidou", "1969-1974", "modernisation industrielle"],
              ["Valéry Giscard d'Estaing", "1974-1981", "majorité à 18 ans, loi Veil"],
              ["François Mitterrand", "1981-1995", "abolition de la peine de mort"],
              ["Jacques Chirac", "1995-2007", "quinquennat (2000)"],
              ["Nicolas Sarkozy", "2007-2012", "retraite portée à 62 ans"],
              ["François Hollande", "2012-2017", "mariage pour les couples de même sexe (2013)"],
              ["Emmanuel Macron", "depuis 2017", "réélu en 2022"],
            ] },
            { t: "frise", titre: "La Ve République en repères", evenements: [
              { date: 1958, label: "Constitution de la Ve République" },
              { date: 1962, label: "Élection du président au suffrage universel direct" },
              { date: 1968, label: "Mai 68" },
              { date: 1969, label: "Démission de de Gaulle" },
              { date: 1981, label: "Première alternance : Mitterrand élu" },
              { date: 1986, label: "Première cohabitation" },
              { date: 2000, label: "Référendum sur le quinquennat" },
            ] },
          ],
        },
      ],
      bilan: "Fondée en 1958 autour d'un président fort, élu au suffrage universel direct depuis 1962, la Ve République a su accueillir l'alternance en 1981 et la cohabitation à partir de 1986.",
    },

    "3e-histoire-11-societe-1950-1980": {
      accroche: "Au début des années 1950, dans beaucoup de familles, on lave le linge à la main, on n'a ni réfrigérateur ni salle de bains, et l'on part rarement en vacances. Vingt ans plus tard, la voiture, la télévision et le supermarché font partie du quotidien. En une génération, la vie des Françaises et des Français a été bouleversée.",
      objectifs: [
        "Décrire les transformations économiques et sociales des Trente Glorieuses",
        "Expliquer l'évolution de la place des femmes et les lois qui l'accompagnent",
        "Identifier les réponses politiques aux nouveaux enjeux : jeunesse, immigration, décentralisation",
        "Situer dans le temps les grandes lois de société",
      ],
      sections: [
        {
          titre: "Les Trente Glorieuses : croissance et consommation",
          blocs: [
            { t: "texte", md: "De 1945 à 1975, la France connaît une **forte croissance** économique, le **plein emploi** et une hausse rapide du niveau de vie. L'économiste Jean Fourastié a nommé cette période les « **Trente Glorieuses** ». Le **baby-boom** rajeunit la population : plus de 800 000 naissances par an pendant près de trente ans.\n\nLa société se transforme. Les paysans quittent les campagnes (**exode rural**) ; on construit des **grands ensembles** en banlieue pour loger les familles. Les emplois de bureau et de services se multiplient. Plus d'élèves poursuivent leurs études : le **collège unique** est créé en 1975." },
            { t: "definition", terme: "Société de consommation", md: "Société où une grande partie de la population peut acheter des biens nombreux et variés : automobile, réfrigérateur, machine à laver, télévision. La publicité et les grandes surfaces, comme le premier hypermarché ouvert en 1963, l'encouragent." },
            { t: "verifie", q: "Quelle période désigne-t-on par l'expression « Trente Glorieuses » ?", choix: ["1918-1948", "1945-1975", "1958-1988"], bonne: 1, explication: "Ce sont les trente années de forte croissance qui suivent la Seconde Guerre mondiale, jusqu'à la crise ouverte par le choc pétrolier de 1973." },
          ],
        },
        {
          titre: "L'appel aux travailleurs immigrés, puis la crise",
          blocs: [
            { t: "texte", md: "Pour reconstruire le pays et faire tourner ses usines et ses chantiers, la France **manque de main-d'œuvre**. Elle fait appel à des **travailleurs immigrés** venus d'Italie, d'Espagne, du Portugal, puis d'Algérie et du Maroc. Beaucoup vivent dans des conditions difficiles, dans des foyers ou des **bidonvilles**, comme à Nanterre.\n\nEn **1973**, le **choc pétrolier** fait flamber le prix du pétrole : la croissance ralentit, le **chômage** s'installe. C'est la fin des Trente Glorieuses. En 1974, l'immigration de travail est suspendue ; en 1976, le **regroupement familial** permet aux familles de rejoindre les travailleurs installés en France." },
            { t: "verifie", q: "Pourquoi la France fait-elle appel à des travailleurs immigrés pendant les Trente Glorieuses ?", choix: ["Parce qu'elle manque de main-d'œuvre pour sa reconstruction et son industrie", "Parce que le chômage est très élevé", "Parce que les Français refusent de travailler"], bonne: 0, explication: "Avec une croissance très forte et le plein emploi, les entreprises manquent de bras, notamment dans le bâtiment, l'automobile et les mines." },
          ],
        },
        {
          titre: "Les femmes conquièrent de nouveaux droits",
          blocs: [
            { t: "texte", md: "Dans les années 1950, la femme mariée dépend de son mari. Les mouvements féministes, comme le **MLF** (Mouvement de libération des femmes, 1970), réclament l'égalité et la liberté de disposer de son corps. La loi suit ces combats : en **1965**, une femme mariée peut exercer un métier et ouvrir un compte en banque **sans l'autorisation de son mari**. La **loi Neuwirth** (**1967**) autorise la **contraception**. Défendue par la ministre de la Santé **Simone Veil**, la **loi Veil** (**1975**) dépénalise l'**interruption volontaire de grossesse** (IVG)." },
            { t: "tableau", titre: "Les grandes lois sur la place des femmes", entetes: ["Année", "Loi", "Ce qu'elle change"], lignes: [
              ["1965", "réforme des régimes matrimoniaux", "travailler et ouvrir un compte sans l'accord du mari"],
              ["1967", "loi Neuwirth", "la contraception est autorisée"],
              ["1972", "loi sur l'égalité de rémunération", "à travail égal, salaire égal"],
              ["1975", "loi Veil", "l'IVG est dépénalisée"],
              ["1983", "loi Roudy", "égalité professionnelle entre femmes et hommes"],
            ] },
            { t: "citation", texte: "Tout employeur est tenu d'assurer, pour un même travail ou pour un travail de valeur égale, l'égalité de rémunération entre les hommes et les femmes.", auteur: "Loi du 22 décembre 1972, article 1" },
            { t: "exemple", titre: "Rédiger au DNB : l'évolution de la place des femmes", md: "« Dans les années 1950, la femme mariée dépend de son mari. En 1965, elle gagne son autonomie financière. La loi Neuwirth (1967) puis la loi Veil (1975) lui donnent la maîtrise de sa maternité. **Ces lois répondent aux luttes des mouvements féministes comme le MLF.** »" },
            { t: "verifie", q: "Qu'autorise la loi Neuwirth de 1967 ?", choix: ["Le droit de vote des femmes", "La contraception", "Le divorce"], bonne: 1, explication: "La loi Neuwirth autorise la contraception, notamment la pilule. Le droit de vote des femmes date de 1944, et la loi Veil sur l'IVG de 1975." },
          ],
        },
        {
          titre: "Jeunesse, temps libre et nouvelles attentes",
          blocs: [
            { t: "texte", md: "Nés du baby-boom, les jeunes deviennent nombreux et s'affirment. Ils ont leur musique (le rock, les chanteurs « yéyé »), leurs émissions de radio, leur mode. En **mai 1968**, ils contestent une société jugée trop autoritaire. Le pouvoir répond à ces attentes : en **1974**, sous la présidence de **Valéry Giscard d'Estaing**, la **majorité** est abaissée de 21 à **18 ans**. Les jeunes de 18 ans peuvent désormais voter.\n\nLe temps libre progresse aussi : les congés payés s'allongent par étapes, et les départs en vacances se multiplient." },
            { t: "graphique", type: "barres", titre: "Le nombre de semaines de congés payés", unite: "semaines", donnees: [
              { label: "1936", valeur: 2 },
              { label: "1956", valeur: 3 },
              { label: "1969", valeur: 4 },
              { label: "1982", valeur: 5 },
            ] },
          ],
        },
        {
          titre: "Après 1981 : nouvelles réformes et décentralisation",
          blocs: [
            { t: "texte", md: "Arrivée au pouvoir en 1981, la gauche répond à de fortes attentes sociales. En **1982**, les salariés obtiennent la **cinquième semaine de congés payés** et la semaine de **39 heures** ; la retraite à 60 ans est décidée la même année.\n\nLes lois de **décentralisation** de **1982**, préparées par le ministre **Gaston Defferre**, transfèrent des pouvoirs de l'État vers les **collectivités territoriales** : régions, départements et communes. Le préfet ne contrôle plus leurs décisions à l'avance ; ce sont désormais des **élus locaux** qui décident." },
            { t: "schema", titre: "La décentralisation (1982)", legende: "Avant 1982, l'État décide de presque tout depuis Paris. Depuis, les collectivités élues gèrent une part des services publics proches des habitants.", svg: `<svg viewBox="0 0 400 226"><rect class="aplat-fort" x="90" y="10" width="220" height="48" rx="8"/><rect class="aplat-papier" x="94" y="14" width="212" height="40" rx="6"/><rect class="trait" x="90" y="10" width="220" height="48" rx="8"/><text class="texte" x="200" y="31" text-anchor="middle">L'État</text><text class="texte-petit" x="200" y="47" text-anchor="middle">avant 1982 : tutelle du préfet</text><path class="trait-fin" d="M170 60 L80 98" marker-end="url(#fl)"/><path class="trait-fin" d="M200 60 L200 98" marker-end="url(#fl)"/><path class="trait-fin" d="M230 60 L320 98" marker-end="url(#fl)"/><rect class="aplat" x="10" y="102" width="120" height="70" rx="6"/><rect class="trait" x="10" y="102" width="120" height="70" rx="6"/><text class="texte" x="70" y="124" text-anchor="middle">Région</text><text class="texte-petit" x="70" y="144" text-anchor="middle">lycées, transports,</text><text class="texte-petit" x="70" y="160" text-anchor="middle">économie</text><rect class="aplat" x="140" y="102" width="120" height="70" rx="6"/><rect class="trait" x="140" y="102" width="120" height="70" rx="6"/><text class="texte" x="200" y="124" text-anchor="middle">Département</text><text class="texte-petit" x="200" y="144" text-anchor="middle">collèges, routes,</text><text class="texte-petit" x="200" y="160" text-anchor="middle">aide sociale</text><rect class="aplat" x="270" y="102" width="120" height="70" rx="6"/><rect class="trait" x="270" y="102" width="120" height="70" rx="6"/><text class="texte" x="330" y="124" text-anchor="middle">Commune</text><text class="texte-petit" x="330" y="144" text-anchor="middle">écoles, urbanisme,</text><text class="texte-petit" x="330" y="160" text-anchor="middle">état civil</text><rect class="aplat-papier" x="10" y="184" width="380" height="34" rx="6"/><rect class="trait-fin" x="10" y="184" width="380" height="34" rx="6"/><text class="texte-petit" x="200" y="205" text-anchor="middle">lois Defferre (1982) : des pouvoirs passent de l'État aux élus locaux</text></svg>` },
            { t: "frise", titre: "Les grandes lois de société", evenements: [
              { date: 1965, label: "Autonomie financière des femmes mariées" },
              { date: 1967, label: "Loi Neuwirth : contraception" },
              { date: 1972, label: "Égalité de rémunération femmes-hommes" },
              { date: 1974, label: "Majorité à 18 ans" },
              { date: 1975, label: "Loi Veil : IVG ; collège unique" },
              { date: 1976, label: "Regroupement familial" },
              { date: 1982, label: "Cinquième semaine de congés, décentralisation" },
              { date: 1983, label: "Loi Roudy : égalité professionnelle" },
            ] },
          ],
        },
      ],
      bilan: "Des années 1950 aux années 1980, la croissance puis la crise transforment la société française ; les femmes, les jeunes et les territoires conquièrent de nouveaux droits, inscrits dans de grandes lois.",
    },
  },
};
