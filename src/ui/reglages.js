// ÉCLORE — Réglages : accessibilité d'abord (dys, taille, animations, lecture à voix haute), puis confort.
import { h, toast, poser, remplacer, dateCourte } from "./dom.js";
import { icone } from "./icones.js";
import { NIVEAUX } from "../content.js";
import { secoursDisponible, restaurerSecours } from "../store.js";
import { boutonsExport, zoneImport, ilYa } from "./sauvegarde.js";
import { disponible as lectureDisponible, voixFrancaises, surChangementVoix, lire } from "../lecture.js";

export async function ecranReglages(main, params, app) {
  const e = app.etat;
  const p = e.prefs;
  const set = (k, v) => app.store.maj(x => { x.prefs[k] = v; });
  const bascule = (k, lib, desc) => h("div", { class: "toggle" }, h("div", {}, h("div", {}, lib), desc ? h("div", { class: "desc" }, desc) : null),
    h("button", { class: "interrupteur", role: "switch", "aria-checked": p[k] ? "true" : "false", "aria-label": lib, onclick: (ev) => { set(k, !app.etat.prefs[k]); ev.currentTarget.setAttribute("aria-checked", app.etat.prefs[k] ? "true" : "false"); } }));

  poser(main, 
    h("div", { class: "entete-page" }, h("div", {}, h("span", { class: "etiquette" }, "Ton carnet"), h("h1", { style: { margin: ".1rem 0 0" } }, "Réglages"))),
    h("div", { class: "feuillet" },
      h("h3", {}, "Confort de lecture"),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Thème"), h("div", { class: "desc" }, "Auto suit le réglage de ton appareil. Le papier de jour est le plus contrasté.")),
        h("div", { class: "segments" }, [["auto", "Auto"], ["jour", "Jour"], ["nuit", "Nuit"]].map(([v, l]) => h("button", { "aria-pressed": p.theme === v ? "true" : "false", onclick: () => { set("theme", v); app.rendre(); } }, l)))),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Taille du texte")),
        h("div", { class: "segments" }, [[0.9, "A"], [1, "A"], [1.15, "A"], [1.3, "A"]].map(([v, l], i) => h("button", { "aria-pressed": Math.abs(p.taille - v) < 0.01 ? "true" : "false", style: { fontSize: `${0.8 + i * 0.15}rem` }, "aria-label": `Taille ${i + 1}`, onclick: () => { set("taille", v); app.rendre(); } }, l)))),
      bascule("dys", "Lecture facilitée (dys)", "Police Atkinson Hyperlegible, interlignes et espacements augmentés."),
      bascule("animations", "Animations", "Désactive les mouvements si tu préfères le calme (ou en cas de sensibilité)."),
      bascule("tts", "Lecture à voix haute", "Affiche un bouton « Écouter » pour lire les questions et explications (voix de l'appareil)."),
      choixVoix(app)),
    h("div", { class: "feuillet" },
      h("h3", {}, "Apprentissage"),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Objectif quotidien"), h("div", { class: "desc" }, "Nombre de questions par séance et par jour. Petit et tenable vaut mieux que grand et abandonné.")),
        h("div", { class: "segments" }, [8, 12, 15, 20, 30].map(v => h("button", { "aria-pressed": p.objectifItems === v ? "true" : "false", onclick: () => { set("objectifItems", v); app.rendre(); } }, String(v))))),
      bascule("confiance", "Jauge de confiance", "Avant de valider, dire si tu devines ou si tu es sûr. Cela entraîne la lucidité et affine les révisions."),
      bascule("son", "Sons", "Carillons discrets pour les réponses et la fin de séance."),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Classe"), h("div", { class: "desc" }, "Change le niveau de référence (le jardin affiché). Tes progrès sont conservés.")),
        h("div", { class: "segments" }, NIVEAUX.map(n => h("button", { "aria-pressed": e.profil.niveau === n ? "true" : "false", onclick: () => { app.store.maj(x => { x.profil.niveau = n; }); majProfil(e); app.rendre(); } }, n)))),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Deuxième langue"), h("div", { class: "desc" }, "Une seule langue apparaît dans ton jardin ; tes progrès dans les autres sont conservés si tu changes.")),
        h("div", { class: "segments" }, CHOIX_LV2.map(([v, l]) => h("button", { "aria-pressed": (e.profil.lv2 || "espagnol") === v ? "true" : "false", onclick: () => { app.store.maj(x => { x.profil.lv2 = v; }); majProfil(e); app.rendre(); } }, l))))),
    carteDonnees(app),
    h("div", { class: "feuillet" },
      h("h3", {}, "À propos"),
      h("p", { class: "muet petit", style: { marginBottom: 0 } }, "ÉCLORE est un jeu libre et gratuit pour apprendre le programme du collège. Il s'appuie sur la recherche en sciences cognitives : pratique de récupération, répétition espacée (FSRS), entrelacement, feedback élaboré, métacognition. Il ne collecte aucune donnée.")));
}

