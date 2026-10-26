// Cours ÉCLORE — 6e Enseignement moral et civique. Schéma : docs/COURS.md
export default {
  id: "6e-emc",
  chapitres: {
    "6e-emc-01-vivre-ensemble-college": {
      accroche: "Premier jour de 6e : un nouveau bâtiment, des dizaines d'adultes, des centaines d'élèves… et un carnet qui contient un long texte appelé « règlement intérieur ». Pourquoi tant de règles ? Et si l'une d'elles te semble injuste, as-tu ton mot à dire ?",
      objectifs: [
        "Expliquer à quoi sert le règlement intérieur et pourquoi une sanction doit être juste",
        "Savoir à quel adulte du collège t'adresser selon la situation",
        "Comprendre comment on élit les délégués de classe et quel est leur rôle",
      ],
      sections: [
        {
          titre: "Des règles pour vivre ensemble",
          blocs: [
            { t: "texte", md: "Imagine une cour de récréation sans aucune règle : chacun pousse, crie, prend le ballon des autres. Très vite, les plus forts imposent leur loi et les autres ont peur. ==Une règle ne sert pas d'abord à punir : elle protège== chacun et permet de vivre ensemble en sécurité.\n\nAu collège, ces règles sont écrites dans un texte que tout le monde peut lire." },
            { t: "definition", terme: "Règlement intérieur", md: "Le texte qui fixe les **droits et les devoirs de tous** au collège : élèves, professeurs, personnels, familles. Il est voté par le **conseil d'administration**, où siègent des adultes, des parents et aussi des **représentants des élèves**." },
            { t: "tableau", titre: "Tes droits et tes devoirs au collège", entetes: ["Tu as le droit…", "Tu as le devoir…"], lignes: [["d'être respecté, de ne subir aucune violence", "de respecter les autres, élèves comme adultes"], ["d'apprendre dans de bonnes conditions", "d'être présent, à l'heure, et de faire ton travail"], ["de t'exprimer, notamment par tes délégués", "de t'exprimer poliment, sans insulter"], ["d'utiliser les locaux et le matériel", "de prendre soin des locaux et du matériel"]] },
            { t: "texte", md: "La **politesse** fait partie de ces règles : dire bonjour, merci, s'il te plaît, ce n'est pas une formalité. C'est une manière de montrer à l'autre qu'il compte. Et le règlement s'applique **à tous**, y compris aux adultes : un professeur n'a pas le droit de t'humilier, par exemple." },
          ],
        },
        {
          titre: "Quand une règle n'est pas respectée",
          blocs: [
            { t: "propriete", titre: "Une sanction juste", md: "Une **sanction** répond à une faute. Pour être juste, elle doit être :\n• **proportionnée** : une petite faute, une petite sanction ;\n• **individuelle** : on ne punit pas toute la classe pour la faute d'un seul ;\n• **expliquée** : l'élève peut donner sa version avant qu'on décide." },
            { t: "exemple", titre: "Deux situations, deux réponses", md: "Léo oublie trois fois son cahier : le professeur peut lui donner un travail supplémentaire, c'est une **punition scolaire**. Inès insulte gravement un surveillant : c'est plus sérieux, le principal peut prononcer une **sanction disciplinaire** (un avertissement, par exemple). La réponse dépend de la gravité de la faute." },
            { t: "attention", md: "Ne pas être d'accord avec une règle n'autorise pas à la désobéir. Ce que tu peux faire : **en parler** calmement à un adulte, demander à tes **délégués** de porter la question, ou t'adresser au **conseil de vie collégienne**. Une règle peut changer, mais par le dialogue." },
          ],
        },
        {
          titre: "Qui fait quoi au collège ?",
          blocs: [
            { t: "schema", titre: "Les adultes autour de toi", legende: "Chaque adulte a un rôle précis. Tous sont là pour que tu puisses apprendre et grandir en sécurité.", svg: `<svg viewBox="0 0 400 260"><g class="trait-fin"><line x1="140" y1="56" x2="164" y2="112"/><line x1="260" y1="56" x2="236" y2="112"/><line x1="130" y1="130" x2="148" y2="130"/><line x1="270" y1="130" x2="252" y2="130"/><line x1="140" y1="204" x2="164" y2="150"/><line x1="260" y1="204" x2="236" y2="150"/></g><ellipse class="aplat" cx="200" cy="130" rx="52" ry="28"/><ellipse class="trait" cx="200" cy="130" rx="52" ry="28"/><text class="texte-main" x="200" y="136" text-anchor="middle">Toi, élève</text><rect class="aplat-papier" x="20" y="14" width="120" height="44" rx="6"/><rect class="trait" x="20" y="14" width="120" height="44" rx="6"/><text class="texte" x="80" y="33" text-anchor="middle">Principal</text><text class="texte-petit" x="80" y="49" text-anchor="middle">dirige le collège</text><rect class="aplat-papier" x="260" y="14" width="120" height="44" rx="6"/><rect class="trait" x="260" y="14" width="120" height="44" rx="6"/><text class="texte" x="320" y="33" text-anchor="middle">CPE</text><text class="texte-petit" x="320" y="49" text-anchor="middle">vie scolaire</text><rect class="aplat-papier" x="10" y="108" width="120" height="44" rx="6"/><rect class="trait" x="10" y="108" width="120" height="44" rx="6"/><text class="texte" x="70" y="127" text-anchor="middle">Professeurs</text><text class="texte-petit" x="70" y="143" text-anchor="middle">enseignent</text><rect class="aplat-papier" x="270" y="108" width="120" height="44" rx="6"/><rect class="trait" x="270" y="108" width="120" height="44" rx="6"/><text class="texte" x="330" y="127" text-anchor="middle">Infirmier(e)</text><text class="texte-petit" x="330" y="143" text-anchor="middle">soigne, écoute</text><rect class="aplat-papier" x="20" y="202" width="120" height="44" rx="6"/><rect class="trait" x="20" y="202" width="120" height="44" rx="6"/><text class="texte" x="80" y="221" text-anchor="middle">Surveillants</text><text class="texte-petit" x="80" y="237" text-anchor="middle">encadrent, aident</text><rect class="aplat-papier" x="260" y="202" width="120" height="44" rx="6"/><rect class="trait" x="260" y="202" width="120" height="44" rx="6"/><text class="texte" x="320" y="221" text-anchor="middle">Agents</text><text class="texte-petit" x="320" y="237" text-anchor="middle">entretien, cantine</text></svg>` },
            { t: "texte", md: "Le **principal** (le chef d'établissement) dirige le collège, aidé d'un principal adjoint. Le **CPE**, conseiller principal d'éducation, organise la vie scolaire avec les surveillants (les assistants d'éducation) : absences, retards, conflits, écoute. Les **professeurs** enseignent ; ton **professeur principal** suit ta classe de près. L'**infirmier ou l'infirmière** soigne et écoute, les **agents** entretiennent les locaux et préparent les repas. Il y a aussi le professeur documentaliste au CDI, et souvent un psychologue de l'Éducation nationale et une assistante sociale." },
            { t: "verifie", q: "Tu as un problème avec un camarade pendant la récréation. Quel adulte est chargé de la vie scolaire ?", choix: ["L'infirmière", "Le CPE", "Le professeur de maths", "L'agent d'entretien"], bonne: 1, explication: "Le CPE (conseiller principal d'éducation) s'occupe de la vie scolaire, avec les surveillants. Tu peux aussi parler à n'importe quel adulte de confiance : il saura te diriger." },
          ],
        },
        {
          titre: "Élire ses délégués",
          blocs: [
            { t: "texte", md: "Dans chaque classe, les élèves élisent **deux délégués** et **deux suppléants**, qui les remplacent en cas d'absence. Les délégués **représentent** la classe : ils portent sa parole auprès des adultes, notamment au **conseil de classe**. Celui-ci réunit en fin de trimestre le principal, les professeurs, le CPE, les délégués des élèves et ceux des parents." },
            { t: "etapes", titre: "Comment se passe l'élection", items: [{ titre: "Candidatures", md: "Les volontaires se présentent, souvent en binôme avec un suppléant." }, { titre: "Campagne", md: "Chacun explique pourquoi il veut être délégué et ce qu'il propose." }, { titre: "Vote", md: "Au **scrutin secret** : on écrit un nom sur un bulletin, à l'abri des regards, et on le glisse dans l'urne." }, { titre: "Dépouillement", md: "On ouvre l'urne et on compte les voix devant la classe." }, { titre: "Résultat", md: "Au 1er tour, il faut la **majorité absolue**. Sinon, on fait un **2e tour** : celui qui a le plus de voix est élu." }] },
            { t: "exemple", titre: "Calculer la majorité absolue", etapes: ["24 élèves votent, aucun bulletin blanc.", "La majorité absolue, c'est plus de la moitié des voix : la moitié de 24 est 12.", "Il faut donc au moins 13 voix pour être élu dès le 1er tour.", "Si personne n'a 13 voix, on vote une seconde fois : la majorité relative (le plus de voix) suffit."] },
            { t: "attention", md: "Un délégué **n'est pas un chef** : il ne donne pas de punitions et ne parle pas à la place des adultes. Il écoute ses camarades, transmet leurs idées et leurs difficultés, et rapporte à la classe ce qui a été dit." },
            { t: "verifie", q: "Dans une classe de 30 élèves, tous votent. Combien de voix faut-il au minimum pour être élu au 1er tour ?", choix: ["15", "16", "20"], bonne: 1, explication: "La moitié de 30 est 15. Il faut plus de la moitié, donc au moins 16 voix. Avec 15 voix pile, on n'a pas la majorité absolue." },
          ],
        },
      ],
      bilan: "Le règlement protège tout le monde, adultes compris ; les délégués que tu élis portent ta voix : au collège, on apprend déjà à vivre en citoyen.",
    },
    "6e-emc-02-respect-harcelement": {
      accroche: "Dans un groupe de discussion de la classe, une photo de Sami circule, avec des moqueries. Tout le monde rit, ou fait semblant. Toi, tu te sens mal à l'aise. Juste une blague ? Ou quelque chose de plus grave ? Et surtout : que peux-tu faire ?",
      objectifs: [
        "Définir l'empathie, le respect et la discrimination",
        "Reconnaître une situation de harcèlement ou de cyberharcèlement",
        "Savoir comment réagir et à qui s'adresser, que tu sois victime ou témoin",
      ],
      sections: [
        {
          titre: "Se mettre à la place de l'autre",
          blocs: [
            { t: "definition", terme: "Empathie", md: "La capacité de **comprendre ce que ressent une autre personne**, de se mettre à sa place. Elle n'est pas un don réservé à quelques-uns : elle s'apprend et se travaille." },
            { t: "texte", md: "**Respecter** quelqu'un, ce n'est pas forcément être d'accord avec lui ou l'apprécier. C'est reconnaître sa **dignité**, c'est-à-dire sa valeur d'être humain, et ne pas lui faire de **mal** : ni coups, ni insultes, ni humiliations.\n\nSe moquer de l'accent, de l'apparence, des vêtements ou du prénom de quelqu'un est un manque de respect, même « pour rire ». Celui qui rit ne ressent pas ce que ressent celui dont on rit." },
            { t: "definition", terme: "Discrimination", md: "Traiter une personne **moins bien que les autres** à cause de ce qu'elle est : son origine, son sexe, son handicap, sa religion, son apparence… La discrimination est **interdite par la loi**." },
          ],
        },
        {
          titre: "Reconnaître le harcèlement",
          blocs: [
            { t: "texte", md: "Deux élèves se disputent, s'énervent, puis se réconcilient : c'est un **conflit**, désagréable mais normal. Le harcèlement est tout autre chose. On le reconnaît à **trois signes** qui s'additionnent." },
            { t: "propriete", titre: "Les trois signes du harcèlement", md: "1. **La violence** : moqueries, insultes, coups, rumeurs, mise à l'écart.\n2. **La répétition** : cela recommence, jour après jour.\n3. **L'isolement de la victime** : c'est toujours la même personne, qui n'arrive pas à se défendre seule." },
            { t: "schema", titre: "Que faire si… je vois un élève pris pour cible ?", legende: "Un arbre de décision : même quand on hésite, en parler à un adulte n'est jamais une erreur.", svg: `<svg viewBox="0 0 400 300"><rect class="aplat-papier" x="70" y="10" width="260" height="34" rx="6"/><rect class="trait" x="70" y="10" width="260" height="34" rx="6"/><text class="texte" x="200" y="32" text-anchor="middle">Moqueries, coups, mise à l'écart…</text><path class="trait-fin" d="M200 44 L200 68" marker-end="url(#fl)"/><rect class="aplat" x="120" y="72" width="160" height="34" rx="17"/><rect class="trait" x="120" y="72" width="160" height="34" rx="17"/><text class="texte" x="200" y="94" text-anchor="middle">C'est répété ?</text><path class="trait-fin" d="M150 106 L100 138" marker-end="url(#fl)"/><text class="texte-main" x="108" y="122" text-anchor="end">non</text><path class="trait-fin" d="M250 106 L300 138" marker-end="url(#fl)"/><text class="texte-main" x="292" y="122">oui</text><rect class="aplat-papier" x="10" y="142" width="170" height="50" rx="6"/><rect class="trait" x="10" y="142" width="170" height="50" rx="6"/><text class="texte" x="95" y="162" text-anchor="middle">Un conflit</text><text class="texte-petit" x="95" y="180" text-anchor="middle">on s'explique, un adulte aide</text><rect class="aplat" x="210" y="142" width="180" height="50" rx="17"/><rect class="trait" x="210" y="142" width="180" height="50" rx="17"/><text class="texte-petit" x="300" y="162" text-anchor="middle">Toujours la même cible,</text><text class="texte-petit" x="300" y="178" text-anchor="middle">qui ne peut pas se défendre ?</text><path class="trait-fin" d="M300 192 L300 220" marker-end="url(#fl-p)"/><text class="texte-main" x="308" y="212">oui</text><rect class="aplat-papier" x="200" y="224" width="190" height="66" rx="6"/><rect class="trait" x="200" y="224" width="190" height="66" rx="6"/><text class="texte-pigment" x="295" y="245" text-anchor="middle">Harcèlement</text><text class="texte-petit" x="295" y="263" text-anchor="middle">Alerter un adulte de confiance</text><text class="texte-petit" x="295" y="280" text-anchor="middle">ou appeler le 3020 / le 3018</text><rect class="pointille" x="10" y="224" width="170" height="66" rx="6" fill="none"/><text class="texte-petit" x="95" y="246" text-anchor="middle">Dans tous les cas,</text><text class="texte-petit" x="95" y="262" text-anchor="middle">tu as le droit d'en parler</text><text class="texte-petit" x="95" y="278" text-anchor="middle">à un adulte.</text></svg>` },
            { t: "exemple", titre: "Dispute ou harcèlement ?", md: "Un élève reçoit **chaque jour** des moqueries sur ses vêtements, de la part du **même groupe**. Il baisse la tête et ne répond plus. C'est violent, c'est répété, c'est toujours lui et il ne parvient pas à se défendre : les trois signes sont là, **c'est du harcèlement**. Le bon réflexe : en parler à un adulte de confiance." },
            { t: "verifie", q: "Qu'est-ce qui distingue le harcèlement d'une simple dispute ?", choix: ["Le harcèlement se passe toujours en dehors du collège", "Le harcèlement est répété et vise une personne qui ne peut pas se défendre", "Une dispute est toujours plus violente"], bonne: 1, explication: "Une dispute est ponctuelle et met face à face deux personnes qui peuvent se défendre. Le harcèlement se répète et s'acharne sur une même victime isolée." },
          ],
        },
        {
          titre: "Le cyberharcèlement",
          blocs: [
            { t: "texte", md: "Le **cyberharcèlement**, c'est le harcèlement par les écrans : messages, réseaux sociaux, jeux en ligne, groupes de discussion. Il est particulièrement dur à vivre, car il **suit la victime partout, même à la maison**, de jour comme de nuit. Et un message ou une photo peut être vu par des centaines de personnes en quelques minutes." },
            { t: "etapes", titre: "Tu reçois des messages méchants répétés : les bons réflexes", items: [{ titre: "Ne pas répondre", md: "Répondre relance souvent les attaques. Garde ton calme." }, { titre: "Garder des preuves", md: "Fais des **captures d'écran** des messages, avec la date." }, { titre: "Bloquer et signaler", md: "Bloque le compte et signale-le à la plateforme." }, { titre: "En parler", md: "Parle à un adulte de confiance, ou appelle le **3018**, gratuit et anonyme." }] },
            { t: "savais-tu", md: "Depuis 2022, le **harcèlement scolaire est un délit** inscrit dans la loi française. Il est puni, y compris quand il est commis par des **mineurs**, et y compris en ligne. Le collège applique aussi le programme **pHARe**, un plan de lutte contre le harcèlement, avec des élèves formés pour être ambassadeurs." },
          ],
        },
        {
          titre: "Victime ou témoin : tu n'es pas seul",
          blocs: [
            { t: "tableau", titre: "Qui contacter ?", entetes: ["Numéro", "Pour quoi ?", "Comment ?"], lignes: [["**3020**", "Le harcèlement à l'école", "Gratuit, anonyme"], ["**3018**", "Le cyberharcèlement (écrans, réseaux)", "Gratuit, anonyme, aussi par tchat"], ["Un adulte du collège", "Toute situation qui te pèse", "CPE, professeur, infirmière…"]] },
            { t: "texte", md: "La plupart du temps, le harcèlement se passe **devant des témoins**. Leur attitude change tout. Rire, filmer ou partager, c'est participer. Se taire, c'est laisser faire. À l'inverse, ne pas rire, rester près de la victime, lui dire qu'elle n'est pas seule et **prévenir un adulte**, c'est l'aider vraiment." },
            { t: "attention", md: "Prévenir un adulte, ce n'est **pas « balancer »** ni être un rapporteur. Un rapporteur cherche à faire punir quelqu'un. Toi, tu cherches à **protéger** une personne en danger : c'est un acte de courage." },
            { t: "verifie", q: "Tu es témoin de moqueries répétées contre un camarade. Quelle attitude l'aide vraiment ?", choix: ["Ne rien dire pour ne pas avoir d'ennuis", "Filmer la scène pour la montrer", "Le soutenir et prévenir un adulte"], bonne: 2, explication: "Soutenir la victime et alerter un adulte permet de faire cesser le harcèlement. Filmer ou se taire, même sans mauvaise intention, laisse la violence continuer." },
          ],
        },
      ],
      bilan: "Violence, répétition, isolement : quand ces trois signes sont là, ce n'est plus un jeu. Parler à un adulte, c'est protéger, jamais trahir.",
    },
    "6e-emc-03-droits-enfant": {
      accroche: "Dans certains pays, des enfants de ton âge travaillent dans des mines ou des usines au lieu d'aller à l'école. Est-ce normal ? Depuis 1989, un texte signé par presque tous les pays du monde répond clairement : non. Les enfants ont des droits, et les États doivent les protéger.",
      objectifs: [
        "Connaître la Convention internationale des droits de l'enfant (date, définition de l'enfant)",
        "Identifier les grands droits de l'enfant à partir de situations concrètes",
        "Savoir quelles institutions et quels numéros protègent les enfants",
      ],
      sections: [
        {
          titre: "Un texte pour tous les enfants du monde",
          blocs: [
            { t: "definition", terme: "CIDE", md: "La **Convention internationale des droits de l'enfant**, adoptée par l'ONU le **20 novembre 1989**. Ce texte de 54 articles a été ratifié par presque tous les pays du monde. Ceux qui l'ont ratifié s'engagent à la respecter. La France l'a fait en 1990." },
            { t: "citation", texte: "Au sens de la présente Convention, un enfant s'entend de tout être humain âgé de moins de dix-huit ans…", auteur: "Convention internationale des droits de l'enfant", source: "Article 1, 1989" },
            { t: "texte", md: "Pour la Convention, tu es donc un **enfant jusqu'à 18 ans**. Pourquoi un texte spécial pour les enfants, alors qu'il existe déjà des droits de l'homme ? Parce qu'un enfant est plus **fragile** : il dépend des adultes pour se nourrir, se soigner, apprendre. Il a donc besoin d'une **protection particulière**." },
            { t: "frise", titre: "Les grandes étapes des droits", evenements: [{ date: 1789, label: "Déclaration des droits de l'homme et du citoyen", detail: "En France, pendant la Révolution." }, { date: 1924, label: "Déclaration de Genève", detail: "Premier texte international sur les droits de l'enfant." }, { date: 1946, label: "Création de l'UNICEF", detail: "D'abord pour aider les enfants après la Seconde Guerre mondiale." }, { date: 1948, label: "Déclaration universelle des droits de l'homme", detail: "Adoptée par l'ONU." }, { date: 1959, label: "Déclaration des droits de l'enfant", detail: "Dix grands principes, mais pas obligatoires." }, { date: 1989, label: "Convention internationale des droits de l'enfant", detail: "Les États qui la ratifient s'engagent à l'appliquer." }] },
          ],
        },
        {
          titre: "Les grands droits de l'enfant",
          blocs: [
            { t: "tableau", titre: "Des situations, des droits", entetes: ["Situation", "Droit concerné"], lignes: [["Un bébé reçoit un prénom, un nom, il est déclaré à la mairie", "Droit à une **identité** et à une nationalité"], ["Une enfant malade est soignée à l'hôpital", "Droit à la **santé**"], ["Tous les enfants vont à l'école", "Droit à l'**éducation**"], ["Un enfant n'est ni battu ni forcé à travailler", "Droit à la **protection** contre les violences et l'exploitation"], ["Les élèves donnent leur avis sur la cour de récréation", "Droit de **s'exprimer** et d'être écouté"]] },
            { t: "exemple", titre: "Le travail des enfants", md: "Un enfant qui travaille toute la journée au lieu d'aller à l'école est privé de son **droit à l'éducation**, et souvent de son droit à la santé : fatigue, blessures, produits dangereux. C'est pourquoi la Convention demande aux États de **protéger les enfants contre le travail** qui nuit à leur santé ou à leur scolarité. Aider à mettre la table chez soi, bien sûr, ce n'est pas de l'exploitation !" },
            { t: "texte", md: "En France, l'**instruction est obligatoire de 3 à 16 ans**, pour tous les enfants, filles et garçons, quelle que soit leur origine. L'école publique est gratuite : l'éducation est un droit, pas un privilège." },
            { t: "verifie", q: "Tout enfant a le droit d'avoir un nom et une nationalité dès sa naissance. Vrai ou faux ?", choix: ["Vrai", "Faux"], bonne: 0, explication: "C'est le droit à l'identité. Sans nom ni nationalité, un enfant serait « invisible » : il aurait du mal à aller à l'école ou à être soigné." },
          ],
        },
        {
          titre: "Des droits… et aussi des devoirs",
          blocs: [
            { t: "texte", md: "Avoir des droits ne veut pas dire tout avoir le droit de faire. Tes droits existent parce que **les autres enfants ont les mêmes**. Ton droit d'apprendre dépend du calme de la classe ; ton droit au respect dépend du respect que chacun accorde aux autres." },
            { t: "propriete", titre: "Droits et devoirs vont ensemble", md: "Les enfants ont des **droits** que les adultes et les États doivent garantir. Ils ont aussi des **devoirs** : respecter les autres et leurs droits, respecter les règles de vie commune, aller à l'école et y travailler." },
            { t: "attention", md: "Le **droit de s'exprimer** ne signifie pas décider de tout seul. Il signifie que ton avis doit être **écouté et pris en compte** pour les décisions qui te concernent, en tenant compte de ton âge et de ta maturité." },
          ],
        },
        {
          titre: "Qui protège les enfants ?",
          blocs: [
            { t: "liste", titre: "Les protecteurs des droits de l'enfant", items: ["**L'UNICEF** : l'agence de l'ONU qui agit pour les enfants dans le monde entier (vaccins, eau potable, écoles, aide d'urgence).", "**Le Défenseur des droits** : une autorité indépendante en France. Son adjoint, le **Défenseur des enfants**, veille au respect des droits de l'enfant. Un enfant peut le saisir lui-même.", "**Le 119, « Allô enfance en danger »** : un numéro gratuit, joignable **24 heures sur 24**, même la nuit, qui n'apparaît pas sur les factures de téléphone.", "**Les adultes de ton entourage** : parents, professeurs, infirmière, CPE… Ils ont le devoir d'agir si un enfant est en danger."] },
            { t: "savais-tu", md: "Le **20 novembre** est devenu la **Journée internationale des droits de l'enfant**, en souvenir de l'adoption de la Convention. Dans beaucoup de collèges, on organise ce jour-là des débats ou des expositions." },
            { t: "verifie", q: "Combien d'années séparent la Déclaration des droits de l'homme et du citoyen (1789) de la Convention des droits de l'enfant (1989) ?", choix: ["100 ans", "200 ans", "189 ans"], bonne: 1, explication: "1989 − 1789 = 200. Il a fallu deux siècles pour qu'un texte international protège spécialement les enfants." },
          ],
        },
      ],
      bilan: "Depuis le 20 novembre 1989, tout être humain de moins de 18 ans a des droits reconnus partout dans le monde : être nommé, soigné, instruit, protégé et écouté.",
    },
    "6e-emc-04-valeurs-symboles-republique": {
      accroche: "Sur le chemin du collège, passe devant la mairie et lève les yeux : un drapeau bleu, blanc, rouge, trois mots gravés dans la pierre, et peut-être, derrière une fenêtre, le buste d'une femme coiffée d'un bonnet. Ces signes ne sont pas là par hasard : ils racontent ce qu'est la République.",
      objectifs: [
        "Reconnaître les symboles de la République et connaître leur origine",
        "Expliquer le sens de la devise Liberté, Égalité, Fraternité",
        "Situer la Déclaration des droits de l'homme et du citoyen de 1789",
      ],
      sections: [
        {
          titre: "Les symboles que l'on voit chaque jour",
          blocs: [
            { t: "schema", titre: "Une mairie, trois symboles", legende: "Devant et dans une mairie, on retrouve souvent réunis le drapeau, la devise et Marianne.", svg: `<svg viewBox="0 0 400 260"><line class="trait" x1="200" y1="52" x2="200" y2="8"/><rect class="aplat-fort" x="200" y="10" width="16" height="24"/><rect class="aplat-papier" x="216" y="10" width="16" height="24"/><rect class="aplat" x="232" y="10" width="16" height="24"/><rect class="trait-fin" x="200" y="10" width="48" height="24" fill="none"/><text class="texte-petit" x="256" y="20">drapeau</text><text class="texte-petit" x="256" y="33">bleu, blanc, rouge</text><path class="aplat-papier" d="M50 100 L200 52 L350 100 Z"/><path class="trait" d="M50 100 L200 52 L350 100 Z"/><text class="texte" x="200" y="92" text-anchor="middle">MAIRIE</text><rect class="aplat-papier" x="60" y="100" width="280" height="150"/><rect class="trait" x="60" y="100" width="280" height="150"/><rect class="aplat" x="60" y="100" width="280" height="24"/><text class="texte-petit" x="200" y="116" text-anchor="middle">LIBERTÉ   ÉGALITÉ   FRATERNITÉ</text><rect class="aplat-papier" x="90" y="136" width="60" height="60"/><rect class="trait" x="90" y="136" width="60" height="60"/><path class="aplat-fort" d="M110 158 Q113 144 127 146 Q134 150 131 158 Z"/><circle class="trait" cx="120" cy="164" r="9" fill="none"/><path class="trait" d="M104 194 Q106 178 120 176 Q134 178 136 194" fill="none"/><text class="texte-petit" x="120" y="214" text-anchor="middle">buste de Marianne</text><rect class="trait" x="250" y="136" width="60" height="60"/><line class="trait-fin" x1="280" y1="136" x2="280" y2="196"/><line class="trait-fin" x1="250" y1="166" x2="310" y2="166"/><path class="aplat" d="M175 250 L175 190 Q200 170 225 190 L225 250 Z"/><path class="trait" d="M175 250 L175 190 Q200 170 225 190 L225 250 Z" fill="none"/><line class="trait" x1="20" y1="250" x2="380" y2="250"/><path class="trait-fin" d="M200 137 L200 128" marker-end="url(#fl)"/><text class="texte-main" x="200" y="153" text-anchor="middle">devise</text></svg>` },
            { t: "texte", md: "Le **drapeau tricolore** est né pendant la Révolution. Selon l'explication traditionnelle, le **blanc** était la couleur du roi, le **bleu et le rouge** celles de la ville de Paris : réunir les trois couleurs, c'était unir le roi et le peuple. Le drapeau flotte sur les bâtiments publics : mairies, écoles, préfectures.\n\n**Marianne** est une figure de femme qui **représente la République**. Elle porte un **bonnet phrygien**, symbole de **liberté** : dans la Rome antique, les esclaves libérés portaient un bonnet de ce type. Son buste trône dans les mairies, et son visage figure sur les timbres et les pièces." },
            { t: "texte", md: "**La Marseillaise** est l'hymne national. Elle a été écrite en **1792** à Strasbourg par **Rouget de Lisle**, pour les soldats partant à la guerre. Des volontaires venus de Marseille l'ont chantée en arrivant à Paris : d'où son nom." },
            { t: "verifie", q: "Que porte Marianne sur la tête, et que symbolise-t-il ?", choix: ["Une couronne, symbole du pouvoir royal", "Un bonnet phrygien, symbole de liberté", "Un casque, symbole de la guerre"], bonne: 1, explication: "Le bonnet phrygien rappelle les esclaves libérés de l'Antiquité. Marianne, c'est la République libre : elle ne porte surtout pas de couronne !" },
          ],
        },
        {
          titre: "Liberté, Égalité, Fraternité",
          blocs: [
            { t: "definition", terme: "Devise de la République", md: "**« Liberté, Égalité, Fraternité »**. Née pendant la Révolution, elle est inscrite au **fronton des mairies et des écoles** depuis la fin du XIXe siècle. Ces trois mots résument les valeurs qui doivent guider la vie commune." },
            { t: "tableau", titre: "Ce que veut dire chaque mot", entetes: ["Valeur", "Ce qu'elle signifie", "Un exemple"], lignes: [["**Liberté**", "Pouvoir agir, penser et s'exprimer, tant qu'on ne nuit pas aux autres", "Tu peux donner ton avis en classe"], ["**Égalité**", "Tous ont les mêmes droits et la même loi s'applique à tous", "Chaque citoyen a une voix quand il vote"], ["**Fraternité**", "Être solidaire, s'entraider comme les membres d'une même famille", "Une collecte pour les personnes sans abri"]] },
            { t: "attention", md: "**Égalité** ne veut pas dire que tout le monde est pareil ! Nous sommes tous différents par nos goûts, nos talents, nos origines. L'égalité, c'est avoir **les mêmes droits** malgré ces différences." },
          ],
        },
        {
          titre: "1789 : une déclaration pour tous les hommes",
          blocs: [
            { t: "texte", md: "Le **26 août 1789**, quelques semaines après la prise de la Bastille, les députés adoptent la **Déclaration des droits de l'homme et du citoyen** (DDHC). Pour la première fois en France, un texte affirme que les droits ne dépendent pas de la naissance : finis, en principe, les privilèges des nobles." },
            { t: "citation", texte: "Les hommes naissent et demeurent libres et égaux en droits.", auteur: "Déclaration des droits de l'homme et du citoyen", source: "Article 1er, 26 août 1789" },
            { t: "propriete", titre: "Un texte universel", md: "La DDHC est dite **universelle** parce qu'elle ne parle pas seulement des Français : elle affirme des droits valables pour **tous les êtres humains**, partout et à toute époque. Elle fait toujours partie de nos lois aujourd'hui." },
            { t: "verifie", q: "Pourquoi dit-on que la Déclaration de 1789 est un texte « universel » ?", choix: ["Parce qu'elle a été signée par tous les pays du monde", "Parce qu'elle affirme des droits valables pour tous les êtres humains", "Parce qu'elle a été écrite dans toutes les langues"], bonne: 1, explication: "« Universel » veut dire « qui concerne tout le monde ». La Déclaration n'a pas été signée par d'autres pays, mais elle parle des droits de chaque être humain." },
          ],
        },
        {
          titre: "Le 14 juillet et la Constitution",
          blocs: [
            { t: "frise", titre: "Naissance des symboles", evenements: [{ date: 1789, label: "Prise de la Bastille (14 juillet) et DDHC (26 août)", detail: "Le début de la Révolution française." }, { date: 1790, label: "Fête de la Fédération (14 juillet)", detail: "Une grande fête d'unité nationale, un an après la Bastille." }, { date: 1792, label: "Rouget de Lisle écrit La Marseillaise" }, { date: 1794, label: "Le drapeau tricolore devient le drapeau national" }, { date: 1880, label: "Le 14 juillet devient la fête nationale" }, { date: 1958, label: "Constitution de la Ve République", detail: "Son article 2 inscrit le drapeau, l'hymne et la devise." }] },
            { t: "exemple", titre: "Que fête-t-on le 14 juillet ?", md: "Beaucoup pensent qu'on fête seulement la prise de la Bastille. En réalité, le 14 juillet rappelle **deux événements** : la **prise de la Bastille** en 1789, révolte contre le pouvoir absolu du roi, et la **fête de la Fédération** en 1790, qui célébrait l'unité de tous les Français. Aujourd'hui, il y a un défilé militaire à Paris, des bals et des feux d'artifice." },
            { t: "savais-tu", md: "La **Constitution de 1958** est le texte le plus important de la République : elle fixe ses règles de fonctionnement. Son article 2 précise que l'emblème est le **drapeau bleu, blanc, rouge**, l'hymne **La Marseillaise** et la devise **« Liberté, Égalité, Fraternité »**. Marianne, elle, n'y figure pas, mais elle est un symbole officiel depuis longtemps." },
          ],
        },
      ],
      bilan: "Un drapeau, un hymne, une devise, une figure et une fête : derrière chaque symbole, il y a une idée née en 1789, celle d'hommes libres et égaux en droits.",
    },
    "6e-emc-05-laicite": {
      accroche: "Dans ta classe, certains élèves fêtent Noël, d'autres l'Aïd, d'autres Hanoukka, d'autres aucune fête religieuse. Pourtant, vous suivez les mêmes cours, avec les mêmes professeurs, et personne ne vous demande ce que vous croyez. Comment est-ce possible ? Grâce à un principe : la laïcité.",
      objectifs: [
        "Définir la laïcité et la liberté de conscience",
        "Connaître la loi de 1905 et la charte de la laïcité à l'école",
        "Comprendre pourquoi l'État et l'école publique doivent être neutres",
      ],
      sections: [
        {
          titre: "La liberté de croire ou de ne pas croire",
          blocs: [
            { t: "definition", terme: "Laïcité", md: "Le principe qui garantit à chacun la **liberté de conscience** et qui **sépare** les religions et l'État. Celui-ci ne favorise aucune religion et n'en défavorise aucune." },
            { t: "definition", terme: "Liberté de conscience", md: "Le droit de **croire en une religion, de ne pas croire, ou de changer** de religion, sans être inquiété ni discriminé." },
            { t: "attention", md: "La laïcité **n'est pas contre les religions**. Elle n'interdit à personne d'avoir une religion et de la pratiquer. Au contraire, elle **protège** tous les croyants et tous les non-croyants, pour qu'ils vivent ensemble **à égalité**." },
            { t: "verifie", q: "La laïcité interdit-elle aux gens d'avoir une religion ?", choix: ["Oui, la religion est interdite en France", "Non, elle garantit la liberté de croire ou de ne pas croire", "Seulement aux enfants"], bonne: 1, explication: "La laïcité protège la liberté de conscience : chacun peut croire, ne pas croire ou changer de religion. Ce qui est neutre, c'est l'État, pas les personnes." },
          ],
        },
        {
          titre: "La loi de 1905 : l'État et les Églises séparés",
          blocs: [
            { t: "texte", md: "Pendant des siècles, en France, la religion catholique était liée au pouvoir : le roi était sacré à Reims, l'Église tenait l'état civil et une grande partie des écoles. La Révolution puis les lois sur l'école ont peu à peu changé cela. En **1905**, une loi tranche : l'État et les Églises seront **séparés**." },
            { t: "citation", texte: "La République assure la liberté de conscience. […] La République ne reconnaît, ne salarie ni ne subventionne aucun culte.", auteur: "Loi de séparation des Églises et de l'État", source: "Articles 1 et 2, 9 décembre 1905" },
            { t: "frise", titre: "Les étapes de la laïcité", evenements: [{ date: 1789, label: "La DDHC protège les opinions « même religieuses »", detail: "Article 10." }, { date: 1882, label: "Lois Jules Ferry : l'école publique devient laïque", detail: "Gratuite en 1881, obligatoire et laïque en 1882." }, { date: 1905, label: "Loi de séparation des Églises et de l'État", detail: "9 décembre 1905." }, { date: 1958, label: "La Constitution affirme que la République est laïque", detail: "Article 1er." }, { date: 2004, label: "Loi sur les signes religieux à l'école publique" }, { date: 2013, label: "Charte de la laïcité à l'école" }] },
            { t: "savais-tu", md: "En Alsace et en Moselle, la loi de 1905 ne s'applique pas : ces territoires étaient allemands en 1905. Ils ont gardé un régime particulier, le **Concordat**, dans lequel l'État rémunère certains cultes." },
          ],
        },
        {
          titre: "Un État neutre, des citoyens libres",
          blocs: [
            { t: "schema", titre: "Qui doit être neutre ?", legende: "La neutralité concerne l'État et ceux qui le représentent ; les citoyens, eux, restent libres de leurs convictions.", svg: `<svg viewBox="0 0 400 250"><rect class="aplat" x="140" y="10" width="120" height="36" rx="18"/><rect class="trait" x="140" y="10" width="120" height="36" rx="18"/><text class="texte" x="200" y="33" text-anchor="middle">Laïcité</text><path class="trait-fin" d="M160 46 L105 82" marker-end="url(#fl)"/><path class="trait-fin" d="M240 46 L295 82" marker-end="url(#fl)"/><rect class="aplat-papier" x="15" y="86" width="175" height="100" rx="6"/><rect class="trait" x="15" y="86" width="175" height="100" rx="6"/><text class="texte" x="102" y="108" text-anchor="middle">L'État et ses agents</text><text class="texte-petit" x="102" y="128" text-anchor="middle">mairie, école publique,</text><text class="texte-petit" x="102" y="143" text-anchor="middle">professeurs, policiers…</text><text class="texte-pigment" x="102" y="172" text-anchor="middle">NEUTRES</text><rect class="aplat-papier" x="210" y="86" width="175" height="100" rx="6"/><rect class="trait" x="210" y="86" width="175" height="100" rx="6"/><text class="texte" x="297" y="108" text-anchor="middle">Les citoyens</text><text class="texte-petit" x="297" y="128" text-anchor="middle">croire, ne pas croire,</text><text class="texte-petit" x="297" y="143" text-anchor="middle">changer de religion</text><text class="texte-pigment" x="297" y="172" text-anchor="middle">LIBRES</text><path class="pointille" d="M102 186 L102 210 L297 210 L297 186" fill="none"/><text class="texte-main" x="200" y="236" text-anchor="middle">tous égaux devant la loi</text></svg>` },
            { t: "texte", md: "Pourquoi l'État doit-il être neutre, et pas les citoyens ? Parce que l'État est **au service de tous**. Si la mairie, l'hôpital ou l'école favorisaient une religion, ceux qui ont d'autres convictions seraient traités moins bien. Les **agents publics** (professeurs, fonctionnaires) ne montrent donc pas leurs opinions religieuses **pendant leur travail**. Les citoyens, eux, restent libres d'exprimer leurs convictions, dans le respect de l'ordre public." },
            { t: "exemple", titre: "Dans une classe", md: "Certains élèves croient en Dieu, d'autres non, d'autres ne savent pas. Le professeur enseigne **les mêmes savoirs à tous** et ne dit pas ce qu'il croit. Il ne peut pas affirmer qu'une religion est meilleure qu'une autre. Cette **neutralité** protège la liberté de chaque élève. Et on peut tout à fait **étudier l'histoire des religions** en classe, par exemple en 6e : connaître n'est pas croire." },
          ],
        },
        {
          titre: "La laïcité à l'école",
          blocs: [
            { t: "texte", md: "L'école publique est un lieu **commun à tous**, où l'on apprend à réfléchir par soi-même. Pour qu'elle le reste, une loi de **2004** interdit aux élèves des écoles, collèges et lycées publics de porter des **signes religieux ostensibles**, c'est-à-dire très visibles, qui manifestent ostensiblement une appartenance religieuse." },
            { t: "propriete", titre: "La charte de la laïcité à l'école (2013)", md: "En **15 articles**, elle rappelle ce que la laïcité garantit : la liberté de conscience, l'égalité entre filles et garçons, le refus de toute discrimination, le droit d'apprendre tout le programme. Elle est **affichée dans toutes les écoles et tous les établissements publics** : cherche-la dans ton collège !" },
            { t: "verifie", q: "Un élève croyant et un élève non croyant ont-ils les mêmes droits à l'école publique ?", choix: ["Oui, exactement les mêmes", "Non, l'élève croyant a plus de droits", "Non, l'élève non croyant a plus de droits"], bonne: 0, explication: "C'est tout le sens de la laïcité : quelles que soient ses convictions, chaque élève a les mêmes droits et les mêmes devoirs." },
          ],
        },
      ],
      bilan: "La laïcité, c'est un État neutre pour des citoyens libres : chacun croit ou ne croit pas, et tous restent égaux.",
    },
    "6e-emc-06-egalite-discriminations": {
      accroche: "« Toi, une fille, tu veux faire du foot ? » « Un garçon qui fait de la danse, c'est bizarre. » Ces phrases, tu les as peut-être déjà entendues. Elles ont l'air anodines. Pourtant, elles peuvent empêcher quelqu'un de vivre sa passion. D'où viennent-elles, et pourquoi la loi s'en mêle-t-elle ?",
      objectifs: [
        "Repérer un stéréotype et comprendre comment il peut mener à une discrimination",
        "Connaître le principe d'égalité des droits entre les femmes et les hommes",
        "Comprendre ce qu'est l'inclusion des personnes en situation de handicap",
      ],
      sections: [
        {
          titre: "Stéréotypes et préjugés",
          blocs: [
            { t: "definition", terme: "Stéréotype", md: "Une **idée toute faite** sur un groupe de personnes : « les filles sont… », « les garçons sont… ». Il met tout le monde dans la même case, sans tenir compte de chaque personne." },
            { t: "definition", terme: "Préjugé", md: "Un **jugement porté à l'avance**, avant de connaître la personne. Le préjugé s'appuie souvent sur un stéréotype." },
            { t: "schema", titre: "Comment une idée toute faite devient une injustice", legende: "On peut casser la chaîne à chaque étape, en apprenant à connaître les personnes plutôt qu'en jugeant le groupe.", svg: `<svg viewBox="0 0 400 200"><rect class="aplat-papier" x="8" y="20" width="116" height="60" rx="6"/><rect class="trait" x="8" y="20" width="116" height="60" rx="6"/><text class="texte" x="66" y="45" text-anchor="middle">Stéréotype</text><text class="texte-petit" x="66" y="65" text-anchor="middle">idée toute faite</text><path class="trait-fin" d="M124 50 L140 50" marker-end="url(#fl)"/><rect class="aplat-papier" x="142" y="20" width="116" height="60" rx="6"/><rect class="trait" x="142" y="20" width="116" height="60" rx="6"/><text class="texte" x="200" y="45" text-anchor="middle">Préjugé</text><text class="texte-petit" x="200" y="65" text-anchor="middle">on juge d'avance</text><path class="trait-fin" d="M258 50 L274 50" marker-end="url(#fl-p)"/><rect class="aplat" x="276" y="20" width="116" height="60" rx="6"/><rect class="trait" x="276" y="20" width="116" height="60" rx="6"/><text class="texte-pigment" x="334" y="45" text-anchor="middle">Discrimination</text><text class="texte-petit" x="334" y="65" text-anchor="middle">traitement injuste</text><text class="texte-main" x="66" y="112" text-anchor="middle">« Le foot,</text><text class="texte-main" x="66" y="132" text-anchor="middle">c'est pour</text><text class="texte-main" x="66" y="152" text-anchor="middle">les garçons »</text><text class="texte-main" x="200" y="112" text-anchor="middle">« Elle ne</text><text class="texte-main" x="200" y="132" text-anchor="middle">saura pas</text><text class="texte-main" x="200" y="152" text-anchor="middle">jouer »</text><text class="texte-main" x="334" y="112" text-anchor="middle">« On refuse</text><text class="texte-main" x="334" y="132" text-anchor="middle">son</text><text class="texte-main" x="334" y="152" text-anchor="middle">inscription »</text><line class="pointille" x1="8" y1="176" x2="392" y2="176"/><text class="texte-petit" x="200" y="194" text-anchor="middle">une pensée → un jugement → un acte puni par la loi</text></svg>` },
            { t: "exemple", titre: "Démonter un stéréotype", md: "« Les filles ne sont pas faites pour les maths » : c'est un stéréotype, et il est **faux**. Les résultats en maths dépendent du travail, de l'entraînement et de la **confiance en soi**, pas du sexe. Le problème, c'est qu'à force d'entendre cette phrase, certaines filles finissent par y croire et se découragent. Le stéréotype crée alors l'injustice qu'il prétend décrire." },
            { t: "attention", md: "Même un stéréotype qui a l'air **gentil** (« les filles sont douces », « les garçons sont courageux ») enferme les gens dans une case. Un garçon sensible ou une fille qui aime l'aventure n'ont rien d'anormal !" },
          ],
        },
        {
          titre: "Les femmes et les hommes ont les mêmes droits",
          blocs: [
            { t: "texte", md: "Aujourd'hui, en France, la loi est claire : **les femmes et les hommes ont les mêmes droits**. C'est inscrit dans la Constitution. Mais ce n'a pas toujours été le cas, et cette égalité a été conquise étape par étape." },
            { t: "frise", titre: "Quelques étapes vers l'égalité", evenements: [{ date: 1944, label: "Les femmes obtiennent le droit de vote", detail: "Elles votent pour la première fois en 1945." }, { date: 1946, label: "La Constitution garantit aux femmes des droits égaux à ceux des hommes" }, { date: 1965, label: "Une femme mariée peut travailler et ouvrir un compte sans l'accord de son mari" }, { date: 1975, label: "La mixité devient obligatoire dans les écoles et collèges publics" }, { date: 2000, label: "Loi sur la parité en politique", detail: "Autant de femmes que d'hommes sur de nombreuses listes électorales." }] },
            { t: "attention", md: "Les mêmes droits **ne veulent pas dire** qu'il n'y a plus aucune inégalité. En moyenne, les femmes gagnent encore moins que les hommes et font une plus grande part des tâches ménagères. L'égalité en droit est acquise ; l'égalité **dans les faits** se construit encore." },
            { t: "verifie", q: "En quelle année les femmes ont-elles obtenu le droit de vote en France ?", choix: ["1789", "1905", "1944", "1981"], bonne: 2, explication: "En 1944. Il a fallu attendre plus de 150 ans après la Révolution pour que les femmes deviennent des citoyennes à part entière." },
          ],
        },
        {
          titre: "La loi punit les discriminations",
          blocs: [
            { t: "propriete", titre: "Discriminer est interdit", md: "Une **discrimination** consiste à traiter une personne moins bien qu'une autre à cause de son **sexe**, de son **origine**, de son **handicap**, de sa **religion**, de son **apparence**, de son **âge**… La loi la **punit**, par exemple pour refuser un emploi, un logement ou une inscription." },
            { t: "exemple", titre: "Un refus injuste", md: "Un club refuse d'inscrire une fille au football « parce que c'est un sport de garçons ». Ce n'est pas une question de niveau : c'est son **sexe** qui est en cause. C'est une **discrimination**. Sa famille peut s'adresser au **Défenseur des droits**, qui lutte contre les discriminations." },
          ],
        },
        {
          titre: "L'inclusion : une place pour chacun",
          blocs: [
            { t: "texte", md: "Un **handicap**, c'est une difficulté durable du corps ou de l'esprit : se déplacer, voir, entendre, se concentrer, lire… Il peut être **visible** (un fauteuil roulant) ou **invisible** (une dyslexie, une maladie, un trouble de l'attention). L'**inclusion**, c'est adapter l'école et la société pour que **chacun y ait sa place**, au lieu de demander aux personnes de s'adapter seules." },
            { t: "tableau", titre: "Des aménagements pour apprendre ensemble", entetes: ["Besoin", "Aménagement possible"], lignes: [["Se déplacer en fauteuil roulant", "Rampe d'accès, ascenseur, salle au rez-de-chaussée"], ["Voir difficilement", "Documents agrandis, tablette, braille"], ["Lire avec difficulté (dyslexie)", "Police adaptée, consignes lues à voix haute, temps supplémentaire"], ["Besoin d'aide en classe", "Accompagnement par un ou une **AESH**"]] },
            { t: "texte", md: "La **loi de 2005** affirme le droit de tout enfant en situation de handicap d'être **scolarisé**, de préférence dans l'école de son quartier. Certains élèves sont aidés par un **AESH**, accompagnant des élèves en situation de handicap : il les aide à écrire, à s'organiser, à comprendre les consignes." },
            { t: "verifie", q: "Que signifie « école inclusive » ?", choix: ["Une école réservée aux élèves en situation de handicap", "Une école qui s'adapte pour accueillir tous les élèves", "Une école où tous les élèves font exactement la même chose"], bonne: 1, explication: "L'école inclusive accueille tous les élèves ensemble et adapte ce qui doit l'être (locaux, documents, aide humaine) pour que chacun puisse apprendre." },
          ],
        },
      ],
      bilan: "Les stéréotypes enferment, les discriminations blessent et sont punies : l'égalité, c'est regarder chaque personne, et donner à chacun sa place.",
    },
    "6e-emc-07-citoyennete-numerique": {
      accroche: "Une vidéo incroyable circule dans le groupe de la classe : « Le collège sera fermé tout le mois de juin ! » En dix minutes, tout le monde l'a partagée. Le lendemain, surprise : c'était faux. Sur internet, tout va très vite… et c'est justement pour cela qu'il faut savoir ralentir.",
      objectifs: [
        "Protéger ton identité numérique et tes données personnelles",
        "Respecter les autres en ligne et connaître le droit à l'image",
        "Vérifier une information avant de la croire ou de la partager",
      ],
      sections: [
        {
          titre: "Ton identité numérique",
          blocs: [
            { t: "definition", terme: "Identité numérique", md: "Tout ce que l'on peut trouver **sur toi en ligne** : tes photos, tes messages, ton pseudo, tes commentaires, tes « j'aime », et ce que les autres publient à ton sujet." },
            { t: "texte", md: "Internet a une très bonne mémoire. Une photo peut être **copiée, capturée ou partagée** en quelques secondes. Même si tu la supprimes ensuite, d'autres l'ont peut-être déjà enregistrée : ==ce que tu publies peut rester longtemps==. Avant de poster, une bonne question à te poser : « Est-ce que j'accepterais que mon professeur, mes grands-parents ou moi dans cinq ans voient cela ? »" },
            { t: "definition", terme: "Donnée personnelle", md: "Une information qui permet de **t'identifier** : ton nom, ton adresse, ta photo, ta date de naissance, ton numéro de téléphone, le nom de ton collège. On ne la donne pas à n'importe qui, surtout pas à un inconnu en ligne." },
            { t: "tableau", titre: "Les bons réflexes et ce qu'ils protègent", entetes: ["Bon réflexe", "Ce qu'il protège"], lignes: [["Un mot de passe long, avec lettres, chiffres et symboles, différent pour chaque compte", "Tes comptes, contre le piratage"], ["Un profil en mode privé", "Ta vie privée"], ["Ne pas donner ton adresse ni ton collège à un inconnu", "Ta sécurité"], ["Demander l'accord avant de publier une photo", "Le droit à l'image des autres"]] },
            { t: "verifie", q: "Quel est le mot de passe le plus sûr ?", choix: ["123456", "lucas2014", "Tigre!Vole8Sous_la_Lune", "motdepasse"], bonne: 2, explication: "Un bon mot de passe est long, mélange majuscules, minuscules, chiffres et symboles, et ne contient ni ton prénom ni ta date de naissance. Une petite phrase inventée est facile à retenir et difficile à deviner." },
          ],
        },
        {
          titre: "En ligne, les mêmes règles que dans la vie",
          blocs: [
            { t: "propriete", titre: "Pas de zone sans loi", md: "Sur internet, **les mêmes règles de respect et les mêmes lois** s'appliquent que dans la vie réelle. Insulter, menacer, se moquer, harceler : tout cela est interdit et peut être puni. Un pseudo ne rend pas invisible, et l'**anonymat n'autorise rien**." },
            { t: "definition", terme: "Droit à l'image", md: "Chacun peut refuser qu'on le prenne en photo ou qu'on publie son image. Pour publier la photo de quelqu'un, il faut **son accord**, et aussi celui de **ses parents** s'il est mineur." },
            { t: "schema", titre: "Que faire si… je veux publier la photo d'un ami ?", legende: "Une photo publiée sans accord peut blesser, et la loi la sanctionne. Dans le doute, on ne publie pas.", svg: `<svg viewBox="0 0 400 270"><rect class="aplat-papier" x="70" y="10" width="260" height="34" rx="6"/><rect class="trait" x="70" y="10" width="260" height="34" rx="6"/><text class="texte" x="200" y="32" text-anchor="middle">Je veux publier la photo d'un ami</text><path class="trait-fin" d="M200 44 L200 66" marker-end="url(#fl)"/><rect class="aplat" x="110" y="70" width="180" height="34" rx="17"/><rect class="trait" x="110" y="70" width="180" height="34" rx="17"/><text class="texte" x="200" y="92" text-anchor="middle">Il m'a dit oui ?</text><path class="trait-fin" d="M140 104 L100 128" marker-end="url(#fl-p)"/><text class="texte-main" x="110" y="120" text-anchor="end">non</text><path class="trait-fin" d="M260 104 L300 128" marker-end="url(#fl)"/><text class="texte-main" x="290" y="120">oui</text><rect class="aplat-papier" x="10" y="132" width="170" height="50" rx="6"/><rect class="trait" x="10" y="132" width="170" height="50" rx="6"/><text class="texte-pigment" x="95" y="152" text-anchor="middle">Je ne publie pas</text><text class="texte-petit" x="95" y="171" text-anchor="middle">c'est son droit à l'image</text><rect class="aplat" x="220" y="132" width="170" height="40" rx="17"/><rect class="trait" x="220" y="132" width="170" height="40" rx="17"/><text class="texte" x="305" y="157" text-anchor="middle">Il est mineur ?</text><path class="trait-fin" d="M305 172 L305 206" marker-end="url(#fl)"/><text class="texte-main" x="313" y="194">oui</text><path class="trait-fin" d="M240 172 L150 206" marker-end="url(#fl)"/><text class="texte-main" x="196" y="200" text-anchor="end">non</text><rect class="aplat-papier" x="220" y="210" width="170" height="50" rx="6"/><rect class="trait" x="220" y="210" width="170" height="50" rx="6"/><text class="texte-petit" x="305" y="230" text-anchor="middle">Il faut aussi l'accord</text><text class="texte-petit" x="305" y="246" text-anchor="middle">de ses parents</text><rect class="aplat-papier" x="20" y="210" width="160" height="50" rx="6"/><rect class="trait" x="20" y="210" width="160" height="50" rx="6"/><text class="texte-petit" x="100" y="230" text-anchor="middle">Je peux publier,</text><text class="texte-petit" x="100" y="246" text-anchor="middle">en restant respectueux</text></svg>` },
            { t: "exemple", titre: "Une photo gênante dans le groupe", md: "Tu reçois dans un groupe de discussion une photo gênante d'un camarade. La bonne réaction : **ne pas la partager**, ne pas la commenter, dire à l'expéditeur que ce n'est pas correct, et **prévenir un adulte** si la photo continue de circuler. La partager, même « pour rire », c'est participer à une humiliation." },
            { t: "savais-tu", md: "En France, la loi fixe à **15 ans** l'âge de la « majorité numérique » : avant 15 ans, il faut **l'accord de ses parents** pour s'inscrire sur un réseau social. Et la plupart des réseaux interdisent déjà leur accès aux moins de 13 ans." },
          ],
        },
        {
          titre: "Vrai ou faux ? Vérifier une information",
          blocs: [
            { t: "texte", md: "Une **fausse information** (on dit aussi **infox** ou *fake news*) est une information inventée ou déformée, souvent pour faire peur, faire rire ou faire cliquer. Elle se propage vite parce qu'elle est surprenante. Mais ==qu'une information soit partagée des millions de fois ne prouve pas qu'elle est vraie==." },
            { t: "etapes", titre: "Avant de partager, je vérifie", items: [{ titre: "La source", md: "**Qui** l'a publiée ? Un média connu, une institution, ou un compte inconnu ?" }, { titre: "La date", md: "**Quand** ? Une vieille information peut ressortir comme si elle était nouvelle." }, { titre: "Le ton", md: "Titre en majuscules, « INCROYABLE », « on vous cache tout » : des indices qui doivent te rendre méfiant." }, { titre: "Croiser", md: "D'autres sites fiables en parlent-ils ? Si personne ne confirme, c'est suspect." }, { titre: "Décider", md: "Rien ne confirme l'information ? **Je ne partage pas.**" }] },
            { t: "verifie", q: "Quel indice doit te rendre méfiant face à une information en ligne ?", choix: ["Elle vient du site d'un journal connu", "On ne sait pas qui l'a publiée et elle n'a pas de date", "D'autres sites fiables donnent la même information"], bonne: 1, explication: "Une information sans auteur identifiable ni date est difficile à vérifier. Une source connue et une information confirmée par d'autres sites sont au contraire des signes de fiabilité." },
          ],
        },
      ],
      bilan: "En ligne comme ailleurs : je protège mes données, je respecte les autres et leur image, et je vérifie avant de partager.",
    },
    "6e-emc-08-securite-prevention": {
      accroche: "Sur la piste cyclable, ton ami freine trop tard et tombe. Il saigne au genou et se tient le poignet. Autour, tout le monde s'agite, personne ne sait quoi faire. Toi, tu sais : quelques gestes simples, dans le bon ordre, peuvent tout changer.",
      objectifs: [
        "Appliquer les règles de sécurité à pied et à vélo",
        "Connaître les numéros d'urgence et savoir donner l'alerte",
        "Reconnaître les principaux dangers de la maison et les prévenir",
      ],
      sections: [
        {
          titre: "Sur la route, à pied et à vélo",
          blocs: [
            { t: "etapes", titre: "Traverser une rue en sécurité", items: [{ titre: "Choisir l'endroit", md: "Un **passage piéton**, et au feu, j'attends que le **piéton soit vert**." }, { titre: "S'arrêter", md: "Je m'arrête au bord du trottoir, sans téléphone dans les mains." }, { titre: "Regarder", md: "À **gauche**, à **droite**, puis **encore à gauche**." }, { titre: "Traverser", md: "En ligne droite, sans courir, en continuant de regarder." }] },
            { t: "texte", md: "Pourquoi regarder deux fois à gauche ? En France, on roule à droite : les voitures qui arrivent sur la première moitié de la rue viennent **de ta gauche**. C'est le danger le plus proche, alors on le vérifie juste avant de s'engager." },
            { t: "propriete", titre: "Les règles du cycliste", md: "• Le **casque est obligatoire jusqu'à 12 ans**, que l'on conduise ou que l'on soit passager. Après, il reste très recommandé.\n• On roule **à droite**. Sur le trottoir, seuls les enfants de **moins de 8 ans** peuvent rouler, au pas.\n• La nuit : **lumières** allumées, et **gilet réfléchissant** obligatoire hors agglomération.\n• Pour tourner à gauche, on **tend le bras gauche**.\n• **Jamais d'écouteurs** ni de casque audio sur les oreilles." },
            { t: "verifie", q: "Jusqu'à quel âge le port du casque à vélo est-il obligatoire en France ?", choix: ["8 ans", "12 ans", "16 ans", "18 ans"], bonne: 1, explication: "Le casque est obligatoire pour les moins de 12 ans, conducteurs ou passagers. Après 12 ans, il n'est plus obligatoire mais il protège toujours autant ta tête !" },
          ],
        },
        {
          titre: "Protéger, alerter, secourir",
          blocs: [
            { t: "etapes", titre: "Face à un accident", items: [{ titre: "Protéger", md: "Éviter un **nouvel accident** : s'éloigner du danger, faire ralentir, ne pas se mettre soi-même en danger." }, { titre: "Alerter", md: "Appeler ou **faire appeler les secours**, ou prévenir un adulte." }, { titre: "Secourir", md: "Faire les **premiers gestes** en attendant les secours : rassurer, couvrir, appuyer sur une plaie qui saigne." }] },
            { t: "tableau", titre: "Les numéros d'urgence (gratuits)", entetes: ["Numéro", "Service", "Quand l'appeler ?"], lignes: [["**15**", "SAMU", "Urgence médicale : malaise, blessure grave"], ["**17**", "Police ou gendarmerie", "Agression, danger pour la sécurité"], ["**18**", "Pompiers", "Incendie, accident, personne coincée"], ["**112**", "Numéro d'urgence européen", "Tous les secours, partout dans l'Union européenne"], ["**114**", "Urgences par SMS", "Pour les personnes sourdes ou malentendantes, ou qui ne peuvent pas parler"]] },
            { t: "astuce", md: "Pour bien alerter, pense à **trois questions** : **Où** es-tu (adresse, repères) ? **Que** s'est-il passé ? **Combien** de personnes sont blessées ? Puis réponds aux questions et **ne raccroche jamais le premier** : c'est le secouriste qui termine l'appel." },
            { t: "exemple", titre: "La chute de vélo", etapes: ["**Protéger** : tu aides ton ami à s'éloigner de la piste, pour qu'aucun autre cycliste ne le percute.", "**Alerter** : tu demandes à un adulte d'appeler ou, si c'est grave, tu composes toi-même le 15.", "**Secourir** : tu le rassures, tu lui demandes de ne pas bouger son poignet, et tu appuies sur la plaie avec un linge propre."] },
          ],
        },
        {
          titre: "Les gestes qui sauvent",
          blocs: [
            { t: "schema", titre: "Que faire si… une personne est à terre ?", legende: "Une personne inconsciente qui respire est mise en position latérale de sécurité (PLS), pour qu'elle ne s'étouffe pas.", svg: `<svg viewBox="0 0 400 290"><rect class="aplat-papier" x="100" y="8" width="200" height="32" rx="6"/><rect class="trait" x="100" y="8" width="200" height="32" rx="6"/><text class="texte" x="200" y="29" text-anchor="middle">Une personne à terre</text><path class="trait-fin" d="M200 40 L200 60" marker-end="url(#fl)"/><rect class="aplat" x="110" y="64" width="180" height="32" rx="16"/><rect class="trait" x="110" y="64" width="180" height="32" rx="16"/><text class="texte" x="200" y="85" text-anchor="middle">Elle répond ?</text><path class="trait-fin" d="M140 96 L100 122" marker-end="url(#fl)"/><text class="texte-main" x="112" y="112" text-anchor="end">oui</text><path class="trait-fin" d="M260 96 L300 122" marker-end="url(#fl-p)"/><text class="texte-main" x="288" y="112">non</text><rect class="aplat-papier" x="10" y="126" width="170" height="50" rx="6"/><rect class="trait" x="10" y="126" width="170" height="50" rx="6"/><text class="texte-petit" x="95" y="146" text-anchor="middle">Je la rassure, je surveille</text><text class="texte-petit" x="95" y="163" text-anchor="middle">et j'alerte si besoin</text><rect class="aplat" x="220" y="126" width="170" height="40" rx="16"/><rect class="trait" x="220" y="126" width="170" height="40" rx="16"/><text class="texte" x="305" y="151" text-anchor="middle">Elle respire ?</text><path class="trait-fin" d="M240 166 L150 204" marker-end="url(#fl)"/><text class="texte-main" x="196" y="196" text-anchor="end">oui</text><path class="trait-fin" d="M305 166 L305 204" marker-end="url(#fl-p)"/><text class="texte-main" x="313" y="190">non</text><rect class="aplat-papier" x="10" y="208" width="170" height="70" rx="6"/><rect class="trait" x="10" y="208" width="170" height="70" rx="6"/><text class="texte-pigment" x="95" y="228" text-anchor="middle">PLS</text><text class="texte-petit" x="95" y="246" text-anchor="middle">la mettre sur le côté</text><text class="texte-petit" x="95" y="264" text-anchor="middle">puis alerter : 15 ou 112</text><rect class="aplat-papier" x="220" y="208" width="170" height="70" rx="6"/><rect class="trait" x="220" y="208" width="170" height="70" rx="6"/><text class="texte-pigment" x="305" y="228" text-anchor="middle">Urgence vitale</text><text class="texte-petit" x="305" y="246" text-anchor="middle">appeler le 15 ou le 112</text><text class="texte-petit" x="305" y="264" text-anchor="middle">on te guide au téléphone</text></svg>` },
            { t: "attention", md: "On **ne laisse pas sur le dos** une personne inconsciente qui respire : sa langue ou des vomissements pourraient l'empêcher de respirer. On la met **sur le côté**, en PLS, et on surveille sa respiration jusqu'à l'arrivée des secours." },
            { t: "savais-tu", md: "Au collège, tu peux suivre une formation aux **gestes qui sauvent** (GQS) puis, souvent en fin de collège, la formation **PSC1** (prévention et secours civiques de niveau 1). En France, chaque année, des vies sont sauvées par des témoins qui ont su agir avant l'arrivée des secours." },
          ],
        },
        {
          titre: "Les dangers de la maison",
          blocs: [
            { t: "texte", md: "On se croit à l'abri chez soi, et pourtant beaucoup d'accidents ont lieu **à la maison** : brûlures, chutes, intoxications, électrocutions. La bonne nouvelle, c'est qu'on peut en éviter la plupart avec quelques précautions." },
            { t: "tableau", titre: "Risques domestiques et précautions", entetes: ["Risque", "Bonne précaution"], lignes: [["**Brûlure** (casserole, four, eau bouillante)", "Tourner les manches de casserole vers l'intérieur ; en cas de petite brûlure, la passer **sous l'eau fraîche** (pas glacée) **au moins 10 minutes**"], ["**Chute** (escabeau, fenêtre, escalier)", "Ne pas monter sur une chaise instable, ne pas grimper près d'une fenêtre ouverte"], ["**Intoxication** (produits ménagers, médicaments)", "Ranger produits et médicaments hors de portée des petits, ne **jamais mélanger** deux produits ménagers"], ["**Électrocution**", "Ne pas toucher un appareil électrique avec les mains mouillées, ne pas mettre d'objet dans une prise"]] },
            { t: "exemple", titre: "Pourquoi ne jamais mélanger les produits ?", md: "Mélanger de l'**eau de Javel** avec un **détartrant** (un produit acide) produit un **gaz toxique**, le chlore, qui irrite gravement les yeux et les poumons. En cas d'accident, on aère, on s'éloigne et on appelle le **15** ou un centre antipoison." },
            { t: "verifie", q: "Quel est le bon réflexe en cas de petite brûlure à la main ?", choix: ["Mettre du beurre dessus", "La passer sous l'eau fraîche plusieurs minutes", "Mettre un glaçon directement sur la peau"], bonne: 1, explication: "L'eau fraîche (pas glacée), pendant au moins 10 minutes, refroidit la brûlure et limite les dégâts. Le beurre et la glace abîment la peau. Si la brûlure est grande ou profonde, on appelle le 15." },
          ],
        },
      ],
      bilan: "Regarder, se protéger, alerter, secourir : connaître les bons gestes et les bons numéros, c'est se donner le pouvoir d'aider.",
    },
    "6e-emc-09-commune-vie-democratique": {
      accroche: "Ta commune veut transformer un terrain vague : un skatepark ou un parking ? Qui va décider ? Et toi, qui n'as pas encore 18 ans, as-tu un moyen de donner ton avis ? La démocratie commence tout près de chez toi, dans ta commune.",
      objectifs: [
        "Expliquer comment fonctionne une commune : élections, conseil municipal, maire",
        "Identifier les services publics et comprendre à quoi servent les impôts",
        "Comprendre ce qu'est une association et comment s'engager pour les autres",
      ],
      sections: [
        {
          titre: "La commune, la démocratie au plus près",
          blocs: [
            { t: "definition", terme: "Commune", md: "La **plus petite collectivité territoriale** de France. Il en existe environ **35 000**, du petit village de quelques habitants à la grande ville comme Paris, Marseille ou Lyon. Chaque commune a sa mairie." },
            { t: "schema", titre: "Qui décide dans la commune ?", legende: "Les habitants élisent le conseil municipal ; le conseil élit le maire ; le maire et le conseil gèrent la commune au service des habitants.", svg: `<svg viewBox="0 0 400 270"><rect class="aplat-papier" x="110" y="10" width="180" height="40" rx="6"/><rect class="trait" x="110" y="10" width="180" height="40" rx="6"/><text class="texte" x="200" y="28" text-anchor="middle">Les habitants électeurs</text><text class="texte-petit" x="200" y="43" text-anchor="middle">18 ans et plus, inscrits</text><path class="trait" d="M200 50 L200 82" marker-end="url(#fl)"/><text class="texte-main" x="210" y="72">élisent tous les 6 ans</text><rect class="aplat" x="110" y="86" width="180" height="40" rx="6"/><rect class="trait" x="110" y="86" width="180" height="40" rx="6"/><text class="texte" x="200" y="104" text-anchor="middle">Le conseil municipal</text><text class="texte-petit" x="200" y="119" text-anchor="middle">vote les décisions, le budget</text><path class="trait" d="M200 126 L200 158" marker-end="url(#fl)"/><text class="texte-main" x="210" y="148">élit parmi ses membres</text><rect class="aplat" x="140" y="162" width="120" height="36" rx="18"/><rect class="trait" x="140" y="162" width="120" height="36" rx="18"/><text class="texte" x="200" y="185" text-anchor="middle">Le maire</text><path class="trait-fin" d="M200 198 L200 220" marker-end="url(#fl)"/><rect class="aplat-papier" x="40" y="224" width="320" height="38" rx="6"/><rect class="trait" x="40" y="224" width="320" height="38" rx="6"/><text class="texte-petit" x="200" y="240" text-anchor="middle">Services publics : écoles, cantine, bibliothèque,</text><text class="texte-petit" x="200" y="255" text-anchor="middle">voirie, état civil, propreté…</text><path class="pointille" d="M40 243 L20 243 L20 30 L106 30" fill="none" marker-end="url(#fl)"/><text class="texte-petit" x="14" y="140" text-anchor="middle" transform="rotate(-90 14 140)">au service des habitants</text></svg>` },
            { t: "texte", md: "Tous les **6 ans**, les habitants inscrits sur les listes électorales élisent le **conseil municipal**, au **suffrage universel direct**. Ensuite, ce sont les conseillers municipaux qui élisent le **maire** parmi eux : les habitants n'élisent donc pas directement le maire. Les dernières élections municipales ont eu lieu en 2026." },
            { t: "verifie", q: "Qui élit le maire ?", choix: ["Les habitants, directement", "Le conseil municipal", "Le président de la République"], bonne: 1, explication: "Les habitants élisent le conseil municipal, puis le conseil élit le maire parmi ses membres. C'est une élection en deux temps." },
          ],
        },
        {
          titre: "Le maire et le conseil municipal",
          blocs: [
            { t: "liste", titre: "Le maire a deux casquettes", items: ["**Chef de la commune** : il prépare et applique les décisions du conseil municipal, dirige les services de la mairie, veille à l'ordre public et à la sécurité (circulation, salubrité).", "**Représentant de l'État** : il célèbre les **mariages**, tient l'**état civil** (naissances, décès) et organise les élections dans la commune."] },
            { t: "etapes", titre: "Voter, comment ça se passe ?", items: [{ titre: "S'inscrire", md: "Pour voter, il faut avoir **18 ans**, être **inscrit sur les listes électorales**, et être français (ou citoyen de l'Union européenne pour les municipales)." }, { titre: "Prendre les bulletins", md: "Au bureau de vote, on prend les bulletins et une enveloppe, et on montre une pièce d'identité." }, { titre: "Passer dans l'isoloir", md: "Seul, à l'abri des regards : le **vote est secret**." }, { titre: "Voter", md: "On glisse l'enveloppe dans l'**urne** transparente et on signe la liste. « A voté ! »" }, { titre: "Dépouiller", md: "Le soir, les bulletins sont comptés en public : tout le monde peut vérifier." }] },
            { t: "savais-tu", md: "Beaucoup de communes ont un **conseil municipal des jeunes**, élu par les enfants et les adolescents. Ses membres proposent des projets (un skatepark, une fête, une action pour la propreté) et les présentent aux élus. Une bonne façon de participer avant 18 ans !" },
          ],
        },
        {
          titre: "Services publics et impôts",
          blocs: [
            { t: "definition", terme: "Service public", md: "Un service **utile à tous**, assuré ou organisé par une collectivité publique : l'école, la bibliothèque, la collecte des déchets, l'eau, les transports, les pompiers… Il est ouvert à chacun, sans distinction." },
            { t: "tableau", titre: "Qui s'occupe de quoi ?", entetes: ["Collectivité", "Exemples de services"], lignes: [["**Commune**", "Écoles maternelles et élémentaires, état civil, voirie communale, souvent la bibliothèque"], ["**Département**", "Collèges, aide aux personnes âgées et handicapées, routes départementales"], ["**Région**", "Lycées, trains régionaux, formation professionnelle"], ["**État**", "Salaire des professeurs, police nationale, justice, armée"]] },
            { t: "exemple", titre: "L'école est gratuite… mais elle a un coût", md: "Ta famille ne paie pas l'école publique. Pourtant, il faut payer les professeurs, chauffer les bâtiments, acheter les manuels : un élève de collège coûte **plusieurs milliers d'euros par an**. Cet argent vient des **impôts**, payés par l'ensemble des habitants. L'école est gratuite pour l'élève parce que tout le monde contribue." },
            { t: "propriete", titre: "Les impôts, un acte de solidarité", md: "Les **impôts** financent les services publics. Chacun paie selon ses moyens, et chacun profite des services selon ses besoins : une famille sans enfant paie aussi pour l'école. **Payer ses impôts est un devoir ; profiter des services publics est un droit.**" },
          ],
        },
        {
          titre: "S'engager : associations et solidarité",
          blocs: [
            { t: "definition", terme: "Association", md: "Un groupe de personnes qui agissent ensemble pour un projet commun, **sans chercher à gagner de l'argent** pour elles-mêmes. En France, les associations sont régies par la **loi du 1er juillet 1901**." },
            { t: "texte", md: "Club de sport, chorale, aide aux devoirs, protection des animaux, Restos du cœur… La France compte plus d'un million d'associations. Beaucoup fonctionnent grâce à des **bénévoles** : des personnes qui donnent de leur temps **gratuitement**, par choix. La **solidarité**, c'est cela : se sentir lié aux autres et les aider, surtout ceux qui en ont besoin.\n\nEt l'engagement n'attend pas l'âge adulte : **un enfant peut adhérer à une association**, participer à une collecte, être élu délégué ou siéger au conseil municipal des jeunes." },
            { t: "verifie", q: "Qu'est-ce qu'un bénévole ?", choix: ["Une personne payée par la mairie", "Une personne qui donne de son temps gratuitement", "Un élu du conseil municipal"], bonne: 1, explication: "Un bénévole agit librement et sans être payé, souvent dans une association. C'est une des formes les plus concrètes de la solidarité." },
          ],
        },
      ],
      bilan: "Dans ta commune, on vote, on décide ensemble, on partage les services grâce aux impôts et on s'entraide : c'est là que la citoyenneté prend vie.",
    },
  },
};
