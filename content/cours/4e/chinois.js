// ÉCLORE — Cours illustrés, 4e Chinois (LV2, deuxième année, niveau A1+ vers A2).
// Mandarin standard, caractères simplifiés + pinyin. Mêmes conventions que content/4e/chinois.js :
// tons d'origine, sauf pour 一 et 不, notés au ton réellement prononcé (一个 yí ge, 一本 yì běn, 不是 bú shì) ;
// 个 après un nombre ou un démonstratif est au ton neutre (yí ge) ; on note gè seulement quand il est cité seul.
// Schéma : docs/COURS.md. Validation : node tools/validate-cours.mjs content/cours/4e/chinois.js

// ——— Petits outils pour les schémas SVG ———
// Les caractères chinois sont agrandis (≥ 14 px) ; le pinyin qui suit reste à la taille de la classe.
const zh = (x, y, car, pin = "", { a = "middle", n = 18, cl = "texte" } = {}) =>
  `<text class="${cl}" x="${x}" y="${y}" text-anchor="${a}"><tspan style="font-size:${n}px">${car}</tspan>${pin ? ` ${pin}` : ""}</text>`;
const tx = (x, y, t, { a = "middle", cl = "texte-petit" } = {}) => `<text class="${cl}" x="${x}" y="${y}" text-anchor="${a}">${t}</text>`;
const EN = 'stroke="var(--encre)" stroke-width="1.5"';
const PERSO = 'fill="none" stroke="var(--encre)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';

// Chapitre 1 : une case par famille de classificateurs (pictogramme, caractère, pinyin, usage).
const caseCl = (cx, t, picto, car, pin, l1, l2) =>
  `<rect class="trait-fin" x="${cx - 46}" y="${t + 2}" width="92" height="144" rx="8"/>${picto}` +
  `<text class="texte" x="${cx}" y="${t + 92}" text-anchor="middle" style="font-size:26px">${car}</text>` +
  `<text class="texte-pigment" x="${cx}" y="${t + 110}" text-anchor="middle">${pin}</text>` +
  tx(cx, t + 126, l1) + tx(cx, t + 139, l2);
const pLivre = (cx, t) => `<rect class="aplat" ${EN} x="${cx - 17}" y="${t + 12}" width="34" height="48" rx="3"/><line class="trait" x1="${cx - 10}" y1="${t + 12}" x2="${cx - 10}" y2="${t + 60}"/><line class="trait-fin" x1="${cx - 4}" y1="${t + 26}" x2="${cx + 11}" y2="${t + 26}"/><line class="trait-fin" x1="${cx - 4}" y1="${t + 33}" x2="${cx + 8}" y2="${t + 33}"/>`;
const pChat = (cx, t) => `<path class="aplat" ${EN} d="M${cx - 17} ${t + 34} L${cx - 15} ${t + 12} L${cx - 5} ${t + 22} L${cx + 5} ${t + 22} L${cx + 15} ${t + 12} L${cx + 17} ${t + 34} A17 16 0 1 1 ${cx - 17} ${t + 34} Z"/><circle cx="${cx - 6}" cy="${t + 33}" r="2.2" fill="var(--encre)"/><circle cx="${cx + 6}" cy="${t + 33}" r="2.2" fill="var(--encre)"/><path fill="var(--encre)" d="M${cx - 2.5} ${t + 39} L${cx + 2.5} ${t + 39} L${cx} ${t + 42} Z"/><path class="trait-fin" d="M${cx - 5} ${t + 42} L${cx - 24} ${t + 39} M${cx - 5} ${t + 44} L${cx - 24} ${t + 47} M${cx + 5} ${t + 42} L${cx + 24} ${t + 39} M${cx + 5} ${t + 44} L${cx + 24} ${t + 47}"/>`;
const pFeuille = (cx, t) => `<path class="aplat-papier" ${EN} d="M${cx - 24} ${t + 50} L${cx - 8} ${t + 16} L${cx + 32} ${t + 16} L${cx + 16} ${t + 50} Z"/><path class="aplat" ${EN} d="M${cx - 32} ${t + 58} L${cx - 16} ${t + 24} L${cx + 24} ${t + 24} L${cx + 8} ${t + 58} Z"/>`;
const pTasse = (cx, t) => `<path class="aplat" ${EN} d="M${cx - 17} ${t + 24} L${cx + 11} ${t + 24} L${cx + 7} ${t + 60} L${cx - 13} ${t + 60} Z"/><path class="trait" d="M${cx + 10} ${t + 31} C${cx + 24} ${t + 31} ${cx + 24} ${t + 50} ${cx + 8} ${t + 51}"/><path class="pointille" d="M${cx - 8} ${t + 19} C${cx - 12} ${t + 14} ${cx - 4} ${t + 11} ${cx - 8} ${t + 6} M${cx + 2} ${t + 19} C${cx - 2} ${t + 14} ${cx + 6} ${t + 11} ${cx + 2} ${t + 6}"/>`;
const pHaut = (cx, t) => `<path class="aplat" ${EN} d="M${cx - 9} ${t + 12} L${cx - 26} ${t + 21} L${cx - 19} ${t + 35} L${cx - 12} ${t + 31} L${cx - 12} ${t + 60} L${cx + 12} ${t + 60} L${cx + 12} ${t + 31} L${cx + 19} ${t + 35} L${cx + 26} ${t + 21} L${cx + 9} ${t + 12} Q${cx} ${t + 20} ${cx - 9} ${t + 12} Z"/>`;
const pLong = (cx, t) => `<path fill="none" stroke="var(--pigment)" stroke-width="7" stroke-linecap="round" d="M${cx - 34} ${t + 46} C${cx - 22} ${t + 20} ${cx - 10} ${t + 20} ${cx} ${t + 36} S${cx + 22} ${t + 52} ${cx + 34} ${t + 26}"/>`;
const pPersonne = (cx, t) => `<circle class="aplat" ${EN} cx="${cx - 10}" cy="${t + 20}" r="8"/><path class="aplat" ${EN} d="M${cx - 24} ${t + 60} Q${cx - 24} ${t + 31} ${cx - 10} ${t + 31} Q${cx + 4} ${t + 31} ${cx + 4} ${t + 60} Z"/><circle class="aplat" ${EN} cx="${cx + 21}" cy="${t + 50}" r="9"/><path class="trait" d="M${cx + 21} ${t + 41} L${cx + 23} ${t + 35}"/>`;

const SVG_STRUCTURE = `<svg viewBox="0 0 400 210"><rect class="aplat-papier" ${EN} x="30" y="22" width="100" height="72" rx="8"/><rect class="aplat" ${EN} x="150" y="22" width="100" height="72" rx="8"/><rect class="aplat-papier" ${EN} x="270" y="22" width="100" height="72" rx="8"/>${zh(80, 64, "三", "", { n: 30 })}${tx(80, 84, "sān", { cl: "texte" })}${zh(200, 64, "本", "", { n: 30, cl: "texte-pigment" })}${tx(200, 84, "běn", { cl: "texte-pigment" })}${zh(320, 64, "书", "", { n: 30 })}${tx(320, 84, "shū", { cl: "texte" })}${tx(140, 64, "+", { cl: "texte-main" })}${tx(260, 64, "+", { cl: "texte-main" })}${tx(80, 112, "nombre : trois")}${tx(200, 112, "classificateur")}${tx(320, 112, "nom : livre")}${tx(200, 140, "= trois livres", { cl: "texte-main" })}<line class="pointille" x1="30" y1="160" x2="370" y2="160"/>${zh(200, 192, "三书", "✗ faux : il manque le classificateur", { n: 20 })}</svg>`;

const SVG_FAMILLES = `<svg viewBox="0 0 400 300">${caseCl(50, 0, pLivre(50, 0), "本", "běn", "livres,", "cahiers")}${caseCl(150, 0, pChat(150, 0), "只", "zhī", "la plupart", "des animaux")}${caseCl(250, 0, pFeuille(250, 0), "张", "zhāng", "objets", "plats")}${caseCl(350, 0, pTasse(350, 0), "杯", "bēi", "un verre,", "une tasse de…")}${caseCl(100, 152, pHaut(100, 152), "件", "jiàn", "vêtements", "du haut")}${caseCl(200, 152, pLong(200, 152), "条", "tiáo", "objets longs", "et souples")}${caseCl(300, 152, pPersonne(300, 152), "个", "gè", "personnes,", "objets variés")}</svg>`;

// Chapitre 2 : frise « fait / pas fait / à faire ».
const SVG_TEMPS = `<svg viewBox="0 0 400 218"><line class="trait" x1="16" y1="150" x2="384" y2="150" marker-end="url(#fl)"/><line class="pointille" x1="212" y1="30" x2="212" y2="150"/>${tx(212, 22, "maintenant", { cl: "texte-main" })}<circle cx="90" cy="150" r="5" fill="var(--encre)"/><circle cx="320" cy="150" r="5" fill="var(--encre)"/>${zh(90, 178, "昨天")}${tx(90, 195, "zuótiān", { cl: "texte" })}${tx(90, 210, "hier")}${zh(212, 178, "今天")}${tx(212, 195, "jīntiān", { cl: "texte" })}${tx(212, 210, "aujourd'hui")}${zh(320, 178, "明天")}${tx(320, 195, "míngtiān", { cl: "texte" })}${tx(320, 210, "demain")}<text class="texte" x="100" y="52" text-anchor="middle" style="font-size:18px">我买<tspan class="texte-pigment">了</tspan>一本书</text>${tx(100, 70, "c'est fait ✓")}<text class="texte" x="100" y="104" text-anchor="middle" style="font-size:18px">我<tspan class="texte-pigment">没</tspan>买衣服</text>${tx(100, 122, "pas eu lieu ✗")}${zh(318, 84, "明天我去北京")}<text class="texte-petit" x="318" y="103" text-anchor="middle">à venir : pas de <tspan style="font-size:14px">了</tspan></text></svg>`;

// Chapitre 3 : positions autour d'une boîte ; 在 et 有 en miroir.
const SVG_POSITIONS = `<svg viewBox="0 0 400 240">${tx(125, 18, "vu de face")}${tx(335, 18, "vu de dessus")}<line class="pointille" x1="268" y1="10" x2="268" y2="232"/><line class="trait" x1="12" y1="196" x2="256" y2="196"/><rect class="aplat" stroke="var(--encre)" stroke-width="1.8" x="70" y="95" width="100" height="65" rx="3"/><line class="trait" x1="80" y1="160" x2="80" y2="196"/><line class="trait" x1="160" y1="160" x2="160" y2="196"/><circle fill="var(--pigment)" cx="120" cy="84" r="11"/>${zh(138, 89, "上", "shàng", { a: "start" })}<circle class="pointille" cx="142" cy="128" r="11"/>${zh(80, 134, "里", "lǐ", { a: "start" })}<circle fill="var(--pigment)" cx="120" cy="185" r="11"/>${zh(120, 222, "下", "xià")}<circle fill="var(--pigment)" cx="205" cy="185" r="11"/>${zh(205, 222, "旁边", "pángbiān")}<rect class="aplat" stroke="var(--encre)" stroke-width="1.8" x="305" y="98" width="60" height="44" rx="3"/><circle fill="var(--pigment)" cx="335" cy="74" r="10"/>${zh(335, 52, "后边", "hòubian")}<circle fill="var(--pigment)" cx="335" cy="166" r="10"/>${zh(335, 198, "前边", "qiánbian")}<path class="trait" d="M308 222 Q320 212 332 222 Q320 232 308 222 Z"/><circle cx="320" cy="222" r="3" fill="var(--encre)"/>${tx(340, 227, "toi", { a: "start", cl: "texte-main" })}</svg>`;

const boite = (x, w, y, car, pin, pig = false) => `<rect class="${pig ? "aplat" : "aplat-papier"}" ${EN} x="${x}" y="${y}" width="${w}" height="46" rx="7"/>${zh(x + w / 2, y + 22, car, "", { cl: pig ? "texte-pigment" : "texte" })}${tx(x + w / 2, y + 39, pin, { cl: pig ? "texte-pigment" : "texte" })}`;
const SVG_ZAI_YOU = `<svg viewBox="0 0 400 234">${tx(200, 22, "Le livre est sur la table. (on situe un objet connu)", { cl: "texte" })}${boite(40, 80, 38, "书", "shū")}${boite(160, 60, 38, "在", "zài", true)}${boite(260, 100, 38, "桌子上", "zhuōzi shàng")}${boite(40, 100, 148, "桌子上", "zhuōzi shàng")}${boite(170, 60, 148, "有", "yǒu", true)}${boite(260, 100, 148, "一本书", "yì běn shū")}<line class="pointille" x1="82" y1="88" x2="300" y2="144" marker-end="url(#fl)"/><line class="pointille" x1="310" y1="88" x2="96" y2="144" marker-end="url(#fl)"/>${tx(200, 222, "Sur la table, il y a un livre. (on présente ce qui s'y trouve)", { cl: "texte" })}</svg>`;

// Chapitre 4 : postures et plan du quartier.
const SVG_POSTURES = `<svg viewBox="0 0 400 200"><path class="trait" d="M30 52 L32 86 L70 86 M34 86 L34 106 M68 86 L68 106"/><circle class="aplat" ${EN} cx="46" cy="40" r="8"/><path ${PERSO} d="M46 48 L42 82 L66 82 L74 104 L82 104 M45 58 L62 70"/><circle class="trait" cx="128" cy="92" r="15"/><circle class="trait" cx="172" cy="92" r="15"/><path class="trait" d="M128 92 L145 92 L160 68 L172 92 M145 92 L138 68 L160 68 M133 66 L144 66 M160 68 L165 59"/><circle class="aplat" ${EN} cx="146" cy="30" r="8"/><path ${PERSO} d="M146 38 L140 64 L153 80 L147 92 M145 45 L163 59"/><circle fill="none" stroke="var(--encre)" stroke-width="4" cx="250" cy="66" r="26"/><circle class="aplat-fort" cx="250" cy="66" r="6"/><path fill="none" stroke="var(--encre)" stroke-width="3" d="M226 66 L274 66 M250 66 L250 92"/><circle class="aplat" ${EN} cx="350" cy="30" r="8"/><path ${PERSO} d="M350 38 L348 70 L338 102 M348 70 L361 102 M350 48 L337 66 M350 48 L363 62"/>${zh(50, 134, "坐", "", { n: 24 })}${zh(150, 134, "骑", "", { n: 24 })}${zh(250, 134, "开", "", { n: 24 })}${zh(350, 134, "走路", "", { n: 24 })}${tx(50, 152, "zuò", { cl: "texte-pigment" })}${tx(150, 152, "qí", { cl: "texte-pigment" })}${tx(250, 152, "kāi", { cl: "texte-pigment" })}${tx(350, 152, "zǒulù", { cl: "texte-pigment" })}${tx(50, 168, "passager assis")}${tx(150, 168, "à califourchon")}${tx(250, 168, "au volant")}${tx(350, 168, "à pied")}${tx(50, 184, "bus, train, avion…")}${tx(150, 184, "vélo, moto, cheval")}<text class="texte-petit" x="250" y="185" text-anchor="middle"><tspan style="font-size:14px">开车</tspan> kāichē</text>${tx(350, 184, "marcher")}</svg>`;

