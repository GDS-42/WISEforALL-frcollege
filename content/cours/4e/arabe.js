// ÉCLORE — Cours illustrés, 4e Arabe (LV2, deuxième année, niveau A1+ vers A2). Arabe standard moderne (fuṣḥā).
// Schéma : docs/COURS.md. Validation : node tools/validate-cours.mjs content/cours/4e/arabe.js
// Translittération identique au module de questions (content/4e/arabe.js) : ā ī ū, ʿ (ع), ʾ (hamza), ḥ, kh, gh, q,
// ṣ ḍ ṭ ẓ, sh, th, dh, j ; article al-, assimilé devant les lettres solaires.
// Dans les schémas, le texte arabe est placé dans un groupe <g> qui lui donne sa police et la couleur de l'encre.

const AR = `fill="var(--encre)" font-family="Noto Naskh Arabic, Amiri, Geeza Pro, Traditional Arabic, Segoe UI, serif"`;

// ——— Chapitre 1 : tableau de l'accompli (suffixes en rouge) ———
const SVG_ACCOMPLI = `<svg viewBox="0 0 400 290"><rect class="aplat" x="10" y="10" width="380" height="36" rx="8"/><text class="texte" x="55" y="33" text-anchor="middle">personne</text><text class="texte" x="148" y="33" text-anchor="middle">pronom</text><text class="texte" x="255" y="33" text-anchor="middle">accompli</text><text class="texte" x="350" y="33" text-anchor="middle">lecture</text><line class="trait-fin" x1="10" y1="100" x2="390" y2="100"/><line class="trait-fin" x1="10" y1="136" x2="390" y2="136"/><line class="trait-fin" x1="10" y1="172" x2="390" y2="172"/><line class="trait-fin" x1="10" y1="208" x2="390" y2="208"/><line class="trait-fin" x1="10" y1="244" x2="390" y2="244"/><text class="texte" x="55" y="86" text-anchor="middle">je</text><text class="texte" x="55" y="122" text-anchor="middle">tu (garçon)</text><text class="texte" x="55" y="158" text-anchor="middle">tu (fille)</text><text class="texte" x="55" y="194" text-anchor="middle">il</text><text class="texte" x="55" y="230" text-anchor="middle">elle</text><text class="texte" x="55" y="266" text-anchor="middle">nous</text><g ${AR} font-size="21"><text x="148" y="88" text-anchor="middle">أَنا</text><text x="148" y="124" text-anchor="middle">أَنْتَ</text><text x="148" y="160" text-anchor="middle">أَنْتِ</text><text x="148" y="196" text-anchor="middle">هُوَ</text><text x="148" y="232" text-anchor="middle">هِيَ</text><text x="148" y="268" text-anchor="middle">نَحْنُ</text><text x="255" y="88" text-anchor="middle">كَتَبْ<tspan class="c-rouge">تُ</tspan></text><text x="255" y="124" text-anchor="middle">كَتَبْ<tspan class="c-rouge">تَ</tspan></text><text x="255" y="160" text-anchor="middle">كَتَبْ<tspan class="c-rouge">تِ</tspan></text><text x="255" y="196" text-anchor="middle">كَتَبَ</text><text x="255" y="232" text-anchor="middle">كَتَبَ<tspan class="c-rouge">تْ</tspan></text><text x="255" y="268" text-anchor="middle">كَتَبْ<tspan class="c-rouge">نا</tspan></text></g><text class="texte" x="350" y="86" text-anchor="middle">katab<tspan class="c-rouge">tu</tspan></text><text class="texte" x="350" y="122" text-anchor="middle">katab<tspan class="c-rouge">ta</tspan></text><text class="texte" x="350" y="158" text-anchor="middle">katab<tspan class="c-rouge">ti</tspan></text><text class="texte" x="350" y="194" text-anchor="middle">katab<tspan class="c-rouge">a</tspan></text><text class="texte" x="350" y="230" text-anchor="middle">katab<tspan class="c-rouge">at</tspan></text><text class="texte" x="350" y="266" text-anchor="middle">katab<tspan class="c-rouge">nā</tspan></text></svg>`;

// ——— Chapitre 2 : tableau de l'inaccompli (préfixes en rouge) ———
const SVG_INACCOMPLI = `<svg viewBox="0 0 400 290"><rect class="aplat" x="10" y="10" width="380" height="36" rx="8"/><text class="texte" x="55" y="33" text-anchor="middle">personne</text><text class="texte" x="148" y="33" text-anchor="middle">pronom</text><text class="texte" x="255" y="33" text-anchor="middle">inaccompli</text><text class="texte" x="350" y="33" text-anchor="middle">lecture</text><line class="trait-fin" x1="10" y1="100" x2="390" y2="100"/><line class="trait-fin" x1="10" y1="136" x2="390" y2="136"/><line class="trait-fin" x1="10" y1="172" x2="390" y2="172"/><line class="trait-fin" x1="10" y1="208" x2="390" y2="208"/><line class="trait-fin" x1="10" y1="244" x2="390" y2="244"/><text class="texte" x="55" y="86" text-anchor="middle">je</text><text class="texte" x="55" y="122" text-anchor="middle">tu (garçon)</text><text class="texte" x="55" y="158" text-anchor="middle">tu (fille)</text><text class="texte" x="55" y="194" text-anchor="middle">il</text><text class="texte" x="55" y="230" text-anchor="middle">elle</text><text class="texte" x="55" y="266" text-anchor="middle">nous</text><g ${AR} font-size="21"><text x="148" y="88" text-anchor="middle">أَنا</text><text x="148" y="124" text-anchor="middle">أَنْتَ</text><text x="148" y="160" text-anchor="middle">أَنْتِ</text><text x="148" y="196" text-anchor="middle">هُوَ</text><text x="148" y="232" text-anchor="middle">هِيَ</text><text x="148" y="268" text-anchor="middle">نَحْنُ</text><text x="255" y="88" text-anchor="middle"><tspan class="c-rouge">أَ</tspan>كْتُبُ</text><text x="255" y="124" text-anchor="middle"><tspan class="c-rouge">تَ</tspan>كْتُبُ</text><text x="255" y="160" text-anchor="middle"><tspan class="c-rouge">تَ</tspan>كْتُبِ<tspan class="c-rouge">ينَ</tspan></text><text x="255" y="196" text-anchor="middle"><tspan class="c-rouge">يَ</tspan>كْتُبُ</text><text x="255" y="232" text-anchor="middle"><tspan class="c-rouge">تَ</tspan>كْتُبُ</text><text x="255" y="268" text-anchor="middle"><tspan class="c-rouge">نَ</tspan>كْتُبُ</text></g><text class="texte" x="350" y="86" text-anchor="middle"><tspan class="c-rouge">a</tspan>ktubu</text><text class="texte" x="350" y="122" text-anchor="middle"><tspan class="c-rouge">ta</tspan>ktubu</text><text class="texte" x="350" y="158" text-anchor="middle"><tspan class="c-rouge">ta</tspan>ktub<tspan class="c-rouge">īna</tspan></text><text class="texte" x="350" y="194" text-anchor="middle"><tspan class="c-rouge">ya</tspan>ktubu</text><text class="texte" x="350" y="230" text-anchor="middle"><tspan class="c-rouge">ta</tspan>ktubu</text><text class="texte" x="350" y="266" text-anchor="middle"><tspan class="c-rouge">na</tspan>ktubu</text></svg>`;

// ——— Chapitre 2 : la place de la marque de personne, au passé et au présent ———
const SVG_FIN_DEBUT = `<svg viewBox="0 0 400 250"><rect class="aplat" x="12" y="12" width="182" height="226" rx="10"/><rect class="aplat" x="206" y="12" width="182" height="226" rx="10"/><text class="texte" x="103" y="36" text-anchor="middle">PASSÉ (accompli)</text><text class="texte" x="297" y="36" text-anchor="middle">PRÉSENT (inaccompli)</text><text class="texte-petit" x="103" y="54" text-anchor="middle">marque à la fin : à gauche</text><text class="texte-petit" x="297" y="54" text-anchor="middle">marque au début : à droite</text><g ${AR} font-size="26"><text x="103" y="104" text-anchor="middle">ذَهَبْ<tspan class="c-rouge">تُ</tspan></text><text x="297" y="104" text-anchor="middle"><tspan class="c-rouge">أَ</tspan>ذْهَبُ</text><text x="103" y="186" text-anchor="middle">ذَهَبْ<tspan class="c-rouge">نا</tspan></text><text x="297" y="186" text-anchor="middle"><tspan class="c-rouge">نَ</tspan>ذْهَبُ</text></g><text class="texte" x="103" y="128" text-anchor="middle">dhahab<tspan class="c-rouge">tu</tspan></text><text class="texte-petit" x="103" y="146" text-anchor="middle">je suis allé(e)</text><text class="texte" x="297" y="128" text-anchor="middle"><tspan class="c-rouge">a</tspan>dhhabu</text><text class="texte-petit" x="297" y="146" text-anchor="middle">je vais</text><text class="texte" x="103" y="210" text-anchor="middle">dhahab<tspan class="c-rouge">nā</tspan></text><text class="texte-petit" x="103" y="228" text-anchor="middle">nous sommes allé(e)s</text><text class="texte" x="297" y="210" text-anchor="middle"><tspan class="c-rouge">na</tspan>dhhabu</text><text class="texte-petit" x="297" y="228" text-anchor="middle">nous allons</text></svg>`;

// ——— Chapitre 3 : la négation selon le temps ———
const SVG_NEGATION = `<svg viewBox="0 0 400 300"><line class="trait" x1="15" y1="30" x2="385" y2="30" marker-end="url(#fl)"/><line class="trait" x1="261" y1="22" x2="261" y2="38"/><text class="texte" x="137" y="20" text-anchor="middle">passé</text><text class="texte" x="326" y="20" text-anchor="middle">présent</text><rect class="aplat" x="15" y="46" width="118" height="120" rx="8"/><rect class="aplat" x="141" y="46" width="118" height="120" rx="8"/><rect class="aplat" x="267" y="46" width="118" height="120" rx="8"/><rect class="aplat-papier trait-fin" x="15" y="180" width="370" height="108" rx="8"/><g ${AR} font-size="28"><text class="c-bleu" x="74" y="84" text-anchor="middle">ما</text><text class="c-bleu" x="200" y="84" text-anchor="middle">لَمْ</text><text class="c-bleu" x="326" y="84" text-anchor="middle">لا</text><text class="c-bleu" x="200" y="210" text-anchor="middle">لَيْسَ</text></g><text class="texte-petit" x="74" y="104" text-anchor="middle">+ accompli</text><text class="texte-petit" x="200" y="104" text-anchor="middle">+ apocopé</text><text class="texte-petit" x="326" y="104" text-anchor="middle">+ inaccompli</text><g ${AR} font-size="19"><text x="74" y="134" text-anchor="middle" direction="rtl">ما كَتَبْتُ</text><text x="200" y="134" text-anchor="middle" direction="rtl">لَمْ أَكْتُبْ</text><text x="326" y="134" text-anchor="middle" direction="rtl">لا أَكْتُبُ</text><text x="105" y="264" text-anchor="middle" direction="rtl">هُوَ طَويلٌ</text><text x="292" y="264" text-anchor="middle" direction="rtl">هُوَ لَيْسَ طَويلًا</text></g><text class="texte-petit" x="74" y="155" text-anchor="middle">je n'ai pas écrit</text><text class="texte-petit" x="200" y="155" text-anchor="middle">je n'ai pas écrit</text><text class="texte-petit" x="326" y="155" text-anchor="middle">je n'écris pas</text><text class="texte-petit" x="200" y="238" text-anchor="middle">phrase sans verbe : l'attribut passe à l'accusatif</text><line class="trait-fin" x1="170" y1="258" x2="222" y2="258" marker-end="url(#fl-p)"/><text class="texte-petit" x="105" y="282" text-anchor="middle">il est grand</text><text class="texte-petit" x="292" y="282" text-anchor="middle">il n'est pas grand</text></svg>`;

// ——— Chapitre 4 : l'horloge ———
const SVG_HORLOGE = `<svg viewBox="0 0 400 300"><circle class="aplat" cx="200" cy="130" r="88"/><circle class="trait" cx="200" cy="130" r="88" fill="none"/><line class="trait" x1="200" y1="46" x2="200" y2="56"/><line class="trait" x1="284" y1="130" x2="274" y2="130"/><line class="trait" x1="200" y1="214" x2="200" y2="204"/><line class="trait" x1="116" y1="130" x2="126" y2="130"/><line class="trait-fin" x1="242" y1="57.3" x2="239" y2="62.5"/><line class="trait-fin" x1="272.7" y1="88" x2="267.5" y2="91"/><line class="trait-fin" x1="272.7" y1="172" x2="267.5" y2="169"/><line class="trait-fin" x1="242" y1="202.7" x2="239" y2="197.5"/><line class="trait-fin" x1="158" y1="202.7" x2="161" y2="197.5"/><line class="trait-fin" x1="127.3" y1="172" x2="132.5" y2="169"/><line class="trait-fin" x1="127.3" y1="88" x2="132.5" y2="91"/><line class="trait-fin" x1="158" y1="57.3" x2="161" y2="62.5"/><text class="texte" x="200" y="74" text-anchor="middle">12</text><text class="texte" x="262" y="135" text-anchor="middle">3</text><text class="texte" x="200" y="196" text-anchor="middle">6</text><text class="texte" x="138" y="135" text-anchor="middle">9</text><line class="trait" x1="200" y1="130" x2="168" y2="162" stroke-width="4"/><line class="trait" x1="200" y1="130" x2="200" y2="178"/><circle cx="200" cy="130" r="4" fill="var(--encre)"/><circle class="c-rouge" cx="284" cy="130" r="5"/><circle class="c-rouge" cx="200" cy="214" r="5"/><circle class="c-rouge" cx="116" cy="130" r="5"/><g ${AR} font-size="20"><text x="343" y="128" text-anchor="middle">والربع</text><text x="57" y="128" text-anchor="middle" direction="rtl">إلا ربعًا</text><text x="296" y="230" text-anchor="middle">والنصف</text><text x="200" y="278" text-anchor="middle" direction="rtl">الساعة السابعة والنصف</text></g><text class="texte-petit" x="343" y="148" text-anchor="middle">et quart (:15)</text><text class="texte-petit" x="57" y="148" text-anchor="middle">moins le quart (:45)</text><text class="texte-petit" x="296" y="248" text-anchor="middle">et demie (:30)</text><line class="pointille" x1="211" y1="218" x2="260" y2="228"/><text class="texte-main" x="200" y="297" text-anchor="middle">= il est 7 h 30</text></svg>`;

