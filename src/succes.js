// ÉCLORE — Succès (badges) : ils célèbrent l'effort, la régularité et la lucidité, jamais la seule performance.
export const SUCCES = [
  { id: "premiere-graine", nom: "Première graine", desc: "Tu as planté ta toute première graine.", icone: "🌱", test: e => Object.keys(e.items).length >= 1 },
  { id: "jardinier", nom: "Mains dans la terre", desc: "100 questions travaillées.", icone: "🪴", test: e => Object.values(e.items).reduce((s, i) => s + (i.n || 0), 0) >= 100 },
  { id: "forestier", nom: "Forêt naissante", desc: "500 questions travaillées.", icone: "🌳", test: e => Object.values(e.items).reduce((s, i) => s + (i.n || 0), 0) >= 500 },
  { id: "aube", nom: "Trois aubes", desc: "Trois jours de suite dans le jardin.", icone: "🌅", test: e => e.serie.record >= 3 },
  { id: "semaine", nom: "Une semaine de lumière", desc: "Sept jours de suite. La régularité est la vraie magie.", icone: "🔥", test: e => e.serie.record >= 7 },
  { id: "lune", nom: "Un cycle de lune", desc: "Trente jours d'activité au total.", icone: "🌙", test: e => Object.keys(e.jours).length >= 30 },
  { id: "compost", nom: "Compost", desc: "Dix erreurs transformées en réussites : l'erreur nourrit le jardin.", icone: "♻️", test: e => Object.values(e.items).filter(i => i.lapses > 0 && i.derniereNote >= 3).length >= 10 },
  { id: "boussole", nom: "Boussole juste", desc: "Quand tu dis « sûr », tu as raison 9 fois sur 10 (sur au moins 30 réponses).", icone: "🧭", test: e => { let n = 0, ok = 0; for (const i of Object.values(e.items)) if (i.conf) { n += i.conf[2][0]; ok += i.conf[2][1]; } return n >= 30 && ok / n >= 0.9; } },
  { id: "humble", nom: "Lucidité", desc: "Tu as dit « je devine » et tu avais tort : savoir ce qu'on ne sait pas, c'est déjà savoir.", icone: "🪞", test: e => Object.values(e.items).some(i => i.conf && i.conf[0][0] > i.conf[0][1]) },
  { id: "arbre", nom: "Premier arbre", desc: "Une connaissance stable depuis plus de deux mois.", icone: "🌲", test: e => Object.values(e.items).some(i => i.s >= 60) },
  { id: "bosquet", nom: "Bosquet", desc: "Cinquante connaissances stables (plus de trois semaines).", icone: "🏞️", test: e => Object.values(e.items).filter(i => i.s >= 21).length >= 50 },
  { id: "explorateur", nom: "Curiosité", desc: "Tu as exploré cinq matières différentes.", icone: "🧭", test: e => new Set(Object.keys(e.items).map(id => id.split("-")[1])).size >= 5 },
  { id: "patience", nom: "Patience", desc: "Dix heures passées à apprendre, à ton rythme.", icone: "⏳", test: e => Object.values(e.jours).reduce((s, j) => s + (j.ms || 0), 0) >= 10 * 3600000 },
  { id: "marathon", nom: "Souffle long", desc: "Vingt sessions terminées.", icone: "🎐", test: e => e.journal.length >= 20 },
  { id: "defi", nom: "Esprit vif", desc: "Un défi chronométré réussi à 80 % ou plus.", icone: "⚡", test: e => e.journal.some(s => s.type === "defi" && s.n >= 8 && s.ok / s.n >= 0.8) },
];

export function verifierSucces(etat, maintenant = Date.now()) {
  const nouveaux = [];
  for (const s of SUCCES) {
    if (etat.succes[s.id]) continue;
    let ok = false;
    try { ok = s.test(etat); } catch { ok = false; }
    if (ok) { etat.succes[s.id] = maintenant; nouveaux.push(s); }
  }
  return nouveaux;
}
