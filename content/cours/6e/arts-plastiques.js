// Cours ÉCLORE — 6e Arts plastiques. Schéma : docs/COURS.md
export default {
  id: "6e-arts-plastiques",
  chapitres: {
    "6e-arts-plastiques-01-couleurs-matieres": {
      accroche: "Avec seulement trois tubes de gouache, un peintre peut fabriquer presque toutes les couleurs du monde. Lesquels choisir, et comment les mélanger sans obtenir une boue marron ?",
      objectifs: [
        "Nommer les couleurs primaires, secondaires et complémentaires",
        "Distinguer couleurs chaudes et froides, et fabriquer une nuance",
        "Choisir un outil, une matière et un support selon l'effet voulu",
      ],
      sections: [
        {
          titre: "Les couleurs primaires et secondaires",
          blocs: [
            { t: "texte", md: "Ouvre une boîte de gouache : tu y trouves souvent un rouge, un jaune et un bleu. Ce ne sont pas des couleurs comme les autres. On ne peut **pas** les fabriquer en mélangeant d'autres couleurs : ce sont les **couleurs primaires**.\n\nEn revanche, en les mélangeant deux à deux, tu fabriques trois nouvelles couleurs : les **couleurs secondaires**." },
            { t: "definition", terme: "Couleurs primaires", md: "Les trois couleurs de base de la peinture : le **rouge** (plus précisément le magenta), le **jaune** et le **bleu** (le cyan). Aucun mélange ne permet de les obtenir." },
            { t: "tableau", titre: "Les mélanges à connaître", entetes: ["Mélange de deux primaires", "Couleur secondaire obtenue"], lignes: [["Rouge + jaune", "**Orange**"], ["Jaune + bleu", "**Vert**"], ["Bleu + rouge", "**Violet**"]] },
            { t: "attention", md: "Si tu mélanges les **trois** primaires en gouache, tu n'obtiens pas du blanc mais un **brun très sombre**, presque noir. Pour garder des couleurs vives, ne mélange que deux couleurs à la fois." },
            { t: "verifie", q: "Combien de couleurs secondaires obtient-on en mélangeant deux à deux les trois primaires ?", choix: ["2", "3", "6"], bonne: 1, explication: "Il y a trois paires possibles : rouge + jaune (orange), jaune + bleu (vert), bleu + rouge (violet). Donc trois secondaires." },
          ],
        },
        {
          titre: "Le cercle chromatique et les complémentaires",
          blocs: [
            { t: "texte", md: "Les peintres rangent les couleurs sur un **cercle chromatique**, dans l'ordre de l'arc-en-ciel : rouge, orange, jaune, vert, bleu, violet… puis on revient au rouge. Chaque secondaire se place entre les deux primaires qui la composent." },
            { t: "schema", titre: "Le cercle chromatique", legende: "Les primaires (aplats foncés) alternent avec les secondaires (aplats clairs). Les couleurs placées face à face sont complémentaires.", svg: `<svg viewBox="0 0 400 250"><path class="aplat-fort" d="M150 125 L102.5 42.7 A95 95 0 0 1 197.5 42.7 Z"/><path class="aplat" d="M150 125 L197.5 42.7 A95 95 0 0 1 245 125 Z"/><path class="aplat-fort" d="M150 125 L245 125 A95 95 0 0 1 197.5 207.3 Z"/><path class="aplat" d="M150 125 L197.5 207.3 A95 95 0 0 1 102.5 207.3 Z"/><path class="aplat-fort" d="M150 125 L102.5 207.3 A95 95 0 0 1 55 125 Z"/><path class="aplat" d="M150 125 L55 125 A95 95 0 0 1 102.5 42.7 Z"/><circle class="trait" cx="150" cy="125" r="95" fill="none"/><line class="trait-fin" x1="102.5" y1="42.7" x2="197.5" y2="207.3"/><line class="trait-fin" x1="197.5" y1="42.7" x2="102.5" y2="207.3"/><line class="trait-fin" x1="55" y1="125" x2="245" y2="125"/><text class="texte" x="150" y="72" text-anchor="middle">rouge</text><text class="texte" x="204" y="99" text-anchor="middle">orange</text><text class="texte" x="204" y="160" text-anchor="middle">jaune</text><text class="texte" x="150" y="190" text-anchor="middle">vert</text><text class="texte" x="96" y="160" text-anchor="middle">bleu</text><text class="texte" x="96" y="99" text-anchor="middle">violet</text><rect class="aplat-fort" x="270" y="40" width="18" height="14"/><text class="texte-petit" x="296" y="51">primaire</text><rect class="aplat" x="270" y="64" width="18" height="14"/><text class="texte-petit" x="296" y="75">secondaire</text><text class="texte-main" x="270" y="118">Face à face :</text><text class="texte-petit" x="270" y="142">rouge ↔ vert</text><text class="texte-petit" x="270" y="162">bleu ↔ orange</text><text class="texte-petit" x="270" y="182">jaune ↔ violet</text></svg>` },
            { t: "propriete", titre: "Couleurs complémentaires", md: "La complémentaire d'une primaire est la secondaire fabriquée avec **les deux autres** primaires :\n- rouge ↔ **vert** (jaune + bleu) ;\n- bleu ↔ **orange** (rouge + jaune) ;\n- jaune ↔ **violet** (bleu + rouge).\n\nPosées côte à côte, deux complémentaires se **renforcent** : chacune paraît plus éclatante." },
            { t: "exemple", titre: "Faire ressortir une orange", md: "Tu peins une orange et tu veux qu'elle « saute aux yeux ». Sa complémentaire est le **bleu** : un fond bleu la rendra plus lumineuse qu'un fond jaune, qui se confondrait avec elle." },
            { t: "verifie", q: "Quelle est la couleur complémentaire du jaune ?", choix: ["Le vert", "Le violet", "L'orange", "Le rouge"], bonne: 1, explication: "Le jaune est face au violet sur le cercle. Le violet est fait avec les deux autres primaires : bleu + rouge." },
          ],
        },
        {
          titre: "Chaud, froid et nuances",
          blocs: [
            { t: "texte", md: "Les couleurs n'ont pas de température, et pourtant on les sent ! Le rouge, l'orange et le jaune rappellent le feu et le soleil : ce sont les **couleurs chaudes**. Le bleu, le vert et le violet rappellent l'eau, la glace, l'ombre : ce sont les **couleurs froides**. Un peintre les choisit selon l'ambiance qu'il veut créer." },
            { t: "definition", terme: "Nuance", md: "Une variation d'une couleur. On l'éclaircit en ajoutant du **blanc**, on l'assombrit en ajoutant du **noir**, ou on la modifie avec une pointe d'une autre couleur." },
            { t: "schema", titre: "Les nuances d'une même couleur", legende: "Plus on ajoute de blanc, plus la couleur s'éclaircit ; plus on ajoute de noir, plus elle s'assombrit.", svg: `<svg viewBox="0 0 400 170"><rect x="20" y="50" width="60" height="60" fill="var(--pigment)" fill-opacity="0.2" class="trait-fin"/><rect x="92" y="50" width="60" height="60" fill="var(--pigment)" fill-opacity="0.5" class="trait-fin"/><rect x="170" y="50" width="60" height="60" fill="var(--pigment)" class="trait"/><rect x="248" y="50" width="60" height="60" fill="var(--pigment)" class="trait-fin"/><rect x="248" y="50" width="60" height="60" fill="var(--encre)" fill-opacity="0.35"/><rect x="320" y="50" width="60" height="60" fill="var(--pigment)" class="trait-fin"/><rect x="320" y="50" width="60" height="60" fill="var(--encre)" fill-opacity="0.7"/><text class="texte" x="200" y="132" text-anchor="middle">couleur pure</text><text class="texte-petit" x="86" y="132" text-anchor="middle">+ blanc</text><text class="texte-petit" x="314" y="132" text-anchor="middle">+ noir</text><path class="trait-fin" d="M160 30 L30 30" marker-end="url(#fl)"/><path class="trait-fin" d="M240 30 L370 30" marker-end="url(#fl)"/><text class="texte-main" x="95" y="22" text-anchor="middle">plus clair</text><text class="texte-main" x="305" y="22" text-anchor="middle">plus foncé</text></svg>` },
            { t: "exemple", titre: "Un coucher de soleil", etapes: ["Tu poses des bandes de couleurs chaudes : jaune en bas, puis orange, puis rouge.", "Près du soleil, tu ajoutes du blanc au jaune pour éclaircir le ciel.", "En haut, une pointe de violet (froid) assombrit le ciel qui s'endort."] },
            { t: "attention", md: "Le vert n'est **pas** une couleur chaude : il évoque l'herbe fraîche et l'eau. Il fait partie des couleurs froides." },
          ],
        },
        {
          titre: "Outils, matières et supports",
          blocs: [
            { t: "texte", md: "Une même idée change complètement selon ce que tu utilises. Trois choix comptent : l'**outil** (ce qui pose la matière), la **matière** (ce qui laisse une trace) et le **support** (la surface sur laquelle tu travailles)." },
            { t: "tableau", titre: "Quelques matières et leurs effets", entetes: ["Matière", "Caractéristique", "Effet obtenu"], lignes: [["Gouache", "Peinture à l'eau, **opaque**, qui couvre bien", "Aplats nets, couleurs franches"], ["Aquarelle", "Peinture très diluée, **transparente**", "On voit le papier à travers, effets légers"], ["Encre de Chine", "Liquide noir très intense", "Traits fins à la plume, noirs profonds"], ["Pastel gras", "Bâton de couleur grasse que l'on frotte", "Couche épaisse et brillante"], ["Fusain", "Bâton de charbon de bois", "Trait noir qu'on estompe au doigt"]] },
            { t: "liste", titre: "Outils et supports", items: ["**Outils** : pinceau fin pour les détails, brosse pour les grandes surfaces, éponge pour les textures, doigts, rouleau…", "**Supports** : papier (fin ou épais), carton, toile, bois, et même un mur !"] },
            { t: "astuce", md: "Avant de te lancer, fais un **essai** sur une chute de papier : tu vois tout de suite si l'outil et la matière donnent l'effet que tu cherches." },
            { t: "verifie", q: "Avec quoi dessine-t-on un trait noir que l'on peut estomper avec le doigt ?", choix: ["Le feutre", "Le fusain", "La gouache"], bonne: 1, explication: "Le fusain est un bâton de charbon de bois : sa poudre noire s'étale facilement au doigt pour créer des ombres douces." },
          ],
        },
      ],
      bilan: "Trois primaires, trois secondaires, des complémentaires face à face : avec le cercle chromatique, du blanc, du noir et le bon outil, tu tiens toutes les couleurs entre tes mains.",
    },

    "6e-arts-plastiques-02-representation": {
      accroche: "Une photo de ta classe prise depuis le plafond et la même prise au ras du sol ne racontent pas du tout la même histoire. Représenter, c'est toujours choisir.",
      objectifs: [
        "Dessiner d'après observation en respectant les proportions",
        "Utiliser cadrage, point de vue et plans pour composer une image",
        "Comprendre que l'écart avec le réel peut être un choix expressif",
      ],
      sections: [
        {
          titre: "Dessiner ce que l'on voit",
          blocs: [
            { t: "texte", md: "Quand on dessine un objet « de tête », on dessine ce que l'on **croit** savoir : une maison carrée avec un toit triangle. Quand on dessine **d'après observation**, on regarde le modèle réel, longtemps et souvent, et on dessine ce que l'on **voit** : les angles, les ombres, les proportions exactes." },
            { t: "definition", terme: "Dessin d'observation", md: "Un dessin réalisé en regardant un modèle réel. L'œil fait des allers-retours constants entre le modèle et la feuille." },
            { t: "exemple", titre: "Dessiner sa trousse", etapes: ["Regarde ta trousse dix secondes sans dessiner.", "Trace légèrement sa forme générale, sans appuyer.", "Compare sa longueur et sa largeur : est-elle deux fois plus longue que large ?", "Corrige les proportions, puis ajoute la fermeture et les détails.", "Termine par les ombres et les traits plus appuyés."] },
            { t: "astuce", md: "Pour mesurer une proportion, tends le bras, tiens ton crayon à la verticale et compare : « la largeur tient deux fois dans la longueur ». Garde toujours le bras tendu !" },
          ],
        },
        {
          titre: "Cadrage et point de vue",
          blocs: [
            { t: "definition", terme: "Cadrage", md: "Le choix de ce que l'image montre et de ce qu'elle laisse **hors du cadre**. Plus on se rapproche, plus on isole un détail." },
            { t: "schema", titre: "Du plan d'ensemble au très gros plan", legende: "Le même personnage, cadré de plus en plus près.", svg: `<svg viewBox="0 0 400 180"><rect class="trait" x="8" y="30" width="88" height="100" fill="none"/><rect class="trait" x="108" y="30" width="88" height="100" fill="none"/><rect class="trait" x="208" y="30" width="88" height="100" fill="none"/><rect class="trait" x="308" y="30" width="88" height="100" fill="none"/><line class="trait-fin" x1="8" y1="112" x2="96" y2="112"/><circle class="aplat" cx="30" cy="80" r="14"/><line class="trait-fin" x1="30" y1="94" x2="30" y2="112"/><circle class="trait-fin" cx="62" cy="98" r="3" fill="none"/><line class="trait-fin" x1="62" y1="101" x2="62" y2="109"/><line class="trait-fin" x1="62" y1="104" x2="58" y2="107"/><line class="trait-fin" x1="62" y1="104" x2="66" y2="107"/><line class="trait-fin" x1="62" y1="109" x2="59" y2="112"/><line class="trait-fin" x1="62" y1="109" x2="65" y2="112"/><circle class="trait" cx="152" cy="50" r="10" fill="none"/><line class="trait" x1="152" y1="60" x2="152" y2="100"/><line class="trait" x1="152" y1="70" x2="136" y2="88"/><line class="trait" x1="152" y1="70" x2="168" y2="88"/><line class="trait" x1="152" y1="100" x2="140" y2="126"/><line class="trait" x1="152" y1="100" x2="164" y2="126"/><circle class="aplat trait" cx="252" cy="78" r="36"/><circle cx="240" cy="70" r="3" fill="var(--encre)"/><circle cx="264" cy="70" r="3" fill="var(--encre)"/><path class="trait-fin" d="M240 92 Q252 100 264 92" fill="none"/><path class="trait" d="M318 80 Q352 50 386 80 Q352 110 318 80 Z" fill="none"/><circle class="aplat-fort" cx="352" cy="80" r="14"/><circle cx="352" cy="80" r="6" fill="var(--encre)"/><text class="texte-petit" x="52" y="150" text-anchor="middle">plan d'ensemble</text><text class="texte-petit" x="152" y="150" text-anchor="middle">plan moyen</text><text class="texte-petit" x="252" y="150" text-anchor="middle">gros plan</text><text class="texte-petit" x="352" y="150" text-anchor="middle">très gros plan</text><text class="texte-petit" x="52" y="166" text-anchor="middle">(le lieu)</text><text class="texte-petit" x="152" y="166" text-anchor="middle">(le corps)</text><text class="texte-petit" x="252" y="166" text-anchor="middle">(le visage)</text><text class="texte-petit" x="352" y="166" text-anchor="middle">(un détail)</text></svg>` },
            { t: "tableau", titre: "Les trois points de vue", entetes: ["Point de vue", "Où est le regard ?", "Effet produit"], lignes: [["Vue frontale", "À la hauteur du sujet, en face", "Neutre, calme, comme une rencontre"], ["**Plongée**", "Au-dessus du sujet (vu d'en haut)", "Le sujet paraît petit, fragile, écrasé"], ["**Contre-plongée**", "Au-dessous du sujet (vu d'en bas)", "Le sujet paraît grand, puissant, imposant"]] },
            { t: "verifie", q: "Tu veux qu'un personnage paraisse puissant et imposant. Quel point de vue choisis-tu ?", choix: ["La plongée", "La contre-plongée", "Le très gros plan"], bonne: 1, explication: "En contre-plongée, on regarde le sujet d'en bas : il domine le spectateur et paraît plus grand." },
          ],
        },
        {
          titre: "Les plans et la profondeur",
          blocs: [
            { t: "texte", md: "Une feuille est plate, et pourtant un dessin peut donner l'illusion de la profondeur. Pour cela, on organise l'image en **plans** : ce qui est proche est plus grand, plus net et placé plus bas ; ce qui est loin est plus petit, plus pâle et plus haut, près de la ligne d'horizon." },
            { t: "schema", titre: "Premier plan, second plan, arrière-plan", legende: "Les bords de la route convergent vers un seul point de fuite, sur la ligne d'horizon.", svg: `<svg viewBox="0 0 400 220"><line class="trait-fin" x1="10" y1="90" x2="390" y2="90"/><path class="aplat" d="M40 90 L90 55 L130 90 Z"/><path class="aplat" d="M110 90 L150 65 L190 90 Z"/><path class="aplat-papier trait-fin" d="M110 210 L200 90 L290 210 Z"/><line class="pointille" x1="200" y1="90" x2="200" y2="210"/><circle class="aplat-fort" cx="200" cy="90" r="4"/><text class="texte-petit" x="208" y="82">point de fuite</text><rect class="trait" x="260" y="78" width="22" height="12" fill="none"/><path class="trait-fin" d="M258 78 L271 70 L284 78" fill="none"/><line class="trait" x1="340" y1="210" x2="340" y2="140"/><circle class="aplat-fort" cx="340" cy="125" r="28"/><text class="texte-main" x="20" y="40">arrière-plan</text><text class="texte-main" x="232" y="64">second plan</text><text class="texte-main" x="18" y="200">premier plan</text><text class="texte-petit" x="330" y="104" text-anchor="end">ligne d'horizon →</text></svg>` },
            { t: "definition", terme: "Composition", md: "La manière d'organiser les formes, les couleurs et les plans dans l'espace de la feuille. Composer, c'est décider **où** placer chaque élément." },
            { t: "verifie", q: "Dans une image, comment appelle-t-on ce qui est le plus proche du spectateur ?", choix: ["L'arrière-plan", "Le second plan", "Le premier plan"], bonne: 2, explication: "Le premier plan est le plus proche : il est en bas de l'image et ses éléments sont les plus grands." },
          ],
        },
        {
          titre: "Ressemblance et écart",
          blocs: [
            { t: "texte", md: "Une image n'est jamais la chose elle-même : un dessin de pomme ne se mange pas ! Entre l'image et le réel, il existe toujours une différence, plus ou moins grande : c'est l'**écart**.\n\nCertains artistes cherchent la ressemblance la plus parfaite. D'autres **déforment**, **exagèrent** ou **simplifient** volontairement pour exprimer une émotion, faire rire ou surprendre. Une image très ressemblante n'est donc pas forcément meilleure : tout dépend de l'intention." },
            { t: "propriete", titre: "Jouer avec l'échelle", md: "L'**échelle** compare les tailles des éléments entre eux. Si tu dessines une maison minuscule à côté d'une pomme géante, tu inverses les tailles habituelles : l'image devient étrange, poétique ou drôle." },
            { t: "savais-tu", md: "Le peintre belge René Magritte a peint une pomme si grande qu'elle remplit toute une pièce. Ce changement d'échelle rend une chose banale complètement mystérieuse." },
            { t: "attention", md: "Ne confonds pas **écart** et **erreur**. Une déformation choisie et assumée est un choix expressif ; une proportion ratée par manque d'observation est une maladresse." },
          ],
        },
      ],
      bilan: "Observer, cadrer, choisir un point de vue, organiser des plans : chaque image est une suite de décisions, et l'écart avec le réel peut devenir ta plus grande force.",
    },

    "6e-arts-plastiques-03-fabriquer-presenter": {
      accroche: "En 1942, Picasso ramasse une vieille selle et un guidon de vélo. Il les assemble… et il obtient une tête de taureau. Comment un objet devient-il une œuvre ?",
      objectifs: [
        "Fabriquer un volume par modelage, taille ou assemblage",
        "Comprendre le rôle du socle et de l'espace autour d'une œuvre",
        "Présenter sa production avec le vocabulaire de l'exposition",
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'un volume ?",
          blocs: [
            { t: "texte", md: "Un dessin ou une photographie sont plats : ils ont **deux dimensions** (largeur et hauteur). Une sculpture a une troisième dimension : la **profondeur**. Tu peux tourner autour, la voir de dos, de côté, et sa forme change à chaque pas." },
            { t: "definition", terme: "Volume", md: "Une œuvre qui existe en **trois dimensions** : hauteur, largeur et profondeur. On parle de **ronde-bosse** quand on peut en faire entièrement le tour." },
            { t: "tableau", titre: "Trois façons de fabriquer un volume", entetes: ["Technique", "Ce que l'on fait", "Exemple de matériau"], lignes: [["**Modeler**", "On façonne une matière molle avec les mains : on ajoute, on pousse, on lisse", "Argile, pâte à modeler"], ["**Tailler**", "On retire de la matière d'un bloc, morceau par morceau", "Pierre, bois, savon, plâtre"], ["**Assembler**", "On réunit des éléments en les collant, attachant ou emboîtant", "Carton, objets, fil de fer"]] },
            { t: "verifie", q: "Un artiste retire de la matière d'un bloc de pierre pour faire apparaître une forme. Quelle technique utilise-t-il ?", choix: ["Le modelage", "La taille", "L'assemblage"], bonne: 1, explication: "Tailler, c'est enlever de la matière. Modeler, c'est façonner une matière molle ; assembler, c'est réunir des éléments." },
          ],
        },
        {
          titre: "Des matériaux et des objets",
          blocs: [
            { t: "texte", md: "Chaque matériau a ses qualités. L'argile est **malléable** : elle garde la forme qu'on lui donne. Le fil de fer se **plie** et tient tout seul. Le carton est **léger** et facile à découper. Le plâtre durcit en séchant.\n\nEt **tout objet du quotidien** peut devenir le matériau d'une œuvre : bouchons, boîtes, chaussures, vieux jouets…" },
            { t: "exemple", titre: "La Tête de taureau de Picasso (1942)", md: "Picasso pose une **selle** de vélo à plat et fixe un **guidon** au-dessus, comme deux cornes. Il n'a presque rien transformé : c'est l'**assemblage** et le regard de l'artiste qui changent ces objets en tête d'animal." },
            { t: "etapes", titre: "Fabriquer une sculpture en papier assemblé", items: [{ titre: "Préparer", md: "Découpe des bandes dans trois feuilles de papier épais." }, { titre: "Transformer", md: "Plie les bandes en accordéon, roule-les ou froisse-les." }, { titre: "Assembler", md: "Colle les éléments entre eux pour construire une forme qui tient debout." }, { titre: "Installer", md: "Choisis un socle (une boîte) et l'endroit où la poser." }] },
            { t: "definition", terme: "Maquette", md: "Un **modèle réduit** réalisé avant une grande sculpture ou un bâtiment, pour tester la forme et l'équilibre." },
          ],
        },
        {
          titre: "L'œuvre et l'espace : le socle",
          blocs: [
            { t: "texte", md: "Où poser une sculpture ? La question n'est pas un détail. Le **socle** porte l'œuvre et la sépare du sol. Sa hauteur décide de la façon dont on la regarde : posée par terre, on la domine ; sur un socle haut, elle se trouve à hauteur des yeux ; suspendue au plafond, elle semble flotter et on lève la tête." },
            { t: "schema", titre: "Trois manières de présenter une sculpture", legende: "Le même objet change de statut selon sa présentation.", svg: `<svg viewBox="0 0 400 220"><line class="trait" x1="10" y1="190" x2="390" y2="190"/><line class="trait" x1="10" y1="20" x2="390" y2="20"/><circle class="aplat-fort" cx="70" cy="176" r="14"/><text class="texte-petit" x="70" y="208" text-anchor="middle">au sol</text><rect class="aplat-papier trait" x="178" y="110" width="44" height="80"/><circle class="aplat-fort" cx="200" cy="96" r="14"/><text class="texte-petit" x="200" y="208" text-anchor="middle">sur un socle</text><line class="trait-fin" x1="330" y1="20" x2="330" y2="70"/><circle class="aplat-fort" cx="330" cy="84" r="14"/><text class="texte-petit" x="330" y="208" text-anchor="middle">suspendue</text><circle class="trait" cx="120" cy="80" r="6" fill="none"/><path class="pointille" d="M126 82 L184 94"/><path class="pointille" d="M114 84 L80 166"/><text class="texte-main" x="120" y="62" text-anchor="middle">œil</text></svg>` },
            { t: "definition", terme: "Installation", md: "Une œuvre qui occupe **tout un espace** (une salle, un coin de cour…) et dans laquelle le spectateur peut parfois circuler." },
            { t: "verifie", q: "Un artiste suspend sa sculpture au plafond au lieu de la poser sur un socle. Qu'est-ce que cela change ?", choix: ["Rien, seule la forme compte", "Elle semble flotter et le spectateur la regarde autrement", "Elle devient une peinture"], bonne: 1, explication: "La présentation fait partie de l'œuvre : suspendue, la sculpture paraît légère et oblige à lever les yeux." },
          ],
        },
        {
          titre: "Exposer et présenter",
          blocs: [
            { t: "texte", md: "Une **exposition** est le moment où l'on montre des œuvres au public, dans un musée, une galerie… ou dans ta salle d'arts plastiques. À côté de chaque œuvre, une petite étiquette donne ses informations : le **cartel**." },
            { t: "schema", titre: "Un cartel d'exposition", legende: "Cinq informations : l'auteur, le titre, la date, la technique et les dimensions.", svg: `<svg viewBox="0 0 400 190"><rect class="aplat-papier trait" x="70" y="20" width="260" height="150"/><text class="texte" x="90" y="52" font-weight="bold">Pablo Picasso</text><text class="texte" x="90" y="78" font-style="italic">Tête de taureau</text><text class="texte" x="90" y="102">1942</text><text class="texte-petit" x="90" y="126">Selle et guidon de bicyclette</text><text class="texte-petit" x="90" y="148">33,5 × 43,5 × 19 cm</text><text class="texte-main" x="340" y="52">auteur</text><text class="texte-main" x="340" y="78">titre</text><text class="texte-main" x="340" y="102">date</text><text class="texte-main" x="340" y="126">technique</text><text class="texte-main" x="340" y="152">taille</text></svg>` },
            { t: "astuce", md: "Pour présenter ta production, utilise trois phrases : « J'ai voulu… (ton intention) », « Pour cela, j'ai utilisé… (matériaux, technique) », « Je l'ai placée ainsi parce que… (présentation) »." },
          ],
        },
      ],
      bilan: "Modeler, tailler ou assembler pour créer un volume, puis choisir son socle et sa place : présenter une œuvre, c'est encore la créer.",
    },

    "6e-arts-plastiques-04-vocabulaire-images": {
      accroche: "Devant un tableau, beaucoup de gens disent seulement « c'est beau » ou « c'est moche ». Avec quelques mots précis, tu vas pouvoir dire pourquoi une image te touche.",
      objectifs: [
        "Distinguer figuratif et abstrait, et reconnaître les grands genres",
        "Décrire une image avec les mots de la ligne, de la forme et de la texture",
        "Repérer le rôle de la lumière et de l'ombre",
      ],
      sections: [
        {
          titre: "Figuratif ou abstrait ?",
          blocs: [
            { t: "definition", terme: "Image figurative", md: "Une image qui représente des choses **reconnaissables** : un visage, un arbre, une maison, même déformés." },
            { t: "definition", terme: "Image abstraite", md: "Une image qui ne représente **rien de reconnaissable** : seulement des formes, des lignes et des couleurs, organisées pour elles-mêmes." },
            { t: "savais-tu", md: "Vers 1910, le peintre Vassily Kandinsky est l'un des premiers à peindre des tableaux abstraits. Il comparait les couleurs à des notes de musique : on n'a pas besoin de « reconnaître » une musique pour être ému." },
            { t: "tableau", titre: "Les grands genres de la peinture figurative", entetes: ["Genre", "Ce qu'il représente", "Exemple célèbre"], lignes: [["**Portrait**", "Une personne", "*La Joconde*, Léonard de Vinci"], ["**Autoportrait**", "L'artiste lui-même", "Les autoportraits de Van Gogh"], ["**Paysage**", "Un lieu : campagne, mer, ville", "*Impression, soleil levant*, Monet"], ["**Nature morte**", "Des objets inanimés : fruits, vases, instruments", "Les pommes de Cézanne"]] },
            { t: "verifie", q: "Un tableau montre des fruits, un vase et un couteau posés sur une table. C'est :", choix: ["Un paysage", "Une nature morte", "Un portrait", "Une œuvre abstraite"], bonne: 1, explication: "Des objets inanimés posés sur une table : c'est une nature morte. Elle est figurative puisqu'on reconnaît les objets." },
          ],
        },
        {
          titre: "Lignes, formes et textures",
          blocs: [
            { t: "texte", md: "La **ligne** est l'élément le plus simple d'une image, mais elle exprime beaucoup. Elle peut être droite, courbe, brisée, épaisse ou fine. Son orientation crée une impression : couchée, elle repose ; dressée, elle se tient ; penchée, elle bouge." },
            { t: "schema", titre: "Des lignes de la plus calme à la plus dynamique", legende: "L'œil ressent du repos devant l'horizontale et de l'agitation devant le zigzag.", svg: `<svg viewBox="0 0 400 200"><line class="trait" x1="20" y1="120" x2="90" y2="120"/><line class="trait" x1="145" y1="85" x2="145" y2="155"/><line class="trait" x1="215" y1="155" x2="265" y2="85"/><path class="trait" d="M310 150 L325 95 L340 150 L355 95 L370 150 L385 95" fill="none"/><text class="texte" x="55" y="182" text-anchor="middle">horizontale</text><text class="texte" x="145" y="182" text-anchor="middle">verticale</text><text class="texte" x="240" y="182" text-anchor="middle">oblique</text><text class="texte" x="347" y="182" text-anchor="middle">zigzag</text><text class="texte-petit" x="55" y="70" text-anchor="middle">repos</text><text class="texte-petit" x="145" y="70" text-anchor="middle">stabilité</text><text class="texte-petit" x="240" y="70" text-anchor="middle">mouvement</text><text class="texte-petit" x="347" y="70" text-anchor="middle">agitation</text><path class="trait-fin" d="M30 30 L370 30" marker-end="url(#fl-p)"/><text class="texte-main" x="200" y="22" text-anchor="middle">de plus en plus dynamique</text></svg>` },
            { t: "liste", titre: "Pour décrire les formes et les surfaces", items: ["Les formes **géométriques** ont des contours réguliers : carré, cercle, triangle.", "Les formes **organiques** ont des contours irréguliers, comme une feuille, un nuage ou une tache.", "La **texture** est l'aspect de la surface : lisse, rugueuse, douce, granuleuse. On peut la voir et parfois la toucher."] },
            { t: "attention", md: "Une forme géométrique n'est **pas** une forme irrégulière : c'est même le contraire. Une tache aux bords imprévisibles est une forme organique." },
          ],
        },
        {
          titre: "Lumière et ombre",
          blocs: [
            { t: "texte", md: "Sans lumière, on ne verrait rien. Dans une image, la lumière crée des zones claires et des zones sombres qui donnent du **relief** aux objets. Observe une pomme posée près d'une fenêtre : un côté brille, l'autre est sombre, et une tache sombre s'étale sur la table." },
            { t: "schema", titre: "Ombre propre et ombre portée", legende: "L'ombre propre est sur l'objet ; l'ombre portée est projetée sur le sol ou le mur.", svg: `<svg viewBox="0 0 400 220"><circle class="aplat-fort" cx="60" cy="45" r="16"/><text class="texte-petit" x="60" y="80" text-anchor="middle">lumière</text><path class="trait-fin" d="M78 54 L160 98" marker-end="url(#fl)"/><line class="trait" x1="20" y1="180" x2="390" y2="180"/><ellipse cx="270" cy="178" rx="78" ry="12" fill="var(--encre)" fill-opacity="0.35"/><circle class="aplat-papier trait" cx="200" cy="130" r="48"/><path d="M200 82 A48 48 0 0 1 200 178 A30 48 0 0 0 200 82 Z" fill="var(--encre)" fill-opacity="0.45"/><text class="texte-main" x="290" y="110">ombre propre</text><path class="trait-fin" d="M288 106 L232 120" marker-end="url(#fl)"/><text class="texte-main" x="300" y="212">ombre portée</text><path class="trait-fin" d="M320 196 L300 182" marker-end="url(#fl)"/><text class="texte-petit" x="160" y="122" text-anchor="middle">clair</text></svg>` },
            { t: "propriete", titre: "Trois mots pour la lumière", md: "- Le **clair-obscur** est un **fort contraste** entre lumière et ombre, comme chez Caravage ou Georges de La Tour.\n- Le **dégradé** est un passage **progressif** d'une teinte à une autre, ou du clair au foncé.\n- Le **camaïeu** utilise une seule couleur en plusieurs tons." },
            { t: "verifie", q: "Comment appelle-t-on la zone sombre qu'un objet éclairé projette sur le sol ?", choix: ["L'ombre propre", "L'ombre portée", "Le dégradé"], bonne: 1, explication: "L'ombre portée est « portée » loin de l'objet, sur le sol ou le mur. L'ombre propre reste sur l'objet lui-même." },
          ],
        },
        {
          titre: "Décrire une image avec précision",
          blocs: [
            { t: "texte", md: "Rappelle-toi qu'une image plate (dessin, peinture, photographie) n'a que **deux dimensions**. Pour la décrire, passe en revue chaque élément du vocabulaire, du plus général au plus précis." },
            { t: "exemple", titre: "Décrire un tableau en quatre phrases", etapes: ["Le genre : « C'est un paysage figuratif. »", "Les lignes et formes : « La ligne d'horizon, très basse et horizontale, donne une impression de calme. »", "Les couleurs et textures : « Les bleus froids dominent ; le ciel est peint en touches rugueuses. »", "La lumière : « Un soleil orange crée un dégradé du clair au foncé vers le haut du ciel. »"] },
            { t: "astuce", md: "Pour ne rien oublier, pense **G-L-F-C-L** : **G**enre, **L**ignes, **F**ormes, **C**ouleurs, **L**umière." },
          ],
        },
      ],
      bilan: "Figuratif ou abstrait, lignes calmes ou agitées, ombre propre ou portée : avec ces mots, tu ne dis plus seulement « j'aime », tu expliques ce que tu vois.",
    },

    "6e-arts-plastiques-05-histoire-des-arts": {
      accroche: "Il y a environ 17 000 ans, dans une grotte de Dordogne, quelqu'un a peint des chevaux à la lueur d'une lampe à graisse. Ces animaux nous regardent encore aujourd'hui.",
      objectifs: [
        "Situer des œuvres repères dans le temps, de la Préhistoire à la Renaissance",
        "Reconnaître les caractéristiques des arts préhistorique, égyptien, grec, romain et médiéval",
        "Décrire une œuvre repère avec un vocabulaire précis",
      ],
      sections: [
        {
          titre: "Une frise pour se repérer",
          blocs: [
            { t: "frise", titre: "Des œuvres repères, de Lascaux à la Renaissance", evenements: [{ date: -15000, label: "Grotte de Lascaux", detail: "Préhistoire : animaux peints à l'ocre et au charbon (il y a environ 17 000 ans)." }, { date: -2560, label: "Pyramide de Khéops", detail: "Égypte : un tombeau géant pour un pharaon." }, { date: -1320, label: "Masque de Toutânkhamon", detail: "Égypte : or et pierres précieuses." }, { date: -438, label: "Parthénon d'Athènes", detail: "Grèce : temple de marbre dédié à Athéna." }, { date: -100, label: "Vénus de Milo", detail: "Grèce : statue de marbre, aujourd'hui au Louvre." }, { date: 79, label: "Fresques de Pompéi", detail: "Rome : ensevelies et conservées par l'éruption du Vésuve." }, { date: 1210, label: "Vitraux de Chartres", detail: "Moyen Âge : la lumière colorée d'une cathédrale gothique." }, { date: 1503, label: "La Joconde", detail: "Renaissance : portrait peint par Léonard de Vinci." }] },
            { t: "attention", md: "Avant J.-C., on compte **à rebours** : 2560 avant J.-C. est **plus ancien** que 100 avant J.-C. La Vénus de Milo est donc bien plus récente que la pyramide de Khéops." },
          ],
        },
        {
          titre: "La Préhistoire et l'Égypte",
          blocs: [
            { t: "texte", md: "À **Lascaux**, les artistes préhistoriques peignent sur les parois des chevaux, des aurochs, des cerfs. Ils utilisent des **pigments naturels** : l'**ocre** (terre rouge ou jaune) et le **charbon** de bois (noir), écrasés et parfois soufflés sur la roche. Ils profitent même des bosses de la paroi pour donner du volume aux animaux.\n\nEn **Égypte**, l'art obéit à des **règles fixes** pendant près de 3 000 ans. Les peintures ornent surtout les tombeaux : elles accompagnent le mort dans l'au-delà." },
            { t: "schema", titre: "Les règles du corps dans l'art égyptien", legende: "Chaque partie du corps est montrée sous son angle le plus reconnaissable.", svg: `<svg viewBox="0 0 400 260"><circle class="aplat trait" cx="150" cy="48" r="18"/><path class="trait" d="M167 44 L176 50 L167 54" fill="none"/><path class="aplat-papier trait-fin" d="M145 44 Q152 39 159 44 Q152 49 145 44 Z"/><circle cx="152" cy="44" r="2" fill="var(--encre)"/><line class="trait" x1="150" y1="66" x2="150" y2="76"/><path class="aplat trait" d="M116 78 L184 78 L170 140 L130 140 Z"/><line class="trait" x1="116" y1="80" x2="108" y2="140"/><line class="trait" x1="184" y1="80" x2="208" y2="112"/><path class="aplat-papier trait" d="M130 140 L170 140 L177 170 L123 170 Z"/><line class="trait" x1="140" y1="170" x2="128" y2="238"/><line class="trait" x1="160" y1="170" x2="182" y2="238"/><line class="trait" x1="128" y1="238" x2="146" y2="238"/><line class="trait" x1="182" y1="238" x2="200" y2="238"/><text class="texte" x="250" y="40">tête : de profil</text><path class="trait-fin" d="M246 36 L180 46" marker-end="url(#fl)"/><text class="texte" x="12" y="30">œil : de face</text><path class="trait-fin" d="M70 36 L142 44" marker-end="url(#fl)"/><text class="texte" x="250" y="90">épaules : de face</text><path class="trait-fin" d="M246 86 L188 80" marker-end="url(#fl)"/><text class="texte" x="250" y="215">jambes : de profil</text><path class="trait-fin" d="M246 214 L180 222" marker-end="url(#fl)"/></svg>` },
            { t: "propriete", titre: "La taille selon l'importance", md: "En Égypte, la taille d'un personnage dépend de son **rang**, pas de sa place dans l'espace : le **pharaon** est toujours plus grand que ses serviteurs." },
          ],
        },
        {
          titre: "La Grèce et Rome",
          blocs: [
            { t: "texte", md: "Les sculpteurs grecs cherchent la **beauté idéale** du corps humain : proportions harmonieuses, attitudes naturelles, visages sereins. Les Romains, grands admirateurs des Grecs, copient leurs statues et décorent leurs maisons de peintures et de sols magnifiques." },
            { t: "exemple", titre: "Décrire la Vénus de Milo", md: "C'est une **sculpture en ronde-bosse** (on peut en faire le tour), en **marbre** blanc, réalisée en Grèce vers 100 avant J.-C. Elle représente une déesse debout, le buste nu, le bas du corps drapé. Ses bras sont cassés et perdus. Elle est exposée au **musée du Louvre**, à Paris." },
            { t: "tableau", titre: "Deux techniques romaines", entetes: ["Technique", "Comment c'est fait"], lignes: [["**Fresque**", "Peinture posée sur un **enduit encore frais** : la couleur pénètre et dure des siècles."], ["**Mosaïque**", "Image composée de petits cubes de pierre ou de verre colorés, les **tesselles**, fixés dans du mortier."]] },
            { t: "savais-tu", md: "Les statues grecques n'étaient **pas blanches** à l'origine : elles étaient **peintes** de couleurs vives. Le temps a effacé la peinture, et l'on a longtemps cru que les Grecs aimaient le marbre nu." },
            { t: "verifie", q: "Dans l'art romain, qu'est-ce qu'une mosaïque ?", choix: ["Une peinture sur enduit frais", "Une image faite de petits cubes de pierre ou de verre", "Une statue de bronze"], bonne: 1, explication: "La mosaïque assemble des tesselles colorées. La peinture sur enduit frais, c'est la fresque." },
          ],
        },
        {
          titre: "Le Moyen Âge et la Renaissance",
          blocs: [
            { t: "texte", md: "Au **Moyen Âge**, l'art est surtout **religieux** : il raconte la Bible à des gens qui, pour la plupart, ne savent pas lire. Dans les cathédrales gothiques comme Chartres, les **vitraux** transforment la lumière du soleil en couleurs. Dans les monastères, les moines recopient les livres à la main et les décorent d'**enluminures**." },
            { t: "definition", terme: "Vitrail", md: "Une composition de morceaux de **verre coloré** assemblés par des baguettes de **plomb**, placée dans les fenêtres des églises." },
            { t: "definition", terme: "Enluminure", md: "Une peinture décorant un **manuscrit** : lettre ornée, petite scène, bordure, parfois rehaussée d'or." },
            { t: "texte", md: "À la **Renaissance**, les artistes redécouvrent l'Antiquité et observent la nature avec passion. Au début du XVIe siècle, **Léonard de Vinci** peint *La Joconde* : son sourire mystérieux et son paysage flou, peint avec un **sfumato** (contours adoucis comme une fumée), la rendent célèbre. Elle est, elle aussi, au **Louvre**." },
            { t: "verifie", q: "Quelle œuvre est la plus ancienne ?", choix: ["La Joconde", "Les vitraux de Chartres", "Le masque de Toutânkhamon", "La Vénus de Milo"], bonne: 2, explication: "Le masque de Toutânkhamon date d'environ 1320 avant J.-C., avant la Vénus de Milo (vers 100 avant J.-C.), les vitraux de Chartres (XIIIe siècle) et La Joconde (vers 1503)." },
          ],
        },
      ],
      bilan: "Des chevaux de Lascaux au sourire de la Joconde, chaque époque a inventé ses techniques et ses règles : les reconnaître, c'est lire l'histoire dans les images.",
    },

    "6e-arts-plastiques-06-demarche-de-creation": {
      accroche: "Une consigne tombe : « Un objet qui fait peur. » Par où commencer ? Les artistes aussi se posent cette question, et ils ont une méthode.",
      objectifs: [
        "Mener un projet de l'intention à la réalisation",
        "Verbaliser son travail et expliquer ses choix",
        "Regarder une œuvre en trois temps : décrire, analyser, interpréter",
      ],
      sections: [
        {
          titre: "Tout part d'une intention",
          blocs: [
            { t: "definition", terme: "Intention", md: "Ce que tu veux **montrer**, **dire** ou **faire ressentir** avec ta production. Elle guide tous tes choix : matière, couleur, format, présentation." },
            { t: "texte", md: "Devant une consigne, il n'y a **pas une seule bonne réponse**. « Un objet qui fait peur » peut devenir une chaise hérissée de pointes, une ombre géante sur un mur, ou une peluche aux yeux trop grands. Ce qui compte, c'est que tes choix servent ton intention, et que tu saches les expliquer." },
            { t: "verifie", q: "Il n'existe qu'une seule bonne réponse à une consigne d'arts plastiques. Vrai ou faux ?", choix: ["Vrai", "Faux"], bonne: 1, explication: "Faux : plusieurs démarches très différentes peuvent être réussies, pourvu qu'elles répondent à la consigne et que les choix soient cohérents avec l'intention." },
          ],
        },
        {
          titre: "Les étapes de la démarche",
          blocs: [
            { t: "etapes", titre: "De la consigne à la présentation", items: [{ titre: "Chercher", md: "Lis la consigne, note des idées et choisis ton intention." }, { titre: "Croquis", md: "Fais **plusieurs** dessins rapides pour fixer tes idées, puis choisis." }, { titre: "Expérimenter", md: "Essaie des outils et des matériaux sans connaître le résultat d'avance." }, { titre: "Réaliser", md: "Fabrique ta production en gardant ton intention en tête." }, { titre: "Présenter", md: "Montre ton travail et explique tes choix : tu le **verbalises**." }] },
            { t: "definition", terme: "Croquis", md: "Un dessin **rapide**, sans détails ni finitions, qui fixe une idée. Les artistes en font des dizaines avant de choisir." },
            { t: "attention", md: "Un croquis n'a pas besoin d'être beau ni fini : s'il l'était, tu perdrais du temps et tu n'oserais plus le modifier. Sa seule mission est de **chercher**." },
            { t: "exemple", titre: "« Un objet qui fait peur »", md: "Tu notes ton intention : une chaise menaçante. Tu fais trois croquis. Tu essaies du fil de fer et du papier noir. Tu réalises la chaise couverte de pointes. Enfin tu expliques à la classe : « J'ai choisi des pointes et du noir parce qu'ils évoquent le danger et la nuit. »" },
          ],
        },
        {
          titre: "Expérimenter : l'accident peut devenir une trouvaille",
          blocs: [
            { t: "texte", md: "**Expérimenter**, c'est oser essayer : diluer davantage l'encre, froisser le papier avant de peindre, gratter la gouache sèche… Parfois, le résultat ne ressemble pas du tout à ce que tu avais prévu. Ce n'est pas un échec ! Observe ce qui s'est passé : une coulure inattendue, une texture étrange peuvent enrichir ton projet." },
            { t: "savais-tu", md: "Le peintre Max Ernst a inventé le **frottage** en posant une feuille sur un plancher et en frottant un crayon dessus : les veines du bois sont apparues comme des forêts mystérieuses." },
            { t: "verifie", q: "Ton collage ne ressemble pas du tout à ce que tu avais prévu. Que fais-tu ?", choix: ["Je le jette et je recommence tout", "J'observe ce qui s'est passé et je décide si je peux en tirer parti", "Je copie le travail d'un camarade"], bonne: 1, explication: "Un résultat imprévu est une information. En l'observant, tu peux le garder, le transformer ou corriger ta méthode." },
          ],
        },
        {
          titre: "Verbaliser et regarder une œuvre",
          blocs: [
            { t: "definition", terme: "Verbaliser", md: "Dire avec des **mots** ce que tu as fait, **comment** et **pourquoi**, en utilisant le vocabulaire des arts plastiques (cadrage, matière, couleurs complémentaires, socle…)." },
            { t: "tableau", titre: "Regarder une œuvre en trois temps : *La Nuit étoilée* de Van Gogh (1889)", entetes: ["Étape", "La question", "Exemple de réponse"], lignes: [["1. **Décrire**", "Qu'est-ce que je vois ?", "Un village sous un ciel nocturne, des étoiles entourées de halos, un grand cyprès sombre au premier plan."], ["2. **Analyser**", "Comment est-ce fait ?", "Peinture à l'huile, touches épaisses en spirales, bleus froids opposés aux jaunes."], ["3. **Interpréter**", "Que cela peut-il vouloir dire ?", "Le ciel semble vivant et agité : le peintre exprime peut-être une émotion forte."]] },
            { t: "propriete", titre: "Le bon ordre", md: "On commence **toujours** par décrire, sans juger. On analyse ensuite, puis seulement on interprète. Une interprétation solide s'appuie sur ce que l'on a vu." },
            { t: "astuce", md: "Pour présenter ton travail comme une vraie œuvre, prépare son **cartel** : titre, auteur, date, technique et dimensions, soit cinq informations." },
          ],
        },
      ],
      bilan: "Une intention, des croquis, des essais, une réalisation, des mots pour l'expliquer : la démarche de création transforme une idée en œuvre, et toi en artiste.",
    },
  },
};
