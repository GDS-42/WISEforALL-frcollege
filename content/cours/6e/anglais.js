// Cours ÉCLORE — 6e Anglais. Schéma : docs/COURS.md
export default {
  id: "6e-anglais",
  chapitres: {
    "6e-anglais-01-se-presenter": {
      accroche: "Premier jour dans un collège de Manchester. Oliver, 11 ans, ne connaît personne. Une fille lui sourit : « Hi! I'm Grace. What's your name? » Trois phrases plus tard, ils sont déjà amis. À toi d'apprendre ces phrases magiques !",
      objectifs: [
        "Saluer quelqu'un selon le moment de la journée et lui dire au revoir",
        "Dire ton nom, ton âge et ton origine, et poser les mêmes questions",
        "Épeler ton prénom avec l'alphabet anglais",
        "Compter de 1 à 100 et comprendre un nombre entendu",
      ],
      sections: [
        {
          titre: "Dire bonjour… et au revoir",
          blocs: [
            { t: "texte", md: "En anglais, il existe un « bonjour » passe-partout et des « bonjour » qui dépendent de l'heure. **[[Hello]]** (ou **[[Hi]]**, plus familier, entre copains) s'emploie à tout moment. Mais un Britannique dit aussi volontiers **[[Good morning]]** le matin, **[[Good afternoon]]** l'après-midi et **[[Good evening]]** le soir.\n\nPour partir, on dit **[[Goodbye]]**, **[[Bye]]** ou **[[See you]]** (à plus !). **[[Good night]]** se dit seulement quand on va se coucher ou qu'on quitte quelqu'un tard le soir." },
            { t: "schema", titre: "Quel « bonjour » selon l'heure ?", legende: "[[Hello]] et [[Hi]] conviennent toute la journée. Les formules en « [[Good…]] » suivent la course du soleil.", svg: `<svg viewBox="0 0 400 190"><rect class="aplat" x="10" y="70" width="105" height="40"/><rect class="aplat-papier" x="115" y="70" width="105" height="40"/><rect class="aplat" x="220" y="70" width="90" height="40"/><rect class="aplat-papier" x="310" y="70" width="80" height="40"/><rect class="trait" x="10" y="70" width="380" height="40" fill="none"/><line class="trait-fin" x1="115" y1="70" x2="115" y2="110"/><line class="trait-fin" x1="220" y1="70" x2="220" y2="110"/><line class="trait-fin" x1="310" y1="70" x2="310" y2="110"/><text class="texte" x="62" y="95" text-anchor="middle">Good morning</text><text class="texte" x="167" y="95" text-anchor="middle">Good afternoon</text><text class="texte" x="265" y="95" text-anchor="middle">Good evening</text><text class="texte" x="350" y="95" text-anchor="middle">Good night</text><circle class="aplat-fort" cx="62" cy="42" r="10"/><circle class="aplat-fort" cx="167" cy="30" r="12"/><path class="aplat-fort" d="M253 56 A12 12 0 0 1 277 56 Z"/><line class="trait-fin" x1="245" y1="56" x2="285" y2="56"/><path class="aplat-fort" d="M352 30 A12 12 0 1 0 362 50 A10 10 0 1 1 352 30 Z"/><text class="texte-petit" x="10" y="128">6 h</text><text class="texte-petit" x="115" y="128" text-anchor="middle">12 h</text><text class="texte-petit" x="220" y="128" text-anchor="middle">18 h</text><text class="texte-petit" x="310" y="128" text-anchor="middle">coucher</text><text class="texte-main" x="200" y="165" text-anchor="middle">Hello ! Hi ! → à toute heure</text></svg>` },
            { t: "attention", md: "**[[Good night]]** ne veut pas dire « bonsoir » ! Si tu arrives à une fête à 19 h, dis **[[Good evening]]** ou **[[Hello]]**. « [[Good night]] » signifie « bonne nuit » : on le dit en partant ou avant d'aller dormir." },
            { t: "verifie", q: "Il est 15 heures, tu entres dans la classe. Que dis-tu ?", choix: ["[[Good morning!]]", "[[Good afternoon!]]", "[[Good night!]]", "[[Goodbye!]]"], bonne: 1, explication: "De midi à 18 h environ, c'est l'après-midi : **[[Good afternoon!]]** [[Goodbye]] et [[Good night]] servent à partir, pas à arriver." },
          ],
        },
        {
          titre: "Se présenter et poser les questions",
          blocs: [
            { t: "texte", md: "Pour te présenter, tu donnes trois informations : ton **nom**, ton **âge** et ton **origine**. Pour chacune, il y a une question à connaître par cœur, car c'est elle que tu entendras en premier." },
            { t: "tableau", titre: "Les trois questions de la rencontre", entetes: ["Question", "Réponse", "En français"], lignes: [["[[**What's your name?**]]", "[[My name is Lily. / I'm Lily.]]", "Comment tu t'appelles ? – Je m'appelle Lily."], ["[[**How old are you?**]]", "[[I'm twelve. / I'm twelve years old.]]", "Quel âge as-tu ? – J'ai 12 ans."], ["[[**Where are you from?**]]", "[[I'm from France. / I'm French.]]", "D'où viens-tu ? – Je viens de France. / Je suis française."]] },
            { t: "propriete", titre: "L'âge se dit avec « [[be]] »", md: "En français, on **a** 12 ans. En anglais, on **est** 12 ans : **[[I am 12.]]** On peut ajouter *[[years old]]* à la fin, mais jamais *[[years]]* tout seul.\n\n✔ [[I'm twelve.]] ✔ [[I'm twelve years old.]] ✘ [[I have twelve years.]]" },
            { t: "exemple", titre: "Une vraie rencontre", etapes: ["A : [[Hello! What's your name?]]", "B : [[Hi! My name is Lily. And you?]]", "A : [[I'm Tom. How old are you?]]", "B : [[I'm twelve. Where are you from?]]", "A : [[I'm from Scotland. Nice to meet you!]] (Ravi de te rencontrer !)", "B : [[Nice to meet you too!]]"] },
            { t: "verifie", q: "Comment dis-tu « J'ai 12 ans » en anglais ?", choix: ["[[I have 12 years.]]", "[[I am 12 years.]]", "[[I'm 12 years old.]]", "[[I have 12 years old.]]"], bonne: 2, explication: "L'âge se dit avec **[[be]]** : [[I'm 12 years old]] (ou simplement [[I'm 12]]). « [[Years]] » seul, sans « [[old]] », est incorrect." },
          ],
        },
        {
          titre: "L'alphabet et l'art d'épeler",
          blocs: [
            { t: "texte", md: "Les Britanniques épellent souvent les noms au téléphone ou à l'accueil. On te demandera : **[[How do you spell it?]]** (Ça s'écrit comment ?). Les 26 lettres sont les mêmes qu'en français… mais beaucoup se prononcent autrement. Voici celles qui piègent le plus les francophones." },
            { t: "tableau", titre: "Les lettres pièges (prononciation approximative)", entetes: ["Lettre", "Son", "Ça ressemble à…"], lignes: [["[[A]]", "/eɪ/", "« éï »"], ["[[E]]", "/iː/", "« ii » (comme un i long)"], ["[[I]]", "/aɪ/", "« aï »"], ["[[G]]", "/dʒiː/", "« djii »"], ["[[J]]", "/dʒeɪ/", "« djéï »"], ["[[R]]", "/ɑː/", "« âr », sans rouler"], ["[[Y]]", "/waɪ/", "« ouaï »"], ["[[H]]", "/eɪtʃ/", "« éïtch »"], ["[[W]]", "/ˈdʌbəljuː/", "« [[double-you]] »"]] },
            { t: "astuce", md: "Pour une lettre doublée, dis **[[double]]** devant : *Harry* s'épelle **[[H – A – double R – Y]]**. Et retiens la paire infernale : **E** se dit « ii » et **I** se dit « aï ». C'est l'inverse de ce qu'on attend !" },
            { t: "exemple", titre: "Épeler un prénom", md: "– [[What's your name?]]\n– [[Emma.]]\n– [[How do you spell it?]]\n– **[[E – double M – A]]** : « ii – double èm – éï »." },
          ],
        },
        {
          titre: "Compter de 1 à 100",
          blocs: [
            { t: "tableau", titre: "Les nombres à connaître", entetes: ["Unités", "De 10 à 19", "Dizaines"], lignes: [["1 [[one]], 2 [[two]], 3 [[three]]", "10 [[ten]], 11 [[eleven]], 12 [[twelve]]", "20 [[twenty]]"], ["4 [[four]], 5 [[five]], 6 [[six]]", "13 [[thirteen]], 14 [[fourteen]], 15 [[fifteen]]", "30 [[thirty]], 40 [[forty]]"], ["7 [[seven]], 8 [[eight]], 9 [[nine]]", "16 [[sixteen]], 17 [[seventeen]], 18 [[eighteen]], 19 [[nineteen]]", "50 [[fifty]], 60 [[sixty]], 70 [[seventy]], 80 [[eighty]], 90 [[ninety]]"], ["", "", "100 [[a hundred]] ([[one hundred]])"]] },
            { t: "propriete", titre: "[[-teen]] ou [[-ty]] ?", md: "De 13 à 19, les nombres finissent en **[[-teen]]** : *[[fourteen]]* (14). Les dizaines finissent en **[[-ty]]** : *[[forty]]* (40). Entre les deux, on relie la dizaine et l'unité par un **trait d'union** : **[[twenty-one]]** (21), **[[sixty-seven]]** (67), **[[ninety-nine]]** (99)." },
            { t: "attention", md: "Trois orthographes trompeuses : **[[four]]** (4) mais **[[forty]]** (40), sans u ; **[[five]]** (5) mais **[[fifteen]]** et **[[fifty]]** ; **[[eight]]** (8) mais **[[eighteen]]** et **[[eighty]]**, avec un seul t." },
            { t: "verifie", q: "Écris en chiffres : « [[sixty-seven]] ».", choix: ["76", "67", "17", "60"], bonne: 1, explication: "**[[Sixty]]** = 60 et **[[seven]]** = 7 : [[sixty-seven]] = **67**. La dizaine vient d'abord, comme en français." },
          ],
        },
      ],
      bilan: "Hello, What's your name?, How old are you?, Where are you from? : avec ces quatre formules, l'alphabet et les nombres, tu peux te présenter à n'importe qui dans le monde anglophone.",
    },

    "6e-anglais-02-be-have-got": {
      accroche: "Ruby, qui habite à Bristol, montre une photo à sa correspondante française : « This is my brother. He's thirteen. He's got a skateboard. » Avec deux petits verbes, be et have got, toute une famille apparaît à l'écran.",
      objectifs: [
        "Conjuguer be au présent aux formes affirmative, négative et interrogative",
        "Utiliser have got pour dire ce que l'on possède",
        "Choisir le bon pronom sujet et le bon adjectif possessif",
        "Montrer quelque chose avec this et that",
      ],
      sections: [
        {
          titre: "[[Be]], le verbe « être »",
          blocs: [
            { t: "texte", md: "**[[Be]]** est le verbe le plus utilisé de l'anglais. Il sert à dire qui tu es, ton âge, ton humeur, où tu te trouves : *[[I'm French. She's eleven. We're happy. They're in the garden.]]* À l'oral, on utilise presque toujours les **formes contractées** : l'apostrophe remplace la lettre disparue." },
            { t: "tableau", titre: "[[Be]] au présent", entetes: ["Affirmative", "Contractée", "Négative", "Interrogative"], lignes: [["[[I am]]", "[[I'm]]", "[[I'm not]]", "[[Am I…?]]"], ["[[you are]]", "[[you're]]", "[[you aren't]]", "[[Are you…?]]"], ["[[he / she / it is]]", "[[he's / she's / it's]]", "[[he isn't]]", "[[Is he…?]]"], ["[[we are]]", "[[we're]]", "[[we aren't]]", "[[Are we…?]]"], ["[[they are]]", "[[they're]]", "[[they aren't]]", "[[Are they…?]]"]] },
            { t: "propriete", titre: "Pour poser une question, on inverse", md: "Avec [[be]], il suffit d'échanger le sujet et le verbe : *[[You are ready.]]* → **[[Are you ready?]]** On répond par une **réponse courte** qui reprend le verbe : **[[Yes, I am.]]** / **[[No, I'm not.]]**" },
            { t: "attention", md: "Dans une réponse courte affirmative, on ne contracte jamais : ✔ *[[Yes, I am.]]* ✘ *[[Yes, I'm.]]* Et n'oublie pas que **[[you]]** veut dire à la fois « tu » et « vous »." },
            { t: "verifie", q: "Complète : « [[My friends ___ in the garden.]] »", choix: ["[[is]]", "[[am]]", "[[are]]", "[[be]]"], bonne: 2, explication: "« [[My friends]] » est un pluriel : on peut le remplacer par **[[they]]**, donc **[[are]]**." },
          ],
        },
        {
          titre: "[[Have got]] : ce que je possède",
          blocs: [
            { t: "definition", terme: "[[Have got]]", md: "Expression britannique très courante qui veut dire « avoir, posséder ». Elle sert pour les objets, les animaux, la famille et l'apparence : *[[I've got a dog. She's got blue eyes.]]*" },
            { t: "tableau", titre: "[[Have got]] au présent", entetes: ["Affirmative", "Négative", "Question", "Réponse courte"], lignes: [["[[I / you / we / they **have got** ('ve got)]]", "[[haven't got]]", "[[**Have** you **got** a pet?]]", "[[Yes, I have. / No, I haven't.]]"], ["[[he / she / it **has got** ('s got)]]", "[[hasn't got]]", "[[**Has** she **got** a pet?]]", "[[Yes, she has. / No, she hasn't.]]"]] },
            { t: "exemple", titre: "Ma sœur", md: "*[[She is my sister. She's eleven. She has got brown eyes. Has she got a dog? No, she hasn't, but she's got two cats.]]*\n\n→ C'est ma sœur. Elle a onze ans. Elle a les yeux marron. A-t-elle un chien ? Non, mais elle a deux chats." },
            { t: "attention", md: "Le **'s** peut cacher deux verbes ! Dans *[[She's eleven]]*, 's = **[[is]]**. Dans *[[She's got a cat]]*, 's = **[[has]]**. Le mot **[[got]]** juste après est l'indice qui te montre que c'est [[have got]]." },
            { t: "verifie", q: "Complète : « [[She ___ a new bike.]] »", choix: ["[[have got]]", "[[has got]]", "[[is got]]", "[[are got]]"], bonne: 1, explication: "Avec [[he, she, it]], on emploie **[[has got]]** : [[She has got (She's got) a new bike.]]" },
          ],
        },
        {
          titre: "Les pronoms et les adjectifs possessifs",
          blocs: [
            { t: "texte", md: "Le **pronom sujet** remplace le nom de celui qui fait l'action. L'**adjectif possessif** indique à qui appartient une chose. En anglais, le possessif dépend **du possesseur** et jamais de l'objet possédé. C'est la grande différence avec le français !" },
            { t: "tableau", titre: "Pronoms sujets et possessifs", entetes: ["Pronom sujet", "En français", "Possessif", "Exemple"], lignes: [["[[I]]", "je", "[[my]]", "[[my bag]]"], ["[[you]]", "tu", "[[your]]", "[[your bag]]"], ["[[he]]", "il (garçon, homme)", "[[his]]", "[[his bag]] (son sac à lui)"], ["[[she]]", "elle (fille, femme)", "[[her]]", "[[her bag]] (son sac à elle)"], ["[[it]]", "il / elle (objet, animal)", "[[its]]", "[[its tail]] (sa queue)"], ["[[we]]", "nous", "[[our]]", "[[our bags]]"], ["[[you]]", "vous", "[[your]]", "[[your bags]]"], ["[[they]]", "ils / elles", "[[their]]", "[[their bags]]"]] },
            { t: "propriete", titre: "[[His]] ou [[her]] ?", md: "On choisit **[[his]]** si le possesseur est un garçon, **[[her]]** si c'est une fille. *[[Tom and his sister]]* = Tom et sa sœur. *[[Amy and her brother]]* = Amy et son frère. Le possessif ne prend jamais de -s : *[[his brothers]]*, pas « [[hiss brothers]] »." },
            { t: "attention", md: "Deux pièges : **[[I]]** s'écrit toujours en majuscule, même au milieu d'une phrase. Et **[[its]]** (son, sa pour un objet ou un animal) n'a pas d'apostrophe, alors que **[[it's]]** = [[it is]]." },
          ],
        },
        {
          titre: "[[This]] et [[that]] : ici ou là-bas",
          blocs: [
            { t: "texte", md: "Pour montrer quelque chose ou présenter quelqu'un, on utilise **[[this]]** (ceci, celui-ci) quand c'est **près de toi**, et **[[that]]** (cela, celui-là) quand c'est **plus loin**. *[[This is my friend Sam]]* : Sam est juste à côté de toi." },
            { t: "schema", titre: "[[This]] ou [[that]] ?", legende: "[[This]] : à portée de main. [[That]] : il faut tendre le bras pour le montrer.", svg: `<svg viewBox="0 0 400 200"><circle class="aplat" cx="60" cy="60" r="16"/><circle class="trait" cx="60" cy="60" r="16" fill="none"/><line class="trait" x1="60" y1="76" x2="60" y2="130"/><line class="trait" x1="60" y1="92" x2="100" y2="110"/><line class="trait" x1="60" y1="92" x2="30" y2="112"/><line class="trait" x1="60" y1="130" x2="44" y2="170"/><line class="trait" x1="60" y1="130" x2="76" y2="170"/><circle class="aplat-fort" cx="115" cy="118" r="12"/><circle class="aplat-fort" cx="330" cy="150" r="12"/><line class="trait-fin" x1="10" y1="175" x2="390" y2="175"/><text class="texte-main" x="125" y="80" text-anchor="middle">this ball</text><text class="texte-petit" x="125" y="150" text-anchor="middle">près de moi</text><path class="pointille" d="M140 120 L310 146" marker-end="url(#fl)"/><text class="texte-main" x="330" y="115" text-anchor="middle">that ball</text><text class="texte-petit" x="330" y="192" text-anchor="middle">loin de moi</text></svg>` },
            { t: "exemple", titre: "Présenter avec [[this]]", md: "*[[This is Tom and **his** sister Amy.]]* → Voici Tom et sa sœur Amy.\n*[[Look at Lucy and Mark: **they** are twins. **Their** parents are teachers. **This** is Lucy's bag, here in my hand.]]*" },
            { t: "verifie", q: "Traduis « C'est son vélo (à elle) ».", choix: ["[[It's his bike.]]", "[[It's her bike.]]", "[[It's its bike.]]", "[[It's she bike.]]"], bonne: 1, explication: "Le vélo appartient à une fille : on choisit **[[her]]**. [[His]] serait pour un garçon." },
          ],
        },
      ],
      bilan: "Be pour dire qui l'on est, have got pour dire ce que l'on a, et un possessif qui regarde toujours le possesseur : ce sont les fondations de toutes tes phrases en anglais.",
    },

    "6e-anglais-03-famille-animaux": {
      accroche: "Chez les Patel, à Leicester, le déjeuner du dimanche réunit tout le monde : grandma, grandpa, aunt Priya, uncle Raj, les cousins… et Biscuit, le chien, qui attend sous la table. Comment présenter tout ce petit monde en anglais ?",
      objectifs: [
        "Nommer les membres de ta famille et les animaux familiers",
        "Dire « le chien de Tom » avec le génitif 's",
        "Former le pluriel des noms, réguliers et irréguliers",
      ],
      sections: [
        {
          titre: "Les membres de la famille",
          blocs: [
            { t: "texte", md: "Les mots de la famille vont souvent par paires, un mot pour le masculin et un pour le féminin. À la maison, on utilise des mots affectueux : **[[mum]]** (maman, orthographe britannique ; *[[mom]]* aux États-Unis), **[[dad]]**, **[[grandma]]**, **[[grandpa]]**." },
            { t: "tableau", titre: "La famille en paires", entetes: ["Masculin", "Féminin", "En français"], lignes: [["[[father / dad]]", "[[mother / mum]]", "père / mère"], ["[[brother]]", "[[sister]]", "frère / sœur"], ["[[grandfather / grandpa]]", "[[grandmother / grandma]]", "grand-père / grand-mère"], ["[[uncle]]", "[[aunt]]", "oncle / tante"], ["[[son]]", "[[daughter]]", "fils / fille"], ["[[cousin]]", "[[cousin]]", "cousin / cousine (même mot !)"], ["[[parents]]", "[[baby]]", "parents / bébé"]] },
            { t: "schema", titre: "[[My family tree]] (mon arbre généalogique)", legende: "L'arbre de Tom. Les mots en petit disent qui est chaque personne pour Tom.", svg: `<svg viewBox="0 0 400 250"><line class="trait-fin" x1="186" y1="35" x2="214" y2="35"/><line class="trait-fin" x1="200" y1="35" x2="200" y2="75"/><line class="trait-fin" x1="130" y1="75" x2="270" y2="75"/><line class="trait-fin" x1="130" y1="75" x2="130" y2="103"/><line class="trait-fin" x1="270" y1="75" x2="270" y2="103"/><line class="trait-fin" x1="80" y1="120" x2="94" y2="120"/><line class="trait-fin" x1="306" y1="120" x2="320" y2="120"/><line class="trait-fin" x1="87" y1="120" x2="87" y2="175"/><line class="trait-fin" x1="44" y1="175" x2="130" y2="175"/><line class="trait-fin" x1="44" y1="175" x2="44" y2="198"/><line class="trait-fin" x1="130" y1="175" x2="130" y2="198"/><line class="trait-fin" x1="313" y1="120" x2="313" y2="198"/><rect class="aplat-papier" x="114" y="18" width="72" height="34"/><rect class="trait" x="114" y="18" width="72" height="34" fill="none"/><text class="texte" x="150" y="33" text-anchor="middle">George</text><text class="texte-petit" x="150" y="47" text-anchor="middle">grandpa</text><rect class="aplat-papier" x="214" y="18" width="72" height="34"/><rect class="trait" x="214" y="18" width="72" height="34" fill="none"/><text class="texte" x="250" y="33" text-anchor="middle">Mary</text><text class="texte-petit" x="250" y="47" text-anchor="middle">grandma</text><rect class="aplat-papier" x="8" y="103" width="72" height="34"/><rect class="trait" x="8" y="103" width="72" height="34" fill="none"/><text class="texte" x="44" y="118" text-anchor="middle">Paul</text><text class="texte-petit" x="44" y="132" text-anchor="middle">dad</text><rect class="aplat-papier" x="94" y="103" width="72" height="34"/><rect class="trait" x="94" y="103" width="72" height="34" fill="none"/><text class="texte" x="130" y="118" text-anchor="middle">Sarah</text><text class="texte-petit" x="130" y="132" text-anchor="middle">mum</text><rect class="aplat-papier" x="234" y="103" width="72" height="34"/><rect class="trait" x="234" y="103" width="72" height="34" fill="none"/><text class="texte" x="270" y="118" text-anchor="middle">Peter</text><text class="texte-petit" x="270" y="132" text-anchor="middle">uncle</text><rect class="aplat-papier" x="320" y="103" width="72" height="34"/><rect class="trait" x="320" y="103" width="72" height="34" fill="none"/><text class="texte" x="356" y="118" text-anchor="middle">Kate</text><text class="texte-petit" x="356" y="132" text-anchor="middle">aunt</text><rect class="aplat-fort" x="8" y="198" width="72" height="34"/><rect class="trait" x="8" y="198" width="72" height="34" fill="none"/><text class="texte" x="44" y="213" text-anchor="middle">Tom</text><text class="texte-petit" x="44" y="227" text-anchor="middle">me</text><rect class="aplat-papier" x="94" y="198" width="72" height="34"/><rect class="trait" x="94" y="198" width="72" height="34" fill="none"/><text class="texte" x="130" y="213" text-anchor="middle">Emma</text><text class="texte-petit" x="130" y="227" text-anchor="middle">sister</text><rect class="aplat-papier" x="277" y="198" width="72" height="34"/><rect class="trait" x="277" y="198" width="72" height="34" fill="none"/><text class="texte" x="313" y="213" text-anchor="middle">Jack</text><text class="texte-petit" x="313" y="227" text-anchor="middle">cousin</text></svg>` },
            { t: "verifie", q: "Sur l'arbre, Peter est le frère de la mère de Tom. Pour Tom, Peter est son…", choix: ["[[cousin]]", "[[uncle]]", "[[grandpa]]", "[[brother]]"], bonne: 1, explication: "Le frère de ta mère (ou de ton père) est ton oncle : **[[uncle]]**. Sa femme Kate est ton **[[aunt]]**, et leur fils Jack ton **[[cousin]]**." },
          ],
        },
        {
          titre: "[[Pets and farm animals]]",
          blocs: [
            { t: "texte", md: "Un **[[pet]]**, c'est un animal de compagnie, celui qui vit à la maison avec toi. Les animaux de la ferme (*[[farm animals]]*) vivent dehors, dans les champs : on ne les appelle pas des [[pets]]." },
            { t: "tableau", titre: "Les animaux", entetes: ["[[Pets]] (à la maison)", "En français", "[[Farm animals]] (à la ferme)", "En français"], lignes: [["[[a dog]]", "un chien", "[[a cow]]", "une vache"], ["[[a cat]]", "un chat", "[[a pig]]", "un cochon"], ["[[a rabbit]]", "un lapin", "[[a sheep]]", "un mouton"], ["[[a hamster]]", "un hamster", "[[a hen]]", "une poule"], ["[[a goldfish]]", "un poisson rouge", "[[a duck]]", "un canard"], ["[[a bird / a tortoise]]", "un oiseau / une tortue", "[[a horse]]", "un cheval"], ["[[a guinea pig]]", "un cochon d'Inde", "", ""]] },
            { t: "savais-tu", md: "Les Britanniques se disent volontiers *[[a nation of animal lovers]]*, un peuple d'amoureux des animaux. Le **[[guinea pig]]** (cochon d'Inde) porte un nom étonnant : il ne vient pas de Guinée et ce n'est pas un cochon !" },
          ],
        },
        {
          titre: "Le génitif 's : le chien de Tom",
          blocs: [
            { t: "propriete", titre: "Le génitif", md: "Pour dire à qui appartient une chose, on écrit **le possesseur + 's + la chose possédée**. L'ordre est **inversé** par rapport au français.\n\n*le chien de Tom* → **[[Tom's dog]]**\n*la sœur de Tom* → **[[Tom's sister]]**" },
            { t: "exemple", titre: "Construire un génitif pas à pas", etapes: ["Je veux dire : « le chat de Lucy ».", "Qui possède ? Lucy. J'écris d'abord le possesseur : Lucy.", "J'ajoute 's : [[Lucy's]].", "J'ajoute ce qui est possédé, sans article : **[[Lucy's cat]]**."] },
            { t: "propriete", titre: "Possesseur au pluriel", md: "Si le possesseur est un pluriel terminé par -s, on ajoute **seulement l'apostrophe** : *la voiture de mes parents* → **[[my parents' car]]**. Pour un pluriel irrégulier, on garde 's : **[[the children's room]]**." },
            { t: "attention", md: "Ne dis pas *[[the dog of Tom]]* : c'est du français traduit mot à mot. Et ne confonds pas : dans **[[Sam's eleven]]**, le 's = **[[is]]** (Sam a onze ans), ce n'est pas un génitif. Un génitif est toujours suivi d'un nom : *[[Sam's bike]]*." },
            { t: "verifie", q: "Comment dit-on « la voiture de mes parents » ?", choix: ["[[my parents's car]]", "[[my parents' car]]", "[[the car of my parents]]", "[[my parent's cars]]"], bonne: 1, explication: "« [[Parents]] » finit par -s : on ajoute seulement l'apostrophe → **[[my parents' car]]**." },
          ],
        },
        {
          titre: "Un chat, deux chats : le pluriel",
          blocs: [
            { t: "tableau", titre: "Le pluriel régulier", entetes: ["Le nom finit par…", "On ajoute", "Exemples"], lignes: [["la plupart des noms", "-s", "[[cat → cats, dog → dogs]]"], ["-s, -x, -ch, -sh", "-es", "[[box → boxes, watch → watches, bus → buses]]"], ["consonne + y", "-y devient -ies", "[[baby → babies, family → families]]"], ["voyelle + y", "-s", "[[boy → boys, day → days]]"]] },
            { t: "tableau", titre: "Les pluriels irréguliers à connaître par cœur", entetes: ["Singulier", "Pluriel", "En français"], lignes: [["[[a man]]", "[[men]]", "homme(s)"], ["[[a woman]]", "[[women]]", "femme(s)"], ["[[a child]]", "[[children]]", "enfant(s)"], ["[[a person]]", "[[people]]", "personne(s)"], ["[[a foot]]", "[[feet]]", "pied(s)"], ["[[a tooth]]", "[[teeth]]", "dent(s)"], ["[[a mouse]]", "[[mice]]", "souris"], ["[[a sheep / a fish]]", "[[sheep / fish]]", "mouton(s) / poisson(s) : aucun changement"]] },
            { t: "exemple", md: "*[[This is my family. My mum's name is Sarah and my dad's name is Paul. I've got two **brothers** and a sister. We've got three pets: a dog, a cat and two **goldfish**.]]*" },
            { t: "verifie", q: "Quel est le pluriel de « [[child]] » ?", choix: ["[[childs]]", "[[childes]]", "[[children]]", "[[childrens]]"], bonne: 2, explication: "[[Child]] fait partie des pluriels irréguliers : **[[children]]**. Il ne prend jamais de -s en plus." },
          ],
        },
      ],
      bilan: "Pour parler de ta famille et de tes animaux, retiens l'ordre anglais du génitif : on nomme d'abord le possesseur (Tom's dog), puis on ajoute un -s au pluriel… sauf pour les rebelles comme children, teeth et mice.",
    },

    "6e-anglais-04-ecole": {
      accroche: "8 h 45, à Leeds. Maya enfile son blazer d'uniforme, noue sa cravate et file à la *registration*, l'appel du matin. Premier cours : Science, puis Maths. Bienvenue dans une école britannique, où l'on porte un uniforme et où l'on dit « Miss » à sa professeure !",
      objectifs: [
        "Nommer les matières et dire quelle est ta matière préférée",
        "Lire et présenter un emploi du temps",
        "Nommer les objets de la classe et du cartable",
        "Comprendre les consignes et demander de l'aide en anglais",
      ],
      sections: [
        {
          titre: "Les matières et ma matière préférée",
          blocs: [
            { t: "tableau", titre: "[[School subjects]]", entetes: ["En anglais", "En français"], lignes: [["[[English / French]]", "anglais / français"], ["[[Maths]]", "mathématiques"], ["[[History / Geography]]", "histoire / géographie"], ["[[Science]]", "sciences (SVT, physique-chimie)"], ["[[Art / Music]]", "arts plastiques / musique"], ["[[PE (Physical Education)]]", "EPS"], ["[[Technology]]", "technologie"], ["[[ICT]]", "informatique"]] },
            { t: "texte", md: "Pour demander la matière préférée de quelqu'un : **[[What's your favourite subject?]]** On répond : **[[My favourite subject is Maths.]]** ou **[[I like History.]]** Le mot *[[subject]]* veut dire « matière scolaire »." },
            { t: "attention", md: "En anglais britannique, **[[favourite]]** s'écrit avec un **u** (*[[favorite]]* aux États-Unis), et **[[Maths]]** garde son **s** (*[[Math]]* aux États-Unis). Les langues prennent une majuscule : **[[English]]**, **[[French]]**, même quand ce sont des matières." },
            { t: "verifie", q: "Comment demandes-tu la matière préférée de quelqu'un ?", choix: ["[[What's your favourite matter?]]", "[[What's your favourite subject?]]", "[[Do you like school?]]", "[[What is your lesson?]]"], bonne: 1, explication: "La matière scolaire se dit **[[subject]]**. « [[Matter]] » est un faux ami : il veut dire « affaire » ou « matière » au sens physique." },
          ],
        },
        {
          titre: "Lire un emploi du temps",
          blocs: [
            { t: "texte", md: "Ton emploi du temps s'appelle un **[[timetable]]**. Un cours est **[[a lesson]]**, la récréation **[[break]]**, et le déjeuner se prend à **[[the canteen]]** (la cantine) pendant **[[lunchtime]]**. Voici le début de la semaine de Maya." },
            { t: "tableau", titre: "[[Maya's timetable]]", entetes: ["[[Time]]", "[[Monday]]", "[[Tuesday]]", "[[Wednesday]]"], lignes: [["9:00", "[[Science]]", "[[English]]", "[[Maths]]"], ["10:00", "[[Maths]]", "[[History]]", "[[French]]"], ["11:00", "[[break]]", "[[break]]", "[[break]]"], ["11:20", "[[English]]", "[[PE]]", "[[Art]]"], ["12:20", "[[lunch]]", "[[lunch]]", "[[lunch]]"], ["1:20", "[[Geography]]", "[[Music]]", "[[ICT]]"]] },
            { t: "propriete", titre: "[[On]] + jour, [[at]] + heure", md: "Devant un jour, on met [[**on**]] ; devant une heure, on met **[[at]]**.\n\n**[[We have got Maths on Monday at ten o'clock.]]** → Nous avons maths lundi à dix heures." },
            { t: "exemple", titre: "Lire le [[timetable]]", md: "*[[When have you got PE?]]* → **[[I've got PE on Tuesday at twenty past eleven.]]**\n*[[What have you got on Wednesday at nine?]]* → **[[Maths!]]**" },
          ],
        },
        {
          titre: "Les objets de la classe et du cartable",
          blocs: [
            { t: "schema", titre: "[[My classroom]]", legende: "Le plan d'une salle de classe, vue de dessus.", svg: `<svg viewBox="0 0 400 240"><path class="trait" d="M330 210 H90 V20 H390 V210 H370" fill="none"/><rect class="aplat-fort" x="175" y="24" width="130" height="8"/><text class="texte" x="240" y="48" text-anchor="middle">the board</text><rect class="aplat" x="210" y="56" width="60" height="16"/><rect class="trait-fin" x="210" y="56" width="60" height="16" fill="none"/><text class="texte-petit" x="240" y="86" text-anchor="middle">the teacher's desk</text><rect class="aplat-papier" x="115" y="100" width="60" height="16"/><rect class="trait-fin" x="115" y="100" width="60" height="16" fill="none"/><rect class="aplat-papier" x="210" y="100" width="60" height="16"/><rect class="trait-fin" x="210" y="100" width="60" height="16" fill="none"/><rect class="aplat-papier" x="305" y="100" width="60" height="16"/><rect class="trait-fin" x="305" y="100" width="60" height="16" fill="none"/><text class="texte-petit" x="145" y="112" text-anchor="middle">desk</text><rect class="trait-fin" x="137" y="122" width="16" height="9" fill="none"/><rect class="trait-fin" x="232" y="122" width="16" height="9" fill="none"/><rect class="trait-fin" x="327" y="122" width="16" height="9" fill="none"/><rect class="aplat-papier" x="115" y="148" width="60" height="16"/><rect class="trait-fin" x="115" y="148" width="60" height="16" fill="none"/><rect class="aplat-papier" x="210" y="148" width="60" height="16"/><rect class="trait-fin" x="210" y="148" width="60" height="16" fill="none"/><rect class="aplat-papier" x="305" y="148" width="60" height="16"/><rect class="trait-fin" x="305" y="148" width="60" height="16" fill="none"/><rect class="trait-fin" x="137" y="170" width="16" height="9" fill="none"/><rect class="trait-fin" x="232" y="170" width="16" height="9" fill="none"/><rect class="trait-fin" x="327" y="170" width="16" height="9" fill="none"/><text class="texte-petit" x="158" y="179">chair</text><rect class="aplat" x="86" y="90" width="8" height="70"/><rect class="trait-fin" x="86" y="90" width="8" height="70" fill="none"/><text class="texte" x="80" y="129" text-anchor="end">window</text><line class="trait" x1="330" y1="210" x2="330" y2="172"/><path class="pointille" d="M330 172 A38 38 0 0 1 368 210"/><text class="texte" x="350" y="230" text-anchor="middle">door</text><text class="texte-main" x="45" y="210" text-anchor="middle">pupils</text></svg>` },
            { t: "tableau", titre: "Dans mon cartable ([[schoolbag]]) et ma trousse ([[pencil case]])", entetes: ["En anglais", "En français"], lignes: [["[[a pen / a pencil]]", "un stylo / un crayon"], ["[[a rubber]]", "une gomme"], ["[[a ruler]]", "une règle"], ["[[a sharpener]]", "un taille-crayon"], ["[[a book / an exercise book]]", "un livre / un cahier"], ["[[glue]]", "de la colle"], ["[[scissors]]", "des ciseaux"], ["[[a pencil case / a schoolbag]]", "une trousse / un cartable"]] },
            { t: "propriete", titre: "[[A]] ou [[an]] ?", md: "On écrit **[[an]]** devant un mot qui commence par un **son voyelle** : [[**an** exercise book, **an** apple]]. Partout ailleurs, on écrit **[[a]]** : [[**a** pen, **a** ruler]]." },
            { t: "attention", md: "**[[Scissors]]** (ciseaux) est toujours au pluriel, même s'il n'y a qu'un objet : *[[My scissors are new.]]* Pour en compter, on dit **[[a pair of scissors]]**. Et *[[a rubber]]* est le mot britannique ; les Américains disent *[[an eraser]]*." },
            { t: "verifie", q: "Choisis l'article correct : « [[___ exercise book]] ».", choix: ["[[a]]", "[[an]]", "[[the a]]", "[[some]]"], bonne: 1, explication: "[[Exercise]] commence par un son voyelle : on écrit **[[an exercise book]]**." },
          ],
        },
        {
          titre: "[[Classroom English]] : consignes et demandes",
          blocs: [
            { t: "tableau", titre: "Ce que dit le professeur", entetes: ["Consigne", "Ce que tu fais"], lignes: [["[[Listen! / Repeat!]]", "Écoute ! / Répète !"], ["[[Open your books at page 10.]]", "Ouvre ton livre page 10."], ["[[Close the door.]]", "Ferme la porte."], ["[[Sit down. / Stand up.]]", "Assieds-toi. / Lève-toi."], ["[[Be quiet!]]", "Silence !"], ["[[Put your hand up.]]", "Lève la main."], ["[[Work in pairs.]]", "Travaille à deux."]] },
            { t: "liste", titre: "Ce que tu peux dire", items: ["**[[Can I go to the toilet, please?]]** – Est-ce que je peux aller aux toilettes, s'il vous plaît ?", "**[[How do you say]] « cahier » [[in English?]]** – Comment dit-on « cahier » en anglais ?", "**[[Can you repeat, please?]]** – Pouvez-vous répéter, s'il vous plaît ?", "**[[I don't understand.]]** – Je ne comprends pas.", "**[[I don't know.]]** – Je ne sais pas.", "**[[Sorry, I'm late.]]** – Désolé(e), je suis en retard."] },
            { t: "exemple", titre: "En classe", md: "*[[Teacher: Good morning, everyone. Sit down, please. Open your books at page 12.]]*\n*[[Pupil: Excuse me, can you repeat, please?]]*\n*[[Teacher: Of course. Page twelve.]]*" },
            { t: "verifie", q: "Le professeur dit « [[Put your hand up]] ». Que dois-tu faire ?", choix: ["Lever la main", "Ranger tes affaires", "Te lever", "Ouvrir ton livre"], bonne: 0, explication: "**[[Put your hand up]]** = lève la main. Se lever se dit *[[Stand up]]*." },
          ],
        },
      ],
      bilan: "Subjects, timetable, schoolbag et classroom English : avec ces mots et quelques phrases magiques comme « Can you repeat, please? », tu peux suivre un cours entier en anglais.",
    },

    "6e-anglais-05-dates-temps": {
      accroche: "Le 5 novembre au soir, à Lewes, dans le sud de l'Angleterre, des feux d'artifice éclatent dans le ciel. Jack, 12 ans, regarde sa montre : « It's seven o'clock — the bonfire is starting! » Pour vivre ce moment avec lui, il te faut les dates, l'heure… et les fêtes.",
      objectifs: [
        "Dire les jours, les mois et les saisons",
        "Dire et écrire une date avec les nombres ordinaux",
        "Demander et dire l'heure",
        "Connaître les grandes fêtes du monde anglophone",
      ],
      sections: [
        {
          titre: "Jours, mois et saisons",
          blocs: [
            { t: "tableau", titre: "Les jours de la semaine", entetes: ["[[Day]]", "Jour", "Prononciation approximative"], lignes: [["[[Monday]]", "lundi", "« meunndéï »"], ["[[Tuesday]]", "mardi", "« tiouzdéï »"], ["[[Wednesday]]", "mercredi", "« ouènzdéï » (le d ne se dit pas)"], ["[[Thursday]]", "jeudi", "« theurzdéï »"], ["[[Friday]]", "vendredi", "« fraïdéï »"], ["[[Saturday]]", "samedi", "« sateurdéï »"], ["[[Sunday]]", "dimanche", "« seunndéï »"]] },
            { t: "texte", md: "Les mois : **[[January, February, March, April, May, June, July, August, September, October, November, December]]**.\n\nLes saisons : **[[spring]]** (printemps), **[[summer]]** (été), **[[autumn]]** (automne, que les Américains appellent *[[fall]]*) et **[[winter]]** (hiver). On dit **[[in spring]]**, **[[in July]]**, mais **[[on Monday]]**." },
            { t: "propriete", titre: "Majuscule ou pas ?", md: "Les **jours** et les **mois** prennent toujours une majuscule : *[[Monday, July]]*. Les **saisons**, non : *[[spring, winter]]*." },
            { t: "verifie", q: "Quel mot désigne l'automne en anglais britannique ?", choix: ["[[fall]]", "[[autumn]]", "[[spring]]", "[[winter]]"], bonne: 1, explication: "En Grande-Bretagne, on dit **[[autumn]]**. « [[Fall]] » est le mot américain." },
          ],
        },
        {
          titre: "Dire la date avec les ordinaux",
          blocs: [
            { t: "definition", terme: "Nombre ordinal", md: "Un nombre qui indique un rang : premier, deuxième, troisième… En anglais, on l'utilise pour **toutes** les dates, alors qu'en français on dit « le 5 mai » avec un nombre ordinaire." },
            { t: "tableau", titre: "Les ordinaux", entetes: ["Chiffre", "En lettres", "Astuce"], lignes: [["[[1st]]", "[[first]]", "irrégulier : st"], ["[[2nd]]", "[[second]]", "irrégulier : nd"], ["[[3rd]]", "[[third]]", "irrégulier : rd"], ["[[4th, 5th, 6th]]", "[[fourth, fifth, sixth]]", "th ; [[five → fifth]]"], ["[[12th]]", "[[twelfth]]", "[[twelve → twelfth]]"], ["[[20th]]", "[[twentieth]]", "[[-ty → -tieth]]"], ["[[21st, 22nd, 23rd]]", "[[twenty-first, twenty-second, twenty-third]]", "on suit le dernier chiffre"], ["[[30th, 31st]]", "[[thirtieth, thirty-first]]", ""]] },
            { t: "propriete", titre: "Écrire et lire une date", md: "On écrit **[[3rd March]]** ou **[[March 3rd]]**, et on lit **[[the third of March]]**.\n\n**[[What's the date today?]]** → **[[It's the 5th of May.]]**\n**[[When is your birthday?]]** → **[[It's on the 21st of June.]]** (devant une date précise, on met [[**on**]])" },
            { t: "exemple", md: "*A: [[When is your birthday?]]*\n*B: [[It's on the 14th of February, in winter.]]*\n→ Mon anniversaire est le 14 février, en hiver." },
          ],
        },
        {
          titre: "Quelle heure est-il ?",
          blocs: [
            { t: "texte", md: "On demande : **[[What time is it?]]** et on répond toujours par **[[It's…]]**. Pour les heures pile, on dit **[[o'clock]]** : *[[It's three o'clock.]]* Pour les autres, on imagine l'horloge coupée en deux : à droite, on compte les minutes **après** l'heure (**[[past]]**) ; à gauche, les minutes **avant** l'heure suivante (**[[to]]**)." },
            { t: "schema", titre: "L'horloge anglaise : [[past]] et [[to]]", legende: "On dit d'abord les minutes, puis [[past]] ou [[to]], puis l'heure.", svg: `<svg viewBox="0 0 400 240"><path class="aplat" d="M200 40 A80 80 0 0 1 200 200 Z"/><circle class="trait" cx="200" cy="120" r="80" fill="none"/><line class="pointille" x1="200" y1="40" x2="200" y2="200"/><circle cx="200" cy="120" r="3" fill="var(--encre)"/><text class="texte" x="200" y="62" text-anchor="middle">12</text><text class="texte" x="266" y="125" text-anchor="middle">3</text><text class="texte" x="200" y="192" text-anchor="middle">6</text><text class="texte" x="134" y="125" text-anchor="middle">9</text><text class="texte-main" x="240" y="100" text-anchor="middle">past</text><text class="texte-main" x="160" y="100" text-anchor="middle">to</text><text class="texte-pigment" x="200" y="28" text-anchor="middle">o'clock</text><text class="texte-pigment" x="200" y="222" text-anchor="middle">half past</text><text class="texte-pigment" x="290" y="125">quarter past</text><text class="texte-pigment" x="110" y="125" text-anchor="end">quarter to</text><path class="trait-fin" d="M215 58 A64 64 0 0 1 262 112" fill="none" marker-end="url(#fl)"/></svg>` },
            { t: "tableau", titre: "Dire l'heure", entetes: ["Heure", "En anglais"], lignes: [["9 h 00", "[[It's nine o'clock.]]"], ["9 h 10", "[[It's ten past nine.]]"], ["9 h 15", "[[It's quarter past nine.]]"], ["9 h 30", "[[It's half past nine.]]"], ["9 h 40", "[[It's twenty to ten.]]"], ["9 h 45", "[[It's quarter to ten.]]"]] },
            { t: "propriete", titre: "Matin ou après-midi ?", md: "On ne compte pas au-delà de 12. Pour préciser, on ajoute **[[a.m.]]** (le matin, de minuit à midi) ou **[[p.m.]]** (de midi à minuit), ou bien *[[in the morning]]*, *[[in the afternoon]]*. 15 h = **[[three p.m.]]** ou *[[three in the afternoon]]*. 16 h 40 = **[[twenty to five]]**." },
            { t: "attention", md: "Avec **[[to]]**, on annonce l'heure **suivante** : 4 h 45 = *[[quarter to five]]*, pas « [[quarter to four]] ». Et *[[half past four]]* = 4 h 30 : on garde l'heure qui vient de passer." },
            { t: "verifie", q: "Il est 4 h 30. Que dis-tu ?", choix: ["[[It's half to four.]]", "[[It's half past four.]]", "[[It's half past five.]]", "[[It's four and half.]]"], bonne: 1, explication: "Trente minutes après quatre heures : **[[It's half past four.]]**" },
          ],
        },
        {
          titre: "Les grandes fêtes du monde anglophone",
          blocs: [
            { t: "etapes", titre: "Une année de fêtes", cycle: true, items: [{ titre: "[[Pancake Day]]", md: "Février ou mars, le mardi gras : on mange des crêpes et on fait des courses en les faisant sauter." }, { titre: "[[Easter]]", md: "Mars ou avril : Pâques, avec les œufs en chocolat et la chasse aux œufs (*[[egg hunt]]*)." }, { titre: "[[Halloween]]", md: "31 octobre : déguisements effrayants, citrouilles et *[[trick or treat]]* (« un bonbon ou un sort »)." }, { titre: "[[Bonfire Night]]", md: "5 novembre, au Royaume-Uni : feux de joie et feux d'artifice." }, { titre: "[[Thanksgiving]]", md: "4e jeudi de novembre, aux États-Unis : grand repas en famille avec de la dinde." }, { titre: "[[Christmas]]", md: "25 décembre : Noël, les cadeaux et le *[[Christmas pudding]]*." }, { titre: "[[Boxing Day]]", md: "26 décembre : jour férié au Royaume-Uni, pour se reposer, voir la famille ou regarder du sport." }] },
            { t: "savais-tu", md: "**[[Bonfire Night]]** rappelle une histoire vraie : le 5 novembre **1605**, Guy Fawkes fut arrêté alors qu'il gardait des barils de poudre cachés sous le Parlement de Londres. Il voulait faire sauter le bâtiment et le roi Jacques Ier. Depuis, les Britanniques fêtent l'échec du complot." },
            { t: "attention", md: "**[[Thanksgiving]]** est une fête **américaine** (et canadienne, mais en octobre). Au Royaume-Uni, on ne la célèbre pas. Le jour typiquement britannique de fin d'année, c'est **[[Boxing Day]]**." },
            { t: "verifie", q: "Quelle fête a lieu le 31 octobre ?", choix: ["[[Bonfire Night]]", "[[Halloween]]", "[[Thanksgiving]]", "[[Boxing Day]]"], bonne: 1, explication: "**[[Halloween]]** a lieu le 31 octobre. [[Bonfire Night]] suit cinq jours plus tard, le 5 novembre." },
          ],
        },
      ],
      bilan: "Une date se lit avec un ordinal (the fifth of May), une heure se lit avec past ou to, et le calendrier anglophone se rythme de fêtes, de Pancake Day à Boxing Day.",
    },

    "6e-anglais-06-present-simple": {
      accroche: "À Cardiff, le réveil de Noah sonne à 7 heures, tous les matins. Il se lève, prend son petit-déjeuner, se brosse les dents et attrape le bus de 8 heures. Les mêmes gestes, chaque jour. Pour raconter ces habitudes, l'anglais a un temps spécial : le present simple.",
      objectifs: [
        "Raconter ta journée avec les verbes de la routine",
        "Conjuguer le present simple, sans oublier le -s de he, she, it",
        "Former la négation et les questions avec do et does",
        "Placer correctement les adverbes de fréquence",
      ],
      sections: [
        {
          titre: "Les verbes de ma routine",
          blocs: [
            { t: "etapes", titre: "[[My day]] (ma journée)", items: [{ titre: "[[get up]]", md: "se lever : *[[I get up at seven.]]*" }, { titre: "[[have breakfast]]", md: "prendre le petit-déjeuner, puis **[[brush my teeth]]** (me brosser les dents) et **[[get dressed]]** (m'habiller)." }, { titre: "[[go to school]]", md: "aller à l'école : *[[I go to school by bus.]]*" }, { titre: "[[have lunch]]", md: "déjeuner, à la cantine ou avec un *[[packed lunch]]*." }, { titre: "[[do my homework]]", md: "faire mes devoirs, après l'école." }, { titre: "[[watch TV / have dinner]]", md: "regarder la télé, puis dîner." }, { titre: "[[go to bed]]", md: "aller me coucher : *[[I go to bed at nine.]]*" }] },
            { t: "astuce", md: "Retiens le verbe **[[have]]** devant les repas : *[[have breakfast, have lunch, have dinner]]*. On ne dit pas « [[take breakfast]] »." },
          ],
        },
        {
          titre: "Le [[present simple]] et le -s de la 3e personne",
          blocs: [
            { t: "definition", terme: "[[Present simple]]", md: "Temps qui exprime les **habitudes**, ce qui se répète, et les **vérités générales** : *[[I get up at seven. Cats like milk.]]* À toutes les personnes, on utilise la base verbale… sauf à une." },
            { t: "tableau", titre: "Le verbe [[play]] au [[present simple]]", entetes: ["Personne", "Verbe", "En français"], lignes: [["[[I / you]]", "[[play]]", "je joue / tu joues"], ["[[**he / she / it**]]", "[[**plays**]]", "il / elle joue"], ["[[we / you / they]]", "[[play]]", "nous jouons / vous jouez / ils jouent"]] },
            { t: "tableau", titre: "L'orthographe du -s", entetes: ["Le verbe finit par…", "On ajoute", "Exemples"], lignes: [["cas général", "-s", "[[get → gets, play → plays]]"], ["-o, -ch, -sh, -ss, -x", "-es", "[[go → goes, watch → watches, brush → brushes]]"], ["consonne + y", "-ies", "[[study → studies]]"], ["[[have]]", "irrégulier", "[[have → **has**]]"]] },
            { t: "attention", md: "Le -s n'existe **qu'avec [[he, she, it]]** (ou un nom qu'on peut remplacer par eux : *Tom*, *[[my mum]]*, *[[the dog]]*). ✘ *[[They goes to school.]]* ✔ **[[They go to school.]]** ✔ **[[Tom goes to school.]]**" },
            { t: "astuce", md: "Une formule à se répéter : **« [[He, she, it]] : le S est de la partie ! »**" },
          ],
        },
        {
          titre: "Négation et questions avec [[do]] et [[does]]",
          blocs: [
            { t: "propriete", titre: "L'auxiliaire [[do]]", md: "Pour la négation et les questions, on ajoute **[[do]]** (ou **[[does]]** avec [[he, she, it]]). C'est alors l'auxiliaire qui porte le -s : le verbe reprend sa **base verbale**.\n\n*[[She likes tea.]]* → *[[She **doesn't like** tea.]]* → *[[**Does** she **like** tea?]]*" },
            { t: "tableau", titre: "Les trois formes", entetes: ["", "[[I / you / we / they]]", "[[he / she / it]]"], lignes: [["Affirmative", "[[I like carrots.]]", "[[He likes carrots.]]"], ["Négative", "[[I **don't** like carrots.]]", "[[He **doesn't** like carrots.]]"], ["Question", "[[**Do** you like carrots?]]", "[[**Does** he like carrots?]]"], ["Réponse courte", "[[Yes, I do. / No, I don't.]]", "[[Yes, he does. / No, he doesn't.]]"]] },
            { t: "attention", md: "Pas de double -s ! ✘ *[[He doesn't likes.]]* ✘ *[[Does she plays?]]* Le -s est déjà dans **[[does]]** : ✔ *[[He doesn't like.]]* ✔ *[[Does she play?]]*" },
            { t: "verifie", q: "Quelle phrase est correcte ?", choix: ["[[Does your dad drives to work?]]", "[[Do your dad drive to work?]]", "[[Does your dad drive to work?]]", "[[Your dad does drives to work?]]"], bonne: 2, explication: "« [[Your dad]] » = [[he]], donc **[[does]]**, et le verbe reste à la base verbale : **[[Does your dad drive to work?]]**" },
          ],
        },
        {
          titre: "[[Always, never…]] : les adverbes de fréquence",
          blocs: [
            { t: "schema", titre: "Du jamais au toujours", legende: "Les adverbes de fréquence, du moins fréquent au plus fréquent.", svg: `<svg viewBox="0 0 400 190"><line class="trait" x1="25" y1="100" x2="385" y2="100" marker-end="url(#fl)"/><circle class="aplat-papier" cx="40" cy="100" r="7"/><circle class="trait-fin" cx="40" cy="100" r="7" fill="none"/><circle class="aplat" cx="125" cy="100" r="7"/><circle class="trait-fin" cx="125" cy="100" r="7" fill="none"/><circle class="aplat" cx="210" cy="100" r="7"/><circle class="trait-fin" cx="210" cy="100" r="7" fill="none"/><circle class="aplat-fort" cx="290" cy="100" r="7"/><circle class="aplat-fort" cx="360" cy="100" r="7"/><text class="texte" x="40" y="80" text-anchor="middle">never</text><text class="texte" x="125" y="80" text-anchor="middle">sometimes</text><text class="texte" x="210" y="80" text-anchor="middle">often</text><text class="texte" x="290" y="80" text-anchor="middle">usually</text><text class="texte" x="360" y="80" text-anchor="middle">always</text><text class="texte-petit" x="40" y="125" text-anchor="middle">jamais</text><text class="texte-petit" x="125" y="125" text-anchor="middle">parfois</text><text class="texte-petit" x="210" y="125" text-anchor="middle">souvent</text><text class="texte-petit" x="290" y="125" text-anchor="middle">d'habitude</text><text class="texte-petit" x="360" y="125" text-anchor="middle">toujours</text><text class="texte-pigment" x="40" y="45" text-anchor="middle">0 %</text><text class="texte-pigment" x="360" y="45" text-anchor="middle">100 %</text><text class="texte-main" x="200" y="170" text-anchor="middle">I always have breakfast.</text></svg>` },
            { t: "propriete", titre: "Où placer l'adverbe ?", md: "L'adverbe de fréquence se place **avant le verbe** : *[[I **always** have breakfast. She **never** watches TV.]]*\n\nMais il se place **après [[be]]** : *[[She is **never** late. They are **often** tired.]]*" },
            { t: "texte", md: "D'autres mots du temps se placent plutôt en fin de phrase : **[[every day]]** (tous les jours), **[[in the morning / afternoon / evening]]**, **[[at night]]**, **[[on Saturdays]]** (le samedi), **[[at the weekend]]** (le week-end)." },
            { t: "exemple", titre: "La journée de Lucy", md: "*[[Every day, Lucy gets up at half past six. She has breakfast, then she goes to school by bus. She doesn't like Maths but she loves Art. Does she play football? Yes, she does, on Saturdays.]]*" },
            { t: "verifie", q: "Choisis la phrase correcte.", choix: ["[[I have always breakfast.]]", "[[Always I have breakfast.]]", "[[I always have breakfast.]]", "[[I have breakfast always.]]"], bonne: 2, explication: "Avec un verbe ordinaire, l'adverbe se glisse juste **avant** lui : **[[I always have breakfast.]]**" },
          ],
        },
      ],
      bilan: "Le present simple raconte tes habitudes : la base verbale partout, un -s avec he, she, it, et l'auxiliaire do ou does pour nier ou questionner.",
    },

    "6e-anglais-07-can-gouts": {
      accroche: "Samedi matin, à Brighton. Ella file au club de natation, son frère Sam joue au cricket dans le parc, et leur père… fait du yoga dans le salon ! Chacun ses talents, chacun ses goûts. Pour en parler en anglais, quatre mots suffisent : can, like, love et hate.",
      objectifs: [
        "Dire ce que tu sais faire ou ne pas faire avec can et can't",
        "Exprimer tes goûts avec like, love, hate suivis d'un verbe en -ing",
        "Nommer les sports et les loisirs avec play, do ou go",
      ],
      sections: [
        {
          titre: "[[Can]] : ce que je sais faire",
          blocs: [
            { t: "propriete", titre: "[[Can]], un verbe qui ne change jamais", md: "**[[Can]]** exprime la capacité, le fait de savoir faire quelque chose : *[[I can swim]]* (je sais nager). Il a la même forme à toutes les personnes et il est suivi de la **base verbale, sans [[to]]**." },
            { t: "tableau", titre: "[[Can]] à toutes les formes", entetes: ["Affirmative", "Négative", "Question", "Réponse courte"], lignes: [["[[I can swim.]]", "[[I **can't** (cannot) swim.]]", "[[**Can** you swim?]]", "[[Yes, I can. / No, I can't.]]"], ["[[He can swim.]]", "[[He can't swim.]]", "[[Can he swim?]]", "[[Yes, he can. / No, he can't.]]"], ["[[My cat can climb trees.]]", "[[Fish can't walk.]]", "[[Can they dance?]]", "[[Yes, they can.]]"]] },
            { t: "attention", md: "Deux erreurs très fréquentes : ✘ *[[She **cans** swim]]* et ✘ *[[She can **swims**]]*. [[Can]] ne prend jamais de -s, et le verbe qui suit non plus : ✔ **[[She can swim.]]** On ne met pas non plus *[[to]]* : ✘ *[[I can to swim.]]*" },
            { t: "texte", md: "**[[Can]]** sert aussi à demander la permission ou à faire une demande polie : *[[Can I open the window, please?]]* (Est-ce que je peux ouvrir la fenêtre ?) *[[Can you help me, please?]]*\n\nÀ l'oral, on entend bien la différence : **[[can]]** est court et faible (« k'n »), **[[can't]]** est long et appuyé (« kâânt »)." },
            { t: "verifie", q: "Complète : « [[My cat ___ climb trees.]] »", choix: ["[[cans]]", "[[can]]", "[[can to]]", "[[is can]]"], bonne: 1, explication: "[[Can]] est invariable : **[[My cat can climb trees.]]** Pas de -s, pas de [[to]]." },
          ],
        },
        {
          titre: "J'aime, j'adore, je déteste… + [[-ing]]",
          blocs: [
            { t: "schema", titre: "Du « je déteste » au « j'adore »", legende: "Après ces quatre verbes, l'action se met en [[-ing]] : [[I love swimming.]]", svg: `<svg viewBox="0 0 400 200"><circle class="aplat" cx="55" cy="72" r="28"/><circle class="trait" cx="55" cy="72" r="28" fill="none"/><circle cx="46" cy="66" r="2.5" fill="var(--encre)"/><circle cx="64" cy="66" r="2.5" fill="var(--encre)"/><line class="trait-fin" x1="40" y1="56" x2="50" y2="61"/><line class="trait-fin" x1="70" y1="56" x2="60" y2="61"/><path class="trait" d="M43 89 Q55 77 67 89" fill="none"/><circle class="aplat" cx="150" cy="72" r="28"/><circle class="trait" cx="150" cy="72" r="28" fill="none"/><circle cx="141" cy="66" r="2.5" fill="var(--encre)"/><circle cx="159" cy="66" r="2.5" fill="var(--encre)"/><path class="trait" d="M140 87 Q150 82 160 87" fill="none"/><circle class="aplat" cx="250" cy="72" r="28"/><circle class="trait" cx="250" cy="72" r="28" fill="none"/><circle cx="241" cy="66" r="2.5" fill="var(--encre)"/><circle cx="259" cy="66" r="2.5" fill="var(--encre)"/><path class="trait" d="M239 81 Q250 92 261 81" fill="none"/><circle class="aplat" cx="345" cy="72" r="28"/><circle class="trait" cx="345" cy="72" r="28" fill="none"/><circle cx="336" cy="66" r="2.5" fill="var(--encre)"/><circle cx="354" cy="66" r="2.5" fill="var(--encre)"/><path class="aplat-fort" d="M331 78 Q345 98 359 78 Z"/><text class="texte" x="55" y="125" text-anchor="middle">I hate</text><text class="texte" x="150" y="125" text-anchor="middle">I don't like</text><text class="texte" x="250" y="125" text-anchor="middle">I like</text><text class="texte" x="345" y="125" text-anchor="middle">I love</text><text class="texte-petit" x="55" y="142" text-anchor="middle">je déteste</text><text class="texte-petit" x="150" y="142" text-anchor="middle">je n'aime pas</text><text class="texte-petit" x="250" y="142" text-anchor="middle">j'aime</text><text class="texte-petit" x="345" y="142" text-anchor="middle">j'adore</text><line class="trait-fin" x1="30" y1="160" x2="372" y2="160" marker-end="url(#fl-p)"/><text class="texte-main" x="200" y="188" text-anchor="middle">+ verbe en -ing</text></svg>` },
            { t: "propriete", titre: "[[Like, love, hate]] + verbe en [[-ing]]", md: "Quand on aime ou déteste une **activité**, le verbe qui suit se met en **[[-ing]]** : *[[I like swimming. She loves dancing. We hate running.]]*\n\nPour une **chose**, on met simplement le nom : *[[I love football. I don't like spiders.]]*" },
            { t: "tableau", titre: "L'orthographe du [[-ing]]", entetes: ["Cas", "Règle", "Exemples"], lignes: [["cas général", "+ [[-ing]]", "[[play → playing, read → reading]]"], ["e muet final", "le e disparaît", "[[dance → dancing, ride → riding]]"], ["une voyelle + une consonne (syllabe courte)", "la consonne double", "[[swim → swimming, run → running]]"]] },
            { t: "verifie", q: "Complète : « [[I love ___ to music.]] »", choix: ["[[listen]]", "[[listens]]", "[[listening]]", "[[to listening]]"], bonne: 2, explication: "Après **[[love]]**, l'activité se met en [[-ing]] : **[[I love listening to music.]]**" },
          ],
        },
        {
          titre: "[[Play, do]] ou [[go]] ?",
          blocs: [
            { t: "texte", md: "En français, on « fait » presque tous les sports. En anglais, le verbe change selon le type d'activité. Il y a trois familles à connaître." },
            { t: "tableau", titre: "Trois verbes pour les sports", entetes: ["Verbe", "Pour…", "Exemples"], lignes: [["[[**play**]]", "les sports de balle et les jeux", "[[play football, play tennis, play cricket, play chess]]"], ["[[**do**]]", "les activités sans balle, souvent individuelles", "[[do judo, do gymnastics, do karate, do yoga]]"], ["[[**go**]]", "les activités en [[-ing]], où l'on se déplace", "[[go swimming, go skiing, go cycling, go riding]]"]] },
            { t: "exemple", titre: "Ella et sa famille", md: "*[[I love playing football and I can run very fast, but I can't swim. My sister hates football. She likes drawing and she does judo on Wednesdays.]]*" },
            { t: "savais-tu", md: "Le **[[cricket]]** est né en Angleterre. On le joue avec une **batte** plate et une balle dure, en lançant vers un **guichet** (*[[wicket]]*), trois petits piquets plantés dans le sol. Il est aussi très populaire en Inde, en Australie et en Afrique du Sud. Un match peut durer… cinq jours !" },
          ],
        },
        {
          titre: "Parler de ses loisirs",
          blocs: [
            { t: "tableau", titre: "[[Hobbies]]", entetes: ["En anglais", "En français"], lignes: [["[[reading]]", "la lecture"], ["[[drawing]]", "le dessin"], ["[[singing]]", "le chant"], ["[[listening to music]]", "écouter de la musique"], ["[[playing video games]]", "jouer aux jeux vidéo"], ["[[cooking]]", "faire la cuisine"], ["[[riding a bike]]", "faire du vélo"], ["[[playing the guitar / the piano]]", "jouer de la guitare / du piano"]] },
            { t: "liste", titre: "Les questions pour en parler", items: ["**[[What's your hobby?]]** / **[[What's your favourite hobby?]]** – Quel est ton loisir (préféré) ?", "**[[What do you like doing?]]** – Qu'est-ce que tu aimes faire ?", "[[**Do you like cooking?** – Yes, I do. / No, I don't. I hate cooking!]]", "[[**Can you play the piano?** – Yes, I can. / No, I can't.]]"] },
            { t: "astuce", md: "Pour un instrument, on dit **[[play the]]** + instrument : *[[play **the** guitar, play **the** piano]]*. Pour un sport, pas d'article : *[[play football]]*." },
            { t: "verifie", q: "Comment demandes-tu à quelqu'un ce qu'il aime faire ?", choix: ["[[What do you like doing?]]", "[[What are you like?]]", "[[What can you like?]]", "[[Do you like what?]]"], bonne: 0, explication: "**[[What do you like doing?]]** = Qu'est-ce que tu aimes faire ? « [[What are you like?]] » veut dire tout autre chose (comment es-tu ?)." },
          ],
        },
      ],
      bilan: "Can pour tes talents (invariable, sans to), like, love et hate suivis de -ing pour tes goûts, et play, do ou go selon le sport : tu as tout pour parler de tes week-ends.",
    },

    "6e-anglais-08-maison": {
      accroche: "Lily vient d'emménager à York dans une *terraced house*, une maison de briques rouges collée à ses voisines, comme il y en a des milliers en Angleterre. En appel vidéo, elle fait visiter sa chambre à sa cousine : « There's a big bed… and look, my cat is under the desk! »",
      objectifs: [
        "Nommer les pièces de la maison et les meubles",
        "Décrire un lieu avec there is, there are, some et any",
        "Situer un objet avec les prépositions de lieu",
      ],
      sections: [
        {
          titre: "Les pièces de la maison",
          blocs: [
            { t: "schema", titre: "[[My house]]", legende: "Une maison en coupe : le grenier, l'étage ([[upstairs]]), le rez-de-chaussée ([[downstairs]]) et la cave.", svg: `<svg viewBox="0 0 400 300"><path class="aplat-papier" d="M80 110 L205 30 L330 110 Z"/><path class="trait" d="M80 110 L205 30 L330 110 Z" fill="none"/><text class="texte" x="205" y="92" text-anchor="middle">attic</text><rect class="aplat" x="80" y="110" width="250" height="70"/><rect class="trait" x="80" y="110" width="250" height="70" fill="none"/><line class="trait" x1="205" y1="110" x2="205" y2="180"/><text class="texte" x="142" y="150" text-anchor="middle">bedroom</text><text class="texte" x="268" y="150" text-anchor="middle">bathroom</text><rect class="aplat-papier" x="80" y="180" width="250" height="70"/><rect class="trait" x="80" y="180" width="250" height="70" fill="none"/><line class="trait" x1="220" y1="180" x2="220" y2="250"/><text class="texte" x="150" y="220" text-anchor="middle">kitchen</text><text class="texte" x="275" y="220" text-anchor="middle">living room</text><line class="trait-fin" x1="10" y1="250" x2="390" y2="250"/><rect class="pointille" x="130" y="250" width="150" height="36" fill="none"/><text class="texte" x="205" y="273" text-anchor="middle">cellar</text><circle class="aplat" cx="365" cy="200" r="15"/><circle class="trait-fin" cx="365" cy="200" r="15" fill="none"/><line class="trait" x1="365" y1="215" x2="365" y2="250"/><text class="texte-petit" x="365" y="175" text-anchor="middle">garden</text><text class="texte-main" x="72" y="150" text-anchor="end">upstairs</text><text class="texte-main" x="72" y="220" text-anchor="end">down-</text><text class="texte-main" x="72" y="238" text-anchor="end">stairs</text></svg>` },
            { t: "tableau", titre: "[[Rooms]]", entetes: ["En anglais", "En français"], lignes: [["[[the kitchen]]", "la cuisine"], ["[[the living room]]", "le salon"], ["[[the dining room]]", "la salle à manger"], ["[[the bedroom]]", "la chambre"], ["[[the bathroom / the toilet]]", "la salle de bains / les toilettes"], ["[[the hall]]", "l'entrée"], ["[[the garage / the garden]]", "le garage / le jardin"], ["[[the attic / the cellar]]", "le grenier / la cave"]] },
            { t: "texte", md: "Pour situer une pièce, on dit **[[upstairs]]** (à l'étage, en haut) ou **[[downstairs]]** (au rez-de-chaussée, en bas) : *[[My bedroom is upstairs. The kitchen is downstairs.]]*" },
            { t: "verifie", q: "Dans quelle pièce trouve-t-on normalement « [[a cooker]] » et « [[a fridge]] » ?", choix: ["[[the bathroom]]", "[[the bedroom]]", "[[the kitchen]]", "[[the attic]]"], bonne: 2, explication: "Une cuisinière ([[cooker]]) et un réfrigérateur ([[fridge]]) se trouvent dans **[[the kitchen]]**." },
          ],
        },
        {
          titre: "Les meubles",
          blocs: [
            { t: "tableau", titre: "[[Furniture]]", entetes: ["En anglais", "En français", "Où ?"], lignes: [["[[a bed / a wardrobe]]", "un lit / une armoire", "[[bedroom]]"], ["[[a desk / a chair / a lamp]]", "un bureau / une chaise / une lampe", "[[bedroom]]"], ["[[a sofa / an armchair]]", "un canapé / un fauteuil", "[[living room]]"], ["[[a carpet / curtains]]", "un tapis / des rideaux", "[[living room]]"], ["[[a table]]", "une table", "[[dining room]]"], ["[[a fridge / a cooker]]", "un réfrigérateur / une cuisinière", "[[kitchen]]"], ["[[a cupboard / a shelf (shelves)]]", "un placard / une étagère (des étagères)", "[[kitchen]]"]] },
            { t: "attention", md: "**[[A cooker]]** est un appareil (la cuisinière), pas une personne ! Le cuisinier se dit *[[a cook]]*. Et retiens le pluriel irrégulier **[[a shelf → shelves]]** (le f devient ves)." },
          ],
        },
        {
          titre: "[[There is, there are]] : il y a",
          blocs: [
            { t: "propriete", titre: "[[There is / there are]]", md: "**[[There is]]** (*[[there's]]*) s'emploie avec un nom **singulier** : *[[There is a cat on the sofa.]]*\n**[[There are]]** s'emploie avec un nom **pluriel** : *[[There are two beds.]]*\n\nEn français, on dit « il y a » dans les deux cas : en anglais, regarde bien ce qui suit." },
            { t: "tableau", titre: "Les trois formes", entetes: ["", "Singulier", "Pluriel"], lignes: [["Affirmative", "[[There is a garden.]]", "[[There are three chairs.]]"], ["Négative", "[[There isn't a TV.]]", "[[There aren't any posters.]]"], ["Question", "[[Is there a garden?]]", "[[Are there any pictures?]]"], ["Réponse courte", "[[Yes, there is. / No, there isn't.]]", "[[Yes, there are. / No, there aren't.]]"]] },
            { t: "verifie", q: "Complète : « [[___ three chairs in the kitchen.]] »", choix: ["[[There is]]", "[[There are]]", "[[It is]]", "[[There have]]"], bonne: 1, explication: "« [[Three chairs]] » est un pluriel : **[[There are]]** [[three chairs]]." },
          ],
        },
        {
          titre: "[[Some]] et [[any]]",
          blocs: [
            { t: "propriete", titre: "[[Some]] ou [[any]] ?", md: "**[[Some]]** (des, quelques) s'utilise dans les phrases **affirmatives** : *[[There are **some** books on the shelf.]]*\n**[[Any]]** s'utilise dans les **questions** et les **négations** : *[[Are there **any** books? There aren't **any** magazines.]]*" },
            { t: "exemple", titre: "La chambre de Lily", md: "*[[My bedroom is upstairs. There is a bed next to the window and there are **some** posters on the wall. There isn't a TV, but there is a desk with a lamp on it. Are there **any** plants? No, there aren't.]]*" },
          ],
        },
        {
          titre: "Où est le chat ? Les prépositions de lieu",
          blocs: [
            { t: "schema", titre: "Autour de la boîte", legende: "Les prépositions de lieu autour d'une boîte. [[Opposite]] (en face de) se dit quand deux choses se font face, de chaque côté d'une rue ou d'une pièce.", svg: `<svg viewBox="0 0 400 240"><circle class="aplat-fort" cx="252" cy="88" r="11"/><path class="aplat-papier" d="M170 110 L190 92 L260 92 L240 110 Z"/><path class="trait" d="M170 110 L190 92 L260 92 L240 110 Z" fill="none"/><path class="aplat" d="M240 110 L260 92 L260 152 L240 170 Z"/><path class="trait" d="M240 110 L260 92 L260 152 L240 170 Z" fill="none"/><rect class="aplat-papier" x="170" y="110" width="70" height="60"/><rect class="trait" x="170" y="110" width="70" height="60" fill="none"/><circle class="aplat-fort" cx="212" cy="92" r="9"/><circle class="pointille" cx="205" cy="140" r="9" fill="none"/><circle class="aplat-fort" cx="180" cy="172" r="11"/><circle class="aplat-fort" cx="205" cy="192" r="9"/><circle class="aplat-fort" cx="288" cy="160" r="9"/><text class="texte-pigment" x="212" y="72" text-anchor="middle">on</text><text class="texte-pigment" x="222" y="144">in</text><text class="texte-pigment" x="272" y="78">behind</text><text class="texte-pigment" x="166" y="196" text-anchor="end">in front of</text><text class="texte-pigment" x="205" y="220" text-anchor="middle">under</text><text class="texte-pigment" x="288" y="188" text-anchor="middle">next to</text><rect class="aplat-papier" x="24" y="112" width="30" height="30"/><rect class="trait" x="24" y="112" width="30" height="30" fill="none"/><rect class="aplat-papier" x="96" y="112" width="30" height="30"/><rect class="trait" x="96" y="112" width="30" height="30" fill="none"/><circle class="aplat-fort" cx="75" cy="127" r="9"/><text class="texte-pigment" x="75" y="165" text-anchor="middle">between</text></svg>` },
            { t: "tableau", titre: "[[Prepositions of place]]", entetes: ["Préposition", "En français", "Exemple"], lignes: [["[[in]]", "dans", "[[The books are in the box.]]"], ["[[on]]", "sur", "[[The lamp is on the desk.]]"], ["[[under]]", "sous", "[[The cat is under the table.]]"], ["[[next to]]", "à côté de", "[[The dog is next to the door.]]"], ["[[behind]]", "derrière", "[[The schoolbag is behind the chair.]]"], ["[[in front of]]", "devant", "[[The car is in front of the house.]]"], ["[[between]]", "entre", "[[The sofa is between the lamps.]]"], ["[[opposite]]", "en face de", "[[The school is opposite the park.]]"]] },
            { t: "texte", md: "Pour demander où se trouve quelque chose : **[[Where is the cat?]]** → **[[It's under the table.]]** Au pluriel : **[[Where are my shoes?]]** → **[[They're behind the door.]]**" },
            { t: "verifie", q: "Le chat est sous la table. Complète : « [[The cat is ___ the table.]] »", choix: ["[[on]]", "[[in]]", "[[under]]", "[[behind]]"], bonne: 2, explication: "Sous = **[[under]]**. [[On]] = sur, [[in]] = dans, [[behind]] = derrière." },
          ],
        },
      ],
      bilan: "There is pour un objet, there are pour plusieurs, some quand on affirme, any quand on demande ou qu'on nie, et une préposition pour tout situer : tu sais faire visiter ta maison en anglais.",
    },

    "6e-anglais-09-present-continuous": {
      accroche: "Un mardi de pluie, la mère de Ben l'appelle depuis la cuisine : « Ben, what are you doing? » Depuis sa chambre, Ben répond : « I'm doing my homework! »… tout en jouant discrètement à un jeu vidéo. Ce temps sert à dire ce qui se passe en ce moment même.",
      objectifs: [
        "Former le present continuous avec be + verbe en -ing",
        "Décrire une action en cours et demander What are you doing?",
        "Choisir entre present simple (habitude) et present continuous (maintenant)",
      ],
      sections: [
        {
          titre: "Une action en train de se faire",
          blocs: [
            { t: "definition", terme: "[[Present continuous]]", md: "Temps qui décrit une action **en train de se faire**, au moment où l'on parle. *[[I am reading]]* = je suis en train de lire, je lis en ce moment." },
            { t: "propriete", titre: "La formation", md: "**[[be]]** ([[am / is / are]]) + **verbe en [[-ing]]**.\n\n*[[She **is** sleep**ing**. They **are** play**ing**.]]* Les deux morceaux sont **obligatoires** : l'un sans l'autre ne fait pas une phrase." },
            { t: "tableau", titre: "Le verbe [[read]] au [[present continuous]]", entetes: ["Affirmative", "Négative", "Question"], lignes: [["[[I'm reading.]]", "[[I'm not reading.]]", "[[Am I reading?]]"], ["[[You're reading.]]", "[[You aren't reading.]]", "[[Are you reading?]]"], ["[[He / She / It's reading.]]", "[[He isn't reading.]]", "[[Is she reading?]]"], ["[[We / They're reading.]]", "[[We aren't reading.]]", "[[Are they reading?]]"]] },
            { t: "attention", md: "✘ *[[I reading.]]* (il manque [[be]]) ✘ *[[I am read.]]* (il manque [[-ing]]) ✔ **[[I am reading.]]** Vérifie toujours que tu as bien les deux pièces du puzzle." },
            { t: "verifie", q: "Complète : « [[Look! The baby ___ .]] »", choix: ["[[sleep]]", "[[sleeping]]", "[[is sleeping]]", "[[sleeps now]]"], bonne: 2, explication: "« [[Look!]] » montre une action en cours : [[be]] + [[-ing]] → **[[The baby is sleeping.]]**" },
          ],
        },
        {
          titre: "Questions et réponses courtes",
          blocs: [
            { t: "texte", md: "Pour poser une question, on **inverse** [[be]] et le sujet, comme au chapitre sur [[be]] : *[[You are listening.]]* → **[[Are you listening?]]** La question la plus utile : **[[What are you doing?]]** (Qu'est-ce que tu fais ?)" },
            { t: "tableau", titre: "Questions et réponses", entetes: ["Question", "Réponse courte ou complète"], lignes: [["[[What are you doing?]]", "[[I'm watching TV.]]"], ["[[Is your brother doing his homework?]]", "[[Yes, he is. / No, he isn't.]]"], ["[[Are they playing football?]]", "[[Yes, they are. / No, they aren't.]]"], ["[[Where are you going?]]", "[[I'm going to the park.]]"]] },
            { t: "exemple", titre: "Au parc", md: "*[[Look! The children are playing in the garden. Tom is riding his bike and Lily is reading a book. Their dog isn't sleeping, it's running after a ball.]]*" },
            { t: "verifie", q: "On te demande « [[Is your brother doing his homework?]] ». Quelle réponse est correcte ?", choix: ["[[Yes, he does.]]", "[[Yes, he is.]]", "[[Yes, he doing.]]", "[[Yes, he's.]]"], bonne: 1, explication: "La question commence par **[[is]]** : on reprend [[is]] dans la réponse → **[[Yes, he is.]]** Pas de contraction dans une réponse courte affirmative." },
          ],
        },
        {
          titre: "L'orthographe du [[-ing]]",
          blocs: [
            { t: "tableau", titre: "Trois règles", entetes: ["Cas", "Règle", "Exemples"], lignes: [["cas général", "on ajoute [[-ing]]", "[[play → playing, read → reading, eat → eating]]"], ["e muet final", "le e disparaît", "[[write → writing, come → coming, dance → dancing]]"], ["voyelle courte + consonne", "la consonne double", "[[run → running, swim → swimming, sit → sitting]]"]] },
            { t: "astuce", md: "Lis le verbe à voix haute : si tu entends une **voyelle courte** suivie d'une seule consonne (*[[run, sit, swim, get]]*), double la consonne. *[[Read]]* ou *[[eat]]*, avec deux voyelles, ne doublent pas." },
          ],
        },
        {
          titre: "Habitude ou action en cours ?",
          blocs: [
            { t: "schema", titre: "[[Present simple]] ou [[present continuous]] ?", legende: "En haut, une action qui se répète. En bas, une action qui se passe en ce moment.", svg: `<svg viewBox="0 0 400 220"><text class="texte" x="20" y="30">present simple : I walk to school every day.</text><line class="trait-fin" x1="20" y1="60" x2="380" y2="60" marker-end="url(#fl)"/><circle class="aplat-fort" cx="50" cy="60" r="6"/><circle class="aplat-fort" cx="100" cy="60" r="6"/><circle class="aplat-fort" cx="150" cy="60" r="6"/><circle class="aplat-fort" cx="200" cy="60" r="6"/><circle class="aplat-fort" cx="250" cy="60" r="6"/><circle class="aplat-fort" cx="300" cy="60" r="6"/><circle class="aplat-fort" cx="350" cy="60" r="6"/><text class="texte-petit" x="200" y="85" text-anchor="middle">une habitude, chaque jour</text><text class="texte" x="20" y="130">present continuous : Today I'm taking the bus.</text><line class="trait-fin" x1="20" y1="165" x2="380" y2="165" marker-end="url(#fl)"/><path class="aplat" d="M160 150 H240 V180 H160 Z"/><path class="trait" d="M160 150 H240 V180 H160 Z" fill="none"/><line class="trait" x1="200" y1="145" x2="200" y2="185"/><text class="texte-main" x="200" y="205" text-anchor="middle">now</text></svg>` },
            { t: "tableau", titre: "Les mots indices", entetes: ["[[Present simple]] (habitude)", "[[Present continuous]] (maintenant)"], lignes: [["[[every day, every week]]", "[[now, right now]]"], ["[[always, usually, often, never]]", "[[at the moment]]"], ["[[on Mondays, at the weekend]]", "[[Look! Listen!]]"], ["[[I play football every Saturday.]]", "[[Look! I'm playing football.]]"]] },
            { t: "exemple", titre: "Les deux temps dans une phrase", md: "*[[Lucy usually **walks** to school, but today she **is taking** the bus because it's raining.]]*\n→ D'habitude, Lucy va à l'école à pied (habitude), mais aujourd'hui elle prend le bus (en ce moment)." },
            { t: "attention", md: "Pour une habitude, n'utilise pas le [[present continuous]] : ✘ *[[I am going to school every day.]]* ✔ **[[I go to school every day.]]** Le mot *[[every day]]* doit te mettre la puce à l'oreille." },
            { t: "verifie", q: "Choisis la bonne phrase : « [[Every Saturday, I ___ football.]] »", choix: ["[[am playing]]", "[[play]]", "[[playing]]", "[[plays]]"], bonne: 1, explication: "« [[Every Saturday]] » indique une habitude : [[present simple]] → **[[I play football.]]**" },
          ],
        },
      ],
      bilan: "Be + -ing pour ce qui se passe maintenant, le present simple pour ce qui se répète : les mots indices (now, Look!, every day, usually) te disent quel temps choisir.",
    },

    "6e-anglais-10-nourriture-vetements-description": {
      accroche: "À la cantine d'un collège de Newcastle, Zoe regarde son plateau : fish and chips, petits pois et un biscuit au chocolat. Elle porte le jumper bleu marine de son uniforme. Son ami Alex, grand, cheveux bouclés, lui demande : « Do you like fish? » — « I love it! »",
      objectifs: [
        "Nommer les repas et les aliments, et dire ce que tu aimes manger",
        "Nommer les vêtements et les couleurs, et dire ce que tu portes",
        "Décrire physiquement une personne",
      ],
      sections: [
        {
          titre: "Les repas et les aliments",
          blocs: [
            { t: "texte", md: "Une journée britannique compte trois repas : **[[breakfast]]** (le petit-déjeuner), **[[lunch]]** (le déjeuner, à midi) et **[[dinner]]** (le dîner), que beaucoup de familles du nord de l'Angleterre appellent aussi **[[tea]]**. Entre les deux, on grignote **[[a snack]]**.\n\nLe célèbre *[[full English breakfast]]* réunit **[[eggs]]** (œufs), **[[bacon]]**, saucisses, haricots à la tomate et **[[toast]]**, avec **[[tea]]** ou **[[orange juice]]**. En semaine, la plupart des enfants prennent plutôt des **[[cereal]]** (céréales)." },
            { t: "tableau", titre: "[[Food]]", entetes: ["En anglais", "En français"], lignes: [["[[bread / cheese]]", "le pain / le fromage"], ["[[meat / chicken / fish]]", "la viande / le poulet / le poisson"], ["[[rice / pasta]]", "le riz / les pâtes"], ["[[vegetables / carrots / potatoes]]", "les légumes / les carottes / les pommes de terre"], ["[[fruit / apples / bananas / strawberries]]", "les fruits / les pommes / les bananes / les fraises"], ["[[chips / crisps]]", "les frites / les chips"], ["[[sweets / cake / biscuits]]", "les bonbons / le gâteau / les biscuits"]] },
            { t: "attention", md: "Le piège du goûter : au Royaume-Uni, **[[chips]]** = des **frites** (*[[fish and chips]]*) et **[[crisps]]** = des **chips** en sachet. Aux États-Unis, c'est encore différent : les frites sont des *[[fries]]* !" },
            { t: "propriete", titre: "Parler de ses goûts alimentaires", md: "Pour un goût général, le nom s'emploie **sans article** : *[[I like chocolate. I love strawberries. I don't like fish.]]* (« [[the chocolate]] » désignerait un chocolat précis.) Question : **[[Do you like cheese?]]** → *[[Yes, I do. / No, I don't.]]*" },
            { t: "verifie", q: "Comment s'appelle le repas du midi ?", choix: ["[[breakfast]]", "[[lunch]]", "[[dinner]]", "[[snack]]"], bonne: 1, explication: "Le repas de midi est **[[lunch]]**. [[Breakfast]] est le matin, [[dinner]] le soir." },
          ],
        },
        {
          titre: "Les vêtements et les couleurs",
          blocs: [
            { t: "schema", titre: "[[What is he wearing?]]", legende: "Les vêtements de la tête aux pieds.", svg: `<svg viewBox="0 0 400 250"><circle class="aplat-papier" cx="200" cy="48" r="16"/><circle class="trait" cx="200" cy="48" r="16" fill="none"/><path class="aplat-fort" d="M180 34 Q200 14 220 34 L232 36 L180 36 Z"/><path class="aplat" d="M184 66 H216 L220 76 H180 Z"/><path class="aplat" d="M172 76 H228 L240 140 H226 L222 100 V145 H178 V100 L174 140 H160 Z"/><path class="trait" d="M172 76 H228 L240 140 H226 L222 100 V145 H178 V100 L174 140 H160 Z" fill="none"/><path class="aplat-papier" d="M178 145 H222 L220 215 H203 L200 165 L197 215 H180 Z"/><path class="trait" d="M178 145 H222 L220 215 H203 L200 165 L197 215 H180 Z" fill="none"/><ellipse class="aplat-fort" cx="185" cy="222" rx="14" ry="7"/><ellipse class="aplat-fort" cx="215" cy="222" rx="14" ry="7"/><line class="trait-fin" x1="120" y1="30" x2="180" y2="30"/><text class="texte" x="115" y="34" text-anchor="end">a cap</text><line class="trait-fin" x1="222" y1="71" x2="290" y2="71"/><text class="texte" x="295" y="75">a scarf</text><line class="trait-fin" x1="120" y1="105" x2="174" y2="105"/><text class="texte" x="115" y="109" text-anchor="end">a jumper</text><line class="trait-fin" x1="221" y1="180" x2="290" y2="180"/><text class="texte" x="295" y="184">trousers</text><line class="trait-fin" x1="120" y1="222" x2="171" y2="222"/><text class="texte" x="115" y="226" text-anchor="end">trainers</text></svg>` },
            { t: "tableau", titre: "[[Clothes]]", entetes: ["En anglais", "En français"], lignes: [["[[a T-shirt / a shirt]]", "un tee-shirt / une chemise"], ["[[a jumper]]", "un pull"], ["[[a jacket / a coat]]", "une veste / un manteau"], ["[[a dress / a skirt]]", "une robe / une jupe"], ["[[trousers / jeans / shorts]]", "un pantalon / un jean / un short"], ["[[shoes / trainers / socks]]", "des chaussures / des baskets / des chaussettes"], ["[[a hat / a cap / a scarf]]", "un chapeau / une casquette / une écharpe"]] },
            { t: "propriete", titre: "La place de l'adjectif", md: "En anglais, l'adjectif (couleur, taille…) se place **avant** le nom et ne prend **jamais** de -s : *[[a **red** dress]]* (une robe rouge), *[[**blue** trousers]]*, *[[**black** shoes]]*.\n\nLes couleurs : **[[red, blue, green, yellow, orange, pink, purple, brown, black, white, grey]]** (orthographe britannique ; *[[gray]]* aux États-Unis)." },
            { t: "attention", md: "**[[Trousers]]**, **[[jeans]]** et **[[shorts]]** sont toujours au **pluriel** : *[[My jeans **are** blue.]]* Pour dire ce qu'on porte, on utilise **[[wear]]** au [[present continuous]] : *[[Today she **is wearing** a yellow T-shirt and blue jeans.]]* — **[[What are you wearing?]]** (Qu'est-ce que tu portes ?)" },
            { t: "verifie", q: "Comment dit-on « une robe rouge » ?", choix: ["[[a dress red]]", "[[a red dress]]", "[[a reds dress]]", "[[a robe red]]"], bonne: 1, explication: "L'adjectif se place avant le nom : **[[a red dress]]**. « [[Robe]] » est un faux ami : il désigne un peignoir." },
          ],
        },
        {
          titre: "Décrire quelqu'un : [[What does he look like?]]",
          blocs: [
            { t: "texte", md: "Pour demander à quoi ressemble une personne, on dit **[[What does she look like?]]** (À quoi ressemble-t-elle ?). On répond avec **[[be]]** pour la silhouette et **[[have got]]** pour les cheveux, les yeux, la barbe (*[[a beard]]*), les lunettes (*[[glasses]]*)." },
            { t: "tableau", titre: "Adjectifs et contraires", entetes: ["Adjectif", "Contraire", "En français"], lignes: [["[[tall]]", "[[short]]", "grand / petit"], ["[[slim]]", "[[fat]]", "mince / gros"], ["[[long (hair)]]", "[[short (hair)]]", "longs / courts"], ["[[curly]]", "[[straight]]", "bouclés / raides"], ["[[young]]", "[[old]]", "jeune / vieux"], ["[[dark (hair)]]", "[[fair / blond (hair)]]", "bruns / blonds"]] },
            { t: "propriete", titre: "L'ordre des mots", md: "Pour les cheveux, on donne **la longueur, puis la couleur** : *[[She has got **long brown** hair.]]* *[[He has got **short blond** hair.]]*\n\n**[[Hair]]** est **singulier** en anglais : *[[Her hair **is** long.]]* (jamais « [[hairs]] », qui désignerait quelques poils !)" },
            { t: "exemple", titre: "Portrait d'Alex", md: "*[[This is my friend Alex. He's tall and slim. He has got short curly hair and brown eyes. Today he's wearing a green T-shirt, black jeans and white trainers. He loves pizza but he hates vegetables.]]*" },
            { t: "verifie", q: "Quelle phrase est correcte ?", choix: ["[[She has got brown long hairs.]]", "[[She has got long brown hair.]]", "[[She is long brown hair.]]", "[[She has got hair long brown.]]"], bonne: 1, explication: "On met la longueur puis la couleur, et [[hair]] reste au singulier : **[[She has got long brown hair.]]**" },
          ],
        },
      ],
      bilan: "Le nom sans article pour tes goûts (I love chips), l'adjectif toujours avant le nom (a red dress), be pour la silhouette et have got pour les cheveux et les yeux : tu peux faire le portrait de n'importe qui.",
    },

    "6e-anglais-11-monde-anglophone": {
      accroche: "Dans un camp d'été à Édimbourg, Aiden vient de Dublin, Chloe de Toronto, Jack de Sydney et Amara du Cap. Tous parlent anglais… avec des accents bien différents ! Où se trouvent leurs pays, et comment dit-on « je suis irlandais » ?",
      objectifs: [
        "Situer les grands pays anglophones, leurs capitales et leurs monuments",
        "Distinguer le Royaume-Uni, la Grande-Bretagne et l'Irlande",
        "Employer les noms de pays et les adjectifs de nationalité",
        "Poser des questions avec what, where, when, who, how",
      ],
      sections: [
        {
          titre: "Un monde qui parle anglais",
          blocs: [
            { t: "texte", md: "L'anglais est né en Angleterre, puis il a voyagé sur tous les continents avec les marins, les colons et les commerçants. Aujourd'hui, il est la langue officielle, ou l'une des langues officielles, de plus de cinquante pays." },
            { t: "carte", fond: "monde", titre: "Les grands pays anglophones et leurs capitales", zones: ["GB", "IE", "US", "CA", "AU", "NZ", "ZA"], reperes: [{ nom: "London", lat: 51.5074, lon: -0.1278 }, { nom: "Dublin", lat: 53.3498, lon: -6.2603 }, { nom: "Washington D.C.", lat: 38.9072, lon: -77.0369 }, { nom: "Ottawa", lat: 45.4215, lon: -75.6972 }, { nom: "Canberra", lat: -35.2809, lon: 149.13 }, { nom: "Wellington", lat: -41.2865, lon: 174.7762 }, { nom: "Pretoria", lat: -25.7479, lon: 28.2293 }], legende: "Les pays colorés ont l'anglais pour langue principale ou officielle." },
            { t: "tableau", titre: "Pays et capitales", entetes: ["Pays", "Capitale", "Piège"], lignes: [["[[the United Kingdom]]", "[[London]]", ""], ["[[Ireland]]", "[[Dublin]]", ""], ["[[the USA]]", "[[**Washington D.C.**]]", "pas New York !"], ["[[Canada]]", "[[**Ottawa**]]", "pas Toronto, ni Montréal"], ["[[Australia]]", "[[**Canberra**]]", "pas Sydney !"], ["[[New Zealand]]", "[[Wellington]]", "pas Auckland"]] },
            { t: "verifie", q: "Quelle est la capitale des États-Unis ?", choix: ["[[New York]]", "[[Washington D.C.]]", "[[Los Angeles]]", "[[Chicago]]"], bonne: 1, explication: "La capitale est **Washington D.C.**, où se trouve la Maison-Blanche. New York est la plus grande ville, mais pas la capitale." },
          ],
        },
        {
          titre: "Le Royaume-Uni et ses quatre nations",
          blocs: [
            { t: "definition", terme: "[[United Kingdom (UK)]]", md: "État qui regroupe **quatre nations** : **[[England]]**, **[[Scotland]]**, **[[Wales]]** et **[[Northern Ireland]]**. **[[Great Britain]]** désigne seulement la grande île : [[England, Scotland]] et [[Wales]]. Les habitants du Royaume-Uni sont les **[[British]]**." },
            { t: "carte", fond: "monde", titre: "Les îles Britanniques", cadre: [-11, 49.5, 3, 60], zones: ["GB", "IE"], reperes: [{ nom: "London", lat: 51.5074, lon: -0.1278 }, { nom: "Edinburgh", lat: 55.9533, lon: -3.1883 }, { nom: "Cardiff", lat: 51.4816, lon: -3.1791 }, { nom: "Belfast", lat: 54.5973, lon: -5.9301 }, { nom: "Dublin", lat: 53.3498, lon: -6.2603 }], legende: "Dublin est la capitale de la République d'Irlande, un pays indépendant qui ne fait pas partie du Royaume-Uni." },
            { t: "tableau", titre: "Les quatre nations", entetes: ["Nation", "Capitale", "Habitants"], lignes: [["[[England]]", "[[London]]", "[[English]]"], ["[[Scotland]]", "[[Edinburgh]]", "[[Scottish]]"], ["[[Wales]]", "[[Cardiff]]", "[[Welsh]]"], ["[[Northern Ireland]]", "[[Belfast]]", "[[Northern Irish]]"]] },
            { t: "savais-tu", md: "Le drapeau du Royaume-Uni, l'**[[Union Jack]]**, superpose trois croix : celle de saint Georges (Angleterre), de saint André (Écosse) et de saint Patrick (Irlande). Le pays de Galles, lui, n'y figure pas : son drapeau porte un dragon rouge !" },
            { t: "verifie", q: "Combien de nations composent le Royaume-Uni ([[UK]]) ?", choix: ["2", "3", "4", "5"], bonne: 2, explication: "**Quatre** : [[England, Scotland, Wales]] et [[Northern Ireland]]. [[Great Britain]], l'île, n'en compte que trois." },
          ],
        },
        {
          titre: "Monuments célèbres",
          blocs: [
            { t: "frise", titre: "Des monuments et leur date de naissance", evenements: [{ date: 1837, label: "Buckingham Palace", detail: "Londres : la reine Victoria s'y installe ; c'est aujourd'hui la résidence officielle du roi." }, { date: 1859, label: "Big Ben", detail: "Londres : la grande cloche de la tour de l'horloge sonne pour la première fois." }, { date: 1886, label: "Statue of Liberty", detail: "New York : cadeau de la France aux États-Unis." }, { date: 1894, label: "Tower Bridge", detail: "Londres : le pont s'ouvre en deux pour laisser passer les bateaux." }, { date: 1937, label: "Golden Gate Bridge", detail: "San Francisco : le célèbre pont rouge orangé." }, { date: 1973, label: "Sydney Opera House", detail: "Sydney : l'opéra aux toits en forme de voiles." }] },
            { t: "texte", md: "À Édimbourg, **[[Edinburgh Castle]]** domine la ville du haut d'un ancien volcan. Aux États-Unis, le drapeau s'appelle **[[the Stars and Stripes]]** : ses **50 étoiles** représentent les 50 États, et ses 13 bandes les 13 premières colonies." },
            { t: "savais-tu", md: "**[[Big Ben]]** n'est pas le nom de la tour, mais celui de sa grande cloche ! Depuis 2012, la tour s'appelle officiellement *[[Elizabeth Tower]]*." },
          ],
        },
        {
          titre: "Pays et nationalités",
          blocs: [
            { t: "tableau", titre: "[[Countries and nationalities]]", entetes: ["Pays", "Nationalité", "En français"], lignes: [["[[France]]", "[[French]]", "français(e)"], ["[[England / Scotland / Wales]]", "[[English / Scottish / Welsh]]", "anglais / écossais / gallois"], ["[[Ireland]]", "[[Irish]]", "irlandais(e)"], ["[[the USA]]", "[[American]]", "américain(e)"], ["[[Canada / Australia]]", "[[Canadian / Australian]]", "canadien / australien"], ["[[Spain / Germany / Italy]]", "[[Spanish / German / Italian]]", "espagnol / allemand / italien"]] },
            { t: "propriete", titre: "Majuscule obligatoire", md: "En anglais, les **nationalités** et les **langues** prennent toujours une majuscule : *[[I'm **F**rench. She speaks **E**nglish.]]* ✘ *[[I'm french.]]*" },
            { t: "exemple", md: "*[[Paddington Bear lives in London, so he speaks **English**. Pedro is from Spain: he is **Spanish**. Aiden is from Dublin: he is **Irish**.]]*" },
          ],
        },
        {
          titre: "Poser des questions : les mots en wh-",
          blocs: [
            { t: "tableau", titre: "Les mots interrogatifs", entetes: ["Mot", "Sens", "Exemple"], lignes: [["[[What]]", "quoi, quel", "[[What's your name?]]"], ["[[Where]]", "où", "[[Where do you live?]]"], ["[[When]]", "quand", "[[When is your birthday?]]"], ["[[Who]]", "qui", "[[Who is your teacher?]]"], ["[[Why]]", "pourquoi", "[[Why are you sad?]]"], ["[[Which]]", "lequel, laquelle", "[[Which colour do you like?]]"], ["[[How / How old / How many]]", "comment / quel âge / combien", "[[How do you go to school? How many pupils are there?]]"]] },
            { t: "propriete", titre: "L'ordre de la question", md: "**Mot interrogatif + auxiliaire ([[be, do, can…]]) + sujet + verbe.**\n\n*[[Where **do** you live?]]* → *[[In Manchester.]]*\n*[[Who **is** your English teacher?]]* → *[[Mrs Smith.]]*" },
            { t: "verifie", q: "Complète : « [[___ do you live?]] » → « [[In Manchester.]] »", choix: ["[[What]]", "[[Where]]", "[[When]]", "[[Who]]"], bonne: 1, explication: "La réponse est un lieu : la question commence par **[[Where]]** (où)." },
          ],
        },
      ],
      bilan: "Le Royaume-Uni compte quatre nations, l'Irlande est indépendante, Washington D.C. et Canberra sont des capitales qu'on oublie souvent, et les nationalités prennent toujours une majuscule.",
    },

    "6e-anglais-12-phonologie-culture": {
      accroche: "Ton correspondant de Liverpool t'envoie un message vocal : « I think it's my brother's thirteenth birthday on Thursday! » Six « th » en une seule phrase ! Pour comprendre et te faire comprendre, il faut apprivoiser les sons de l'anglais… et quelques héros de la culture anglophone.",
      objectifs: [
        "Prononcer les sons propres à l'anglais : th, h, r, -ing et -ed",
        "Repérer la syllabe accentuée d'un mot et l'intonation d'une question",
        "Éviter les faux amis les plus courants",
        "Connaître des personnages et des comptines célèbres",
      ],
      sections: [
        {
          titre: "Les sons qui n'existent pas en français",
          blocs: [
            { t: "texte", md: "Le **th** n'existe pas en français. Pour le prononcer, place le bout de la langue **entre les dents** (ou juste derrière les dents du haut) et souffle. Selon le mot, il est **sourd** (sans vibration de la gorge) ou **sonore** (la gorge vibre : pose ta main dessus pour sentir la différence)." },
            { t: "tableau", titre: "Le th sourd et le th sonore", entetes: ["th sourd /θ/", "th sonore /ð/"], lignes: [["[[think, three, thirty]]", "[[the, this, that]]"], ["[[thank you, birthday]]", "[[mother, brother]]"], ["[[Thursday, tooth]]", "[[father, they]]"]] },
            { t: "propriete", titre: "Le h se prononce", md: "En anglais, le **h** s'expire, comme quand tu fais de la buée sur une vitre : **[[hello, house, happy, have]]**. L'oublier change le sens : **[[hair]]** (cheveux) / **[[air]]** (air). Exceptions où il est muet : **[[hour]]** (heure) et **[[honest]]** (honnête)." },
            { t: "texte", md: "Deux autres sons à soigner : le **r** anglais ne roule pas et ne gratte pas, la langue ne touche rien. Le **[[-ing]]** se prononce /ɪŋ/, un son nasal qui reste au fond de la gorge, sans « g » dur à la fin : *[[singing]]* se dit « sinnguinng » très doucement." },
            { t: "verifie", q: "Dans quel mot le « h » ne se prononce pas ?", choix: ["[[house]]", "[[hour]]", "[[happy]]", "[[hello]]"], bonne: 1, explication: "**[[Hour]]** fait partie des rares exceptions où le h est muet, comme [[honest]]. Partout ailleurs, on souffle le h." },
          ],
        },
        {
          titre: "Les trois prononciations de -ed",
          blocs: [
            { t: "texte", md: "Les verbes réguliers au passé (le *prétérit*, que tu étudieras bientôt) finissent par **-ed**. Cette terminaison s'écrit toujours pareil, mais elle se prononce de **trois façons**, selon le son qui la précède." },
            { t: "tableau", titre: "-ed : /t/, /d/ ou /ɪd/ ?", entetes: ["Son", "Après…", "Exemples"], lignes: [["/t/", "un son sourd : p, k, s, sh, ch, f", "[[walked, looked, watched, helped]]"], ["/d/", "un son sonore : voyelle, b, g, l, m, n, v, z", "[[played, lived, opened, called]]"], ["/ɪd/", "t ou d", "[[wanted, visited, needed]]"]] },
            { t: "exemple", titre: "S'entraîner à voix haute", md: "*[[Think, three, thirty]]* : la langue entre les dents, sans voix. *[[This, that, the]]* : la langue entre les dents, avec la voix. *[[Hello, happy, horse]]* : on souffle le h. *[[Walked]]* /t/, *[[played]]* /d/, *[[wanted]]* /ɪd/." },
            { t: "astuce", md: "On n'ajoute une syllabe que pour /ɪd/ : *[[wan-ted]]* (2 syllabes), mais *[[walked]]* et *[[played]]* n'en ont qu'une. Ne dis jamais « walk-èd » !" },
          ],
        },
        {
          titre: "Accent de mot et intonation",
          blocs: [
            { t: "propriete", titre: "La syllabe accentuée", md: "Chaque mot de plusieurs syllabes a **une syllabe accentuée**, plus forte et plus longue : [[**TEA**cher, **BIRTH**day, **FA**vourite, ba**NA**na, com**PU**ter]]. Les autres voyelles s'affaiblissent en un petit son neutre, le **[[schwa]]** /ə/. Dans *[[chocolate]]* (« **tchok**-leut »), le o du milieu se prononce à peine." },
            { t: "schema", titre: "L'intonation et l'accent", legende: "La voix monte à la fin d'une question en [[yes/no]] et descend dans une question en wh-. En bas, les gros points marquent les syllabes accentuées.", svg: `<svg viewBox="0 0 400 260"><text class="texte" x="30" y="40">Are you ready?</text><path class="trait" d="M30 55 H150 Q170 55 180 30" fill="none" marker-end="url(#fl-p)"/><text class="texte-petit" x="230" y="40">yes/no : la voix monte</text><text class="texte" x="30" y="105">Where do you live?</text><path class="trait" d="M30 115 Q45 125 60 125 H175 Q190 125 200 145" fill="none" marker-end="url(#fl-p)"/><text class="texte-petit" x="230" y="120">wh- : la voix descend</text><line class="trait-fin" x1="20" y1="165" x2="380" y2="165"/><circle class="aplat-fort" cx="50" cy="195" r="9"/><circle class="aplat" cx="74" cy="195" r="5"/><text class="texte" x="62" y="230" text-anchor="middle">TEAcher</text><circle class="aplat" cx="145" cy="195" r="5"/><circle class="aplat-fort" cx="169" cy="195" r="9"/><circle class="aplat" cx="193" cy="195" r="5"/><text class="texte" x="169" y="230" text-anchor="middle">baNAna</text><circle class="aplat" cx="255" cy="195" r="5"/><circle class="aplat-fort" cx="279" cy="195" r="9"/><text class="texte" x="267" y="230" text-anchor="middle">thirTEEN</text><circle class="aplat-fort" cx="335" cy="195" r="9"/><circle class="aplat" cx="359" cy="195" r="5"/><text class="texte" x="347" y="230" text-anchor="middle">THIRty</text></svg>` },
            { t: "texte", md: "L'accent t'aide à distinguer des nombres qui se ressemblent : [[**thir**TEEN]] (13) est accentué sur la fin, [[**THIR**ty]] (30) sur le début. Même chose pour [[four**TEEN** / **FOR**ty, fif**TEEN** / **FIF**ty]]." },
            { t: "attention", md: "Une même orthographe ne garantit pas le même son ! *[[Speak]]*, *[[weak]]* et *[[leak]]* riment (« ii »), mais *[[break]]* se dit « bréïk ». Écoute toujours le mot avant de le lire." },
            { t: "verifie", q: "Quelle question se dit avec une intonation montante ?", choix: ["[[Where do you live?]]", "[[What's your name?]]", "[[Are you ready?]]", "[[How old are you?]]"], bonne: 2, explication: "**[[Are you ready?]]** attend une réponse [[yes/no]] : la voix monte. Les questions en wh- ([[where, what, how]]) descendent." },
          ],
        },
        {
          titre: "Attention aux faux amis",
          blocs: [
            { t: "definition", terme: "Faux ami", md: "Mot anglais qui ressemble à un mot français mais qui a **un autre sens**. Il trompe même les bons élèves !" },
            { t: "tableau", titre: "Les faux amis à connaître", entetes: ["Mot anglais", "Vrai sens", "À ne pas confondre avec"], lignes: [["[[a library]]", "une bibliothèque", "une librairie = [[a bookshop]]"], ["[[a journey]]", "un voyage", "une journée = [[a day]]"], ["[[actually]]", "en fait", "actuellement = [[now, at the moment]]"], ["[[a coin]]", "une pièce de monnaie", "un coin = [[a corner]]"], ["[[to attend]]", "assister à", "attendre = [[to wait]]"], ["[[sensible]]", "raisonnable", "sensible = [[sensitive]]"], ["[[a chair]]", "une chaise", "la chair = [[flesh]]"]] },
            { t: "verifie", q: "Que veut dire « [[a library]] » ?", choix: ["une librairie", "une bibliothèque", "une liberté", "un libraire"], bonne: 1, explication: "**[[A library]]** est une bibliothèque, où l'on emprunte des livres. La librairie, où on les achète, se dit **[[a bookshop]]**." },
          ],
        },
        {
          titre: "Personnages et comptines",
          blocs: [
            { t: "frise", titre: "Des héros de la culture enfantine anglophone", evenements: [{ date: 1797, label: "Humpty Dumpty", detail: "Première publication connue de la comptine de l'œuf assis sur un mur." }, { date: 1865, label: "Alice in Wonderland", detail: "Lewis Carroll envoie Alice au pays des merveilles, à la suite d'un lapin blanc." }, { date: 1893, label: "Happy Birthday", detail: "Deux sœurs américaines composent la mélodie, d'abord sur les paroles « Good Morning to All »." }, { date: 1904, label: "Peter Pan", detail: "J. M. Barrie crée l'enfant qui ne veut pas grandir, à Neverland." }, { date: 1958, label: "Paddington", detail: "Michael Bond imagine l'ours venu du Pérou, trouvé dans la gare de Paddington à Londres, fou de marmelade." }, { date: 1997, label: "Harry Potter", detail: "J. K. Rowling publie le premier tome : Harry entre à l'école des sorciers, Hogwarts." }] },
            { t: "citation", texte: "[[Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.\nAll the king's horses and all the king's men\nCouldn't put Humpty together again.]]", auteur: "Comptine traditionnelle anglaise", source: "Humpty Dumpty" },
            { t: "texte", md: "*[[Wall]]* (mur) et *[[fall]]* (chute) riment, tout comme *[[men]]* et *[[again]]* : c'est ce qui rend la comptine si facile à retenir. Humpty Dumpty est représenté comme un œuf, et c'est pour cela qu'une fois tombé, personne ne peut le recoller !" },
            { t: "verifie", q: "Qui est Paddington ?", choix: ["Un sorcier de [[Hogwarts]]", "Un ours venu du Pérou qui adore la marmelade", "Un enfant qui ne grandit pas", "Un œuf assis sur un mur"], bonne: 1, explication: "**Paddington** est un ours péruvien qui vit à Londres et adore les sandwichs à la marmelade. Le sorcier est Harry Potter, l'enfant Peter Pan, l'œuf Humpty Dumpty." },
          ],
        },
      ],
      bilan: "La langue entre les dents pour le th, un souffle pour le h, une syllabe plus forte dans chaque mot, une voix qui monte ou descend selon la question : ton anglais sonne déjà plus juste, et Paddington serait fier de toi.",
    },
  },
};
