# ÉCLORE — charte graphique « Herbier »

## Intention

Fini le tableau de bord sombre à dégradés. ÉCLORE est un **carnet de naturaliste** : du papier
chaud, de l'encre, des lavis d'aquarelle, des étiquettes de spécimens, des annotations à la main.
Chaque matière est un pigment ; chaque chapitre une plante que l'on dessine peu à peu.
Le geste graphique doit sembler *fait main* sans être enfantin : précis, chaleureux, lisible.

Principes :
1. **Le papier d'abord.** Fond crème texturé, encre brun-noir, jamais de noir pur ni de blanc pur.
2. **L'encre structure.** Bordures à l'encre (1.5 px), ombres « tampon » décalées et nettes
   (pas de flou, pas de glassmorphism, pas de lueurs néon).
3. **Le pigment signifie.** La couleur d'une matière n'est utilisée que pour ce qui lui appartient.
4. **La main annote.** L'écriture manuscrite (Caveat) sert aux notes de marge, à la voix de Lume,
   aux étiquettes ; jamais au texte courant.
5. **Le mouvement récompense.** Animations courtes, physiques (pousse, rebond, tampon), toujours
   désactivables. Aucune animation décorative en boucle hors du jardin.

## Jetons (variables CSS, définies dans `src/styles/base.css`)

| Jeton | Rôle |
|---|---|
| `--papier`, `--papier-2`, `--papier-3` | fond, panneau, creux |
| `--encre`, `--encre-2`, `--encre-3` | texte principal, secondaire, discret |
| `--trait`, `--trait-fort` | filets, bordures |
| `--pigment` | couleur de la matière courante (posée sur un conteneur via `style="--pigment:#…"`) |
| `--pigment-lavis` | lavis clair du pigment (fonds) |
| `--pigment-texte` | pigment assez sombre (jour) ou clair (nuit) pour du texte |
| `--ok`, `--ko`, `--attention`, `--or` | réussite, erreur, mise en garde, récompense |
| `--f-titre` | Young Serif — titres |
| `--f-texte` | Lexend — texte courant et interface |
| `--f-main` | Caveat — annotations manuscrites |
| `--r`, `--r-l` | rayons 6 px et 14 px |
| `--ombre-tampon` | `3px 3px 0 var(--encre)` : ombre nette des éléments « posés » |
| `--ombre-douce` | ombre de papier très légère |
| `--s1` … `--s6` | espacements 4, 8, 12, 16, 24, 40 px |

Le thème nuit (`[data-theme="nuit"]`) redéfinit ces jetons : papier d'encre bleu nuit,
encre crème ; les composants n'ont donc jamais de couleur codée en dur.

## Palette des matières (pigments)

Français vermillon `#c4553d` · Maths indigo `#3d5a99` · Histoire terre de Sienne `#a35d32` ·
Géographie vert sauge `#5f8a6e` · EMC prune `#7d4f73` · SVT vert mousse `#5a8a3a` ·
Physique-chimie cuivre `#b86f32` · Technologie ardoise `#56707e` · Anglais garance `#a83e48` ·
Espagnol safran `#cc8a24` · Arts plastiques fuchsia `#b04a82` · Musique bleu canard `#2c7b80` ·
EPS orange brûlé `#d06a2c`.

## Dans les SVG

Les SVG inline héritent des variables CSS : utiliser `var(--encre)`, `var(--pigment)`,
`var(--pigment-lavis)`, `var(--papier)` plutôt que des couleurs fixes. Des définitions globales
sont injectées une fois dans la page (`#defs-eclore`) :
- marqueurs de flèche : `url(#fl)` (pointe d'encre), `url(#fl-p)` (pointe pigment) ;
- filtres : `url(#aquarelle)` (bord de lavis irrégulier), `url(#tremble)` (trait légèrement
  tremblé), `url(#grain)` (grain de papier).

Classes utilisables dans les schémas de cours (voir `docs/COURS.md`) :
`.trait`, `.trait-fin`, `.pointille`, `.aplat`, `.aplat-fort`, `.aplat-papier`, `.texte`,
`.texte-petit`, `.texte-main`, `.texte-pigment`.

## Accessibilité

Contraste AA minimum (texte courant ≥ 4,5:1 sur `--papier`) dans les deux thèmes. Cibles ≥ 44 px.
Focus visible : soulignement d'encre épais + contour pigment. Police Lexend par défaut (conçue pour
la fluidité de lecture) ; mode « lecture facilitée » : Atkinson Hyperlegible, interlignage 1,9.
Toute information portée par la couleur l'est aussi par un texte ou une icône.
