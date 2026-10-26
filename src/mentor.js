// ÉCLORE — Lume, la luciole mentor. Ses mots sont courts, sincères, jamais moralisateurs.
// Les retours valorisent l'effort et la stratégie (état d'esprit de développement), pas le « don ».

const au = (t) => t[Math.floor(Math.random() * t.length)];

export const ACCUEIL = [
  "Il y a, quelque part, un jardin qui ne pousse qu'à la lumière de ce que tu apprends.",
  "Chaque chose que tu comprends y devient une graine. Chaque fois que tu t'en souviens, elle grandit.",
  "On ne t'y demandera jamais d'être parfait. Seulement de revenir.",
];

export const SALUTS = {
  matin: ["Bonjour. Le jardin s'éveille avec toi.", "Une aube de plus. Qu'est-ce qu'on fait pousser ?"],
  jour: ["Te revoilà. Les plantes t'attendaient.", "Content de te voir. Allons voir ce qui a soif."],
  soir: ["Bonsoir. Le jardin est plus beau la nuit.", "Quelques minutes suffisent. Puis repos."],
};

export function salut(prenom) {
  const hh = new Date().getHours();
  const l = hh < 12 ? SALUTS.matin : hh < 18 ? SALUTS.jour : SALUTS.soir;
  return au(l).replace("Te revoilà", `Te revoilà, ${prenom}`);
}

export const JUSTE = [
  "Oui. Et tu l'as retrouvé seul, c'est ça qui compte.",
  "Exact. Cette graine vient de prendre racine.",
  "C'est ça. Ton cerveau vient de renforcer un chemin.",
  "Juste. Et la prochaine fois, ce sera encore plus facile à retrouver.",
  "Bien vu. Garde ce raisonnement, il resservira.",
  "Oui. Note comment tu as fait : c'est une stratégie.",
];
export const JUSTE_APRES_ERREUR = [
  "Tu l'avais raté la dernière fois. Plus maintenant. C'est exactement comme ça qu'on apprend.",
  "Une erreur transformée en réussite : c'est le meilleur compost du jardin.",
  "La fois d'avant, non. Aujourd'hui, oui. Regarde le chemin parcouru.",
];
export const FAUX = [
  "Pas encore. Et c'est précisément là que le cerveau grandit.",
  "Non, mais tu viens d'apprendre quelque chose de précis. Lis pourquoi.",
  "Ce n'est pas ça. Ce n'est pas grave : on la reverra tout à l'heure.",
  "Raté, et alors ? Une plante qui a eu soif repart plus forte quand on l'arrose.",
  "Pas celle-là. L'explication juste en dessous vaut de l'or.",
];
export const FAUX_SUR = [
  "Tu étais sûr, et c'était faux : ça arrive aux meilleurs. C'est une fausse certitude à démonter, et c'est précieux de la connaître.",
  "Une certitude qui tombe, c'est une place libérée pour une idée juste.",
];
export const JUSTE_DEVINE = [
  "Juste, mais tu devinais. On la reverra bientôt pour que ça devienne solide.",
  "Bonne intuition. Transformons-la en certitude : elle reviendra vite.",
];

export const FIN_SESSION = [
  "Ce que tu as planté aujourd'hui poussera pendant que tu dors. Littéralement.",
  "Tu peux fermer. Le jardin, lui, continue de travailler.",
  "Revenir demain compte plus que tout faire aujourd'hui.",
  "Tu n'as pas tout réussi ? Parfait : c'est le signe que tu as travaillé à la bonne hauteur.",
];

export const ERREURS_NOMBREUSES = [
  "Beaucoup d'erreurs aujourd'hui. Ça veut dire que tu es en train d'apprendre, pas de réviser. Relis la fiche, puis reviens.",
  "C'était dur. Les plantes les plus solides sont celles qui ont connu le vent. Demain sera plus facile.",
];

