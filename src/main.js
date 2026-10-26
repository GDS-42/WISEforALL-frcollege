// ÉCLORE — point d'entrée : routeur, coquille, thème, profil.
import { h, vider, toast } from "./ui/dom.js";
import { icone } from "./ui/icones.js";
import { listerProfils, profilActifId, chargerProfil, creerStore } from "./store.js";
import { activerSon } from "./audio.js";
import { reglerVoix } from "./lecture.js";
import { initialiser, niveauDepuisXp, synchroniserXp } from "./gamification.js";
import { injecterDefs } from "./ui/defs.js";

export const app = {
  store: null,
  nettoyages: [],
  enQuittant(fn) { this.nettoyages.push(fn); },
  get etat() { return this.store?.etat; },
  naviguer(hash) { if (location.hash === hash) rendre(); else location.hash = hash; },
  rendre: () => rendre(),
  rafraichirEntete: () => dessinerEntete(),
  chargerProfil(id) {
    const e = chargerProfil(id);
    if (!e) return false;
    this.utiliserEtat(e);
    return true;
  },
  utiliserEtat(e) {
    initialiser(e);
    synchroniserXp(e);
    this.store = creerStore(e);
    this.store.abonner(appliquerPrefs);
    this.store.abonner(() => dessinerEntete());
    appliquerPrefs(e);
    demanderPersistance();
  },
  deconnecter() { this.store?.sauverMaintenant(); this.store = null; try { localStorage.removeItem("eclore:profil-actif"); } catch {} this.naviguer("#/profils"); },
};

// Demande au navigateur de ne pas effacer nos données de lui-même (stockage « persistant »).
let persistanceDemandee = false;
function demanderPersistance() {
  if (persistanceDemandee) return;
  persistanceDemandee = true;
  try { navigator.storage?.persist?.().catch(() => {}); } catch {}
}

function themeEffectif(p) {
  const t = p?.theme || "auto";
  if (t === "auto") return matchMedia("(prefers-color-scheme: dark)").matches ? "nuit" : "jour";
  return t === "nuit" ? "nuit" : "jour";
}

function appliquerPrefs(e) {
  const p = e.prefs, racine = document.documentElement;
  racine.dataset.theme = themeEffectif(p);
  racine.dataset.dys = p.dys ? "1" : "0";
  racine.dataset.animations = p.animations ? "1" : "0";
  racine.style.setProperty("--taille", String(p.taille || 1));
  activerSon(!!p.son);
  reglerVoix(p.voix);
}
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => { if (app.etat) appliquerPrefs(app.etat); });

const ecrans = {
  accueil: () => import("./ui/accueil.js").then(m => m.ecranAccueil),
  jardin: () => import("./ui/jardin.js").then(m => m.ecranJardin),
  atlas: () => import("./ui/atlas.js").then(m => m.ecranAtlas),
  matiere: () => import("./ui/atlas.js").then(m => m.ecranMatiere),
  chapitre: () => import("./ui/chapitre.js").then(m => m.ecranChapitre),
  session: () => import("./ui/session.js").then(m => m.ecranSession),
  herbier: () => import("./ui/herbier.js").then(m => m.ecranHerbier),
  boutique: () => import("./ui/herbier.js").then(m => m.ecranBoutique),
  bilan: () => import("./ui/bilan.js").then(m => m.ecranBilan),
  adulte: () => import("./ui/adulte.js").then(m => m.ecranAdulte),
  reglages: () => import("./ui/reglages.js").then(m => m.ecranReglages),
};

