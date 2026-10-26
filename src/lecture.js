// ÉCLORE — Lecture à voix haute avec les voix de l'appareil (Web Speech API, rien ne sort de l'appareil).
// Le texte est lu en français. Les passages balisés [[…]] sont lus dans la langue étudiée (celle de la
// matière), [[en:…]] dans la langue indiquée ; l'arabe et le chinois sont reconnus à leur écriture.
// Contrat du balisage : docs/LANGUES.md. Partie pure (segments, classerVoix) testée sous node.
import { MATIERES } from "../content/matieres.js";

export const CODES = { fr: "fr-FR", en: "en-GB", es: "es-ES", de: "de-DE", ar: "ar", zh: "zh-CN" };
const FR = CODES.fr;

// Écritures arabe et chinoise (aussi utilisées par dom.js pour la police et le sens de lecture).
export const RE_ARABE = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]+(?:[  ]+[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]+)*/g;
export const RE_SINO = /[㐀-䶿一-鿿豈-﫿]+(?:[　-〿＀-￯㐀-䶿一-鿿豈-﫿]+)*/g;
const RE_ECRITURES = new RegExp(`(${RE_ARABE.source})|(${RE_SINO.source})`, "g");

// ————————————————————————————— Balisage —————————————————————————————

const RE_PASSAGE = /\[\[(?:(fr|en|es|de|ar|zh):)?([\s\S]*?)\]\]/g;
const RE_MARQUES = /\[\[(?:(?:fr|en|es|de|ar|zh):)?|\]\]/g;

/** Retire les balises de lecture (même orphelines, après un découpage du texte) : ce qu'on affiche. */
export function retirerBalises(t) {
  return String(t ?? "").replace(RE_MARQUES, "");
}

/** Texte prononcé : sans mise en forme ; blancs « ___ », flèches et « / » entre deux formes deviennent une pause,
 *  ✔ ✘ et le tiret d'une terminaison ou d'un préfixe (-ing, ge-) se taisent. */
