// ÉCLORE — Cours illustrés, 5e Arabe (LV2, première année, niveau A1). Arabe standard moderne (fuṣḥā).
// Schéma : docs/COURS.md. Validation : node tools/validate-cours.mjs content/cours/5e/arabe.js
// Translittération identique au module de questions (content/5e/arabe.js) : ā ī ū, ʿ (ع), ʾ (hamza), ḥ, kh, gh, sh,
// th, dh, q, ṣ ḍ ṭ ẓ ; mots cités sans terminaison casuelle ; article assimilé devant les lettres solaires.
export default {
  id: "5e-arabe",
  chapitres: {
    "5e-arabe-01-alphabet-ecriture-1": {
      accroche: "Ouvre un journal arabe : tu commences par ce qui serait, pour toi, la dernière page ! Les lignes partent de la droite et les lettres se tiennent la main. Pourtant, avec 28 lettres et quelques points, on apprend à lire en quelques semaines.",
      objectifs: [
        "Lire dans le bon sens et connaître l'ordre de l'alphabet",
        "Reconnaître une lettre sous ses quatre formes : isolée, initiale, médiane, finale",
        "Repérer les six lettres qui ne s'attachent jamais à la suivante",
      ],
      sections: [
        {
          titre: "De droite à gauche",
          blocs: [
            { t: "texte", md: "L'arabe s'écrit et se lit ==de droite à gauche==. Un livre arabe s'ouvre donc « à l'envers » pour un lecteur français : la première page est à droite.\n\nL'alphabet compte **28 lettres**, et ce sont toutes des **consonnes**. Trois d'entre elles, ا (alif), و (wāw) et ي (yāʾ), notent aussi les voyelles longues ā, ū et ī. Les voyelles brèves sont de petits signes posés sur les lettres (chapitre suivant). Et bonne nouvelle : **il n'y a pas de majuscules**." },
            { t: "schema", titre: "Un livre arabe s'ouvre par la droite", legende: "Chaque ligne commence au bord droit de la page. Sur la première ligne : وَلَد وَبِنْت (walad wa-bint : un garçon et une fille).", svg: `<svg viewBox="0 0 400 220"><path class="aplat-papier trait" d="M200 44 Q140 34 22 42 L22 190 Q140 182 200 192 Z"/><path class="aplat-papier trait" d="M200 44 Q260 34 378 42 L378 190 Q260 182 200 192 Z"/><line class="trait-fin" x1="200" y1="44" x2="200" y2="192"/><line class="trait" x1="368" y1="24" x2="222" y2="24" marker-end="url(#fl-p)"/><text class="texte-pigment" x="295" y="15" text-anchor="middle">sens de la lecture</text><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="22" text-anchor="middle"><text x="338" y="80">وَلَد</text><text x="278" y="80">وَبِنْت</text></g><text class="texte-petit" x="338" y="98" text-anchor="middle">walad</text><text class="texte-petit" x="278" y="98" text-anchor="middle">wa-bint</text><path class="pointille" d="M362 118H226M362 138H252M362 158H232M362 176H300"/><path class="pointille" d="M180 66H42M180 86H70M180 106H48M180 126H96M180 146H40M180 166H120"/><text class="texte-petit" x="290" y="210" text-anchor="middle">page 1 : on commence ici</text><text class="texte-petit" x="110" y="210" text-anchor="middle">page 2</text></svg>` },
          ],
        },
        {
          titre: "Vingt-huit lettres, une affaire de points",
          blocs: [
            { t: "texte", md: "L'alphabet commence par **ا ب ت ث ج ح خ** (alif, bāʾ, tāʾ, thāʾ, jīm, ḥāʾ, khāʾ) et finit par **ن ه و ي** (nūn, hāʾ, wāw, yāʾ). Beaucoup de lettres ont le **même squelette** et ne diffèrent que par leurs **points** : leur nombre et leur place, dessus ou dessous." },
            { t: "schema", titre: "L'alphabet dans l'ordre, de droite à gauche", legende: "On lit la grille comme une page arabe : ا (alif) en haut à droite, ي (yāʾ) en bas à gauche. Sous chaque lettre, son nom et sa transcription. En couleur, les six lettres qui ne s'attachent jamais à la suivante.", svg: `<svg viewBox="0 0 400 320"><text class="texte-petit" x="389" y="16" text-anchor="end">début</text><line class="trait" x1="350" y1="12" x2="50" y2="12" marker-end="url(#fl)"/><text class="texte-petit" x="11" y="16">fin</text><rect class="aplat-papier" x="11" y="26" width="378" height="272"/><rect class="aplat" x="335" y="26" width="54" height="68"/><rect class="aplat" x="335" y="94" width="54" height="68"/><rect class="aplat" x="281" y="94" width="54" height="68"/><rect class="aplat" x="227" y="94" width="54" height="68"/><rect class="aplat" x="173" y="94" width="54" height="68"/><rect class="aplat" x="65" y="230" width="54" height="68"/><path class="trait-fin" d="M65 26V298M119 26V298M173 26V298M227 26V298M281 26V298M335 26V298M11 94H389M11 162H389M11 230H389"/><rect class="trait" x="11" y="26" width="378" height="272"/><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" text-anchor="middle"><text x="362" y="54" font-size="26">ا</text><text x="308" y="54" font-size="26">ب</text><text x="254" y="54" font-size="26">ت</text><text x="200" y="54" font-size="26">ث</text><text x="146" y="54" font-size="26">ج</text><text x="92" y="54" font-size="26">ح</text><text x="38" y="54" font-size="26">خ</text><text x="362" y="122" font-size="26">د</text><text x="308" y="122" font-size="26">ذ</text><text x="254" y="122" font-size="26">ر</text><text x="200" y="122" font-size="26">ز</text><text x="146" y="122" font-size="26">س</text><text x="92" y="122" font-size="26">ش</text><text x="38" y="122" font-size="26">ص</text><text x="362" y="190" font-size="26">ض</text><text x="308" y="190" font-size="26">ط</text><text x="254" y="190" font-size="26">ظ</text><text x="200" y="190" font-size="26">ع</text><text x="146" y="190" font-size="26">غ</text><text x="92" y="190" font-size="26">ف</text><text x="38" y="190" font-size="26">ق</text><text x="362" y="258" font-size="26">ك</text><text x="308" y="258" font-size="26">ل</text><text x="254" y="258" font-size="26">م</text><text x="200" y="258" font-size="26">ن</text><text x="146" y="258" font-size="26">ه</text><text x="92" y="258" font-size="26">و</text><text x="38" y="258" font-size="26">ي</text></g><g class="texte-petit" text-anchor="middle"><text x="362" y="78">alif</text><text x="308" y="78">bāʾ</text><text x="254" y="78">tāʾ</text><text x="200" y="78">thāʾ</text><text x="146" y="78">jīm</text><text x="92" y="78">ḥāʾ</text><text x="38" y="78">khāʾ</text><text x="362" y="146">dāl</text><text x="308" y="146">dhāl</text><text x="254" y="146">rāʾ</text><text x="200" y="146">zāy</text><text x="146" y="146">sīn</text><text x="92" y="146">shīn</text><text x="38" y="146">ṣād</text><text x="362" y="214">ḍād</text><text x="308" y="214">ṭāʾ</text><text x="254" y="214">ẓāʾ</text><text x="200" y="214">ʿayn</text><text x="146" y="214">ghayn</text><text x="92" y="214">fāʾ</text><text x="38" y="214">qāf</text><text x="362" y="282">kāf</text><text x="308" y="282">lām</text><text x="254" y="282">mīm</text><text x="200" y="282">nūn</text><text x="146" y="282">hāʾ</text><text x="92" y="282">wāw</text><text x="38" y="282">yāʾ</text></g><g class="texte-pigment" text-anchor="middle" font-size="11"><text x="362" y="90">ā</text><text x="308" y="90">b</text><text x="254" y="90">t</text><text x="200" y="90">th</text><text x="146" y="90">j</text><text x="92" y="90">ḥ</text><text x="38" y="90">kh</text><text x="362" y="158">d</text><text x="308" y="158">dh</text><text x="254" y="158">r</text><text x="200" y="158">z</text><text x="146" y="158">s</text><text x="92" y="158">sh</text><text x="38" y="158">ṣ</text><text x="362" y="226">ḍ</text><text x="308" y="226">ṭ</text><text x="254" y="226">ẓ</text><text x="200" y="226">ʿ</text><text x="146" y="226">gh</text><text x="92" y="226">f</text><text x="38" y="226">q</text><text x="362" y="294">k</text><text x="308" y="294">l</text><text x="254" y="294">m</text><text x="200" y="294">n</text><text x="146" y="294">h</text><text x="92" y="294">w, ū</text><text x="38" y="294">y, ī</text></g><rect class="aplat trait-fin" x="88" y="304" width="18" height="12" rx="3"/><text class="texte-petit" x="112" y="314">lettre qui ne s'attache jamais à la suivante</text></svg>` },
            { t: "tableau", titre: "Les 28 lettres et leurs sons", entetes: ["Lettre", "Nom", "Transcription", "Son approché"], lignes: [
              ["ا", "alif", "ā", "a long ; support de la hamza ʾ (أ)"],
              ["ب", "bāʾ", "b", "b de « bébé »"],
              ["ت", "tāʾ", "t", "t de « tasse »"],
              ["ث", "thāʾ", "th", "th anglais de « think »"],
              ["ج", "jīm", "j", "dj de « djinn »"],
              ["ح", "ḥāʾ", "ḥ", "h soufflé de la gorge"],
              ["خ", "khāʾ", "kh", "jota espagnole"],
              ["د", "dāl", "d", "d de « dé »"],
              ["ذ", "dhāl", "dh", "th anglais de « this »"],
              ["ر", "rāʾ", "r", "r roulé"],
              ["ز", "zāy", "z", "z de « zoo »"],
              ["س", "sīn", "s", "s de « sel »"],
              ["ش", "shīn", "sh", "ch de « chat »"],
              ["ص", "ṣād", "ṣ", "s emphatique"],
              ["ض", "ḍād", "ḍ", "d emphatique"],
              ["ط", "ṭāʾ", "ṭ", "t emphatique"],
              ["ظ", "ẓāʾ", "ẓ", "dh emphatique"],
              ["ع", "ʿayn", "ʿ", "son serré de la gorge"],
              ["غ", "ghayn", "gh", "r de « Paris »"],
              ["ف", "fāʾ", "f", "f de « fil »"],
              ["ق", "qāf", "q", "k du fond de la gorge"],
              ["ك", "kāf", "k", "k de « kiwi »"],
              ["ل", "lām", "l", "l de « lune »"],
              ["م", "mīm", "m", "m de « mur »"],
              ["ن", "nūn", "n", "n de « nid »"],
              ["ه", "hāʾ", "h", "h anglais de « hello »"],
              ["و", "wāw", "w ou ū", "w de « watt » ; ou long"],
              ["ي", "yāʾ", "y ou ī", "y de « yaourt » ; i long"],
            ] },
            { t: "astuce", md: "Apprends les lettres par familles :\n• ب (b) un point dessous, ت (t) deux points dessus, ث (th) trois points dessus ;\n• ج (j) un point dessous, ح (ḥ) aucun, خ (kh) un point dessus ;\n• د / ذ, ر / ز, س / ش, ص / ض, ط / ظ, ع / غ : **un point de plus**, et c'est une autre lettre !" },
            { t: "verifie", q: "Quelle lettre se prononce « th », comme dans l'anglais « think » ?", choix: ["ب", "ت", "ث", "ن"], bonne: 2, explication: "**ث** (thāʾ) porte **trois points** au-dessus. ت (tāʾ, t) en a deux, ب (bāʾ, b) un seul dessous, et ن (nūn, n) un seul dessus, avec une forme plus creuse." },
          ],
        },
        {
          titre: "Une lettre, quatre formes",
          blocs: [
            { t: "definition", terme: "L'écriture liée", md: "Même dans un livre imprimé, les lettres d'un mot arabe sont **attachées** entre elles. Une lettre change donc de forme selon sa place : **isolée** (seule), **initiale** (liée seulement à la lettre suivante, à sa gauche), **médiane** (liée des deux côtés) ou **finale** (liée seulement à la lettre précédente, à sa droite)." },
            { t: "tableau", titre: "Quatre formes pour une même lettre", entetes: ["Lettre", "Isolée", "Initiale", "Médiane", "Finale"], lignes: [
              ["bāʾ (b)", "ب", "بـ", "ـبـ", "ـب"],
              ["jīm (j)", "ج", "جـ", "ـجـ", "ـج"],
              ["ʿayn (ʿ)", "ع", "عـ", "ـعـ", "ـع"],
              ["hāʾ (h)", "ه", "هـ", "ـهـ", "ـه"],
              ["kāf (k)", "ك", "كـ", "ـكـ", "ـك"],
              ["mīm (m)", "م", "مـ", "ـمـ", "ـم"],
              ["yāʾ (y)", "ي", "يـ", "ـيـ", "ـي"],
            ] },
            { t: "texte", md: "Le petit trait ـ montre de quel côté la lettre s'attache. Le ʿayn est ouvert au début (عـ) mais fermé en boucle au milieu (ـعـ) ; le hāʾ change presque de visage. Ce qui ne bouge pas, ce sont **le squelette et les points** : c'est eux qu'il faut repérer." },
            { t: "schema", titre: "Lire بَيْت (bayt : maison) lettre par lettre", legende: "Les trois lettres sont liées : ب au début (forme initiale), ي au milieu (forme médiane), ت à la fin (forme finale).", svg: `<svg viewBox="0 0 400 236"><rect class="aplat-papier trait" x="270" y="124" width="80" height="66" rx="8"/><rect class="aplat-papier trait" x="160" y="124" width="80" height="66" rx="8"/><rect class="aplat-papier trait" x="50" y="124" width="80" height="66" rx="8"/><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" text-anchor="middle"><text x="200" y="64" font-size="52">بَيْت</text><text x="310" y="170" font-size="34">بـ</text><text x="200" y="170" font-size="34">ـيـ</text><text x="90" y="170" font-size="34">ـت</text></g><text class="texte" x="200" y="92" text-anchor="middle">bayt : maison</text><line class="trait-fin" x1="380" y1="108" x2="20" y2="108" marker-end="url(#fl)"/><text class="texte-main" x="255" y="166" text-anchor="middle" style="font-size:26px">+</text><text class="texte-main" x="145" y="166" text-anchor="middle" style="font-size:26px">+</text><text class="texte" x="310" y="208" text-anchor="middle">1. initiale</text><text class="texte" x="200" y="208" text-anchor="middle">2. médiane</text><text class="texte" x="90" y="208" text-anchor="middle">3. finale</text><text class="texte-pigment" x="310" y="226" text-anchor="middle">b</text><text class="texte-pigment" x="200" y="226" text-anchor="middle">y</text><text class="texte-pigment" x="90" y="226" text-anchor="middle">t</text></svg>` },
            { t: "exemple", titre: "Décomposer un mot", etapes: [
              "On part de la droite : **بـ**, le bāʾ initial, un point dessous : b.",
              "Au milieu, **ـيـ**, le yāʾ médian, un petit crochet avec deux points dessous : y.",
              "À gauche, **ـت**, le tāʾ final, deux points dessus : t.",
              "Avec la voyelle a sur le ب : **بَيْت**, bayt, « maison ».",
            ] },
            { t: "attention", md: "Ne confonds pas **عـ** (ʿayn initial) et **غـ** (ghayn initial) : même dessin, mais le ghayn porte **un point** au-dessus." },
            { t: "verifie", q: "Dans قَلَم (qalam : stylo), quelle est la forme du ل (lām) ?", choix: ["isolée", "initiale", "médiane", "finale"], bonne: 2, explication: "Le ل est entre le ق et le م, lié des deux côtés : c'est sa forme **médiane**. Le ق est à sa forme initiale, le م à sa forme finale." },
          ],
        },
        {
          titre: "Six lettres qui ne donnent pas la main gauche",
          blocs: [
            { t: "propriete", titre: "Les six lettres non liantes : ا د ذ ر ز و", md: "Elles s'attachent à la lettre **précédente** (à leur droite), mais **jamais à la suivante** (à leur gauche). La lettre qui les suit repart comme en début de mot : forme initiale, ou isolée si c'est la dernière. Elles n'ont donc que **deux formes**, isolée et finale ; les autres lettres en ont **quatre au maximum**." },
            { t: "tableau", titre: "Premiers mots : observe les liaisons", entetes: ["Mot", "Lecture", "Sens", "Liaisons"], lignes: [
              ["بَيْت", "bayt", "maison", "tout est lié"],
              ["بِنْت", "bint", "fille", "tout est lié"],
              ["قَلَم", "qalam", "stylo", "tout est lié"],
              ["كَلْب", "kalb", "chien", "tout est lié"],
              ["بَاب", "bāb", "porte", "après ا, le second ب est isolé"],
              ["وَلَد", "walad", "garçon", "و seul, puis ل et د liés"],
              ["دَار", "dār", "maison", "aucune liaison"],
              ["وَرْد", "ward", "roses", "aucune liaison"],
            ] },
            { t: "exemple", titre: "Pourquoi وَرْد s'écrit « en morceaux »", md: "Dans وَرْد (ward : roses), و, ر et د sont toutes non liantes : le mot s'écrit en trois morceaux, et ce n'est **pas une faute**. Même chose pour دَار (dār : maison), où د et ا restent séparés." },
            { t: "astuce", md: "Imagine six élèves timides dans une ronde : ils donnent la main droite, **jamais la main gauche**. Récite-les : **alif, dāl, dhāl, rāʾ, zāy, wāw**." },
            { t: "verifie", q: "Laquelle de ces lettres ne s'attache jamais à la lettre qui la suit ?", choix: ["م (mīm)", "ز (zāy)", "ك (kāf)", "ه (hāʾ)"], bonne: 1, explication: "**ز** (zāy) fait partie des six lettres non liantes : ا د ذ ر ز و. م, ك et ه s'attachent des deux côtés et ont quatre formes." },
          ],
        },
      ],
      bilan: "De droite à gauche, 28 consonnes qui se tiennent la main : repère le squelette et les points, observe la forme selon la place, et souviens-toi que ا د ذ ر ز و ne donnent jamais la main gauche.",
    },

    "5e-arabe-02-alphabet-sons-signes": {
      accroche: "قَلْب ou كَلْب ? Prononce mal la première lettre, et ton « cœur » (qalb) devient un « chien » (kalb) ! L'arabe a des sons que le français ne connaît pas, et de petits signes qui disent comment lire chaque lettre. Avec eux, tu pourras lire à voix haute n'importe quel mot voyellé.",
      objectifs: [
        "Prononcer les sons propres à l'arabe : ح خ ع غ ق et les emphatiques",
        "Lire les voyelles brèves et longues, le soukoun, la chadda et le tanwin",
        "Reconnaître la ة et prononcer l'article ال devant une lettre solaire ou lunaire",
      ],
      sections: [
        {
          titre: "Des sons qui viennent de la gorge",
          blocs: [
            { t: "texte", md: "La plupart des lettres arabes se prononcent comme en français. Quelques-unes se fabriquent ==au fond de la bouche, ou dans la gorge== : ce sont elles qui donnent à l'arabe sa musique. Entraîne-toi, la main sur la gorge." },
            { t: "tableau", titre: "Les sons nouveaux", entetes: ["Lettre", "Son", "Comment le produire", "Exemple"], lignes: [
              ["ح (ḥāʾ)", "h soufflé", "souffle fort, gorge serrée, comme pour faire de la buée", "حَلِيب (ḥalīb : lait)"],
              ["خ (khāʾ)", "kh", "racle le fond de la gorge", "خُبْز (khubz : pain)"],
              ["ع (ʿayn)", "ʿ", "serre la gorge en disant « a »", "عَرَبِيّ (ʿarabī : arabe)"],
              ["غ (ghayn)", "gh", "presque le r de « Paris »", "غُرْفَة (ghurfa : chambre)"],
              ["ق (qāf)", "q", "un k reculé au fond de la gorge", "قَلَم (qalam : stylo)"],
              ["ر (rāʾ)", "r", "roulé du bout de la langue", "وَرْد (ward : roses)"],
              ["ه (hāʾ)", "h", "un h qu'on entend", "هُوَ (huwa : il)"],
            ] },
            { t: "definition", terme: "Les lettres emphatiques", md: "**ص** (ṣ), **ض** (ḍ), **ط** (ṭ) et **ظ** (ẓ) se prononcent la langue relevée vers l'arrière : leur son est plus **grave**, plus « sombre » que celui de س (s), د (d), ت (t) et ذ (dh). Ce n'est pas un détail : سَيْف (sayf : épée) et صَيْف (ṣayf : été) sont deux mots différents." },
            { t: "savais-tu", md: "La lettre ض (ḍād) est si particulière que les Arabes appellent leur langue **لُغَةُ الضَّاد** (lughat aḍ-ḍād), « la langue du ḍād »." },
            { t: "verifie", q: "Quelle lettre se prononce presque comme le « r » grasseyé du français, dans « Paris » ?", choix: ["ر (rāʾ)", "غ (ghayn)", "ع (ʿayn)", "ق (qāf)"], bonne: 1, explication: "**غ** (ghayn) ressemble beaucoup au r français. Le ر arabe, lui, est roulé du bout de la langue. ع est un son serré de la gorge et ق un k très profond." },
          ],
        },
        {
          titre: "Les voyelles : de petits signes, de grands effets",
          blocs: [
            { t: "definition", terme: "Les harakat (voyelles brèves)", md: "La **fatḥa** ـَ, un petit trait **au-dessus** de la lettre, se lit **a** ; la **kasra** ـِ, un petit trait **au-dessous**, se lit **i** ; la **ḍamma** ـُ, un petit و au-dessus, se lit **u** (« ou »). On les écrit dans les livres pour enfants ou les dictionnaires ; dans un journal, on les omet souvent." },
            { t: "schema", titre: "Les signes autour d'une lettre", legende: "Le signe se pose sur la lettre qu'il fait sonner : au-dessous pour i, au-dessus pour tous les autres. Le tanwin double la voyelle et ajoute un n.", svg: `<svg viewBox="0 0 400 206"><text class="texte-main" x="200" y="20" text-anchor="middle">une même lettre, six lectures</text><rect class="aplat-papier trait" x="339" y="32" width="58" height="166" rx="8"/><text class="texte" x="368" y="148" text-anchor="middle">fatḥa</text><text class="texte-pigment" x="368" y="168" text-anchor="middle">ba</text><text class="texte-petit" x="368" y="186" text-anchor="middle">dessus</text><rect class="aplat-papier trait" x="275" y="32" width="58" height="166" rx="8"/><text class="texte" x="304" y="148" text-anchor="middle">kasra</text><text class="texte-pigment" x="304" y="168" text-anchor="middle">bi</text><text class="texte-petit" x="304" y="186" text-anchor="middle">dessous</text><rect class="aplat-papier trait" x="211" y="32" width="58" height="166" rx="8"/><text class="texte" x="240" y="148" text-anchor="middle">ḍamma</text><text class="texte-pigment" x="240" y="168" text-anchor="middle">bu</text><text class="texte-petit" x="240" y="186" text-anchor="middle">dessus</text><rect class="aplat-papier trait" x="147" y="32" width="58" height="166" rx="8"/><text class="texte" x="176" y="148" text-anchor="middle">soukoun</text><text class="texte-pigment" x="176" y="168" text-anchor="middle">b</text><text class="texte-petit" x="176" y="186" text-anchor="middle">dessus</text><rect class="aplat-papier trait" x="83" y="32" width="58" height="166" rx="8"/><text class="texte" x="112" y="148" text-anchor="middle">chadda</text><text class="texte-pigment" x="112" y="168" text-anchor="middle">bba</text><text class="texte-petit" x="112" y="186" text-anchor="middle">dessus</text><rect class="aplat-papier trait" x="19" y="32" width="58" height="166" rx="8"/><text class="texte" x="48" y="148" text-anchor="middle">tanwin</text><text class="texte-pigment" x="48" y="168" text-anchor="middle">bun</text><text class="texte-petit" x="48" y="186" text-anchor="middle">dessus</text><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="48" text-anchor="middle"><text x="368" y="104">بَ</text><text x="304" y="104">بِ</text><text x="240" y="104">بُ</text><text x="176" y="104">بْ</text><text x="112" y="104">بَّ</text><text x="48" y="104">بٌ</text></g></svg>` },
            { t: "propriete", titre: "Les voyelles longues", md: "Pour allonger une voyelle, on ajoute une lettre : **ا** allonge le a, **ي** le i, **و** le u.\n\nبَا = **bā** ; بِي = **bī** ; بُو = **bū** (« bou » long). Dans بَاب (bāb : porte), le ا du milieu rend simplement le a long." },
            { t: "verifie", q: "Comment se lit بُو ?", choix: ["bā", "bī", "bū (« bou » long)", "bu (bref)"], bonne: 2, explication: "La ḍamma sur le ب, suivie de و, donne un **ū long**. بَا se lirait bā et بِي bī. Sans le و, بُ serait un u bref." },
          ],
        },
        {
          titre: "Soukoun, chadda, tanwin",
          blocs: [
            { t: "tableau", titre: "Trois signes de plus", entetes: ["Signe", "Nom", "Rôle", "Exemple"], lignes: [
              ["ـْ", "soukoun (petit rond)", "la lettre n'a **pas de voyelle**", "بِنْت (bint : fille)"],
              ["ـّ", "chadda", "la lettre est **doublée**", "أُمّ (umm : mère), مُعَلِّم (muʿallim : professeur)"],
              ["ـٌ ـٍ ـً", "tanwin", "voyelle finale + **n** : l'indéfini « un »", "كِتَابٌ (kitābun), كِتَابٍ (kitābin), كِتَابًا (kitāban)"],
            ] },
            { t: "texte", md: "Le **soukoun** (sukūn, « repos ») se pose sur une consonne prononcée seule : dans بِنْت, le ن n'a pas de voyelle. Avec la **chadda**, on prononce la lettre deux fois. Le **tanwin** double le signe final : كِتَابٌ se lit **kitābun**, « un livre » ; avec l'article, الْكِتَاب (al-kitāb : le livre), il disparaît. Le tanwin ـً s'écrit souvent avec un ا : شُكْرًا (shukran : merci)." },
            { t: "exemple", titre: "Lire مُعَلِّم (muʿallim : professeur) pas à pas", etapes: [
              "مُ : mīm avec une ḍamma : **mu**.",
              "عَ : ʿayn avec une fatḥa : **ʿa**.",
              "لِّ : lām avec une chadda et une kasra, le l est doublé : **lli**.",
              "م : mīm final, sans voyelle : **m**. Tout ensemble : **muʿallim**.",
            ] },
          ],
        },
        {
          titre: "La ة et l'article ال",
          blocs: [
            { t: "propriete", titre: "La tāʾ marbūṭa : ة", md: "La **ة** ressemble à un ه coiffé des deux points du ت. Elle ne se trouve **qu'à la fin d'un mot** (ة isolée, ـة liée) et marque très souvent le **féminin**. En fin de mot, ـَة se prononce simplement « a » : مَدْرَسَة se lit **madrasa** (école), مُعَلِّمَة **muʿallima** (professeure)." },
            { t: "texte", md: "L'article **ال** (al- : le, la, les) s'attache au nom et ne change ni avec le genre ni avec le nombre. Mais sa prononciation dépend de la première lettre du nom : les 28 lettres se partagent en deux camps, nommés d'après الشَّمْس (le soleil) et الْقَمَر (la lune)." },
            { t: "schema", titre: "Le cercle des lettres solaires et lunaires", legende: "À gauche, les 14 lettres solaires : le l de l'article s'écrit mais ne se dit pas, et la lettre est doublée par une chadda (الشَّمْس, ash-shams). À droite, les 14 lettres lunaires : on entend al-, et le ل porte un soukoun (الْقَمَر, al-qamar).", svg: `<svg viewBox="0 0 400 300"><path class="aplat" d="M200 22 A128 128 0 0 0 200 278 L200 238 A88 88 0 0 1 200 62 Z"/><path class="aplat-papier" d="M200 22 A128 128 0 0 1 200 278 L200 238 A88 88 0 0 0 200 62 Z"/><circle class="trait" cx="200" cy="150" r="128"/><circle class="trait-fin" cx="200" cy="150" r="88"/><line class="pointille" x1="200" y1="22" x2="200" y2="278"/><circle class="aplat-fort" cx="162" cy="116" r="12"/><path class="trait-fin" d="M162 98v-5M162 134v5M144 116h-5M180 116h5M149 103l-3 -3M175 103l3 -3M149 129l-3 3M175 129l3 3"/><path class="aplat-fort" d="M240 100 a16 16 0 1 0 12 28 a12.5 12.5 0 1 1 -12 -28 Z"/><text class="texte" x="162" y="154" text-anchor="middle">solaires</text><text class="texte" x="238" y="154" text-anchor="middle">lunaires</text><text class="texte-petit" x="162" y="202" text-anchor="middle">ash-shams</text><text class="texte-petit" x="238" y="202" text-anchor="middle">al-qamar</text><g class="texte-petit"><text x="4" y="22">14 solaires :</text><text x="4" y="36">le l ne</text><text x="4" y="50">s'entend pas,</text><text x="4" y="64">lettre doublée</text></g><g class="texte-petit" text-anchor="end"><text x="396" y="22">14 lunaires :</text><text x="396" y="36">on entend</text><text x="396" y="50">le l :</text><text x="396" y="64">« al- »</text></g><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="20" text-anchor="middle"><text x="187.9" y="49.7">ت</text><text x="164.3" y="55.1">ث</text><text x="142.5" y="65.6">د</text><text x="123.6" y="80.6">ذ</text><text x="108.6" y="99.5">ر</text><text x="98.1" y="121.3">ز</text><text x="92.7" y="144.9">س</text><text x="92.7" y="169.1">ش</text><text x="98.1" y="192.7">ص</text><text x="108.6" y="214.5">ض</text><text x="123.6" y="233.4">ط</text><text x="142.5" y="248.4">ظ</text><text x="164.3" y="258.9">ل</text><text x="187.9" y="264.3">ن</text><text x="212.1" y="49.7">ا</text><text x="235.7" y="55.1">ب</text><text x="257.5" y="65.6">ج</text><text x="276.4" y="80.6">ح</text><text x="291.4" y="99.5">خ</text><text x="301.9" y="121.3">ع</text><text x="307.3" y="144.9">غ</text><text x="307.3" y="169.1">ف</text><text x="301.9" y="192.7">ق</text><text x="291.4" y="214.5">ك</text><text x="276.4" y="233.4">م</text><text x="257.5" y="248.4">ه</text><text x="235.7" y="258.9">و</text><text x="212.1" y="264.3">ي</text><text x="162" y="184">الشَّمْس</text><text x="238" y="184">الْقَمَر</text></g></svg>` },
            { t: "tableau", titre: "L'article devant les deux sortes de lettres", entetes: ["Mot", "Première lettre", "On dit", "Sens"], lignes: [
              ["الْقَمَر", "ق : lunaire", "al-qamar", "la lune"],
              ["الْكِتَاب", "ك : lunaire", "al-kitāb", "le livre"],
              ["الْبَيْت", "ب : lunaire", "al-bayt", "la maison"],
              ["الشَّمْس", "ش : solaire", "ash-shams", "le soleil"],
              ["النُّور", "ن : solaire", "an-nūr", "la lumière"],
              ["الدَّرْس", "د : solaire", "ad-dars", "la leçon"],
            ] },
            { t: "astuce", md: "Les lettres solaires se prononcent avec **la pointe de la langue**, près des dents (t, d, s, n, r, l…). Si ta langue touche les dents, la lettre est solaire." },
            { t: "attention", md: "N'écris pas « al-shams » pour الشَّمْس ! Le ل s'écrit toujours, mais devant une lettre solaire, il ne se prononce pas : on dit **ash-shams**." },
            { t: "verifie", q: "Comment se lit النُّور (la lumière) ?", choix: ["al-nūr", "an-nūr", "a-lūr"], bonne: 1, explication: "ن est une lettre **solaire** : le ل de l'article se tait et le ن est doublé, comme le montre la chadda. On dit **an-nūr**." },
          ],
        },
      ],
      bilan: "Fatḥa, kasra, ḍamma pour a, i, u ; ا, ي, و pour les allonger ; le soukoun pour se taire, la chadda pour doubler, le tanwin pour dire « un » ; et devant une lettre solaire, le l de ال s'efface.",
    },

    "5e-arabe-03-saluer-se-presenter": {
      accroche: "Dans un café de Tunis, une fille lève les yeux de son livre et te sourit : « مَرْحَبًا! مَا اسْمُكَ؟ » (marḥaban ! mā smuka ?). Pour lui répondre, une poignée de formules suffit… à condition de savoir si l'on parle à un garçon ou à une fille !",
      objectifs: [
        "Saluer selon le moment de la journée, remercier, accueillir et prendre congé",
        "Te présenter : ton nom, ton pays, ta nationalité",
        "Poser des questions simples à un garçon ou à une fille, et y répondre",
      ],
      sections: [
        {
          titre: "Bonjour, bonsoir : des formules en écho",
          blocs: [
            { t: "texte", md: "**مَرْحَبًا** (marḥaban : bonjour, salut) convient à tout moment, avec tout le monde. On entend aussi partout **السَّلَامُ عَلَيْكُمْ** (as-salāmu ʿalaykum : bonjour, littéralement « la paix sur vous »), à quoi l'on répond **وَعَلَيْكُمُ السَّلَام** (wa-ʿalaykum as-salām : « et sur vous la paix »).\n\nLe matin et le soir, les salutations fonctionnent ==en écho== : on reprend le premier mot, et on remplace « le bien » par « la lumière »." },
            { t: "schema", titre: "Le matin, le soir : on répond en écho", legende: "صَبَاح (ṣabāḥ) veut dire « matin », مَسَاء (masāʾ) « soir », الْخَيْر (al-khayr) « le bien » et النُّور (an-nūr) « la lumière ».", svg: `<svg viewBox="0 0 400 236"><circle class="aplat-fort" cx="100" cy="24" r="10"/><path class="trait-fin" d="M100 8v-4M100 40v4M84 24h-4M116 24h4M89 13l-3 -3M111 13l3 -3M89 35l-3 3M111 35l3 3"/><path class="aplat-fort" d="M302 12 a13 13 0 1 0 10 23 a10 10 0 1 1 -10 -23 Z"/><text class="texte-main" x="100" y="62" text-anchor="middle">le matin</text><text class="texte-main" x="300" y="62" text-anchor="middle">le soir</text><rect class="aplat-papier trait" x="40" y="70" width="120" height="38" rx="12"/><rect class="aplat-papier trait" x="240" y="70" width="120" height="38" rx="12"/><rect class="aplat trait" x="40" y="158" width="120" height="38" rx="12"/><rect class="aplat trait" x="240" y="158" width="120" height="38" rx="12"/><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="20" text-anchor="middle" direction="rtl"><text x="100" y="96">صَبَاحُ الْخَيْر</text><text x="300" y="96">مَسَاءُ الْخَيْر</text><text x="100" y="184">صَبَاحُ النُّور</text><text x="300" y="184">مَسَاءُ النُّور</text></g><g class="texte-petit" text-anchor="middle"><text x="100" y="124">ṣabāḥ al-khayr</text><text x="100" y="137">« matin du bien »</text><text x="300" y="124">masāʾ al-khayr</text><text x="300" y="137">« soir du bien »</text><text x="100" y="212">ṣabāḥ an-nūr</text><text x="100" y="225">« matin de lumière »</text><text x="300" y="212">masāʾ an-nūr</text><text x="300" y="225">« soir de lumière »</text></g><line class="trait-fin" x1="100" y1="141" x2="100" y2="154" marker-end="url(#fl)"/><line class="trait-fin" x1="300" y1="141" x2="300" y2="154" marker-end="url(#fl)"/><g class="texte-pigment" text-anchor="middle" font-size="12" font-weight="600"><text x="200" y="93">on te dit</text><text x="200" y="181">tu réponds</text></g></svg>` },
            { t: "verifie", q: "On te dit صَبَاحُ الْخَيْر (ṣabāḥ al-khayr). Que réponds-tu ?", choix: ["مَسَاءُ النُّور (masāʾ an-nūr)", "صَبَاحُ النُّور (ṣabāḥ an-nūr)", "مَعَ السَّلَامَة (maʿa s-salāma)", "عَفْوًا (ʿafwan)"], bonne: 1, explication: "Le matin, on répond **صَبَاحُ النُّور**, « matin de lumière ». مَسَاءُ النُّور répond le soir, مَعَ السَّلَامَة sert à partir et عَفْوًا répond à un merci." },
          ],
        },
        {
          titre: "Merci, bienvenue, au revoir",
          blocs: [
            { t: "tableau", titre: "Les mots de la politesse", entetes: ["Arabe", "Lecture", "Sens", "On répond"], lignes: [
              ["شُكْرًا", "shukran", "merci", "عَفْوًا (ʿafwan : de rien)"],
              ["أَهْلًا وَسَهْلًا", "ahlan wa-sahlan", "bienvenue", "أَهْلًا بِكَ (ahlan bika) à un garçon, أَهْلًا بِكِ (ahlan biki) à une fille"],
              ["مَعَ السَّلَامَة", "maʿa s-salāma", "au revoir (litt. « avec la paix »)", "مَعَ السَّلَامَة"],
              ["نَعَمْ", "naʿam", "oui", "—"],
              ["لَا", "lā", "non", "—"],
            ] },
            { t: "savais-tu", md: "**أَهْلًا وَسَهْلًا** évoque la famille (أَهْل, ahl) et une plaine facile à traverser (سَهْل, sahl) : « ici, tu es comme en famille, et ton chemin sera doux ». On l'entend dans tout le monde arabe, à la maison comme dans les magasins." },
            { t: "astuce", md: "**عَفْوًا** (ʿafwan) a deux usages : « de rien » après un merci, et « pardon » quand tu bouscules quelqu'un. Et شُكْرًا se termine par un tanwin ـًا : on entend « an » à la fin, shukr**an**." },
          ],
        },
        {
          titre: "Se présenter : nom, pays, nationalité",
          blocs: [
            { t: "propriete", titre: "Je m'appelle… : « mon nom (est)… »", md: "Pour dire ton nom, tu dis **اِسْمِي** (ismī), « mon nom », suivi de ton prénom : اِسْمِي سَلْمَى (ismī Salmā : je m'appelle Salma). Il n'y a pas de verbe ! اِسْم (ism) veut dire « nom », et ـي (-ī) « mon ».\n\nPour ton pays : **أَنَا مِنْ** + pays (anā min : je suis de). Pour ta nationalité : **أَنَا** + adjectif, qui prend **ـَة** au féminin." },
            { t: "tableau", titre: "Pays et nationalités", entetes: ["Pays", "Lecture", "Garçon", "Fille"], lignes: [
              ["فَرَنْسَا", "Faransā (France)", "فَرَنْسِيّ (faransī)", "فَرَنْسِيَّة (faransiyya)"],
              ["الْمَغْرِب", "al-Maghrib (Maroc)", "مَغْرِبِيّ (maghribī)", "مَغْرِبِيَّة (maghribiyya)"],
              ["تُونِس", "Tūnis (Tunisie)", "تُونِسِيّ (tūnisī)", "تُونِسِيَّة (tūnisiyya)"],
              ["مِصْر", "Miṣr (Égypte)", "مِصْرِيّ (miṣrī)", "مِصْرِيَّة (miṣriyya)"],
              ["لُبْنَان", "Lubnān (Liban)", "لُبْنَانِيّ (lubnānī)", "لُبْنَانِيَّة (lubnāniyya)"],
            ] },
            { t: "attention", md: "Devant un nom qui porte l'article, مِنْ devient **مِنَ** (mina) : أَنَا مِنَ الْمَغْرِب (anā mina l-Maghrib : je suis du Maroc). Et une fille dit **أَنَا فَرَنْسِيَّة**, avec la ة du féminin : la chadda du ي reste, et l'on entend faransi**yya**." },
          ],
        },
        {
          titre: "Parler à un garçon, parler à une fille",
          blocs: [
            { t: "texte", md: "En arabe, « tu » et « ton » changent selon la personne à qui l'on parle. La différence tient souvent à **une seule voyelle** : **ـكَ** (-ka) pour un garçon, **ـكِ** (-ki) pour une fille. مَا اسْمُكَ؟ (mā smuka ?) s'adresse à un garçon, مَا اسْمُكِ؟ (mā smuki ?) à une fille. Remarque aussi le point d'interrogation arabe, retourné : **؟**" },
            { t: "tableau", titre: "Les questions pour faire connaissance", entetes: ["À un garçon", "À une fille", "Sens", "Réponse"], lignes: [
              ["مَا اسْمُكَ؟", "مَا اسْمُكِ؟", "Comment t'appelles-tu ?", "اِسْمِي يُوسُف. (ismī Yūsuf)"],
              ["كَيْفَ حَالُكَ؟", "كَيْفَ حَالُكِ؟", "Comment vas-tu ?", "أَنَا بِخَيْر، شُكْرًا. (anā bi-khayr, shukran)"],
              ["مِنْ أَيْنَ أَنْتَ؟", "مِنْ أَيْنَ أَنْتِ؟", "D'où es-tu ?", "أَنَا مِنْ فَرَنْسَا. (anā min Faransā)"],
              ["كَمْ عُمْرُكَ؟", "كَمْ عُمْرُكِ؟", "Quel âge as-tu ?", "عُمْرِي اثْنَا عَشَرَ عَامًا. (ʿumrī ithnā ʿashar ʿāman : j'ai 12 ans)"],
            ] },
            { t: "exemple", titre: "Une première conversation", md: "— مَرْحَبًا! مَا اسْمُكَ؟ (marḥaban ! mā smuka ? : salut ! comment t'appelles-tu ?)\n— اِسْمِي آدَم. وَأَنْتِ؟ (ismī Ādam. wa-anti ? : je m'appelle Adam. Et toi ?)\n— اِسْمِي سَلْمَى. مِنْ أَيْنَ أَنْتَ؟ (ismī Salmā. min ayna anta ? : je m'appelle Salma. D'où es-tu ?)\n— أَنَا مِنْ فَرَنْسَا. أَنَا فَرَنْسِيّ. (anā min Faransā. anā faransī : je suis de France. Je suis français.)\n— أَهْلًا وَسَهْلًا! (ahlan wa-sahlan ! : bienvenue !)\n— شُكْرًا! (shukran ! : merci !)" },
            { t: "verifie", q: "Comment demande-t-on à une **fille** : « Comment vas-tu ? »", choix: ["كَيْفَ حَالُكَ؟", "كَيْفَ حَالُكِ؟", "مَا اسْمُكِ؟", "مِنْ أَيْنَ أَنْتِ؟"], bonne: 1, explication: "**كَيْفَ** (kayfa) = comment, **حَال** (ḥāl) = état, et la terminaison **ـكِ** (-ki) s'adresse à une fille : kayfa ḥāluki ? Avec ـكَ (-ka), on parlerait à un garçon. مَا اسْمُكِ؟ demande le nom, et مِنْ أَيْنَ أَنْتِ؟ l'origine." },
            { t: "verifie", q: "On te demande مِنْ أَيْنَ أَنْتَ؟ (min ayna anta ?). Que réponds-tu ?", choix: ["اِسْمِي آدَم.", "أَنَا بِخَيْر.", "أَنَا مِنْ فَرَنْسَا.", "شُكْرًا."], bonne: 2, explication: "**مِنْ أَيْنَ** (min ayna) veut dire « d'où ». On répond avec **مِنْ** + le pays : أَنَا مِنْ فَرَنْسَا (anā min Faransā : je suis de France)." },
          ],
        },
      ],
      bilan: "مَرْحَبًا pour saluer, شُكْرًا et عَفْوًا pour la politesse, مَعَ السَّلَامَة pour partir ; اِسْمِي… et أَنَا مِنْ… pour te présenter ; et une voyelle qui change tout : ـكَ pour un garçon, ـكِ pour une fille.",
    },

    "5e-arabe-04-nombres-jours-mois": {
      accroche: "Sur une plaque d'immatriculation au Caire, tu lis ٤٧ ; sur une étiquette à Casablanca, le prix est écrit 47. C'est le même nombre ! Le monde arabe utilise deux séries de chiffres… et c'est par lui que l'Europe a reçu ceux que tu utilises chaque jour.",
      objectifs: [
        "Lire les chiffres arabes orientaux (١٢٣) et occidentaux (123)",
        "Compter de 0 à 20 et former les nombres jusqu'à 100",
        "Nommer les jours de la semaine et savoir que les mois ont plusieurs noms",
      ],
      sections: [
        {
          titre: "Deux séries de chiffres",
          blocs: [
            { t: "texte", md: "Nos chiffres 0, 1, 2, 3… s'appellent **chiffres arabes** : inventés en Inde, ils sont arrivés en Europe au Moyen Âge grâce à des savants qui écrivaient en arabe. Aujourd'hui, le Maghreb les utilise, comme nous : ce sont les chiffres **arabes occidentaux**. L'Égypte, le Proche-Orient et le Golfe utilisent une autre série, les chiffres **arabes orientaux** : ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩." },
            { t: "schema", titre: "Les chiffres arabes orientaux face aux nôtres", legende: "Les deux pièges sont en couleur : ٠ (un simple point) vaut 0, et ٥ (un petit rond) vaut 5. Un nombre comme ٢٠٢٦ se lit de gauche à droite, même au milieu d'une phrase arabe.", svg: `<svg viewBox="0 0 400 250"><text class="texte-petit" x="200" y="16" text-anchor="middle">chiffres arabes orientaux (Égypte, Proche-Orient, Golfe)</text><rect class="aplat" x="23" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="23" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="38" y1="80" x2="38" y2="92"/><text class="texte" x="38" y="118" text-anchor="middle" style="font-size:22px">0</text><rect class="aplat-papier" x="59" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="59" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="74" y1="80" x2="74" y2="92"/><text class="texte" x="74" y="118" text-anchor="middle" style="font-size:22px">1</text><rect class="aplat-papier" x="95" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="95" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="110" y1="80" x2="110" y2="92"/><text class="texte" x="110" y="118" text-anchor="middle" style="font-size:22px">2</text><rect class="aplat-papier" x="131" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="131" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="146" y1="80" x2="146" y2="92"/><text class="texte" x="146" y="118" text-anchor="middle" style="font-size:22px">3</text><rect class="aplat-papier" x="167" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="167" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="182" y1="80" x2="182" y2="92"/><text class="texte" x="182" y="118" text-anchor="middle" style="font-size:22px">4</text><rect class="aplat" x="203" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="203" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="218" y1="80" x2="218" y2="92"/><text class="texte" x="218" y="118" text-anchor="middle" style="font-size:22px">5</text><rect class="aplat-papier" x="239" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="239" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="254" y1="80" x2="254" y2="92"/><text class="texte" x="254" y="118" text-anchor="middle" style="font-size:22px">6</text><rect class="aplat-papier" x="275" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="275" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="290" y1="80" x2="290" y2="92"/><text class="texte" x="290" y="118" text-anchor="middle" style="font-size:22px">7</text><rect class="aplat-papier" x="311" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="311" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="326" y1="80" x2="326" y2="92"/><text class="texte" x="326" y="118" text-anchor="middle" style="font-size:22px">8</text><rect class="aplat-papier" x="347" y="26" width="30" height="104" rx="6"/><rect class="trait-fin" x="347" y="26" width="30" height="104" rx="6"/><line class="pointille" x1="362" y1="80" x2="362" y2="92"/><text class="texte" x="362" y="118" text-anchor="middle" style="font-size:22px">9</text><text class="texte-petit" x="200" y="148" text-anchor="middle">chiffres arabes occidentaux (Maghreb, Europe) : nos chiffres</text><text class="texte" x="200" y="198" text-anchor="middle" style="font-size:30px">=</text><text class="texte" x="280" y="198" text-anchor="middle" style="font-size:28px">2026</text><line class="trait" x1="70" y1="222" x2="330" y2="222" marker-end="url(#fl-p)"/><text class="texte-pigment" x="200" y="242" text-anchor="middle">les nombres se lisent de gauche à droite</text><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif"><text x="38" y="68" font-size="30" text-anchor="middle">٠</text><text x="74" y="68" font-size="30" text-anchor="middle">١</text><text x="110" y="68" font-size="30" text-anchor="middle">٢</text><text x="146" y="68" font-size="30" text-anchor="middle">٣</text><text x="182" y="68" font-size="30" text-anchor="middle">٤</text><text x="218" y="68" font-size="30" text-anchor="middle">٥</text><text x="254" y="68" font-size="30" text-anchor="middle">٦</text><text x="290" y="68" font-size="30" text-anchor="middle">٧</text><text x="326" y="68" font-size="30" text-anchor="middle">٨</text><text x="362" y="68" font-size="30" text-anchor="middle">٩</text><text x="120" y="200" font-size="34" text-anchor="middle">٢٠٢٦</text></g></svg>` },
            { t: "attention", md: "Trois pièges pour un œil français :\n• **٥ vaut 5**, et le zéro est un point : **٠** ;\n• ٦ (6) ressemble à un 7 retourné, mais vaut 6 ; ٧ (7) a la forme d'un V et ٨ (8) d'un V à l'envers ;\n• les nombres s'écrivent **de gauche à droite**, même dans un texte arabe : ٢٠٢٦ = 2026, et non 6202." },
            { t: "verifie", q: "Quel nombre est écrit ١٥ ?", choix: ["10", "15", "51", "65"], bonne: 1, explication: "١ = 1 et ٥ = 5, lus de gauche à droite : **15**. Attention, ٥ est un petit rond, pas un zéro !" },
          ],
        },
        {
          titre: "Compter de 0 à 20",
          blocs: [
            { t: "tableau", titre: "De 1 à 20", entetes: ["Nombre", "En arabe", "Nombre", "En arabe"], lignes: [
              ["١ (1)", "وَاحِد (wāḥid)", "١١ (11)", "أَحَدَ عَشَرَ (aḥada ʿashar)"],
              ["٢ (2)", "اِثْنَان (ithnān)", "١٢ (12)", "اِثْنَا عَشَرَ (ithnā ʿashar)"],
              ["٣ (3)", "ثَلَاثَة (thalātha)", "١٣ (13)", "ثَلَاثَةَ عَشَرَ (thalāthata ʿashar)"],
              ["٤ (4)", "أَرْبَعَة (arbaʿa)", "١٤ (14)", "أَرْبَعَةَ عَشَرَ (arbaʿata ʿashar)"],
              ["٥ (5)", "خَمْسَة (khamsa)", "١٥ (15)", "خَمْسَةَ عَشَرَ (khamsata ʿashar)"],
              ["٦ (6)", "سِتَّة (sitta)", "١٦ (16)", "سِتَّةَ عَشَرَ (sittata ʿashar)"],
              ["٧ (7)", "سَبْعَة (sabʿa)", "١٧ (17)", "سَبْعَةَ عَشَرَ (sabʿata ʿashar)"],
              ["٨ (8)", "ثَمَانِيَة (thamāniya)", "١٨ (18)", "ثَمَانِيَةَ عَشَرَ (thamāniyata ʿashar)"],
              ["٩ (9)", "تِسْعَة (tisʿa)", "١٩ (19)", "تِسْعَةَ عَشَرَ (tisʿata ʿashar)"],
              ["١٠ (10)", "عَشَرَة (ʿashara)", "٢٠ (20)", "عِشْرُون (ʿishrūn)"],
            ] },
            { t: "propriete", titre: "De 11 à 19 : l'unité, puis « dix »", md: "On dit d'abord l'unité, puis **عَشَرَ** (ʿashar : dix) : اِثْنَا عَشَرَ (ithnā ʿashar), « deux-dix » = 12. Seul 11 a une forme à part : أَحَدَ عَشَرَ (aḥada ʿashar). Quand on compte, les nombres de 3 à 10 se terminent par ة. Et zéro se dit **صِفْر** (ṣifr)." },
            { t: "savais-tu", md: "صِفْر (ṣifr), qui signifie « vide », a donné deux mots français : **chiffre** et **zéro** ! Le zéro, venu de l'Inde, a été diffusé en Europe grâce aux mathématiciens de langue arabe." },
          ],
        },
        {
          titre: "Les dizaines, jusqu'à 100",
          blocs: [
            { t: "tableau", titre: "Les dizaines se terminent en -ūn", entetes: ["Nombre", "En arabe", "Lecture"], lignes: [
              ["٢٠ (20)", "عِشْرُون", "ʿishrūn"],
              ["٣٠ (30)", "ثَلَاثُون", "thalāthūn"],
              ["٤٠ (40)", "أَرْبَعُون", "arbaʿūn"],
              ["٥٠ (50)", "خَمْسُون", "khamsūn"],
              ["٦٠ (60)", "سِتُّون", "sittūn"],
              ["٧٠ (70)", "سَبْعُون", "sabʿūn"],
              ["٨٠ (80)", "ثَمَانُون", "thamānūn"],
              ["٩٠ (90)", "تِسْعُون", "tisʿūn"],
              ["١٠٠ (100)", "مِئَة", "miʾa"],
            ] },
            { t: "propriete", titre: "L'unité avant la dizaine", md: "Comme en allemand, on dit **l'unité d'abord**, puis la dizaine, reliées par **وَ** (wa : et), collé au mot qui suit : 25 = خَمْسَة وَعِشْرُون (khamsa wa-ʿishrūn), « cinq et vingt » ; 42 = اِثْنَان وَأَرْبَعُون (ithnān wa-arbaʿūn), « deux et quarante »." },
            { t: "exemple", titre: "Lire ٤٧ et le dire en arabe", etapes: [
              "On lit les chiffres de gauche à droite : ٤ (4) puis ٧ (7) : c'est **47**.",
              "On cherche l'unité : 7 se dit سَبْعَة (sabʿa) ; la dizaine : 40 se dit أَرْبَعُون (arbaʿūn).",
              "On dit l'unité d'abord, avec وَ : **سَبْعَة وَأَرْبَعُون** (sabʿa wa-arbaʿūn), « sept et quarante ».",
            ] },
            { t: "verifie", q: "Quel nombre est سَبْعَة وَثَلَاثُون (sabʿa wa-thalāthūn) ?", choix: ["73", "37", "17", "307"], bonne: 1, explication: "سَبْعَة = 7 et ثَلَاثُون = 30. L'unité est dite en premier : « sept et trente » = **37**. Ne réponds pas 73 !" },
          ],
        },
        {
          titre: "Les jours de la semaine",
          blocs: [
            { t: "tableau", titre: "La semaine commence le dimanche", entetes: ["Jour", "Lecture", "Sens", "D'où vient le nom ?"], lignes: [
              ["الْأَحَد", "al-aḥad", "dimanche", "أَحَد (aḥad) : un, le 1er jour"],
              ["الِاثْنَيْن", "al-ithnayn", "lundi", "deux : le 2e jour"],
              ["الثُّلَاثَاء", "ath-thulāthāʾ", "mardi", "trois : le 3e jour"],
              ["الْأَرْبِعَاء", "al-arbiʿāʾ", "mercredi", "quatre : le 4e jour"],
              ["الْخَمِيس", "al-khamīs", "jeudi", "cinq : le 5e jour"],
              ["الْجُمُعَة", "al-jumuʿa", "vendredi", "le rassemblement"],
              ["السَّبْت", "as-sabt", "samedi", "même mot que « sabbat » : le repos"],
            ] },
            { t: "texte", md: "Jour se dit **يَوْم** (yawm). Les cinq premiers noms viennent des nombres 1 à 5 : retrouve le 5 de خَمْسَة (khamsa) dans الْخَمِيس (al-khamīs : jeudi). Dans beaucoup de pays arabes, le vendredi est jour de repos ; selon les pays, le week-end tombe le vendredi et le samedi, ou le samedi et le dimanche." },
            { t: "verifie", q: "Que signifie الْخَمِيس (al-khamīs) ?", choix: ["mardi", "jeudi", "vendredi", "dimanche"], bonne: 1, explication: "**الْخَمِيس** vient de خَمْسَة (khamsa : cinq) : c'est le 5e jour en partant du dimanche, donc **jeudi**." },
          ],
        },
        {
          titre: "Les mois : un mois, plusieurs noms",
          blocs: [
            { t: "texte", md: "Les mois n'ont pas le même nom partout. L'Égypte, le Maroc ou le Golfe utilisent des noms proches des mots européens ; la Tunisie et l'Algérie les ont empruntés au français ; le Liban, la Syrie, la Jordanie et l'Irak gardent des noms très anciens. L'histoire de chaque région a laissé sa trace." },
            { t: "tableau", titre: "Trois mois, trois façons de les nommer", entetes: ["Mois", "Égypte, Maroc, Golfe", "Tunisie, Algérie", "Liban, Syrie, Irak"], lignes: [
              ["janvier", "يَنَايِر (yanāyir)", "جَانْفِي (jānfī)", "كَانُونُ الثَّانِي (kānūn ath-thānī)"],
              ["février", "فِبْرَايِر (fibrāyir)", "فِيفْرِي (fīfrī)", "شُبَاط (shubāṭ)"],
              ["avril", "أَبْرِيل (abrīl)", "أَفْرِيل (afrīl)", "نِيسَان (nīsān)"],
            ] },
          ],
        },
      ],
      bilan: "Deux séries de chiffres, toujours lues de gauche à droite ; l'unité avant la dizaine, reliée par وَ ; une semaine qui commence par « le premier jour », الْأَحَد ; et des mois qui changent de nom selon les pays.",
    },

    "5e-arabe-05-pronoms-phrase-nominale": {
      accroche: "En arabe, pour dire « je suis élève », on dit simplement… « moi élève » : أَنَا تِلْمِيذ (anā tilmīdh). Pas de verbe « être » au présent, deux mots suffisent ! Mais pour dire « tu », il faut d'abord regarder à qui l'on parle.",
      objectifs: [
        "Employer les pronoms أَنَا، أَنْتَ، أَنْتِ، هُوَ، هِيَ",
        "Construire une phrase nominale, sans verbe « être »",
        "Poser une question fermée avec هَلْ et y répondre par نَعَمْ ou لَا",
      ],
      sections: [
        {
          titre: "Je, tu, il, elle",
          blocs: [
            { t: "tableau", titre: "Les pronoms personnels du singulier", entetes: ["Arabe", "Lecture", "Sens", "À retenir"], lignes: [
              ["أَنَا", "anā", "je, moi", "le même pour un garçon ou une fille"],
              ["أَنْتَ", "anta", "tu, toi (à un garçon)", "fatḥa finale : a"],
              ["أَنْتِ", "anti", "tu, toi (à une fille)", "kasra finale : i"],
              ["هُوَ", "huwa", "il, lui", "ḍamma sur le ه"],
              ["هِيَ", "hiya", "elle", "kasra sur le ه"],
            ] },
            { t: "schema", titre: "Anta ou anti ?", legende: "أَنْتَ et أَنْتِ s'écrivent avec les mêmes lettres : seule la voyelle finale change. De même, هُوَ (il) et هِيَ (elle) ne diffèrent que par leur voyelle et leur dernière lettre.", svg: `<svg viewBox="0 0 400 214"><text class="texte-main" x="200" y="20" text-anchor="middle">une seule voyelle change tout</text><rect class="aplat-papier trait" x="210" y="32" width="170" height="124" rx="10"/><rect class="aplat-papier trait" x="20" y="32" width="170" height="124" rx="10"/><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" text-anchor="middle"><text x="295" y="100" font-size="50">أَنْتَ</text><text x="105" y="100" font-size="50">أَنْتِ</text><text x="350" y="196" font-size="24">هُوَ</text><text x="150" y="196" font-size="24">هِيَ</text></g><g class="texte-pigment" text-anchor="middle" font-size="14" font-weight="600"><text x="295" y="126">anta</text><text x="105" y="126">anti</text></g><g class="texte" text-anchor="middle"><text x="295" y="145">tu, à un garçon</text><text x="105" y="145">tu, à une fille</text></g><g class="texte" text-anchor="end"><text x="322" y="192">huwa : il</text><text x="122" y="192">hiya : elle</text></g><line class="pointille" x1="200" y1="170" x2="200" y2="206"/></svg>` },
            { t: "attention", md: "Dans un texte sans voyelles, أنت peut se lire anta ou anti : c'est le contexte qui te dit si l'on parle à un garçon ou à une fille. Dans ce cours, les voyelles sont toujours écrites : regarde bien la dernière !" },
            { t: "verifie", q: "Comment dit-on « elle » ?", choix: ["هُوَ (huwa)", "هِيَ (hiya)", "أَنْتِ (anti)", "أَنَا (anā)"], bonne: 1, explication: "**هِيَ** (hiya) = elle. هُوَ (huwa) = il, أَنْتِ (anti) = tu (à une fille) et أَنَا (anā) = je." },
          ],
        },
        {
          titre: "La phrase nominale : pas de verbe « être »",
          blocs: [
            { t: "definition", terme: "La phrase nominale", md: "Une phrase qui commence par un nom ou un pronom. Au présent, l'arabe pose simplement côte à côte le **sujet** et ce qu'on en dit, l'**attribut** : il n'y a **pas de verbe « être »**. أَنَا تِلْمِيذ (anā tilmīdh) = « moi élève » = je suis élève." },
            { t: "tableau", titre: "Des mots pour faire des phrases", entetes: ["Masculin", "Féminin", "Sens"], lignes: [
              ["تِلْمِيذ (tilmīdh)", "تِلْمِيذَة (tilmīdha)", "élève"],
              ["مُعَلِّم (muʿallim)", "مُعَلِّمَة (muʿallima)", "professeur, professeure"],
              ["سَعِيد (saʿīd)", "سَعِيدَة (saʿīda)", "heureux, heureuse"],
              ["مَرِيض (marīḍ)", "مَرِيضَة (marīḍa)", "malade"],
              ["كَبِير (kabīr)", "كَبِيرَة (kabīra)", "grand, grande"],
              ["جَدِيد (jadīd)", "جَدِيدَة (jadīda)", "neuf, neuve"],
            ] },
            { t: "exemple", titre: "Des phrases sans verbe", md: "أَنَا تِلْمِيذ. (anā tilmīdh : je suis élève.)\nهِيَ مُعَلِّمَة. (hiya muʿallima : elle est professeure.)\nهُوَ سَعِيد. (huwa saʿīd : il est heureux.)\nأَنْتِ مَرِيضَة. (anti marīḍa : tu es malade, à une fille.)\n\nC'est le français qui ajoute « suis, est, es ». La ة finale de مُعَلِّمَة ou مَرِيضَة confirme qu'on parle d'une fille ou d'une femme." },
          ],
        },
        {
          titre: "Avec ou sans article : phrase ou groupe de mots ?",
          blocs: [
            { t: "propriete", titre: "Le sujet a l'article, l'attribut ne l'a pas", md: "Pour faire une phrase avec un nom, on met l'article **ال** sur le sujet et **pas** sur l'attribut : **الْبَيْتُ كَبِير** (al-bayt kabīr) = la maison est grande ; **الْكِتَابُ جَدِيد** (al-kitāb jadīd) = le livre est neuf.\n\nSi les deux mots ont l'article, ce n'est plus une phrase, mais un groupe nominal : الْبَيْتُ الْكَبِير (al-bayt al-kabīr) = « la grande maison »." },
            { t: "schema", titre: "Où est l'article ?", legende: "L'adjectif suit toujours le nom. S'il prend l'article comme le nom, il le décrit (« la grande maison ») ; s'il ne le prend pas, il forme une phrase (« la maison est grande »).", svg: `<svg viewBox="0 0 400 240"><g class="texte-petit" text-anchor="middle"><text x="340" y="18">nom</text><text x="250" y="18">adjectif</text></g><text class="texte-petit" x="12" y="18">sens</text><rect class="aplat trait-fin" x="298" y="30" width="84" height="48" rx="8"/><rect class="aplat-papier trait-fin" x="204" y="30" width="92" height="48" rx="8"/><text class="texte-pigment" x="12" y="50">une phrase</text><text class="texte" x="12" y="68">la maison est grande</text><rect class="aplat trait-fin" x="298" y="96" width="84" height="48" rx="8"/><rect class="aplat trait-fin" x="204" y="96" width="92" height="48" rx="8"/><text class="texte-pigment" x="12" y="116">un groupe de mots</text><text class="texte" x="12" y="134">la grande maison</text><rect class="aplat-papier trait-fin" x="298" y="162" width="84" height="48" rx="8"/><rect class="aplat-papier trait-fin" x="204" y="162" width="92" height="48" rx="8"/><text class="texte-pigment" x="12" y="182">un groupe de mots</text><text class="texte" x="12" y="200">une grande maison</text><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="24" text-anchor="middle"><text x="340" y="63">الْبَيْتُ</text><text x="250" y="63">كَبِير</text><text x="340" y="129">الْبَيْتُ</text><text x="250" y="129">الْكَبِير</text><text x="340" y="195">بَيْتٌ</text><text x="250" y="195">كَبِير</text></g><rect class="aplat trait-fin" x="204" y="222" width="16" height="12" rx="3"/><text class="texte-petit" x="226" y="232">mot qui porte l'article</text></svg>` },
            { t: "verifie", q: "Quelle phrase signifie « La maison est grande » ?", choix: ["الْبَيْتُ الْكَبِير", "الْبَيْتُ كَبِير.", "بَيْتٌ كَبِير", "كَبِيرٌ بَيْت"], bonne: 1, explication: "Le sujet a l'article, l'attribut ne l'a pas : **الْبَيْتُ كَبِير** (al-bayt kabīr). الْبَيْتُ الْكَبِير = la grande maison et بَيْتٌ كَبِير = une grande maison : ce sont des groupes de mots, pas des phrases." },
          ],
        },
        {
          titre: "Poser une question avec هَلْ",
          blocs: [
            { t: "texte", md: "Pour poser une question fermée, dont la réponse est oui ou non, on place **هَلْ** (hal : est-ce que) **en tête de phrase**, et on finit par le point d'interrogation arabe **؟**. On répond **نَعَمْ** (naʿam : oui) ou **لَا** (lā : non), puis on fait une petite phrase complète." },
            { t: "etapes", titre: "De l'affirmation à la question", items: [
              { titre: "L'affirmation", md: "أَنْتَ مَرِيض. (anta marīḍ : tu es malade.)" },
              { titre: "La question", md: "On ajoute هَلْ devant : هَلْ أَنْتَ مَرِيض؟ (hal anta marīḍ ? : es-tu malade ?)" },
              { titre: "La réponse « oui »", md: "نَعَمْ، أَنَا مَرِيض. (naʿam, anā marīḍ : oui, je suis malade.)" },
              { titre: "La réponse « non »", md: "لَا، أَنَا بِخَيْر. (lā, anā bi-khayr : non, je vais bien.)" },
            ] },
            { t: "exemple", titre: "Un petit dialogue", md: "— هَلْ أَنْتِ تِلْمِيذَة؟ (hal anti tilmīdha ? : es-tu élève ?)\n— نَعَمْ، أَنَا تِلْمِيذَة. (naʿam, anā tilmīdha : oui, je suis élève.)\n— وَهُوَ؟ (wa-huwa ? : et lui ?)\n— هُوَ مُعَلِّم. (huwa muʿallim : il est professeur.)" },
            { t: "attention", md: "Ta réponse doit rester cohérente : « لَا، أَنَا فَرَنْسِيّ » (non, je suis français) se contredit si l'on t'a demandé هَلْ أَنْتَ فَرَنْسِيّ؟ Et pour parler de toi, réponds avec **أَنَا**, pas avec أَنْتَ ni هِيَ." },
            { t: "verifie", q: "Une amie te demande هَلْ أَنْتِ مَرِيضَة؟ Tu es une fille et tu vas très bien. Que réponds-tu ?", choix: ["نَعَمْ، أَنَا بِخَيْر.", "لَا، أَنَا بِخَيْر.", "لَا، أَنْتِ بِخَيْر.", "نَعَمْ، هِيَ مَرِيضَة."], bonne: 1, explication: "Tu n'es pas malade : tu réponds **لَا** (lā : non), puis **أَنَا بِخَيْر** (anā bi-khayr : je vais bien). نَعَمْ contredirait la suite, et أَنْتِ ou هِيَ ne parlent pas de toi." },
          ],
        },
      ],
      bilan: "أَنَا، أَنْتَ، أَنْتِ، هُوَ، هِيَ ; au présent, pas de verbe « être » : le sujet avec ال, l'attribut sans ال ; et pour questionner, هَلْ en tête, نَعَمْ ou لَا pour répondre.",
    },

    "5e-arabe-06-genre-accord": {
      accroche: "En français, on dit « la maison » ; en arabe, بَيْت (bayt) est… masculin ! Et le soleil, شَمْس (shams), est féminin. Heureusement, une petite lettre trahit presque toujours le féminin : la ة. Une fois repérée, tout s'accorde.",
      objectifs: [
        "Reconnaître le masculin et le féminin des noms, avec la ة et ses exceptions",
        "Placer l'adjectif après le nom et l'accorder en genre et avec l'article",
        "Employer les démonstratifs هٰذَا et هٰذِهِ",
      ],
      sections: [
        {
          titre: "Masculin ou féminin ?",
          blocs: [
            { t: "propriete", titre: "La ة, marque du féminin", md: "Un nom arabe est **masculin** ou **féminin** : il n'y a pas de neutre. La plupart des féminins se terminent par **ة**, et l'on forme souvent le féminin en ajoutant ـَة au masculin : مُعَلِّم → مُعَلِّمَة (muʿallim → muʿallima : professeur, professeure)." },
            { t: "tableau", titre: "Du masculin au féminin : + ة", entetes: ["Masculin", "Féminin", "Sens"], lignes: [
              ["صَدِيق (ṣadīq)", "صَدِيقَة (ṣadīqa)", "ami, amie"],
              ["طَالِب (ṭālib)", "طَالِبَة (ṭāliba)", "étudiant, étudiante"],
              ["كَبِير (kabīr)", "كَبِيرَة (kabīra)", "grand, grande"],
              ["صَغِير (ṣaghīr)", "صَغِيرَة (ṣaghīra)", "petit, petite"],
              ["جَمِيل (jamīl)", "جَمِيلَة (jamīla)", "beau, belle"],
              ["فَرَنْسِيّ (faransī)", "فَرَنْسِيَّة (faransiyya)", "français, française"],
            ] },
            { t: "attention", md: "Quelques noms sont **féminins sans ة** : أُمّ (umm : mère), بِنْت (bint : fille), شَمْس (shams : soleil), دَار (dār : maison). Et le genre ne suit pas toujours le français : بَيْت (bayt : maison), كِتَاب (kitāb : livre) et بَاب (bāb : porte) sont masculins ; سَيَّارَة (sayyāra : voiture), غُرْفَة (ghurfa : chambre) et مَدْرَسَة (madrasa : école) sont féminins." },
            { t: "verifie", q: "Le mot شَمْس (shams : soleil) est-il masculin ou féminin ?", choix: ["Masculin, car il n'a pas de ة", "Féminin, même sans ة", "Il n'a pas de genre"], bonne: 1, explication: "**شَمْس** fait partie des quelques noms féminins sans ة, comme أُمّ (umm : mère) et بِنْت (bint : fille). On dit donc الشَّمْسُ جَمِيلَة (ash-shams jamīla : le soleil est beau), avec un adjectif féminin." },
          ],
        },
        {
          titre: "L'adjectif suit le nom… et s'accorde",
          blocs: [
            { t: "propriete", titre: "Après le nom, au même genre", md: "En arabe, l'adjectif se place **toujours après** le nom, et il prend son genre : si le nom est féminin, l'adjectif prend **ة**.\nكِتَابٌ جَدِيد (kitāb jadīd) = un livre neuf, mot à mot « livre neuf ».\nسَيَّارَةٌ جَدِيدَة (sayyāra jadīda) = une voiture neuve." },
            { t: "schema", titre: "L'accord se lit de droite à gauche", legende: "Le nom vient d'abord (à droite), l'adjectif ensuite (à gauche). Quand le nom est féminin, l'adjectif reprend sa marque ة.", svg: `<svg viewBox="0 0 400 214"><g class="texte-petit" text-anchor="middle"><text x="310" y="16">nom</text><text x="190" y="16">adjectif, après le nom</text></g><text class="texte-petit" x="12" y="16">sens</text><rect class="aplat-papier trait-fin" x="250" y="26" width="120" height="70" rx="8"/><rect class="aplat-papier trait-fin" x="135" y="26" width="110" height="70" rx="8"/><rect class="aplat trait-fin" x="250" y="124" width="120" height="70" rx="8"/><rect class="aplat trait-fin" x="135" y="124" width="110" height="70" rx="8"/><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="28" text-anchor="middle"><text x="310" y="66">كِتَابٌ</text><text x="190" y="66">جَدِيد</text><text x="310" y="164">سَيَّارَةٌ</text><text x="190" y="164">جَدِيدَة</text></g><g class="texte-petit" text-anchor="middle"><text x="310" y="87">kitāb</text><text x="190" y="87">jadīd</text><text x="310" y="185">sayyāra</text><text x="190" y="185">jadīda</text></g><path class="trait" d="M268 122 Q214 100 160 122" marker-end="url(#fl-p)"/><text class="texte" x="12" y="56">un livre neuf</text><text class="texte-petit" x="12" y="72">masculin</text><text class="texte" x="12" y="154">une voiture neuve</text><text class="texte-petit" x="12" y="170">féminin : la marque</text><text class="texte-petit" x="12" y="184">se recopie</text></svg>` },
            { t: "exemple", titre: "Accorder avec un féminin sans ة", md: "بِنْت (bint : fille) est féminin, même sans ة. L'adjectif prend donc la marque du féminin : **بِنْتٌ جَمِيلَة** (bint jamīla : une jolie fille). Ce qui compte, c'est le genre du nom, pas sa dernière lettre." },
          ],
        },
        {
          titre: "L'article : groupe nominal ou phrase ?",
          blocs: [
            { t: "texte", md: "L'adjectif s'accorde aussi avec l'**article** : si le nom a ال, l'adjectif le prend aussi. Sans article sur l'adjectif, on obtient une **phrase** (tu l'as vu au chapitre précédent)." },
            { t: "tableau", titre: "Trois constructions à bien distinguer", entetes: ["Arabe", "Lecture", "Sens", "Nature"], lignes: [
              ["كِتَابٌ جَدِيد", "kitāb jadīd", "un livre neuf", "groupe nominal indéfini"],
              ["الْكِتَابُ الْجَدِيد", "al-kitāb al-jadīd", "le livre neuf", "groupe nominal défini"],
              ["الْكِتَابُ جَدِيد.", "al-kitāb jadīd", "le livre est neuf", "phrase"],
              ["سَيَّارَةٌ صَغِيرَة", "sayyāra ṣaghīra", "une petite voiture", "groupe nominal indéfini"],
              ["السَّيَّارَةُ الصَّغِيرَة", "as-sayyāra aṣ-ṣaghīra", "la petite voiture", "groupe nominal défini"],
              ["السَّيَّارَةُ صَغِيرَة.", "as-sayyāra ṣaghīra", "la voiture est petite", "phrase"],
            ] },
            { t: "verifie", q: "Que signifie السَّيَّارَةُ الْجَدِيدَة (as-sayyāra al-jadīda) ?", choix: ["la voiture est neuve", "la voiture neuve", "une voiture neuve", "cette voiture"], bonne: 1, explication: "Le nom et l'adjectif ont **tous les deux** l'article : c'est un groupe nominal, « **la voiture neuve** ». « La voiture est neuve » se dirait السَّيَّارَةُ جَدِيدَة, sans article sur l'adjectif." },
          ],
        },
        {
          titre: "Ceci, c'est : هٰذَا et هٰذِهِ",
          blocs: [
            { t: "definition", terme: "Les démonstratifs", md: "**هٰذَا** (hādhā) s'emploie avec un nom **masculin**, **هٰذِهِ** (hādhihi) avec un nom **féminin**. Le petit trait vertical au-dessus du ه est un alif miniature : il fait entendre un ā long, hā-." },
            { t: "tableau", titre: "Deux emplois de هٰذَا / هٰذِهِ", entetes: ["Construction", "Masculin", "Féminin"], lignes: [
              ["+ nom sans article : « c'est un… »", "هٰذَا قَلَم (hādhā qalam : c'est un stylo)", "هٰذِهِ مَدْرَسَة (hādhihi madrasa : c'est une école)"],
              ["+ nom avec article : « ce, cette… »", "هٰذَا الْكِتَاب (hādhā l-kitāb : ce livre)", "هٰذِهِ الْغُرْفَة (hādhihi l-ghurfa : cette chambre)"],
              ["+ nom avec article + attribut", "هٰذَا الْكِتَابُ جَدِيد (ce livre est neuf)", "هٰذِهِ الْغُرْفَةُ صَغِيرَة (cette chambre est petite)"],
            ] },
            { t: "exemple", titre: "Choisir le bon démonstratif", md: "هٰذِهِ سَيَّارَة. السَّيَّارَةُ صَغِيرَة. (hādhihi sayyāra. as-sayyāra ṣaghīra : c'est une voiture. La voiture est petite.)\n\nسَيَّارَة a la ة : elle est féminine. On choisit donc هٰذِهِ, et l'adjectif صَغِير prend la ة. Avec بَيْت (masculin), on dirait : هٰذَا بَيْت. الْبَيْتُ كَبِير. (c'est une maison. La maison est grande.)" },
            { t: "verifie", q: "Comment dit-on « C'est une école » ?", choix: ["هٰذَا مَدْرَسَة.", "هٰذِهِ مَدْرَسَة.", "هٰذِهِ الْمَدْرَسَة", "مَدْرَسَة هٰذِهِ."], bonne: 1, explication: "مَدْرَسَة est féminin : on emploie **هٰذِهِ** (hādhihi). Avec l'article, هٰذِهِ الْمَدْرَسَة voudrait dire « cette école », sans former de phrase ; et le démonstratif se place avant le nom." },
          ],
        },
      ],
      bilan: "Une ة signale presque toujours le féminin, avec quelques exceptions comme أُمّ, بِنْت, شَمْس ; l'adjectif suit le nom et copie son genre et son article ; هٰذَا pour le masculin, هٰذِهِ pour le féminin.",
    },

    "5e-arabe-07-famille-possessifs": {
      accroche: "Yasmine te montre une photo de famille : « هٰذَا أَبِي، وَهٰذِهِ أُمِّي ». Tu remarques que « mon » n'est pas un mot à part : c'est une petite lettre collée à la fin du nom. Et en arabe, il y a deux mots pour « oncle », selon qu'il est le frère du père ou celui de la mère !",
      objectifs: [
        "Nommer les membres de la famille",
        "Employer les suffixes possessifs ـي ـكَ ـكِ ـهُ ـهَا",
        "Dire ce qu'on a avec عِنْدِي et présenter sa famille",
      ],
      sections: [
        {
          titre: "Les membres de la famille",
          blocs: [
            { t: "tableau", titre: "La famille : عَائِلَة (ʿāʾila)", entetes: ["Arabe", "Lecture", "Sens"], lignes: [
              ["أَب / أُمّ", "ab / umm", "père / mère"],
              ["أَخ / أُخْت", "akh / ukht", "frère / sœur"],
              ["اِبْن / بِنْت", "ibn / bint", "fils / fille"],
              ["جَدّ / جَدَّة", "jadd / jadda", "grand-père / grand-mère"],
              ["عَمّ / عَمَّة", "ʿamm / ʿamma", "oncle / tante, du côté du père"],
              ["خَال / خَالَة", "khāl / khāla", "oncle / tante, du côté de la mère"],
            ] },
            { t: "texte", md: "Remarque les paires : le féminin ajoute souvent **ة** (جَدّ → جَدَّة, خَال → خَالَة), mais أَخ devient أُخْت, avec un **ت**, et أَب / أُمّ sont deux mots différents. L'arabe est plus précis que le français pour les oncles et les tantes : **عَمّ** (ʿamm) est le frère du père, **خَال** (khāl) le frère de la mère." },
            { t: "schema", titre: "L'arbre de Yasmine, vu par elle", legende: "Yasmine parle de sa famille : chaque mot porte la terminaison ـي (-ī), « mon, ma ». Son oncle عَمِّي est le frère de son père ; sa tante خَالَتِي est la sœur de sa mère.", svg: `<svg viewBox="0 0 400 300"><path class="trait-fin" d="M98 38H106M102 38V86M50 86H148M50 86V104M148 86V104"/><rect class="aplat-papier pointille" x="256" y="14" width="138" height="46" rx="8"/><text class="texte-petit" x="325" y="34" text-anchor="middle">les parents</text><text class="texte-petit" x="325" y="48" text-anchor="middle">de ma mère</text><path class="trait-fin" d="M325 60V86M252 86H350M252 86V104M350 86V104"/><path class="trait-fin" d="M192 134H208M200 134V186M100 186H300M100 186V204M300 186V204M200 186V204"/><rect class="aplat-papier trait" x="6" y="8" width="92" height="60" rx="8"/><text class="texte-pigment" x="52" y="50" text-anchor="middle" style="font-size:11px">jaddī</text><text class="texte-petit" x="52" y="63" text-anchor="middle">mon grand-père</text><rect class="aplat-papier trait" x="106" y="8" width="92" height="60" rx="8"/><text class="texte-pigment" x="152" y="50" text-anchor="middle" style="font-size:11px">jaddatī</text><text class="texte-petit" x="152" y="63" text-anchor="middle">ma grand-mère</text><rect class="aplat-papier trait" x="4" y="104" width="92" height="60" rx="8"/><text class="texte-pigment" x="50" y="146" text-anchor="middle" style="font-size:11px">ʿammī</text><text class="texte-petit" x="50" y="159" text-anchor="middle">mon oncle</text><rect class="aplat-papier trait" x="102" y="104" width="92" height="60" rx="8"/><text class="texte-pigment" x="148" y="146" text-anchor="middle" style="font-size:11px">abī</text><text class="texte-petit" x="148" y="159" text-anchor="middle">mon père</text><rect class="aplat-papier trait" x="206" y="104" width="92" height="60" rx="8"/><text class="texte-pigment" x="252" y="146" text-anchor="middle" style="font-size:11px">ummī</text><text class="texte-petit" x="252" y="159" text-anchor="middle">ma mère</text><rect class="aplat-papier trait" x="304" y="104" width="92" height="60" rx="8"/><text class="texte-pigment" x="350" y="146" text-anchor="middle" style="font-size:11px">khālatī</text><text class="texte-petit" x="350" y="159" text-anchor="middle">ma tante</text><rect class="aplat-papier trait" x="54" y="204" width="92" height="60" rx="8"/><text class="texte-pigment" x="100" y="246" text-anchor="middle" style="font-size:11px">akhī</text><text class="texte-petit" x="100" y="259" text-anchor="middle">mon frère</text><rect class="aplat trait" x="154" y="204" width="92" height="60" rx="8"/><text class="texte-pigment" x="200" y="246" text-anchor="middle" style="font-size:11px">anā</text><text class="texte-petit" x="200" y="259" text-anchor="middle">moi, Yasmine</text><rect class="aplat-papier trait" x="254" y="204" width="92" height="60" rx="8"/><text class="texte-pigment" x="300" y="246" text-anchor="middle" style="font-size:11px">ukhtī</text><text class="texte-petit" x="300" y="259" text-anchor="middle">ma sœur</text><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="20" text-anchor="middle"><text x="52" y="33">جَدِّي</text><text x="152" y="33">جَدَّتِي</text><text x="50" y="129">عَمِّي</text><text x="148" y="129">أَبِي</text><text x="252" y="129">أُمِّي</text><text x="350" y="129">خَالَتِي</text><text x="100" y="229">أَخِي</text><text x="200" y="229">أَنَا</text><text x="300" y="229">أُخْتِي</text></g><text x="170" y="292" font-size="24" text-anchor="middle" style="fill:var(--co-pig-texte,var(--pigment-texte));font-family:'Noto Naskh Arabic','Amiri',serif">ـي</text><text class="texte-main" x="186" y="291">(-ī) = mon, ma</text></svg>` },
          ],
        },
        {
          titre: "Mon, ton, son : un suffixe collé au nom",
          blocs: [
            { t: "propriete", titre: "Les suffixes possessifs", md: "Le possessif arabe est une **terminaison** collée au nom : **ـي** (-ī : mon, ma), **ـكَ** (-ka : ton, ta, à un garçon), **ـكِ** (-ki : ton, ta, à une fille), **ـهُ** (-hu : son, sa, à lui), **ـهَا** (-hā : son, sa, à elle). Le nom possédé perd alors son article." },
            { t: "tableau", titre: "Deux noms avec les cinq suffixes", entetes: ["Suffixe", "Avec أُخْت (sœur)", "Avec بَيْت (maison)", "Sens"], lignes: [
              ["ـي", "أُخْتِي (ukhtī)", "بَيْتِي (baytī)", "ma sœur, ma maison"],
              ["ـكَ", "أُخْتُكَ (ukhtuka)", "بَيْتُكَ (baytuka)", "ta sœur, ta maison (à un garçon)"],
              ["ـكِ", "أُخْتُكِ (ukhtuki)", "بَيْتُكِ (baytuki)", "ta sœur, ta maison (à une fille)"],
              ["ـهُ", "أُخْتُهُ (ukhtuhu)", "بَيْتُهُ (baytuhu)", "sa sœur, sa maison (à lui)"],
              ["ـهَا", "أُخْتُهَا (ukhtuhā)", "بَيْتُهَا (baytuhā)", "sa sœur, sa maison (à elle)"],
            ] },
            { t: "attention", md: "En français, « sa mère » peut être la mère d'un garçon ou d'une fille. En arabe, on choisit selon le **possesseur** : أُمُّهُ (ummuhu) = la mère de lui, أُمُّهَا (ummuhā) = la mère d'elle. Retiens aussi trois formes avec ـي : **أَبِي** (abī : mon père), **أَخِي** (akhī : mon frère), **أُمِّي** (ummī : ma mère)." },
            { t: "verifie", q: "Comment dit-on « ta sœur » à un garçon ?", choix: ["أُخْتِي (ukhtī)", "أُخْتُكَ (ukhtuka)", "أُخْتُكِ (ukhtuki)", "أُخْتُهَا (ukhtuhā)"], bonne: 1, explication: "À un garçon, « ton, ta » se dit **ـكَ** (-ka) : **أُخْتُكَ**. ـكِ (-ki) s'adresse à une fille, أُخْتِي = ma sœur et أُخْتُهَا = sa sœur (à elle)." },
          ],
        },
        {
          titre: "Quand la ة devient ت",
          blocs: [
            { t: "propriete", titre: "La ة « s'ouvre » devant un suffixe", md: "La ة ne peut être qu'en fin de mot. Quand on ajoute un suffixe, elle redevient un **ت** ordinaire, et l'on entend le t : خَالَة (khāla) → **خَالَتِي** (khālatī : ma tante)." },
            { t: "exemple", titre: "Quatre mots, la même règle", md: "جَدَّة (jadda) → جَدَّتِي (jaddatī : ma grand-mère)\nعَمَّة (ʿamma) → عَمَّتُكَ (ʿammatuka : ta tante, à un garçon)\nعَائِلَة (ʿāʾila) → عَائِلَتِي (ʿāʾilatī : ma famille)\nمَدْرَسَة (madrasa) → مَدْرَسَتُهَا (madrasatuhā : son école, à elle)" },
            { t: "verifie", q: "Comment écrit-on « ma grand-mère » ?", choix: ["جَدَّةِي", "جَدَّتِي (jaddatī)", "جَدِّي (jaddī)", "جَدَّتُهَا (jaddatuhā)"], bonne: 1, explication: "جَدَّة + ـي : la ة devient ت → **جَدَّتِي** (jaddatī). جَدَّةِي garde la ة à tort, جَدِّي = mon grand-père, et جَدَّتُهَا = sa grand-mère (à elle)." },
          ],
        },
        {
          titre: "Avoir : عِنْدِي, « chez moi »",
          blocs: [
            { t: "definition", terme: "عِنْدَ + suffixe = avoir", md: "L'arabe n'a pas de verbe « avoir » au présent. On dit **عِنْدَ** (ʿinda : chez) + le suffixe : **عِنْدِي أَخ** (ʿindī akh), mot à mot « chez moi, un frère » = j'ai un frère." },
            { t: "tableau", titre: "J'ai, tu as, il a, elle a", entetes: ["Arabe", "Lecture", "Sens"], lignes: [
              ["عِنْدِي", "ʿindī", "j'ai"],
              ["عِنْدَكَ", "ʿindaka", "tu as (à un garçon)"],
              ["عِنْدَكِ", "ʿindaki", "tu as (à une fille)"],
              ["عِنْدَهُ", "ʿindahu", "il a"],
              ["عِنْدَهَا", "ʿindahā", "elle a"],
            ] },
            { t: "texte", md: "Pour demander qui est quelqu'un : **مَنْ هٰذَا؟** (man hādhā ? : qui est-ce ?) → هٰذَا أَبِي (c'est mon père). Pour un nom : **مَا اسْمُهُ؟** (mā smuhu ? : comment s'appelle-t-il ?), **مَا اسْمُهَا؟** (mā smuhā ? : comment s'appelle-t-elle ?). Et « ma mère s'appelle Maryam » se dit **اِسْمُ أُمِّي مَرْيَم** (ism ummī Maryam), mot à mot « nom (de) ma mère : Maryam »." },
            { t: "exemple", titre: "Yasmine présente sa famille", md: "عِنْدِي أُخْتٌ وَأَخ. أُخْتِي صَغِيرَة وَأَخِي كَبِير. اِسْمُ أُمِّي مَرْيَم. عِنْدَهَا أُخْت، هِيَ خَالَتِي.\n\n(ʿindī ukht wa-akh. ukhtī ṣaghīra wa-akhī kabīr. ism ummī Maryam. ʿindahā ukht, hiya khālatī : j'ai une sœur et un frère. Ma sœur est petite et mon frère est grand. Ma mère s'appelle Maryam. Elle a une sœur : c'est ma tante.)" },
          ],
        },
      ],
      bilan: "أَب، أُمّ، أَخ، أُخْت, et deux oncles, عَمّ et خَال ; le possessif se colle au nom : ـي، ـكَ، ـكِ، ـهُ، ـهَا ; la ة devient ت devant lui ; et pour « avoir », on dit « chez moi » : عِنْدِي.",
    },

    "5e-arabe-08-ecole-objets-couleurs": {
      accroche: "Premier jour dans une école d'Amman : sur ta table, un livre, un cahier, un stylo bleu. La professeure montre ton cartable et demande « مَا هٰذَا؟ » (mā hādhā ? : qu'est-ce que c'est ?). À toi de répondre… et de dire de quelle couleur il est !",
      objectifs: [
        "Nommer les personnes, les lieux et les objets de l'école",
        "Nommer les couleurs et les accorder : أَحْمَر / حَمْرَاء",
        "Demander ce que c'est (مَا هٰذَا؟) et dire ce qu'il y a quelque part",
      ],
      sections: [
        {
          titre: "À l'école",
          blocs: [
            { t: "tableau", titre: "Les personnes et les lieux", entetes: ["Arabe", "Lecture", "Sens"], lignes: [
              ["مَدْرَسَة", "madrasa", "école"],
              ["فَصْل", "faṣl", "classe"],
              ["مُعَلِّم / مُعَلِّمَة", "muʿallim / muʿallima", "professeur / professeure"],
              ["تِلْمِيذ / تِلْمِيذَة", "tilmīdh / tilmīdha", "élève (garçon / fille)"],
              ["سَبُّورَة", "sabbūra", "tableau"],
              ["طَاوِلَة", "ṭāwila", "table"],
              ["كُرْسِيّ", "kursī", "chaise"],
            ] },
            { t: "astuce", md: "Lis les chaddas : سَبُّورَة se dit **sab-bū-ra**, avec deux b, et مُعَلِّم **mu-ʿal-lim**, avec deux l. Et les noms en ة sont féminins : مَدْرَسَة, سَبُّورَة, طَاوِلَة." },
          ],
        },
        {
          titre: "Dans mon cartable",
          blocs: [
            { t: "schema", titre: "Les objets du cartable", legende: "Dans la حَقِيبَة (ḥaqība : cartable, sac), on range le كِتَاب (livre), le دَفْتَر (cahier), le قَلَم (stylo, crayon) et la مِسْطَرَة (règle).", svg: `<svg viewBox="0 0 400 200"><rect class="c-rouge trait" x="336" y="44" width="48" height="68" rx="3"/><line class="trait-fin" x1="344" y1="44" x2="344" y2="112"/><rect class="c-blanc trait-fin" x="352" y="58" width="24" height="10" rx="2"/><rect class="c-vert trait" x="258" y="42" width="46" height="72" rx="3"/><circle class="c-blanc trait-fin" cx="262" cy="50" r="2.5"/><circle class="c-blanc trait-fin" cx="262" cy="60" r="2.5"/><circle class="c-blanc trait-fin" cx="262" cy="70" r="2.5"/><circle class="c-blanc trait-fin" cx="262" cy="80" r="2.5"/><circle class="c-blanc trait-fin" cx="262" cy="90" r="2.5"/><circle class="c-blanc trait-fin" cx="262" cy="100" r="2.5"/><circle class="c-blanc trait-fin" cx="262" cy="110" r="2.5"/><rect class="c-blanc trait-fin" x="270" y="56" width="26" height="12" rx="2"/><rect class="c-bleu trait" x="194" y="36" width="12" height="70" rx="3"/><path class="c-blanc trait" d="M194 106 L206 106 L200 122 Z"/><line class="trait-fin" x1="208" y1="40" x2="208" y2="64"/><rect class="c-jaune trait" x="108" y="34" width="24" height="88" rx="2"/><path class="trait-fin" d="M108 42h12M108 50h8M108 58h12M108 66h8M108 74h12M108 82h8M108 90h12M108 98h8M108 106h12M108 114h8"/><path class="trait" d="M28 64 Q28 46 40 46 Q52 46 52 64"/><rect class="c-marron trait" x="12" y="60" width="56" height="58" rx="8"/><path class="trait-fin" d="M12 82 H68"/><rect class="c-jaune trait-fin" x="36" y="78" width="8" height="10" rx="2"/><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="20" text-anchor="middle"><text x="360" y="152">كِتَاب</text><text x="280" y="152">دَفْتَر</text><text x="200" y="152">قَلَم</text><text x="120" y="152">مِسْطَرَة</text><text x="40" y="152">حَقِيبَة</text></g><g class="texte-pigment" text-anchor="middle" font-size="11"><text x="360" y="172">kitāb</text><text x="280" y="172">daftar</text><text x="200" y="172">qalam</text><text x="120" y="172">misṭara</text><text x="40" y="172">ḥaqība</text></g><g class="texte-petit" text-anchor="middle"><text x="360" y="188">livre</text><text x="280" y="188">cahier</text><text x="200" y="188">stylo</text><text x="120" y="188">règle</text><text x="40" y="188">cartable</text></g></svg>` },
            { t: "definition", terme: "La racine", md: "La plupart des mots arabes sont bâtis sur une **racine** de trois consonnes qui porte une idée. La racine **ك ت ب** (k-t-b) parle d'écriture : كِتَاب (kitāb : livre), مَكْتَب (maktab : bureau, le lieu où l'on écrit), مَكْتَبَة (maktaba : bibliothèque, librairie, le lieu des livres)." },
            { t: "verifie", q: "Quelle est la différence entre مَكْتَب (maktab) et مَكْتَبَة (maktaba) ?", choix: ["Aucune : c'est le même mot", "مَكْتَب = bureau ; مَكْتَبَة = bibliothèque", "مَكْتَب = livre ; مَكْتَبَة = livres", "مَكْتَبَة est un bureau de fille"], bonne: 1, explication: "Les deux mots viennent de la racine ك ت ب (écrire). **مَكْتَب** est le bureau, **مَكْتَبَة** la bibliothèque ou la librairie. Ici, la ة ne fait pas un « bureau féminin » : elle forme un autre mot." },
          ],
        },
        {
          titre: "Les couleurs : un moule pour chaque genre",
          blocs: [
            { t: "texte", md: "Couleur se dit **لَوْن** (lawn). Au masculin, les couleurs de base sont toutes faites sur le même moule, **afʿal** : elles commencent par أَ (a-). Leur féminin suit un autre moule, **faʿlāʾ**, et ne prend **pas de ة**." },
            { t: "schema", titre: "Six couleurs, au masculin et au féminin", legende: "Pour un nom masculin, on prend la ligne du haut ; pour un nom féminin, celle du bas : قَلَمٌ أَحْمَر (qalam aḥmar : un stylo rouge), سَيَّارَةٌ حَمْرَاء (sayyāra ḥamrāʾ : une voiture rouge).", svg: `<svg viewBox="0 0 400 230"><rect class="aplat-papier" x="6" y="102" width="388" height="52" rx="8"/><rect class="aplat" x="6" y="170" width="388" height="52" rx="8"/><text class="texte-petit" x="10" y="98">au masculin : modèle afʿal</text><text class="texte-petit" x="10" y="166">au féminin : modèle faʿlāʾ, sans tāʾ marbūṭa</text><rect class="c-rouge trait" x="344" y="12" width="44" height="44" rx="10"/><text class="texte" x="366" y="76" text-anchor="middle">rouge</text><text class="texte-pigment" x="366" y="148" text-anchor="middle" style="font-size:11px">aḥmar</text><text class="texte-pigment" x="366" y="216" text-anchor="middle" style="font-size:11px">ḥamrāʾ</text><rect class="c-bleu trait" x="280" y="12" width="44" height="44" rx="10"/><text class="texte" x="302" y="76" text-anchor="middle">bleu</text><text class="texte-pigment" x="302" y="148" text-anchor="middle" style="font-size:11px">azraq</text><text class="texte-pigment" x="302" y="216" text-anchor="middle" style="font-size:11px">zarqāʾ</text><rect class="c-vert trait" x="216" y="12" width="44" height="44" rx="10"/><text class="texte" x="238" y="76" text-anchor="middle">vert</text><text class="texte-pigment" x="238" y="148" text-anchor="middle" style="font-size:11px">akhḍar</text><text class="texte-pigment" x="238" y="216" text-anchor="middle" style="font-size:11px">khaḍrāʾ</text><rect class="c-jaune trait" x="152" y="12" width="44" height="44" rx="10"/><text class="texte" x="174" y="76" text-anchor="middle">jaune</text><text class="texte-pigment" x="174" y="148" text-anchor="middle" style="font-size:11px">aṣfar</text><text class="texte-pigment" x="174" y="216" text-anchor="middle" style="font-size:11px">ṣafrāʾ</text><rect class="c-noir trait" x="88" y="12" width="44" height="44" rx="10"/><text class="texte" x="110" y="76" text-anchor="middle">noir</text><text class="texte-pigment" x="110" y="148" text-anchor="middle" style="font-size:11px">aswad</text><text class="texte-pigment" x="110" y="216" text-anchor="middle" style="font-size:11px">sawdāʾ</text><rect class="c-blanc trait" x="24" y="12" width="44" height="44" rx="10"/><text class="texte" x="46" y="76" text-anchor="middle">blanc</text><text class="texte-pigment" x="46" y="148" text-anchor="middle" style="font-size:11px">abyaḍ</text><text class="texte-pigment" x="46" y="216" text-anchor="middle" style="font-size:11px">bayḍāʾ</text><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="20" text-anchor="middle"><text x="366" y="132">أَحْمَر</text><text x="366" y="200">حَمْرَاء</text><text x="302" y="132">أَزْرَق</text><text x="302" y="200">زَرْقَاء</text><text x="238" y="132">أَخْضَر</text><text x="238" y="200">خَضْرَاء</text><text x="174" y="132">أَصْفَر</text><text x="174" y="200">صَفْرَاء</text><text x="110" y="132">أَسْوَد</text><text x="110" y="200">سَوْدَاء</text><text x="46" y="132">أَبْيَض</text><text x="46" y="200">بَيْضَاء</text></g></svg>` },
            { t: "attention", md: "« أَحْمَرَة » n'existe pas ! Le féminin d'une couleur ne se forme jamais avec ة : أَحْمَر → **حَمْرَاء**, أَبْيَض → **بَيْضَاء**. Et comme tout adjectif, la couleur vient après le nom : وَرْدَةٌ حَمْرَاء (warda ḥamrāʾ : une rose rouge)." },
            { t: "verifie", q: "Comment dit-on « une voiture blanche » ? (سَيَّارَة est féminin)", choix: ["سَيَّارَةٌ أَبْيَض", "سَيَّارَةٌ أَبْيَضَة", "سَيَّارَةٌ بَيْضَاء", "بَيْضَاءُ سَيَّارَة"], bonne: 2, explication: "Il faut le féminin de أَبْيَض, qui est **بَيْضَاء** (bayḍāʾ), placé après le nom. أَبْيَض est masculin et « أَبْيَضَة » n'existe pas." },
          ],
        },
        {
          titre: "Qu'est-ce que c'est ? Qu'y a-t-il ?",
          blocs: [
            { t: "tableau", titre: "Questions et réponses", entetes: ["Question", "Sens", "Réponse", "Sens"], lignes: [
              ["مَا هٰذَا؟", "Qu'est-ce que c'est ?", "هٰذَا دَفْتَر.", "C'est un cahier."],
              ["مَا لَوْنُ الْقَلَمِ؟", "De quelle couleur est le stylo ?", "الْقَلَمُ أَزْرَق.", "Le stylo est bleu."],
              ["مَا لَوْنُ الْمِسْطَرَةِ؟", "De quelle couleur est la règle ?", "الْمِسْطَرَةُ صَفْرَاء.", "La règle est jaune."],
            ] },
            { t: "propriete", titre: "Dire « il y a » : on commence par le lieu", md: "Pour dire qu'il y a quelque chose quelque part, on commence par le lieu, puis on nomme la chose **sans article** : **فِي الْحَقِيبَةِ كِتَاب** (fī l-ḥaqība kitāb : dans le cartable, il y a un livre). فِي (fī) veut dire « dans ». Toujours pas de verbe !" },
            { t: "exemple", titre: "Dialogue en classe", md: "— مَا هٰذَا؟ (mā hādhā ? : qu'est-ce que c'est ?)\n— هٰذَا قَلَم. (hādhā qalam : c'est un stylo.)\n— مَا لَوْنُ الْقَلَمِ؟ (mā lawn al-qalam ? : de quelle couleur est le stylo ?)\n— الْقَلَمُ أَزْرَق. (al-qalam azraq : le stylo est bleu.)\n— وَمَا فِي الْحَقِيبَةِ؟ (wa-mā fī l-ḥaqība ? : et qu'y a-t-il dans le cartable ?)\n— فِي الْحَقِيبَةِ دَفْتَرٌ أَخْضَر. (fī l-ḥaqība daftar akhḍar : dans le cartable, il y a un cahier vert.)" },
          ],
        },
      ],
      bilan: "كِتَاب، دَفْتَر، قَلَم، مِسْطَرَة dans la حَقِيبَة ; une racine comme ك ت ب fait toute une famille de mots ; les couleurs ont deux moules, أَحْمَر au masculin et حَمْرَاء au féminin, sans ة ; et « il y a » commence par le lieu.",
    },

    "5e-arabe-09-maison-nourriture": {
      accroche: "Ton correspondant marocain t'invite chez lui. Il te fait visiter la maison, puis sa mère t'apporte un plateau : du pain, du fromage, et un thé à la menthe fumant. « مَاذَا تُحِبُّ؟ » (mādhā tuḥibbu ? : qu'est-ce que tu aimes ?). Il est temps de dire ce que tu aimes… et ce que tu veux !",
      objectifs: [
        "Nommer les pièces et les objets de la maison",
        "Nommer des aliments, des boissons et les repas",
        "Dire ce que tu aimes et ce que tu veux : أُحِبُّ، لَا أُحِبُّ، أُرِيدُ",
      ],
      sections: [
        {
          titre: "La visite de la maison",
          blocs: [
            { t: "texte", md: "Une maison se dit **بَيْت** (bayt) et un appartement **شَقَّة** (shaqqa). Le mot **غُرْفَة** (ghurfa) désigne une pièce, et en particulier la chambre. Et tu connais déjà un mot arabe de la maison : le **hammam**, حَمَّام (ḥammām), qui désigne la salle de bain, et aussi le bain public traditionnel." },
            { t: "schema", titre: "Le plan de la maison", legende: "Une chambre (غُرْفَة) avec un lit (سَرِير), une cuisine (مَطْبَخ) avec sa fenêtre (نَافِذَة), une salle de bain (حَمَّام), et une porte (بَاب) qui ouvre sur le jardin (حَدِيقَة).", svg: `<svg viewBox="0 0 400 250"><rect class="aplat" x="306" y="40" width="88" height="196" rx="6"/><circle class="aplat-fort" cx="330" cy="70" r="13"/><circle class="aplat-fort" cx="368" cy="92" r="10"/><circle class="aplat-fort" cx="336" cy="214" r="9"/><rect class="aplat-papier" x="14" y="40" width="286" height="196"/><path class="trait" d="M14 40H180M240 40H300V150M300 190V236H14V40M120 40V236M120 138H300"/><path class="trait-fin" d="M180 37H240M180 43H240M180 37V43M240 37V43"/><path class="trait-fin" d="M300 150L336 150M300 150A40 40 0 0 1 336 168"/><rect class="aplat trait-fin" x="34" y="150" width="66" height="70" rx="4"/><rect class="aplat-papier trait-fin" x="42" y="156" width="50" height="16" rx="4"/><rect class="aplat trait-fin" x="186" y="98" width="48" height="26" rx="4"/><rect class="aplat trait-fin" x="140" y="198" width="80" height="28" rx="12"/><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="20" text-anchor="middle"><text x="67" y="74">غُرْفَة</text><text x="67" y="120">سَرِير</text><text x="210" y="68">مَطْبَخ</text><text x="210" y="170">حَمَّام</text><text x="350" y="130">حَدِيقَة</text><text x="210" y="24">نَافِذَة</text><text x="268" y="182">بَاب</text></g><g class="texte-petit"><text x="67" y="89" text-anchor="middle">chambre</text><text x="67" y="142" text-anchor="middle">lit</text><text x="210" y="83" text-anchor="middle">cuisine</text><text x="210" y="185" text-anchor="middle">salle de bain</text><text x="350" y="145" text-anchor="middle">jardin</text><text x="258" y="22" text-anchor="start">fenêtre</text><text x="268" y="198" text-anchor="middle">porte</text></g></svg>` },
            { t: "propriete", titre: "Dire ce qu'il y a dans une pièce", md: "Comme pour le cartable, on commence par le **lieu**, puis la chose **sans article** : **فِي الْمَطْبَخِ طَاوِلَة** (fī l-maṭbakh ṭāwila : dans la cuisine, il y a une table). Avec l'article, le sens change : الطَّاوِلَةُ فِي الْمَطْبَخ (aṭ-ṭāwila fī l-maṭbakh) = la table est dans la cuisine." },
            { t: "verifie", q: "Que signifie فِي الْغُرْفَةِ سَرِير (fī l-ghurfa sarīr) ?", choix: ["Le lit est une chambre.", "Dans la chambre, il y a un lit.", "La chambre est dans le lit.", "Il y a une chambre dans la cuisine."], bonne: 1, explication: "La phrase commence par le lieu, فِي الْغُرْفَةِ (dans la chambre), et finit par une chose sans article, سَرِير (un lit) : c'est « il y a »." },
          ],
        },
        {
          titre: "À table : aliments, boissons, repas",
          blocs: [
            { t: "tableau", titre: "Ce qu'on mange et ce qu'on boit", entetes: ["Aliments", "Boissons", "Repas"], lignes: [
              ["خُبْز (khubz) : pain", "مَاء (māʾ) : eau", "فَطُور (faṭūr) : petit-déjeuner"],
              ["جُبْن (jubn) : fromage", "حَلِيب (ḥalīb) : lait", "غَدَاء (ghadāʾ) : déjeuner"],
              ["لَحْم (laḥm) : viande", "عَصِير (ʿaṣīr) : jus", "عَشَاء (ʿashāʾ) : dîner"],
              ["سَمَك (samak) : poisson", "شَاي (shāy) : thé", "—"],
              ["أَرُزّ (aruzz) : riz", "قَهْوَة (qahwa) : café", "—"],
              ["تُفَّاحَة (tuffāḥa) : pomme", "—", "—"],
              ["بُرْتُقَال (burtuqāl) : orange", "—", "—"],
            ] },
            { t: "savais-tu", md: "L'orange se dit **بُرْتُقَال** (burtuqāl)… comme le Portugal, d'où venaient des oranges douces très appréciées ! Et le **couscous** (كُسْكُس, kuskus), semoule de blé cuite à la vapeur avec des légumes et de la viande ou du poisson, est un plat emblématique du Maghreb : ses savoir-faire sont inscrits au patrimoine immatériel de l'UNESCO depuis 2020." },
          ],
        },
        {
          titre: "J'aime, je n'aime pas, je veux",
          blocs: [
            { t: "propriete", titre: "Trois verbes pour parler de toi", md: "**أُحِبُّ** (uḥibbu) = j'aime ; **أُرِيدُ** (urīdu) = je veux. Le أُ du début indique « je ».\n• Pour la négation, on place **لَا** (lā), le mot qui veut dire « non », juste **devant le verbe** : **لَا أُحِبُّ** (lā uḥibbu) = je n'aime pas.\n• Après أُحِبُّ, on parle d'une chose en général, avec l'**article** : أُحِبُّ الشَّاي (uḥibbu sh-shāy : j'aime le thé).\n• Après أُرِيدُ, le nom indéfini prend le **tanwin -an** : أُرِيدُ مَاءً (urīdu māʾan : je veux de l'eau)." },
            { t: "tableau", titre: "Des phrases toutes prêtes", entetes: ["Arabe", "Lecture", "Sens"], lignes: [
              ["أُحِبُّ الشَّاي.", "uḥibbu sh-shāy", "J'aime le thé."],
              ["لَا أُحِبُّ السَّمَك.", "lā uḥibbu s-samak", "Je n'aime pas le poisson."],
              ["أُحِبُّ الْخُبْزَ وَالْجُبْن.", "uḥibbu l-khubz wa-l-jubn", "J'aime le pain et le fromage."],
              ["أُرِيدُ خُبْزًا وَجُبْنًا.", "urīdu khubzan wa-jubnan", "Je veux du pain et du fromage."],
            ] },
            { t: "attention", md: "Révise les lettres solaires du chapitre 2 ! Dans **الشَّاي** (ash-shāy : le thé) et **السَّمَك** (as-samak : le poisson), le ل de l'article ne se prononce pas, car ش et س sont solaires. Dans الْخُبْز (al-khubz) et الْجُبْن (al-jubn), on l'entend. Après un mot qui finit par une voyelle, l'article perd son a : uḥibbu sh-shāy." },
            { t: "verifie", q: "Comment dit-on « Je n'aime pas le lait » ?", choix: ["لَا أُحِبُّ الْحَلِيب.", "أُحِبُّ الْحَلِيب.", "أُرِيدُ حَلِيبًا.", "الْحَلِيبُ لَا."], bonne: 0, explication: "**لَا** se place juste devant le verbe : لَا أُحِبُّ الْحَلِيب (lā uḥibbu l-ḥalīb). أُحِبُّ الْحَلِيب veut dire « j'aime le lait » et أُرِيدُ حَلِيبًا « je veux du lait »." },
          ],
        },
        {
          titre: "Commander au café",
          blocs: [
            { t: "etapes", titre: "Commander poliment, en trois temps", items: [
              { titre: "Saluer", md: "مَرْحَبًا! (marḥaban ! : bonjour !)" },
              { titre: "Demander", md: "أُرِيدُ شَايًا، مِنْ فَضْلِكَ. (urīdu shāyan, min faḍlika : je veux un thé, s'il te plaît.) À une serveuse : مِنْ فَضْلِكِ (min faḍliki)." },
              { titre: "Remercier", md: "شُكْرًا! (shukran ! : merci !) — عَفْوًا. (ʿafwan : de rien.)" },
            ] },
            { t: "exemple", titre: "Ce que j'aime", md: "— مَاذَا تُحِبُّ؟ (mādhā tuḥibbu ? : qu'est-ce que tu aimes ?)\n— أُحِبُّ الْكُسْكُس وَالشَّاي، لٰكِنْ لَا أُحِبُّ السَّمَك. (uḥibbu l-kuskus wa-sh-shāy, lākin lā uḥibbu s-samak : j'aime le couscous et le thé, mais je n'aime pas le poisson.)\n\nلٰكِنْ (lākin) veut dire « mais ». Comme dans هٰذَا, le petit alif vertical fait entendre un ā long." },
            { t: "verifie", q: "Au café, tu commandes شَايٌ بِالنَّعْنَاع (shāy bi-n-naʿnāʿ). Que vas-tu boire ?", choix: ["Un café au lait", "Un thé à la menthe", "Un jus d'orange", "Un verre d'eau"], bonne: 1, explication: "**شَاي** (shāy) = thé, **بِ** (bi) = avec, **النَّعْنَاع** (an-naʿnāʿ) = la menthe. Le thé vert à la menthe, souvent très sucré, est la boisson de l'accueil au Maghreb." },
          ],
        },
      ],
      bilan: "بَيْت، غُرْفَة، مَطْبَخ، حَمَّام pour la maison ; خُبْز، جُبْن، مَاء، شَاي pour la table ; أُحِبُّ + article pour ce que tu aimes, لَا devant le verbe pour le contraire, et أُرِيدُ… مِنْ فَضْلِكَ pour commander poliment.",
    },

    "5e-arabe-10-monde-arabe": {
      accroche: "Quand le soleil se lève sur Mascate, au bord de la mer d'Oman, il fait encore nuit à Rabat, au bord de l'Atlantique. Entre les deux : des déserts, des montagnes, le Nil, des villes millénaires… et une même langue écrite, comprise d'un bout à l'autre.",
      objectifs: [
        "Situer les pays arabes, leurs grandes régions et leurs capitales",
        "Connaître la place de la langue arabe : fuṣḥā, dialectes, calligraphie, mots passés au français",
        "Connaître des fêtes et traditions du monde arabe comme faits culturels",
      ],
      sections: [
        {
          titre: "Vingt-deux pays, de l'Atlantique au Golfe",
          blocs: [
            { t: "texte", md: "Le **monde arabe**, الْعَالَمُ الْعَرَبِيّ (al-ʿālam al-ʿarabī), s'étend de l'océan **Atlantique** jusqu'au **Golfe**, sur deux continents : l'Afrique et l'Asie. La **Ligue arabe**, fondée en **1945 au Caire**, où se trouve toujours son siège, rassemble **22 membres**, de la Mauritanie et du Maroc jusqu'à l'Irak et Oman, en passant par les Comores et Djibouti." },
            { t: "carte", fond: "monde", titre: "Les 22 membres de la Ligue arabe", cadre: [-20, -16, 62, 40], zones: ["MA", "DZ", "TN", "LY", "EG", "MR", "SD", "SO", "DJ", "KM", "SA", "YE", "OM", "AE", "QA", "BH", "KW", "IQ", "SY", "LB", "JO", "PS"], reperes: [{ nom: "Rabat", lat: 34.0209, lon: -6.8416 }, { nom: "Alger", lat: 36.7538, lon: 3.0588 }, { nom: "Tunis", lat: 36.8065, lon: 10.1815 }, { nom: "Le Caire", lat: 30.0444, lon: 31.2357 }, { nom: "Beyrouth", lat: 33.8938, lon: 35.5018 }, { nom: "Bagdad", lat: 33.3152, lon: 44.3661 }, { nom: "Riyad", lat: 24.7136, lon: 46.6753 }], legende: "Les Comores, archipel de l'océan Indien, sont tout au sud du cadre. Le Sahara occidental, territoire dont le statut n'est pas encore réglé, n'est pas colorié." },
            { t: "verifie", q: "Combien de pays sont membres de la Ligue arabe ?", choix: ["12", "22", "35", "50"], bonne: 1, explication: "La **Ligue arabe** compte **22 membres**. Elle a été fondée en 1945 au Caire, où se trouve toujours son siège." },
          ],
        },
        {
          titre: "Maghreb, Machrek et péninsule Arabique",
          blocs: [
            { t: "definition", terme: "Maghreb et Machrek", md: "**مَغْرِب** (maghrib) signifie « le couchant » : l'**ouest**, là où le soleil se couche. **مَشْرِق** (mashriq) signifie « le levant » : l'**est**, là où il se lève. En arabe, الْمَغْرِب (al-Maghrib) désigne aussi le Maroc." },
            { t: "tableau", titre: "Trois grands ensembles", entetes: ["Région", "Quelques pays", "Capitales"], lignes: [
              ["**Maghreb** (ouest)", "Maroc, Algérie, Tunisie, Libye, Mauritanie", "Rabat, Alger, Tunis, Tripoli, Nouakchott"],
              ["**Machrek** (est)", "Égypte, Liban, Syrie, Jordanie, Palestine, Irak", "Le Caire, Beyrouth, Damas, Amman, Bagdad"],
              ["**Péninsule Arabique**", "Arabie saoudite, Yémen, Oman, Émirats arabes unis, Qatar, Koweït, Bahreïn", "Riyad, Sanaa, Mascate, Abou Dabi, Doha"],
            ] },
            { t: "texte", md: "L'**Égypte**, avec plus de 100 millions d'habitants installés surtout le long du Nil, est le pays arabe **le plus peuplé**. L'**Algérie** est le **plus vaste**. D'ouest en est, le long de la Méditerranée, on rencontre Rabat (sur l'Atlantique), Alger, Tunis, Tripoli, puis Le Caire, sur le Nil." },
            { t: "attention", md: "La capitale du Maroc est **Rabat**, pas Casablanca ! Casablanca, الدَّارُ الْبَيْضَاء (ad-dār al-bayḍāʾ : « la maison blanche »), est la plus grande ville et le premier port du pays." },
            { t: "verifie", q: "Que signifie le mot مَغْرِب (maghrib), qui a donné « Maghreb » ?", choix: ["le levant : l'est", "le couchant : l'ouest", "le désert", "la mer"], bonne: 1, explication: "**مَغْرِب** vient d'un verbe qui veut dire « se coucher », pour le soleil : c'est l'ouest. مَشْرِق (mashriq), le Machrek, est le levant, l'est." },
          ],
        },
        {
          titre: "Une langue, des parlers, un art",
          blocs: [
            { t: "texte", md: "L'arabe est parlé par plus de **400 millions** de personnes. L'**arabe littéral**, **الْفُصْحَى** (al-fuṣḥā), est la langue commune de l'école, des livres et des journaux télévisés : il est compris dans tout le monde arabe. À la maison et dans la rue, chacun parle aussi un **dialecte** : la darija au Maroc, l'arabe égyptien, le libanais… qui peuvent beaucoup différer d'un pays à l'autre. D'autres langues sont parlées dans ces pays, comme l'**amazigh** (berbère) au Maghreb ou le **kurde** en Irak." },
            { t: "frise", titre: "Quelques dates de la langue et de la culture arabes", evenements: [
              { date: 820, label: "Al-Khwārizmī écrit à Bagdad son livre d'« al-jabr »", detail: "Vers 820, ce mathématicien donne son nom à l'« algorithme » et le titre de son livre à l'« algèbre »." },
              { date: 1945, label: "Fondation de la Ligue arabe", detail: "Le 22 mars 1945, au Caire." },
              { date: 1973, label: "L'arabe, langue officielle de l'ONU", detail: "Le 18 décembre 1973. L'arabe rejoint l'anglais, le chinois, l'espagnol, le français et le russe. Le 18 décembre est devenu la Journée mondiale de la langue arabe." },
              { date: 2020, label: "Le couscous au patrimoine de l'UNESCO", detail: "Ses savoir-faire sont inscrits au patrimoine culturel immatériel, à la demande commune de l'Algérie, de la Mauritanie, du Maroc et de la Tunisie." },
            ] },
            { t: "savais-tu", md: "La **calligraphie**, l'art de la belle écriture, est un art majeur du monde arabe. Le **koufique**, nommé d'après la ville de Koufa, en Irak, est anguleux et géométrique : c'est l'un des styles les plus anciens. Le **naskh**, arrondi et très lisible, est le plus utilisé dans les livres imprimés." },
          ],
        },
        {
          titre: "Des mots arabes dans ta langue",
          blocs: [
            { t: "texte", md: "Au Moyen Âge, avec le commerce et les sciences, des centaines de mots arabes sont entrés en français, souvent en passant par l'italien ou l'espagnol. Tu en utilises tous les jours sans le savoir !" },
            { t: "schema", titre: "Du mot arabe au mot français", legende: "صِفْر (ṣifr) veut dire « vide » ; جُبَّة (jubba) est une longue tunique ; مَخَازِن (makhāzin) désigne des entrepôts. Et la liste continue : girafe, matelas, sirop…", svg: `<svg viewBox="0 0 400 262"><g class="texte-petit" text-anchor="middle"><text x="346" y="16">mot arabe</text><text x="90" y="16">mot français</text></g><text class="texte-pigment" x="298" y="40" text-anchor="end" style="font-size:11px">sukkar</text><line class="trait-fin" x1="232" y1="36" x2="160" y2="36" marker-end="url(#fl)"/><text class="texte-main" x="90" y="42" text-anchor="middle">sucre</text><text class="texte-pigment" x="298" y="71" text-anchor="end" style="font-size:11px">qahwa</text><line class="trait-fin" x1="232" y1="67" x2="160" y2="67" marker-end="url(#fl)"/><text class="texte-main" x="90" y="73" text-anchor="middle">café</text><text class="texte-pigment" x="298" y="102" text-anchor="end" style="font-size:11px">ṣifr</text><line class="trait-fin" x1="232" y1="98" x2="160" y2="98" marker-end="url(#fl)"/><text class="texte-main" x="90" y="104" text-anchor="middle">chiffre, zéro</text><text class="texte-pigment" x="298" y="133" text-anchor="end" style="font-size:11px">jubba</text><line class="trait-fin" x1="232" y1="129" x2="160" y2="129" marker-end="url(#fl)"/><text class="texte-main" x="90" y="135" text-anchor="middle">jupe</text><text class="texte-pigment" x="298" y="164" text-anchor="end" style="font-size:11px">quṭn</text><line class="trait-fin" x1="232" y1="160" x2="160" y2="160" marker-end="url(#fl)"/><text class="texte-main" x="90" y="166" text-anchor="middle">coton</text><text class="texte-pigment" x="298" y="195" text-anchor="end" style="font-size:11px">makhāzin</text><line class="trait-fin" x1="232" y1="191" x2="160" y2="191" marker-end="url(#fl)"/><text class="texte-main" x="90" y="197" text-anchor="middle">magasin</text><text class="texte-pigment" x="298" y="226" text-anchor="end" style="font-size:11px">al-jabr</text><line class="trait-fin" x1="232" y1="222" x2="160" y2="222" marker-end="url(#fl)"/><text class="texte-main" x="90" y="228" text-anchor="middle">algèbre</text><g style="fill:var(--co-encre,var(--encre,#2b2520));font-family:'Noto Naskh Arabic','Amiri','Geeza Pro','Traditional Arabic',serif" font-size="20" text-anchor="middle"><text x="346" y="44">سُكَّر</text><text x="346" y="75">قَهْوَة</text><text x="346" y="106">صِفْر</text><text x="346" y="137">جُبَّة</text><text x="346" y="168">قُطْن</text><text x="346" y="199">مَخَازِن</text><text x="346" y="230">الْجَبْر</text></g></svg>` },
            { t: "exemple", titre: "D'un livre de Bagdad à ton cours de maths", md: "Vers 820, le mathématicien **al-Khwārizmī** écrit à Bagdad un livre sur la façon de résoudre des équations. Le mot **الْجَبْر** (al-jabr) y désigne une opération qui « remet en place » les termes d'une équation : il est devenu « **algèbre** ». Le nom du savant, lui, a donné « **algorithme** »." },
          ],
        },
        {
          titre: "Des fêtes au fil de l'année",
          blocs: [
            { t: "tableau", titre: "Quelques fêtes du monde arabe", entetes: ["Fête", "Ce qu'elle célèbre", "Quand ?"], lignes: [
              ["**Aïd al-Fitr**", "la fin du jeûne du mois de ramadan", "date lunaire, qui avance chaque année"],
              ["**Aïd al-Adha**", "la fête du sacrifice", "date lunaire, qui avance chaque année"],
              ["**Noël copte**", "Noël des chrétiens d'Égypte", "le 7 janvier"],
              ["**Yennayer**", "le Nouvel An amazigh, fêté au Maghreb", "à la mi-janvier"],
            ] },
            { t: "propriete", titre: "Pourquoi l'Aïd change de date", md: "Les deux Aïd suivent le **calendrier hégirien**, qui est **lunaire** : ses douze mois suivent les phases de la Lune, et son année compte environ **354 jours**, soit **11 de moins** que notre année solaire. Dans le calendrier utilisé en France, ces fêtes **avancent donc d'environ 11 jours chaque année**." },
            { t: "verifie", q: "Pourquoi la date de l'Aïd al-Fitr change-t-elle chaque année dans notre calendrier ?", choix: ["Chaque famille choisit sa date", "Elle suit un calendrier lunaire, plus court d'environ 11 jours", "Elle a lieu à chaque équinoxe", "Elle suit le calendrier chinois"], bonne: 1, explication: "L'Aïd al-Fitr suit le **calendrier hégirien**, lunaire : son année compte environ 354 jours. La fête avance donc d'environ 11 jours chaque année dans notre calendrier." },
          ],
        },
      ],
      bilan: "Vingt-deux pays du Maghreb au Golfe, une langue littérale commune et mille dialectes, une calligraphie admirée, des mots comme algèbre, sucre ou café… et des fêtes qui suivent le Soleil ou la Lune : le monde arabe est un monde pluriel.",
    },
  },
};
