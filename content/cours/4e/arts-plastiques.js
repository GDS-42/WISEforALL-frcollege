// Cours ÉCLORE — 4e Arts plastiques. Schéma : docs/COURS.md
export default {
  id: "4e-arts-plastiques",
  chapitres: {
    "4e-arts-plastiques-01-image-pouvoir": {
      accroche: "Prends une photo de ton camarade d'en bas : il devient un géant. Prends-la d'en haut : il paraît tout petit. Il n'a pas changé d'un centimètre, et pourtant l'image dit deux choses opposées. Bienvenue dans le pouvoir des images.",
      objectifs: [
        "Utiliser le vocabulaire de la photographie : cadrage, hors-champ, échelle des plans, angle, profondeur de champ, lumière",
        "Comprendre comment une image animée est fabriquée et pourquoi le montage change le sens",
        "Reconnaître une publicité, une propagande et un détournement, et analyser leur pouvoir",
      ],
      sections: [
        {
          titre: "Cadrer, c'est déjà choisir",
          blocs: [
            { t: "texte", md: "Avant même d'appuyer sur le déclencheur, le photographe décide de ce qui sera **dans** l'image et de ce qui restera **dehors**. Ce choix s'appelle le cadrage.\n\nCe qui reste hors du cadre n'a pas disparu : on peut le deviner, l'imaginer, ou au contraire l'ignorer complètement. Une foule de trois personnes, bien cadrée, peut ressembler à une manifestation immense. ==Cadrer, c'est déjà interpréter.==" },
            { t: "definition", terme: "Cadrage et hors-champ", md: "Le **cadrage** est la portion de réalité que l'auteur choisit de montrer dans les limites de l'image. Le **hors-champ** est tout ce qui existe autour du cadre mais que le spectateur ne voit pas." },
            { t: "schema", titre: "L'échelle des plans", legende: "Plus le plan est serré, plus le décor disparaît et plus l'émotion du personnage occupe toute l'image.", svg: `<svg viewBox="0 0 400 240"><rect class="trait" fill="none" x="8" y="40" width="72" height="120"/><rect class="trait" fill="none" x="86" y="40" width="72" height="120"/><rect class="trait" fill="none" x="164" y="40" width="72" height="120"/><rect class="trait" fill="none" x="242" y="40" width="72" height="120"/><rect class="trait" fill="none" x="320" y="40" width="72" height="120"/><path class="aplat" d="M8 140 Q30 118 52 132 Q66 124 80 130 L80 160 L8 160 Z"/><line class="trait-fin" x1="25" y1="140" x2="25" y2="120"/><circle class="trait-fin" fill="none" cx="25" cy="112" r="9"/><rect class="trait-fin" fill="none" x="56" y="118" width="16" height="22"/><path class="trait-fin" fill="none" d="M54 118 L64 108 L74 118"/><circle class="trait-fin" fill="none" cx="42" cy="125" r="2.5"/><path class="trait-fin" fill="none" d="M42 128 L42 134 M42 134 L40 140 M42 134 L44 140"/><circle class="trait" fill="none" cx="122" cy="62" r="9"/><path class="trait" fill="none" d="M122 71 L122 112 M108 96 L122 80 L136 96 M122 112 L112 150 M122 112 L132 150"/><line class="trait-fin" x1="86" y1="152" x2="158" y2="152"/><circle class="trait" fill="none" cx="200" cy="66" r="14"/><path class="trait" fill="none" d="M200 80 L200 140 M178 125 L200 92 L222 125 M200 140 L188 160 M200 140 L212 160"/><circle class="aplat" cx="278" cy="96" r="30"/><circle class="trait" fill="none" cx="278" cy="96" r="30"/><circle fill="var(--encre)" cx="268" cy="90" r="3"/><circle fill="var(--encre)" cx="288" cy="90" r="3"/><path class="trait" fill="none" d="M266 108 Q278 116 290 108 M270 126 L270 160 M286 126 L286 160"/><path class="trait" fill="none" d="M326 74 Q356 62 386 74"/><ellipse class="trait" fill="none" cx="356" cy="100" rx="30" ry="16"/><circle class="aplat-fort" cx="356" cy="100" r="10"/><circle fill="var(--encre)" cx="356" cy="100" r="4"/><text class="texte-petit" x="44" y="178" text-anchor="middle">Plan</text><text class="texte-petit" x="44" y="192" text-anchor="middle">d'ensemble</text><text class="texte-petit" x="122" y="178" text-anchor="middle">Plan</text><text class="texte-petit" x="122" y="192" text-anchor="middle">moyen</text><text class="texte-petit" x="200" y="178" text-anchor="middle">Plan</text><text class="texte-petit" x="200" y="192" text-anchor="middle">américain</text><text class="texte-petit" x="278" y="178" text-anchor="middle">Gros</text><text class="texte-petit" x="278" y="192" text-anchor="middle">plan</text><text class="texte-petit" x="356" y="178" text-anchor="middle">Très gros</text><text class="texte-petit" x="356" y="192" text-anchor="middle">plan</text><line class="trait-fin" x1="20" y1="212" x2="378" y2="212" marker-end="url(#fl)"/><text class="texte-main" x="200" y="232" text-anchor="middle">du plus large au plus serré</text><text class="texte-petit" x="200" y="26" text-anchor="middle">Le même personnage, cinq cadrages</text></svg>` },
            { t: "texte", md: "Entre le plan américain (coupé à mi-cuisses, très utilisé dans les westerns) et le gros plan, il existe aussi le **plan rapproché**, qui coupe le personnage au buste. L'ordre complet est donc : plan d'ensemble, plan moyen, plan américain, plan rapproché, gros plan, très gros plan." },
            { t: "verifie", q: "Quel plan montre uniquement le visage d'un personnage ?", choix: ["Le plan moyen", "Le plan américain", "Le gros plan", "Le plan d'ensemble"], bonne: 2, explication: "Le gros plan cadre le visage. Le très gros plan va encore plus loin et isole un détail : un œil, une bouche." },
          ],
        },
        {
          titre: "Angle, netteté et lumière : trois réglages qui changent tout",
          blocs: [
            { t: "tableau", titre: "Les angles de prise de vue", entetes: ["Angle", "Position de l'appareil", "Effet le plus fréquent"], lignes: [["**Plongée**", "Au-dessus du sujet, dirigé vers le bas", "Le sujet paraît petit, faible, écrasé"], ["**Contre-plongée**", "Au-dessous du sujet, dirigé vers le haut", "Le sujet paraît grand, puissant, dominant"], ["**Angle normal**", "À hauteur des yeux", "Effet neutre, d'égal à égal"]] },
            { t: "definition", terme: "Profondeur de champ", md: "La zone de l'image qui est **nette**. Une **faible** profondeur de champ rend le sujet net et l'arrière-plan flou : le regard va droit au sujet. Une **grande** profondeur de champ rend tout net, du premier plan au lointain." },
            { t: "texte", md: "La **lumière** modèle le sujet. Venue de côté, elle creuse les volumes et dessine les rides. Venue de face, elle aplatit. Venue de **derrière** le sujet, c'est un **contre-jour** : le sujet devient une silhouette sombre sur un fond lumineux, mystérieuse et sans détail." },
            { t: "exemple", titre: "Un visage, deux histoires", md: "Une affiche montre un visage en très gros plan, éclairé par en dessous : l'ombre monte sur le front et l'expression devient inquiétante. La même personne photographiée en plan moyen, à la lumière du jour, paraît douce. Rien n'a changé chez elle : seuls les **choix de l'auteur** ont changé." },
            { t: "verifie", q: "Pour qu'un personnage paraisse puissant et dominant, quel angle choisis-tu ?", choix: ["La plongée", "La contre-plongée", "L'angle normal"], bonne: 1, explication: "En contre-plongée, l'appareil est placé sous le sujet et le regarde d'en bas : il paraît plus grand, plus imposant. La plongée produit l'effet inverse." },
          ],
        },
        {
          titre: "De l'image fixe à l'image animée : le pouvoir du montage",
          blocs: [
            { t: "texte", md: "Un film n'est pas une image qui bouge : c'est une **suite d'images fixes** projetées si vite que ton œil et ton cerveau les relient en un mouvement continu. Le cinéma projette classiquement **24 images par seconde**. Un dessin animé, un GIF ou un folioscope reposent sur le même principe." },
            { t: "definition", terme: "Montage", md: "L'étape où l'on **choisit** les plans tournés et où on les **assemble dans un ordre** précis. Le monteur décide aussi de la durée de chaque plan et des transitions." },
            { t: "etapes", titre: "L'effet Koulechov (années 1920)", items: [{ titre: "Un visage neutre", md: "Le cinéaste russe Lev Koulechov filme un acteur au visage sans expression." }, { titre: "Plan suivant : une soupe", md: "Les spectateurs voient la faim dans ses yeux." }, { titre: "Plan suivant : un enfant dans un cercueil", md: "Les spectateurs voient la tristesse." }, { titre: "La conclusion", md: "Le visage est **le même**. C'est l'**ordre des plans** qui crée l'émotion : le montage fabrique le sens." }] },
            { t: "savais-tu", md: "Le folioscope (ou *flip book*) est le plus simple des films : un petit carnet dont chaque page porte un dessin légèrement différent. Feuillette-le vite avec le pouce, et le personnage bouge." },
          ],
        },
        {
          titre: "Séduire, convaincre, détourner",
          blocs: [
            { t: "texte", md: "Les images ne se contentent pas de montrer : elles veulent souvent **agir sur toi**. Pour les analyser, demande-toi toujours : *qui a fabriqué cette image, pour qui, et dans quel but ?*" },
            { t: "tableau", titre: "Quatre usages de l'image", entetes: ["Type d'image", "But principal", "Indices"], lignes: [["**Publicité**", "Séduire pour faire acheter", "Un produit, une marque, un slogan, des couleurs flatteuses"], ["**Propagande**", "Convaincre au service d'un pouvoir", "Un chef héroïsé, un ennemi caricaturé, des slogans répétés"], ["**Reportage**", "Témoigner d'un événement", "Un lieu, une date, une légende ; mais toujours un cadrage choisi"], ["**Détournement**", "Modifier une image connue pour en changer le sens", "On reconnaît l'original, mais le message est inversé ou moqué"]] },
            { t: "attention", md: "Une photo de presse **non retouchée** n'est pas forcément objective. Le photographe a choisi son cadrage, son angle, son moment, et le journal a choisi la photo parmi d'autres et lui a donné une légende. Elle témoigne, mais d'un point de vue." },
            { t: "exemple", titre: "Un détournement", md: "Un artiste reprend une célèbre affiche publicitaire de soda : même bouteille, mêmes couleurs, même typographie. Mais il remplace le slogan par un message sur la pollution plastique et remplit la bouteille de déchets. On reconnaît la publicité, et c'est justement ce qui rend la critique efficace." },
            { t: "verifie", q: "Un artiste reprend une affiche de soda et remplace le slogan par un message contre la pollution. Quelle démarche adopte-t-il ?", choix: ["La propagande", "Le reportage", "Le détournement", "La publicité"], bonne: 2, explication: "Il reprend une image connue en la modifiant pour en changer le message : c'est un détournement. Il ne vend rien, il critique." },
          ],
        },
      ],
      bilan: "Cadrage, angle, lumière, montage : derrière chaque image il y a des choix, et ces choix fabriquent un message. Regarder, c'est apprendre à les voir.",
    },
    "4e-arts-plastiques-02-corps-espace": {
      accroche: "Pourquoi les personnages que tu dessines ont-ils souvent une tête énorme et des jambes trop courtes ? Parce que ton œil connaît les visages mieux que les proportions. Les artistes, eux, ont appris à mesurer le corps… avec la tête.",
      objectifs: [
        "Représenter un corps avec des proportions justes grâce au canon de 7 à 8 têtes",
        "Suggérer le mouvement et choisir un fragment",
        "Distinguer portrait et autoportrait et traduire une expression",
        "Créer de la profondeur avec les plans et la perspective atmosphérique",
      ],
      sections: [
        {
          titre: "Mesurer le corps avec sa tête",
          blocs: [
            { t: "definition", terme: "Proportions", md: "Les **rapports de taille** entre les parties du corps. Depuis l'Antiquité, les artistes utilisent la hauteur de la tête comme unité : c'est le **canon**. Un adulte debout mesure environ **7 à 8 têtes**." },
            { t: "schema", titre: "Le canon de 8 têtes", legende: "La moitié du corps tombe à l'entrejambe, soit à 4 têtes. Les bras tombent jusqu'au milieu des cuisses.", svg: `<svg viewBox="0 0 400 300"><g class="pointille"><line x1="120" y1="20" x2="276" y2="20"/><line x1="120" y1="52" x2="276" y2="52"/><line x1="120" y1="84" x2="276" y2="84"/><line x1="120" y1="116" x2="276" y2="116"/><line x1="120" y1="148" x2="276" y2="148"/><line x1="120" y1="180" x2="276" y2="180"/><line x1="120" y1="212" x2="276" y2="212"/><line x1="120" y1="244" x2="276" y2="244"/><line x1="120" y1="276" x2="276" y2="276"/></g><g class="texte-petit" text-anchor="middle"><text x="104" y="40">1</text><text x="104" y="72">2</text><text x="104" y="104">3</text><text x="104" y="136">4</text><text x="104" y="168">5</text><text x="104" y="200">6</text><text x="104" y="232">7</text><text x="104" y="264">8</text></g><ellipse class="aplat-fort" cx="200" cy="36" rx="12" ry="16"/><path class="aplat" d="M196 52 L204 52 L204 60 L224 66 L218 130 L222 148 L178 148 L182 130 L176 66 L196 60 Z"/><path class="trait" fill="none" d="M196 52 L204 52 L204 60 L224 66 L218 130 L222 148 L178 148 L182 130 L176 66 L196 60 Z"/><path class="trait" fill="none" d="M176 66 L166 120 L164 164 M224 66 L234 120 L236 164 M182 148 L186 212 L190 270 L178 276 M218 148 L214 212 L210 270 L222 276 M200 148 L200 160"/><g class="texte-petit"><text x="284" y="56">menton</text><text x="284" y="88">poitrine</text><text x="284" y="120">nombril</text><text x="284" y="152">moitié du corps</text><text x="284" y="216">genoux</text><text x="284" y="280">pieds</text></g><text class="texte-main" x="20" y="150">unité :</text><text class="texte-main" x="20" y="170">1 tête</text></svg>` },
            { t: "exemple", titre: "Calculer la taille d'un personnage", etapes: ["Ton personnage doit mesurer 8 têtes.", "Sur ta feuille, sa tête mesure 3 cm.", "Hauteur totale : 8 × 3 = **24 cm**.", "Trace d'abord 8 graduations de 3 cm, puis place menton, nombril, entrejambe et genoux sur les repères."] },
            { t: "verifie", q: "Combien de fois la hauteur de la tête entre-t-elle environ dans la hauteur d'un adulte ?", choix: ["3 à 4 fois", "5 fois", "7 à 8 fois", "12 fois"], bonne: 2, explication: "Un adulte mesure environ 7 à 8 têtes. Un jeune enfant, lui, n'en mesure que 4 à 5 : sa tête est proportionnellement plus grosse." },
          ],
        },
        {
          titre: "Faire bouger un corps immobile",
          blocs: [
            { t: "texte", md: "Un dessin ne bouge pas. Pourtant, on peut faire croire au mouvement. Le secret : un corps qui bouge est un corps **en déséquilibre**. Un personnage bien droit sur ses deux pieds paraît figé." },
            { t: "liste", titre: "Procédés pour suggérer le mouvement", items: ["**Déséquilibrer** la pose : buste penché, un pied décollé du sol.", "**Étirer** ou **flouter** les formes dans le sens du déplacement.", "**Répéter** la silhouette plusieurs fois, légèrement décalée, comme une chronophotographie.", "Laisser des **traces du geste** : traits de vitesse, coulures, touches rapides."] },
            { t: "exemple", titre: "Dessiner un coureur", md: "Incline le buste vers l'avant, décolle un pied du sol et place les bras en opposition avec les jambes : le bras gauche avance avec la jambe droite. Le déséquilibre suggère la course. Ajoute quelques traits derrière lui pour accentuer la vitesse." },
            { t: "attention", md: "Respecter les proportions n'est pas obligatoire ! Des jambes très longues et un torse minuscule, c'est une **déformation expressive** : l'artiste s'écarte volontairement du canon pour exprimer quelque chose (l'élégance, l'angoisse, la vitesse). Giacometti étire ses sculptures jusqu'à les rendre filiformes." },
          ],
        },
        {
          titre: "Portrait, autoportrait, expression et fragment",
          blocs: [
            { t: "definition", terme: "Portrait et autoportrait", md: "Le **portrait** représente une personne. L'**autoportrait** est le portrait que l'artiste fait **de lui-même**, le plus souvent en se regardant dans un miroir." },
            { t: "texte", md: "L'**expression** ne passe pas seulement par le visage (sourcils, bouche, regard). La posture du corps, le cadrage, la couleur et la lumière comptent tout autant. Pour la tristesse : regard baissé, épaules tombantes, couleurs froides et sourdes, lumière faible. Des couleurs vives et saturées, au contraire, contrediraient cette émotion." },
            { t: "savais-tu", md: "Rembrandt s'est représenté près de quatre-vingts fois, en peinture, en dessin et en gravure, de sa jeunesse à sa vieillesse. Ses autoportraits forment une sorte de journal intime en images." },
            { t: "attention", md: "Le miroir **inverse** l'image. Un peintre droitier qui se peint devant un miroir se voit tenir le pinceau de la main gauche. Si un autoportrait montre l'artiste pinceau à gauche, il était donc très probablement **droitier**." },
            { t: "definition", terme: "Fragment", md: "Une œuvre qui ne montre qu'**une partie du corps** : une main, un dos, un pied. Le fragment concentre le regard et laisse le spectateur imaginer le reste." },
            { t: "verifie", q: "Un peintre se représente devant un miroir, pinceau dans la main gauche. Que peut-on en déduire ?", choix: ["Il est gaucher", "Il est probablement droitier, car le miroir inverse l'image", "Il a peint sans miroir"], bonne: 1, explication: "Dans un miroir, la droite et la gauche sont inversées. La main qui paraît gauche sur le tableau est en réalité sa main droite." },
          ],
        },
        {
          titre: "Creuser l'espace : les plans et la perspective atmosphérique",
          blocs: [
            { t: "texte", md: "Regarde au loin un jour de beau temps : les montagnes paraissent plus **pâles**, plus **bleutées** et plus **floues** que les arbres tout proches. C'est l'air, chargé de vapeur d'eau et de poussières, qui s'interpose. Léonard de Vinci a observé ce phénomène et l'a utilisé dans ses fonds de tableaux." },
            { t: "propriete", titre: "La perspective atmosphérique", md: "Plus un élément est **lointain**, plus il est **clair**, **bleuté**, **flou** et **peu contrasté**. Plus il est **proche**, plus il est **net**, **contrasté** et coloré." },
            { t: "schema", titre: "Un paysage en trois plans", legende: "Du rocher au ciel : les contrastes diminuent et les couleurs pâlissent en s'éloignant.", svg: `<svg viewBox="0 0 400 230"><path class="c-bleu" opacity="0.3" d="M0 120 L60 72 L120 108 L190 60 L260 104 L330 66 L400 108 L400 150 L0 150 Z"/><path class="c-vert" opacity="0.55" d="M0 150 Q100 112 200 140 T400 132 L400 180 L0 180 Z"/><rect class="aplat-papier" x="230" y="128" width="12" height="10"/><rect class="aplat-papier" x="246" y="124" width="10" height="14"/><path class="c-marron" opacity="0.55" d="M0 230 L0 178 Q120 162 220 182 T400 172 L400 230 Z"/><line class="trait" x1="60" y1="190" x2="60" y2="150"/><circle class="c-vert" cx="60" cy="138" r="22"/><circle class="trait" fill="none" cx="60" cy="138" r="22"/><path class="c-gris" d="M300 214 L318 184 L346 190 L360 214 Z"/><path class="trait" fill="none" d="M300 214 L318 184 L346 190 L360 214 Z"/><text class="texte-petit" x="200" y="28" text-anchor="middle">Arrière-plan : pâle, bleuté, flou</text><text class="texte-petit" x="320" y="160" text-anchor="middle">Second plan</text><text class="texte-petit" x="160" y="214" text-anchor="middle">Premier plan : net, contrasté</text></svg>` },
            { t: "verifie", q: "Range mentalement : quel élément est le plus proche du spectateur ?", choix: ["Des montagnes pâles et bleutées", "Un rocher net et très contrasté", "Un village aux contours adoucis", "Le ciel qui se fond à l'horizon"], bonne: 1, explication: "Le rocher net et contrasté est au premier plan. Viennent ensuite le village adouci, puis les montagnes bleutées, puis le ciel." },
          ],
        },
      ],
      bilan: "Mesurer avec la tête, déséquilibrer pour faire bouger, pâlir pour éloigner : ces outils te permettent de représenter le corps et l'espace… ou de t'en écarter en connaissance de cause.",
    },
    "4e-arts-plastiques-03-materialite-couleur": {
      accroche: "Un carré gris posé sur du rouge paraît verdâtre. Le même carré posé sur du vert paraît rosé. Ton œil te trompe-t-il ? Oui, et les peintres l'ont compris bien avant toi pour faire vibrer leurs tableaux.",
      objectifs: [
        "Expliquer le lien entre couleur et lumière",
        "Utiliser les couleurs complémentaires et le contraste simultané",
        "Distinguer empâtement, glacis, aplat et monochrome",
        "Choisir un support et un format selon une intention",
      ],
      sections: [
        {
          titre: "Sans lumière, pas de couleur",
          blocs: [
            { t: "texte", md: "Dans une pièce totalement noire, ton pull rouge n'est plus rouge : il n'est plus rien du tout. La couleur d'un objet dépend de la **lumière** qu'il reçoit et de celle qu'il renvoie vers ton œil. Au coucher du soleil, un mur blanc paraît orangé ; sous un néon, il devient bleuté." },
            { t: "savais-tu", md: "En 1666, Isaac Newton fait passer un rayon de soleil à travers un prisme de verre : la lumière blanche se décompose en un arc-en-ciel. La lumière blanche contient donc toutes les couleurs." },
            { t: "definition", terme: "Couleurs primaires en peinture", md: "Les **trois** couleurs qu'on ne peut pas obtenir par mélange : le **rouge** (magenta), le **jaune** et le **bleu** (cyan). En les mélangeant deux à deux, on obtient les **secondaires** : orange, vert, violet." },
          ],
        },
        {
          titre: "Les couleurs complémentaires",
          blocs: [
            { t: "schema", titre: "Le cercle chromatique", legende: "Chaque couleur est face à sa complémentaire : jaune et violet, orange et bleu, rouge et vert.", svg: `<svg viewBox="0 0 400 250"><path class="c-jaune" d="M200 128 L157 53.5 A86 86 0 0 1 243 53.5 Z"/><path class="c-orange" d="M200 128 L243 53.5 A86 86 0 0 1 286 128 Z"/><path class="c-rouge" d="M200 128 L286 128 A86 86 0 0 1 243 202.5 Z"/><path class="c-violet" d="M200 128 L243 202.5 A86 86 0 0 1 157 202.5 Z"/><path class="c-bleu" d="M200 128 L157 202.5 A86 86 0 0 1 114 128 Z"/><path class="c-vert" d="M200 128 L114 128 A86 86 0 0 1 157 53.5 Z"/><circle class="trait" fill="none" cx="200" cy="128" r="86"/><g class="trait"><line x1="200" y1="58" x2="200" y2="198"/><line x1="261" y1="93" x2="139" y2="163"/><line x1="261" y1="163" x2="139" y2="93"/></g><circle class="aplat-papier" cx="200" cy="128" r="14"/><circle class="trait-fin" fill="none" cx="200" cy="128" r="14"/><g class="texte"><text x="200" y="30" text-anchor="middle">jaune</text><text x="292" y="72">orange</text><text x="292" y="192">rouge</text><text x="200" y="236" text-anchor="middle">violet</text><text x="108" y="192" text-anchor="end">bleu</text><text x="108" y="72" text-anchor="end">vert</text></g></svg>` },
            { t: "propriete", titre: "Complémentaires", md: "Deux couleurs sont **complémentaires** quand elles s'opposent sur le cercle chromatique : une primaire et la secondaire faite des deux autres primaires. **Rouge/vert**, **bleu/orange**, **jaune/violet**. Côte à côte, elles se **renforcent** et vibrent ; mélangées, elles se **ternissent** et donnent un brun ou un gris." },
            { t: "astuce", md: "Pour trouver la complémentaire d'une primaire, mélange les deux autres. Complémentaire du bleu ? Rouge + jaune = **orange**. Du jaune ? Rouge + bleu = **violet**." },
            { t: "texte", md: "Les **impressionnistes**, comme Monet, posaient souvent des touches de complémentaires côte à côte au lieu de les mélanger sur la palette. Une ombre violette à côté d'une prairie jaune rend la lumière plus éclatante." },
            { t: "verifie", q: "Quelle est la couleur complémentaire du bleu ?", choix: ["Le vert", "L'orange", "Le violet", "Le rouge"], bonne: 1, explication: "Le bleu est une primaire ; sa complémentaire est le mélange des deux autres primaires, rouge et jaune : l'orange." },
          ],
        },
        {
          titre: "Le contraste simultané : ton œil compare",
          blocs: [
            { t: "definition", terme: "Contraste simultané", md: "Une même couleur paraît **différente selon la couleur qui l'entoure**. L'œil teinte légèrement chaque couleur de la complémentaire de sa voisine. Le chimiste Michel-Eugène **Chevreul** a décrit cette loi en **1839**, en étudiant les teintures des tapisseries des Gobelins." },
            { t: "schema", titre: "Deux fois le même gris", legende: "Les deux petits carrés sont exactement du même gris. Seul leur entourage change.", svg: `<svg viewBox="0 0 400 220"><rect class="c-rouge" x="20" y="16" width="170" height="150"/><rect class="c-gris" x="75" y="61" width="60" height="60"/><rect class="c-vert" x="210" y="16" width="170" height="150"/><rect class="c-gris" x="265" y="61" width="60" height="60"/><rect class="trait-fin" fill="none" x="20" y="16" width="170" height="150"/><rect class="trait-fin" fill="none" x="210" y="16" width="170" height="150"/><g class="texte-petit" text-anchor="middle"><text x="105" y="188">gris sur rouge :</text><text x="105" y="204">il paraît verdâtre</text><text x="295" y="188">gris sur vert :</text><text x="295" y="204">il paraît rosé</text></g></svg>` },
            { t: "exemple", titre: "Fais l'expérience", md: "Découpe deux carrés dans la même feuille grise. Pose-en un au milieu d'une feuille rouge, l'autre au milieu d'une feuille verte. Le premier te paraît légèrement verdâtre, le second légèrement rosé. Le gris n'a pas changé : ton œil réagit à l'entourage. De même, un gris semble plus chaud sur un fond bleu." },
            { t: "verifie", q: "Un même carré gris paraît différent sur un fond rouge et sur un fond vert. Comment s'appelle ce phénomène ?", choix: ["Le contraste simultané", "La perspective atmosphérique", "Le glacis", "Le monochrome"], bonne: 0, explication: "C'est le contraste simultané décrit par Chevreul en 1839 : l'œil modifie la perception d'une couleur selon ses voisines." },
          ],
        },
        {
          titre: "La matière de la peinture",
          blocs: [
            { t: "tableau", titre: "Quatre façons de poser la couleur", entetes: ["Technique", "Ce que c'est", "Effet"], lignes: [["**Empâtement**", "Couche épaisse, en relief, qui garde la trace du pinceau ou du couteau", "Matière visible, énergie du geste"], ["**Glacis**", "Couche fine et transparente posée sur une couche sèche", "Profondeur, lumière qui semble venir de l'intérieur"], ["**Aplat**", "Surface de couleur unie, sans relief ni nuance", "Netteté, simplicité, effet d'affiche"], ["**Monochrome**", "Œuvre entière d'une seule couleur", "La couleur devient le sujet"]] },
            { t: "etapes", titre: "Peindre à l'huile en glacis", items: [{ titre: "Préparer", md: "Enduire le support pour qu'il n'absorbe pas la peinture." }, { titre: "Dessiner", md: "Placer les grandes formes." }, { titre: "Poser la base", md: "Couleurs de base **opaques**." }, { titre: "Attendre", md: "Laisser **sécher complètement**, parfois plusieurs jours." }, { titre: "Glacer", md: "Appliquer des couches fines et transparentes, une à une." }, { titre: "Vernir", md: "Protéger l'œuvre terminée." }] },
            { t: "texte", md: "Dans *La Nuit étoilée* (1889), Van Gogh pose la peinture en **empâtements** : les tourbillons du ciel sont en relief, on suit chaque coup de pinceau. À l'inverse, Yves **Klein** dépose en 1960 son bleu profond, l'**IKB** (International Klein Blue), et peint des **monochromes** où il n'y a plus que cette couleur." },
            { t: "verifie", q: "Un glacis est-il une couche épaisse qui forme des reliefs ?", choix: ["Oui, c'est sa définition", "Non, c'est une couche fine et transparente ; l'épaisse, c'est l'empâtement"], bonne: 1, explication: "Le glacis est fin et transparent : il modifie la couleur du dessous. L'empâtement, lui, est épais et garde la trace de l'outil." },
          ],
        },
        {
          titre: "Support et format : des choix qui ont du sens",
          blocs: [
            { t: "definition", terme: "Support et format", md: "Le **support** est la surface sur laquelle on peint ou dessine : toile, papier, bois, mur, écran. Le **format** est sa taille et sa forme : petit ou monumental, portrait (vertical), paysage (horizontal), carré, panoramique (très allongé)." },
            { t: "exemple", titre: "Choisir selon l'intention", md: "Tu veux peindre une immense vague qui **écrase** le spectateur : choisis un **très grand format panoramique**, plus large que son champ de vision. Il ne regarde plus la vague, il est dedans. Pour un souvenir intime, un petit format qu'on tient dans la main crée au contraire la proximité." },
            { t: "texte", md: "La **matière** se voit et parfois se touche : lisse ou rugueuse, mate ou brillante. Du sable mélangé à la peinture, un papier froissé, un bois brut produisent des sensations que l'œil perçoit presque comme le toucher." },
          ],
        },
      ],
      bilan: "La couleur naît de la lumière, se transforme au contact de ses voisines et prend corps dans la matière : peindre, c'est jouer avec l'œil autant qu'avec le pinceau.",
    },
    "4e-arts-plastiques-04-oeuvre-espace-spectateur": {
      accroche: "Une œuvre peut-elle tenir dans une rivière, couvrir un monument entier, ou disparaître au premier coup de vent ? Depuis les années 1960, des artistes sortent des musées et inventent un art qu'on traverse, qu'on touche, qu'on photographie avant qu'il ne s'envole.",
      objectifs: [
        "Expliquer ce qu'est une œuvre in situ et reconnaître le land art",
        "Connaître le street art et ses artistes, notamment Banksy et JR",
        "Analyser la place du spectateur dans une performance ou une œuvre participative",
      ],
      sections: [
        {
          titre: "In situ : une œuvre pour un lieu",
          blocs: [
            { t: "definition", terme: "Œuvre in situ", md: "En latin, *in situ* veut dire « sur place ». Une œuvre in situ est **conçue pour un lieu précis** : elle tient compte de sa forme, de son histoire, de sa lumière. Déplacée, elle perd son sens." },
            { t: "exemple", titre: "Les colonnes de Buren", md: "En 1986, Daniel Buren installe dans la cour du Palais-Royal, à Paris, *Les Deux Plateaux* : 260 colonnes rayées noir et blanc de hauteurs différentes. Elles dialoguent avec les colonnes anciennes du palais et le quadrillage de la cour. Ailleurs, elles ne seraient plus que des cylindres rayés." },
            { t: "texte", md: "Le **musée** n'est donc pas le seul lieu de l'art. La rue, un champ, une plage, une gare ou un écran peuvent accueillir une œuvre, et le lieu devient alors une partie de l'œuvre." },
            { t: "verifie", q: "Que signifie « œuvre in situ » ?", choix: ["Une œuvre très ancienne", "Une œuvre créée pour un lieu précis", "Une œuvre exposée uniquement au musée", "Une œuvre réalisée en atelier"], bonne: 1, explication: "In situ signifie « sur place » : l'œuvre est pensée pour un lieu précis et en dépend." },
          ],
        },
        {
          titre: "Le land art et les empaquetages",
          blocs: [
            { t: "definition", terme: "Land art", md: "Mouvement né aux États-Unis dans les années **1960-1970** : les artistes travaillent **dans et avec la nature** (pierres, feuilles, glace, terre, sel). Les œuvres sont souvent **éphémères** et ne survivent que par la **photographie**." },
            { t: "exemple", titre: "Une œuvre qui s'envole", md: "Andy Goldsworthy aligne des feuilles rouges puis jaunes sur un rocher au bord d'une rivière. Une heure plus tard, le vent a tout dispersé. Il ne reste qu'une photographie : l'œuvre était le geste et l'instant, pas un objet à vendre." },
            { t: "frise", titre: "Quelques œuvres hors du musée", evenements: [{ date: 1970, label: "Spiral Jetty, Robert Smithson", detail: "Une spirale de pierres d'environ 460 m dans le Grand Lac Salé (Utah)." }, { date: 1985, label: "Christo et Jeanne-Claude empaquettent le Pont-Neuf", detail: "Paris : le plus vieux pont de la ville disparaît sous la toile." }, { date: 1986, label: "Les Deux Plateaux, Daniel Buren", detail: "Œuvre in situ au Palais-Royal." }, { date: 1995, label: "Le Reichstag empaqueté", detail: "Berlin : le parlement allemand enveloppé de tissu argenté." }, { date: 2021, label: "L'Arc de Triomphe empaqueté", detail: "Réalisé après la mort de Christo (2020), selon son projet." }] },
            { t: "savais-tu", md: "Christo et Jeanne-Claude ne vendaient pas leurs empaquetages : ils finançaient tout en vendant les dessins et maquettes préparatoires. Chaque installation ne durait que deux ou trois semaines." },
          ],
        },
        {
          titre: "Le street art : l'art dans la rue",
          blocs: [
            { t: "texte", md: "Le **street art** investit l'**espace public** : murs, trottoirs, escaliers. Il touche des passants qui n'ont pas choisi d'aller voir de l'art. Ses techniques : le **graffiti** à la bombe, le **pochoir**, le **collage** d'affiches, la **mosaïque** (les petits envahisseurs en carreaux d'Invader)." },
            { t: "etapes", titre: "La technique du pochoir", items: [{ titre: "Dessiner", md: "Tracer le motif sur un carton ou une feuille rigide." }, { titre: "Découper", md: "Évider les parties qui recevront la peinture." }, { titre: "Plaquer", md: "Appliquer le pochoir contre le mur." }, { titre: "Peindre", md: "Passer la bombe à travers les trous." }, { titre: "Retirer", md: "L'image apparaît, nette et reproductible en quelques secondes." }] },
            { t: "tableau", titre: "Deux artistes du street art", entetes: ["Artiste", "Pratique", "Particularité"], lignes: [["**Banksy**", "Pochoirs engagés, souvent ironiques", "Reste **anonyme** ; originaire de Bristol, en Angleterre"], ["**JR**", "**Portraits photographiques géants** en noir et blanc, collés sur les murs", "Photographie les habitants et les affiche **là où ils vivent**"]] },
            { t: "verifie", q: "JR colle des portraits géants d'habitants sur les murs de leur quartier. Pourquoi le lieu fait-il partie de l'œuvre ?", choix: ["Parce que les murs sont gratuits", "Parce que les visages sont ceux des habitants du lieu et que les murs sont leur cadre", "Parce qu'il ne trouve pas de musée"], bonne: 1, explication: "Les portraits ne prennent leur sens qu'à cet endroit : ce sont les habitants eux-mêmes, montrés en grand chez eux. C'est une démarche in situ." },
          ],
        },
        {
          titre: "Quand le spectateur entre dans l'œuvre",
          blocs: [
            { t: "definition", terme: "Performance", md: "Une **action réalisée par l'artiste devant un public**, souvent avec son propre corps. Elle n'existe que le temps où elle a lieu ; il en reste des photos, des vidéos, des témoignages." },
            { t: "exemple", titre: "Deux exemples", md: "En 1960, Yves Klein enduit des modèles de son bleu IKB et les fait s'appuyer sur de grandes feuilles devant des invités, au son d'un orchestre : ce sont les *Anthropométries*. En 2010, au MoMA de New York, Marina Abramović reste assise des semaines face à une chaise vide : chaque visiteur peut s'asseoir et la regarder en silence. Sans lui, l'œuvre n'existe pas." },
            { t: "tableau", titre: "La place du spectateur", entetes: ["Type d'œuvre", "Rôle du spectateur", "Durée"], lignes: [["Tableau au musée", "Regarde, à distance", "Durable"], ["Œuvre **éphémère**", "La voit pendant un temps limité, ou en photo", "Disparaît"], ["**Performance**", "Assiste à une action en direct", "Le temps de l'action"], ["Œuvre **participative**", "La traverse, la touche, la complète, la modifie", "Variable"]] },
            { t: "verifie", q: "Dans une œuvre participative, que fait le spectateur ?", choix: ["Il reste à distance et regarde", "Il agit sur l'œuvre : il la traverse, la touche ou la complète", "Il achète l'œuvre"], bonne: 1, explication: "Une œuvre participative a besoin de l'action du spectateur pour exister. Il n'est plus seulement regardeur, il devient acteur." },
          ],
        },
      ],
      bilan: "Hors du musée, l'œuvre se lie à un lieu, à un instant ou à un public : le spectateur n'est plus seulement celui qui regarde, il en devient parfois le cœur.",
    },
    "4e-arts-plastiques-05-histoire-des-arts": {
      accroche: "En 1830, un tableau montre une femme brandissant un drapeau au milieu des barricades. Moins de cinquante ans plus tard, d'autres peintres posent leur chevalet en plein air pour attraper un reflet sur l'eau. Entre-temps, une invention a bouleversé l'art : la photographie.",
      objectifs: [
        "Situer classicisme, baroque et néoclassicisme et leurs artistes",
        "Reconnaître romantisme, réalisme et impressionnisme",
        "Raconter la naissance de la photographie avec Niépce, Daguerre et Nadar",
      ],
      sections: [
        {
          titre: "Le XVIIe siècle : l'ordre ou le mouvement",
          blocs: [
            { t: "texte", md: "Au XVIIe siècle, deux grandes manières de peindre se côtoient. L'une veut **calmer** et **ordonner**, l'autre veut **émouvoir** et **surprendre**. Elles cherchent toutes deux la beauté, mais pas par les mêmes chemins." },
            { t: "tableau", titre: "Classicisme et baroque", entetes: ["", "Classicisme", "Baroque"], lignes: [["Lignes", "Calmes, horizontales et verticales, composition équilibrée", "Diagonales, courbes, mouvement"], ["Lumière", "Claire, régulière", "**Forts contrastes d'ombre et de lumière** (clair-obscur)"], ["Ce qu'on cherche", "La raison, la mesure, la clarté", "L'émotion, le spectaculaire, l'intime"], ["Artistes", "**Nicolas Poussin** (*Les Bergers d'Arcadie*, vers 1638)", "**Rembrandt** (*La Ronde de nuit*, 1642) ; la lumière douce des intérieurs de **Vermeer**"]] },
            { t: "savais-tu", md: "*La Jeune Fille à la perle* de Vermeer (vers 1665) n'est pas un portrait officiel : on ne sait même pas qui est la jeune femme. C'est la lumière qui glisse sur son visage et sur la perle qui fait la célébrité du tableau." },
            { t: "verifie", q: "Quelle caractéristique correspond au baroque de Rembrandt ?", choix: ["Des lignes calmes et une lumière égale", "De forts contrastes entre ombre et lumière", "Des touches rapides peintes en plein air", "Des sujets antiques aux lignes nettes"], bonne: 1, explication: "Rembrandt fait surgir ses personnages de l'ombre grâce au clair-obscur. Les lignes calmes, c'est le classicisme ; le plein air, l'impressionnisme." },
          ],
        },
        {
          titre: "Néoclassicisme et romantisme : la raison contre la passion",
          blocs: [
            { t: "texte", md: "À la fin du XVIIIe siècle, après la découverte des ruines de Pompéi, les artistes se passionnent pour l'**Antiquité**. Jacques-Louis **David** peint *Le Serment des Horaces* (1784) : trois frères jurent de se battre pour Rome. Lignes nettes, gestes droits, couleurs franches, sujet héroïque : c'est le **néoclassicisme**." },
            { t: "definition", terme: "Romantisme", md: "Mouvement du début du XIXe siècle qui exprime la **passion**, le **drame**, la souffrance et l'élan. Les compositions sont agitées, en diagonale, la couleur vibre, les sujets sont souvent tirés de l'actualité." },
            { t: "exemple", titre: "Deux toiles romantiques", md: "Théodore **Géricault** peint *Le Radeau de la Méduse* (1819) d'après un vrai naufrage : des survivants entassés, une pyramide de corps qui monte vers un bateau à peine visible. Eugène **Delacroix** peint *La Liberté guidant le peuple* (1830) en hommage à la révolution de juillet 1830 : la Liberté, drapeau tricolore levé, enjambe les barricades." },
          ],
        },
        {
          titre: "Réalisme et impressionnisme : peindre le monde tel qu'on le vit",
          blocs: [
            { t: "texte", md: "Au milieu du XIXe siècle, Gustave **Courbet** refuse d'embellir. *Un enterrement à Ornans* (1850) montre des villageois ordinaires, en noir, autour d'une tombe. Le scandale vient du **format monumental** (plus de 6 mètres de large), réservé jusque-là aux sujets nobles : histoire, religion, mythologie. C'est le **réalisme**." },
            { t: "definition", terme: "Impressionnisme", md: "Mouvement des années **1870** : les peintres travaillent souvent **en plein air**, par **touches rapides** et juxtaposées, pour saisir la **lumière du moment** et ses reflets changeants." },
            { t: "texte", md: "Claude **Monet** peint *Impression, soleil levant* en 1872 : le port du Havre dans la brume. Exposé en **1874**, le tableau inspire à un critique moqueur le mot « impressionnistes ». Le nom reste. Berthe **Morisot**, l'une des grandes figures du groupe, peint *Le Berceau* (1872), une scène intime d'une mère veillant son enfant." },
            { t: "astuce", md: "Face à un tableau inconnu, pose trois questions. Les lignes sont-elles **calmes ou agitées** ? La lumière est-elle **douce ou violemment contrastée** ? Le sujet est-il **noble ou quotidien** ? Lignes calmes et sujet antique : plutôt néoclassique. Agitation et drame : plutôt romantique. Quotidien sans embellissement : réaliste. Touches visibles et lumière changeante : impressionniste." },
            { t: "verifie", q: "Pourquoi « Un enterrement à Ornans » de Courbet a-t-il choqué en 1850 ?", choix: ["Parce qu'il est peint en plein air", "Parce qu'il montre des villageois ordinaires en format monumental, réservé aux sujets nobles", "Parce qu'il représente un roi", "Parce qu'il est en noir et blanc"], bonne: 1, explication: "Courbet donne à un simple enterrement de campagne la taille d'un tableau d'histoire : c'est ce renversement qui a choqué." },
          ],
        },
        {
          titre: "La naissance de la photographie",
          blocs: [
            { t: "texte", md: "Vers **1826-1827**, Nicéphore **Niépce** fixe pour la première fois une image sur une plaque, depuis la fenêtre de sa maison en Bourgogne : *Point de vue du Gras*. Il a fallu des heures de pose. En **1839**, Louis **Daguerre** présente à l'Académie des sciences un procédé bien plus rapide, le **daguerréotype**. Plus tard, **Nadar** photographie les célébrités de son temps et réalise en **1858** la première photographie aérienne, depuis un ballon." },
            { t: "frise", titre: "Du XVIIe au XIXe siècle", evenements: [{ date: 1638, label: "Poussin, Les Bergers d'Arcadie", detail: "Classicisme (date approximative)." }, { date: 1642, label: "Rembrandt, La Ronde de nuit", detail: "Baroque, clair-obscur." }, { date: 1665, label: "Vermeer, La Jeune Fille à la perle", detail: "Date approximative." }, { date: 1784, label: "David, Le Serment des Horaces", detail: "Néoclassicisme." }, { date: 1819, label: "Géricault, Le Radeau de la Méduse", detail: "Romantisme." }, { date: 1826, label: "Niépce, première photographie", detail: "Vers 1826-1827." }, { date: 1830, label: "Delacroix, La Liberté guidant le peuple", detail: "Romantisme." }, { date: 1839, label: "Le daguerréotype de Daguerre", detail: "Présenté à l'Académie des sciences." }, { date: 1850, label: "Courbet, Un enterrement à Ornans", detail: "Réalisme." }, { date: 1872, label: "Monet, Impression, soleil levant", detail: "Exposé en 1874 : l'impressionnisme est né." }] },
            { t: "savais-tu", md: "La première exposition impressionniste de 1874 s'est tenue dans l'ancien atelier de Nadar, boulevard des Capucines à Paris. Peinture et photographie avançaient côte à côte." },
            { t: "verifie", q: "Quel est l'ordre chronologique correct ?", choix: ["Romantisme, classicisme, réalisme, impressionnisme", "Classicisme, néoclassicisme, romantisme, réalisme, impressionnisme", "Néoclassicisme, classicisme, impressionnisme, romantisme"], bonne: 1, explication: "XVIIe : classicisme ; fin XVIIIe : néoclassicisme ; début XIXe : romantisme ; milieu XIXe : réalisme ; années 1870 : impressionnisme." },
          ],
        },
      ],
      bilan: "De l'ordre de Poussin à la lumière de Monet, en passant par la passion de Delacroix et la franchise de Courbet, chaque mouvement répond au précédent, pendant que la photographie apprend à fixer le réel.",
    },
    "4e-arts-plastiques-06-analyser-creer": {
      accroche: "Un homme seul, la nuit, dans un café éclairé. C'est tout ce que montre l'image. Pourtant tu ressens déjà la solitude, l'attente, peut-être la mélancolie. D'où vient ce que tu ressens, puisque ce n'est pas écrit ?",
      objectifs: [
        "Lire une image en distinguant dénotation et connotation",
        "Mener un projet artistique, de l'intention à l'exposition",
        "Respecter le droit d'auteur et le droit à l'image",
      ],
      sections: [
        {
          titre: "Ce que l'image montre, ce qu'elle évoque",
          blocs: [
            { t: "definition", terme: "Dénotation et connotation", md: "La **dénotation** décrit ce qu'on voit **objectivement**, sans interpréter : un homme, une table, une lampe allumée. La **connotation** dit ce que l'image **évoque**, les idées et les émotions qu'elle fait naître : solitude, chaleur, attente." },
            { t: "tableau", titre: "Deux niveaux de lecture", entetes: ["Image", "Dénotation (je vois…)", "Connotation (ça m'évoque…)"], lignes: [["*Nighthawks*, Edward Hopper (1942)", "Quatre personnes dans un café vitré, la nuit ; une rue vide", "La solitude au milieu de la ville, le silence"], ["Une affiche de céréales", "Un enfant souriant devant un paquet, lumière dorée", "Le bonheur, la chaleur familiale associés au produit"], ["Un paysage d'hiver", "Un ciel gris, trois arbres nus, une route vide", "Une impression de solitude et d'hiver intérieur"]] },
            { t: "astuce", md: "Commence **toujours** par la dénotation : décris tout, du premier plan à l'arrière-plan, comme pour quelqu'un qui ne voit pas l'image. Tu auras alors des preuves pour justifier ta connotation : « l'image évoque la solitude **parce que** la rue est vide et que les personnages ne se regardent pas »." },
            { t: "verifie", q: "« Une femme seule, assise dans un café, regarde par la fenêtre. » Cette phrase relève de :", choix: ["La connotation", "La dénotation", "L'intention", "La citation"], bonne: 1, explication: "La phrase décrit seulement ce qu'on voit, sans interpréter : c'est de la dénotation. « Elle semble triste et attend quelqu'un » serait une connotation." },
          ],
        },
        {
          titre: "Mener un projet artistique",
          blocs: [
            { t: "definition", terme: "Intention", md: "Ce que tu veux faire **ressentir** ou **comprendre** au spectateur. Elle guide tous tes choix : technique, format, couleurs, cadrage. « Je veux que le spectateur ressente l'attente » est une intention." },
            { t: "texte", md: "Une **référence** est une œuvre qui t'inspire. Une **citation** va plus loin : tu reprends volontairement un élément **reconnaissable** d'une œuvre célèbre, pour lui rendre hommage ou la détourner. Reprendre la pose de *La Joconde* pour ton propre portrait, c'est une citation." },
            { t: "etapes", titre: "Les étapes d'un projet", items: [{ titre: "Intention", md: "Formuler ce que tu veux exprimer." }, { titre: "Recherches", md: "Chercher des références, faire des croquis." }, { titre: "Expérimentations", md: "Essayer plusieurs techniques, cadrages, matériaux." }, { titre: "Réalisation", md: "Produire l'œuvre en gardant le cap de l'intention." }, { titre: "Présentation", md: "Exposer et expliquer tes choix." }, { titre: "Retour critique", md: "Recueillir les avis, analyser ce qui marche et ce qui reste à améliorer." }] },
            { t: "exemple", titre: "Projet « Mon quartier la nuit »", md: "Intention : montrer le calme inquiétant. Référence : les rues désertes d'Edward Hopper. Expérimentations : photos en contre-jour, puis fusain. Réalisation : une série de 5 images. Accrochage en ligne à hauteur des yeux, avec un cartel. Enfin, échange avec la classe." },
          ],
        },
        {
          titre: "Exposer : l'accrochage fait partie de l'œuvre",
          blocs: [
            { t: "texte", md: "**Exposer**, c'est choisir un lieu, une hauteur, un éclairage, un ordre, un titre. Une même photo accrochée très haut dans un couloir sombre ou à hauteur des yeux sous un spot ne produit pas le même effet. La façon d'accrocher change la manière dont on comprend l'œuvre." },
            { t: "schema", titre: "Un accrochage soigné", legende: "Le centre des œuvres est aligné à hauteur des yeux ; le cartel est placé à côté, lisible sans se pencher.", svg: `<svg viewBox="0 0 400 230"><line class="trait" x1="10" y1="210" x2="390" y2="210"/><line class="pointille" x1="10" y1="100" x2="390" y2="100"/><rect class="aplat" x="40" y="62" width="90" height="76"/><rect class="trait" fill="none" x="40" y="62" width="90" height="76"/><rect class="aplat" x="160" y="52" width="70" height="96"/><rect class="trait" fill="none" x="160" y="52" width="70" height="96"/><rect class="aplat-papier" x="244" y="112" width="40" height="26"/><rect class="trait-fin" fill="none" x="244" y="112" width="40" height="26"/><g class="trait-fin"><line x1="249" y1="120" x2="278" y2="120"/><line x1="249" y1="126" x2="272" y2="126"/><line x1="249" y1="132" x2="275" y2="132"/></g><text class="texte-petit" x="244" y="158">cartel : auteur, titre,</text><text class="texte-petit" x="244" y="172">date, technique</text><line class="trait-fin" x1="22" y1="100" x2="22" y2="208" marker-end="url(#fl)"/><text class="texte-petit" x="388" y="94" text-anchor="end">hauteur des yeux</text><text class="texte-petit" x="28" y="190">≈ 1,50 m</text><path class="trait-fin" fill="none" d="M150 20 L120 58 M150 20 L190 48"/><text class="texte-petit" x="150" y="14" text-anchor="middle">éclairage</text></svg>` },
            { t: "definition", terme: "Cartel", md: "La petite étiquette placée à côté d'une œuvre exposée : **nom de l'auteur**, **titre**, **date** et **technique** (et parfois les dimensions)." },
          ],
        },
        {
          titre: "Droit d'auteur et droit à l'image",
          blocs: [
            { t: "propriete", titre: "Le droit d'auteur", md: "Toute création est protégée **dès sa réalisation**, sans aucun dépôt ni démarche. Personne ne peut la copier, la diffuser ou la modifier sans l'accord de l'auteur. En France, l'œuvre entre dans le **domaine public 70 ans après la mort de l'auteur** : chacun peut alors la réutiliser librement." },
            { t: "propriete", titre: "Le droit à l'image", md: "On ne peut pas diffuser la photo d'une personne **reconnaissable** sans son **accord**, et celui de ses **parents** si elle est mineure." },
            { t: "attention", md: "Copier une illustration trouvée sur Internet et la signer de ton nom, c'est un **plagiat** : tu t'appropries l'œuvre d'un autre sans autorisation ni mention. Pour t'en inspirer honnêtement, cite la source, transforme vraiment l'image, ou choisis une œuvre du domaine public." },
            { t: "verifie", q: "Tu photographies ton camarade dans la cour et tu veux publier la photo sur un réseau social. Que dois-tu faire ?", choix: ["Rien, c'est toi qui as pris la photo", "Demander son accord et celui de ses parents, car il est mineur", "Flouter seulement le décor", "Attendre 70 ans"], bonne: 1, explication: "Ton camarade est reconnaissable et mineur : il faut son accord et celui de ses parents. Les 70 ans concernent le droit d'auteur, pas le droit à l'image." },
          ],
        },
      ],
      bilan: "Décrire avant d'interpréter, partir d'une intention, exposer avec soin et respecter les droits des autres : voilà ce qui fait de toi à la fois un regardeur lucide et un auteur responsable.",
    },
  },
};
