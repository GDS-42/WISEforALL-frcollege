// Registre des matières du collège (cycle 3 : 6e ; cycle 4 : 5e, 4e, 3e).
// Chaque matière a un pigment (voir docs/DESIGN.md) et une espèce de plante pour le jardin.
export const NIVEAUX = ["6e", "5e", "4e", "3e"];

export const MATIERES = {
  "francais":          { nom: "Français",            court: "Fr",   couleur: "#c4553d", plante: "rose",      emoji: "📖", cycles: ["6e","5e","4e","3e"] },
  "maths":             { nom: "Mathématiques",       court: "Math", couleur: "#3d5a99", plante: "cristal",   emoji: "📐", cycles: ["6e","5e","4e","3e"] },
  "histoire":          { nom: "Histoire",            court: "Hist", couleur: "#a35d32", plante: "chene",     emoji: "🏛️", cycles: ["6e","5e","4e","3e"] },
  "geographie":        { nom: "Géographie",          court: "Géo",  couleur: "#5f8a6e", plante: "fougere",   emoji: "🌍", cycles: ["6e","5e","4e","3e"] },
  "emc":               { nom: "Enseignement moral et civique", court: "EMC", couleur: "#7d4f73", plante: "olivier", emoji: "🕊️", cycles: ["6e","5e","4e","3e"] },
  "svt":               { nom: "Sciences de la vie et de la Terre", court: "SVT", couleur: "#5a8a3a", plante: "feuille", emoji: "🌱", cycles: ["6e","5e","4e","3e"] },
  "physique-chimie":   { nom: "Physique-Chimie",     court: "PC",   couleur: "#b86f32", plante: "lanterne",  emoji: "⚗️", cycles: ["6e","5e","4e","3e"] },
  "technologie":       { nom: "Technologie",         court: "Techno", couleur: "#56707e", plante: "engrenage", emoji: "⚙️", cycles: ["6e","5e","4e","3e"] },
  "anglais":           { nom: "Anglais",             court: "Angl", couleur: "#a83e48", plante: "bruyere",   emoji: "🇬🇧", cycles: ["6e","5e","4e","3e"] },
  "espagnol":          { nom: "Espagnol (LV2)",      court: "Esp",  couleur: "#cc8a24", plante: "cactus",    emoji: "🇪🇸", cycles: ["5e","4e","3e"], lv2: true, langue: "es-ES" },
  "allemand":          { nom: "Allemand (LV2)",      court: "All",  couleur: "#6f7a2e", plante: "edelweiss", emoji: "🇩🇪", cycles: ["5e","4e","3e"], lv2: true, langue: "de-DE" },
  "arabe":             { nom: "Arabe (LV2)",         court: "Ar",   couleur: "#1e7f74", plante: "jasmin",    emoji: "🌙", cycles: ["5e","4e","3e"], lv2: true, langue: "ar" },
  "chinois":           { nom: "Chinois (LV2)",       court: "Chin", couleur: "#b8433a", plante: "lotus",     emoji: "🏮", cycles: ["5e","4e","3e"], lv2: true, langue: "zh-CN" },
  "arts-plastiques":   { nom: "Arts plastiques",     court: "Arts", couleur: "#b04a82", plante: "iris",      emoji: "🎨", cycles: ["6e","5e","4e","3e"] },
  "education-musicale":{ nom: "Éducation musicale",  court: "Mus",  couleur: "#2c7b80", plante: "campanule", emoji: "🎵", cycles: ["6e","5e","4e","3e"] },
  "eps":               { nom: "Éducation physique et sportive", court: "EPS", couleur: "#d06a2c", plante: "tournesol", emoji: "🏃", cycles: ["6e","5e","4e","3e"] },
};

// Deuxièmes langues vivantes : une seule est suivie par profil (profil.lv2).
export const LV2 = Object.keys(MATIERES).filter(id => MATIERES[id].lv2);

// Les cinq domaines du socle commun de connaissances, de compétences et de culture.
export const SOCLE = {
  1: "Les langages pour penser et communiquer",
  2: "Les méthodes et outils pour apprendre",
  3: "La formation de la personne et du citoyen",
  4: "Les systèmes naturels et les systèmes techniques",
  5: "Les représentations du monde et l'activité humaine",
};

export const TYPES_ITEMS = ["qcm", "vf", "trous", "ordre", "assoc", "num", "texte", "flash"];
