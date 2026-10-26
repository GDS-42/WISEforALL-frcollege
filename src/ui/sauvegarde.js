// ÉCLORE — Sauvegarde : exporter son carnet dans un fichier, le reprendre ailleurs ou après un effacement.
import { h, toast, poser, remplacer, dateCourte, pluriel } from "./dom.js";
import { icone } from "./icones.js";
import { construireFichier, nomFichier, lireFichier, resumeEtat } from "../sauvegarde.js";
import { profilExiste, installerProfil, chargerProfil, etatsDeTousLesProfils } from "../store.js";

/** « aujourd'hui », « hier », « il y a 3 jours », sinon la date. */
export function ilYa(ts, maintenant = Date.now()) {
  if (!ts) return "jamais";
  const j = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x.getTime(); };
  const n = Math.round((j(maintenant) - j(ts)) / 86400000);
  return n <= 0 ? "aujourd'hui" : n === 1 ? "hier" : n < 31 ? `il y a ${n} jours` : `le ${dateCourte(ts)}`;
}

export function telecharger(nom, contenu, type) {
  const b = new Blob([contenu], { type }); const u = URL.createObjectURL(b);
  const a = h("a", { href: u, download: nom }); document.body.append(a); a.click(); setTimeout(() => { a.remove(); URL.revokeObjectURL(u); }, 500);
}

function marquer(app, etats, quand) {
  for (const e of etats) {
    if (app.store && app.etat.profil.id === e.profil.id) app.store.maj(x => { x.sauvegarde = { derniere: quand }; });
    else {
      // Carnet non ouvert : on note la date directement dans son état enregistré.
      const local = chargerProfil(e.profil.id);
      if (local) installerProfil({ ...local, sauvegarde: { derniere: quand } }, { secours: false });
    }
  }
}

// Le fichier porte sa propre date : un carnet repris depuis ce fichier sait quand il a été sauvegardé.
function fichierDe(etats, quand) {
  const texte = construireFichier(etats.map(e => ({ ...e, sauvegarde: { derniere: quand } })), quand);
  return { texte, nom: nomFichier(etats) };
}

const etatsVoulus = (app, tous) => {
  if (tous) { app.store?.sauverMaintenant(); return etatsDeTousLesProfils(); }
  return app.etat ? [app.etat] : [];
};

/** Boutons « Télécharger ma sauvegarde » et, si l'appareil sait partager un fichier, « Envoyer… ». */
export function boutonsExport(app, { tous = false, libelle } = {}) {
  const actifAvant = app.etat?.profil.id;
  const telech = h("button", { class: "btn", type: "button", onclick: () => {
    const etats = etatsVoulus(app, tous); if (!etats.length) return;
    const quand = Date.now(), { texte, nom } = fichierDe(etats, quand);
    telecharger(nom, texte, "application/json");
    marquer(app, etats, quand);
    if (!tous && app.etat?.profil.id === actifAvant) app.rafraichirEntete?.();
    toast(etats.length > 1 ? `${pluriel(etats.length, "carnet")} sauvegardés dans « ${nom} ».` : `Carnet sauvegardé dans « ${nom} ». Garde ce fichier en lieu sûr.`, { icone: "💾", duree: 5000 });
  } }, icone("bas"), libelle || (tous ? "Sauvegarder tous les carnets" : "Télécharger ma sauvegarde"));
  let envoyer = null;
  try {
    const essai = new File(["{}"], "eclore.json", { type: "application/json" });
    if (navigator.canShare?.({ files: [essai] })) envoyer = h("button", { class: "btn", type: "button", onclick: async () => {
      const etats = etatsVoulus(app, tous); if (!etats.length) return;
      const quand = Date.now(), { texte, nom } = fichierDe(etats, quand);
      try {
        await navigator.share({ files: [new File([texte], nom, { type: "application/json" })], title: "Sauvegarde ÉCLORE" });
        marquer(app, etats, quand);
        toast("Sauvegarde envoyée.", { icone: "💾" });
      } catch (err) { if (err?.name !== "AbortError") toast("Envoi impossible ici : utilise plutôt le téléchargement.", { icone: "⚠️" }); }
    } }, icone("suivant"), "Envoyer…");
  } catch {}
  return [telech, envoyer];
}

function tableauComparaison(local, fichier) {
  const a = resumeEtat(local), b = resumeEtat(fichier);
  const plusRecent = (a.derniereActivite || 0) === (b.derniereActivite || 0) ? null : (a.derniereActivite || 0) > (b.derniereActivite || 0) ? "local" : "fichier";
  const col = (r, cle, titre) => h("div", { class: `compare-col ${plusRecent === cle ? "recent" : ""}` },
    h("div", { class: "compare-titre" }, titre, plusRecent === cle ? h("span", { class: "puce pigment" }, "plus récent") : null),
    h("dl", {},
      h("dt", {}, "Dernière activité"), h("dd", {}, ilYa(r.derniereActivite)),
      h("dt", {}, "Notions travaillées"), h("dd", {}, String(r.notions)),
      h("dt", {}, "Séances"), h("dd", {}, String(r.seances)),
      h("dt", {}, "Niveau du jardin"), h("dd", {}, `niv. ${r.niveauJeu}`),
      h("dt", {}, "Classe"), h("dd", {}, r.niveau)));
  return { el: h("div", { class: "compare" }, col(a, "local", "Sur cet appareil"), col(b, "fichier", "Dans le fichier")), plusRecent };
}

