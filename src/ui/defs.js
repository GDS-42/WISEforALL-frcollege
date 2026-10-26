// ÉCLORE — Définitions SVG globales (charte « Herbier »), injectées une seule fois dans la page.
// Contrat : marqueurs #fl (pointe d'encre) et #fl-p (pointe pigment) ; filtres #aquarelle, #tremble, #grain.
// Extras : #aquarelle-large (grands lavis de paysage), #halo (lueur peinte de luciole).
// Les filtres ne travaillent que sur SourceGraphic : aucune couleur n'est fixée ici, tout vient des jetons
// de l'élément dessiné (thèmes jour et nuit, plusieurs thèmes dans une même page).

const NS = "http://www.w3.org/2000/svg";

const DEFS = `
<style>
  /* Sur papier nuit, un lavis translucide s'assombrit : on charge davantage le pinceau. */
  [data-theme="nuit"] { --lavis-k: 1.5; --reflet: color-mix(in srgb, var(--encre, #eee4cf) 55%, transparent); }
</style>
<defs>
  <marker id="fl" viewBox="0 0 10 10" refX="8.2" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
    <path d="M1.2 1.4 Q 5 3.6 8.6 5 Q 5 6.4 1.2 8.6" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
      style="stroke:var(--encre,#3b2a1e);stroke:context-stroke"/>
  </marker>
  <marker id="fl-p" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
    <path d="M0.8 1.2 Q 4.6 3.4 9.2 5 Q 4.6 6.6 0.8 8.8 Q 2.6 5 0.8 1.2 Z" stroke="none"
      style="fill:var(--pigment,#c4553d);fill:context-stroke"/>
  </marker>

  <filter id="aquarelle" x="-25%" y="-25%" width="150%" height="150%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="11" result="bruit"/>
    <feDisplacementMap in="SourceGraphic" in2="bruit" scale="3.6" xChannelSelector="R" yChannelSelector="G" result="deborde"/>
    <feGaussianBlur in="deborde" stdDeviation="0.45" result="lavis"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="4" result="pores"/>
    <feColorMatrix in="pores" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.55 0 0 0 0.62" result="granulation"/>
    <feComposite in="lavis" in2="granulation" operator="in" result="grenu"/>
    <feColorMatrix in="lavis" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 14 0" result="forme"/>
    <feGaussianBlur in="forme" stdDeviation="1.3" result="formeFloue"/>
    <feComposite in="forme" in2="formeFloue" operator="out" result="liseré"/>
    <feComposite in="lavis" in2="liseré" operator="in" result="bord"/>
    <feMerge><feMergeNode in="grenu"/><feMergeNode in="bord"/><feMergeNode in="bord"/></feMerge>
  </filter>

  <filter id="aquarelle-large" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="4" seed="5" result="bruit"/>
    <feDisplacementMap in="SourceGraphic" in2="bruit" scale="14" xChannelSelector="R" yChannelSelector="G" result="deborde"/>
    <feGaussianBlur in="deborde" stdDeviation="1.2" result="lavis"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" seed="9" result="pores"/>
    <feColorMatrix in="pores" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.5 0 0 0 0.66" result="granulation"/>
    <feComposite in="lavis" in2="granulation" operator="in" result="grenu"/>
    <feColorMatrix in="lavis" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 14 0" result="forme"/>
    <feGaussianBlur in="forme" stdDeviation="4" result="formeFloue"/>
    <feComposite in="forme" in2="formeFloue" operator="out" result="liseré"/>
    <feComposite in="lavis" in2="liseré" operator="in" result="bord"/>
    <feMerge><feMergeNode in="grenu"/><feMergeNode in="bord"/></feMerge>
  </filter>

  <filter id="tremble" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="2" seed="3" result="bruit"/>
    <feDisplacementMap in="SourceGraphic" in2="bruit" scale="1.6" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <filter id="grain" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" result="bruit"/>
    <feColorMatrix in="bruit" type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0 1" result="gris"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="8" result="fibres"/>
    <feColorMatrix in="fibres" type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0 1" result="nuages"/>
    <feComposite in="SourceGraphic" in2="gris" operator="arithmetic" k1="0.16" k2="0.9" k3="0" k4="0" result="grenu"/>
    <feComposite in="grenu" in2="nuages" operator="arithmetic" k1="0.12" k2="0.95" k3="0" k4="0" result="papier"/>
    <feComposite in="papier" in2="SourceAlpha" operator="in"/>
  </filter>

  <filter id="halo" x="-100%" y="-100%" width="300%" height="300%" color-interpolation-filters="sRGB">
    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="flou"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" seed="2" result="bruit"/>
    <feDisplacementMap in="flou" in2="bruit" scale="5" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</defs>`;

/** Insère une seule fois <svg id="defs-eclore"> dans document.body. Renvoie l'élément. */
export function injecterDefs() {
  if (typeof document === "undefined") return null;
  const deja = document.getElementById("defs-eclore");
  if (deja) return deja;
  const s = document.createElementNS(NS, "svg");
  s.setAttribute("id", "defs-eclore");
  s.setAttribute("aria-hidden", "true");
  s.setAttribute("focusable", "false");
  s.setAttribute("style", "position:absolute;width:0;height:0;overflow:hidden");
  s.innerHTML = DEFS;
  (document.body || document.documentElement).prepend(s);
  return s;
}
