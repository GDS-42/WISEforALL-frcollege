// ÉCLORE — Fichier de sauvegarde : lecture, écriture et résumé d'un carnet (sans DOM, testable sous Node).
// Le fichier JSON protège d'un effacement des données du navigateur et permet d'emporter sa progression.
import { VERSION_ETAT } from "./store.js";
import { NIVEAUX } from "../content/matieres.js";
import { niveauDepuisXp } from "./gamification.js";

export const FORMAT = 2;

/** Texte JSON d'une sauvegarde contenant un ou plusieurs carnets. */
export function construireFichier(etats, maintenant = Date.now()) {
  const liste = Array.isArray(etats) ? etats : [etats];
  return JSON.stringify({ application: "ECLORE", format: FORMAT, version: VERSION_ETAT, exporte: new Date(maintenant).toISOString(), profils: liste }, null, 2);
}

/** Nom de fichier lisible : eclore-lea-2026-10-26.json (ou eclore-carnets-… pour plusieurs profils). */
export function nomFichier(etats, date = new Date()) {
  const liste = Array.isArray(etats) ? etats : [etats];
  const jour = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const qui = liste.length === 1 ? liste[0].profil.prenom : "carnets";
  const slug = qui.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "carnet";
  return `eclore-${slug}-${jour}.json`;
}

function erreur(message) { const e = new Error(message); e.sauvegarde = true; return e; }

function verifierEtat(e, i) {
  const ou = i === null ? "" : ` (carnet n° ${i + 1})`;
  if (!e || typeof e !== "object" || Array.isArray(e)) throw erreur(`Le fichier ne contient pas de carnet lisible${ou}.`);
  const p = e.profil;
  if (!p || typeof p.id !== "string" || !p.id || typeof p.prenom !== "string" || !p.prenom.trim()) throw erreur(`Le carnet n'a pas de profil valide${ou}.`);
  if (!NIVEAUX.includes(p.niveau)) throw erreur(`La classe « ${String(p.niveau)} » est inconnue${ou}.`);
  if (!e.items || typeof e.items !== "object" || Array.isArray(e.items)) throw erreur(`Le carnet de ${p.prenom} est incomplet (progression absente).`);
  if (Number(e.version) > VERSION_ETAT) throw erreur("Ce fichier vient d'une version plus récente d'ÉCLORE : recharge la page pour mettre l'application à jour, puis réessaie.");
  p.prenom = p.prenom.trim().slice(0, 40);
  return e;
}

/**
 * Lit une sauvegarde. Accepte le format actuel ({ profils: [...] }), l'ancien ({ etat }) et un état nu.
 * @returns {{ exporte: number|null, profils: object[] }}
 */
export function lireFichier(texte) {
  let data;
  try { data = JSON.parse(String(texte ?? "").replace(/^﻿/, "")); }
  catch { throw erreur("Ce fichier n'est pas une sauvegarde ÉCLORE (JSON illisible)."); }
  if (!data || typeof data !== "object") throw erreur("Ce fichier n'est pas une sauvegarde ÉCLORE.");
  if (data.application !== undefined && data.application !== "ECLORE") throw erreur("Ce fichier vient d'une autre application.");
  const exporte = data.exporte ? Date.parse(data.exporte) || null : null;
  let profils;
  if (Array.isArray(data.profils)) profils = data.profils;
  else if (data.etat) profils = [data.etat];
  else if (data.profil) profils = [data];
  else throw erreur("Ce fichier n'est pas une sauvegarde ÉCLORE.");
  if (!profils.length) throw erreur("Cette sauvegarde ne contient aucun carnet.");
  if (Number(data.version) > VERSION_ETAT) throw erreur("Ce fichier vient d'une version plus récente d'ÉCLORE : recharge la page pour mettre l'application à jour, puis réessaie.");
  const vus = new Set();
  profils = profils.map((e, i) => verifierEtat(e, profils.length > 1 ? i : null)).filter(e => !vus.has(e.profil.id) && vus.add(e.profil.id));
  return { exporte, profils };
}

/** Ce qu'il faut savoir d'un carnet pour décider lequel garder. */
export function resumeEtat(e) {
  const items = Object.values(e.items || {});
  let derniere = 0;
  for (const s of e.journal || []) if (Number.isFinite(s?.t)) derniere = Math.max(derniere, s.t);
  for (const it of items) if (Number.isFinite(it?.last)) derniere = Math.max(derniere, it.last);
  return {
    prenom: e.profil.prenom,
    niveau: e.profil.niveau,
    notions: items.filter(it => (it?.reps || 0) > 0 || (it?.n || 0) > 0).length,
    seances: (e.journal || []).length,
    derniereActivite: derniere || null,
    niveauJeu: niveauDepuisXp(e.gamif?.xp || 0).niveau,
    lumens: Number(e.lumens) || 0,
  };
}

/** Faut-il rappeler de sauvegarder ? (de l'activité depuis la dernière sauvegarde, et plus de `jours` jours écoulés) */
export function sauvegardeConseillee(e, maintenant = Date.now(), jours = 7) {
  const r = resumeEtat(e);
  if (!r.seances || !r.derniereActivite) return false;
  const derniere = e.sauvegarde?.derniere || 0;
  if (r.derniereActivite <= derniere) return false;
  const depuis = derniere || e.profil.cree || r.derniereActivite;
  return maintenant - depuis >= jours * 86400000;
}
