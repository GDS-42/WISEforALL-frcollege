// ÉCLORE — Accueil : la couverture du carnet ; choix ou création d'un profil.
import { h, toast, poser, remplacer } from "./dom.js";
import { icone } from "./icones.js";
import { listerProfils, creerProfil, supprimerProfil } from "../store.js";
import { NIVEAUX } from "../content.js";
import { lume } from "./illustrations.js";

const PIGMENTS = ["#c4553d", "#3d5a99", "#5a8a3a", "#b04a82", "#cc8a24", "#2c7b80"];

export async function ecranAccueil(main, params, app) {
  const profils = listerProfils();
  const livre = h("div", { class: "couverture-livre apparait" });
  poser(main, h("section", { class: "couverture" }, livre));
  const entete = () => [
    lume({ humeur: profils.length ? "joie" : "calme" }),
    h("h1", { class: "apparait-2" }, "ÉCLORE"),
    h("p", { class: "sous-titre apparait-2" }, "carnet de jardin du collège"),
  ];
  const lumeSvg = entete()[0]; lumeSvg.classList.add("lume");

  if (profils.length) {
    poser(livre, lumeSvg, ...entete().slice(1), h("p", { class: "poeme apparait-3" }, "Qui ouvre le carnet aujourd'hui ?"));
    const liste = h("div", { class: "profils apparait-3" });
    profils.forEach((p, i) => {
      const ouvrir = h("button", { class: "etiquette-profil", style: { "--pigment": PIGMENTS[i % PIGMENTS.length] }, onclick: () => { if (app.chargerProfil(p.id)) app.naviguer("#/jardin"); } },
        h("span", { class: "initiale", "aria-hidden": "true" }, p.prenom.slice(0, 1).toUpperCase()),
        h("span", { style: { flex: 1 } }, h("span", { class: "nom" }, p.prenom), h("span", { class: "meta", style: { display: "block" } }, `Classe de ${p.niveau}`)),
        icone("suivant"));
      const suppr = h("button", { class: "btn discret rond", "aria-label": `Supprimer le profil de ${p.prenom}`, title: "Supprimer", onclick: () => {
        if (confirm(`Supprimer le profil de ${p.prenom} et tout son jardin ? C'est définitif.`)) { supprimerProfil(p.id); app.rendre(); } } }, icone("fermer"));
      poser(liste, h("div", { class: "rang", style: { flexWrap: "nowrap" } }, ouvrir, suppr));
    });
    poser(livre, liste, h("button", { class: "btn apparait-4", onclick: () => formulaire(livre, app, lumeSvg) }, icone("plus"), "Nouveau carnet"));
  } else {
    poser(livre, lumeSvg, ...entete().slice(1),
      h("p", { class: "poeme apparait-3", html: "Quelque part pousse un jardin qui ne fleurit qu'à la lumière de ce que tu apprends. Chaque notion comprise y devient une <em>graine</em> ; chaque fois que tu t'en souviens, elle <em>grandit</em>. On ne t'y demandera jamais d'être parfait. Seulement de revenir." }),
      h("button", { class: "btn encre large apparait-4", onclick: () => formulaire(livre, app, lumeSvg) }, "Ouvrir mon carnet", icone("suivant")));
  }
}

function formulaire(livre, app, lumeSvg) {
  remplacer(livre, lumeSvg, h("h2", { style: { marginTop: ".4rem" } }, "Faisons connaissance"), h("p", { class: "muet" }, "Tout reste sur cet appareil. Rien n'est envoyé nulle part."));
  const prenom = h("input", { type: "text", id: "prenom", placeholder: "Ton prénom ou un surnom", maxlength: 24, autocomplete: "given-name", required: true });
  let niveau = "6e";
  const boutons = NIVEAUX.map(n => h("button", { type: "button", "aria-pressed": n === niveau ? "true" : "false", onclick: (ev) => { niveau = n; boutons.forEach(b => b.setAttribute("aria-pressed", b === ev.currentTarget ? "true" : "false")); } }, n));
  const lv2 = h("select", { id: "lv2" }, h("option", { value: "espagnol" }, "Espagnol"), h("option", { value: "aucune" }, "Autre langue / pas encore"));
  poser(livre, h("form", { class: "formulaire", onsubmit: (ev) => {
    ev.preventDefault();
    const nom = prenom.value.trim();
    if (!nom) { prenom.focus(); return; }
    app.utiliserEtat(creerProfil({ prenom: nom, niveau, lv2: lv2.value }));
    toast(`Bienvenue, ${nom}. Ta première graine t'attend.`, { icone: "🌱" });
    app.naviguer("#/jardin");
  } },
    h("div", { class: "champ" }, h("label", { for: "prenom" }, "Comment veux-tu qu'on t'appelle ?"), prenom),
    h("div", { class: "champ" }, h("label", {}, "En quelle classe es-tu ?"), h("div", { class: "choix-niveau", role: "group", "aria-label": "Classe" }, boutons)),
    h("div", { class: "champ" }, h("label", { for: "lv2" }, "Deuxième langue (dès la 5e)"), lv2),
    h("button", { class: "btn encre large", type: "submit" }, "Planter ma première graine"),
    listerProfils().length ? h("button", { class: "btn discret", type: "button", onclick: () => app.rendre() }, icone("retour"), "Retour") : null));
  setTimeout(() => prenom.focus(), 60);
}
