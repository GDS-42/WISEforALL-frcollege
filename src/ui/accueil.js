// ÉCLORE — Accueil : premier contact poétique, choix ou création de profil.
import { h, toast } from "./dom.js";
import { listerProfils, creerProfil, supprimerProfil } from "../store.js";
import { NIVEAUX } from "../content.js";
import { ACCUEIL } from "../mentor.js";

const COULEURS = ["#f4d58d", "#7ef0c2", "#b9a7ff", "#ff9ec4", "#8fd3ff", "#ffb870"];

export async function ecranAccueil(main, params, app) {
  const profils = listerProfils();
  const zone = h("div", { class: "accueil" });
  const int = h("div", { style: { width: "100%", maxWidth: "640px" } });
  zone.append(int);
  main.append(zone);

  const titre = h("div", {},
    h("h1", { class: "titre-geant apparait" }, "ÉCLORE"),
    h("p", { class: "sous-titre apparait-2" }, "le jardin du collège"));
  int.append(titre);

  if (profils.length) {
    int.append(h("p", { class: "poeme apparait-3" }, "Qui entre dans le jardin ce soir ?"));
    const liste = h("div", { class: "profils apparait-3" });
    profils.forEach((p, i) => {
      const b = h("button", { class: "profil-bouton", onclick: () => { if (app.chargerProfil(p.id)) app.naviguer("#/jardin"); } },
        h("span", { class: "avatar", style: { background: COULEURS[i % COULEURS.length] } }, p.prenom.slice(0, 1).toUpperCase()),
        h("span", { style: { flex: 1 } }, h("strong", {}, p.prenom), h("div", { class: "tres-muet" }, `Classe de ${p.niveau}`)),
        h("span", { class: "muet", "aria-hidden": "true" }, "→"));
      const suppr = h("button", { class: "bouton petit discret danger", "aria-label": `Supprimer le profil de ${p.prenom}`, onclick: (ev) => { ev.stopPropagation();
        if (confirm(`Supprimer le profil de ${p.prenom} et tout son jardin ? Cette action est définitive.`)) { supprimerProfil(p.id); app.rendre(); } } }, "✕");
      liste.append(h("div", { class: "rang", style: { alignItems: "stretch" } }, Object.assign(b, { style: "flex:1" }), suppr));
    });
    int.append(liste);
    int.append(h("div", { class: "rang centre apparait-4" }, h("button", { class: "bouton", onclick: () => afficherFormulaire(int, app) }, "＋ Nouveau profil")));
  } else {
    const p = h("div", { class: "poeme apparait-3" });
    ACCUEIL.forEach((l, i) => p.append(h("span", { style: { display: "block", marginBottom: ".6em" } }, i === 1 ? htmlEm(l) : l)));
    int.append(p);
    int.append(h("div", { class: "rang centre apparait-4" }, h("button", { class: "bouton primaire large", style: { maxWidth: "320px" }, onclick: () => afficherFormulaire(int, app) }, "Entrer dans le jardin")));
  }
}

function htmlEm(l) {
  const s = h("span");
  s.innerHTML = l.replace("graine", "<em>graine</em>").replace("grandit", "<em>grandit</em>");
  return s;
}

function afficherFormulaire(int, app) {
  int.replaceChildren(
    h("h2", { class: "apparait", style: { textAlign: "center" } }, "Faisons connaissance"),
    h("p", { class: "muet apparait", style: { textAlign: "center" } }, "Tout reste sur cet appareil. Rien n'est envoyé nulle part."));
  const prenom = h("input", { type: "text", id: "prenom", placeholder: "Ton prénom (ou un surnom)", maxlength: 24, autocomplete: "given-name", required: true });
  let niveau = "5e";
  const boutonsNiveau = NIVEAUX.map(n => h("button", { type: "button", "aria-pressed": n === niveau ? "true" : "false", onclick: (ev) => { niveau = n; boutonsNiveau.forEach(b => b.setAttribute("aria-pressed", b === ev.currentTarget ? "true" : "false")); } }, n));
  const lv2 = h("select", { id: "lv2" }, h("option", { value: "espagnol" }, "Espagnol"), h("option", { value: "aucune" }, "Autre / pas encore"));
  const form = h("form", { class: "formulaire apparait-2", onsubmit: (ev) => {
    ev.preventDefault();
    const nom = prenom.value.trim();
    if (!nom) { prenom.focus(); return; }
    const etat = creerProfil({ prenom: nom, niveau, lv2: lv2.value });
    app.utiliserEtat(etat);
    toast(`Bienvenue, ${nom}. Ta première graine t'attend.`, { icone: "🌱" });
    app.naviguer("#/jardin");
  } },
    h("div", { class: "champ" }, h("label", { for: "prenom" }, "Comment veux-tu qu'on t'appelle ?"), prenom),
    h("div", { class: "champ" }, h("label", {}, "En quelle classe es-tu ?"), h("div", { class: "choix-niveau" }, boutonsNiveau)),
    h("div", { class: "champ" }, h("label", { for: "lv2" }, "Deuxième langue (à partir de la 5e)"), lv2),
    h("button", { class: "bouton primaire large", type: "submit" }, "Planter ma première graine"),
    listerProfils().length ? h("button", { class: "bouton discret", type: "button", onclick: () => app.rendre() }, "Retour") : null);
  int.append(form);
  setTimeout(() => prenom.focus(), 50);
}
