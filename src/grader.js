// ÉCLORE — Correction des réponses. Principe : être exigeant sur le fond, tolérant sur la forme.
// Une bonne réponse mal formatée (unité, virgule, article, majuscule, coquille) doit être acceptée.

/* ===================== Unités ===================== */
// Chaque unité : dimension + facteur vers l'unité de base de la dimension.
const U = {};
const def = (dim, facteur, ...noms) => noms.forEach(n => { U[n] = { dim, facteur }; });
def("longueur", 1e-6, "µm", "um", "micrometre", "micrometres", "micron", "microns");
def("longueur", 1e-3, "mm", "millimetre", "millimetres");
def("longueur", 1e-2, "cm", "centimetre", "centimetres");
def("longueur", 1e-1, "dm", "decimetre", "decimetres");
def("longueur", 1, "m", "metre", "metres", "meter", "meters");
def("longueur", 10, "dam", "decametre", "decametres");
def("longueur", 100, "hm", "hectometre", "hectometres");
def("longueur", 1000, "km", "kilometre", "kilometres", "kilometer", "kilometers");
def("masse", 1e-3, "mg", "milligramme", "milligrammes");
def("masse", 1e-2, "cg", "centigramme", "centigrammes");
def("masse", 1e-1, "dg", "decigramme", "decigrammes");
def("masse", 1, "g", "gramme", "grammes", "gr");
def("masse", 1000, "kg", "kilogramme", "kilogrammes", "kilo", "kilos");
def("masse", 1e6, "t", "tonne", "tonnes");
def("volume", 1e-6, "mm3", "millimetrecube", "millimetrescubes");
def("volume", 1e-3, "ml", "millilitre", "millilitres", "cm3", "cc", "centimetrecube", "centimetrescubes");
def("volume", 1e-2, "cl", "centilitre", "centilitres");
def("volume", 1e-1, "dl", "decilitre", "decilitres");
def("volume", 1, "l", "litre", "litres", "dm3", "decimetrecube", "decimetrescubes");
def("volume", 100, "hl", "hectolitre", "hectolitres");
def("volume", 1000, "m3", "metrecube", "metrescubes", "kl");
def("aire", 1e-6, "mm2", "millimetrecarre", "millimetrescarres");
def("aire", 1e-4, "cm2", "centimetrecarre", "centimetrescarres");
def("aire", 1e-2, "dm2", "decimetrecarre", "decimetrescarres");
def("aire", 1, "m2", "metrecarre", "metrescarres");
def("aire", 100, "dam2", "a", "are", "ares");
def("aire", 1e4, "hm2", "ha", "hectare", "hectares");
def("aire", 1e6, "km2", "kilometrecarre", "kilometrescarres");
def("duree", 1e-3, "ms", "milliseconde", "millisecondes");
def("duree", 1, "s", "sec", "seconde", "secondes");
def("duree", 60, "min", "mn", "minute", "minutes");
def("duree", 3600, "h", "heure", "heures", "hr", "hrs");
def("duree", 86400, "j", "jour", "jours", "day", "days");
def("duree", 604800, "semaine", "semaines", "week", "weeks");
def("vitesse", 1, "m/s", "ms-1", "m.s-1", "metreparseconde", "metresparseconde", "mps");
def("vitesse", 1 / 3.6, "km/h", "kmh", "km.h-1", "kmh-1", "kilometreparheure", "kilometresparheure", "kph");
def("vitesse", 1000, "km/s", "km.s-1", "kms-1");
def("energie", 1, "j", "joule", "joules");
def("energie", 1000, "kj", "kilojoule", "kilojoules");
def("energie", 1e6, "mj", "megajoule", "megajoules");
def("energie", 3600, "wh", "wattheure", "wattheures");
def("energie", 3.6e6, "kwh", "kilowattheure", "kilowattheures");
def("energie", 4184, "kcal", "kilocalorie", "kilocalories", "calories");
def("puissance", 1, "w", "watt", "watts");
def("puissance", 1000, "kw", "kilowatt", "kilowatts");
def("puissance", 1e6, "mw", "megawatt", "megawatts");
def("information", 1 / 8, "bit", "bits");
def("information", 1, "o", "octet", "octets", "byte", "bytes");
def("information", 1e3, "ko", "kio", "kilooctet", "kilooctets", "kb");
def("information", 1e6, "mo", "mio", "megaoctet", "megaoctets", "mb");
def("information", 1e9, "go", "gio", "gigaoctet", "gigaoctets", "gb");
def("information", 1e12, "to", "tio", "teraoctet", "teraoctets", "tb");
def("compte", 1e3, "millier", "milliers", "k", "mille");
def("compte", 1e6, "million", "millions", "m.", "mio.");
def("compte", 1e9, "milliard", "milliards", "md", "mds");
def("masse-volumique", 1, "g/cm3", "g/ml", "kg/l", "kg/dm3");
def("masse-volumique", 1e-3, "kg/m3", "g/l");
def("tension", 1, "v", "volt", "volts");
def("tension", 1e-3, "mv", "millivolt", "millivolts");
def("intensite", 1, "a", "ampere", "amperes");
def("intensite", 1e-3, "ma", "milliampere", "milliamperes");
def("frequence", 1, "hz", "hertz");
def("frequence", 1000, "khz", "kilohertz");
def("force", 1, "n", "newton", "newtons");
// « a » (are / ampère) : ambigu ; on laisse l'ampère l'emporter seulement si l'unité attendue est une intensité (voir lireUnite).

