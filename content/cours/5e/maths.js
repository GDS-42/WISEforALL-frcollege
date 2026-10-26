// Cours ÉCLORE — 5e Mathématiques. Schéma : docs/COURS.md
export default {
  id: "5e-maths",
  chapitres: {
    "5e-maths-01-priorites-operatoires": {
      accroche: "Deux élèves calculent 20 − 3 × 4. L'un trouve 68, l'autre 8. Les deux ont fait des calculs justes… mais un seul a respecté les règles. Pour que tout le monde trouve le même résultat, les mathématiciens se sont mis d'accord sur un ordre.",
      objectifs: [
        "Calculer une expression en respectant les priorités opératoires",
        "Utiliser des parenthèses pour traduire une phrase en calcul",
        "Appliquer un programme de calcul et le remonter",
      ],
      sections: [
        {
          titre: "Pourquoi un ordre de calcul ?",
          blocs: [
            { t: "texte", md: "Une expression comme 20 − 3 × 4 peut se lire de deux façons. Si on calcule de gauche à droite, on obtient 17 × 4 = 68. Si on commence par la multiplication, on obtient 20 − 12 = 8.\n\nSans règle commune, une même écriture aurait deux valeurs : impossible de se comprendre. La convention internationale est claire : ==la multiplication passe avant la soustraction==. Le bon résultat est donc **8**." },
            { t: "definition", terme: "Expression numérique", md: "Une suite de nombres reliés par des signes d'opération (+, −, ×, ÷) et parfois des parenthèses. **Calculer** une expression, c'est trouver le nombre qu'elle représente." },
            { t: "tableau", titre: "Le vocabulaire des résultats", entetes: ["Opération", "Le résultat s'appelle", "Exemple"], lignes: [["Addition", "une **somme**", "7 + 5 = 12 : 12 est la somme de 7 et 5"], ["Soustraction", "une **différence**", "7 − 5 = 2"], ["Multiplication", "un **produit**", "7 × 5 = 35"], ["Division", "un **quotient**", "35 ÷ 5 = 7"]] },
          ],
        },
        {
          titre: "Les trois règles de priorité",
          blocs: [
            { t: "propriete", titre: "Priorités opératoires", md: "1. On calcule d'abord ce qui est **entre parenthèses**, en commençant par les plus intérieures.\n2. Puis les **multiplications et divisions**.\n3. Enfin les **additions et soustractions**.\n\nQuand il ne reste que des opérations de même priorité, on calcule **de gauche à droite**." },
            { t: "schema", titre: "Une pyramide pour s'en souvenir", legende: "On commence en haut de la pyramide et on descend étage par étage.", svg: `<svg viewBox="0 0 400 230"><path class="aplat" d="M200 18 L330 208 L70 208 Z"/><path class="trait" d="M200 18 L330 208 L70 208 Z"/><line class="trait-fin" x1="157" y1="81" x2="243" y2="81"/><line class="trait-fin" x1="114" y1="145" x2="286" y2="145"/><text class="texte" x="200" y="62" text-anchor="middle">( )</text><text class="texte" x="200" y="120" text-anchor="middle">× et ÷</text><text class="texte" x="200" y="184" text-anchor="middle">+ et −</text><text class="texte-main" x="352" y="62">1er</text><text class="texte-main" x="352" y="120">2e</text><text class="texte-main" x="352" y="184">3e</text><path class="trait-fin" d="M30 40 L30 190" marker-end="url(#fl)"/><text class="texte-petit" x="22" y="30">ordre</text></svg>` },
            { t: "exemple", titre: "Calculer A = 20 − 3 × (2 + 4)", etapes: ["Parenthèses d'abord : 2 + 4 = 6, donc A = 20 − 3 × 6.", "Puis la multiplication : 3 × 6 = 18, donc A = 20 − 18.", "Enfin la soustraction : A = 2."] },
            { t: "attention", md: "Ne calcule pas « de gauche à droite » sans réfléchir : dans 5 + 2 × 10, on ne fait pas 5 + 2 = 7. La multiplication passe d'abord : 5 + 20 = **25**." },
            { t: "verifie", q: "Combien vaut 12 − 8 ÷ 4 ?", choix: ["1", "10", "2", "8"], bonne: 1, explication: "La division passe avant la soustraction : 8 ÷ 4 = 2, puis 12 − 2 = 10. Le piège « 1 » vient d'un calcul de gauche à droite (12 − 8 = 4, puis 4 ÷ 4)." },
          ],
        },
        {
          titre: "Quand tout a la même priorité",
          blocs: [
            { t: "texte", md: "Dans 30 − 10 + 5, il n'y a que des additions et soustractions : on avance **de gauche à droite**. 30 − 10 = 20, puis 20 + 5 = 25. Même règle pour les multiplications et divisions : 40 ÷ 4 × 2 = 10 × 2 = 20." },
            { t: "astuce", md: "Avant de calculer, souligne au crayon l'opération prioritaire. Recopie ensuite toute la ligne avec le résultat à sa place : une étape par ligne, et les erreurs disparaissent." },
            { t: "verifie", q: "Combien vaut 40 ÷ 4 × 2 ?", choix: ["5", "20", "80"], bonne: 1, explication: "Division et multiplication ont la même priorité : on va de gauche à droite. 40 ÷ 4 = 10, puis 10 × 2 = 20." },
          ],
        },
        {
          titre: "Programmes de calcul et parenthèses",
          blocs: [
            { t: "definition", terme: "Programme de calcul", md: "Une suite d'instructions à appliquer, dans l'ordre, à un nombre de départ." },
            { t: "etapes", titre: "Programme : « Choisis un nombre, ajoute 4, multiplie par 3 »", items: [{ titre: "Départ", md: "On choisit 5." }, { titre: "Ajouter 4", md: "5 + 4 = 9" }, { titre: "Multiplier par 3", md: "9 × 3 = 27" }, { titre: "En une ligne", md: "(5 + 4) × 3 = 27 : les **parenthèses** obligent à ajouter avant de multiplier." }] },
            { t: "exemple", titre: "Remonter le programme", md: "On a obtenu 27 et on cherche le nombre de départ. On fait les **opérations inverses dans l'ordre inverse** : 27 ÷ 3 = 9, puis 9 − 4 = 5." },
            { t: "savais-tu", md: "Les parenthèses ne sont apparues dans les calculs qu'au XVIe siècle. Avant, on traçait une barre au-dessus des nombres à regrouper : le *vinculum*." },
          ],
        },
      ],
      bilan: "Parenthèses, puis × et ÷, puis + et − ; à égalité, de gauche à droite. Avec ces règles, tout le monde trouve le même résultat.",
    },
  },
};
