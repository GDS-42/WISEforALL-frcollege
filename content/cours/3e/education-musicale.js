// Cours ÉCLORE — 3e Éducation musicale. Schéma : docs/COURS.md
export default {
  id: "3e-education-musicale",
  chapitres: {
    "3e-education-musicale-01-musique-engagement": {
      accroche: "En 1954, une chanson douce, presque une berceuse, est interdite à la radio française. Son crime ? Un homme y explique tranquillement au président qu'il refuse d'aller à la guerre. Comment quelques notes et quelques mots peuvent-ils inquiéter un gouvernement ?",
      objectifs: [
        "Identifier des chansons engagées et leur contexte : Vian, Dylan, Simone, Ferrat, rap conscient",
        "Distinguer hymne, chant de résistance et musique de propagande",
        "Analyser comment paroles et musique construisent ensemble un message",
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'une chanson engagée ?",
          blocs: [
            { t: "definition", terme: "Chanson engagée", md: "Une chanson qui **prend position** sur un sujet de société : guerre, racisme, injustice, liberté. Le message passe par les **paroles**, mais aussi par la **musique** : tempo, caractère de la voix, instruments, répétitions." },
            { t: "texte", md: "**Boris Vian** écrit *Le Déserteur* en **1954**, au moment de la défaite française en Indochine et juste avant la guerre d'Algérie. La chanson prend la forme d'une **lettre ouverte** au président de la République : le narrateur a reçu ses papiers militaires et refuse de partir tuer. Jugée antimilitariste, elle est **interdite d'antenne** à la radio." },
            { t: "exemple", titre: "Le message naît d'un contraste", md: "Dans *Le Déserteur*, on entend une voix calme, une **mélodie simple**, un rythme balancé proche d'une **valse lente**, presque une berceuse. Le propos, lui, est radical. Ce **contraste** entre la douceur de la musique et la violence du refus rend la chanson plus forte : le narrateur n'est pas un excité, c'est un homme paisible qui dit non." },
            { t: "verifie", q: "Pourquoi la musique douce du *Déserteur* renforce-t-elle son message ?", choix: ["Elle fait oublier les paroles", "Le contraste avec la violence du refus rend celui-ci plus frappant", "Elle prouve que la chanson est une comptine pour enfants"], bonne: 1, explication: "Une mélodie paisible au service d'un refus radical crée un écart : l'auditeur est surpris et prend le message au sérieux. L'engagement passe aussi par la musique." },
          ],
        },
        {
          titre: "Chanter pour les droits, chanter pour la mémoire",
          blocs: [
            { t: "texte", md: "Aux États-Unis, les années 1960 sont celles du **mouvement des droits civiques**, qui lutte pour l'égalité des Noirs américains. **Bob Dylan**, seul avec sa guitare et son harmonica, pose des questions sans réponse dans *Blowin' in the Wind* (1962). **Nina Simone**, pianiste et chanteuse, compose *Mississippi Goddam* (1964) après des meurtres racistes : sous un air presque joyeux, une colère immense.\n\nEn France, **Jean Ferrat** chante la mémoire des déportés dans *Nuit et Brouillard* (1963) ; son père est mort à Auschwitz." },
            { t: "texte", md: "Le **rap conscient** prend le relais : Public Enemy aux États-Unis, **IAM**, **NTM** ou **Kery James** en France. Ils dénoncent les discriminations, les violences, la vie dans les quartiers populaires. Ici, le **texte** et le **flow** (la manière de poser les mots sur le rythme) comptent plus que la mélodie chantée." },
            { t: "frise", titre: "Chants qui ont pris parti", evenements: [{ date: 1792, label: "*La Marseillaise*", detail: "Rouget de Lisle, Strasbourg." }, { date: 1941, label: "*Maréchal, nous voilà !*", detail: "Chant de propagande du régime de Vichy." }, { date: 1943, label: "*Le Chant des partisans*", detail: "Anna Marly, Joseph Kessel et Maurice Druon, à Londres." }, { date: 1954, label: "*Le Déserteur*", detail: "Boris Vian ; interdit d'antenne." }, { date: 1962, label: "*Blowin' in the Wind*", detail: "Bob Dylan." }, { date: 1963, label: "*Nuit et Brouillard*", detail: "Jean Ferrat." }, { date: 1964, label: "*Mississippi Goddam*", detail: "Nina Simone." }, { date: 1989, label: "*Fight the Power*", detail: "Public Enemy, rap conscient." }] },
          ],
        },
        {
          titre: "Hymne, propagande, résistance",
          blocs: [
            { t: "texte", md: "Toutes les musiques politiques ne jouent pas le même rôle. Un **hymne** rassemble une communauté autour de valeurs communes. *La Marseillaise*, composée en **1792** par **Rouget de Lisle** pour l'armée du Rhin, devient l'hymne national. L'**Hymne à la joie**, final de la *Neuvième Symphonie* de **Beethoven** (1824), est l'hymne de l'Europe." },
            { t: "citation", texte: "Allons enfants de la Patrie,\nLe jour de gloire est arrivé !", auteur: "Claude Joseph Rouget de Lisle", source: "*La Marseillaise*, 1792" },
            { t: "tableau", titre: "Quatre fonctions de la musique politique", entetes: ["Type", "Rôle", "Exemple"], lignes: [["**Hymne**", "Rassembler une nation, une communauté", "*La Marseillaise* ; *Hymne à la joie*"], ["**Propagande**", "Servir un pouvoir, glorifier un chef", "*Maréchal, nous voilà !* (Vichy, 1941)"], ["**Résistance**", "S'opposer à l'occupant, donner du courage", "*Le Chant des partisans* (1943), *Bella ciao*"], ["**Chanson engagée**", "Critiquer, alerter, faire réfléchir", "*Le Déserteur*, *Mississippi Goddam*"]] },
            { t: "attention", md: "Ce qui distingue la propagande, ce n'est pas la qualité de la musique : c'est qu'elle **sert un pouvoir en place** et cherche l'obéissance. La chanson engagée, elle, est souvent **contre** le pouvoir et invite à penser par soi-même." },
            { t: "verifie", q: "Quelle chanson est un chant de résistance de la Seconde Guerre mondiale ?", choix: ["*Maréchal, nous voilà !*", "*Le Chant des partisans*", "*Blowin' in the Wind*"], bonne: 1, explication: "*Le Chant des partisans*, écrit à Londres en 1943, est diffusé par la radio de la France libre. *Maréchal, nous voilà !* est au contraire un chant de propagande de Vichy." },
          ],
        },
        {
          titre: "Engagée sans paroles ?",
          blocs: [
            { t: "propriete", titre: "Comment une musique s'engage", md: "Une musique peut être engagée par ses **paroles**, mais aussi par son **titre**, son **contexte** (où et quand elle est jouée) et ses **choix musicaux** (contraste, répétition obstinée, dissonance, silence)." },
            { t: "savais-tu", md: "En 1969, au festival de Woodstock, Jimi Hendrix joue l'hymne américain à la guitare électrique saturée. Au milieu, la guitare imite des bombes et des sirènes : sans un mot, beaucoup y entendent une protestation contre la guerre du Vietnam." },
            { t: "astuce", md: "Pour analyser une chanson engagée, remplis trois colonnes : **ce que disent les paroles**, **ce que fait la musique**, **le contexte**. Le message apparaît souvent là où les colonnes se rencontrent… ou se contredisent." },
          ],
        },
      ],
      bilan: "Hymne, propagande, résistance ou chanson engagée : la musique prend parti avec ses mots, ses notes et son contexte, et c'est souvent du contraste entre les trois que naît sa force.",
    },
    "3e-education-musicale-02-musique-guerre-memoire": {
      accroche: "Un compositeur prisonnier écrit un chef-d'œuvre pour les seuls instruments qu'il trouve dans son camp. Un autre compose sous les bombes d'une ville assiégée. Un troisième fait jouer à un violon la voix d'une rescapée de la Shoah. Comment la musique raconte-t-elle la guerre ?",
      objectifs: [
        "Situer des œuvres majeures liées aux guerres du XXe siècle : Chostakovitch, Messiaen, Penderecki, Reich",
        "Reconnaître les procédés qui évoquent la guerre : ostinato, crescendo, cluster, voix enregistrées",
        "Connaître les chants de soldats et la place du jazz pendant la Seconde Guerre mondiale",
      ],
      sections: [
        {
          titre: "Composer pendant la guerre",
          blocs: [
            { t: "texte", md: "En **1941**, **Dmitri Chostakovitch** compose sa *Symphonie n° 7*, dite **« Leningrad »**, pendant le siège de sa ville par l'armée allemande. Le premier mouvement contient le **thème de l'invasion** : une petite marche presque banale, répétée une douzaine de fois sur un **ostinato** de caisse claire, de plus en plus fort et avec de plus en plus d'instruments. En 1942, la symphonie est jouée dans Leningrad assiégée par des musiciens affamés : un acte de résistance." },
            { t: "texte", md: "La même année, **Olivier Messiaen**, prisonnier au **Stalag VIII-A de Görlitz**, compose le *Quatuor pour la fin du Temps*. Il écrit pour les musiciens présents dans le camp : **violon, clarinette, violoncelle et piano**. L'œuvre est créée en janvier 1941 devant des centaines de prisonniers, dans le froid." },
            { t: "verifie", q: "Pourquoi le *Quatuor pour la fin du Temps* a-t-il une formation si inhabituelle ?", choix: ["Messiaen l'a écrite pour les musiciens prisonniers avec lui", "C'était la mode en 1941", "Un orchestre l'avait commandée"], bonne: 0, explication: "Prisonnier au Stalag VIII-A, Messiaen compose pour les instrumentistes du camp : un violoniste, un clarinettiste, un violoncelliste, et lui-même au piano." },
          ],
        },
        {
          titre: "Les procédés qui évoquent la guerre",
          blocs: [
            { t: "definition", terme: "Ostinato", md: "Un **motif rythmique ou mélodique répété obstinément**, sans changer. Il peut évoquer une marche militaire, une machine, une menace qui avance." },
            { t: "schema", titre: "Le thème de l'invasion : ostinato + crescendo", legende: "Le motif ne change pas ; ce qui change, c'est la nuance et le nombre d'instruments. L'effet : une machine de guerre qui grossit jusqu'à tout écraser.", svg: `<svg viewBox="0 0 400 230"><text class="texte-petit" x="40" y="28">ostinato de caisse claire (le même motif répété)</text><g class="trait-fin"><rect x="40" y="38" width="36" height="18"/><rect x="82" y="38" width="36" height="18"/><rect x="124" y="38" width="36" height="18"/><rect x="166" y="38" width="36" height="18"/><rect x="208" y="38" width="36" height="18"/><rect x="250" y="38" width="36" height="18"/><rect x="292" y="38" width="36" height="18"/><rect x="334" y="38" width="36" height="18"/></g><g class="aplat-fort"><circle cx="48" cy="47" r="3"/><circle cx="56" cy="47" r="3"/><circle cx="68" cy="47" r="3"/><circle cx="90" cy="47" r="3"/><circle cx="98" cy="47" r="3"/><circle cx="110" cy="47" r="3"/><circle cx="132" cy="47" r="3"/><circle cx="140" cy="47" r="3"/><circle cx="152" cy="47" r="3"/><circle cx="174" cy="47" r="3"/><circle cx="182" cy="47" r="3"/><circle cx="194" cy="47" r="3"/><circle cx="216" cy="47" r="3"/><circle cx="224" cy="47" r="3"/><circle cx="236" cy="47" r="3"/><circle cx="258" cy="47" r="3"/><circle cx="266" cy="47" r="3"/><circle cx="278" cy="47" r="3"/><circle cx="300" cy="47" r="3"/><circle cx="308" cy="47" r="3"/><circle cx="320" cy="47" r="3"/><circle cx="342" cy="47" r="3"/><circle cx="350" cy="47" r="3"/><circle cx="362" cy="47" r="3"/></g><path class="trait" d="M370 82 L40 100 L370 118"/><text class="texte-main" x="22" y="106">pp</text><text class="texte-main" x="376" y="106">ff</text><text class="texte-pigment" x="200" y="140" text-anchor="middle">crescendo</text><g class="aplat"><rect x="44" y="204" width="28" height="8"/><rect x="86" y="196" width="28" height="16"/><rect x="128" y="186" width="28" height="26"/><rect x="170" y="176" width="28" height="36"/><rect x="212" y="166" width="28" height="46"/><rect x="254" y="160" width="28" height="52"/><rect x="296" y="154" width="28" height="58"/><rect x="338" y="148" width="28" height="64"/></g><path class="trait-fin" d="M40 212 L372 212"/><text class="texte-petit" x="40" y="226">de plus en plus d'instruments à chaque répétition</text></svg>` },
            { t: "texte", md: "En **1960**, **Krzysztof Penderecki** écrit la *Thrénodie à la mémoire des victimes d'Hiroshima* pour **52 instruments à cordes**. Pas de mélodie : des **clusters** (grappes de notes voisines jouées ensemble), des **glissandos** (glissements continus de hauteur) et des bruits de frottement. On entend une plainte, des sirènes, un cri collectif." },
            { t: "tableau", titre: "Reconnaître les procédés à l'oreille", entetes: ["Procédé", "Ce que l'on entend", "Effet"], lignes: [["**Ostinato**", "Un motif qui revient sans cesse", "Marche, obsession, menace"], ["**Crescendo**", "De plus en plus fort", "Montée de tension, invasion"], ["**Cluster**", "Une grappe de notes serrées, dissonante", "Douleur, chaos"], ["**Glissando**", "Le son glisse vers l'aigu ou le grave", "Sirène, chute, plainte"], ["**Voix enregistrées**", "Paroles de témoins mêlées aux instruments", "Témoignage, mémoire"]] },
            { t: "verifie", q: "Le thème de l'invasion est répété douze fois, de plus en plus fort et avec de plus en plus d'instruments. Quel procédé reconnais-tu ?", choix: ["Un glissando", "Un crescendo sur un ostinato", "Un cluster"], bonne: 1, explication: "Le motif répété est un ostinato ; l'augmentation progressive de l'intensité est un crescendo. Ensemble, ils donnent l'image d'une armée qui approche." },
          ],
        },
        {
          titre: "Quand la voix devient musique : *Different Trains*",
          blocs: [
            { t: "texte", md: "En **1988**, l'Américain **Steve Reich** compose *Different Trains* pour **quatuor à cordes et bande enregistrée**. Enfant, entre 1939 et 1942, il voyageait en train entre New York et Los Angeles. Au même moment, en Europe, des enfants juifs comme lui partaient en train vers les camps. Il enregistre sa gouvernante, un ancien contrôleur et des **rescapés de la Shoah**." },
            { t: "exemple", titre: "Une phrase devient mélodie", md: "Une survivante dit « *the Germans walked in* » (« les Allemands sont entrés »). Reich note la **hauteur** et le **rythme** de cette phrase parlée et les fait **rejouer exactement** par un instrument du quatuor. La voix humaine devient musique, et la musique devient **témoignage**." },
            { t: "savais-tu", md: "Les sirènes de *Different Trains* ne sont pas jouées par les instruments : ce sont de vrais enregistrements de sirènes de train, mêlés au quatuor." },
          ],
        },
        {
          titre: "Chants de soldats, jazz interdit, musique de mémoire",
          blocs: [
            { t: "texte", md: "Les soldats chantent : *La Madelon* (1914), joyeuse, remonte le moral. *La Chanson de Craonne* (1917), chantée par les **mutins** après l'offensive meurtrière du Chemin des Dames, dénonce le sacrifice des « pauvres troufions » : elle est **interdite**. *Lili Marleen*, enregistrée en 1939, est chantée **des deux côtés du front**, en allemand comme en anglais.\n\nLes nazis interdisent le **jazz**, né de musiciens noirs américains, qu'ils qualifient de « **musique dégénérée** » par racisme. En France occupée, les **zazous** l'écoutent par défi et le guitariste **Django Reinhardt** triomphe à Paris ; Glenn Miller fait danser les soldats alliés." },
            { t: "frise", titre: "Musique, guerre et mémoire", evenements: [{ date: 1914, label: "*La Madelon*" }, { date: 1917, label: "*La Chanson de Craonne*", detail: "Chanson des mutins, interdite." }, { date: 1939, label: "*Lili Marleen*" }, { date: 1941, label: "Messiaen, Chostakovitch", detail: "*Quatuor pour la fin du Temps* ; *Symphonie « Leningrad »*." }, { date: 1960, label: "Penderecki, *Thrénodie*" }, { date: 1962, label: "Britten, *War Requiem*", detail: "Pour la cathédrale reconstruite de Coventry." }, { date: 1988, label: "Reich, *Different Trains*" }, { date: 1993, label: "Williams, *La Liste de Schindler*", detail: "Musique de film, violon solo." }] },
            { t: "propriete", titre: "Musique de mémoire", md: "Une œuvre de **mémoire** aide une société à se souvenir des victimes. Elle utilise souvent la **lenteur**, le **silence**, une **voix soliste** ou des **témoignages** réels plutôt que l'éclat héroïque." },
          ],
        },
      ],
      bilan: "Ostinato qui avance, crescendo qui écrase, clusters qui hurlent, voix de témoins : la musique du XXe siècle a trouvé ses propres moyens pour dire la guerre et garder la mémoire des victimes.",
    },
    "3e-education-musicale-03-musiques-xxe-xxie": {
      accroche: "Un bruit de train, découpé et monté sur bande, devient une œuvre. Deux personnes qui frappent dans leurs mains font naître des rythmes que personne n'a écrits. Une console de jeu à quatre sons fait chanter des millions de joueurs. Au XXe siècle, tout peut devenir musique.",
      objectifs: [
        "Identifier sérialisme, musique concrète, électroacoustique et minimalisme",
        "Connaître les pionniers des musiques électroniques et de la musique de jeu vidéo",
        "Comprendre comment la technique transforme la création musicale",
      ],
      sections: [
        {
          titre: "En finir avec la tonalité : le sérialisme",
          blocs: [
            { t: "texte", md: "Pendant trois siècles, la musique occidentale est **tonale** : elle tourne autour d'une note principale, comme do en do majeur, vers laquelle tout revient. Au début du XXe siècle, le Viennois **Arnold Schoenberg** abandonne ce centre : sa musique devient **atonale**.\n\nPour l'organiser, il invente vers **1923** le **dodécaphonisme**, ou **sérialisme**." },
            { t: "definition", terme: "Dodécaphonisme (sérialisme)", md: "Méthode de composition où les **douze notes** de la gamme chromatique (do, do♯, ré… jusqu'à si) sont rangées en une **série**. On n'en répète aucune avant d'avoir entendu les onze autres : **aucune note n'est plus importante** qu'une autre." },
            { t: "attention", md: "« Atonal » ne veut pas dire « faux » ni « au hasard ». Une série dodécaphonique est au contraire **très organisée** : on peut la jouer à l'envers, en miroir, transposée, selon des règles strictes." },
          ],
        },
        {
          titre: "Le son enregistré devient matériau",
          blocs: [
            { t: "texte", md: "En **1948**, à la radio française, l'ingénieur **Pierre Schaeffer** compose l'*Étude aux chemins de fer* : des sons de locomotives enregistrés sur disque, puis **découpés, répétés, inversés, accélérés et montés**. C'est la **musique concrète** : on part du son réel au lieu de l'écrire sur une partition. C'est l'**enregistrement** (disque, puis bande magnétique) qui la rend possible.\n\nAu même moment, à Cologne, **Karlheinz Stockhausen** fabrique des sons entièrement **électroniques**, avec des générateurs. L'**électroacoustique** réunit les deux : sons enregistrés et sons de synthèse." },
            { t: "frise", titre: "Inventions musicales des XXe et XXIe siècles", evenements: [{ date: 1923, label: "Dodécaphonisme", detail: "Arnold Schoenberg, Vienne." }, { date: 1948, label: "Musique concrète", detail: "Pierre Schaeffer, *Étude aux chemins de fer*." }, { date: 1953, label: "Musique électronique", detail: "Stockhausen, studio de Cologne." }, { date: 1964, label: "Minimalisme", detail: "Terry Riley, *In C*." }, { date: 1973, label: "Hip-hop", detail: "DJ Kool Herc, le Bronx." }, { date: 1974, label: "Électro-pop", detail: "Kraftwerk, *Autobahn*." }, { date: 1976, label: "*Oxygène*", detail: "Jean-Michel Jarre." }, { date: 1985, label: "Musique de jeu vidéo", detail: "Koji Kondo, *Super Mario Bros.*" }, { date: 1997, label: "French touch", detail: "Daft Punk, *Homework*." }] },
            { t: "verifie", q: "Qu'est-ce que la musique concrète de Pierre Schaeffer ?", choix: ["Une musique jouée sur des instruments en béton", "Une musique composée à partir de sons réels enregistrés et transformés", "Une musique écrite avec les douze notes"], bonne: 1, explication: "Schaeffer enregistre des bruits (trains, objets, voix) puis les découpe et les monte : le son concret devient la matière de l'œuvre." },
          ],
        },
        {
          titre: "Répéter pour transformer : le minimalisme",
          blocs: [
            { t: "texte", md: "Dans les années **1960**, aux États-Unis, des compositeurs prennent le contre-pied du sérialisme, très complexe. Le **minimalisme** répète de **courts motifs** qui **évoluent très lentement**. On l'écoute comme on regarde une vague : tout semble pareil, et pourtant tout change. **Terry Riley** (*In C*, 1964), **Steve Reich**, **Philip Glass** (*Einstein on the Beach*, 1976) en sont les pionniers." },
            { t: "schema", titre: "Le déphasage de *Clapping Music* (Reich, 1972)", legende: "Les deux interprètes frappent le même motif de 12 temps. Toutes les douze mesures, le second le décale d'un temps : en se superposant, les deux lignes créent un rythme nouveau.", svg: `<svg viewBox="0 0 400 200"><text class="texte-petit" x="100" y="54" text-anchor="end">Clap 1</text><rect class="aplat-fort" x="110" y="40" width="20" height="20"/><rect class="aplat-fort" x="133" y="40" width="20" height="20"/><rect class="aplat-fort" x="156" y="40" width="20" height="20"/><rect class="trait-fin" x="179" y="40" width="20" height="20"/><rect class="aplat-fort" x="202" y="40" width="20" height="20"/><rect class="aplat-fort" x="225" y="40" width="20" height="20"/><rect class="trait-fin" x="248" y="40" width="20" height="20"/><rect class="aplat-fort" x="271" y="40" width="20" height="20"/><rect class="trait-fin" x="294" y="40" width="20" height="20"/><rect class="aplat-fort" x="317" y="40" width="20" height="20"/><rect class="aplat-fort" x="340" y="40" width="20" height="20"/><rect class="trait-fin" x="363" y="40" width="20" height="20"/><text class="texte-petit" x="100" y="104" text-anchor="end">Clap 2 : début</text><rect class="aplat-fort" x="110" y="90" width="20" height="20"/><rect class="aplat-fort" x="133" y="90" width="20" height="20"/><rect class="aplat-fort" x="156" y="90" width="20" height="20"/><rect class="trait-fin" x="179" y="90" width="20" height="20"/><rect class="aplat-fort" x="202" y="90" width="20" height="20"/><rect class="aplat-fort" x="225" y="90" width="20" height="20"/><rect class="trait-fin" x="248" y="90" width="20" height="20"/><rect class="aplat-fort" x="271" y="90" width="20" height="20"/><rect class="trait-fin" x="294" y="90" width="20" height="20"/><rect class="aplat-fort" x="317" y="90" width="20" height="20"/><rect class="aplat-fort" x="340" y="90" width="20" height="20"/><rect class="trait-fin" x="363" y="90" width="20" height="20"/><text class="texte-petit" x="100" y="154" text-anchor="end">Clap 2 : décalé</text><rect class="aplat-fort" x="110" y="140" width="20" height="20"/><rect class="aplat-fort" x="133" y="140" width="20" height="20"/><rect class="trait-fin" x="156" y="140" width="20" height="20"/><rect class="aplat-fort" x="179" y="140" width="20" height="20"/><rect class="aplat-fort" x="202" y="140" width="20" height="20"/><rect class="trait-fin" x="225" y="140" width="20" height="20"/><rect class="aplat-fort" x="248" y="140" width="20" height="20"/><rect class="trait-fin" x="271" y="140" width="20" height="20"/><rect class="aplat-fort" x="294" y="140" width="20" height="20"/><rect class="aplat-fort" x="317" y="140" width="20" height="20"/><rect class="trait-fin" x="340" y="140" width="20" height="20"/><rect class="aplat-fort" x="363" y="140" width="20" height="20"/><text class="texte-petit" x="246" y="28" text-anchor="middle">case pleine = frappé, case vide = silence</text><text class="texte-pigment" x="246" y="186" text-anchor="middle">décalé d'un temps : un nouveau rythme naît</text></svg>` },
            { t: "exemple", titre: "Écouter un déphasage", md: "Dans *Clapping Music*, rien d'autre ne change que le **décalage**. Au début, les deux claps sont à l'unisson : on entend un seul rythme. Après le premier décalage, les frappes se croisent autrement : on entend des accents nouveaux. Après douze décalages, les deux lignes se retrouvent à l'unisson. C'est le **déphasage** (*phasing*), signature de Steve Reich." },
            { t: "verifie", q: "Quelle phrase décrit le minimalisme ?", choix: ["Une série de douze notes jamais répétées", "La répétition de courts motifs qui changent très progressivement", "Des sons de trains montés sur bande"], bonne: 1, explication: "Le minimalisme répète des motifs brefs et les transforme peu à peu (décalage, ajout d'une note). Les douze notes, c'est le sérialisme ; les trains, la musique concrète." },
          ],
        },
        {
          titre: "Machines, métissages et jeux vidéo",
          blocs: [
            { t: "texte", md: "Les **musiques électroniques populaires** s'emparent des machines : **synthétiseur**, **boîte à rythmes**, **sampler**, **vocoder** (qui transforme la voix en voix de robot). Les Allemands de **Kraftwerk** (*Autobahn*, 1974), le Français **Jean-Michel Jarre** (*Oxygène*, 1976), puis le duo **Daft Punk**, formé en 1993 (*Homework*, 1997 ; *Random Access Memories*, 2013) en font un langage mondial.\n\nLes **métissages** mêlent des traditions : Paul Simon et les chœurs zoulous de Ladysmith Black Mambazo (*Graceland*, 1986), Manu Chao, Rachid Taha (rock et raï), Gotan Project (tango et électro)." },
            { t: "tableau", titre: "Courants et figures clés", entetes: ["Courant", "Principe", "Compositeur emblématique"], lignes: [["Sérialisme", "Série de 12 notes, plus de tonalité", "Schoenberg"], ["Musique concrète", "Sons réels enregistrés et transformés", "Pierre Schaeffer"], ["Musique électronique", "Sons fabriqués par des machines", "Stockhausen"], ["Minimalisme", "Motifs répétés, évolution lente, déphasage", "Steve Reich, Philip Glass"], ["Électro populaire", "Synthés, boîtes à rythmes, vocoder", "Kraftwerk, Jarre, Daft Punk"], ["Musique de jeu vidéo", "Puces sonores, musique adaptative", "Koji Kondo"]] },
            { t: "definition", terme: "Musique adaptative", md: "Une musique de **jeu vidéo** qui **change en temps réel** selon les actions du joueur : elle accélère quand le temps presse, s'assombrit face au danger. Les premières musiques de jeu, jouées par les puces sonores 8 bits des consoles, ont donné un style : le **chiptune**." },
            { t: "savais-tu", md: "La célèbre musique de *Tetris* sur Game Boy est une vieille chanson populaire russe, *Korobeiniki*. Et quand le chronomètre de *Super Mario Bros.* (Koji Kondo, 1985) arrive à la fin, la musique accélère : un des premiers exemples de musique qui réagit au jeu." },
          ],
        },
      ],
      bilan: "Série de douze notes, sons enregistrés, machines, motifs répétés, puces de console : au XXe siècle, chaque nouvelle technique a ouvert une nouvelle façon de composer.",
    },
    "3e-education-musicale-04-musiques-populaires-industrie": {
      accroche: "Août 1973, dans le Bronx, à New York : un jeune DJ joue deux fois le même disque sur deux platines pour prolonger le passage où il n'y a que la batterie. Les danseurs deviennent fous. Ce soir-là naît une culture qui fera le tour du monde : le hip-hop.",
      objectifs: [
        "Reconnaître rock, soul, funk, reggae et hip-hop à leurs caractéristiques",
        "Comprendre les techniques du hip-hop : sampling, DJ, beatmaking",
        "Décrire l'industrie musicale : supports, streaming, droits d'auteur, festivals",
      ],
      sections: [
        {
          titre: "Du blues au rock, du gospel à la soul et au funk",
          blocs: [
            { t: "texte", md: "Presque toutes les musiques populaires du XXe siècle viennent des **musiques afro-américaines**. Dans les années **1950**, le **rock'n'roll** naît aux États-Unis du mélange du **blues** et de la **country** : guitare électrique, basse, batterie, tempo rapide, énergie (Chuck Berry, Elvis Presley).\n\nLa **soul** vient du **gospel** (chant religieux) et du rhythm and blues : voix puissantes et habitées (Aretha Franklin, Otis Redding, le label **Motown** à Detroit). Le **funk** de **James Brown** (années 1960-1970) met tout le poids sur le **premier temps** de la mesure, « *the One* », et fait de la **basse** et de la guitare rythmique des instruments de transe." },
            { t: "texte", md: "Le **reggae** naît en **Jamaïque** à la fin des années 1960. **Bob Marley** (1945-1981) le rend mondial. On le reconnaît à la guitare qui joue **sur les contretemps** (le *skank*), à la basse lourde et lente, et à des textes spirituels ou engagés (*Get Up, Stand Up*)." },
            { t: "tableau", titre: "Reconnaître les styles", entetes: ["Style", "Origine", "Signes distinctifs", "Artiste"], lignes: [["**Rock**", "États-Unis, 1950", "Guitare électrique, batterie, tempo vif", "Chuck Berry"], ["**Soul**", "États-Unis, 1960", "Voix gospel, cuivres, émotion", "Aretha Franklin"], ["**Funk**", "États-Unis, 1965", "Accent sur le 1er temps, basse en avant", "James Brown"], ["**Reggae**", "Jamaïque, fin 1960", "Guitare sur les contretemps, basse lourde", "Bob Marley"], ["**Hip-hop**", "Bronx, 1973", "Rap sur des boucles, DJ, samples", "Grandmaster Flash"], ["**K-pop**", "Corée du Sud, 1990-2000", "Groupes formés par des agences, chorégraphies", "BTS"]] },
          ],
        },
        {
          titre: "Le hip-hop : une culture née des platines",
          blocs: [
            { t: "texte", md: "Le hip-hop naît dans le **Bronx** vers **1973** avec **DJ Kool Herc**. Il compte **quatre piliers** : le **DJing** (le DJ fait tourner et mixe les disques), le **rap** ou *MCing* (le MC pose ses paroles sur le rythme), le **breakdance** et le **graffiti**. Le DJ des origines prolonge les *breaks*, ces passages de batterie seule, pour faire danser." },
            { t: "definition", terme: "Sampling", md: "**Prélever un extrait** d'un enregistrement existant (un *sample*) pour le **réutiliser** dans un nouveau morceau, souvent en **boucle**. Le **beatmaker** compose ainsi l'instrumental (le *beat*) sur lequel le rappeur pose sa voix." },
            { t: "schema", titre: "Boucle et sampling", legende: "On prélève deux secondes d'un vieux disque, on les répète en boucle, puis on ajoute une batterie et une voix : un nouveau morceau est né.", svg: `<svg viewBox="0 0 400 250"><circle class="aplat-fort" cx="55" cy="62" r="38"/><circle class="aplat-papier" cx="55" cy="62" r="9"/><circle class="trait-fin" cx="55" cy="62" r="26"/><text class="texte-petit" x="55" y="116" text-anchor="middle">disque d'origine</text><rect class="aplat" x="212" y="36" width="54" height="52"/><path class="trait-fin" d="M110 62 L118 50 L126 74 L134 54 L142 70 L150 44 L158 78 L166 56 L174 66 L182 48 L190 76 L198 58 L206 68 L214 42 L222 80 L230 52 L238 72 L246 46 L254 78 L262 56 L270 66 L278 50 L286 74 L294 58 L302 68 L310 52 L318 72 L326 60 L334 64 L342 54 L350 70 L358 60 L366 64 L374 62"/><text class="texte-pigment" x="239" y="28" text-anchor="middle">extrait de 2 s</text><path class="trait" d="M239 94 L239 128" marker-end="url(#fl)"/><g class="aplat"><rect x="70" y="140" width="62" height="30"/><rect x="138" y="140" width="62" height="30"/><rect x="206" y="140" width="62" height="30"/><rect x="274" y="140" width="62" height="30"/></g><g class="trait-fin"><rect x="70" y="140" width="62" height="30"/><rect x="138" y="140" width="62" height="30"/><rect x="206" y="140" width="62" height="30"/><rect x="274" y="140" width="62" height="30"/></g><text class="texte-petit" x="101" y="159" text-anchor="middle">sample</text><text class="texte-petit" x="169" y="159" text-anchor="middle">sample</text><text class="texte-petit" x="237" y="159" text-anchor="middle">sample</text><text class="texte-petit" x="305" y="159" text-anchor="middle">sample</text><path class="trait" d="M340 170 C380 212 30 212 64 174" marker-end="url(#fl-p)"/><text class="texte" x="200" y="224" text-anchor="middle">boucle (loop) répétée</text><text class="texte-petit" x="200" y="244" text-anchor="middle">+ batterie + voix rappée = nouveau morceau</text></svg>` },
            { t: "verifie", q: "Quel était le rôle du DJ dans le hip-hop des origines ?", choix: ["Écrire les paroles du rap", "Faire tourner et mixer les disques, prolonger les passages rythmiques pour les danseurs", "Peindre les graffitis"], bonne: 1, explication: "Avec deux platines, le DJ enchaîne et prolonge les breaks de batterie. Le MC rappe, les b-boys dansent, les graffeurs peignent : ce sont les quatre piliers." },
          ],
        },
        {
          titre: "Du vinyle au streaming : comment la musique circule",
          blocs: [
            { t: "frise", titre: "Les supports d'écoute", evenements: [{ date: 1948, label: "Disque vinyle 33 tours" }, { date: 1963, label: "Cassette audio" }, { date: 1982, label: "CD (disque compact)" }, { date: 1995, label: "Format MP3", detail: "La musique devient un fichier." }, { date: 2007, label: "Streaming", detail: "Deezer (2007), Spotify (2008)." }] },
            { t: "texte", md: "Avec le **streaming**, on n'achète plus un disque : on paie un abonnement, et la plateforme reverse aux ayants droit une **toute petite somme par écoute**, souvent une fraction de centime. Pour beaucoup d'artistes, ce sont donc les **concerts** et les **festivals** qui rapportent le plus : Woodstock (1969), les Vieilles Charrues à Carhaix, le Hellfest à Clisson." },
            { t: "savais-tu", md: "La **Fête de la musique** a été créée en France le **21 juin 1982**, jour du solstice d'été. Elle est aujourd'hui célébrée dans plus d'une centaine de pays." },
          ],
        },
        {
          titre: "Droits d'auteur : qui est payé, et quand peut-on sampler ?",
          blocs: [
            { t: "propriete", titre: "Le droit d'auteur en musique", md: "Le compositeur, l'auteur des paroles et l'éditeur touchent des **droits d'auteur** chaque fois que leur œuvre est diffusée (radio, streaming, concert, publicité). En France, la **SACEM**, fondée en **1851**, les collecte et les répartit. **Sampler sans autorisation est illégal** : chaque extrait doit être « clearé », c'est-à-dire autorisé et payé." },
            { t: "exemple", titre: "Le prix d'une ligne de basse", md: "*Rapper's Delight* (Sugarhill Gang, 1979), un des premiers tubes du rap, reprend, rejouée en studio, la ligne de basse de *Good Times* du groupe **Chic**. Ses auteurs, Nile Rodgers et Bernard Edwards, obtiennent d'être crédités et payés. En 1991, un tribunal américain condamne le rappeur Biz Markie pour un sample non autorisé : depuis, l'industrie fait systématiquement « clearer » les samples." },
            { t: "verifie", q: "Pourquoi beaucoup d'artistes gagnent-ils davantage avec les concerts qu'avec les ventes ?", choix: ["Parce que le streaming rapporte très peu par écoute", "Parce que les disques sont interdits", "Parce que la SACEM ne paie que les concerts"], bonne: 0, explication: "Une écoute en streaming ne rapporte qu'une fraction de centime aux ayants droit. Les billets de concert et de festival représentent donc une part essentielle des revenus." },
          ],
        },
      ],
      bilan: "Du blues naissent le rock, la soul et le funk ; des platines du Bronx naît le hip-hop ; et du vinyle au streaming, l'industrie change sans cesse, mais le droit d'auteur protège toujours les créateurs.",
    },
    "3e-education-musicale-05-analyser-oeuvre-musicale": {
      accroche: "Même texte, même mélodie, et pourtant deux émotions opposées : *Strange Fruit* chanté par Billie Holiday en 1939 ressemble à une plainte, repris par Nina Simone en 1965, il devient une colère froide. Pour expliquer ce qui change, il te faut des mots précis. Les voici.",
      objectifs: [
        "Utiliser le vocabulaire d'analyse : caractère, tempo, nuances, timbre, texture, forme",
        "Identifier une formation instrumentale ou vocale",
        "Construire une présentation orale d'œuvre et comparer deux versions",
      ],
      sections: [
        {
          titre: "Le temps et la force : tempo et nuances",
          blocs: [
            { t: "texte", md: "Avant de parler de mélodie, écoute deux paramètres simples : **la vitesse** et **la force**. Les musiciens les notent en **italien**, la langue des partitions depuis le XVIIe siècle." },
            { t: "graphique", type: "barres", titre: "Les indications de tempo, de la plus lente à la plus rapide (valeurs indicatives)", unite: "BPM", donnees: [{ label: "Largo", valeur: 50 }, { label: "Adagio", valeur: 70 }, { label: "Andante", valeur: 90 }, { label: "Moderato", valeur: 110 }, { label: "Allegro", valeur: 135 }, { label: "Presto", valeur: 180 }] },
            { t: "propriete", titre: "Les nuances", md: "Du plus doux au plus fort : **pp** (*pianissimo*), **p** (*piano*), **mp** (*mezzo piano*), **mf** (*mezzo forte*), **f** (*forte*), **ff** (*fortissimo*). Le **crescendo** : de plus en plus fort. Le **decrescendo** (ou diminuendo) : de moins en moins fort." },
            { t: "attention", md: "*Piano* sur une partition ne désigne pas l'instrument : cela veut dire **doux**. Et un tempo lent n'est pas forcément triste, ni un tempo rapide forcément joyeux : c'est le **caractère** d'ensemble qui le dit." },
          ],
        },
        {
          titre: "La couleur et l'épaisseur : timbre, texture, caractère",
          blocs: [
            { t: "definition", terme: "Timbre", md: "La **couleur** d'un son, ce qui permet de reconnaître un instrument ou une voix. Une flûte et une trompette jouant **la même note**, à la même force, ne se confondent pas : leur timbre diffère." },
            { t: "schema", titre: "Trois textures musicales", legende: "La texture, c'est la façon dont les lignes musicales se superposent : une seule ligne, une mélodie portée par des accords, ou plusieurs mélodies indépendantes.", svg: `<svg viewBox="0 0 400 220"><text class="texte" x="72" y="28" text-anchor="middle">Monodie</text><text class="texte" x="200" y="28" text-anchor="middle">Homophonie</text><text class="texte" x="328" y="28" text-anchor="middle">Polyphonie</text><path class="pointille" d="M136 40 L136 200 M264 40 L264 200"/><path d="M20 110 C35 80 50 130 70 100 S105 80 124 105" fill="none" stroke="var(--pigment)" stroke-width="2.4"/><path d="M148 70 C162 50 178 90 196 66 S232 54 252 72" fill="none" stroke="var(--pigment)" stroke-width="2.4"/><g class="aplat"><rect x="152" y="100" width="16" height="44"/><rect x="180" y="96" width="16" height="44"/><rect x="208" y="104" width="16" height="44"/><rect x="236" y="98" width="16" height="44"/></g><g class="trait-fin"><path d="M152 115 L168 115 M152 129 L168 129 M180 111 L196 111 M180 125 L196 125 M208 119 L224 119 M208 133 L224 133 M236 113 L252 113 M236 127 L252 127"/></g><path d="M276 70 C292 50 308 90 324 64 S360 56 382 70" fill="none" stroke="var(--pigment)" stroke-width="2.4"/><path class="trait" d="M276 112 C296 132 312 92 330 116 S362 128 382 104"/><path class="trait-fin" d="M276 150 C300 140 314 168 336 150 S368 140 382 158"/><text class="texte-petit" x="72" y="180" text-anchor="middle">une seule ligne</text><text class="texte-petit" x="72" y="194" text-anchor="middle">(chant grégorien)</text><text class="texte-petit" x="200" y="180" text-anchor="middle">mélodie + accords</text><text class="texte-petit" x="200" y="194" text-anchor="middle">(chanson accompagnée)</text><text class="texte-petit" x="328" y="180" text-anchor="middle">voix indépendantes</text><text class="texte-petit" x="328" y="194" text-anchor="middle">(canon, fugue)</text></svg>` },
            { t: "tableau", titre: "Le vocabulaire d'analyse", entetes: ["Paramètre", "Question à se poser", "Mots utiles"], lignes: [["**Caractère**", "Quelle impression ?", "martial, mélancolique, dansant, solennel, inquiétant"], ["**Tempo**", "Quelle vitesse ?", "largo, andante, allegro, presto ; accelerando"], ["**Nuances**", "Quelle force ?", "pp, p, mf, f, ff ; crescendo, decrescendo"], ["**Timbre**", "Quels instruments, quelles voix ?", "cordes, bois, cuivres, percussions ; voix de soprano…"], ["**Texture**", "Combien de lignes ?", "monodie, homophonie, polyphonie"], ["**Forme**", "Comment c'est construit ?", "couplet-refrain, ABA, rondo, thème et variations"]] },
            { t: "verifie", q: "Quel paramètre te permet de reconnaître qu'une même note est jouée par une flûte et non par une trompette ?", choix: ["Le tempo", "Le timbre", "La nuance"], bonne: 1, explication: "À hauteur, durée et force égales, c'est le timbre, la couleur propre du son, qui distingue les instruments." },
          ],
        },
        {
          titre: "Formes et formations",
          blocs: [
            { t: "texte", md: "La **forme** est le plan de l'œuvre. La plus courante en chanson est le **couplet-refrain** : les couplets changent de texte, le refrain revient identique. La forme **ABA** (ternaire) fait revenir la première partie après un contraste ; le **rondo** (A B A C A) fait revenir un refrain entre des épisodes ; le **thème et variations** transforme peu à peu une même mélodie.\n\nLa **formation**, c'est l'effectif qui joue." },
            { t: "tableau", titre: "Les formations à connaître", entetes: ["Formation", "Composition"], lignes: [["**Quatuor à cordes**", "2 violons, 1 alto, 1 violoncelle"], ["**Orchestre symphonique**", "4 familles : cordes, bois, cuivres, percussions"], ["**Big band** (jazz)", "Saxophones, trompettes, trombones, piano, contrebasse, batterie"], ["**Groupe rock**", "Guitares, basse, batterie, chant"], ["**Chœur mixte**", "4 pupitres : soprano, alto (voix de femmes), ténor, basse (voix d'hommes)"]] },
            { t: "exemple", titre: "Comparer deux versions de *Strange Fruit*", md: "**Billie Holiday (1939)** : voix et petit orchestre avec piano, tempo **lent**, nuance **piano**, caractère grave : une plainte.\n**Nina Simone (1965)** : piano et voix encore plus dépouillés, tempo plus lent, longs **silences** : la colère remplace la plainte.\n**Ce qui reste** : le texte, la mélodie. **Ce qui change** : le timbre, le tempo, le caractère. **Pourquoi ?** En 1965, en pleine lutte pour les droits civiques, la même chanson accuse plus qu'elle ne pleure." },
          ],
        },
        {
          titre: "Présenter une œuvre musicale à l'oral du DNB",
          blocs: [
            { t: "etapes", titre: "Construire ta présentation", items: [{ titre: "Identifier", md: "Titre, compositeur ou interprète, date, genre (chanson, symphonie, musique de film), formation." }, { titre: "Situer", md: "Le contexte historique et artistique : pourquoi cette œuvre à ce moment ?" }, { titre: "Faire entendre", md: "Un court **extrait** (enregistré ou chanté) que tu commentes." }, { titre: "Analyser", md: "Caractère, tempo, nuances, timbre, texture, forme : ce que l'on entend et l'effet produit." }, { titre: "Comparer et conclure", md: "Une autre version ou une autre œuvre ; ton avis argumenté." }] },
            { t: "propriete", titre: "Le cadre de l'oral", md: "Candidat seul : **5 minutes d'exposé** puis 10 minutes d'entretien, notés sur **100 points**. Le jury attend du **vocabulaire précis**, un **extrait sonore** commenté et un avis justifié." },
            { t: "verifie", q: "Tu compares l'original d'une chanson et sa reprise. Quelle remarque est la plus utile pour le jury ?", choix: ["« Je préfère la deuxième, elle est mieux. »", "« La reprise est plus lente et dépouillée : la chanson devient plus grave. »", "« Les deux versions durent environ trois minutes. »"], bonne: 1, explication: "La bonne remarque nomme un paramètre précis (tempo, timbre) et explique l'effet produit sur le sens. Un goût sans argument ou une durée n'apprennent rien au jury." },
          ],
        },
      ],
      bilan: "Caractère, tempo, nuances, timbre, texture, forme : six mots-clés pour entendre précisément, et une méthode pour expliquer pourquoi une même chanson peut changer de sens.",
    },
    "3e-education-musicale-06-voix-creation": {
      accroche: "Sur une simple boucle de batterie, ta classe peut créer un vrai morceau : une basse chantée, une mélodie en canon, un rap improvisé, le tout enregistré sur ordinateur. Mais pour en profiter longtemps, il faut aussi apprendre à protéger tes deux instruments les plus précieux : ta voix et tes oreilles.",
      objectifs: [
        "Chanter en polyphonie et improviser dans un cadre donné",
        "Utiliser les notions de base de la MAO : piste, boucle, effets, tempo",
        "Adopter une posture vocale saine et protéger son audition",
      ],
      sections: [
        {
          titre: "Chanter à plusieurs voix, improviser",
          blocs: [
            { t: "texte", md: "Chanter en **polyphonie**, c'est **tenir sa voix tout en écoutant les autres**. Le plus simple est le **canon** : tout le monde chante la même mélodie, mais en commençant à des moments différents (« Frère Jacques »). Dans l'**homorythmie**, toutes les voix ont le même rythme mais des notes différentes : on entend des accords." },
            { t: "definition", terme: "Improviser", md: "**Inventer de la musique en direct**, à l'intérieur d'un **cadre** fixé à l'avance : une gamme, une grille d'accords, un rythme, un nombre de mesures. Le jazz (le **scat**, improvisation vocale sur des syllabes sans sens), le blues et le rap (le **freestyle**) en ont fait un art." },
            { t: "astuce", md: "Pour improviser sans paniquer : commence par **deux ou trois notes** seulement, répète un petit motif, puis varie-le (plus aigu, plus long, décalé). Un cadre étroit libère l'imagination." },
          ],
        },
        {
          titre: "La MAO : un studio dans l'ordinateur",
          blocs: [
            { t: "texte", md: "**MAO** signifie **musique assistée par ordinateur**. Un logiciel appelé **séquenceur** (ou station audionumérique) organise le morceau en **pistes** horizontales, une par instrument ou par voix. Le temps se lit de gauche à droite, mesure par mesure. On y place des **boucles** (*loops*), courts motifs qui se répètent, et des enregistrements." },
            { t: "schema", titre: "Les pistes d'une station audionumérique", legende: "Chaque piste est une ligne ; le temps avance de gauche à droite. La tête de lecture montre où l'on en est.", svg: `<svg viewBox="0 0 400 240"><g class="texte-petit"><text x="127" y="24" text-anchor="middle">1</text><text x="162" y="24" text-anchor="middle">2</text><text x="197" y="24" text-anchor="middle">3</text><text x="232" y="24" text-anchor="middle">4</text><text x="267" y="24" text-anchor="middle">5</text><text x="302" y="24" text-anchor="middle">6</text><text x="337" y="24" text-anchor="middle">7</text><text x="372" y="24" text-anchor="middle">8</text></g><path class="trait-fin" d="M110 30 L390 30 M110 40 L390 40 M110 80 L390 80 M110 120 L390 120 M110 160 L390 160 M110 200 L390 200"/><path class="pointille" d="M145 30 L145 200 M180 30 L180 200 M215 30 L215 200 M250 30 L250 200 M285 30 L285 200 M320 30 L320 200 M355 30 L355 200"/><text class="texte-petit" x="10" y="64">Batterie (boucle)</text><text class="texte-petit" x="10" y="104">Groupe A : basse</text><text class="texte-petit" x="10" y="144">Groupe B : canon</text><text class="texte-petit" x="10" y="184">Rap improvisé</text><g class="aplat-fort"><rect x="112" y="46" width="31" height="28"/><rect x="147" y="46" width="31" height="28"/><rect x="182" y="46" width="31" height="28"/><rect x="217" y="46" width="31" height="28"/><rect x="252" y="46" width="31" height="28"/><rect x="287" y="46" width="31" height="28"/><rect x="322" y="46" width="31" height="28"/><rect x="357" y="46" width="31" height="28"/></g><g class="aplat"><rect x="112" y="86" width="136" height="28"/><rect x="252" y="86" width="136" height="28"/><rect x="182" y="126" width="206" height="28"/><rect x="322" y="166" width="66" height="28"/></g><text class="texte-petit" x="285" y="144" text-anchor="middle">+ réverbération</text><text class="texte-petit" x="355" y="184" text-anchor="middle">4 temps × 2</text><path d="M232 32 L232 206" fill="none" stroke="var(--pigment)" stroke-width="2"/><text class="texte-pigment" x="232" y="222" text-anchor="middle">tête de lecture</text><text class="texte-petit" x="10" y="222">tempo : 90 BPM</text><text class="texte-petit" x="390" y="222" text-anchor="end">mesures</text></svg>` },
            { t: "propriete", titre: "Tempo et durée", md: "Le **tempo** s'exprime en **BPM** (battements par minute). Durée d'un temps = **60 ÷ BPM** secondes. À 120 BPM, un temps dure 0,5 s ; une boucle de 4 temps dure donc **2 secondes**." },
            { t: "tableau", titre: "Les effets courants", entetes: ["Effet", "Ce qu'il produit"], lignes: [["**Réverbération**", "Une impression d'espace, comme dans une église"], ["**Delay**", "Un écho : le son se répète, de plus en plus faible"], ["**Distorsion**", "Un son saturé, « sale », typique de la guitare rock"], ["**Égalisation**", "Le réglage des graves, des médiums et des aigus"], ["**Compression**", "Les écarts de volume réduits : un son plus homogène"]] },
            { t: "verifie", q: "Une boucle de 4 temps à 60 BPM dure combien de secondes ?", choix: ["1 seconde", "4 secondes", "60 secondes"], bonne: 1, explication: "À 60 BPM, un temps dure 60 ÷ 60 = 1 seconde. Quatre temps durent donc 4 secondes." },
          ],
        },
        {
          titre: "Prendre soin de sa voix",
          blocs: [
            { t: "liste", titre: "La bonne posture pour chanter", items: ["**Debout**, pieds écartés à la largeur du bassin, genoux souples.", "**Épaules basses** et détendues, tête droite.", "**Respiration abdominale** : le ventre se gonfle à l'inspiration, les épaules ne montent pas.", "S'**échauffer** (bâillements, sirènes, vocalises douces), **boire de l'eau**, ne pas crier."] },
            { t: "attention", md: "Respirer en **levant les épaules** et en gonflant seulement le haut de la poitrine est une erreur : l'air manque vite et la gorge se crispe. Le souffle vient du **ventre**." },
            { t: "savais-tu", md: "À la **mue**, à l'adolescence, le larynx grandit : la voix des garçons descend d'environ **une octave**, celle des filles de quelques notes. Si ta voix se casse, ne force pas : chante doucement, dans la zone où tu es à l'aise, et ne cherche pas les notes aiguës d'avant." },
          ],
        },
        {
          titre: "Protéger son audition",
          blocs: [
            { t: "texte", md: "Le son se mesure en **décibels (dB)**. L'échelle est trompeuse : **+3 dB, c'est deux fois plus d'énergie sonore**. Dans l'oreille interne, des **cellules ciliées** transforment le son en message nerveux. Trop de bruit les abîme, et ==elles ne repoussent jamais== : la perte d'audition est **définitive**." },
            { t: "graphique", type: "barres", titre: "Niveaux sonores de la vie quotidienne", unite: "dB", donnees: [{ label: "Chuchotement", valeur: 30 }, { label: "Conversation", valeur: 60 }, { label: "Rue animée", valeur: 75 }, { label: "Seuil de risque", valeur: 85 }, { label: "Tondeuse", valeur: 90 }, { label: "Casque à fond", valeur: 100 }, { label: "Concert", valeur: 102 }, { label: "Seuil de douleur", valeur: 120 }, { label: "Avion au décollage", valeur: 130 }] },
            { t: "graphique", type: "barres", titre: "Durée maximale d'exposition par jour sans risque", unite: "min", donnees: [{ label: "85 dB", valeur: 480 }, { label: "88 dB", valeur: 240 }, { label: "91 dB", valeur: 120 }, { label: "94 dB", valeur: 60 }, { label: "97 dB", valeur: 30 }, { label: "100 dB", valeur: 15 }] },
            { t: "exemple", titre: "Lire le graphique", md: "À **85 dB**, l'oreille supporte environ **8 heures**. Chaque fois qu'on ajoute 3 dB, la durée est divisée par deux : à **100 dB**, comme dans un concert ou au casque à fond, le danger arrive en **moins d'un quart d'heure**. À 120 dB, le son fait mal." },
            { t: "liste", titre: "Se protéger", items: ["**Bouchons d'oreilles** en concert, et des **pauses** au calme.", "Volume du casque **sous 60 %**, pas plus d'une heure d'affilée.", "S'éloigner des enceintes.", "Les **acouphènes** (sifflements, bourdonnements après un bruit fort) sont un **signal d'alarme** : il faut consulter s'ils durent."] },
            { t: "verifie", q: "Pourquoi une perte d'audition due au bruit est-elle définitive ?", choix: ["Parce que le tympan se bouche", "Parce que les cellules ciliées détruites ne repoussent pas", "Parce que le cerveau oublie les sons"], bonne: 1, explication: "Les cellules ciliées de l'oreille interne ne se régénèrent pas chez l'être humain. Une fois détruites par un bruit trop fort ou trop long, elles sont perdues." },
          ],
        },
      ],
      bilan: "Chanter ensemble, improviser, construire un morceau piste par piste : la création musicale est à ta portée, à condition de ménager ta voix et de protéger tes oreilles, qui ne se réparent pas.",
    },
  },
};