/**
 * Zone d'import : choisir ou déposer un fichier, vérifier, comparer si le carnet existe déjà.
 * `surInstalles(etats)` reçoit les carnets installés (le premier est celui à ouvrir).
 */
export function zoneImport(app, { surInstalles, compact = false } = {}) {
  const racine = h("div", { class: "import-zone" });
  const input = h("input", { type: "file", accept: ".json,application/json", class: "visuellement-cache", onchange: async () => { const f = input.files?.[0]; input.value = ""; if (f) traiter(await f.text()); } });
  const message = h("p", { class: "import-message", role: "alert" });

  const accueil = () => {
    message.textContent = "";
    remplacer(racine, h("label", { class: `depot ${compact ? "compact" : ""}`, tabindex: 0, onkeydown: (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); input.click(); } } },
      input, icone("haut", { taille: 26 }),
      h("span", { class: "depot-titre" }, "Choisir mon fichier de sauvegarde"),
      compact ? null : h("span", { class: "depot-aide" }, "ou dépose-le ici · fichier « eclore-….json »")), message);
  };
  racine.addEventListener("dragover", (ev) => { ev.preventDefault(); racine.classList.add("survol"); });
  racine.addEventListener("dragleave", () => racine.classList.remove("survol"));
  racine.addEventListener("drop", async (ev) => { ev.preventDefault(); racine.classList.remove("survol"); const f = ev.dataTransfer?.files?.[0]; if (f) traiter(await f.text()); });

  const installer = (etats) => {
    app.store?.sauverMaintenant(); // évite qu'une écriture différée de l'ancien état écrase l'import
    const faits = etats.map(e => installerProfil(e));
    surInstalles?.(faits);
  };

  function traiter(texte) {
    let lu;
    try { lu = lireFichier(texte); }
    catch (err) { message.textContent = err.message; message.className = "import-message erreur"; return; }
    const date = lu.exporte ? `Sauvegarde du ${new Date(lu.exporte).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}` : "Sauvegarde";

    if (lu.profils.length === 1) {
      const e = lu.profils[0];
      if (!profilExiste(e.profil.id)) { installer([e]); return; }
      const local = chargerProfil(e.profil.id);
      const { el, plusRecent } = tableauComparaison(local, e);
      remplacer(racine, h("div", { class: "import-carte" },
        h("p", { class: "etiquette" }, date),
        h("h3", {}, `Le carnet de ${e.profil.prenom} existe déjà ici`),
        h("p", { class: "muet petit" }, plusRecent === "local" ? "Attention : le carnet de cet appareil a servi plus récemment que le fichier. Le remplacer effacerait ces progrès (une copie de secours est tout de même gardée)." : "Le fichier remplacera le carnet de cet appareil. Une copie de secours est gardée : tu pourras annuler depuis les réglages."),
        el,
        h("div", { class: "rang" },
          h("button", { class: `btn ${plusRecent === "local" ? "" : "encre"}`, type: "button", onclick: () => installer([e]) }, icone("recommencer"), "Remplacer par le fichier"),
          h("button", { class: "btn discret", type: "button", onclick: accueil }, "Garder ce carnet"))));
      return;
    }

    // Plusieurs carnets dans le fichier : on choisit lesquels installer.
    const cases = lu.profils.map(e => {
      const r = resumeEtat(e), existe = profilExiste(e.profil.id);
      const loc = existe ? resumeEtat(chargerProfil(e.profil.id)) : null;
      const cb = h("input", { type: "checkbox", checked: !existe || (r.derniereActivite || 0) >= (loc.derniereActivite || 0) });
      return { e, cb, ligne: h("label", { class: "import-ligne" }, cb,
        h("span", { style: { flex: 1 } }, h("b", {}, e.profil.prenom), ` · ${e.profil.niveau} · ${pluriel(r.notions, "notion")} · actif ${ilYa(r.derniereActivite)}`,
          existe ? h("small", { class: "tres-muet", style: { display: "block" } }, `Remplace le carnet de cet appareil (actif ${ilYa(loc.derniereActivite)})`) : h("small", { class: "tres-muet", style: { display: "block" } }, "Nouveau sur cet appareil"))) };
    });
    remplacer(racine, h("div", { class: "import-carte" },
      h("p", { class: "etiquette" }, date),
      h("h3", {}, `${lu.profils.length} carnets dans ce fichier`),
      h("div", { class: "import-liste" }, cases.map(c => c.ligne)),
      h("div", { class: "rang" },
        h("button", { class: "btn encre", type: "button", onclick: () => { const choix = cases.filter(c => c.cb.checked).map(c => c.e); if (choix.length) installer(choix); } }, icone("valider"), "Installer la sélection"),
        h("button", { class: "btn discret", type: "button", onclick: accueil }, "Annuler"))));
  }

  accueil();
  return racine;
}
