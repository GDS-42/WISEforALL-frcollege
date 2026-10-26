// ÉCLORE — Utilitaires DOM minimalistes (pas de framework : tout reste lisible et sans dépendance).

export function h(tag, attrs = {}, ...enfants) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === null || v === undefined || v === false) continue;
    if (k === "class") el.className = v;
    else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === "html") el.innerHTML = v;
    else if (k === "dataset") Object.assign(el.dataset, v);
    else if (v === true) el.setAttribute(k, "");
    else el.setAttribute(k, v);
  }
  ajouter(el, enfants);
  return el;
}

function ajouter(el, enfants) {
  for (const e of enfants.flat(Infinity)) {
    if (e === null || e === undefined || e === false) continue;
    el.append(e instanceof Node ? e : document.createTextNode(String(e)));
  }
}

export function vider(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }

export function echapper(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/** Mise en forme légère : **gras**, *italique*, sauts de ligne. Le texte est échappé d'abord. */
export function md(texte) {
  let t = echapper(texte);
  t = t.replace(/==(.+?)==/g, "<mark>$1</mark>");
  t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/(^|[^*])\*([^*\n]+?)\*/g, "$1<em>$2</em>");
  t = t.replace(/\n\n+/g, "</p><p>").replace(/\n/g, "<br>");
  return t;
}

export function mdEl(texte, tag = "span", cls = "") {
  const html = md(texte);
  // Plusieurs paragraphes : on enveloppe dans des <p>.
  if (html.includes("</p><p>")) return h("div", { class: `md ${cls}`.trim(), html: `<p>${html}</p>` });
  return h(tag, { class: `md ${cls}`.trim(), html });
}

export function svg(tag, attrs = {}, ...enfants) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) if (v !== null && v !== undefined && v !== false) el.setAttribute(k, v);
  ajouter(el, enfants);
  return el;
}

export function toast(message, { icone = "✨", duree = 3200, classe = "" } = {}) {
  const zone = document.getElementById("toasts");
  if (!zone) return;
  const t = h("div", { class: `toast ${classe}`.trim(), role: "status" }, h("span", { class: "ico", "aria-hidden": "true" }, icone), h("div", {}, message));
  zone.append(t);
  setTimeout(() => { t.style.transition = "opacity 400ms"; t.style.opacity = "0"; setTimeout(() => t.remove(), 420); }, duree);
}

export function pluriel(n, sing, plur = sing + "s") { return `${n} ${n > 1 ? plur : sing}`; }

export function duree(ms) {
  const m = Math.round(ms / 60000);
  if (m < 1) return "moins d'une minute";
  if (m < 60) return `${m} min`;
  const hh = Math.floor(m / 60), mm = m % 60;
  return `${hh} h${mm ? " " + String(mm).padStart(2, "0") : ""}`;
}

export function dateCourte(ts) {
  return new Date(ts).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

export function lettre(i) { return "ABCDEFGH"[i] || String(i + 1); }
