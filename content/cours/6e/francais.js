// Cours ÉCLORE — 6e Français. Schéma : docs/COURS.md
export default {
  id: "6e-francais",
  chapitres: {
    // ───────────────────────────── 1. Classes de mots ─────────────────────────────
    "6e-francais-01-classes-de-mots": {
      accroche: "« Ferme la porte ! » « La ferme est loin. » « Sa voix est ferme. » Trois fois le même mot… et trois natures différentes ! Pour savoir ce qu'est un mot, il ne suffit pas de le regarder : il faut observer comment il travaille dans la phrase.",
      objectifs: [
        "Reconnaître les cinq classes de mots variables",
        "Reconnaître les trois classes de mots invariables",
        "Trouver la classe d'un mot d'après son emploi dans la phrase",
      ],
      sections: [
        {
          titre: "La classe d'un mot, sa carte d'identité",
          blocs: [
            { t: "texte", md: "Chaque mot de la langue appartient à une grande famille grammaticale : sa **classe**, qu'on appelle aussi sa **nature**. Le dictionnaire l'indique juste après le mot : *chat*, n. m. (nom masculin) ; *dormir*, v. (verbe).\n\nLa classe est comme une carte d'identité : elle ne change pas quand le mot change de place. Ce qui change, c'est sa **fonction**, son rôle dans la phrase. Tu l'étudieras au chapitre suivant." },
            { t: "definition", terme: "Classe grammaticale (ou nature)", md: "La catégorie à laquelle appartient un mot : nom, déterminant, adjectif, pronom, verbe, adverbe, préposition ou conjonction. Elle ne dépend pas de la fonction du mot." },
            { t: "tableau", titre: "Les huit classes à connaître en 6e", entetes: ["Classe", "Variable ?", "Son rôle", "Exemples"], lignes: [
              ["**Nom**", "oui", "désigne un être, une chose, une idée", "chat, Ulysse, liberté"],
              ["**Déterminant**", "oui", "se place devant le nom et l'annonce", "le, une, mon, ces"],
              ["**Adjectif**", "oui", "précise le nom, donne une qualité", "petit, gris, joyeux"],
              ["**Pronom**", "oui", "remplace un nom ou un groupe nominal", "il, elle, le, lui, celui-ci"],
              ["**Verbe**", "oui", "exprime une action ou un état ; se conjugue", "dort, chantera, est"],
              ["**Adverbe**", "non", "précise un verbe, un adjectif ou un autre adverbe", "très, vite, lentement"],
              ["**Préposition**", "non", "introduit un complément", "à, de, dans, sur, avec, pour"],
              ["**Conjonction de coordination**", "non", "relie deux mots ou deux phrases", "mais, ou, et, donc, or, ni, car"],
            ] },
          ],
        },
        {
          titre: "Variables ou invariables ?",
          blocs: [
            { t: "texte", md: "Un mot **variable** change de forme : il prend la marque du féminin, du pluriel, ou il se conjugue. *Un petit chat → des petites chattes* : le déterminant, l'adjectif et le nom ont tous changé. *Il dort → ils dorment* : le verbe aussi.\n\nUn mot **invariable** garde toujours la même forme. Essaie : *vite* reste *vite*, que tu parles d'un garçon ou de dix filles. Ce test de transformation est ton premier outil." },
            { t: "schema", titre: "Chaque mot à sa place", legende: "Les mots sur fond coloré sont variables ; les mots sur fond clair sont invariables.", svg: `<svg viewBox="0 0 400 215"><rect class="aplat" x="25" y="30" width="80" height="34" rx="6"/><rect class="aplat" x="115" y="30" width="80" height="34" rx="6"/><rect class="aplat" x="205" y="30" width="80" height="34" rx="6"/><rect class="aplat" x="295" y="30" width="80" height="34" rx="6"/><rect class="aplat-papier" x="25" y="105" width="120" height="34" rx="6"/><rect class="aplat-papier" x="155" y="105" width="70" height="34" rx="6"/><rect class="aplat" x="235" y="105" width="70" height="34" rx="6"/><rect class="aplat" x="315" y="105" width="70" height="34" rx="6"/><rect class="trait-fin" x="25" y="30" width="80" height="34" rx="6"/><rect class="trait-fin" x="115" y="30" width="80" height="34" rx="6"/><rect class="trait-fin" x="205" y="30" width="80" height="34" rx="6"/><rect class="trait-fin" x="295" y="30" width="80" height="34" rx="6"/><rect class="trait-fin" x="25" y="105" width="120" height="34" rx="6"/><rect class="trait-fin" x="155" y="105" width="70" height="34" rx="6"/><rect class="trait-fin" x="235" y="105" width="70" height="34" rx="6"/><rect class="trait-fin" x="315" y="105" width="70" height="34" rx="6"/><text class="texte" x="65" y="52" text-anchor="middle">Le</text><text class="texte" x="155" y="52" text-anchor="middle">petit</text><text class="texte" x="245" y="52" text-anchor="middle">chat</text><text class="texte" x="335" y="52" text-anchor="middle">dort</text><text class="texte" x="85" y="127" text-anchor="middle">tranquillement</text><text class="texte" x="190" y="127" text-anchor="middle">sous</text><text class="texte" x="270" y="127" text-anchor="middle">la</text><text class="texte" x="350" y="127" text-anchor="middle">table</text><text class="texte-petit" x="65" y="82" text-anchor="middle">déterminant</text><text class="texte-petit" x="155" y="82" text-anchor="middle">adjectif</text><text class="texte-petit" x="245" y="82" text-anchor="middle">nom</text><text class="texte-petit" x="335" y="82" text-anchor="middle">verbe</text><text class="texte-petit" x="85" y="157" text-anchor="middle">adverbe</text><text class="texte-petit" x="190" y="157" text-anchor="middle">préposition</text><text class="texte-petit" x="270" y="157" text-anchor="middle">déterminant</text><text class="texte-petit" x="350" y="157" text-anchor="middle">nom</text><rect class="aplat" x="70" y="183" width="18" height="14" rx="3"/><rect class="trait-fin" x="70" y="183" width="18" height="14" rx="3"/><text class="texte-petit" x="96" y="194">mot variable</text><rect class="aplat-papier" x="230" y="183" width="18" height="14" rx="3"/><rect class="trait-fin" x="230" y="183" width="18" height="14" rx="3"/><text class="texte-petit" x="256" y="194">mot invariable</text></svg>` },
            { t: "astuce", md: "Pour retenir les sept conjonctions de coordination, pose la question : « **Mais où est donc Or-ni-car ?** » → mais, ou, et, donc, or, ni, car." },
            { t: "attention", md: "Ne confonds pas *et* (conjonction, invariable) et *est* (verbe être). Remplace par « était » : si la phrase garde son sens, c'est le verbe." },
            { t: "verifie", q: "Dans « Elle marche lentement vers la gare », quelle est la classe de « vers » ?", choix: ["un adverbe", "une préposition", "un nom", "une conjonction de coordination"], bonne: 1, explication: "« Vers » introduit le complément « la gare » : c'est une préposition, comme « à » ou « dans ». Le piège « nom » vient du *ver* de terre ou du *vers* d'un poème, qui se prononcent pareil mais ne jouent pas ce rôle ici." },
          ],
        },
        {
          titre: "Reconnaître les mots variables",
          blocs: [
            { t: "texte", md: "Quelques indices sûrs :\n\n**Le nom** peut être précédé d'un déterminant : *la liberté, un rêve*. Les noms propres (*Ulysse, Paris*) prennent une majuscule.\n\n**L'adjectif** se place devant ou derrière le nom et s'accorde avec lui : *un chat gris, une chatte grise*. Tu peux souvent ajouter « très » devant : *très gris*.\n\n**Le verbe** se conjugue : tu peux changer son temps (*il dort, il dormait, il dormira*) ou l'encadrer par une négation (*il ne dort pas*)." },
            { t: "definition", terme: "Pronom", md: "Un mot qui remplace un nom ou un groupe nominal pour éviter une répétition : « Le Renard voit le Corbeau. **Il** le flatte. » Ici, *il* remplace « le Renard ». Les pronoms personnels sujets sont : je, tu, il, elle, on, nous, vous, ils, elles." },
            { t: "exemple", titre: "Analyser deux vers de La Fontaine", md: "« Maître Corbeau, sur un arbre perché, / Tenait en son bec un fromage. »\n\n*Maître, Corbeau, arbre, bec, fromage* : noms. *Un, son, un* : déterminants. *Perché* : participe employé comme un adjectif, il précise « Corbeau ». *Tenait* : verbe (on peut dire *tient, tiendra*). *Sur, en* : prépositions." },
          ],
        },
        {
          titre: "Un même mot, plusieurs classes",
          blocs: [
            { t: "texte", md: "Certains mots changent de classe selon leur emploi. C'est là que se cachent la plupart des erreurs : il ne faut pas réciter, il faut **observer les voisins** du mot." },
            { t: "tableau", titre: "Regarde ce qui entoure le mot", entetes: ["Phrase", "Mot", "Classe", "Indice"], lignes: [
              ["Je cueille **la** rose.", "la", "déterminant", "il est devant un nom"],
              ["Je **la** cueille.", "la", "pronom", "il est devant un verbe et remplace « la rose »"],
              ["Il **ferme** la porte.", "ferme", "verbe", "il se conjugue : il fermait"],
              ["La **ferme** est loin.", "ferme", "nom", "il est précédé de « la »"],
              ["Sa voix est **ferme**.", "ferme", "adjectif", "on peut dire « très ferme »"],
            ] },
            { t: "propriete", titre: "Méthode en trois questions", md: "1. **Qui sont ses voisins ?** Un déterminant devant : c'est un nom. Un verbe juste après : c'est peut-être un pronom.\n2. **Peut-il changer de forme ?** Mets au pluriel, au féminin, change le temps.\n3. **S'il ne change jamais**, cherche parmi les invariables : adverbe, préposition ou conjonction." },
            { t: "verifie", q: "Dans « Je le vois tous les jours », quelle est la classe de « le » ?", choix: ["déterminant", "pronom", "nom", "adverbe"], bonne: 1, explication: "« Le » est placé devant le verbe « vois » et remplace quelqu'un ou quelque chose dont on a déjà parlé : c'est un pronom. Devant un nom (*le chat*), il serait déterminant." },
            { t: "savais-tu", md: "Beaucoup d'adverbes en **-ment** sont fabriqués à partir du féminin d'un adjectif : *lente → lentement*, *douce → doucement*, *rapide → rapidement*. Ce suffixe est un excellent indice pour reconnaître un adverbe." },
          ],
        },
      ],
      bilan: "La classe d'un mot est sa carte d'identité : cinq classes variables (nom, déterminant, adjectif, pronom, verbe), trois invariables (adverbe, préposition, conjonction), et un réflexe : regarder comment le mot est employé.",
    },

    // ───────────────────────────── 2. Fonctions ─────────────────────────────
    "6e-francais-02-fonctions": {
      accroche: "« Le chat mange la souris » et « La souris mange le chat » : mêmes mots, mêmes classes… et pourtant, pour la souris, tout change ! Ce qui a bougé, c'est le **rôle** de chaque mot dans la phrase : sa fonction.",
      objectifs: [
        "Trouver le verbe conjugué et son sujet",
        "Distinguer COD, COI et attribut du sujet",
        "Reconnaître les compléments circonstanciels de temps, de lieu et de manière",
      ],
      sections: [
        {
          titre: "Classe ou fonction : deux questions différentes",
          blocs: [
            { t: "texte", md: "La classe répond à la question « **Qu'est-ce que c'est ?** » (un nom, un verbe…). La fonction répond à la question « **À quoi sert-il dans cette phrase ?** ».\n\nUn même groupe nominal peut changer de fonction : « *Le loup* court » (sujet) ; « L'agneau voit *le loup* » (complément). Sa classe, elle, ne bouge pas." },
            { t: "definition", terme: "Fonction", md: "Le rôle qu'un mot ou un groupe de mots joue dans la phrase. Elle dépend de sa place et de son sens, pas de sa classe." },
            { t: "schema", titre: "L'arbre des fonctions", legende: "« Chaque matin, Léa donne du pain aux canards dans le parc. » Tout s'organise autour du verbe.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat-papier" x="10" y="28" width="110" height="44" rx="8"/><rect class="pointille" x="10" y="28" width="110" height="44" rx="8"/><rect class="aplat" x="150" y="28" width="100" height="44" rx="8"/><rect class="trait" x="150" y="28" width="100" height="44" rx="8"/><rect class="aplat-papier" x="280" y="28" width="110" height="44" rx="8"/><rect class="pointille" x="280" y="28" width="110" height="44" rx="8"/><text class="texte" x="65" y="47" text-anchor="middle">Chaque matin</text><text class="texte-petit" x="65" y="63" text-anchor="middle">CC de temps</text><text class="texte" x="200" y="47" text-anchor="middle">donne</text><text class="texte-petit" x="200" y="63" text-anchor="middle">verbe</text><text class="texte" x="335" y="47" text-anchor="middle">dans le parc</text><text class="texte-petit" x="335" y="63" text-anchor="middle">CC de lieu</text><line class="pointille" x1="120" y1="50" x2="150" y2="50"/><line class="pointille" x1="250" y1="50" x2="280" y2="50"/><line class="trait-fin" x1="200" y1="72" x2="70" y2="140"/><line class="trait-fin" x1="200" y1="72" x2="200" y2="140"/><line class="trait-fin" x1="200" y1="72" x2="330" y2="140"/><rect class="aplat" x="20" y="140" width="100" height="44" rx="8"/><rect class="trait-fin" x="20" y="140" width="100" height="44" rx="8"/><rect class="aplat" x="150" y="140" width="100" height="44" rx="8"/><rect class="trait-fin" x="150" y="140" width="100" height="44" rx="8"/><rect class="aplat" x="280" y="140" width="100" height="44" rx="8"/><rect class="trait-fin" x="280" y="140" width="100" height="44" rx="8"/><text class="texte" x="70" y="159" text-anchor="middle">Léa</text><text class="texte-petit" x="70" y="175" text-anchor="middle">sujet</text><text class="texte" x="200" y="159" text-anchor="middle">du pain</text><text class="texte-petit" x="200" y="175" text-anchor="middle">COD</text><text class="texte" x="330" y="159" text-anchor="middle">aux canards</text><text class="texte-petit" x="330" y="175" text-anchor="middle">COI</text><text class="texte-petit" x="200" y="212" text-anchor="middle">trait plein : les éléments essentiels (on les garde)</text><text class="texte-petit" x="200" y="230" text-anchor="middle">pointillés : les circonstanciels (supprimables, déplaçables)</text></svg>` },
          ],
        },
        {
          titre: "Le verbe et son sujet, le cœur de la phrase",
          blocs: [
            { t: "texte", md: "Commence toujours par repérer le **verbe conjugué** : c'est le mot qui change quand tu changes le temps (*donne → donnait*). Puis cherche son **sujet** en posant la question « **Qui est-ce qui** donne ? » (ou « **Qu'est-ce qui** … ? » pour une chose). Réponse : *Léa*." },
            { t: "propriete", titre: "Le sujet commande le verbe", md: "Le sujet fait l'action ou est dans l'état indiqué par le verbe. Le **verbe s'accorde avec son sujet** : *Léa donne*, *les enfants donnent*." },
            { t: "attention", md: "Le sujet n'est pas toujours le premier groupe de la phrase. Dans « Dans la cour, les élèves jouent au ballon », pose la question : qui est-ce qui joue ? *Les élèves*. « La cour » n'est qu'un lieu." },
          ],
        },
        {
          titre: "Les compléments du verbe : COD, COI, attribut",
          blocs: [
            { t: "texte", md: "Juste après le verbe, pose la question « **quoi ?** » ou « **qui ?** ». *Léa mange quoi ?* → *une pomme*. Ce complément est relié **directement** au verbe, sans préposition : c'est le **complément d'objet direct** (COD). Il est essentiel : « Léa attrape. » serait incomplet.\n\nSi la réponse commence par **à** ou **de**, le complément est relié **indirectement** : *Paul parle à qui ?* → *à sa sœur*. C'est un **complément d'objet indirect** (COI)." },
            { t: "tableau", titre: "Les compléments essentiels", entetes: ["Fonction", "Question après le verbe", "Exemple", "Pronom qui le remplace"], lignes: [
              ["**COD**", "quoi ? qui ?", "Léa mange **une pomme**.", "le, la, les : Léa **la** mange."],
              ["**COI**", "à qui ? à quoi ? de qui ? de quoi ?", "Il parle **à sa sœur**.", "lui, leur : il **lui** parle."],
              ["**Attribut du sujet**", "(après un verbe d'état)", "Mon frère semble **fatigué**.", "le : il **l'**est."],
            ] },
            { t: "definition", terme: "Attribut du sujet", md: "Un mot ou un groupe qui donne une caractéristique du sujet, relié à lui par un **verbe d'état** : être, sembler, paraître, devenir, rester, demeurer, avoir l'air. L'attribut et le sujet désignent la même personne : dans « Mon frère semble fatigué », c'est le frère qui est fatigué." },
            { t: "astuce", md: "Pour reconnaître un verbe d'état, remplace-le par « être » : « Mon frère semble fatigué » → « Mon frère **est** fatigué ». Si la phrase garde un sens proche, le mot qui suit est attribut du sujet, pas COD." },
            { t: "verifie", q: "Dans « Il leur offre des fleurs », quelle est la fonction de « leur » ?", choix: ["COD", "COI", "sujet", "attribut du sujet"], bonne: 1, explication: "« Leur » signifie « à eux » : il offre des fleurs **à qui** ? à eux. C'est un pronom COI. Le COD, c'est « des fleurs » (il offre quoi ?)." },
          ],
        },
        {
          titre: "Les compléments circonstanciels : quand, où, comment ?",
          blocs: [
            { t: "texte", md: "D'autres compléments ne complètent pas vraiment le verbe : ils plantent le **décor** de l'action. Ce sont les **compléments circonstanciels** (CC). Ils répondent à « quand ? » (temps), « où ? » (lieu), « comment ? » (manière).\n\nLeur grande particularité : on peut les **supprimer** ou les **déplacer**. « Léa donne du pain aux canards » reste une phrase complète. Mais si tu supprimes « du pain », la phrase boite." },
            { t: "exemple", titre: "Compter les compléments circonstanciels", etapes: [
              "Phrase : « Hier, à la piscine, Tom a nagé pendant une heure. »",
              "Verbe : *a nagé*. Sujet : *Tom* (qui est-ce qui a nagé ?).",
              "*Hier* répond à « quand ? » : CC de temps.",
              "*À la piscine* répond à « où ? » : CC de lieu.",
              "*Pendant une heure* répond à « combien de temps ? » : encore un CC de temps.",
              "Total : **trois** compléments circonstanciels, tous supprimables : « Tom a nagé. »",
            ] },
            { t: "attention", md: "Dans « Elle regarde la télévision le soir », « le soir » ressemble à un COD, mais il répond à « quand ? » et on peut le déplacer : « Le soir, elle regarde la télévision. » C'est un CC de temps. Et « avec douceur », « lentement » répondent à « comment ? » : CC de manière." },
            { t: "verifie", q: "Dans « Le facteur apporte le courrier à Madame Durand chaque matin », quel groupe peut-on déplacer en tête de phrase ?", choix: ["le courrier", "chaque matin", "le facteur", "à Madame Durand"], bonne: 1, explication: "« Chaque matin » est un CC de temps : « Chaque matin, le facteur apporte le courrier à Madame Durand. » Le sujet (le facteur), le COD (le courrier) et le COI (à Madame Durand) sont essentiels et restent à leur place." },
          ],
        },
      ],
      bilan: "Pars toujours du verbe : « qui est-ce qui ? » donne le sujet, « quoi ? » le COD, « à qui ? » le COI ; après un verbe d'état vient l'attribut ; et tout ce qui répond à « quand, où, comment ? » est un circonstanciel qu'on peut déplacer.",
    },

    // ───────────────────────────── 3. La phrase ─────────────────────────────
    "6e-francais-03-la-phrase": {
      accroche: "Un signe suffit à changer une phrase : « Tu viens. » donne une information, « Tu viens ? » pose une question, « Tu viens ! » exprime la surprise. La ponctuation, c'est la voix de l'écrit.",
      objectifs: [
        "Reconnaître les quatre types de phrases et les deux formes",
        "Distinguer phrase simple, phrase complexe et phrase non verbale",
        "Utiliser correctement les principaux signes de ponctuation",
      ],
      sections: [
        {
          titre: "Quatre types de phrases",
          blocs: [
            { t: "texte", md: "Une phrase commence par une majuscule et se termine par un signe de ponctuation forte. Selon ce que veut faire celui qui parle, elle appartient à l'un des quatre **types**. Le type dépend donc de l'**intention**." },
            { t: "tableau", titre: "Les quatre types", entetes: ["Type", "À quoi sert-elle ?", "Ponctuation finale", "Exemple"], lignes: [
              ["**Déclarative**", "donner une information", "point (.)", "Le loup entre dans la forêt."],
              ["**Interrogative**", "poser une question", "point d'interrogation (?)", "Quelle heure est-il ?"],
              ["**Exclamative**", "exprimer une émotion forte", "toujours un point d'exclamation (!)", "Que vous êtes joli !"],
              ["**Impérative**", "donner un ordre ou un conseil", "point (.) ou point d'exclamation (!)", "Ne cours pas dans le couloir."],
            ] },
            { t: "astuce", md: "Une question se pose de trois façons : par l'intonation (*Tu viens ?*), avec « est-ce que » (*Est-ce que tu viens ?*) ou en inversant le sujet (*Viens-tu ?*). À l'oral, ta voix **monte** à la fin ; à l'écrit, le point d'interrogation la remplace." },
            { t: "attention", md: "Une phrase impérative n'a pas forcément de point d'exclamation : « Ne cours pas dans le couloir. » se termine par un simple point. Ce qui compte, c'est le **sens** (un ordre) et le verbe à l'impératif, sans sujet." },
          ],
        },
        {
          titre: "Forme affirmative, forme négative",
          blocs: [
            { t: "texte", md: "Chaque phrase a aussi une **forme** : affirmative ou négative. Type et forme se combinent : « Ne viens-tu pas ce soir ? » est une phrase **interrogative** de forme **négative**." },
            { t: "propriete", titre: "La négation, en deux morceaux", md: "À l'écrit, la négation encadre le verbe conjugué : **ne** devant, **pas**, **plus**, **jamais**, **rien** ou **personne** derrière.\n*Il mange toujours des légumes.* → *Il **ne** mange **jamais** de légumes.*\nRemarque : *des* devient *de* après une négation." },
            { t: "attention", md: "À l'oral, on avale souvent le « ne » : « J'sais pas ». À l'écrit, il est **obligatoire** : « Je ne sais pas ». Devant une voyelle, il s'élide : « Il **n'**aime pas »." },
            { t: "verifie", q: "Quelle phrase est à la fois interrogative et négative ?", choix: ["Tu ne viens pas ce soir.", "Ne viens pas ce soir.", "Ne viens-tu pas ce soir ?", "Viens-tu ce soir ?"], bonne: 2, explication: "Il faut un point d'interrogation **et** une négation « ne… pas ». La première phrase est déclarative négative, la deuxième impérative négative, la dernière interrogative affirmative." },
          ],
        },
        {
          titre: "Phrase simple, complexe ou non verbale",
          blocs: [
            { t: "texte", md: "Pour savoir comment une phrase est construite, compte ses **verbes conjugués**.\n\n• **Un seul** : phrase **simple**. *Le petit chien noir du voisin aboie très fort.* Elle est longue, mais simple !\n• **Au moins deux** : phrase **complexe**. Chaque verbe conjugué forme le cœur d'une **proposition**.\n• **Aucun** : phrase **non verbale**. *Quelle belle journée ! Entrée interdite.*" },
            { t: "definition", terme: "Proposition", md: "Un groupe de mots organisé autour d'un verbe conjugué. Une phrase complexe contient autant de propositions que de verbes conjugués." },
            { t: "schema", titre: "Une phrase complexe en trois propositions", legende: "« Quand la nuit tombe, les hiboux sortent et chassent. » Trois verbes conjugués, reliés par « quand » et « et ».", svg: `<svg viewBox="0 0 400 225"><rect class="aplat" x="20" y="20" width="220" height="38" rx="6"/><rect class="aplat" x="20" y="75" width="220" height="38" rx="6"/><rect class="aplat" x="20" y="130" width="220" height="38" rx="6"/><rect class="trait-fin" x="20" y="20" width="220" height="38" rx="6"/><rect class="trait-fin" x="20" y="75" width="220" height="38" rx="6"/><rect class="trait-fin" x="20" y="130" width="220" height="38" rx="6"/><text class="texte" x="32" y="44"><tspan class="texte-pigment">Quand</tspan> la nuit tombe,</text><text class="texte" x="32" y="99">les hiboux sortent</text><text class="texte" x="32" y="154"><tspan class="texte-pigment">et</tspan> chassent.</text><line class="trait-fin" x1="240" y1="39" x2="256" y2="39" marker-end="url(#fl)"/><line class="trait-fin" x1="240" y1="94" x2="256" y2="94" marker-end="url(#fl)"/><line class="trait-fin" x1="240" y1="149" x2="256" y2="149" marker-end="url(#fl)"/><text class="texte-petit" x="264" y="34">proposition 1</text><text class="texte-pigment" x="264" y="51">verbe : tombe</text><text class="texte-petit" x="264" y="89">proposition 2</text><text class="texte-pigment" x="264" y="106">verbe : sortent</text><text class="texte-petit" x="264" y="144">proposition 3</text><text class="texte-pigment" x="264" y="161">verbe : chassent</text><text class="texte" x="200" y="196" text-anchor="middle">3 verbes conjugués = 3 propositions</text><text class="texte-petit" x="200" y="215" text-anchor="middle">c'est une phrase complexe</text></svg>` },
            { t: "exemple", titre: "Combien de propositions ?", etapes: [
              "« Je pense que tu réussiras. »",
              "Je repère les verbes conjugués : *pense* et *réussiras*.",
              "Deux verbes conjugués : **deux propositions**, « je pense » et « que tu réussiras ».",
              "Le petit mot *que* les relie. Dans « **Comme** il pleut, nous restons à la maison », c'est *comme* qui joue ce rôle.",
            ] },
            { t: "verifie", q: "Laquelle de ces phrases est complexe ?", choix: ["Les élèves de la classe de 6e B partent en voyage demain matin.", "Quand la cloche sonne, les élèves sortent.", "Quelle surprise !", "Silence dans les rangs !"], bonne: 1, explication: "Elle contient deux verbes conjugués : *sonne* et *sortent*. La première phrase est longue mais n'a qu'un verbe (*partent*) : elle est simple. Les deux dernières n'en ont aucun : ce sont des phrases non verbales." },
          ],
        },
        {
          titre: "Les signes de ponctuation",
          blocs: [
            { t: "texte", md: "La ponctuation organise la phrase comme les panneaux organisent une route : elle indique où s'arrêter, où ralentir, quand changer de ton ou de personnage." },
            { t: "tableau", titre: "Les signes à connaître", entetes: ["Signe", "Nom", "Rôle", "Exemple"], lignes: [
              [",", "virgule", "sépare les éléments d'une énumération ; isole un complément déplacé", "Le soir, il lit, dessine et rêve."],
              [";", "point-virgule", "sépare deux idées liées", "Il pleut ; nous restons à l'abri."],
              [":", "deux-points", "annonce une explication, une énumération ou des paroles", "Il dit : « Viens ! »"],
              ["…", "points de suspension", "laissent la phrase inachevée, créent l'attente", "Et soudain…"],
              ["« »", "guillemets", "encadrent les paroles rapportées", "« J'arrive », dit-elle."],
              ["—", "tiret", "marque un changement de personne qui parle", "— Qui est là ?"],
            ] },
            { t: "savais-tu", md: "Dans l'Antiquité, les Grecs et les Romains écrivaient souvent les mots collés, sans espaces ni ponctuation : TOUTSURUNESEULELIGNE ! Les signes se sont installés peu à peu, au fil des siècles, pour aider à lire et à comprendre." },
          ],
        },
      ],
      bilan: "Le type dit l'intention (déclarer, interroger, s'exclamer, ordonner), la forme dit oui ou non, le nombre de verbes conjugués dit si la phrase est simple ou complexe. Et la ponctuation lui donne sa voix.",
    },

    // ───────────────────────────── 4. Présent, futur, imparfait ─────────────────────────────
    "6e-francais-04-conjugaison-present-futur-imparfait": {
      accroche: "Le verbe est le mot le plus bavard de la phrase : il te dit qui agit, et surtout quand. « Je chante », « je chantais », « je chanterai » : une seule terminaison change, et te voilà parti dans le temps.",
      objectifs: [
        "Trouver l'infinitif, le groupe et le radical d'un verbe",
        "Conjuguer au présent, y compris être, avoir, aller, faire et dire",
        "Conjuguer au futur simple et à l'imparfait de l'indicatif",
      ],
      sections: [
        {
          titre: "Radical, terminaison et groupes",
          blocs: [
            { t: "texte", md: "Un verbe conjugué se compose de deux parties : le **radical**, qui porte le sens (*chant-*), et la **terminaison**, qui indique la personne et le temps (*-ons*, *-ais*, *-erai*).\n\nPour ranger un verbe, on part de son **infinitif**, la forme qu'on trouve dans le dictionnaire : *ils vont* → *aller* ; *nous finissons* → *finir*." },
            { t: "definition", terme: "Infinitif", md: "La forme non conjuguée du verbe, celle du dictionnaire : chanter, finir, prendre, être. Elle permet de trouver le groupe du verbe. On classe les verbes français en **trois groupes**." },
            { t: "schema", titre: "À quel groupe appartient ce verbe ?", legende: "Pose les questions dans l'ordre, de haut en bas.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat-papier" x="20" y="15" width="220" height="46" rx="8"/><rect class="trait-fin" x="20" y="15" width="220" height="46" rx="8"/><text class="texte" x="130" y="36" text-anchor="middle">Finit par -er ?</text><text class="texte-petit" x="130" y="52" text-anchor="middle">(sauf aller)</text><line class="trait-fin" x1="240" y1="38" x2="278" y2="38" marker-end="url(#fl)"/><text class="texte-petit" x="259" y="31" text-anchor="middle">oui</text><rect class="aplat" x="282" y="18" width="105" height="40" rx="8"/><rect class="trait" x="282" y="18" width="105" height="40" rx="8"/><text class="texte" x="334" y="43" text-anchor="middle">1er groupe</text><line class="trait-fin" x1="130" y1="61" x2="130" y2="92" marker-end="url(#fl)"/><text class="texte-petit" x="140" y="81">non</text><rect class="aplat-papier" x="20" y="95" width="220" height="46" rx="8"/><rect class="trait-fin" x="20" y="95" width="220" height="46" rx="8"/><text class="texte" x="130" y="116" text-anchor="middle">Finit par -ir ?</text><text class="texte-petit" x="130" y="132" text-anchor="middle">et nous …issons (finissons)</text><line class="trait-fin" x1="240" y1="118" x2="278" y2="118" marker-end="url(#fl)"/><text class="texte-petit" x="259" y="111" text-anchor="middle">oui</text><rect class="aplat" x="282" y="98" width="105" height="40" rx="8"/><rect class="trait" x="282" y="98" width="105" height="40" rx="8"/><text class="texte" x="334" y="123" text-anchor="middle">2e groupe</text><line class="trait-fin" x1="130" y1="141" x2="130" y2="172" marker-end="url(#fl)"/><text class="texte-petit" x="140" y="161">non</text><rect class="aplat-papier" x="20" y="175" width="220" height="46" rx="8"/><rect class="trait-fin" x="20" y="175" width="220" height="46" rx="8"/><text class="texte" x="130" y="196" text-anchor="middle">Tous les autres verbes</text><text class="texte-petit" x="130" y="212" text-anchor="middle">aller, prendre, voir, partir…</text><line class="trait-fin" x1="240" y1="198" x2="278" y2="198" marker-end="url(#fl)"/><rect class="aplat" x="282" y="178" width="105" height="40" rx="8"/><rect class="trait" x="282" y="178" width="105" height="40" rx="8"/><text class="texte" x="334" y="203" text-anchor="middle">3e groupe</text></svg>` },
            { t: "attention", md: "*Aller* se termine par -er, mais c'est un verbe du **3e groupe** : il est bien trop irrégulier (je vais, j'irai). De même, *partir* et *courir* finissent par -ir, mais on dit *nous partons*, *nous courons*, sans -iss- : ils sont du 3e groupe." },
          ],
        },
        {
          titre: "Le présent de l'indicatif",
          blocs: [
            { t: "tableau", titre: "Présent : un verbe de chaque groupe", entetes: ["Personne", "chanter (1er)", "finir (2e)", "prendre (3e)"], lignes: [
              ["je", "chante", "finis", "prends"],
              ["tu", "chantes", "finis", "prends"],
              ["il, elle, on", "chante", "finit", "prend"],
              ["nous", "chantons", "finissons", "prenons"],
              ["vous", "chantez", "finissez", "prenez"],
              ["ils, elles", "chantent", "finissent", "prennent"],
            ] },
            { t: "texte", md: "Au 3e groupe, la plupart des verbes prennent **-s, -s, -t** au singulier (*je dors, tu dors, il dort*), parfois **-d** (*il prend*) ou **-x** (*je peux, tu peux* ; *je veux*). Au pluriel, ils retrouvent presque tous **-ons, -ez, -ent** : *nous voyons, ils voient*." },
            { t: "tableau", titre: "Quatre verbes à savoir par cœur", entetes: ["Personne", "être", "avoir", "aller", "faire"], lignes: [
              ["1re du singulier", "je suis", "j'ai", "je vais", "je fais"],
              ["2e du singulier", "tu es", "tu as", "tu vas", "tu fais"],
              ["3e du singulier", "il est", "il a", "il va", "il fait"],
              ["1re du pluriel", "nous sommes", "nous avons", "nous allons", "nous faisons"],
              ["2e du pluriel", "vous êtes", "vous avez", "vous allez", "vous faites"],
              ["3e du pluriel", "ils sont", "ils ont", "ils vont", "ils font"],
            ] },
            { t: "attention", md: "Trois formes très surveillées : **vous faites**, **vous dites** et **vous êtes** (jamais « vous faisez », « vous disez »). Garde aussi l'orthographe du radical : *nous mangeons* (le e garde le son « je »), *nous commençons* (la cédille garde le son « s »), *j'appelle*, *je jette*." },
          ],
        },
        {
          titre: "Le futur simple : l'infinitif sert de base",
          blocs: [
            { t: "propriete", titre: "Formation du futur simple", md: "**Infinitif + -ai, -as, -a, -ons, -ez, -ont.**\n*chanter* → je chanter**ai**, tu chanter**as**, il chanter**a**, nous chanter**ons**, vous chanter**ez**, ils chanter**ont**.\nLes verbes en -re perdent leur e final : *prendre* → je prendrai." },
            { t: "tableau", titre: "Futurs irréguliers fréquents", entetes: ["Infinitif", "je…", "nous…"], lignes: [
              ["être", "je serai", "nous serons"],
              ["avoir", "j'aurai", "nous aurons"],
              ["aller", "j'irai", "nous irons"],
              ["faire", "je ferai", "nous ferons"],
              ["voir", "je verrai", "nous verrons"],
              ["venir", "je viendrai", "nous viendrons"],
              ["pouvoir", "je pourrai", "nous pourrons"],
            ] },
            { t: "astuce", md: "Au futur, on entend toujours le son **r** juste avant la terminaison : je serai, j'irai, je verrai. Et les terminaisons ressemblent au verbe *avoir* au présent : ai, as, a, (av)ons, (av)ez, ont !" },
            { t: "verifie", q: "Quelle forme est au futur simple ?", choix: ["tu mangerais", "tu mangeras", "tu mangera", "tu mangeais"], bonne: 1, explication: "Au futur, « tu » prend toujours -as : tu mangeras. « Tu mangerais » (en -ais) est un conditionnel, « tu mangeais » un imparfait, et « tu mangera » oublie le s de la 2e personne." },
          ],
        },
        {
          titre: "L'imparfait : un seul jeu de terminaisons",
          blocs: [
            { t: "propriete", titre: "Formation de l'imparfait", md: "**Radical de « nous » au présent + -ais, -ais, -ait, -ions, -iez, -aient.**\nCes terminaisons sont les mêmes pour **tous** les verbes, quel que soit leur groupe." },
            { t: "exemple", titre: "Conjuguer « finir » à l'imparfait", etapes: [
              "Je conjugue au présent avec nous : *nous finissons*.",
              "J'enlève -ons : il reste le radical **finiss-**.",
              "J'ajoute les terminaisons : je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient.",
              "Même méthode partout : *nous jouons* → je **jouais** ; *nous faisons* → vous **faisiez**.",
            ] },
            { t: "attention", md: "Seul *être* échappe à la règle : son radical d'imparfait est **ét-** : j'étais, nous **étions**, vous étiez. Ne le confonds pas avec *nous serions* (conditionnel) ni avec *nous sommes* (présent)." },
            { t: "verifie", q: "Quel est l'infinitif du verbe dans « ils vont » ?", choix: ["vouloir", "voir", "aller", "venir"], bonne: 2, explication: "« Ils vont » est le présent d'*aller* : je vais, tu vas, il va, nous allons, vous allez, ils vont. Le piège « voir » vient du son « v » ; mais on dit « ils voient »." },
            { t: "savais-tu", md: "Le futur français est né d'une expression latine : *cantare habeo*, « j'ai à chanter ». Avec les siècles, les deux mots se sont soudés : *chanter-ai* ! Voilà pourquoi le futur ressemble à l'infinitif suivi du verbe avoir." },
          ],
        },
      ],
      bilan: "Présent : les terminaisons dépendent du groupe. Futur : l'infinitif et le son r. Imparfait : le radical de « nous » et -ais, -ais, -ait, -ions, -iez, -aient pour tout le monde.",
    },

    // ───────────────────────────── 5. Passé composé, passé simple, impératif ─────────────────────────────
    "6e-francais-05-conjugaison-passe-imperatif": {
      accroche: "« La forêt dormait sous la neige. Soudain, un loup surgit. » Deux verbes au passé, deux temps différents… et une histoire commence. Les temps du passé ne disent pas seulement « avant » : ils mettent une action dans l'ombre ou en pleine lumière.",
      objectifs: [
        "Former le passé composé avec être ou avoir",
        "Conjuguer le passé simple aux 3es personnes",
        "Conjuguer l'impératif présent",
        "Choisir entre imparfait et passé simple dans un récit",
      ],
      sections: [
        {
          titre: "Le passé composé : un auxiliaire et un participe",
          blocs: [
            { t: "texte", md: "Le passé composé est un temps **composé** : il s'écrit en deux mots. *Elle **a mangé** une tarte* : « a » est l'**auxiliaire** avoir au présent, « mangé » le **participe passé**. C'est le temps du passé qu'on utilise le plus à l'oral : « Hier, j'ai vu un film. »" },
            { t: "propriete", titre: "Passé composé = auxiliaire au présent + participe passé", md: "La plupart des verbes se conjuguent avec **avoir** : j'ai fini, nous avons pris.\nAvec **être** : les verbes de mouvement ou de changement d'état (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, tomber, rester, devenir) et les verbes pronominaux (se lever).\nAvec être, le participe **s'accorde avec le sujet** : elle est partie, ils sont venus." },
            { t: "tableau", titre: "Comment se termine le participe passé ?", entetes: ["Groupe", "Terminaison", "Exemples"], lignes: [
              ["1er groupe", "-é", "chanté, mangé, allé"],
              ["2e groupe", "-i", "fini, choisi"],
              ["3e groupe", "-i, -u, -s ou -t", "parti, vu, venu, pris, fait, dit"],
            ] },
            { t: "astuce", md: "Pour trouver la lettre finale d'un participe, mets-le au féminin : *une affaire prise* → pris ; *une tarte faite* → fait ; *elle est partie* → parti." },
          ],
        },
        {
          titre: "Le passé simple, temps des récits",
          blocs: [
            { t: "texte", md: "Ouvre un conte ou un roman : tu y trouveras le **passé simple**. Il s'emploie surtout à l'**écrit**, dans les récits, et très souvent aux **3es personnes** (il, elle, ils, elles), car on y raconte l'histoire de quelqu'un d'autre." },
            { t: "tableau", titre: "Passé simple, 3es personnes", entetes: ["Infinitif", "il / elle", "ils / elles"], lignes: [
              ["chanter", "il chanta", "ils chantèrent"],
              ["finir", "il finit", "ils finirent"],
              ["prendre", "il prit", "ils prirent"],
              ["être", "il fut", "ils furent"],
              ["avoir", "il eut", "ils eurent"],
              ["faire", "il fit", "ils firent"],
              ["venir", "il vint", "ils vinrent"],
              ["voir", "il vit", "ils virent"],
            ] },
            { t: "attention", md: "Au 1er groupe, la 3e personne du singulier se termine par **-a**, jamais par -t : *il chanta*. Et ne fabrique pas de faux passés simples : on écrit *il prit* (pas « il prena »), *ils vinrent* (pas « ils venirent »)." },
            { t: "citation", texte: "Le Loup se mit à courir de toute sa force par le chemin qui était le plus court, et la petite fille s'en alla par le chemin le plus long.", auteur: "Charles Perrault", source: "« Le Petit Chaperon rouge », Contes (1697)" },
          ],
        },
        {
          titre: "Imparfait et passé simple dans un récit",
          blocs: [
            { t: "texte", md: "Dans un récit au passé, les deux temps se partagent le travail, comme au cinéma. L'**imparfait** filme le **décor** : ce qui dure, ce qui se répète, les descriptions. Le **passé simple** filme les **actions de premier plan** : ce qui arrive d'un coup et fait avancer l'histoire.\n\nRegarde Perrault ci-dessus : *se mit* et *s'en alla* (passé simple) sont les actions ; *était* (imparfait) décrit le chemin." },
            { t: "schema", titre: "Arrière-plan et premier plan", legende: "L'imparfait est la toile de fond ; le passé simple, ce sont les événements qui se détachent dessus.", svg: `<svg viewBox="0 0 400 226"><text class="texte" x="200" y="22" text-anchor="middle">Premier plan : passé simple</text><text class="texte-petit" x="200" y="39" text-anchor="middle">actions brèves qui font avancer l'histoire</text><text class="texte-main" x="100" y="70" text-anchor="middle">surgit</text><text class="texte-main" x="200" y="70" text-anchor="middle">hurla</text><text class="texte-main" x="300" y="70" text-anchor="middle">s'enfuit</text><line class="trait" x1="100" y1="78" x2="100" y2="128" marker-end="url(#fl-p)"/><line class="trait" x1="200" y1="78" x2="200" y2="128" marker-end="url(#fl-p)"/><line class="trait" x1="300" y1="78" x2="300" y2="128" marker-end="url(#fl-p)"/><rect class="aplat" x="20" y="135" width="360" height="44" rx="6"/><rect class="trait-fin" x="20" y="135" width="360" height="44" rx="6"/><text class="texte" x="200" y="162" text-anchor="middle">la forêt dormait, la neige tombait…</text><text class="texte" x="200" y="200" text-anchor="middle">Arrière-plan : imparfait</text><text class="texte-petit" x="200" y="217" text-anchor="middle">décor, description, ce qui dure</text></svg>` },
            { t: "exemple", titre: "Lire les temps d'un récit", md: "« Le soleil **brillait**. Les oiseaux **chantaient**. Tout à coup, un cri **retentit**. »\n\n*Brillait*, *chantaient* : imparfait, c'est la description, l'arrière-plan. *Retentit* : passé simple, l'action soudaine, annoncée par « tout à coup »." },
            { t: "verifie", q: "Dans un récit au passé, quel temps raconte les actions soudaines qui font avancer l'histoire ?", choix: ["l'imparfait", "le passé simple", "le futur simple", "l'impératif"], bonne: 1, explication: "Le passé simple marque les actions brèves de premier plan. L'imparfait sert au décor et à ce qui dure. Des mots comme « soudain » ou « tout à coup » annoncent souvent un passé simple." },
          ],
        },
        {
          titre: "L'impératif, le mode des ordres",
          blocs: [
            { t: "definition", terme: "Impératif présent", md: "Le mode qui sert à donner un ordre, un conseil ou une interdiction. Il n'a que **trois personnes** (tu, nous, vous) et s'emploie **sans pronom sujet** : *Mange ! Mangeons ! Mangez !*" },
            { t: "tableau", titre: "Impératifs à connaître", entetes: ["Infinitif", "2e du singulier", "1re du pluriel", "2e du pluriel"], lignes: [
              ["manger", "mange", "mangeons", "mangez"],
              ["aller", "va", "allons", "allez"],
              ["finir", "finis", "finissons", "finissez"],
              ["être", "sois", "soyons", "soyez"],
              ["avoir", "aie", "ayons", "ayez"],
              ["savoir", "sache", "sachons", "sachez"],
            ] },
            { t: "attention", md: "Les verbes en -er (et *aller*) ne prennent **pas de s** à la 2e personne du singulier : *Va chercher le pain ! Chante !* Le s revient seulement devant *y* ou *en*, pour la prononciation : *Vas-y !*" },
            { t: "verifie", q: "Quelle phrase est correctement conjuguée à l'impératif ?", choix: ["Vas chercher le pain !", "Ayez confiance.", "Soyions prudents.", "Ayiez confiance."], bonne: 1, explication: "« Ayez » est l'impératif d'avoir. « Va » ne prend pas de s devant « chercher » ; « soyions » et « ayiez » mélangent l'impératif (soyons, ayez) et les terminaisons de l'imparfait." },
          ],
        },
      ],
      bilan: "Passé composé : auxiliaire + participe passé. Passé simple : le temps des récits écrits. Imparfait pour le décor, passé simple pour l'action. Impératif : trois personnes, pas de sujet, et pas de s à « va » ni à « chante ».",
    },

    // ───────────────────────────── 6. Accords ─────────────────────────────
    "6e-francais-06-accords": {
      accroche: "Dans une phrase, les mots se tiennent par la main : si le nom passe au pluriel, son déterminant et ses adjectifs le suivent ; si le sujet change, le verbe aussi. Accorder, c'est vérifier que personne n'a lâché la main.",
      objectifs: [
        "Accorder le déterminant et l'adjectif avec le nom",
        "Accorder le verbe avec son sujet, même éloigné ou inversé",
        "Accorder le participe passé employé avec être",
      ],
      sections: [
        {
          titre: "Le nom commande le groupe nominal",
          blocs: [
            { t: "texte", md: "Dans le groupe nominal, le **nom** est le chef. Il a un **genre** (masculin ou féminin) et un **nombre** (singulier ou pluriel). Le déterminant et l'adjectif prennent son genre et son nombre : *une petite fleur blanche → des petites fleurs blanches*." },
            { t: "schema", titre: "Qui commande l'accord ?", legende: "Le nom « fleurs » donne son genre et son nombre au déterminant et aux adjectifs ; comme sujet, il commande aussi le verbe.", svg: `<svg viewBox="0 0 400 205"><text class="texte-petit" x="200" y="22" text-anchor="middle">le nom donne son genre et son nombre : féminin pluriel</text><path class="trait-fin" d="M176 86 Q105 30 36 84" marker-end="url(#fl-p)"/><path class="trait-fin" d="M180 86 Q142 55 106 84" marker-end="url(#fl-p)"/><path class="trait-fin" d="M192 86 Q232 55 266 84" marker-end="url(#fl-p)"/><rect class="aplat-papier" x="10" y="88" width="45" height="42" rx="6"/><rect class="aplat-papier" x="65" y="88" width="75" height="42" rx="6"/><rect class="aplat-fort" x="150" y="88" width="70" height="42" rx="6"/><rect class="aplat-papier" x="230" y="88" width="80" height="42" rx="6"/><rect class="aplat-papier" x="320" y="88" width="75" height="42" rx="6"/><rect class="trait-fin" x="10" y="88" width="45" height="42" rx="6"/><rect class="trait-fin" x="65" y="88" width="75" height="42" rx="6"/><rect class="trait" x="150" y="88" width="70" height="42" rx="6"/><rect class="trait-fin" x="230" y="88" width="80" height="42" rx="6"/><rect class="trait-fin" x="320" y="88" width="75" height="42" rx="6"/><text class="texte" x="32" y="107" text-anchor="middle">Les</text><text class="texte" x="102" y="107" text-anchor="middle">petites</text><text class="texte" x="185" y="107" text-anchor="middle">fleurs</text><text class="texte" x="270" y="107" text-anchor="middle">blanches</text><text class="texte" x="357" y="107" text-anchor="middle">poussent</text><text class="texte-petit" x="32" y="123" text-anchor="middle">dét.</text><text class="texte-petit" x="102" y="123" text-anchor="middle">adjectif</text><text class="texte-petit" x="185" y="123" text-anchor="middle">nom</text><text class="texte-petit" x="270" y="123" text-anchor="middle">adjectif</text><text class="texte-petit" x="357" y="123" text-anchor="middle">verbe</text><path class="trait-fin" d="M190 132 Q272 190 352 134" marker-end="url(#fl-p)"/><text class="texte-petit" x="200" y="192" text-anchor="middle">le sujet commande le verbe : 3e personne du pluriel</text></svg>` },
            { t: "propriete", titre: "Accord dans le groupe nominal", md: "Le **déterminant** et l'**adjectif** s'accordent en genre et en nombre avec le nom.\nSi l'adjectif qualifie un nom masculin **et** un nom féminin, il se met au **masculin pluriel** : *un pull et une veste neufs* ; *ma sœur et mon frère sont contents*." },
            { t: "tableau", titre: "Former le féminin des adjectifs", entetes: ["Masculin", "Féminin", "Règle"], lignes: [
              ["grand", "grande", "on ajoute -e"],
              ["gentil", "gentille", "on double la consonne"],
              ["blanc", "blanche", "-c devient -che"],
              ["neuf", "neuve", "-f devient -ve"],
              ["heureux", "heureuse", "-x devient -se"],
              ["beau", "belle", "forme irrégulière"],
            ] },
          ],
        },
        {
          titre: "Le verbe s'accorde avec son sujet",
          blocs: [
            { t: "propriete", titre: "Accord sujet-verbe", md: "Le verbe s'accorde avec son sujet **en personne et en nombre** : *l'enfant joue*, *les enfants jouent*, *nous jouons*." },
            { t: "etapes", titre: "Méthode pour accorder un verbe", items: [
              { titre: "Le verbe", md: "Je repère le verbe conjugué." },
              { titre: "Le sujet", md: "Je pose la question « Qui est-ce qui… ? » devant le verbe." },
              { titre: "L'analyse", md: "Je vérifie la personne et le nombre du sujet." },
              { titre: "La terminaison", md: "J'écris la terminaison qui correspond." },
            ] },
            { t: "exemple", titre: "Trois pièges classiques", md: "**Sujet éloigné** : « Le chien *des voisins* **aboie** toute la nuit. » Qui est-ce qui aboie ? *le chien*, pas les voisins.\n\n**Sujet inversé** : « Dans le ciel **volent** *les hirondelles*. » Le sujet est placé après le verbe.\n\n**Sujets multiples** : « Paul et Léa **chantent**. » Deux sujets au singulier font un pluriel. *Toi et moi* = nous (*chantons*) ; *toi et lui* = vous (*chantez*)." },
            { t: "attention", md: "« Chacun » est toujours **singulier** : « Chacun des joueurs **porte** son maillot. » Ne te laisse pas attirer par « des joueurs » : c'est un complément, pas le sujet." },
            { t: "verifie", q: "Complète : « Les arbres du jardin ___ leurs feuilles. »", choix: ["perd", "perds", "perdent"], bonne: 2, explication: "Qui est-ce qui perd ? « Les arbres » (pluriel) : le verbe prend -ent. « Du jardin » n'est qu'un complément placé entre le sujet et le verbe : il ne commande rien." },
          ],
        },
        {
          titre: "Le participe passé avec être ou avec avoir",
          blocs: [
            { t: "propriete", titre: "Accord du participe passé", md: "Avec **être**, le participe passé s'accorde avec le sujet, comme un adjectif : *Marie est arrivée*, *elles sont parties*, *ils sont tombés*.\nAvec **avoir**, il ne s'accorde pas avec le sujet : *elles ont fini*, *les élèves ont fini leurs devoirs*." },
            { t: "astuce", md: "Avec être, le participe se comporte exactement comme un adjectif : *elles sont parties* comme *elles sont contentes*. Là où tu accorderais l'adjectif, accorde aussi le participe !" },
            { t: "verifie", q: "Complète : « Les élèves ont ___ leurs devoirs. »", choix: ["finis", "fini", "finies", "finit"], bonne: 1, explication: "Avec l'auxiliaire avoir, le participe ne s'accorde pas avec le sujet : « ont fini ». « Finit » est un verbe conjugué (il finit), pas un participe passé." },
          ],
        },
        {
          titre: "Corriger une phrase pas à pas",
          blocs: [
            { t: "exemple", titre: "Corriger : « les petit chat noir dorment »", etapes: [
              "Le déterminant *les* et le verbe *dorment* sont au pluriel : tout le groupe nominal doit l'être.",
              "Le nom : *chat* → *chats*.",
              "Les adjectifs suivent le nom : *petit* → *petits*, *noir* → *noirs*.",
              "Trois mots corrigés : « les petits chats noirs dorment ».",
            ] },
            { t: "exemple", titre: "Une phrase à plusieurs chefs", md: "« Les **belles** pommes que ma grand-mère **cueille** **sont** **mûres**. »\n\n*Belles* et *mûres* s'accordent avec *pommes* (féminin pluriel). *Cueille* s'accorde avec *ma grand-mère* : qui est-ce qui cueille ? *Sont* s'accorde avec *les pommes*, sujet de « sont mûres ». Chaque mot a son propre chef." },
          ],
        },
      ],
      bilan: "Pour accorder, cherche toujours le chef : le nom pour le groupe nominal, le sujet pour le verbe et pour le participe passé avec être. Avec avoir, le participe ne s'accorde pas avec le sujet.",
    },

    // ───────────────────────────── 7. Orthographe ─────────────────────────────
    "6e-francais-07-orthographe": {
      accroche: "« Il a mal à la tête. » À l'oral, on entend deux fois le même son « a ». À l'écrit, il faut choisir entre « a » et « à »… Bonne nouvelle : pour chaque paire, il existe un test simple qui marche à tous les coups.",
      objectifs: [
        "Distinguer les homophones grammaticaux les plus fréquents",
        "Trouver la lettre muette finale d'un mot grâce à sa famille",
        "Écrire les pluriels réguliers et particuliers des noms",
      ],
      sections: [
        {
          titre: "Les homophones : même son, sens différent",
          blocs: [
            { t: "definition", terme: "Homophones", md: "Des mots qui se prononcent de la même façon mais qui s'écrivent différemment et n'ont pas le même sens : *a / à*, *et / est*, *son / sont*. Pour choisir, on ne se fie pas à l'oreille : on fait un **test de remplacement**." },
            { t: "tableau", titre: "Le test de remplacement", entetes: ["Homophones", "Ce que c'est", "Je remplace par…", "Exemple"], lignes: [
              ["a / à", "**a** : verbe avoir ; **à** : préposition", "avait", "Il **a** mal **à** la tête."],
              ["et / est", "**et** : conjonction ; **est** : verbe être", "et puis / était", "Il **est** grand **et** fort."],
              ["on / ont", "**on** : pronom ; **ont** : verbe avoir", "il / avaient", "**On** dit qu'ils **ont** gagné."],
              ["son / sont", "**son** : déterminant ; **sont** : verbe être", "mon, le sien / étaient", "**Son** chien et ses chats **sont** là."],
              ["ce / se", "**ce** : désigne ; **se** : devant un verbe pronominal", "cela, ce…-ci / me (je me…)", "**Ce** chien **se** gratte."],
              ["ces / ses", "**ces** : montre ; **ses** : possession", "ceux-là / les siens", "Elle range **ses** affaires."],
              ["ou / où", "**ou** : choix ; **où** : lieu ou moment", "ou bien / (question « où ? »)", "**Où** vas-tu ? À pied **ou** à vélo ?"],
            ] },
            { t: "exemple", titre: "Appliquer le test", etapes: [
              "Phrase : « Mon frère a mal à la tête. »",
              "Premier « a » : « Mon frère *avait* mal » a du sens. C'est le verbe avoir : **a**, sans accent.",
              "Second « a » : « mal *avait* la tête » ne veut rien dire. C'est la préposition : **à**, avec accent.",
            ] },
            { t: "attention", md: "Devant un verbe, conjugue à la 1re personne pour reconnaître *se* : « Il **s'est** levé tôt » → « Je **me suis** levé tôt ». On entend *me*, donc on écrit *s'est*. De même : « Les enfants **se** sont amusés » (nous **nous** sommes amusés), jamais « ce sont amusés »." },
            { t: "verifie", q: "Complète : « ___ dit qu'ils ___ gagné. »", choix: ["Ont / on", "On / ont", "On / on", "Ont / ont"], bonne: 1, explication: "Le premier mot peut être remplacé par « il » (il dit) : c'est le pronom *on*. Le second par « avaient » (ils avaient gagné) : c'est le verbe avoir, *ont*." },
          ],
        },
        {
          titre: "Les lettres muettes : interroge la famille",
          blocs: [
            { t: "texte", md: "Beaucoup de mots se terminent par une lettre qu'on n'entend pas : *grand*, *tapis*, *chant*. Pour la trouver, ne devine pas : cherche le **féminin** ou un **mot de la même famille**. La lettre cachée s'y fait entendre." },
            { t: "schema", titre: "La famille révèle la lettre muette", legende: "Au féminin ou dans un mot de la même famille, la lettre muette se fait entendre : on peut alors l'écrire sans hésiter.", svg: `<svg viewBox="0 0 400 195"><rect class="aplat" x="20" y="25" width="100" height="36" rx="6"/><rect class="aplat" x="150" y="25" width="100" height="36" rx="6"/><rect class="aplat" x="280" y="25" width="100" height="36" rx="6"/><rect class="trait-fin" x="20" y="25" width="100" height="36" rx="6"/><rect class="trait-fin" x="150" y="25" width="100" height="36" rx="6"/><rect class="trait-fin" x="280" y="25" width="100" height="36" rx="6"/><text class="texte" x="70" y="48" text-anchor="middle">gran<tspan class="texte-pigment">d</tspan></text><text class="texte" x="200" y="48" text-anchor="middle">tapi<tspan class="texte-pigment">s</tspan></text><text class="texte" x="330" y="48" text-anchor="middle">chan<tspan class="texte-pigment">t</tspan></text><line class="trait-fin" x1="70" y1="61" x2="70" y2="94" marker-end="url(#fl)"/><line class="trait-fin" x1="200" y1="61" x2="200" y2="94" marker-end="url(#fl)"/><line class="trait-fin" x1="330" y1="61" x2="330" y2="94" marker-end="url(#fl)"/><text class="texte" x="70" y="115" text-anchor="middle">gran<tspan class="texte-pigment">d</tspan>e</text><text class="texte" x="70" y="135" text-anchor="middle">gran<tspan class="texte-pigment">d</tspan>ir</text><text class="texte" x="200" y="115" text-anchor="middle">tapi<tspan class="texte-pigment">s</tspan>ser</text><text class="texte" x="200" y="135" text-anchor="middle">tapi<tspan class="texte-pigment">s</tspan>sier</text><text class="texte" x="330" y="115" text-anchor="middle">chan<tspan class="texte-pigment">t</tspan>er</text><text class="texte" x="330" y="135" text-anchor="middle">chan<tspan class="texte-pigment">t</tspan>eur</text><text class="texte-petit" x="200" y="178" text-anchor="middle">J'entends la lettre dans le mot de la famille : je l'écris.</text></svg>` },
            { t: "exemple", titre: "Retrouver la lettre", md: "un toi**t** → toiture ; un cham**p** → champêtre ; un sau**t** → sauter ; un ran**g** → ranger ; un do**s** → dossier." },
            { t: "attention", md: "Le test marche très souvent, mais pas toujours : *un abri* n'a pas de lettre muette, même si l'on dit *abriter*. En cas de doute, le dictionnaire tranche." },
          ],
        },
        {
          titre: "Les pluriels des noms",
          blocs: [
            { t: "propriete", titre: "La règle générale", md: "Au pluriel, on ajoute un **s** au nom : *un livre, des livres*.\nLes noms terminés par **-s, -x ou -z** ne changent pas : *un tapis, des tapis* ; *une voix, des voix* ; *un nez, des nez*." },
            { t: "tableau", titre: "Les pluriels particuliers", entetes: ["Fin du nom", "Pluriel", "Exemples", "Exceptions"], lignes: [
              ["-eau, -au, -eu", "+ x", "des bateaux, des tuyaux, des feux", "des pneus, des bleus, des landaus"],
              ["-al", "-aux", "des chevaux, des journaux", "des bals, des carnavals, des festivals"],
              ["-ail", "+ s en général", "des détails, des rails", "des travaux, des vitraux, des coraux"],
              ["-ou", "+ s en général", "des clous, des fous, des trous", "7 noms en x : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux"],
            ] },
            { t: "astuce", md: "Les sept noms en -ou qui prennent un x se récitent dans l'ordre alphabétique : **bijou, caillou, chou, genou, hibou, joujou, pou**. Ou en phrase : « Viens, mon **chou**, mon **bijou**, mon **joujou**, sur mes **genoux**, et jette des **cailloux** à ce **hibou** plein de **poux** ! »" },
            { t: "verifie", q: "Quel pluriel est correct ?", choix: ["des cloux", "des chevals", "des clous", "des pneux"], bonne: 2, explication: "« Clou » ne fait pas partie des sept exceptions : il suit la règle générale et prend un s. « Cheval » fait « chevaux », et « pneu » est une exception des noms en -eu : « pneus »." },
          ],
        },
        {
          titre: "Relire comme un détective",
          blocs: [
            { t: "liste", titre: "Ma grille de relecture", ordonnee: true, items: [
              "Je repère chaque **homophone** et je fais le test de remplacement.",
              "Je vérifie les **pluriels** : chaque nom au pluriel a-t-il son s ou son x ?",
              "Je cherche les **lettres muettes** grâce aux mots de la même famille.",
              "Je contrôle les **accords** : dans le groupe nominal, et entre le sujet et le verbe.",
            ] },
            { t: "savais-tu", md: "D'après l'explication la plus courante, le x des pluriels vient des copistes du Moyen Âge : ils abrégeaient la fin « -us » par un signe proche du x. *Chevaus* s'écrivait donc *chevax*… Plus tard, on a remis le u en gardant le x : *chevaux* !" },
          ],
        },
      ],
      bilan: "Pour les homophones, remplace ; pour les lettres muettes, interroge la famille ; pour les pluriels, applique la règle… sans oublier les sept cailloux.",
    },

    // ───────────────────────────── 8. Lexique ─────────────────────────────
    "6e-francais-08-lexique": {
      accroche: "Que veut dire « déboisement » ? Même si tu ne l'as jamais lu, tu peux le deviner : « dé- », « bois », « -ment »… Les mots se construisent comme des jeux de construction, et celui qui connaît les pièces comprend des milliers de mots.",
      objectifs: [
        "Reconnaître une famille de mots, un préfixe et un suffixe",
        "Employer synonymes, antonymes et champs lexicaux",
        "Distinguer sens propre et sens figuré, et les niveaux de langue",
        "Se repérer dans un dictionnaire",
      ],
      sections: [
        {
          titre: "Les familles de mots",
          blocs: [
            { t: "definition", terme: "Famille de mots", md: "L'ensemble des mots formés sur le même **radical** et dont le sens est lié : *terre, terrain, enterrer, territoire, atterrir, terrestre*." },
            { t: "schema", titre: "Une famille autour de son radical", legende: "Tous ces mots parlent du sol, de la terre : ils forment une famille.", svg: `<svg viewBox="0 0 400 240"><ellipse class="aplat" cx="200" cy="110" rx="44" ry="24"/><ellipse class="trait" cx="200" cy="110" rx="44" ry="24"/><text class="texte-main" x="200" y="116" text-anchor="middle">terr-</text><line class="trait-fin" x1="200" y1="86" x2="200" y2="40"/><line class="trait-fin" x1="236" y1="97" x2="292" y2="70"/><line class="trait-fin" x1="236" y1="123" x2="298" y2="150"/><line class="trait-fin" x1="200" y1="134" x2="200" y2="180"/><line class="trait-fin" x1="164" y1="123" x2="102" y2="150"/><line class="trait-fin" x1="164" y1="97" x2="108" y2="70"/><text class="texte" x="200" y="32" text-anchor="middle">terre</text><text class="texte" x="325" y="66" text-anchor="middle">terrain</text><text class="texte" x="335" y="164" text-anchor="middle">enterrer</text><text class="texte" x="200" y="198" text-anchor="middle">territoire</text><text class="texte" x="65" y="164" text-anchor="middle">atterrir</text><text class="texte" x="72" y="66" text-anchor="middle">terrestre</text><text class="texte-petit" x="200" y="230" text-anchor="middle">« terrible » est un faux ami : il vient de « terreur ».</text></svg>` },
            { t: "attention", md: "Un mot qui *ressemble* n'est pas forcément de la famille : *terrible* vient de *terreur*, pas de *terre*. Pour appartenir à une famille, il faut le même radical **et** un sens lié." },
          ],
        },
        {
          titre: "Préfixes et suffixes",
          blocs: [
            { t: "texte", md: "On fabrique des mots en ajoutant des morceaux au radical. Le **préfixe** se place **devant** et change le sens : *possible → **im**possible*. Le **suffixe** se place **derrière** et change souvent la classe du mot : *lent → lente**ment*** (adverbe), *jardin → jardin**ier*** (métier)." },
            { t: "schema", titre: "Décomposer un mot", legende: "Préfixe + radical + suffixe : le sens du mot se lit dans ses morceaux.", svg: `<svg viewBox="0 0 400 180"><rect class="aplat-papier" x="60" y="40" width="70" height="46" rx="6"/><rect class="aplat" x="140" y="40" width="110" height="46" rx="6"/><rect class="aplat-papier" x="260" y="40" width="90" height="46" rx="6"/><rect class="trait-fin" x="60" y="40" width="70" height="46" rx="6"/><rect class="trait" x="140" y="40" width="110" height="46" rx="6"/><rect class="trait-fin" x="260" y="40" width="90" height="46" rx="6"/><text class="texte-main" x="95" y="69" text-anchor="middle">dé</text><text class="texte-main" x="195" y="69" text-anchor="middle">bois</text><text class="texte-main" x="305" y="69" text-anchor="middle">ement</text><text class="texte-petit" x="95" y="106" text-anchor="middle">préfixe</text><text class="texte-petit" x="195" y="106" text-anchor="middle">radical</text><text class="texte-petit" x="305" y="106" text-anchor="middle">suffixe</text><text class="texte-pigment" x="95" y="124" text-anchor="middle">enlever</text><text class="texte-pigment" x="195" y="124" text-anchor="middle">les arbres</text><text class="texte-pigment" x="305" y="124" text-anchor="middle">l'action</text><text class="texte" x="200" y="162" text-anchor="middle">déboisement : l'action d'enlever les arbres</text></svg>` },
            { t: "tableau", titre: "Préfixes et suffixes utiles", entetes: ["Élément", "Sens", "Exemples"], lignes: [
              ["in-, im-, il-, ir-", "contraire", "invisible, impossible, illisible, irréel"],
              ["re-, ré-", "de nouveau", "refaire, réécrire"],
              ["dé-, dés-", "enlever, défaire", "déboiser, désobéir"],
              ["pré-", "avant", "préhistoire, prévoir"],
              ["-able", "qui peut être", "lavable, mangeable"],
              ["-eur, -ier", "personne qui agit, métier", "chanteur, jardinier"],
              ["-ette", "petit", "fillette, maisonnette"],
            ] },
            { t: "verifie", q: "Dans « impossible », que signifie le préfixe « im- » ?", choix: ["de nouveau", "avant", "le contraire", "petit"], bonne: 2, explication: "« Impossible », c'est le contraire de « possible ». Le préfixe in- devient im- devant m, b ou p : *immobile, imbuvable, impatient*. « De nouveau », c'est re- ; « avant », pré-." },
          ],
        },
        {
          titre: "Les relations de sens",
          blocs: [
            { t: "texte", md: "**Synonymes** : des mots de sens proche (*content, heureux, joyeux*). Ils évitent les répétitions.\n**Antonymes** : des mots de sens contraire (*monter / descendre*, *visible / invisible*). Souvent, un préfixe suffit à fabriquer l'antonyme.\n**Champ lexical** : tous les mots qui se rapportent à un même thème.\n**Homonymes** : même prononciation, sens différents : *vert, verre, ver, vers*." },
            { t: "exemple", titre: "Trouver un champ lexical", md: "Dans la liste *vague, marin, plage, cahier, voilier, stylo*, quatre mots appartiennent au champ lexical de la mer : **vague, marin, plage, voilier**. *Cahier* et *stylo* relèvent du champ lexical de l'école." },
            { t: "definition", terme: "Sens propre et sens figuré", md: "Le **sens propre** est le sens premier, concret : *une pierre dure*. Le **sens figuré** est un sens imagé, né d'une comparaison : *un cœur de pierre*, c'est un cœur dur comme la pierre, donc insensible." },
            { t: "verifie", q: "Que signifie « Il est tombé dans les pommes » ?", choix: ["Il a glissé dans un verger.", "Il s'est évanoui.", "Il adore les fruits.", "Il s'est trompé."], bonne: 1, explication: "C'est une expression au sens figuré : tomber dans les pommes, c'est perdre connaissance. Prendre l'expression au sens propre, avec de vraies pommes, est le piège classique." },
          ],
        },
        {
          titre: "Les niveaux de langue",
          blocs: [
            { t: "tableau", titre: "Trois façons de dire la même chose", entetes: ["Familier", "Courant", "Soutenu"], lignes: [
              ["un bouquin", "un livre", "un ouvrage"],
              ["Je suis crevé.", "Je suis fatigué.", "Je suis exténué."],
              ["une bagnole", "une voiture", "une automobile"],
              ["T'as vu ?", "Tu as vu ?", "Avez-vous remarqué ?"],
            ] },
            { t: "texte", md: "Le niveau **familier** se parle entre amis ou en famille. Le niveau **courant** convient presque partout, à l'école comme à l'écrit. Le niveau **soutenu** appartient aux textes littéraires et aux discours solennels. Bien parler, c'est choisir le niveau adapté à la situation." },
          ],
        },
        {
          titre: "Lire un article de dictionnaire",
          blocs: [
            { t: "texte", md: "Dans le dictionnaire, les mots sont rangés par **ordre alphabétique**. Si deux mots commencent par la même lettre, on compare la deuxième, puis la troisième… : *chameau, chapeau, château, chaton, chemin*." },
            { t: "exemple", titre: "Un article décrypté", md: "**rocher** n. m. (de *roche*). 1. Grande masse de pierre dure. *Les mouettes se posent sur le rocher.* 2. Gâteau ou bonbon en forme de petit rocher. *Un rocher au chocolat.*\n\n*n. m.* = nom masculin (on trouve aussi *n. f.*, *v.*, *adj.*, *adv.*). Les chiffres séparent les **différents sens** ; les phrases en italique sont des **exemples** ; la parenthèse donne l'**étymologie**, l'origine du mot." },
          ],
        },
      ],
      bilan: "Un mot se lit en morceaux (préfixe, radical, suffixe), vit en famille, a des synonymes et des contraires, change de sens au figuré et de niveau selon la situation. Le dictionnaire est son livret de famille.",
    },

    // ───────────────────────────── 9. Récits d'aventure et de création ─────────────────────────────
    "6e-francais-09-recits-aventure-creation": {
      accroche: "Un naufragé seul sur une île, un héros qui erre dix ans sur la mer, un monde qui naît des ténèbres… Depuis toujours, les humains se racontent deux grandes sortes d'histoires : les aventures des héros et la naissance du monde.",
      objectifs: [
        "Distinguer auteur, narrateur et personnage",
        "Repérer les cinq étapes du schéma narratif",
        "Caractériser le héros d'aventure et ses épreuves",
        "Connaître les grands récits de création",
      ],
      sections: [
        {
          titre: "Qui raconte l'histoire ?",
          blocs: [
            { t: "texte", md: "Quand tu lis *Robinson Crusoé*, trois rôles différents sont en jeu. L'**auteur**, Daniel Defoe, est un homme réel qui a publié le livre en 1719. Le **narrateur** est la voix qui raconte : ici, c'est Robinson lui-même, qui dit « je ». Les **personnages** sont les êtres de l'histoire : Robinson, Vendredi…" },
            { t: "schema", titre: "Auteur, narrateur, personnages", legende: "L'auteur vit dans le monde réel ; le narrateur et les personnages n'existent que dans le livre.", svg: `<svg viewBox="0 0 400 225"><rect class="aplat-papier" x="10" y="30" width="140" height="140" rx="8"/><rect class="trait-fin" x="10" y="30" width="140" height="140" rx="8"/><rect class="aplat" x="190" y="30" width="200" height="140" rx="8"/><rect class="trait" x="190" y="30" width="200" height="140" rx="8"/><text class="texte-petit" x="80" y="50" text-anchor="middle">MONDE RÉEL</text><text class="texte" x="80" y="92" text-anchor="middle">Auteur</text><text class="texte-petit" x="80" y="110" text-anchor="middle">Daniel Defoe</text><text class="texte-petit" x="80" y="126" text-anchor="middle">homme réel, 1719</text><line class="trait-fin" x1="150" y1="100" x2="186" y2="100" marker-end="url(#fl)"/><text class="texte-petit" x="168" y="92" text-anchor="middle">écrit</text><text class="texte-petit" x="290" y="50" text-anchor="middle">DANS LE LIVRE</text><text class="texte" x="290" y="82" text-anchor="middle">Narrateur</text><text class="texte-petit" x="290" y="98" text-anchor="middle">la voix qui raconte</text><text class="texte" x="290" y="130" text-anchor="middle">Personnages</text><text class="texte-petit" x="290" y="146" text-anchor="middle">Robinson, Vendredi…</text><text class="texte-petit" x="200" y="196" text-anchor="middle">Ici, Robinson dit « je » :</text><text class="texte-petit" x="200" y="213" text-anchor="middle">il est à la fois narrateur et personnage.</text></svg>` },
            { t: "tableau", titre: "Deux sortes de narrateurs", entetes: ["Narrateur", "Pronom", "Effet sur le lecteur", "Exemple"], lignes: [
              ["**personnage** de l'histoire", "je", "on vit l'aventure avec lui, on partage ses peurs", "« Je marchais depuis des heures quand j'aperçus la grotte. »"],
              ["**extérieur** à l'histoire", "il, elle", "on observe les personnages de plus loin", "« Robinson aperçut une trace de pas sur le sable. »"],
            ] },
            { t: "savais-tu", md: "Dans l'*Odyssée*, chez les Phéaciens, Ulysse prend la parole et raconte lui-même ses aventures : le Cyclope, la magicienne Circé, les Sirènes. Le personnage devient narrateur ! C'est un **récit enchâssé**, un récit dans le récit." },
            { t: "verifie", q: "Dans *Robinson Crusoé*, qui est le narrateur ?", choix: ["Daniel Defoe, l'auteur", "Robinson, qui dit « je »", "Vendredi", "le lecteur"], bonne: 1, explication: "Daniel Defoe a écrit le livre, mais c'est Robinson, personnage inventé, qui raconte à la 1re personne. L'auteur et le narrateur ne sont pas la même personne." },
          ],
        },
        {
          titre: "Le schéma narratif",
          blocs: [
            { t: "definition", terme: "Schéma narratif", md: "Les cinq étapes qui organisent la plupart des récits : situation initiale, élément perturbateur, péripéties, élément de résolution, situation finale." },
            { t: "etapes", titre: "Le schéma narratif de « Robinson Crusoé »", items: [
              { titre: "Situation initiale", md: "Le jeune Robinson rêve de voyages et prend la mer, malgré l'avis de son père." },
              { titre: "Élément perturbateur", md: "Une tempête : son navire fait **naufrage**. Seul survivant, il échoue sur une île déserte." },
              { titre: "Péripéties", md: "Il construit un abri, cultive, élève des chèvres ; il découvre une trace de pas ; il sauve un prisonnier qu'il nomme Vendredi." },
              { titre: "Élément de résolution", md: "Un navire anglais aborde l'île : Robinson aide son capitaine à reprendre le bateau aux mutins." },
              { titre: "Situation finale", md: "Après vingt-huit ans sur l'île, Robinson rentre en Angleterre, transformé." },
            ] },
            { t: "astuce", md: "L'élément perturbateur est souvent annoncé par « un jour », « soudain » ou « mais ». Sans lui, rien ne se passerait : c'est lui qui bouleverse la situation initiale et lance l'histoire." },
          ],
        },
        {
          titre: "Le héros d'aventure et ses épreuves",
          blocs: [
            { t: "texte", md: "Dans un **récit d'aventure**, le héros quitte son monde habituel pour l'inconnu : la mer, une île, une jungle. Il affronte des **épreuves** (tempête, faim, ennemis, monstres) qui exigent courage et ingéniosité. À la fin, il en sort **transformé**.\n\nPour faire ressentir une émotion, le narrateur ne dit pas toujours « il eut peur ». Il montre le corps : « Il resta figé, le souffle coupé. » Le lecteur devine la peur." },
            { t: "citation", texte: "Dis-moi, Muse, cet homme subtil qui erra si longtemps…", auteur: "Homère", source: "Odyssée, chant I (trad. Leconte de Lisle)" },
            { t: "texte", md: "L'*Odyssée*, attribuée au poète grec **Homère**, raconte le retour d'**Ulysse**. Après dix ans de guerre à Troie, il met encore dix ans à rentrer à **Ithaque**, son île, où l'attendent sa femme **Pénélope** et son fils Télémaque. En chemin : le Cyclope, Circé, les Sirènes et la colère du dieu Poséidon." },
            { t: "exemple", titre: "Montrer la peur sans la nommer", md: "« Robinson aperçut une trace de pas sur le sable. Il resta figé, le souffle coupé. »\n\nLe mot « peur » n'apparaît pas. Pourtant, *figé* et *le souffle coupé* décrivent les **réactions du corps** : le lecteur ressent l'émotion avec le personnage. C'est l'un des secrets du récit d'aventure." },
          ],
        },
        {
          titre: "Les récits de création",
          blocs: [
            { t: "definition", terme: "Mythe", md: "Un récit très ancien, transmis de génération en génération, qui met en scène des dieux et des héros pour expliquer l'origine du monde, des humains ou d'un phénomène naturel." },
            { t: "citation", texte: "Au commencement, Dieu créa les cieux et la terre.", auteur: "La Bible", source: "Genèse, 1, 1 (trad. Louis Segond)" },
            { t: "texte", md: "Dans la **Genèse**, premier livre de la Bible, Dieu crée le monde en **six jours** : la lumière ; le ciel ; la terre, les mers et les plantes ; les astres ; les poissons et les oiseaux ; enfin les animaux terrestres et les humains. Le septième jour, il se repose.\n\nLe poète latin **Ovide** a rassemblé dans les *Métamorphoses* des centaines de mythes de transformation. Beaucoup expliquent l'origine d'une plante, d'un animal ou des humains." },
            { t: "tableau", titre: "Quelques métamorphoses d'Ovide", entetes: ["Personnage", "Ce qui lui arrive", "Il devient…"], lignes: [
              ["Narcisse", "tombe amoureux de son propre reflet dans l'eau", "une fleur, le narcisse"],
              ["Daphné", "fuit le dieu Apollon qui la poursuit", "un laurier"],
              ["Arachné", "défie la déesse Minerve au tissage", "une araignée"],
              ["Deucalion et Pyrrha", "survivent au déluge et jettent des pierres derrière eux", "les pierres deviennent des humains"],
            ] },
            { t: "verifie", q: "Dans les *Métamorphoses*, en quoi Daphné est-elle transformée pour échapper à Apollon ?", choix: ["en araignée", "en fleur", "en laurier", "en pierre"], bonne: 2, explication: "Daphné devient un laurier, arbre qu'Apollon choisit alors comme symbole. L'araignée, c'est Arachné ; la fleur, c'est Narcisse ; les pierres sont celles de Deucalion et Pyrrha." },
          ],
        },
        {
          titre: "Repères : des récits venus de loin",
          blocs: [
            { t: "frise", titre: "Grands récits d'aventure et de création", evenements: [
              { date: -1800, label: "L'Épopée de Gilgamesh", detail: "Mésopotamie : l'un des plus anciens récits connus, qui raconte déjà un déluge." },
              { date: -750, label: "L'Odyssée d'Homère", detail: "Grèce, vers le VIIIe siècle av. J.-C. : le retour d'Ulysse à Ithaque." },
              { date: 8, label: "Les Métamorphoses d'Ovide", detail: "Rome, achevées vers l'an 8 : des centaines de mythes de transformation." },
              { date: 1719, label: "Robinson Crusoé de Daniel Defoe", detail: "Angleterre : le naufragé sur son île." },
              { date: 1870, label: "Vingt mille lieues sous les mers de Jules Verne", detail: "France : le capitaine Nemo et son sous-marin, le Nautilus." },
              { date: 1883, label: "L'Île au trésor de Robert Louis Stevenson", detail: "Écosse : pirates et carte au trésor." },
            ] },
            { t: "savais-tu", md: "Un déluge apparaît dans trois récits très anciens : l'*Épopée de Gilgamesh*, la Genèse (avec Noé et son arche) et les *Métamorphoses* (avec Deucalion et Pyrrha). Les mythes voyagent d'un peuple à l'autre et se répondent." },
          ],
        },
      ],
      bilan: "Un auteur réel, un narrateur qui raconte, des personnages qui vivent l'histoire ; cinq étapes pour la construire ; des héros transformés par leurs épreuves ; et des mythes millénaires pour expliquer la naissance du monde.",
    },

    // ───────────────────────────── 10. Monstres et ruses ─────────────────────────────
    "6e-francais-10-monstres-et-ruses": {
      accroche: "Un géant à l'œil unique, un homme à tête de taureau, un ogre qui sent la chair fraîche… Face à eux, des héros qui ne sont pas les plus forts. Leur arme secrète ? La ruse.",
      objectifs: [
        "Caractériser un monstre et son rôle dans le récit",
        "Connaître le Cyclope, le Minotaure et les ogres des contes",
        "Comprendre comment le faible l'emporte sur le fort par la ruse",
        "Dégager la morale d'une fable",
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'un monstre ?",
          blocs: [
            { t: "definition", terme: "Monstre", md: "Un être hors norme qui fait peur : taille gigantesque, corps mélangé (homme et taureau, femme aux cheveux de serpents), œil unique… Il est souvent **dévorant**." },
            { t: "texte", md: "Le monstre est « **aux limites de l'humain** ». Le Cyclope Polyphème a un corps d'homme, il parle, il élève des moutons. Mais il dévore ses invités au lieu de les accueillir : il bafoue l'**hospitalité**, la règle la plus sacrée des Grecs. Le monstre montre ce que l'humain redoute." },
            { t: "tableau", titre: "Galerie de monstres", entetes: ["Monstre", "Particularité", "Vaincu par"], lignes: [
              ["le Cyclope Polyphème", "géant à un seul œil, mangeur d'hommes", "Ulysse"],
              ["le Minotaure", "corps d'homme, tête de taureau", "Thésée"],
              ["Méduse", "cheveux de serpents, regard qui change en pierre", "Persée"],
              ["l'ogre", "géant qui dévore les enfants", "le Petit Poucet"],
            ] },
          ],
        },
        {
          titre: "Ulysse et le Cyclope : l'intelligence contre la force",
          blocs: [
            { t: "texte", md: "Au chant IX de l'*Odyssée*, Ulysse et douze compagnons entrent dans la grotte de Polyphème, fils de Poséidon. Le géant ferme l'entrée avec un énorme rocher, puis dévore deux hommes le soir, deux le lendemain matin, deux le lendemain soir : **six compagnons** en tout.\n\nPourquoi Ulysse ne le tue-t-il pas pendant son sommeil ? Parce que **seul le Cyclope peut déplacer le rocher** : mort, il les laisserait prisonniers. Ulysse réfléchit avant de frapper." },
            { t: "etapes", titre: "Les étapes de la ruse", items: [
              { titre: "Le vin", md: "Ulysse offre au Cyclope un vin très fort, qui l'enivre." },
              { titre: "Le faux nom", md: "Il dit s'appeler « **Personne** »." },
              { titre: "L'aveuglement", md: "Quand le géant s'endort, il lui crève l'œil avec un pieu d'olivier durci au feu." },
              { titre: "L'appel inutile", md: "Polyphème hurle : « Personne me tue ! » Les autres Cyclopes croient que tout va bien et repartent." },
              { titre: "La fuite", md: "Au matin, Ulysse et ses compagnons sortent accrochés sous le ventre des moutons." },
            ] },
            { t: "verifie", q: "Pourquoi Ulysse se fait-il appeler « Personne » ?", choix: ["Parce que c'est son vrai nom", "Pour que les autres Cyclopes ne viennent pas au secours de Polyphème", "Pour faire rire le Cyclope", "Pour se cacher de Poséidon"], bonne: 1, explication: "Quand Polyphème crie que « Personne » le tue, ses voisins comprennent que personne ne l'attaque et s'en vont. La ruse repose sur un jeu de mots." },
          ],
        },
        {
          titre: "Thésée, le Minotaure… et les ogres des contes",
          blocs: [
            { t: "schema", titre: "Carte des personnages du mythe du Minotaure", legende: "Qui fait quoi ? Suis les flèches : la pelote d'Ariane permet à Thésée de vaincre le labyrinthe.", svg: `<svg viewBox="0 0 400 280"><rect class="aplat-papier" x="20" y="20" width="120" height="40" rx="8"/><rect class="aplat-papier" x="260" y="20" width="120" height="40" rx="8"/><rect class="aplat-papier" x="20" y="130" width="120" height="40" rx="8"/><rect class="aplat-fort" x="260" y="130" width="120" height="40" rx="8"/><rect class="aplat" x="140" y="225" width="120" height="40" rx="8"/><rect class="trait-fin" x="20" y="20" width="120" height="40" rx="8"/><rect class="trait-fin" x="260" y="20" width="120" height="40" rx="8"/><rect class="trait-fin" x="20" y="130" width="120" height="40" rx="8"/><rect class="trait" x="260" y="130" width="120" height="40" rx="8"/><rect class="trait" x="140" y="225" width="120" height="40" rx="8"/><text class="texte" x="80" y="38" text-anchor="middle">Minos</text><text class="texte-petit" x="80" y="53" text-anchor="middle">roi de Crète</text><text class="texte" x="320" y="38" text-anchor="middle">Dédale</text><text class="texte-petit" x="320" y="53" text-anchor="middle">architecte</text><text class="texte" x="80" y="148" text-anchor="middle">Ariane</text><text class="texte-petit" x="80" y="163" text-anchor="middle">fille de Minos</text><text class="texte" x="320" y="148" text-anchor="middle">Minotaure</text><text class="texte-petit" x="320" y="163" text-anchor="middle">homme-taureau</text><text class="texte" x="200" y="243" text-anchor="middle">Thésée</text><text class="texte-petit" x="200" y="258" text-anchor="middle">prince d'Athènes</text><line class="trait-fin" x1="140" y1="40" x2="256" y2="40" marker-end="url(#fl)"/><text class="texte-petit" x="198" y="33" text-anchor="middle">commande</text><text class="texte-petit" x="198" y="56" text-anchor="middle">le labyrinthe</text><line class="trait-fin" x1="80" y1="60" x2="80" y2="126" marker-end="url(#fl)"/><text class="texte-petit" x="88" y="97">père de</text><line class="trait-fin" x1="320" y1="60" x2="320" y2="126" marker-end="url(#fl)"/><text class="texte-petit" x="328" y="97">l'y enferme</text><line class="trait" x1="110" y1="170" x2="168" y2="221" marker-end="url(#fl-p)"/><text class="texte-pigment" x="128" y="207" text-anchor="end">donne le fil</text><line class="trait" x1="232" y1="221" x2="290" y2="174" marker-end="url(#fl-p)"/><text class="texte-pigment" x="272" y="210">tue</text></svg>` },
            { t: "texte", md: "Le roi de Crète **Minos** fait enfermer le Minotaure dans un **labyrinthe** construit par l'architecte **Dédale**. Le prince athénien **Thésée** vient l'affronter. **Ariane**, fille de Minos, amoureuse de lui, lui confie une pelote de fil : il la déroule en entrant, tue le monstre, puis suit le fil pour ressortir. On parle encore aujourd'hui du « fil d'Ariane ».\n\nDans les contes, l'**ogre** du *Petit Poucet* (Perrault) ou la sorcière de *Hansel et Gretel* (Grimm) sont vaincus par des enfants plus malins qu'eux. Le Petit Poucet, lui, échange dans le noir les bonnets de ses frères contre les couronnes des filles de l'ogre, qui se trompe de victimes." },
          ],
        },
        {
          titre: "Résister au plus fort : fables, Renart et farces",
          blocs: [
            { t: "definition", terme: "Fable", md: "Un court récit, souvent en vers, où des animaux parlent et agissent comme des humains. Il se termine (ou commence) par une **morale**, une leçon de vie." },
            { t: "citation", texte: "Maître Corbeau, sur un arbre perché,\nTenait en son bec un fromage.", auteur: "Jean de La Fontaine", source: "Fables, « Le Corbeau et le Renard » (1668)" },
            { t: "texte", md: "Le Renard n'a ni ailes ni force : il a des **mots**. Il flatte le Corbeau, qui ouvre le bec pour chanter… et lâche le fromage.\n\nMais chez La Fontaine, le faible ne gagne pas toujours. Dans « Le Loup et l'Agneau », l'agneau répond juste à chaque accusation, et pourtant le loup le dévore : « La raison du plus fort est toujours la meilleure. » La Fontaine n'approuve pas : il **dénonce** l'injustice de la force." },
            { t: "exemple", titre: "Dégager la morale d'une fable", etapes: [
              "Je repère le fort et le faible : le Corbeau a le fromage, le Renard n'a rien.",
              "Je regarde qui l'emporte et comment : le Renard gagne grâce à la flatterie.",
              "Je cherche la phrase qui donne la leçon, au début ou à la fin : « Apprenez que tout flatteur / Vit aux dépens de celui qui l'écoute. »",
              "Je la reformule avec mes mots : il faut se méfier de ceux qui nous complimentent pour obtenir quelque chose.",
            ] },
            { t: "tableau", titre: "Quatre fables, quatre morales", entetes: ["Fable", "Qui l'emporte ?", "Morale"], lignes: [
              ["Le Corbeau et le Renard", "le rusé, contre le vaniteux", "« Tout flatteur vit aux dépens de celui qui l'écoute. »"],
              ["Le Loup et l'Agneau", "le fort, injustement", "« La raison du plus fort est toujours la meilleure. »"],
              ["Le Lièvre et la Tortue", "la tortue, partie à temps", "« Rien ne sert de courir ; il faut partir à point. »"],
              ["Le Lion et le Rat", "le petit rat, qui sauve le lion", "« On a souvent besoin d'un plus petit que soi. »"],
            ] },
            { t: "texte", md: "Au Moyen Âge, le *Roman de Renart* raconte les tours du goupil Renart contre le loup Ysengrin, le lion Noble ou le coq Chantecler. Dans *La Farce de Maître Pathelin*, l'avocat Pathelin vole du drap à un marchand, puis apprend au berger Thibaut l'Agnelet à répondre « Bée ! » au juge. Mais quand Pathelin réclame son salaire, le berger lui répond… « Bée ! » : **le trompeur est trompé**." },
            { t: "verifie", q: "Dans *La Farce de Maître Pathelin*, que répond le berger quand Pathelin lui réclame son salaire ?", choix: ["« Merci, maître ! »", "« Au voleur ! »", "« Bée ! »", "« Revenons à nos moutons ! »"], bonne: 2, explication: "Pathelin lui avait appris à faire le mouton devant le juge : le berger retourne la ruse contre lui." },
          ],
        },
        {
          titre: "Repères : monstres et rusés à travers les siècles",
          blocs: [
            { t: "frise", titre: "Des œuvres pour résister au plus fort", evenements: [
              { date: -750, label: "L'Odyssée d'Homère", detail: "Ulysse ruse contre le Cyclope." },
              { date: -600, label: "Les fables d'Ésope", detail: "Grèce : La Fontaine s'en inspirera." },
              { date: 1175, label: "Le Roman de Renart", detail: "Écrit par plusieurs auteurs, de 1170 à 1250 environ." },
              { date: 1460, label: "La Farce de Maître Pathelin", detail: "Vers 1460, auteur inconnu." },
              { date: 1668, label: "Les Fables de La Fontaine", detail: "Premier recueil, sous Louis XIV." },
              { date: 1697, label: "Les Contes de Perrault", detail: "Le Petit Poucet, le Chat botté, le Petit Chaperon rouge." },
              { date: 1812, label: "Les Contes des frères Grimm", detail: "Allemagne : Hansel et Gretel." },
            ] },
            { t: "savais-tu", md: "Le *Roman de Renart* a eu tant de succès que le nom propre « Renart » a remplacé l'ancien mot « goupil » : depuis, on dit « un renard »." },
          ],
        },
      ],
      bilan: "Le monstre incarne ce que l'humain redoute, et le héros le bat par l'esprit. Dans les fables, les farces et le Roman de Renart, la ruse est l'arme du faible… même si la force triomphe parfois injustement.",
    },

    // ───────────────────────────── 11. Poésie et théâtre ─────────────────────────────
    "6e-francais-11-poesie-theatre": {
      accroche: "Un poème, c'est de la langue qui danse : elle compte ses pas (les syllabes), fait revenir ses sons (les rimes) et invente des images. Le théâtre, lui, est un texte qui attend des voix et des corps pour prendre vie.",
      objectifs: [
        "Employer le vocabulaire du poème : vers, strophe, rime, syllabe",
        "Reconnaître comparaison, métaphore et personnification",
        "Employer le vocabulaire du théâtre : réplique, didascalie, scène, acte",
      ],
      sections: [
        {
          titre: "Vers, strophes et rimes",
          blocs: [
            { t: "texte", md: "Un poème s'écrit en **vers** : chaque ligne est un vers, qui commence souvent par une majuscule. Les vers se regroupent en **strophes**, séparées par un blanc, comme des paragraphes. Une strophe de deux vers est un **distique**, de trois vers un **tercet**, de quatre vers un **quatrain**." },
            { t: "schema", titre: "Un quatrain de Verlaine", legende: "Le 1er et le 3e vers riment ensemble, le 2e et le 4e aussi : les rimes sont croisées.", svg: `<svg viewBox="0 0 400 220"><text class="texte-petit" x="22" y="22" text-anchor="middle">syll.</text><text class="texte-petit" x="330" y="22" text-anchor="middle">rimes</text><text class="texte-pigment" x="22" y="50" text-anchor="middle">8</text><text class="texte-pigment" x="22" y="75" text-anchor="middle">4</text><text class="texte-pigment" x="22" y="100" text-anchor="middle">8</text><text class="texte-pigment" x="22" y="125" text-anchor="middle">4</text><text class="texte" x="46" y="50">Le ciel est, par-dessus le toit,</text><text class="texte" x="46" y="75">Si bleu, si calme !</text><text class="texte" x="46" y="100">Un arbre, par-dessus le toit,</text><text class="texte" x="46" y="125">Berce sa palme.</text><text class="texte-main" x="330" y="50" text-anchor="middle">A</text><text class="texte-main" x="330" y="75" text-anchor="middle">B</text><text class="texte-main" x="330" y="100" text-anchor="middle">A</text><text class="texte-main" x="330" y="125" text-anchor="middle">B</text><path class="trait-fin" d="M344 36 L352 36 L352 131 L344 131"/><text class="texte" x="200" y="160" text-anchor="middle">Rimes croisées : A B A B</text><text class="texte-petit" x="200" y="182" text-anchor="middle">4 vers = une strophe appelée quatrain</text><text class="texte-petit" x="200" y="204" text-anchor="middle">Paul Verlaine, Sagesse</text></svg>` },
            { t: "tableau", titre: "Disposer les rimes", entetes: ["Disposition", "Schéma", "Comment la reconnaître"], lignes: [
              ["plates (ou suivies)", "AABB", "les rimes vont par deux, l'une après l'autre"],
              ["croisées", "ABAB", "les rimes alternent"],
              ["embrassées", "ABBA", "une paire de rimes en entoure une autre"],
            ] },
            { t: "verifie", q: "Comment appelle-t-on des rimes disposées ABBA ?", choix: ["des rimes plates", "des rimes croisées", "des rimes embrassées", "des rimes suivies"], bonne: 2, explication: "La rime B est « serrée dans les bras » de la rime A : ce sont des rimes embrassées. ABAB, ce sont des rimes croisées ; AABB, des rimes plates, qu'on appelle aussi suivies." },
          ],
        },
        {
          titre: "Compter les syllabes",
          blocs: [
            { t: "propriete", titre: "Les règles du compte", md: "On compte les syllabes **prononcées**.\nLe **e muet** compte à l'intérieur du vers devant une consonne (*u-ne fleur*) ; il s'efface devant une voyelle ; il ne compte jamais à la **fin du vers**.\n8 syllabes : **octosyllabe** ; 10 syllabes : **décasyllabe** ; 12 syllabes : **alexandrin**." },
            { t: "exemple", titre: "Compter un alexandrin de Victor Hugo", etapes: [
              "« Demain, dès l'aube, à l'heure où blanchit la campagne » (*Les Contemplations*, 1856).",
              "De / main / dès / l'au / be à / l'heu / re où / blan / chit / la / cam / pagne.",
              "Le e de « aube » et celui de « heure » s'effacent devant une voyelle ; celui de « campagne », en fin de vers, ne compte pas.",
              "Total : **12 syllabes**. C'est un alexandrin.",
            ] },
            { t: "astuce", md: "Tape doucement sur la table à chaque syllabe en lisant le vers à voix haute. Et souviens-toi : « octo » veut dire huit, « déca » veut dire dix. Les noms des vers t'aident à les retenir." },
          ],
        },
        {
          titre: "Les images poétiques",
          blocs: [
            { t: "tableau", titre: "Trois façons de créer une image", entetes: ["Image", "Comment ça marche", "Exemple"], lignes: [
              ["**Comparaison**", "rapproche deux éléments avec un mot-outil : comme, tel, pareil à, ressemble à", "Ses yeux brillent **comme** des étoiles."],
              ["**Métaphore**", "rapproche deux éléments **sans** mot-outil", "La lune est une faucille d'or."],
              ["**Personnification**", "une chose ou un animal agit comme une personne", "Le vent **hurle** dans la nuit."],
            ] },
            { t: "citation", texte: "Quel dieu, quel moissonneur de l'éternel été,\nAvait, en s'en allant, négligemment jeté\nCette faucille d'or dans le champ des étoiles.", auteur: "Victor Hugo", source: "« Booz endormi », La Légende des siècles (1859)" },
            { t: "texte", md: "Hugo ne dit pas « la lune ressemble à une faucille » : il dit directement « cette faucille d'or ». Pas de mot-outil, c'est une **métaphore**. Avec « comme », ce serait une comparaison. Et les animaux qui parlent dans les fables de La Fontaine ? Ce sont des personnifications !" },
            { t: "verifie", q: "« Le ruisseau chante sous les arbres. » Quelle est cette image ?", choix: ["une comparaison", "une métaphore", "une personnification"], bonne: 2, explication: "Le ruisseau, qui n'est pas une personne, « chante » : on lui prête une action humaine. Il n'y a pas de mot-outil, donc ce n'est pas une comparaison, et le ruisseau n'est pas remplacé par autre chose, donc ce n'est pas une métaphore." },
          ],
        },
        {
          titre: "Le texte de théâtre",
          blocs: [
            { t: "texte", md: "Une pièce de théâtre est écrite pour être **jouée**. Son texte mêle deux choses : ce que disent les personnages, les **répliques**, et ce que l'auteur indique sans le faire dire, les **didascalies**, souvent en italique : *(Il sort.)*, *(en colère)*, *La scène se passe à Naples.*" },
            { t: "tableau", titre: "Le vocabulaire du théâtre", entetes: ["Mot", "Définition"], lignes: [
              ["réplique", "ce que dit un personnage quand il prend la parole"],
              ["tirade", "longue réplique adressée à d'autres personnages"],
              ["monologue", "réplique d'un personnage seul en scène"],
              ["aparté", "parole dite à part, que les autres personnages ne sont pas censés entendre"],
              ["didascalie", "indication de l'auteur (gestes, ton, décor, entrées, sorties), jamais prononcée"],
              ["acte", "grande partie de la pièce (souvent trois ou cinq)"],
              ["scène", "partie d'un acte ; on change de scène quand un personnage entre ou sort"],
            ] },
            { t: "citation", texte: "Que diable allait-il faire dans cette galère ?", auteur: "Molière", source: "Les Fourberies de Scapin, acte II, scène 7 (1671)" },
            { t: "texte", md: "Le vieux Géronte répète cette réplique encore et encore pendant que son valet Scapin lui soutire de l'argent : la répétition fait rire. Retiens l'ordre de grandeur : la **pièce** se divise en **actes**, les actes en **scènes**, et les scènes sont faites de **répliques**." },
          ],
        },
        {
          titre: "Repères : poètes et dramaturges",
          blocs: [
            { t: "frise", titre: "Quelques œuvres à connaître", evenements: [
              { date: 1666, label: "Le Médecin malgré lui (Molière)", detail: "Comédie : le bûcheron Sganarelle devient médecin de force." },
              { date: 1668, label: "Fables (La Fontaine)", detail: "Premier recueil de fables en vers." },
              { date: 1671, label: "Les Fourberies de Scapin (Molière)", detail: "Comédie : les ruses d'un valet." },
              { date: 1856, label: "Les Contemplations (Hugo)", detail: "Recueil de poèmes, dont « Demain, dès l'aube… »." },
              { date: 1859, label: "La Légende des siècles (Hugo)", detail: "Poèmes épiques, dont « Booz endormi »." },
            ] },
            { t: "savais-tu", md: "Molière s'appelait en réalité Jean-Baptiste Poquelin. Il était à la fois auteur, comédien et chef de troupe : il jouait lui-même les rôles qu'il écrivait." },
          ],
        },
      ],
      bilan: "En poésie, on compte les syllabes, on écoute les rimes et on guette les images ; au théâtre, on distingue ce qui se dit (les répliques) de ce qui se joue (les didascalies), dans des scènes rangées en actes.",
    },

    // ───────────────────────────── 12. Expression écrite et orale ─────────────────────────────
    "6e-francais-12-expression-ecrite-orale": {
      accroche: "Raconter une histoire, tout le monde sait faire… jusqu'au moment où l'on se retrouve devant une feuille blanche. Écrire et parler, c'est un travail d'artisan : il y a des outils, des gestes et des secrets de fabrication.",
      objectifs: [
        "Organiser un récit avec des étapes, des connecteurs et les bons temps",
        "Rédiger une description et insérer un dialogue",
        "Résumer un texte en gardant l'essentiel",
        "Lire à voix haute de façon expressive",
      ],
      sections: [
        {
          titre: "Construire un récit",
          blocs: [
            { t: "texte", md: "Pour écrire un récit, appuie-toi sur le **schéma narratif** : il te donne un plan en cinq étapes. Le problème qui lance l'histoire, l'élément perturbateur, arrive en **deuxième** position. Relie ensuite tes étapes avec des **connecteurs de temps**." },
            { t: "etapes", titre: "Le plan d'un récit et ses connecteurs", items: [
              { titre: "Situation initiale", md: "« Il était une fois… », « Autrefois… » : on présente le lieu, l'époque, le héros, à l'imparfait." },
              { titre: "Élément perturbateur", md: "« Un jour », « soudain » : le problème surgit, au passé simple." },
              { titre: "Péripéties", md: "« D'abord », « ensuite », « puis » : les actions s'enchaînent." },
              { titre: "Élément de résolution", md: "« Enfin », « heureusement », « grâce à » : le problème se règle." },
              { titre: "Situation finale", md: "« Depuis ce jour », « désormais » : un nouvel équilibre s'installe." },
            ] },
            { t: "tableau", titre: "Les connecteurs logiques", entetes: ["Lien", "Connecteurs", "Exemple"], lignes: [
              ["cause", "parce que, car, comme", "Il fuit **car** il a peur."],
              ["conséquence", "donc, alors, c'est pourquoi", "Il a peur, **donc** il fuit."],
              ["opposition", "mais, pourtant, cependant", "Il a peur, **mais** il avance."],
              ["temps", "pendant que, quand, puis", "**Pendant que** le loup dort, l'agneau s'enfuit."],
            ] },
            { t: "exemple", titre: "Un début de conte décrypté", md: "« Il était une fois une fillette qui **vivait** près d'une forêt. **Un jour**, sa mère lui **dit** : « Porte cette galette à ta grand-mère. » En chemin, elle **rencontra** un loup… »\n\nSituation initiale à l'**imparfait** (*vivait*) ; élément perturbateur annoncé par « un jour » ; actions au **passé simple** (*dit*, *rencontra*) ; paroles annoncées par les deux-points et encadrées par des guillemets." },
            { t: "verifie", q: "Quel connecteur exprime une conséquence ?", choix: ["car", "pourtant", "donc", "pendant que"], bonne: 2, explication: "« Donc » annonce un résultat : il a peur, donc il fuit. « Car » exprime la cause, « pourtant » l'opposition, et « pendant que » le temps." },
          ],
        },
        {
          titre: "Décrire et faire parler",
          blocs: [
            { t: "texte", md: "Une **description** fait voir un lieu ou un personnage. Dans un récit au passé, elle s'écrit à l'**imparfait**. Pour guider le regard, organise-la : du plus proche au plus lointain, de haut en bas, de gauche à droite, avec des repères (*au premier plan, au fond, à droite*). Choisis des adjectifs précis et fais appel aux **cinq sens** : ce qu'on voit, entend, sent, touche, goûte." },
            { t: "schema", titre: "Présenter un dialogue", legende: "Deux-points et guillemets ouvrent le dialogue ; un tiret marque chaque nouvelle voix ; le guillemet fermant vient à la toute fin.", svg: `<svg viewBox="0 0 400 190"><text class="texte" x="20" y="32">Le loup demanda : « Où vas-tu ?</text><text class="texte-petit" x="20" y="50">deux-points et guillemet ouvrant : les paroles commencent</text><text class="texte" x="20" y="88">— Chez ma mère-grand, répondit-elle.</text><text class="texte-petit" x="20" y="106">tiret : une autre personne parle</text><text class="texte-petit" x="20" y="122">« répondit-elle » : verbe de parole, sujet inversé</text><text class="texte" x="20" y="160">— Est-ce bien loin ? »</text><text class="texte-petit" x="20" y="178">guillemet fermant : fin du dialogue</text><line class="pointille" x1="10" y1="68" x2="390" y2="68"/><line class="pointille" x1="10" y1="140" x2="390" y2="140"/></svg>` },
            { t: "astuce", md: "Remplace « dit-il » par un verbe de parole qui montre le ton : *hurla* (colère), *murmura*, *chuchota* (voix basse), *demanda* (question), *répliqua* (réponse vive). Après les paroles, le sujet s'inverse : « Viens vite ! » **cria Léa**." },
            { t: "verifie", q: "Dans un dialogue, que signale le tiret en début de ligne ?", choix: ["la fin des paroles", "une question", "un changement de personne qui parle", "le retour au récit"], bonne: 2, explication: "Le tiret indique qu'une autre personne prend la parole. La fin des paroles est marquée par le guillemet fermant, et la question par le point d'interrogation." },
          ],
        },
        {
          titre: "Résumer un texte",
          blocs: [
            { t: "definition", terme: "Résumé", md: "Un texte court qui reformule l'**essentiel** d'un récit avec ses propres mots, dans l'ordre de l'histoire, sans détails, sans dialogues et sans avis personnel. On garde le même temps et la même personne que le texte de départ." },
            { t: "exemple", titre: "Résumer « Le Maître chat ou le Chat botté » de Perrault", md: "« À sa mort, un meunier laissa son moulin à l'aîné de ses fils, son âne au deuxième et son chat au plus jeune. Le chat demanda un sac et des bottes. Par ses ruses, il fit passer son maître pour le marquis de Carabas et offrit du gibier au roi. Il trompa ensuite un ogre, qui se changea en souris, et le mangea. Grâce à lui, le jeune homme épousa la fille du roi. »\n\nLes cinq étapes sont là, dans l'ordre, au passé, sans un seul dialogue." },
            { t: "attention", md: "Un résumé n'est ni une copie des plus belles phrases, ni une critique. « J'ai adoré ce conte » n'a rien à y faire : garde ton avis pour un autre exercice. N'invente rien non plus : tout doit venir du texte." },
          ],
        },
        {
          titre: "Lire et parler à voix haute",
          blocs: [
            { t: "liste", titre: "Les secrets d'une lecture expressive", items: [
              "**Articule** : chaque syllabe doit s'entendre, surtout en fin de mot.",
              "**Respecte la ponctuation** : petite pause à la virgule, plus longue au point ; la voix **monte** à la fin d'une question.",
              "**Varie le ton** selon les émotions : joie, peur, colère, mystère.",
              "**Règle ton débit** : ni trop vite ni trop lentement ; ralentis aux moments importants.",
              "**Regarde ton public** : lève les yeux du texte de temps en temps.",
            ] },
            { t: "astuce", md: "Prépare ta lecture comme un comédien : au crayon, trace une barre / à chaque pause et souligne les mots à mettre en valeur. Lis d'abord le texte une fois pour toi, puis à voix haute." },
          ],
        },
      ],
      bilan: "Un bon récit suit un plan, s'enchaîne avec des connecteurs, décrit à l'imparfait et raconte au passé simple ; un bon résumé garde l'essentiel ; une bonne lecture donne vie au texte.",
    },
  },
};
