export default {
  id: "3e-anglais",
  chapitres: {
    "3e-anglais-01-temps-present-passe": {
      accroche: "« J'apprends l'anglais depuis six ans » : en anglais, cette phrase toute simple ne se dit ni au présent, ni au passé ! Chaque temps anglais raconte une histoire différente du temps qui passe. Cette année, on fait la synthèse pour choisir le bon à chaque fois.",
      objectifs: [
        "Choisir entre present simple et present continuous",
        "Raconter au passé avec le past simple et le past continuous",
        "Employer le present perfect simple et continuous avec for, since et how long",
        "Situer une action antérieure avec le past perfect",
      ],
      sections: [
        {
          titre: "Le présent : habitude ou action en cours ?",
          blocs: [
            { t: "texte", md: "En français, « elle travaille » peut vouloir dire deux choses : elle a un emploi, ou elle est en train de travailler. L'anglais, lui, choisit toujours.\n\n• *[[She **works** in London.]]* : c'est son habitude, une vérité générale ([[present simple]]).\n• *[[She **is working** now.]]* : c'est en cours, sous nos yeux ([[present continuous]] : [[be]] + V[[-ing]]).\n\nLes mots qui t'aident : *[[usually, every day, often, never]]* appellent le [[simple]] ; *[[now, at the moment, Look!, Listen!]]* appellent le [[continuous]]." },
            { t: "propriete", titre: "Les verbes d'état", md: "Certains verbes décrivent un état, pas une activité : *[[know, like, love, hate, want, need, believe, understand, agree]]*. Ils restent au **[[simple]]**, même pour parler de maintenant.\n\n*[[I **know** the answer.]]* (jamais *[[I am knowing]]*)" },
            { t: "attention", md: "« Je suis d'accord » se dit *[[I **agree**]]*. ==« [[I am agree]] » n'existe pas== : [[agree]] est un verbe, pas un adjectif. Même chose au négatif : *[[I don't agree.]]*" },
            { t: "verifie", q: "Complète : « [[Look! It ___.]] »", choix: ["[[rains]]", "[[is raining]]", "[[rained]]", "[[has rained]]"], bonne: 1, explication: "[[Look!]] montre que l'action se déroule sous tes yeux : [[present continuous, it is raining.]]" },
          ],
        },
        {
          titre: "Raconter au passé : [[past simple]] et [[past continuous]]",
          blocs: [
            { t: "texte", md: "Le **[[past simple]]** raconte une action terminée, à un moment précis du passé : *[[I **saw** him yesterday.]]* Les verbes réguliers prennent -ed (*[[walked, played]]*), les irréguliers s'apprennent par cœur (*[[go – went – gone, write – wrote – written, see – saw – seen]]*).\n\nLe **[[past continuous]]** ([[was / were]] + V[[-ing]]) pose le décor : une action en cours à ce moment-là. *[[I **was sleeping** when he **called**.]]* L'action longue est au [[continuous]], l'action courte qui l'interrompt est au [[simple]]." },
            { t: "exemple", titre: "Analyser une phrase", md: "*[[While I **was walking** home, I **met** an old friend.]]*\n\nMarcher dure : [[was walking]]. La rencontre est soudaine : [[met]]. En français : « Pendant que je rentrais à pied, j'ai rencontré un vieil ami. »" },
          ],
        },
        {
          titre: "Le [[present perfect]] : bilan et durée",
          blocs: [
            { t: "definition", terme: "[[Present perfect]]", md: "**[[have / has]] + participe passé**. Il relie le passé au présent : on fait un bilan ou on constate un résultat. *[[I **have lost** my keys.]]* (je ne les ai plus, je ne peux pas ouvrir la porte)" },
            { t: "texte", md: "Sa variante **[[continuous]]**, **[[have / has been]] + V[[-ing]]**, insiste sur la durée d'une activité qui continue jusqu'à maintenant : *[[I **have been waiting** for an hour!]]*\n\nAvec **[[for]]**, **[[since]]** et **[[how long]]**, le français met un présent (« depuis »), l'anglais un [[present perfect]] : *[[We **have lived** here since 2020.]]* *[[How long **have you been learning** English?]]*" },
            { t: "schema", titre: "[[Simple]] ou [[continuous]] ?", legende: "En haut, on compte des actions finies : c'est le bilan. En bas, une seule activité s'étire jusqu'à maintenant : c'est la durée.", svg: `<svg viewBox="0 0 400 260"><text class="texte-main" x="200" y="22" text-anchor="middle">I have written three emails.</text><line class="trait" x1="20" y1="80" x2="380" y2="80" marker-end="url(#fl)"/><circle cx="90" cy="80" r="6" fill="var(--pigment)"/><circle cx="150" cy="80" r="6" fill="var(--pigment)"/><circle cx="210" cy="80" r="6" fill="var(--pigment)"/><text class="texte-petit" x="150" y="58" text-anchor="middle">1, 2, 3 : actions finies</text><line class="trait" x1="320" y1="66" x2="320" y2="94"/><text class="texte" x="320" y="112" text-anchor="middle">NOW</text><text class="texte-petit" x="150" y="112" text-anchor="middle">simple = le bilan, le résultat</text><line class="pointille" x1="20" y1="130" x2="380" y2="130"/><text class="texte-main" x="200" y="156" text-anchor="middle">I have been writing for two hours.</text><rect class="aplat" x="90" y="172" width="230" height="24" rx="6"/><rect class="trait-fin" x="90" y="172" width="230" height="24" rx="6" fill="none"/><text class="texte-petit" x="205" y="188" text-anchor="middle">for two hours… and I'm still writing</text><line class="trait" x1="20" y1="210" x2="380" y2="210" marker-end="url(#fl)"/><line class="trait" x1="320" y1="196" x2="320" y2="224"/><text class="texte" x="320" y="244" text-anchor="middle">NOW</text><text class="texte-petit" x="150" y="244" text-anchor="middle">continuous = la durée, l'activité</text></svg>` },
            { t: "propriete", titre: "[[For, since, how long]]", md: "• **[[For]]** + une durée : *[[for two years, for three weeks, for an hour]]*.\n• **[[Since]]** + un point de départ : *[[since 2020, since Monday, since I was six]]*.\n• **[[How long…?]]** demande la durée : *[[How long have you known her?]]*" },
            { t: "attention", md: "Deux pièges de francophone :\n\n• ==« [[since two years]] » est faux== : deux ans est une durée, donc *[[for two years]]*.\n• Le [[present perfect]] ne s'emploie **jamais** avec une date passée précise : pas de *[[yesterday, ago, last week, in 2015]]*. On dit *[[I **saw** him yesterday]]*, pas *[[I have seen him yesterday]]*." },
            { t: "verifie", q: "Complète : « [[How long ___ English?]] »", choix: ["[[do you learn]]", "[[have you been learning]]", "[[are you learning]]", "[[did you learn]]"], bonne: 1, explication: "[[How long]] interroge sur une durée qui continue jusqu'à maintenant : [[present perfect continuous, have you been learning.]]" },
          ],
        },
        {
          titre: "Le [[past perfect]] et la synthèse des temps",
          blocs: [
            { t: "texte", md: "Quand tu racontes au passé, il arrive qu'une action se soit produite **encore plus tôt**. Pour remonter ce « passé du passé », l'anglais utilise le **[[past perfect]]** : **[[had]] + participe passé**, à toutes les personnes.\n\n*[[When I arrived at the cinema, the film **had** already **started**.]]* Je suis arrivé ([[past simple]]), mais le film avait commencé avant ([[past perfect]])." },
            { t: "schema", titre: "[[When I arrived, the film had started.]]", legende: "Le [[past simple]] fixe un repère dans le passé ; le [[past perfect]] remonte avant ce repère.", svg: `<svg viewBox="0 0 400 210"><text class="texte-main" x="200" y="24" text-anchor="middle">When I arrived, the film had started.</text><path class="pointille" d="M240 62 L132 62" fill="none" marker-end="url(#fl-p)"/><text class="texte-petit" x="186" y="52" text-anchor="middle">on remonte plus loin</text><text class="texte-pigment" x="115" y="96" text-anchor="middle">the film had started</text><text class="texte-pigment" x="255" y="96" text-anchor="middle">I arrived</text><line class="trait" x1="20" y1="120" x2="380" y2="120" marker-end="url(#fl)"/><circle cx="115" cy="120" r="6" fill="var(--pigment)"/><circle cx="255" cy="120" r="6" fill="var(--pigment)"/><line class="trait" x1="350" y1="106" x2="350" y2="134"/><text class="texte" x="115" y="154" text-anchor="middle">1. past perfect</text><text class="texte-petit" x="115" y="172" text-anchor="middle">had + participe passé</text><text class="texte" x="255" y="154" text-anchor="middle">2. past simple</text><text class="texte-petit" x="255" y="172" text-anchor="middle">le repère passé</text><text class="texte" x="350" y="154" text-anchor="middle">NOW</text></svg>` },
            { t: "tableau", titre: "La synthèse des temps", entetes: ["Temps", "Forme", "Emploi", "Exemple"], lignes: [["[[Present simple]]", "base (+ -s)", "habitude, vérité générale", "[[*She works in London.*]]"], ["[[Present continuous]]", "[[am / is / are]] + V[[-ing]]", "action en cours", "[[*She is working now.*]]"], ["[[Past simple]]", "V-ed ou irrégulier", "action finie, moment précis", "[[*I saw him yesterday.*]]"], ["[[Past continuous]]", "[[was / were]] + V[[-ing]]", "action en cours dans le passé", "[[*I was sleeping when he called.*]]"], ["[[Present perfect]]", "[[have / has]] + participe", "bilan, résultat présent", "[[*I have lost my keys.*]]"], ["[[Present perfect continuous]]", "[[have / has been]] + V[[-ing]]", "durée jusqu'à maintenant", "[[*I have been waiting for an hour.*]]"], ["[[Past perfect]]", "[[had]] + participe", "action antérieure à une autre", "[[*The film had started.*]]"]] },
            { t: "exemple", titre: "Tous les temps dans un récit", md: "*[[I **have been learning** English since I was six. Last summer, I **went** to Brighton. While I **was visiting** the pier, I **met** a boy who **had lived** in France. We **have been** friends ever since!]]*\n\nDurée jusqu'à maintenant, action datée, décor, action courte, passé antérieur, bilan : chaque temps a sa raison." },
            { t: "verifie", q: "Complète : « [[I ___ my keys. I can't open the door!]] »", choix: ["[[lost]]", "[[have lost]]", "[[had lost]]", "[[was losing]]"], bonne: 1, explication: "On constate un résultat présent (je ne peux pas ouvrir), sans date : [[present perfect, I have lost.]]" },
          ],
        },
      ],
      bilan: "Le présent observe, le past simple raconte, le present perfect fait le bilan, le past perfect remonte plus loin : choisis le temps selon l'histoire que tu racontes.",
    },
    "3e-anglais-02-avenir-hypotheses": {
      accroche: "Et si tu gagnais un voyage autour du monde ? Et s'il pleuvait demain ? La première question rêve, la seconde prévoit. L'anglais fait très nettement la différence entre ce qui est possible et ce qui est imaginaire.",
      objectifs: [
        "Choisir entre will, going to et le present continuous pour parler de l'avenir",
        "Construire le conditionnel de type 1 (réel) et de type 2 (imaginaire)",
        "Nuancer une hypothèse avec unless et wish",
      ],
      sections: [
        {
          titre: "Trois façons de parler de l'avenir",
          blocs: [
            { t: "texte", md: "L'anglais n'a pas de « futur » comme le français : il a plusieurs outils, et chacun dit **d'où vient** ton idée de l'avenir. As-tu décidé à l'instant ? Est-ce prévu depuis longtemps ? Vois-tu un indice ?" },
            { t: "tableau", titre: "[[Will, going to]] ou [[present continuous]] ?", entetes: ["Outil", "Emploi", "Exemple"], lignes: [["**[[will]]** + base verbale", "décision prise sur le moment, promesse, prédiction", "[[*The phone is ringing. I'll answer it!*]]"], ["**[[be going to]]** + base verbale", "intention déjà décidée", "[[*I'm going to study medicine.*]]"], ["**[[be going to]]** + base verbale", "prédiction fondée sur un indice visible", "[[*Look at those clouds! It's going to rain.*]]"], ["[[**present continuous**]]", "rendez-vous fixé (jour, heure, lieu)", "[[*I'm seeing the dentist at 5.*]]"]] },
            { t: "verifie", q: "Complète : « [[Look at those black clouds! It ___ rain.]] »", choix: ["[[will]]", "[[is going to]]", "[[is raining to]]", "[[rains]]"], bonne: 1, explication: "Les nuages noirs sont un indice visible : on prédit avec [[be going to. It is going to rain.]]" },
          ],
        },
        {
          titre: "Le type 1 : si c'est possible",
          blocs: [
            { t: "propriete", titre: "Conditionnel de type 1 (réel)", md: "**[[If + present simple, will]] + base verbale**\n\n*[[If it **rains** tomorrow, we **will stay** at home.]]*\n\nLa condition peut vraiment se réaliser. On peut inverser l'ordre : *[[We will stay at home if it rains.]]* (pas de virgule dans ce cas)" },
            { t: "attention", md: "==Jamais [[will]] après [[if]].== *[[If it will rain]]* est faux. La règle vaut aussi après **[[when, as soon as, until]]** quand on parle du futur : *[[I'll call you when I **arrive**.]]* Le français met un futur (« quand j'arriverai »), l'anglais un présent." },
          ],
        },
        {
          titre: "Le type 2 : si on imagine",
          blocs: [
            { t: "propriete", titre: "Conditionnel de type 2 (imaginaire)", md: "**[[If + past simple, would]] + base verbale**\n\n*[[If I **were** rich, I **would travel** the world.]]*\n\nLe prétérit ne parle pas du passé ici : il signale qu'on **s'éloigne de la réalité**. Je ne suis pas riche, j'imagine. Avec [[be]], on emploie **[[were]]** à toutes les personnes dans un anglais soigné : *[[If she were here…]]*" },
            { t: "schema", titre: "Possible ou imaginaire ?", legende: "Type 1 : on avance sur la ligne du temps vers un futur possible. Type 2 : on quitte le monde réel pour un monde imaginé.", svg: `<svg viewBox="0 0 400 280"><text class="texte" x="20" y="22">Type 1 : c'est possible</text><text class="texte-main" x="200" y="46" text-anchor="middle">If it rains, we'll stay at home.</text><line class="trait" x1="20" y1="96" x2="380" y2="96" marker-end="url(#fl)"/><line class="trait" x1="70" y1="82" x2="70" y2="110"/><text class="texte" x="70" y="128" text-anchor="middle">NOW</text><circle cx="200" cy="96" r="6" fill="var(--pigment)"/><text class="texte-pigment" x="200" y="78" text-anchor="middle">it rains?</text><text class="texte-petit" x="200" y="128" text-anchor="middle">if + present</text><circle cx="320" cy="96" r="6" fill="var(--pigment)"/><text class="texte-pigment" x="320" y="78" text-anchor="middle">we'll stay</text><text class="texte-petit" x="320" y="128" text-anchor="middle">will + base verbale</text><line class="pointille" x1="20" y1="148" x2="380" y2="148"/><text class="texte" x="20" y="172">Type 2 : on imagine</text><rect class="aplat-papier" x="20" y="186" width="150" height="66" rx="8"/><rect class="trait" x="20" y="186" width="150" height="66" rx="8" fill="none"/><text class="texte-petit" x="95" y="206" text-anchor="middle">monde réel</text><text class="texte" x="95" y="232" text-anchor="middle">I'm not rich.</text><path class="pointille" d="M174 219 L214 219" fill="none" marker-end="url(#fl-p)"/><rect class="aplat" x="220" y="186" width="160" height="66" rx="8"/><rect class="pointille" x="220" y="186" width="160" height="66" rx="8" fill="none"/><text class="texte-petit" x="300" y="204" text-anchor="middle">monde imaginé</text><text class="texte" x="300" y="224" text-anchor="middle">If I were rich,</text><text class="texte" x="300" y="242" text-anchor="middle">I would travel.</text><text class="texte-petit" x="200" y="272" text-anchor="middle">if + past simple, would + base verbale</text></svg>` },
            { t: "attention", md: "Le piège le plus fréquent des francophones : ==« [[If I would have time]] » est faux.== Le français dit « si j'avais » (imparfait), jamais « si j'aurais » ; l'anglais non plus ne met pas [[would]] après [[if]]. On dit : *[[If I **had** time, I **would help** you.]]*" },
            { t: "exemple", titre: "Imaginer une situation", md: "*[[What **would** you **do** if you **saw** a ghost?]]* — *[[If I saw a ghost, I **would scream** and run away!]]*\n\n(Que ferais-tu si tu voyais un fantôme ? — Si je voyais un fantôme, je hurlerais et je m'enfuirais !)" },
            { t: "verifie", q: "Complète : « [[If I ___ rich, I would travel the world.]] »", choix: ["[[would be]]", "[[am]]", "[[were]]", "[[will be]]"], bonne: 2, explication: "Type 2 : [[if]] + prétérit. Avec [[be]], on emploie [[were]], même avec [[I]]. [[Would]] ne se met jamais après [[if]]." },
          ],
        },
        {
          titre: "[[Unless]] et [[wish]] : nuancer",
          blocs: [
            { t: "definition", terme: "[[Unless]]", md: "**[[Unless]] = [[if… not]]** (à moins que, sauf si). Le verbe qui suit est **affirmatif**.\n\n*[[Unless you hurry, you'll be late.]]* = *[[If you don't hurry, you'll be late.]]*" },
            { t: "definition", terme: "[[Wish]] + prétérit", md: "Exprime un **regret présent**, l'envie que la réalité soit différente. Comme dans le type 2, le prétérit marque l'irréel.\n\n*[[I wish I **had** a dog.]]* (J'aimerais avoir un chien, mais je n'en ai pas.) *[[I wish I **spoke** perfect English!]]*" },
            { t: "exemple", titre: "Un élève de 3e parle de son avenir", md: "[[*If I **pass** my exams, I **will go** to the lycée I have chosen. If I **were** older, I **would travel** alone. I wish I **spoke** perfect English! Unless I **work** hard, I **won't improve**.*]]" },
            { t: "verifie", q: "Complète : « [[___ you study, you won't pass the exam.]] »", choix: ["[[If]]", "[[Unless]]", "[[When]]", "[[Wish]]"], bonne: 1, explication: "[[Unless]] = [[if… not]] : si tu ne travailles pas, tu ne réussiras pas. Avec [[if]], la phrase dirait l'inverse." },
          ],
        },
      ],
      bilan: "Type 1 : if + présent, will. Type 2 : if + prétérit, would. Et jamais would ni will juste après if.",
    },
    "3e-anglais-03-modaux": {
      accroche: "« Tu dois », « tu devrais », « tu n'es pas obligé », « c'est sûrement lui » : en français, on nuance avec devoir et pouvoir. L'anglais a une petite famille de mots spécialisés pour ça, les modaux. Bien choisis, ils changent tout le sens d'une phrase.",
      objectifs: [
        "Exprimer la capacité, la permission et la possibilité",
        "Distinguer obligation, interdiction, absence d'obligation et conseil",
        "Faire une déduction avec must be, can't be, might be",
        "Parler du passé avec should have et might have",
      ],
      sections: [
        {
          titre: "La grammaire des modaux",
          blocs: [
            { t: "propriete", titre: "Trois règles fixes", md: "1. Un modal est suivi de la **base verbale, sans [[to]]** : *[[She must **go**. He can **swim**.]]*\n2. Il ne prend **jamais de -s** : *[[she can]]*, pas *[[she cans]]*.\n3. Il fait lui-même la négation et la question, sans [[do]] : *[[You mustn't. Can I…?]]*\n\nException à connaître : **[[ought to]]** garde son [[to]] : *[[You ought **to** rest.]]*" },
            { t: "texte", md: "Les modaux n'ont ni futur ni infinitif. Pour dire « je pourrai conduire », on remplace [[can]] par **[[be able to]]** : *[[Next year, I **will be able to** drive.]]* Pour l'obligation au passé ou au futur, on emploie **[[have to]]** : *[[I **had to** wait. You **will have to** work.]]*" },
          ],
        },
        {
          titre: "Capacité, permission et possibilité",
          blocs: [
            { t: "tableau", titre: "Pouvoir… mais quel pouvoir ?", entetes: ["Modal", "Sens", "Exemple"], lignes: [["[[**can**]]", "capacité, permission", "[[*He can swim. Can I go out?*]]"], ["[[**could**]]", "capacité passée, demande polie", "[[*When I was five, I could already swim. Could you help me?*]]"], ["[[**be able to**]]", "capacité à tous les temps", "[[*I will be able to drive.*]]"], ["[[**may**]]", "permission très polie, possibilité", "[[*May I open the window, please?*]]"], ["[[**might**]]", "possibilité plus faible", "[[*Take an umbrella, it might rain.*]]"]] },
            { t: "verifie", q: "Complète : « [[Next year, I ___ to drive.]] »", choix: ["[[can]]", "[[will can]]", "[[will be able]]", "[[could]]"], bonne: 2, explication: "[[Can]] n'a pas de futur : on emploie [[will be able to]]. [[Will can]] est impossible (deux modaux de suite)." },
          ],
        },
        {
          titre: "Obligation, interdiction, conseil",
          blocs: [
            { t: "texte", md: "**[[Must]]** et **[[have to]]** expriment tous deux l'obligation, avec une nuance : [[must]] vient souvent de celui qui parle (*[[I must call my gran, I promised]]*), [[have to]] d'une règle extérieure (*[[You have to wear a uniform at this school.]]*). Pour la loi, les deux se rencontrent : *[[You must wear a helmet, it's the law.]]*" },
            { t: "tableau", titre: "Modaux et nuances", entetes: ["Ce que tu veux dire", "Modal", "Exemple"], lignes: [["Obligation (personnelle)", "[[**must**]]", "[[*I must revise tonight.*]]"], ["Obligation (règle extérieure)", "[[**have to**]]", "[[*You have to wear a uniform. It's compulsory.*]]"], ["Interdiction", "[[**mustn't**]]", "[[*You mustn't use your phone in class.*]]"], ["Absence d'obligation", "[[**needn't / don't have to**]]", "[[*You needn't bring food. There will be plenty.*]]"], ["Conseil", "[[**should / ought to**]]", "[[*You should sleep more. You ought to see a doctor.*]]"]] },
            { t: "attention", md: "==[[Mustn't]] ≠ [[don't have to.]]== *[[You mustn't come]]* : tu n'as pas le droit de venir. *[[You don't have to come]]* : tu n'es pas obligé, fais comme tu veux. Une erreur ici transforme une invitation en interdiction !" },
            { t: "verifie", q: "« [[You mustn't come]] » et « [[You don't have to come]] » ont-ils le même sens ?", choix: ["Oui, les deux expriment une obligation", "Non : interdiction d'un côté, absence d'obligation de l'autre"], bonne: 1, explication: "[[Mustn't]] interdit (tu ne dois pas venir). [[Don't have to]] laisse le choix (tu n'es pas obligé de venir)." },
          ],
        },
        {
          titre: "La déduction : sûr, possible ou impossible ?",
          blocs: [
            { t: "texte", md: "Les modaux servent aussi à **raisonner** à partir d'indices, comme un détective. Plus tu es sûr, plus le modal est fort." },
            { t: "schema", titre: "L'échelle de certitude", legende: "[[Must be]] : j'en suis presque sûr. [[Might be]] : c'est possible. [[Can't be]] : c'est presque impossible.", svg: `<svg viewBox="0 0 400 200"><text class="texte-main" x="200" y="26" text-anchor="middle">Where's Tom? He ___ at school.</text><text class="texte-petit" x="50" y="60" text-anchor="middle">sûrement pas</text><text class="texte-petit" x="200" y="60" text-anchor="middle">peut-être</text><text class="texte-petit" x="350" y="60" text-anchor="middle">sûrement</text><line class="trait" x1="22" y1="80" x2="384" y2="80" marker-end="url(#fl)"/><circle cx="50" cy="80" r="6" fill="var(--pigment)"/><circle cx="200" cy="80" r="6" fill="var(--pigment)"/><circle cx="350" cy="80" r="6" fill="var(--pigment)"/><text class="texte-pigment" x="50" y="112" text-anchor="middle">can't be</text><text class="texte-pigment" x="200" y="112" text-anchor="middle">might / may / could be</text><text class="texte-pigment" x="350" y="112" text-anchor="middle">must be</text><text class="texte-petit" x="50" y="134" text-anchor="middle">it's Sunday!</text><text class="texte-petit" x="200" y="134" text-anchor="middle">I'm not sure</text><text class="texte-petit" x="350" y="134" text-anchor="middle">his bag is here</text><text class="texte-petit" x="200" y="176" text-anchor="middle">certitude faible → certitude forte</text></svg>` },
            { t: "exemple", titre: "Trois déductions", md: "• *[[He hasn't eaten all day. He **must be** starving!]]* (il doit mourir de faim)\n• *[[She **can't be** at home, all the lights are off.]]* (elle ne peut pas être chez elle)\n• *[[I'm not sure, he **might be** in the library.]]* (il est peut-être à la bibliothèque)" },
          ],
        },
        {
          titre: "Les modaux au passé",
          blocs: [
            { t: "propriete", titre: "Modal + [[have]] + participe passé", md: "Pour juger ou deviner une action **passée**, on ajoute **[[have]] + participe passé** :\n\n• *[[I failed the test. I **should have studied** harder.]]* (j'aurais dû)\n• *[[He's late. He **might have missed** the bus.]]* (il a peut-être raté le bus)\n• *[[The ground is wet. It **must have rained**.]]* (il a dû pleuvoir)" },
            { t: "astuce", md: "*[[Should have]]* = un regret ou un reproche. Pense à la phrase *[[I should have listened to you!]]* : « J'aurais dû t'écouter ! »" },
          ],
        },
      ],
      bilan: "Un modal, puis la base verbale sans to : must oblige, mustn't interdit, needn't libère, should conseille, et must be, might be, can't be mesurent ta certitude.",
    },
    "3e-anglais-04-voix-passive": {
      accroche: "« Two men were arrested last night. » Par qui ? Le journal ne le dit même pas : ce qui compte, c'est l'arrestation. La voix passive sert exactement à ça : mettre l'action, ou celui qui la subit, sur le devant de la scène.",
      objectifs: [
        "Former le passif avec be + participe passé à tous les temps",
        "Passer d'une phrase active à une phrase passive",
        "Décider s'il faut garder ou omettre le complément d'agent avec by",
        "Reconnaître le passif dans la presse, les sciences et les recettes",
      ],
      sections: [
        {
          titre: "Pourquoi le passif ?",
          blocs: [
            { t: "texte", md: "Compare : *[[Alexander Fleming discovered penicillin in 1928.]]* et *[[Penicillin was discovered by Alexander Fleming in 1928.]]*\n\nLes deux phrases disent la même chose, mais pas avec le même projecteur. La première parle de Fleming, la seconde parle de la **pénicilline**. Le passif choisit **le sujet dont on veut parler**." },
            { t: "definition", terme: "Voix passive", md: "**[[be]]** (au temps voulu) **+ participe passé**. Le complément d'objet de la phrase active devient le sujet de la phrase passive.\n\n*[[English **is spoken** here.]]* (On parle anglais ici.) *[[Hamlet **was written** by Shakespeare.]]*" },
            { t: "savais-tu", md: "Le français dit souvent « on » là où l'anglais met un passif : « On parle anglais ici » = *[[English is spoken here]]*. « On m'a volé mon vélo » = *[[My bike has been stolen]]*. Pense au passif chaque fois que tu vois « on »." },
          ],
        },
        {
          titre: "Passer de l'actif au passif",
          blocs: [
            { t: "etapes", titre: "[[The police arrested the thief.]]", items: [{ titre: "Repérer le complément", md: "Qui subit l'action ? *[[the thief]]*." }, { titre: "Il devient sujet", md: "[[*The thief…*]]" }, { titre: "Conjuguer [[be]] au même temps", md: "*[[arrested]]* est au prétérit, donc [[be]] au prétérit : *[[was]]*." }, { titre: "Ajouter le participe passé", md: "[[*The thief was arrested…*]]" }, { titre: "Agent : oui ou non ?", md: "*…[[by the police]]*, ou rien si c'est évident." }] },
            { t: "propriete", titre: "C'est [[be]] qui porte le temps", md: "Le participe passé ne change jamais. Pour changer de temps, on change **seulement [[be]]** : *[[is made, was made, has been made, will be made]]*. Révise tes participes irréguliers : *[[write – written, build – built, steal – stolen, speak – spoken, make – made]]*." },
            { t: "verifie", q: "Transforme à la voix passive : « [[The police arrested the thief.]] »", choix: ["[[The thief arrested the police.]]", "[[The thief was arrested by the police.]]", "[[The thief is arrested by the police.]]", "[[The police was arrested by the thief.]]"], bonne: 1, explication: "Le complément [[the thief]] devient sujet ; [[arrested]] est au prétérit, donc [[be]] au prétérit : [[was arrested]], puis l'agent [[by the police.]]" },
          ],
        },
        {
          titre: "Le passif à tous les temps",
          blocs: [
            { t: "tableau", titre: "La voix passive, temps par temps", entetes: ["Temps", "Forme passive", "Exemple"], lignes: [["[[Present simple]]", "[[am / is / are]] + participe", "[[*Cars are made here.*]]"], ["[[Present continuous]]", "[[am / is / are being]] + participe", "[[*The road is being repaired.*]]"], ["[[Past simple]]", "[[was / were]] + participe", "[[*Hamlet was written around 1600.*]]"], ["[[Present perfect]]", "[[has / have been]] + participe", "[[*My bike has been stolen!*]]"], ["[[Past perfect]]", "[[had been]] + participe", "[[*The house had been sold.*]]"], ["Futur avec [[will]]", "[[will be]] + participe", "[[*The bridge will be opened next year.*]]"], ["Modal", "modal + [[be]] + participe", "[[*Seat belts must be worn.*]]"]] },
            { t: "exemple", titre: "Trois transformations", md: "• *[[They make cars here.]]* → *[[Cars **are made** here.]]*\n• *[[Someone has stolen my bike.]]* → *[[My bike **has been stolen**!]]*\n• *[[You must wear seat belts.]]* → *[[Seat belts **must be worn**.]]*" },
            { t: "verifie", q: "Complète : « [[My bike ___! It's gone!]] »", choix: ["[[has stolen]]", "[[has been stolen]]", "[[was stealing]]", "[[is stealing]]"], bonne: 1, explication: "Le vélo subit l'action et le résultat est visible maintenant : [[present perfect]] passif, [[has been stolen]]. [[Has stolen]] voudrait dire que le vélo a volé quelque chose !" },
          ],
        },
        {
          titre: "Avec ou sans [[by]] ?",
          blocs: [
            { t: "texte", md: "Le **complément d'agent** (celui qui fait l'action) est introduit par **[[by]]** : *[[by Shakespeare, by the police]]*.\n\nOn le **garde** quand il apporte une information importante : *[[Hamlet was written by Shakespeare.]]* On l'**omet** quand il est inconnu, évident ou sans intérêt : *[[Three people were injured in the accident.]]* (par qui ? personne en particulier)" },
            { t: "attention", md: "Tout ce qui suit [[by]] n'est pas un agent ! Dans *[[The letter was sent **by post**]]*, [[by post]] indique le **moyen** (par la poste), pas celui qui a envoyé la lettre. Même chose avec *[[by bus, by email]]*." },
            { t: "liste", titre: "Où rencontrer le passif ?", items: ["**La presse** : *[[Two men were arrested after the robbery.]]*", "**Les sciences** : *[[First, the water is heated to 100 °C, then the salt is added.]]*", "**Les recettes et les notices** : *[[The eggs are mixed with the sugar.]]*", "**Les panneaux** : *[[Smoking is not allowed.]]*"] },
            { t: "verifie", q: "Titre de journal : « [[Two men ___ after the robbery.]] »", choix: ["[[arrested]]", "[[were arrested]]", "[[was arrested]]", "[[have arrest]]"], bonne: 1, explication: "Les deux hommes subissent l'arrestation : passif au prétérit. Sujet pluriel, donc [[were arrested.]]" },
          ],
        },
      ],
      bilan: "Be au bon temps + participe passé : le passif met en lumière l'action, et by n'apparaît que si l'agent compte vraiment.",
    },
    "3e-anglais-05-discours-rapporte": {
      accroche: "Ton amie t'a dit hier : « Je t'appellerai demain. » Aujourd'hui, tu le racontes à quelqu'un d'autre : « Elle m'a dit qu'elle m'appellerait le lendemain. » Tout a bougé : le pronom, le temps, le repère. L'anglais fait les mêmes déplacements, avec ses propres règles.",
      objectifs: [
        "Choisir entre say, tell et ask",
        "Appliquer le recul des temps (backshift)",
        "Transformer les pronoms et les repères de temps et de lieu",
        "Rapporter une question et un ordre",
      ],
      sections: [
        {
          titre: "[[Say, tell]] ou [[ask]] ?",
          blocs: [
            { t: "tableau", titre: "Trois verbes introducteurs", entetes: ["Verbe", "Construction", "Exemple"], lignes: [["[[**say**]]", "[[say]] ([[that]]) + phrase", "[[*He said (that) he was tired.*]]"], ["[[**tell**]]", "[[tell]] + **personne** ([[that]]) + phrase", "[[*He told me (that) he was tired.*]]"], ["[[**ask**]]", "[[ask]] (+ personne) + [[if]] / mot interrogatif", "[[*She asked me where I lived.*]]"]] },
            { t: "attention", md: "==« [[He said me]] » est faux.== [[Say]] ne se construit pas directement avec la personne. Deux solutions correctes : *[[He **told me** that…]]* ou *[[He **said to me** that…]]* Pour saluer : *[[He said hello to me.]]*" },
            { t: "verifie", q: "Complète : « [[He ___ me that he was tired.]] »", choix: ["[[said]]", "[[told]]", "[[asked]]", "[[spoke]]"], bonne: 1, explication: "La personne ([[me]]) suit directement le verbe : c'est [[tell]]. On dirait [[He said that he was tired]], sans [[me]]." },
          ],
        },
        {
          titre: "Le recul des temps",
          blocs: [
            { t: "propriete", titre: "[[Backshift]]", md: "Quand le verbe introducteur est **au passé** (*[[said, told, asked]]*), les paroles rapportées reculent d'un cran dans le passé.\n\nSi le verbe introducteur est au **présent** (*[[He says…]]*), rien ne recule : *[[He says he is tired.]]*" },
            { t: "tableau", titre: "Le décalage des temps", entetes: ["Discours direct", "Discours rapporté", "Exemple"], lignes: [["[[present simple]]", "[[past simple]]", "« [[I am happy]] » → *[[She said she was happy.]]*"], ["[[present continuous]]", "[[past continuous]]", "« [[I'm working]] » → *[[He said he was working.]]*"], ["[[past simple]]", "[[past perfect]]", "« [[I saw it]] » → *[[He said he had seen it.]]*"], ["[[present perfect]]", "[[past perfect]]", "« [[I have seen this film]] » → *[[Tom said he had seen that film.]]*"], ["[[will]]", "[[would]]", "« [[I will come]] » → *[[He said he would come.]]*"], ["[[can]]", "[[could]]", "« [[I can swim]] » → *[[She said she could swim.]]*"], ["[[must]]", "[[had to]]", "« [[I must go]] » → *[[He said he had to go.]]*"]] },
          ],
        },
        {
          titre: "Les pronoms et les repères changent aussi",
          blocs: [
            { t: "texte", md: "Celui qui rapporte n'est plus au même endroit ni au même moment que celui qui a parlé. Les pronoms changent donc de point de vue (*[[I]]* devient *[[he]]* ou *[[she]]*, *[[you]]* devient *[[me]]*…), et les repères de temps et de lieu se déplacent." },
            { t: "tableau", titre: "Le décalage des repères", entetes: ["Discours direct", "Discours rapporté"], lignes: [["[[today]]", "[[that day]]"], ["[[tomorrow]]", "[[the next day / the following day]]"], ["[[yesterday]]", "[[the day before / the previous day]]"], ["[[now]]", "[[then]]"], ["[[here]]", "[[there]]"], ["[[this]]", "[[that]]"], ["[[next week]]", "[[the following week]]"], ["[[ago]]", "[[before]]"]] },
            { t: "exemple", titre: "Une phrase complète", etapes: ["Direct : « [[I will call you tomorrow]] », [[Lucy said to me.]]", "Verbe : la personne est nommée, donc *[[Lucy told me (that)…]]*", "Pronoms : [[I → she, you → me.]]", "Temps : [[will → would.]]", "Repère : [[tomorrow → the next day.]]", "Résultat : *[[Lucy told me (that) she would call me the next day.]]*"] },
            { t: "verifie", q: "[[« I will come tomorrow », he said. → He said he ___ come the next day.]]", choix: ["[[will]]", "[[would]]", "[[comes]]", "[[had]]"], bonne: 1, explication: "Le verbe introducteur est au passé ([[said]]) : [[will]] recule en [[would]]. [[Tomorrow]] devient [[the next day.]]" },
          ],
        },
        {
          titre: "Rapporter une question ou un ordre",
          blocs: [
            { t: "propriete", titre: "Questions rapportées", md: "• Question fermée (réponse [[yes / no]]) : **[[ask + if / whether]]**. « [[Do you like rap?]] », [[he asked.]] → *[[He asked me **if I liked** rap.]]*\n• Question ouverte : **[[ask]] + mot interrogatif**. « [[Where do you live?]] », [[she asked.]] → *[[She asked me **where I lived**.]]*\n\nDans les deux cas : ordre **sujet + verbe**, plus de [[do]], plus de point d'interrogation." },
            { t: "propriete", titre: "Ordres rapportés", md: "**[[tell / ask]] + personne + [[to]] + base verbale**. À la forme négative : **[[not to]]**.\n\n« [[Close the door!]] » → *[[The teacher told us **to close** the door.]]*\n« [[Don't touch that!]] » → *[[She told me **not to touch** that.]]*" },
            { t: "attention", md: "Ne garde pas l'ordre de la question : *[[She asked me where **did I live**]]* est faux. Au discours rapporté, ce n'est plus une question : *[[She asked me where **I lived**.]]*" },
            { t: "verifie", q: "« [[Don't touch that!]] », [[she said to me.]] Quelle phrase rapporte cet ordre ?", choix: ["[[She told me don't touch that.]]", "[[She told me not to touch that.]]", "[[She said me to not touch that.]]", "[[She asked me if I touched that.]]"], bonne: 1, explication: "Ordre négatif rapporté : [[tell]] + personne + [[not to]] + base verbale. [[She told me not to touch that.]]" },
          ],
        },
      ],
      bilan: "Pour rapporter, tout recule d'un cran : les temps, les pronoms, les repères. Et souviens-toi : on tell quelqu'un, on say quelque chose.",
    },
    "3e-anglais-06-phrases-complexes": {
      accroche: "« Il pleuvait. On est sortis. On voulait acheter à manger. » Trois phrases sèches. « Bien qu'il pleuve, on est sortis pour acheter à manger » : une seule phrase, et on comprend la logique. Les connecteurs sont la colle de tes idées.",
      objectifs: [
        "Employer les pronoms relatifs dans des relatives déterminatives et explicatives",
        "Exprimer la concession et le but",
        "Utiliser les conjonctions de temps et les question tags",
        "Choisir entre gérondif et infinitif, et réagir avec so ou neither",
      ],
      sections: [
        {
          titre: "Les pronoms relatifs",
          blocs: [
            { t: "tableau", titre: "Qui, que, dont, où", entetes: ["Relatif", "Remplace", "Exemple"], lignes: [["[[**who**]]", "une personne", "[[*The girl who lives next door is my friend.*]]"], ["[[**which**]]", "une chose, un animal", "[[*The book which I read was great.*]]"], ["[[**that**]]", "personne ou chose (déterminative seulement)", "[[*The film that we saw was scary.*]]"], ["[[**whose**]]", "la possession (dont)", "[[*The boy whose father is a pilot…*]]"], ["[[**where**]]", "un lieu (où)", "[[*This is the house where I was born.*]]"]] },
            { t: "propriete", titre: "Déterminative ou explicative ?", md: "• **Déterminative** : indispensable pour savoir de qui on parle, **sans virgule**. *[[The girl **who lives next door** is my friend.]]* (laquelle ? celle d'à côté)\n• **Explicative** : simple information en plus, **entre virgules**, et ==jamais avec [[that]]==. *[[My brother, **who lives in Canada**, is a doctor.]]* (je n'ai qu'un frère)" },
            { t: "verifie", q: "Complète : « [[My brother, ___ lives in Canada, is a doctor.]] »", choix: ["[[that]]", "[[who]]", "[[which]]", "[[whose]]"], bonne: 1, explication: "C'est une relative explicative (entre virgules) sur une personne : [[who]]. [[That]] est interdit après une virgule." },
          ],
        },
        {
          titre: "La concession et le but",
          blocs: [
            { t: "tableau", titre: "Bien que… pour que…", entetes: ["Idée", "Connecteur", "Suivi de", "Exemple"], lignes: [["Concession", "[[**although / even though**]]", "une proposition (sujet + verbe)", "[[*Although it was raining, we went out.*]]"], ["Concession", "[[**despite / in spite of**]]", "un nom ou V[[-ing]]", "[[*Despite the rain, the match took place.*]]"], ["But", "[[**to / in order to**]]", "base verbale", "[[*He went to London to improve his English.*]]"], ["But", "[[**so that**]]", "une proposition (souvent [[can / could]])", "[[*I speak slowly so that you can understand.*]]"]] },
            { t: "attention", md: "==« [[Despite of]] » n'existe pas.== On dit *[[despite the rain]]* ou *[[in spite of the rain]]*. Le « [[of]] » appartient seulement à [[in spite of]]. Et en français, « pour » + infinitif ne se traduit jamais par *[[for to]]* : *[[He came **to** help.]]*" },
            { t: "verifie", q: "Complète : « [[___ the rain, the match took place.]] »", choix: ["[[Although]]", "[[Despite]]", "[[Despite of]]", "[[Even though]]"], bonne: 1, explication: "[[The rain]] est un nom : il faut [[despite]] (ou [[in spite of]]). [[Although]] et [[even though]] demandent un sujet et un verbe : [[although it was raining.]]" },
          ],
        },
        {
          titre: "Le temps et les [[question tags]]",
          blocs: [
            { t: "texte", md: "**[[As soon as]]** (dès que), **[[while]]** (pendant que), **[[until]]** (jusqu'à ce que) relient deux actions dans le temps. Comme après [[if]], quand on parle du futur, le verbe qui suit reste au **présent** : *[[Wait here until I **come** back. I'll call you as soon as I **arrive**.]]*" },
            { t: "propriete", titre: "Les [[question tags]]", md: "Une mini-question en fin de phrase pour demander confirmation (« n'est-ce pas ? »). On reprend **l'auxiliaire** de la phrase, on **inverse** la forme, et on ajoute le **pronom** :\n\n• *[[You're French, **aren't you**?]]*\n• *[[She can swim, **can't she**?]]*\n• *[[He doesn't like fish, **does he**?]]*\n• *[[They played well, **didn't they**?]]* (pas d'auxiliaire visible : on prend [[did]])" },
            { t: "exemple", titre: "Tout ensemble", md: "[[*Although it was raining, we went out in order to buy food. You'll call me as soon as you arrive, won't you?*]]" },
          ],
        },
        {
          titre: "Gérondif ou infinitif ? [[So]] ou [[neither]] ?",
          blocs: [
            { t: "tableau", titre: "Le verbe qui suit", entetes: ["Après…", "on met…", "Exemple"], lignes: [["[[enjoy, love, hate, mind, stop, look forward to]]", "le **gérondif** (V[[-ing]])", "[[*I enjoy reading. He stopped running.*]]"], ["[[want, hope, decide, would like]]", "l'**infinitif** ([[to]] + base)", "[[*I want to watch a film.*]]"]] },
            { t: "astuce", md: "*[[Look forward to]]* se termine par [[to]], mais ce [[to]] est une préposition : il est suivi de V[[-ing]]. *[[I'm looking forward to **seeing** you.]]*" },
            { t: "propriete", titre: "Moi aussi, moi non plus", md: "On reprend l'auxiliaire de la phrase de départ, avec inversion :\n\n• *[[I love pizza.]]* — ***[[So do I!]]*** (moi aussi)\n• *[[I can't swim.]]* — ***[[Neither can I.]]*** (moi non plus)\n• *[[I've finished.]]* — ***[[So have I.]]***" },
            { t: "verifie", q: "Complète : « [[He stopped ___ because he was exhausted.]] » (il s'est arrêté de courir)", choix: ["[[to run]]", "[[running]]", "[[run]]", "[[ran]]"], bonne: 1, explication: "[[Stop]] + V[[-ing]] : arrêter de faire quelque chose. [[He stopped to run]] voudrait dire qu'il s'est arrêté pour courir !" },
          ],
        },
      ],
      bilan: "Who, which, whose, where pour relier ; although + phrase, despite + nom ; et le bon auxiliaire pour tes question tags et tes « moi aussi ».",
    },
    "3e-anglais-07-phrasal-verbs-vocabulaire": {
      accroche: "Tu connais look (regarder). Mais look after, look for, look forward to ? Trois sens qui n'ont presque rien à voir ! Une petite particule suffit à transformer un verbe. Bienvenue dans le monde des phrasal verbs, et de la fabrique des mots anglais.",
      objectifs: [
        "Comprendre et employer des phrasal verbs courants",
        "Fabriquer des mots avec des préfixes et des suffixes",
        "Éviter les faux amis et employer les bonnes collocations",
        "Choisir le bon quantifieur : much, many, few, little, too, enough",
      ],
      sections: [
        {
          titre: "Les [[phrasal verbs]]",
          blocs: [
            { t: "definition", terme: "[[Phrasal verb]]", md: "Un **verbe + une particule** (*[[up, down, after, on, off, out…]]*) qui forment ensemble un sens nouveau, souvent impossible à deviner. *[[Give]]* = donner, mais *[[give up]]* = abandonner, arrêter." },
            { t: "tableau", titre: "Les incontournables", entetes: ["[[Phrasal verb]]", "Sens", "Exemple"], lignes: [["[[**give up**]]", "abandonner, arrêter", "[[*She gave up smoking last year.*]]"], ["[[**look after**]]", "s'occuper de", "[[*I look after my little brother.*]]"], ["[[**look for**]]", "chercher", "[[*I'm looking for my phone.*]]"], ["[[**look forward to**]]", "avoir hâte de", "[[*I'm looking forward to the holidays.*]]"], ["[[**turn down**]]", "baisser (le son) ; refuser", "[[*Can you turn down the music?*]]"], ["[[**get on with**]]", "bien s'entendre avec", "[[*He gets on with his sister.*]]"], ["[[**find out**]]", "découvrir, apprendre", "[[*I found out the truth.*]]"], ["[[**grow up**]]", "grandir", "[[*I grew up in Lyon.*]]"]] },
            { t: "astuce", md: "N'apprends jamais un [[phrasal verb]] seul : apprends-le **dans une phrase** que tu peux imaginer. *[[Turn down the music, it's too loud!]]* se retient bien mieux que « [[turn down]] = baisser »." },
            { t: "verifie", q: "Complète : « [[He ___ with his sister very well, they never argue.]] »", choix: ["[[gets on]]", "[[gives up]]", "[[looks after]]", "[[turns down]]"], bonne: 0, explication: "[[Get on with somebody]] : bien s'entendre avec quelqu'un. Ils ne se disputent jamais." },
          ],
        },
        {
          titre: "La fabrique des mots",
          blocs: [
            { t: "texte", md: "Avec un seul mot de base, tu peux en fabriquer cinq ou six. Un **préfixe** se place devant et change souvent le sens (contraire, répétition). Un **suffixe** se place derrière et change souvent la **nature** du mot (nom, adjectif, adverbe)." },
            { t: "schema", titre: "Un mot, une famille", legende: "En ajoutant des suffixes à [[care]] (le soin), on fabrique des adjectifs, un adverbe et un nom.", svg: `<svg viewBox="0 0 400 220"><rect class="aplat-fort" x="160" y="12" width="80" height="34" rx="8"/><text class="texte-main" x="200" y="35" text-anchor="middle">care</text><path class="trait-fin" d="M180 48 L110 78" fill="none" marker-end="url(#fl)"/><path class="trait-fin" d="M220 48 L290 78" fill="none" marker-end="url(#fl)"/><text class="texte-main" x="100" y="100" text-anchor="middle">careful</text><text class="texte-petit" x="100" y="118" text-anchor="middle">-ful = plein de (attentif)</text><text class="texte-main" x="300" y="100" text-anchor="middle">careless</text><text class="texte-petit" x="300" y="118" text-anchor="middle">-less = sans (négligent)</text><path class="trait-fin" d="M100 126 L100 160" fill="none" marker-end="url(#fl)"/><path class="trait-fin" d="M300 126 L300 160" fill="none" marker-end="url(#fl)"/><text class="texte-main" x="100" y="182" text-anchor="middle">carefully</text><text class="texte-petit" x="100" y="200" text-anchor="middle">-ly = adverbe (avec soin)</text><text class="texte-main" x="300" y="182" text-anchor="middle">carelessness</text><text class="texte-petit" x="300" y="200" text-anchor="middle">-ness = nom (la négligence)</text></svg>` },
            { t: "tableau", titre: "Préfixes et suffixes", entetes: ["Élément", "Sens", "Exemples"], lignes: [["[[**un-, dis-, im- / in-**]]", "le contraire", "[[*unhappy, disagree, impossible, invisible*]]"], ["[[**re-**]]", "refaire", "[[*rewrite, rebuild*]]"], ["[[**-ful**]]", "plein de (adjectif)", "[[*careful, useful, beautiful*]]"], ["[[**-less**]]", "sans (adjectif)", "[[*careless, useless, homeless*]]"], ["[[**-ness**]]", "nom de qualité", "[[*kindness, happiness*]]"], ["[[**-tion**]]", "nom d'action", "[[*educate → education, inform → information*]]"], ["[[**-ly**]]", "adverbe", "[[*slow → slowly, quick → quickly*]]"]] },
            { t: "verifie", q: "Quel est le contraire de « [[happy]] » ?", choix: ["[[dishappy]]", "[[unhappy]]", "[[imhappy]]", "[[happyless]]"], bonne: 1, explication: "Le préfixe négatif de [[happy]] est [[un-]] : [[unhappy]]. [[Dis-]] va avec des verbes comme [[disagree]], [[im-]] avec [[possible]]." },
          ],
        },
        {
          titre: "Faux amis et collocations",
          blocs: [
            { t: "texte", md: "Les **faux amis** ressemblent à des mots français mais n'ont pas le même sens. Ils sont traîtres justement parce qu'ils ont l'air faciles." },
            { t: "tableau", titre: "Les faux amis à connaître", entetes: ["Mot anglais", "Vrai sens", "Pour dire le mot français…"], lignes: [["[[*actually*]]", "en fait", "actuellement = *[[currently, nowadays]]*"], ["[[*library*]]", "bibliothèque", "librairie = *[[bookshop]]*"], ["[[*sensible*]]", "raisonnable", "sensible = *[[sensitive]]*"], ["[[*eventually*]]", "finalement", "éventuellement = *[[possibly]]*"], ["[[*to attend*]]", "assister à", "attendre = *[[to wait]]*"], ["[[*a stage*]]", "une scène (théâtre)", "un stage = *[[work experience]]*"]] },
            { t: "propriete", titre: "Les collocations", md: "Certains mots vont toujours ensemble, sans logique apparente. On dit *[[**make** a mistake, **make** friends]]*, mais *[[**do** homework, **do** the shopping]]* ; *[[**take** a photo, **have** a shower, **earn** money]]*. Apprends-les par paires." },
            { t: "verifie", q: "Que signifie « [[actually]] » ?", choix: ["actuellement", "en fait", "activement", "finalement"], bonne: 1, explication: "[[Actually]] est un faux ami : il signifie en fait. Actuellement se dit [[currently]] ou [[nowadays]]." },
          ],
        },
        {
          titre: "Les quantifieurs",
          blocs: [
            { t: "liste", titre: "Beaucoup, peu, trop, assez", items: ["**[[much]]** + indénombrable : *[[How much money have you got? — Not much.]]*", "**[[many]]** + dénombrable pluriel : *[[How many friends?]]*", "**[[a lot of]]** : les deux, surtout à l'affirmatif : *[[a lot of time, a lot of people]]*.", "**[[little]]** (peu de) + indénombrable, **[[few]]** (peu de) + dénombrable : *[[little time, few people]]*.", "**[[too]]** + adjectif (trop) : *[[I'm too tired to go out tonight.]]*", "adjectif + **[[enough]]** (assez) : *[[old enough]]* ; **[[enough]]** + nom : *[[enough free time]]*."] },
            { t: "exemple", titre: "Dans un message", md: "[[*Actually, I get on well with my sister, although she is sometimes careless. I'm looking forward to the holidays: I have too much homework and not enough free time!*]]" },
            { t: "attention", md: "*[[Enough]]* se place **après** l'adjectif mais **avant** le nom : *[[She isn't **old enough**.]]* mais *[[We haven't got **enough chairs**.]]* Et *[[too]]* exprime un excès gênant : *[[too expensive]]* = trop cher pour moi." },
          ],
        },
      ],
      bilan: "Un phrasal verb s'apprend en contexte, un mot se fabrique avec préfixes et suffixes, et un faux ami se démasque : ton vocabulaire se multiplie.",
    },
    "3e-anglais-08-world-of-work": {
      accroche: "En 3e, tu fais ton premier stage. Et si un jour tu postulais à Londres, à Dublin ou à Toronto ? Savoir présenter tes qualités, écrire une lettre de motivation et parler de salaire en anglais, c'est déjà préparer ton avenir.",
      objectifs: [
        "Nommer des métiers, des secteurs et des qualités professionnelles",
        "Rédiger un CV et une lettre de motivation en anglais",
        "Répondre aux questions d'un entretien",
        "Parler d'argent : gagner, dépenser, économiser",
      ],
      sections: [
        {
          titre: "[[Jobs and skills]]",
          blocs: [
            { t: "tableau", titre: "Quelques métiers", entetes: ["Anglais", "Français", "Ce que fait cette personne"], lignes: [["[[a nurse]]", "un infirmier, une infirmière", "[[*looks after patients*]]"], ["[[a lawyer]]", "un avocat, une avocate", "[[*defends people in court*]]"], ["[[an accountant]]", "un ou une comptable", "[[*manages money and figures*]]"], ["[[a plumber]]", "un plombier", "[[*repairs pipes and taps*]]"], ["[[an engineer]]", "un ingénieur", "[[*designs machines or systems*]]"], ["[[an architect]]", "un ou une architecte", "[[*designs buildings*]]"], ["[[a shop assistant]]", "un vendeur, une vendeuse", "[[*serves customers*]]"], ["[[a vet]]", "un ou une vétérinaire", "[[*treats animals*]]"]] },
            { t: "attention", md: "• ==*[[Work]]* est indénombrable== : *[[I'm looking for **a job**]]* ou *[[I'm looking for **work**]]*, mais jamais *[[a work]]*.\n• Devant un métier, l'anglais met toujours **[[a / an]]** : *[[She is **a** nurse. I want to be **an** engineer.]]*\n• ==*[[A stage]]* est un faux ami== : c'est une scène de théâtre. Ton stage de 3e se dit ***[[work experience]]*** (ou *[[a work experience placement]]*)." },
            { t: "verifie", q: "Comment dit-on « un stage en entreprise » ?", choix: ["[[a stage]]", "[[a work experience placement]]", "[[a work]]", "[[a training stage]]"], bonne: 1, explication: "[[Work experience (placement)]] désigne le stage d'observation. [[A stage]] est une scène de théâtre." },
          ],
        },
        {
          titre: "Le CV et la lettre de motivation",
          blocs: [
            { t: "texte", md: "Un **CV** britannique tient en une page et suit des rubriques claires : *[[personal details, education, work experience, skills]]* (compétences : langues, informatique…), *[[hobbies]]*. Pas de photo, en général. La **[[cover letter]]** (lettre de motivation) l'accompagne." },
            { t: "etapes", titre: "Construire sa [[cover letter]]", items: [{ titre: "Saluer", md: "*[[Dear Sir or Madam,]]* (destinataire inconnu) ou *[[Dear Mr Smith,]]*" }, { titre: "Dire pourquoi on écrit", md: "[[*I am writing to apply for the work experience placement advertised on your website.*]]" }, { titre: "Se présenter", md: "*[[I am a Year 10 student at]] [[fr:Collège Jean Moulin]] [[in Lyon.]]*" }, { titre: "Montrer ses qualités", md: "[[*I am hard-working and reliable, and I speak English and Spanish.*]]" }, { titre: "Conclure", md: "[[*I look forward to hearing from you.*]]" }, { titre: "Prendre congé et signer", md: "*[[Yours faithfully,]]* puis ton nom." }] },
            { t: "propriete", titre: "Formules d'ouverture et de clôture", md: "• *[[Dear Sir or Madam]]* → ***[[Yours faithfully]]*** (tu ne connais pas le nom).\n• *[[Dear Mr Smith / Dear Ms Jones]]* → ***[[Yours sincerely]]*** (tu connais le nom).\n\nAvant la formule finale, la phrase rituelle : *[[I look forward to hearing from you.]]*" },
            { t: "verifie", q: "Ta lettre commence par « [[Dear Sir or Madam]] ». Par quelle formule dois-tu la terminer ?", choix: ["[[Yours sincerely]]", "[[Yours faithfully]]", "[[Love]]", "[[See you soon]]"], bonne: 1, explication: "Destinataire anonyme ([[Sir or Madam]]) : [[Yours faithfully]]. [[Yours sincerely]] s'emploie quand on a écrit le nom de la personne." },
          ],
        },
        {
          titre: "L'entretien",
          blocs: [
            { t: "liste", titre: "Questions fréquentes d'une interview", items: ["[[*Tell me about yourself.* — *I'm fifteen and I'm in Year 10. I love working with animals.*]]", "*[[What are your **strengths**?]]* (tes points forts) — *[[I'm organised, reliable and hard-working.]]*", "*[[What are your **weaknesses**?]]* (tes points faibles) — *[[I'm sometimes impatient, but I'm working on it.]]*", "[[*What would you like to do in the future?* — *I would like to **become** a vet.*]]", "[[*Why do you want this placement?* — *Because I'm interested in healthcare.*]]"] },
            { t: "astuce", md: "Pour un point faible, montre toujours comment tu progresses : *[[I'm a bit shy, but I'm learning to speak in public.]]* C'est honnête et positif." },
          ],
        },
        {
          titre: "L'argent et le travail",
          blocs: [
            { t: "tableau", titre: "Les verbes de l'argent", entetes: ["Verbe", "Sens", "Exemple"], lignes: [["[[**earn**]]", "gagner (par le travail)", "[[*How much do you earn a month?*]]"], ["[[**win**]]", "gagner (un match, un prix)", "[[*We won the lottery!*]]"], ["[[**spend**]]", "dépenser ; passer (du temps)", "[[*I spend too much on clothes.*]]"], ["[[**save**]]", "économiser", "[[*I save half of it every week.*]]"], ["[[**borrow**]]", "emprunter", "[[*Can I borrow £5?*]]"], ["[[**lend**]]", "prêter", "[[*Can you lend me £5?*]]"], ["[[**hire / fire**]]", "embaucher / licencier", "[[*The company hired ten people.*]]"]] },
            { t: "texte", md: "Un **[[salary]]** est un salaire mensuel ou annuel ; les **[[wages]]** sont payés à l'heure ou à la semaine. Celui qui n'a pas d'emploi est ***[[unemployed]]*** (au chômage)." },
            { t: "exemple", titre: "Une lettre complète", md: "[[*Dear Sir or Madam,*\n*I am writing to apply for the work experience placement advertised on your website. I am a hard-working student and I speak English and Spanish. I look forward to hearing from you.*\n*Yours faithfully,*\n*Lina Martin*]]" },
            { t: "verifie", q: "Complète : « [[How much do you ___ a month? — About £2,000.]] »", choix: ["[[win]]", "[[earn]]", "[[gain]]", "[[spend]]"], bonne: 1, explication: "On gagne un salaire par son travail : [[earn]]. [[Win]] s'emploie pour un match ou un prix." },
          ],
        },
      ],
      bilan: "A job, work experience, Yours faithfully, earn money : quelques mots justes, et ton anglais te présente déjà comme un vrai professionnel.",
    },
    "3e-anglais-09-society-commitment": {
      accroche: "Greta Thunberg avait 15 ans quand elle a commencé sa grève pour le climat devant le Parlement suédois. Ton âge, à peu près. Pour t'engager, débattre et démêler le vrai du faux en ligne, il te faut les mots du monde d'aujourd'hui.",
      objectifs: [
        "Parler d'environnement et de changement climatique",
        "Parler d'engagement, de droits humains et d'égalité",
        "Analyser une information et repérer les fake news",
        "Exprimer la cause et la conséquence pour proposer des solutions",
      ],
      sections: [
        {
          titre: "[[The environment]]",
          blocs: [
            { t: "tableau", titre: "Le vocabulaire du climat", entetes: ["Anglais", "Français"], lignes: [["[[pollution / waste]]", "la pollution / les déchets"], ["[[global warming]]", "le réchauffement climatique"], ["[[climate change]]", "le changement climatique"], ["[[greenhouse gases]]", "les gaz à effet de serre"], ["[[renewable energy]]", "les énergies renouvelables"], ["[[carbon footprint]]", "l'empreinte carbone"], ["[[to recycle / reduce / reuse]]", "recycler / réduire / réutiliser"], ["[[to cut down on]]", "réduire (sa consommation de)"], ["[[to throw away]]", "jeter"], ["[[to ban]]", "interdire"]] },
            { t: "etapes", titre: "La vie d'un sac plastique", items: [{ titre: "[[Produced]]", md: "[[*It is made from oil in a factory.*]]" }, { titre: "[[Used]]", md: "[[*It carries your shopping home.*]]" }, { titre: "[[Thrown away]]", md: "[[*A few minutes later, it is thrown away.*]]" }, { titre: "[[Lost]]", md: "[[*It ends up in a landfill or in the ocean.*]]" }, { titre: "[[Broken down]]", md: "[[*It can take hundreds of years to break down into tiny pieces.*]]" }] },
            { t: "verifie", q: "Complète : « [[We should ___ plastic bottles instead of throwing them away.]] »", choix: ["[[recycle]]", "[[ban]]", "[[waste]]", "[[pollute]]"], bonne: 0, explication: "Au lieu de les jeter, on les recycle : [[recycle. Waste]] signifie gaspiller." },
          ],
        },
        {
          titre: "[[Commitment and rights]]",
          blocs: [
            { t: "definition", terme: "[[A volunteer]]", md: "Une personne **bénévole**, qui travaille gratuitement pour aider les autres, souvent pour une ***[[charity]]*** (association caritative). *[[She volunteers for a charity that helps homeless people.]]*" },
            { t: "liste", titre: "S'engager et défendre des droits", items: ["*[[to raise money]]* : collecter des fonds", "*[[to sign a petition]]* : signer une pétition", "*[[to protest / to go on strike]]* : manifester / faire grève", "*[[human rights]]* : les droits humains", "*[[freedom of speech]]* : la liberté d'expression", "*[[gender equality]]* : l'égalité entre les femmes et les hommes", "*[[the gender pay gap]]* : l'écart de salaire entre femmes et hommes", "*[[poverty / discrimination]]* : la pauvreté / la discrimination"] },
            { t: "savais-tu", md: "En anglais, *[[gap]]* signifie « écart, trou ». À Londres, dans le métro, une voix répète *[[Mind the gap!]]* : « Attention à l'espace entre le train et le quai. »" },
          ],
        },
        {
          titre: "[[Media and fake news]]",
          blocs: [
            { t: "texte", md: "Sur les ***[[social media]]*** (réseaux sociaux), une information peut faire le tour du monde en quelques heures, vraie ou fausse. Les ***[[fake news]]*** sont de fausses informations présentées comme vraies, souvent pour tromper ou faire cliquer." },
            { t: "etapes", titre: "[[Check before you share]]", items: [{ titre: "[[Read beyond the headline]]", md: "*[[The headline]]* (le titre) peut exagérer : lis tout l'article." }, { titre: "[[Check the source]]", md: "[[*Who wrote it? Is it a real newspaper?*]]" }, { titre: "[[Check the date]]", md: "Une vieille information peut être republiée comme nouvelle." }, { titre: "[[Compare]]", md: "[[*Do other reliable sources say the same thing?*]]" }, { titre: "[[Think, then share]]", md: "[[*If you are not sure, don't share it.*]]" }] },
            { t: "attention", md: "*[[News]]* est **indénombrable**, même s'il finit par -s : *[[The news **is** good.]]* On ne dit pas « [[a fake news]] » mais *[[a piece of fake news]]* ou *[[a fake story]]*. Et « passer du temps sur » se dit *[[**spend** time on]]* : *[[Teenagers spend a lot of time on social media.]]*" },
          ],
        },
        {
          titre: "Causes, conséquences et solutions",
          blocs: [
            { t: "propriete", titre: "Exprimer la cause et la conséquence", md: "• Cause + **proposition** : ***[[because]]*** : *[[The planet is getting warmer because we burn fossil fuels.]]*\n• Cause + **nom** : ***[[because of, due to]]*** : *[[The temperature is rising **because of** human activities.]]*\n• Conséquence : ***[[so, as a result, that's why]]*** : *[[Plastic pollutes the oceans. **That's why** some countries have banned plastic bags.]]*" },
            { t: "exemple", titre: "Proposer des solutions", md: "[[*Because of pollution, the planet is getting warmer. That's why many teenagers volunteer for charities or sign petitions. If we **cut down on** meat, we **will reduce** our carbon footprint. Before sharing news on social media, check the source: fake news spreads fast!*]]" },
            { t: "verifie", q: "Complète : « [[The Earth's temperature is rising ___ human activities.]] »", choix: ["[[because]]", "[[because of]]", "[[so]]", "[[that's why]]"], bonne: 1, explication: "[[Human activities]] est un groupe nominal (pas de verbe) : [[because of]] ou [[due to]]. [[Because]] doit être suivi d'un sujet et d'un verbe." },
          ],
        },
      ],
      bilan: "Recycle, volunteer, check the source : avec because of et that's why, tu sais expliquer un problème de société et proposer une solution.",
    },
    "3e-anglais-10-history-culture": {
      accroche: "Plus de 1,5 milliard de personnes parlent anglais dans le monde. Comment la langue d'une petite île de la mer du Nord s'est-elle répandue sur tous les continents ? Pour le comprendre, il faut voyager de la Londres de Shakespeare aux rues de Montgomery, et jusqu'au Cap.",
      objectifs: [
        "Situer Shakespeare, Dickens et l'ère victorienne",
        "Expliquer ce qu'étaient l'Empire britannique et ce qu'est le Commonwealth",
        "Raconter les grandes étapes de l'histoire américaine, d'Ellis Island aux droits civiques",
        "Décrire l'apartheid, l'histoire irlandaise et les institutions du Royaume-Uni et des États-Unis",
      ],
      sections: [
        {
          titre: "[[Britain]] : de Shakespeare à l'ère victorienne",
          blocs: [
            { t: "texte", md: "**William Shakespeare** (1564-1616) est le plus célèbre écrivain de langue anglaise. Ses pièces se jouent encore partout : *[[Romeo and Juliet, Hamlet, Macbeth]]*. Il a même inventé des mots et des expressions qu'on utilise toujours.\n\nDeux siècles plus tard, **Charles Dickens** (1812-1870) décrit la misère des enfants pauvres de Londres dans *[[Oliver Twist]]*." },
            { t: "citation", texte: "[[To be, or not to be, that is the question.]]", auteur: "William Shakespeare", source: "Hamlet, vers 1600" },
            { t: "definition", terme: "[[The Victorian era]]", md: "Le règne de la reine **Victoria (1837-1901)**. C'est l'époque de la **révolution industrielle** (usines, trains, grandes villes), mais aussi d'une grande pauvreté ouvrière, et l'apogée du **[[British Empire]]**." },
          ],
        },
        {
          titre: "L'Empire britannique et le Commonwealth",
          blocs: [
            { t: "texte", md: "Au début du XXe siècle, le **[[British Empire]]** couvre environ un quart des terres émergées : on disait que « le soleil ne s'y couche jamais ». Après 1945, les colonies deviennent indépendantes, à commencer par l'Inde et le Pakistan en 1947.\n\nLe **[[Commonwealth of Nations]]** réunit aujourd'hui 56 pays, pour la plupart d'anciennes colonies, qui coopèrent librement. Certains, comme le Rwanda, le Gabon ou le Togo, n'ont jamais été britanniques." },
            { t: "carte", fond: "monde", titre: "Quelques pays du Commonwealth et leur capitale", zones: ["GB", "CA", "AU", "NZ", "IN", "PK", "BD", "LK", "MY", "ZA", "NG", "GH", "KE", "UG", "TZ", "ZM", "MZ", "BW", "NA", "CM", "RW", "GA", "TG", "JM"], reperes: [{ nom: "London", lat: 51.51, lon: -0.13 }, { nom: "Ottawa", lat: 45.42, lon: -75.7 }, { nom: "Kingston", lat: 17.97, lon: -76.79 }, { nom: "Abuja", lat: 9.08, lon: 7.4 }, { nom: "Nairobi", lat: -1.29, lon: 36.82 }, { nom: "Pretoria", lat: -25.75, lon: 28.19 }, { nom: "New Delhi", lat: 28.61, lon: 77.21 }, { nom: "Canberra", lat: -35.28, lon: 149.13 }, { nom: "Wellington", lat: -41.29, lon: 174.78 }], legende: "Le Commonwealth est présent sur tous les continents habités. Les États-Unis et l'Irlande n'en font pas partie." },
            { t: "verifie", q: "[[The Victorian era corresponds to…]]", choix: ["[[the reign of Queen Elizabeth I]]", "[[the reign of Queen Victoria, from 1837 to 1901]]", "[[the American Civil War]]", "[[the Second World War]]"], bonne: 1, explication: "L'ère victorienne est le règne de Victoria (1837-1901), époque de la révolution industrielle et de l'apogée de l'Empire." },
          ],
        },
        {
          titre: "Les États-Unis : rêve, immigration et droits civiques",
          blocs: [
            { t: "definition", terme: "[[The American Dream]]", md: "L'idée que chacun, quelle que soit son origine, peut **réussir par son travail** aux États-Unis. Ce rêve a attiré des millions d'immigrants." },
            { t: "texte", md: "Entre 1892 et 1954, environ **12 millions d'immigrants** sont passés par **[[Ellis Island]]**, une petite île devant New York, tout près de la statue de la Liberté. On y contrôlait leur santé et leurs papiers avant de les laisser entrer.\n\nPourtant, bien après l'abolition de l'esclavage (1865), les Afro-Américains du Sud subissent la **ségrégation** : écoles, bus et restaurants séparés. Le **[[Civil Rights Movement]]** se bat pour l'égalité. En 1960, **Ruby Bridges**, six ans, est l'une des premières élèves noires à entrer dans une école réservée aux Blancs, à La Nouvelle-Orléans." },
            { t: "exemple", titre: "Rosa Parks, Montgomery, 1955", md: "*[[In 1955, Rosa Parks was arrested because she refused to give up her seat to a white passenger. Her courage started the Montgomery bus boycott, led by a young pastor: Martin Luther King.]]*\n\nEn 1963, devant 250 000 personnes à Washington, Martin Luther King prononce son discours *[[I have a dream]]*." },
            { t: "frise", titre: "Grandes dates du monde anglophone", evenements: [{ date: 1607, label: "Jamestown", detail: "Première colonie anglaise durable en Amérique du Nord (Virginie)." }, { date: 1776, label: "Declaration of Independence", detail: "Le 4 juillet, treize colonies se déclarent indépendantes : naissance des États-Unis." }, { date: 1837, label: "Victoria devient reine", detail: "Début de l'ère victorienne." }, { date: 1865, label: "Fin de la guerre de Sécession", detail: "Le 13e amendement abolit l'esclavage aux États-Unis." }, { date: 1892, label: "Ouverture d'Ellis Island", detail: "Porte d'entrée des immigrants à New York jusqu'en 1954." }, { date: 1947, label: "Indépendance de l'Inde", detail: "L'Inde et le Pakistan deviennent indépendants." }, { date: 1955, label: "Rosa Parks", detail: "Elle refuse de céder sa place dans un bus à Montgomery (Alabama)." }, { date: 1963, label: "« I have a dream »", detail: "Discours de Martin Luther King à Washington." }, { date: 1969, label: "Apollo 11", detail: "Des astronautes américains marchent sur la Lune." }, { date: 1994, label: "Mandela président", detail: "Premières élections ouvertes à tous en Afrique du Sud." }] },
            { t: "verifie", q: "[[What was Ellis Island?]]", choix: ["[[A prison for criminals]]", "[[The entry point for immigrants arriving in New York]]", "[[The home of the US President]]", "[[A British colony in the Caribbean]]"], bonne: 1, explication: "De 1892 à 1954, environ 12 millions d'immigrants sont passés par [[Ellis Island]], devant New York." },
          ],
        },
        {
          titre: "Irlande, Afrique du Sud, Australie, Canada",
          blocs: [
            { t: "tableau", titre: "D'autres histoires anglophones", entetes: ["Pays", "Ce qu'il faut retenir"], lignes: [["[[**Ireland**]]", "*[[The Great Famine]]* (1845-1849) : un million de morts et une émigration massive vers l'Amérique. Depuis 1921, l'île est partagée entre la **République d'Irlande** (indépendante) et l'**Irlande du Nord**, qui fait partie du Royaume-Uni."], ["[[**South Africa**]]", "*Apartheid* (1948-1991) : ségrégation raciale imposée par la loi. **Nelson Mandela** passe 27 ans en prison, puis devient le premier président noir du pays en **1994**."], ["[[**Australia**]]", "Les **[[Aboriginal peoples]]** y vivent depuis plus de 50 000 ans. Colonisation britannique à partir de **1788**. Capitale : **Canberra** (et non Sydney)."], ["[[**Canada**]]", "Deux langues officielles, l'**anglais** et le **français**. Capitale : **Ottawa**."]] },
            { t: "attention", md: "Ne confonds pas : *[[Great Britain]]* = l'île (Angleterre, Écosse, pays de Galles) ; *[[the United Kingdom]]* = la Grande-Bretagne **+ l'Irlande du Nord**. La République d'Irlande, elle, est un pays indépendant." },
          ],
        },
        {
          titre: "Les institutions : Royaume-Uni et États-Unis",
          blocs: [
            { t: "tableau", titre: "Deux démocraties, deux systèmes", entetes: ["", "[[United Kingdom]]", "[[United States]]"], lignes: [["Régime", "monarchie parlementaire", "république fédérale (50 États)"], ["Chef de l'État", "le roi ou la reine (rôle symbolique)", "le **[[President]]**, élu pour 4 ans"], ["Parlement", "[[**Parliament** = House of Commons + House of Lords]]", "[[**Congress** = Senate + House of Representatives]]"], ["Chef du gouvernement", "le **[[Prime Minister]]**", "le [[President]] lui-même"], ["Siège", "[[Westminster, London]]", "[[Capitol]] et [[White House, Washington, D.C.]]"]] },
            { t: "propriete", titre: "Comment devient-on [[Prime Minister]] ?", md: "On n'est **pas élu directement** par les citoyens. Les Britanniques élisent les députés (*[[MPs]]*) de la **[[House of Commons]]**. Le chef du parti qui obtient la majorité devient **[[Prime Minister]]**, nommé officiellement par le monarque." },
            { t: "verifie", q: "[[The US Congress is made up of…]]", choix: ["[[the House of Commons and the House of Lords]]", "[[the Senate and the House of Representatives]]", "[[the President and the Prime Minister]]", "[[the fifty governors]]"], bonne: 1, explication: "Le Congrès américain a deux chambres : le Sénat et la Chambre des représentants. [[Commons]] et [[Lords]] forment le Parlement britannique." },
          ],
        },
      ],
      bilan: "De Shakespeare à Mandela, de Jamestown à Ellis Island : l'histoire du monde anglophone est faite d'empires, de migrations et de combats pour l'égalité.",
    },
    "3e-anglais-11-science-fiction": {
      accroche: "En 1818, une jeune Anglaise de vingt ans imagine un savant qui fabrique un être vivant : c'est Frankenstein, souvent considéré comme le premier roman de science-fiction. Deux siècles plus tard, on parle d'intelligence artificielle tous les jours. La fiction a souvent un temps d'avance sur la science.",
      objectifs: [
        "Parler d'inventions et de la conquête spatiale",
        "Employer le vocabulaire du numérique et de l'intelligence artificielle",
        "Découvrir les dystopies et la culture populaire",
        "Comparer des technologies et exprimer la possibilité",
      ],
      sections: [
        {
          titre: "Des inventions qui ont changé le monde",
          blocs: [
            { t: "frise", titre: "Science, technologie et fiction", evenements: [{ date: 1818, label: "Frankenstein", detail: "Roman de Mary Shelley." }, { date: 1876, label: "The telephone", detail: "Alexander Graham Bell." }, { date: 1879, label: "The light bulb", detail: "Thomas Edison met au point une ampoule durable." }, { date: 1903, label: "The first flight", detail: "Les frères Wright font voler un avion à moteur." }, { date: 1928, label: "Penicillin", detail: "Alexander Fleming découvre le premier antibiotique." }, { date: 1957, label: "Sputnik", detail: "Premier satellite artificiel (URSS)." }, { date: 1961, label: "Yuri Gagarin", detail: "Premier humain dans l'espace." }, { date: 1969, label: "Apollo 11", detail: "Premiers pas sur la Lune." }, { date: 1989, label: "The World Wide Web", detail: "Inventé par Tim Berners-Lee." }] },
            { t: "texte", md: "Pour en parler, le **passif** est ton meilleur allié : *[[The telephone **was invented** by Bell in 1876. Penicillin **was discovered** by Fleming.]]* On met en avant l'invention." },
          ],
        },
        {
          titre: "La conquête spatiale",
          blocs: [
            { t: "texte", md: "Pendant la guerre froide, les États-Unis et l'URSS se lancent dans une course à l'espace. Les Soviétiques prennent l'avance avec Sputnik (1957) et Gagarin (1961). Les Américains répondent avec la mission **Apollo 11**, organisée par la **NASA** (l'agence spatiale américaine) : le **20 juillet 1969**, Neil Armstrong et Buzz Aldrin se posent sur la Lune." },
            { t: "citation", texte: "[[That's one small step for man, one giant leap for mankind.]]", auteur: "Neil Armstrong", source: "sur la Lune, juillet 1969" },
            { t: "verifie", q: "[[Who was the first man to walk on the Moon in 1969?]]", choix: ["[[Yuri Gagarin]]", "[[Buzz Aldrin]]", "[[Neil Armstrong]]", "[[Tim Berners-Lee]]"], bonne: 2, explication: "Neil Armstrong pose le premier le pied sur la Lune ; Buzz Aldrin le suit quelques minutes plus tard. Gagarin, lui, est le premier humain dans l'espace (1961)." },
          ],
        },
        {
          titre: "Le numérique et l'intelligence artificielle",
          blocs: [
            { t: "tableau", titre: "[[Digital vocabulary]]", entetes: ["Anglais", "Français"], lignes: [["[[a screen / a keyboard]]", "un écran / un clavier"], ["[[a device]]", "un appareil"], ["[[a password]]", "un mot de passe"], ["[[to download / to upload]]", "télécharger / mettre en ligne"], ["[[to log in / to log out]]", "se connecter / se déconnecter"], ["[[an app]]", "une application"], ["[[a TV series]]", "une série télévisée"]] },
            { t: "definition", terme: "[[Artificial intelligence (AI)]]", md: "Des programmes informatiques capables d'**apprendre à partir de données** et de prendre des décisions : reconnaître une image, traduire un texte, répondre à une question. *[[AI can learn from data and make decisions.]]*" },
          ],
        },
        {
          titre: "Dystopies et culture populaire",
          blocs: [
            { t: "definition", terme: "[[A dystopia]]", md: "Une **société imaginaire où la vie est terrible** : surveillance, peur, absence de liberté. C'est le contraire d'une *[[utopia]]*, une société idéale. Les dystopies exagèrent des dangers bien réels pour nous faire réfléchir." },
            { t: "tableau", titre: "Trois œuvres à connaître", entetes: ["Œuvre", "Auteur", "L'histoire"], lignes: [["*[[Frankenstein]]* (1818)", "Mary Shelley", "Un savant crée une créature qu'il rejette, et le paie très cher."], ["*1984* (1949)", "George Orwell", "**[[Big Brother]]**, un dictateur, surveille tout le monde grâce à des *[[telescreens]]* : *[[Big Brother is watching you.]]*"], ["*[[The Hunger Games]]* (2008)", "Suzanne Collins", "**Katniss Everdeen** se porte volontaire à la place de sa petite sœur pour un jeu télévisé mortel."]] },
            { t: "liste", titre: "[[Superheroes and films]]", items: ["[[*Superman comes from Krypton. Spider-Man was bitten by a spider. Batman protects Gotham City.*]]", "*[[a superpower, a villain, a secret identity, a cape]]* : un superpouvoir, un méchant, une identité secrète, une cape", "*[[a plot, a character, an episode, a season, a sequel, a trailer, special effects]]* : une intrigue, un personnage, un épisode, une saison, une suite, une bande-annonce, des effets spéciaux"] },
            { t: "verifie", q: "[[In « 1984 », Big Brother represents…]]", choix: ["[[a kind older brother]]", "[[a dictator who watches everybody]]", "[[a superhero]]", "[[a robot that helps people]]"], bonne: 1, explication: "[[Big Brother]] est le chef invisible d'un régime totalitaire qui surveille chaque citoyen : [[Big Brother is watching you.]]" },
          ],
        },
        {
          titre: "Comparer et imaginer",
          blocs: [
            { t: "propriete", titre: "Comparer des technologies", md: "• Adjectif court : **[[-er than]]** : *[[smaller than, faster than]]*.\n• Adjectif long : **[[more… than]]** : *[[more powerful than]]*.\n• Le plus : **[[the -est / the most]]** : *[[the fastest, the most advanced]]*.\n• Pour renforcer : **[[far / much]]** : *[[Smartphones are **far more powerful than** computers were twenty years ago.]]*" },
            { t: "attention", md: "==Jamais « [[more bigger]] » ni « [[more fast]] ».== On choisit : [[-er]] pour un adjectif court, [[more]] pour un adjectif long. Irréguliers : *[[good → better → the best, bad → worse → the worst]]*." },
            { t: "exemple", titre: "Exprimer une possibilité", md: "*[[In 1984, Big Brother watches everybody through telescreens. Today, some people fear that artificial intelligence **might** watch us too. Robots **could** do many of our jobs in the future.]]*\n\n*[[Might]]* et *[[could]]* présentent l'avenir comme possible, pas certain." },
            { t: "verifie", q: "Quelle phrase est correcte ?", choix: ["[[Robots are more stronger than humans.]]", "[[Robots are far stronger than humans.]]", "[[Robots are the most strong than humans.]]", "[[Robots are stronger that humans.]]"], bonne: 1, explication: "[[Strong]] est court : [[stronger than]]. [[Far]] renforce le comparatif. [[More stronger]] cumule deux marques, et [[that]] n'introduit pas le comparatif." },
          ],
        },
      ],
      bilan: "De Frankenstein à l'intelligence artificielle, de Sputnik à Apollo 11 : la science avance, et la fiction nous aide à réfléchir à ce qu'elle pourrait devenir.",
    },
    "3e-anglais-12-expression-strategies": {
      accroche: "Au brevet comme dans la vie, on ne te demande pas seulement de connaître des mots : il faut les organiser, convaincre, décrire, prononcer clairement. Bonne nouvelle : ce sont des techniques, et elles s'apprennent.",
      objectifs: [
        "Structurer un paragraphe argumenté avec des connecteurs",
        "Donner son opinion, exprimer l'accord, la cause et la conséquence",
        "Décrire une image et participer à un débat",
        "Prononcer les sons difficiles et comprendre un document sans tout connaître",
      ],
      sections: [
        {
          titre: "Structurer un paragraphe argumenté",
          blocs: [
            { t: "etapes", titre: "Un paragraphe en cinq temps", items: [{ titre: "Annoncer son opinion", md: "[[*In my opinion, social media is useful.*]]" }, { titre: "Premier argument", md: "*[[First of all, it helps us keep in touch.]]* Ajoute un exemple : *[[For example, I talk to my cousin in Canada.]]*" }, { titre: "Deuxième argument", md: "[[*Moreover, it is a great source of information.*]]" }, { titre: "Nuancer", md: "[[*However, it can be addictive.*]]" }, { titre: "Conclure", md: "[[*To conclude, we should use it carefully.*]]" }] },
            { t: "tableau", titre: "Les connecteurs logiques", entetes: ["Rôle", "Connecteurs", "Traduction"], lignes: [["Commencer", "[[*First (of all)*]]", "tout d'abord"], ["Ajouter", "[[*Moreover, Furthermore, Besides*]]", "de plus, en outre"], ["Illustrer", "[[*For example, For instance*]]", "par exemple"], ["Opposer", "[[*However, Nevertheless*]]", "cependant, néanmoins"], ["Conclure", "[[*Finally, To conclude*]]", "enfin, pour conclure"]] },
            { t: "verifie", q: "Quel connecteur introduit un contraste et signifie « cependant » ?", choix: ["[[Moreover]]", "[[However]]", "[[First of all]]", "[[For example]]"], bonne: 1, explication: "[[However]] introduit une idée opposée : cependant. [[Moreover]] ajoute un argument dans le même sens." },
          ],
        },
        {
          titre: "Opinion, accord, cause et conséquence",
          blocs: [
            { t: "propriete", titre: "Les expressions clés", md: "• **Opinion** : *[[In my opinion…, I think / I believe (that)…, As far as I'm concerned…]]*\n• **Accord / désaccord** : *[[I agree with you. I disagree. I don't agree.]]*\n• **Cause** : *[[because]]* + phrase ; *[[because of, due to]]* + nom.\n• **Conséquence** : *[[so, that's why, as a result, therefore]]*. *[[It was raining, **so** we stayed at home.]]*" },
            { t: "attention", md: "==« [[I am agree]] » est faux.== *[[Agree]]* est un verbe : *[[I **agree**. I **don't** agree. Do you agree?]]* De même, on dit *[[In my opinion]]* (et non *[[In my point of view]]*) ou *[[From my point of view]]*." },
            { t: "verifie", q: "Quelle phrase exprime correctement la cause ?", choix: ["[[We stayed at home because of it was raining.]]", "[[We stayed at home because it was raining.]]", "[[We stayed at home so the rain.]]", "[[We stayed at home because the rain.]]"], bonne: 1, explication: "[[Because]] est suivi d'un sujet et d'un verbe ([[it was raining]]). Avec un simple nom, il faut [[because of]] : [[because of the rain.]]" },
          ],
        },
        {
          titre: "Décrire une image et débattre",
          blocs: [
            { t: "schema", titre: "Se repérer dans une image", legende: "Commence par le plan général ([[the picture shows…]]), puis va du premier plan à l'arrière-plan, de gauche à droite.", svg: `<svg viewBox="0 0 400 260"><rect class="aplat-papier" x="40" y="20" width="320" height="200" rx="6"/><rect class="trait" x="40" y="20" width="320" height="200" rx="6" fill="none"/><line class="pointille" x1="40" y1="87" x2="360" y2="87"/><line class="pointille" x1="40" y1="153" x2="360" y2="153"/><line class="pointille" x1="147" y1="87" x2="147" y2="153"/><line class="pointille" x1="253" y1="87" x2="253" y2="153"/><circle class="aplat-fort" cx="330" cy="48" r="12"/><text class="texte" x="200" y="58" text-anchor="middle">in the background</text><text class="texte" x="93" y="124" text-anchor="middle">on the left</text><text class="texte" x="200" y="124" text-anchor="middle">in the middle</text><text class="texte" x="306" y="124" text-anchor="middle">on the right</text><circle class="trait" cx="80" cy="170" r="7" fill="none"/><line class="trait" x1="80" y1="177" x2="80" y2="204"/><text class="texte" x="200" y="190" text-anchor="middle">in the foreground</text><text class="texte-petit" x="200" y="244" text-anchor="middle">In the foreground, I can see… In the background, there are…</text></svg>` },
            { t: "liste", titre: "Les phrases pour décrire et interpréter", items: ["[[*The picture shows… I can see… There is / There are…*]]", "[[*It looks like… It seems that…*]]", "[[*It makes me think of… I think the photographer wants to show…*]]"] },
            { t: "liste", titre: "Les phrases pour débattre poliment", items: ["*[[I see your point, but…]]* (je comprends ton point de vue, mais…)", "*[[That's true, however…]]* (c'est vrai, cependant…)", "*[[I'm afraid I disagree.]]* (je regrette, je ne suis pas d'accord)", "*[[Let me finish, please.]]* (laisse-moi finir)", "*[[What do you mean?]]* (qu'est-ce que tu veux dire ?)"] },
          ],
        },
        {
          titre: "Bien prononcer",
          blocs: [
            { t: "tableau", titre: "Trois sons qui piègent les francophones", entetes: ["Son", "Comment le faire", "Exemples"], lignes: [["/θ/ (sourd)", "langue entre les dents, souffle sans voix", "[[*think, three, bath, month*]]"], ["/ð/ (sonore)", "même position, mais la gorge vibre", "[[*this, that, mother, the*]]"], ["/h/ (aspiré)", "un souffle léger, comme sur une vitre", "[[*hotel, house, happy, hello*]]"]] },
            { t: "propriete", titre: "Accent de mot et intonation", md: "• Chaque mot a **une syllabe accentuée**, plus forte : *[[PHO-to-graph]]*, mais *[[pho-TO-gra-pher]]* et *[[pho-to-GRA-phic]]*.\n• **Question fermée** (réponse [[yes / no]]) : l'intonation **monte** : *[[Are you ready?]] ↗*\n• **Question ouverte** ([[Where, What, Why…]]) : l'intonation **descend** : *[[Where do you live?]] ↘*" },
            { t: "verifie", q: "Où se trouve la syllabe accentuée dans « photographer » ?", choix: ["[[PHO-to-gra-pher]]", "[[pho-TO-gra-pher]]", "[[pho-to-GRA-pher]]", "[[pho-to-gra-PHER]]"], bonne: 1, explication: "[[Photographer]] est accentué sur la deuxième syllabe : [[pho-TO-gra-pher]]. Attention, [[photograph]] est accentué sur la première : [[PHO-to-graph]]." },
          ],
        },
        {
          titre: "Comprendre sans tout connaître",
          blocs: [
            { t: "texte", md: "Personne, même un bon lecteur, ne connaît tous les mots d'un texte. Le secret : **ne pas bloquer** sur un mot inconnu et s'appuyer sur ce que tu comprends déjà." },
            { t: "liste", titre: "Les bons réflexes", ordonnee: true, items: ["Observe le titre, les images, la source : de quoi parle-t-on ?", "Repère les **mots transparents** (*[[information, environment, important]]*).", "Repère les **mots-clés** répétés et les noms propres, les dates, les chiffres.", "Devine un mot inconnu grâce au **contexte** et à sa famille (*[[careless]]* : [[care + less]]).", "Réponds d'abord aux questions générales (qui ? où ? quand ?), puis aux détails."] },
            { t: "exemple", titre: "Deviner par le contexte", md: "*[[The village was **flooded** after three days of heavy rain: the streets were under water.]]*\n\nTu ne connais pas *[[flooded]]* ? Pluie, rues sous l'eau… le village a été **inondé**." },
            { t: "astuce", md: "À l'oral, si tu n'as pas compris, demande : *[[Sorry, could you repeat, please?]]* ou *[[What does … mean?]]* Poser la question, c'est déjà communiquer en anglais." },
          ],
        },
      ],
      bilan: "Une opinion, des arguments reliés par des connecteurs, une image décrite plan par plan, des sons bien placés : tu as toutes les clés pour t'exprimer en anglais avec assurance.",
    },
  },
};
