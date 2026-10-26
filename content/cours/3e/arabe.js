// ÉCLORE — Cours illustrés, 3e Arabe (LV2, troisième année, niveau A2). Arabe standard moderne (fuṣḥā).
// Schéma : docs/COURS.md. Validation : node tools/validate-cours.mjs content/cours/3e/arabe.js
// Translittération (comme le module de questions) : ā ī ū, ʿ = ع, ʾ = ء, ḥ ṣ ḍ ṭ ẓ, kh = خ, gh = غ, sh = ش, th = ث, dh = ذ.
// Dans les schémas, le texte arabe est toujours seul dans son élément <text>, sous un <g> qui fixe la police et le sens.

const AR = (px = 18) => `direction="rtl" text-anchor="middle" style="font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic','Segoe UI',serif;font-size:${px}px"`;

export default {
  id: "3e-arabe",
  chapitres: {
    // ───────────────────────── 1. Futur et impératif ─────────────────────────
    "3e-arabe-01-futur-imperatif": {
      accroche: "Demain, tu pars en voyage, et ta mère te lance : « Dors tôt ! Ne sois pas en retard ! » En arabe, une seule petite lettre, سَـ (sa-), suffit pour basculer dans l'avenir, et un alif pour donner un ordre. Voyons comment ça marche.",
      objectifs: [
        "Exprimer le futur avec سَـ (sa-) et سَوْفَ (sawfa), et le nier avec لَنْ (lan)",
        "Situer une action dans l'avenir grâce aux marqueurs de temps",
        "Former l'impératif à partir de l'inaccompli, pour un garçon, une fille ou plusieurs personnes",
        "Interdire avec لا + inaccompli sans voyelle finale",
      ],
      sections: [
        {
          titre: "Le futur : un petit mot devant le présent",
          blocs: [
            { t: "texte", md: "En 4e, tu as appris l'inaccompli : أَكْتُبُ (aktubu), j'écris. Pour parler de l'avenir, ==tu ne changes rien au verbe : tu ajoutes seulement un petit mot devant==. Deux possibilités, de même sens :\n\n**سَـ** (sa-), collé au verbe : سَأَكْتُبُ (sa-aktubu), j'écrirai.\n**سَوْفَ** (sawfa), écrit séparément : سَوْفَ أَكْتُبُ (sawfa aktubu), j'écrirai." },
            { t: "propriete", titre: "Futur = سَـ ou سَوْفَ + inaccompli", md: "Le préfixe de personne (أَ، تَـ، يَـ، نَـ) et la terminaison restent ceux de l'inaccompli. سوف insiste parfois sur un avenir un peu plus lointain, mais la différence est légère." },
            { t: "tableau", titre: "Le futur de كَتَبَ (kataba, écrire)", entetes: ["Personne", "Inaccompli (présent)", "Futur", "Sens"], lignes: [
              ["أنا (anā)", "أَكْتُبُ (aktubu)", "سَأَكْتُبُ (sa-aktubu)", "j'écrirai"],
              ["أنتَ (anta)", "تَكْتُبُ (taktubu)", "سَتَكْتُبُ (sa-taktubu)", "tu écriras (garçon)"],
              ["أنتِ (anti)", "تَكْتُبينَ (taktubīna)", "سَتَكْتُبينَ (sa-taktubīna)", "tu écriras (fille)"],
              ["هو (huwa)", "يَكْتُبُ (yaktubu)", "سَيَكْتُبُ (sa-yaktubu)", "il écrira"],
              ["هي (hiya)", "تَكْتُبُ (taktubu)", "سَتَكْتُبُ (sa-taktubu)", "elle écrira"],
              ["نحن (naḥnu)", "نَكْتُبُ (naktubu)", "سَنَكْتُبُ (sa-naktubu)", "nous écrirons"],
            ] },
            { t: "exemple", titre: "Avec d'autres verbes", md: "سَنُسافِرُ (sa-nusāfiru) : nous voyagerons.\nسَيَذْهَبُ (sa-yadhhabu) : il ira.\nسَوْفَ أَزورُ جَدَّتي (sawfa azūru jaddatī) : je rendrai visite à ma grand-mère." },
            { t: "verifie", q: "Que signifie سَنَلْعَبُ (sa-nalʿabu) ?", choix: ["nous jouerons", "nous avons joué", "jouons !", "nous ne jouerons pas"], bonne: 0, explication: "سَـ + نَلْعَبُ (nalʿabu, nous jouons) = le futur : nous jouerons. « Nous avons joué » serait l'accompli لَعِبْنا (laʿibnā), et « nous ne jouerons pas » لَنْ نَلْعَبَ (lan nalʿaba)." },
          ],
        },
        {
          titre: "Situer l'action et nier le futur",
          blocs: [
            { t: "schema", titre: "Hier, maintenant, demain", legende: "Les marqueurs de temps placent l'action sur la ligne du temps, et le verbe suit : l'accompli pour le passé, l'inaccompli pour le présent, le futur pour l'avenir.", svg: `<svg viewBox="0 0 400 226"><rect class="aplat" x="132" y="60" width="258" height="20" rx="5"/><line class="trait" x1="10" y1="70" x2="392" y2="70" marker-end="url(#fl)"/><circle cx="35" cy="70" r="4" fill="var(--encre)"/><circle cx="100" cy="70" r="6" fill="var(--pigment)"/><circle cx="160" cy="70" r="4" fill="var(--encre)"/><circle cx="225" cy="70" r="4" fill="var(--encre)"/><circle cx="332" cy="70" r="4" fill="var(--encre)"/><text class="texte-pigment" x="262" y="18" text-anchor="middle">l'avenir</text><g class="texte" ${AR(17)}><text x="35" y="50">أمس</text><text x="100" y="50">الآن</text><text x="160" y="50">غَدًا</text><text x="225" y="50">بَعْدَ غَدٍ</text><text x="332" y="50">الأُسْبوعَ القادِمَ</text></g><g class="texte-petit" text-anchor="middle"><text x="35" y="94">hier</text><text x="35" y="107">ams</text><text x="100" y="94">maintenant</text><text x="100" y="107">al-ān</text><text x="160" y="94">demain</text><text x="160" y="107">ghadan</text><text x="225" y="94">après-demain</text><text x="225" y="107">baʿda ghadin</text><text x="332" y="94">la semaine prochaine</text><text x="332" y="107">al-usbūʿa l-qādima</text><text x="54" y="128">passé</text><text x="152" y="128">présent</text><text x="250" y="128">futur</text><text x="348" y="128">futur nié</text></g><rect class="aplat-papier trait-fin" x="10" y="136" width="88" height="82" rx="8"/><rect class="aplat-papier trait-fin" x="108" y="136" width="88" height="82" rx="8"/><rect class="aplat trait-fin" x="206" y="136" width="88" height="82" rx="8"/><rect class="aplat trait-fin" x="304" y="136" width="88" height="82" rx="8"/><g class="texte" ${AR(19)}><text x="54" y="170">ذَهَبْتُ</text><text x="152" y="170">أَذْهَبُ</text><text x="250" y="170">سَأَذْهَبُ</text><text x="348" y="170">لَنْ أَذْهَبَ</text></g><g class="texte-petit" text-anchor="middle"><text x="54" y="192">dhahabtu</text><text x="152" y="192">adhhabu</text><text x="250" y="192">sa-adhhabu</text><text x="348" y="192">lan adhhaba</text><text x="54" y="207">je suis allé</text><text x="152" y="207">je vais</text><text x="250" y="207">j'irai</text><text x="348" y="207">je n'irai pas</text></g></svg>` },
            { t: "liste", titre: "Les marqueurs du futur", items: ["غَدًا (ghadan) : demain", "بَعْدَ غَدٍ (baʿda ghadin) : après-demain", "الأُسْبوعَ القادِمَ (al-usbūʿa l-qādima) : la semaine prochaine ; السَّنَةَ القادِمَةَ (as-sanata l-qādima) : l'année prochaine", "في المُسْتَقْبَلِ (fī l-mustaqbal) : dans l'avenir, plus tard"] },
            { t: "propriete", titre: "Nier le futur : لَنْ + subjonctif", md: "Pour dire « je n'irai pas », on remplace سـ par **لَنْ** (lan), et la dernière voyelle du verbe devient une **fatha** (-a) : لَنْ أَذْهَبَ (lan adhhaba), je n'irai pas ; لَنْ نُسافِرَ (lan nusāfira), nous ne voyagerons pas.\nAvec أنتِ, le ن final tombe : لَنْ تَكْتُبي (lan taktubī), tu n'écriras pas." },
            { t: "attention", md: "==Jamais سـ après لن== : « لن سأذهب » est faux, car لَنْ contient déjà l'idée de futur. Ne le confonds pas non plus avec لَمْ (lam), qui nie le passé : لَمْ أَذْهَبْ (lam adhhab), je ne suis pas allé." },
            { t: "verifie", q: "Quelle phrase veut dire « Elle ne voyagera pas demain » ?", choix: ["لن تسافرَ غدًا", "لن ستسافر غدًا", "لم تسافر أمس", "ستسافر غدًا"], bonne: 0, explication: "لَنْ + inaccompli terminé par une fatha : lan tusāfira. On ne met jamais سـ après لن ; لم تسافر أمس veut dire « elle n'a pas voyagé hier », et ستسافر est affirmatif (elle voyagera)." },
          ],
        },
        {
          titre: "Former l'impératif",
          blocs: [
            { t: "texte", md: "Pour donner un ordre ou un conseil, l'arabe ==part de l'inaccompli à la 2e personne==, celui qui commence par تَـ (tu). Tu enlèves ce تَـ, puis la voyelle finale. Une seule question reste : le mot obtenu commence-t-il par deux consonnes ?" },
            { t: "etapes", titre: "La recette de l'impératif", items: [
              { titre: "Pars de « tu » à l'inaccompli", md: "تَكْتُبُ (taktubu) : tu écris." },
              { titre: "Enlève le préfixe تَـ", md: "Il reste ktubu : le mot commence par deux consonnes, k et t." },
              { titre: "Enlève la voyelle finale", md: "La damma finale est remplacée par un soukoun : ktub." },
              { titre: "Ajoute un alif si besoin", md: "Deux consonnes au début, c'est imprononçable : on ajoute un **alif**. Il se lit **u** si la voyelle du milieu est u (yaktubu → اُكْتُبْ, uktub), sinon **i** (yajlisu → اِجْلِسْ, ijlis ; yaftaḥu → اِفْتَحْ, iftaḥ)." },
            ] },
            { t: "tableau", titre: "Les impératifs de la classe", entetes: ["Inaccompli (tu)", "À un garçon", "À une fille", "À plusieurs", "Sens"], lignes: [
              ["تَكْتُبُ", "اُكْتُبْ (uktub)", "اُكْتُبي (uktubī)", "اُكْتُبوا (uktubū)", "écris"],
              ["تَنْظُرُ", "اُنْظُرْ (unẓur)", "اُنْظُري (unẓurī)", "اُنْظُروا (unẓurū)", "regarde"],
              ["تَجْلِسُ", "اِجْلِسْ (ijlis)", "اِجْلِسي (ijlisī)", "اِجْلِسوا (ijlisū)", "assieds-toi"],
              ["تَفْتَحُ", "اِفْتَحْ (iftaḥ)", "اِفْتَحي (iftaḥī)", "اِفْتَحوا (iftaḥū)", "ouvre"],
              ["تَسْمَعُ", "اِسْمَعْ (ismaʿ)", "اِسْمَعي (ismaʿī)", "اِسْمَعوا (ismaʿū)", "écoute"],
              ["تَقْرَأُ", "اِقْرَأْ (iqraʾ)", "اِقْرَئي (iqraʾī)", "اِقْرَؤوا (iqraʾū)", "lis"],
            ] },
            { t: "propriete", titre: "Pas de groupe de consonnes, pas d'alif", md: "Si, une fois le تَـ ou le تُـ enlevé, le mot commence par une consonne suivie d'une voyelle, on n'ajoute rien : تُسافِرُ → **سافِرْ** (sāfir), voyage ! ; تَتَكَلَّمُ → **تَكَلَّمْ** (takallam), parle ! ; تُساعِدُ → **ساعِدْ** (sāʿid), aide !\n\nTrois impératifs courts à connaître par cœur : **قُلْ** (qul) dis !, **نَمْ** (nam) dors !, **تَعالَ** (taʿāla) viens !" },
            { t: "verifie", q: "Comment dit-on « Écoute ! » à une fille ?", choix: ["اِسْمَعي (ismaʿī)", "اُسْمُعي (usmuʿī)", "تَسْمَعينَ (tasmaʿīna)", "اِسْمَعْ (ismaʿ)"], bonne: 0, explication: "La voyelle du milieu de تَسْمَعُ (tasmaʿu) est a : l'alif se lit donc i, ismaʿ ; pour une fille, on ajoute ـي : **ismaʿī**. تَسْمَعينَ est une affirmation (tu écoutes), et اِسْمَعْ s'adresse à un garçon." },
          ],
        },
        {
          titre: "Interdire et conseiller",
          blocs: [
            { t: "propriete", titre: "La défense : لا + inaccompli sans voyelle finale", md: "Pour interdire, on ne part pas de l'impératif : on garde le تَـ de l'inaccompli, on met **لا** devant et un soukoun à la fin.\nلا تَكْتُبْ (lā taktub) : n'écris pas ! ; لا تَتَأَخَّرْ (lā tataʾakhkhar) : ne sois pas en retard !\nÀ une fille : لا تَكْتُبي (lā taktubī) ; à plusieurs : لا تَكْتُبوا (lā taktubū)." },
            { t: "tableau", titre: "Quatre négations, quatre sens", entetes: ["Phrase", "Translittération", "Sens"], lignes: [
              ["لا يَكْتُبُ", "lā yaktubu", "il n'écrit pas (présent)"],
              ["لَنْ أَكْتُبَ", "lan aktuba", "je n'écrirai pas (futur)"],
              ["لا تَكْتُبْ", "lā taktub", "n'écris pas ! (défense)"],
              ["لَمْ تَكْتُبْ", "lam taktub", "tu n'as pas écrit (passé)"],
            ] },
            { t: "attention", md: "Regarde les deux dernières lignes : لا تَكْتُبْ et لَمْ تَكْتُبْ ont ==exactement la même forme de verbe==. Seul le petit mot placé devant change le sens : لا pour interdire, لَمْ pour nier le passé." },
            { t: "exemple", titre: "Les conseils d'une mère", md: "غَدًا سَأَزورُ جَدَّتي، وفي الصَّيْفِ سَوْفَ نُسافِرُ إلى تونس. قالَتْ أُمّي: نَمْ مُبَكِّرًا ولا تَتَأَخَّرْ!\n\n« Demain, je rendrai visite à ma grand-mère, et l'été nous voyagerons en Tunisie. Ma mère a dit : Dors tôt et ne sois pas en retard ! »\n\nOn repère deux futurs (sa-azūru, sawfa nusāfiru), un impératif (nam) et une défense (lā tataʾakhkhar)." },
            { t: "astuce", md: "Pour adoucir un ordre, ajoute مِنْ فَضْلِكَ (min faḍlika, s'il te plaît, à un garçon) ou مِنْ فَضْلِكِ (min faḍliki, à une fille) : اِجْلِسْ مِنْ فَضْلِكَ (ijlis min faḍlika), assieds-toi, s'il te plaît." },
          ],
        },
      ],
      bilan: "سَـ ou سَوْفَ devant l'inaccompli pour l'avenir, لَنْ pour le nier ; un soukoun et parfois un alif pour l'impératif ; لا + soukoun pour interdire.",
    },

    // ───────────────────────── 2. Racines et schèmes ─────────────────────────
    "3e-arabe-02-racines-schemes": {
      accroche: "Imagine une langue où trois lettres te permettent de deviner le sens d'une dizaine de mots. C'est l'arabe ! ك ت ب contient l'idée d'« écrire » : on la retrouve dans le livre, l'écrivain, le bureau et la bibliothèque. Bienvenue dans le système des racines.",
      objectifs: [
        "Identifier la racine de trois consonnes d'un mot",
        "Reconnaître les schèmes فاعِل (celui qui agit) et مَفْعول (ce qui subit l'action)",
        "Reconnaître les schèmes du lieu, du métier et de l'instrument",
        "Deviner le sens d'un mot nouveau grâce à sa racine et à son schème",
      ],
      sections: [
        {
          titre: "Trois consonnes, une idée",
          blocs: [
            { t: "definition", terme: "Racine", md: "Groupe de **trois consonnes**, dans un ordre fixe, qui porte une idée générale : ك ت ب (k-t-b) = écrire ; د ر س (d-r-s) = étudier ; ل ع ب (l-ʿ-b) = jouer. On ne la prononce jamais seule : elle a besoin d'un moule pour devenir un mot." },
            { t: "schema", titre: "L'arbre de la racine ك ت ب", legende: "Une racine, six mots. Dans la translittération, les trois consonnes de la racine sont en rouge : elles restent, dans le même ordre, quel que soit le mot.", svg: `<svg viewBox="0 0 400 290"><g class="trait-fin"><line x1="200" y1="145" x2="133" y2="45"/><line x1="200" y1="145" x2="133" y2="145"/><line x1="200" y1="145" x2="133" y2="245"/><line x1="200" y1="145" x2="267" y2="45"/><line x1="200" y1="145" x2="267" y2="145"/><line x1="200" y1="145" x2="267" y2="245"/></g><circle class="aplat-papier trait" cx="200" cy="145" r="46"/><text class="texte-petit" x="200" y="122" text-anchor="middle">racine</text><g class="c-rouge" ${AR(28)}><text x="200" y="157">ك ت ب</text></g><text class="texte-petit" x="200" y="177" text-anchor="middle">« écrire »</text><g class="aplat trait-fin"><rect x="8" y="10" width="125" height="70" rx="10"/><rect x="8" y="110" width="125" height="70" rx="10"/><rect x="8" y="210" width="125" height="70" rx="10"/><rect x="267" y="10" width="125" height="70" rx="10"/><rect x="267" y="110" width="125" height="70" rx="10"/><rect x="267" y="210" width="125" height="70" rx="10"/></g><g class="texte" ${AR(20)}><text x="70" y="41">كَتَبَ</text><text x="70" y="141">كاتِب</text><text x="70" y="241">كِتاب</text><text x="329" y="41">مَكْتَب</text><text x="329" y="141">مَكْتَبة</text><text x="329" y="241">مَكْتوب</text></g><g class="texte" text-anchor="middle"><text x="70" y="60"><tspan class="c-rouge">k</tspan>a<tspan class="c-rouge">t</tspan>a<tspan class="c-rouge">b</tspan>a</text><text x="70" y="160"><tspan class="c-rouge">k</tspan>ā<tspan class="c-rouge">t</tspan>i<tspan class="c-rouge">b</tspan></text><text x="70" y="260"><tspan class="c-rouge">k</tspan>i<tspan class="c-rouge">t</tspan>ā<tspan class="c-rouge">b</tspan></text><text x="329" y="60">ma<tspan class="c-rouge">kt</tspan>a<tspan class="c-rouge">b</tspan></text><text x="329" y="160">ma<tspan class="c-rouge">kt</tspan>a<tspan class="c-rouge">b</tspan>a</text><text x="329" y="260">ma<tspan class="c-rouge">kt</tspan>ū<tspan class="c-rouge">b</tspan></text></g><g class="texte-petit" text-anchor="middle"><text x="70" y="74">il a écrit</text><text x="70" y="174">écrivain</text><text x="70" y="274">livre</text><text x="329" y="74">bureau</text><text x="329" y="174">bibliothèque</text><text x="329" y="274">écrit, lettre</text></g></svg>` },
            { t: "texte", md: "Dans beaucoup de dictionnaires arabes, les mots sont ==rangés par racine== : pour trouver مَكْتَبة (maktaba), tu cherches à ك ت ب, et non à م. Le pluriel كُتُب (kutub, des livres) appartient bien sûr à la même famille." },
            { t: "verifie", q: "Lequel de ces mots appartient à la famille de د ر س (étudier) ?", choix: ["دَرْس (dars)", "مَدينة (madīna)", "مَكْتَب (maktab)", "لاعِب (lāʿib)"], bonne: 0, explication: "دَرْس (dars) = une leçon : on y trouve bien d, r, s. مَدينة vient de م د ن, مَكْتَب de ك ت ب et لاعِب de ل ع ب." },
          ],
        },
        {
          titre: "Les schèmes, des moules à mots",
          blocs: [
            { t: "definition", terme: "Schème", md: "Un **moule** de voyelles et de lettres ajoutées, dans lequel on coule une racine. Chaque moule donne une catégorie de sens. Les grammairiens arabes le notent avec trois lettres modèles, **ف ع ل** (f-ʿ-l), qui remplacent les trois consonnes de n'importe quelle racine." },
            { t: "schema", titre: "Couler une racine dans le moule مَفْعَل", legende: "Le moule fixe les voyelles et le m- du début ; la racine remplit les trois cases. Résultat : trois lieux, le stade, la cuisine et la piscine.", svg: `<svg viewBox="0 0 400 214"><text class="texte" x="16" y="24">Le moule du lieu :</text><text class="texte-pigment" x="134" y="24">mafʿal</text><g class="texte" ${AR(20)}><text x="362" y="27">مَفْعَل</text></g><rect class="aplat-papier trait-fin" x="115" y="38" width="40" height="32" rx="5"/><rect class="aplat trait" x="160" y="38" width="40" height="32" rx="5"/><rect class="aplat trait" x="205" y="38" width="40" height="32" rx="5"/><rect class="aplat-papier trait-fin" x="250" y="38" width="40" height="32" rx="5"/><rect class="aplat trait" x="295" y="38" width="40" height="32" rx="5"/><g class="texte-petit" text-anchor="middle"><text x="50" y="58">racine</text><text x="362" y="58">mot</text></g><g class="texte" text-anchor="middle" style="font-size:16px"><text x="135" y="60">ma</text><text x="270" y="60">a</text><text x="135" y="108">ma</text><text x="270" y="108">a</text><text x="135" y="150">ma</text><text x="270" y="150">a</text><text x="135" y="192">ma</text><text x="270" y="192">a</text></g><g class="texte c-rouge" text-anchor="middle" style="font-size:16px"><text x="180" y="60">f</text><text x="225" y="64" style="font-size:24px">ʿ</text><text x="315" y="60">l</text><text x="50" y="108">l-ʿ-b</text><text x="180" y="108">l</text><text x="225" y="112" style="font-size:24px">ʿ</text><text x="315" y="108">b</text><text x="50" y="150">ṭ-b-kh</text><text x="180" y="150">ṭ</text><text x="225" y="150">b</text><text x="315" y="150">kh</text><text x="50" y="192">s-b-ḥ</text><text x="180" y="192">s</text><text x="225" y="192">b</text><text x="315" y="192">ḥ</text></g><g class="trait-fin"><line x1="80" y1="103" x2="108" y2="103" marker-end="url(#fl)"/><line x1="80" y1="145" x2="108" y2="145" marker-end="url(#fl)"/><line x1="80" y1="187" x2="108" y2="187" marker-end="url(#fl)"/></g><g class="texte" ${AR(19)}><text x="362" y="106">مَلْعَب</text><text x="362" y="148">مَطْبَخ</text><text x="362" y="190">مَسْبَح</text></g><g class="texte-petit" text-anchor="middle"><text x="362" y="121">stade</text><text x="362" y="163">cuisine</text><text x="362" y="205">piscine</text></g></svg>` },
            { t: "tableau", titre: "Les schèmes à connaître", entetes: ["Schème", "Sens", "Exemples", "Traduction"], lignes: [
              ["فاعِل (fāʿil)", "celui qui fait l'action", "كاتِب، لاعِب، ساكِن", "écrivain, joueur, habitant"],
              ["مَفْعول (mafʿūl)", "ce qui subit l'action", "مَكْتوب، مَفْتوح، مَكْسور", "écrit, ouvert, cassé"],
              ["مَفْعَل / مَفْعَلة (mafʿal / mafʿala)", "le lieu de l'action", "مَلْعَب، مَطْبَخ، مَدْرَسة، مَكْتَبة", "stade, cuisine, école, bibliothèque"],
              ["فَعّال (faʿʿāl)", "un métier", "طَبّاخ، خَبّاز", "cuisinier, boulanger"],
              ["مِفْعال (mifʿāl)", "un instrument", "مِفْتاح", "clé"],
            ] },
            { t: "texte", md: "Pour **فاعِل**, on glisse un ā long après la 1re consonne et un i après la 2e : ل ع ب → لاعِب (lāʿib), joueur ; س ك ن → ساكِن (sākin), habitant ; ق ر أ → قارِئ (qāriʾ), lecteur.\n\nPour **مَفْعول**, on ajoute ma- devant et un ū long avant la dernière consonne : ف ت ح (ouvrir) → مَفْتوح (maftūḥ), ouvert ; ك س ر (casser) → مَكْسور (maksūr), cassé." },
          ],
        },
        {
          titre: "Lieux, métiers, instruments",
          blocs: [
            { t: "liste", titre: "Des lieux en مَفْعَل", items: ["مَطْبَخ (maṭbakh) : la cuisine, de ط ب خ, cuisiner", "مَطْعَم (maṭʿam) : le restaurant, de ط ع م, nourrir", "مَسْبَح (masbaḥ) : la piscine, de س ب ح, nager", "مَتْحَف (matḥaf) : le musée, de ت ح ف, objet précieux", "مَخْبَز (makhbaz) : la boulangerie, de خ ب ز, le pain", "مَسْكَن (maskan) : le logement, de س ك ن, habiter"] },
            { t: "texte", md: "Dans **فَعّال**, la 2e consonne est doublée par une chadda et suivie d'un ā long : طَبّاخ (ṭabbākh), cuisinier ; خَبّاز (khabbāz), boulanger. Et **مِفْعال** désigne un instrument : مِفْتاح (miftāḥ), la clé, « l'outil pour ouvrir »." },
            { t: "exemple", titre: "Toute une famille : ط ب خ (cuisiner)", etapes: ["طَبَخَ (ṭabakha) : il a cuisiné → le verbe.", "طَبّاخ (ṭabbākh) : le cuisinier → faʿʿāl, le métier.", "مَطْبَخ (maṭbakh) : la cuisine, la pièce → mafʿal, le lieu.", "مَطْبوخ (maṭbūkh) : cuisiné, un plat cuisiné → mafʿūl, ce qui subit l'action."] },
            { t: "attention", md: "Un **م** au début n'est pas toujours ajouté par le schème ! مَدْرَسة (madrasa, école) vient de د ر س, mais مَدينة (madīna, ville) vient de **م د ن** : son م fait partie de la racine, comme le montre le pluriel مُدُن (mudun). ==Vérifie toujours qu'il te reste une racine connue.==" },
            { t: "verifie", q: "Racine خ ب ز (le pain). Que désigne مَخْبَز (makhbaz) ?", choix: ["la boulangerie", "le boulanger", "le pain", "il a fait du pain"], bonne: 0, explication: "Le schème **مَفْعَل** indique un lieu : le lieu où l'on fait le pain, la boulangerie. Le boulanger est خَبّاز (khabbāz, faʿʿāl), le pain خُبْز (khubz) et « il a fait du pain » خَبَزَ (khabaza)." },
          ],
        },
        {
          titre: "La méthode du détective",
          blocs: [
            { t: "etapes", titre: "Deviner le sens d'un mot nouveau", items: [
              { titre: "Repère le moule", md: "Quelles lettres et quelles voyelles sont ajoutées ? Dans مَسْبَح (masbaḥ), le م du début et les voyelles a…a forment le schème مَفْعَل." },
              { titre: "Isole la racine", md: "Il reste trois consonnes : س ب ح (s-b-ḥ)." },
              { titre: "Retrouve l'idée", md: "س ب ح évoque la nage : سِباحة (sibāḥa), la natation." },
              { titre: "Applique le sens du schème", md: "mafʿal = le lieu : مَسْبَح est le lieu où l'on nage, la piscine !" },
            ] },
            { t: "exemple", titre: "Deux panneaux à l'aéroport", md: "Tu lis مَدْخَل (madkhal) et مَخْرَج (makhraj). Tu connais دَخَلَ (dakhala, il est entré) et خَرَجَ (kharaja, il est sorti). Le moule mafʿal indique un lieu : مَدْخَل est l'**entrée**, مَخْرَج la **sortie**." },
            { t: "savais-tu", md: "Le mot français « magasin » vient, par l'italien, de l'arabe مَخْزَن (makhzan) : un lieu (schème mafʿal !) où l'on entrepose les marchandises, de la racine خ ز ن, stocker." },
          ],
        },
      ],
      bilan: "Une racine de trois consonnes porte l'idée, un schème lui donne une forme : retire le moule, trouve la racine, applique le sens du moule, et le mot inconnu se dévoile.",
    },

    // ───────────────────────── 3. Subordonnées ─────────────────────────
    "3e-arabe-03-subordonnees": {
      accroche: "« J'aime l'été parce que la mer est chaude. S'il fait beau, j'irai à la plage. » Pour passer de petites phrases à un vrai récit, il te faut des mots de liaison. L'arabe en a quatre essentiels : لأنّ، عندما، إذا، أنْ. Chacun a sa petite règle.",
      objectifs: [
        "Exprimer la cause avec لِأَنَّ (li-anna), suivi d'un nom ou d'un pronom suffixe",
        "Exprimer le temps avec عِنْدَما (ʿindamā) et la condition avec إِذا (idhā)",
        "Exprimer la volonté et l'obligation avec أَنْ (an) + subjonctif",
      ],
      sections: [
        {
          titre: "Quatre mots pour relier les idées",
          blocs: [
            { t: "tableau", titre: "Les mots de liaison", entetes: ["Mot", "Sens", "Ce qui suit", "Exemple"], lignes: [
              ["لِأَنَّ (li-anna)", "parce que", "un nom à l'accusatif ou un pronom suffixe", "لأنّ البحرَ دافئٌ : parce que la mer est chaude"],
              ["عِنْدَما (ʿindamā)", "quand, lorsque", "un verbe", "عندما أذهب إلى الشاطئ : quand je vais à la plage"],
              ["إِذا (idhā)", "si", "un verbe, souvent à l'accompli", "إذا نجحتُ : si je réussis"],
              ["أَنْ (an)", "que, de (+ verbe)", "un inaccompli au subjonctif", "أريد أن أذهبَ : je veux aller"],
            ] },
            { t: "texte", md: "Ces mots répondent à des questions : لِماذا؟ (li-mādhā, pourquoi ?) appelle لأنّ ; مَتى؟ (matā, quand ?) appelle عندما. ==Attention : عندما ne sert jamais à poser une question.==" },
          ],
        },
        {
          titre: "La cause : لأنّ",
          blocs: [
            { t: "propriete", titre: "لأنّ + nom à l'accusatif ou pronom suffixe", md: "لأنّ appartient à la famille de **أنّ** (anna) : comme elle, il met le nom qui le suit à l'**accusatif** (fatha) : لأنّ الطقسَ جميلٌ (li-anna ṭ-ṭaqsa jamīlun), parce que le temps est beau.\nDevant un verbe, on lui accroche le **pronom suffixe** du sujet : لأنّني أحبّ اللغات (li-annanī uḥibbu l-lughāt), parce que j'aime les langues." },
            { t: "schema", titre: "Ce qui peut suivre لأنّ", legende: "Deux constructions correctes, deux erreurs fréquentes : après لأنّ, jamais de verbe ni de pronom séparé (أنا).", svg: `<svg viewBox="0 0 400 214"><rect class="aplat trait" x="140" y="8" width="120" height="48" rx="10"/><g class="texte" ${AR(24)}><text x="200" y="42">لِأَنَّ</text></g><g class="trait-fin"><line x1="168" y1="56" x2="80" y2="88" marker-end="url(#fl)"/><line x1="200" y1="56" x2="200" y2="88" marker-end="url(#fl)"/><line x1="232" y1="56" x2="320" y2="88" marker-end="url(#fl)"/></g><rect class="aplat-papier trait-fin" x="10" y="92" width="120" height="114" rx="8"/><rect class="aplat-papier trait-fin" x="140" y="92" width="120" height="114" rx="8"/><rect class="aplat-papier pointille" x="270" y="92" width="120" height="114" rx="8"/><g class="texte-petit" text-anchor="middle"><text x="70" y="110">+ nom à l'accusatif</text><text x="200" y="110">+ pronom suffixe</text><text x="330" y="110">jamais de verbe</text><text x="70" y="166">al-jawwa bāridun</text><text x="70" y="182">il fait froid</text><text x="200" y="166">li-annanī marīḍun</text><text x="200" y="182">car je suis malade</text></g><g class="texte" ${AR(18)}><text x="70" y="143">الجَوَّ بارِدٌ</text><text x="200" y="143">لِأَنَّني مَريضٌ</text><text x="330" y="140">لأنّ أنا مريض</text><text x="330" y="172">لأنّ أحبّ</text></g><g class="trait"><line x1="284" y1="134" x2="376" y2="134"/><line x1="298" y1="166" x2="362" y2="166"/></g><text class="texte-pigment" x="330" y="197" text-anchor="middle">faux !</text></svg>` },
            { t: "tableau", titre: "لأنّ + pronoms suffixes", entetes: ["Forme", "Translittération", "Sens"], lignes: [
              ["لأنّني", "li-annanī", "parce que je"],
              ["لأنّكَ", "li-annaka", "parce que tu (garçon)"],
              ["لأنّكِ", "li-annaki", "parce que tu (fille)"],
              ["لأنّه", "li-annahu", "parce qu'il"],
              ["لأنّها", "li-annahā", "parce qu'elle"],
              ["لأنّنا", "li-annanā", "parce que nous"],
            ] },
            { t: "verifie", q: "Complète : « أحبّها ___ لطيفة. » (Je l'aime parce qu'elle est gentille.)", choix: ["لأنّها", "لأنّ هي", "لأنّ", "عندما"], bonne: 0, explication: "Il faut accrocher le pronom ـها à لأنّ : لأنّها لطيفة (li-annahā laṭīfa). لأنّ هي est faux, car on ne met jamais de pronom séparé après لأنّ ; عندما voudrait dire « quand »." },
          ],
        },
        {
          titre: "Le temps et la condition : عندما et إذا",
          blocs: [
            { t: "texte", md: "**عِنْدَما** (ʿindamā) situe une action par rapport à une autre : عندما وصلتُ، كانت أمّي في المطبخ (ʿindamā waṣaltu, kānat ummī fī l-maṭbakh), quand je suis arrivé, ma mère était dans la cuisine. Il peut être suivi d'un accompli (un moment passé) ou d'un inaccompli (une habitude) : عندما أذهب إلى الشاطئ أسبح كثيرًا, quand je vais à la plage, je nage beaucoup." },
            { t: "propriete", titre: "La phrase conditionnelle avec إذا", md: "**إذا** (idhā) + verbe à l'**accompli**, même pour un sens présent ou futur : إذا نجحتُ (idhā najaḥtu) = si je réussis.\nSi la conséquence est au **futur** ou à l'**impératif**, elle commence par **فَـ** (fa-), collé au mot suivant : إذا نجحتُ في الامتحان فسأسافر (fa-sa-usāfiru), si je réussis l'examen, je voyagerai." },
            { t: "schema", titre: "Condition, puis conséquence", legende: "On lit de droite à gauche : d'abord la condition avec إذا, puis la conséquence ouverte par فَـ.", svg: `<svg viewBox="0 0 400 222"><g class="texte-petit" text-anchor="middle"><text x="300" y="18">1. la condition</text><text x="100" y="18">2. la conséquence</text></g><rect class="aplat trait" x="210" y="28" width="180" height="76" rx="10"/><rect class="aplat-papier trait" x="10" y="28" width="180" height="76" rx="10"/><line class="trait" x1="208" y1="66" x2="194" y2="66" marker-end="url(#fl)"/><g class="texte" ${AR(24)}><text x="300" y="66">إذا</text><text x="100" y="66">فَـ</text></g><g class="texte-petit" text-anchor="middle"><text x="300" y="90">+ verbe à l'accompli</text><text x="100" y="90">+ futur ou impératif</text><text x="300" y="158">si je réussis l'examen</text><text x="100" y="158">je voyagerai au Maroc</text><text x="300" y="208">si tu arrives</text><text x="100" y="208">appelle-moi !</text></g><g class="texte" ${AR(17)}><text x="300" y="138">إذا نجحتُ في الامتحان</text><text x="100" y="138">فسأسافر إلى المغرب</text><text x="300" y="188">إذا وصلتَ</text><text x="100" y="188">فاتّصلْ بي</text></g></svg>` },
            { t: "attention", md: "« Quand ? » dans une question se dit **مَتى** (matā) : متى تصل؟ (matā taṣil ?), quand arrives-tu ? عندما relie deux idées dans une phrase, il ne pose jamais de question." },
            { t: "verifie", q: "Que signifie « إذا كان الجوّ جميلًا غدًا فسأذهب إلى الشاطئ » ?", choix: ["S'il fait beau demain, j'irai à la plage.", "Quand il faisait beau, j'allais à la plage.", "Il fait beau parce que je vais à la plage.", "Demain, il ne fera pas beau à la plage."], bonne: 0, explication: "إذا + accompli (كان) introduit la condition ; غدًا la place dans l'avenir ; فسأذهب (fa-sa-adhhabu) est la conséquence au futur. Ni passé, ni cause, ni négation." },
          ],
        },
        {
          titre: "Vouloir, devoir : أنْ + subjonctif",
          blocs: [
            { t: "propriete", titre: "أنْ + inaccompli au subjonctif", md: "Après les verbes de volonté (أريد, urīdu, je veux), d'obligation (يجب, yajibu, il faut) ou de possibilité (يمكن, yumkin, il est possible), on emploie **أَنْ** + inaccompli au **subjonctif** : la damma finale devient **fatha**.\nأريد أن أذهبَ (urīdu an adhhaba) : je veux aller ; يجب أن تدرسَ (yajibu an tadrusa) : tu dois étudier." },
            { t: "tableau", titre: "Du présent au subjonctif", entetes: ["Inaccompli (présent)", "Après أنْ (subjonctif)", "Sens"], lignes: [
              ["أَذْهَبُ (adhhabu)", "أَنْ أَذْهَبَ (an adhhaba)", "(que j') aille"],
              ["تَدْرُسُ (tadrusu)", "أَنْ تَدْرُسَ (an tadrusa)", "(que tu) étudies, garçon"],
              ["تَدْرُسينَ (tadrusīna)", "أَنْ تَدْرُسي (an tadrusī)", "(que tu) étudies, fille"],
              ["نُسافِرُ (nusāfiru)", "أَنْ نُسافِرَ (an nusāfira)", "(que nous) voyagions"],
              ["يَكْتُبونَ (yaktubūna)", "أَنْ يَكْتُبوا (an yaktubū)", "(qu'ils) écrivent"],
            ] },
            { t: "attention", md: "Deux pièges : au subjonctif, ==les formes en ـينَ et ـونَ perdent leur ن== (« أن تدرسين » est faux) ; et jamais de سـ après أن (« أن سأذهب » est faux).\n\nNe confonds pas **أَنْ** (an, + verbe) et **أَنَّ** (anna, + nom ou pronom) : أعرف أنّكَ تدرس (aʿrifu annaka tadrusu), je sais que tu étudies. D'ailleurs, لأنّ = لِـ (pour) + أنّ." },
            { t: "exemple", titre: "Un petit texte qui relie tout", md: "أحبّ الصيف لأنّ البحرَ دافئٌ. عندما أذهب إلى الشاطئ أسبح كثيرًا. إذا كان الجوّ جميلًا غدًا فسأذهب مع أصدقائي، لأنّني أريد أن أسبحَ معهم.\n\n« J'aime l'été parce que la mer est chaude. Quand je vais à la plage, je nage beaucoup. S'il fait beau demain, j'irai avec mes amis, parce que je veux nager avec eux. »\n\nQuatre liens, quatre règles : un nom à l'accusatif après لأنّ, un verbe après عندما, فـ devant le futur après إذا, une fatha après أن." },
          ],
        },
      ],
      bilan: "لأنّ veut un nom ou un pronom, عندما relie deux moments, إذا appelle فـ devant le futur, أن exige le subjonctif : avec ces quatre outils, tes phrases deviennent des raisonnements.",
    },

    // ───────────────────────── 4. Comparatif et superlatif ─────────────────────────
    "3e-arabe-04-comparatif-superlatif": {
      accroche: "Le Nil est le plus long fleuve d'Afrique, l'Algérie le plus grand pays du continent, et le train va plus vite que le bus. Pour comparer, l'arabe n'empile pas de petits mots comme « plus… que » : il change le moule de l'adjectif. Encore un schème !",
      objectifs: [
        "Former l'élatif أَفْعَل (afʿal) à partir d'un adjectif",
        "Comparer deux éléments avec أفعل + مِنْ (min)",
        "Dire « le plus… » et « le meilleur » avec le superlatif",
      ],
      sections: [
        {
          titre: "Un moule pour comparer : أَفْعَل",
          blocs: [
            { t: "definition", terme: "Élatif", md: "Forme de l'adjectif construite sur le schème **أَفْعَل** (afʿal) : on place les trois consonnes de l'adjectif dans le moule a-F-ʿ-a-L. La même forme sert au comparatif (plus… que) et au superlatif (le plus…)." },
            { t: "tableau", titre: "De l'adjectif à l'élatif", entetes: ["Adjectif", "Élatif", "Sens"], lignes: [
              ["كَبير (kabīr) : grand", "أَكْبَر (akbar)", "plus grand, plus âgé"],
              ["صَغير (ṣaghīr) : petit", "أَصْغَر (aṣghar)", "plus petit, plus jeune"],
              ["طَويل (ṭawīl) : long, grand", "أَطْوَل (aṭwal)", "plus long, plus grand (de taille)"],
              ["جَميل (jamīl) : beau", "أَجْمَل (ajmal)", "plus beau"],
              ["سَريع (sarīʿ) : rapide", "أَسْرَع (asraʿ)", "plus rapide"],
              ["قَديم (qadīm) : ancien", "أَقْدَم (aqdam)", "plus ancien"],
              ["سَهْل (sahl) : facile", "أَسْهَل (ashal)", "plus facile"],
              ["صَعْب (ṣaʿb) : difficile", "أَصْعَب (aṣʿab)", "plus difficile"],
              ["هادِئ (hādiʾ) : calme", "أَهْدَأ (ahdaʾ)", "plus calme"],
            ] },
            { t: "propriete", titre: "Deux cas particuliers", md: "**Consonnes identiques** : si les deux dernières consonnes de la racine sont les mêmes, elles fusionnent sous une chadda : قَليل (qalīl, peu ; racine ق ل ل) → **أَقَلّ** (aqall), moins ; مُهِمّ (muhimm, important) → **أَهَمّ** (ahamm), plus important.\n**Irrégulier** : جَيِّد (jayyid) ou حَسَن (ḥasan), bon → **أَفْضَل** (afḍal) ou **أَحْسَن** (aḥsan) : meilleur, mieux." },
            { t: "verifie", q: "Quel est l'élatif de قَريب (qarīb, proche) ?", choix: ["أَقْرَب (aqrab)", "قَريبة (qarība)", "مَقْرَب (maqrab)"], bonne: 0, explication: "On place ق ر ب dans le moule **أَفْعَل** : aqrab, plus proche. قَريبة n'est que le féminin de l'adjectif, et مَقْرَب applique le moule du lieu (mafʿal), qui ne compare rien." },
          ],
        },
        {
          titre: "Comparer : أفعل + مِنْ",
          blocs: [
            { t: "propriete", titre: "Le comparatif", md: "**élatif + مِنْ (min, que)** : القطار أسرع من الحافلة (al-qiṭār asraʿu min al-ḥāfila), le train est plus rapide que le bus. Pas de verbe « être » : c'est une phrase nominale.\n==L'élatif reste invariable== : هو أكبر منّي (huwa akbaru minnī), il est plus âgé que moi ; هي أكبر منّي (hiya akbaru minnī), elle est plus âgée que moi. La forme « أكبرة » n'existe pas." },
            { t: "schema", titre: "Trois marches pour comparer", legende: "Un seul moule, أَفْعَل, pour monter les marches : أكبر من تونس (plus grand que Tunis), puis أكبر مدينة (la plus grande ville).", svg: `<svg viewBox="0 0 400 226"><line class="trait" x1="14" y1="215" x2="386" y2="215"/><rect class="aplat trait-fin" x="30" y="165" width="90" height="50" rx="4"/><rect class="aplat trait-fin" x="155" y="120" width="90" height="95" rx="4"/><rect class="aplat trait" x="280" y="70" width="90" height="145" rx="4"/><g class="texte" ${AR(20)}><text x="75" y="128">كَبير</text><text x="200" y="83">أَكْبَرُ مِنْ</text><text x="325" y="33">الأَكْبَر</text></g><g class="texte" text-anchor="middle"><text x="75" y="144">kabīr</text><text x="200" y="99">akbaru min</text><text x="325" y="49">al-akbar</text><text x="75" y="204">adjectif</text><text x="200" y="204">comparatif</text><text x="325" y="204">superlatif</text></g><g class="texte-petit" text-anchor="middle"><text x="75" y="158">grand</text><text x="200" y="113">plus grand que</text><text x="325" y="63">le plus grand</text></g></svg>` },
            { t: "tableau", titre: "مِنْ + pronom suffixe", entetes: ["Forme", "Translittération", "Sens"], lignes: [
              ["مِنّي", "minnī", "que moi"],
              ["مِنْكَ", "minka", "que toi (garçon)"],
              ["مِنْكِ", "minki", "que toi (fille)"],
              ["مِنْهُ", "minhu", "que lui"],
              ["مِنْها", "minhā", "qu'elle"],
              ["مِنّا", "minnā", "que nous"],
            ] },
            { t: "exemple", titre: "Comparer des villes et des personnes", md: "القاهرة أكبر من تونس، لكنّ تونس أهدأ. أختي أصغر منّي، لكنّها أطول منّي!\n\n« Le Caire est plus grand que Tunis, mais Tunis est plus calme. Ma sœur est plus jeune que moi, mais elle est plus grande que moi ! » Pour l'âge, on dit أكبر / أصغر ; pour la taille, أطول." },
            { t: "astuce", md: "Pour les adjectifs longs qui n'entrent pas dans le moule (comme مُزْدَحِم, muzdaḥim, encombré), on dit **أكثر** (akthar, plus) + le nom de la qualité à l'accusatif : المدينة أكثر ازدحامًا من القرية (al-madīna akthar izdiḥāman min al-qarya), la ville est plus encombrée que le village." },
          ],
        },
        {
          titre: "Le superlatif : le plus…, le meilleur",
          blocs: [
            { t: "propriete", titre: "Trois constructions du superlatif", md: "1. **élatif + nom indéfini singulier** : أكبرُ مدينةٍ (akbaru madīnatin), la plus grande ville ; النيل أطول نهر في أفريقيا, le Nil est le plus long fleuve d'Afrique.\n2. **élatif + nom défini pluriel** : أكبرُ المدنِ (akbaru l-mudun), la plus grande des villes.\n3. **élatif avec l'article** : الأكبر (al-akbar), le plus grand." },
            { t: "graphique", type: "barres", titre: "Les plus grands pays d'Afrique", unite: "millions de km²", donnees: [{ label: "Algérie", valeur: 2.38 }, { label: "RD Congo", valeur: 2.34 }, { label: "Soudan", valeur: 1.86 }, { label: "Libye", valeur: 1.76 }, { label: "Tchad", valeur: 1.28 }] },
            { t: "texte", md: "الجزائر أكبر بلد في أفريقيا (al-Jazāʾir akbaru baladin fī Afrīqiyā) : l'Algérie est le plus grand pays d'Afrique, depuis la partition du Soudan en 2011." },
            { t: "attention", md: "L'ordre des mots change tout ! أكبر مدينة = la plus grande ville (superlatif) ; مدينة أكبر = une ville plus grande ; المدينة أكبر = la ville est plus grande. Et pas d'article devant أفضل suivi d'un nom : هو أفضل طالب في الصفّ (huwa afḍalu ṭālibin fī ṣ-ṣaff), c'est le meilleur élève de la classe." },
            { t: "savais-tu", md: "Le Sahara s'appelle en arabe الصحراء الكبرى (aṣ-Ṣaḥrāʾ al-Kubrā), « le Grand Désert ». **الكُبْرى** (al-kubrā) est le féminin de الأكبر, employé parce que صحراء est féminin." },
            { t: "verifie", q: "Comment dit-on « la plus belle ville » ?", choix: ["أجمل مدينة", "مدينة أجمل", "المدينة أجمل", "أجمل من مدينة"], bonne: 0, explication: "Superlatif = **élatif + nom indéfini** : أجملُ مدينةٍ (ajmalu madīnatin). مدينة أجمل = une ville plus belle, المدينة أجمل = la ville est plus belle, أجمل من مدينة = plus beau qu'une ville." },
          ],
        },
      ],
      bilan: "Un moule, أَفْعَل : suivi de مِنْ, il compare ; suivi d'un nom indéfini ou précédé de l'article, il désigne le plus grand, le plus beau, le meilleur.",
    },

    // ───────────────────────── 5. Médias et technologie ─────────────────────────
    "3e-arabe-05-medias-technologie": {
      accroche: "Combien d'heures passes-tu sur ton téléphone ? Qui vérifie les informations que tu lis ? En arabe aussi, on parle d'écrans, d'applications et de fausses informations. Et devine quoi : beaucoup de ces mots se construisent avec des racines que tu sais déjà décoder.",
      objectifs: [
        "Nommer les médias et les outils numériques",
        "Dire ce que tu fais en ligne, à quelle fréquence et combien de temps",
        "Donner ton avis sur les écrans, les réseaux et l'information",
      ],
      sections: [
        {
          titre: "Les mots des écrans",
          blocs: [
            { t: "tableau", titre: "Outils et médias", entetes: ["Mot", "Sens", "Pour retenir"], lignes: [
              ["حاسوب (ḥāsūb)", "ordinateur", "racine ح س ب, compter ; on dit aussi كمبيوتر (kumbyūtar)"],
              ["هاتف محمول (hātif maḥmūl)", "téléphone portable", "مَحْمول : « porté », schème mafʿūl de ح م ل, porter"],
              ["شاشة (shāsha)", "écran", "شاشة كبيرة : un grand écran"],
              ["تطبيق (taṭbīq)", "application", "تطبيقات (taṭbīqāt) : des applications"],
              ["كلمة السرّ (kalimat as-sirr)", "mot de passe", "mot à mot « le mot du secret »"],
              ["تلفاز (tilfāz) / إذاعة (idhāʿa)", "télévision / radio", "on entend aussi تلفزيون (tilfizyūn)"],
              ["جريدة (jarīda) / مجلّة (majalla)", "journal / magazine", "صحفي (ṣaḥafī) : journaliste"],
              ["موقع (mawqiʿ)", "site (internet)", "مواقع (mawāqiʿ) : des sites"],
              ["مواقع التواصل الاجتماعي", "réseaux sociaux", "mawāqiʿ at-tawāṣul al-ijtimāʿī : « les sites de la communication sociale »"],
            ] },
            { t: "schema", titre: "L'écran d'accueil d'un téléphone", legende: "Sur un téléphone réglé en arabe, la première application est en haut à droite : on lit l'écran de droite à gauche.", svg: `<svg viewBox="0 0 400 260"><rect class="aplat-papier trait" x="130" y="8" width="140" height="244" rx="20"/><rect class="aplat" x="140" y="30" width="120" height="196" rx="6"/><line class="trait" x1="185" y1="19" x2="215" y2="19"/><line class="trait" x1="180" y1="240" x2="220" y2="240"/><g class="aplat-papier trait-fin"><rect x="212" y="40" width="32" height="32" rx="8"/><rect x="156" y="40" width="32" height="32" rx="8"/><rect x="212" y="102" width="32" height="32" rx="8"/><rect x="156" y="102" width="32" height="32" rx="8"/><rect x="212" y="164" width="32" height="32" rx="8"/><rect x="156" y="164" width="32" height="32" rx="8"/></g><path class="trait-fin" d="M218 48 h20 a3 3 0 0 1 3 3 v8 a3 3 0 0 1 -3 3 h-11 l-5 4 v-4 h-4 a3 3 0 0 1 -3 -3 v-8 a3 3 0 0 1 3 -3 z"/><g class="trait-fin"><rect x="163" y="47" width="18" height="18" rx="2"/><line x1="166" y1="52" x2="178" y2="52"/><line x1="166" y1="56.5" x2="178" y2="56.5"/><line x1="166" y1="61" x2="174" y2="61"/><path d="M160 127 L167 115 L173 122 L178 117 L184 127 Z"/><rect x="162" y="173" width="20" height="14" rx="6"/><line x1="166" y1="180" x2="171" y2="180"/><line x1="168.5" y1="177.5" x2="168.5" y2="182.5"/></g><path class="aplat-fort" d="M223 108 L237 118 L223 128 Z"/><circle class="aplat-fort" cx="180" cy="110" r="2.5"/><circle class="aplat-fort" cx="178" cy="180" r="2"/><path class="aplat-fort" d="M228 191 C 220 182 220 171 228 169 C 236 171 236 182 228 191 Z"/><circle class="aplat-papier" cx="228" cy="176" r="3"/><g class="texte" ${AR(16)}><text x="228" y="90">رسائل</text><text x="172" y="90">أخبار</text><text x="228" y="152">فيديو</text><text x="172" y="152">صور</text><text x="228" y="214">خريطة</text><text x="172" y="214">ألعاب</text></g><g class="texte"><text x="282" y="58">messages</text><text x="282" y="120">vidéos</text><text x="282" y="182">carte, plan</text><text x="118" y="58" text-anchor="end">informations</text><text x="118" y="120" text-anchor="end">photos</text><text x="118" y="182" text-anchor="end">jeux</text></g><g class="texte-petit"><text x="282" y="72">rasāʾil</text><text x="282" y="134">fīdyū</text><text x="282" y="196">kharīṭa</text><text x="118" y="72" text-anchor="end">akhbār</text><text x="118" y="134" text-anchor="end">ṣuwar</text><text x="118" y="196" text-anchor="end">alʿāb</text></g></svg>` },
            { t: "verifie", q: "Que signifie مَجَلّة (majalla) ?", choix: ["un magazine", "une radio", "un écran", "une application"], bonne: 0, explication: "**مجلّة** = magazine. La radio se dit إذاعة (idhāʿa), l'écran شاشة (shāsha) et une application تطبيق (taṭbīq)." },
          ],
        },
        {
          titre: "Parler de ses usages",
          blocs: [
            { t: "liste", titre: "Les verbes du numérique", items: ["أستعمل (astaʿmilu) : j'utilise", "أشاهد (ushāhidu) : je regarde", "أرسل (ursilu) : j'envoie ; أرسلتُ (arsaltu) : j'ai envoyé. Même racine que رسالة (risāla), le message, « ce qu'on envoie »", "أبحث عن (abḥathu ʿan) : je cherche (quelque chose)", "أنشر (anshuru) : je publie", "أتّصل بـ (attaṣilu bi-) : j'appelle (quelqu'un)"] },
            { t: "tableau", titre: "Fréquence et durée", entetes: ["Expression", "Sens", "Exemple"], lignes: [
              ["دائمًا (dāʾiman)", "toujours", "أستعمل هاتفي دائمًا : j'utilise toujours mon téléphone"],
              ["أحيانًا (aḥyānan)", "parfois", "أشاهد الفيديوهات أحيانًا : je regarde parfois des vidéos"],
              ["كلّ يوم / كلّ مساء (kull yawm / kull masāʾ)", "chaque jour / chaque soir", "أشاهد التلفاز كلّ مساء : je regarde la télévision tous les soirs"],
              ["مرّة في الأسبوع (marra fī l-usbūʿ)", "une fois par semaine", "أتّصل بجدّي مرّة في الأسبوع : j'appelle mon grand-père une fois par semaine"],
              ["لا … أبدًا (lā … abadan)", "ne … jamais", "لا أنشر صوري أبدًا : je ne publie jamais mes photos"],
            ] },
            { t: "propriete", titre: "Le duel pour la durée", md: "Pour « deux », l'arabe a une forme spéciale, le **duel** : ساعة (sāʿa, heure) → ساعتين (sāʿatayn, deux heures). أستعمل هاتفي ساعتين في اليوم : j'utilise mon téléphone deux heures par jour.\nNe confonds pas avec l'heure précise : في الساعة الثانية (fī s-sāʿa ath-thāniya), à deux heures." },
            { t: "exemple", titre: "Mon téléphone et moi", md: "أستعمل هاتفي ساعتين في اليوم. أشاهد الفيديوهات وأرسل رسائل إلى أصدقائي. في رأيي، الإنترنت مفيد، لكنّه خطير أحيانًا بسبب الأخبار الكاذبة.\n\n« J'utilise mon téléphone deux heures par jour. Je regarde des vidéos et j'envoie des messages à mes amis. À mon avis, internet est utile, mais il est parfois dangereux à cause des fausses informations. »" },
          ],
        },
        {
          titre: "Donner son avis et vérifier l'information",
          blocs: [
            { t: "liste", titre: "Pour argumenter", items: ["في رأيي (fī raʾyī) : à mon avis", "مفيد (mufīd) : utile ; ممتع (mumtiʿ) : agréable, amusant", "خطير (khaṭīr) : dangereux", "إيجابيات (ījābiyyāt) : avantages ; سلبيات (salbiyyāt) : inconvénients", "لكنّه (lākinnahu) : mais il… Comme لأنّ, لكنّ prend un pronom suffixe."] },
            { t: "texte", md: "خبر (khabar), une nouvelle, a pour pluriel brisé أخبار (akhbār), les informations ; نشرة الأخبار (nashrat al-akhbār), c'est le journal télévisé. Une « fake news » se dit خبر كاذب, au pluriel **أخبار كاذبة** (akhbār kādhiba) : كاذب (kādhib, menteur) suit le schème fāʿil de ك ذ ب (mentir). L'adjectif est au féminin, car un pluriel de choses s'accorde comme un féminin singulier." },
            { t: "etapes", titre: "Avant de partager une information", items: [
              { titre: "اِقْرَأْ كُلَّ الخَبَرِ (iqraʾ kulla l-khabar)", md: "Lis toute l'information, pas seulement le titre." },
              { titre: "اِبْحَثْ عَنِ المَصْدَرِ (ibḥath ʿani l-maṣdar)", md: "Cherche la source : qui a écrit ? Un journal connu ? مَصْدَر (maṣdar) suit le moule mafʿal : « le lieu d'où vient l'information »." },
              { titre: "قارِنْ (qārin)", md: "Compare avec d'autres sites ou une autre جريدة (jarīda, journal)." },
              { titre: "لا تَنْشُرْ (lā tanshur)", md: "Si tu doutes, ne publie pas : c'est peut-être un خبر كاذب." },
            ] },
            { t: "savais-tu", md: "Faute de clavier arabe sur les premiers téléphones, beaucoup de jeunes ont écrit l'arabe en lettres latines et en chiffres : c'est l'**arabizi**. Les chiffres remplacent les sons sans équivalent grâce à leur forme : **3** ressemble à ع, **7** à ح. Ainsi مرحبا (marḥaban, bonjour) s'écrit « mar7aba »." },
            { t: "verifie", q: "Que signifie « لا أشاهد التلفاز أبدًا » ?", choix: ["Je ne regarde jamais la télévision.", "Je regarde parfois la télévision.", "Je regarde toujours la télévision.", "Ne regarde pas la télévision !"], bonne: 0, explication: "**لا … أبدًا** = ne … jamais, avec un verbe à la 1re personne (أشاهد, ushāhidu). « Ne regarde pas ! » serait la défense لا تُشاهِدْ (lā tushāhid)." },
          ],
        },
      ],
      bilan: "حاسوب، شاشة، تطبيق : tu nommes tes outils ; دائمًا، أحيانًا، ساعتين : tu décris tes usages ; في رأيي et لكنّه : tu donnes un avis nuancé, sans oublier de vérifier la source.",
    },

    // ───────────────────────── 6. Environnement, ville et campagne ─────────────────────────
    "3e-arabe-06-environnement-ville-campagne": {
      accroche: "Tours de verre de Dubaï, ruelles de Fès, oasis du Sahara, villages de l'Atlas : le monde arabe offre tous les paysages. Il fait aussi face à de grands défis : le manque d'eau, la chaleur, la pollution des villes. Comment en parler en arabe ?",
      objectifs: [
        "Décrire une ville, un village et un paysage",
        "Nommer les problèmes d'environnement et les gestes pour le protéger",
        "Comparer la ville et la campagne et justifier ta préférence",
      ],
      sections: [
        {
          titre: "Ville et campagne : décrire",
          blocs: [
            { t: "schema", titre: "La ville et la campagne", legende: "En ville, c'est encombré, bruyant et parfois pollué ; à la campagne, la vie est calme (هادئة, hādiʾa).", svg: `<svg viewBox="0 0 400 262"><line class="pointille" x1="200" y1="10" x2="200" y2="252"/><g class="texte" ${AR(20)}><text x="100" y="26">المَدينة</text><text x="300" y="26">الرّيف</text></g><g class="texte-petit" text-anchor="middle"><text x="100" y="42">la ville (al-madīna)</text><text x="300" y="42">la campagne (ar-rīf)</text></g><g class="aplat trait-fin"><rect x="18" y="112" width="38" height="88"/><rect x="60" y="138" width="30" height="62"/><rect x="94" y="94" width="44" height="106"/><rect x="142" y="124" width="40" height="76"/></g><g class="aplat-papier"><rect x="26" y="122" width="8" height="8"/><rect x="40" y="122" width="8" height="8"/><rect x="26" y="140" width="8" height="8"/><rect x="40" y="140" width="8" height="8"/><rect x="102" y="104" width="8" height="8"/><rect x="120" y="104" width="8" height="8"/><rect x="102" y="124" width="8" height="8"/><rect x="120" y="124" width="8" height="8"/><rect x="150" y="134" width="8" height="8"/><rect x="166" y="134" width="8" height="8"/></g><rect class="aplat-fort" x="170" y="112" width="6" height="12"/><path class="pointille" d="M173 108 C 165 100, 182 94, 172 86 C 164 80, 180 74, 174 66"/><g class="texte" ${AR(16)}><text x="140" y="70">مُلَوَّث</text></g><text class="texte-petit" x="140" y="84" text-anchor="middle">pollué</text><line class="trait" x1="10" y1="200" x2="190" y2="200"/><rect class="aplat-fort" x="28" y="188" width="34" height="10" rx="3"/><rect class="aplat-fort" x="104" y="188" width="34" height="10" rx="3"/><g class="trait-fin"><circle cx="36" cy="200" r="3"/><circle cx="54" cy="200" r="3"/><circle cx="112" cy="200" r="3"/><circle cx="130" cy="200" r="3"/></g><path class="aplat trait-fin" d="M212 200 L258 104 L304 200 Z"/><g class="texte" ${AR(16)}><text x="258" y="78">جَبَل</text><text x="360" y="92">نَخْلة</text></g><g class="texte-petit" text-anchor="middle"><text x="258" y="92">montagne</text><text x="360" y="106">palmier</text></g><path class="trait" d="M362 200 C 360 176, 364 152, 360 132"/><g class="aplat-fort"><path d="M360 132 C 346 124, 334 128, 328 138 C 340 132, 350 132, 360 134 Z"/><path d="M360 132 C 374 124, 386 128, 392 138 C 380 132, 370 132, 360 134 Z"/><path d="M360 132 C 356 120, 346 114, 338 114 C 348 120, 354 126, 358 133 Z"/><path d="M360 132 C 366 120, 376 114, 384 115 C 374 120, 366 126, 362 133 Z"/></g><line class="trait" x1="210" y1="200" x2="390" y2="200"/><rect class="aplat trait-fin" x="308" y="188" width="40" height="12"/><g class="trait-fin"><line x1="316" y1="188" x2="316" y2="200"/><line x1="324" y1="188" x2="324" y2="200"/><line x1="332" y1="188" x2="332" y2="200"/><line x1="340" y1="188" x2="340" y2="200"/></g><path d="M212 211 C 250 204, 280 217, 320 209 S 370 204, 390 210" fill="none" stroke="var(--pigment)" stroke-width="3"/><g class="texte" ${AR(16)}><text x="55" y="236">مُزْدَحِم</text><text x="145" y="236">ضَجيج</text><text x="250" y="236">نَهْر</text><text x="330" y="236">حَقْل</text></g><g class="texte-petit" text-anchor="middle"><text x="55" y="252">encombré</text><text x="145" y="252">bruit</text><text x="250" y="252">fleuve</text><text x="330" y="252">champ</text></g></svg>` },
            { t: "liste", titre: "D'autres mots pour décrire", items: ["مدينة (madīna) : ville, pluriel brisé مُدُن (mudun) ; قرية (qarya) : village", "صحراء (ṣaḥrāʾ) : désert ; واحة (wāḥa) : oasis ; بحر (baḥr) : mer", "هواء (hawāʾ) : air ; نظيف (naẓīf) : propre ; هادئ (hādiʾ) : calme, tranquille", "Le mot français « médina » vient de مدينة : en arabe, il veut simplement dire « ville »."] },
            { t: "texte", md: "Pour décrire, la phrase nominale suffit : الحياة في القرية هادئة (al-ḥayāt fī l-qarya hādiʾa), la vie au village est calme. Pas de verbe « être », et l'adjectif s'accorde : هادئ devient هادئة avec الحياة, qui est féminin." },
            { t: "verifie", q: "Comment dit-on « Le village est calme » ?", choix: ["القرية هادئة", "القرية هادئ", "قرية هادئة", "القرية مزدحمة"], bonne: 0, explication: "Phrase nominale : sujet défini القرية + attribut indéfini, accordé au féminin, **هادئة**. قرية هادئة (sans article) veut dire « un village calme » ; مزدحمة veut dire « encombrée »." },
          ],
        },
        {
          titre: "Les problèmes de l'environnement",
          blocs: [
            { t: "tableau", titre: "Le vocabulaire de l'environnement", entetes: ["Arabe", "Translittération", "Sens"], lignes: [
              ["البيئة", "al-bīʾa", "l'environnement"],
              ["التلوّث", "at-talawwuth", "la pollution"],
              ["النفايات", "an-nifāyāt", "les déchets"],
              ["إعادة التدوير", "iʿādat at-tadwīr", "le recyclage (« faire tourner à nouveau »)"],
              ["الجفاف", "al-jafāf", "la sécheresse"],
              ["تغيّر المناخ", "taghayyur al-munākh", "le changement climatique"],
              ["الطاقة الشمسية", "aṭ-ṭāqa ash-shamsiyya", "l'énergie solaire"],
            ] },
            { t: "astuce", md: "شمسية vient de شمس (shams, soleil) + le suffixe **ـيّة**, qui fabrique un adjectif, comme dans عربيّ (ʿarabiyy, arabe). Et تغيّر المناخ est une annexion : « le changement du climat »." },
            { t: "savais-tu", md: "Le monde arabe compte parmi les régions qui manquent le plus d'eau sur la planète. Mais il a du soleil en abondance : près de **Ouarzazate**, au Maroc, le complexe solaire **Noor** (نور, « lumière »), mis en service à partir de 2016, est l'un des plus grands du monde." },
            { t: "carte", fond: "monde", titre: "Le complexe solaire Noor, au Maroc", cadre: [-11, 29, -1, 36.5], zones: ["MA"], reperes: [{ nom: "Rabat", lat: 34.0209, lon: -6.8416 }, { nom: "Marrakech", lat: 31.6295, lon: -7.9811 }, { nom: "Noor, près de Ouarzazate", lat: 31.02, lon: -6.86 }], legende: "Au bord du désert, des milliers de miroirs concentrent les rayons du soleil pour produire de l'électricité." },
          ],
        },
        {
          titre: "Agir : les gestes à l'impératif",
          blocs: [
            { t: "tableau", titre: "Les bons gestes", entetes: ["Conseil", "Translittération", "Sens"], lignes: [
              ["وفّر الماء", "waffir al-māʾ", "économise l'eau"],
              ["أطفئ الضوء", "aṭfiʾ aḍ-ḍawʾ", "éteins la lumière"],
              ["استعمل الدرّاجة", "istaʿmil ad-darrāja", "utilise le vélo"],
              ["اِزْرَعْ شَجَرةً", "izraʿ shajaratan", "plante un arbre"],
              ["لا ترمِ النفايات في الشارع", "lā tarmi n-nifāyāt fī sh-shāriʿ", "ne jette pas les déchets dans la rue"],
            ] },
            { t: "propriete", titre: "La défense d'un verbe en ـي", md: "تَرْمي (tarmī, tu jettes) se termine par une voyelle longue. À la défense, elle s'abrège : **لا تَرْمِ** (lā tarmi), ne jette pas ! Les autres conseils suivent la règle du chapitre 1 : لا + inaccompli sans voyelle finale, ou un impératif comme اِزْرَعْ, formé sur تَزْرَعُ (tazraʿu)." },
            { t: "etapes", titre: "Le cycle du recyclage", cycle: true, items: [
              { titre: "النفايات (an-nifāyāt)", md: "On jette les déchets." },
              { titre: "الفَرْز (al-farz)", md: "On les trie : papier, plastique, verre." },
              { titre: "إعادة التدوير (iʿādat at-tadwīr)", md: "L'usine transforme les matériaux." },
              { titre: "مُنْتَج جَديد (muntaj jadīd)", md: "Un nouveau produit… qui sera un jour un déchet à son tour." },
            ] },
            { t: "verifie", q: "Quel conseil veut dire « Éteins la lumière ! » ?", choix: ["أطفئ الضوء", "وفّر الماء", "لا ترمِ النفايات", "استعمل الدرّاجة"], bonne: 0, explication: "**أطفئ الضوء** (aṭfiʾ aḍ-ḍawʾ) = éteins la lumière. وفّر الماء = économise l'eau ; لا ترمِ النفايات = ne jette pas les déchets ; استعمل الدرّاجة = utilise le vélo." },
          ],
        },
        {
          titre: "Comparer et justifier sa préférence",
          blocs: [
            { t: "liste", titre: "Pour comparer et justifier", items: ["أفضّل (ufaḍḍilu) : je préfère", "المدينة أكثر ازدحامًا من القرية : la ville est plus encombrée que le village", "الريف أهدأ من المدينة (ar-rīf ahdaʾu min al-madīna) : la campagne est plus calme que la ville", "لأنّ الهواءَ نظيف : parce que l'air est propre", "لأنّ فيها محلّات كثيرة (li-anna fīhā maḥallāt kathīra) : parce qu'il y a beaucoup de magasins (mot à mot « en elle, des magasins nombreux »)"] },
            { t: "exemple", titre: "Ville ou campagne ?", md: "أسكن في مدينة كبيرة. فيها محلّات كثيرة، لكنّها مزدحمة وملوّثة. أفضّل الريف لأنّ الهواءَ نظيف والحياة هادئة. لحماية البيئة، أستعمل الدرّاجة وأوفّر الماء.\n\n« J'habite dans une grande ville. Il y a beaucoup de magasins, mais elle est encombrée et polluée. Je préfère la campagne parce que l'air est propre et la vie calme. Pour protéger l'environnement, j'utilise le vélo et j'économise l'eau. »" },
            { t: "astuce", md: "Pour une préférence nuancée, combine tout ce que tu sais : un comparatif, لأنّ et لكنّ. أحبّ المدينة لأنّ فيها محلّات كثيرة، لكنّني أفضّل الريف في الصيف : j'aime la ville parce qu'il y a beaucoup de magasins, mais je préfère la campagne en été." },
          ],
        },
      ],
      bilan: "Décrire avec مزدحم ou هادئ, nommer التلوّث et النفايات, conseiller avec وفّر ou لا ترمِ, comparer avec أكثر… من et justifier avec لأنّ : tu sais défendre ton cadre de vie.",
    },

    // ───────────────────────── 7. Métiers et avenir ─────────────────────────
    "3e-arabe-07-metiers-avenir": {
      accroche: "Médecin, ingénieure, boulanger, pilote… Que veux-tu faire plus tard ? En arabe, la réponse commence souvent par أريد أن أصبح… (urīdu an uṣbiḥa, je veux devenir…). Bonne nouvelle : les noms de métiers suivent des moules que tu sais déjà reconnaître.",
      objectifs: [
        "Nommer des métiers au masculin et au féminin, et leurs lieux de travail",
        "Parler de tes projets avec أريد أن أصبحَ… et le futur",
        "Raconter un stage et décrire les qualités utiles au travail",
      ],
      sections: [
        {
          titre: "Les métiers au masculin et au féminin",
          blocs: [
            { t: "tableau", titre: "Métiers et lieux de travail", entetes: ["Masculin", "Féminin", "Sens", "Lieu de travail"], lignes: [
              ["طبيب (ṭabīb)", "طبيبة (ṭabība)", "médecin", "مستشفى (mustashfā) : hôpital"],
              ["ممرّض (mumarriḍ)", "ممرّضة (mumarriḍa)", "infirmier, infirmière", "مستشفى (mustashfā) : hôpital"],
              ["مهندس (muhandis)", "مهندسة (muhandisa)", "ingénieur, ingénieure", "شركة (sharika) : entreprise ; مصنع (maṣnaʿ) : usine"],
              ["معلّم (muʿallim)", "معلّمة (muʿallima)", "enseignant, enseignante", "مدرسة (madrasa) : école"],
              ["صحفي (ṣaḥafī)", "صحفية (ṣaḥafiyya)", "journaliste", "جريدة (jarīda) : journal"],
              ["طبّاخ (ṭabbākh)", "طبّاخة (ṭabbākha)", "cuisinier, cuisinière", "مطعم (maṭʿam) : restaurant"],
              ["خبّاز (khabbāz)", "خبّازة (khabbāza)", "boulanger, boulangère", "مخبز (makhbaz) : boulangerie"],
              ["فلّاح (fallāḥ)", "فلّاحة (fallāḥa)", "agriculteur, agricultrice", "حقل (ḥaql) : champ"],
            ] },
            { t: "propriete", titre: "Le féminin des métiers", md: "Le plus souvent, on ajoute **ة** (tāʾ marbūṭa) : طبيب → طبيبة (ṭabība) ; مهندس → مهندسة (muhandisa). Attention : مهندسات (muhandisāt) est un pluriel (des ingénieures), pas un féminin singulier. Le mot مهنة (mihna) veut dire « métier »." },
            { t: "verifie", q: "Quel est le féminin de معلّم (muʿallim, enseignant) ?", choix: ["معلّمة", "معلّمات", "معلّمون", "تعليم"], bonne: 0, explication: "On ajoute **ة** : muʿallima, une enseignante. معلّمات (des enseignantes) et معلّمون (des enseignants) sont des pluriels ; تعليم (taʿlīm) veut dire « l'enseignement »." },
          ],
        },
        {
          titre: "Des moules pour les métiers",
          blocs: [
            { t: "schema", titre: "Trois schèmes de métiers", legende: "Retiens la forme : chadda et ā long pour faʿʿāl, ā puis i pour fāʿil, mu- et chadda pour mufaʿʿil.", svg: `<svg viewBox="0 0 400 252"><g class="trait-fin"><rect class="aplat" x="8" y="10" width="124" height="234" rx="10"/><rect class="aplat-papier" x="138" y="10" width="124" height="234" rx="10"/><rect class="aplat" x="268" y="10" width="124" height="234" rx="10"/><line x1="18" y1="84" x2="122" y2="84"/><line x1="148" y1="84" x2="252" y2="84"/><line x1="278" y1="84" x2="382" y2="84"/></g><g class="c-rouge" ${AR(22)}><text x="70" y="40">فَعّال</text><text x="200" y="40">فاعِل</text><text x="330" y="40">مُفَعِّل</text></g><g class="texte-pigment" text-anchor="middle"><text x="70" y="59">faʿʿāl</text><text x="200" y="59">fāʿil</text><text x="330" y="59">mufaʿʿil</text></g><g class="texte-petit" text-anchor="middle"><text x="70" y="75">un métier</text><text x="200" y="75">celui qui fait</text><text x="330" y="75">mu- et chadda</text><text x="70" y="126">najjār : menuisier</text><text x="70" y="162">khabbāz : boulanger</text><text x="70" y="198">ṭayyār : pilote</text><text x="70" y="234">fallāḥ : agriculteur</text><text x="200" y="126">sāʾiq : chauffeur</text><text x="200" y="162">bāʾiʿ : vendeur</text><text x="200" y="198">kātib : écrivain</text><text x="200" y="234">lāʿib : joueur</text><text x="330" y="126">muʿallim : enseignant</text><text x="330" y="162">mumarriḍ : infirmier</text><text x="330" y="198">mumaththil : acteur</text><text x="330" y="234">mudarrib : entraîneur</text></g><g class="texte" ${AR(17)}><text x="70" y="111">نَجّار</text><text x="70" y="147">خَبّاز</text><text x="70" y="183">طَيّار</text><text x="70" y="219">فَلّاح</text><text x="200" y="111">سائِق</text><text x="200" y="147">بائِع</text><text x="200" y="183">كاتِب</text><text x="200" y="219">لاعِب</text><text x="330" y="111">مُعَلِّم</text><text x="330" y="147">مُمَرِّض</text><text x="330" y="183">مُمَثِّل</text><text x="330" y="219">مُدَرِّب</text></g></svg>` },
            { t: "texte", md: "Dans le schème **fāʿil**, quand la 2e consonne de la racine est و ou ي, elle devient ء : س و ق (conduire) → سائق (sāʾiq), chauffeur ; ب ي ع (vendre) → بائع (bāʾiʿ), vendeur. Et سوق (sūq), le marché, vient de la même racine que سائق !" },
            { t: "verifie", q: "Racine ن ج ر (travailler le bois). Que désigne نَجّار (najjār) ?", choix: ["un menuisier", "un atelier de menuiserie", "un meuble en bois"], bonne: 0, explication: "Le schème **فَعّال** (chadda + ā long) désigne souvent un métier : najjār, le menuisier, comme خبّاز (boulanger) ou طيّار (pilote). Un atelier serait un lieu, sur le moule mafʿal." },
          ],
        },
        {
          titre: "Parler de ses projets",
          blocs: [
            { t: "propriete", titre: "أريد أن أصبحَ + métier à l'accusatif", md: "**أصبح** (aṣbaḥa, devenir) se comporte comme كان : son attribut se met à l'**accusatif**. Au masculin indéfini, on ajoute le tanwin ـًا, avec un alif : أريد أن أصبح طبيبًا (urīdu an uṣbiḥa ṭabīban), je veux devenir médecin. Au féminin, pas d'alif ajouté : أريد أن أصبح مهندسةً (muhandisatan)." },
            { t: "liste", titre: "Pour parler de l'avenir", items: ["ماذا تريد أن تعمل في المستقبل؟ (mādhā turīdu an taʿmala fī l-mustaqbal ?) : que veux-tu faire plus tard ?", "في المستقبل سأدرس الطبّ (fī l-mustaqbal sa-adrusu ṭ-ṭibb) : dans l'avenir, j'étudierai la médecine. الطبّ a la même racine que طبيب.", "عندما أكبر سأعمل في شركة (ʿindamā akbaru sa-aʿmalu fī sharika) : quand je serai grand, je travaillerai dans une entreprise", "أحبّ مساعدة الناس (uḥibbu musāʿadat an-nās) : j'aime aider les gens"] },
            { t: "attention", md: "Dans عندما أكبر, **أكبر** est un verbe (akbaru, je grandis) et non l'élatif « plus grand » (akbar) : c'est le contexte qui permet de les distinguer. Et souviens-toi : ==jamais de سـ après أن== (« أريد أن سأصبح » est faux), ni deux verbes conjugués collés sans أن." },
          ],
        },
        {
          titre: "Le stage et les qualités",
          blocs: [
            { t: "definition", terme: "تدريب (tadrīb)", md: "Stage, formation, entraînement ; racine د ر ب, s'exercer. تدرّبتُ في… (tadarrabtu fī…) : j'ai fait un stage dans… ; مدرّب (mudarrib) : entraîneur." },
            { t: "etapes", titre: "Raconter ton stage en quatre phrases", items: [
              { titre: "Où ?", md: "تدرّبتُ في مستشفى (tadarrabtu fī mustashfā) : j'ai fait un stage dans un hôpital." },
              { titre: "Combien de temps ?", md: "أسبوعًا (usbūʿan) : une semaine. La durée se met à l'accusatif." },
              { titre: "Qu'as-tu fait ?", md: "ساعدتُ الممرّضين ورأيتُ عمل الأطبّاء (sāʿadtu l-mumarriḍīn wa-raʾaytu ʿamal al-aṭibbāʾ) : j'ai aidé les infirmiers et j'ai vu le travail des médecins." },
              { titre: "Et ton projet ?", md: "أريد أن أصبح طبيبةً لأنّني أحبّ مساعدة الناس : je veux devenir médecin parce que j'aime aider les gens." },
            ] },
            { t: "liste", titre: "Les qualités utiles au travail", items: ["صبور (ṣabūr) : patient", "نشيط (nashīṭ) : dynamique ; au féminin نشيطة", "مسؤول (masʾūl) : responsable, schème mafʿūl de س أ ل (demander) : « celui à qui l'on demande des comptes »", "ذكي (dhakiyy) : intelligent ; au féminin ذكية"] },
            { t: "exemple", titre: "Le stage de Salma", md: "اسمي سلمى. تدرّبتُ أسبوعًا في مكتب مهندسة. رأيتُ كيف تعمل على الحاسوب وتزور المصانع. في المستقبل سأدرس الهندسة، لأنّني أحبّ الرياضيات. أريد أن أصبح مهندسةً!\n\n« Je m'appelle Salma. J'ai fait un stage d'une semaine dans le bureau d'une ingénieure. J'ai vu comment elle travaille sur l'ordinateur et visite les usines. Plus tard, j'étudierai l'ingénierie, parce que j'aime les mathématiques. Je veux devenir ingénieure ! »" },
            { t: "verifie", q: "Que signifie « تدرّبتُ أسبوعًا في مطعم » ?", choix: ["J'ai fait un stage d'une semaine dans un restaurant.", "Je ferai un stage d'une semaine dans un restaurant.", "J'ai travaillé un mois dans une cuisine.", "Le cuisinier a fait un stage chez moi."], bonne: 0, explication: "**تدرّبتُ** (tadarrabtu) est un accompli à la 1re personne : j'ai fait un stage. أسبوعًا (usbūʿan) donne la durée, une semaine, et مطعم (maṭʿam) est le restaurant, un lieu en mafʿal." },
          ],
        },
      ],
      bilan: "Un métier se féminise avec ة et se reconnaît à son moule ; أريد أن أصبحَ + accusatif dit ton rêve, سـ et عندما situent ton projet, تدرّبتُ raconte ton stage.",
    },

    // ───────────────────────── 8. Voyager dans le monde arabe ─────────────────────────
    "3e-arabe-08-voyager-dans-le-monde-arabe": {
      accroche: "De la médina de Fès aux façades roses de Pétra, des jardins de l'Alhambra aux souks du Caire : voyager dans le monde arabe, c'est traverser des siècles d'histoire. Avant de partir, apprends à situer les régions, à reconnaître les grands sites et à te débrouiller à l'hôtel ou à la gare.",
      objectifs: [
        "Situer le Maghreb, le Machrek et le Golfe, et quelques capitales",
        "Connaître des sites du patrimoine : Pétra, les médinas, l'Alhambra",
        "Te débrouiller en voyage : réserver, demander ton chemin, acheter",
      ],
      sections: [
        {
          titre: "Le couchant, le levant et le Golfe",
          blocs: [
            { t: "texte", md: "Les 22 pays de la Ligue arabe s'étendent de l'océan Atlantique à la mer d'Arabie. Pour s'y repérer, on utilise des noms nés… du soleil :\n\n**المغرب العربي** (al-Maghrib al-ʿarabī), le **Maghreb**, « le couchant » (racine غ ر ب, le coucher du soleil) : c'est l'ouest du monde arabe. Seul, المغرب désigne aussi le Maroc.\n**المشرق** (al-Mashriq), le **Machrek**, « le levant » (racine ش ر ق, le lever du soleil) : c'est l'est.\n**الخليج** (al-Khalīj), « le Golfe » : les pays de la péninsule Arabique." },
            { t: "carte", fond: "monde", titre: "Le monde arabe : Maghreb, Machrek et Golfe", cadre: [-18, 10, 60, 44], zones: ["MA", "DZ", "TN", "LY", "MR", "EG", "SD", "LB", "SY", "JO", "PS", "IQ", "SA", "KW", "QA", "AE", "OM", "YE"], reperes: [{ nom: "Grenade (Alhambra)", lat: 37.1761, lon: -3.5881 }, { nom: "Fès (médina)", lat: 34.0331, lon: -5.0003 }, { nom: "Tunis", lat: 36.8065, lon: 10.1815 }, { nom: "Le Caire", lat: 30.0444, lon: 31.2357 }, { nom: "Pétra", lat: 30.3285, lon: 35.4444 }, { nom: "Riyad", lat: 24.7136, lon: 46.6753 }], legende: "En couleur, des pays arabes : le Maghreb à l'ouest, le Machrek à l'est, l'Égypte et le Soudan le long du Nil, les pays du Golfe et le Yémen dans la péninsule Arabique. Bahreïn, trop petit, n'apparaît pas ; la Somalie, Djibouti et les Comores font aussi partie de la Ligue arabe. Grenade, en Espagne, rappelle Al-Andalus." },
            { t: "tableau", titre: "Trois grands ensembles", entetes: ["Région", "Nom arabe", "Pays", "Quelques capitales"], lignes: [
              ["Maghreb (l'ouest)", "المغرب العربي", "Maroc, Algérie, Tunisie, Libye, Mauritanie", "الرباط (ar-Ribāṭ) Rabat ; الجزائر (al-Jazāʾir) Alger ; تونس (Tūnis) Tunis"],
              ["Machrek (l'est)", "المشرق", "Égypte, Liban, Syrie, Jordanie, Palestine, Irak…", "القاهرة (al-Qāhira) Le Caire ; بيروت (Bayrūt) Beyrouth ; عمّان (ʿAmmān) Amman"],
              ["Golfe", "الخليج", "Arabie saoudite, Koweït, Bahreïn, Qatar, Émirats arabes unis, Oman", "الرياض (ar-Riyāḍ) Riyad"],
            ] },
            { t: "savais-tu", md: "الجزائر (al-Jazāʾir) désigne à la fois l'Algérie et sa capitale, Alger ; de même, تونس (Tūnis) est la Tunisie et Tunis. Casablanca est la plus grande ville du Maroc, mais sa capitale est **Rabat**. Quant à الرياض (ar-Riyāḍ), Riyad, son nom signifie « les jardins »." },
            { t: "verifie", q: "Quel pays fait partie du Maghreb ?", choix: ["la Mauritanie", "la Jordanie", "le Qatar", "le Liban"], bonne: 0, explication: "La **Mauritanie** est à l'ouest, au bord de l'Atlantique : elle fait partie du Maghreb avec le Maroc, l'Algérie, la Tunisie et la Libye. La Jordanie et le Liban sont au Machrek, le Qatar dans le Golfe." },
          ],
        },
        {
          titre: "Trois joyaux du patrimoine",
          blocs: [
            { t: "liste", items: ["**Pétra** (البتراء, al-Batrāʾ), dans le sud de la **Jordanie** : la capitale des **Nabatéens**, il y a plus de 2 000 ans. Tombeaux et temples sont sculptés directement dans le grès rose.", "Les **médinas** de **Fès**, de Marrakech et de Tunis : des vieilles villes entourées de remparts, avec leurs ruelles, leurs portes et leurs souks.", "L'**Alhambra** (الحمراء, al-Ḥamrāʾ, « la Rouge », féminin de أحمر, aḥmar) : le palais des **Nasrides**, à Grenade, en Espagne, construit surtout aux XIIIe et XIVe siècles, à l'époque d'Al-Andalus."] },
            { t: "definition", terme: "Médina", md: "En arabe, مدينة (madīna) signifie simplement « ville ». En français, le mot désigne la vieille ville arabe traditionnelle : remparts, ruelles étroites, souks (أسواق, aswāq, pluriel de سوق) et maisons tournées vers une cour intérieure." },
            { t: "frise", titre: "Quelques dates du patrimoine", evenements: [
              { date: 859, label: "Fondation d'al-Qarawiyyin, à Fès", detail: "Fatima al-Fihri, issue d'une famille venue de Kairouan, fonde la mosquée-université. Elle est souvent présentée comme la plus ancienne université encore en activité." },
              { date: 1238, label: "Les Nasrides à Grenade", detail: "La dynastie s'installe à Grenade et commence à bâtir l'Alhambra." },
              { date: 1492, label: "Fin d'Al-Andalus", detail: "Les Rois catholiques prennent Grenade, dernier royaume musulman de la péninsule Ibérique." },
              { date: 1981, label: "La médina de Fès à l'UNESCO", detail: "Elle est inscrite au patrimoine mondial ; celle de Tunis l'a été en 1979." },
              { date: 1985, label: "Pétra à l'UNESCO", detail: "La cité nabatéenne entre au patrimoine mondial, la même année que la médina de Marrakech." },
            ] },
            { t: "verifie", q: "Où se trouve l'Alhambra ?", choix: ["à Grenade, en Espagne", "à Fès, au Maroc", "à Pétra, en Jordanie", "au Caire, en Égypte"], bonne: 0, explication: "L'**Alhambra** est le palais des Nasrides à **Grenade**, en Andalousie. Son nom arabe, الحمراء, veut dire « la Rouge », à cause de la couleur de ses murs." },
          ],
        },
        {
          titre: "Se débrouiller en voyage",
          blocs: [
            { t: "tableau", titre: "Les mots du voyage", entetes: ["Arabe", "Translittération", "Sens"], lignes: [
              ["فندق", "funduq", "hôtel"],
              ["مطار", "maṭār", "aéroport (lieu en mafʿal de ط ي ر, voler)"],
              ["محطة القطار", "maḥaṭṭat al-qiṭār", "la gare (« la station du train »)"],
              ["تذكرة ذهاب وإياب", "tadhkirat dhahāb wa-iyāb", "billet aller-retour"],
              ["جواز السفر", "jawāz as-safar", "passeport"],
              ["غرفة", "ghurfa", "chambre"],
            ] },
            { t: "liste", titre: "Phrases utiles", items: ["أين…؟ (ayna) : où est… ?", "بكم هذا؟ (bi-kam hādhā ?) : combien ça coûte ?", "عفوًا (ʿafwan) : pardon ; aussi « de rien »", "من فضلك (min faḍlik) : s'il te plaît", "أريد أن أحجز غرفة لشخصين لثلاث ليالٍ (urīdu an aḥjiza ghurfa li-shakhṣayn li-thalāth layālin) : je voudrais réserver une chambre pour deux personnes, pour trois nuits. Repère le duel ـين de شخصين."] },
            { t: "exemple", titre: "À la gare de Rabat", md: "عفوًا، أين محطة القطار؟ أريد تذكرة ذهاب وإياب إلى فاس. بكم التذكرة؟\n\n« Pardon, où est la gare ? Je voudrais un billet aller-retour pour Fès. Combien coûte le billet ? » À Fès, ne manque pas la médina, ses souks et l'université al-Qarawiyyin." },
            { t: "tableau", titre: "Quelques monnaies", entetes: ["Monnaie", "Pays (exemples)"], lignes: [
              ["درهم (dirham)", "Maroc, Émirats arabes unis"],
              ["دينار (dīnār)", "Tunisie, Algérie, Jordanie, Koweït"],
              ["جنيه (junayh), la livre", "Égypte"],
              ["ريال (riyāl)", "Arabie saoudite, Qatar, Oman"],
            ] },
            { t: "verifie", q: "Pour demander « Où est l'hôtel ? », on dit :", choix: ["أين الفندق؟", "بكم الفندق؟", "متى الفندق؟", "لماذا الفندق؟"], bonne: 0, explication: "**أين** (ayna) = où. بكم = combien (pour un prix), متى = quand, لماذا = pourquoi." },
          ],
        },
      ],
      bilan: "Le Maghreb au couchant, le Machrek au levant, le Golfe au sud-est ; Pétra, les médinas et l'Alhambra pour rêver ; أين، بكم et أريد أن أحجز pour voyager.",
    },

    // ───────────────────────── 9. Littérature et arts ─────────────────────────
    "3e-arabe-09-litterature-arts": {
      accroche: "Il y a quinze siècles, des poètes du désert déclamaient des vers si beaux qu'on les aurait suspendus à La Mecque. Au XXe siècle, un romancier du Caire reçoit le prix Nobel. Entre les deux : la calligraphie, l'oud, et une voix qui réunissait tout le monde arabe devant la radio.",
      objectifs: [
        "Connaître des écrivains arabes et leurs œuvres : Mahfouz, Taha Hussein, Gibran",
        "Découvrir la poésie classique et son vocabulaire",
        "Reconnaître les grands styles de calligraphie et quelques repères de la musique arabe",
      ],
      sections: [
        {
          titre: "Quinze siècles de littérature",
          blocs: [
            { t: "frise", titre: "De la poésie du désert au prix Nobel", evenements: [
              { date: 550, label: "Les Muʿallaqāt", detail: "Longs poèmes d'avant l'islam (VIe siècle) qui chantent le désert, le voyage, le courage et l'amour. Selon la tradition, on les aurait suspendus à La Mecque : مُعَلَّقة signifie « suspendue »." },
              { date: 948, label: "Al-Mutanabbī à Alep", detail: "Né en 915, mort en 965, ce poète rejoint vers 948 la cour de l'émir Sayf al-Dawla, à Alep, où il compose certains de ses poèmes les plus célèbres." },
              { date: 1923, label: "Le Prophète, de Khalil Gibran", detail: "Écrivain d'origine libanaise (1883-1931) émigré aux États-Unis, il écrit en anglais ce recueil de textes poétiques, traduit depuis dans des dizaines de langues." },
              { date: 1929, label: "Le Livre des jours, de Taha Hussein", detail: "Aveugle depuis l'enfance, « le doyen de la littérature arabe » (1889-1973) y raconte son enfance en Égypte et ses études. Le premier tome paraît à la fin des années 1920." },
              { date: 1947, label: "Passage des miracles, de Naguib Mahfouz", detail: "زقاق المدق (Zuqāq al-Midaqq) raconte la vie d'une ruelle du Caire et de ses habitants." },
              { date: 1956, label: "La Trilogie du Caire", detail: "Trois romans de Mahfouz (1956-1957) qui suivent une famille cairote sur trois générations, dans la première moitié du XXe siècle." },
              { date: 1988, label: "Prix Nobel pour Naguib Mahfouz", detail: "Né au Caire en 1911, mort en 2006, il est le premier écrivain de langue arabe à recevoir le prix Nobel de littérature." },
            ] },
            { t: "texte", md: "**Naguib Mahfouz** (نجيب محفوظ) est l'écrivain du **Caire** : ses romans décrivent les quartiers anciens, les ruelles et les cafés de sa ville. Les titres de la *Trilogie* sont d'ailleurs des noms de rues du Caire. Il a écrit plus de trente romans et de nombreuses nouvelles.\n\n**Taha Hussein** (طه حسين) a étudié à al-Azhar puis à Paris, avant de devenir ministre de l'Éducation en Égypte. Dans *Le Livre des jours* (الأيام, al-Ayyām), il raconte comment un enfant aveugle d'un village égyptien est devenu un grand savant." },
            { t: "verifie", q: "Qui a écrit Le Livre des jours (الأيام) ?", choix: ["Taha Hussein", "Naguib Mahfouz", "Khalil Gibran", "Al-Mutanabbī"], bonne: 0, explication: "*Le Livre des jours* est l'autobiographie de **Taha Hussein**. Mahfouz a écrit la *Trilogie du Caire*, Gibran *Le Prophète*, et al-Mutanabbī est un poète du Xe siècle." },
          ],
        },
        {
          titre: "La poésie classique",
          blocs: [
            { t: "liste", titre: "Les mots de la poésie", items: ["قصيدة (qaṣīda) : poème", "شاعر (shāʿir) : poète, schème fāʿil de ش ع ر (ressentir) ; شِعْر (shiʿr) : la poésie", "بيت (bayt) : vers… et aussi « maison » : le vers est une demeure faite de mots", "قافية (qāfiya) : rime", "ديوان (dīwān) : recueil de poèmes ; ce mot a aussi donné le français « douane »"] },
            { t: "definition", terme: "Qaṣīda (قصيدة)", md: "Le poème classique : une suite de vers (أبيات, abyāt, pluriel de بيت), partagés chacun en deux moitiés, sur un même rythme et avec ==une seule rime du début à la fin==." },
            { t: "schema", titre: "Un vers d'al-Mutanabbī", legende: "Dans les livres, les deux moitiés du vers (bayt) sont côte à côte : la 1re à droite, la 2e à gauche, puisqu'on lit de droite à gauche. Tous les vers du poème finissent par la même rime.", svg: `<svg viewBox="0 0 400 226"><g class="texte-petit" text-anchor="middle"><text x="200" y="14">1re moitié du vers : ṣadr</text><text x="200" y="78">2e moitié du vers : ʿajuz</text></g><rect class="aplat-papier trait-fin" x="20" y="20" width="360" height="42" rx="8"/><rect class="aplat-papier trait-fin" x="20" y="84" width="360" height="42" rx="8"/><g class="texte" ${AR(18)}><text x="200" y="48">الخيلُ والليلُ والبيداءُ تعرفني</text><text x="200" y="112">والسيفُ والرمحُ والقرطاسُ والقلمُ</text></g><g class="texte" text-anchor="middle"><text x="200" y="148">« Les chevaux, la nuit et le désert me connaissent,</text><text x="200" y="165">ainsi que l'épée, la lance, le papier et la plume. »</text></g><rect class="aplat" x="30" y="178" width="340" height="40" rx="8"/><g class="c-rouge" ${AR(24)}><text x="62" y="207">ـمُ</text></g><text class="texte" x="90" y="203">qāfiya : la même rime (-mu) à chaque vers</text></svg>` },
            { t: "citation", texte: "الخيلُ والليلُ والبيداءُ تعرفني / والسيفُ والرمحُ والقرطاسُ والقلمُ", auteur: "Al-Mutanabbī", source: "Xe siècle" },
            { t: "exemple", titre: "Lire ce vers pas à pas", etapes: ["Repère les deux moitiés, séparées par la barre : la 1re finit par تعرفني (taʿrifunī, me connaissent).", "Cherche la rime : le vers finit en ـمُ (-mu), comme tous les vers de la qaṣīda dont il est tiré.", "Classe les mots : السيف (as-sayf, l'épée) et الرمح (ar-rumḥ, la lance) disent le guerrier ; القرطاس (al-qirṭās, le papier) et القلم (al-qalam, la plume) disent l'homme de lettres.", "Conclus : le poète se vante d'être les deux à la fois. Cette fierté (الفخر, al-fakhr) est un grand thème de la poésie classique."] },
            { t: "verifie", q: "Que signifie بيت (bayt) en poésie ?", choix: ["un vers", "un poème entier", "une rime", "un recueil"], bonne: 0, explication: "En poésie, **بيت** est le vers (il veut aussi dire « maison »). Le poème entier est la قصيدة, la rime la قافية et le recueil le ديوان." },
          ],
        },
        {
          titre: "La calligraphie, art de la lettre",
          blocs: [
            { t: "tableau", titre: "Les grands styles de calligraphie", entetes: ["Style", "Translittération", "Caractéristiques"], lignes: [
              ["كوفي", "kūfī (coufique)", "anguleux, très ancien ; nommé d'après Koufa, en Irak"],
              ["نسخ", "naskh", "arrondi et lisible : l'écriture des livres (« copie »)"],
              ["ثلث", "thuluth", "grand et élégant : il orne les monuments"],
              ["ديواني", "dīwānī", "très courbé, né dans les bureaux de l'Empire ottoman"],
              ["مغربي", "maghribī", "le style du Maghreb et d'Al-Andalus"],
            ] },
            { t: "texte", md: "Le calligraphe (خطّاط, khaṭṭāṭ : encore le moule faʿʿāl !) écrit avec un **calame** (قلم, qalam), un roseau taillé en biseau, et de l'encre (حبر, ḥibr). Selon l'angle du biseau, il trace des pleins et des déliés. Aujourd'hui, قلم désigne n'importe quel stylo." },
            { t: "savais-tu", md: "Depuis 2021, la calligraphie arabe est inscrite au **patrimoine culturel immatériel** de l'UNESCO. On la trouve sur les monuments, les céramiques, les tapis… et aujourd'hui sur les affiches et les murs des villes." },
          ],
        },
        {
          titre: "La musique : une voix et un luth",
          blocs: [
            { t: "texte", md: "**Oum Kalthoum** (أمّ كلثوم, morte en 1975), chanteuse égyptienne, était surnommée **« l'Astre de l'Orient »** (كوكب الشرق, Kawkab ash-Sharq). Une fois par mois, ses longs concerts étaient retransmis à la radio dans tout le monde arabe ; des foules immenses ont assisté à ses funérailles au Caire." },
            { t: "definition", terme: "Oud (العود, al-ʿūd)", md: "Luth à manche court et sans frettes, roi de la musique arabe. L'absence de frettes permet les **quarts de ton**. Passé en Europe par Al-Andalus, son nom, avec l'article al- soudé, a donné le français **« luth »**." },
            { t: "verifie", q: "D'où vient le mot français « luth » ?", choix: ["de l'arabe العود (al-ʿūd)", "du latin lux, la lumière", "du grec lyra, la lyre"], bonne: 0, explication: "Le **oud** est passé en Europe par Al-Andalus ; son nom, al-ʿūd, avec l'article soudé (comme dans « algèbre »), a donné « luth »." },
          ],
        },
      ],
      bilan: "Des Muʿallaqāt suspendues au Nobel de Mahfouz, du calame du calligraphe à l'oud d'Oum Kalthoum : la culture arabe se lit, se regarde et s'écoute.",
    },

    // ───────────────────────── 10. Méthode ─────────────────────────
    "3e-arabe-10-methode-dnb": {
      accroche: "Le jour de l'épreuve, tu découvriras un texte inconnu, puis tu devras parler ou écrire. Pas de panique : tu as déjà dans ta trousse des outils puissants, les mots transparents, les racines et les connecteurs. Ce chapitre les range dans l'ordre.",
      objectifs: [
        "Comprendre un texte grâce aux mots transparents, aux racines et aux mots interrogatifs",
        "Structurer ton expression avec des connecteurs",
        "Te présenter, donner ton avis et gérer une conversation",
      ],
      sections: [
        {
          titre: "Comprendre un texte inconnu",
          blocs: [
            { t: "etapes", titre: "Cinq étapes face à un texte", items: [
              { titre: "Lis le titre, regarde l'image", md: "Ils annoncent le thème : voyage, école, environnement…" },
              { titre: "Repère ce que tu reconnais", md: "Noms propres, nombres, dates et **mots transparents** : تلفزيون (tilfizyūn), إنترنت (intirnit), فيديو (fīdyū)." },
              { titre: "Lis les questions", md: "Leur mot interrogatif te dit quelle information chercher : une personne (مَنْ), un lieu (أين), un moment (متى)…" },
              { titre: "Décode les mots inconnus", md: "Cherche la **racine** et le **schème** : مَصْنَع (maṣnaʿ) = ص ن ع (fabriquer) + le moule du lieu → l'usine." },
              { titre: "Vise le sens général", md: "Ne bloque pas sur un mot : le sens d'ensemble d'abord, les détails ensuite." },
            ] },
            { t: "tableau", titre: "Les mots interrogatifs", entetes: ["Mot", "Translittération", "Sens", "On cherche…"], lignes: [
              ["مَنْ؟", "man", "qui ?", "une personne"],
              ["ماذا؟", "mādhā", "quoi ? que ?", "une chose, une action"],
              ["أين؟", "ayna", "où ?", "un lieu"],
              ["متى؟", "matā", "quand ?", "un moment"],
              ["كيف؟", "kayfa", "comment ?", "une manière"],
              ["لماذا؟", "li-mādhā", "pourquoi ?", "une cause (réponse avec لأنّ)"],
              ["كم؟", "kam", "combien ?", "un nombre"],
            ] },
            { t: "attention", md: "Dans beaucoup de dictionnaires arabes, les mots sont rangés par racine : مصنع se cherche à ص, et non à م ! Et pense aux mots que le français a pris à l'arabe : algèbre, chiffre, sucre, café… ils t'aident aussi à deviner." },
            { t: "verifie", q: "Tu lis مَعْمَل (maʿmal) et tu connais سأعمل (sa-aʿmalu, je travaillerai). Que signifie probablement ce mot ?", choix: ["un atelier, un lieu de travail", "un travailleur", "un travail terminé", "il a travaillé"], bonne: 0, explication: "Racine ع م ل (travailler) + schème de lieu **مَفْعَل** : le lieu où l'on travaille, l'atelier ou le laboratoire. Le travailleur serait عامِل (ʿāmil, schème fāʿil)." },
          ],
        },
        {
          titre: "Organiser ses idées : les connecteurs",
          blocs: [
            { t: "tableau", titre: "Les connecteurs essentiels", entetes: ["Rôle", "Connecteur", "Sens"], lignes: [
              ["Commencer", "أوّلًا (awwalan)", "d'abord"],
              ["Continuer", "ثانيًا (thāniyan) ; ثالثًا (thālithan) ; ثمّ (thumma)", "deuxièmement ; troisièmement ; puis"],
              ["Ajouter", "أيضًا (ayḍan)", "aussi"],
              ["Illustrer", "مثلًا (mathalan)", "par exemple"],
              ["Opposer", "لكنْ / لكنّ (lākin / lākinna)", "mais"],
              ["Expliquer", "لأنّ (li-anna)", "parce que"],
              ["Tirer une conséquence", "لذلك (li-dhālika)", "c'est pourquoi"],
              ["Terminer", "في الختام (fī l-khitām)", "pour conclure"],
            ] },
            { t: "propriete", titre: "لكنْ ou لكنّ ?", md: "**لكنْ** (lākin) se place devant un verbe : أحبّ الرياضة، لكنْ لا أحبّ كرة القدم.\n**لكنّ** (lākinna), comme لأنّ et أنّ, est suivi d'un nom à l'accusatif ou d'un pronom suffixe : أحبّ الرياضة، لكنّني لا أحبّ كرة القدم (lākinnanī), j'aime le sport, mais je n'aime pas le football." },
            { t: "schema", titre: "Le squelette d'un texte argumenté", legende: "Un avis, des arguments numérotés, une nuance, une conséquence, une conclusion : chaque connecteur est un panneau indicateur.", svg: `<svg viewBox="0 0 400 254"><g class="trait-fin"><rect class="aplat" x="10" y="8" width="380" height="34" rx="8"/><rect class="aplat-papier" x="10" y="48" width="380" height="34" rx="8"/><rect class="aplat-papier" x="10" y="88" width="380" height="34" rx="8"/><rect class="aplat" x="10" y="128" width="380" height="34" rx="8"/><rect class="aplat" x="10" y="168" width="380" height="34" rx="8"/><rect class="aplat-papier" x="10" y="208" width="380" height="34" rx="8"/></g><g class="texte" ${AR(18)}><text x="335" y="31">في رأيي</text><text x="335" y="71">أوّلًا</text><text x="335" y="111">ثانيًا</text><text x="335" y="151">لكنّ</text><text x="335" y="191">لذلك</text><text x="335" y="231">في الختام</text></g><g class="texte-petit" text-anchor="middle"><text x="240" y="30">fī raʾyī</text><text x="240" y="70">awwalan</text><text x="240" y="110">thāniyan</text><text x="240" y="150">lākinna</text><text x="240" y="190">li-dhālika</text><text x="240" y="230">fī l-khitām</text></g><g class="texte"><text x="24" y="30">Ton avis</text><text x="24" y="70">1er argument</text><text x="24" y="110">2e argument</text><text x="24" y="150">Une nuance</text><text x="24" y="190">Une conséquence</text><text x="24" y="230">La conclusion</text></g></svg>` },
            { t: "exemple", titre: "Un texte bien construit", md: "في رأيي، المدينة أفضل من الريف. أوّلًا، فيها مدارس كثيرة. ثانيًا، المواصلات فيها سهلة. لكنّ التلوّث مشكلة كبيرة، لذلك أستعمل الدرّاجة.\n\n« À mon avis, la ville vaut mieux que la campagne. D'abord, il y a beaucoup d'écoles. Ensuite, les transports y sont faciles. Mais la pollution est un gros problème, c'est pourquoi j'utilise le vélo. » Un avis, deux arguments, une nuance, une conséquence." },
            { t: "verifie", q: "Quel connecteur annonce une conséquence ?", choix: ["لذلك (li-dhālika)", "لأنّ (li-anna)", "مثلًا (mathalan)", "أوّلًا (awwalan)"], bonne: 0, explication: "**لذلك**, « pour cela », annonce une conséquence : c'est pourquoi. لأنّ annonce au contraire une cause, مثلًا un exemple et أوّلًا le premier argument." },
          ],
        },
        {
          titre: "Parler de soi et donner son avis",
          blocs: [
            { t: "liste", titre: "Se présenter en trois phrases", items: ["اسمي… (ismī) : je m'appelle…", "عمري خمس عشرة سنة (ʿumrī khamsa ʿashrata sana) : j'ai quinze ans, mot à mot « mon âge est quinze ans »", "أدرس العربية منذ ثلاث سنوات (adrusu l-ʿarabiyya mundhu thalāth sanawāt) : j'étudie l'arabe depuis trois ans", "Et pour aller plus loin : أسكن في… (askunu fī) : j'habite à…"] },
            { t: "tableau", titre: "Donner son avis", entetes: ["Arabe", "Translittération", "Sens"], lignes: [
              ["في رأيي", "fī raʾyī", "à mon avis"],
              ["أظنّ أنّ…", "aẓunnu anna", "je pense que…"],
              ["أنا موافق / أنا موافقة", "anā muwāfiq / anā muwāfiqa", "je suis d'accord (garçon / fille)"],
              ["لستُ موافقًا / لستُ موافقةً", "lastu muwāfiqan / lastu muwāfiqatan", "je ne suis pas d'accord (garçon / fille)"],
            ] },
            { t: "propriete", titre: "أظنّ أنّ et لستُ", md: "**أظنّ أنّ** se construit comme لأنّ : un nom à l'accusatif ou un pronom suffixe : أظنّ أنّ القراءة مفيدة (je pense que la lecture est utile) ; أظنّ أنّه ممتع (je pense qu'il est intéressant).\n**ليس** nie la phrase nominale. Il se conjugue (لستُ, lastu, je ne suis pas) et met l'attribut à l'**accusatif** : لستُ موافقًا (garçon), لستُ موافقةً (fille)." },
            { t: "liste", titre: "Gérer la conversation", items: ["هل يمكن أن تعيد من فضلك؟ (hal yumkin an tuʿīda min faḍlik ?) : peux-tu répéter, s'il te plaît ?", "ماذا تعني كلمة…؟ (mādhā taʿnī kalimat… ?) : que veut dire le mot… ?", "لا أفهم (lā afhamu) : je ne comprends pas", "ببطء من فضلك (bi-buṭʾ min faḍlik) : lentement, s'il te plaît"] },
            { t: "verifie", q: "Un garçon veut dire « Je ne suis pas d'accord ». Quelle phrase est correcte ?", choix: ["لستُ موافقًا", "لستُ موافقٌ", "لا أنا موافق", "لم موافق"], bonne: 0, explication: "**لستُ** (lastu, je ne suis pas) met l'attribut à l'accusatif : موافقًا (muwāfiqan). موافقٌ garde à tort le nominatif ; لا et لم nient des verbes, pas une phrase nominale." },
          ],
        },
      ],
      bilan: "Pour comprendre : thème, mots connus, questions, racines, sens général. Pour t'exprimer : في رأيي, أوّلًا, ثانيًا, لكنّ, لذلك, في الختام. Et si tu bloques : هل يمكن أن تعيد من فضلك؟",
    },
  },
};
