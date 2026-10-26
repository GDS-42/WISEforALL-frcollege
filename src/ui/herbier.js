// ÉCLORE — L'herbier (une planche par chapitre) et la boutique du jardin (décorations).
import { h, svg, toast, pluriel, poser, remplacer } from "./dom.js";
import { icone } from "./icones.js";
import { chargerNiveau, MATIERES, NIVEAUX } from "../content.js";
import { planche, decoration, DECORATIONS, embleme } from "./illustrations.js";
import { plantePetite } from "../plants.js";
import { etatPlanche, CATALOGUE, acheter, placer, retirer, niveauDepuisXp } from "../gamification.js";
import { modulesVisibles, sceneJardin } from "./jardin.js";
import { sons } from "../audio.js";

export async function ecranHerbier(main, params, app) {
  const e = app.etat;
  let niveau = e.profil.niveau, filtre = "tout";
  const zone = h("div");
  poser(main, 
    h("div", { class: "entete-page" },
      h("div", { style: { flex: 1, minWidth: "240px" } }, h("span", { class: "etiquette" }, "Collection"), h("h1", { style: { margin: ".1rem 0 0" } }, "L'herbier"),
        h("p", { class: "intro" }, "Chaque chapitre bien enraciné te donne une planche. Esquissée quand tu la découvres, coloriée quand tu la maîtrises, dorée quand tu réussis son épreuve."))),
    zone);
  const rendre = async () => {
    const modules = modulesVisibles(await chargerNiveau(niveau), e);
    const chapitres = modules.flatMap(m => m.chapitres.map((c, i) => ({ c, m, i })));
    const etats = chapitres.map(x => ({ ...x, etat: etatPlanche(e, x.c) }));
    const compte = (k) => etats.filter(x => x.etat === k).length;
    const visibles = etats.filter(x => filtre === "tout" || x.etat === filtre);
    let n = 0;
    remplacer(zone, 
      h("div", { class: "rang espace", style: { marginBottom: ".9rem" } },
        h("div", { class: "segments", role: "group", "aria-label": "Niveau" }, NIVEAUX.map(nv => h("button", { "aria-pressed": nv === niveau ? "true" : "false", onclick: () => { niveau = nv; rendre(); } }, nv))),
        h("span", { class: "muet" }, `${compte("coloriee") + compte("doree")} / ${etats.length} planches coloriées · ${compte("doree")} dorées`)),
      h("div", { class: "filtres", role: "group", "aria-label": "Filtrer" }, [["tout", "Toutes"], ["doree", "Dorées"], ["coloriee", "Coloriées"], ["esquisse", "Esquissées"], ["cachee", "À découvrir"]].map(([k, l]) => h("button", { "aria-pressed": filtre === k ? "true" : "false", onclick: () => { filtre = k; rendre(); } }, l))),
      visibles.length ? null : h("p", { class: "muet" }, "Aucune planche dans cette catégorie pour l'instant."),
      ...modules.map(m => {
        const siens = visibles.filter(x => x.m === m);
        if (!siens.length) return null;
        const info = MATIERES[m.matiere];
        const faites = etats.filter(x => x.m === m && (x.etat === "coloriee" || x.etat === "doree")).length;
        return h("section", { class: "herbier-groupe", style: { "--pigment": info.couleur } },
          h("h2", { class: "herbier-groupe-titre" }, embleme(m.matiere, 40), h("span", {}, info.nom), h("small", { class: "tres-muet" }, `${faites} / ${m.chapitres.length}`)),
          h("div", { class: "herbier-grille" }, siens.map(({ c, i, etat }) => {
            n++;
            const cadre = h("div", { class: "cadre" });
            if (etat === "cachee") {
              const sil = plantePetite({ forme: info.plante, couleur: info.couleur, stade: 5, graine: c.id }, 110, { cadre: "sol" }); sil.classList.add("silhouette");
              cadre.append(h("div", { class: "planche-cachee" }, sil, h("span", { class: "numero" }, `n° ${i + 1}`), h("span", { class: "main-ecrite" }, "à découvrir")));
            } else cadre.append(planche({ chapitre: c.id, titre: c.titre, forme: info.plante, couleur: info.couleur, numero: i + 1, doree: etat === "doree" }));
            return h("a", { class: `vignette-planche ${etat}`, href: `#/chapitre/${c.id}`, style: { animation: `apparaitre 500ms ${Math.min(n, 20) * 30}ms both` } }, cadre,
              h("div", { class: "legende" }, c.titre, h("small", {}, { cachee: "à découvrir", esquisse: "esquissée", coloriee: "coloriée", doree: "dorée" }[etat])));
          })));
      }));
  };
  await rendre();
}

