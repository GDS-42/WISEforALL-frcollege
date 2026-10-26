#!/usr/bin/env node
// Génère les fonds de carte d'ÉCLORE dans assets/cartes/ (TopoJSON quantifié, coordonnées lon/lat).
//
//   cd tools/cartes && npm install && npm run build
//
// Sources (domaine public, voir docs/CREDITS.md) : Natural Earth v5.1.2, couches admin-0 1:110m et
// 1:50m (pays) et admin-1 1:10m (régions françaises). Les fichiers GeoJSON sont téléchargés une fois
// depuis le dépôt officiel nvkelso/natural-earth-vector (étiquette v5.1.2), vérifiés par empreinte
// SHA-256 et mis en cache dans node_modules/.cache (ignoré par git). Ces couches sont découpées le
// long de l'antiméridien, ce qui permet un rendu plan sans traitement sphérique.
// Outils (dépendances de build, ISC) : topojson-server, topojson-simplify, topojson-client.
//
// Sorties :
//   assets/cartes/monde.json         vue du monde entier (110m), objets « pays » (iso, nom)
//   assets/cartes/monde-detail.json  vues zoomées (50m simplifié), objets « pays »
//   assets/cartes/france.json        13 régions métropolitaines (id, nom) + pays voisins (iso, nom)

import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as topojsonClient from "topojson-client";
import * as topojsonServer from "topojson-server";
import * as topojsonSimplify from "topojson-simplify";

const ici = dirname(fileURLToPath(import.meta.url));
const sortie = join(ici, "..", "..", "assets", "cartes");
const cache = join(ici, "node_modules", ".cache");

const NE = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.2/geojson/";
const SOURCES = {
  admin0_110m: { fichier: "ne_110m_admin_0_countries.geojson", sha256: "6866c877d39cba9c357620878839b336d569f8c662d3cfab4cb1dbe2d39c977f" },
  admin0_50m: { fichier: "ne_50m_admin_0_countries.geojson", sha256: "3e458fc036ad0a66411f2c1e6cac49c5d7bfb81cb1123bc513b22511a2b7fdeb" },
  admin1_10m: { fichier: "ne_10m_admin_1_states_provinces.geojson", sha256: "22d0e3ad85eb3e27f17cabf8ba2d50e554fbc27a87796ff891d958185da62fb5" },
};

const REGIONS = {
  "FR-IDF": ["ile-de-france", "Île-de-France"],
  "FR-CVL": ["centre-val-de-loire", "Centre-Val de Loire"],
  "FR-BFC": ["bourgogne-franche-comte", "Bourgogne-Franche-Comté"],
  "FR-NOR": ["normandie", "Normandie"],
  "FR-HDF": ["hauts-de-france", "Hauts-de-France"],
  "FR-GES": ["grand-est", "Grand Est"],
  "FR-PDL": ["pays-de-la-loire", "Pays de la Loire"],
  "FR-BRE": ["bretagne", "Bretagne"],
  "FR-NAQ": ["nouvelle-aquitaine", "Nouvelle-Aquitaine"],
  "FR-OCC": ["occitanie", "Occitanie"],
  "FR-ARA": ["auvergne-rhone-alpes", "Auvergne-Rhône-Alpes"],
  "FR-PAC": ["provence-alpes-cote-d-azur", "Provence-Alpes-Côte d'Azur"],
  "FR-COR": ["corse", "Corse"],
};
// Voisins dessinés autour de la France (sous-ensemble de provinces proches, fusionnées par pays).
const VOISINS = ["ESP", "AND", "ITA", "SMR", "VAT", "MCO", "CHE", "LIE", "AUT", "DEU", "LUX", "BEL", "NLD", "GBR", "GGY", "JEY", "IMN", "IRL", "DNK", "CZE", "SVN", "HRV", "PRT"];
const BOITE_VOISINS = [-11, 35.5, 19.5, 57.5]; // lonMin, latMin, lonMax, latMax

function iso2(p) {
  const v = p.ISO_A2_EH && p.ISO_A2_EH !== "-99" ? p.ISO_A2_EH : p.ISO_A2 !== "-99" ? p.ISO_A2 : null;
  return v || null;
}
// Noms usuels quand le nom Natural Earth est le nom officiel long.
const NOMS_USUELS = { CN: "Chine" };
const majuscule = (s) => s.charAt(0).toLocaleUpperCase("fr-FR") + s.slice(1);
function proprietes(p) {
  const iso = iso2(p);
  const nom = NOMS_USUELS[iso] || majuscule(p.NAME_FR || p.NAME);
  return iso ? { iso, nom } : { nom };
}

function arrondir(topo) {
  // Supprime bbox (recalculable) et garde des propriétés minimales.
  delete topo.bbox;
  return topo;
}