const batiment = (x, y, w, h, car, pin) => `<rect class="trait" x="${x}" y="${y}" width="${w}" height="${h}" rx="4"/>${zh(x + w / 2, y + h / 2 + 1, car, "", { n: 16 })}${tx(x + w / 2, y + h / 2 + 17, pin)}`;
const SVG_PLAN = `<svg viewBox="0 0 400 285"><rect class="aplat" x="170" y="8" width="34" height="270"/><rect class="aplat" x="8" y="80" width="384" height="28"/><rect class="aplat" x="8" y="178" width="384" height="28"/>${batiment(20, 18, 68, 52, "银行", "yínháng")}${batiment(96, 18, 66, 52, "地铁站", "dìtiězhàn")}${batiment(214, 18, 80, 52, "医院", "yīyuàn")}${batiment(20, 118, 142, 50, "公园", "gōngyuán")}${batiment(214, 118, 90, 50, "超市", "chāoshì")}${batiment(20, 216, 142, 56, "学校", "xuéxiào")}<path fill="none" stroke="var(--pigment)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#fl-p)" d="M187 262 L187 94 L134 94"/><circle cx="187" cy="266" r="5" fill="var(--encre)"/>${tx(198, 272, "toi", { a: "start", cl: "texte-main" })}${zh(214, 240, "一直走", "yìzhí zǒu", { a: "start", n: 16 })}${zh(300, 198, "第一个路口", "", { n: 15 })}${zh(330, 100, "第二个路口", "", { n: 15 })}${zh(16, 99, "往左拐", "", { a: "start", n: 15, cl: "texte-pigment" })}</svg>`;

// Chapitre 5 : A 比 B ; résumé des trois structures.
const SVG_BI = `<svg viewBox="0 0 400 250"><line class="trait" x1="70" y1="150" x2="330" y2="150"/><circle class="aplat" ${EN} cx="150" cy="42" r="11"/><path ${PERSO} d="M150 53 L150 105 L140 150 M150 105 L160 150 M150 65 L134 92 M150 65 L166 92"/><circle class="aplat" ${EN} cx="250" cy="82" r="10"/><path ${PERSO} d="M250 92 L250 122 L242 150 M250 122 L258 150 M250 100 L238 118 M250 100 L262 118"/><line class="pointille" x1="138" y1="31" x2="305" y2="31"/><line class="pointille" x1="238" y1="72" x2="305" y2="72"/><line class="trait" x1="300" y1="70" x2="300" y2="36" marker-end="url(#fl)"/>${zh(312, 58, "高", "gāo", { a: "start", cl: "texte-pigment" })}${zh(150, 172, "哥哥", "gēge", { n: 16 })}${zh(250, 172, "我", "wǒ", { n: 16 })}${boite(30, 96, 186, "哥哥", "A")}${boite(140, 50, 186, "比", "bǐ", true)}${boite(204, 70, 186, "我", "B")}${boite(288, 80, 186, "高", "adjectif")}</svg>`;

const ligneComp = (y0, hA, hB, phrase, fr) => `<rect class="aplat-fort" x="30" y="${y0 + 50 - hA}" width="18" height="${hA}" rx="2"/><rect class="aplat" ${EN} x="56" y="${y0 + 50 - hB}" width="18" height="${hB}" rx="2"/>${tx(39, y0 + 46 - hA, "A")}${tx(65, y0 + 46 - hB, "B")}<line class="trait-fin" x1="22" y1="${y0 + 50}" x2="82" y2="${y0 + 50}"/><text class="texte" x="100" y="${y0 + 24}" style="font-size:18px">${phrase}</text>${tx(100, y0 + 44, fr, { a: "start", cl: "texte" })}`;
const SVG_TROIS = `<svg viewBox="0 0 400 210">${ligneComp(12, 38, 20, 'A <tspan class="texte-pigment">比</tspan> B 高', "A est plus grand que B.")}<line class="pointille" x1="20" y1="74" x2="380" y2="74"/>${ligneComp(78, 20, 38, 'A <tspan class="texte-pigment">没有</tspan> B <tspan class="texte-pigment">那么</tspan>高', "A n'est pas aussi grand que B.")}<line class="pointille" x1="20" y1="140" x2="380" y2="140"/>${ligneComp(144, 29, 29, 'A <tspan class="texte-pigment">跟</tspan> B <tspan class="texte-pigment">一样</tspan>高', "A est aussi grand que B.")}</svg>`;

// Chapitre 6 : vêtements, couleurs, monnaie.
const pPull = (cx, t) => `<path class="aplat" ${EN} d="M${cx - 9} ${t} L${cx - 24} ${t + 8} L${cx - 30} ${t + 46} L${cx - 22} ${t + 48} L${cx - 14} ${t + 20} L${cx - 13} ${t + 50} L${cx + 13} ${t + 50} L${cx + 14} ${t + 20} L${cx + 22} ${t + 48} L${cx + 30} ${t + 46} L${cx + 24} ${t + 8} L${cx + 9} ${t} Q${cx} ${t + 7} ${cx - 9} ${t} Z"/><line class="trait-fin" x1="${cx - 13}" y1="${t + 44}" x2="${cx + 13}" y2="${t + 44}"/>`;
const pPantalon = (cx, t) => `<path class="aplat" ${EN} d="M${cx - 15} ${t} L${cx + 15} ${t} L${cx + 17} ${t + 56} L${cx + 4} ${t + 56} L${cx} ${t + 18} L${cx - 4} ${t + 56} L${cx - 17} ${t + 56} Z"/>`;
const pJupe = (cx, t) => `<rect class="aplat-fort" x="${cx - 11}" y="${t}" width="22" height="6"/><path class="aplat" ${EN} d="M${cx - 11} ${t + 6} L${cx + 11} ${t + 6} L${cx + 22} ${t + 50} L${cx - 22} ${t + 50} Z"/>`;
const pChaussure = (sx, sy) => `<path class="aplat" ${EN} d="M${sx - 16} ${sy} L${sx - 16} ${sy - 16} L${sx - 6} ${sy - 16} Q${sx - 4} ${sy - 8} ${sx + 8} ${sy - 6} Q${sx + 16} ${sy - 4} ${sx + 16} ${sy} Z"/>`;
const SVG_HABITS = `<svg viewBox="0 0 400 212"><rect class="trait-fin" x="8" y="6" width="122" height="200" rx="8"/><rect class="trait-fin" x="139" y="6" width="122" height="200" rx="8"/><rect class="trait-fin" x="270" y="6" width="122" height="200" rx="8"/>${zh(69, 32, "件", "jiàn", { n: 22, cl: "texte-pigment" })}${zh(200, 32, "条", "tiáo", { n: 22, cl: "texte-pigment" })}${zh(331, 32, "双", "shuāng", { n: 22, cl: "texte-pigment" })}${tx(69, 48, "le haut du corps")}${tx(200, 48, "long : le bas")}${tx(331, 48, "une paire")}${pHaut(42, 52)}${pPull(98, 64)}${pPantalon(172, 60)}${pJupe(228, 62)}${pChaussure(313, 118)}${pChaussure(349, 118)}${zh(42, 146, "衬衫", "", { n: 16 })}${zh(98, 146, "毛衣", "", { n: 16 })}${zh(172, 146, "裤子", "", { n: 16 })}${zh(228, 146, "裙子", "", { n: 16 })}${zh(331, 146, "鞋", "", { n: 16 })}${tx(42, 162, "chènshān")}${tx(98, 162, "máoyī")}${tx(172, 162, "kùzi")}${tx(228, 162, "qúnzi")}${tx(331, 162, "xié")}${zh(69, 192, "一件毛衣", "", { n: 15, cl: "texte-pigment" })}${zh(200, 192, "一条裤子", "", { n: 15, cl: "texte-pigment" })}${zh(331, 192, "一双鞋", "", { n: 15, cl: "texte-pigment" })}</svg>`;

const couleur = (i, c, car, pin, fr) => { const cx = 34 + 66 * i; return `<rect class="${c}" stroke="var(--encre)" stroke-width="1.2" x="${cx - 22}" y="12" width="44" height="32" rx="6"/>${zh(cx, 68, car)}${tx(cx, 86, pin, { cl: "texte" })}${tx(cx, 102, fr)}`; };
const SVG_COULEURS = `<svg viewBox="0 0 400 112">${couleur(0, "c-rouge", "红色", "hóngsè", "rouge")}${couleur(1, "c-blanc", "白色", "báisè", "blanc")}${couleur(2, "c-noir", "黑色", "hēisè", "noir")}${couleur(3, "c-bleu", "蓝色", "lánsè", "bleu")}${couleur(4, "c-vert", "绿色", "lǜsè", "vert")}${couleur(5, "c-jaune", "黄色", "huángsè", "jaune")}</svg>`;

const pieces = [0, 1, 2, 3, 4].flatMap((i) => [36, 66].map((y) => `<circle class="aplat-papier" ${EN} cx="${160 + 26 * i}" cy="${y}" r="12"/>${zh(160 + 26 * i, y + 5, "毛", "", { n: 14 })}`)).join("");
const SVG_ARGENT = `<svg viewBox="0 0 400 190"><rect class="aplat" ${EN} x="18" y="24" width="96" height="54" rx="6"/><text class="texte" x="66" y="54" text-anchor="middle" style="font-size:18px">1 块</text><text class="texte-petit" x="66" y="70" text-anchor="middle">= 1 <tspan style="font-size:14px">元</tspan> yuán</text><text class="texte" x="134" y="58" text-anchor="middle" style="font-size:22px">=</text>${pieces}<text class="texte" x="284" y="58"><tspan style="font-size:18px">10 毛</tspan> máo</text><line class="pointille" x1="20" y1="98" x2="380" y2="98"/>${zh(200, 130, "二十五块五", "", { n: 22 })}<text class="texte" x="200" y="156" text-anchor="middle">= 25 <tspan style="font-size:15px">块</tspan> + 5 <tspan style="font-size:15px">毛</tspan> = 25,50 yuans</text>${tx(200, 178, "le dernier chiffre compte les dixièmes de yuan")}</svg>`;

// Chapitre 7 : saisons, thermomètre.
const carteSaison = (x0, y0, car, pin, fr, adj, icone) => `<rect class="aplat-papier" stroke="var(--encre)" stroke-width="1.2" x="${x0}" y="${y0}" width="182" height="98" rx="10"/>${zh(x0 + 16, y0 + 36, car, "", { a: "start", n: 24 })}${tx(x0 + 16, y0 + 56, pin, { a: "start", cl: "texte-pigment" })}${tx(x0 + 16, y0 + 72, fr, { a: "start" })}<text class="texte" x="${x0 + 16}" y="${y0 + 90}">${adj}</text>${icone(x0 + 150, y0 + 38)}`;
const iFleur = (cx, cy) => [0, 72, 144, 216, 288].map((a) => `<circle class="aplat" ${EN} cx="${(cx + 10 * Math.sin(a * Math.PI / 180)).toFixed(1)}" cy="${(cy - 10 * Math.cos(a * Math.PI / 180)).toFixed(1)}" r="7"/>`).join("") + `<circle class="aplat-fort" cx="${cx}" cy="${cy}" r="5"/>`;
const iSoleil = (cx, cy) => `<circle class="aplat-fort" cx="${cx}" cy="${cy}" r="11"/>` + [0, 45, 90, 135, 180, 225, 270, 315].map((a) => { const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180); return `<line class="trait" x1="${(cx + 15 * c).toFixed(1)}" y1="${(cy + 15 * s).toFixed(1)}" x2="${(cx + 21 * c).toFixed(1)}" y2="${(cy + 21 * s).toFixed(1)}"/>`; }).join("");
const iFeuille = (cx, cy) => `<path class="aplat-fort" d="M${cx - 16} ${cy + 14} Q${cx - 18} ${cy - 14} ${cx + 16} ${cy - 16} Q${cx + 14} ${cy + 14} ${cx - 16} ${cy + 14} Z"/><line class="trait" x1="${cx - 16}" y1="${cy + 14}" x2="${cx + 8}" y2="${cy - 8}"/>`;
const iFlocon = (cx, cy) => `<path class="trait" d="M${cx} ${cy - 20} L${cx} ${cy + 20} M${cx - 17.3} ${cy - 10} L${cx + 17.3} ${cy + 10} M${cx - 17.3} ${cy + 10} L${cx + 17.3} ${cy - 10} M${cx - 5} ${cy - 15} L${cx} ${cy - 10} L${cx + 5} ${cy - 15} M${cx - 5} ${cy + 15} L${cx} ${cy + 10} L${cx + 5} ${cy + 15}"/>`;
const SVG_SAISONS = `<svg viewBox="0 0 400 226">${carteSaison(12, 12, "春天", "chūntiān", "le printemps", '<tspan style="font-size:15px">暖和</tspan> nuǎnhuo : doux', iFleur)}${carteSaison(206, 12, "夏天", "xiàtiān", "l'été", '<tspan style="font-size:15px">热</tspan> rè : chaud', iSoleil)}${carteSaison(12, 118, "秋天", "qiūtiān", "l'automne", '<tspan style="font-size:15px">凉快</tspan> liángkuai : frais', iFeuille)}${carteSaison(206, 118, "冬天", "dōngtiān", "l'hiver", '<tspan style="font-size:15px">冷</tspan> lěng : froid', iFlocon)}</svg>`;

const graduation = (t, car, pin, fr) => { const y = 30 + (30 - t) * 3.5; return `<line class="trait" x1="142" y1="${y}" x2="152" y2="${y}"/>${zh(160, y + 5, car, pin, { a: "start", n: 16 })}${tx(110, y + 4, fr, { a: "end", cl: "texte" })}`; };
const SVG_THERMOMETRE = `<svg viewBox="0 0 400 250"><rect class="aplat-papier" ${EN} x="118" y="16" width="24" height="204" rx="12"/><rect class="aplat-fort" x="124" y="100" width="12" height="122"/><circle class="aplat-fort" stroke="var(--encre)" stroke-width="1.5" cx="130" cy="228" r="16"/>${graduation(30, "三十度", "sānshí dù", "30 °C")}${graduation(20, "二十度", "èrshí dù", "20 °C")}${graduation(10, "十度", "shí dù", "10 °C")}${graduation(0, "零度", "líng dù", "0 °C")}${graduation(-10, "零下十度", "língxià shí dù", "−10 °C")}${graduation(-20, "零下二十度", "língxià èrshí dù", "−20 °C")}<path class="trait" d="M64 142 L58 142 L58 205 L64 205"/>${zh(30, 168, "零下")}${tx(30, 186, "língxià", { cl: "texte-pigment" })}${tx(30, 201, "sous zéro")}</svg>`;

