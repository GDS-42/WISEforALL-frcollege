// Cours ÉCLORE — 4e Éducation musicale. Schéma : docs/COURS.md
export default {
  id: "4e-education-musicale",
  chapitres: {
    "4e-education-musicale-01-musique-texte": {
      accroche: "« L'amour est un oiseau rebelle… » Tu connais sans doute cet air sans savoir d'où il vient. Il sort d'un opéra de 1875, *Carmen*. Comment une musique peut-elle porter des mots au point qu'on les chante encore cent cinquante ans plus tard ?",
      objectifs: [
        "Expliquer comment fonctionne un opéra : livret, récitatif, air",
        "Distinguer opéra et comédie musicale, et analyser une chanson engagée",
        "Repérer la prosodie, l'accord entre les mots et la musique",
      ],
      sections: [
        {
          titre: "L'opéra, un théâtre entièrement chanté",
          blocs: [
            { t: "definition", terme: "Opéra", md: "Une pièce de théâtre **entièrement chantée**, accompagnée par un orchestre, avec des décors et des costumes. Il naît en **Italie vers 1600**." },
            { t: "texte", md: "Un opéra a deux auteurs. Le **librettiste** écrit le texte, appelé le **livret** (le « petit livre »). Le **compositeur** écrit la musique. Les chanteurs sont aussi des acteurs : ils jouent leur rôle sur scène." },
            { t: "savais-tu", md: "L'un des premiers grands opéras, *L'Orfeo* de Claudio Monteverdi, a été créé en 1607 à Mantoue, en Italie. Il raconte le mythe d'Orphée, le musicien qui descend aux Enfers chercher celle qu'il aime." },
          ],
        },
        {
          titre: "Récitatif et air : raconter ou ressentir",
          blocs: [
            { t: "texte", md: "Dans un opéra, il faut à la fois **faire avancer l'histoire** et laisser les personnages **exprimer ce qu'ils ressentent**. Pour cela, le compositeur alterne deux manières de chanter." },
            { t: "schema", titre: "Deux façons de chanter", legende: "Le récitatif reste presque sur place, comme la parole. L'air déploie une vraie mélodie qui monte et descend.", svg: `<svg viewBox="0 0 400 220"><rect class="aplat-papier" x="10" y="36" width="185" height="110"/><rect class="aplat-papier" x="205" y="36" width="185" height="110"/><rect class="trait-fin" fill="none" x="10" y="36" width="185" height="110"/><rect class="trait-fin" fill="none" x="205" y="36" width="185" height="110"/><text class="texte" x="102" y="26" text-anchor="middle">Récitatif</text><text class="texte" x="298" y="26" text-anchor="middle">Air (aria)</text><path class="trait" fill="none" d="M24 96 L40 94 L56 96 L72 92 L88 96 L104 94 L120 100 L136 96 L152 94 L168 98 L182 96"/><g fill="var(--encre)"><circle cx="24" cy="96" r="3.5"/><circle cx="40" cy="94" r="3.5"/><circle cx="56" cy="96" r="3.5"/><circle cx="72" cy="92" r="3.5"/><circle cx="88" cy="96" r="3.5"/><circle cx="104" cy="94" r="3.5"/><circle cx="120" cy="100" r="3.5"/><circle cx="136" cy="96" r="3.5"/><circle cx="152" cy="94" r="3.5"/><circle cx="168" cy="98" r="3.5"/><circle cx="182" cy="96" r="3.5"/></g><path fill="none" stroke="var(--pigment)" stroke-width="3" d="M218 120 Q246 50 274 96 T330 76 T380 116"/><g fill="var(--pigment)"><circle cx="218" cy="120" r="5"/><circle cx="246" cy="74" r="5"/><circle cx="274" cy="96" r="5"/><circle cx="302" cy="104" r="5"/><circle cx="330" cy="76" r="5"/><circle cx="380" cy="116" r="5"/></g><g class="texte-petit" text-anchor="middle"><text x="102" y="166">proche de la parole</text><text x="102" y="182">fait avancer l'action</text><text x="102" y="198">accompagnement léger</text><text x="298" y="166">vraie mélodie</text><text x="298" y="182">exprime un sentiment</text><text x="298" y="198">l'action s'arrête</text></g></svg>` },
            { t: "tableau", titre: "Récitatif ou air ?", entetes: ["", "Récitatif", "Air (aria)"], lignes: [["Rôle", "Faire avancer l'action, dialoguer", "Exprimer un sentiment (amour, colère, désespoir)"], ["Mélodie", "Peu de notes différentes, rythme de la parole", "Mélodie riche, souvent répétée, facile à retenir"], ["Accompagnement", "Léger : quelques accords (clavecin, orchestre discret)", "Tout l'orchestre"], ["Temps", "L'histoire avance", "Le temps semble suspendu"]] },
            { t: "exemple", titre: "Dans « Carmen » de Bizet (1875)", md: "Les personnages échangent d'abord en récitatif, presque parlé, pour raconter ce qui se passe sur la place de Séville. Puis Carmen chante la **Habanera**, « L'amour est un oiseau rebelle » : c'est un **air**. L'action s'arrête, et Carmen dit ce qu'est l'amour pour elle, sur une mélodie qu'on retient." },
            { t: "verifie", q: "Dans un opéra, le récitatif est-il le moment où le personnage chante une grande mélodie pour exprimer ses émotions ?", choix: ["Oui", "Non : c'est l'air ; le récitatif, proche de la parole, fait avancer l'action"], bonne: 1, explication: "On confond souvent les deux. Le récitatif raconte, l'air exprime. Retiens : récitatif = récit." },
          ],
        },
        {
          titre: "De l'opéra à la comédie musicale",
          blocs: [
            { t: "frise", titre: "Quelques œuvres célèbres", evenements: [{ date: 1607, label: "L'Orfeo, Monteverdi", detail: "Un des premiers opéras." }, { date: 1786, label: "Les Noces de Figaro, Mozart", detail: "Créé à Vienne." }, { date: 1791, label: "La Flûte enchantée, Mozart", detail: "Avec l'air de la Reine de la nuit." }, { date: 1853, label: "La Traviata, Verdi", detail: "Créé à Venise." }, { date: 1871, label: "Aida, Verdi", detail: "Créé au Caire." }, { date: 1875, label: "Carmen, Bizet", detail: "Créé à Paris, à l'Opéra-Comique." }, { date: 1957, label: "West Side Story, Bernstein", detail: "Comédie musicale créée à Broadway." }] },
            { t: "definition", terme: "Comédie musicale", md: "Spectacle né à **Broadway** (New York) au XXe siècle, qui **alterne dialogues parlés, chansons et danse**. À l'opéra, tout est chanté ; dans la comédie musicale, on parle aussi, et on danse beaucoup." },
            { t: "texte", md: "*West Side Story* (Leonard **Bernstein**, 1957) transpose *Roméo et Juliette* de Shakespeare dans le New York des années 1950 : deux bandes rivales, les Jets et les Sharks, remplacent les familles ennemies de Vérone." },
            { t: "verifie", q: "Qu'est-ce qui distingue une comédie musicale d'un opéra ?", choix: ["Elle n'a pas d'orchestre", "Elle alterne dialogues parlés, chansons et danse", "Elle est toujours en italien", "Elle n'a pas d'histoire"], bonne: 1, explication: "Dans un opéra, tout est chanté. La comédie musicale mêle parole, chant et danse." },
          ],
        },
        {
          titre: "La chanson engagée et la prosodie",
          blocs: [
            { t: "definition", terme: "Chanson engagée", md: "Une chanson qui **défend une cause** ou **dénonce une injustice**. Le texte est au centre : la musique le porte et le rend mémorable." },
            { t: "texte", md: "Dans *Le Déserteur* (1954), Boris **Vian** écrit une lettre au président pour refuser de partir à la guerre : il dénonce **la guerre**. La chanson est interdite à la radio pendant des années. Dans *Né quelque part* (1988), Maxime **Le Forestier** rappelle que personne ne choisit son lieu de naissance, et dénonce le racisme." },
            { t: "definition", terme: "Prosodie", md: "L'accord entre les **accents des mots** et les **accents de la musique**. Une bonne prosodie place les syllabes accentuées sur les temps forts : le texte se comprend sans effort." },
            { t: "exemple", titre: "Où tombe l'accent en français ?", etapes: ["En français, l'accent tonique tombe sur la **dernière syllabe prononcée** du mot.", "« li-ber-**té** », « chan-**son** » ; dans « **por**-te », le *e* final ne se prononce pas : l'accent est sur « por ».", "Le compositeur place donc « té » et « son » sur un temps fort.", "Chante « **li**-ber-té » avec l'accent au début : ça sonne faux, c'est une mauvaise prosodie."] },
          ],
        },
      ],
      bilan: "À l'opéra, le récitatif raconte et l'air fait ressentir ; dans la chanson, la prosodie fait épouser les mots et la musique pour qu'un message porte loin.",
    },
    "4e-education-musicale-02-musique-image": {
      accroche: "Deux notes graves. Puis encore. De plus en plus vite. Tu n'as encore rien vu à l'écran, et pourtant tu as peur : le requin arrive. Comment une musique peut-elle te faire peur avant même l'image ?",
      objectifs: [
        "Expliquer à quoi sert la musique de film et ce qu'est un leitmotiv",
        "Connaître John Williams, Ennio Morricone et Hans Zimmer",
        "Analyser la relation son-image : synchronisation, musique diégétique ou non, clip",
      ],
      sections: [
        {
          titre: "À quoi sert la musique de film ?",
          blocs: [
            { t: "liste", titre: "Les rôles de la musique de film", items: ["**Créer l'émotion** : peur, joie, tristesse, suspense.", "**Situer** une époque ou un lieu : une guitare flamenca, un clavecin, un synthétiseur des années 1980.", "**Annoncer** ce qui va arriver, avant l'image.", "**Relier** les scènes entre elles et donner une unité au film."] },
            { t: "exemple", titre: "Le thème des « Dents de la mer » (1975)", md: "John Williams écrit pour le film de Steven Spielberg un thème de **deux notes graves répétées** (mi, fa), jouées de plus en plus vite. Le spectateur sent une **tension qui monte** et devine le danger avant de voir le requin. La musique agit comme un signal." },
            { t: "attention", md: "La musique de film ne sert **pas** à remplir les silences. Elle raconte, elle commente, elle trompe parfois. Un réalisateur peut même choisir le silence total pour rendre une scène plus forte." },
          ],
        },
        {
          titre: "Le leitmotiv : un thème qui suit un personnage",
          blocs: [
            { t: "definition", terme: "Leitmotiv", md: "Un **thème musical associé à un personnage, un objet ou une idée**. Il revient à chaque apparition, souvent **transformé** selon la situation. Le compositeur allemand Richard **Wagner** l'a utilisé systématiquement dans ses opéras au XIXe siècle." },
            { t: "schema", titre: "Un leitmotiv au fil d'un film", legende: "Le même thème revient, mais son caractère change avec la situation du héros.", svg: `<svg viewBox="0 0 400 220"><rect class="aplat-papier" x="15" y="30" width="110" height="100"/><rect class="aplat-papier" x="145" y="30" width="110" height="100"/><rect class="aplat-papier" x="275" y="30" width="110" height="100"/><g class="trait-fin" fill="none"><rect x="15" y="30" width="110" height="100"/><rect x="145" y="30" width="110" height="100"/><rect x="275" y="30" width="110" height="100"/></g><g class="texte-petit" text-anchor="middle"><text x="70" y="48">Le héros arrive</text><text x="200" y="48">Il est en danger</text><text x="330" y="48">Il triomphe</text><text x="70" y="120">trompettes, éclatant</text><text x="200" y="120">grave, inquiet</text><text x="330" y="120">tout l'orchestre</text></g><path class="pointille" fill="none" d="M45 96 L70 84 L95 72"/><g fill="var(--pigment)"><circle cx="45" cy="96" r="5"/><circle cx="70" cy="84" r="5"/><circle cx="95" cy="72" r="5"/></g><path class="pointille" fill="none" d="M175 92 L200 98 L225 104"/><g fill="var(--encre)"><circle cx="175" cy="92" r="4"/><circle cx="200" cy="98" r="4"/><circle cx="225" cy="104" r="4"/></g><path class="pointille" fill="none" d="M305 98 L330 82 L355 66"/><g fill="var(--pigment)"><circle cx="305" cy="98" r="7"/><circle cx="330" cy="82" r="7"/><circle cx="355" cy="66" r="7"/></g><line class="trait" x1="20" y1="168" x2="380" y2="168" marker-end="url(#fl)"/><g class="trait-fin"><line x1="70" y1="130" x2="70" y2="164" marker-end="url(#fl)"/><line x1="200" y1="130" x2="200" y2="164" marker-end="url(#fl)"/><line x1="330" y1="130" x2="330" y2="164" marker-end="url(#fl)"/></g><text class="texte-main" x="200" y="196" text-anchor="middle">déroulement du film</text></svg>` },
            { t: "texte", md: "Dans la saga *Star Wars*, John Williams donne un thème à chaque personnage important. La **Marche impériale** annonce Dark Vador : dès les premières notes, on sait qu'il est là, même hors-champ." },
            { t: "verifie", q: "Qu'est-ce qu'un leitmotiv au cinéma ?", choix: ["La chanson du générique de fin", "Un thème associé à un personnage ou une idée, qui revient dans le film", "Un bruitage de pas", "Le silence avant une scène d'action"], bonne: 1, explication: "Le leitmotiv revient chaque fois que le personnage ou l'idée apparaît, parfois transformé. Il permet au spectateur de reconnaître et d'anticiper." },
          ],
        },
        {
          titre: "Trois grands compositeurs de cinéma",
          blocs: [
            { t: "tableau", titre: "Williams, Morricone, Zimmer", entetes: ["Compositeur", "Films", "Signature sonore"], lignes: [["**John Williams** (né en 1932, États-Unis)", "*Star Wars*, *Les Dents de la mer*, *Indiana Jones*, *Harry Potter*", "Grand orchestre symphonique, leitmotivs mémorables"], ["**Ennio Morricone** (1928-2020, Italie)", "Westerns de Sergio Leone : *Le Bon, la Brute et le Truand* (1966)", "**Sifflements, guimbarde, voix, guitare électrique**, cris"], ["**Hans Zimmer** (né en 1957, Allemagne)", "*Le Roi lion*, *Inception*, *Interstellar*", "Orchestre mêlé d'électronique, nappes, orgue"]] },
            { t: "frise", titre: "Des musiques qui ont marqué le cinéma", evenements: [{ date: 1966, label: "Le Bon, la Brute et le Truand", detail: "Ennio Morricone." }, { date: 1975, label: "Les Dents de la mer", detail: "John Williams." }, { date: 1977, label: "Star Wars", detail: "John Williams." }, { date: 1981, label: "Les Aventuriers de l'arche perdue (Indiana Jones)", detail: "John Williams." }, { date: 1994, label: "Le Roi lion", detail: "Hans Zimmer." }, { date: 2001, label: "Harry Potter à l'école des sorciers", detail: "John Williams." }, { date: 2014, label: "Interstellar", detail: "Hans Zimmer, avec un grand orgue." }] },
            { t: "verifie", q: "Quels sons caractérisent la musique de Morricone pour les westerns de Sergio Leone ?", choix: ["Un piano seul", "Sifflements, guimbarde, voix et guitare électrique", "Des synthétiseurs uniquement", "Un orgue d'église"], bonne: 1, explication: "Morricone invente un son de western reconnaissable entre mille, avec des timbres inattendus : sifflement, guimbarde, voix, guitare électrique." },
          ],
        },
        {
          titre: "Quand le son colle à l'image",
          blocs: [
            { t: "definition", terme: "Musique diégétique ou extradiégétique", md: "La musique est **diégétique** quand elle fait partie de l'histoire : les personnages l'entendent (une radio, un orchestre dans la scène). Elle est **extradiégétique** quand seul le spectateur l'entend : elle est ajoutée par-dessus l'image." },
            { t: "exemple", titre: "Une scène de bal", md: "On voit un orchestre jouer une valse : elle est **diégétique**. Le héros sort dans le jardin ; la valse continue, lointaine, pendant qu'une musique inquiétante s'y ajoute. Cette seconde musique, que les danseurs n'entendent pas, est **extradiégétique**." },
            { t: "texte", md: "La **synchronisation** fait coïncider un son avec une action à l'image. Dans les dessins animés, la musique suit chaque geste : une chute devient une glissade de notes, un pas sur la pointe des pieds devient un pizzicato. C'est le **mickeymousing**, du nom de Mickey, star des premiers dessins animés sonores de Disney (1928)." },
            { t: "etapes", titre: "Comment naît une musique de film", items: [{ titre: "Tournage et montage", md: "Le réalisateur tourne et monte le film." }, { titre: "Repérage", md: "Le compositeur regarde le montage et repère les scènes à musiquer." }, { titre: "Composition", md: "Il compose les thèmes et les leitmotivs." }, { titre: "Enregistrement", md: "L'orchestre enregistre en regardant l'image, pour être synchronisé." }, { titre: "Mixage", md: "On équilibre musique, dialogues et bruitages." }] },
            { t: "savais-tu", md: "Le **clip** est un court film qui met une chanson en images. Il explose avec la naissance de la chaîne **MTV** en 1981. Le clip de *Thriller* de Michael Jackson (1983) dure près de 14 minutes : un vrai petit film d'horreur." },
            { t: "verifie", q: "Dans une scène, un personnage allume la radio et danse sur la chanson qui passe. Cette musique est :", choix: ["Diégétique, car le personnage l'entend", "Extradiégétique, car elle est enregistrée"], bonne: 0, explication: "La musique sort d'une source présente dans l'histoire et le personnage l'entend : elle est diégétique." },
          ],
        },
      ],
      bilan: "Au cinéma, la musique crée l'émotion, annonce, relie et colle aux gestes : un bon leitmotiv te fait reconnaître un héros les yeux fermés.",
    },
    "4e-education-musicale-03-reperes-xixe-xxe": {
      accroche: "« Pom pom pom pooom ! » Quatre notes, et tout le monde reconnaît Beethoven. Un siècle plus tard, un ballet de Stravinsky déclenche une bagarre dans la salle. Et quelques décennies après, on compose avec des bruits de trains. Que s'est-il passé ?",
      objectifs: [
        "Connaître le romantisme musical : Beethoven, Chopin, Schubert, Berlioz",
        "Reconnaître l'impressionnisme musical et les familles de l'orchestre symphonique",
        "Situer le XXe siècle : Stravinsky, Gershwin, musique concrète et électronique",
      ],
      sections: [
        {
          titre: "Le romantisme : la musique des sentiments",
          blocs: [
            { t: "definition", terme: "Romantisme musical", md: "Courant du **XIXe siècle** qui place au centre l'**expression des sentiments**, la **nature**, le rêve et le **drame**. Le compositeur exprime son monde intérieur." },
            { t: "texte", md: "**Beethoven** (1770-1827) fait le **pont** entre classicisme et romantisme : il garde les **formes classiques** (symphonie, sonate) mais y met une **expression personnelle et dramatique** nouvelle. Sa 5e Symphonie (1808) et sa 9e Symphonie avec chœur (1824), qui finit par l'*Ode à la joie*, sont célèbres dans le monde entier. Il les compose alors qu'il devient sourd." },
            { t: "exemple", titre: "Un motif qui construit tout un mouvement", md: "Les quatre premières notes de la 5e Symphonie (trois brèves, une longue : « pom pom pom pooom ») forment un **motif rythmique**. Beethoven le répète, le fait passer d'un instrument à l'autre, le transforme : tout le premier mouvement est bâti sur cette cellule de quatre notes." },
            { t: "tableau", titre: "Quatre romantiques", entetes: ["Compositeur", "Spécialité", "Œuvre repère"], lignes: [["**Beethoven** (Allemagne)", "Symphonies, sonates", "9e Symphonie avec chœur (1824)"], ["**Chopin** (Pologne, vit à Paris)", "Presque uniquement le **piano**", "Nocturnes, valses, polonaises"], ["**Schubert** (Autriche)", "Plus de 600 **lieder**", "*Le Roi des aulnes* (1815), sur un poème de Goethe"], ["**Berlioz** (France)", "Grand orchestre, musique qui raconte", "*Symphonie fantastique* (1830)"]] },
            { t: "definition", terme: "Lied et idée fixe", md: "Un **lied** (pluriel : lieder) est une chanson allemande pour **voix et piano**, sur un poème. L'**idée fixe** est le thème inventé par Berlioz dans la *Symphonie fantastique* : il revient dans **chaque mouvement** pour représenter la femme aimée, comme une obsession." },
          ],
        },
        {
          titre: "L'orchestre symphonique",
          blocs: [
            { t: "schema", titre: "Les quatre familles sur scène", legende: "Les cordes, les plus nombreuses, sont devant le chef ; puis les bois, les cuivres, et les percussions au fond.", svg: `<svg viewBox="0 0 400 240"><path class="aplat-papier" stroke="var(--encre)" stroke-width="1.5" d="M4 232 A196 196 0 0 1 396 232 L358 232 A158 158 0 0 0 42 232 Z"/><path class="aplat" stroke="var(--encre)" stroke-width="1.5" d="M42 232 A158 158 0 0 1 358 232 L320 232 A120 120 0 0 0 80 232 Z"/><path class="aplat-papier" stroke="var(--encre)" stroke-width="1.5" d="M80 232 A120 120 0 0 1 320 232 L280 232 A80 80 0 0 0 120 232 Z"/><path class="aplat" stroke="var(--encre)" stroke-width="1.5" d="M120 232 A80 80 0 0 1 280 232 L228 232 A28 28 0 0 0 172 232 Z"/><g class="texte" text-anchor="middle"><text x="200" y="57">PERCUSSIONS</text><text x="200" y="94">CUIVRES</text><text x="200" y="138">BOIS</text><text x="200" y="184">CORDES</text></g><g class="texte-petit" text-anchor="middle"><text x="200" y="70">timbales, grosse caisse</text><text x="200" y="107">cors, trompettes, trombones</text><text x="200" y="152">flûtes, hautbois, clarinettes</text><text x="200" y="200">violons, violoncelles</text><text x="200" y="228">chef</text></g></svg>` },
            { t: "texte", md: "L'orchestre symphonique compte **quatre familles** : **cordes**, **bois**, **cuivres**, **percussions**. Au XIXe siècle, il grandit jusqu'à plus de **100 musiciens** : les compositeurs romantiques veulent des couleurs et des puissances nouvelles." },
            { t: "verifie", q: "Combien de familles d'instruments composent l'orchestre symphonique ?", choix: ["2 : vents et cordes", "3 : cordes, vents, piano", "4 : cordes, bois, cuivres, percussions", "6"], bonne: 2, explication: "Cordes, bois, cuivres, percussions. Attention : la flûte est un bois même quand elle est en métal, car on la classe selon la façon de produire le son." },
          ],
        },
        {
          titre: "L'impressionnisme : peindre avec des sons",
          blocs: [
            { t: "texte", md: "Vers **1890-1920**, des compositeurs français cherchent, comme les peintres impressionnistes, à créer des **atmosphères** et des **couleurs sonores** plutôt que des mélodies bien carrées. Les contours sont flous, les timbres scintillent." },
            { t: "liste", items: ["**Claude Debussy** : *Prélude à l'après-midi d'un faune* (1894), qui s'ouvre sur une flûte solo rêveuse ; *La Mer* (1905).", "**Maurice Ravel** : *Boléro* (1928), construit sur **un seul rythme répété** et un long **crescendo** de 15 minutes, où les instruments entrent un à un."] },
            { t: "verifie", q: "Quelle caractéristique correspond à l'impressionnisme musical de Debussy ?", choix: ["Des atmosphères et des couleurs sonores plutôt que des mélodies carrées", "Des sons enregistrés manipulés en studio", "Une grille de blues de 12 mesures", "Un chœur qui chante l'Ode à la joie"], bonne: 0, explication: "Debussy travaille le timbre et l'atmosphère, comme Monet travaille la lumière." },
          ],
        },
        {
          titre: "Le XXe siècle : ruptures et nouveaux sons",
          blocs: [
            { t: "texte", md: "Le 29 mai **1913**, à Paris, la création du *Sacre du printemps* d'Igor **Stravinsky** provoque un **scandale** : rythmes brutaux et irréguliers, dissonances, danse étrange. Le public siffle et se dispute. En **1924**, George **Gershwin** mêle **jazz et orchestre symphonique** dans *Rhapsody in Blue*, qui commence par un célèbre glissando de clarinette." },
            { t: "definition", terme: "Musique concrète", md: "Musique inventée par Pierre **Schaeffer** en **1948**, composée à partir de **sons enregistrés** (bruits, voix, objets, trains) **manipulés en studio** : coupés, ralentis, inversés, superposés." },
            { t: "frise", titre: "Du romantisme aux musiques électroniques", evenements: [{ date: 1808, label: "Beethoven, 5e Symphonie" }, { date: 1815, label: "Schubert, Le Roi des aulnes" }, { date: 1824, label: "Beethoven, 9e Symphonie" }, { date: 1830, label: "Berlioz, Symphonie fantastique" }, { date: 1894, label: "Debussy, Prélude à l'après-midi d'un faune" }, { date: 1913, label: "Stravinsky, Le Sacre du printemps", detail: "Scandale à Paris." }, { date: 1924, label: "Gershwin, Rhapsody in Blue" }, { date: 1928, label: "Ravel, Boléro" }, { date: 1948, label: "Schaeffer invente la musique concrète" }, { date: 1985, label: "Techno à Detroit, house à Chicago", detail: "Années 1980, après l'essor des synthétiseurs dans les années 1960-1970." }] },
            { t: "verifie", q: "Pourquoi dit-on que Beethoven fait le pont entre classicisme et romantisme ?", choix: ["Il a inventé la musique concrète", "Il garde les formes classiques mais y met une expression personnelle et dramatique nouvelle", "Il n'a écrit que pour le piano", "Il a composé des musiques de film"], bonne: 1, explication: "Beethoven écrit des symphonies et des sonates comme Haydn et Mozart, mais avec une intensité dramatique qui annonce le romantisme." },
          ],
        },
      ],
      bilan: "Du cri intérieur des romantiques aux couleurs de Debussy, puis aux ruptures de Stravinsky et aux sons enregistrés : en un siècle et demi, la musique a sans cesse réinventé ce qu'elle pouvait être.",
    },
    "4e-education-musicale-04-jazz-musiques-populaires": {
      accroche: "Le rock, la soul, le rap, la pop que tu écoutes ont une même grand-mère : une musique née dans les champs de coton du sud des États-Unis, chantée par des descendants d'esclaves. Elle s'appelle le blues.",
      objectifs: [
        "Raconter l'histoire du blues et du jazz et connaître ses grandes figures",
        "Comprendre l'improvisation, le swing et le rôle de la section rythmique",
        "Situer rock, soul et hip-hop et expliquer le sampling",
      ],
      sections: [
        {
          titre: "Le blues, la racine",
          blocs: [
            { t: "definition", terme: "Blues", md: "Musique née à la **fin du XIXe siècle** chez les **Afro-Américains du sud des États-Unis**. Elle exprime la peine et l'espoir, souvent sur une **grille de 12 mesures** et avec des **notes bleues** (*blue notes*), légèrement abaissées, qui donnent sa couleur mélancolique." },
            { t: "schema", titre: "La grille de blues en 12 mesures", legende: "I, IV et V sont les accords construits sur les 1re, 4e et 5e notes de la gamme (en do : do, fa, sol).", svg: `<svg viewBox="0 0 400 200"><g class="trait-fin"><rect class="aplat" x="40" y="20" width="80" height="44"/><rect class="aplat" x="120" y="20" width="80" height="44"/><rect class="aplat" x="200" y="20" width="80" height="44"/><rect class="aplat" x="280" y="20" width="80" height="44"/><rect class="aplat-fort" x="40" y="74" width="80" height="44"/><rect class="aplat-fort" x="120" y="74" width="80" height="44"/><rect class="aplat" x="200" y="74" width="80" height="44"/><rect class="aplat" x="280" y="74" width="80" height="44"/><rect class="aplat-papier" x="40" y="128" width="80" height="44"/><rect class="aplat-fort" x="120" y="128" width="80" height="44"/><rect class="aplat" x="200" y="128" width="80" height="44"/><rect class="aplat" x="280" y="128" width="80" height="44"/></g><g class="trait-fin" fill="none"><rect x="40" y="20" width="320" height="44"/><rect x="40" y="74" width="320" height="44"/><rect x="40" y="128" width="320" height="44"/></g><g class="texte" text-anchor="middle"><text x="80" y="47">I</text><text x="160" y="47">I</text><text x="240" y="47">I</text><text x="320" y="47">I</text><text x="80" y="101">IV</text><text x="160" y="101">IV</text><text x="240" y="101">I</text><text x="320" y="101">I</text><text x="80" y="155">V</text><text x="160" y="155">IV</text><text x="240" y="155">I</text><text x="320" y="155">I</text></g><g class="texte-petit" text-anchor="end"><text x="34" y="46">1-4</text><text x="34" y="100">5-8</text><text x="34" y="154">9-12</text></g><text class="texte-main" x="200" y="194" text-anchor="middle">puis on recommence la grille</text></svg>` },
            { t: "verifie", q: "Pourquoi le blues est-il considéré comme la racine de nombreuses musiques populaires du XXe siècle ?", choix: ["Parce qu'il est le plus ancien style européen", "Parce que sa grille et ses notes bleues se retrouvent dans le jazz, le rock, la soul et au-delà", "Parce qu'il n'utilise que des instruments électroniques"], bonne: 1, explication: "La grille de 12 mesures et les blue notes sont reprises par le jazz, le rock'n'roll, la soul, le funk et même le rap." },
          ],
        },
        {
          titre: "Le jazz : improvisation et swing",
          blocs: [
            { t: "texte", md: "Le **jazz** naît à **La Nouvelle-Orléans** vers **1900**, port où se croisent fanfares, blues, chants religieux et danses venues d'Europe et des Caraïbes. Deux mots le définissent : **improvisation** et **swing**." },
            { t: "definition", terme: "Improvisation et swing", md: "**Improviser**, c'est inventer la musique **au moment où on la joue**, en respectant la grille d'accords. Le **swing** est le **balancement rythmique** propre au jazz : les croches ne sont pas égales, la première est un peu plus longue, ce qui donne envie de bouger." },
            { t: "etapes", titre: "La structure d'un standard de jazz", items: [{ titre: "Le thème", md: "Tous les musiciens jouent la mélodie connue ensemble." }, { titre: "Les chorus", md: "Chaque soliste improvise **à tour de rôle** sur la même grille d'accords." }, { titre: "La section rythmique", md: "Pendant ce temps, piano, contrebasse et batterie **maintiennent la grille et la pulsation**." }, { titre: "Retour du thème", md: "On reprend la mélodie ensemble pour finir." }] },
            { t: "texte", md: "Années **1930** : l'ère du **swing** et des grands orchestres, les **big bands** (Duke Ellington, Count Basie), qui font danser l'Amérique. Années **1940** : le **bebop**, plus rapide et virtuose, avec le saxophoniste Charlie Parker." },
            { t: "verifie", q: "Dans un morceau de jazz, que fait la section rythmique pendant qu'un soliste improvise ?", choix: ["Elle se tait", "Elle maintient la grille d'accords et la pulsation", "Elle improvise un autre thème plus fort", "Elle joue le thème en boucle"], bonne: 1, explication: "Piano, contrebasse et batterie sont le socle : ils tiennent les accords et le tempo pour que le soliste puisse s'envoler sans se perdre." },
          ],
        },
        {
          titre: "Trois géants du jazz",
          blocs: [
            { t: "liste", items: ["**Louis Armstrong** : trompettiste et chanteur à la voix rauque, pionnier du jazz de La Nouvelle-Orléans.", "**Ella Fitzgerald** : chanteuse à la voix immense, **reine du scat**.", "**Miles Davis** : trompettiste qui renouvelle sans cesse le jazz ; son album *Kind of Blue* (1959) est l'un des plus vendus de l'histoire du jazz."] },
            { t: "definition", terme: "Scat", md: "Improvisation vocale sur des **syllabes sans signification** (« chou-bi-dou-ba »). La voix devient un instrument, comme une trompette." },
          ],
        },
        {
          titre: "Rock, soul, hip-hop : les héritiers",
          blocs: [
            { t: "tableau", titre: "Les grands genres populaires", entetes: ["Genre", "Naissance", "Ingrédients", "Figures"], lignes: [["**Blues**", "Fin XIXe, sud des États-Unis", "Grille de 12 mesures, notes bleues", "Robert Johnson, B.B. King"], ["**Jazz**", "Vers 1900, La Nouvelle-Orléans", "Improvisation, swing", "Louis Armstrong, Ella Fitzgerald"], ["**Rock'n'roll**", "Années 1950", "Blues + country, guitare électrique", "Chuck Berry, Elvis Presley"], ["**Soul**", "Années 1960", "**Gospel** + **rhythm and blues**", "Aretha Franklin, James Brown"], ["**Hip-hop**", "Années 1970, le **Bronx** à New York", "DJ, rap (MC), breakdance, graffiti", "DJ Kool Herc, Grandmaster Flash"]] },
            { t: "attention", md: "La soul ne vient **pas uniquement** du gospel. Elle mélange la ferveur des chants d'église (gospel) et l'énergie dansante du **rhythm and blues**. Aretha Franklin, la « reine de la soul », a commencé en chantant à l'église de son père." },
            { t: "definition", terme: "Sampling", md: "Technique qui consiste à **prélever un extrait** d'un enregistrement existant (un rythme de batterie, une phrase de cuivres) pour le **réutiliser** dans un nouveau morceau, souvent en boucle. Il faut l'**autorisation des ayants droit**." },
            { t: "exemple", titre: "Un morceau construit sur un sample", md: "Un producteur de rap repère quatre secondes de batterie dans un vieux disque de funk. Il les découpe, les met en boucle, ajoute une ligne de basse et le rappeur pose son texte par-dessus. Avant de sortir le morceau, il doit obtenir l'accord des auteurs et du label du disque d'origine, et souvent les rémunérer." },
            { t: "verifie", q: "Quel est l'ordre d'apparition de ces styles ?", choix: ["Rock'n'roll, blues, hip-hop, jazz", "Blues, jazz, rock'n'roll, soul, hip-hop", "Jazz, hip-hop, blues, soul"], bonne: 1, explication: "Blues (fin XIXe), jazz (vers 1900), swing (1930), rock'n'roll (1950), soul (1960), hip-hop (1970)." },
          ],
        },
      ],
      bilan: "Du blues des champs au sample d'un studio, chaque musique populaire emprunte à celle d'avant : improvisation, swing et grille de 12 mesures circulent encore dans ce que tu écoutes.",
    },
    "4e-education-musicale-05-parametres-ecriture": {
      accroche: "Une flûte et un violon jouent exactement le même la, aussi fort l'un que l'autre. Les yeux fermés, tu les reconnais pourtant sans hésiter. Qu'est-ce qui les distingue, puisque la note est la même ?",
      objectifs: [
        "Décrire un son avec le timbre, les nuances et les accents",
        "Reconnaître une monodie, une polyphonie et une homophonie",
        "Repérer les grandes parties de la forme sonate",
        "Lire une partition : mesure, armure, altérations",
      ],
      sections: [
        {
          titre: "Timbre, nuances et accents",
          blocs: [
            { t: "definition", terme: "Timbre", md: "La **couleur** du son. C'est lui qui permet de distinguer une flûte d'un violon ou d'une trompette **jouant la même note à la même intensité**. Chaque voix humaine a aussi son timbre : c'est pourquoi tu reconnais tes amis au téléphone." },
            { t: "tableau", titre: "Les nuances, du plus doux au plus fort", entetes: ["Signe", "Terme italien", "Signification"], lignes: [["**pp**", "pianissimo", "très doux"], ["**p**", "piano", "doux"], ["**mp**", "mezzo piano", "moyennement doux"], ["**mf**", "mezzo forte", "moyennement fort"], ["**f**", "forte", "fort"], ["**ff**", "fortissimo", "très fort"]] },
            { t: "texte", md: "Les nuances peuvent aussi évoluer : un **crescendo** (signe <) **augmente** progressivement l'intensité, un **decrescendo** (signe >) la **diminue**. Un **accent** (petit > placé au-dessus d'une seule note) renforce cette note par rapport à ses voisines." },
            { t: "verifie", q: "Quel paramètre distingue une trompette d'un violon jouant la même note à la même intensité ?", choix: ["La hauteur", "La durée", "Le timbre", "La nuance"], bonne: 2, explication: "Même note (hauteur), même intensité (nuance) : ce qui reste, c'est le timbre, la couleur propre à chaque instrument." },
          ],
        },
        {
          titre: "La texture : combien de lignes à la fois ?",
          blocs: [
            { t: "schema", titre: "Monodie, polyphonie, homophonie", legende: "Chaque trait est une ligne mélodique ; les blocs sont des accords.", svg: `<svg viewBox="0 0 400 220"><g class="trait-fin" fill="none"><rect x="10" y="36" width="120" height="136"/><rect x="140" y="36" width="120" height="136"/><rect x="270" y="36" width="120" height="136"/></g><g class="texte" text-anchor="middle"><text x="70" y="26">Monodie</text><text x="200" y="26">Polyphonie</text><text x="330" y="26">Homophonie</text></g><path fill="none" stroke="var(--pigment)" stroke-width="4" d="M20 110 Q45 70 70 110 T120 110"/><g fill="none" stroke="var(--pigment)" stroke-width="2.5"><path d="M150 72 Q170 50 190 72 T230 70 L250 62"/><path d="M150 116 Q175 136 200 106 T250 116"/><path d="M150 154 L170 144 L190 158 L210 140 L230 152 L250 146"/><path d="M280 64 Q305 44 330 66 T380 60"/></g><g class="aplat" stroke="var(--encre)" stroke-width="1"><rect x="282" y="100" width="18" height="56"/><rect x="310" y="100" width="18" height="56"/><rect x="338" y="100" width="18" height="56"/><rect x="366" y="100" width="18" height="56"/></g><g class="texte-petit" text-anchor="middle"><text x="70" y="192">une seule ligne,</text><text x="70" y="207">tous à l'unisson</text><text x="200" y="192">plusieurs lignes</text><text x="200" y="207">indépendantes</text><text x="330" y="192">une mélodie</text><text x="330" y="207">+ des accords</text></g></svg>` },
            { t: "definition", terme: "Les trois textures", md: "**Monodie** : une seule ligne mélodique, tout le monde chante la même chose. **Polyphonie** : plusieurs mélodies **indépendantes** en même temps. **Homophonie** : une mélodie principale **accompagnée d'accords** qui suivent son rythme." },
            { t: "exemple", titre: "« Frère Jacques » en trois textures", md: "La chorale chante tous ensemble la mélodie : **monodie**. Puis en canon à quatre voix : **polyphonie**. Enfin, une soliste chante la mélodie pendant que les autres tiennent des accords sur « ou » : **homophonie**. Une chanteuse accompagnée d'accords de guitare, c'est aussi une homophonie." },
            { t: "savais-tu", md: "Dans une **fugue** de Jean-Sébastien Bach, plusieurs voix entrent l'une après l'autre avec le même thème puis continuent chacune leur chemin en se superposant : c'est une polyphonie très savante, cousine du canon." },
          ],
        },
        {
          titre: "La forme sonate : une histoire en trois actes",
          blocs: [
            { t: "texte", md: "Le **premier mouvement** des symphonies et des sonates de l'époque classique (Haydn, Mozart, Beethoven) suit souvent un plan précis, comme une histoire : on présente les personnages, on les met à l'épreuve, puis on les retrouve." },
            { t: "etapes", titre: "La forme sonate", items: [{ titre: "Exposition", md: "On entend **deux thèmes contrastés** : le premier souvent énergique, le second plus chantant, dans une autre tonalité." }, { titre: "Développement", md: "Les thèmes sont **découpés, transformés**, passent d'un instrument à l'autre, changent de tonalité : c'est le moment le plus agité." }, { titre: "Réexposition", md: "Les deux thèmes **reviennent**, presque comme au début, cette fois dans la tonalité principale." }, { titre: "Coda", md: "Une conclusion, parfois longue, qui affirme la fin." }] },
            { t: "verifie", q: "Tu entends les deux thèmes du début revenir, presque comme au départ, après un passage agité où ils étaient transformés. Où es-tu ?", choix: ["L'exposition", "Le développement", "La réexposition", "L'introduction"], bonne: 2, explication: "Le passage agité était le développement ; le retour des thèmes, c'est la réexposition." },
          ],
        },
        {
          titre: "Lire une partition : mesure, armure, altérations",
          blocs: [
            { t: "propriete", titre: "La mesure", md: "La **mesure** découpe le temps en groupes réguliers. Le **chiffre du haut** donne le **nombre de temps** : **4/4** (quatre temps), **3/4** (trois temps, la valse), **2/4** (deux temps, la marche). Le chiffre 4 du bas indique que l'unité de temps est la **noire** : en 4/4, on peut placer au maximum **4 noires** par mesure." },
            { t: "schema", titre: "Une portée annotée", legende: "Les dièses de l'armure valent pour tout le morceau ; les altérations placées devant une note ne valent que dans sa mesure.", svg: `<svg viewBox="0 0 400 190"><g class="trait-fin"><line x1="20" y1="80" x2="380" y2="80"/><line x1="20" y1="92" x2="380" y2="92"/><line x1="20" y1="104" x2="380" y2="104"/><line x1="20" y1="116" x2="380" y2="116"/><line x1="20" y1="128" x2="380" y2="128"/><line x1="300" y1="80" x2="300" y2="128"/><line x1="374" y1="80" x2="374" y2="128"/></g><line class="trait" x1="379" y1="80" x2="379" y2="128" stroke-width="3"/><path class="trait" fill="none" d="M44 148 Q36 152 37 143 Q39 137 45 140 M44 146 L48 62 Q50 52 44 58 Q36 70 42 86 Q53 100 53 112 Q50 126 40 126 Q30 122 34 110 Q40 102 48 110"/><text class="texte" x="66" y="85" font-size="18" text-anchor="middle">♯</text><text class="texte" x="80" y="103" font-size="18" text-anchor="middle">♯</text><text class="texte" x="104" y="102" font-size="17" text-anchor="middle" font-weight="bold">4</text><text class="texte" x="104" y="126" font-size="17" text-anchor="middle" font-weight="bold">4</text><g fill="var(--encre)"><ellipse cx="150" cy="116" rx="6.5" ry="5"/><ellipse cx="196" cy="104" rx="6.5" ry="5"/><ellipse cx="240" cy="104" rx="6.5" ry="5"/><ellipse cx="276" cy="80" rx="6.5" ry="5"/></g><g class="trait"><line x1="156" y1="116" x2="156" y2="82"/><line x1="190" y1="104" x2="190" y2="138"/><line x1="234" y1="104" x2="234" y2="138"/><line x1="270" y1="80" x2="270" y2="114"/></g><ellipse class="trait" fill="none" cx="338" cy="98" rx="8" ry="5.5"/><text class="texte" x="182" y="109" font-size="16" text-anchor="middle">♭</text><text class="texte" x="226" y="110" font-size="16" text-anchor="middle">♮</text><g class="texte-petit" text-anchor="middle"><text x="73" y="58">armure</text><text x="276" y="58">fa♯ (armure)</text><text x="104" y="160">4/4 : 4 temps</text><text x="182" y="160">bémol</text><text x="230" y="160">bécarre</text><text x="338" y="160">ronde : 4 temps</text><text x="42" y="178">clé de sol</text></g></svg>` },
            { t: "definition", terme: "Armure et altérations", md: "Le **dièse** (♯) **monte** la note d'un demi-ton, le **bémol** (♭) la **baisse** d'un demi-ton, le **bécarre** (♮) **annule** l'altération. L'**armure** est l'ensemble des dièses ou des bémols placés au début de chaque portée : ils valent pour tout le morceau." },
            { t: "astuce", md: "Ordre des dièses à l'armure : **fa, do, sol, ré, la, mi, si**. Récite-le comme une formule, « fa-do-sol-ré-la-mi-si » : chaque dièse est une **quinte** au-dessus du précédent (fa, sol, la, si, **do**…). Pour les bémols, c'est l'ordre inverse : **si, mi, la, ré, sol, do, fa**." },
            { t: "verifie", q: "Dans une mesure à 4/4, combien de noires peut-on placer au maximum ?", choix: ["2", "3", "4", "8"], bonne: 2, explication: "4/4 signifie quatre temps par mesure, et la noire vaut un temps : 4 noires au maximum (ou une ronde, ou 8 croches)." },
          ],
        },
      ],
      bilan: "Timbre, nuances et texture décrivent ce que tu entends ; forme sonate, mesure et armure t'aident à suivre et à lire comment c'est construit.",
    },
    "4e-education-musicale-06-voix-projet": {
      accroche: "Vers 13 ou 14 ans, certains garçons ont soudain une voix qui « déraille » au milieu d'une phrase. Ce n'est pas une maladie : c'est la mue. Ta voix est un instrument qui grandit avec toi, et qui sonne encore mieux à plusieurs.",
      objectifs: [
        "Connaître tessiture, registres et les quatre voix du chœur",
        "Monter un canon et une polyphonie dans un projet musical",
        "Comprendre les droits liés à la musique : SACEM, plagiat, streaming",
      ],
      sections: [
        {
          titre: "Les voix du chœur",
          blocs: [
            { t: "definition", terme: "Tessiture et registres", md: "La **tessiture** est l'ensemble des notes qu'une voix peut chanter **confortablement**, sans forcer. Les **registres** sont les zones de la voix : la **voix de poitrine** (grave, pleine) et la **voix de tête** (aiguë, légère)." },
            { t: "schema", titre: "Les tessitures du chœur mixte", legende: "Les voix se chevauchent. Ordre de l'aiguë à la grave : soprano, alto, ténor, basse (SATB).", svg: `<svg viewBox="0 0 400 200"><rect class="aplat-fort" x="200" y="22" width="140" height="22"/><rect class="aplat-fort" x="153" y="54" width="140" height="22"/><rect class="aplat" x="120" y="86" width="140" height="22"/><rect class="aplat" x="67" y="118" width="160" height="22"/><g class="trait-fin" fill="none"><rect x="200" y="22" width="140" height="22"/><rect x="153" y="54" width="140" height="22"/><rect x="120" y="86" width="140" height="22"/><rect x="67" y="118" width="160" height="22"/></g><g class="texte" text-anchor="end"><text x="194" y="38">Soprano</text><text x="147" y="70">Alto</text><text x="114" y="102">Ténor</text><text x="61" y="134">Basse</text></g><line class="trait" x1="30" y1="160" x2="384" y2="160" marker-end="url(#fl)"/><g class="trait-fin"><line x1="40" y1="156" x2="40" y2="164"/><line x1="120" y1="156" x2="120" y2="164"/><line x1="200" y1="156" x2="200" y2="164"/><line x1="280" y1="156" x2="280" y2="164"/><line x1="360" y1="156" x2="360" y2="164"/></g><g class="texte-petit" text-anchor="middle"><text x="40" y="177">do2</text><text x="120" y="177">do3</text><text x="200" y="177">do4</text><text x="280" y="177">do5</text><text x="360" y="177">do6</text></g><text class="texte-main" x="30" y="196">grave</text><text class="texte-main" x="384" y="196" text-anchor="end">aigu</text></svg>` },
            { t: "texte", md: "Les **sopranos** et les **altos** sont des voix de femmes ou d'enfants ; les **ténors** et les **basses** des voix d'hommes. Un chœur mixte classique compte donc **quatre pupitres** : on l'écrit **SATB**. Le ténor est la voix d'homme la plus aiguë." },
            { t: "attention", md: "À l'adolescence, la voix des garçons **mue** : le larynx grandit et la voix **descend d'environ une octave**. Pendant quelques mois, elle peut être instable. Celle des filles change aussi, plus légèrement. On continue de chanter, sans forcer, dans la zone qui reste confortable." },
            { t: "verifie", q: "Range ces voix de la plus aiguë à la plus grave : quelle liste est juste ?", choix: ["Alto, soprano, basse, ténor", "Soprano, alto, ténor, basse", "Ténor, soprano, alto, basse"], bonne: 1, explication: "Soprano (aiguë de femme), alto (grave de femme), ténor (aiguë d'homme), basse (grave d'homme)." },
          ],
        },
        {
          titre: "Chanter à plusieurs voix : le canon",
          blocs: [
            { t: "definition", terme: "Canon, unisson, a cappella", md: "Dans un **canon**, tous chantent **la même mélodie**, mais **en décalé** : chaque groupe entre à son tour. C'est la polyphonie la plus simple à mettre en place. À l'**unisson**, au contraire, tous chantent exactement la même chose en même temps. Chanter **a cappella**, c'est chanter sans accompagnement instrumental." },
            { t: "schema", titre: "Un canon à trois voix", legende: "La même mélodie (phrases A, B, C, D) entre en décalé : à chaque instant, on entend trois phrases différentes superposées.", svg: `<svg viewBox="0 0 400 170"><g class="pointille"><line x1="120" y1="24" x2="120" y2="150"/><line x1="170" y1="24" x2="170" y2="150"/></g><g class="texte-petit" text-anchor="middle"><text x="116" y="16">entrée 2</text><text x="176" y="16">entrée 3</text></g><g stroke="var(--encre)" stroke-width="1"><rect class="aplat-fort" x="70" y="30" width="50" height="28"/><rect class="aplat" x="120" y="30" width="50" height="28"/><rect class="aplat-papier" x="170" y="30" width="50" height="28"/><rect class="aplat" x="220" y="30" width="50" height="28"/><rect class="aplat-fort" x="120" y="74" width="50" height="28"/><rect class="aplat" x="170" y="74" width="50" height="28"/><rect class="aplat-papier" x="220" y="74" width="50" height="28"/><rect class="aplat" x="270" y="74" width="50" height="28"/><rect class="aplat-fort" x="170" y="118" width="50" height="28"/><rect class="aplat" x="220" y="118" width="50" height="28"/><rect class="aplat-papier" x="270" y="118" width="50" height="28"/><rect class="aplat" x="320" y="118" width="50" height="28"/></g><g class="texte" text-anchor="middle"><text x="95" y="49">A</text><text x="145" y="49">B</text><text x="195" y="49">C</text><text x="245" y="49">D</text><text x="145" y="93">A</text><text x="195" y="93">B</text><text x="245" y="93">C</text><text x="295" y="93">D</text><text x="195" y="137">A</text><text x="245" y="137">B</text><text x="295" y="137">C</text><text x="345" y="137">D</text></g><g class="texte"><text x="10" y="49">Voix 1</text><text x="10" y="93">Voix 2</text><text x="10" y="137">Voix 3</text></g></svg>` },
            { t: "exemple", titre: "Monter un canon à trois voix", etapes: ["Toute la classe apprend d'abord la mélodie à l'unisson, jusqu'à la connaître par cœur.", "On divise en trois groupes.", "Le groupe 2 démarre quand le groupe 1 arrive au repère 2 ; le groupe 3 au repère 3.", "Chacun écoute les autres sans se laisser entraîner, et garde sa propre ligne."] },
            { t: "verifie", q: "Dans un canon à trois voix, ton groupe entre en troisième. Quel est le principal piège ?", choix: ["Chanter trop juste", "Se laisser entraîner par la mélodie des autres groupes et perdre sa partie", "Connaître la mélodie par cœur", "Regarder le chef"], bonne: 1, explication: "Quand les autres chantent une autre phrase que toi, il est tentant de les suivre. Il faut bien connaître la mélodie et écouter l'ensemble tout en tenant sa ligne." },
          ],
        },
        {
          titre: "Construire un projet musical",
          blocs: [
            { t: "etapes", titre: "Du choix du chant au concert", items: [{ titre: "Choisir le répertoire", md: "Des chants adaptés aux voix et au projet." }, { titre: "S'échauffer", md: "Le corps, le souffle, puis la voix." }, { titre: "Apprendre chaque voix", md: "Pupitre par pupitre, séparément." }, { titre: "Superposer", md: "Mettre en place la polyphonie." }, { titre: "Interpréter", md: "Travailler les nuances, les intentions, le phrasé." }, { titre: "Se produire", md: "Chanter devant un public." }] },
            { t: "astuce", md: "Pendant l'échauffement, commence toujours par le **corps** (épaules, posture) et le **souffle** (expirer longtemps sur « sss ») avant la voix. Une voix chauffée progressivement ne se fatigue pas." },
          ],
        },
        {
          titre: "La musique a des droits",
          blocs: [
            { t: "propriete", titre: "Le droit d'auteur en musique", md: "Une chanson appartient à ses **auteurs** (paroles), **compositeurs** (musique) et **éditeurs**. En France, la **SACEM**, créée en **1851**, collecte les droits quand une musique est jouée en public, diffusée à la radio ou écoutée en **streaming**, et les leur reverse." },
            { t: "savais-tu", md: "La SACEM est née d'une colère : en 1847, dans un café-concert parisien, le compositeur Ernest Bourget refuse de payer sa consommation, puisque l'orchestre joue sa musique sans le payer. Il gagne son procès." },
            { t: "tableau", titre: "Trois situations", entetes: ["Situation", "Ce que dit le droit"], lignes: [["**Plagiat**", "Copier l'œuvre d'un autre et la faire passer pour la sienne est interdit, même s'il ne s'agit que de **quelques mesures** reconnaissables."], ["**Streaming légal**", "Les artistes touchent une **petite somme à chaque écoute**, reversée via les droits (quelques dixièmes de centime, à partager)."], ["**Sampling**", "Réutiliser un extrait d'un enregistrement exige l'autorisation des ayants droit."]] },
            { t: "verifie", q: "Tu écoutes une chanson sur une plateforme de streaming légale. Que se passe-t-il pour les artistes ?", choix: ["Rien, c'est gratuit pour tout le monde", "Ils touchent une petite somme à chaque écoute, reversée via les droits", "Ils perdent de l'argent à chaque écoute"], bonne: 1, explication: "Chaque écoute génère une petite rémunération partagée entre les ayants droit. Elle est très faible par écoute, d'où l'importance du nombre d'écoutes." },
          ],
        },
      ],
      bilan: "Connaître ta voix, écouter celle des autres en polyphonie et respecter le travail des créateurs : chanter ensemble, c'est aussi une affaire de confiance.",
    },
  },
};