// ——— Chapitre 5 : où est la balle ? (les prépositions) ———
const SVG_PREPOSITIONS = `<svg viewBox="0 0 400 300"><g class="trait-fin"><rect x="22" y="40" width="54" height="40"/><line x1="122" y1="70" x2="182" y2="70"/><line x1="128" y1="70" x2="128" y2="94"/><line x1="176" y1="70" x2="176" y2="94"/><line x1="222" y1="54" x2="282" y2="54"/><line x1="228" y1="54" x2="228" y2="94"/><line x1="276" y1="54" x2="276" y2="94"/><rect x="314" y="40" width="54" height="40"/><rect x="40" y="180" width="54" height="40"/><rect x="168" y="186" width="44" height="36"/><rect x="290" y="186" width="34" height="34"/><rect x="352" y="186" width="34" height="34"/></g><circle class="c-rouge" cx="49" cy="66" r="9"/><circle class="c-rouge" cx="152" cy="60" r="9"/><circle class="c-rouge" cx="252" cy="84" r="9"/><circle class="c-rouge" cx="341" cy="40" r="9"/><rect class="aplat-papier trait-fin" x="314" y="40" width="54" height="40"/><circle class="c-rouge trait-fin" cx="56" cy="214" r="11"/><circle class="c-rouge" cx="230" cy="213" r="9"/><circle class="c-rouge" cx="338" cy="211" r="9"/><g ${AR} font-size="22"><text x="49" y="122" text-anchor="middle">في</text><text x="152" y="122" text-anchor="middle">على</text><text x="252" y="122" text-anchor="middle">تحت</text><text x="341" y="122" text-anchor="middle">وراء</text><text x="67" y="262" text-anchor="middle">أمام</text><text x="200" y="262" text-anchor="middle">بجانب</text><text x="338" y="262" text-anchor="middle">بين</text></g><text class="texte-petit" x="49" y="142" text-anchor="middle">fī : dans</text><text class="texte-petit" x="152" y="142" text-anchor="middle">ʿalā : sur</text><text class="texte-petit" x="252" y="142" text-anchor="middle">taḥta : sous</text><text class="texte-petit" x="341" y="142" text-anchor="middle">warāʾa : derrière</text><text class="texte-petit" x="67" y="282" text-anchor="middle">amāma : devant</text><text class="texte-petit" x="200" y="282" text-anchor="middle">bi-jānib : à côté de</text><text class="texte-petit" x="338" y="282" text-anchor="middle">bayna : entre</text><line class="pointille" x1="10" y1="160" x2="390" y2="160"/></svg>`;

// ——— Chapitre 5 : plan du quartier et itinéraire ———
const SVG_PLAN = `<svg viewBox="0 0 400 300"><rect class="aplat-papier" x="0" y="128" width="400" height="44"/><rect class="aplat-papier" x="100" y="172" width="44" height="128"/><line class="trait-fin" x1="0" y1="128" x2="400" y2="128"/><line class="trait-fin" x1="0" y1="172" x2="100" y2="172"/><line class="trait-fin" x1="144" y1="172" x2="400" y2="172"/><line class="trait-fin" x1="100" y1="172" x2="100" y2="300"/><line class="trait-fin" x1="144" y1="172" x2="144" y2="300"/><g class="trait-fin"><rect class="aplat" x="226" y="14" width="88" height="46" rx="4"/><rect class="aplat" x="150" y="70" width="72" height="50" rx="4"/><rect class="aplat-fort" x="230" y="70" width="80" height="50" rx="4" opacity=".35"/><rect class="aplat" x="318" y="70" width="70" height="50" rx="4"/><rect class="aplat" x="10" y="70" width="80" height="50" rx="4"/><rect class="c-vert" x="226" y="182" width="96" height="56" rx="10" opacity=".45"/><rect class="aplat" x="154" y="182" width="64" height="56" rx="4"/></g><g ${AR} font-size="17"><text x="270" y="43" text-anchor="middle">المتحف</text><text x="186" y="101" text-anchor="middle">المطعم</text><text x="270" y="101" text-anchor="middle">المكتبة</text><text x="353" y="101" text-anchor="middle">البنك</text><text x="50" y="101" text-anchor="middle">المدرسة</text><text x="274" y="214" text-anchor="middle">الحديقة</text><text x="186" y="214" text-anchor="middle">الصيدلية</text><text x="60" y="262" text-anchor="middle" direction="rtl">أنتَ هنا</text></g><circle cx="122" cy="282" r="6" fill="var(--pigment)"/><path class="pointille" d="M122 274 L122 150 L262 150" fill="none" stroke-width="2.4"/><line class="trait" x1="250" y1="150" x2="266" y2="150" marker-end="url(#fl-p)"/><text class="texte-petit" x="60" y="280" text-anchor="middle">tu es ici</text><text class="texte-petit" x="94" y="200" text-anchor="end">1. tout droit</text><text class="texte-petit" x="200" y="164" text-anchor="middle">2. à droite</text><text class="texte-petit" x="354" y="160" text-anchor="middle">rue (الشارع)</text></svg>`;

// ——— Chapitre 6 : un, deux, plusieurs ———
const SVG_NOMBRE = `<svg viewBox="0 0 400 210"><g class="trait"><rect class="aplat-fort" x="40" y="30" width="26" height="40" rx="2" opacity=".55"/><rect class="aplat-fort" x="150" y="30" width="26" height="40" rx="2" opacity=".55"/><rect class="aplat-fort" x="184" y="30" width="26" height="40" rx="2" opacity=".55"/><rect class="aplat-fort" x="270" y="30" width="26" height="40" rx="2" opacity=".55"/><rect class="aplat-fort" x="302" y="30" width="26" height="40" rx="2" opacity=".55"/><rect class="aplat-fort" x="334" y="30" width="26" height="40" rx="2" opacity=".55"/></g><text class="texte" x="378" y="58">…</text><text class="texte" x="53" y="94" text-anchor="middle">1</text><text class="texte" x="180" y="94" text-anchor="middle">2</text><text class="texte" x="315" y="94" text-anchor="middle">3 et plus</text><g ${AR} font-size="24"><text x="53" y="134" text-anchor="middle">كِتابٌ</text><text x="180" y="134" text-anchor="middle">كِتاب<tspan class="c-rouge">انِ</tspan></text><text x="315" y="134" text-anchor="middle">كُتُبٌ</text></g><text class="texte" x="53" y="160" text-anchor="middle">kitābun</text><text class="texte" x="180" y="160" text-anchor="middle">kitāb<tspan class="c-rouge">āni</tspan></text><text class="texte" x="315" y="160" text-anchor="middle">kutubun</text><text class="texte-petit" x="53" y="180" text-anchor="middle">singulier</text><text class="texte-petit" x="180" y="180" text-anchor="middle">duel</text><text class="texte-petit" x="315" y="180" text-anchor="middle">pluriel</text><line class="pointille" x1="116" y1="24" x2="116" y2="190"/><line class="pointille" x1="244" y1="24" x2="244" y2="190"/></svg>`;

// ——— Chapitre 6 : pluriel régulier ou pluriel brisé ———
const SVG_PLURIELS = `<svg viewBox="0 0 400 300"><rect class="aplat" x="10" y="10" width="184" height="280" rx="10"/><rect class="aplat-papier trait-fin" x="206" y="10" width="184" height="280" rx="10"/><text class="texte" x="102" y="34" text-anchor="middle">PLURIEL RÉGULIER</text><text class="texte-petit" x="102" y="52" text-anchor="middle">le mot reste entier, on ajoute</text><text class="texte" x="298" y="34" text-anchor="middle">PLURIEL BRISÉ</text><text class="texte-petit" x="298" y="52" text-anchor="middle">le mot change à l'intérieur</text><g ${AR} font-size="21"><text x="102" y="92" text-anchor="middle">مُعَلِّم</text><text x="102" y="142" text-anchor="middle">مُعَلِّم<tspan class="c-rouge">ونَ</tspan></text><text x="102" y="200" text-anchor="middle">سَيّارة</text><text x="102" y="250" text-anchor="middle">سَيّار<tspan class="c-rouge">ات</tspan></text><text x="298" y="92" text-anchor="middle">وَلَد</text><text x="298" y="142" text-anchor="middle">أَوْلاد</text><text x="298" y="200" text-anchor="middle">بَيْت</text><text x="298" y="250" text-anchor="middle">بُيوت</text></g><g ${AR} font-size="17"><text class="c-bleu" x="356" y="120" text-anchor="middle" direction="rtl">و ل د</text><text class="c-bleu" x="356" y="228" text-anchor="middle" direction="rtl">ب ي ت</text></g><line class="trait-fin" x1="102" y1="100" x2="102" y2="120" marker-end="url(#fl)"/><line class="trait-fin" x1="102" y1="208" x2="102" y2="228" marker-end="url(#fl)"/><line class="trait-fin" x1="298" y1="100" x2="298" y2="120" marker-end="url(#fl)"/><line class="trait-fin" x1="298" y1="208" x2="298" y2="228" marker-end="url(#fl)"/><text class="texte-petit" x="102" y="164" text-anchor="middle">muʿallim → muʿallim<tspan class="c-rouge">ūna</tspan></text><text class="texte-petit" x="102" y="272" text-anchor="middle">sayyāra → sayyār<tspan class="c-rouge">āt</tspan></text><text class="texte-petit" x="270" y="164" text-anchor="middle">walad → awlād</text><text class="texte-petit" x="270" y="272" text-anchor="middle">bayt → buyūt</text><text class="texte-petit" x="356" y="138" text-anchor="middle">racine</text><text class="texte-petit" x="356" y="246" text-anchor="middle">racine</text></svg>`;

// ——— Chapitre 7 : la silhouette ———
const SVG_CORPS = `<svg viewBox="0 0 400 320"><g class="trait"><circle class="aplat" cx="200" cy="58" r="32"/><path class="aplat" d="M166 52 Q160 58 166 66"/><path class="aplat" d="M234 52 Q240 58 234 66"/><line x1="200" y1="90" x2="200" y2="102"/><path class="aplat" d="M168 104 Q200 98 232 104 L236 196 Q200 204 164 196 Z"/><path d="M168 108 L136 160 L124 196"/><path d="M232 108 L264 160 L276 196"/><path d="M182 200 L176 300"/><path d="M218 200 L224 300"/><path d="M176 300 L160 302"/><path d="M224 300 L240 302"/></g><circle class="aplat-fort" cx="122" cy="204" r="9"/><circle class="aplat-fort" cx="278" cy="204" r="9"/><circle cx="188" cy="52" r="3" fill="var(--encre)"/><circle cx="212" cy="52" r="3" fill="var(--encre)"/><path class="trait-fin" d="M200 56 L196 66 L202 67"/><path class="trait-fin" d="M190 76 Q200 82 210 76"/><g class="pointille"><line x1="82" y1="38" x2="176" y2="40"/><line x1="82" y1="88" x2="186" y2="54"/><line x1="82" y1="138" x2="164" y2="60"/><line x1="82" y1="212" x2="112" y2="206"/><line x1="318" y1="66" x2="203" y2="63"/><line x1="318" y1="116" x2="206" y2="78"/><line x1="318" y1="166" x2="214" y2="152"/><line x1="318" y1="262" x2="224" y2="262"/></g><g ${AR} font-size="20"><text x="50" y="40" text-anchor="middle">رَأْس</text><text x="50" y="90" text-anchor="middle">عَيْن</text><text x="50" y="140" text-anchor="middle">أُذُن</text><text x="50" y="214" text-anchor="middle">يَد</text><text x="350" y="68" text-anchor="middle">أَنْف</text><text x="350" y="118" text-anchor="middle">فَم</text><text x="350" y="168" text-anchor="middle">بَطْن</text><text x="350" y="264" text-anchor="middle">رِجْل</text></g><text class="texte-petit" x="50" y="56" text-anchor="middle">raʾs : tête</text><text class="texte-petit" x="50" y="106" text-anchor="middle">ʿayn : œil</text><text class="texte-petit" x="50" y="156" text-anchor="middle">udhun : oreille</text><text class="texte-petit" x="50" y="230" text-anchor="middle">yad : main</text><text class="texte-petit" x="350" y="84" text-anchor="middle">anf : nez</text><text class="texte-petit" x="350" y="134" text-anchor="middle">fam : bouche</text><text class="texte-petit" x="350" y="184" text-anchor="middle">baṭn : ventre</text><text class="texte-petit" x="350" y="280" text-anchor="middle">rijl : jambe, pied</text></svg>`;

// ——— Chapitre 7 : les couleurs au masculin et au féminin ———
const SVG_COULEURS = `<svg viewBox="0 0 400 280"><text class="texte" x="150" y="26" text-anchor="middle">masculin</text><text class="texte" x="260" y="26" text-anchor="middle">féminin</text><text class="texte" x="352" y="26" text-anchor="middle">sens</text><g class="trait-fin"><rect class="c-rouge" x="22" y="42" width="44" height="26" rx="5"/><rect class="c-bleu" x="22" y="80" width="44" height="26" rx="5"/><rect class="c-vert" x="22" y="118" width="44" height="26" rx="5"/><rect class="c-jaune" x="22" y="156" width="44" height="26" rx="5"/><rect class="c-blanc" x="22" y="194" width="44" height="26" rx="5"/><rect class="c-noir" x="22" y="232" width="44" height="26" rx="5"/></g><g ${AR} font-size="20"><text x="150" y="62" text-anchor="middle">أَحْمَر</text><text x="260" y="62" text-anchor="middle">حَمْراء</text><text x="150" y="100" text-anchor="middle">أَزْرَق</text><text x="260" y="100" text-anchor="middle">زَرْقاء</text><text x="150" y="138" text-anchor="middle">أَخْضَر</text><text x="260" y="138" text-anchor="middle">خَضْراء</text><text x="150" y="176" text-anchor="middle">أَصْفَر</text><text x="260" y="176" text-anchor="middle">صَفْراء</text><text x="150" y="214" text-anchor="middle">أَبْيَض</text><text x="260" y="214" text-anchor="middle">بَيْضاء</text><text x="150" y="252" text-anchor="middle">أَسْوَد</text><text x="260" y="252" text-anchor="middle">سَوْداء</text></g><text class="texte-petit" x="352" y="54" text-anchor="middle">rouge</text><text class="texte-petit" x="352" y="92" text-anchor="middle">bleu</text><text class="texte-petit" x="352" y="130" text-anchor="middle">vert</text><text class="texte-petit" x="352" y="168" text-anchor="middle">jaune</text><text class="texte-petit" x="352" y="206" text-anchor="middle">blanc</text><text class="texte-petit" x="352" y="244" text-anchor="middle">noir</text><text class="texte-petit" x="352" y="66" text-anchor="middle">aḥmar / ḥamrāʾ</text><text class="texte-petit" x="352" y="104" text-anchor="middle">azraq / zarqāʾ</text><text class="texte-petit" x="352" y="142" text-anchor="middle">akhḍar / khaḍrāʾ</text><text class="texte-petit" x="352" y="180" text-anchor="middle">aṣfar / ṣafrāʾ</text><text class="texte-petit" x="352" y="218" text-anchor="middle">abyaḍ / bayḍāʾ</text><text class="texte-petit" x="352" y="256" text-anchor="middle">aswad / sawdāʾ</text></svg>`;