function preparer(objets, { quantification, poidsMin, garderAnneaux = 0 }) {
  let topo = topojsonServer.topology(objets);
  if (poidsMin > 0) {
    topo = topojsonSimplify.presimplify(topo);
    topo = topojsonSimplify.simplify(topo, poidsMin);
    if (garderAnneaux > 0) topo = topojsonSimplify.filter(topo, topojsonSimplify.filterWeight(topo, garderAnneaux));
  }
  topo = topojsonClient.quantize(topo, quantification);
  return arrondir(topo);
}

async function monde(source, options) {
  const ne = await telecharger(SOURCES[source]);
  const features = ne.features.filter((f) => f.geometry).map((f) => ({ type: "Feature", properties: proprietes(f.properties), geometry: f.geometry }));
  return preparer({ pays: { type: "FeatureCollection", features } }, options);
}

async function telecharger({ fichier, sha256 }) {
  const url = NE + fichier;
  await mkdir(cache, { recursive: true });
  const chemin = join(cache, "v5.1.2-" + fichier);
  if (!(await stat(chemin).catch(() => null))) {
    console.log("Téléchargement de", url);
    const r = await fetch(url);
    if (!r.ok) throw new Error(`HTTP ${r.status} pour ${url}`);
    await writeFile(chemin, Buffer.from(await r.arrayBuffer()));
  }
  const brut = await readFile(chemin);
  const empreinte = createHash("sha256").update(brut).digest("hex");
  if (empreinte !== sha256) throw new Error(`Empreinte inattendue pour ${fichier} : ${empreinte}`);
  return JSON.parse(brut.toString("utf8"));
}

function bboxIntersecte(geom, [x0, y0, x1, y1]) {
  let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity;
  const parcourir = (co) => { if (typeof co[0] === "number") { a = Math.min(a, co[0]); c = Math.max(c, co[0]); b = Math.min(b, co[1]); d = Math.max(d, co[1]); } else co.forEach(parcourir); };
  parcourir(geom.coordinates);
  return a <= x1 && c >= x0 && b <= y1 && d >= y0;
}

async function france() {
  const ne = await telecharger(SOURCES.admin1_10m);
  const pays = await telecharger(SOURCES.admin0_50m);
  const nomsFr = new Map(pays.features.map((f) => [f.properties.ADM0_A3, f.properties.NAME_FR]));
  const garder = ne.features.filter((f) => {
    const p = f.properties;
    if (p.adm0_a3 === "FRA") return p.type_en === "Metropolitan department";
    return VOISINS.includes(p.adm0_a3) && bboxIntersecte(f.geometry, BOITE_VOISINS);
  });
  const deps = { type: "FeatureCollection", features: garder.map((f) => ({ type: "Feature", properties: { cle: f.properties.adm0_a3 === "FRA" ? f.properties.region_cod.trim() : f.properties.adm0_a3, a2: f.properties.iso_a2, nom: majuscule(nomsFr.get(f.properties.adm0_a3) || f.properties.admin) }, geometry: f.geometry })) };
  const topo = topojsonServer.topology({ d: deps });
  const groupes = new Map();
  for (const g of topo.objects.d.geometries) {
    const k = g.properties.cle;
    if (!groupes.has(k)) groupes.set(k, []);
    groupes.get(k).push(g);
  }
  const regions = [], voisins = [];
  for (const [cle, geoms] of groupes) {
    const geometry = topojsonClient.merge(topo, geoms);
    if (REGIONS[cle]) {
      const [id, nom] = REGIONS[cle];
      regions.push({ type: "Feature", properties: { id, nom }, geometry });
    } else {
      voisins.push({ type: "Feature", properties: { iso: geoms[0].properties.a2, nom: geoms[0].properties.nom }, geometry });
    }
  }
  const manquantes = Object.values(REGIONS).map((r) => r[0]).filter((id) => !regions.some((f) => f.properties.id === id));
  if (manquantes.length) throw new Error("Régions manquantes : " + manquantes.join(", "));
  regions.sort((a, b) => a.properties.id.localeCompare(b.properties.id));
  return preparer({ regions: { type: "FeatureCollection", features: regions }, voisins: { type: "FeatureCollection", features: voisins } }, { quantification: 1e4, poidsMin: 4e-5, garderAnneaux: 2e-4 });
}

async function ecrire(nom, topo) {
  const texte = JSON.stringify(topo);
  await writeFile(join(sortie, nom), texte);
  console.log(nom.padEnd(18), (texte.length / 1024).toFixed(1).padStart(7), "Ko");
  return texte.length;
}

await mkdir(sortie, { recursive: true });
let total = 0;
total += await ecrire("monde.json", await monde("admin0_110m", { quantification: 1e4, poidsMin: 0 }));
total += await ecrire("monde-detail.json", await monde("admin0_50m", { quantification: 2e4, poidsMin: 8e-4, garderAnneaux: 2e-3 }));
total += await ecrire("france.json", await france());
console.log("Total".padEnd(18), (total / 1024).toFixed(1).padStart(7), "Ko");