const SANS_ACCENT = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Normalise une écriture d'unité (« cm³ », « cm^3 », « centimètres cubes », « km.h-1 »…). */
export function normaliserUnite(u) {
  if (!u) return "";
  let t = SANS_ACCENT(String(u).toLowerCase()).trim();
  t = t.replace(/[³]/g, "3").replace(/[²]/g, "2").replace(/\^\s*/g, "").replace(/[⁻]/g, "-").replace(/[¹]/g, "1");
  t = t.replace(/\s*(par|\/|per)\s*/g, "/").replace(/\s*[.·]\s*/g, ".");
  t = t.replace(/\bcubes?\b/g, "cube").replace(/\bcarres?\b/g, "carre");
  t = t.replace(/[\s_-]+(?=\d|cube|carre|$)/g, "").replace(/\s+/g, "");
  t = t.replace(/(\w)cube$/, "$1cube").replace(/[.,;:!?)]+$/, "");
  return t;
}

/** Retourne { dim, facteur, nom } pour une unité connue, sinon null. `attendue` aide à lever les ambiguïtés. */
export function lireUnite(u, attendue = null) {
  const n = normaliserUnite(u);
  if (!n) return null;
  if (n === "a" && attendue && attendue.dim === "intensite") return { ...U.ampere, nom: n };
  const x = U[n] || U[n.replace(/s$/, "")];
  return x ? { ...x, nom: n } : null;
}

/* ===================== Nombres ===================== */
const MOTS_NOMBRES = { zero: 0, un: 1, une: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7, huit: 8, neuf: 9, dix: 10, onze: 11, douze: 12, treize: 13, quatorze: 14, quinze: 15, seize: 16, vingt: 20, trente: 30, quarante: 40, cinquante: 50, soixante: 60, septante: 70, huitante: 80, octante: 80, nonante: 90, cent: 100, cents: 100, mille: 1000, demi: 0.5, moitie: 0.5, quart: 0.25, tiers: 1 / 3,
  one: 1, two: 2, three: 3, four: 4, five: 5, six_: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, twenty: 20, hundred: 100,
  uno: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6, siete: 7, ocho: 8, nueve: 9, diez: 10, once: 11, doce: 12, veinte: 20, cien: 100 };

