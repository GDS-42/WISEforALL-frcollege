// Cours ÉCLORE — 4e Anglais. Schéma : docs/COURS.md
export default {
  id: "4e-anglais",
  chapitres: {
    "4e-anglais-01-present-perfect": {
      accroche: "Ta correspondante anglaise t'écrit : *Have you ever been to London?* Elle ne te demande pas quand tu y es allé. Elle veut savoir si, dans ta vie jusqu'à aujourd'hui, tu as vécu cette expérience. Pour ça, l'anglais a un temps qui jette un pont entre le passé et le présent : le present perfect.",
      objectifs: [
        "Former le present perfect avec have ou has et le participe passé",
        "Placer correctement ever, never, just, already et yet",
        "Choisir entre for et since pour parler d'une durée",
        "Savoir quand employer le present perfect et quand employer le past simple",
      ],
      sections: [
        {
          titre: "Construire le present perfect",
          blocs: [
            { t: "texte", md: "Le present perfect ressemble au passé composé français : un auxiliaire + un participe passé. Mais attention, l'auxiliaire est **toujours have**, jamais be. *I have visited Rome* (J'ai visité Rome), *She has gone home* (Elle est rentrée chez elle)." },
            { t: "propriete", titre: "La formule", md: "**have / has + participe passé**\n\n• Affirmation : *I have seen* → *I've seen* ; *she has eaten* → *she's eaten*.\n• Négation : *I haven't finished*, *he hasn't called*.\n• Question : on inverse : *Have you finished?* — *Yes, I have. / No, I haven't.*\n\n==Has== s'emploie avec he, she, it ; ==have== avec toutes les autres personnes." },
            { t: "texte", md: "Pour un verbe régulier, le participe passé se termine en **-ed**, comme le prétérit : *visit → visited*, *play → played*. Pour les verbes irréguliers, il faut apprendre la **troisième colonne** de la liste. C'est elle qui sert ici." },
            { t: "tableau", titre: "Des participes passés irréguliers à connaître par cœur", entetes: ["Base verbale", "Prétérit", "Participe passé", "Traduction"], lignes: [["be", "was / were", "**been**", "être"], ["go", "went", "**gone**", "aller"], ["see", "saw", "**seen**", "voir"], ["eat", "ate", "**eaten**", "manger"], ["write", "wrote", "**written**", "écrire"], ["buy", "bought", "**bought**", "acheter"], ["do", "did", "**done**", "faire"], ["take", "took", "**taken**", "prendre"], ["lose", "lost", "**lost**", "perdre"], ["know", "knew", "**known**", "connaître, savoir"]] },
            { t: "verifie", q: "Complète : « She ___ her homework. »", choix: ["has finished", "have finished", "has finish", "finished has"], bonne: 0, explication: "Avec she, l'auxiliaire est has, suivi du participe passé finished. « Have » est réservé à I, you, we, they, et « has finish » oublie le -ed du participe." },
          ],
        },
        {
          titre: "Un pont entre le passé et le présent",
          blocs: [
            { t: "texte", md: "Le present perfect parle du passé, mais il regarde **le présent**. Ce qui compte, ce n'est pas le moment de l'action, c'est ce qu'elle laisse aujourd'hui : une expérience, un résultat, une nouvelle toute fraîche." },
            { t: "schema", titre: "I have lost my keys.", legende: "L'action a eu lieu dans le passé, à un moment qu'on ne précise pas. Son résultat est visible maintenant : je ne peux pas entrer.", svg: `<svg viewBox="0 0 400 220"><text class="texte-main" x="200" y="26" text-anchor="middle">I have lost my keys.</text><path class="trait" d="M110 128 Q200 40 284 128" fill="none" marker-end="url(#fl-p)"/><text class="texte-pigment" x="200" y="72" text-anchor="middle">résultat aujourd'hui</text><line class="trait" x1="20" y1="140" x2="380" y2="140" marker-end="url(#fl)"/><text class="texte-petit" x="24" y="130">past</text><circle cx="110" cy="140" r="6" fill="var(--pigment)"/><line class="trait" x1="290" y1="126" x2="290" y2="154"/><text class="texte" x="110" y="172" text-anchor="middle">I lost them…</text><text class="texte-petit" x="110" y="190" text-anchor="middle">(quand ? peu importe)</text><text class="texte" x="290" y="172" text-anchor="middle">NOW</text><text class="texte-petit" x="290" y="190" text-anchor="middle">I can't open the door!</text></svg>` },
            { t: "liste", titre: "Trois emplois du present perfect", items: ["**Le bilan d'expérience** : *I have visited Rome three times.* (dans ma vie, jusqu'à maintenant)", "**Le résultat visible** : *I have lost my keys.* (je ne les ai plus)", "**L'action toute récente** : *She has just left.* (elle vient de partir, tu l'as manquée)"] },
            { t: "savais-tu", md: "*She has gone to London* et *She has been to London* ne disent pas la même chose ! **Gone** : elle est partie et elle y est encore. **Been** : elle y est allée et elle est revenue. C'est pour ça qu'on demande *Have you ever **been** to London?*" },
          ],
        },
        {
          titre: "Ever, never, just, already, yet",
          blocs: [
            { t: "texte", md: "Ces petits mots accompagnent très souvent le present perfect. Ils se placent presque tous **entre l'auxiliaire et le participe** : *I have **never** eaten sushi.* Un seul fait exception : **yet**, qui se met à la fin." },
            { t: "tableau", titre: "Les mots du bilan", entetes: ["Mot", "Sens", "Place", "Exemple"], lignes: [["**ever**", "déjà (un jour, dans ta vie)", "question, avant le participe", "*Have you ever been to Scotland?*"], ["**never**", "jamais", "avant le participe", "*I have never eaten sushi.*"], ["**just**", "venir de", "avant le participe", "*She has just left.*"], ["**already**", "déjà", "phrase affirmative, avant le participe", "*Lucy has already done hers.*"], ["**yet**", "encore, pas encore, déjà ?", "fin de phrase négative ou interrogative", "*Tom hasn't finished his project yet.*"]] },
            { t: "astuce", md: "Retiens l'image : *ever, never, just, already* se **glissent au milieu**, *yet* **ferme la porte** à la fin de la phrase. *Have you finished **yet**?* (Tu as déjà fini ?) — *No, not **yet**.* (Non, pas encore.)" },
            { t: "verifie", q: "Complète : « She has ___ left. You can't speak to her. »", choix: ["just", "yet", "ever", "since"], bonne: 0, explication: "Elle vient de partir : c'est just, placé entre has et left. Yet se met en fin de phrase négative ou interrogative, ever s'emploie surtout dans les questions." },
          ],
        },
        {
          titre: "For ou since : la durée et le point de départ",
          blocs: [
            { t: "propriete", titre: "Depuis… en anglais", md: "Le français dit « depuis » dans les deux cas. L'anglais choisit :\n\n• **for** + une **durée** : *for two years, for ten minutes, for a long time*.\n• **since** + un **point de départ** : *since 2019, since Monday, since I was six*." },
            { t: "schema", titre: "I have been at school since 8 o'clock.", legende: "Since pointe le moment où tout commence ; for mesure la longueur du trajet jusqu'à maintenant.", svg: `<svg viewBox="0 0 400 210"><text class="texte-main" x="200" y="26" text-anchor="middle">I have been at school…</text><path class="trait-fin" d="M90 98 L90 84 L310 84 L310 98" fill="none"/><text class="texte" x="200" y="74" text-anchor="middle">for two hours = la durée</text><line class="trait" x1="20" y1="120" x2="380" y2="120" marker-end="url(#fl)"/><circle cx="90" cy="120" r="6" fill="var(--pigment)"/><line class="trait" x1="310" y1="106" x2="310" y2="134"/><text class="texte-pigment" x="90" y="152" text-anchor="middle">since 8 o'clock</text><text class="texte-petit" x="90" y="172" text-anchor="middle">= le point de départ</text><text class="texte" x="310" y="152" text-anchor="middle">NOW</text><text class="texte-petit" x="310" y="172" text-anchor="middle">(10 o'clock)</text></svg>` },
            { t: "attention", md: "Deux pièges de francophone :\n\n• « J'habite ici depuis 2019 » ne se traduit **pas** par *I live here since 2019*. L'action continue jusqu'à maintenant, donc present perfect : *I **have lived** here since 2019.*\n• « Depuis deux ans » : deux ans est une durée, donc *for two years*. ==Jamais « since two years ».==" },
            { t: "verifie", q: "Complète : « I have lived here ___ 2019. »", choix: ["since", "for", "during", "ago"], bonne: 0, explication: "2019 est un point de départ : since. On dirait for avec une durée (for seven years). Ago s'emploie avec le past simple : I moved here seven years ago." },
          ],
        },
        {
          titre: "Present perfect ou past simple ?",
          blocs: [
            { t: "propriete", titre: "La règle du moment précis", md: "Dès que tu dis **quand** l'action a eu lieu, avec un moment **terminé**, tu passes au **past simple** : *yesterday, last week, in 2015, two days ago, when I was six*.\n\nSans moment précis, avec un lien au présent : **present perfect**." },
            { t: "attention", md: "« Je l'ai vu hier » se dit *I **saw** him yesterday*. ==Jamais « I have seen him yesterday »== : yesterday est un moment fini, il coupe le pont avec le présent. De même, *Shakespeare **wrote** many plays* : sa vie est terminée, on emploie le past simple." },
            { t: "exemple", titre: "Une conversation qui passe d'un temps à l'autre", etapes: ["*Have you ever been to London?* → question sur l'expérience, sans date : present perfect.", "*Yes, I have! I went there in 2023.* → la date arrive (in 2023) : on bascule au past simple.", "*I have wanted to go back ever since.* → une envie qui dure jusqu'à maintenant : present perfect.", "*I haven't visited Scotland yet.* → bilan à ce jour, avec yet : present perfect."] },
          ],
        },
      ],
      bilan: "Have ou has + participe passé : un pont vers le présent. Une date terminée coupe le pont et appelle le past simple ; for mesure une durée, since marque un départ.",
    },
    "4e-anglais-02-past-continuous": {
      accroche: "*It was a dark night. I was walking home when, suddenly, I heard a noise…* Toutes les bonnes histoires fonctionnent ainsi : on installe un décor, puis soudain, quelque chose arrive. En anglais, le décor et l'événement n'ont pas le même temps. Les distinguer, c'est déjà savoir raconter.",
      objectifs: [
        "Former le past continuous avec was ou were et un verbe en -ing",
        "Combiner past continuous et past simple avec when et while",
        "Parler d'une habitude passée avec used to",
        "Organiser un récit au passé avec des connecteurs",
      ],
      sections: [
        {
          titre: "Former le past continuous",
          blocs: [
            { t: "definition", terme: "Past continuous", md: "Temps qui décrit une action **en cours** à un moment du passé, comme l'imparfait « j'étais en train de… ». Il se forme avec **was / were + verbe en -ing** : *At 8 o'clock yesterday, I **was watching** TV.*" },
            { t: "tableau", titre: "Be au prétérit + -ing", entetes: ["Sujet", "Affirmation", "Négation", "Question"], lignes: [["I", "I **was** reading", "I wasn't reading", "**Was** I reading?"], ["you", "you **were** reading", "you weren't reading", "**Were** you reading?"], ["he / she / it", "she **was** reading", "she wasn't reading", "**Was** she reading?"], ["we / you / they", "they **were** reading", "they weren't reading", "**Were** they reading?"]] },
            { t: "attention", md: "Avec **you**, c'est toujours **were**, même quand tu parles à une seule personne : *You were sleeping.* ==« You was » est faux.== Et n'oublie pas l'auxiliaire : *She sleeping* ne veut rien dire, il faut *She was sleeping*." },
            { t: "tableau", titre: "L'orthographe du -ing", entetes: ["Règle", "Exemples"], lignes: [["En général, on ajoute -ing", "read → reading, play → playing"], ["Le e final disparaît", "write → writing, make → making"], ["Voyelle courte + consonne : on double la consonne", "run → running, swim → swimming, stop → stopping"], ["-ie devient -y", "lie → lying, die → dying"], ["En anglais britannique, -l final doublé", "travel → travelling"]] },
          ],
        },
        {
          titre: "Le décor et l'événement : when et while",
          blocs: [
            { t: "texte", md: "Imagine un film. Le **past continuous** filme la scène longue, celle qui était en train de se dérouler. Le **past simple** est le coup de théâtre, l'action courte qui vient l'interrompre." },
            { t: "schema", titre: "While I was cooking, the phone rang.", legende: "La bande longue est l'action en cours (past continuous). La flèche est l'action courte qui l'interrompt (past simple).", svg: `<svg viewBox="0 0 400 230"><text class="texte-main" x="200" y="24" text-anchor="middle">While I was cooking, the phone rang.</text><text class="texte-pigment" x="270" y="54" text-anchor="middle">the phone rang!</text><line class="trait" x1="270" y1="62" x2="270" y2="98" marker-end="url(#fl-p)"/><rect class="aplat" x="60" y="102" width="270" height="34" rx="6"/><rect class="trait-fin" x="60" y="102" width="270" height="34" rx="6" fill="none"/><text class="texte" x="150" y="124" text-anchor="middle">I was cooking…</text><circle cx="270" cy="119" r="6" fill="var(--pigment)"/><line class="trait" x1="20" y1="170" x2="380" y2="170" marker-end="url(#fl)"/><text class="texte-petit" x="24" y="160">past</text><text class="texte-petit" x="376" y="160" text-anchor="end">now</text><text class="texte-petit" x="150" y="194" text-anchor="middle">action longue</text><text class="texte-petit" x="150" y="210" text-anchor="middle">was / were + -ing</text><text class="texte-petit" x="290" y="194" text-anchor="middle">action courte</text><text class="texte-petit" x="290" y="210" text-anchor="middle">past simple</text></svg>` },
            { t: "propriete", titre: "When et while", md: "• **While** (pendant que) introduit en général l'action **longue** : *While I was cooking, the phone rang.*\n• **When** (quand) introduit souvent l'action **courte** : *They were playing football when it started to rain.*\n• Deux actions longues en même temps : deux past continuous : *While Tom was reading, his sister was listening to music.*" },
            { t: "exemple", titre: "Analyser une phrase", md: "*I broke my leg while I was skiing.*\n\nQuelle action est longue ? Skier : *was skiing*. Quelle action est soudaine et courte ? Se casser la jambe : *broke*. La traduction garde la même logique : « Je me suis cassé la jambe pendant que je skiais. »" },
            { t: "verifie", q: "Complète : « I ___ my leg while I ___ skiing. »", choix: ["broke / was", "was breaking / skied", "break / am", "broken / were"], bonne: 0, explication: "Se casser la jambe est l'action courte (past simple : broke) ; skier est l'action longue en cours (past continuous : was skiing)." },
          ],
        },
        {
          titre: "Used to : les habitudes d'avant",
          blocs: [
            { t: "definition", terme: "Used to + base verbale", md: "Exprime une **habitude passée qui n'existe plus** aujourd'hui. *I used to live in Leeds.* (Avant, j'habitais à Leeds, mais ce n'est plus le cas.) Il se traduit souvent par « avant, je… » ou par un imparfait." },
            { t: "exemple", titre: "Avant et maintenant", etapes: ["Affirmation : *When I was a child, I used to live in Manchester.*", "Négation : *I didn't use to like vegetables.* (Avant, je n'aimais pas les légumes.)", "Question : *Did you use to play tennis when you were younger?*", "Aujourd'hui : *Now I live in London and I love vegetables!*"] },
            { t: "attention", md: "Après **did** ou **didn't**, le -d disparaît : *Did you **use** to…?* et non « Did you used to ». Autre piège : ==« I was used to play » est faux== pour dire « Avant, je jouais ». La bonne phrase est *I **used to play** football.*" },
            { t: "verifie", q: "Complète : « Did you ___ play tennis when you were younger? »", choix: ["use to", "used to", "using to", "uses to"], bonne: 0, explication: "Did porte déjà la marque du passé : used redevient use. On dit Did you use to… ?" },
          ],
        },
        {
          titre: "Raconter une histoire au passé",
          blocs: [
            { t: "texte", md: "Une histoire bien racontée guide le lecteur. Les **connecteurs** sont comme des panneaux : ils disent ce qui vient d'abord, ce qui arrive ensuite, ce qui surprend." },
            { t: "etapes", titre: "Les connecteurs du récit", items: [{ titre: "First", md: "D'abord : on pose le décor. *First, it was a dark night.*" }, { titre: "Then / After that", md: "Puis, ensuite : l'histoire avance. *Then I left the cinema.*" }, { titre: "Suddenly", md: "Soudain : le coup de théâtre, au past simple. *Suddenly, I heard a noise.*" }, { titre: "Meanwhile", md: "Pendant ce temps : une autre scène. *Meanwhile, my dad was waiting for me.*" }, { titre: "Finally", md: "Enfin : la fin de l'histoire. *Finally, I laughed and went home.*" }] },
            { t: "exemple", titre: "Un petit récit complet", md: "*It was a dark night. I **was walking** home when, suddenly, I **heard** a noise. While I **was looking** around, a cat **jumped** out of a bin! Finally, I **laughed** and **went** home.*\n\nLe décor (walking, looking) est au past continuous ; les événements (heard, jumped, laughed, went) sont au past simple." },
            { t: "astuce", md: "Pour vérifier ton récit, souligne d'une couleur les verbes du décor et d'une autre ceux des événements. Si un événement soudain est au past continuous, corrige-le !" },
          ],
        },
      ],
      bilan: "Was ou were + -ing pose le décor, le past simple fait surgir l'événement, used to réveille les habitudes d'avant : avec first, then et suddenly, tu tiens ton histoire.",
    },
    "4e-anglais-03-futur-projets": {
      accroche: "« Il va pleuvoir », « je t'appellerai », « je pars vendredi » : en français, trois façons de parler de l'avenir. L'anglais en a aussi plusieurs, et chacune dit quelque chose de précis : une promesse, un indice, un projet déjà réservé. Choisis bien, et ton interlocuteur saura exactement ce que tu as en tête.",
      objectifs: [
        "Employer will pour prédire, promettre ou décider sur le moment",
        "Employer be going to pour une intention ou une prévision fondée sur un indice",
        "Parler d'un projet organisé avec le present continuous",
        "Construire une phrase conditionnelle : if + présent, will + base verbale",
      ],
      sections: [
        {
          titre: "Will : prédire, promettre, décider",
          blocs: [
            { t: "propriete", titre: "Will + base verbale", md: "Will est le même à toutes les personnes et se contracte en **'ll** : *I'll, she'll, they'll*. La négation **will not** se contracte en ==won't== : *It won't rain.*\n\nTrois emplois :\n• **prédiction**, opinion sur l'avenir : *I think it will rain tomorrow.*\n• **promesse** : *I promise I will call you tonight.*\n• **décision prise sur le moment** : *The phone's ringing. — OK, I'll get it.*" },
            { t: "attention", md: "Will est un modal : il est suivi de la **base verbale**, sans to et sans -s. On dit *She will come*, jamais « She will comes » ni « She will to come »." },
            { t: "verifie", q: "Complète : « The phone's ringing. — OK, I ___ it. »", choix: ["'ll get", "'m going to get", "get", "got"], bonne: 0, explication: "Tu décides à l'instant même, sans l'avoir prévu : c'est will (I'll get it). Be going to supposerait une intention déjà prise avant." },
          ],
        },
        {
          titre: "Be going to : intention et indice",
          blocs: [
            { t: "propriete", titre: "Be going to + base verbale", md: "On conjugue **be** (am, is, are), puis *going to* et la base verbale.\n\n• **Intention** déjà décidée : *I'm going to learn Spanish next year.*\n• **Prévision fondée sur un indice** que l'on voit : *Look at those black clouds! It's going to rain.*" },
            { t: "exemple", titre: "Will ou be going to ?", etapes: ["*I think it will rain tomorrow.* → c'est une opinion, sans indice visible : will.", "*Look at the sky! It's going to rain.* → les nuages noirs sont là, sous tes yeux : going to.", "*I'm going to visit Edinburgh this summer.* → tu y as déjà pensé, c'est ton intention : going to."] },
            { t: "astuce", md: "Repère les mots déclencheurs. *I think, I hope, probably, I promise* annoncent souvent **will**. *Look!* ou une décision déjà prise annoncent plutôt **going to**." },
          ],
        },
        {
          titre: "Le projet organisé : present continuous",
          blocs: [
            { t: "texte", md: "Quand le projet est **déjà organisé**, avec un billet, un rendez-vous, une heure, l'anglais emploie le **present continuous** : *We're flying to Rome on Friday.* (Nous prenons l'avion pour Rome vendredi.) Le repère de temps indique qu'il s'agit du futur." },
            { t: "tableau", titre: "Trois façons de parler de l'avenir", entetes: ["Forme", "Sens", "Exemple"], lignes: [["**will** + base verbale", "prédiction, promesse, décision soudaine", "*I'll help you.*"], ["**be going to** + base verbale", "intention, prévision avec indice", "*It's going to rain.*"], ["**present continuous**", "projet organisé, souvent daté", "*We're visiting my grandmother on Sunday.*"]] },
            { t: "liste", titre: "Les repères de l'avenir", items: ["*tomorrow* (demain), *the day after tomorrow* (après-demain)", "*next week, next year* (la semaine prochaine, l'an prochain)", "*in two days* (dans deux jours), *soon* (bientôt)"] },
            { t: "verifie", q: "Complète : « We ___ my grandmother on Sunday. It's all arranged. »", choix: ["are visiting", "visit", "visited", "will visiting"], bonne: 0, explication: "It's all arranged : le projet est organisé et daté (on Sunday), d'où le present continuous. « Will visiting » mélange deux formes et n'existe pas." },
          ],
        },
        {
          titre: "Si… : le conditionnel de type 1",
          blocs: [
            { t: "propriete", titre: "If + présent, will + base verbale", md: "Pour une condition **réaliste** dans l'avenir : *If it rains, we will stay at home.* (S'il pleut, nous resterons à la maison.)\n\nLa proposition avec **if** est au **présent simple** ; la conséquence est au futur avec **will**. On peut inverser l'ordre : *We'll stay at home if it rains.*" },
            { t: "schema", titre: "Les deux moitiés de la phrase", legende: "Comme en français (« s'il pleut », jamais « s'il pleuvra »), on ne met pas will après if.", svg: `<svg viewBox="0 0 400 200"><rect class="aplat" x="20" y="40" width="160" height="56" rx="8"/><rect class="trait" x="20" y="40" width="160" height="56" rx="8" fill="none"/><text class="texte" x="100" y="64" text-anchor="middle">If + présent</text><text class="texte-main" x="100" y="86" text-anchor="middle">If it rains,</text><rect class="aplat-papier" x="220" y="40" width="160" height="56" rx="8"/><rect class="trait" x="220" y="40" width="160" height="56" rx="8" fill="none"/><text class="texte" x="300" y="64" text-anchor="middle">will + base verbale</text><text class="texte-main" x="300" y="86" text-anchor="middle">we'll stay at home.</text><line class="trait" x1="182" y1="68" x2="216" y2="68" marker-end="url(#fl)"/><text class="texte-petit" x="100" y="120" text-anchor="middle">la condition</text><text class="texte-petit" x="300" y="120" text-anchor="middle">la conséquence</text><text class="texte-pigment" x="200" y="160" text-anchor="middle">If it will rain… ✗</text><line class="trait-fin" x1="140" y1="156" x2="260" y2="156"/></svg>` },
            { t: "attention", md: "==Jamais will après if.== *If it will rain* est faux. La même règle vaut après **when**, **as soon as** et **until** quand ils parlent du futur : *I'll call you when I **arrive**.* (Je t'appellerai quand j'arriverai.) Le français met un futur, l'anglais un présent." },
            { t: "exemple", titre: "Projets du week-end", md: "*What are you doing this weekend?* — *I'm visiting my cousins on Saturday. If the weather is nice, we'll go to the beach. I think it will be great!*\n\nOn retrouve un projet organisé (I'm visiting), une condition (If the weather is nice, we'll go) et une prédiction (it will be great)." },
            { t: "verifie", q: "Complète : « If you ___ hard, you will pass your exam. »", choix: ["work", "will work", "worked", "working"], bonne: 0, explication: "Après if, on met le présent simple : If you work hard. Will est réservé à la conséquence : you will pass." },
          ],
        },
      ],
      bilan: "Will promet et prédit, going to annonce une intention ou un indice, le present continuous confirme un projet réservé ; et après if ou when, le présent suffit.",
    },
    "4e-anglais-04-modaux-conseils": {
      accroche: "Au collège, il y a ce que tu **dois** faire, ce que tu **n'as pas le droit** de faire, ce que tu **devrais** faire et ce que tu **peux** faire. En français, on jongle avec « devoir » et « pouvoir ». En anglais, une petite famille de mots très précis, les modaux, fait tout ce travail.",
      objectifs: [
        "Exprimer la capacité et la permission avec can, could et may",
        "Distinguer must, have to, mustn't et don't have to",
        "Donner un conseil avec should, ought to et had better",
        "Exprimer la probabilité avec may, might, must et can't",
      ],
      sections: [
        {
          titre: "Les modaux : une grammaire très simple",
          blocs: [
            { t: "definition", terme: "Modal", md: "Un auxiliaire qui ajoute un **point de vue** au verbe : capacité, permission, obligation, conseil, probabilité. Les principaux : *can, could, may, might, must, should, will*." },
            { t: "propriete", titre: "Trois règles qui ne changent jamais", md: "1. Le modal est suivi de la **base verbale**, **sans to** : *he can swim*.\n2. Il ne prend **jamais de -s** : *she must go*.\n3. Négation et question se font **sans do** : *You mustn't run. Can I help you?*\n\nExceptions de forme : *ought **to*** et *have **to***, qui gardent leur to." },
            { t: "attention", md: "Les erreurs les plus fréquentes : « She must **goes** », « He can **to** swim », « Do you can…? ». Corrige-les en *She must go*, *He can swim*, *Can you…?*" },
            { t: "tableau", titre: "Les modaux et leur sens", entetes: ["Modal", "Sens", "Exemple", "Traduction"], lignes: [["**can**", "capacité, permission", "*He can swim.*", "Il sait nager."], ["**could**", "capacité passée, demande polie", "*Could you help me?*", "Pourrais-tu m'aider ?"], ["**may**", "permission formelle, éventualité", "*May I open the window?*", "Puis-je ouvrir la fenêtre ?"], ["**must**", "obligation ressentie, déduction", "*I must study.*", "Je dois étudier."], ["**mustn't**", "interdiction", "*You mustn't run.*", "Tu ne dois pas courir."], ["**should**", "conseil", "*You should rest.*", "Tu devrais te reposer."], ["**might**", "faible probabilité", "*It might snow.*", "Il se pourrait qu'il neige."]] },
          ],
        },
        {
          titre: "Pouvoir : can, could, may",
          blocs: [
            { t: "texte", md: "**Can** dit ce que l'on sait faire ou ce que l'on a le droit de faire : *I can play the guitar. You can go out.* Au passé, la capacité devient **could** : *When I was five, I could already swim.* (À cinq ans, je savais déjà nager.)\n\nPour demander poliment, on monte d'un cran : *Could you close the door, please?* Et pour une demande très polie, à un adulte par exemple, on emploie **may** : *May I open the window, please?*" },
            { t: "astuce", md: "Plus la demande est polie, plus le modal est « lointain » : *Can I…?* (entre amis) → *Could I…?* (poli) → *May I…?* (très poli, formel)." },
          ],
        },
        {
          titre: "Obligation et interdiction",
          blocs: [
            { t: "propriete", titre: "Must ou have to ?", md: "• **Must** : l'obligation vient de **celui qui parle** : *I must call my grandmother.* (je le sens comme un devoir)\n• **Have to** : l'obligation vient de **l'extérieur**, d'une règle ou d'une loi : *You have to wear a uniform at this school. It's the rule.*\n• Au passé, une seule forme : **had to** : *Yesterday I had to wait for the bus.*" },
            { t: "tableau", titre: "Deux négations qui n'ont rien à voir", entetes: ["Forme", "Sens", "Exemple"], lignes: [["**mustn't**", "interdiction : tu ne dois pas", "*You mustn't touch that wire! It's dangerous.*"], ["**don't have to**", "absence d'obligation : tu n'es pas obligé", "*You don't have to come. It's optional.*"]] },
            { t: "attention", md: "*You mustn't* et *You don't have to* **n'ont pas le même sens** ! Le premier interdit, le second laisse le choix. Confondre les deux peut créer de vrais malentendus : « Tu n'as pas le droit de venir » n'est pas « Tu n'es pas obligé de venir »." },
            { t: "exemple", titre: "Le règlement d'une école anglaise", md: "*At school, you **must** wear a uniform and you **mustn't** use your phone in class. You **don't have to** stay at lunchtime. If you feel ill, you **should** see the nurse.*\n\nUniforme : obligatoire. Téléphone : interdit. Cantine : facultative. Infirmerie : conseillée." },
            { t: "verifie", q: "Complète : « You ___ come if you don't want to. It's optional. »", choix: ["don't have to", "mustn't", "must", "have to"], bonne: 0, explication: "It's optional : il n'y a pas d'obligation, mais ce n'est pas interdit. C'est don't have to. Mustn't exprimerait une interdiction." },
          ],
        },
        {
          titre: "Donner un conseil",
          blocs: [
            { t: "texte", md: "Pour conseiller, l'anglais a trois outils, du plus doux au plus pressant :\n\n• **should** (tu devrais) : *You look tired. You should go to bed early.*\n• **ought to** (tu devrais, un peu plus formel) : *You ought to tell the truth.*\n• **had better** (tu ferais mieux de, presque un avertissement) : *You'd better hurry, the bus is coming!*" },
            { t: "attention", md: "*Had better* est suivi de la base verbale **sans to** : *You'd better hurry*, pas « You'd better to hurry ». Ici, *'d* est la contraction de **had**, même si la phrase parle du présent." },
          ],
        },
        {
          titre: "Sûr ou pas sûr ? La probabilité",
          blocs: [
            { t: "texte", md: "Les modaux servent aussi à dire **à quel point tu es sûr** de quelque chose. Tu ne vois pas la situation, mais tu fais une hypothèse ou une déduction." },
            { t: "schema", titre: "Une échelle de certitude", legende: "De l'impossible (can't) au presque certain (must), en passant par le « peut-être » (might, may).", svg: `<svg viewBox="0 0 400 200"><text class="texte-main" x="200" y="30" text-anchor="middle">Where's Sam?</text><line class="trait" x1="40" y1="100" x2="372" y2="100" marker-end="url(#fl)"/><circle cx="50" cy="100" r="6" fill="var(--pigment)"/><circle cx="175" cy="100" r="6" fill="var(--pigment)"/><circle cx="225" cy="100" r="6" fill="var(--pigment)"/><circle cx="350" cy="100" r="6" fill="var(--pigment)"/><text class="texte" x="50" y="84" text-anchor="middle">can't</text><text class="texte" x="175" y="84" text-anchor="middle">might</text><text class="texte" x="225" y="84" text-anchor="middle">may</text><text class="texte" x="350" y="84" text-anchor="middle">must</text><text class="texte-pigment" x="60" y="128" text-anchor="middle">impossible</text><text class="texte-pigment" x="200" y="128" text-anchor="middle">peut-être</text><text class="texte-pigment" x="340" y="128" text-anchor="middle">sûrement</text><text class="texte-petit" x="70" y="160" text-anchor="middle">He can't be ill.</text><text class="texte-petit" x="200" y="160" text-anchor="middle">He might be at home.</text><text class="texte-petit" x="330" y="160" text-anchor="middle">He must be late.</text><text class="texte-petit" x="40" y="188">0 %</text><text class="texte-petit" x="360" y="188" text-anchor="end">100 %</text></svg>` },
            { t: "exemple", titre: "Raisonner avec des indices", etapes: ["*The lights are on, so someone must be at home.* → l'indice est fort : déduction quasi certaine.", "*Where's Tom? — I'm not sure, he might be in the library.* → aucune preuve : simple possibilité.", "*It can't be true!* → tu es sûr que c'est impossible."] },
            { t: "verifie", q: "Complète : « The lights are on, so someone ___ be at home. »", choix: ["must", "mustn't", "can", "should"], bonne: 0, explication: "Les lumières allumées sont un indice solide : on déduit avec must (sûrement). Mustn't serait une interdiction, sans rapport avec la situation." },
          ],
        },
      ],
      bilan: "Un modal, une base verbale, jamais de -s ni de to : can pour pouvoir, must et have to pour devoir, mustn't pour interdire, should pour conseiller, might et must pour deviner.",
    },
    "4e-anglais-05-comparaison-quantite": {
      accroche: "Londres est-elle plus grande que Manchester ? Quel est le plus haut gratte-ciel de la capitale ? As-tu assez de temps, ou trop de devoirs ? Comparer et mesurer, on le fait toute la journée. En anglais, quelques règles simples suffisent, à condition de bien regarder la longueur des adjectifs.",
      objectifs: [
        "Former les comparatifs et superlatifs, y compris irréguliers",
        "Comparer avec as… as, less et the least",
        "Employer too, enough, so et such",
        "Choisir entre a few, a little, many, much, several et most",
      ],
      sections: [
        {
          titre: "Plus… que : le comparatif",
          blocs: [
            { t: "propriete", titre: "Adjectif court ou long ?", md: "• **Adjectif court** (une syllabe, ou deux syllabes finissant par -y) : on ajoute **-er than** : *taller than, happier than*.\n• **Adjectif long** (deux syllabes ou plus) : on place **more** devant : *more interesting than, more difficult than*." },
            { t: "tableau", titre: "Comparatifs et superlatifs réguliers", entetes: ["Adjectif", "Comparatif", "Superlatif", "Remarque"], lignes: [["tall", "taller than", "the tallest", "adjectif court"], ["big", "bigger than", "the biggest", "consonne doublée"], ["nice", "nicer than", "the nicest", "on ajoute seulement -r"], ["easy", "easier than", "the easiest", "-y devient -i"], ["interesting", "more interesting than", "the most interesting", "adjectif long"], ["difficult", "more difficult than", "the most difficult", "adjectif long"]] },
            { t: "attention", md: "Le « que » de la comparaison se dit **than**, jamais *that* : *My sister is older **than** me.* Et on ne mélange pas les deux méthodes : « more taller » ou « interestinger » n'existent pas." },
          ],
        },
        {
          titre: "Le plus… : le superlatif et les irréguliers",
          blocs: [
            { t: "texte", md: "Le superlatif désigne le premier d'un groupe. Il est toujours précédé de **the** : *PE is **the easiest** subject. This is **the most beautiful** beach in Cornwall.*\n\nQuelques adjectifs très courants sont irréguliers. Ils sont si fréquents qu'il faut les savoir par cœur." },
            { t: "tableau", titre: "Les irréguliers", entetes: ["Adjectif", "Comparatif", "Superlatif"], lignes: [["good (bon)", "**better**", "**the best**"], ["bad (mauvais)", "**worse**", "**the worst**"], ["far (loin)", "**further**", "**the furthest**"], ["little (peu)", "**less**", "**the least**"], ["many / much (beaucoup)", "**more**", "**the most**"]] },
            { t: "verifie", q: "Complète : « This is ___ film I have ever seen. »", choix: ["the best", "the better", "the goodest", "best than"], bonne: 0, explication: "Good est irrégulier : good, better, the best. Avec I have ever seen, on compare à tous les films vus : c'est un superlatif, the best." },
          ],
        },
        {
          titre: "Autant, moins, le moins",
          blocs: [
            { t: "propriete", titre: "Égalité et infériorité", md: "• Égalité : **as + adjectif + as** : *My brother is as tall as me.* Négation : *not as tall as* (pas aussi grand que).\n• Infériorité : **less + adjectif + than** : *This hotel is less expensive than that one.*\n• Superlatif d'infériorité : **the least + adjectif** : *the least expensive* (le moins cher)." },
            { t: "graphique", type: "barres", titre: "Hauteur de quelques monuments de Londres", unite: "m", donnees: [{ label: "The Shard", valeur: 310 }, { label: "London Eye", valeur: 135 }, { label: "St Paul's Cathedral", valeur: 111 }, { label: "Elizabeth Tower (Big Ben)", valeur: 96 }] },
            { t: "exemple", titre: "Comparer avec le graphique", etapes: ["*The Shard is **the tallest** building in London.* (310 m)", "*The London Eye is **taller than** St Paul's Cathedral.* (135 m contre 111 m)", "*Big Ben's tower is **not as tall as** St Paul's.*", "*Of these four, Big Ben's tower is **the shortest**.*"] },
            { t: "attention", md: "« Le moins cher » se dit *the **least** expensive*, pas « the less expensive ». **Less** sert au comparatif (moins… que), **the least** au superlatif (le moins)." },
          ],
        },
        {
          titre: "Trop, assez, tellement",
          blocs: [
            { t: "propriete", titre: "Too, enough, so, such", md: "• **too + adjectif** = trop : *This tea is too hot. I can't drink it.*\n• **adjectif + enough** = assez : *He isn't old enough to drive.* Mais **enough + nom** : *I don't have enough time.*\n• **so + adjectif** = tellement : *The film was so good!*\n• **such (a) + adjectif + nom** = tellement, un si… : *It was such a good film that I watched it twice.*" },
            { t: "astuce", md: "Pour enough, pense à sa **place** : il **suit** l'adjectif (*old enough*) mais **précède** le nom (*enough money*). Pour so et such, regarde s'il y a un nom : pas de nom → *so* ; un nom → *such*." },
            { t: "verifie", q: "Complète : « It was ___ a good film that I watched it twice. »", choix: ["such", "so", "too", "enough"], bonne: 0, explication: "Il y a un nom (a good film) : on emploie such a. So s'utilise devant un adjectif seul : The film was so good." },
          ],
        },
        {
          titre: "Combien ? Les quantifieurs",
          blocs: [
            { t: "texte", md: "En anglais, tout dépend de la nature du nom. Les **dénombrables** se comptent (*one friend, two friends*). Les **indénombrables** ne se comptent pas et restent au singulier (*water, money, sugar, time, information*)." },
            { t: "tableau", titre: "Quantifieurs et types de noms", entetes: ["Sens", "Dénombrable pluriel", "Indénombrable"], lignes: [["quelques / un peu de", "**a few** friends", "**a little** water"], ["beaucoup de", "**many** people", "**much** sugar"], ["combien ?", "**How many** pupils?", "**How much** sugar?"], ["plusieurs", "**several** books", "—"], ["la plupart", "**most** pupils", "**most** music"]] },
            { t: "exemple", titre: "En situation", md: "*I have **a few** friends in Dublin, but I only know **a little** Irish. How **much** sugar do you want? **Most** people in Britain drink tea.*\n\nFriends se compte : a few. Irish (une langue) ne se compte pas : a little. Sugar est indénombrable : how much." },
          ],
        },
      ],
      bilan: "Adjectif court en -er, long avec more, toujours than ; the pour le superlatif ; too devant, enough derrière ; a few et many pour ce qui se compte, a little et much pour le reste.",
    },
    "4e-anglais-06-relatives-connecteurs": {
      accroche: "*My cousin lives in Leeds. My cousin has a dog. The dog loves swimming.* Trois phrases sèches comme un télégramme. Compare : *My cousin, who lives in Leeds, has a dog which loves swimming.* Une seule phrase, fluide et précise. Le secret ? Les pronoms relatifs et les connecteurs.",
      objectifs: [
        "Choisir le bon pronom relatif : who, which, that, whose, where",
        "Construire une proposition relative sans répéter le sujet",
        "Relier des idées avec because, so, so that, although et however",
      ],
      sections: [
        {
          titre: "Who, which, that : qui et que",
          blocs: [
            { t: "definition", terme: "Pronom relatif", md: "Petit mot qui relie deux idées en **remplaçant un nom** déjà cité, appelé **antécédent**. Il ouvre une **proposition relative**, qui donne une information sur ce nom." },
            { t: "tableau", titre: "Les pronoms relatifs", entetes: ["Pronom", "Il remplace…", "Exemple", "Traduction"], lignes: [["**who**", "une personne", "*the woman who lives next door*", "la femme qui habite à côté"], ["**which**", "une chose, un animal", "*the dog which loves swimming*", "le chien qui adore nager"], ["**that**", "une personne ou une chose (relative déterminative)", "*the book that I told you about*", "le livre dont je t'ai parlé"], ["**whose**", "possession : dont le, dont la", "*the boy whose father is a pilot*", "le garçon dont le père est pilote"], ["**where**", "un lieu : où", "*the town where I was born*", "la ville où je suis né"]] },
            { t: "verifie", q: "Complète : « The woman ___ lives next door is a doctor. »", choix: ["who", "which", "whose", "where"], bonne: 0, explication: "L'antécédent the woman est une personne et le pronom est sujet de lives : who. That serait aussi possible, mais which est réservé aux choses et aux animaux." },
          ],
        },
        {
          titre: "Construire une proposition relative",
          blocs: [
            { t: "schema", titre: "Une relative glissée dans la phrase", legende: "Le pronom who remplace the woman : on ne le répète pas. La relative s'insère juste après le nom qu'elle décrit.", svg: `<svg viewBox="0 0 400 210"><text class="texte-pigment" x="88" y="34" text-anchor="middle">who = the woman</text><path class="trait-fin" d="M122 74 Q92 44 60 74" fill="none" marker-end="url(#fl-p)"/><text class="texte-main" x="20" y="96">The woman</text><rect class="aplat" x="98" y="76" width="166" height="30" rx="6"/><text class="texte-main" x="104" y="96">who lives next door</text><text class="texte-main" x="272" y="96">is a doctor.</text><text class="texte-petit" x="56" y="128" text-anchor="middle">antécédent</text><text class="texte-petit" x="181" y="128" text-anchor="middle">proposition relative</text><text class="texte-petit" x="318" y="128" text-anchor="middle">suite de la phrase</text><line class="trait-fin" x1="20" y1="150" x2="380" y2="150"/><text class="texte" x="200" y="178" text-anchor="middle">The pizza (that) I ate was delicious.</text><text class="texte-petit" x="200" y="198" text-anchor="middle">that est complément de ate : on peut le supprimer</text></svg>` },
            { t: "propriete", titre: "Deux règles de construction", md: "1. Le pronom relatif **remplace** le nom : on ne remet pas de pronom personnel. *The man who lives here*, et non « the man who **he** lives here ».\n2. Quand le pronom est **complément** (et non sujet), on peut l'omettre : *The pizza (that) I ate was delicious. This is the book (that) I told you about.*" },
            { t: "exemple", titre: "Fusionner deux phrases", etapes: ["Phrase 1 : *The girl won the race.* Phrase 2 : *The girl is my cousin.*", "On garde un seul *the girl* et on remplace l'autre par who : *The girl who won the race…*", "On termine la phrase principale : *The girl who won the race is my cousin.*", "Même chose avec une chose : *The medal which (that) she received is made of gold.*"] },
            { t: "attention", md: "Le français « dont » ne se traduit pas toujours par whose ! *Le livre dont je t'ai parlé* = *the book (that) I told you **about***. Whose ne sert que pour la **possession** : *the boy **whose** father is a pilot* (le père du garçon)." },
          ],
        },
        {
          titre: "Whose et where : la possession et le lieu",
          blocs: [
            { t: "texte", md: "**Whose** est toujours suivi d'un **nom** : c'est la chose possédée. *That's the boy **whose** father is a pilot.* (le père appartient au garçon)\n\n**Where** renvoie à un **lieu** : *This is the town **where** I was born. I love the café **where** we met.*" },
            { t: "verifie", q: "Complète : « That's the boy ___ father is a pilot. »", choix: ["whose", "who", "which", "where"], bonne: 0, explication: "Il s'agit du père du garçon : un lien de possession, donc whose, suivi du nom father." },
          ],
        },
        {
          titre: "Relier ses idées : cause, conséquence, but, opposition",
          blocs: [
            { t: "tableau", titre: "Les connecteurs logiques", entetes: ["Connecteur", "Sens", "Exemple"], lignes: [["**because**", "parce que (cause)", "*I stayed at home because I was ill.*"], ["**so**", "donc (conséquence)", "*I was ill, so I stayed at home.*"], ["**so that**", "pour que, afin de (but)", "*I took my umbrella so that I wouldn't get wet.*"], ["**although**", "bien que (opposition, dans la phrase)", "*Although it was raining, we went for a walk.*"], ["**however**", "cependant (opposition, nouvelle phrase)", "*It was very expensive. However, we bought it.*"]] },
            { t: "attention", md: "**Although** relie deux propositions dans **une seule phrase**. **However** commence en général une **nouvelle phrase** et il est suivi d'une **virgule** : *It was cold. However, we went to the lake.* Ne dis pas « However it was cold, we went »." },
            { t: "exemple", titre: "Un paragraphe bien relié", md: "*My cousin, **who** lives in Leeds, has a dog **which** loves swimming. **Although** it was cold, we went to the lake **so that** the dog could swim. **However**, we didn't stay long **because** it started to rain.*" },
            { t: "verifie", q: "Complète : « ___ it was raining, we went for a walk. »", choix: ["Although", "However", "Because", "So"], bonne: 0, explication: "Il pleuvait et pourtant nous sommes sortis : c'est une opposition à l'intérieur d'une même phrase, donc although. However ouvrirait une nouvelle phrase, suivi d'une virgule." },
          ],
        },
      ],
      bilan: "Who pour les personnes, which pour les choses, that pour les deux, whose pour posséder, where pour situer ; puis because, so, so that, although et however tissent tes idées.",
    },
    "4e-anglais-07-voix-passive": {
      accroche: "« La tour Eiffel a été construite en 1889. » Qui l'a construite ? Des centaines d'ouvriers, mais ce n'est pas ce qui t'intéresse : c'est la tour qui compte. Quand l'important est ce qui subit l'action, et non celui qui la fait, l'anglais passe à la voix passive. *The Eiffel Tower was built in 1889.*",
      objectifs: [
        "Former le passif au présent et au prétérit",
        "Transformer une phrase active en phrase passive, avec ou sans by",
        "Reconnaître le passif dans la presse, les descriptions et les procédés",
      ],
      sections: [
        {
          titre: "Be + participe passé",
          blocs: [
            { t: "definition", terme: "Voix passive", md: "Construction dans laquelle le **sujet subit l'action** au lieu de la faire. Elle se forme avec **be** conjugué + le **participe passé** du verbe : *English **is spoken** in Australia.* (On parle anglais en Australie.)" },
            { t: "propriete", titre: "Deux temps à connaître", md: "• **Présent** : **am / is / are + participe passé** : *These cars **are made** in Japan.*\n• **Prétérit** : **was / were + participe passé** : *The tower **was built** in 1889.*\n\nC'est **be** qui porte le temps ; le participe passé, lui, ne change jamais." },
            { t: "tableau", titre: "Le même verbe, à l'actif et au passif", entetes: ["Temps", "Voix active", "Voix passive"], lignes: [["présent", "*They make these cars in Japan.*", "*These cars **are made** in Japan.*"], ["présent", "*People speak English in Australia.*", "*English **is spoken** in Australia.*"], ["prétérit", "*Someone stole my car last week.*", "*My car **was stolen** last week.*"], ["prétérit", "*The police arrested the thief.*", "*The thief **was arrested** by the police.*"]] },
            { t: "verifie", q: "Complète : « English ___ in Australia. »", choix: ["is spoken", "speaks", "is speak", "was speaking"], bonne: 0, explication: "C'est une vérité générale au présent, et la langue ne parle pas : elle est parlée. Passif présent : is + spoken, participe passé irrégulier de speak." },
          ],
        },
        {
          titre: "Passer de l'actif au passif",
          blocs: [
            { t: "schema", titre: "Les rôles s'échangent", legende: "Le complément de la phrase active devient le sujet de la phrase passive ; l'ancien sujet devient l'agent, introduit par by.", svg: `<svg viewBox="0 0 400 226"><text class="texte-petit" x="20" y="26">ACTIVE</text><text class="texte-main" x="75" y="62" text-anchor="middle">Shakespeare</text><text class="texte-main" x="190" y="62" text-anchor="middle">wrote</text><text class="texte-main" x="305" y="62" text-anchor="middle">Hamlet.</text><text class="texte-petit" x="75" y="82" text-anchor="middle">sujet</text><text class="texte-petit" x="305" y="82" text-anchor="middle">complément</text><path class="trait" d="M300 92 L84 144" fill="none" marker-end="url(#fl-p)"/><path class="trait-fin" d="M80 92 L300 144" fill="none" marker-end="url(#fl)"/><text class="texte-main" x="60" y="168" text-anchor="middle">Hamlet</text><text class="texte-main" x="180" y="168" text-anchor="middle">was written</text><text class="texte-main" x="320" y="168" text-anchor="middle">by Shakespeare.</text><text class="texte-petit" x="60" y="190" text-anchor="middle">nouveau sujet</text><text class="texte-petit" x="180" y="190" text-anchor="middle">be + participe passé</text><text class="texte-petit" x="320" y="190" text-anchor="middle">agent</text><text class="texte-petit" x="20" y="216">PASSIVE</text></svg>` },
            { t: "etapes", titre: "Transformer une phrase en quatre gestes", items: [{ titre: "Repérer le complément", md: "*Millions of people watch **the Olympics**.*" }, { titre: "En faire le sujet", md: "*The Olympics…* (pluriel)" }, { titre: "Conjuguer be au temps de l'actif", md: "Watch est au présent : *are*, puis le participe passé *watched*." }, { titre: "Ajouter l'agent si utile", md: "*The Olympics are watched **by millions of people**.*" }] },
            { t: "verifie", q: "Complète : « Romeo and Juliet ___ by Shakespeare. »", choix: ["was written", "wrote", "is writing", "was wrote"], bonne: 0, explication: "La pièce subit l'action et l'écriture appartient au passé : was + written. « Was wrote » emploie le prétérit au lieu du participe passé." },
          ],
        },
        {
          titre: "By + agent : seulement si c'est utile",
          blocs: [
            { t: "propriete", titre: "Quand garder l'agent ?", md: "On ajoute **by + agent** quand celui qui agit est **connu et intéressant** : *The Harry Potter books were written **by J. K. Rowling**.*\n\nOn l'**omet** quand il est inconnu, évident ou sans importance : *My bike was stolen.* (on ne sait pas par qui) ; *The thief was arrested.* (par la police, évidemment)." },
            { t: "attention", md: "Deux pièges :\n\n• **Be s'accorde avec le nouveau sujet** : *This car **is** made in Japan* mais *These cars **are** made in Japan.*\n• Il faut le **participe passé**, pas le prétérit ni la base : ==« The letter was send » est faux==, on écrit *The letter was **sent** yesterday.*" },
            { t: "tableau", titre: "Participes passés fréquents au passif", entetes: ["Base verbale", "Participe passé", "Exemple"], lignes: [["build", "**built**", "*The castle was built in 1200.*"], ["make", "**made**", "*Cheddar is made in England.*"], ["steal", "**stolen**", "*My car was stolen.*"], ["send", "**sent**", "*The letter was sent.*"], ["take", "**taken**", "*This photo was taken in Wales.*"], ["grow", "**grown**", "*Tea is grown in India.*"]] },
          ],
        },
        {
          titre: "Le passif dans la vie réelle",
          blocs: [
            { t: "texte", md: "Tu croiseras le passif partout où l'on **informe** :\n\n• dans la **presse** : *Two men were arrested last night.*\n• dans les **descriptions de lieux** : *The castle was built in 1200.*\n• dans les **procédés** et les faits : *Tea is grown in India and Sri Lanka.*" },
            { t: "savais-tu", md: "Dans les **titres de journaux**, l'anglais supprime be pour gagner de la place : *Two men **arrested** after bank robbery* signifie *Two men **were** arrested…* Le participe passé seul suffit à comprendre." },
            { t: "exemple", titre: "Un succès mondial", md: "*The Harry Potter books **were written** by J. K. Rowling. They **are read** by millions of people and **have been translated** into more than 80 languages.*\n\nPrétérit passif, présent passif, puis present perfect passif (*have been* + participe) : toujours be + participe passé." },
            { t: "verifie", q: "Complète ce titre de journal : « Two men ___ after bank robbery ».", choix: ["arrested", "arrest", "arresting", "are arrest"], bonne: 0, explication: "Dans un titre, be disparaît et il reste le participe passé : arrested. La phrase complète serait Two men were arrested after a bank robbery." },
          ],
        },
      ],
      bilan: "Be au bon temps + participe passé : le sujet subit l'action. Ajoute by et l'agent seulement s'il apporte une information.",
    },
    "4e-anglais-08-quotidien-emotions": {
      accroche: "Comment te sens-tu aujourd'hui ? Fier, impatient, un peu gêné, ou complètement fed up ? Parler de ses émotions, de ses amis, de son collège ou de la planète, c'est parler de soi. Pour cela, il faut des mots justes, et éviter quelques pièges où les francophones tombent souvent.",
      objectifs: [
        "Exprimer tes sentiments et décrire une personnalité",
        "Parler de l'amitié et de la vie au collège",
        "Utiliser le vocabulaire des médias, des technologies et des métiers",
        "Parler de l'environnement et des gestes pour le protéger",
      ],
      sections: [
        {
          titre: "Dire ce que l'on ressent",
          blocs: [
            { t: "tableau", titre: "Feelings", entetes: ["Anglais", "Français", "Exemple"], lignes: [["happy / sad", "heureux / triste", "*I'm sad because my friend is leaving.*"], ["angry / scared", "en colère / effrayé", "*I'm scared of spiders.*"], ["proud", "fier", "*I'm proud of my little brother.*"], ["excited", "enthousiaste, impatient", "*I'm really excited about the school trip!*"], ["disappointed", "déçu", "*She was disappointed with her mark.*"], ["embarrassed", "gêné", "*He felt embarrassed when he forgot his lines.*"], ["fed up (with)", "en avoir assez (de)", "*I'm fed up with the rain!*"]] },
            { t: "propriete", titre: "Adjectifs en -ed et en -ing", md: "• **-ed** : ce que **je ressens** : *I'm bored. I'm interested. I'm tired.*\n• **-ing** : ce qui **provoque** ce sentiment : *The film is boring. The book is interesting.*" },
            { t: "schema", titre: "Boring ou bored ?", legende: "Le film est ennuyeux (-ing, la cause) ; moi, je m'ennuie (-ed, l'effet).", svg: `<svg viewBox="0 0 400 200"><rect class="aplat-papier" x="30" y="46" width="130" height="84" rx="6"/><rect class="trait" x="30" y="46" width="130" height="84" rx="6" fill="none"/><text class="texte" x="95" y="94" text-anchor="middle">the film</text><line class="trait" x1="70" y1="130" x2="60" y2="144"/><line class="trait" x1="120" y1="130" x2="130" y2="144"/><line class="trait" x1="172" y1="88" x2="250" y2="88" marker-end="url(#fl)"/><text class="texte-petit" x="211" y="78" text-anchor="middle">provoque</text><circle class="aplat" cx="300" cy="88" r="36"/><circle class="trait" cx="300" cy="88" r="36" fill="none"/><circle cx="287" cy="78" r="3" fill="var(--encre)"/><circle cx="313" cy="78" r="3" fill="var(--encre)"/><line class="trait" x1="286" y1="104" x2="314" y2="104"/><text class="texte-main" x="352" y="52">z z</text><text class="texte-pigment" x="95" y="168" text-anchor="middle">It's boring.</text><text class="texte-petit" x="95" y="186" text-anchor="middle">-ing : la cause</text><text class="texte-pigment" x="300" y="168" text-anchor="middle">I'm bored.</text><text class="texte-petit" x="300" y="186" text-anchor="middle">-ed : ce que je ressens</text></svg>` },
            { t: "verifie", q: "Complète : « The film was so ___ that I fell asleep. »", choix: ["boring", "bored", "bore", "boredom"], bonne: 0, explication: "C'est le film qui provoque l'ennui : adjectif en -ing, boring. « The film was bored » voudrait dire que le film lui-même s'ennuie !" },
          ],
        },
        {
          titre: "Décrire une personnalité",
          blocs: [
            { t: "liste", titre: "Personality", items: ["*shy* (timide) ≠ *outgoing* (extraverti, sociable)", "*generous* (généreux), *funny* (drôle), *kind* (gentil)", "*lazy* (paresseux) ≠ *hard-working* (travailleur)", "*sensible* (raisonnable) et *sensitive* (sensible, émotif)"] },
            { t: "attention", md: "**Sensible** est un faux ami : en anglais, il veut dire **raisonnable**. *My sister is very sensible* : elle a la tête sur les épaules. Pour dire qu'une personne est sensible, émotive, on emploie ==sensitive== : *He's sensitive, he cries at sad films.*" },
          ],
        },
        {
          titre: "L'amitié et la vie au collège",
          blocs: [
            { t: "texte", md: "Au collège anglais, ta journée suit le **timetable** (emploi du temps). Entre deux cours, il y a la **break** (récréation) dans le **playground** (cour). Le **headteacher** (chef d'établissement) dirige l'école ; les professeurs te donnent des **homework** (devoirs, indénombrable) et des **marks** (notes).\n\nPour parler d'amitié : *to get on well with* (bien s'entendre avec), *to have a lot in common* (avoir beaucoup de points communs), *best friend* (meilleur ami)." },
            { t: "exemple", titre: "Se présenter avec ses émotions", md: "*I'm really excited about the school trip! My best friend is outgoing and funny, and we get on really well. We have a lot in common: we both love music and drawing.*" },
          ],
        },
        {
          titre: "Médias, technologies et métiers",
          blocs: [
            { t: "texte", md: "Sur un **screen** (écran), tu peux **post** (publier) un message, **download** (télécharger) une application ou suivre les **social media** (réseaux sociaux). Et une photo, on la **prend** : *I **took** a photo and posted it online.*" },
            { t: "attention", md: "« Faire une photo » se dit *to **take** a photo*, ==jamais « make a photo »==. Pour demander un métier, dis *What's your job?* ou *What do you do?*, et mets toujours un article : *She is **a** nurse. He is **an** engineer.*" },
            { t: "tableau", titre: "Jobs", entetes: ["Anglais", "Français"], lignes: [["a nurse", "un infirmier, une infirmière"], ["a lawyer", "un avocat, une avocate"], ["a firefighter", "un pompier"], ["an engineer", "un ingénieur, une ingénieure"], ["a baker", "un boulanger, une boulangère"], ["a journalist", "un journaliste"]] },
            { t: "verifie", q: "Complète : « I ___ a photo and posted it online. »", choix: ["took", "made", "did", "had"], bonne: 0, explication: "En anglais, on prend une photo : to take a photo, au prétérit took. Make a photo est un calque du français." },
          ],
        },
        {
          titre: "Protéger la planète",
          blocs: [
            { t: "texte", md: "La **pollution** et le **global warming** (réchauffement climatique) inquiètent beaucoup de jeunes. Le contraire de *polluted* (pollué) est *clean* (propre). Les **renewable energies** (énergies renouvelables), comme le vent ou le soleil, remplacent peu à peu le charbon et le pétrole." },
            { t: "etapes", titre: "Les gestes du quotidien", items: [{ titre: "Recycle", md: "*We recycle paper, glass and plastic.* (recycler)" }, { titre: "Save energy", md: "*I switch off the lights.* (économiser l'énergie)" }, { titre: "Save water", md: "*I take a shower, not a bath.* (économiser l'eau)" }, { titre: "Reduce waste", md: "*We avoid plastic bags.* (réduire les déchets)" }] },
            { t: "exemple", titre: "Une petite déclaration", md: "*At home, we **recycle** paper and try to **save** water because we worry about **global warming**. We must protect the planet!*" },
          ],
        },
      ],
      bilan: "Bored pour toi, boring pour la cause ; sensible veut dire raisonnable ; on take a photo ; et pour la planète, on recycle et on save.",
    },
    "4e-anglais-09-travel-culture": {
      accroche: "Imagine : tu débarques à Cape Town, en Afrique du Sud. Il faut récupérer tes bagages, trouver ton hôtel, demander ton chemin jusqu'à Table Mountain. Bonne nouvelle : avec l'anglais, tu peux voyager sur les cinq continents. Encore faut-il connaître les mots du voyage et la carte du monde anglophone.",
      objectifs: [
        "Utiliser le vocabulaire de l'aéroport, de l'hôtel et des transports",
        "Demander poliment son chemin et comprendre la réponse",
        "Situer les principaux pays du Commonwealth et leurs capitales",
        "Reconnaître des monuments et des symboles du monde anglophone",
      ],
      sections: [
        {
          titre: "À l'aéroport et à l'hôtel",
          blocs: [
            { t: "etapes", titre: "De l'enregistrement à l'atterrissage", items: [{ titre: "Check in", md: "On enregistre ses bagages (*luggage*) au comptoir." }, { titre: "Boarding pass", md: "On reçoit sa carte d'embarquement." }, { titre: "Gate", md: "On attend devant la porte d'embarquement de son vol (*flight*)." }, { titre: "Take off", md: "L'avion décolle." }, { titre: "Land", md: "L'avion atterrit : *We landed in Cape Town at 6 pm.*" }] },
            { t: "texte", md: "À l'hôtel, tu vas à la **reception** et tu dis : *I'd like to **book** a room for two nights.* Tu choisis une **single room** (chambre pour une personne) ou une **double room**.\n\nAu guichet de la gare, en Grande-Bretagne : *a **single** to Oxford* (un aller simple) ou *a **return** to Oxford* (un aller-retour)." },
            { t: "attention", md: "**Luggage** (bagages) est **indénombrable** : il reste au singulier et ne prend jamais de -s. *My luggage **is** heavy.* Pour en compter, dis *two **pieces of** luggage* ou *two bags*." },
          ],
        },
        {
          titre: "Demander et indiquer son chemin",
          blocs: [
            { t: "propriete", titre: "La question indirecte polie", md: "Pour être poli, on commence par *Excuse me, could you tell me…* puis on garde l'ordre **sujet + verbe**, comme dans une phrase affirmative :\n\n*Where **is the station**?* → *Could you tell me where **the station is**?*" },
            { t: "exemple", titre: "Un dialogue dans la rue", etapes: ["*Excuse me, how do I get to the museum?*", "*Go straight on, then turn left at the traffic lights.*", "*Go past the bank. The museum is on your right, opposite the station.*", "*Thank you very much!* — *You're welcome.*"] },
            { t: "verifie", q: "Quelle phrase est correcte pour demander poliment son chemin ?", choix: ["Could you tell me where the station is?", "Could you tell me where is the station?", "Can you say me where the station is?", "Tell me where is the station."], bonne: 0, explication: "Dans la question indirecte, le sujet passe avant le verbe : where the station is. « Say me » est incorrect : on dit tell me." },
          ],
        },
        {
          titre: "Le monde anglophone et le Commonwealth",
          blocs: [
            { t: "definition", terme: "Commonwealth", md: "Association de **56 pays**, pour la plupart d'anciennes colonies de l'Empire britannique, liés par la langue anglaise et des valeurs communes. Le roi du Royaume-Uni, **Charles III**, en est le chef symbolique. ==Les États-Unis n'en font pas partie== : ils ont pris leur indépendance dès 1776." },
            { t: "carte", fond: "monde", titre: "Quelques pays du Commonwealth et leurs capitales", zones: ["GB", "CA", "AU", "NZ", "IN", "PK", "BD", "LK", "MY", "NG", "GH", "KE", "UG", "TZ", "ZA", "NA", "BW", "ZM", "MZ", "CM", "RW", "JM", "GY", "PG"], reperes: [{ nom: "London", lat: 51.5074, lon: -0.1278 }, { nom: "Ottawa", lat: 45.4215, lon: -75.6972 }, { nom: "New Delhi", lat: 28.6139, lon: 77.209 }, { nom: "Pretoria", lat: -25.7479, lon: 28.2293 }, { nom: "Canberra", lat: -35.2809, lon: 149.13 }, { nom: "Wellington", lat: -41.2865, lon: 174.7762 }], legende: "Pays membres du Commonwealth (sélection) et capitales" },
            { t: "tableau", titre: "Pays et capitales", entetes: ["Pays", "Capitale", "Piège à éviter"], lignes: [["India", "**New Delhi**", "pas Mumbai"], ["Canada", "**Ottawa**", "pas Toronto"], ["Australia", "**Canberra**", "pas Sydney"], ["New Zealand", "**Wellington**", "pas Auckland"], ["South Africa", "**Pretoria** (capitale administrative)", "le pays a trois capitales"]] },
            { t: "savais-tu", md: "Le **Canada** a deux langues officielles : l'**anglais** et le **français**. Au Québec, le français est même la seule langue officielle de la province. Et comme l'Australie et la Nouvelle-Zélande, le Canada a pour chef d'État le **roi du Royaume-Uni**, représenté sur place par un gouverneur général." },
          ],
        },
        {
          titre: "Symboles et monuments",
          blocs: [
            { t: "schema", titre: "Trois croix pour un drapeau", legende: "Depuis 1801, l'Union Jack superpose les croix de saint George (Angleterre), saint André (Écosse) et saint Patrick (Irlande). Le pays de Galles n'y figure pas.", svg: `<svg viewBox="0 0 400 270"><rect class="c-blanc" x="30" y="30" width="80" height="48"/><rect class="c-rouge" x="64" y="30" width="12" height="48"/><rect class="c-rouge" x="30" y="48" width="80" height="12"/><rect class="trait-fin" x="30" y="30" width="80" height="48" fill="none"/><rect class="c-bleu" x="160" y="30" width="80" height="48"/><polygon class="c-blanc" points="160,30 170,30 240,72 240,78 230,78 160,36"/><polygon class="c-blanc" points="240,30 230,30 160,72 160,78 170,78 240,36"/><rect class="c-blanc" x="290" y="30" width="80" height="48"/><polygon class="c-rouge" points="290,30 298,30 370,73 370,78 362,78 290,35"/><polygon class="c-rouge" points="370,30 362,30 290,73 290,78 298,78 370,35"/><rect class="trait-fin" x="290" y="30" width="80" height="48" fill="none"/><text class="texte" x="135" y="60" text-anchor="middle">+</text><text class="texte" x="265" y="60" text-anchor="middle">+</text><text class="texte-petit" x="70" y="96" text-anchor="middle">St George</text><text class="texte-petit" x="70" y="110" text-anchor="middle">England</text><text class="texte-petit" x="200" y="96" text-anchor="middle">St Andrew</text><text class="texte-petit" x="200" y="110" text-anchor="middle">Scotland</text><text class="texte-petit" x="330" y="96" text-anchor="middle">St Patrick</text><text class="texte-petit" x="330" y="110" text-anchor="middle">Ireland</text><line class="trait" x1="200" y1="120" x2="200" y2="144" marker-end="url(#fl)"/><rect class="c-bleu" x="128" y="150" width="144" height="72"/><polygon class="c-blanc" points="128,150 144,150 272,214 272,222 256,222 128,158"/><polygon class="c-blanc" points="272,150 256,150 128,214 128,222 144,222 272,158"/><polygon class="c-rouge" points="128,150 134,150 272,219 272,222 266,222 128,153"/><polygon class="c-rouge" points="272,150 266,150 128,219 128,222 134,222 272,153"/><rect class="c-blanc" x="188" y="150" width="24" height="72"/><rect class="c-blanc" x="128" y="174" width="144" height="24"/><rect class="c-rouge" x="193" y="150" width="14" height="72"/><rect class="c-rouge" x="128" y="179" width="144" height="14"/><rect class="trait-fin" x="128" y="150" width="144" height="72" fill="none"/><text class="texte" x="200" y="248" text-anchor="middle">the Union Jack</text></svg>` },
            { t: "tableau", titre: "Symboles et monuments du monde anglophone", entetes: ["Pays", "Symbole", "Monument (ville)"], lignes: [["United Kingdom", "the Union Jack", "Big Ben (London)"], ["United States", "the bald eagle", "the Statue of Liberty (New York)"], ["Canada", "the maple leaf", "the CN Tower (Toronto)"], ["Australia", "the kangaroo", "the Sydney Opera House (Sydney)"], ["New Zealand", "the kiwi", "the Sky Tower (Auckland)"], ["India", "the Bengal tiger", "the Taj Mahal (Agra)"], ["South Africa", "the springbok", "Table Mountain (Cape Town)"]] },
            { t: "verifie", q: "Quel animal est un symbole de la Nouvelle-Zélande ?", choix: ["the kiwi", "the kangaroo", "the beaver", "the springbok"], bonne: 0, explication: "Le kiwi, un oiseau qui ne vole pas, est l'emblème de la Nouvelle-Zélande ; on surnomme même ses habitants les Kiwis. Le kangourou est australien, le castor canadien, le springbok sud-africain." },
          ],
        },
      ],
      bilan: "Check in, take off, land ; could you tell me where the station is ; et sur la carte, 56 pays du Commonwealth, d'Ottawa à Wellington, mais sans les États-Unis.",
    },
    "4e-anglais-10-history-society": {
      accroche: "Un bus à Montgomery, un discours devant 250 000 personnes à Washington, une prison sur une île au large du Cap, une marche vers la mer en Inde : derrière ces lieux, des femmes et des hommes ont changé l'histoire. La raconter en anglais, c'est utiliser le past simple et quelques dates à connaître par cœur.",
      objectifs: [
        "Situer l'indépendance américaine et le mouvement des droits civiques",
        "Expliquer la lutte contre l'apartheid et l'action de Gandhi",
        "Caractériser l'ère victorienne et la révolution industrielle",
        "Raconter un événement historique au past simple",
      ],
      sections: [
        {
          titre: "1776 : la naissance des États-Unis",
          blocs: [
            { t: "texte", md: "Au XVIIIe siècle, treize colonies britanniques d'Amérique du Nord refusent de payer des impôts décidés à Londres sans être représentées au Parlement. Le **4 juillet 1776**, à Philadelphie, elles adoptent la **Declaration of Independence**, rédigée surtout par Thomas Jefferson. Les États-Unis sont nés. Chaque année, les Américains fêtent ce jour : **Independence Day**." },
            { t: "citation", texte: "We hold these truths to be self-evident, that all men are created equal…", auteur: "Thomas Jefferson", source: "Declaration of Independence, 1776" },
            { t: "frise", titre: "Grandes dates du monde anglophone", evenements: [{ date: 1776, label: "Declaration of Independence", detail: "4 juillet, à Philadelphie : les treize colonies deviennent les États-Unis." }, { date: 1837, label: "Victoria becomes queen", detail: "Début d'un règne de 63 ans, jusqu'en 1901." }, { date: 1912, label: "The Titanic sinks", detail: "Parti de Southampton, il coule le 15 avril après avoir heurté un iceberg." }, { date: 1947, label: "Independence of India", detail: "Après des décennies de lutte non violente menée par Gandhi." }, { date: 1948, label: "Apartheid begins", detail: "L'Afrique du Sud impose la séparation raciale par la loi." }, { date: 1955, label: "Rosa Parks", detail: "À Montgomery, elle refuse de céder sa place dans un bus." }, { date: 1963, label: "I Have a Dream", detail: "Martin Luther King s'adresse à la foule à Washington." }, { date: 1991, label: "End of apartheid laws", detail: "Les dernières lois de séparation sont abolies ; Mandela est libre depuis 1990." }, { date: 1994, label: "Mandela becomes president", detail: "Premières élections ouvertes à tous en Afrique du Sud." }] },
          ],
        },
        {
          titre: "L'ère victorienne et la révolution industrielle",
          blocs: [
            { t: "definition", terme: "Victorian era", md: "Période du règne de la reine **Victoria**, de **1837 à 1901**. Le Royaume-Uni est alors la première puissance du monde, à la tête d'un immense empire." },
            { t: "texte", md: "C'est aussi l'époque de l'**Industrial Revolution**. La **machine à vapeur** (*steam engine*), améliorée par James Watt, fait tourner les usines textiles et les locomotives. Les **chemins de fer** (*railways*) couvrent le pays, les villes comme Manchester grandissent très vite.\n\nMais le progrès a un prix : des **enfants travaillent** dans les mines et les usines, parfois plus de douze heures par jour, dans le bruit et la fumée. Des lois finissent par limiter ce travail au cours du XIXe siècle." },
            { t: "verifie", q: "Quelle invention est au cœur de la révolution industrielle britannique ?", choix: ["la machine à vapeur", "l'électricité", "l'automobile", "l'ordinateur"], bonne: 0, explication: "La machine à vapeur fait fonctionner les usines, les pompes des mines et les trains. L'électricité et l'automobile ne se diffusent qu'à la fin du XIXe et au XXe siècle." },
          ],
        },
        {
          titre: "Le combat pour les droits civiques",
          blocs: [
            { t: "definition", terme: "Civil Rights Movement", md: "Mouvement des **droits civiques** aux États-Unis, dans les années 1950 et 1960 : les Afro-Américains réclament l'égalité et la fin de la **segregation**, la séparation entre Noirs et Blancs dans les écoles, les bus, les restaurants." },
            { t: "texte", md: "Le 1er décembre **1955**, à **Montgomery** (Alabama), **Rosa Parks** refuse de céder sa place à un passager blanc dans un bus. Elle est arrêtée. Pour la soutenir, la population noire boycotte les bus pendant plus d'un an, sous la conduite d'un jeune pasteur : **Martin Luther King**.\n\nLe 28 août **1963**, lors de la grande marche sur **Washington**, King prononce son discours **« I Have a Dream »** : il rêve d'un pays où ses enfants seront jugés sur leur caractère, et non sur la couleur de leur peau. Il reçoit le prix Nobel de la paix en 1964." },
            { t: "carte", fond: "monde", titre: "Les lieux de ce chapitre", reperes: [{ nom: "Philadelphia", lat: 39.9526, lon: -75.1652 }, { nom: "Washington", lat: 38.8893, lon: -77.0502 }, { nom: "Montgomery", lat: 32.3792, lon: -86.3077 }, { nom: "Southampton", lat: 50.9097, lon: -1.4044 }, { nom: "New Delhi", lat: 28.6139, lon: 77.209 }, { nom: "Robben Island", lat: -33.8076, lon: 18.3712 }], traits: [{ de: [50.9097, -1.4044], a: [41.7325, -49.9469], label: "Titanic, 1912" }], legende: "Le trait suit la route du Titanic jusqu'au lieu du naufrage, dans l'Atlantique Nord." },
            { t: "verifie", q: "Qui a refusé de céder sa place dans un bus à Montgomery en 1955 ?", choix: ["Rosa Parks", "Martin Luther King", "Nelson Mandela", "Queen Victoria"], bonne: 0, explication: "Rosa Parks a été arrêtée pour avoir refusé de céder sa place. Son geste a lancé le boycott des bus de Montgomery, mené par Martin Luther King." },
          ],
        },
        {
          titre: "Gandhi et Mandela : la liberté conquise",
          blocs: [
            { t: "texte", md: "En Inde, colonie britannique, **Gandhi** choisit la **non-violence** et la **désobéissance civile** : boycotter les produits anglais, refuser d'obéir aux lois injustes. En 1930, il marche près de 400 km jusqu'à la mer pour fabriquer son propre sel, malgré l'impôt britannique. On le surnomme **le Mahatma**, « la grande âme ». L'Inde devient indépendante en **1947**." },
            { t: "definition", terme: "Apartheid", md: "Mot afrikaans signifiant « séparation ». Système imposé par la loi en **Afrique du Sud** de **1948 à 1991** : les populations étaient séparées selon leur couleur de peau, et la majorité noire privée de ses droits." },
            { t: "texte", md: "**Nelson Mandela** combat l'apartheid. Arrêté, il passe **27 ans en prison**, en grande partie sur Robben Island. Libéré en 1990, il reçoit le prix Nobel de la paix en 1993 et devient en **1994** le premier président noir de son pays." },
          ],
        },
        {
          titre: "Raconter l'histoire en anglais",
          blocs: [
            { t: "propriete", titre: "Le temps du récit historique", md: "Un événement daté et terminé se raconte au **past simple**, avec **in** devant l'année : *in 1776, in 1912*. Pour une naissance ou une arrestation, on emploie le **passif** : *Mandela **was born** in 1918. Rosa Parks **was arrested** in 1955.*" },
            { t: "tableau", titre: "Verbes irréguliers utiles pour l'histoire", entetes: ["Base verbale", "Past simple", "Exemple"], lignes: [["sink", "**sank**", "*The Titanic sank in 1912.*"], ["hit", "**hit**", "*It hit an iceberg.*"], ["become", "**became**", "*Mandela became president in 1994.*"], ["lead", "**led**", "*Gandhi led India to independence.*"], ["give", "**gave**", "*King gave a famous speech.*"], ["fight", "**fought**", "*They fought for equal rights.*"]] },
            { t: "exemple", titre: "Lire un récit historique", md: "*Rosa Parks **was arrested** in 1955 because she **refused** to give up her seat. Her action **started** the Montgomery bus boycott, which **was led** by a young pastor: Martin Luther King.*\n\nPast simple pour les faits (refused, started), passif pour ce qu'elle a subi (was arrested) et pour mettre en avant le boycott (was led)." },
            { t: "verifie", q: "Complète : « The Titanic ___ in 1912 after it ___ an iceberg. »", choix: ["sank / hit", "sinked / hitted", "has sunk / has hit", "sink / hits"], bonne: 0, explication: "Événement daté et terminé : past simple. Sink fait sank, et hit ne change pas (hit, hit, hit). « Sinked » et « hitted » n'existent pas, et la date interdit le present perfect." },
          ],
        },
      ],
      bilan: "1776, 1837, 1912, 1955, 1963, 1994 : des dates, des combats et des visages. Pour les raconter, le past simple, in devant l'année, et le passif pour ce qu'on a subi.",
    },
    "4e-anglais-11-media-news": {
      accroche: "*Local girl wins national prize!* Ce titre tient en quatre mots et pourtant tu sais déjà l'essentiel. La presse anglaise a son style, ses mots, ses façons de rapporter ce que les gens ont dit. Apprends à la lire, et à distinguer ce qui est vrai de ce qui n'est qu'un avis.",
      objectifs: [
        "Utiliser le vocabulaire de la presse et comprendre un titre",
        "Rapporter des paroles avec say, tell et le décalage des temps",
        "Distinguer un fait d'une opinion",
        "Former les question tags",
      ],
      sections: [
        {
          titre: "Lire un journal",
          blocs: [
            { t: "schema", titre: "La une d'un journal", legende: "Sur la une (front page), le titre (headline) accroche le lecteur, la photo et sa légende illustrent, l'article développe.", svg: `<svg viewBox="0 0 400 260"><rect class="aplat-papier" x="120" y="20" width="170" height="220"/><rect class="trait" x="120" y="20" width="170" height="220" fill="none"/><text class="texte" x="205" y="42" text-anchor="middle">THE CLASS GAZETTE</text><line class="trait-fin" x1="130" y1="50" x2="280" y2="50"/><text class="texte-main" x="205" y="76" text-anchor="middle">LOCAL GIRL WINS</text><text class="texte-main" x="205" y="96" text-anchor="middle">NATIONAL PRIZE</text><rect class="aplat" x="132" y="110" width="70" height="56"/><text class="texte-petit" x="167" y="182" text-anchor="middle">Amy, 13</text><g class="trait-fin"><line x1="212" y1="114" x2="278" y2="114"/><line x1="212" y1="126" x2="278" y2="126"/><line x1="212" y1="138" x2="278" y2="138"/><line x1="212" y1="150" x2="278" y2="150"/><line x1="212" y1="162" x2="278" y2="162"/><line x1="132" y1="198" x2="278" y2="198"/><line x1="132" y1="210" x2="278" y2="210"/><line x1="132" y1="222" x2="250" y2="222"/></g><text class="texte-pigment" x="12" y="90">headline</text><line class="trait-fin" x1="70" y1="86" x2="126" y2="86" marker-end="url(#fl-p)"/><text class="texte-pigment" x="12" y="142">photo</text><line class="trait-fin" x1="52" y1="138" x2="128" y2="138" marker-end="url(#fl-p)"/><text class="texte-pigment" x="12" y="186">caption</text><line class="trait-fin" x1="66" y1="182" x2="140" y2="182" marker-end="url(#fl-p)"/><text class="texte-pigment" x="388" y="34" text-anchor="end">front</text><text class="texte-pigment" x="388" y="50" text-anchor="end">page</text><text class="texte-pigment" x="388" y="146" text-anchor="end">article</text><line class="trait-fin" x1="334" y1="142" x2="284" y2="142" marker-end="url(#fl-p)"/></svg>` },
            { t: "tableau", titre: "Newspaper vocabulary", entetes: ["Anglais", "Français"], lignes: [["a headline", "un titre"], ["the front page", "la une"], ["an article / a journalist", "un article / un journaliste"], ["an editor", "un rédacteur en chef"], ["breaking news", "une information de dernière minute"], ["a tabloid", "un journal populaire, petit format, à sensation"], ["a broadsheet", "un journal de référence, grand format, sérieux"]] },
            { t: "savais-tu", md: "Les titres anglais sont écrits en style télégraphique : on supprime les articles et be, et on emploie le **présent** pour un fait passé. *Local girl **wins** prize* = une collégienne a gagné un prix." },
          ],
        },
        {
          titre: "Say ou tell ?",
          blocs: [
            { t: "propriete", titre: "Deux verbes pour rapporter des paroles", md: "• **say** s'emploie **sans** complément de personne : *He said (that) he was tired.*\n• **tell** est suivi de la **personne** à qui l'on parle : *He told **me** (that) he was tired.*\n\n*That* est facultatif dans les deux cas." },
            { t: "attention", md: "==« He said me » est faux.== Si tu veux nommer la personne, passe à tell : *He told me*. Avec say, il faudrait ajouter **to** : *He said **to** me*, mais c'est moins courant." },
            { t: "verifie", q: "Complète : « She ___ me that she was tired. »", choix: ["told", "said", "says", "spoke"], bonne: 0, explication: "Le verbe est suivi de me, la personne à qui elle parle : c'est tell, au prétérit told. Say ne prend pas de complément de personne direct." },
          ],
        },
        {
          titre: "Le discours rapporté : le temps recule d'un cran",
          blocs: [
            { t: "texte", md: "Quand tu rapportes au passé ce que quelqu'un a dit, les paroles s'éloignent dans le temps. Le verbe **recule d'un cran** vers le passé, et les pronoms changent selon qui parle." },
            { t: "tableau", titre: "Le décalage des temps", entetes: ["Discours direct", "Discours rapporté", "Exemple"], lignes: [["present simple : *I am happy.*", "past simple : *was*", "*Tom said that he was happy.*"], ["present continuous : *I'm working.*", "past continuous : *was working*", "*She said she was working.*"], ["will : *I will come.*", "would", "*She said that she would come.*"], ["can : *I can swim.*", "could", "*He said he could swim.*"], ["past simple : *I saw it.*", "past perfect : *had seen*", "*He said he had seen it.*"]] },
            { t: "exemple", titre: "Rapporter une phrase pas à pas", etapes: ["Paroles : *« I will come to the party »*, dit Lisa.", "Verbe introducteur au passé : *Lisa said that…*", "Pronom : I devient *she*.", "Temps : will recule et devient *would* : *Lisa said that she would come to the party.*"] },
            { t: "astuce", md: "Les repères de temps bougent aussi : *now* → *then*, *today* → *that day*, *tomorrow* → *the next day*. Logique : le « demain » de Lisa est peut-être déjà passé !" },
          ],
        },
        {
          titre: "Fait ou opinion ?",
          blocs: [
            { t: "definition", terme: "Fact / Opinion", md: "Un **fact** (fait) peut être **vérifié** : *London is the capital of the UK.* Une **opinion** exprime un **point de vue** personnel, qu'on peut contester : *London is the best city in the world.*" },
            { t: "liste", titre: "Les signaux d'une opinion", items: ["*In my opinion…, I think…, I believe…, I feel…*", "les superlatifs de jugement : *the best, the worst*", "les adjectifs d'appréciation : *boring, amazing, terrible*"] },
            { t: "texte", md: "Un bon lecteur se demande toujours : *Can I check this?* Si la réponse est oui, c'est un fait. Sinon, c'est l'avis de l'auteur, et tu as le droit de ne pas être d'accord." },
          ],
        },
        {
          titre: "Les question tags : n'est-ce pas ?",
          blocs: [
            { t: "propriete", titre: "Former un question tag", md: "Le tag est une petite question en fin de phrase, comme « n'est-ce pas ? ». Il reprend **l'auxiliaire** de la phrase et le **pronom sujet**, avec la polarité **inverse** :\n\n• phrase affirmative → tag **négatif** : *You're French, **aren't you**?*\n• phrase négative → tag **affirmatif** : *She doesn't like tea, **does she**?*\n• pas d'auxiliaire visible → do, does ou did : *They went to Spain, **didn't they**?*" },
            { t: "tableau", titre: "Exemples de tags", entetes: ["Phrase", "Auxiliaire repris", "Tag"], lignes: [["*He can swim,*", "can", "**can't he?**"], ["*It will rain,*", "will", "**won't it?**"], ["*You have finished,*", "have", "**haven't you?**"], ["*It's an amazing story,*", "is", "**isn't it?**"], ["*They went home,*", "did (prétérit)", "**didn't they?**"]] },
            { t: "attention", md: "Ne colle pas *isn't it?* partout comme un « n'est-ce pas » universel ! Le tag dépend de la phrase : *You're French, **aren't you**?* et non « You're French, isn't it? »." },
            { t: "verifie", q: "Complète : « She doesn't like tea, ___? »", choix: ["does she", "doesn't she", "isn't she", "is she"], bonne: 0, explication: "La phrase est négative avec doesn't : le tag est affirmatif et reprend does + she : does she?" },
          ],
        },
      ],
      bilan: "Say sans personne, tell avec ; au discours rapporté, le temps recule d'un cran ; un fait se vérifie, une opinion se discute ; et le tag reprend l'auxiliaire, à l'envers.",
    },
    "4e-anglais-12-phonologie-strategies": {
      accroche: "Un Anglais te comprendra mieux si tu dis pho-TO-gra-pher plutôt que « pho-to-gra-PHER » à la française. En anglais, le rythme, l'accent et la longueur des voyelles portent le sens. Ajoute quelques faux amis à démasquer et de bonnes méthodes d'écriture : tu progresseras plus vite que tu ne crois.",
      objectifs: [
        "Repérer l'accent de mot et l'intonation des questions",
        "Prononcer correctement le -ed et distinguer voyelles longues et courtes",
        "Éviter les faux amis et les calques du français",
        "Structurer un écrit avec des mots de liaison et utiliser un dictionnaire",
      ],
      sections: [
        {
          titre: "L'accent de mot : une syllabe plus forte",
          blocs: [
            { t: "propriete", titre: "Accent tonique", md: "Chaque mot anglais de plusieurs syllabes a **une syllabe accentuée**, prononcée plus **fort**, plus **haut** et plus **longtemps**. Les autres s'affaiblissent. En français, au contraire, on appuie légèrement sur la dernière syllabe." },
            { t: "schema", titre: "Où tombe l'accent ?", legende: "Le gros rond marque la syllabe accentuée. Dans photographer, l'accent est sur la deuxième syllabe.", svg: `<svg viewBox="0 0 400 230"><text class="texte-main" x="20" y="56">happy</text><circle class="aplat-fort" cx="170" cy="50" r="14"/><circle class="aplat" cx="210" cy="50" r="7"/><text class="texte-petit" x="170" y="82" text-anchor="middle">HAP</text><text class="texte-petit" x="210" y="82" text-anchor="middle">py</text><text class="texte-main" x="20" y="126">hotel</text><circle class="aplat" cx="170" cy="120" r="7"/><circle class="aplat-fort" cx="210" cy="120" r="14"/><text class="texte-petit" x="170" y="152" text-anchor="middle">ho</text><text class="texte-petit" x="210" y="152" text-anchor="middle">TEL</text><text class="texte-main" x="20" y="196">photographer</text><circle class="aplat" cx="170" cy="190" r="7"/><circle class="aplat-fort" cx="210" cy="190" r="14"/><circle class="aplat" cx="250" cy="190" r="7"/><circle class="aplat" cx="290" cy="190" r="7"/><text class="texte-petit" x="170" y="222" text-anchor="middle">pho</text><text class="texte-petit" x="210" y="222" text-anchor="middle">TO</text><text class="texte-petit" x="250" y="222" text-anchor="middle">gra</text><text class="texte-petit" x="290" y="222" text-anchor="middle">pher</text></svg>` },
            { t: "texte", md: "D'autres mots courants : *toDAY* et *beGIN* sont accentués sur la deuxième syllabe ; *TEAcher*, *PICture* et *FAmily* sur la première. Dans le dictionnaire, la syllabe accentuée est précédée d'un petit trait : /fəˈtɒɡrəfə/." },
            { t: "verifie", q: "Sur quelle syllabe porte l'accent dans « photographer » ?", choix: ["la deuxième : phoTOgrapher", "la première : PHOtographer", "la dernière : photograPHER", "la troisième : photoGRApher"], bonne: 0, explication: "On dit phoTOgrapher. Attention, photograph est accentué sur la première syllabe (PHOtograph) : l'accent peut se déplacer dans une même famille de mots." },
          ],
        },
        {
          titre: "L'intonation : la voix monte ou descend",
          blocs: [
            { t: "texte", md: "• **Question fermée** (réponse *yes* ou *no*) : la voix **monte** à la fin ↗ : *Do you like tea?* ↗\n• **Question en WH-** (*what, where, why…*) et **affirmation** : la voix **descend** ↘ : *Where do you live?* ↘ *I live in York.* ↘\n\nUne intonation montante sur une affirmation peut la transformer en question étonnée : *You live in York?* ↗" },
          ],
        },
        {
          titre: "Le -ed et la longueur des voyelles",
          blocs: [
            { t: "tableau", titre: "Trois façons de prononcer -ed", entetes: ["Son", "Quand ?", "Exemples"], lignes: [["/ɪd/", "après t ou d : une syllabe en plus", "wanted, needed, visited"], ["/t/", "après un son sourd : p, k, s, ch, sh, f", "worked, watched, stopped, laughed"], ["/d/", "dans tous les autres cas", "played, loved, cleaned, called"]] },
            { t: "attention", md: "Le -ed **n'ajoute pas toujours une syllabe** ! *Played* se dit en une seule syllabe, avec /d/ : ==jamais « play-ed »==. Seuls les verbes en t ou d gagnent une syllabe : *want-ed, need-ed*." },
            { t: "texte", md: "La **longueur des voyelles** change aussi le sens des mots. *Ship* /ɪ/ (un bateau, son court) n'est pas *sheep* /iː/ (un mouton, son long). *Foot* /ʊ/ (pied, court) s'oppose à *food* /uː/ (nourriture, long). L'orthographe ne suffit pas : *book* et *foot* ont un son court malgré leur double o." },
            { t: "verifie", q: "Comment se prononce le -ed de « wanted » ?", choix: ["/ɪd/, une syllabe en plus", "/t/", "/d/", "il ne se prononce pas"], bonne: 0, explication: "Want se termine par le son t : la terminaison se prononce /ɪd/ et ajoute une syllabe : want-ed." },
          ],
        },
        {
          titre: "Faux amis et calques",
          blocs: [
            { t: "tableau", titre: "Les faux amis les plus traîtres", entetes: ["Mot anglais", "Vrai sens", "Ne pas confondre avec…"], lignes: [["library", "bibliothèque", "librairie = *bookshop*"], ["actually", "en fait", "actuellement = *currently, now*"], ["eventually", "finalement", "éventuellement = *possibly*"], ["sensible", "raisonnable", "sensible = *sensitive*"], ["to attend", "assister à", "attendre = *to wait*"], ["travel", "voyage", "travail = *work*"]] },
            { t: "attention", md: "Les **calques** traduisent le français mot à mot. Corrige-les :\n\n• « I am agree » → *I **agree***. (agree est un verbe)\n• « Explain me » → *Explain it **to** me*. (on explique quelque chose **à** quelqu'un)\n• « I'm interested by » → *I'm interested **in** history*." },
          ],
        },
        {
          titre: "Écrire et chercher un mot",
          blocs: [
            { t: "etapes", titre: "Chercher un mot dans un dictionnaire bilingue", items: [{ titre: "Choisir la bonne partie", md: "Anglais-français pour comprendre, français-anglais pour écrire." }, { titre: "Trouver le mot", md: "Grâce à l'ordre alphabétique et aux mots repères en haut de page." }, { titre: "Vérifier la nature", md: "Nom (n.), verbe (v.), adjectif (adj.) : *book* peut être un livre (n.) ou réserver (v.)." }, { titre: "Choisir le bon sens", md: "Celui qui correspond au contexte de ta phrase." }] },
            { t: "exemple", titre: "Un paragraphe argumenté", md: "*Firstly, I think school uniforms are practical. Moreover, they are cheap. However, some pupils find them boring. To conclude, I agree with uniforms, but they should be comfortable.*\n\n**Firstly** (premièrement), **moreover** (de plus), **however** (cependant), **to conclude** (pour conclure) : le lecteur suit ton raisonnement sans effort. Tu peux aussi employer *for example* et *on the other hand* (d'un autre côté)." },
          ],
        },
      ],
      bilan: "Une syllabe forte par mot, une voix qui monte pour yes ou no, trois sons pour -ed, des faux amis démasqués et des mots de liaison bien placés : ton anglais sonne juste.",
    },
  },
};