// Chapitre 8 : le corps.
const etiq = (x, y, car, pin, fr, a, x2, y2) => { const xl = a === "end" ? x + 4 : x - 4; return `${zh(x, y, car, pin, { a, n: 17 })}${tx(x, y + 14, fr, { a })}<line class="pointille" x1="${xl}" y1="${y - 5}" x2="${x2}" y2="${y2}"/>`; };
const SVG_CORPS = `<svg viewBox="0 0 400 310"><ellipse class="aplat" ${EN} cx="169" cy="55" rx="5" ry="9"/><ellipse class="aplat" ${EN} cx="231" cy="55" rx="5" ry="9"/><circle class="aplat" ${EN} cx="200" cy="55" r="30"/><circle cx="189" cy="49" r="3" fill="var(--encre)"/><circle cx="211" cy="49" r="3" fill="var(--encre)"/><path class="trait" d="M200 52 L196 63 L203 63"/><path class="trait" d="M189 71 Q200 80 211 71"/><line class="trait" x1="200" y1="85" x2="200" y2="95"/><path class="aplat" ${EN} d="M172 95 L228 95 L222 195 L178 195 Z"/><path ${PERSO} d="M174 100 L140 180 M226 100 L260 180 M186 195 L178 284 M214 195 L222 284"/><circle class="aplat" ${EN} cx="137" cy="188" r="8"/><circle class="aplat" ${EN} cx="263" cy="188" r="8"/><ellipse class="aplat" ${EN} cx="170" cy="292" rx="14" ry="6"/><ellipse class="aplat" ${EN} cx="230" cy="292" rx="14" ry="6"/>${etiq(118, 30, "头", "tóu", "la tête", "end", 176, 36)}${etiq(118, 64, "眼睛", "yǎnjing", "les yeux", "end", 186, 50)}${etiq(118, 98, "鼻子", "bízi", "le nez", "end", 197, 60)}${etiq(118, 190, "手", "shǒu", "la main", "end", 128, 188)}${etiq(118, 250, "腿", "tuǐ", "la jambe", "end", 181, 245)}${etiq(282, 46, "耳朵", "ěrduo", "l'oreille", "start", 237, 52)}${etiq(282, 82, "嘴", "zuǐ", "la bouche", "start", 211, 73)}${etiq(282, 118, "牙", "yá", "la dent", "start", 203, 76)}${etiq(282, 160, "肚子", "dùzi", "le ventre", "start", 214, 158)}${etiq(282, 280, "脚", "jiǎo", "le pied", "start", 245, 290)}</svg>`;

// Chapitre 9 : le calendrier 上 / 下.
const mois = (y, car, pin, fr, pig) => `<rect class="${pig ? "aplat" : "aplat-papier"}" ${EN} x="60" y="${y}" width="230" height="52" rx="8"/>${zh(80, y + 28, car, "", { a: "start", n: 20, cl: pig ? "texte-pigment" : "texte" })}${tx(80, y + 45, pin, { a: "start", cl: "texte-pigment" })}${tx(275, y + 32, fr, { a: "end", cl: "texte" })}`;
const SVG_CALENDRIER = `<svg viewBox="0 0 400 214">${mois(14, "上个月", "shàng ge yuè", "le mois dernier")}${mois(80, "这个月", "zhège yuè", "ce mois-ci", true)}${mois(146, "下个月", "xià ge yuè", "le mois prochain")}${zh(312, 36, "上", "shàng", { a: "start" })}${tx(312, 52, "en haut :", { a: "start" })}${tx(312, 65, "avant", { a: "start" })}<line class="trait" x1="324" y1="76" x2="324" y2="146" marker-end="url(#fl)"/>${zh(312, 172, "下", "xià", { a: "start" })}${tx(312, 188, "en bas :", { a: "start" })}${tx(312, 201, "après", { a: "start" })}</svg>`;

// Chapitre 10 : l'année lunaire.
const moisLunaires = Array.from({ length: 12 }, (_, i) => `${i ? `<line class="trait-fin" x1="${20 + 30 * i}" y1="104" x2="${20 + 30 * i}" y2="124"/>` : ""}${tx(35 + 30 * i, 118, String(i + 1))}`).join("");
const fete = (x, haut, car, pin, fr, date, icone, a = "start", xt = x - 8) => {
  const [y1, y2, y3, y4, l1, l2] = haut ? [36, 52, 66, 80, 72, 86] : [166, 182, 196, 210, 142, 152];
  return `${zh(xt, y1, car, pin, { a, n: 17 })}${tx(xt, y2, fr, { a })}${tx(xt, y3, date, { a })}<line class="trait-fin" x1="${x}" y1="${l1}" x2="${x}" y2="${l2}"/>${icone}`;
};
const SVG_LUNE = `<svg viewBox="0 0 400 236"><rect class="aplat" stroke="var(--encre)" stroke-width="1.2" x="20" y="104" width="360" height="20" rx="3"/>${moisLunaires}${tx(380, 98, "mois lunaires →", { a: "end" })}${fete(20, true, "春节", "Chūnjié", "fête du Printemps", "janv. ou févr.", '<circle class="pointille" cx="20" cy="93" r="6"/>')}${fete(145, true, "端午节", "Duānwǔjié", "fête des bateaux-dragons", "fin mai ou juin", '<path fill="var(--encre)" d="M145 87 L150 93 L145 99 L140 93 Z"/>', "start", 139)}${fete(35, false, "元宵节", "Yuánxiāojié", "fête des Lanternes", "févr. ou début mars", '<circle class="aplat-fort" cx="35" cy="135" r="6"/>', "start", 14)}${fete(245, false, "中秋节", "Zhōngqiūjié", "fête de la mi-automne", "sept. ou début oct.", '<circle class="aplat-fort" cx="245" cy="135" r="6"/>', "middle", 245)}<circle class="pointille" cx="66" cy="226" r="5"/>${tx(76, 230, "1er jour : nouvelle lune", { a: "start" })}<circle class="aplat-fort" cx="232" cy="226" r="5"/>${tx(242, 230, "15e jour : pleine lune", { a: "start" })}</svg>`;

