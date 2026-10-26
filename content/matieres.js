// Registre des matières du collège (cycle 3 : 6e ; cycle 4 : 5e, 4e, 3e).
// Chaque matière a une couleur « bioluminescente » et une plante emblème pour le jardin.
export const NIVEAUX = ["6e", "5e", "4e", "3e"];

export const MATIERES = {
  "francais":          { nom: "Français",            court: "Fr",   couleur: "#ffb3c7", plante: "rose",      emoji: "📖", cycles: ["6e","5e","4e","3e"] },
  "maths":             { nom: "Mathématiques",       court: "Math", couleur: "#8fd3ff", plante: "cristal",   emoji: "📐", cycles: ["6e","5e","4e","3e"] },
  "histoire":          { nom: "Histoire",            court: "Hist", couleur: "#f4d58d", plante: "chene",     emoji: "🏛️", cycles: ["6e","5e","4e","3e"] },
  "geographie":        { nom: "Géographie",          court: "Géo",  couleur: "#9be7a8", plante: "fougere",   emoji: "🌍", cycles: ["6e","5e","4e","3e"] },
  "emc":               { nom: "Enseignement moral et civique", court: "EMC", couleur: "#c9b8ff", plante: "olivier", emoji: "🕊️", cycles: ["6e","5e","4e","3e"] },
  "svt":               { nom: "Sciences de la vie et de la Terre", court: "SVT", couleur: "#7ef0c2", plante: "feuille", emoji: "🌱", cycles: ["6e","5e","4e","3e"] },
  "physique-chimie":   { nom: "Physique-Chimie",     court: "PC",   couleur: "#ffd27f", plante: "lanterne",  emoji: "⚗️", cycles: ["6e","5e","4e","3e"] },
  "technologie":       { nom: "Technologie",         court: "Techno", couleur: "#b8c4d6", plante: "engrenage", emoji: "⚙️", cycles: ["6e","5e","4e","3e"] },
  "anglais":           { nom: "Anglais",             court: "Angl", couleur: "#ff9e9e", plante: "bruyere",   emoji: "🇬🇧", cycles: ["6e","5e","4e","3e"] },
  "espagnol":          { nom: "Espagnol (LV2)",      court: "Esp",  couleur: "#ffb870", plante: "cactus",    emoji: "🇪🇸", cycles: ["5e","4e","3e"] },
  "arts-plastiques":   { nom: "Arts plastiques",     court: "Arts", couleur: "#f7a8ff", plante: "iris",      emoji: "🎨", cycles: ["6e","5e","4e","3e"] },
  "education-musicale":{ nom: "Éducation musicale",  court: "Mus",  couleur: "#a8d8ff", plante: "campanule", emoji: "🎵", cycles: ["6e","5e","4e","3e"] },
  "eps":               { nom: "Éducation physique et sportive", court: "EPS", couleur: "#ffe08a", plante: "tournesol", emoji: "🏃", cycles: ["6e","5e","4e","3e"] },
};

// Les cinq domaines du socle commun de connaissances, de compétences et de culture.
export const SOCLE = {
  1: "Les langages pour penser et communiquer",
  2: "Les méthodes et outils pour apprendre",
  3: "La formation de la personne et du citoyen",
  4: "Les systèmes naturels et les systèmes techniques",
  5: "Les représentations du monde et l'activité humaine",
};

export const TYPES_ITEMS = ["qcm", "vf", "trous", "ordre", "assoc", "num", "texte", "flash"];
