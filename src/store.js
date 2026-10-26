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
    sauvegarde: { derniere: null }, // date du dernier fichier de sauvegarde exporté
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
  try { localStorage.removeItem(prefixe(id)); localStorage.removeItem(cleSecours(id)); } catch {}
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
  if (!e.sauvegarde || typeof e.sauvegarde !== "object") e.sauvegarde = { derniere: null };
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

/** Tous les carnets de l'appareil (pour une sauvegarde familiale). */
export function etatsDeTousLesProfils() {
  return listerProfils().map(p => lire(prefixe(p.id), null)).filter(Boolean).map(migrer);
}

/** L'id d'un profil existe-t-il déjà sur cet appareil ? */
export function profilExiste(id) { return listerProfils().some(p => p.id === id); }

/**
 * Installe un carnet lu dans un fichier. S'il remplace un carnet existant, l'état local est
 * d'abord copié en secours (une seule copie par profil), restaurable avec restaurerSecours().
 */
export function installerProfil(etat, { secours = true } = {}) {
  const id = etat.profil.id;
  const local = lire(prefixe(id), null);
  if (secours && local) ecrire(cleSecours(id), { le: Date.now(), etat: local });
  const fiche = { id, prenom: etat.profil.prenom, niveau: etat.profil.niveau, lv2: etat.profil.lv2 };
  const profils = listerProfils();
  ecrire(CLE_PROFILS, profils.some(p => p.id === id) ? profils.map(p => p.id === id ? fiche : p) : [...profils, fiche]);
  const e = migrer(etat);
  ecrire(prefixe(id), e);
  ecrire(CLE_ACTIF, id);
  return e;
}

const cleSecours = (id) => `eclore:secours:${id}`;
/** Date de la copie de secours d'un profil (avant le dernier import), ou null. */
export function secoursDisponible(id) { return lire(cleSecours(id), null)?.le || null; }
/** Remet le carnet tel qu'il était avant le dernier import. */
export function restaurerSecours(id) {
  const s = lire(cleSecours(id), null);
  if (!s?.etat) return null;
  const e = installerProfil(s.etat, { secours: false });
  try { localStorage.removeItem(cleSecours(id)); } catch {}
  return e;
}

export function cleJour(d = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
