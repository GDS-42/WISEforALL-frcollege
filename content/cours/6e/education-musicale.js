// Cours ÉCLORE — 6e Éducation musicale. Schéma : docs/COURS.md
export default {
  id: "6e-education-musicale",
  chapitres: {
    "6e-education-musicale-01-parametres-du-son": {
      accroche: "Les yeux fermés, tu reconnais la voix de ton meilleur ami parmi cent autres. Comment ton oreille fait-elle ? Elle analyse, sans que tu y penses, quatre caractéristiques du son.",
      objectifs: [
        "Nommer les quatre paramètres du son : hauteur, durée, intensité, timbre",
        "Utiliser le vocabulaire des nuances : pp, p, mf, f, crescendo…",
        "Reconnaître à l'oreille un son grave ou aigu et un timbre",
      ],
      sections: [
        {
          titre: "Quatre paramètres pour décrire un son",
          blocs: [
            { t: "texte", md: "Un son naît d'une **vibration** : une corde, une peau de tambour, une colonne d'air ou tes cordes vocales tremblent et font vibrer l'air jusqu'à ton oreille. Pour décrire n'importe quel son, les musiciens utilisent quatre questions : est-il haut ou bas ? long ou court ? fort ou doux ? et qui le produit ?" },
            { t: "tableau", titre: "Les quatre paramètres du son", entetes: ["Paramètre", "La question", "Les mots pour le dire"], lignes: [["**Hauteur**", "Haut ou bas ?", "Grave, médium, aigu"], ["**Durée**", "Long ou court ?", "Long, court ; ronde, noire, croche…"], ["**Intensité**", "Fort ou doux ?", "Nuances : pp, p, mf, f, ff"], ["**Timbre**", "Qui joue ?", "La « couleur » du son : flûte, violon, voix…"]] },
            { t: "exemple", titre: "Un seul paramètre change", md: "Une flûte et un violoncelle jouent la **même note**, aussi longtemps et aussi fort : tu entends pourtant la différence. C'est le **timbre** qui change. Si maintenant la flûte joue une note plus haute, c'est la **hauteur** qui change." },
          ],
        },
        {
          titre: "La hauteur : grave ou aigu",
          blocs: [
            { t: "definition", terme: "Hauteur", md: "Le paramètre qui distingue un son **grave** (bas, comme la voix d'un ours) d'un son **aigu** (haut, comme le chant d'un oiseau). Elle dépend de la vitesse de la vibration : plus elle est rapide, plus le son est aigu." },
            { t: "schema", titre: "Une corde, deux sons", legende: "La corde longue et épaisse vibre lentement : son grave. La corde courte et fine vibre vite : son aigu.", svg: `<svg viewBox="0 0 400 200"><line class="trait" x1="40" y1="60" x2="300" y2="60" stroke-width="5"/><path class="pointille" d="M40 60 Q105 30 170 60 Q235 90 300 60" fill="none"/><circle class="aplat-fort" cx="40" cy="60" r="5"/><circle class="aplat-fort" cx="300" cy="60" r="5"/><text class="texte" x="170" y="105" text-anchor="middle">longue et épaisse</text><text class="texte-main" x="320" y="66">grave</text><line class="trait-fin" x1="40" y1="150" x2="170" y2="150"/><path class="pointille" d="M40 150 Q56 138 72 150 Q88 162 105 150 Q121 138 137 150 Q153 162 170 150" fill="none"/><circle class="aplat-fort" cx="40" cy="150" r="4"/><circle class="aplat-fort" cx="170" cy="150" r="4"/><text class="texte" x="105" y="185" text-anchor="middle">courte et fine</text><text class="texte-main" x="190" y="156">aigu</text></svg>` },
            { t: "savais-tu", md: "La hauteur se mesure en **hertz** (Hz), le nombre de vibrations par seconde. Le *la* qui sert à accorder l'orchestre vibre 440 fois par seconde : 440 Hz." },
            { t: "verifie", q: "Un son produit par une corde courte et fine est :", choix: ["Grave", "Aigu", "Fort"], bonne: 1, explication: "Une corde courte et fine vibre plus vite, ce qui donne un son aigu. Fort concerne l'intensité, pas la hauteur." },
          ],
        },
        {
          titre: "L'intensité et les nuances",
          blocs: [
            { t: "definition", terme: "Intensité", md: "Le paramètre qui dit si un son est **fort** ou **doux**. On la mesure en **décibels** (dB). En musique, on l'indique sur la partition avec des **nuances**, des mots italiens abrégés." },
            { t: "schema", titre: "Les nuances, du plus doux au plus fort", legende: "Le soufflet qui s'ouvre est le signe du crescendo ; refermé, c'est un decrescendo.", svg: `<svg viewBox="0 0 400 180"><path class="trait" d="M370 50 L40 90 L370 130" fill="none"/><text class="texte-main" x="45" y="160" text-anchor="middle">pp</text><text class="texte-main" x="105" y="160" text-anchor="middle">p</text><text class="texte-main" x="165" y="160" text-anchor="middle">mp</text><text class="texte-main" x="230" y="160" text-anchor="middle">mf</text><text class="texte-main" x="295" y="160" text-anchor="middle">f</text><text class="texte-main" x="360" y="160" text-anchor="middle">ff</text><text class="texte-petit" x="40" y="30">très doux</text><text class="texte-petit" x="370" y="30" text-anchor="end">très fort</text><text class="texte-pigment" x="200" y="95" text-anchor="middle">crescendo</text></svg>` },
            { t: "tableau", titre: "Que signifient les nuances ?", entetes: ["Signe", "Nom italien", "Signification"], lignes: [["*pp*", "pianissimo", "très doux"], ["*p*", "piano", "doux"], ["*mp*", "mezzo piano", "moyennement doux"], ["*mf*", "mezzo forte", "moyennement fort"], ["*f*", "forte", "fort"], ["*ff*", "fortissimo", "très fort"]] },
            { t: "propriete", titre: "Crescendo et decrescendo", md: "Un **crescendo** augmente l'intensité **peu à peu** ; un **decrescendo** la diminue peu à peu. Ce ne sont pas des sauts brusques, mais des changements progressifs." },
            { t: "graphique", type: "barres", titre: "Quelques sons et leur intensité", unite: "dB", donnees: [{ label: "Chuchotement", valeur: 30 }, { label: "Conversation", valeur: 60 }, { label: "Cour de récré", valeur: 80 }, { label: "Orchestre ff", valeur: 100 }, { label: "Concert amplifié", valeur: 110 }] },
            { t: "attention", md: "*Mezzo forte* (mf) veut dire « moyennement fort » : c'est **moins** fort que *forte* (f). Et au-delà d'environ 85 dB pendant longtemps, l'oreille s'abîme : protège-la en concert !" },
          ],
        },
        {
          titre: "Durée et timbre",
          blocs: [
            { t: "texte", md: "La **durée** dit si un son est long ou court. C'est elle que l'on écrit avec les figures de notes : ronde, blanche, noire, croche (tu les étudieras en détail dans le chapitre sur le rythme).\n\nLe **timbre** est la **couleur** du son. Il permet de reconnaître un instrument ou une voix, même quand ils jouent la même note, à la même nuance, pendant la même durée. C'est grâce au timbre que tu reconnais la voix d'un ami les yeux fermés." },
            { t: "verifie", q: "On joue le même la, à la même nuance, d'abord au piano puis à la trompette. Qu'est-ce qui change ?", choix: ["La hauteur", "L'intensité", "Le timbre", "La durée"], bonne: 2, explication: "Même note, même nuance : seul l'instrument change, donc le timbre." },
            { t: "astuce", md: "Pour retenir les quatre paramètres, pense à la phrase : « **H**ier, **D**avid **I**nvente des **T**ambours » : **H**auteur, **D**urée, **I**ntensité, **T**imbre." },
          ],
        },
      ],
      bilan: "Hauteur, durée, intensité, timbre : avec ces quatre mots, tu peux décrire n'importe quel son, du chuchotement à l'orchestre fortissimo.",
    },

    "6e-education-musicale-02-pulsation-tempo-rythme": {
      accroche: "Quand une musique te plaît, ton pied se met à taper tout seul. Sans le savoir, tu viens de trouver la pulsation : le cœur qui bat sous chaque morceau.",
      objectifs: [
        "Distinguer pulsation, tempo et rythme",
        "Lire les figures de durée : ronde, blanche, noire, croche",
        "Connaître les indications de tempo, de lento à presto",
      ],
      sections: [
        {
          titre: "La pulsation, le cœur de la musique",
          blocs: [
            { t: "definition", terme: "Pulsation", md: "Le **battement régulier** de la musique, comme un cœur qui bat. On peut la frapper dans ses mains ou la marquer avec le pied. Elle ne change pas pendant le morceau." },
            { t: "definition", terme: "Rythme", md: "L'organisation des **durées longues et courtes** posées sur la pulsation. Le rythme change sans cesse, la pulsation reste régulière." },
            { t: "schema", titre: "Pulsation et rythme dans « Frère Jacques »", legende: "La pulsation bat 4 fois de façon régulière ; le rythme de « Son-nez les ma-ti-nes » mêle des sons courts et des sons plus longs.", svg: `<svg viewBox="0 0 400 170"><text class="texte-petit" x="6" y="54">pulsation</text><line class="trait-fin" x1="60" y1="50" x2="380" y2="50"/><circle class="aplat-fort" cx="80" cy="50" r="8"/><circle class="aplat-fort" cx="160" cy="50" r="8"/><circle class="aplat-fort" cx="240" cy="50" r="8"/><circle class="aplat-fort" cx="320" cy="50" r="8"/><text class="texte-petit" x="6" y="114">rythme</text><rect class="aplat trait-fin" x="62" y="96" width="36" height="26"/><rect class="aplat trait-fin" x="102" y="96" width="36" height="26"/><rect class="aplat trait-fin" x="142" y="96" width="36" height="26"/><rect class="aplat trait-fin" x="182" y="96" width="36" height="26"/><rect class="aplat-fort trait-fin" x="222" y="96" width="76" height="26"/><rect class="aplat-fort trait-fin" x="302" y="96" width="76" height="26"/><text class="texte" x="80" y="114" text-anchor="middle">Son</text><text class="texte" x="120" y="114" text-anchor="middle">nez</text><text class="texte" x="160" y="114" text-anchor="middle">les</text><text class="texte" x="200" y="114" text-anchor="middle">ma</text><text class="texte" x="260" y="114" text-anchor="middle">ti</text><text class="texte" x="340" y="114" text-anchor="middle">nes</text><text class="texte-petit" x="140" y="150" text-anchor="middle">croches (½ temps)</text><text class="texte-petit" x="300" y="150" text-anchor="middle">noires (1 temps)</text></svg>` },
            { t: "verifie", q: "Le rythme et la pulsation sont-ils la même chose ?", choix: ["Oui, ce sont deux mots pour la même idée", "Non : la pulsation est régulière, le rythme organise des durées variées"], bonne: 1, explication: "La pulsation est le battement régulier ; le rythme, ce sont les sons longs et courts placés dessus." },
          ],
        },
        {
          titre: "Le tempo : la vitesse",
          blocs: [
            { t: "definition", terme: "Tempo", md: "La **vitesse de la pulsation**. On l'indique en début de partition par un mot italien, ou en **battements par minute** grâce au **métronome**, un appareil qui bat la pulsation à la vitesse choisie." },
            { t: "tableau", titre: "Les indications de tempo, du plus lent au plus rapide", entetes: ["Mot italien", "Signification", "Environ (battements/min)"], lignes: [["**Lento**", "Lent", "40 à 60"], ["**Adagio**", "À l'aise, lent", "60 à 76"], ["**Andante**", "Allant, au pas tranquille", "76 à 108"], ["**Moderato**", "Modéré", "108 à 120"], ["**Allegro**", "Rapide et joyeux", "120 à 168"], ["**Presto**", "Très rapide", "168 à 200"]] },
            { t: "astuce", md: "*Andante* vient de l'italien *andare*, « marcher » : c'est la vitesse d'une promenade. Ton cœur au repos bat à peu près à ce tempo !" },
          ],
        },
        {
          titre: "Les figures de durée",
          blocs: [
            { t: "texte", md: "Pour écrire la durée d'un son, on utilise des **figures de notes**. Chacune a une forme reconnaissable : tête vide ou pleine, avec ou sans hampe (le petit bâton), avec ou sans crochet." },
            { t: "schema", titre: "Ronde, blanche, noire, croche", legende: "Chaque figure vaut la moitié de la précédente.", svg: `<svg viewBox="0 0 400 200"><ellipse cx="55" cy="110" rx="12" ry="8" fill="none" stroke="var(--encre)" stroke-width="3" transform="rotate(-20 55 110)"/><ellipse cx="150" cy="110" rx="11" ry="7.5" fill="none" stroke="var(--encre)" stroke-width="2.5" transform="rotate(-20 150 110)"/><line x1="160" y1="107" x2="160" y2="45" stroke="var(--encre)" stroke-width="2"/><ellipse cx="245" cy="110" rx="11" ry="7.5" fill="var(--encre)" transform="rotate(-20 245 110)"/><line x1="255" y1="107" x2="255" y2="45" stroke="var(--encre)" stroke-width="2"/><ellipse cx="340" cy="110" rx="11" ry="7.5" fill="var(--encre)" transform="rotate(-20 340 110)"/><line x1="350" y1="107" x2="350" y2="45" stroke="var(--encre)" stroke-width="2"/><path d="M350 45 Q356 62 372 70 Q378 80 370 92" fill="none" stroke="var(--encre)" stroke-width="2.5"/><text class="texte" x="55" y="150" text-anchor="middle">ronde</text><text class="texte" x="150" y="150" text-anchor="middle">blanche</text><text class="texte" x="245" y="150" text-anchor="middle">noire</text><text class="texte" x="340" y="150" text-anchor="middle">croche</text><text class="texte-pigment" x="55" y="176" text-anchor="middle">4 temps</text><text class="texte-pigment" x="150" y="176" text-anchor="middle">2 temps</text><text class="texte-pigment" x="245" y="176" text-anchor="middle">1 temps</text><text class="texte-pigment" x="340" y="176" text-anchor="middle">½ temps</text></svg>` },
            { t: "propriete", titre: "Les équivalences", md: "1 ronde = 2 blanches = 4 noires = 8 croches.\nDonc **deux croches valent une noire**.\n\nUn **point** placé après une note augmente sa durée **de moitié** : une blanche pointée vaut 2 + 1 = **3 temps**." },
            { t: "verifie", q: "Combien de temps dure une blanche pointée ?", choix: ["2 temps", "2 temps et demi", "3 temps", "4 temps"], bonne: 2, explication: "La blanche vaut 2 temps ; le point ajoute la moitié, soit 1 temps. Total : 3 temps." },
          ],
        },
        {
          titre: "La mesure",
          blocs: [
            { t: "definition", terme: "Mesure", md: "Un groupe de temps égaux (2, 3 ou 4 temps) qui se répète. Les mesures sont séparées par des **barres de mesure**. Le **premier temps** de chaque mesure est le **temps fort**." },
            { t: "liste", items: ["Mesure à **2 temps** : la marche (« gauche, droite »).", "Mesure à **3 temps** : le balancement de la **valse** (« UN, deux, trois »).", "Mesure à **4 temps** : la plupart des chansons et des musiques actuelles."] },
            { t: "exemple", titre: "Compléter une mesure à 4 temps", etapes: ["La mesure contient déjà une blanche (2 temps) et deux croches (½ + ½ = 1 temps).", "Total déjà écrit : 2 + 1 = 3 temps.", "Il manque 4 − 3 = **1 temps** : on peut ajouter une noire."] },
          ],
        },
      ],
      bilan: "La pulsation bat, le tempo fixe sa vitesse, le rythme danse dessus : ronde 4, blanche 2, noire 1, croche ½, et tu sais lire les durées.",
    },

    "6e-education-musicale-03-la-voix": {
      accroche: "Ton instrument de musique, tu l'as toujours sur toi, tu ne l'as jamais acheté et il est unique au monde : c'est ta voix.",
      objectifs: [
        "Comprendre comment le corps produit la voix",
        "Connaître les tessitures : soprano, alto, ténor, basse",
        "Adopter une posture et une respiration adaptées au chant",
        "Distinguer voix parlée et chantée, soliste et chœur",
      ],
      sections: [
        {
          titre: "Comment naît la voix ?",
          blocs: [
            { t: "texte", md: "Pour chanter, il faut trois choses : du **souffle**, quelque chose qui **vibre**, et des espaces pour **amplifier** le son. Le **diaphragme**, un grand muscle situé sous les poumons, pousse l'air vers le haut. L'air passe dans le **larynx**, où il fait vibrer deux petits replis : les **cordes vocales**. Enfin, la gorge, la bouche et le nez agissent comme une caisse de résonance." },
            { t: "schema", titre: "L'appareil vocal", legende: "L'air poussé par le diaphragme fait vibrer les cordes vocales ; la bouche et le nez amplifient le son.", svg: `<svg viewBox="0 0 400 260"><circle class="aplat-papier trait" cx="200" cy="42" r="28"/><path class="trait-fin" d="M188 56 Q200 62 212 56" fill="none"/><line class="trait" x1="193" y1="70" x2="193" y2="140"/><line class="trait" x1="207" y1="70" x2="207" y2="140"/><rect class="aplat-fort" x="190" y="86" width="20" height="14"/><ellipse class="aplat trait" cx="165" cy="175" rx="32" ry="46"/><ellipse class="aplat trait" cx="235" cy="175" rx="32" ry="46"/><path class="trait" d="M120 236 Q200 206 280 236" fill="none" stroke-width="3"/><path class="pointille" d="M200 214 L200 112" marker-end="url(#fl-p)"/><text class="texte" x="250" y="30">bouche et nez</text><text class="texte-petit" x="250" y="46">(résonance)</text><path class="trait-fin" d="M246 34 L226 40" marker-end="url(#fl)"/><text class="texte" x="250" y="92">larynx</text><text class="texte-petit" x="250" y="108">(cordes vocales)</text><path class="trait-fin" d="M246 94 L214 94" marker-end="url(#fl)"/><text class="texte" x="20" y="175">poumons</text><path class="trait-fin" d="M82 172 L128 175" marker-end="url(#fl)"/><text class="texte" x="290" y="246">diaphragme</text><text class="texte-main" x="80" y="120">air</text></svg>` },
            { t: "verifie", q: "Quel muscle, situé sous les poumons, pousse l'air quand on chante ?", choix: ["Le cœur", "Le diaphragme", "Le larynx"], bonne: 1, explication: "Le diaphragme pousse l'air vers le haut. Le larynx contient les cordes vocales, qui vibrent au passage de l'air." },
          ],
        },
        {
          titre: "Les tessitures",
          blocs: [
            { t: "definition", terme: "Tessiture", md: "L'étendue des notes qu'une voix peut chanter **confortablement**, du grave à l'aigu." },
            { t: "tableau", titre: "Les quatre voix d'un chœur mixte", entetes: ["Tessiture", "Voix de…", "Registre"], lignes: [["**Soprano**", "femme (ou enfant)", "la plus aiguë"], ["**Alto**", "femme", "plus grave que la soprano"], ["**Ténor**", "homme", "voix d'homme aiguë"], ["**Basse**", "homme", "la plus grave"]] },
            { t: "texte", md: "Ta voix d'enfant est proche de celle d'une soprano ou d'une alto. À l'adolescence, la voix des garçons descend d'environ une **octave** (huit notes) : c'est la **mue**. Pendant quelques mois, elle peut « dérailler ». La voix des filles change aussi, plus légèrement." },
          ],
        },
        {
          titre: "Bien se préparer à chanter",
          blocs: [
            { t: "etapes", titre: "Se préparer à chanter", items: [{ titre: "La posture", md: "Debout, droit et détendu, les pieds à plat au sol, les épaules relâchées." }, { titre: "La respiration", md: "Inspire profondément **par le ventre** : il se gonfle, les épaules ne montent pas." }, { titre: "L'échauffement", md: "Fais des **vocalises** : sirènes, « mmm » bouche fermée, gammes sur « a »." }, { titre: "Le chant", md: "Chante le morceau en articulant, en écoutant les autres." }] },
            { t: "attention", md: "Crier n'est pas chanter fort ! Forcer la voix abîme les cordes vocales. Une voix puissante vient du **souffle** bien soutenu, pas de la gorge serrée." },
            { t: "propriete", titre: "Voix parlée et voix chantée", md: "La **voix parlée** glisse sans tenir de hauteur précise. La **voix chantée** tient des **notes précises**, souvent plus longues et plus aiguës." },
          ],
        },
        {
          titre: "Chanter seul ou ensemble",
          blocs: [
            { t: "liste", titre: "Les formations vocales", items: ["**Soliste** : une personne chante seule.", "**Duo** : deux personnes chantent ensemble.", "**Chœur** : un grand groupe chante ensemble, dirigé par le **chef de chœur**."] },
            { t: "definition", terme: "A cappella", md: "Chanter **sans accompagnement instrumental**, seulement avec les voix." },
            { t: "exemple", titre: "Unisson ou plusieurs voix ?", md: "Quand toute la chorale chante **la même mélodie en même temps**, elle chante à l'**unisson**. Quand les sopranos chantent une mélodie pendant que les altos en chantent une autre, le chœur chante **à plusieurs voix**." },
            { t: "verifie", q: "Comment s'appelle la personne qui dirige un chœur ?", choix: ["Le soliste", "Le chef de chœur", "Le ténor"], bonne: 1, explication: "Le chef de chœur indique les départs, le tempo et les nuances. Le soliste chante seul ; le ténor est une tessiture." },
          ],
        },
      ],
      bilan: "Le diaphragme souffle, les cordes vocales vibrent, la bouche résonne : soprano, alto, ténor ou basse, ta voix est un instrument à soigner et à partager.",
    },

    "6e-education-musicale-04-les-instruments": {
      accroche: "Un saxophone en métal brillant qui n'est pas un cuivre, un piano qui cache des cordes : les familles d'instruments réservent des surprises. Le secret, c'est de chercher ce qui vibre.",
      objectifs: [
        "Classer les instruments par famille",
        "Expliquer comment chaque famille produit le son",
        "Connaître l'organisation de l'orchestre et le rôle du chef",
      ],
      sections: [
        {
          titre: "Classer : chercher ce qui vibre",
          blocs: [
            { t: "texte", md: "Pour ranger un instrument dans une famille, on ne regarde **pas** sa matière, mais la façon dont il **produit le son**. Pose-toi toujours la question : « Qu'est-ce qui vibre ? » Une corde, une colonne d'air, une peau, un morceau de métal, ou un circuit électronique ?" },
            { t: "tableau", titre: "Les familles d'instruments", entetes: ["Famille", "Comment naît le son", "Exemples"], lignes: [["**Cordes frottées**", "Un **archet** frotte la corde", "Violon, alto, violoncelle, contrebasse"], ["**Cordes pincées**", "Les doigts pincent la corde", "Guitare, harpe"], ["**Cordes frappées**", "Des marteaux frappent les cordes", "Piano"], ["**Bois**", "L'air vibre sur un biseau ou une **anche** en roseau", "Flûte, hautbois, clarinette, basson, saxophone"], ["**Cuivres**", "Les **lèvres** du musicien vibrent dans l'embouchure", "Trompette, cor, trombone, tuba"], ["**Percussions**", "On frappe, secoue ou gratte", "Tambour, timbales, xylophone, triangle, cymbales"], ["**Claviers**", "On enfonce des touches", "Piano, orgue, clavecin"], ["**Électroniques**", "L'électricité fabrique le son", "Synthétiseur, boîte à rythmes"]] },
            { t: "exemple", titre: "Le piège du saxophone", md: "Le saxophone est en **métal**, mais c'est un **bois** : son son naît d'une **anche** en roseau qui vibre contre le bec, exactement comme pour la clarinette. La trompette, elle, est un **cuivre** parce que ce sont les **lèvres** du musicien qui vibrent dans l'embouchure." },
            { t: "verifie", q: "Pourquoi la clarinette est-elle classée dans les bois ?", choix: ["Parce qu'elle est toujours en bois", "Parce que son son naît d'une anche qui vibre", "Parce qu'elle est grave"], bonne: 1, explication: "On classe selon la production du son : l'anche de la clarinette vibre, comme celle du saxophone, qui est pourtant en métal." },
          ],
        },
        {
          titre: "Les cordes, du plus aigu au plus grave",
          blocs: [
            { t: "texte", md: "Les quatre cordes frottées se ressemblent, mais leur taille est très différente. Rappelle-toi la règle du chapitre sur le son : **plus la corde est longue, plus le son est grave**. Le violon, le plus petit, est le plus aigu ; la contrebasse, plus grande qu'un adulte, est la plus grave. Chacun de ces instruments a **4 cordes**." },
            { t: "graphique", type: "barres", titre: "Longueur approximative des cordes frottées", unite: "cm", donnees: [{ label: "Violon", valeur: 60 }, { label: "Alto", valeur: 68 }, { label: "Violoncelle", valeur: 122 }, { label: "Contrebasse", valeur: 180 }] },
            { t: "attention", md: "L'**alto** est à la fois un instrument (un violon un peu plus grand) et une tessiture de voix de femme. Le contexte te dit de quoi l'on parle." },
            { t: "savais-tu", md: "Le piano est un instrument à clavier, mais on le classe aussi parmi les **cordes frappées** : quand tu enfonces une touche, un petit marteau feutré frappe une corde tendue." },
          ],
        },
        {
          titre: "L'orchestre symphonique",
          blocs: [
            { t: "definition", terme: "Orchestre symphonique", md: "Un grand ensemble (souvent 60 à 100 musiciens) qui réunit **toutes les familles** : cordes, bois, cuivres et percussions, parfois une harpe et un piano." },
            { t: "schema", titre: "La place des familles dans l'orchestre", legende: "Vue de dessus : les cordes devant, les instruments puissants au fond, tous tournés vers le chef.", svg: `<svg viewBox="0 0 400 265"><path class="aplat-papier trait-fin" d="M0 235 A200 200 0 0 1 400 235 Z"/><path class="aplat trait-fin" d="M28 235 A172 172 0 0 1 372 235 Z"/><path class="aplat-papier trait-fin" d="M58 235 A142 142 0 0 1 342 235 Z"/><path class="aplat trait-fin" d="M90 235 A110 110 0 0 1 310 235 Z"/><circle class="aplat-fort trait" cx="200" cy="235" r="22"/><text class="texte" x="200" y="56" text-anchor="middle">percussions</text><text class="texte" x="200" y="86" text-anchor="middle">cuivres</text><text class="texte" x="200" y="118" text-anchor="middle">bois</text><text class="texte" x="200" y="170" text-anchor="middle">cordes</text><text class="texte-petit" x="200" y="239" text-anchor="middle">chef</text><text class="texte-main" x="200" y="260" text-anchor="middle">public</text></svg>` },
            { t: "propriete", titre: "Le rôle du chef d'orchestre", md: "Face aux musiciens, le **chef d'orchestre** donne le **tempo** et les **départs**, indique les **nuances** et fait respecter son interprétation de l'œuvre, avec sa baguette et ses gestes." },
            { t: "verifie", q: "Dans un orchestre symphonique, qui donne le départ et le tempo à tous les musiciens ?", choix: ["Le premier violon", "Le chef d'orchestre", "Le percussionniste"], bonne: 1, explication: "Le chef d'orchestre dirige l'ensemble : départs, tempo, nuances." },
          ],
        },
      ],
      bilan: "Corde, air, lèvres, peau ou électricité : cherche ce qui vibre et tu trouveras la famille ; réunis-les toutes devant un chef et tu obtiens un orchestre.",
    },

    "6e-education-musicale-05-formes-et-reperes": {
      accroche: "Pourquoi as-tu toujours le refrain d'une chanson dans la tête, et jamais les couplets ? Parce que les musiciens construisent leurs morceaux comme des architectes, avec des parties qui reviennent.",
      objectifs: [
        "Reconnaître des formes simples : couplet et refrain, canon, thème",
        "Situer des repères : Antiquité, Moyen Âge, Renaissance, baroque",
        "Découvrir des musiques du monde et leurs instruments",
      ],
      sections: [
        {
          titre: "Couplet, refrain et thème",
          blocs: [
            { t: "propriete", titre: "La forme couplet-refrain", md: "Dans une chanson, le **couplet** garde la même musique mais **change de paroles** à chaque fois : il fait avancer l'histoire. Le **refrain** revient avec **les mêmes paroles et la même musique** : c'est pour cela qu'on le retient si vite." },
            { t: "texte", md: "Le plan d'une chanson ressemble souvent à ceci : introduction, couplet 1, **refrain**, couplet 2, **refrain**, couplet 3, **refrain**. Le retour régulier du refrain sert de repère à l'oreille." },
            { t: "definition", terme: "Thème", md: "La **mélodie principale** d'un morceau, celle que l'on reconnaît et que l'on fredonne. Elle peut revenir plusieurs fois, parfois transformée (plus lente, à un autre instrument…)." },
          ],
        },
        {
          titre: "Le canon",
          blocs: [
            { t: "definition", terme: "Canon", md: "Une même mélodie chantée par plusieurs groupes qui **commencent à tour de rôle**, chacun en décalé. Les voix se superposent et s'accordent." },
            { t: "schema", titre: "« Frère Jacques » en canon à trois voix", legende: "Chaque groupe entre une phrase plus tard. En lisant une colonne, on entend des phrases différentes en même temps.", svg: `<svg viewBox="0 0 400 200"><text class="texte-petit" x="6" y="60">groupe 1</text><text class="texte-petit" x="6" y="105">groupe 2</text><text class="texte-petit" x="6" y="150">groupe 3</text><rect class="aplat-fort trait-fin" x="70" y="42" width="78" height="28"/><rect class="aplat trait-fin" x="150" y="42" width="78" height="28"/><rect class="aplat-papier trait-fin" x="230" y="42" width="78" height="28"/><rect class="aplat trait-fin" x="310" y="42" width="78" height="28"/><rect class="aplat-fort trait-fin" x="150" y="87" width="78" height="28"/><rect class="aplat trait-fin" x="230" y="87" width="78" height="28"/><rect class="aplat-papier trait-fin" x="310" y="87" width="78" height="28"/><rect class="aplat-fort trait-fin" x="230" y="132" width="78" height="28"/><rect class="aplat trait-fin" x="310" y="132" width="78" height="28"/><text class="texte" x="109" y="61" text-anchor="middle">A</text><text class="texte" x="189" y="61" text-anchor="middle">B</text><text class="texte" x="269" y="61" text-anchor="middle">C</text><text class="texte" x="349" y="61" text-anchor="middle">D</text><text class="texte" x="189" y="106" text-anchor="middle">A</text><text class="texte" x="269" y="106" text-anchor="middle">B</text><text class="texte" x="349" y="106" text-anchor="middle">C</text><text class="texte" x="269" y="151" text-anchor="middle">A</text><text class="texte" x="349" y="151" text-anchor="middle">B</text><text class="texte-petit" x="70" y="184">A : Frère Jacques ; B : Dormez-vous ?</text><text class="texte-petit" x="70" y="198">C : Sonnez les matines ; D : Din, din, don</text><path class="trait-fin" d="M70 26 L388 26" marker-end="url(#fl)"/><text class="texte-main" x="229" y="20" text-anchor="middle">le temps passe</text></svg>` },
            { t: "verifie", q: "« Frère Jacques » peut-il se chanter en canon ?", choix: ["Oui", "Non, il faut des mélodies différentes"], bonne: 0, explication: "Oui : chaque groupe chante la même mélodie en commençant plus tard. Les phrases se superposent et sonnent bien ensemble." },
          ],
        },
        {
          titre: "Des repères dans l'histoire de la musique",
          blocs: [
            { t: "frise", titre: "De l'Antiquité au baroque", evenements: [{ date: -500, label: "Grèce antique", detail: "On chante en s'accompagnant de la lyre (cordes pincées) et de l'aulos (double hautbois)." }, { date: 800, label: "Chant grégorien", detail: "Moyen Âge : chant religieux en latin, à l'unisson et sans instrument." }, { date: 1150, label: "Troubadours", detail: "Poètes musiciens qui chantent l'amour dans les cours seigneuriales." }, { date: 1500, label: "Renaissance", detail: "Polyphonies à plusieurs voix, luth (XVe-XVIe siècles)." }, { date: 1600, label: "Début du baroque", detail: "Naissance de l'opéra ; le clavecin est roi." }, { date: 1725, label: "Les Quatre Saisons", detail: "Antonio Vivaldi publie ses quatre concertos pour violon." }, { date: 1750, label: "Mort de Bach", detail: "On situe là la fin de l'époque baroque." }] },
            { t: "definition", terme: "Chant grégorien", md: "Chant **religieux** du Moyen Âge, en **latin**, chanté par des moines à l'**unisson** (tous la même mélodie) et **sans instrument**." },
            { t: "exemple", titre: "Écouter « Le Printemps » de Vivaldi", md: "*Les Quatre Saisons* (1725) sont **quatre concertos** : un par saison. Dans un **concerto**, un **soliste** (ici le violon) dialogue avec l'orchestre. Dans « Le Printemps », le violon soliste imite le chant des oiseaux, puis l'orchestre reprend le **thème** principal : on reconnaît son retour, comme un refrain." },
            { t: "savais-tu", md: "Le **clavecin**, star de l'époque baroque, ressemble à un piano, mais ses cordes sont **pincées** par de petits becs au lieu d'être frappées : d'où son son métallique et sautillant." },
            { t: "verifie", q: "Quelle période vient juste après le Moyen Âge ?", choix: ["L'Antiquité", "La Renaissance", "Le baroque"], bonne: 1, explication: "L'ordre est : Antiquité, Moyen Âge, Renaissance (XVe-XVIe siècles), puis baroque (1600-1750)." },
          ],
        },
        {
          titre: "Musiques du monde",
          blocs: [
            { t: "texte", md: "Chaque région du monde a inventé ses instruments, avec les matériaux qu'elle avait sous la main : bois, peaux, bambou, calebasses… Écouter ces musiques, c'est voyager avec les oreilles." },
            { t: "tableau", titre: "Quatre instruments, quatre régions", entetes: ["Instrument", "Région", "Famille et jeu"], lignes: [["**Djembé**", "Afrique de l'Ouest", "Percussion : tambour en bois couvert d'une peau, frappé à mains nues"], ["**Sitar**", "Inde", "Cordes pincées, long manche, son vibrant"], ["**Didgeridoo**", "Australie", "Vent : long tube de bois creusé par les termites, les lèvres vibrent"], ["**Cornemuse**", "Écosse (et Bretagne)", "Vent : un sac d'air alimente des tuyaux à anche"]] },
          ],
        },
      ],
      bilan: "Couplets qui avancent, refrain qui revient, canon qui se décale : des moines grégoriens à Vivaldi, la musique se construit avec des formes et voyage à travers les époques et les continents.",
    },

    "6e-education-musicale-06-lire-la-musique": {
      accroche: "Une partition ressemble à un code secret : cinq lignes, des ronds noirs ou blancs, un drôle de signe enroulé. Une fois le code connu, tu peux lire une mélodie que tu n'as jamais entendue.",
      objectifs: [
        "Connaître la portée, la clé de sol et le nom des notes",
        "Reconnaître les silences et la barre de mesure",
        "Utiliser le vocabulaire : mélodie, harmonie, a cappella, soliste",
      ],
      sections: [
        {
          titre: "La portée et la clé de sol",
          blocs: [
            { t: "definition", terme: "Portée", md: "L'ensemble de **5 lignes** horizontales et des **4 interlignes** (les espaces entre elles) sur lesquels on écrit les notes. On compte les lignes **de bas en haut**. Plus une note est placée haut, plus elle est **aiguë**." },
            { t: "propriete", titre: "La clé de sol", md: "Placée au début de la portée, la **clé de sol** s'enroule autour de la **2e ligne** : elle indique que les notes posées sur cette ligne s'appellent **sol**. Toutes les autres notes se lisent à partir de ce repère." },
            { t: "schema", titre: "Les notes en clé de sol", legende: "Sur les lignes : mi, sol, si, ré, fa. Dans les interlignes : fa, la, do, mi.", svg: `<svg viewBox="0 0 400 175"><line class="trait-fin" x1="20" y1="60" x2="390" y2="60"/><line class="trait-fin" x1="20" y1="75" x2="390" y2="75"/><line class="trait-fin" x1="20" y1="90" x2="390" y2="90"/><line class="trait" x1="20" y1="105" x2="390" y2="105"/><line class="trait-fin" x1="20" y1="120" x2="390" y2="120"/><text class="texte-petit" x="8" y="124">1</text><text class="texte-petit" x="8" y="109">2</text><text class="texte-petit" x="8" y="94">3</text><text class="texte-petit" x="8" y="79">4</text><text class="texte-petit" x="8" y="64">5</text><path d="M38 146 C30 146 30 136 38 136 C44 136 44 146 40 148 L44 40 C46 30 56 34 52 46 C48 60 26 78 26 100 C26 116 50 120 54 106 C58 94 42 88 36 98 C32 106 40 110 42 108" fill="none" stroke="var(--encre)" stroke-width="2.5"/><ellipse cx="95" cy="120" rx="8" ry="5.5" fill="none" stroke="var(--encre)" stroke-width="2"/><ellipse cx="129" cy="112.5" rx="8" ry="5.5" fill="none" stroke="var(--encre)" stroke-width="2"/><ellipse cx="163" cy="105" rx="8" ry="5.5" fill="var(--pigment)" stroke="var(--encre)" stroke-width="2"/><ellipse cx="197" cy="97.5" rx="8" ry="5.5" fill="none" stroke="var(--encre)" stroke-width="2"/><ellipse cx="231" cy="90" rx="8" ry="5.5" fill="none" stroke="var(--encre)" stroke-width="2"/><ellipse cx="265" cy="82.5" rx="8" ry="5.5" fill="none" stroke="var(--encre)" stroke-width="2"/><ellipse cx="299" cy="75" rx="8" ry="5.5" fill="none" stroke="var(--encre)" stroke-width="2"/><ellipse cx="333" cy="67.5" rx="8" ry="5.5" fill="none" stroke="var(--encre)" stroke-width="2"/><ellipse cx="367" cy="60" rx="8" ry="5.5" fill="none" stroke="var(--encre)" stroke-width="2"/><text class="texte" x="95" y="150" text-anchor="middle">mi</text><text class="texte" x="129" y="150" text-anchor="middle">fa</text><text class="texte-pigment" x="163" y="150" text-anchor="middle">sol</text><text class="texte" x="197" y="150" text-anchor="middle">la</text><text class="texte" x="231" y="150" text-anchor="middle">si</text><text class="texte" x="265" y="150" text-anchor="middle">do</text><text class="texte" x="299" y="150" text-anchor="middle">ré</text><text class="texte" x="333" y="150" text-anchor="middle">mi</text><text class="texte" x="367" y="150" text-anchor="middle">fa</text><text class="texte-main" x="60" y="30">clé de sol → 2e ligne = sol</text></svg>` },
            { t: "exemple", titre: "Lire trois notes", md: "Tu vois une note sur la **2e ligne** : c'est un **sol**, la clé l'indique. La note dans l'interligne juste en dessous est un **fa**, et celle posée sur la **1re ligne** (en bas) est un **mi**." },
            { t: "verifie", q: "En clé de sol, quelle note se trouve sur la première ligne de la portée (celle du bas) ?", choix: ["Do", "Mi", "Sol", "Fa"], bonne: 1, explication: "De bas en haut, les lignes portent mi, sol, si, ré, fa. La première ligne est donc un mi." },
          ],
        },
        {
          titre: "Les sept notes",
          blocs: [
            { t: "texte", md: "Il existe **sept noms de notes** : **do, ré, mi, fa, sol, la, si**. Après le si, on retrouve un do, plus aigu : la gamme recommence. Sur la portée, les notes montent en alternant **ligne, interligne, ligne, interligne**…" },
            { t: "astuce", md: "Pour les lignes, récite la gamme en **sautant une note sur deux** : mi (fa) sol (la) si (do) ré (mi) fa. Tu obtiens **mi, sol, si, ré, fa**. Pour les interlignes, de bas en haut : **fa, la, do, mi** — on dirait « fa la do mi », presque un mot !" },
            { t: "savais-tu", md: "Les noms des notes viennent d'un hymne latin du Moyen Âge : le moine Guido d'Arezzo a pris la première syllabe de chaque vers (*Ut*, *Re*, *Mi*, *Fa*, *Sol*, *La*). L'*ut* est ensuite devenu **do**." },
          ],
        },
        {
          titre: "Les silences et la barre de mesure",
          blocs: [
            { t: "definition", terme: "Silence", md: "Un moment **sans son**, mais d'une **durée précise** : en musique, se taire aussi se compte !" },
            { t: "schema", titre: "Les quatre silences", legende: "La pause pend sous la 4e ligne ; la demi-pause est posée sur la 3e ligne.", svg: `<svg viewBox="0 0 400 175"><line class="trait-fin" x1="20" y1="50" x2="390" y2="50"/><line class="trait-fin" x1="20" y1="65" x2="390" y2="65"/><line class="trait-fin" x1="20" y1="80" x2="390" y2="80"/><line class="trait-fin" x1="20" y1="95" x2="390" y2="95"/><line class="trait-fin" x1="20" y1="110" x2="390" y2="110"/><line class="trait" x1="200" y1="50" x2="200" y2="110"/><rect x="58" y="65" width="24" height="8" fill="var(--encre)"/><rect x="138" y="72" width="24" height="8" fill="var(--encre)"/><path d="M243 56 L254 70 L244 82 L256 96 C246 92 240 98 248 106" fill="none" stroke="var(--encre)" stroke-width="3"/><circle cx="330" cy="72" r="4" fill="var(--encre)"/><path d="M331 75 Q340 77 346 66 L334 104" fill="none" stroke="var(--encre)" stroke-width="2.5"/><text class="texte" x="70" y="135" text-anchor="middle">pause</text><text class="texte" x="150" y="135" text-anchor="middle">demi-pause</text><text class="texte" x="250" y="135" text-anchor="middle">soupir</text><text class="texte" x="340" y="135" text-anchor="middle">demi-soupir</text><text class="texte-pigment" x="70" y="156" text-anchor="middle">4 temps</text><text class="texte-pigment" x="150" y="156" text-anchor="middle">2 temps</text><text class="texte-pigment" x="250" y="156" text-anchor="middle">1 temps</text><text class="texte-pigment" x="340" y="156" text-anchor="middle">½ temps</text><text class="texte-petit" x="200" y="40" text-anchor="middle">barre de mesure</text></svg>` },
            { t: "tableau", titre: "Chaque note a son silence", entetes: ["Durée", "Note", "Silence"], lignes: [["4 temps", "Ronde", "Pause"], ["2 temps", "Blanche", "Demi-pause"], ["1 temps", "Noire", "Soupir"], ["½ temps", "Croche", "Demi-soupir"]] },
            { t: "propriete", titre: "La barre de mesure", md: "Un **trait vertical** qui traverse la portée et **sépare deux mesures**. Il aide à compter les temps et à repérer le temps fort." },
            { t: "attention", md: "Ne confonds pas la **pause** (4 temps, accrochée **sous** la ligne comme un chapeau retourné) et la **demi-pause** (2 temps, posée **sur** la ligne comme un chapeau)." },
          ],
        },
        {
          titre: "Le vocabulaire du musicien",
          blocs: [
            { t: "tableau", titre: "Quatre mots essentiels", entetes: ["Mot", "Définition"], lignes: [["**Mélodie**", "Des notes jouées **les unes après les autres**, que l'on peut chanter"], ["**Harmonie**", "Des notes jouées **en même temps** (les accords)"], ["**A cappella**", "Chanter **sans instrument**"], ["**Soliste**", "La personne qui chante ou joue **seule** devant le groupe"]] },
            { t: "astuce", md: "Sur une partition, la **mélodie** se lit à l'**horizontale** (de gauche à droite) ; l'**harmonie** se lit à la **verticale** (des notes empilées)." },
            { t: "verifie", q: "Des notes jouées en même temps forment :", choix: ["Une mélodie", "Une harmonie", "Un silence"], bonne: 1, explication: "L'harmonie, ce sont des notes superposées, jouées ensemble. La mélodie, ce sont des notes qui se suivent." },
          ],
        },
      ],
      bilan: "Cinq lignes, une clé de sol sur la deuxième, sept notes, des silences qui se comptent : tu as maintenant la clé pour lire une partition.",
    },
  },
};