export default {
  id: "4e-chinois",
  chapitres: {
    // ───────────────────────── 1. Les classificateurs ─────────────────────────
    "4e-chinois-01-classificateurs": {
      accroche: "Ton correspondant Wang Lei te fait visiter sa chambre en vidéo : 一本书 yì běn shū (un livre), 两只猫 liǎng zhī māo (deux chats), 三张照片 sān zhāng zhàopiàn (trois photos)… Pourquoi trois petits mots différents entre les nombres et les noms ? Parce qu'en chinois, on ne compte jamais un objet sans dire de quelle sorte d'objet il s'agit !",
      objectifs: [
        "Construire un groupe nombre + classificateur + nom",
        "Choisir le bon classificateur selon la forme ou la nature de l'objet",
        "Employer 两, 这, 那, 几 devant un classificateur",
        "Prononcer correctement 一 selon le ton qui suit",
      ],
      sections: [
        {
          titre: "Un petit mot entre le nombre et le nom",
          blocs: [
            { t: "texte", md: "En français, tu dis « trois livres ». En chinois, le nombre ne se colle jamais directement au nom : on glisse entre les deux un **classificateur** (量词 liàngcí, littéralement « mot de mesure »).\n\nLe français connaît un peu ce mécanisme : on dit « trois *feuilles* de papier », « deux *tasses* de thé », « une *paire* de chaussures ». Le chinois fait la même chose ==pour tous les noms==, même pour les livres et les personnes." },
            { t: "schema", titre: "Nombre + classificateur + nom", svg: SVG_STRUCTURE, legende: "三本书 sān běn shū : trois livres. Le classificateur 本 běn se place entre le nombre 三 sān et le nom 书 shū. Sans lui, la phrase est fausse." },
            { t: "propriete", titre: "La structure de base", md: "**nombre + classificateur + nom**\n三个人 sān ge rén : trois personnes\n三本书 sān běn shū : trois livres\nOn ne dit jamais *三书." },
            { t: "definition", terme: "个 gè, le classificateur le plus fréquent", md: "Il s'emploie pour les **personnes** et pour beaucoup d'objets qui n'ont pas de classificateur particulier : 一个朋友 yí ge péngyou (un ami), 一个苹果 yí ge píngguǒ (une pomme), 一个书包 yí ge shūbāo (un cartable).\nAttention : 个 ne remplace pas les autres classificateurs. On dit 一本书, jamais *一个书." },
            { t: "verifie", q: "Comment dit-on « trois amis » ?", choix: ["三朋友", "三个朋友", "朋友三个", "个三朋友"], bonne: 1, explication: "L'ordre est nombre + classificateur + nom : 三个朋友 sān ge péngyou. Les personnes prennent 个. Sans classificateur (三朋友), la phrase est fausse." },
          ],
        },
        {
          titre: "Chaque famille d'objets a son classificateur",
          blocs: [
            { t: "texte", md: "Le classificateur dit **la forme ou la nature** de l'objet. Quand tu apprends un nom, apprends-le avec son classificateur, comme tu apprends « le » ou « la » avec un nom français : 一本书, 一只猫, 一张纸." },
            { t: "schema", titre: "Sept familles de classificateurs", svg: SVG_FAMILLES, legende: "Ce qu'on lit (本), les animaux (只), le plat (张), ce qu'on boit (杯), le haut du corps (件), le long et souple (条), et 个 pour les personnes et bien d'autres objets." },
            { t: "tableau", titre: "Les classificateurs à connaître", entetes: ["Classificateur", "Pour…", "Exemples"], lignes: [
              ["本 běn", "les livres, les cahiers", "一本书 yì běn shū : un livre\n三本本子 sān běn běnzi : trois cahiers"],
              ["只 zhī", "la plupart des animaux", "一只猫 yì zhī māo : un chat\n两只鸟 liǎng zhī niǎo : deux oiseaux\n一只熊猫 yì zhī xióngmāo : un panda"],
              ["张 zhāng", "les objets plats", "一张纸 yì zhāng zhǐ : une feuille de papier\n三张照片 sān zhāng zhàopiàn : trois photos\n一张桌子 yì zhāng zhuōzi : une table ; 一张床 yì zhāng chuáng : un lit"],
              ["杯 bēi", "un verre, une tasse de…", "一杯水 yì bēi shuǐ : un verre d'eau\n一杯茶 yì bēi chá : une tasse de thé\n两杯咖啡 liǎng bēi kāfēi : deux cafés"],
              ["件 jiàn", "les vêtements du haut, les affaires", "一件衣服 yí jiàn yīfu : un vêtement\n一件衬衫 yí jiàn chènshān : une chemise\n一件事 yí jiàn shì : une chose à faire, une affaire"],
              ["条 tiáo", "les objets longs et souples", "一条裤子 yì tiáo kùzi : un pantalon\n一条鱼 yì tiáo yú : un poisson\n一条河 yì tiáo hé : une rivière ; 一条路 yì tiáo lù : une route"],
              ["个 gè", "les personnes, de nombreux objets", "一个人 yí ge rén : une personne\n一个苹果 yí ge píngguǒ : une pomme"],
            ] },
            { t: "attention", md: "Trois pièges classiques :\n• le **poisson** prend 条, parce qu'il est long, alors que la plupart des animaux prennent 只 : 一条鱼 yì tiáo yú ;\n• la **table** et le **lit** prennent 张, à cause de leur grande surface plate : 一张桌子, 一张床 ;\n• le **pantalon** prend 条 et non 件, réservé au haut du corps : 一条裤子, mais 一件衬衫." },
            { t: "verifie", q: "Quel classificateur emploie-t-on avec 照片 zhàopiàn (photo) ?", choix: ["本 běn", "张 zhāng", "条 tiáo", "杯 bēi"], bonne: 1, explication: "Une photo est plate, comme une feuille de papier : 一张照片 yì zhāng zhàopiàn. 本 sert pour les livres, 条 pour les objets longs, 杯 pour les boissons." },
          ],
        },
        {
          titre: "两, 这, 那, 几 se placent devant le classificateur",
          blocs: [
            { t: "propriete", titre: "« Deux » devant un classificateur : 两", md: "Devant un classificateur, « deux » se dit **两 liǎng**, jamais 二 èr : 两本书 liǎng běn shū (deux livres), 两个朋友 liǎng ge péngyou (deux amis).\n二 èr sert pour compter (一、二、三…), à l'intérieur des nombres (十二 shí'èr, douze ; 二十 èrshí, vingt) et pour les rangs (第二 dì-èr, deuxième). On dit donc 十二本书 shí'èr běn shū (douze livres)." },
            { t: "tableau", titre: "Les petits mots qui précèdent le classificateur", entetes: ["Mot", "Sens", "Exemple"], lignes: [
              ["这 zhè", "ce…-ci", "这本书 zhè běn shū : ce livre-ci"],
              ["那 nà", "ce…-là", "那只猫 nà zhī māo : ce chat-là"],
              ["哪 nǎ", "quel… ?", "哪件衣服？nǎ jiàn yīfu ? : quel vêtement ?"],
              ["几 jǐ", "combien ? (petit nombre)", "几本书？jǐ běn shū ? : combien de livres ?"],
              ["两 liǎng", "deux", "两杯茶 liǎng bēi chá : deux tasses de thé"],
            ] },
            { t: "exemple", titre: "Une question, une réponse", md: "— 你有几本中文书？Nǐ yǒu jǐ běn Zhōngwén shū ?\n— 我有两本。Wǒ yǒu liǎng běn.\n— Combien de livres de chinois as-tu ? — J'en ai deux.\nDans la réponse, on peut sous-entendre le nom (书), mais ==jamais le classificateur== : 我有两本." },
            { t: "astuce", md: "Ne confonds pas **那 nà** (4e ton, « ce…-là ») et **哪 nǎ** (3e ton, « quel… ? ») : le mot de question porte en plus la clé de la bouche 口, comme 吗 ma et 呢 ne." },
          ],
        },
        {
          titre: "Bien prononcer 一 (et deux 3es tons de suite)",
          blocs: [
            { t: "texte", md: "Le caractère 一 change de ton selon la syllabe qui le suit. Dans ce cours, le pinyin note le ton réellement prononcé : 一个 **yí** ge, mais 一本 **yì** běn." },
            { t: "tableau", titre: "Le ton de 一", entetes: ["Ce qui suit 一", "On dit", "Exemples"], lignes: [
              ["un 4e ton", "**yí** (2e ton)", "一个 yí ge (个 gè est au 4e ton), 一件 yí jiàn, 一样 yíyàng"],
              ["un 1er ton", "**yì** (4e ton)", "一杯 yì bēi, 一张 yì zhāng, 一只 yì zhī"],
              ["un 2e ton", "**yì** (4e ton)", "一条 yì tiáo, 一直 yìzhí"],
              ["un 3e ton", "**yì** (4e ton)", "一本 yì běn, 一点儿 yìdiǎnr"],
              ["rien (seul, en comptant, en fin de mot)", "**yī** (1er ton)", "一、二、三 ; 十一 shíyī ; 第一 dì-yī"],
            ] },
            { t: "propriete", titre: "Deux 3es tons qui se suivent", md: "Quand deux syllabes au 3e ton se suivent, ==la première se prononce au 2e ton==. 两本 liǎng běn se dit « liáng běn », comme 你好 nǐ hǎo se dit « ní hǎo ». Le pinyin écrit, lui, ne change pas : on garde liǎng běn." },
            { t: "exemple", titre: "Lire 我有一只猫和两本书。", etapes: [
              "只 zhī est au 1er ton : 一 se dit **yì** → yì zhī.",
              "两 liǎng et 本 běn sont deux 3es tons : on prononce « liáng běn ».",
              "我 wǒ et 有 yǒu aussi : on prononce « wó yǒu ».",
              "Résultat : Wǒ yǒu yì zhī māo hé liǎng běn shū. J'ai un chat et deux livres.",
            ] },
            { t: "verifie", q: "Comment se prononce 一 dans 一件衬衫 (une chemise) ?", choix: ["yī (1er ton)", "yí (2e ton)", "yì (4e ton)"], bonne: 1, explication: "件 jiàn est au 4e ton : devant un 4e ton, 一 se dit yí. On dit donc yí jiàn chènshān." },
          ],
        },
      ],
      bilan: "Nombre + classificateur + nom : 本 pour ce qu'on lit, 只 pour les animaux, 张 pour le plat, 杯 pour ce qu'on boit, 件 pour le haut, 条 pour le long, 个 pour les personnes… et « deux » se dit 两.",
    },

    // ───────────────────────── 2. L'aspect accompli : 了 et 没(有) ─────────────────────────
    "4e-chinois-02-aspect-le-passe": {
      accroche: "Lundi matin, ton ami Xiaoming te demande : 你周末做什么了？Nǐ zhōumò zuò shénme le ? (Qu'est-ce que tu as fait ce week-end ?) Pas de passé composé, pas de terminaison à apprendre : en chinois, un tout petit mot, 了, suffit à dire que c'est fait.",
      objectifs: [
        "Situer une action dans le temps avec un mot de temps, sans conjuguer",
        "Dire qu'une action est accomplie avec 了",
        "Nier une action passée avec 没(有), sans 了, et la distinguer de 不",
        "Poser une question sur le passé et y répondre (还没有…)",
      ],
      sections: [
        {
          titre: "Un verbe qui ne se conjugue jamais",
          blocs: [
            { t: "texte", md: "En chinois, le verbe garde toujours la même forme. 我去 wǒ qù peut signifier « je vais » ou « j'irai » : c'est le contexte qui décide.\n\nPour situer l'action, on ajoute un **mot de temps**, placé ==avant le verbe== : juste après le sujet (我昨天去…) ou en tête de phrase (昨天我去…)." },
            { t: "tableau", titre: "Des mots pour situer dans le passé", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [
              ["昨天", "zuótiān", "hier"],
              ["今天", "jīntiān", "aujourd'hui"],
              ["上个星期", "shàng ge xīngqī", "la semaine dernière"],
              ["上个月", "shàng ge yuè", "le mois dernier"],
              ["去年", "qùnián", "l'année dernière"],
            ] },
            { t: "astuce", md: "Tous ces mots contiennent un repère : 天 tiān (jour), 星期 xīngqī (semaine), 月 yuè (mois), 年 nián (année). Et **上 shàng** (« dessus ») marque ce qui précède : 上个星期, la semaine d'avant." },
            { t: "attention", md: "Ne place pas le mot de temps à la fin comme en français (« je suis allé à Pékin hier ») : on dit 我昨天去北京了, jamais *我去北京了昨天." },
          ],
        },
        {
          titre: "了 : l'action est accomplie",
          blocs: [
            { t: "definition", terme: "了 le, la marque de l'accompli", md: "了 se prononce **le**, au ton neutre. Placé juste après le verbe, il indique que l'action est **accomplie**, réalisée : 我吃了 wǒ chī le, j'ai mangé ; 我买了一本书 wǒ mǎi le yì běn shū, j'ai acheté un livre." },
            { t: "schema", titre: "Fait, pas fait, à faire", svg: SVG_TEMPS, legende: "Hier, l'achat du livre a eu lieu : 了. L'achat des vêtements (衣服 yīfu) n'a pas eu lieu : 没, sans 了. Demain (明天我去北京 : demain, je vais à Pékin), rien n'est encore fait : pas de 了." },
            { t: "texte", md: "Quand le complément est un simple lieu, 了 se met souvent **en fin de phrase** : 我昨天去北京了。Wǒ zuótiān qù Běijīng le. (Hier, je suis allé à Pékin.)\nAvec un nombre et un classificateur, on le place juste après le verbe : 昨天我喝了两杯茶。Zuótiān wǒ hē le liǎng bēi chá. (Hier, j'ai bu deux tasses de thé.)" },
            { t: "attention", md: "了 n'est pas un « passé » automatique. Une **habitude** passée n'en prend pas : 去年我每天走路去学校。Qùnián wǒ měi tiān zǒulù qù xuéxiào. (L'an dernier, j'allais à l'école à pied tous les jours.) Ici, 每天 měi tiān (tous les jours) décrit une habitude, pas une action ponctuelle accomplie." },
            { t: "verifie", q: "Dans quelle phrase faut-il employer 了 ?", choix: ["« Hier, j'ai acheté un pull. »", "« L'an dernier, j'allais au collège à vélo tous les jours. »", "« Demain, je vais à Pékin. »"], bonne: 0, explication: "L'achat d'hier est une action ponctuelle accomplie : 昨天我买了一件毛衣 (毛衣 máoyī : pull). L'habitude (tous les jours) et le futur (demain) ne prennent pas 了." },
          ],
        },
        {
          titre: "没(有) : l'action n'a pas eu lieu",
          blocs: [
            { t: "propriete", titre: "La négation de l'accompli", md: "**没(有) méi(yǒu) + verbe**, ==sans 了== : 我没去 wǒ méi qù ou 我没有去 wǒ méiyǒu qù (je n'y suis pas allé).\nLogique : 了 dit que l'action a eu lieu, 没 dit qu'elle n'a pas eu lieu. Les deux ne vont pas ensemble : *我没吃了 est faux, on dit 我没吃 wǒ méi chī (je n'ai pas mangé)." },
            { t: "tableau", titre: "不 ou 没 ?", entetes: ["Négation", "Ce qu'elle nie", "Exemples"], lignes: [
              ["不 bù", "le présent, l'habitude, la volonté, le futur", "我不去。Wǒ bú qù. Je n'y vais pas, je ne veux pas y aller.\n我不喝咖啡。Wǒ bù hē kāfēi. Je ne bois pas de café."],
              ["没(有) méi(yǒu)", "une action passée qui n'a pas eu lieu", "我没去。Wǒ méi qù. Je n'y suis pas allé.\n他没买裤子。Tā méi mǎi kùzi. Il n'a pas acheté de pantalon."],
            ] },
            { t: "exemple", titre: "Traduire « Hier, je ne suis pas allé au cinéma »", etapes: [
              "L'action est passée et n'a pas eu lieu : négation **没**.",
              "没 se place **devant** le verbe 去 qù (aller).",
              "Pas de 了 avec 没.",
              "Résultat : 我昨天没去电影院。Wǒ zuótiān méi qù diànyǐngyuàn. (电影院 diànyǐngyuàn : cinéma)",
            ] },
            { t: "verifie", q: "Comment dit-on « Hier, je n'ai pas acheté de vêtements » ?", choix: ["我昨天没买衣服。", "我昨天没买了衣服。", "我昨天不买衣服。", "我昨天买没衣服。"], bonne: 0, explication: "Action passée qui n'a pas eu lieu : 没 devant le verbe, sans 了. 不 ne nie pas un fait passé, et la négation ne se place jamais après le verbe." },
          ],
        },
        {
          titre: "Poser une question sur le passé",
          blocs: [
            { t: "texte", md: "Pour demander si une action a eu lieu, deux tournures sont possibles : ajouter **吗 ma** à la fin (你吃了吗？), ou ajouter **没有 méiyǒu** (你吃了没有？). Pour répondre, on reprend simplement le verbe." },
            { t: "tableau", titre: "Questions et réponses", entetes: ["Question", "Oui", "Non", "Pas encore"], lignes: [
              ["你吃了吗？Nǐ chī le ma ? Tu as mangé ?", "吃了。Chī le.", "没有。Méiyǒu.", "还没(有)。Hái méi(yǒu)."],
              ["你去了没有？Nǐ qù le méiyǒu ? Tu y es allé ?", "去了。Qù le.", "没去。Méi qù.", "还没去。Hái méi qù."],
            ] },
            { t: "attention", md: "**还没(有) hái méi(yǒu)**, c'est « pas encore » (还 hái : encore) : 我还没吃 wǒ hái méi chī, je n'ai pas encore mangé. Ne le confonds pas avec 不吃了 bù chī le (je ne mange plus, j'arrête) ni avec 没有了 méiyǒu le (il n'y en a plus)." },
            { t: "exemple", titre: "Raconter son samedi", md: "昨天我去了商店，买了两本书。我没买衣服。\nZuótiān wǒ qù le shāngdiàn, mǎi le liǎng běn shū. Wǒ méi mǎi yīfu.\nHier, je suis allé au magasin (商店 shāngdiàn) et j'ai acheté deux livres. Je n'ai pas acheté de vêtements.\nLes actions réalisées prennent 了 ; celle qui n'a pas eu lieu prend 没, sans 了." },
          ],
        },
      ],
      bilan: "了 dit « c'est fait », 没 dit « ça n'a pas eu lieu » (jamais les deux ensemble), et 不 garde le présent, l'habitude et la volonté.",
    },

    // ───────────────────────── 3. La localisation ─────────────────────────
    "4e-chinois-03-localisation": {
      accroche: "« Où est mon portable ? » En chinois, la réponse se construit à l'envers du français : on ne dit pas « sur la table » mais « table-dessus », 桌子上 zhuōzi shàng. Une fois ce réflexe pris, tu sauras situer n'importe quoi.",
      objectifs: [
        "Dire où se trouve quelqu'un ou quelque chose avec 在",
        "Placer les mots de localisation (上, 下, 里, 前边, 后边, 旁边) après le nom",
        "Choisir entre 在 (situer) et 有 (il y a)",
        "Demander et indiquer un lieu avec 哪儿, 这儿, 那儿",
      ],
      sections: [
        {
          titre: "在 : se trouver quelque part",
          blocs: [
            { t: "propriete", titre: "Situer avec 在", md: "**personne ou objet + 在 zài + lieu** : être à, se trouver à.\n我在家。Wǒ zài jiā. Je suis à la maison.\n我妈妈在学校。Wǒ māma zài xuéxiào. Ma mère est à l'école.\nPour situer, on emploie 在 et non 是 : on ne dit pas *猫是床下." },
            { t: "texte", md: "Quand on fait une action dans un lieu, le groupe **在 + lieu** se place ==avant le verbe==, contrairement au français :\n我在学校吃饭。Wǒ zài xuéxiào chīfàn. Je mange à l'école.\n我哥哥在医院工作。Wǒ gēge zài yīyuàn gōngzuò. Mon grand frère travaille à l'hôpital (医院 yīyuàn)." },
          ],
        },
        {
          titre: "Les mots de localisation se placent après le nom",
          blocs: [
            { t: "texte", md: "桌子上 se lit « table + dessus ». Le nom de référence vient d'abord, le mot de position ensuite : 桌子上 zhuōzi shàng (sur la table), 床下 chuáng xià (sous le lit), 书包里 shūbāo lǐ (dans le cartable)." },
            { t: "schema", titre: "Où est la balle ?", svg: SVG_POSITIONS, legende: "À gauche, la boîte vue de face : 上 sur, 里 dedans, 下 dessous, 旁边 à côté. À droite, vue de dessus : 前边 devant (entre toi et la boîte), 后边 derrière." },
            { t: "tableau", titre: "Formes courtes et formes longues", entetes: ["Court", "Long", "Sens", "Exemple"], lignes: [
              ["上 shàng", "上边 shàngbian", "sur, dessus", "桌子上 zhuōzi shàng : sur la table"],
              ["下 xià", "下边 xiàbian", "sous, dessous", "床下 chuáng xià : sous le lit"],
              ["里 lǐ", "里边 lǐbian", "dans, dedans", "书包里 shūbāo lǐ : dans le cartable"],
              ["前 qián", "前边 qiánbian", "devant", "学校前边 xuéxiào qiánbian : devant l'école"],
              ["后 hòu", "后边 hòubian", "derrière", "学校后边 xuéxiào hòubian : derrière l'école"],
              ["—", "旁边 pángbiān", "à côté", "电脑旁边 diànnǎo pángbiān : à côté de l'ordinateur"],
            ] },
            { t: "astuce", md: "Pour 上, 下, 里, 前 et 后, on entend aussi 面 à la place de 边 : 上面 shàngmian, 后面 hòumian. Avec 前 et 后, préfère les formes longues : 学校前边, 学校后边." },
            { t: "attention", md: "Deux règles importantes :\n• avec un **objet ordinaire**, le mot de localisation est obligatoire : 书在桌子上 (et non *书在桌子) ;\n• avec un **nom de pays ou de ville**, on n'en met pas : 我在北京 wǒ zài Běijīng, 她在中国 tā zài Zhōngguó (et non *中国里).\nEt garde l'ordre : 上桌子 voudrait dire « monter sur la table » !" },
            { t: "verifie", q: "Comment dit-on « Le chat est sous le lit » ?", choix: ["猫在床下。", "猫在下床。", "猫是床下。", "床下猫在。"], bonne: 0, explication: "Objet + 在 + nom + mot de localisation : 猫在床下 māo zài chuáng xià. 下 suit le nom 床 ; 下床 voudrait dire « descendre du lit ». Pour situer, on emploie 在, pas 是." },
          ],
        },
        {
          titre: "在 ou 有 : situer ou présenter",
          blocs: [
            { t: "propriete", titre: "Deux constructions en miroir", md: "**objet connu + 在 + lieu** : on dit où se trouve une chose dont on parle déjà. 书在桌子上。Shū zài zhuōzi shàng. Le livre est sur la table.\n**lieu + 有 yǒu + objet** : on présente ce qu'il y a dans un lieu. 桌子上有一本书。Zhuōzi shàng yǒu yì běn shū. Sur la table, il y a un livre." },
            { t: "schema", titre: "Le même livre, deux phrases", svg: SVG_ZAI_YOU, legende: "Avec 在, la phrase part de l'objet. Avec 有, elle part du lieu et présente ce qu'on y découvre, souvent avec un nombre et un classificateur." },
            { t: "exemple", titre: "Décrire sa chambre", md: "我的房间里有一张床和一张桌子。桌子上有三本书，床下有两只猫！\nWǒ de fángjiān lǐ yǒu yì zhāng chuáng hé yì zhāng zhuōzi. Zhuōzi shàng yǒu sān běn shū, chuáng xià yǒu liǎng zhī māo !\nDans ma chambre (房间 fángjiān), il y a un lit et une table. Sur la table, il y a trois livres, et sous le lit, deux chats !" },
            { t: "verifie", q: "Comment dit-on « Derrière l'école, il y a un parc » ?", choix: ["学校后边有一个公园。", "一个公园有学校后边。", "学校后边在一个公园。", "有学校后边一个公园。"], bonne: 0, explication: "On présente ce qu'il y a dans un lieu : lieu (学校后边) + 有 + objet (一个公园 yí ge gōngyuán, un parc)." },
          ],
        },
        {
          titre: "哪儿, 这儿, 那儿 : où ? ici, là-bas",
          blocs: [
            { t: "tableau", titre: "Trois mots de lieu", entetes: ["Mot", "Autre forme", "Sens"], lignes: [
              ["哪儿 nǎr", "哪里 nǎlǐ", "où ?"],
              ["这儿 zhèr", "这里 zhèlǐ", "ici"],
              ["那儿 nàr", "那里 nàlǐ", "là-bas"],
            ] },
            { t: "astuce", md: "**哪儿 nǎr** (3e ton) pose la question ; **那儿 nàr** (4e ton) montre un endroit éloigné. Le mot de question porte la clé de la bouche 口. Et il se place là où sera la réponse : 猫在床下 → 猫在哪儿？Māo zài nǎr ? (Où est le chat ?)" },
            { t: "exemple", titre: "Chercher son portable", md: "— 我的手机在哪儿？— 在桌子上，在电脑旁边。\n— 我们的猫呢？— 它在床下！\nWǒ de shǒujī zài nǎr ? — Zài zhuōzi shàng, zài diànnǎo pángbiān. — Wǒmen de māo ne ? — Tā zài chuáng xià !\n— Où est mon portable ? — Sur la table, à côté de l'ordinateur. — Et notre chat ? — Il est sous le lit !" },
            { t: "verifie", q: "Que signifie 那儿 nàr ?", choix: ["où ?", "ici", "là-bas"], bonne: 2, explication: "那儿 nàr (4e ton) signifie « là-bas ». « Où ? » se dit 哪儿 nǎr (3e ton, avec la clé 口) et « ici » 这儿 zhèr." },
          ],
        },
      ],
      bilan: "Le nom d'abord, la position ensuite : 桌子上, 床下, 学校旁边. 在 situe ce qu'on connaît, 有 présente ce qu'on découvre, et 哪儿 cherche.",
    },

    // ───────────────────────── 4. Transports et directions ─────────────────────────
    "4e-chinois-04-transports-direction": {
      accroche: "À Pékin, pour aller au collège, Lili prend le métro, son frère enfourche son vélo et leur père conduit. Trois façons de se déplacer, trois verbes différents : en chinois, le verbe dit ta position dans le véhicule !",
      objectifs: [
        "Choisir le bon verbe : 坐, 骑 ou 开",
        "Dire comment on va quelque part : sujet + moyen + 去 + lieu",
        "Demander son chemin et comprendre la réponse (一直走, 往左拐, 往右拐)",
        "Dire si un lieu est près ou loin avec 离",
      ],
      sections: [
        {
          titre: "坐, 骑, 开 : le verbe dit ta posture",
          blocs: [
            { t: "schema", titre: "Quatre façons de se déplacer", svg: SVG_POSTURES, legende: "坐 zuò : on est assis comme passager. 骑 qí : on est à califourchon. 开 kāi : on tient le volant. 走路 zǒulù : on marche." },
            { t: "tableau", titre: "Le bon verbe pour chaque moyen de transport", entetes: ["Verbe", "Moyens de transport", "Exemple"], lignes: [
              ["坐 zuò (être assis)", "公共汽车 gōnggòng qìchē (bus), 地铁 dìtiě (métro), 火车 huǒchē (train), 飞机 fēijī (avion), 出租车 chūzūchē (taxi)", "坐地铁 zuò dìtiě : prendre le métro"],
              ["骑 qí (être à califourchon)", "自行车 zìxíngchē (vélo), 摩托车 mótuōchē (moto), 马 mǎ (cheval)", "骑自行车 qí zìxíngchē : aller à vélo"],
              ["开 kāi (conduire)", "车 chē (voiture)", "开车 kāichē : conduire"],
              ["—", "à pied", "走路 zǒulù : marcher"],
            ] },
            { t: "savais-tu", md: "Beaucoup de ces mots se décomposent : 飞机 fēijī, la « machine qui vole » ; 火车 huǒchē, le « véhicule à feu » (les premiers trains roulaient à la vapeur) ; 地铁 dìtiě, le « fer sous la terre » ; 自行车 zìxíngchē, le « véhicule qui avance tout seul »." },
            { t: "attention", md: "Le passager d'un avion **坐飞机 zuò fēijī**. 开飞机 kāi fēijī veut dire « piloter un avion » : c'est le métier du pilote !" },
            { t: "verifie", q: "Quel verbe emploie-t-on avec 摩托车 mótuōchē (moto) ?", choix: ["坐 zuò", "骑 qí", "开 kāi"], bonne: 1, explication: "On est à califourchon sur une moto, comme sur un vélo ou un cheval : 骑摩托车 qí mótuōchē." },
          ],
        },
        {
          titre: "Comment vas-tu à l'école ?",
          blocs: [
            { t: "propriete", titre: "L'ordre de la phrase", md: "**sujet + (mot de temps) + moyen de transport + 去 qù + lieu**\n我坐地铁去学校。Wǒ zuò dìtiě qù xuéxiào. Je vais à l'école en métro.\nLe moyen de transport se place ==avant== le verbe 去, alors qu'en français il vient après." },
            { t: "texte", md: "Pour poser la question, on emploie **怎么 zěnme** (comment) devant le verbe : 你怎么去学校？Nǐ zěnme qù xuéxiào ? (Comment vas-tu à l'école ?)\nOn répond en remplaçant 怎么 par le moyen de transport : 我走路去学校 wǒ zǒulù qù xuéxiào (j'y vais à pied), 我骑自行车去 wǒ qí zìxíngchē qù (j'y vais à vélo)." },
            { t: "exemple", titre: "Traduire « Mon père va au travail en voiture tous les jours »", etapes: [
              "Sujet : 我爸爸 wǒ bàba (mon père).",
              "Mot de temps : 每天 měi tiān (tous les jours).",
              "Moyen : il conduit → 开车 kāichē.",
              "Déplacement : 去上班 qù shàngbān (aller au travail).",
              "Résultat : 我爸爸每天开车去上班。Wǒ bàba měi tiān kāichē qù shàngbān.",
            ] },
            { t: "verifie", q: "Comment dit-on « Je vais à Pékin en train » ?", choix: ["我坐火车去北京。", "我去北京坐火车。", "我骑火车去北京。", "我开火车去北京。"], bonne: 0, explication: "Le moyen (坐火车) se place avant 去 + lieu. 骑 est pour ce qu'on chevauche, et 开火车 voudrait dire « conduire le train »." },
          ],
        },
        {
          titre: "Demander et indiquer son chemin",
          blocs: [
            { t: "texte", md: "Pour demander poliment, commence par **请问 qǐngwèn** (excusez-moi, puis-je vous demander…), puis le lieu et **怎么走 zěnme zǒu** (comment y va-t-on ?) :\n请问，火车站怎么走？Qǐngwèn, huǒchēzhàn zěnme zǒu ? Pardon, comment va-t-on à la gare ?" },
            { t: "tableau", titre: "Comprendre la réponse", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [
              ["一直走", "yìzhí zǒu", "aller tout droit"],
              ["往左拐", "wǎng zuǒ guǎi", "tourner à gauche"],
              ["往右拐", "wǎng yòu guǎi", "tourner à droite"],
              ["到…", "dào…", "arriver à, jusqu'à…"],
              ["路口", "lùkǒu", "le carrefour"],
              ["第二个路口", "dì-èr ge lùkǒu", "le deuxième carrefour"],
              ["然后", "ránhòu", "ensuite"],
              ["左边 / 右边", "zuǒbian / yòubian", "à gauche / à droite"],
            ] },
            { t: "schema", titre: "Le chemin jusqu'à la station de métro", svg: SVG_PLAN, legende: "Tu pars d'en bas : 一直走 (tout droit), tu passes le premier carrefour (第一个路口 dì-yī ge lùkǒu), puis au deuxième (第二个路口 dì-èr ge lùkǒu) tu tournes à gauche (往左拐). La station de métro (地铁站 dìtiězhàn) est à côté de la banque (银行 yínháng). Autour : l'hôpital (医院), le parc (公园), le supermarché (超市) et l'école (学校)." },
            { t: "exemple", titre: "Le dialogue du plan", md: "— 请问，地铁站怎么走？\n— 一直走，到第二个路口往左拐，地铁站就在银行旁边。\nQǐngwèn, dìtiězhàn zěnme zǒu ? — Yìzhí zǒu, dào dì-èr ge lùkǒu wǎng zuǒ guǎi, dìtiězhàn jiù zài yínháng pángbiān.\n— Pardon, pour aller à la station de métro ? — Va tout droit, au deuxième carrefour tourne à gauche : la station est juste (就 jiù) à côté de la banque." },
            { t: "astuce", md: "左 zuǒ (gauche) et 右 yòu (droite) se ressemblent. 右 contient 口, la bouche : pense à la main droite qui porte les baguettes à la bouche. 左 contient 工. On entend aussi 往左转 wǎng zuǒ zhuǎn : 转 et 拐 veulent tous deux dire « tourner »." },
          ],
        },
        {
          titre: "Près ou loin : 离",
          blocs: [
            { t: "propriete", titre: "La distance", md: "**A 离 lí B + 很近 hěn jìn / 很远 hěn yuǎn** : A est près de B / loin de B.\n学校离我家很近。Xuéxiào lí wǒ jiā hěn jìn. L'école est près de chez moi.\n火车站离这儿很远。Huǒchēzhàn lí zhèr hěn yuǎn. La gare est loin d'ici." },
            { t: "attention", md: "近 jìn et 远 yuǎn sont des adjectifs : comme 冷 ou 高, ils prennent normalement 很 devant eux (很近, 很远). À la négation, on emploie 不 : 不远 bù yuǎn, pas loin." },
            { t: "verifie", q: "Que signifie 我家离学校很远 ?", choix: ["Chez moi, c'est loin de l'école.", "Chez moi, c'est près de l'école.", "Je vais à l'école à pied.", "L'école est à côté de chez moi."], bonne: 0, explication: "A (我家, chez moi) 离 B (学校, l'école) 很远 (loin) : chez moi est loin de l'école. « Près » se dirait 很近 hěn jìn." },
          ],
        },
      ],
      bilan: "坐 si tu es assis, 骑 si tu es à califourchon, 开 si tu conduis ; le moyen passe avant 去 ; et pour trouver ton chemin : 一直走, 往左拐, 往右拐.",
    },

    // ───────────────────────── 5. La comparaison ─────────────────────────
    "4e-chinois-05-comparaison": {
      accroche: "Ton grand frère te dépasse d'une tête, Pékin grelotte quand Shanghai reste au-dessus de zéro, le train file plus vite que le bus… Pour comparer, le chinois n'a besoin que d'un mot : 比 bǐ, « comparé à ».",
      objectifs: [
        "Construire un comparatif de supériorité : A 比 B + adjectif",
        "Nuancer avec 多了, 一点儿 ou un écart chiffré",
        "Dire « pas aussi … que » avec 没有…那么",
        "Dire « aussi … que » avec 跟…一样",
      ],
      sections: [
        {
          titre: "A 比 B + adjectif",
          blocs: [
            { t: "schema", titre: "A 比 B + adjectif : 哥哥比我高", svg: SVG_BI, legende: "哥哥比我高。Gēge bǐ wǒ gāo. Mon grand frère est plus grand que moi. A (哥哥) possède la qualité au plus haut degré, 比 introduit B (我), et l'adjectif (高) termine la phrase." },
            { t: "propriete", titre: "Le comparatif de supériorité", md: "**A 比 bǐ B + adjectif** = A est plus … que B.\n猫比狗小。Māo bǐ gǒu xiǎo. Le chat est plus petit que le chien.\n今天比昨天冷。Jīntiān bǐ zuótiān lěng. Aujourd'hui, il fait plus froid qu'hier." },
            { t: "tableau", titre: "Des adjectifs qui vont par paires", entetes: ["Adjectif", "Contraire", "Exemple"], lignes: [
              ["高 gāo : grand (de taille)", "矮 ǎi : petit (de taille)", "哥哥比我高。Gēge bǐ wǒ gāo."],
              ["大 dà : grand, âgé", "小 xiǎo : petit, jeune", "猫比狗小。Māo bǐ gǒu xiǎo."],
              ["贵 guì : cher", "便宜 piányi : bon marché", "这本书比那本贵。Zhè běn shū bǐ nà běn guì. Ce livre-ci est plus cher que celui-là."],
              ["快 kuài : rapide", "慢 màn : lent", "火车比公共汽车快。Huǒchē bǐ gōnggòng qìchē kuài. Le train est plus rapide que le bus."],
              ["冷 lěng : froid", "热 rè : chaud", "今天比昨天冷。Jīntiān bǐ zuótiān lěng."],
            ] },
            { t: "attention", md: "La règle d'or : dans une phrase en 比, ==jamais 很 hěn ni 非常 fēicháng== devant l'adjectif. *哥哥比我很高 est faux. Pour insister, un seul adverbe est possible devant l'adjectif : **更 gèng** (encore plus) : 他比我更高 tā bǐ wǒ gèng gāo." },
            { t: "verifie", q: "Laquelle de ces phrases est correcte ?", choix: ["我比你很高。", "我比你高。", "我很高比你。", "我比你非常高。"], bonne: 1, explication: "A 比 B + adjectif, sans 很 ni 非常 : 我比你高 wǒ bǐ nǐ gāo, je suis plus grand que toi." },
          ],
        },
        {
          titre: "Beaucoup plus, un peu plus, trois ans de plus",
          blocs: [
            { t: "propriete", titre: "Nuancer après l'adjectif", md: "Les nuances se placent ==après l'adjectif== :\n• **多了 duō le** ou **得多 de duō** : beaucoup plus. 火车比公共汽车快多了。Le train est beaucoup plus rapide que le bus.\n• **一点儿 yìdiǎnr** : un peu plus. 他比我高一点儿。Tā bǐ wǒ gāo yìdiǎnr. Il est un peu plus grand que moi.\n• un **écart chiffré** : 我比妹妹大三岁。Wǒ bǐ mèimei dà sān suì. J'ai trois ans de plus que ma petite sœur." },
            { t: "exemple", titre: "Traduire « Ce pantalon-ci est un peu plus cher que celui-là »", etapes: [
              "A : 这条裤子 zhè tiáo kùzi (ce pantalon-ci, avec son classificateur 条).",
              "比 + B : 比那条 bǐ nà tiáo (le nom peut être sous-entendu, pas le classificateur).",
              "Adjectif : 贵 guì (cher), puis la nuance 一点儿 yìdiǎnr.",
              "Résultat : 这条裤子比那条贵一点儿。Zhè tiáo kùzi bǐ nà tiáo guì yìdiǎnr.",
            ] },
            { t: "astuce", md: "Pour l'âge, on compare avec **大 dà** (âgé) et **小 xiǎo** (jeune) : 我比弟弟大两岁 wǒ bǐ dìdi dà liǎng suì, j'ai deux ans de plus que mon petit frère. Remarque : « deux ans » se dit 两岁, avec 两." },
          ],
        },
        {
          titre: "Pas aussi … que : 没有…那么",
          blocs: [
            { t: "propriete", titre: "L'infériorité", md: "**A 没有 méiyǒu B (那么 nàme) + adjectif** = A n'est pas aussi … que B.\n上海没有北京那么冷。Shànghǎi méiyǒu Běijīng nàme lěng. Shanghai n'est pas aussi froid que Pékin.\n我没有哥哥那么高。Wǒ méiyǒu gēge nàme gāo. Je ne suis pas aussi grand que mon grand frère.\nIci, 没有 ne veut pas dire « ne pas avoir » : c'est la négation habituelle d'une comparaison." },
            { t: "attention", md: "On ne nie pas une phrase en 比 en glissant 不 au milieu : *上海比北京不冷 est faux. Utilise 没有…那么. Et toujours pas de 很 : *上海没有北京很冷 est faux aussi." },
            { t: "verifie", q: "Que signifie 我没有哥哥那么高 ?", choix: ["Je ne suis pas aussi grand que mon grand frère.", "Je n'ai pas de grand frère.", "Mon grand frère n'est pas aussi grand que moi.", "Je suis plus grand que mon grand frère."], bonne: 0, explication: "A (我) 没有 B (哥哥) 那么 + adjectif : c'est moi qui suis moins grand. 没有 sert ici à comparer, pas à dire « ne pas avoir »." },
          ],
        },
        {
          titre: "Aussi … que : 跟…一样",
          blocs: [
            { t: "propriete", titre: "L'égalité", md: "**A 跟 gēn / 和 hé B 一样 yíyàng (+ adjectif)** = A est aussi … que B.\n我跟她一样高。Wǒ gēn tā yíyàng gāo. Je suis aussi grand qu'elle.\nSans adjectif, 一样 signifie « pareil » : 这两本书一样 zhè liǎng běn shū yíyàng (ces deux livres sont pareils). Le contraire : 不一样 bù yíyàng (différent)." },
            { t: "schema", titre: "Trois structures pour comparer", svg: SVG_TROIS, legende: "Plus que : 比. Pas aussi … que : 没有…那么. Aussi … que : 跟…一样. Dans les trois, l'adjectif (ici 高 gāo, grand) termine la phrase." },
            { t: "exemple", titre: "Pékin, Shanghai et mon ami", md: "冬天，北京比上海冷多了。我跟我朋友一样高，可是他比我大一岁。\nDōngtiān, Běijīng bǐ Shànghǎi lěng duō le. Wǒ gēn wǒ péngyou yíyàng gāo, kěshì tā bǐ wǒ dà yí suì.\nEn hiver, Pékin est beaucoup plus froid que Shanghai. Je suis aussi grand que mon ami, mais (可是 kěshì) il a un an de plus que moi." },
          ],
        },
      ],
      bilan: "比 pour « plus », 没有…那么 pour « pas aussi », 跟…一样 pour « aussi » : l'adjectif ferme la phrase, les nuances le suivent, et 很 reste à la porte.",
    },

    // ───────────────────────── 6. Vêtements et achats ─────────────────────────
    "4e-chinois-06-vetements-achats": {
      accroche: "Dans certains marchés de Chine, le prix annoncé n'est qu'un point de départ : on discute, on sourit, on propose. Dans un grand magasin, au contraire, les prix sont fixes. Partout, il te faudra nommer les vêtements, comprendre les prix en 块 et 毛, et savoir dire « c'est trop cher ! ».",
      objectifs: [
        "Nommer les vêtements et les couleurs avec le bon classificateur (件, 条, 双)",
        "Demander un prix et comprendre une somme en 块 et 毛",
        "Donner son avis avec 太…了 et 有点儿",
        "Négocier poliment avec 便宜一点儿吧",
      ],
      sections: [
        {
          titre: "Les vêtements et leurs classificateurs",
          blocs: [
            { t: "schema", titre: "Trois classificateurs pour s'habiller", svg: SVG_HABITS, legende: "件 jiàn pour le haut du corps (衬衫 chemise, 毛衣 pull), 条 tiáo pour le pantalon et la jupe, et 双 shuāng pour ce qui va par paire, comme les chaussures (鞋)." },
            { t: "tableau", titre: "Les vêtements", entetes: ["Vêtement", "Sens", "Avec son classificateur"], lignes: [
              ["衣服 yīfu", "vêtement", "一件衣服 yí jiàn yīfu"],
              ["衬衫 chènshān", "chemise", "一件衬衫 yí jiàn chènshān"],
              ["毛衣 máoyī", "pull", "一件毛衣 yí jiàn máoyī"],
              ["外套 wàitào", "veste, manteau", "一件外套 yí jiàn wàitào"],
              ["裤子 kùzi", "pantalon", "一条裤子 yì tiáo kùzi"],
              ["裙子 qúnzi", "jupe", "一条裙子 yì tiáo qúnzi"],
              ["鞋 xié", "chaussure", "一双鞋 yì shuāng xié : une paire de chaussures"],
            ] },
            { t: "savais-tu", md: "Les noms de vêtements se décomposent : 毛衣, c'est 毛 máo (laine) + 衣 yī (vêtement) ; 外套, ce qu'on met « à l'extérieur » (外 wài). Le suffixe 子 zi, au ton neutre, termine beaucoup de noms : 裤子, 裙子, 桌子." },
            { t: "verifie", q: "Comment dit-on « une jupe » ?", choix: ["一件裙子", "一条裙子", "一双裙子", "一张裙子"], bonne: 1, explication: "La jupe, comme le pantalon, prend 条 tiáo : 一条裙子 yì tiáo qúnzi. 件 est pour le haut du corps, 双 pour les paires, 张 pour les objets plats." },
          ],
        },
        {
          titre: "Les couleurs",
          blocs: [
            { t: "schema", titre: "Six couleurs", svg: SVG_COULEURS, legende: "色 sè signifie « couleur » : chaque nom de couleur se termine par 色." },
            { t: "propriete", titre: "Placer la couleur", md: "Tout ce qui décrit le nom vient **avant** lui : **nombre + classificateur + couleur + 的 de + nom**.\n一件红色的毛衣 yí jiàn hóngsè de máoyī : un pull rouge.\n两条黑色的裤子 liǎng tiáo hēisè de kùzi : deux pantalons noirs.\nOn entend aussi une forme courte, sans 色 ni 的 : 红毛衣 hóng máoyī." },
            { t: "savais-tu", md: "En Chine, le **rouge** est la couleur de la joie et de la fête : au Nouvel An, on offre de l'argent dans des enveloppes rouges, les 红包 hóngbāo, et les robes de mariée traditionnelles sont rouges." },
          ],
        },
        {
          titre: "Combien ça coûte ? 块 et 毛",
          blocs: [
            { t: "texte", md: "Pour demander un prix : **多少钱？duōshao qián ?** (littéralement « combien d'argent ? »). On peut nommer l'objet devant : 这件衬衫多少钱？Zhè jiàn chènshān duōshao qián ? (Combien coûte cette chemise ?)\n\nLa monnaie chinoise est le 人民币 rénmínbì, dont l'unité est le **yuan**. Sur les étiquettes, on lit 元 yuán, mais à l'oral, on dit **块 kuài**." },
            { t: "tableau", titre: "Écrit et oral", entetes: ["À l'écrit", "À l'oral", "Valeur"], lignes: [
              ["元 yuán", "块 kuài", "1 yuan"],
              ["角 jiǎo", "毛 máo", "0,10 yuan (un dixième)"],
              ["分 fēn", "分 fēn", "0,01 yuan (un centième)"],
            ] },
            { t: "schema", titre: "1 块 = 10 毛", svg: SVG_ARGENT, legende: "Dans 二十五块五 èrshíwǔ kuài wǔ, le dernier 五 désigne 5 毛 : 25,50 yuans. Le mot 毛 est souvent sous-entendu à la fin." },
            { t: "exemple", titre: "Calculer 三块八 + 四块五", etapes: [
              "三块八 sān kuài bā = 3,80 yuans ; 四块五 sì kuài wǔ = 4,50 yuans.",
              "On additionne les 毛 : 8 + 5 = 13 毛, soit 1 块 et 3 毛.",
              "On additionne les 块 : 3 + 4 + 1 = 8 块.",
              "Total : 八块三 bā kuài sān, soit 8,30 yuans.",
            ] },
            { t: "attention", md: "Ne confonds pas 二十五块五 (25,50 yuans) et 二十五块零五分 èrshíwǔ kuài líng wǔ fēn (25,05 yuans) : 零 líng (zéro) signale la place vide des 毛." },
            { t: "verifie", q: "Le vendeur dit 九块九 jiǔ kuài jiǔ. Combien dois-tu payer ?", choix: ["9,09 yuans", "9,90 yuans", "99 yuans", "0,99 yuan"], bonne: 1, explication: "九块 = 9 yuans, et le second 九 compte des 毛 (des dixièmes de yuan) : 9,90 yuans." },
          ],
        },
        {
          titre: "Donner son avis et négocier",
          blocs: [
            { t: "propriete", titre: "Trop, un peu, un peu plus", md: "• **太 tài + adjectif + 了 le** : trop. 太贵了！Tài guì le ! C'est trop cher !\n• **有点儿 yǒudiǎnr + adjectif** : un peu (une petite gêne). 这条裤子有点儿大。Zhè tiáo kùzi yǒudiǎnr dà. Ce pantalon est un peu grand.\n• **adjectif + 一点儿 yìdiǎnr** : un peu plus. 便宜一点儿吧！Piányi yìdiǎnr ba ! Un peu moins cher, s'il vous plaît !\n==有点儿 se place avant l'adjectif, 一点儿 après.==" },
            { t: "liste", titre: "Phrases utiles au magasin", items: [
              "我想买… wǒ xiǎng mǎi… : je voudrais acheter…",
              "我可以试试吗？wǒ kěyǐ shìshi ma ? : je peux l'essayer ?",
              "太大了 / 太小了 tài dà le / tài xiǎo le : c'est trop grand / trop petit",
              "便宜一点儿吧 piányi yìdiǎnr ba : un peu moins cher, s'il vous plaît (吧 ba adoucit la demande)",
              "我要这件 wǒ yào zhè jiàn : je prends celui-ci (un vêtement du haut)",
            ] },
            { t: "exemple", titre: "Au marché", md: "— 这件毛衣多少钱？— 一百二十块。\n— 太贵了！便宜一点儿吧。— 一百块，可以吗？— 好，我要这件。\nZhè jiàn máoyī duōshao qián ? — Yìbǎi èrshí kuài. — Tài guì le ! Piányi yìdiǎnr ba. — Yìbǎi kuài, kěyǐ ma ? — Hǎo, wǒ yào zhè jiàn.\n— Combien coûte ce pull ? — 120 yuans. — C'est trop cher ! Faites-moi un prix. — 100 yuans, ça va ? — D'accord, je le prends." },
            { t: "verifie", q: "Le pantalon que tu essaies est un peu grand. Que dis-tu ?", choix: ["这条裤子有点儿大。", "这条裤子一点儿大。", "这件裤子有点儿大。", "这条裤子比大。"], bonne: 0, explication: "有点儿 se place devant l'adjectif pour une petite gêne, et le pantalon prend 条. 一点儿 se place après l'adjectif, et 比 demande un second terme de comparaison." },
          ],
        },
      ],
      bilan: "件 pour le haut, 条 pour le bas, 双 pour les paires ; 多少钱 pour le prix, 块 et 毛 pour la réponse ; 太贵了 et 便宜一点儿吧 pour discuter.",
    },

    // ───────────────────────── 7. Météo et saisons ─────────────────────────
    "4e-chinois-07-meteo-saisons": {
      accroche: "En janvier, il fait souvent −20 °C à Harbin, dans le nord-est, pendant qu'à Canton, dans le sud, le thermomètre tourne en moyenne autour de 14 °C. La Chine est si vaste que la météo change complètement d'une région à l'autre : apprends à en parler !",
      objectifs: [
        "Nommer les saisons et dire sa saison préférée",
        "Décrire le temps qu'il fait",
        "Donner une température avec 度 et 零下",
        "Exprimer un changement avec 了 et connaître les climats de la Chine",
      ],
      sections: [
        {
          titre: "Les quatre saisons",
          blocs: [
            { t: "schema", titre: "Les quatre saisons (季节 jìjié)", svg: SVG_SAISONS, legende: "Chaque saison se termine par 天 tiān (jour, ciel). Sous son nom, l'adjectif qui la décrit le mieux." },
            { t: "texte", md: "Le mot « saison » se dit 季节 jìjié. Tu connais déjà 春 chūn grâce à 春节 Chūnjié, la fête du Printemps, c'est-à-dire le Nouvel An chinois." },
            { t: "propriete", titre: "Dire sa saison préférée", md: "**最 zuì** (le plus) se place devant le verbe 喜欢 xǐhuan (aimer) :\n— 你最喜欢哪个季节？Nǐ zuì xǐhuan nǎge jìjié ? Quelle saison préfères-tu ?\n— 我最喜欢秋天，秋天很凉快。Wǒ zuì xǐhuan qiūtiān, qiūtiān hěn liángkuai. Je préfère l'automne : il fait frais." },
          ],
        },
        {
          titre: "Quel temps fait-il ?",
          blocs: [
            { t: "texte", md: "La question : **今天天气怎么样？Jīntiān tiānqì zěnmeyàng ?** (Quel temps fait-il aujourd'hui ?) 天气 tiānqì, c'est le temps qu'il fait ; 怎么样 zěnmeyàng demande une description.\n\nDans la réponse, on met normalement **很 hěn** devant l'adjectif : 今天很冷 jīntiān hěn lěng (il fait froid), 今天很热 jīntiān hěn rè (il fait chaud). Ici, 很 n'a pas toujours le sens fort de « très »." },
            { t: "tableau", titre: "Les phénomènes météo", entetes: ["Chinois", "Pinyin", "Mot à mot", "Sens"], lignes: [
              ["下雨", "xià yǔ", "tomber + pluie", "il pleut"],
              ["下雪", "xià xuě", "tomber + neige", "il neige"],
              ["刮风", "guā fēng", "souffler + vent", "il y a du vent"],
              ["晴天", "qíngtiān", "jour dégagé", "beau temps"],
              ["阴天", "yīntiān", "jour sombre", "temps couvert"],
            ] },
            { t: "astuce", md: "Regarde les caractères : 雪 (neige) porte en haut une forme réduite de 雨 (pluie), la clé des phénomènes du ciel ; 晴 (dégagé) contient 日, le soleil. Et 下 « tomber » ne sert que pour ce qui tombe du ciel : pour le vent, c'est 刮 guā." },
            { t: "verifie", q: "Comment dit-on « il y a du vent » ?", choix: ["下风", "刮风", "晴风", "雨风"], bonne: 1, explication: "刮风 guā fēng : le vent souffle. 下 sert pour ce qui tombe (雨, 雪) et 晴 qualifie un ciel dégagé." },
          ],
        },
        {
          titre: "Les degrés : 度 et 零下",
          blocs: [
            { t: "schema", titre: "Lire le thermomètre", svg: SVG_THERMOMETRE, legende: "Au-dessus de zéro : nombre + 度 dù. Au-dessous : 零下 língxià + nombre + 度. 零 líng signifie « zéro » et 下 xià « en dessous »." },
            { t: "propriete", titre: "Dire la température", md: "**nombre + 度 dù** : 二十度 èrshí dù, 20 °C.\n**零下 língxià + nombre + 度** : 零下五度 língxià wǔ dù, −5 °C.\nLa question : 今天多少度？Jīntiān duōshao dù ? (à l'oral aussi : 今天几度？Jīntiān jǐ dù ?)" },
            { t: "exemple", titre: "Un été à Pékin", md: "— 今天多少度？— 二十八度，很热！\nJīntiān duōshao dù ? — Èrshíbā dù, hěn rè !\n— Il fait combien aujourd'hui ? — 28 degrés, il fait chaud !" },
            { t: "verifie", q: "Que signifie 零下十五度 ?", choix: ["15 °C", "−15 °C", "−5 °C", "50 °C"], bonne: 1, explication: "零下 = au-dessous de zéro : 零下十五度 língxià shíwǔ dù, c'est −15 °C." },
          ],
        },
        {
          titre: "了 : le temps change",
          blocs: [
            { t: "propriete", titre: "Le 了 du changement", md: "En fin de phrase, **了** signale qu'une situation **nouvelle** commence :\n下雨了！Xià yǔ le ! Il s'est mis à pleuvoir !\n天冷了。Tiān lěng le. Il commence à faire froid.\n不下雨了。Bú xià yǔ le. Il ne pleut plus." },
            { t: "attention", md: "Tu connais déjà le 了 placé après un verbe pour une action accomplie (我买了一本书). Après une description du temps, il signale un **changement** : 天冷了 ne veut pas dire « il a fait froid », mais « il commence à faire froid »." },
            { t: "exemple", titre: "Un petit bulletin", md: "今天天气不太好，阴天，有点儿冷，十度。明天会下雨。\nJīntiān tiānqì bú tài hǎo, yīntiān, yǒudiǎnr lěng, shí dù. Míngtiān huì xià yǔ.\nAujourd'hui, il ne fait pas très beau : le ciel est couvert, il fait un peu froid, 10 degrés. Demain, il pleuvra (会 huì annonce une prévision)." },
          ],
        },
        {
          titre: "Du nord au sud : les climats de la Chine",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quatre villes, quatre climats", cadre: [98, 18, 136, 50], reperes: [
              { nom: "Harbin 哈尔滨", lat: 45.80, lon: 126.53 },
              { nom: "Pékin 北京", lat: 39.90, lon: 116.40 },
              { nom: "Shanghai 上海", lat: 31.23, lon: 121.47 },
              { nom: "Canton 广州", lat: 23.13, lon: 113.26 },
            ], legende: "Harbin et Pékin, au nord, ont des hivers froids et secs. Shanghai est plus douce. Canton, au sud, est chaude et humide." },
            { t: "graphique", type: "barres", titre: "Température moyenne en janvier (valeurs arrondies)", unite: "°C", donnees: [
              { label: "Harbin", valeur: -17 },
              { label: "Pékin", valeur: -3 },
              { label: "Shanghai", valeur: 5 },
              { label: "Canton", valeur: 14 },
            ] },
            { t: "texte", md: "Le **nord** de la Chine (北京, 哈尔滨 Hā'ěrbīn) a des hivers froids et secs, souvent sous zéro, et des étés chauds. Le **sud** (广州 Guǎngzhōu, 香港 Xiānggǎng) est chaud et humide, avec de fortes pluies en été.\n\nEn hiver, Harbin organise une célèbre fête de la glace et de la neige, avec des sculptures et des lanternes de glace (冰灯 bīngdēng)." },
            { t: "exemple", titre: "Comparer deux hivers", md: "冬天，哈尔滨比北京冷多了。广州的冬天很暖和。\nDōngtiān, Hā'ěrbīn bǐ Běijīng lěng duō le. Guǎngzhōu de dōngtiān hěn nuǎnhuo.\nEn hiver, Harbin est beaucoup plus froid que Pékin. L'hiver à Canton est doux." },
            { t: "verifie", q: "Laquelle de ces villes a, en général, l'hiver le plus froid ?", choix: ["广州 Guǎngzhōu", "哈尔滨 Hā'ěrbīn", "上海 Shànghǎi", "香港 Xiānggǎng"], bonne: 1, explication: "Harbin, tout au nord-est, connaît des hivers très rudes, souvent autour de −20 °C en janvier. Canton et Hong Kong, dans le sud, ont des hivers doux ; Shanghai reste le plus souvent au-dessus de zéro." },
          ],
        },
      ],
      bilan: "Les quatre saisons et leur 天, 下雨 et 下雪 qui tombent, 刮风 qui souffle, 零下 sous zéro, et 了 quand le temps change : tu peux présenter la météo, de Harbin à Canton.",
    },

    // ───────────────────────── 8. Le corps et la santé ─────────────────────────
    "4e-chinois-08-corps-sante": {
      accroche: "Pendant ton séjour à Pékin, tu te réveilles la tête lourde et la gorge qui gratte. Ta famille d'accueil s'inquiète : 你怎么了？Nǐ zěnme le ? (Qu'est-ce qui t'arrive ?) C'est le moment de savoir dire où tu as mal !",
      objectifs: [
        "Nommer les principales parties du corps",
        "Dire où l'on a mal avec 疼 et comment on se sent",
        "Comprendre les questions du médecin",
        "Donner ou comprendre un conseil avec 应该 et 多 + verbe",
      ],
      sections: [
        {
          titre: "Les parties du corps",
          blocs: [
            { t: "schema", titre: "Le corps (身体 shēntǐ)", svg: SVG_CORPS, legende: "Dans 眼睛 yǎnjing, 耳朵 ěrduo, 鼻子 bízi et 肚子 dùzi, la deuxième syllabe se prononce au ton neutre." },
            { t: "texte", md: "Beaucoup de ces mots ont deux syllabes, dont la seconde est au ton neutre : 眼睛, 耳朵, 鼻子, 肚子. D'autres n'en ont qu'une : 头, 手, 脚, 腿, 嘴, 牙.\nComme tous les noms chinois, ils n'ont pas de pluriel : 眼睛 désigne un œil ou les deux yeux, 手 une main ou les deux mains." },
            { t: "savais-tu", md: "手 shǒu (main) et 耳 ěr (oreille) sont d'anciens pictogrammes : on y devinait une main aux doigts écartés et une oreille. Les deux caractères de 眼睛 yǎnjing contiennent la clé de l'œil 目. Et 手 se retrouve dans 手机 shǒujī, le téléphone portable : la « machine de la main »." },
            { t: "verifie", q: "Que signifie 鼻子 bízi ?", choix: ["la bouche", "le nez", "l'oreille", "la dent"], bonne: 1, explication: "鼻子 bízi est le nez. La bouche se dit 嘴 zuǐ, l'oreille 耳朵 ěrduo et la dent 牙 yá." },
          ],
        },
        {
          titre: "J'ai mal à… : 疼",
          blocs: [
            { t: "propriete", titre: "Dire où l'on a mal", md: "**(sujet) + partie du corps + 疼 téng** (ou 痛 tòng) :\n我头疼。Wǒ tóu téng. J'ai mal à la tête.\n我肚子疼。Wǒ dùzi téng. J'ai mal au ventre.\n我牙疼。Wǒ yá téng. J'ai mal aux dents.\n我嗓子疼。Wǒ sǎngzi téng. J'ai mal à la gorge (嗓子 sǎngzi : la gorge)." },
            { t: "attention", md: "Ne traduis pas « avoir mal » mot à mot avec 有 (avoir) : la partie du corps sert de sujet à 疼. On dit 我头疼, littéralement « moi, la tête fait mal »." },
            { t: "astuce", md: "Pour demander où quelqu'un a mal, remplace la partie du corps par 哪儿 : 你哪儿疼？Nǐ nǎr téng ? (Où as-tu mal ?) — 我肚子疼。Wǒ dùzi téng. (J'ai mal au ventre.)" },
            { t: "tableau", titre: "Comment te sens-tu ?", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [
              ["我不舒服。", "Wǒ bù shūfu.", "Je ne me sens pas bien."],
              ["我生病了。", "Wǒ shēngbìng le.", "Je suis tombé malade."],
              ["我感冒了。", "Wǒ gǎnmào le.", "J'ai attrapé un rhume."],
              ["我发烧了。", "Wǒ fāshāo le.", "J'ai de la fièvre."],
              ["我很累。", "Wǒ hěn lèi.", "Je suis fatigué."],
            ] },
            { t: "texte", md: "Dans 生病了, 感冒了 et 发烧了, le **了** marque un changement d'état : avant tu allais bien, maintenant tu es malade.\n**舒服 shūfu** (être bien, à l'aise) est un adjectif : il se nie avec 不, placé devant. 我很舒服 dit le contraire : je me sens bien." },
            { t: "verifie", q: "Comment dit-on « Hier, je suis tombé malade » ?", choix: ["我昨天生病了。", "我昨天病生了。", "我昨天没生病了。", "我生病了明天。"], bonne: 0, explication: "生病 shēngbìng (tomber malade) s'écrit 生 + 病 ; le 了 final marque le changement. 没 et 了 ne vont pas ensemble, et 明天 veut dire demain." },
          ],
        },
        {
          titre: "Chez le médecin",
          blocs: [
            { t: "etapes", titre: "Une consultation en quatre temps", items: [
              { titre: "Le médecin demande", md: "你怎么了？Nǐ zěnme le ? Qu'est-ce qui t'arrive ?\n你哪儿不舒服？Nǐ nǎr bù shūfu ? Qu'est-ce qui ne va pas ? (litt. « où n'es-tu pas bien ? »)" },
              { titre: "Tu expliques", md: "我头疼，还有点儿发烧。Wǒ tóu téng, hái yǒudiǎnr fāshāo. J'ai mal à la tête et j'ai aussi un peu de fièvre. (还 hái : en plus)" },
              { titre: "Le médecin conclut", md: "你感冒了。Nǐ gǎnmào le. Tu as attrapé un rhume." },
              { titre: "Il conseille", md: "你应该多喝水，多休息。Nǐ yīnggāi duō hē shuǐ, duō xiūxi. Tu devrais boire beaucoup d'eau et te reposer." },
            ] },
            { t: "propriete", titre: "Donner un conseil", md: "• **应该 yīnggāi + verbe** : devoir, « tu devrais ». 你应该去看医生。Nǐ yīnggāi qù kàn yīshēng. Tu devrais aller voir le médecin.\n• **多 duō + verbe** : faire davantage. 多喝水 duō hē shuǐ (bois beaucoup d'eau), 多休息 duō xiūxi (repose-toi bien)." },
            { t: "tableau", titre: "Les mots de la santé", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [
              ["医生", "yīshēng", "le médecin"],
              ["医院", "yīyuàn", "l'hôpital"],
              ["看医生", "kàn yīshēng", "consulter un médecin"],
              ["药", "yào", "le médicament"],
              ["吃药", "chī yào", "prendre un médicament (litt. « manger »)"],
              ["休息", "xiūxi", "se reposer"],
            ] },
            { t: "exemple", titre: "Rassurer un ami", md: "— 我嗓子疼，还有点儿发烧。— 你应该多喝水，多休息。\nWǒ sǎngzi téng, hái yǒudiǎnr fāshāo. — Nǐ yīnggāi duō hē shuǐ, duō xiūxi.\n— J'ai mal à la gorge, et j'ai aussi un peu de fièvre. — Tu devrais boire beaucoup d'eau et bien te reposer." },
            { t: "savais-tu", md: "Le chinois « mange » ses médicaments : 吃药, même pour un sirop ! Le caractère 药 porte en haut la clé de l'herbe 艹 : les premiers remèdes étaient des plantes." },
            { t: "verifie", q: "Le médecin te dit 你应该多休息。Que te conseille-t-il ?", choix: ["De te reposer davantage", "De faire plus de sport", "De prendre un médicament", "D'aller à l'hôpital"], bonne: 0, explication: "应该 = tu devrais ; 多 + verbe = faire davantage ; 休息 xiūxi = se reposer." },
          ],
        },
      ],
      bilan: "Partie du corps + 疼 pour dire où tu as mal, 不舒服 quand ça ne va pas, 了 quand tu tombes malade, et 应该 + 多 pour les conseils du médecin.",
    },

    // ───────────────────────── 9. Projets et futur ─────────────────────────
    "4e-chinois-09-projets-futur": {
      accroche: "Les grandes vacances approchent. Ton correspondant Li Ming t'écrit : 暑假你打算做什么？Shǔjià nǐ dǎsuàn zuò shénme ? (Que comptes-tu faire pendant les vacances d'été ?) Pour lui répondre, pas de futur à conjuguer : des mots de temps et quatre petits verbes suffisent.",
      objectifs: [
        "Situer une action dans le futur avec un mot de temps",
        "Exprimer une envie, une décision ou un projet avec 想, 要, 打算",
        "Faire une prévision avec 会 sans la confondre avec « savoir faire »",
        "Ne pas employer 了 pour une action future",
      ],
      sections: [
        {
          titre: "Situer dans le futur",
          blocs: [
            { t: "texte", md: "Comme pour le passé, le verbe ne change pas : c'est un **mot de temps**, placé avant le verbe, qui annonce le futur. 我明天去北京。Wǒ míngtiān qù Běijīng. Demain, je vais à Pékin." },
            { t: "tableau", titre: "Passé, présent, futur", entetes: ["Repère", "Passé", "Présent", "Futur"], lignes: [
              ["le jour", "昨天 zuótiān : hier", "今天 jīntiān : aujourd'hui", "明天 míngtiān : demain"],
              ["la semaine", "上个星期 shàng ge xīngqī", "这个星期 zhège xīngqī", "下个星期 xià ge xīngqī"],
              ["le mois", "上个月 shàng ge yuè", "这个月 zhège yuè", "下个月 xià ge yuè"],
              ["l'année", "去年 qùnián", "今年 jīnnián", "明年 míngnián"],
            ] },
            { t: "schema", titre: "上 avant, 下 après", svg: SVG_CALENDRIER, legende: "Imagine un calendrier qu'on lit de haut en bas : 上 shàng (en haut) désigne ce qui précède, 下 xià (en bas) ce qui suit." },
            { t: "liste", titre: "D'autres mots du futur", items: [
              "后天 hòutiān : après-demain",
              "周末 zhōumò : le week-end (littéralement « la fin de la semaine »)",
              "以后 yǐhòu : plus tard, à l'avenir",
              "暑假 shǔjià : les vacances d'été ; 寒假 hánjià : les vacances d'hiver",
            ] },
            { t: "verifie", q: "Que signifie 下个月 xià ge yuè ?", choix: ["le mois dernier", "ce mois-ci", "le mois prochain"], bonne: 2, explication: "下 indique ce qui suit : 下个月 = le mois prochain. Le mois dernier se dit 上个月 shàng ge yuè." },
          ],
        },
        {
          titre: "想, 要, 打算 : envie, décision, projet",
          blocs: [
            { t: "tableau", titre: "Trois verbes devant un autre verbe", entetes: ["Verbe", "Sens", "Exemple"], lignes: [
              ["想 xiǎng + verbe", "avoir envie de, vouloir", "我想去中国。Wǒ xiǎng qù Zhōngguó. J'aimerais aller en Chine."],
              ["要 yào + verbe", "vouloir (c'est décidé), avoir à faire", "我明天要考试。Wǒ míngtiān yào kǎoshì. Demain, j'ai un examen."],
              ["打算 dǎsuàn + verbe", "avoir l'intention de, prévoir de", "暑假我打算去西安。Shǔjià wǒ dǎsuàn qù Xī'ān. Cet été, je compte aller à Xi'an."],
            ] },
            { t: "texte", md: "Comment choisir ? **想** exprime un désir, parfois un rêve encore lointain. **打算** annonce un projet réfléchi, que l'on a commencé à organiser. **要** marque une décision ferme ou une chose prévue au programme : 我明天要考试, l'examen est fixé, il aura lieu." },
            { t: "exemple", titre: "Parler de son avenir", md: "以后我想当医生。Yǐhòu wǒ xiǎng dāng yīshēng.\nPlus tard, je voudrais être médecin. (当 dāng : devenir, exercer un métier)" },
            { t: "propriete", titre: "Les négations", md: "• **不想 bù xiǎng** : ne pas avoir envie. 我不想去。Wǒ bù xiǎng qù. Je n'ai pas envie d'y aller.\n• **不打算 bù dǎsuàn** : ne pas avoir l'intention de.\n• Attention : **不要 bú yào + verbe** sert surtout à **interdire** : 不要说话！Bú yào shuōhuà ! Ne parle pas !" },
            { t: "verifie", q: "Quelle phrase exprime un projet pour les vacances d'hiver ?", choix: ["寒假我打算去哈尔滨。", "寒假我去了哈尔滨。", "寒假我没去哈尔滨。"], bonne: 0, explication: "打算 annonce une intention : pendant les vacances d'hiver (寒假 hánjià), je compte aller à Harbin. 去了 et 没去 parlent du passé." },
          ],
        },
        {
          titre: "会 : ce qui va probablement arriver",
          blocs: [
            { t: "propriete", titre: "Le 会 de la prévision", md: "**会 huì + verbe** : il est probable que, « il va… ».\n明天会下雨。Míngtiān huì xià yǔ. Demain, il va pleuvoir.\n明天不会下雪。Míngtiān bú huì xià xuě. Demain, il ne neigera pas." },
            { t: "tableau", titre: "Les deux sens de 会", entetes: ["Sens", "Exemples", "Indice"], lignes: [
              ["savoir faire (une capacité apprise)", "我会说中文。Wǒ huì shuō Zhōngwén. Je sais parler chinois.\n我会游泳。Wǒ huì yóuyǒng. Je sais nager.", "une chose qu'on a apprise"],
              ["prévision", "明天会下雨。Míngtiān huì xià yǔ. Demain, il va pleuvoir.\n他会来。Tā huì lái. Il va venir.", "un événement à venir"],
            ] },
            { t: "exemple", titre: "Une prévision et un conseil", md: "明天会很冷，你要多穿衣服。\nMíngtiān huì hěn lěng, nǐ yào duō chuān yīfu.\nDemain, il fera très froid : mets plus de vêtements (穿 chuān : porter, s'habiller). 会 annonce la prévision, 要 le conseil ferme." },
            { t: "verifie", q: "Dans 我会游泳, que signifie 会 ?", choix: ["savoir faire", "il est probable que", "avoir envie de"], bonne: 0, explication: "Nager s'apprend : 我会游泳 wǒ huì yóuyǒng, je sais nager. Le sens de prévision apparaît avec un événement à venir : 明天会下雨." },
          ],
        },
        {
          titre: "Pas de 了 pour le futur",
          blocs: [
            { t: "attention", md: "了 marque une action accomplie : il ne va pas avec une action future. *我明天去了北京 est faux. On dit 我明天去北京, 我明天要去北京 ou 我明天打算去北京." },
            { t: "exemple", titre: "Mes projets", md: "这个周末我要去奶奶家。暑假我打算和爸爸妈妈去北京，我很想看长城。听说北京夏天会很热！\nZhège zhōumò wǒ yào qù nǎinai jiā. Shǔjià wǒ dǎsuàn hé bàba māma qù Běijīng, wǒ hěn xiǎng kàn Chángchéng. Tīngshuō Běijīng xiàtiān huì hěn rè !\nCe week-end, je vais chez ma grand-mère (奶奶 nǎinai). Pendant les vacances d'été, je compte aller à Pékin avec mes parents ; j'ai très envie de voir la Grande Muraille (长城). Il paraît (听说 tīngshuō) qu'il fera très chaud à Pékin en été !" },
            { t: "astuce", md: "Pour l'âge, même logique : 我今年十三岁，明年十四岁。Wǒ jīnnián shísān suì, míngnián shísì suì. Cette année, j'ai treize ans ; l'année prochaine, j'en aurai quatorze. Pas de verbe, pas de futur : le mot de temps suffit." },
          ],
        },
      ],
      bilan: "Un mot de temps pour dire quand, 想 pour l'envie, 要 pour la décision, 打算 pour le projet, 会 pour la prévision, et pas de 了 pour ce qui n'est pas encore fait.",
    },

    // ───────────────────────── 10. Fêtes et grandes villes ─────────────────────────
    "4e-chinois-10-fetes-villes": {
      accroche: "Lanternes rouges, bateaux-dragons, gâteaux ronds comme la lune… Les grandes fêtes chinoises suivent le rythme de la Lune, et chaque grande ville a son histoire et ses spécialités. Embarque pour un voyage de Pékin à Hong Kong, en passant par Xi'an et Shanghai !",
      objectifs: [
        "Situer les grandes fêtes dans le calendrier lunaire",
        "Connaître leurs coutumes et leurs légendes",
        "Situer et caractériser Pékin, Shanghai, Hong Kong et Xi'an",
        "Reconnaître quelques spécialités culinaires régionales",
      ],
      sections: [
        {
          titre: "Une année rythmée par la Lune",
          blocs: [
            { t: "texte", md: "Les fêtes traditionnelles suivent le **calendrier lunaire** : chaque mois commence à la nouvelle lune, et le 15e jour tombe à la pleine lune. Une année lunaire est un peu plus courte que la nôtre ; on ajoute donc parfois un treizième mois pour rester en accord avec les saisons. Résultat : ==les fêtes changent de date chaque année== dans notre calendrier." },
            { t: "schema", titre: "Les fêtes sur l'année lunaire", svg: SVG_LUNE, legende: "春节 et 元宵节 ouvrent l'année, 端午节 arrive au 5e mois et 中秋节 au 8e, le soir de la pleine lune. Sous chaque fête, sa période approximative dans notre calendrier." },
            { t: "tableau", titre: "Quatre grandes fêtes", entetes: ["Fête", "Date lunaire", "Coutumes"], lignes: [
              ["春节 Chūnjié : fête du Printemps (Nouvel An)", "1er jour du 1er mois (entre le 21 janvier et le 20 février)", "repas de famille, 饺子 jiǎozi (raviolis) dans le nord, enveloppes rouges 红包 hóngbāo"],
              ["元宵节 Yuánxiāojié : fête des Lanternes", "15e jour du 1er mois", "lanternes, boulettes de riz gluant (元宵 yuánxiāo) ; elle clôt les fêtes du Nouvel An"],
              ["端午节 Duānwǔjié : fête des bateaux-dragons", "5e jour du 5e mois (fin mai ou juin)", "courses de bateaux-dragons (龙舟 lóngzhōu), 粽子 zòngzi"],
              ["中秋节 Zhōngqiūjié : fête de la mi-automne", "15e jour du 8e mois (septembre ou début octobre)", "famille réunie, on admire la lune (月亮 yuèliang), on mange des 月饼 yuèbing (gâteaux de lune)"],
            ] },
            { t: "verifie", q: "Quelle fête a lieu le soir de la pleine lune du 8e mois ?", choix: ["春节", "端午节", "中秋节", "元宵节"], bonne: 2, explication: "中秋节 Zhōngqiūjié : 中 (milieu) + 秋 (automne) + 节 (fête). Le 15e jour du mois lunaire correspond à la pleine lune. 元宵节 tombe aussi un soir de pleine lune, mais au 1er mois." },
          ],
        },
        {
          titre: "Légendes et coutumes",
          blocs: [
            { t: "texte", md: "**端午节** rappelle le poète **屈原 Qū Yuán** (IVe-IIIe siècle av. J.-C.). Selon la tradition, désespéré par le malheur de son pays, il se jeta dans une rivière ; les habitants partirent en barque pour le chercher et jetèrent du riz dans l'eau. D'où les courses de bateaux-dragons et les 粽子 zòngzi, du riz gluant enveloppé de feuilles de bambou.\n\n**中秋节** est liée à la légende de **嫦娥 Cháng'é**, qui s'envola vers la Lune. Ce soir-là, la lune est pleine et ronde (圆 yuán) : elle symbolise la famille réunie (团圆 tuányuán). Beaucoup de gens rentrent chez eux pour la fêter ensemble." },
            { t: "exemple", titre: "Le soir de la mi-automne", md: "中秋节的晚上，我们全家一起吃月饼、看月亮。\nZhōngqiūjié de wǎnshang, wǒmen quánjiā yìqǐ chī yuèbing, kàn yuèliang.\nLe soir de la fête de la mi-automne, toute la famille (全家 quánjiā) mange des gâteaux de lune et admire la lune ensemble (一起 yìqǐ)." },
            { t: "savais-tu", md: "Les 月饼 sont souvent fourrés de pâte de graines de lotus ou de haricots rouges. Et le rouge des lanternes du Nouvel An est, en Chine, la couleur de la joie et de la chance." },
            { t: "verifie", q: "En souvenir de quel personnage célèbre-t-on 端午节 ?", choix: ["嫦娥 Cháng'é", "屈原 Qū Yuán", "秦始皇 Qín Shǐhuáng"], bonne: 1, explication: "端午节 rappelle le poète Qu Yuan : les courses de bateaux et les 粽子 évoquent les barques parties à sa recherche. Chang'e est liée à la mi-automne, Qin Shi Huang au tombeau de Xi'an." },
          ],
        },
        {
          titre: "Quatre grandes villes",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quelques grandes villes de Chine", cadre: [96, 18, 128, 44], reperes: [
              { nom: "Pékin 北京", lat: 39.90, lon: 116.40 },
              { nom: "Xi'an 西安", lat: 34.34, lon: 108.94 },
              { nom: "Shanghai 上海", lat: 31.23, lon: 121.47 },
              { nom: "Chengdu 成都", lat: 30.66, lon: 104.07 },
              { nom: "Hong Kong 香港", lat: 22.32, lon: 114.17 },
            ], legende: "Pékin au nord, Shanghai sur la côte est, Hong Kong au sud, Xi'an à l'intérieur des terres. Chengdu est la capitale du Sichuan, célèbre pour sa cuisine épicée et ses pandas." },
            { t: "tableau", titre: "Carte d'identité des villes", entetes: ["Ville", "Le sens du nom", "À retenir"], lignes: [
              ["北京 Běijīng (Pékin)", "« capitale du nord »", "la capitale ; la Cité interdite (故宫 Gùgōng), palais des empereurs ; la Grande Muraille (长城 Chángchéng) à proximité"],
              ["上海 Shànghǎi", "« sur la mer »", "immense métropole et grand port, à l'embouchure du Yangzi (长江 Cháng Jiāng) ; le Bund (外滩 Wàitān) et la tour de la Perle de l'Orient (东方明珠 Dōngfāng Míngzhū)"],
              ["香港 Xiānggǎng (Hong Kong)", "« port parfumé »", "administré par le Royaume-Uni jusqu'en 1997, aujourd'hui région administrative spéciale de la Chine ; on y parle surtout cantonais (广东话 Guǎngdōnghuà) et anglais"],
              ["西安 Xī'ān", "« paix de l'ouest »", "ancienne capitale (长安 Cháng'ān sous les Han et les Tang), point de départ de la Route de la soie (丝绸之路 Sīchóu zhī Lù) ; l'armée de terre cuite (兵马俑 bīngmǎyǒng)"],
            ] },
            { t: "frise", titre: "Quelques dates", evenements: [
              { date: -278, label: "Mort du poète Qu Yuan (date traditionnelle)", detail: "Selon la légende, les barques parties à sa recherche sont à l'origine de 端午节." },
              { date: -221, label: "Qin Shi Huang unifie la Chine", detail: "Le premier empereur, 秦始皇 Qín Shǐhuáng, se fait bâtir près de Xi'an un immense tombeau gardé par une armée de terre cuite." },
              { date: 618, label: "Début de la dynastie Tang", detail: "Sa capitale, 长安 Cháng'ān (aujourd'hui Xi'an), est l'une des plus grandes villes du monde, au départ de la Route de la soie." },
              { date: 1420, label: "La Cité interdite est achevée à Pékin", detail: "故宫 Gùgōng sera le palais des empereurs pendant près de cinq siècles." },
              { date: 1974, label: "Découverte de l'armée de terre cuite", detail: "Des paysans qui creusaient un puits près de Xi'an mettent au jour les 兵马俑 bīngmǎyǒng : des milliers de soldats et de chevaux." },
              { date: 1997, label: "Hong Kong devient une région administrative spéciale de la Chine", detail: "Après plus d'un siècle et demi d'administration britannique." },
            ] },
            { t: "verifie", q: "Quelle ville est célèbre pour l'armée de terre cuite découverte en 1974 ?", choix: ["北京 Běijīng", "上海 Shànghǎi", "西安 Xī'ān", "香港 Xiānggǎng"], bonne: 2, explication: "Les 兵马俑 gardent le tombeau du premier empereur, 秦始皇 Qín Shǐhuáng, près de Xi'an. Des paysans qui creusaient un puits les ont découverts en 1974." },
          ],
        },
        {
          titre: "À table ! Les cuisines régionales",
          blocs: [
            { t: "tableau", titre: "Spécialités régionales", entetes: ["Spécialité", "Origine", "Ce que c'est"], lignes: [
              ["北京烤鸭 Běijīng kǎoyā", "Pékin", "le canard laqué, servi en fines tranches avec de petites crêpes"],
              ["小笼包 xiǎolóngbāo", "Shanghai", "de petits pains farcis cuits à la vapeur, qui renferment un bouillon chaud"],
              ["麻婆豆腐 mápó dòufu", "Sichuan", "du tofu épicé au piment et au poivre du Sichuan (花椒 huājiāo)"],
              ["点心 diǎnxin", "Canton et Hong Kong", "les dim sum : petites bouchées que l'on partage le matin ou à midi"],
              ["肉夹馍 ròujiāmó", "Xi'an", "un pain farci de viande, parfois appelé « hamburger chinois »"],
            ] },
            { t: "propriete", titre: "Le nord du blé, le sud du riz", md: "Traditionnellement, le **nord**, plus sec et plus froid, cultive le **blé** : on y mange des nouilles, des 饺子 jiǎozi (raviolis) et des petits pains à la vapeur. Le **sud**, chaud et humide, cultive le **riz** dans ses rizières." },
            { t: "savais-tu", md: "La cuisine du Sichuan est réputée très épicée : « piquant » se dit 辣 là, et 很辣 hěn là, c'est très épicé ! Le poivre du Sichuan, lui, fait fourmiller la langue." },
          ],
        },
      ],
      bilan: "La Lune règle les fêtes (春节, 元宵节, 端午节, 中秋节), et chaque ville a son visage : Pékin la capitale, Shanghai le port, Hong Kong la région spéciale, Xi'an l'ancienne capitale de la Route de la soie.",
    },
  },
};
