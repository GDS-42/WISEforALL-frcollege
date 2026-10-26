// Cours ÉCLORE — 6e Technologie. Schéma : docs/COURS.md
export default {
  id: "6e-technologie",
  chapitres: {
    "6e-technologie-01-objets-techniques": {
      accroche: "Démonte une lampe de bureau : un socle très lourd, un bras qui se plie, une minuscule LED, un fil, un bouton. Rien n'est là par hasard. Chaque pièce répond à une question que l'ingénieur s'est posée. Mène l'enquête : à quoi sert cet objet, et comment s'y prend-il ?",
      objectifs: [
        "Identifier le besoin auquel répond un objet technique",
        "Distinguer fonction d'usage, fonction d'estime et fonctions techniques",
        "Associer une solution technique à chaque fonction technique",
      ],
      sections: [
        {
          titre: "Au départ, il y a un besoin",
          blocs: [
            { t: "texte", md: "Regarde autour de toi : ta trousse, ta chaise, le vélo de ton voisin, le tableau de la classe. Aucun de ces objets n'a poussé dans la nature. Quelqu'un les a imaginés, dessinés puis fabriqués, parce que des gens avaient un **besoin** : écrire, s'asseoir, se déplacer, montrer une leçon à toute la classe.\n\nUn caillou ou une pomme ne sont pas des objets techniques : la nature les a faits. Mais un caillou taillé pour couper devient un outil, donc un objet technique !" },
            { t: "definition", terme: "Objet technique", md: "Un objet **fabriqué par les humains** pour répondre à un **besoin** : se déplacer, s'éclairer, communiquer, se protéger, se nourrir…" },
            { t: "texte", md: "Un même besoin peut être satisfait par **plusieurs objets différents**. Pour aller au collège, tu peux prendre un vélo, une trottinette, le bus ou marcher avec de bonnes chaussures. Le besoin est le même : ==se déplacer==. Les objets, eux, sont très différents." },
            { t: "verifie", q: "Lequel de ces éléments est un objet technique ?", choix: ["Un galet de rivière", "Une paire de ciseaux", "Un chêne", "Un nuage"], bonne: 1, explication: "Les ciseaux ont été fabriqués par des humains pour répondre au besoin de couper. Le galet, l'arbre et le nuage sont des éléments naturels : personne ne les a conçus." },
          ],
        },
        {
          titre: "La fonction d'usage : à quoi sert l'objet ?",
          blocs: [
            { t: "definition", terme: "Fonction d'usage", md: "Elle répond à la question **« À quoi sert l'objet ? »**. On l'écrit avec un verbe : un vélo sert à *se déplacer*, une lampe sert à *éclairer*, des ciseaux servent à *couper*." },
            { t: "schema", titre: "La « bête à cornes » d'une lampe de bureau", legende: "Trois questions pour trouver la fonction d'usage : à qui l'objet rend-il service, sur quoi agit-il, et dans quel but ?", svg: `<svg viewBox="0 0 400 250"><text class="texte-petit" x="95" y="18" text-anchor="middle">À qui rend-il service ?</text><text class="texte-petit" x="305" y="18" text-anchor="middle">Sur quoi agit-il ?</text><ellipse class="aplat" cx="95" cy="52" rx="70" ry="24"/><ellipse class="trait" cx="95" cy="52" rx="70" ry="24" fill="none"/><text class="texte" x="95" y="57" text-anchor="middle">L'utilisateur</text><ellipse class="aplat" cx="305" cy="52" rx="82" ry="24"/><ellipse class="trait" cx="305" cy="52" rx="82" ry="24" fill="none"/><text class="texte" x="305" y="57" text-anchor="middle">Le plan de travail</text><ellipse class="aplat-papier" cx="200" cy="110" rx="68" ry="22"/><ellipse class="trait" cx="200" cy="110" rx="68" ry="22" fill="none"/><text class="texte" x="200" y="115" text-anchor="middle">Lampe de bureau</text><path class="trait" d="M80 74 Q200 220 320 74" fill="none"/><path class="trait" d="M200 147 L200 188" marker-end="url(#fl)"/><rect class="aplat-fort" x="80" y="192" width="240" height="48" rx="6" opacity="0.35"/><rect class="trait" x="80" y="192" width="240" height="48" rx="6" fill="none"/><text class="texte-petit" x="200" y="209" text-anchor="middle">Dans quel but ?</text><text class="texte" x="200" y="229" text-anchor="middle">Éclairer le plan de travail</text></svg>` },
            { t: "astuce", md: "Pour trouver la fonction d'usage, complète la phrase : « L'objet rend service à **qui ?** en agissant sur **quoi ?** pour **quoi faire ?** ». La réponse à la dernière question, c'est la fonction d'usage." },
            { t: "exemple", titre: "La fonction d'usage d'un vélo", md: "Le vélo rend service au **cycliste**, il agit sur **le cycliste lui-même** (il le porte), dans le but de **le déplacer**. Sa fonction d'usage : ==permettre à une personne de se déplacer==." },
          ],
        },
        {
          titre: "La fonction d'estime : pourquoi il me plaît ?",
          blocs: [
            { t: "definition", terme: "Fonction d'estime", md: "Elle répond à la question **« Pourquoi cet objet me plaît-il ? »** : sa couleur, sa forme, sa marque, la mode, le plaisir de l'avoir. Elle ne change rien à ce que fait l'objet." },
            { t: "texte", md: "Deux trottinettes peuvent rouler exactement de la même façon. Pourtant tu choisiras peut-être la bleue à paillettes plutôt que la grise. La couleur ne la fait pas aller plus vite : elle fait partie de sa **fonction d'estime**.\n\nTous les objets ont une fonction d'estime, même modeste : un stylo simple peut plaire parce qu'il est léger ou bien en main." },
            { t: "verifie", q: "Un ami choisit un casque audio surtout parce que la marque est à la mode. Quelle fonction a guidé son choix ?", choix: ["La fonction d'usage", "La fonction d'estime", "Une fonction technique"], bonne: 1, explication: "La marque et la mode ne changent pas le son du casque : elles rendent l'objet attirant. C'est la fonction d'estime. La fonction d'usage, elle, serait « écouter de la musique »." },
          ],
        },
        {
          titre: "Fonctions techniques et solutions techniques",
          blocs: [
            { t: "definition", terme: "Fonction technique", md: "Une **action que l'objet doit réaliser** pour assurer sa fonction d'usage. Pour qu'un vélo déplace quelqu'un, il doit : porter le cycliste, rouler, diriger, freiner, transmettre le mouvement." },
            { t: "definition", terme: "Solution technique", md: "Le **moyen concret** choisi pour remplir une fonction technique. La fonction est un verbe (*freiner*), la solution est une pièce ou un procédé (*des patins qui frottent sur la jante*, *des freins à disque*)." },
            { t: "tableau", titre: "Les fonctions techniques du vélo", entetes: ["Fonction technique", "Solution technique"], lignes: [["Porter le cycliste", "Le cadre et la selle"], ["Rouler", "Les roues et les pneus"], ["Diriger", "Le guidon et la fourche"], ["Transmettre le mouvement", "Le pédalier et la chaîne"], ["Freiner", "Les patins qui frottent sur la jante (ou des freins à disque)"]] },
            { t: "schema", titre: "La lampe de bureau : trois fonctions, trois solutions", legende: "Chaque fonction technique (en noir) est remplie par une solution technique (en couleur).", svg: `<svg viewBox="0 0 400 240"><line class="trait-fin" x1="20" y1="214" x2="240" y2="214"/><rect class="aplat-fort" x="40" y="196" width="110" height="18" rx="4"/><rect class="trait" x="40" y="196" width="110" height="18" rx="4" fill="none"/><line class="trait" x1="95" y1="196" x2="122" y2="112"/><line class="trait" x1="122" y1="112" x2="190" y2="80"/><circle class="aplat-papier" cx="122" cy="112" r="6"/><circle class="trait" cx="122" cy="112" r="6" fill="none"/><path class="aplat" d="M180 70 L222 82 L214 112 L172 98 Z"/><path class="trait" d="M180 70 L222 82 L214 112 L172 98 Z" fill="none"/><line class="pointille" x1="190" y1="110" x2="180" y2="180"/><line class="pointille" x1="200" y1="114" x2="200" y2="180"/><line class="pointille" x1="210" y1="116" x2="222" y2="180"/><line class="trait-fin" x1="222" y1="88" x2="250" y2="46"/><text class="texte-petit" x="254" y="38">Produire de la lumière</text><text class="texte-pigment" x="254" y="56">→ une LED</text><line class="trait-fin" x1="128" y1="114" x2="250" y2="126"/><text class="texte-petit" x="254" y="120">Orienter la lumière</text><text class="texte-pigment" x="254" y="138">→ un bras articulé</text><line class="trait-fin" x1="150" y1="204" x2="250" y2="200"/><text class="texte-petit" x="254" y="196">Tenir debout</text><text class="texte-pigment" x="254" y="214">→ un socle lesté</text></svg>` },
            { t: "attention", md: "Ne confonds pas fonction et solution. « Freiner » est une **fonction** technique. « Des freins à disque » est une **solution** technique. Une astuce : la fonction commence par un verbe, la solution désigne une chose que tu pourrais toucher." },
            { t: "exemple", titre: "Deux lampes, une même fonction d'usage", md: "Une lampe de poche et une lampe de chevet servent toutes les deux à **éclairer** : même besoin, même fonction d'usage. Ce qui les différencie, ce sont surtout leurs **solutions techniques** : une pile et une petite taille pour être transportée d'un côté, une prise secteur et un abat-jour pour la chambre de l'autre." },
            { t: "verifie", q: "Quelle fonction technique n'est PAS indispensable à une trottinette pour déplacer quelqu'un ?", choix: ["Rouler", "Diriger", "Freiner", "Produire de la lumière"], bonne: 3, explication: "Sans roues, sans guidon ou sans frein, impossible de se déplacer en sécurité. L'éclairage est utile la nuit, mais il n'est pas nécessaire à la fonction d'usage : c'est une option." },
          ],
        },
      ],
      bilan: "Un besoin fait naître un objet ; sa fonction d'usage dit à quoi il sert, sa fonction d'estime pourquoi il plaît, et chaque fonction technique est remplie par une solution technique.",
    },
    "6e-technologie-02-evolution-objets": {
      accroche: "En 1817, le premier « vélo » n'avait ni pédales, ni chaîne, ni freins : on avançait en poussant le sol avec les pieds ! Aujourd'hui, certains vélos ont un moteur électrique et des pneus increvables. Que s'est-il passé en deux siècles ?",
      objectifs: [
        "Replacer des objets techniques sur une frise chronologique",
        "Distinguer une invention d'une innovation",
        "Expliquer pourquoi un objet technique évolue",
      ],
      sections: [
        {
          titre: "Invention ou innovation ?",
          blocs: [
            { t: "texte", md: "Les objets techniques ne restent jamais figés. Génération après génération, ils deviennent **plus efficaces**, **plus sûrs**, **plus confortables** ou **moins chers**. Chaque nouvelle version garde l'idée de départ, mais l'améliore. On parle de **lignée** d'objets : une famille d'objets qui répondent au même besoin et qui se succèdent." },
            { t: "definition", terme: "Invention", md: "La création d'un objet ou d'un procédé **totalement nouveau**, qui n'existait pas avant. Exemple : la première ampoule électrique, la première draisienne." },
            { t: "definition", terme: "Innovation", md: "Une **amélioration importante** d'un objet qui existe déjà, et qui est adoptée par les utilisateurs. Exemple : remplacer l'ampoule à incandescence par une LED, ajouter un moteur électrique au vélo." },
            { t: "tableau", titre: "Bien les distinguer", entetes: ["", "Invention", "Innovation"], lignes: [["Question à se poser", "Est-ce que ça existait avant ?", "Est-ce une version améliorée ?"], ["Vélo", "La draisienne (1817)", "La chaîne, le pneu gonflable, l'assistance électrique"], ["Éclairage", "L'ampoule électrique (vers 1879)", "La LED qui remplace l'ampoule"]] },
            { t: "verifie", q: "Le passage de l'ampoule à incandescence à la LED est…", choix: ["une invention", "une innovation", "ni l'une ni l'autre"], bonne: 1, explication: "L'éclairage électrique existait déjà : la LED en est une amélioration importante (elle consomme beaucoup moins et dure plus longtemps). C'est donc une innovation." },
          ],
        },
        {
          titre: "La lignée du vélo",
          blocs: [
            { t: "frise", titre: "Deux siècles d'évolution du vélo", evenements: [
              { date: 1817, label: "Draisienne", detail: "Karl Drais : deux roues en bois, pas de pédales. On pousse le sol avec les pieds." },
              { date: 1861, label: "Vélocipède à pédales", detail: "Vers 1861 : des pédales fixées directement sur la roue avant." },
              { date: 1870, label: "Grand-bi", detail: "Vers 1870 : une roue avant immense pour aller plus vite. Les chutes sont fréquentes et graves." },
              { date: 1885, label: "Bicyclette de sécurité", detail: "Vers 1885 : deux roues de même taille, une chaîne qui entraîne la roue arrière." },
              { date: 1888, label: "Pneu gonflable", detail: "John Boyd Dunlop : un pneu rempli d'air, bien plus confortable." },
              { date: 1975, label: "VTT", detail: "Années 1970 : gros pneus et cadre solide pour rouler sur les chemins." },
              { date: 1995, label: "Vélo à assistance électrique", detail: "Années 1990 : un moteur et une batterie aident le cycliste à pédaler." },
            ] },
            { t: "exemple", titre: "Pourquoi le grand-bi a disparu", etapes: ["Sur le grand-bi, les pédales sont fixées à la roue avant : un tour de pédales = un tour de roue.", "Pour aller vite, il faut donc une roue immense, et le cycliste perché tout en haut tombe facilement en avant.", "Avec la chaîne et des pignons de tailles différentes, un tour de pédales fait tourner la roue plusieurs fois.", "La roue peut redevenir petite : la bicyclette de sécurité (vers 1885) est plus rapide et plus sûre. Son principe n'a presque pas changé depuis !"] },
            { t: "astuce", md: "Pour ranger des objets dans l'ordre, cherche ce que chacun a **de plus** que le précédent : la draisienne n'a rien, le vélocipède ajoute les pédales, le grand-bi agrandit la roue, la bicyclette ajoute la chaîne." },
          ],
        },
        {
          titre: "La lignée de l'éclairage",
          blocs: [
            { t: "tableau", titre: "Du feu à la LED", entetes: ["Époque", "Objet", "Source d'énergie"], lignes: [["Préhistoire", "Feu, torche", "Bois qui brûle"], ["Antiquité", "Bougie, lampe à huile", "Cire, graisse, huile"], ["XIXe siècle", "Lampe à pétrole, lampe à gaz", "Pétrole, gaz"], ["Vers 1879", "Ampoule à incandescence", "Électricité"], ["XXe siècle", "Tube fluorescent", "Électricité"], ["Fin du XXe siècle", "LED", "Électricité"]] },
            { t: "texte", md: "Observe la dernière colonne : pendant des milliers d'années, s'éclairer voulait dire **brûler quelque chose**. Il a fallu une nouvelle source d'énergie, l'**électricité**, pour passer de la bougie à l'ampoule. Une flamme, c'est dangereux, ça fume et ça s'éteint au moindre courant d'air : l'ampoule a changé la vie dans les maisons." },
            { t: "graphique", type: "barres", titre: "Puissance nécessaire pour la même quantité de lumière", unite: "W", donnees: [{ label: "Ampoule à incandescence", valeur: 60 }, { label: "LED", valeur: 8 }] },
            { t: "savais-tu", md: "Une ampoule à incandescence fonctionne en chauffant un fil jusqu'à ce qu'il brille. La plus grande partie de l'électricité part donc en **chaleur**, pas en lumière ! La LED, elle, chauffe très peu : pour éclairer autant, il lui faut environ 7 à 8 fois moins d'électricité." },
          ],
        },
        {
          titre: "Pourquoi les objets évoluent-ils ?",
          blocs: [
            { t: "propriete", titre: "Les quatre moteurs de l'évolution", md: "Un objet technique évolue grâce à :\n1. de **nouvelles connaissances scientifiques** (le caoutchouc vulcanisé rend le pneu gonflable possible) ;\n2. de **nouveaux matériaux** (l'aluminium allège le cadre du vélo) ;\n3. de **nouvelles sources d'énergie** (l'électricité, la batterie du vélo électrique) ;\n4. de **nouveaux besoins** de la société (rouler sur les chemins de montagne : le VTT)." },
            { t: "attention", md: "Une évolution n'arrive jamais « par magie ». Le VTT n'est pas apparu parce que la chaîne venait d'être inventée : elle existait déjà depuis près de 90 ans ! Il est né d'un **nouveau besoin** de loisir : rouler hors des routes." },
            { t: "verifie", q: "Un fabricant remplace le cadre en acier d'un vélo par un cadre en aluminium. Quel moteur de l'évolution est en jeu ?", choix: ["Un nouveau besoin", "Un nouveau matériau", "Une nouvelle source d'énergie"], bonne: 1, explication: "L'aluminium est un matériau plus léger que l'acier et qui ne rouille pas : c'est l'arrivée d'un nouveau matériau qui fait évoluer le vélo." },
          ],
        },
      ],
      bilan: "Une invention crée, une innovation améliore ; poussés par la science, les matériaux, l'énergie et nos besoins, les objets techniques n'arrêtent jamais d'évoluer.",
    },
    "6e-technologie-03-materiaux": {
      accroche: "Prends une casserole : la cuve est en métal brillant, la poignée en bois ou en plastique noir. Pourquoi pas tout en métal ? Essaie de l'imaginer sur le feu… et ta main comprendra tout de suite ! Choisir un matériau, c'est choisir des propriétés.",
      objectifs: [
        "Classer un matériau dans l'une des quatre familles",
        "Décrire les propriétés d'un matériau",
        "Justifier le choix d'un matériau pour une pièce d'objet",
      ],
      sections: [
        {
          titre: "Les quatre familles de matériaux",
          blocs: [
            { t: "definition", terme: "Matériau", md: "La **matière** dont est fait un objet ou une pièce : le bois d'une règle, l'acier d'un clou, le verre d'une bouteille." },
            { t: "tableau", titre: "Les familles de matériaux", entetes: ["Famille", "Exemples", "Ce qui les caractérise"], lignes: [["**Métalliques**", "Fer, acier, aluminium, cuivre", "Conduisent bien l'électricité et la chaleur, souvent résistants ; le fer et l'acier peuvent rouiller"], ["**Organiques**", "Bois, papier, cuir, laine, coton, plastiques, caoutchouc", "Viennent du vivant (plantes, animaux) ou du pétrole ; souvent légers et isolants"], ["**Céramiques**", "Verre, terre cuite, porcelaine, béton", "Minéraux, durs mais cassants ; résistent à la chaleur"], ["**Composites**", "Fibre de carbone, fibre de verre, béton armé", "Associent plusieurs matériaux pour cumuler leurs qualités"]] },
            { t: "attention", md: "Le **plastique** est un matériau **organique** ! Il est fabriqué à partir du pétrole, qui vient lui-même de restes d'êtres vivants transformés pendant des millions d'années. Ne le range pas avec les céramiques." },
            { t: "exemple", titre: "Le béton armé", md: "Le béton résiste très bien quand on l'écrase, mais il casse quand on le tire ou le plie. L'acier, lui, résiste bien à la traction. En coulant du béton autour de tiges d'acier, on obtient un matériau **composite** qui cumule les deux qualités : le **béton armé** des ponts et des immeubles." },
            { t: "verifie", q: "À quelle famille appartient la porcelaine d'une tasse ?", choix: ["Métallique", "Organique", "Céramique", "Composite"], bonne: 2, explication: "La porcelaine est faite d'argile cuite à très haute température : c'est un matériau minéral, dur mais cassant. Elle appartient à la famille des céramiques, comme le verre et la terre cuite." },
          ],
        },
        {
          titre: "Les propriétés des matériaux",
          blocs: [
            { t: "texte", md: "Chaque matériau se comporte à sa façon. Pour les comparer, les techniciens utilisent des **propriétés**, toujours les mêmes." },
            { t: "liste", titre: "Les propriétés à connaître", items: ["**Dureté** : le matériau résiste aux rayures (le verre est dur, le bois tendre se raye).", "**Légèreté** : il a une faible masse pour un même volume. On parle de **masse volumique**.", "**Conductivité électrique** : il laisse passer le courant (cuivre) ou non (plastique, bois : ce sont des **isolants**).", "**Conductivité thermique** : il laisse passer la chaleur (métaux) ou non (bois, plastique).", "**Résistance** aux chocs et à la **corrosion** (la rouille, par exemple).", "**Recyclabilité** : il peut être retransformé pour fabriquer un nouveau produit."] },
            { t: "exemple", titre: "Comparer l'acier et l'aluminium", md: "Un cube d'acier de 1 litre pèse environ 7,8 kg ; le même cube d'aluminium pèse environ 2,7 kg. L'acier est donc environ **3 fois plus lourd** pour le même volume : l'aluminium est bien plus léger." },
            { t: "verifie", q: "Pourquoi la gaine d'un câble électrique est-elle en plastique ?", choix: ["Parce que le plastique conduit l'électricité", "Parce que le plastique est isolant et souple", "Parce que le plastique est un métal"], bonne: 1, explication: "La gaine doit empêcher le courant de sortir du fil de cuivre : il faut un isolant électrique. Le plastique est aussi souple, ce qui permet de plier le câble." },
          ],
        },
        {
          titre: "Choisir le bon matériau",
          blocs: [
            { t: "propriete", titre: "Les critères de choix", md: "On choisit un matériau selon :\n- la **fonction** de la pièce (que doit-elle faire ?) ;\n- son **coût** ;\n- sa **masse** ;\n- son **impact sur l'environnement** (fabrication, recyclage)." },
            { t: "schema", titre: "Une casserole, deux matériaux", legende: "La cuve doit conduire la chaleur, la poignée doit l'arrêter : deux fonctions, deux matériaux.", svg: `<svg viewBox="0 0 400 236"><path class="aplat" d="M40 80 L200 80 L192 160 Q190 172 178 172 L62 172 Q50 172 48 160 Z"/><path class="trait" d="M40 80 L200 80 L192 160 Q190 172 178 172 L62 172 Q50 172 48 160 Z" fill="none"/><line class="trait" x1="34" y1="80" x2="206" y2="80"/><rect class="aplat-fort" x="200" y="84" width="130" height="18" rx="9"/><rect class="trait" x="200" y="84" width="130" height="18" rx="9" fill="none"/><path class="trait-fin" d="M80 226 Q88 214 80 204 Q72 194 80 182" fill="none"/><path class="trait-fin" d="M120 226 Q128 214 120 204 Q112 194 120 182" fill="none"/><path class="trait-fin" d="M160 226 Q168 214 160 204 Q152 194 160 182" fill="none"/><line class="trait-fin" x1="110" y1="80" x2="110" y2="44"/><text class="texte" x="20" y="22">Cuve : métal (acier, aluminium)</text><text class="texte-pigment" x="20" y="38">conduit bien la chaleur</text><line class="trait-fin" x1="300" y1="102" x2="300" y2="134"/><text class="texte" x="230" y="150">Poignée : bois</text><text class="texte" x="230" y="166">ou plastique</text><text class="texte-pigment" x="230" y="184">isolant thermique</text><text class="texte-petit" x="178" y="214">← chaleur de la plaque</text></svg>` },
            { t: "etapes", titre: "La méthode pour choisir un matériau", items: [{ titre: "La fonction", md: "Que doit faire la pièce ? Exemple : la poignée doit permettre de tenir la casserole chaude." }, { titre: "Les propriétés nécessaires", md: "Elle doit être **isolante thermique** et résister à la chaleur." }, { titre: "Comparer", md: "Acier ? Conducteur : non. Bois, plastique spécial : oui." }, { titre: "Coût et environnement", md: "Lequel est le moins cher, le plus facile à recycler ?" }, { titre: "Choisir", md: "On retient le matériau qui coche le mieux toutes les cases." }] },
            { t: "exemple", titre: "Le cadre de vélo", md: "On cherche un matériau **léger** et **résistant**. L'acier est solide mais lourd. L'aluminium est plus léger et ne rouille pas. La fibre de carbone (composite) est encore plus légère, mais coûte très cher : on la réserve aux vélos de compétition. Pour un vélo de tous les jours, l'aluminium est un bon compromis." },
            { t: "savais-tu", md: "Une canette en aluminium peut être recyclée presque indéfiniment sans perdre ses qualités. Recycler l'aluminium demande environ 20 fois moins d'énergie que de le fabriquer à partir du minerai !" },
          ],
        },
      ],
      bilan: "Métalliques, organiques, céramiques, composites : on choisit un matériau pour ses propriétés, en partant toujours de la fonction de la pièce.",
    },
    "6e-technologie-04-energie": {
      accroche: "Démonte un petit robot roulant : une batterie, une carte électronique avec un bouton, deux moteurs, des engrenages, des roues. Appuie sur le bouton : il part. Mais d'où vient le mouvement, et quel chemin l'énergie a-t-elle suivi pour arriver jusqu'aux roues ?",
      objectifs: [
        "Identifier la source d'énergie d'un objet technique",
        "Décrire la chaîne d'énergie d'un objet simple",
        "Proposer des moyens d'économiser l'énergie",
      ],
      sections: [
        {
          titre: "Sans énergie, rien ne fonctionne",
          blocs: [
            { t: "texte", md: "Un vélo ne roule pas tout seul, une lampe ne s'allume pas toute seule. Pour fonctionner, tout objet technique a besoin d'**énergie**. Elle peut venir de tes muscles, d'une prise électrique, d'une pile, du carburant, du soleil, du vent ou de l'eau qui coule." },
            { t: "tableau", titre: "Quelques sources d'énergie", entetes: ["Énergie", "Exemple d'objet", "Renouvelable ?"], lignes: [["Musculaire", "Vélo, trottinette classique", "Oui"], ["Chimique (pile)", "Lampe de poche, télécommande", "Non"], ["Chimique (carburant : essence, gazole)", "Voiture, tondeuse à gazon", "Non (pétrole)"], ["Solaire", "Calculatrice solaire, panneau photovoltaïque", "Oui"], ["Éolienne", "Éolienne, moulin à vent", "Oui"], ["Hydraulique", "Moulin à eau, barrage", "Oui"]] },
            { t: "definition", terme: "Énergie renouvelable", md: "Une source d'énergie qui **se reconstitue rapidement** à l'échelle d'une vie humaine : le soleil, le vent, l'eau qui coule. À l'inverse, une source **non renouvelable** s'épuise, car il faut des millions d'années pour la reformer : le pétrole, le gaz, le charbon." },
            { t: "verifie", q: "Quelle est la source d'énergie d'un vélo classique ?", choix: ["L'énergie électrique", "L'énergie musculaire du cycliste", "L'énergie solaire", "L'énergie chimique de l'essence"], bonne: 1, explication: "Sur un vélo sans moteur, c'est toi qui fournis l'énergie avec les muscles de tes jambes. C'est une énergie renouvelable : il suffit de bien manger et de te reposer !" },
          ],
        },
        {
          titre: "La chaîne d'énergie",
          blocs: [
            { t: "definition", terme: "Chaîne d'énergie", md: "Le **trajet de l'énergie** dans un objet, décrit en quatre fonctions, toujours dans le même ordre : **alimenter**, **distribuer**, **convertir**, **transmettre**." },
            { t: "schema", titre: "La chaîne d'énergie d'un robot roulant", legende: "L'énergie électrique de la batterie devient du mouvement ; une partie se perd en chaleur dans les moteurs.", svg: `<svg viewBox="0 0 400 210"><text class="texte-petit" x="100" y="56" text-anchor="middle">électrique</text><text class="texte-petit" x="200" y="56" text-anchor="middle">électrique</text><text class="texte-petit" x="300" y="56" text-anchor="middle">mouvement</text><rect class="aplat" x="7" y="66" width="86" height="64" rx="6"/><rect class="trait" x="7" y="66" width="86" height="64" rx="6" fill="none"/><rect class="aplat" x="107" y="66" width="86" height="64" rx="6"/><rect class="trait" x="107" y="66" width="86" height="64" rx="6" fill="none"/><rect class="aplat" x="207" y="66" width="86" height="64" rx="6"/><rect class="trait" x="207" y="66" width="86" height="64" rx="6" fill="none"/><rect class="aplat" x="307" y="66" width="86" height="64" rx="6"/><rect class="trait" x="307" y="66" width="86" height="64" rx="6" fill="none"/><text class="texte" x="50" y="92" text-anchor="middle">Alimenter</text><text class="texte" x="150" y="92" text-anchor="middle">Distribuer</text><text class="texte" x="250" y="92" text-anchor="middle">Convertir</text><text class="texte" x="350" y="92" text-anchor="middle">Transmettre</text><text class="texte-pigment" x="50" y="116" text-anchor="middle">batterie</text><text class="texte-pigment" x="150" y="116" text-anchor="middle">carte, bouton</text><text class="texte-pigment" x="250" y="116" text-anchor="middle">moteurs</text><text class="texte-pigment" x="350" y="116" text-anchor="middle">engrenages</text><path class="trait" d="M93 98 L105 98" marker-end="url(#fl)"/><path class="trait" d="M193 98 L205 98" marker-end="url(#fl)"/><path class="trait" d="M293 98 L305 98" marker-end="url(#fl)"/><path class="pointille" d="M250 130 L250 160" marker-end="url(#fl-p)"/><text class="texte-petit" x="250" y="178" text-anchor="middle">chaleur perdue</text><path class="trait" d="M350 130 L350 160" marker-end="url(#fl)"/><text class="texte-petit" x="350" y="178" text-anchor="middle">les roues</text><text class="texte-petit" x="350" y="192" text-anchor="middle">tournent</text><text class="texte-main" x="20" y="28">Le trajet de l'énergie →</text></svg>` },
            { t: "propriete", titre: "Le rôle de chaque fonction", md: "- **Alimenter** : fournir l'énergie (pile, batterie, prise, muscles).\n- **Distribuer** : laisser passer l'énergie ou la bloquer (interrupteur, bouton, carte électronique).\n- **Convertir** : changer la forme de l'énergie (le moteur change l'électricité en mouvement, la LED en lumière).\n- **Transmettre** : conduire le mouvement jusqu'à ce qui agit (chaîne, engrenages, courroie)." },
            { t: "astuce", md: "Retiens l'ordre **A, D, C, T** avec une phrase : « **A**lice **D**essine **C**e **T**rain ». L'énergie entre par A et ressort en action après T." },
            { t: "exemple", titre: "La chaîne d'énergie d'une lampe de poche", etapes: ["**Alimenter** : la pile fournit l'énergie électrique.", "**Distribuer** : l'interrupteur laisse passer le courant ou le coupe.", "**Convertir** : la LED transforme l'énergie électrique en lumière.", "Ici, pas besoin de « transmettre » un mouvement : la lumière part directement de la LED."] },
            { t: "verifie", q: "Dans une trottinette électrique, quel élément CONVERTIT l'énergie électrique en énergie de mouvement ?", choix: ["La batterie", "La gâchette d'accélération", "Le moteur électrique", "Le guidon"], bonne: 2, explication: "La batterie alimente, la gâchette distribue (elle dose l'énergie envoyée), et le moteur convertit l'électricité en mouvement de rotation. Le guidon sert à diriger : il ne fait pas partie de la chaîne d'énergie." },
          ],
        },
        {
          titre: "Stocker l'énergie : piles et batteries",
          blocs: [
            { t: "definition", terme: "Batterie", md: "Un réservoir d'énergie **rechargeable** : elle stocke l'énergie électrique sous forme **chimique**, puis la restitue quand on en a besoin. Une pile fait la même chose, mais ne se recharge pas." },
            { t: "texte", md: "Sur un **vélo à assistance électrique**, la batterie se recharge sur une prise. Pendant la balade, elle alimente un petit moteur qui aide le cycliste quand il pédale, surtout dans les côtes. Ton téléphone fonctionne de la même façon : il emporte son énergie avec lui." },
            { t: "exemple", titre: "La chaîne d'énergie d'un vélo classique", md: "Les **muscles** du cycliste alimentent. Le **pédalier** reçoit l'effort des jambes et le change en rotation. La **chaîne** transmet ce mouvement à la roue arrière. La roue tourne : le vélo avance." },
            { t: "savais-tu", md: "Le mot « pile » vient de la première pile, inventée par l'Italien Alessandro Volta en 1800 : c'était littéralement une **pile** de disques de métal empilés, séparés par des cartons mouillés d'eau salée !" },
          ],
        },
        {
          titre: "Pertes et économies d'énergie",
          blocs: [
            { t: "texte", md: "Aucun objet n'utilise 100 % de l'énergie qu'il reçoit : une partie est toujours **perdue**, le plus souvent en **chaleur**. Touche un chargeur après une heure : il est tiède. Cette chaleur, c'est de l'énergie qui ne sert à rien.\n\nL'ampoule à incandescence est le champion du gaspillage : elle transforme **la plus grande partie** de l'électricité en chaleur et seulement un peu en lumière. La LED, elle, chauffe peu." },
            { t: "exemple", titre: "Combien consomme une box internet allumée ?", etapes: ["La box consomme 10 W : en 1 heure, elle utilise 10 Wh (wattheures).", "Elle reste allumée 24 heures par jour : 10 × 24 = 240 Wh par jour.", "Sur une année : 240 × 365 = 87 600 Wh, soit environ 88 kWh, alors qu'on ne s'en sert que quelques heures !"] },
            { t: "liste", titre: "Les bons gestes", items: ["Éteindre complètement les appareils au lieu de les laisser **en veille**.", "Remplacer les vieilles ampoules par des **LED**.", "Choisir des appareils bien classés sur l'**étiquette énergie** (classe A).", "Fermer la fenêtre quand le chauffage fonctionne et bien **isoler** la maison.", "Débrancher le chargeur quand le téléphone est chargé."] },
            { t: "verifie", q: "Quel geste permet d'économiser l'énergie à la maison ?", choix: ["Laisser la télévision en veille toute la nuit", "Remplacer les ampoules anciennes par des LED", "Ouvrir la fenêtre quand le chauffage fonctionne"], bonne: 1, explication: "Pour la même lumière, une LED consomme environ 7 à 8 fois moins qu'une ampoule à incandescence. La veille et la fenêtre ouverte gaspillent de l'énergie." },
          ],
        },
      ],
      bilan: "L'énergie entre dans l'objet, puis elle est alimentée, distribuée, convertie et transmise ; une partie se perd toujours en chaleur, alors économisons-la !",
    },
    "6e-technologie-05-representer-communiquer": {
      accroche: "Tu as acheté une étagère en kit : un carton, des planches, un sachet de vis… et une feuille couverte de dessins sans un seul mot. Pourtant, tu arrives à la monter ! C'est la preuve qu'un bon dessin technique parle à tout le monde, dans toutes les langues.",
      objectifs: [
        "Reconnaître les différents modes de représentation d'un objet",
        "Choisir la représentation adaptée à ce que l'on veut communiquer",
        "Lire et compléter une représentation simple : schéma, vue éclatée, notice",
      ],
      sections: [
        {
          titre: "Une représentation pour chaque besoin",
          blocs: [
            { t: "texte", md: "Avant d'exister, un objet est dessiné, souvent plusieurs fois. Chaque représentation a son rôle : noter une idée, expliquer un principe, fabriquer une pièce ou aider l'utilisateur. On choisit celle qui répond le mieux à **ce que l'on veut communiquer**, et à **qui**." },
            { t: "tableau", titre: "Les modes de représentation", entetes: ["Représentation", "À quoi elle sert", "Comment elle est faite"], lignes: [["**Croquis**", "Noter rapidement une idée", "À main levée, pas à l'échelle"], ["**Schéma**", "Expliquer le principe, le fonctionnement", "Symboles simples, flèches"], ["**Dessin technique**", "Fabriquer la pièce", "À la règle ou à l'ordinateur, avec cotes et échelle"], ["**Vue éclatée**", "Montrer toutes les pièces et leur assemblage", "Pièces séparées dans l'ordre de montage, nomenclature"], ["**Maquette**, **modèle 3D**", "Voir l'objet en volume, le tester", "Modèle réduit, ou logiciel de CAO"], ["**Notice**", "Monter, utiliser, entretenir l'objet", "Étapes numérotées, texte et images"]] },
            { t: "definition", terme: "Schéma", md: "Une représentation **simplifiée** qui utilise des symboles pour montrer **comment fonctionne** un objet, sans détailler la forme exacte de chaque pièce. Exemple : un frein de vélo, avec des flèches qui montrent que le câble tire les patins contre la jante." },
            { t: "verifie", q: "Tu dois expliquer à un camarade comment monter une étagère en kit. Quel document est le plus adapté ?", choix: ["Un croquis de l'étagère finie", "Une notice de montage avec les étapes numérotées", "Le dessin technique d'une seule planche"], bonne: 1, explication: "La notice guide pas à pas, avec des images. Le croquis montre l'aspect final sans dire comment faire, et le dessin technique d'une planche sert à la fabriquer, pas à assembler le meuble." },
          ],
        },
        {
          titre: "Le dessin technique : cotes et échelle",
          blocs: [
            { t: "definition", terme: "Cote", md: "La **dimension réelle** d'une pièce, écrite sur le dessin technique, le plus souvent en **millimètres**. Grâce aux cotes, l'atelier fabrique la pièce exactement à la bonne taille." },
            { t: "schema", titre: "Dessin technique coté d'un porte-crayons", legende: "Vue de face : hauteur 100 mm (10 cm), diamètre 80 mm (8 cm). Le symbole Ø signifie « diamètre ».", svg: `<svg viewBox="0 0 400 220"><rect class="aplat" x="140" y="30" width="80" height="100"/><rect class="trait" x="140" y="30" width="80" height="100" fill="none"/><line class="pointille" x1="222" y1="30" x2="266" y2="30"/><line class="pointille" x1="222" y1="130" x2="266" y2="130"/><path class="trait-fin" d="M255 80 L255 33" marker-end="url(#fl)"/><path class="trait-fin" d="M255 80 L255 127" marker-end="url(#fl)"/><text class="texte" x="262" y="85">100</text><line class="pointille" x1="140" y1="132" x2="140" y2="168"/><line class="pointille" x1="220" y1="132" x2="220" y2="168"/><path class="trait-fin" d="M180 160 L143 160" marker-end="url(#fl)"/><path class="trait-fin" d="M180 160 L217 160" marker-end="url(#fl)"/><text class="texte" x="180" y="178" text-anchor="middle">Ø 80</text><text class="texte-main" x="306" y="48">une cote</text><path class="trait-fin" d="M310 54 L284 78" marker-end="url(#fl-p)"/><text class="texte-main" x="30" y="60">vue</text><text class="texte-main" x="30" y="78">de face</text><rect class="trait-fin" x="20" y="190" width="360" height="24" fill="none"/><text class="texte-petit" x="200" y="206" text-anchor="middle">Porte-crayons — vue de face — cotes en mm — échelle 1/2</text></svg>` },
            { t: "propriete", titre: "L'échelle", md: "L'**échelle** indique le rapport entre la taille du dessin et la taille réelle.\n- Échelle **1/1** : grandeur réelle.\n- Échelle **1/2** : le dessin est 2 fois **plus petit** que l'objet (échelle réduite).\n- Échelle **1/10** : 1 cm sur le dessin = 10 cm en réalité.\n\nPour retrouver la taille réelle : ==taille sur le dessin × le nombre sous la barre==." },
            { t: "exemple", titre: "Lire une échelle", etapes: ["Sur un plan à l'échelle 1/10, une table mesure 12 cm.", "Taille réelle : 12 × 10 = 120 cm, soit 1,20 m.", "Dans l'autre sens : une maquette à l'échelle 1/50 d'un bâtiment de 20 m (2 000 cm) mesure 2 000 ÷ 50 = 40 cm."] },
            { t: "attention", md: "Les cotes donnent toujours les dimensions **réelles**, même si le dessin est réduit : sur le porte-crayons ci-dessus, dessiné à l'échelle 1/2, on écrit « 100 » et non « 50 ». Un croquis, lui, n'a ni cotes précises ni échelle : il **ne suffit pas** pour fabriquer une pièce aux bonnes dimensions." },
            { t: "verifie", q: "Sur un dessin à l'échelle 1/2, une pièce mesure 6 cm. Quelle est sa longueur réelle ?", choix: ["3 cm", "6 cm", "12 cm", "8 cm"], bonne: 2, explication: "À l'échelle 1/2, le dessin est 2 fois plus petit que la réalité. On multiplie donc par 2 : 6 × 2 = 12 cm." },
          ],
        },
        {
          titre: "La vue éclatée et la nomenclature",
          blocs: [
            { t: "definition", terme: "Vue éclatée", md: "Une représentation où **toutes les pièces sont séparées**, alignées dans l'**ordre où elles s'assemblent**. Chaque pièce porte un **repère** (un numéro) qui renvoie à la **nomenclature**, la liste numérotée des pièces." },
            { t: "schema", titre: "Vue éclatée simplifiée d'une lampe de poche", legende: "Les pièces s'emboîtent le long de l'axe en pointillés. Chaque numéro renvoie à une ligne de la nomenclature.", svg: `<svg viewBox="0 0 400 180"><line class="pointille" x1="8" y1="100" x2="392" y2="100"/><path class="aplat" d="M20 72 L62 84 L62 116 L20 128 Z"/><path class="trait" d="M20 72 L62 84 L62 116 L20 128 Z" fill="none"/><path class="aplat-fort" d="M80 110 L80 96 A6 6 0 0 1 92 96 L92 110 Z"/><path class="trait" d="M80 110 L80 96 A6 6 0 0 1 92 96 L92 110 Z" fill="none"/><rect class="aplat" x="108" y="84" width="110" height="32" rx="3"/><rect class="trait" x="108" y="84" width="110" height="32" rx="3" fill="none"/><rect class="aplat-papier" x="232" y="90" width="40" height="20" rx="3"/><rect class="trait" x="232" y="90" width="40" height="20" rx="3" fill="none"/><rect class="trait" x="272" y="96" width="4" height="8"/><rect class="aplat-papier" x="284" y="90" width="40" height="20" rx="3"/><rect class="trait" x="284" y="90" width="40" height="20" rx="3" fill="none"/><rect class="trait" x="324" y="96" width="4" height="8"/><polyline class="trait" points="336,100 339,90 343,110 347,90 351,110 354,100" fill="none"/><rect class="aplat" x="362" y="86" width="24" height="28" rx="4"/><rect class="trait" x="362" y="86" width="24" height="28" rx="4" fill="none"/><circle class="aplat-papier" cx="40" cy="36" r="10"/><circle class="trait" cx="40" cy="36" r="10" fill="none"/><text class="texte" x="40" y="41" text-anchor="middle">1</text><line class="trait-fin" x1="40" y1="46" x2="40" y2="76"/><circle class="aplat-papier" cx="86" cy="36" r="10"/><circle class="trait" cx="86" cy="36" r="10" fill="none"/><text class="texte" x="86" y="41" text-anchor="middle">2</text><line class="trait-fin" x1="86" y1="46" x2="86" y2="90"/><circle class="aplat-papier" cx="163" cy="36" r="10"/><circle class="trait" cx="163" cy="36" r="10" fill="none"/><text class="texte" x="163" y="41" text-anchor="middle">3</text><line class="trait-fin" x1="163" y1="46" x2="163" y2="84"/><circle class="aplat-papier" cx="278" cy="36" r="10"/><circle class="trait" cx="278" cy="36" r="10" fill="none"/><text class="texte" x="278" y="41" text-anchor="middle">4</text><line class="trait-fin" x1="274" y1="45" x2="254" y2="90"/><line class="trait-fin" x1="282" y1="45" x2="302" y2="90"/><circle class="aplat-papier" cx="340" cy="36" r="10"/><circle class="trait" cx="340" cy="36" r="10" fill="none"/><text class="texte" x="340" y="41" text-anchor="middle">5</text><line class="trait-fin" x1="342" y1="46" x2="345" y2="90"/><circle class="aplat-papier" cx="374" cy="36" r="10"/><circle class="trait" cx="374" cy="36" r="10" fill="none"/><text class="texte" x="374" y="41" text-anchor="middle">6</text><line class="trait-fin" x1="374" y1="46" x2="374" y2="86"/><text class="texte-petit" x="200" y="150" text-anchor="middle">sens du montage : les pièces glissent les unes dans les autres</text></svg>` },
            { t: "tableau", titre: "Nomenclature de la lampe de poche", entetes: ["Repère", "Nombre", "Désignation", "Matériau"], lignes: [["1", "1", "Tête avec lentille", "Plastique transparent"], ["2", "1", "LED", "Composant électronique"], ["3", "1", "Corps", "Aluminium"], ["4", "2", "Pile AA", "—"], ["5", "1", "Ressort de contact", "Acier"], ["6", "1", "Bouchon", "Aluminium"]] },
            { t: "verifie", q: "Dans une nomenclature, la ligne « 3 — vis M4 ×4 » signifie que…", choix: ["la vis mesure 4 mm de long", "il faut 4 vis identiques, toutes repérées 3", "c'est la 4e pièce à monter"], bonne: 1, explication: "« ×4 » indique le nombre de pièces identiques : il y a 4 vis portant le repère 3. Un seul repère suffit pour des pièces identiques, comme les 2 piles repérées 4 ci-dessus." },
          ],
        },
        {
          titre: "Maquette, modèle 3D et notice",
          blocs: [
            { t: "definition", terme: "Modélisation 3D", md: "La création de l'objet **en volume sur ordinateur**, avec un logiciel de **CAO** (conception assistée par ordinateur). On peut le faire tourner, vérifier qu'il s'assemble, puis l'imprimer en 3D." },
            { t: "texte", md: "La **maquette** est un modèle réduit en volume, en carton ou en bois, qui permet de voir et de tester l'objet avant de le construire en vrai. La **notice**, elle, s'adresse à l'utilisateur final : comment monter, utiliser ou entretenir l'objet, étape par étape. Un bon document technique est **clair**, **légendé** et **sans ambiguïté** : quelqu'un d'autre doit le comprendre sans toi." },
            { t: "etapes", titre: "Concevoir un porte-crayons : les représentations dans l'ordre", items: [{ titre: "Croquis", md: "On griffonne l'idée à main levée." }, { titre: "Schéma de principe", md: "On explique comment l'objet tient et range les crayons." }, { titre: "Dessin technique coté", md: "On fixe les dimensions : hauteur 100 mm, Ø 80 mm." }, { titre: "Modélisation 3D", md: "On dessine la pièce en CAO pour l'imprimer." }, { titre: "Notice", md: "On rédige le mode d'emploi pour l'utilisateur." }] },
          ],
        },
      ],
      bilan: "Croquis pour l'idée, schéma pour le principe, dessin coté pour fabriquer, vue éclatée pour assembler, notice pour l'utilisateur : chaque représentation a son public.",
    },
    "6e-technologie-06-algorithmes-programmation": {
      accroche: "Un robot aspirateur traverse ton salon, touche le pied du canapé, recule, tourne et repart. Il ne réfléchit pas : il suit, à la lettre, une liste d'instructions écrite par quelqu'un. Ce quelqu'un, aujourd'hui, ce sera toi !",
      objectifs: [
        "Décrire un algorithme comme une suite ordonnée d'instructions",
        "Utiliser une boucle et une condition dans un programme simple",
        "Programmer le déplacement d'un lutin ou d'un robot avec des blocs",
      ],
      sections: [
        {
          titre: "Un algorithme, c'est comme une recette",
          blocs: [
            { t: "definition", terme: "Algorithme", md: "Une **suite ordonnée d'instructions** qui permet de résoudre un problème ou d'accomplir une tâche. Une recette de cuisine, un itinéraire ou une notice de montage sont des algorithmes." },
            { t: "exemple", titre: "L'algorithme du chocolat chaud", etapes: ["Verser le lait dans une casserole.", "Chauffer le lait.", "Ajouter la poudre de chocolat dans le lait chaud.", "Mélanger.", "Verser dans la tasse."] },
            { t: "definition", terme: "Séquence", md: "Une suite d'instructions exécutées **l'une après l'autre, dans l'ordre**. Le chocolat chaud ci-dessus est une séquence de 5 instructions." },
            { t: "attention", md: "Dans un algorithme, **l'ordre compte**. Verse le chocolat dans la tasse avant de chauffer le lait, et tu boiras… du lait froid ! Une machine n'a pas de bon sens : elle exécute exactement ce qui est écrit, dans l'ordre écrit." },
          ],
        },
        {
          titre: "Programmer avec des blocs dans Scratch",
          blocs: [
            { t: "definition", terme: "Programme", md: "Un algorithme **écrit dans un langage compris par une machine**. Dans **Scratch**, on n'écrit pas de texte : on emboîte des **blocs** colorés comme des pièces de puzzle." },
            { t: "texte", md: "Dans Scratch, le personnage ou l'objet que tu programmes s'appelle un **lutin** (*sprite* en anglais). Ses instructions forment un **script**. Un script démarre toujours par un **événement** : « quand le drapeau vert est cliqué », « quand la touche espace est pressée ». Le drapeau vert lance le programme, le panneau rouge l'arrête." },
            { t: "tableau", titre: "Les familles de blocs", entetes: ["Rôle", "Exemple de bloc", "Ce qu'il fait"], lignes: [["Événement", "quand le drapeau vert est cliqué", "Déclenche le script"], ["Mouvement", "avancer de 10 pas", "Déplace le lutin"], ["Boucle", "répéter 10 fois, répéter indéfiniment", "Répète les blocs qu'il contient"], ["Condition", "si touche le bord alors", "Choisit selon la situation"], ["Apparence", "dire Bonjour !", "Fait parler ou change le costume"]] },
            { t: "verifie", q: "Quel bloc Scratch permet de répéter plusieurs fois les mêmes instructions ?", choix: ["« dire Bonjour »", "« répéter 10 fois »", "« quand le drapeau vert est cliqué »", "« avancer de 10 pas »"], bonne: 1, explication: "« Répéter 10 fois » est une boucle : il exécute 10 fois les blocs placés à l'intérieur. « Quand le drapeau vert est cliqué » est un événement qui démarre le script." },
          ],
        },
        {
          titre: "Répéter sans tout réécrire : la boucle",
          blocs: [
            { t: "definition", terme: "Boucle", md: "Une structure qui **répète des instructions** : un nombre précis de fois (« répéter 4 fois ») ou sans fin (« répéter indéfiniment »). Elle évite de réécrire plusieurs fois les mêmes blocs." },
            { t: "schema", titre: "Le script qui dessine un carré", legende: "Les deux blocs placés dans la boucle sont exécutés 4 fois : 4 côtés, 4 virages.", svg: `<svg viewBox="0 0 400 220"><path class="aplat-fort" d="M40 34 Q80 8 120 34 L260 34 L260 60 L40 60 Z" opacity="0.35"/><path class="trait" d="M40 34 Q80 8 120 34 L260 34 L260 60 L40 60 Z" fill="none"/><text class="texte-petit" x="50" y="51">quand le drapeau vert est cliqué</text><path class="aplat" d="M40 60 L220 60 L220 90 L60 90 L60 150 L220 150 L220 172 L40 172 Z"/><path class="trait" d="M40 60 L220 60 L220 90 L60 90 L60 150 L220 150 L220 172 L40 172 Z" fill="none"/><text class="texte-petit" x="50" y="80">répéter 4 fois</text><rect class="aplat-papier" x="60" y="90" width="170" height="30" rx="3"/><rect class="trait" x="60" y="90" width="170" height="30" rx="3" fill="none"/><text class="texte-petit" x="70" y="109">avancer de 100 pas</text><rect class="aplat-papier" x="60" y="120" width="170" height="30" rx="3"/><rect class="trait" x="60" y="120" width="170" height="30" rx="3" fill="none"/><text class="texte-petit" x="70" y="139">tourner ↻ de 90 degrés</text><line class="pointille" x1="264" y1="47" x2="282" y2="47"/><text class="texte-main" x="288" y="52">événement</text><line class="pointille" x1="224" y1="75" x2="282" y2="75"/><text class="texte-main" x="288" y="80">boucle</text><line class="pointille" x1="234" y1="120" x2="282" y2="120"/><text class="texte-main" x="288" y="125">mouvement</text><text class="texte-petit" x="200" y="204" text-anchor="middle">Résultat : le lutin trace un carré de 100 pas de côté.</text></svg>` },
            { t: "exemple", titre: "Pourquoi la boucle fait gagner du temps", md: "Sans boucle, il faudrait écrire 8 blocs : avancer, tourner, avancer, tourner, avancer, tourner, avancer, tourner. Avec « répéter 4 fois », **3 blocs** suffisent : la boucle et les deux blocs qu'elle contient. Et pour avancer 4 fois de 50 pas, le lutin parcourt 4 × 50 = 200 pas." },
            { t: "propriete", titre: "Dessiner un polygone régulier", md: "Pour revenir à son point de départ, le lutin doit faire **un tour complet**, soit 360°, en tout. À chaque virage, il tourne donc de ==360° ÷ nombre de côtés==.\n- Carré : 360 ÷ 4 = 90°.\n- Triangle équilatéral : 360 ÷ 3 = 120°.\n- Octogone (8 côtés) : 360 ÷ 8 = 45°." },
            { t: "verifie", q: "Pour dessiner un triangle équilatéral, quel programme faut-il ?", choix: ["Répéter 3 fois : avancer de 100, tourner de 60°", "Répéter 3 fois : avancer de 100, tourner de 120°", "Répéter 4 fois : avancer de 100, tourner de 90°"], bonne: 1, explication: "Le lutin doit faire un tour complet en 3 virages : 360 ÷ 3 = 120°. Avec 60°, il ne ferait qu'un demi-tour et le triangle ne se refermerait pas. Le troisième programme dessine un carré." },
          ],
        },
        {
          titre: "Choisir selon la situation : la condition",
          blocs: [
            { t: "definition", terme: "Condition", md: "Une structure **« si… alors… sinon »** qui permet au programme de **choisir** : si la condition est vraie, il fait une chose ; sinon, il en fait une autre (ou rien). Exemple : « si touche le bord, alors rebondir »." },
            { t: "schema", titre: "Algorigramme : un lutin qui rebondit sans fin", legende: "Un algorigramme représente un algorithme : rectangles pour les actions, losange pour le test (oui ou non).", svg: `<svg viewBox="0 0 400 300"><rect class="aplat-papier" x="150" y="8" width="100" height="28" rx="14"/><rect class="trait" x="150" y="8" width="100" height="28" rx="14" fill="none"/><text class="texte" x="200" y="27" text-anchor="middle">Début</text><path class="trait" d="M200 36 L200 56" marker-end="url(#fl)"/><rect class="aplat" x="130" y="60" width="140" height="32"/><rect class="trait" x="130" y="60" width="140" height="32" fill="none"/><text class="texte" x="200" y="81" text-anchor="middle">Avancer de 10 pas</text><path class="trait" d="M200 92 L200 116" marker-end="url(#fl)"/><path class="aplat-fort" d="M200 120 L275 155 L200 190 L125 155 Z" opacity="0.35"/><path class="trait" d="M200 120 L275 155 L200 190 L125 155 Z" fill="none"/><text class="texte-petit" x="200" y="159" text-anchor="middle">Touche le bord ?</text><path class="trait" d="M200 190 L200 218" marker-end="url(#fl)"/><text class="texte-pigment" x="208" y="208">oui</text><rect class="aplat" x="140" y="222" width="120" height="30"/><rect class="trait" x="140" y="222" width="120" height="30" fill="none"/><text class="texte" x="200" y="242" text-anchor="middle">Rebondir</text><path class="trait" d="M200 252 L200 274 L60 274 L60 76 L126 76" fill="none" marker-end="url(#fl)"/><path class="trait" d="M275 155 L340 155 L340 76 L274 76" fill="none" marker-end="url(#fl)"/><text class="texte-pigment" x="288" y="148">non</text><text class="texte-main" x="130" y="294" text-anchor="middle">on recommence</text></svg>` },
            { t: "texte", md: "Remarque que la flèche remonte toujours vers « Avancer » : c'est une **boucle sans fin** (« répéter indéfiniment »), et à l'intérieur se trouve une **condition**. Dans Scratch, cela donne : « quand le drapeau vert est cliqué → répéter indéfiniment : avancer de 10 pas, si touche le bord alors rebondir »." },
          ],
        },
        {
          titre: "Piloter un robot et corriger ses erreurs",
          blocs: [
            { t: "texte", md: "Pour déplacer un robot sur un quadrillage, on enchaîne des instructions comme **avancer d'une case** ou **tourner à droite de 90°**. Le piège : il faut raisonner **du point de vue du robot**, pas du tien. Si le robot regarde vers le sud et tourne « à droite », il se retrouve tourné vers l'ouest, même si pour toi c'est la gauche de la feuille !" },
            { t: "exemple", titre: "Sortir d'un couloir en L", etapes: ["Démarrer le programme.", "Avancer de 3 cases (jusqu'au coin du couloir).", "Tourner à gauche de 90°.", "Avancer de 2 cases.", "S'arrêter : le robot est sorti."] },
            { t: "attention", md: "Si un programme ne fait pas ce que tu voulais, ce n'est pas l'ordinateur qui s'est trompé : il a fait **exactement** ce qui était écrit. L'erreur (on dit un **bug**) est dans le programme. Tester, observer, corriger, puis tester encore : c'est le travail normal de tout programmeur." },
            { t: "verifie", q: "Un robot regarde vers l'est. Il exécute « tourner à gauche de 90°, avancer de 3 cases ». Où se trouve-t-il ?", choix: ["3 cases au nord", "3 cases au sud", "3 cases à l'est", "3 cases à l'ouest"], bonne: 0, explication: "Quand on regarde l'est, sa gauche est le nord. Le robot se tourne donc vers le nord et avance de 3 cases dans cette direction." },
          ],
        },
      ],
      bilan: "Une séquence enchaîne, une boucle répète, une condition choisit : avec ces trois briques et des tests patients, tu peux programmer presque tout.",
    },
    "6e-technologie-07-information-numerique": {
      accroche: "Ouvre ton ordinateur par la pensée : à l'intérieur, pas de photos, pas de musique, pas de lettres. Seulement des milliards de minuscules interrupteurs, allumés ou éteints, 1 ou 0. Et pourtant, ta dernière vidéo de vacances est bien là ! Comment est-ce possible ?",
      objectifs: [
        "Distinguer donnée et information, fichier et dossier",
        "Identifier les composants d'un environnement numérique",
        "Utiliser les unités de taille des fichiers et protéger ses comptes",
      ],
      sections: [
        {
          titre: "Données, informations et binaire",
          blocs: [
            { t: "definition", terme: "Donnée et information", md: "Une **donnée** est un élément brut, sans contexte : le nombre 14. Une **information** est une donnée qui a du **sens** dans un contexte : « il fait 14 °C dehors », « j'ai eu 14 sur 20 »." },
            { t: "texte", md: "Dans un ordinateur, tout est enregistré en **binaire**, avec seulement deux chiffres : 0 et 1. Chaque 0 ou 1 s'appelle un **bit**. On regroupe les bits par paquets de 8 : un **octet**. Avec un octet, on peut coder 256 valeurs différentes, par exemple une lettre du clavier." },
            { t: "tableau", titre: "Les unités d'information", entetes: ["Unité", "Valeur", "Exemple de taille"], lignes: [["1 bit", "0 ou 1", "La plus petite information"], ["1 octet (o)", "8 bits", "Une lettre"], ["1 kilooctet (ko)", "1 000 octets", "Une page de texte simple"], ["1 mégaoctet (Mo)", "1 000 ko", "Une photo pèse environ 3 Mo"], ["1 gigaoctet (Go)", "1 000 Mo", "Un film pèse quelques Go"], ["1 téraoctet (To)", "1 000 Go", "Un disque dur entier"]] },
            { t: "exemple", titre: "Convertir et compter", etapes: ["Une photo de 3 Mo pèse 3 × 1 000 = 3 000 ko, soit 3 000 000 octets.", "Une clé USB de 8 Go contient 8 × 1 000 = 8 000 Mo.", "Nombre de photos de 3 Mo : 8 000 ÷ 3 ≈ 2 666 photos."] },
            { t: "verifie", q: "Une vidéo pèse 1,5 Go. Combien cela fait-il en Mo ?", choix: ["15 Mo", "150 Mo", "1 500 Mo", "15 000 Mo"], bonne: 2, explication: "1 Go = 1 000 Mo, donc 1,5 Go = 1,5 × 1 000 = 1 500 Mo. Pour passer d'une unité à la plus petite suivante, on multiplie par 1 000." },
          ],
        },
        {
          titre: "Fichiers et dossiers",
          blocs: [
            { t: "definition", terme: "Fichier", md: "Un ensemble de données enregistré sous un **nom** : un texte, une image, un son, une vidéo, un programme. Son **extension**, après le point, indique son type : **.jpg** ou **.png** (image), **.mp3** (son), **.mp4** (vidéo), **.pdf** (document), **.sb3** (projet Scratch)." },
            { t: "definition", terme: "Dossier", md: "Un **contenant** qui sert à ranger des fichiers et d'autres dossiers, comme un classeur avec des intercalaires. Il ne contient pas de données lui-même." },
            { t: "schema", titre: "Une arborescence bien rangée", legende: "Les dossiers (icône à onglet) contiennent des fichiers (icône à coin plié) et d'autres dossiers.", svg: `<svg viewBox="0 0 400 190"><path class="aplat-fort" d="M20 14 L28 14 L31 18 L42 18 L42 32 L20 32 Z"/><text class="texte" x="50" y="29">Mes documents</text><line class="trait-fin" x1="31" y1="34" x2="31" y2="166"/><line class="trait-fin" x1="31" y1="64" x2="58" y2="64"/><path class="aplat-fort" d="M60 56 L68 56 L71 60 L82 60 L82 74 L60 74 Z"/><text class="texte" x="90" y="70">Technologie</text><line class="trait-fin" x1="71" y1="76" x2="71" y2="134"/><line class="trait-fin" x1="71" y1="99" x2="98" y2="99"/><path class="aplat-papier" d="M100 90 L110 90 L114 94 L114 108 L100 108 Z"/><path class="trait-fin" d="M100 90 L110 90 L114 94 L114 108 L100 108 Z" fill="none"/><text class="texte" x="122" y="104">robot.sb3</text><line class="trait-fin" x1="71" y1="134" x2="98" y2="134"/><path class="aplat-papier" d="M100 125 L110 125 L114 129 L114 143 L100 143 Z"/><path class="trait-fin" d="M100 125 L110 125 L114 129 L114 143 L100 143 Z" fill="none"/><text class="texte" x="122" y="139">photo.jpg</text><line class="trait-fin" x1="31" y1="166" x2="58" y2="166"/><path class="aplat-fort" d="M60 158 L68 158 L71 162 L82 162 L82 176 L60 176 Z"/><text class="texte" x="90" y="172">Maths</text><path class="trait-fin" d="M262 66 L180 66" marker-end="url(#fl-p)"/><text class="texte-main" x="268" y="71">un dossier</text><path class="trait-fin" d="M262 120 L198 134" marker-end="url(#fl-p)"/><text class="texte-main" x="268" y="118">un fichier</text><text class="texte-petit" x="268" y="136">extension .jpg :</text><text class="texte-petit" x="268" y="150">c'est une image</text></svg>` },
            { t: "astuce", md: "Donne à tes fichiers des **noms clairs** (« expose-energie-v2 » plutôt que « truc ») et range-les dans des dossiers par matière. Tu les retrouveras en quelques secondes." },
          ],
        },
        {
          titre: "Matériel, logiciels et périphériques",
          blocs: [
            { t: "definition", terme: "Matériel et logiciel", md: "Le **matériel** (*hardware*) regroupe tout ce qui se touche : écran, clavier, processeur, clé USB. Les **logiciels** (*software*) sont les programmes qui font fonctionner le matériel : le **système d'exploitation**, le traitement de texte, le navigateur internet." },
            { t: "schema", titre: "Les périphériques autour de l'ordinateur", legende: "Demande-toi dans quel sens circule l'information : vers l'ordinateur (entrée) ou depuis l'ordinateur (sortie).", svg: `<svg viewBox="0 0 400 250"><text class="texte-pigment" x="55" y="26" text-anchor="middle">Entrée</text><text class="texte-pigment" x="345" y="40" text-anchor="middle">Sortie</text><rect class="aplat-fort" x="150" y="85" width="100" height="60" rx="6" opacity="0.35"/><rect class="trait" x="150" y="85" width="100" height="60" rx="6" fill="none"/><text class="texte" x="200" y="112" text-anchor="middle">Ordinateur</text><text class="texte-petit" x="200" y="130" text-anchor="middle">traite, stocke</text><rect class="aplat" x="10" y="38" width="90" height="26" rx="4"/><rect class="trait-fin" x="10" y="38" width="90" height="26" rx="4" fill="none"/><text class="texte" x="55" y="56" text-anchor="middle">Clavier</text><rect class="aplat" x="10" y="78" width="90" height="26" rx="4"/><rect class="trait-fin" x="10" y="78" width="90" height="26" rx="4" fill="none"/><text class="texte" x="55" y="96" text-anchor="middle">Souris</text><rect class="aplat" x="10" y="118" width="90" height="26" rx="4"/><rect class="trait-fin" x="10" y="118" width="90" height="26" rx="4" fill="none"/><text class="texte" x="55" y="136" text-anchor="middle">Micro</text><rect class="aplat" x="10" y="158" width="90" height="26" rx="4"/><rect class="trait-fin" x="10" y="158" width="90" height="26" rx="4" fill="none"/><text class="texte" x="55" y="176" text-anchor="middle">Webcam</text><path class="trait-fin" d="M100 51 L147 92" marker-end="url(#fl)"/><path class="trait-fin" d="M100 91 L147 108" marker-end="url(#fl)"/><path class="trait-fin" d="M100 131 L147 124" marker-end="url(#fl)"/><path class="trait-fin" d="M100 171 L147 140" marker-end="url(#fl)"/><rect class="aplat" x="300" y="52" width="90" height="26" rx="4"/><rect class="trait-fin" x="300" y="52" width="90" height="26" rx="4" fill="none"/><text class="texte" x="345" y="70" text-anchor="middle">Écran</text><rect class="aplat" x="300" y="102" width="90" height="26" rx="4"/><rect class="trait-fin" x="300" y="102" width="90" height="26" rx="4" fill="none"/><text class="texte" x="345" y="120" text-anchor="middle">Imprimante</text><rect class="aplat" x="300" y="152" width="90" height="26" rx="4"/><rect class="trait-fin" x="300" y="152" width="90" height="26" rx="4" fill="none"/><text class="texte" x="345" y="170" text-anchor="middle">Enceintes</text><path class="trait-fin" d="M250 96 L297 66" marker-end="url(#fl)"/><path class="trait-fin" d="M250 115 L297 115" marker-end="url(#fl)"/><path class="trait-fin" d="M250 134 L297 163" marker-end="url(#fl)"/><rect class="aplat-papier" x="130" y="198" width="140" height="28" rx="4"/><rect class="trait" x="130" y="198" width="140" height="28" rx="4" fill="none"/><text class="texte" x="200" y="217" text-anchor="middle">Écran tactile</text><path class="trait-fin" d="M185 147 L185 195" marker-end="url(#fl)"/><path class="trait-fin" d="M215 196 L215 148" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="243" text-anchor="middle">à la fois entrée et sortie</text></svg>` },
            { t: "texte", md: "Un **périphérique d'entrée** envoie des données à l'ordinateur : tu tapes, tu cliques, tu parles. Un **périphérique de sortie** te restitue le résultat : tu lis, tu entends, tu imprimes. Certains font les deux, comme l'écran tactile : il affiche l'image (sortie) et reçoit tes touchers (entrée)." },
            { t: "verifie", q: "Un scanner est un périphérique…", choix: ["d'entrée", "de sortie", "de stockage"], bonne: 0, explication: "Le scanner transforme une feuille de papier en image numérique et l'envoie à l'ordinateur : l'information va vers l'ordinateur, c'est donc une entrée." },
          ],
        },
        {
          titre: "Stocker, partager, se protéger",
          blocs: [
            { t: "texte", md: "On peut enregistrer ses fichiers **en local**, sur un support que l'on possède : le disque dur de l'ordinateur, une clé USB. On peut aussi les stocker **à distance**, sur des serveurs accessibles par internet : c'est le **cloud** (« nuage »).\n\nAu collège, les ordinateurs sont reliés entre eux en **réseau** pour partager des fichiers et une imprimante. L'**ENT** (Espace Numérique de Travail) te donne accès, depuis n'importe où, à ton cahier de textes, tes notes et ta messagerie." },
            { t: "propriete", titre: "Un bon mot de passe", md: "- Il est **long** : 12 caractères ou plus.\n- Il **mélange** majuscules, minuscules, chiffres et symboles.\n- Il **ne se devine pas** : ni ton prénom, ni ta date de naissance, ni « 123456 ».\n- Il **ne se partage jamais**, même avec un ami, et ne s'écrit pas sur un papier collé à l'écran." },
            { t: "astuce", md: "Pour un mot de passe solide et facile à retenir, invente une phrase absurde et transforme-la : « Mon chat Rox mange 3 sardines ! » devient **MonChatRox-mange3sardines!**. Long, mélangé, impossible à deviner." },
            { t: "attention", md: "Tout ce qui est fait avec ton compte est sous **ta responsabilité**. Si un camarade te demande ton mot de passe « juste pour voir », refuse poliment. Et pense à **te déconnecter** quand tu utilises un ordinateur partagé." },
          ],
        },
      ],
      bilan: "Des 0 et des 1 rangés en octets deviennent fichiers, dossiers et informations ; entre, traite, sors, stocke… et garde ton mot de passe pour toi.",
    },
    "6e-technologie-08-projet-securite": {
      accroche: "Ton téléphone glisse sans arrêt du bureau quand tu regardes une vidéo. Et si tu fabriquais toi-même un porte-téléphone ? Les ingénieurs ne commencent jamais par couper du carton : ils suivent une démarche, étape par étape. Prends ta blouse, on entre à l'atelier !",
      objectifs: [
        "Décrire les étapes d'une démarche de projet",
        "Lire et utiliser un cahier des charges simple",
        "Appliquer les règles de sécurité et utiliser correctement les outils de l'atelier",
      ],
      sections: [
        {
          titre: "Les étapes d'une démarche de projet",
          blocs: [
            { t: "definition", terme: "Démarche de projet", md: "Une suite d'étapes, **dans l'ordre**, qui part d'un **besoin** et aboutit à un objet qui y répond. Sauter une étape, c'est risquer de fabriquer un objet inutile ou qui ne marche pas." },
            { t: "etapes", titre: "De l'idée à l'objet", items: [{ titre: "Identifier le besoin", md: "Quel problème veut-on résoudre ? « Mon téléphone glisse du bureau. »" }, { titre: "Rédiger le cahier des charges", md: "Ce que l'objet doit faire et ses **contraintes**." }, { titre: "Chercher et choisir une solution", md: "Croquis, idées de chacun, puis choix en équipe." }, { titre: "Réaliser un prototype", md: "Un premier exemplaire pour essayer l'idée." }, { titre: "Tester", md: "On vérifie chaque point du cahier des charges." }, { titre: "Améliorer", md: "On corrige les défauts, puis on teste à nouveau." }, { titre: "Présenter", md: "On montre l'objet et on explique ses choix." }] },
            { t: "texte", md: "On travaille **en équipe** : on répartit les rôles (dessinateur, fabricant, testeur, secrétaire), on écoute les idées des autres même quand on n'est pas d'accord, et on note tout dans un **carnet de projet** : idées, essais, résultats, décisions." },
          ],
        },
        {
          titre: "Le cahier des charges, contrat du projet",
          blocs: [
            { t: "definition", terme: "Cahier des charges", md: "Le document qui liste **ce que l'objet doit faire** (ses fonctions) et ses **contraintes** : taille, masse, coût, matériaux, sécurité, délai. Il sert de référence pour les tests." },
            { t: "tableau", titre: "Cahier des charges d'un porte-téléphone", entetes: ["Exigence", "Type de contrainte"], lignes: [["Tenir un téléphone de 200 g incliné", "Fonction"], ["Peser moins de 100 g", "Masse"], ["Tenir sur une table de 10 cm × 10 cm", "Dimensions"], ["Coûter moins de 3 €", "Coût"], ["Être en carton ou en bois", "Matériau"], ["Ne pas avoir de bord coupant", "Sécurité"], ["Être terminé avant les vacances", "Délai"]] },
            { t: "exemple", titre: "Vérifier le coût", md: "Matériaux utilisés : carton 0,80 €, colle 0,50 €, peinture 1,20 €. Total : 0,80 + 0,50 + 1,20 = **2,50 €**. C'est moins de 3 € : la contrainte de coût est respectée." },
            { t: "verifie", q: "Le prototype tient parfaitement le téléphone mais pèse 150 g, alors que le cahier des charges impose moins de 100 g. Que conclure ?", choix: ["Le projet est réussi, le téléphone tient", "Une contrainte n'est pas respectée : il faut alléger le prototype", "On change le cahier des charges pour accepter 150 g"], bonne: 1, explication: "On teste contrainte par contrainte. La fonction « tenir » est réussie, mais la contrainte de masse ne l'est pas. On améliore le prototype (moins de matière, matériau plus léger) au lieu de changer les règles du jeu." },
          ],
        },
        {
          titre: "Prototype, test, amélioration",
          blocs: [
            { t: "definition", terme: "Prototype", md: "Le **premier exemplaire** d'un objet, souvent imparfait, fabriqué pour vérifier que l'idée fonctionne. Le mot vient du grec et veut dire « premier modèle »." },
            { t: "schema", titre: "La boucle test et amélioration", legende: "Tant que le prototype n'est pas conforme au cahier des charges, on l'améliore et on le teste à nouveau.", svg: `<svg viewBox="0 0 400 210"><rect class="aplat" x="16" y="82" width="98" height="36" rx="6"/><rect class="trait" x="16" y="82" width="98" height="36" rx="6" fill="none"/><text class="texte" x="65" y="105" text-anchor="middle">Prototype</text><path class="trait" d="M114 100 L136 100" marker-end="url(#fl)"/><rect class="aplat" x="140" y="82" width="80" height="36" rx="6"/><rect class="trait" x="140" y="82" width="80" height="36" rx="6" fill="none"/><text class="texte" x="180" y="105" text-anchor="middle">Tester</text><path class="trait" d="M220 100 L233 100" marker-end="url(#fl)"/><path class="aplat-fort" d="M292 66 L352 100 L292 134 L232 100 Z" opacity="0.35"/><path class="trait" d="M292 66 L352 100 L292 134 L232 100 Z" fill="none"/><text class="texte-petit" x="292" y="104" text-anchor="middle">Conforme ?</text><path class="trait" d="M292 66 L292 34 L65 34 L65 78" fill="none" marker-end="url(#fl)"/><text class="texte-pigment" x="178" y="26" text-anchor="middle">non : améliorer</text><path class="trait" d="M292 134 L292 162" marker-end="url(#fl)"/><text class="texte-pigment" x="300" y="154">oui</text><rect class="aplat-papier" x="242" y="166" width="100" height="32" rx="6"/><rect class="trait" x="242" y="166" width="100" height="32" rx="6" fill="none"/><text class="texte" x="292" y="187" text-anchor="middle">Présenter</text></svg>` },
            { t: "exemple", titre: "Le porte-téléphone qui basculait", etapes: ["Premier prototype en carton : quand on pose le téléphone, tout bascule en arrière.", "On observe : le socle est trop petit par rapport à la hauteur du téléphone.", "On élargit le socle et on ajoute un appui à l'arrière.", "Nouveau test : le téléphone tient. On vérifie aussi la masse et le coût."] },
            { t: "attention", md: "Un prototype qui ne marche pas du premier coup, ce n'est **pas un échec** : c'est normal ! C'est justement pour trouver les défauts qu'on le fabrique. L'erreur serait de ne pas tester, ou d'abandonner." },
          ],
        },
        {
          titre: "À l'atelier : outils et sécurité",
          blocs: [
            { t: "liste", titre: "Les règles d'or de l'atelier", items: ["Porter des **lunettes de protection** pour percer, scier, limer.", "**Attacher ses cheveux** longs, retirer écharpe et bijoux qui pendent : ils peuvent être happés par une machine.", "Ne pas courir, garder son poste **rangé**.", "**Demander l'autorisation** à l'enseignant avant d'utiliser une machine.", "Ranger les outils à leur place après usage."] },
            { t: "tableau", titre: "Chaque outil a son usage", entetes: ["Outil", "Usage", "Règle de sécurité"], lignes: [["Cutter", "Couper du carton", "Sur un tapis de découpe, en éloignant la lame de soi et de l'autre main ; sortir peu de lame"], ["Lime", "Adoucir les bords d'une pièce", "Pièce bien tenue, gestes dans un seul sens"], ["Perceuse", "Faire un trou", "Lunettes, pièce fixée par un serre-joint ou un étau"], ["Pince coupante", "Couper un fil", "Tenir le bout du fil pour qu'il ne saute pas"], ["Pistolet à colle chaude", "Assembler deux pièces", "Ne jamais toucher la buse ni la colle : elles brûlent"]] },
            { t: "exemple", titre: "Avant de percer une planche", etapes: ["Attacher ses cheveux, retirer bijoux et écharpe.", "Mettre les lunettes de protection.", "Fixer la planche avec un serre-joint pour qu'elle ne tourne pas.", "Demander l'autorisation à l'enseignant.", "Percer, puis ranger la perceuse."] },
            { t: "verifie", q: "Avec un cutter, comment faut-il couper ?", choix: ["Vers soi, pour mieux voir", "En éloignant la lame de soi et de l'autre main", "Avec la lame entièrement sortie"], bonne: 1, explication: "Si la lame dérape, elle doit partir loin de ton corps et de ta main qui tient la règle. On coupe sur un tapis de découpe, on sort juste la longueur de lame nécessaire et on la rentre après usage." },
          ],
        },
      ],
      bilan: "Un besoin, un cahier des charges, un prototype qu'on teste et qu'on améliore, en équipe et en sécurité : voilà comment naissent tous les objets techniques.",
    },
  },
};
