// ÉCLORE — État persistant (local-first). Plusieurs profils par appareil.
// Tout reste sur l'appareil : aucune donnée n'est envoyée nulle part.

const CLE_PROFILS = "eclore:profils";
const CLE_ACTIF = "eclore:profil-actif";
const prefixe = (id) => `eclore:profil:${id}`;
export const VERSION_ETAT = 2;

export function etatVierge(profil) {
  return {
    version: VERSION_ETAT,
    profil: { id: profil.id, prenom: profil.prenom, niveau: profil.niveau, lv2: profil.lv2 || "espagnol", cree: Date.now(), graine: profil.graine ?? Math.floor(Math.random() * 1e9) },
    prefs: { theme: "auto", son: true, animations: true, dys: false, taille: 1, tts: false, objectifItems: 15, confiance: true },
    items: {},      // id → état mémoire FSRS + stats { s, d, due, reps, lapses, last, etape, ok, n, conf:[devine,ok], tempsMs }
    comp: {},       // compétence → { elo, n }
    chapitres: {},  // id → { fiche: ts, decouvert: ts, diag: ts }
    journal: [],    // sessions { t, duree, n, ok, type, chapitres[] }
    jours: {},      // "AAAA-MM-JJ" → { n, ok, ms }
    serie: { actuelle: 0, record: 0, dernierJour: null, joker: 1 },
    lumens: 0,      // monnaie douce : « lumens » gagnés par l'effort
    succes: {},     // id → ts
    cours: {},      // chapitre → { sections: [index lus], lu: ts, verifies: n }
    intro: false,
  };
}

function lire(cle, defaut) {
  try { const v = localStorage.getItem(cle); return v ? JSON.parse(v) : defaut; } catch { return defaut; }
}
function ecrire(cle, val) {
  try { localStorage.setItem(cle, JSON.stringify(val)); return true; } catch { return false; }
}

export function listerProfils() { return lire(CLE_PROFILS, []); }
export function profilActifId() { return lire(CLE_ACTIF, null); }

export function creerProfil({ prenom, niveau, lv2 }) {
  const id = `p${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
  const profils = listerProfils();
  profils.push({ id, prenom, niveau, lv2 });
  ecrire(CLE_PROFILS, profils);
  const etat = etatVierge({ id, prenom, niveau, lv2 });
  ecrire(prefixe(id), etat);
  ecrire(CLE_ACTIF, id);
  return etat;
}

export function supprimerProfil(id) {
  ecrire(CLE_PROFILS, listerProfils().filter(p => p.id !== id));
  try { localStorage.removeItem(prefixe(id)); } catch {}
  if (profilActifId() === id) ecrire(CLE_ACTIF, null);
}

export function chargerProfil(id) {
  const e = lire(prefixe(id), null);
  if (!e) return null;
  ecrire(CLE_ACTIF, id);
  return migrer(e);
}

function migrer(e) {
  // Place pour les migrations futures de schéma.
  if (!e.serie) e.serie = { actuelle: 0, record: 0, dernierJour: null, joker: 1 };
  if (e.serie.joker === undefined) e.serie.joker = 1;
  if (!e.succes) e.succes = {};
  if (!e.jours) e.jours = {};
  if (!e.prefs) e.prefs = etatVierge(e.profil).prefs;
  if (e.prefs.confiance === undefined) e.prefs.confiance = true;
  // v2 : nouvelle charte « Herbier » ; l'ancien thème nuit par défaut devient « auto » (suit l'appareil).
  if ((e.version || 1) < 2 && e.prefs.theme === "nuit") e.prefs.theme = "auto";
  if (!e.cours) e.cours = {};
  e.version = VERSION_ETAT;
  return e;
}

/** Petit store réactif : set() persiste et notifie. */
export function creerStore(etatInitial) {
  let etat = etatInitial;
  const abonnes = new Set();
  let timer = null;
  const persister = () => {
    clearTimeout(timer);
    timer = setTimeout(() => ecrire(prefixe(etat.profil.id), etat), 150);
  };
  return {
    get etat() { return etat; },
    maj(fn) { fn(etat); persister(); abonnes.forEach(cb => cb(etat)); },
    remplacer(nouvel) { etat = migrer(nouvel); ecrire(prefixe(etat.profil.id), etat); abonnes.forEach(cb => cb(etat)); },
    abonner(cb) { abonnes.add(cb); return () => abonnes.delete(cb); },
    sauverMaintenant() { clearTimeout(timer); ecrire(prefixe(etat.profil.id), etat); },
  };
}

export function exporterJSON(etat) {
  return JSON.stringify({ application: "ECLORE", version: VERSION_ETAT, exporte: new Date().toISOString(), etat }, null, 2);
}

export function importerJSON(texte) {
  const data = JSON.parse(texte);
  const e = data?.etat && data.application === "ECLORE" ? data.etat : data;
  if (!e?.profil?.id || !e.items) throw new Error("Fichier de sauvegarde non reconnu.");
  const profils = listerProfils();
  if (!profils.find(p => p.id === e.profil.id)) { profils.push({ id: e.profil.id, prenom: e.profil.prenom, niveau: e.profil.niveau, lv2: e.profil.lv2 }); ecrire(CLE_PROFILS, profils); }
  else ecrire(CLE_PROFILS, profils.map(p => p.id === e.profil.id ? { id: e.profil.id, prenom: e.profil.prenom, niveau: e.profil.niveau, lv2: e.profil.lv2 } : p));
  ecrire(prefixe(e.profil.id), e);
  ecrire(CLE_ACTIF, e.profil.id);
  return migrer(e);
}

export function cleJour(d = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
