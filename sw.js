// ÉCLORE — service worker : l'application fonctionne hors ligne une fois visitée.
const VERSION = "eclore-v3";
const COQUILLE = ["./", "./index.html", "./manifest.json", "./src/styles/fonts.css", "./src/styles/base.css", "./src/styles/ecrans.css", "./src/styles/session.css", "./src/styles/cours.css", "./src/styles/carte.css", "./src/main.js", "./assets/icone.svg"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(COQUILLE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.origin !== location.origin) {
    // Polices : cache après premier usage.
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const copie = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copie)); return res; }).catch(() => r)));
    return;
  }
  // Réseau d'abord (pour recevoir les mises à jour), cache en secours.
  e.respondWith(fetch(e.request).then(res => { const copie = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copie)); return res; }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