/** Voix française de la lecture à voix haute : la plus naturelle par défaut, ou celle que l'élève préfère. */
function choixVoix(app) {
  if (!lectureDisponible()) return null;
  const sel = h("select", { id: "voix" });
  const remplir = () => {
    const voix = voixFrancaises(), choisie = app.etat.prefs.voix || "";
    sel.replaceChildren(
      h("option", { value: "" }, voix[0] ? `Automatique (${voix[0].name})` : "Automatique"),
      ...voix.map(v => h("option", { value: v.name }, v.localService === false ? `${v.name} (en ligne)` : v.name)));
    if (choisie && !voix.some(v => v.name === choisie)) sel.append(h("option", { value: choisie }, `${choisie} (absente de cet appareil)`));
    sel.value = choisie;
  };
  remplir();
  app.enQuittant(surChangementVoix(remplir)); // Chrome annonce ses voix après coup
  sel.addEventListener("change", () => app.store.maj(x => { x.prefs.voix = sel.value; }));
  return h("div", { class: "toggle choix-voix" },
    h("div", {}, h("label", { for: "voix" }, "Voix française"),
      h("div", { class: "desc" }, "Les voix viennent de ton appareil. Pour une voix plus naturelle : le navigateur Edge propose des voix « Natural » ; sur iPhone, iPad ou Mac, va dans Accessibilité › Contenu énoncé › Voix et télécharge une voix française « Premium » ou « améliorée » ; sur Android, installe les données vocales françaises du moteur Google (Paramètres › Synthèse vocale).")),
    h("div", { class: "rang" }, sel,
      h("button", { class: "btn discret petit", type: "button", onclick: () => lire("Bonjour ! C'est avec cette voix que je lirai tes cours et tes questions.") }, icone("son", { taille: 16 }), "Essayer")));
}

/** « Mes données » : sauvegarder dans un fichier, reprendre un fichier, annuler le dernier import. */
function carteDonnees(app) {
  const e = app.etat, id = e.profil.id;
  const persistance = h("p", { class: "tres-muet petit", style: { margin: ".6rem 0 0" } });
  navigator.storage?.persisted?.().then(ok => { persistance.textContent = ok ? "Ce navigateur protège tes données de l'effacement automatique. Un fichier de sauvegarde reste la meilleure assurance." : "Ce navigateur peut effacer les données des sites peu visités : sauvegarde régulièrement."; }).catch(() => {});
  const zone = h("div");
  const secours = secoursDisponible(id);
  return h("div", { class: "feuillet donnees" },
    h("h3", {}, "Mes données"),
    h("p", { class: "muet petit" }, "Ton carnet vit dans ce navigateur, sur cet appareil. Un fichier de sauvegarde te protège d'un effacement accidentel et te permet de continuer ailleurs : sur un autre ordinateur, une tablette, un téléphone."),
    h("p", { class: "derniere-sauvegarde" }, "Dernière sauvegarde : ", h("b", {}, ilYa(e.sauvegarde?.derniere))),
    h("div", { class: "rang" },
      boutonsExport(app),
      h("button", { class: "btn", type: "button", onclick: (ev) => { ev.currentTarget.disabled = true; remplacer(zone, zoneImport(app, { compact: true, surInstalles: (etats) => {
        const actif = etats.find(x => x.profil.id === app.etat.profil.id) || etats[0];
        app.utiliserEtat(actif);
        toast(`Carnet de ${actif.profil.prenom} repris depuis le fichier.`, { icone: "🌿" });
        app.rendre();
      } })); } }, icone("haut"), "Reprendre un fichier")),
    zone,
    secours ? h("div", { class: "rang", style: { marginTop: ".8rem" } },
      h("button", { class: "btn discret", type: "button", onclick: () => {
        if (!confirm(`Remettre le carnet tel qu'il était le ${dateCourte(secours)}, avant le dernier import ?`)) return;
        app.store.sauverMaintenant();
        const r = restaurerSecours(id);
        if (r) { app.utiliserEtat(r); toast("Carnet restauré tel qu'il était avant l'import.", { icone: "↩️" }); app.rendre(); }
      } }, icone("recommencer"), `Annuler le dernier import (copie du ${dateCourte(secours)})`)) : null,
    persistance,
    h("div", { class: "rang", style: { marginTop: ".8rem" } },
      h("a", { class: "btn discret", href: "#/adulte" }, "Espace adulte"),
      h("button", { class: "btn discret", onclick: () => app.deconnecter() }, "Changer de profil")));
}

/** Deuxièmes langues proposées (une seule suivie par profil). */
export const CHOIX_LV2 = [["espagnol", "Espagnol"], ["allemand", "Allemand"], ["arabe", "Arabe"], ["chinois", "Chinois"], ["aucune", "Aucune / pas encore"]];

function majProfil(e) {
  try {
    const profils = JSON.parse(localStorage.getItem("eclore:profils") || "[]");
    localStorage.setItem("eclore:profils", JSON.stringify(profils.map(p => p.id === e.profil.id ? { ...p, niveau: e.profil.niveau, lv2: e.profil.lv2 } : p)));
  } catch {}
}
