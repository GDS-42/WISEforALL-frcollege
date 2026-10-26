// Cours ÉCLORE — 4e Français. Schéma : docs/COURS.md
export default {
  id: "4e-francais",
  chapitres: {
    "4e-francais-01-dire-amour": {
      accroche: "Depuis plus de huit siècles, des poètes essaient de dire avec des mots ce qui semble impossible à dire : l'amour, l'attente, le manque. Pour y parvenir, ils ont inventé une musique faite de syllabes comptées et de rimes. Apprends à l'entendre, et ces vieux poèmes se mettront à parler pour toi.",
      objectifs: [
        "Reconnaître le lyrisme et ses procédés (1re personne, apostrophe, antithèse, comparaison)",
        "Compter les syllabes d'un vers et repérer la césure de l'alexandrin",
        "Identifier les rimes, les strophes et la forme du sonnet",
        "Situer les grands poètes lyriques, de Ronsard à Apollinaire",
      ],
      sections: [
        {
          titre: "Le lyrisme : dire « je » et ses émotions",
          blocs: [
            { t: "definition", terme: "Lyrisme", md: "L'expression des **sentiments personnels** (amour, joie, mélancolie, deuil) par un poète qui parle à la **1re personne**. Le mot vient de la **lyre**, l'instrument d'Orphée, le poète-musicien de la mythologie grecque : dès l'origine, la poésie lyrique est une poésie chantée." },
            { t: "texte", md: "Pour reconnaître un texte lyrique, cherche trois indices :\n\n• le **« je »** du poète, qui confie ce qu'il ressent ;\n• un **« tu »** ou un « vous » à qui il s'adresse : c'est l'**apostrophe** (l'être aimé, un absent, la nature) ;\n• un vocabulaire des **sentiments** et une **musique** : répétitions, refrains, rimes." },
            { t: "citation", texte: "Je vis, je meurs ; je me brûle et me noie ;\nJ'ai chaud extrême en endurant froidure", auteur: "Louise Labé", source: "Sonnet VIII, 1555" },
            { t: "exemple", titre: "Lire le vers de Louise Labé", md: "« Je vis » s'oppose à « je meurs », « je me brûle » à « me noie » (le feu contre l'eau). Ces oppositions forment une **antithèse** : l'amour est vécu comme un déchirement entre des contraires. ==Le désordre des mots traduit le désordre du cœur.==" },
            { t: "texte", md: "Verlaine, lui, utilise la **comparaison** : « Il pleure dans mon cœur / Comme il pleut sur la ville ». La pluie extérieure devient l'image de sa tristesse intérieure. Et Apollinaire, dans « Le Pont Mirabeau », répète un **refrain** : « Vienne la nuit sonne l'heure / Les jours s'en vont je demeure ». Le temps et l'amour s'enfuient comme l'eau de la Seine ; le poète, lui, reste seul et immobile." },
          ],
        },
        {
          titre: "Compter les syllabes d'un vers",
          blocs: [
            { t: "propriete", titre: "Les règles du compte", md: "• On compte les **syllabes prononcées**, pas les mots.\n• Le **e muet** se prononce (et compte) devant une **consonne** : « cou-le la Seine ».\n• Il ne compte pas devant une **voyelle** (il s'élide) ni en **fin de vers**.\n• La **diérèse** sépare en deux syllabes deux voyelles qui n'en font qu'une d'habitude : « vi-o-lon » au lieu de « vio-lon »." },
            { t: "tableau", titre: "Les mètres les plus fréquents", entetes: ["Syllabes", "Nom du vers", "Exemple"], lignes: [["8", "octosyllabe", "« Mignonne, allons voir si la rose » (Ronsard)"], ["10", "décasyllabe", "« Sous le pont Mirabeau coule la Seine » (Apollinaire)"], ["12", "**alexandrin**", "« Demain, dès l'aube, à l'heure où blanchit la campagne » (Hugo)"]] },
            { t: "schema", titre: "Scander un alexandrin", legende: "Le vers de Hugo compte 12 syllabes, coupées en deux hémistiches de 6 par la césure.", svg: `<svg viewBox="0 0 400 220"><text class="texte" x="200" y="28" text-anchor="middle">Demain, dès l'aube, à l'heure où blanchit la campagne</text><rect class="aplat" x="12" y="60" width="180" height="32"/><rect class="aplat" x="208" y="60" width="180" height="32"/><rect class="trait" x="12" y="60" width="180" height="32" fill="none"/><rect class="trait" x="208" y="60" width="180" height="32" fill="none"/><g class="trait-fin"><line x1="42" y1="60" x2="42" y2="92"/><line x1="72" y1="60" x2="72" y2="92"/><line x1="102" y1="60" x2="102" y2="92"/><line x1="132" y1="60" x2="132" y2="92"/><line x1="162" y1="60" x2="162" y2="92"/><line x1="238" y1="60" x2="238" y2="92"/><line x1="268" y1="60" x2="268" y2="92"/><line x1="298" y1="60" x2="298" y2="92"/><line x1="328" y1="60" x2="328" y2="92"/><line x1="358" y1="60" x2="358" y2="92"/></g><g class="texte-petit" text-anchor="middle"><text x="27" y="80">De</text><text x="57" y="80">main</text><text x="87" y="80">dès</text><text x="117" y="80">l'au</text><text x="147" y="80">b'à</text><text x="177" y="80">l'heu</text><text x="223" y="80">r'où</text><text x="253" y="80">blan</text><text x="283" y="80">chit</text><text x="313" y="80">la</text><text x="343" y="80">cam</text><text x="373" y="80">pa</text><text x="27" y="110">1</text><text x="57" y="110">2</text><text x="87" y="110">3</text><text x="117" y="110">4</text><text x="147" y="110">5</text><text x="177" y="110">6</text><text x="223" y="110">7</text><text x="253" y="110">8</text><text x="283" y="110">9</text><text x="313" y="110">10</text><text x="343" y="110">11</text><text x="373" y="110">12</text></g><line class="pointille" x1="200" y1="48" x2="200" y2="122"/><text class="texte-pigment" x="200" y="138" text-anchor="middle">césure</text><path class="trait-fin" d="M12 148 Q102 164 192 148"/><path class="trait-fin" d="M208 148 Q298 164 388 148"/><text class="texte-main" x="102" y="182" text-anchor="middle">1er hémistiche : 6</text><text class="texte-main" x="298" y="182" text-anchor="middle">2d hémistiche : 6</text><text class="texte-petit" x="200" y="208" text-anchor="middle">« aub(e) à », « heur(e) où » : e élidés devant voyelle ; « campa(gne) » : e muet final</text></svg>` },
            { t: "attention", md: "Ne compte pas les syllabes « à l'œil » : « aube » s'écrit en deux syllabes (au-be), mais devant « à » le *e* s'efface. Lis le vers à voix haute, lentement, en tapant chaque syllabe du doigt." },
            { t: "verifie", q: "Combien de syllabes compte « Sous le pont Mirabeau coule la Seine » ?", choix: ["9", "10", "11", "12"], bonne: 1, explication: "Sous-le-pont-Mi-ra-beau-cou-le-la-Sei(ne) = 10 : c'est un décasyllabe. Le *e* de « coule » compte (suivi de la consonne « l ») ; celui de « Seine », en fin de vers, ne compte pas." },
          ],
        },
        {
          titre: "Rimes, strophes et sonnet",
          blocs: [
            { t: "schema", titre: "Trois façons d'organiser les rimes", legende: "On note chaque rime par une lettre : deux vers qui riment ensemble portent la même lettre.", svg: `<svg viewBox="0 0 400 220"><g class="texte" text-anchor="middle"><text x="70" y="26">Plates</text><text x="200" y="26">Croisées</text><text x="330" y="26">Embrassées</text></g><g class="trait-fin"><line x1="25" y1="55" x2="85" y2="55"/><line x1="25" y1="85" x2="85" y2="85"/><line x1="25" y1="115" x2="85" y2="115"/><line x1="25" y1="145" x2="85" y2="145"/><line x1="155" y1="55" x2="215" y2="55"/><line x1="155" y1="85" x2="215" y2="85"/><line x1="155" y1="115" x2="215" y2="115"/><line x1="155" y1="145" x2="215" y2="145"/><line x1="285" y1="55" x2="345" y2="55"/><line x1="285" y1="85" x2="345" y2="85"/><line x1="285" y1="115" x2="345" y2="115"/><line x1="285" y1="145" x2="345" y2="145"/></g><g class="texte-main" text-anchor="middle"><text x="98" y="60">A</text><text x="98" y="90">A</text><text x="98" y="120">B</text><text x="98" y="150">B</text><text x="228" y="60">A</text><text x="228" y="90">B</text><text x="228" y="120">A</text><text x="228" y="150">B</text><text x="358" y="60">A</text><text x="358" y="90">B</text><text x="358" y="120">B</text><text x="358" y="150">A</text></g><g fill="none" stroke="var(--pigment)" stroke-width="2"><path d="M108 55 Q124 70 108 85"/><path d="M238 55 Q262 85 238 115"/><path d="M368 55 Q396 100 368 145"/></g><g class="pointille" fill="none"><path d="M108 115 Q124 130 108 145"/><path d="M244 85 Q272 115 244 145"/><path d="M368 85 Q382 100 368 115"/></g><g class="texte-pigment" text-anchor="middle"><text x="70" y="185">AABB</text><text x="200" y="185">ABAB</text><text x="330" y="185">ABBA</text></g><g class="texte-petit" text-anchor="middle"><text x="70" y="207">deux par deux</text><text x="200" y="207">en alternance</text><text x="330" y="207">B entouré par A</text></g></svg>` },
            { t: "tableau", titre: "Les strophes", entetes: ["Nombre de vers", "Nom de la strophe"], lignes: [["2", "distique"], ["3", "tercet"], ["4", "**quatrain**"], ["6", "sizain"]] },
            { t: "definition", terme: "Sonnet", md: "Un poème de **14 vers** : **deux quatrains** puis **deux tercets**. Venu d'Italie (Pétrarque), il triomphe en France au XVIe siècle avec Ronsard et Louise Labé. Le dernier vers, la **chute**, surprend ou résume tout le poème." },
            { t: "propriete", titre: "Enjambement et rejet", md: "Il y a **enjambement** quand la phrase continue sur le vers suivant, sans pause en fin de vers. Le **rejet** place un mot court au début du vers suivant pour le mettre en relief :\n« Demain, dès l'aube, à l'heure où blanchit la campagne,\n**Je partirai.** »" },
            { t: "verifie", q: "Quatre vers riment selon le schéma ABBA. Comment appelle-t-on ces rimes ?", choix: ["Plates", "Croisées", "Embrassées"], bonne: 2, explication: "Les deux rimes B sont « embrassées » par les deux rimes A, comme serrées dans des bras. ABAB = croisées, AABB = plates." },
          ],
        },
        {
          titre: "Huit siècles de poésie amoureuse",
          blocs: [
            { t: "frise", titre: "La poésie lyrique, du Moyen Âge au XXe siècle", evenements: [{ date: 1100, label: "Les troubadours", detail: "Dans le sud de la France, Guillaume IX d'Aquitaine et ses successeurs chantent la *fin'amor* : l'amour courtois d'une dame inaccessible." }, { date: 1552, label: "Ronsard, *Les Amours*", detail: "Sonnets pour Cassandre ; plus tard, l'ode « Mignonne, allons voir si la rose » invite à cueillir la jeunesse." }, { date: 1555, label: "Louise Labé, *Œuvres*", detail: "Une femme poète de Lyon dit la passion avec une audace rare : « Je vis, je meurs »." }, { date: 1578, label: "Ronsard, *Sonnets pour Hélène*", detail: "« Quand vous serez bien vieille, au soir, à la chandelle »." }, { date: 1856, label: "Hugo, *Les Contemplations*", detail: "« Demain, dès l'aube » s'adresse à sa fille Léopoldine, morte noyée en 1843." }, { date: 1874, label: "Verlaine, *Romances sans paroles*", detail: "« Il pleure dans mon cœur » : une poésie musicale et mélancolique." }, { date: 1913, label: "Apollinaire, *Alcools*", detail: "« Le Pont Mirabeau » : l'amour perdu, sans aucune ponctuation." }] },
            { t: "exemple", titre: "Le deuil de Hugo dans « Demain, dès l'aube »", md: "Le poète marche à travers la campagne vers quelqu'un qu'il tutoie : « Je sais que tu m'attends ». On croit à un rendez-vous amoureux. Le dernier quatrain révèle qu'il se rend sur une **tombe** : celle de sa fille Léopoldine. Le lyrisme amoureux devient ==lyrisme du deuil==, et la chute bouleverse la lecture." },
            { t: "savais-tu", md: "Au XVIe siècle, Ronsard reprend un vieux thème latin, le *carpe diem* (« cueille le jour ») : la beauté passe comme une rose, alors il faut aimer pendant qu'on est jeune." },
            { t: "verifie", q: "Range dans l'ordre chronologique : Apollinaire, Ronsard, Verlaine, Hugo. Qui vient en premier ?", choix: ["Hugo", "Ronsard", "Verlaine", "Apollinaire"], bonne: 1, explication: "Ronsard (XVIe siècle) vient en premier, puis Hugo (1802-1885), Verlaine (1844-1896) et enfin Apollinaire (*Alcools*, 1913)." },
          ],
        },
      ],
      bilan: "Le lyrisme, c'est un « je » qui chante ses émotions : compte ses syllabes, écoute ses rimes, repère ses images, et tu entendras battre le cœur du poète.",
    },
    "4e-francais-02-theatre-valeurs": {
      accroche: "Un père qui préfère sa cassette d'or à ses enfants, un bourgeois prêt à tout pour passer pour un noble, un valet qui ose défier son maître : au théâtre, on rit beaucoup. Mais derrière les éclats de rire, Molière, Marivaux et Beaumarchais posent une question sérieuse : quelles valeurs comptent vraiment ?",
      objectifs: [
        "Distinguer la comédie et la tragédie, connaître les règles classiques",
        "Maîtriser le vocabulaire du théâtre : réplique, tirade, monologue, aparté, didascalie",
        "Connaître les grandes comédies de Molière, Marivaux et Beaumarchais",
        "Analyser le conflit de valeurs qu'une comédie met en scène",
      ],
      sections: [
        {
          titre: "Comédie ou tragédie ?",
          blocs: [
            { t: "tableau", titre: "Deux grands genres du théâtre classique", entetes: ["Critère", "Comédie", "Tragédie"], lignes: [["Personnages", "bourgeois, valets, servantes", "rois, princes, héros nobles"], ["But", "faire **rire** et corriger les défauts", "émouvoir, inspirer terreur et pitié"], ["Fin", "heureuse, souvent un **mariage**", "malheureuse, souvent la **mort**"], ["Forme", "en prose ou en vers", "en alexandrins"], ["Auteurs", "Molière, Marivaux, Beaumarchais", "Corneille, Racine"]] },
            { t: "propriete", titre: "Les règles du théâtre classique (XVIIe siècle)", md: "• La règle des **trois unités** : une seule **action** principale, un seul **lieu**, un seul **temps** (une journée, vingt-quatre heures).\n• La **vraisemblance** : ce qu'on voit doit paraître possible.\n• La **bienséance** : rien qui choque le public ; pas de sang ni de mort sur scène." },
            { t: "astuce", md: "Pour retenir les trois unités, pense à une photo : **un** sujet (l'action), **un** décor (le lieu), **un** jour (le temps)." },
          ],
        },
        {
          titre: "Les mots du théâtre",
          blocs: [
            { t: "tableau", titre: "Le vocabulaire indispensable", entetes: ["Mot", "Définition"], lignes: [["Réplique", "ce que dit un personnage quand vient son tour de parole"], ["Tirade", "une **longue réplique** prononcée devant d'autres personnages"], ["Monologue", "un personnage **seul en scène** parle (à lui-même, au public)"], ["Aparté", "une parole que les autres personnages présents **ne sont pas censés entendre**"], ["Didascalie", "une **indication de mise en scène** (gestes, ton, décor), souvent en italique"], ["Quiproquo", "un **malentendu** : on prend une personne ou une chose pour une autre"]] },
            { t: "citation", texte: "Au voleur ! au voleur ! à l'assassin ! au meurtrier ! Justice, juste Ciel ! je suis perdu, je suis assassiné.", auteur: "Molière", source: "L'Avare, acte IV, scène 7 (1668)" },
            { t: "exemple", titre: "Le monologue d'Harpagon", md: "On vient de voler la cassette d'Harpagon. **Seul en scène**, il crie, s'affole, et va jusqu'à se saisir lui-même le bras en croyant attraper le voleur. C'est un **monologue** : il parle à lui-même, puis au public. Le comique est énorme, mais il révèle une valeur dévoyée : pour l'avare, ==l'argent compte plus que les êtres==." },
            { t: "verifie", q: "Un valet glisse au public « Mon maître est bien sot ! » sans que son maître l'entende. C'est :", choix: ["une tirade", "un aparté", "une didascalie", "un monologue"], bonne: 1, explication: "Le maître est présent mais n'est pas censé entendre : c'est un aparté. Le monologue suppose que le personnage soit seul en scène." },
          ],
        },
        {
          titre: "Comment une pièce est construite",
          blocs: [
            { t: "etapes", titre: "Les étapes d'une pièce classique", items: [{ titre: "L'exposition", md: "Les premières scènes présentent les personnages, le lieu et la situation." }, { titre: "Le nœud", md: "Un **conflit** apparaît : un obstacle empêche les personnages d'obtenir ce qu'ils veulent." }, { titre: "Les péripéties", md: "Des rebondissements compliquent ou relancent l'action." }, { titre: "Le dénouement", md: "Le conflit se résout : mariage en comédie, mort en tragédie." }] },
            { t: "texte", md: "Dans *L'Avare*, le nœud est clair : Harpagon veut marier sa fille Élise au vieil Anselme parce qu'il la prend « **sans dot** ». Élise aime Valère. Le conflit oppose ==l'argent et l'intérêt== d'un côté, ==l'amour et la liberté== de l'autre. Le dénouement, heureux, permet les mariages d'amour." },
          ],
        },
        {
          titre: "Rire pour dénoncer : Molière, Marivaux, Beaumarchais",
          blocs: [
            { t: "liste", items: ["**Molière**, *L'Avare* (1668) : Harpagon sacrifie ses enfants à sa cassette. Défaut visé : l'**avarice**.", "**Molière**, *Le Bourgeois gentilhomme* (1670) : M. Jourdain, riche marchand, prend des leçons de danse, d'escrime et de philosophie pour paraître noble. Défaut visé : la **vanité** de celui qui veut singer les nobles.", "**Marivaux**, *Le Jeu de l'amour et du hasard* (1730) : Silvia et Dorante échangent leur rôle avec leurs domestiques pour observer leur promis.", "**Beaumarchais**, *Le Mariage de Figaro* (1784) : le valet Figaro défie son maître, le comte Almaviva."] },
            { t: "citation", texte: "Par ma foi ! il y a plus de quarante ans que je dis de la prose sans que j'en susse rien.", auteur: "Molière", source: "Le Bourgeois gentilhomme, acte II, scène 4" },
            { t: "texte", md: "M. Jourdain découvre, émerveillé, qu'il parle en prose depuis toujours : son ignorance fait rire. Chez Marivaux, l'échange des rôles crée des **quiproquos** comiques : chacun tombe amoureux d'une personne qu'il croit domestique, ce qui interroge les barrières sociales. Chez Beaumarchais, la critique devient politique : Figaro reproche au comte de devoir tout à sa naissance et rien à son mérite." },
            { t: "citation", texte: "Vous vous êtes donné la peine de naître, et rien de plus.", auteur: "Beaumarchais", source: "Le Mariage de Figaro, acte V, scène 3" },
            { t: "definition", terme: "Castigat ridendo mores", md: "Devise latine de la comédie : « **elle corrige les mœurs en riant** ». En riant d'Harpagon ou de M. Jourdain, le spectateur reconnaît des défauts humains (avarice, vanité, mariages forcés, privilèges de la naissance) et apprend à s'en méfier." },
            { t: "verifie", q: "Que dénonce Figaro dans « Vous vous êtes donné la peine de naître, et rien de plus » ?", choix: ["L'avarice du comte", "Les privilèges dus à la naissance plutôt qu'au mérite", "La vanité d'un bourgeois"], bonne: 1, explication: "Le comte doit son rang à sa naissance, non à ses qualités. Cinq ans avant la Révolution, Beaumarchais attaque les privilèges de la noblesse." },
          ],
        },
      ],
      bilan: "La comédie fait rire pour faire réfléchir : derrière Harpagon, Jourdain ou Figaro se cache toujours un conflit de valeurs, l'argent contre l'amour, l'apparence contre le mérite.",
    },
    "4e-francais-03-fiction-reel": {
      accroche: "Une jeune femme emprunte un collier pour un bal et le perd. Un homme sent une présence invisible boire l'eau de sa carafe pendant la nuit. Deux nouvelles du même auteur, Maupassant : l'une est réaliste, l'autre fantastique. Toutes deux, pourtant, nous parlent du monde réel.",
      objectifs: [
        "Distinguer réalisme, fantastique et merveilleux",
        "Connaître les grands nouvellistes du XIXe siècle et leurs œuvres",
        "Analyser le point de vue (focalisation), le cadre et la chute d'une nouvelle",
      ],
      sections: [
        {
          titre: "La nouvelle, un récit court qui frappe fort",
          blocs: [
            { t: "definition", terme: "Nouvelle", md: "Un **récit bref**, avec peu de personnages et une action resserrée, qui se termine souvent par une **chute** : une fin inattendue qui éclaire tout le récit d'un jour nouveau." },
            { t: "etapes", titre: "*La Parure* (Maupassant, 1884), étape par étape", items: [{ titre: "L'emprunt", md: "Mathilde Loisel, qui rêve de luxe, emprunte une rivière de diamants à son amie Mme Forestier." }, { titre: "Le bal", md: "Elle brille au bal du ministère : c'est son heure de gloire." }, { titre: "La perte", md: "De retour chez elle, elle s'aperçoit qu'elle a perdu le bijou." }, { titre: "La dette", md: "Les Loisel s'endettent pour acheter une parure identique et la rendre." }, { titre: "Dix ans de misère", md: "Ils travaillent pendant **dix ans** pour rembourser." }, { titre: "La chute", md: "Mme Forestier révèle que sa parure était **fausse** : elle valait « au plus cinq cents francs »." }] },
            { t: "exemple", titre: "Ce que révèle la chute", md: "La dernière réplique renverse toute l'histoire : dix ans de sacrifices pour un bijou en toc. Le lecteur relit alors le récit autrement. Maupassant dénonce ==la vanité et le culte des apparences== : Mathilde a tout perdu pour avoir voulu paraître riche." },
          ],
        },
        {
          titre: "Réalisme et naturalisme : peindre la société",
          blocs: [
            { t: "texte", md: "Au XIXe siècle, des romanciers veulent montrer la société **telle qu'elle est**, sans l'embellir : les petits employés, les paysans, les ouvriers, le poids de l'argent. Ils accumulent les **détails concrets** (objets, lieux, prix, métiers) pour que le lecteur croie à leur monde." },
            { t: "frise", titre: "Réalisme et naturalisme", evenements: [{ date: 1830, label: "Stendhal, *Le Rouge et le Noir*", detail: "L'ambition d'un fils de charpentier dans la France de la Restauration." }, { date: 1842, label: "Balzac, *La Comédie humaine*", detail: "Balzac réunit ses romans sous ce titre : près de cent œuvres qui peignent toute la société." }, { date: 1857, label: "Flaubert, *Madame Bovary*", detail: "Une femme de province déçue par la vie réelle." }, { date: 1871, label: "Zola commence *Les Rougon-Macquart*", detail: "Vingt romans sur une famille : le naturalisme étudie l'hérédité et le milieu." }, { date: 1880, label: "*Les Soirées de Médan*", detail: "Recueil de nouvelles naturalistes autour de Zola ; Maupassant y publie *Boule de suif*." }, { date: 1884, label: "Maupassant, *La Parure*", detail: "Une nouvelle réaliste à chute." }, { date: 1885, label: "Zola, *Germinal*", detail: "La vie et la grève des mineurs du Nord." }] },
            { t: "definition", terme: "Naturalisme", md: "Un prolongement du réalisme, mené par **Zola** : l'écrivain observe ses personnages comme un savant, en montrant comment l'**hérédité** (la famille) et le **milieu** (le travail, la misère) déterminent leur destin." },
          ],
        },
        {
          titre: "Quand le surnaturel s'invite : le fantastique",
          blocs: [
            { t: "tableau", titre: "Trois façons de raconter", entetes: ["Critère", "Réalisme", "Merveilleux", "Fantastique"], lignes: [["Le surnaturel", "absent", "**accepté** par tous comme normal", "fait **irruption** dans le réel"], ["Le cadre", "précis, quotidien", "« Il était une fois », lointain", "précis, banal, réaliste"], ["Le lecteur", "croit à l'histoire", "accepte la magie", "**hésite** : folie, rêve ou surnaturel ?"], ["Exemple", "*La Parure*", "*Cendrillon*", "*Le Horla*"]] },
            { t: "propriete", titre: "Les outils du fantastique", md: "• Un **cadre banal** au départ : plus le décor est ordinaire, plus l'étrange inquiète. *Le Horla* s'ouvre sur « 8 mai. Quelle journée admirable ! ».\n• Des **modalisateurs du doute** : « il me sembla », « je crus voir », « comme si », « peut-être ».\n• Un narrateur à la **1re personne** dont on ne sait pas s'il est fou ou lucide." },
            { t: "liste", titre: "Les grandes nouvelles fantastiques", items: ["Théophile Gautier, *La Morte amoureuse* (1836)", "Prosper Mérimée, *La Vénus d'Ille* (1837) : Alphonse passe sa bague de mariage au doigt d'une statue antique, qui referme la main…", "Edgar Allan Poe, *Le Chat noir*, traduit en français par Baudelaire", "Guy de Maupassant, *Le Horla* (1887), écrit sous forme de journal intime"] },
            { t: "exemple", titre: "Pourquoi un journal intime dans *Le Horla* ?", md: "Le lecteur n'a que le témoignage du narrateur, jour après jour. Il partage ses doutes et sa peur grandissante, sans jamais savoir si un être invisible existe ou si le narrateur perd la raison. ==Le journal enferme le lecteur dans l'hésitation.==" },
            { t: "verifie", q: "Quelle phrase relève du fantastique ?", choix: ["« La fée toucha la citrouille, qui devint un carrosse. »", "« Il me sembla qu'une main invisible effleurait mon épaule. »", "« Le commissaire arrêta le voleur à huit heures. »"], bonne: 1, explication: "« Il me sembla » est un modalisateur : le narrateur doute. La fée relève du merveilleux (la magie est normale), le commissaire du réalisme." },
          ],
        },
        {
          titre: "Qui voit ? La focalisation",
          blocs: [
            { t: "tableau", titre: "Les trois focalisations", entetes: ["Focalisation", "Ce que sait le narrateur", "Exemple"], lignes: [["**Interne**", "ce que voit, pense et ressent **un** personnage", "« Elle sentit son cœur se serrer en voyant la porte ouverte. »"], ["**Externe**", "seulement ce qu'une caméra filmerait, sans les pensées", "« Un homme entra. Il posa son sac et s'assit sans un mot. »"], ["**Zéro** (omnisciente)", "**tout** : pensées de tous, passé, avenir", "« Il ignorait encore que cette lettre allait ruiner sa vie. »"]] },
            { t: "attention", md: "Ne confonds pas la personne et la focalisation. Un récit à la 3e personne peut être en focalisation interne : « Elle sentit son cœur se serrer » nous fait entrer dans la tête du personnage." },
            { t: "verifie", q: "« Un homme entra. Il posa son sac, regarda autour de lui et s'assit sans un mot. » Quelle est la focalisation ?", choix: ["Interne", "Externe", "Zéro"], bonne: 1, explication: "On ne connaît que des gestes visibles, aucune pensée, aucun sentiment : le narrateur observe comme une caméra. C'est la focalisation externe." },
          ],
        },
      ],
      bilan: "Réaliste ou fantastique, la nouvelle part toujours du réel : l'une le peint pour le dénoncer, l'autre le fissure pour nous inquiéter, et la chute nous oblige à tout relire.",
    },
    "4e-francais-04-presse-information": {
      accroche: "Le même jour, deux journaux racontent le même accident à la cantine. L'un titre : « Trois élèves intoxiqués, une enquête est ouverte ». L'autre : « Scandale : la cantine empoisonne nos enfants ! ». Les deux parlent du même fait… mais un seul t'informe vraiment. Apprends à faire la différence.",
      objectifs: [
        "Connaître la structure d'un journal, d'un article et les genres journalistiques",
        "Distinguer un fait d'une opinion et vérifier une source",
        "Repérer les procédés qui déforment l'information : titres, images, caricatures",
      ],
      sections: [
        {
          titre: "Comment un article est construit",
          blocs: [
            { t: "texte", md: "La **une** est la première page du journal : elle annonce les sujets les plus importants. À l'intérieur, chaque article suit une organisation précise, pensée pour un lecteur pressé." },
            { t: "schema", titre: "Les parties d'un article", legende: "Le titre accroche, le chapeau résume, le corps développe, la signature dit qui a écrit.", svg: `<svg viewBox="0 0 400 300"><rect class="aplat-papier" x="16" y="12" width="232" height="276"/><rect class="trait" x="16" y="12" width="232" height="276" fill="none"/><text class="texte-petit" x="28" y="32">SOCIÉTÉ</text><text class="texte-main" x="28" y="58">Une piscine ouvre à Vaise</text><rect class="aplat" x="28" y="70" width="208" height="40"/><text class="texte-petit" x="34" y="86">Le maire a inauguré mardi le</text><text class="texte-petit" x="34" y="101">premier bassin couvert du quartier.</text><g class="trait-fin"><line x1="28" y1="126" x2="236" y2="126"/><line x1="28" y1="138" x2="236" y2="138"/><line x1="28" y1="150" x2="236" y2="150"/><line x1="28" y1="162" x2="180" y2="162"/><line x1="28" y1="200" x2="236" y2="200"/><line x1="28" y1="212" x2="236" y2="212"/><line x1="28" y1="224" x2="236" y2="224"/><line x1="28" y1="236" x2="150" y2="236"/></g><text class="texte" x="28" y="186">Trois ans de travaux</text><text class="texte-petit" x="236" y="270" text-anchor="end">Léa Martin</text><g class="trait-fin"><line x1="268" y1="54" x2="252" y2="54" marker-end="url(#fl)"/><line x1="268" y1="90" x2="252" y2="90" marker-end="url(#fl)"/><line x1="268" y1="144" x2="252" y2="144" marker-end="url(#fl)"/><line x1="268" y1="182" x2="252" y2="182" marker-end="url(#fl)"/><line x1="268" y1="266" x2="252" y2="266" marker-end="url(#fl)"/></g><g class="texte-petit"><text x="272" y="58">Titre informatif</text><text x="272" y="94">Chapeau : l'essentiel</text><text x="272" y="148">Corps : paragraphes</text><text x="272" y="186">Intertitre</text><text x="272" y="270">Signature</text></g><text class="texte-pigment" x="272" y="30">Rubrique</text><line class="pointille" x1="268" y1="27" x2="80" y2="27"/></svg>` },
            { t: "definition", terme: "Chapeau", md: "Le **court paragraphe** placé sous le titre, souvent en gras, qui **résume l'essentiel** de l'article. Un lecteur qui ne lit que le titre et le chapeau sait déjà de quoi il s'agit." },
            { t: "schema", titre: "La pyramide inversée", legende: "L'essentiel d'abord, les détails ensuite : on peut couper la fin d'un article sans perdre l'information principale.", svg: `<svg viewBox="0 0 400 230"><path class="aplat" d="M40 20 L360 20 L200 210 Z"/><path class="trait" d="M40 20 L360 20 L200 210 Z"/><line class="trait-fin" x1="74" y1="60" x2="326" y2="60"/><line class="trait-fin" x1="112" y1="105" x2="288" y2="105"/><line class="trait-fin" x1="150" y1="150" x2="250" y2="150"/><text class="texte" x="200" y="45" text-anchor="middle">Titre et chapeau : l'essentiel</text><text class="texte" x="200" y="88" text-anchor="middle">Qui ? Quoi ? Où ? Quand ?</text><text class="texte-petit" x="200" y="132" text-anchor="middle">Pourquoi ? Comment ?</text><text class="texte-petit" x="200" y="176" text-anchor="middle">Détails</text><line class="trait-fin" x1="380" y1="28" x2="380" y2="198" marker-end="url(#fl-p)"/><text class="texte-pigment" x="392" y="224" text-anchor="end">de moins en moins important</text></svg>` },
            { t: "propriete", titre: "Les questions de référence", md: "Un article d'information répond à **six questions** : ==qui ? quoi ? où ? quand ? pourquoi ? comment ?== Les quatre premières sont traitées dès le début ; les explications et les détails viennent ensuite." },
          ],
        },
        {
          titre: "Les genres journalistiques",
          blocs: [
            { t: "tableau", titre: "Informer ou donner son avis ?", entetes: ["Genre", "Ce que c'est", "Information ou opinion ?"], lignes: [["Dépêche", "information brute et rapide d'une **agence de presse** (comme l'AFP), reprise par les journaux", "information"], ["Brève", "article très court, quelques lignes", "information"], ["Reportage", "le journaliste raconte ce qu'il a vu **sur le terrain**", "information"], ["Interview", "questions posées à une personne et ses réponses", "information"], ["Enquête", "longue recherche pour révéler des faits cachés", "information"], ["Éditorial", "article qui exprime **la position du journal**", "opinion"], ["Tribune", "texte d'opinion d'une **personne extérieure** au journal", "opinion"]] },
            { t: "definition", terme: "Ligne éditoriale", md: "L'ensemble des **choix d'un journal** : les sujets qu'il traite en priorité, son ton, ses opinions. Deux journaux peuvent présenter le même événement de façon très différente selon leur ligne éditoriale." },
            { t: "verifie", q: "Le directeur d'un journal signe en première page un texte où il donne l'avis du journal sur une loi. C'est :", choix: ["une dépêche", "un reportage", "un éditorial", "une brève"], bonne: 2, explication: "L'éditorial exprime l'opinion du journal lui-même. La dépêche, le reportage et la brève informent sans prendre position." },
          ],
        },
        {
          titre: "Fait ou opinion ?",
          blocs: [
            { t: "propriete", titre: "Distinguer fait et opinion", md: "Un **fait** se vérifie : « Le maire a inauguré la piscine mardi. »\nUne **opinion** est un jugement personnel : « Cette piscine est une réussite. »\n\nLes indices de l'opinion : adjectifs de jugement (*magnifique, honteux*), verbes comme *je pense, il faut*, points d'exclamation." },
            { t: "exemple", titre: "Lequel informe le mieux ?", md: "« **2 000 manifestants selon la police, 5 000 selon les organisateurs.** » donne des chiffres et cite deux sources : le lecteur peut juger lui-même.\n« Une foule immense a envahi les rues » ou « Presque personne n'est venu » sont des **jugements vagues** : impossibles à vérifier, ils orientent le lecteur." },
            { t: "etapes", titre: "Vérifier une information avant de la croire ou de la partager", items: [{ titre: "Qui parle ?", md: "Cherche l'**auteur** et le média : est-il connu, fiable, identifiable ?" }, { titre: "Quand ?", md: "Vérifie la **date** : une vieille information peut ressurgir hors de son contexte." }, { titre: "D'où vient l'image ?", md: "Une photo peut avoir été prise ailleurs, ou des années plus tôt. Une recherche d'image inversée le révèle." }, { titre: "Recouper", md: "**Croise** l'information avec plusieurs médias fiables et indépendants. Si personne d'autre n'en parle, méfie-toi." }] },
            { t: "definition", terme: "Infox", md: "Le mot français recommandé pour *fake news* : une **fausse information** diffusée volontairement pour tromper. Les journalistes, eux, citent leurs **sources** et les **recoupent** avant de publier." },
          ],
        },
        {
          titre: "Les procédés qui déforment",
          blocs: [
            { t: "exemple", titre: "Analyser un titre trompeur : « Scandale : la cantine empoisonne nos enfants ! »", etapes: ["**Mot connoté** : « Scandale » juge avant d'informer.", "**Verbe exagéré** : « empoisonne » suggère une intention criminelle.", "**Généralisation** : « nos enfants » laisse croire que tous sont touchés, alors qu'il y a trois élèves.", "**Ponctuation** : le point d'exclamation vise l'émotion, pas la raison.", "Version informative : « Trois élèves intoxiqués à la cantine, une enquête est ouverte »."] },
            { t: "attention", md: "Une photo n'est pas la réalité brute ! Le **cadrage** choisit ce qu'on montre (une salle « pleine » peut être à moitié vide hors du cadre), la **légende** oriente le sens, et une image peut être retouchée ou sortie de son contexte." },
            { t: "definition", terme: "Caricature", md: "Un dessin qui **exagère volontairement** les traits d'une personne ou d'une situation pour **critiquer** ou faire rire. Elle ne cherche pas la ressemblance fidèle : c'est une forme d'opinion." },
            { t: "savais-tu", md: "En France, la **liberté de la presse** est garantie par la loi du **29 juillet 1881**. Elle protège le droit de publier, mais punit la diffamation et les fausses nouvelles." },
            { t: "verifie", q: "Une photographie de presse montre-t-elle toujours la réalité de façon neutre ?", choix: ["Oui, une photo ne ment pas", "Non : cadrage, légende, retouche et contexte peuvent orienter le sens"], bonne: 1, explication: "Le photographe choisit son cadre, le journal choisit la légende et le moment de publication : l'image peut informer… ou déformer." },
          ],
        },
      ],
      bilan: "Bien s'informer, c'est se demander toujours : qui parle, est-ce un fait ou une opinion, et d'autres sources fiables le confirment-elles ?",
    },
    "4e-francais-05-ville": {
      accroche: "Au XIXe siècle, Paris devient un chantier géant : on perce des boulevards, on ouvre des grands magasins, la foule envahit les rues. Les écrivains sont à la fois éblouis et effrayés. La ville est-elle un lieu de liberté et de rencontres… ou un monstre qui dévore les hommes ?",
      objectifs: [
        "Connaître les grands textes poétiques et romanesques sur la ville",
        "Analyser une description : organisation, champ lexical, figures de style",
        "Comprendre pourquoi la ville moderne fascine et inquiète",
      ],
      sections: [
        {
          titre: "La ville, un grand thème né au XIXe siècle",
          blocs: [
            { t: "texte", md: "Pourquoi les écrivains se passionnent-ils soudain pour la ville ? Parce qu'elle change sous leurs yeux. La **révolution industrielle** attire dans les villes des milliers de paysans : c'est l'**exode rural**. À Paris, le préfet **Haussmann** transforme la capitale entre **1853 et 1870** : larges boulevards, immeubles alignés, égouts modernes. Des quartiers anciens disparaissent." },
            { t: "frise", titre: "Écrire la ville moderne", evenements: [{ date: 1853, label: "Début des travaux d'Haussmann", detail: "Paris se transforme jusqu'en 1870." }, { date: 1857, label: "Baudelaire, *Les Fleurs du mal*", detail: "La section « Tableaux parisiens » paraît dans l'édition de 1861." }, { date: 1862, label: "Hugo, *Les Misérables*", detail: "Le Paris des pauvres, de Gavroche et des barricades de 1832." }, { date: 1869, label: "Baudelaire, *Le Spleen de Paris*", detail: "Des poèmes en prose, publiés après sa mort." }, { date: 1883, label: "Zola, *Au Bonheur des Dames*", detail: "Le grand magasin, monstre moderne." }, { date: 1895, label: "Verhaeren, *Les Villes tentaculaires*", detail: "La ville-pieuvre qui dévore les campagnes." }, { date: 1913, label: "Apollinaire, « Zone »", detail: "Premier poème d'*Alcools* : la tour Eiffel, les affiches, les avions." }] },
            { t: "verifie", q: "Pourquoi la ville devient-elle un grand thème littéraire au XIXe siècle ?", choix: ["Parce que les villes se vident", "Parce qu'elle se transforme : industrie, exode rural, grands travaux", "Parce qu'il est interdit d'écrire sur la campagne"], bonne: 1, explication: "La ville grandit et change de visage très vite : elle devient un spectacle nouveau, fascinant et inquiétant, que les écrivains veulent saisir." },
          ],
        },
        {
          titre: "Baudelaire, poète de la foule",
          blocs: [
            { t: "citation", texte: "La rue assourdissante autour de moi hurlait.\nLongue, mince, en grand deuil, douleur majestueuse,\nUne femme passa…", auteur: "Charles Baudelaire", source: "« À une passante », Les Fleurs du mal" },
            { t: "exemple", titre: "Analyser le premier vers", etapes: ["**Champ lexical du bruit** : « assourdissante », « hurlait ».", "**Personnification** : la rue « hurlait » comme un être vivant et menaçant.", "**Effet** : la ville agresse le poète, qui se sent seul au milieu de la foule.", "Puis tout s'arrête : une inconnue en deuil passe, la rencontre est fugitive."] },
            { t: "texte", md: "Le poète croise le regard de la passante, puis elle disparaît dans la foule : « Un éclair… puis la nuit ! ». Baudelaire saisit une expérience typique de la ville moderne : ==la rencontre éphémère d'inconnus qui ne se reverront jamais==. Il invente aussi le **poème en prose** (*Le Spleen de Paris*), sans vers ni rimes, plus souple pour dire la ville." },
            { t: "definition", terme: "Spleen", md: "Mot anglais qui désigne chez Baudelaire une **mélancolie profonde**, un ennui et une angoisse qui écrasent le poète. Il s'oppose à l'**Idéal**, l'élan vers la beauté." },
          ],
        },
        {
          titre: "Ville monstre, ville vivante",
          blocs: [
            { t: "tableau", titre: "Des regards contrastés sur la ville", entetes: ["Œuvre", "Image de la ville", "Procédé"], lignes: [["Verhaeren, *Les Villes tentaculaires* (1895)", "une **pieuvre** dont les tentacules dévorent la campagne", "métaphore animale"], ["Zola, *Au Bonheur des Dames* (1883)", "le grand magasin, **machine** et **monstre** qui avale les clientes et ruine les petits commerçants", "personnification"], ["Hugo, *Les Misérables* (1862)", "le Paris des pauvres : Gavroche, gamin des rues, meurt sur une barricade ; Jean Valjean fuit par les **égouts** en portant Marius blessé", "description réaliste et épique"], ["Apollinaire, « Zone » (1913)", "une ville moderne joyeuse : tour Eiffel, affiches, avions", "vers libres, sans ponctuation"]] },
            { t: "citation", texte: "Bergère ô tour Eiffel le troupeau des ponts bêle ce matin", auteur: "Guillaume Apollinaire", source: "« Zone », Alcools (1913)" },
            { t: "exemple", titre: "La tour Eiffel bergère", md: "Il n'y a pas d'outil de comparaison : la tour **est** une bergère, les ponts **sont** un troupeau qui bêle. Cette image directe (une métaphore) **personnifie** la tour et transforme la ville moderne en paysage de campagne vivant et tendre. Avec l'absence de ponctuation et les vers libres, « Zone » célèbre ==la modernité==." },
            { t: "verifie", q: "Pourquoi Verhaeren qualifie-t-il les villes de « tentaculaires » ?", choix: ["Parce qu'elles sont au bord de la mer", "Parce qu'elles s'étendent comme une pieuvre et dévorent la campagne", "Parce qu'elles sont pleines de poissonneries"], bonne: 1, explication: "Les tentacules sont ceux de la pieuvre : la ville s'étire, attrape et engloutit les campagnes voisines. La métaphore exprime une inquiétude." },
          ],
        },
        {
          titre: "Décrire une ville avec méthode",
          blocs: [
            { t: "definition", terme: "Champ lexical", md: "Un **ensemble de mots** qui renvoient à une même idée. « Klaxons, vacarme, hurler, assourdissant » forment le champ lexical du **bruit**. Un champ lexical dominant crée une **impression d'ensemble**." },
            { t: "etapes", titre: "Une description qui zoome, du plus large au plus précis", items: [{ titre: "Le panorama", md: "La ville entière vue depuis une colline." }, { titre: "Le quartier", md: "Un quartier et ses toits." }, { titre: "La rue", md: "Une rue animée, ses bruits et ses odeurs." }, { titre: "La vitrine", md: "Une vitrine de boutique." }, { titre: "Le détail", md: "Un objet dans la vitrine." }] },
            { t: "astuce", md: "Pour réussir ta description : choisis un **point de vue** (d'où regarde-t-on ?), un **ordre** (du loin au près, du haut en bas), convoque les **cinq sens**, et ajoute une ou deux figures de style. Une liste en vrac (« il y a des voitures, des gens, des arbres ») ne guide pas le regard." },
          ],
        },
      ],
      bilan: "Monstre tentaculaire ou bergère tendre, la ville des écrivains n'est jamais neutre : derrière chaque description se cache un regard qui fascine ou qui inquiète.",
    },
    "4e-francais-06-subordonnees": {
      accroche: "« Bien que la pluie tombe, les enfants jouent dehors parce qu'ils adorent les flaques. » Trois verbes, trois propositions, et pourtant une seule phrase parfaitement claire. Comment les morceaux s'emboîtent-ils ? C'est tout l'art de la phrase complexe.",
      objectifs: [
        "Identifier une proposition subordonnée et son mot introducteur",
        "Distinguer relative, complétive et circonstancielle",
        "Reconnaître la circonstance exprimée : temps, cause, conséquence, but, condition, concession",
      ],
      sections: [
        {
          titre: "De la phrase simple à la phrase complexe",
          blocs: [
            { t: "definition", terme: "Proposition", md: "Un groupe de mots organisé autour d'un **verbe conjugué**. Une phrase **simple** a un seul verbe conjugué ; une phrase **complexe** en a plusieurs : autant de verbes conjugués, autant de propositions." },
            { t: "tableau", titre: "Trois façons de relier des propositions", entetes: ["Liaison", "Outil", "Exemple"], lignes: [["Juxtaposition", "une virgule, un point-virgule, deux-points", "Il pleut, je reste."], ["Coordination", "mais, ou, et, donc, or, ni, car", "Il pleut, **donc** je reste."], ["Subordination", "un mot subordonnant ; la subordonnée **dépend** de la principale", "Je reste **parce qu'**il pleut."]] },
            { t: "schema", titre: "Analyser une phrase complexe", legende: "Les deux subordonnées dépendent de la principale ; supprime-les, la principale garde un sens.", svg: `<svg viewBox="0 0 400 232"><text class="texte-petit" x="200" y="20" text-anchor="middle">3 verbes conjugués = 3 propositions</text><path class="trait-fin" fill="none" d="M64 72 Q100 34 150 70" marker-end="url(#fl-p)"/><path class="trait-fin" fill="none" d="M322 72 Q280 34 226 70" marker-end="url(#fl-p)"/><rect class="aplat-papier" x="8" y="76" width="112" height="50"/><rect class="trait" x="8" y="76" width="112" height="50" fill="none"/><rect class="aplat" x="128" y="76" width="116" height="50"/><rect class="trait" x="128" y="76" width="116" height="50" fill="none"/><rect class="aplat-papier" x="252" y="76" width="140" height="50"/><rect class="trait" x="252" y="76" width="140" height="50" fill="none"/><text class="texte-pigment" x="64" y="97" text-anchor="middle">Bien que</text><text class="texte" x="64" y="115" text-anchor="middle">la pluie tombe,</text><text class="texte" x="186" y="97" text-anchor="middle">les enfants</text><text class="texte" x="186" y="115" text-anchor="middle">jouent dehors</text><text class="texte" x="322" y="97" text-anchor="middle"><tspan class="texte-pigment">parce qu'</tspan>ils adorent</text><text class="texte" x="322" y="115" text-anchor="middle">les flaques.</text><g class="texte-petit" text-anchor="middle"><text x="64" y="146">subordonnée</text><text x="186" y="146">principale</text><text x="322" y="146">subordonnée</text><text x="64" y="186">verbe : tombe</text><text x="186" y="186">verbe : jouent</text><text x="322" y="186">verbe : adorent</text></g><g class="texte-pigment" text-anchor="middle"><text x="64" y="164">CC de concession</text><text x="186" y="164">noyau</text><text x="322" y="164">CC de cause</text></g><text class="texte-main" x="200" y="218" text-anchor="middle">le mot introducteur ouvre la subordonnée</text></svg>` },
          ],
        },
        {
          titre: "Trois familles de subordonnées",
          blocs: [
            { t: "tableau", titre: "Reconnaître une subordonnée", entetes: ["Nature", "Mot introducteur", "Ce qu'elle complète", "Exemple"], lignes: [["**Relative**", "pronom relatif : qui, que, quoi, dont, où, lequel", "un **nom**, son **antécédent** (fonction : complément de l'antécédent)", "Le livre *que tu m'as prêté* est passionnant."], ["**Conjonctive complétive**", "la conjonction **que**", "un **verbe**, souvent comme **COD**", "Je pense *que tu as raison*."], ["**Conjonctive circonstancielle**", "une conjonction : quand, parce que, pour que, si…", "toute la principale (fonction : **complément circonstanciel**)", "*Quand le soleil se lève*, les oiseaux chantent."]] },
            { t: "propriete", titre: "Choisir le bon pronom relatif", md: "• **qui** : sujet (« l'ami *qui* vient ») ;\n• **que** : COD (« l'ami *que* j'attends ») ;\n• **dont** : remplace un complément introduit par **de** (« le film *dont* je t'ai parlé », car on parle **de** quelque chose) ;\n• **où** : lieu ou temps (« la ville *où* j'habite », « le jour *où* tu es né »)." },
            { t: "attention", md: "Le mot **que** a deux natures. Il est **pronom relatif** s'il remplace un nom placé juste avant : « la route *que* tu prends » (que = la route). Il est **conjonction** s'il ne remplace rien : « je sais *que* tu viens ». Dans « Il m'a dit *qu'il viendrait* », c'est donc une **complétive**, pas une relative." },
            { t: "verifie", q: "Dans quelle phrase « que » est-il un pronom relatif ?", choix: ["Je crois que tu as gagné.", "La chanson que tu fredonnes me plaît.", "Il faut que tu viennes."], bonne: 1, explication: "« que » remplace « la chanson », son antécédent : c'est un pronom relatif (tu fredonnes la chanson). Dans les deux autres phrases, « que » ne remplace aucun nom : c'est une conjonction." },
          ],
        },
        {
          titre: "Les circonstancielles : quand, pourquoi, à quelle condition ?",
          blocs: [
            { t: "tableau", titre: "Les circonstances et leurs conjonctions", entetes: ["Circonstance", "Conjonctions", "Exemple"], lignes: [["Temps", "quand, lorsque, dès que, pendant que, avant que", "*Dès que* la cloche sonne, on sort."], ["Cause", "parce que, puisque, comme", "*Puisque* tu insistes, je viens."], ["Conséquence", "si bien que, de sorte que, si… que, tellement… que", "Il fait *si* froid *que* le lac a gelé."], ["But", "pour que, afin que", "Je t'explique *pour que* tu comprennes."], ["Condition", "si, à condition que", "*Si* tu veux, on part."], ["Concession", "bien que, quoique, même si", "*Même s'*il pleut, nous irons à la plage."]] },
            { t: "propriete", titre: "Le subjonctif obligatoire", md: "Certaines conjonctions imposent le **subjonctif** : ==pour que, afin que, bien que, quoique, avant que, à condition que==.\n« Je te prête mon vélo pour que tu **puisses** venir » (et non *peux* ni *pourras*)." },
            { t: "exemple", titre: "« Comme il était tard, nous sommes rentrés. »", etapes: ["« Comme » peut exprimer la comparaison, le temps ou la cause : il faut regarder le sens.", "Remplace-le par « parce que » : « Parce qu'il était tard, nous sommes rentrés. » Le sens est conservé.", "Ici, « comme » introduit donc une subordonnée circonstancielle de **cause**."] },
            { t: "astuce", md: "Ne confonds pas but et conséquence. Le **but** est une intention, pas encore réalisée (« pour que tu comprennes »). La **conséquence** est un résultat réel (« si bien qu'il a compris »)." },
            { t: "verifie", q: "« Même s'il pleut, nous irons à la plage. » Quelle circonstance exprime la subordonnée ?", choix: ["La condition", "La cause", "La concession"], bonne: 2, explication: "La pluie devrait empêcher la sortie, mais on y va quand même : c'est une opposition admise, une concession. « Même si » est l'équivalent de « bien que »." },
          ],
        },
      ],
      bilan: "Un verbe conjugué, une proposition ; un mot introducteur, une subordonnée : relative pour compléter un nom, complétive pour compléter un verbe, circonstancielle pour dire quand, pourquoi ou malgré quoi.",
    },
    "4e-francais-07-discours-voix": {
      accroche: "Ton ami t'a dit hier : « Je viendrai demain. » Aujourd'hui, tu racontes : « Il m'a dit qu'il viendrait le lendemain. » Sans y penser, tu as changé un pronom, un temps et un mot de temps. La grammaire décrit ces transformations que tu fais déjà… et t'aide à les réussir à l'écrit.",
      objectifs: [
        "Passer du discours direct au discours indirect, et inversement",
        "Reconnaître le discours indirect libre",
        "Construire la voix passive et repérer le complément d'agent",
        "Identifier les phrases impersonnelles et emphatiques",
      ],
      sections: [
        {
          titre: "Rapporter des paroles : direct ou indirect",
          blocs: [
            { t: "definition", terme: "Discours direct", md: "Les paroles sont citées **telles quelles**, entre **guillemets**, introduites par un **verbe de parole** (dire, demander, murmurer, répliquer, chuchoter). Un tiret signale chaque changement d'interlocuteur. Le verbe de parole peut être placé dans une **incise** : « Je viendrai, **dit-elle**, dès demain. »" },
            { t: "definition", terme: "Discours indirect", md: "Les paroles sont **intégrées au récit** dans une proposition subordonnée : « Il a dit **qu'il viendrait** ». Les **guillemets**, les **points d'interrogation** et d'**exclamation** disparaissent." },
            { t: "tableau", titre: "Ce qui change au discours indirect (verbe de parole au passé)", entetes: ["Discours direct", "Discours indirect"], lignes: [["je, mon, nous", "il / elle, son, ils"], ["présent : « je **suis** »", "imparfait : qu'il **était**"], ["passé composé : « j'**ai menti** »", "plus-que-parfait : qu'il **avait menti**"], ["futur : « je **viendrai** »", "conditionnel présent : qu'il **viendrait**"], ["aujourd'hui, demain, hier", "ce jour-là, **le lendemain**, **la veille**"], ["ici", "là"], ["« Où vas-tu ? »", "elle m'a demandé **où j'allais**"]] },
            { t: "exemple", titre: "Transposer : Elle m'a dit : « Je viendrai demain avec mon frère. »", etapes: ["Pronoms : « je » devient « elle », « mon » devient « son ».", "Temps : le futur « viendrai » devient le conditionnel « viendrait » (futur dans le passé).", "Repère : « demain » devient « le lendemain ».", "Résultat : Elle m'a dit **qu'elle viendrait le lendemain avec son frère**."] },
            { t: "astuce", md: "Choisis un verbe de parole précis : il dit le **ton**. « Ne faites pas de bruit », **chuchota**-t-il : le verbe montre qu'il parle à voix basse. Pense aussi à *s'écrier, répliquer, avouer, ordonner, supplier*." },
            { t: "verifie", q: "Transpose : Il a dit : « Je viendrai demain. »", choix: ["Il a dit qu'il viendra demain.", "Il a dit qu'il viendrait le lendemain.", "Il a dit que je viendrais demain."], bonne: 1, explication: "« Je » devient « il », le futur devient conditionnel (verbe de parole au passé) et « demain » devient « le lendemain »." },
          ],
        },
        {
          titre: "Le discours indirect libre",
          blocs: [
            { t: "texte", md: "Les romanciers du XIXe siècle (Flaubert, Zola, Maupassant) aiment une troisième forme, plus discrète : le **discours indirect libre**. Les pensées ou paroles du personnage se glissent dans le récit, **sans verbe introducteur ni « que »**, mais avec les temps et les pronoms du récit." },
            { t: "exemple", titre: "Repérer le discours indirect libre", md: "« Elle regarda la pluie contre la vitre. **Quelle journée ! Jamais elle ne sortirait par un temps pareil.** »\n\nPas de guillemets, pas de « elle pensa que » : pourtant, c'est bien le personnage qui pense. L'exclamation et le conditionnel « sortirait » trahissent sa voix. ==On entend le personnage à travers le narrateur.==" },
          ],
        },
        {
          titre: "La voix active et la voix passive",
          blocs: [
            { t: "propriete", titre: "Former la voix passive", md: "Le **COD** de la phrase active devient **sujet** ; le verbe se construit avec **être** + **participe passé** accordé ; l'ancien sujet devient **complément d'agent**, introduit par **par** (parfois **de** : « aimé de tous »).\n\n==Seuls les verbes qui ont un COD peuvent se mettre au passif.==" },
            { t: "schema", titre: "De l'actif au passif", legende: "Les deux groupes changent de place ; « être » se met au temps du verbe actif (ici le futur).", svg: `<svg viewBox="0 0 400 200"><g class="texte-petit" text-anchor="middle"><text x="70" y="32">sujet</text><text x="195" y="32">verbe actif (futur)</text><text x="325" y="32">COD</text><text x="75" y="190">sujet</text><text x="205" y="190">être + participe passé</text><text x="335" y="190">complément d'agent</text></g><rect class="aplat-papier" x="20" y="40" width="100" height="30"/><rect class="trait" x="20" y="40" width="100" height="30" fill="none"/><rect class="aplat-papier" x="135" y="40" width="120" height="30"/><rect class="trait" x="135" y="40" width="120" height="30" fill="none"/><rect class="aplat" x="270" y="40" width="110" height="30"/><rect class="trait" x="270" y="40" width="110" height="30" fill="none"/><rect class="aplat" x="20" y="140" width="110" height="30"/><rect class="trait" x="20" y="140" width="110" height="30" fill="none"/><rect class="aplat-papier" x="140" y="140" width="130" height="30"/><rect class="trait" x="140" y="140" width="130" height="30" fill="none"/><rect class="aplat-papier" x="280" y="140" width="110" height="30"/><rect class="trait" x="280" y="140" width="110" height="30" fill="none"/><g class="texte" text-anchor="middle"><text x="70" y="60">Le jury</text><text x="195" y="60">récompensera</text><text x="325" y="60">les lauréats.</text><text x="75" y="160">Les lauréats</text><text x="205" y="160">seront récompensés</text><text x="335" y="160">par le jury.</text></g><line x1="315" y1="72" x2="85" y2="136" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><line class="trait-fin" x1="80" y1="72" x2="325" y2="136" marker-end="url(#fl)"/><line class="pointille" x1="200" y1="72" x2="203" y2="136"/></svg>` },
            { t: "etapes", titre: "Passer de l'actif au passif", items: [{ titre: "Repérer le COD", md: "« Le chat mange **la souris**. »" }, { titre: "En faire le sujet", md: "« **La souris**… »" }, { titre: "Conjuguer être + participe passé", md: "« mange » est au présent, donc « **est mangée** » (accordé avec « la souris »)." }, { titre: "Ajouter le complément d'agent", md: "« La souris est mangée **par le chat**. »" }] },
            { t: "attention", md: "« être » + participe passé ne veut pas toujours dire passif ! « Il **est parti** à l'aube » est un **passé composé actif** : « partir » se conjugue avec être et n'a pas de COD. Pour vérifier, cherche un complément d'agent possible : « parti par quelqu'un » n'a aucun sens." },
            { t: "verifie", q: "Dans « Le gâteau a été mangé par les enfants », quelle est la fonction de « par les enfants » ?", choix: ["COD", "Complément d'agent", "Complément circonstanciel de lieu"], bonne: 1, explication: "La phrase est au passif (« a été mangé »). « Par les enfants » désigne ceux qui font l'action : c'est le complément d'agent. À l'actif : « Les enfants ont mangé le gâteau »." },
          ],
        },
        {
          titre: "Phrases impersonnelles et emphatiques",
          blocs: [
            { t: "definition", terme: "Phrase impersonnelle", md: "Son sujet **il** ne désigne **personne** ni rien : « **Il** pleut », « **Il** faut partir », « **Il** est arrivé un malheur ». Dans ce dernier exemple, « il » est le sujet grammatical ; « un malheur » est le **sujet réel** (on peut dire « Un malheur est arrivé »)." },
            { t: "definition", terme: "Phrase emphatique", md: "Une phrase qui **met en relief** un élément :\n• par un **présentatif** : « **C'est** Paul **qui** a gagné la course » ;\n• par un **détachement** repris par un pronom : « Ce livre, je **l'**adore »." },
          ],
        },
      ],
      bilan: "Pour rapporter des paroles, change pronoms, temps et repères ; pour le passif, le COD devient sujet et l'ancien sujet devient complément d'agent ; pour insister, pense à « c'est… qui ».",
    },
    "4e-francais-08-conjugaison": {
      accroche: "« Si j'aurais su, j'aurais pas venu ! » Cette réplique célèbre d'un film fait rire parce qu'elle accumule les fautes. Pour dire une hypothèse, un souhait ou un ordre des événements, le français dispose de temps précis : apprends à les manier, et tes phrases gagneront en finesse.",
      objectifs: [
        "Former le plus-que-parfait, le passé antérieur et le futur antérieur, et exprimer l'antériorité",
        "Conjuguer le conditionnel présent et passé et connaître ses valeurs",
        "Conjuguer le subjonctif présent et passé et savoir quand l'employer",
      ],
      sections: [
        {
          titre: "Les temps composés : l'action accomplie avant",
          blocs: [
            { t: "propriete", titre: "Former un temps composé", md: "**Auxiliaire** (avoir ou être) conjugué + **participe passé**. Chaque temps composé correspond à un temps simple : c'est le temps de l'auxiliaire qui le nomme." },
            { t: "tableau", titre: "Les temps composés de l'indicatif", entetes: ["Temps composé", "Auxiliaire au…", "Exemple"], lignes: [["Passé composé", "présent", "j'**ai** fini, je **suis** venu"], ["Plus-que-parfait", "**imparfait**", "j'**avais** fini, j'**étais** venu"], ["Passé antérieur", "**passé simple**", "j'**eus** fini, je **fus** venu"], ["Futur antérieur", "**futur**", "j'**aurai** fini, je **serai** venu"]] },
            { t: "schema", titre: "L'antériorité sur la ligne du temps", legende: "Dans chaque phrase, l'action 1 (temps composé) est terminée avant l'action 2 (temps simple).", svg: `<svg viewBox="0 0 400 200"><text class="texte-petit" x="200" y="18" text-anchor="middle">Le temps composé marque l'action terminée avant l'autre</text><line class="trait" x1="16" y1="100" x2="388" y2="100" marker-end="url(#fl)"/><line class="pointille" x1="200" y1="56" x2="200" y2="150"/><text class="texte-pigment" x="200" y="48" text-anchor="middle">maintenant</text><circle cx="60" cy="100" r="5" fill="var(--pigment)"/><circle cx="150" cy="100" r="5" fill="var(--pigment)"/><circle cx="255" cy="100" r="5" fill="var(--pigment)"/><circle cx="345" cy="100" r="5" fill="var(--pigment)"/><path class="trait-fin" fill="none" d="M64 92 Q105 56 144 90" marker-end="url(#fl)"/><path class="trait-fin" fill="none" d="M259 92 Q300 56 339 90" marker-end="url(#fl)"/><text class="texte-petit" x="105" y="64" text-anchor="middle">1 puis 2</text><text class="texte-petit" x="300" y="64" text-anchor="middle">1 puis 2</text><g class="texte" text-anchor="middle"><text x="60" y="120">eut fini</text><text x="150" y="120">sortit</text><text x="255" y="120">auras fini</text><text x="345" y="120">sortiras</text></g><g class="texte-petit" text-anchor="middle"><text x="60" y="136">passé antérieur</text><text x="150" y="136">passé simple</text><text x="255" y="136">futur antérieur</text><text x="345" y="136">futur simple</text><text x="105" y="166">Quand il eut fini, il sortit.</text><text x="300" y="166">Quand tu auras fini, tu sortiras.</text></g><text class="texte-main" x="105" y="192" text-anchor="middle">passé</text><text class="texte-main" x="300" y="192" text-anchor="middle">futur</text></svg>` },
            { t: "exemple", titre: "Choisir le bon temps composé", etapes: ["« Quand je suis arrivé, le film **avait** déjà **commencé**. » Plus-que-parfait : antérieur à un passé composé ou à un imparfait.", "« Dès qu'il **eut fini** son repas, il sortit. » Passé antérieur : antérieur à un passé simple, dans un récit.", "« Quand tu **auras fini** tes devoirs, tu sortiras. » Futur antérieur : antérieur à un futur."] },
          ],
        },
        {
          titre: "Le conditionnel : imaginer, supposer, demander poliment",
          blocs: [
            { t: "propriete", titre: "Former le conditionnel", md: "**Présent** : radical du **futur** + terminaisons de l'**imparfait** (-ais, -ais, -ait, -ions, -iez, -aient) : je **viendr**-ais, nous **ser**-ions.\n**Passé** : auxiliaire au conditionnel présent + participe passé : j'**aurais compris**, je **serais venu**." },
            { t: "attention", md: "À l'oral, « je mangerai » (futur) et « je mangerais » (conditionnel) se ressemblent. Remplace par « nous » : « nous mangerons » → futur, « nous mangerions » → conditionnel." },
            { t: "tableau", titre: "Les valeurs du conditionnel", entetes: ["Valeur", "Exemple"], lignes: [["Hypothèse (irréel)", "Si j'avais le temps, je **viendrais** te voir."], ["Futur dans le passé", "Il a dit qu'il **viendrait**."], ["Politesse", "**Pourriez**-vous m'aider ?"], ["Information non confirmée", "Selon la radio, le ministre **serait** en visite demain."]] },
            { t: "propriete", titre: "Le système hypothétique", md: "• Si + **imparfait** → conditionnel **présent** : « Si j'avais le temps, je viendrais. »\n• Si + **plus-que-parfait** → conditionnel **passé** : « Si tu avais écouté, tu **aurais compris**. » L'hypothèse porte sur le passé et ne s'est pas réalisée.\n\n==Jamais de conditionnel juste après « si » !== On dit « Si j'avais su, je ne serais pas venu »." },
            { t: "verifie", q: "Quelle phrase est correcte ?", choix: ["Si j'aurais su, je ne serais pas venu.", "Si j'avais su, je ne serais pas venu.", "Si j'avais su, je ne venais pas."], bonne: 1, explication: "Si + plus-que-parfait (« avais su ») → conditionnel passé (« serais venu »). Le conditionnel ne se place jamais après « si »." },
          ],
        },
        {
          titre: "Le subjonctif : vouloir, douter, ressentir",
          blocs: [
            { t: "propriete", titre: "Former le subjonctif présent", md: "Radical de la 3e personne du pluriel du présent (**ils** finiss-ent) + **-e, -es, -e, -ions, -iez, -ent** : que je finisse, que nous finissions.\n**Subjonctif passé** : auxiliaire au subjonctif + participe passé : que j'**aie réussi**, qu'elle **soit venue**." },
            { t: "tableau", titre: "Les subjonctifs irréguliers à connaître par cœur", entetes: ["Verbe", "Subjonctif présent"], lignes: [["être", "que je **sois**, que nous soyons"], ["avoir", "que j'**aie**, que nous ayons"], ["aller", "que j'**aille**, que nous **allions**"], ["faire", "que je **fasse**"], ["pouvoir", "que je **puisse**, qu'il **puisse**"], ["savoir", "que je **sache**"], ["vouloir", "que je **veuille**"]] },
            { t: "liste", titre: "Quand emploie-t-on le subjonctif ?", items: ["Après **il faut que** : « Il faut que tu **sois** à l'heure et que tu **fasses** tes devoirs. »", "Après les verbes de **volonté**, de **souhait**, de **doute** et de **sentiment** : je veux que, je souhaite que, je doute que, je suis content que tu **aies réussi**.", "Après **bien que, pour que, avant que, à condition que** : « Avant qu'il **parte**, dis-lui au revoir. »"] },
            { t: "attention", md: "Deux pièges classiques :\n• **après que** se construit avec l'**indicatif** (l'action est réalisée) : « après qu'il **est** parti ».\n• **je pense que** + indicatif (« Je pense qu'il **viendra** »), mais **je ne pense pas que** + subjonctif (« Je ne pense pas qu'il **vienne** »), car la négation exprime un **doute**." },
            { t: "verifie", q: "Complète : « Il faut que nous ___ à la gare avant huit heures. »", choix: ["allons", "allions", "irons", "aillent"], bonne: 1, explication: "« Il faut que » impose le subjonctif : que nous allions. « Allons » est l'indicatif présent, « irons » le futur, « aillent » la 3e personne du pluriel." },
          ],
        },
      ],
      bilan: "Un temps composé dit ce qui est déjà fait, le conditionnel imagine, le subjonctif veut, doute ou ressent ; et après « si », jamais de conditionnel.",
    },
    "4e-francais-09-orthographe": {
      accroche: "« Les fleurs que j'ai cueillies » mais « j'ai cueilli des fleurs » : pourquoi un *-ies* dans un cas et rien dans l'autre ? Ce n'est pas un caprice. L'orthographe suit une logique : le participe passé regarde ce qui est déjà écrit avant lui.",
      objectifs: [
        "Accorder le participe passé avec être, avec avoir et avec les verbes pronominaux",
        "Maîtriser les accords de tout, même, leur, demi et nu",
        "Distinguer les homophones et choisir entre -é, -er et -ez",
      ],
      sections: [
        {
          titre: "Le participe passé avec être et avec avoir",
          blocs: [
            { t: "propriete", titre: "Les deux règles de base", md: "• Avec **être**, le participe passé s'accorde avec le **sujet** : « Elles sont **parties**. »\n• Avec **avoir**, il s'accorde avec le **COD** seulement si celui-ci est placé **avant** le verbe : « les fleurs **que** j'ai **cueillies** », « ces photos, je **les** ai **regardées** ». Sinon, il ne s'accorde pas : « Elle a **mangé** une pomme. »" },
            { t: "etapes", titre: "Accorder un participe passé avec avoir", items: [{ titre: "Trouve le COD", md: "Pose la question « quoi ? » ou « qui ? » après le verbe : j'ai cueilli **quoi** ? Les fleurs." }, { titre: "Où est-il ?", md: "Le COD est-il avant le verbe (souvent un pronom : que, les, la, l', me, nous) ou après ?" }, { titre: "COD après ou absent", md: "**Pas d'accord** : « J'ai cueilli des fleurs », « Elle a mangé »." }, { titre: "COD avant", md: "**Accord** avec ce COD : « Les fleurs **que** j'ai cueilli**es** » (que = les fleurs, féminin pluriel)." }] },
            { t: "exemple", titre: "« Ces photos, je les ai regardées longtemps. »", md: "Le COD est « les », qui reprend « ces photos » (féminin pluriel). Il est placé **avant** le verbe : le participe s'accorde, *regardées*. Mais dans « J'ai regardé ces photos », le COD vient **après** : pas d'accord." },
            { t: "verifie", q: "Complète : « Les lettres que tu as ___ sont arrivées. »", choix: ["écrit", "écrites", "écrits"], bonne: 1, explication: "Le COD « que » remplace « les lettres » (féminin pluriel) et il est placé avant « as écrit » : accord, écrites." },
          ],
        },
        {
          titre: "Les verbes pronominaux",
          blocs: [
            { t: "texte", md: "Les verbes pronominaux (se laver, se parler) se conjuguent avec **être**, mais on les accorde **comme avec avoir** : on cherche le COD et sa place. Pour le trouver, remplace mentalement *être* par *avoir* : « elle s'est lavée » → « elle a lavé **qui** ? elle-même »." },
            { t: "tableau", titre: "Trois cas à connaître", entetes: ["Phrase", "Le COD", "Accord ?"], lignes: [["Elle s'est **lavée**.", "« s' » (elle-même), placé avant", "oui"], ["Elle s'est **lavé** les mains.", "« les mains », placé après", "non"], ["Elles se sont **parlé**.", "aucun : « se » est COI (parler **à** quelqu'un)", "non"]] },
            { t: "verifie", q: "Complète : « Elles se sont ___ pendant une heure au téléphone. »", choix: ["parlé", "parlées", "parlés"], bonne: 0, explication: "On parle à quelqu'un : « se » est un COI, pas un COD. Sans COD placé avant, le participe reste invariable : parlé." },
          ],
        },
        {
          titre: "Tout, même, leur, demi, nu",
          blocs: [
            { t: "tableau", titre: "Les accords délicats", entetes: ["Mot", "Variable", "Invariable"], lignes: [["**tout**", "déterminant ou pronom : **tous** les jours, **toutes** les filles ; devant un adjectif féminin commençant par une consonne : elles sont **toutes** contentes", "adverbe (= tout à fait) devant un adjectif : ils sont **tout** contents, elles sont **tout** émues"], ["**même**", "adjectif (= identique, en personne) : les **mêmes** livres, eux-**mêmes**", "adverbe (= aussi) : **même** les enfants ont ri"], ["**leur**", "déterminant devant un nom : **leurs** cahiers", "pronom devant un verbe : je **leur** parle"], ["**demi**", "après le nom, accord en genre : deux heures et **demie**", "devant le nom, avec trait d'union : une **demi**-heure"], ["**nu**", "après le nom : pieds **nus**", "devant le nom, avec trait d'union : **nu**-pieds, **nu**-tête"]] },
            { t: "astuce", md: "Pour **leur** : s'il est devant un **verbe**, remplace par « lui » au singulier. « Je **leur** ai dit » → « Je **lui** ai dit » : c'est le pronom, toujours sans *s*." },
            { t: "attention", md: "« Elles sont **toutes** contentes » mais « elles sont **tout** émues » : devant un adjectif féminin qui commence par une **voyelle**, *tout* reste invariable ; devant une **consonne** (ou un *h* aspiré), il s'accorde pour mieux sonner." },
          ],
        },
        {
          titre: "Homophones et terminaisons -é, -er, -ez",
          blocs: [
            { t: "tableau", titre: "Des homophones à ne pas confondre", entetes: ["Homophone", "Sens", "Exemple"], lignes: [["quoique", "bien que", "**Quoique** fatigué, il continue."], ["quoi que", "quelle que soit la chose que", "**Quoi que** tu fasses, je te soutiendrai."], ["quand", "lorsque, à quel moment", "**Quand** pars-tu ?"], ["quant à", "en ce qui concerne", "**Quant à** moi, je reste."], ["plutôt", "de préférence", "Prends **plutôt** le bus."], ["plus tôt", "contraire de plus tard", "Le train est arrivé **plus tôt** que prévu."]] },
            { t: "propriete", titre: "-é, -er ou -ez ?", md: "Remplace le verbe par un verbe du 3e groupe comme **vendre** :\n• « vendu » → **-é** (participe passé) : vous avez **chanté** ;\n• « vendre » → **-er** (infinitif) : vous allez **chanter** ;\n• « vendez » → **-ez** (2e personne du pluriel) : **chantez** plus fort !" },
            { t: "verifie", q: "Complète : « ___ tu fasses, je te soutiendrai. »", choix: ["Quoique", "Quoi que"], bonne: 1, explication: "Le sens est « quelle que soit la chose que tu fasses » : on écrit en deux mots, quoi que. « Quoique » signifie « bien que »." },
          ],
        },
      ],
      bilan: "Avec être, accorde avec le sujet ; avec avoir, regarde si le COD est avant ; et pour les homophones, remplace : « bien que », « vendre », « lui » sont tes meilleurs détecteurs.",
    },
    "4e-francais-10-lexique-figures": {
      accroche: "« Maison », « demeure », « baraque » : trois mots pour désigner le même logement. Pourtant, tu n'imagines pas du tout la même chose ! Les mots ne disent pas seulement ce qu'ils désignent, ils colorent ce qu'ils touchent. Et quand les écrivains les assemblent en figures, ils frappent l'imagination.",
      objectifs: [
        "Distinguer dénotation et connotation",
        "Identifier les principales figures de style et expliquer leur effet",
        "Reconnaître les registres d'un texte",
        "Utiliser l'étymologie et le vocabulaire de l'argumentation",
      ],
      sections: [
        {
          titre: "Dénotation et connotation",
          blocs: [
            { t: "definition", terme: "Dénotation", md: "Le **sens objectif** d'un mot, celui que donne le dictionnaire. « Maison » dénote un bâtiment où l'on habite." },
            { t: "definition", terme: "Connotation", md: "Le **sens associé**, subjectif, que le mot suggère en plus. Une connotation peut être **méliorative** (valorisante) ou **péjorative** (dévalorisante)." },
            { t: "exemple", titre: "Trois mots, un même logement", md: "• « une **demeure** » : connotation **méliorative** (grande, belle, élégante) ;\n• « une **maison** » : mot **neutre** ;\n• « une **baraque** » : connotation **péjorative** (mal construite, sans charme).\n\nChoisir un mot, c'est déjà donner son avis." },
          ],
        },
        {
          titre: "Les figures de style",
          blocs: [
            { t: "tableau", titre: "Les figures à connaître", entetes: ["Famille", "Figure", "Exemple", "Effet"], lignes: [["Analogie", "**comparaison** (avec un outil : comme, tel, semblable à)", "« fort **comme** un lion »", "rapproche deux réalités"], ["Analogie", "**métaphore** (sans outil)", "« cet homme **est** un lion »", "image plus directe, plus forte"], ["Analogie", "**personnification**", "« la rue hurlait »", "donne vie à une chose"], ["Substitution", "**métonymie**", "« boire **un verre** », « **toute la salle** applaudit »", "un mot pour un autre qui lui est lié (contenant, lieu)"], ["Substitution", "**périphrase**", "« **la Ville lumière** » (Paris)", "remplace un mot par une expression"], ["Opposition", "**antithèse**", "« Je vis, je meurs » (Labé)", "oppose deux idées dans la phrase"], ["Opposition", "**oxymore**", "« cette **obscure clarté** » (Corneille)", "accole deux mots contraires"], ["Amplification", "**hyperbole**", "« Je **meurs** de faim ! »", "exagère"], ["Amplification", "**gradation**", "« Va, cours, vole » (Corneille)", "intensité croissante"], ["Amplification", "**anaphore**", "« **Paris** outragé ! **Paris** brisé ! »", "répète en début de phrase ou de vers"], ["Atténuation", "**litote**", "« Va, je ne te hais point » (Corneille)", "dire moins pour faire entendre plus"], ["Atténuation", "**euphémisme**", "« il nous a quittés » (il est mort)", "adoucit une réalité pénible"]] },
            { t: "citation", texte: "Paris ! Paris outragé ! Paris brisé ! Paris martyrisé ! mais Paris libéré !", auteur: "Charles de Gaulle", source: "Discours de l'Hôtel de Ville, 25 août 1944" },
            { t: "exemple", titre: "Analyser une figure en trois temps", etapes: ["**Je cite** : « Paris outragé ! Paris brisé ! Paris martyrisé ! »", "**Je nomme** : une **anaphore** (« Paris » répété) et une **gradation** des participes, de plus en plus forts.", "**J'explique l'effet** : la souffrance monte jusqu'au renversement final, « mais Paris libéré ! » ; le discours soulève l'émotion de la foule."] },
            { t: "attention", md: "**Antithèse** ou **oxymore** ? L'antithèse oppose deux idées dans une phrase (« Je vis, je meurs »). L'oxymore colle deux mots contraires **dans un même groupe** (« obscure clarté », « un silence assourdissant »)." },
            { t: "verifie", q: "« Toute la salle applaudit. » Quelle figure de style est à l'œuvre ?", choix: ["Une hyperbole", "Une métonymie : le lieu désigne les spectateurs", "Une personnification"], bonne: 1, explication: "Ce ne sont pas les murs qui applaudissent, mais les spectateurs : on nomme le lieu pour désigner ceux qui s'y trouvent. C'est une métonymie." },
          ],
        },
        {
          titre: "Les registres : quel effet sur le lecteur ?",
          blocs: [
            { t: "tableau", titre: "Six registres", entetes: ["Registre", "Effet recherché", "Exemple"], lignes: [["Lyrique", "partager une **émotion intime**, à la 1re personne", "« Demain, dès l'aube » (Hugo)"], ["Comique", "faire **rire**", "Harpagon qui se saisit le bras"], ["Tragique", "faire ressentir la **fatalité** d'un destin", "un héros condamné malgré lui"], ["Pathétique", "inspirer la **pitié** devant la souffrance", "la misère de Fantine (Hugo)"], ["Fantastique", "faire **hésiter** et inquiéter devant l'étrange", "*Le Horla* (Maupassant)"], ["Épique", "exalter l'**héroïsme**, la démesure", "un combat contre mille ennemis"]] },
            { t: "verifie", q: "Un poème où l'auteur exprime à la 1re personne sa tristesse amoureuse relève du registre :", choix: ["épique", "lyrique", "comique"], bonne: 1, explication: "Un « je » qui confie ses sentiments personnels : c'est le registre lyrique." },
          ],
        },
        {
          titre: "L'étymologie et les mots pour argumenter",
          blocs: [
            { t: "texte", md: "La plupart des mots français viennent du **latin** ou du **grec**. En repérant le **radical**, le **préfixe** et le **suffixe**, tu peux deviner le sens d'un mot inconnu." },
            { t: "schema", titre: "Décomposer un mot savant", legende: "Deux racines grecques suffisent souvent à retrouver le sens d'un mot.", svg: `<svg viewBox="0 0 400 250"><text class="texte-main" x="200" y="30" text-anchor="middle">bibliothèque</text><line class="trait-fin" x1="170" y1="38" x2="125" y2="56" marker-end="url(#fl)"/><line class="trait-fin" x1="230" y1="38" x2="275" y2="56" marker-end="url(#fl)"/><rect class="aplat" x="60" y="60" width="130" height="44"/><rect class="trait" x="60" y="60" width="130" height="44" fill="none"/><rect class="aplat" x="210" y="60" width="130" height="44"/><rect class="trait" x="210" y="60" width="130" height="44" fill="none"/><text class="texte" x="125" y="78" text-anchor="middle">biblio-</text><text class="texte-petit" x="125" y="96" text-anchor="middle">biblion : livre</text><text class="texte" x="275" y="78" text-anchor="middle">-thèque</text><text class="texte-petit" x="275" y="96" text-anchor="middle">thêkê : armoire</text><text class="texte-pigment" x="200" y="122" text-anchor="middle">= l'armoire à livres</text><text class="texte-main" x="200" y="152" text-anchor="middle">philanthrope</text><line class="trait-fin" x1="170" y1="160" x2="125" y2="176" marker-end="url(#fl)"/><line class="trait-fin" x1="230" y1="160" x2="275" y2="176" marker-end="url(#fl)"/><rect class="aplat-papier" x="60" y="180" width="130" height="44"/><rect class="trait" x="60" y="180" width="130" height="44" fill="none"/><rect class="aplat-papier" x="210" y="180" width="130" height="44"/><rect class="trait" x="210" y="180" width="130" height="44" fill="none"/><text class="texte" x="125" y="198" text-anchor="middle">phil-</text><text class="texte-petit" x="125" y="216" text-anchor="middle">philein : aimer</text><text class="texte" x="275" y="198" text-anchor="middle">-anthrope</text><text class="texte-petit" x="275" y="216" text-anchor="middle">anthrôpos : humain</text><text class="texte-pigment" x="200" y="244" text-anchor="middle">= qui aime les êtres humains</text></svg>` },
            { t: "astuce", md: "D'autres racines utiles : **-logie** (étude : la biologie étudie le vivant), **-phobe** (qui craint), **chrono-** (temps), **graph-** (écrire). Un *anthropologue* étudie donc l'être humain." },
            { t: "propriete", titre: "Le vocabulaire de l'argumentation", md: "• **Thèse** : l'idée défendue. **Argument** : une raison. **Exemple** : un fait précis qui illustre.\n• **Réfuter** : prouver qu'une thèse est fausse. **Concéder** : admettre un point de l'adversaire.\n• **Convaincre** : s'adresser à la **raison** par des arguments. **Persuader** : toucher les **émotions**." },
          ],
        },
      ],
      bilan: "Un mot dit plus qu'il ne désigne, une figure frappe plus qu'une phrase plate : cite, nomme, explique l'effet, et le texte te livre ses secrets.",
    },
    "4e-francais-11-argumentation": {
      accroche: "Le 13 janvier 1898, un journal parisien publie en une un texte de Zola qui commence par deux mots devenus célèbres : « J'accuse…! ». Une lettre peut-elle changer le cours d'une affaire judiciaire ? Celle-ci l'a fait. Argumenter, c'est donner à ses idées la force de convaincre.",
      objectifs: [
        "Identifier thèse, arguments, exemples et connecteurs logiques",
        "Connaître les formes de l'argumentation : lettre ouverte, plaidoyer, réquisitoire, débat",
        "Appliquer la méthode de l'explication de texte et du commentaire",
      ],
      sections: [
        {
          titre: "Thèse, arguments, exemples",
          blocs: [
            { t: "definition", terme: "Thèse", md: "L'**idée principale** que l'on défend. Pour la soutenir, on avance des **arguments** (des raisons) illustrés par des **exemples** (des faits précis)." },
            { t: "schema", titre: "Le plan d'une argumentation", legende: "Chaque argument est annoncé par un connecteur et prouvé par un exemple ; la conclusion revient à la thèse.", svg: `<svg viewBox="0 0 400 256"><text class="texte-pigment" x="92" y="35" text-anchor="end">thèse</text><rect class="aplat-fort" x="100" y="12" width="200" height="36" opacity="0.35"/><rect class="trait" x="100" y="12" width="200" height="36" fill="none"/><text class="texte" x="200" y="35" text-anchor="middle">Il faut lire des romans</text><g class="trait-fin"><line x1="180" y1="48" x2="72" y2="80" marker-end="url(#fl)"/><line x1="200" y1="48" x2="200" y2="80" marker-end="url(#fl)"/><line x1="220" y1="48" x2="328" y2="80" marker-end="url(#fl)"/></g><g class="texte-petit"><text x="122" y="60" text-anchor="end">D'abord</text><text x="206" y="70">Ensuite</text><text x="278" y="60">Enfin</text></g><rect class="aplat" x="8" y="82" width="120" height="40"/><rect class="trait" x="8" y="82" width="120" height="40" fill="none"/><rect class="aplat" x="140" y="82" width="120" height="40"/><rect class="trait" x="140" y="82" width="120" height="40" fill="none"/><rect class="aplat" x="272" y="82" width="120" height="40"/><rect class="trait" x="272" y="82" width="120" height="40" fill="none"/><g class="texte-petit" text-anchor="middle"><text x="68" y="98">Argument 1</text><text x="68" y="114">développe l'empathie</text><text x="200" y="98">Argument 2</text><text x="200" y="114">enrichit le lexique</text><text x="332" y="98">Argument 3</text><text x="332" y="114">fait voyager</text></g><g class="trait-fin"><line x1="68" y1="122" x2="68" y2="148" marker-end="url(#fl)"/><line x1="200" y1="122" x2="200" y2="148" marker-end="url(#fl)"/><line x1="332" y1="122" x2="332" y2="148" marker-end="url(#fl)"/></g><rect class="aplat-papier" x="8" y="150" width="120" height="40"/><rect class="pointille" x="8" y="150" width="120" height="40" fill="none"/><rect class="aplat-papier" x="140" y="150" width="120" height="40"/><rect class="pointille" x="140" y="150" width="120" height="40" fill="none"/><rect class="aplat-papier" x="272" y="150" width="120" height="40"/><rect class="pointille" x="272" y="150" width="120" height="40" fill="none"/><g class="texte-petit" text-anchor="middle"><text x="68" y="166">exemple</text><text x="68" y="182">Fantine (Hugo)</text><text x="200" y="166">exemple</text><text x="200" y="182">le mot « spleen »</text><text x="332" y="166">exemple</text><text x="332" y="182">le Paris de Zola</text></g><g class="trait-fin"><line x1="68" y1="190" x2="140" y2="214" marker-end="url(#fl)"/><line x1="200" y1="190" x2="200" y2="214" marker-end="url(#fl)"/><line x1="332" y1="190" x2="260" y2="214" marker-end="url(#fl)"/></g><rect class="trait" x="100" y="216" width="200" height="34" fill="none"/><text class="texte-petit" x="200" y="237" text-anchor="middle">Conclusion : retour à la thèse</text></svg>` },
            { t: "etapes", titre: "Construire un paragraphe argumentatif", items: [{ titre: "Annoncer", md: "Un connecteur et l'argument : « **D'abord**, la lecture développe l'empathie. »" }, { titre: "Expliquer", md: "Une ou deux phrases : « En effet, elle nous fait vivre de l'intérieur ce que ressentent les autres. »" }, { titre: "Illustrer", md: "Un exemple précis : « Ainsi, en lisant *Les Misérables*, on comprend la détresse de Fantine. »" }, { titre: "Conclure", md: "Relier à la thèse : « Lire des romans nous rend donc plus humains. »" }] },
            { t: "attention", md: "**Un exemple ne remplace pas un argument.** « Mon cousin dort beaucoup et il est premier de la classe » est un cas isolé : il illustre, il ne prouve pas. Un argument solide s'appuie sur des faits vérifiables, par exemple une étude menée sur des milliers d'élèves." },
            { t: "verifie", q: "« Les téléphones devraient être interdits au collège. En effet, ils détournent l'attention : lors d'un cours, un élève a reçu quarante notifications en une heure. » Quel élément est l'exemple ?", choix: ["« Les téléphones devraient être interdits au collège »", "« ils détournent l'attention »", "« un élève a reçu quarante notifications en une heure »"], bonne: 2, explication: "La 1re partie est la thèse, « ils détournent l'attention » est l'argument, et le fait précis et chiffré des quarante notifications est l'exemple." },
          ],
        },
        {
          titre: "Les connecteurs et les stratégies",
          blocs: [
            { t: "tableau", titre: "Les connecteurs logiques", entetes: ["Relation", "Connecteurs"], lignes: [["Addition", "d'abord, ensuite, de plus, **en outre**, enfin"], ["Cause, justification", "car, **en effet**, puisque"], ["Conséquence", "donc, ainsi, **par conséquent**"], ["Opposition", "mais, **cependant**, pourtant, en revanche"], ["Concession", "**certes**… mais, bien que"]] },
            { t: "propriete", titre: "Réfuter et concéder", md: "• **Réfuter**, c'est démontrer qu'une thèse adverse est **fausse**.\n• **Concéder**, c'est **admettre** un point de l'adversaire pour mieux le dépasser : « **Certes**, le sport est fatigant, **mais** il est excellent pour la santé. »" },
            { t: "attention", md: "Attaquer la personne au lieu de ses idées n'est pas un argument : « Tu défends le vélo en ville, mais tu es nul en sport, donc tu as tort. » Cet argument *ad hominem* (« contre l'homme ») ne dit rien du vélo." },
          ],
        },
        {
          titre: "Lettre ouverte, plaidoyer, débat",
          blocs: [
            { t: "definition", terme: "Lettre ouverte", md: "Une lettre adressée à une personne mais **publiée dans la presse** pour être lue par tous et **interpeller** l'opinion publique." },
            { t: "exemple", titre: "« J'accuse…! » (Zola, 1898)", md: "Publiée en une du journal *L'Aurore*, la lettre s'adresse au **président de la République**, Félix Faure. Zola y défend le **capitaine Dreyfus**, condamné à tort pour trahison, et accuse nommément ceux qui ont couvert l'erreur. Il est condamné pour diffamation, mais la lettre relance l'affaire : Dreyfus sera réhabilité en 1906." },
            { t: "liste", items: ["**Plaidoyer** : discours qui **défend** une personne ou une cause.", "**Réquisitoire** : discours qui **accuse**.", "**Débat** : échange où l'on **écoute**, **reformule** l'argument de l'autre et **répond** à ses arguments, sans couper la parole ni attaquer la personne."] },
            { t: "verifie", q: "Comment appelle-t-on un discours qui défend une personne ou une cause ?", choix: ["Un réquisitoire", "Un plaidoyer", "Une tirade"], bonne: 1, explication: "Le plaidoyer défend (comme l'avocat qui plaide) ; le réquisitoire accuse (comme le procureur)." },
          ],
        },
        {
          titre: "Expliquer et commenter un texte",
          blocs: [
            { t: "etapes", titre: "Préparer un commentaire de texte", items: [{ titre: "Lire et situer", md: "Lis le texte plusieurs fois ; situe-le : auteur, œuvre, genre, époque." }, { titre: "Dégager l'idée générale", md: "De quoi parle le texte, et dans quel but ? Formule une **problématique** (une question)." }, { titre: "Relever les procédés", md: "Figures, temps, lexique, ponctuation : note chaque procédé et son **effet**." }, { titre: "Regrouper", md: "Classe tes remarques en deux ou trois **parties**, selon les idées, pas ligne à ligne." }, { titre: "Rédiger", md: "Introduction (présentation, problématique, annonce du plan), développement, conclusion." }] },
            { t: "propriete", titre: "La règle d'or de chaque remarque", md: "**Citer** le texte entre **guillemets** → **nommer** le **procédé** → **expliquer** son **effet**.\nExemple : « La rue assourdissante autour de moi hurlait » : la **personnification** de la rue montre une ville agressive qui écrase le poète." },
          ],
        },
      ],
      bilan: "Une thèse, des arguments, des exemples, des connecteurs : c'est la charpente de toute argumentation ; et pour commenter, cite, nomme, explique.",
    },
    "4e-francais-12-expression": {
      accroche: "Écrire une lettre à un adulte, un article pour le journal du collège, la suite d'un récit, une scène de théâtre, puis présenter un exposé devant la classe : chaque situation a ses codes. Les connaître, c'est être compris du premier coup.",
      objectifs: [
        "Écrire un récit cohérent : narrateur, point de vue, système des temps",
        "Respecter les codes de la description, de l'article, de la lettre et de la scène de théâtre",
        "Ponctuer un dialogue, construire des paragraphes et réussir un oral",
      ],
      sections: [
        {
          titre: "Écrire la suite d'un récit",
          blocs: [
            { t: "propriete", titre: "Ce qu'il faut absolument conserver", md: "• les mêmes **personnages** et le même **narrateur** (« je » ou « il ») ;\n• le même **point de vue** ;\n• le même **système des temps** : au passé, le **passé simple** pour les actions de premier plan qui font avancer l'histoire, l'**imparfait** pour l'arrière-plan (descriptions, habitudes) ;\n• le même **ton**." },
            { t: "exemple", titre: "« Léa poussa la porte du grenier. Elle avait toujours redouté cet endroit. »", md: "Suite cohérente : « Une odeur de poussière la **saisit**. Elle **hésita**, puis **avança** vers la malle qu'elle **apercevait** dans l'ombre. »\n\nOn garde la 3e personne, le passé simple et l'imparfait, et le regard de Léa. Passer au « je », au présent ou au passé composé briserait la cohérence." },
            { t: "attention", md: "Dans un récit à la **1re personne**, le narrateur ne sait que ce qu'il voit, entend, pense et ressent. « Derrière la porte, mon frère pensait que je l'avais oublié » est incohérent : il ne peut pas lire les pensées des autres. Écris plutôt « Je me demandais ce que mon frère pensait »." },
            { t: "verifie", q: "Dans un récit au passé, quel temps emploie-t-on pour les actions de premier plan ?", choix: ["L'imparfait", "Le passé simple", "Le présent"], bonne: 1, explication: "Le passé simple fait avancer l'action (« il entra, il cria »). L'imparfait décrit l'arrière-plan (« il faisait nuit »)." },
          ],
        },
        {
          titre: "Dialogue et paragraphes",
          blocs: [
            { t: "schema", titre: "La mise en page d'un dialogue", legende: "Guillemets au début et à la fin du dialogue, un tiret à chaque changement de locuteur, une incise entre virgules.", svg: `<svg viewBox="0 0 400 172"><rect class="aplat-papier" x="116" y="16" width="276" height="140"/><rect class="trait-fin" x="116" y="16" width="276" height="140" fill="none"/><g class="texte-petit"><text x="144" y="40">Léa s'approcha de la malle.</text><text x="128" y="62"><tspan class="texte-pigment">«</tspan> Tu crois qu'elle est vide ?</text><text x="128" y="84"><tspan class="texte-pigment">–</tspan> Ouvre-la, toi !</text><text x="128" y="106"><tspan class="texte-pigment">–</tspan> Je n'en sais rien, répondit Tom. <tspan class="texte-pigment">»</tspan></text><text x="144" y="140">Elle souleva le couvercle.</text></g><line class="pointille" x1="248" y1="111" x2="318" y2="111"/><text class="texte-pigment" x="284" y="126" text-anchor="middle">incise</text><text class="texte-pigment" x="386" y="82" text-anchor="end">guillemet fermant</text><line class="trait-fin" x1="350" y1="86" x2="338" y2="96" marker-end="url(#fl)"/><g class="texte-petit"><text x="8" y="40">alinéa</text><text x="8" y="62">guillemet</text><text x="8" y="84">tiret</text><text x="8" y="106">tiret</text><text x="8" y="140">alinéa</text></g><g class="trait-fin"><line x1="48" y1="36" x2="138" y2="36" marker-end="url(#fl)"/><line x1="66" y1="58" x2="122" y2="58" marker-end="url(#fl)"/><line x1="40" y1="80" x2="122" y2="80" marker-end="url(#fl)"/><line x1="40" y1="102" x2="122" y2="102" marker-end="url(#fl)"/><line x1="48" y1="136" x2="138" y2="136" marker-end="url(#fl)"/></g></svg>` },
            { t: "propriete", titre: "Les règles du dialogue", md: "• **Guillemets** à l'ouverture et à la fermeture du dialogue.\n• Un **tiret**, à la ligne, à chaque **changement de locuteur**.\n• L'**incise** (« dit-elle », « promit-il ») est encadrée de **virgules** et son sujet est **inversé** : « Je reviendrai, **promit-il**, dès demain. »" },
            { t: "definition", terme: "Alinéa", md: "Le **retrait** de la première ligne qui marque le début d'un **paragraphe**. Règle simple : ==une idée nouvelle, un nouveau paragraphe==." },
          ],
        },
        {
          titre: "Les codes des genres d'écrits",
          blocs: [
            { t: "tableau", titre: "À chaque écrit ses exigences", entetes: ["Écrit", "Ce qu'il exige"], lignes: [["**Description**", "un point de vue, un **ordre** (du loin au près, de gauche à droite), les cinq sens, un champ lexical dominant, une ou deux figures ; jamais une liste en vrac"], ["**Article**", "titre informatif, **chapeau**, réponses à qui ? quoi ? où ? quand ? pourquoi ?, **faits avant opinions**"], ["**Lettre**", "lieu et date, formule d'appel, corps, formule de politesse, signature"], ["**Scène de théâtre**", "le **nom du personnage** avant chaque réplique, des **didascalies** en italique ou entre parenthèses, **aucun narrateur** : tout passe par les paroles"]] },
            { t: "etapes", titre: "Les parties d'une lettre, dans l'ordre", items: [{ titre: "Lieu et date", md: "En haut à droite : « Lyon, le 12 mars 2026 »." }, { titre: "Formule d'appel", md: "« Madame, », « Monsieur, », ou « Cher Paul, »." }, { titre: "Corps de la lettre", md: "Le message, organisé en paragraphes." }, { titre: "Formule de politesse", md: "À un adulte que l'on vouvoie : « Je vous prie d'agréer, Madame, l'expression de mes salutations respectueuses. »" }, { titre: "Signature", md: "Ton prénom et ton nom." }] },
            { t: "exemple", titre: "Présenter une scène de théâtre", md: "LE MAÎTRE, *fouillant ses poches*. — Où est ma bourse ?\nLE VALET, *à part*. — Il ne la retrouvera pas de sitôt.\n\nLe nom du personnage annonce chaque réplique ; les didascalies en italique indiquent gestes et apartés. Aucun « dit-il » : au théâtre, il n'y a pas de narrateur." },
            { t: "verifie", q: "Dans un article d'information, le journaliste doit-il donner son opinion dès le chapeau ?", choix: ["Oui, pour accrocher le lecteur", "Non, le chapeau résume les faits essentiels"], bonne: 1, explication: "L'article d'information donne les faits d'abord. L'opinion appartient à l'éditorial ou à la tribune." },
          ],
        },
        {
          titre: "Réussir à l'oral",
          blocs: [
            { t: "liste", titre: "Un exposé structuré", items: ["**Annonce ton plan** au début : le public sait où tu vas.", "Utilise des **transitions** (« Après avoir vu…, passons à… »).", "**Conclus** en résumant l'essentiel et en ouvrant une question.", "Regarde le **public** ; parle à partir de **notes** (mots clés), ne lis pas un texte rédigé."] },
            { t: "astuce", md: "**Lecture expressive** : respecte la ponctuation (pause à la virgule, plus longue au point), varie le **rythme**, le **volume** et le **ton** selon le sens. Une question monte, une colère s'accélère, une tristesse ralentit." },
          ],
        },
      ],
      bilan: "Écrire ou parler, c'est respecter un contrat avec son lecteur ou son public : garde la cohérence du récit, les codes du genre, et une idée par paragraphe.",
    },
  },
};
