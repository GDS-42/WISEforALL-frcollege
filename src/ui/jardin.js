// ÉCLORE — Le jardin : la scène vivante du niveau, le rituel du jour, les quêtes, le niveau.
import { h, svg, pluriel, toast, poser, remplacer } from "./dom.js";
import { icone } from "./icones.js";
import { chargerNiveau, MATIERES } from "../content.js";
import { nbDus, maitrise, couverture, statsGlobales } from "../engine.js";
import { plante } from "../plants.js";
import { lume, paysage, decoration } from "./illustrations.js";
import { salut, citationDuJour } from "../mentor.js";
import { cleJour } from "../store.js";
import { quetesDuJour, reclamerQuete, niveauDepuisXp, verifierNiveau, CATALOGUE } from "../gamification.js";
import { sons } from "../audio.js";
import { sauvegardeConseillee } from "../sauvegarde.js";
import { boutonsExport, ilYa } from "./sauvegarde.js";

export function momentDuJour(d = new Date()) {
  const hh = d.getHours();
  return hh >= 5 && hh < 8 ? "aube" : hh < 18 && hh >= 8 ? "jour" : hh >= 18 && hh < 21 ? "crepuscule" : "nuit";
}

/** Une seule deuxième langue par profil (profil.lv2) ; « aucune » les masque toutes. */
export function modulesVisibles(modules, e) { const lv2 = e.profil.lv2 || "espagnol"; return modules.filter(m => !MATIERES[m.matiere]?.lv2 || m.matiere === lv2); }

/** Scène du jardin : paysage peint, une plante par matière (deux rangs), décorations placées. */
export function sceneJardin(modules, e, { animer = true } = {}) {
  const L = 1000, H = 380;
  const s = svg("svg", { viewBox: `0 0 ${L} ${H}`, role: "img", "aria-label": `Ton jardin : ${modules.length} plantes, une par matière, qui grandissent avec ta mémoire.` });
  // En thème nuit, le jardin passe à la nuit quelle que soit l'heure (lune, lucioles, papier bleu).
  const moment = document.documentElement.dataset.theme === "nuit" ? "nuit" : momentDuJour();
  s.append(paysage({ largeur: L, hauteur: H, moment }));
  const g = e.gamif?.jardin || {};
  const decos = Object.entries(g).filter(([, v]) => v && Number.isFinite(v.x));
  const rangs = [svg("g"), svg("g"), svg("g")];
  for (const [id, v] of decos) {
    const d = svg("g", { transform: `translate(${40 + v.x * (L - 160)} ${H - 150}) scale(1.05)` });
    d.append(decoration(id));
    rangs[0].append(d);
  }
  const n = modules.length, colonnes = Math.ceil(n / 2), pas = (L - 80) / colonnes;
  const liens = [];
  modules.forEach((m, i) => {
    const info = MATIERES[m.matiere];
    const items = m.chapitres.flatMap(c => c.items);
    const mt = maitrise(items, e), cv = couverture(items, e);
    const stade = cv === 0 ? 0 : Math.min(5, Math.max(1, Math.round((mt * 0.7 + cv * 0.3) * 6)));
    const soif = nbDus(items, e) > Math.max(5, items.length * 0.1);
    const arriere = i % 2 === 0, col = Math.floor(i / 2);
    const x = 40 + pas * (col + 0.5) + (arriere ? pas * 0.2 : -pas * 0.18);
    const ySol = arriere ? H - 88 : H - 30;
    const ech = (arriere ? 0.95 : 1.22) * (0.82 + stade * 0.08) * (stade === 0 ? 1.45 : stade === 1 ? 1.2 : 1); // les graines restent visibles
    const lien = svg("a", { href: `#/matiere/${m.niveau}/${m.matiere}`, class: "plante-lien", "aria-label": `${info.nom} : ${Math.round(mt * 100)} % de maîtrise${soif ? ", a soif" : ""}` });
    const gp = svg("g", { transform: `translate(${x - 40 * ech} ${ySol - 120 * ech}) scale(${ech})` });
    gp.append(plante({ forme: info.plante, couleur: info.couleur, stade, graine: m.id + e.profil.graine, soif }));
    lien.append(gp, svg("text", { x, y: ySol + 19, "text-anchor": "middle", class: "nom-plante" }, info.court));
    (arriere ? rangs[1] : rangs[2]).append(lien);
    liens.push(gp);
  });
  s.append(...rangs);
  if (animer) requestAnimationFrame(() => liens.forEach((g2, i) => setTimeout(() => g2.querySelector(".plante")?.classList.add("pousse"), 60 * i)));
  return s;
}

