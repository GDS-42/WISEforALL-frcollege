// Cours ÉCLORE — 5e Technologie. Schéma : docs/COURS.md
export default {
  id: "5e-technologie",
  chapitres: {
    "5e-technologie-01-design-innovation": {
      accroche: "En 1950, Marcel Bich lance le stylo Bic Cristal. Il n'a pas inventé le stylo à bille : László Bíró l'avait breveté en 1938. Mais son stylo est si simple, si solide et si bon marché qu'il s'en est vendu des dizaines de milliards. C'est ça, une innovation : une idée utile qui s'impose.",
      objectifs: [
        "Identifier le besoin auquel répond un objet",
        "Distinguer fonction d'usage, fonction d'estime et contraintes",
        "Rédiger un cahier des charges simple",
        "Chercher et choisir des idées : brainstorming, croquis, prototype",
      ],
      sections: [
        {
          titre: "Tout objet répond à un besoin",
          blocs: [
            { t: "texte", md: "Regarde autour de toi : ta trousse, ta chaise, ton cartable. Aucun de ces objets n'est là par hasard. Chacun a été **conçu** par quelqu'un pour répondre à un besoin : ranger, s'asseoir, transporter.\n\nAvant de dessiner quoi que ce soit, un concepteur se pose donc toujours la même question : ==quel besoin mon objet doit-il satisfaire ?==" },
            { t: "definition", terme: "Besoin", md: "Une **nécessité** ou une **envie** qu'une personne cherche à satisfaire. Se déplacer, boire, s'éclairer, communiquer sont des besoins. Tout objet technique répond à un besoin." },
            { t: "schema", titre: "La « bête à cornes » d'une gourde", legende: "Trois questions pour exprimer le besoin : pour qui ? sur quoi ? dans quel but ?", svg: `<svg viewBox="0 0 400 230"><text class="texte-petit" x="100" y="16" text-anchor="middle">À qui rend-il service ?</text><text class="texte-petit" x="300" y="16" text-anchor="middle">Sur quoi agit-il ?</text><ellipse class="aplat-papier" cx="100" cy="50" rx="70" ry="24"/><ellipse class="trait" cx="100" cy="50" rx="70" ry="24" fill="none"/><text class="texte" x="100" y="55" text-anchor="middle">L'élève</text><ellipse class="aplat-papier" cx="300" cy="50" rx="70" ry="24"/><ellipse class="trait" cx="300" cy="50" rx="70" ry="24" fill="none"/><text class="texte" x="300" y="55" text-anchor="middle">L'eau</text><path class="trait" d="M100 74 Q115 125 140 125" fill="none"/><path class="trait" d="M300 74 Q285 125 260 125" fill="none"/><ellipse class="aplat" cx="200" cy="125" rx="60" ry="24"/><ellipse class="trait" cx="200" cy="125" rx="60" ry="24" fill="none"/><text class="texte" x="200" y="130" text-anchor="middle">La gourde</text><line class="trait" x1="200" y1="149" x2="200" y2="176" marker-end="url(#fl)"/><rect class="trait" x="60" y="182" width="280" height="34" rx="6" fill="none"/><text class="texte-petit" x="200" y="196" text-anchor="middle">Dans quel but ?</text><text class="texte-pigment" x="200" y="211" text-anchor="middle">transporter de l'eau pour boire</text></svg>` },
            { t: "verifie", q: "Lequel de ces énoncés est un **besoin** ?", choix: ["Une gourde en aluminium bleu", "Pouvoir boire pendant une randonnée", "Un bouchon à vis"], bonne: 1, explication: "Le besoin est ce que l'on cherche à satisfaire (boire en randonnée). La gourde et son bouchon sont des solutions techniques à ce besoin." },
          ],
        },
        {
          titre: "Fonctions et contraintes",
          blocs: [
            { t: "texte", md: "Un objet rend des services : ce sont ses **fonctions**. Il doit aussi respecter des limites : ce sont ses **contraintes**." },
            { t: "definition", terme: "Fonction d'usage", md: "Elle répond à la question « **À quoi sert l'objet ?** ». La fonction d'usage d'un vélo est de se déplacer ; celle d'une gourde, de transporter une boisson." },
            { t: "definition", terme: "Fonction d'estime", md: "Elle concerne **ce qui plaît** à l'utilisateur : la forme, la couleur, le style, la matière agréable au toucher. Deux gourdes qui ont la même fonction d'usage peuvent avoir des fonctions d'estime très différentes." },
            { t: "tableau", titre: "Les grandes familles de contraintes", entetes: ["Contrainte", "Question à se poser", "Exemple pour une gourde"], lignes: [["Coût", "Combien peut-il coûter ?", "Moins de 10 €"], ["Sécurité", "Peut-il blesser ?", "Pas de bord coupant, matériau non toxique"], ["Environnement", "Quel impact sur la planète ?", "Matériau recyclable"], ["Esthétique", "Est-il beau, agréable ?", "Plusieurs couleurs au choix"], ["Dimensions", "Quelle taille, quelle masse ?", "50 cL, moins de 200 g"], ["Délai", "Pour quand ?", "Prête pour la rentrée"]] },
            { t: "attention", md: "Ne confonds pas fonction et contrainte. « Contenir de l'eau » est une **fonction** (ce que l'objet fait). « Ne pas fuir » ou « coûter moins de 10 € » sont des **contraintes** (ce qu'il doit respecter)." },
            { t: "verifie", q: "Pour un hochet de bébé, laquelle est une **contrainte de sécurité** ?", choix: ["Être de couleur vive", "Ne pas contenir de petites pièces qui se détachent", "Coûter moins de 5 €"], bonne: 1, explication: "Une petite pièce pourrait être avalée : c'est un danger. La couleur relève de l'esthétique, le prix du coût." },
          ],
        },
        {
          titre: "Le cahier des charges",
          blocs: [
            { t: "propriete", titre: "Cahier des charges", md: "Le **cahier des charges** est le document qui liste ce que l'objet doit **faire** (ses fonctions) et ce qu'il doit **respecter** (ses contraintes). Il est rédigé **au début** du projet : il sert de référence pour concevoir, puis pour tester l'objet." },
            { t: "exemple", titre: "Cahier des charges d'une gourde", md: "**Besoin** : transporter de l'eau au collège.\n**Fonction d'usage** : contenir et transporter 50 cL d'eau.\n**Contraintes** : peser moins de 200 g, ne pas fuir, coûter moins de 10 €, être recyclable.\n\nLa marque préférée de ton cousin ou le nom du vendeur n'ont **rien à faire** dans un cahier des charges : on n'y met que ce qui est mesurable ou vérifiable." },
            { t: "exemple", titre: "Respecter un budget", etapes: ["Le cahier des charges impose un coût maximal de 12 €.", "Matériaux + composants : 7,50 + 3,20 = 10,70 €.", "Il reste au maximum 12 − 10,70 = 1,30 € pour l'emballage."] },
          ],
        },
        {
          titre: "Des idées au prototype",
          blocs: [
            { t: "texte", md: "Une fois le besoin et le cahier des charges fixés, place à la créativité ! Pour trouver de bonnes idées, il faut d'abord en trouver **beaucoup**, puis les trier." },
            { t: "definition", terme: "Brainstorming", md: "Ou **remue-méninges** : une séance où chacun propose un maximum d'idées, même farfelues, **sans les juger**. On trie seulement à la fin." },
            { t: "etapes", titre: "La démarche de conception", items: [{ titre: "Besoin", md: "Identifier le besoin à satisfaire." }, { titre: "Cahier des charges", md: "Lister fonctions et contraintes." }, { titre: "Brainstorming", md: "Produire beaucoup d'idées sans les juger." }, { titre: "Croquis", md: "Dessiner rapidement, **à main levée**, plusieurs solutions." }, { titre: "Choix", md: "Comparer les idées au cahier des charges et garder la meilleure." }, { titre: "Prototype", md: "Fabriquer un premier exemplaire et le **tester**." }] },
            { t: "definition", terme: "Prototype", md: "Le **premier exemplaire** d'un objet, fabriqué pour tester une idée avant de lancer la production." },
            { t: "astuce", md: "Pour choisir entre plusieurs croquis, ne vote pas « à la tête » : fais un petit tableau. Une ligne par contrainte du cahier des charges, une colonne par idée, et coche ce qui est respecté. L'idée qui coche le plus de cases gagne." },
          ],
        },
        {
          titre: "Innover, c'est souvent améliorer",
          blocs: [
            { t: "definition", terme: "Innovation", md: "Une **nouveauté utile qui s'impose** auprès des utilisateurs. Elle améliore souvent un objet qui existe déjà : moins cher, plus léger, plus pratique, plus économe." },
            { t: "texte", md: "Une **invention** est une idée nouvelle. Une **innovation**, elle, réussit à entrer dans la vie des gens. La trottinette existait depuis longtemps ; y ajouter un moteur électrique et une batterie légère a changé la façon de se déplacer en ville." },
            { t: "verifie", q: "Une innovation est-elle forcément une invention totalement nouvelle ?", choix: ["Oui, toujours", "Non, elle améliore souvent un objet existant"], bonne: 1, explication: "Le stylo Bic ou la trottinette électrique améliorent des objets qui existaient déjà. Une innovation est une nouveauté utile qui s'impose, pas forcément une idée sortie de rien." },
          ],
        },
      ],
      bilan: "Un objet naît d'un besoin, se précise dans un cahier des charges, puis passe du brainstorming au croquis et du croquis au prototype.",
    },
    "5e-technologie-02-objets-techniques-evolution": {
      accroche: "Au-dessus de la vallée du Tarn, des voitures roulent à 270 m de haut, plus haut que la tour Montparnasse. Le viaduc de Millau, inauguré en 2004, tient grâce à des câbles tendus comme des cordes de harpe. Comment un pont aussi fin peut-il porter autant ?",
      objectifs: [
        "Décrire les ouvrages et les parties d'un pont",
        "Reconnaître les quatre grands types de ponts",
        "Situer l'évolution d'un objet technique dans le temps",
        "Décrire le cycle de vie d'un produit et ses impacts",
      ],
      sections: [
        {
          titre: "Les ouvrages, de grandes constructions",
          blocs: [
            { t: "definition", terme: "Ouvrage", md: "Une **grande construction** fixe : maison, immeuble, pont, barrage, tunnel. Comme les objets, les ouvrages répondent à des besoins : **s'abriter** (maison), **franchir** un obstacle (pont, tunnel), **retenir l'eau** (barrage)." },
            { t: "texte", md: "Un même besoin peut avoir plusieurs **solutions techniques**. Pour s'abriter, on peut construire une maison à **ossature bois** (légère, rapide à monter, isolante) ou une maison en **béton** (lourde, très solide, durable). Le choix dépend du climat, du budget, des matériaux locaux.\n\nUn **barrage** retient l'eau d'une rivière : il forme un lac artificiel qui sert de réserve d'eau et peut produire de l'électricité." },
          ],
        },
        {
          titre: "Les parties et les types de ponts",
          blocs: [
            { t: "definition", terme: "Les parties d'un pont", md: "Le **tablier** est la partie plate où l'on circule. Il repose sur des appuis : les **piles** au milieu, les **culées** sur les rives. Certains ponts ont aussi des **pylônes** et des **câbles**. La distance entre deux appuis s'appelle une **travée**." },
            { t: "schema", titre: "Les quatre grands types de ponts", legende: "Poutre : le tablier repose sur des piles. Arc : la courbe reporte les charges vers les appuis. Suspendu : des suspentes verticales pendent de gros câbles porteurs. Haubans : des câbles obliques partent directement des pylônes.", svg: `<svg viewBox="0 0 400 300"><text class="texte" x="100" y="20" text-anchor="middle">À poutre</text><rect class="aplat" x="25" y="118" width="160" height="17"/><rect class="aplat-fort" x="10" y="70" width="15" height="65"/><rect class="aplat-fort" x="185" y="70" width="10" height="65"/><rect class="trait" x="15" y="60" width="175" height="10" fill="none"/><rect class="trait" x="70" y="70" width="8" height="55" fill="none"/><rect class="trait" x="122" y="70" width="8" height="55" fill="none"/><text class="texte-petit" x="100" y="52" text-anchor="middle">tablier</text><text class="texte-petit" x="100" y="100" text-anchor="middle">piles</text><text class="texte-petit" x="29" y="92">culée</text><text class="texte" x="300" y="20" text-anchor="middle">En arc</text><rect class="aplat" x="225" y="118" width="150" height="17"/><rect class="trait" x="215" y="55" width="170" height="8" fill="none"/><path class="trait" d="M225 120 Q300 20 375 120" fill="none"/><g class="trait-fin"><line x1="250" y1="63" x2="250" y2="98"/><line x1="275" y1="63" x2="275" y2="84"/><line x1="325" y1="63" x2="325" y2="84"/><line x1="350" y1="63" x2="350" y2="98"/></g><text class="texte-petit" x="300" y="108" text-anchor="middle">arc</text><line class="pointille" x1="200" y1="10" x2="200" y2="290"/><line class="pointille" x1="10" y1="150" x2="390" y2="150"/><text class="texte" x="100" y="172" text-anchor="middle">Suspendu</text><rect class="aplat" x="10" y="268" width="180" height="17"/><rect class="trait" x="10" y="255" width="180" height="7" fill="none"/><rect class="aplat-fort" x="50" y="190" width="6" height="85"/><rect class="aplat-fort" x="144" y="190" width="6" height="85"/><path class="trait" d="M10 250 L53 190 Q100 290 147 190 L190 250" fill="none"/><g class="trait-fin"><line x1="70" y1="220" x2="70" y2="255"/><line x1="85" y1="235" x2="85" y2="255"/><line x1="100" y1="240" x2="100" y2="255"/><line x1="115" y1="235" x2="115" y2="255"/><line x1="130" y1="220" x2="130" y2="255"/></g><text class="texte" x="245" y="172" text-anchor="middle">À haubans</text><rect class="aplat" x="210" y="265" width="180" height="20"/><rect class="trait" x="210" y="250" width="180" height="7" fill="none"/><rect class="aplat-fort" x="297" y="175" width="6" height="105"/><g class="trait-fin"><line x1="300" y1="180" x2="220" y2="250"/><line x1="300" y1="180" x2="240" y2="250"/><line x1="300" y1="180" x2="260" y2="250"/><line x1="300" y1="180" x2="280" y2="250"/><line x1="300" y1="180" x2="320" y2="250"/><line x1="300" y1="180" x2="340" y2="250"/><line x1="300" y1="180" x2="360" y2="250"/><line x1="300" y1="180" x2="380" y2="250"/></g></svg>` },
            { t: "tableau", titre: "Quatre types, quatre exemples", entetes: ["Type", "Principe", "Exemple célèbre"], lignes: [["À poutre", "Le tablier est **posé** sur des piles", "Les viaducs d'autoroute"], ["En arc", "Une courbe **reporte** les charges sur les appuis", "Le pont du Gard (Ier siècle)"], ["Suspendu", "Le tablier est **accroché** par des suspentes à des câbles porteurs", "Le Golden Gate (1937)"], ["À haubans", "Des câbles **obliques** partent des pylônes", "Le pont de Normandie (1995)"]] },
            { t: "exemple", titre: "Le viaduc de Millau", md: "Ses câbles obliques partent de **sept pylônes** et tiennent le tablier jusqu'à 270 m au-dessus du Tarn : c'est un pont **à haubans**. Il répond à un besoin précis : franchir la vallée sans faire passer les voitures dans la ville de Millau." },
            { t: "exemple", titre: "Combien de piles ?", etapes: ["Un pont à poutre a des travées de 25 m et franchit une rivière de 150 m.", "Nombre de travées : 150 ÷ 25 = 6.", "Entre 6 travées, il y a 5 appuis intermédiaires : il faut **5 piles** (les deux culées sont sur les rives)."] },
            { t: "verifie", q: "Dans un pont suspendu, comment le tablier est-il tenu ?", choix: ["Par des câbles obliques fixés aux pylônes", "Par des suspentes verticales accrochées à des câbles porteurs", "Par une courbe en pierre posée dessous"], bonne: 1, explication: "Les suspentes verticales pendent des grands câbles porteurs. Les câbles obliques partant des pylônes, ce sont les haubans." },
          ],
        },
        {
          titre: "Les objets évoluent dans le temps",
          blocs: [
            { t: "texte", md: "Pendant des siècles, on s'est éclairé à la flamme : lampe à huile, puis **bougie**. Aujourd'hui, une petite **DEL** éclaire mieux en consommant dix fois moins. Le besoin (voir la nuit) n'a pas changé ; les solutions, si." },
            { t: "frise", titre: "L'éclairage, de la flamme à la DEL", evenements: [{ date: 1780, label: "Lampe d'Argand", detail: "Une lampe à huile à mèche ronde, bien plus lumineuse que la bougie." }, { date: 1853, label: "Lampe à pétrole", detail: "Le pétrole, moins cher, remplace les huiles." }, { date: 1879, label: "Lampe à incandescence", detail: "Swan et Edison font briller un filament chauffé par l'électricité." }, { date: 1938, label: "Tube fluorescent", detail: "Les « néons » éclairent bureaux et usines." }, { date: 1962, label: "Première DEL", detail: "Une diode électroluminescente rouge, d'abord pour les voyants." }, { date: 2012, label: "Fin des ampoules classiques", detail: "L'Union européenne retire de la vente les ampoules à incandescence, trop gourmandes." }] },
            { t: "propriete", titre: "Pourquoi les objets évoluent", md: "Un objet technique évolue avec les **besoins** des utilisateurs, les **matériaux** disponibles, les **techniques** de fabrication et les **sources d'énergie**. Le téléphone en est un bon exemple : téléphone fixe à cadran, puis téléphone portable (1983), puis smartphone (2007)." },
            { t: "verifie", q: "Range du plus ancien au plus récent : DEL, bougie, lampe à incandescence, lampe à pétrole.", choix: ["Bougie, lampe à pétrole, lampe à incandescence, DEL", "Bougie, lampe à incandescence, lampe à pétrole, DEL", "Lampe à pétrole, bougie, DEL, lampe à incandescence"], bonne: 0, explication: "La bougie est la plus ancienne. La lampe à pétrole date des années 1850, la lampe à incandescence de 1879 et la DEL d'éclairage s'impose au XXIe siècle." },
          ],
        },
        {
          titre: "Le cycle de vie et les impacts",
          blocs: [
            { t: "etapes", titre: "Le cycle de vie d'un produit", cycle: true, items: [{ titre: "Extraction", md: "On extrait les **matières premières** : minerais, pétrole, bois." }, { titre: "Fabrication", md: "On transforme les matériaux et on assemble l'objet en usine." }, { titre: "Distribution", md: "On transporte l'objet jusqu'au magasin ou chez toi." }, { titre: "Utilisation", md: "L'objet sert, consomme parfois de l'énergie, s'entretient." }, { titre: "Fin de vie", md: "Il est **recyclé** (ses matériaux repartent dans le cycle) ou devient un **déchet**." }] },
            { t: "texte", md: "Chaque étape a des **impacts**. Impacts **environnementaux** : énergie dépensée, pollution, déchets. Impacts **sociaux** : le lave-linge, arrivé dans les foyers dans les années 1950-1960, a fait gagner des heures de lessive à la main chaque semaine et changé la vie quotidienne des familles." },
            { t: "astuce", md: "L'action la plus efficace pour réduire l'impact d'un objet se joue dès la **conception** : un objet solide, **réparable** et **recyclable** reste utile plus longtemps et évite d'en fabriquer un nouveau." },
            { t: "verifie", q: "Par quelle étape commence le cycle de vie d'un produit ?", choix: ["La fabrication", "L'extraction des matières premières", "L'utilisation"], bonne: 1, explication: "Avant de fabriquer, il faut extraire les matières premières. Le cycle se termine par la fin de vie : recyclage ou déchet." },
          ],
        },
      ],
      bilan: "Ponts, maisons ou lampes : chaque solution technique répond à un besoin, évolue avec son époque et laisse une trace sur tout son cycle de vie.",
    },
    "5e-technologie-03-structures-materiaux": {
      accroche: "La tour Eiffel pèse environ 7 300 tonnes de fer, et pourtant elle est pleine de vide. Son secret : des milliers de petits triangles. Pourquoi cette forme, et pourquoi du fer plutôt que de la pierre ?",
      objectifs: [
        "Reconnaître la compression, la traction, la flexion et la torsion",
        "Expliquer comment la triangulation rend une structure rigide",
        "Rendre un objet plus stable",
        "Choisir un matériau d'après ses propriétés",
      ],
      sections: [
        {
          titre: "Les efforts subis par une structure",
          blocs: [
            { t: "texte", md: "Une **structure** est l'ossature qui porte un objet ou un ouvrage : la charpente d'une maison, le cadre d'un vélo, les piles d'un pont. Sous les charges (son propre poids, les voitures, le vent), chaque pièce subit des **efforts**." },
            { t: "schema", titre: "Trois efforts à reconnaître", legende: "Compression : les forces se rapprochent et écrasent. Traction : elles s'éloignent et étirent. Flexion : une charge fait plier une pièce posée sur des appuis.", svg: `<svg viewBox="0 0 400 230"><text class="texte" x="66" y="16" text-anchor="middle">Compression</text><rect class="aplat" x="52" y="60" width="28" height="110"/><rect class="trait" x="52" y="60" width="28" height="110" fill="none"/><line stroke-width="2.5" x1="66" y1="24" x2="66" y2="56" stroke="var(--pigment)" marker-end="url(#fl-p)"/><line stroke-width="2.5" x1="66" y1="206" x2="66" y2="174" stroke="var(--pigment)" marker-end="url(#fl-p)"/><text class="texte-petit" x="86" y="118">écrase</text><text class="texte" x="200" y="16" text-anchor="middle">Traction</text><rect class="aplat" x="196" y="60" width="8" height="110"/><rect class="trait" x="196" y="60" width="8" height="110" fill="none"/><line stroke-width="2.5" x1="200" y1="56" x2="200" y2="26" stroke="var(--pigment)" marker-end="url(#fl-p)"/><line stroke-width="2.5" x1="200" y1="174" x2="200" y2="204" stroke="var(--pigment)" marker-end="url(#fl-p)"/><text class="texte-petit" x="212" y="118">étire</text><text class="texte" x="335" y="16" text-anchor="middle">Flexion</text><path class="aplat" d="M280 100 Q335 122 390 100 L390 114 Q335 136 280 114 Z"/><path class="trait" d="M280 100 Q335 122 390 100 L390 114 Q335 136 280 114 Z" fill="none"/><polygon class="trait" points="288,115 280,131 296,131" fill="none"/><polygon class="trait" points="382,115 374,131 390,131" fill="none"/><line stroke-width="2.5" x1="335" y1="44" x2="335" y2="104" stroke="var(--pigment)" marker-end="url(#fl-p)"/><text class="texte-petit" x="345" y="62">charge</text><text class="texte-petit" x="335" y="160" text-anchor="middle">plie</text><text class="texte-petit" x="66" y="224" text-anchor="middle">ex. : pile de pont</text><text class="texte-petit" x="200" y="224" text-anchor="middle">ex. : câble</text><text class="texte-petit" x="335" y="224" text-anchor="middle">ex. : poutre chargée</text></svg>` },
            { t: "tableau", titre: "Les quatre efforts", entetes: ["Effort", "Ce qu'il fait", "Exemple"], lignes: [["**Compression**", "écrase, raccourcit", "une pile de pont, un pied de table"], ["**Traction**", "étire, allonge", "un câble de pont suspendu, une corde de balançoire"], ["**Flexion**", "fait plier", "une poutre chargée en son milieu, un plongeoir"], ["**Torsion**", "tord", "un tournevis qui serre une vis, une clé dans une serrure"]] },
            { t: "verifie", q: "Quel effort subit le câble porteur d'un pont suspendu ?", choix: ["La compression", "La traction", "La torsion"], bonne: 1, explication: "Le tablier pend au câble et tire dessus : le câble est étiré, il travaille en traction. La pile, elle, est écrasée : compression." },
          ],
        },
        {
          titre: "La triangulation rend rigide",
          blocs: [
            { t: "texte", md: "Fabrique un carré avec quatre baguettes et des attaches : pousse sur un coin, il s'écrase en losange. Fais la même chose avec trois baguettes en triangle : impossible de le déformer sans casser une baguette." },
            { t: "propriete", titre: "Le triangle est indéformable", md: "Le **triangle** est la seule forme qui ne se déforme pas quand ses côtés gardent la même longueur. Ajouter des barres en diagonale pour créer des triangles s'appelle la **triangulation**. On la retrouve dans les charpentes, les grues, les pylônes électriques et la tour Eiffel." },
            { t: "schema", titre: "Un cadre carré, avant et après triangulation", legende: "Une seule diagonale divise le carré en deux triangles : le cadre devient rigide.", svg: `<svg viewBox="0 0 400 180"><rect class="trait" x="20" y="50" width="70" height="70" fill="none"/><g fill="var(--encre)"><circle cx="20" cy="50" r="3"/><circle cx="90" cy="50" r="3"/><circle cx="20" cy="120" r="3"/><circle cx="90" cy="120" r="3"/></g><text class="texte-petit" x="55" y="145" text-anchor="middle">cadre carré</text><line stroke-width="2.5" x1="150" y1="35" x2="185" y2="35" stroke="var(--pigment)" marker-end="url(#fl-p)"/><polygon class="aplat" points="140,120 210,120 235,50 165,50"/><polygon class="trait" points="140,120 210,120 235,50 165,50" fill="none"/><text class="texte-petit" x="188" y="145" text-anchor="middle">il se déforme</text><line class="pointille" x1="262" y1="20" x2="262" y2="165"/><line stroke-width="2.5" x1="295" y1="35" x2="330" y2="35" stroke="var(--pigment)" marker-end="url(#fl-p)"/><polygon class="aplat" points="290,120 360,120 360,50"/><rect class="trait" x="290" y="50" width="70" height="70" fill="none"/><line stroke-width="2.5" x1="290" y1="120" x2="360" y2="50" stroke="var(--pigment)"/><g fill="var(--encre)"><circle cx="290" cy="50" r="3"/><circle cx="360" cy="50" r="3"/><circle cx="290" cy="120" r="3"/><circle cx="360" cy="120" r="3"/></g><text class="texte-petit" x="325" y="145" text-anchor="middle">triangulé : rigide</text><text class="texte-main" x="325" y="170" text-anchor="middle">2 triangles</text></svg>` },
          ],
        },
        {
          titre: "Stable ou pas stable ?",
          blocs: [
            { t: "propriete", titre: "Règle de stabilité", md: "Un objet est plus **stable** quand sa **base est large** et que son **centre de gravité est bas**. Le centre de gravité est le point où l'on peut considérer que tout le poids de l'objet est rassemblé." },
            { t: "exemple", titre: "La lampe de bureau", md: "Une lampe avec un long bras risque de basculer. Le concepteur lui donne un **socle large et lourd** : la base s'élargit et le centre de gravité descend. Même idée pour une grue de chantier, lestée par des blocs de béton à sa base." },
            { t: "attention", md: "Mettre des objets lourds en haut d'une étagère la rend **moins** stable : le centre de gravité monte. Range toujours le plus lourd en bas." },
          ],
        },
        {
          titre: "Les familles de matériaux",
          blocs: [
            { t: "tableau", titre: "Quatre familles de matériaux", entetes: ["Famille", "Exemples", "Propriétés typiques"], lignes: [["**Métaux**", "acier, aluminium, cuivre", "résistants, conduisent l'électricité et la chaleur ; l'acier rouille sans protection"], ["**Organiques**", "bois, plastiques, carton", "légers, isolants ; le bois craint l'humidité"], ["**Minéraux**", "béton, verre, céramique", "durs, résistent à la compression ; le verre casse sous un choc"], ["**Composites**", "fibre de carbone, béton armé", "associent plusieurs matériaux pour cumuler leurs qualités"]] },
            { t: "definition", terme: "Matériau composite", md: "Un matériau formé de **plusieurs matériaux assemblés**, dont les qualités s'additionnent. Le **béton armé** associe le béton, qui résiste bien à la compression mais mal à la traction, à des **barres d'acier** qui, elles, résistent à la traction." },
            { t: "savais-tu", md: "Le béton armé a été mis au point en France au XIXe siècle. Joseph Monier, un jardinier, a d'abord renforcé ses bacs à fleurs en ciment avec un grillage de fer !" },
          ],
        },
        {
          titre: "Choisir le bon matériau",
          blocs: [
            { t: "liste", titre: "Les propriétés qui guident le choix", items: ["**Masse volumique** : masse d'un volume donné. L'aluminium (2 700 kg/m³) est presque trois fois plus léger que l'acier (7 800 kg/m³).", "**Résistance** : supporter un effort sans casser.", "**Dureté** : résister aux rayures et aux chocs.", "**Élasticité** : se déformer puis reprendre sa forme.", "**Conductivité** électrique ou thermique : laisser passer le courant ou la chaleur. Le cuivre est très bon conducteur électrique : on en fait des fils.", "**Résistance à la corrosion**, **prix**, **recyclabilité**."] },
            { t: "exemple", titre: "Une passerelle de jardin : acier ou bois ?", md: "L'**acier** est plus résistant mais rouille sans peinture. Le **bois** est léger et agréable mais doit être traité contre l'humidité. Aucun n'est « le meilleur » : on choisit celui qui respecte le mieux les **contraintes du cahier des charges** (prix, entretien, aspect)." },
            { t: "exemple", titre: "Couper une barre pour un trépied", etapes: ["La barre d'aluminium mesure 2,4 m = 240 cm.", "On la partage en 3 montants identiques : 240 ÷ 3 = 80.", "Chaque montant mesure **80 cm**."] },
            { t: "verifie", q: "Pour le cadre d'un vélo de compétition, très léger et très résistant, quel matériau choisir ?", choix: ["Le béton", "La fibre de carbone", "Le verre", "Le carton"], bonne: 1, explication: "La fibre de carbone est un composite à la fois très léger et très résistant. C'est pour cela qu'on l'utilise en compétition, malgré son prix élevé." },
          ],
        },
      ],
      bilan: "Une bonne structure sait quels efforts elle subit, se triangule pour rester rigide, garde les pieds larges et le poids bas, et utilise le matériau dont les propriétés répondent au besoin.",
    },
    "5e-technologie-04-modelisation-simulation": {
      accroche: "Avant de construire le viaduc de Millau, des ingénieurs ont placé une maquette du pont dans une soufflerie, et des ordinateurs ont simulé des tempêtes que l'ouvrage n'a encore jamais subies. Pourquoi ? Parce qu'on ne teste pas un pont de 2 460 m en le construisant pour voir.",
      objectifs: [
        "Distinguer maquette, modèle numérique et simulation",
        "Lire un dessin technique : vues, traits, perspective",
        "Utiliser une échelle pour passer du plan à la réalité",
        "Interpréter une simulation pour améliorer une solution",
      ],
      sections: [
        {
          titre: "Représenter un objet avant de le fabriquer",
          blocs: [
            { t: "texte", md: "Fabriquer coûte cher et prend du temps. Alors on commence par **représenter** l'objet : pour le montrer, le discuter, le tester. Il existe plusieurs façons de le faire." },
            { t: "definition", terme: "Maquette", md: "Une représentation **physique**, souvent **réduite**, d'un objet ou d'un ouvrage : maquette en carton d'une maison, maquette d'avion. On peut la toucher et la tourner dans ses mains." },
            { t: "definition", terme: "Modèle numérique 3D", md: "La représentation de l'objet **dans un logiciel** (SketchUp, Tinkercad, Onshape…). On peut le tourner à l'écran, le modifier en un clic, ou l'envoyer à une imprimante 3D." },
            { t: "tableau", titre: "Trois outils, trois usages", entetes: ["Représentation", "Ce que c'est", "À quoi elle sert"], lignes: [["Maquette", "objet réel, souvent réduit", "montrer, visualiser en volume, tester en soufflerie"], ["Modèle numérique 3D", "objet virtuel dans un logiciel", "concevoir, modifier, préparer la fabrication"], ["Simulation", "calcul fait à partir du modèle numérique", "**prévoir** le comportement : résistance, chaleur, lumière"]] },
          ],
        },
        {
          titre: "Le dessin technique : vues et perspective",
          blocs: [
            { t: "texte", md: "Un **dessin technique** permet à n'importe quel fabricant de comprendre l'objet sans ambiguïté. On le représente soit en **perspective** (en volume, plusieurs faces visibles à la fois), soit par des **vues** : on regarde l'objet de face, de dessus, de gauche…" },
            { t: "schema", titre: "Un bloc percé d'un trou, en perspective et en vues", legende: "Vu de dessus, le trou se voit : cercle en trait continu. Vu de face ou de gauche, il est caché dans la matière : traits interrompus.", svg: `<svg viewBox="0 0 400 210"><polygon class="aplat" points="30,100 60,75 160,75 130,100"/><polygon class="aplat-papier" points="130,100 160,75 160,135 130,160"/><rect class="trait" x="30" y="100" width="100" height="60" fill="none"/><polygon class="trait" points="30,100 60,75 160,75 130,100" fill="none"/><polygon class="trait" points="130,100 160,75 160,135 130,160" fill="none"/><ellipse class="trait" cx="95" cy="87.5" rx="15" ry="6" fill="none"/><text class="texte" x="95" y="190" text-anchor="middle">perspective</text><rect class="trait" x="230" y="40" width="100" height="60" fill="none"/><line class="pointille" x1="266" y1="40" x2="266" y2="100"/><line class="pointille" x1="294" y1="40" x2="294" y2="100"/><text class="texte-petit" x="280" y="117" text-anchor="middle">vue de face</text><rect class="trait" x="345" y="40" width="40" height="60" fill="none"/><line class="pointille" x1="351" y1="40" x2="351" y2="100"/><line class="pointille" x1="379" y1="40" x2="379" y2="100"/><text class="texte-petit" x="365" y="117" text-anchor="middle">de gauche</text><rect class="trait" x="230" y="130" width="100" height="40" fill="none"/><circle class="trait" cx="280" cy="150" r="14" fill="none"/><text class="texte-petit" x="280" y="188" text-anchor="middle">vue de dessus</text></svg>` },
            { t: "propriete", titre: "Les traits du dessin technique", md: "• **Trait continu épais** : arête **vue** (visible depuis l'endroit où l'on regarde).\n• **Trait interrompu** (petits tirets) : arête **cachée** derrière la matière." },
            { t: "verifie", q: "Comment dessine-t-on une arête cachée sur une vue ?", choix: ["En trait continu épais", "En traits interrompus", "On ne la dessine pas"], bonne: 1, explication: "Les traits interrompus (petits tirets) montrent ce qui est caché dans la matière, comme le trou sur la vue de face du bloc." },
          ],
        },
        {
          titre: "L'échelle : du plan à la réalité",
          blocs: [
            { t: "propriete", titre: "Échelle", md: "**Échelle = taille sur le dessin ÷ taille réelle**, les deux dans la même unité.\n\n• Échelle **1/100** : 1 cm sur le plan vaut 100 cm, soit 1 m, en vrai (le dessin est **réduit**).\n• Échelle **2/1** : le dessin est **deux fois plus grand** que l'objet (il est **agrandi**)." },
            { t: "exemple", titre: "Du plan à la réalité", etapes: ["Sur un plan au 1/50, la cuisine mesure 8 cm.", "Pour retrouver la taille réelle, on **multiplie** par 50 : 8 × 50 = 400 cm.", "La cuisine mesure 4 m. De même, un mur de 10 cm sur ce plan mesure 500 cm = 5 m."] },
            { t: "exemple", titre: "De la réalité à la maquette", etapes: ["Un pont réel mesure 400 m = 40 000 cm. Sa maquette est au 1/200.", "On **divise** par 200 : 40 000 ÷ 200 = 200 cm.", "La maquette mesure 200 cm, soit 2 m."] },
            { t: "exemple", titre: "Un agrandissement", md: "Une pièce de montre de 3 mm est dessinée à l'échelle **5/1** : sur le dessin, elle mesure 3 × 5 = **15 mm**." },
            { t: "attention", md: "Une échelle **1/2** ne veut pas dire « deux fois plus grand » : le dessin est deux fois plus **petit** que l'objet. Le chiffre du haut correspond au dessin, celui du bas à la réalité." },
          ],
        },
        {
          titre: "Simuler pour améliorer",
          blocs: [
            { t: "definition", terme: "Simulation", md: "Un calcul réalisé par un logiciel à partir du modèle numérique, pour **prévoir le comportement** de l'objet avant de le fabriquer : va-t-il plier ? chauffer ? la maison restera-t-elle fraîche l'été ?" },
            { t: "etapes", titre: "La démarche de modélisation et de simulation", items: [{ titre: "Modéliser", md: "Construire le modèle numérique 3D de l'objet." }, { titre: "Paramétrer", md: "Indiquer le matériau, les charges, la température…" }, { titre: "Simuler", md: "Lancer le calcul." }, { titre: "Interpréter", md: "Lire les résultats et les comparer au cahier des charges." }, { titre: "Améliorer", md: "Modifier le modèle, puis **simuler à nouveau**." }] },
            { t: "exemple", titre: "La poutre qui plie trop", md: "La simulation montre qu'une poutre plie trop sous la charge prévue. Le concepteur peut **changer sa forme** (une poutre en I), **augmenter sa section**, ou **choisir un matériau plus résistant**. Puis il relance la simulation pour vérifier." },
            { t: "texte", md: "Une simulation **thermique** d'une maison, elle, montre où la chaleur s'échappe : on peut alors épaissir l'isolant ou déplacer une fenêtre avant même de poser la première brique." },
            { t: "verifie", q: "Quel est l'avantage principal d'une simulation par rapport à un essai sur prototype ?", choix: ["Elle est toujours plus juste que la réalité", "Elle permet de tester beaucoup de solutions vite et sans rien fabriquer", "Elle remplace le cahier des charges"], bonne: 1, explication: "On peut essayer de nombreuses variantes rapidement, sans gaspiller de matière ni d'argent. Mais un essai réel reste utile pour confirmer les résultats." },
          ],
        },
      ],
      bilan: "Maquette pour voir, modèle numérique pour concevoir, simulation pour prévoir : on se trompe sur l'écran pour réussir dans la réalité.",
    },
    "5e-technologie-05-chaine-energie-information": {
      accroche: "À la tombée de la nuit, les lampadaires de ta rue s'allument tout seuls. Personne n'appuie sur un bouton. Qui décide, et d'où vient l'énergie ? Derrière ce geste automatique se cachent deux chaînes qui travaillent ensemble.",
      objectifs: [
        "Identifier les fonctions de la chaîne d'énergie : alimenter, distribuer, convertir, transmettre",
        "Identifier les fonctions de la chaîne d'information : acquérir, traiter, communiquer",
        "Associer un capteur à la grandeur qu'il mesure et un actionneur à l'action qu'il produit",
        "Calculer une énergie consommée",
      ],
      sections: [
        {
          titre: "Deux chaînes dans un même objet",
          blocs: [
            { t: "texte", md: "Dans un objet automatique, on peut suivre deux parcours. Celui de l'**information** : des signaux qui disent « il fait nuit » ou « allume-toi ». Et celui de l'**énergie** : le courant qui fait vraiment briller la lampe ou tourner le moteur." },
            { t: "schema", titre: "Chaîne d'information et chaîne d'énergie", legende: "La chaîne d'information décide ; elle envoie des ordres à la chaîne d'énergie, qui agit.", svg: `<svg viewBox="0 0 400 210"><g class="aplat-papier"><rect x="10" y="24" width="86" height="46" rx="6"/><rect x="108" y="24" width="86" height="46" rx="6"/><rect x="206" y="24" width="86" height="46" rx="6"/></g><g class="trait" fill="none"><rect x="10" y="24" width="86" height="46" rx="6"/><rect x="108" y="24" width="86" height="46" rx="6"/><rect x="206" y="24" width="86" height="46" rx="6"/></g><g class="aplat"><rect x="10" y="130" width="86" height="46" rx="6"/><rect x="108" y="130" width="86" height="46" rx="6"/><rect x="206" y="130" width="86" height="46" rx="6"/><rect x="304" y="130" width="86" height="46" rx="6"/></g><g class="trait" fill="none"><rect x="10" y="130" width="86" height="46" rx="6"/><rect x="108" y="130" width="86" height="46" rx="6"/><rect x="206" y="130" width="86" height="46" rx="6"/><rect x="304" y="130" width="86" height="46" rx="6"/></g><g class="texte-petit" text-anchor="middle" font-weight="bold"><text x="53" y="43">ACQUÉRIR</text><text x="151" y="43">TRAITER</text><text x="249" y="43">COMMUNIQUER</text><text x="53" y="149">ALIMENTER</text><text x="151" y="149">DISTRIBUER</text><text x="249" y="149">CONVERTIR</text><text x="347" y="149">TRANSMETTRE</text></g><g class="texte-petit" text-anchor="middle"><text x="53" y="61">capteurs</text><text x="151" y="61">carte</text><text x="249" y="61">ordres, écran</text><text x="53" y="167">pile, secteur</text><text x="151" y="167">interrupteur</text><text x="249" y="167">moteur, lampe</text><text x="347" y="167">engrenages</text></g><g class="trait-fin"><line x1="96" y1="47" x2="106" y2="47" marker-end="url(#fl)"/><line x1="194" y1="47" x2="204" y2="47" marker-end="url(#fl)"/><line x1="96" y1="153" x2="106" y2="153" marker-end="url(#fl)"/><line x1="194" y1="153" x2="204" y2="153" marker-end="url(#fl)"/><line x1="292" y1="153" x2="302" y2="153" marker-end="url(#fl)"/></g><path d="M249 70 L249 100 L151 100 L151 126" fill="none" stroke="var(--pigment)" stroke-width="2.5" marker-end="url(#fl-p)"/><text class="texte-pigment" x="200" y="94" text-anchor="middle">ordres</text><text class="texte-pigment" x="347" y="42" text-anchor="middle">chaîne</text><text class="texte-pigment" x="347" y="58" text-anchor="middle">d'information</text><text class="texte-pigment" x="200" y="200" text-anchor="middle">chaîne d'énergie → action</text></svg>` },
            { t: "propriete", titre: "Qui commande qui ?", md: "La **chaîne d'information** acquiert, traite et communique des **informations** : c'est le « cerveau ». La **chaîne d'énergie** alimente, distribue, convertit et transmet l'**énergie** : ce sont les « muscles ». ==La chaîne d'information commande la chaîne d'énergie.==" },
          ],
        },
        {
          titre: "La chaîne d'énergie",
          blocs: [
            { t: "tableau", titre: "Les quatre fonctions dans une voiture télécommandée", entetes: ["Fonction", "Rôle", "Composant"], lignes: [["**Alimenter**", "fournir l'énergie", "la batterie"], ["**Distribuer**", "laisser passer ou non l'énergie", "la carte de commande du moteur (un interrupteur électronique)"], ["**Convertir**", "transformer l'énergie électrique en mouvement", "le moteur électrique"], ["**Transmettre**", "amener le mouvement là où il sert", "les engrenages et les roues"]] },
            { t: "texte", md: "La source d'énergie n'est pas toujours électrique : un **chauffe-eau solaire** est alimenté par le **rayonnement du Soleil**, qui chauffe directement l'eau des capteurs posés sur le toit." },
            { t: "exemple", titre: "Le lave-linge", md: "Le moteur **convertit** l'électricité en rotation. Une **courroie** relie le moteur au tambour : elle **transmet** le mouvement. La résistance chauffante **convertit** l'électricité en chaleur pour chauffer l'eau." },
          ],
        },
        {
          titre: "Capteurs et actionneurs",
          blocs: [
            { t: "definition", terme: "Capteur", md: "Un composant qui transforme une **grandeur physique** (température, lumière, distance, son, contact) en **signal électrique** utilisable par la chaîne d'information. Il réalise la fonction **acquérir**." },
            { t: "tableau", titre: "Quel capteur pour quelle grandeur ?", entetes: ["Capteur", "Grandeur mesurée", "Dans quel objet ?"], lignes: [["Sonde de température", "température", "thermostat, four"], ["Capteur de luminosité", "lumière", "lampadaire automatique"], ["Capteur à ultrasons", "distance", "radar de recul, robot"], ["Microphone", "son", "enceinte connectée"], ["Bouton-poussoir, fin de course", "contact, appui", "sonnette, porte de garage"], ["Détecteur infrarouge", "mouvement, présence", "alarme, éclairage de couloir"]] },
            { t: "definition", terme: "Actionneur", md: "Un composant qui **convertit** l'énergie en **action** : le moteur produit un mouvement, la **DEL** de la lumière, le haut-parleur un son, la résistance chauffante de la chaleur." },
            { t: "verifie", q: "Lequel de ces composants est un **actionneur** ?", choix: ["Un capteur de température", "Un moteur électrique", "Un bouton-poussoir", "Un microphone"], bonne: 1, explication: "Le moteur convertit l'énergie électrique en mouvement : il agit. Les trois autres sont des capteurs : ils mesurent ou détectent." },
          ],
        },
        {
          titre: "Un exemple complet : le lampadaire automatique",
          blocs: [
            { t: "exemple", titre: "Suivre les deux chaînes", etapes: ["**Acquérir** : le capteur de lumière mesure la luminosité.", "**Traiter** : la carte programmable décide : « s'il fait nuit, allumer ».", "**Communiquer** : elle envoie l'ordre au relais.", "**Alimenter** : le secteur fournit l'énergie électrique.", "**Distribuer** : le relais laisse passer le courant vers la lampe.", "**Convertir** : la lampe transforme l'électricité en lumière."] },
            { t: "texte", md: "Dans un **volet roulant automatique**, c'est pareil : un capteur de lumière ou une horloge acquiert l'information, le **microcontrôleur** de la carte **traite** (« il est 20 h, je ferme »), et le moteur descend le volet." },
            { t: "verifie", q: "Dans un lampadaire automatique, quel composant **traite** l'information ?", choix: ["Le capteur de lumière", "La carte programmable", "La lampe"], bonne: 1, explication: "Le capteur acquiert, la carte (son microcontrôleur) traite et décide, la lampe est l'actionneur qui convertit l'énergie en lumière." },
          ],
        },
        {
          titre: "L'énergie dans l'habitat",
          blocs: [
            { t: "texte", md: "À la maison, l'énergie sert à **chauffer**, **éclairer**, **cuire** et **ventiler**. Plus un appareil est puissant et plus il fonctionne longtemps, plus il consomme." },
            { t: "propriete", titre: "Énergie consommée", md: "**Énergie (Wh) = puissance (W) × durée (h)**\n\n1 kWh = 1 000 Wh." },
            { t: "exemple", titre: "Le radiateur électrique", etapes: ["Puissance : 1 500 W ; durée : 4 h.", "Énergie : 1 500 × 4 = 6 000 Wh.", "On convertit : 6 000 Wh = **6 kWh**."] },
            { t: "attention", md: "Ne confonds pas **puissance** (en watts, W) et **énergie** (en wattheures, Wh). La puissance dit « à quelle vitesse » l'appareil consomme ; l'énergie dit « combien » il a consommé au total." },
          ],
        },
      ],
      bilan: "Acquérir, traiter, communiquer pour décider ; alimenter, distribuer, convertir, transmettre pour agir : l'information commande, l'énergie exécute.",
    },
    "5e-technologie-06-algorithmique-programmation": {
      accroche: "Un feu tricolore ne réfléchit pas : il obéit, jour et nuit, à une liste d'instructions écrite par quelqu'un. Vert, attendre, orange, attendre, rouge, attendre… et on recommence. Cette liste, c'est un algorithme. Et tu peux en écrire un, toi aussi.",
      objectifs: [
        "Lire et écrire un algorithme simple",
        "Utiliser une variable, une boucle, une condition et un événement",
        "Programmer le comportement d'un objet : feu tricolore, alarme",
      ],
      sections: [
        {
          titre: "De l'algorithme au programme",
          blocs: [
            { t: "definition", terme: "Algorithme", md: "Une **suite ordonnée d'instructions** qui permet de résoudre un problème ou d'accomplir une tâche. Une recette de cuisine ou un trajet expliqué pas à pas sont des algorithmes." },
            { t: "definition", terme: "Programme", md: "Un algorithme **écrit dans un langage** que la machine comprend. Au collège, on utilise souvent **Scratch** ou **mBlock** : on construit le programme en **emboîtant des blocs de couleur**." },
            { t: "texte", md: "L'ordre des instructions compte. « Mettre ses chaussettes, puis ses chaussures » marche ; l'inverse, beaucoup moins ! Un ordinateur exécute exactement ce qu'on lui dit, dans l'ordre, sans rien deviner." },
          ],
        },
        {
          titre: "Les briques de base",
          blocs: [
            { t: "tableau", titre: "Quatre notions à connaître", entetes: ["Notion", "Ce que c'est", "Exemple en Scratch"], lignes: [["**Variable**", "une boîte nommée qui garde une valeur qui peut changer", "« mettre score à 0 »"], ["**Boucle**", "répète des instructions", "« répéter 10 fois », « répéter indéfiniment »"], ["**Condition**", "exécute des instructions seulement si un test est vrai", "« si … alors … sinon »"], ["**Événement**", "déclenche un script", "« quand le drapeau vert est cliqué »"]] },
            { t: "exemple", titre: "Suivre une variable pas à pas", etapes: ["Au départ, score = 0. Script : « répéter 3 fois : ajouter 5 à score, puis retirer 2 à score ».", "Tour 1 : 0 + 5 − 2 = 3.", "Tour 2 : 3 + 5 − 2 = 6.", "Tour 3 : 6 + 5 − 2 = **9**."] },
            { t: "exemple", titre: "Une variable qui double", md: "Au départ x = 2. Script : « répéter 3 fois : mettre x à x × 2 ». On obtient 4, puis 8, puis **16**. Et « répéter 4 fois : avancer de 25 pas » fait avancer le lutin de 4 × 25 = **100 pas**." },
            { t: "attention", md: "Dans une boucle **« répéter indéfiniment »**, les instructions ne s'exécutent pas une seule fois : elles recommencent **sans arrêt**, tant que le programme tourne. C'est utile pour surveiller un capteur en permanence." },
          ],
        },
        {
          titre: "Conditions et algorigramme",
          blocs: [
            { t: "propriete", titre: "La condition « si … alors … sinon »", md: "**Si** le test est vrai, **alors** on fait les premières instructions ; **sinon**, on fait les autres. Dans « si la température est inférieure à 18 °C alors allumer le chauffage sinon l'éteindre », l'instruction est une **condition** et « température » est une **variable**." },
            { t: "schema", titre: "L'algorigramme d'un thermostat", legende: "Un algorigramme dessine l'algorithme : rectangles pour les actions, losange pour la question (le test), flèches pour l'ordre.", svg: `<svg viewBox="0 0 400 270"><rect class="aplat-papier" x="150" y="8" width="100" height="28" rx="14"/><rect class="trait" x="150" y="8" width="100" height="28" rx="14" fill="none"/><text class="texte" x="200" y="27" text-anchor="middle">Début</text><line class="trait-fin" x1="200" y1="36" x2="200" y2="50" marker-end="url(#fl)"/><rect class="trait" x="130" y="52" width="140" height="30" fill="none"/><text class="texte" x="200" y="72" text-anchor="middle">Mesurer T</text><line class="trait-fin" x1="200" y1="82" x2="200" y2="98" marker-end="url(#fl)"/><polygon class="aplat" points="200,100 260,135 200,170 140,135"/><polygon class="trait" points="200,100 260,135 200,170 140,135" fill="none"/><text class="texte-petit" x="200" y="139" text-anchor="middle">T &lt; 18 °C ?</text><path class="trait-fin" d="M140 135 L90 135 L90 188" fill="none" marker-end="url(#fl)"/><text class="texte-petit" x="114" y="128" text-anchor="middle">oui</text><path class="trait-fin" d="M260 135 L310 135 L310 188" fill="none" marker-end="url(#fl)"/><text class="texte-petit" x="286" y="128" text-anchor="middle">non</text><rect class="aplat-papier" x="30" y="190" width="120" height="32"/><rect class="trait" x="30" y="190" width="120" height="32" fill="none"/><text class="texte-petit" x="90" y="210" text-anchor="middle">Allumer chauffage</text><rect class="aplat-papier" x="250" y="190" width="120" height="32"/><rect class="trait" x="250" y="190" width="120" height="32" fill="none"/><text class="texte-petit" x="310" y="210" text-anchor="middle">Éteindre chauffage</text><line class="trait-fin" x1="310" y1="222" x2="310" y2="250"/><path class="trait-fin" d="M90 222 L90 250 L385 250 L385 67 L274 67" fill="none" marker-end="url(#fl)"/><text class="texte-petit" x="380" y="60" text-anchor="end">on recommence</text></svg>` },
            { t: "verifie", q: "Programme : « si (mouvement détecté) **et** (alarme activée) alors sonner ». Quand l'alarme sonne-t-elle ?", choix: ["Dès qu'un mouvement est détecté", "Seulement quand il y a un mouvement ET que l'alarme est activée", "Quand l'alarme est activée, même sans mouvement"], bonne: 1, explication: "Avec « et », les deux conditions doivent être vraies en même temps. Avec « ou », une seule suffirait." },
          ],
        },
        {
          titre: "Les événements déclenchent les scripts",
          blocs: [
            { t: "definition", terme: "Événement", md: "Ce qui **déclenche** un script : « quand le drapeau vert est cliqué », « quand la touche espace est pressée », « quand le capteur détecte un obstacle ». Sans événement, le script attend." },
            { t: "texte", md: "Dans Scratch, les blocs d'événement ont une forme arrondie en haut, comme un chapeau : on ne peut rien mettre au-dessus. Ils sont toujours **en tête** d'un script." },
            { t: "verifie", q: "Dans Scratch, le bloc « quand le drapeau vert est cliqué » est…", choix: ["une boucle", "un événement", "une variable", "une condition"], bonne: 1, explication: "C'est lui qui démarre le script quand on clique sur le drapeau : c'est un événement." },
          ],
        },
        {
          titre: "Programmer un objet",
          blocs: [
            { t: "texte", md: "Pour programmer un objet, on décrit d'abord son comportement **avec des mots**, puis on traduit chaque phrase en blocs. Voici le feu tricolore, qui démarre au vert." },
            { t: "etapes", titre: "L'algorithme du feu tricolore", items: [{ titre: "Vert", md: "Allumer le vert, attendre 30 secondes." }, { titre: "Orange", md: "Éteindre le vert, allumer l'orange, attendre 3 secondes." }, { titre: "Rouge", md: "Éteindre l'orange, allumer le rouge, attendre 30 secondes." }, { titre: "Recommencer", md: "Éteindre le rouge et revenir au vert : tout est dans une boucle **« répéter indéfiniment »**." }] },
            { t: "exemple", titre: "L'alarme", md: "**Quand** le drapeau vert est cliqué, **répéter indéfiniment** : **si** (capteur de mouvement = vrai) **et** (alarme activée) **alors** allumer la DEL rouge et jouer le son, **sinon** éteindre la DEL." },
            { t: "astuce", md: "Ton programme ne marche pas ? C'est un **bug**. Ne réécris pas tout : teste **une étape à la fois**, observe ce qui se passe, corrige, reteste. Cette chasse aux erreurs s'appelle le **débogage**." },
          ],
        },
      ],
      bilan: "Un algorithme dit quoi faire et dans quel ordre ; avec des variables, des boucles, des conditions et des événements, il donne vie à un objet.",
    },
    "5e-technologie-07-informatique-reseaux": {
      accroche: "Tu tapes l'adresse d'un site, et une seconde plus tard la page s'affiche. Pendant ce temps, ta demande a quitté ta tablette, traversé ta maison, parcouru des centaines de kilomètres jusqu'à un ordinateur inconnu… et elle est revenue. Suivons ce voyage.",
      objectifs: [
        "Identifier les composants d'un ordinateur et le rôle du système d'exploitation",
        "Décrire un réseau local : commutateur, box, serveur, adresse IP",
        "Distinguer Internet et le Web",
        "Protéger ses données et ses mots de passe",
      ],
      sections: [
        {
          titre: "Dans l'ordinateur",
          blocs: [
            { t: "texte", md: "Un ordinateur, c'est une **unité centrale** (le « cerveau » et la mémoire) entourée de **périphériques**. Les périphériques d'**entrée** font entrer des informations : clavier, souris, webcam, micro. Ceux de **sortie** les font sortir : écran, imprimante, enceintes." },
            { t: "tableau", titre: "Les composants de l'unité centrale", entetes: ["Composant", "Rôle", "À retenir"], lignes: [["**Processeur**", "exécute les instructions des programmes", "le « cerveau » qui calcule"], ["**Mémoire vive (RAM)**", "garde les données du travail en cours", "s'**efface** à l'extinction"], ["**Disque (HDD ou SSD)**", "conserve les fichiers", "garde tout, même éteint"], ["**Carte mère**", "relie tous les composants entre eux", "le « circuit » central"]] },
            { t: "definition", terme: "Système d'exploitation", md: "Le logiciel principal qui **gère le matériel** (processeur, mémoire, périphériques) et permet de **lancer les autres logiciels**. Exemples : Windows, macOS, Linux sur ordinateur ; Android, iOS sur smartphone." },
            { t: "verifie", q: "Quand on éteint l'ordinateur, que devient le contenu de la mémoire vive ?", choix: ["Il est effacé", "Il est conservé", "Il part sur Internet"], bonne: 0, explication: "La RAM ne garde les données que tant qu'elle est alimentée. Pour conserver un travail, il faut l'enregistrer sur le disque." },
          ],
        },
        {
          titre: "Le réseau local",
          blocs: [
            { t: "texte", md: "Au collège ou à la maison, les appareils sont reliés entre eux : c'est un **réseau local**. Ils sont connectés par **câble** à un **commutateur**, ou sans fil par **Wi-Fi**." },
            { t: "schema", titre: "Un réseau local relié à Internet", legende: "Le commutateur relie les appareils câblés ; la box relie le réseau local à Internet. Chaque appareil a sa propre adresse IP.", svg: `<svg viewBox="0 0 400 262"><ellipse class="aplat" cx="330" cy="30" rx="55" ry="20"/><ellipse class="trait" cx="330" cy="30" rx="55" ry="20" fill="none"/><text class="texte" x="330" y="35" text-anchor="middle">Internet</text><rect class="pointille" x="8" y="56" width="384" height="200" rx="10" fill="none"/><text class="texte-pigment" x="20" y="78">Réseau local</text><line class="trait" x1="330" y1="50" x2="330" y2="90"/><rect class="aplat-papier" x="280" y="90" width="100" height="30" rx="4"/><rect class="trait" x="280" y="90" width="100" height="30" rx="4" fill="none"/><text class="texte-petit" x="330" y="109" text-anchor="middle">Box (routeur)</text><rect class="trait" x="150" y="70" width="60" height="34" rx="5" fill="none"/><text class="texte-petit" x="180" y="91" text-anchor="middle">Tablette</text><text class="texte-petit" x="180" y="118" text-anchor="middle">192.168.1.12</text><line class="pointille" x1="212" y1="88" x2="278" y2="102"/><text class="texte-petit" x="245" y="86" text-anchor="middle">Wi-Fi</text><path class="trait-fin" d="M330 120 L330 161 L260 161" fill="none"/><rect class="aplat" x="140" y="148" width="120" height="26" rx="4"/><rect class="trait" x="140" y="148" width="120" height="26" rx="4" fill="none"/><text class="texte-petit" x="200" y="165" text-anchor="middle">Commutateur</text><g class="trait-fin"><line x1="200" y1="174" x2="55" y2="205"/><line x1="200" y1="174" x2="150" y2="205"/><line x1="200" y1="174" x2="245" y2="205"/><line x1="200" y1="174" x2="340" y2="205"/></g><g class="trait" fill="none"><rect x="20" y="205" width="70" height="28" rx="3"/><rect x="115" y="205" width="70" height="28" rx="3"/><rect x="305" y="205" width="70" height="28" rx="3"/></g><rect class="aplat" x="210" y="205" width="70" height="28" rx="3"/><rect class="trait" x="210" y="205" width="70" height="28" rx="3" fill="none"/><g class="texte-petit" text-anchor="middle"><text x="55" y="223">PC 1</text><text x="150" y="223">PC 2</text><text x="245" y="223">Serveur</text><text x="340" y="223">Imprimante</text><text x="55" y="248">192.168.1.10</text><text x="150" y="248">192.168.1.11</text><text x="245" y="248">192.168.1.2</text><text x="340" y="248">192.168.1.20</text></g></svg>` },
            { t: "liste", titre: "Les équipements du réseau", items: ["**Commutateur** (switch) : relie par câble les appareils du réseau local.", "**Box** (routeur) : relie le réseau local à Internet, et souvent fournit le Wi-Fi.", "**Serveur** : un ordinateur qui **fournit un service** (fichiers, pages web, courriel) aux autres machines, appelées **clients**.", "**Adresse IP** : le numéro unique de chaque appareil sur le réseau, par exemple 192.168.1.12. Elle sert à savoir **à qui** envoyer les données."] },
            { t: "attention", md: "Deux appareils d'un même réseau ne peuvent **pas** avoir la même adresse IP : les données ne sauraient plus où aller. Comme deux maisons qui auraient la même adresse postale !" },
          ],
        },
        {
          titre: "Internet n'est pas le Web",
          blocs: [
            { t: "propriete", titre: "Internet et le Web", md: "**Internet** est le **réseau mondial** qui relie des milliards de machines. Le **Web** est **l'un de ses services** : l'ensemble des pages que l'on consulte avec un navigateur. Internet sert aussi au courriel, aux jeux en ligne, à la vidéo, aux messageries." },
            { t: "etapes", titre: "Le voyage d'une page web", items: [{ titre: "Demande", md: "Tu tapes l'adresse du site dans le navigateur de ta tablette." }, { titre: "Wi-Fi", md: "La requête part en Wi-Fi jusqu'à la box." }, { titre: "Internet", md: "La box l'envoie sur Internet jusqu'au **serveur** du site." }, { titre: "Réponse", md: "Le serveur renvoie la page demandée." }, { titre: "Affichage", md: "La page refait le chemin inverse et s'affiche sur ton écran." }] },
            { t: "savais-tu", md: "Le Web a été inventé en 1989 au CERN, près de Genève, par Tim Berners-Lee, pour que les scientifiques partagent facilement leurs documents. Internet, lui, existait déjà depuis plusieurs années." },
          ],
        },
        {
          titre: "Protéger ses données",
          blocs: [
            { t: "definition", terme: "Donnée personnelle", md: "Toute information qui permet de **t'identifier**, directement ou non : nom, adresse, numéro de téléphone, photo, localisation, identifiant de compte." },
            { t: "liste", titre: "Les bons réflexes", items: ["Un **mot de passe long et varié** : majuscules, minuscules, chiffres, symboles, au moins 12 caractères. « 7Girafes!MangentDesPoires » vaut bien mieux que « 123456 » ou ta date de naissance.", "Un mot de passe **différent pour chaque site**, et **jamais partagé**, même avec un ami.", "Aucun service sérieux ne te demande ton mot de passe par courriel : ce message est un piège (**hameçonnage**). Ne réponds pas, ne clique pas, préviens un adulte.", "Réfléchis avant de publier une photo ou ta localisation : sur Internet, ce qui est publié peut rester longtemps."] },
            { t: "verifie", q: "Quel mot de passe est le plus sûr ?", choix: ["azerty", "Lucas2013", "7Girafes!MangentDesPoires", "motdepasse"], bonne: 2, explication: "Il est long et mélange majuscules, minuscules, chiffres et symboles. Les autres sont courts, courants ou faciles à deviner (prénom et année)." },
          ],
        },
        {
          titre: "Mesurer la quantité d'informations",
          blocs: [
            { t: "tableau", titre: "Les unités de stockage", entetes: ["Unité", "Vaut", "Ordre de grandeur"], lignes: [["1 octet", "8 bits", "une lettre"], ["1 ko (kilooctet)", "1 000 octets", "une page de texte"], ["1 Mo (mégaoctet)", "1 000 ko", "une photo ≈ 4 Mo"], ["1 Go (gigaoctet)", "1 000 Mo", "un film ≈ 2 Go"], ["1 To (téraoctet)", "1 000 Go", "un gros disque dur"]] },
            { t: "exemple", titre: "Combien de photos sur une clé USB ?", etapes: ["La clé fait 32 Go = 32 × 1 000 = 32 000 Mo.", "Une photo pèse 4 Mo.", "32 000 ÷ 4 = **8 000 photos** au maximum."] },
          ],
        },
      ],
      bilan: "Le processeur calcule, la mémoire retient, le réseau relie, Internet transporte et le Web n'en est qu'un service : à toi de garder la clé de tes données.",
    },
    "5e-technologie-08-demarche-projet-outils": {
      accroche: "Ta classe doit fabriquer une lampe de chevet en six semaines. Par où commencer ? Qui fait quoi ? Et comment utiliser la perceuse sans danger ? Un projet réussi, ce n'est pas seulement une bonne idée : c'est une méthode, une équipe et des gestes sûrs.",
      objectifs: [
        "Organiser les étapes d'un projet et planifier le travail en équipe",
        "Respecter les règles de sécurité en atelier",
        "Choisir l'outil ou la machine adaptés à une opération",
      ],
      sections: [
        {
          titre: "Les étapes d'un projet",
          blocs: [
            { t: "etapes", titre: "La démarche de projet", items: [{ titre: "Besoin", md: "Quel problème veut-on résoudre ?" }, { titre: "Cahier des charges", md: "Le document qui décrit les **fonctions** attendues et les **contraintes** à respecter." }, { titre: "Conception", md: "Croquis, choix d'une solution, modèle 3D." }, { titre: "Réalisation", md: "Fabrication du prototype à l'atelier." }, { titre: "Test", md: "Le prototype respecte-t-il le cahier des charges ?" }, { titre: "Présentation", md: "On montre le résultat et on explique ses choix." }] },
            { t: "propriete", titre: "Le test décide", md: "Si le test montre qu'une contrainte du cahier des charges n'est **pas respectée**, on ne présente pas l'objet tel quel : l'équipe **revient à la conception**, modifie la solution, puis refabrique et reteste." },
            { t: "exemple", titre: "Projet « lampe de chevet »", md: "**Besoin** : lire le soir dans son lit. **Cahier des charges** : orientable, éclairage par DEL, moins de 15 €. **Conception** : croquis, puis modèle 3D. **Réalisation** : impression 3D du pied, découpe laser de l'abat-jour. **Test** : la lampe tient-elle debout ? éclaire-t-elle assez ? **Présentation** à la classe." },
          ],
        },
        {
          titre: "Travailler en équipe et planifier",
          blocs: [
            { t: "texte", md: "En équipe, chaque membre a un **rôle** précis : **chef de projet** (il coordonne et surveille le planning), **responsable du matériel**, **rédacteur** (il tient le dossier), **porte-parole**… Ainsi personne n'attend sans rien faire, et rien n'est oublié." },
            { t: "definition", terme: "Diagramme de Gantt", md: "Un outil de **planification** qui montre les **tâches** et leur **durée** sur un calendrier, sous forme de barres. On voit d'un coup d'œil ce qu'il faut faire, quand, et ce qui peut se faire en même temps." },
            { t: "schema", titre: "Le diagramme de Gantt du projet lampe", legende: "Chaque barre est une tâche ; sa longueur indique sa durée en semaines. Les tests commencent avant la fin de la réalisation.", svg: `<svg viewBox="0 0 400 200"><g class="texte-petit" text-anchor="middle"><text x="152" y="32">S1</text><text x="195" y="32">S2</text><text x="238" y="32">S3</text><text x="282" y="32">S4</text><text x="325" y="32">S5</text><text x="368" y="32">S6</text></g><g class="trait-fin" opacity="0.4"><line x1="130" y1="40" x2="130" y2="185"/><line x1="173" y1="40" x2="173" y2="185"/><line x1="217" y1="40" x2="217" y2="185"/><line x1="260" y1="40" x2="260" y2="185"/><line x1="303" y1="40" x2="303" y2="185"/><line x1="347" y1="40" x2="347" y2="185"/><line x1="390" y1="40" x2="390" y2="185"/></g><line class="trait" x1="130" y1="40" x2="390" y2="40"/><g class="texte-petit"><text x="10" y="64">Cahier des charges</text><text x="10" y="92">Conception</text><text x="10" y="120">Réalisation</text><text x="10" y="148">Tests</text><text x="10" y="176">Présentation</text></g><g class="aplat-fort"><rect x="132" y="51" width="40" height="16" rx="3"/><rect x="152" y="79" width="64" height="16" rx="3"/><rect x="218" y="107" width="128" height="16" rx="3"/><rect x="325" y="135" width="64" height="16" rx="3"/><rect x="348" y="163" width="41" height="16" rx="3"/></g></svg>` },
            { t: "exemple", titre: "Combien d'heures pour les tests ?", etapes: ["Durée du projet : 6 semaines × 1 h 30 = 9 h.", "Déjà prévu : 3 h (conception) + 4 h (réalisation) + 1 h (présentation) = 8 h.", "Il reste 9 − 8 = **1 h** pour les tests."] },
          ],
        },
        {
          titre: "La sécurité en atelier",
          blocs: [
            { t: "liste", titre: "Les règles d'or", items: ["Porter des **lunettes de protection**.", "**Attacher ses cheveux**, pas de vêtements flottants ni d'écharpe.", "Serrer la pièce dans un **étau** : jamais tenue à la main.", "**Une seule personne** par machine.", "Prévenir **immédiatement l'adulte** en cas de problème ou de blessure : on ne soigne pas seul et on ne cache rien."] },
            { t: "attention", md: "On **ne porte pas de gants** près d'une machine tournante comme la perceuse à colonne : un gant peut être **happé** par le foret et entraîner la main avec lui." },
            { t: "schema", titre: "Trois pictogrammes à reconnaître", legende: "Les triangles jaunes bordés de noir avertissent d'un danger ; les ronds bleus indiquent une obligation.", svg: `<svg viewBox="0 0 400 150"><polygon class="aplat-fort" points="70,18 122,106 18,106"/><polygon class="trait" points="70,18 122,106 18,106" fill="none" stroke-width="3"/><polygon points="76,42 58,74 70,74 62,98 86,62 73,62 81,42" fill="var(--encre)"/><polygon class="aplat-fort" points="200,18 252,106 148,106"/><polygon class="trait" points="200,18 252,106 148,106" fill="none" stroke-width="3"/><g class="trait" fill="none"><path d="M186 88 q6 -7 0 -14 q-6 -7 0 -14"/><path d="M200 88 q6 -7 0 -14 q-6 -7 0 -14"/><path d="M214 88 q6 -7 0 -14 q-6 -7 0 -14"/><line x1="178" y1="96" x2="222" y2="96"/></g><circle class="aplat-fort" cx="330" cy="62" r="44"/><circle class="trait" cx="330" cy="62" r="44" fill="none"/><g class="trait" fill="none"><circle cx="316" cy="62" r="10"/><circle cx="344" cy="62" r="10"/><line x1="326" y1="60" x2="334" y2="60"/><line x1="306" y1="60" x2="294" y2="56"/><line x1="354" y1="60" x2="366" y2="56"/></g><g class="texte-petit" text-anchor="middle"><text x="70" y="128">danger électrique</text><text x="200" y="128">surface chaude</text><text x="330" y="128">lunettes obligatoires</text></g></svg>` },
            { t: "verifie", q: "Tu vois un camarade se blesser à l'atelier. Que fais-tu ?", choix: ["Je le soigne moi-même pour ne pas déranger", "Je préviens immédiatement le professeur", "Je continue mon travail"], bonne: 1, explication: "L'adulte responsable doit être prévenu tout de suite : il sait quels gestes faire et peut arrêter les machines." },
          ],
        },
        {
          titre: "Choisir la bonne machine",
          blocs: [
            { t: "tableau", titre: "Machines et outils de l'atelier", entetes: ["Machine ou outil", "Usage"], lignes: [["**Perceuse à colonne**", "percer des trous bien droits"], ["**Imprimante 3D**", "fabriquer une pièce en volume, couche par couche, à partir d'un modèle numérique"], ["**Découpe laser**", "découper ou graver une plaque (bois, plastique) avec précision"], ["**Thermoplieuse**", "plier une plaque de plastique chauffée le long d'une ligne"], ["**Pistolet à colle**", "coller rapidement avec de la colle fondue"], ["**Scie**, **lime**", "couper, puis ébavurer et ajuster à la main"]] },
            { t: "definition", terme: "Imprimante 3D à fil", md: "Elle fait **fondre un fil de plastique** et le **dépose couche par couche**, en suivant le modèle numérique 3D, jusqu'à construire la pièce. C'est lent, mais idéal pour une forme en volume." },
            { t: "exemple", titre: "Le temps d'impression", etapes: ["Une pièce demande 2 h 30, soit 2,5 h.", "Il faut 4 pièces imprimées à la suite : 4 × 2,5 = 10.", "Durée totale : **10 heures**."] },
            { t: "verifie", q: "Il faut fabriquer 30 porte-clés **plats** identiques en plastique en une séance. Quelle machine choisir ?", choix: ["L'imprimante 3D", "La découpe laser", "La thermoplieuse"], bonne: 1, explication: "La découpe laser taille rapidement de nombreuses formes plates dans une plaque. L'imprimante 3D serait bien trop lente pour 30 pièces en une séance." },
            { t: "astuce", md: "Pour choisir, demande-toi : la pièce est-elle **plate** (découpe laser), **en volume** (imprimante 3D), à **plier** (thermoplieuse) ou à **percer** (perceuse) ?" },
          ],
        },
      ],
      bilan: "Un projet avance du besoin à la présentation, en équipe et avec un planning ; à l'atelier, chaque opération a sa machine et chaque machine ses règles de sécurité.",
    },
  },
};