// ——— Chapitre 9 : verbe en tête ou sujet en tête ———
const SVG_ORDRE = `<svg viewBox="0 0 400 306"><text class="texte" x="200" y="22" text-anchor="middle">1. Verbe en tête (V-S-O) : le verbe reste au singulier</text><rect class="aplat-fort" x="272" y="36" width="110" height="46" rx="8" opacity=".3"/><rect class="aplat" x="146" y="36" width="118" height="46" rx="8"/><rect class="aplat-papier trait-fin" x="18" y="36" width="120" height="46" rx="8"/><text class="texte" x="200" y="176" text-anchor="middle">2. Sujet en tête (S-V) : le verbe se met au pluriel</text><rect class="aplat" x="264" y="190" width="118" height="46" rx="8"/><rect class="aplat-fort" x="146" y="190" width="110" height="46" rx="8" opacity=".3"/><rect class="aplat-papier trait-fin" x="18" y="190" width="120" height="46" rx="8"/><g ${AR} font-size="22"><text x="327" y="66" text-anchor="middle">ذَهَبَ</text><text x="205" y="66" text-anchor="middle">الطُّلّابُ</text><text x="78" y="66" text-anchor="middle" direction="rtl">إلى المَتْحَف</text><text x="323" y="220" text-anchor="middle">الطُّلّابُ</text><text x="201" y="220" text-anchor="middle">ذَهَب<tspan class="c-rouge">وا</tspan></text><text x="78" y="220" text-anchor="middle" direction="rtl">إلى المَتْحَف</text></g><text class="texte-petit" x="327" y="98" text-anchor="middle">verbe (singulier)</text><text class="texte-petit" x="205" y="98" text-anchor="middle">sujet (pluriel)</text><text class="texte-petit" x="78" y="98" text-anchor="middle">complément</text><text class="texte-petit" x="200" y="120" text-anchor="middle">dhahaba ṭ-ṭullābu ilā l-matḥaf</text><text class="texte-petit" x="323" y="252" text-anchor="middle">sujet (pluriel)</text><text class="texte-petit" x="201" y="252" text-anchor="middle">verbe (pluriel)</text><text class="texte-petit" x="78" y="252" text-anchor="middle">complément</text><text class="texte-petit" x="200" y="274" text-anchor="middle">aṭ-ṭullābu dhahab<tspan class="c-rouge">ū</tspan> ilā l-matḥaf</text><text class="texte-main" x="200" y="300" text-anchor="middle">les deux : « Les élèves sont allés au musée. »</text><line class="trait-fin" x1="390" y1="138" x2="300" y2="138" marker-end="url(#fl)"/><text class="texte-petit" x="250" y="142" text-anchor="middle">sens de lecture</text></svg>`;