const ROUTES = [
  [/^#\/?$/, () => (app.store ? "jardin" : "accueil")],
  [/^#\/profils$/, () => "accueil"],
  [/^#\/jardin$/, () => "jardin"],
  [/^#\/atlas(?:\/(\w+))?$/, () => "atlas"],
  [/^#\/matiere\/(\w+)\/([\w-]+)$/, () => "matiere"],
  [/^#\/chapitre\/([\w-]+?)(?:\/(cours|entrainement|epreuve))?$/, () => "chapitre"],
  [/^#\/session\/(\w+)(?:\/([\w-]+))?$/, () => "session"],
  [/^#\/herbier$/, () => "herbier"],
  [/^#\/boutique$/, () => "boutique"],
  [/^#\/bilan$/, () => "bilan"],
  [/^#\/adulte$/, () => "adulte"],
  [/^#\/reglages$/, () => "reglages"],
];

const NAV = [
  ["#/jardin", "jardin", "Jardin", ["#/jardin", "#/boutique"]],
  ["#/atlas", "atlas", "Atlas", ["#/atlas", "#/matiere", "#/chapitre"]],
  ["#/herbier", "herbier", "Herbier", ["#/herbier"]],
  ["#/bilan", "bilan", "Bilan", ["#/bilan", "#/adulte"]],
  ["#/reglages", "reglages", "Réglages", ["#/reglages"]],
];

function dessinerEntete() {
  const entete = document.getElementById("entete");
  const hash = location.hash || "#/";
  const enSession = hash.startsWith("#/session");
  vider(entete);
  entete.hidden = !app.store || enSession;
  if (!app.store || enSession) return;
  const e = app.etat;
  const niv = niveauDepuisXp(e.gamif?.xp || 0);
  entete.append(h("div", { class: "entete-int" },
    h("a", { class: "logo", href: "#/jardin", "aria-label": "ÉCLORE, retour au jardin" },
      h("img", { src: "assets/icone.svg", alt: "", width: 34, height: 34 }),
      h("span", { class: "mot" }, "ÉCLORE"), h("span", { class: "sous", "aria-hidden": "true" }, "carnet de jardin")),
    h("div", { class: "entete-droite" },
      h("a", { class: "compteur niveau", href: "#/bilan", title: `Niveau ${niv.niveau} : ${niv.nom}${niv.xpSuivant ? ` — ${Math.round(niv.progression * 100)} % vers le suivant` : ""}` },
        icone("feuille", { taille: 16 }), h("span", {}, `Niv. ${niv.niveau}`), h("span", { class: "jauge-mini", "aria-hidden": "true" }, h("i", { style: { width: `${Math.round(niv.progression * 100)}%` } }))),
      h("a", { class: "compteur", href: "#/boutique", title: "Lumens : la lumière récoltée par ton effort. Dépense-les à la boutique du jardin." }, icone("lumen", { taille: 16 }), h("span", {}, String(e.lumens))),
      h("span", { class: "compteur flamme", title: "Jours de suite" }, icone("flamme", { taille: 16 }), h("span", {}, String(e.serie.actuelle))),
      h("a", { class: "compteur", href: "#/profils", title: "Changer de profil" }, icone("profil", { taille: 16 }), h("span", {}, e.profil.prenom)))));
}

let rendering = false, enAttente = false;
async function rendre() {
  if (rendering) { enAttente = true; return; }
  rendering = true;
  try {
    const hash = location.hash || "#/";
    const main = document.getElementById("contenu");
    const nav = document.getElementById("navigation");
    let nom = null, params = [];
    for (const [re, get] of ROUTES) { const m = hash.match(re); if (m) { nom = get(); params = m.slice(1); break; } }
    if (!nom) nom = app.store ? "jardin" : "accueil";
    if (!app.store && nom !== "accueil") { location.hash = "#/profils"; return; }
    const enSession = nom === "session";
    dessinerEntete();
    vider(nav);
    nav.classList.toggle("cache", !app.store || enSession);
    if (app.store && !enSession) for (const [href, ico, lib, prefixes] of NAV) {
      const actif = prefixes.some(p => hash.startsWith(p));
      nav.append(h("a", { href, class: actif ? "actif" : "", "aria-current": actif ? "page" : null }, icone(ico, { taille: 22 }), h("span", {}, lib)));
    }
    document.body.dataset.ecran = nom;
    const ecran = await ecrans[nom]();
    for (const fn of app.nettoyages.splice(0)) { try { fn(); } catch {} }
    vider(main);
    window.scrollTo({ top: 0 });
    try { await ecran(main, params, app); }
    catch (err) {
      console.error(err);
      main.append(h("div", { class: "feuillet" }, h("h2", {}, "Une racine a cédé."), h("p", { class: "muet" }, String(err?.message || err)), h("a", { class: "btn", href: "#/jardin" }, "Retour au jardin")));
    }
    if (document.activeElement === document.body) main.focus({ preventScroll: true });
  } finally {
    rendering = false;
    if (enAttente) { enAttente = false; rendre(); }
  }
}

function demarrer() {
  injecterDefs();
  const id = profilActifId();
  if (id && listerProfils().some(p => p.id === id)) app.chargerProfil(id);
  if (!location.hash || location.hash === "#/") location.hash = app.store ? "#/jardin" : "#/";
  window.addEventListener("hashchange", rendre);
  rendre();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http") && location.hostname !== "localhost") navigator.serviceWorker.register("sw.js").catch(() => {});
  window.addEventListener("beforeunload", () => app.store?.sauverMaintenant());
  document.addEventListener("visibilitychange", () => { if (document.hidden) app.store?.sauverMaintenant(); });
}

demarrer();
export { toast };
