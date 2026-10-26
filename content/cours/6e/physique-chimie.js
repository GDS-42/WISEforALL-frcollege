// Cours ÉCLORE — 6e Physique-Chimie. Schéma : docs/COURS.md
export default {
  id: "6e-physique-chimie",
  chapitres: {
    "6e-physique-chimie-01-etats-matiere": {
      accroche: "Retourne un verre « vide » et enfonce-le bien droit dans une bassine d'eau : l'eau refuse presque d'y entrer ! Quelque chose d'invisible occupe déjà la place. Ce quelque chose, c'est de la matière, au même titre que ta table ou l'eau de la bassine.",
      objectifs: [
        "Reconnaître l'état solide, liquide ou gazeux d'un corps de la vie quotidienne",
        "Décrire les propriétés de chaque état : forme, volume, compression",
        "Prouver que l'air est de la matière : il a une masse et occupe un volume",
        "Expliquer les trois états avec le modèle des particules",
      ],
      sections: [
        {
          titre: "Solide, liquide, gaz : trois façons d'exister",
          blocs: [
            { t: "texte", md: "Autour de toi, tout est fait de **matière** : ta chaise, l'eau de ta gourde, l'air que tu respires. Cette matière se présente sous **trois états physiques**. Pour savoir dans quel état est un corps, on se pose deux questions simples : *a-t-il sa propre forme ?* et *garde-t-il toujours le même volume ?*" },
            { t: "definition", terme: "État physique", md: "La façon dont la matière se présente : **solide**, **liquide** ou **gaz**. Une même matière peut changer d'état : l'eau est solide dans un glaçon, liquide au robinet, gazeuse dans la vapeur." },
            { t: "tableau", titre: "Les propriétés des trois états", entetes: ["", "Solide", "Liquide", "Gaz"], lignes: [["Forme propre ?", "**oui**, on peut le saisir", "non, il prend la forme du récipient", "non, il occupe tout l'espace"], ["Volume propre ?", "**oui**", "**oui**, il ne change pas", "non"], ["Se comprime ?", "non", "presque pas", "**oui**, facilement"], ["Exemples", "caillou, glaçon, sel", "eau, huile, jus d'orange", "air, vapeur d'eau, gaz de ville"]] },
            { t: "exemple", titre: "Dans quel état est le jus d'orange de ton verre ?", etapes: ["A-t-il sa propre forme ? Non : versé dans une bouteille, il en prend la forme.", "Garde-t-il son volume ? Oui : 20 cL dans un verre font toujours 20 cL dans une tasse.", "Conclusion : le jus d'orange est un **liquide**."] },
            { t: "verifie", q: "Quel état de la matière a une forme propre ?", choix: ["Le solide", "Le liquide", "Le gaz"], bonne: 0, explication: "Seul le solide garde sa forme quand on le déplace : on peut le saisir. Le liquide et le gaz prennent la forme de leur récipient." },
          ],
        },
        {
          titre: "Les liquides : une surface toujours horizontale",
          blocs: [
            { t: "texte", md: "Penche un verre d'eau et attends que l'eau soit immobile. Le verre est incliné… mais la surface de l'eau, elle, reste **plane et horizontale**, comme la ligne de l'horizon. Cette surface du liquide en contact avec l'air s'appelle la **surface libre**." },
            { t: "propriete", titre: "Surface libre d'un liquide", md: "Au repos, la surface libre d'un liquide est **plane et horizontale**, quelle que soit la forme ou l'inclinaison du récipient." },
            { t: "definition", terme: "Fluide", md: "Un corps qui peut **couler** : les liquides et les gaz sont des fluides. L'eau coule du robinet, l'air s'écoule d'un ballon qu'on dégonfle." },
            { t: "attention", md: "Le sable coule entre les doigts… mais ce n'est **pas un liquide** ! Regarde-le à la loupe : chaque grain est un minuscule solide qui garde sa forme. Le sable est un solide en grains, comme le sucre en poudre ou la farine. Et un tas de sable n'a pas de surface horizontale : il forme un cône." },
          ],
        },
        {
          titre: "L'air, une matière invisible",
          blocs: [
            { t: "texte", md: "On ne voit pas l'air, on ne le sent pas… Pourtant, c'est bien de la matière. Pour le prouver, il faut montrer qu'il **occupe un volume** et qu'il **a une masse**, comme n'importe quel solide ou liquide." },
            { t: "etapes", titre: "Expérience : l'air occupe de la place", items: [{ titre: "Préparer", md: "Coller une boule de papier sec au fond d'un verre." }, { titre: "Retourner", md: "Tourner le verre ouverture vers le bas." }, { titre: "Enfoncer", md: "L'enfoncer bien droit dans une bassine d'eau." }, { titre: "Observer", md: "L'eau ne monte presque pas dans le verre : l'air occupe la place." }, { titre: "Conclure", md: "On ressort le verre : le papier est **sec**. L'air a un volume." }] },
            { t: "exemple", titre: "L'air a une masse", md: "On pèse un ballon de football **dégonflé**, puis on le gonfle avec une pompe et on le pèse à nouveau : la balance indique **quelques grammes de plus**. L'air ajouté a une masse ! On a mesuré qu'**un litre d'air pèse environ 1,2 g**." },
            { t: "exemple", titre: "Combien pèse l'air de ta classe ?", etapes: ["Une salle de classe contient environ 100 000 L d'air.", "Chaque litre pèse environ 1,2 g : 100 000 × 1,2 = 120 000 g.", "Or 1 kg = 1 000 g, donc 120 000 g = **120 kg**. Plus lourd que ton professeur !"] },
            { t: "attention", md: "« Invisible » ne veut pas dire « rien ». Une bouteille fermée qui semble vide est en réalité **pleine d'air**. L'air ne pèse pas « rien » : c'est seulement très léger pour un petit volume." },
            { t: "verifie", q: "On pèse un ballon dégonflé, puis on le gonfle et on le pèse à nouveau. Que constate-t-on ?", choix: ["La masse a diminué", "La masse n'a pas changé", "La masse a augmenté"], bonne: 2, explication: "L'air qu'on a ajouté est de la matière : il a une masse. Le ballon gonflé est donc un peu plus lourd." },
          ],
        },
        {
          titre: "Ce qui se cache dedans : les particules",
          blocs: [
            { t: "texte", md: "Pourquoi les trois états se comportent-ils si différemment ? Les scientifiques imaginent que toute matière est faite de **particules** minuscules, bien trop petites pour être vues, même au microscope ordinaire. C'est la façon dont ces particules sont rangées qui fait l'état." },
            { t: "schema", titre: "Les trois états vus au niveau des particules", legende: "Solide : particules serrées et rangées. Liquide : serrées mais en désordre, elles glissent. Gaz : très espacées, elles s'agitent partout.", svg: `<svg viewBox="0 0 400 220"><g class="aplat-fort"><circle cx="44" cy="96" r="7.5"/><circle cx="60" cy="96" r="7.5"/><circle cx="76" cy="96" r="7.5"/><circle cx="92" cy="96" r="7.5"/><circle cx="44" cy="112" r="7.5"/><circle cx="60" cy="112" r="7.5"/><circle cx="76" cy="112" r="7.5"/><circle cx="92" cy="112" r="7.5"/><circle cx="44" cy="128" r="7.5"/><circle cx="60" cy="128" r="7.5"/><circle cx="76" cy="128" r="7.5"/><circle cx="92" cy="128" r="7.5"/><circle cx="44" cy="144" r="7.5"/><circle cx="60" cy="144" r="7.5"/><circle cx="76" cy="144" r="7.5"/><circle cx="92" cy="144" r="7.5"/></g><line class="trait" x1="20" y1="152" x2="120" y2="152"/><path class="trait" d="M150 40 L150 160 L250 160 L250 40"/><line class="pointille" x1="150" y1="112" x2="250" y2="112"/><g class="aplat-fort"><circle cx="160" cy="120" r="7.5"/><circle cx="177" cy="124" r="7.5"/><circle cx="194" cy="119" r="7.5"/><circle cx="212" cy="125" r="7.5"/><circle cx="229" cy="120" r="7.5"/><circle cx="242" cy="133" r="7.5"/><circle cx="160" cy="137" r="7.5"/><circle cx="186" cy="139" r="7.5"/><circle cx="203" cy="136" r="7.5"/><circle cx="222" cy="141" r="7.5"/><circle cx="168" cy="152" r="7.5"/><circle cx="185" cy="153" r="7.5"/><circle cx="208" cy="152" r="7.5"/><circle cx="226" cy="155" r="7.5"/><circle cx="242" cy="151" r="7.5"/></g><rect class="trait" x="280" y="40" width="100" height="120"/><g class="aplat-fort"><circle cx="300" cy="62" r="7.5"/><circle cx="352" cy="55" r="7.5"/><circle cx="328" cy="92" r="7.5"/><circle cx="365" cy="110" r="7.5"/><circle cx="296" cy="125" r="7.5"/><circle cx="340" cy="142" r="7.5"/><circle cx="312" cy="100" r="7.5"/></g><path class="trait-fin" d="M300 62 L314 52" marker-end="url(#fl)"/><path class="trait-fin" d="M365 110 L366 94" marker-end="url(#fl)"/><path class="trait-fin" d="M296 125 L284 136" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="106" text-anchor="middle">surface libre</text><text class="texte" x="70" y="185" text-anchor="middle">Solide</text><text class="texte" x="200" y="185" text-anchor="middle">Liquide</text><text class="texte" x="330" y="185" text-anchor="middle">Gaz</text><text class="texte-petit" x="70" y="203" text-anchor="middle">serrées, rangées</text><text class="texte-petit" x="200" y="203" text-anchor="middle">serrées, en désordre</text><text class="texte-petit" x="330" y="203" text-anchor="middle">très espacées</text></svg>` },
            { t: "texte", md: "Ce modèle explique tout. Dans un **solide**, les particules sont accrochées à leur place : la forme ne change pas. Dans un **liquide**, elles restent collées mais glissent les unes sur les autres : le liquide coule, mais son volume ne change pas. Dans un **gaz**, elles sont très éloignées : on peut les rapprocher en appuyant. C'est pour cela qu'un gaz se **comprime**." },
            { t: "astuce", md: "Fais le test avec une seringue sans aiguille. Remplie d'air et bouchée avec le doigt, on enfonce le piston facilement : l'air se comprime. Remplie d'eau, le piston ne bouge presque pas." },
            { t: "verifie", q: "Que peut-on comprimer facilement en appuyant dessus ?", choix: ["Un caillou", "De l'eau", "De l'air", "De l'huile"], bonne: 2, explication: "Dans un gaz comme l'air, les particules sont très espacées : on peut les rapprocher. Dans un solide ou un liquide, elles se touchent déjà." },
          ],
        },
      ],
      bilan: "Le solide garde sa forme, le liquide garde son volume, le gaz occupe tout l'espace. Et même invisible, l'air est de la matière : il a une masse et il prend de la place.",
    },
    "6e-physique-chimie-02-changements-etat-eau": {
      accroche: "Sors un glaçon du congélateur et pose-le sur une balance de cuisine. Attends qu'il fonde complètement : la balance n'a pas bougé d'un gramme ! La glace est devenue liquide, mais aucune matière n'a disparu.",
      objectifs: [
        "Nommer les quatre changements d'état de l'eau",
        "Connaître les températures de fusion et d'ébullition de l'eau et le palier de température",
        "Savoir que la masse se conserve mais que le volume change",
        "Décrire le cycle de l'eau",
      ],
      sections: [
        {
          titre: "Changer d'état sans changer de matière",
          blocs: [
            { t: "definition", terme: "Changement d'état", md: "Le passage d'un état physique à un autre. Pendant un changement d'état, ==l'eau reste de l'eau== : seule la façon dont ses particules sont rangées change." },
            { t: "schema", titre: "Les changements d'état de l'eau", legende: "En chauffant, on va vers la droite (fusion, vaporisation). En refroidissant, on revient vers la gauche (condensation, solidification).", svg: `<svg viewBox="0 0 400 230"><text class="texte-petit" x="200" y="18" text-anchor="middle">on chauffe</text><path class="trait-fin" d="M150 28 L250 28" marker-end="url(#fl)"/><rect class="aplat" x="20" y="95" width="90" height="40" rx="8"/><rect class="trait" x="20" y="95" width="90" height="40" rx="8"/><rect class="aplat" x="155" y="95" width="90" height="40" rx="8"/><rect class="trait" x="155" y="95" width="90" height="40" rx="8"/><rect class="aplat" x="290" y="95" width="90" height="40" rx="8"/><rect class="trait" x="290" y="95" width="90" height="40" rx="8"/><text class="texte" x="65" y="120" text-anchor="middle">SOLIDE</text><text class="texte" x="200" y="120" text-anchor="middle">LIQUIDE</text><text class="texte" x="335" y="120" text-anchor="middle">GAZ</text><path class="trait" d="M75 92 Q132 40 190 92" fill="none" marker-end="url(#fl-p)"/><path class="trait" d="M210 92 Q267 40 325 92" fill="none" marker-end="url(#fl-p)"/><path class="trait" d="M190 138 Q132 190 75 138" fill="none" marker-end="url(#fl)"/><path class="trait" d="M325 138 Q267 190 210 138" fill="none" marker-end="url(#fl)"/><text class="texte-pigment" x="132" y="56" text-anchor="middle">fusion</text><text class="texte-pigment" x="267" y="56" text-anchor="middle">vaporisation</text><text class="texte" x="132" y="182" text-anchor="middle">solidification</text><text class="texte" x="267" y="182" text-anchor="middle">condensation</text><path class="trait-fin" d="M250 202 L150 202" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="222" text-anchor="middle">on refroidit</text></svg>` },
            { t: "tableau", titre: "Quatre changements, quatre exemples", entetes: ["Nom", "Passage", "Dans la vie quotidienne"], lignes: [["**Fusion**", "solide → liquide", "un glaçon fond dans ton verre"], ["**Solidification**", "liquide → solide", "l'eau gèle dans le bac à glaçons"], ["**Vaporisation**", "liquide → gaz", "une flaque sèche au soleil, l'eau bout dans la casserole"], ["**Condensation** (ou liquéfaction)", "gaz → liquide", "la buée sur une vitre froide ou sur le miroir de la salle de bain"]] },
            { t: "astuce", md: "**Fusion** et **solidification** concernent le solide ; **vaporisation** contient « vapeur ». Pour la buée, pense : la vapeur invisible de l'air se *condense* en gouttes sur la vitre froide." },
            { t: "verifie", q: "Comment s'appelle le passage de l'état gazeux à l'état liquide ?", choix: ["La fusion", "La vaporisation", "La condensation", "La solidification"], bonne: 2, explication: "Gaz → liquide, c'est la condensation (on dit aussi liquéfaction). La vaporisation est le passage inverse." },
          ],
        },
        {
          titre: "Deux températures repères et un palier",
          blocs: [
            { t: "propriete", titre: "Températures de changement d'état de l'eau pure", md: "Sous la pression atmosphérique normale :\n- la glace **fond** (et l'eau gèle) à **0 °C** ;\n- l'eau **bout** à **100 °C**.\n\nPendant tout le changement d'état, ==la température reste constante== : c'est un **palier**." },
            { t: "texte", md: "Expérience : on chauffe de l'eau à 20 °C dans une casserole et on relève la température toutes les 2 minutes. Elle monte régulièrement… puis, dès que l'eau bout, le thermomètre reste bloqué à 100 °C tant qu'il reste du liquide. Toute l'énergie reçue sert à transformer le liquide en vapeur." },
            { t: "graphique", type: "courbe", titre: "Température de l'eau chauffée dans une casserole", unite: "°C", donnees: [{ label: "0 min", valeur: 20 }, { label: "2 min", valeur: 40 }, { label: "4 min", valeur: 60 }, { label: "6 min", valeur: 80 }, { label: "8 min", valeur: 100 }, { label: "10 min", valeur: 100 }, { label: "12 min", valeur: 100 }, { label: "14 min", valeur: 100 }] },
            { t: "attention", md: "Augmenter le feu sous une eau qui bout ne la rend **pas plus chaude** : le thermomètre indique toujours 100 °C. L'eau s'évapore seulement plus vite. De même, un verre d'eau avec des glaçons reste à 0 °C tant que la glace n'a pas fini de fondre." },
            { t: "savais-tu", md: "En montagne, l'air pèse moins lourd sur l'eau : elle bout à une température plus basse, environ 85 °C au sommet du mont Blanc. Les pâtes y cuisent plus lentement !" },
          ],
        },
        {
          titre: "La masse se conserve, le volume change",
          blocs: [
            { t: "exemple", titre: "Peser la glace qui fond", etapes: ["On pèse un verre contenant 50 g de glace (sans compter le verre).", "On attend la fonte complète.", "La balance indique toujours **50 g** : la masse se conserve.", "Mais le niveau a baissé : l'eau liquide occupe **moins de volume** que la glace."] },
            { t: "propriete", md: "Lors d'un changement d'état, **la masse se conserve** : le nombre de particules ne change pas. En revanche, le **volume change**, car les particules ne sont pas rangées de la même façon." },
            { t: "texte", md: "L'eau a une particularité rare : en gelant, elle **gonfle** d'environ un dixième de son volume. Une bouteille en plastique remplie à ras bord et bien fermée se déforme, voire éclate, au congélateur. Les canalisations gelées en hiver peuvent se fendre pour la même raison. Et 250 g d'eau donnent 250 g de glace, ni plus ni moins." },
            { t: "verifie", q: "On met au congélateur une bouteille contenant 250 g d'eau. Quelle est la masse de la glace obtenue ?", choix: ["Moins de 250 g", "250 g", "Plus de 250 g"], bonne: 1, explication: "La masse se conserve lors d'un changement d'état : 250 g d'eau donnent 250 g de glace. C'est le volume qui augmente, pas la masse." },
          ],
        },
        {
          titre: "La vapeur d'eau est invisible",
          blocs: [
            { t: "attention", md: "Le petit nuage blanc au-dessus d'une casserole n'est **pas** de la vapeur ! La vapeur d'eau est un gaz **invisible**. En sortant, elle rencontre l'air plus froid et se condense aussitôt en minuscules **gouttelettes d'eau liquide** : c'est elles que tu vois. Les nuages du ciel sont faits de la même façon." },
            { t: "texte", md: "La vaporisation peut se faire de deux façons. L'**ébullition** est rapide et bruyante, avec de grosses bulles, à 100 °C. L'**évaporation** est lente et silencieuse, à n'importe quelle température : le linge sèche sur le fil à 20 °C, une flaque disparaît au soleil. Dans les deux cas, l'eau liquide devient vapeur." },
          ],
        },
        {
          titre: "Le grand voyage de l'eau",
          blocs: [
            { t: "texte", md: "Sur Terre, l'eau change d'état sans arrêt et circule entre la mer, l'air et le sol. Le moteur de ce voyage, c'est le **Soleil** : son énergie fait évaporer l'eau des océans." },
            { t: "etapes", titre: "Le cycle de l'eau", cycle: true, items: [{ titre: "Évaporation", md: "Chauffée par le Soleil, l'eau des océans devient vapeur invisible." }, { titre: "Condensation", md: "En altitude, l'air est froid : la vapeur se condense en gouttelettes, qui forment les **nuages**." }, { titre: "Précipitations", md: "Les gouttes grossissent et tombent en pluie, ou en neige quand il fait très froid." }, { titre: "Ruissellement et infiltration", md: "L'eau coule vers les rivières ou s'enfonce dans le sol, puis rejoint la mer." }] },
            { t: "verifie", q: "Du linge mouillé sèche sur un fil à 20 °C. Quel changement d'état l'eau subit-elle ?", choix: ["Une fusion", "Une vaporisation (évaporation)", "Une condensation"], bonne: 1, explication: "L'eau liquide du linge devient vapeur : c'est une vaporisation, sous la forme lente de l'évaporation. Pas besoin d'atteindre 100 °C." },
          ],
        },
      ],
      bilan: "Fusion, solidification, vaporisation, condensation : l'eau change d'état à 0 °C et à 100 °C, avec un palier de température, sans jamais perdre un gramme de masse.",
    },
    "6e-physique-chimie-03-melanges-solutions": {
      accroche: "Verse une cuillère de sucre dans un verre d'eau et remue : le sucre disparaît. A-t-il vraiment disparu ? Goûte : l'eau est sucrée ! Et si tu pèses le verre avant et après, tu découvriras que pas un gramme ne s'est envolé.",
      objectifs: [
        "Distinguer un mélange homogène d'un mélange hétérogène",
        "Utiliser les mots soluble, solvant, soluté, solution, saturée, miscible",
        "Choisir la bonne technique pour séparer les constituants d'un mélange",
        "Comprendre qu'une eau limpide n'est pas forcément potable",
      ],
      sections: [
        {
          titre: "Presque tout est mélange",
          blocs: [
            { t: "definition", terme: "Mélange", md: "Une matière qui contient **plusieurs constituants**. L'eau du robinet (eau et sels minéraux), le jus d'orange, le lait et même l'air sont des mélanges. À l'inverse, l'**eau distillée** ne contient que de l'eau : ce n'est pas un mélange, c'est un **corps pur**." },
            { t: "tableau", titre: "Homogène ou hétérogène ?", entetes: ["Type de mélange", "À l'œil nu…", "Exemples"], lignes: [["**Homogène**", "on ne distingue **pas** ses constituants", "eau sucrée, eau salée, sirop dilué, air"], ["**Hétérogène**", "on **distingue** au moins deux constituants", "eau et sable, eau boueuse, eau et huile, jus d'orange avec pulpe"]] },
            { t: "graphique", type: "secteurs", titre: "L'air est un mélange de gaz", unite: "%", donnees: [{ label: "diazote", valeur: 78 }, { label: "dioxygène", valeur: 21 }, { label: "autres gaz", valeur: 1 }] },
            { t: "verifie", q: "L'eau et le sable forment un mélange :", choix: ["homogène", "hétérogène"], bonne: 1, explication: "On voit les grains de sable dans l'eau : on distingue les constituants à l'œil nu, le mélange est hétérogène." },
          ],
        },
        {
          titre: "Dissoudre : le sucre n'a pas disparu",
          blocs: [
            { t: "texte", md: "Quand le sucre se dissout, ses particules se dispersent entre les particules d'eau. Elles sont trop petites pour être vues, mais elles sont **toujours là** : le goût sucré le prouve. Le sucre est **soluble** dans l'eau. Le sable, lui, est **insoluble** : il reste visible au fond." },
            { t: "definition", terme: "Solvant, soluté, solution", md: "Le **solvant** est le liquide qui dissout (souvent l'eau). Le **soluté** est ce qu'on dissout (sucre, sel). Le mélange homogène obtenu est une **solution**." },
            { t: "propriete", titre: "Conservation de la masse", md: "Lors d'une dissolution, la masse se conserve : ==masse de la solution = masse du solvant + masse du soluté==." },
            { t: "exemple", titre: "Dissoudre 20 g de sel dans 200 g d'eau", md: "Le sel devient invisible, mais il est toujours dans l'eau. Masse de la solution : 200 g + 20 g = **220 g**." },
            { t: "definition", terme: "Solution saturée", md: "Une solution dans laquelle on **ne peut plus dissoudre** de soluté : le surplus reste au fond, même si on remue longtemps." },
            { t: "exemple", titre: "Jusqu'où peut-on saler ?", etapes: ["À 20 °C, on peut dissoudre au maximum 36 g de sel dans 100 g d'eau.", "250 g d'eau, c'est 2,5 fois plus que 100 g.", "On peut donc dissoudre 2,5 × 36 = **90 g** de sel au maximum."] },
          ],
        },
        {
          titre: "Liquides miscibles ou non miscibles",
          blocs: [
            { t: "texte", md: "Verse du sirop de menthe dans de l'eau : après avoir remué, on obtient un liquide vert uniforme. L'eau et le sirop sont **miscibles**. Verse maintenant de l'huile dans de l'eau : même en agitant fort, l'huile remonte et forme une **couche au-dessus**. L'eau et l'huile sont **non miscibles**." },
            { t: "attention", md: "Ne confonds pas *soluble* et *miscible*. On dit qu'un **solide** est soluble ou insoluble dans un liquide. On dit que **deux liquides** sont miscibles ou non miscibles." },
          ],
        },
        {
          titre: "Séparer les constituants d'un mélange",
          blocs: [
            { t: "texte", md: "Pour récupérer de l'eau claire à partir d'eau boueuse, on commence par la **décantation** : on laisse reposer, et les particules les plus lourdes tombent au fond. Puis on fait une **filtration** : le papier filtre retient les petites particules solides et laisse passer le liquide." },
            { t: "schema", titre: "Décantation et filtration", legende: "Le liquide qui traverse le filtre s'appelle le filtrat ; ce que le filtre retient s'appelle le résidu.", svg: `<svg viewBox="0 0 400 240"><text class="texte" x="90" y="40" text-anchor="middle">Décantation</text><rect class="aplat" x="40" y="100" width="100" height="90"/><rect class="aplat-fort" x="40" y="172" width="100" height="18"/><path class="trait" d="M40 70 L40 190 L140 190 L140 70" fill="none"/><line class="pointille" x1="40" y1="100" x2="140" y2="100"/><text class="texte-petit" x="90" y="140" text-anchor="middle">eau plus claire</text><text class="texte-petit" x="90" y="210" text-anchor="middle">dépôt au fond</text><text class="texte" x="290" y="40" text-anchor="middle">Filtration</text><path class="trait" d="M235 60 L345 60 L298 118 L298 150 L282 150 L282 118 Z" fill="none"/><path class="pointille" d="M246 66 L334 66 L290 116 Z" fill="none"/><path class="aplat-fort" d="M281 105 L299 105 L290 115 Z"/><line class="pointille" x1="290" y1="152" x2="290" y2="188"/><rect class="aplat" x="246" y="192" width="88" height="23"/><path class="trait" d="M245 160 L245 215 L335 215 L335 160" fill="none"/><line class="trait-fin" x1="320" y1="76" x2="352" y2="76"/><text class="texte-petit" x="356" y="80">filtre</text><line class="trait-fin" x1="300" y1="110" x2="352" y2="104"/><text class="texte-petit" x="356" y="108">résidu</text><line class="trait-fin" x1="330" y1="204" x2="350" y2="204"/><text class="texte-petit" x="354" y="208">filtrat</text><line class="trait-fin" x1="236" y1="136" x2="280" y2="136"/><text class="texte-petit" x="232" y="140" text-anchor="end">entonnoir</text></svg>` },
            { t: "etapes", titre: "Protocole de filtration", items: [{ titre: "Plier", md: "Plier un papier filtre en quatre et l'ouvrir en cône." }, { titre: "Installer", md: "Le placer dans un entonnoir posé sur un bécher." }, { titre: "Verser", md: "Verser doucement le mélange, sans dépasser le bord du filtre." }, { titre: "Attendre", md: "Laisser le liquide traverser goutte à goutte." }, { titre: "Observer", md: "Le filtrat est dans le bécher, le résidu reste dans le filtre." }] },
            { t: "tableau", titre: "Quelle technique choisir ?", entetes: ["Mélange", "Technique", "Pourquoi"], lignes: [["eau et terre", "**décantation** puis filtration", "la terre tombe au fond, puis le filtre retient le reste"], ["eau et sable", "**filtration**", "les grains sont retenus par le filtre"], ["eau salée", "**évaporation**", "le sel dissous traverse le filtre : il faut faire partir l'eau"], ["eau et huile", "**décantation** (ampoule à décanter)", "les deux liquides forment deux couches"]] },
            { t: "exemple", titre: "Récupérer le sel de l'eau de mer", md: "Filtrer ne sert à rien : le sel dissous traverse le filtre avec l'eau. On laisse l'eau **s'évaporer** au soleil ou on la chauffe : le sel reste au fond. C'est ainsi que travaillent les marais salants." },
            { t: "verifie", q: "On veut récupérer le sel dissous dans de l'eau de mer. Quelle technique choisir ?", choix: ["La décantation", "La filtration", "L'évaporation"], bonne: 2, explication: "Le sel dissous est invisible et passe à travers le filtre. Seule l'évaporation de l'eau permet de le récupérer." },
          ],
        },
        {
          titre: "Limpide ne veut pas dire potable",
          blocs: [
            { t: "definition", terme: "Eau potable", md: "Une eau que l'on peut **boire sans danger** pour la santé." },
            { t: "attention", md: "Une eau parfaitement limpide et sans odeur peut contenir des **microbes** ou des substances **dissoutes** invisibles et dangereuses. La filtration retire ce qu'on voit, pas forcément ce qu'on ne voit pas. Ne bois jamais l'eau d'une rivière, même claire !" },
            { t: "savais-tu", md: "Pour rendre l'eau du robinet potable, les usines de traitement enchaînent plusieurs étapes : décantation, filtration sur du sable, puis désinfection pour tuer les microbes. L'eau est contrôlée très souvent avant d'arriver chez toi." },
          ],
        },
      ],
      bilan: "Homogène ou hétérogène, un mélange se sépare : décantation et filtration pour ce qu'on voit, évaporation pour ce qui est dissous. Et la masse, elle, se conserve toujours.",
    },
    "6e-physique-chimie-04-masse-volume": {
      accroche: "Une bouteille d'un litre d'eau et une bouteille d'un litre d'huile ont exactement la même taille. Pose-les sur une balance : elles n'ont pas la même masse ! Prendre de la place et peser lourd, ce sont deux choses bien différentes.",
      objectifs: [
        "Mesurer une masse avec une balance, en g et en kg",
        "Mesurer un volume de liquide avec une éprouvette graduée et lire le ménisque",
        "Mesurer le volume d'un solide par déplacement d'eau",
        "Convertir entre L, mL, cm³ et dm³",
      ],
      sections: [
        {
          titre: "Masse et volume : deux grandeurs différentes",
          blocs: [
            { t: "definition", terme: "Masse", md: "Elle indique la **quantité de matière** d'un objet. On la mesure avec une **balance**. Unités : le **gramme** (g) et le **kilogramme** (kg)." },
            { t: "definition", terme: "Volume", md: "Il indique la **place occupée** par un objet. Unités : le **litre** (L), le **millilitre** (mL), le **centimètre cube** (cm³), le **décimètre cube** (dm³)." },
            { t: "graphique", type: "barres", titre: "Masse d'un litre de différents liquides", unite: "g", donnees: [{ label: "alcool", valeur: 790 }, { label: "huile", valeur: 920 }, { label: "eau", valeur: 1000 }, { label: "miel", valeur: 1400 }] },
            { t: "texte", md: "Même volume, masses différentes : **1 L d'eau a une masse de 1 kg**, mais 1 L d'huile ne pèse qu'environ 920 g. Dans l'huile, la matière est moins « tassée » que dans l'eau. C'est pour cela que l'huile flotte sur l'eau !" },
            { t: "attention", md: "Un objet plus gros n'est **pas toujours** plus lourd. Un gros ballon de plage gonflé pèse bien moins qu'une petite bille en acier. Le volume et la masse ne se mesurent pas avec le même instrument et ne s'expriment pas dans les mêmes unités." },
          ],
        },
        {
          titre: "Mesurer une masse avec une balance",
          blocs: [
            { t: "texte", md: "Avec une balance électronique, on pose l'objet sur le plateau et on lit la valeur affichée. Pour peser un **liquide**, impossible de le verser directement sur le plateau : on utilise un récipient, et on fait une soustraction." },
            { t: "exemple", titre: "La masse du lait", etapes: ["On pèse le bécher vide : 120 g.", "On le remplit de lait et on le pèse : 370 g.", "Masse du lait : 370 − 120 = **250 g**."] },
            { t: "astuce", md: "Beaucoup de balances ont une touche **« tare »** (ou « zéro ») : pose le récipient vide, appuie sur la touche, l'affichage revient à 0. Ajoute le liquide : la balance affiche directement sa masse." },
            { t: "verifie", q: "Un verre d'eau est posé sur une balance. On y ajoute un glaçon qui flotte. Que fait la valeur affichée ?", choix: ["Elle augmente", "Elle ne change pas, car le glaçon flotte", "Elle diminue"], bonne: 0, explication: "Le glaçon est de la matière : il a une masse, qu'il flotte ou non. La balance affiche donc la masse de l'eau, du verre et du glaçon." },
          ],
        },
        {
          titre: "Mesurer un volume de liquide",
          blocs: [
            { t: "texte", md: "Pour mesurer précisément un volume de liquide, on utilise une **éprouvette graduée**. Les verres doseurs de cuisine ou les béchers ne donnent qu'une valeur approximative. Près de la paroi, l'eau remonte un peu et forme une surface courbe : le **ménisque**. On lit toujours la graduation au niveau du **bas du ménisque**." },
            { t: "schema", titre: "Lire le volume dans une éprouvette graduée", legende: "Ici, une graduation vaut 2 mL. Le bas du ménisque est sur la deuxième graduation au-dessus de 60 : le volume est de 64 mL.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M170 78 Q200 98 230 78 L230 232 L170 232 Z"/><line class="trait" x1="170" y1="16" x2="170" y2="232"/><line class="trait" x1="230" y1="16" x2="230" y2="232"/><path class="trait" d="M170 78 Q200 98 230 78" fill="none"/><g class="trait-fin"><line x1="170" y1="40" x2="198" y2="40"/><line x1="170" y1="120" x2="198" y2="120"/><line x1="170" y1="200" x2="198" y2="200"/><line x1="170" y1="56" x2="184" y2="56"/><line x1="170" y1="72" x2="184" y2="72"/><line x1="170" y1="88" x2="184" y2="88"/><line x1="170" y1="104" x2="184" y2="104"/><line x1="170" y1="136" x2="184" y2="136"/><line x1="170" y1="152" x2="184" y2="152"/><line x1="170" y1="168" x2="184" y2="168"/><line x1="170" y1="184" x2="184" y2="184"/></g><text class="texte-petit" x="238" y="44">70 mL</text><text class="texte-petit" x="238" y="124">60 mL</text><text class="texte-petit" x="238" y="204">50 mL</text><path class="trait" d="M42 88 Q62 75 82 88 Q62 101 42 88 Z" fill="none"/><circle class="aplat-fort" cx="62" cy="88" r="5"/><line class="pointille" x1="86" y1="88" x2="200" y2="88"/><text class="texte-petit" x="62" y="120" text-anchor="middle">œil au niveau</text><text class="texte-petit" x="62" y="134" text-anchor="middle">du bas du ménisque</text><line class="trait-fin" x1="214" y1="86" x2="292" y2="80"/><text class="texte-petit" x="296" y="84">ménisque</text><text class="texte-main" x="320" y="160" text-anchor="middle">lecture : 64 mL</text></svg>` },
            { t: "etapes", titre: "Protocole : mesurer un volume d'eau", items: [{ titre: "Poser", md: "Poser l'éprouvette sur une table bien **horizontale**." }, { titre: "Remplir", md: "Verser l'eau, en finissant goutte à goutte avec une pipette." }, { titre: "Viser", md: "Placer l'œil **à la hauteur** de la surface du liquide." }, { titre: "Lire", md: "Lire la graduation au niveau du **bas du ménisque**." }, { titre: "Noter", md: "Écrire la valeur **avec son unité** (mL)." }] },
            { t: "attention", md: "Si tu regardes l'éprouvette d'en haut, tu lis une valeur trop grande ; d'en bas, une valeur trop petite. Et une éprouvette tenue à la main, penchée, fausse aussi la lecture." },
          ],
        },
        {
          titre: "Le volume d'un solide",
          blocs: [
            { t: "texte", md: "Comment mesurer le volume d'un caillou, qui n'a pas une forme simple ? On le plonge dans l'eau : il prend la place d'une partie de l'eau, qui monte. ==Le volume du solide est égal à la montée du niveau de l'eau.==" },
            { t: "exemple", titre: "Le volume d'un caillou", etapes: ["Avant : l'éprouvette contient 60 mL d'eau.", "On plonge doucement le caillou : le niveau monte à 84 mL.", "Volume du caillou : 84 − 60 = 24 mL.", "Comme 1 mL = 1 cm³, le caillou a un volume de **24 cm³**."] },
          ],
        },
        {
          titre: "Les unités et leurs conversions",
          blocs: [
            { t: "propriete", titre: "Les égalités à connaître", md: "**1 kg = 1 000 g**\n**1 L = 1 000 mL** et **1 L = 100 cL**\n**1 L = 1 dm³** et **1 mL = 1 cm³**" },
            { t: "tableau", titre: "Unités et conversions", entetes: ["Grandeur", "Unités", "Égalité utile", "Exemple de conversion"], lignes: [["Masse", "g, kg", "1 kg = 1 000 g", "2,5 kg = 2 500 g"], ["Volume", "L, cL, mL", "1 L = 1 000 mL", "3 L = 3 000 mL ; 33 cL = 330 mL"], ["Volume", "dm³, cm³", "1 L = 1 dm³ ; 1 mL = 1 cm³", "250 cm³ = 250 mL = 0,25 L"]] },
            { t: "astuce", md: "Pour comparer des volumes, mets-les **tous dans la même unité**. Qui est le plus grand entre 0,5 L, 450 mL et 60 cL ? En mL : 500 mL, 450 mL et 600 mL. Le gagnant est 60 cL." },
            { t: "liste", titre: "Quelques ordres de grandeur", items: ["une pomme : environ **150 g**", "un élève de 6e : environ **40 kg**", "une cuillère à soupe : environ **15 mL**", "une grande bouteille d'eau : **1,5 L**"] },
            { t: "verifie", q: "Combien vaut 250 cm³ en mL ?", choix: ["2,5 mL", "25 mL", "250 mL", "2 500 mL"], bonne: 2, explication: "1 cm³ = 1 mL : le nombre ne change pas. 250 cm³ = 250 mL." },
          ],
        },
      ],
      bilan: "La masse se mesure à la balance en grammes, le volume à l'éprouvette en millilitres, en lisant le bas du ménisque. Retiens : 1 L = 1 000 mL = 1 dm³ et 1 mL = 1 cm³.",
    },
    "6e-physique-chimie-05-materiaux-objets": {
      accroche: "Approche un aimant d'une canette de soda : rien ! Approche-le d'une boîte de conserve : clac, il colle. Les deux sont en métal… mais pas dans le même métal. Chaque matériau a ses propres super-pouvoirs.",
      objectifs: [
        "Classer les matériaux en grandes familles",
        "Relier les propriétés d'un matériau à l'usage d'un objet",
        "Savoir quels métaux sont attirés par un aimant",
        "Connaître l'origine des matériaux et l'intérêt du tri et du recyclage",
      ],
      sections: [
        {
          titre: "Un objet, des matériaux",
          blocs: [
            { t: "definition", terme: "Matériau", md: "La matière dans laquelle un **objet** est fabriqué. Une chaise est un objet ; elle peut être en bois, en plastique ou en métal : ce sont ses matériaux. Beaucoup d'objets associent **plusieurs** matériaux." },
            { t: "tableau", titre: "Les grandes familles de matériaux", entetes: ["Famille", "Exemples", "Origine (matière première)"], lignes: [["**Métaux**", "fer, acier, cuivre, aluminium", "minerais extraits du sol"], ["**Plastiques**", "bouteilles, jouets, tuyaux", "surtout le **pétrole**"], ["**Verres**", "vitres, bocaux, bouteilles", "surtout le **sable**"], ["**Céramiques**", "terre cuite, porcelaine, tuiles", "argile"], ["**Organiques**", "bois, papier, coton, laine, cuir", "êtres vivants : arbres, plantes, animaux"]] },
            { t: "verifie", q: "Lequel de ces matériaux est d'origine vivante (organique) ?", choix: ["Le verre", "L'aluminium", "La laine", "La porcelaine"], bonne: 2, explication: "La laine vient de la toison des moutons : elle est d'origine animale, donc organique. Le verre vient du sable, l'aluminium d'un minerai, la porcelaine de l'argile." },
          ],
        },
        {
          titre: "Des propriétés pour chaque usage",
          blocs: [
            { t: "texte", md: "On ne choisit pas un matériau au hasard : on choisit celui dont les **propriétés** conviennent à l'usage de l'objet. Un vêtement doit être souple, une vitre transparente, un imperméable… imperméable !" },
            { t: "liste", titre: "Les principales propriétés", items: ["**dur** ou mou, **rigide** ou **souple**, **cassant** (il se brise)", "léger ou lourd", "**transparent** (laisse passer la lumière) ou opaque", "**imperméable** (ne laisse pas passer l'eau)", "**conducteur** ou isolant de la chaleur et de l'électricité", "attiré ou non par un **aimant**"] },
            { t: "schema", titre: "Une casserole, deux matériaux", legende: "Le métal transmet la chaleur de la flamme aux aliments ; le manche, isolant thermique, reste froid sous la main.", svg: `<svg viewBox="0 0 400 220"><text class="texte" x="180" y="62" text-anchor="middle">corps en métal</text><text class="texte-petit" x="180" y="80" text-anchor="middle">conduit bien la chaleur</text><rect class="aplat" x="110" y="96" width="140" height="54"/><path class="trait" d="M104 96 L110 96 L110 150 L250 150 L250 96 L256 96" fill="none"/><rect class="aplat-papier" x="250" y="110" width="120" height="16" rx="8"/><rect class="trait" x="250" y="110" width="120" height="16" rx="8"/><text class="texte" x="310" y="152" text-anchor="middle">manche en bois</text><text class="texte-petit" x="310" y="170" text-anchor="middle">conduit mal la chaleur</text><g class="aplat-fort"><path d="M150 192 Q138 176 150 160 Q162 176 150 192 Z"/><path d="M180 192 Q168 174 180 156 Q192 174 180 192 Z"/><path d="M210 192 Q198 176 210 160 Q222 176 210 192 Z"/></g><path class="trait-fin" d="M150 140 L150 112" marker-end="url(#fl-p)"/><path class="trait-fin" d="M180 140 L180 112" marker-end="url(#fl-p)"/><path class="trait-fin" d="M210 140 L210 112" marker-end="url(#fl-p)"/><text class="texte-petit" x="180" y="210" text-anchor="middle">flamme</text></svg>` },
            { t: "exemple", titre: "Pourquoi une vitre en verre ?", md: "Le verre est **transparent** : il laisse passer la lumière. Il est aussi imperméable et dur. Son défaut : il est **cassant**, il se brise s'il tombe. On l'accepte pour une vitre, pas pour un verre de cantine destiné aux plus petits, souvent en plastique." },
            { t: "attention", md: "Souple ne veut pas dire fragile ! Un élastique ou une semelle en caoutchouc se tordent sans casser. C'est justement le verre, très **rigide**, qui est fragile." },
          ],
        },
        {
          titre: "Le test de l'aimant",
          blocs: [
            { t: "propriete", titre: "Métaux et aimant", md: "Seuls quelques métaux sont attirés par un aimant : le **fer** (et l'**acier**, fait surtout de fer), le **nickel** et le **cobalt**. L'**aluminium**, le **cuivre**, l'or ou l'argent **ne le sont pas**." },
            { t: "exemple", titre: "Démasquer une canette", md: "Une canette de soda n'est pas attirée par l'aimant : elle est sans doute en **aluminium**. Une boîte de conserve est attirée : elle est en **acier**. Les centres de tri utilisent ce test avec d'énormes aimants pour séparer les deux." },
            { t: "verifie", q: "Tous les métaux sont-ils attirés par un aimant ?", choix: ["Oui, c'est ce qui définit un métal", "Non, seulement le fer, le nickel et le cobalt (et l'acier)"], bonne: 1, explication: "L'aimant n'attire que quelques métaux. Le cuivre d'un fil électrique ou l'aluminium d'une canette restent indifférents." },
          ],
        },
        {
          titre: "Trier et recycler",
          blocs: [
            { t: "texte", md: "Les matières premières ne sont pas infinies : le pétrole et les minerais s'épuisent. **Recycler**, c'est fabriquer de nouveaux objets à partir d'objets usagés. Mais on ne recycle pas tout ensemble : il faut d'abord **trier par matériau**, car chacun se recycle avec une technique différente (on fond le verre, on broie le plastique…)." },
            { t: "etapes", titre: "La vie d'une bouteille en plastique recyclée", cycle: true, items: [{ titre: "Utilisation", md: "On boit l'eau de la bouteille." }, { titre: "Tri", md: "On la jette dans la poubelle de tri." }, { titre: "Collecte et centre de tri", md: "Elle est séparée des autres matériaux." }, { titre: "Broyage", md: "Le plastique est lavé et broyé en paillettes." }, { titre: "Nouvel objet", md: "Les paillettes sont fondues pour fabriquer une nouvelle bouteille, un pull polaire…" }] },
            { t: "exemple", titre: "L'aluminium, champion du recyclage", md: "Recycler l'aluminium économise environ **95 %** de l'énergie nécessaire pour le produire à partir du minerai. Si une production neuve demande 100 unités d'énergie, le recyclage n'en demande que 100 − 95 = **5 unités**." },
            { t: "savais-tu", md: "Le verre se recycle à l'infini sans perdre ses qualités : une bouteille peut redevenir une bouteille, encore et encore." },
          ],
        },
      ],
      bilan: "Chaque objet est fait de matériaux choisis pour leurs propriétés : métal conducteur, verre transparent, bois isolant. Trier et recycler, c'est économiser la matière et l'énergie de la planète.",
    },
    "6e-physique-chimie-06-mouvement": {
      accroche: "Tu es assis dans un train à l'arrêt en gare. Le train d'à côté démarre… et pendant une seconde, tu as l'impression que c'est le tien qui avance ! Qui bouge vraiment ? Tout dépend de ce que l'on regarde.",
      objectifs: [
        "Décrire une trajectoire : rectiligne, circulaire ou curviligne",
        "Reconnaître un mouvement uniforme, accéléré ou ralenti",
        "Calculer une vitesse avec vitesse = distance ÷ durée et convertir m/s en km/h",
        "Comprendre que le mouvement dépend de l'objet de référence",
      ],
      sections: [
        {
          titre: "La trajectoire : le chemin suivi",
          blocs: [
            { t: "definition", terme: "Trajectoire", md: "La ligne formée par toutes les positions successives d'un objet en mouvement. Imagine le trait que laisserait un objet couvert de peinture." },
            { t: "schema", titre: "Trois formes de trajectoires", legende: "Les points marquent la position de l'objet à intervalles de temps réguliers.", svg: `<svg viewBox="0 0 400 230"><line class="pointille" x1="15" y1="110" x2="125" y2="110"/><g class="aplat-fort"><circle cx="20" cy="110" r="4"/><circle cx="40" cy="110" r="4"/><circle cx="60" cy="110" r="4"/><circle cx="80" cy="110" r="4"/><circle cx="100" cy="110" r="4"/><circle cx="120" cy="110" r="4"/></g><path class="trait-fin" d="M40 130 L100 130" marker-end="url(#fl)"/><circle class="pointille" cx="200" cy="100" r="45" fill="none"/><g class="aplat-fort"><circle cx="245" cy="100" r="4"/><circle cx="231.8" cy="131.8" r="4"/><circle cx="200" cy="145" r="4"/><circle cx="168.2" cy="131.8" r="4"/><circle cx="155" cy="100" r="4"/><circle cx="168.2" cy="68.2" r="4"/><circle cx="200" cy="55" r="4"/><circle cx="231.8" cy="68.2" r="4"/></g><circle class="trait-fin" cx="200" cy="100" r="2"/><path class="pointille" d="M285 170 Q335 10 385 170" fill="none"/><g class="aplat-fort"><circle cx="285" cy="170" r="4"/><circle cx="297.5" cy="135" r="4"/><circle cx="310" cy="110" r="4"/><circle cx="322.5" cy="95" r="4"/><circle cx="335" cy="90" r="4"/><circle cx="347.5" cy="95" r="4"/><circle cx="360" cy="110" r="4"/><circle cx="372.5" cy="135" r="4"/><circle cx="385" cy="170" r="4"/></g><text class="texte" x="70" y="200" text-anchor="middle">rectiligne</text><text class="texte" x="200" y="200" text-anchor="middle">circulaire</text><text class="texte" x="335" y="200" text-anchor="middle">curviligne</text><text class="texte-petit" x="70" y="218" text-anchor="middle">train en ligne droite</text><text class="texte-petit" x="200" y="218" text-anchor="middle">nacelle de grande roue</text><text class="texte-petit" x="335" y="218" text-anchor="middle">ballon lancé</text></svg>` },
            { t: "texte", md: "Une trajectoire **rectiligne** est une ligne droite. Une trajectoire **circulaire** est un cercle : c'est le cas d'une nacelle de grande roue, ou de la pointe d'une aiguille de montre. Toutes les autres courbes sont dites **curvilignes** : le vol d'un ballon tiré au but, la route d'une voiture dans un virage de montagne." },
            { t: "verifie", q: "Quelle est la trajectoire d'une nacelle de grande roue ?", choix: ["Rectiligne", "Circulaire", "Curviligne quelconque"], bonne: 1, explication: "La nacelle tourne autour de l'axe de la roue en restant toujours à la même distance de lui : elle décrit un cercle." },
          ],
        },
        {
          titre: "Plus vite, moins vite : la chronophotographie",
          blocs: [
            { t: "texte", md: "Pour étudier un mouvement, on photographie l'objet à **intervalles de temps égaux**, par exemple toutes les 0,1 s, sur une même image. C'est une **chronophotographie**. Plus deux positions sont écartées, plus l'objet a parcouru de distance pendant le même temps : il allait plus vite." },
            { t: "schema", titre: "Lire la vitesse sur une chronophotographie", legende: "Même durée entre deux points : l'écart entre les points raconte la vitesse.", svg: `<svg viewBox="0 0 400 220"><text class="texte-petit" x="215" y="18" text-anchor="middle">sens du mouvement</text><path class="trait-fin" d="M170 26 L260 26" marker-end="url(#fl)"/><text class="texte" x="10" y="60">uniforme</text><g class="aplat-fort"><circle cx="110" cy="56" r="5"/><circle cx="150" cy="56" r="5"/><circle cx="190" cy="56" r="5"/><circle cx="230" cy="56" r="5"/><circle cx="270" cy="56" r="5"/><circle cx="310" cy="56" r="5"/><circle cx="350" cy="56" r="5"/></g><text class="texte-petit" x="110" y="80">écarts égaux</text><text class="texte" x="10" y="122">accéléré</text><g class="aplat-fort"><circle cx="110" cy="118" r="5"/><circle cx="120" cy="118" r="5"/><circle cx="140" cy="118" r="5"/><circle cx="170" cy="118" r="5"/><circle cx="210" cy="118" r="5"/><circle cx="260" cy="118" r="5"/><circle cx="320" cy="118" r="5"/></g><text class="texte-petit" x="110" y="142">écarts qui grandissent</text><text class="texte" x="10" y="184">ralenti</text><g class="aplat-fort"><circle cx="110" cy="180" r="5"/><circle cx="170" cy="180" r="5"/><circle cx="220" cy="180" r="5"/><circle cx="260" cy="180" r="5"/><circle cx="290" cy="180" r="5"/><circle cx="310" cy="180" r="5"/><circle cx="320" cy="180" r="5"/></g><text class="texte-petit" x="110" y="204">écarts qui rétrécissent</text></svg>` },
            { t: "definition", terme: "Uniforme, accéléré, ralenti", md: "Un mouvement est **uniforme** si la vitesse **ne change pas**, **accéléré** si elle **augmente**, **ralenti** si elle **diminue**." },
            { t: "exemple", titre: "Une balle lancée vers le haut", md: "Pendant qu'elle monte, la balle va de moins en moins vite, jusqu'à s'arrêter un instant tout en haut : son mouvement est **ralenti**. En redescendant, elle prend de la vitesse : il devient **accéléré**." },
          ],
        },
        {
          titre: "Calculer une vitesse",
          blocs: [
            { t: "propriete", titre: "La relation de la vitesse", md: "==vitesse = distance ÷ durée==\n\nAvec une distance en mètres (m) et une durée en secondes (s), la vitesse est en **m/s**. Avec des kilomètres (km) et des heures (h), elle est en **km/h**." },
            { t: "exemple", titre: "Trois calculs", etapes: ["Un coureur parcourt 100 m en 10 s : 100 ÷ 10 = **10 m/s**.", "Un train parcourt 300 km en 2 h : 300 ÷ 2 = **150 km/h**.", "Une voiture roule à 90 km/h pendant 3 h. Elle parcourt 90 km chaque heure, donc 90 × 3 = **270 km** : distance = vitesse × durée."] },
            { t: "texte", md: "Pourquoi 1 m/s = 3,6 km/h ? Si tu avances de 1 m chaque seconde, en une heure (3 600 s) tu parcours 3 600 m, c'est-à-dire 3,6 km. Pour passer des m/s aux km/h, on **multiplie par 3,6**." },
            { t: "exemple", titre: "Le guépard et le son", etapes: ["Un guépard court à 30 m/s : 30 × 3,6 = **108 km/h**.", "Le son parcourt 340 m chaque seconde dans l'air. Pour 1 700 m, il lui faut 1 700 ÷ 340 = **5 s**. C'est pour cela que le tonnerre arrive après l'éclair !"] },
            { t: "verifie", q: "Un cycliste parcourt 30 km en 2 h. Quelle est sa vitesse moyenne ?", choix: ["15 km/h", "32 km/h", "60 km/h"], bonne: 0, explication: "vitesse = distance ÷ durée = 30 ÷ 2 = 15 km/h. Multiplier (60) donnerait une vitesse absurde pour cette distance." },
          ],
        },
        {
          titre: "Tout dépend de l'observateur",
          blocs: [
            { t: "texte", md: "Assis dans un bus qui roule, tu es **immobile par rapport à ton siège** : la distance entre toi et lui ne change pas. Mais tu es **en mouvement par rapport à la route** et aux arbres qui défilent. Un mouvement se décrit toujours **par rapport à un objet de référence**." },
            { t: "exemple", titre: "Deux cyclistes côte à côte", md: "Ils roulent à la même vitesse. Par rapport à la route, tous deux avancent. Mais l'un **par rapport à l'autre**, ils sont **immobiles** : la distance qui les sépare reste la même." },
            { t: "attention", md: "Un passager qui marche vers l'avant dans un train roulant à 100 km/h va **plus vite que 100 km/h** par rapport au quai : sa vitesse de marche s'ajoute à celle du train. Mais par rapport au wagon, il ne va qu'à la vitesse d'un piéton." },
          ],
        },
        {
          titre: "Mesurer une vitesse en vrai",
          blocs: [
            { t: "etapes", titre: "Protocole : la vitesse d'un camarade qui court", items: [{ titre: "Mesurer la distance", md: "Tracer un départ et une arrivée, mesurer la distance au **décamètre** : par exemple 50 m." }, { titre: "Préparer le chrono", md: "Le chronométreur se place à l'arrivée, chronomètre à zéro." }, { titre: "Lancer", md: "Au signal du départ, il déclenche le **chronomètre**." }, { titre: "Arrêter", md: "Il l'arrête quand le coureur franchit la ligne : par exemple 10 s." }, { titre: "Calculer", md: "vitesse = 50 ÷ 10 = **5 m/s**, soit 5 × 3,6 = 18 km/h." }] },
          ],
        },
      ],
      bilan: "Une trajectoire peut être droite, circulaire ou courbe ; une vitesse se calcule par distance ÷ durée ; et un mouvement n'a de sens que par rapport à un objet de référence.",
    },
    "6e-physique-chimie-07-sources-formes-energie": {
      accroche: "Une barre de céréales, un litre d'essence et une pile de télécommande ont un point commun : ils renferment de l'énergie, cachée sous forme chimique. Ton corps, une voiture ou une télécommande savent la libérer pour bouger, chauffer ou éclairer.",
      objectifs: [
        "Distinguer les sources d'énergie renouvelables et non renouvelables",
        "Reconnaître les principales formes d'énergie",
        "Décrire une conversion d'énergie et une chaîne d'énergie simple",
        "Savoir que l'électricité n'est pas une source d'énergie",
      ],
      sections: [
        {
          titre: "L'énergie, pour quoi faire ?",
          blocs: [
            { t: "texte", md: "Chauffer une maison, éclairer une rue, faire avancer un vélo, faire fonctionner un ordinateur : rien de tout cela n'est possible sans **énergie**. On ne la voit pas, mais on voit ses effets : un mouvement, de la lumière, une élévation de température." },
            { t: "definition", terme: "Source d'énergie", md: "Une ressource de la nature dans laquelle on puise de l'énergie : le Soleil, le vent, l'eau qui coule, le bois, le pétrole, le charbon, le gaz naturel, l'uranium, la chaleur de la Terre." },
          ],
        },
        {
          titre: "Renouvelables ou non renouvelables ?",
          blocs: [
            { t: "tableau", titre: "Deux grandes catégories de sources", entetes: ["", "Renouvelables", "Non renouvelables"], lignes: [["Définition", "elles se reconstituent **à l'échelle d'une vie humaine**", "elles ont mis **des millions d'années** à se former et s'épuisent"], ["Exemples", "Soleil, vent, eau des rivières, chaleur de la Terre, bois", "pétrole, charbon, gaz naturel, uranium"], ["Installations", "panneaux solaires, éoliennes, barrages", "centrales thermiques, centrales nucléaires, moteurs"]] },
            { t: "attention", md: "Le bois n'est renouvelable que si l'on **replante** autant d'arbres qu'on en coupe. Et l'uranium des centrales nucléaires, extrait du sol, est **non renouvelable** : ses réserves finiront par s'épuiser." },
            { t: "attention", md: "L'**électricité n'est pas une source d'énergie** : on ne la trouve pas toute prête dans la nature. Elle est **produite** dans des centrales, à partir d'une vraie source (eau d'un barrage, vent, uranium, gaz…)." },
            { t: "verifie", q: "Laquelle de ces sources d'énergie est renouvelable ?", choix: ["Le charbon", "Le vent", "Le gaz naturel", "Le pétrole"], bonne: 1, explication: "Le vent souffle sans cesse, il ne s'épuise pas. Charbon, gaz et pétrole se sont formés en des millions d'années : ils sont non renouvelables." },
          ],
        },
        {
          titre: "Les formes de l'énergie",
          blocs: [
            { t: "liste", titre: "Cinq formes à reconnaître", items: ["**thermique** : la chaleur (radiateur, flamme)", "**lumineuse** : la lumière (Soleil, lampe)", "**électrique** : transportée par le courant (prise, pile en fonctionnement)", "**mécanique** : liée au mouvement (ballon qui roule, vent, eau qui coule)", "**chimique** : stockée dans la matière (aliments, carburants, piles, bois)"] },
            { t: "verifie", q: "Quelle forme d'énergie possède un ballon qui roule ?", choix: ["Chimique", "Mécanique", "Lumineuse"], bonne: 1, explication: "Tout objet en mouvement possède de l'énergie mécanique. Plus il va vite, plus il en a." },
          ],
        },
        {
          titre: "L'énergie se convertit",
          blocs: [
            { t: "propriete", titre: "Conversion de l'énergie", md: "L'énergie ne disparaît jamais et ne se crée pas : elle se **convertit** d'une forme à une autre grâce à un **convertisseur**. Une partie est souvent « perdue », le plus souvent sous forme de **chaleur**." },
            { t: "schema", titre: "La chaîne d'énergie d'une lampe de poche", legende: "La pile stocke de l'énergie chimique et fournit de l'énergie électrique ; la lampe la convertit en lumière (utile) et en chaleur (perdue).", svg: `<svg viewBox="0 0 400 230"><rect class="aplat" x="10" y="90" width="90" height="50" rx="8"/><rect class="trait" x="10" y="90" width="90" height="50" rx="8"/><text class="texte" x="55" y="112" text-anchor="middle">Pile</text><text class="texte-petit" x="55" y="128" text-anchor="middle">chimique</text><text class="texte-petit" x="55" y="160" text-anchor="middle">réservoir</text><path class="trait" d="M102 115 L156 115" marker-end="url(#fl-p)"/><text class="texte-petit" x="130" y="106" text-anchor="middle">électrique</text><rect class="aplat" x="160" y="90" width="100" height="50" rx="8"/><rect class="trait" x="160" y="90" width="100" height="50" rx="8"/><text class="texte" x="210" y="112" text-anchor="middle">Lampe</text><text class="texte-petit" x="210" y="128" text-anchor="middle">convertisseur</text><path class="trait" d="M262 104 L296 72" marker-end="url(#fl-p)"/><path class="trait-fin" d="M262 126 L296 158" marker-end="url(#fl)"/><rect class="aplat-fort" x="300" y="40" width="90" height="44" rx="8"/><rect class="trait" x="300" y="40" width="90" height="44" rx="8"/><text class="texte" x="345" y="60" text-anchor="middle">lumineuse</text><text class="texte-petit" x="345" y="76" text-anchor="middle">utile</text><rect class="aplat-papier" x="300" y="146" width="90" height="44" rx="8"/><rect class="pointille" x="300" y="146" width="90" height="44" rx="8"/><text class="texte" x="345" y="166" text-anchor="middle">thermique</text><text class="texte-petit" x="345" y="182" text-anchor="middle">perdue</text></svg>` },
            { t: "graphique", type: "secteurs", titre: "Ampoule à incandescence : que devient l'énergie électrique reçue ?", unite: "%", donnees: [{ label: "lumière", valeur: 10 }, { label: "chaleur", valeur: 90 }] },
            { t: "texte", md: "Une vieille ampoule à incandescence ne convertit que **10 %** de l'énergie électrique reçue en lumière : les 100 − 10 = **90 %** restants partent en chaleur. Une lampe LED éclaire autant en chauffant beaucoup moins. De même, une voiture à essence convertit l'énergie chimique du carburant surtout en **chaleur**, et seulement en partie en mouvement." },
            { t: "exemple", titre: "Trois convertisseurs à connaître", etapes: ["**Éolienne** : énergie mécanique du vent → énergie électrique.", "**Panneau solaire photovoltaïque** : énergie lumineuse → énergie électrique.", "**Moteur électrique** : énergie électrique → énergie mécanique (et un peu de chaleur)."] },
          ],
        },
        {
          titre: "Du barrage à ta maison",
          blocs: [
            { t: "etapes", titre: "Chaîne d'énergie d'une centrale hydroélectrique", items: [{ titre: "Source", md: "L'eau retenue derrière le **barrage** (source renouvelable)." }, { titre: "Chute", md: "L'eau descend dans une conduite : elle acquiert de l'énergie mécanique." }, { titre: "Turbine", md: "L'eau fait tourner une **turbine**." }, { titre: "Alternateur", md: "La turbine entraîne un **alternateur** qui produit de l'électricité." }, { titre: "Transport", md: "Les **lignes électriques** acheminent le courant." }, { titre: "Maison", md: "Lampes, four, ordinateur utilisent l'énergie électrique." }] },
            { t: "verifie", q: "Dans une chaîne d'énergie, à quoi sert le convertisseur ?", choix: ["À stocker l'énergie", "À transformer une forme d'énergie en une autre", "À détruire l'énergie inutile"], bonne: 1, explication: "Le convertisseur (lampe, moteur, éolienne…) reçoit une forme d'énergie et en fournit une autre. L'énergie n'est jamais détruite." },
          ],
        },
      ],
      bilan: "Le Soleil, le vent et l'eau se renouvellent ; le pétrole et l'uranium s'épuisent. L'énergie ne disparaît jamais : elle passe d'une forme à une autre, avec souvent de la chaleur perdue en chemin.",
    },
    "6e-physique-chimie-08-electricite-economies-energie": {
      accroche: "Avec une pile, une petite lampe et un seul fil, impossible d'allumer quoi que ce soit, même en essayant dans tous les sens. Ajoute un deuxième fil : la lampe s'allume aussitôt ! Le courant électrique a besoin d'un chemin qui fait une boucle complète.",
      objectifs: [
        "Réaliser et schématiser un circuit électrique simple avec les symboles normalisés",
        "Expliquer le rôle de l'interrupteur : circuit ouvert ou fermé",
        "Distinguer conducteurs et isolants et respecter les règles de sécurité",
        "Identifier des gestes pour économiser l'énergie",
      ],
      sections: [
        {
          titre: "Le circuit : une boucle fermée",
          blocs: [
            { t: "definition", terme: "Circuit électrique simple", md: "Un **générateur** (la pile, qui fournit l'énergie électrique), un **récepteur** (lampe, moteur, qui l'utilise) et des **fils de connexion**, reliés en **une seule boucle fermée**." },
            { t: "schema", titre: "Schéma normalisé d'un circuit pile, lampe, interrupteur", legende: "Interrupteur ouvert : la boucle est coupée, le courant ne circule pas, la lampe est éteinte.", svg: `<svg viewBox="0 0 400 240"><path class="trait" d="M60 114 L60 50 L186 50" fill="none"/><path class="trait" d="M214 50 L340 50 L340 190 L220 190" fill="none"/><path class="trait" d="M180 190 L60 190 L60 126" fill="none"/><line class="trait" x1="38" y1="114" x2="82" y2="114"/><line class="trait" x1="50" y1="126" x2="70" y2="126" stroke-width="5"/><text class="texte" x="92" y="112">+</text><text class="texte" x="80" y="134">−</text><text class="texte" x="30" y="124" text-anchor="end">pile</text><circle class="aplat-papier" cx="200" cy="50" r="14"/><circle class="trait" cx="200" cy="50" r="14" fill="none"/><line class="trait" x1="190" y1="40" x2="210" y2="60"/><line class="trait" x1="210" y1="40" x2="190" y2="60"/><text class="texte" x="200" y="26" text-anchor="middle">lampe</text><circle class="trait" cx="180" cy="190" r="3"/><circle class="trait" cx="220" cy="190" r="3"/><line class="trait" x1="181" y1="188" x2="214" y2="168"/><text class="texte" x="200" y="218" text-anchor="middle">interrupteur ouvert</text><text class="texte-petit" x="355" y="124">fil</text></svg>` },
            { t: "texte", md: "Une petite lampe a **deux bornes** : le **culot** (le pas de vis métallique sur le côté) et le **plot** (la petite pastille tout en bas). Elle ne brille que si chaque borne est reliée à une borne différente de la pile. Le courant sort par une borne de la pile, traverse la lampe et revient par l'autre borne." },
            { t: "exemple", titre: "La lampe reliée par un seul fil", md: "La lampe est reliée à la pile par un seul fil et ne brille pas : il **manque le deuxième fil** pour fermer la boucle. Le courant n'a pas de chemin de retour." },
            { t: "etapes", titre: "Allumer une lampe avec une pile et deux fils", items: [{ titre: "Fil 1", md: "Relier une borne de la pile au **plot** de la lampe." }, { titre: "Fil 2", md: "Relier l'autre borne de la pile au **culot**." }, { titre: "Vérifier", md: "Toutes les connexions doivent être bien serrées." }, { titre: "Observer", md: "La boucle est fermée : la lampe brille." }] },
          ],
        },
        {
          titre: "L'interrupteur : ouvrir ou fermer le chemin",
          blocs: [
            { t: "texte", md: "L'**interrupteur** permet d'ouvrir ou de fermer le circuit sans débrancher les fils. **Circuit ouvert** : la boucle est coupée, le courant ne passe plus, la lampe est **éteinte**. **Circuit fermé** : la boucle est complète, la lampe **brille**." },
            { t: "astuce", md: "Attention au vocabulaire, il est trompeur ! Un circuit **ouvert** fait penser à une porte ouverte où l'on passe… mais ici, c'est le contraire : un circuit ouvert est un chemin **coupé**, comme un pont levé." },
            { t: "verifie", q: "On ouvre l'interrupteur d'un circuit pile-lampe. Que se passe-t-il ?", choix: ["La lampe brille plus fort", "La lampe s'éteint", "Rien ne change"], bonne: 1, explication: "Ouvrir l'interrupteur coupe la boucle : le courant ne circule plus et la lampe s'éteint." },
          ],
        },
        {
          titre: "Conducteurs et isolants",
          blocs: [
            { t: "texte", md: "Pour tester un matériau, on l'insère dans un circuit à la place d'un morceau de fil. Si la lampe brille, le matériau laisse passer le courant : c'est un **conducteur**. Sinon, c'est un **isolant**. C'est pourquoi les fils électriques sont en **cuivre** (conducteur) entouré de **plastique** (isolant)." },
            { t: "tableau", titre: "Conducteurs et isolants", entetes: ["Conducteurs (laissent passer le courant)", "Isolants (ne le laissent pas passer)"], lignes: [["métaux : cuivre, fer, aluminium", "plastique"], ["corps humain", "verre"], ["eau du robinet", "bois sec"], ["mine de crayon (graphite)", "caoutchouc, air"]] },
            { t: "attention", md: "L'eau du robinet et le corps humain sont **conducteurs**. Un appareil branché sur le secteur qui tombe dans l'eau peut faire passer le courant à travers ton corps : c'est l'**électrocution**." },
          ],
        },
        {
          titre: "Électricité et sécurité",
          blocs: [
            { t: "propriete", titre: "Règles de sécurité", md: "Le courant du **secteur (230 V)** est **dangereux**, parfois mortel :\n- jamais d'appareil électrique près de l'eau (baignoire, évier) ;\n- jamais de doigt ni d'objet dans une prise ;\n- jamais toucher un fil dénudé ni tirer sur un câble.\n\nUne **pile de 4,5 V**, utilisée en classe, ne présente pas ce danger." },
            { t: "verifie", q: "Pourquoi ne faut-il jamais utiliser un sèche-cheveux près d'une baignoire pleine ?", choix: ["L'eau pourrait abîmer le plastique", "L'eau et le corps sont conducteurs : risque d'électrocution", "Le sèche-cheveux ferait bouillir l'eau"], bonne: 1, explication: "S'il tombe dans l'eau, le courant du secteur traverse l'eau puis le corps, qui sont conducteurs : c'est l'électrocution." },
          ],
        },
        {
          titre: "Économiser l'énergie",
          blocs: [
            { t: "texte", md: "Produire de l'électricité ou chauffer une maison consomme des ressources, souvent non renouvelables, et rejette des gaz qui réchauffent le climat. Économiser l'énergie, c'est préserver la planète… et alléger la facture." },
            { t: "liste", titre: "Des éco-gestes simples", items: ["éteindre la lumière en quittant une pièce", "débrancher les chargeurs et éteindre les appareils en veille", "baisser le chauffage de 1 °C", "choisir des lampes **LED**", "préférer la marche, le vélo ou les transports en commun"] },
            { t: "graphique", type: "barres", titre: "Puissance de lampes qui éclairent autant (environ)", unite: "W", donnees: [{ label: "incandescence", valeur: 60 }, { label: "halogène", valeur: 42 }, { label: "fluocompacte", valeur: 12 }, { label: "LED", valeur: 8 }] },
            { t: "exemple", titre: "Un degré de moins", md: "Baisser le chauffage de 1 °C fait économiser environ **7 %** d'énergie. Pour une facture de chauffage de 1 000 €, on économise 7 % de 1 000 €, soit 1 000 × 7 ÷ 100 = **70 €** par an." },
          ],
        },
      ],
      bilan: "Pas de boucle fermée, pas de courant ! Les métaux, l'eau et le corps conduisent ; le plastique et le verre isolent. Et le secteur ne se touche jamais près de l'eau.",
    },
    "6e-physique-chimie-09-signal-information": {
      accroche: "Au XIXe siècle, on envoyait des messages d'un bout à l'autre de l'océan avec seulement deux sortes de signaux : des impulsions courtes et longues dans un câble. Aujourd'hui, ton téléphone fait la même chose, mais avec des 0 et des 1, des milliards de fois par seconde.",
      objectifs: [
        "Identifier la nature d'un signal (lumineux, sonore, électrique, radio) et l'information qu'il transporte",
        "Coder une information en binaire et compter les codes possibles avec 1, 2 ou 3 bits",
        "Décrire une chaîne de transmission : émetteur, signal, récepteur, capteur",
      ],
      sections: [
        {
          titre: "Signal et information : ne pas confondre",
          blocs: [
            { t: "definition", terme: "Signal", md: "Un **phénomène physique** (lumière, son, courant, onde radio) qui **transporte une information**. Le feu rouge est un signal lumineux ; l'information qu'il porte est : « arrête-toi »." },
            { t: "tableau", titre: "Les types de signaux", entetes: ["Signal", "Exemples", "Information transportée"], lignes: [["**lumineux**", "feu tricolore, phare, écran", "passer ou s'arrêter, danger"], ["**sonore**", "sonnerie, sirène, voix", "fin du cours, alerte"], ["**électrique**", "courant dans un câble", "son du micro, données"], ["**radio**", "téléphone portable, wifi, talkie-walkie", "appel, message, vidéo"]] },
            { t: "attention", md: "Le signal et l'information ne sont **pas la même chose**. La sonnerie du collège est le *signal* (un son) ; l'*information*, c'est « le cours est fini ». Un même signal peut d'ailleurs porter des informations différentes selon le code convenu." },
            { t: "verifie", q: "La sonnerie du collège envoie aux élèves un signal :", choix: ["lumineux", "sonore", "radio"], bonne: 1, explication: "La sonnerie produit un son qui se propage dans l'air jusqu'à tes oreilles : c'est un signal sonore." },
          ],
        },
        {
          titre: "Coder avec deux états : le binaire",
          blocs: [
            { t: "texte", md: "Une lampe peut être allumée ou éteinte, un courant peut passer ou non. Avec ces **deux états**, on peut tout coder ! On note **1** pour « allumé » et **0** pour « éteint » : c'est le **codage binaire**." },
            { t: "definition", terme: "Bit", md: "Un chiffre binaire : **0** ou **1**. C'est la plus petite quantité d'information." },
            { t: "schema", titre: "Un message lumineux codé en binaire", legende: "Allumée = 1, éteinte = 0 : ces quatre lampes codent le message 1011, écrit sur 4 bits.", svg: `<svg viewBox="0 0 400 210"><g class="trait-fin"><line x1="80" y1="48" x2="80" y2="38"/><line x1="57" y1="57" x2="50" y2="50"/><line x1="103" y1="57" x2="110" y2="50"/><line x1="240" y1="48" x2="240" y2="38"/><line x1="217" y1="57" x2="210" y2="50"/><line x1="263" y1="57" x2="270" y2="50"/><line x1="320" y1="48" x2="320" y2="38"/><line x1="297" y1="57" x2="290" y2="50"/><line x1="343" y1="57" x2="350" y2="50"/></g><circle class="aplat-fort" cx="80" cy="80" r="26"/><circle class="aplat-papier" cx="160" cy="80" r="26"/><circle class="aplat-fort" cx="240" cy="80" r="26"/><circle class="aplat-fort" cx="320" cy="80" r="26"/><g class="trait" fill="none"><circle cx="80" cy="80" r="26"/><circle cx="160" cy="80" r="26"/><circle cx="240" cy="80" r="26"/><circle cx="320" cy="80" r="26"/><rect x="70" y="106" width="20" height="12"/><rect x="150" y="106" width="20" height="12"/><rect x="230" y="106" width="20" height="12"/><rect x="310" y="106" width="20" height="12"/></g><text class="texte-petit" x="80" y="140" text-anchor="middle">allumée</text><text class="texte-petit" x="160" y="140" text-anchor="middle">éteinte</text><text class="texte-petit" x="240" y="140" text-anchor="middle">allumée</text><text class="texte-petit" x="320" y="140" text-anchor="middle">allumée</text><text class="texte-main" x="80" y="172" text-anchor="middle">1</text><text class="texte-main" x="160" y="172" text-anchor="middle">0</text><text class="texte-main" x="240" y="172" text-anchor="middle">1</text><text class="texte-main" x="320" y="172" text-anchor="middle">1</text><text class="texte" x="200" y="200" text-anchor="middle">message : 1011</text></svg>` },
            { t: "tableau", titre: "Avec 2 bits, 4 codes possibles", entetes: ["Code", "Exemple d'information convenue"], lignes: [["00", "tout va bien"], ["01", "j'arrive"], ["10", "attends-moi"], ["11", "danger !"]] },
            { t: "graphique", type: "barres", titre: "Nombre d'informations différentes selon le nombre de bits", donnees: [{ label: "1 bit", valeur: 2 }, { label: "2 bits", valeur: 4 }, { label: "3 bits", valeur: 8 }, { label: "4 bits", valeur: 16 }] },
            { t: "propriete", titre: "Compter les codes", md: "Chaque bit ajouté **double** le nombre de codes possibles : 1 bit → **2** codes, 2 bits → **4**, 3 bits → 2 × 2 × 2 = **8**." },
            { t: "exemple", titre: "Lire un message clignotant", md: "Une lampe s'allume, s'éteint, s'éteint encore, puis s'allume. En binaire, on écrit **1 0 0 1**." },
            { t: "savais-tu", md: "Les ordinateurs utilisent le binaire parce que leurs composants électroniques n'ont facilement que **deux états** : le courant passe ou ne passe pas. C'est simple, rapide et fiable." },
          ],
        },
        {
          titre: "Émetteur, récepteur et capteurs",
          blocs: [
            { t: "texte", md: "Pour transmettre une information, il faut un **émetteur** qui envoie le signal et un **récepteur** qui le reçoit et le transforme en information utilisable. Entre les deux, le signal voyage dans l'air, dans un câble ou dans l'espace." },
            { t: "etapes", titre: "Chaîne de transmission d'un message par talkie-walkie", items: [{ titre: "Message", md: "Tu parles : ta voix est un signal sonore." }, { titre: "Micro", md: "Le micro transforme le son en signal électrique." }, { titre: "Émetteur", md: "L'antenne du premier talkie-walkie envoie un **signal radio**." }, { titre: "Récepteur", md: "Le second talkie-walkie capte le signal radio." }, { titre: "Haut-parleur", md: "Il retransforme le signal en son : ton ami entend le message." }] },
            { t: "definition", terme: "Capteur", md: "Un dispositif qui transforme une grandeur physique (température, lumière, présence, son) en **signal électrique**. Exemples : thermomètre électronique (température), cellule photoélectrique (lumière), détecteur de mouvement (présence), micro (son)." },
            { t: "exemple", titre: "Le lampadaire qui s'allume tout seul", md: "Un **capteur de lumière** (cellule photoélectrique) mesure la lumière du jour. Quand elle devient trop faible, à la tombée de la nuit, il envoie un signal électrique qui allume la lampe." },
            { t: "verifie", q: "Avec 3 bits, combien d'informations différentes peut-on coder ?", choix: ["3", "6", "8", "9"], bonne: 2, explication: "Chaque bit double le nombre de codes : 2 × 2 × 2 = 8 (de 000 à 111)." },
          ],
        },
        {
          titre: "Comment voyagent les signaux",
          blocs: [
            { t: "propriete", titre: "Son et lumière", md: "Le **son** a besoin de **matière** pour se propager : air, eau, solide. La **lumière** et les ondes radio se propagent **même dans le vide**." },
            { t: "texte", md: "Dans l'espace, il n'y a pas d'air : deux astronautes en sortie ne peuvent pas s'entendre crier, même à un mètre l'un de l'autre. Ils se parlent par radio. La lumière du Soleil, elle, traverse le vide spatial pour arriver jusqu'à nous, à environ 300 000 km par seconde." },
            { t: "attention", md: "Dans les films de science-fiction, les vaisseaux explosent avec fracas dans l'espace… C'est faux ! Sans matière pour le transporter, aucun son ne peut nous parvenir." },
          ],
        },
      ],
      bilan: "Un signal est un phénomène physique qui porte une information. Avec des 0 et des 1, on code tout ; un émetteur l'envoie, un récepteur le reçoit, et les capteurs traduisent le monde en signaux électriques.",
    },
  },
};
