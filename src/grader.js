// ÉCLORE — Correction des réponses.

export function normaliser(s, { strict = false } = {}) {
  let t = String(s ?? "").trim().toLowerCase().replace(/\s+/g, " ");
  t = t.replace(/[’‘`´]/g, "'").replace(/[«»"“”]/g, "").replace(/ /g, " ");
  t = t.replace(/[.,;:!?…]+$/g, "").trim();
  if (!strict) {
    t = t.normalize("NFD").replace(/[̀-ͯ]/g, "");
    t = t.replace(/^(le |la |les |l'|un |une |des |the |a |an |el |los |las |una )/, "");
    t = t.replace(/[-']/g, " ").replace(/\s+/g, " ").trim();
  }
  return t;
}

export function levenshtein(a, b) {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j), cur = new Array(n + 1);
  for (let i = 1; i <= m; i++) {
    cur[0] = i;
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    [prev, cur] = [cur, prev];
  }
  return prev[n];
}

/** Compare une saisie à une liste d'acceptables. Tolère une coquille sur les mots longs (sauf strict). */
export function texteCorrespond(saisie, acceptables, { strict = false } = {}) {
  const s = normaliser(saisie, { strict });
  if (!s) return { ok: false };
  for (const a of acceptables) {
    const r = normaliser(a, { strict });
    if (s === r) return { ok: true, exact: true };
  }
  if (!strict) {
    for (const a of acceptables) {
      const r = normaliser(a, { strict });
      if (r.length >= 6 && levenshtein(s, r) <= 1) return { ok: true, exact: false, proche: a };
      if (r.length >= 10 && levenshtein(s, r) <= 2) return { ok: true, exact: false, proche: a };
    }
  }
  return { ok: false };
}

export function parseNombre(s) {
  if (typeof s === "number") return s;
  let t = String(s ?? "").trim().replace(/\s| /g, "").replace(",", ".");
  t = t.replace(/^\+/, "").replace(/[−–]/, "-");
  // fractions « 3/4 »
  const f = t.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (f) { const d = parseFloat(f[2]); return d ? parseFloat(f[1]) / d : NaN; }
  t = t.replace(/[^0-9.\-e]/gi, "");
  if (!t || t === "-" || t === ".") return NaN;
  return parseFloat(t);
}

export function nombreCorrespond(saisie, attendu, tolerance = 0) {
  const v = parseNombre(saisie);
  if (!Number.isFinite(v)) return false;
  const tol = Math.max(tolerance || 0, Math.abs(attendu) * 1e-9);
  return Math.abs(v - attendu) <= tol + 1e-12;
}

/**
 * Corrige une réponse. `reponse` dépend du type :
 *  qcm → index ; vf → bool ; trous → string[] ; ordre → index[] (ordre choisi des éléments d'origine) ;
 *  assoc → number[] (pour chaque gauche, index de la droite choisie) ; num → string ; texte → string ; flash → note 1..4
 * Retourne { juste, score (0..1), detail }.
 */
export function corriger(item, reponse) {
  switch (item.type) {
    case "qcm": return { juste: reponse === item.bonne, score: reponse === item.bonne ? 1 : 0 };
    case "vf": return { juste: reponse === item.reponse, score: reponse === item.reponse ? 1 : 0 };
    case "trous": {
      const res = item.reponses.map((acc, i) => texteCorrespond(reponse?.[i], acc, { strict: !!item.strict }));
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
      const juste = bons === item.paires.length;
      return { juste, score: bons / item.paires.length, detail: reponse };
    }
    case "num": { const ok = nombreCorrespond(reponse, item.reponse, item.tolerance); return { juste: ok, score: ok ? 1 : 0 }; }
    case "texte": { const r = texteCorrespond(reponse, item.reponses, { strict: !!item.strict }); return { juste: r.ok, score: r.ok ? 1 : 0, detail: r }; }
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
  const s = Number.isInteger(n) ? String(n) : String(Math.round(n * 1e6) / 1e6);
  return s.replace(".", ",").replace("-", "−");
}