/** Nombres écrits en lettres (français surtout) : « vingt-trois », « soixante-dix », « deux cents ». */
export function nombreEnLettres(s) {
  const t = SANS_ACCENT(String(s).toLowerCase()).replace(/-/g, " ").replace(/\bet\b/g, " ").trim();
  if (!t || /\d/.test(t)) return NaN;
  const mots = t.split(/\s+/);
  let total = 0, courant = 0, vu = false;
  for (const m of mots) {
    const v = MOTS_NOMBRES[m];
    if (v === undefined) return NaN;
    vu = true;
    if (v === 100) courant = (courant || 1) * 100;
    else if (v === 1000) { total += (courant || 1) * 1000; courant = 0; }
    else if (m === "vingt" && courant % 100 === 4) courant = courant - 4 + 80; // quatre-vingt(s)
    else if (v < 1) courant = (courant || 1) * v;
    else courant += v;
  }
  return vu ? total + courant : NaN;
}

const EXPOSANTS = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-", "⁺": "+" };

/**
 * Lit un nombre dans une saisie libre et sépare l'éventuelle unité.
 * Gère : « 30 cm3 », « 2,5 kg », « 1 250 € », « −8 », « 3/4 », « 3,2 × 10^5 », « 10⁵ », « 4e-3 »,
 * « 25 % », « x = 4 », « environ 8 », « 1 h 30 », « 753 av. J.-C. », « douze ».
 * @returns {{ valeur:number, unite:string, pourcent:boolean, duree:boolean }}  (valeur NaN si illisible)
 */
