// Cours ÉCLORE — 3e Technologie. Schéma : docs/COURS.md
export default {
  id: "3e-technologie",
  chapitres: {
    "3e-technologie-01-analyse-conception": {
      accroche: "Un robot aspirateur fait le ménage pendant que tu es au collège : il évite les pieds de chaise, ne tombe pas dans l'escalier et retourne seul à sa base. Avant de dessiner la moindre pièce, ses concepteurs ont dû répondre à une question simple : à quoi doit-il servir, exactement ?",
      objectifs: [
        "Exprimer un besoin avec la bête à cornes et le traduire en cahier des charges",
        "Distinguer fonction de service, fonction technique et solution technique",
        "Lire un diagramme pieuvre et un diagramme FAST",
        "Comparer des solutions avec des critères et reconnaître une innovation",
      ],
      sections: [
        {
          titre: "Tout commence par un besoin",
          blocs: [
            { t: "texte", md: "Personne n'invente un objet « pour rien ». Le robot aspirateur existe parce que des gens veulent un sol propre **sans y passer du temps**. Ce point de départ s'appelle le **besoin**.\n\nTant que le besoin n'est pas clair, on risque de fabriquer un objet magnifique… que personne n'utilise. C'est pourquoi on commence toujours par l'exprimer, avec un outil très simple : la **bête à cornes**." },
            { t: "definition", terme: "Besoin", md: "Une **nécessité** ou un **désir** éprouvé par un utilisateur. Tout objet technique est conçu pour y répondre." },
            { t: "schema", titre: "La bête à cornes du robot aspirateur", legende: "Trois questions, trois cases : à qui l'objet rend-il service ? Sur quoi agit-il ? Dans quel but ?", svg: `<svg viewBox="0 0 400 256"><rect class="aplat" x="20" y="16" width="140" height="48" rx="8"/><rect class="trait" x="20" y="16" width="140" height="48" rx="8" fill="none"/><text class="texte-pigment" x="90" y="34" text-anchor="middle">À qui rend-il service ?</text><text class="texte" x="90" y="54" text-anchor="middle">l'utilisateur</text><rect class="aplat" x="240" y="16" width="140" height="48" rx="8"/><rect class="trait" x="240" y="16" width="140" height="48" rx="8" fill="none"/><text class="texte-pigment" x="310" y="34" text-anchor="middle">Sur quoi agit-il ?</text><text class="texte" x="310" y="54" text-anchor="middle">le sol de la maison</text><path class="trait" d="M90 64 C90 200 310 200 310 64" fill="none"/><ellipse class="aplat-papier" cx="200" cy="120" rx="78" ry="22"/><ellipse class="trait" cx="200" cy="120" rx="78" ry="22" fill="none"/><text class="texte" x="200" y="125" text-anchor="middle">Robot aspirateur</text><line class="trait" x1="200" y1="167" x2="200" y2="194" marker-end="url(#fl)"/><rect class="aplat-fort" x="60" y="198" width="280" height="50" rx="8" opacity="0.35"/><rect class="trait" x="60" y="198" width="280" height="50" rx="8" fill="none"/><text class="texte-pigment" x="200" y="216" text-anchor="middle">Dans quel but ?</text><text class="texte" x="200" y="238" text-anchor="middle">enlever la poussière sans effort</text></svg>` },
            { t: "verifie", q: "Dans la bête à cornes du robot aspirateur, que place-t-on dans la case « Sur quoi agit-il ? »", choix: ["L'utilisateur", "Le sol de la maison", "La batterie du robot"], bonne: 1, explication: "Le robot agit sur le **sol** (et sa poussière). L'utilisateur est celui à qui il rend service ; la batterie est une pièce interne, elle n'a rien à faire dans la bête à cornes." },
          ],
        },
        {
          titre: "Le diagramme pieuvre : l'objet dans son milieu",
          blocs: [
            { t: "texte", md: "Le robot ne vit pas seul : il croise des meubles, se branche sur une prise, roule près d'un escalier. Le **diagramme pieuvre** dessine l'objet au centre et tous les **éléments du milieu extérieur** autour, puis relie ces éléments par des fonctions." },
            { t: "schema", titre: "Le diagramme pieuvre du robot aspirateur", legende: "FP : permettre à l'utilisateur de nettoyer le sol. FC1 : éviter les meubles. FC2 : se recharger sur le secteur. FC3 : ne pas tomber dans l'escalier.", svg: `<svg viewBox="0 0 400 250"><path d="M95 54 Q200 206 305 54" fill="none" stroke="var(--pigment)" stroke-width="2.5"/><ellipse class="aplat-papier" cx="70" cy="38" rx="58" ry="18"/><ellipse class="trait" cx="70" cy="38" rx="58" ry="18" fill="none"/><text class="texte" x="70" y="43" text-anchor="middle">Utilisateur</text><ellipse class="aplat-papier" cx="330" cy="38" rx="58" ry="18"/><ellipse class="trait" cx="330" cy="38" rx="58" ry="18" fill="none"/><text class="texte" x="330" y="43" text-anchor="middle">Sol</text><text class="texte-pigment" x="124" y="114" text-anchor="end">FP</text><line class="trait" x1="270" y1="134" x2="306" y2="134"/><line class="trait" x1="150" y1="150" x2="100" y2="208"/><line class="trait" x1="250" y1="150" x2="300" y2="208"/><ellipse class="aplat" cx="200" cy="134" rx="70" ry="24"/><ellipse class="trait" cx="200" cy="134" rx="70" ry="24" fill="none"/><text class="texte" x="200" y="139" text-anchor="middle">Robot aspirateur</text><ellipse class="aplat-papier" cx="350" cy="134" rx="44" ry="18"/><ellipse class="trait" cx="350" cy="134" rx="44" ry="18" fill="none"/><text class="texte" x="350" y="139" text-anchor="middle">Meubles</text><text class="texte-petit" x="288" y="124" text-anchor="middle">FC1</text><ellipse class="aplat-papier" cx="70" cy="224" rx="62" ry="18"/><ellipse class="trait" cx="70" cy="224" rx="62" ry="18" fill="none"/><text class="texte" x="70" y="229" text-anchor="middle">Prise 230 V</text><text class="texte-petit" x="108" y="178" text-anchor="middle">FC2</text><ellipse class="aplat-papier" cx="330" cy="224" rx="58" ry="18"/><ellipse class="trait" cx="330" cy="224" rx="58" ry="18" fill="none"/><text class="texte" x="330" y="229" text-anchor="middle">Escalier</text><text class="texte-petit" x="292" y="178" text-anchor="middle">FC3</text></svg>` },
            { t: "propriete", titre: "Deux sortes de fonctions de service", md: "• La **fonction principale (FP)** relie **deux** éléments du milieu en passant par l'objet : c'est la raison d'être de l'objet.\n• Une **fonction contrainte (FC)** relie l'objet à **un seul** élément : c'est une exigence à respecter (s'adapter, résister, ne pas gêner)." },
            { t: "attention", md: "Ne compte pas les traits, regarde les éléments reliés. « Résister à la pluie » ne concerne qu'un élément (la météo) : c'est une **FC**, même si elle est très importante pour une trottinette électrique." },
          ],
        },
        {
          titre: "Le cahier des charges : critères et niveaux",
          blocs: [
            { t: "texte", md: "Dire « le robot doit être silencieux » ne suffit pas : silencieux comment ? Le **cahier des charges fonctionnel (CdCF)** rend chaque fonction **mesurable**. Pour chacune, il donne un **critère** (ce qu'on mesure) et un **niveau** (la valeur à atteindre), parfois avec une **flexibilité** (la marge tolérée)." },
            { t: "tableau", titre: "Extrait du cahier des charges du robot aspirateur", entetes: ["Fonction", "Critère", "Niveau", "Flexibilité"], lignes: [["FP : nettoyer le sol", "surface nettoyée par charge", "60 m² minimum", "± 5 m²"], ["FC1 : éviter les meubles", "chocs violents", "aucun dégât", "aucune"], ["FC2 : se recharger", "durée de recharge", "3 h maximum", "+ 15 min"], ["FC3 : ne pas tomber", "chutes dans l'escalier", "0 chute", "aucune"], ["FC4 : ne pas gêner", "niveau sonore", "65 dB maximum", "± 2 dB"]] },
            { t: "exemple", titre: "Utiliser une flexibilité", etapes: ["Le CdCF impose une masse de 4 kg maximum, flexibilité 5 %.", "5 % de 4 kg : 4 × 5 ÷ 100 = 0,2 kg.", "Masse maximale acceptée : 4 + 0,2 = **4,2 kg**. Un robot de 4,1 kg est validé, un robot de 4,3 kg ne l'est pas."] },
          ],
        },
        {
          titre: "Fonctions techniques, solutions et diagramme FAST",
          blocs: [
            { t: "definition", terme: "Fonction de service, fonction technique, solution technique", md: "La **fonction de service** est le service rendu, vu par l'utilisateur. La **fonction technique** dit ce que l'objet doit faire **à l'intérieur** pour le rendre (souvent un verbe : convertir, détecter, stocker). La **solution technique** est le **composant** choisi pour la réaliser." },
            { t: "schema", titre: "Un diagramme FAST, lu de gauche à droite", legende: "On part du service rendu et on se demande « comment ? » à chaque colonne.", svg: `<svg viewBox="0 0 400 190"><text class="texte-petit" x="60" y="12" text-anchor="middle">Fonction de service</text><text class="texte-petit" x="210" y="12" text-anchor="middle">Fonctions techniques</text><text class="texte-petit" x="347" y="12" text-anchor="middle">Solutions</text><rect class="aplat-fort" x="10" y="70" width="100" height="60" rx="6" opacity="0.35"/><rect class="trait" x="10" y="70" width="100" height="60" rx="6" fill="none"/><text class="texte-petit" x="60" y="92" text-anchor="middle">Se déplacer</text><text class="texte-petit" x="60" y="106" text-anchor="middle">seul dans</text><text class="texte-petit" x="60" y="120" text-anchor="middle">la pièce</text><path class="trait-fin" d="M110 100 L125 100 M125 40 L125 160 M125 40 L140 40 M125 100 L140 100 M125 160 L140 160" fill="none"/><rect class="aplat" x="140" y="22" width="140" height="36" rx="4"/><rect class="trait" x="140" y="22" width="140" height="36" rx="4" fill="none"/><text class="texte-petit" x="210" y="37" text-anchor="middle">Convertir l'énergie</text><text class="texte-petit" x="210" y="51" text-anchor="middle">électrique → mécanique</text><rect class="aplat" x="140" y="82" width="140" height="36" rx="4"/><rect class="trait" x="140" y="82" width="140" height="36" rx="4" fill="none"/><text class="texte-petit" x="210" y="104" text-anchor="middle">Détecter les obstacles</text><rect class="aplat" x="140" y="142" width="140" height="36" rx="4"/><rect class="trait" x="140" y="142" width="140" height="36" rx="4" fill="none"/><text class="texte-petit" x="210" y="164" text-anchor="middle">Stocker l'énergie</text><line class="trait-fin" x1="280" y1="40" x2="300" y2="40"/><line class="trait-fin" x1="280" y1="100" x2="300" y2="100"/><line class="trait-fin" x1="280" y1="160" x2="300" y2="160"/><rect class="aplat-papier" x="300" y="22" width="95" height="36" rx="4"/><rect class="trait" x="300" y="22" width="95" height="36" rx="4" fill="none"/><text class="texte-petit" x="347" y="44" text-anchor="middle">moteurs + roues</text><rect class="aplat-papier" x="300" y="82" width="95" height="36" rx="4"/><rect class="trait" x="300" y="82" width="95" height="36" rx="4" fill="none"/><text class="texte-petit" x="347" y="104" text-anchor="middle">capteurs IR</text><rect class="aplat-papier" x="300" y="142" width="95" height="36" rx="4"/><rect class="trait" x="300" y="142" width="95" height="36" rx="4" fill="none"/><text class="texte-petit" x="347" y="164" text-anchor="middle">batterie Li-ion</text></svg>` },
            { t: "exemple", titre: "Vélo à assistance électrique : classer trois énoncés", md: "« Permettre au cycliste de rouler sans s'épuiser » : **fonction de service**.\n« Convertir l'énergie électrique en énergie mécanique » : **fonction technique**.\n« Moteur dans le moyeu de la roue » : **solution technique**." },
            { t: "verifie", q: "« Convertir l'énergie électrique en énergie mécanique » est…", choix: ["une fonction de service", "une fonction technique", "une solution technique"], bonne: 1, explication: "C'est ce que l'objet fait **à l'intérieur** pour rendre service : une fonction technique. La solution, c'est le composant choisi, par exemple un moteur." },
          ],
        },
        {
          titre: "Choisir une solution et innover",
          blocs: [
            { t: "texte", md: "Souvent, plusieurs solutions respectent le cahier des charges. Pour choisir **sans se fier à son goût**, on compare leurs performances critère par critère dans un tableau." },
            { t: "tableau", titre: "Détecter les obstacles : deux solutions comparées", entetes: ["Critère", "Pare-chocs à contact", "Capteur laser (lidar)"], lignes: [["Coût", "très faible", "élevé"], ["Masse", "légère", "légère"], ["Fiabilité", "bonne, mais touche les meubles", "très bonne, sans contact"], ["Impact environnemental", "faible (plastique, ressort)", "plus fort (électronique)"]] },
            { t: "definition", terme: "Innovation", md: "Une **invention** est une idée nouvelle qui fonctionne. Elle devient une **innovation** quand elle trouve un **usage réel** et se **diffuse** dans la société. Le premier robot aspirateur grand public, vendu à des millions d'exemplaires, est une innovation." },
            { t: "etapes", titre: "La démarche de conception", items: [{ titre: "Exprimer le besoin", md: "Bête à cornes : à qui, sur quoi, dans quel but ?" }, { titre: "Rédiger le CdCF", md: "Pieuvre, fonctions, critères, niveaux." }, { titre: "Chercher des solutions", md: "FAST, croquis, recherches." }, { titre: "Choisir", md: "Tableau de critères." }, { titre: "Réaliser et tester", md: "Prototype comparé au cahier des charges." }] },
            { t: "savais-tu", md: "Les premiers robots aspirateurs se cognaient partout et nettoyaient au hasard. Les modèles récents dessinent une **carte** de la maison grâce à un lidar : la même fonction de service, une nouvelle solution technique." },
          ],
        },
      ],
      bilan: "Besoin, fonctions, critères, solutions : on part toujours de l'utilisateur pour arriver au composant, jamais l'inverse.",
    },
    "3e-technologie-02-chaines-energie-information": {
      accroche: "Ton robot aspirateur heurte un pied de table. En une fraction de seconde, il recule, pivote et repart. Qui a pris la décision ? Pas les roues, pas la batterie : une petite puce électronique, qui a reçu une information et donné un ordre.",
      objectifs: [
        "Identifier les blocs de la chaîne d'information et de la chaîne d'énergie",
        "Associer capteurs, actionneurs et interfaces à leur rôle",
        "Lire et compléter un schéma fonctionnel avec ses flux",
      ],
      sections: [
        {
          titre: "Deux chaînes qui travaillent ensemble",
          blocs: [
            { t: "texte", md: "Tout système automatique fait deux choses à la fois. Il **réfléchit** : il recueille des informations et décide. Et il **agit** : il utilise de l'énergie pour bouger, éclairer, chauffer. Les technologues séparent donc le système en deux chaînes, comme ton cerveau et tes muscles." },
            { t: "propriete", titre: "Les blocs fonctionnels", md: "**Chaîne d'information** : **acquérir** (capteurs) → **traiter** (carte programmable, microcontrôleur) → **communiquer** (ordres, affichage).\n\n**Chaîne d'énergie** : **alimenter** (pile, batterie, secteur) → **distribuer** (relais, transistor, variateur) → **convertir** (moteur, DEL, résistance chauffante) → **transmettre** (engrenages, courroie, vis)." },
            { t: "schema", titre: "Les deux chaînes du robot aspirateur", legende: "Traits fins : flux d'information. Traits épais : flux d'énergie. L'ordre relie les deux chaînes.", svg: `<svg viewBox="0 0 400 284"><text class="texte-pigment" x="10" y="16">Chaîne d'information</text><rect class="aplat" x="10" y="26" width="110" height="36" rx="6"/><rect class="trait" x="10" y="26" width="110" height="36" rx="6" fill="none"/><text class="texte" x="65" y="49" text-anchor="middle">Acquérir</text><rect class="aplat" x="145" y="26" width="110" height="36" rx="6"/><rect class="trait" x="145" y="26" width="110" height="36" rx="6" fill="none"/><text class="texte" x="200" y="49" text-anchor="middle">Traiter</text><rect class="aplat" x="280" y="26" width="110" height="36" rx="6"/><rect class="trait" x="280" y="26" width="110" height="36" rx="6" fill="none"/><text class="texte" x="335" y="49" text-anchor="middle">Communiquer</text><line class="trait-fin" x1="120" y1="44" x2="143" y2="44" marker-end="url(#fl)"/><line class="trait-fin" x1="255" y1="44" x2="278" y2="44" marker-end="url(#fl)"/><text class="texte-petit" x="65" y="78" text-anchor="middle">pare-chocs, IR</text><text class="texte-petit" x="200" y="78" text-anchor="middle">microcontrôleur</text><text class="texte-petit" x="335" y="78" text-anchor="middle">ordres aux moteurs</text><path d="M335 86 L335 112 L145 112 L145 138" fill="none" stroke="var(--pigment)" stroke-width="1.5" marker-end="url(#fl-p)"/><text class="texte-pigment" x="240" y="106" text-anchor="middle">ordre</text><text class="texte-pigment" x="10" y="134">Chaîne d'énergie</text><rect class="aplat-papier" x="6" y="142" width="78" height="36" rx="6"/><rect class="trait" x="6" y="142" width="78" height="36" rx="6" fill="none"/><text class="texte-petit" x="45" y="164" text-anchor="middle">Alimenter</text><rect class="aplat-papier" x="106" y="142" width="78" height="36" rx="6"/><rect class="trait" x="106" y="142" width="78" height="36" rx="6" fill="none"/><text class="texte-petit" x="145" y="164" text-anchor="middle">Distribuer</text><rect class="aplat-papier" x="206" y="142" width="78" height="36" rx="6"/><rect class="trait" x="206" y="142" width="78" height="36" rx="6" fill="none"/><text class="texte-petit" x="245" y="164" text-anchor="middle">Convertir</text><rect class="aplat-papier" x="306" y="142" width="78" height="36" rx="6"/><rect class="trait" x="306" y="142" width="78" height="36" rx="6" fill="none"/><text class="texte-petit" x="345" y="164" text-anchor="middle">Transmettre</text><g fill="var(--encre)" stroke="var(--encre)"><line x1="84" y1="160" x2="96" y2="160" stroke-width="4"/><polygon points="96,153 105,160 96,167"/><line x1="184" y1="160" x2="196" y2="160" stroke-width="4"/><polygon points="196,153 205,160 196,167"/><line x1="284" y1="160" x2="296" y2="160" stroke-width="4"/><polygon points="296,153 305,160 296,167"/><line x1="345" y1="200" x2="345" y2="220" stroke-width="4"/><polygon points="338,220 345,229 352,220"/></g><text class="texte-petit" x="45" y="194" text-anchor="middle">batterie</text><text class="texte-petit" x="145" y="194" text-anchor="middle">pont en H</text><text class="texte-petit" x="245" y="194" text-anchor="middle">moteurs</text><text class="texte-petit" x="345" y="194" text-anchor="middle">roues</text><text class="texte-main" x="300" y="250" text-anchor="middle">le robot recule</text><text class="texte-petit" x="10" y="276">trait fin = information, trait épais = énergie</text></svg>` },
          ],
        },
        {
          titre: "Acquérir : les capteurs",
          blocs: [
            { t: "definition", terme: "Capteur", md: "Un composant qui transforme une **grandeur physique** (lumière, distance, température, position…) en un **signal électrique** exploitable par la carte programmable." },
            { t: "texte", md: "Le signal produit n'a pas toujours la même forme :\n• **logique** : deux états seulement, 0 ou 1 (bouton relâché ou appuyé, personne ou quelqu'un) ;\n• **analogique** : il varie de façon continue (la tension d'une photorésistance monte peu à peu avec la lumière) ;\n• **numérique** : une suite de valeurs codées en binaire (la distance envoyée par un capteur à ultrasons)." },
            { t: "verifie", q: "Un détecteur de présence infrarouge renvoie seulement 0 (personne) ou 1 (quelqu'un). Ce signal est…", choix: ["analogique", "logique", "continu"], bonne: 1, explication: "Deux états possibles seulement : c'est un signal **logique** (on dit aussi tout ou rien)." },
          ],
        },
        {
          titre: "Traiter : là où se prend la décision",
          blocs: [
            { t: "texte", md: "Le bloc **traiter** est le « cerveau » : une carte programmable (micro:bit, Arduino) ou un ordinateur embarqué. Il compare les informations reçues à ce que prévoit son **programme**, puis décide.\n\nDans une **voiture autonome**, les caméras et le radar **acquièrent** ; l'ordinateur de bord qui analyse les images et décide de freiner **traite** ; l'ordre envoyé aux freins, c'est **communiquer**." },
            { t: "verifie", q: "Le robot aspirateur heurte un meuble, recule puis tourne. Quel élément a décidé de cette manœuvre ?", choix: ["Le pare-chocs", "Le microcontrôleur", "Les moteurs des roues"], bonne: 1, explication: "Le pare-chocs a seulement **détecté** le choc (acquérir) ; les moteurs ont **exécuté** (convertir). La décision vient du programme du **microcontrôleur** (traiter)." },
          ],
        },
        {
          titre: "Agir : interfaces et actionneurs",
          blocs: [
            { t: "definition", terme: "Actionneur", md: "Un composant qui **convertit l'énergie** pour agir sur le monde : moteur, servomoteur, vérin, DEL, buzzer, électrovanne." },
            { t: "texte", md: "La carte programmable délivre un courant minuscule, incapable de faire tourner un moteur. Il faut un **interrupteur commandé** : l'**interface** (relais, transistor, pont en H). Elle reçoit l'ordre de la chaîne d'information et laisse passer, ou non, l'énergie de la chaîne d'énergie : c'est le bloc **distribuer**." },
            { t: "tableau", titre: "Capteurs et actionneurs courants", entetes: ["Composant", "Rôle", "Grandeur mesurée ou action"], lignes: [["Photorésistance (LDR)", "capteur", "lumière"], ["Capteur à ultrasons", "capteur", "distance"], ["Thermistance", "capteur", "température"], ["Détecteur infrarouge (PIR)", "capteur", "présence d'une personne"], ["Interrupteur de fin de course", "capteur", "position (contact)"], ["Moteur", "actionneur", "fait tourner un axe"], ["Servomoteur", "actionneur", "tourne d'un angle précis"], ["DEL, buzzer", "actionneurs", "éclairer, émettre un son"]] },
            { t: "attention", md: "Un moteur n'est **pas** un capteur : il ne mesure rien, il **agit**. Pose-toi toujours la question : ce composant prend-il une information, ou utilise-t-il de l'énergie pour agir ?" },
            { t: "exemple", titre: "La puissance d'un actionneur", md: "Un servomoteur est alimenté sous 6 V et consomme 0,5 A. Sa puissance vaut **P = U × I** = 6 × 0,5 = **3 W**. La batterie doit pouvoir fournir cette puissance." },
          ],
        },
        {
          titre: "Lire un schéma fonctionnel : le volet roulant",
          blocs: [
            { t: "etapes", titre: "Le soir tombe, le volet descend", items: [{ titre: "Acquérir", md: "La photorésistance mesure une lumière faible." }, { titre: "Traiter", md: "La carte compare la valeur à un seuil : il fait nuit." }, { titre: "Communiquer", md: "Elle envoie l'ordre « fermer » au relais." }, { titre: "Alimenter, distribuer", md: "Le relais laisse passer le courant du secteur." }, { titre: "Convertir, transmettre", md: "Le moteur tourne, l'axe enroule le tablier : le volet descend." }] },
            { t: "astuce", md: "Pour placer un composant, demande-toi **ce qui entre** et **ce qui sort**. Information entrante, information sortante : chaîne d'information. Énergie entrante, énergie sortante : chaîne d'énergie. Ordre entrant, énergie sortante : interface." },
            { t: "verifie", q: "Quel composant permet à la chaîne d'information de commander la chaîne d'énergie ?", choix: ["La photorésistance", "Le relais", "L'engrenage"], bonne: 1, explication: "Le relais est l'**interface** : il reçoit un petit ordre électrique et commute un courant bien plus fort vers le moteur." },
          ],
        },
      ],
      bilan: "Acquérir, traiter, communiquer ; alimenter, distribuer, convertir, transmettre : l'information décide, l'énergie agit, et l'interface fait le lien.",
    },
    "3e-technologie-03-programmation-algorithmique": {
      accroche: "Quand une voiture recule vers un mur, un bip s'accélère puis devient continu. Derrière ce petit son, il y a un capteur, une boucle qui tourne des centaines de fois par minute… et un programme de quelques lignes que tu es capable d'écrire.",
      objectifs: [
        "Lire et écrire un algorithme avec variables, boucles et conditions",
        "Programmer un objet qui réagit à des capteurs et des événements",
        "Tester, simuler et déboguer un programme",
        "Prévoir le résultat d'un script Python simple",
      ],
      sections: [
        {
          titre: "Algorithme et programme",
          blocs: [
            { t: "definition", terme: "Algorithme", md: "Une **suite ordonnée d'instructions** qui résout un problème. Un **programme** est la traduction de cet algorithme dans un langage que la machine comprend : Scratch, mBlock, Python, C pour Arduino." },
            { t: "texte", md: "Une recette de cuisine est déjà un algorithme : des actions, dans un ordre précis, avec des tests (« si la pâte colle, ajoute de la farine »). La machine, elle, ne devine rien : chaque instruction doit être **exacte** et à sa place." },
            { t: "tableau", titre: "Les outils du programmeur", entetes: ["Outil", "Description"], lignes: [["Algorigramme", "schéma de l'algorithme avec des symboles normalisés"], ["Scratch, mBlock", "langages par blocs à emboîter"], ["Python", "langage textuel, une instruction par ligne"], ["Arduino (C)", "langage textuel pour programmer une carte"], ["Simulateur", "logiciel qui teste le programme sans matériel"]] },
          ],
        },
        {
          titre: "Lire un algorigramme",
          blocs: [
            { t: "texte", md: "Dans un **algorigramme**, chaque forme a un sens : l'ovale marque le début, le **rectangle** une action, le **losange** un test dont on sort par « oui » ou « non ». Les flèches donnent l'ordre de lecture." },
            { t: "schema", titre: "Algorigramme d'un détecteur d'obstacle", legende: "La flèche du bas remonte vers « Lire la distance » : c'est une boucle infinie, l'objet surveille sans arrêt.", svg: `<svg viewBox="0 0 400 300"><ellipse class="aplat-papier" cx="200" cy="20" rx="46" ry="14"/><ellipse class="trait" cx="200" cy="20" rx="46" ry="14" fill="none"/><text class="texte" x="200" y="25" text-anchor="middle">Début</text><line class="trait" x1="200" y1="34" x2="200" y2="50" marker-end="url(#fl)"/><rect class="aplat" x="120" y="52" width="160" height="30"/><rect class="trait" x="120" y="52" width="160" height="30" fill="none"/><text class="texte" x="200" y="72" text-anchor="middle">Lire la distance d</text><line class="trait" x1="200" y1="82" x2="200" y2="100" marker-end="url(#fl)"/><polygon class="aplat" points="200,102 280,135 200,168 120,135"/><polygon class="trait" points="200,102 280,135 200,168 120,135" fill="none"/><text class="texte" x="200" y="140" text-anchor="middle">d &lt; 20 cm ?</text><path class="trait" d="M280 135 L316 135 L316 182" fill="none" marker-end="url(#fl)"/><text class="texte-pigment" x="298" y="127" text-anchor="middle">oui</text><path class="trait" d="M120 135 L84 135 L84 182" fill="none" marker-end="url(#fl)"/><text class="texte-pigment" x="102" y="127" text-anchor="middle">non</text><rect class="aplat" x="256" y="184" width="120" height="40"/><rect class="trait" x="256" y="184" width="120" height="40" fill="none"/><text class="texte-petit" x="316" y="200" text-anchor="middle">Allumer la DEL</text><text class="texte-petit" x="316" y="215" text-anchor="middle">et le buzzer</text><rect class="aplat" x="24" y="184" width="120" height="40"/><rect class="trait" x="24" y="184" width="120" height="40" fill="none"/><text class="texte-petit" x="84" y="200" text-anchor="middle">Éteindre la DEL</text><text class="texte-petit" x="84" y="215" text-anchor="middle">et le buzzer</text><path class="trait" d="M84 224 L84 250 L316 250 L316 224" fill="none"/><path d="M200 250 L200 270 L10 270 L10 67 L118 67" fill="none" stroke="var(--pigment)" stroke-width="2" marker-end="url(#fl-p)"/><text class="texte-pigment" x="200" y="290" text-anchor="middle">répéter indéfiniment</text></svg>` },
            { t: "verifie", q: "Dans un algorigramme, que représente un losange ?", choix: ["Le début du programme", "Une action", "Un test (une condition)"], bonne: 2, explication: "Le losange pose une question dont on sort par **oui** ou par **non** : c'est un test. L'action est un rectangle, le début un ovale." },
          ],
        },
        {
          titre: "Variables, boucles, conditions et événements",
          blocs: [
            { t: "propriete", titre: "Les briques de tout programme", md: "• Une **variable** est une case mémoire **nommée** dont la valeur peut changer (distance, score, température).\n• Une **boucle** répète des instructions : un nombre de fois fixé, **tant qu'**une condition est vraie, ou **indéfiniment**.\n• Une **condition** (si… alors… sinon) choisit un chemin selon un test.\n• Un **événement** (bouton pressé, message reçu, clic) déclenche un script." },
            { t: "exemple", titre: "Suivre une condition en cascade", md: "temp vaut 25. Programme : si temp > 30 alors dire « chaud », sinon si temp > 20 alors dire « doux », sinon dire « froid ».\n\n25 > 30 ? Non. On passe au test suivant : 25 > 20 ? Oui. Le programme dit **« doux »** et ignore la suite." },
            { t: "astuce", md: "Une suite d'instructions que tu répètes souvent (« avancer de 10 cm ») mérite un **bloc personnalisé** (ou une **fonction** en Python) : tu l'écris une fois, tu l'appelles partout, et une correction se fait à un seul endroit." },
            { t: "texte", md: "Une carte **micro:bit** ou **Arduino** lit ses **entrées** (capteurs), traite, puis commande ses **sorties** (actionneurs), le plus souvent dans une boucle « répéter indéfiniment » pour surveiller en permanence." },
          ],
        },
        {
          titre: "Lire un script Python ligne par ligne",
          blocs: [
            { t: "texte", md: "En Python, **=** range une valeur dans une variable, **print()** affiche, **if** / **else** testent, et **for i in range(n)** répète n fois, avec i qui prend les valeurs 0, 1, …, n − 1. Le **décalage** (indentation) indique les lignes qui appartiennent à la boucle ou au test." },
            { t: "exemple", titre: "Une voiture qui approche d'un obstacle", md: "distance = 50\nfor i in range(3):\n    distance = distance - 15\n    print(distance)\nif distance < 20:\n    print('Freine !')\nelse:\n    print('Avance')", etapes: ["Ligne 1 : la variable distance reçoit 50.", "Boucle, tour i = 0 : distance devient 50 − 15 = 35, on affiche **35**.", "Tour i = 1 : 35 − 15 = 20, on affiche **20**. Tour i = 2 : 20 − 15 = 5, on affiche **5**.", "range(3) a donné 0, 1, 2 : la boucle s'arrête après 3 tours.", "Test : 5 < 20 est vrai, donc on affiche **Freine !** La ligne du else est ignorée.", "Affichage complet : 35, 20, 5, Freine !"] },
            { t: "attention", md: "range(4) donne 0, 1, 2, 3 : **4 valeurs**, mais jamais 4. Et range(1, 5) commence à 1 et s'arrête **avant** 5 : 1, 2, 3, 4." },
            { t: "verifie", q: "Qu'affiche ce script ?\nx = 4\ny = x * 3 - 2\nprint(y)", choix: ["4", "10", "x * 3 - 2"], bonne: 1, explication: "x vaut 4, donc y = 4 × 3 − 2 = 12 − 2 = 10. print(y) affiche la **valeur** de y, pas son calcul." },
          ],
        },
        {
          titre: "Tester, simuler, déboguer",
          blocs: [
            { t: "texte", md: "Un programme ne marche presque jamais du premier coup. **Déboguer**, c'est chercher et corriger les erreurs. La **simulation** permet de tester sur l'ordinateur, sans risquer d'abîmer un robot contre un mur." },
            { t: "exemple", titre: "Trouver le bug", etapes: ["Le robot doit s'arrêter à 10 cm du mur, mais il le percute.", "Le programme dit : « si distance > 10 alors arrêter les moteurs ».", "Lis la condition à voix haute : le robot s'arrête quand il est **loin** du mur et continue quand il est **près**. La condition est **inversée**.", "Correction : « si distance < 10 alors arrêter les moteurs ». On reteste en simulation, puis sur le vrai robot."] },
            { t: "verifie", q: "Pourquoi simuler un programme avant de l'envoyer au robot ?", choix: ["Pour qu'il s'exécute plus vite", "Pour tester son comportement sans risquer d'abîmer le matériel", "Parce que le robot ne peut pas lire Python"], bonne: 1, explication: "La simulation montre le comportement prévu sans danger. Elle ne remplace pas l'essai réel, mais elle évite bien des casses." },
          ],
        },
      ],
      bilan: "Un algorithme bien pensé, des variables bien nommées, une boucle, un test : teste, simule, corrige, et ton objet obéira exactement à ce que tu as écrit.",
    },
    "3e-technologie-04-reseaux-internet-donnees": {
      accroche: "Dans une maison connectée, tu règles le chauffage depuis ton téléphone, à 20 km de chez toi. Ton ordre traverse la rue, la ville, parfois un data center à l'autre bout du pays, puis revient au thermostat du salon. En moins d'une seconde. Comment ?",
      objectifs: [
        "Décrire un réseau : client, serveur, adresse IP, routeur, DNS, protocoles",
        "Convertir des unités de données et calculer un temps de transfert",
        "Adopter des pratiques de cybersécurité et connaître ses droits (RGPD)",
        "Comprendre le cloud, les objets connectés et une base de données",
      ],
      sections: [
        {
          titre: "Un réseau, des adresses",
          blocs: [
            { t: "definition", terme: "Internet et le Web", md: "**Internet** est le réseau mondial qui relie des millions de réseaux. Le **Web** n'est qu'**un de ses services** : des pages reliées par des liens. Le courriel, la visio ou les jeux en ligne utilisent Internet sans être le Web." },
            { t: "texte", md: "Pour que les messages arrivent au bon endroit, chaque appareil connecté reçoit une **adresse IP**, comme une adresse postale. Chez toi, la **box** joue le rôle de **routeur** : elle relie le réseau local de la maison au reste d'Internet, et elle aiguille les paquets de données." },
            { t: "schema", titre: "Les adresses IP d'une maison connectée", legende: "La box a une adresse IP publique, visible sur Internet ; chaque appareil de la maison a une adresse locale. Trait plein : câble ; pointillés : Wi-Fi.", svg: `<svg viewBox="0 0 400 248"><ellipse class="aplat-papier" cx="200" cy="32" rx="90" ry="24"/><ellipse class="pointille" cx="200" cy="32" rx="90" ry="24" fill="none"/><text class="texte" x="200" y="37" text-anchor="middle">Internet</text><line class="trait" x1="200" y1="56" x2="200" y2="92"/><rect class="aplat" x="130" y="92" width="140" height="40" rx="6"/><rect class="trait" x="130" y="92" width="140" height="40" rx="6" fill="none"/><text class="texte" x="200" y="108" text-anchor="middle">Box (routeur)</text><text class="texte-petit" x="200" y="124" text-anchor="middle">IP publique 203.0.113.25</text><line class="trait" x1="200" y1="132" x2="68" y2="190"/><line class="pointille" x1="200" y1="132" x2="200" y2="190"/><line class="pointille" x1="200" y1="132" x2="332" y2="190"/><text class="texte-main" x="390" y="158" text-anchor="end">réseau local</text><rect class="aplat-papier" x="10" y="190" width="116" height="46" rx="6"/><rect class="trait" x="10" y="190" width="116" height="46" rx="6" fill="none"/><text class="texte" x="68" y="208" text-anchor="middle">Ordinateur</text><text class="texte-petit" x="68" y="226" text-anchor="middle">192.168.1.10</text><rect class="aplat-papier" x="142" y="190" width="116" height="46" rx="6"/><rect class="trait" x="142" y="190" width="116" height="46" rx="6" fill="none"/><text class="texte" x="200" y="208" text-anchor="middle">Smartphone</text><text class="texte-petit" x="200" y="226" text-anchor="middle">192.168.1.11</text><rect class="aplat-papier" x="274" y="190" width="116" height="46" rx="6"/><rect class="trait" x="274" y="190" width="116" height="46" rx="6" fill="none"/><text class="texte" x="332" y="208" text-anchor="middle">Thermostat</text><text class="texte-petit" x="332" y="226" text-anchor="middle">192.168.1.12</text></svg>` },
            { t: "verifie", q: "Quelle est la différence entre Internet et le Web ?", choix: ["Ce sont deux mots pour la même chose", "Le Web est un service qui fonctionne grâce au réseau Internet", "Internet est un service du Web"], bonne: 1, explication: "Internet est l'**infrastructure** (le réseau de réseaux). Le Web est **un service** parmi d'autres qui l'utilise, comme le courriel." },
          ],
        },
        {
          titre: "Client, serveur et DNS : le voyage d'une page",
          blocs: [
            { t: "texte", md: "Quand tu ouvres un site, ton navigateur est le **client** : il **demande**. L'ordinateur distant qui héberge le site est le **serveur** : il **répond**. Mais le client ne connaît que le nom du site, pas son adresse IP. Il interroge d'abord un **serveur DNS**, l'annuaire d'Internet." },
            { t: "schema", titre: "Taper une adresse dans le navigateur", legende: "1. Le client demande l'adresse IP au DNS. 2. Le DNS la donne. 3. Le client envoie sa requête au serveur web. 4. Le serveur renvoie la page, découpée en paquets.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat" x="10" y="92" width="110" height="56" rx="6"/><rect class="trait" x="10" y="92" width="110" height="56" rx="6" fill="none"/><text class="texte" x="65" y="116" text-anchor="middle">Navigateur</text><text class="texte-petit" x="65" y="134" text-anchor="middle">(client)</text><rect class="aplat-papier" x="270" y="14" width="120" height="50" rx="6"/><rect class="trait" x="270" y="14" width="120" height="50" rx="6" fill="none"/><text class="texte" x="330" y="36" text-anchor="middle">Serveur DNS</text><text class="texte-petit" x="330" y="54" text-anchor="middle">l'annuaire</text><rect class="aplat-papier" x="270" y="170" width="120" height="56" rx="6"/><rect class="trait" x="270" y="170" width="120" height="56" rx="6" fill="none"/><text class="texte" x="330" y="192" text-anchor="middle">Serveur web</text><text class="texte-petit" x="330" y="212" text-anchor="middle">203.0.113.8</text><line class="trait" x1="120" y1="96" x2="266" y2="31" marker-end="url(#fl)"/><text class="texte-petit" x="178" y="54" text-anchor="end">1. exemple.fr ?</text><line x1="270" y1="52" x2="124" y2="110" stroke="var(--pigment)" stroke-width="1.5" marker-end="url(#fl-p)"/><text class="texte-pigment" x="215" y="102" text-anchor="middle">2. 203.0.113.8</text><line class="trait" x1="120" y1="128" x2="266" y2="181" marker-end="url(#fl)"/><text class="texte-petit" x="200" y="148">3. requête HTTPS</text><line x1="270" y1="204" x2="124" y2="143" stroke="var(--pigment)" stroke-width="1.5" marker-end="url(#fl-p)"/><text class="texte-pigment" x="210" y="204" text-anchor="end">4. la page</text></svg>` },
            { t: "tableau", titre: "Les principaux protocoles et services", entetes: ["Protocole", "Rôle", "Exemple"], lignes: [["HTTP", "transférer les pages web", "afficher un site"], ["HTTPS", "transférer les pages en les **chiffrant**", "cadenas : connexion, paiement"], ["TCP/IP", "découper en **paquets**, adresser et acheminer", "toute donnée sur Internet"], ["DNS", "traduire un nom de domaine en adresse IP", "exemple.fr → 203.0.113.8"], ["SMTP", "envoyer un courriel", "message vers un serveur de messagerie"]] },
          ],
        },
        {
          titre: "Mesurer les données : octets, débit, latence",
          blocs: [
            { t: "propriete", titre: "Les unités à connaître", md: "1 **octet** = 8 **bits**. 1 ko = 1 000 octets ; 1 Mo = 1 000 ko ; 1 Go = 1 000 Mo.\n\nLe **débit** est la quantité de données transmise par seconde, en **bit/s** (souvent en Mbit/s). La **latence** est le **délai** de réaction de la connexion, en millisecondes.\n\n==Durée = taille (en bits) ÷ débit (en bit/s)==" },
            { t: "exemple", titre: "Télécharger un fichier de 50 Mo à 20 Mbit/s", etapes: ["Même unité d'abord : 50 Mo = 50 × 8 = 400 Mbit.", "Durée = 400 ÷ 20 = **20 s**."] },
            { t: "attention", md: "Le piège classique : diviser directement 50 par 20. Les fichiers se mesurent en **octets** (o), les débits en **bits** (bit) : il faut **multiplier par 8** avant de diviser. Et 3 ko, ce n'est pas 3 000 bits mais 3 000 × 8 = 24 000 bits." },
            { t: "verifie", q: "Combien de temps faut-il pour télécharger 30 Mo avec un débit de 60 Mbit/s ?", choix: ["0,5 s", "4 s", "2 s"], bonne: 1, explication: "30 Mo = 30 × 8 = 240 Mbit, puis 240 ÷ 60 = **4 s**. La réponse 0,5 s oublie la conversion octets → bits." },
          ],
        },
        {
          titre: "Cloud, objets connectés et bases de données",
          blocs: [
            { t: "definition", terme: "Cloud et objet connecté", md: "Le **cloud** désigne des **serveurs distants**, rassemblés dans des **data centers**, qui stockent tes données et font tourner des services. Mettre ses photos « dans le cloud », c'est les copier sur ces serveurs. Un **objet connecté (IoT)** est un objet du quotidien (thermostat, montre, ampoule) qui échange des données par le réseau." },
            { t: "texte", md: "Le thermostat de la maison envoie ses mesures à un serveur, qui les range dans une **base de données**. Les informations y sont classées dans des **tables** : chaque **ligne** est un **enregistrement**, chaque **colonne** est un **champ**." },
            { t: "tableau", titre: "La table « mesures » du thermostat", entetes: ["id", "piece", "temperature", "heure"], lignes: [["1", "salon", "19,5", "07:00"], ["2", "chambre", "17,0", "07:00"], ["3", "salon", "20,5", "08:00"]] },
          ],
        },
        {
          titre: "Se protéger : cybersécurité et RGPD",
          blocs: [
            { t: "liste", titre: "Les bons réflexes", items: ["Un **mot de passe long et unique** par compte, par exemple une phrase de passe comme Tortue!Velo7Nuage#Lune.", "Installer **vite les mises à jour** : elles corrigent des failles de sécurité.", "Se méfier de l'**hameçonnage** (phishing) : un message urgent qui demande ton mot de passe est un piège.", "Activer l'**authentification à deux facteurs**."] },
            { t: "etapes", titre: "L'authentification à deux facteurs (2FA)", items: [{ titre: "Ce que tu sais", md: "Tu saisis ton identifiant et ton mot de passe." }, { titre: "Ce que tu possèdes", md: "Le site envoie un code temporaire sur ton téléphone." }, { titre: "Vérification", md: "Tu recopies le code, valable quelques minutes." }, { titre: "Accès", md: "Un pirate qui a volé ton mot de passe reste bloqué : il n'a pas ton téléphone." }] },
            { t: "propriete", titre: "Le RGPD protège tes données", md: "Le **Règlement général sur la protection des données** (Union européenne, 2018) te donne le droit d'**accéder** aux données qu'un site a collectées sur toi, de les **rectifier** et de les faire **effacer**. Nos usages laissent des **traces numériques** : cookies, historique, géolocalisation." },
            { t: "verifie", q: "Tu reçois : « Votre compte sera supprimé dans 24 h, cliquez ici et saisissez votre mot de passe ». Que fais-tu ?", choix: ["Je clique vite pour sauver mon compte", "Je ne clique pas, je supprime le message ou je le signale", "Je réponds en donnant mon mot de passe"], bonne: 1, explication: "Urgence + demande de mot de passe : c'est de l'**hameçonnage**. Aucun service sérieux ne demande ton mot de passe par courriel." },
          ],
        },
      ],
      bilan: "Une adresse IP pour chaque appareil, un DNS pour traduire les noms, des paquets pour voyager : et toi, un mot de passe solide pour fermer la porte.",
    },
    "3e-technologie-05-materiaux-structures-energie": {
      accroche: "Une maison récente produit son électricité sur le toit, la stocke dans une batterie et baisse seule le chauffage quand tout le monde est parti. Sous la charpente, des triangles de bois tiennent le poids de la neige. Matériaux, structures, énergie : tout est choisi.",
      objectifs: [
        "Choisir un matériau selon ses propriétés, son coût et son impact",
        "Identifier les efforts dans une structure et expliquer la triangulation",
        "Décrire une chaîne de conversion d'énergie et calculer un rendement",
        "Expliquer l'efficacité énergétique de l'habitat et des réseaux",
      ],
      sections: [
        {
          titre: "Choisir le bon matériau",
          blocs: [
            { t: "texte", md: "On ne choisit pas un matériau parce qu'il est joli. On compare ses **propriétés** (masse volumique, résistance, conductivité électrique ou thermique, résistance à la corrosion), son **coût** et son **impact environnemental** : extraction, énergie de fabrication, recyclage." },
            { t: "tableau", titre: "Les grandes familles de matériaux", entetes: ["Famille", "Exemples", "Propriétés typiques"], lignes: [["Métaux", "acier, aluminium, cuivre", "résistants, conducteurs ; l'acier rouille, l'aluminium est léger"], ["Polymères", "PLA, PVC, polystyrène", "légers, faciles à mouler, isolants"], ["Céramiques et verres", "verre, porcelaine", "durs, fragiles, résistent à la chaleur"], ["Matériaux organiques", "bois, liège, laine", "renouvelables, isolants"], ["Composites", "fibre de carbone, béton armé", "très résistants pour leur masse, souvent coûteux"]] },
            { t: "exemple", titre: "Un cadre de vélo léger qui ne rouille pas", md: "L'acier est solide mais lourd et rouille. L'**aluminium** est léger, ne rouille pas et coûte raisonnablement : c'est le choix le plus courant. La fibre de carbone est encore plus légère, mais chère et difficile à recycler." },
            { t: "verifie", q: "Quel matériau isole le mieux les murs d'une maison ?", choix: ["L'acier", "La laine de verre", "Le cuivre"], bonne: 1, explication: "La laine de verre emprisonne de l'air immobile : elle conduit très mal la chaleur. Les métaux, eux, sont de bons conducteurs thermiques." },
          ],
        },
        {
          titre: "Les efforts dans une structure",
          blocs: [
            { t: "texte", md: "Un pont, un pylône ou une étagère subissent des **efforts** : leur propre poids, les charges, le vent. Chaque pièce est sollicitée d'une façon précise, qu'il faut reconnaître pour bien la dimensionner." },
            { t: "schema", titre: "Les cinq types d'efforts", legende: "Les flèches montrent les forces appliquées à la pièce.", svg: `<svg viewBox="0 0 400 244"><rect class="aplat" x="32" y="50" width="76" height="16"/><rect class="trait" x="32" y="50" width="76" height="16" fill="none"/><line class="trait" x1="32" y1="58" x2="10" y2="58" marker-end="url(#fl)"/><line class="trait" x1="108" y1="58" x2="130" y2="58" marker-end="url(#fl)"/><text class="texte" x="70" y="96" text-anchor="middle">Traction</text><text class="texte-petit" x="70" y="112" text-anchor="middle">on étire</text><rect class="aplat" x="162" y="50" width="76" height="16"/><rect class="trait" x="162" y="50" width="76" height="16" fill="none"/><line class="trait" x1="140" y1="58" x2="160" y2="58" marker-end="url(#fl)"/><line class="trait" x1="260" y1="58" x2="240" y2="58" marker-end="url(#fl)"/><text class="texte" x="200" y="96" text-anchor="middle">Compression</text><text class="texte-petit" x="200" y="112" text-anchor="middle">on écrase</text><path class="aplat" d="M290 46 Q330 70 370 46 L370 58 Q330 82 290 58 Z"/><path class="trait" d="M290 46 Q330 70 370 46 L370 58 Q330 82 290 58 Z" fill="none"/><polygon class="trait" points="290,58 284,72 296,72" fill="none"/><polygon class="trait" points="370,58 364,72 376,72" fill="none"/><line class="trait" x1="330" y1="18" x2="330" y2="54" marker-end="url(#fl)"/><text class="texte" x="330" y="96" text-anchor="middle">Flexion</text><text class="texte-petit" x="330" y="112" text-anchor="middle">on plie</text><rect class="aplat" x="60" y="166" width="100" height="20"/><rect class="trait" x="60" y="166" width="100" height="20" fill="none"/><path class="trait" d="M52 160 Q38 176 52 192" fill="none" marker-end="url(#fl)"/><path class="trait" d="M168 192 Q182 176 168 160" fill="none" marker-end="url(#fl)"/><text class="texte" x="110" y="218" text-anchor="middle">Torsion</text><text class="texte-petit" x="110" y="234" text-anchor="middle">on tord</text><rect class="aplat" x="232" y="160" width="70" height="14"/><rect class="trait" x="232" y="160" width="70" height="14" fill="none"/><rect class="aplat-papier" x="282" y="174" width="70" height="14"/><rect class="trait" x="282" y="174" width="70" height="14" fill="none"/><circle class="trait" cx="292" cy="174" r="5" fill="none"/><line class="trait" x1="232" y1="167" x2="210" y2="167" marker-end="url(#fl)"/><line class="trait" x1="352" y1="181" x2="374" y2="181" marker-end="url(#fl)"/><text class="texte" x="292" y="218" text-anchor="middle">Cisaillement</text><text class="texte-petit" x="292" y="234" text-anchor="middle">on coupe le rivet</text></svg>` },
            { t: "propriete", titre: "Le triangle est indéformable", md: "Un carré aux angles articulés s'écrase en losange. Un **triangle**, lui, ne peut pas changer de forme sans changer la longueur d'un côté : c'est la **seule figure indéformable**. Ajouter des barres en diagonale pour former des triangles s'appelle la **triangulation** : ponts, pylônes, grues et charpentes l'utilisent." },
            { t: "schema", titre: "Triangulation : une diagonale change tout", legende: "À gauche, le cadre articulé se déforme sous la poussée. À droite, la diagonale forme deux triangles : le cadre reste rigide.", svg: `<svg viewBox="0 0 400 196"><rect class="pointille" x="40" y="47" width="100" height="93" fill="none"/><path class="trait" d="M40 140 L140 140 L172 50 L72 50 Z" fill="none"/><line class="trait" x1="20" y1="50" x2="68" y2="50" marker-end="url(#fl)"/><circle class="aplat-papier" cx="40" cy="140" r="4"/><circle class="aplat-papier" cx="140" cy="140" r="4"/><circle class="aplat-papier" cx="172" cy="50" r="4"/><circle class="aplat-papier" cx="72" cy="50" r="4"/><text class="texte" x="105" y="174" text-anchor="middle">le cadre se déforme</text><rect class="trait" x="240" y="47" width="100" height="93" fill="none"/><line class="trait" x1="240" y1="140" x2="340" y2="47" stroke="var(--pigment)" stroke-width="3"/><line class="trait" x1="200" y1="47" x2="236" y2="47" marker-end="url(#fl)"/><circle class="aplat-papier" cx="240" cy="140" r="4"/><circle class="aplat-papier" cx="340" cy="140" r="4"/><circle class="aplat-papier" cx="340" cy="47" r="4"/><circle class="aplat-papier" cx="240" cy="47" r="4"/><text class="texte" x="290" y="174" text-anchor="middle">il reste rigide</text></svg>` },
            { t: "savais-tu", md: "Une **poutre en I** (profilé IPN) place la matière loin du centre, là où la flexion tire et écrase le plus. À masse égale, elle résiste bien mieux à la flexion qu'une poutre pleine de section carrée." },
          ],
        },
        {
          titre: "Convertir l'énergie, calculer un rendement",
          blocs: [
            { t: "texte", md: "L'énergie ne se crée pas : elle se **convertit** d'une forme à une autre. À chaque conversion, une partie part en **chaleur** inutile. On le voit très bien dans une centrale hydroélectrique." },
            { t: "schema", titre: "La chaîne de conversion d'une centrale hydroélectrique", legende: "Exemple : 1 000 J d'énergie de l'eau donnent 850 J d'électricité. Le reste est perdu en chaleur et en frottements.", svg: `<svg viewBox="0 0 400 190"><rect class="aplat" x="6" y="50" width="84" height="54" rx="6"/><rect class="trait" x="6" y="50" width="84" height="54" rx="6" fill="none"/><text class="texte-petit" x="48" y="72" text-anchor="middle">Barrage</text><text class="texte-pigment" x="48" y="92" text-anchor="middle">potentielle</text><rect class="aplat" x="110" y="50" width="84" height="54" rx="6"/><rect class="trait" x="110" y="50" width="84" height="54" rx="6" fill="none"/><text class="texte-petit" x="152" y="72" text-anchor="middle">Chute d'eau</text><text class="texte-pigment" x="152" y="92" text-anchor="middle">cinétique</text><rect class="aplat" x="214" y="50" width="84" height="54" rx="6"/><rect class="trait" x="214" y="50" width="84" height="54" rx="6" fill="none"/><text class="texte-petit" x="256" y="72" text-anchor="middle">Turbine</text><text class="texte-pigment" x="256" y="92" text-anchor="middle">mécanique</text><rect class="aplat" x="318" y="50" width="78" height="54" rx="6"/><rect class="trait" x="318" y="50" width="78" height="54" rx="6" fill="none"/><text class="texte-petit" x="357" y="72" text-anchor="middle">Alternateur</text><text class="texte-pigment" x="357" y="92" text-anchor="middle">électrique</text><line class="trait" x1="90" y1="77" x2="108" y2="77" marker-end="url(#fl)"/><line class="trait" x1="194" y1="77" x2="212" y2="77" marker-end="url(#fl)"/><line class="trait" x1="298" y1="77" x2="316" y2="77" marker-end="url(#fl)"/><line class="pointille" x1="256" y1="104" x2="256" y2="136" marker-end="url(#fl)"/><line class="pointille" x1="357" y1="104" x2="357" y2="136" marker-end="url(#fl)"/><text class="texte-petit" x="306" y="156" text-anchor="middle">pertes : chaleur, frottements</text><text class="texte-main" x="200" y="30" text-anchor="middle">1 000 J → 850 J utiles</text></svg>` },
            { t: "propriete", titre: "Rendement", md: "==Rendement = énergie utile ÷ énergie consommée==\n\nOn l'exprime par un nombre sans unité ou en pourcentage. Il est **toujours inférieur à 1** (à 100 %), à cause des pertes. On peut aussi le calculer avec des puissances : puissance utile ÷ puissance reçue." },
            { t: "exemple", titre: "Deux calculs de rendement", etapes: ["Centrale : 850 ÷ 1 000 = 0,85, soit **85 %**.", "Moteur de trottinette : il reçoit 600 J et fournit 450 J d'énergie mécanique. 450 ÷ 600 = 0,75, soit **75 %**.", "Panneau solaire de 3 m² recevant 1 000 W par m² : puissance reçue 3 × 1 000 = 3 000 W. S'il fournit 600 W, rendement = 600 ÷ 3 000 = **20 %**."] },
            { t: "verifie", q: "Un moteur reçoit 800 J et fournit 600 J d'énergie mécanique. Son rendement vaut…", choix: ["133 %", "75 %", "200 J"], bonne: 1, explication: "600 ÷ 800 = 0,75, soit 75 %. Un rendement n'est jamais supérieur à 100 %, et ce n'est pas une énergie en joules : 200 J, ce sont les pertes." },
          ],
        },
        {
          titre: "Produire et stocker l'énergie",
          blocs: [
            { t: "texte", md: "Les **énergies renouvelables** (soleil, vent, eau, biomasse, géothermie) se régénèrent à l'échelle humaine. Les **énergies fossiles** (charbon, pétrole, gaz naturel) se sont formées en millions d'années : elles **s'épuisent** et rejettent du **CO₂** en brûlant." },
            { t: "liste", titre: "Stocker pour plus tard", items: ["**Batterie** : stocke l'énergie sous forme chimique, la restitue sous forme électrique.", "**Barrage de pompage** : on remonte l'eau quand l'électricité abonde (énergie potentielle).", "**Volant d'inertie** : une roue lancée à grande vitesse (énergie cinétique).", "**Hydrogène** : produit avec de l'électricité, il peut la restituer dans une pile à combustible."] },
          ],
        },
        {
          titre: "Un habitat économe, un réseau intelligent",
          blocs: [
            { t: "graphique", type: "secteurs", titre: "Par où s'échappe la chaleur d'une maison mal isolée (ordre de grandeur)", unite: "%", donnees: [{ label: "Toit", valeur: 30 }, { label: "Murs", valeur: 25 }, { label: "Air renouvelé", valeur: 20 }, { label: "Fenêtres", valeur: 13 }, { label: "Sol", valeur: 7 }, { label: "Ponts thermiques", valeur: 5 }] },
            { t: "texte", md: "On commence donc par **isoler** (toit d'abord), poser du **double vitrage** et une **ventilation** efficace. La **domotique** fait le reste : un thermostat connecté baisse le chauffage quand la maison est vide et le relance avant ton retour. On garde le confort et on **consomme moins**.\n\nÀ l'échelle d'un pays, un **réseau électrique intelligent** (smart grid) mesure en temps réel production et consommation, et les ajuste : il peut par exemple lancer la recharge des voitures quand le vent souffle fort." },
          ],
        },
      ],
      bilan: "Le bon matériau au bon endroit, des triangles pour la rigidité, des conversions avec le moins de pertes possible : c'est ainsi qu'on construit solide et sobre.",
    },
    "3e-technologie-06-modelisation-simulation": {
      accroche: "Le support de téléphone de ton bureau a peut-être existé des semaines sur un écran avant d'être fabriqué : dessiné en 3D, testé virtuellement sous le poids du téléphone, corrigé, puis imprimé couche par couche en 40 minutes. Bienvenue dans le monde de la maquette numérique.",
      objectifs: [
        "Utiliser un modeleur volumique et comprendre la maquette numérique",
        "Lire un dessin technique : vues, coupe, cotes, échelle",
        "Interpréter une simulation et en connaître les limites",
        "Choisir un procédé de prototypage rapide en pensant à l'ergonomie",
      ],
      sections: [
        {
          titre: "Du modèle 3D à la maquette numérique",
          blocs: [
            { t: "definition", terme: "Modeleur volumique et maquette numérique", md: "Un **modeleur volumique** (Tinkercad, Onshape, SketchUp, SolidWorks) est un logiciel qui crée le **modèle 3D** de chaque pièce. L'**assemblage** de toutes les pièces modélisées forme la **maquette numérique** de l'objet." },
            { t: "texte", md: "On part le plus souvent d'une **esquisse** en 2D, qu'on **extrude** pour lui donner une épaisseur, puis on ajoute des perçages, des arrondis, des congés. La maquette numérique permet de **voir** l'objet sous tous les angles, de vérifier que les pièces s'emboîtent, de le **modifier** en quelques clics, de le **simuler** et d'envoyer les fichiers vers les machines de fabrication." },
          ],
        },
        {
          titre: "Lire un dessin technique : vues et coupe",
          blocs: [
            { t: "texte", md: "Le dessin technique est un langage universel : n'importe quel atelier du monde le lit de la même façon. Un objet y est représenté par plusieurs **vues** à plat. En **projection européenne**, la vue de dessus se place **sous** la vue de face, et la vue de gauche **à droite** de la vue de face." },
            { t: "schema", titre: "Un bloc percé : trois vues et une coupe", legende: "Arêtes vues en trait continu fort, arêtes cachées du trou en traits interrompus, axes en trait mixte. Dans la coupe A-A, la matière coupée est hachurée.", svg: `<svg viewBox="0 0 400 226"><line class="trait-fin" x1="100" y1="14" x2="42" y2="14" marker-end="url(#fl)"/><line class="trait-fin" x1="100" y1="14" x2="158" y2="14" marker-end="url(#fl)"/><text class="texte-petit" x="100" y="10" text-anchor="middle">60</text><rect class="trait" x="40" y="30" width="120" height="60" fill="none" stroke-width="2.5"/><line class="pointille" x1="88" y1="30" x2="88" y2="90"/><line class="pointille" x1="112" y1="30" x2="112" y2="90"/><line x1="100" y1="22" x2="100" y2="98" stroke="var(--encre)" stroke-width="0.8" stroke-dasharray="10 3 2 3"/><text class="texte-petit" x="100" y="110" text-anchor="middle">Vue de face</text><rect class="trait" x="200" y="30" width="50" height="60" fill="none" stroke-width="2.5"/><line class="pointille" x1="213" y1="30" x2="213" y2="90"/><line class="pointille" x1="237" y1="30" x2="237" y2="90"/><line x1="225" y1="22" x2="225" y2="98" stroke="var(--encre)" stroke-width="0.8" stroke-dasharray="10 3 2 3"/><text class="texte-petit" x="225" y="110" text-anchor="middle">Vue de gauche</text><rect class="trait" x="40" y="130" width="120" height="50" fill="none" stroke-width="2.5"/><circle class="trait" cx="100" cy="155" r="12" fill="none" stroke-width="2.5"/><line x1="100" y1="138" x2="100" y2="172" stroke="var(--encre)" stroke-width="0.8" stroke-dasharray="10 3 2 3"/><line x1="28" y1="155" x2="172" y2="155" stroke="var(--encre)" stroke-width="0.8" stroke-dasharray="10 3 2 3"/><line class="trait" x1="30" y1="166" x2="30" y2="150" marker-end="url(#fl)"/><line class="trait" x1="170" y1="166" x2="170" y2="150" marker-end="url(#fl)"/><text class="texte" x="20" y="152" text-anchor="middle">A</text><text class="texte" x="182" y="152" text-anchor="middle">A</text><text class="texte-petit" x="100" y="200" text-anchor="middle">Vue de dessus</text><line class="trait-fin" x1="270" y1="140" x2="280" y2="130"/><line class="trait-fin" x1="270" y1="150" x2="290" y2="130"/><line class="trait-fin" x1="270" y1="160" x2="300" y2="130"/><line class="trait-fin" x1="270" y1="170" x2="310" y2="130"/><line class="trait-fin" x1="270" y1="180" x2="318" y2="132"/><line class="trait-fin" x1="270" y1="190" x2="318" y2="142"/><line class="trait-fin" x1="318" y1="152" x2="280" y2="190"/><line class="trait-fin" x1="318" y1="162" x2="290" y2="190"/><line class="trait-fin" x1="318" y1="172" x2="300" y2="190"/><line class="trait-fin" x1="318" y1="182" x2="310" y2="190"/><line class="trait-fin" x1="342" y1="140" x2="352" y2="130"/><line class="trait-fin" x1="342" y1="150" x2="362" y2="130"/><line class="trait-fin" x1="342" y1="160" x2="372" y2="130"/><line class="trait-fin" x1="342" y1="170" x2="382" y2="130"/><line class="trait-fin" x1="342" y1="180" x2="390" y2="132"/><line class="trait-fin" x1="342" y1="190" x2="390" y2="142"/><line class="trait-fin" x1="390" y1="152" x2="352" y2="190"/><line class="trait-fin" x1="390" y1="162" x2="362" y2="190"/><line class="trait-fin" x1="390" y1="172" x2="372" y2="190"/><line class="trait-fin" x1="390" y1="182" x2="382" y2="190"/><rect class="trait" x="270" y="130" width="48" height="60" fill="none" stroke-width="2.5"/><rect class="trait" x="342" y="130" width="48" height="60" fill="none" stroke-width="2.5"/><line x1="330" y1="122" x2="330" y2="198" stroke="var(--encre)" stroke-width="0.8" stroke-dasharray="10 3 2 3"/><text class="texte-petit" x="330" y="214" text-anchor="middle">Coupe A-A</text></svg>` },
            { t: "tableau", titre: "Les traits du dessin technique", entetes: ["Trait", "Ce qu'il représente"], lignes: [["Continu fort", "les arêtes **vues** (contours visibles)"], ["Interrompu fin (tirets)", "les arêtes **cachées**"], ["Mixte fin (trait-point)", "les **axes** et les plans de coupe"], ["Continu fin", "les **hachures** et les lignes de cote"]] },
            { t: "definition", terme: "Coupe", md: "Une vue qui montre l'**intérieur** d'une pièce, comme si on l'avait sciée selon un **plan imaginaire** (ici le plan A-A). Les surfaces où la scie a touché la matière sont **hachurées** ; le trou, vide, ne l'est pas." },
            { t: "verifie", q: "Sur un dessin technique, quel trait représente une arête cachée ?", choix: ["Un trait continu fort", "Un trait interrompu fin", "Un trait mixte fin"], bonne: 1, explication: "Les arêtes cachées sont en **tirets fins** (trait interrompu). Le trait mixte (trait-point) sert aux axes." },
          ],
        },
        {
          titre: "Cotes et échelles",
          blocs: [
            { t: "propriete", titre: "Lire une échelle", md: "Les **cotes** indiquent toujours les **dimensions réelles**, en **millimètres**, quelle que soit l'échelle du dessin.\n\n• **Échelle 1:5** : 1 mm sur le dessin = 5 mm en vrai. Le dessin est 5 fois **plus petit**.\n• **Échelle 10:1** : 10 mm sur le dessin = 1 mm en vrai. Le dessin est 10 fois **plus grand**, pratique pour une petite pièce." },
            { t: "exemple", titre: "Passer du dessin à la réalité, et inversement", etapes: ["Échelle 1:5, on mesure 18 mm sur le dessin : longueur réelle = 18 × 5 = **90 mm**.", "Une vis mesure 4 mm, dessinée à l'échelle 10:1 : longueur sur le dessin = 4 × 10 = **40 mm**.", "Sur un plan à l'échelle 1:2, la cote « 40 » signifie **40 mm réels** : sur le papier, le trait ne mesure que 20 mm."] },
            { t: "attention", md: "Ne multiplie jamais une **cote** par l'échelle : elle est déjà la vraie dimension. C'est seulement une longueur **mesurée à la règle** sur le dessin qu'il faut convertir." },
            { t: "verifie", q: "Sur un dessin à l'échelle 1:4, tu mesures 15 mm à la règle. Quelle est la longueur réelle ?", choix: ["3,75 mm", "15 mm", "60 mm"], bonne: 2, explication: "À l'échelle 1:4, le dessin est 4 fois plus petit que l'objet : 15 × 4 = **60 mm**." },
          ],
        },
        {
          titre: "Simuler avant de fabriquer",
          blocs: [
            { t: "texte", md: "Une **simulation** calcule le comportement du modèle numérique avant qu'il existe : où la pièce va-t-elle plier ? Va-t-elle chauffer ? Le robot suivra-t-il sa trajectoire ? On corrige à l'écran, et on gagne du **temps**, des **matériaux** et de l'**argent**." },
            { t: "tableau", titre: "Trois familles de simulations", entetes: ["Simulation", "Question à laquelle elle répond", "Exemple"], lignes: [["Mécanique", "la pièce résiste-t-elle aux efforts ?", "zone rouge trop fine sur le support de téléphone"], ["Thermique", "comment la chaleur se répartit-elle ?", "un boîtier électronique surchauffe-t-il ?"], ["Comportement (cinématique)", "comment le système bouge-t-il ?", "trajet du robot aspirateur dans une pièce"]] },
            { t: "attention", md: "Un modèle n'est **jamais** parfaitement fidèle à la réalité : le vrai matériau a des défauts, l'imprimante n'est pas parfaite, les conditions changent. La simulation **prépare** les essais, elle ne **remplace pas** les tests sur le prototype." },
          ],
        },
        {
          titre: "Prototyper vite et penser à l'utilisateur",
          blocs: [
            { t: "etapes", titre: "Fabriquer une pièce par impression 3D", items: [{ titre: "Modéliser", md: "Créer la pièce dans le modeleur volumique." }, { titre: "Exporter en STL", md: "Le format de fichier universel des imprimantes 3D." }, { titre: "Trancher", md: "Le logiciel de tranchage découpe le modèle en couches et règle le remplissage." }, { titre: "Imprimer", md: "La buse dépose le fil fondu (PLA) couche par couche." }, { titre: "Finir et tester", md: "Retirer les supports, vérifier les dimensions et l'usage." }] },
            { t: "tableau", titre: "Choisir un procédé de prototypage rapide", entetes: ["Procédé", "Principe", "Idéal pour"], lignes: [["Impression 3D", "dépôt de fil fondu, couche par couche", "pièces en volume, formes complexes"], ["Découpe laser", "un faisceau découpe ou grave une plaque", "pièces plates : contreplaqué, carton, acrylique"], ["Fraisage numérique", "un outil tournant enlève de la matière", "pièces précises dans un bloc"]] },
            { t: "definition", terme: "Ergonomie", md: "L'étude de l'adaptation d'un objet au **corps** et aux **gestes** de l'utilisateur : une poignée moulée à la forme de la main, la hauteur d'un plan de travail, des boutons assez gros, un écran lisible." },
            { t: "exemple", titre: "Le support de téléphone", md: "La simulation montre une zone rouge trop fine au pied du support : tu l'épaisses de 2 mm. Tu arrondis le bord où repose le pouce pour le **confort** (ergonomie). Puis export STL, tranchage, et 40 minutes d'impression." },
          ],
        },
      ],
      bilan: "Modéliser, représenter, simuler, prototyper : on se trompe à l'écran pour ne pas se tromper à l'atelier, mais le dernier mot revient toujours au test réel.",
    },
    "3e-technologie-07-impacts-ethique-durable": {
      accroche: "Ton smartphone pèse moins de 200 grammes. Pourtant, pour le fabriquer, on a extrait des dizaines de kilos de roches, utilisé des métaux venus de plusieurs continents et fait voyager ses pièces autour du monde. Avant même que tu l'allumes, il a déjà laissé une trace sur la planète.",
      objectifs: [
        "Décrire le cycle de vie d'un objet et le principe de l'analyse de cycle de vie",
        "Expliquer l'économie circulaire et la lutte contre l'obsolescence",
        "Estimer l'empreinte du numérique et adopter des usages responsables",
        "Porter un regard critique sur l'intelligence artificielle et les choix low-tech",
      ],
      sections: [
        {
          titre: "Le cycle de vie d'un objet",
          blocs: [
            { t: "texte", md: "Un objet technique ne naît pas en magasin et ne disparaît pas à la poubelle. Il traverse cinq grandes étapes, et chacune consomme de l'**énergie**, de l'**eau**, des **matières premières**, et produit des **déchets** et des **gaz à effet de serre**." },
            { t: "schema", titre: "Les cinq étapes du cycle de vie", legende: "Extraction, fabrication, distribution, usage, fin de vie. La flèche pointillée montre le recyclage : les matériaux récupérés repartent vers la fabrication.", svg: `<svg viewBox="0 0 400 236"><rect class="aplat" x="145" y="12" width="110" height="30" rx="6"/><rect class="trait" x="145" y="12" width="110" height="30" rx="6" fill="none"/><text class="texte" x="200" y="32" text-anchor="middle">Extraction</text><rect class="aplat" x="280" y="78" width="110" height="30" rx="6"/><rect class="trait" x="280" y="78" width="110" height="30" rx="6" fill="none"/><text class="texte" x="335" y="98" text-anchor="middle">Fabrication</text><rect class="aplat" x="245" y="190" width="110" height="30" rx="6"/><rect class="trait" x="245" y="190" width="110" height="30" rx="6" fill="none"/><text class="texte" x="300" y="210" text-anchor="middle">Distribution</text><rect class="aplat" x="45" y="190" width="110" height="30" rx="6"/><rect class="trait" x="45" y="190" width="110" height="30" rx="6" fill="none"/><text class="texte" x="100" y="210" text-anchor="middle">Usage</text><rect class="aplat" x="10" y="78" width="110" height="30" rx="6"/><rect class="trait" x="10" y="78" width="110" height="30" rx="6" fill="none"/><text class="texte" x="65" y="98" text-anchor="middle">Fin de vie</text><line class="trait" x1="255" y1="34" x2="300" y2="74" marker-end="url(#fl)"/><line class="trait" x1="330" y1="108" x2="310" y2="186" marker-end="url(#fl)"/><line class="trait" x1="245" y1="205" x2="159" y2="205" marker-end="url(#fl)"/><line class="trait" x1="90" y1="190" x2="72" y2="112" marker-end="url(#fl)"/><line x1="120" y1="93" x2="276" y2="93" stroke="var(--pigment)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#fl-p)"/><text class="texte-pigment" x="200" y="86" text-anchor="middle">recyclage</text><text class="texte-petit" x="200" y="142" text-anchor="middle">à chaque étape :</text><text class="texte-petit" x="200" y="158" text-anchor="middle">énergie, eau, CO₂, déchets</text></svg>` },
            { t: "definition", terme: "Analyse de cycle de vie (ACV)", md: "Une méthode qui **mesure les impacts** d'un produit (énergie, eau, CO₂, déchets) à **chaque étape** de son cycle de vie, pour savoir où agir en priorité." },
            { t: "definition", terme: "Empreinte carbone", md: "La masse de **gaz à effet de serre** émise par un produit ou une activité, exprimée en **kg d'équivalent CO₂** (kg CO₂e)." },
          ],
        },
        {
          titre: "Où pèse l'impact d'un smartphone ?",
          blocs: [
            { t: "graphique", type: "secteurs", titre: "Empreinte carbone d'un smartphone selon l'étape (ordre de grandeur)", unite: "%", donnees: [{ label: "Extraction et fabrication", valeur: 80 }, { label: "Transport", valeur: 4 }, { label: "Usage (recharges)", valeur: 15 }, { label: "Fin de vie", valeur: 1 }] },
            { t: "texte", md: "Près de **80 %** de l'empreinte carbone d'un smartphone vient de sa **fabrication** : extraction des métaux (cobalt, lithium, or), puces électroniques, écran. Le recharger chaque jour pèse bien moins lourd. Conséquence directe : ==le geste le plus efficace, c'est de garder son appareil plus longtemps==." },
            { t: "verifie", q: "Quelle étape du cycle de vie d'un smartphone a le plus fort impact environnemental ?", choix: ["L'usage (les recharges)", "La fabrication", "Le transport"], bonne: 1, explication: "La fabrication (avec l'extraction des matières) représente la plus grande part, de l'ordre de 80 %. D'où l'intérêt de garder, réparer ou acheter reconditionné." },
          ],
        },
        {
          titre: "L'économie circulaire contre le tout-jetable",
          blocs: [
            { t: "texte", md: "L'**économie linéaire** suit une ligne droite : extraire, fabriquer, jeter. L'**économie circulaire** cherche à boucler la boucle pour limiter l'extraction et les déchets. Ses principes ont un **ordre de priorité** : le meilleur déchet est celui qu'on ne produit pas." },
            { t: "tableau", titre: "Les principes de l'économie circulaire", entetes: ["Principe", "Exemple"], lignes: [["Réduire", "garder son téléphone 4 ans au lieu de 2"], ["Réparer", "changer l'écran ou la batterie"], ["Réemployer", "donner son vélo à un voisin"], ["Reconditionner", "un smartphone vérifié, remis à neuf, revendu"], ["Recycler", "récupérer l'aluminium et le cuivre d'un appareil"]] },
            { t: "attention", md: "Recycler n'est **pas** toujours mieux que réparer ! Le recyclage demande de l'énergie et ne récupère qu'une partie des matériaux. Réparer prolonge la vie de l'objet entier : c'est presque toujours **préférable**." },
            { t: "propriete", titre: "Deux notions à connaître", md: "• L'**indice de réparabilité** est une note sur 10, affichée en magasin en France, qui indique si un appareil est facile à réparer. Pour certains appareils, il est remplacé peu à peu par un **indice de durabilité**, qui tient aussi compte de la solidité.\n• L'**obsolescence programmée** consiste à **raccourcir volontairement** la durée de vie d'un produit pour pousser à en racheter un. En France, c'est un délit depuis 2015." },
            { t: "exemple", titre: "Combien de téléphones en 10 ans ?", md: "En changeant tous les 2 ans : 10 ÷ 2 = 5 téléphones. Tous les 5 ans : 10 ÷ 5 = 2 téléphones. Soit **3 téléphones de moins** à fabriquer, donc environ 3 fois 80 % d'empreinte évités." },
          ],
        },
        {
          titre: "L'empreinte du numérique",
          blocs: [
            { t: "texte", md: "Le numérique paraît immatériel, mais il repose sur trois piliers bien réels : les **appareils** (fabrication et électricité), les **réseaux** (câbles, antennes, box) et les **data centers** qui stockent et calculent. Regarder une vidéo en streaming ou envoyer un courriel avec une pièce jointe sollicite les trois." },
            { t: "graphique", type: "barres", titre: "Consommation électrique annuelle d'appareils numériques à la maison (ordre de grandeur)", unite: "kWh par an", donnees: [{ label: "Smartphone", valeur: 4 }, { label: "Tablette", valeur: 12 }, { label: "Ordinateur portable", valeur: 30 }, { label: "Box internet", valeur: 100 }, { label: "Téléviseur", valeur: 150 }] },
            { t: "texte", md: "Remarque la toute petite barre du smartphone : à l'usage, il consomme très peu. Son impact est surtout caché dans sa **fabrication**. La box, allumée jour et nuit, consomme bien plus : l'éteindre la nuit est un geste utile." },
            { t: "exemple", titre: "Le CO₂ d'un data center", etapes: ["Un data center consomme 10 MWh par jour, soit 10 × 1 000 = 10 000 kWh.", "Chaque kWh produit émet 50 g de CO₂ : 10 000 × 50 = 500 000 g.", "500 000 g = **500 kg de CO₂ par jour**."] },
          ],
        },
        {
          titre: "Intelligence artificielle, éthique et low-tech",
          blocs: [
            { t: "texte", md: "Une **intelligence artificielle** apprend à partir d'énormes quantités de **données**. Si ces données sont **biaisées**, ses décisions le sont aussi. Une IA de reconnaissance de visages entraînée surtout avec des photos d'un seul groupe de personnes se trompera beaucoup plus souvent sur les autres.\n\nUtiliser une IA pose aussi des questions de **vie privée** (que deviennent tes données ?) et d'**énergie** : entraîner et faire tourner les grands modèles demande d'immenses data centers." },
            { t: "verifie", q: "Une IA de reconnaissance de visages se trompe beaucoup plus souvent sur certains groupes de personnes. Quelle est la cause la plus probable ?", choix: ["L'ordinateur n'est pas assez puissant", "Les données d'apprentissage étaient biaisées", "Ces personnes bougent trop devant la caméra"], bonne: 1, explication: "Une IA reproduit ce qu'elle a appris. Si certains groupes étaient peu présents dans les données d'entraînement, elle les reconnaît mal : c'est un **biais**." },
            { t: "definition", terme: "Low-tech", md: "Une démarche qui privilégie des objets **simples**, **robustes**, **réparables** et **sobres** en ressources : un four solaire, un vélo cargo, un frigo du désert en terre cuite." },
            { t: "savais-tu", md: "Le « frigo du désert » (zeer) n'utilise aucune électricité : deux pots de terre cuite emboîtés, du sable mouillé entre les deux. L'eau qui s'évapore refroidit le pot intérieur. Une solution low-tech vieille de plusieurs siècles !" },
          ],
        },
      ],
      bilan: "Fabriquer coûte plus cher à la planète qu'utiliser : garder, réparer, réemployer, puis seulement recycler, et choisir la technologie la plus simple qui fait le travail.",
    },
    "3e-technologie-08-demarche-projet-dnb": {
      accroche: "Votre équipe a six séances pour concevoir un mini robot aspirateur qui s'arrête avant le bord de la table. Sans plan, on se dispute, on oublie le test final et on présente un prototype qui tombe. Avec une méthode, tout change. Et cette méthode, c'est aussi celle du DNB.",
      objectifs: [
        "Organiser un projet : phases, diagramme de Gantt, rôles, revues de projet",
        "Tester et valider un prototype par rapport au cahier des charges, en sécurité",
        "Présenter un projet à l'oral avec un support adapté",
        "Appliquer la méthode de l'épreuve de sciences du DNB",
      ],
      sections: [
        {
          titre: "Les phases d'un projet",
          blocs: [
            { t: "etapes", titre: "La démarche de projet", items: [{ titre: "Analyser le besoin", md: "Bête à cornes, pieuvre, cahier des charges." }, { titre: "Rechercher et choisir", md: "Imaginer plusieurs solutions, les comparer avec des critères." }, { titre: "Planifier", md: "Lister les tâches, les durées, les rôles : le diagramme de Gantt." }, { titre: "Réaliser", md: "Fabriquer et programmer le prototype." }, { titre: "Tester et valider", md: "Mesurer et comparer au cahier des charges." }, { titre: "Présenter", md: "Expliquer la démarche et le résultat à l'oral." }] },
            { t: "definition", terme: "Prototype", md: "Un **premier exemplaire** de l'objet, fabriqué pour être **testé** avant une éventuelle production. Il peut être simplifié, mais il doit permettre de vérifier les fonctions du cahier des charges." },
          ],
        },
        {
          titre: "Planifier et s'organiser en équipe",
          blocs: [
            { t: "texte", md: "Le **diagramme de Gantt** représente chaque tâche par une **barre** sur une ligne du temps. On y lit d'un coup d'œil la **durée** des tâches, leur **ordre** et celles qu'on peut mener **en parallèle**." },
            { t: "schema", titre: "Le Gantt du mini robot", legende: "B ne commence qu'après A, C qu'après B. D se fait en parallèle de B et C. En couleur forte : la suite de tâches la plus longue, qui fixe la durée du projet.", svg: `<svg viewBox="0 0 400 196"><line class="pointille" x1="142" y1="22" x2="142" y2="148"/><line class="pointille" x1="189" y1="22" x2="189" y2="148"/><line class="pointille" x1="236" y1="22" x2="236" y2="148"/><line class="pointille" x1="283" y1="22" x2="283" y2="148"/><line class="pointille" x1="330" y1="22" x2="330" y2="148"/><text class="texte-petit" x="6" y="42">A Analyse</text><text class="texte-petit" x="6" y="72">B Modèle 3D</text><text class="texte-petit" x="6" y="102">C Impression</text><text class="texte-petit" x="6" y="132">D Programme</text><rect class="aplat-fort" x="95" y="28" width="47" height="20" rx="3"/><rect class="trait" x="95" y="28" width="47" height="20" rx="3" fill="none"/><rect class="aplat-fort" x="142" y="58" width="94" height="20" rx="3"/><rect class="trait" x="142" y="58" width="94" height="20" rx="3" fill="none"/><rect class="aplat-fort" x="236" y="88" width="141" height="20" rx="3"/><rect class="trait" x="236" y="88" width="141" height="20" rx="3" fill="none"/><rect class="aplat" x="142" y="118" width="188" height="20" rx="3"/><rect class="trait" x="142" y="118" width="188" height="20" rx="3" fill="none"/><line class="trait" x1="95" y1="148" x2="377" y2="148"/><line class="trait" x1="377" y1="16" x2="377" y2="148" stroke-width="2"/><text class="texte-pigment" x="377" y="12" text-anchor="end">fin : 6 séances</text><text class="texte-petit" x="118" y="164" text-anchor="middle">1</text><text class="texte-petit" x="165" y="164" text-anchor="middle">2</text><text class="texte-petit" x="212" y="164" text-anchor="middle">3</text><text class="texte-petit" x="259" y="164" text-anchor="middle">4</text><text class="texte-petit" x="306" y="164" text-anchor="middle">5</text><text class="texte-petit" x="353" y="164" text-anchor="middle">6</text><text class="texte-petit" x="236" y="184" text-anchor="middle">séances</text></svg>` },
            { t: "exemple", titre: "Calculer la durée minimale du projet", etapes: ["A dure 1 séance. Ensuite B (2 séances) puis C (3 séances) : 2 + 3 = 5 séances.", "En même temps, D dure 4 séances.", "Après A, on attend la plus longue des deux branches : 5 séances (B puis C) contre 4 (D).", "Durée minimale : 1 + 5 = **6 séances**."] },
            { t: "tableau", titre: "Les rôles dans l'équipe", entetes: ["Rôle", "Mission"], lignes: [["Chef de projet", "organise, suit le planning, anime les revues"], ["Responsable technique", "conçoit, fabrique, programme"], ["Responsable des tests", "prépare les essais et note les mesures"], ["Responsable communication", "prépare le support de présentation"]] },
            { t: "texte", md: "À intervalles réguliers, l'équipe tient une **revue de projet** : on fait le point sur l'avancement, on repère les problèmes et on **décide** de la suite (continuer, corriger, revoir le planning)." },
          ],
        },
        {
          titre: "Tester, valider, travailler en sécurité",
          blocs: [
            { t: "propriete", titre: "Tester n'est pas valider", md: "**Tester**, c'est **mesurer** (une distance, une durée, une masse). **Valider**, c'est **comparer** cette mesure au **niveau** exigé par le cahier des charges, **flexibilité comprise**. Un prototype est validé si chaque critère est respecté." },
            { t: "exemple", titre: "Le robot s'arrête-t-il au bon endroit ?", etapes: ["Cahier des charges : s'arrêter à 50 cm du bord, à 3 cm près. Valeurs acceptées : de 47 à 53 cm.", "Essai 1 : 52 cm. Dans l'intervalle : **critère validé**.", "Essai 2 : 45 cm. Hors intervalle : **non validé**, il faut corriger le seuil du programme et retester."] },
            { t: "liste", titre: "Sécurité à l'atelier", items: ["Porter des **lunettes de protection** près des machines.", "Attacher ses cheveux, ne pas porter d'écharpe ou de bijoux qui pendent.", "**Fixer la pièce** dans un étau avant de percer.", "Pas de gants près d'une machine qui tourne : ils peuvent être happés.", "Respecter les consignes affichées et prévenir le professeur au moindre doute."] },
            { t: "verifie", q: "Le cahier des charges impose : « autonomie de 20 min, à 2 min près ». Le prototype tient 17 min. Que conclure ?", choix: ["Il est validé, c'est presque 20 min", "Il n'est pas validé : 17 min est en dessous de 18 min", "On ne peut rien conclure"], bonne: 1, explication: "La valeur minimale acceptée est 20 − 2 = 18 min. Avec 17 min, le critère n'est **pas** respecté : on cherche la cause et on améliore." },
          ],
        },
        {
          titre: "Présenter son projet à l'oral",
          blocs: [
            { t: "liste", titre: "Un plan clair en quatre temps", ordonnee: true, items: ["**Le besoin** : quel problème résout votre objet ?", "**La solution** : comment fonctionne-t-il ? Montrez le prototype.", "**La démarche** : vos choix, vos tests, vos difficultés.", "**Le bilan** : ce qui est validé, ce que vous amélioreriez."] },
            { t: "astuce", md: "Un support **sobre** : peu de texte, de grandes images, un schéma qui parle. Tu ne lis pas tes diapositives, tu les **commentes**. Entraîne-toi à voix haute avec un chronomètre pour **respecter le temps** imparti." },
          ],
        },
        {
          titre: "Réussir l'épreuve de sciences du DNB",
          blocs: [
            { t: "propriete", titre: "L'épreuve de sciences", md: "Elle dure **1 heure** et porte sur **deux disciplines** parmi physique-chimie, SVT et technologie. Méthode : **lire** d'abord tous les documents, repérer le **verbe de la consigne**, répondre avec précision et les **unités**, puis **justifier** en citant le document." },
            { t: "tableau", titre: "Ce que demande chaque consigne", entetes: ["Verbe", "Ce qu'on attend"], lignes: [["Indiquer, nommer", "une réponse courte et précise"], ["Calculer", "la formule, le calcul posé, le résultat avec son unité"], ["Justifier", "une preuve tirée d'un document ou du cours"], ["Décrire", "dire ce qu'on observe, sans expliquer"], ["Expliquer", "dire pourquoi, avec un lien de cause à effet"]] },
            { t: "exemple", titre: "Une réponse qui obtient tous les points", md: "Consigne : « À l'aide du document 2, indiquer le capteur qui détecte la présence d'une personne et justifier. »\n\nRéponse : « **D'après le document 2**, c'est le **capteur infrarouge**, **car** il détecte la chaleur émise par le corps humain. » On nomme le document, on répond précisément, on explique avec « car »." },
            { t: "savais-tu", md: "Les fiches techniques sont des documents fréquents au DNB. Sur une batterie « 3,7 V ; 2 000 mAh », la valeur en **mAh** est sa **capacité** : elle peut fournir 2 000 mA (2 A) pendant 1 heure, ou 200 mA pendant 10 heures. Son énergie vaut environ 3,7 × 2 = 7,4 Wh." },
            { t: "verifie", q: "Au DNB, une question demande d'« indiquer la fonction du relais et justifier » à l'aide du document 2. Quelle réponse est la meilleure ?", choix: ["Distribuer.", "D'après le document 2, le relais distribue l'énergie au moteur, car il laisse passer le courant quand la carte lui en donne l'ordre.", "Le relais est un composant électronique très utile."], bonne: 1, explication: "La bonne réponse cite le document, donne la fonction précise (**distribuer**) et la **justifie** avec « car ». La première est juste mais sans justification ; la troisième ne répond pas." },
          ],
        },
      ],
      bilan: "Un projet réussi se planifie, se teste et se présente avec méthode ; au DNB, c'est pareil : lire, répondre précisément, justifier avec le document.",
    },
  },
};
