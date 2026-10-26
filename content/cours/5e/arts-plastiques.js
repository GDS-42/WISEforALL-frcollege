// Cours ÉCLORE — 5e Arts plastiques. Schéma : docs/COURS.md
export default {
  id: "5e-arts-plastiques",
  chapitres: {
    "5e-arts-plastiques-01-representation": {
      accroche: "Sous le dessin d'une pipe, le peintre René Magritte a écrit : « Ceci n'est pas une pipe. » Il a raison : essaie donc de la fumer ! Une image ne sera jamais la chose qu'elle montre. Elle la représente, et c'est tout un art.",
      objectifs: [
        "Distinguer ressemblance, écart et fiction dans une image",
        "Construire une perspective linéaire avec une ligne d'horizon et un point de fuite",
        "Reconnaître les procédés qui créent l'illusion du réel, comme le trompe-l'œil",
      ],
      sections: [
        {
          titre: "Une image n'est jamais la chose elle-même",
          blocs: [
            { t: "texte", md: "Le tableau de Magritte, *La Trahison des images* (1929), montre une pipe parfaitement dessinée. Pourtant, on ne peut ni la prendre, ni la remplir de tabac : c'est de la peinture sur une toile plate.\n\nToute image fonctionne ainsi. Un dessin, une peinture, une photo, une vidéo ==représentent== le monde : ils le rendent présent à nos yeux, mais ils ne sont pas le monde." },
            { t: "definition", terme: "Représenter", md: "Rendre visible quelque chose (un objet, une personne, une idée) par une image. La représentation est toujours une **fabrication** : l'auteur choisit ce qu'il montre et comment il le montre." },
            { t: "attention", md: "Même une **photographie** n'est pas « la réalité ». Le photographe choisit le **cadrage** (ce qui entre dans l'image et ce qui reste dehors), la **lumière**, l'**angle** et le **moment** du déclenchement." },
            { t: "verifie", q: "Une photographie montre-t-elle la réalité telle qu'elle est, sans aucun choix de l'auteur ?", choix: ["Oui, l'appareil enregistre tout objectivement", "Non, le cadrage, la lumière et le moment sont choisis", "Oui, sauf si la photo est en noir et blanc"], bonne: 1, explication: "L'appareil enregistre ce qu'on lui montre, mais c'est le photographe qui décide du cadrage, de l'angle, de la lumière et de l'instant. Une photo est donc une représentation, pas la réalité." },
          ],
        },
        {
          titre: "Ressemblance, écart et fiction",
          blocs: [
            { t: "texte", md: "Face à une image, pose-toi une question simple : *l'artiste a-t-il cherché à imiter le réel, ou à s'en éloigner ?* Il existe trois grandes attitudes, et un même artiste peut passer de l'une à l'autre." },
            { t: "tableau", titre: "Trois façons de représenter", entetes: ["Notion", "Ce que fait l'artiste", "Exemple"], lignes: [["**Ressemblance**", "Il imite le réel le plus fidèlement possible : formes, couleurs, proportions.", "Un portrait photographique très fidèle"], ["**Écart**", "Il s'éloigne volontairement du réel : il déforme, exagère, change les couleurs.", "Une caricature au nez énorme, un visage vert"], ["**Fiction**", "Il mélange réel et imaginaire de façon crédible.", "Un dragon aux écailles très réalistes, une ville impossible"]] },
            { t: "exemple", titre: "Un portrait à la peau verte", md: "Un peintre représente une jeune femme avec une peau verte et des yeux de deux couleurs différentes. Il sait très bien qu'une peau n'est pas verte ! Cet **écart** est un choix : il cherche à exprimer une émotion, une étrangeté, un caractère, plutôt qu'à copier le modèle. L'écart **crée du sens**." },
            { t: "savais-tu", md: "Au XVIe siècle, Giuseppe Arcimboldo peignait des visages entièrement composés de fruits, de légumes ou de fleurs. De loin, on voit un homme ; de près, une poire sert de nez. Ressemblance et fiction dans un seul tableau !" },
            { t: "verifie", q: "Un artiste peint un portrait avec une peau verte. Que cherche-t-il le plus probablement ?", choix: ["Copier fidèlement son modèle", "Créer un écart pour exprimer une émotion ou une idée", "Cacher qu'il ne sait pas mélanger les couleurs"], bonne: 1, explication: "La couleur « fausse » est volontaire : c'est un écart. Il éloigne l'image du réel pour lui donner un sens, une émotion ou une étrangeté." },
          ],
        },
        {
          titre: "La perspective linéaire : creuser une surface plate",
          blocs: [
            { t: "texte", md: "Une feuille est plate. Comment faire croire qu'un couloir s'enfonce au loin ? Au début du XVe siècle, à **Florence**, pendant la **Renaissance**, l'architecte **Brunelleschi** trouve une méthode géométrique. Le savant **Alberti** l'explique dans un livre en 1435. C'est la **perspective linéaire**." },
            { t: "definition", terme: "Ligne d'horizon, point de fuite, fuyantes", md: "La **ligne d'horizon** est une ligne horizontale placée **à la hauteur des yeux** de celui qui regarde. Le **point de fuite** est posé **sur** cette ligne. Les **fuyantes** sont les lignes qui s'éloignent vers le fond : elles se rejoignent toutes au point de fuite." },
            { t: "schema", titre: "Un couloir en perspective à un point de fuite", legende: "Les quatre arêtes du couloir filent vers le même point. Les portes rapetissent en s'éloignant.", svg: `<svg viewBox="0 0 400 240"><rect class="trait" x="20" y="20" width="360" height="200"/><rect class="aplat" x="160" y="80" width="80" height="60"/><rect class="trait" x="160" y="80" width="80" height="60"/><line class="trait" x1="20" y1="20" x2="160" y2="80"/><line class="trait" x1="380" y1="20" x2="240" y2="80"/><line class="trait" x1="20" y1="220" x2="160" y2="140"/><line class="trait" x1="380" y1="220" x2="240" y2="140"/><line class="pointille" x1="160" y1="80" x2="200" y2="110"/><line class="pointille" x1="240" y1="80" x2="200" y2="110"/><line class="pointille" x1="160" y1="140" x2="200" y2="110"/><line class="pointille" x1="240" y1="140" x2="200" y2="110"/><line class="trait-fin" x1="20" y1="110" x2="380" y2="110" stroke-dasharray="1 3"/><path class="aplat-fort" d="M50 100 L75 101.7 L75 188.6 L50 202.9 Z"/><path class="aplat-fort" d="M110 104 L125 105 L125 160 L110 168.6 Z"/><circle cx="200" cy="110" r="4" fill="var(--pigment)"/><text class="texte-petit texte-pigment" x="200" y="132" text-anchor="middle">point de fuite</text><text class="texte-petit" x="300" y="104" text-anchor="middle">ligne d'horizon</text><text class="texte-main" x="60" y="66">fuyante</text></svg>` },
            { t: "propriete", titre: "La diminution", md: "Plus un objet est **loin**, plus il est dessiné **petit** et **proche de la ligne d'horizon**. Un personnage au fond d'un paysage est donc tout petit et presque posé sur l'horizon." },
            { t: "exemple", titre: "Dessiner un couloir à un point de fuite", etapes: ["Trace la **ligne d'horizon**, à la hauteur de tes yeux.", "Place le **point de fuite** sur cette ligne (au centre pour une vue de face).", "Dessine le **rectangle du fond** du couloir autour du point de fuite.", "Relie les coins de ta feuille aux coins du rectangle : ce sont les **fuyantes**, toutes dirigées vers le point de fuite.", "Ajoute portes et fenêtres, **de plus en plus petites** vers le fond."] },
            { t: "verifie", q: "Où se trouve toujours le point de fuite d'une perspective linéaire ?", choix: ["Dans un coin de l'image", "Sur la ligne d'horizon", "Tout en bas de la feuille", "Au centre exact de la feuille"], bonne: 1, explication: "Le point de fuite est toujours posé sur la ligne d'horizon, à la hauteur des yeux. Il n'est pas forcément au centre : on peut le décaler à gauche ou à droite." },
          ],
        },
        {
          titre: "Où placer l'horizon ?",
          blocs: [
            { t: "texte", md: "La hauteur de la ligne d'horizon dit au spectateur **où il se tient**. C'est un choix puissant : en le changeant, tu changes complètement l'effet de ton image. Dans une perspective frontale, comme ce couloir vu de face, on n'utilise qu'**un seul** point de fuite." },
            { t: "tableau", titre: "L'effet de la hauteur de l'horizon", entetes: ["Ligne d'horizon", "Le spectateur a l'impression…", "Effet"], lignes: [["Très **basse**", "d'être petit, de regarder d'en bas", "Le ciel domine, les sujets paraissent grands et imposants"], ["Au **milieu**", "d'être debout, à hauteur normale", "Une vue calme, équilibrée"], ["Très **haute**", "de regarder d'en haut", "Le sol domine, on survole la scène"]] },
            { t: "astuce", md: "Pour retenir : ==l'horizon, ce sont tes yeux==. Accroupis-toi, l'horizon descend ; monte sur une chaise, il monte avec toi." },
          ],
        },
        {
          titre: "Le trompe-l'œil : tromper le regard",
          blocs: [
            { t: "definition", terme: "Trompe-l'œil", md: "Une peinture si réaliste que le spectateur croit voir un **vrai objet** ou une **vraie ouverture** : une fausse fenêtre sur un mur, une mouche posée sur un cadre, un ciel peint au plafond." },
            { t: "texte", md: "Le trompe-l'œil combine tous les procédés de l'illusion : la **perspective**, les **ombres** qui donnent du volume, la **diminution**, les détails minutieux." },
            { t: "savais-tu", md: "Vers 1470, à Mantoue, le peintre Mantegna a peint au plafond d'une chambre une fausse ouverture ronde sur le ciel, avec des personnages penchés qui semblent nous regarder d'en haut. Plus de cinq siècles plus tard, les visiteurs lèvent encore la tête, surpris." },
          ],
        },
      ],
      bilan: "Une image représente, elle n'est jamais la chose : ressemblance, écart ou fiction, perspective et trompe-l'œil sont des choix d'artiste pour faire voir ce qui n'est pas là.",
    },
    "5e-arts-plastiques-02-narration-visuelle": {
      accroche: "Deux cases : dans la première, un garçon court vers une pierre ; dans la seconde, il est par terre. Tu n'as pas vu la chute… et pourtant tu l'as « vue ». C'est toi, lecteur, qui as dessiné le moment manquant dans ta tête.",
      objectifs: [
        "Utiliser le vocabulaire de la bande dessinée et du storyboard",
        "Construire une séquence d'images qui raconte une histoire dans le temps",
        "Comprendre comment des images fixes deviennent une image animée",
      ],
      sections: [
        {
          titre: "Le vocabulaire de la planche",
          blocs: [
            { t: "texte", md: "Une bande dessinée raconte avec des **images successives**. Chaque élément de la page porte un nom précis, que tu dois savoir employer pour décrire une BD ou construire la tienne." },
            { t: "schema", titre: "Anatomie d'une planche de BD", legende: "La chute n'est pas dessinée : elle se passe dans l'ellipse, entre la deuxième et la troisième case.", svg: `<svg viewBox="0 0 400 290"><text class="texte-petit texte-pigment" x="205" y="16" text-anchor="middle">ellipse</text><path class="trait-fin" d="M205 20 L205 50" marker-end="url(#fl-p)"/><rect class="aplat-papier" x="10" y="30" width="290" height="250"/><rect class="trait-fin" x="10" y="30" width="290" height="250"/><rect class="trait" x="20" y="40" width="85" height="95"/><rect class="trait" x="115" y="40" width="85" height="95"/><rect class="trait" x="210" y="40" width="80" height="95"/><rect class="trait" x="20" y="145" width="270" height="125"/><rect class="aplat trait-fin" x="24" y="44" width="76" height="15"/><text class="texte-petit" x="62" y="55" text-anchor="middle">Un matin…</text><text class="texte-petit texte-pigment" x="62" y="71" text-anchor="middle">cartouche</text><circle class="trait" cx="62" cy="82" r="7"/><path class="trait" d="M62 89 L60 110 M60 110 L50 128 M60 110 L72 126 M61 95 L50 102 M61 95 L74 90"/><path class="trait-fin" d="M28 90 L42 90 M30 98 L44 98 M28 106 L42 106"/><ellipse class="aplat-papier trait-fin" cx="165" cy="60" rx="28" ry="13"/><path class="aplat-papier trait-fin" d="M158 72 L152 84 L168 72"/><text class="texte-petit" x="165" y="64" text-anchor="middle">Vite !</text><text class="texte-petit texte-pigment" x="186" y="90" text-anchor="middle">bulle</text><circle class="trait" cx="150" cy="96" r="7"/><path class="trait" d="M152 103 L160 118 M160 118 L150 130 M160 118 L172 126 M154 107 L142 111 M154 107 L168 104"/><ellipse class="aplat-fort" cx="178" cy="129" rx="9" ry="5"/><text class="texte-main" x="250" y="66" text-anchor="middle">PAF !</text><text class="texte-petit texte-pigment" x="250" y="84" text-anchor="middle">onomatopée</text><circle class="trait" cx="228" cy="118" r="7"/><path class="trait" d="M235 120 L262 122 M262 122 L280 116 M262 122 L280 128"/><path class="trait-fin" d="M220 102 L224 106 M230 99 L230 104 M240 101 L237 106"/><circle class="trait" cx="110" cy="200" r="8"/><path class="trait" d="M110 208 L112 240 M112 240 L135 242 L140 262 M111 218 L128 230"/><circle class="trait-fin" cx="127" cy="196" r="2.5"/><circle class="trait-fin" cx="140" cy="191" r="4"/><path class="aplat-papier trait-fin" d="M160 190 A12 12 0 0 1 174 174 A14 14 0 0 1 200 170 A12 12 0 0 1 222 178 A10 10 0 0 1 216 196 L172 196 A10 10 0 0 1 160 190 Z"/><text class="texte-petit" x="190" y="187" text-anchor="middle">Ouille…</text><text class="texte-petit texte-pigment" x="191" y="214" text-anchor="middle">bulle de pensée</text><path class="trait-fin" d="M308 40 L314 40 L314 135 L308 135"/><text class="texte" x="320" y="84">bande</text><text class="texte-petit" x="320" y="98">(strip)</text><path class="trait-fin" d="M318 140 L285 140" marker-end="url(#fl)"/><text class="texte-petit" x="322" y="144">gouttière</text><path class="trait-fin" d="M318 206 L292 206" marker-end="url(#fl)"/><text class="texte" x="322" y="210">case</text><text class="texte" x="320" y="248">planche :</text><text class="texte-petit" x="320" y="262">la page</text><text class="texte-petit" x="320" y="276">entière</text></svg>` },
            { t: "tableau", titre: "Les mots de la BD", entetes: ["Mot", "Définition"], lignes: [["**Case** (ou vignette)", "Une image encadrée"], ["**Bande** (ou strip)", "Une ligne de cases"], ["**Planche**", "Une page entière de BD"], ["**Bulle** (ou phylactère)", "Contient les paroles ; en forme de nuage, les pensées"], ["**Cartouche**", "Encadré qui contient la voix du narrateur"], ["**Onomatopée**", "Mot qui imite un bruit : BOUM, CLAC, PAF"], ["**Gouttière**", "L'espace blanc entre les cases"]] },
          ],
        },
        {
          titre: "L'ellipse : le temps entre les cases",
          blocs: [
            { t: "definition", terme: "Ellipse", md: "Le temps qui passe **entre deux cases** et que le lecteur doit **imaginer**. Elle se cache dans la gouttière. Elle peut durer une seconde (une chute) ou des années (« Dix ans plus tard… » dans un cartouche)." },
            { t: "exemple", titre: "Raconter une chute en trois cases", etapes: ["Case 1 : un personnage court, des traits de vitesse derrière lui.", "Case 2 : son pied heurte une pierre.", "Case 3 : il est au sol, avec l'onomatopée « PAF ».", "La chute elle-même n'est pas dessinée : c'est l'**ellipse**. Le lecteur la reconstitue."] },
            { t: "texte", md: "Une **séquence** est une suite d'images liées qui raconte une action. En Occident, on lit **de gauche à droite et de haut en bas** : ce sens de lecture organise le temps. Change l'ordre des cases, et tu changes l'histoire." },
            { t: "verifie", q: "Comment appelle-t-on le temps qui passe entre deux cases et que le lecteur doit imaginer ?", choix: ["La gouttière", "L'ellipse", "Le cartouche", "Le strip"], bonne: 1, explication: "L'ellipse est le temps non dessiné. La gouttière est seulement l'espace blanc où elle se cache ; le cartouche contient le texte du narrateur." },
          ],
        },
        {
          titre: "La mise en page crée des effets",
          blocs: [
            { t: "texte", md: "La forme et la taille des cases ne sont pas neutres. Un auteur de BD joue avec elles comme un musicien joue avec le rythme." },
            { t: "tableau", titre: "Choix de mise en page et effets", entetes: ["Choix", "Effet sur le lecteur"], lignes: [["Une case qui occupe toute la planche", "Le temps semble s'arrêter, on contemple"], ["Une case sans bord, qui déborde", "L'action sort du cadre, elle paraît plus forte"], ["Une suite de cases identiques", "Un rythme régulier, une répétition"], ["Une case penchée", "Un déséquilibre, un choc"], ["Beaucoup de petites cases", "Une action rapide, découpée"]] },
            { t: "astuce", md: "Pour une action **rapide et violente**, combine plusieurs outils : cases penchées ou éclatées, traits de vitesse, grosse onomatopée qui déborde de la case." },
            { t: "savais-tu", md: "La **tapisserie de Bayeux** (XIe siècle), longue de près de 70 mètres, raconte la conquête de l'Angleterre en scènes successives, avec des textes brodés en latin. On la considère souvent comme un ancêtre de la bande dessinée." },
          ],
        },
        {
          titre: "De l'image fixe à l'image animée",
          blocs: [
            { t: "texte", md: "Au cinéma, rien ne bouge vraiment : on projette des **images fixes** très vite, **24 images par seconde**. Notre cerveau les fusionne et croit voir un mouvement continu. Avant de tourner, le réalisateur dessine chaque plan dans un **storyboard** : une sorte de BD préparatoire qui prévoit le cadrage et les mouvements de caméra." },
            { t: "frise", titre: "Vers l'image animée", evenements: [{ date: 1070, label: "Tapisserie de Bayeux", detail: "Une histoire en scènes successives, vers 1070." }, { date: 1868, label: "Le folioscope", detail: "Petit carnet que l'on fait défiler avec le pouce (flipbook)." }, { date: 1878, label: "Muybridge décompose le galop", detail: "Une série d'appareils photo déclenchés à la suite : la chronophotographie." }, { date: 1895, label: "Le cinématographe des frères Lumière", detail: "Première projection publique payante à Paris." }, { date: 1933, label: "King Kong", detail: "Le gorille géant est animé image par image : du stop-motion." }] },
            { t: "definition", terme: "Stop-motion", md: "Technique d'animation où l'on photographie un objet (figurine, pâte à modeler), on le déplace un tout petit peu, on reprend une photo, et ainsi de suite. En faisant défiler les photos, l'objet semble bouger tout seul." },
            { t: "verifie", q: "Au cinéma, combien d'images sont projetées par seconde ?", choix: ["5", "12", "24", "100"], bonne: 2, explication: "On projette 24 images par seconde : assez vite pour que le cerveau les fusionne en un mouvement fluide." },
          ],
        },
      ],
      bilan: "Une BD, un storyboard ou un film découpent le temps en images : la case montre, l'ellipse fait imaginer, et le défilement rapide donne vie au mouvement.",
    },
    "5e-arts-plastiques-03-materialite": {
      accroche: "En 1917, un artiste envoie à une exposition un urinoir acheté dans un magasin, simplement signé « R. Mutt ». Scandale ! Est-ce de l'art ? Cette question, posée par Marcel Duchamp, change pour toujours la façon de regarder les objets et les matériaux.",
      objectifs: [
        "Identifier les matériaux, les textures et les outils d'une production",
        "Comprendre le rôle du geste, de l'empreinte et de l'assemblage",
        "Expliquer comment un objet du quotidien peut devenir une œuvre (ready-made)",
      ],
      sections: [
        {
          titre: "Une œuvre, c'est aussi de la matière",
          blocs: [
            { t: "texte", md: "Sur un écran, toutes les œuvres semblent lisses et de la même taille. Devant l'œuvre réelle, tout change : tu découvres son poids, son épaisseur, les coups de pinceau, les traces d'outils. C'est sa **matérialité**." },
            { t: "definition", terme: "Matérialité", md: "Tout ce qui fait l'œuvre en vrai : son **matériau** (bois, toile, métal, papier…), son poids, sa surface, sa **texture**, ses **traces de fabrication**." },
            { t: "definition", terme: "Texture", md: "L'aspect de la surface : **lisse**, **rugueuse**, **granuleuse**, brillante, mate. On la voit et on peut souvent la toucher." },
            { t: "tableau", titre: "Chaque outil laisse sa trace", entetes: ["Outil", "Trace la plus fréquente"], lignes: [["Brosse large", "Trait épais et strié"], ["Fusain", "Noir profond que l'on peut estomper au doigt"], ["Éponge", "Tache irrégulière et granuleuse"], ["Pointe sèche sur argile", "Sillon creusé"], ["Couteau à peindre", "Matière épaisse, en relief"]] },
          ],
        },
        {
          titre: "Le geste, l'empreinte, l'assemblage",
          blocs: [
            { t: "texte", md: "Le **geste** de l'artiste reste visible dans l'œuvre. Un grand geste rapide laisse des coulures et des éclaboussures ; un geste lent et précis laisse un trait net. Quand un peintre travaille avec de grands gestes et laisse couler la peinture, il met en avant ==l'énergie de son geste== plus que la ressemblance." },
            { t: "definition", terme: "Empreinte", md: "La trace laissée par un objet pressé sur une matière : un tampon, une main dans l'argile, une feuille d'arbre enduite de peinture puis pressée sur le papier, ou un **frottage** au crayon." },
            { t: "etapes", titre: "Réaliser un frottage", items: [{ titre: "Choisir", md: "Une surface en relief : écorce, grille, pièce de monnaie, planche de bois." }, { titre: "Couvrir", md: "Pose une feuille fine par-dessus et tiens-la bien." }, { titre: "Frotter", md: "Frotte avec le **côté** de la mine du crayon, sans appuyer trop fort." }, { titre: "Observer", md: "La texture apparaît comme par magie sur la feuille." }, { titre: "Composer", md: "Découpe et assemble plusieurs frottages pour créer une image nouvelle." }] },
            { t: "definition", terme: "Assemblage", md: "Une œuvre en trois dimensions faite d'éléments divers réunis : bois, métal, tissu, objets récupérés." },
            { t: "verifie", q: "Comment appelle-t-on la trace laissée par un objet pressé sur une matière molle ?", choix: ["Un assemblage", "Une empreinte", "Un dégradé"], bonne: 1, explication: "L'empreinte garde la forme et la texture de l'objet pressé. L'assemblage, lui, réunit des objets pour construire une sculpture." },
          ],
        },
        {
          titre: "Le ready-made : choisir au lieu de fabriquer",
          blocs: [
            { t: "definition", terme: "Ready-made", md: "Un **objet du quotidien**, déjà fabriqué (« tout fait », en anglais *ready-made*), **choisi** par l'artiste et présenté comme une œuvre. Ce n'est pas le travail de la main qui compte, mais **le choix** et **l'idée**." },
            { t: "frise", titre: "Quand les objets entrent dans l'œuvre", evenements: [{ date: 1912, label: "Picasso colle une toile cirée", detail: "Nature morte à la chaise cannée : un vrai matériau entre dans le tableau." }, { date: 1913, label: "Roue de bicyclette", detail: "Duchamp fixe une roue sur un tabouret : le premier ready-made." }, { date: 1914, label: "Porte-bouteilles", detail: "Un égouttoir à bouteilles acheté dans un grand magasin." }, { date: 1917, label: "Fontaine", detail: "Un urinoir signé « R. Mutt », refusé à une exposition à New York." }, { date: 1942, label: "Tête de taureau", detail: "Picasso assemble une selle et un guidon de vélo." }] },
            { t: "exemple", titre: "Pourquoi Fontaine est-elle une œuvre ?", md: "Duchamp n'a pas fabriqué cet urinoir. Il l'a **choisi**, **retourné**, **signé**, **titré** et **exposé**. Sorti des toilettes et posé dans une exposition, l'objet perd sa fonction : on le regarde autrement. Duchamp pose ainsi une question : ==qu'est-ce qui fait qu'une chose est de l'art ?==" },
            { t: "attention", md: "Pour Duchamp, un ready-made ne devient **pas** une œuvre parce qu'il est fabriqué avec soin : c'est même tout le contraire ! C'est le **regard** de l'artiste et le **lieu** d'exposition qui transforment l'objet." },
            { t: "verifie", q: "Qu'est-ce qu'un ready-made ?", choix: ["Une sculpture en marbre taillée à la main", "Un objet du quotidien choisi par l'artiste et présenté comme œuvre", "Une peinture réalisée très rapidement"], bonne: 1, explication: "Le ready-made est un objet « tout fait » : l'artiste le choisit et l'expose. Duchamp l'invente en 1913 avec sa Roue de bicyclette." },
          ],
        },
        {
          titre: "Le matériau porte un sens",
          blocs: [
            { t: "texte", md: "Choisir un matériau, c'est déjà dire quelque chose. Le spectateur ressent la différence entre une statue en marbre et la même statue en carton." },
            { t: "tableau", titre: "Ce qu'évoquent les matériaux", entetes: ["Matériau", "Ce qu'il évoque souvent"], lignes: [["Marbre, bronze", "Noblesse, durée, éternité"], ["Carton, papier", "Fragilité, provisoire"], ["Plastique coloré", "Société de consommation"], ["Bois brut", "Nature, artisanat"]] },
            { t: "exemple", titre: "Un monument aux morts en carton", md: "Un sculpteur choisit le carton plutôt que le bronze. Le bronze dirait « ce souvenir est éternel ». Le carton dit autre chose : la **fragilité** de la vie, ou la mémoire qui s'efface si on ne l'entretient pas. Le matériau devient un message." },
          ],
        },
      ],
      bilan: "Une œuvre se touche autant qu'elle se regarde : matériau, texture, geste et empreinte portent du sens, et depuis Duchamp, choisir un objet peut suffire à faire œuvre.",
    },
    "5e-arts-plastiques-04-oeuvre-espace-spectateur": {
      accroche: "En 2021, pendant seize jours, l'Arc de Triomphe a disparu sous 25 000 m² de tissu argenté. Les passants s'arrêtaient, touchaient la toile, levaient les yeux. Ils n'étaient plus de simples passants : ils faisaient partie de l'œuvre.",
      objectifs: [
        "Expliquer ce qu'est une installation et une œuvre in situ",
        "Analyser le rôle de l'échelle et de la mise en scène d'une œuvre",
        "Comprendre la place du spectateur et le rôle du musée",
      ],
      sections: [
        {
          titre: "Entrer dans l'œuvre : l'installation",
          blocs: [
            { t: "texte", md: "Un tableau, on le regarde de face. Une sculpture, on en fait le tour. Mais certaines œuvres vont plus loin : elles **occupent tout un espace**, et le spectateur entre dedans, marche, écoute, se retourne. Son corps fait partie de l'expérience." },
            { t: "definition", terme: "Installation", md: "Une œuvre faite de **plusieurs éléments disposés dans un espace** (salle, cour, paysage). Le spectateur peut souvent s'y déplacer : il en fait partie." },
            { t: "definition", terme: "Œuvre in situ", md: "*In situ* signifie « sur place » en latin. L'œuvre est créée **pour un lieu précis** : la déplacer lui ferait perdre son sens." },
            { t: "exemple", titre: "Les Deux Plateaux de Daniel Buren (1986)", md: "Dans la cour du Palais-Royal, à Paris, Buren a installé 260 colonnes rayées noir et blanc, de hauteurs différentes. Les visiteurs marchent entre elles, s'y assoient, les enfants sautent de l'une à l'autre. L'œuvre a été pensée pour **cette cour**, avec ses arcades et ses rayures : elle est **in situ**." },
            { t: "verifie", q: "Que signifie l'expression « œuvre in situ » ?", choix: ["Une œuvre très ancienne", "Une œuvre créée pour un lieu précis", "Une œuvre que l'on peut déplacer partout", "Une œuvre peinte à l'huile"], bonne: 1, explication: "In situ veut dire « sur place » : l'œuvre dialogue avec son lieu et perd son sens si on l'en retire." },
          ],
        },
        {
          titre: "L'échelle : l'œuvre face à ton corps",
          blocs: [
            { t: "definition", terme: "Échelle", md: "Le **rapport de taille** entre l'œuvre et le corps humain. Une œuvre **monumentale** dépasse largement notre taille ; une œuvre **intime** tient dans la main." },
            { t: "schema", titre: "Trois échelles comparées à ton corps", legende: "Plus l'œuvre est grande par rapport à toi, plus elle impose sa présence : tu dois lever la tête et reculer.", svg: `<svg viewBox="0 0 400 280"><line class="trait" x1="10" y1="260" x2="390" y2="260"/><circle class="trait" cx="60" cy="232" r="4"/><path class="trait" d="M60 236 L60 250 M60 250 L55 260 M60 250 L65 260 M54 242 L66 242"/><text class="texte-petit" x="60" y="276" text-anchor="middle">toi : 1,60 m</text><rect class="aplat" x="140" y="248" width="40" height="12"/><path class="aplat-fort" d="M154 157 a6 6 0 1 1 12 0 a6 6 0 1 1 -12 0 M152 170 L168 170 L172 210 L166 210 L166 248 L161 248 L160 214 L159 248 L154 248 L154 210 L148 210 Z"/><text class="texte-petit" x="160" y="276" text-anchor="middle">statue de 5 m</text><path class="aplat" d="M300 260 L300 70 L296 70 L296 40 Q296 20 316 20 L340 20 Q360 20 360 40 L360 70 L356 70 L356 260 Z"/><path class="trait" d="M300 260 L300 70 L296 70 L296 40 Q296 20 316 20 L340 20 Q360 20 360 40 L360 70 L356 70 L356 260"/><text class="texte-petit" x="328" y="276" text-anchor="middle">sculpture de 12 m</text><line class="pointille" x1="70" y1="228" x2="290" y2="228"/><text class="texte-main" x="230" y="120" text-anchor="middle">monumental</text><path class="trait-fin" d="M262 112 L290 90" marker-end="url(#fl)"/></svg>` },
            { t: "texte", md: "Une sculpture haute de 12 mètres sur une place publique **écrase** le spectateur : il se sent petit, l'œuvre impose sa présence. À l'inverse, une miniature peinte dans un médaillon oblige à s'approcher tout près : elle crée une relation **intime**." },
            { t: "verifie", q: "Range mentalement ces œuvres de la plus petite à la plus grande : un portrait de chevalet A3, une miniature dans un médaillon, l'Arc de Triomphe empaqueté. Laquelle est la plus petite ?", choix: ["Le portrait A3", "La miniature dans un médaillon", "L'Arc de Triomphe empaqueté"], bonne: 1, explication: "La miniature tient dans la main, le portrait A3 mesure environ 30 × 42 cm, et l'Arc de Triomphe empaqueté atteint 50 mètres de haut : une œuvre monumentale." },
          ],
        },
        {
          titre: "Mettre en scène change le regard",
          blocs: [
            { t: "texte", md: "Pose une chaise dans une classe : c'est un meuble. Accroche la même chaise au plafond d'une galerie et éclaire-la avec un spot : on la regarde comme une œuvre. Rien n'a changé dans la chaise, seule la **mise en scène** a changé." },
            { t: "tableau", titre: "Dispositifs de présentation et effets", entetes: ["Dispositif", "Effet produit"], lignes: [["Socle haut", "L'objet est élevé, mis à distance"], ["Vitrine", "L'objet paraît précieux et fragile"], ["Posé au sol, sans socle", "L'œuvre partage notre espace"], ["Spot dans une salle sombre", "L'œuvre est isolée, théâtralisée"], ["Cadre doré", "Le tableau paraît prestigieux, séparé du mur"]] },
            { t: "attention", md: "Une pile de briques ordinaires au sol d'un musée n'est pas une œuvre « parce qu'elle est jolie ». Les visiteurs y voient une œuvre parce qu'un **artiste l'a choisie et disposée** et parce que **le musée la présente** comme telle. Le lieu et le dispositif comptent." },
          ],
        },
        {
          titre: "Le spectateur, le musée et l'éphémère",
          blocs: [
            { t: "definition", terme: "Cartel", md: "La petite étiquette placée à côté d'une œuvre dans un musée. Elle indique le **titre**, l'**auteur**, la **date** et la **technique** (et parfois les dimensions)." },
            { t: "texte", md: "Le **musée** conserve les œuvres, les étudie et les montre au public. Mais certaines œuvres ne tiennent pas dans un musée : elles sont **éphémères**, elles ne durent que quelques jours. Elles restent de vraies œuvres : on garde leur mémoire par des photos, des films, des dessins préparatoires, et par le souvenir de ceux qui les ont vécues." },
            { t: "frise", titre: "Christo, Jeanne-Claude et Buren : des œuvres hors du musée", evenements: [{ date: 1985, label: "Le Pont-Neuf empaqueté", detail: "Christo et Jeanne-Claude enveloppent le plus vieux pont de Paris." }, { date: 1986, label: "Les Deux Plateaux", detail: "Les colonnes rayées de Daniel Buren au Palais-Royal." }, { date: 1995, label: "Le Reichstag empaqueté", detail: "Le parlement allemand, à Berlin, sous une toile argentée." }, { date: 2021, label: "L'Arc de Triomphe empaqueté", detail: "Réalisé après la mort de Christo, d'après son projet avec Jeanne-Claude." }] },
            { t: "verifie", q: "Une œuvre éphémère, empaquetée pendant deux semaines, est-elle une vraie œuvre d'art ?", choix: ["Non, une œuvre doit durer toujours", "Oui, sa durée limitée fait partie de l'œuvre", "Seulement si elle est exposée dans un musée"], bonne: 1, explication: "L'éphémère est un choix artistique : la disparition rend l'expérience précieuse. Photos et films en gardent la trace." },
          ],
        },
      ],
      bilan: "Une œuvre ne vit pas seule : son lieu, son échelle, sa mise en scène et le corps du spectateur qui la parcourt font partie de ce qu'elle dit.",
    },
    "5e-arts-plastiques-05-histoire-des-arts": {
      accroche: "Un sourire qui semble bouger quand tu bouges, un rayon de lumière qui jaillit dans une taverne sombre, une étoile à huit branches répétée à l'infini sur un mur de palais : derrière chaque œuvre se cache une époque et une civilisation.",
      objectifs: [
        "Connaître les grands artistes de la Renaissance et leurs œuvres",
        "Reconnaître les caractéristiques du baroque et du clair-obscur",
        "Identifier des formes d'art islamique, africain et précolombien",
      ],
      sections: [
        {
          titre: "La Renaissance : renaître avec l'Antiquité",
          blocs: [
            { t: "texte", md: "Aux XVe et XVIe siècles, en **Italie**, les artistes redécouvrent les statues et les textes de l'Antiquité grecque et romaine. Ils étudient l'**anatomie** (certains dissèquent des corps pour comprendre les muscles), observent la nature et inventent la **perspective**. L'être humain est placé au centre : c'est l'esprit de la **Renaissance**." },
            { t: "frise", titre: "De la Renaissance au baroque", evenements: [{ date: 1415, label: "Brunelleschi et la perspective", detail: "Vers 1415, à Florence, il démontre la perspective linéaire." }, { date: 1485, label: "La Naissance de Vénus", detail: "Botticelli, vers 1485, à Florence." }, { date: 1498, label: "La Cène", detail: "Léonard de Vinci achève cette fresque à Milan." }, { date: 1503, label: "La Joconde", detail: "Léonard de Vinci la commence vers 1503." }, { date: 1504, label: "Le David", detail: "Michel-Ange : une statue de marbre de plus de 5 m." }, { date: 1508, label: "La chapelle Sixtine", detail: "Michel-Ange peint le plafond de 1508 à 1512." }, { date: 1515, label: "Le Rhinocéros", detail: "Gravure de Dürer, maître allemand de la gravure." }, { date: 1600, label: "La Vocation de saint Matthieu", detail: "Le Caravage, à Rome : le baroque et le clair-obscur." }] },
            { t: "tableau", titre: "Les maîtres de la Renaissance", entetes: ["Artiste", "Œuvre célèbre", "À retenir"], lignes: [["**Botticelli**", "La Naissance de Vénus", "Un sujet antique, des lignes souples et gracieuses"], ["**Léonard de Vinci**", "La Joconde, La Cène", "Le **sfumato** : un flou doux entre ombre et lumière"], ["**Michel-Ange**", "Le David, le plafond de la chapelle Sixtine", "Sculpteur et peintre des corps puissants"], ["**Dürer**", "Le Rhinocéros, ses autoportraits", "Né à Nuremberg, maître de la **gravure**"]] },
            { t: "verifie", q: "Le plafond de la chapelle Sixtine a été peint de 1508 à 1512. Combien d'années ce chantier a-t-il duré ?", choix: ["2 ans", "4 ans", "8 ans", "12 ans"], bonne: 1, explication: "1512 − 1508 = 4. Michel-Ange a peint plus de 300 personnages, souvent allongé sur un échafaudage, la tête renversée." },
          ],
        },
        {
          titre: "Le baroque : émotion, mouvement et clair-obscur",
          blocs: [
            { t: "texte", md: "Au **XVIIe siècle**, le **baroque** veut **émouvoir** le spectateur, le surprendre, le bouleverser. Les corps se tordent, les drapés volent, la lumière devient dramatique." },
            { t: "definition", terme: "Clair-obscur", md: "Un **fort contraste** entre des zones très éclairées et des zones très sombres. Chez **Le Caravage**, des figures éclairées par une lumière violente sortent d'un **fond noir**." },
            { t: "exemple", titre: "Regarder La Vocation de saint Matthieu (1600)", md: "La scène se passe dans une pièce **sombre**. Un rayon de lumière venu de la droite éclaire les visages et le **geste de la main** du Christ qui désigne Matthieu. Tout le reste plonge dans l'ombre : la lumière guide ton regard vers l'essentiel. C'est le clair-obscur, signature du baroque." },
            { t: "attention", md: "Le Caravage ne peignait **pas** des personnages idéalisés. Au contraire, il prenait pour modèles des gens du peuple, avec des pieds sales, des rides, des vêtements usés. Ce réalisme choquait à son époque." },
            { t: "verifie", q: "Le clair-obscur est…", choix: ["un mélange de couleurs pastel", "un fort contraste entre zones très éclairées et très sombres", "un flou doux sur les contours"], bonne: 1, explication: "Le clair-obscur oppose violemment ombre et lumière. Le flou doux sur les contours, c'est le sfumato de Léonard de Vinci." },
          ],
        },
        {
          titre: "Les arts de l'Islam : écrire et géométriser",
          blocs: [
            { t: "texte", md: "Dans les mosquées, l'art islamique **évite de représenter des êtres vivants** : seul Dieu crée la vie, et le croyant ne doit pas être détourné de la prière par des images. Les artistes développent donc la **calligraphie** (la belle écriture, souvent des versets du Coran), l'**arabesque** (motifs végétaux entrelacés) et des **motifs géométriques** d'une grande complexité, comme les zelliges (mosaïques de céramique) de l'**Alhambra** de Grenade." },
            { t: "schema", titre: "Une étoile à huit branches", legende: "Deux carrés superposés, l'un tourné de 45°, forment une étoile. Répétée et entrelacée, elle couvre des murs entiers.", svg: `<svg viewBox="0 0 400 228"><rect class="aplat" x="140" y="50" width="120" height="120"/><rect class="aplat" x="140" y="50" width="120" height="120" transform="rotate(45 200 110)"/><rect class="trait" x="140" y="50" width="120" height="120"/><rect class="trait" x="140" y="50" width="120" height="120" transform="rotate(45 200 110)"/><circle class="aplat-fort" cx="200" cy="110" r="26"/><circle class="trait-fin" cx="200" cy="110" r="40"/><text class="texte-petit" x="70" y="60" text-anchor="middle">carré 1</text><path class="trait-fin" d="M96 58 L134 53" marker-end="url(#fl)"/><text class="texte-petit" x="330" y="40" text-anchor="middle">carré tourné de 45°</text><path class="trait-fin" d="M318 46 L274 94" marker-end="url(#fl)"/><text class="texte-main" x="200" y="220" text-anchor="middle">symétrie et répétition</text></svg>` },
          ],
        },
        {
          titre: "Arts d'Afrique et arts précolombiens",
          blocs: [
            { t: "texte", md: "Les **masques** et statues africains, en bois, ne sont pas faits pour être accrochés au mur. Ils servaient le plus souvent dans des **rituels** : cérémonies d'initiation, funérailles, fêtes des récoltes. Portés avec un costume, en musique et en danse, ils rendaient présents les ancêtres ou les esprits. Au début du XXe siècle, ils ont fasciné **Picasso** et les cubistes." },
            { t: "tableau", titre: "Œuvres et civilisations", entetes: ["Œuvre ou technique", "Civilisation", "Région"], lignes: [["Têtes colossales en pierre", "**Olmèques**", "Mexique (Amérique précolombienne)"], ["Pyramides à degrés", "**Mayas**", "Mexique, Guatemala"], ["Pierre du Soleil", "**Aztèques**", "Mexique"], ["Orfèvrerie, textiles", "**Incas**", "Andes (Pérou)"], ["Bronzes du royaume du Bénin", "**Afrique de l'Ouest**", "Actuel Nigeria"], ["Arabesques et zelliges de l'Alhambra", "**Art islamique**", "Grenade (Espagne)"]] },
            { t: "astuce", md: "Pour reconnaître une œuvre, demande-toi : *quel matériau ? quel usage ?* Une grande tête de pierre basaltique : Olmèques. Un disque sculpté de signes du calendrier : Aztèques. Un bronze ou un masque de bois rituel : Afrique." },
          ],
        },
      ],
      bilan: "Renaissance de la perspective et du sfumato, baroque du clair-obscur, géométrie de l'Islam, masques d'Afrique et pierres précolombiennes : chaque civilisation invente sa façon de faire voir le monde.",
    },
    "5e-arts-plastiques-06-vocabulaire-analyse": {
      accroche: "« C'est beau » ou « c'est moche » : ce n'est pas une analyse. Pour parler d'une image comme un vrai connaisseur, il te faut des mots précis… et une méthode qui part de ce que tu vois pour arriver à ce que tu comprends.",
      objectifs: [
        "Décrire une image avec le vocabulaire de la composition et du cadrage",
        "Utiliser le vocabulaire de la couleur et de la lumière",
        "Distinguer décrire et interpréter, et mener une analyse d'œuvre dans l'ordre",
      ],
      sections: [
        {
          titre: "La composition : organiser l'image",
          blocs: [
            { t: "definition", terme: "Composition", md: "L'organisation des éléments dans l'image : **lignes de force**, symétrie, **règle des tiers**, **premier plan** (le plus proche) et **arrière-plan** (le plus loin)." },
            { t: "schema", titre: "La règle des tiers", legende: "Deux lignes verticales et deux horizontales découpent l'image en 9 parties égales. Le sujet placé sur un croisement attire l'œil.", svg: `<svg viewBox="0 0 400 250"><rect class="aplat-papier" x="50" y="20" width="300" height="200"/><rect class="trait" x="50" y="20" width="300" height="200"/><line class="pointille" x1="150" y1="20" x2="150" y2="220"/><line class="pointille" x1="250" y1="20" x2="250" y2="220"/><line class="pointille" x1="50" y1="86.7" x2="350" y2="86.7"/><line class="pointille" x1="50" y1="153.3" x2="350" y2="153.3"/><path class="aplat" d="M50 175 Q150 160 250 170 T350 165 L350 220 L50 220 Z"/><circle class="aplat-fort" cx="250" cy="86.7" r="10"/><path class="trait" d="M150 119 L150 160 M150 160 L144 175 M150 160 L156 175 M140 136 L160 136"/><circle class="trait" cx="150" cy="112" r="7"/><text class="texte-petit texte-pigment" x="264" y="58">soleil sur un</text><text class="texte-petit texte-pigment" x="264" y="72">croisement</text><text class="texte-petit" x="160" y="200">personnage sur le tiers</text><text class="texte-petit" x="200" y="242" text-anchor="middle">9 parties égales</text></svg>` },
            { t: "texte", md: "Placer le sujet **au centre** donne une image stable, solennelle. Le placer **sur un tiers** rend l'image plus vivante et laisse de l'espace au regard. Les **lignes de force** (une route, un bras tendu, une diagonale) guident l'œil à travers l'image." },
            { t: "verifie", q: "En combien de parties égales la règle des tiers divise-t-elle une image ?", choix: ["3", "6", "9", "12"], bonne: 2, explication: "Deux lignes verticales et deux horizontales : 3 colonnes × 3 rangées = 9 parties égales. On place le sujet sur une ligne ou un croisement." },
          ],
        },
        {
          titre: "Le cadrage et l'angle de vue",
          blocs: [
            { t: "tableau", titre: "Les cadrages", entetes: ["Cadrage", "Ce que l'on voit", "Effet"], lignes: [["**Plan d'ensemble**", "Tout le décor, les personnages entiers et petits", "On situe le lieu"], ["**Plan moyen**", "Le personnage cadré en pied", "On suit son action"], ["**Gros plan**", "Le visage remplit l'image", "On lit l'émotion"], ["**Très gros plan**", "Un seul détail, comme un œil", "Tension, mystère"]] },
            { t: "schema", titre: "Plongée et contre-plongée", legende: "En plongée, l'œil est au-dessus du sujet ; en contre-plongée, il est en dessous.", svg: `<svg viewBox="0 0 400 220"><line class="trait-fin" x1="10" y1="190" x2="390" y2="190"/><circle class="trait" cx="100" cy="150" r="7"/><path class="trait" d="M100 157 L100 175 M100 175 L94 190 M100 175 L106 190 M92 164 L108 164"/><rect class="aplat-fort" x="30" y="40" width="22" height="14" rx="3"/><path class="trait-fin" d="M52 50 L92 140" marker-end="url(#fl-p)"/><text class="texte" x="100" y="24" text-anchor="middle">plongée</text><text class="texte-petit" x="100" y="210" text-anchor="middle">le sujet paraît petit, fragile</text><circle class="trait" cx="290" cy="80" r="9"/><path class="trait" d="M290 89 L290 140 M290 140 L280 190 M290 140 L300 190 M276 110 L304 110"/><rect class="aplat-fort" x="340" y="168" width="22" height="14" rx="3"/><path class="trait-fin" d="M340 170 L298 92" marker-end="url(#fl-p)"/><text class="texte" x="290" y="24" text-anchor="middle">contre-plongée</text><text class="texte-petit" x="290" y="210" text-anchor="middle">le sujet paraît grand, puissant</text></svg>` },
            { t: "verifie", q: "Une photo prise depuis le sommet d'un immeuble, qui regarde la rue d'en haut, est en…", choix: ["contre-plongée", "plongée", "gros plan"], bonne: 1, explication: "Regarder d'en haut, c'est la plongée. La contre-plongée regarde d'en bas et grandit le sujet." },
          ],
        },
        {
          titre: "Couleur et lumière : les bons mots",
          blocs: [
            { t: "tableau", titre: "Vocabulaire de la couleur", entetes: ["Mot", "Sens", "Exemple"], lignes: [["**Teinte**", "Le nom de la couleur", "Rouge, bleu, vert"], ["**Valeur**", "Claire ou foncée", "Bleu ciel / bleu marine"], ["**Saturation**", "Vive et pure, ou grisée", "Un rouge vif est très saturé"], ["**Contraste**", "Deux éléments qui s'opposent", "Clair/foncé, chaud/froid, rouge/vert (complémentaires)"], ["**Dégradé**", "Passage progressif d'une couleur ou d'une valeur à une autre", "Du bleu foncé au bleu clair"], ["**Camaïeu**", "Les nuances d'une seule couleur", "Une image peinte avec les seuls bleus"]] },
            { t: "propriete", titre: "Ombre propre et ombre portée", md: "La lumière a une **source**, une **direction** et une **intensité**. Elle crée deux ombres :\n• l'**ombre propre**, sur l'objet lui-même, du côté opposé à la lumière ;\n• l'**ombre portée**, projetée par l'objet **sur le sol** ou sur un mur." },
            { t: "attention", md: "Ne confonds pas **valeur** et **saturation**. Un bleu marine est foncé (valeur), mais il peut être très saturé. Un bleu grisé est peu saturé, qu'il soit clair ou foncé." },
          ],
        },
        {
          titre: "Décrire, puis interpréter",
          blocs: [
            { t: "definition", terme: "Décrire et interpréter", md: "**Décrire**, c'est dire ce que l'on voit, **sans jugement** : « le fond est sombre ». **Interpréter**, c'est proposer un **sens** en s'appuyant sur la description : « ce fond sombre crée une impression de solitude »." },
            { t: "etapes", titre: "Les étapes d'une analyse d'œuvre", items: [{ titre: "Identifier", md: "Lis le cartel : auteur, titre, date, technique." }, { titre: "Décrire le sujet et la composition", md: "Que représente l'image ? Comment est-elle organisée ?" }, { titre: "Observer couleurs, lumière, matière", md: "Avec les mots précis : valeur, contraste, ombre portée…" }, { titre: "Interpréter", md: "Quel sens, quelle émotion, quelle intention ?" }, { titre: "Donner son avis argumenté", md: "« J'aime parce que… », en s'appuyant sur ce qu'on a vu." }] },
            { t: "exemple", titre: "Devant un portrait", md: "Description : « gros plan, fond sombre, lumière venant de gauche, couleurs désaturées ». Interprétation : « la lumière isole le visage et crée une impression de solitude ». La deuxième phrase **s'appuie** sur la première." },
            { t: "verifie", q: "Laquelle de ces phrases est une description et non une interprétation ?", choix: ["Le personnage semble triste et seul", "Le personnage est cadré en gros plan sur un fond noir", "L'artiste a voulu dénoncer la guerre"], bonne: 1, explication: "Le cadrage et la couleur du fond se constatent : c'est une description. Les deux autres phrases proposent un sens : ce sont des interprétations." },
            { t: "savais-tu", md: "Deux élèves peuvent proposer deux interprétations différentes d'une même œuvre et avoir **tous les deux raison**, à condition de s'appuyer sur ce qu'ils ont décrit. Une œuvre riche ouvre plusieurs sens." },
          ],
        },
      ],
      bilan: "Composition, cadrage, couleur, lumière : avec les bons mots, tu décris d'abord ce que tu vois, puis tu en tires un sens que tu peux justifier.",
    },
  },
};
