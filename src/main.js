// ÉCLORE — point d'entrée : routeur, coquille d'application, thème, profil.
import { h, vider, toast } from "./ui/dom.js";
import { listerProfils, profilActifId, chargerProfil, creerStore } from "./store.js";
import { activerSon } from "./audio.js";
import { ecranAccueil } from "./ui/accueil.js";
import { ecranJardin } from "./ui/jardin.js";
import { ecranAtlas, ecranMatiere } from "./ui/atlas.js";
import { ecranChapitre } from "./ui/chapitre.js";
import { ecranSession } from "./ui/session.js";
import { ecranBilan } from "./ui/bilan.js";
import { ecranAdulte } from "./ui/adulte.js";
import { ecranReglages } from "./ui/reglages.js";

export const app = {
  store: null,
  get etat() { return this.store?.etat; },
  naviguer(hash) { if (location.hash === hash) rendre(); else location.hash = hash; },
  rendre: () => rendre(),
  chargerProfil(id) {
    const e = chargerProfil(id);
    if (!e) return false;
    this.store = creerStore(e);
    this.store.abonner(appliquerPrefs);
    appliquerPrefs(e);
    return true;
  },
  utiliserEtat(e) { this.store = creerStore(e); this.store.abonner(appliquerPrefs); appliquerPrefs(e); },
  deconnecter() { this.store?.sauverMaintenant(); this.store = null; try { localStorage.removeItem("eclore:profil-actif"); } catch {} this.naviguer("#/profils"); },
};

function appliquerPrefs(e) {
  const p = e.prefs;
  const racine = document.documentElement, corps = document.body;
  corps.dataset.theme = p.theme === "jour" ? "jour" : "nuit";
  racine.dataset.dys = p.dys ? "1" : "0";
  racine.dataset.animations = p.animations ? "1" : "0";
  racine.style.setProperty("--taille", String(p.taille || 1));
  activerSon(!!p.son);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", p.theme === "jour" ? "#faf6ee" : "#0d1230");
}

const ROUTES = [
  [/^#\/?$/, () => (app.store ? ecranJardin : ecranAccueil)],
  [/^#\/profils$/, () => ecranAccueil],
  [/^#\/jardin$/, () => ecranJardin],
  [/^#\/atlas(?:\/(\w+))?$/, () => ecranAtlas],
  [/^#\/matiere\/(\w+)\/([\w-]+)$/, () => ecranMatiere],
  [/^#\/chapitre\/([\w-]+)$/, () => ecranChapitre],
  [/^#\/session\/(\w+)(?:\/([\w-]+))?$/, () => ecranSession],
  [/^#\/bilan$/, () => ecranBilan],
  [/^#\/adulte$/, () => ecranAdulte],
  [/^#\/reglages$/, () => ecranReglages],
];

const NAV = [
  ["#/jardin", "🌙", "Jardin"],
  ["#/atlas", "🗺️", "Atlas"],
  ["#/bilan", "🌿", "Bilan"],
  ["#/reglages", "⚙️", "Réglages"],
];

let rendering = false;
async function rendre() {
  if (rendering) return; rendering = true;
  try {
    const hash = location.hash || "#/";
    const main = document.getElementById("contenu");
    const entete = document.getElementById("entete");
    const nav = document.getElementById("navigation");
    let ecran = null, params = [];
    for (const [re, get] of ROUTES) { const m = hash.match(re); if (m) { ecran = get(); params = m.slice(1); break; } }
    if (!ecran) { ecran = app.store ? ecranJardin : ecranAccueil; }
    if (!app.store && ecran !== ecranAccueil) { location.hash = "#/profils"; return; }
    const enSession = ecran === ecranSession;
    // En-tête
    vider(entete);
    if (app.store && !enSession) {
      const e = app.etat;
      entete.append(h("div", { class: "entete-int" },
        h("a", { class: "logo", href: "#/jardin", "aria-label": "ÉCLORE, accueil" }, h("img", { src: "assets/icone.svg", alt: "" }), "ÉCLORE"),
        h("div", { class: "entete-droite" },
          h("span", { class: "pastille", title: "Lumens : la lumière récoltée par ton effort" }, "✦ ", h("strong", {}, String(e.lumens))),
          h("span", { class: "pastille", title: "Jours de suite" }, "🔥 ", h("strong", {}, String(e.serie.actuelle))),
          h("a", { class: "pastille", href: "#/profils", title: "Changer de profil", style: { textDecoration: "none" } }, e.profil.prenom, " · ", e.profil.niveau))));
    }
    // Navigation
    vider(nav);
    nav.classList.toggle("cache", !app.store || enSession);
    if (app.store && !enSession) for (const [href, ico, lib] of NAV) nav.append(h("a", { href, class: hash.startsWith(href) ? "actif" : "" }, h("span", { class: "ico", "aria-hidden": "true" }, ico), lib));
    // Écran
    vider(main);
    main.scrollTop = 0; window.scrollTo({ top: 0 });
    try { await ecran(main, params, app); }
    catch (err) {
      console.error(err);
      main.append(h("div", { class: "carte" }, h("h2", {}, "Oups, une racine a cédé."), h("p", { class: "muet" }, String(err?.message || err)), h("a", { class: "bouton", href: "#/jardin" }, "Retour au jardin")));
    }
  } finally { rendering = false; }
}

function lucioles() {
  const zone = document.querySelector(".lucioles"); if (!zone) return;
  for (let i = 0; i < 14; i++) {
    const l = h("span", { class: "luciole" });
    l.style.left = `${Math.random() * 100}%`; l.style.top = `${30 + Math.random() * 70}%`;
    l.style.setProperty("--d", `${10 + Math.random() * 14}s`); l.style.setProperty("--delai", `${-Math.random() * 20}s`);
    l.style.setProperty("--dx", `${(Math.random() - 0.5) * 160}px`); l.style.setProperty("--dy", `${-40 - Math.random() * 120}px`);
    zone.append(l);
  }
}

function demarrer() {
  lucioles();
  const id = profilActifId();
  if (id && listerProfils().some(p => p.id === id)) app.chargerProfil(id);
  if (!location.hash || location.hash === "#/") location.hash = app.store ? "#/jardin" : "#/";
  window.addEventListener("hashchange", rendre);
  rendre();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
  window.addEventListener("beforeunload", () => app.store?.sauverMaintenant());
}

demarrer();
export { toast };
