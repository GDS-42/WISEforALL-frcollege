#!/usr/bin/env node
// Serveur statique minimal (aucune dépendance). Usage : node tools/serve.mjs [port]
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize, resolve } from "node:path";
const root = resolve(new URL("..", import.meta.url).pathname);
const port = Number(process.argv[2] || process.env.PORT || 8080);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".webmanifest": "application/manifest+json", ".md": "text/markdown; charset=utf-8", ".ico": "image/x-icon" };
createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    const f = join(root, normalize(p).replace(/^(\.\.[/\\])+/, ""));
    if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
    const s = await stat(f).catch(() => null);
    if (!s || !s.isFile()) { res.writeHead(404); return res.end("Introuvable"); }
    res.writeHead(200, { "Content-Type": types[extname(f)] || "application/octet-stream", "Cache-Control": "no-cache" });
    res.end(await readFile(f));
  } catch (e) { res.writeHead(500); res.end(String(e)); }
}).listen(port, () => console.log(`ÉCLORE : http://localhost:${port}`));