export function lireNombre(saisie) {
  const vide = { valeur: NaN, unite: "", pourcent: false, duree: false };
  if (typeof saisie === "number") return { ...vide, valeur: saisie };
  let s = String(saisie ?? "").toLowerCase().normalize("NFC");
  s = s.replace(/[    ]/g, " ").replace(/[−–—‒]/g, "-").replace(/\s+/g, " ").trim();
  // Formules d'introduction.
  for (let i = 0; i < 3; i++) s = s.replace(/^(environ|à peu près|a peu pres|presque|≈|~|=|:|[a-z]\s*=|réponse\s*:?|reponse\s*:?|résultat\s*:?|resultat\s*:?|on trouve|on obtient|il y a|c'est|cest|ça fait|ca fait|cela fait|soit|en|l'an|vers|the answer is|it is)\s*/i, "").trim();
  const avJC = /\b(av(ant|\.)?\s*j\.?\s*-?\s*c\.?|av\.?\s*jc|bc|b\.c\.|avant notre ère|av\.? n\.? è\.?)/i.test(s);
  s = s.replace(/\b(av(ant|\.)?|apr(ès|es|\.)?)\s*j\.?\s*-?\s*c\.?|\bav\.?\s*jc\b|\bbc\b|\bb\.c\.|\bad\b|avant notre ère/gi, " ").trim();
  // Durées « 1 h 30 », « 2 min 15 s », « 1h30min ».
  const dur = s.match(/^(\d+(?:[.,]\d+)?)\s*h(?:eures?)?\s*(\d{1,2})?\s*(?:min(?:utes?)?|mn)?\s*(?:(\d{1,2})\s*s(?:ec(?:ondes?)?)?)?$/);
  if (dur && (dur[2] || /h/.test(s))) {
    const sec = parseFloat(dur[1].replace(",", ".")) * 3600 + (dur[2] ? +dur[2] * 60 : 0) + (dur[3] ? +dur[3] : 0);
    if (dur[2] || dur[3]) return { valeur: sec, unite: "s", pourcent: false, duree: true };
  }
  const dur2 = s.match(/^(\d+)\s*(?:min(?:utes?)?|mn)\s*(\d{1,2})\s*(?:s(?:ec(?:ondes?)?)?)?$/);
  if (dur2) return { valeur: +dur2[1] * 60 + +dur2[2], unite: "s", pourcent: false, duree: true };
  // Exposants Unicode en tête (« 10⁵ ») : on les convertit en « 10^5 ».
  s = s.replace(/^(\d+)\s*([⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+)/, (_, b, e) => `${b}^${[...e].map(c => EXPOSANTS[c]).join("")}`);
  s = s.replace(/([x×*·]\s*10)\s*([⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+)/, (_, b, e) => `${b}^${[...e].map(c => EXPOSANTS[c]).join("")}`);
  const re = /^([+-]?)\s*(\d{1,3}(?: \d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?|[.,]\d+)(?:\s*\/\s*(\d+(?:[.,]\d+)?))?(?:\s*(?:[x×*·]\s*10\s*\^?\s*([+-]?\d+)|e([+-]?\d+)))?/;
  const m = s.match(re);
  if (!m) {
    // Nombres en lettres, éventuellement suivis d'une unité (« douze kilos »).
    const mots = s.split(" ");
    for (let k = mots.length; k > 0; k--) {
      const v = nombreEnLettres(mots.slice(0, k).join(" "));
      if (Number.isFinite(v)) return { valeur: avJC ? -v : v, unite: mots.slice(k).join(" "), pourcent: false, duree: false };
    }
    return vide;
  }
  let v = parseFloat(m[2].replace(/ /g, "").replace(",", "."));
  if (m[3]) { const d = parseFloat(m[3].replace(",", ".")); if (!d) return vide; v = v / d; }
  let reste = s.slice(m[0].length).trim();
  // « 10^5 » écrit seul.
  if (!m[4] && !m[5] && /^\^\s*[+-]?\d+/.test(reste)) { const e = reste.match(/^\^\s*([+-]?\d+)/); v = Math.pow(v, +e[1]); reste = reste.slice(e[0].length).trim(); }
  if (m[4] !== undefined) v *= Math.pow(10, +m[4]);
  if (m[5] !== undefined) v *= Math.pow(10, +m[5]);
  if (m[1] === "-") v = -v;
  if (avJC && v > 0) v = -v;
  const pourcent = /^(%|pour ?cents?|percent|por ciento)/.test(reste);
  if (pourcent) reste = reste.replace(/^(%|pour ?cents?|percent|por ciento)/, "").trim();
  return { valeur: v, unite: reste, pourcent, duree: false };
}

/** Compat : ancienne API, renvoie seulement la valeur. */
export function parseNombre(s) { return lireNombre(s).valeur; }

function decimales(x) {
  const s = String(x);
  if (/e-/.test(s)) return parseInt(s.split("e-")[1], 10);
  return s.includes(".") ? s.split(".")[1].length : 0;
}

/**
 * Compare une saisie numérique à la réponse attendue d'un item `num`.
 * @returns {{ ok:boolean, remarque?:string }}
 */
export function comparerNombre(saisie, { reponse, tolerance = 0, unite = "" }) {
  const lu = lireNombre(saisie);
  if (!Number.isFinite(lu.valeur)) return { ok: false };
  const uAtt = lireUnite(unite);
  const uLue = lu.duree ? lireUnite("s") : lireUnite(lu.unite, uAtt);
  const candidats = [lu.valeur];
  let remarque;
  if (uLue && uAtt) {
    if (uLue.dim === uAtt.dim) { if (uLue.facteur !== uAtt.facteur) candidats.unshift(lu.valeur * uLue.facteur / uAtt.facteur); }
    else remarque = `Attention à l'unité : on attendait des ${unite}.`;
  } else if (!uLue && lu.unite && uAtt && !lu.pourcent) {
    // Unité non reconnue : on ignore le texte qui suit le nombre.
  } else if (!lu.unite && uAtt?.dim === "compte") {
    candidats.push(lu.valeur / uAtt.facteur); // « 8000000000 » pour « 8 milliards »
  }
  if (lu.pourcent && unite !== "%") candidats.push(lu.valeur / 100);
  if (unite === "%" && !lu.pourcent && Math.abs(lu.valeur) <= 1 && Math.abs(reponse) > 1) candidats.push(lu.valeur * 100);
  const tol = Math.max(tolerance || 0, Math.abs(reponse) * 1e-9, 1e-12);
  const d = decimales(reponse);
  for (const c of candidats) {
    if (Math.abs(c - reponse) <= tol) return { ok: true, remarque };
    // Valeur plus précise que demandé, qui s'arrondit à la réponse (3,14159 pour 3,14).
    if (!tolerance && d >= 1 && Math.abs(Math.round(c * 10 ** d) / 10 ** d - reponse) < 1e-9) return { ok: true, remarque };
    if (!tolerance && d === 0 && Number.isInteger(reponse) && Math.abs(c - reponse) < 1e-6) return { ok: true, remarque };
  }
  return { ok: false };
}

/** Compat : booléen. */
export function nombreCorrespond(saisie, attendu, tolerance = 0, unite = "") {
  return comparerNombre(saisie, { reponse: attendu, tolerance, unite }).ok;
}

/* ===================== Texte ===================== */
const CONTRACTIONS = [
  [/\bwon't\b/g, "will not"], [/\bcan't\b/g, "cannot"], [/\bcan not\b/g, "cannot"], [/\bshan't\b/g, "shall not"],
  [/\b(\w+)n't\b/g, "$1 not"], [/\bi'm\b/g, "i am"], [/\b(you|we|they)'re\b/g, "$1 are"], [/\b(i|you|we|they)'ve\b/g, "$1 have"],
  [/\b(i|you|he|she|we|they|it)'ll\b/g, "$1 will"], [/\b(i|you|he|she|we|they)'d\b/g, "$1 would"],
  [/\b(he|she|it|that|what|where|who|there)'s\b/g, "$1 is"], [/\blet's\b/g, "let us"],
];
const ARTICLES = {
  fr: /^(le|la|les|l|un|une|des|du|de la|de l|de|d|au|aux)\s+/,
  en: /^(the|a|an|to)\s+/,
  es: /^(el|la|los|las|un|una|unos|unas|lo|al|del)\s+/,
};
const INTROS = /^(c est|ce sont|ce serait|c etait|il s agit (d|de|du|des)|on (l )?appelle|on dit|on parle (de|d)|la reponse est|reponse|je pense que|je crois que|peut etre|surement|it is|this is|that is|es|son|se llama)\s+/;
const NEGATIONS = /\b(pas|non|ne|n|jamais|aucun|aucune|not|no|never|nunca|ni)\b/;

function langueDe(item) { return item?.matiere === "anglais" ? "en" : item?.matiere === "espagnol" ? "es" : "fr"; }

/** Normalisation de base (strict : garde les accents et les tirets ; sinon les retire). */
export function normaliser(s, { strict = false, langue = "fr" } = {}) {
  let t = String(s ?? "").normalize("NFC").toLowerCase();
  t = t.replace(/[   ]/g, " ").replace(/[’‘`´ʼ]/g, "'").replace(/[«»"“”„]/g, " ").replace(/[‐‑–—−]/g, "-");
  t = t.replace(/œ/g, "oe").replace(/æ/g, "ae");
  if (langue === "en" || /[a-z]'[a-z]/.test(t)) for (const [re, r] of CONTRACTIONS) t = t.replace(re, r);
  if (strict) {
    t = t.replace(/^[\s.,;:!?¡¿()[\]'-]+|[\s.,;:!?¡¿()[\]'-]+$/g, "").replace(/\s+/g, " ").trim();
    return t;
  }
  t = SANS_ACCENT(t).replace(/[^a-z0-9ñ\s]/g, " ").replace(/\s+/g, " ").trim();
  return t;
}

function singulier(t) { return t.split(" ").map(w => (w.length > 3 ? w.replace(/(aux)$/, "al").replace(/[sx]$/, "") : w)).join(" "); }

/** Variantes acceptables d'une écriture (non strict) : brute, sans introduction ni article, au singulier, chiffres. */
function variantes(s, langue) {
  const base = normaliser(s, { langue });
  const out = new Set([base]);
  let t = base;
  for (let i = 0; i < 3; i++) {
    const t2 = t.replace(INTROS, "").replace(ARTICLES[langue], "").replace(ARTICLES.fr, langue === "fr" ? "" : "$&").trim();
    if (!t2 || t2 === t) break;
    t = t2;
  }
  out.add(t);
  out.add(singulier(t));
  out.add(singulier(base));
  const n = nombreEnLettres(t);
  if (Number.isFinite(n)) out.add(String(n));
  return [...out].filter(Boolean);
}

export function levenshtein(a, b) {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j), cur = new Array(n + 1);
  for (let i = 1; i <= m; i++) {
    cur[0] = i;
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    [prev, cur] = [cur, prev];
  }
  return prev[n];
}

function coquillesTolerees(longueur) { return longueur >= 14 ? 3 : longueur >= 8 ? 2 : longueur >= 5 ? 1 : 0; }

const estNombre = (s) => /^[+-−]?\s*\d+([.,]\d+)?$/.test(String(s).trim());

/**
 * Compare une saisie à une liste de réponses acceptables.
 * @returns {{ ok:boolean, exact?:boolean, proche?:string }}
 */
const SYMBOLES = { moins: "-", "signe moins": "-", plus: "+", "signe plus": "+", egal: "=", "egale": "=", "signe egal": "=", "deux points": ":", "point virgule": ";", ohm: "ω", ohms: "ω", fois: "×", x: "×", "*": "×", divise: "÷", "/": "÷", pourcent: "%", "pour cent": "%", degre: "°", degres: "°" };
function symbole(s) {
  const t = SANS_ACCENT(String(s ?? "").trim().toLowerCase()).replace(/[−–—‒]/g, "-").replace(/^(le |la |un |une |the )?(signe )?/, "").trim();
  return SYMBOLES[t] || t;
}

export function texteCorrespond(saisie, acceptables, { strict = false, item = null } = {}) {
  const langue = langueDe(item);
  if (!String(saisie ?? "").trim()) return { ok: false };
  // Réponses faites de symboles (« − », « : », « Ω ») : la normalisation textuelle les effacerait.
  if (acceptables.some(a => !normaliser(a, { langue }))) {
    const sy = symbole(saisie);
    if (acceptables.some(a => symbole(a) === sy)) return { ok: true, exact: true };
  }
  // Réponses numériques (« 4 », « 1789 ») : comparaison par la valeur (« +4 », « 4,0 », « quatre », « en 1789 »).
  if (acceptables.some(estNombre)) {
    for (const a of acceptables.filter(estNombre)) if (comparerNombre(saisie, { reponse: parseFloat(String(a).replace(",", ".").replace("−", "-")) }).ok) return { ok: true, exact: true };
  }
  if (strict) {
    const s = normaliser(saisie, { strict: true, langue });
    for (const a of acceptables) if (s === normaliser(a, { strict: true, langue })) return { ok: true, exact: true };
    // Strict : tolère seulement l'article d'introduction ajouté par erreur devant la forme attendue.
    const sansArticle = s.replace(ARTICLES[langue], "");
    for (const a of acceptables) if (sansArticle === normaliser(a, { strict: true, langue })) return { ok: true, exact: true };
    return { ok: false };
  }
  const vs = variantes(saisie, langue);
  const negS = NEGATIONS.test(vs[0]);
  for (const a of acceptables) {
    const va = variantes(a, langue);
    if (vs.some(x => va.includes(x))) return { ok: true, exact: true };
  }
  // Coquilles : distance d'édition proportionnelle à la longueur.
  for (const a of acceptables) {
    const va = variantes(a, langue);
    for (const x of vs) for (const y of va) {
      const tol = coquillesTolerees(y.length);
      if (tol && Math.abs(x.length - y.length) <= tol && levenshtein(x, y) <= tol) return { ok: true, exact: false, proche: a };
    }
  }
  // Inclusion : la réponse attendue figure, mot pour mot, dans une phrase courte (« c'est bien la photosynthèse »).
  for (const a of acceptables) {
    const ya = variantes(a, langue)[1] || normaliser(a, { langue });
    if (ya.length < 4 || (NEGATIONS.test(vs[0]) && !NEGATIONS.test(ya))) continue;
    for (const x of vs) {
      const motsX = x.split(" "), motsA = ya.split(" ");
      if (motsX.length > motsA.length + 4) continue;
      if (` ${x} `.includes(` ${ya} `) || ` ${singulier(x)} `.includes(` ${singulier(ya)} `)) return { ok: true, exact: false, proche: a };
    }
  }
  void negS;
  return { ok: false };
}

/* ===================== Correction d'un item ===================== */
/**
 * Corrige une réponse. `reponse` dépend du type :
 *  qcm → index ; vf → bool ; trous → string[] ; ordre → index[] ; assoc → number[] ; num → string ; texte → string ; flash → note 1..4
 * Retourne { juste, score (0..1), detail, remarque? }.
 */
export function corriger(item, reponse) {
  switch (item.type) {
    case "qcm": return { juste: reponse === item.bonne, score: reponse === item.bonne ? 1 : 0 };
    case "vf": return { juste: reponse === item.reponse, score: reponse === item.reponse ? 1 : 0 };
    case "trous": {
      const res = item.reponses.map((acc, i) => texteCorrespond(reponse?.[i], acc, { strict: !!item.strict, item }));
      const n = res.filter(r => r.ok).length;
      return { juste: n === res.length, score: n / res.length, detail: res };
    }
    case "ordre": {
      const bons = (reponse || []).filter((v, i) => v === i).length;
      const juste = Array.isArray(reponse) && reponse.length === item.elements.length && bons === item.elements.length;
      return { juste, score: juste ? 1 : bons / item.elements.length, detail: reponse };
    }
    case "assoc": {
      const bons = (reponse || []).filter((v, i) => v === i).length;
      return { juste: bons === item.paires.length, score: bons / item.paires.length, detail: reponse };
    }
    case "num": { const r = comparerNombre(reponse, item); return { juste: r.ok, score: r.ok ? 1 : 0, remarque: r.remarque }; }
    case "texte": { const r = texteCorrespond(reponse, item.reponses, { strict: !!item.strict, item }); return { juste: r.ok, score: r.ok ? 1 : 0, detail: r, remarque: r.ok && !r.exact ? `Accepté. Forme attendue : ${item.reponses[0]}.` : undefined }; }
    case "flash": { const n = Number(reponse) || 1; return { juste: n >= 2, score: (n - 1) / 3, autoNote: n }; }
    default: return { juste: false, score: 0 };
  }
}

export function formaterReponseAttendue(item) {
  switch (item.type) {
    case "qcm": return item.choix[item.bonne];
    case "vf": return item.reponse ? "Vrai" : "Faux";
    case "trous": return item.reponses.map(r => r[0]).join(" · ");
    case "ordre": return item.elements.join(" → ");
    case "assoc": return item.paires.map(p => `${p[0]} ↔ ${p[1]}`).join(" ; ");
    case "num": return `${formaterNombre(item.reponse)}${item.unite ? " " + item.unite : ""}`;
    case "texte": return item.reponses[0];
    case "flash": return item.verso;
    default: return "";
  }
}

export function formaterNombre(n) {
  if (!Number.isFinite(n)) return String(n);
  const s = Number.isInteger(n) ? String(Math.abs(n)) : String(Math.round(Math.abs(n) * 1e6) / 1e6);
  const [ent, dec] = s.split(".");
  const groupe = ent.length > 4 ? ent.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : ent;
  return (n < 0 ? "−" : "") + groupe + (dec ? "," + dec : "");
}