export async function ecranBoutique(main, params, app) {
  const e = app.etat;
  const modules = modulesVisibles(await chargerNiveau(e.profil.niveau), e);
  const apercu = h("div", { class: "scene-jardin", style: { marginBottom: "1.2rem" } });
  const grille = h("div", { class: "grille" });
  const solde = h("span", { class: "compteur" });
  poser(main, 
    h("div", { class: "entete-page" },
      h("div", { style: { flex: 1, minWidth: "240px" } }, h("span", { class: "etiquette" }, "Le jardin"), h("h1", { style: { margin: ".1rem 0 0" } }, "La boutique"),
        h("p", { class: "intro" }, "Les lumens récoltés par ton effort embellissent ton jardin. Dépenser ne fait jamais reculer ton niveau.")),
      solde),
    apercu, grille);
  const rendre = () => {
    const niv = niveauDepuisXp(e.gamif.xp).niveau;
    remplacer(solde, icone("lumen", { taille: 16 }), h("span", {}, `${e.lumens} lumens`));
    remplacer(apercu, sceneJardin(modules, e, { animer: false }));
    remplacer(grille, ...CATALOGUE.map(art => {
      const possede = e.gamif.jardin[art.id];
      const place = possede && Number.isFinite(possede.x);
      const verrou = niv < art.niveauMin;
      const vitrine = svg("svg", { viewBox: "0 0 80 80", "aria-hidden": "true" }); vitrine.append(decoration(art.id));
      const desc = DECORATIONS?.find?.(d => d.id === art.id)?.description || art.desc;
      let bouton;
      if (!possede) bouton = h("button", { class: `btn ${e.lumens >= art.prix && !verrou ? "or" : ""}`, disabled: verrou || e.lumens < art.prix, onclick: () => {
        let r; app.store.maj(x => { r = acheter(x, art.id); if (r.ok) placer(x, art.id, placeLibre(x)); });
        if (r.ok) { sons.succes(); toast(`${art.nom} installé dans ton jardin.`, { icone: "🪴", classe: "succes" }); rendre(); }
      } }, icone("lumen", { taille: 16 }), `${art.prix}`);
      else bouton = h("button", { class: "btn contour", onclick: () => { app.store.maj(x => { place ? retirer(x, art.id) : placer(x, art.id, placeLibre(x)); }); rendre(); } }, place ? "Ranger" : "Installer");
      return h("article", { class: `article-boutique ${verrou ? "verrou" : ""}` },
        h("div", { class: "vitrine" }, vitrine),
        h("div", {}, h("h3", {}, art.nom), h("p", { class: "muet petit", style: { margin: ".2rem 0 0" } }, desc)),
        h("div", { class: "rang espace" }, verrou ? h("span", { class: "tres-muet", style: { display: "inline-flex", gap: ".3rem", alignItems: "center" } }, icone("cadenas", { taille: 14 }), `niveau ${art.niveauMin}`) : possede ? h("span", { class: "puce", style: { color: "var(--ok)" } }, icone("valider"), place ? "dans le jardin" : "rangé") : h("span", { class: "prix" }, icone("lumen", { taille: 14 }), art.prix), bouton));
    }));
  };
  rendre();
}

/** Trouve une position libre pour une nouvelle décoration (évite les chevauchements). */
function placeLibre(e) {
  const prises = Object.values(e.gamif.jardin).filter(v => Number.isFinite(v?.x)).map(v => v.x);
  let meilleur = 0.5, ecart = -1;
  for (let k = 0; k <= 20; k++) { const x = k / 20; const d = Math.min(...prises.map(p => Math.abs(p - x)), 1); if (d > ecart) { ecart = d; meilleur = x; } }
  return meilleur;
}
