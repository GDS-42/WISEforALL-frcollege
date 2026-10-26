// Balisage de lecture à voix haute [[…]] (docs/LANGUES.md) : où il est permis et à quoi il doit ressembler.
// Partagé par tools/validate.mjs, tools/validate-cours.mjs et tools/annotations.mjs.

export const CODES_BALISE = ["fr", "en", "es", "de", "ar", "zh"];

// Seuls les champs lus à voix haute peuvent être balisés (src/ui/session.js et texteBloc de src/ui/cours.js).
// Jamais dans ce qui sert à corriger (choix des questions, reponses, elements, paires…).
const CHAMP_QUESTION = /^chapitres\[\d+\]\.items\[\d+\]\.(q|texte|recto|explication)$/;
const CHAMP_COURS = /^chapitres\.[^.[\]]+\.sections\[\d+\]\.(titre|blocs\[\d+\]\.(md|terme|titre|texte|legende|q|explication|items\[\d+\](\.(titre|md))?|etapes\[\d+\]|entetes\[\d+\]|lignes\[\d+\]\[\d+\]|choix\[\d+\]))$/;

/** Le champ `chemin` (forme de `chaines`) est-il lu à voix haute ? */
export function champLu(chemin, estCours) {
  return (estCours ? CHAMP_COURS : CHAMP_QUESTION).test(chemin);
}

/** Toutes les chaînes d'un module, dans l'ordre de la source : [chemin, texte]. */
export function* chaines(x, chemin = "") {
  if (typeof x === "string") yield [chemin, x];
  else if (Array.isArray(x)) for (let i = 0; i < x.length; i++) yield* chaines(x[i], `${chemin}[${i}]`);
  else if (x && typeof x === "object") for (const [k, v] of Object.entries(x)) yield* chaines(v, chemin ? `${chemin}.${k}` : k);
}

export const aDesBalises = (t) => /\[\[|\]\]/.test(t);

/** Défauts du balisage d'un texte (liste vide si tout va bien). */
export function problemesBalises(t) {
  const out = [];
  let ouverte = -1;
  for (const m of String(t).matchAll(/\[\[|\]\]/g)) {
    if (m[0] === "[[") {
      if (ouverte >= 0) out.push("balise [[ ouverte dans une autre");
      ouverte = m.index;
      continue;
    }
    if (ouverte < 0) { out.push("]] sans [[ correspondant"); continue; }
    let contenu = t.slice(ouverte + 2, m.index);
    const code = contenu.match(/^([a-z]{2}):/);
    if (code) {
      if (!CODES_BALISE.includes(code[1])) out.push(`code de langue inconnu « ${code[1]} » (permis : ${CODES_BALISE.join(", ")})`);
      contenu = contenu.slice(3);
    }
    if (!contenu.trim()) out.push("balise vide");
    else if (contenu !== contenu.trim()) out.push(`espace au bord de la balise « [[${contenu}]] »`);
    ouverte = -1;
  }
  if (ouverte >= 0) out.push("[[ jamais fermé");
  return out;
}

/** Vérifie un module entier ; renvoie des messages « chemin : problème ». */
export function verifierBalisesModule(mod, estCours) {
  const out = [];
  for (const [chemin, t] of chaines(mod)) {
    if (!aDesBalises(t)) continue;
    if (!champLu(chemin, estCours)) { out.push(`${chemin} : balise de lecture [[…]] dans un champ qui n'est pas lu à voix haute`); continue; }
    for (const p of problemesBalises(t)) out.push(`${chemin} : ${p}`);
  }
  return out;
}
