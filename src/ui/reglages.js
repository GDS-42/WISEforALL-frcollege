// ÉCLORE — Réglages : accessibilité d'abord (dys, taille, animations, lecture à voix haute), puis confort.
import { h, toast } from "./dom.js";
import { NIVEAUX } from "../content.js";
import { exporterJSON } from "../store.js";

export async function ecranReglages(main, params, app) {
  const e = app.etat;
  const p = e.prefs;
  const set = (k, v) => app.store.maj(x => { x.prefs[k] = v; });
  const bascule = (k, lib, desc) => h("div", { class: "toggle" }, h("div", {}, h("div", {}, lib), desc ? h("div", { class: "desc" }, desc) : null),
    h("button", { class: "interrupteur", role: "switch", "aria-checked": p[k] ? "true" : "false", "aria-label": lib, onclick: (ev) => { set(k, !app.etat.prefs[k]); ev.currentTarget.setAttribute("aria-checked", app.etat.prefs[k] ? "true" : "false"); } }));

  main.append(
    h("h1", {}, "Réglages"),
    h("div", { class: "carte" },
      h("h3", {}, "Confort de lecture"),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Thème"), h("div", { class: "desc" }, "Le jardin de nuit repose les yeux ; le jour est plus contrasté.")),
        h("div", { class: "segments" }, [["nuit", "🌙 Nuit"], ["jour", "☀️ Jour"]].map(([v, l]) => h("button", { "aria-pressed": p.theme === v ? "true" : "false", onclick: () => { set("theme", v); app.rendre(); } }, l)))),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Taille du texte")),
        h("div", { class: "segments" }, [[0.9, "A"], [1, "A"], [1.15, "A"], [1.3, "A"]].map(([v, l], i) => h("button", { "aria-pressed": Math.abs(p.taille - v) < 0.01 ? "true" : "false", style: { fontSize: `${0.8 + i * 0.15}rem` }, "aria-label": `Taille ${i + 1}`, onclick: () => { set("taille", v); app.rendre(); } }, l)))),
      bascule("dys", "Lecture facilitée (dys)", "Police Atkinson Hyperlegible, interlignes et espacements augmentés."),
      bascule("animations", "Animations", "Désactive les mouvements si tu préfères le calme (ou en cas de sensibilité)."),
      bascule("tts", "Lecture à voix haute", "Affiche un bouton 🔊 pour lire les questions et explications (voix de l'appareil).")),
    h("div", { class: "carte" },
      h("h3", {}, "Apprentissage"),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Objectif quotidien"), h("div", { class: "desc" }, "Nombre de questions par séance et par jour. Petit et tenable vaut mieux que grand et abandonné.")),
        h("div", { class: "segments" }, [8, 12, 15, 20, 30].map(v => h("button", { "aria-pressed": p.objectifItems === v ? "true" : "false", onclick: () => { set("objectifItems", v); app.rendre(); } }, String(v))))),
      bascule("confiance", "Jauge de confiance", "Avant de valider, dire si tu devines ou si tu es sûr. Cela entraîne la lucidité et affine les révisions."),
      bascule("son", "Sons", "Carillons discrets pour les réponses et la fin de séance."),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Classe"), h("div", { class: "desc" }, "Change le niveau de référence (le jardin affiché). Tes progrès sont conservés.")),
        h("div", { class: "segments" }, NIVEAUX.map(n => h("button", { "aria-pressed": e.profil.niveau === n ? "true" : "false", onclick: () => { app.store.maj(x => { x.profil.niveau = n; }); majProfil(e); app.rendre(); } }, n)))),
      h("div", { class: "toggle" }, h("div", {}, h("div", {}, "Deuxième langue")),
        h("div", { class: "segments" }, [["espagnol", "Espagnol"], ["aucune", "Aucune"]].map(([v, l]) => h("button", { "aria-pressed": (e.profil.lv2 || "espagnol") === v ? "true" : "false", onclick: () => { app.store.maj(x => { x.profil.lv2 = v; }); majProfil(e); app.rendre(); } }, l))))),
    h("div", { class: "carte" },
      h("h3", {}, "Mes données"),
      h("p", { class: "muet petit-texte" }, "Tout est enregistré dans ce navigateur, sur cet appareil. Pour changer d'appareil ou garder une copie, exporte ta sauvegarde."),
      h("div", { class: "rang" },
        h("button", { class: "bouton", onclick: () => { const b = new Blob([exporterJSON(app.etat)], { type: "application/json" }); const u = URL.createObjectURL(b); const a = h("a", { href: u, download: `eclore-${e.profil.prenom}.json` }); document.body.append(a); a.click(); setTimeout(() => { a.remove(); URL.revokeObjectURL(u); }, 500); toast("Sauvegarde téléchargée.", { icone: "⬇️" }); } }, "⬇️ Exporter ma sauvegarde"),
        h("a", { class: "bouton", href: "#/adulte" }, "👩‍🏫 Espace adulte"),
        h("button", { class: "bouton discret", onclick: () => app.deconnecter() }, "Changer de profil"))),
    h("div", { class: "carte" },
      h("h3", {}, "À propos"),
      h("p", { class: "muet petit-texte", style: { marginBottom: 0 } }, "ÉCLORE est un jeu libre et gratuit pour apprendre le programme du collège. Il s'appuie sur la recherche en sciences cognitives : pratique de récupération, répétition espacée (FSRS), entrelacement, feedback élaboré, métacognition. Il ne collecte aucune donnée.")));
}

function majProfil(e) {
  try {
    const profils = JSON.parse(localStorage.getItem("eclore:profils") || "[]");
    localStorage.setItem("eclore:profils", JSON.stringify(profils.map(p => p.id === e.profil.id ? { ...p, niveau: e.profil.niveau, lv2: e.profil.lv2 } : p)));
  } catch {}
}
