// Cours ÉCLORE — 3e Français. Schéma : docs/COURS.md
export default {
  id: "3e-francais",
  chapitres: {
    "3e-francais-01-se-raconter": {
      accroche: "Si tu devais raconter ta vie, par quoi commencerais-tu ? Ton premier souvenir, ta naissance, un jour qui a tout changé ? Et comment être sûr de dire vrai, alors que la mémoire oublie et embellit ? Depuis Rousseau, des écrivains relèvent ce défi.",
      objectifs: [
        "Définir l'autobiographie et le pacte autobiographique",
        "Distinguer l'autobiographie des mémoires, du journal intime, de l'autoportrait et du roman autobiographique",
        "Analyser un récit rétrospectif : temps, je narrant et je narré, point de vue",
        "Comprendre ce que l'écriture de soi apporte : mémoire, vérité, construction de soi",
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'une autobiographie ?",
          blocs: [
            { t: "texte", md: "Le mot se décompose comme un puzzle grec : *auto* (soi-même), *bio* (la vie), *graphie* (l'écriture). Une autobiographie, c'est donc **l'écriture de sa propre vie**.\n\nMais attention : pour qu'il y ait autobiographie, une condition est essentielle. La même personne réelle tient trois rôles à la fois." },
            { t: "definition", terme: "Autobiographie", md: "Récit **rétrospectif** (on regarde en arrière), écrit **en prose** et **à la première personne**, qu'une **personne réelle** fait de sa propre existence. ==L'auteur, le narrateur et le personnage principal sont une seule et même personne.==" },
            { t: "citation", texte: "Je forme une entreprise qui n'eut jamais d'exemple, et dont l'exécution n'aura point d'imitateur. Je veux montrer à mes semblables un homme dans toute la vérité de la nature ; et cet homme, ce sera moi.", auteur: "Jean-Jacques Rousseau", source: "Les Confessions, livre I" },
            { t: "propriete", titre: "Le pacte autobiographique", md: "L'expression vient du critique **Philippe Lejeune** (1975). C'est un accord implicite : l'auteur **s'engage à dire la vérité** sur lui-même, et le lecteur **accepte de le croire**. Le début des *Confessions* en est le modèle : Rousseau promet « toute la vérité »." },
            { t: "verifie", q: "Dans une autobiographie, qui sont l'auteur, le narrateur et le personnage principal ?", choix: ["Trois personnes différentes", "Une seule et même personne", "L'auteur et le narrateur sont la même personne, pas le personnage"], bonne: 1, explication: "C'est la définition même de l'autobiographie : celui qui signe le livre (auteur), celui qui dit « je » (narrateur) et celui dont on suit la vie (personnage) ne font qu'un." },
          ],
        },
        {
          titre: "L'autobiographie et ses genres voisins",
          blocs: [
            { t: "texte", md: "Tous les textes où l'on dit « je » ne sont pas des autobiographies. Pour reconnaître le genre, pose-toi deux questions : **de quoi** l'auteur parle-t-il surtout (de lui ou de l'Histoire) ? Et **avec quel recul** écrit-il ?" },
            { t: "tableau", titre: "Les écritures de soi", entetes: ["Genre", "Ce qui le caractérise", "Exemple"], lignes: [["**Autobiographie**", "Récit rétrospectif de toute une vie ou d'une période, centré sur la personnalité", "Rousseau, *Les Confessions*"], ["**Mémoires**", "Témoignage sur les **événements historiques** vécus (guerres, vie politique)", "Chateaubriand, *Mémoires d'outre-tombe*"], ["**Journal intime**", "Écrit **au jour le jour**, daté, sans recul sur la suite", "Le *Journal* d'Anne Frank"], ["**Autoportrait**", "Description de soi, de ses goûts, de son caractère, **sans récit chronologique**", "Montaigne, *Essais*"], ["**Roman autobiographique**", "Vie de l'auteur **transformée par la fiction** : le héros porte un autre nom", "Vallès, *L'Enfant* (le héros s'appelle Jacques Vingtras)"]] },
            { t: "attention", md: "Ne confonds pas **journal intime** et **autobiographie**. La différence essentielle est le **recul** : le diariste écrit le soir même, sans savoir ce qui arrivera demain ; l'autobiographe connaît la suite et réorganise sa vie des années plus tard." },
            { t: "verifie", q: "Un auteur raconte sa jeunesse mais donne à son héros un autre nom et transforme certains événements. De quel genre s'agit-il ?", choix: ["Une autobiographie", "Des mémoires", "Un roman autobiographique", "Un journal intime"], bonne: 2, explication: "Le changement de nom rompt l'identité auteur = personnage, et l'invention rompt le pacte de vérité : c'est un roman autobiographique." },
          ],
        },
        {
          titre: "Quatre siècles d'écriture de soi",
          blocs: [
            { t: "frise", titre: "L'écriture de soi, de Montaigne à Ernaux", evenements: [{ date: 1580, label: "Montaigne, *Essais*", detail: "« Je suis moi-même la matière de mon livre » : un autoportrait." }, { date: 1782, label: "Rousseau, *Les Confessions* (livres I à VI)", detail: "Écrites vers 1765-1770, publiées après sa mort (1778)." }, { date: 1848, label: "Chateaubriand, *Mémoires d'outre-tombe*", detail: "Publiés après sa mort : sa vie mêlée à l'Histoire." }, { date: 1879, label: "Vallès, *L'Enfant*", detail: "Un roman autobiographique sur une enfance malheureuse." }, { date: 1964, label: "Sartre, *Les Mots*", detail: "Le philosophe revient sur son enfance." }, { date: 1975, label: "Perec, *W ou le souvenir d'enfance*", detail: "La même année, Lejeune définit le pacte autobiographique." }, { date: 1983, label: "Sarraute, *Enfance* ; Ernaux, *La Place*", detail: "Deux femmes renouvellent le genre." }, { date: 2008, label: "Ernaux, *Les Années*", detail: "Une autobiographie « collective », à la mesure d'une génération." }, { date: 2022, label: "Ernaux, prix Nobel de littérature", detail: "La reconnaissance mondiale de l'écriture de soi." }] },
            { t: "texte", md: "Au XXe siècle, les écrivains doutent davantage de leur mémoire. **Nathalie Sarraute**, dans *Enfance*, fait dialoguer deux voix. **Georges Perec**, dont le père est mort à la guerre et la mère a été déportée, ouvre son livre en affirmant qu'il n'a pas de souvenirs d'enfance. **Annie Ernaux**, dans *La Place*, raconte la vie de son père, ancien ouvrier devenu petit commerçant, avec une écriture volontairement « plate », sans effets." },
            { t: "savais-tu", md: "Rousseau n'a jamais vu ses *Confessions* imprimées : elles paraissent en 1782 et 1789, après sa mort en 1778. Il en avait seulement lu des passages dans des salons, ce qui inquiétait ceux dont il révélait les secrets !" },
          ],
        },
        {
          titre: "Le récit rétrospectif : deux « je » pour une vie",
          blocs: [
            { t: "texte", md: "Quand un adulte raconte son enfance, il y a en réalité **deux « je »** : celui qui écrit aujourd'hui et celui qu'il était autrefois. Les temps du verbe permettent de les distinguer." },
            { t: "schema", titre: "Je narrant et je narré", legende: "Le je narrant (l'adulte) regarde en arrière vers le je narré (l'enfant) : les temps du passé racontent, le présent commente.", svg: `<svg viewBox="0 0 400 205"><line class="trait" x1="20" y1="120" x2="385" y2="120" marker-end="url(#fl)"/><text class="texte-petit" x="384" y="138" text-anchor="end">temps</text><circle cx="90" cy="120" r="7" fill="var(--pigment)"/><circle cx="310" cy="120" r="7" fill="var(--pigment)"/><path class="trait-fin" fill="none" d="M300 108 Q200 30 100 106" marker-end="url(#fl-p)"/><text class="texte-main" x="200" y="56" text-anchor="middle">se souvient, choisit, juge</text><text class="texte-petit" x="200" y="112" text-anchor="middle">des années de recul</text><text class="texte" x="90" y="152" text-anchor="middle">l'enfant d'autrefois</text><text class="texte-pigment" x="90" y="172" text-anchor="middle">je narré</text><text class="texte-petit" x="90" y="190" text-anchor="middle">passé simple, imparfait</text><text class="texte" x="310" y="152" text-anchor="middle">l'adulte qui écrit</text><text class="texte-pigment" x="310" y="172" text-anchor="middle">je narrant</text><text class="texte-petit" x="310" y="190" text-anchor="middle">présent d'énonciation</text></svg>` },
            { t: "exemple", titre: "« Je revois encore la cour de l'école où, ce jour-là, je tombai de la balançoire. »", etapes: ["« Je revois encore » est au **présent** : c'est le je narrant, au moment où il écrit.", "« je tombai » est au **passé simple** : c'est le je narré, l'enfant, dans l'action passée.", "« ce jour-là » marque la distance : l'événement est coupé du présent.", "Conclusion : le présent signale le **moment de l'écriture**, le passé simple le **moment vécu**."] },
            { t: "astuce", md: "Le point de vue d'une autobiographie est presque toujours **interne** : on ne voit le monde qu'à travers les yeux du narrateur. Repère aussi les **commentaires de l'adulte** (« je le comprends aujourd'hui », « je crois que ») : ils trahissent le je narrant." },
          ],
        },
        {
          titre: "Pourquoi se raconter ?",
          blocs: [
            { t: "liste", titre: "Les grands enjeux de l'écriture de soi", items: ["**Se comprendre** : en racontant, on cherche qui l'on est devenu et pourquoi.", "**Faire mémoire** : garder la trace des disparus, d'un milieu, d'une époque (Perec, Ernaux).", "**Se justifier** : Rousseau veut qu'on le juge sur la vérité, non sur les rumeurs.", "**Partager** : le lecteur se reconnaît dans une vie qui n'est pas la sienne."] },
            { t: "texte", md: "La mémoire n'est pas un film fidèle : on oublie, on reconstruit, on choisit ce que l'on raconte. L'autobiographe ne livre donc pas une vérité toute faite. ==Se raconter, c'est aussi se construire.==" },
            { t: "exemple", titre: "Le dialogue des deux voix dans *Enfance*", md: "Sarraute fait parler une seconde voix qui doute, l'interrompt et lui demande si elle n'arrange pas ses souvenirs. Ce dispositif montre que la mémoire est **fragile** : écrire sa vie, c'est la **questionner**, pas seulement la réciter." },
            { t: "verifie", q: "Pourquoi Perec affirme-t-il, au début de *W ou le souvenir d'enfance*, qu'il n'a pas de souvenirs d'enfance ?", choix: ["Parce qu'il a eu une enfance banale", "Parce que la perte de ses parents a laissé un vide dans sa mémoire", "Parce qu'il refuse d'écrire sur lui"], bonne: 1, explication: "Orphelin très jeune (son père est tué en 1940, sa mère déportée à Auschwitz), Perec dit l'absence : ce manque de souvenirs est la trace même de la tragédie. Son livre entier cherche à combler ce vide." },
          ],
        },
      ],
      bilan: "Auteur = narrateur = personnage, et la promesse de dire vrai : voilà l'autobiographie. Mais se raconter, c'est toujours choisir, douter et se reconstruire.",
    },
    "3e-francais-02-denoncer-travers": {
      accroche: "Comment critiquer un roi tout-puissant sans finir en prison ? Faire parler des animaux, inventer un pays lointain, ou dire exactement le contraire de ce que l'on pense. Les écrivains ont rivalisé de ruse pour dénoncer l'injustice.",
      objectifs: [
        "Reconnaître la satire, la caricature, le pamphlet et l'apologue",
        "Repérer l'ironie et l'antiphrase et expliquer leur effet",
        "Connaître les grandes œuvres qui dénoncent, de La Fontaine à Vian",
        "Dégager la visée critique d'un texte ou d'une image",
      ],
      sections: [
        {
          titre: "Critiquer en faisant rire : satire et caricature",
          blocs: [
            { t: "texte", md: "Le rire est une arme. Quand on se moque d'un puissant, on le fait descendre de son piédestal et on montre ses défauts à tous. C'est le principe de la **satire**." },
            { t: "definition", terme: "Satire", md: "Texte qui **critique en se moquant** : il **exagère** les défauts d'une personne, d'un groupe ou d'une institution pour faire rire, puis réfléchir. On parle de **registre satirique**." },
            { t: "definition", terme: "Caricature", md: "Dessin (ou portrait écrit) qui **grossit les traits** physiques ou moraux d'une personne pour la ridiculiser et dénoncer ce qu'elle représente." },
            { t: "savais-tu", md: "En 1831, **Honoré Daumier** (1808-1879) dessine le roi Louis-Philippe en *Gargantua*, un géant qui avale l'argent arraché au peuple. Le dessin lui vaut **six mois de prison**. La caricature dérange : c'est bien la preuve de sa force." },
          ],
        },
        {
          titre: "L'ironie : dire le contraire pour faire comprendre",
          blocs: [
            { t: "definition", terme: "Ironie et antiphrase", md: "L'**ironie** consiste à dire le contraire de ce que l'on pense, en comptant sur le lecteur pour comprendre la critique. Sa figure principale est l'**antiphrase** : « Quelle belle réussite ! » devant un échec." },
            { t: "exemple", titre: "« Le ministre, dans sa grande bonté, a supprimé les aides aux plus pauvres. »", etapes: ["On repère un **décalage** : « grande bonté » est mélioratif, mais l'action est cruelle.", "L'éloge ne peut pas être sincère : c'est une **antiphrase**.", "Visée : l'auteur dénonce l'injustice du ministre tout en faisant sourire."] },
            { t: "citation", texte: "Candide, qui tremblait comme un philosophe, se cacha du mieux qu'il put pendant cette boucherie héroïque.", auteur: "Voltaire", source: "Candide, chapitre 3 (1759)" },
            { t: "texte", md: "« Boucherie héroïque » est un **oxymore** : deux mots contraires sont collés. « Héroïque » reprend le discours glorieux sur la guerre, « boucherie » dit la réalité : des hommes massacrés. Le choc des deux mots démasque la propagande : c'est de l'**ironie**." },
            { t: "verifie", q: "« Bravo, tu as encore oublié tes clés ! » Quelle figure de style est employée ?", choix: ["Une hyperbole", "Une antiphrase", "Une comparaison", "Une litote"], bonne: 1, explication: "« Bravo » félicite… pour une étourderie : on dit le contraire de ce que l'on pense. C'est une antiphrase, figure de l'ironie." },
          ],
        },
        {
          titre: "L'apologue : une histoire pour une leçon",
          blocs: [
            { t: "definition", terme: "Apologue", md: "Court récit, souvent animalier ou merveilleux, qui **porte une leçon**. La fable, le conte philosophique et la fable animalière moderne sont des apologues. L'histoire plaît, la morale instruit." },
            { t: "citation", texte: "Selon que vous serez puissant ou misérable,\nLes jugements de cour vous rendront blanc ou noir.", auteur: "Jean de La Fontaine", source: "« Les Animaux malades de la peste », Fables, livre VII" },
            { t: "exemple", titre: "Lire « Les Animaux malades de la peste »", etapes: ["La peste frappe les animaux : le Lion propose que le plus coupable se sacrifie.", "Le Lion avoue avoir dévoré des moutons, et même le berger : les courtisans l'excusent.", "L'Âne avoue avoir brouté un peu d'herbe : « Manger l'herbe d'autrui ! quel crime abominable ! » On le condamne.", "La faute minime du faible est punie, les crimes du fort sont pardonnés : la fable dénonce une **justice inégale**."] },
            { t: "texte", md: "Dans *Candide* (1759), **Voltaire** promène son héros naïf à travers la guerre, l'Inquisition et l'esclavage. Son maître Pangloss répète pourtant que tout va « pour le mieux » dans « le meilleur des mondes possibles » : l'écart entre la théorie et les horreurs vécues ridiculise cet optimisme. Le conte se clôt sur une leçon d'action : « il faut cultiver notre jardin »." },
            { t: "verifie", q: "Dans « Les Animaux malades de la peste », pourquoi l'Âne est-il condamné ?", choix: ["Parce que sa faute est la plus grave", "Parce qu'il est le plus faible et n'a personne pour le défendre", "Parce qu'il refuse d'avouer"], bonne: 1, explication: "Sa faute (un peu d'herbe) est dérisoire à côté de celles du Lion. Il est condamné parce qu'il est faible : c'est exactement ce que la morale dénonce." },
          ],
        },
        {
          titre: "Attaquer de front ou par détour",
          blocs: [
            { t: "tableau", titre: "Les formes de la dénonciation", entetes: ["Forme", "Comment elle dénonce", "Exemple"], lignes: [["**Satire**", "Se moque en exagérant les défauts", "Les portraits de Molière ou de La Bruyère"], ["**Caricature**", "Grossit les traits par le dessin", "Daumier, *Gargantua* (1831)"], ["**Apologue**", "Raconte une histoire qui contient une leçon", "La Fontaine, Voltaire, Orwell"], ["**Pamphlet**", "Attaque **violemment et directement** une personne ou une institution", "Zola, « J'accuse… ! » (1898)"], ["**Chanson engagée**", "Prend position en musique, touche un large public", "Vian, « Le Déserteur » (1954)"]] },
            { t: "texte", md: "Le 13 janvier 1898, **Zola** publie dans le journal *L'Aurore* une lettre ouverte au président de la République : « J'accuse… ! ». Il y nomme les responsables de la condamnation injuste du capitaine **Dreyfus**. C'est un **pamphlet** : registre **polémique**, attaque frontale.\n\nEn 1954, **Boris Vian** écrit « Le Déserteur », chanson qui prend la forme d'une **lettre adressée au président** : un jeune homme y explique pourquoi il refuse de partir à la guerre." },
            { t: "astuce", md: "Pourquoi tant de détours (animaux, pays imaginaires, ironie) ? D'abord pour **contourner la censure** : on ne peut pas emprisonner un lion de fable. Ensuite pour **faire réfléchir** le lecteur : c'est lui qui doit décoder la critique, et une idée que l'on trouve soi-même convainc davantage." },
          ],
        },
        {
          titre: "Trois siècles de dénonciation",
          blocs: [
            { t: "frise", titre: "Œuvres qui dénoncent", evenements: [{ date: 1678, label: "La Fontaine, « Les Animaux malades de la peste »", detail: "Une justice qui épargne les puissants." }, { date: 1759, label: "Voltaire, *Candide*", detail: "La guerre, le fanatisme, l'esclavage." }, { date: 1831, label: "Daumier, *Gargantua*", detail: "Le roi caricaturé en ogre." }, { date: 1898, label: "Zola, « J'accuse… ! »", detail: "Pamphlet pour défendre Dreyfus." }, { date: 1945, label: "Orwell, *La Ferme des animaux*", detail: "Fable sur la révolution trahie." }, { date: 1954, label: "Vian, « Le Déserteur »", detail: "Chanson contre la guerre." }] },
            { t: "texte", md: "Dans *La Ferme des animaux* (1945), **George Orwell** raconte la révolte d'animaux contre leur fermier. Les cochons prennent le pouvoir et réécrivent peu à peu les règles. La loi d'égalité finit par recevoir un ajout absurde : certains animaux seraient « plus » égaux que les autres. Cette contradiction dénonce un pouvoir qui proclame l'égalité tout en s'accordant des privilèges : celui de Staline en URSS." },
            { t: "verifie", q: "Pourquoi Orwell choisit-il des animaux pour raconter la révolution russe et la dictature de Staline ?", choix: ["Pour écrire un livre destiné aux jeunes enfants", "Pour rendre la critique universelle et plus frappante, grâce au détour de la fable", "Parce qu'il ne connaissait pas l'histoire russe"], bonne: 1, explication: "Le détour animalier simplifie, fait sourire et rend la leçon valable pour toute dictature. Le lecteur décode lui-même la critique : c'est la force de l'apologue." },
          ],
        },
      ],
      bilan: "Satire, caricature, ironie, apologue, pamphlet : qu'on attaque de front ou par un détour, dénoncer, c'est forcer le lecteur à ouvrir les yeux.",
    },
    "3e-francais-03-visions-poetiques": {
      accroche: "Un poème sans rimes, sans ponctuation, dont les mots tombent comme la pluie ? Au XXe siècle, les poètes brisent les règles pour une raison simple : un monde nouveau demande une manière nouvelle de le dire.",
      objectifs: [
        "Identifier le vers libre, le poème en prose, le calligramme et l'absence de ponctuation",
        "Analyser une image poétique et reconnaître les procédés du surréalisme",
        "Connaître les grands poètes du XXe siècle et leurs recueils",
        "Dégager la visée d'un poème : lyrique, engagée, regard neuf sur les choses",
      ],
      sections: [
        {
          titre: "La poésie se libère des règles",
          blocs: [
            { t: "texte", md: "Pendant des siècles, un poème obéit à des règles : vers mesurés (l'alexandrin compte douze syllabes), rimes, strophes régulières. Dès la fin du XIXe siècle, Baudelaire et Rimbaud ouvrent la voie ; au XXe siècle, les poètes s'en libèrent presque complètement." },
            { t: "tableau", titre: "Les formes nouvelles de la poésie", entetes: ["Forme", "Ce qui change", "Exemple"], lignes: [["**Vers libre**", "Ni nombre de syllabes fixe, ni rime obligatoire ; le retour à la ligne crée le rythme", "Apollinaire, Prévert, Éluard"], ["**Poème en prose**", "Plus de vers du tout : des paragraphes, mais un travail du rythme et des images", "Ponge, *Le Parti pris des choses*"], ["**Calligramme**", "Les mots dessinent une forme liée au sens", "Apollinaire, « Il pleut »"], ["**Suppression de la ponctuation**", "Le lecteur choisit où couper : le sens devient multiple", "Apollinaire, *Alcools* (1913)"]] },
            { t: "citation", texte: "Sous le pont Mirabeau coule la Seine\nEt nos amours\nFaut-il qu'il m'en souvienne\nLa joie venait toujours après la peine", auteur: "Guillaume Apollinaire", source: "« Le Pont Mirabeau », Alcools (1913)" },
            { t: "exemple", titre: "Pourquoi pas de ponctuation ?", md: "Sans virgule, « coule la Seine / Et nos amours » peut se lire de deux façons : la Seine coule, et nos amours aussi s'écoulent ; ou bien la Seine coule sous le pont et sous nos amours. L'eau qui passe et l'amour qui passe se confondent. ==Le lecteur hésite, et cette hésitation fait le sens.==" },
          ],
        },
        {
          titre: "Le calligramme : un poème qui se regarde",
          blocs: [
            { t: "definition", terme: "Calligramme", md: "Poème dont les mots, par leur disposition sur la page, **dessinent une forme** liée à son sens : une pluie, une colombe, une tour Eiffel. Apollinaire invente le mot et publie *Calligrammes* en **1918**." },
            { t: "schema", titre: "« Il pleut » d'Apollinaire (disposition simplifiée)", legende: "Chaque vers descend en ligne oblique : le poème se lit en suivant la chute des gouttes.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat-papier" x="20" y="8" width="360" height="190" rx="6"/><rect class="trait-fin" x="20" y="8" width="360" height="190" rx="6" fill="none"/><text class="texte-petit" transform="translate(60 22) rotate(78)">Il pleut des voix de femmes…</text><text class="texte-petit" transform="translate(125 22) rotate(78)">c'est vous aussi qu'il pleut…</text><text class="texte-petit" transform="translate(190 22) rotate(78)">et ces nuages cabrés…</text><text class="texte-petit" transform="translate(255 22) rotate(78)">écoute s'il pleut…</text><text class="texte-petit" transform="translate(320 22) rotate(78)">écoute tomber les liens…</text><text class="texte-main" x="200" y="220" text-anchor="middle">les vers tombent comme la pluie</text></svg>` },
            { t: "verifie", q: "Qu'est-ce qu'un calligramme ?", choix: ["Un poème écrit à la main", "Un poème dont les mots dessinent une forme liée au sens", "Un poème sans rimes", "Un poème en prose"], bonne: 1, explication: "Dans un calligramme, la disposition des mots est elle-même une image : on lit et on regarde à la fois." },
          ],
        },
        {
          titre: "L'image poétique et le surréalisme",
          blocs: [
            { t: "definition", terme: "Image poétique", md: "Rapprochement de **deux réalités éloignées**, par une **comparaison** (avec un outil : comme, tel, pareil à) ou une **métaphore** (sans outil). Plus le rapprochement est inattendu, plus il renouvelle notre regard." },
            { t: "citation", texte: "Mon beau navire ô ma mémoire\nAvons-nous assez navigué", auteur: "Guillaume Apollinaire", source: "« La Chanson du mal-aimé », Alcools" },
            { t: "texte", md: "Ici, la **mémoire** est assimilée à un **navire**, sans mot de comparaison : c'est une **métaphore**. Le poète voyage dans ses souvenirs comme sur la mer, avec ses tempêtes et ses naufrages." },
            { t: "definition", terme: "Surréalisme", md: "Mouvement lancé par **André Breton** avec le *Manifeste du surréalisme* (**1924**). Il explore le **rêve** et l'**inconscient** : écriture automatique (écrire vite, sans contrôler), associations libres, images qui défient la logique." },
            { t: "exemple", titre: "Une terre bleue comme une orange", md: "Dans un vers célèbre de *L'Amour la poésie* (1929), Éluard compare la terre à une orange… bleue. Logiquement, c'est absurde : une orange n'est pas bleue. Mais l'image rassemble la forme ronde du fruit et la couleur de la planète vue du ciel. Elle est **surréaliste** : elle refuse la logique pour faire **voir autrement**." },
          ],
        },
        {
          titre: "Une poésie qui s'engage et qui affirme",
          blocs: [
            { t: "texte", md: "Pendant la Seconde Guerre mondiale, les poètes **résistent par les mots**. Le poème « Liberté » de **Paul Éluard** (1942) énumère, strophe après strophe, tous les lieux où le poète écrit un nom mystérieux, qu'il ne révèle qu'au tout dernier vers : la liberté. Ce suspense donne au mot final une force éclatante. Le texte est **parachuté par les avions alliés** sur la France occupée.\n\n**René Char**, chef de maquis, écrit les *Feuillets d'Hypnos* ; **Aragon** et **Desnos** publient dans la clandestinité. Desnos meurt en déportation en 1945." },
            { t: "definition", terme: "Négritude", md: "Mouvement né dans les années 1930 qui **affirme la fierté des cultures noires** face au colonialisme. Ses fondateurs : **Aimé Césaire**, né à la Martinique (*Cahier d'un retour au pays natal*, 1939), et **Léopold Sédar Senghor** (*Chants d'ombre*, 1945), qui deviendra président du Sénégal." },
            { t: "verifie", q: "Dans « Liberté », le mot « Liberté » n'apparaît qu'au dernier vers. Quel effet produit cette construction ?", choix: ["Elle crée une attente et donne au mot final une force maximale", "Elle montre que le poète a oublié le mot", "Elle rend le poème comique"], bonne: 0, explication: "Toutes les strophes préparent la révélation : le lecteur attend le nom, qui éclate à la fin comme un cri de résistance." },
          ],
        },
        {
          titre: "Regarder autrement le quotidien",
          blocs: [
            { t: "texte", md: "**Francis Ponge**, dans *Le Parti pris des choses* (1942), décrit un cageot, une huître, un morceau de pain, en prose. Sa démarche : regarder les objets ordinaires avec une attention neuve, jusqu'à les faire voir comme pour la première fois.\n\n**Jacques Prévert**, dans *Paroles* (1946), écrit une poésie **simple, proche de l'oral**, souvent sans ponctuation. Dans « Déjeuner du matin », une suite de gestes banals au passé composé (mettre le café, le lait, le sucre…) fait sentir, sans la nommer, la froideur d'une rupture." },
            { t: "frise", titre: "La poésie du XXe siècle", evenements: [{ date: 1913, label: "Apollinaire, *Alcools*", detail: "La ponctuation disparaît." }, { date: 1918, label: "Apollinaire, *Calligrammes*", detail: "Des poèmes-dessins." }, { date: 1924, label: "Breton, *Manifeste du surréalisme*", detail: "Le rêve et l'inconscient." }, { date: 1939, label: "Césaire, *Cahier d'un retour au pays natal*", detail: "Le cri de la négritude." }, { date: 1942, label: "Éluard, « Liberté » ; Ponge, *Le Parti pris des choses*", detail: "Résister ; regarder les choses." }, { date: 1945, label: "Senghor, *Chants d'ombre*", detail: "La négritude chantée." }, { date: 1946, label: "Prévert, *Paroles* ; Char, *Feuillets d'Hypnos*", detail: "La poésie de tous les jours ; la poésie du maquis." }] },
            { t: "astuce", md: "Pour dégager la **visée** d'un poème, demande-toi : le poète exprime-t-il ses sentiments (**lyrique**) ? Prend-il parti contre la guerre ou l'oppression (**engagé**) ? Cherche-t-il à nous faire voir le monde autrement (**regard neuf**) ? Souvent, plusieurs visées se mêlent." },
          ],
        },
      ],
      bilan: "Vers libre, calligramme, poème en prose, images surréalistes : au XXe siècle, la poésie casse les règles pour mieux chanter, résister et faire voir le monde autrement.",
    },
    "3e-francais-04-agir-dans-la-cite": {
      accroche: "Que peut un livre contre une armée, un camp, une dictature ? Rien, en apparence. Pourtant, des écrivains ont risqué leur vie pour écrire, et leurs pages ont traversé le temps quand les tyrans sont tombés.",
      objectifs: [
        "Connaître les œuvres qui témoignent des guerres et des totalitarismes du XXe siècle",
        "Distinguer témoignage, fiction engagée et dystopie",
        "Analyser les formes de la résistance et de l'engagement en littérature",
        "Comprendre comment le théâtre de Sartre, Brecht et Ionesco interroge le pouvoir",
      ],
      sections: [
        {
          titre: "Témoigner : raconter pour ne pas oublier",
          blocs: [
            { t: "definition", terme: "Témoignage", md: "Récit dans lequel l'auteur raconte **ce qu'il a réellement vécu**, pour **informer** ceux qui ne savent pas et **faire mémoire** de ceux qui ont disparu." },
            { t: "texte", md: "**Primo Levi**, chimiste italien, est déporté à Auschwitz en 1944. Revenu du camp, il publie *Si c'est un homme* (**1947**). Dans sa préface, il explique qu'il a éprouvé un besoin irrésistible de raconter aux autres ; dans le poème qui ouvre le livre, il demande au lecteur de ne jamais oublier que cela a eu lieu. C'est le **devoir de mémoire**.\n\n**Anne Frank**, adolescente juive, écrit son *Journal* (1942-1944) cachée avec sa famille dans l'**Annexe**, à **Amsterdam**. Arrêtée en 1944, elle meurt en déportation au camp de Bergen-Belsen en 1945. Son père, seul survivant, publie le journal en 1947." },
            { t: "verifie", q: "Quelle est la fonction première de *Si c'est un homme* ?", choix: ["Divertir le lecteur par une aventure", "Témoigner de l'expérience des camps pour informer et faire mémoire", "Imaginer un monde futur"], bonne: 1, explication: "Levi raconte ce qu'il a vécu à Auschwitz : c'est un témoignage. Il veut que les vivants sachent, et que l'on n'oublie pas." },
          ],
        },
        {
          titre: "Résister par les mots",
          blocs: [
            { t: "texte", md: "Sous l'Occupation, publier librement est impossible. En **1941**, Vercors et Pierre de Lescure fondent une maison d'édition clandestine : les **Éditions de Minuit**. Leur premier livre, en **1942**, est *Le Silence de la mer* de **Vercors**." },
            { t: "exemple", titre: "Le silence comme arme", md: "Un officier allemand, Werner von Ebrennac, est logé chez un vieil homme et sa nièce. Chaque soir, il leur parle de musique, de littérature, de la France qu'il admire. Eux ne lui répondent **jamais**.\n\nCe silence n'est pas de la passivité : c'est une **résistance digne**, la seule possible pour des civils désarmés. Refuser la parole, c'est refuser de reconnaître l'occupant." },
            { t: "citation", texte: "Ceux qui vivent, ce sont ceux qui luttent ; ce sont\nCeux dont un dessein ferme emplit l'âme et le front.", auteur: "Victor Hugo", source: "Les Châtiments (1853)" },
            { t: "savais-tu", md: "Hugo écrit *Les Châtiments* en **exil**, à Jersey, contre Napoléon III qui a pris le pouvoir par un coup d'État. Le livre circule en France en cachette, parfois glissé dans des boîtes de sardines ! Un siècle plus tard, les résistants reprennent ses vers." },
          ],
        },
        {
          titre: "S'engager : témoignage, fiction engagée, dystopie",
          blocs: [
            { t: "definition", terme: "Engagement", md: "Pour **Jean-Paul Sartre**, l'écrivain est **responsable** de ce qu'il écrit : écrire, c'est agir sur le monde, prendre parti face aux injustices de son temps. Un écrivain engagé met son œuvre au service d'une cause." },
            { t: "tableau", titre: "Trois façons d'écrire contre l'oppression", entetes: ["Forme", "Rapport au réel", "But", "Exemple"], lignes: [["**Témoignage**", "Faits vécus, racontés par celui qui les a vécus", "Informer, faire mémoire", "Levi, *Si c'est un homme* ; *Journal* d'Anne Frank"], ["**Fiction engagée**", "Histoire inventée qui renvoie à une réalité (souvent une **allégorie**)", "Faire réfléchir, dénoncer", "Vercors, *Le Silence de la mer* ; Camus, *La Peste*"], ["**Dystopie**", "Société imaginaire cauchemardesque, souvent future", "Alerter sur les dangers du présent", "Orwell, *1984*"]] },
            { t: "texte", md: "Dans *La Peste* (1947), **Albert Camus** raconte une épidémie qui enferme la ville d'Oran. On la lit comme une **allégorie** de l'Occupation et, plus largement, du mal : face à lui, certains fuient, d'autres luttent ensemble, comme le docteur Rieux.\n\nDans *1984* (1949), **George Orwell** imagine un État totalitaire où **Big Brother** surveille chacun. Le pouvoir invente la **novlangue**, une langue appauvrie dont on supprime des mots : sans mots pour la dire, la révolte devient impensable." },
            { t: "verifie", q: "Dans *1984*, que désigne la « novlangue » ?", choix: ["Une langue étrangère apprise à l'école", "Une langue appauvrie par le pouvoir pour empêcher de penser librement", "L'argot des résistants"], bonne: 1, explication: "En réduisant le vocabulaire, le régime réduit la pensée : on ne peut plus formuler une idée critique. Orwell montre que la liberté passe par la langue." },
          ],
        },
        {
          titre: "Le théâtre face au pouvoir",
          blocs: [
            { t: "texte", md: "Au XXe siècle, la scène devient un lieu de réflexion politique.\n\n• **Sartre**, dans *Huis clos* (1944), enferme trois morts dans un salon pour l'éternité. Leur enfer, c'est le **regard des autres** qui les juge sans cesse : nous dépendons du jugement d'autrui, qui peut nous emprisonner.\n• **Bertolt Brecht** veut un spectateur **critique**, pas un spectateur ému qui s'identifie au héros. Il casse l'illusion (pancartes, chansons, acteurs qui s'adressent au public) : c'est la **distanciation**. Dans *Mère Courage* (1939), une marchande vit de la guerre qui lui prend ses enfants.\n• **Eugène Ionesco**, dans *Rhinocéros* (1959), montre les habitants d'une ville qui se transforment un à un en rhinocéros : une image du **conformisme** et de la contagion des idées totalitaires." },
            { t: "verifie", q: "Dans *Rhinocéros*, Bérenger est le seul à refuser la transformation et affirme à la fin qu'il ne capitulera pas. Que représente-t-il ?", choix: ["Le conformisme", "L'individu qui résiste à la pensée unique", "Le pouvoir totalitaire"], bonne: 1, explication: "Tous cèdent par lâcheté, par mode ou par fatigue ; Bérenger, homme ordinaire, reste humain. Il incarne la résistance individuelle face à l'embrigadement." },
          ],
        },
        {
          titre: "L'individu et le pouvoir : repères",
          blocs: [
            { t: "frise", titre: "La littérature engagée, du XVIIIe au XXe siècle", evenements: [{ date: 1763, label: "Voltaire, *Traité sur la tolérance*", detail: "Après l'exécution injuste de Jean Calas." }, { date: 1853, label: "Hugo, *Les Châtiments*", detail: "Poèmes d'exil contre Napoléon III." }, { date: 1898, label: "Zola, « J'accuse… ! »", detail: "L'écrivain prend parti dans l'affaire Dreyfus." }, { date: 1939, label: "Brecht, *Mère Courage*", detail: "Le théâtre de la distanciation." }, { date: 1942, label: "Vercors, *Le Silence de la mer*", detail: "Publié clandestinement aux Éditions de Minuit." }, { date: 1944, label: "Sartre, *Huis clos*", detail: "Le regard des autres." }, { date: 1947, label: "Levi, *Si c'est un homme* ; Camus, *La Peste*", detail: "Témoigner ; l'allégorie du mal." }, { date: 1949, label: "Orwell, *1984*", detail: "La dystopie totalitaire." }, { date: 1959, label: "Ionesco, *Rhinocéros*", detail: "Contre le conformisme." }] },
            { t: "propriete", titre: "Face au pouvoir, quatre attitudes", md: "La littérature explore les choix de l'individu et leurs conséquences : **obéir** (par peur ou par conformisme), **se taire** (le silence peut être complice… ou résistant), **résister** (agir, refuser), **témoigner** (dire ce qui a eu lieu)." },
            { t: "astuce", md: "Face à un texte engagé, pose trois questions : **contre quoi** l'auteur s'élève-t-il ? **Par quel moyen** (récit vécu, allégorie, monde imaginaire, théâtre) ? **Que veut-il que le lecteur fasse** : savoir, se souvenir, réfléchir, agir ?" },
          ],
        },
      ],
      bilan: "Témoigner, résister, s'engager, alerter : au XXe siècle, les écrivains font des mots une arme contre l'oubli et l'oppression.",
    },
    "3e-francais-05-progres-reves-scientifiques": {
      accroche: "Un sous-marin électrique en 1870, des Martiens qui envahissent Londres en 1898, des pompiers qui brûlent les livres… La science-fiction ne prédit pas l'avenir : elle nous tend un miroir pour réfléchir au présent.",
      objectifs: [
        "Connaître les fondateurs de la science-fiction et les grandes œuvres d'anticipation",
        "Distinguer utopie, dystopie et récit d'anticipation",
        "Réfléchir à l'éthique du progrès : la machine, la créature, la responsabilité du savant",
        "Repérer la thèse, les arguments, les exemples et les connecteurs d'un texte argumentatif",
      ],
      sections: [
        {
          titre: "Imaginer les effets de la science",
          blocs: [
            { t: "definition", terme: "Science-fiction et anticipation", md: "La **science-fiction** imagine les conséquences des sciences et des techniques sur l'humanité. Le **récit d'anticipation** en est une forme : il situe l'histoire dans un **futur proche** de notre monde, pour en montrer les évolutions possibles." },
            { t: "texte", md: "Deux pères fondent le genre au XIXe siècle. Le Français **Jules Verne** rêve des machines de demain : un obus lancé vers la Lune (*De la Terre à la Lune*, 1865), le sous-marin *Nautilus* du capitaine Nemo (*Vingt mille lieues sous les mers*, 1870). L'Anglais **H. G. Wells** invente un voyageur qui explore le futur (*La Machine à explorer le temps*, 1895) et une invasion martienne (*La Guerre des mondes*, 1898)." },
            { t: "citation", texte: "La mer est tout ! Elle couvre les sept dixièmes du globe terrestre.", auteur: "Jules Verne", source: "Vingt mille lieues sous les mers (1870), le capitaine Nemo" },
            { t: "frise", titre: "Rêves et cauchemars scientifiques", evenements: [{ date: 1516, label: "More, *Utopia*", detail: "Le mot « utopie » est créé." }, { date: 1818, label: "Mary Shelley, *Frankenstein*", detail: "Le savant et sa créature." }, { date: 1865, label: "Verne, *De la Terre à la Lune*" }, { date: 1870, label: "Verne, *Vingt mille lieues sous les mers*" }, { date: 1898, label: "Wells, *La Guerre des mondes*" }, { date: 1920, label: "Čapek invente le mot « robot »" }, { date: 1932, label: "Huxley, *Le Meilleur des mondes*" }, { date: 1943, label: "Barjavel, *Ravage*" }, { date: 1950, label: "Asimov, *Les Robots*", detail: "Les trois lois de la robotique." }, { date: 1953, label: "Bradbury, *Fahrenheit 451*" }] },
          ],
        },
        {
          titre: "Utopie, dystopie, anticipation",
          blocs: [
            { t: "definition", terme: "Utopie", md: "Récit qui décrit une **société idéale** imaginaire. Le mot est créé par **Thomas More** en **1516** (*Utopia*), à partir du grec : « lieu de nulle part ». La **dystopie** est son contraire : une société imaginaire **cauchemardesque**." },
            { t: "tableau", titre: "Trois façons d'imaginer l'avenir", entetes: ["Critère", "Utopie", "Dystopie", "Anticipation"], lignes: [["Société décrite", "Idéale, harmonieuse", "Oppressive, déshumanisée", "Notre monde transformé par une invention ou une catastrophe"], ["Visée", "Proposer un modèle, critiquer le présent par contraste", "Alerter sur une dérive du présent", "Faire réfléchir aux conséquences du progrès"], ["Exemple", "More, *Utopia*", "Huxley, *Le Meilleur des mondes* ; Bradbury, *Fahrenheit 451*", "Barjavel, *Ravage* (l'électricité disparaît en 2052)"]] },
            { t: "exemple", titre: "Pourquoi *Fahrenheit 451* est une dystopie", etapes: ["La situation : dans un futur imaginaire, les pompiers ne sauvent plus les maisons, ils **brûlent les livres**, interdits.", "Le procédé : Bradbury **inverse** un métier protecteur, ce qui choque le lecteur.", "Le trait exagéré : la société a renoncé à penser, gavée de divertissements sur des écrans géants.", "La visée : la dystopie grossit un trait du présent pour **nous alerter**."] },
            { t: "texte", md: "Dans *Le Meilleur des mondes* (1932), **Aldous Huxley** imagine des humains fabriqués en laboratoire, classés en castes et apaisés par une drogue, le *soma*. Tout le monde a l'air heureux… mais personne n'est libre. Huxley dénonce une société qui sacrifie la liberté au confort." },
            { t: "verifie", q: "L'utopie et la dystopie décrivent-elles toutes deux des sociétés imaginaires ?", choix: ["Oui : l'une idéale, l'autre cauchemardesque", "Non : la dystopie décrit une société réelle"], bonne: 0, explication: "Les deux inventent une société qui n'existe pas. L'utopie la rêve parfaite ; la dystopie en fait un cauchemar pour mettre en garde." },
          ],
        },
        {
          titre: "Machines, créatures et responsabilité",
          blocs: [
            { t: "texte", md: "Dans *Frankenstein* (1818), **Mary Shelley** raconte l'histoire de **Victor Frankenstein**, un jeune savant qui donne vie à une créature assemblée. Horrifié, il l'abandonne. Rejetée par tous, la créature devient violente. ==Frankenstein est le nom du créateur, pas du monstre==, qui n'a pas de nom. Le roman pose une question toujours actuelle : **le savant est-il responsable de ce qu'il crée ?**" },
            { t: "liste", titre: "Les trois lois de la robotique d'Asimov (*Les Robots*, 1950)", ordonnee: true, items: ["Un robot ne doit pas faire de mal à un être humain, ni le laisser en danger sans agir.", "Un robot doit obéir aux humains, sauf si cela contredit la première loi.", "Un robot doit protéger sa propre existence, sauf si cela contredit les deux premières lois."] },
            { t: "savais-tu", md: "Le mot **robot** vient du tchèque *robota*, la **corvée**. Il apparaît en 1920 dans une pièce de théâtre de l'écrivain **Karel Čapek**, où des ouvriers artificiels finissent par se révolter." },
            { t: "citation", texte: "Science sans conscience n'est que ruine de l'âme.", auteur: "François Rabelais", source: "Pantagruel (1532)" },
            { t: "verifie", q: "Dans le roman de Mary Shelley, qui s'appelle Frankenstein ?", choix: ["Le monstre", "Le savant qui crée la créature", "Le village où se passe l'histoire"], bonne: 1, explication: "Victor Frankenstein est le créateur. La créature n'a pas de nom : c'est l'usage populaire qui lui a donné, par erreur, celui de son créateur." },
          ],
        },
        {
          titre: "Argumenter sur le progrès",
          blocs: [
            { t: "definition", terme: "Texte argumentatif", md: "Texte qui défend une **thèse** (l'idée que l'on veut faire admettre) à l'aide d'**arguments** (les raisons), illustrés par des **exemples** (des faits précis) et reliés par des **connecteurs logiques**." },
            { t: "schema", titre: "L'architecture d'une argumentation", legende: "La thèse s'appuie sur des arguments, et chaque argument sur un exemple. Les connecteurs servent de ponts.", svg: `<svg viewBox="0 0 400 245"><rect class="aplat" x="120" y="10" width="160" height="42" rx="6"/><rect class="trait" x="120" y="10" width="160" height="42" rx="6" fill="none"/><text class="texte-pigment" x="200" y="29" text-anchor="middle">Thèse</text><text class="texte-petit" x="200" y="44" text-anchor="middle">l'idée que l'on défend</text><line class="trait-fin" x1="200" y1="52" x2="70" y2="86"/><line class="trait-fin" x1="200" y1="52" x2="200" y2="86"/><line class="trait-fin" x1="200" y1="52" x2="330" y2="86"/><rect class="aplat" x="15" y="86" width="110" height="42" rx="5"/><rect class="trait" x="15" y="86" width="110" height="42" rx="5" fill="none"/><text class="texte" x="70" y="104" text-anchor="middle">Argument 1</text><text class="texte-petit texte-pigment" x="70" y="120" text-anchor="middle">« D'abord… »</text><rect class="aplat" x="145" y="86" width="110" height="42" rx="5"/><rect class="trait" x="145" y="86" width="110" height="42" rx="5" fill="none"/><text class="texte" x="200" y="104" text-anchor="middle">Argument 2</text><text class="texte-petit texte-pigment" x="200" y="120" text-anchor="middle">« Ensuite… »</text><rect class="aplat" x="275" y="86" width="110" height="42" rx="5"/><rect class="trait" x="275" y="86" width="110" height="42" rx="5" fill="none"/><text class="texte" x="330" y="104" text-anchor="middle">Argument 3</text><text class="texte-petit texte-pigment" x="330" y="120" text-anchor="middle">« Enfin… »</text><line class="trait-fin" x1="70" y1="128" x2="70" y2="160" marker-end="url(#fl)"/><line class="trait-fin" x1="200" y1="128" x2="200" y2="160" marker-end="url(#fl)"/><line class="trait-fin" x1="330" y1="128" x2="330" y2="160" marker-end="url(#fl)"/><rect class="aplat-papier" x="15" y="162" width="110" height="40" rx="5"/><rect class="pointille" x="15" y="162" width="110" height="40" rx="5" fill="none"/><text class="texte" x="70" y="180" text-anchor="middle">Exemple</text><text class="texte-petit" x="70" y="195" text-anchor="middle">« par exemple »</text><rect class="aplat-papier" x="145" y="162" width="110" height="40" rx="5"/><rect class="pointille" x="145" y="162" width="110" height="40" rx="5" fill="none"/><text class="texte" x="200" y="180" text-anchor="middle">Exemple</text><text class="texte-petit" x="200" y="195" text-anchor="middle">« ainsi »</text><rect class="aplat-papier" x="275" y="162" width="110" height="40" rx="5"/><rect class="pointille" x="275" y="162" width="110" height="40" rx="5" fill="none"/><text class="texte" x="330" y="180" text-anchor="middle">Exemple</text><text class="texte-petit" x="330" y="195" text-anchor="middle">« notamment »</text><text class="texte-main" x="200" y="232" text-anchor="middle">les connecteurs sont les ponts du raisonnement</text></svg>` },
            { t: "exemple", titre: "Repérer les éléments", md: "« **Le progrès technique ne rend pas forcément les humains plus heureux.** (thèse) *En effet*, il peut isoler (argument). *Par exemple*, les réseaux sociaux éloignent parfois les adolescents de leurs amis réels (exemple). »" },
            { t: "attention", md: "Ne confonds pas **argument** et **exemple**. L'argument est une idée générale qui répond à « pourquoi ? » ; l'exemple est un fait précis qui prouve l'argument. « Par exemple », « ainsi », « notamment » annoncent un exemple ; « en effet », « car » annoncent une raison." },
          ],
        },
      ],
      bilan: "Utopie rêvée, dystopie redoutée, anticipation possible : imaginer l'avenir, c'est réfléchir dès aujourd'hui à ce que la science doit, ou ne doit pas, nous permettre.",
    },
    "3e-francais-06-phrase-complexe": {
      accroche: "« Je sais que tu as lu le livre dont je t'ai parlé. » Une seule phrase, mais trois verbes, trois propositions, et un réseau de liens invisibles. Apprendre à le voir, c'est comprendre comment la pensée s'organise.",
      objectifs: [
        "Compter les propositions et distinguer juxtaposition, coordination et subordination",
        "Identifier les subordonnées relative, complétive, circonstancielle et interrogative indirecte",
        "Donner la nature et la fonction d'une proposition subordonnée",
        "Reconnaître les fonctions essentielles dans la phrase",
      ],
      sections: [
        {
          titre: "De la phrase simple à la phrase complexe",
          blocs: [
            { t: "definition", terme: "Proposition", md: "Ensemble de mots organisé autour d'un **verbe conjugué**. Une **phrase simple** contient un seul verbe conjugué, donc une seule proposition ; une **phrase complexe** en contient **au moins deux**." },
            { t: "propriete", titre: "Compter les propositions", md: "Il y a **autant de propositions que de verbes conjugués**. Les infinitifs et les participes seuls ne comptent pas.\n\nDe la plus petite unité à la plus grande : le **mot**, le **groupe** de mots, la **proposition**, la **phrase**." },
            { t: "exemple", titre: "« Quand le soleil se lève, les oiseaux chantent et la ville s'éveille. »", etapes: ["Je souligne les verbes conjugués : **se lève**, **chantent**, **s'éveille**.", "Trois verbes conjugués, donc **trois propositions**.", "« Quand le soleil se lève » est subordonnée ; « les oiseaux chantent » et « la ville s'éveille » sont deux principales coordonnées par « et »."] },
            { t: "texte", md: "Une proposition qui ne dépend d'aucune autre et dont aucune ne dépend est une proposition **indépendante**. « Il pleut. » est une indépendante." },
          ],
        },
        {
          titre: "Trois façons de relier les propositions",
          blocs: [
            { t: "tableau", titre: "Juxtaposer, coordonner, subordonner", entetes: ["Lien", "Outil", "Exemple"], lignes: [["**Juxtaposition**", "Un signe de ponctuation : virgule, point-virgule, deux-points", "Il pleut, je reste chez moi."], ["**Coordination**", "Une conjonction de coordination : mais, ou, et, donc, or, ni, car", "Il pleut, **donc** je reste chez moi."], ["**Subordination**", "Un mot subordonnant : pronom relatif, conjonction de subordination, mot interrogatif", "Je reste chez moi **parce qu'il** pleut."]] },
            { t: "astuce", md: "Pour retenir les sept conjonctions de coordination : « **Mais où est donc Ornicar ?** » = mais, ou, et, donc, or, ni, car. Attention : « parce que » n'en fait pas partie, c'est une conjonction de **subordination**." },
            { t: "verifie", q: "« Il pleut, je reste chez moi. » Quel lien unit les deux propositions ?", choix: ["La coordination", "La juxtaposition", "La subordination"], bonne: 1, explication: "Rien qu'une virgule entre les deux propositions : c'est une juxtaposition. Le lien logique (la cause) reste implicite." },
          ],
        },
        {
          titre: "Les quatre subordonnées",
          blocs: [
            { t: "tableau", titre: "Nature et fonction des subordonnées", entetes: ["Nature", "Introduite par", "Fonction habituelle", "Exemple"], lignes: [["**Relative**", "un pronom relatif : qui, que, quoi, dont, où, lequel…", "complément de l'**antécédent** (le nom qu'elle complète)", "La maison *que j'ai visitée* est immense."], ["**Complétive** (conjonctive)", "la conjonction « que », sans antécédent", "le plus souvent **COD** du verbe", "Je crois *que tu as raison*."], ["**Circonstancielle**", "une conjonction : quand, parce que, pour que, bien que, si…", "**complément circonstanciel** (temps, cause, but…)", "*Quand il pleut*, je lis."], ["**Interrogative indirecte**", "si, qui, où, quand, pourquoi, ce que, comment…", "**COD** d'un verbe comme demander, savoir, ignorer", "Je me demande *si elle viendra*."]] },
            { t: "schema", titre: "Analyse logique d'une phrase complexe", legende: "« que » est une conjonction (pas d'antécédent) ; « dont » est un pronom relatif qui reprend « livre ».", svg: `<svg viewBox="0 0 400 190"><path class="trait-fin" fill="none" d="M130 40 Q94 6 60 36" marker-end="url(#fl-p)"/><text class="texte-petit texte-pigment" x="95" y="14" text-anchor="middle">COD</text><path class="trait-fin" fill="none" d="M300 40 Q264 6 230 36" marker-end="url(#fl-p)"/><text class="texte-petit texte-pigment" x="265" y="14" text-anchor="middle">complète</text><rect class="aplat" x="10" y="42" width="70" height="32" rx="5"/><rect class="trait" x="10" y="42" width="70" height="32" rx="5" fill="none"/><text class="texte" x="45" y="63" text-anchor="middle">Je sais</text><rect class="aplat-papier" x="88" y="42" width="160" height="32" rx="5"/><rect class="trait-fin" x="88" y="42" width="160" height="32" rx="5" fill="none"/><text class="texte" x="168" y="63" text-anchor="middle">que tu as lu le livre</text><rect class="aplat-papier" x="256" y="42" width="136" height="32" rx="5"/><rect class="trait-fin" x="256" y="42" width="136" height="32" rx="5" fill="none"/><text class="texte" x="324" y="63" text-anchor="middle">dont je t'ai parlé.</text><text class="texte-pigment" x="45" y="100" text-anchor="middle">principale</text><text class="texte-petit" x="45" y="116" text-anchor="middle">verbe : sais</text><text class="texte-pigment" x="168" y="100" text-anchor="middle">complétive</text><text class="texte-petit" x="168" y="116" text-anchor="middle">introduite par « que »</text><text class="texte-petit" x="168" y="130" text-anchor="middle">COD de « sais »</text><text class="texte-pigment" x="324" y="100" text-anchor="middle">relative</text><text class="texte-petit" x="324" y="116" text-anchor="middle">introduite par « dont »</text><text class="texte-petit" x="324" y="130" text-anchor="middle">complète « livre »</text><line class="pointille" x1="20" y1="148" x2="380" y2="148"/><text class="texte-main" x="200" y="176" text-anchor="middle">3 verbes conjugués = 3 propositions</text></svg>` },
            { t: "attention", md: "L'**interrogative indirecte** ne prend **pas de point d'interrogation** et n'inverse pas le sujet. On écrit « Je me demande si tu viendras. » et non « Je me demande si viendras-tu ? ». De même : « Je ne sais pas *ce que tu veux* » (et non « qu'est-ce que tu veux »)." },
          ],
        },
        {
          titre: "Les circonstancielles et les trois « que »",
          blocs: [
            { t: "tableau", titre: "Les relations logiques des circonstancielles", entetes: ["Relation", "Mots subordonnants", "Exemple"], lignes: [["Temps", "quand, lorsque, dès que, pendant que, avant que", "*Dès que la cloche sonne*, ils sortent."], ["Cause", "parce que, puisque, comme", "*Comme il pleuvait*, nous sommes restés."], ["Conséquence", "si bien que, de sorte que, tellement… que", "Elle a tellement travaillé *qu'elle a réussi*."], ["But", "pour que, afin que (+ subjonctif)", "Je parle fort *pour qu'on m'entende*."], ["Concession", "bien que, quoique (+ subjonctif)", "*Bien qu'il soit fatigué*, il continue."], ["Condition", "si, à condition que", "*Si tu viens*, je serai ravi."], ["Comparaison", "comme, ainsi que", "Il nage *comme nage un poisson*."]] },
            { t: "exemple", titre: "Le mot « que » a trois natures", etapes: ["« Le livre **que** je lis » : « que » a un **antécédent** (livre) et il est COD de « lis » dans la relative → **pronom relatif**.", "« Je pense **que** tu as raison » : pas d'antécédent, « que » ne fait qu'introduire la subordonnée → **conjonction de subordination** (complétive).", "« **Que** tu as grandi ! » : il renforce une exclamation → **adverbe exclamatif**."] },
            { t: "verifie", q: "« Elle a tellement travaillé qu'elle a réussi. » Nature et fonction de « qu'elle a réussi » ?", choix: ["Subordonnée relative, complément de l'antécédent", "Subordonnée circonstancielle de conséquence, complément circonstanciel de conséquence", "Subordonnée complétive, COD de « travaillé »"], bonne: 1, explication: "« tellement… que » exprime la conséquence : la réussite découle du travail. « Travailler » n'a pas de COD ici, et « que » n'a pas d'antécédent." },
          ],
        },
        {
          titre: "Natures et fonctions : la boîte à outils",
          blocs: [
            { t: "propriete", titre: "Nature ou fonction ?", md: "La **nature** dit **ce qu'est** un mot ou une proposition (nom, verbe, subordonnée relative…) : elle ne change pas. La **fonction** dit **le rôle** qu'il joue dans la phrase (sujet, COD…) : elle dépend du contexte. Une question de grammaire demande souvent les deux." },
            { t: "tableau", titre: "Les fonctions essentielles", entetes: ["Fonction", "Comment la reconnaître", "Exemple"], lignes: [["Sujet", "« Qui est-ce qui ? » + verbe", "*Le vent* souffle."], ["COD / COI", "verbe + « quoi ? » / verbe + « à quoi ? de quoi ? »", "Il lit *un roman*. Il parle *à Léa*."], ["Attribut du sujet", "après être, devenir, sembler, paraître, rester…", "Marie est devenue *médecin*."], ["Attribut du COD", "qualité donnée au COD par le verbe", "Je trouve ce film *génial*."], ["Complément circonstanciel", "souvent déplaçable et supprimable : où ? quand ? pourquoi ?", "*Le soir*, il lit."], ["Complément du nom / épithète", "complète un nom (avec ou sans préposition)", "un sac *de sport* ; un ciel *gris*"], ["Apposition", "détachée par une virgule, désigne la même réalité que le nom", "*Poète engagé*, Hugo s'exila."], ["Complément d'agent", "à la voix passive, introduit par « par » ou « de »", "Le roman a été écrit *par une jeune autrice*."]] },
            { t: "verifie", q: "« Le village où je suis né a changé. » Quelle est la fonction du pronom relatif « où » dans la relative ?", choix: ["Sujet de « suis né »", "Complément circonstanciel de lieu de « suis né »", "COD de « a changé »"], bonne: 1, explication: "Dans la relative, « où » remplace « dans le village » : je suis né dans ce village. C'est un complément circonstanciel de lieu. La relative entière, elle, complète l'antécédent « village »." },
          ],
        },
      ],
      bilan: "Un verbe conjugué, une proposition ; un mot subordonnant, une dépendance. Pour chaque subordonnée, donne toujours sa nature et sa fonction.",
    },
    "3e-francais-07-verbe-modes-temps": {
      accroche: "« Il faut que tu sois là » ou « il faut que tu es là » ? « Va chercher du pain » ou « vas chercher » ? Le verbe est le cœur de la phrase, et c'est aussi lui qui rapporte, ou fait perdre, le plus de points à la réécriture du brevet.",
      objectifs: [
        "Identifier le mode et le temps d'un verbe",
        "Conjuguer sans faute au subjonctif, au conditionnel, au passé simple et à l'impératif",
        "Expliquer la valeur d'un temps, l'aspect et la concordance des temps",
        "Réussir une réécriture : changement de temps, de personne, de genre ou de nombre",
      ],
      sections: [
        {
          titre: "Modes et temps : la carte du verbe",
          blocs: [
            { t: "definition", terme: "Mode", md: "Le **mode** indique la manière dont celui qui parle envisage l'action : réelle (indicatif), souhaitée ou envisagée (subjonctif), ordonnée (impératif). Chaque mode contient des **temps**." },
            { t: "tableau", titre: "Les modes du verbe", entetes: ["Mode", "Type", "Emploi", "Exemple (faire)"], lignes: [["**Indicatif**", "personnel", "action présentée comme réelle ; il comprend le conditionnel", "je fais, je fis, je ferai, je ferais"], ["**Subjonctif**", "personnel", "action souhaitée, douteuse, envisagée", "que je fasse"], ["**Impératif**", "personnel (3 personnes)", "ordre, conseil, prière", "fais, faisons, faites"], ["**Infinitif**", "impersonnel", "forme nominale du verbe", "faire, avoir fait"], ["**Participe**", "impersonnel", "forme adjectivale", "faisant, fait"], ["**Gérondif**", "impersonnel", "« en » + participe présent : circonstance", "en faisant"]] },
            { t: "propriete", titre: "Le cas du conditionnel", md: "Dans la grammaire officielle, le **conditionnel** est un **temps de l'indicatif**. Mais il garde une **valeur modale** : hypothèse (« s'il venait, je serais content »), souhait (« j'aimerais partir »), politesse (« pourriez-vous m'aider ? »), information non vérifiée (« le suspect aurait fui »)." },
            { t: "verifie", q: "« En marchant, il réfléchit. » À quel mode est « en marchant » ?", choix: ["Participe", "Infinitif", "Gérondif", "Subjonctif"], bonne: 2, explication: "« en » + participe présent forme le gérondif, un mode impersonnel. Il exprime ici une circonstance (la simultanéité)." },
          ],
        },
        {
          titre: "Valeurs des temps et aspect",
          blocs: [
            { t: "propriete", titre: "Temps simple, temps composé : l'aspect", md: "Un **temps simple** présente l'action **en cours** : c'est l'aspect **inaccompli** (il mange). Le **temps composé** correspondant présente l'action **achevée** : aspect **accompli** (il a mangé). Il marque souvent l'**antériorité** : « Quand j'*ai fini* mes devoirs, je joue. »" },
            { t: "tableau", titre: "Les valeurs des principaux temps", entetes: ["Temps", "Valeur", "Exemple"], lignes: [["Présent", "d'**énonciation** (au moment où l'on parle)", "Je t'écris de Lyon."], ["Présent", "de **vérité générale**", "L'eau bout à 100 °C."], ["Présent", "de **narration** (rend un récit passé plus vivant)", "Soudain, il surgit."], ["Présent / imparfait", "d'**habitude**", "Chaque matin, il court / courait."], ["Imparfait", "**arrière-plan**, description, action en cours", "Il pleuvait ; la rue était déserte."], ["Passé simple", "**premier plan** : actions successives et limitées qui font avancer le récit", "Il entra, posa son sac et sortit."], ["Conditionnel présent", "**futur dans le passé**", "Elle m'a dit qu'elle viendrait."]] },
            { t: "verifie", q: "« Elle m'a dit qu'elle viendrait. » Quelle est la valeur du conditionnel « viendrait » ?", choix: ["Une hypothèse", "Le futur dans le passé", "La politesse"], bonne: 1, explication: "Le verbe principal est au passé (« a dit ») : la venue est postérieure à la parole. Le conditionnel exprime ce futur vu du passé. Au présent, on dirait « elle dit qu'elle viendra »." },
          ],
        },
        {
          titre: "Conjuguer sans faute",
          blocs: [
            { t: "propriete", titre: "Quand employer le subjonctif ?", md: "Après les verbes de **volonté** (je veux que), de **sentiment** (je crains que, je suis content que), de **doute** (je doute que), et après **il faut que**, **bien que**, **pour que**, **avant que**, **à condition que**.\n\nMais **après que** est suivi de l'**indicatif** : « après qu'il *est* parti »." },
            { t: "tableau", titre: "Les formes pièges", entetes: ["Verbe", "Subjonctif présent", "Passé simple (il / nous)", "Impératif (2e sing.)"], lignes: [["avoir", "que j'**aie**, qu'il ait", "il eut, nous eûmes", "**aie**"], ["être", "que je **sois**, qu'il soit", "il fut, nous fûmes", "**sois**"], ["aller", "que j'**aille**, qu'il aille", "il alla, nous allâmes", "**va** (mais **vas-y**)"], ["faire", "que je **fasse**", "il fit, nous fîmes", "fais"], ["savoir", "que je **sache**", "il sut, nous sûmes", "**sache**"], ["pouvoir / vouloir", "que je **puisse** / **veuille**", "il put / il voulut", "**veuille**"], ["venir / prendre", "que je vienne / prenne", "il **vint**, nous **prîmes**", "viens / prends"]] },
            { t: "attention", md: "À l'impératif, les verbes en **-er** (et aller) n'ont **pas de s** à la 2e personne du singulier : « **mange**, **va** ». Le s revient seulement devant **en** et **y**, pour la liaison : « manges-en », « vas-y ». Et n'oublie pas l'accent circonflexe du passé simple : nous **prîmes**, vous **fîtes**." },
          ],
        },
        {
          titre: "La concordance des temps",
          blocs: [
            { t: "propriete", titre: "Principale au passé", md: "Quand le verbe principal est au **passé**, le temps de la subordonnée dépend du moment de l'action :\n• **simultanéité** → imparfait : il disait qu'il *pleuvait* ;\n• **antériorité** → plus-que-parfait : il disait qu'il *avait plu* ;\n• **postériorité** → conditionnel présent : il disait qu'il *pleuvrait*." },
            { t: "exemple", titre: "Réécris au passé : « Je pense qu'il viendra demain. »", etapes: ["Le verbe principal passe à l'imparfait : « Je pensais ».", "La venue est postérieure : le futur « viendra » devient le conditionnel « viendrait ».", "Dans un récit, « demain » devient « le lendemain ».", "Résultat : « Je pensais qu'il viendrait le lendemain. »"] },
            { t: "texte", md: "Autre cas fréquent : « Il affirma qu'il **était venu** la veille. » La venue a eu lieu **avant** l'affirmation : on emploie le plus-que-parfait." },
          ],
        },
        {
          titre: "Réussir la réécriture du DNB",
          blocs: [
            { t: "etapes", titre: "La méthode de la réécriture", items: [{ titre: "Lire la consigne", md: "Souligne ce qui change : le **temps** ? la **personne** ? le **genre** ? le **nombre** ? Parfois plusieurs à la fois." }, { titre: "Repérer les mots touchés", md: "Entoure **chaque** verbe, pronom, déterminant, adjectif et participe passé qui dépend du changement." }, { titre: "Transformer", md: "Recopie le texte en modifiant uniquement ce qui doit l'être. Ne change rien d'autre : ni ponctuation, ni vocabulaire." }, { titre: "Vérifier les accords", md: "Participes passés (avec être, avec avoir, pronominaux), adjectifs, terminaisons verbales." }, { titre: "Relire mot à mot", md: "Compare le texte d'origine et le tien, ligne par ligne. **Chaque oubli coûte des points.**" }] },
            { t: "exemple", titre: "Trois réécritures types", etapes: ["Remplace « je » par « elles » : « Je pris mon manteau et je sortis. » → « Elles **prirent leur** manteau et elles **sortirent**. » Le déterminant change aussi !", "Au présent : « Lorsqu'elle eut terminé, elle sortit et courut vers la gare. » → « Lorsqu'elle **a** terminé, elle **sort** et **court** vers la gare. » Le passé antérieur devient un passé composé.", "Au masculin pluriel : « Elle s'est assise et a regardé les enfants qui jouaient. » → « Ils se sont **assis** et **ont** regardé les enfants qui jouaient. » « Regardé » reste invariable : le COD est placé après."] },
            { t: "verifie", q: "Concordance des temps : « Il affirma qu'il ___ la veille. » Quelle forme convient ?", choix: ["viendra", "était venu", "vient", "viendrait"], bonne: 1, explication: "L'action (venir) est antérieure à l'affirmation, qui est au passé : on emploie le plus-que-parfait, « était venu ». « La veille » confirme l'antériorité." },
          ],
        },
      ],
      bilan: "Le mode dit comment on voit l'action, le temps dit quand et comment elle se déroule. En réécriture, traque chaque mot touché : verbes, pronoms, déterminants, accords.",
    },
    "3e-francais-08-discours-enonciation": {
      accroche: "« Je viendrai demain », a dit ton ami hier. Il viendra donc… aujourd'hui ! Pour rapporter des paroles sans trahir le sens, il faut savoir qui parle, à qui, où et quand : c'est toute la question de l'énonciation.",
      objectifs: [
        "Identifier et transposer les discours direct, indirect et indirect libre",
        "Analyser la situation d'énonciation et distinguer discours et récit",
        "Repérer la modalisation, l'explicite et l'implicite (présupposé, sous-entendu)",
        "Identifier les points de vue interne, externe et omniscient",
      ],
      sections: [
        {
          titre: "Rapporter des paroles : trois discours",
          blocs: [
            { t: "tableau", titre: "Les trois discours rapportés", entetes: ["Discours", "Marques", "Exemple"], lignes: [["**Direct**", "Paroles citées telles quelles : deux-points, **guillemets**, **tirets** dans un dialogue, verbe de parole", "Il dit : « Je viendrai demain. »"], ["**Indirect**", "Paroles intégrées dans une **subordonnée** (que, si, ce que…) après un verbe de parole ; pronoms et temps transposés", "Il dit qu'il viendrait le lendemain."], ["**Indirect libre**", "Ni guillemets ni « que », mais les temps du récit et le **ton de l'oral** (questions, exclamations)", "Il viendrait le lendemain, c'était promis !"]] },
            { t: "definition", terme: "Discours indirect libre", md: "Mélange des deux autres : la phrase garde la syntaxe et l'émotion des paroles ou des pensées, mais sans guillemets ni verbe introducteur, avec la 3e personne et les temps du récit. Flaubert et Zola l'emploient pour faire entendre les **pensées d'un personnage** de l'intérieur." },
            { t: "verifie", q: "« Emma songeait. Pourquoi, mon Dieu, s'était-elle mariée ? » Quel type de discours rapporté ?", choix: ["Discours direct", "Discours indirect", "Discours indirect libre"], bonne: 2, explication: "Pas de guillemets ni de « que », la 3e personne et le plus-que-parfait du récit… mais l'exclamation « mon Dieu » et la question sont celles d'Emma : c'est l'indirect libre." },
          ],
        },
        {
          titre: "Passer du direct à l'indirect",
          blocs: [
            { t: "tableau", titre: "Les transpositions dans un récit au passé", entetes: ["Discours direct", "Discours indirect"], lignes: [["je, tu, me, te", "il, elle, le, la, lui (selon qui parle)"], ["présent : « je suis »", "imparfait : qu'il était"], ["futur : « je viendrai »", "conditionnel : qu'il viendrait"], ["passé composé : « je suis venu »", "plus-que-parfait : qu'il était venu"], ["aujourd'hui", "ce jour-là"], ["demain / hier", "le lendemain / la veille"], ["ici / maintenant", "là / à ce moment-là"]] },
            { t: "exemple", titre: "Transposer une question", md: "Il m'a demandé : « Es-tu venu hier ? »\n→ Il m'a demandé **si** j'**étais venu** **la veille**.\n\nLa question totale devient une interrogative indirecte en **si** ; « tu » devient « je » (c'est à moi qu'on parle) ; le passé composé devient plus-que-parfait ; « hier » devient « la veille ». Plus de point d'interrogation ni d'inversion." },
            { t: "attention", md: "Ne transpose pas mécaniquement les pronoms : demande-toi **qui parle à qui**. Elle m'a dit : « Je t'appellerai demain d'ici. » → Elle m'a dit qu'**elle m'**appellerait le lendemain de là. Le « t' » qui me désignait devient « m' »." },
          ],
        },
        {
          titre: "La situation d'énonciation : discours ou récit ?",
          blocs: [
            { t: "definition", terme: "Situation d'énonciation", md: "Les circonstances dans lesquelles un énoncé est produit : **qui** parle (l'énonciateur), **à qui** (le destinataire), **où** et **quand**." },
            { t: "schema", titre: "Qui parle, à qui, où, quand ?", legende: "Un énoncé ancré ne se comprend qu'en connaissant sa situation : « aujourd'hui » n'a de sens que si l'on sait quand la lettre a été écrite.", svg: `<svg viewBox="0 0 400 225"><rect class="pointille" x="10" y="10" width="380" height="168" rx="10" fill="none"/><text class="texte-petit" x="200" y="28" text-anchor="middle">situation d'énonciation</text><circle class="aplat" cx="70" cy="76" r="16"/><circle class="trait" cx="70" cy="76" r="16" fill="none"/><path class="trait" fill="none" d="M44 134 Q70 92 96 134"/><circle class="aplat-papier" cx="330" cy="76" r="16"/><circle class="trait" cx="330" cy="76" r="16" fill="none"/><path class="trait" fill="none" d="M304 134 Q330 92 356 134"/><line class="trait" x1="102" y1="88" x2="296" y2="88" marker-end="url(#fl-p)"/><text class="texte-main" x="200" y="76" text-anchor="middle">« Je t'écris aujourd'hui »</text><text class="texte-petit" x="200" y="104" text-anchor="middle">l'énoncé</text><text class="texte" x="200" y="140" text-anchor="middle">ici, maintenant</text><text class="texte-petit" x="200" y="157" text-anchor="middle">où ? quand ?</text><text class="texte-pigment" x="70" y="154" text-anchor="middle">je</text><text class="texte-petit" x="70" y="169" text-anchor="middle">qui parle ?</text><text class="texte-pigment" x="330" y="154" text-anchor="middle">tu</text><text class="texte-petit" x="330" y="169" text-anchor="middle">à qui ?</text><text class="texte-petit" x="200" y="198" text-anchor="middle">ancré dans la situation : je, tu, ici, maintenant</text><text class="texte-petit" x="200" y="214" text-anchor="middle">coupé de la situation (récit) : il, ce jour-là, passé simple</text></svg>` },
            { t: "propriete", titre: "Discours et récit", md: "Le **discours** est **ancré** dans la situation d'énonciation : pronoms de 1re et 2e personnes, indices comme *ici*, *maintenant*, *hier*, et le **présent** comme temps de base (avec le passé composé et le futur).\n\nLe **récit** est **coupé** de la situation : 3e personne, indices comme *ce jour-là*, *la veille*, et le **passé simple** avec l'imparfait." },
            { t: "exemple", titre: "« Je t'écris aujourd'hui de Marseille pour te dire que tu me manques. »", md: "L'énoncé est **ancré** : « je » et « tu » désignent l'auteur et le destinataire de la lettre, « aujourd'hui » renvoie au jour de l'écriture, le présent est celui de l'énonciation." },
          ],
        },
        {
          titre: "Modalisation, explicite et implicite",
          blocs: [
            { t: "definition", terme: "Modalisation", md: "Ensemble des marques par lesquelles celui qui parle montre son **jugement** ou son **degré de certitude** : adverbes (*peut-être*, *certainement*, *hélas*), verbes (*sembler*, *devoir*, *pouvoir*), **conditionnel**, vocabulaire **mélioratif** ou **péjoratif**. « Il semblerait que le suspect ait quitté la ville » : verbe et conditionnel signalent le doute." },
            { t: "definition", terme: "Implicite", md: "Ce qu'un énoncé **suggère sans le dire** clairement, par opposition à l'**explicite**. Le **présupposé** est contenu dans la phrase elle-même : « Il a arrêté de fumer » suppose qu'il fumait. Le **sous-entendu** dépend de la situation : « Il fait froid ici » peut signifier « ferme la fenêtre »." },
            { t: "exemple", titre: "De petits mots qui en disent long", etapes: ["« Paul a **enfin** rendu le livre » : il a mis longtemps, on l'attendait avec impatience.", "« **Même** Lucas a réussi l'examen » : on ne s'attendait pas à ce que Lucas réussisse ; l'examen devait donc être facile, ou Lucas passe pour faible.", "« **Encore** en retard ! » : ce n'est pas la première fois."] },
          ],
        },
        {
          titre: "Qui voit ? Les points de vue narratifs",
          blocs: [
            { t: "schema", titre: "Trois focalisations", legende: "Interne : on voit par les yeux d'un personnage. Externe : on ne voit que l'extérieur. Omnisciente : le narrateur sait tout de tous.", svg: `<svg viewBox="0 0 400 195"><rect class="trait-fin" x="10" y="10" width="120" height="120" rx="6" fill="none"/><rect class="trait-fin" x="140" y="10" width="120" height="120" rx="6" fill="none"/><rect class="trait-fin" x="270" y="10" width="120" height="120" rx="6" fill="none"/><text class="texte-petit" x="70" y="34" text-anchor="middle">on voit avec A</text><text class="texte-petit" x="70" y="50" text-anchor="middle">pensées de A</text><circle class="aplat" cx="40" cy="95" r="15"/><circle class="trait" cx="40" cy="95" r="15" fill="none"/><g transform="translate(40 95)"><path class="trait-fin" fill="none" d="M-10 0 Q0 -8 10 0 Q0 8 -10 0 Z"/><circle r="3" fill="var(--encre)"/></g><line class="trait-fin" x1="58" y1="95" x2="82" y2="95" marker-end="url(#fl-p)"/><circle class="aplat-papier" cx="100" cy="95" r="13"/><circle class="trait-fin" cx="100" cy="95" r="13" fill="none"/><text class="texte-petit" x="100" y="99" text-anchor="middle">B</text><rect class="trait" x="150" y="24" width="26" height="18" rx="2" fill="none"/><path class="trait" fill="none" d="M176 33 L188 25 L188 41 Z"/><text class="texte-petit" x="232" y="38" text-anchor="middle">caméra</text><line class="pointille" x1="186" y1="42" x2="173" y2="81"/><line class="pointille" x1="188" y1="40" x2="225" y2="83"/><circle class="aplat-papier" cx="170" cy="95" r="13"/><circle class="trait-fin" cx="170" cy="95" r="13" fill="none"/><text class="texte-petit" x="170" y="99" text-anchor="middle">?</text><circle class="aplat-papier" cx="230" cy="95" r="13"/><circle class="trait-fin" cx="230" cy="95" r="13" fill="none"/><text class="texte-petit" x="230" y="99" text-anchor="middle">?</text><g transform="translate(330 30)"><path class="trait" fill="none" d="M-12 0 Q0 -9 12 0 Q0 9 -12 0 Z"/><circle r="3.5" fill="var(--encre)"/></g><line class="trait-fin" x1="322" y1="40" x2="305" y2="79" marker-end="url(#fl-p)"/><line class="trait-fin" x1="338" y1="40" x2="355" y2="79" marker-end="url(#fl-p)"/><circle class="aplat" cx="300" cy="95" r="13"/><circle class="trait-fin" cx="300" cy="95" r="13" fill="none"/><circle class="aplat" cx="360" cy="95" r="13"/><circle class="trait-fin" cx="360" cy="95" r="13" fill="none"/><text class="texte-petit" x="300" y="99" text-anchor="middle">A</text><text class="texte-petit" x="360" y="99" text-anchor="middle">B</text><text class="texte-pigment" x="70" y="152" text-anchor="middle">interne</text><text class="texte-pigment" x="200" y="152" text-anchor="middle">externe</text><text class="texte-pigment" x="330" y="152" text-anchor="middle">omnisciente</text><text class="texte-petit" x="70" y="168" text-anchor="middle">par les yeux</text><text class="texte-petit" x="70" y="182" text-anchor="middle">d'un personnage</text><text class="texte-petit" x="200" y="168" text-anchor="middle">comme une caméra</text><text class="texte-petit" x="200" y="182" text-anchor="middle">pensées cachées</text><text class="texte-petit" x="330" y="168" text-anchor="middle">le narrateur</text><text class="texte-petit" x="330" y="182" text-anchor="middle">sait tout de tous</text></svg>` },
            { t: "exemple", titre: "« L'homme entra, commanda un café et regarda sa montre à plusieurs reprises. On ne pouvait rien deviner de ses intentions. »", md: "Le narrateur ne rapporte que des **gestes visibles** et avoue ignorer les pensées de l'homme : c'est un point de vue **externe**. Le lecteur, intrigué, doit interpréter lui-même." },
            { t: "verifie", q: "Un narrateur omniscient connaît-il les pensées de tous les personnages ?", choix: ["Oui, il sait tout, y compris le passé et l'avenir des personnages", "Non, il ne connaît que celles du héros"], bonne: 0, explication: "« Omniscient » signifie « qui sait tout ». Ne connaître que les pensées d'un seul personnage, c'est le point de vue interne." },
          ],
        },
      ],
      bilan: "Pour rapporter des paroles, transpose pronoms, temps et repères ; pour lire un texte, demande-toi toujours qui parle, à qui, quand, et qui voit.",
    },
    "3e-francais-09-orthographe-dictee": {
      accroche: "« Les lettres que j'ai écrit » ou « écrites » ? « Elles se sont téléphonées » ou « téléphoné » ? À la dictée du brevet, les points se perdent souvent sur les mêmes pièges. Bonne nouvelle : chaque piège obéit à une règle, et chaque règle s'apprend.",
      objectifs: [
        "Accorder le participe passé avec être, avec avoir, des verbes pronominaux et suivi d'un infinitif",
        "Distinguer les homophones grammaticaux avancés",
        "Maîtriser les pluriels particuliers, les adverbes en -ment et les majuscules",
        "Relire une dictée avec méthode et connaître les mots souvent fautés",
      ],
      sections: [
        {
          titre: "Le participe passé avec être et avec avoir",
          blocs: [
            { t: "propriete", titre: "Les deux règles de base", md: "• Avec **être**, le participe passé s'accorde avec le **sujet** : « Les filles sont **arrivées**. »\n• Avec **avoir**, il s'accorde avec le **COD seulement s'il est placé avant** le verbe : « Les lettres **que** j'ai **écrites** » (« que » reprend « lettres », placé avant). Si le COD est après, ou s'il n'y en a pas, pas d'accord : « J'ai **écrit** des lettres. »" },
            { t: "tableau", titre: "Accorder le participe passé : tous les cas", entetes: ["Cas", "Règle", "Exemple"], lignes: [["avec **être**", "accord avec le sujet", "Elles sont **parties**."], ["avec **avoir**, COD avant", "accord avec le COD", "Ces fleurs, il les a **cueillies**."], ["avec **avoir**, COD après ou absent", "invariable", "Il a **cueilli** des fleurs."], ["avec **en**", "jamais d'accord", "Des pommes, j'en ai **mangé**."], ["**pronominal**, COD = le pronom", "accord avec le sujet", "Elle s'est **lavée**."], ["**pronominal**, COD après", "invariable", "Elle s'est **lavé** les mains."], ["**pronominal**, pronom COI", "invariable", "Elles se sont **parlé**."], ["suivi d'un **infinitif**", "accord si le COD fait l'action", "Les enfants que j'ai **vus** jouer."], ["**fait** + infinitif", "toujours invariable", "Elle s'est **fait** couper les cheveux."]] },
            { t: "exemple", titre: "« Les fleurs qu'elle a cueillies, elle les a offertes à sa mère, qui s'est mise à pleurer. »", etapes: ["« cueillies » : avoir, COD « qu' » (= les fleurs) placé avant → féminin pluriel.", "« offertes » : avoir, COD « les » (= les fleurs) placé avant → féminin pluriel.", "« mise » : pronominal, le COD est « s' » (= la mère) → féminin singulier."] },
          ],
        },
        {
          titre: "Pronominaux et participe suivi d'un infinitif",
          blocs: [
            { t: "propriete", titre: "Le participe des verbes pronominaux", md: "Remplace l'auxiliaire être par **avoir** et cherche le **COD** :\n• le COD est le **pronom réfléchi** (se, me, te…) → accord ;\n• le COD est **placé après** → pas d'accord ;\n• le pronom est **COI** (parler **à** quelqu'un, téléphoner **à**, se succéder, se plaire, se promettre…) → invariable.\nLes verbes **toujours pronominaux** (s'enfuir, s'évanouir, se souvenir) s'accordent avec le sujet : « Ils se sont **enfuis**. »" },
            { t: "exemple", titre: "Raisonner pas à pas", etapes: ["« Elle s'est lavé les cheveux » : elle a lavé quoi ? les cheveux, placé après → **lavé**.", "« Puis elle s'est coiffée » : elle a coiffé qui ? se (elle-même), placé avant → **coiffée**.", "« Elles se sont téléphoné » : on téléphone **à** quelqu'un, « se » est COI → **téléphoné**.", "« Elles se sont promis de se revoir » : promettre **à** soi, et le COD (« de se revoir ») est après → **promis**."] },
            { t: "attention", md: "Participe suivi d'un infinitif : demande-toi **qui fait l'action** de l'infinitif. « Les enfants que j'ai **vus** jouer » : ce sont les enfants qui jouent → accord. « La chanson que j'ai **entendu** chanter » : la chanson ne chante pas, quelqu'un la chante → invariable." },
            { t: "verifie", q: "« Elles se sont ___ hier soir. » (téléphoner)", choix: ["téléphonées", "téléphoné", "téléphonés"], bonne: 1, explication: "On téléphone à quelqu'un : « se » est COI. Sans COD placé avant, le participe reste invariable : elles se sont téléphoné." },
          ],
        },
        {
          titre: "Les homophones avancés",
          blocs: [
            { t: "tableau", titre: "Ne plus confondre", entetes: ["Homophones", "Sens et test", "Exemple"], lignes: [["**quoique** / **quoi que**", "« bien que » / « quelle que soit la chose que »", "**Quoiqu'**il pleuve, je sors. **Quoi que** tu dises, je reste."], ["**quel que** / **quelque**", "« quel que » + être, accordé au sujet / « quelque » + nom", "**Quelles que** soient les difficultés… **Quelques** amis."], ["**plutôt** / **plus tôt**", "« de préférence » / contraire de « plus tard »", "Prends **plutôt** le bus. Viens **plus tôt**."], ["**près de** / **prêt à**", "« sur le point de » / « préparé pour »", "Il est **près de** partir. Le train est **prêt à** partir."], ["**quand** / **quant à** / **qu'en**", "temps / « en ce qui concerne » / que + en", "Je viendrai **quand** j'aurai fini ; **quant aux** autres…"], ["**davantage** / **d'avantages**", "« plus » / des avantages", "Travaille **davantage**."], ["**censé** / **sensé**", "« supposé » / « raisonnable »", "Il est **censé** venir ; une idée **sensée**."], ["**leur** / **leurs**", "pronom devant un verbe (invariable) / déterminant", "Ils **leur** ont donné **leurs** cadeaux."]] },
            { t: "astuce", md: "Le test du remplacement règle presque tout : si tu peux dire « bien que », écris **quoique** ; si tu peux dire « en ce qui concerne », écris **quant à** ; si tu peux mettre « lui » à la place, « leur » est un pronom et ne prend **jamais** de s." },
            { t: "verifie", q: "« Le train est ___ partir à huit heures. » (il est préparé pour)", choix: ["près à", "prêt à", "près de", "prêt de"], bonne: 1, explication: "Le train est préparé pour partir : « prêt à ». « Près de » signifierait « sur le point de ». « Prêt de » et « près à » n'existent pas dans ce sens." },
          ],
        },
        {
          titre: "Pluriels, adverbes et majuscules",
          blocs: [
            { t: "liste", titre: "Les pluriels particuliers", items: ["**-ou → -oux** pour sept noms : bijou, caillou, chou, genou, hibou, joujou, pou. Les autres : des clous, des trous.", "**-al → -aux** en général (des chevaux), mais **-als** pour : bals, carnavals, chacals, festivals, régals.", "**-ail → -aux** pour quelques noms : travaux, coraux, émaux, vitraux ; sinon -ails (des détails).", "**-eu → -eux** (des jeux), sauf : pneus, bleus. **-au → -aux**, sauf : landaus."] },
            { t: "propriete", titre: "Les adverbes en -ment", md: "• Adjectif en **-ant** → adverbe en **-amment** : courant → couramment, puissant → puissamment.\n• Adjectif en **-ent** → adverbe en **-emment** (prononcé « a ») : prudent → prudemment, évident → **évidemment**.\n• Les autres se forment sur le féminin : doux → doucement. À retenir : gentiment, brièvement, précisément, énormément." },
            { t: "texte", md: "**Majuscule** aux noms de **peuples** : les Français, les Italiens. Mais **pas** de majuscule aux **adjectifs** (la cuisine française), aux **noms de langues** (parler italien), ni aux **jours** et aux **mois** (lundi 3 mars). Dans « les Italiens parlent italien et aiment la cuisine française », seul « Italiens » prend une majuscule." },
          ],
        },
        {
          titre: "La dictée du DNB : relire avec méthode",
          blocs: [
            { t: "etapes", titre: "Relire sa dictée en cinq passages", items: [{ titre: "Le sens", md: "Relis une première fois tout le texte pour vérifier qu'il a du **sens** : une phrase mal comprise entraîne des fautes en chaîne." }, { titre: "Sujet-verbe", md: "Pour chaque verbe, cherche son **sujet** (même éloigné ou inversé) et vérifie la terminaison." }, { titre: "Groupes nominaux", md: "Vérifie que déterminants, noms et adjectifs s'accordent **en genre et en nombre**." }, { titre: "Participes passés", md: "Être ? Avoir ? Pronominal ? Applique la règle à **chaque** participe." }, { titre: "Homophones et mots difficiles", md: "a/à, et/est, ces/ses, leur/leurs, quand/quant… puis les mots d'usage." }] },
            { t: "liste", titre: "Les mots souvent fautés", items: ["parmi (sans s), malgré, dilemme (un seul n)", "accueil (c-c-u-e-i-l), cauchemar (sans d), langage (sans u)", "développer, apercevoir (un seul p), événement"] },
            { t: "savais-tu", md: "La dictée du brevet dure **20 minutes** et vaut **10 points**. Le texte est lu trois fois : une fois en entier, une fois lentement pour écrire, une dernière fois pour relire. Garde quelques minutes pour tes cinq passages !" },
          ],
        },
      ],
      bilan: "Être : accord avec le sujet ; avoir : accord avec le COD placé avant ; pronominal : cherche le COD. Et relis en cinq passages, un type d'erreur à la fois.",
    },
    "3e-francais-10-lexique-figures": {
      accroche: "Cyrano décrit son propre nez : « C'est un roc ! c'est un pic ! c'est un cap ! » Pourquoi cette phrase fait-elle rire depuis plus d'un siècle ? Parce qu'une figure de style la porte. Les figures ne sont pas des ornements : elles produisent des effets.",
      objectifs: [
        "Identifier les principales figures de style et analyser leur effet",
        "Reconnaître les registres d'un texte",
        "Maîtriser le lexique de l'argumentation, du jugement et des connotations",
        "Utiliser l'étymologie et comprendre la formation des mots nouveaux",
      ],
      sections: [
        {
          titre: "Rapprocher et opposer",
          blocs: [
            { t: "tableau", titre: "Figures d'analogie et d'opposition", entetes: ["Figure", "Définition", "Exemple"], lignes: [["**Comparaison**", "Rapproche deux éléments avec un **outil** (comme, tel, pareil à)", "Le ciel est noir comme de l'encre."], ["**Métaphore**", "Rapprochement **sans outil**", "Mon beau navire ô ma mémoire (Apollinaire)"], ["**Métaphore filée**", "Métaphore **prolongée** sur plusieurs vers ou phrases", "La jeunesse-orage de Baudelaire (ci-dessous)"], ["**Personnification**", "Donne des traits humains à une chose ou un animal", "La rue assourdissante autour de moi hurlait (Baudelaire)"], ["**Allégorie**", "Représente une **idée abstraite** par une image concrète", "La Mort et sa faux ; la Justice et sa balance ; Marianne"], ["**Antithèse**", "Oppose deux idées dans une même phrase", "Ver de terre amoureux d'une étoile (Hugo)"], ["**Oxymore**", "Accole deux **mots contraires**", "Cette obscure clarté qui tombe des étoiles (Corneille)"], ["**Chiasme**", "Structure **en miroir** A B B A", "Il faut manger pour vivre, et non pas vivre pour manger (Molière)"], ["**Paradoxe**", "Affirmation contraire à l'opinion commune", "Les premiers seront les derniers."]] },
            { t: "citation", texte: "Ma jeunesse ne fut qu'un ténébreux orage,\nTraversé çà et là par de brillants soleils ;\nLe tonnerre et la pluie ont fait un tel ravage,\nQu'il reste en mon jardin bien peu de fruits vermeils.", auteur: "Charles Baudelaire", source: "« L'Ennemi », Les Fleurs du mal (1857)" },
            { t: "texte", md: "La jeunesse devient un **orage**, puis un **jardin** dévasté : l'image se prolonge sur toute la strophe avec orage, soleils, tonnerre, pluie, fruits. C'est une **métaphore filée**. Son effet : rendre visible et sensible une souffrance intérieure." },
          ],
        },
        {
          titre: "Atténuer, amplifier, ironiser",
          blocs: [
            { t: "tableau", titre: "Dire moins, dire plus, dire le contraire", entetes: ["Figure", "Définition", "Exemple"], lignes: [["**Euphémisme**", "**Adoucit** une réalité pénible", "Il nous a quittés (= il est mort)."], ["**Litote**", "Dit **moins** pour suggérer **plus**", "Va, je ne te hais point (Corneille) = je t'aime."], ["**Hyperbole**", "**Exagère**", "Je meurs de faim."], ["**Gradation**", "Progression d'intensité", "Va, cours, vole, et nous venge (Corneille)"], ["**Accumulation**", "Énumération abondante", "Les trompettes, les fifres, les hautbois, les tambours… (Voltaire)"], ["**Anaphore**", "Répétition d'un mot en début de vers ou de phrase", "Waterloo ! Waterloo ! Waterloo !"], ["**Antiphrase**", "Dit le **contraire** de ce que l'on pense (ironie)", "Quelle belle réussite ! (devant un échec)"]] },
            { t: "citation", texte: "C'est un roc ! c'est un pic ! c'est un cap !\nQue dis-je, c'est un cap ?… C'est une péninsule !", auteur: "Edmond Rostand", source: "Cyrano de Bergerac (1897), acte I" },
            { t: "exemple", titre: "Analyser une figure : nommer, puis interpréter", etapes: ["**Je repère** : roc, pic, cap, péninsule.", "**Je nomme** : les termes vont du plus petit au plus grand, c'est une **gradation**.", "**J'interprète** : l'amplification exagère comiquement la taille du nez ; Cyrano se moque de lui-même avant que les autres ne le fassent."] },
            { t: "verifie", q: "« Il nous a quittés » pour dire « il est mort ». Quelle figure ?", choix: ["Une litote", "Un euphémisme", "Une hyperbole", "Une antiphrase"], bonne: 1, explication: "L'expression adoucit une réalité douloureuse : c'est un euphémisme. La litote, elle, dit moins pour faire entendre plus (« ce n'est pas mal » = c'est très bien)." },
          ],
        },
        {
          titre: "Les registres : la couleur d'un texte",
          blocs: [
            { t: "tableau", titre: "Les principaux registres", entetes: ["Registre", "Effet recherché", "Indices"], lignes: [["**Comique**", "Faire rire", "exagération, quiproquo, jeux de mots"], ["**Satirique**", "Critiquer en se moquant", "caricature, ironie"], ["**Polémique**", "Attaquer, combattre une idée", "ton vif, interpellations, vocabulaire péjoratif"], ["**Tragique**", "Montrer un être écrasé par le destin", "fatalité, mort inévitable"], ["**Pathétique**", "Émouvoir, faire pitié", "souffrance, exclamations, larmes"], ["**Lyrique**", "Exprimer des sentiments personnels", "« je », émotions, musicalité"], ["**Épique**", "Célébrer des exploits grandioses", "hyperboles, combats, héros"], ["**Fantastique**", "Faire hésiter entre réel et surnaturel", "peur, doute, phénomènes étranges"], ["**Didactique**", "Enseigner, expliquer", "définitions, exemples, présent de vérité générale"]] },
            { t: "citation", texte: "Waterloo ! Waterloo ! Waterloo ! morne plaine !", auteur: "Victor Hugo", source: "« L'Expiation », Les Châtiments (1853)" },
            { t: "verifie", q: "Un texte qui raconte les exploits d'un héros avec des hyperboles et le vocabulaire du combat relève du registre…", choix: ["lyrique", "épique", "pathétique", "didactique"], bonne: 1, explication: "Exploits, combats, exagération qui grandit le héros : ce sont les marques du registre épique, celui de l'épopée." },
          ],
        },
        {
          titre: "Le lexique du jugement et de l'argumentation",
          blocs: [
            { t: "definition", terme: "Dénotation et connotation", md: "La **dénotation** est le sens objectif d'un mot, celui du dictionnaire. La **connotation** regroupe les idées et les émotions qu'il évoque en plus. « Maison », « demeure » et « bicoque » dénotent la même chose ; mais « demeure » est **mélioratif** (valorisant) et « bicoque » **péjoratif** (dévalorisant)." },
            { t: "propriete", titre: "Convaincre ou persuader ?", md: "**Convaincre**, c'est agir sur la **raison** par des arguments logiques. **Persuader**, c'est agir sur les **sentiments** : émouvoir, faire peur, faire rire. Un orateur qui fait pleurer son public pour le rallier cherche à persuader.\n\nAutres mots clés : **réfuter** (démontrer qu'une idée est fausse), **concéder** (admettre en partie l'idée adverse), **nuancer** (préciser, limiter une affirmation)." },
          ],
        },
        {
          titre: "D'où viennent les mots ?",
          blocs: [
            { t: "tableau", titre: "Quelques racines utiles", entetes: ["Racine", "Origine", "Sens", "Mots formés"], lignes: [["bio", "grec", "vie", "biologie, biographie"], ["graph", "grec", "écrire", "autographe, orthographe"], ["logos", "grec", "discours, science", "dialogue, zoologie"], ["chrono", "grec", "temps", "chronologie"], ["phil / phob", "grec", "aimer / craindre", "philosophe / claustrophobe"], ["dêmos / cratos", "grec", "peuple / pouvoir", "démocratie"], ["aqua", "latin", "eau", "aquarium"], ["bene / omni / vid", "latin", "bien / tout / voir", "bienfait, omniscient, vidéo"]] },
            { t: "texte", md: "La langue invente sans cesse des **néologismes** : par **mot-valise** (courriel = courrier + électronique), par **dérivation** (préfixe, suffixe : *déconfiner*), par **emprunt** à une langue étrangère, par **sigle** ou **acronyme** (ovni, laser)." },
            { t: "attention", md: "Les **paronymes** se ressemblent sans avoir le même sens : un savant **éminent** (remarquable) / un danger **imminent** (sur le point d'arriver) ; une **conjecture** (une supposition) / la **conjoncture** (la situation du moment)." },
            { t: "verifie", q: "« Le danger est ___. » (sur le point d'arriver) Quel paronyme convient ?", choix: ["éminent", "imminent"], bonne: 1, explication: "« Imminent » signifie « tout proche dans le temps ». « Éminent » qualifie une personne remarquable : un éminent chercheur." },
          ],
        },
      ],
      bilan: "Nommer la figure ne suffit pas : dis toujours son effet. Une gradation amplifie, un euphémisme adoucit, une antiphrase critique.",
    },
    "3e-francais-11-lire-comprendre-dnb": {
      accroche: "Un texte inconnu, une image, une série de questions, et seulement une heure dix. Au brevet, la réussite ne dépend pas de la chance : elle dépend d'une méthode, que tu peux apprendre dès aujourd'hui.",
      objectifs: [
        "Connaître le déroulement de l'épreuve écrite de français du DNB",
        "Identifier le genre, le registre et la visée d'un texte",
        "Répondre à une question en justifiant par une citation commentée",
        "Analyser une image et maîtriser le vocabulaire de l'analyse littéraire",
      ],
      sections: [
        {
          titre: "L'épreuve écrite de français",
          blocs: [
            { t: "tableau", titre: "Trois heures, trois temps", entetes: ["Partie", "Durée", "Points"], lignes: [["Compréhension, interprétation et grammaire (dont la réécriture) sur un texte et une image", "1 h 10", "50"], ["Dictée", "20 min", "10"], ["Rédaction : sujet d'imagination **ou** de réflexion", "1 h 30", "40"]] },
            { t: "graphique", type: "secteurs", titre: "Répartition des 100 points", unite: "points", donnees: [{ label: "Compréhension et grammaire", valeur: 50 }, { label: "Dictée", valeur: 10 }, { label: "Rédaction", valeur: 40 }] },
            { t: "astuce", md: "Avant même de lire le texte, exploite le **paratexte** : titre, auteur, date, chapeau introductif, notes de bas de page. Il t'indique le **genre**, le **contexte** et souvent le **thème**. Trente secondes bien employées font gagner dix minutes." },
          ],
        },
        {
          titre: "Identifier un texte : genre, registre, visée",
          blocs: [
            { t: "texte", md: "Trois questions permettent de situer n'importe quel texte :\n\n• **Quel genre ?** Roman, nouvelle, poème, théâtre, autobiographie, fable, essai.\n• **Quel registre ?** Comique, pathétique, lyrique, épique, satirique… (voir le chapitre sur les figures).\n• **Quelle visée ?** Raconter, décrire, émouvoir, convaincre ou persuader, dénoncer, témoigner, faire rire." },
            { t: "liste", titre: "Les indices qui ne trompent pas", items: ["**Théâtre** : noms des personnages devant les répliques, **didascalies** en italique.", "**Poésie** : vers, strophes, majuscules en début de vers, rimes ou rythme.", "**Autobiographie** : « je » rétrospectif, alternance passé / présent d'énonciation.", "**Texte argumentatif** : thèse, arguments, connecteurs logiques."] },
            { t: "verifie", q: "Un texte qui expose une thèse et des arguments pour faire changer d'avis le lecteur a pour visée de…", choix: ["raconter", "décrire", "convaincre", "divertir"], bonne: 2, explication: "Thèse + arguments logiques = convaincre, c'est-à-dire agir sur la raison du lecteur." },
          ],
        },
        {
          titre: "Répondre à une question en justifiant",
          blocs: [
            { t: "definition", terme: "Compréhension et interprétation", md: "Une question de **compréhension** porte sur l'**explicite** : ce que dit le texte (« Que fait le narrateur à la ligne 3 ? »). Une question d'**interprétation** porte sur l'**implicite** : ce que suggère le texte, l'effet d'un procédé (« Pourquoi l'auteur choisit-il le présent ? »). Dans les deux cas, on répond par des **phrases rédigées**." },
            { t: "etapes", titre: "Répondre à une question sur le texte", items: [{ titre: "Lire la question", md: "Repère ses **mots-clés** et ce qu'elle demande (relever, expliquer, justifier)." }, { titre: "Relire le passage", md: "Retourne aux lignes concernées avant d'écrire quoi que ce soit." }, { titre: "Affirmer", md: "Rédige une phrase de réponse qui **reprend les termes** de la question." }, { titre: "Citer", md: "Recopie **exactement** un passage, **entre guillemets**, avec le **numéro de ligne**." }, { titre: "Expliquer", md: "Montre ce que la citation prouve : nomme le procédé et son effet." }] },
            { t: "exemple", titre: "« Quel sentiment éprouve le narrateur ? Justifiez. »", md: "« Le narrateur éprouve de la **peur**, comme le montre le champ lexical de l'effroi : « tremblant » (l. 4), « glacé » (l. 6). Les phrases courtes traduisent son affolement. »\n\nOn trouve bien les trois temps : **réponse**, **citation** avec ligne, **analyse** du procédé." },
            { t: "attention", md: "Une citation sans commentaire ne vaut rien : le correcteur veut savoir **ce que tu en comprends**. À l'inverse, une affirmation sans citation n'est pas justifiée. Les deux vont ensemble." },
          ],
        },
        {
          titre: "Analyser une image",
          blocs: [
            { t: "liste", titre: "Les étapes de l'analyse", ordonnee: true, items: ["**Identifier** : nature (photographie, peinture, affiche, caricature, planche de BD), auteur, date.", "**Décrire la composition** : plans (premier plan, arrière-plan), lignes de force, cadrage (gros plan, plan d'ensemble).", "**Observer l'angle de vue**, les couleurs et la lumière.", "**Relier au texte** : l'image illustre-t-elle, complète-t-elle ou contredit-elle le texte ?"] },
            { t: "schema", titre: "Plongée et contre-plongée", legende: "L'angle de vue n'est jamais neutre : il oriente le regard que l'on porte sur le sujet.", svg: `<svg viewBox="0 0 400 215"><line class="trait-fin" x1="20" y1="160" x2="180" y2="160"/><line class="trait-fin" x1="220" y1="160" x2="380" y2="160"/><g transform="translate(40 32)"><path class="trait" fill="none" d="M-13 0 Q0 -9 13 0 Q0 9 -13 0 Z"/><circle r="3.5" fill="var(--encre)"/></g><line class="pointille" x1="52" y1="40" x2="104" y2="114"/><circle class="aplat" cx="110" cy="122" r="7"/><circle class="trait-fin" cx="110" cy="122" r="7" fill="none"/><line class="trait" x1="110" y1="129" x2="110" y2="146"/><line class="trait" x1="110" y1="146" x2="103" y2="160"/><line class="trait" x1="110" y1="146" x2="117" y2="160"/><line class="trait" x1="102" y1="136" x2="118" y2="136"/><g transform="translate(365 148)"><path class="trait" fill="none" d="M-13 0 Q0 -9 13 0 Q0 9 -13 0 Z"/><circle r="3.5" fill="var(--encre)"/></g><line class="pointille" x1="355" y1="140" x2="306" y2="66"/><circle class="aplat" cx="300" cy="56" r="11"/><circle class="trait-fin" cx="300" cy="56" r="11" fill="none"/><line class="trait" x1="300" y1="67" x2="300" y2="120"/><line class="trait" x1="300" y1="120" x2="286" y2="160"/><line class="trait" x1="300" y1="120" x2="314" y2="160"/><line class="trait" x1="280" y1="86" x2="320" y2="86"/><text class="texte-pigment" x="100" y="184" text-anchor="middle">plongée</text><text class="texte-petit" x="100" y="200" text-anchor="middle">vu d'en haut : sujet écrasé</text><text class="texte-pigment" x="300" y="184" text-anchor="middle">contre-plongée</text><text class="texte-petit" x="300" y="200" text-anchor="middle">vu d'en bas : sujet grandi</text></svg>` },
            { t: "exemple", titre: "Relier un texte et une image", md: "Un extrait de Zola décrit le travail des enfants à la mine ; l'image jointe est une **photographie de 1908** montrant un enfant devant une machine. L'image **confirme** que la réalité décrite par le roman a existé : elle donne au texte la force d'un **témoignage** documentaire." },
            { t: "verifie", q: "Une photographie prise d'en haut, qui semble écraser le sujet, est…", choix: ["une plongée", "une contre-plongée", "un gros plan"], bonne: 0, explication: "En plongée, l'appareil domine le sujet, qui paraît petit, faible ou isolé. La contre-plongée, prise d'en bas, le grandit." },
          ],
        },
        {
          titre: "Le vocabulaire de l'analyse littéraire",
          blocs: [
            { t: "tableau", titre: "Les mots pour analyser", entetes: ["Terme", "Définition"], lignes: [["**Incipit**", "Les premières lignes d'un roman"], ["**Chute**", "Fin surprenante d'une nouvelle"], ["**Didascalie**", "Indication scénique, en italique, jamais prononcée"], ["**Réplique / tirade**", "Parole d'un personnage dans un dialogue / longue réplique"], ["**Monologue / aparté**", "Personnage seul en scène / parole dite à part, entendue du seul public"], ["**Strophe : quatrain, tercet**", "Groupe de vers : de quatre vers, de trois vers"], ["**Alexandrin**", "Vers de douze syllabes"], ["**Enjambement**", "La phrase déborde d'un vers sur le suivant sans pause"], ["**Champ lexical**", "Ensemble des mots d'un texte qui se rapportent à un même thème"], ["**Focalisation**", "Point de vue adopté par le narrateur"]] },
            { t: "citation", texte: "Je fais souvent ce rêve étrange et pénétrant\nD'une femme inconnue, et que j'aime, et qui m'aime", auteur: "Paul Verlaine", source: "« Mon rêve familier », Poèmes saturniens (1866)" },
            { t: "texte", md: "La phrase ne s'arrête pas à la fin du premier vers : elle se poursuit sans pause au vers suivant. C'est un **enjambement**. Il mime ici le glissement du rêve, qui ne connaît pas de frontière." },
          ],
        },
      ],
      bilan: "Paratexte, genre, visée ; réponse, citation, explication : avec ces deux réflexes, tu peux aborder n'importe quel texte du brevet.",
    },
    "3e-francais-12-ecrire-dnb": {
      accroche: "Deux sujets au choix, une heure et demie, quarante points : la rédaction est l'exercice le plus lourd du brevet. Ce n'est pas un don, c'est un savoir-faire qui se construit, au brouillon d'abord.",
      objectifs: [
        "Rédiger un sujet d'imagination cohérent avec le texte de départ",
        "Construire un sujet de réflexion : thèse, arguments, exemples, plan",
        "Rédiger un paragraphe argumenté avec des connecteurs logiques",
        "Préparer la soutenance orale du DNB",
      ],
      sections: [
        {
          titre: "Choisir son sujet",
          blocs: [
            { t: "texte", md: "Au DNB, tu choisis entre un **sujet d'imagination** et un **sujet de réflexion**, tous deux liés au texte étudié le matin. La rédaction vaut **40 points** : on attend un texte d'**au moins 300 mots environ** (deux pages), lisible, organisé et relu." },
            { t: "tableau", titre: "Imagination ou réflexion ?", entetes: ["Critère", "Sujet d'imagination", "Sujet de réflexion"], lignes: [["Forme", "Suite de texte, récit, lettre, dialogue, monologue", "Réponse argumentée à une question"], ["On attend", "Cohérence avec le texte, invention, émotion", "Une thèse, des arguments, des exemples précis"], ["Piège principal", "Contredire le texte de départ", "Réciter des exemples sans argumenter"], ["Choisis-le si…", "tu aimes raconter et tu as bien compris le texte", "tu as des idées et des exemples sur le thème"]] },
          ],
        },
        {
          titre: "Le sujet d'imagination",
          blocs: [
            { t: "propriete", titre: "Les contraintes à respecter", md: "Une suite de texte doit garder : le **point de vue** et la **personne** du narrateur, les **temps** du texte (passé simple et imparfait, ou présent), le **niveau de langue**, le **caractère des personnages** et le **cadre** (lieu, époque). Ne contredis jamais le texte de départ." },
            { t: "definition", terme: "Monologue intérieur", md: "Texte écrit à la **première personne** qui rapporte les **pensées** d'un personnage, comme s'il se parlait à lui-même : questions, exclamations, hésitations, phrases parfois inachevées." },
            { t: "exemple", titre: "Une suite cohérente", md: "Texte de départ : récit au **passé simple**, narrateur « je », point de vue **interne**.\nSuite cohérente : « Je **poussai** la porte. La pièce **était** sombre ; je **sentis** mon cœur s'accélérer. » On garde le « je », le passé simple pour les actions et l'imparfait pour la description." },
            { t: "verifie", q: "Sujet : « Imaginez le monologue intérieur du personnage au moment où il apprend la nouvelle. » Quelle erreur ferait perdre le plus de points ?", choix: ["Utiliser des phrases exclamatives", "Écrire un récit à la 3e personne avec un narrateur extérieur", "Faire hésiter le personnage"], bonne: 1, explication: "Un monologue intérieur est à la 1re personne et donne accès aux pensées. Passer à la 3e personne, c'est ne pas traiter le sujet. Exclamations et hésitations sont, au contraire, bienvenues." },
          ],
        },
        {
          titre: "Le sujet de réflexion",
          blocs: [
            { t: "etapes", titre: "Méthode du sujet de réflexion", items: [{ titre: "Analyser le sujet", md: "Souligne les mots-clés, reformule la question avec tes mots." }, { titre: "Chercher des idées", md: "Au brouillon, liste des arguments **pour** et **contre**, puis des exemples : lectures, films, Histoire, actualité, expérience." }, { titre: "Choisir sa thèse", md: "Réponds clairement à la question, quitte à **nuancer**." }, { titre: "Bâtir le plan", md: "Deux ou trois arguments, du moins fort au plus fort, ou bien thèse / antithèse / synthèse." }, { titre: "Rédiger", md: "Introduction, paragraphes argumentés, conclusion. Saute une ligne entre les parties." }, { titre: "Relire", md: "Avec la méthode de la dictée : accords, participes, homophones." }] },
            { t: "schema", titre: "Le plan d'un développement argumenté", legende: "L'introduction va du général au précis ; chaque paragraphe défend un argument ; la conclusion répond et ouvre.", svg: `<svg viewBox="0 0 400 300"><rect class="aplat" x="20" y="10" width="360" height="48" rx="6"/><rect class="trait" x="20" y="10" width="360" height="48" rx="6" fill="none"/><text class="texte-pigment" x="200" y="29" text-anchor="middle">Introduction</text><text class="texte-petit" x="200" y="47" text-anchor="middle">amorce → question reformulée → annonce du plan</text><line class="trait-fin" x1="200" y1="58" x2="200" y2="72" marker-end="url(#fl)"/><rect class="pointille" x="20" y="74" width="360" height="152" rx="6" fill="none"/><text class="texte-pigment" x="200" y="93" text-anchor="middle">Développement</text><rect class="aplat-papier" x="32" y="102" width="106" height="112" rx="5"/><rect class="trait-fin" x="32" y="102" width="106" height="112" rx="5" fill="none"/><rect class="aplat-papier" x="147" y="102" width="106" height="112" rx="5"/><rect class="trait-fin" x="147" y="102" width="106" height="112" rx="5" fill="none"/><rect class="aplat-papier" x="262" y="102" width="106" height="112" rx="5"/><rect class="trait-fin" x="262" y="102" width="106" height="112" rx="5" fill="none"/><text class="texte" x="85" y="121" text-anchor="middle">§ 1 : D'abord</text><text class="texte" x="200" y="121" text-anchor="middle">§ 2 : Ensuite</text><text class="texte" x="315" y="121" text-anchor="middle">§ 3 : Enfin</text><text class="texte-petit" x="85" y="141" text-anchor="middle">argument</text><text class="texte-petit" x="85" y="156" text-anchor="middle">explication</text><text class="texte-petit" x="85" y="171" text-anchor="middle">exemple</text><text class="texte-petit" x="85" y="186" text-anchor="middle">commentaire</text><text class="texte-petit" x="85" y="201" text-anchor="middle">transition</text><text class="texte-petit" x="200" y="141" text-anchor="middle">argument</text><text class="texte-petit" x="200" y="156" text-anchor="middle">explication</text><text class="texte-petit" x="200" y="171" text-anchor="middle">exemple</text><text class="texte-petit" x="200" y="186" text-anchor="middle">commentaire</text><text class="texte-petit" x="200" y="201" text-anchor="middle">transition</text><text class="texte-petit" x="315" y="141" text-anchor="middle">argument</text><text class="texte-petit" x="315" y="156" text-anchor="middle">explication</text><text class="texte-petit" x="315" y="171" text-anchor="middle">exemple</text><text class="texte-petit" x="315" y="186" text-anchor="middle">commentaire</text><text class="texte-petit" x="315" y="201" text-anchor="middle">transition</text><line class="trait-fin" x1="200" y1="226" x2="200" y2="240" marker-end="url(#fl)"/><rect class="aplat" x="20" y="242" width="360" height="48" rx="6"/><rect class="trait" x="20" y="242" width="360" height="48" rx="6" fill="none"/><text class="texte-pigment" x="200" y="261" text-anchor="middle">Conclusion</text><text class="texte-petit" x="200" y="279" text-anchor="middle">bilan (réponse à la question) + ouverture</text></svg>` },
            { t: "exemple", titre: "« Faut-il toujours dire la vérité ? »", etapes: ["**Thèse nuancée** : la vérité est nécessaire, mais elle doit parfois être adoucie.", "**Argument 1** : la confiance repose sur la vérité. *Exemple* : le pacte autobiographique de Rousseau, qui promet de tout dire.", "**Argument 2** : une vérité brutale peut blesser. *Exemple* : l'euphémisme, qui adoucit l'annonce d'un deuil.", "**Conclusion** : dire vrai, mais avec tact ; ouverture : et le mensonge pour protéger quelqu'un ?"] },
            { t: "verifie", q: "Sujet : « L'écriture de soi permet-elle de mieux se connaître ? » Quel plan est le plus pertinent ?", choix: ["I. La vie de Rousseau ; II. La vie de Perec", "I. Oui, écrire aide à se comprendre ; II. Mais la mémoire trompe et l'on se met en scène", "I. Définition de l'autobiographie ; II. Liste des autobiographies célèbres"], bonne: 1, explication: "Un bon plan répond à la question posée : un argument pour, une nuance. Les autres plans résument ou listent des œuvres sans argumenter." },
          ],
        },
        {
          titre: "Le paragraphe argumenté et les connecteurs",
          blocs: [
            { t: "propriete", titre: "La structure d'un paragraphe", md: "Un **alinéa**, puis : **connecteur + idée directrice** (l'argument) → **explication** → **exemple précis** → **commentaire** de l'exemple → **phrase de transition**. Un exemple sans commentaire ne démontre rien." },
            { t: "tableau", titre: "Les connecteurs logiques", entetes: ["Relation", "Connecteurs"], lignes: [["Ordre", "d'abord, ensuite, enfin, premièrement"], ["Cause, justification", "en effet, car, puisque"], ["Conséquence", "donc, ainsi, par conséquent, c'est pourquoi"], ["Opposition", "cependant, pourtant, en revanche, mais"], ["Concession", "certes… mais, bien que, même si"], ["Illustration", "par exemple, notamment, ainsi"], ["Addition", "de plus, en outre, par ailleurs"]] },
            { t: "attention", md: "La **concession** accorde un point à l'adversaire **avant** de le dépasser : « **Certes**, les écrans isolent parfois, **mais** ils permettent aussi de garder le lien avec des amis lointains. » Sans le « mais » qui suit, la concession reste en l'air." },
          ],
        },
        {
          titre: "L'oral du DNB",
          blocs: [
            { t: "texte", md: "L'oral vaut **100 points**. Tu présentes un **projet** mené dans un parcours (Avenir, citoyen, santé, éducation artistique et culturelle) ou un enseignement pratique interdisciplinaire (EPI). Seul, la soutenance dure **15 minutes** : **5 minutes d'exposé**, puis **10 minutes d'entretien** avec le jury. En groupe, elle dure 25 minutes. Le jury évalue l'**expression orale** (50 points) et la **maîtrise du sujet** (50 points)." },
            { t: "liste", titre: "Réussir sa soutenance", items: ["Prépare un **plan clair** et annonce-le dès le début.", "Parle à partir de **notes brèves**, pas d'un texte rédigé à lire.", "Regarde le jury, articule, varie le ton.", "Explique **ce que tu as appris** et ce que tu améliorerais : c'est ce qui intéresse le plus le jury.", "Entraîne-toi en te chronométrant : 5 minutes passent vite."] },
            { t: "verifie", q: "Lors de la soutenance individuelle du DNB, combien de minutes dure l'exposé, avant l'entretien avec le jury ?", choix: ["2 minutes", "5 minutes", "10 minutes", "15 minutes"], bonne: 1, explication: "5 minutes d'exposé, puis 10 minutes d'entretien : 15 minutes en tout pour un candidat seul." },
          ],
        },
      ],
      bilan: "Imagination : respecte le texte ; réflexion : une thèse, des arguments, des exemples commentés ; oral : un plan, un regard, une voix. Et toujours, relis-toi.",
    },
  },
};
