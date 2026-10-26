// Cours ÉCLORE — 5e Éducation musicale. Schéma : docs/COURS.md
export default {
  id: "5e-education-musicale",
  chapitres: {
    "5e-education-musicale-01-rythme-temps": {
      accroche: "Pose la main sur ton cœur : il bat régulièrement, sans que tu y penses. La musique a elle aussi un cœur qui bat, la pulsation. Tout le reste, les rythmes, les décalages, les accélérations, se construit sur ce battement.",
      objectifs: [
        "Repérer la pulsation et distinguer une mesure binaire d'une mesure ternaire",
        "Reconnaître une syncope, un ostinato et une polyrythmie",
        "Identifier le tempo et ses variations avec les termes italiens",
      ],
      sections: [
        {
          titre: "La pulsation et la mesure",
          blocs: [
            { t: "definition", terme: "Pulsation", md: "Le **battement régulier** de la musique, celui que tu tapes spontanément du pied. Les pulsations se regroupent en **mesures** de 2, 3 ou 4 **temps**. Le premier temps de chaque mesure est le **temps fort**." },
            { t: "exemple", titre: "Compter une valse et une marche", md: "Tu écoutes une valse : tu comptes « **1**-2-3, **1**-2-3 », avec un appui au début de chaque groupe. C'est une mesure à **3 temps**. Une marche se compte « **1**-2, **1**-2 » : c'est une mesure à **2 temps**." },
            { t: "texte", md: "Pour savoir si une mesure est **binaire** ou **ternaire**, il ne faut pas compter les temps, mais regarder **comment chaque temps se divise** : en deux moitiés (« 1-et, 2-et ») ou en trois tiers (« 1-2-3, 4-5-6 »)." },
          ],
        },
        {
          titre: "Binaire ou ternaire ?",
          blocs: [
            { t: "propriete", titre: "Binaire et ternaire", md: "Une mesure est **binaire** quand chaque temps se divise en **2** (marche, rock : mesures 2/4, 4/4).\nElle est **ternaire** quand chaque temps se divise en **3** (mesure 6/8 : le balancement de la barcarolle, de la gigue)." },
            { t: "schema", titre: "Mesures binaire et ternaire sur la portée rythmique", legende: "En 2/4, deux croches par temps ; en 6/8, trois croches par temps. Les deux mesures ont pourtant 2 temps chacune.", svg: `<svg viewBox="0 0 400 260"><text class="texte" x="20" y="22">Binaire : chaque temps se divise en 2</text><line class="trait-fin" x1="20" y1="70" x2="380" y2="70"/><text class="texte-main" x="32" y="66" text-anchor="middle">2</text><text class="texte-main" x="32" y="86" text-anchor="middle">4</text><line class="trait" x1="210" y1="55" x2="210" y2="85"/><line class="trait" x1="370" y1="55" x2="370" y2="85"/><g fill="var(--encre)"><ellipse cx="75" cy="70" rx="6" ry="4.5" transform="rotate(-20 75 70)"/><ellipse cx="105" cy="70" rx="6" ry="4.5" transform="rotate(-20 105 70)"/><ellipse cx="145" cy="70" rx="6" ry="4.5" transform="rotate(-20 145 70)"/><ellipse cx="175" cy="70" rx="6" ry="4.5" transform="rotate(-20 175 70)"/><ellipse cx="245" cy="70" rx="6" ry="4.5" transform="rotate(-20 245 70)"/><ellipse cx="315" cy="70" rx="6" ry="4.5" transform="rotate(-20 315 70)"/><path d="M80.5 40 L110.5 40 L110.5 44 L80.5 44 Z M150.5 40 L180.5 40 L180.5 44 L150.5 44 Z"/></g><path class="trait" d="M80.5 68 L80.5 40 M110.5 68 L110.5 40 M150.5 68 L150.5 40 M180.5 68 L180.5 40 M250.5 68 L250.5 40 M320.5 68 L320.5 40"/><text class="texte texte-pigment" x="75" y="106" text-anchor="middle">1</text><text class="texte-petit" x="105" y="106" text-anchor="middle">et</text><text class="texte texte-pigment" x="145" y="106" text-anchor="middle">2</text><text class="texte-petit" x="175" y="106" text-anchor="middle">et</text><text class="texte texte-pigment" x="245" y="106" text-anchor="middle">1</text><text class="texte texte-pigment" x="315" y="106" text-anchor="middle">2</text><text class="texte-petit" x="90" y="124" text-anchor="middle">temps 1</text><text class="texte-petit" x="160" y="124" text-anchor="middle">temps 2</text><text class="texte" x="20" y="152">Ternaire : chaque temps se divise en 3</text><line class="trait-fin" x1="20" y1="196" x2="380" y2="196"/><text class="texte-main" x="32" y="192" text-anchor="middle">6</text><text class="texte-main" x="32" y="212" text-anchor="middle">8</text><line class="trait" x1="210" y1="181" x2="210" y2="211"/><line class="trait" x1="370" y1="181" x2="370" y2="211"/><g fill="var(--encre)"><ellipse cx="70" cy="196" rx="6" ry="4.5" transform="rotate(-20 70 196)"/><ellipse cx="95" cy="196" rx="6" ry="4.5" transform="rotate(-20 95 196)"/><ellipse cx="120" cy="196" rx="6" ry="4.5" transform="rotate(-20 120 196)"/><ellipse cx="145" cy="196" rx="6" ry="4.5" transform="rotate(-20 145 196)"/><ellipse cx="170" cy="196" rx="6" ry="4.5" transform="rotate(-20 170 196)"/><ellipse cx="195" cy="196" rx="6" ry="4.5" transform="rotate(-20 195 196)"/><ellipse cx="245" cy="196" rx="6" ry="4.5" transform="rotate(-20 245 196)"/><ellipse cx="315" cy="196" rx="6" ry="4.5" transform="rotate(-20 315 196)"/><circle cx="259" cy="193" r="2.2"/><circle cx="329" cy="193" r="2.2"/><path d="M75.5 166 L125.5 166 L125.5 170 L75.5 170 Z M150.5 166 L200.5 166 L200.5 170 L150.5 170 Z"/></g><path class="trait" d="M75.5 194 L75.5 166 M100.5 194 L100.5 166 M125.5 194 L125.5 166 M150.5 194 L150.5 166 M175.5 194 L175.5 166 M200.5 194 L200.5 166 M250.5 194 L250.5 166 M320.5 194 L320.5 166"/><text class="texte texte-pigment" x="70" y="232" text-anchor="middle">1</text><text class="texte-petit" x="95" y="232" text-anchor="middle">2</text><text class="texte-petit" x="120" y="232" text-anchor="middle">3</text><text class="texte texte-pigment" x="145" y="232" text-anchor="middle">4</text><text class="texte-petit" x="170" y="232" text-anchor="middle">5</text><text class="texte-petit" x="195" y="232" text-anchor="middle">6</text><text class="texte texte-pigment" x="245" y="232" text-anchor="middle">1</text><text class="texte texte-pigment" x="315" y="232" text-anchor="middle">2</text><text class="texte-petit" x="95" y="250" text-anchor="middle">temps 1</text><text class="texte-petit" x="170" y="250" text-anchor="middle">temps 2</text><text class="texte-petit" x="290" y="250" text-anchor="middle">noires pointées</text></svg>` },
            { t: "attention", md: "Une mesure à **3 temps** (3/4, la valse) n'est **pas** forcément ternaire ! Dans une valse, chaque temps se divise le plus souvent en 2 croches : c'est une mesure **binaire à 3 temps**. Ne confonds pas le **nombre de temps** et la **division du temps**." },
            { t: "verifie", q: "Une mesure à 3 temps, comme 3/4, est-elle forcément ternaire ?", choix: ["Oui, 3 temps veut dire ternaire", "Non, ternaire veut dire que chaque temps se divise en 3"], bonne: 1, explication: "Binaire et ternaire décrivent la division de chaque temps, pas le nombre de temps. Le 3/4 de la valse est en général une mesure binaire à 3 temps." },
          ],
        },
        {
          titre: "Syncope, ostinato, polyrythmie",
          blocs: [
            { t: "definition", terme: "Syncope", md: "Une note qui **commence sur un temps faible** (ou une partie faible du temps) et **se prolonge sur le temps fort** suivant. Le temps fort n'est pas frappé : le rythme semble **décalé**, il « boite » avec élégance. On l'entend partout dans le jazz et le reggae." },
            { t: "schema", titre: "Une syncope : croche, noire, croche", legende: "La noire commence sur le « et » du temps 1 et dure pendant le temps 2 : aucune note nouvelle ne tombe sur la pulsation 2.", svg: `<svg viewBox="0 0 400 200"><line class="trait-fin" x1="20" y1="90" x2="390" y2="90"/><text class="texte-main" x="32" y="86" text-anchor="middle">2</text><text class="texte-main" x="32" y="106" text-anchor="middle">4</text><line class="trait" x1="275" y1="75" x2="275" y2="105"/><line class="trait" x1="385" y1="75" x2="385" y2="105"/><g fill="var(--encre)"><ellipse cx="80" cy="90" rx="6" ry="4.5" transform="rotate(-20 80 90)"/><ellipse cx="130" cy="90" rx="6" ry="4.5" transform="rotate(-20 130 90)"/><ellipse cx="230" cy="90" rx="6" ry="4.5" transform="rotate(-20 230 90)"/><ellipse cx="305" cy="90" rx="6" ry="4.5" transform="rotate(-20 305 90)"/><ellipse cx="350" cy="90" rx="6" ry="4.5" transform="rotate(-20 350 90)"/></g><path class="trait" d="M85.5 88 L85.5 60 M135.5 88 L135.5 60 M235.5 88 L235.5 60 M310.5 88 L310.5 60 M355.5 88 L355.5 60 M85.5 60 Q95 68 93 80 M235.5 60 Q245 68 243 80"/><path d="M130 50 Q180 26 230 50" fill="none" stroke="var(--pigment)" stroke-width="2"/><text class="texte-petit texte-pigment" x="180" y="28" text-anchor="middle">syncope</text><text class="texte" x="80" y="126" text-anchor="middle">1</text><text class="texte-petit" x="130" y="126" text-anchor="middle">et</text><text class="texte" x="180" y="126" text-anchor="middle">2</text><text class="texte-petit" x="230" y="126" text-anchor="middle">et</text><text class="texte" x="305" y="126" text-anchor="middle">1</text><text class="texte" x="350" y="126" text-anchor="middle">2</text><g fill="var(--pigment)"><circle cx="80" cy="148" r="4"/><circle cx="180" cy="148" r="4"/><circle cx="305" cy="148" r="4"/><circle cx="350" cy="148" r="4"/></g><text class="texte-petit" x="68" y="152" text-anchor="end">pulsation</text><path class="trait-fin" d="M180 176 L180 158" marker-end="url(#fl)"/><text class="texte-petit" x="180" y="190" text-anchor="middle">temps 2 : pas de nouvelle note</text></svg>` },
            { t: "definition", terme: "Ostinato", md: "Un **motif** rythmique ou mélodique **répété sans arrêt**. Dans le *Boléro* de Ravel (1928), la caisse claire joue le même rythme du début à la fin, pendant environ un quart d'heure !" },
            { t: "definition", terme: "Polyrythmie", md: "La **superposition** de plusieurs rythmes différents joués en même temps, qui s'emboîtent. Elle est au cœur des musiques d'**Afrique de l'Ouest** : chaque tambour (djembé, dundun…) joue sa propre formule." },
            { t: "verifie", q: "Dans un ensemble de percussions d'Afrique de l'Ouest, chaque tambour joue un rythme différent et tous s'emboîtent. Comment appelle-t-on ce procédé ?", choix: ["Un ostinato", "Une polyrythmie", "Une syncope", "Un accelerando"], bonne: 1, explication: "Plusieurs rythmes différents superposés : c'est la polyrythmie. Chaque tambour peut répéter son motif (ostinato), mais c'est leur superposition qui définit la polyrythmie." },
          ],
        },
        {
          titre: "Le tempo : la vitesse de la pulsation",
          blocs: [
            { t: "definition", terme: "Tempo", md: "La **vitesse** de la pulsation, mesurée en **battements par minute** (bpm). Le **métronome** indique un tempo exact. Les compositeurs utilisent des termes **italiens**." },
            { t: "tableau", titre: "Les tempos, du plus lent au plus rapide", entetes: ["Terme italien", "Signification", "Environ (bpm)"], lignes: [["**Largo**", "Très lent, large", "40 à 60"], ["**Adagio**", "Lent", "66 à 76"], ["**Andante**", "Allant, tranquille (à la vitesse de la marche)", "76 à 108"], ["**Moderato**", "Modéré", "108 à 120"], ["**Allegro**", "Vif, rapide", "120 à 156"], ["**Presto**", "Très rapide", "168 à 200"]] },
            { t: "texte", md: "Le tempo peut aussi **changer** pendant le morceau : un **accelerando** accélère progressivement, un **ritardando** (ou **rallentando**) ralentit, souvent juste avant la fin." },
            { t: "exemple", titre: "Calculer avec le tempo", etapes: ["Le métronome est réglé sur **120 bpm** : 120 battements en 60 secondes, donc **60 battements en 30 secondes**.", "À **60 bpm**, il y a 1 battement par seconde.", "Une mesure à 4 temps jouée à 60 bpm dure donc **4 secondes**."] },
            { t: "astuce", md: "Pour retenir l'ordre : **L**ent comme **L**argo, **A**dagio, **A**ndante, puis **M**oderato au milieu, et enfin **A**llegro et **P**resto qui foncent." },
          ],
        },
      ],
      bilan: "La pulsation est le cœur, la mesure l'organise en temps binaires ou ternaires, la syncope et la polyrythmie la font danser, et le tempo règle sa vitesse.",
    },
    "5e-education-musicale-02-melodie-harmonie": {
      accroche: "Joue do, mi, sol ensemble au piano : c'est lumineux. Baisse juste le mi d'un tout petit cran : soudain, c'est sombre et mélancolique. Une seule note a changé… Bienvenue dans le monde de la mélodie et de l'harmonie.",
      objectifs: [
        "Connaître la gamme majeure, ses degrés et ses demi-tons",
        "Nommer les intervalles de la seconde à l'octave",
        "Distinguer majeur et mineur, comprendre accord, tonalité et modulation",
      ],
      sections: [
        {
          titre: "Mélodie et harmonie",
          blocs: [
            { t: "definition", terme: "Mélodie et harmonie", md: "Une **mélodie** est une suite de notes que l'on peut chanter, l'une **après** l'autre : on la lit horizontalement. L'**harmonie** est la superposition de plusieurs notes **en même temps** : on la lit verticalement." },
            { t: "texte", md: "Quand tu chantes *Au clair de la lune*, tu produis une mélodie. Quand un guitariste t'accompagne en grattant des accords, il ajoute l'harmonie. Les deux ensemble donnent une chanson complète." },
          ],
        },
        {
          titre: "La gamme de do majeur",
          blocs: [
            { t: "definition", terme: "Gamme", md: "Une **échelle de notes** rangées de la plus grave à la plus aiguë. La gamme de do majeur compte **7 notes différentes** : do ré mi fa sol la si, puis on retrouve do, une **octave** plus haut. Chaque note est un **degré** de la gamme." },
            { t: "schema", titre: "La gamme de do majeur sur la portée", legende: "Entre deux notes voisines, il y a un ton… sauf entre mi et fa, et entre si et do : un demi-ton.", svg: `<svg viewBox="0 0 400 200"><g class="trait-fin"><line x1="20" y1="60" x2="390" y2="60"/><line x1="20" y1="70" x2="390" y2="70"/><line x1="20" y1="80" x2="390" y2="80"/><line x1="20" y1="90" x2="390" y2="90"/><line x1="20" y1="100" x2="390" y2="100"/><line x1="58" y1="110" x2="82" y2="110"/></g><path class="trait" d="M50 92 C44 94 42 86 48 84 C56 82 60 92 55 99 C49 106 35 103 34 91 C33 78 50 70 55 58 C59 48 57 37 52 39 C47 41 44 52 45 62 L49 113 C50 121 42 123 41 117"/><circle cx="43.5" cy="116" r="2.6" fill="var(--encre)"/><g class="aplat-papier trait"><ellipse cx="70" cy="110" rx="7.5" ry="5"/><ellipse cx="110" cy="105" rx="7.5" ry="5"/><ellipse cx="150" cy="100" rx="7.5" ry="5"/><ellipse cx="190" cy="95" rx="7.5" ry="5"/><ellipse cx="230" cy="90" rx="7.5" ry="5"/><ellipse cx="270" cy="85" rx="7.5" ry="5"/><ellipse cx="310" cy="80" rx="7.5" ry="5"/><ellipse cx="350" cy="75" rx="7.5" ry="5"/></g><g class="texte" text-anchor="middle"><text x="70" y="140">do</text><text x="110" y="140">ré</text><text x="150" y="140">mi</text><text x="190" y="140">fa</text><text x="230" y="140">sol</text><text x="270" y="140">la</text><text x="310" y="140">si</text><text x="350" y="140">do</text></g><path class="trait-fin" d="M76 150 Q90 158 104 150 M116 150 Q130 158 144 150 M196 150 Q210 158 224 150 M236 150 Q250 158 264 150 M276 150 Q290 158 304 150"/><path d="M156 150 Q170 158 184 150 M316 150 Q330 158 344 150" fill="none" stroke="var(--pigment)" stroke-width="2"/><g class="texte-petit" text-anchor="middle"><text x="90" y="174">1 ton</text><text x="130" y="174">1 ton</text><text x="210" y="174">1 ton</text><text x="250" y="174">1 ton</text><text x="290" y="174">1 ton</text></g><g class="texte-petit texte-pigment" text-anchor="middle"><text x="170" y="174">½ ton</text><text x="330" y="174">½ ton</text></g></svg>` },
            { t: "propriete", titre: "La structure de la gamme majeure", md: "Une gamme majeure suit toujours la même suite d'écarts : **1 ton, 1 ton, ½ ton, 1 ton, 1 ton, 1 ton, ½ ton**. Dans la gamme de do, les deux **demi-tons** naturels sont entre **mi et fa** et entre **si et do**." },
            { t: "astuce", md: "Regarde un clavier de piano : entre mi et fa, et entre si et do, il n'y a **pas de touche noire**. C'est la trace visible des deux demi-tons !" },
          ],
        },
        {
          titre: "Les intervalles",
          blocs: [
            { t: "definition", terme: "Intervalle", md: "L'**écart** entre deux notes. On le nomme en comptant les notes, **en incluant** la première et la dernière : de do à mi, on compte do-ré-mi, soit 3 notes : c'est une **tierce**." },
            { t: "tableau", titre: "Les intervalles à partir de do", entetes: ["Intervalle", "Exemple", "Notes comptées"], lignes: [["Seconde", "do-ré", "2"], ["Tierce", "do-mi", "3"], ["Quarte", "do-fa", "4"], ["Quinte", "do-sol", "5"], ["Sixte", "do-la", "6"], ["Septième", "do-si", "7"], ["**Octave**", "do-do aigu", "8"]] },
            { t: "savais-tu", md: "Une note à l'octave supérieure vibre **deux fois plus vite**. Le la du diapason vibre à 440 Hz ; le la une octave plus haut vibre à **880 Hz**. C'est pour cela qu'elles se ressemblent tant : elles portent le même nom." },
            { t: "verifie", q: "Quel intervalle sépare do et sol ?", choix: ["Une tierce", "Une quarte", "Une quinte", "Une octave"], bonne: 2, explication: "do-ré-mi-fa-sol : 5 notes en comptant les deux extrémités. C'est une quinte." },
          ],
        },
        {
          titre: "Accords, majeur et mineur",
          blocs: [
            { t: "definition", terme: "Accord", md: "Un ensemble d'**au moins trois notes** jouées en même temps. L'**accord parfait** empile une **tierce** et une **quinte** sur la note de base, la **fondamentale** : do-mi-sol." },
            { t: "schema", titre: "Do majeur et do mineur", legende: "Seule la tierce change : 2 tons en majeur, 1 ton et demi en mineur.", svg: `<svg viewBox="0 0 400 190"><g class="trait-fin"><line x1="20" y1="50" x2="390" y2="50"/><line x1="20" y1="60" x2="390" y2="60"/><line x1="20" y1="70" x2="390" y2="70"/><line x1="20" y1="80" x2="390" y2="80"/><line x1="20" y1="90" x2="390" y2="90"/><line x1="118" y1="100" x2="142" y2="100"/><line x1="278" y1="100" x2="302" y2="100"/></g><g transform="translate(0 -10)"><path class="trait" d="M50 92 C44 94 42 86 48 84 C56 82 60 92 55 99 C49 106 35 103 34 91 C33 78 50 70 55 58 C59 48 57 37 52 39 C47 41 44 52 45 62 L49 113 C50 121 42 123 41 117"/><circle cx="43.5" cy="116" r="2.6" fill="var(--encre)"/></g><g class="aplat-papier trait"><ellipse cx="130" cy="100" rx="7.5" ry="5"/><ellipse cx="130" cy="90" rx="7.5" ry="5"/><ellipse cx="130" cy="80" rx="7.5" ry="5"/><ellipse cx="290" cy="100" rx="7.5" ry="5"/><ellipse cx="290" cy="90" rx="7.5" ry="5"/><ellipse cx="290" cy="80" rx="7.5" ry="5"/></g><text class="texte" x="277" y="94" text-anchor="middle">♭</text><path class="trait-fin" d="M116 100 L112 100 L112 90 L116 90 M144 100 L148 100 L148 80 L144 80 M268 100 L264 100 L264 90 L268 90 M304 100 L308 100 L308 80 L304 80"/><g class="texte-petit"><text x="110" y="114" text-anchor="end">tierce</text><text x="150" y="114">quinte</text><text x="270" y="114" text-anchor="end">tierce</text><text x="310" y="114">quinte</text></g><g text-anchor="middle"><text class="texte" x="130" y="132">do majeur</text><text class="texte-petit" x="130" y="150">do – mi – sol</text><text class="texte-petit texte-pigment" x="130" y="168">tierce de 2 tons</text><text class="texte" x="290" y="132">do mineur</text><text class="texte-petit" x="290" y="150">do – mi♭ – sol</text><text class="texte-petit texte-pigment" x="290" y="168">tierce de 1 ton ½</text></g></svg>` },
            { t: "propriete", titre: "Majeur et mineur", md: "Le mode **majeur** sonne souvent clair, joyeux ; le mode **mineur** sonne plus sombre, mélancolique. La différence vient de la **tierce** : **2 tons** en majeur (do-mi), **1 ton et demi** en mineur (do-mi♭)." },
            { t: "attention", md: "Un morceau en mineur n'est **pas forcément lent et triste** ! Beaucoup de danses rapides, de musiques de films d'action ou de chansons énergiques sont en mineur. Le mode colore la musique, le tempo et le rythme font le reste." },
            { t: "verifie", q: "Quelle note change entre l'accord de do majeur et l'accord de do mineur ?", choix: ["Le do", "Le mi", "Le sol"], bonne: 1, explication: "La tierce mi descend d'un demi-ton et devient mi♭. Le do (fondamentale) et le sol (quinte) restent les mêmes." },
          ],
        },
        {
          titre: "Tonalité, modulation et pentatonique",
          blocs: [
            { t: "definition", terme: "Tonalité et modulation", md: "La **tonalité** est la note principale (la **tonique**) autour de laquelle le morceau s'organise, avec son mode : « sol majeur », « la mineur ». **Moduler**, c'est **changer de tonalité** au cours du morceau." },
            { t: "exemple", titre: "Le dernier refrain qui monte", md: "À la fin de nombreuses chansons, le dernier refrain est chanté avec la même mélodie, mais **un ton plus haut**. L'effet est saisissant, comme un élan final. C'est une **modulation**." },
            { t: "texte", md: "La gamme **pentatonique** ne compte que **5 notes** : tu peux la jouer sur les seules **touches noires** du piano. On la trouve dans les musiques d'Asie, d'Afrique, dans le blues et dans beaucoup de chansons enfantines." },
          ],
        },
      ],
      bilan: "Une gamme aligne des tons et des demi-tons, un intervalle mesure l'écart entre deux notes, et la tierce suffit à faire basculer un accord du majeur lumineux au mineur sombre.",
    },
    "5e-education-musicale-03-formes-structures": {
      accroche: "Pourquoi peux-tu chanter le refrain d'une chanson dès la deuxième écoute, mais jamais les couplets ? Parce que les musiciens construisent leurs morceaux comme des architectes : avec un plan, des répétitions et des surprises.",
      objectifs: [
        "Repérer la structure couplet-refrain et la forme ABA",
        "Reconnaître le rondo et le thème et variations",
        "Comprendre le principe du canon et de la fugue",
      ],
      sections: [
        {
          titre: "La forme : le plan d'un morceau",
          blocs: [
            { t: "definition", terme: "Forme musicale", md: "Le **plan** d'un morceau : la façon dont ses parties s'enchaînent. On note chaque partie par une **lettre** : A, B, C… Une partie qui revient légèrement modifiée se note avec un « prime » : A'." },
            { t: "schema", titre: "Trois formes, écrites en lettres", legende: "Les cases foncées sont les parties qui reviennent : elles servent de repère à l'auditeur.", svg: `<svg viewBox="0 0 400 236"><text class="texte" x="20" y="24">Forme ABA (forme ternaire)</text><rect class="aplat trait" x="20" y="32" width="110" height="28"/><rect class="aplat-papier trait-fin" x="135" y="32" width="110" height="28"/><rect class="aplat trait" x="250" y="32" width="110" height="28"/><g class="texte-main" text-anchor="middle"><text x="75" y="52">A</text><text x="190" y="52">B</text><text x="305" y="52">A</text></g><text class="texte" x="20" y="92">Rondo</text><rect class="aplat trait" x="20" y="100" width="66" height="28"/><rect class="aplat-papier trait-fin" x="91" y="100" width="66" height="28"/><rect class="aplat trait" x="162" y="100" width="66" height="28"/><rect class="aplat-papier trait-fin" x="233" y="100" width="66" height="28"/><rect class="aplat trait" x="304" y="100" width="66" height="28"/><g class="texte-main" text-anchor="middle"><text x="53" y="120">A</text><text x="124" y="120">B</text><text x="195" y="120">A</text><text x="266" y="120">C</text><text x="337" y="120">A</text></g><text class="texte" x="20" y="160">Chanson couplet-refrain</text><rect class="aplat-papier trait-fin" x="20" y="168" width="55" height="28"/><rect class="aplat trait" x="79" y="168" width="55" height="28"/><rect class="aplat-papier trait-fin" x="138" y="168" width="55" height="28"/><rect class="aplat trait" x="197" y="168" width="55" height="28"/><rect class="aplat-papier trait-fin" x="256" y="168" width="55" height="28"/><rect class="aplat trait" x="315" y="168" width="55" height="28"/><g class="texte-petit" text-anchor="middle"><text x="47" y="186">couplet 1</text><text x="106" y="186">refrain</text><text x="165" y="186">couplet 2</text><text x="224" y="186">refrain</text><text x="283" y="186">pont</text><text x="342" y="186">refrain</text></g><text class="texte-petit texte-pigment" x="195" y="222" text-anchor="middle">le refrain revient : mêmes paroles, même musique</text></svg>` },
          ],
        },
        {
          titre: "Couplet, refrain et forme ABA",
          blocs: [
            { t: "texte", md: "Dans une chanson, le **refrain** revient avec **les mêmes paroles et la même musique** : c'est la partie que tout le monde retient. Les **couplets** gardent la même musique mais **changent de paroles** : ils font avancer l'histoire. Le **pont** est un passage **différent**, souvent placé avant le dernier refrain, pour relancer l'attention." },
            { t: "exemple", titre: "Écrire la structure d'une chanson", md: "Couplet 1 (A), refrain (B), couplet 2 (A'), refrain (B), pont (C), refrain (B). La structure s'écrit : **A B A' B C B**." },
            { t: "definition", terme: "Forme ABA (forme ternaire)", md: "On expose une idée (A), on en présente une autre **contrastée** (B), puis on **revient** à la première (A). Très fréquente dans la musique classique, par exemple dans le **menuet et trio**." },
            { t: "verifie", q: "Dans une chanson, qu'est-ce que le pont ?", choix: ["La partie qui revient le plus souvent", "Un passage différent, souvent avant le dernier refrain", "Le tout premier couplet"], bonne: 1, explication: "Le pont apporte du nouveau (mélodie, accords, ambiance) pour relancer l'écoute avant le dernier refrain. La partie qui revient le plus, c'est le refrain." },
          ],
        },
        {
          titre: "Le rondo et le thème et variations",
          blocs: [
            { t: "definition", terme: "Rondo", md: "Un **refrain A** alterne avec des **couplets différents** : **A B A C A**. Le *Rondo alla turca* de Mozart et la *Lettre à Élise* de Beethoven en sont des exemples célèbres." },
            { t: "definition", terme: "Thème et variations", md: "On expose une mélodie (le **thème**), puis on la **transforme** à chaque reprise : rythme, mode, ornements, tempo, instruments. On la reconnaît toujours, mais elle change de visage." },
            { t: "etapes", titre: "Un thème qui change de visage", items: [{ titre: "Thème", md: "La mélodie simple de « Ah ! vous dirai-je, maman »." }, { titre: "Variation 1 : le rythme", md: "La même mélodie en notes rapides." }, { titre: "Variation 2 : le mode", md: "La mélodie passe en **mineur** : elle devient sombre." }, { titre: "Variation 3 : le caractère", md: "La mélodie en rythme de valse, à 3 temps." }, { titre: "Variation 4 : les ornements", md: "La mélodie entourée de trilles et de notes de passage." }] },
            { t: "savais-tu", md: "Mozart a composé **12 variations** sur « Ah ! vous dirai-je, maman », la mélodie que tu connais aussi sous le nom de « Twinkle, twinkle, little star »." },
            { t: "verifie", q: "Une mélodie simple, puis la même en notes rapides, puis en mineur, puis en valse : quelle est la forme ?", choix: ["Un rondo", "Un canon", "Un thème et variations", "Une fugue"], bonne: 2, explication: "La même mélodie est transformée à chaque reprise : c'est un thème et variations. Dans un rondo, le refrain reviendrait identique, séparé par des couplets différents." },
          ],
        },
        {
          titre: "Le canon et la fugue",
          blocs: [
            { t: "definition", terme: "Canon", md: "La **même mélodie** entre à plusieurs voix, **en décalé** : la deuxième voix commence quand la première a fini sa première phrase, et ainsi de suite. *Frère Jacques* se chante en canon." },
            { t: "schema", titre: "Un canon à trois voix", legende: "Toutes les voix chantent la même mélodie, mais en décalé : à un instant donné, chacune en est à une phrase différente.", svg: `<svg viewBox="0 0 400 190"><g class="texte" text-anchor="end"><text x="70" y="49">voix 1</text><text x="70" y="99">voix 2</text><text x="70" y="149">voix 3</text></g><g class="trait-fin"><rect class="aplat" x="80" y="30" width="50" height="30"/><rect x="130" y="30" width="50" height="30"/><rect x="180" y="30" width="50" height="30"/><rect x="230" y="30" width="50" height="30"/><rect class="aplat" x="130" y="80" width="50" height="30"/><rect x="180" y="80" width="50" height="30"/><rect x="230" y="80" width="50" height="30"/><rect x="280" y="80" width="50" height="30"/><rect class="aplat" x="180" y="130" width="50" height="30"/><rect x="230" y="130" width="50" height="30"/><rect x="280" y="130" width="50" height="30"/><rect x="330" y="130" width="50" height="30"/></g><g class="texte-main" text-anchor="middle"><text x="105" y="51">1</text><text x="155" y="51">2</text><text x="205" y="51">3</text><text x="255" y="51">4</text><text x="155" y="101">1</text><text x="205" y="101">2</text><text x="255" y="101">3</text><text x="305" y="101">4</text><text x="205" y="151">1</text><text x="255" y="151">2</text><text x="305" y="151">3</text><text x="355" y="151">4</text></g><line class="pointille" x1="205" y1="20" x2="205" y2="168"/><path class="trait-fin" d="M80 178 L385 178" marker-end="url(#fl)"/><text class="texte-petit" x="80" y="174">le temps passe</text><text class="texte-petit texte-pigment" x="230" y="14" text-anchor="middle">au même instant : phrases 3, 2 et 1</text></svg>` },
            { t: "texte", md: "La **fugue** est plus savante. Une voix expose une mélodie, le **sujet**. Puis les autres voix l'**imitent** à tour de rôle, souvent à une autre hauteur, pendant que les premières continuent avec des mélodies différentes. Le sujet est ensuite **développé**. Jean-Sébastien **Bach**, compositeur baroque, en est le grand maître (*Toccata et fugue en ré mineur*)." },
            { t: "attention", md: "Dans un canon ou une fugue, les voix ne chantent **pas** la même chose au même moment : elles se **décalent**. Si toutes chantaient exactement la même chose ensemble, ce serait un **unisson**." },
          ],
        },
      ],
      bilan: "Couplet-refrain, ABA, rondo, thème et variations, canon et fugue : repérer ce qui revient et ce qui change, c'est lire le plan secret d'un morceau.",
    },
    "5e-education-musicale-04-reperes-histoire": {
      accroche: "Un moine chante seul sous les voûtes d'une abbaye ; trois siècles plus tard, quatre chanteurs entremêlent leurs voix ; puis un clavecin crépite sous des violons, avant qu'un orchestre entier ne joue Mozart. Mille ans de musique tiennent dans ces images.",
      objectifs: [
        "Situer les grandes périodes : Moyen Âge, Renaissance, baroque, classique",
        "Associer les compositeurs majeurs à une de leurs œuvres",
        "Identifier les quatre familles d'instruments de l'orchestre",
      ],
      sections: [
        {
          titre: "Mille ans de musique sur une frise",
          blocs: [
            { t: "frise", titre: "Du Moyen Âge au classicisme", evenements: [{ date: 1025, label: "Guido d'Arezzo nomme les notes", detail: "Vers 1025, ce moine donne leur nom aux notes (ut, ré, mi…) et perfectionne la portée." }, { date: 1100, label: "Les premiers troubadours", detail: "Guillaume IX d'Aquitaine chante l'amour courtois en langue d'oc." }, { date: 1528, label: "La Guerre de Janequin", detail: "Une chanson polyphonique qui imite les bruits d'une bataille." }, { date: 1607, label: "L'Orfeo de Monteverdi", detail: "Le premier grand opéra de l'histoire, à Mantoue." }, { date: 1685, label: "Naissance de Bach et de Haendel", detail: "Deux géants du baroque, nés la même année en Allemagne." }, { date: 1700, label: "Invention du piano", detail: "Vers 1700, Cristofori construit à Florence le premier piano." }, { date: 1725, label: "Les Quatre Saisons de Vivaldi", detail: "Quatre concertos pour violon publiés à Amsterdam." }, { date: 1742, label: "Le Messie de Haendel", detail: "Créé à Dublin, avec le célèbre « Alléluia »." }, { date: 1787, label: "La Petite musique de nuit", detail: "Mozart, en pleine période classique." }, { date: 1791, label: "La Flûte enchantée", detail: "Le dernier opéra de Mozart, l'année de sa mort." }] },
            { t: "tableau", titre: "Les quatre grandes périodes", entetes: ["Période", "Dates", "Caractéristiques", "Compositeurs"], lignes: [["**Moyen Âge**", "Ve-XVe siècle", "Chant grégorien en latin (**monodie**), troubadours et trouvères", "Guillaume IX, Bernard de Ventadour"], ["**Renaissance**", "XVe-XVIe siècle", "**Polyphonie** : plusieurs voix indépendantes", "Josquin des Prés, Palestrina, Roland de Lassus, Janequin"], ["**Baroque**", "vers 1600-1750", "Naissance de l'opéra, clavecin et **basse continue**, ornements", "Monteverdi, Vivaldi, Bach, Haendel"], ["**Classique**", "vers 1750-1820", "Clarté, équilibre, mélodie accompagnée, orchestre symphonique", "Haydn, Mozart"]] },
          ],
        },
        {
          titre: "Du Moyen Âge à la Renaissance : de une à plusieurs voix",
          blocs: [
            { t: "definition", terme: "Monodie et polyphonie", md: "Une **monodie** est une musique à **une seule ligne mélodique** : le **chant grégorien**, chanté en latin par les moines, en est l'exemple type. Une **polyphonie** superpose **plusieurs voix indépendantes**, chacune avec sa propre mélodie." },
            { t: "texte", md: "Aux XIIe et XIIIe siècles, les **troubadours** (dans le sud, en **langue d'oc**) et les **trouvères** (dans le nord, en **langue d'oïl**) chantent l'**amour courtois** dans les cours seigneuriales.\n\nÀ la **Renaissance**, la polyphonie s'épanouit. Clément **Janequin** s'amuse même à imiter le chant des oiseaux ou le fracas d'une bataille avec les seules voix humaines." },
            { t: "verifie", q: "Le chant grégorien est une monodie. Qu'est-ce que cela signifie ?", choix: ["Il est chanté par une seule personne", "Il n'a qu'une seule ligne mélodique", "Il est accompagné par un seul instrument"], bonne: 1, explication: "Monodie signifie une seule ligne mélodique, même si tout un chœur de moines la chante ensemble, à l'unisson." },
          ],
        },
        {
          titre: "Le baroque et le classicisme",
          blocs: [
            { t: "texte", md: "Le **baroque** (vers 1600-1750) aime le contraste, l'émotion, les **ornements**. L'opéra naît avec *L'Orfeo* de **Monteverdi** (1607). Sous les mélodies, un **clavecin** et un violoncelle jouent sans arrêt des accords et une ligne grave : c'est la **basse continue**. **Vivaldi**, le « prêtre roux » de Venise, compose *Les Quatre Saisons* ; **Bach** les *Concertos brandebourgeois* ; **Haendel** *Le Messie* et la *Water Music*." },
            { t: "texte", md: "La période **classique** (vers 1750-1820) recherche la **clarté** et l'**équilibre** : des phrases bien construites, une mélodie accompagnée. **Haydn**, avec plus de 100 symphonies, est surnommé le « **père de la symphonie** ». **Mozart** écrit *La Petite musique de nuit*, *La Flûte enchantée* et un *Requiem*. Le **piano** remplace peu à peu le clavecin." },
            { t: "exemple", titre: "Baroque ou classique ? Écoute les indices", md: "Tu entends un clavecin, des violons, beaucoup d'ornements et un rythme très régulier : c'est sans doute **baroque**, peut-être Vivaldi. Tu entends un piano, des phrases équilibrées et un orchestre **sans clavecin** : pense plutôt à **Mozart** ou **Haydn**." },
            { t: "verifie", q: "Tu entends un orchestre avec un clavecin qui joue des accords en continu sous les violons. À quelle période appartient très probablement ce morceau ?", choix: ["Moyen Âge", "Renaissance", "Baroque", "Classique"], bonne: 2, explication: "Le clavecin qui joue la basse continue est la signature du baroque. À l'époque classique, il disparaît de l'orchestre." },
          ],
        },
        {
          titre: "L'orchestre symphonique",
          blocs: [
            { t: "texte", md: "L'**orchestre symphonique** se fixe à l'époque classique. Les instruments y sont rangés en **quatre familles**, placées en demi-cercle face au **chef d'orchestre**, qui dirige. Avant de jouer, c'est le **hautbois** qui donne le **la** pour que tout le monde s'accorde." },
            { t: "schema", titre: "La disposition de l'orchestre", legende: "Les instruments les plus doux sont devant, les plus puissants au fond.", svg: `<svg viewBox="0 0 400 262"><path class="aplat-papier trait" d="M92.5 53.8 A215 215 0 0 1 307.5 53.8 L292.5 79.8 A185 185 0 0 0 107.5 79.8 Z"/><path class="aplat trait" d="M58.3 121.1 A185 185 0 0 1 341.7 121.1 L314.9 143.6 A150 150 0 0 0 85.1 143.6 Z"/><path class="aplat-papier trait" d="M103.6 125.1 A150 150 0 0 1 296.4 125.1 L270.7 155.7 A110 110 0 0 0 129.3 155.7 Z"/><path class="aplat trait" d="M90 240 A110 110 0 0 1 310 240 L245 240 A45 45 0 0 0 155 240 Z"/><g class="texte" text-anchor="middle"><text x="200" y="44">percussions</text><text x="200" y="78">cuivres</text><text x="200" y="116">bois</text><text x="200" y="168">cordes</text></g><g class="texte-petit" text-anchor="middle"><text x="134" y="205">violons</text><text x="266" y="205">violoncelles</text></g><circle cx="200" cy="232" r="7" fill="var(--pigment)"/><text class="texte-petit" x="200" y="256" text-anchor="middle">chef d'orchestre</text></svg>` },
            { t: "tableau", titre: "Les quatre familles", entetes: ["Famille", "Comment naît le son", "Instruments"], lignes: [["**Cordes**", "Cordes frottées par un archet (ou pincées)", "Violon, alto, violoncelle, contrebasse"], ["**Bois**", "Souffle sur une anche ou un biseau", "Flûte, hautbois, clarinette, basson"], ["**Cuivres**", "Vibration des lèvres dans une embouchure", "Trompette, cor, trombone, tuba"], ["**Percussions**", "On frappe, on secoue, on frotte", "Timbales, grosse caisse, cymbales, triangle"]] },
            { t: "attention", md: "La **flûte traversière** est en métal, mais elle appartient aux **bois** ! On classe les instruments selon la façon dont le son est produit, pas selon leur matériau." },
          ],
        },
      ],
      bilan: "Monodie du Moyen Âge, polyphonie de la Renaissance, basse continue du baroque, clarté classique : chaque période a son style, et l'orchestre aux quatre familles en est l'héritier.",
    },
    "5e-education-musicale-05-musiques-monde-actuelles": {
      accroche: "Des gongs qui résonnent dans un temple de Java, des mains qui claquent dans une cour d'Andalousie, une trompette qui improvise dans un club de La Nouvelle-Orléans, un MC qui pose ses mots dans le Bronx : la planète entière chante, et chaque musique a son histoire.",
      objectifs: [
        "Reconnaître le gamelan, les percussions d'Afrique de l'Ouest et le flamenco",
        "Connaître les origines et les caractéristiques du blues, du jazz et du rap",
        "Associer des instruments du monde à leur région d'origine",
      ],
      sections: [
        {
          titre: "Un tour du monde des musiques",
          blocs: [
            { t: "carte", fond: "monde", titre: "Où sont nées ces musiques et ces instruments ?", reperes: [{ nom: "Java : gamelan", lat: -7.8, lon: 110.36 }, { nom: "Séville : flamenco", lat: 37.39, lon: -5.98 }, { nom: "Bamako : kora, djembé", lat: 12.64, lon: -8.0 }, { nom: "La Nouvelle-Orléans : jazz", lat: 29.95, lon: -90.07 }, { nom: "Le Bronx : rap", lat: 40.84, lon: -73.87 }, { nom: "Inde : sitar, tabla", lat: 28.61, lon: 77.21 }, { nom: "Le Caire : oud", lat: 30.04, lon: 31.24 }, { nom: "Australie : didgeridoo", lat: -12.46, lon: 130.84 }, { nom: "Buenos Aires : bandonéon", lat: -34.6, lon: -58.38 }], legende: "Chaque repère indique une musique ou un instrument et son berceau." },
            { t: "definition", terme: "Gamelan", md: "Un orchestre d'**Indonésie** (Java, Bali) composé de **gongs** et de **métallophones** (des lames de métal frappées). Les musiciens jouent **par cœur** des cycles qui s'emboîtent et se répètent." },
            { t: "texte", md: "Les musiques d'**Afrique de l'Ouest** reposent sur la **polyrythmie** des percussions (djembé, dundun), le **balafon** (un xylophone) et la **kora**, une harpe-luth à **21 cordes** jouée par les **griots**, les conteurs-musiciens. Le chant alterne souvent un soliste et un chœur : c'est l'**appel-réponse**." },
            { t: "texte", md: "Le **flamenco** vient d'**Andalousie**, en Espagne. Il réunit le chant (**cante**), la guitare (**toque**), la danse (**baile**), les claquements de mains (**palmas**) et souvent le cajón, une caisse sur laquelle on s'assoit pour la frapper. Son cycle rythmique s'appelle le **compás**." },
            { t: "verifie", q: "Un soliste chante une phrase, un groupe lui répond, encore et encore, au-dessus de plusieurs tambours. De quelle tradition s'agit-il probablement ?", choix: ["Le gamelan de Java", "Une musique d'Afrique de l'Ouest", "Le chant grégorien"], bonne: 1, explication: "L'appel-réponse sur des percussions polyrythmiques est typique des musiques d'Afrique de l'Ouest. Le gamelan est fait de gongs, le chant grégorien est une monodie sans tambours." },
          ],
        },
        {
          titre: "Blues et jazz : nés aux États-Unis",
          blocs: [
            { t: "definition", terme: "Blues", md: "Musique née chez les **Afro-Américains du Sud des États-Unis**, à la fin du XIXe siècle, héritière des chants de travail des esclaves. Sa grille compte **12 mesures** ; ses **blue notes**, légèrement plus basses, donnent une couleur mélancolique ; ses textes disent la peine. Il est à la racine du **jazz** et du **rock**." },
            { t: "texte", md: "Le **jazz** naît à **La Nouvelle-Orléans** au début du XXe siècle. Ses deux clés : l'**improvisation** (le musicien invente sa mélodie en jouant) et le **swing** (une façon souple, chaloupée, de placer les notes, avec beaucoup de syncopes). **Louis Armstrong**, trompettiste et chanteur né à La Nouvelle-Orléans en 1901, en est l'une des premières grandes figures, avant Duke Ellington, Ella Fitzgerald ou Miles Davis." },
            { t: "verifie", q: "Quelle est la caractéristique essentielle du jazz ?", choix: ["Le chant en latin", "L'improvisation et le swing", "L'absence totale de rythme", "Le clavecin et la basse continue"], bonne: 1, explication: "Le jazz se reconnaît à l'improvisation et au swing. Le chant en latin évoque le grégorien ; le clavecin et la basse continue, le baroque." },
          ],
        },
        {
          titre: "Le rap et le hip-hop",
          blocs: [
            { t: "texte", md: "Le **rap** naît dans le **Bronx**, un quartier de **New York**, dans les années **1970**, au sein de la culture **hip-hop** (avec le graffiti et le breakdance). Le **DJ** fait tourner et mélange les disques ; le **MC** parle en rythme sur la musique. Sa manière de poser les mots s'appelle le **flow**." },
            { t: "frise", titre: "Du blues au rap", evenements: [{ date: 1890, label: "Naissance du blues", detail: "Dans le Sud des États-Unis, à la fin du XIXe siècle." }, { date: 1917, label: "Premier disque de jazz", detail: "Enregistré par un orchestre de La Nouvelle-Orléans." }, { date: 1925, label: "Louis Armstrong et ses Hot Five", detail: "Ses solos improvisés marquent l'histoire du jazz." }, { date: 1955, label: "Le rock'n'roll", detail: "Il mêle blues, country et énergie électrique." }, { date: 1973, label: "Naissance du hip-hop", detail: "Des fêtes de quartier dans le Bronx, à New York." }, { date: 1990, label: "Le rap français s'affirme", detail: "MC Solaar, puis IAM et NTM." }] },
            { t: "attention", md: "Le rap n'est **pas** né en France ! Il est né aux **États-Unis** dans les années 1970. MC Solaar, IAM et NTM l'ont rendu célèbre **en France** à partir des années 1990." },
          ],
        },
        {
          titre: "Les instruments du monde",
          blocs: [
            { t: "tableau", titre: "Quelques instruments du monde", entetes: ["Instrument", "Type", "Origine"], lignes: [["**Sitar**", "Luth à long manche, cordes pincées", "Inde"], ["**Tabla**", "Paire de petits tambours", "Inde"], ["**Oud**", "Luth sans frettes", "Monde arabe"], ["**Kora**", "Harpe-luth à 21 cordes", "Afrique de l'Ouest"], ["**Djembé**", "Tambour en forme de calice", "Afrique de l'Ouest"], ["**Didgeridoo**", "Long tube de bois dans lequel on souffle", "Australie (Aborigènes)"], ["**Erhu**", "Vièle à deux cordes, jouée à l'archet", "Chine"], ["**Koto**", "Grande cithare posée au sol", "Japon"], ["**Bandonéon**", "Petit accordéon à boutons, roi du tango", "Argentine"], ["**Steel drum**", "Tambour d'acier taillé dans un bidon", "Trinidad (Caraïbes)"]] },
            { t: "exemple", titre: "Reconnaître une musique à l'oreille", md: "Une guitare très rapide, des claquements de mains et une voix rauque qui chante avec passion : c'est du **flamenco**. Des métallophones qui résonnent en cycles et de grands gongs : c'est un **gamelan**. Une voix qui parle en rythme sur une boucle de batterie : c'est du **rap**." },
            { t: "astuce", md: "Pour identifier un instrument inconnu, pose-toi trois questions : *comment produit-il le son* (cordes, souffle, frappe) ? *quel timbre* (métallique, boisé, nasal) ? *dans quelle musique l'entends-tu ?*" },
          ],
        },
      ],
      bilan: "Gamelan, polyrythmies africaines, flamenco, blues, jazz et rap : chaque musique naît d'un lieu, d'une histoire et d'instruments, et beaucoup se sont nourries les unes des autres.",
    },
    "5e-education-musicale-06-voix-pratique-vocale": {
      accroche: "Ton corps contient un instrument que personne d'autre ne possède : ta voix. Elle est unique, comme une empreinte digitale. Pour bien s'en servir, il faut comprendre comment elle fonctionne… et comment la faire sonner avec celle des autres.",
      objectifs: [
        "Expliquer le fonctionnement de la voix et nommer les registres vocaux",
        "Chanter juste et en rythme dans un chœur, à l'unisson ou à plusieurs voix",
        "Interpréter un chant avec expression dans un projet musical",
      ],
      sections: [
        {
          titre: "Comment naît la voix",
          blocs: [
            { t: "texte", md: "Quand tu parles ou chantes, l'**air expiré** par les poumons monte dans la trachée et fait **vibrer les cordes vocales** (on dit aussi les plis vocaux), situées dans le **larynx**, au niveau de la gorge. Ce son, encore faible, est ensuite amplifié et coloré par les **résonateurs** : le pharynx, la bouche et le nez." },
            { t: "schema", titre: "L'appareil vocal", legende: "Le souffle (poumons, diaphragme) fait vibrer les cordes vocales ; les résonateurs donnent le timbre.", svg: `<svg viewBox="0 0 400 300"><ellipse class="aplat trait-fin" cx="200" cy="30" rx="40" ry="14"/><ellipse class="aplat trait-fin" cx="200" cy="62" rx="46" ry="14"/><path class="trait" d="M190 76 L190 110 M210 76 L210 110"/><rect class="aplat-papier trait" x="184" y="110" width="32" height="25" rx="4"/><path class="trait" d="M189 123 L198 123 M202 123 L211 123" stroke="var(--pigment)"/><path class="trait" d="M192 135 L192 178 M208 135 L208 178 M192 178 Q170 182 162 196 M208 178 Q230 182 238 196"/><ellipse class="aplat trait" cx="150" cy="218" rx="42" ry="50"/><ellipse class="aplat trait" cx="250" cy="218" rx="42" ry="50"/><path d="M96 286 Q200 252 304 286" fill="none" stroke="var(--pigment)" stroke-width="2.4"/><path class="trait-fin" d="M168 170 L168 88" marker-end="url(#fl-p)"/><text class="texte-petit texte-pigment" x="162" y="124" text-anchor="end">air expiré</text><g class="texte-petit"><text x="300" y="34">nez</text><text x="300" y="66">bouche</text><text x="300" y="96">pharynx</text><text x="300" y="126">larynx :</text><text x="300" y="139">cordes vocales</text><text x="300" y="166">trachée</text><text x="20" y="160">poumons</text><text x="306" y="290">diaphragme</text></g><path class="trait-fin" d="M296 30 L244 30 M296 62 L250 62 M296 92 L214 92 M296 122 L220 122 M296 162 L212 162 M58 164 L118 182 M302 286 L290 280"/></svg>` },
            { t: "definition", terme: "Timbre", md: "La **couleur** propre d'une voix ou d'un instrument, qui permet de la reconnaître même si elle chante la même note qu'une autre. Il dépend des cordes vocales et de la forme des résonateurs." },
          ],
        },
        {
          titre: "Les registres vocaux",
          blocs: [
            { t: "tableau", titre: "Les quatre voix du chœur (SATB)", entetes: ["Registre", "Voix", "Hauteur"], lignes: [["**Soprano**", "Femmes, enfants", "La plus aiguë"], ["**Alto**", "Femmes, enfants", "Aiguë, plus grave que la soprano"], ["**Ténor**", "Hommes", "La plus aiguë des voix d'hommes"], ["**Basse**", "Hommes", "La plus grave"]] },
            { t: "texte", md: "Un chœur mixte classique compte donc **4 voix**, notées **SATB**. Le **baryton** se situe entre le ténor et la basse. À l'adolescence, la voix des garçons descend d'**une octave environ** : c'est la **mue**. Pendant cette période, la voix peut « dérailler » : il faut chanter **sans forcer**, dans une hauteur confortable." },
            { t: "verifie", q: "Range ces registres du plus aigu au plus grave. Lequel arrive en troisième position ?", choix: ["Soprano", "Alto", "Ténor", "Basse"], bonne: 2, explication: "De l'aigu au grave : soprano, alto, ténor, basse. Le ténor est donc troisième." },
          ],
        },
        {
          titre: "Bien chanter : souffle, posture, justesse",
          blocs: [
            { t: "propriete", titre: "La respiration abdominale", md: "Pour un souffle long et stable, on respire avec le **ventre** : à l'inspiration, le ventre se gonfle et le **diaphragme** descend. Les **épaules restent basses**, le dos droit, les pieds bien ancrés au sol." },
            { t: "etapes", titre: "S'échauffer avant de chanter", items: [{ titre: "Le corps", md: "Étire-toi, détends les épaules et la nuque, bâille pour ouvrir la gorge." }, { titre: "Le souffle", md: "Inspire par le ventre, puis expire longtemps sur « sss »." }, { titre: "Les lèvres", md: "Fais-les vibrer comme un petit moteur (« brrr »)." }, { titre: "La voix", md: "Monte et descends doucement sur « nô », sans forcer." }, { titre: "L'attaque", md: "Écoute la note de départ, inspire, et attaque le son sans crier." }] },
            { t: "texte", md: "Chanter **juste**, c'est reproduire la **hauteur exacte** des notes. Le secret : **écouter avant de chanter**. Dans un chœur à deux voix, si tu sens que ta voix « frotte » avec celle du groupe voisin, chante **moins fort** et **écoute ton propre pupitre** pour te caler sur lui." },
            { t: "attention", md: "Crier n'est pas chanter fort ! Forcer sur la gorge abîme les cordes vocales. La puissance vient du **souffle** et des **résonateurs**, pas de la gorge." },
          ],
        },
        {
          titre: "Chanter ensemble et interpréter",
          blocs: [
            { t: "definition", terme: "Unisson, canon, polyphonie, a cappella", md: "À l'**unisson**, tous chantent la **même mélodie en même temps**. En **canon**, la même mélodie entre en décalé. À **plusieurs voix**, chaque groupe chante une mélodie différente. Chanter **a cappella**, c'est chanter **sans instrument**." },
            { t: "tableau", titre: "Les nuances", entetes: ["Nuance", "Signification"], lignes: [["**piano** (p)", "Doux"], ["**forte** (f)", "Fort"], ["**crescendo**", "De plus en plus fort"], ["**decrescendo**", "De moins en moins fort"]] },
            { t: "exemple", titre: "Les étapes d'un projet musical de classe", etapes: ["Choisir le chant et écouter plusieurs versions.", "Apprendre la mélodie et les paroles.", "Travailler les voix séparément, puis ensemble.", "Décider de l'interprétation : nuances, tempo, mise en espace.", "Présenter le chant au public."] },
            { t: "texte", md: "Deux chorales peuvent chanter les mêmes notes : l'une émeut, l'autre pas. La différence, c'est l'**interprétation** : les **nuances**, l'articulation, le **phrasé** (la façon de respirer et de relier les notes), l'émotion et le regard partagé avec le public." },
            { t: "verifie", q: "Dans un canon à trois groupes, les trois groupes chantent…", choix: ["trois mélodies différentes en même temps", "la même mélodie, mais en décalé", "la même mélodie exactement en même temps"], bonne: 1, explication: "Le canon fait entrer la même mélodie en décalé. La même mélodie chantée exactement ensemble, ce serait l'unisson." },
          ],
        },
      ],
      bilan: "La voix naît du souffle, vibre dans le larynx et prend sa couleur dans les résonateurs : bien posée, juste et nuancée, elle devient un instrument d'expression partagé.",
    },
  },
};
