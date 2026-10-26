// ÉCLORE — Un chapitre : la fiche « Je retiens » (exemple travaillé), les compétences, la plante, l'entrée en session.
import { h, mdEl, pluriel } from "./dom.js";
import { trouverChapitre, chargerModule, MATIERES, SOCLE } from "../content.js";
import { maitrise, couverture, nbDus, stadeChapitre } from "../engine.js";
import { paliersElo, ELO_DEPART } from "../adapt.js";
import { plantePetite, NOMS_STADES } from "../plants.js";

const NIVEAUX_COMP = ["à découvrir", "en éveil", "en route", "solide", "expert"];

export async function ecranChapitre(main, [chapId], app) {
  const e = app.etat;
  const c = await trouverChapitre(chapId);
  if (!c) { main.append(h("p", {}, "Chapitre introuvable.")); return; }
  const mod = await chargerModule(c.niveau, c.matiere);
  const info = MATIERES[c.matiere];
  const idx = mod.chapitres.findIndex(x => x.id === c.id);
  const s = stadeChapitre(c, e), mt = maitrise(c.items, e), cv = couverture(c.items, e), dus = nbDus(c.items, e);
  const nouveaux = c.items.filter(i => !e.items[i.id]?.s).length;
  const ficheLue = !!e.chapitres[c.id]?.fiche;
  const premiereFois = cv === 0;

  const fiche = h("section", { class: "fiche", style: { "--c": info.couleur }, id: "fiche" },
    h("div", { class: "rang espace" }, h("h2", { style: { margin: 0 } }, "Je retiens"), h("span", { class: "etiquette" }, "fiche essentielle")),
    h("ul", {}, c.retenir.map(r => h("li", {}, mdEl(r)))),
    c.exemple ? h("div", { class: "exemple" }, h("span", { class: "etiquette" }, "Exemple travaillé"), mdEl(c.exemple, "div")) : null,
    h("p", { class: "tres-muet", style: { marginTop: "1rem", marginBottom: 0 } }, "Lis-la une fois, puis ferme-la dans ta tête : c'est en répondant que l'on retient, pas en relisant."));

  const competences = h("section", { class: "carte" },
    h("h3", {}, "Ce que tu sauras faire"),
    c.competences.map(co => {
      const elo = e.comp[co.id]?.elo ?? null;
      const palier = elo === null ? 0 : paliersElo(elo);
      const n = e.comp[co.id]?.n || 0;
      return h("div", { class: "competence" },
        h("div", { class: "rang espace" }, h("span", { class: "lib" }, co.libelle), h("span", { class: "niv" }, n ? NIVEAUX_COMP[palier] : "à découvrir")),
        h("div", { class: "barre" }, h("span", { style: { "--v": `${n ? Math.min(100, Math.max(6, ((elo - 900) / 700) * 100)) : 0}%`, "--c": info.couleur } })));
    }),
    h("p", { class: "tres-muet", style: { margin: ".8rem 0 0" } }, "Socle commun : ", c.socle.map(d => `${d}. ${SOCLE[d]}`).join(" · ")));

  main.append(
    h("nav", { class: "fil", "aria-label": "Fil d'Ariane" }, h("a", { href: "#/jardin" }, "Jardin"), "›", h("a", { href: `#/atlas/${c.niveau}` }, `Atlas ${c.niveau}`), "›", h("a", { href: `#/matiere/${c.niveau}/${c.matiere}` }, info.nom), "›", h("span", {}, `Chapitre ${idx + 1}`)),
    h("div", { class: "entete-page", style: { "--c": info.couleur } },
      h("div", { style: { width: "64px", height: "96px" } }, plantePetite({ forme: info.plante, couleur: info.couleur, stade: s, graine: c.id + e.profil.graine, soif: dus > 3 }, 64)),
      h("div", { style: { flex: 1, minWidth: "240px" } },
        h("span", { class: "etiquette" }, c.theme),
        h("h1", { style: { marginBottom: ".3rem" } }, c.titre),
        h("div", { class: "rang" },
          h("span", { class: "puce couleur", style: { "--c": info.couleur } }, NOMS_STADES[s]),
          h("span", { class: "puce" }, `${Math.round(mt * 100)} % maîtrisé`),
          h("span", { class: "puce" }, `${pluriel(c.items.length, "question")}`),
          dus ? h("span", { class: "puce", style: { color: "var(--menthe)" } }, `💧 ${pluriel(dus, "révision")}`) : null,
          nouveaux ? h("span", { class: "puce" }, `🌱 ${pluriel(nouveaux, "nouveauté")}`) : null))),
    h("div", { class: "grille-2", style: { alignItems: "start" } },
      h("div", {},
        fiche,
        h("div", { class: "carte", style: { marginTop: "1rem" } },
          h("h3", {}, premiereFois ? "Première séance" : "Continuer"),
          h("p", { class: "muet" }, premiereFois
            ? "Une dizaine de questions, variées, adaptées à toi. On commence doucement puis on monte. Tu peux te tromper : c'est prévu, et même utile."
            : dus ? "Des graines ont soif : on commence par elles, puis on découvre la suite." : nouveaux ? "Il reste des nouveautés à planter, mêlées à quelques rappels." : "Tout est planté. On consolide ce qui est le plus fragile."),
          h("div", { class: "rang" },
            h("a", { class: "bouton primaire large", href: `#/session/decouvrir/${c.id}`, onclick: () => app.store.maj(x => { x.chapitres[c.id] = { ...(x.chapitres[c.id] || {}), fiche: Date.now() }; }) }, premiereFois ? "🌱 Planter" : dus ? "💧 Arroser et continuer" : "🌿 Continuer"),
            idx + 1 < mod.chapitres.length ? h("a", { class: "bouton discret", href: `#/chapitre/${mod.chapitres[idx + 1].id}` }, "Chapitre suivant ›") : null))),
      competences));
}