export async function ecranJardin(main, params, app) {
  const e = app.etat;
  const modules = modulesVisibles(await chargerNiveau(e.profil.niveau), e);
  const tous = modules.flatMap(m => m.chapitres.flatMap(c => c.items));
  const dus = nbDus(tous, e);
  const stats = statsGlobales(e, tous);
  const jour = e.jours[cleJour()] || { n: 0 };
  const objectif = e.prefs.objectifItems || 15;
  const [cit, auteur] = citationDuJour();
  let quetes = [];
  app.store.maj(x => { quetes = quetesDuJour(x, Date.now(), { matieres: modules.length }); });
  const niv = niveauDepuisXp(e.gamif.xp);

  const texteLume = dus > 0
    ? `${salut(e.profil.prenom)} ${pluriel(dus, "graine a", "graines ont")} soif aujourd'hui.`
    : stats.vus === 0 ? `${salut(e.profil.prenom)} Tout est encore graine. Choisis une matière et plantons.`
    : `${salut(e.profil.prenom)} Rien n'a soif. Un bon jour pour découvrir du neuf.`;
  const lumeSvg = lume({ humeur: dus > 0 ? "encourage" : stats.vus === 0 ? "calme" : "joie" }); lumeSvg.classList.add("lume");

  const scene = h("section", { class: "scene-jardin apparait", "aria-label": "Ton jardin" }, sceneJardin(modules, e), h("div", { class: "lume-dit" }, lumeSvg, h("p", { class: "bulle", style: { margin: 0 } }, texteLume)));

  const action = (href, ico, titre, desc, { prioritaire = false, pastille = null, pigment = null } = {}) =>
    h("a", { class: `action ${prioritaire ? "prioritaire" : ""}`, href, style: pigment ? { "--pigment": pigment } : null }, icone(ico), h("strong", {}, titre), h("span", { class: "desc" }, desc), pastille ? h("span", { class: "pastille" }, String(pastille)) : null);
  const derniere = [...e.journal].reverse().find(s => s.chapitre);
  const rituel = h("section", { class: "feuillet ruban" },
    h("div", { class: "rituel-entete" },
      h("div", { class: "anneau", style: { "--p": Math.min(100, Math.round(jour.n / objectif * 100)) }, role: "img", "aria-label": `${jour.n} questions sur ${objectif} aujourd'hui` }, h("span", {}, `${Math.min(jour.n, 999)}`)),
      h("div", {}, h("p", { class: "date-main" }, new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })), h("h2", { style: { margin: 0 } }, "Le rituel du jour"), h("span", { class: "tres-muet" }, jour.n >= objectif ? "Objectif atteint. Tout le reste est du bonus." : `${objectif - jour.n} questions pour atteindre ton objectif`))),
    h("div", { class: "actions" },
      action("#/session/arroser", "goutte", "Arroser", dus ? "Les révisions du jour, toutes matières mêlées." : "Consolider ce qui est fragile.", { prioritaire: dus > 0, pastille: dus || null, pigment: "#2c7b80" }),
      action("#/atlas", "graine", "Découvrir", "Lire un cours et planter de nouvelles graines.", { prioritaire: dus === 0, pigment: "#5a8a3a" }),
      action("#/session/defi", "eclair", "Défi éclair", "Dix questions mêlées, chronométrées.", { pigment: "#cc8a24" }),
      derniere ? action(`#/chapitre/${derniere.chapitre}`, "recommencer", "Reprendre", "Revenir au dernier chapitre travaillé.", { pigment: "#7d4f73" })
        : action("#/herbier", "herbier", "Herbier", "Ta collection de planches botaniques.", { pigment: "#7d4f73" })));

  const listeQuetes = h("div", {});
  const dessinerQuetes = () => {
    remplacer(listeQuetes, ...quetes.map(q => {
      const faite = q.progres >= q.objectif;
      return h("div", { class: `quete ${faite ? "faite" : ""} ${q.reclamee ? "reclamee" : ""}` },
        h("span", { class: "case", "aria-hidden": "true" }, faite ? icone("valider", { taille: 16 }) : null),
        h("div", {}, h("div", { class: "libelle" }, q.libelle), h("div", { class: "jauge fine or", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": q.objectif, "aria-valuenow": Math.min(q.progres, q.objectif), "aria-label": q.libelle }, h("span", { style: { "--v": `${Math.min(100, q.progres / q.objectif * 100)}%` } }))),
        faite && !q.reclamee
          ? h("button", { class: "btn or petit", onclick: () => {
              let gain = 0, notif = null;
              app.store.maj(x => { gain = reclamerQuete(x, q.id); notif = verifierNiveau(x); quetes = quetesDuJour(x); });
              sons.succes(); toast(`Quête accomplie : +${gain} lumens`, { icone: "✦", classe: "succes" });
              if (notif) toast(`Niveau ${notif.niveau} : ${notif.nom} !`, { icone: "🌿", classe: "succes", duree: 5000 });
              dessinerQuetes();
            } }, icone("cadeau", { taille: 16 }), `+${q.recompense}`)
          : h("span", { class: "recompense" }, icone("lumen", { taille: 14 }), `${q.recompense}`));
    }));
  };
  dessinerQuetes();

  const prochaineDeco = CATALOGUE.find(a => !e.gamif.jardin[a.id]);
  poser(main, scene, rappelSauvegarde(app),
    h("div", { class: "jardin-grille" },
      rituel,
      h("div", { class: "pile" },
        h("section", { class: "feuillet" }, h("h2", { style: { fontSize: "1.35rem" } }, "Quêtes du jour"), listeQuetes),
        h("section", { class: "feuillet" },
          h("div", { class: "niveau-carte" }, h("div", { class: "medaillon", "aria-hidden": "true" }, String(niv.niveau)),
            h("div", { style: { flex: 1 } }, h("span", { class: "etiquette" }, `Niveau ${niv.niveau}`), h("div", { class: "nom-niveau" }, niv.nom),
              h("div", { class: "jauge or", style: { marginTop: ".4rem" }, role: "progressbar", "aria-label": "Progression vers le niveau suivant", "aria-valuenow": Math.round(niv.progression * 100), "aria-valuemin": 0, "aria-valuemax": 100 }, h("span", { style: { "--v": `${Math.round(niv.progression * 100)}%` } })),
              h("div", { class: "tres-muet", style: { marginTop: ".3rem" } }, niv.xpSuivant ? `${e.gamif.xp} / ${niv.xpSuivant} lumens récoltés` : "Niveau maximal : ton jardin est une forêt."))),
          h("hr", { class: "separateur" }),
          h("div", { class: "rang espace" },
            h("span", { class: "muet petit" }, prochaineDeco ? `Prochaine décoration : ${prochaineDeco.nom} (${prochaineDeco.prix} ✦)` : "Ton jardin est entièrement décoré."),
            h("a", { class: "btn petit", href: "#/boutique" }, icone("boutique", { taille: 16 }), "Boutique"))),
        h("section", { class: "feuillet" }, h("blockquote", { class: "citation-jour" }, cit, h("footer", {}, "— ", auteur))))));
}

/** Rappel discret : de la progression non sauvegardée depuis plus d'une semaine. */
function rappelSauvegarde(app) {
  const e = app.etat;
  if (!sauvegardeConseillee(e) || e.sauvegarde?.reporte === cleJour()) return null;
  const carte = h("section", { class: "feuillet rappel-sauvegarde apparait", "aria-label": "Sauvegarde" });
  const fermer = () => carte.remove();
  const mini = lume({ humeur: "encourage" }); mini.classList.add("lume");
  const [telech, envoyer] = boutonsExport(app, { libelle: "Sauvegarder maintenant" });
  telech.addEventListener("click", fermer); envoyer?.addEventListener("click", fermer);
  return poser(carte, mini,
    h("div", { style: { flex: 1, minWidth: "220px" } },
      h("strong", {}, "Mets ton carnet à l'abri"),
      h("p", { class: "muet petit", style: { margin: ".15rem 0 0" } }, `Dernière sauvegarde : ${ilYa(e.sauvegarde?.derniere)}. Un fichier te protège si les données du navigateur sont effacées, et te permet de continuer sur un autre appareil.`)),
    h("div", { class: "rang" }, telech, envoyer,
      h("button", { class: "btn discret", type: "button", onclick: () => { app.store.maj(x => { x.sauvegarde = { ...x.sauvegarde, reporte: cleJour() }; }); fermer(); } }, "Plus tard")));
}
