// Cours ÉCLORE — 3e Arts plastiques. Schéma : docs/COURS.md
export default {
  id: "3e-arts-plastiques",
  chapitres: {
    "3e-arts-plastiques-01-art-engage-memoire": {
      accroche: "Une toile de presque huit mètres de long, sans une seule couleur : du noir, du blanc, du gris. Pas un avion, pas une bombe, et pourtant le monde entier y reconnaît un bombardement. Comment une peinture peut-elle crier plus fort qu'un journal ?",
      objectifs: [
        "Situer *Guernica*, Otto Dix et Käthe Kollwitz dans leur contexte historique",
        "Distinguer une image de propagande d'une œuvre de dénonciation",
        "Expliquer comment des choix plastiques (couleur, déformation, composition) servent un message",
      ],
      sections: [
        {
          titre: "Guernica : peindre un massacre",
          blocs: [
            { t: "texte", md: "Le **26 avril 1937**, en pleine guerre d'Espagne, la petite ville basque de **Guernica** est bombardée par l'aviation allemande (la Légion Condor), alliée du général **Franco**. C'est jour de marché : des centaines de civils meurent.\n\nPablo **Picasso**, Espagnol installé à Paris, doit justement peindre une grande toile pour le pavillon de la République espagnole à l'Exposition internationale de Paris. Il change de sujet et peint, en quelques semaines, une **huile sur toile de 3,49 m × 7,77 m** : *Guernica*." },
            { t: "texte", md: "Décrivons-la sans la voir. À gauche, un **taureau** domine une **mère qui hurle**, son enfant mort dans les bras. Au centre, un **cheval** transpercé ouvre la bouche. En haut, une **ampoule** en forme d'œil remplace le soleil. À droite, une femme passe une lampe par une fenêtre, une autre tombe dans les flammes. Au sol, un guerrier brisé tient une épée cassée." },
            { t: "schema", titre: "La composition de Guernica, en schéma", legende: "Schéma de placement des figures (ce n'est pas une reproduction) : un grand triangle central rassemble les victimes et guide l'œil vers la lumière.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat-papier" x="20" y="20" width="360" height="161"/><rect class="trait" x="20" y="20" width="360" height="161"/><path class="aplat" d="M200 40 L300 176 L95 176 Z"/><path class="pointille" d="M200 40 L300 176 L95 176 Z"/><circle class="aplat-fort" cx="200" cy="40" r="5"/><text class="texte-petit" x="210" y="36">ampoule</text><text class="texte-petit" x="58" y="48" text-anchor="middle">taureau</text><text class="texte-petit" x="26" y="150">mère et enfant</text><text class="texte" x="200" y="118" text-anchor="middle">cheval</text><text class="texte-petit" x="300" y="56" text-anchor="middle">femme à la lampe</text><text class="texte-petit" x="372" y="98" text-anchor="end">femme dans le feu</text><text class="texte-petit" x="334" y="164" text-anchor="middle">femme qui fuit</text><text class="texte-petit" x="160" y="168" text-anchor="middle">guerrier à terre</text><text class="texte-pigment" x="200" y="204" text-anchor="middle">triangle de composition</text><text class="texte-petit" x="200" y="222" text-anchor="middle">format : 349 × 777 cm, comme une fresque</text></svg>` },
            { t: "definition", terme: "Art engagé", md: "Une œuvre par laquelle l'artiste **prend position** sur un fait politique ou social. Elle ne se contente pas de montrer : elle veut faire réagir le spectateur, avec des **moyens plastiques** (couleur, déformation, contraste, symbole, détournement)." },
            { t: "verifie", q: "Pourquoi Picasso peint-il *Guernica* seulement en noir, blanc et gris ?", choix: ["Il n'avait plus de peinture de couleur", "Pour évoquer la photo de presse et le deuil", "Parce que la toile devait être imprimée dans un journal"], bonne: 1, explication: "L'absence de couleur rappelle les photographies des journaux de 1937 et le deuil. Le spectateur n'est pas distrait : il ne voit que la souffrance." },
          ],
        },
        {
          titre: "Comment les formes dénoncent",
          blocs: [
            { t: "texte", md: "Picasso ne montre **ni les bourreaux ni les avions**. Il montre les **victimes**. C'est un choix fort : la toile ne raconte pas une bataille, elle fait ressentir la douleur.\n\nLes corps sont **déformés** à la manière cubiste : bouches ouvertes en cri, yeux déplacés, membres brisés. Les formes sont tranchantes, en éclats, comme après une explosion. La **composition en triangle** concentre le regard au centre. L'**ampoule** peut se lire comme un œil qui voit tout, ou comme la technique moderne qui sert à tuer (en espagnol, *bombilla*, l'ampoule, rappelle *bomba*, la bombe)." },
            { t: "exemple", titre: "Dénoncer par la forme, pas par le récit", md: "Un élève dit : « On ne voit même pas le bombardement. » Justement ! En supprimant les avions, Picasso transforme un fait précis en **symbole universel** de la guerre contre les civils. C'est pour cela que *Guernica* parle encore à des pays qui n'ont jamais connu la guerre d'Espagne." },
            { t: "savais-tu", md: "Picasso refuse que *Guernica* entre en Espagne tant que le pays n'est pas une démocratie. La toile reste au MoMA de New York et n'arrive à Madrid qu'en **1981**, après sa mort et la fin du franquisme. Elle est aujourd'hui au **musée Reina Sofía**." },
          ],
        },
        {
          titre: "Propagande ou dénonciation ?",
          blocs: [
            { t: "texte", md: "Toutes les images politiques ne se ressemblent pas. Certaines servent un pouvoir, d'autres le combattent. Avant Picasso, deux artistes allemands avaient déjà fait de la Première Guerre mondiale le sujet de leur œuvre : **Otto Dix**, ancien soldat, peint le triptyque *La Guerre* (1929-1932) avec ses tranchées et ses cadavres ; **Käthe Kollwitz**, qui a perdu son fils au front, dessine l'affiche *Plus jamais la guerre* (1924). Arrivés au pouvoir, les nazis qualifient leur art de « dégénéré » et le retirent des musées." },
            { t: "tableau", titre: "Deux usages opposés de l'image", entetes: ["", "Image de **propagande**", "Œuvre de **dénonciation**"], lignes: [["But", "Servir un pouvoir, convaincre le peuple", "Montrer ce que le pouvoir veut cacher"], ["Procédés", "Slogan court, couleurs franches, héros idéalisé, chef glorifié", "Déformation, contraste, symbole, détournement"], ["Spectateur", "Il doit obéir, admirer", "Il doit réfléchir, s'indigner"], ["Exemples", "Affiches soviétiques, nazies, de Vichy", "Dix, Kollwitz, *Guernica*, Banksy"]] },
            { t: "attention", md: "Une image de propagande n'est pas forcément laide ou grossière : elle est souvent **très efficace**, simple et belle. C'est sa **fonction** (servir un pouvoir) qui la définit, pas sa qualité." },
            { t: "verifie", q: "Les nazis ont-ils exposé Dix et Kollwitz pour les honorer ?", choix: ["Oui, comme héros de la guerre", "Non, ils les ont qualifiés d'art « dégénéré »", "Oui, mais seulement Kollwitz"], bonne: 1, explication: "En 1937, l'exposition nazie « Art dégénéré » à Munich ridiculise les artistes modernes, dont Dix. Leurs œuvres sont retirées des musées, Kollwitz est exclue de l'Académie des arts." },
          ],
        },
        {
          titre: "Art engagé d'hier et d'aujourd'hui, art de mémoire",
          blocs: [
            { t: "texte", md: "L'art engagé continue. **Banksy**, artiste de street art anonyme venu de Bristol, utilise le **pochoir** : rapide à peindre, facile à reproduire. Il détourne des images connues (une fillette, un soldat, un manifestant qui lance… un bouquet de fleurs) pour critiquer la guerre, la surveillance ou la société de consommation.\n\nD'autres œuvres servent la **mémoire** : monuments aux morts, mémoriaux, photographies, installations. Elles aident une société à **se souvenir** pour ne pas recommencer. À Gentioux, dans la Creuse, un monument aux morts porte même l'inscription « Maudite soit la guerre »." },
            { t: "frise", titre: "Des œuvres contre la guerre", evenements: [{ date: 1924, label: "Kollwitz, *Plus jamais la guerre*", detail: "Affiche lithographiée pour un rassemblement pacifiste." }, { date: 1929, label: "Dix commence *La Guerre*", detail: "Triptyque achevé en 1932, sur la Première Guerre mondiale." }, { date: 1937, label: "Bombardement et *Guernica*", detail: "La toile est montrée à l'Exposition internationale de Paris." }, { date: 1937, label: "Exposition « Art dégénéré »", detail: "À Munich, les nazis ridiculisent l'art moderne." }, { date: 1981, label: "*Guernica* arrive en Espagne", detail: "Après la fin du franquisme." }, { date: 2005, label: "Banksy sur le mur de Cisjordanie", detail: "Des pochoirs sur le mur de séparation, comme des fenêtres vers ailleurs." }] },
            { t: "propriete", titre: "Analyser une œuvre engagée", md: "Pose toujours trois questions : **contre quoi** l'artiste prend-il position ? **Avec quels moyens plastiques** ? **Quel effet** sur le spectateur ? Une bonne réponse relie chaque idée à un élément visible." },
          ],
        },
      ],
      bilan: "Une œuvre engagée ne raconte pas seulement l'histoire : par la couleur, la déformation et la composition, elle oblige le spectateur à regarder ce qu'on voudrait oublier.",
    },
    "3e-arts-plastiques-02-ruptures-xxe": {
      accroche: "En 1905, un critique découvre une salle de tableaux aux couleurs hurlantes et s'écrie qu'il se trouve parmi des « fauves ». Douze ans plus tard, un artiste expose un urinoir. En trente ans, les peintres ont cassé toutes les règles héritées de la Renaissance. Pourquoi, et comment ?",
      objectifs: [
        "Reconnaître fauvisme, expressionnisme, cubisme, abstraction, dada et surréalisme",
        "Associer artistes, œuvres et dates clés des avant-gardes",
        "Expliquer en quoi chaque mouvement rompt avec la tradition",
      ],
      sections: [
        {
          titre: "Pourquoi rompre avec la tradition ?",
          blocs: [
            { t: "texte", md: "Depuis la Renaissance, un bon tableau devait **ressembler** au réel : perspective, couleurs justes, modelé, beau idéal. Mais au XIXe siècle, la **photographie** fait mieux que le peintre pour copier le monde. Alors les artistes se demandent : à quoi sert encore la peinture ?\n\nLeur réponse : à faire ce que la photo ne sait pas faire. Exprimer une émotion, montrer un objet sous tous ses angles, peindre l'invisible, le rêve, ou la couleur pour elle-même." },
            { t: "citation", texte: "Se rappeler qu'un tableau, avant d'être un cheval de bataille, une femme nue ou une quelconque anecdote, est essentiellement une surface plane recouverte de couleurs en un certain ordre assemblées.", auteur: "Maurice Denis", source: "« Définition du néo-traditionnisme », 1890" },
            { t: "definition", terme: "Avant-garde", md: "Un groupe d'artistes qui se place **en avance** sur son temps et **rompt** volontairement avec les règles admises. Les avant-gardes du début du XXe siècle publient souvent des **manifestes** et provoquent des **scandales**." },
          ],
        },
        {
          titre: "Libérer la couleur et la forme : fauvisme, expressionnisme, cubisme",
          blocs: [
            { t: "texte", md: "Au **Salon d'automne de 1905**, **Matisse**, **Derain** et **Vlaminck** peignent avec des **couleurs pures**, sorties du tube, posées en larges aplats : un visage vert, un arbre rouge. Le critique **Louis Vauxcelles** parle de « fauves ». C'est le **fauvisme** : la couleur ne sert plus à imiter, elle exprime.\n\nL'**expressionnisme** va plus loin dans l'émotion : il déforme et exagère. Le Norvégien **Munch** l'annonce avec *Le Cri* (1893) ; en Allemagne naissent les groupes **Die Brücke** (Dresde, 1905) et **Der Blaue Reiter** (Munich, 1911)." },
            { t: "texte", md: "En **1907**, **Picasso** peint *Les Demoiselles d'Avignon* : des corps anguleux, des visages comme des masques. Avec **Braque**, il invente le **cubisme**. L'objet est **décomposé en facettes** et montré **sous plusieurs angles à la fois** : une bouteille vue de face et de dessus, dans le même tableau. Vers 1910, leurs toiles se ressemblent tant, en gris et ocres, qu'on les confond. Vers **1912**, ils collent dans leurs tableaux du papier peint, du journal : ce sont les **papiers collés**." },
            { t: "verifie", q: "Un tableau montre une guitare vue à la fois de face et de profil, découpée en facettes. Quel mouvement ?", choix: ["Le fauvisme", "Le cubisme", "Le surréalisme"], bonne: 1, explication: "Montrer un objet sous plusieurs points de vue simultanés, en facettes, c'est la signature du cubisme de Picasso et Braque. Elle casse la perspective à un seul point de vue." },
          ],
        },
        {
          titre: "Plus d'objet du tout : l'abstraction",
          blocs: [
            { t: "texte", md: "Vers **1910-1913**, **Kandinsky** ose une peinture où l'on ne reconnaît **plus rien** : des taches, des lignes, des couleurs qui vibrent comme de la **musique**. C'est l'**abstraction lyrique**.\n\nLe Néerlandais **Mondrian** choisit l'inverse, une abstraction **géométrique** : à partir de **1917** (le néoplasticisme, revue *De Stijl*), il ne garde que des **lignes noires horizontales et verticales**, le **blanc** (et des gris) et les **trois couleurs primaires** : rouge, jaune, bleu." },
            { t: "schema", titre: "Une grille à la manière de Mondrian", legende: "Composition inventée pour l'exemple : seulement l'horizontale, la verticale, le noir, le blanc et les trois primaires. L'équilibre vient des proportions, pas de la symétrie.", svg: `<svg viewBox="0 0 400 260"><rect class="c-noir" x="90" y="20" width="220" height="220"/><rect class="c-blanc" x="90" y="20" width="60" height="60"/><rect class="c-blanc" x="90" y="88" width="60" height="62"/><rect class="c-rouge" x="158" y="20" width="152" height="130"/><rect class="c-bleu" x="90" y="158" width="60" height="82"/><rect class="c-blanc" x="158" y="158" width="112" height="82"/><rect class="c-jaune" x="278" y="158" width="32" height="38"/><rect class="c-blanc" x="278" y="204" width="32" height="36"/><rect class="trait-fin" x="90" y="20" width="220" height="220"/><text class="texte-petit" x="80" y="88" text-anchor="end">ligne noire</text><text class="texte-petit" x="80" y="202" text-anchor="end">bleu</text><text class="texte-petit" x="320" y="90">rouge</text><text class="texte-petit" x="320" y="181">jaune</text><text class="texte-petit" x="320" y="226">blanc</text><text class="texte-petit" x="200" y="256" text-anchor="middle">horizontales + verticales + 3 primaires</text></svg>` },
            { t: "attention", md: "« Abstrait » ne veut pas dire « fait n'importe comment ». Mondrian pouvait passer des mois à déplacer une ligne de quelques millimètres pour trouver l'**équilibre** parfait." },
          ],
        },
        {
          titre: "Se moquer de l'art, explorer le rêve : dada et surréalisme",
          blocs: [
            { t: "texte", md: "En **1916**, pendant la guerre, des artistes réfugiés en Suisse, pays neutre, ouvrent le **Cabaret Voltaire** à **Zurich**. Ils fondent **Dada** : un mouvement qui se moque de tout, de l'art comme de la société qui a produit le massacre des tranchées.\n\n**Marcel Duchamp** invente le **ready-made** : un objet tout fait, acheté dans le commerce, devient œuvre parce que l'artiste le **choisit**, le titre et l'expose. En **1917**, il présente un urinoir renversé signé « R. Mutt » : *Fontaine*. Le geste pose une question explosive : qu'est-ce qui fait une œuvre d'art ?" },
            { t: "texte", md: "En **1924**, **André Breton** publie le *Manifeste du surréalisme*. Les surréalistes explorent le **rêve** et l'**inconscient** : écriture automatique, jeu du **cadavre exquis**. **Dalí** peint des montres molles (*La Persistance de la mémoire*, 1931) avec une précision photographique ; **Magritte** écrit « Ceci n'est pas une pipe » sous une pipe (*La Trahison des images*, 1929) pour rappeler qu'une image n'est pas la chose." },
            { t: "frise", titre: "Les ruptures du XXe siècle", evenements: [{ date: 1905, label: "Fauvisme", detail: "Salon d'automne : Matisse, Derain, Vlaminck." }, { date: 1907, label: "Cubisme", detail: "*Les Demoiselles d'Avignon*, Picasso." }, { date: 1910, label: "Abstraction", detail: "Kandinsky, puis Malevitch et Mondrian." }, { date: 1916, label: "Dada", detail: "Cabaret Voltaire, Zurich ; ready-mades de Duchamp." }, { date: 1924, label: "Surréalisme", detail: "Manifeste d'André Breton." }, { date: 1956, label: "Pop art", detail: "Premiers collages de Richard Hamilton à Londres." }, { date: 1970, label: "Land art", detail: "*Spiral Jetty*, Robert Smithson." }, { date: 1990, label: "Art numérique", detail: "Écrans, code, interactivité, puis IA." }] },
          ],
        },
        {
          titre: "Reconnaître un mouvement d'un coup d'œil",
          blocs: [
            { t: "tableau", titre: "Mouvements, artistes, procédés", entetes: ["Mouvement", "Date, lieu", "Artistes", "Ce qu'il casse"], lignes: [["**Fauvisme**", "1905, Paris", "Matisse, Derain", "La couleur réaliste"], ["**Expressionnisme**", "1905-1911, Allemagne", "Munch, Kirchner", "Le beau : il déforme pour exprimer"], ["**Cubisme**", "1907, Paris", "Picasso, Braque", "La perspective à un seul point de vue"], ["**Abstraction**", "1910-1917", "Kandinsky, Mondrian", "La représentation du réel"], ["**Dada**", "1916, Zurich", "Duchamp, Tzara", "L'idée même d'œuvre d'art"], ["**Surréalisme**", "1924, Paris", "Breton, Dalí, Magritte", "La logique : place au rêve"]] },
            { t: "exemple", titre: "Méthode des quatre questions", etapes: ["La couleur est-elle réaliste ? Non, elle hurle en tons purs : **fauvisme**.", "L'espace est-il découpé en facettes, vu de plusieurs côtés ? **Cubisme**.", "Plus aucun objet reconnaissable ? **Abstraction**.", "L'image est précise mais impossible, comme un rêve ? **Surréalisme**."] },
            { t: "verifie", q: "Pourquoi Dada naît-il à Zurich en 1916 ?", choix: ["Parce que la Suisse, neutre, accueille des artistes qui fuient la guerre", "Parce que Zurich était la capitale de l'art moderne", "Parce que Duchamp y habitait"], bonne: 0, explication: "En pleine Première Guerre mondiale, la Suisse neutre sert de refuge. Dada y naît de la révolte contre une société capable d'un tel massacre." },
          ],
        },
      ],
      bilan: "De 1905 à 1924, les avant-gardes libèrent la couleur, brisent la perspective, abandonnent l'objet et finissent par demander : qu'est-ce que l'art ? Toute la suite du siècle découle de ces ruptures.",
    },
    "3e-arts-plastiques-03-apres-1945": {
      accroche: "Une boîte de soupe peinte trente-deux fois, une voiture écrasée en cube, une spirale de rochers au milieu d'un lac salé, une artiste assise sans bouger pendant trois mois. Après 1945, l'art sort du tableau et descend dans la rue, dans la nature, dans le corps.",
      objectifs: [
        "Identifier le pop art, le nouveau réalisme, l'art conceptuel et le land art",
        "Comprendre ce que sont la performance, l'art vidéo et l'art numérique",
        "Relier chaque pratique à la société qui l'a vue naître",
      ],
      sections: [
        {
          titre: "Le pop art : l'art du supermarché",
          blocs: [
            { t: "texte", md: "Après la guerre, l'Europe et surtout les États-Unis entrent dans la **société de consommation** : publicité, télévision, stars, supermarchés. Des artistes décident de prendre ces images banales comme sujet. Né à Londres au milieu des années 1950 (Richard Hamilton), le **pop art** (de *popular*, populaire) explose à New York dans les années 1960." },
            { t: "texte", md: "**Andy Warhol** peint *32 boîtes de soupe Campbell* (1962), toutes presque identiques. La même année, il adopte la **sérigraphie**, une technique d'impression industrielle, pour ses portraits de **Marilyn Monroe**. **Roy Lichtenstein** agrandit des cases de bande dessinée et imite à la main les **points de trame** de l'imprimerie (*Whaam!*, 1963)." },
            { t: "exemple", titre: "Pourquoi répéter la même image ?", md: "Dans un supermarché, toutes les boîtes sont pareilles, rangées en lignes. Warhol ne peint pas une soupe : il peint la **répétition industrielle**. En choisissant la sérigraphie, une technique de machine, il rapproche l'atelier d'une usine (il appelle d'ailleurs son atelier *The Factory*). La forme et le procédé disent la même chose que le sujet." },
            { t: "verifie", q: "Pourquoi Warhol utilise-t-il la sérigraphie plutôt que le pinceau ?", choix: ["Parce qu'elle est plus rapide à sécher", "Pour reproduire une image en série, comme l'industrie", "Parce qu'il ne savait pas peindre"], bonne: 1, explication: "La sérigraphie permet de répéter une image à l'identique : elle imite la production de masse que Warhol veut montrer. Le choix technique porte le message." },
          ],
        },
        {
          titre: "Le nouveau réalisme : s'emparer du réel",
          blocs: [
            { t: "texte", md: "En France, en **1960**, le critique **Pierre Restany** réunit des artistes qui, au lieu de représenter le réel, **se l'approprient** directement : c'est le **nouveau réalisme**. Le réel, ici, ce sont les objets, les déchets, les voitures, la couleur pure." },
            { t: "tableau", titre: "Quatre nouveaux réalistes", entetes: ["Artiste", "Pratique", "Ce que cela interroge"], lignes: [["**Yves Klein**", "Monochromes d'un bleu qu'il fait breveter, l'IKB (*International Klein Blue*)", "La couleur seule peut-elle être une œuvre ?"], ["**Niki de Saint Phalle**", "*Tirs* à la carabine sur des poches de peinture (1961), puis les *Nanas*", "La violence, la place des femmes"], ["**César**", "*Compressions* : voitures écrasées en blocs", "Le déchet de la société de consommation"], ["**Arman**", "*Accumulations* d'objets identiques, poubelles sous vitrine", "La surabondance des objets"]] },
            { t: "savais-tu", md: "Le bleu IKB est si intense qu'il semble absorber le regard. Klein mélangeait un pigment pur à un liant spécial pour que la poudre garde tout son éclat, sans être affadie par l'huile." },
          ],
        },
        {
          titre: "L'idée avant l'objet, la nature comme atelier",
          blocs: [
            { t: "definition", terme: "Art conceptuel", md: "Un art où **l'idée compte plus que l'objet** réalisé. L'œuvre peut être un texte, une consigne, une photo : ce qui importe, c'est la question qu'elle pose." },
            { t: "schema", titre: "Le principe de *One and Three Chairs* (Kosuth, 1965)", legende: "Schéma du dispositif : une vraie chaise, sa photographie et sa définition du dictionnaire. Laquelle est « la » chaise ?", svg: `<svg viewBox="0 0 400 200"><rect class="aplat-papier" x="20" y="30" width="110" height="120"/><rect class="trait-fin" x="20" y="30" width="110" height="120"/><path class="trait" d="M55 60 L55 130 M55 95 L95 95 L95 130 M55 60 L60 60"/><text class="texte-petit" x="75" y="170" text-anchor="middle">l'objet réel</text><rect class="aplat" x="145" y="30" width="110" height="120"/><rect class="trait" x="152" y="37" width="96" height="106"/><path class="trait-fin" d="M180 62 L180 128 M180 95 L220 95 L220 128"/><text class="texte-petit" x="200" y="170" text-anchor="middle">sa photographie</text><rect class="aplat-papier" x="270" y="30" width="110" height="120"/><rect class="trait-fin" x="270" y="30" width="110" height="120"/><text class="texte" x="280" y="54">chaise, n. f.</text><path class="trait-fin" d="M280 72 L370 72 M280 86 L366 86 M280 100 L370 100 M280 114 L350 114 M280 128 L360 128"/><text class="texte-petit" x="325" y="170" text-anchor="middle">sa définition</text><text class="texte-pigment" x="200" y="194" text-anchor="middle">l'œuvre, c'est la question</text></svg>` },
            { t: "texte", md: "Le **land art** (fin des années 1960) quitte le musée pour travailler **dans et avec la nature**. **Robert Smithson** construit *Spiral Jetty* (1970), une spirale de 460 m de roches dans le Grand Lac Salé (États-Unis). **Christo et Jeanne-Claude** emballent le **Pont-Neuf** à Paris (1985). **Andy Goldsworthy** assemble feuilles, glace ou galets. Ces œuvres sont souvent **éphémères** : elles ne survivent que par la **photographie**." },
            { t: "verifie", q: "Quelle est la particularité principale du land art ?", choix: ["Il est exposé uniquement dans les musées", "Il utilise la nature comme lieu et matériau, souvent de façon éphémère", "Il imite la publicité"], bonne: 1, explication: "Le land art crée dans le paysage, avec ses matériaux. Le vent, l'eau ou le temps peuvent effacer l'œuvre, que l'on connaît ensuite par la photo." },
          ],
        },
        {
          titre: "Le corps, l'écran, le code",
          blocs: [
            { t: "definition", terme: "Performance", md: "Une action réalisée par l'artiste devant un public, **ici et maintenant**. L'œuvre, c'est le **corps** et le **temps** de l'action." },
            { t: "texte", md: "En **2010**, **Marina Abramović** reste assise en silence au MoMA de New York pendant près de trois mois, face à chaque visiteur qui vient s'asseoir devant elle (*The Artist Is Present*). Rien n'est fabriqué : l'œuvre est la rencontre.\n\nL'**art vidéo** naît avec **Nam June Paik** dans les années 1960, puis Bill Viola. L'**art numérique** utilise écrans, capteurs et programmes : les salles immersives de **teamLab**, les flux de données de **Refik Anadol**. En **2018**, un portrait produit par une **intelligence artificielle**, *Edmond de Belamy*, est vendu aux enchères : qui en est l'auteur, la machine ou ceux qui l'ont programmée ?" },
            { t: "frise", titre: "Quelques œuvres après 1945", evenements: [{ date: 1962, label: "Warhol, *Campbell* et *Marilyn*" }, { date: 1963, label: "Lichtenstein, *Whaam!*" }, { date: 1965, label: "Kosuth, *One and Three Chairs*" }, { date: 1970, label: "Smithson, *Spiral Jetty*" }, { date: 1985, label: "Christo et Jeanne-Claude, Pont-Neuf emballé" }, { date: 2010, label: "Abramović, *The Artist Is Present*" }, { date: 2018, label: "*Edmond de Belamy*, portrait par IA" }] },
            { t: "astuce", md: "Pour relier une œuvre à sa société, demande-toi : *de quoi parle-t-on à cette époque ?* Consommation (pop art), déchets (César), écologie (land art), écrans et données (art numérique)." },
          ],
        },
      ],
      bilan: "Après 1945, l'art prend ses images dans la publicité, s'empare des objets, quitte le musée pour la nature, devient idée, action ou programme : il interroge la société et la définition même de l'œuvre.",
    },
    "3e-arts-plastiques-04-image-espace-spectateur": {
      accroche: "Une chaise posée dans ta salle de classe, c'est un meuble. La même chaise, sur un socle blanc, éclairée, derrière un cordon, dans un musée : tout le monde la regarde comme une œuvre. Qu'est-ce qui a changé ? Pas la chaise : l'espace et la façon de la présenter.",
      objectifs: [
        "Définir installation, in situ, dispositif de présentation, scénographie et participation",
        "Analyser les photographies de Cindy Sherman et de JR",
        "Reconnaître les principes du Bauhaus, de Le Corbusier et de Zaha Hadid",
      ],
      sections: [
        {
          titre: "Quand l'œuvre devient un espace",
          blocs: [
            { t: "texte", md: "Un tableau se regarde de face, à distance. Certaines œuvres, elles, t'**entourent** : tu entres dedans, tu marches, tu changes de point de vue. Le spectateur ne contemple plus seulement, il **vit** l'œuvre avec son corps." },
            { t: "definition", terme: "Installation", md: "Une œuvre en **trois dimensions** qui organise un **espace entier**. Le spectateur y entre et s'y déplace. Exemple : les salles de miroirs infinis de **Yayoi Kusama**, où des points lumineux se reflètent à l'infini." },
            { t: "definition", terme: "In situ", md: "Expression latine : « sur place ». Une œuvre in situ est **conçue pour un lieu précis** : elle dialogue avec son architecture, son histoire, sa lumière. **Déplacée ailleurs, elle perd son sens.**" },
            { t: "schema", titre: "Le principe d'une œuvre in situ", legende: "Exemple : *Les Deux Plateaux* de Daniel Buren (1986), des colonnes rayées de hauteurs différentes, alignées sur la trame de la cour du Palais-Royal à Paris.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier" x="20" y="20" width="250" height="190"/><rect class="trait" x="20" y="20" width="250" height="190"/><g class="aplat"><circle cx="35" cy="35" r="4"/><circle cx="85" cy="35" r="4"/><circle cx="135" cy="35" r="4"/><circle cx="185" cy="35" r="4"/><circle cx="235" cy="35" r="4"/><circle cx="35" cy="195" r="4"/><circle cx="85" cy="195" r="4"/><circle cx="185" cy="195" r="4"/><circle cx="235" cy="195" r="4"/></g><g class="aplat-fort"><rect x="60" y="70" width="12" height="12"/><rect x="100" y="70" width="12" height="12"/><rect x="140" y="70" width="12" height="12"/><rect x="180" y="70" width="12" height="12"/><rect x="220" y="70" width="12" height="12"/><rect x="60" y="110" width="12" height="12"/><rect x="100" y="110" width="12" height="12"/><rect x="180" y="110" width="12" height="12"/><rect x="220" y="110" width="12" height="12"/><rect x="60" y="150" width="12" height="12"/><rect x="100" y="150" width="12" height="12"/><rect x="140" y="150" width="12" height="12"/><rect x="220" y="150" width="12" height="12"/></g><path class="pointille" d="M135 230 L135 175 C135 140 160 135 160 100 L160 50" marker-end="url(#fl-p)"/><text class="texte-petit" x="145" y="234">entrée du visiteur</text><text class="texte" x="285" y="40">lieu historique</text><text class="texte-petit" x="285" y="56">arcades, sol, trame</text><text class="texte" x="285" y="96">œuvre posée</text><text class="texte" x="285" y="112">sur la trame</text><text class="texte-petit" x="285" y="128">du lieu</text><text class="texte" x="285" y="168">parcours libre</text><text class="texte-petit" x="285" y="184">le corps du visiteur</text><text class="texte-petit" x="285" y="198">fait partie de l'œuvre</text></svg>` },
            { t: "verifie", q: "Pourquoi les colonnes de Buren au Palais-Royal sont-elles dites in situ ?", choix: ["Parce qu'elles sont en marbre", "Parce qu'elles ont été conçues pour la cour du Palais-Royal et sa trame", "Parce qu'on peut les déplacer dans n'importe quel musée"], bonne: 1, explication: "Leur emplacement, leur alignement et leur sens dépendent de ce lieu précis. Le scandale de 1986 venait justement du dialogue, jugé provocant, entre un monument historique et une œuvre contemporaine." },
          ],
        },
        {
          titre: "Présenter, c'est déjà donner du sens",
          blocs: [
            { t: "texte", md: "Le **dispositif de présentation** comprend tout ce qui entoure l'œuvre : socle, cadre, cimaise (le mur où l'on accroche), vitrine, éclairage, hauteur d'accrochage, distance. Il guide le regard et change le **statut** d'un objet. La **scénographie**, c'est la mise en espace de toute une exposition : parcours, couleurs des murs, lumière, son." },
            { t: "texte", md: "L'art **participatif** va plus loin : il a **besoin du public** pour exister. **Felix Gonzalez-Torres** dépose des tas de bonbons dans lesquels les visiteurs se servent : l'œuvre diminue, puis le musée la reconstitue. **JR** fait coller par les habitants eux-mêmes des portraits géants (*Inside Out*, depuis 2011)." },
            { t: "tableau", titre: "Les mots de l'espace", entetes: ["Notion", "Définition", "Exemple"], lignes: [["Installation", "Œuvre en 3D qui occupe un espace où l'on entre", "Kusama, salles de miroirs"], ["In situ", "Conçue pour un lieu précis", "Buren, Palais-Royal"], ["Dispositif de présentation", "Socle, cadre, éclairage, accrochage", "L'objet sur un socle blanc"], ["Scénographie", "Mise en espace d'une exposition", "Parcours, lumière, murs"], ["Participation", "Le public agit sur l'œuvre", "Gonzalez-Torres, JR"]] },
          ],
        },
        {
          titre: "La photographie met en scène : Cindy Sherman et JR",
          blocs: [
            { t: "texte", md: "Dans ses *Untitled Film Stills* (1977-1980), **Cindy Sherman** se photographie **elle-même**, déguisée en héroïnes de films imaginaires : la ménagère, la secrétaire, la jeune fille perdue en ville. Ce ne sont **pas** des actrices célèbres : ce sont des **stéréotypes féminins** du cinéma, qu'elle rejoue pour les rendre visibles.\n\n**JR** colle d'immenses portraits en noir et blanc dans l'**espace public** : sur des murs, des toits, des trains. En **2016**, il fait « disparaître » la pyramide du Louvre par une **anamorphose** : une image collée qui, vue d'un point précis, raccorde parfaitement avec le palais derrière." },
            { t: "definition", terme: "Anamorphose", md: "Une image déformée qui ne se lit correctement que **d'un point de vue précis**. Ailleurs, elle paraît étirée ou absurde." },
            { t: "exemple", titre: "Analyser une photo de Sherman en trois questions", md: "**Qui ?** L'artiste elle-même, méconnaissable. **Comment ?** Cadrage de cinéma, noir et blanc, lumière dramatique, pose figée comme un arrêt sur image. **Pourquoi ?** Montrer que ces images de femmes sont **construites** : costume, décor, attitude. La photo ne montre pas une personne, elle montre un cliché." },
          ],
        },
        {
          titre: "Habiter l'espace : architecture moderne et contemporaine",
          blocs: [
            { t: "texte", md: "Le **Bauhaus** est une école fondée par **Walter Gropius** à **Weimar en 1919** et fermée par les nazis en **1933**. Elle unit **art, artisanat et industrie** : des objets et des bâtiments aux formes simples, où la **fonction** passe d'abord.\n\n**Le Corbusier** formule en 1927 les **cinq points de l'architecture moderne**, que montre la **Villa Savoye** à Poissy (1928-1931). Plus tard, la **Cité radieuse** de Marseille (1947-1952) empile des logements, des commerces et une école sur un toit-terrasse." },
            { t: "tableau", titre: "Les cinq points de Le Corbusier", entetes: ["Point", "Ce que cela permet"], lignes: [["**Pilotis**", "La maison flotte au-dessus du sol, le jardin passe dessous"], ["**Toit-terrasse**", "Un jardin sur le toit"], ["**Plan libre**", "Les murs ne portent plus : on organise les pièces librement"], ["**Fenêtre en bandeau**", "Une longue fenêtre horizontale, beaucoup de lumière"], ["**Façade libre**", "La façade n'est plus un mur porteur"]] },
            { t: "texte", md: "**Zaha Hadid**, architecte née à Bagdad, est en **2004** la **première femme** à recevoir le prix **Pritzker**, le « Nobel » de l'architecture. Ses bâtiments semblent couler, comme le **Centre Heydar Aliyev** à Bakou (2012) : plus d'angles droits, des courbes continues." },
            { t: "verifie", q: "Lequel fait partie des cinq points de Le Corbusier ?", choix: ["Le toit en pente couvert de tuiles", "Les pilotis", "Les murs épais en pierre"], bonne: 1, explication: "Les pilotis soulèvent le bâtiment. Avec le toit-terrasse, le plan libre, la fenêtre en bandeau et la façade libre, ils forment les cinq points de l'architecture moderne." },
          ],
        },
      ],
      bilan: "Une œuvre n'existe jamais seule : le lieu, la façon de la présenter, le corps du spectateur et l'architecture qui l'accueille font partie de son sens.",
    },
    "3e-arts-plastiques-05-analyser-oeuvre": {
      accroche: "Devant le jury de l'oral, tu as cinq minutes pour parler d'une œuvre. « C'est beau » ne suffit pas, « je n'aime pas » non plus. Il te faut une méthode, des mots précis et une idée défendue. Bonne nouvelle : la méthode tient en cinq verbes.",
      objectifs: [
        "Identifier une œuvre avec son cartel complet",
        "Décrire puis analyser : composition, couleur, lumière, matière, cadrage",
        "Interpréter l'œuvre dans son contexte et la relier à d'autres œuvres",
        "Connaître les attentes et le déroulement de l'oral du DNB",
      ],
      sections: [
        {
          titre: "Cinq étapes, toujours dans le même ordre",
          blocs: [
            { t: "etapes", titre: "Méthode d'analyse d'œuvre pour l'oral", items: [{ titre: "Identifier", md: "Le **cartel** : titre en *italique*, artiste, date, technique, dimensions, lieu de conservation." }, { titre: "Décrire", md: "Ce que l'on **voit**, sans juger : sujet, personnages, objets, plans, cadrage." }, { titre: "Analyser", md: "**Comment** c'est fait : composition, couleur, lumière, matière, format." }, { titre: "Interpréter", md: "**Pourquoi** : contexte, intention, message, réception. Chaque idée s'appuie sur un détail visible." }, { titre: "Relier", md: "Comparer avec une autre œuvre : autre époque, autre art, même thème." }] },
            { t: "attention", md: "**Décrire n'est pas interpréter.** « Il y a des couleurs sombres » est une description. « Les couleurs sombres expriment la tristesse » est une **interprétation**. Garde-la pour la quatrième étape, et justifie-la." },
            { t: "verifie", q: "« Les couleurs sombres montrent la tristesse de la scène. » À quelle étape appartient cette phrase ?", choix: ["Identifier", "Décrire", "Interpréter"], bonne: 2, explication: "La phrase donne un sens (la tristesse) à un élément visible (les couleurs sombres) : c'est une interprétation. Une description dirait seulement que les couleurs sont sombres." },
          ],
        },
        {
          titre: "Les outils de l'analyse plastique",
          blocs: [
            { t: "texte", md: "Analyser, c'est démonter l'image comme un mécanisme. Commence par la **composition** : comment les éléments sont-ils placés ? Repère les **plans** (premier plan, plan moyen, arrière-plan), puis les **lignes de force** : horizontales (calme), verticales (stabilité, élévation), **diagonales** (mouvement, tension), formes géométriques cachées (triangle, cercle)." },
            { t: "schema", titre: "Lignes de force et plans d'une image", legende: "Schéma d'un paysage imaginaire : la règle des tiers place l'horizon et le sujet sur des lignes fortes ; la diagonale crée du mouvement.", svg: `<svg viewBox="0 0 400 250"><rect class="aplat-papier" x="40" y="20" width="300" height="200"/><rect class="aplat" x="40" y="153" width="300" height="67"/><path class="trait" d="M40 86 L340 86"/><path class="pointille" d="M140 20 L140 220 M240 20 L240 220 M40 153 L340 153"/><path d="M40 220 L340 30" fill="none" stroke="var(--pigment)" stroke-width="2"/><circle class="aplat-fort" cx="240" cy="86" r="7"/><rect class="trait" x="40" y="20" width="300" height="200"/><text class="texte-petit" x="348" y="60">arrière-</text><text class="texte-petit" x="348" y="73">plan</text><text class="texte-petit" x="348" y="122">plan</text><text class="texte-petit" x="348" y="135">moyen</text><text class="texte-petit" x="348" y="185">premier</text><text class="texte-petit" x="348" y="198">plan</text><text class="texte-petit" x="34" y="90" text-anchor="end">horizon</text><text class="texte-pigment" x="96" y="205">diagonale</text><text class="texte-petit" x="252" y="80">point fort</text><text class="texte-petit" x="190" y="240" text-anchor="middle">tiers verticaux et horizontaux en pointillés</text></svg>` },
            { t: "tableau", titre: "Le vocabulaire qui fait la différence", entetes: ["Domaine", "Mots précis"], lignes: [["Composition", "lignes de force, diagonale, triangle, symétrie, règle des tiers, plans"], ["Couleur", "chaude / froide, primaires, **complémentaires**, camaïeu, **monochrome**"], ["Lumière", "source, contre-jour, contraste, **clair-obscur**"], ["Matière", "lisse, empâtée, touche visible, aplat, transparence"], ["Cadrage", "plan large, gros plan, plongée, contre-plongée, hors-champ"], ["Format", "portrait (vertical), paysage (horizontal), échelle monumentale"]] },
            { t: "definition", terme: "Couleurs complémentaires", md: "Deux couleurs **opposées sur le cercle chromatique** : rouge et vert, bleu et orange, jaune et violet. Placées côte à côte, elles **se renforcent** et vibrent. Un **monochrome** est au contraire peint d'une seule couleur, comme les toiles bleues d'Yves Klein." },
          ],
        },
        {
          titre: "Interpréter et relier : donner du sens",
          blocs: [
            { t: "texte", md: "Interpréter, c'est répondre à **pourquoi**. Pourquoi ce format immense ? Pourquoi ce noir et blanc ? Appuie-toi sur le **contexte** (date, événement, mouvement), l'**intention** de l'artiste et la **réception** (scandale, censure, succès).\n\nPuis **relie** : un rapprochement est pertinent s'il partage un **thème** ou une **intention**, pas seulement une date ou une couleur. *Guernica* et une chanson contre la guerre se répondent ; *Guernica* et un autre tableau peint en 1937 sur un sujet sans rapport, beaucoup moins." },
            { t: "exemple", titre: "*Guernica* en cinq étapes", etapes: ["**Identifier** : Picasso, *Guernica*, 1937, huile sur toile, 349 × 777 cm, musée Reina Sofía, Madrid.", "**Décrire** : une mère et son enfant mort, un taureau, un cheval blessé, une ampoule, des femmes qui crient, un guerrier à terre.", "**Analyser** : composition en triangle, noir, blanc et gris, formes brisées cubistes, format de fresque.", "**Interpréter** : la dénonciation du bombardement d'une ville et, au-delà, de toute guerre contre les civils.", "**Relier** : Otto Dix, *La Guerre* ; en musique, *Le Déserteur* de Boris Vian (1954)."] },
            { t: "verifie", q: "Dans *Guernica*, quel est l'effet du grand triangle central ?", choix: ["Il donne une impression de calme", "Il concentre le regard sur les victimes au centre", "Il crée une perspective profonde"], bonne: 1, explication: "Le triangle rassemble les figures et conduit l'œil vers le centre et vers la lumière : le spectateur ne peut pas échapper à la souffrance représentée." },
          ],
        },
        {
          titre: "L'oral du DNB : ce que le jury attend",
          blocs: [
            { t: "propriete", titre: "Le déroulement de l'oral", md: "L'oral porte sur un **projet** mené en classe (histoire des arts, EPI ou parcours éducatif). **Seul** : 15 minutes, soit **5 minutes d'exposé** puis 10 minutes d'entretien. **En groupe** : 25 minutes (10 d'exposé, 15 d'entretien). Il est noté sur **100 points** : 50 pour la **maîtrise de l'expression orale**, 50 pour la **maîtrise du sujet**." },
            { t: "liste", titre: "Les gestes qui rapportent des points", items: ["**Regarde le jury**, parle sans lire : tes notes sont un aide-mémoire de quelques mots.", "Utilise le **vocabulaire précis** du tableau ci-dessus.", "Montre l'œuvre (reproduction, diaporama) et **désigne** les détails dont tu parles.", "Donne un **avis personnel argumenté** : « Je trouve cette œuvre forte parce que… »", "Prépare l'entretien : pourquoi ce choix d'œuvre ? Quel lien avec une autre ?"] },
            { t: "astuce", md: "Entraîne-toi à voix haute avec un minuteur : 5 minutes passent très vite. Une phrase d'ouverture accrocheuse et une conclusion qui relie l'œuvre à aujourd'hui font toujours bonne impression." },
          ],
        },
      ],
      bilan: "Identifier, décrire, analyser, interpréter, relier : avec ces cinq verbes, du vocabulaire précis et un regard vers le jury, n'importe quelle œuvre devient un exposé solide.",
    },
    "3e-arts-plastiques-06-projet-demarche": {
      accroche: "Une œuvre achevée ne montre pas les dix essais ratés, le hasard qui a tout débloqué, le croquis griffonné à minuit. Pourtant, c'est là que se cache l'artiste. En 3e, tu apprends à mener ta propre démarche, et à respecter celle des autres.",
      objectifs: [
        "Mener un projet : intention, expérimentation, série, carnet, présentation",
        "Comprendre le droit d'auteur et distinguer citation, appropriation et plagiat",
        "Connaître des métiers de l'art et de la culture",
      ],
      sections: [
        {
          titre: "De l'intention à la présentation",
          blocs: [
            { t: "texte", md: "Une démarche artistique ne commence pas par la technique mais par une **intention** : ce que tu veux dire, montrer ou faire ressentir. Ensuite vient l'**expérimentation** : tu essaies plusieurs matériaux, plusieurs cadrages, tu te trompes. Un accident (une tache, un pli, une photo floue) peut devenir une **piste** : beaucoup d'artistes ont avancé grâce au hasard." },
            { t: "etapes", titre: "Les étapes d'une démarche de projet", items: [{ titre: "Intention", md: "Je formule ce que je veux exprimer, en une phrase." }, { titre: "Recherches", md: "Références, croquis, images collectées dans le **carnet**." }, { titre: "Expérimentations", md: "Essais variés ; je garde aussi les ratés et les hasards." }, { titre: "Choix et réalisation", md: "Je retiens la piste la plus forte et je la mène au bout, parfois en **série**." }, { titre: "Présentation", md: "Support, format, accrochage, titre, cartel : je montre au public." }] },
            { t: "definition", terme: "Carnet de recherche", md: "Le carnet où l'artiste garde **toutes les traces** de son travail : croquis, collages, notes, photos d'essais. Il montre le **chemin**, pas seulement le résultat. Au DNB comme en classe, il prouve ta réflexion." },
          ],
        },
        {
          titre: "Travailler en série et soigner la présentation",
          blocs: [
            { t: "texte", md: "Travailler **en série**, c'est décliner **une même idée en plusieurs œuvres** pour l'explorer à fond. **Monet** peint plus de trente fois la façade de la cathédrale de Rouen, à toutes les heures : le sujet ne change pas, la lumière si. **Warhol** répète ses Marilyn en changeant les couleurs.\n\nLa **présentation** fait partie de l'œuvre : alignées ou en désordre, encadrées ou punaisées, à hauteur des yeux ou au sol, les mêmes images ne disent pas la même chose." },
            { t: "exemple", titre: "Projet *Béton végétal*", etapes: ["**Intention** : montrer la ville comme une jungle.", "**Expérimentations** : collage de photos de bâtiments et de feuilles ; dessin au feutre sur un plan de métro ; photo de lierre sur du béton.", "**Carnet** : les trois essais sont gardés, annotés.", "**Série** : cinq images au même format.", "**Présentation** : alignées sans cadre, à hauteur des yeux, avec le titre *Béton végétal*."] },
            { t: "verifie", q: "Un hasard pendant l'expérimentation (une tache imprévue) peut-il devenir une piste de création ?", choix: ["Non, il faut toujours effacer les accidents", "Oui, beaucoup d'artistes exploitent le hasard", "Seulement en photographie"], bonne: 1, explication: "L'expérimentation sert justement à provoquer des découvertes. Un accident bien regardé peut ouvrir une direction que tu n'aurais jamais imaginée." },
          ],
        },
        {
          titre: "Le droit d'auteur : protéger les créateurs",
          blocs: [
            { t: "propriete", titre: "Le droit d'auteur en France", md: "Une œuvre est protégée **dès sa création**, sans aucun dépôt. Les **droits patrimoniaux** (autoriser la reproduction, être payé) durent toute la vie de l'auteur puis **70 ans après sa mort** ; ensuite l'œuvre entre dans le **domaine public**. Le **droit moral** (respect du nom de l'auteur et de l'intégrité de l'œuvre) est **perpétuel**." },
            { t: "exemple", titre: "Calculer l'entrée dans le domaine public", md: "Claude Monet est mort en 1926 : ses toiles sont dans le domaine public depuis longtemps, tu peux les reproduire librement (en citant son nom : droit moral !). Henri Matisse est mort en 1954 : ses œuvres sont libres depuis le 1er janvier 2025. Pablo Picasso est mort en 1973 : il faudra attendre 2044." },
            { t: "tableau", titre: "Emprunter n'est pas voler… si l'on sait comment", entetes: ["Pratique", "Ce que l'on fait", "Légitime ?"], lignes: [["**Citation**", "Reprendre un court fragment **en signalant** l'auteur", "Oui"], ["**Appropriation**", "Reprendre une image pour **en changer le sens** (Duchamp, *L.H.O.O.Q.*, 1919 : une moustache sur la Joconde)", "Oui, si le sens est nouveau et la source reconnaissable"], ["**Plagiat**", "Copier en **faisant croire** que c'est à soi", "Non : c'est une faute, parfois un délit"]] },
            { t: "verifie", q: "Un élève télécharge une illustration sur internet, la signe et la rend comme son travail. Quel est le problème ?", choix: ["Aucun, internet est gratuit", "C'est du plagiat : il s'attribue l'œuvre d'un autre", "C'est une appropriation artistique"], bonne: 1, explication: "Ce qui est en ligne n'est pas libre de droits pour autant. Signer le travail d'un autre, c'est du plagiat : il viole le droit moral de l'auteur." },
          ],
        },
        {
          titre: "Les métiers de l'art et de la culture",
          blocs: [
            { t: "texte", md: "Derrière chaque exposition, chaque affiche, chaque bâtiment, il y a des dizaines de métiers. Certains créent, d'autres conservent, transmettent ou organisent. Le **parcours Avenir** t'invite à les découvrir." },
            { t: "tableau", titre: "Quelques métiers", entetes: ["Métier", "Mission"], lignes: [["Graphiste, illustrateur", "Créer des images pour l'édition, la publicité, le web"], ["Architecte, designer", "Concevoir des bâtiments, des objets"], ["**Restaurateur** d'œuvres", "Soigner les œuvres anciennes, entre art et sciences (chimie, analyses)"], ["Conservateur", "Gérer et étudier les collections d'un musée"], ["**Commissaire d'exposition**", "Choisir les œuvres et le propos d'une exposition"], ["**Scénographe**", "Concevoir le parcours, l'accrochage, la lumière"], ["**Médiateur culturel**", "Accueillir et guider les publics, expliquer les œuvres"], ["Régisseur, galeriste", "Transporter, installer les œuvres ; les vendre"]] },
            { t: "savais-tu", md: "Avant de restaurer un tableau, on le passe aux rayons X et aux infrarouges : on découvre parfois un premier dessin, voire une autre peinture cachée dessous !" },
          ],
        },
      ],
      bilan: "Une démarche, c'est une intention, des essais, des choix et une présentation ; et créer, c'est aussi respecter les créations des autres.",
    },
  },
};
