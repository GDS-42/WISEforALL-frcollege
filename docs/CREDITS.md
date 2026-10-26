# Crédits

## Cartes

Les fonds de carte d'ÉCLORE (`assets/cartes/monde.json`, `assets/cartes/monde-detail.json`,
`assets/cartes/france.json`) sont dérivés de **Natural Earth** — données cartographiques libres
réalisées avec le soutien de la NACIS (<https://www.naturalearthdata.com>).

| Fichier | Couche Natural Earth (v5.1.2) | Contenu |
|---|---|---|
| `monde.json` | Admin 0 – Countries, 1:110m | pays du monde (vue entière) |
| `monde-detail.json` | Admin 0 – Countries, 1:50m, simplifié | pays du monde (vues zoomées) |
| `france.json` | Admin 1 – States, Provinces, 1:10m, simplifié | 13 régions de France métropolitaine (départements fusionnés par région) et pays voisins |

- **Licence** : domaine public. « Natural Earth vector and raster map data are in the public
  domain » (<https://www.naturalearthdata.com/about/terms-of-use/>). Aucune attribution n'est
  exigée ; nous la donnons volontiers : *Made with Natural Earth. Free vector and raster map data
  @ naturalearthdata.com.*
- **Provenance** : dépôt officiel `nvkelso/natural-earth-vector`, étiquette `v5.1.2`, fichiers
  GeoJSON vérifiés par empreinte SHA-256 dans `tools/cartes/build.mjs`.
- **Traitement** : conversion en TopoJSON, simplification (Visvalingam) et quantification par
  `tools/cartes/build.mjs` (`cd tools/cartes && npm install && npm run build`), avec les outils de
  build `topojson-server`, `topojson-simplify` et `topojson-client` (Mike Bostock, licence ISC).
  Aucune de ces bibliothèques n'est chargée par l'application : le décodage et les projections
  (Equal Earth, équirectangulaire) sont écrits à la main dans `src/ui/carte.js`.
- **Projection Equal Earth** : Bojan Šavrič, Tom Patterson, Bernhard Jenny (2018), « The Equal
  Earth map projection », *International Journal of Geographical Information Science*. Formules
  libres d'usage.
- **Frontières** : celles de Natural Earth, qui représente les frontières *de facto*. Elles ne
  préjugent d'aucune position sur le statut des territoires.
