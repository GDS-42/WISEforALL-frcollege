// Cours ÉCLORE — 4e Enseignement moral et civique. Schéma : docs/COURS.md
export default {
  id: "4e-emc",
  chapitres: {
    "4e-emc-01-les-libertes": {
      accroche: "Ce soir, tu peux écrire ce que tu penses dans ton journal, retrouver tes amis au parc, croire ou ne pas croire. Cela te semble naturel ? Pendant des siècles, ce ne l'était pas. Mais alors, si nous sommes libres, pourquoi a-t-on le droit d'interdire certaines choses ?",
      objectifs: [
        "Définir la liberté avec l'article 4 de la DDHC",
        "Distinguer les libertés individuelles des libertés collectives",
        "Citer les textes qui protègent les libertés (DDHC, lois, CEDH, Constitution)",
        "Expliquer pourquoi et comment la loi fixe des limites aux libertés",
      ],
      sections: [
        {
          titre: "Être libre, qu'est-ce que c'est ?",
          blocs: [
            { t: "texte", md: "Être libre, ce n'est pas « faire tout ce qu'on veut ». Imagine une cour de récréation sans aucune règle : le plus fort prendrait le ballon, le plus bruyant imposerait sa musique. Au final, presque personne ne serait vraiment libre.\n\nLes révolutionnaires de 1789 ont trouvé une formule qui règle ce problème : ma liberté est réelle, mais elle doit laisser de la place à celle des autres." },
            { t: "citation", texte: "La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui : ainsi, l'exercice des droits naturels de chaque homme n'a de bornes que celles qui assurent aux autres membres de la société la jouissance de ces mêmes droits. Ces bornes ne peuvent être déterminées que par la loi.", auteur: "Déclaration des droits de l'homme et du citoyen", source: "article 4, 26 août 1789" },
            { t: "definition", terme: "Liberté", md: "Le pouvoir de penser et d'agir **sans contrainte injustifiée**, dans le respect des droits d'autrui. Les limites ne sont pas fixées par n'importe qui : ==seule la loi peut les fixer==." },
            { t: "verifie", q: "Selon la DDHC, la liberté consiste à…", choix: ["faire absolument tout ce que l'on veut", "faire tout ce qui ne nuit pas à autrui", "obéir à toutes les décisions du gouvernement"], bonne: 1, explication: "L'article 4 de la DDHC dit : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. » La liberté n'est donc ni sans limite, ni une simple obéissance." },
          ],
        },
        {
          titre: "Libertés individuelles et libertés collectives",
          blocs: [
            { t: "texte", md: "Certaines libertés, tu les exerces seul : choisir tes convictions, aller et venir, garder secret ton journal intime. D'autres n'ont de sens qu'à plusieurs : on ne manifeste pas seul, on ne crée pas seul une association." },
            { t: "tableau", titre: "Deux grandes familles de libertés", entetes: ["Libertés individuelles", "Libertés collectives"], lignes: [["**Conscience** : croire, ne pas croire, changer d'avis", "**Réunion** : se retrouver pour débattre (loi de 1881)"], ["**Opinion et expression** : penser et dire ce qu'on pense", "**Association** : s'unir autour d'un projet (loi du 1er juillet 1901)"], ["**Circulation** : aller et venir librement", "**Manifestation** : défiler sur la voie publique"], ["**Culte** : pratiquer sa religion", "**Liberté syndicale** et **droit de grève**"], ["**Vie privée** : son domicile, ses messages, son image", "**Liberté de la presse** : publier un journal"]] },
            { t: "definition", terme: "Liberté collective", md: "Une liberté qui s'exerce **à plusieurs**, en groupe. Elle permet aux citoyens de peser ensemble sur la vie publique : un club sportif, une association de quartier ou un syndicat en sont des exemples." },
            { t: "verifie", q: "Laquelle de ces libertés est une liberté collective ?", choix: ["La liberté de conscience", "Le respect de la vie privée", "La liberté d'association", "La liberté d'aller et venir"], bonne: 2, explication: "On ne crée pas une association tout seul : il faut au moins deux personnes. Les trois autres libertés concernent chaque personne individuellement." },
          ],
        },
        {
          titre: "Des textes pour protéger nos libertés",
          blocs: [
            { t: "texte", md: "Les libertés ne tombent pas du ciel : elles ont été conquises, puis inscrites dans des textes. Ces textes sont comme des remparts. Si un pouvoir voulait un jour les supprimer, les citoyens et les juges pourraient s'appuyer sur eux." },
            { t: "frise", titre: "Les libertés se construisent pas à pas", evenements: [
              { date: 1789, label: "DDHC", detail: "La Déclaration des droits de l'homme et du citoyen protège l'opinion « même religieuse » (art. 10) et la libre communication des pensées (art. 11)." },
              { date: 1881, label: "Liberté de réunion et de la presse", detail: "Loi du 30 juin 1881 sur les réunions publiques, loi du 29 juillet 1881 sur la presse." },
              { date: 1901, label: "Liberté d'association", detail: "Loi du 1er juillet 1901 : il suffit d'être deux pour créer une association." },
              { date: 1905, label: "Liberté de conscience", detail: "Loi de séparation des Églises et de l'État." },
              { date: 1950, label: "CEDH", detail: "Convention européenne des droits de l'homme, signée à Rome par les États du Conseil de l'Europe." },
              { date: 1958, label: "Constitution de la Ve République", detail: "Le Conseil constitutionnel vérifie que les lois respectent les libertés." },
            ] },
            { t: "definition", terme: "CEDH", md: "La **Convention européenne des droits de l'homme** (1950) garantit le droit à la vie, la liberté d'expression, le respect de la vie privée… Elle est appliquée par la **Cour européenne des droits de l'homme**, qui siège à **Strasbourg**. Une personne peut la saisir, mais seulement ==après avoir épuisé tous les recours devant la justice de son pays==." },
            { t: "attention", md: "Ne confonds pas le **Conseil de l'Europe** (46 États, qui a créé la CEDH) et l'**Union européenne** (27 États). La Cour de Strasbourg n'est pas une institution de l'Union européenne." },
            { t: "savais-tu", md: "En France, depuis 2010, un justiciable peut demander, au cours d'un procès, si une loi respecte bien les libertés garanties par la Constitution. C'est la **question prioritaire de constitutionnalité** : le Conseil constitutionnel peut alors abroger la loi." },
          ],
        },
        {
          titre: "Pourquoi les libertés ont des limites",
          blocs: [
            { t: "texte", md: "Toute liberté peut entrer en conflit avec les droits d'une autre personne ou avec la sécurité de tous. La loi trace donc des frontières. Mais attention : ces limites doivent être ==nécessaires et proportionnées==. On ne supprime pas une liberté pour un risque minuscule." },
            { t: "schema", titre: "Ma liberté et ses frontières", legende: "Quatre bornes encadrent une liberté. Elles sont fixées par la loi et contrôlées par un juge.", svg: `<svg viewBox="0 0 400 240"><circle class="aplat" cx="200" cy="120" r="54"/><circle class="trait" cx="200" cy="120" r="54" fill="none"/><circle class="pointille" cx="200" cy="120" r="68" fill="none"/><text class="texte" x="200" y="116" text-anchor="middle">Ma liberté</text><text class="texte-petit" x="200" y="134" text-anchor="middle">penser, agir</text><rect class="aplat-papier" x="6" y="30" width="120" height="44"/><rect class="trait" x="6" y="30" width="120" height="44" fill="none"/><text class="texte" x="66" y="48" text-anchor="middle">Droits d'autrui</text><text class="texte-petit" x="66" y="65" text-anchor="middle">honneur, vie privée</text><rect class="aplat-papier" x="274" y="30" width="120" height="44"/><rect class="trait" x="274" y="30" width="120" height="44" fill="none"/><text class="texte" x="334" y="48" text-anchor="middle">Ordre public</text><text class="texte-petit" x="334" y="65" text-anchor="middle">sécurité, santé</text><rect class="aplat-papier" x="6" y="150" width="120" height="44"/><rect class="trait" x="6" y="150" width="120" height="44" fill="none"/><text class="texte" x="66" y="168" text-anchor="middle">Mineurs</text><text class="texte-petit" x="66" y="185" text-anchor="middle">protéger l'enfance</text><rect class="aplat-papier" x="274" y="150" width="120" height="44"/><rect class="trait" x="274" y="150" width="120" height="44" fill="none"/><text class="texte" x="334" y="168" text-anchor="middle">La loi fixe</text><text class="texte-petit" x="334" y="185" text-anchor="middle">le juge contrôle</text><path class="trait-fin" d="M126 56 L149 74" marker-end="url(#fl)"/><path class="trait-fin" d="M274 56 L251 74" marker-end="url(#fl)"/><path class="trait-fin" d="M126 168 L145 160" marker-end="url(#fl)"/><path class="trait-fin" d="M274 168 L255 160" marker-end="url(#fl)"/><text class="texte-main" x="200" y="226" text-anchor="middle">libre, dans le respect des autres</text></svg>` },
            { t: "definition", terme: "Ordre public", md: "L'ensemble des conditions qui permettent de vivre ensemble en paix : la **sécurité**, la **tranquillité** et la **santé** publiques. Une liberté peut être limitée par la loi au nom de l'ordre public." },
            { t: "exemple", titre: "Une manifestation en centre-ville", etapes: ["Une association veut défiler contre la fermeture d'une maternité : c'est la **liberté de manifestation**.", "Elle déclare le parcours à l'avance en mairie ou en préfecture. C'est une déclaration, pas une demande de permission.", "Si des violences graves sont annoncées, le préfet peut interdire le défilé au nom de l'**ordre public**.", "L'association peut contester cette interdiction devant le **juge administratif**, qui vérifie qu'elle était nécessaire et proportionnée."] },
            { t: "verifie", q: "Les autorités interdisent une manifestation parce que des violences graves sont annoncées. Au nom de quoi ?", choix: ["De l'ordre public", "De la liberté d'expression", "De la vie privée"], bonne: 0, explication: "La sécurité des personnes fait partie de l'ordre public. Cette limite est légale si elle est nécessaire et proportionnée, ce que le juge peut contrôler." },
          ],
        },
      ],
      bilan: "Ma liberté va jusqu'à celle des autres : protégée par la DDHC, les lois et la CEDH, elle n'a d'autres limites que celles que fixe la loi, sous le regard du juge.",
    },

    "4e-emc-02-liberte-expression-presse": {
      accroche: "Un matin, une vidéo se moque d'un ministre ; un autre jour, un message accuse sans preuve une voisine d'avoir volé. Les deux circulent sur les réseaux sociaux. L'un est protégé par la loi, l'autre peut conduire devant un tribunal. Où passe la frontière ?",
      objectifs: [
        "Connaître la loi de 1881 et les notions de censure et de pluralisme",
        "Distinguer une opinion d'un abus : injure, diffamation, incitation à la haine",
        "Comprendre la place de la caricature et des réseaux sociaux dans le débat public",
        "Savoir réagir face à un contenu haineux en ligne",
      ],
      sections: [
        {
          titre: "Dire, écrire, publier : une liberté précieuse",
          blocs: [
            { t: "citation", texte: "La libre communication des pensées et des opinions est un des droits les plus précieux de l'homme : tout citoyen peut donc parler, écrire, imprimer librement, sauf à répondre de l'abus de cette liberté dans les cas déterminés par la loi.", auteur: "Déclaration des droits de l'homme et du citoyen", source: "article 11, 1789" },
            { t: "texte", md: "Relis bien la fin de l'article : « sauf à répondre de l'abus ». Tu peux t'exprimer librement **sans demander la permission avant**. Mais si tu abuses de cette liberté, tu en réponds **après**, devant la justice.\n\nCette liberté est aussi reconnue dans le monde entier par l'article 19 de la **Déclaration universelle des droits de l'homme** (1948)." },
            { t: "definition", terme: "Censure", md: "Le contrôle d'un contenu (article, livre, film, dessin) par le pouvoir **avant** sa diffusion, pour l'autoriser ou l'interdire. Dans une démocratie, la censure préalable est interdite." },
            { t: "propriete", titre: "La loi du 29 juillet 1881 sur la liberté de la presse", md: "Elle supprime l'**autorisation préalable** : un journal peut paraître sans la permission du gouvernement. Elle définit aussi, de façon précise, les **abus** que la justice peut punir. Plus de 140 ans après, elle reste le cœur du droit de la presse en France." },
          ],
        },
        {
          titre: "Le pluralisme et le rôle des médias",
          blocs: [
            { t: "definition", terme: "Pluralisme", md: "La **diversité des opinions et des médias** : journaux, radios, chaînes, sites aux lignes différentes. Il permet à chacun de comparer les points de vue et de se forger son propre avis." },
            { t: "texte", md: "Imagine un pays où un seul journal existerait. Tu ne lirais qu'une version des faits, sans pouvoir la vérifier ailleurs. Le pluralisme protège donc la démocratie : un citoyen bien informé vote et débat en connaissance de cause. En France, l'**Arcom** veille au pluralisme à la radio et à la télévision." },
            { t: "frise", titre: "Une liberté conquise, une liberté menacée", evenements: [
              { date: 1789, label: "DDHC, article 11", detail: "La libre communication des pensées devient un droit." },
              { date: 1881, label: "Loi sur la liberté de la presse", detail: "Fin de l'autorisation préalable." },
              { date: 1948, label: "Déclaration universelle", detail: "L'article 19 proclame la liberté d'opinion et d'expression." },
              { date: 1972, label: "Loi Pleven", detail: "L'incitation à la haine raciale devient un délit." },
              { date: 1985, label: "Reporters sans frontières", detail: "Une ONG fondée pour défendre les journalistes du monde entier." },
              { date: 2015, label: "Attentat contre Charlie Hebdo", detail: "Le 7 janvier, la rédaction d'un journal satirique est attaquée à Paris." },
            ] },
            { t: "savais-tu", md: "Chaque année, **Reporters sans frontières** (RSF) publie un classement mondial de la liberté de la presse. Dans certains pays, des journalistes sont emprisonnés, voire tués, simplement pour avoir enquêté." },
            { t: "verifie", q: "Pourquoi le pluralisme des médias est-il important en démocratie ?", choix: ["Il permet de comparer les points de vue et de se faire son propre avis", "Il oblige tous les journaux à dire la même chose", "Il permet au gouvernement de choisir les informations"], bonne: 0, explication: "Le pluralisme, c'est la diversité. Grâce à elle, le citoyen n'est pas prisonnier d'une seule version des faits." },
          ],
        },
        {
          titre: "Opinion ou délit ? Les abus de la liberté d'expression",
          blocs: [
            { t: "texte", md: "Critiquer, se moquer, être en désaccord, même vivement : tout cela relève de la liberté d'expression. En revanche, la loi punit certains propos parce qu'ils blessent gravement une personne ou un groupe. Ce sont des **délits**, même sur Internet." },
            { t: "tableau", titre: "Les principaux abus punis par la loi", entetes: ["Abus", "Ce que c'est", "Exemple"], lignes: [["**Injure**", "Une parole méprisante ou outrageante, **sans fait précis**", "Traiter quelqu'un de « nul » ou d'une insulte grossière"], ["**Diffamation**", "L'accusation d'un **fait précis** qui porte atteinte à l'honneur", "« Le maire a détourné l'argent de la commune », sans preuve"], ["**Incitation à la haine**", "Pousser à la haine ou à la violence contre des personnes pour leur origine, leur religion, leur sexe…", "Appeler à exclure les membres d'une religion"], ["**Apologie du terrorisme**", "Présenter un attentat de façon favorable", "Féliciter les auteurs d'un attentat"]] },
            { t: "exemple", titre: "Diffamation ou opinion ?", md: "Un internaute écrit : « Ce maire est un voleur qui a détourné l'argent de la commune. » Il n'a aucune preuve. Ce n'est pas une opinion (« je trouve sa politique mauvaise ») : c'est l'**accusation d'un fait précis** qui atteint l'honneur. C'est une **diffamation**, punie par la loi de 1881, même publiée sur un réseau social. Devant le juge, l'auteur pourrait seulement se défendre en prouvant ce qu'il affirme." },
            { t: "attention", md: "Un réseau social n'est pas un espace « privé » où tout est permis. Un message public, ou visible par de nombreuses personnes, est soumis aux **mêmes lois** qu'un article de journal." },
            { t: "verifie", q: "Un élève écrit en ligne que son professeur a volé l'argent du foyer, sans aucune preuve. De quoi s'agit-il ?", choix: ["D'une opinion", "D'une injure", "D'une diffamation"], bonne: 2, explication: "Il accuse son professeur d'un fait précis (un vol) qui porte atteinte à son honneur : c'est une diffamation. Une injure, elle, ne contient pas de fait précis." },
          ],
        },
        {
          titre: "Caricatures et réseaux sociaux",
          blocs: [
            { t: "definition", terme: "Caricature", md: "Un dessin **satirique** qui exagère les traits d'une personne ou d'une situation pour faire rire et réfléchir. Elle est protégée par la liberté d'expression, dans les limites de la loi." },
            { t: "texte", md: "En France, on peut se moquer d'un président, d'une idée, d'une religion : le blasphème n'est pas un délit. Ce qui est interdit, c'est de viser des **personnes** pour les exposer à la haine à cause de leur origine ou de leur croyance. Le 7 janvier 2015, l'attentat contre *Charlie Hebdo* a visé des dessinateurs pour leurs caricatures : c'est cette liberté qui était attaquée.\n\nSur les réseaux sociaux, les plateformes doivent **modérer** les contenus illégaux, comme l'exige le règlement européen sur les services numériques. Mais chacun peut agir aussi." },
            { t: "etapes", titre: "Réagir face à un contenu haineux en ligne", items: [
              { titre: "Ne pas répondre ni partager", md: "Répondre ou repartager, même pour dénoncer, donne plus de visibilité au message." },
              { titre: "Garder une preuve", md: "Fais une **capture d'écran** avec la date et le nom du compte." },
              { titre: "Signaler à la plateforme", md: "Utilise le bouton « Signaler » : la plateforme doit examiner le contenu." },
              { titre: "Alerter", md: "Signale-le sur **Pharos** (plateforme du ministère de l'Intérieur) et parles-en à un adulte de confiance. Le **3018** aide les jeunes victimes." },
              { titre: "Porter plainte si nécessaire", md: "La victime, avec ses parents, peut porter plainte au commissariat ou à la gendarmerie." },
            ] },
          ],
        },
      ],
      bilan: "En France, on s'exprime sans demander la permission, mais on répond de ses abus : injure, diffamation et incitation à la haine restent des délits, sur papier comme en ligne.",
    },

    "4e-emc-03-droit-et-justice": {
      accroche: "Ton vélo est volé, ton voisin refuse de réparer le mur qu'il a abîmé, ta mairie te refuse un permis de construire. Trois conflits, trois chemins différents dans la justice. Comment savoir à quelle porte frapper, et qui décidera ?",
      objectifs: [
        "Expliquer le rôle de la justice et ses grands principes",
        "Distinguer l'ordre judiciaire de l'ordre administratif et leurs degrés",
        "Associer une infraction à la juridiction pénale qui la juge",
        "Identifier les acteurs d'un procès et leur rôle",
      ],
      sections: [
        {
          titre: "À quoi sert la justice ?",
          blocs: [
            { t: "texte", md: "Sans justice, chacun réglerait ses conflits par la force ou la vengeance. La justice remplace cela par une décision prise par un **tiers impartial**, le juge, qui applique la **loi votée par le Parlement**.\n\nElle a deux grandes missions : **trancher les conflits** entre personnes (justice civile) et **sanctionner les infractions** (justice pénale). Ses décisions sont rendues « ==au nom du peuple français== »." },
            { t: "liste", titre: "Les grands principes de la justice", items: [
              "**Égalité** : la même loi s'applique à tous.",
              "**Gratuité** : les juges sont payés par l'État ; l'**aide juridictionnelle** aide les personnes modestes à payer un avocat.",
              "**Publicité** : les audiences sont publiques (sauf exceptions, par exemple pour les mineurs).",
              "**Indépendance** : aucun ministre ne peut dicter sa décision à un juge.",
              "**Droits de la défense** : chacun peut être assisté d'un avocat et connaître ce qu'on lui reproche.",
              "**Double degré de juridiction** : on peut faire **appel** pour être rejugé.",
            ] },
            { t: "citation", texte: "Tout homme étant présumé innocent jusqu'à ce qu'il ait été déclaré coupable…", auteur: "Déclaration des droits de l'homme et du citoyen", source: "article 9, 1789" },
            { t: "definition", terme: "Présomption d'innocence", md: "Tant qu'un tribunal ne l'a pas déclarée coupable, une personne soupçonnée est considérée comme **innocente**. Les médias ne doivent pas la présenter comme coupable." },
          ],
        },
        {
          titre: "Deux ordres de juridiction",
          blocs: [
            { t: "texte", md: "La justice française est divisée en deux grandes branches, appelées **ordres**. Le critère est simple : ==qui est en face de toi ?== Une personne privée (un voisin, une entreprise) ou une administration (l'État, une mairie, un hôpital public) ?" },
            { t: "schema", titre: "L'organisation de la justice en France", legende: "Chaque ordre a trois niveaux. On peut faire appel, puis demander à la juridiction suprême de vérifier le droit.", svg: `<svg viewBox="0 0 400 300"><text class="texte-pigment" x="97" y="20" text-anchor="middle">Ordre judiciaire</text><text class="texte-pigment" x="303" y="20" text-anchor="middle">Ordre administratif</text><line class="pointille" x1="200" y1="8" x2="200" y2="292"/><rect class="aplat" x="12" y="34" width="170" height="46"/><rect class="trait" x="12" y="34" width="170" height="46" fill="none"/><text class="texte" x="97" y="54" text-anchor="middle">Cour de cassation</text><text class="texte-petit" x="97" y="71" text-anchor="middle">vérifie le droit</text><rect class="aplat-papier" x="12" y="122" width="170" height="46"/><rect class="trait" x="12" y="122" width="170" height="46" fill="none"/><text class="texte" x="97" y="142" text-anchor="middle">Cour d'appel</text><text class="texte-petit" x="97" y="159" text-anchor="middle">rejuge l'affaire</text><rect class="aplat-papier" x="12" y="210" width="170" height="46"/><rect class="trait" x="12" y="210" width="170" height="46" fill="none"/><text class="texte" x="97" y="230" text-anchor="middle">Tribunal judiciaire</text><text class="texte-petit" x="97" y="247" text-anchor="middle">1er degré</text><rect class="aplat" x="218" y="34" width="170" height="46"/><rect class="trait" x="218" y="34" width="170" height="46" fill="none"/><text class="texte" x="303" y="54" text-anchor="middle">Conseil d'État</text><text class="texte-petit" x="303" y="71" text-anchor="middle">vérifie le droit</text><rect class="aplat-papier" x="218" y="122" width="170" height="46"/><rect class="trait" x="218" y="122" width="170" height="46" fill="none"/><text class="texte" x="303" y="142" text-anchor="middle">Cour administrative</text><text class="texte-petit" x="303" y="159" text-anchor="middle">d'appel : rejuge</text><rect class="aplat-papier" x="218" y="210" width="170" height="46"/><rect class="trait" x="218" y="210" width="170" height="46" fill="none"/><text class="texte" x="303" y="230" text-anchor="middle">Tribunal administratif</text><text class="texte-petit" x="303" y="247" text-anchor="middle">1er degré</text><path class="trait-fin" d="M97 208 L97 171" marker-end="url(#fl)"/><path class="trait-fin" d="M97 120 L97 83" marker-end="url(#fl)"/><path class="trait-fin" d="M303 208 L303 171" marker-end="url(#fl)"/><path class="trait-fin" d="M303 120 L303 83" marker-end="url(#fl)"/><text class="texte-main" x="105" y="194">appel</text><text class="texte-main" x="105" y="106">pourvoi</text><text class="texte-main" x="311" y="194">appel</text><text class="texte-main" x="311" y="106">pourvoi</text><text class="texte-petit" x="97" y="276" text-anchor="middle">entre personnes privées,</text><text class="texte-petit" x="97" y="291" text-anchor="middle">infractions pénales</text><text class="texte-petit" x="303" y="276" text-anchor="middle">contre l'État, une mairie,</text><text class="texte-petit" x="303" y="291" text-anchor="middle">un hôpital public</text></svg>` },
            { t: "propriete", titre: "Le double degré de juridiction", md: "Si tu n'es pas d'accord avec un premier jugement, tu peux **faire appel** : une cour d'appel rejuge **toute l'affaire**, faits et droit. Ensuite, on peut former un **pourvoi** devant la **Cour de cassation** (ou le **Conseil d'État**). Ces juridictions suprêmes ==ne rejugent pas les faits== : elles vérifient seulement que le droit a été bien appliqué." },
            { t: "verifie", q: "Un habitant conteste un permis de construire accordé par sa mairie. Où doit-il agir ?", choix: ["Au tribunal judiciaire", "Au tribunal administratif", "À la cour d'assises", "Directement à la Cour de cassation"], bonne: 1, explication: "La mairie est une administration : le litige relève de l'ordre administratif, donc d'abord du tribunal administratif." },
          ],
        },
        {
          titre: "La justice pénale : selon la gravité",
          blocs: [
            { t: "texte", md: "Quand une loi pénale est violée, on parle d'**infraction**. Le Code pénal les classe en trois catégories, de la moins grave à la plus grave. Chacune a son tribunal." },
            { t: "tableau", titre: "Trois infractions, trois juridictions", entetes: ["Infraction", "Exemple", "Juridiction", "Peine maximale"], lignes: [["**Contravention**", "Excès de vitesse, tapage nocturne", "Tribunal de police", "Amende"], ["**Délit**", "Vol, harcèlement, violences", "Tribunal correctionnel", "Jusqu'à 10 ans de prison"], ["**Crime**", "Meurtre, viol, vol à main armée", "Cour d'assises", "Jusqu'à la perpétuité"]] },
            { t: "texte", md: "La **cour d'assises** est particulière : trois magistrats y jugent avec **six jurés**, des citoyens tirés au sort sur les listes électorales (neuf jurés en appel). Ainsi, le peuple participe directement à la justice des crimes." },
            { t: "savais-tu", md: "Depuis 2023, certains crimes punis de 15 ou 20 ans de prison sont jugés par une **cour criminelle départementale**, composée de cinq magistrats professionnels et sans jurés." },
          ],
        },
        {
          titre: "Les acteurs et le déroulement d'un procès",
          blocs: [
            { t: "tableau", titre: "Qui fait quoi ?", entetes: ["Acteur", "Rôle"], lignes: [["**Juge** (magistrat du siège)", "Dirige l'audience et prononce la décision"], ["**Procureur** (magistrat du parquet)", "Représente la société, accuse et demande une peine"], ["**Avocat**", "Défend et conseille une partie"], ["**Greffier**", "Enregistre les débats et rédige les actes"], ["**Jurés**", "Citoyens tirés au sort qui jugent les crimes"], ["**Partie civile**", "La victime, qui demande réparation"]] },
            { t: "etapes", titre: "Le déroulement d'un procès au tribunal correctionnel", items: [
              { titre: "Ouverture", md: "Le président vérifie l'identité du **prévenu** et rappelle les faits." },
              { titre: "Débats", md: "Le prévenu est interrogé ; la victime et les témoins sont entendus." },
              { titre: "Partie civile", md: "L'avocat de la victime demande réparation du préjudice." },
              { titre: "Réquisitions", md: "Le **procureur** expose les faits du point de vue de la société et propose une peine." },
              { titre: "Plaidoirie", md: "L'**avocat** de la défense présente les arguments en faveur du prévenu." },
              { titre: "Dernier mot", md: "Le prévenu parle toujours **en dernier**." },
              { titre: "Délibéré et jugement", md: "Les juges se retirent, puis rendent leur décision « au nom du peuple français »." },
            ] },
            { t: "exemple", titre: "Le parcours d'une affaire de vol avec violence", md: "C'est un **délit** : il est jugé par le **tribunal correctionnel**. Le procureur demande une peine, l'avocat défend le prévenu, trois juges décident. Si le condamné conteste, il fait **appel** : la cour d'appel rejuge l'affaire. Il peut ensuite saisir la **Cour de cassation**, qui vérifiera seulement si le droit a bien été appliqué." },
            { t: "verifie", q: "Quel est le rôle du procureur de la République dans un procès pénal ?", choix: ["Il défend l'accusé", "Il représente la société et demande une peine", "Il enregistre les débats", "Il est tiré au sort parmi les citoyens"], bonne: 1, explication: "Le procureur est un magistrat du parquet : il agit au nom de la société. C'est l'avocat qui défend, le greffier qui enregistre, les jurés qui sont tirés au sort." },
          ],
        },
      ],
      bilan: "Rendue au nom du peuple français par des juges indépendants, la justice suit deux ordres et trois degrés : on peut toujours être rejugé, et chacun reste innocent tant qu'il n'a pas été déclaré coupable.",
    },

    "4e-emc-04-justice-des-mineurs": {
      accroche: "Lucas, 15 ans, a volé un téléphone. Faut-il le juger comme un adulte ? Le mettre en prison ? Ou l'aider à comprendre son erreur pour qu'il ne recommence pas ? Depuis 1945, la France a fait un choix clair : un enfant n'est pas un adulte en miniature.",
      objectifs: [
        "Connaître l'ordonnance de 1945, le Code de 2021 et leurs principes",
        "Expliquer la notion de discernement et la responsabilité pénale des mineurs",
        "Identifier les acteurs (juge des enfants, tribunal pour enfants, PJJ) et les mesures possibles",
      ],
      sections: [
        {
          titre: "Pourquoi une justice à part pour les mineurs ?",
          blocs: [
            { t: "texte", md: "Un adolescent est encore en train de se construire. Il peut agir sans mesurer les conséquences, sous l'influence d'un groupe ou dans un moment de colère. Mais il peut aussi **changer** beaucoup plus vite qu'un adulte. Punir sans accompagner risquerait de l'enfermer dans la délinquance ; l'éduquer lui donne une chance de prendre un autre chemin." },
            { t: "citation", texte: "La France n'est pas assez riche d'enfants qu'elle puisse négliger tout ce qui peut en faire des êtres sains.", auteur: "Gouvernement provisoire de la République française", source: "exposé des motifs de l'ordonnance du 2 février 1945" },
            { t: "propriete", titre: "Les trois principes de l'ordonnance du 2 février 1945", md: "1. La **primauté de l'éducatif sur le répressif** : on cherche d'abord à éduquer.\n2. Des **juridictions spécialisées** : des juges formés à l'enfance.\n3. Une **responsabilité pénale atténuée** : un mineur n'est pas puni comme un majeur." },
            { t: "texte", md: "Le **Code de la justice pénale des mineurs** (CJPM), entré en vigueur le **30 septembre 2021**, a remplacé l'ordonnance de 1945. Il ==conserve ses trois principes==, mais rend la procédure plus rapide et plus lisible." },
            { t: "frise", titre: "La justice des mineurs en France", evenements: [
              { date: 1912, label: "Tribunaux pour enfants", detail: "Une loi crée des tribunaux spécialement pour les enfants et adolescents." },
              { date: 1945, label: "Ordonnance du 2 février", detail: "Création du juge des enfants ; l'éducation passe avant la punition." },
              { date: 1958, label: "Enfance en danger", detail: "Le juge des enfants peut aussi protéger les mineurs en danger." },
              { date: 1989, label: "Convention internationale des droits de l'enfant", detail: "Adoptée par l'ONU le 20 novembre, ratifiée par la France en 1990." },
              { date: 2021, label: "Code de la justice pénale des mineurs", detail: "Entré en vigueur le 30 septembre 2021." },
            ] },
          ],
        },
        {
          titre: "Discernement et responsabilité",
          blocs: [
            { t: "definition", terme: "Discernement", md: "La capacité à **comprendre** ce que l'on fait et à en **mesurer la portée**. Un mineur n'est responsable pénalement que s'il est capable de discernement." },
            { t: "propriete", titre: "Ce que prévoit le Code de 2021", md: "• **Avant 13 ans**, un mineur est présumé **sans discernement**. Même si l'on prouve le contraire, il ne peut recevoir **aucune peine** : seulement des mesures éducatives.\n• **À partir de 13 ans**, il est présumé capable de discernement : une peine devient possible, y compris la prison pour les faits graves, mais en dernier recours.\n• L'**excuse de minorité** : la peine encourue par un mineur est en principe **réduite de moitié** par rapport à celle d'un majeur." },
            { t: "attention", md: "« Un mineur ne risque rien » : c'est **faux**. Dès 13 ans, il peut être condamné. Et même avant, la justice intervient : mesures éducatives pour l'enfant et, pour les dégâts, ses **parents sont civilement responsables** et doivent indemniser la victime." },
            { t: "verifie", q: "Un enfant de 11 ans brise la vitrine d'un magasin. Que peut faire la justice ?", choix: ["Le condamner à une peine de prison avec sursis", "Ordonner des mesures éducatives ; ses parents paient les dégâts", "Rien du tout, il est trop jeune", "Lui infliger la même amende qu'à un adulte"], bonne: 1, explication: "Avant 13 ans, aucune peine n'est possible, mais la justice peut prendre des mesures éducatives. Les parents sont civilement responsables : ils indemnisent le commerçant." },
          ],
        },
        {
          titre: "Les acteurs de la justice des mineurs",
          blocs: [
            { t: "tableau", titre: "Qui s'occupe des mineurs ?", entetes: ["Acteur", "Rôle"], lignes: [["**Juge des enfants**", "Protège les mineurs **en danger** et juge les infractions les moins graves"], ["**Tribunal pour enfants**", "Un juge des enfants et deux assesseurs citoyens ; juge les délits plus graves et peut prononcer des peines"], ["**Cour d'assises des mineurs**", "Juge les crimes commis par des mineurs de 16 à 18 ans"], ["**PJJ** (Protection judiciaire de la jeunesse)", "Service du ministère de la Justice : ses éducateurs suivent les mineurs confiés par les juges"], ["**Avocat**", "Obligatoire pour un mineur poursuivi : il le défend à chaque étape"]] },
            { t: "texte", md: "Le **juge des enfants** est un magistrat à double casquette. Le matin, il peut protéger une adolescente maltraitée par ses parents ; l'après-midi, juger un garçon qui a commis un vol. Dans les deux cas, il connaît bien le jeune et suit son évolution dans le temps." },
            { t: "savais-tu", md: "Les audiences des mineurs ne sont **pas publiques**, et les médias n'ont pas le droit de révéler leur identité. Le but : ne pas coller une étiquette à vie à un adolescent." },
          ],
        },
        {
          titre: "Le parcours d'un mineur devant la justice",
          blocs: [
            { t: "texte", md: "Depuis 2021, le procès d'un mineur est coupé en deux : on parle de **césure**. On décide d'abord s'il est coupable, puis on lui laisse du temps pour montrer qu'il peut évoluer, avant de fixer la sanction." },
            { t: "schema", titre: "Le parcours pénal d'un mineur (Code de 2021)", legende: "Entre les deux audiences, le jeune est suivi par un éducateur : la sanction tient compte de ses efforts.", svg: `<svg viewBox="0 0 400 300"><rect class="aplat-papier" x="14" y="10" width="206" height="40"/><rect class="trait" x="14" y="10" width="206" height="40" fill="none"/><text class="texte" x="117" y="35" text-anchor="middle">1. Infraction</text><rect class="aplat-papier" x="14" y="64" width="206" height="40"/><rect class="trait" x="14" y="64" width="206" height="40" fill="none"/><text class="texte" x="117" y="89" text-anchor="middle">2. Enquête</text><rect class="aplat" x="14" y="118" width="206" height="40"/><rect class="trait" x="14" y="118" width="206" height="40" fill="none"/><text class="texte" x="117" y="143" text-anchor="middle">3. Audience de culpabilité</text><rect class="aplat" x="14" y="172" width="206" height="40"/><rect class="trait" x="14" y="172" width="206" height="40" fill="none"/><text class="texte" x="117" y="197" text-anchor="middle">4. Mise à l'épreuve éducative</text><rect class="aplat" x="14" y="226" width="206" height="40"/><rect class="trait" x="14" y="226" width="206" height="40" fill="none"/><text class="texte" x="117" y="251" text-anchor="middle">5. Audience de sanction</text><path class="trait-fin" d="M117 50 L117 62" marker-end="url(#fl)"/><path class="trait-fin" d="M117 104 L117 116" marker-end="url(#fl)"/><path class="trait-fin" d="M117 158 L117 170" marker-end="url(#fl)"/><path class="trait-fin" d="M117 212 L117 224" marker-end="url(#fl)"/><line class="pointille" x1="222" y1="30" x2="234" y2="30"/><text class="texte-petit" x="238" y="34">vol, dégradation…</text><line class="pointille" x1="222" y1="84" x2="234" y2="84"/><text class="texte-petit" x="238" y="88">police, procureur</text><line class="pointille" x1="222" y1="138" x2="234" y2="138"/><text class="texte-petit" x="238" y="142">coupable ou non ?</text><line class="pointille" x1="222" y1="192" x2="234" y2="192"/><text class="texte-petit" x="238" y="190">6 à 9 mois,</text><text class="texte-petit" x="238" y="204">suivi par la PJJ</text><line class="pointille" x1="222" y1="246" x2="234" y2="246"/><text class="texte-petit" x="238" y="244">mesure éducative</text><text class="texte-petit" x="238" y="258">ou peine</text><text class="texte-pigment" x="200" y="290" text-anchor="middle">Avant 13 ans : mesures éducatives seulement</text></svg>` },
            { t: "tableau", titre: "Les réponses possibles, de la plus légère à la plus lourde", entetes: ["Type", "Exemples", "Pour qui ?"], lignes: [["Avertissement judiciaire", "Le juge rappelle solennellement la loi", "Tous les mineurs"], ["Mesure éducative", "Réparation au profit de la victime ou d'une association, stage, suivi par un éducateur, placement", "Tous les mineurs"], ["Peine", "Amende, travail d'intérêt général (à partir de 16 ans), prison avec ou sans sursis", "À partir de 13 ans, prison en dernier recours"]] },
            { t: "exemple", titre: "Un adolescent de 15 ans reconnu coupable d'un vol", etapes: ["**Audience de culpabilité** : le juge des enfants le déclare coupable, mais ne fixe pas encore la sanction.", "**Mise à l'épreuve** : il effectue une mesure de **réparation** (des heures au profit d'une association), suivie par un éducateur de la **PJJ**.", "**Audience de sanction**, quelques mois plus tard : le juge tient compte de ses efforts, de sa scolarité, de son attitude. Il peut s'en tenir à une mesure éducative."] },
            { t: "verifie", q: "Pourquoi la justice des mineurs privilégie-t-elle l'éducation ?", choix: ["Parce que les mineurs ne commettent jamais d'infractions graves", "Parce qu'un adolescent est en construction et peut changer : l'éduquer limite la récidive", "Parce que les mineurs n'ont pas à respecter la loi"], bonne: 1, explication: "Le principe de 1945, repris en 2021, repose sur l'idée qu'un jeune peut évoluer. L'accompagner est le meilleur moyen d'éviter qu'il recommence." },
          ],
        },
      ],
      bilan: "Pour un mineur, la justice ne ferme pas les yeux, mais elle tend la main : discernement présumé dès 13 ans, peine réduite de moitié, et toujours l'éducation avant la punition.",
    },

    "4e-emc-05-egalite-discriminations": {
      accroche: "Deux candidats envoient le même CV, au même diplôme, à la même expérience. Seul le nom change. L'un est appelé pour un entretien, l'autre jamais. Hasard ? Des chercheurs ont répété l'expérience des milliers de fois. Ce n'est pas un hasard : c'est une discrimination.",
      objectifs: [
        "Connaître les grandes étapes de l'égalité entre les femmes et les hommes",
        "Reconnaître une discrimination et distinguer préjugé, stéréotype et discrimination",
        "Citer les lois qui combattent le racisme, l'antisémitisme et les discriminations liées au handicap",
        "Savoir à qui s'adresser : Défenseur des droits, 3020, 3018",
      ],
      sections: [
        {
          titre: "L'égalité, un principe de la République",
          blocs: [
            { t: "texte", md: "« Liberté, Égalité, Fraternité » : l'égalité est au cœur de la devise républicaine. Elle ne veut pas dire que nous sommes tous identiques, mais que nous avons ==les mêmes droits== et que la loi est la même pour tous." },
            { t: "citation", texte: "Les hommes naissent et demeurent libres et égaux en droits.", auteur: "Déclaration des droits de l'homme et du citoyen", source: "article 1, 1789" },
            { t: "texte", md: "Le **préambule de la Constitution de 1946** ajoute : « La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme. » Et l'article 1 de la **Constitution de 1958** assure « l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion »." },
            { t: "definition", terme: "Discrimination", md: "Traiter une personne **moins bien** qu'une autre, dans une situation comparable, à cause d'un **critère interdit par la loi** : origine, sexe, âge, handicap, religion, apparence physique, lieu de résidence… La loi en compte **plus de 25**. C'est un délit." },
            { t: "attention", md: "Un **préjugé** ou un **stéréotype** est une idée toute faite (« les filles sont moins douées en maths »). Une **discrimination** est un **acte** (refuser d'inscrire une fille au club de maths pour cette raison). La loi punit l'acte, mais combattre les idées toutes faites évite qu'elles deviennent des actes." },
          ],
        },
        {
          titre: "La longue conquête de l'égalité femmes-hommes",
          blocs: [
            { t: "frise", titre: "Les grandes étapes", evenements: [
              { date: 1944, label: "Droit de vote des femmes", detail: "Ordonnance du 21 avril 1944. Premier vote aux élections municipales d'avril 1945." },
              { date: 1946, label: "Égalité dans la Constitution", detail: "Le préambule garantit l'égalité des droits entre femmes et hommes." },
              { date: 1965, label: "Autonomie des femmes mariées", detail: "Elles peuvent ouvrir un compte bancaire et travailler sans l'accord de leur mari." },
              { date: 1972, label: "Égalité de salaire", detail: "« À travail égal, salaire égal » devient une loi." },
              { date: 1975, label: "Loi Veil", detail: "Simone Veil fait voter la loi autorisant l'interruption volontaire de grossesse (IVG)." },
              { date: 2000, label: "Loi sur la parité", detail: "Les partis doivent présenter autant de femmes que d'hommes aux élections." },
            ] },
            { t: "texte", md: "Chaque étape a demandé des mobilisations et des débats parfois très vifs. Et le chemin n'est pas terminé : en 2024, l'Assemblée nationale comptait environ **36 % de femmes**. La loi sur la parité impose des candidatures égales, mais les électeurs restent libres de leur choix, et certains partis préfèrent payer des pénalités." },
            { t: "verifie", q: "Grâce à la loi de 2000 sur la parité, l'Assemblée nationale compte-t-elle autant de femmes que d'hommes ?", choix: ["Oui, exactement la moitié", "Non, les femmes restent minoritaires (environ un tiers)"], bonne: 1, explication: "La loi oblige à présenter autant de candidates que de candidats, mais elle ne garantit pas le résultat de l'élection. Les femmes restent minoritaires parmi les députés." },
          ],
        },
        {
          titre: "Racisme, antisémitisme, handicap : ce que dit la loi",
          blocs: [
            { t: "definition", terme: "Antisémitisme", md: "L'hostilité, la haine ou la discrimination envers les **Juifs** en tant que tels. Comme le **racisme**, ce n'est pas une opinion : c'est un délit quand il s'exprime par des propos ou des actes." },
            { t: "tableau", titre: "Des lois pour lutter contre les discriminations", entetes: ["Loi", "Ce qu'elle prévoit"], lignes: [["**Loi Pleven** (1972)", "Punit la provocation à la haine, à la discrimination ou à la violence raciale"], ["**Loi Gayssot** (1990)", "Punit la négation des crimes contre l'humanité, comme la Shoah"], ["**Loi du 11 février 2005**", "Égalité des droits et des chances des personnes **handicapées** : accessibilité, scolarisation en milieu ordinaire, compensation"], ["**Loi du 2 mars 2022**", "Fait du **harcèlement scolaire** un délit"]] },
            { t: "texte", md: "Depuis 2003, quand une infraction est commise **à cause de l'origine ou de la religion** de la victime, la peine est alourdie : le mobile raciste ou antisémite est une **circonstance aggravante**. Une discrimination à l'embauche ou au logement est punie de trois ans de prison et de 45 000 € d'amende." },
            { t: "savais-tu", md: "Grâce à la loi de 2005, un élève en situation de handicap a le droit d'être scolarisé dans le collège de son quartier, avec si besoin un accompagnant (AESH) ou du matériel adapté." },
          ],
        },
        {
          titre: "Prouver et agir contre les discriminations",
          blocs: [
            { t: "definition", terme: "Testing", md: "Une méthode qui consiste à envoyer des candidatures **identiques**, sauf sur **un seul critère** (le nom, l'âge, l'adresse…). Si les réponses diffèrent, ce critère explique l'écart. La justice accepte le testing comme **preuve**." },
            { t: "schema", titre: "Comment fonctionne un testing", legende: "Exemple fictif : si tout est identique sauf le nom, l'écart de réponses révèle une discrimination.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier" x="30" y="14" width="140" height="114"/><rect class="trait" x="30" y="14" width="140" height="114" fill="none"/><rect class="aplat-papier" x="230" y="14" width="140" height="114"/><rect class="trait" x="230" y="14" width="140" height="114" fill="none"/><text class="texte" x="100" y="36" text-anchor="middle">CV 1 : nom A</text><text class="texte-pigment" x="300" y="36" text-anchor="middle">CV 2 : nom B</text><line class="trait-fin" x1="44" y1="46" x2="156" y2="46"/><line class="trait-fin" x1="244" y1="46" x2="356" y2="46"/><text class="texte-petit" x="100" y="66" text-anchor="middle">même diplôme</text><text class="texte-petit" x="100" y="84" text-anchor="middle">même expérience</text><text class="texte-petit" x="100" y="102" text-anchor="middle">même âge</text><text class="texte-petit" x="100" y="120" text-anchor="middle">même adresse</text><text class="texte-petit" x="300" y="66" text-anchor="middle">même diplôme</text><text class="texte-petit" x="300" y="84" text-anchor="middle">même expérience</text><text class="texte-petit" x="300" y="102" text-anchor="middle">même âge</text><text class="texte-petit" x="300" y="120" text-anchor="middle">même adresse</text><text class="texte-main" x="200" y="78" text-anchor="middle">=</text><path class="trait-fin" d="M100 130 L100 158" marker-end="url(#fl)"/><path class="trait-fin" d="M300 130 L300 158" marker-end="url(#fl)"/><rect class="aplat" x="40" y="162" width="120" height="38"/><rect class="trait" x="40" y="162" width="120" height="38" fill="none"/><rect class="aplat" x="240" y="162" width="120" height="38"/><rect class="trait" x="240" y="162" width="120" height="38" fill="none"/><text class="texte" x="100" y="186" text-anchor="middle">20 entretiens</text><text class="texte" x="300" y="186" text-anchor="middle">10 entretiens</text><text class="texte-main" x="200" y="186" text-anchor="middle">≠</text><text class="texte-petit" x="200" y="226" text-anchor="middle">pour 100 candidatures envoyées de chaque côté</text></svg>` },
            { t: "exemple", titre: "Un testing à l'embauche", md: "Une association envoie 200 CV strictement identiques pour des postes de serveur : seul le prénom change. Les CV au prénom perçu comme « français » obtiennent deux fois plus de réponses. Le testing **prouve** une discrimination fondée sur l'**origine**, interdite par le Code pénal et le Code du travail." },
            { t: "liste", titre: "Vers qui se tourner ?", items: [
              "Le **Défenseur des droits** (créé en 2011) : une autorité indépendante que **toute personne peut saisir gratuitement** en cas de discrimination.",
              "Le **3020** : numéro gratuit contre le harcèlement scolaire.",
              "Le **3018** : numéro gratuit contre le cyberharcèlement.",
              "Au collège : un professeur, le CPE, l'infirmière, la direction. Parler, c'est déjà agir.",
            ] },
            { t: "verifie", q: "Qu'est-ce que le Défenseur des droits ?", choix: ["Un avocat payé par la victime", "Une autorité indépendante qu'on peut saisir gratuitement", "Un juge de la cour d'assises"], bonne: 1, explication: "Le Défenseur des droits est une autorité indépendante. On peut le saisir gratuitement, en ligne ou auprès de ses délégués, en cas de discrimination." },
          ],
        },
      ],
      bilan: "L'égalité est inscrite dans nos textes depuis 1789, mais elle se conquiert encore : repérer une discrimination, la prouver et la signaler, c'est faire vivre la devise républicaine.",
    },

    "4e-emc-06-securite-droits-devoirs": {
      accroche: "Des caméras dans la rue, une application qui veut accéder à tes contacts, une photo de toi publiée sans ton accord. Être protégé, c'est rassurant ; être surveillé, beaucoup moins. Comment la loi tient-elle l'équilibre entre ta sécurité et tes libertés ?",
      objectifs: [
        "Distinguer sûreté et sécurité, et connaître les acteurs de la sécurité",
        "Expliquer les conditions de la légitime défense",
        "Comprendre l'équilibre entre sécurité et libertés (vidéoprotection, données personnelles)",
        "Connaître ses droits et ses devoirs en ligne : droit à l'image, cyberharcèlement",
      ],
      sections: [
        {
          titre: "Sûreté et sécurité : deux droits complémentaires",
          blocs: [
            { t: "definition", terme: "Sûreté", md: "Le droit de **ne pas être arrêté ni détenu arbitrairement**, c'est-à-dire sans raison prévue par la loi. C'est une protection **contre l'État lui-même** (DDHC, articles 2 et 7)." },
            { t: "definition", terme: "Sécurité", md: "La **protection des personnes et des biens** contre les agressions, les accidents, les catastrophes. C'est une mission de l'État." },
            { t: "citation", texte: "Nul ne peut être arbitrairement détenu. L'autorité judiciaire, gardienne de la liberté individuelle, assure le respect de ce principe dans les conditions prévues par la loi.", auteur: "Constitution de la Ve République", source: "article 66, 1958" },
            { t: "texte", md: "Concrètement, une **garde à vue** dure au maximum 24 heures, prolongeable une fois par le **procureur** (sauf cas exceptionnels comme le terrorisme). La personne a le droit de voir un avocat et un médecin, de prévenir un proche et de garder le silence. Personne ne peut être retenu indéfiniment sans qu'un magistrat intervienne." },
          ],
        },
        {
          titre: "Qui assure la sécurité ?",
          blocs: [
            { t: "texte", md: "La **police nationale** (des fonctionnaires civils) agit surtout dans les villes. La **gendarmerie nationale** (des militaires) couvre les zones rurales et périurbaines, soit la plus grande partie du territoire. Les deux dépendent du **ministère de l'Intérieur**. La **police municipale**, elle, dépend du maire. Les **pompiers**, souvent volontaires, assurent les secours." },
            { t: "tableau", titre: "Les numéros d'urgence, gratuits", entetes: ["Numéro", "Service", "Quand l'appeler ?"], lignes: [["**15**", "SAMU", "Urgence médicale : malaise, blessure grave"], ["**17**", "Police ou gendarmerie", "Agression, vol en cours, danger"], ["**18**", "Pompiers", "Incendie, accident, personne coincée"], ["**112**", "Numéro d'urgence européen", "Toute urgence, partout dans l'Union européenne"], ["**114**", "Urgences par SMS", "Pour les personnes sourdes ou malentendantes"], ["**119**", "Enfance en danger", "Un enfant maltraité ou en danger"]] },
            { t: "propriete", titre: "La légitime défense (Code pénal, article 122-5)", md: "Elle est reconnue seulement si la riposte répond à une **attaque injuste et actuelle**, contre soi ou contre autrui, et si elle est :\n• **immédiate** : au moment même de l'attaque ;\n• **nécessaire** : pas d'autre moyen d'y échapper ;\n• **proportionnée** : pas plus violente que l'attaque." },
            { t: "verifie", q: "Trois jours après avoir été frappé, Paul retrouve son agresseur et le frappe à son tour. Est-ce de la légitime défense ?", choix: ["Oui, il a été attaqué en premier", "Non, ce n'est pas immédiat : c'est une vengeance"], bonne: 1, explication: "La légitime défense exige une riposte au moment de l'attaque. Plusieurs jours après, c'est une vengeance, punie par la loi. Paul aurait dû porter plainte." },
          ],
        },
        {
          titre: "Sécurité et libertés : trouver l'équilibre",
          blocs: [
            { t: "schema", titre: "Une balance à surveiller", legende: "Plus de sécurité peut réduire les libertés : la loi, le juge et la CNIL veillent à l'équilibre.", svg: `<svg viewBox="0 0 400 240"><text class="texte-main" x="200" y="30" text-anchor="middle">la loi et le juge</text><path class="trait" d="M188 62 L200 44 L212 62 Z"/><line class="trait" x1="200" y1="62" x2="200" y2="196"/><rect class="aplat-papier" x="150" y="196" width="100" height="12"/><rect class="trait" x="150" y="196" width="100" height="12" fill="none"/><line class="trait" x1="70" y1="62" x2="330" y2="62"/><line class="trait-fin" x1="90" y1="62" x2="56" y2="112"/><line class="trait-fin" x1="90" y1="62" x2="124" y2="112"/><line class="trait-fin" x1="310" y1="62" x2="276" y2="112"/><line class="trait-fin" x1="310" y1="62" x2="344" y2="112"/><path class="aplat" d="M48 112 Q90 140 132 112 Z"/><path class="trait" d="M48 112 Q90 140 132 112 Z" fill="none"/><path class="aplat" d="M268 112 Q310 140 352 112 Z"/><path class="trait" d="M268 112 Q310 140 352 112 Z" fill="none"/><text class="texte" x="90" y="150" text-anchor="middle">Sécurité</text><text class="texte-petit" x="90" y="166" text-anchor="middle">caméras, contrôles</text><text class="texte" x="310" y="150" text-anchor="middle">Libertés</text><text class="texte-petit" x="310" y="166" text-anchor="middle">vie privée, aller et venir</text><text class="texte-petit" x="200" y="230" text-anchor="middle">Garanties : autorisation, durée limitée, contrôle du juge et de la CNIL</text></svg>` },
            { t: "texte", md: "La **vidéoprotection** dans l'espace public peut aider à retrouver l'auteur d'un vol. Mais filmer tout le monde, tout le temps, menace la vie privée. La loi l'encadre donc strictement : **autorisation du préfet**, **panneaux** informant le public, images conservées **un mois au maximum**. Un particulier n'a pas le droit de filmer la rue." },
            { t: "texte", md: "Tes **données personnelles** (nom, photos, localisation, messages) sont protégées par le **RGPD**, règlement européen appliqué depuis 2018, sous le contrôle de la **CNIL**, créée en 1978. Tu as le droit de savoir quelles données une entreprise possède sur toi, de les faire corriger et de demander leur effacement. En France, l'âge à partir duquel on peut consentir seul à l'utilisation de ses données est fixé à **15 ans** : c'est la **majorité numérique**, réaffirmée par une loi de 2023 pour l'inscription sur les réseaux sociaux." },
            { t: "frise", titre: "Des textes pour protéger les personnes", evenements: [
              { date: 1789, label: "DDHC", detail: "La sûreté est un droit naturel (art. 2)." },
              { date: 1970, label: "Respect de la vie privée", detail: "Article 9 du Code civil : « Chacun a droit au respect de sa vie privée. »" },
              { date: 1978, label: "Loi Informatique et Libertés", detail: "Création de la CNIL." },
              { date: 2018, label: "RGPD", detail: "Le règlement européen sur la protection des données s'applique." },
              { date: 2023, label: "Majorité numérique", detail: "Une loi prévoit l'accord d'un parent pour s'inscrire sur un réseau social avant 15 ans." },
            ] },
          ],
        },
        {
          titre: "En ligne aussi, des droits et des devoirs",
          blocs: [
            { t: "definition", terme: "Droit à l'image", md: "Chacun peut s'opposer à la diffusion de son image quand il est **reconnaissable**. Il découle du respect de la vie privée (Code civil, art. 9). Publier la photo de quelqu'un exige **son accord**, et celui de ses parents s'il est mineur." },
            { t: "exemple", titre: "Une photo publiée sans accord", md: "Une élève découvre qu'un camarade a publié une photo d'elle, prise à son insu au collège, avec des commentaires moqueurs. Son **droit à l'image** et sa **vie privée** sont atteints : elle peut exiger le retrait. Si les messages se répètent, ou si plusieurs élèves s'y mettent, c'est du **cyberharcèlement**, un délit." },
            { t: "etapes", titre: "Si cela t'arrive", items: [
              { titre: "Garder des preuves", md: "Fais des captures d'écran des publications et des commentaires." },
              { titre: "Demander le retrait", md: "À l'auteur, puis à la plateforme avec le bouton « Signaler »." },
              { titre: "En parler", md: "À un adulte de confiance : parent, professeur, CPE." },
              { titre: "Appeler le 3018", md: "Numéro gratuit et confidentiel contre le cyberharcèlement ; il peut faire supprimer des contenus." },
              { titre: "Porter plainte", md: "Avec tes parents, au commissariat ou à la gendarmerie ; signalement possible sur Pharos." },
            ] },
            { t: "texte", md: "Les droits vont de pair avec des **devoirs** : respecter la loi et les droits des autres, ne pas diffuser l'image d'autrui sans accord, porter secours à une personne en danger quand on le peut sans risque, participer à la vie collective (JDC, juré d'assises si l'on est tiré au sort)." },
            { t: "verifie", q: "Un camarade publie une photo de toi sans ton accord, où tu es reconnaissable. Que dit le droit ?", choix: ["Rien, une photo prise en public est libre", "C'est une atteinte à ton droit à l'image : tu peux exiger le retrait", "C'est permis tant qu'il ne te nomme pas"], bonne: 1, explication: "Ton image t'appartient. Être reconnaissable suffit : la publication sans ton accord porte atteinte à ton droit à l'image." },
          ],
        },
      ],
      bilan: "La sécurité protège, la sûreté protège aussi contre l'arbitraire : entre les deux, la loi fixe l'équilibre, et en ligne comme ailleurs, tes droits s'accompagnent du respect de ceux des autres.",
    },

    "4e-emc-07-laicite": {
      accroche: "Dans ta classe, certains croient en Dieu, d'autres non, d'autres encore se posent des questions. Pourtant, vous apprenez ensemble, avec le même professeur et les mêmes programmes. Ce n'est pas un hasard : c'est l'effet d'un principe que la France a mis plus d'un siècle à construire, la laïcité.",
      objectifs: [
        "Définir la laïcité par ses trois principes",
        "Connaître ses textes fondateurs : lois Ferry, loi de 1905, Constitution de 1958",
        "Comprendre la laïcité à l'école : loi de 2004 et charte de la laïcité",
        "Distinguer ce que la laïcité garantit de ce qu'elle interdit",
      ],
      sections: [
        {
          titre: "Trois principes pour vivre ensemble",
          blocs: [
            { t: "definition", terme: "Laïcité", md: "Le principe qui organise les relations entre l'État et les religions. Il repose sur trois piliers : la **liberté de conscience**, la **séparation** des Églises et de l'État, et l'**égalité** de tous les citoyens, quelles que soient leurs convictions." },
            { t: "schema", titre: "Les trois piliers de la laïcité", legende: "Si un pilier manque, l'édifice tombe : la laïcité tient grâce aux trois à la fois.", svg: `<svg viewBox="0 0 400 250"><path class="aplat" d="M40 70 L200 20 L360 70 Z"/><path class="trait" d="M40 70 L200 20 L360 70 Z" fill="none"/><text class="texte" x="200" y="60" text-anchor="middle">République laïque</text><rect class="aplat-papier" x="40" y="70" width="320" height="16"/><rect class="trait" x="40" y="70" width="320" height="16" fill="none"/><rect class="aplat-papier" x="75" y="86" width="50" height="110"/><rect class="trait" x="75" y="86" width="50" height="110" fill="none"/><rect class="aplat-papier" x="175" y="86" width="50" height="110"/><rect class="trait" x="175" y="86" width="50" height="110" fill="none"/><rect class="aplat-papier" x="275" y="86" width="50" height="110"/><rect class="trait" x="275" y="86" width="50" height="110" fill="none"/><text class="texte-main" x="100" y="146" text-anchor="middle">1</text><text class="texte-main" x="200" y="146" text-anchor="middle">2</text><text class="texte-main" x="300" y="146" text-anchor="middle">3</text><rect class="aplat" x="30" y="196" width="340" height="12"/><rect class="trait" x="30" y="196" width="340" height="12" fill="none"/><text class="texte" x="100" y="228" text-anchor="middle">Liberté</text><text class="texte-petit" x="100" y="243" text-anchor="middle">de conscience</text><text class="texte" x="200" y="228" text-anchor="middle">Séparation</text><text class="texte-petit" x="200" y="243" text-anchor="middle">Églises et État</text><text class="texte" x="300" y="228" text-anchor="middle">Égalité</text><text class="texte-petit" x="300" y="243" text-anchor="middle">de tous</text></svg>` },
            { t: "definition", terme: "Liberté de conscience", md: "La liberté de **croire**, de **ne pas croire**, ou de **changer** de religion ou de conviction. Elle comprend la liberté de pratiquer un culte, dans le respect de l'ordre public." },
            { t: "attention", md: "La laïcité **n'est pas l'athéisme**. L'athéisme est une conviction personnelle (ne pas croire en Dieu). La laïcité est une règle d'organisation de l'État, qui **protège toutes les convictions**, religieuses ou non, sans en favoriser aucune." },
            { t: "verifie", q: "La laïcité interdit-elle aux Français d'avoir une religion ?", choix: ["Oui, la religion est interdite en France", "Non, elle garantit au contraire la liberté de croire ou de ne pas croire"], bonne: 1, explication: "La laïcité protège la liberté de conscience. Chacun peut avoir une religion, n'en avoir aucune ou en changer : c'est l'État qui reste neutre, pas les citoyens." },
          ],
        },
        {
          titre: "Une construction historique",
          blocs: [
            { t: "texte", md: "Sous l'Ancien Régime, le catholicisme était religion d'État et les protestants ou les juifs subissaient des discriminations. La Révolution proclame la liberté d'opinion « même religieuse » (DDHC, art. 10). Puis la République laïcise d'abord l'**école**, avec les **lois Ferry** (1881-1882), avant de séparer l'État de toutes les Églises en **1905**." },
            { t: "frise", titre: "Les étapes de la laïcité en France", evenements: [
              { date: 1789, label: "DDHC, article 10", detail: "Nul ne doit être inquiété pour ses opinions, même religieuses." },
              { date: 1882, label: "Lois Ferry", detail: "L'école publique devient gratuite (1881), obligatoire et laïque (1882)." },
              { date: 1905, label: "Loi de séparation", detail: "Loi du 9 décembre 1905 : séparation des Églises et de l'État." },
              { date: 1946, label: "République laïque", detail: "La laïcité entre dans la Constitution de la IVe République." },
              { date: 1958, label: "Constitution de la Ve République", detail: "Article 1 : la France est une République laïque." },
              { date: 2004, label: "Loi du 15 mars 2004", detail: "Signes religieux ostensibles interdits aux élèves des écoles publiques." },
              { date: 2013, label: "Charte de la laïcité à l'école", detail: "15 articles affichés dans chaque établissement public." },
            ] },
            { t: "citation", texte: "La République assure la liberté de conscience. […] La République ne reconnaît, ne salarie ni ne subventionne aucun culte.", auteur: "Loi de séparation des Églises et de l'État", source: "articles 1 et 2, 9 décembre 1905" },
            { t: "citation", texte: "La France est une République indivisible, laïque, démocratique et sociale. Elle assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion. Elle respecte toutes les croyances.", auteur: "Constitution de la Ve République", source: "article 1, 1958" },
            { t: "savais-tu", md: "En **Alsace et en Moselle**, qui étaient allemandes en 1905, la loi de séparation ne s'applique pas : un ancien régime, le Concordat, y est toujours en vigueur, et certains ministres des cultes y sont rémunérés par l'État." },
          ],
        },
        {
          titre: "La laïcité à l'école",
          blocs: [
            { t: "propriete", titre: "Neutralité des agents, liberté des usagers", md: "Les **agents publics** (professeurs, policiers, agents de mairie, personnel hospitalier) sont tenus à la **neutralité** : ils ne manifestent pas leurs convictions dans l'exercice de leurs fonctions, pour traiter tout le monde de la même façon. Les **usagers** des services publics et les passants dans la rue restent **libres** de montrer leurs convictions, sauf règles particulières fixées par la loi." },
            { t: "texte", md: "Pour les élèves, la **loi du 15 mars 2004** fixe une règle particulière : dans les écoles, collèges et lycées **publics**, le port de signes ou de tenues par lesquels les élèves manifestent **ostensiblement** une appartenance religieuse est interdit. Un dialogue avec l'élève précède toujours une éventuelle sanction. Cette loi ne s'applique ni aux universités, ni aux établissements privés, ni à la rue." },
            { t: "texte", md: "La **charte de la laïcité à l'école** (2013) explique ces règles en 15 articles. Son article 12 précise que les enseignements sont laïques et qu'==aucun élève ne peut invoquer une conviction religieuse ou politique pour contester un enseignement== au programme." },
            { t: "exemple", titre: "Une journée dans un collège public", md: "Le professeur d'histoire ne porte aucun signe religieux et ne dit pas ce qu'il pense des religions : il est **neutre**. Pourtant, il explique la naissance de l'islam ou la Réforme protestante : **enseigner le fait religieux, ce n'est pas prêcher**. En SVT, un élève ne peut pas refuser le cours sur l'évolution des êtres vivants pour des raisons religieuses. À la cantine, un repas sans viande peut être proposé, sans que ce soit une obligation légale." },
            { t: "verifie", q: "Laquelle de ces personnes n'est PAS soumise à l'obligation de neutralité religieuse ?", choix: ["Un professeur de collège public", "Un passant dans la rue", "Un agent d'accueil de la mairie", "Un policier en service"], bonne: 1, explication: "La neutralité concerne les agents publics dans leurs fonctions. Un passant est un simple citoyen : il est libre de manifester ses convictions dans l'espace public." },
          ],
        },
        {
          titre: "Ce que la laïcité garantit, ce qu'elle interdit",
          blocs: [
            { t: "tableau", titre: "Bien comprendre la laïcité", entetes: ["La laïcité garantit…", "La laïcité interdit…"], lignes: [["De croire, de ne pas croire, de changer de religion", "Que l'État favorise ou finance une religion"], ["L'égalité de tous, quelle que soit sa conviction", "Qu'un agent public affiche ses convictions dans ses fonctions"], ["Le libre exercice des cultes, dans le respect de l'ordre public", "Qu'on impose sa religion ou son absence de religion à autrui"], ["D'étudier les religions comme objets de connaissance", "De contester un enseignement au nom d'une conviction"]] },
            { t: "astuce", md: "Pour retenir : la laïcité, c'est ==l'État neutre pour que les citoyens soient libres==. La neutralité est l'affaire de l'État et de ses agents ; la liberté est celle de chacun." },
            { t: "verifie", q: "À l'école laïque, peut-on parler des religions ?", choix: ["Non, c'est interdit", "Oui, comme objets de connaissance, en histoire, en lettres ou en arts", "Oui, mais seulement pour dire laquelle est la vraie"], bonne: 1, explication: "On étudie le fait religieux pour comprendre l'histoire, les œuvres d'art, les sociétés. L'école ne dit pas ce qu'il faut croire : elle transmet des savoirs." },
          ],
        },
      ],
      bilan: "La laïcité, c'est un État neutre qui ne reconnaît aucun culte pour que chacun soit libre de croire ou de ne pas croire, et égal aux autres quelles que soient ses convictions.",
    },

    "4e-emc-08-engagement-citoyennete": {
      accroche: "À la cantine de ton collège, des kilos de pain finissent chaque jour à la poubelle. Tu peux soupirer… ou agir. Proposer une pesée des déchets, lancer une affiche, convaincre le conseil de la vie collégienne : s'engager commence souvent par un petit pas, bien avant 18 ans.",
      objectifs: [
        "Identifier les différentes formes d'engagement et leur cadre légal",
        "Connaître le parcours citoyen des jeunes : recensement, JDC, inscription électorale",
        "Distinguer bénévole, volontaire en service civique et salarié",
        "Comprendre le rôle des élections, des pétitions, des ONG et des lanceurs d'alerte",
      ],
      sections: [
        {
          titre: "S'engager, c'est agir pour les autres",
          blocs: [
            { t: "definition", terme: "Engagement", md: "Agir **volontairement**, seul ou avec d'autres, pour une cause ou pour l'**intérêt général**. Personne n'y est obligé : c'est un choix libre." },
            { t: "tableau", titre: "Les grandes formes d'engagement", entetes: ["Forme", "Cadre", "Exemple"], lignes: [["**Associative**", "Loi du 1er juillet 1901", "Être bénévole aux Restos du cœur, dans un club sportif"], ["**Syndicale**", "Loi de 1884", "Défendre les salariés d'une entreprise"], ["**Politique**", "Partis, élections", "Militer dans un parti, être candidat aux municipales"], ["**Humanitaire**", "ONG", "Partir avec Médecins sans frontières"], ["**Scolaire**", "Règlement du collège", "Être délégué de classe ou éco-délégué"]] },
            { t: "frise", titre: "Des dates pour l'engagement", evenements: [
              { date: 1863, label: "Croix-Rouge", detail: "Fondée à Genève à l'initiative d'Henry Dunant pour secourir les blessés de guerre." },
              { date: 1884, label: "Liberté syndicale", detail: "La loi Waldeck-Rousseau autorise les syndicats." },
              { date: 1901, label: "Liberté d'association", detail: "Loi du 1er juillet 1901." },
              { date: 1961, label: "Amnesty International", detail: "Défense des droits humains ; prix Nobel de la paix en 1977." },
              { date: 1971, label: "Médecins sans frontières", detail: "Soins d'urgence ; prix Nobel de la paix en 1999." },
              { date: 1974, label: "Vote à 18 ans", detail: "La majorité passe de 21 à 18 ans." },
              { date: 2010, label: "Service civique", detail: "Des missions d'intérêt général pour les 16-25 ans." },
              { date: 2016, label: "Loi Sapin II", detail: "Un statut protège les lanceurs d'alerte." },
            ] },
          ],
        },
        {
          titre: "Les outils du citoyen",
          blocs: [
            { t: "liste", items: [
              "**Le vote** : à partir de 18 ans. C'est un droit, pas une obligation : en France, on n'est pas puni si l'on ne vote pas.",
              "**La pétition** : un texte signé par de nombreuses personnes pour demander quelque chose à une autorité. Le site de l'Assemblée nationale en accueille en ligne ; au-delà de 500 000 signatures, elle peut être débattue en séance.",
              "**La manifestation** : déclarée à l'avance en mairie ou en préfecture.",
              "**La grève** : un droit reconnu par la Constitution, qui permet aux salariés d'arrêter collectivement le travail pour défendre leurs revendications.",
            ] },
            { t: "attention", md: "Une pétition n'oblige pas l'autorité à céder : elle **attire l'attention** et montre qu'une demande est partagée. C'est souvent le point de départ d'un débat public." },
            { t: "definition", terme: "Lanceur d'alerte", md: "Une personne qui révèle, **de bonne foi** et sans contrepartie financière, une menace ou un préjudice grave pour l'**intérêt général** (pollution, fraude, danger pour la santé). La loi **Sapin II** (2016) et la loi du 21 mars 2022 la protègent contre les **représailles**, comme un licenciement." },
            { t: "verifie", q: "Une salariée révèle, preuves à l'appui, que son entreprise rejette en secret des produits toxiques dans une rivière. Que prévoit la loi ?", choix: ["Elle peut être licenciée pour avoir trahi son entreprise", "Elle est protégée comme lanceuse d'alerte", "Elle doit payer une amende"], bonne: 1, explication: "Elle agit de bonne foi pour l'intérêt général : la loi lui reconnaît le statut de lanceur d'alerte et interdit les représailles." },
          ],
        },
        {
          titre: "Le parcours citoyen des jeunes",
          blocs: [
            { t: "etapes", titre: "De 16 à 18 ans, étape par étape", items: [
              { titre: "Recensement à 16 ans", md: "Dans les trois mois qui suivent ton 16e anniversaire, en mairie ou en ligne. L'attestation est demandée pour s'inscrire aux examens (CAP, bac, permis de conduire)." },
              { titre: "Journée défense et citoyenneté", md: "La **JDC** est **obligatoire** pour tous, filles et garçons. On y découvre la défense nationale, les gestes de premiers secours, les métiers de l'engagement." },
              { titre: "Inscription automatique", md: "Grâce au recensement, tu es inscrit d'office sur les listes électorales à 18 ans." },
              { titre: "Premier vote", md: "À 18 ans, tu deviens électeur : tu peux voter à toutes les élections." },
            ] },
            { t: "tableau", titre: "Bénévole, volontaire ou salarié ?", entetes: ["Statut", "Bénévole", "Volontaire en service civique", "Salarié"], lignes: [["Qui ?", "Tout le monde", "16-25 ans (30 ans en situation de handicap)", "Une personne embauchée"], ["Durée", "Libre", "6 à 12 mois", "Fixée par le contrat"], ["Argent", "**Aucun** : il donne son temps", "Une **indemnité** d'un peu plus de 600 € par mois", "Un **salaire**"]] },
            { t: "verifie", q: "La Journée défense et citoyenneté est-elle obligatoire pour les filles comme pour les garçons ?", choix: ["Oui, pour tous les jeunes Français", "Non, seulement pour les garçons", "Non, elle est facultative"], bonne: 0, explication: "Depuis sa création, la JDC concerne tous les jeunes Français, filles et garçons. Son certificat est demandé pour passer certains examens avant 25 ans." },
          ],
        },
        {
          titre: "S'engager dès le collège",
          blocs: [
            { t: "texte", md: "Pas besoin d'attendre 18 ans. Au collège, tu peux être **délégué de classe** (tu représentes tes camarades au conseil de classe), membre du **conseil de la vie collégienne** ou **éco-délégué**. Depuis 2020, un éco-délégué est élu dans chaque classe de collège et de lycée pour porter des projets de développement durable." },
            { t: "exemple", titre: "Une éco-déléguée contre le gaspillage", etapes: ["**Constater** : la classe remarque que la cantine jette beaucoup de pain.", "**Mesurer** : l'éco-déléguée propose une pesée hebdomadaire des déchets pendant un mois.", "**Proposer** : elle présente les résultats au conseil de la vie collégienne, avec une affiche de sensibilisation.", "**Agir ensemble** : la direction coupe le pain en plus petites portions ; une association locale récupère les surplus."] },
            { t: "savais-tu", md: "Les grandes ONG sont souvent nées de l'indignation de quelques personnes : **Amnesty International** est partie en 1961 d'un article de l'avocat britannique Peter Benenson sur deux étudiants emprisonnés pour avoir porté un toast à la liberté." },
          ],
        },
      ],
      bilan: "S'engager, c'est passer de « on devrait » à « je fais » : par une association, un vote, une pétition ou un projet de classe, chaque citoyen peut peser sur la vie commune.",
    },
  },
};
