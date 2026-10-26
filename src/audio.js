// ÉCLORE — Sons générés (WebAudio) : pas de fichiers, des carillons doux. Toujours désactivables.
let ctx = null;
let actif = true;
export function activerSon(v) { actif = !!v; }

function contexte() {
  if (!actif) return null;
  try {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  } catch { return null; }
}

function note(freq, debut, duree, gain = 0.08, type = "sine") {
  const c = contexte(); if (!c) return;
  const o = c.createOscillator(), g = c.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(0, c.currentTime + debut);
  g.gain.linearRampToValueAtTime(gain, c.currentTime + debut + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + debut + duree);
  o.connect(g).connect(c.destination);
  o.start(c.currentTime + debut); o.stop(c.currentTime + debut + duree + 0.05);
}

export const sons = {
  juste() { note(523.25, 0, 0.35, 0.06); note(659.25, 0.08, 0.4, 0.06); note(783.99, 0.16, 0.6, 0.05); },
  faux() { note(220, 0, 0.35, 0.05, "triangle"); note(196, 0.12, 0.5, 0.04, "triangle"); },
  clic() { note(880, 0, 0.08, 0.02); },
  pousse() { [392, 493.88, 587.33, 783.99].forEach((f, i) => note(f, i * 0.09, 0.5, 0.05)); },
  fin() { [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => note(f, i * 0.12, 0.9, 0.05)); note(1318.5, 0.5, 1.4, 0.03); },
  succes() { [659.25, 783.99, 987.77, 1318.5].forEach((f, i) => note(f, i * 0.1, 0.8, 0.05)); },
};