export const CITATIONS = [
  ["La connaissance s'acquiert par l'expérience, tout le reste n'est que de l'information.", "Albert Einstein"],
  ["Rien dans la vie n'est à craindre, tout doit être compris.", "Marie Curie"],
  ["Apprendre sans réfléchir est vain. Réfléchir sans apprendre est dangereux.", "Confucius"],
  ["Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.", "Sénèque"],
  ["Il faut toujours viser la lune, car même en cas d'échec, on atterrit dans les étoiles.", "Oscar Wilde"],
  ["L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde.", "Nelson Mandela"],
  ["On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.", "Antoine de Saint-Exupéry"],
  ["Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.", "Marcel Proust"],
  ["Je ne perds jamais. Soit je gagne, soit j'apprends.", "Nelson Mandela"],
  ["Un enfant, un enseignant, un livre et un stylo peuvent changer le monde.", "Malala Yousafzai"],
  ["La curiosité est le commencement de la sagesse.", "Socrate"],
  ["Défends ton droit de penser, car même penser de travers vaut mieux que ne pas penser du tout.", "Hypatie d'Alexandrie"],
  ["Le monde est un livre, et ceux qui ne voyagent pas n'en lisent qu'une page.", "Saint Augustin"],
  ["Il n'y a qu'une façon d'apprendre, c'est par l'action.", "Paulo Coelho"],
  ["L'imagination est plus importante que le savoir.", "Albert Einstein"],
  ["Ce que l'on conçoit bien s'énonce clairement.", "Nicolas Boileau"],
  ["La patience est amère, mais son fruit est doux.", "Jean-Jacques Rousseau"],
  ["Tout ce qui est fait pour moi, sans moi, est fait contre moi.", "Nelson Mandela"],
  ["Les grandes choses ne sont pas faites par impulsion, mais par une série de petites choses mises bout à bout.", "Vincent van Gogh"],
  ["Sois le changement que tu veux voir dans le monde.", "Gandhi"],
  ["Lire, c'est voyager ; voyager, c'est lire.", "Victor Hugo"],
  ["Celui qui ouvre une porte d'école ferme une prison.", "Victor Hugo"],
  ["La science, mon garçon, est faite d'erreurs, mais d'erreurs qu'il est bon de commettre, car elles mènent peu à peu à la vérité.", "Jules Verne"],
  ["Il n'y a pas de hasard, il n'y a que des rendez-vous.", "Paul Éluard"],
  ["Au milieu de l'hiver, j'ai découvert en moi un invincible été.", "Albert Camus"],
  ["Ce qui compte ne peut pas toujours être compté, et ce qui peut être compté ne compte pas forcément.", "William Bruce Cameron"],
  ["Chaque difficulté rencontrée doit être l'occasion d'un nouveau progrès.", "Pierre de Coubertin"],
  ["Une personne qui n'a jamais commis d'erreurs n'a jamais tenté d'innover.", "Albert Einstein"],
  ["Le savoir est la seule matière qui s'accroît quand on la partage.", "Socrate"],
  ["Nous sommes tous dans le caniveau, mais certains d'entre nous regardent les étoiles.", "Oscar Wilde"],
  ["Il faut avoir du chaos en soi pour enfanter une étoile qui danse.", "Friedrich Nietzsche"],
  ["La liberté commence où l'ignorance finit.", "Victor Hugo"],
  ["Plus je lis, plus j'acquiers, plus je suis certain de ne rien savoir.", "Voltaire"],
  ["Tout obstacle renforce la détermination.", "Léonard de Vinci"],
  ["Ce n'est pas la force, mais la persévérance, qui fait les grandes œuvres.", "Samuel Johnson"],
  ["Mieux vaut allumer une bougie que maudire l'obscurité.", "Proverbe chinois"],
  ["Qui veut voyager loin ménage sa monture.", "Jean Racine"],
  ["Petit à petit, l'oiseau fait son nid.", "Proverbe français"],
  ["L'arbre qui tombe fait plus de bruit que la forêt qui pousse.", "Proverbe africain"],
  ["Si tu veux aller vite, marche seul. Si tu veux aller loin, marchons ensemble.", "Proverbe africain"],
  ["Soyons reconnaissants aux personnes qui nous donnent du bonheur ; elles sont les charmants jardiniers par qui nos âmes sont fleuries.", "Marcel Proust"],
  ["Il faut cultiver notre jardin.", "Voltaire"],
];

export function citationDuJour() {
  const j = Math.floor(Date.now() / 86400000);
  return CITATIONS[j % CITATIONS.length];
}

export function retourReponse({ juste, confiance, dejaRate }) {
  if (juste && dejaRate) return au(JUSTE_APRES_ERREUR);
  if (juste && confiance === 1) return au(JUSTE_DEVINE);
  if (juste) return au(JUSTE);
  if (!juste && confiance === 3) return au(FAUX_SUR);
  return au(FAUX);
}

export function motFin(taux) {
  if (taux < 0.4) return au(ERREURS_NOMBREUSES);
  return au(FIN_SESSION);
}