function nettoyer(t) {
  return t.replace(/\*+|==/g, "").replace(/_{3,}/g, " … ")
    .replace(/\s*[→⇒←↔⟶]\s*/g, ", ").replace(/\s+\/\s+/g, ", ").replace(/[✔✓✘✗]\uFE0F?/g, "")
    .replace(/(^|[\s(«"“,])-(?=\p{L})/gu, "$1").replace(/(\p{L})-(?=[\s,.;:)»"”]|$)/gu, "$1")
    .replace(/\s+/g, " ");
}

function decouperEcritures(texte, lang, out) {
  if (lang === CODES.ar || lang === CODES.zh) { out.push({ texte, lang }); return; }
  let i = 0;
  for (const m of texte.matchAll(RE_ECRITURES)) {
    if (m.index > i) out.push({ texte: texte.slice(i, m.index), lang });
    out.push({ texte: m[0], lang: m[1] ? CODES.ar : CODES.zh });
    i = m.index + m[0].length;
  }
  if (i < texte.length) out.push({ texte: texte.slice(i), lang });
}

/**
 * Découpe un texte (markdown léger + balises) en passages à lire chacun avec sa voix.
 * @returns {{ texte: string, lang: string }[]} langues BCP 47 (fr-FR, en-GB…)
 */
export function segments(texte, matiere = "") {
  const cible = MATIERES[matiere]?.langue || FR;
  const s = String(texte ?? ""), bruts = [];
  let i = 0;
  for (const m of s.matchAll(RE_PASSAGE)) {
    if (m.index > i) decouperEcritures(retirerBalises(s.slice(i, m.index)), FR, bruts);
    decouperEcritures(m[2], m[1] ? CODES[m[1]] : cible, bruts);
    i = m.index + m[0].length;
  }
  if (i < s.length) decouperEcritures(retirerBalises(s.slice(i)), FR, bruts);

  const out = [];
  for (const b of bruts) {
    const t = nettoyer(b.texte), prec = out[out.length - 1];
    if (!/[\p{L}\p{N}]/u.test(t)) { if (prec) prec.texte += t; continue; } // ponctuation seule : rattachée au passage précédent
    if (prec && prec.lang === b.lang) prec.texte += t;
    else out.push({ texte: t, lang: b.lang });
  }
  return out.map((x) => ({ ...x, texte: x.texte.trim() })).filter((x) => x.texte);
}

// ————————————————————————————— Choix des voix —————————————————————————————

const NATURELLES = /natural|neural|online|premium|enhanced|amélioré|wavenet|studio|journey/i;
const ROBOTIQUES = /espeak|e-speak|compact|mbrola|pico|festival/i;
// Voix Eloquence et voix fantaisie d'Apple : amusantes, mais pénibles pour un cours entier.
const FANTAISIE = /^(eddy|flo|grand-?m[eè]re|grand-?p[eè]re|grandma|grandpa|reed|rocko|sandy|shelley|albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|junior|ralph|fred|kathy)\b/i;

function scoreVoix(v, lang, { choisie, enLigne }) {
  const vl = String(v?.lang || "").toLowerCase().replace(/_/g, "-"), l = lang.toLowerCase(), base = l.split("-")[0];
  if (!(vl === base || vl.startsWith(base + "-"))) return null;
  const nom = String(v.name || "");
  let s = vl === l || !l.includes("-") ? 100 : 60;
  if (base === "zh" && (/-hk|yue/.test(vl) || /cantonese|粵/i.test(nom))) s -= 40;
  if (choisie && nom === choisie) s += 1000;
  if (NATURELLES.test(nom)) s += 40;
  if (/google/i.test(nom)) s += 20;
  if (/network/i.test(nom)) s += 15;
  if (ROBOTIQUES.test(nom)) s -= 50;
  if (FANTAISIE.test(nom)) s -= 40;
  if (v.default) s += 5;
  if (enLigne === false && v.localService === false) s -= 200; // une voix en ligne se tait hors connexion
  return s;
}

/** Voix de la langue `lang`, la plus naturelle d'abord (`choisie` : nom de voix imposé par les réglages). */
export function classerVoix(voix, lang, { choisie = "", enLigne = true } = {}) {
  return (voix || [])
    .map((v) => ({ v, s: scoreVoix(v, lang, { choisie, enLigne }) }))
    .filter((x) => x.s !== null)
    .sort((a, b) => b.s - a.s || String(a.v.name).localeCompare(String(b.v.name)))
    .map((x) => x.v);
}

// ————————————————————————————— Lecture (navigateur) —————————————————————————————

export function disponible() {
  return typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined";
}

let voixAppareil = [], voixChoisie = "", enCours = null;
const abonnes = new Set();
function chargerVoix() {
  try { voixAppareil = window.speechSynthesis.getVoices() || []; } catch { voixAppareil = []; }
  return voixAppareil;
}
if (disponible()) {
  chargerVoix();
  // Chrome fournit les voix plus tard : on les reprend à chaque annonce.
  const maj = () => { chargerVoix(); abonnes.forEach((f) => { try { f(); } catch { /* rien */ } }); };
  if (window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener("voiceschanged", maj);
  else window.speechSynthesis.onvoiceschanged = maj;
}

/** Appelle `fn` quand la liste des voix change ; renvoie la fonction de désabonnement. */
export function surChangementVoix(fn) { abonnes.add(fn); return () => abonnes.delete(fn); }

/** Voix française imposée par les réglages ("" : la plus naturelle disponible). */
export function reglerVoix(nom) { voixChoisie = nom || ""; }

/** Voix françaises de l'appareil, la plus naturelle d'abord. */
export function voixFrancaises() {
  return disponible() ? classerVoix(voixAppareil.length ? voixAppareil : chargerVoix(), FR) : [];
}

function voixPour(lang) {
  const liste = voixAppareil.length ? voixAppareil : chargerVoix();
  const enLigne = typeof navigator === "undefined" || navigator.onLine !== false;
  return classerVoix(liste, lang, { choisie: lang === FR ? voixChoisie : "", enLigne })[0] || null;
}

// Chrome coupe les énoncés trop longs : on lit par morceaux d'au plus ~220 caractères, phrase par phrase.
function morceaux(t) {
  const out = []; let cur = "";
  for (const p of t.match(/[^.!?…]+[.!?…]*\s*/g) || [t]) {
    if (cur && (cur + p).length > 220) { out.push(cur); cur = ""; }
    cur += p;
  }
  if (cur.trim()) out.push(cur);
  return out;
}

export function arreter() {
  enCours = null;
  try { window.speechSynthesis?.cancel(); } catch { /* rien */ }
}

/** Lit `texte` (balisé) ; `onFin` est appelé à la fin naturelle ou sur erreur, pas après `arreter()`. */
export function lire(texte, { matiere = "", onFin } = {}) {
  if (!disponible()) { onFin?.(); return; }
  arreter();
  const jeton = {}; enCours = jeton;
  const fin = () => { if (enCours === jeton) { enCours = null; onFin?.(); } };
  const parts = segments(texte, matiere).flatMap((s) => morceaux(s.texte).map((m) => ({ texte: m, lang: s.lang })));
  if (!parts.length) { fin(); return; }
  const voix = new Map();
  try {
    parts.forEach((p, i) => {
      if (!voix.has(p.lang)) voix.set(p.lang, voixPour(p.lang));
      const u = new SpeechSynthesisUtterance(p.texte);
      u.lang = p.lang; u.rate = 0.95;
      if (voix.get(p.lang)) u.voice = voix.get(p.lang);
      if (i === parts.length - 1) u.onend = fin;
      // Une erreur (voix indisponible…) arrête toute la lecture plutôt que d'en sauter un morceau.
      u.onerror = () => { if (enCours !== jeton) return; fin(); try { window.speechSynthesis.cancel(); } catch { /* rien */ } };
      window.speechSynthesis.speak(u);
    });
  } catch { fin(); }
}
