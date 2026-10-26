// Cours ÉCLORE — 5e Géographie. Schéma : docs/COURS.md
// Données chiffrées arrondies (ONU, Banque mondiale, FAO, GIEC) : ordres de grandeur, pas valeurs exactes.
export default {
  id: "5e-geographie",
  chapitres: {
    "5e-geographie-01-croissance-demographique": {
      accroche: "Vers 1800, la Terre comptait environ un milliard d'humains. Il a fallu des dizaines de milliers d'années pour atteindre ce chiffre… puis à peine deux siècles pour en ajouter sept autres. Que s'est-il passé ?",
      objectifs: [
        "Décrire l'évolution de la population mondiale depuis 1800",
        "Utiliser les mots natalité, mortalité, fécondité et accroissement naturel",
        "Expliquer les quatre phases de la transition démographique",
        "Comparer l'Inde, la Chine et le Nigeria",
      ],
      sections: [
        {
          titre: "Huit milliards d'humains : une croissance récente et rapide",
          blocs: [
            { t: "texte", md: "Pendant des millénaires, la population humaine a très peu augmenté : il naissait beaucoup d'enfants, mais beaucoup mouraient jeunes, à cause des famines, des épidémies et des guerres.\n\nTout change au XIXe siècle, d'abord en Europe, puis dans le reste du monde. Grâce aux progrès de la ==médecine, de l'hygiène et de l'agriculture==, on meurt moins. Résultat : la population mondiale passe d'environ **1 milliard vers 1800** à **2 milliards vers 1930**, puis **8 milliards fin 2022**." },
            { t: "graphique", type: "courbe", titre: "La population mondiale depuis 1800 (projection après 2022)", unite: "milliards d'habitants", donnees: [{ label: "1800", valeur: 1 }, { label: "1900", valeur: 1.6 }, { label: "1930", valeur: 2 }, { label: "1960", valeur: 3 }, { label: "1975", valeur: 4 }, { label: "1987", valeur: 5 }, { label: "1999", valeur: 6 }, { label: "2011", valeur: 7 }, { label: "2022", valeur: 8 }, { label: "2050", valeur: 9.7 }, { label: "2080", valeur: 10.3 }] },
            { t: "texte", md: "Regarde la pente : elle devient très raide après 1950. Il a fallu 130 ans pour passer de 1 à 2 milliards, mais seulement 12 ans pour passer de 7 à 8 milliards. Selon les projections de l'ONU, la croissance va ralentir : la population mondiale devrait atteindre un maximum d'environ **10 milliards vers 2080**, puis se stabiliser." },
            { t: "savais-tu", md: "Le 15 novembre 2022, l'ONU a symboliquement salué la naissance du « huit milliardième » humain. Personne ne sait qui c'est vraiment : c'est une estimation !" },
          ],
        },
        {
          titre: "Le vocabulaire du démographe",
          blocs: [
            { t: "definition", terme: "Taux de natalité et taux de mortalité", md: "Le **taux de natalité** est le nombre de naissances pour 1 000 habitants en un an. Le **taux de mortalité** est le nombre de décès pour 1 000 habitants en un an. On les note en **pour mille (‰)**." },
            { t: "definition", terme: "Accroissement naturel", md: "C'est la différence entre le taux de natalité et le taux de mortalité. S'il est positif, la population augmente ; s'il est négatif, elle diminue (sans compter les migrations)." },
            { t: "definition", terme: "Indice de fécondité", md: "Le nombre moyen d'enfants par femme. Vers **2,1 enfants par femme**, chaque génération remplace la précédente : la population se renouvelle sans croître. C'est le **seuil de renouvellement**." },
            { t: "exemple", titre: "Calculer un accroissement naturel", etapes: ["Un pays a un taux de natalité de 35 ‰ et un taux de mortalité de 10 ‰.", "Accroissement naturel = natalité − mortalité = 35 − 10 = 25 ‰.", "25 ‰, c'est 2,5 % par an : à ce rythme, la population double en moins de 30 ans.", "C'est typique d'un pays en pleine transition démographique, comme le Nigeria."] },
            { t: "attention", md: "Ne confonds pas **natalité** (des naissances pour 1 000 habitants) et **fécondité** (des enfants par femme). Un pays peut avoir une fécondité faible mais encore beaucoup de naissances s'il compte énormément de jeunes adultes, comme l'Inde." },
            { t: "verifie", q: "Un pays a un taux de natalité de 40 ‰ et un taux de mortalité de 12 ‰. Son accroissement naturel est de…", choix: ["52 ‰", "28 ‰", "3,3 ‰"], bonne: 1, explication: "On soustrait : 40 − 12 = 28 ‰. On n'additionne jamais naissances et décès : les décès font baisser la population." },
          ],
        },
        {
          titre: "La transition démographique en quatre phases",
          blocs: [
            { t: "definition", terme: "Transition démographique", md: "Le passage d'une situation où natalité et mortalité sont **fortes** à une situation où elles sont **faibles**. Entre les deux, ==la mortalité baisse avant la natalité== : la population augmente alors très vite." },
            { t: "schema", titre: "Les courbes de la transition démographique", legende: "La zone colorée entre les deux courbes, c'est l'accroissement naturel : il est maximal pendant les phases 2 et 3.", svg: `<svg viewBox="0 0 400 260"><path class="aplat" d="M125 52 C160 48 190 52 210 60 C240 80 270 140 295 152 L295 170 C270 168 240 160 210 150 C185 140 160 90 125 66 Z"/><path class="trait" d="M40 20 L40 215 L385 215"/><text class="texte-petit" x="46" y="16">taux (‰)</text><text class="texte-petit" x="385" y="230" text-anchor="end">temps</text><line class="pointille" x1="125" y1="30" x2="125" y2="215"/><line class="pointille" x1="210" y1="30" x2="210" y2="215"/><line class="pointille" x1="295" y1="30" x2="295" y2="215"/><path d="M40 55 C80 50 100 56 125 52 C160 48 190 52 210 60 C240 80 270 140 295 152 C330 162 360 160 385 165" fill="none" stroke="var(--pigment)" stroke-width="3"/><path class="trait pointille" d="M40 65 C60 55 80 75 100 60 C110 55 118 62 125 66 C160 90 185 140 210 150 C240 160 270 168 295 170 C330 172 360 168 385 170" fill="none"/><text class="texte-pigment" x="340" y="150" text-anchor="middle">natalité</text><text class="texte" x="340" y="192" text-anchor="middle">mortalité</text><text class="texte-petit" x="222" y="112" text-anchor="middle">forte</text><text class="texte-petit" x="222" y="126" text-anchor="middle">croissance</text><text class="texte-petit" x="82" y="245" text-anchor="middle">Phase 1</text><text class="texte-petit" x="167" y="245" text-anchor="middle">Phase 2</text><text class="texte-petit" x="252" y="245" text-anchor="middle">Phase 3</text><text class="texte-petit" x="340" y="245" text-anchor="middle">Phase 4</text></svg>` },
            { t: "etapes", titre: "Ce qui se passe à chaque phase", items: [{ titre: "Phase 1 : régime ancien", md: "Natalité et mortalité fortes. La population augmente à peine." }, { titre: "Phase 2 : la mortalité chute", md: "Vaccins, hygiène, meilleure alimentation : on meurt moins, mais les familles restent nombreuses. La population explose." }, { titre: "Phase 3 : la natalité baisse", md: "École pour les filles, travail des femmes, contraception, vie en ville : les familles ont moins d'enfants. La croissance ralentit." }, { titre: "Phase 4 : régime moderne", md: "Natalité et mortalité faibles. La population se stabilise et vieillit." }] },
            { t: "verifie", q: "Pendant la phase 2, pourquoi la population augmente-t-elle si vite ?", choix: ["Parce que la natalité augmente brusquement", "Parce que la mortalité baisse alors que la natalité reste forte", "Parce que natalité et mortalité baissent ensemble"], bonne: 1, explication: "Les progrès de la médecine font baisser la mortalité d'abord. Les habitudes familiales changent plus lentement : la natalité reste forte pendant des années. L'écart entre les deux courbes devient énorme." },
          ],
        },
        {
          titre: "Trois géants, trois situations : Inde, Chine, Nigeria",
          blocs: [
            { t: "carte", fond: "monde", titre: "Trois pays clés de la démographie mondiale", zones: ["IN", "CN", "NG", "JP"], reperes: [{ nom: "New Delhi", lat: 28.61, lon: 77.21 }, { nom: "Pékin", lat: 39.90, lon: 116.41 }, { nom: "Lagos", lat: 6.52, lon: 3.38 }, { nom: "Tokyo", lat: 35.68, lon: 139.69 }], legende: "Inde, Chine, Nigeria et Japon : quatre étapes différentes de la transition démographique." },
            { t: "tableau", titre: "Comparer trois pays (chiffres arrondis)", entetes: ["", "Inde", "Chine", "Nigeria"], lignes: [["Population", "environ 1,4 milliard (1er rang depuis 2023)", "environ 1,4 milliard, en baisse", "plus de 200 millions"], ["Enfants par femme", "environ 2", "environ 1", "plus de 4"], ["Phase de la transition", "fin de phase 3", "phase 4", "phase 2 à 3"], ["Grand défi", "créer des emplois pour des millions de jeunes", "vieillissement rapide", "écoles, logements, eau, nourriture"]] },
            { t: "texte", md: "**La Chine** a longtemps été le pays le plus peuplé. De 1979 à 2015, elle a imposé la **politique de l'enfant unique** pour freiner sa croissance. La natalité s'est effondrée et, depuis 2022, la population diminue. La Chine vieillit très vite.\n\n**L'Inde** l'a dépassée en 2023. Sa fécondité a beaucoup baissé, mais elle compte tellement de jeunes adultes que les naissances restent nombreuses.\n\n**Le Nigeria** est le pays le plus peuplé d'Afrique. La mortalité y a baissé, mais les familles restent nombreuses, surtout dans les campagnes où les filles vont moins longtemps à l'école. Sa population pourrait doubler d'ici 2050." },
          ],
        },
        {
          titre: "Croître ou vieillir : deux types de défis",
          blocs: [
            { t: "texte", md: "Une **croissance rapide** oblige un pays à construire sans cesse des **écoles**, des logements, des hôpitaux, et à créer des **emplois** pour les jeunes qui arrivent sur le marché du travail. Il faut aussi plus d'eau et de nourriture. C'est le défi du Nigeria.\n\nUn **vieillissement** pose d'autres problèmes : moins d'actifs pour payer les **retraites**, des dépenses de **santé** en hausse, un manque de main-d'œuvre. Au Japon, près de 3 habitants sur 10 ont plus de 65 ans. L'Europe et la Chine suivent le même chemin." },
            { t: "astuce", md: "Pour situer un pays dans la transition, pose deux questions : « Meurt-on encore beaucoup ? » puis « Fait-on encore beaucoup d'enfants ? ». Deux « oui » : phase 1. Non puis oui : phase 2. Deux « non » : phase 4." },
          ],
        },
      ],
      bilan: "La mortalité a baissé avant la natalité : c'est ce décalage qui a fait passer l'humanité de 1 à 8 milliards. Certains pays grandissent encore très vite, d'autres vieillissent déjà.",
    },

    "5e-geographie-02-richesse-pauvrete": {
      accroche: "Un enfant né en Norvège peut espérer vivre plus de 80 ans et faire de longues études. Un enfant né au Niger vivra en moyenne une vingtaine d'années de moins et ira peu à l'école. Comment mesurer de tels écarts, et d'où viennent-ils ?",
      objectifs: [
        "Définir le développement et utiliser le PIB et l'IDH",
        "Distinguer pays développés, pays émergents et pays les moins avancés",
        "Décrire les inégalités entre les pays et à l'intérieur d'un même pays",
      ],
      sections: [
        {
          titre: "Qu'est-ce que le développement ?",
          blocs: [
            { t: "definition", terme: "Développement", md: "L'amélioration des conditions de vie d'une population : **santé**, **éducation**, **revenus**, accès à l'eau potable, à l'électricité, au logement." },
            { t: "texte", md: "Être développé, ce n'est pas seulement être riche. Un pays peut produire beaucoup de richesses, mais si elles ne profitent qu'à une minorité, la majorité des habitants vit mal. Pour mesurer le développement, les géographes utilisent donc **plusieurs indicateurs**." },
            { t: "definition", terme: "PIB et PIB par habitant", md: "Le **PIB** (produit intérieur brut) mesure la richesse produite par un pays en un an. Divisé par le nombre d'habitants, il donne le **PIB par habitant**, une moyenne de la richesse de chacun." },
            { t: "exemple", titre: "Calculer un PIB par habitant", etapes: ["Un pays produit 500 milliards de dollars par an et compte 25 millions d'habitants.", "PIB par habitant = PIB ÷ population = 500 000 000 000 ÷ 25 000 000.", "Résultat : 20 000 dollars par habitant et par an."] },
          ],
        },
        {
          titre: "L'IDH, un indicateur plus complet",
          blocs: [
            { t: "definition", terme: "IDH (indice de développement humain)", md: "Créé par l'ONU en 1990, il va de **0 à 1**. Plus il est proche de 1, plus le pays est développé. Il combine trois éléments : l'**espérance de vie**, la **durée de scolarisation** et le **revenu par habitant**." },
            { t: "graphique", type: "barres", titre: "IDH de quelques pays (valeurs arrondies, années 2020)", donnees: [{ label: "Norvège", valeur: 0.97 }, { label: "France", valeur: 0.91 }, { label: "Chine", valeur: 0.79 }, { label: "Brésil", valeur: 0.76 }, { label: "Inde", valeur: 0.64 }, { label: "Nigeria", valeur: 0.55 }, { label: "Niger", valeur: 0.39 }] },
            { t: "attention", md: "Un **PIB total** très élevé ne garantit pas un IDH élevé. La Chine et l'Inde font partie des plus grandes économies du monde, mais avec des centaines de millions d'habitants, la richesse par personne reste moyenne, et l'accès à la santé ou à l'école est inégal. L'IDH regarde les **conditions de vie**, pas la puissance." },
            { t: "verifie", q: "Lequel de ces éléments n'entre PAS dans le calcul de l'IDH ?", choix: ["L'espérance de vie", "La durée de scolarisation", "La superficie du pays", "Le revenu par habitant"], bonne: 2, explication: "L'IDH combine santé (espérance de vie), éducation (durée de scolarisation) et niveau de vie (revenu). La taille du territoire ne dit rien des conditions de vie." },
          ],
        },
        {
          titre: "Des pays riches, émergents et très pauvres",
          blocs: [
            { t: "tableau", titre: "Trois grandes catégories de pays", entetes: ["Catégorie", "Exemples", "Caractéristiques"], lignes: [["**Pays développés**", "Europe, États-Unis, Canada, Japon, Australie", "IDH très élevé, revenus élevés, longues études"], ["**Pays émergents**", "Chine, Inde, Brésil, Afrique du Sud", "Économie qui grandit vite, mais fortes inégalités internes"], ["**Pays les moins avancés (PMA)**", "Niger, Tchad, Mali, Haïti…", "IDH faible, grande pauvreté ; surtout en Afrique subsaharienne"]] },
            { t: "carte", fond: "monde", titre: "Des pays émergents et des pays parmi les moins avancés", zones: ["CN", "IN", "BR", "NE", "TD", "ML"], reperes: [{ nom: "Mumbai", lat: 19.08, lon: 72.88 }, { nom: "Rio de Janeiro", lat: -22.91, lon: -43.17 }], legende: "Chine, Inde et Brésil sont émergents ; Niger, Tchad et Mali comptent parmi les pays les moins avancés. Mumbai et Rio ont d'immenses bidonvilles." },
            { t: "texte", md: "Sur un planisphère, on trace parfois une **limite Nord/Sud** entre les pays riches du « Nord » et les pays pauvres du « Sud ». Attention : l'Australie est au « Nord » alors qu'elle est dans l'hémisphère sud ! Et cette limite est de moins en moins pertinente, car les **pays émergents** comme la Chine rattrapent une partie de leur retard." },
          ],
        },
        {
          titre: "Des inégalités jusqu'à l'intérieur des pays",
          blocs: [
            { t: "texte", md: "Les inégalités existent aussi **dans un même pays** : entre les villes et les campagnes, entre les régions, entre les quartiers.\n\nÀ **Mumbai**, en Inde, des tours de luxe dominent Dharavi, l'un des plus grands **bidonvilles** d'Asie. À **Rio de Janeiro**, au Brésil, les favelas s'accrochent aux collines au-dessus des plages des quartiers riches. Et même en France ou aux États-Unis, des personnes vivent dans la pauvreté." },
            { t: "definition", terme: "Bidonville", md: "Un quartier d'habitations précaires, construites avec des matériaux de récupération, souvent sans eau courante, sans égouts ni électricité fiable. Il se développe dans les grandes villes des pays pauvres ou émergents." },
            { t: "texte", md: "Dans le monde, environ **700 millions** de personnes vivent dans l'**extrême pauvreté**, avec moins de 2 à 3 dollars par jour. La plupart vivent en **Afrique subsaharienne**." },
            { t: "verifie", q: "« Dans un pays riche, il n'y a pas de pauvreté. » Vrai ou faux ?", choix: ["Vrai", "Faux"], bonne: 1, explication: "Faux. Le PIB par habitant est une moyenne : elle cache des écarts. Dans tous les pays riches, des personnes vivent sous le seuil de pauvreté ou sans logement." },
          ],
        },
      ],
      bilan: "Le développement se mesure aux conditions de vie, pas seulement à la richesse : l'IDH le montre. Les écarts sont immenses entre pays, mais aussi à l'intérieur de chacun d'eux.",
    },

    "5e-geographie-03-energie-eau": {
      accroche: "Chaque fois que tu allumes la lumière ou que tu ouvres un robinet, tu utilises une ressource venue de loin. Mais le pétrole s'épuise, et l'eau douce est bien plus rare qu'on ne le croit. Comment partager ce qui ne suffit pas pour tous ?",
      objectifs: [
        "Distinguer ressources renouvelables et non renouvelables",
        "Expliquer pourquoi l'eau douce est rare et inégalement répartie",
        "Analyser un barrage, une usine de dessalement et un conflit d'usage",
      ],
      sections: [
        {
          titre: "Des énergies qui s'épuisent, d'autres qui se renouvellent",
          blocs: [
            { t: "definition", terme: "Ressource non renouvelable", md: "Une ressource qui **s'épuise** quand on l'utilise, car elle met des millions d'années à se former : pétrole, charbon, gaz naturel, uranium. Pétrole, charbon et gaz sont les **énergies fossiles**." },
            { t: "definition", terme: "Ressource renouvelable", md: "Une ressource qui **se reconstitue naturellement** à l'échelle d'une vie humaine : soleil, vent, eau des rivières, biomasse (bois, déchets végétaux), chaleur de la Terre." },
            { t: "tableau", titre: "Les principales énergies", entetes: ["Énergie", "Catégorie", "Exemple d'usage"], lignes: [["Pétrole", "fossile, non renouvelable", "carburant des voitures et des avions"], ["Charbon", "fossile, non renouvelable", "centrales électriques en Chine, en Inde"], ["Gaz naturel", "fossile, non renouvelable", "chauffage, électricité"], ["Uranium (nucléaire)", "non renouvelable, mais pas fossile", "centrales nucléaires françaises"], ["Solaire, éolien", "renouvelable", "panneaux, éoliennes"], ["Hydroélectricité", "renouvelable", "barrages"], ["Géothermie", "renouvelable", "chauffage en Islande"]] },
            { t: "texte", md: "Aujourd'hui, les **énergies fossiles** fournissent encore environ **80 %** de l'énergie consommée dans le monde. Elles sont pratiques et abondantes, mais elles s'épuiseront et elles rejettent du CO₂ qui réchauffe le climat." },
            { t: "verifie", q: "Laquelle de ces sources d'énergie est renouvelable ?", choix: ["Le charbon", "Le gaz naturel", "Le vent", "L'uranium"], bonne: 2, explication: "Le vent souffle sans cesse : il ne s'épuise pas. Charbon, gaz et uranium sont des stocks formés dans le sous-sol, qui diminuent quand on les exploite." },
          ],
        },
        {
          titre: "L'eau douce, une ressource rare et mal répartie",
          blocs: [
            { t: "texte", md: "La Terre est la « planète bleue », mais environ **97 %** de son eau est **salée**. Sur les 3 % d'eau douce, la plus grande partie est gelée dans les glaciers et les calottes polaires. Au final, l'eau facile à utiliser (rivières, lacs, nappes) est une toute petite part du total.\n\nCette eau est en plus **inégalement répartie** : abondante au Canada ou en Amazonie, très rare au Sahara ou dans la péninsule Arabique." },
            { t: "definition", terme: "Stress hydrique", md: "Situation d'un pays qui dispose de **moins de 1 700 m³ d'eau par habitant et par an**. Le **Moyen-Orient** et l'**Afrique du Nord** sont les régions les plus touchées." },
            { t: "graphique", type: "secteurs", titre: "À quoi sert l'eau douce prélevée dans le monde ? (valeurs arrondies)", unite: "%", donnees: [{ label: "Agriculture (irrigation)", valeur: 70 }, { label: "Industrie et énergie", valeur: 20 }, { label: "Ménages (eau domestique)", valeur: 10 }] },
            { t: "attention", md: "On pense souvent que ce sont nos douches qui consomment le plus d'eau. Faux : à l'échelle mondiale, c'est l'**agriculture**, surtout l'**irrigation** des cultures, qui prélève environ **70 %** de l'eau douce." },
          ],
        },
        {
          titre: "Aménager pour mobiliser l'eau et l'énergie",
          blocs: [
            { t: "carte", fond: "monde", titre: "Des aménagements et des tensions autour de l'eau", cadre: [15, 5, 125, 50], zones: ["EG", "ET", "SA", "AE", "CN"], reperes: [{ nom: "Barrage des Trois-Gorges", lat: 30.82, lon: 111.00 }, { nom: "Haut barrage d'Assouan", lat: 23.97, lon: 32.88 }, { nom: "Barrage de la Renaissance", lat: 11.21, lon: 35.09 }, { nom: "Mer d'Aral", lat: 45.0, lon: 60.0 }], legende: "Barrages sur le Nil et le Yangzi, usines de dessalement dans le Golfe, mer d'Aral asséchée." },
            { t: "definition", terme: "Barrage", md: "Un ouvrage construit en travers d'un fleuve pour **retenir l'eau** dans un lac de retenue. Il sert à irriguer, à fournir de l'eau aux villes, à limiter les crues et à produire de l'**hydroélectricité**." },
            { t: "exemple", titre: "Le barrage des Trois-Gorges (Chine)", md: "Sur le **Yangzi**, c'est la centrale électrique la plus puissante du monde. Elle produit une électricité renouvelable et protège des crues. Mais son lac a noyé des villes et des villages : plus d'**un million d'habitants** ont été déplacés, et des sites historiques ont disparu sous l'eau." },
            { t: "texte", md: "Les pays du golfe Persique, comme l'**Arabie saoudite** ou les **Émirats arabes unis**, n'ont presque pas de rivières. Ils construisent des usines de **dessalement** qui transforment l'eau de mer en eau douce. C'est efficace, mais très coûteux en énergie, et le sel rejeté abîme les fonds marins." },
          ],
        },
        {
          titre: "Quand plusieurs acteurs veulent la même eau",
          blocs: [
            { t: "definition", terme: "Conflit d'usage", md: "Une opposition entre des acteurs qui veulent utiliser la **même ressource** : agriculteurs, villes, industries, tourisme, ou pays voisins le long d'un même fleuve." },
            { t: "exemple", titre: "Le Nil, un fleuve partagé", etapes: ["Le Nil traverse une dizaine de pays avant d'arriver en Égypte.", "En amont, l'**Éthiopie** a construit le grand barrage de la Renaissance sur le Nil Bleu pour produire de l'électricité.", "En aval, l'**Égypte**, qui dépend presque entièrement du Nil pour son eau, craint d'en recevoir moins.", "C'est un conflit d'usage entre États : chacun a besoin de l'eau, pour des raisons différentes."] },
            { t: "savais-tu", md: "La **mer d'Aral**, en Asie centrale, était l'un des plus grands lacs du monde. À partir des années 1960, l'eau des fleuves qui l'alimentaient a été détournée pour irriguer des champs de **coton**. Elle a presque disparu : des bateaux rouillent aujourd'hui au milieu du désert." },
            { t: "verifie", q: "Pourquoi l'Égypte s'inquiète-t-elle du barrage construit par l'Éthiopie ?", choix: ["Parce qu'il produit trop d'électricité", "Parce qu'elle est en aval et dépend presque entièrement du Nil", "Parce que le barrage est situé en Égypte"], bonne: 1, explication: "L'eau coule de l'amont (Éthiopie) vers l'aval (Égypte). Celui qui contrôle l'amont peut retenir l'eau : c'est pourquoi le pays d'aval s'inquiète." },
          ],
        },
      ],
      bilan: "Les énergies fossiles s'épuisent et l'eau douce est rare : mieux les partager, économiser l'eau d'irrigation et développer les énergies renouvelables sont des défis pour tous.",
    },

    "5e-geographie-04-alimentation": {
      accroche: "La Terre produit aujourd'hui assez de nourriture pour nourrir tous ses habitants. Pourtant, environ 700 millions de personnes ont faim, pendant qu'un tiers des aliments finit à la poubelle. Comment expliquer ce paradoxe ?",
      objectifs: [
        "Définir la sécurité alimentaire, la sous-nutrition et la malnutrition",
        "Comparer agriculture productiviste, vivrière et biologique",
        "Identifier des solutions et des limites pour nourrir durablement 10 milliards d'humains",
      ],
      sections: [
        {
          titre: "Manger à sa faim : un droit inégalement respecté",
          blocs: [
            { t: "definition", terme: "Sécurité alimentaire", md: "Elle est assurée quand **tous** les habitants ont accès, **en permanence**, à une nourriture **suffisante, saine et équilibrée**." },
            { t: "tableau", titre: "Deux situations à ne pas confondre", entetes: ["Situation", "Définition", "Où ?"], lignes: [["**Sous-nutrition**", "Manque de nourriture : pas assez de calories pour vivre en bonne santé.", "Surtout Afrique subsaharienne et Asie du Sud"], ["**Malnutrition**", "Alimentation déséquilibrée : carences (vitamines, protéines) ou excès (sucre, graisses).", "Partout, y compris dans les pays riches"]] },
            { t: "attention", md: "L'**obésité** est une forme de **malnutrition** : on peut manger trop et mal à la fois. Elle progresse dans le monde entier, y compris dans des pays où une partie de la population a encore faim." },
            { t: "graphique", type: "barres", titre: "Où vivent les personnes qui souffrent de la faim ? (vers 2023, arrondi)", unite: "millions de personnes", donnees: [{ label: "Asie", valeur: 385 }, { label: "Afrique", valeur: 300 }, { label: "Amérique latine et Caraïbes", valeur: 40 }] },
            { t: "texte", md: "L'Asie compte le plus grand nombre de personnes sous-alimentées, car elle est très peuplée. Mais c'est en **Afrique** que la **part** de la population touchée est la plus forte : environ une personne sur cinq." },
          ],
        },
        {
          titre: "Plusieurs façons de cultiver",
          blocs: [
            { t: "definition", terme: "Agriculture productiviste", md: "Elle cherche les **rendements les plus élevés** grâce aux machines, aux engrais, aux pesticides et à l'irrigation. Elle vend sur le marché mondial." },
            { t: "definition", terme: "Agriculture vivrière", md: "Elle sert d'abord à **nourrir la famille du paysan**, avec peu de moyens. Les surplus éventuels sont vendus au marché local." },
            { t: "exemple", titre: "Deux champs, deux mondes", md: "Au **Sahel**, une famille cultive du mil sur un petit champ, sans engrais ni machine : c'est de l'agriculture **vivrière**. Une mauvaise saison des pluies suffit à provoquer la sous-nutrition.\n\nDans la **Beauce**, au sud-ouest de Paris, un agriculteur produit du blé sur des centaines d'hectares avec des tracteurs et des engrais : c'est de l'agriculture **productiviste**, qui vend jusqu'à l'autre bout du monde." },
            { t: "carte", fond: "monde", titre: "Des agricultures très différentes", zones: ["ML", "NE", "TD", "BF", "ET", "MG"], reperes: [{ nom: "Beauce", lat: 48.30, lon: 1.60 }, { nom: "Pendjab (révolution verte)", lat: 30.90, lon: 75.85 }, { nom: "Grandes Plaines", lat: 40.0, lon: -100.0 }], legende: "Sahel (Mali, Niger, Tchad, Burkina Faso) : agriculture vivrière fragile. Éthiopie et Madagascar : terres convoitées par des investisseurs étrangers." },
            { t: "tableau", titre: "Comparer trois agricultures", entetes: ["", "Productiviste", "Vivrière", "Biologique"], lignes: [["But", "produire beaucoup et vendre", "nourrir la famille", "produire sans chimie de synthèse"], ["Moyens", "machines, engrais, pesticides", "outils simples, travail à la main", "engrais naturels, rotation des cultures"], ["Atout", "nourrit beaucoup de monde", "faible coût, autonomie", "respecte les sols et la santé"], ["Limite", "pollue l'eau, épuise les sols", "rendements faibles, fragile", "rendements plus faibles, prix plus élevés"]] },
            { t: "verifie", q: "Quel est l'un des principaux inconvénients de l'agriculture productiviste ?", choix: ["Elle produit trop peu", "Elle pollue les sols et l'eau avec les engrais et les pesticides", "Elle n'utilise pas de machines"], bonne: 1, explication: "Elle produit beaucoup, c'est sa force. Mais les engrais et pesticides s'infiltrent dans les sols et les nappes, et la monoculture appauvrit la terre." },
          ],
        },
        {
          titre: "Pourquoi la faim existe-t-elle encore ?",
          blocs: [
            { t: "texte", md: "Le problème n'est pas d'abord la quantité produite, mais l'**accès** à la nourriture. On a faim quand on est **trop pauvre** pour acheter à manger, quand une **guerre** empêche de cultiver ou de transporter les récoltes, ou quand une **sécheresse** détruit le champ familial." },
            { t: "etapes", titre: "Le parcours d'un aliment, du champ à l'assiette", items: [{ titre: "Production", md: "Le paysan cultive et récolte." }, { titre: "Stockage", md: "Les récoltes sont conservées dans des silos ou des greniers." }, { titre: "Transport et transformation", md: "On achemine, on trie, on prépare (farine, conserves…)." }, { titre: "Distribution", md: "Marchés, magasins, supermarchés." }, { titre: "Consommation", md: "L'aliment arrive dans l'assiette." }] },
            { t: "texte", md: "À chaque étape, on perd de la nourriture : récoltes abîmées faute de bons silos dans les pays pauvres, produits jetés par les magasins ou au fond du frigo dans les pays riches. Au total, environ **un tiers** de la nourriture produite est **perdue ou gaspillée**." },
            { t: "definition", terme: "Accaparement des terres", md: "L'achat ou la location d'**immenses surfaces agricoles** dans des pays pauvres (Éthiopie, Madagascar…) par des États ou des entreprises étrangères. Les récoltes partent souvent à l'étranger, et les paysans locaux perdent leurs terres." },
          ],
        },
        {
          titre: "Nourrir 10 milliards d'humains demain",
          blocs: [
            { t: "exemple", titre: "La révolution verte en Inde", md: "À partir des années 1960, l'Inde, menacée de famines, a adopté des **variétés de blé et de riz à hauts rendements**, des engrais et l'irrigation, notamment au **Pendjab**. Les récoltes ont fortement augmenté et le pays est devenu capable de nourrir sa population. Revers : des nappes d'eau qui baissent et des sols fatigués." },
            { t: "liste", titre: "Des pistes pour nourrir durablement la planète", items: ["**Réduire le gaspillage**, du champ jusqu'à l'assiette.", "**Limiter la consommation de viande** : produire 1 kg de bœuf demande plusieurs kilos de céréales et beaucoup d'eau.", "**Aider les petits paysans du Sud** : semences, silos, formation, routes pour vendre.", "Développer une **agriculture plus respectueuse** des sols et de l'eau."] },
            { t: "verifie", q: "La Terre produit assez de nourriture pour tous. Pourquoi la faim existe-t-elle encore ?", choix: ["Parce que la nourriture est mal répartie et que les plus pauvres ne peuvent pas l'acheter", "Parce que les pays riches ne cultivent plus rien", "Parce que l'agriculture biologique a remplacé les autres"], bonne: 0, explication: "La faim est d'abord une question de pauvreté, de guerres et d'inégalités d'accès, pas un manque global de production." },
          ],
        },
      ],
      bilan: "Nourrir l'humanité n'est pas seulement produire plus : c'est mieux partager, moins gaspiller et cultiver sans épuiser la terre.",
    },

    "5e-geographie-05-changement-global": {
      accroche: "À Tuvalu, dans le Pacifique, le point le plus haut de l'archipel culmine à quelques mètres au-dessus de la mer. Ses habitants se demandent si leurs petits-enfants pourront encore y vivre. Pourquoi la mer monte-t-elle ?",
      objectifs: [
        "Expliquer l'effet de serre et le réchauffement climatique",
        "Décrire les effets du changement global au Bangladesh, aux Pays-Bas, dans l'Arctique et sur les atolls",
        "Connaître l'accord de Paris et distinguer atténuation et adaptation",
      ],
      sections: [
        {
          titre: "L'effet de serre : naturel, puis renforcé par les humains",
          blocs: [
            { t: "definition", terme: "Gaz à effet de serre", md: "Des gaz de l'atmosphère qui **retiennent la chaleur** près du sol, comme la vitre d'une serre. Les principaux sont la vapeur d'eau, le **dioxyde de carbone (CO₂)** et le **méthane**." },
            { t: "schema", titre: "Comment fonctionne l'effet de serre", legende: "1 : la lumière du Soleil traverse l'atmosphère et chauffe le sol. 2 : le sol réchauffé émet de la chaleur. 3 : les gaz à effet de serre en renvoient une partie vers le sol. 4 : le reste s'échappe vers l'espace. Plus il y a de gaz, plus la chaleur est retenue.", svg: `<svg viewBox="0 0 400 240"><circle class="aplat-fort" cx="50" cy="40" r="20"/><text class="texte-petit" x="50" y="78" text-anchor="middle">Soleil</text><rect class="aplat" x="0" y="100" width="400" height="40"/><line class="pointille" x1="0" y1="100" x2="400" y2="100"/><line class="pointille" x1="0" y1="140" x2="400" y2="140"/><text class="texte-petit" x="245" y="124" text-anchor="middle">couche de gaz à effet de serre</text><path class="aplat" d="M0 202 Q100 194 200 202 T400 202 L400 240 L0 240 Z"/><path class="trait" d="M0 202 Q100 194 200 202 T400 202" fill="none"/><text class="texte" x="200" y="226" text-anchor="middle">la Terre (sols, océans)</text><path d="M75 55 L128 192" fill="none" stroke="var(--pigment)" stroke-width="2.5" marker-end="url(#fl-p)"/><text class="texte-main" x="100" y="86">1</text><path class="trait" d="M190 198 L214 148" fill="none" marker-end="url(#fl)"/><text class="texte-main" x="180" y="178">2</text><path class="trait" d="M222 146 L248 194" fill="none" marker-end="url(#fl)"/><text class="texte-main" x="246" y="168">3</text><path class="trait" d="M330 198 L372 32" fill="none" marker-end="url(#fl)"/><text class="texte-main" x="338" y="90">4</text><text class="texte-petit" x="392" y="18" text-anchor="end">vers l'espace</text></svg>` },
            { t: "texte", md: "L'effet de serre est d'abord **naturel** : sans lui, la Terre serait glacée, autour de −18 °C en moyenne. Le problème, c'est qu'en brûlant du pétrole, du charbon et du gaz, les humains rejettent de plus en plus de **CO₂**. L'effet de serre se **renforce** : depuis 1850, la Terre s'est réchauffée d'environ **1,2 °C**, et les dernières années ont été les plus chaudes jamais mesurées." },
            { t: "graphique", type: "courbe", titre: "Le CO₂ dans l'atmosphère (valeurs arrondies)", unite: "ppm (parties par million)", donnees: [{ label: "1850", valeur: 285 }, { label: "1900", valeur: 296 }, { label: "1950", valeur: 311 }, { label: "1980", valeur: 339 }, { label: "2000", valeur: 369 }, { label: "2010", valeur: 389 }, { label: "2020", valeur: 412 }] },
          ],
        },
        {
          titre: "Le changement global et la montée des mers",
          blocs: [
            { t: "definition", terme: "Changement global", md: "L'ensemble des transformations de la planète causées par les activités humaines : **réchauffement climatique**, montée des eaux, déforestation, perte de biodiversité, pollutions." },
            { t: "etapes", titre: "La chaîne de causes de la montée des mers", items: [{ titre: "On brûle des énergies fossiles", md: "Voitures, usines, centrales électriques rejettent du CO₂." }, { titre: "L'effet de serre se renforce", md: "L'atmosphère retient davantage de chaleur." }, { titre: "La planète se réchauffe", md: "L'air et les océans deviennent plus chauds." }, { titre: "Les glaciers fondent et l'eau se dilate", md: "L'eau des glaciers terrestres rejoint l'océan ; l'eau qui chauffe prend plus de place." }, { titre: "Le niveau des mers monte", md: "Environ **20 cm** depuis 1900, et la hausse accélère." }] },
            { t: "attention", md: "La fonte de la **banquise** arctique ne fait **pas** monter directement le niveau des mers : c'est de l'eau de mer déjà gelée qui flotte, comme un glaçon dans un verre. Ce sont les **glaciers** et les **calottes** posés sur les terres (Groenland, Antarctique) qui font monter l'océan en fondant." },
            { t: "verifie", q: "Quel gaz est le principal responsable du réchauffement causé par les humains ?", choix: ["L'oxygène", "Le dioxyde de carbone (CO₂)", "L'azote"], bonne: 1, explication: "Le CO₂ est rejeté en masse quand on brûle des énergies fossiles. L'oxygène et l'azote, les deux gaz les plus abondants de l'air, ne retiennent pas la chaleur." },
          ],
        },
        {
          titre: "Des effets différents selon les régions",
          blocs: [
            { t: "carte", fond: "monde", titre: "Des espaces très exposés au changement global", zones: ["BD", "NL", "GL"], reperes: [{ nom: "Tuvalu", lat: -8.52, lon: 179.20 }, { nom: "Kiribati (Tarawa)", lat: 1.45, lon: 173.00 }, { nom: "Maldives (Malé)", lat: 4.18, lon: 73.51 }, { nom: "Océan Arctique", lat: 82.0, lon: -40.0 }], legende: "Bangladesh et Pays-Bas : deltas menacés par la mer. Atolls du Pacifique et de l'océan Indien : îles basses. Arctique et Groenland : fonte des glaces." },
            { t: "tableau", titre: "Quatre espaces, quatre situations", entetes: ["Espace", "Menace principale", "Réponse"], lignes: [["**Bangladesh** (delta du Gange)", "inondations, cyclones, eau salée dans les champs", "abris anticyclones, mangroves, alertes"], ["**Pays-Bas**", "un quart du territoire sous le niveau de la mer", "digues, polders, barrages mobiles, maisons flottantes"], ["**Arctique**", "fonte de la banquise, dégel du permafrost", "les Inuits adaptent leurs modes de vie"], ["**Atolls** (Tuvalu, Kiribati, Maldives)", "disparition possible sous la mer", "digues, îles rehaussées, projets de départ"]] },
            { t: "texte", md: "On parle d'**injustice climatique** : le Bangladesh ou Tuvalu ont très peu rejeté de gaz à effet de serre, mais ils sont parmi les premiers à en subir les conséquences. Les grands pollueurs historiques, eux, ont plus de moyens pour se protéger." },
          ],
        },
        {
          titre: "Atténuer et s'adapter : les réponses",
          blocs: [
            { t: "propriete", titre: "Deux stratégies complémentaires", md: "**Atténuer**, c'est **réduire les émissions** de gaz à effet de serre : énergies renouvelables, transports en commun, isolation des bâtiments.\n\n**S'adapter**, c'est **se protéger des effets déjà là** : digues, cultures résistantes à la sécheresse, déplacement des villages menacés." },
            { t: "exemple", titre: "Même menace, moyens différents", md: "Aux **Pays-Bas**, après la grande inondation de **1953**, l'État a lancé le **plan Delta** : d'immenses digues et barrages mobiles protègent le pays. Depuis des siècles, les Néerlandais gagnent aussi des terres sur la mer en créant des **polders**, entourés de digues et asséchés par pompage.\n\nAu **Bangladesh**, les moyens manquent : on construit des abris anticyclones et on plante des mangroves pour freiner les vagues. Face au même aléa, deux pays n'ont pas la même capacité d'adaptation." },
            { t: "texte", md: "Les **COP** sont les conférences annuelles de l'ONU sur le climat. Lors de la COP21, en **décembre 2015**, presque tous les pays ont signé l'**accord de Paris** : limiter le réchauffement **nettement sous 2 °C**, si possible à **1,5 °C**, par rapport à l'époque préindustrielle." },
            { t: "verifie", q: "Construire une digue pour protéger une ville de la montée des eaux, c'est un exemple…", choix: ["d'atténuation", "d'adaptation", "d'effet de serre"], bonne: 1, explication: "La digue ne réduit pas les émissions de CO₂ : elle protège contre une conséquence du réchauffement. C'est de l'adaptation." },
          ],
        },
      ],
      bilan: "En renforçant l'effet de serre, les humains réchauffent la planète et font monter les mers. Il faut à la fois atténuer, pour limiter le réchauffement, et s'adapter, pour protéger les plus exposés.",
    },

    "5e-geographie-06-risques-industriels": {
      accroche: "Le 21 septembre 2001, à 10 h 17, une explosion secoue Toulouse. On l'entend à des dizaines de kilomètres. L'usine AZF vient d'exploser au cœur de quartiers habités. Comment une usine construite loin de la ville a-t-elle pu faire autant de victimes ?",
      objectifs: [
        "Définir aléa, enjeux, vulnérabilité et risque",
        "Situer et dater cinq catastrophes industrielles et nucléaires majeures",
        "Connaître les outils de prévention et les bons réflexes en France",
      ],
      sections: [
        {
          titre: "Aléa, enjeux, vulnérabilité : les mots du risque",
          blocs: [
            { t: "definition", terme: "Aléa", md: "L'**événement dangereux possible** : une explosion, une fuite toxique, un séisme, une crue." },
            { t: "definition", terme: "Enjeux et vulnérabilité", md: "Les **enjeux** sont ce qui peut être touché : personnes, logements, écoles, activités. La **vulnérabilité** est la **fragilité** d'une société face à un aléa : maisons peu solides, absence d'alerte, manque de secours." },
            { t: "schema", titre: "Le risque naît de la rencontre d'un aléa et d'enjeux", legende: "Une explosion dans un désert vide n'est pas un risque. Le risque apparaît quand l'aléa menace des enjeux vulnérables.", svg: `<svg viewBox="0 0 400 240"><circle class="aplat" cx="145" cy="110" r="85"/><circle class="aplat" cx="255" cy="110" r="85"/><circle class="trait" cx="145" cy="110" r="85" fill="none"/><circle class="trait" cx="255" cy="110" r="85" fill="none"/><text class="texte" x="105" y="100" text-anchor="middle">ALÉA</text><text class="texte-petit" x="105" y="118" text-anchor="middle">danger possible</text><text class="texte" x="295" y="100" text-anchor="middle">ENJEUX</text><text class="texte-petit" x="295" y="118" text-anchor="middle">personnes, biens</text><text class="texte-pigment" x="200" y="115" text-anchor="middle">RISQUE</text><text class="texte-main" x="200" y="226" text-anchor="middle">risque = aléa × vulnérabilité</text></svg>` },
            { t: "propriete", titre: "La formule du risque", md: "**Risque = aléa × vulnérabilité.** Si l'aléa est nul ou si personne n'est exposé, il n'y a pas de risque. ==Plus une société est fragile, plus le risque est grand==, même pour un aléa identique." },
            { t: "verifie", q: "À aléa identique, qui est en général le plus vulnérable ?", choix: ["Un pays riche et bien préparé", "Un pays pauvre, avec peu de secours et des constructions fragiles"], bonne: 1, explication: "La pauvreté augmente la vulnérabilité : bâtiments moins solides, alerte et secours moins organisés, moins de moyens pour reconstruire." },
          ],
        },
        {
          titre: "Les risques technologiques et cinq catastrophes majeures",
          blocs: [
            { t: "definition", terme: "Risque technologique (ou industriel)", md: "Un risque **causé par les activités humaines** : usine chimique, centrale nucléaire, transport de matières dangereuses, rupture de barrage." },
            { t: "frise", titre: "Cinq catastrophes qui ont marqué le monde", evenements: [{ date: 1976, label: "Seveso (Italie)", detail: "Un nuage de dioxine, très toxique, s'échappe d'une usine chimique près de Milan." }, { date: 1984, label: "Bhopal (Inde)", detail: "Une fuite de gaz toxique dans une usine de pesticides fait des milliers de morts." }, { date: 1986, label: "Tchernobyl (URSS, auj. Ukraine)", detail: "Le 26 avril, un réacteur nucléaire explose : un nuage radioactif traverse l'Europe." }, { date: 2001, label: "AZF, Toulouse (France)", detail: "Le 21 septembre, un stock de nitrate d'ammonium explose : 31 morts, des milliers de blessés." }, { date: 2011, label: "Fukushima (Japon)", detail: "Le 11 mars, un tsunami géant noie une centrale nucléaire : fuites radioactives." }] },
            { t: "carte", fond: "monde", titre: "Où se sont produites ces catastrophes ?", zones: ["IT", "IN", "UA", "FR", "JP"], reperes: [{ nom: "Seveso", lat: 45.65, lon: 9.15 }, { nom: "Bhopal", lat: 23.26, lon: 77.41 }, { nom: "Tchernobyl", lat: 51.39, lon: 30.10 }, { nom: "Toulouse (AZF)", lat: 43.60, lon: 1.44 }, { nom: "Fukushima", lat: 37.42, lon: 141.03 }] },
            { t: "texte", md: "À **Fukushima**, l'aléa de départ est **naturel** : un séisme de magnitude 9 provoque un tsunami qui inonde la centrale et coupe son refroidissement. La catastrophe devient alors **technologique**. On parle de risque combiné." },
          ],
        },
        {
          titre: "AZF : quand la ville rattrape l'usine",
          blocs: [
            { t: "exemple", titre: "Étude de cas : Toulouse, 2001", etapes: ["L'usine chimique est construite dans les années 1920, loin du centre de Toulouse.", "Au fil des décennies, la ville s'étend : logements, écoles, centres commerciaux s'installent tout autour. Les **enjeux** grandissent autour de l'**aléa**.", "Le 21 septembre 2001, un stock de nitrate d'ammonium explose : 31 morts, des milliers de blessés, des quartiers entiers soufflés.", "En 2003, une loi crée les **PPRT** pour éviter qu'une telle situation se reproduise."] },
            { t: "definition", terme: "PPRT (plan de prévention des risques technologiques)", md: "Un document qui **limite ou interdit les constructions** autour des usines dangereuses, et peut imposer de renforcer les bâtiments existants." },
            { t: "verifie", q: "Pourquoi l'explosion d'AZF a-t-elle fait autant de victimes alors que l'usine avait été construite loin de Toulouse ?", choix: ["Parce que l'explosion était nucléaire", "Parce que la ville s'était étendue jusqu'autour de l'usine", "Parce que l'usine avait été déplacée en centre-ville"], bonne: 1, explication: "L'urbanisation a rapproché les habitants de l'usine : l'aléa n'avait pas changé, mais les enjeux exposés s'étaient multipliés." },
          ],
        },
        {
          titre: "Prévenir et réagir en France",
          blocs: [
            { t: "texte", md: "Après Seveso, l'Europe a adopté en **1982** la **directive Seveso** : les usines les plus dangereuses sont recensées et surveillées. On les appelle des **sites Seveso**, classés « seuil bas » ou « seuil haut » selon le danger. La France en compte environ **1 300**.\n\nLes habitants des zones à risque reçoivent une **information préventive** de la **mairie**, qui explique les dangers et les bons gestes." },
            { t: "etapes", titre: "Les bons réflexes quand la sirène retentit", items: [{ titre: "Se mettre à l'abri", md: "Entrer dans le bâtiment le plus proche, ne pas rester dehors." }, { titre: "Se confiner", md: "Fermer portes et fenêtres, arrêter la ventilation." }, { titre: "S'informer", md: "Écouter la radio et suivre les consignes des autorités." }, { titre: "Ne pas aller chercher les enfants à l'école", md: "Les enseignants les protègent : ils appliquent un plan de mise en sûreté." }] },
            { t: "astuce", md: "La sirène d'alerte est testée le **premier mercredi de chaque mois à midi**. Si tu l'entends un autre jour, ce n'est pas un exercice !" },
          ],
        },
      ],
      bilan: "Un risque naît quand un aléa menace des enjeux vulnérables. Recenser les usines dangereuses, maîtriser l'urbanisation autour et connaître les bons réflexes : voilà comment on réduit le risque technologique.",
    },

    "5e-geographie-07-risques-naturels": {
      accroche: "En 2010, un séisme de magnitude 7 tue plus de 200 000 personnes en Haïti. Un an plus tard, un séisme mille fois plus énergique frappe le Japon… et fait dix fois moins de victimes. La nature est-elle seule en cause ?",
      objectifs: [
        "Identifier les principaux aléas naturels et les espaces où ils sont fréquents",
        "Comparer la vulnérabilité d'Haïti et du Japon face à un séisme",
        "Décrire la prévention, l'alerte et la résilience",
      ],
      sections: [
        {
          titre: "Les grands aléas naturels et leurs espaces",
          blocs: [
            { t: "texte", md: "Les principaux **aléas naturels** sont les **séismes** et les **tsunamis**, les **éruptions volcaniques**, les **cyclones**, les **inondations**, les **sécheresses** et les glissements de terrain. Ils ne frappent pas n'importe où : chacun a ses espaces de prédilection." },
            { t: "tableau", titre: "Où les aléas sont-ils les plus fréquents ?", entetes: ["Aléa", "Origine", "Espaces les plus touchés"], lignes: [["Séisme, volcan", "mouvements des plaques tectoniques", "« ceinture de feu » du Pacifique, Méditerranée, Himalaya"], ["Tsunami", "séisme ou éruption sous la mer", "côtes du Pacifique et de l'océan Indien"], ["Cyclone", "air chaud et humide au-dessus des océans tropicaux", "Caraïbes, Philippines, golfe du Bengale"], ["Inondation", "pluies très fortes, crue d'un fleuve", "grands deltas et plaines (Bangladesh), vallées"], ["Sécheresse", "manque de pluie durable", "Sahel, Australie, pourtour méditerranéen"]] },
            { t: "definition", terme: "Tsunami", md: "Une **vague géante** provoquée par un séisme (ou une éruption) **sous la mer**. Au large, elle passe presque inaperçue ; près des côtes, elle peut atteindre plus de 10 mètres de haut." },
            { t: "savais-tu", md: "**Cyclone**, **ouragan** et **typhon** désignent le même phénomène ! On dit *ouragan* dans l'Atlantique, *typhon* dans le Pacifique nord-ouest et *cyclone* dans l'océan Indien." },
          ],
        },
        {
          titre: "Étude de cas : Haïti 2010 et Japon 2011",
          blocs: [
            { t: "carte", fond: "monde", titre: "Deux séismes, deux sociétés", zones: ["HT", "JP"], reperes: [{ nom: "Port-au-Prince (2010)", lat: 18.54, lon: -72.34 }, { nom: "Épicentre de 2011, au large de Sendai", lat: 38.30, lon: 142.37 }], legende: "Haïti, dans les Caraïbes, et le Japon, sur la ceinture de feu du Pacifique." },
            { t: "tableau", titre: "Comparer deux catastrophes", entetes: ["", "Haïti, 12 janvier 2010", "Japon, 11 mars 2011"], lignes: [["Magnitude", "7", "9 (environ 1 000 fois plus d'énergie)"], ["Victimes", "plus de 200 000 morts", "environ 18 000 morts et disparus, surtout à cause du tsunami"], ["Niveau de développement", "pays le plus pauvre d'Amérique", "pays riche, l'une des premières économies mondiales"], ["Constructions", "béton de mauvaise qualité, aucune norme", "immeubles **parasismiques**"], ["Préparation", "pas d'exercices, hôpitaux détruits", "alertes, exercices réguliers dès l'école"]] },
            { t: "graphique", type: "barres", titre: "Nombre de morts (ordres de grandeur)", unite: "milliers de morts", donnees: [{ label: "Haïti 2010 (magnitude 7)", valeur: 200 }, { label: "Japon 2011 (magnitude 9)", valeur: 18 }] },
            { t: "exemple", titre: "Ce que montre la comparaison", md: "Au Japon, les immeubles ont tenu : c'est le **tsunami** qui a fait l'essentiel des victimes. En Haïti, ce sont les **bâtiments effondrés** qui ont tué. La puissance de l'aléa n'explique donc pas tout : ==la richesse et la préparation changent tout==. C'est la **vulnérabilité** qui fait la différence." },
            { t: "verifie", q: "Pourquoi le séisme d'Haïti a-t-il fait beaucoup plus de morts que celui du Japon, alors qu'il était moins puissant ?", choix: ["Parce qu'Haïti est plus peuplé que le Japon", "Parce que la société haïtienne était beaucoup plus vulnérable", "Parce qu'il y a eu un tsunami en Haïti"], bonne: 1, explication: "Le Japon compte bien plus d'habitants qu'Haïti. Mais en Haïti, constructions fragiles, absence de préparation et secours désorganisés ont rendu la population très vulnérable." },
          ],
        },
        {
          titre: "Prévenir, alerter, se relever",
          blocs: [
            { t: "etapes", titre: "Avant, pendant, après la catastrophe", items: [{ titre: "Prévention (avant)", md: "Cartes des zones à risque, normes de construction, exercices d'évacuation." }, { titre: "Alerte (juste avant ou pendant)", md: "Sirènes, SMS, vigilance météo : on prévient la population." }, { titre: "Secours (pendant et juste après)", md: "Évacuer, soigner, abriter les sinistrés." }, { titre: "Reconstruction (après)", md: "Rebâtir, si possible en mieux et ailleurs que dans les zones les plus dangereuses." }] },
            { t: "definition", terme: "Construction parasismique", md: "Un bâtiment conçu pour **résister aux secousses** sans s'effondrer : fondations adaptées, structure souple, matériaux solides." },
            { t: "texte", md: "En France, les **PPRI** (plans de prévention des risques d'inondation) interdisent ou limitent les constructions dans les zones inondables. C'est logique : construire des logements dans une zone inondable **augmente le risque**, même si les crues ne deviennent pas plus fréquentes, car on augmente les enjeux.\n\n**Météo-France** publie une carte de **vigilance** en quatre couleurs : vert, jaune, orange et **rouge**, le niveau de danger le plus élevé." },
            { t: "definition", terme: "Résilience", md: "La capacité d'une société à **se relever** après une catastrophe et à **reconstruire en mieux**. Après 2011, le Japon a rehaussé ses **digues** anti-tsunami et déplacé des villages sur les hauteurs." },
            { t: "verifie", q: "Quelle couleur de vigilance Météo-France correspond au danger le plus élevé ?", choix: ["Orange", "Rouge", "Jaune"], bonne: 1, explication: "Rouge signale un phénomène dangereux d'intensité exceptionnelle : il faut suivre strictement les consignes. Orange, c'est déjà « soyez très vigilants »." },
          ],
        },
      ],
      bilan: "Le même aléa ne fait pas les mêmes dégâts partout : la vulnérabilité d'une société, sa préparation et sa résilience comptent autant que la force de la nature.",
    },

    "5e-geographie-08-developpement-durable-outils": {
      accroche: "Si tous les humains vivaient comme un habitant de France, il faudrait presque trois planètes Terre. Or nous n'en avons qu'une. Comment se développer sans épuiser la planète ? Et comment le montrer sur une carte ?",
      objectifs: [
        "Définir le développement durable, ses trois piliers et les ODD",
        "Comprendre l'empreinte écologique et le jour du dépassement",
        "Lire et réaliser une carte ou un croquis : titre, légende, échelle, orientation, figurés",
      ],
      sections: [
        {
          titre: "Le développement durable et ses trois piliers",
          blocs: [
            { t: "citation", texte: "Le développement durable est un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs.", auteur: "Rapport Brundtland", source: "ONU, « Notre avenir à tous », 1987" },
            { t: "schema", titre: "Les trois piliers du développement durable", legende: "Un projet est durable quand il est à la fois économiquement efficace, socialement juste et respectueux de l'environnement.", svg: `<svg viewBox="0 0 400 240"><circle class="aplat" cx="200" cy="82" r="72"/><circle class="aplat" cx="158" cy="158" r="72"/><circle class="aplat" cx="242" cy="158" r="72"/><circle class="trait" cx="200" cy="82" r="72" fill="none"/><circle class="trait" cx="158" cy="158" r="72" fill="none"/><circle class="trait" cx="242" cy="158" r="72" fill="none"/><text class="texte" x="200" y="40" text-anchor="middle">Environnement</text><text class="texte" x="120" y="192" text-anchor="middle">Social</text><text class="texte" x="278" y="192" text-anchor="middle">Économie</text><text class="texte-petit" x="160" y="112" text-anchor="middle">vivable</text><text class="texte-petit" x="240" y="112" text-anchor="middle">viable</text><text class="texte-petit" x="200" y="185" text-anchor="middle">équitable</text><text class="texte-pigment" x="200" y="136" text-anchor="middle">durable</text></svg>` },
            { t: "tableau", titre: "Les trois piliers en actions", entetes: ["Pilier", "Objectif", "Exemple d'action"], lignes: [["**Économique**", "produire des richesses, créer des emplois", "ouvrir une usine de panneaux solaires"], ["**Social**", "réduire les inégalités, satisfaire les besoins de tous", "construire une école, un dispensaire"], ["**Environnemental**", "préserver l'eau, l'air, les sols, la biodiversité", "replanter une forêt, trier les déchets"]] },
            { t: "texte", md: "En **2015**, l'ONU a adopté **17 objectifs de développement durable (ODD)** à atteindre d'ici **2030** : zéro faim, éducation de qualité, eau propre, énergie propre, lutte contre le changement climatique…" },
          ],
        },
        {
          titre: "Mesurer notre pression sur la planète",
          blocs: [
            { t: "definition", terme: "Empreinte écologique", md: "La **surface de terre et de mer** nécessaire pour produire tout ce qu'une personne consomme (nourriture, énergie, objets) et pour absorber ses déchets et son CO₂." },
            { t: "graphique", type: "barres", titre: "Combien de planètes faudrait-il si tout le monde vivait comme… (estimations arrondies)", unite: "planètes", donnees: [{ label: "un habitant des États-Unis", valeur: 5 }, { label: "un habitant de France", valeur: 2.9 }, { label: "un habitant de Chine", valeur: 2.4 }, { label: "la moyenne mondiale", valeur: 1.7 }, { label: "un habitant d'Inde", valeur: 0.8 }] },
            { t: "definition", terme: "Jour du dépassement", md: "La date à laquelle l'humanité a consommé tout ce que la Terre peut **renouveler en un an**. Après cette date, on puise dans les réserves. Il tombe désormais vers **fin juillet ou début août**." },
            { t: "verifie", q: "Si tous les humains vivaient comme un habitant de France, combien de planètes faudrait-il environ ?", choix: ["1", "Presque 3", "10"], bonne: 1, explication: "L'empreinte écologique d'un Français est d'environ 2,9 planètes : notre mode de vie consomme bien plus que ce que la Terre renouvelle." },
          ],
        },
        {
          titre: "Lire une carte : les éléments indispensables",
          blocs: [
            { t: "propriete", titre: "Les quatre éléments obligatoires d'une carte", md: "1. Un **titre** : de quoi parle la carte, où, quand ?\n2. Une **légende** : le sens des couleurs et des symboles.\n3. Une **échelle** : le rapport entre une distance sur la carte et la distance réelle.\n4. Une **orientation** : la direction du nord." },
            { t: "exemple", titre: "Lire une échelle", etapes: ["L'échelle est 1/1 000 000 : 1 cm sur la carte représente 1 000 000 cm sur le terrain.", "1 000 000 cm = 10 000 m = 10 km.", "Donc 1 cm représente **10 km**. Deux villes séparées de 4 cm sur la carte sont à 40 km."] },
            { t: "texte", md: "Un **planisphère** représente toute la Terre à plat. Une **carte thématique** montre un seul sujet : l'IDH, la population, les climats. Quand les pays sont coloriés selon la valeur d'un indicateur, on parle de carte par **plages de couleurs** (ou carte choroplèthe)." },
            { t: "carte", fond: "monde", titre: "Lire une carte thématique : des pays à IDH faible (vers 2022)", zones: ["NE", "TD", "SO", "CF", "SS", "ML", "BF"], legende: "Plage colorée : IDH inférieur à 0,45 environ. Presque tous ces pays sont en Afrique subsaharienne : c'est là que le développement humain est le plus faible." },
          ],
        },
        {
          titre: "Réaliser un croquis de géographie",
          blocs: [
            { t: "tableau", titre: "Les trois familles de figurés", entetes: ["Figuré", "Forme", "Pour représenter…"], lignes: [["**Ponctuel**", "point, carré, triangle", "une ville, une usine, un barrage"], ["**Linéaire**", "ligne, flèche", "un fleuve, une frontière, un flux (migrations, marchandises)"], ["**De surface**", "aplat de couleur, hachures", "une région, une zone agricole, un niveau d'IDH"]] },
            { t: "etapes", titre: "Les étapes d'un croquis", items: [{ titre: "Lire le sujet", md: "Comprendre ce qu'on doit montrer." }, { titre: "Trier les informations", md: "Garder l'essentiel et le classer en parties." }, { titre: "Construire la légende", md: "Choisir un figuré pour chaque information." }, { titre: "Dessiner", md: "D'abord les surfaces, puis les lignes, puis les points." }, { titre: "Nommer et titrer", md: "Écrire les noms (nomenclature) et donner un titre." }] },
            { t: "attention", md: "Sans **légende**, les couleurs ne veulent rien dire. Et une même couleur doit toujours avoir le même sens sur toute la carte." },
          ],
        },
      ],
      bilan: "Le développement durable concilie économie, social et environnement pour ne pas voler l'avenir des générations futures. Une bonne carte, avec titre, légende, échelle et orientation, aide à le montrer.",
    },

    "5e-geographie-09-reperes-monde": {
      accroche: "Quand tu te lèves à 7 heures à Paris, un élève de Tokyo rentre déjà de l'école et un New-Yorkais dort encore profondément. Pour comprendre le monde, il faut d'abord savoir s'y repérer.",
      objectifs: [
        "Situer les continents, les océans et les principales mers",
        "Situer les pays les plus peuplés et les grandes régions du monde",
        "Localiser les grandes villes mondiales et calculer un décalage horaire",
      ],
      sections: [
        {
          titre: "Continents, océans et mers",
          blocs: [
            { t: "tableau", titre: "Les grands ensembles du globe", entetes: ["Les continents", "Les cinq océans"], lignes: [["**Asie** : le plus grand et le plus peuplé", "**Pacifique** : le plus vaste"], ["**Afrique**", "**Atlantique**"], ["**Amérique**", "**Indien**"], ["**Europe**", "**Arctique** (ou Glacial Arctique)"], ["**Océanie** et **Antarctique**", "**Austral**, autour de l'Antarctique"]] },
            { t: "texte", md: "Quelques mers à connaître : la **Méditerranée**, qui sépare l'Europe de l'Afrique ; la **mer Rouge**, entre l'Afrique (Égypte, Soudan) et la péninsule Arabique ; la **mer du Nord** ; la **mer de Chine** ; la **mer des Caraïbes**." },
            { t: "definition", terme: "Équateur et tropiques", md: "L'**équateur** est la ligne imaginaire de latitude **0°** qui partage la Terre en deux hémisphères. Le **tropique du Cancer** est dans l'hémisphère Nord, le **tropique du Capricorne** dans l'hémisphère Sud. Près des pôles, on trouve les **cercles polaires**." },
            { t: "astuce", md: "Pour ne plus confondre les tropiques : dans l'ordre alphabétique, **Cancer** vient avant **Capricorne**, comme le **nord** vient avant le **sud** quand tu lis une carte de haut en bas." },
          ],
        },
        {
          titre: "Les pays les plus peuplés et les grandes régions",
          blocs: [
            { t: "graphique", type: "barres", titre: "Les huit pays les plus peuplés (environ, années 2020)", unite: "millions d'habitants", donnees: [{ label: "Inde", valeur: 1440 }, { label: "Chine", valeur: 1410 }, { label: "États-Unis", valeur: 340 }, { label: "Indonésie", valeur: 280 }, { label: "Pakistan", valeur: 240 }, { label: "Nigeria", valeur: 220 }, { label: "Brésil", valeur: 215 }, { label: "Bangladesh", valeur: 170 }] },
            { t: "carte", fond: "monde", titre: "Les pays les plus peuplés du monde", zones: ["IN", "CN", "US", "ID", "PK", "NG", "BR", "BD"], legende: "Cinq de ces huit pays sont en Asie. Le Nigeria, le plus peuplé d'Afrique, pourrait devenir le 3e pays le plus peuplé du monde vers 2050." },
            { t: "tableau", titre: "Les grandes régions du monde", entetes: ["Région", "Exemples de pays"], lignes: [["Asie de l'Est", "Chine, Japon, Corée du Sud"], ["Asie du Sud", "Inde, Pakistan, Bangladesh"], ["Asie du Sud-Est", "Indonésie, Viêt Nam, Philippines"], ["Moyen-Orient", "Arabie saoudite, Iran, Irak"], ["Maghreb", "Maroc, Algérie, Tunisie"], ["Afrique subsaharienne", "Nigeria, Éthiopie, Niger"], ["Amérique latine", "Brésil, Mexique, Argentine"], ["Amérique du Nord", "États-Unis, Canada"]] },
            { t: "verifie", q: "Quel est le continent le plus peuplé ?", choix: ["L'Afrique", "L'Asie", "L'Europe", "L'Amérique"], bonne: 1, explication: "L'Asie rassemble près de 6 humains sur 10, avec l'Inde, la Chine, l'Indonésie, le Pakistan et le Bangladesh." },
          ],
        },
        {
          titre: "Les villes mondiales",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quelques grandes villes mondiales", reperes: [{ nom: "Tokyo", lat: 35.68, lon: 139.69 }, { nom: "Delhi", lat: 28.61, lon: 77.21 }, { nom: "Shanghai", lat: 31.23, lon: 121.47 }, { nom: "São Paulo", lat: -23.55, lon: -46.63 }, { nom: "Mexico", lat: 19.43, lon: -99.13 }, { nom: "Le Caire", lat: 30.04, lon: 31.24 }, { nom: "New York", lat: 40.71, lon: -74.01 }, { nom: "Londres", lat: 51.51, lon: -0.13 }, { nom: "Paris", lat: 48.86, lon: 2.35 }] },
            { t: "texte", md: "Aujourd'hui, **plus d'un humain sur deux vit en ville**. **Tokyo** est la plus grande agglomération du monde, avec environ 37 millions d'habitants. Delhi, Shanghai, São Paulo, Mexico et Le Caire dépassent tous 20 millions. New York, Londres et Paris sont moins peuplées, mais très puissantes : on y trouve sièges d'entreprises, bourses, grandes universités." },
          ],
        },
        {
          titre: "Les fuseaux horaires",
          blocs: [
            { t: "propriete", titre: "24 fuseaux horaires", md: "La Terre fait un tour sur elle-même en 24 heures. On l'a donc découpée en **24 fuseaux** de **15° de longitude** chacun (360° ÷ 24 = 15°). L'heure de référence est celle du **méridien de Greenwich** (0° de longitude), appelée **UTC**. ==Vers l'est, on avance l'heure ; vers l'ouest, on la recule.==" },
            { t: "droite", titre: "Décalage par rapport à l'heure UTC (en hiver)", min: -6, max: 10, pas: 1, points: [{ x: -5, label: "New York" }, { x: 0, label: "Londres" }, { x: 1, label: "Paris" }, { x: 2, label: "Le Caire" }, { x: 9, label: "Tokyo" }] },
            { t: "exemple", titre: "Calculer l'heure ailleurs", etapes: ["Il est 12 h à Paris (UTC+1). Tokyo est à UTC+9 : 9 − 1 = 8 fuseaux plus à l'est.", "On ajoute 8 heures : 12 h + 8 h = **20 h** à Tokyo.", "Il est 15 h à Paris. New York est à UTC−5 : 1 − (−5) = 6 fuseaux plus à l'ouest.", "On retire 6 heures : 15 h − 6 h = **9 h** à New York."] },
            { t: "savais-tu", md: "Dans le Pacifique, la **ligne de changement de date** suit à peu près le méridien 180°. Si tu la franchis vers l'**ouest**, tu **avances d'une journée** : le lundi devient mardi !" },
            { t: "verifie", q: "Il est 12 h à Paris (UTC+1). Quelle heure est-il à Tokyo (UTC+9) ?", choix: ["4 h", "20 h", "21 h"], bonne: 1, explication: "Tokyo est 8 fuseaux à l'est de Paris (9 − 1 = 8). Vers l'est, on avance : 12 + 8 = 20 h." },
          ],
        },
      ],
      bilan: "Continents, océans, pays géants et villes mondiales : ces repères forment la carte mentale qui te permet de situer chaque événement du monde, à la bonne heure.",
    },
  },
};
