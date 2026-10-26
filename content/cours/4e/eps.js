// Cours ÉCLORE — 4e EPS. Schéma : docs/COURS.md
export default {
  id: "4e-eps",
  chapitres: {
    "4e-eps-01-sante-entrainement": {
      accroche: "Deux élèves courent 20 minutes. L'un finit épuisé au bout de 8 minutes, l'autre termine en parlant tranquillement. Le second n'est pas forcément plus fort : il connaît sa VMA et son cœur, et il a choisi la bonne allure.",
      objectifs: [
        "Calculer une allure à partir de sa VMA et une zone d'effort avec la fréquence cardiaque",
        "Distinguer endurance, force, vitesse et souplesse et savoir les travailler",
        "Construire une séance et planifier un entraînement",
        "Adopter une hygiène de vie favorable : hydratation, sommeil, refus du dopage",
      ],
      sections: [
        {
          titre: "La VMA, ton compteur de vitesse",
          blocs: [
            { t: "definition", terme: "VMA (vitesse maximale aérobie)", md: "La plus petite vitesse à laquelle tu consommes le **maximum d'oxygène**. Au-delà, ton corps ne peut plus fournir assez d'oxygène aux muscles et tu t'épuises vite. On la mesure par un test de course progressif." },
            { t: "propriete", titre: "Courir au bon pourcentage", md: "On court **longtemps** (20 à 30 minutes) entre **70 et 85 %** de sa VMA. On développe sa VMA par **intervalles courts** à **100-110 %**, par exemple 30 secondes de course, 30 secondes de récupération (le « 30-30 »)." },
            { t: "graphique", type: "barres", titre: "Allures pour une VMA de 12 km/h", unite: "km/h", donnees: [{ label: "70 %", valeur: 8.4 }, { label: "80 %", valeur: 9.6 }, { label: "85 %", valeur: 10.2 }, { label: "100 %", valeur: 12 }, { label: "110 %", valeur: 13.2 }] },
            { t: "exemple", titre: "Régler son allure sur une piste de 200 m", etapes: ["VMA = 12 km/h ; course de 20 minutes à 80 % : 12 × 0,8 = **9,6 km/h**.", "9,6 km/h = 9 600 m en 60 minutes, soit 9 600 ÷ 60 = **160 m par minute**.", "Pour faire 200 m : 200 ÷ 160 = 1,25 minute, soit **75 secondes**.", "Tu dois donc passer la ligne toutes les 75 secondes : un camarade t'annonce tes temps."] },
            { t: "verifie", q: "Ta VMA est de 14 km/h. À quelle vitesse cours-tu à 75 % de ta VMA ?", choix: ["7,5 km/h", "10,5 km/h", "11,5 km/h", "14,75 km/h"], bonne: 1, explication: "14 × 0,75 = 10,5 km/h : une allure de course longue, que tu tiens en parlant par phrases courtes." },
          ],
        },
        {
          titre: "Ton cœur, un indicateur précis",
          blocs: [
            { t: "texte", md: "Ta **fréquence cardiaque** (FC) est le nombre de battements de ton cœur par minute. Plus l'effort est intense, plus elle monte. Elle te dit, mieux qu'une impression, si tu es dans la bonne zone." },
            { t: "propriete", titre: "Trois formules à connaître", md: "**FC max** ≈ 220 − âge. À 13 ans : 220 − 13 = **207** battements par minute.\n**FC de réserve** = FC max − FC de repos.\n**FC cible** = FC de repos + pourcentage × FC de réserve (méthode de Karvonen)." },
            { t: "astuce", md: "Prends ta **FC de repos** le **matin au réveil**, encore allongé, avant de te lever : compte tes battements au poignet ou au cou pendant 15 secondes et multiplie par 4." },
            { t: "graphique", type: "barres", titre: "Zones d'effort d'un élève de 13 ans (FC de repos 67)", unite: "battements/min", donnees: [{ label: "Repos", valeur: 67 }, { label: "Cible 60 %", valeur: 151 }, { label: "Cible 70 %", valeur: 165 }, { label: "Cible 80 %", valeur: 179 }, { label: "FC max", valeur: 207 }] },
            { t: "exemple", titre: "Calculer sa zone à 70 %", etapes: ["FC max = 220 − 13 = 207.", "FC de réserve = 207 − 67 = 140.", "70 % de la réserve : 140 × 0,7 = 98.", "FC cible = 67 + 98 = **165** battements par minute."] },
          ],
        },
        {
          titre: "Quatre qualités physiques, quatre façons de s'entraîner",
          blocs: [
            { t: "tableau", titre: "Les qualités physiques", entetes: ["Qualité", "C'est la capacité à…", "Exercice type"], lignes: [["**Endurance**", "durer longtemps", "Courir 25 minutes à allure régulière"], ["**Force**", "vaincre une résistance", "Pompes, squats, gainage"], ["**Vitesse**", "agir ou se déplacer très vite", "Sprints de 30 m avec récupération complète"], ["**Souplesse**", "atteindre une grande amplitude", "Tenir une posture d'étirement 30 secondes"]] },
            { t: "attention", md: "La vitesse ne se travaille **pas fatigué** : il faut récupérer complètement entre deux sprints, sinon tu travailles autre chose. Et les **étirements longs** se font plutôt **après** la séance, à froid, ou lors de séances dédiées, pas pendant l'échauffement." },
            { t: "verifie", q: "Pour développer ta VMA, quel type de séance est le plus efficace ?", choix: ["Marcher 1 heure", "Des intervalles courts à 100-110 % de VMA, comme le 30-30", "Courir le plus vite possible jusqu'à l'épuisement", "Des étirements"], bonne: 1, explication: "Courir brièvement à ta VMA ou un peu au-dessus, avec des récupérations régulières, sollicite au maximum ta consommation d'oxygène sans t'épuiser." },
          ],
        },
        {
          titre: "Construire une séance et planifier",
          blocs: [
            { t: "etapes", titre: "Une séance bien construite", items: [{ titre: "Échauffement général", md: "Course lente, mobilisation des articulations : le cœur et les muscles se réveillent." }, { titre: "Échauffement spécifique", md: "Gestes de l'activité, de plus en plus rapides." }, { titre: "Corps de séance", md: "Le travail principal." }, { titre: "Retour au calme", md: "Course lente ou marche : le cœur redescend." }, { titre: "Hydratation et récupération", md: "Boire, s'étirer doucement, se reposer." }] },
            { t: "etapes", titre: "Planifier un entraînement sur plusieurs semaines", cycle: true, items: [{ titre: "Évaluer", md: "Mesurer sa VMA et sa FC de repos." }, { titre: "Fixer un objectif", md: "Par exemple courir 20 minutes à 80 % de VMA." }, { titre: "Planifier", md: "Deux ou trois séances par semaine, en alternant intensité et récupération." }, { titre: "S'entraîner", md: "Respecter les allures prévues." }, { titre: "Récupérer", md: "Le corps progresse **pendant** le repos." }, { titre: "Réévaluer", md: "Refaire le test et ajuster." }] },
            { t: "savais-tu", md: "Après un effort, ton corps ne se contente pas de réparer les fibres musculaires : il les reconstruit un peu plus solides, pour mieux supporter le prochain effort. C'est pour cela que le **repos fait partie de l'entraînement**." },
          ],
        },
        {
          titre: "Une hygiène de vie de sportif",
          blocs: [
            { t: "liste", items: ["**Boire avant d'avoir soif** : la soif arrive quand le corps a déjà perdu de l'eau. De l'eau, par petites gorgées, avant, pendant et après l'effort, plutôt que des boissons sucrées.", "**Dormir 9 à 10 heures** à 13 ans : le sommeil répare les muscles et fixe les apprentissages. Les écrans tard le soir retardent l'endormissement.", "**Refuser le tabac et l'alcool**, qui dégradent le souffle, le cœur et la récupération."] },
            { t: "definition", terme: "Dopage", md: "L'usage de **produits ou de méthodes interdits** pour améliorer artificiellement ses performances. C'est de la **triche** envers les adversaires, et c'est **dangereux** pour la santé : certains produits abîment le cœur, le foie ou les hormones." },
            { t: "verifie", q: "Faut-il attendre d'avoir soif pour boire pendant un effort ?", choix: ["Oui, la soif indique le bon moment", "Non, il faut boire régulièrement avant d'avoir soif"], bonne: 1, explication: "Quand tu as soif, tu es déjà en train de te déshydrater. Une perte de 2 % du poids en eau suffit à faire baisser la performance." },
          ],
        },
      ],
      bilan: "Connais ta VMA et ton cœur, choisis la bonne allure, construis tes séances et respecte ton repos : on progresse en s'entraînant intelligemment, pas en s'épuisant.",
    },
    "4e-eps-02-performance": {
      accroche: "Sur un 1 000 m, partir comme une fusée, c'est souvent finir en marchant. Les meilleurs coureurs ont un secret qui n'a rien de spectaculaire : un projet de course, une montre, et la patience de tenir l'allure prévue.",
      objectifs: [
        "Construire et tenir un projet de course en demi-fond",
        "Réussir un relais en vitesse et connaître la zone de transmission",
        "Appliquer les principes et les règles de sécurité des sauts et des lancers",
        "Nager efficacement et connaître les bases du sauvetage",
      ],
      sections: [
        {
          titre: "Le demi-fond : la régularité avant tout",
          blocs: [
            { t: "definition", terme: "Projet de course", md: "Le temps que tu prévois de réaliser, découpé en **temps de passage** à chaque tour. La clé du demi-fond est la **régularité** : tenir l'allure prévue, sans partir trop vite. Un écart de moins de 10 % entre les tours est un bon repère." },
            { t: "exemple", titre: "Calculer ses temps de passage", etapes: ["Objectif : 1 200 m en 6 minutes, sur une piste de 200 m.", "Nombre de tours : 1 200 ÷ 200 = 6 tours.", "Temps par tour : 6 minutes = 360 secondes ; 360 ÷ 6 = **60 secondes** par tour.", "Si tu passes le premier tour en 50 s, tu es parti trop vite : ralentis pour revenir à 60 s."] },
            { t: "graphique", type: "courbe", titre: "Temps de chaque tour d'un 1 000 m mal géré", unite: "s", donnees: [{ label: "Tour 1", valeur: 55 }, { label: "Tour 2", valeur: 58 }, { label: "Tour 3", valeur: 62 }, { label: "Tour 4", valeur: 66 }, { label: "Tour 5", valeur: 70 }] },
            { t: "verifie", q: "Les temps de passage ci-dessus (55, 58, 62, 66, 70 s) révèlent :", choix: ["Une course parfaitement régulière", "Un départ trop rapide suivi d'un ralentissement progressif", "Une accélération finale réussie"], bonne: 1, explication: "Chaque tour est plus lent que le précédent : le coureur a dépensé trop d'énergie au début. Pour 5 minutes, il fallait 60 s à chaque tour." },
          ],
        },
        {
          titre: "La vitesse et le relais",
          blocs: [
            { t: "texte", md: "Un sprint se décompose en quatre phases : la **réaction** au signal, la **mise en action** (buste penché, appuis puissants), la **vitesse maximale** (le buste s'est redressé progressivement) et le **maintien** de cette vitesse jusqu'à la ligne." },
            { t: "schema", titre: "Le passage de témoin", legende: "D = donneur, R = receveur. Quand D passe la marque, R part ; il tend la main au signal « Hop ! », sans se retourner.", svg: `<svg viewBox="0 0 400 200"><rect class="aplat" x="130" y="70" width="210" height="60"/><g class="trait-fin"><line x1="10" y1="70" x2="390" y2="70"/><line x1="10" y1="130" x2="390" y2="130"/></g><g class="trait"><line x1="130" y1="64" x2="130" y2="136"/><line x1="340" y1="64" x2="340" y2="136"/></g><rect class="aplat-fort" x="88" y="96" width="6" height="10"/><circle class="aplat-fort" stroke="var(--encre)" cx="50" cy="100" r="11"/><circle class="aplat-papier" stroke="var(--encre)" cx="165" cy="100" r="11"/><g class="texte" text-anchor="middle"><text x="50" y="105">D</text><text x="165" y="105">R</text></g><line class="trait" x1="64" y1="100" x2="118" y2="100" marker-end="url(#fl)"/><line class="trait" x1="179" y1="100" x2="238" y2="100" marker-end="url(#fl)"/><path fill="none" stroke="var(--pigment)" stroke-width="3" d="M250 92 L262 108 M262 92 L250 108"/><line class="trait-fin" x1="256" y1="46" x2="256" y2="86"/><g class="texte-petit" text-anchor="middle"><text x="130" y="58">début de zone</text><text x="340" y="58">fin de zone</text><text x="256" y="38">transmission en pleine vitesse</text><text x="91" y="150">marque</text><text x="91" y="164">au sol</text></g><line class="trait-fin" x1="134" y1="150" x2="336" y2="150" marker-end="url(#fl)"/><line class="trait-fin" x1="336" y1="150" x2="134" y2="150" marker-end="url(#fl)"/><text class="texte-main" x="235" y="174" text-anchor="middle">zone de transmission : 30 m</text></svg>` },
            { t: "propriete", titre: "Les règles du relais", md: "Le témoin doit être transmis **à l'intérieur de la zone de transmission** de **30 m**. Le receveur part **avant** l'arrivée du donneur pour recevoir le témoin **en pleine vitesse**, et il ne **regarde pas derrière lui** : il fait confiance au signal sonore du donneur." },
            { t: "verifie", q: "En relais, le receveur doit-il regarder derrière lui pour attraper le témoin ?", choix: ["Oui, pour ne pas le rater", "Non, il court vers l'avant et tend la main au signal du donneur"], bonne: 1, explication: "Regarder derrière ralentit et déséquilibre. Le receveur s'élance quand le donneur passe la marque et tend la main au « Hop ! »." },
          ],
        },
        {
          titre: "Sauter et lancer",
          blocs: [
            { t: "etapes", titre: "Les phases du saut en longueur", items: [{ titre: "Course d'élan", md: "Progressive, de plus en plus rapide." }, { titre: "Dernier appui", md: "Sur la planche, actif et rapide." }, { titre: "Impulsion", md: "Poussée complète de la jambe, vers le haut et l'avant." }, { titre: "Suspension", md: "Le corps en l'air, gainé." }, { titre: "Réception", md: "Dans le sable, bras et jambes vers l'avant." }] },
            { t: "definition", terme: "Impulsion", md: "Le moment où le sauteur **pousse sur sa jambe** pour quitter le sol. En longueur comme en hauteur, tout se joue là : une course d'élan rapide ne sert à rien sans un dernier appui actif." },
            { t: "tableau", titre: "Les quatre lancers", entetes: ["Lancer", "Engin", "Geste"], lignes: [["**Poids**", "Boule lourde", "**Poussée** depuis l'épaule, bras qui se déplie"], ["**Disque**", "Plateau", "Lancé en **rotation**, bras tendu"], ["**Javelot**", "Engin long", "Lancé **au-dessus de l'épaule** après une course d'élan"], ["**Marteau**", "Boule au bout d'un câble", "Lancée après **plusieurs tours** sur soi"]] },
            { t: "attention", md: "Au lancer, la sécurité est **absolue** : tout le monde lance **dans le même sens**, **au signal**, et **personne ne va chercher l'engin** avant que toute la série ait lancé. Un javelot ou un disque peut blesser gravement." },
          ],
        },
        {
          titre: "Nager vite et nager pour sauver",
          blocs: [
            { t: "texte", md: "Il existe quatre nages sportives : le **crawl** (la plus rapide), le **dos**, la **brasse** et le **papillon**. Un bon **départ** plongé, une glisse gainée et des **virages** rapides font gagner de précieuses secondes." },
            { t: "attention", md: "En crawl, le nageur n'est **pas obligé** de toucher le mur avec la main : il fait une **culbute** et pousse avec les **pieds**. En revanche, en brasse et en papillon, il faut toucher le mur **des deux mains en même temps**." },
            { t: "propriete", titre: "Le sauvetage", md: "Savoir nager longtemps, s'**immerger** pour aller chercher un objet au fond, et **remorquer** un camarade sur 10 à 15 m : on nage **sur le dos**, en tenant sa **tête hors de l'eau**, et on avance **avec les jambes**." },
            { t: "verifie", q: "Quelle est la plus rapide des quatre nages ?", choix: ["La brasse", "Le dos", "Le crawl", "Le papillon"], bonne: 2, explication: "Le crawl est la nage la plus rapide : c'est celle qu'utilisent presque tous les nageurs en « nage libre »." },
          ],
        },
      ],
      bilan: "Tenir son allure, transmettre le témoin en pleine vitesse, impulser au bon moment, lancer en sécurité, nager pour soi et pour les autres : la performance se construit avec un projet.",
    },
    "4e-eps-03-deplacements": {
      accroche: "Au milieu d'une forêt, sans GPS, avec seulement une carte et une boussole, sauras-tu retrouver la balise cachée derrière un rocher ? Et sur un mur d'escalade, oserais-tu confier ta sécurité à un camarade ?",
      objectifs: [
        "Lire une carte de course d'orientation : échelle, légende, courbes de niveau, azimut",
        "Grimper et assurer en moulinette en respectant les vérifications et la communication",
        "Se déplacer en kayak ou en VTT en sécurité et dans le respect de la nature",
      ],
      sections: [
        {
          titre: "Lire une carte : échelle et légende",
          blocs: [
            { t: "propriete", titre: "L'échelle", md: "Une carte au **1/10 000** signifie que **1 cm** sur la carte représente **10 000 cm** sur le terrain, soit **100 m**." },
            { t: "exemple", titre: "Mesurer une distance", etapes: ["Sur une carte au 1/10 000, deux balises sont séparées de 4 cm.", "Chaque centimètre vaut 100 m.", "Distance réelle : 4 × 100 = **400 m**.", "De même, 3,5 cm représentent 350 m."] },
            { t: "tableau", titre: "Les couleurs d'une carte de course d'orientation", entetes: ["Couleur", "Signification"], lignes: [["Blanc", "Forêt où l'on court facilement"], ["Vert", "Végétation dense, difficile à traverser (plus c'est foncé, plus c'est dur)"], ["Jaune", "Terrain découvert : prairie, clairière"], ["Bleu", "Eau : rivière, mare, marais"], ["Noir", "Rochers, chemins, constructions"], ["Marron", "Relief : courbes de niveau, talus"]] },
            { t: "astuce", md: "**Oriente ta carte** avec la boussole : le nord de la carte doit pointer vers le nord indiqué par l'aiguille. Ensuite, garde ton **pouce** posé sur ta position et avance-le au fur et à mesure : tu ne te perds plus." },
          ],
        },
        {
          titre: "Le relief et l'azimut",
          blocs: [
            { t: "definition", terme: "Courbes de niveau", md: "Des lignes qui relient tous les points de **même altitude**. Plus elles sont **serrées**, plus la **pente est raide** ; plus elles sont **espacées**, plus le terrain est plat." },
            { t: "schema", titre: "Une colline vue de dessus", legende: "À gauche, les courbes se touchent presque : pente raide. À droite, elles s'écartent : pente douce.", svg: `<svg viewBox="0 0 400 220"><g fill="none" stroke="var(--pigment)" stroke-width="1.6"><ellipse cx="150" cy="110" rx="110" ry="80"/><ellipse cx="135" cy="110" rx="85" ry="62"/><ellipse cx="120" cy="110" rx="60" ry="44"/><ellipse cx="105" cy="110" rx="35" ry="26"/></g><text class="texte-petit" x="105" y="114" text-anchor="middle">sommet</text><line class="trait" x1="360" y1="100" x2="360" y2="44" marker-end="url(#fl)"/><text class="texte" x="360" y="34" text-anchor="middle">N</text><g class="texte-petit"><text x="20" y="208">courbes serrées : pente raide</text><text x="390" y="208" text-anchor="end">courbes espacées : pente douce</text></g><line class="trait-fin" x1="50" y1="196" x2="52" y2="140" marker-end="url(#fl)"/><line class="trait-fin" x1="300" y1="196" x2="240" y2="130" marker-end="url(#fl)"/></svg>` },
            { t: "definition", terme: "Azimut", md: "L'**angle**, en degrés, entre le **nord** et la **direction à suivre**, mesuré dans le sens des aiguilles d'une montre." },
            { t: "droite", titre: "Les azimuts des quatre points cardinaux (en degrés)", min: 0, max: 360, pas: 45, points: [{ x: 0, label: "N" }, { x: 90, label: "E" }, { x: 180, label: "S" }, { x: 270, label: "O" }, { x: 360, label: "N" }] },
            { t: "verifie", q: "Tu dois rejoindre le poste 3, plein sud, mais la carte montre des falaises entre les deux. Quelle est la meilleure décision ?", choix: ["Suivre l'azimut 180° tout droit, coûte que coûte", "Choisir un itinéraire de contournement par les chemins, même plus long", "Abandonner la course"], bonne: 1, explication: "Une falaise est dangereuse et lente à franchir. Un détour par un chemin est souvent plus rapide et toujours plus sûr : en orientation, on choisit son itinéraire." },
          ],
        },
        {
          titre: "L'escalade en moulinette",
          blocs: [
            { t: "definition", terme: "Moulinette", md: "La corde passe par un **point fixe en haut de la voie** (le relais) et redescend jusqu'à l'assureur. Le grimpeur est donc **retenu d'en haut** : s'il lâche, il ne tombe presque pas." },
            { t: "schema", titre: "Le système de la moulinette", legende: "La main de freinage de l'assureur ne lâche jamais le brin situé sous le système d'assurage.", svg: `<svg viewBox="0 0 400 260"><rect class="aplat" x="230" y="10" width="160" height="240"/><g class="aplat-fort"><circle cx="260" cy="60" r="5"/><circle cx="330" cy="90" r="5"/><circle cx="280" cy="120" r="5"/><circle cx="350" cy="150" r="5"/><circle cx="270" cy="196" r="5"/><circle cx="330" cy="222" r="5"/></g><circle class="trait" fill="none" cx="300" cy="24" r="7"/><line class="trait-fin" x1="10" y1="250" x2="390" y2="250"/><path fill="none" stroke="var(--pigment)" stroke-width="2.5" d="M300 156 L300 31 M294 26 Q240 30 160 194 M158 206 Q160 230 172 248"/><circle class="trait" fill="none" cx="300" cy="126" r="8"/><path class="trait" fill="none" d="M300 134 L300 162 M300 140 L282 122 M300 140 L326 110 M300 162 L286 186 L272 194 M300 162 L318 182 L330 220"/><rect class="aplat-fort" x="294" y="154" width="12" height="7"/><circle class="trait" fill="none" cx="140" cy="170" r="8"/><path class="trait" fill="none" d="M140 178 L140 214 M140 214 L130 250 M140 214 L152 250 M140 188 L158 198 M140 192 L156 214"/><rect class="aplat-fort" stroke="var(--encre)" x="153" y="193" width="10" height="12"/><g class="texte-petit"><text x="290" y="20" text-anchor="end">relais en haut de la voie</text><text x="316" y="140">grimpeur</text><text x="316" y="168">nœud de huit</text><text x="172" y="210">système d'assurage</text><text x="124" y="230" text-anchor="end">main de freinage</text><text x="124" y="244" text-anchor="end">toujours sur ce brin</text><text x="60" y="160" text-anchor="middle">assureur</text></g></svg>` },
            { t: "etapes", titre: "Avant de grimper", items: [{ titre: "Baudrier", md: "L'enfiler et le serrer au-dessus des hanches." }, { titre: "Nœud", md: "Le grimpeur fait son **nœud de huit**, bien doublé, et le nœud d'arrêt." }, { titre: "Système d'assurage", md: "L'assureur y installe la corde et **visse le mousqueton**." }, { titre: "Vérification mutuelle", md: "Chacun contrôle le baudrier, le nœud et le mousqueton de l'autre." }, { titre: "Dialogue", md: "« Départ ? » demande le grimpeur ; « Parti ! » répond l'assureur." }, { titre: "Grimper", md: "Le grimpeur commence sa voie." }] },
            { t: "tableau", titre: "Les mots de la cordée", entetes: ["Le grimpeur dit…", "Ce que fait l'assureur"], lignes: [["« Sec ! »", "Il **tend** la corde."], ["« Mou ! »", "Il **relâche** un peu de corde."], ["« Bloque ! »", "Il bloque la corde : le grimpeur va se reposer ou descendre."]] },
            { t: "attention", md: "L'assureur garde **toujours une main** sur le brin de corde **sous le système** : il ne lâche jamais, même pour se gratter le nez. Si le grimpeur chute, il **bloque** la corde en ramenant la main de freinage **vers le bas**, fléchit les jambes et reste en appui." },
            { t: "verifie", q: "Le grimpeur chute en moulinette. Que doit faire l'assureur ?", choix: ["Lâcher la corde pour amortir", "Bloquer la corde en ramenant la main de freinage vers le bas, fléchir les jambes et rester en appui", "Courir vers le mur"], bonne: 1, explication: "Le blocage se fait main de freinage vers le bas. En fléchissant les jambes, l'assureur amortit le choc sans être déséquilibré." },
          ],
        },
        {
          titre: "Kayak et VTT : la pleine nature en sécurité",
          blocs: [
            { t: "liste", items: ["En **kayak** : le **gilet de sauvetage** est obligatoire, **quel que soit ton niveau de natation**. On vérifie la météo et le niveau de l'eau.", "En **VTT** : **casque** obligatoire, freins vérifiés, distance de sécurité avec celui de devant.", "On reste **groupé**, on prévient avant de s'engager sur un parcours, et on emporte de l'eau.", "On **respecte la nature** : on reste sur les sentiers, on ne coupe pas à travers la végétation, on ne dérange pas la faune et on rapporte ses déchets."] },
            { t: "verifie", q: "En VTT dans un espace naturel, peut-on couper à travers la végétation pour gagner du temps ?", choix: ["Oui, si on ne casse rien", "Non, on reste sur les sentiers pour protéger la flore, la faune et les sols"], bonne: 1, explication: "Rouler hors des sentiers abîme les plantes, creuse les sols et dérange les animaux. La pleine nature se partage et se respecte." },
          ],
        },
      ],
      bilan: "Carte orientée, pouce sur ta position, vérifications croisées et main toujours sur la corde : se déplacer dans un milieu inconnu, c'est anticiper, communiquer et respecter.",
    },
    "4e-eps-04-expression": {
      accroche: "Comment montrer la colère sans dire un mot ? Comment trois élèves peuvent-ils former une pyramide solide sans que personne ne se blesse ? Devant un public, ton corps devient un langage, et ta sécurité, une affaire d'équipe.",
      objectifs: [
        "Composer une chorégraphie de danse contemporaine à partir d'une intention",
        "Construire des pyramides en acrosport en respectant les rôles et la sécurité",
        "Réaliser un enchaînement gymnique ou de cirque et le juger avec un code",
      ],
      sections: [
        {
          titre: "Danser avec une intention",
          blocs: [
            { t: "definition", terme: "Intention", md: "L'émotion ou l'idée que tu veux transmettre au spectateur. En **danse contemporaine**, elle guide tous les choix : comment utiliser l'**espace**, le **temps** et l'**énergie**." },
            { t: "tableau", titre: "Les trois paramètres du mouvement", entetes: ["Paramètre", "Ce qu'on fait varier", "Exemple pour la colère"], lignes: [["**Espace**", "Niveaux (sol, debout, saut), directions, trajets", "Déplacements brusques, droits, vers le public"], ["**Temps**", "Vitesse, accélérations, arrêts, silences", "Gestes rapides, arrêts nets"], ["**Énergie**", "Fluide ou saccadée, légère ou forte", "Mouvements **saccadés**, énergie forte, regards directs"]] },
            { t: "liste", titre: "Les procédés de composition", items: ["**Unisson** : tous font le même mouvement en même temps.", "**Canon** : le même mouvement, mais en décalé.", "**Cascade** : le mouvement passe d'un danseur à l'autre, comme une vague.", "**Contraste** : deux groupes font des choses opposées (rapide/lent, haut/bas).", "**Répétition** : on reprend un geste pour le rendre marquant."] },
            { t: "texte", md: "Le **regard du spectateur** compte : l'orientation des danseurs, les trajets et les moments forts se choisissent en fonction de ce que le public verra. Un geste fait de dos ou caché derrière un camarade est perdu." },
            { t: "verifie", q: "Ton groupe veut exprimer la colère. Quels choix sont les plus cohérents ?", choix: ["Gestes lents, fluides, regards baissés", "Mouvements saccadés, énergie forte, regards directs, déplacements brusques", "Rester immobiles en souriant"], bonne: 1, explication: "La colère est une émotion forte et explosive : énergie saccadée, rapidité, regards directs la traduisent. Des gestes lents et fluides évoqueraient plutôt la tristesse ou le calme." },
          ],
        },
        {
          titre: "L'acrosport : trois rôles, une seule sécurité",
          blocs: [
            { t: "definition", terme: "Les trois rôles", md: "Le **porteur** sert de **base solide** (dos plat, bras tendus sous les épaules). Le **voltigeur** est **léger et gainé**, il monte sans à-coups. Le **pareur** **surveille et sécurise**, sans faire partie de la figure : il aide à monter et accompagne la descente." },
            { t: "schema", titre: "Une pyramide à deux étages", legende: "Le voltigeur pose ses appuis sur le bassin et les épaules du porteur, jamais au milieu du dos.", svg: `<svg viewBox="0 0 400 225"><line class="trait-fin" x1="10" y1="200" x2="390" y2="200"/><path class="trait" fill="none" stroke-width="3" d="M80 200 L120 200 L120 130 L260 130 L260 200"/><circle class="aplat" stroke="var(--encre)" cx="282" cy="132" r="12"/><path class="trait" fill="none" stroke-width="3" stroke="var(--pigment)" d="M86 120 L120 124 L128 84 L240 84 L258 124"/><circle class="aplat-fort" stroke="var(--encre)" cx="262" cy="74" r="11"/><g class="aplat-fort" stroke="var(--encre)"><circle cx="120" cy="127" r="6"/><circle cx="258" cy="127" r="6"/></g><path fill="none" stroke="var(--pigment)" stroke-width="3" d="M183 136 L197 150 M197 136 L183 150"/><circle class="trait" fill="none" cx="345" cy="100" r="10"/><path class="trait" fill="none" d="M345 110 L345 155 M345 155 L335 200 M345 155 L355 200 M345 122 L312 112 M345 128 L314 134"/><g class="texte-petit" text-anchor="middle"><text x="184" y="72">voltigeur</text><text x="190" y="176">porteur</text><text x="190" y="164">pas ici !</text><text x="120" y="216">bassin</text><text x="258" y="216">épaules</text><text x="345" y="216">pareur</text></g></svg>` },
            { t: "propriete", titre: "Les règles de sécurité", md: "On monte sur les **appuis solides** : **bassin** et **épaules**, jamais sur le milieu du dos. Le **montage** et le **démontage** sont **lents et ordonnés**, dans l'ordre inverse : on ne saute jamais d'une pyramide. On **tient la figure 3 secondes** pour qu'elle soit validée." },
            { t: "exemple", titre: "Une pyramide à trois", md: "Deux porteurs à quatre pattes, côte à côte, dos plats. Le voltigeur pose les mains sur leurs épaules puis les genoux sur leurs bassins. Le pareur se place sur le côté, prêt à accompagner la descente. On tient 3 secondes, puis on démonte dans l'ordre inverse." },
            { t: "verifie", q: "Où le voltigeur doit-il poser ses appuis sur un porteur à quatre pattes ?", choix: ["Au milieu du dos", "Sur le bassin et les épaules", "Sur la nuque", "Où il veut, s'il est léger"], bonne: 1, explication: "Bassin et épaules sont soutenus directement par les jambes et les bras du porteur. Le milieu du dos n'est soutenu par rien : il pourrait se creuser et se blesser." },
          ],
        },
        {
          titre: "Cirque et gymnastique : présenter et juger",
          blocs: [
            { t: "texte", md: "Les **arts du cirque** regroupent trois grandes familles : le **jonglage** (balles, massues, foulards), l'**équilibre** (boule, fil, rola-bola) et l'**acrobatie**. On y travaille aussi la **présence** : regarder le public, jouer avec lui, assumer une pause." },
            { t: "definition", terme: "Code de pointage", md: "Le document qui donne la **valeur de chaque élément** gymnique (A, B, C… de la plus faible à la plus forte) et qui liste les **fautes d'exécution** à pénaliser : jambes fléchies, pointes de pied non tendues, manque d'amplitude, chute." },
            { t: "tableau", titre: "Des éléments gymniques, du plus simple au plus difficile", entetes: ["Rang", "Élément", "Ce qu'il demande"], lignes: [["1", "Roulade avant", "Se grouper, rouler sur le dos arrondi"], ["2", "Roue", "Passer par l'appui des mains, jambes tendues, sur une ligne"], ["3", "Appui tendu renversé (ATR) tenu", "Tenir à l'envers, corps aligné et gainé"], ["4", "Rondade", "Une roue avec demi-tour, réception pieds joints"], ["5", "Salto avant", "Une rotation complète en l'air"]] },
            { t: "texte", md: "Un **enchaînement** relie les éléments par des **liaisons** fluides. Le **juge** observe la difficulté et l'exécution. Juger est un rôle qui s'apprend : on regarde avec le code sous les yeux, on note ce qu'on voit, pas ce qu'on imagine." },
            { t: "verifie", q: "La première gymnaste fait des éléments plus difficiles mais tombe ; la seconde fait des éléments simples sans faute. Que dit le code ?", choix: ["La première gagne forcément", "On additionne la valeur des éléments et on retire les fautes : la chute coûte cher, la seconde peut gagner", "Les deux ont la même note"], bonne: 1, explication: "La difficulté rapporte des points, mais chaque faute en retire, et une chute en retire beaucoup. La maîtrise compte autant que la prise de risque." },
          ],
        },
      ],
      bilan: "Une intention claire, des rôles bien tenus, des appuis sûrs et un regard juste sur la prestation des autres : s'exprimer devant un public, c'est oser et maîtriser à la fois.",
    },
    "4e-eps-05-affrontement": {
      accroche: "Une équipe de bons joueurs peut perdre contre une équipe de joueurs moyens. Pourquoi ? Parce que la seconde a un plan : chacun sait où courir quand le ballon est récupéré. Dans un affrontement, la tête gagne souvent autant que les jambes.",
      objectifs: [
        "Construire, appliquer et évaluer un projet de jeu collectif",
        "Arbitrer et jouer dans le respect des règles et du fair-play",
        "Adapter sa tactique en badminton et en tennis de table",
        "Pratiquer un sport de combat en sécurité et en respectant l'adversaire",
      ],
      sections: [
        {
          titre: "Le projet de jeu collectif",
          blocs: [
            { t: "definition", terme: "Projet de jeu", md: "Le plan d'une équipe pour répondre à deux questions. **Avec le ballon** : comment progresser vers la cible (écarter, monter vite, conserver) ? **Sans le ballon** : comment défendre (presser, se replier, marquer un adversaire) ?" },
            { t: "tableau", titre: "Les rôles dans le jeu", entetes: ["Rôle", "Mission principale"], lignes: [["**Porteur de balle**", "Progresser, passer ou tirer"], ["**Non-porteur**", "Se **démarquer** et proposer une solution de passe"], ["**Défenseur**", "Gêner la progression et récupérer le ballon"], ["**Arbitre**", "Faire respecter les règles et expliquer ses décisions"]] },
            { t: "schema", titre: "Projet : la contre-attaque en handball", legende: "Dès la récupération (1), passe rapide vers l'avant (2) au joueur qui court vers le but (3) ; les ailiers écartent le jeu (4).", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier" x="10" y="20" width="380" height="200"/><rect class="trait" fill="none" x="10" y="20" width="380" height="200"/><line class="trait-fin" x1="200" y1="20" x2="200" y2="220"/><path class="trait-fin" fill="none" d="M10 60 A60 60 0 0 1 10 180"/><path class="trait-fin" fill="none" d="M390 60 A60 60 0 0 0 390 180"/><rect class="aplat-fort" x="4" y="106" width="6" height="28"/><rect class="aplat-fort" x="390" y="106" width="6" height="28"/><g class="aplat-papier" stroke="var(--encre)" stroke-width="1.2"><rect x="244" y="84" width="12" height="12"/><rect x="250" y="150" width="12" height="12"/><rect x="318" y="96" width="12" height="12"/></g><g class="aplat-fort" stroke="var(--encre)"><circle cx="80" cy="120" r="8"/><circle cx="150" cy="128" r="8"/><circle cx="120" cy="44" r="8"/><circle cx="120" cy="196" r="8"/></g><line class="pointille" x1="90" y1="122" x2="140" y2="127" marker-end="url(#fl-p)"/><path class="trait" fill="none" d="M160 128 Q240 126 316 122" marker-end="url(#fl)"/><line class="trait" x1="130" y1="44" x2="300" y2="44" marker-end="url(#fl)"/><line class="trait" x1="130" y1="196" x2="300" y2="196" marker-end="url(#fl)"/><g class="texte-main" text-anchor="middle"><text x="70" y="104">1</text><text x="116" y="114">2</text><text x="236" y="140">3</text><text x="214" y="36">4</text><text x="214" y="214">4</text></g><text class="texte-petit" x="300" y="16" text-anchor="middle">sens de l'attaque →</text></svg>` },
            { t: "etapes", titre: "Construire et évaluer un projet de jeu", items: [{ titre: "Observer", md: "Repérer un problème : par exemple, trop de pertes de balle en attaque placée." }, { titre: "Choisir", md: "Une solution collective simple : la contre-attaque dès la récupération." }, { titre: "Appliquer", md: "La jouer en match." }, { titre: "Mesurer", md: "Relever des indicateurs : tirs, pertes, buts marqués en contre-attaque." }, { titre: "Ajuster", md: "Analyser les chiffres et modifier le projet si besoin." }] },
            { t: "verifie", q: "Que doit faire un joueur sans ballon quand son équipe attaque ?", choix: ["Attendre immobile", "Se démarquer pour offrir une solution de passe", "Réclamer le ballon en restant collé à son défenseur", "Revenir défendre"], bonne: 1, explication: "Un non-porteur utile se déplace dans un espace libre, loin de son défenseur, pour que le porteur ait une solution de passe." },
          ],
        },
        {
          titre: "Arbitrer et jouer fair-play",
          blocs: [
            { t: "texte", md: "L'**arbitre** applique les règles, **siffle fort** et **explique** sa décision par un geste clair. Les joueurs acceptent ses décisions, même quand ils ne sont pas d'accord : c'est la base du **fair-play**, avec le respect de l'adversaire et la poignée de main finale, qu'on gagne ou qu'on perde." },
            { t: "astuce", md: "Arbitre, tu n'es pas sûr d'avoir vu une faute ? **Laisse jouer** : on ne siffle que ce qu'on a vu. Puis **replace-toi** pour mieux voir la suite, sur le côté du jeu, avec le ballon devant toi." },
          ],
        },
        {
          titre: "Raquettes : déplacer l'adversaire",
          blocs: [
            { t: "texte", md: "En **badminton** ou en **tennis de table**, on ne gagne pas en frappant toujours fort, mais en **déplaçant l'adversaire** : long puis court, à droite puis à gauche. Après chaque frappe, on se **replace au centre** en position d'attente, prêt à repartir dans toutes les directions." },
            { t: "tableau", titre: "Deux sports de raquette", entetes: ["", "Badminton", "Tennis de table"], lignes: [["Points d'un set", "**21** points", "**11** points"], ["Écart pour gagner", "2 points (au maximum 30 points)", "2 points"], ["Clé tactique", "Varier volants longs (fond de court) et courts (près du filet)", "Varier balles longues et courtes, à droite et à gauche"]] },
            { t: "exemple", titre: "Battre un joueur rapide près de la table", md: "Ton adversaire est très fort quand il joue près de la table, mais lent à se déplacer. Tu **alternes balles longues et courtes, à droite et à gauche**, pour le faire bouger. Dès qu'il est déséquilibré, tu joues dans l'espace libre." },
            { t: "verifie", q: "En badminton, après avoir frappé le volant, où dois-tu te replacer ?", choix: ["Au filet", "Au fond du court", "Au centre du terrain, en position d'attente", "Là où tu as frappé"], bonne: 2, explication: "Depuis le centre, toutes les zones du terrain sont à la même distance : tu peux atteindre le prochain volant, où qu'il aille." },
          ],
        },
        {
          titre: "Les sports de combat : maîtrise et respect",
          blocs: [
            { t: "tableau", titre: "Deux sports de combat", entetes: ["", "Boxe française (savate)", "Judo"], lignes: [["Origine", "France, XIXe siècle", "Japon, créé par **Jigoro Kano** en **1882**"], ["Principe", "Touches avec les **pieds** et les **poings gantés** sur des cibles précises", "Sport de **préhension** : projeter, immobiliser"], ["Pour gagner", "En assaut, c'est la **touche précise et contrôlée** qui compte, **sans puissance**", "Un **ippon** donne la victoire immédiate"], ["Rituel", "Salut avant et après l'assaut", "Salut avant et après le combat"]] },
            { t: "propriete", titre: "Règles de sécurité en combat", md: "Porter les **protections** (gants, casque, protège-dents selon l'activité), pratiquer sur une **surface adaptée**, ne jamais viser les **zones dangereuses** (nuque, articulations), et **arrêter immédiatement** quand l'arbitre l'ordonne ou quand l'adversaire **tape deux fois** sur le tapis ou sur ton corps : il abandonne, tu relâches ta prise." },
            { t: "verifie", q: "En savate en assaut scolaire, qu'est-ce qui compte pour gagner ?", choix: ["Mettre l'adversaire KO", "Toucher avec précision et contrôle, sans puissance", "Frapper le plus souvent possible, n'importe où"], bonne: 1, explication: "L'assaut récompense la précision et la maîtrise. Une touche appuyée est même sanctionnée : on progresse sans se faire mal." },
          ],
        },
      ],
      bilan: "Un projet collectif mesuré, un arbitrage respecté, une tactique qui fait bouger l'adversaire et des combats maîtrisés : s'affronter, c'est aussi coopérer avec les règles et avec l'autre.",
    },
    "4e-eps-06-culture-citoyennete": {
      accroche: "À l'été 2024, Paris a accueilli le monde entier. Pour la première fois, il y avait autant de femmes que d'hommes parmi les athlètes olympiques. Il a pourtant fallu plus d'un siècle pour en arriver là : le sport a une histoire, des valeurs et des combats.",
      objectifs: [
        "Connaître l'histoire et les valeurs des Jeux olympiques et paralympiques",
        "Comprendre les enjeux d'égalité filles-garçons et d'inclusion du handicap dans le sport",
        "Tenir des rôles sociaux et agir face à un accident : protéger, alerter, secourir",
      ],
      sections: [
        {
          titre: "Les Jeux olympiques et paralympiques",
          blocs: [
            { t: "texte", md: "Les Jeux antiques se tenaient à Olympie, en Grèce. À la fin du XIXe siècle, le Français **Pierre de Coubertin** veut les faire revivre pour rapprocher les peuples par le sport : les premiers **Jeux olympiques modernes** ont lieu à **Athènes** en **1896**." },
            { t: "frise", titre: "Grandes dates des Jeux", evenements: [{ date: 1896, label: "Premiers Jeux modernes à Athènes", detail: "À l'initiative de Pierre de Coubertin." }, { date: 1900, label: "Les femmes admises aux Jeux de Paris", detail: "Dans très peu d'épreuves." }, { date: 1924, label: "Premiers Jeux d'hiver à Chamonix" }, { date: 1948, label: "Jeux de Stoke Mandeville", detail: "Organisés par le docteur Guttmann pour des blessés de guerre." }, { date: 1960, label: "Premiers Jeux paralympiques officiels à Rome" }, { date: 2021, label: "La devise s'enrichit de « Communiter »", detail: "« Ensemble »." }, { date: 2024, label: "Jeux olympiques et paralympiques de Paris", detail: "26 juillet - 11 août, puis 28 août - 8 septembre." }] },
            { t: "propriete", titre: "Devise et valeurs", md: "La devise olympique : « **Citius, Altius, Fortius** » (plus vite, plus haut, plus fort), complétée en 2021 par « **Communiter** » (ensemble). Les valeurs olympiques : **excellence**, **amitié**, **respect**. Les valeurs paralympiques : **courage**, **détermination**, **inspiration**, **égalité**." },
            { t: "verifie", q: "Les femmes ont-elles participé aux Jeux dès 1896 ?", choix: ["Oui, dans toutes les épreuves", "Non, elles ont été admises en 1900, dans peu d'épreuves"], bonne: 1, explication: "Aucune femme ne concourt en 1896. Elles arrivent aux Jeux de Paris en 1900, mais elles ne sont alors que 22 sur près de 1 000 athlètes." },
          ],
        },
        {
          titre: "L'égalité filles-garçons : un combat en cours",
          blocs: [
            { t: "graphique", type: "courbe", titre: "Part des femmes parmi les athlètes des Jeux olympiques d'été", unite: "%", donnees: [{ label: "1900", valeur: 2.2 }, { label: "1960", valeur: 11.4 }, { label: "1976", valeur: 20.7 }, { label: "1996", valeur: 34 }, { label: "2012", valeur: 44.2 }, { label: "2021", valeur: 48.8 }, { label: "2024", valeur: 50 }] },
            { t: "texte", md: "La courbe monte lentement pendant plus d'un siècle avant d'atteindre la **parité à Paris 2024**. Mais l'égalité n'est pas acquise partout : le sport féminin reste **moins médiatisé** et les sportives sont souvent **moins payées** que les sportifs. En EPS, filles et garçons pratiquent les mêmes activités et sont évalués sur les mêmes compétences." },
            { t: "savais-tu", md: "Les Jeux de Tokyo, prévus en 2020, ont eu lieu en 2021 à cause de la pandémie de Covid-19. Ils ont pourtant gardé leur nom : « Tokyo 2020 »." },
          ],
        },
        {
          titre: "Handicap et inclusion",
          blocs: [
            { t: "definition", terme: "Handisport et sport adapté", md: "Le **handisport** s'adresse aux personnes ayant un **handicap moteur ou sensoriel** (fauteuil, amputation, cécité, surdité). Le **sport adapté** s'adresse aux personnes ayant un **handicap mental ou psychique**. Chacun a sa fédération et ses compétitions." },
            { t: "exemple", titre: "Un tournoi de basket inclusif", md: "Un élève en fauteuil roulant participe au tournoi. Plutôt que de le placer arbitre ou spectateur, on peut faire jouer **tous les joueurs de l'équipe assis** (sur des chaises à roulettes, par exemple), ou **adapter le règlement** pour qu'il ait un **rôle réel** dans le jeu : un panier marqué par lui vaut plus de points, personne ne peut lui prendre le ballon des mains. Inclure, c'est permettre à chacun de jouer vraiment." },
            { t: "verifie", q: "Qu'est-ce qui distingue le handisport du sport adapté ?", choix: ["Le handisport est réservé aux adultes", "Le handisport concerne les handicaps moteurs et sensoriels, le sport adapté les handicaps mentaux et psychiques", "Il n'y a aucune différence"], bonne: 1, explication: "Les deux permettent la pratique sportive, mais pour des publics différents, avec des règles et des compétitions adaptées." },
          ],
        },
        {
          titre: "Des rôles et des responsabilités",
          blocs: [
            { t: "tableau", titre: "Les rôles sociaux lors d'une rencontre", entetes: ["Rôle", "Mission"], lignes: [["**Arbitre**", "Fait appliquer les règles pendant le jeu"], ["**Juge**", "Évalue une prestation selon un code (gymnastique, acrosport)"], ["**Coach**", "Conseille son équipe et organise la stratégie"], ["**Marqueur**", "Tient le score et le temps"], ["**Reporter**", "Observe, relève des informations et raconte la rencontre"]] },
            { t: "texte", md: "Pendant le tournoi de la classe, chaque élève tient un rôle : deux arbitres, un marqueur, un coach par équipe qui donne un conseil à chaque temps mort, et un reporter qui résume le match. Tout le monde joue, et tout le monde est responsable." },
          ],
        },
        {
          titre: "Face à un accident : protéger, alerter, secourir",
          blocs: [
            { t: "etapes", titre: "Un camarade tombe et ne bouge plus", items: [{ titre: "Protéger", md: "Écarter le danger et faire arrêter le jeu." }, { titre: "Examiner", md: "Vérifier s'il est conscient et s'il respire." }, { titre: "Alerter", md: "Appeler le **15** ou le **112**, ou prévenir immédiatement l'adulte." }, { titre: "Secourir", md: "S'il est inconscient et respire, le mettre en **PLS**." }, { titre: "Surveiller", md: "Rester près de lui jusqu'à l'arrivée des secours." }] },
            { t: "tableau", titre: "Les numéros d'urgence", entetes: ["Numéro", "Service"], lignes: [["**15**", "SAMU (urgence médicale)"], ["**18**", "Pompiers"], ["**112**", "Numéro d'urgence européen, depuis n'importe quel téléphone"], ["**114**", "Urgences par SMS, pour les personnes sourdes ou qui ne peuvent pas parler"]] },
            { t: "definition", terme: "PLS (position latérale de sécurité)", md: "La position sur le **côté** dans laquelle on place une personne **inconsciente qui respire**, en attendant les secours : sa langue ne bloque pas ses voies respiratoires et, si elle vomit, elle ne s'étouffe pas." },
            { t: "verifie", q: "Quel numéro d'urgence européen peut-on appeler depuis n'importe quel téléphone ?", choix: ["15", "17", "112", "114"], bonne: 2, explication: "Le 112 fonctionne dans toute l'Union européenne. En France, le 15 joint directement le SAMU." },
          ],
        },
      ],
      bilan: "Le sport transmet des valeurs : respect, égalité, inclusion. Les faire vivre, c'est tenir son rôle, ouvrir le jeu à chacun et savoir protéger, alerter et secourir.",
    },
  },
};
