// Cours ÉCLORE — 4e Technologie. Schéma : docs/COURS.md
export default {
  id: "4e-technologie",
  chapitres: {
    "4e-technologie-01-systemes-automatises": {
      accroche: "Il est 14 h, le soleil tape sur la baie vitrée et personne n'est à la maison. Pourtant, le store descend tout seul, puis remonte quand le vent se lève. Qui a pris la décision ? Un capteur, une carte programmable et un moteur, qui travaillent ensemble.",
      objectifs: [
        "Reconnaître les capteurs, les actionneurs et l'interface de commande d'un système automatisé",
        "Décrire la chaîne d'information et la chaîne d'énergie d'un objet technique",
        "Expliquer comment fonctionne un objet connecté de la maison",
      ],
      sections: [
        {
          titre: "Des systèmes qui agissent seuls",
          blocs: [
            { t: "texte", md: "Une porte de supermarché qui s'ouvre à ton approche, un lampadaire qui s'allume à la tombée de la nuit, un radiateur qui se coupe quand la pièce est chaude : aucun humain n'appuie sur un bouton. Ces objets **captent** une information, la **comparent** à une consigne grâce à un programme, puis **agissent**." },
            { t: "definition", terme: "Système automatisé", md: "Un système qui réalise des actions **sans intervention humaine**, à partir d'informations captées et d'un **programme**. L'humain intervient seulement pour régler les consignes (une température, une heure, un seuil de luminosité)." },
            { t: "definition", terme: "Domotique", md: "L'ensemble des techniques qui **automatisent le logement** : chauffage, éclairage, volets et stores, alarme, arrosage. Le mot vient du latin *domus*, « la maison »." },
            { t: "savais-tu", md: "Un store bien réglé peut éviter une bonne partie de la chaleur qui entre par une fenêtre en été. La domotique ne sert donc pas seulement au confort : elle aide aussi à économiser l'énergie de la climatisation." },
          ],
        },
        {
          titre: "Capteurs, actionneurs et interface",
          blocs: [
            { t: "definition", terme: "Capteur", md: "Un composant qui transforme une **grandeur physique** (température, luminosité, présence, humidité, distance) en un **signal électrique** que la carte programmable peut lire. C'est l'organe des sens du système." },
            { t: "definition", terme: "Actionneur", md: "Un composant qui **réalise l'action** demandée : moteur, **servomoteur** (moteur qui tourne jusqu'à un angle précis, par exemple 90°), DEL, relais, buzzer, électrovanne (robinet commandé électriquement)." },
            { t: "tableau", titre: "Quelques capteurs et actionneurs de la maison", entetes: ["Composant", "Rôle", "Ce qu'il capte ou produit"], lignes: [["Photorésistance", "capteur", "la **luminosité**"], ["Thermistance, sonde", "capteur", "la **température**"], ["Détecteur infrarouge", "capteur", "la **présence** d'une personne qui bouge"], ["Hygromètre", "capteur", "l'**humidité** de l'air ou du sol"], ["Capteur à ultrasons", "capteur", "une **distance**"], ["Anémomètre", "capteur", "la vitesse du **vent**"], ["Moteur, servomoteur", "actionneur", "un **mouvement**"], ["DEL, buzzer", "actionneur", "de la **lumière**, un **son**"], ["Électrovanne", "actionneur", "l'ouverture d'un **circuit d'eau**"]] },
            { t: "attention", md: "Une **DEL** n'est pas un capteur : elle ne mesure rien, elle **produit** de la lumière. C'est un actionneur. Pose-toi toujours la question : ce composant **reçoit** une information du monde extérieur ou **agit** sur lui ?" },
            { t: "texte", md: "Entre l'utilisateur et le système, il y a l'**interface de commande** : boutons, télécommande, écran tactile, application sur smartphone. C'est par elle que tu donnes tes consignes, par exemple « ferme le store à 22 h »." },
            { t: "verifie", q: "Quel composant détecte le passage d'une personne dans un couloir ?", choix: ["Une DEL", "Un détecteur de présence infrarouge", "Un servomoteur", "Un relais"], bonne: 1, explication: "Le détecteur infrarouge capte la chaleur d'un corps qui bouge : c'est un capteur. La DEL, le servomoteur et le relais sont des actionneurs ou des composants de commande." },
          ],
        },
        {
          titre: "Deux chaînes qui travaillent ensemble",
          blocs: [
            { t: "propriete", titre: "Chaîne d'information et chaîne d'énergie", md: "La **chaîne d'information** décide : **acquérir** (capteur) → **traiter** (carte programmable) → **communiquer** (envoyer un ordre).\n\nLa **chaîne d'énergie** agit : **alimenter** (pile, batterie, secteur) → **distribuer** (relais, transistor) → **convertir** (moteur, DEL) → **transmettre** (engrenages, courroie, poulie)." },
            { t: "schema", titre: "Les deux chaînes d'un store automatique", legende: "En haut, l'information circule et aboutit à un ordre. En bas, l'énergie électrique est dosée, transformée en mouvement, puis transmise à la toile du store.", svg: `<svg viewBox="0 0 400 260"><text class="texte-pigment" x="10" y="18">Chaîne d'information</text><rect class="aplat" x="30" y="28" width="100" height="36" rx="6"/><rect class="trait" x="30" y="28" width="100" height="36" rx="6" fill="none"/><text class="texte" x="80" y="51" text-anchor="middle">Acquérir</text><rect class="aplat" x="150" y="28" width="100" height="36" rx="6"/><rect class="trait" x="150" y="28" width="100" height="36" rx="6" fill="none"/><text class="texte" x="200" y="51" text-anchor="middle">Traiter</text><rect class="aplat" x="270" y="28" width="100" height="36" rx="6"/><rect class="trait" x="270" y="28" width="100" height="36" rx="6" fill="none"/><text class="texte" x="320" y="51" text-anchor="middle">Communiquer</text><line class="trait" x1="130" y1="46" x2="148" y2="46" marker-end="url(#fl)"/><line class="trait" x1="250" y1="46" x2="268" y2="46" marker-end="url(#fl)"/><text class="texte-petit" x="80" y="80" text-anchor="middle">capteur de lumière</text><text class="texte-petit" x="200" y="80" text-anchor="middle">carte programmable</text><text class="texte-petit" x="320" y="80" text-anchor="middle">ordre envoyé</text><path d="M320 88 L320 118 L144 118 L144 146" fill="none" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><text class="texte-pigment" x="232" y="111" text-anchor="middle">ordre</text><text class="texte-pigment" x="10" y="140">Chaîne d'énergie</text><rect class="aplat-papier" x="6" y="150" width="82" height="36" rx="6"/><rect class="trait" x="6" y="150" width="82" height="36" rx="6" fill="none"/><text class="texte" x="47" y="173" text-anchor="middle">Alimenter</text><rect class="aplat-papier" x="103" y="150" width="82" height="36" rx="6"/><rect class="trait" x="103" y="150" width="82" height="36" rx="6" fill="none"/><text class="texte" x="144" y="173" text-anchor="middle">Distribuer</text><rect class="aplat-papier" x="200" y="150" width="82" height="36" rx="6"/><rect class="trait" x="200" y="150" width="82" height="36" rx="6" fill="none"/><text class="texte" x="241" y="173" text-anchor="middle">Convertir</text><rect class="aplat-papier" x="297" y="150" width="82" height="36" rx="6"/><rect class="trait" x="297" y="150" width="82" height="36" rx="6" fill="none"/><text class="texte" x="338" y="173" text-anchor="middle">Transmettre</text><line class="trait" x1="88" y1="168" x2="101" y2="168" marker-end="url(#fl)"/><line class="trait" x1="185" y1="168" x2="198" y2="168" marker-end="url(#fl)"/><line class="trait" x1="282" y1="168" x2="295" y2="168" marker-end="url(#fl)"/><text class="texte-petit" x="47" y="202" text-anchor="middle">secteur 230 V</text><text class="texte-petit" x="144" y="202" text-anchor="middle">relais</text><text class="texte-petit" x="241" y="202" text-anchor="middle">moteur</text><text class="texte-petit" x="338" y="202" text-anchor="middle">courroie</text><line class="trait" x1="338" y1="210" x2="338" y2="230" marker-end="url(#fl)"/><text class="texte-main" x="338" y="252" text-anchor="middle">le store descend</text></svg>` },
            { t: "exemple", titre: "Le store automatique, fonction par fonction", etapes: ["**Acquérir** : la photorésistance mesure une forte luminosité.", "**Traiter** : la carte compare la valeur au seuil réglé et décide de descendre le store.", "**Communiquer** : la carte envoie un ordre au relais.", "**Alimenter** : le secteur fournit l'énergie électrique.", "**Distribuer** : le relais se ferme et laisse passer le courant vers le moteur.", "**Convertir** : le moteur transforme l'énergie électrique en mouvement de rotation.", "**Transmettre** : la courroie entraîne l'axe qui enroule ou déroule la toile."] },
            { t: "astuce", md: "Pour ne jamais confondre : la chaîne d'information **pense** (3 verbes : A-T-C), la chaîne d'énergie **muscle** (4 verbes : A-D-C-T). Le relais et le transistor sont des « robinets » à courant : ils **distribuent**, ils ne transforment rien." },
            { t: "verifie", q: "Dans un store automatique, le moteur qui enroule la toile assure quelle fonction ?", choix: ["Acquérir", "Distribuer", "Convertir", "Transmettre"], bonne: 2, explication: "Le moteur transforme l'énergie électrique en énergie mécanique (rotation) : il **convertit**. C'est ensuite la courroie ou l'engrenage qui transmet ce mouvement à la toile." },
          ],
        },
        {
          titre: "Les objets connectés de la maison",
          blocs: [
            { t: "definition", terme: "Objet connecté", md: "Un objet qui **échange des données par un réseau** (Wi-Fi, Bluetooth, Internet). On peut le **piloter** et le **surveiller à distance**, souvent avec une application sur smartphone." },
            { t: "exemple", titre: "Le thermostat connecté", md: "Sa **sonde** mesure la température du salon (acquérir). Son **microcontrôleur** compare cette mesure à la consigne, par exemple 19 °C (traiter). Il envoie l'ordre d'allumer ou d'éteindre la **chaudière** (communiquer).\n\nComme il est relié à Internet par la box, tu peux changer la consigne depuis ton smartphone, même à l'autre bout du monde : l'application envoie la nouvelle valeur à un serveur, qui la transmet au thermostat." },
            { t: "texte", md: "Certains systèmes combinent plusieurs informations. Une lampe de jardin qui doit s'allumer **seulement s'il fait nuit et si quelqu'un passe** a besoin de **deux capteurs** : un capteur de luminosité et un détecteur de présence. Le programme vérifie les deux conditions à la fois." },
            { t: "verifie", q: "Pourquoi peut-on régler un thermostat connecté depuis l'étranger ?", choix: ["Parce qu'il possède une très longue télécommande", "Parce qu'il échange des données par Internet", "Parce qu'il fonctionne sur pile"], bonne: 1, explication: "Le thermostat est relié à Internet par la box : l'application du smartphone peut lui envoyer une nouvelle consigne de n'importe où, tant qu'il y a une connexion." },
          ],
        },
      ],
      bilan: "Un système automatisé capte (capteur), décide (programme) et agit (actionneur) : la chaîne d'information donne les ordres, la chaîne d'énergie les exécute.",
    },
    "4e-technologie-02-programmation": {
      accroche: "Un robot aspirateur traverse ton salon, frôle le canapé, fait demi-tour devant l'escalier. Il n'a pas de cerveau, seulement quelques lignes de programme : « si obstacle, alors tourner ». Ces lignes, tu peux apprendre à les écrire.",
      objectifs: [
        "Lire et construire un algorigramme",
        "Utiliser des variables, des boucles, des conditions et des événements",
        "Programmer un système qui réagit à ses capteurs, puis le déboguer",
      ],
      sections: [
        {
          titre: "Dessiner un algorithme : l'algorigramme",
          blocs: [
            { t: "texte", md: "Avant d'écrire un programme, on réfléchit à **ce qu'il doit faire, dans quel ordre**. Cette suite d'instructions s'appelle un **algorithme**. Pour la rendre lisible par tous, on la dessine avec des symboles normalisés." },
            { t: "definition", terme: "Algorigramme", md: "La représentation graphique d'un algorithme. Chaque forme a un sens précis, et des **flèches** indiquent l'ordre dans lequel on lit les instructions." },
            { t: "tableau", titre: "Les symboles de l'algorigramme", entetes: ["Symbole", "Signification", "Exemple"], lignes: [["**Ovale**", "début ou fin", "« Début »"], ["**Rectangle**", "une action", "« Allumer la DEL »"], ["**Losange**", "un test : question à réponse oui / non", "« Distance < 15 cm ? »"], ["**Flèche**", "le sens de lecture", "de haut en bas"]] },
            { t: "schema", titre: "Algorigramme d'un arrosage automatique", legende: "Le losange pose une question : deux flèches en sortent, une pour « oui », une pour « non ». Les deux chemins finissent par se rejoindre.", svg: `<svg viewBox="0 0 400 290"><ellipse class="aplat-papier" cx="200" cy="22" rx="50" ry="16"/><ellipse class="trait" cx="200" cy="22" rx="50" ry="16" fill="none"/><text class="texte" x="200" y="27" text-anchor="middle">Début</text><line class="trait" x1="200" y1="38" x2="200" y2="56" marker-end="url(#fl)"/><rect class="aplat" x="110" y="58" width="180" height="30"/><rect class="trait" x="110" y="58" width="180" height="30" fill="none"/><text class="texte" x="200" y="78" text-anchor="middle">Lire l'humidité du sol</text><line class="trait" x1="200" y1="88" x2="200" y2="106" marker-end="url(#fl)"/><polygon class="aplat" points="200,108 290,140 200,172 110,140"/><polygon class="trait" points="200,108 290,140 200,172 110,140" fill="none"/><text class="texte" x="200" y="145" text-anchor="middle">humidité &lt; 30 % ?</text><path class="trait" d="M290 140 L340 140 L340 196" fill="none" marker-end="url(#fl)"/><text class="texte-pigment" x="304" y="132">oui</text><rect class="aplat" x="285" y="198" width="110" height="30"/><rect class="trait" x="285" y="198" width="110" height="30" fill="none"/><text class="texte" x="340" y="218" text-anchor="middle">Arroser 10 s</text><path class="trait" d="M340 228 L340 262 L254 262" fill="none" marker-end="url(#fl)"/><line class="trait" x1="200" y1="172" x2="200" y2="244" marker-end="url(#fl)"/><text class="texte-pigment" x="208" y="200">non</text><ellipse class="aplat-papier" cx="200" cy="262" rx="50" ry="16"/><ellipse class="trait" cx="200" cy="262" rx="50" ry="16" fill="none"/><text class="texte" x="200" y="267" text-anchor="middle">Fin</text></svg>` },
            { t: "verifie", q: "Dans un algorigramme, que représente un losange ?", choix: ["Le début du programme", "Une action à réaliser", "Un test dont la réponse est oui ou non"], bonne: 2, explication: "Le losange pose une question (« humidité < 30 % ? ») : selon la réponse, le programme suit la flèche « oui » ou la flèche « non ». L'ovale marque le début et la fin, le rectangle une action." },
          ],
        },
        {
          titre: "Les briques d'un programme",
          blocs: [
            { t: "definition", terme: "Variable", md: "Une **case mémoire qui porte un nom** et dont la **valeur peut changer** pendant le programme. Exemples : « compteur », « distance », « score »." },
            { t: "liste", titre: "Quatre structures à connaître", items: ["**Boucle** : répète des instructions. « Répéter 10 fois », « répéter jusqu'à… » ou « répéter indéfiniment ».", "**Condition** : choisit entre deux chemins. « Si … alors … sinon … ».", "**Événement** : déclenche un script. « Quand le drapeau vert est cliqué », « quand le bouton A est pressé ».", "**Instruction** simple : une action, comme « avancer de 10 cm » ou « allumer la DEL »."] },
            { t: "exemple", titre: "Suivre une variable pas à pas", etapes: ["Au départ, compteur = 0.", "Le programme exécute « répéter 5 fois : ajouter 2 à compteur ».", "Tour 1 : 2 ; tour 2 : 4 ; tour 3 : 6 ; tour 4 : 8 ; tour 5 : 10.", "Valeur finale : **compteur = 10**, soit 5 × 2."] },
            { t: "attention", md: "Une boucle « **répéter indéfiniment** » ne s'arrête jamais toute seule : elle tourne tant que la carte est alimentée. C'est voulu pour un système qui surveille en permanence (alarme, thermostat). Pour un nombre précis de tours, choisis « répéter 10 fois »." },
            { t: "etapes", titre: "Un cycle programmé : le feu tricolore", cycle: true, items: [{ titre: "Vert", md: "Les voitures passent." }, { titre: "Orange", md: "Elles s'arrêtent si possible." }, { titre: "Rouge", md: "Elles attendent." }, { titre: "Retour au vert", md: "Une boucle « répéter indéfiniment » relance le cycle." }] },
          ],
        },
        {
          titre: "Des capteurs en entrée, des actionneurs en sortie",
          blocs: [
            { t: "texte", md: "Programmer un système, c'est relier le monde réel au programme. La carte **lit les capteurs** sur ses broches d'**entrée**, **compare** les valeurs à des **seuils**, puis **commande les actionneurs** sur ses broches de **sortie**.\n\nEn classe, tu programmes avec des **langages par blocs** comme **Scratch** ou **mBlock** : on assemble des blocs au lieu de taper du code. Le programme est ensuite **téléversé** (copié) dans une carte **Arduino** ou **micro:bit**, qui l'exécute." },
            { t: "exemple", titre: "Le robot qui évite les obstacles", md: "« **Répéter indéfiniment** : **si** distance < 15 cm **alors** reculer puis tourner à droite, **sinon** avancer. »\n\nLa distance vient du **capteur à ultrasons** (entrée) ; les **moteurs** des roues sont les actionneurs (sortie). On reconnaît une boucle qui contient une condition." },
            { t: "exemple", titre: "Lire une condition avec une vraie valeur", md: "Programme d'un store : « si luminosité > 800 alors descendre le store ». Le capteur indique **650**. Or 650 n'est pas supérieur à 800 : la condition est **fausse**, le store **ne bouge pas**." },
            { t: "verifie", q: "Un robot exécute « répéter 4 fois : avancer de 10 cm ». Quelle distance parcourt-il ?", choix: ["10 cm", "14 cm", "40 cm", "Il ne s'arrête jamais"], bonne: 2, explication: "La boucle répète 4 fois l'avance de 10 cm : 4 × 10 = 40 cm. Elle s'arrête après le 4e tour, car ce n'est pas une boucle infinie." },
          ],
        },
        {
          titre: "Déboguer comme un pro",
          blocs: [
            { t: "definition", terme: "Déboguer", md: "Chercher et **corriger les erreurs** (les « bugs ») d'un programme, en le testant **étape par étape**." },
            { t: "etapes", titre: "Une méthode de débogage", items: [{ titre: "Observer", md: "Décrire précisément ce qui ne va pas : « le robot fonce dans le mur »." }, { titre: "Supposer", md: "Lister les causes possibles : seuil, capteur, branchement." }, { titre: "Tester une hypothèse", md: "Afficher la valeur du capteur à l'écran, tester une seule chose à la fois." }, { titre: "Corriger", md: "Modifier le programme ou le montage." }, { titre: "Vérifier", md: "Relancer le test pour s'assurer que le problème a disparu." }] },
            { t: "exemple", titre: "Le robot qui ne tourne jamais", md: "Il doit tourner quand la distance est inférieure à 15 cm, mais il fonce dans le mur. Cause probable : la **condition est mal écrite** (signe > au lieu de <, ou seuil de 1,5 au lieu de 15) ou le **capteur est mal branché**. On affiche la distance mesurée : si elle reste à 0, c'est le branchement." },
            { t: "astuce", md: "Ne change jamais trois choses à la fois : si ça remarche, tu ne sauras pas laquelle a réglé le problème. Une modification, un test." },
          ],
        },
      ],
      bilan: "Un programme lit des entrées, prend des décisions avec des conditions, répète avec des boucles et commande des sorties ; et quand il se trompe, on le débogue avec méthode.",
    },
    "4e-technologie-03-reseaux-internet": {
      accroche: "Tu cliques sur un lien : moins d'une seconde plus tard, une page stockée sur un serveur à des centaines de kilomètres s'affiche sur ton écran. Entre les deux, ta demande a traversé ta box, des câbles, des routeurs… et un annuaire géant.",
      objectifs: [
        "Identifier les composants d'un réseau local et leur rôle",
        "Comprendre les adresses IP et MAC, le DNS et les protocoles du Web",
        "Comparer des modes de connexion et calculer avec des débits",
      ],
      sections: [
        {
          titre: "Le réseau de la maison",
          blocs: [
            { t: "definition", terme: "Réseau local", md: "Un ensemble d'appareils d'un **même lieu** (maison, collège) reliés entre eux pour échanger des données, par des câbles **Ethernet** ou par ondes **Wi-Fi**." },
            { t: "tableau", titre: "Les équipements du réseau", entetes: ["Équipement", "Rôle"], lignes: [["**Commutateur** (switch)", "relie les appareils du réseau local et envoie chaque message au bon destinataire"], ["**Routeur**", "relie le réseau local aux **autres réseaux**, donc à Internet"], ["**Borne Wi-Fi**", "connecte les appareils sans fil"], ["**Box**", "réunit routeur, commutateur et borne Wi-Fi dans un seul boîtier"]] },
            { t: "schema", titre: "Un réseau domestique", legende: "La box relie le réseau local à Internet. Chaque appareil reçoit une adresse IP du réseau local (192.168.1.…).", svg: `<svg viewBox="0 0 400 280"><ellipse class="aplat-papier" cx="200" cy="30" rx="70" ry="20"/><ellipse class="trait" cx="200" cy="30" rx="70" ry="20" fill="none"/><text class="texte" x="200" y="35" text-anchor="middle">Internet</text><line class="trait" x1="200" y1="50" x2="200" y2="80"/><text class="texte-petit" x="208" y="69">fibre</text><rect class="aplat" x="120" y="80" width="160" height="56" rx="6"/><rect class="trait" x="120" y="80" width="160" height="56" rx="6" fill="none"/><text class="texte" x="200" y="98" text-anchor="middle">Box</text><text class="texte-petit" x="200" y="113" text-anchor="middle">routeur, commutateur,</text><text class="texte-petit" x="200" y="127" text-anchor="middle">borne Wi-Fi</text><text class="texte-pigment" x="286" y="112">192.168.1.1</text><line class="trait" x1="160" y1="136" x2="70" y2="196"/><line class="trait" x1="200" y1="136" x2="200" y2="196"/><line class="pointille" x1="240" y1="136" x2="330" y2="196"/><text class="texte-petit" x="108" y="160" text-anchor="end">Ethernet</text><text class="texte-petit" x="206" y="172">Ethernet</text><text class="texte-petit" x="292" y="160">Wi-Fi</text><rect class="aplat-papier" x="20" y="196" width="100" height="34" rx="4"/><rect class="trait" x="20" y="196" width="100" height="34" rx="4" fill="none"/><text class="texte" x="70" y="218" text-anchor="middle">Ordinateur</text><rect class="aplat-papier" x="150" y="196" width="100" height="34" rx="4"/><rect class="trait" x="150" y="196" width="100" height="34" rx="4" fill="none"/><text class="texte" x="200" y="218" text-anchor="middle">Console</text><rect class="aplat-papier" x="280" y="196" width="100" height="34" rx="4"/><rect class="trait" x="280" y="196" width="100" height="34" rx="4" fill="none"/><text class="texte" x="330" y="218" text-anchor="middle">Smartphone</text><text class="texte-pigment" x="70" y="250" text-anchor="middle">192.168.1.20</text><text class="texte-pigment" x="200" y="250" text-anchor="middle">192.168.1.21</text><text class="texte-pigment" x="330" y="250" text-anchor="middle">192.168.1.22</text><text class="texte-petit" x="200" y="274" text-anchor="middle">trait plein : câble ; pointillé : ondes radio</text></svg>` },
            { t: "verifie", q: "Quel équipement relie le réseau local de la maison à Internet ?", choix: ["Le commutateur", "Le routeur (dans la box)", "La carte réseau de l'ordinateur", "L'imprimante"], bonne: 1, explication: "Le commutateur relie les appareils **entre eux** ; le **routeur** fait le lien avec les **autres réseaux**, donc avec Internet. Dans une maison, il est intégré à la box." },
          ],
        },
        {
          titre: "Des adresses pour se retrouver",
          blocs: [
            { t: "definition", terme: "Adresse IP", md: "Le numéro qui **identifie un appareil sur un réseau**, comme une adresse postale. Elle s'écrit avec quatre nombres de 0 à 255 séparés par des points : **192.168.1.20**. Elle peut changer quand l'appareil se connecte à un autre réseau." },
            { t: "definition", terme: "Adresse MAC", md: "L'identifiant de la **carte réseau**, **fixé par le fabricant** : 6 paires de caractères, par exemple 3C:22:FB:7A:10:9E. Elle ne dépend pas du réseau où l'on se trouve." },
            { t: "attention", md: "Ne confonds pas les deux : l'adresse **IP** est attribuée par le réseau (souvent par la box) et peut changer ; l'adresse **MAC** est gravée dans la carte réseau par le **fabricant**. Ce n'est pas le fournisseur d'accès qui la donne." },
            { t: "definition", terme: "DNS", md: "Le *Domain Name System*, l'**annuaire d'Internet** : il traduit un **nom de domaine** facile à retenir (www.education.gouv.fr) en **adresse IP** du serveur, que les machines comprennent." },
          ],
        },
        {
          titre: "Le voyage d'une page Web",
          blocs: [
            { t: "definition", terme: "Modèle client / serveur", md: "Le **client** (ton navigateur) envoie une **requête** ; le **serveur** (un ordinateur puissant, allumé en permanence) renvoie la **réponse** : la page, une image, une vidéo." },
            { t: "schema", titre: "Trajet d'une requête Web", legende: "1 et 2 : le navigateur demande au DNS l'adresse IP du site. 3 et 4 : il envoie sa requête au serveur Web, qui renvoie la page. Tout passe par la box et Internet.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat" x="10" y="90" width="100" height="52" rx="6"/><rect class="trait" x="10" y="90" width="100" height="52" rx="6" fill="none"/><text class="texte" x="60" y="112" text-anchor="middle">Client</text><text class="texte-petit" x="60" y="129" text-anchor="middle">navigateur</text><rect class="aplat-papier" x="270" y="12" width="120" height="46" rx="6"/><rect class="trait" x="270" y="12" width="120" height="46" rx="6" fill="none"/><text class="texte" x="330" y="32" text-anchor="middle">Serveur DNS</text><text class="texte-petit" x="330" y="49" text-anchor="middle">annuaire</text><rect class="aplat-papier" x="270" y="172" width="120" height="50" rx="6"/><rect class="trait" x="270" y="172" width="120" height="50" rx="6" fill="none"/><text class="texte" x="330" y="193" text-anchor="middle">Serveur Web</text><text class="texte-petit" x="330" y="210" text-anchor="middle">203.0.113.5</text><line x1="110" y1="96" x2="266" y2="38" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><text class="texte-petit" x="150" y="50" text-anchor="middle">1. www.college.fr ?</text><line class="trait" x1="270" y1="52" x2="114" y2="110" marker-end="url(#fl)"/><text class="texte-petit" x="214" y="104" text-anchor="middle">2. 203.0.113.5</text><line x1="110" y1="124" x2="266" y2="180" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><text class="texte-petit" x="225" y="136" text-anchor="middle">3. requête HTTPS</text><line class="trait" x1="270" y1="198" x2="114" y2="140" marker-end="url(#fl)"/><text class="texte-petit" x="160" y="196" text-anchor="middle">4. la page</text></svg>` },
            { t: "tableau", titre: "Quelques protocoles et sigles", entetes: ["Sigle", "Rôle"], lignes: [["**IP**", "adresser et acheminer les données d'un appareil à l'autre"], ["**DNS**", "traduire un nom de domaine en adresse IP"], ["**HTTP**", "échanger les pages Web entre navigateur et serveur"], ["**HTTPS**", "même rôle, mais les échanges sont **chiffrés** (cadenas)"], ["**Wi-Fi**", "relier un appareil au réseau local par ondes radio"]] },
            { t: "attention", md: "Le **cadenas** de HTTPS signifie que les échanges sont **chiffrés** : personne ne peut les lire en chemin. Il ne prouve pas que le site est honnête ! Un faux site peut aussi avoir un cadenas." },
            { t: "verifie", q: "Quel est le rôle du DNS ?", choix: ["Chiffrer les échanges", "Traduire un nom de domaine en adresse IP", "Stocker les pages Web", "Relier les câbles de la maison"], bonne: 1, explication: "Le DNS est l'annuaire d'Internet : il donne l'adresse IP qui correspond au nom tapé. C'est HTTPS qui chiffre, et c'est le serveur Web qui stocke les pages." },
          ],
        },
        {
          titre: "Débits et modes de connexion",
          blocs: [
            { t: "propriete", titre: "Bits et octets", md: "Le **débit** est la quantité de données transmise par seconde. Il se mesure en **bits par seconde** : kbit/s, **Mbit/s**, Gbit/s (1 Gbit/s = 1 000 Mbit/s).\n\nLa taille des fichiers se mesure en **octets** et ==1 octet = 8 bits==. Donc 8 Mbit/s = 1 Mo/s." },
            { t: "exemple", titre: "Combien de temps pour télécharger 100 Mo à 50 Mbit/s ?", etapes: ["On convertit en bits : 100 Mo × 8 = 800 Mbit.", "On divise par le débit : 800 ÷ 50 = 16.", "Il faut **16 secondes**.", "Autre sens : 80 Mbit/s ÷ 8 = 10 Mo reçus chaque seconde."] },
            { t: "graphique", type: "barres", titre: "Débits descendants typiques selon la connexion", unite: "Mbit/s", donnees: [{ label: "ADSL", valeur: 15 }, { label: "4G", valeur: 50 }, { label: "5G", valeur: 300 }, { label: "Fibre", valeur: 1000 }] },
            { t: "texte", md: "Un **câble Ethernet** offre une connexion plus **stable** et plus rapide que le Wi-Fi, dont les ondes sont gênées par les murs et partagées entre tous les appareils. Pour une console posée près de la box, le câble est donc le bon choix.\n\nLe débit annoncé est un **maximum**. Le soir, quand tout le monde regarde des vidéos, le réseau est **partagé** : la vidéo peut saccader même avec la fibre, surtout en Wi-Fi loin de la box." },
            { t: "definition", terme: "Cloud", md: "Des **serveurs distants**, accessibles par Internet, qui stockent nos fichiers (photos, documents) ou font tourner des services (messagerie, jeux). « Dans le nuage » veut dire : sur l'ordinateur de quelqu'un d'autre, quelque part dans le monde." },
          ],
        },
      ],
      bilan: "Un réseau, ce sont des appareils qui ont une adresse, des équipements qui aiguillent, et des protocoles communs : le DNS trouve l'adresse, le client demande, le serveur répond.",
    },
    "4e-technologie-04-donnees-securite": {
      accroche: "Ta carte mémoire de 32 Go est pleine, ton téléphone vient de tomber dans l'eau, et un message te demande ton mot de passe « pour éviter la suppression de ton compte ». Trois situations, trois réflexes à connaître pour protéger tes données.",
      objectifs: [
        "Reconnaître les formats de fichiers et calculer leur poids",
        "Protéger ses données : sauvegarde, mot de passe, hameçonnage",
        "Connaître ses droits et ses devoirs : données personnelles, RGPD, droit d'auteur",
      ],
      sections: [
        {
          titre: "Chaque fichier a son format",
          blocs: [
            { t: "definition", terme: "Extension", md: "Les lettres placées après le point dans le nom d'un fichier : vacances**.jpg**, exposé**.pdf**. Elles indiquent le **format**, c'est-à-dire la façon dont les données sont rangées, et donc le logiciel capable d'ouvrir le fichier." },
            { t: "tableau", titre: "Formats courants", entetes: ["Extension", "Contenu", "À savoir"], lignes: [["**.jpg**", "image, photo", "compressée, très légère"], ["**.png**", "image, dessin, capture d'écran", "sans perte de qualité, gère la transparence"], ["**.pdf**", "document mis en page", "s'affiche pareil sur tous les appareils"], ["**.mp3**", "son", "compressé"], ["**.wav**", "son", "non compressé, lourd"], ["**.mp4**", "vidéo", "compressée"], ["**.csv**", "tableau de données", "du texte, valeurs séparées par des virgules ou des points-virgules"]] },
            { t: "exemple", titre: "Pourquoi un mp3 est-il si léger ?", md: "La même chanson de 3 minutes pèse **30 Mo** en wav et **3 Mo** en mp3. Le format mp3 est **compressé** : il supprime les sons que l'oreille perçoit mal et range les données de façon plus économe. Le fichier est dix fois plus léger, avec une petite perte de qualité." },
            { t: "graphique", type: "barres", titre: "Poids de quelques fichiers (ordres de grandeur)", unite: "Mo", donnees: [{ label: "Page de texte", valeur: 0.05 }, { label: "Chanson mp3", valeur: 3 }, { label: "Photo jpg", valeur: 4 }, { label: "Chanson wav", valeur: 30 }, { label: "1 min de vidéo HD", valeur: 100 }] },
          ],
        },
        {
          titre: "Mesurer et calculer le poids des fichiers",
          blocs: [
            { t: "propriete", titre: "Les unités de stockage", md: "Le poids d'un fichier se mesure en **octets**. On passe d'une unité à la suivante en multipliant par **1 000**.\n\nEn informatique, on rencontre aussi 1 024 au lieu de 1 000 (on parle alors de Kio, Mio, Gio) : c'est pour cela qu'une clé de 32 Go affiche un peu moins de place sur l'ordinateur." },
            { t: "tableau", titre: "De l'octet au téraoctet", entetes: ["Unité", "Symbole", "Valeur", "Ce que ça représente"], lignes: [["octet", "o", "8 bits", "une lettre"], ["kilooctet", "Ko", "1 000 octets", "un court texte"], ["mégaoctet", "Mo", "1 000 Ko", "une photo, une chanson"], ["gigaoctet", "Go", "1 000 Mo", "un film"], ["téraoctet", "To", "1 000 Go", "un disque dur entier"]] },
            { t: "exemple", titre: "Combien de photos sur une carte de 32 Go ?", etapes: ["On met tout dans la même unité : 32 Go = 32 × 1 000 = 32 000 Mo.", "Chaque photo pèse 4 Mo : 32 000 ÷ 4 = 8 000.", "La carte contient **8 000 photos**.", "Même méthode pour un envoi : 1,2 Go = 1 200 Mo ; à 10 Mo par seconde, il faut 1 200 ÷ 10 = **120 s**, soit 2 minutes."] },
            { t: "verifie", q: "Combien de Mo y a-t-il dans 3 Go (avec 1 Go = 1 000 Mo) ?", choix: ["0,003 Mo", "300 Mo", "3 000 Mo", "3 000 000 Mo"], bonne: 2, explication: "On passe d'une grande unité (Go) à une plus petite (Mo) : on **multiplie** par 1 000. 3 × 1 000 = 3 000 Mo." },
          ],
        },
        {
          titre: "Protéger ses données",
          blocs: [
            { t: "definition", terme: "Sauvegarde", md: "Une **copie de tes fichiers sur un autre support** (disque externe, clé USB, cloud) pour les retrouver en cas de panne, de vol ou de perte. Une seule copie sur un seul appareil, c'est déjà un fichier en danger." },
            { t: "liste", titre: "Un mot de passe robuste", items: ["**Long** : 12 caractères ou plus. Une phrase de passe comme « 3Chats!dorment-sur-le-Toit » est longue et facile à retenir.", "**Varié** : majuscules, minuscules, chiffres et symboles.", "**Unique** : un mot de passe différent pour chaque compte.", "**Secret** : on ne le donne à personne, même à un ami."] },
            { t: "definition", terme: "Hameçonnage", md: "Ou *phishing* : un message (courriel, SMS) qui **imite** une organisation connue (banque, réseau social, collège) pour te pousser à **cliquer** et à **donner tes identifiants**. Il joue souvent sur l'urgence : « votre compte sera supprimé dans 24 h »." },
            { t: "astuce", md: "Face à un message inquiétant : vérifie l'**adresse de l'expéditeur**, ne clique sur **aucun lien**, ne donne **jamais** ton mot de passe. En cas de doute, va toi-même sur le site officiel en tapant son adresse, et parles-en à un adulte." },
            { t: "verifie", q: "Tu reçois : « Votre compte sera supprimé dans 24 h, cliquez ici et saisissez votre mot de passe. » Que fais-tu ?", choix: ["Je clique vite pour sauver mon compte", "Je réponds en demandant si c'est vrai", "Je ne clique pas, je vérifie l'expéditeur et je supprime le message"], bonne: 2, explication: "C'est un hameçonnage typique : urgence et demande de mot de passe. Aucun service sérieux ne te demande ton mot de passe par message. Répondre confirme seulement que ton adresse est active." },
          ],
        },
        {
          titre: "Tes droits et tes devoirs en ligne",
          blocs: [
            { t: "definition", terme: "Donnée personnelle", md: "Toute information qui permet d'**identifier une personne**, directement ou indirectement : nom, adresse, photo, voix, numéro de téléphone, localisation." },
            { t: "propriete", titre: "Le RGPD", md: "Le **Règlement général sur la protection des données**, appliqué dans toute l'Union européenne depuis 2018, impose :\n• de demander ton **consentement** avant de collecter tes données ;\n• ton **droit d'accès** (savoir ce qu'on sait de toi) ;\n• ton **droit à l'effacement** (faire supprimer tes données).\n\nEn France, avant 15 ans, l'accord d'un parent est aussi nécessaire pour qu'un réseau social traite tes données." },
            { t: "definition", terme: "Identité numérique", md: "L'ensemble des **traces** que tu laisses en ligne : profils, photos, commentaires, mentions « j'aime ». Une photo supprimée peut avoir été **copiée** et rester visible ailleurs : réfléchis avant de publier." },
            { t: "texte", md: "Une photo, une musique ou un texte trouvés sur Internet sont **protégés par le droit d'auteur** par défaut, même sans mention. Pour les réutiliser dans un travail publié, il faut l'autorisation de l'auteur ou une **licence** qui le permet.\n\nLes licences **Creative Commons** précisent ce que l'auteur autorise : BY (citer l'auteur), NC (pas d'usage commercial), ND (pas de modification), SA (partager dans les mêmes conditions)." },
          ],
        },
      ],
      bilan: "Connaître le format et le poids de ses fichiers, les sauvegarder, verrouiller ses comptes et respecter les droits de chacun : c'est ça, être maître de ses données.",
    },
    "4e-technologie-05-materiaux-energie": {
      accroche: "La petite lampe solaire plantée dans le jardin ne coûte que quelques euros. Pourtant, elle cache un panneau qui capte la lumière, une batterie qui la garde pour la nuit, un capteur qui sait quand il fait sombre… et des matériaux choisis avec soin.",
      objectifs: [
        "Caractériser les propriétés des matériaux et justifier un choix",
        "Décrire les sources, le stockage et le rendement de l'énergie dans un objet",
        "Évaluer l'impact environnemental d'un objet sur tout son cycle de vie",
      ],
      sections: [
        {
          titre: "Choisir le bon matériau",
          blocs: [
            { t: "texte", md: "Un ingénieur ne choisit jamais un matériau « parce qu'il est beau ». Il compare ses **propriétés** aux exigences de l'objet : supporter un poids, résister aux rayures, rester léger, coûter peu." },
            { t: "tableau", titre: "Trois propriétés mécaniques", entetes: ["Propriété", "Définition", "Exemple"], lignes: [["**Résistance**", "supporter des efforts sans casser", "un câble d'acier qui porte une charge"], ["**Élasticité**", "reprendre sa forme après déformation", "un ressort, un élastique"], ["**Dureté**", "résister aux rayures et à la pénétration", "le verre d'un écran, un foret"]] },
            { t: "exemple", titre: "Le cadre d'un vélo de ville bon marché", md: "Acier : lourd, peu cher, très résistant. Aluminium : léger, prix moyen. Carbone : très léger, cher, fragile aux chocs.\n\nPour un vélo de ville **bon marché et solide**, le cahier des charges privilégie le prix et la résistance : on choisit l'**acier**. Le carbone serait réservé à un vélo de course." },
            { t: "definition", terme: "Matériau composite", md: "L'**association de plusieurs matériaux** pour combiner leurs qualités. Le **béton armé** marie le béton (résiste à l'écrasement) et l'acier (résiste à l'étirement). La **fibre de carbone** noyée dans une résine est à la fois légère et rigide." },
            { t: "definition", terme: "Matériau intelligent", md: "Un matériau qui **change de propriété selon son environnement** : un **alliage à mémoire de forme** reprend sa forme quand on le chauffe ; un **verre photochromique** se teinte au soleil." },
          ],
        },
        {
          titre: "Produire et stocker l'énergie",
          blocs: [
            { t: "texte", md: "Les **énergies renouvelables** se reconstituent rapidement à l'échelle humaine : soleil, vent, eau, chaleur de la Terre, biomasse. Le pétrole, le charbon et le gaz, eux, ont mis des millions d'années à se former : ils ne sont pas renouvelables." },
            { t: "liste", items: ["Un **panneau photovoltaïque** convertit l'**énergie lumineuse** en **énergie électrique**.", "Une **éolienne** convertit l'énergie du **vent** (mouvement) en énergie électrique.", "Une **batterie** stocke l'énergie électrique sous forme **chimique**, puis la restitue à la demande."] },
            { t: "etapes", titre: "Le trajet de l'énergie dans une lampe solaire", items: [{ titre: "Le soleil", md: "Il fournit l'énergie lumineuse pendant la journée." }, { titre: "Le panneau", md: "Il convertit la lumière en électricité." }, { titre: "La batterie", md: "Elle stocke l'énergie sous forme chimique." }, { titre: "La DEL", md: "La nuit, un capteur de luminosité l'allume : elle convertit l'électricité en lumière." }] },
            { t: "savais-tu", md: "Pour une même masse, une batterie **lithium-ion** stocke environ quatre à cinq fois plus d'énergie qu'une batterie au **plomb**. C'est pour cela qu'elle équipe les smartphones et les vélos électriques, alors que le plomb reste dans les voitures pour le démarrage." },
          ],
        },
        {
          titre: "Le rendement : rien n'est parfait",
          blocs: [
            { t: "propriete", titre: "Rendement d'un convertisseur", md: "**Rendement = énergie utile ÷ énergie consommée** (on peut aussi utiliser les puissances). On l'exprime souvent en pourcentage.\n\nIl est ==toujours inférieur à 100 %== : une partie de l'énergie est « perdue », le plus souvent sous forme de **chaleur**." },
            { t: "exemple", titre: "Deux calculs de rendement", etapes: ["Un moteur reçoit 200 J d'énergie électrique et fournit 150 J d'énergie mécanique : 150 ÷ 200 = 0,75, soit **75 %**.", "Les 50 J restants sont dissipés en chaleur (le moteur chauffe).", "Une éolienne reçoit 2 000 W du vent, avec un rendement de 40 % : 2 000 × 0,40 = **800 W** électriques.", "Un panneau reçoit 2 W de lumière et fournit 0,4 W : 0,4 ÷ 2 = 0,2, soit **20 %**."] },
            { t: "graphique", type: "barres", titre: "Puissance consommée par différentes lampes pour éclairer autant (environ 800 lumens)", unite: "W", donnees: [{ label: "Incandescence", valeur: 60 }, { label: "Halogène", valeur: 52 }, { label: "Fluocompacte", valeur: 13 }, { label: "DEL", valeur: 9 }] },
            { t: "texte", md: "Pourquoi la vieille ampoule à incandescence consomme-t-elle autant ? Son filament doit être chauffé à blanc pour briller : plus de 90 % de l'énergie part en **chaleur**, pas en lumière. Son rendement est très faible. La DEL produit la même lumière en chauffant beaucoup moins." },
            { t: "verifie", q: "Un moteur reçoit 200 J et fournit 150 J d'énergie mécanique. Quel est son rendement ?", choix: ["50 %", "75 %", "133 %", "150 %"], bonne: 1, explication: "Rendement = utile ÷ consommée = 150 ÷ 200 = 0,75, soit 75 %. Un rendement supérieur à 100 % est impossible : un objet ne peut pas fournir plus d'énergie qu'il n'en reçoit." },
          ],
        },
        {
          titre: "Le cycle de vie d'un objet",
          blocs: [
            { t: "definition", terme: "Analyse de cycle de vie (ACV)", md: "Une méthode qui mesure les **impacts environnementaux** d'un objet à **chaque étape** de sa vie : consommation de matières et d'énergie, rejets de CO₂, pollution de l'eau, déchets." },
            { t: "schema", titre: "Les cinq étapes du cycle de vie", legende: "Chaque flèche est une étape qui consomme de l'énergie et des matières. Le recyclage referme la boucle : la matière récupérée évite une partie de l'extraction.", svg: `<svg viewBox="0 0 400 250"><rect class="aplat" x="148" y="20" width="104" height="30" rx="6"/><rect class="trait" x="148" y="20" width="104" height="30" rx="6" fill="none"/><text class="texte" x="200" y="40" text-anchor="middle">Extraction</text><rect class="aplat" x="281" y="87" width="104" height="30" rx="6"/><rect class="trait" x="281" y="87" width="104" height="30" rx="6" fill="none"/><text class="texte" x="333" y="107" text-anchor="middle">Fabrication</text><rect class="aplat" x="230" y="188" width="104" height="30" rx="6"/><rect class="trait" x="230" y="188" width="104" height="30" rx="6" fill="none"/><text class="texte" x="282" y="208" text-anchor="middle">Transport</text><rect class="aplat" x="66" y="188" width="104" height="30" rx="6"/><rect class="trait" x="66" y="188" width="104" height="30" rx="6" fill="none"/><text class="texte" x="118" y="208" text-anchor="middle">Utilisation</text><rect class="aplat-papier" x="15" y="87" width="104" height="30" rx="6"/><rect class="trait" x="15" y="87" width="104" height="30" rx="6" fill="none"/><text class="texte" x="67" y="107" text-anchor="middle">Fin de vie</text><line class="trait" x1="252" y1="42" x2="306" y2="84" marker-end="url(#fl)"/><line class="trait" x1="328" y1="117" x2="298" y2="185" marker-end="url(#fl)"/><line class="trait" x1="230" y1="203" x2="173" y2="203" marker-end="url(#fl)"/><line class="trait" x1="100" y1="188" x2="74" y2="120" marker-end="url(#fl)"/><path d="M90 87 Q100 45 145 36" fill="none" stroke="var(--pigment)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#fl-p)"/><text class="texte-pigment" x="88" y="52" text-anchor="end">recyclage</text><text class="texte" x="200" y="137" text-anchor="middle">Analyse de cycle de vie</text><text class="texte-petit" x="200" y="155" text-anchor="middle">énergie, eau, CO₂, déchets</text><text class="texte-petit" x="200" y="241" text-anchor="middle">à chaque étape, on mesure les impacts</text></svg>` },
            { t: "attention", md: "**Recyclable** ne veut pas dire **recyclé** ! Un objet recyclable jeté dans la mauvaise poubelle finit incinéré. Et même recyclé, il a déjà eu un impact lors de son extraction, de sa fabrication et de son transport : un objet recyclable n'a donc pas forcément un faible impact." },
            { t: "verifie", q: "Laquelle de ces sources d'énergie est renouvelable ?", choix: ["Le pétrole", "Le charbon", "Le vent", "Le gaz naturel"], bonne: 2, explication: "Le vent se renouvelle sans cesse grâce au soleil qui chauffe l'atmosphère. Pétrole, charbon et gaz sont des ressources fossiles qui ont mis des millions d'années à se former." },
          ],
        },
      ],
      bilan: "Bien concevoir un objet, c'est choisir des matériaux adaptés, limiter les pertes d'énergie et penser dès le départ à toute sa vie, de la mine à la poubelle de tri.",
    },
    "4e-technologie-06-conception-design": {
      accroche: "Ton téléphone glisse sans cesse de la pile de livres quand tu suis un cours en vidéo. Et si tu concevais toi-même le support parfait, de l'idée griffonnée sur un coin de cahier jusqu'à l'objet imprimé en 3D ?",
      objectifs: [
        "Rédiger et exploiter un cahier des charges : fonction principale et contraintes",
        "Représenter une solution : croquis, modélisation 3D, prototype",
        "Intégrer l'ergonomie, l'écoconception et l'innovation dans un projet",
      ],
      sections: [
        {
          titre: "Le cahier des charges, boussole du projet",
          blocs: [
            { t: "definition", terme: "Cahier des charges", md: "Le document qui décrit le **besoin**, la **fonction principale** de l'objet et les **contraintes** à respecter. Il sert de référence pendant toute la conception, puis pour **tester** le prototype." },
            { t: "definition", terme: "Fonction principale", md: "Le **service essentiel** que l'objet rend à l'utilisateur. Pour un sac à dos de randonnée : « permettre de **transporter ses affaires** en gardant les mains libres ». Sa couleur ou sa marque ne sont pas la fonction principale." },
            { t: "tableau", titre: "Les contraintes d'une lampe de poche", entetes: ["Exigence", "Catégorie de contrainte"], lignes: [["Coûter moins de 15 €", "**coût**"], ["Ne pas chauffer au point de brûler la main", "**sécurité**"], ["Être prête pour la rentrée", "**délai**"], ["Utiliser des piles rechargeables", "**environnement**"], ["Tenir dans la main, interrupteur sous le pouce", "**ergonomie**"]] },
            { t: "verifie", q: "Dans un cahier des charges, « l'objet doit coûter moins de 15 € » est…", choix: ["la fonction principale", "une contrainte de coût", "une solution technique"], bonne: 1, explication: "Le prix ne dit pas à quoi sert l'objet : c'est une limite à respecter, donc une contrainte, ici de coût." },
          ],
        },
        {
          titre: "Du croquis à la maquette numérique",
          blocs: [
            { t: "texte", md: "Une bonne idée naît rarement du premier coup. Le **croquis à main levée** permet d'explorer vite plusieurs pistes, sans règle ni ordinateur. On garde la meilleure, puis on réalise un **dessin coté**, qui précise toutes les dimensions." },
            { t: "definition", terme: "Modélisation 3D (CAO)", md: "La **conception assistée par ordinateur** crée une **maquette numérique** de l'objet. On peut la faire tourner, la mesurer, vérifier que les pièces s'assemblent et même **simuler** sa résistance, **avant de fabriquer** : on gagne du temps, de la matière et de l'argent." },
            { t: "etapes", titre: "La démarche de conception", items: [{ titre: "Besoin", md: "Identifier le problème à résoudre." }, { titre: "Cahier des charges", md: "Fixer la fonction principale et les contraintes." }, { titre: "Croquis", md: "Dessiner plusieurs idées et choisir la meilleure." }, { titre: "Modélisation 3D", md: "Créer la maquette numérique avec un logiciel de CAO." }, { titre: "Prototype", md: "Fabriquer un premier exemplaire." }, { titre: "Tests", md: "Comparer le prototype au cahier des charges, puis améliorer." }] },
            { t: "exemple", titre: "Le support de téléphone", md: "Fonction principale : **maintenir le téléphone incliné**. Contraintes : moins de 3 € de matière, tenir sur 8 cm de large, être imprimable en moins de 2 h. On dessine trois croquis, on modélise le meilleur, on l'imprime et on teste sa stabilité avec un vrai téléphone." },
          ],
        },
        {
          titre: "Fabriquer un prototype : l'impression 3D",
          blocs: [
            { t: "definition", terme: "Prototype", md: "Le **premier exemplaire** d'un objet, fabriqué pour **tester** la solution face au cahier des charges avant de la produire." },
            { t: "etapes", titre: "Imprimer une pièce en 3D", items: [{ titre: "Modéliser", md: "Créer la pièce dans le logiciel de CAO." }, { titre: "Exporter", md: "Enregistrer le modèle au format **STL**." }, { titre: "Trancher", md: "Un logiciel découpe le modèle en fines couches et calcule le trajet de la buse." }, { titre: "Imprimer", md: "La buse chauffée dépose le plastique fondu **couche par couche**, de bas en haut." }, { titre: "Finir", md: "Retirer les supports, poncer, tester la pièce." }] },
            { t: "exemple", titre: "Combien de couches ?", md: "L'imprimante dépose des couches de **0,2 mm**. Pour une pièce de **30 mm** de haut : 30 ÷ 0,2 = **150 couches**. Des couches plus fines donnent une pièce plus lisse, mais l'impression est plus longue." },
            { t: "texte", md: "L'impression 3D est idéale pour une **pièce unique**, un prototype ou une pièce de rechange introuvable. Pour fabriquer 100 000 jouets identiques, le **moulage** industriel est bien plus rapide et moins cher par pièce." },
            { t: "verifie", q: "Le prototype réussit tous les tests sauf un : il pèse 15 % de plus que la limite. Que faire ?", choix: ["Le valider quand même", "Modifier la conception (moins de matière, autre matériau) puis refaire le test", "Changer le cahier des charges pour qu'il passe"], bonne: 1, explication: "Le cahier des charges est la référence : un seul critère non respecté suffit pour que la solution ne soit pas validée. On améliore la conception, par exemple en évidant la pièce, puis on teste à nouveau." },
          ],
        },
        {
          titre: "Penser à l'utilisateur et à la planète",
          blocs: [
            { t: "definition", terme: "Ergonomie", md: "L'adaptation de l'objet au **corps et aux gestes** de l'utilisateur : prise en main, poids, taille des boutons, lisibilité de l'écran. Un objet ergonomique s'utilise sans effort et sans se tromper." },
            { t: "definition", terme: "Écoconception", md: "Réduire l'impact environnemental d'un produit **dès sa conception** : utiliser moins de matière, des matériaux recyclés, éviter la colle pour pouvoir démonter, rendre l'objet **réparable**." },
            { t: "attention", md: "Une **innovation** n'est pas forcément une invention jamais vue. C'est une nouveauté qui **s'impose** parce qu'elle apporte un vrai progrès, et c'est souvent l'**amélioration d'un objet existant** : la valise à roulettes, la trottinette électrique." },
          ],
        },
      ],
      bilan: "Concevoir, c'est partir d'un besoin, fixer des règles dans le cahier des charges, explorer des idées, modéliser, prototyper et tester, en pensant à l'utilisateur comme à la planète.",
    },
    "4e-technologie-07-evolution-impacts": {
      accroche: "Il y a 230 ans, un message envoyé de Paris à Lille passait de tour en tour grâce à de grands bras articulés, et mettait de longues minutes à arriver. Aujourd'hui, une vidéo fait le tour du monde en une fraction de seconde. Qu'avons-nous gagné… et à quel prix ?",
      objectifs: [
        "Situer les grandes évolutions des transports et des moyens de communication",
        "Analyser les impacts sociaux et environnementaux des objets techniques",
        "Comparer des choix techniques : low-tech, mobilités durables, ville intelligente, éthique du numérique",
      ],
      sections: [
        {
          titre: "Des objets qui évoluent",
          blocs: [
            { t: "texte", md: "Un objet technique n'apparaît pas par magie. Il évolue avec les **besoins** des gens, les **découvertes scientifiques** (l'électricité, les ondes radio) et les **matériaux** disponibles (l'acier, le silicium des puces). Chaque génération d'objets s'appuie sur la précédente." },
            { t: "frise", titre: "L'évolution des moyens de communication", evenements: [{ date: 1794, label: "Télégraphe de Chappe", detail: "Des bras articulés sur des tours transmettent des signaux à vue." }, { date: 1844, label: "Télégraphe électrique", detail: "Samuel Morse envoie un message codé par un fil électrique." }, { date: 1876, label: "Téléphone", detail: "Graham Bell transmet la voix par un fil." }, { date: 1895, label: "Radio (TSF)", detail: "Marconi transmet des signaux sans fil, par ondes." }, { date: 1926, label: "Télévision", detail: "John Logie Baird montre les premières images animées transmises à distance." }, { date: 1969, label: "Arpanet", detail: "L'ancêtre d'Internet relie des ordinateurs d'universités américaines." }, { date: 1973, label: "Téléphone portable", detail: "Premier appel depuis un téléphone mobile, à New York." }, { date: 1991, label: "Web", detail: "Tim Berners-Lee, au CERN, met en ligne le premier site Web." }, { date: 2007, label: "Smartphone", detail: "Écran tactile, Internet et applications dans la poche." }] },
            { t: "tableau", titre: "Quelques étapes des transports", entetes: ["Date", "Moyen de transport", "Ce qui change"], lignes: [["1804", "Locomotive à vapeur", "le train transporte charges et voyageurs sur rails"], ["1886", "Automobile à essence", "le déplacement individuel motorisé"], ["1903", "Avion des frères Wright", "le premier vol motorisé contrôlé"], ["1981", "TGV Paris-Lyon", "la grande vitesse rapproche les villes"]] },
            { t: "verifie", q: "Le téléphone portable a-t-il été inventé avant le téléphone fixe ?", choix: ["Oui", "Non"], bonne: 1, explication: "Le téléphone fixe date de 1876 ; le premier appel depuis un portable a eu lieu en 1973, près d'un siècle plus tard. Le portable est une évolution du fixe." },
          ],
        },
        {
          titre: "Des innovations qui changent la société",
          blocs: [
            { t: "texte", md: "Chaque innovation transforme la façon de vivre. Le **train** a rapproché les villes et permis de vendre des produits loin de leur lieu de fabrication. **Internet** a donné accès à l'information à des milliards de personnes. Le **smartphone** rend la communication **permanente** : on peut joindre et être joint partout, tout le temps.\n\nCes changements ont des **effets positifs** (accès au savoir, sécurité, liens familiaux) et des **effets négatifs** (pollution, déchets, dépendance aux écrans)." },
            { t: "exemple", titre: "Le vrai coût d'un smartphone", md: "Un smartphone remplacé tous les deux ans, c'est : l'**extraction** de dizaines de métaux, dont certains rares ; une **fabrication** très gourmande en énergie ; des **déchets électroniques** difficiles à recycler. L'essentiel de son impact a lieu **avant même** qu'on l'allume.\n\nLe **réparer** ou acheter un modèle **reconditionné** évite une nouvelle fabrication : c'est à la fois un choix technique et un choix citoyen." },
            { t: "verifie", q: "Réparer un smartphone plutôt que le remplacer réduit surtout…", choix: ["la consommation d'électricité de la recharge", "l'extraction de matières premières et les déchets", "le prix des forfaits téléphoniques"], bonne: 1, explication: "L'impact d'un smartphone se concentre sur sa fabrication. Le garder plus longtemps évite l'extraction de nouveaux métaux et la production de déchets électroniques." },
          ],
        },
        {
          titre: "Obsolescence, réparabilité et low-tech",
          blocs: [
            { t: "definition", terme: "Obsolescence programmée", md: "Le fait de **réduire volontairement la durée de vie** d'un produit pour pousser le consommateur à le remplacer : pièce fragile, batterie impossible à changer, mise à jour qui ralentit l'appareil. En France, c'est un **délit** depuis 2015." },
            { t: "texte", md: "Depuis 2021, un **indice de réparabilité** noté **sur 10** est affiché sur certains appareils, comme les smartphones et les ordinateurs portables. Il tient compte de la facilité de démontage, de la disponibilité des pièces et de leur prix. Il est peu à peu complété par un **indice de durabilité**." },
            { t: "definition", terme: "Low-tech", md: "Une démarche qui privilégie des objets **simples, robustes, réparables et sobres** en énergie et en matières : un vélo, un four solaire, un frigo du désert en terre cuite. C'est l'opposé de la course à la complexité." },
          ],
        },
        {
          titre: "Se déplacer et vivre en ville durablement",
          blocs: [
            { t: "definition", terme: "Mobilités durables", md: "Les façons de se déplacer qui **limitent les émissions de CO₂** et la pollution de l'air : **marche**, **vélo**, **tramway** et bus, **train**, **covoiturage** (partager une voiture entre personnes qui font le même trajet)." },
            { t: "exemple", titre: "Le CO₂ d'un trajet de 15 km", etapes: ["Une voiture émet 120 g de CO₂ par km.", "Pour 15 km : 120 × 15 = **1 800 g**, soit 1,8 kg.", "En covoiturage à trois, chaque passager est responsable d'un tiers : 1 800 ÷ 3 = **600 g**.", "À vélo ou à pied : **0 g** pendant le trajet."] },
            { t: "graphique", type: "barres", titre: "CO₂ émis par personne pendant un trajet de 15 km", unite: "g", donnees: [{ label: "Voiture seul", valeur: 1800 }, { label: "Covoiturage à 3", valeur: 600 }, { label: "Vélo", valeur: 0 }, { label: "Marche", valeur: 0 }] },
            { t: "definition", terme: "Ville intelligente", md: "Ou *smart city* : une ville qui utilise des **capteurs** et des **données** pour mieux gérer ses services. Des lampadaires qui s'allument au passage, des poubelles qui signalent qu'elles sont pleines, des feux qui s'adaptent à la circulation." },
          ],
        },
        {
          titre: "Les questions éthiques du numérique",
          blocs: [
            { t: "liste", titre: "Quatre questions à se poser", items: ["**Vie privée** : une montre connectée enregistre ta position et ton rythme cardiaque. Qui peut lire ces données ? Sont-elles revendues ?", "**Dépendance** : notifications et vidéos sans fin sont conçues pour capter ton attention le plus longtemps possible.", "**Algorithmes** : une application qui choisit tes vidéos peut t'enfermer dans une **bulle** où tu ne vois que des contenus semblables, et influencer tes opinions.", "**Énergie** : centres de données, réseaux et fabrication des appareils consomment beaucoup d'énergie."] },
            { t: "verifie", q: "Une montre connectée enregistre en permanence la position et le rythme cardiaque. Quelle question éthique se pose en premier ?", choix: ["La couleur du bracelet", "Le respect de la vie privée et l'usage des données", "La taille de l'écran"], bonne: 1, explication: "Position et santé sont des données personnelles très sensibles. Il faut savoir qui les stocke, qui y a accès et si elles peuvent être revendues." },
          ],
        },
      ],
      bilan: "Chaque objet technique change nos vies et la planète : en choisissant de réparer, de partager et de rester maître de ses données, chacun peut orienter le progrès.",
    },
    "4e-technologie-08-demarche-projet": {
      accroche: "Votre équipe a trois semaines pour créer un distributeur automatique de croquettes pour le chat du CDI. Qui modélise, qui programme, qui assemble ? Et dans quel ordre, pour ne pas finir la veille au soir ? Bienvenue dans la démarche de projet.",
      objectifs: [
        "Planifier un projet et répartir les tâches avec un diagramme de Gantt",
        "Simuler, tester et valider une solution technique",
        "Présenter un projet et travailler en sécurité à l'atelier",
      ],
      sections: [
        {
          titre: "Les grandes étapes d'un projet",
          blocs: [
            { t: "etapes", titre: "La démarche de projet", items: [{ titre: "Analyser le besoin", md: "Comprendre le problème et rédiger le cahier des charges." }, { titre: "Planifier", md: "Découper le travail en tâches, les dater, les répartir." }, { titre: "Concevoir", md: "Chercher des solutions, croquis, modélisation, simulation." }, { titre: "Réaliser", md: "Fabriquer le prototype, programmer, assembler." }, { titre: "Tester", md: "Comparer le prototype au cahier des charges." }, { titre: "Présenter", md: "Communiquer la démarche et les résultats." }] },
            { t: "texte", md: "Ces étapes ne sont pas toujours une ligne droite : si un test échoue, on **revient** à la conception, on corrige, puis on teste de nouveau. Un projet réussi, c'est souvent plusieurs allers-retours." },
          ],
        },
        {
          titre: "Planifier avec un diagramme de Gantt",
          blocs: [
            { t: "definition", terme: "Diagramme de Gantt", md: "Un **planning** où chaque tâche est une **barre** placée sur un calendrier. On y lit sa **durée**, l'**ordre** des tâches et celles qui se déroulent **en même temps** (barres placées sur les mêmes dates)." },
            { t: "schema", titre: "Le planning du distributeur de croquettes", legende: "A et B se font en parallèle par deux équipes. C commence seulement quand A et B sont terminées : le projet dure 4 + 2 = 6 jours au minimum.", svg: `<svg viewBox="0 0 400 210"><text class="texte-petit" x="10" y="24">Tâches</text><text class="texte-petit" x="132" y="24" text-anchor="middle">J1</text><text class="texte-petit" x="177" y="24" text-anchor="middle">J2</text><text class="texte-petit" x="222" y="24" text-anchor="middle">J3</text><text class="texte-petit" x="267" y="24" text-anchor="middle">J4</text><text class="texte-petit" x="312" y="24" text-anchor="middle">J5</text><text class="texte-petit" x="357" y="24" text-anchor="middle">J6</text><g class="pointille"><line x1="110" y1="32" x2="110" y2="150"/><line x1="155" y1="32" x2="155" y2="150"/><line x1="200" y1="32" x2="200" y2="150"/><line x1="245" y1="32" x2="245" y2="150"/><line x1="335" y1="32" x2="335" y2="150"/><line x1="380" y1="32" x2="380" y2="150"/></g><text class="texte" x="10" y="57">A : boîtier</text><rect class="aplat" x="110" y="40" width="135" height="24" rx="3"/><rect class="trait" x="110" y="40" width="135" height="24" rx="3" fill="none"/><text class="texte-petit" x="177" y="56" text-anchor="middle">3 jours</text><text class="texte" x="10" y="97">B : servo</text><rect class="aplat" x="110" y="80" width="180" height="24" rx="3"/><rect class="trait" x="110" y="80" width="180" height="24" rx="3" fill="none"/><text class="texte-petit" x="200" y="96" text-anchor="middle">4 jours</text><text class="texte" x="10" y="137">C : montage</text><rect class="aplat" x="290" y="120" width="90" height="24" rx="3"/><rect class="trait" x="290" y="120" width="90" height="24" rx="3" fill="none"/><text class="texte-petit" x="335" y="136" text-anchor="middle">2 jours</text><line x1="290" y1="32" x2="290" y2="156" stroke="var(--pigment)" stroke-width="2" stroke-dasharray="4 3"/><polygon points="290,154 298,162 290,170 282,162" fill="var(--pigment)"/><text class="texte-petit" x="278" y="166" text-anchor="end">jalon : A et B terminées</text><text class="texte-pigment" x="200" y="196" text-anchor="middle">Durée minimale : 6 jours</text></svg>` },
            { t: "exemple", titre: "Durée d'un projet : en série ou en parallèle ?", etapes: ["**En série** : A (3 jours), puis B (4 jours), puis C (2 jours) : 3 + 4 + 2 = **9 jours**.", "**En parallèle** : deux équipes font A et B en même temps. Cette phase dure autant que la plus longue des deux : 4 jours.", "C ne peut commencer qu'après A **et** B : 4 + 2 = **6 jours**.", "Travailler en parallèle fait gagner 3 jours."] },
            { t: "definition", terme: "Jalon", md: "Une **date de vérification** dans le planning : à ce moment, on contrôle qu'une étape est bien terminée avant de passer à la suite." },
            { t: "texte", md: "**Répartir les tâches**, c'est donner à chacun une **mission claire**, selon ses compétences, avec un jalon pour chaque étape. Le document qui rassemble les tâches, leurs dates et les responsables s'appelle le **planning** du projet." },
            { t: "verifie", q: "Sur un diagramme de Gantt, que signifient deux barres placées sur les mêmes dates ?", choix: ["Que les deux tâches se déroulent en même temps", "Que l'une a été oubliée", "Que les deux tâches sont identiques"], bonne: 0, explication: "Deux barres alignées sur les mêmes jours indiquent des tâches menées en parallèle, souvent par des personnes différentes." },
          ],
        },
        {
          titre: "Simuler, tester, valider",
          blocs: [
            { t: "definition", terme: "Simulation numérique", md: "Tester un **modèle** sur ordinateur (résistance d'une pièce, programme d'un robot) **avant de fabriquer**. Elle évite de gaspiller du temps et de la matière. Mais un modèle **simplifie la réalité** : il néglige souvent les frottements ou les petits défauts." },
            { t: "exemple", titre: "Simulation et réalité", md: "La simulation prévoit que le robot avance de **50 cm**, le prototype n'avance que de **46 cm**. Explication la plus probable : les **frottements** des roues sur le sol, ou une batterie un peu faible, que le modèle ne prenait pas en compte. On ajuste alors le modèle ou le programme." },
            { t: "propriete", titre: "Valider une solution", md: "Un **test** compare le comportement réel du prototype aux exigences du **cahier des charges**. Si **toutes** les exigences sont respectées, la solution est **validée**. Sinon, on la modifie et on refait le test." },
            { t: "verifie", q: "Le cahier des charges exige que le store s'ouvre en moins de 10 s. Au test, il met 12 s. Que conclure ?", choix: ["La solution est validée, 2 s ce n'est rien", "La solution n'est pas conforme : il faut la modifier puis refaire le test", "Il faut arrêter le projet"], bonne: 1, explication: "12 s est supérieur à 10 s : l'exigence n'est pas respectée. On cherche une amélioration (moteur plus rapide, réglage du programme) et on teste à nouveau." },
          ],
        },
        {
          titre: "Présenter et travailler en sécurité",
          blocs: [
            { t: "liste", titre: "Le plan d'une présentation de projet", ordonnee: true, items: ["Rappeler le **besoin** et le cahier des charges.", "Montrer les **solutions envisagées** et justifier le choix.", "Présenter le **prototype**.", "Donner les **résultats des tests**.", "Conclure sur les **améliorations** possibles."] },
            { t: "tableau", titre: "Les règles de sécurité à l'atelier", entetes: ["Situation", "Règle"], lignes: [["Percer, poncer, scier", "porter des **lunettes de protection**"], ["Travailler près d'une machine qui tourne", "**cheveux attachés**, manches serrées, pas d'écharpe"], ["Percer ou scier une pièce", "la **fixer dans un étau**, jamais à la main"], ["Souder", "reposer le fer **sur son support**, ne jamais toucher la panne"], ["Utiliser un cutter", "diriger la lame **loin de soi**, sur un tapis de coupe"]] },
            { t: "attention", md: "Avant d'utiliser la **perceuse à colonne**, mets tes lunettes, attache tes cheveux, fixe la pièce dans l'étau et demande l'autorisation au professeur. Un accident d'atelier arrive en une fraction de seconde." },
          ],
        },
      ],
      bilan: "Un projet réussi se planifie, se teste face au cahier des charges, se présente avec clarté et se réalise toujours en sécurité.",
    },
  },
};