export default {
  id: "4e-arabe",
  chapitres: {
    // ───────────────────────── 1. L'accompli ─────────────────────────
    "4e-arabe-01-accompli-passe": {
      accroche: "Sur une carte postale de Tunis, ton correspondant Youssef a écrit : « ذهبتُ إلى البحر وكتبتُ لكَ هذه الرسالة » (« Je suis allé à la mer et je t'ai écrit cette lettre »). Deux verbes, et aucun mot pour « je » : en arabe, la personne se cache à la fin du verbe. Apprends à la trouver !",
      objectifs: [
        "Comprendre ce qu'est l'accompli et comment un verbe se cite dans le dictionnaire",
        "Conjuguer كَتَبَ، ذَهَبَ، دَرَسَ à l'accompli au singulier et avec « nous »",
        "Reconnaître la personne grâce au suffixe, même dans un texte sans voyelles",
        "Raconter une action passée avec أَمْسِ et d'autres marqueurs de temps",
      ],
      sections: [
        {
          titre: "Un verbe qui se cite au passé",
          blocs: [
            { t: "definition", terme: "L'accompli (الماضي, al-māḍī)", md: "Le temps arabe des actions **terminées**, le plus souvent passées. On le traduit en général par un passé composé : كَتَبَ (kataba) = « il a écrit »." },
            { t: "texte", md: "L'arabe n'a **pas d'infinitif**. Dans un dictionnaire, on cherche un verbe à sa forme la plus simple : « il » à l'accompli, sur le modèle فَعَلَ (faʿala). On lit كَتَبَ (kataba) et on traduit par « écrire ».\n\nRegarde cette forme : trois consonnes, ك ت ب (k-t-b), portant chacune la voyelle a. Ces trois consonnes forment la **racine** : elles portent l'idée d'écrire, qu'on retrouve dans كِتاب (kitāb, livre) et dans مَكْتَبة (maktaba, bibliothèque)." },
            { t: "savais-tu", md: "Le mot الماضي (al-māḍī) veut dire « le passé ». Tu le retrouves dans الأُسْبوع الماضي (al-usbūʿ al-māḍī), « la semaine dernière » : le nom du temps et le marqueur de temps sont le même mot." },
            { t: "verifie", q: "Dans un lexique, sous quelle forme trouve-t-on le verbe « écrire » ?", choix: ["أَكْتُبُ (aktubu), « j'écris »", "كَتَبَ (kataba), « il a écrit »", "كَتَبْتُ (katabtu), « j'ai écrit »", "كِتاب (kitāb), « livre »"], bonne: 1, explication: "On cite le verbe à la forme « il » de l'accompli : كَتَبَ. أَكْتُبُ est un présent, كَتَبْتُ porte déjà un suffixe de personne, et كِتاب est un nom de la même racine." },
          ],
        },
        {
          titre: "Six personnes, six suffixes",
          blocs: [
            { t: "texte", md: "Pour conjuguer, on garde la base du verbe et on **ajoute à la fin** une marque de personne : le **suffixe**. Comme l'arabe s'écrit de droite à gauche, la fin du mot se trouve **à gauche**." },
            { t: "schema", titre: "L'accompli de كَتَبَ (écrire)", legende: "**En rouge : la marque de la personne**, le suffixe ajouté à la fin du verbe (à gauche). Avec « il », on n'ajoute rien : كَتَبَ se termine simplement par la voyelle a.", svg: SVG_ACCOMPLI },
            { t: "propriete", titre: "Les suffixes de l'accompli", md: "• ـْتُ (-tu) : **je**\n• ـْتَ (-ta) : **tu**, à un garçon\n• ـْتِ (-ti) : **tu**, à une fille\n• ـَ (-a) : **il** (rien n'est ajouté)\n• ـَتْ (-at) : **elle**\n• ـْنا (-nā) : **nous**" },
            { t: "astuce", md: "Les trois premières formes ne diffèrent que par la **dernière voyelle** : katabt**u** (je), katabt**a** (tu, garçon), katabt**i** (tu, fille). Regarde aussi où se trouve le **soukoun** : dans كَتَبْتُ (je), il est sur le ب, avant le suffixe ; dans كَتَبَتْ (elle), il est sur le ت final." },
            { t: "attention", md: "Le pronom sujet est souvent omis, car le suffixe suffit : ذهبتُ إلى المدرسة (dhahabtu ilā l-madrasa) veut dire « je suis allé(e) à l'école ». On ajoute أنا (anā) seulement pour insister." },
            { t: "verifie", q: "Que signifie ذَهَبَتْ (dhahabat) ?", choix: ["Il est allé", "Je suis allé(e)", "Elle est allée", "Nous sommes allés"], bonne: 2, explication: "Le suffixe ـَتْ (-at), avec un soukoun sur le ت, marque « elle ». « Je suis allé(e) » se dit ذَهَبْتُ, « il est allé » ذَهَبَ, et « nous sommes allés » ذَهَبْنا." },
          ],
        },
        {
          titre: "D'autres verbes, le même modèle",
          blocs: [
            { t: "tableau", titre: "Trois verbes à l'accompli", entetes: ["Personne", "كَتَبَ (écrire)", "ذَهَبَ (aller)", "دَرَسَ (étudier)"], lignes: [["أَنا (je)", "كَتَبْتُ (katabtu)", "ذَهَبْتُ (dhahabtu)", "دَرَسْتُ (darastu)"], ["أَنْتَ (tu, garçon)", "كَتَبْتَ (katabta)", "ذَهَبْتَ (dhahabta)", "دَرَسْتَ (darasta)"], ["أَنْتِ (tu, fille)", "كَتَبْتِ (katabti)", "ذَهَبْتِ (dhahabti)", "دَرَسْتِ (darasti)"], ["هُوَ (il)", "كَتَبَ (kataba)", "ذَهَبَ (dhahaba)", "دَرَسَ (darasa)"], ["هِيَ (elle)", "كَتَبَتْ (katabat)", "ذَهَبَتْ (dhahabat)", "دَرَسَتْ (darasat)"], ["نَحْنُ (nous)", "كَتَبْنا (katabnā)", "ذَهَبْنا (dhahabnā)", "دَرَسْنا (darasnā)"]] },
            { t: "texte", md: "Certains verbes ont un **i** sur la deuxième consonne : لَعِبَ (laʿiba) « jouer », شَرِبَ (shariba) « boire ». La voyelle du milieu s'apprend avec chaque verbe, mais les suffixes ne changent pas : لَعِبْتُ (laʿibtu) « j'ai joué », شَرِبْنا (sharibnā) « nous avons bu ». Retiens aussi جَلَسَ (jalasa) « s'asseoir »." },
            { t: "exemple", titre: "Dire « tu as joué » à une fille", etapes: ["Le verbe : لَعِبَ (laʿiba), jouer.", "« Tu », à une fille : suffixe ـْتِ (-ti).", "Résultat : لَعِبْتِ (laʿibti). À un garçon, on dirait لَعِبْتَ (laʿibta) ; « elle a joué » se dit لَعِبَتْ (laʿibat)."] },
            { t: "attention", md: "Le suffixe s'accorde avec le **sujet**, jamais avec le complément. Dans هي كَتَبَتْ رسالة (hiya katabat risāla, « elle a écrit une lettre »), la marque ـَتْ vient de هي (elle), et non du mot féminin رسالة (risāla, lettre)." },
          ],
        },
        {
          titre: "Lire un verbe sans voyelles",
          blocs: [
            { t: "texte", md: "Dans la plupart des textes, les voyelles brèves (les harakat) disparaissent. Écrit sans voyelles, كتبت peut se lire de quatre façons : katabtu (j'ai écrit), katabta (tu as écrit, à un garçon), katabti (tu as écrit, à une fille) ou katabat (elle a écrit).\n\nComment choisir ? Le **pronom** (أنا، أنتَ، هي…) ou le **contexte** tranche. En revanche, la fin ـنا ne laisse aucun doute : c'est « nous »." },
            { t: "exemple", titre: "Lire « أمس كتبنا رسالة إلى المعلم »", etapes: ["أمس (amsi) = hier : on est au passé.", "كتبنا se termine par ـنا : c'est « nous », katabnā.", "رسالة (risāla) = une lettre ; إلى المعلم (ilā l-muʿallim) = au professeur.", "Sens : « Hier, nous avons écrit une lettre au professeur. »"] },
          ],
        },
        {
          titre: "Raconter hier",
          blocs: [
            { t: "liste", titre: "Les marqueurs du passé", items: ["أَمْسِ (amsi) : hier", "الأُسْبوع الماضي (al-usbūʿ al-māḍī) : la semaine dernière", "السَّنة الماضية (as-sana al-māḍiya) : l'année dernière", "ثُمَّ (thumma) : puis, ensuite, pour enchaîner les actions"] },
            { t: "texte", md: "Ne les confonds pas avec غَدًا (ghadan) « demain », اليوم (al-yawm) « aujourd'hui » ou الآن (al-ān) « maintenant ». Le marqueur se place souvent **en tête** de phrase, puis vient le verbe : أمسِ ذهبتُ إلى المدرسة (amsi dhahabtu ilā l-madrasa), « hier, je suis allé(e) à l'école ». Pour dire « beaucoup », ajoute كثيرًا (kathīran) après le verbe." },
            { t: "exemple", titre: "Une journée racontée", md: "أمسِ ذهبتُ إلى المكتبة مع صديقي\n(amsi dhahabtu ilā l-maktaba maʿa ṣadīqī)\nHier, je suis allé à la bibliothèque avec mon ami.\n\nدرسْنا معًا، ثمّ كتبتُ رسالة إلى جدّتي\n(darasnā maʿan, thumma katabtu risāla ilā jaddatī)\nNous avons étudié ensemble, puis j'ai écrit une lettre à ma grand-mère." },
            { t: "verifie", q: "Comment dit-on « Hier, nous sommes allés au marché » ?", choix: ["أمسِ ذَهَبْنا إلى السوق", "أمسِ ذَهَبْتُ إلى السوق", "أمسِ ذَهَبَتْ إلى السوق", "أمسِ نَذْهَبُ إلى السوق"], bonne: 0, explication: "« Nous » à l'accompli : suffixe ـْنا → ذَهَبْنا (dhahabnā). ذَهَبْتُ = je suis allé(e), ذَهَبَتْ = elle est allée, et نَذْهَبُ est un présent (nous allons), qui ne va pas avec أمسِ." },
          ],
        },
      ],
      bilan: "À l'accompli, la personne se lit à la fin du verbe : -tu, -ta, -ti, -a, -at, -nā. Repère le suffixe, et le passé n'a plus de secret.",
    },

    // ───────────────────────── 2. L'inaccompli ─────────────────────────
    "4e-arabe-02-inaccompli-present": {
      accroche: "Youssef te décrit maintenant sa vie de tous les jours : « كلَّ يوم أذهبُ إلى المدرسة بالحافلة » (« Chaque jour, je vais à l'école en bus »). Cette fois, la marque de « je » n'est plus à la fin du verbe, mais au début. Bienvenue dans l'inaccompli, le temps du présent et des habitudes.",
      objectifs: [
        "Former l'inaccompli avec les préfixes أَـ، تَـ، يَـ، نَـ et le suffixe ـِينَ",
        "Retenir la voyelle du milieu des verbes courants",
        "Distinguer un passé (accompli) d'un présent (inaccompli)",
        "Décrire tes habitudes avec كُلَّ يوم، دائمًا، أحيانًا، عادةً",
      ],
      sections: [
        {
          titre: "Le présent se marque au début du verbe",
          blocs: [
            { t: "definition", terme: "L'inaccompli (المضارع, al-muḍāriʿ)", md: "Le temps des actions **en cours** ou **habituelles** : c'est notre présent. يَكْتُبُ (yaktubu) = « il écrit ». La personne se marque surtout par un **préfixe**, placé devant la racine." },
            { t: "texte", md: "Reprends la racine ك ت ب. À l'inaccompli, on place une lettre **devant** : أَ pour je, تَ pour tu et pour elle, يَ pour il, نَ pour nous. La racine change aussi de voyelles : ـكْتُبُ (-ktubu). Le début du mot étant **à droite**, c'est à droite que tu chercheras la personne." },
            { t: "schema", titre: "L'inaccompli de كَتَبَ (écrire)", legende: "**En rouge : les marques de personne.** À l'inaccompli, ce sont des préfixes, au début du verbe (à droite). Seul « tu », quand on parle à une fille, ajoute en plus ـِينَ à la fin.", svg: SVG_INACCOMPLI },
            { t: "astuce", md: "Les grammairiens arabes rassemblent les quatre préfixes dans un mot-mémoire : أَنَيْتُ (anaytu : a, n, y, t). Deux liens simples t'aideront aussi : أ comme **a**nā (je), ن comme **n**aḥnu (nous)." },
            { t: "verifie", q: "Comment dit-on « il joue » ?", choix: ["نَلْعَبُ (nalʿabu)", "لَعِبَ (laʿiba)", "أَلْعَبُ (alʿabu)", "يَلْعَبُ (yalʿabu)"], bonne: 3, explication: "Le préfixe يَـ (ya-) marque « il » au présent : يَلْعَبُ. لَعِبَ veut dire « il a joué » (accompli), أَلْعَبُ « je joue » et نَلْعَبُ « nous jouons »." },
          ],
        },
        {
          titre: "« Tu » ou « elle » : une même forme",
          blocs: [
            { t: "propriete", titre: "Une forme, deux sens", md: "تَكْتُبُ (taktubu) veut dire « tu écris » (à un garçon) **ou** « elle écrit ». Le pronom ou le contexte lève l'ambiguïté : أنتَ تكتبُ (anta taktubu) / هي تكتبُ (hiya taktubu).\nQuand on parle à une fille, on ajoute ـِينَ (-īna) : أنتِ تَكْتُبِينَ (anti taktubīna)." },
            { t: "exemple", titre: "Dire « tu étudies » à une fille", etapes: ["Le présent de دَرَسَ est يَدْرُسُ (yadrusu).", "« Tu » : préfixe تَـ → تَدْرُسُ (tadrusu).", "À une fille : on ajoute ـِينَ → تَدْرُسِينَ (tadrusīna)."] },
            { t: "verifie", q: "Que peut signifier تَشْرَبُ (tashrabu) ?", choix: ["seulement « elle boit »", "« tu bois » (à un garçon) ou « elle boit »", "« je bois »", "« tu as bu »"], bonne: 1, explication: "Le préfixe تَـ sert à la fois pour أنتَ (tu, garçon) et pour هي (elle). « Je bois » se dit أَشْرَبُ, et « tu as bu » est un passé : شَرِبْتَ." },
          ],
        },
        {
          titre: "La voyelle du milieu",
          blocs: [
            { t: "texte", md: "Au passé, la plupart des verbes ont un a au milieu. Au présent, la voyelle de la deuxième consonne **varie** : u, a ou i. Elle ne se devine pas : elle s'apprend avec le verbe, comme on apprend le genre d'un nom en français." },
            { t: "tableau", titre: "De l'accompli à l'inaccompli (forme « il »)", entetes: ["Sens", "Accompli", "Inaccompli", "Voyelle"], lignes: [["écrire", "كَتَبَ (kataba)", "يَكْتُبُ (yaktubu)", "u"], ["étudier", "دَرَسَ (darasa)", "يَدْرُسُ (yadrusu)", "u"], ["habiter", "سَكَنَ (sakana)", "يَسْكُنُ (yaskunu)", "u"], ["aller", "ذَهَبَ (dhahaba)", "يَذْهَبُ (yadhhabu)", "a"], ["jouer", "لَعِبَ (laʿiba)", "يَلْعَبُ (yalʿabu)", "a"], ["boire", "شَرِبَ (shariba)", "يَشْرَبُ (yashrabu)", "a"], ["lire", "قَرَأَ (qaraʾa)", "يَقْرَأُ (yaqraʾu)", "a"], ["s'asseoir", "جَلَسَ (jalasa)", "يَجْلِسُ (yajlisu)", "i"]] },
            { t: "attention", md: "جَلَسَ fait يَجْلِسُ, avec un **i** : « je m'assieds » se dit donc أَجْلِسُ (ajlisu). Les formes « ajlusu » ou « ajlasu » n'existent pas pour ce verbe." },
          ],
        },
        {
          titre: "Passé ou présent ? La fin ou le début",
          blocs: [
            { t: "schema", titre: "Une racine, deux places pour la personne", legende: "**En rouge : la marque de personne.** Même racine ذ ه ب : au passé, la marque est à la fin du verbe (à gauche) ; au présent, elle est au début (à droite).", svg: SVG_FIN_DEBUT },
            { t: "propriete", titre: "Pour t'y retrouver", md: "**Accompli = suffixes** (passé) : كَتَبْتُ، كَتَبْنا.\n**Inaccompli = préfixes** (présent) : أَكْتُبُ، نَكْتُبُ." },
            { t: "exemple", titre: "Hier et aujourd'hui", md: "أمسِ لعبتُ في الحديقة، واليوم أدرسُ في البيت\n(amsi laʿibtu fī l-ḥadīqa, wa-l-yawm adrusu fī l-bayt)\nHier, j'ai joué au jardin public, et aujourd'hui j'étudie à la maison. أمسِ appelle l'accompli (لعبتُ), اليوم l'inaccompli (أدرسُ)." },
            { t: "verifie", q: "Quelle forme est un présent ?", choix: ["شَرِبَتْ (sharibat)", "شَرِبْنا (sharibnā)", "نَشْرَبُ (nashrabu)", "شَرِبْتُ (sharibtu)"], bonne: 2, explication: "نَشْرَبُ commence par le préfixe نَـ : c'est l'inaccompli, « nous buvons ». Les trois autres portent un suffixe d'accompli : nous avons bu, elle a bu, j'ai bu." },
          ],
        },
        {
          titre: "Dire ses habitudes",
          blocs: [
            { t: "liste", titre: "Les marqueurs d'habitude (avec l'inaccompli)", items: ["كُلَّ يوم (kulla yawm) : chaque jour", "دائمًا (dāʾiman) : toujours", "عادةً (ʿādatan) : d'habitude", "أحيانًا (aḥyānan) : parfois", "الآن (al-ān) : maintenant"] },
            { t: "exemple", titre: "La semaine de Youssef", md: "كلَّ يوم أذهبُ إلى المدرسة بالحافلة\n(kulla yawm adhhabu ilā l-madrasa bi-l-ḥāfila)\nChaque jour, je vais à l'école en bus.\n\nأختي تدرسُ في الجامعة، وأبي يكتبُ في جريدة\n(ukhtī tadrusu fī l-jāmiʿa, wa-abī yaktubu fī jarīda)\nMa sœur étudie à l'université et mon père écrit dans un journal.\n\nأحيانًا نشربُ الشاي مع جدّي\n(aḥyānan nashrabu sh-shāy maʿa jaddī)\nParfois, nous buvons du thé avec mon grand-père." },
            { t: "savais-tu", md: "أحيانًا (aḥyānan) vient de حين (ḥīn), « moment » : mot à mot, « à certains moments ». La terminaison ـًا (-an), que tu vois aussi dans دائمًا, sert souvent à former des adverbes." },
          ],
        },
      ],
      bilan: "Au présent, la personne s'annonce dès la première lettre : أَ je, تَ tu ou elle, يَ il, نَ nous… et ـِينَ pour une fille à qui l'on parle.",
    },

    // ───────────────────────── 3. La négation ─────────────────────────
    "4e-arabe-03-negation": {
      accroche: "Ton ami te demande : « هل ذهبتَ إلى السينما أمسِ؟ » (« Tu es allé au cinéma hier ? »). Tu réponds : « لا، لم أذهبْ » (« Non, je n'y suis pas allé »). En arabe, le petit mot de négation change selon le temps : lis-le bien, il t'annonce déjà si l'on parle du présent ou du passé.",
      objectifs: [
        "Nier une action présente avec لا + inaccompli",
        "Nier une action passée avec ما + accompli ou لَمْ + inaccompli apocopé",
        "Former l'apocopé : soukoun final, ـِينَ qui devient ـِي",
        "Nier une phrase sans verbe avec لَيْسَ et mettre l'attribut à l'accusatif",
      ],
      sections: [
        {
          titre: "Un mot de négation pour chaque situation",
          blocs: [
            { t: "texte", md: "Le français emploie « ne… pas » partout. L'arabe choisit son mot selon ce que tu nies : une action **présente**, une action **passée**, ou une phrase **sans verbe**. Le schéma ci-dessous résume tout le chapitre." },
            { t: "schema", titre: "Quatre négations selon le temps", legende: "En bleu : le mot de négation. Le passé a deux tournures, le présent une seule ; لَيْسَ nie une phrase sans verbe et fait passer l'attribut à l'accusatif (ـًا).", svg: SVG_NEGATION },
            { t: "verifie", q: "Tu veux dire « je ne comprends pas » (en ce moment). Quel mot choisis-tu ?", choix: ["لا", "لَمْ", "ما", "لَيْسَ"], bonne: 0, explication: "Une action présente se nie avec لا + inaccompli : لا أَفْهَمُ (lā afhamu), « je ne comprends pas ». Une phrase bien utile en classe ! لَمْ et ما servent au passé, لَيْسَ aux phrases sans verbe." },
          ],
        },
        {
          titre: "Au présent : لا + inaccompli",
          blocs: [
            { t: "propriete", titre: "Négation du présent", md: "On place لا (lā) juste devant le verbe à l'inaccompli, qui ne change pas :\nأَكْتُبُ (aktubu) « j'écris » → لا أَكْتُبُ (lā aktubu) « je n'écris pas »\nيَدْرُسُ (yadrusu) « il étudie » → لا يَدْرُسُ (lā yadrusu) « il n'étudie pas »" },
            { t: "texte", md: "لا seul veut aussi dire « **non** ». Pour dire « jamais », on ajoute أبدًا (abadan) en fin de phrase : لا أشربُ القهوة أبدًا (lā ashrabu l-qahwa abadan), « je ne bois jamais de café ». À l'inverse, دائمًا (dāʾiman), « toujours », s'emploie sans négation." },
            { t: "attention", md: "En arabe standard courant, on ne place pas لا devant un accompli pour nier une action : « لا لعبتُ » est à éviter. Pour le passé, l'arabe a deux autres outils." },
          ],
        },
        {
          titre: "Au passé : ما ou لَمْ",
          blocs: [
            { t: "propriete", titre: "Deux tournures pour le passé", md: "• ما (mā) + **accompli** : ما كَتَبْتُ (mā katabtu)\n• لَمْ (lam) + **inaccompli apocopé** : لَمْ أَكْتُبْ (lam aktub)\nLes deux veulent dire « je n'ai pas écrit ». لَمْ est la plus courante à l'écrit." },
            { t: "definition", terme: "L'apocopé (المجزوم, al-majzūm)", md: "La forme que prend l'inaccompli après لَمْ : on « coupe » sa fin. La voyelle finale ـُ est remplacée par un **soukoun** ـْ, le petit rond qui marque l'absence de voyelle, et la finale ـِينَ perd son ن pour devenir ـِي." },
            { t: "etapes", titre: "Fabriquer « il n'est pas allé »", items: [{ titre: "Le présent", md: "يَذْهَبُ (yadhhabu) : il va." }, { titre: "La coupure", md: "La voyelle finale ـُ devient un soukoun : يَذْهَبْ." }, { titre: "La négation", md: "On place لَمْ devant : لَمْ يَذْهَبْ (lam yadhhab), « il n'est pas allé ». Avec l'accompli, on dirait ما ذَهَبَ (mā dhahaba)." }] },
            { t: "tableau", titre: "L'apocopé après لَمْ", entetes: ["Inaccompli", "Après لَمْ", "Sens"], lignes: [["أَكْتُبُ (aktubu)", "لَمْ أَكْتُبْ (lam aktub)", "je n'ai pas écrit"], ["نَذْهَبُ (nadhhabu)", "لَمْ نَذْهَبْ (lam nadhhab)", "nous ne sommes pas allés"], ["تَكْتُبُ (taktubu)", "لَمْ تَكْتُبْ (lam taktub)", "tu n'as pas écrit (garçon) ou elle n'a pas écrit"], ["تَكْتُبِينَ (taktubīna)", "لَمْ تَكْتُبِي (lam taktubī)", "tu n'as pas écrit (fille)"], ["أَشْرَبُ (ashrabu)", "لَمْ أَشْرَبْ (lam ashrab)", "je n'ai pas bu"]] },
            { t: "attention", md: "Piège : après لَمْ, le verbe **ressemble** à un présent, mais le sens est **passé**. لَمْ أَكْتُبْ (je n'ai pas écrit) n'est pas لا أَكْتُبُ (je n'écris pas). Et لَمْ ne se met jamais devant un accompli : « لم ذهبتُ » est faux ; avec ذهبتُ, on dit ما ذهبتُ. Enfin, la finale a (يَكْتُبَ) est une autre forme, le subjonctif, qui ne suit pas لَمْ." },
            { t: "verifie", q: "Quelle est la bonne traduction de « nous n'avons pas joué » ?", choix: ["لَمْ نَلْعَبُ", "لَمْ نَلْعَبْ", "لا نَلْعَبُ", "لَمْ لَعِبْنا"], bonne: 1, explication: "لَمْ + apocopé : نَلْعَبُ perd sa voyelle finale → لَمْ نَلْعَبْ (lam nalʿab). لا نَلْعَبُ veut dire « nous ne jouons pas » (présent), et لَمْ ne se place jamais devant un accompli (لَعِبْنا)." },
          ],
        },
        {
          titre: "Sans verbe : لَيْسَ",
          blocs: [
            { t: "texte", md: "Au présent, « il est grand » se dit sans verbe : هو طويلٌ (huwa ṭawīlun). Pour nier cette phrase nominale, on emploie لَيْسَ (laysa), « ne pas être ». Curiosité : لَيْسَ a un sens présent, mais il se conjugue **comme un accompli**, avec des suffixes." },
            { t: "tableau", titre: "لَيْسَ conjugué", entetes: ["Pronom", "Forme de لَيْسَ", "Sens"], lignes: [["أَنا", "لَسْتُ (lastu)", "je ne suis pas"], ["أَنْتَ", "لَسْتَ (lasta)", "tu n'es pas (garçon)"], ["أَنْتِ", "لَسْتِ (lasti)", "tu n'es pas (fille)"], ["هُوَ", "لَيْسَ (laysa)", "il n'est pas"], ["هِيَ", "لَيْسَتْ (laysat)", "elle n'est pas"], ["نَحْنُ", "لَسْنا (lasnā)", "nous ne sommes pas"]] },
            { t: "propriete", titre: "L'attribut passe à l'accusatif", md: "Après لَيْسَ, l'adjectif attribut prend la terminaison de l'**accusatif**, ـًا (-an) :\nهو لَيْسَ طويلًا (huwa laysa ṭawīlan) : « il n'est pas grand »\nلَيْسَ الكتابُ كبيرًا (laysa l-kitābu kabīran) : « le livre n'est pas grand »\nAvec un lieu, rien ne change : هي لَيْسَتْ في البيت (hiya laysat fī l-bayt), « elle n'est pas à la maison »." },
            { t: "exemple", titre: "Un garçon, une fille, un groupe", md: "Un garçon dit : لَسْتُ مَرِيضًا (lastu marīḍan), « je ne suis pas malade ».\nUne fille dit : لَسْتُ مَرِيضَةً (lastu marīḍatan).\nÀ plusieurs : لَسْنا مَرْضى (lasnā marḍā), « nous ne sommes pas malades » ; مَرْضى est le pluriel de مَرِيض." },
            { t: "verifie", q: "Comment dit-on « tu n'es pas grand » à un garçon ?", choix: ["لَسْتَ طَويلٌ", "لَسْتُ طَويلًا", "لا طَويلٌ", "لَسْتَ طَويلًا"], bonne: 3, explication: "« Tu », à un garçon : لَسْتَ (lasta), avec l'attribut à l'accusatif طَويلًا (ṭawīlan). لَسْتُ veut dire « je ne suis pas », لا ne nie pas une phrase sans verbe, et طَويلٌ (cas sujet) est fautif après لَيْسَ." },
          ],
        },
      ],
      bilan: "لا pour le présent, ما ou لَمْ pour le passé, لَيْسَ quand il n'y a pas de verbe : le mot de négation te dit déjà à quel temps tu es.",
    },

    // ───────────────────────── 4. Journée, heure, loisirs ─────────────────────────
    "4e-arabe-04-journee-heure-loisirs": {
      accroche: "Lina habite à Amman et commence l'école tôt : « أستيقظُ في الساعة السادسة والنصف ». À quelle heure se lève-t-elle ? Pour le savoir, il faut apprendre à lire l'heure en arabe… avec des nombres qui ne ressemblent pas tout à fait à ceux que tu connais.",
      objectifs: [
        "Demander l'heure et la dire avec الساعة + un ordinal féminin",
        "Ajouter « et quart », « et demie », « moins le quart »",
        "Raconter ta journée avec les verbes du quotidien",
        "Parler de tes loisirs et de tes goûts avec أُحِبُّ",
      ],
      sections: [
        {
          titre: "Quelle heure est-il ?",
          blocs: [
            { t: "texte", md: "Pour demander l'heure, on dit كم الساعة؟ (kam as-sāʿa?), mot à mot « combien l'heure ? ». Le mot ساعة (sāʿa) veut dire à la fois « heure » et « montre ». Attention à ne pas confondre avec بكم؟ (bi-kam?), « à combien ? », qui sert à demander un prix." },
            { t: "propriete", titre: "Dire l'heure", md: "On répond avec الساعة + un **nombre ordinal au féminin** (la « troisième » heure), car ساعة est féminin :\nالساعة الثالثة (as-sāʿa ath-thālitha) : il est trois heures." },
            { t: "tableau", titre: "Les heures (après الساعة)", entetes: ["Heure", "En arabe", "Lecture"], lignes: [["1 h", "الواحدة", "al-wāḥida"], ["2 h", "الثانية", "ath-thāniya"], ["3 h", "الثالثة", "ath-thālitha"], ["4 h", "الرابعة", "ar-rābiʿa"], ["5 h", "الخامسة", "al-khāmisa"], ["6 h", "السادسة", "as-sādisa"], ["7 h", "السابعة", "as-sābiʿa"], ["8 h", "الثامنة", "ath-thāmina"], ["9 h", "التاسعة", "at-tāsiʿa"], ["10 h", "العاشرة", "al-ʿāshira"], ["11 h", "الحادية عشرة", "al-ḥādiya ʿashra"], ["12 h", "الثانية عشرة", "ath-thāniya ʿashra"]] },
            { t: "astuce", md: "Reconnais les racines des nombres de 5e : خمسة (cinq) → الخامسة, ثمانية (huit) → الثامنة, عشرة (dix) → العاشرة. Seule 1 h fait exception : الواحدة, et dans 11 h on emploie une autre forme de « premier », الحادية." },
            { t: "verifie", q: "« الساعة الحادية عشرة » : quelle heure est-il ?", choix: ["10 h", "1 h", "11 h", "12 h"], bonne: 2, explication: "الحادية عشرة (al-ḥādiya ʿashra) = la onzième : il est 11 h. 1 h se dit الواحدة, 10 h العاشرة et 12 h الثانية عشرة." },
          ],
        },
        {
          titre: "Et quart, et demie, moins le quart",
          blocs: [
            { t: "schema", titre: "L'horloge arabe", legende: "Comme en français, on part de l'heure et on ajoute « et quart » ou « et demie » ; pour « moins le quart », on part de l'heure suivante. L'horloge indique الساعة السابعة والنصف : 7 h 30.", svg: SVG_HORLOGE },
            { t: "propriete", titre: "Les fractions d'heure", md: "• والربع (wa-r-rubʿ) : et quart\n• والنصف (wa-n-niṣf) : et demie\n• إلا ربعًا (illā rubʿan) : moins le quart (إلا = sauf, moins)" },
            { t: "exemple", titre: "Dire 8 h 45", etapes: ["8 h 45, c'est « 9 h moins le quart » : on part de l'heure suivante.", "9 h = التاسعة (at-tāsiʿa).", "On ajoute إلا ربعًا : الساعة التاسعة إلا ربعًا (as-sāʿa at-tāsiʿa illā rubʿan)."] },
            { t: "attention", md: "Ne confonds pas الرابعة (ar-rābiʿa, 4 h) et الربع (ar-rubʿ, le quart) : ils viennent de la même racine ر ب ع, celle du nombre quatre. الساعة الرابعة والربع = 4 h 15." },
            { t: "verifie", q: "Comment dit-on « il est 10 h 15 » ?", choix: ["الساعة العاشرة والنصف", "الساعة العاشرة والربع", "الساعة العاشرة إلا ربعًا", "الساعة الثانية والربع"], bonne: 1, explication: "العاشرة = 10 h, والربع = et quart. والنصف donnerait 10 h 30, إلا ربعًا 9 h 45, et الثانية correspond à 2 h." },
          ],
        },
        {
          titre: "Ma journée, du matin au soir",
          blocs: [
            { t: "liste", titre: "Les moments de la journée", items: ["الصباح (aṣ-ṣabāḥ) : le matin. On salue par صباح الخير (ṣabāḥ al-khayr).", "الظهر (aẓ-ẓuhr) : midi", "بعد الظهر (baʿda ẓ-ẓuhr) : l'après-midi, mot à mot « après midi »", "المساء (al-masāʾ) : le soir. On salue par مساء الخير (masāʾ al-khayr).", "الليل (al-layl) : la nuit"] },
            { t: "etapes", titre: "La journée de Lina", items: [{ titre: "6 h 30", md: "أستيقظُ (astayqiẓu) : je me réveille, في الساعة السادسة والنصف." }, { titre: "7 h", md: "أتناولُ الفطور (atanāwalu l-faṭūr) : je prends le petit-déjeuner avec ma famille." }, { titre: "17 h", md: "أرجعُ إلى البيت (arjiʿu ilā l-bayt) : je rentre à la maison, في الساعة الخامسة." }, { titre: "Le soir", md: "أقرأُ أو أسمعُ الموسيقى (aqraʾu aw asmaʿu l-mūsīqā) : je lis ou j'écoute de la musique." }, { titre: "22 h", md: "أنامُ (anāmu) : je me couche, في الساعة العاشرة." }] },
            { t: "texte", md: "Tous ces verbes commencent par le préfixe أَـ : c'est « je » au présent. Pour raconter la journée d'hier, tu passerais à l'accompli : استيقظتُ (istayqaẓtu), « je me suis réveillé(e) ». Pour enchaîner, utilise ثمّ (thumma), « ensuite », et précise d'où tu viens avec من (min), « de » : أرجعُ من المدرسة (arjiʿu mina l-madrasa), « je rentre de l'école »." },
          ],
        },
        {
          titre: "Mes loisirs et mes goûts",
          blocs: [
            { t: "tableau", titre: "Ce que je fais pendant mon temps libre", entetes: ["En arabe", "Lecture", "Sens"], lignes: [["أَقْرَأُ", "aqraʾu", "je lis"], ["أَلْعَبُ", "alʿabu", "je joue"], ["أُشاهِدُ التِّلْفاز", "ushāhidu t-tilfāz", "je regarde la télévision"], ["أَسْمَعُ الموسيقى", "asmaʿu l-mūsīqā", "j'écoute de la musique"], ["أَرْسُمُ", "arsumu", "je dessine"], ["أَسْبَحُ", "asbaḥu", "je nage"]] },
            { t: "propriete", titre: "Dire ce qu'on aime", md: "أُحِبُّ (uḥibbu) « j'aime » + un nom avec l'article :\nأُحِبُّ الرياضة (ar-riyāḍa) : j'aime le sport\nأُحِبُّ القراءة (al-qirāʾa) : j'aime la lecture\nأُحِبُّ السباحة (as-sibāḥa) : j'aime la natation\nأُحِبُّ الرسم (ar-rasm) : j'aime le dessin" },
            { t: "attention", md: "Dans أُحِبُّ (uḥibbu) et أُشاهِدُ (ushāhidu), le préfixe de « je » se prononce **u**, et non a. Certaines familles de verbes prennent ce préfixe en u (أُ، تُ، يُ، نُ), comme aussi أُسافِرُ (usāfiru), « je voyage ». Pour l'instant, apprends-les comme des mots de vocabulaire." },
            { t: "exemple", titre: "Une petite conversation", md: "— ما هوايتُك؟ (mā hiwāyatuk?) Quel est ton loisir ?\n— هوايتي المفضّلة هي السباحة (hiwāyatī l-mufaḍḍala hiya s-sibāḥa). Mon loisir préféré, c'est la natation.\nهواية (hiwāya) = loisir ; le ة devient ت devant un suffixe : هوايتي (mon loisir), هوايتُك (ton loisir)." },
            { t: "verifie", q: "Comment dit-on « Le soir, je regarde la télévision » ?", choix: ["في المساء شاهَدْتُ التلفاز", "في المساء يُشاهِدُ التلفاز", "في المساء أُشاهِدُ التلفاز", "في الصباح أُشاهِدُ التلفاز"], bonne: 2, explication: "« Je regarde », au présent : préfixe أُ → أُشاهِدُ. يُشاهِدُ = il regarde, شاهَدْتُ = j'ai regardé, et الصباح veut dire « le matin », pas « le soir » (المساء)." },
          ],
        },
      ],
      bilan: "الساعة + un ordinal féminin, puis والربع، والنصف ou إلا ربعًا : tu sais dire l'heure, raconter ta journée et parler de tes loisirs.",
    },

    // ───────────────────────── 5. Ville, prépositions, directions ─────────────────────────
    "4e-arabe-05-ville-prepositions-directions": {
      accroche: "Te voilà dans une ville inconnue, un plan à la main. Tu cherches la pharmacie, un passant te répond : « تمشي إلى الأمام، ثمّ تذهب إلى اليمين ». Pour comprendre, il te faut les noms des lieux, quelques petites prépositions et les mots du chemin.",
      objectifs: [
        "Nommer les principaux lieux de la ville",
        "Situer avec في، على، تحت، أمام، وراء، بجانب، بين",
        "Dire « il y a » en plaçant le lieu en tête",
        "Demander et indiquer un chemin",
      ],
      sections: [
        {
          titre: "Les lieux de la ville",
          blocs: [
            { t: "tableau", titre: "En ville", entetes: ["En arabe", "Lecture", "Sens"], lignes: [["الشارع", "ash-shāriʿ", "la rue"], ["السوق", "as-sūq", "le marché"], ["المستشفى", "al-mustashfā", "l'hôpital"], ["الصيدلية", "aṣ-ṣaydaliyya", "la pharmacie"], ["المكتبة", "al-maktaba", "la bibliothèque"], ["المطعم", "al-maṭʿam", "le restaurant"], ["الحديقة", "al-ḥadīqa", "le jardin public, le parc"], ["المتحف", "al-matḥaf", "le musée"], ["محطة القطار", "maḥaṭṭat al-qiṭār", "la gare"], ["البنك", "al-bank", "la banque"]] },
            { t: "astuce", md: "Beaucoup de noms de lieux commencent par مَـ (ma-), qui veut dire « lieu où l'on… » : مطعم, le lieu où l'on mange (de طعام, ṭaʿām, nourriture) ; مكتبة, le lieu des livres (de كتاب) ; مدرسة (madrasa), le lieu où l'on étudie (de درس, étudier)." },
            { t: "savais-tu", md: "حديقة الحيوانات (ḥadīqat al-ḥayawānāt), mot à mot « le jardin des animaux », c'est le zoo." },
          ],
        },
        {
          titre: "Situer : les prépositions",
          blocs: [
            { t: "schema", titre: "Où est la balle ?", legende: "Sept prépositions pour situer un objet ou un lieu. Retiens-les par paires : على (sur) et تحت (sous), أمام (devant) et وراء (derrière).", svg: SVG_PREPOSITIONS },
            { t: "texte", md: "Comme il n'y a pas de verbe « être » au présent, une phrase de position est très courte : القطّ على الطاولة (al-qiṭṭ ʿalā ṭ-ṭāwila), « le chat est sur la table » ; الكتاب تحت الكرسي (al-kitāb taḥta l-kursī), « le livre est sous la chaise ». Pour « derrière », on entend aussi خلف (khalfa). بين (bayna) relie deux noms par و : بين البيت والمدرسة, « entre la maison et l'école »." },
            { t: "propriete", titre: "Après une préposition : le cas indirect", md: "Après une préposition, le nom se met au **cas indirect** (ou génitif), marqué par la kasra ـِ (i) :\nفي البيتِ (fī l-bayti) : dans la maison\nأمامَ المدرسةِ (amāma l-madrasati) : devant l'école\nعلى الطاولةِ (ʿalā ṭ-ṭāwilati) : sur la table" },
            { t: "verifie", q: "Que signifie بجانب المكتبة ?", choix: ["à côté de la bibliothèque", "devant la bibliothèque", "derrière la bibliothèque", "dans la bibliothèque"], bonne: 0, explication: "بجانب (bi-jānib), mot à mot « par le côté de », veut dire « à côté de » ; جانب (jānib) = côté. Devant = أمام, derrière = وراء, dans = في." },
          ],
        },
        {
          titre: "« Il y a » : le lieu en tête",
          blocs: [
            { t: "propriete", titre: "Dire « il y a »", md: "Quand on présente une chose **indéfinie** (« un musée », « une pharmacie »), on place d'abord le **lieu**, puis le nom :\nفي المدينة متحفٌ كبير (fī l-madīna matḥafun kabīr) : il y a un grand musée dans la ville\nفي الشارع صيدلية (fī sh-shāriʿ ṣaydaliyya) : il y a une pharmacie dans la rue" },
            { t: "exemple", titre: "Construire « Il y a un restaurant devant l'hôpital »", etapes: ["Le lieu d'abord : أمامَ المستشفى (amāma l-mustashfā), devant l'hôpital.", "Puis le nom indéfini, sans article : مطعمٌ (maṭʿamun), un restaurant.", "Résultat : أمامَ المستشفى مطعمٌ."] },
            { t: "verifie", q: "Comment dit-on « Il y a une pharmacie dans la rue » ?", choix: ["في صيدلية الشارع", "الصيدلية في الشارع", "صيدلية الشارع في", "في الشارع صيدلية"], bonne: 3, explication: "Le nom est indéfini (« une » pharmacie) : on place le lieu en tête, في الشارع, puis صيدلية. الصيدلية في الشارع veut dire « la pharmacie est dans la rue » : c'est une pharmacie précise, déjà connue." },
            { t: "attention", md: "L'adjectif se place toujours **après** le nom et s'accorde avec lui : متحفٌ كبير (un grand musée), مدينة صغيرة (une petite ville). Avec un nom défini, on revient à l'ordre habituel : المتحف في المدينة, « le musée est dans la ville »." },
          ],
        },
        {
          titre: "Demander et indiquer le chemin",
          blocs: [
            { t: "liste", titre: "Les mots du chemin", items: ["من فضلك، أين…؟ (min faḍlik, ayna…?) : s'il te plaît, où est… ?", "هل … قريب من هنا؟ (hal … qarīb min hunā?) : … est-il près d'ici ?", "قريب (qarīb) : près ; بعيد (baʿīd) : loin ; au féminin قريبة, بعيدة", "هنا (hunā) : ici ; هناك (hunāka) : là-bas", "على اليمين (ʿalā l-yamīn) : à droite ; على اليسار (ʿalā l-yasār) : à gauche", "إلى اليسار (ilā l-yasār) : vers la gauche, pour une direction", "تمشي إلى الأمام (tamshī ilā l-amām) : tu vas tout droit ; ثمّ (thumma) : ensuite"] },
            { t: "schema", titre: "Le plan du quartier", legende: "Le trajet : 1. تمشي إلى الأمام (tu vas tout droit) ; 2. تذهب إلى اليمين (tu tournes à droite). La bibliothèque est alors على اليسار (à gauche), بين المطعم والبنك (entre le restaurant et la banque). Le musée est وراء المكتبة (derrière la bibliothèque), le jardin public أمام المكتبة (devant), et la pharmacie بجانب الحديقة (à côté du jardin public).", svg: SVG_PLAN },
            { t: "exemple", titre: "Un dialogue dans la rue", md: "— من فضلك، أين الصيدلية؟\n(min faḍlik, ayna ṣ-ṣaydaliyya?) S'il te plaît, où est la pharmacie ?\n— الصيدلية قريبة من هنا، بجانب الحديقة\n(aṣ-ṣaydaliyya qarība min hunā, bi-jānib al-ḥadīqa) La pharmacie est près d'ici, à côté du jardin public.\nقريبة est au féminin, comme الصيدلية." },
            { t: "verifie", q: "Sur le plan, où est le musée par rapport à la bibliothèque ?", choix: ["أمام المكتبة", "وراء المكتبة", "تحت المكتبة", "في المكتبة"], bonne: 1, explication: "Le musée (المتحف) est derrière la bibliothèque : وراء المكتبة (warāʾa l-maktaba). C'est le jardin public (الحديقة) qui est devant, de l'autre côté de la rue." },
          ],
        },
      ],
      bilan: "Un lieu, une préposition, un nom au cas indirect : avec على اليمين، على اليسار et تمشي إلى الأمام, tu ne te perdras plus.",
    },

    // ───────────────────────── 6. Pluriels ─────────────────────────
    "4e-arabe-06-pluriels": {
      accroche: "En français, un livre, deux livres, des livres : on ajoute un s et c'est tout. En arabe, كتاب devient كتابان quand il y en a deux… et كتب quand il y en a plus ! Le mot se « brise » de l'intérieur. Découvre les trois nombres de l'arabe.",
      objectifs: [
        "Former les pluriels réguliers en ـون (masculin) et en ـات (féminin)",
        "Reconnaître les pluriels brisés les plus fréquents et leurs schèmes",
        "Accorder avec un pluriel de personnes ou de choses",
        "Former le duel en ـانِ",
      ],
      sections: [
        {
          titre: "Un, deux, plusieurs",
          blocs: [
            { t: "texte", md: "L'arabe distingue **trois** nombres : le singulier (un), le **duel** (exactement deux) et le pluriel (trois et plus). Pour dire « deux livres », pas besoin du mot « deux » : la terminaison suffit." },
            { t: "schema", titre: "Les trois nombres de l'arabe", legende: "**En rouge : la terminaison du duel**, ـانِ (-āni), ajoutée au mot entier. Le pluriel de كِتاب, lui, change la forme du mot : كُتُب.", svg: SVG_NOMBRE },
            { t: "definition", terme: "Le duel", md: "La forme qui désigne **exactement deux** êtres ou objets. On ajoute ـانِ (-āni) : كِتابانِ (kitābāni), « deux livres ». Le ة du féminin redevient un ت : مَدْرَسة → مَدْرَسَتانِ (madrasatāni), « deux écoles »." },
            { t: "exemple", titre: "Le duel comme complément", md: "Après une préposition ou comme complément d'objet, ـانِ devient ـَيْنِ (-ayni) :\nقرأتُ كتابَيْنِ (qaraʾtu kitābayni) : j'ai lu deux livres\nفي مدرستين (fī madrasatayni) : dans deux écoles" },
          ],
        },
        {
          titre: "Les pluriels réguliers",
          blocs: [
            { t: "propriete", titre: "Deux terminaisons", md: "**Masculin** (pour des hommes) : on ajoute ـونَ (-ūna) : مُعَلِّم → مُعَلِّمونَ (muʿallimūn), « des professeurs » ; مهندس → مهندسون (muhandisūn), « des ingénieurs ».\n**Féminin** : le ة est remplacé par ـات (-āt) : مُعَلِّمة → مُعَلِّمات (muʿallimāt), « des professeures »." },
            { t: "tableau", titre: "Exemples de pluriels réguliers", entetes: ["Singulier", "Pluriel", "Sens"], lignes: [["مُعَلِّم (muʿallim)", "مُعَلِّمونَ (muʿallimūn)", "professeurs (hommes)"], ["لاعِب (lāʿib)", "لاعِبونَ (lāʿibūn)", "joueurs"], ["مُعَلِّمة (muʿallima)", "مُعَلِّمات (muʿallimāt)", "professeures"], ["طالِبة (ṭāliba)", "طالِبات (ṭālibāt)", "étudiantes, élèves (filles)"], ["سَيّارة (sayyāra)", "سَيّارات (sayyārāt)", "voitures"], ["قِطار (qiṭār)", "قِطارات (qiṭārāt)", "trains"], ["حَيَوان (ḥayawān)", "حَيَوانات (ḥayawānāt)", "animaux"]] },
            { t: "attention", md: "Deux pièges. D'abord, après une préposition ou comme complément, ـون devient ـِين (-īn) : مع المعلّمين (maʿa l-muʿallimīn), « avec les professeurs ». Ensuite, quelques noms masculins de choses prennent quand même ـات, comme قطار (train) et حيوان (animal) : il faut les apprendre." },
          ],
        },
        {
          titre: "Les pluriels brisés",
          blocs: [
            { t: "schema", titre: "Régulier ou brisé ?", legende: "**En rouge : la terminaison ajoutée** au pluriel régulier. Au pluriel brisé, rien n'est ajouté à la fin : les trois consonnes de la racine (en bleu) restent, mais les voyelles et la forme du mot changent.", svg: SVG_PLURIELS },
            { t: "texte", md: "La plupart des noms courants ont un pluriel brisé. Il ne se devine pas toujours : on l'apprend **avec le singulier**, comme un couple. Bonne nouvelle : ces pluriels suivent quelques moules, les **schèmes**, qu'on désigne avec les consonnes ف ع ل." },
            { t: "tableau", titre: "Pluriels brisés fréquents", entetes: ["Singulier", "Pluriel", "Schème"], lignes: [["قَلَم (qalam) stylo", "أَقْلام (aqlām)", "أَفْعال"], ["وَلَد (walad) garçon, enfant", "أَوْلاد (awlād)", "أَفْعال"], ["يَوْم (yawm) jour", "أَيّام (ayyām)", "أَفْعال"], ["بَيْت (bayt) maison", "بُيوت (buyūt)", "فُعُول"], ["دَرْس (dars) leçon", "دُروس (durūs)", "فُعُول"], ["كِتاب (kitāb) livre", "كُتُب (kutub)", "فُعُل"], ["مَدينة (madīna) ville", "مُدُن (mudun)", "فُعُل"], ["مَدْرَسة (madrasa) école", "مَدارِس (madāris)", "مَفاعِل"], ["مَكْتَب (maktab) bureau", "مَكاتِب (makātib)", "مَفاعِل"], ["صَديق (ṣadīq) ami", "أَصْدِقاء (aṣdiqāʾ)", "أَفْعِلاء"], ["طالِب (ṭālib) élève", "طُلّاب (ṭullāb)", "فُعّال"]] },
            { t: "savais-tu", md: "كِتابات existe, mais c'est le pluriel de كِتابة (kitāba, « écriture ») : « des écrits ». Le pluriel de كِتاب (livre) est bien كُتُب (kutub)." },
            { t: "verifie", q: "Quel est le pluriel de بَيْت (bayt, « maison ») ?", choix: ["بَيْتون (baytūn)", "بَيْتات (baytāt)", "بُيوت (buyūt)", "بَيْتانِ (baytāni)"], bonne: 2, explication: "بَيْت a un pluriel brisé sur le schème فُعُول : بُيوت. Les formes en ـات et ـون n'existent pas pour ce mot, et بَيْتانِ est un duel : « deux maisons »." },
          ],
        },
        {
          titre: "Accorder avec un pluriel",
          blocs: [
            { t: "propriete", titre: "Personnes ou choses ?", md: "Un pluriel de **personnes** s'accorde au pluriel : الطلّاب مجتهدون (aṭ-ṭullāb mujtahidūn), « les élèves sont travailleurs » ; الطالبات مجتهدات (aṭ-ṭālibāt mujtahidāt).\nUn pluriel de **choses ou d'animaux** s'accorde au **féminin singulier** : الكتب جديدة (al-kutub jadīda), « les livres sont nouveaux » ; السيّارات سريعة (as-sayyārāt sarīʿa), « les voitures sont rapides »." },
            { t: "attention", md: "La règle vaut aussi pour le démonstratif. On dit **هذه الكتب** (hādhihi l-kutub), « ces livres », avec le féminin singulier هذه. هؤلاء (hāʾulāʾi) est réservé aux personnes : هؤلاء الطلّاب, « ces élèves »." },
            { t: "exemple", titre: "« Il y a de nouveaux ordinateurs à la bibliothèque »", etapes: ["Le lieu en tête, car le nom est indéfini : في المكتبة.", "Le pluriel brisé de حاسوب (ḥāsūb, ordinateur) : حواسيب (ḥawāsīb).", "Des choses → adjectif au féminin singulier : جديدة.", "Résultat : في المكتبة حواسيب جديدة (fī l-maktaba ḥawāsīb jadīda)."] },
            { t: "verifie", q: "Complète : « الأقلامُ ___ » (Les stylos sont nouveaux.)", choix: ["جديدة", "جديدون", "جديد", "جديدان"], bonne: 0, explication: "Les stylos sont des choses : leur pluriel s'accorde au féminin singulier → جديدة (jadīda). جديدون ne s'emploie que pour des personnes, et جديدان est un duel." },
          ],
        },
      ],
      bilan: "Un, deux, plusieurs : كتاب، كتابان، كتب. Pluriel régulier en ـون ou ـات, pluriel brisé à apprendre avec le singulier, et pour les choses, l'accord se fait au féminin singulier.",
    },

    // ───────────────────────── 7. Corps, santé, vêtements ─────────────────────────
    "4e-arabe-07-corps-sante-vetements": {
      accroche: "Sami n'est pas allé au collège ce matin. Au téléphone, il dit : « يؤلمني رأسي ». Que lui arrive-t-il ? Pour le comprendre et lui souhaiter un bon rétablissement, apprends le vocabulaire du corps et de la santé… puis celui des vêtements, pour la sortie de samedi.",
      objectifs: [
        "Nommer les parties du corps et connaître leur genre",
        "Dire où l'on a mal et parler de sa santé",
        "Décrire ses vêtements en accordant les couleurs",
      ],
      sections: [
        {
          titre: "Les parties du corps",
          blocs: [
            { t: "schema", titre: "Le corps humain", legende: "Les mots du corps, de la tête aux pieds. رِجْل (rijl) désigne à la fois la jambe et le pied ; le dos se dit ظَهْر (ẓahr) et le cœur قَلْب (qalb).", svg: SVG_CORPS },
            { t: "propriete", titre: "Les parties qui vont par deux", md: "Les parties du corps qui vont **par deux** sont souvent **féminines**, même sans ة : عين (œil), أذن (oreille), يد (main), رجل (jambe). On dit donc يدي صغيرة (yadī ṣaghīra), « ma main est petite », avec l'adjectif au féminin.\nLeur duel : عينان (ʿaynān) « les deux yeux », يدان (yadān) « les deux mains »." },
            { t: "savais-tu", md: "عين (ʿayn) veut aussi dire « source » : on le retrouve dans des noms de lieux comme Aïn Témouchent ou Aïn Sefra, en Algérie. Et attention : « des yeux » (plus de deux) se dit عُيون (ʿuyūn) ou أَعْيُن (aʿyun)." },
            { t: "verifie", q: "Comment dit-on « les deux mains » ?", choix: ["يَد (yad)", "يَدانِ (yadāni)", "أَيْدٍ (aydin)", "يَدات (yadāt)"], bonne: 1, explication: "Pour exactement deux, on emploie le duel en ـانِ : يَدانِ. يَد est le singulier ; أَيْدٍ est un pluriel (« des mains »), et « يدات » n'existe pas." },
          ],
        },
        {
          titre: "« J'ai mal à… »",
          blocs: [
            { t: "propriete", titre: "Le verbe qui fait mal", md: "Pour dire « j'ai mal à la tête », l'arabe dit « ma tête me fait mal » : يؤلمني رأسي (yuʾlimunī raʾsī).\nSi la partie du corps est **féminine**, le verbe prend le préfixe تـ : تؤلمني عيني (tuʾlimunī ʿaynī), « j'ai mal à l'œil »." },
            { t: "tableau", titre: "Où as-tu mal ?", entetes: ["En arabe", "Lecture", "Sens"], lignes: [["يؤلمني رأسي", "yuʾlimunī raʾsī", "j'ai mal à la tête"], ["يؤلمني ظهري", "yuʾlimunī ẓahrī", "j'ai mal au dos"], ["يؤلمني بطني", "yuʾlimunī baṭnī", "j'ai mal au ventre"], ["تؤلمني عيني", "tuʾlimunī ʿaynī", "j'ai mal à l'œil"], ["تؤلمني أذني", "tuʾlimunī udhunī", "j'ai mal à l'oreille"], ["تؤلمني يدي", "tuʾlimunī yadī", "j'ai mal à la main"]] },
            { t: "verifie", q: "Complète : « ___ رِجْلي » (J'ai mal à la jambe.)", choix: ["تؤلمك", "يؤلمني", "أؤلم", "تؤلمني"], bonne: 3, explication: "رِجْل fait partie des mots du corps qui vont par deux : il est féminin, donc le verbe prend تـ → تؤلمني رجلي. يؤلمني s'emploie avec un nom masculin (رأسي، ظهري), et تؤلمك veut dire « te fait mal »." },
          ],
        },
        {
          titre: "Chez le médecin",
          blocs: [
            { t: "liste", titre: "Parler de sa santé", items: ["ماذا بكَ؟ (mādhā bik?) : qu'est-ce que tu as ? (mot à mot « qu'y a-t-il en toi ? »)", "أنا مريض / أنا مريضة (anā marīḍ / anā marīḍa) : je suis malade (garçon / fille)", "عندي حمّى (ʿindī ḥummā) : j'ai de la fièvre ; عندي زكام (ʿindī zukām) : j'ai un rhume", "الطبيب / الطبيبة (aṭ-ṭabīb / aṭ-ṭabība) : le médecin / la médecin", "الدواء (ad-dawāʾ) : le médicament, qu'on achète à la صيدلية (pharmacie)", "سلامتك (salāmatak) : bon rétablissement !"] },
            { t: "texte", md: "عندي (ʿindī) veut dire mot à mot « chez moi » : c'est la façon arabe de dire « j'ai ». Avec les autres suffixes : عندكَ (ʿindaka) « tu as », عندها (ʿindahā) « elle a ». Pour expliquer une raison, utilise لأنّ (li-anna), « parce que » : ذهبتْ ليلى إلى الطبيبة لأنّ عندها زكامًا, « Laïla est allée chez la médecin parce qu'elle a un rhume »." },
            { t: "exemple", titre: "Sami au téléphone", md: "— ماذا بكَ يا سامي؟\n— أنا مريض: يؤلمني رأسي وعندي حمّى. ذهبتُ إلى الطبيب، وأعطاني دواءً\n— سلامتك\n— Qu'est-ce que tu as, Sami ? — Je suis malade : j'ai mal à la tête et j'ai de la fièvre. Je suis allé chez le médecin et il m'a donné un médicament. — Bon rétablissement !" },
          ],
        },
        {
          titre: "Les vêtements et les couleurs",
          blocs: [
            { t: "tableau", titre: "Les vêtements", entetes: ["En arabe", "Lecture", "Sens", "Genre"], lignes: [["قميص", "qamīṣ", "chemise", "masculin"], ["بنطلون", "banṭalūn", "pantalon", "masculin"], ["فستان", "fustān", "robe", "masculin"], ["معطف", "miʿṭaf", "manteau", "masculin"], ["حذاء", "ḥidhāʾ", "chaussures", "masculin"], ["تنّورة", "tannūra", "jupe", "féminin"], ["قبّعة", "qubbaʿa", "chapeau", "féminin"]] },
            { t: "schema", titre: "Les couleurs au masculin et au féminin", legende: "Les couleurs ont un masculin en أَـ et un féminin en ـاء. La couleur se place après le nom et prend son genre : قميص أبيض (qamīṣ abyaḍ), تنّورة زرقاء (tannūra zarqāʾ), قبّعة سوداء (qubbaʿa sawdāʾ).", svg: SVG_COULEURS },
            { t: "attention", md: "Le genre d'un mot arabe ne suit pas toujours le français. « Robe » est féminin en français, mais فستان est **masculin** : on dit فستان أحمر (fustān aḥmar), « une robe rouge ». Et le féminin de أحمر est حمراء, jamais « أحمرة »." },
            { t: "exemple", titre: "« Ma sœur porte une robe blanche »", etapes: ["Le sujet : أختي (ukhtī), ma sœur.", "Le verbe لَبِسَ / يَلْبَسُ (porter), avec « elle » : تلبسُ (talbasu).", "Le complément à l'accusatif : فستانًا (fustānan), puis la couleur au masculin, comme فستان : أبيضَ.", "Résultat : أختي تلبسُ فستانًا أبيضَ (ukhtī talbasu fustānan abyaḍa)."] },
            { t: "verifie", q: "Comment dit-on « une jupe verte » ?", choix: ["خضراء تنّورة", "تنّورة أخضر", "تنّورة خضراء", "تنّورة أخضرة"], bonne: 2, explication: "تنّورة est féminin (ة) : la couleur prend sa forme féminine خضراء (khaḍrāʾ) et se place après le nom. أخضر est le masculin, et « أخضرة » n'existe pas." },
          ],
        },
      ],
      bilan: "Une tête qui fait mal (يؤلمني رأسي), un œil féminin (تؤلمني عيني), une robe masculine (فستان أحمر) : en arabe, le genre des mots guide tous les accords.",
    },

    // ───────────────────────── 8. Voyage et transports ─────────────────────────
    "4e-arabe-08-voyage-transports": {
      accroche: "Cet été, la famille de Salma part en vacances : avion jusqu'à Amman, bus jusqu'à Pétra, puis une nuit sous les étoiles dans le désert. Billet, valise, passeport… Prépare ton sac : voici les mots pour voyager et raconter ton voyage en arabe.",
      objectifs: [
        "Nommer les moyens de transport avec بـ (بالقطار، بالطائرة…)",
        "Se repérer dans un voyage : aéroport, gare, billet, hôtel, paysages",
        "Raconter un voyage au passé et poser des questions avec متى، كيف، كم",
      ],
      sections: [
        {
          titre: "Les moyens de transport",
          blocs: [
            { t: "propriete", titre: "بـ : le moyen", md: "Pour dire « en train, en avion », on attache la lettre بـ (bi-), « en, par », au nom avec son article : بالقطار (bi-l-qiṭār), « en train ». بـ indique le **moyen** ; la destination s'exprime avec إلى (ilā), « vers »." },
            { t: "tableau", titre: "Comment voyages-tu ?", entetes: ["En arabe", "Lecture", "Sens"], lignes: [["بالسيارة", "bi-s-sayyāra", "en voiture"], ["بالقطار", "bi-l-qiṭār", "en train"], ["بالطائرة", "bi-ṭ-ṭāʾira", "en avion"], ["بالحافلة", "bi-l-ḥāfila", "en bus"], ["بالسفينة", "bi-s-safīna", "en bateau"], ["بالدرّاجة", "bi-d-darrāja", "à vélo"], ["مشيًا", "mashyan", "à pied"]] },
            { t: "texte", md: "مشيًا (mashyan) est le seul à ne pas prendre بـ : il vient du verbe مشى (mashā), « marcher », et veut dire « en marchant ». أذهبُ إلى المدرسة مشيًا (adhhabu ilā l-madrasa mashyan), « je vais à l'école à pied »." },
            { t: "savais-tu", md: "طائرة (ṭāʾira, avion), مطار (maṭār, aéroport) et طائر (ṭāʾir, oiseau) viennent de la même racine ط ي ر, « voler ». L'aéroport est donc le « lieu d'où l'on s'envole », avec le مَـ des noms de lieux." },
          ],
        },
        {
          titre: "À l'aéroport, à la gare, à l'hôtel",
          blocs: [
            { t: "liste", titre: "Les mots du voyageur", items: ["المطار (al-maṭār) : l'aéroport", "المحطّة (al-maḥaṭṭa) : la gare, la station ; محطة القطار : la gare", "التذكرة (at-tadhkira) : le billet, le ticket ; تذكرة القطار : le billet de train", "جواز السفر (jawāz as-safar) : le passeport, mot à mot « l'autorisation du voyage »", "الحقيبة (al-ḥaqība) : la valise, le sac ; حقيبة مدرسية : un cartable", "الفندق (al-funduq) : l'hôtel"] },
            { t: "savais-tu", md: "سفر (safar), « voyage », est de la même racine que سافَرَ (sāfara), « voyager ». C'est aussi l'origine du mot « safari », arrivé jusqu'à nous par le swahili." },
            { t: "verifie", q: "Que signifie المطار (al-maṭār) ?", choix: ["la gare", "l'aéroport", "l'hôtel", "le billet"], bonne: 1, explication: "مطار, de la racine ط ي ر (voler), est le lieu d'où l'on s'envole : l'aéroport. La gare = محطة القطار, l'hôtel = الفندق, le billet = التذكرة." },
          ],
        },
        {
          titre: "Destinations et paysages",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quelques destinations du monde arabe", cadre: [-14, 22, 42, 50], zones: ["MA", "DZ", "TN", "EG", "LB", "JO"], reperes: [{ nom: "Paris", lat: 48.8566, lon: 2.3522 }, { nom: "Marrakech", lat: 31.6295, lon: -7.9811 }, { nom: "Alger", lat: 36.7538, lon: 3.0588 }, { nom: "Tunis", lat: 36.8065, lon: 10.1815 }, { nom: "Le Caire", lat: 30.0444, lon: 31.2357 }, { nom: "Beyrouth", lat: 33.8938, lon: 35.5018 }, { nom: "Pétra", lat: 30.3285, lon: 35.4444 }], traits: [{ de: [48.8566, 2.3522], a: [31.6295, -7.9811], label: "بالطائرة" }], legende: "En couleur : six pays où l'on parle arabe. Le trajet rappelle le récit de vacances ci-dessous : de Paris à Marrakech, بالطائرة (en avion)." },
            { t: "liste", titre: "Six pays, six noms", items: ["المغرب (al-Maghrib) : le Maroc", "الجزائر (al-Jazāʾir) : l'Algérie", "تونس (Tūnis) : la Tunisie", "مصر (Miṣr) : l'Égypte", "لبنان (Lubnān) : le Liban", "الأردن (al-Urdunn) : la Jordanie"] },
            { t: "liste", titre: "Les paysages", items: ["البحر (al-baḥr) : la mer", "الجبل (al-jabal) : la montagne", "الصحراء (aṣ-ṣaḥrāʾ) : le désert", "المدينة (al-madīna) : la ville", "العطلة (al-ʿuṭla) : les vacances"] },
            { t: "savais-tu", md: "Le mot « Sahara » vient de الصحراء (aṣ-ṣaḥrāʾ), qui veut simplement dire « le désert ». « Le désert du Sahara », c'est donc « le désert du désert » !" },
          ],
        },
        {
          titre: "Raconter un voyage",
          blocs: [
            { t: "tableau", titre: "Trois verbes du voyage", entetes: ["Verbe", "Accompli (je / nous)", "Inaccompli (je)", "Sens"], lignes: [["سافَرَ / يُسافِرُ", "سافَرْتُ (sāfartu) / سافَرْنا (sāfarnā)", "أُسافِرُ (usāfiru)", "voyager"], ["وَصَلَ / يَصِلُ", "وَصَلْتُ (waṣaltu) / وَصَلْنا (waṣalnā)", "أَصِلُ (aṣilu)", "arriver"], ["رَكِبَ / يَرْكَبُ", "رَكِبْتُ (rakibtu) / رَكِبْنا (rakibnā)", "أَرْكَبُ (arkabu)", "monter dans, prendre (un transport)"]] },
            { t: "etapes", titre: "Le voyage de Salma (à l'accompli)", items: [{ titre: "Le départ", md: "سافرَتْ سلمى إلى الأردن بالطائرة (sāfarat Salmā ilā l-Urdunn bi-ṭ-ṭāʾira) : Salma a voyagé en Jordanie en avion." }, { titre: "Le trajet", md: "ثمّ ركبَتِ الحافلة إلى البتراء (thumma rakibati l-ḥāfila ilā l-Batrāʾ) : ensuite, elle a pris le bus jusqu'à Pétra." }, { titre: "L'arrivée", md: "Salma raconte : وصلْنا إلى الفندق في المساء (waṣalnā ilā l-funduq fī l-masāʾ) : nous sommes arrivés à l'hôtel le soir." }, { titre: "La visite", md: "زرْنا الصحراء (zurnā ṣ-ṣaḥrāʾ) : nous avons visité le désert." }] },
            { t: "exemple", titre: "Des vacances au Maroc", md: "في العطلة الماضية سافرتُ مع أسرتي إلى المغرب\n(fī l-ʿuṭla al-māḍiya sāfartu maʿa usratī ilā l-Maghrib)\nPendant les dernières vacances, je suis parti avec ma famille au Maroc.\n\nركبْنا الطائرة من باريس، ووصلْنا إلى مراكش بعد ثلاث ساعات\n(rakibnā ṭ-ṭāʾira min Bārīs, wa-waṣalnā ilā Marrākush baʿda thalāth sāʿāt)\nNous avons pris l'avion à Paris et nous sommes arrivés à Marrakech trois heures plus tard." },
            { t: "liste", titre: "Questionner un voyageur", items: ["متى؟ (matā?) : quand ? متى تسافرُ؟ (matā tusāfiru?) : quand voyages-tu ?", "كيف؟ (kayfa?) : comment ? كيف وصلتَ؟ (kayfa waṣalta?) : comment es-tu arrivé ?", "إلى أين؟ (ilā ayna?) : où, vers où ? إلى أين تذهبُ؟ : où vas-tu ?", "كم يومًا؟ (kam yawman?) : combien de jours ?"] },
            { t: "attention", md: "Après كم (combien), le nom se met au **singulier**, avec la terminaison ـًا : كم يومًا بقيتَ في تونس؟ (kam yawman baqīta fī Tūnis?), « combien de jours es-tu resté en Tunisie ? » ; كم ساعةً؟, « combien d'heures ? ». C'est l'inverse du français, qui met le pluriel." },
            { t: "verifie", q: "Comment dit-on « Nous avons voyagé au Liban en avion » ?", choix: ["نُسافِرُ إلى لبنان بالطائرة", "سافرْتُ إلى لبنان بالطائرة", "سافرْنا إلى لبنان بالطائرة", "سافرْنا إلى لبنان بالسفينة"], bonne: 2, explication: "« Nous avons voyagé » = سافرْنا (suffixe ـنا), « en avion » = بالطائرة. سافرْتُ veut dire « j'ai voyagé », نُسافِرُ est un présent (nous voyageons), et بالسفينة veut dire « en bateau »." },
          ],
        },
      ],
      bilan: "بـ pour le moyen, إلى pour la destination, l'accompli pour raconter et كم + singulier pour compter les jours : ta valise de mots est prête.",
    },

    // ───────────────────────── 9. Phrase verbale, phrase nominale, كان ─────────────────────────
    "4e-arabe-09-phrase-verbale-nominale": {
      accroche: "En français, on dit presque toujours « sujet, verbe, complément ». En arabe, une phrase peut commencer par un nom… ou directement par le verbe : « ذهبَ الطلّابُ إلى المتحف ». Et selon cette place, le verbe ne s'accorde pas de la même façon ! Ajoutons le verbe كان, pour dire « était ».",
      objectifs: [
        "Distinguer la phrase nominale et la phrase verbale",
        "Accorder le verbe placé avant ou après son sujet",
        "Employer كان au passé, avec l'attribut à l'accusatif",
      ],
      sections: [
        {
          titre: "Deux sortes de phrases",
          blocs: [
            { t: "definition", terme: "La phrase nominale (الجملة الاسمية)", md: "Elle commence par un **nom**. Au présent, elle n'a souvent pas de verbe : الجوُّ جميلٌ (al-jawwu jamīlun), « il fait beau », mot à mot « le temps beau ». Le sujet et l'attribut sont au **cas sujet**, marqué par ـُ." },
            { t: "definition", terme: "La phrase verbale (الجملة الفعلية)", md: "Elle commence par un **verbe**, suivi du sujet puis du complément : c'est l'ordre **V-S-O**, très fréquent à l'écrit. ذهبَ الولدُ إلى المدرسة (dhahaba l-waladu ilā l-madrasa), « le garçon est allé à l'école »." },
            { t: "exemple", titre: "Ranger une phrase verbale", md: "حضّرَتْ أمّي العشاء في المطبخ\n(ḥaḍḍarat ummī l-ʿashāʾ fī l-maṭbakh)\nMa mère a préparé le dîner dans la cuisine.\nVerbe (au féminin, car le sujet est féminin), sujet أمّي, complément العشاء, puis le lieu." },
            { t: "verifie", q: "Laquelle est une phrase verbale ?", choix: ["لعبَ الأولادُ في الحديقة.", "الأولادُ في الحديقة.", "الحديقةُ كبيرةٌ.", "البيتُ جميلٌ."], bonne: 0, explication: "Une phrase verbale commence par un verbe : لعبَ (ils ont joué, mot à mot « a joué »), puis le sujet الأولادُ. Les trois autres commencent par un nom et n'ont pas de verbe : ce sont des phrases nominales." },
          ],
        },
        {
          titre: "Le verbe en tête reste au singulier",
          blocs: [
            { t: "schema", titre: "Une même phrase, deux ordres", legende: "**En rouge : la marque de personne** ـوا (« ils »). Quand le verbe vient en premier, il reste au singulier ; quand le sujet vient en premier, le verbe se met au pluriel.", svg: SVG_ORDRE },
            { t: "propriete", titre: "Deux règles d'accord", md: "• Verbe **avant** le sujet : il s'accorde en **genre** mais reste au **singulier**. ذهبَ الطلّابُ (dhahaba ṭ-ṭullābu) ; ذهبَتِ الطالباتُ (dhahabati ṭ-ṭālibātu).\n• Verbe **après** le sujet : il s'accorde en genre **et en nombre**. الطلّابُ ذهبوا (aṭ-ṭullābu dhahabū), avec ـوا (-ū), la forme de « ils » : هم ذهبوا (hum dhahabū)." },
            { t: "attention", md: "L'erreur la plus fréquente : « ذهبوا الطلّابُ ». Quand le verbe est en tête, on dit **ذهبَ الطلّابُ**. Remarque aussi le ت de ذهبَتِ الطالباتُ : il prend une kasra pour se lier à l'article qui suit. Pour un groupe de filles placé avant le verbe, la forme est ذهبْنَ (dhahabna) : tu l'étudieras plus tard." },
            { t: "verifie", q: "Complète : « ___ الأولادُ إلى الحديقة » (Les enfants sont allés au jardin public.)", choix: ["ذهبْنا", "ذهبوا", "ذهبَتْ", "ذهبَ"], bonne: 3, explication: "Le verbe est en tête : il reste au singulier masculin → ذهبَ الأولادُ. Avec le sujet en tête, on dirait الأولادُ ذهبوا. ذهبَتْ est féminin et ذهبْنا veut dire « nous sommes allés »." },
          ],
        },
        {
          titre: "Le passé de « être » : كان",
          blocs: [
            { t: "texte", md: "Au présent, il n'y a pas de verbe « être ». Au passé, en revanche, on emploie كان (kāna). Remarque : le ā long de كان disparaît devant un suffixe qui commence par une consonne et devient u : كُنْتُ, كُنّا. Il reste avec il, elle et ils." },
            { t: "tableau", titre: "كان à l'accompli", entetes: ["Pronom", "Forme", "Lecture", "Sens"], lignes: [["أَنا", "كُنْتُ", "kuntu", "j'étais"], ["أَنْتَ", "كُنْتَ", "kunta", "tu étais (garçon)"], ["أَنْتِ", "كُنْتِ", "kunti", "tu étais (fille)"], ["هُوَ", "كانَ", "kāna", "il était"], ["هِيَ", "كانَتْ", "kānat", "elle était"], ["نَحْنُ", "كُنّا", "kunnā", "nous étions"], ["هُمْ", "كانوا", "kānū", "ils étaient"]] },
            { t: "propriete", titre: "Après كان, l'attribut à l'accusatif", md: "Le sujet reste au cas sujet (ـُ), mais l'**attribut passe à l'accusatif** : ـًا, ou ـً sur un ة. C'est la même règle qu'après لَيْسَ.\nالجوُّ جميلٌ → كانَ الجوُّ جميلًا (kāna l-jawwu jamīlan) : il faisait beau\nكانَتِ المدينةُ جميلةً (kānati l-madīnatu jamīlatan) : la ville était belle\nكنتُ مريضًا أمسِ (kuntu marīḍan amsi) : j'étais malade hier" },
            { t: "exemple", titre: "« Les élèves étaient travailleurs »", etapes: ["كان est en tête : il reste au singulier → كانَ (et non كانوا).", "Le sujet garde le cas sujet : الطلّابُ.", "L'attribut passe à l'accusatif : le pluriel ـون devient ـين → مجتهدين (mujtahidīn).", "Résultat : كانَ الطلّابُ مجتهدين."] },
            { t: "attention", md: "Si l'attribut est un **lieu** introduit par une préposition, il ne change pas : كُنْتُ في البيت (kuntu fī l-bayt), « j'étais à la maison » ; كنّا في البيت, « nous étions à la maison ». Le nom après في reste au cas indirect, comme toujours après une préposition." },
          ],
        },
        {
          titre: "Les trois cas en un coup d'œil",
          blocs: [
            { t: "tableau", titre: "Les terminaisons de cas", entetes: ["Cas", "Marque", "Emplois vus cette année", "Exemple"], lignes: [["cas sujet (nominatif, مرفوع marfūʿ)", "ـُ / ـٌ", "sujet ; attribut d'une phrase nominale", "الجوُّ جميلٌ"], ["cas direct (accusatif, منصوب manṣūb)", "ـَ / ـًا", "complément d'objet ; attribut après كان ou لَيْسَ ; après كم", "كانَ الجوُّ جميلًا"], ["cas indirect (génitif, مجرور majrūr)", "ـِ / ـٍ", "après une préposition", "في البيتِ"]] },
            { t: "exemple", titre: "Lire une phrase avec ses cas", md: "كتبَ الخوارزميُّ كتابًا في الجبر\n(kataba l-Khwārizmiyyu kitāban fī l-jabr)\nAl-Khwārizmī a écrit un livre d'algèbre.\nالخوارزميُّ est sujet (ـُ), كتابًا est complément d'objet (ـًا), الجبر suit la préposition في (cas indirect)." },
            { t: "verifie", q: "Comment dit-on « Le temps était beau » ?", choix: ["كانَ الجوُّ جميلٌ", "كانَ الجوُّ جميلًا", "الجوُّ كانَ جميلٌ", "كانَتِ الجوُّ جميلةً"], bonne: 1, explication: "Après كان, l'attribut passe à l'accusatif : جميلًا. Avec جميلٌ (cas sujet), la phrase est fautive. الجوّ est masculin : كانَتْ et جميلة ne conviennent pas." },
          ],
        },
      ],
      bilan: "Verbe en tête, verbe au singulier ; sujet en tête, verbe au pluriel. Et après كان comme après لَيْسَ, l'attribut prend l'accusatif.",
    },

    // ───────────────────────── 10. Al-Andalus et les savants ─────────────────────────
    "4e-arabe-10-al-andalus-savants": {
      accroche: "Dans « algèbre », « algorithme », « chiffre » ou « Gibraltar », il y a de l'arabe ! Ces mots ont voyagé depuis Bagdad et Cordoue, où des savants écrivaient en arabe il y a plus de mille ans. Partons à la découverte d'Al-Andalus, de la Maison de la sagesse et des Mille et Une Nuits.",
      objectifs: [
        "Situer Al-Andalus dans l'espace et le temps (711-1492, Cordoue, Grenade)",
        "Connaître Bayt al-Ḥikma et les savants al-Khwārizmī, Ibn Sīnā, Ibn Rushd et Ibn al-Haytham",
        "Raconter l'histoire des Mille et Une Nuits et de leur traduction en français",
      ],
      sections: [
        {
          titre: "Al-Andalus : près de huit siècles d'histoire",
          blocs: [
            { t: "definition", terme: "Al-Andalus (الأندلس)", md: "Le nom donné aux territoires de la péninsule Ibérique (l'Espagne et le Portugal actuels) sous domination musulmane, de **711** à **1492**. Son étendue a beaucoup varié au fil des siècles." },
            { t: "texte", md: "En **711**, Ṭāriq ibn Ziyād traverse le détroit depuis l'Afrique du Nord. Il débarque près d'un rocher qui porte depuis son nom : جبل طارق (jabal Ṭāriq), « le mont de Ṭāriq », devenu **Gibraltar**. En **1492**, les Rois catholiques prennent **Grenade**, le dernier royaume musulman de la péninsule." },
            { t: "carte", fond: "monde", titre: "D'Al-Andalus à Bagdad", cadre: [-11, 26, 50, 46], reperes: [{ nom: "Cordoue", lat: 37.8882, lon: -4.7794 }, { nom: "Grenade", lat: 37.1773, lon: -3.5986 }, { nom: "Tolède", lat: 39.8628, lon: -4.0273 }, { nom: "Damas", lat: 33.5138, lon: 36.2765 }, { nom: "Bagdad", lat: 33.3152, lon: 44.3661 }, { nom: "Le Caire", lat: 30.0444, lon: 31.2357 }], traits: [{ de: [33.3152, 44.3661], a: [37.8882, -4.7794], label: "circulation des savoirs" }], legende: "Cordoue, en Al-Andalus, et Bagdad, capitale des califes abbassides, sont à plus de 4 000 km l'une de l'autre. Pourtant, les livres, les savants et les idées circulaient entre les deux bouts de la Méditerranée." },
            { t: "frise", titre: "Repères, de 711 à 1492", evenements: [{ date: 711, label: "Ṭāriq ibn Ziyād traverse le détroit", detail: "Début d'Al-Andalus. Le rocher de جبل طارق deviendra « Gibraltar »." }, { date: 756, label: "Émirat omeyyade de Cordoue", detail: "Cordoue (قرطبة, Qurṭuba) devient la capitale d'Al-Andalus." }, { date: 762, label: "Fondation de Bagdad", detail: "Le calife abbasside al-Manṣūr fonde sa capitale sur le Tigre." }, { date: 785, label: "Début de la Grande Mosquée de Cordoue", detail: "Les travaux commencent vers 785 et la mosquée sera agrandie pendant deux siècles." }, { date: 820, label: "Al-Khwārizmī à Bayt al-Ḥikma", detail: "Vers 820, sous le calife al-Maʾmūn (813-833), il écrit son traité d'al-jabr." }, { date: 929, label: "Califat de Cordoue", detail: "Au Xe siècle, Cordoue est l'une des plus grandes villes d'Europe." }, { date: 980, label: "Naissance d'Ibn Sīnā", detail: "Le futur Avicenne naît près de Boukhara, en Asie centrale." }, { date: 1085, label: "Tolède passe à la Castille", detail: "Au XIIe siècle, on y traduit de l'arabe en latin de nombreux livres de science." }, { date: 1126, label: "Naissance d'Ibn Rushd à Cordoue", detail: "Le futur Averroès meurt à Marrakech en 1198." }, { date: 1492, label: "Prise de Grenade", detail: "Les Rois catholiques prennent le dernier royaume musulman de la péninsule : fin d'Al-Andalus." }] },
          ],
        },
        {
          titre: "Cordoue, Tolède, Grenade",
          blocs: [
            { t: "tableau", titre: "Les villes d'Al-Andalus et leur nom arabe", entetes: ["Ville", "Nom arabe", "Lecture", "À retenir"], lignes: [["Cordoue", "قرطبة", "Qurṭuba", "capitale d'un émirat (756) puis d'un califat (929) ; Grande Mosquée commencée vers 785"], ["Grenade", "غرناطة", "Gharnāṭa", "dernier royaume musulman ; palais de l'Alhambra"], ["Séville", "إشبيلية", "Ishbīliya", "grande ville du sud, sur le Guadalquivir"], ["Tolède", "طليطلة", "Ṭulayṭula", "au XIIe siècle, on y traduit de l'arabe en latin"]] },
            { t: "texte", md: "Le palais de Grenade s'appelle l'**Alhambra**, de الحمراء (al-Ḥamrāʾ), « la rouge », sans doute à cause de la couleur de ses murs : c'est le féminin de أحمر que tu connais. Il date surtout des XIIIe et XIVe siècles." },
            { t: "savais-tu", md: "Beaucoup de noms espagnols gardent la trace de l'arabe. Le fleuve Guadalquivir, qui passe à Cordoue et à Séville, vient de الوادي الكبير (al-wādī al-kabīr), « le grand fleuve »." },
            { t: "verifie", q: "D'où vient le nom « Gibraltar » ?", choix: ["D'un mot latin, « porte de l'Afrique »", "Du nom d'un roi wisigoth", "De جبل طارق, « le mont de Ṭāriq »", "De الحمراء, « la rouge »"], bonne: 2, explication: "جبل (jabal) = montagne, mont. Ṭāriq ibn Ziyād a débarqué près de ce rocher en 711 : « Jabal Ṭāriq » est devenu « Gibraltar ». الحمراء, « la rouge », a donné « Alhambra »." },
          ],
        },
        {
          titre: "Bagdad et la Maison de la sagesse",
          blocs: [
            { t: "definition", terme: "Bayt al-Ḥikma (بيت الحكمة)", md: "« La Maison de la sagesse » : بيت (bayt) = maison, حكمة (ḥikma) = sagesse. Ce centre de savoir de **Bagdad** rayonne au **IXe siècle**, notamment sous le calife al-Maʾmūn (813-833). On y traduit en arabe des œuvres grecques (Aristote, Euclide, Ptolémée), persanes et indiennes." },
            { t: "tableau", titre: "Quatre savants de langue arabe", entetes: ["Savant", "Dates", "Ce qu'il nous a laissé"], lignes: [["Al-Khwārizmī", "vers 780 - vers 850", "mathématicien de Bayt al-Ḥikma ; le titre de son traité, *al-jabr*, a donné « algèbre », et son nom latinisé, *Algoritmi*, a donné « algorithme »"], ["Ibn al-Haytham", "vers 965 - vers 1040", "étudie la lumière et la vision : un fondateur de l'optique"], ["Ibn Sīnā (Avicenne)", "980-1037", "médecin et philosophe persan ; son *Canon de la médecine* (القانون في الطب) est étudié en Europe pendant des siècles"], ["Ibn Rushd (Averroès)", "1126-1198", "né à Cordoue ; juge, médecin et grand commentateur d'Aristote"]] },
            { t: "attention", md: "Piège classique : « algèbre » et « algorithme » viennent tous deux d'al-Khwārizmī, mais pas de la même façon. « Algorithme » vient de son **nom** ; « algèbre » vient du **titre** de son livre (*al-jabr*). Quant à « alchimie » et « alcool », ils viennent d'autres mots arabes : al-kīmiyāʾ et al-kuḥl." },
            { t: "exemple", titre: "Une phrase sur Ibn Rushd", md: "عاشَ ابنُ رشدٍ في قرطبة في القرن الثاني عشر. كانَ طبيبًا وقاضيًا وفيلسوفًا\n(ʿāsha bnu Rushdin fī Qurṭuba fī l-qarn ath-thānī ʿashar. kāna ṭabīban wa-qāḍiyan wa-faylasūfan)\nIbn Rushd a vécu à Cordoue au XIIe siècle. Il était médecin, juge et philosophe.\nRemarque l'accusatif après كان : طبيبًا، قاضيًا، فيلسوفًا." },
            { t: "verifie", q: "Ces savants écrivaient en arabe. Qui était persan ?", choix: ["Ibn Sīnā (Avicenne)", "Ibn Rushd (Averroès)", "Ṭāriq ibn Ziyād", "Antoine Galland"], bonne: 0, explication: "Ibn Sīnā, né près de Boukhara, était persan ; il écrivait pourtant ses grands livres en arabe, la langue des sciences de l'époque. Ibn Rushd est né à Cordoue, Ṭāriq était un chef militaire et Galland un savant français." },
          ],
        },
        {
          titre: "Les Mille et Une Nuits",
          blocs: [
            { t: "texte", md: "Le titre arabe, ألف ليلة وليلة (alf layla wa-layla), veut dire mot à mot « mille nuits et une nuit » : ألف (alf) = mille, ليلة (layla) = nuit, و (wa) = et. Le prénom Leïla vient de ce même mot. Ce recueil rassemble des contes d'origines **persane, indienne et arabe**, enrichis pendant des siècles." },
            { t: "etapes", titre: "L'histoire qui encadre toutes les autres", items: [{ titre: "La menace", md: "Le roi Shahriyar (شهريار) a décidé de faire mourir chaque nouvelle épouse au matin." }, { titre: "La ruse", md: "Shahrazade (شهرزاد) l'épouse et, chaque nuit, lui raconte une histoire." }, { titre: "Le suspense", md: "À l'aube, elle s'arrête au moment le plus captivant : le roi, curieux, la laisse vivre un jour de plus." }, { titre: "Mille et une nuits", md: "Nuit après nuit, les histoires s'enchaînent : Sindbad le marin et bien d'autres héros." }] },
            { t: "attention", md: "*Aladin* et *Ali Baba* ne figurent pas dans les plus anciens manuscrits arabes connus. C'est le Français **Antoine Galland** qui les ajoute dans sa traduction, publiée de **1704 à 1717** : il les avait entendus d'un conteur syrien d'Alep, **Hanna Diyab**." },
            { t: "verifie", q: "Pourquoi Shahrazade s'arrête-t-elle chaque matin au moment le plus captivant ?", choix: ["Parce qu'elle a oublié la fin de l'histoire", "Pour retarder sa mort : le roi veut entendre la suite", "Pour apprendre à lire au roi", "Pour gagner un concours de conteurs"], bonne: 1, explication: "Le roi, impatient de connaître la suite, la laisse vivre un jour de plus. Le suspense lui sauve la vie… pendant mille et une nuits." },
          ],
        },
      ],
      bilan: "De Cordoue à Bagdad, de 711 à 1492, l'arabe a été une grande langue des sciences et des contes : algèbre, algorithme et Shahrazade en sont les héritiers.",
    },
  },
};
