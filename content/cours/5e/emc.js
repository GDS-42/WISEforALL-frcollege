// Cours ÉCLORE — 5e Enseignement moral et civique. Schéma : docs/COURS.md
export default {
  id: "5e-emc",
  chapitres: {
    "5e-emc-01-egalite-discriminations": {
      accroche: "Samir et Thomas envoient le même CV pour un job d'été : mêmes notes, même expérience, seul le nom change. Thomas est rappelé, Samir jamais. Des chercheurs ont mené ce genre de test des milliers de fois. Est-ce juste ? Et surtout, est-ce permis ?",
      objectifs: [
        "Expliquer ce qu'est l'égalité en droits, et pourquoi elle ne veut pas dire « être identiques »",
        "Reconnaître une discrimination interdite par la loi dans une situation concrète",
        "Distinguer préjugé, stéréotype et discrimination",
        "Savoir quelles lois et quelles institutions protègent les victimes",
      ],
      sections: [
        {
          titre: "Égaux en droits, pas identiques",
          blocs: [
            { t: "texte", md: "Nous sommes tous différents : par notre taille, nos goûts, notre origine, notre religion ou notre santé. La République ne cherche pas à effacer ces différences. Elle affirme autre chose : ==la loi est la même pour tous==. Chacun a les mêmes droits et les mêmes devoirs, qu'il soit riche ou pauvre, fille ou garçon, né ici ou ailleurs.\n\nC'est le deuxième mot de la devise de la République : « Liberté, **Égalité**, Fraternité »." },
            { t: "citation", texte: "Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune.", auteur: "Déclaration des droits de l'homme et du citoyen", source: "article 1, 26 août 1789" },
            { t: "definition", terme: "Égalité en droits", md: "Principe selon lequel la loi s'applique de la même façon à toutes les personnes. Elle ne garantit pas que tout le monde ait le même salaire ou les mêmes goûts : elle garantit que personne ne sera traité moins bien **à cause de ce qu'il est**." },
            { t: "attention", md: "Traiter tout le monde de façon strictement identique n'est pas toujours juste. Un élève en situation de handicap qui reçoit un **temps supplémentaire** pendant un contrôle n'est pas favorisé : on compense un obstacle pour qu'il ait les mêmes chances que les autres. Ce n'est pas une discrimination, c'est l'égalité en action." },
          ],
        },
        {
          titre: "Du préjugé à la discrimination",
          blocs: [
            { t: "texte", md: "Tout commence souvent dans la tête. Un **préjugé** est une idée toute faite, un jugement porté avant de connaître la personne : « les filles sont nulles en foot ». Un **stéréotype** est une image simplifiée collée à tout un groupe. Ces idées sont fausses, mais elles ne sont pas punies tant qu'elles restent des idées.\n\nQuand le préjugé se transforme en **acte** (refuser, exclure, insulter), il devient une discrimination. Et c'est cet acte que la loi sanctionne." },
            { t: "schema", titre: "Trois marches à ne pas monter", legende: "Le préjugé et le stéréotype sont des idées ; la discrimination est un acte puni par la loi.", svg: `<svg viewBox="0 0 400 235"><rect class="aplat-papier" x="20" y="150" width="120" height="50"/><rect class="trait" x="20" y="150" width="120" height="50"/><rect class="aplat" x="140" y="105" width="120" height="95"/><rect class="trait" x="140" y="105" width="120" height="95"/><rect class="aplat" x="260" y="60" width="120" height="140"/><rect class="trait" x="260" y="60" width="120" height="140"/><text class="texte" x="80" y="172" text-anchor="middle">Préjugé</text><text class="texte-petit" x="80" y="190" text-anchor="middle">une idée</text><text class="texte" x="200" y="127" text-anchor="middle">Stéréotype</text><text class="texte-petit" x="200" y="145" text-anchor="middle">une image</text><text class="texte" x="320" y="82" text-anchor="middle">Discrimination</text><text class="texte-petit" x="320" y="100" text-anchor="middle">un acte</text><text class="texte-pigment" x="320" y="45" text-anchor="middle">puni par la loi</text><line class="pointille" x1="20" y1="212" x2="258" y2="212"/><line class="trait-fin" x1="262" y1="212" x2="380" y2="212"/><text class="texte-petit" x="140" y="228" text-anchor="middle">dans la tête</text><text class="texte-petit" x="320" y="228" text-anchor="middle">dans les actes</text></svg>` },
            { t: "definition", terme: "Discrimination", md: "Traitement défavorable d'une personne fondé sur un **critère interdit par la loi**. La loi en cite plus de vingt-cinq, parmi lesquels : l'origine, le sexe, le handicap, la religion, l'âge, l'orientation sexuelle, l'apparence physique, l'état de santé, la grossesse, le lieu de résidence." },
            { t: "tableau", titre: "Discrimination ou pas ?", entetes: ["Situation", "Critère utilisé", "Verdict"], lignes: [["Refuser un stage à une fille « parce que c'est un métier d'homme »", "le sexe", "**Discrimination** (sexisme)"], ["Insulter un camarade à cause de sa couleur de peau", "l'origine", "**Discrimination** (racisme)"], ["Refuser l'entrée d'un restaurant à une personne en fauteuil roulant", "le handicap", "**Discrimination**"], ["Écarter un candidat parce qu'il a plus de 50 ans", "l'âge", "**Discrimination**"], ["Refuser un emploi à quelqu'un qui n'a pas le diplôme exigé", "la compétence", "Pas de discrimination : le critère a un rapport avec le travail"]] },
            { t: "astuce", md: "Pour reconnaître une discrimination, pose-toi une question : « Est-ce qu'on juge la personne sur ==ce qu'elle fait== ou sur ==ce qu'elle est== ? » Si le critère n'a aucun rapport avec la situation, méfie-toi." },
            { t: "verifie", q: "Un préjugé et une discrimination, c'est…", choix: ["La même chose", "Une idée toute faite, puis un acte qui traite quelqu'un moins bien", "Deux actes punis de la même façon"], bonne: 1, explication: "Le préjugé reste une idée. La discrimination est un acte : refuser, exclure, insulter. C'est l'acte que la loi punit." },
          ],
        },
        {
          titre: "Racisme et sexisme",
          blocs: [
            { t: "definition", terme: "Racisme", md: "Idée fausse selon laquelle les êtres humains seraient classés en groupes supérieurs et inférieurs selon leur origine ou leur couleur de peau. La science l'a démontré : il n'existe qu'une seule espèce humaine." },
            { t: "definition", terme: "Sexisme", md: "Ensemble de préjugés et de comportements qui enferment une personne dans un rôle à cause de son sexe. Il touche surtout les filles et les femmes, mais il vise aussi les garçons : « un garçon, ça ne pleure pas », « la danse, c'est pour les filles »." },
            { t: "attention", md: "« C'était juste une blague, entre amis ! » Une blague raciste ou sexiste n'est jamais anodine : elle blesse, elle installe l'idée que certains valent moins que d'autres, et elle peut constituer une **injure** punie par la loi. Rire avec quelqu'un n'est pas rire de lui." },
          ],
        },
        {
          titre: "La loi protège, des institutions agissent",
          blocs: [
            { t: "frise", titre: "Les grandes étapes de la lutte pour l'égalité", evenements: [{ date: 1789, label: "Déclaration des droits de l'homme et du citoyen", detail: "« libres et égaux en droits »" }, { date: 1946, label: "Égalité entre les femmes et les hommes", detail: "inscrite dans le préambule de la Constitution" }, { date: 1948, label: "Déclaration universelle des droits de l'homme", detail: "adoptée par l'ONU à Paris" }, { date: 1972, label: "Loi Pleven contre le racisme", detail: "1er juillet : elle punit l'injure, la diffamation et la provocation à la haine raciales" }, { date: 2005, label: "Loi pour l'égalité des droits des personnes handicapées", detail: "accessibilité, scolarisation" }, { date: 2011, label: "Création du Défenseur des droits" }] },
            { t: "definition", terme: "Défenseur des droits", md: "Autorité **indépendante** que toute personne, même mineure, peut saisir **gratuitement** si elle pense être victime d'une discrimination. Il écoute, enquête, aide à trouver une solution et peut transmettre le dossier à la justice." },
            { t: "etapes", titre: "Que faire si on est victime ?", items: [{ titre: "Reconnaître", md: "Nommer la situation : « ce n'est pas normal, c'est une discrimination »." }, { titre: "En parler", md: "À un adulte de confiance, au CPE, à une association." }, { titre: "Garder des preuves", md: "Messages, captures d'écran, témoignages." }, { titre: "Saisir", md: "Le Défenseur des droits, ou porter plainte." }, { titre: "Obtenir justice", md: "La justice peut sanctionner l'auteur et réparer le préjudice." }] },
            { t: "exemple", titre: "Une candidate enceinte", md: "Un employeur refuse d'embaucher une candidate compétente parce qu'elle est enceinte. Le critère (sexe, grossesse) n'a rien à voir avec ses compétences : c'est une **discrimination**, interdite et punie. Elle peut saisir le Défenseur des droits ou porter plainte." },
            { t: "verifie", q: "En quelle année la loi Pleven contre le racisme a-t-elle été votée ?", choix: ["1789", "1945", "1972", "2011"], bonne: 2, explication: "La loi du 1er juillet 1972, dite loi Pleven, est la première grande loi française contre le racisme. 2011 est l'année de création du Défenseur des droits." },
          ],
        },
      ],
      bilan: "Nous sommes tous différents mais égaux en droits : juger quelqu'un sur ce qu'il est, et non sur ce qu'il fait, est une discrimination que la loi punit.",
    },

    "5e-emc-02-solidarite-securite-sociale": {
      accroche: "Léa tombe au skatepark et se casse le bras. Urgences, radio, plâtre, rendez-vous de contrôle : la facture dépasse plusieurs centaines d'euros. Pourtant, ses parents ne paient presque rien. Alors, qui a payé ? Un peu tout le monde… et c'est voulu.",
      objectifs: [
        "Expliquer ce que signifie la fraternité et comment elle se traduit en solidarité",
        "Décrire le fonctionnement de la Sécurité sociale, créée en 1945",
        "Comprendre à quoi servent les impôts et la redistribution",
        "Identifier des formes d'engagement : associations, bénévolat, service civique",
      ],
      sections: [
        {
          titre: "La fraternité, une valeur qui se vit",
          blocs: [
            { t: "texte", md: "La **fraternité** est le troisième mot de la devise républicaine. Elle ne veut pas dire que tout le monde doit avoir des frères et sœurs ! Elle signifie que les citoyens forment une même communauté, liée comme une grande famille : ==on ne laisse personne de côté==.\n\nConcrètement, la fraternité prend la forme de la **solidarité** : l'entraide entre les personnes, organisée par l'État ou choisie librement." },
            { t: "citation", texte: "Tous les êtres humains naissent libres et égaux en dignité et en droits. Ils sont doués de raison et de conscience et doivent agir les uns envers les autres dans un esprit de fraternité.", auteur: "Déclaration universelle des droits de l'homme", source: "article 1, 1948" },
            { t: "definition", terme: "Solidarité", md: "Lien d'entraide entre les membres d'une société : **chacun contribue selon ses moyens et reçoit selon ses besoins**. Celui qui va bien aide celui qui a des difficultés, en sachant qu'il pourra être aidé à son tour." },
          ],
        },
        {
          titre: "La Sécurité sociale, née en 1945",
          blocs: [
            { t: "texte", md: "En **1945**, à la Libération, la France sort ruinée de la guerre. Le gouvernement, inspiré par le programme du Conseil national de la Résistance, crée la **Sécurité sociale**. Le ministre Ambroise Croizat la met en place. L'idée est simple et forte : plus personne ne doit renoncer à se soigner ou finir sa vie dans la misère parce qu'il n'a pas d'argent." },
            { t: "tableau", titre: "Contre quels risques protège-t-elle ?", entetes: ["Branche", "Le risque", "Ce qu'elle verse"], lignes: [["Maladie", "tomber malade, se blesser", "remboursement des soins et des médicaments"], ["Accidents du travail", "se blesser au travail", "soins et indemnités"], ["Famille", "élever des enfants", "allocations familiales"], ["Vieillesse", "ne plus pouvoir travailler avec l'âge", "pensions de retraite"]] },
            { t: "schema", titre: "Le circuit de la solidarité", legende: "L'argent va de ceux qui travaillent et paient des impôts vers ceux qui en ont besoin à un moment de leur vie.", svg: `<svg viewBox="0 0 400 262"><rect class="aplat-papier" x="20" y="14" width="150" height="48"/><rect class="trait" x="20" y="14" width="150" height="48"/><rect class="aplat-papier" x="230" y="14" width="150" height="48"/><rect class="trait" x="230" y="14" width="150" height="48"/><text class="texte" x="95" y="34" text-anchor="middle">Travailleurs</text><text class="texte-petit" x="95" y="51" text-anchor="middle">et employeurs</text><text class="texte" x="305" y="34" text-anchor="middle">Contribuables</text><text class="texte-petit" x="305" y="51" text-anchor="middle">impôts, CSG</text><rect class="aplat" x="115" y="108" width="170" height="44"/><rect class="trait" x="115" y="108" width="170" height="44"/><text class="texte" x="200" y="135" text-anchor="middle">Sécurité sociale</text><path class="trait-fin" d="M95 62 L160 106" marker-end="url(#fl)"/><path class="trait-fin" d="M305 62 L240 106" marker-end="url(#fl)"/><text class="texte-pigment" x="118" y="90" text-anchor="end">cotisations</text><text class="texte-pigment" x="282" y="90">impôts</text><path class="trait-fin" d="M170 152 L80 198" marker-end="url(#fl)"/><path class="trait-fin" d="M200 152 L200 198" marker-end="url(#fl)"/><path class="trait-fin" d="M230 152 L320 198" marker-end="url(#fl)"/><rect class="aplat-papier" x="15" y="200" width="120" height="48"/><rect class="trait" x="15" y="200" width="120" height="48"/><rect class="aplat-papier" x="140" y="200" width="120" height="48"/><rect class="trait" x="140" y="200" width="120" height="48"/><rect class="aplat-papier" x="265" y="200" width="120" height="48"/><rect class="trait" x="265" y="200" width="120" height="48"/><text class="texte" x="75" y="220" text-anchor="middle">Malades</text><text class="texte-petit" x="75" y="237" text-anchor="middle">soins remboursés</text><text class="texte" x="200" y="220" text-anchor="middle">Retraités</text><text class="texte-petit" x="200" y="237" text-anchor="middle">pensions</text><text class="texte" x="325" y="220" text-anchor="middle">Familles</text><text class="texte-petit" x="325" y="237" text-anchor="middle">allocations</text></svg>` },
            { t: "propriete", titre: "Le principe de la Sécurité sociale", md: "Elle est financée surtout par des **cotisations** prélevées sur les salaires, et aussi par des impôts. Un salarié bien payé cotise plus qu'un salarié modeste, mais **tous deux sont soignés de la même façon**. Ce n'est ni une épargne personnelle ni une charité : c'est une mise en commun obligatoire des risques." },
            { t: "exemple", titre: "Qui a payé le plâtre de Léa ?", etapes: ["Des milliers de personnes travaillent et touchent un salaire.", "Des cotisations sont prélevées sur ces salaires.", "La Sécurité sociale collecte cet argent.", "Elle rembourse la plus grande partie des soins de Léa, y compris grâce à ceux qui ne sont jamais malades : c'est la solidarité."] },
            { t: "attention", md: "Faux : « Seuls ceux qui ont cotisé toute leur vie peuvent être soignés. » Toute personne qui vit en France de façon stable a droit à la prise en charge de ses soins, même un enfant, même une personne sans emploi. Et un hôpital soigne toujours une urgence." },
            { t: "verifie", q: "Pourquoi dit-on que la Sécurité sociale repose sur la solidarité ?", choix: ["Chacun récupère exactement ce qu'il a versé", "Chacun cotise selon ses moyens et reçoit selon ses besoins", "Elle vit uniquement de dons"], bonne: 1, explication: "On ne reçoit pas en fonction de ce qu'on a versé, mais en fonction de ses besoins. Les bien-portants paient pour les malades, les actifs pour les retraités." },
          ],
        },
        {
          titre: "L'impôt et la redistribution",
          blocs: [
            { t: "texte", md: "Les **impôts** sont l'argent que les citoyens et les entreprises versent à l'État et aux collectivités. Ils financent les **services publics** utilisés par tous : écoles, collèges, hôpitaux, routes, police, pompiers, bibliothèques. Ton collège est gratuit parce que tout le monde contribue." },
            { t: "definition", terme: "Redistribution", md: "Action de l'État qui prélève de l'argent (impôts, cotisations) et le reverse sous forme d'aides, d'allocations, de bourses ou de services gratuits, pour réduire les inégalités entre les plus riches et les plus modestes." },
            { t: "savais-tu", md: "Payer ses impôts est inscrit dans la Déclaration de 1789 (article 13) : la contribution commune doit être « également répartie entre tous les citoyens, en raison de leurs facultés ». C'est à la fois un **devoir** du citoyen et un **acte de solidarité**." },
          ],
        },
        {
          titre: "S'engager : associations et bénévolat",
          blocs: [
            { t: "texte", md: "La solidarité ne vient pas seulement de l'État. Des millions de personnes choisissent d'aider les autres, librement. Elles se regroupent en **associations** et donnent de leur temps comme **bénévoles**, c'est-à-dire sans être payées." },
            { t: "definition", terme: "Association", md: "Groupe de personnes réunies librement, **sans but lucratif** (pas pour gagner de l'argent), pour agir ensemble autour d'un projet. La liberté d'association est garantie par la **loi de 1901**." },
            { t: "frise", titre: "Quelques grandes dates de la solidarité", evenements: [{ date: 1859, label: "Henry Dunant à Solférino", detail: "bouleversé par les blessés abandonnés, il a l'idée de la Croix-Rouge" }, { date: 1901, label: "Loi sur la liberté d'association" }, { date: 1945, label: "Création de la Sécurité sociale", detail: "et du Secours populaire français" }, { date: 1985, label: "Coluche fonde les Restos du cœur", detail: "distribution de repas aux personnes démunies" }, { date: 2010, label: "Création du service civique" }] },
            { t: "definition", terme: "Service civique", md: "Mission d'**intérêt général** de 6 à 12 mois, ouverte aux jeunes de **16 à 25 ans**, indemnisée : aider dans une école, une association, un hôpital, un projet pour l'environnement…" },
            { t: "verifie", q: "Un bénévole est une personne qui…", choix: ["Donne de son temps pour une cause sans être payée", "Travaille pour l'État", "Est obligée d'aider les autres"], bonne: 0, explication: "Le bénévolat est libre et gratuit. Le service civique, lui, est indemnisé : ce n'est pas tout à fait du bénévolat." },
          ],
        },
      ],
      bilan: "La fraternité se vit en actes : par la Sécurité sociale et l'impôt, chacun donne selon ses moyens et reçoit selon ses besoins ; par l'engagement, chacun peut tendre la main.",
    },

    "5e-emc-03-regles-et-droit": {
      accroche: "En une journée, Hugo a menti à son meilleur ami, couru dans les couloirs du collège et vu un grand partir avec un vélo qui n'était pas à lui. Trois fois, quelque chose « ne se fait pas ». Mais ce ne sont pas du tout les mêmes règles qui sont en jeu.",
      objectifs: [
        "Distinguer la morale, la règle et la loi",
        "Savoir qui fait la loi en France et comment",
        "Comprendre la hiérarchie des normes",
        "Connaître les sanctions et la responsabilité des mineurs",
      ],
      sections: [
        {
          titre: "Morale, règle, loi : trois niveaux",
          blocs: [
            { t: "tableau", titre: "Qui fixe quoi, et pour qui ?", entetes: ["Type", "Qui la fixe ?", "Pour qui ?", "Exemple"], lignes: [["**Morale**", "la conscience de chacun", "soi-même", "« Mentir à un ami, c'est mal »"], ["**Règle**", "un groupe : famille, club, collège", "les membres du groupe", "« Pas de téléphone à table », « on ne court pas dans les couloirs »"], ["**Loi**", "le Parlement", "tout le monde, sur tout le territoire", "« Il est interdit de voler »"]] },
            { t: "exemple", titre: "La journée d'Hugo", md: "Mentir à son ami est contraire à la **morale**, mais la loi ne l'interdit pas. Courir dans les couloirs enfreint le **règlement intérieur** du collège. Voler un vélo est interdit par la **loi** : c'est un délit." },
            { t: "attention", md: "La morale et la loi ne disent pas toujours la même chose. Certaines actions sont immorales sans être illégales (trahir un secret banal). La loi ne remplace pas la conscience : elle fixe un **minimum commun** pour vivre ensemble." },
          ],
        },
        {
          titre: "Pourquoi des règles communes ?",
          blocs: [
            { t: "texte", md: "Imagine une partie de foot sans arbitre ni règles : le plus fort garde le ballon. Une société sans lois, c'est pareil : ==la loi du plus fort==. Personne n'y est vraiment libre, et les plus faibles ne sont pas protégés.\n\nLes règles communes, connues de tous, garantissent au contraire la **liberté** et la **sécurité** de chacun." },
            { t: "propriete", titre: "« Nul n'est censé ignorer la loi »", md: "Personne ne connaît toutes les lois par cœur. Mais les lois sont publiées et accessibles à tous : on ne peut donc pas échapper à une sanction en disant « je ne savais pas »." },
          ],
        },
        {
          titre: "Qui fait la loi ?",
          blocs: [
            { t: "etapes", titre: "Le parcours d'une loi", items: [{ titre: "Proposer", md: "Le gouvernement (projet de loi) ou des parlementaires (proposition de loi) rédigent un texte." }, { titre: "Débattre et voter", md: "Le **Parlement** l'examine : l'**Assemblée nationale** (députés) et le **Sénat** (sénateurs) doivent voter le même texte." }, { titre: "Promulguer", md: "Le **président de la République** signe la loi." }, { titre: "Publier", md: "La loi paraît au **Journal officiel** : tout le monde peut la lire, elle s'applique." }] },
            { t: "savais-tu", md: "Le Journal officiel existe depuis 1869 et se consulte aujourd'hui gratuitement en ligne. Chaque jour, de nouveaux textes y sont publiés." },
          ],
        },
        {
          titre: "La hiérarchie des normes",
          blocs: [
            { t: "texte", md: "Les règles de droit ne se valent pas toutes. Elles sont rangées comme les étages d'une pyramide. Tout en haut, la **Constitution** de 1958, le texte fondamental qui organise la République et protège nos droits. Tout en bas, le règlement intérieur de ton collège." },
            { t: "schema", titre: "La pyramide des normes", legende: "Chaque étage doit respecter tous ceux qui sont au-dessus de lui.", svg: `<svg viewBox="0 0 400 262"><path class="aplat" d="M130 15 L240 245 L20 245 Z"/><path class="trait" d="M130 15 L240 245 L20 245 Z"/><line class="trait-fin" x1="108" y1="61" x2="152" y2="61"/><line class="trait-fin" x1="86" y1="107" x2="174" y2="107"/><line class="trait-fin" x1="64" y1="153" x2="196" y2="153"/><line class="trait-fin" x1="42" y1="199" x2="218" y2="199"/><text class="texte-main" x="130" y="52" text-anchor="middle">1</text><text class="texte-main" x="130" y="96" text-anchor="middle">2</text><text class="texte-main" x="130" y="142" text-anchor="middle">3</text><text class="texte-main" x="130" y="188" text-anchor="middle">4</text><text class="texte-main" x="130" y="234" text-anchor="middle">5</text><line class="pointille" x1="150" y1="44" x2="246" y2="44"/><line class="pointille" x1="170" y1="88" x2="246" y2="88"/><line class="pointille" x1="192" y1="134" x2="246" y2="134"/><line class="pointille" x1="214" y1="180" x2="246" y2="180"/><line class="pointille" x1="236" y1="226" x2="246" y2="226"/><text class="texte" x="252" y="42">Constitution</text><text class="texte-petit" x="252" y="56">texte fondamental</text><text class="texte" x="252" y="86">Traités</text><text class="texte-petit" x="252" y="100">accords entre États</text><text class="texte" x="252" y="132">Lois</text><text class="texte-petit" x="252" y="146">votées au Parlement</text><text class="texte" x="252" y="178">Règlements</text><text class="texte-petit" x="252" y="192">décrets, arrêtés</text><text class="texte" x="252" y="224">Règlement intérieur</text><text class="texte-petit" x="252" y="238">du collège</text><path class="trait-fin" d="M8 240 L8 34" marker-end="url(#fl)"/><text class="texte-petit" x="4" y="22">plus fort</text></svg>` },
            { t: "propriete", titre: "Hiérarchie des normes", md: "Constitution > traités internationaux > lois > règlements (décrets, arrêtés) > règlement intérieur. ==Une règle ne peut jamais contredire une règle qui lui est supérieure.== Le Conseil constitutionnel vérifie, par exemple, que les lois respectent la Constitution." },
            { t: "verifie", q: "Le règlement intérieur d'un collège peut-il contenir une règle contraire à la loi ?", choix: ["Oui, le collège fait ce qu'il veut", "Non, il doit respecter les lois, situées au-dessus de lui", "Oui, si les élèves l'acceptent"], bonne: 1, explication: "Le règlement intérieur est en bas de la pyramide : il doit respecter la loi, les règlements et la Constitution. Une règle contraire à la loi serait annulée." },
          ],
        },
        {
          titre: "Infractions, sanctions et mineurs",
          blocs: [
            { t: "tableau", titre: "Trois catégories d'infractions, de la moins grave à la plus grave", entetes: ["Infraction", "Exemples", "Sanction possible", "Qui juge ?"], lignes: [["**Contravention**", "stationnement interdit, tapage nocturne", "une **amende** (somme d'argent à payer)", "tribunal de police"], ["**Délit**", "vol, violences, harcèlement", "amende, prison (jusqu'à 10 ans)", "tribunal correctionnel"], ["**Crime**", "meurtre, viol, vol à main armée", "longues peines de prison", "cour d'assises"]] },
            { t: "texte", md: "Un **mineur** (moins de 18 ans) peut être jugé s'il est capable de **discernement**, c'est-à-dire de comprendre ce qu'il fait. La loi le présume à partir de **13 ans**. Il passe devant une justice spécialisée, celle des enfants, qui cherche d'abord à **éduquer** plutôt qu'à punir. Les peines prononcées contre un mineur sont en principe plus faibles que celles d'un adulte." },
            { t: "exemple", titre: "Une vitre cassée", md: "Un collégien casse la vitre d'un voisin en jouant au ballon. Ce n'est pas un crime : c'est un accident. Mais le voisin a subi un dommage. Les **parents** du mineur sont **civilement responsables** : ils doivent réparer, souvent grâce à leur assurance. Personne ne va en prison pour une vitre !" },
            { t: "verifie", q: "Range dans l'ordre, de la moins grave à la plus grave :", choix: ["Délit, contravention, crime", "Contravention, délit, crime", "Crime, délit, contravention"], bonne: 1, explication: "La contravention est punie d'une amende, le délit peut mener à la prison, le crime est jugé par une cour d'assises." },
          ],
        },
      ],
      bilan: "La morale parle à ta conscience, la règle à ton groupe, la loi à tous : votée par le Parlement, rangée dans une pyramide, elle protège la liberté de chacun.",
    },

    "5e-emc-04-justice-en-france": {
      accroche: "Malik retrouve son vélo volé… devant chez un garçon de son quartier. Ses copains lui disent : « Vas-y, reprends-le et donne-lui une leçon ! » C'est tentant. Mais si chacun se faisait justice lui-même, qui déciderait qui a raison ?",
      objectifs: [
        "Expliquer le rôle de la justice dans une démocratie",
        "Identifier les acteurs d'un procès et les principaux tribunaux",
        "Connaître les grands principes d'un procès équitable",
      ],
      sections: [
        {
          titre: "À quoi sert la justice ?",
          blocs: [
            { t: "texte", md: "Se venger, c'est décider seul, sous le coup de la colère, sans écouter l'autre. On peut se tromper de coupable, ou punir bien trop fort. C'est pourquoi, en démocratie, ==nul ne peut se faire justice soi-même==. On confie le conflit à un tiers neutre : la justice." },
            { t: "liste", titre: "Les missions de la justice", items: ["**Faire respecter la loi**, la même pour tous.", "**Régler les conflits** entre personnes de façon impartiale.", "**Protéger les victimes** et réparer le tort subi.", "**Sanctionner** les auteurs d'infractions, selon ce que prévoit la loi.", "**Aider à la réinsertion** : permettre au condamné de retrouver sa place dans la société."] },
            { t: "tableau", titre: "Les symboles de la justice", entetes: ["Symbole", "Ce qu'il signifie"], lignes: [["La **balance**", "l'équilibre et l'égalité : on pèse les arguments de chacun"], ["Le **glaive** (une épée)", "le pouvoir de sanctionner"], ["Le **bandeau** sur les yeux", "l'impartialité : la justice ne regarde pas qui est riche ou puissant"]] },
          ],
        },
        {
          titre: "Les tribunaux",
          blocs: [
            { t: "texte", md: "Selon l'affaire et la personne jugée, on ne va pas devant le même tribunal. Et si l'on n'est pas d'accord avec le premier jugement, on peut demander à être **rejugé** : c'est le droit de **faire appel**." },
            { t: "schema", titre: "L'organisation de la justice", legende: "Pour un crime, l'appel est jugé par une autre cour d'assises. La Cour de cassation ne rejuge pas les faits : elle vérifie que la loi a été bien appliquée.", svg: `<svg viewBox="0 0 400 250"><rect class="aplat" x="110" y="12" width="180" height="44"/><rect class="trait" x="110" y="12" width="180" height="44"/><text class="texte" x="200" y="31" text-anchor="middle">Cour de cassation</text><text class="texte-petit" x="200" y="47" text-anchor="middle">vérifie le droit</text><rect class="aplat-papier" x="110" y="92" width="180" height="44"/><rect class="trait" x="110" y="92" width="180" height="44"/><text class="texte" x="200" y="111" text-anchor="middle">Cour d'appel</text><text class="texte-petit" x="200" y="127" text-anchor="middle">rejuge l'affaire</text><path class="trait-fin" d="M200 92 L200 60" marker-end="url(#fl)"/><text class="texte-petit" x="208" y="80">pourvoi</text><rect class="aplat-papier" x="5" y="180" width="125" height="60"/><rect class="trait" x="5" y="180" width="125" height="60"/><rect class="aplat-papier" x="137" y="180" width="125" height="60"/><rect class="trait" x="137" y="180" width="125" height="60"/><rect class="aplat-papier" x="270" y="180" width="125" height="60"/><rect class="trait" x="270" y="180" width="125" height="60"/><text class="texte" x="67" y="198" text-anchor="middle">Tribunal</text><text class="texte" x="67" y="213" text-anchor="middle">judiciaire</text><text class="texte-petit" x="67" y="230" text-anchor="middle">délits, litiges</text><text class="texte" x="200" y="198" text-anchor="middle">Tribunal</text><text class="texte" x="200" y="213" text-anchor="middle">pour enfants</text><text class="texte-petit" x="200" y="230" text-anchor="middle">mineurs</text><text class="texte" x="332" y="198" text-anchor="middle">Cour</text><text class="texte" x="332" y="213" text-anchor="middle">d'assises</text><text class="texte-petit" x="332" y="230" text-anchor="middle">crimes, jurés</text><path class="trait-fin" d="M67 178 L150 140" marker-end="url(#fl)"/><path class="trait-fin" d="M200 178 L200 140" marker-end="url(#fl)"/><path class="pointille" d="M332 178 L250 140" marker-end="url(#fl)"/><text class="texte-petit" x="208" y="164">appel</text><text class="texte-main" x="8" y="160">1er procès</text></svg>` },
            { t: "tableau", titre: "Qui juge quoi ?", entetes: ["Juridiction", "Ce qu'elle juge"], lignes: [["**Tribunal judiciaire**", "les délits (au tribunal correctionnel) et les litiges entre personnes : un loyer impayé, un divorce, un voisin bruyant"], ["**Tribunal pour enfants**", "les infractions commises par des mineurs, avec le juge des enfants"], ["**Cour d'assises**", "les crimes les plus graves, avec un **jury de citoyens** tirés au sort"], ["**Cour de cassation**", "vérifie que la loi a été correctement appliquée par les autres tribunaux"]] },
            { t: "verifie", q: "Un mineur de 15 ans a commis un vol. Quel tribunal le juge ?", choix: ["La cour d'assises", "Le tribunal pour enfants", "La Cour de cassation"], bonne: 1, explication: "Les mineurs relèvent d'une justice spécialisée : le juge des enfants et le tribunal pour enfants. La cour d'assises juge les crimes, la Cour de cassation contrôle le droit." },
          ],
        },
        {
          titre: "Les acteurs du procès",
          blocs: [
            { t: "tableau", titre: "Qui fait quoi dans la salle d'audience ?", entetes: ["Acteur", "Son rôle"], lignes: [["**Juge**", "dirige l'audience, écoute chacun et rend la décision"], ["**Procureur** de la République", "représente la société : il accuse et demande une peine au nom de l'État"], ["**Avocat**", "défend les intérêts de son client (l'accusé ou la victime) et le conseille"], ["**Greffier**", "note tout ce qui se dit et prépare les documents officiels"], ["**Jurés** (cour d'assises)", "citoyens tirés au sort qui jugent aux côtés des magistrats"]] },
            { t: "attention", md: "Le juge et le procureur sont tous les deux des **magistrats**, mais leurs rôles sont opposés : le procureur **accuse**, le juge **tranche**. L'avocat, lui, n'est pas un magistrat : il est choisi par la personne qu'il défend." },
          ],
        },
        {
          titre: "D'une plainte à un jugement",
          blocs: [
            { t: "etapes", titre: "Les grandes étapes d'une affaire pénale", items: [{ titre: "La plainte", md: "La victime signale les faits à la police ou à la gendarmerie." }, { titre: "L'enquête", md: "Les enquêteurs recherchent les preuves et entendent les témoins." }, { titre: "La décision de poursuivre", md: "Le **procureur** décide s'il y a assez d'éléments pour un procès." }, { titre: "L'audience", md: "Au tribunal, chacun s'exprime : victime, accusé, avocats, procureur." }, { titre: "Le jugement", md: "Le juge décide : relaxe (non coupable) ou sanction. On peut faire appel." }] },
            { t: "exemple", titre: "Au tribunal pour enfants", md: "Un adolescent de 15 ans est accusé de vol. Il comparaît devant le tribunal pour enfants, **à huis clos** (sans public), assisté d'un avocat, en présence de ses parents. Le juge des enfants l'écoute, écoute la victime et le procureur, puis décide : souvent une **mesure éducative**, parfois une sanction.\n\nPourquoi sans public ? Pour protéger la vie privée du jeune : un procès public pourrait le marquer à vie, alors que le but est qu'il change de chemin." },
          ],
        },
        {
          titre: "Un procès équitable",
          blocs: [
            { t: "citation", texte: "Tout homme étant présumé innocent jusqu'à ce qu'il ait été déclaré coupable…", auteur: "Déclaration des droits de l'homme et du citoyen", source: "article 9, 1789" },
            { t: "propriete", titre: "Présomption d'innocence", md: "Toute personne est **innocente tant que sa culpabilité n'a pas été prouvée** par un jugement. C'est à l'accusation d'apporter les preuves, pas à l'accusé de prouver son innocence." },
            { t: "liste", titre: "Les droits de la défense", items: ["Être informé de ce qu'on te reproche.", "Être assisté par un **avocat**, gratuit si tu n'as pas les moyens (aide juridictionnelle).", "Pouvoir répondre à chaque accusation : c'est le **principe du contradictoire**. Un juge ne peut condamner personne sans l'avoir écouté.", "Pouvoir **faire appel** si l'on conteste le jugement."] },
            { t: "texte", md: "Enfin, le juge est **indépendant** : il décide selon la loi, sans recevoir d'ordres du gouvernement ni subir la pression des parties ou de l'opinion. Cette indépendance protège chaque citoyen, y compris contre l'État. Mais attention : le juge ne choisit pas les lois, il les applique." },
            { t: "verifie", q: "Comment s'appelle le magistrat qui représente la société et demande une peine ?", choix: ["Le greffier", "L'avocat", "Le procureur"], bonne: 2, explication: "Le procureur de la République accuse au nom de la société. L'avocat défend, le greffier note, le juge tranche." },
          ],
        },
      ],
      bilan: "La justice remplace la vengeance par un procès équitable : un juge indépendant, une défense, et la présomption d'innocence pour chacun.",
    },

    "5e-emc-05-liberte-et-libertes": {
      accroche: "Un élève crée un compte anonyme pour se moquer d'un camarade. Quand on lui demande d'arrêter, il répond : « C'est ma liberté d'expression ! » A-t-il raison ? Pour le savoir, il faut comprendre ce qu'est vraiment la liberté… et où elle s'arrête.",
      objectifs: [
        "Connaître les grands textes qui garantissent nos libertés (DDHC 1789, DUDH 1948)",
        "Distinguer libertés individuelles et libertés collectives",
        "Expliquer les limites légales de la liberté d'expression, y compris sur Internet",
      ],
      sections: [
        {
          titre: "Ma liberté s'arrête où commence celle des autres",
          blocs: [
            { t: "citation", texte: "La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui : ainsi, l'exercice des droits naturels de chaque homme n'a de bornes que celles qui assurent aux autres membres de la société la jouissance de ces mêmes droits.", auteur: "Déclaration des droits de l'homme et du citoyen", source: "article 4, 26 août 1789" },
            { t: "texte", md: "La liberté, ce n'est pas faire **tout** ce qu'on veut. Si chacun faisait n'importe quoi, la liberté de l'un écraserait celle de l'autre. La Déclaration de 1789 trace une limite claire : ==je suis libre tant que je ne nuis pas aux autres==. Et c'est la **loi** qui fixe ces limites, la même pour tous." },
          ],
        },
        {
          titre: "Des textes qui protègent nos libertés",
          blocs: [
            { t: "frise", titre: "Nos libertés, conquises peu à peu", evenements: [{ date: 1789, label: "Déclaration des droits de l'homme et du citoyen", detail: "26 août 1789" }, { date: 1881, label: "Loi sur la liberté de la presse", detail: "29 juillet 1881" }, { date: 1901, label: "Loi sur la liberté d'association" }, { date: 1905, label: "Loi de séparation des Églises et de l'État", detail: "elle fonde la laïcité et garantit la liberté de conscience" }, { date: 1948, label: "Déclaration universelle des droits de l'homme", detail: "adoptée par l'ONU le 10 décembre 1948, à Paris" }, { date: 1989, label: "Convention internationale des droits de l'enfant", detail: "adoptée par l'ONU le 20 novembre 1989" }] },
            { t: "tableau", titre: "Quatre articles clés de la Déclaration de 1789", entetes: ["Article", "Son idée"], lignes: [["**Article 1**", "Les hommes naissent et demeurent libres et égaux en droits."], ["**Article 4**", "La liberté consiste à faire tout ce qui ne nuit pas à autrui."], ["**Article 10**", "Nul ne doit être inquiété pour ses opinions, même religieuses."], ["**Article 11**", "La libre communication des pensées et des opinions est un des droits les plus précieux."]] },
            { t: "savais-tu", md: "La DUDH a été adoptée au palais de Chaillot, à Paris. Le juriste français **René Cassin**, qui a participé à sa rédaction, a reçu le prix Nobel de la paix en 1968. Le mot « universelle » est important : elle vaut pour **tous les humains**, partout." },
            { t: "verifie", q: "Quelle est la date d'adoption de la Déclaration universelle des droits de l'homme ?", choix: ["26 août 1789", "10 décembre 1948", "9 décembre 1905"], bonne: 1, explication: "La DUDH est adoptée par l'ONU le 10 décembre 1948. Le 26 août 1789 est la date de la DDHC, le 9 décembre 1905 celle de la loi de séparation des Églises et de l'État." },
          ],
        },
        {
          titre: "Libertés individuelles et libertés collectives",
          blocs: [
            { t: "texte", md: "Certaines libertés s'exercent **seul** : ce sont les libertés individuelles. D'autres n'ont de sens qu'**à plusieurs** : ce sont les libertés collectives. Les deux sont indispensables à une démocratie." },
            { t: "tableau", titre: "Deux familles de libertés", entetes: ["Libertés individuelles", "Libertés collectives"], lignes: [["aller et venir", "se réunir"], ["penser, croire ou ne pas croire", "s'associer (créer une association)"], ["respect de la vie privée", "manifester"], ["s'exprimer", "se syndiquer, faire grève"]] },
            { t: "definition", terme: "Liberté de conscience", md: "Droit de chacun de croire en la religion de son choix, de changer de religion, ou de n'en avoir aucune, sans être inquiété pour cela." },
          ],
        },
        {
          titre: "La liberté d'expression et ses limites",
          blocs: [
            { t: "definition", terme: "Liberté d'expression", md: "Droit de dire, d'écrire et de publier ses opinions. Elle permet de **critiquer** des idées, des œuvres, des religions, des dirigeants, même sévèrement. Selon l'article 11 de 1789, chacun peut « parler, écrire, imprimer librement », mais doit **répondre de l'abus** de cette liberté dans les cas prévus par la loi." },
            { t: "tableau", titre: "Les abus punis par la loi", entetes: ["Abus", "Ce que c'est", "Exemple"], lignes: [["**Injure**", "propos qui vise à blesser, sans accuser d'un fait précis", "« espèce d'imbécile »"], ["**Diffamation**", "accusation d'un fait précis, qui porte atteinte à l'honneur", "« il a volé la caisse du club » (si c'est faux ou non prouvé)"], ["**Incitation à la haine**", "appel à détester, exclure ou agresser un groupe de personnes", "« il faut chasser ces gens-là »"], ["**Harcèlement**", "propos ou actes **répétés** qui dégradent la vie d'une personne", "moqueries chaque jour sur un groupe de discussion"], ["**Apologie du terrorisme**", "présenter un attentat comme une bonne chose", "féliciter les auteurs d'un attentat"]] },
            { t: "exemple", titre: "Opinion ou délit ?", md: "« Ce film est nul », « je ne suis pas d'accord avec le maire », « cette équipe a très mal joué » : ce sont des **opinions**, elles sont libres.\n\n« Les gens de ce quartier sont tous des voleurs, il faut les chasser » : ce message vise un **groupe de personnes** et appelle à l'hostilité. C'est une **incitation à la haine**, interdite." },
            { t: "propriete", titre: "Critiquer une idée, pas attaquer des personnes", md: "En France, on a le droit de **critiquer une religion** (ses idées, ses règles), mais pas d'**insulter des personnes** à cause de leur religion. La loi protège les personnes, pas les croyances." },
            { t: "verifie", q: "« Je ne suis pas d'accord avec la décision du principal. » Ce message est…", choix: ["Une injure", "Une diffamation", "Une opinion permise"], bonne: 2, explication: "Exprimer son désaccord est une opinion, protégée par la liberté d'expression. Il n'y a ni insulte ni accusation d'un fait précis." },
          ],
        },
        {
          titre: "Sur Internet aussi",
          blocs: [
            { t: "attention", md: "« Sur Internet, je suis anonyme, donc tout est permis. » Faux ! Les lois sur l'injure, la diffamation, la haine et le harcèlement s'appliquent **en ligne comme ailleurs**. L'anonymat n'est qu'apparent : un compte peut être identifié. Et un mineur est **responsable** de ce qu'il publie." },
            { t: "astuce", md: "Avant de publier, demande-toi : « Est-ce que je le dirais en face, devant un adulte ? » Si tu es victime ou témoin de cyberharcèlement, parles-en et appelle le **3018** (gratuit et anonyme)." },
          ],
        },
      ],
      bilan: "Je suis libre de penser, de croire, de critiquer et de m'exprimer, tant que je ne nuis pas aux autres : injure, diffamation, haine et harcèlement sont interdits, en ligne comme ailleurs.",
    },

    "5e-emc-06-information-et-medias": {
      accroche: "Une vidéo fait le tour des réseaux : un « animal géant » aurait été filmé dans la Seine. 200 000 partages en une journée. Tes amis te l'envoient. Tu la partages aussi, ou tu prends trente secondes pour vérifier ?",
      objectifs: [
        "Identifier la source d'une information et évaluer sa fiabilité",
        "Reconnaître une infox, une rumeur, une théorie du complot ou une publicité déguisée",
        "Expliquer le rôle de la liberté de la presse et du pluralisme en démocratie",
      ],
      sections: [
        {
          titre: "D'où vient l'information ?",
          blocs: [
            { t: "definition", terme: "Média", md: "Moyen de diffuser l'information vers un large public : presse écrite, radio, télévision, sites d'information, réseaux sociaux." },
            { t: "definition", terme: "Source", md: "Origine d'une information : la personne, le média ou le document qui l'a produite en premier. Juger une information, c'est d'abord se demander **qui parle**, **quand**, et **avec quelles preuves**." },
            { t: "texte", md: "Sur un réseau social, tout le monde peut publier, mais tout le monde ne vérifie pas. Un journaliste, lui, a des règles de métier : **vérifier les faits**, **citer ses sources**, **corriger ses erreurs**. C'est ce qui rend un média sérieux plus fiable qu'un compte anonyme." },
            { t: "attention", md: "Une information partagée des milliers de fois n'est pas plus vraie pour autant. Le nombre de partages, de « j'aime » ou de commentaires mesure la popularité, ==jamais la vérité==." },
          ],
        },
        {
          titre: "Infox, rumeur, théorie du complot",
          blocs: [
            { t: "tableau", titre: "Bien distinguer", entetes: ["Mot", "Définition", "Ce qu'il faut savoir"], lignes: [["**Infox** (fake news)", "fausse information diffusée **volontairement**", "souvent faite pour choquer, faire cliquer ou manipuler"], ["**Rumeur**", "information qui circule **sans avoir été vérifiée**", "elle n'est pas forcément fausse, mais personne n'en a la preuve"], ["**Théorie du complot**", "récit qui explique un événement par un **plan secret** de quelques puissants", "elle refuse toutes les preuves contraires"]] },
            { t: "texte", md: "Comment reconnaître une théorie du complot ? Elle est **impossible à réfuter**. Si tu apportes une preuve contraire, on te répond qu'elle a été fabriquée par les comploteurs : chaque preuve contre le complot devient une preuve du complot ! Une vraie enquête, au contraire, accepte le doute et cite des sources que l'on peut vérifier." },
            { t: "definition", terme: "Esprit critique", md: "Capacité à analyser et à questionner une information avant de la croire ou de la partager. Ce n'est pas douter de tout : c'est **douter avec méthode**, puis se fier aux preuves." },
            { t: "verifie", q: "Quel indice montre qu'un récit est une théorie du complot ?", choix: ["Il cite des sources vérifiables", "Toute preuve contraire devient une preuve du complot", "Plusieurs journaux indépendants le confirment"], bonne: 1, explication: "Une théorie du complot se protège de toute critique en retournant les preuves contraires. C'est le signe qu'elle ne repose pas sur des faits." },
          ],
        },
        {
          titre: "Vérifier avant de partager",
          blocs: [
            { t: "etapes", titre: "La méthode en cinq étapes", items: [{ titre: "Lire en entier", md: "Pas seulement le titre : beaucoup d'infox se propagent par des titres trompeurs." }, { titre: "Identifier la source", md: "Qui a publié ? Un média connu, un expert, un compte anonyme ?" }, { titre: "Croiser", md: "D'autres sources fiables et indépendantes disent-elles la même chose ?" }, { titre: "Vérifier le contexte", md: "Quelle est la date de l'image ou de la vidéo ? A-t-elle été retouchée, sortie de son contexte ?" }, { titre: "Décider", md: "Partager… ou non. Dans le doute, on s'abstient." }] },
            { t: "exemple", titre: "L'« animal géant » de la Seine", etapes: ["Qui a publié ? Un compte anonyme créé la semaine dernière.", "Un média connu en parle-t-il ? Non, aucun.", "Une recherche d'image montre que la vidéo date de plusieurs années et a été filmée dans un autre pays.", "Conclusion : c'est une infox. On ne la partage pas, et on peut prévenir ses amis."] },
            { t: "astuce", md: "Un journaliste ne publie jamais sur la foi d'une seule source. Fais comme lui : ==une source, c'est une rumeur ; plusieurs sources fiables, c'est une information==." },
          ],
        },
        {
          titre: "Information ou publicité ?",
          blocs: [
            { t: "texte", md: "L'**information** cherche à faire connaître des faits. La **publicité** cherche à **vendre** : elle choisit ce qu'elle montre pour te donner envie d'acheter. Les deux sont légales, mais il faut savoir les distinguer.\n\nSur les réseaux, des influenceurs sont payés par des marques pour présenter un produit. La loi les oblige à le signaler clairement." },
            { t: "attention", md: "Les mentions « sponsorisé », « partenariat rémunéré », « collaboration commerciale » ou « publicité » signifient qu'**une marque a payé** pour ce contenu. Ce n'est pas un avis neutre." },
          ],
        },
        {
          titre: "Liberté de la presse et démocratie",
          blocs: [
            { t: "frise", titre: "La liberté de la presse en France", evenements: [{ date: 1631, label: "La Gazette de Théophraste Renaudot", detail: "l'un des premiers journaux français" }, { date: 1789, label: "Article 11 de la Déclaration", detail: "libre communication des pensées et des opinions" }, { date: 1881, label: "Loi sur la liberté de la presse", detail: "29 juillet 1881, toujours en vigueur" }, { date: 1971, label: "Charte de Munich", detail: "les devoirs et les droits des journalistes" }, { date: 2015, label: "Attentat contre Charlie Hebdo", detail: "7 janvier : des journalistes assassinés pour ce qu'ils publiaient" }] },
            { t: "definition", terme: "Pluralisme", md: "Diversité des médias et des opinions qu'ils expriment. Il permet aux citoyens de **comparer des points de vue** et de se forger leur propre opinion." },
            { t: "texte", md: "Dans une dictature, un seul média répète la version du pouvoir. En démocratie, des journaux différents peuvent enquêter, critiquer et contrôler les dirigeants. C'est pourquoi l'attentat contre la rédaction de **Charlie Hebdo**, le 7 janvier 2015, a été ressenti comme une attaque contre la **liberté d'expression** de tous." },
            { t: "verifie", q: "Pourquoi le pluralisme des médias est-il important en démocratie ?", choix: ["Il impose une seule vérité officielle", "Il permet de comparer les points de vue et de se faire sa propre opinion", "Il rend l'information plus chère"], bonne: 1, explication: "La diversité des médias permet de vérifier, de débattre et de contrôler ceux qui gouvernent. Une seule voix, c'est la propagande." },
          ],
        },
      ],
      bilan: "Avant de croire ou de partager : qui parle, quand, avec quelles preuves, et qui d'autre le confirme ? Une presse libre et plurielle, plus ton esprit critique, protègent la démocratie.",
    },

    "5e-emc-07-risques-majeurs-securite": {
      accroche: "Le 21 septembre 2001, à Toulouse, l'usine chimique AZF explose. Dans les collèges voisins, les vitres volent en éclats. En quelques secondes, des milliers d'élèves doivent savoir quoi faire. C'est pour ces minutes-là qu'on s'entraîne, même quand tout va bien.",
      objectifs: [
        "Définir un risque majeur et distinguer risques naturels et technologiques",
        "Connaître les consignes du PPMS et les acteurs de la sécurité civile",
        "Appliquer les gestes qui sauvent : protéger, alerter, secourir",
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'un risque majeur ?",
          blocs: [
            { t: "definition", terme: "Risque majeur", md: "Événement **rare** mais **très grave**, qui peut faire de nombreuses victimes et causer d'énormes dégâts. Il naît de la rencontre entre un phénomène dangereux (l'**aléa**) et un lieu où vivent des personnes (les **enjeux**)." },
            { t: "schema", titre: "Aléa + enjeux = risque", legende: "Un séisme dans un désert vide n'est pas un risque majeur ; le même séisme sous une ville en est un.", svg: `<svg viewBox="0 0 400 222"><circle class="aplat" cx="150" cy="105" r="85"/><circle class="aplat" cx="250" cy="105" r="85"/><circle class="trait" cx="150" cy="105" r="85"/><circle class="trait" cx="250" cy="105" r="85"/><text class="texte" x="105" y="92" text-anchor="middle">Aléa</text><text class="texte-petit" x="105" y="110" text-anchor="middle">crue,</text><text class="texte-petit" x="105" y="124" text-anchor="middle">séisme…</text><text class="texte" x="295" y="92" text-anchor="middle">Enjeux</text><text class="texte-petit" x="295" y="110" text-anchor="middle">habitants,</text><text class="texte-petit" x="295" y="124" text-anchor="middle">écoles…</text><text class="texte-pigment" x="200" y="100" text-anchor="middle">Risque</text><text class="texte-pigment" x="200" y="116" text-anchor="middle">majeur</text><text class="texte-petit" x="200" y="212" text-anchor="middle">un phénomène dangereux, là où vivent des gens</text></svg>` },
            { t: "tableau", titre: "Deux grandes familles de risques", entetes: ["Risques naturels", "Risques technologiques"], lignes: [["inondation", "accident industriel (usine chimique)"], ["séisme", "accident nucléaire"], ["tempête, cyclone", "transport de matières dangereuses"], ["feu de forêt, avalanche, éruption volcanique", "rupture de barrage"]] },
            { t: "verifie", q: "Un séisme est-il un risque technologique ?", choix: ["Oui", "Non, c'est un risque naturel"], bonne: 1, explication: "Un séisme est un phénomène naturel, lié aux mouvements de l'écorce terrestre. Les risques technologiques sont causés par une activité humaine : usine, centrale, barrage, transport." },
          ],
        },
        {
          titre: "Au collège : le PPMS",
          blocs: [
            { t: "texte", md: "Chaque établissement scolaire a un **PPMS** (plan particulier de mise en sûreté). Il prévoit qui fait quoi en cas de danger, où se rassembler, quelles réserves garder. Les **exercices** servent à s'entraîner : le jour où ce serait vrai, les bons réflexes viendront tout seuls." },
            { t: "tableau", titre: "Évacuer ou se confiner ?", entetes: ["Situation", "Évacuation", "Confinement"], lignes: [["**Quand ?**", "incendie", "nuage toxique, tempête, intrusion"], ["**Quoi faire ?**", "sortir calmement vers le point de rassemblement", "rester à l'intérieur, portes et fenêtres fermées"], ["**Le signal**", "l'alarme incendie", "un signal spécifique annoncé par l'établissement"]] },
            { t: "attention", md: "Pendant une évacuation, on **ne prend pas ses affaires**, on **n'utilise jamais l'ascenseur**, on ne revient pas en arrière. On suit l'adulte, on marche sans courir et on reste groupé jusqu'à l'appel." },
          ],
        },
        {
          titre: "Qui organise les secours ?",
          blocs: [
            { t: "texte", md: "La **sécurité civile** réunit tous ceux qui protègent la population : sapeurs-pompiers, SAMU, police, gendarmerie, bénévoles des associations de secours. Lors d'une catastrophe, c'est le **maire** qui organise les secours dans sa commune. Si la crise dépasse la commune, le **préfet** prend la direction dans le département." },
            { t: "tableau", titre: "Les numéros d'urgence, gratuits", entetes: ["Numéro", "Service", "Pour quoi ?"], lignes: [["**15**", "SAMU (service d'aide médicale urgente)", "un malaise, une blessure grave"], ["**17**", "police ou gendarmerie", "une agression, un danger pour la sécurité"], ["**18**", "sapeurs-pompiers", "un incendie, un accident"], ["**112**", "numéro d'urgence européen", "partout en Europe, depuis n'importe quel téléphone"], ["**114**", "urgences par SMS", "pour les personnes sourdes ou malentendantes"]] },
            { t: "savais-tu", md: "La **sirène d'alerte** est testée le **premier mercredi de chaque mois à midi**. Si tu l'entends un autre jour, ce n'est pas un test : mets-toi à l'abri dans un bâtiment et informe-toi (radio, message **FR-Alert** sur le téléphone). N'appelle pas les secours pour demander ce qui se passe : laisse les lignes libres." },
          ],
        },
        {
          titre: "Protéger, alerter, secourir",
          blocs: [
            { t: "etapes", titre: "Les trois gestes qui sauvent", items: [{ titre: "Protéger", md: "Éviter un nouvel accident : écarter la foule, baliser, couper le courant. Ne crée pas une deuxième victime, et surtout pas toi-même." }, { titre: "Alerter", md: "Appeler ou faire appeler les secours (15, 18 ou 112), le plus vite possible." }, { titre: "Secourir", md: "Faire les premiers gestes que tu connais, et rester près de la victime." }] },
            { t: "etapes", titre: "Réussir un appel aux secours", items: [{ titre: "Composer", md: "le 15, le 18 ou le 112." }, { titre: "Se présenter", md: "Ton nom et le numéro depuis lequel tu appelles." }, { titre: "Dire où", md: "L'adresse exacte : c'est l'information **la plus importante**." }, { titre: "Dire quoi", md: "Ce qui s'est passé, combien de victimes, dans quel état." }, { titre: "Ne pas raccrocher", md: "Réponds aux questions ; c'est l'opérateur qui raccroche en premier." }] },
            { t: "propriete", titre: "La position latérale de sécurité (PLS)", md: "Une victime **inconsciente** (elle ne répond pas) **mais qui respire** (sa poitrine se soulève) est placée **sur le côté**, en PLS. Ainsi, sa langue ou un vomissement ne bloquent pas sa respiration." },
            { t: "exemple", titre: "Un malaise dans la cour", etapes: ["Un camarade tombe et ne répond plus, mais tu vois qu'il respire.", "**Protéger** : tu écartes les autres élèves autour de lui.", "**Alerter** : tu cries pour qu'un adulte arrive, et tu fais appeler le 15.", "**Secourir** : tu le mets en PLS et tu restes près de lui jusqu'à l'arrivée des secours."] },
            { t: "attention", md: "On ne donne **jamais à boire** à une personne inconsciente (elle pourrait s'étouffer), on ne la secoue pas, on ne la met pas debout, et on ne la laisse pas seule." },
            { t: "verifie", q: "Quel numéro composes-tu pour appeler les pompiers ?", choix: ["15", "17", "18"], bonne: 2, explication: "Le 18 joint les sapeurs-pompiers, le 15 le SAMU, le 17 la police. En cas de doute, le 112 fonctionne toujours." },
          ],
        },
      ],
      bilan: "Un risque majeur est rare mais grave : on s'y prépare avec le PPMS, on connaît les numéros d'urgence et l'on retient trois mots qui sauvent : protéger, alerter, secourir.",
    },

    "5e-emc-08-engagement-vie-democratique": {
      accroche: "Dans ta classe, personne ne veut être délégué : « ça ne sert à rien, de toute façon ce sont les adultes qui décident ». Pourtant, l'an dernier, ce sont des élèves qui ont obtenu des bancs dans la cour et un club de jeux le midi. Comment ont-ils fait ?",
      objectifs: [
        "Décrire le rôle des délégués et des instances du collège (conseil de classe, CVC, CA)",
        "Comprendre les règles d'une élection et d'un débat démocratiques",
        "Mener un projet collectif dans le respect de la laïcité",
      ],
      sections: [
        {
          titre: "Les délégués, la voix de la classe",
          blocs: [
            { t: "definition", terme: "Délégués de classe", md: "Élèves élus en début d'année pour **représenter toute leur classe**. Chaque classe élit **deux délégués titulaires** et deux suppléants, qui les remplacent en cas d'absence." },
            { t: "texte", md: "Les délégués font le lien entre les élèves et les adultes : ils transmettent les questions, les difficultés, les propositions. Ils siègent au **conseil de classe**, chaque trimestre, où l'on fait le bilan du travail de chaque élève. Ils ne décident pas seuls, mais ils sont **écoutés**, et cela change souvent les choses." },
            { t: "attention", md: "Un délégué ne défend pas d'abord ses amis : il représente **tous** les élèves, y compris ceux qui n'ont pas voté pour lui. Il doit aussi garder pour lui ce qui se dit de confidentiel sur un camarade." },
          ],
        },
        {
          titre: "Une élection démocratique",
          blocs: [
            { t: "etapes", titre: "Les étapes de l'élection", items: [{ titre: "Candidatures", md: "Ceux qui le souhaitent se déclarent candidats." }, { titre: "Campagne", md: "Chaque candidat présente ses idées à la classe." }, { titre: "Vote", md: "À **bulletin secret**, dans un isoloir ou derrière un paravent." }, { titre: "Dépouillement", md: "On compte les bulletins devant tout le monde." }, { titre: "Proclamation", md: "On annonce les élus." }] },
            { t: "propriete", titre: "Le scrutin uninominal à deux tours", md: "On vote pour **un nom**. Au **premier tour**, est élu celui qui obtient la **majorité absolue** : plus de la moitié des voix exprimées. Sinon, on organise un **second tour**, où la **majorité relative** suffit : celui qui a le plus de voix l'emporte." },
            { t: "exemple", titre: "Calculer la majorité absolue", etapes: ["24 élèves votent, tous les bulletins sont valables.", "La moitié de 24 est 12 ; il faut **plus** de la moitié : 13 voix au moins.", "Inès obtient 14 voix : elle est élue dès le premier tour.", "Si personne n'avait atteint 13 voix, un second tour aurait eu lieu."] },
            { t: "texte", md: "Pourquoi le **secret** du vote ? Pour que chacun choisisse librement, sans pression et sans peur de vexer un ami. C'est la même règle que pour toutes les élections en France." },
            { t: "verifie", q: "Au premier tour, un candidat est élu s'il obtient…", choix: ["Le plus de voix, même peu", "Plus de la moitié des voix exprimées", "Exactement la moitié des voix"], bonne: 1, explication: "C'est la majorité absolue. La majorité relative (avoir le plus de voix) ne suffit qu'au second tour." },
          ],
        },
        {
          titre: "Les instances du collège",
          blocs: [
            { t: "schema", titre: "Qui siège où ?", legende: "Les élèves élisent leurs représentants, qui siègent dans les instances du collège.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat-papier" x="140" y="10" width="120" height="36"/><rect class="trait" x="140" y="10" width="120" height="36"/><text class="texte" x="200" y="33" text-anchor="middle">Les élèves</text><path class="trait-fin" d="M200 46 L200 76" marker-end="url(#fl)"/><text class="texte-petit" x="208" y="66">élisent</text><rect class="aplat" x="115" y="80" width="170" height="42"/><rect class="trait" x="115" y="80" width="170" height="42"/><text class="texte" x="200" y="98" text-anchor="middle">Délégués</text><text class="texte-petit" x="200" y="114" text-anchor="middle">2 titulaires, 2 suppléants</text><path class="trait-fin" d="M170 122 L75 164" marker-end="url(#fl)"/><path class="trait-fin" d="M200 122 L200 164" marker-end="url(#fl)"/><path class="trait-fin" d="M230 122 L325 164" marker-end="url(#fl)"/><text class="texte-petit" x="208" y="148">siègent</text><rect class="aplat-papier" x="10" y="168" width="120" height="50"/><rect class="trait" x="10" y="168" width="120" height="50"/><rect class="aplat-papier" x="140" y="168" width="120" height="50"/><rect class="trait" x="140" y="168" width="120" height="50"/><rect class="aplat-papier" x="270" y="168" width="120" height="50"/><rect class="trait" x="270" y="168" width="120" height="50"/><text class="texte" x="70" y="189" text-anchor="middle">Conseil</text><text class="texte-petit" x="70" y="206" text-anchor="middle">de classe</text><text class="texte" x="200" y="189" text-anchor="middle">CVC</text><text class="texte-petit" x="200" y="206" text-anchor="middle">vie collégienne</text><text class="texte" x="330" y="189" text-anchor="middle">Conseil</text><text class="texte-petit" x="330" y="206" text-anchor="middle">d'administration</text></svg>` },
            { t: "tableau", titre: "Le rôle de chaque instance", entetes: ["Instance", "Son rôle"], lignes: [["**Conseil de classe**", "fait le bilan du travail et des résultats de chaque élève, chaque trimestre"], ["**Conseil de la vie collégienne (CVC)**", "réunit des élèves élus et des adultes pour proposer des projets : climat scolaire, cour, sorties, actions solidaires"], ["**Conseil d'administration**", "vote le budget et le règlement intérieur ; des élèves élus y siègent"], ["**Conseil de discipline**", "décide des sanctions les plus graves"]] },
            { t: "savais-tu", md: "Depuis 2020, chaque classe de collège élit aussi un **éco-délégué**. Il porte les projets pour l'environnement : tri des déchets, économies d'énergie, potager, lutte contre le gaspillage à la cantine." },
          ],
        },
        {
          titre: "Débattre, ça s'apprend",
          blocs: [
            { t: "liste", titre: "Les règles d'un débat démocratique", items: ["**Écouter** l'autre jusqu'au bout, sans l'interrompre.", "**Demander la parole** et attendre son tour.", "**Argumenter** : donner des raisons et des exemples, pas seulement « parce que ».", "**Distinguer** les faits (vérifiables) des opinions (discutables).", "**Respecter** celui qui pense autrement : on critique une idée, jamais une personne."] },
            { t: "astuce", md: "Dans un débat, ce n'est pas celui qui parle le plus fort qui a raison, mais celui qui a les **meilleurs arguments**. Pour t'entraîner, essaie de reformuler l'avis de l'autre avant d'y répondre : « Si je comprends bien, tu penses que… »." },
          ],
        },
        {
          titre: "Laïcité et projets collectifs",
          blocs: [
            { t: "definition", terme: "Laïcité", md: "Principe qui sépare l'État et les religions. Au collège : les personnels sont **neutres** ; les élèves sont **libres de croire ou de ne pas croire** ; ils ne portent pas de signes religieux **ostensibles** (loi de 2004). La laïcité ne combat pas les religions : elle permet à tous de vivre ensemble, à égalité." },
            { t: "frise", titre: "La laïcité à l'école", evenements: [{ date: 1882, label: "Lois Jules Ferry", detail: "l'école publique devient gratuite, obligatoire et laïque" }, { date: 1905, label: "Loi de séparation des Églises et de l'État", detail: "9 décembre, aujourd'hui journée de la laïcité" }, { date: 1958, label: "Constitution", detail: "« La France est une République indivisible, laïque, démocratique et sociale »" }, { date: 2004, label: "Loi sur les signes religieux à l'école", detail: "interdiction des signes ostensibles pour les élèves" }, { date: 2013, label: "Charte de la laïcité à l'école", detail: "affichée dans chaque établissement" }] },
            { t: "exemple", titre: "Un projet au CVC : des bacs de tri", etapes: ["**Identifier un besoin** : la cour est pleine de déchets.", "**Débattre** : chacun donne son avis, on écoute tout le monde.", "**Voter** le projet en séance.", "**Répartir les tâches** : affiches, demande au principal, suivi avec les agents.", "**Faire le bilan** trois mois plus tard : qu'est-ce qui a marché ?"] },
            { t: "verifie", q: "Que signifie la laïcité au collège ?", choix: ["Toutes les religions sont interdites partout", "Les personnels sont neutres et chaque élève est libre de croire ou non", "Les élèves n'ont pas le droit d'avoir des convictions"], bonne: 1, explication: "La laïcité garantit la liberté de conscience et la neutralité de l'école. Hors de l'école, chacun pratique librement sa religion, ou n'en a aucune." },
          ],
        },
      ],
      bilan: "S'engager, c'est voter, débattre, représenter les autres et mener des projets ensemble : au collège, chaque élève a une voix, et la laïcité permet à toutes les voix de se rencontrer.",
    },
  },
};
