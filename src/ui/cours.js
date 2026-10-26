// ÉCLORE — Cours illustré : la leçon qu'on lit avant de s'entraîner.
// Contrat des données : docs/COURS.md. Charte « Herbier » : docs/DESIGN.md. Styles : src/styles/cours.css.
//
//   import { rendreCours, rendreBloc } from "./ui/cours.js";
//   const el = rendreCours(coursDuChapitre, { chapitre, onVerifie, onSection, onFin });
//   main.append(el);            // el.allerA(i) fait défiler vers une section ; el.detruire() libère tout.
//
// Aucune dépendance. Les cartes sont déléguées à ./carte.js (chargé à la demande, avec repli).

import { h, svg, md, lettre } from "./dom.js";

let compteur = 0;
const uid = (p) => `cours-${p}-${(++compteur).toString(36)}`;
const NBSP = " ";

function mouvementReduit() {
  try {
    return document.documentElement.dataset.animations === "0" || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch { return false; }
}

// ————————————————————————————— Texte —————————————————————————————

/** Paragraphe(s) mis en forme (md de dom.js gère gras, italique, surligné et paragraphes). */
function paragraphes(t, cls = "") {
  return h("div", { class: `cours-md ${cls}`.trim(), html: `<p>${md(t)}</p>` });
}
/** Mise en forme en ligne (pas de <p>) : pour les listes, cellules, choix, étiquettes. */
function ligne(t, tag = "span", cls = "") {
  return h(tag, { class: cls || null, html: md(t).replace(/<\/p><p>/g, "<br><br>") });
}
/** Texte brut (synthèse vocale, aria-label). */
function brut(t) {
  return String(t ?? "")
    .replace(/==(.+?)==/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1").replace(/(^|[^*])\*([^*\n]+?)\*/g, "$1$2")
    .replace(/\s*\n+\s*/g, " ").trim();
}

const nf = (n, max = 2) => Number(n).toLocaleString("fr-FR", { maximumFractionDigits: max }).replace(/-/g, "−");
const avecUnite = (v, unite) => (unite ? `${nf(v)}${NBSP}${unite}` : nf(v));

/** 1789 → « 1789 » ; −753 → « 753 av. J.-C. » ; −3 000 000 → « 3 000 000 av. J.-C. ». */
export function annee(d) {
  const a = Math.abs(Math.round(d));
  const s = a >= 10000 ? a.toLocaleString("fr-FR") : String(a);
  return d < 0 ? `${s} av. J.-C.` : s;
}
/** Année mise en forme : « av. J.-C. » en petit, pour que les très grandes dates tiennent. */
function anneeEl(d) {
  const t = annee(d), i = t.indexOf(" av. J.-C.");
  return i < 0 ? t : [t.slice(0, i), NBSP, h("small", {}, "av. J.-C.")];
}
// Il n'y a pas d'année 0 : de 753 av. J.-C. à 476, il s'écoule 1 228 ans.
const ecart = (a, b) => b - a - (a < 0 && b > 0 ? 1 : 0);
function dureeTexte(n) {
  if (n >= 1e6) return `≈ ${nf(n / 1e6, 1)} million${n >= 2e6 ? "s" : ""} d'années`;
  return `≈ ${Math.round(n).toLocaleString("fr-FR")} ans`;
}

function pasJoli(brutPas) {
  if (!(brutPas > 0) || !Number.isFinite(brutPas)) return 1;
  const p = 10 ** Math.floor(Math.log10(brutPas)), f = brutPas / p;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p;
}

// Petits dessins à l'encre (currentColor : la couleur vient des jetons via CSS).
const icone = {
  fleche: () => svg("svg", { viewBox: "0 0 24 24", class: "cours-ico", "aria-hidden": "true", focusable: "false" },
    svg("path", { d: "M4 12.4 C 9 11.6, 14 12.2, 19 12", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }),
    svg("path", { d: "M14.2 7.2 L 19.4 12 L 14 16.8", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
  chevron: () => svg("svg", { viewBox: "0 0 24 24", class: "cours-ico cours-chevron", "aria-hidden": "true", focusable: "false" },
    svg("path", { d: "M6 9.5 L 12 15 L 18 9.2", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
  exclamation: () => svg("svg", { viewBox: "0 0 40 40", class: "cours-ico-attention", "aria-hidden": "true", focusable: "false" },
    svg("path", { d: "M20.5 3.2 C 30 3.6, 36.6 10.4, 36.4 20.2 C 36.2 30.2, 29.4 36.8, 19.6 36.6 C 10 36.4, 3.4 29.6, 3.6 19.8 C 3.8 10.6, 10.8 2.8, 20.5 3.2 Z", fill: "none", stroke: "currentColor", "stroke-width": "2.4", "stroke-linecap": "round" }),
    svg("path", { d: "M20.2 10.5 C 20.6 15, 20 19.4, 20.4 23.6", fill: "none", stroke: "currentColor", "stroke-width": "3.6", "stroke-linecap": "round" }),
    svg("circle", { cx: "20.3", cy: "29.4", r: "2.3", fill: "currentColor" })),
  courbe: () => svg("svg", { viewBox: "0 0 60 40", class: "cours-ico-savais", "aria-hidden": "true", focusable: "false" },
    svg("path", { d: "M6 6 C 6 24, 22 34, 50 30", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }),
    svg("path", { d: "M43 23.5 L 51 30 L 42.5 35", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
  fleuron: () => svg("svg", { viewBox: "0 0 120 24", class: "cours-fleuron", "aria-hidden": "true", focusable: "false" },
    svg("path", { d: "M8 13 C 30 11, 44 14, 60 12 C 76 10, 92 13, 112 11.5", fill: "none", stroke: "currentColor", "stroke-width": "1.3", "stroke-linecap": "round" }),
    svg("path", { d: "M60 12 C 54 6, 47 5, 42 7 C 47 11, 54 12, 60 12 Z M60 12 C 66 18, 73 19, 78 17 C 73 13, 66 12, 60 12 Z", fill: "currentColor", opacity: ".55" }),
    svg("circle", { cx: "60", cy: "12", r: "2.2", fill: "currentColor" })),
};

const figTitre = (etiquette, titre, id) =>
  h("figcaption", { class: "cours-figure-titre", id },
    h("span", { class: "cours-etiquette" }, etiquette),
    titre ? ligne(titre, "span", "cours-figure-nom") : null);

// ————————————————————————————— Apparition (animations au défilement) —————————————————————————————

let obsApparition = null;
function observerApparition(el) {
  if (typeof IntersectionObserver === "undefined") { el.classList.add("cours-vu"); return; }
  obsApparition ||= new IntersectionObserver((entrees) => {
    for (const e of entrees) if (e.isIntersecting) { e.target.classList.add("cours-vu"); obsApparition.unobserve(e.target); }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.15 });
  obsApparition.observe(el);
}

// ————————————————————————————— Révélation pas à pas —————————————————————————————

function revelateur(items, { depart = 1, libelle, onMaj } = {}) {
  let vus = 0;
  const suivant = h("button", { type: "button", class: "cours-bouton" });
  const tout = h("button", { type: "button", class: "cours-bouton cours-bouton-discret" }, "Tout afficher");
  const reprendre = h("button", { type: "button", class: "cours-bouton cours-bouton-discret", hidden: true }, "↺ Revoir depuis le début");
  const barre = h("div", { class: "cours-actions" }, suivant, tout, reprendre);

  function montrer(n, focus) {
    const avant = vus;
    vus = Math.max(0, Math.min(n, items.length));
    items.forEach((li, i) => {
      li.hidden = i >= vus;
      li.classList.toggle("cours-apparait", i >= avant && i < vus && avant !== vus);
    });
    const fini = vus >= items.length;
    suivant.hidden = fini; tout.hidden = fini; reprendre.hidden = !fini || depart >= items.length;
    const [texte, sr] = libelle(vus, items.length);
    suivant.replaceChildren(h("span", {}, texte), sr ? h("span", { class: "cours-sr" }, ` (${sr})`) : null);
    onMaj?.(vus);
    if (focus && fini) (reprendre.hidden ? items[items.length - 1] : reprendre).focus({ preventScroll: true });
  }
  items.forEach((li) => li.setAttribute("tabindex", "-1"));
  suivant.addEventListener("click", () => montrer(vus + 1, true));
  tout.addEventListener("click", () => montrer(items.length, true));
  reprendre.addEventListener("click", () => { montrer(depart); suivant.focus(); });
  montrer(depart);
  return { barre, montrer };
}

// ————————————————————————————— Blocs simples —————————————————————————————

function blocTexte(b) { return paragraphes(b.md, "cours-bloc cours-texte"); }

function blocDefinition(b) {
  return h("div", { class: "cours-bloc cours-definition" },
    h("p", { class: "cours-etiquette" }, "Définition"),
    h("h4", { class: "cours-definition-terme" }, h("dfn", {}, b.terme)),
    paragraphes(b.md));
}

function blocPropriete(b) {
  return h("div", { class: "cours-bloc cours-propriete", role: "note", "aria-label": "À retenir" },
    h("p", { class: "cours-propriete-onglet", "aria-hidden": "true" }, "À retenir"),
    b.titre ? h("h4", { class: "cours-propriete-titre" }, b.titre) : null,
    paragraphes(b.md));
}

function blocAttention(b) {
  return h("div", { class: "cours-bloc cours-attention", role: "note", "aria-label": "Attention" },
    icone.exclamation(),
    h("div", {}, h("p", { class: "cours-attention-titre" }, "Attention, piège !"), paragraphes(b.md)));
}

function blocAstuce(b) {
  return h("div", { class: "cours-bloc cours-astuce", role: "note", "aria-label": "Astuce" },
    h("span", { class: "cours-ruban", "aria-hidden": "true" }),
    h("p", { class: "cours-astuce-titre" }, "Astuce"),
    paragraphes(b.md));
}

function blocSavaisTu(b) {
  return h("div", { class: "cours-bloc cours-savais", role: "note", "aria-label": "Le savais-tu ?" },
    icone.courbe(),
    h("div", {}, h("p", { class: "cours-savais-titre" }, "Le savais-tu ?"), paragraphes(b.md, "cours-savais-texte")));
}

function blocCitation(b) {
  return h("figure", { class: "cours-bloc cours-citation" },
    h("blockquote", {}, h("p", {}, "« ", ligne(b.texte), " »")),
    h("figcaption", {}, "— ", h("span", { class: "cours-citation-auteur" }, b.auteur),
      b.source ? [", ", h("cite", {}, b.source)] : null));
}

function blocListe(b) {
  const tag = b.ordonnee ? "ol" : "ul";
  return h("div", { class: "cours-bloc cours-liste" },
    b.titre ? h("h4", { class: "cours-bloc-titre" }, b.titre) : null,
    h(tag, { class: `cours-liste-${tag}` }, (b.items || []).map((it) => ligne(it, "li"))));
}

function blocTableau(b) {
  const cid = uid("tab");
  const entetes = b.entetes || [];
  return h("figure", { class: "cours-bloc cours-figure cours-tableau" },
    h("div", { class: "cours-defile", role: "region", tabindex: "0", "aria-labelledby": cid },
      h("table", {},
        h("caption", { id: cid }, h("span", { class: "cours-etiquette" }, "Tableau"), b.titre ? ligne(b.titre, "span", "cours-figure-nom") : null),
        h("thead", {}, h("tr", {}, entetes.map((e) => h("th", { scope: "col" }, ligne(e))))),
        h("tbody", {}, (b.lignes || []).map((l) => h("tr", {}, l.map((c, i) => i === 0 ? h("th", { scope: "row" }, ligne(String(c))) : h("td", {}, ligne(String(c))))))))));
}

// ————————————————————————————— Exemple résolu —————————————————————————————

function blocExemple(b) {
  const el = h("div", { class: "cours-bloc cours-exemple" },
    h("p", { class: "cours-etiquette cours-etiquette-crayon" }, h("span", { "aria-hidden": "true" }, "✎"), "Exemple"),
    b.titre ? h("h4", { class: "cours-exemple-titre" }, ligne(b.titre)) : null,
    b.md ? paragraphes(b.md) : null);
  const etapes = (b.etapes || []).filter(Boolean);
  if (etapes.length) {
    const items = etapes.map((e, i) => h("li", { class: "cours-exemple-etape" },
      h("span", { class: "cours-exemple-num", "aria-hidden": "true" }, i + 1), ligne(e, "span")));
    const consigne = h("p", { class: "cours-exemple-consigne" }, "Cherche d'abord de ton côté, puis révèle la solution pas à pas.");
    const { barre } = revelateur(items, {
      depart: 0,
      libelle: (n, t) => n === 0 ? ["Voir la première étape", `${t} étapes`] : ["Étape suivante", `${n + 1} sur ${t}`],
      onMaj: (n) => { consigne.hidden = n > 0; },
    });
    el.append(consigne, h("ol", { class: "cours-exemple-etapes", "aria-live": "polite" }, items), barre);
  }
  return el;
}

// ————————————————————————————— Étapes et cycles —————————————————————————————

function blocEtapes(b) {
  const items = (b.items || []);
  const n = items.length;
  const el = h("div", { class: `cours-bloc cours-etapes${b.cycle ? " cours-cycle" : ""}` },
    h("p", { class: "cours-etiquette" }, b.cycle ? "Cycle" : "Étapes"),
    b.titre ? h("h4", { class: "cours-bloc-titre" }, ligne(b.titre)) : null);
  const lis = items.map((it, i) => h("li", { class: "cours-etape" },
    h("span", { class: "cours-etape-num", "aria-hidden": "true" }, i + 1),
    h("div", { class: "cours-etape-corps" }, h("p", { class: "cours-etape-titre" }, ligne(it.titre)), paragraphes(it.md))));
  const liste = h("ol", { class: "cours-etapes-liste", "aria-live": "polite" }, lis);

  let majAnneau = null;
  let anneau = null;
  if (b.cycle && n >= 2) {
    // Anneau : nœuds répartis sur un cercle, arcs fléchés entre étapes consécutives (la dernière revient à la première).
    const mid = uid("fl");
    const R = 36, cx = 50, cy = 50;
    const ang = (i) => (-90 + (i * 360) / n) * Math.PI / 180;
    const delta = Math.min(20, (360 / n) * 0.3) * Math.PI / 180;
    const pt = (a) => [cx + R * Math.cos(a), cy + R * Math.sin(a)];
    const dessin = svg("svg", { viewBox: "0 0 100 100", class: "cours-cycle-svg", "aria-hidden": "true", focusable: "false" },
      svg("defs", {}, svg("marker", { id: mid, viewBox: "0 0 10 10", refX: "7", refY: "5", markerWidth: "5", markerHeight: "5", orient: "auto-start-reverse" },
        svg("path", { d: "M1 1.5 L 8.5 5 L 1 8.5", class: "cours-cycle-pointe" }))),
      svg("circle", { cx, cy, r: R, class: "cours-cycle-guide" }));
    const arcs = items.map((_, i) => {
      const [x1, y1] = pt(ang(i) + delta), [x2, y2] = pt(ang(i + 1) - delta);
      const p = svg("path", { d: `M${x1.toFixed(2)} ${y1.toFixed(2)} A${R} ${R} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`, class: "cours-cycle-arc", "marker-end": `url(#${mid})` });
      dessin.append(p);
      return p;
    });
    const noeuds = items.map((it, i) => {
      const [x, y] = pt(ang(i));
      return h("div", { class: "cours-cycle-noeud", style: { left: `${x}%`, top: `${y}%` } },
        h("span", { class: "cours-cycle-pastille" }, i + 1), h("span", { class: "cours-cycle-nom" }, brut(it.titre)));
    });
    anneau = h("div", { class: "cours-cycle-anneau", "aria-hidden": "true" }, dessin,
      h("span", { class: "cours-cycle-centre" }, "↻", h("br"), "et ça recommence"), noeuds);
    majAnneau = (vus) => {
      noeuds.forEach((nd, i) => { nd.classList.toggle("vu", i < vus); nd.classList.toggle("actif", i === vus - 1); });
      arcs.forEach((a, i) => a.classList.toggle("vu", i < vus - 1 || (vus >= n && i === n - 1)));
    };
  }
  const { barre } = revelateur(lis, {
    depart: 1,
    libelle: (k, t) => ["Étape suivante", `${k + 1} sur ${t}`],
    onMaj: (k) => majAnneau?.(k),
  });
  if (anneau) el.append(h("div", { class: "cours-cycle-grille" }, anneau, h("div", {}, liste, barre)));
  else el.append(liste, barre);
  return el;
}

// ————————————————————————————— Vérifie que tu as compris —————————————————————————————

function ordreMelange(n, graine) {
  let x = 2166136261;
  for (const ch of graine) x = Math.imul(x ^ ch.charCodeAt(0), 16777619) >>> 0;
  const ordre = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) { x = Math.imul(x ^ (x >>> 15), 2246822507) >>> 0; x = (x ^ (x >>> 13)) >>> 0; const j = x % (i + 1); [ordre[i], ordre[j]] = [ordre[j], ordre[i]]; }
  return ordre;
}

function blocVerifie(b, ctx = {}) {
  const qid = uid("q");
  const choix = b.choix || [];
  let essai = 0, repondu = false;
  const retour = h("div", { class: "cours-verifie-retour", "aria-live": "polite" });
  const tampon = h("span", { class: "cours-tampon", "aria-hidden": "true", hidden: true });
  const reessayer = h("button", { type: "button", class: "cours-bouton cours-bouton-discret", hidden: true }, "↺ Réessayer");
  // Ordre d'affichage mélangé (stable pour une même question) : la bonne réponse n'est pas toujours au même endroit.
  const ordre = ordreMelange(choix.length, `${b.q}|${choix.join("|")}`);
  const place = (i) => ordre.indexOf(i); // position affichée du choix d'indice i
  const parIndice = choix.map((c, i) => h("button", { type: "button", class: "cours-choix", onclick: () => choisir(i) },
    h("span", { class: "cours-choix-lettre", "aria-hidden": "true" }, lettre(place(i))),
    ligne(c, "span", "cours-choix-texte"),
    h("span", { class: "cours-choix-marque", "aria-hidden": "true" }),
    h("span", { class: "cours-sr cours-choix-etat" })));
  const boutons = ordre.map((i) => parIndice[i]);

  function choisir(i) {
    if (repondu) return;
    repondu = true; essai++;
    const juste = i === b.bonne;
    parIndice.forEach((bt, k) => {
      bt.setAttribute("aria-disabled", "true");
      const etat = bt.querySelector(".cours-choix-etat"), marque = bt.querySelector(".cours-choix-marque");
      if (k === i) {
        bt.classList.add(juste ? "cours-choix-juste" : "cours-choix-faux");
        marque.textContent = juste ? "✓" : "✗";
        etat.textContent = juste ? " : ta réponse, juste" : " : ta réponse, fausse";
      } else if (k === b.bonne) {
        bt.classList.add("cours-choix-bonne"); marque.textContent = "✓"; etat.textContent = " : la bonne réponse";
      } else bt.classList.add("cours-choix-eteint");
    });
    tampon.hidden = false;
    tampon.className = `cours-tampon ${juste ? "cours-tampon-ok" : "cours-tampon-ko"}`;
    tampon.replaceChildren(h("span", { class: "cours-tampon-signe" }, juste ? "✓" : "✗"), h("span", { class: "cours-tampon-mot" }, juste ? "Bien vu" : "À revoir"));
    retour.replaceChildren(
      h("p", { class: `cours-verifie-verdict ${juste ? "ok" : "ko"}` },
        juste ? "Bravo, c'est juste !" : ["Pas tout à fait. La bonne réponse est ", h("strong", {}, `${lettre(place(b.bonne))} : `, ligne(choix[b.bonne] ?? "")), "."]),
      b.explication ? paragraphes(b.explication, "cours-verifie-explication") : null);
    reessayer.hidden = false;
    try { ctx.onVerifie?.(juste, { bloc: b, essai }); } catch (e) { console.warn("onVerifie :", e); }
  }
  reessayer.addEventListener("click", () => {
    repondu = false;
    boutons.forEach((bt) => {
      bt.removeAttribute("aria-disabled");
      bt.classList.remove("cours-choix-juste", "cours-choix-faux", "cours-choix-bonne", "cours-choix-eteint");
      bt.querySelector(".cours-choix-marque").textContent = ""; bt.querySelector(".cours-choix-etat").textContent = "";
    });
    tampon.hidden = true; retour.replaceChildren(); reessayer.hidden = true;
    boutons[0]?.focus();
  });

  const court = choix.every((c) => brut(c).length <= 28);
  return h("div", { class: "cours-bloc cours-verifie", role: "group", "aria-labelledby": qid },
    tampon,
    h("p", { class: "cours-verifie-etiquette" }, "Vérifie que tu as compris"),
    h("p", { class: "cours-verifie-q", id: qid }, ligne(b.q)),
    h("div", { class: `cours-verifie-choix${court ? " court" : ""}` }, boutons),
    retour,
    h("div", { class: "cours-actions" }, reessayer));
}

// ————————————————————————————— Frise chronologique —————————————————————————————

function blocFrise(b) {
  const ev = [...(b.evenements || [])].filter((e) => Number.isFinite(e?.date)).sort((x, y) => x.date - y.date);
  const n = ev.length;
  const tid = uid("frise"), did = uid("frise-detail");
  const fig = h("figure", { class: "cours-bloc cours-figure cours-frise", "aria-labelledby": tid }, figTitre("Frise chronologique", b.titre, tid));
  if (!n) return fig;

  // Échelle : proportionnelle aux durées, avec ruptures pour les écarts démesurés et un écart minimal lisible.
  const gaps = ev.slice(1).map((e, i) => e.date - ev[i].date);
  const tri = gaps.filter((g) => g > 0).sort((a, c) => a - c);
  const med = tri.length ? tri[Math.floor((tri.length - 1) / 2)] : 1;
  const etendue = (ev[n - 1].date - ev[0].date) || 1;
  const rupture = gaps.map((g) => n >= 3 && g > med * 4 && g > etendue * 0.3);
  const u = gaps.map((g, i) => rupture[i] ? med * 1.6 : g);
  for (let k = 0; k < 6; k++) {
    const T = u.reduce((s, x) => s + x, 0) || 1, moy = T / Math.max(n - 1, 1);
    for (let i = 0; i < u.length; i++) u[i] = Math.max(u[i], (rupture[i] ? 1.2 : 0.62) * moy);
  }
  const T = u.reduce((s, x) => s + x, 0);
  const pos = [0];
  u.forEach((x) => pos.push(pos[pos.length - 1] + x));
  if (n === 1 || !T) pos.splice(0, pos.length, ...ev.map((_, i) => (n === 1 ? 0.5 : i / (n - 1))));
  else for (let i = 0; i < n; i++) pos[i] /= T;

  const Wz = Math.max(n - 1, 1) * 112; // largeur minimale de la zone utile, en px
  const zone = h("div", { class: "cours-frise-zone" });
  const piste = h("div", { class: "cours-frise-piste", style: { minWidth: `${Wz + 176}px` } }, h("div", { class: "cours-frise-axe", "aria-hidden": "true" }), zone);
  const pc = (x) => `${(x * 100).toFixed(3)}%`;

  // Graduations régulières dans les segments non rompus.
  const ppa = gaps.map((g, i) => !rupture[i] && g > 0 ? ((pos[i + 1] - pos[i]) * Wz) / g : Infinity);
  const ppaMin = Math.min(...ppa);
  if (Number.isFinite(ppaMin)) {
    const pas = Math.max(1, pasJoli(90 / ppaMin));
    let dernier = -Infinity;
    gaps.forEach((g, i) => {
      if (rupture[i] || !(g > 0)) return;
      for (let k = Math.ceil(ev[i].date / pas); k * pas < ev[i + 1].date; k++) {
        const t = k * pas;
        if (t <= ev[i].date || t === 0) continue;
        const x = pos[i] + ((t - ev[i].date) / g) * (pos[i + 1] - pos[i]);
        const pres = Math.min(x - pos[i], pos[i + 1] - x) * Wz < 46;
        const etiq = !pres && (x - dernier) * Wz >= 84;
        if (etiq) dernier = x;
        zone.append(h("span", { class: "cours-frise-grad", style: { left: pc(x) }, "aria-hidden": "true" }, etiq ? h("span", {}, annee(t)) : null));
      }
    });
  }
  gaps.forEach((g, i) => {
    if (!rupture[i]) return;
    const x = (pos[i] + pos[i + 1]) / 2;
    zone.append(h("span", { class: "cours-frise-rupture", style: { left: pc(x) }, "aria-hidden": "true" }),
      h("span", { class: "cours-frise-ellipse", style: { left: pc(x) } }, h("span", { class: "cours-sr" }, "Rupture d'échelle : "), dureeTexte(ecart(ev[i].date, ev[i + 1].date))));
  });

  const detail = h("div", { class: "cours-frise-detail", id: did, "aria-live": "polite" });
  const points = ev.map((e, i) => h("span", { class: "cours-frise-point", style: { left: pc(pos[i]) }, "aria-hidden": "true" }));
  let sel = -1;
  const boutons = ev.map((e, i) => h("button", {
    type: "button", class: `cours-frise-ev ${i % 2 ? "bas" : "haut"}`, style: { left: pc(pos[i]) },
    "aria-pressed": "false", "aria-controls": did,
    onclick: () => choisir(i), onfocus: () => { choisir(i); centrer(i); },
    onkeydown: (k) => {
      const cible = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: n - 1 }[k.key];
      if (cible === undefined) return;
      k.preventDefault();
      boutons[Math.max(0, Math.min(n - 1, cible))].focus();
    },
  }, h("span", { class: "cours-frise-date" }, anneeEl(e.date)), ligne(e.label, "span", "cours-frise-label")));
  zone.append(...points, ...boutons);

  const defile = h("div", { class: "cours-frise-defile" }, piste);
  function centrer(i) {
    const bt = boutons[i], gauche = zone.offsetLeft + bt.offsetLeft - defile.clientWidth / 2;
    if (defile.scrollWidth > defile.clientWidth) defile.scrollTo({ left: Math.max(0, gauche), behavior: mouvementReduit() ? "auto" : "smooth" });
  }
  function choisir(i) {
    if (sel === i) return;
    sel = i;
    boutons.forEach((bt, k) => bt.setAttribute("aria-pressed", String(k === i)));
    points.forEach((p, k) => p.classList.toggle("actif", k === i));
    const e = ev[i];
    detail.replaceChildren(
      h("p", { class: "cours-frise-detail-date" }, anneeEl(e.date)),
      h("div", {}, h("p", { class: "cours-frise-detail-label" }, ligne(e.label)), e.detail ? paragraphes(e.detail) : null));
  }
  choisir(0);
  fig.append(
    defile,
    h("p", { class: "cours-consigne" }, "Touche un événement (ou parcours-les avec les flèches) pour lire le détail."),
    detail);
  return fig;
}

// ————————————————————————————— Graphiques —————————————————————————————

function tableAccessible(donnees, b) {
  return h("div", { class: "cours-sr" }, h("table", {},
    h("caption", {}, brut(b.titre || "Données du graphique")),
    h("thead", {}, h("tr", {}, h("th", { scope: "col" }, "Donnée"), h("th", { scope: "col" }, b.unite ? `Valeur (${b.unite})` : "Valeur"))),
    h("tbody", {}, donnees.map((d) => h("tr", {}, h("th", { scope: "row" }, brut(String(d.label))), h("td", {}, nf(d.valeur)))))));
}

function couper(texte, max) {
  const mots = String(texte).split(/\s+/), lignes = [];
  let cur = "";
  for (const m of mots) {
    if (cur && (cur + " " + m).length > max) { lignes.push(cur); cur = m; } else cur = cur ? `${cur} ${m}` : m;
  }
  if (cur) lignes.push(cur);
  return lignes;
}

function graphiqueAxes(donnees, b, type) {
  const W = 400, g = 46, d = 12, haut = 34;
  const n = donnees.length, vals = donnees.map((x) => x.valeur);
  // Étiquettes de l'axe horizontal : sur deux lignes au plus, sinon penchées.
  const bande = (W - g - d) / n, X = (i) => g + bande * (i + 0.5);
  const maxC = Math.max(4, Math.floor(bande / 7.8));
  const coupes = donnees.map((x) => couper(brut(String(x.label)), maxC));
  const penche = coupes.some((l) => l.length > 2 || l.some((m) => m.length > maxC + 2));
  const plusLong = Math.max(...donnees.map((x) => brut(String(x.label)).length));
  const bas = penche ? Math.min(96, 26 + plusLong * 4.2) : 30 + 15 * Math.max(...coupes.map((l) => l.length));
  const H = 222 + bas;
  let vmin = Math.min(0, ...vals), vmax = Math.max(0, ...vals);
  if (vmax === vmin) vmax = vmin + 1;
  const pas = pasJoli((vmax - vmin) / 4);
  const y0 = Math.floor(vmin / pas + 1e-9) * pas, y1 = Math.ceil(vmax / pas - 1e-9) * pas;
  const Y = (v) => haut + ((y1 - v) / (y1 - y0)) * (H - haut - bas);
  const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "cours-g-svg", "aria-hidden": "true", focusable: "false" });

  for (let k = 0; y0 + k * pas <= y1 + pas * 1e-6; k++) {
    const v = +(y0 + k * pas).toFixed(10);
    s.append(svg("line", { class: v === 0 ? "cours-g-zero" : "cours-g-grille", x1: g, x2: W - d, y1: Y(v), y2: Y(v) }),
      svg("text", { class: "cours-g-grad", x: g - 8, y: Y(v) + 4.5, "text-anchor": "end" }, nf(v)));
  }
  if (b.unite) s.append(svg("text", { class: "cours-g-unite", x: 6, y: 18 }, `en ${b.unite}`));
  s.append(svg("line", { class: "cours-g-axe", x1: g, y1: haut - 10, x2: g, y2: H - bas }),
    svg("line", { class: "cours-g-axe", x1: g, y1: Y(0), x2: W - d, y2: Y(0) }));

  donnees.forEach((x, i) => {
    const yb = H - bas + 18;
    if (penche) s.append(svg("text", { class: "cours-g-etiq petit", x: X(i), y: yb, "text-anchor": "end", transform: `rotate(-32 ${X(i)} ${yb})` }, brut(String(x.label))));
    else s.append(svg("text", { class: "cours-g-etiq", x: X(i), y: yb, "text-anchor": "middle" },
      coupes[i].map((l, k) => svg("tspan", { x: X(i), dy: k ? 15 : 0 }, l))));
  });

  if (type === "barres") {
    const bw = Math.min(bande * 0.62, 64);
    donnees.forEach((x, i) => {
      const ya = Y(Math.max(x.valeur, 0)), yb = Y(Math.min(x.valeur, 0));
      s.append(svg("rect", { class: `cours-g-barre${x.valeur < 0 ? " neg" : ""}`, x: X(i) - bw / 2, y: ya, width: bw, height: Math.max(yb - ya, 0.5), rx: 2, style: `transition-delay:${i * 70}ms` }),
        svg("text", { class: "cours-g-valeur", x: X(i), y: x.valeur >= 0 ? ya - 7 : yb + 17, "text-anchor": "middle" }, nf(x.valeur)));
    });
  } else {
    const pts = donnees.map((x, i) => [X(i), Y(x.valeur)]);
    const trace = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
    s.append(svg("path", { class: "cours-g-aire", d: `${trace} L${pts[n - 1][0].toFixed(1)} ${Y(0)} L${pts[0][0].toFixed(1)} ${Y(0)} Z` }),
      svg("path", { class: "cours-g-ligne", d: trace, pathLength: "1" }));
    pts.forEach(([x, y], i) => s.append(svg("circle", { class: "cours-g-point", cx: x, cy: y, r: 5, style: `transition-delay:${300 + i * 60}ms` }),
      svg("text", { class: "cours-g-valeur", x, y: y - 12, "text-anchor": "middle" }, nf(donnees[i].valeur))));
  }
  return s;
}

function graphiqueSecteurs(donnees, b) {
  const parts = donnees.filter((x) => x.valeur > 0);
  const total = parts.reduce((t, x) => t + x.valeur, 0) || 1;
  const n = parts.length, pid = uid("hach");
  const cx = 120, cy = 120, r = 104;
  const s = svg("svg", { viewBox: "0 0 240 240", class: "cours-g-svg cours-g-camembert", "aria-hidden": "true", focusable: "false" },
    svg("defs", {}, svg("pattern", { id: pid, width: "7", height: "7", patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" },
      svg("line", { x1: "0", y1: "0", x2: "0", y2: "7", class: "cours-g-hachure" }))));
  const couleur = (i) => `color-mix(in oklab, var(--pigment, #3d5a99) ${n === 1 ? 80 : Math.round(92 - (i * 70) / (n - 1))}%, var(--papier, #f2e9d6))`;
  const legende = h("ul", { class: "cours-legende" });
  const pctTexte = (f) => `${nf(f * 100, f * 100 < 10 ? 1 : 0)}${NBSP}%`;
  let a = -Math.PI / 2;
  parts.forEach((x, i) => {
    const f = x.valeur / total, a1 = a + f * 2 * Math.PI;
    const style = `fill:${couleur(i)}`;
    const forme = f >= 0.9999
      ? (attrs) => svg("circle", { cx, cy, r, ...attrs })
      : (attrs) => {
        const [x0, y0, x1, y1] = [cx + r * Math.cos(a), cy + r * Math.sin(a), cx + r * Math.cos(a1), cy + r * Math.sin(a1)];
        return svg("path", { d: `M${cx} ${cy} L${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 ${a1 - a > Math.PI ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`, ...attrs });
      };
    s.append(forme({ class: "cours-g-part", style }));
    if (i % 2) s.append(forme({ class: "cours-g-part-hachee", fill: `url(#${pid})` }));
    if (a1 - a > 0.42) {
      const m = (a + a1) / 2;
      s.append(svg("text", { class: "cours-g-valeur", x: cx + r * 0.63 * Math.cos(m), y: cy + r * 0.63 * Math.sin(m) + 5, "text-anchor": "middle" }, pctTexte(f)));
    }
    const estPct = b.unite === "%" && Math.abs(total - 100) < 0.5;
    legende.append(h("li", {},
      h("span", { class: `cours-pastille${i % 2 ? " hachee" : ""}`, style: { background: couleur(i) }, "aria-hidden": "true" }),
      h("span", { class: "cours-legende-nom" }, ligne(String(x.label))),
      h("span", { class: "cours-legende-val" }, estPct ? avecUnite(x.valeur, "%") : `${avecUnite(x.valeur, b.unite)} · ${pctTexte(f)}`)));
    a = a1;
  });
  return h("div", { class: "cours-secteurs" }, s, legende);
}

function blocGraphique(b) {
  const donnees = (b.donnees || []).filter((x) => Number.isFinite(x?.valeur));
  const type = ["barres", "courbe", "secteurs"].includes(b.type) ? b.type : "barres";
  const tid = uid("g");
  const etiq = { barres: "Diagramme en barres", courbe: "Graphique", secteurs: "Diagramme circulaire" }[type];
  const fig = h("figure", { class: `cours-bloc cours-figure cours-graphique cours-graphique-${type} cours-anime`, "aria-labelledby": tid }, figTitre(etiq, b.titre, tid));
  if (donnees.length) fig.append(type === "secteurs" ? graphiqueSecteurs(donnees, b) : h("div", { class: "cours-g-cadre" }, graphiqueAxes(donnees, b, type)), tableAccessible(donnees, b));
  observerApparition(fig);
  return fig;
}

// ————————————————————————————— Droite graduée —————————————————————————————

function blocDroite(b) {
  const tid = uid("droite");
  const fig = h("figure", { class: "cours-bloc cours-figure cours-droite", "aria-labelledby": tid }, figTitre("Droite graduée", b.titre, tid));
  const { min, max, pas } = b;
  if (![min, max, pas].every(Number.isFinite) || max <= min || pas <= 0) return fig;
  const W = 420, x0 = 26, x1 = 388;
  const X = (v) => x0 + ((v - min) / (max - min)) * (x1 - x0);
  const k = Math.min(200, Math.round((max - min) / pas));
  const saut = Math.ceil(k / 12);
  const points = [...(b.points || [])].filter((p) => Number.isFinite(p?.x)).sort((p, q) => p.x - q.x);
  // Étiquettes des points : on monte d'un étage quand deux étiquettes se touchent.
  const derniers = [];
  const places = points.map((p) => {
    const x = X(p.x), lab = brut(String(p.label)), larg = lab.length * 9 + 10;
    let niv = 0;
    while (niv < 2 && derniers[niv] !== undefined && x - derniers[niv] < larg) niv++;
    derniers[niv] = x;
    return { x, lab, niv };
  });
  // Graduations : fractions k/n simplifiées si `fractions: n`, sinon décimaux à la française (2 décimales au plus).
  const n = Number.isInteger(b.fractions) && b.fractions > 1 ? b.fractions : 0;
  const graduation = (v) => {
    if (n) {
      const num = Math.round(v * n);
      if (Math.abs(v * n - num) < 1e-6) {
        const pgcd = (a, c) => (c ? pgcd(c, a % c) : Math.abs(a));
        const d = pgcd(num, n) || 1;
        if (n / d !== 1) return { num: Math.abs(num / d), den: n / d, signe: num < 0 ? "−" : "" };
        return { texte: nf(num / d) };
      }
    }
    return { texte: nf(v, 2) };
  };
  const ticks = [];
  for (let i = 0; i <= k; i++) {
    const v = +(min + i * pas).toFixed(10);
    ticks.push({ v, majeur: i % saut === 0 || v === 0, g: graduation(v) });
  }
  const avecFractions = ticks.some((t) => t.majeur && t.g.den);
  const ya = 42 + Math.max(0, ...places.map((p) => p.niv)) * 22, H = ya + (avecFractions ? 58 : 40);
  const description = `Droite graduée de ${nf(min, 3)} à ${nf(max, 3)}, graduée de ${n ? `1/${n}` : nf(pas, 3)} en ${n ? `1/${n}` : nf(pas, 3)}.` +
    (points.length ? ` Points : ${points.map((p) => `${brut(String(p.label))} d'abscisse ${nf(p.x, 3)}`).join(" ; ")}.` : "");
  const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "cours-droite-svg", role: "img", "aria-label": description, focusable: "false" },
    svg("line", { class: "cours-d-axe", x1: x0 - 14, y1: ya, x2: x1 + 18, y2: ya }),
    svg("path", { class: "cours-d-pointe", d: `M${x1 + 12} ${ya - 6} L${x1 + 24} ${ya} L${x1 + 12} ${ya + 6}` }));
  for (const { v, majeur, g } of ticks) {
    s.append(svg("line", { class: v === 0 ? "cours-d-grad zero" : "cours-d-grad", x1: X(v), x2: X(v), y1: ya - (majeur ? 8 : 4.5), y2: ya + (majeur ? 8 : 4.5) }));
    if (!majeur) continue;
    if (g.den) {
      // Fraction écrite « à la main » : numérateur, trait, dénominateur (le signe moins devant le trait).
      const x = X(v), larg = Math.max(String(g.num).length, String(g.den).length) * 8 + 4;
      s.append(svg("text", { class: "cours-d-nombre", x, y: ya + 26, "text-anchor": "middle" }, String(g.num)),
        svg("line", { class: "cours-d-barre", x1: x - larg / 2, x2: x + larg / 2, y1: ya + 31, y2: ya + 31 }),
        svg("text", { class: "cours-d-nombre", x, y: ya + 46, "text-anchor": "middle" }, String(g.den)));
      if (g.signe) s.append(svg("text", { class: "cours-d-nombre", x: x - larg / 2 - 2, y: ya + 36, "text-anchor": "end" }, g.signe));
    } else s.append(svg("text", { class: "cours-d-nombre", x: X(v), y: ya + 27, "text-anchor": "middle" }, g.texte));
  }
  places.forEach(({ x, lab, niv }) => {
    const yl = ya - 18 - niv * 22;
    if (niv) s.append(svg("line", { class: "cours-d-renvoi", x1: x, x2: x, y1: yl + 5, y2: ya - 8 }));
    s.append(svg("circle", { class: "cours-d-point", cx: x, cy: ya, r: 5.5 }),
      svg("text", { class: "cours-d-label", x, y: yl, "text-anchor": "middle" }, lab));
  });
  fig.append(h("div", { class: "cours-droite-cadre" }, s));
  return fig;
}

// ————————————————————————————— Schéma SVG (assaini) —————————————————————————————

const BALISES_INTERDITES = new Set(["script", "foreignobject", "style", "image", "img", "iframe", "object", "embed", "audio", "video", "canvas", "link", "meta", "feimage", "animate", "animatemotion", "animatetransform", "set", "discard", "handler", "listener"]);

/** Assainit une chaîne SVG et renvoie un <svg> importé dans le document (ou null). */
export function assainirSvg(source) {
  if (typeof DOMParser === "undefined") return null;
  const doc = new DOMParser().parseFromString(`<!doctype html><html><body>${String(source || "")}</body></html>`, "text/html");
  const racine = doc.body.querySelector("svg");
  if (!racine) return null;
  for (const el of [...racine.querySelectorAll("*")]) {
    if (!el.isConnected) continue;
    const nom = el.localName.toLowerCase();
    if (BALISES_INTERDITES.has(nom) || el.namespaceURI !== "http://www.w3.org/2000/svg") { el.remove(); continue; }
    if (nom === "a") { el.replaceWith(...el.childNodes); continue; }
  }
  for (const el of [racine, ...racine.querySelectorAll("*")]) {
    for (const at of [...el.attributes]) {
      const n = at.name.toLowerCase(), v = at.value.trim();
      const lien = n === "href" || n.endsWith(":href") || n === "src";
      if (n.startsWith("on") || /javascript:|data:|vbscript:/i.test(v) || (lien && !v.startsWith("#")) ||
        /url\(\s*['"]?(?!#)/i.test(v) || (n === "style" && /expression|@import|behavior/i.test(v))) el.removeAttribute(at.name);
    }
  }
  racine.removeAttribute("width"); racine.removeAttribute("height");
  return document.importNode(racine, true);
}

function blocSchema(b) {
  const tid = uid("schema"), lid = uid("legende");
  const fig = h("figure", { class: "cours-bloc cours-figure cours-schema schema-eclore", "aria-labelledby": tid }, figTitre("Schéma", b.titre, tid));
  const dessin = assainirSvg(b.svg);
  if (dessin) {
    dessin.setAttribute("role", "img");
    dessin.setAttribute("aria-label", brut(b.titre || "Schéma"));
    if (b.legende) dessin.setAttribute("aria-describedby", lid);
    dessin.setAttribute("focusable", "false");
    dessin.classList.add("cours-schema-svg");
    fig.append(h("div", { class: "cours-schema-cadre" }, dessin));
  } else fig.append(h("p", { class: "cours-consigne" }, "Ce schéma n'a pas pu être affiché."));
  if (b.legende) {
    const leg = ligne(b.legende, "p", "cours-schema-legende");
    leg.id = lid;
    fig.append(leg);
  }
  return fig;
}

// ————————————————————————————— Carte (déléguée à carte.js) —————————————————————————————

let moduleCarte = null;
const fmtLat = (v) => `${nf(Math.abs(v), 2)}°${NBSP}${v >= 0 ? "N" : "S"}`;
const fmtLon = (v) => `${nf(Math.abs(v), 2)}°${NBSP}${v >= 0 ? "E" : "O"}`;

function carteRepli(b, chargement = false) {
  const tid = uid("carte");
  const fig = h("figure", { class: "cours-bloc cours-figure cours-carte-repli", "aria-labelledby": tid, "aria-busy": chargement ? "true" : null },
    figTitre(b.fond === "france" ? "Carte de France" : "Carte", b.titre, tid));
  if (chargement) { fig.append(h("p", { class: "cours-consigne" }, "Dessin de la carte…")); return fig; }
  const corps = h("div", { class: "cours-carte-liste" });
  if (b.reperes?.length) corps.append(h("p", { class: "cours-carte-rubrique" }, "Repères"),
    h("ul", {}, b.reperes.map((r) => h("li", {}, h("span", { class: "cours-carte-pin", "aria-hidden": "true" }), h("strong", {}, r.nom), h("span", { class: "cours-carte-coord" }, ` ${fmtLat(r.lat)}, ${fmtLon(r.lon)}`)))));
  if (b.traits?.length) corps.append(h("p", { class: "cours-carte-rubrique" }, "Trajets"),
    h("ul", {}, b.traits.map((t) => h("li", {}, t.label ? h("strong", {}, `${t.label} : `) : null, `de ${fmtLat(t.de[0])}, ${fmtLon(t.de[1])} à ${fmtLat(t.a[0])}, ${fmtLon(t.a[1])}`))));
  if (b.zones?.length) corps.append(h("p", { class: "cours-carte-rubrique" }, "Zones en couleur"), h("p", {}, b.zones.join(", ")));
  if (b.legende) corps.append(ligne(b.legende, "p", "cours-schema-legende"));
  fig.append(corps);
  return fig;
}

function blocCarte(b) {
  const hote = h("div", { class: "cours-bloc cours-carte" }, carteRepli(b, true));
  (moduleCarte ||= import("./carte.js"))
    .then((m) => m.rendreCarte(b))
    .then((el) => { if (!(el instanceof Node)) throw new Error("rendreCarte n'a pas renvoyé d'élément"); hote.replaceChildren(el); })
    .catch((e) => { console.warn("Carte indisponible, repli textuel :", e?.message || e); hote.replaceChildren(carteRepli(b)); });
  return hote;
}

// ————————————————————————————— Aiguillage —————————————————————————————

const RENDUS = {
  texte: blocTexte, definition: blocDefinition, propriete: blocPropriete, exemple: blocExemple,
  attention: blocAttention, astuce: blocAstuce, "savais-tu": blocSavaisTu, citation: blocCitation,
  liste: blocListe, tableau: blocTableau, frise: blocFrise, etapes: blocEtapes, graphique: blocGraphique,
  droite: blocDroite, carte: blocCarte, schema: blocSchema, verifie: blocVerifie,
};

/** Rend un bloc de cours (docs/COURS.md). `options.onVerifie(juste, { bloc, essai })` pour les blocs `verifie`. */
export function rendreBloc(bloc, options = {}) {
  const f = RENDUS[bloc?.t];
  if (!f) return h("div", { class: "cours-bloc cours-inconnu" }, bloc?.md ? paragraphes(bloc.md) : null);
  try { return f(bloc, options); } catch (e) {
    console.warn(`Bloc « ${bloc.t} » non rendu :`, e);
    return h("div", { class: "cours-bloc cours-inconnu" }, bloc.titre || bloc.md ? paragraphes(bloc.titre || bloc.md) : null);
  }
}

/** Texte lu à voix haute pour un bloc. */
function texteBloc(b) {
  const j = (...p) => p.filter(Boolean).map((x) => brut(x)).join(". ");
  switch (b?.t) {
    case "texte": return j(b.md);
    case "attention": return j("Attention", b.md);
    case "astuce": return j("Astuce", b.md);
    case "savais-tu": return j("Le savais-tu ?", b.md);
    case "definition": return j(`Définition. ${b.terme}`, b.md);
    case "propriete": return j("À retenir", b.titre, b.md);
    case "exemple": return j("Exemple", b.titre, b.md, ...(b.etapes || []));
    case "citation": return j(b.texte, `${b.auteur}${b.source ? ", " + b.source : ""}`);
    case "liste": return j(b.titre, ...(b.items || []));
    case "tableau": return j(b.titre, (b.entetes || []).join(", "), ...(b.lignes || []).map((l) => l.join(", ")));
    case "frise": return j(b.titre, ...(b.evenements || []).map((e) => `${annee(e.date)} : ${e.label}`));
    case "etapes": return j(b.titre, ...(b.items || []).map((e, i) => `Étape ${i + 1}, ${e.titre} : ${e.md}`));
    case "graphique": return j(b.titre, ...(b.donnees || []).map((x) => `${x.label} : ${avecUnite(x.valeur, b.unite)}`));
    case "droite": return j(b.titre, ...(b.points || []).map((p) => `${p.label} : ${nf(p.x, 3)}`));
    case "carte": return j(b.titre, ...(b.reperes || []).map((r) => r.nom), b.legende);
    case "schema": return j(b.titre, b.legende);
    case "verifie": return j("Vérifie que tu as compris", b.q, ...(b.choix || []).map((c, i) => `${lettre(i)} : ${c}`));
    default: return "";
  }
}

// ————————————————————————————— Lecture à voix haute —————————————————————————————

const LANGUES = { anglais: "en-GB", espagnol: "es-ES", allemand: "de-DE", arabe: "ar", chinois: "zh-CN" };
function matiereDe(chapitre) {
  return chapitre?.matiere || String(chapitre?.id || "").match(/^\d+e-(.+?)-\d{2}(?:-|$)/)?.[1] || "";
}
let lecture = null; // { bouton }
function etatBouton(b, actif) {
  b.classList.toggle("actif", actif);
  b.querySelector(".cours-ecouter-ico").textContent = actif ? "■" : "🔊";
  b.querySelector(".cours-ecouter-mot").textContent = actif ? "Arrêter" : "Écouter";
}
function arreterLecture() {
  const l = lecture; lecture = null;
  try { window.speechSynthesis?.cancel(); } catch { /* rien */ }
  if (l) etatBouton(l.bouton, false);
}
function voixPour(langue) {
  const vs = window.speechSynthesis.getVoices() || [], l = langue.toLowerCase();
  return vs.find((v) => v.lang?.toLowerCase().replace("_", "-") === l) || vs.find((v) => v.lang?.toLowerCase().startsWith(l.slice(0, 2))) || null;
}
function morceaux(t) {
  const out = []; let cur = "";
  for (const p of t.match(/[^.!?…]+[.!?…]*\s*/g) || [t]) {
    if (cur && (cur + p).length > 220) { out.push(cur); cur = ""; }
    cur += p;
  }
  if (cur.trim()) out.push(cur);
  return out;
}
function boutonEcouter(texte, langue, intitule) {
  if (typeof window === "undefined" || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return null;
  const b = h("button", { type: "button", class: "cours-ecouter" },
    h("span", { class: "cours-ecouter-ico", "aria-hidden": "true" }, "🔊"),
    h("span", { class: "cours-ecouter-mot" }, "Écouter"),
    h("span", { class: "cours-sr" }, ` : ${intitule}`));
  b.addEventListener("click", () => {
    if (lecture?.bouton === b) return arreterLecture();
    arreterLecture();
    const jeton = { bouton: b }; lecture = jeton;
    etatBouton(b, true);
    const voix = voixPour(langue), parts = morceaux(texte());
    parts.forEach((m, i) => {
      const u = new SpeechSynthesisUtterance(m);
      u.lang = langue; if (voix) u.voice = voix; u.rate = 0.95;
      if (i === parts.length - 1) u.onend = () => { if (lecture === jeton) { lecture = null; etatBouton(b, false); } };
      u.onerror = () => { if (lecture === jeton) { lecture = null; etatBouton(b, false); } };
      window.speechSynthesis.speak(u);
    });
  });
  return b;
}

// ————————————————————————————— Leçon complète —————————————————————————————

/**
 * Rend la leçon d'un chapitre.
 * @param cours     objet d'un chapitre du fichier de cours : { accroche, objectifs, sections, bilan }
 * @param chapitre  objet chapitre du module de questions : { id, titre, theme, retenir, competences, matiere? }
 * @param onVerifie (juste, { bloc, essai }) à chaque réponse à un bloc `verifie` (essai = 1 pour la première)
 * @param onSection (index) une fois par section, quand l'élève l'a lue jusqu'au bout
 * @param onFin     () au clic sur « Je m'entraîne »
 */
export function rendreCours(cours, { chapitre, onVerifie, onSection, onFin, langue } = {}) {
  const id = uid("lecon");
  const lang = langue || LANGUES[matiereDe(chapitre)] || "fr-FR";
  const sections = Array.isArray(cours?.sections) ? cours.sections : [];
  const ctx = { onVerifie };
  const racine = h("article", { class: "cours-eclore", "aria-labelledby": chapitre?.titre ? `${id}-titre` : null, "aria-label": chapitre?.titre ? null : "Cours" });

  // En-tête : étiquette de spécimen, titre, accroche, objectifs.
  const entete = h("header", { class: "cours-entete" },
    h("p", { class: "cours-specimen" }, h("span", {}, "Cours"), chapitre?.theme ? h("span", {}, chapitre.theme) : null),
    chapitre?.titre ? h("h2", { class: "cours-titre", id: `${id}-titre` }, chapitre.titre) : null,
    cours?.accroche ? h("div", { class: "cours-accroche" },
      h("p", { class: "cours-accroche-note" }, "Pour commencer…"), paragraphes(cours.accroche)) : null,
    cours?.objectifs?.length ? h("div", { class: "cours-objectifs" },
      h("h3", { class: "cours-objectifs-titre" }, "À la fin, tu sauras…"),
      h("ul", {}, cours.objectifs.map((o) => ligne(o, "li")))) : null);
  racine.append(entete);

  // Plan (sommaire) + progression.
  const lues = new Set();
  const itemsPlan = [];
  const progressTexte = h("p", { class: "cours-progression" });
  const compteurCourt = h("span", { class: "cours-plan-compteur" });
  const listePlan = h("ol", { class: "cours-plan-liste" });
  const corpsPlan = h("div", { class: "cours-plan-corps", id: `${id}-plan` },
    h("p", { class: "cours-plan-titre", "aria-hidden": "true" }, "Plan du cours"), listePlan, progressTexte);
  const bascule = h("button", { type: "button", class: "cours-plan-bascule", "aria-expanded": "false", "aria-controls": `${id}-plan` },
    h("span", { class: "cours-plan-bascule-mot" }, "Plan du cours"), compteurCourt, icone.chevron());
  const plan = h("nav", { class: "cours-plan", "aria-label": "Plan du cours", "data-ouvert": "0" }, bascule, corpsPlan);
  const ouvrirPlan = (oui) => { plan.dataset.ouvert = oui ? "1" : "0"; bascule.setAttribute("aria-expanded", String(oui)); };
  bascule.addEventListener("click", () => ouvrirPlan(plan.dataset.ouvert !== "1"));
  plan.addEventListener("keydown", (e) => { if (e.key === "Escape" && plan.dataset.ouvert === "1") { ouvrirPlan(false); bascule.focus(); } });

  const majProgression = () => {
    const n = sections.length, k = lues.size;
    progressTexte.textContent = n ? `${k} partie${k > 1 ? "s" : ""} lue${k > 1 ? "s" : ""} sur ${n}` : "";
    compteurCourt.textContent = n ? `${k}/${n}` : "";
    compteurCourt.setAttribute("aria-label", progressTexte.textContent);
    listePlan.style.setProperty("--cours-avancee", n ? String(k / n) : "0");
  };

  // Sections.
  const corps = h("div", { class: "cours-corps" });
  const elsSection = [], titres = [], sentinelles = [];
  sections.forEach((s, i) => {
    const sid = `${id}-s${i + 1}`;
    const t = h("h3", { class: "cours-section-titre", id: `${sid}-t`, tabindex: "-1" }, h("span", { class: "cours-sr" }, `Partie ${i + 1} : `), ligne(s.titre || ""));
    const ecoute = boutonEcouter(() => [s.titre, ...(s.blocs || []).map(texteBloc)].filter(Boolean).join(". ").replace(/([.!?:;])\s*\.\s/g, "$1 "), lang, `partie ${i + 1}`);
    const fin = h("div", { class: "cours-section-fin", "aria-hidden": "true" }, icone.fleuron());
    const el = h("section", { class: "cours-section", id: sid, "aria-labelledby": `${sid}-t`, "data-index": i },
      h("header", { class: "cours-section-entete" }, h("span", { class: "cours-section-num", "aria-hidden": "true" }, i + 1), t, ecoute),
      (s.blocs || []).map((b) => rendreBloc(b, ctx)),
      fin);
    elsSection.push(el); titres.push(t); sentinelles.push(fin);
    corps.append(el);
    const li = h("li", {}, h("button", { type: "button", class: "cours-plan-lien", onclick: () => { allerA(i); if (matchMedia("(max-width: 63.99rem)").matches) ouvrirPlan(false); } },
      h("span", { class: "cours-plan-num", "aria-hidden": "true" }, i + 1),
      h("span", { class: "cours-plan-texte" }, brut(s.titre)),
      h("span", { class: "cours-sr cours-plan-etat" })));
    itemsPlan.push(li); listePlan.append(li);
  });

  // Bilan.
  const bilanId = `${id}-bilan`;
  const tBilan = h("h3", { class: "cours-bilan-titre", id: `${bilanId}-t`, tabindex: "-1" }, "En résumé");
  const bouton = h("button", { type: "button", class: "cours-bouton cours-bouton-principal", onclick: () => { arreterLecture(); onFin?.(); } }, "Je m'entraîne", icone.fleche());
  const retenir = Array.isArray(chapitre?.retenir) && chapitre.retenir.length ? chapitre.retenir : null;
  corps.append(h("section", { class: "cours-bilan", id: bilanId, "aria-labelledby": `${bilanId}-t` },
    tBilan,
    cours?.bilan ? ligne(cours.bilan, "p", "cours-bilan-phrase") : (!sections.length ? h("p", { class: "cours-bilan-phrase" }, "Le cours illustré de ce chapitre arrive bientôt.") : null),
    retenir ? h("div", { class: "cours-retenir" }, h("h4", {}, "L'essentiel à retenir"), h("ul", {}, retenir.map((r) => ligne(r, "li")))) : null,
    h("div", { class: "cours-bilan-action" }, bouton, h("p", { class: "cours-bilan-note", "aria-hidden": "true" }, "à toi de jouer !"))));
  listePlan.append(h("li", { class: "cours-plan-bilan" }, h("button", { type: "button", class: "cours-plan-lien", onclick: () => { allerA(sections.length); ouvrirPlan(false); } },
    h("span", { class: "cours-plan-num", "aria-hidden": "true" }, "✦"), h("span", { class: "cours-plan-texte" }, "En résumé"))));

  racine.append(h("div", { class: "cours-cadre" }, sections.length ? plan : null, corps));
  majProgression();

  function allerA(i) {
    const cible = i >= sections.length ? corps.querySelector(".cours-bilan") : elsSection[i];
    const titre = i >= sections.length ? tBilan : titres[i];
    if (!cible) return;
    cible.scrollIntoView({ behavior: mouvementReduit() ? "auto" : "smooth", block: "start" });
    titre.focus({ preventScroll: true });
  }
  function marquerLue(i) {
    if (lues.has(i)) return;
    lues.add(i);
    itemsPlan[i]?.classList.add("lu");
    const etat = itemsPlan[i]?.querySelector(".cours-plan-etat");
    if (etat) etat.textContent = " (lue)";
    majProgression();
    try { onSection?.(i); } catch (e) { console.warn("onSection :", e); }
  }
  function marquerActive(i) {
    itemsPlan.forEach((li, k) => {
      li.classList.toggle("actif", k === i);
      const btn = li.querySelector("button");
      if (k === i) btn.setAttribute("aria-current", "true"); else btn.removeAttribute("aria-current");
    });
  }

  const observateurs = [];
  if (typeof IntersectionObserver !== "undefined" && sections.length) {
    const obsLu = new IntersectionObserver((entrees) => {
      if (!racine.isConnected) return;
      for (const e of entrees) if (e.isIntersecting) { marquerLue(sentinelles.indexOf(e.target)); obsLu.unobserve(e.target); }
    }, { rootMargin: "0px 0px -6% 0px" });
    sentinelles.forEach((s) => obsLu.observe(s));
    const obsActif = new IntersectionObserver((entrees) => {
      for (const e of entrees) if (e.isIntersecting) marquerActive(elsSection.indexOf(e.target));
    }, { rootMargin: "-18% 0px -72% 0px" });
    elsSection.forEach((s) => obsActif.observe(s));
    observateurs.push(obsLu, obsActif);
  }

  racine.allerA = allerA;
  racine.detruire = () => { observateurs.forEach((o) => o.disconnect()); if (lecture && racine.contains(lecture.bouton)) arreterLecture(); };
  return racine;
}
