// Cours ÉCLORE — 5e Physique-Chimie. Schéma : docs/COURS.md
export default {
  id: "5e-physique-chimie",
  chapitres: {
    "5e-physique-chimie-01-etats-de-la-matiere": {
      accroche: "Pose un glaçon dans une casserole sur le feu et plonge un thermomètre dedans. Le feu chauffe sans arrêt… et pourtant, pendant plusieurs minutes, le thermomètre reste bloqué sur 0 °C. Où passe toute cette chaleur ?",
      objectifs: [
        "Décrire les propriétés des états solide, liquide et gazeux",
        "Expliquer ces états avec le modèle particulaire",
        "Nommer les six changements d'état et connaître les températures de l'eau",
        "Lire une courbe de changement d'état et repérer son palier",
      ],
      sections: [
        {
          titre: "Trois états, trois comportements",
          blocs: [
            { t: "texte", md: "Autour de toi, la matière se présente sous trois **états physiques**. Un caillou garde sa forme, que tu le poses dans un bol ou sur une table : c'est un **solide**. L'eau, elle, prend la forme du verre qui la contient : c'est un **liquide**. L'air d'un ballon remplit tout le ballon, quelle que soit sa taille : c'est un **gaz**.\n\nAu repos, la surface d'un liquide est toujours ==plane et horizontale== : on l'appelle la **surface libre**. Si tu penches le verre, le liquide bouge, mais sa surface redevient horizontale." },
            { t: "tableau", titre: "Les propriétés des trois états", entetes: ["État", "Forme propre ?", "Volume propre ?", "Exemple"], lignes: [["Solide", "oui", "oui", "glaçon, caillou"], ["Liquide", "non (prend la forme du récipient)", "oui", "eau, huile"], ["Gaz", "non", "non (occupe tout l'espace)", "air, vapeur d'eau"]] },
            { t: "attention", md: "Un solide en poudre (sable, sucre) semble couler comme un liquide. Mais chaque grain, lui, garde sa forme : le sable reste un **solide**. Et un tas de sable n'a pas de surface libre horizontale." },
            { t: "verifie", q: "Quel état de la matière n'a ni forme propre ni volume propre ?", choix: ["Le solide", "Le liquide", "Le gaz"], bonne: 2, explication: "Un gaz occupe tout l'espace qu'on lui offre : il n'a ni forme ni volume propres. Le liquide, lui, garde son volume." },
          ],
        },
        {
          titre: "Le modèle particulaire",
          blocs: [
            { t: "texte", md: "Pour comprendre ces différences, les scientifiques imaginent que la matière est faite de **particules** minuscules, beaucoup trop petites pour être vues, même au microscope ordinaire. C'est un **modèle** : une représentation simplifiée qui explique ce qu'on observe." },
            { t: "schema", titre: "Les particules dans les trois états", legende: "Chaque rond représente une particule. Dans le gaz, les particules sont très éloignées et bougent dans tous les sens.", svg: `<svg viewBox="0 0 400 195"><text class="texte" x="70" y="28" text-anchor="middle">Solide</text><text class="texte" x="200" y="28" text-anchor="middle">Liquide</text><text class="texte" x="330" y="28" text-anchor="middle">Gaz</text><path class="trait" d="M20 40 L20 160 L120 160 L120 40"/><path class="trait" d="M150 40 L150 160 L250 160 L250 40"/><rect class="trait" x="280" y="40" width="100" height="120"/><circle class="aplat-fort" cx="46" cy="96" r="8"/><circle class="aplat-fort" cx="62" cy="96" r="8"/><circle class="aplat-fort" cx="78" cy="96" r="8"/><circle class="aplat-fort" cx="94" cy="96" r="8"/><circle class="aplat-fort" cx="46" cy="112" r="8"/><circle class="aplat-fort" cx="62" cy="112" r="8"/><circle class="aplat-fort" cx="78" cy="112" r="8"/><circle class="aplat-fort" cx="94" cy="112" r="8"/><circle class="aplat-fort" cx="46" cy="128" r="8"/><circle class="aplat-fort" cx="62" cy="128" r="8"/><circle class="aplat-fort" cx="78" cy="128" r="8"/><circle class="aplat-fort" cx="94" cy="128" r="8"/><circle class="aplat-fort" cx="46" cy="144" r="8"/><circle class="aplat-fort" cx="62" cy="144" r="8"/><circle class="aplat-fort" cx="78" cy="144" r="8"/><circle class="aplat-fort" cx="94" cy="144" r="8"/><line class="pointille" x1="150" y1="111" x2="250" y2="111"/><circle class="aplat-fort" cx="159" cy="151" r="8"/><circle class="aplat-fort" cx="177" cy="150" r="8"/><circle class="aplat-fort" cx="195" cy="152" r="8"/><circle class="aplat-fort" cx="214" cy="150" r="8"/><circle class="aplat-fort" cx="232" cy="151" r="8"/><circle class="aplat-fort" cx="166" cy="135" r="8"/><circle class="aplat-fort" cx="186" cy="134" r="8"/><circle class="aplat-fort" cx="205" cy="136" r="8"/><circle class="aplat-fort" cx="224" cy="134" r="8"/><circle class="aplat-fort" cx="241" cy="137" r="8"/><circle class="aplat-fort" cx="158" cy="120" r="8"/><circle class="aplat-fort" cx="178" cy="119" r="8"/><circle class="aplat-fort" cx="196" cy="120" r="8"/><circle class="aplat-fort" cx="215" cy="119" r="8"/><circle class="aplat-fort" cx="234" cy="121" r="8"/><circle class="aplat-fort" cx="298" cy="60" r="8"/><circle class="aplat-fort" cx="356" cy="72" r="8"/><circle class="aplat-fort" cx="322" cy="104" r="8"/><circle class="aplat-fort" cx="364" cy="132" r="8"/><circle class="aplat-fort" cx="300" cy="142" r="8"/><path class="trait-fin" d="M310 56 L326 50" marker-end="url(#fl)"/><path class="trait-fin" d="M332 110 L344 122" marker-end="url(#fl)"/><path class="trait-fin" d="M300 130 L304 116" marker-end="url(#fl)"/><text class="texte-petit" x="70" y="182" text-anchor="middle">serrées, ordonnées</text><text class="texte-petit" x="200" y="182" text-anchor="middle">serrées, désordonnées</text><text class="texte-petit" x="330" y="182" text-anchor="middle">espacées, agitées</text></svg>` },
            { t: "liste", items: ["**Solide** : particules collées et rangées en ordre, elles vibrent sur place. Elles ne peuvent pas glisser : le solide garde sa forme.", "**Liquide** : particules toujours collées, mais en désordre. Elles glissent les unes sur les autres : le liquide coule.", "**Gaz** : particules très éloignées et très agitées. Rien ne les retient : le gaz occupe tout l'espace."] },
            { t: "exemple", titre: "La seringue bouchée", md: "Bouche une seringue pleine d'air et appuie sur le piston : il s'enfonce. Le gaz est **compressible** car il y a beaucoup de vide entre ses particules : on les rapproche. Avec de l'eau, le piston ne bouge presque pas : ses particules se touchent déjà." },
            { t: "attention", md: "Quand on comprime l'air, les particules **ne deviennent pas plus petites** : elles se rapprochent. Une particule garde toujours la même taille, quel que soit l'état." },
          ],
        },
        {
          titre: "Les six changements d'état",
          blocs: [
            { t: "texte", md: "En chauffant ou en refroidissant, on fait passer la matière d'un état à un autre. Chaque passage porte un nom précis. Les particules restent les mêmes : seul leur arrangement change. Un changement d'état est donc une **transformation physique**, pas une transformation chimique." },
            { t: "tableau", titre: "Retiens les noms", entetes: ["Passage", "Nom", "Exemple de la vie courante"], lignes: [["solide → liquide", "**fusion**", "le glaçon fond dans le verre"], ["liquide → solide", "**solidification**", "l'eau gèle au congélateur"], ["liquide → gaz", "**vaporisation**", "le linge sèche, l'eau bout"], ["gaz → liquide", "**liquéfaction**", "la buée sur un miroir froid"], ["solide → gaz", "**sublimation**", "la glace carbonique « fume »"], ["gaz → solide", "**condensation solide**", "le givre sur une vitre en hiver"]] },
            { t: "propriete", titre: "Les températures de l'eau pure", md: "À la pression atmosphérique normale, l'eau pure **fond et se solidifie à 0 °C**, et **bout à 100 °C**." },
            { t: "texte", md: "La vaporisation peut être lente ou rapide. L'**évaporation** se fait doucement, à toute température, à la surface du liquide : c'est le linge qui sèche. L'**ébullition** est rapide : à 100 °C, des bulles se forment dans tout le liquide." },
            { t: "attention", md: "Les bulles de l'eau qui bout ne sont **pas de l'air** : c'est de la **vapeur d'eau**, de l'eau à l'état gazeux. Et la « fumée » blanche au-dessus de la casserole n'est pas de la vapeur (invisible) : ce sont de minuscules gouttes d'eau liquide, formées par liquéfaction au contact de l'air plus froid." },
            { t: "verifie", q: "De la buée apparaît sur un miroir froid. Quel changement d'état subit la vapeur d'eau de l'air ?", choix: ["Une vaporisation", "Une liquéfaction", "Une solidification", "Une fusion"], bonne: 1, explication: "La vapeur d'eau (gaz) devient de minuscules gouttes d'eau (liquide) : gaz → liquide, c'est une liquéfaction." },
          ],
        },
        {
          titre: "La courbe de changement d'état et son palier",
          blocs: [
            { t: "texte", md: "Revenons au glaçon de l'accroche. On le sort du congélateur à −15 °C et on le chauffe en relevant la température toutes les deux minutes. On trace ensuite la **courbe** de la température en fonction du temps." },
            { t: "graphique", type: "courbe", titre: "Température de l'eau chauffée depuis −15 °C", unite: "°C", donnees: [{ label: "0 min", valeur: -15 }, { label: "2 min", valeur: -7 }, { label: "4 min", valeur: 0 }, { label: "6 min", valeur: 0 }, { label: "8 min", valeur: 0 }, { label: "10 min", valeur: 0 }, { label: "12 min", valeur: 25 }, { label: "14 min", valeur: 50 }, { label: "16 min", valeur: 75 }, { label: "18 min", valeur: 100 }, { label: "20 min", valeur: 100 }, { label: "22 min", valeur: 100 }] },
            { t: "propriete", titre: "Le palier de température", md: "Pendant le changement d'état d'un **corps pur**, la température reste **constante**. Sur la courbe, cela donne une partie horizontale : le **palier**. L'énergie reçue sert alors à changer l'état, pas à chauffer." },
            { t: "exemple", titre: "Lire la courbe pas à pas", etapes: ["De 0 à 4 min : la glace se réchauffe de −15 °C à 0 °C (elle reste solide).", "De 4 à 10 min : palier à 0 °C, c'est la **fusion** ; glace et eau liquide sont mélangées.", "De 10 à 18 min : il ne reste que du liquide, qui se réchauffe jusqu'à 100 °C.", "À partir de 18 min : second palier à 100 °C, c'est l'**ébullition**."] },
            { t: "astuce", md: "Pour calculer la durée d'un palier, fais la différence entre l'instant où il finit et l'instant où il commence. Ici, la fusion dure 10 − 4 = **6 minutes**." },
            { t: "verifie", q: "Un relevé donne : 0 min → −8 °C ; 2 min → 0 °C ; 6 min → 0 °C ; 8 min → 10 °C. Combien de temps a duré le palier de fusion ?", choix: ["2 min", "4 min", "6 min", "8 min"], bonne: 1, explication: "La température reste à 0 °C de 2 min à 6 min : le palier dure 6 − 2 = 4 minutes." },
            { t: "savais-tu", md: "Un mélange comme l'eau salée ne fait pas de palier net : il commence à geler sous 0 °C et sa température continue de baisser pendant qu'il gèle. Observer un palier est donc un moyen de reconnaître un **corps pur** !" },
          ],
        },
      ],
      bilan: "Solide, liquide, gaz : les mêmes particules, plus ou moins serrées et agitées. Elles changent d'arrangement, jamais de taille, et pendant le changement d'état d'un corps pur, la température fait une pause : le palier.",
    },
    "5e-physique-chimie-02-masse-volume-masse-volumique": {
      accroche: "Une bûche de 10 kg flotte sur le lac, alors qu'un petit clou de 3 g coule à pic. Ce n'est donc pas une question de poids… Alors qu'est-ce qui décide si un objet flotte ou coule ?",
      objectifs: [
        "Mesurer une masse et un volume avec le bon instrument et la bonne unité",
        "Convertir des unités de masse et de volume",
        "Calculer et utiliser une masse volumique avec ρ = m / V",
        "Prévoir si un objet flotte et savoir que la masse se conserve",
      ],
      sections: [
        {
          titre: "Deux grandeurs à ne pas confondre",
          blocs: [
            { t: "texte", md: "La **masse** dit *combien de matière* contient un objet. Le **volume** dit *quelle place* il occupe. Un kilo de plumes et un kilo de plomb ont la même masse, mais les plumes occupent une place énorme !" },
            { t: "tableau", titre: "Grandeurs, symboles, unités et instruments", entetes: ["Grandeur", "Symbole", "Unités courantes", "Instrument"], lignes: [["Masse", "m", "g, kg", "balance"], ["Volume", "V", "mL, L, cm³, m³", "éprouvette graduée"], ["Masse volumique", "ρ (rhô)", "g/mL, g/cm³, kg/m³", "calcul : m ÷ V"]] },
            { t: "propriete", titre: "Les conversions à connaître", md: "**Masse** : 1 kg = 1 000 g.\n**Volume** : 1 L = 1 000 mL ; 1 mL = 1 cm³ ; 1 L = 1 dm³ ; 1 m³ = 1 000 L." },
            { t: "exemple", titre: "Convertir 1,5 L en mL", md: "1 L = 1 000 mL, donc 1,5 L = 1,5 × 1 000 = **1 500 mL**." },
          ],
        },
        {
          titre: "Mesurer un volume, même celui d'un caillou",
          blocs: [
            { t: "texte", md: "Pour un liquide, on utilise une **éprouvette graduée** : on la pose bien à plat et on lit la graduation au niveau du bas de la surface. Mais comment mesurer le volume d'un caillou tout biscornu ? Grâce à l'eau ! Le caillou plongé **pousse** l'eau, qui monte d'un volume exactement égal au sien." },
            { t: "schema", titre: "Mesurer le volume d'un solide par déplacement d'eau", legende: "Le niveau monte de 50 mL à 68 mL : le caillou occupe 18 mL, soit 18 cm³.", svg: `<svg viewBox="0 0 400 255"><rect class="aplat" x="91" y="120" width="38" height="80"/><path class="trait" d="M90 30 L90 200 L130 200 L130 30"/><rect class="trait" x="72" y="200" width="76" height="8"/><line class="trait-fin" x1="90" y1="184" x2="97" y2="184"/><line class="trait-fin" x1="90" y1="168" x2="97" y2="168"/><line class="trait-fin" x1="90" y1="152" x2="97" y2="152"/><line class="trait-fin" x1="90" y1="136" x2="97" y2="136"/><line class="trait-fin" x1="90" y1="120" x2="100" y2="120"/><line class="trait-fin" x1="90" y1="104" x2="97" y2="104"/><line class="trait-fin" x1="90" y1="88" x2="97" y2="88"/><line class="trait-fin" x1="90" y1="72" x2="97" y2="72"/><line class="trait-fin" x1="90" y1="56" x2="97" y2="56"/><line class="trait-fin" x1="90" y1="40" x2="100" y2="40"/><text class="texte-petit" x="84" y="124" text-anchor="end">50</text><text class="texte-petit" x="84" y="44" text-anchor="end">100</text><rect class="aplat" x="271" y="91" width="38" height="109"/><path class="aplat-fort" d="M280 198 L284 182 L296 175 L306 184 L307 198 Z"/><path class="trait" d="M270 30 L270 200 L310 200 L310 30"/><rect class="trait" x="252" y="200" width="76" height="8"/><line class="trait-fin" x1="270" y1="184" x2="277" y2="184"/><line class="trait-fin" x1="270" y1="168" x2="277" y2="168"/><line class="trait-fin" x1="270" y1="152" x2="277" y2="152"/><line class="trait-fin" x1="270" y1="136" x2="277" y2="136"/><line class="trait-fin" x1="270" y1="120" x2="280" y2="120"/><line class="trait-fin" x1="270" y1="104" x2="277" y2="104"/><line class="trait-fin" x1="270" y1="88" x2="277" y2="88"/><line class="trait-fin" x1="270" y1="72" x2="277" y2="72"/><line class="trait-fin" x1="270" y1="56" x2="277" y2="56"/><line class="trait-fin" x1="270" y1="40" x2="280" y2="40"/><text class="texte-petit" x="264" y="124" text-anchor="end">50</text><text class="texte-petit" x="264" y="44" text-anchor="end">100</text><line class="pointille" x1="130" y1="120" x2="270" y2="120"/><path class="trait" d="M150 70 L250 70" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="60" text-anchor="middle">on plonge le caillou</text><text class="texte" x="110" y="228" text-anchor="middle">50 mL</text><text class="texte" x="290" y="228" text-anchor="middle">68 mL</text><text class="texte-main" x="200" y="250" text-anchor="middle">V = 68 − 50 = 18 mL</text></svg>` },
            { t: "verifie", q: "On plonge un caillou dans une éprouvette contenant 50 mL d'eau. Le niveau monte à 68 mL. Quel est le volume du caillou ?", choix: ["68 mL", "50 mL", "18 mL", "118 mL"], bonne: 2, explication: "Le volume du caillou est la différence des deux niveaux : 68 − 50 = 18 mL (soit 18 cm³)." },
          ],
        },
        {
          titre: "La masse volumique : ρ = m / V",
          blocs: [
            { t: "definition", terme: "Masse volumique", md: "La masse volumique **ρ** (lettre grecque « rhô ») d'une substance est la masse d'une unité de volume de cette substance : ==ρ = m / V==. Avec m en g et V en mL, ρ est en g/mL ; avec m en kg et V en m³, ρ est en kg/m³." },
            { t: "texte", md: "La masse volumique est une **carte d'identité** de la substance : un petit clou et une énorme poutre en fer ont la même masse volumique, 7,9 g/cm³, car ils sont faits du même matériau. Celle de l'eau vaut **1 g/mL**, c'est-à-dire 1 000 kg/m³ : un litre d'eau a une masse de 1 kg." },
            { t: "graphique", type: "barres", titre: "Quelques masses volumiques", unite: "g/cm³", donnees: [{ label: "Alcool", valeur: 0.8 }, { label: "Huile", valeur: 0.9 }, { label: "Glace", valeur: 0.92 }, { label: "Eau", valeur: 1 }, { label: "Miel", valeur: 1.4 }, { label: "Aluminium", valeur: 2.7 }, { label: "Fer", valeur: 7.9 }] },
            { t: "exemple", titre: "Trois calculs typiques", etapes: ["**Trouver ρ** : 40 mL d'huile ont une masse de 36 g. ρ = m / V = 36 ÷ 40 = 0,9 g/mL.", "**Trouver m** : 10 cm³ de fer. m = ρ × V = 7,9 × 10 = 79 g.", "**Avec de grandes unités** : un aquarium contient 0,25 m³ d'eau. m = 1 000 × 0,25 = 250 kg."] },
            { t: "astuce", md: "Avant de calculer, vérifie que les unités vont ensemble : des grammes avec des mL (ou cm³), des kilogrammes avec des m³. Mélanger g et L donne un résultat faux de 1 000 !" },
          ],
        },
        {
          titre: "Flotter ou couler, et la masse qui se conserve",
          blocs: [
            { t: "propriete", titre: "Flotter ou couler", md: "Un objet plein **flotte** sur un liquide si sa masse volumique est **plus petite** que celle du liquide. Il **coule** si elle est plus grande." },
            { t: "texte", md: "Voilà la réponse de l'accroche : le bois (environ 0,6 g/cm³) est moins dense que l'eau, il flotte, même en grosse bûche. Le fer (7,9 g/cm³) coule, même en petit clou. De la même façon, des liquides qui ne se mélangent pas se rangent en couches : le **plus dense au fond**. Verse du miel, de l'eau puis de l'huile : le miel reste en bas, l'huile flotte en haut." },
            { t: "exemple", titre: "Un cube d'aluminium", md: "Un cube de 20 cm³ a une masse de 54 g. ρ = 54 ÷ 20 = 2,7 g/cm³. Comme 2,7 > 1, il **coule** dans l'eau." },
            { t: "propriete", titre: "Conservation de la masse", md: "Lors d'un changement d'état, la **masse se conserve** : un glaçon de 30 g donne 30 g d'eau liquide. Le **volume**, lui, peut changer." },
            { t: "attention", md: "L'eau est une exception : en gelant, son volume **augmente** d'environ 9 %. C'est pour cela qu'une bouteille pleine d'eau éclate au congélateur, et que les glaçons flottent (0,92 g/cm³ < 1 g/mL). La masse, elle, n'a pas changé." },
            { t: "verifie", q: "Un morceau de bois a une masse volumique de 0,6 g/cm³. Que se passe-t-il quand on le pose dans l'eau ?", choix: ["Il coule lentement", "Il flotte", "Il reste entre deux eaux"], bonne: 1, explication: "0,6 g/cm³ est plus petit que 1 g/mL (masse volumique de l'eau) : le bois flotte." },
          ],
        },
      ],
      bilan: "La masse compte la matière, le volume mesure la place, et leur quotient ρ = m / V est la signature d'une substance : plus légère que l'eau à volume égal, elle flotte.",
    },
    "5e-physique-chimie-03-melanges-et-corps-purs": {
      accroche: "Une eau de source parfaitement limpide, quand on en fait bouillir un litre jusqu'au bout, laisse au fond de la casserole une fine poudre blanche. D'où vient ce dépôt, alors que l'eau semblait pure ?",
      objectifs: [
        "Distinguer corps pur, mélange homogène et mélange hétérogène",
        "Décrire une solution avec les mots solvant, soluté, solubilité, saturation, miscibilité",
        "Choisir la bonne technique pour séparer un mélange",
        "Connaître la composition de l'air",
      ],
      sections: [
        {
          titre: "Corps pur ou mélange ?",
          blocs: [
            { t: "definition", terme: "Corps pur", md: "Une matière constituée d'**une seule espèce chimique** : l'eau distillée, le sucre pur, le fer pur. Un **mélange** contient au moins deux espèces chimiques." },
            { t: "texte", md: "Un mélange est **homogène** si on ne peut pas distinguer ses constituants à l'œil nu : eau sucrée, sirop dilué, air. Il est **hétérogène** si on les distingue : eau boueuse, eau et huile, jus d'orange avec pulpe.\n\nLe dépôt de l'accroche s'explique : l'eau de source contient des **sels minéraux dissous**, invisibles. Quand toute l'eau s'est évaporée, ils restent au fond." },
            { t: "attention", md: "« Limpide » ne veut pas dire « pur » ! L'eau minérale est un **mélange homogène**. Seule l'**eau distillée** est un corps pur." },
          ],
        },
        {
          titre: "Les solutions : dissoudre n'est pas faire disparaître",
          blocs: [
            { t: "texte", md: "Quand tu verses du sel dans l'eau et que tu remues, le sel semble disparaître. En réalité, ses particules se dispersent entre celles de l'eau. Tu obtiens une **solution**, un mélange homogène." },
            { t: "tableau", titre: "Le vocabulaire des solutions", entetes: ["Mot", "Signification", "Exemple"], lignes: [["**Solvant**", "le liquide qui dissout", "l'eau"], ["**Soluté**", "ce qui est dissous", "le sel, le sucre"], ["**Solubilité**", "masse maximale de soluté dissoute dans 1 L de solvant", "sel : environ 360 g/L à 20 °C"], ["**Saturée**", "solution qui ne peut plus dissoudre de soluté", "le sel en trop se dépose au fond"], ["**Miscibles**", "deux liquides qui se mélangent en un mélange homogène", "eau et sirop, eau et alcool"], ["**Non miscibles**", "deux liquides qui se séparent en couches", "eau et huile"]] },
            { t: "propriete", titre: "La masse se conserve lors d'une dissolution", md: "La masse de la solution est égale à la masse du solvant **plus** la masse du soluté. 20 g de sucre dans 200 g d'eau donnent **220 g** d'eau sucrée." },
            { t: "exemple", titre: "Combien de sel reste au fond ?", etapes: ["La solubilité du sel est 360 g pour 1 L d'eau, soit 1 000 mL.", "250 mL, c'est le quart d'un litre : on peut y dissoudre au plus 360 ÷ 4 = 90 g.", "On a versé 100 g : il reste 100 − 90 = **10 g** non dissous. La solution est saturée."] },
            { t: "verifie", q: "On dissout 20 g de sucre dans 200 g d'eau. Quelle est la masse de l'eau sucrée ?", choix: ["200 g", "180 g", "220 g", "20 g"], bonne: 2, explication: "Le sucre n'a pas disparu, il est dissous : 200 + 20 = 220 g." },
          ],
        },
        {
          titre: "Séparer les constituants d'un mélange",
          blocs: [
            { t: "tableau", titre: "Quelle technique pour quel mélange ?", entetes: ["Technique", "Principe", "Exemple"], lignes: [["**Décantation**", "on laisse reposer : le plus dense tombe au fond", "eau boueuse, eau et huile"], ["**Filtration**", "le filtre retient les solides non dissous", "eau et sable"], ["**Évaporation**", "on vaporise l'eau, le solide dissous reste", "récupérer le sel de l'eau de mer"], ["**Distillation**", "on vaporise puis on liquéfie le liquide", "récupérer l'eau pure de l'eau salée"], ["**Chromatographie**", "le solvant entraîne plus ou moins loin chaque colorant", "les colorants d'une encre"]] },
            { t: "attention", md: "Filtrer de l'eau salée ne retire **pas** le sel : il est dissous et traverse le filtre. Le **filtrat** (le liquide filtré) est de l'eau salée limpide. La filtration ne retient que ce qui n'est pas dissous." },
            { t: "schema", titre: "Le montage de distillation", legende: "La vapeur d'eau se liquéfie dans le réfrigérant refroidi par l'eau froide ; le sel reste dans le ballon.", svg: `<svg viewBox="0 0 400 260"><path class="aplat" d="M133.8 97.2 L263.8 145 L256.2 165.6 L126.2 117.8 Z"/><path class="trait-fin" d="M133.8 97.2 L263.8 145 L256.2 165.6 L126.2 117.8 Z"/><line class="trait" x1="88" y1="92" x2="300" y2="172"/><rect class="aplat-fort" x="40" y="200" width="80" height="20"/><circle class="aplat-papier" cx="80" cy="160" r="36"/><path class="aplat" d="M45.4 170 A36 36 0 0 0 114.6 170 Z"/><circle class="trait" cx="80" cy="160" r="36"/><path class="trait" d="M72 125 L72 80 L88 80 L88 125"/><line class="trait-fin" x1="80" y1="40" x2="80" y2="94"/><circle cx="80" cy="97" r="3" fill="var(--encre)"/><path class="trait-fin" d="M250 192 L250 167" marker-end="url(#fl)"/><path class="trait-fin" d="M140 99 L140 76" marker-end="url(#fl)"/><path class="aplat" d="M282.5 222 L319.5 222 L326 235 L276 235 Z"/><path class="trait" d="M296 178 L296 195 L276 235 L326 235 L306 195 L306 178"/><circle cx="301" cy="182" r="2" fill="var(--pigment)"/><text class="texte-petit" x="88" y="46">thermomètre</text><text class="texte-petit" x="140" y="70" text-anchor="middle">sortie d'eau</text><text class="texte-petit" x="110" y="84" text-anchor="middle">vapeur</text><text class="texte-petit" x="195" y="104" text-anchor="middle">réfrigérant</text><text class="texte-petit" x="250" y="205" text-anchor="middle">eau froide</text><text class="texte-petit" x="80" y="186" text-anchor="middle">eau salée</text><text class="texte-petit" x="80" y="236" text-anchor="middle">chauffage</text><text class="texte-petit" x="301" y="252" text-anchor="middle">eau distillée</text></svg>` },
            { t: "exemple", titre: "Les étapes d'une distillation de l'eau salée", etapes: ["On chauffe l'eau salée dans le ballon.", "L'eau bout et se **vaporise** ; le sel, lui, ne se vaporise pas.", "La vapeur monte, passe devant le thermomètre (100 °C) et entre dans le réfrigérant.", "Refroidie, la vapeur se **liquéfie** en gouttes.", "On recueille l'**eau distillée** dans l'erlenmeyer ; le sel reste dans le ballon."] },
            { t: "schema", titre: "La chromatographie d'une encre", legende: "Le solvant monte dans le papier et entraîne chaque colorant à sa propre vitesse : une seule tache donne plusieurs taches.", svg: `<svg viewBox="0 0 400 222"><text class="texte" x="90" y="18" text-anchor="middle">Au départ</text><text class="texte" x="300" y="18" text-anchor="middle">Quelques minutes après</text><line class="trait" x1="30" y1="30" x2="150" y2="30"/><rect class="aplat" x="41" y="175" width="98" height="25"/><rect class="aplat-papier" x="75" y="30" width="30" height="160"/><rect class="trait-fin" x="75" y="30" width="30" height="160"/><line class="pointille" x1="75" y1="160" x2="105" y2="160"/><circle class="aplat-fort" cx="90" cy="160" r="5"/><path class="trait" d="M40 50 L40 200 L140 200 L140 50"/><line class="trait" x1="240" y1="30" x2="360" y2="30"/><rect class="aplat" x="251" y="175" width="98" height="25"/><rect class="aplat-papier" x="285" y="30" width="30" height="160"/><rect class="trait-fin" x="285" y="30" width="30" height="160"/><line class="pointille" x1="285" y1="160" x2="315" y2="160"/><line class="pointille" x1="285" y1="50" x2="315" y2="50"/><circle class="aplat-fort" cx="300" cy="70" r="4"/><ellipse class="aplat" cx="300" cy="102" rx="6" ry="5"/><ellipse class="trait-fin" cx="300" cy="102" rx="6" ry="5"/><circle class="aplat-fort" cx="300" cy="136" r="6"/><path class="trait" d="M250 50 L250 200 L350 200 L350 50"/><text class="texte-petit" x="234" y="54" text-anchor="end">front du solvant</text><text class="texte-petit" x="234" y="105" text-anchor="end">3 colorants</text><path class="trait-fin" d="M238 101 L290 101" marker-end="url(#fl)"/><text class="texte-petit" x="234" y="164" text-anchor="end">ligne de dépôt</text><text class="texte-petit" x="90" y="150" text-anchor="middle">encre</text><text class="texte-petit" x="90" y="214" text-anchor="middle">solvant</text><text class="texte-petit" x="300" y="214" text-anchor="middle">solvant</text></svg>` },
            { t: "verifie", q: "On filtre de l'eau salée trouble. Que récupère-t-on dans le filtrat ?", choix: ["De l'eau pure", "De l'eau salée limpide", "Du sel en cristaux"], bonne: 1, explication: "Le filtre retient les particules solides qui troublaient l'eau, mais le sel dissous passe : le filtrat est de l'eau salée limpide." },
          ],
        },
        {
          titre: "L'air, un mélange de gaz",
          blocs: [
            { t: "texte", md: "L'air semble être une seule substance, mais c'est un **mélange homogène** de plusieurs gaz. Le plus abondant n'est pas celui qu'on croit : ce n'est pas le dioxygène que nous respirons, mais le **diazote**." },
            { t: "graphique", type: "secteurs", titre: "Composition de l'air sec (en volume)", unite: "%", donnees: [{ label: "Diazote", valeur: 78 }, { label: "Dioxygène", valeur: 21 }, { label: "Autres gaz (argon, CO₂…)", valeur: 1 }] },
            { t: "astuce", md: "Pour retenir : dans l'air, à peu près **4/5 de diazote** et **1/5 de dioxygène**." },
            { t: "savais-tu", md: "Le dioxyde de carbone, dont on parle tant pour le climat, ne représente qu'environ 0,04 % de l'air. Pourtant, cette petite quantité suffit à modifier la température de la planète." },
          ],
        },
      ],
      bilan: "Un corps pur n'a qu'une espèce chimique ; tout le reste est mélange, visible ou non. Pour séparer, choisis la technique selon ce que tu veux garder : filtrer retient les solides, distiller récupère le liquide pur.",
    },
    "5e-physique-chimie-04-decrire-un-mouvement": {
      accroche: "Assis dans le train, tu lis tranquillement : tu ne bouges pas. Pourtant, une vache dans un pré te voit filer à 300 km/h ! Qui a raison ? Tous les deux… et c'est toute la physique du mouvement.",
      objectifs: [
        "Choisir un référentiel et décrire la trajectoire d'un objet",
        "Calculer une vitesse moyenne avec v = d / t",
        "Convertir une vitesse de m/s en km/h et inversement",
        "Dire si un mouvement est uniforme, accéléré ou ralenti",
      ],
      sections: [
        {
          titre: "Tout dépend du référentiel",
          blocs: [
            { t: "definition", terme: "Référentiel", md: "L'objet par rapport auquel on étudie un mouvement. Le plus utilisé est le **référentiel terrestre** : le sol, un arbre, le quai d'une gare." },
            { t: "texte", md: "Dans le train, tu es **immobile par rapport à ton siège**, mais **en mouvement par rapport au quai**. Un objet peut donc être à la fois immobile dans un référentiel et en mouvement dans un autre : c'est la **relativité du mouvement**. Dire « il bouge » ne suffit pas : il faut toujours préciser *par rapport à quoi*." },
            { t: "verifie", q: "Tu es assis dans un bus qui roule. Par rapport à quoi es-tu immobile ?", choix: ["Le trottoir", "Ton siège", "Un arbre au bord de la route", "Une voiture qui double"], bonne: 1, explication: "Ta position ne change pas par rapport à ton siège. Par rapport au trottoir ou aux arbres, tu avances avec le bus." },
          ],
        },
        {
          titre: "La trajectoire : le chemin suivi",
          blocs: [
            { t: "texte", md: "Imagine qu'un objet laisse une trace derrière lui : cette ligne est sa **trajectoire**. Elle peut avoir trois formes." },
            { t: "tableau", titre: "Les formes de trajectoire (référentiel terrestre)", entetes: ["Trajectoire", "Forme", "Exemples"], lignes: [["**Rectiligne**", "une ligne droite", "une pomme qui tombe, un sprinteur dans son couloir"], ["**Circulaire**", "un cercle ou un arc de cercle", "un siège de grande roue, le bout d'une aiguille de montre"], ["**Curviligne**", "une courbe quelconque", "un ballon lancé, une voiture sur une route de montagne"]] },
            { t: "attention", md: "Une voiture qui roule à vitesse constante sur un **rond-point** n'a pas un mouvement rectiligne : sa trajectoire est **circulaire**. Rectiligne veut dire « en ligne droite », pas « à vitesse constante »." },
          ],
        },
        {
          titre: "Calculer une vitesse moyenne",
          blocs: [
            { t: "propriete", titre: "Vitesse moyenne", md: "La vitesse moyenne est la distance parcourue divisée par la durée du parcours :\n==v = d / t==\nAvec d en mètres (m) et t en secondes (s), v est en **m/s**. Avec d en kilomètres et t en heures, v est en **km/h**." },
            { t: "exemple", titre: "Trois situations", etapes: ["Un coureur parcourt 100 m en 12,5 s : v = 100 ÷ 12,5 = **8 m/s**.", "Une voiture parcourt 180 km en 2 h 30 min. Attention : 2 h 30 min = 2,5 h (et non 2,3 h). v = 180 ÷ 2,5 = **72 km/h**.", "Un train roule à 50 m/s pendant 4 min. On convertit : 4 min = 240 s. Puis d = v × t = 50 × 240 = **12 000 m**."] },
            { t: "astuce", md: "La formule se retourne facilement : **d = v × t** et **t = d / v**. Dessine un triangle avec d en haut, v et t en bas : cache la grandeur cherchée, le triangle te donne le calcul." },
          ],
        },
        {
          titre: "Passer des m/s aux km/h",
          blocs: [
            { t: "texte", md: "Pourquoi le nombre 3,6 ? Rouler à 1 m/s, c'est parcourir 1 m chaque seconde. En une heure (3 600 s), on parcourt 3 600 m, soit **3,6 km**. Donc 1 m/s = 3,6 km/h." },
            { t: "propriete", titre: "Conversion des vitesses", md: "De **m/s vers km/h** : on **multiplie** par 3,6.\nDe **km/h vers m/s** : on **divise** par 3,6." },
            { t: "tableau", titre: "Quelques correspondances", entetes: ["En m/s", "En km/h", "Exemple"], lignes: [["1,4", "5", "un piéton"], ["10", "36", "un sprinteur rapide"], ["25", "90", "une voiture sur route"], ["30", "108", "un guépard lancé"]] },
            { t: "graphique", type: "barres", titre: "Des mobiles du plus lent au plus rapide", unite: "km/h", donnees: [{ label: "Piéton", valeur: 5 }, { label: "Cycliste", valeur: 24 }, { label: "Guépard", valeur: 108 }, { label: "Voiture (autoroute)", valeur: 130 }, { label: "TGV", valeur: 320 }] },
            { t: "verifie", q: "Convertis 90 km/h en m/s.", choix: ["324 m/s", "25 m/s", "90 m/s", "9 m/s"], bonne: 1, explication: "De km/h vers m/s, on divise par 3,6 : 90 ÷ 3,6 = 25 m/s." },
          ],
        },
        {
          titre: "Uniforme, accéléré ou ralenti ?",
          blocs: [
            { t: "texte", md: "Un mouvement est **uniforme** si sa vitesse reste constante, **accéléré** si elle augmente, **ralenti** (ou décéléré) si elle diminue. Pour le voir, on prend une **chronophotographie** : plusieurs photos superposées, prises à intervalles de temps égaux." },
            { t: "schema", titre: "Lire une chronophotographie", legende: "Entre deux images, il s'écoule toujours la même durée. Plus l'écart est grand, plus l'objet va vite.", svg: `<svg viewBox="0 0 400 180"><text class="texte" x="200" y="30" text-anchor="middle">Mouvement uniforme : écarts égaux</text><circle class="aplat-fort" cx="30" cy="55" r="6"/><circle class="aplat-fort" cx="66" cy="55" r="6"/><circle class="aplat-fort" cx="102" cy="55" r="6"/><circle class="aplat-fort" cx="138" cy="55" r="6"/><circle class="aplat-fort" cx="174" cy="55" r="6"/><circle class="aplat-fort" cx="210" cy="55" r="6"/><circle class="aplat-fort" cx="246" cy="55" r="6"/><circle class="aplat-fort" cx="282" cy="55" r="6"/><circle class="aplat-fort" cx="318" cy="55" r="6"/><circle class="aplat-fort" cx="354" cy="55" r="6"/><path class="trait-fin" d="M20 72 L380 72" marker-end="url(#fl)"/><text class="texte" x="200" y="105" text-anchor="middle">Mouvement accéléré : écarts qui grandissent</text><circle class="aplat-fort" cx="30" cy="130" r="6"/><circle class="aplat-fort" cx="42" cy="130" r="6"/><circle class="aplat-fort" cx="60" cy="130" r="6"/><circle class="aplat-fort" cx="84" cy="130" r="6"/><circle class="aplat-fort" cx="114" cy="130" r="6"/><circle class="aplat-fort" cx="150" cy="130" r="6"/><circle class="aplat-fort" cx="192" cy="130" r="6"/><circle class="aplat-fort" cx="240" cy="130" r="6"/><circle class="aplat-fort" cx="294" cy="130" r="6"/><circle class="aplat-fort" cx="354" cy="130" r="6"/><path class="trait-fin" d="M20 147 L380 147" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="172" text-anchor="middle">une image toutes les 0,5 s, sens du mouvement →</text></svg>` },
            { t: "exemple", titre: "La cycliste", md: "Une cycliste parcourt 12 km en 30 min. Comme 30 min = 0,5 h : v = 12 ÷ 0,5 = **24 km/h**. En m/s : 24 ÷ 3,6 ≈ **6,7 m/s**. C'est une vitesse *moyenne* : elle a sûrement ralenti dans les côtes et accéléré dans les descentes." },
            { t: "savais-tu", md: "Une bille qui tombe accélère : sur une chronophotographie, ses images s'écartent de plus en plus. Une voiture qui freine devant un feu rouge montre l'inverse : des écarts qui rétrécissent." },
          ],
        },
      ],
      bilan: "Pour décrire un mouvement, choisis d'abord un référentiel, puis donne la forme de la trajectoire et l'évolution de la vitesse ; pour la calculer, v = d / t, et ×3,6 pour passer des m/s aux km/h.",
    },
    "5e-physique-chimie-05-actions-mecaniques-et-forces": {
      accroche: "Approche un aimant d'un trombone posé sur la table : il bondit sans que personne ne l'ait touché. Et une pomme lâchée tombe toute seule. Quelle « main invisible » agit sur eux ?",
      objectifs: [
        "Distinguer une action de contact d'une action à distance",
        "Reconnaître les effets d'une action mécanique",
        "Expliquer la gravitation et distinguer masse et poids",
        "Construire un diagramme objet-interactions",
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'une action mécanique ?",
          blocs: [
            { t: "definition", terme: "Action mécanique", md: "Action exercée par un objet, l'**acteur**, sur un autre objet, le **receveur**. Elle peut **mettre en mouvement**, **modifier un mouvement** (accélérer, freiner, dévier) ou **déformer** le receveur." },
            { t: "liste", titre: "Les trois effets possibles", items: ["**Mettre en mouvement** : ton pied lance un ballon immobile.", "**Modifier le mouvement** : le gardien dévie le tir, le frein ralentit le vélo.", "**Déformer** : tes doigts écrasent une balle en mousse, la raquette tend son cordage."] },
            { t: "texte", md: "Une action est **de contact** quand les deux objets se touchent : la main qui pousse, la corde qui tire, le sol qui soutient, l'air qui freine. Elle est **à distance** quand ils ne se touchent pas : l'aimant attire le trombone, la Terre attire la pomme." },
            { t: "verifie", q: "Laquelle de ces actions est une action à distance ?", choix: ["Le pied qui frappe le ballon", "La Terre qui attire une pomme", "Le vent qui pousse une voile", "La table qui soutient un livre"], bonne: 1, explication: "La Terre attire la pomme sans la toucher : c'est une action à distance. Le vent, lui, touche la voile : contact." },
          ],
        },
        {
          titre: "La gravitation, une attraction universelle",
          blocs: [
            { t: "propriete", titre: "La gravitation", md: "Tous les objets qui ont une masse **s'attirent** les uns les autres, à distance. Cette attraction est d'autant plus forte que les **masses sont grandes** et que les objets sont **proches**." },
            { t: "texte", md: "Entre deux crayons, l'attraction est si faible qu'on ne la sent pas. Mais la Terre est énorme : elle attire fortement tout ce qui l'entoure. Elle retient aussi la **Lune** : sans gravitation, la Lune partirait tout droit dans l'espace. C'est l'attraction de la Terre qui courbe sa trajectoire et la fait tourner autour de nous. De même, le Soleil retient les planètes." },
            { t: "attention", md: "La gravitation n'existe pas seulement entre la Terre et les objets posés sur elle. Elle agit **partout** dans l'Univers, entre tous les objets : Terre et Lune, Soleil et planètes, et même toi et ton voisin (mais c'est minuscule)." },
          ],
        },
        {
          titre: "Masse et poids : deux grandeurs différentes",
          blocs: [
            { t: "texte", md: "Dans la vie courante, on dit « je pèse 40 kilos ». Pour un physicien, c'est une confusion ! Ta **masse** est la quantité de matière qui te compose. Ton **poids** est l'action à distance que la Terre exerce sur toi." },
            { t: "tableau", titre: "Ne plus confondre", entetes: ["", "Masse", "Poids"], lignes: [["Ce que c'est", "quantité de matière", "attraction de l'astre sur l'objet"], ["Unité", "kilogramme (kg)", "newton (N)"], ["Instrument", "balance", "dynamomètre"], ["Change-t-elle sur la Lune ?", "non", "oui, environ 6 fois plus faible"]] },
            { t: "propriete", titre: "Ordre de grandeur", md: "Sur Terre, un objet de **1 kg** a un poids d'environ **10 N**. Sur la Lune, il garde sa masse de 1 kg, mais son poids n'est plus que d'environ **1,6 N**." },
            { t: "exemple", titre: "Un astronaute de 80 kg", etapes: ["Sur Terre : poids ≈ 80 × 10 = **800 N**.", "Sur la Lune : sa masse reste **80 kg** (il est fait de la même matière).", "Son poids devient ≈ 80 × 1,6 = **128 N** : il bondit facilement."] },
            { t: "verifie", q: "Un cartable a une masse de 6 kg. Quel est son poids sur Terre, environ ?", choix: ["6 N", "60 N", "0,6 N", "600 N"], bonne: 1, explication: "Sur Terre, 1 kg correspond à environ 10 N : 6 × 10 = 60 N." },
          ],
        },
        {
          titre: "Le diagramme objet-interactions",
          blocs: [
            { t: "texte", md: "Pour ne rien oublier, on dessine un **diagramme objet-interactions** : l'objet étudié au centre, entouré de tous les objets qui agissent sur lui. Exemple : un livre posé sur une table. La table le soutient (contact) et la Terre l'attire (à distance). Ces deux actions se compensent : le livre reste immobile." },
            { t: "schema", titre: "Diagramme objet-interactions du livre posé sur la table", legende: "Trait plein : action de contact. Pointillés : action à distance. Chaque lien est une flèche double.", svg: `<svg viewBox="0 0 400 215"><ellipse class="aplat" cx="200" cy="55" rx="55" ry="22"/><ellipse class="trait" cx="200" cy="55" rx="55" ry="22"/><text class="texte" x="200" y="60" text-anchor="middle">Livre</text><ellipse class="aplat-papier" cx="95" cy="160" rx="50" ry="22"/><ellipse class="trait" cx="95" cy="160" rx="50" ry="22"/><text class="texte" x="95" y="165" text-anchor="middle">Table</text><ellipse class="aplat-papier" cx="305" cy="160" rx="50" ry="22"/><ellipse class="trait" cx="305" cy="160" rx="50" ry="22"/><text class="texte" x="305" y="165" text-anchor="middle">Terre</text><path class="trait" d="M146 107 L163 76" marker-end="url(#fl)"/><path class="trait" d="M146 107 L129 139" marker-end="url(#fl)"/><path class="pointille" d="M254 107 L237 76" marker-end="url(#fl)"/><path class="pointille" d="M254 107 L271 139" marker-end="url(#fl)"/><text class="texte-petit" x="132" y="104" text-anchor="end">contact</text><text class="texte-petit" x="268" y="104">à distance</text><text class="texte-petit" x="200" y="205" text-anchor="middle">objet étudié en haut, acteurs autour</text></svg>` },
            { t: "etapes", titre: "Construire un diagramme objet-interactions", items: [{ titre: "Choisir l'objet", md: "Écris l'objet étudié dans une bulle (ici : le ballon lancé en l'air)." }, { titre: "Chercher les contacts", md: "Liste tout ce qui **touche** l'objet en ce moment (l'air)." }, { titre: "Chercher les actions à distance", md: "N'oublie jamais la **Terre** ; pense aussi aux aimants." }, { titre: "Relier", md: "Une flèche double par interaction : trait plein pour le contact, pointillés pour la distance." }] },
            { t: "attention", md: "Une fois le ballon lancé, la **main ne le touche plus** : elle ne fait plus partie du diagramme ! De même, quand une bille roule puis s'arrête sur une table, c'est à cause des **frottements** de la table et de l'air, des actions de contact qui la freinent." },
          ],
        },
      ],
      bilan: "Une action mécanique met en mouvement, modifie un mouvement ou déforme, au contact ou à distance. Le poids, en newtons, est l'attraction de la Terre ; la masse, en kilogrammes, ne change jamais.",
    },
    "5e-physique-chimie-06-sources-formes-conversions-energie": {
      accroche: "Une lampe à incandescence de 60 W allumée, touche-la… surtout pas ! Elle brûle. Sur 100 joules d'électricité reçus, elle n'en transforme qu'environ 5 en lumière : tout le reste part en chaleur. L'énergie ne disparaît jamais, elle change de forme.",
      objectifs: [
        "Classer les sources d'énergie en renouvelables ou non renouvelables",
        "Reconnaître les principales formes d'énergie",
        "Représenter une conversion par une chaîne énergétique",
        "Utiliser le joule et le kilowattheure, et raisonner sur les économies d'énergie",
      ],
      sections: [
        {
          titre: "D'où vient l'énergie ?",
          blocs: [
            { t: "definition", terme: "Source d'énergie", md: "Une ressource de la nature dont on tire de l'énergie. Elle est **renouvelable** si elle se reconstitue à l'échelle d'une vie humaine, **non renouvelable** si ses réserves s'épuisent." },
            { t: "tableau", titre: "Classer les sources d'énergie", entetes: ["Renouvelables", "Non renouvelables"], lignes: [["Soleil", "pétrole"], ["vent", "charbon"], ["eau des rivières et des marées", "gaz naturel"], ["biomasse (bois, déchets végétaux)", "uranium (nucléaire)"], ["chaleur du sous-sol (géothermie)", "—"]] },
            { t: "texte", md: "Le pétrole, le charbon et le gaz se sont formés en **des millions d'années** à partir d'êtres vivants enfouis : à notre échelle, ils ne reviendront pas. Le vent, lui, souffle à nouveau demain." },
            { t: "attention", md: "L'**électricité n'est pas une source d'énergie** : c'est une **forme** d'énergie, qu'il faut produire à partir d'une source (vent, uranium, charbon, Soleil…). Elle est renouvelable ou non selon la source utilisée." },
          ],
        },
        {
          titre: "Les formes de l'énergie",
          blocs: [
            { t: "liste", titre: "Les principales formes", items: ["**Cinétique** : énergie d'un objet en mouvement (le vent, une voiture qui roule).", "**Potentielle de position** : énergie d'un objet en hauteur (l'eau retenue par un barrage).", "**Thermique** : liée à la chaleur (un radiateur, l'eau chaude).", "**Électrique** : transportée par le courant.", "**Lumineuse** : transportée par la lumière.", "**Chimique** : stockée dans les aliments, les piles, les carburants.", "**Nucléaire** : stockée au cœur des atomes (uranium)."] },
            { t: "verifie", q: "Quelle forme d'énergie une pile stocke-t-elle ?", choix: ["Électrique", "Chimique", "Thermique", "Lumineuse"], bonne: 1, explication: "La pile stocke de l'énergie chimique ; elle la convertit en énergie électrique quand on la branche dans un circuit." },
          ],
        },
        {
          titre: "Convertir l'énergie : la chaîne énergétique",
          blocs: [
            { t: "propriete", titre: "Conservation de l'énergie", md: "Un appareil ne crée pas d'énergie : il la **convertit** d'une forme en une autre. L'énergie **se conserve** : la somme des énergies en sortie est égale à l'énergie reçue." },
            { t: "schema", titre: "Chaîne énergétique d'une lampe", legende: "La pile alimente la lampe (le convertisseur). Une partie de l'énergie devient lumière utile, le reste chauffe la lampe.", svg: `<svg viewBox="0 0 400 175"><rect class="aplat-papier" x="10" y="68" width="80" height="44" rx="6"/><rect class="trait" x="10" y="68" width="80" height="44" rx="6"/><text class="texte" x="50" y="95" text-anchor="middle">Pile</text><path class="trait" d="M90 90 L158 90" marker-end="url(#fl)"/><text class="texte-petit" x="124" y="82" text-anchor="middle">électrique</text><rect class="aplat" x="160" y="68" width="90" height="44" rx="6"/><rect class="trait" x="160" y="68" width="90" height="44" rx="6"/><text class="texte" x="205" y="95" text-anchor="middle">Lampe</text><path class="trait" d="M250 80 L318 45" marker-end="url(#fl-p)"/><path class="trait" d="M250 100 L318 135" marker-end="url(#fl)"/><text class="texte-pigment" x="324" y="42">lumineuse</text><text class="texte-petit" x="324" y="56">(utile)</text><text class="texte-petit" x="324" y="138">thermique</text><text class="texte-petit" x="324" y="152">(perdue)</text><text class="texte-petit" x="205" y="132" text-anchor="middle">convertisseur</text><text class="texte-petit" x="50" y="132" text-anchor="middle">réservoir</text></svg>` },
            { t: "etapes", titre: "La chaîne énergétique d'un barrage hydroélectrique", items: [{ titre: "Eau retenue", md: "L'eau stockée en hauteur possède de l'énergie **potentielle de position**." }, { titre: "Chute", md: "En descendant dans la conduite, l'eau prend de la vitesse : énergie **cinétique**." }, { titre: "Turbine", md: "L'eau fait tourner la turbine, qui entraîne l'alternateur." }, { titre: "Alternateur", md: "Il convertit l'énergie cinétique en énergie **électrique** (plus un peu de thermique)." }, { titre: "Réseau", md: "Les lignes électriques transportent l'énergie jusqu'aux maisons." }] },
            { t: "exemple", titre: "D'autres conversions", etapes: ["**Panneau photovoltaïque** : énergie lumineuse → énergie électrique.", "**Éolienne** : énergie cinétique du vent → énergie électrique (+ thermique par frottements).", "**Moteur électrique** : reçoit 100 J d'énergie électrique, fournit 80 J d'énergie cinétique. Les 20 J restants n'ont pas disparu : ils sont devenus de l'énergie **thermique** (le moteur chauffe)."] },
          ],
        },
        {
          titre: "Mesurer et économiser l'énergie",
          blocs: [
            { t: "propriete", titre: "Les unités d'énergie", md: "L'unité officielle est le **joule (J)**. Pour l'électricité de la maison, on utilise le **kilowattheure (kWh)** : ==1 kWh = 3 600 000 J==.\nL'énergie consommée se calcule par : **énergie (kWh) = puissance (kW) × durée (h)**." },
            { t: "exemple", titre: "Le radiateur", md: "Un radiateur de 2 kW fonctionne 3 h : E = 2 × 3 = **6 kWh**. Et 2 kWh = 2 × 3 600 000 = **7 200 000 J**." },
            { t: "texte", md: "Économiser l'énergie, c'est éviter les conversions inutiles : **éteindre** les appareils en veille, **isoler** les maisons pour garder la chaleur, choisir des appareils **efficaces** comme les lampes à DEL, qui chauffent beaucoup moins pour le même éclairage." },
            { t: "verifie", q: "Un moteur reçoit 100 J d'énergie électrique et fournit 80 J d'énergie cinétique. Que sont devenus les 20 J restants ?", choix: ["Ils ont disparu", "Ils sont devenus de l'énergie thermique", "Ils sont restés dans la pile"], bonne: 1, explication: "L'énergie se conserve : les 20 J sont transférés sous forme thermique, c'est pourquoi un moteur chauffe." },
          ],
        },
      ],
      bilan: "Source, convertisseur, formes d'énergie : rien ne se crée, rien ne se perd, tout se convertit. Économiser, c'est réduire la part qui part inutilement en chaleur.",
    },
    "5e-physique-chimie-07-circuits-electriques": {
      accroche: "Dans une vieille guirlande de Noël, une seule ampoule grille… et toute la guirlande s'éteint. Chez toi, pourtant, quand une lampe grille, la télévision continue de marcher. Ce n'est pas de la magie : ce sont deux façons de brancher.",
      objectifs: [
        "Reconnaître les dipôles et dessiner leurs symboles normalisés",
        "Distinguer un circuit en série d'un circuit en dérivation",
        "Classer conducteurs et isolants et indiquer le sens conventionnel du courant",
        "Repérer un court-circuit et appliquer les règles de sécurité",
      ],
      sections: [
        {
          titre: "Les dipôles et leurs symboles",
          blocs: [
            { t: "definition", terme: "Dipôle", md: "Un composant électrique qui possède **deux bornes** : pile, lampe, moteur, interrupteur, DEL, résistance. Le **générateur** (la pile) fournit l'énergie électrique ; les **récepteurs** (lampe, moteur…) la reçoivent et la convertissent." },
            { t: "texte", md: "Pour que tout le monde se comprenne, on dessine les circuits avec des **symboles normalisés**, les mêmes dans le monde entier. Les fils sont des traits **droits**, tracés à la règle, avec des angles droits." },
            { t: "schema", titre: "Les symboles normalisés", legende: "Pile : le grand trait est la borne +. DEL : diode électroluminescente, les petites flèches représentent la lumière émise.", svg: `<svg viewBox="0 0 400 200"><line class="trait" x1="20" y1="50" x2="66" y2="50"/><line class="trait" x1="66" y1="30" x2="66" y2="70"/><rect x="72" y="40" width="5" height="20" fill="var(--encre)"/><line class="trait" x1="77" y1="50" x2="120" y2="50"/><text class="texte-petit" x="58" y="28" text-anchor="middle">+</text><text class="texte-petit" x="86" y="36" text-anchor="middle">−</text><text class="texte-petit" x="70" y="95" text-anchor="middle">pile (générateur)</text><line class="trait" x1="150" y1="50" x2="186" y2="50"/><circle class="trait" cx="200" cy="50" r="14"/><line class="trait" x1="190.1" y1="40.1" x2="209.9" y2="59.9"/><line class="trait" x1="190.1" y1="59.9" x2="209.9" y2="40.1"/><line class="trait" x1="214" y1="50" x2="250" y2="50"/><text class="texte-petit" x="200" y="95" text-anchor="middle">lampe</text><line class="trait" x1="280" y1="50" x2="315" y2="50"/><line class="trait" x1="315" y1="50" x2="343" y2="32"/><line class="trait" x1="345" y1="50" x2="380" y2="50"/><text class="texte-petit" x="330" y="95" text-anchor="middle">interrupteur ouvert</text><line class="trait" x1="20" y1="145" x2="56" y2="145"/><circle class="trait" cx="70" cy="145" r="14"/><text class="texte" x="70" y="150" text-anchor="middle">M</text><line class="trait" x1="84" y1="145" x2="120" y2="145"/><text class="texte-petit" x="70" y="185" text-anchor="middle">moteur</text><line class="trait" x1="150" y1="145" x2="191" y2="145"/><path class="trait" d="M191 133 L191 157 L209 145 Z"/><line class="trait" x1="209" y1="133" x2="209" y2="157"/><line class="trait" x1="209" y1="145" x2="250" y2="145"/><path class="trait-fin" d="M199 130 L209 116" marker-end="url(#fl)"/><path class="trait-fin" d="M207 133 L217 119" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="185" text-anchor="middle">DEL</text><line class="trait" x1="280" y1="145" x2="310" y2="145"/><rect class="trait" x="310" y="137" width="40" height="16"/><line class="trait" x1="350" y1="145" x2="380" y2="145"/><text class="texte-petit" x="330" y="185" text-anchor="middle">résistance</text></svg>` },
            { t: "propriete", titre: "Circuit fermé, circuit ouvert", md: "Le courant ne circule que si le circuit forme une **boucle fermée**. Un interrupteur **ouvert** coupe la boucle : plus aucun récepteur ne fonctionne." },
          ],
        },
        {
          titre: "Le circuit en série : une seule boucle",
          blocs: [
            { t: "texte", md: "Dans un circuit **en série**, tous les dipôles sont placés les uns à la suite des autres, sur **une seule boucle**. Le courant n'a qu'un seul chemin : il traverse chaque dipôle tour à tour." },
            { t: "schema", titre: "Deux lampes en série", legende: "Une seule boucle : si L1 est dévissée, la boucle est coupée et L2 s'éteint aussi.", svg: `<svg viewBox="0 0 400 200"><path class="trait" d="M60 95 L60 40 L136 40"/><path class="trait" d="M164 40 L236 40"/><path class="trait" d="M264 40 L340 40 L340 160 L215 160"/><path class="trait" d="M185 160 L60 160 L60 107"/><line class="trait" x1="45" y1="95" x2="75" y2="95"/><rect x="52" y="103" width="16" height="4" fill="var(--encre)"/><text class="texte-petit" x="84" y="99" text-anchor="middle">+</text><text class="texte-petit" x="84" y="114" text-anchor="middle">−</text><text class="texte-petit" x="34" y="104" text-anchor="end">pile</text><circle class="trait" cx="150" cy="40" r="14"/><line class="trait" x1="140.1" y1="30.1" x2="159.9" y2="49.9"/><line class="trait" x1="140.1" y1="49.9" x2="159.9" y2="30.1"/><circle class="trait" cx="250" cy="40" r="14"/><line class="trait" x1="240.1" y1="30.1" x2="259.9" y2="49.9"/><line class="trait" x1="240.1" y1="49.9" x2="259.9" y2="30.1"/><text class="texte" x="150" y="18" text-anchor="middle">L1</text><text class="texte" x="250" y="18" text-anchor="middle">L2</text><line class="trait" x1="185" y1="160" x2="215" y2="160"/><circle class="aplat-papier" cx="185" cy="160" r="3"/><circle class="trait-fin" cx="185" cy="160" r="3"/><circle class="aplat-papier" cx="215" cy="160" r="3"/><circle class="trait-fin" cx="215" cy="160" r="3"/><text class="texte-petit" x="200" y="182" text-anchor="middle">interrupteur fermé</text><path d="M86 28 L120 28" stroke="var(--pigment)" fill="none" marker-end="url(#fl-p)"/><text class="texte-pigment" x="103" y="22" text-anchor="middle">I</text><path d="M354 85 L354 118" stroke="var(--pigment)" fill="none" marker-end="url(#fl-p)"/></svg>` },
            { t: "liste", titre: "Ce qu'on observe en série", items: ["Si un dipôle est débranché ou grillé, **tout s'éteint** : la boucle est ouverte.", "Plus on ajoute de lampes, **moins elles brillent**.", "L'ordre des dipôles ne change rien : deux lampes identiques brillent **pareil**, où qu'elles soient."] },
            { t: "attention", md: "Le courant ne « s'use » pas en traversant une lampe ! Dans un circuit en série, la lampe proche de la borne + ne brille pas plus que l'autre : le courant est **le même partout** dans la boucle." },
            { t: "verifie", q: "Deux lampes sont branchées en série. On dévisse l'une d'elles. Que se passe-t-il ?", choix: ["L'autre brille plus fort", "L'autre s'éteint aussi", "Rien ne change pour l'autre"], bonne: 1, explication: "En série, il n'y a qu'une boucle. Dévisser une lampe ouvre cette boucle : le courant ne circule plus, l'autre lampe s'éteint." },
          ],
        },
        {
          titre: "Le circuit en dérivation : plusieurs boucles",
          blocs: [
            { t: "texte", md: "Dans un circuit **en dérivation**, les récepteurs sont sur des **branches** différentes, reliées en deux points appelés **nœuds**. Chaque lampe forme sa propre boucle avec la pile." },
            { t: "schema", titre: "Deux lampes en dérivation", legende: "Chaque lampe a sa propre boucle avec la pile : si L1 est dévissée, L2 continue de briller.", svg: `<svg viewBox="0 0 400 215"><path class="trait" d="M60 105 L60 40 L340 40 L340 96"/><path class="trait" d="M340 124 L340 180 L60 180 L60 117"/><path class="trait" d="M200 40 L200 96"/><path class="trait" d="M200 124 L200 180"/><line class="trait" x1="45" y1="105" x2="75" y2="105"/><rect x="52" y="113" width="16" height="4" fill="var(--encre)"/><text class="texte-petit" x="84" y="109" text-anchor="middle">+</text><text class="texte-petit" x="84" y="124" text-anchor="middle">−</text><text class="texte-petit" x="34" y="114" text-anchor="end">pile</text><circle class="trait" cx="200" cy="110" r="14"/><line class="trait" x1="190.1" y1="100.1" x2="209.9" y2="119.9"/><line class="trait" x1="190.1" y1="119.9" x2="209.9" y2="100.1"/><circle class="trait" cx="340" cy="110" r="14"/><line class="trait" x1="330.1" y1="100.1" x2="349.9" y2="119.9"/><line class="trait" x1="330.1" y1="119.9" x2="349.9" y2="100.1"/><text class="texte" x="222" y="115">L1</text><text class="texte" x="362" y="115">L2</text><circle cx="200" cy="40" r="3.5" fill="var(--encre)"/><circle cx="200" cy="180" r="3.5" fill="var(--encre)"/><text class="texte-petit" x="200" y="30" text-anchor="middle">nœud</text><text class="texte-petit" x="200" y="198" text-anchor="middle">nœud</text><path d="M86 28 L120 28" stroke="var(--pigment)" fill="none" marker-end="url(#fl-p)"/><text class="texte-pigment" x="103" y="22" text-anchor="middle">I</text></svg>` },
            { t: "propriete", titre: "Indépendance des branches", md: "En dérivation, chaque récepteur fonctionne **indépendamment** des autres. C'est ainsi que sont branchés les appareils d'une **maison** : tu peux éteindre ta lampe sans couper le réfrigérateur." },
            { t: "exemple", titre: "Série ou dérivation ?", md: "Compte les boucles qui passent par la pile. **Une seule** boucle : série. **Plusieurs** boucles, avec des nœuds : dérivation. La guirlande de l'accroche était en série ; les prises de ta maison sont en dérivation." },
          ],
        },
        {
          titre: "Conducteurs, isolants et sens du courant",
          blocs: [
            { t: "tableau", titre: "Qui laisse passer le courant ?", entetes: ["Conducteurs", "Isolants"], lignes: [["cuivre, fer, aluminium (tous les métaux)", "plastique, caoutchouc"], ["graphite (mine de crayon)", "verre, bois sec"], ["eau du robinet, corps humain", "air"]] },
            { t: "propriete", titre: "Sens conventionnel du courant", md: "À l'extérieur du générateur, le courant circule de la borne **+** vers la borne **−**. On l'indique par une flèche sur un fil." },
            { t: "texte", md: "Une **DEL** (diode électroluminescente) ne laisse passer le courant **que dans un sens** : celui de la pointe du triangle. Si elle ne s'allume pas, retourne-la : elle était sans doute branchée à l'envers." },
            { t: "verifie", q: "Une DEL ne s'allume pas. On la retourne et elle s'allume. Pourquoi ?", choix: ["Elle était grillée", "Elle ne laisse passer le courant que dans un sens", "La pile était vide"], bonne: 1, explication: "La DEL est un dipôle qui ne laisse passer le courant que dans un sens. Branchée à l'envers, elle bloque le courant." },
          ],
        },
        {
          titre: "Le court-circuit et la sécurité",
          blocs: [
            { t: "definition", terme: "Court-circuit", md: "On court-circuite un dipôle quand on relie ses deux bornes par un simple fil. Le courant prend ce chemin facile et **ne passe plus par le dipôle**." },
            { t: "texte", md: "Si on relie les deux bornes d'une lampe allumée par un fil, la lampe **s'éteint** : elle est court-circuitée. Mais si on court-circuite le **générateur** lui-même, le courant devient très intense : les fils et la pile **chauffent fortement**, avec un risque de brûlure et d'**incendie**." },
            { t: "attention", md: "Ne relie **jamais** directement les deux bornes d'une pile par un fil, et ne touche jamais un appareil branché sur le secteur avec les mains mouillées : l'eau du robinet et le corps humain conduisent le courant, c'est le risque d'**électrocution**. Ne joue jamais avec les prises : le secteur (230 V) peut tuer." },
          ],
        },
      ],
      bilan: "Une boucle, c'est la série : un maillon cassé et tout s'arrête. Plusieurs boucles, c'est la dérivation : chacun pour soi. Dans tous les cas, le courant va du + au −, et on ne court-circuite jamais la pile.",
    },
    "5e-physique-chimie-08-la-lumiere": {
      accroche: "Quand tu regardes une étoile, tu ne la vois pas telle qu'elle est aujourd'hui : sa lumière a voyagé des années, parfois des milliers d'années, avant d'atteindre tes yeux. Certaines ont peut-être déjà disparu !",
      objectifs: [
        "Distinguer une source primaire d'un objet diffusant",
        "Expliquer les ombres par la propagation rectiligne de la lumière",
        "Expliquer les éclipses de Soleil et de Lune",
        "Utiliser la vitesse de la lumière et l'année-lumière",
      ],
      sections: [
        {
          titre: "Sources de lumière et objets diffusants",
          blocs: [
            { t: "tableau", titre: "Deux familles d'objets lumineux", entetes: ["", "Source primaire", "Objet diffusant"], lignes: [["Définition", "produit sa propre lumière", "renvoie dans toutes les directions la lumière qu'il reçoit"], ["Exemples", "Soleil, étoiles, flamme, lampe allumée", "Lune, planètes, mur, livre, ton visage"], ["Dans le noir complet", "reste visible", "devient invisible"]] },
            { t: "propriete", titre: "Condition pour voir un objet", md: "On voit un objet quand de la **lumière venant de cet objet entre dans l'œil**. L'œil ne fait que recevoir la lumière : il n'en envoie pas." },
            { t: "attention", md: "La Lune ne produit **aucune** lumière. On la voit la nuit parce qu'elle **diffuse** la lumière du Soleil vers la Terre. Elle est un objet diffusant, pas une source primaire." },
            { t: "verifie", q: "Pourquoi voit-on un livre posé sur une table éclairée ?", choix: ["Il produit sa propre lumière", "Il diffuse vers nos yeux la lumière qu'il reçoit", "Nos yeux envoient de la lumière sur lui"], bonne: 1, explication: "Le livre est un objet diffusant : il renvoie dans toutes les directions la lumière de la lampe, et une partie entre dans nos yeux." },
          ],
        },
        {
          titre: "La lumière va en ligne droite",
          blocs: [
            { t: "propriete", titre: "Propagation rectiligne", md: "Dans un milieu **transparent et homogène** (air, eau, vide), la lumière se propage **en ligne droite**. On la représente par un **rayon lumineux** : une droite munie d'une flèche qui indique le sens de propagation." },
            { t: "texte", md: "Tu l'as déjà vu : les faisceaux de soleil qui traversent les nuages ou le faisceau d'une lampe torche dans le brouillard sont bien droits. Ce qu'on voit alors, ce sont les poussières ou gouttelettes qui diffusent la lumière." },
            { t: "attention", md: "Un rayon lumineux est un **modèle** : un trait qu'on dessine. Dans de l'air parfaitement pur, on ne voit pas un faisceau de côté, car aucune lumière n'est renvoyée vers nos yeux." },
          ],
        },
        {
          titre: "Ombre propre, ombre portée",
          blocs: [
            { t: "texte", md: "Un objet **opaque** ne laisse pas passer la lumière. Placé devant une source, il crée derrière lui une zone que la lumière ne peut pas atteindre, puisqu'elle ne contourne pas les obstacles : elle va tout droit." },
            { t: "schema", titre: "Une balle éclairée par une petite lampe", legende: "Les deux rayons qui frôlent la balle délimitent le cône d'ombre. Sa trace sur l'écran est l'ombre portée.", svg: `<svg viewBox="0 0 400 222"><path class="aplat" d="M163.1 80.8 L360 34.1 L360 185.9 L163.1 139.2 Z"/><rect class="aplat-fort" x="356" y="34" width="8" height="152"/><line class="trait" x1="360" y1="15" x2="360" y2="205"/><path class="trait-fin" d="M40 110 L357 34.8" marker-end="url(#fl)"/><path class="trait-fin" d="M40 110 L357 185.2" marker-end="url(#fl)"/><circle class="aplat-papier" cx="170" cy="110" r="30"/><path class="aplat-fort" d="M163.1 80.8 A30 30 0 1 1 163.1 139.2 Z"/><circle class="trait" cx="170" cy="110" r="30"/><circle cx="40" cy="110" r="8" fill="var(--pigment)"/><line class="trait-fin" x1="40" y1="94" x2="40" y2="88"/><line class="trait-fin" x1="24" y1="110" x2="18" y2="110"/><line class="trait-fin" x1="40" y1="126" x2="40" y2="132"/><line class="trait-fin" x1="29" y1="99" x2="25" y2="95"/><line class="trait-fin" x1="29" y1="121" x2="25" y2="125"/><text class="texte-petit" x="40" y="150" text-anchor="middle">source</text><text class="texte-petit" x="150" y="62" text-anchor="middle">objet opaque</text><text class="texte-petit" x="280" y="114" text-anchor="middle">cône d'ombre</text><line class="trait-fin" x1="190" y1="132" x2="203" y2="166"/><text class="texte-petit" x="205" y="180" text-anchor="middle">ombre propre</text><text class="texte-petit" x="350" y="24" text-anchor="end">ombre portée</text><text class="texte-petit" x="360" y="218" text-anchor="middle">écran</text></svg>` },
            { t: "liste", items: ["**Ombre propre** : la face de l'objet qui n'est pas éclairée.", "**Ombre portée** : la zone sombre sur l'écran.", "**Cône d'ombre** : l'espace non éclairé entre l'objet et l'écran."] },
            { t: "exemple", titre: "On rapproche la balle de la lampe", md: "Les rayons qui frôlent la balle s'écartent davantage : le cône d'ombre s'ouvre et l'**ombre portée grandit**. Si on éloigne la balle vers l'écran, l'ombre rétrécit. Fais l'essai avec ta main devant une lampe de poche !" },
          ],
        },
        {
          titre: "Les éclipses, des ombres géantes",
          blocs: [
            { t: "texte", md: "Le Soleil éclaire la Terre et la Lune, qui ont donc chacune un cône d'ombre derrière elles. Quand les trois astres sont **alignés**, l'un entre dans l'ombre de l'autre : c'est une **éclipse**." },
            { t: "schema", titre: "Éclipse de Soleil et éclipse de Lune", legende: "Distances et tailles non respectées. L'astre du milieu fait de l'ombre au troisième.", svg: `<svg viewBox="0 0 400 225"><text class="texte" x="220" y="18" text-anchor="middle">Éclipse de Soleil : Soleil, Lune, Terre</text><circle cx="30" cy="60" r="30" fill="var(--pigment)"/><path class="aplat-fort" d="M200 54 L200 66 L312 61 L312 59 Z"/><circle class="aplat-papier" cx="200" cy="60" r="6"/><circle class="trait" cx="200" cy="60" r="6"/><circle class="aplat" cx="330" cy="60" r="18"/><circle class="trait" cx="330" cy="60" r="18"/><text class="texte-petit" x="30" y="108" text-anchor="middle">Soleil</text><text class="texte-petit" x="200" y="84" text-anchor="middle">Lune</text><text class="texte-petit" x="330" y="96" text-anchor="middle">Terre</text><text class="texte-petit" x="256" y="52" text-anchor="middle">ombre de la Lune</text><text class="texte" x="220" y="128" text-anchor="middle">Éclipse de Lune : Soleil, Terre, Lune</text><circle cx="30" cy="170" r="30" fill="var(--pigment)"/><path class="aplat" d="M200 152 L200 188 L390 174 L390 166 Z"/><circle class="aplat" cx="200" cy="170" r="18"/><circle class="trait" cx="200" cy="170" r="18"/><circle class="aplat-fort" cx="330" cy="170" r="6"/><circle class="trait" cx="330" cy="170" r="6"/><text class="texte-petit" x="30" y="218" text-anchor="middle">Soleil</text><text class="texte-petit" x="200" y="206" text-anchor="middle">Terre</text><text class="texte-petit" x="330" y="198" text-anchor="middle">Lune</text><text class="texte-petit" x="300" y="152" text-anchor="middle">ombre de la Terre</text></svg>` },
            { t: "propriete", titre: "Les deux éclipses", md: "**Éclipse de Soleil** : la **Lune** passe entre le Soleil et la Terre ; son ombre tombe sur une petite zone de la Terre.\n**Éclipse de Lune** : la **Terre** passe entre le Soleil et la Lune ; la Lune entre dans l'ombre de la Terre." },
            { t: "attention", md: "Une éclipse de Soleil n'est **pas visible partout** en même temps : l'ombre de la Lune est petite et ne couvre qu'une bande de la Terre. Une éclipse de Lune, elle, est visible depuis toute la moitié de la Terre où il fait nuit." },
            { t: "verifie", q: "Lors d'une éclipse de Lune, quel astre se trouve au milieu ?", choix: ["Le Soleil", "La Terre", "La Lune"], bonne: 1, explication: "C'est la Terre qui se place entre le Soleil et la Lune : la Lune entre dans le cône d'ombre de la Terre." },
          ],
        },
        {
          titre: "La lumière voyage très vite… mais pas instantanément",
          blocs: [
            { t: "propriete", titre: "Vitesse de la lumière", md: "Dans le vide, la lumière se propage à environ **300 000 km/s**. Une **année-lumière** (al) est la *distance* parcourue par la lumière en un an : près de **10 000 milliards de km**." },
            { t: "exemple", titre: "Combien de temps met la lumière du Soleil ?", etapes: ["Distance Terre-Soleil : d = 150 000 000 km.", "On utilise t = d / v = 150 000 000 ÷ 300 000.", "t = **500 s**, soit environ 8 min 20 s."] },
            { t: "texte", md: "Regarder loin, c'est donc **regarder dans le passé**. L'étoile Proxima du Centaure est à 4,2 années-lumière : sa lumière met 4,2 ans pour arriver. Si elle s'éteignait aujourd'hui, on la verrait encore briller pendant 4,2 ans !" },
            { t: "attention", md: "Malgré son nom, l'année-lumière n'est **pas une durée** : c'est une **distance**, utilisée pour les astres très lointains." },
          ],
        },
      ],
      bilan: "La lumière part d'une source, va tout droit à 300 000 km/s, rebondit sur les objets diffusants et entre dans nos yeux ; là où elle ne peut pas aller, c'est l'ombre, jusqu'à celle qui cache le Soleil lors d'une éclipse.",
    },
    "5e-physique-chimie-09-systeme-solaire-et-sons": {
      accroche: "Dans les films, les vaisseaux spatiaux explosent dans un fracas énorme. En réalité, dans l'espace, une explosion se ferait dans un silence total. Et la Lune, qui semble changer de forme chaque soir, reste pourtant toujours une boule parfaitement ronde.",
      objectifs: [
        "Décrire l'organisation du système solaire et citer les planètes dans l'ordre",
        "Distinguer étoile, planète et satellite",
        "Expliquer les phases de la Lune",
        "Décrire comment un son est émis et se propage",
      ],
      sections: [
        {
          titre: "Le Soleil et ses huit planètes",
          blocs: [
            { t: "texte", md: "Le **système solaire** est formé d'une étoile, le **Soleil**, et de tout ce qui tourne autour d'elle : huit planètes, leurs satellites, des astéroïdes et des comètes. Toutes ces planètes sont retenues par la **gravitation** du Soleil." },
            { t: "schema", titre: "Les planètes dans l'ordre", legende: "Tailles et distances non respectées : en réalité, Neptune est 30 fois plus loin du Soleil que la Terre.", svg: `<svg viewBox="0 0 400 160"><circle cx="-40" cy="80" r="70" fill="var(--pigment)"/><text class="texte-petit" x="2" y="156">Soleil</text><line class="pointille" x1="150" y1="25" x2="150" y2="125"/><circle class="aplat-fort" cx="55" cy="80" r="3"/><circle class="aplat" cx="80" cy="80" r="5"/><circle class="trait-fin" cx="80" cy="80" r="5"/><circle class="aplat" cx="105" cy="80" r="5"/><circle class="trait-fin" cx="105" cy="80" r="5"/><circle class="aplat-fort" cx="128" cy="80" r="4"/><circle class="aplat" cx="175" cy="80" r="17"/><circle class="trait" cx="175" cy="80" r="17"/><circle class="aplat" cx="228" cy="80" r="13"/><circle class="trait" cx="228" cy="80" r="13"/><ellipse class="trait-fin" cx="228" cy="80" rx="24" ry="5"/><circle class="aplat" cx="280" cy="80" r="9"/><circle class="trait" cx="280" cy="80" r="9"/><circle class="aplat" cx="330" cy="80" r="9"/><circle class="trait" cx="330" cy="80" r="9"/><text class="texte-petit" x="55" y="62" text-anchor="middle">Mercure</text><text class="texte-petit" x="80" y="104" text-anchor="middle">Vénus</text><text class="texte-petit" x="105" y="62" text-anchor="middle">Terre</text><text class="texte-petit" x="128" y="104" text-anchor="middle">Mars</text><text class="texte-petit" x="175" y="52" text-anchor="middle">Jupiter</text><text class="texte-petit" x="228" y="108" text-anchor="middle">Saturne</text><text class="texte-petit" x="280" y="64" text-anchor="middle">Uranus</text><text class="texte-petit" x="330" y="104" text-anchor="middle">Neptune</text><text class="texte-petit" x="95" y="142" text-anchor="middle">planètes rocheuses</text><text class="texte-petit" x="265" y="142" text-anchor="middle">planètes géantes gazeuses</text></svg>` },
            { t: "astuce", md: "Pour retenir l'ordre : « **Me V**oici **T**out **M**ouillé, **J**'ai **S**uivi **U**n **N**uage » : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune." },
            { t: "savais-tu", md: "**Jupiter** est la plus grosse planète : on pourrait y loger plus de 1 300 Terres ! Pluton, longtemps considérée comme la neuvième planète, est classée depuis 2006 parmi les **planètes naines**." },
          ],
        },
        {
          titre: "Étoile, planète ou satellite ?",
          blocs: [
            { t: "tableau", titre: "Trois sortes d'astres", entetes: ["Astre", "Ce qu'il fait", "Exemples"], lignes: [["**Étoile**", "produit sa propre lumière (source primaire)", "le Soleil, Sirius"], ["**Planète**", "tourne autour d'une étoile et diffuse sa lumière", "la Terre, Vénus, Jupiter"], ["**Satellite**", "tourne autour d'une planète", "la Lune (satellite naturel de la Terre)"]] },
            { t: "texte", md: "Le Soleil est une **étoile** comme celles qui scintillent la nuit : il nous paraît énorme et éblouissant seulement parce qu'il est beaucoup plus proche. Quand tu vois **Vénus** briller dans le ciel du soir, c'est qu'elle **diffuse** la lumière du Soleil, comme un miroir lointain." },
            { t: "verifie", q: "Pourquoi voit-on la planète Vénus briller dans le ciel du soir ?", choix: ["Elle produit sa propre lumière", "Elle diffuse la lumière du Soleil", "Elle reflète la lumière de la Lune"], bonne: 1, explication: "Une planète ne produit pas de lumière : Vénus est éclairée par le Soleil et en renvoie une partie vers la Terre." },
          ],
        },
        {
          titre: "Les phases de la Lune",
          blocs: [
            { t: "texte", md: "La Lune tourne autour de la Terre en environ **un mois** (29,5 jours entre deux pleines Lunes). Le Soleil éclaire toujours **la moitié** de la Lune tournée vers lui. Mais selon la position de la Lune, nous voyons depuis la Terre une partie plus ou moins grande de cette moitié éclairée : ce sont les **phases**." },
            { t: "schema", titre: "Pourquoi la Lune change d'aspect", legende: "À gauche, vue de dessus : la Lune tourne dans le sens 1 → 2 → 3 → 4. À droite, ce que l'on voit depuis la France.", svg: `<svg viewBox="0 0 400 250"><text class="texte-petit" x="8" y="22">lumière</text><text class="texte-petit" x="8" y="34">du Soleil</text><path d="M5 50 L40 50" stroke="var(--pigment)" fill="none" marker-end="url(#fl-p)"/><path d="M5 95 L40 95" stroke="var(--pigment)" fill="none" marker-end="url(#fl-p)"/><path d="M5 165 L40 165" stroke="var(--pigment)" fill="none" marker-end="url(#fl-p)"/><path d="M5 210 L40 210" stroke="var(--pigment)" fill="none" marker-end="url(#fl-p)"/><circle class="pointille" cx="130" cy="130" r="70" fill="none"/><path class="trait" d="M64.2 153.9 A70 70 0 0 0 106.1 195.8" marker-end="url(#fl)"/><circle class="aplat" cx="130" cy="130" r="14"/><circle class="trait" cx="130" cy="130" r="14"/><text class="texte-petit" x="130" y="162" text-anchor="middle">Terre</text><path class="aplat-papier" d="M60 119 A11 11 0 0 0 60 141 Z"/><path class="aplat-fort" d="M60 119 A11 11 0 0 1 60 141 Z"/><circle class="trait" cx="60" cy="130" r="11"/><path class="aplat-papier" d="M130 189 A11 11 0 0 0 130 211 Z"/><path class="aplat-fort" d="M130 189 A11 11 0 0 1 130 211 Z"/><circle class="trait" cx="130" cy="200" r="11"/><path class="aplat-papier" d="M200 119 A11 11 0 0 0 200 141 Z"/><path class="aplat-fort" d="M200 119 A11 11 0 0 1 200 141 Z"/><circle class="trait" cx="200" cy="130" r="11"/><path class="aplat-papier" d="M130 49 A11 11 0 0 0 130 71 Z"/><path class="aplat-fort" d="M130 49 A11 11 0 0 1 130 71 Z"/><circle class="trait" cx="130" cy="60" r="11"/><text class="texte" x="44" y="135" text-anchor="end">1</text><text class="texte" x="130" y="232" text-anchor="middle">2</text><text class="texte" x="216" y="135">3</text><text class="texte" x="130" y="40" text-anchor="middle">4</text><text class="texte-petit" x="310" y="30" text-anchor="middle">vu depuis la Terre</text><circle class="aplat-fort" cx="258" cy="60" r="12"/><circle class="trait" cx="258" cy="60" r="12"/><path class="aplat-fort" d="M258 98 A12 12 0 0 0 258 122 Z"/><path class="aplat-papier" d="M258 98 A12 12 0 0 1 258 122 Z"/><circle class="trait" cx="258" cy="110" r="12"/><circle class="aplat-papier" cx="258" cy="160" r="12"/><circle class="trait" cx="258" cy="160" r="12"/><path class="aplat-papier" d="M258 198 A12 12 0 0 0 258 222 Z"/><path class="aplat-fort" d="M258 198 A12 12 0 0 1 258 222 Z"/><circle class="trait" cx="258" cy="210" r="12"/><text class="texte-petit" x="276" y="64">1. nouvelle Lune</text><text class="texte-petit" x="276" y="114">2. premier quartier</text><text class="texte-petit" x="276" y="164">3. pleine Lune</text><text class="texte-petit" x="276" y="214">4. dernier quartier</text></svg>` },
            { t: "liste", titre: "Le cycle complet, en partant de la nouvelle Lune", ordonnee: true, items: ["nouvelle Lune (invisible)", "premier croissant", "premier quartier", "gibbeuse croissante", "pleine Lune", "gibbeuse décroissante", "dernier quartier", "dernier croissant"] },
            { t: "attention", md: "Les phases ne sont **pas** l'ombre de la Terre sur la Lune ! L'ombre de la Terre ne touche la Lune que lors d'une éclipse de Lune, quelques fois par an. Les phases viennent seulement de **l'angle sous lequel on voit** la moitié éclairée." },
            { t: "verifie", q: "Pourquoi la Lune change-t-elle d'aspect au cours du mois ?", choix: ["La Terre lui fait de l'ombre", "On voit une partie plus ou moins grande de sa moitié éclairée", "Des nuages la cachent en partie"], bonne: 1, explication: "La moitié tournée vers le Soleil est toujours éclairée ; en tournant autour de la Terre, la Lune nous montre une part plus ou moins grande de cette moitié." },
          ],
        },
        {
          titre: "Le son : une vibration qui voyage",
          blocs: [
            { t: "propriete", titre: "Émission et propagation du son", md: "Un son est produit par un objet qui **vibre** : corde de guitare, membrane de tambour, cordes vocales. Il a besoin d'un **milieu matériel** (air, eau, solide) pour se propager : il ne se propage **pas dans le vide**." },
            { t: "etapes", titre: "Du tambour à ton oreille", items: [{ titre: "Vibration", md: "La peau du tambour frappée vibre très vite." }, { titre: "Propagation", md: "Elle pousse les particules d'air voisines, qui poussent leurs voisines : la vibration avance de proche en proche." }, { titre: "Réception", md: "La vibration fait vibrer ton **tympan**." }, { titre: "Perception", md: "Le nerf auditif transmet un message au cerveau : tu entends." }] },
            { t: "texte", md: "Voilà pourquoi l'explosion de l'accroche serait silencieuse : dans l'espace, c'est le **vide**, il n'y a pas de particules pour transmettre la vibration." },
            { t: "tableau", titre: "Les caractéristiques d'un son", entetes: ["Le son est…", "La vibration est…", "Grandeur liée"], lignes: [["**aigu**", "rapide", "fréquence élevée"], ["**grave**", "lente", "fréquence basse"], ["**fort**", "de grande amplitude", "amplitude"], ["**faible**", "de petite amplitude", "amplitude"]] },
            { t: "exemple", titre: "À quelle distance est l'orage ?", md: "Le son se propage dans l'air à environ **340 m/s**, presque un million de fois moins vite que la lumière : on voit l'éclair presque instantanément, le tonnerre arrive après. Tonnerre entendu **5 s** après l'éclair : d = v × t = 340 × 5 = **1 700 m**." },
          ],
        },
      ],
      bilan: "Autour du Soleil tournent huit planètes, de Mercure à Neptune ; la Lune nous montre plus ou moins sa moitié éclairée. Et sur Terre, chaque son est une vibration qui voyage à 340 m/s dans l'air, jamais dans le vide.",
    },
    "5e-physique-chimie-10-demarche-scientifique-et-mesures": {
      accroche: "En hiver, on répand du sel sur les routes verglacées. Le sel fait-il vraiment fondre la glace plus vite ? Au lieu de croire ou de deviner, un scientifique fait une chose simple : il teste.",
      objectifs: [
        "Suivre les étapes d'une démarche expérimentale",
        "Reconnaître la verrerie et lire correctement une éprouvette",
        "Estimer la précision d'une mesure",
        "Appliquer les règles de sécurité au laboratoire",
      ],
      sections: [
        {
          titre: "La démarche scientifique",
          blocs: [
            { t: "etapes", titre: "Les étapes de la démarche", items: [{ titre: "Question", md: "On part d'un problème : « Le sel fait-il fondre la glace plus vite ? »" }, { titre: "Hypothèse", md: "On propose une réponse **provisoire** : « Oui, le glaçon salé fondra plus vite. »" }, { titre: "Protocole", md: "On décrit précisément l'expérience qui permettra de tester l'hypothèse." }, { titre: "Expérience", md: "On réalise le protocole avec soin." }, { titre: "Résultats", md: "On note les observations et les mesures, sans les arranger." }, { titre: "Conclusion", md: "On valide ou on rejette l'hypothèse." }] },
            { t: "definition", terme: "Hypothèse", md: "Une réponse provisoire à une question, que l'expérience permet de **tester**. Ce n'est ni une certitude, ni une simple opinion." },
            { t: "attention", md: "Si l'expérience contredit l'hypothèse, l'expérience n'est **pas ratée** ! On a appris quelque chose : l'hypothèse était fausse. Une hypothèse rejetée fait aussi avancer la science." },
          ],
        },
        {
          titre: "Un bon protocole : ne changer qu'une chose",
          blocs: [
            { t: "texte", md: "Pour savoir si un facteur a un effet, on compare deux expériences **identiques en tout point, sauf un** : le facteur testé. Sinon, impossible de savoir ce qui a causé la différence." },
            { t: "exemple", titre: "Le glaçon salé", etapes: ["Deux glaçons **identiques**, sortis du même bac.", "On sale l'un, pas l'autre : c'est la **seule** différence.", "On les pose côte à côte, à la même température, et on chronomètre.", "Résultat : le glaçon salé fond en premier.", "Conclusion : l'hypothèse est **validée**."] },
            { t: "verifie", q: "On veut savoir si la température de l'eau influence la vitesse de dissolution du sucre. Quel protocole est correct ?", choix: ["Eau froide avec 1 sucre, eau chaude avec 3 sucres", "Même volume d'eau et même sucre, une eau froide et une eau chaude", "Eau chaude dans un bécher, eau froide dans une éprouvette, sucres différents"], bonne: 1, explication: "On ne fait varier que la température : même quantité d'eau, même sucre, même agitation. Ainsi, la différence observée vient forcément de la température." },
          ],
        },
        {
          titre: "La verrerie et la lecture d'un volume",
          blocs: [
            { t: "schema", titre: "La verrerie courante", legende: "Chaque récipient a son rôle : on ne mesure pas un volume précis avec un bécher.", svg: `<svg viewBox="0 0 400 200"><rect class="aplat" x="16" y="120" width="48" height="40"/><path class="trait" d="M10 55 L15 60 L15 160 L65 160 L65 60"/><path class="aplat" d="M92.9 135 L137.1 135 L145 160 L85 160 Z"/><path class="trait" d="M107 50 L107 90 L85 160 L145 160 L123 90 L123 50"/><rect class="aplat" x="181" y="95" width="18" height="60"/><path class="trait" d="M180 30 L180 155 L200 155 L200 30"/><rect class="trait" x="168" y="155" width="44" height="6"/><line class="trait-fin" x1="180" y1="50" x2="186" y2="50"/><line class="trait-fin" x1="180" y1="70" x2="186" y2="70"/><line class="trait-fin" x1="180" y1="90" x2="186" y2="90"/><line class="trait-fin" x1="180" y1="110" x2="186" y2="110"/><line class="trait-fin" x1="180" y1="130" x2="186" y2="130"/><path class="aplat" d="M258 115 L258 140 A7 7 0 0 0 272 140 L272 115 Z"/><path class="trait" d="M257 50 L257 140 A8 8 0 0 0 273 140 L273 50"/><path class="aplat" d="M314.6 135 A32 32 0 0 0 375.4 135 Z"/><circle class="trait" cx="345" cy="125" r="32"/><path class="trait" d="M337 50 L337 94 M353 50 L353 94"/><text class="texte-petit" x="40" y="185" text-anchor="middle">bécher</text><text class="texte-petit" x="115" y="185" text-anchor="middle">erlenmeyer</text><text class="texte-petit" x="190" y="185" text-anchor="middle">éprouvette</text><text class="texte-petit" x="265" y="185" text-anchor="middle">tube à essai</text><text class="texte-petit" x="345" y="185" text-anchor="middle">ballon</text></svg>` },
            { t: "tableau", titre: "À chaque verrerie son usage", entetes: ["Verrerie", "Usage principal"], lignes: [["Bécher", "contenir, mélanger, chauffer (graduations approximatives)"], ["Erlenmeyer", "agiter sans éclabousser grâce à son col étroit"], ["Éprouvette graduée", "**mesurer** un volume de liquide"], ["Tube à essai", "réaliser une expérience sur de petites quantités"], ["Ballon", "chauffer longtemps, distiller"]] },
            { t: "schema", titre: "Bien lire une éprouvette", legende: "L'œil à la hauteur de la surface, on lit le bas du ménisque : ici 46 mL.", svg: `<svg viewBox="0 0 400 215"><path class="aplat" d="M151 86 Q200 110 249 86 L249 190 L151 190 Z"/><path class="trait-fin" d="M151 86 Q200 110 249 86"/><path class="trait" d="M150 20 L150 190 L250 190 L250 20"/><line class="trait-fin" x1="232" y1="170" x2="249" y2="170"/><line class="trait-fin" x1="240" y1="158" x2="249" y2="158"/><line class="trait-fin" x1="240" y1="146" x2="249" y2="146"/><line class="trait-fin" x1="240" y1="134" x2="249" y2="134"/><line class="trait-fin" x1="240" y1="122" x2="249" y2="122"/><line class="trait-fin" x1="232" y1="110" x2="249" y2="110"/><line class="trait-fin" x1="240" y1="98" x2="249" y2="98"/><line class="trait-fin" x1="240" y1="86" x2="249" y2="86"/><line class="trait-fin" x1="240" y1="74" x2="249" y2="74"/><line class="trait-fin" x1="240" y1="62" x2="249" y2="62"/><line class="trait-fin" x1="232" y1="50" x2="249" y2="50"/><text class="texte-petit" x="258" y="174">40</text><text class="texte-petit" x="258" y="114">45</text><text class="texte-petit" x="258" y="54">50 mL</text><ellipse class="trait-fin" cx="100" cy="50" rx="10" ry="6"/><circle cx="100" cy="50" r="3" fill="var(--encre)"/><ellipse class="trait-fin" cx="100" cy="98" rx="10" ry="6"/><circle cx="100" cy="98" r="3" fill="var(--encre)"/><ellipse class="trait-fin" cx="100" cy="150" rx="10" ry="6"/><circle cx="100" cy="150" r="3" fill="var(--encre)"/><line class="pointille" x1="112" y1="50" x2="200" y2="98"/><line class="trait" x1="112" y1="98" x2="200" y2="98"/><line class="pointille" x1="112" y1="150" x2="200" y2="98"/><text class="texte-petit" x="12" y="54">trop haut</text><text class="texte-pigment" x="12" y="102">bien placé</text><text class="texte-petit" x="12" y="154">trop bas</text><path class="trait-fin" d="M200 128 L200 104" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="140" text-anchor="middle">bas du ménisque</text><text class="texte-main" x="200" y="210" text-anchor="middle">lecture : 46 mL</text></svg>` },
            { t: "texte", md: "La surface de l'eau dans une éprouvette n'est pas plate : elle se courbe en remontant le long du verre. Cette courbure s'appelle le **ménisque**. On lit toujours le **bas** du ménisque, l'œil placé **à sa hauteur** ; sinon, on lit trop haut ou trop bas. Pour mesurer précisément 25 mL, on choisit une **éprouvette graduée**, pas un bécher." },
          ],
        },
        {
          titre: "Toute mesure a une incertitude",
          blocs: [
            { t: "propriete", titre: "L'incertitude de mesure", md: "Aucune mesure n'est parfaitement exacte, même faite avec soin. L'incertitude dépend de l'**instrument** (en général une demi-graduation) et de l'**opérateur**. Pour s'en approcher, on choisit l'instrument adapté et on **répète** les mesures." },
            { t: "exemple", titre: "Lire entre deux graduations", md: "Une éprouvette est graduée de 10 mL en 10 mL. Le bas du ménisque est exactement entre les traits 40 et 50 : on lit **45 mL**, à environ 5 mL près." },
            { t: "graphique", type: "barres", titre: "Quatre élèves pèsent le même objet", unite: "g", donnees: [{ label: "Élève A", valeur: 51 }, { label: "Élève B", valeur: 49 }, { label: "Élève C", valeur: 50 }, { label: "Élève D", valeur: 50 }] },
            { t: "texte", md: "Les résultats diffèrent un peu : c'est normal. On retient la **moyenne** : (51 + 49 + 50 + 50) ÷ 4 = 200 ÷ 4 = **50 g**." },
            { t: "verifie", q: "Une mesure faite avec beaucoup de soin donne-t-elle toujours la valeur exacte ?", choix: ["Oui, si on est attentif", "Non, toute mesure a une incertitude"], bonne: 1, explication: "Même avec soin, l'instrument et l'opérateur limitent la précision. On répète les mesures et on calcule une moyenne pour s'approcher de la vraie valeur." },
          ],
        },
        {
          titre: "La sécurité au laboratoire",
          blocs: [
            { t: "liste", titre: "Les règles d'or", items: ["Porter des **lunettes de protection** et une **blouse** en coton : c'est la première chose à faire avant de manipuler.", "Attacher les cheveux longs.", "Ne **jamais goûter** ni sentir directement un produit, même s'il ressemble à de l'eau.", "Lire les **pictogrammes de danger** sur les flacons.", "Signaler immédiatement tout incident au professeur."] },
            { t: "tableau", titre: "Les pictogrammes de danger", entetes: ["Pictogramme", "Signification"], lignes: [["flamme", "inflammable : prend feu facilement"], ["tête de mort", "toxique : peut tuer même en petite quantité"], ["main et surface rongées", "corrosif : brûle la peau et les yeux"], ["point d'exclamation", "nocif ou irritant"], ["arbre mort et poisson", "dangereux pour l'environnement"], ["bombe qui explose", "explosif"]] },
          ],
        },
      ],
      bilan: "Une question, une hypothèse, un protocole qui ne change qu'une chose, des mesures lues avec soin et répétées, des lunettes sur le nez : voilà comment la science avance en toute sécurité.",
    },
  },
};
