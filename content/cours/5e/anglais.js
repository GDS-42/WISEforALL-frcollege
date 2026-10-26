// Cours ÉCLORE — 5e Anglais. Schéma : docs/COURS.md
export default {
  id: "5e-anglais",
  chapitres: {
    "5e-anglais-01-revisions-presentation": {
      accroche: "Leo, 12 ans, vit à Bristol. Ce matin, il attend à la gare Hugo, son correspondant français. Premier défi pour Hugo : se présenter sans dire « I have twelve ». Bonne nouvelle : tu as déjà tous les outils depuis la 6e. On les révise pour repartir du bon pied.",
      objectifs: [
        "Utiliser be et have got à toutes les personnes, sans te tromper",
        "Conjuguer le present simple et poser des questions avec do et does",
        "Dire et comprendre les nombres jusqu'à 1000 et les dates",
      ],
      sections: [
        {
          titre: "[[Be]] et [[have got]] : les deux piliers",
          blocs: [
            { t: "texte", md: "Pour te présenter, deux verbes font presque tout le travail. **[[Be]]** (être) dit qui tu es : ton nom, ton âge, ta nationalité, ton humeur. **[[Have got]]** (avoir, posséder) dit ce que tu as : des frères et sœurs, un animal, les yeux bleus.\n\n*[[Hi! My name is Leo. I'm twelve years old and I've got two sisters.]]* (Salut ! Je m'appelle Leo. J'ai douze ans et j'ai deux sœurs.)" },
            { t: "tableau", titre: "[[Be]] et [[have got]] au présent", entetes: ["Sujet", "[[Be]]", "[[Be]] (négation)", "[[Have got]]", "[[Have got]] (négation)"], lignes: [["[[I]]", "[[am (I'm)]]", "[[am not (I'm not)]]", "[[have got (I've got)]]", "[[haven't got]]"], ["[[you]]", "[[are (you're)]]", "[[aren't]]", "[[have got]]", "[[haven't got]]"], ["[[he / she / it]]", "[[**is** (she's)]]", "[[**isn't**]]", "[[**has got** (he's got)]]", "[[**hasn't got**]]"], ["[[we / you / they]]", "[[are (we're)]]", "[[aren't]]", "[[have got]]", "[[haven't got]]"]] },
            { t: "propriete", titre: "Poser une question avec [[be]] et [[have got]]", md: "On **inverse** le sujet et le verbe : *[[You are French]]* → *[[Are you French?]]* ; *[[She has got a dog]]* → *[[Has she got a dog?]]*\n\nLes réponses courtes reprennent le verbe : *[[Yes, I am. / No, she isn't. / Yes, I have. / No, he hasn't.]]*" },
            { t: "attention", md: "En français, on « a » douze ans. En anglais, on **est** douze ans : *[[I am twelve]]* (ou *[[I'm twelve years old]]*). Jamais « [[I have twelve]] ».\n\nAutre piège : *[[They is my friends]]* est faux. Avec [[they]], c'est toujours **[[are]]** : *[[They are my friends.]]*" },
            { t: "verifie", q: "Complète : « [[___ your parents from Ireland? No, they ___.]] »", choix: ["[[Are / aren't]]", "[[Is / isn't]]", "[[Have / haven't]]", "[[Do / don't]]"], bonne: 0, explication: "Le sujet est [[your parents]] (= [[they]]) : on emploie [[are]]. La réponse courte reprend le même verbe à la forme négative : [[No, they aren't.]]" },
          ],
        },
        {
          titre: "Le [[present simple]] : habitudes et vérités",
          blocs: [
            { t: "texte", md: "Le [[present simple]] sert à parler de ce qui est **habituel** ou **toujours vrai** : tes activités de la semaine, tes goûts, les faits. Il va souvent avec *[[every day]]*, *[[on Saturdays]]*, *[[usually]]*.\n\n*[[I live in Bristol and I play football on Saturdays.]]* (J'habite à Bristol et je joue au foot le samedi.)" },
            { t: "propriete", titre: "Le -s de la 3e personne", md: "Avec **[[he, she, it]]** (ou un nom singulier), le verbe prend un **-s** : *[[she plays, he likes, it works]]*.\n\n• Verbes en -ch, -sh, -s, -x, -o : on ajoute **-es** : *[[he watches, she goes, it does]]*.\n• Consonne + y : **-ies** : *[[study → she studies]]*.\n• [[Have]] devient **[[has]]** : *[[she has]]*." },
            { t: "schema", titre: "Où passe le -s dans une question ?", legende: "Dans la question et la négation, c'est l'auxiliaire [[does]] qui porte le -s. Le verbe revient à la base verbale.", svg: `<svg viewBox="0 0 400 220"><text class="texte-petit" x="12" y="50">affirmation</text><rect class="aplat-papier" x="100" y="30" width="56" height="30" rx="5"/><rect class="trait-fin" x="100" y="30" width="56" height="30" rx="5" fill="none"/><text class="texte" x="128" y="50" text-anchor="middle">She</text><rect class="aplat-fort" x="162" y="30" width="66" height="30" rx="5"/><text class="texte" x="195" y="50" text-anchor="middle">plays</text><rect class="trait-fin" x="234" y="30" width="80" height="30" rx="5" fill="none"/><text class="texte" x="274" y="50" text-anchor="middle">tennis.</text><text class="texte-pigment" x="195" y="78" text-anchor="middle">-s</text><text class="texte-petit" x="12" y="140">question</text><rect class="aplat-fort" x="100" y="120" width="56" height="30" rx="5"/><text class="texte" x="128" y="140" text-anchor="middle">Does</text><rect class="trait-fin" x="162" y="120" width="56" height="30" rx="5" fill="none"/><text class="texte" x="190" y="140" text-anchor="middle">she</text><rect class="aplat-papier" x="224" y="120" width="60" height="30" rx="5"/><rect class="trait-fin" x="224" y="120" width="60" height="30" rx="5" fill="none"/><text class="texte" x="254" y="140" text-anchor="middle">play</text><rect class="trait-fin" x="290" y="120" width="86" height="30" rx="5" fill="none"/><text class="texte" x="333" y="140" text-anchor="middle">tennis?</text><text class="texte-pigment" x="128" y="170" text-anchor="middle">auxiliaire</text><text class="texte-petit" x="190" y="170" text-anchor="middle">sujet</text><text class="texte-pigment" x="254" y="170" text-anchor="middle">base</text><text class="texte-petit" x="333" y="170" text-anchor="middle">complément</text><path class="pointille" d="M195 84 Q160 100 132 116" fill="none" marker-end="url(#fl-p)"/><text class="texte-main" x="200" y="205" text-anchor="middle">un seul -s, sur does</text></svg>` },
            { t: "exemple", titre: "Transformer « [[She plays tennis every Sunday.]] »", etapes: ["Le sujet est [[she]] (3e personne) : l'auxiliaire sera **[[does]]**.", "Négation : *[[She **doesn't play** tennis every Sunday.]]*", "Question : *[[**Does** she **play** tennis every Sunday?]]*", "Réponses courtes : *[[Yes, she does. / No, she doesn't.]]*", "Avec [[I, you, we, they]], on emploie **[[do]]** : *[[Do you play tennis? — No, I don't.]]*"] },
            { t: "attention", md: "Ne mets pas deux fois la marque : « [[she doesn't plays]] » et « [[Does she likes…?]] » sont faux. Le -s est déjà dans [[does]], donc le verbe reste **nu** : *[[She doesn't like football.]]*" },
            { t: "verifie", q: "Quelle question est correcte ?", choix: ["[[Does she likes pizza?]]", "[[Do she like pizza?]]", "[[Does she like pizza?]]", "[[She like pizza?]]"], bonne: 2, explication: "Avec [[she]], l'auxiliaire est [[does]], qui porte le -s. Le verbe reste à la base verbale : [[like]], sans -s." },
          ],
        },
        {
          titre: "Compter jusqu'à 1000",
          blocs: [
            { t: "tableau", titre: "Les nombres qui comptent", entetes: ["Nombre", "En anglais", "À remarquer"], lignes: [["13 / 30", "[[thirteen / thirty]]", "[[-teen]] (13 à 19) ou -ty (dizaines)"], ["42", "[[forty-two]]", "trait d'union ; [[forty]] sans u"], ["100", "[[a hundred (one hundred)]]", "jamais « [[hundreds]] » après un chiffre"], ["105", "[[a hundred and five]]", "**[[and]]** après [[hundred]]"], ["250", "[[two hundred and fifty]]", "**[[and]]** entre centaines et dizaines"], ["300", "[[three hundred]]", "pas de -s"], ["999", "[[nine hundred and ninety-nine]]", "[[and]] + trait d'union"], ["1000", "[[a thousand]]", "mille"]] },
            { t: "propriete", titre: "[[Hundred]] et [[thousand]]", md: "Après un chiffre, **[[hundred]]** et **[[thousand]]** restent au singulier : *[[three hundred students]]*, *[[two thousand people]]*. En anglais britannique, on dit **[[and]]** après les centaines : *[[two hundred **and** fifty]]*." },
            { t: "astuce", md: "Pour ne pas confondre 13 et 30, écoute l'accent : [[thir**TEEN**]] (accent à la fin, le « n » s'entend) et [[**THIR**ty]] (accent au début)." },
          ],
        },
        {
          titre: "Les mois, les jours et les dates",
          blocs: [
            { t: "texte", md: "Les mois et les jours prennent **toujours une majuscule** en anglais : *[[January, February, March, April, May, June, July, August, September, October, November, December]]* ; *[[Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]]*.\n\nPour une date, on utilise un **ordinal** (premier, deuxième…) : [[1st = *first*, 2nd = *second*, 3rd = *third*, 4th = *fourth*, 5th = *fifth*, 12th = *twelfth*, 20th = *twentieth*, 21st = *twenty-first*]]." },
            { t: "exemple", titre: "Écrire et dire une date", md: "On **écrit** *[[5th May]]* ou *[[3rd March]]*, mais on **dit** *[[the fifth of May]]*, *[[the third of March]]*.\n\nAvec une date, on emploie [[**on**]] ; avec un mois seul, [[**in**]] : *[[My birthday is **on** the third of March.]]* / *[[I was born **in** March.]]*" },
            { t: "verifie", q: "Comment dit-on la date « [[3rd May]] » à l'oral ?", choix: ["[[three May]]", "[[the three of May]]", "[[the third of May]]"], bonne: 2, explication: "On dit un ordinal précédé de [[the]], puis [[of]] : [[the third of May.]] [[Three]] est un nombre ordinaire (trois), [[third]] est l'ordinal (troisième)." },
            { t: "savais-tu", md: "Aux États-Unis, on écrit souvent le mois **avant** le jour : 5/3 signifie *[[May 3rd]]* pour un Américain, mais 5 mars pour un Britannique ! Pour éviter les malentendus, écris le mois en toutes lettres." },
          ],
        },
      ],
      bilan: "I am twelve, she has got, she plays, does she play ? Ajoute les nombres et les dates, et tu sais te présenter à n'importe quel ado anglophone.",
    },
    "5e-anglais-02-past-simple-regulier": {
      accroche: "Lundi matin, dans un collège de Manchester, Maya raconte ses vacances : « Last summer, I was in Scotland. We visited Edinburgh Castle and walked a lot. » Pour raconter ce qui est fini, l'anglais a un temps simple et redoutablement efficace : le prétérit.",
      objectifs: [
        "Employer was et were aux formes affirmative, négative et interrogative",
        "Former et orthographier le prétérit des verbes réguliers",
        "Prononcer la terminaison -ed et utiliser les marqueurs du passé",
      ],
      sections: [
        {
          titre: "Situer une action dans le temps",
          blocs: [
            { t: "texte", md: "Quand Maya dit *[[We visited Edinburgh Castle]]*, l'action est **terminée** : elle a eu lieu l'été dernier, et c'est fini. En français, tu dirais « nous avons visité » ou « nous visitâmes ». En anglais, un seul temps suffit : le **[[past simple]]**." },
            { t: "definition", terme: "[[Past simple]] (prétérit)", md: "Le temps qui exprime une action **terminée**, située à un moment **précis** du passé, coupée du présent. Il est souvent accompagné d'un marqueur de temps : *[[yesterday, last week, two days ago]]*." },
            { t: "schema", titre: "Passé, présent, futur sur la ligne du temps", legende: "Le prétérit décrit ce qui se trouve à gauche de « [[now]] » : c'est fini, on ne peut plus le changer.", svg: `<svg viewBox="0 0 400 200"><rect class="aplat" x="20" y="72" width="172" height="36" rx="6"/><line class="trait" x1="20" y1="90" x2="385" y2="90" marker-end="url(#fl)"/><line class="trait" x1="200" y1="66" x2="200" y2="114"/><text class="texte-main" x="200" y="58" text-anchor="middle">now</text><text class="texte" x="105" y="38" text-anchor="middle">PAST</text><text class="texte" x="300" y="38" text-anchor="middle">FUTURE</text><circle cx="60" cy="90" r="5" fill="var(--pigment)"/><circle cx="140" cy="90" r="5" fill="var(--pigment)"/><circle cx="300" cy="90" r="5" fill="var(--encre)"/><text class="texte-petit" x="60" y="132" text-anchor="middle">two days ago</text><text class="texte-petit" x="140" y="132" text-anchor="middle">yesterday</text><text class="texte-petit" x="200" y="132" text-anchor="middle">today</text><text class="texte-petit" x="300" y="132" text-anchor="middle">tomorrow</text><text class="texte-pigment" x="100" y="165" text-anchor="middle">I played / I was</text><text class="texte" x="200" y="185" text-anchor="middle">I play</text><text class="texte" x="300" y="165" text-anchor="middle">I will play</text></svg>` },
          ],
        },
        {
          titre: "[[Was]] et [[were]] : le verbe [[be]] au passé",
          blocs: [
            { t: "tableau", titre: "[[Be]] au prétérit", entetes: ["Sujet", "Affirmation", "Négation", "Question"], lignes: [["[[I]]", "[[**was**]]", "[[wasn't]]", "[[Was I…?]]"], ["[[you]]", "[[**were**]]", "[[weren't]]", "[[Were you…?]]"], ["[[he / she / it]]", "[[**was**]]", "[[wasn't]]", "[[Was she…?]]"], ["[[we / you / they]]", "[[**were**]]", "[[weren't]]", "[[Were they…?]]"]] },
            { t: "propriete", titre: "Deux formes seulement", md: "**[[Was]]** avec [[I, he, she, it]]. **[[Were]]** avec [[you, we, they]]. Pour la question, on inverse : *[[Were you tired?]]* Réponses courtes : *[[Yes, I was. / No, they weren't.]]*\n\n*[[I was very tired last night and my brother was tired too.]]* (J'étais très fatigué hier soir et mon frère aussi.)" },
            { t: "attention", md: "*[[There was]]* + singulier, *[[there were]]* + pluriel. Comme *[[people]]* est un pluriel, on dit *[[**There were** a lot of people at the party.]]* « [[There was a lot of people]] » est fautif en anglais standard." },
            { t: "verifie", q: "Complète : « [[Where ___ you yesterday? I ___ at home.]] »", choix: ["[[was / were]]", "[[were / was]]", "[[were / were]]", "[[was / was]]"], bonne: 1, explication: "Avec [[you]], c'est [[were]] ([[Where were you?]]). Avec [[I]], c'est [[was]] ([[I was at home]])." },
          ],
        },
        {
          titre: "Les verbes réguliers : base verbale + -ed",
          blocs: [
            { t: "propriete", titre: "Une seule forme pour toutes les personnes", md: "Pour les verbes réguliers, on ajoute **-ed** à la base verbale, et c'est la même forme pour tout le monde : *[[I played, she played, they played]]*. Pas de -s à la 3e personne au prétérit !" },
            { t: "tableau", titre: "L'orthographe du -ed", entetes: ["Le verbe se termine par…", "Règle", "Exemples"], lignes: [["cas général", "+ **-ed**", "[[walk → walked, watch → watched, visit → visited]]"], ["-e", "+ **-d**", "[[live → lived, like → liked, dance → danced]]"], ["consonne + y", "y → **-ied**", "[[study → studied, try → tried, carry → carried]]"], ["voyelle + y", "+ **-ed**", "[[play → played, enjoy → enjoyed, stay → stayed]]"], ["1 voyelle + 1 consonne (syllabe accentuée)", "on **double** la consonne", "[[stop → stopped, plan → planned, chat → chatted]]"]] },
            { t: "astuce", md: "En anglais britannique, les verbes en -l doublent aussi leur consonne : *[[travel → travelled]]*. Les Américains écrivent *[[traveled]]*. Les deux existent, mais en classe on suit l'orthographe britannique." },
            { t: "attention", md: "Ne dis jamais « [[I was play]] » ou « [[I was visited Paris]] » pour « j'ai joué » ou « j'ai visité ». Au prétérit, c'est le verbe lui-même qui porte la marque **-ed** : *[[I played. I visited Paris last year.]]*" },
            { t: "exemple", titre: "[[Last weekend, we ___ (visit) a museum and then we ___ (walk) in the park.]]", etapes: ["Le marqueur *[[last weekend]]* annonce une action terminée : prétérit.", "[[visit]] + -ed → *[[visited]]* (accent sur vi- : on ne double pas le t).", "[[walk]] + -ed → *[[walked]]*.", "[[*Last weekend, we visited a museum and then we walked in the park.*]]"] },
          ],
        },
        {
          titre: "Prononcer -ed et dater l'action",
          blocs: [
            { t: "tableau", titre: "Trois prononciations pour -ed", entetes: ["Son", "Quand ?", "Exemples"], lignes: [["/t/", "après un son sourd : p, k, s, sh, ch, f", "[[walked, watched, stopped, liked]]"], ["/d/", "après une voyelle ou un son sonore : b, g, l, m, n, v, z", "[[played, lived, studied, cleaned]]"], ["/ɪd/", "après t ou d : on ajoute une syllabe", "[[wanted, needed, visited, decided]]"]] },
            { t: "astuce", md: "Seul le son /ɪd/ crée une syllabe en plus : *[[want-ed]]*, *[[need-ed]]*. Ne dis pas « [[walk-ed]] » en deux syllabes : on entend juste *[[walkt]]*." },
            { t: "verifie", q: "Dans quel verbe la terminaison -ed forme-t-elle une syllabe supplémentaire ?", choix: ["[[played]]", "[[watched]]", "[[needed]]"], bonne: 2, explication: "[[Need]] se termine par le son d : la terminaison se prononce /ɪd/ et ajoute une syllabe, [[need-ed]]. [[Played]] (/d/) et [[watched]] (/t/) gardent une seule syllabe." },
            { t: "propriete", titre: "Les marqueurs du passé", md: "*[[yesterday]]* (hier), *[[yesterday morning]]*, *[[last night]]* (hier soir), *[[last week / month / year / summer]]*, *[[two days ago]]* (il y a deux jours), *[[in 2015]]*, *[[when I was six]]*.\n\n**[[Ago]]** se place **après** la durée : *[[three years ago]]*. Et on dit *[[last week]]*, sans *[[the]]*." },
            { t: "exemple", titre: "Le récit de Maya", md: "*[[Last summer, I was in Scotland with my family. We visited Edinburgh Castle and walked a lot. The weather wasn't very good but it was fantastic!]]*\n\n(L'été dernier, j'étais en Écosse avec ma famille. Nous avons visité le château d'Édimbourg et beaucoup marché. Le temps n'était pas terrible, mais c'était génial !)" },
          ],
        },
      ],
      bilan: "Was ou were pour be, -ed pour tous les verbes réguliers, un marqueur comme yesterday ou ago pour dater : tu peux raconter ton week-end en anglais.",
    },
    "5e-anglais-03-past-simple-irregulier": {
      accroche: "Samedi soir, Tom a fêté ses 13 ans. Lundi, toute la classe veut savoir : « Did you go to the party? » — « Yes, I did. I went with Tom. We ate pizza and we sang karaoke! » Went, ate, sang : pas un seul -ed. Bienvenue chez les verbes irréguliers.",
      objectifs: [
        "Mémoriser le prétérit des 40 verbes irréguliers les plus fréquents",
        "Former la négation au prétérit avec didn't",
        "Poser des questions et y répondre avec did",
      ],
      sections: [
        {
          titre: "Pourquoi des verbes irréguliers ?",
          blocs: [
            { t: "texte", md: "Les verbes que l'on utilise le plus souvent (aller, voir, avoir, faire, manger…) sont aussi les plus anciens de la langue. À force d'être employés, ils ont gardé de vieilles formes qui ne suivent pas la règle du -ed. C'est pareil en français : on dit « il fut », pas « il êta » !\n\nLa bonne nouvelle : un verbe irrégulier a **une seule forme** au prétérit, pour toutes les personnes. *[[I went, she went, we went.]]* Seul *[[be]]* en a deux ([[was / were]])." },
            { t: "definition", terme: "Verbe irrégulier", md: "Un verbe dont le prétérit ne se forme **pas** avec -ed. Il faut l'**apprendre par cœur** : *[[go → went, see → saw, take → took]]*. Ce prétérit ne sert qu'à la forme **affirmative**." },
            { t: "savais-tu", md: "Des verbes irréguliers sont devenus réguliers avec le temps. Il y a quelques siècles, on disait *[[holp]]* pour le prétérit de *[[help]]* ; aujourd'hui, c'est *[[helped]]*. Les verbes très fréquents, eux, résistent." },
          ],
        },
        {
          titre: "Les 40 irréguliers à connaître",
          blocs: [
            { t: "tableau", titre: "Les 20 incontournables", entetes: ["Base verbale", "Prétérit", "Sens"], lignes: [["[[be]]", "[[was / were]]", "être"], ["[[go]]", "[[went]]", "aller"], ["[[see]]", "[[saw]]", "voir"], ["[[have]]", "[[had]]", "avoir"], ["[[do]]", "[[did]]", "faire"], ["[[make]]", "[[made]]", "fabriquer, faire"], ["[[take]]", "[[took]]", "prendre"], ["[[come]]", "[[came]]", "venir"], ["[[get]]", "[[got]]", "obtenir, devenir"], ["[[give]]", "[[gave]]", "donner"], ["[[eat]]", "[[ate]]", "manger"], ["[[drink]]", "[[drank]]", "boire"], ["[[write]]", "[[wrote]]", "écrire"], ["[[read]]", "[[read]] (/[[red]]/)", "lire"], ["[[say]]", "[[said]]", "dire"], ["[[tell]]", "[[told]]", "raconter, dire à"], ["[[think]]", "[[thought]]", "penser"], ["[[buy]]", "[[bought]]", "acheter"], ["[[know]]", "[[knew]]", "savoir, connaître"], ["[[find]]", "[[found]]", "trouver"]] },
            { t: "tableau", titre: "20 autres très fréquents", entetes: ["Base verbale", "Prétérit", "Sens"], lignes: [["[[bring]]", "[[brought]]", "apporter"], ["[[meet]]", "[[met]]", "rencontrer"], ["[[run]]", "[[ran]]", "courir"], ["[[swim]]", "[[swam]]", "nager"], ["[[sing]]", "[[sang]]", "chanter"], ["[[sleep]]", "[[slept]]", "dormir"], ["[[leave]]", "[[left]]", "partir, quitter"], ["[[feel]]", "[[felt]]", "ressentir"], ["[[win]]", "[[won]]", "gagner"], ["[[lose]]", "[[lost]]", "perdre"], ["[[wear]]", "[[wore]]", "porter (un vêtement)"], ["[[speak]]", "[[spoke]]", "parler"], ["[[break]]", "[[broke]]", "casser"], ["[[fly]]", "[[flew]]", "voler (en l'air)"], ["[[sit]]", "[[sat]]", "s'asseoir"], ["[[begin]]", "[[began]]", "commencer"], ["[[become]]", "[[became]]", "devenir"], ["[[forget]]", "[[forgot]]", "oublier"], ["[[hear]]", "[[heard]]", "entendre"], ["[[send / spend]]", "[[sent / spent]]", "envoyer / dépenser"]] },
            { t: "astuce", md: "Apprends-les par **familles de sons** :\n• **[[-ought]]** : [[think → thought, buy → bought, bring → brought.]]\n• **i → a** : [[drink → drank, swim → swam, sing → sang, begin → began, sit → sat.]]\n• **ee → e** : [[sleep → slept, feel → felt, meet → met, leave → left.]]\n• **aucun changement** : [[cut → cut, put → put.]]" },
            { t: "attention", md: "*[[Read]]* garde la même orthographe au prétérit, mais **change de prononciation** : au présent on dit /riːd/, avec un « i » long ; au prétérit, /red/, comme la couleur [[*red*]]." },
            { t: "verifie", q: "Quel est le prétérit de « [[bring]] » ?", choix: ["[[bringed]]", "[[brang]]", "[[brought]]", "[[brung]]"], bonne: 2, explication: "[[Bring]] appartient à la famille en [[-ought]], comme [[think → thought]] et [[buy → bought]] : [[bring → brought.]]" },
          ],
        },
        {
          titre: "La négation : [[didn't]] + base verbale",
          blocs: [
            { t: "propriete", titre: "Former la négation", md: "Sujet + **[[didn't]]** ([[did not]]) + **base verbale**. C'est l'auxiliaire *[[did]]* qui porte le passé : le verbe revient donc à sa forme de base.\n\n*[[She saw the film.]]* → *[[She **didn't see** the film.]]* (Elle n'a pas vu le film.)" },
            { t: "schema", titre: "[[Did]] prend la marque du passé", legende: "À l'affirmative, le verbe porte le passé. À la négation et à la question, [[did]] le lui « prend » : le verbe redevient une base verbale.", svg: `<svg viewBox="0 0 400 230"><text class="texte-petit" x="10" y="50">affirmation</text><rect class="trait-fin" x="104" y="30" width="50" height="30" rx="5" fill="none"/><text class="texte" x="129" y="50" text-anchor="middle">She</text><rect class="aplat-fort" x="160" y="30" width="62" height="30" rx="5"/><text class="texte" x="191" y="50" text-anchor="middle">went</text><rect class="trait-fin" x="228" y="30" width="104" height="30" rx="5" fill="none"/><text class="texte" x="280" y="50" text-anchor="middle">to the party.</text><text class="texte-pigment" x="191" y="78" text-anchor="middle">passé</text><text class="texte-petit" x="10" y="120">négation</text><rect class="trait-fin" x="104" y="100" width="50" height="30" rx="5" fill="none"/><text class="texte" x="129" y="120" text-anchor="middle">She</text><rect class="aplat-fort" x="160" y="100" width="62" height="30" rx="5"/><text class="texte" x="191" y="120" text-anchor="middle">didn't</text><rect class="aplat-papier" x="228" y="100" width="40" height="30" rx="5"/><rect class="trait-fin" x="228" y="100" width="40" height="30" rx="5" fill="none"/><text class="texte" x="248" y="120" text-anchor="middle">go</text><rect class="trait-fin" x="274" y="100" width="104" height="30" rx="5" fill="none"/><text class="texte" x="326" y="120" text-anchor="middle">to the party.</text><text class="texte-pigment" x="191" y="148" text-anchor="middle">passé</text><text class="texte-petit" x="248" y="148" text-anchor="middle">base</text><text class="texte-petit" x="10" y="190">question</text><rect class="aplat-fort" x="104" y="170" width="50" height="30" rx="5"/><text class="texte" x="129" y="190" text-anchor="middle">Did</text><rect class="trait-fin" x="160" y="170" width="50" height="30" rx="5" fill="none"/><text class="texte" x="185" y="190" text-anchor="middle">she</text><rect class="aplat-papier" x="216" y="170" width="40" height="30" rx="5"/><rect class="trait-fin" x="216" y="170" width="40" height="30" rx="5" fill="none"/><text class="texte" x="236" y="190" text-anchor="middle">go</text><rect class="trait-fin" x="262" y="170" width="108" height="30" rx="5" fill="none"/><text class="texte" x="316" y="190" text-anchor="middle">to the party?</text><text class="texte-pigment" x="129" y="218" text-anchor="middle">passé</text><text class="texte-petit" x="236" y="218" text-anchor="middle">base</text></svg>` },
            { t: "attention", md: "« [[I didn't went]] » et « [[She didn't saw]] » sont faux : cela ferait **deux** marques du passé. Une seule suffit, et c'est *[[did]]* qui la porte : *[[I didn't go. She didn't see.]]*" },
            { t: "exemple", titre: "[[She ___ (not / come) to school yesterday because she ___ (not / feel) well.]]", etapes: ["*[[Yesterday]]* : action terminée, donc prétérit.", "Négation : [[didn't]] + base verbale → *[[didn't come]]* (pas « [[didn't came]] »).", "Même chose pour [[feel]] → *[[didn't feel]]*.", "[[*She didn't come to school yesterday because she didn't feel well.*]]"] },
          ],
        },
        {
          titre: "Les questions avec [[did]]",
          blocs: [
            { t: "etapes", titre: "Construire une question au prétérit", items: [{ titre: "Mot interrogatif", md: "Facultatif : *[[What, Where, When, Who, Why, How…]]*" }, { titre: "[[Did]]", md: "L'auxiliaire, identique à toutes les personnes." }, { titre: "Sujet", md: "[[*you, she, your parents…*]]" }, { titre: "Base verbale", md: "Le verbe sans marque : *[[go, buy, do]]*." }, { titre: "Complément et ?", md: "[[*What did you do yesterday?* *Did your parents buy a new car?*]]" }] },
            { t: "texte", md: "Dans *[[What did you do yesterday?]]*, le premier mot *[[did]]* est l'**auxiliaire** (il indique le passé), le second *[[do]]* est le **verbe faire**. Les deux sont nécessaires !\n\nLes réponses courtes reprennent [[did]] : *[[Yes, I did. / No, they didn't.]]*" },
            { t: "attention", md: "[[Did]] ne s'emploie **jamais** avec [[be]]. À la question *[[Were you at home?]]*, on répond *[[Yes, I was]]* ou *[[No, I wasn't]]*, et non « [[No, I didn't]] »." },
            { t: "verifie", q: "Quelle question est correcte ?", choix: ["[[Did you went to the party?]]", "[[Did you go to the party?]]", "[[Went you to the party?]]", "[[Do you went to the party?]]"], bonne: 1, explication: "Question au prétérit : [[Did]] + sujet + base verbale. Le verbe [[go]] reste à la base, puisque [[did]] porte déjà le passé." },
            { t: "exemple", titre: "Le récit de la fête", md: "*[[Did you go to the party? — Yes, I did. I went with Tom. We ate pizza and we sang karaoke, but Tom didn't dance.]]*\n\n(Tu es allé à la fête ? — Oui. J'y suis allé avec Tom. On a mangé de la pizza et chanté au karaoké, mais Tom n'a pas dansé.)" },
          ],
        },
      ],
      bilan: "Affirmation : le prétérit irrégulier, appris par cœur. Négation et question : did ou didn't, et le verbe revient à la base. Une seule marque du passé, jamais deux.",
    },
    "5e-anglais-04-describing-people": {
      accroche: "Au marché de Camden, à Londres, Amy a perdu son petit frère dans la foule. Le policier lui demande : « What does he look like? » Pour qu'on le retrouve vite, elle doit le décrire avec précision : sa taille, ses cheveux, ses vêtements.",
      objectifs: [
        "Décrire le physique et les vêtements d'une personne",
        "Parler du caractère avec des adjectifs variés",
        "Respecter l'ordre des adjectifs et distinguer look like et be like",
      ],
      sections: [
        {
          titre: "Le physique : taille, cheveux, yeux",
          blocs: [
            { t: "tableau", titre: "Les mots du portrait physique", entetes: ["Pour décrire…", "Mots utiles"], lignes: [["la taille", "[[tall]] (grand), [[short]] (petit), [[of medium height]] (de taille moyenne)"], ["la silhouette", "[[slim]] (mince), [[thin]] (maigre), [[plump]] (rondelet), [[strong]] (costaud)"], ["la longueur des cheveux", "[[long, short, shoulder-length]] (mi-longs)"], ["la forme des cheveux", "[[straight]] (raides), [[wavy]] (ondulés), [[curly]] (bouclés)"], ["la couleur des cheveux", "[[blond / fair]] (blonds), [[dark, brown]] (châtains), [[red / ginger]] (roux), [[grey]]"], ["les yeux", "[[blue, green, brown, grey eyes]]"], ["les détails", "[[glasses]] (lunettes), [[a beard]] (une barbe), [[freckles]] (taches de rousseur)"]] },
            { t: "propriete", titre: "Cheveux et yeux avec [[have got]]", md: "Les cheveux et les yeux se décrivent avec **[[have got]]** : *[[She has got long curly hair. He has got blue eyes.]]*\n\n**[[Hair]]** (la chevelure) est **indénombrable** : pas de -s, pas de *[[a]]*. On peut aussi utiliser **[[with]]** : *[[a tall boy with short hair]]*." },
            { t: "attention", md: "« [[She has got blond hairs]] » est faux. *[[Hairs]]* désigne des cheveux ou des poils comptés un par un : *[[There are two hairs in my soup!]]* Pour la chevelure, dis toujours *[[hair]]*." },
            { t: "verifie", q: "Complète : « [[My mother ___ long dark hair.]] »", choix: ["[[is]]", "[[has got]]", "[[have got]]"], bonne: 1, explication: "On décrit les cheveux avec [[have got]]. Avec [[my mother]] (= [[she]]), c'est [[has got]]." },
          ],
        },
        {
          titre: "Le caractère : qualités et défauts",
          blocs: [
            { t: "tableau", titre: "Des adjectifs et leurs contraires", entetes: ["Qualité", "Sens", "Contraire", "Sens"], lignes: [["[[hard-working]]", "travailleur", "[[lazy]]", "paresseux"], ["[[generous]]", "généreux", "[[selfish]]", "égoïste"], ["[[polite]]", "poli", "[[rude]]", "impoli, malpoli"], ["[[kind]]", "gentil", "[[mean]]", "méchant"], ["[[friendly]]", "sympathique, amical", "[[moody]]", "lunatique, grognon"], ["[[talkative]]", "bavard", "[[shy]]", "timide"], ["[[clever]]", "intelligent", "[[silly]]", "bête"], ["[[funny]]", "drôle", "[[boring]]", "ennuyeux"]] },
            { t: "astuce", md: "Nuance ton portrait avec un adverbe : *[[very]]* (très), *[[really]]* (vraiment), *[[quite]]* (assez), *[[a bit]]* (un peu). *[[A bit]]* s'emploie surtout pour les défauts : *[[She's very funny but a bit shy.]]*\n\nFaux ami : *[[brave]]* signifie « courageux », et non « gentil » comme dans « un brave homme »." },
            { t: "exemple", titre: "Trouver l'adjectif juste", md: "« *[[She never helps anyone and only thinks about herself.]]* » Elle n'aide jamais personne et ne pense qu'à elle : elle est ***[[selfish]]***." },
            { t: "verifie", q: "Quel adjectif est le contraire de « [[hard-working]] » ?", choix: ["[[clever]]", "[[lazy]]", "[[kind]]", "[[brave]]"], bonne: 1, explication: "[[Hard-working]] signifie travailleur ; son contraire est [[lazy]], paresseux." },
          ],
        },
        {
          titre: "Les vêtements",
          blocs: [
            { t: "texte", md: "Pour la tenue : *[[a T-shirt]]*, *[[a shirt]]* (une chemise), *[[a jumper]]* (un pull), *[[a coat]]* (un manteau), *[[a dress]]* (une robe), *[[a skirt]]* (une jupe), *[[a cap]]* (une casquette), *[[jeans]]*, *[[trousers]]* (un pantalon), *[[shorts]]*, *[[trainers]]* (des baskets), *[[boots]]* (des bottes).\n\nPour dire ce qu'une personne **porte en ce moment**, on utilise **[[be + wearing]]** : *[[Today Tom **is wearing** a black T-shirt and blue jeans.]]*" },
            { t: "propriete", titre: "Toujours au pluriel", md: "**[[Trousers]]**, **[[jeans]]** et **[[shorts]]** sont toujours au pluriel, car ils ont deux jambes : *[[My jeans **are** blue.]]* Pour en compter un, on dit *[[a pair of trousers]]*, *[[two pairs of jeans]]*." },
          ],
        },
        {
          titre: "L'ordre des adjectifs, [[look like]] et [[be like]]",
          blocs: [
            { t: "propriete", titre: "L'adjectif anglais", md: "Il est **invariable** (jamais de -s) et se place **avant** le nom : *[[two tall girls]]*, jamais « [[two talls girls]] » ni « [[two girls talls]] ».\n\nQuand il y en a plusieurs, on suit l'ordre : **opinion → taille → âge → couleur → nom**." },
            { t: "schema", titre: "L'ordre des adjectifs", legende: "Du plus subjectif (ce que tu en penses) au plus objectif (la couleur), puis le nom.", svg: `<svg viewBox="0 0 400 200"><text class="texte-petit" x="48" y="48" text-anchor="middle">opinion</text><text class="texte-petit" x="124" y="48" text-anchor="middle">taille</text><text class="texte-petit" x="200" y="48" text-anchor="middle">âge</text><text class="texte-petit" x="276" y="48" text-anchor="middle">couleur</text><text class="texte-petit" x="352" y="48" text-anchor="middle">nom</text><rect class="aplat" x="12" y="58" width="72" height="40" rx="6"/><rect class="aplat" x="88" y="58" width="72" height="40" rx="6"/><rect class="aplat" x="164" y="58" width="72" height="40" rx="6"/><rect class="aplat" x="240" y="58" width="72" height="40" rx="6"/><rect class="aplat-fort" x="316" y="58" width="72" height="40" rx="6"/><text class="texte" x="48" y="83" text-anchor="middle">beautiful</text><text class="texte" x="124" y="83" text-anchor="middle">big</text><text class="texte" x="200" y="83" text-anchor="middle">old</text><text class="texte" x="276" y="83" text-anchor="middle">red</text><text class="texte" x="352" y="83" text-anchor="middle">car</text><line class="trait-fin" x1="20" y1="120" x2="380" y2="120" marker-end="url(#fl)"/><text class="texte-main" x="200" y="155" text-anchor="middle">a beautiful big old red car</text><text class="texte-petit" x="200" y="182" text-anchor="middle">une belle grosse vieille voiture rouge</text></svg>` },
            { t: "tableau", titre: "[[Look like]] ou [[be like]] ?", entetes: ["Question", "On veut savoir…", "Réponse possible"], lignes: [["[[What does he **look like**?]]", "son **physique**", "[[He's tall with dark hair.]]"], ["[[What **is** he **like**?]]", "son **caractère**", "[[He's kind and funny.]]"], ["[[Who does he **look like**?]]", "à qui il ressemble", "[[He looks like his dad.]]"]] },
            { t: "verifie", q: "On te demande : « [[What is your brother like?]] ». Que veut-on savoir ?", choix: ["Ce qu'il aime", "Son caractère", "Son physique"], bonne: 1, explication: "[[What is he like?]] porte sur la personnalité. Pour le physique, on demande [[What does he look like?]] Et pour les goûts, [[What does he like?]]" },
            { t: "exemple", titre: "Le portrait d'Amy", md: "*[[My best friend Amy is tall and slim. She has got long wavy red hair and green eyes. She's wearing a blue dress and white trainers. She's very funny but a bit shy.]]*\n\n(Ma meilleure amie Amy est grande et mince. Elle a de longs cheveux roux ondulés et les yeux verts. Elle porte une robe bleue et des baskets blanches. Elle est très drôle mais un peu timide.)" },
          ],
        },
      ],
      bilan: "Have got pour les cheveux et les yeux, be wearing pour la tenue, des adjectifs invariables bien rangés : look like pour le physique, be like pour le caractère.",
    },
    "5e-anglais-05-comparatifs-superlatifs": {
      accroche: "Jack, de Londres, et sa cousine Emma, de Manchester, se disputent : quelle ville est la meilleure ? « London is bigger! » — « Yes, but Manchester is cheaper and friendlier! » Pour gagner un débat en anglais, il faut savoir comparer.",
      objectifs: [
        "Former le comparatif de supériorité avec -er ou more, suivi de than",
        "Former le superlatif avec the -est ou the most",
        "Utiliser good, bad, far et les structures as… as et less… than",
      ],
      sections: [
        {
          titre: "Les adjectifs courts : [[-er than]] et [[the -est]]",
          blocs: [
            { t: "definition", terme: "Adjectif court", md: "Un adjectif d'**une syllabe** (*[[tall, big, nice, cheap]]*) ou de **deux syllabes terminé par -y** (*[[happy, easy, funny]]*)." },
            { t: "propriete", titre: "Comparer avec un adjectif court", md: "• **Comparatif** : adjectif + **[[-er]]** + **[[than]]** : *[[Sam is taller than Amy.]]* (plus grand que)\n• **Superlatif** : **[[the]]** + adjectif + **[[-est]]** : *[[Sam is the tallest.]]* (le plus grand)" },
            { t: "schema", titre: "Une échelle de comparaison", legende: "[[Amy is taller than Tom. Sam is taller than Amy : Sam is the tallest of the three.]]", svg: `<svg viewBox="0 0 400 260"><line class="pointille" x1="60" y1="123" x2="350" y2="123"/><line class="trait" x1="30" y1="228" x2="370" y2="228"/><circle class="aplat" cx="90" cy="136" r="13"/><circle class="trait-fin" cx="90" cy="136" r="13" fill="none"/><rect class="aplat" x="74" y="152" width="32" height="76" rx="8"/><circle class="aplat" cx="200" cy="106" r="13"/><circle class="trait-fin" cx="200" cy="106" r="13" fill="none"/><rect class="aplat" x="184" y="122" width="32" height="106" rx="8"/><circle class="aplat-fort" cx="310" cy="70" r="13"/><circle class="trait-fin" cx="310" cy="70" r="13" fill="none"/><rect class="aplat-fort" x="294" y="86" width="32" height="142" rx="8"/><text class="texte" x="90" y="110" text-anchor="middle">tall</text><text class="texte" x="200" y="80" text-anchor="middle">taller</text><text class="texte-pigment" x="310" y="44" text-anchor="middle">the tallest</text><text class="texte-main" x="90" y="250" text-anchor="middle">Tom</text><text class="texte-main" x="200" y="250" text-anchor="middle">Amy</text><text class="texte-main" x="310" y="250" text-anchor="middle">Sam</text></svg>` },
            { t: "tableau", titre: "L'orthographe des adjectifs courts", entetes: ["Cas", "Adjectif", "Comparatif", "Superlatif"], lignes: [["cas général", "[[tall, cheap]]", "[[taller, cheaper]]", "[[the tallest, the cheapest]]"], ["finit par -e", "[[nice, large]]", "[[nicer, larger]]", "[[the nicest, the largest]]"], ["1 voyelle + 1 consonne", "[[big, hot, thin]]", "[[bigger, hotter, thinner]]", "[[the biggest, the hottest, the thinnest]]"], ["finit par -y", "[[happy, easy, funny]]", "[[happier, easier, funnier]]", "[[the happiest, the easiest, the funniest]]"]] },
            { t: "verifie", q: "Complète : « [[My brother is ___ than me.]] »", choix: ["[[tall]]", "[[taller]]", "[[more tall]]", "[[tallest]]"], bonne: 1, explication: "[[Tall]] est un adjectif court : comparatif en [[-er]], suivi de [[than]]. [[My brother is taller than me.]]" },
          ],
        },
        {
          titre: "Les adjectifs longs : [[more]] et [[the most]]",
          blocs: [
            { t: "propriete", titre: "Comparer avec un adjectif long", md: "Pour les adjectifs de **deux syllabes ou plus** (sauf ceux en -y) : *[[interesting, beautiful, expensive, famous, modern]]*.\n\n• **Comparatif** : **[[more]]** + adjectif + **[[than]]** : *[[This film is more interesting than the book.]]*\n• **Superlatif** : **[[the most]]** + adjectif : *[[Edinburgh is the most beautiful city in the UK.]]*" },
            { t: "exemple", titre: "[[For me, English is ___ (interesting) subject at school.]]", etapes: ["[[Interesting]] a quatre syllabes ([[in-te-res-ting]]) : c'est un adjectif long.", "On compare à toutes les autres matières : superlatif.", "[[*For me, English is **the most interesting** subject at school.*]]"] },
            { t: "attention", md: "On ne combine **jamais** les deux formes : « [[more better]] », « [[more taller]] » ou « [[the most biggest]] » sont des erreurs. C'est soit [[-er]], soit [[more]]. Un francophone dit « plus meilleur » quand il est fatigué… en anglais, c'est la même faute !" },
            { t: "verifie", q: "Complète : « [[This film is ___ than the book.]] » ([[exciting]])", choix: ["[[excitinger]]", "[[more exciting]]", "[[the most exciting]]", "[[more excitinger]]"], bonne: 1, explication: "[[Exciting]] a trois syllabes : comparatif avec [[more… than]]. Le superlatif [[the most]] ne convient pas, puisqu'on compare deux choses." },
          ],
        },
        {
          titre: "Les irréguliers : [[good, bad, far]]",
          blocs: [
            { t: "tableau", titre: "Trois adjectifs à part", entetes: ["Adjectif", "Comparatif", "Superlatif"], lignes: [["[[good]] (bon)", "**[[better]]** (meilleur)", "**[[the best]]** (le meilleur)"], ["[[bad]] (mauvais)", "**[[worse]]** (pire)", "**[[the worst]]** (le pire)"], ["[[far]] (loin)", "**[[further]]** (plus loin)", "**[[the furthest]]** (le plus loin)"]] },
            { t: "exemple", titre: "[[Emma is ___ (good) student in the class and Jack is ___ (bad).]]", etapes: ["Emma est comparée à toute la classe : superlatif.", "[[good → *the best* ; bad → *the worst*.]]", "[[*Emma is the best student in the class and Jack is the worst.*]]"] },
            { t: "astuce", md: "Un petit dicton anglais pour retenir l'ordre : *[[Good, better, best, never let it rest, till your good is better and your better is best!]]*" },
          ],
        },
        {
          titre: "Égalité, infériorité et superlatif",
          blocs: [
            { t: "propriete", titre: "Aussi… que, moins… que", md: "• **Égalité** : **[[as]]** + adjectif + **[[as]]** : *[[She is as tall as her brother.]]* (aussi grande que)\n• **Négation** : **[[not as]]** + adjectif + **[[as]]** : *[[The train is not as fast as the plane.]]* (moins rapide que)\n• **Infériorité** : **[[less]]** + adjectif + **[[than]]**, surtout avec les adjectifs longs : *[[less expensive than]]* (moins cher que)." },
            { t: "texte", md: "Après un superlatif, on indique le lieu ou le groupe avec **[[in]]** : *[[the biggest city in the world]]*, *[[the oldest in the class]]*. Dire « [[the oldest of the class]] » est maladroit. On garde *[[of]]* pour un nombre : *[[the best of the three]]*." },
            { t: "verifie", q: "Que signifie « [[The train is not as fast as the plane]] » ?", choix: ["Le train est aussi rapide que l'avion", "Le train est moins rapide que l'avion", "Le train est plus rapide que l'avion"], bonne: 1, explication: "[[Not as… as]] est la négation de l'égalité : le train n'est pas aussi rapide, donc il est moins rapide que l'avion." },
            { t: "etapes", titre: "Choisir la bonne forme en 4 questions", items: [{ titre: "Irrégulier ?", md: "[[good, bad, far : better / the best, worse / the worst, further / the furthest.]]" }, { titre: "Combien de syllabes ?", md: "Une syllabe ou deux en -y : adjectif court. Sinon : adjectif long." }, { titre: "Court", md: "[[-er than / the -est]], en vérifiant l'orthographe ([[bigger, happier]])." }, { titre: "Long", md: "[[more… than / the most…]]" }] },
            { t: "exemple", titre: "Jack et Emma comparent leurs villes", md: "*[[London is bigger than Manchester, but Manchester is cheaper. For me, Edinburgh is the most beautiful city in the UK. The weather there is worse, though!]]*\n\n(Londres est plus grande que Manchester, mais Manchester est moins chère. Pour moi, Édimbourg est la plus belle ville du Royaume-Uni. Le temps y est pire, cela dit !)" },
          ],
        },
      ],
      bilan: "Court : -er than, the -est. Long : more than, the most. Good, bad, far à part. Et jamais more better !",
    },
    "5e-anglais-06-food-quantities": {
      accroche: "Dimanche matin à York, dans sa famille d'accueil, Hugo découvre son premier full English breakfast : œufs, bacon, saucisses, haricots à la sauce tomate, toasts… et une question : « Would you like some tea? » Pour manger et commander à l'anglaise, il faut savoir ce qui se compte… et ce qui ne se compte pas.",
      objectifs: [
        "Distinguer les noms dénombrables et indénombrables",
        "Utiliser some, any, much, many, a lot of, how much et how many",
        "Commander au restaurant, suivre une recette et connaître les repas britanniques",
      ],
      sections: [
        {
          titre: "Ce qu'on compte et ce qu'on ne compte pas",
          blocs: [
            { t: "definition", terme: "Dénombrable ou indénombrable", md: "Un nom **dénombrable** désigne ce que l'on peut compter un par un : *[[an apple, two eggs, three bananas]]*. Un nom **indénombrable** désigne une matière ou une masse : *[[water, milk, bread, rice, cheese, sugar, butter, money]]*." },
            { t: "tableau", titre: "Dénombrables et indénombrables", entetes: ["Dénombrables", "Indénombrables"], lignes: [["[[an apple, two apples]]", "[[water]]"], ["[[an egg, six eggs]]", "[[milk]]"], ["[[a carrot, some carrots]]", "[[rice]]"], ["[[a banana, a lot of bananas]]", "[[bread]]"], ["[[a sandwich, two sandwiches]]", "[[cheese, butter]]"], ["[[a biscuit, some biscuits]]", "[[sugar, money]]"]] },
            { t: "propriete", titre: "Un indénombrable ne prend ni [[a]] ni -s", md: "On dit *[[some bread]]*, jamais « [[a bread]] » ni « [[breads]] ». Pour compter un indénombrable, on utilise une **unité** : *[[a slice of bread]]* (une tranche), *[[a glass of water]]*, *[[a cup of tea]]*, *[[a bottle of milk]]*, *[[a piece of cheese]]*, *[[a bowl of rice]]*." },
            { t: "attention", md: "« [[I'd like a bread, please]] » est faux : en anglais, *[[bread]]* ne se compte pas. Demande *[[some bread]]* ou *[[a loaf of bread]]* (une miche, un pain entier)." },
            { t: "verifie", q: "Quel nom est indénombrable ?", choix: ["[[apple]]", "[[egg]]", "[[rice]]", "[[carrot]]"], bonne: 2, explication: "On ne compte pas les grains de riz un par un : [[rice]] est indénombrable. On dit [[some rice]] ou [[a bowl of rice.]]" },
          ],
        },
        {
          titre: "[[Some, any, much, many, a lot of]]",
          blocs: [
            { t: "tableau", titre: "Les quantifieurs", entetes: ["Mot", "Avec…", "Quand ?", "Exemple"], lignes: [["[[**some**]]", "pluriel et indénombrable", "affirmation, offre", "[[There is some cheese. Would you like some tea?]]"], ["[[**any**]]", "pluriel et indénombrable", "négation, question", "[[There isn't any butter. Have you got any eggs?]]"], ["[[**much**]]", "indénombrable", "surtout négation, question", "[[I haven't got much time.]]"], ["[[**many**]]", "dénombrable pluriel", "surtout négation, question", "[[I haven't got many friends in this town.]]"], ["[[**a lot of**]]", "tous les noms", "partout", "[[a lot of water, a lot of bananas]]"], ["[[**how much**]]", "indénombrable", "quantité ou prix", "[[How much milk? How much is it?]]"], ["[[**how many**]]", "dénombrable pluriel", "nombre", "[[How many eggs do we need?]]"]] },
            { t: "astuce", md: "Dans une **offre polie**, on emploie *[[some]]* même dans une question : *[[Would you like some tea?]]* On s'attend à un « oui ». Et *[[How much is it?]]* signifie tout simplement « Combien ça coûte ? »." },
            { t: "exemple", titre: "[[Have you got ___ bananas? Yes, I've got ___ of bananas, but I haven't got ___ time to make a cake.]]", etapes: ["Question avec un pluriel : *[[any bananas]]*.", "Une grande quantité, phrase affirmative : *[[a lot of bananas]]*.", "Négation avec un indénombrable (*[[time]]*) : *[[much time]]*.", "[[*Have you got any bananas? Yes, I've got a lot of bananas, but I haven't got much time to make a cake.*]]"] },
            { t: "verifie", q: "Complète : « [[How ___ sugar do you want in your tea?]] »", choix: ["[[many]]", "[[much]]", "[[any]]", "[[lot]]"], bonne: 1, explication: "[[Sugar]] est indénombrable : on demande la quantité avec [[how much.]] [[How many]] irait avec un pluriel : [[how many sugar lumps]] (morceaux de sucre)." },
          ],
        },
        {
          titre: "Les repas britanniques",
          blocs: [
            { t: "texte", md: "Une journée britannique compte trois repas : **[[breakfast]]** (le petit déjeuner), **[[lunch]]** (le déjeuner, souvent un sandwich vite avalé) et **[[dinner]]** (le dîner, vers 18 h ou 19 h). Dans le nord de l'Angleterre, beaucoup appellent le repas du soir *[[tea]]* !\n\nLe **[[full English breakfast]]** est un petit déjeuner chaud et copieux : *[[eggs, bacon, sausages, baked beans]]* (haricots à la sauce tomate), *[[grilled tomatoes, mushrooms and toast]]*. Le week-end, on prend parfois un **[[afternoon tea]]** : du thé, des *[[scones]]* avec de la confiture et de la crème, des petits gâteaux.\n\nPlats célèbres : **[[fish and chips]]** (poisson pané et frites), **[[roast beef]]** (rôti du dimanche) et **[[shepherd's pie]]** (hachis d'agneau recouvert de purée)." },
            { t: "savais-tu", md: "*[[Shepherd]]* signifie berger : la vraie *[[shepherd's pie]]* est donc faite avec de l'agneau. Avec du bœuf, les Britanniques l'appellent *[[cottage pie]]*." },
            { t: "etapes", titre: "[[Recipe: pancakes for Pancake Day]]", items: [{ titre: "[[Mix]]", md: "*[[Mix 100 g of flour, two eggs and 300 ml of milk.]]* (Mélange…)" }, { titre: "[[Whisk]]", md: "*[[Whisk until smooth.]]* (Fouette jusqu'à ce que ce soit lisse.)" }, { titre: "[[Heat]]", md: "*[[Heat a little butter in a pan.]]* (Fais chauffer…)" }, { titre: "[[Pour]]", md: "*[[Pour some batter into the pan.]]* (Verse un peu de pâte.)" }, { titre: "[[Flip]]", md: "*[[Flip the pancake after one minute.]]* (Retourne la crêpe.)" }, { titre: "[[Serve]]", md: "*[[Serve with lemon and sugar.]]* (Sers avec du citron et du sucre.)" }] },
          ],
        },
        {
          titre: "Au restaurant",
          blocs: [
            { t: "propriete", titre: "Commander poliment", md: "Pour demander : **[[Can I have…, please?]]** ou **[[I'd like…]]** (= *[[I would like]]*, je voudrais). Le serveur propose : **[[Would you like…?]]** Quand il te tend quelque chose : **[[Here you are.]]** Pour payer : **[[The bill, please.]]**\n\nÉvite « [[I want…]] » : en anglais, cela sonne très impoli." },
            { t: "exemple", titre: "Dans un [[fish and chips]] de Brighton", md: "*[[Waiter: Are you ready to order?]]*\n*[[Hugo: Yes. Can I have fish and chips, please?]]*\n*[[Waiter: Would you like some water?]]*\n*[[Hugo: No, thanks. How much is it?]]*\n*[[Waiter: It's eight pounds fifty.]]*\n\n(Huit livres cinquante : la monnaie britannique est la livre sterling, *[[the pound]]*.)" },
            { t: "verifie", q: "Au restaurant, que demandes-tu à la fin du repas pour payer ? « [[The ___, please.]] »", choix: ["[[note]]", "[[bill]]", "[[addition]]", "[[ticket]]"], bonne: 1, explication: "L'addition se dit [[the bill]] en anglais britannique ([[the check]] aux États-Unis). « [[Addition]] » en anglais veut dire… une addition en maths !" },
          ],
        },
      ],
      bilan: "Some pour affirmer et offrir, any pour nier et questionner, much avec ce qui ne se compte pas, many avec ce qui se compte. Et au restaurant : Can I have…, please ?",
    },
    "5e-anglais-07-town-directions": {
      accroche: "Premier jour à Bath pour Hugo. Il doit retrouver Leo à la bibliothèque, mais son téléphone n'a plus de batterie. Une seule solution : demander son chemin à une passante. « Excuse me, how can I get to the library? »",
      objectifs: [
        "Nommer les lieux de la ville et les moyens de transport",
        "Situer avec there is, there are et les prépositions de lieu",
        "Demander et indiquer un chemin avec l'impératif",
      ],
      sections: [
        {
          titre: "Les lieux de la ville",
          blocs: [
            { t: "tableau", titre: "[[In town]]", entetes: ["En anglais", "En français"], lignes: [["[[the railway station]]", "la gare"], ["[[the bus stop]]", "l'arrêt de bus"], ["[[the post office]]", "la poste"], ["[[the police station]]", "le commissariat"], ["[[the town hall]]", "la mairie"], ["[[the library]]", "la bibliothèque"], ["[[the bookshop]]", "la librairie"], ["[[the chemist's]]", "la pharmacie"], ["[[the bakery]]", "la boulangerie"], ["[[the zebra crossing]]", "le passage piéton"], ["[[the traffic lights]]", "les feux"]] },
            { t: "attention", md: "Faux ami ! *[[The library]]* est la **bibliothèque**, où l'on emprunte des livres. La **librairie**, où l'on en achète, se dit *[[the bookshop]]*." },
            { t: "savais-tu", md: "Dans *[[the chemist's]]*, l'apostrophe remplace un mot sous-entendu : *[[the chemist's shop]]*, la boutique du pharmacien. C'est pareil pour *[[the baker's]]* ou *[[the butcher's]]* (la boucherie)." },
          ],
        },
        {
          titre: "[[There is, there are]] et les prépositions",
          blocs: [
            { t: "propriete", titre: "Dire ce qu'il y a", md: "**[[There is]]** + singulier ou indénombrable : *[[There is a park.]]* **[[There are]]** + pluriel : *[[There are two banks.]]*\n\nQuestion : *[[Is there a swimming pool near here?]]* — *[[Yes, there is.]]* / *[[Are there any shops?]]* — *[[No, there aren't.]]*" },
            { t: "tableau", titre: "Situer un lieu", entetes: ["Préposition", "Sens", "Exemple"], lignes: [["[[next to]]", "à côté de", "[[The library is next to the post office.]]"], ["[[opposite]]", "en face de", "[[It's opposite the bank.]]"], ["[[between]]", "entre", "[[The bakery is between the bank and the church.]]"], ["[[behind]]", "derrière", "[[The pool is behind the school.]]"], ["[[in front of]]", "devant", "[[Meet me in front of the cinema.]]"], ["[[on the corner of]]", "à l'angle de", "[[The bank is on the corner of King Street.]]"], ["[[near]]", "près de", "[[Is there a bank near here?]]"]] },
            { t: "verifie", q: "Complète : « [[___ two cinemas in my town.]] »", choix: ["[[There is]]", "[[There are]]", "[[It is]]", "[[They are]]"], bonne: 1, explication: "[[Two cinemas]] est un pluriel : on emploie [[there are.]] [[There is]] irait avec un singulier : [[there is a cinema.]]" },
          ],
        },
        {
          titre: "Demander et indiquer son chemin",
          blocs: [
            { t: "texte", md: "Pour **demander**, commence toujours par *[[Excuse me]]* : *[[Excuse me, how can I get to the station?]]* / *[[Where is the museum, please?]]* / *[[Is there a bank near here?]]*\n\nPour **répondre**, on donne des ordres… très polis : c'est l'impératif." },
            { t: "propriete", titre: "L'impératif", md: "C'est la **base verbale, sans sujet** : *[[Go straight on]]* (allez tout droit), *[[Turn left / right]]* (tournez à gauche / à droite), *[[Take the second street on the left]]* (prenez la deuxième rue à gauche), *[[Cross the road]]* (traversez), *[[Go past the church]]* (passez devant l'église). Pour finir : *[[It's on your right.]]*\n\nNégation : **[[Don't]]** + base verbale : *[[Don't turn left!]]*" },
            { t: "schema", titre: "Le chemin de Hugo jusqu'à la bibliothèque", legende: "[[Go straight on, take the second street on the left. The library is on your left, opposite the bank, next to the post office.]]", svg: `<svg viewBox="0 0 400 310"><rect class="aplat" x="20" y="20" width="165" height="80" rx="4"/><rect class="aplat" x="215" y="20" width="165" height="80" rx="4"/><rect class="aplat" x="20" y="125" width="165" height="65" rx="4"/><rect class="aplat" x="215" y="125" width="165" height="65" rx="4"/><rect class="aplat" x="20" y="215" width="165" height="70" rx="4"/><rect class="aplat" x="215" y="215" width="165" height="70" rx="4"/><rect class="aplat-papier" x="30" y="58" width="80" height="36"/><rect class="trait-fin" x="30" y="58" width="80" height="36" fill="none"/><text class="texte-petit" x="70" y="80" text-anchor="middle">BANK</text><rect class="aplat-papier" x="250" y="40" width="70" height="52"/><rect class="trait-fin" x="250" y="40" width="70" height="52" fill="none"/><line class="trait-fin" x1="285" y1="26" x2="285" y2="40"/><line class="trait-fin" x1="279" y1="31" x2="291" y2="31"/><text class="texte-petit" x="285" y="70" text-anchor="middle">Church</text><rect class="aplat-fort" x="26" y="131" width="78" height="36"/><text class="texte-petit" x="65" y="153" text-anchor="middle">LIBRARY</text><rect class="aplat-papier" x="110" y="131" width="72" height="36"/><rect class="trait-fin" x="110" y="131" width="72" height="36" fill="none"/><text class="texte-petit" x="146" y="153" text-anchor="middle">Post office</text><circle class="trait-fin" cx="250" cy="155" r="10" fill="none"/><circle class="trait-fin" cx="280" cy="165" r="10" fill="none"/><circle class="trait-fin" cx="310" cy="150" r="10" fill="none"/><text class="texte-petit" x="345" y="172" text-anchor="middle">Park</text><rect class="aplat-papier" x="30" y="225" width="80" height="36"/><rect class="trait-fin" x="30" y="225" width="80" height="36" fill="none"/><text class="texte-petit" x="70" y="247" text-anchor="middle">Bakery</text><rect class="aplat-papier" x="290" y="225" width="80" height="36"/><rect class="trait-fin" x="290" y="225" width="80" height="36" fill="none"/><text class="texte-petit" x="330" y="247" text-anchor="middle">Chemist's</text><text class="texte-petit" x="300" y="117" text-anchor="middle">Mill Lane</text><text class="texte-petit" x="300" y="207" text-anchor="middle">King Street</text><text class="texte-petit" x="196" y="262" text-anchor="middle" transform="rotate(-90 196 262)">Station Road</text><path class="pointille" d="M207 290 L207 112 L72 112" fill="none" stroke="var(--pigment)" marker-end="url(#fl-p)"/><text class="texte-main" x="160" y="207" text-anchor="middle">1st</text><circle cx="207" cy="292" r="5" fill="var(--pigment)"/><text class="texte-pigment" x="207" y="306" text-anchor="middle">You are here</text></svg>` },
            { t: "exemple", titre: "[[Excuse me, how can I get to the library?]]", etapes: ["[[*Go straight on* along Station Road.]]", "Ne prends pas la première rue (*[[the first street]]*, [[King Street]]) : continue tout droit.", "*[[Take the second street on the left]]* : c'est [[Mill Lane]].", "[[*The library is on your left. It's opposite the bank, next to the post office.*]]", "Hugo : *[[Thank you!]]* — *[[You're welcome!]]*"] },
            { t: "verifie", q: "Que signifie « [[Go past the church]] » ?", choix: ["Entrez dans l'église", "Passez devant l'église", "Faites le tour de l'église"], bonne: 1, explication: "[[Go past]] signifie passer devant, dépasser, sans s'arrêter. Entrer se dirait [[go into the church.]]" },
          ],
        },
        {
          titre: "Se déplacer en ville",
          blocs: [
            { t: "propriete", titre: "[[By bus, on foot]]", md: "Pour un moyen de transport, on emploie **[[by]]**, sans article : *[[by bus, by car, by train, by bike, by plane, by underground]]*. Une seule exception : **[[on foot]]** (à pied).\n\n« Je prends le bus » se dit *[[I take the bus]]* ou *[[I go by bus]]*." },
            { t: "verifie", q: "Complète : « [[I go to school ___ bus, but my sister goes ___ foot.]] »", choix: ["[[by / by]]", "[[in / on]]", "[[by / on]]", "[[with / by]]"], bonne: 2, explication: "[[By]] pour tous les moyens de transport ([[by bus]]), mais [[on foot]] pour la marche à pied." },
            { t: "savais-tu", md: "Le métro de Londres, surnommé **[[the Tube]]** (ou *[[the Underground]]*), est le plus ancien du monde : sa première ligne a ouvert en **1863**. À chaque arrêt, une voix rappelle : *[[Mind the gap!]]* (Attention à l'espace entre le train et le quai !)" },
          ],
        },
      ],
      bilan: "Excuse me, how can I get to… ? Puis go straight on, turn left, take the second street on the right : avec there is, les prépositions et l'impératif, tu ne te perdras plus.",
    },
    "5e-anglais-08-weather-hobbies": {
      accroche: "« What's the weather like in Scotland? » demande Hugo à Fiona, qui vit à Glasgow. Elle éclate de rire : « It's often rainy and windy, but I love it! In summer, I usually go hiking. » La météo et les loisirs : les deux sujets de conversation préférés des Britanniques.",
      objectifs: [
        "Décrire la météo et nommer les saisons",
        "Employer play, do et go avec les sports et les loisirs",
        "Exprimer tes goûts avec like + -ing et placer les adverbes de fréquence",
      ],
      sections: [
        {
          titre: "Quel temps fait-il ?",
          blocs: [
            { t: "propriete", titre: "Parler du temps qu'il fait", md: "Question : **[[What's the weather like?]]** Réponse : **[[It's]]** + adjectif : *[[It's sunny. It's cold.]]*\n\nPour ce qui se passe **en ce moment**, on dit *[[It's raining]]* (il pleut), *[[It's snowing]]* (il neige). Pour la température : *[[It's 20 degrees.]]*" },
            { t: "tableau", titre: "La météo", entetes: ["[[It's…]]", "Sens"], lignes: [["[[sunny]]", "il y a du soleil"], ["[[cloudy]]", "c'est nuageux"], ["[[rainy]]", "c'est pluvieux"], ["[[windy]]", "il y a du vent"], ["[[foggy]]", "il y a du brouillard"], ["[[snowy]]", "c'est neigeux"], ["[[hot / warm]]", "il fait chaud / doux"], ["[[cold / freezing]]", "il fait froid / glacial"]] },
            { t: "attention", md: "« [[It makes cold]] » est un calque du français « il fait froid ». En anglais, le temps **est** : *[[**It's** cold. **It's** hot.]]*" },
            { t: "texte", md: "Les quatre saisons : **[[spring]]** (printemps), **[[summer]]** (été), **[[autumn]]** (automne, *[[fall]]* aux États-Unis), **[[winter]]** (hiver). On dit **[[in]]** : *[[in spring, in winter]]*." },
            { t: "verifie", q: "Comment dit-on « Il fait froid » ?", choix: ["[[It makes cold.]]", "[[It's cold.]]", "[[It has cold.]]"], bonne: 1, explication: "Pour la météo, on emploie [[it's]] + adjectif : [[it's cold.]] Le verbe [[make]] ne s'utilise jamais pour parler du temps." },
          ],
        },
        {
          titre: "[[Play, do]] ou [[go]] ?",
          blocs: [
            { t: "tableau", titre: "Trois verbes pour les loisirs", entetes: ["Verbe", "Avec…", "Exemples"], lignes: [["[[**play**]]", "un sport de balle ou un jeu", "[[play football, play tennis, play chess, play video games]]"], ["[[**do**]]", "une activité sans balle, un art martial", "[[do judo, do karate, do gymnastics, do athletics]]"], ["[[**go**]]", "une activité en -ing", "[[go swimming, go skiing, go cycling, go hiking, go shopping]]"]] },
            { t: "exemple", titre: "Appliquer la règle", etapes: ["*[[My sister **does** gymnastics on Wednesdays.]]* (pas de balle → [[do]], avec -es à la 3e personne)", "*[[In winter we **go** skiing]]* (activité en -ing → [[go]])…", "*… [[and in summer we **play** tennis.]]* (balle → [[play]])"] },
            { t: "verifie", q: "Complète : « [[My sister ___ gymnastics on Wednesdays.]] »", choix: ["[[plays]]", "[[does]]", "[[goes]]", "[[makes]]"], bonne: 1, explication: "La gymnastique se pratique sans balle : on emploie [[do]]. Avec [[my sister]] (= [[she]]), [[do]] devient [[does]]." },
          ],
        },
        {
          titre: "Dire ce que tu aimes : [[like]] + -ing",
          blocs: [
            { t: "propriete", titre: "Les verbes de goût", md: "Après **[[like, love, enjoy, hate]]** et **[[don't mind]]** (ça ne me dérange pas), le verbe qui suit prend **-ing** : *[[I love swimming. She hates doing homework. We enjoy playing chess.]]*\n\nOrthographe : *[[swim → swimming, get → getting]]* (on double la consonne) ; *[[ride → riding]]* (on enlève le e)." },
            { t: "attention", md: "« [[I like swim]] » est faux. Un verbe qui suit *[[like]]* prend **-ing** : *[[I like swimming.]]*" },
          ],
        },
        {
          titre: "Combien de fois ? Les adverbes de fréquence",
          blocs: [
            { t: "schema", titre: "L'échelle de la fréquence", legende: "De [[never]] (jamais) à [[always]] (toujours) : un adverbe de fréquence dit à quel point une habitude est régulière.", svg: `<svg viewBox="0 0 400 170"><rect class="aplat" x="30" y="76" width="340" height="18" rx="9"/><line class="trait-fin" x1="30" y1="85" x2="370" y2="85"/><circle cx="30" cy="85" r="6" fill="var(--encre)"/><circle cx="64" cy="85" r="6" fill="var(--pigment)"/><circle cx="166" cy="85" r="6" fill="var(--pigment)"/><circle cx="268" cy="85" r="6" fill="var(--pigment)"/><circle cx="319" cy="85" r="6" fill="var(--pigment)"/><circle cx="370" cy="85" r="6" fill="var(--encre)"/><text class="texte" x="30" y="62" text-anchor="middle">never</text><text class="texte-petit" x="30" y="44" text-anchor="middle">0 %</text><text class="texte" x="166" y="62" text-anchor="middle">sometimes</text><text class="texte-petit" x="166" y="44" text-anchor="middle">parfois</text><text class="texte" x="319" y="62" text-anchor="middle">usually</text><text class="texte-petit" x="319" y="44" text-anchor="middle">d'habitude</text><text class="texte" x="64" y="118" text-anchor="middle">rarely</text><text class="texte-petit" x="64" y="136" text-anchor="middle">rarement</text><text class="texte" x="268" y="118" text-anchor="middle">often</text><text class="texte-petit" x="268" y="136" text-anchor="middle">souvent</text><text class="texte" x="370" y="118" text-anchor="middle">always</text><text class="texte-petit" x="370" y="136" text-anchor="middle">100 %</text></svg>` },
            { t: "propriete", titre: "Où placer l'adverbe ?", md: "L'adverbe de fréquence se place **avant le verbe** : *[[I **often** play tennis.]]* Mais **après [[be]]** : *[[She is **never** late. He is **always** happy.]]*" },
            { t: "texte", md: "Pour demander la fréquence : [[**How often** do you go swimming?]] Réponses : *[[every day]]* (tous les jours), *[[once a week]]* (une fois par semaine), *[[twice a month]]* (deux fois par mois), *[[three times a year]]* (trois fois par an)." },
            { t: "exemple", titre: "[[My brother hates ___ (get) up early, so he is ___]] (jamais) [[ready on time.]]", etapes: ["Après *[[hates]]* : verbe en -ing, avec doublement → *[[getting]]*.", "Jamais → *[[never]]*, placé **après** [[is]].", "[[*My brother hates getting up early, so he is never ready on time.*]]"] },
            { t: "verifie", q: "Où place-t-on « [[always]] » dans « [[He is late]] » ?", choix: ["[[Always he is late.]]", "[[He always is late.]]", "[[He is always late.]]", "[[He is late always.]]"], bonne: 2, explication: "Avec le verbe [[be]], l'adverbe de fréquence se place juste après : [[He is always late.]]" },
          ],
        },
      ],
      bilan: "It's sunny, it's raining ; play avec une balle, do sans balle, go avec -ing ; I love + -ing ; l'adverbe avant le verbe, mais après be.",
    },
    "5e-anglais-09-future": {
      accroche: "Dernier jour de cours avant l'été, à Cardiff. Megan annonce fièrement : « Next summer, I'm going to visit Ireland! » Son ami Owen sourit : « I think it'll be amazing. Don't forget, you'll send me a postcard! » Deux façons de parler de l'avenir dans la même conversation : à toi de savoir les choisir.",
      objectifs: [
        "Exprimer un projet ou une intention avec be going to",
        "Faire une prédiction ou une promesse avec will",
        "Choisir entre going to et will, et utiliser les marqueurs du futur",
      ],
      sections: [
        {
          titre: "[[Be going to]] : les projets décidés",
          blocs: [
            { t: "propriete", titre: "Former [[be going to]]", md: "**[[Be]]** ([[am, is, are]]) + **[[going to]]** + **base verbale**. On l'emploie pour un **projet déjà décidé**, une intention : *[[I'm going to visit my cousins next week.]]* (Je vais rendre visite à mes cousins.)" },
            { t: "tableau", titre: "[[Be going to]] à toutes les formes", entetes: ["Sujet", "Affirmation", "Négation", "Question"], lignes: [["[[I]]", "[[I'm going to play]]", "[[I'm not going to play]]", "[[Am I going to play?]]"], ["[[he / she / it]]", "[[she's going to play]]", "[[she isn't going to play]]", "[[Is she going to play?]]"], ["[[you / we / they]]", "[[we're going to play]]", "[[we aren't going to play]]", "[[Are you going to play?]]"]] },
            { t: "texte", md: "[[Going to]] sert aussi quand on **voit venir** quelque chose, grâce à un indice présent : *[[Look at the clouds! It's going to rain.]]* (Regarde les nuages ! Il va pleuvoir.)\n\nPour parler des projets de quelqu'un, c'est la question idéale : *[[What are you going to do this weekend?]]* (Qu'est-ce que tu vas faire ce week-end ?)" },
            { t: "verifie", q: "Complète : « [[Next weekend, we ___ visit our grandparents.]] »", choix: ["[[are going to]]", "[[is going to]]", "[[going to]]", "[[will to]]"], bonne: 0, explication: "Avec [[we]], [[be]] se conjugue [[are]] : [[we are going to visit.]] Il ne faut pas oublier [[be]], et [[will]] n'est jamais suivi de [[to]]." },
          ],
        },
        {
          titre: "[[Will]] : prédictions et promesses",
          blocs: [
            { t: "propriete", titre: "Former [[will]]", md: "**[[Will]]** + **base verbale**, avec la **même forme** à toutes les personnes. Contractions : *[[I'll, you'll, she'll, we'll, they'll]]*. Négation : **[[won't]]** (= *[[will not]]*). Question : *[[Will you come?]]*" },
            { t: "liste", titre: "Quand emploie-t-on [[will]] ?", items: ["Une **prédiction**, une opinion sur l'avenir : *[[I think it will be sunny tomorrow. In 2050, people won't drive cars.]]*", "Une **promesse** : *[[I'll call you tomorrow.]]* (Je t'appellerai demain.)", "Une **offre** d'aide : *[[Don't worry, I'll help you with your homework.]]*", "Une **décision prise sur le moment** : *[[The phone is ringing! — I'll answer it.]]*"] },
            { t: "attention", md: "Après *[[will]]* et *[[going to]]*, le verbe reste à la **base verbale** : *[[she will go]]*, jamais « [[she will goes]] » ni « [[she will to go]] »." },
            { t: "verifie", q: "Quelle est la forme négative de « [[will]] » ?", choix: ["[[willn't]]", "[[won't]]", "[[don't will]]", "[[will no]]"], bonne: 1, explication: "[[Will not]] se contracte en [[won't]], une forme irrégulière à apprendre : [[I won't be late.]]" },
          ],
        },
        {
          titre: "[[Going to]] ou [[will]] ?",
          blocs: [
            { t: "schema", titre: "Deux chemins vers le futur", legende: "[[Going to]] : la décision a été prise avant de parler. [[Will]] : on décide ou on prédit au moment où l'on parle.", svg: `<svg viewBox="0 0 400 210"><line class="trait" x1="20" y1="110" x2="385" y2="110" marker-end="url(#fl)"/><line class="trait" x1="170" y1="92" x2="170" y2="128"/><text class="texte-main" x="170" y="86" text-anchor="middle">now</text><text class="texte-petit" x="60" y="134" text-anchor="middle">past</text><text class="texte-petit" x="362" y="134" text-anchor="middle">future</text><circle cx="80" cy="110" r="5" fill="var(--pigment)"/><circle cx="300" cy="110" r="7" fill="var(--encre)"/><path class="trait-fin" d="M80 102 Q190 10 296 100" fill="none" marker-end="url(#fl-p)"/><text class="texte-pigment" x="190" y="26" text-anchor="middle">going to</text><text class="texte-petit" x="190" y="42" text-anchor="middle">projet décidé avant</text><path class="pointille" d="M172 118 Q235 168 294 118" fill="none" marker-end="url(#fl)"/><text class="texte-pigment" x="235" y="172" text-anchor="middle">will</text><text class="texte-petit" x="235" y="190" text-anchor="middle">décision sur le moment, prédiction</text></svg>` },
            { t: "tableau", titre: "Choisir la bonne forme", entetes: ["Situation", "Forme", "Exemple"], lignes: [["projet déjà décidé", "[[going to]]", "[[I'm going to visit Ireland next summer.]]"], ["indice visible maintenant", "[[going to]]", "[[Look at those black clouds! It's going to rain.]]"], ["prédiction, opinion ([[I think…]])", "[[will]]", "[[I think it will rain tomorrow.]]"], ["promesse, offre", "[[will]]", "[[Don't worry, I'll send you a postcard!]]"], ["décision sur le moment", "[[will]]", "[[I'm hungry. — I'll make you a sandwich.]]"]] },
            { t: "verifie", q: "« [[Look at those black clouds! It ___ rain.]] » Quelle forme est la plus naturelle ?", choix: ["[[will]]", "[[is going to]]", "[[goes to]]"], bonne: 1, explication: "On voit un indice concret (les nuages noirs) : on emploie [[be going to.]] [[Will]] conviendrait pour une simple opinion : [[I think it will rain tomorrow.]]" },
          ],
        },
        {
          titre: "Les marqueurs du futur",
          blocs: [
            { t: "texte", md: "Pour situer l'action dans l'avenir : *[[tomorrow]]* (demain), *[[tonight]]* (ce soir), *[[this weekend]]* (ce week-end), *[[next week / month / year]]* (la semaine prochaine…), *[[in two days]]* (dans deux jours), *[[soon]]* (bientôt), *[[one day]]* (un jour), *[[in 2050]]*." },
            { t: "attention", md: "On dit ***[[next week]]***, sans *[[the]]* : « [[I'm going to go to the cinema the next week]] » est faux. Et « dans deux jours » se dit *[[**in** two days]]*, pas « [[after two days]] »." },
            { t: "exemple", titre: "Deux dialogues", md: "*[[Next summer, I'm going to visit Ireland with my family. I think it'll be amazing. Don't worry, I'll send you a postcard!]]*\n\n*[[Will you come to my birthday party on Saturday? — Sorry, I can't. I'm going to visit my aunt in Leeds.]]*\n\n(L'été prochain, je vais visiter l'Irlande avec ma famille. Je pense que ce sera génial. Ne t'inquiète pas, je t'enverrai une carte postale ! — Tu viendras à mon anniversaire samedi ? — Désolé, je ne peux pas. Je vais rendre visite à ma tante à Leeds.)" },
          ],
        },
      ],
      bilan: "Un projet déjà décidé ou un indice visible : be going to. Une prédiction, une promesse, une décision sur le moment : will. Et toujours la base verbale derrière.",
    },
    "5e-anglais-10-modaux": {
      accroche: "Premier jour dans une école anglaise pour Hugo. Sur le mur, un panneau : « School rules: You must be on time. You mustn't use your phone in class. » Son ami Leo le rassure : « Don't worry, you don't have to wear a tie on Fridays! » Règles, conseils, permissions : place aux modaux.",
      objectifs: [
        "Exprimer l'obligation et l'interdiction avec must, mustn't et have to",
        "Donner un conseil avec should et shouldn't",
        "Exprimer la capacité et la permission avec can et could",
      ],
      sections: [
        {
          titre: "Les modaux, des verbes pas comme les autres",
          blocs: [
            { t: "definition", terme: "Modal", md: "Un petit verbe (**must, should, can, could, will**) qui ajoute une nuance au verbe qui le suit : obligation, conseil, capacité, permission. Il obéit à trois règles :\n1. **jamais de -s** à la 3e personne : *she can*, *he must* ;\n2. **pas de to** après lui : *you must go* ;\n3. **pas de do** dans les questions et les négations : *Can she swim? She can't swim.*" },
            { t: "tableau", titre: "Les modaux à toutes les formes", entetes: ["Modal", "Affirmation", "Négation", "Question"], lignes: [["can", "She can swim.", "She can't swim.", "Can she swim?"], ["could", "I could read at five.", "I couldn't swim.", "Could you help me?"], ["must", "You must be on time.", "You mustn't run.", "Must I wear a tie?"], ["should", "You should rest.", "You shouldn't eat so many sweets.", "Should I call him?"]] },
            { t: "attention", md: "« She must wears a helmet », « She must to wear » et « Does she can swim? » sont trois erreurs. La bonne forme : *She must wear a helmet. Can she swim?*" },
          ],
        },
        {
          titre: "Obligation et interdiction : must, mustn't, have to",
          blocs: [
            { t: "propriete", titre: "Must ou have to ?", md: "• **Must** : une obligation forte, une règle, un ordre : *You must wear a uniform.*\n• **Mustn't** : une **interdiction** : *You mustn't run in the corridors.* *Pupils must not use their phones in class.*\n• **Have to / has to** : une obligation qui vient de l'extérieur (horaires, travail) : *I have to get up at 6. My dad has to work on Saturdays.* Ce n'est pas un modal : il prend un -s et se construit avec do." },
            { t: "schema", titre: "De l'obligation à l'interdiction", legende: "Au milieu de l'échelle, don't have to : tu fais comme tu veux. Tout à droite, mustn't : c'est interdit.", svg: `<svg viewBox="0 0 400 180"><text class="texte" x="20" y="22">à faire</text><text class="texte" x="200" y="22" text-anchor="middle">au choix</text><text class="texte" x="388" y="22" text-anchor="end">interdit</text><rect class="aplat" x="20" y="90" width="360" height="16" rx="8"/><line class="trait-fin" x1="20" y1="98" x2="380" y2="98"/><circle cx="36" cy="98" r="6" fill="var(--pigment)"/><circle cx="110" cy="98" r="6" fill="var(--pigment)"/><circle cx="160" cy="98" r="6" fill="var(--pigment)"/><circle cx="200" cy="98" r="6" fill="var(--encre)"/><circle cx="250" cy="98" r="6" fill="var(--pigment)"/><circle cx="364" cy="98" r="6" fill="var(--pigment)"/><text class="texte-petit" x="36" y="60" text-anchor="middle">obligation</text><text class="texte" x="36" y="78" text-anchor="middle">must</text><text class="texte-petit" x="160" y="60" text-anchor="middle">conseil</text><text class="texte" x="160" y="78" text-anchor="middle">should</text><text class="texte-petit" x="250" y="60" text-anchor="middle">déconseillé</text><text class="texte" x="250" y="78" text-anchor="middle">shouldn't</text><text class="texte" x="110" y="128" text-anchor="middle">have to</text><text class="texte-petit" x="110" y="144" text-anchor="middle">obligation (règle)</text><text class="texte-pigment" x="200" y="160" text-anchor="middle">don't have to</text><text class="texte-petit" x="200" y="174" text-anchor="middle">pas obligé</text><text class="texte" x="388" y="128" text-anchor="end">mustn't</text><text class="texte-petit" x="388" y="144" text-anchor="end">interdiction</text></svg>` },
            { t: "attention", md: "**Don't have to** ne veut **pas** dire « il ne faut pas » ! *You don't have to come* = tu n'es pas obligé de venir. *You mustn't come* = tu n'as pas le droit de venir. « You mustn't do your homework tonight » et « You don't have to do your homework tonight » ont donc des sens très différents." },
            { t: "verifie", q: "« You don't have to wear a uniform » signifie :", choix: ["Tu ne dois pas porter d'uniforme (c'est interdit).", "Tu n'es pas obligé de porter un uniforme.", "Tu dois porter un uniforme."], bonne: 1, explication: "Don't have to exprime l'absence d'obligation : tu peux en porter un, ou pas. L'interdiction se dirait you mustn't." },
            { t: "exemple", titre: "Le règlement de la bibliothèque", md: "*In the library, you **must** be quiet and you **mustn't** eat.* (Tu dois être silencieux et tu n'as pas le droit de manger.)" },
          ],
        },
        {
          titre: "Conseiller : should et shouldn't",
          blocs: [
            { t: "propriete", titre: "Donner un conseil", md: "**Should** + base verbale = « tu devrais » : *You should sleep more.* **Shouldn't** = « tu ne devrais pas » : *You shouldn't eat so many sweets.* C'est plus doux que must : on conseille, on n'oblige pas." },
            { t: "exemple", titre: "Ton ami a mauvaise mine", etapes: ["*You look tired.* (Tu as l'air fatigué.)", "Conseil : *You **should** go to bed earlier…*", "… et ce qu'il vaut mieux éviter : *and you **shouldn't** play video games all night.*", "Pour un mal de tête : *You should lie down and drink some water.*"] },
            { t: "verifie", q: "Ton ami a mal à la tête. Que lui conseilles-tu ?", choix: ["You should lie down and drink some water.", "You must play video games.", "You should to rest.", "You shoulds rest."], bonne: 0, explication: "Should + base verbale exprime le conseil. « should to rest » et « shoulds » sont fautifs : un modal ne prend ni to ni -s." },
          ],
        },
        {
          titre: "Capacité et permission : can et could",
          blocs: [
            { t: "propriete", titre: "Can et could", md: "• **Can** : la capacité (*I can swim*) ou la permission (*Can I go out?*).\n• **Can't** : l'incapacité (*My little brother can't swim yet*) ou l'interdiction (*You can't park here*).\n• **Could** : la capacité dans le passé (*When I was five, I could already read*) ou une **demande polie** (*Could you help me with my bag, please?*)." },
            { t: "astuce", md: "Du plus familier au plus poli : *Can I…?* → *Could I…?* → *May I…?* Pour demander un service à un adulte, choisis **could** : *Could you close the door, please?* (Pourrais-tu fermer la porte, s'il te plaît ?)" },
            { t: "attention", md: "Pour dire que tu es d'accord, dis **I agree** (*I agree with you*). « I am agree » est une erreur typique des francophones : *agree* est un verbe, pas un adjectif. Pas d'accord : *I don't agree* ou *I disagree*." },
          ],
        },
      ],
      bilan: "Must pour la règle, mustn't pour l'interdit, don't have to quand c'est au choix, should pour conseiller, can et could pour pouvoir. Et un modal ne prend jamais ni -s, ni to, ni do.",
    },
    "5e-anglais-11-english-speaking-world": {
      accroche: "Ce soir, Leo participe à un appel vidéo avec des correspondants de Dublin, Toronto, Sydney et Mumbai. Quatre accents, quatre fuseaux horaires… et une seule langue pour se comprendre. L'anglais est parlé sur tous les continents : partons en voyage.",
      objectifs: [
        "Situer les pays anglophones, leurs capitales et leurs symboles",
        "Distinguer le Royaume-Uni, la Grande-Bretagne et l'Irlande",
        "Connaître les grandes fêtes et les monuments emblématiques",
      ],
      sections: [
        {
          titre: "Le Royaume-Uni et l'Irlande",
          blocs: [
            { t: "texte", md: "Le **United Kingdom** (UK) réunit **quatre nations** : *England* (capitale London), *Scotland* (Edinburgh), *Wales*, le pays de Galles (Cardiff), et *Northern Ireland* (Belfast). Son drapeau, **the Union Jack**, superpose les croix de saint Georges (Angleterre), saint André (Écosse) et saint Patrick (Irlande).\n\nÀ côté, la **République d'Irlande** (*Ireland*) est un pays indépendant, qui ne fait **pas** partie du Royaume-Uni. Capitale : Dublin. Symbole : le trèfle (*the shamrock*) et la couleur verte." },
            { t: "carte", fond: "monde", titre: "Le Royaume-Uni et l'Irlande", cadre: [-11, 49.5, 2.5, 61], zones: ["GB", "IE"], reperes: [{ nom: "London", lat: 51.507, lon: -0.128 }, { nom: "Edinburgh", lat: 55.953, lon: -3.188 }, { nom: "Cardiff", lat: 51.481, lon: -3.179 }, { nom: "Belfast", lat: 54.597, lon: -5.930 }, { nom: "Dublin", lat: 53.350, lon: -6.260 }], legende: "Les quatre capitales du Royaume-Uni et Dublin, capitale de la République d'Irlande." },
            { t: "definition", terme: "Great Britain ou United Kingdom ?", md: "**Great Britain** est une **île** : elle porte l'Angleterre, l'Écosse et le pays de Galles. **The United Kingdom** est un **pays** : la Grande-Bretagne **plus** l'Irlande du Nord. Les deux noms ne désignent donc pas exactement la même chose." },
            { t: "schema", titre: "Qui fait partie de quoi ?", legende: "L'île d'Irlande (en pointillés) est partagée : le nord appartient au Royaume-Uni, le reste forme la République d'Irlande.", svg: `<svg viewBox="0 0 400 240"><ellipse class="aplat" cx="150" cy="125" rx="140" ry="100"/><ellipse class="trait" cx="150" cy="125" rx="140" ry="100" fill="none"/><text class="texte-pigment" x="150" y="46" text-anchor="middle">the United Kingdom</text><ellipse class="aplat-papier" cx="120" cy="135" rx="88" ry="62"/><ellipse class="trait-fin" cx="120" cy="135" rx="88" ry="62" fill="none"/><text class="texte" x="120" y="98" text-anchor="middle">Great Britain</text><text class="texte-petit" x="120" y="122" text-anchor="middle">England (London)</text><text class="texte-petit" x="120" y="144" text-anchor="middle">Scotland (Edinburgh)</text><text class="texte-petit" x="120" y="166" text-anchor="middle">Wales (Cardiff)</text><ellipse class="pointille" cx="305" cy="130" rx="88" ry="70" fill="none"/><text class="texte-petit" x="255" y="120" text-anchor="middle">Northern</text><text class="texte-petit" x="255" y="134" text-anchor="middle">Ireland</text><text class="texte-petit" x="255" y="148" text-anchor="middle">(Belfast)</text><ellipse class="aplat-papier" cx="345" cy="130" rx="46" ry="48"/><ellipse class="trait-fin" cx="345" cy="130" rx="46" ry="48" fill="none"/><text class="texte-petit" x="345" y="120" text-anchor="middle">the Republic</text><text class="texte-petit" x="345" y="134" text-anchor="middle">of Ireland</text><text class="texte-petit" x="345" y="148" text-anchor="middle">(Dublin)</text><text class="texte-main" x="330" y="222" text-anchor="middle">island of Ireland</text></svg>` },
            { t: "verifie", q: "Quel pays ne fait PAS partie du Royaume-Uni ?", choix: ["Scotland", "Wales", "the Republic of Ireland", "Northern Ireland"], bonne: 2, explication: "La République d'Irlande, capitale Dublin, est indépendante depuis le XXe siècle. Seule l'Irlande du Nord (Belfast) fait partie du Royaume-Uni." },
          ],
        },
        {
          titre: "Un monde qui parle anglais",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quelques grands pays anglophones", zones: ["GB", "IE", "US", "CA", "AU", "NZ", "IN", "ZA"], reperes: [{ nom: "Washington D.C.", lat: 38.907, lon: -77.037 }, { nom: "Ottawa", lat: 45.421, lon: -75.697 }, { nom: "New Delhi", lat: 28.614, lon: 77.209 }, { nom: "Pretoria", lat: -25.747, lon: 28.229 }, { nom: "Canberra", lat: -35.281, lon: 149.130 }, { nom: "Wellington", lat: -41.286, lon: 174.776 }], legende: "Royaume-Uni, Irlande, États-Unis, Canada, Inde, Afrique du Sud, Australie, Nouvelle-Zélande, et quelques capitales." },
            { t: "tableau", titre: "Carte d'identité des pays anglophones", entetes: ["Pays", "Capitale", "Symbole", "À retenir"], lignes: [["the USA", "Washington D.C. (pas New York !)", "the bald eagle (pygargue)", "50 états ; drapeau the Stars and Stripes : 50 étoiles, 13 bandes"], ["Canada", "Ottawa", "the maple leaf (feuille d'érable)", "pays bilingue anglais-français"], ["Australia", "Canberra", "the kangaroo", "Sydney Opera House ; Uluru"], ["New Zealand", "Wellington", "the kiwi (oiseau)", "on y parle anglais et maori, la langue du peuple maori"], ["India", "New Delhi", "the Bengal tiger", "plus d'un milliard d'habitants ; Taj Mahal"], ["South Africa", "Pretoria (et Le Cap, Bloemfontein)", "the springbok (antilope)", "12 langues officielles ; Nelson Mandela"]] },
            { t: "verifie", q: "Quelle est la capitale des États-Unis ?", choix: ["New York", "Los Angeles", "Washington D.C.", "Chicago"], bonne: 2, explication: "New York est la plus grande ville des États-Unis, mais la capitale fédérale est Washington D.C., où se trouve la Maison-Blanche." },
            { t: "frise", titre: "Comment l'anglais a fait le tour du monde", evenements: [{ date: 1607, label: "Jamestown", detail: "Premier établissement anglais durable en Amérique du Nord, en Virginie." }, { date: 1707, label: "Naissance de la Grande-Bretagne", detail: "L'Angleterre (avec le pays de Galles) et l'Écosse s'unissent." }, { date: 1776, label: "Indépendance des États-Unis", detail: "Le 4 juillet, les 13 colonies proclament leur indépendance." }, { date: 1788, label: "La First Fleet à Sydney", detail: "Début de la colonisation britannique de l'Australie, terre des Aborigènes." }, { date: 1867, label: "Naissance du Canada", detail: "La Confédération canadienne est créée le 1er juillet." }, { date: 1922, label: "L'Irlande se sépare", detail: "Création de l'État libre d'Irlande ; l'Irlande du Nord reste britannique." }, { date: 1947, label: "Indépendance de l'Inde", detail: "Le 15 août ; l'anglais reste une langue officielle du pays." }, { date: 1994, label: "Mandela président", detail: "Fin de l'apartheid : Nelson Mandela devient président de l'Afrique du Sud." }] },
          ],
        },
        {
          titre: "Les grandes fêtes",
          blocs: [
            { t: "tableau", titre: "Le calendrier des fêtes anglophones", entetes: ["Fête", "Date", "Où ?", "Tradition"], lignes: [["Pancake Day (Shrove Tuesday)", "février ou mars, veille du Carême", "UK, Ireland", "on mange des crêpes, on fait des courses en les retournant"], ["St Patrick's Day", "17 March", "Ireland et dans le monde entier", "on porte du vert, on défile, le trèfle partout"], ["Independence Day", "4 July", "USA", "feux d'artifice, barbecues, drapeaux"], ["Halloween", "31 October", "USA, UK, Ireland", "déguisements, citrouilles, trick or treat"], ["Bonfire Night (Guy Fawkes Night)", "5 November", "UK", "feux de joie et feux d'artifice, en souvenir du complot de 1605"], ["Thanksgiving", "4e jeudi de novembre (USA), 2e lundi d'octobre (Canada)", "USA, Canada", "repas en famille : turkey (dinde) et tarte à la citrouille"]] },
            { t: "exemple", titre: "Trois fêtes, trois pays", md: "*On 17th March, people in Dublin wear green and celebrate St Patrick's Day. In November, American families eat turkey for Thanksgiving. In Britain, we eat pancakes on Shrove Tuesday!*\n\n(Le 17 mars, à Dublin, les gens s'habillent en vert pour la Saint-Patrick. En novembre, les familles américaines mangent de la dinde à Thanksgiving. En Grande-Bretagne, on mange des crêpes le jour de Mardi gras !)" },
            { t: "verifie", q: "Quand fête-t-on St Patrick's Day ?", choix: ["Le 4 juillet", "Le 17 mars", "Le 31 octobre", "Le 5 novembre"], bonne: 1, explication: "La Saint-Patrick, fête nationale irlandaise, a lieu le 17 mars. Le 4 juillet est l'Independence Day américain, le 31 octobre Halloween, le 5 novembre Bonfire Night." },
          ],
        },
        {
          titre: "Monuments et villes emblématiques",
          blocs: [
            { t: "tableau", titre: "Des monuments à reconnaître", entetes: ["Monument", "Où ?", "Ce que c'est"], lignes: [["Big Ben, Tower Bridge, Buckingham Palace", "London (UK)", "la cloche de l'horloge du Parlement, un pont levant, le palais du roi"], ["Stonehenge", "Angleterre (UK)", "un cercle de pierres préhistorique"], ["the Statue of Liberty", "New York (USA)", "statue offerte par la France, inaugurée en 1886"], ["the Golden Gate Bridge", "San Francisco (USA)", "le célèbre pont rouge, ouvert en 1937"], ["the Grand Canyon", "Arizona (USA)", "un immense canyon creusé par le fleuve Colorado"], ["Niagara Falls", "Canada et USA", "des chutes d'eau à la frontière"], ["Uluru", "Australia", "un rocher rouge sacré pour les Aborigènes"], ["the Taj Mahal", "Agra (India)", "un mausolée de marbre blanc du XVIIe siècle"]] },
            { t: "savais-tu", md: "**Big Ben** n'est pas le nom de la tour, mais celui de sa grosse **cloche**. Depuis 2012, la tour s'appelle officiellement *Elizabeth Tower*, en l'honneur de la reine Élisabeth II." },
          ],
        },
      ],
      bilan: "UK = England, Scotland, Wales et Northern Ireland ; l'Irlande est un autre pays. De Washington à Canberra, de St Patrick's Day à Thanksgiving, l'anglais relie des peuples très différents.",
    },
    "5e-anglais-12-legends-stories": {
      accroche: "Un soir d'orage, dans une maison des Highlands écossais, le grand-père de Fiona baisse la voix : « Once upon a time, in a dark lake not far from here… » Rois, chevaliers, hors-la-loi et monstres : les légendes britanniques se racontent depuis plus de mille ans, et toujours au prétérit.",
      objectifs: [
        "Connaître les personnages et les lieux des grandes légendes britanniques",
        "Utiliser le vocabulaire du récit et les connecteurs chronologiques",
        "Raconter une histoire courte au prétérit",
      ],
      sections: [
        {
          titre: "King Arthur et les chevaliers de la Table ronde",
          blocs: [
            { t: "texte", md: "Selon la légende, un jeune garçon nommé **Arthur** retire une épée plantée dans une pierre, ce que personne d'autre n'avait réussi à faire : il devient ainsi roi de Bretagne (l'actuelle Grande-Bretagne). Son épée magique s'appelle **Excalibur**. Il règne depuis son château de **Camelot**, conseillé par le magicien **Merlin**. Sa reine est **Guinevere**, et son plus célèbre chevalier, **Lancelot**.\n\nSes chevaliers s'assoient autour d'une table ronde, **the Round Table** : personne n'est en bout de table, tous sont égaux." },
            { t: "exemple", titre: "Le début de la légende", md: "*Once upon a time, there was a boy called Arthur. One day, he pulled a sword out of a stone. Suddenly, everyone understood: he was the true king. Finally, he became King of Britain.*\n\n(Il était une fois un garçon appelé Arthur. Un jour, il retira une épée d'une pierre. Soudain, tout le monde comprit : c'était le vrai roi. Finalement, il devint roi de Bretagne.)" },
            { t: "savais-tu", md: "Les légendes ne sont pas toutes d'accord ! Dans certaines versions, Excalibur n'est pas l'épée de la pierre : c'est un cadeau de la mystérieuse **Dame du Lac** (*the Lady of the Lake*)." },
            { t: "frise", titre: "Des légendes qui traversent les siècles", evenements: [{ date: 500, label: "L'époque supposée d'Arthur", detail: "Vers 500, un chef breton aurait combattu les Saxons. Aucune preuve qu'il ait existé." }, { date: 565, label: "Saint Columba et la bête", detail: "Selon un récit écrit vers 700, le moine Columba aurait chassé une bête de la rivière Ness." }, { date: 1136, label: "Geoffroy de Monmouth", detail: "Vers 1136, son Histoire des rois de Bretagne rend Arthur et Merlin célèbres." }, { date: 1377, label: "Les « rimes de Robin Hood »", detail: "Vers 1377, le poème Piers Plowman mentionne des chansons sur Robin Hood." }, { date: 1485, label: "Le Morte d'Arthur", detail: "Thomas Malory rassemble les aventures d'Arthur ; William Caxton imprime le livre." }, { date: 1933, label: "Nessie devient célèbre", detail: "Une nouvelle route longe le loch : les témoignages se multiplient dans les journaux." }, { date: 1934, label: "La « photo du chirurgien »", detail: "La plus célèbre photo de Nessie… dont le trucage sera avoué en 1994." }] },
            { t: "verifie", q: "Comment s'appelle l'épée du roi Arthur ?", choix: ["Durandal", "Excalibur", "Camelot", "Merlin"], bonne: 1, explication: "L'épée d'Arthur est Excalibur. Camelot est son château et Merlin son magicien. Durandal est l'épée de Roland, un héros français." },
          ],
        },
        {
          titre: "Robin Hood et le monstre du Loch Ness",
          blocs: [
            { t: "texte", md: "**Robin Hood** est un hors-la-loi (*an outlaw*), archer hors pair, qui vit caché dans **Sherwood Forest**, près de **Nottingham**. *He robbed the rich to give to the poor* : il volait les riches pour donner aux pauvres. Ses compagnons : **Little John**, le moine **Friar Tuck** et **Maid Marian**. Son ennemi juré : **the Sheriff of Nottingham**.\n\n**Nessie**, le monstre du **Loch Ness**, vivrait dans un lac profond et sombre des **Highlands**, en **Écosse**, près d'Inverness. *Loch* signifie « lac » en gaélique écossais. Le lac mesure environ 37 km de long : de quoi cacher bien des mystères !" },
            { t: "carte", fond: "monde", titre: "Les lieux des légendes", cadre: [-8, 49.8, 2.5, 59], zones: ["GB"], reperes: [{ nom: "Tintagel (naissance d'Arthur selon la légende)", lat: 50.668, lon: -4.759 }, { nom: "Glastonbury (l'île d'Avalon ?)", lat: 51.148, lon: -2.714 }, { nom: "Sherwood Forest", lat: 53.204, lon: -1.072 }, { nom: "Loch Ness", lat: 57.300, lon: -4.450 }], legende: "Arthur en Cornouailles et dans le Somerset, Robin Hood dans les Midlands, Nessie dans les Highlands." },
            { t: "attention", md: "Ne place pas le Loch Ness au pays de Galles : il se trouve en **Écosse**. Le mot *loch* est d'ailleurs un indice : on ne le trouve que dans les noms écossais (et *lough* en Irlande)." },
            { t: "tableau", titre: "Qui est qui ?", entetes: ["Personnage", "Légende", "Rôle"], lignes: [["Merlin", "King Arthur", "le magicien, conseiller du roi"], ["Guinevere", "King Arthur", "la reine, épouse d'Arthur"], ["Lancelot", "King Arthur", "le meilleur chevalier de la Table ronde"], ["Little John", "Robin Hood", "le compagnon géant… au nom moqueur"], ["Friar Tuck", "Robin Hood", "le moine joyeux"], ["the Sheriff of Nottingham", "Robin Hood", "le méchant shérif, ennemi de Robin"], ["Nessie", "Loch Ness", "le monstre du lac"]] },
          ],
        },
        {
          titre: "Les mots du conte",
          blocs: [
            { t: "tableau", titre: "Le vocabulaire des légendes", entetes: ["Anglais", "Français"], lignes: [["once upon a time", "il était une fois"], ["a king / a queen", "un roi / une reine"], ["a knight", "un chevalier"], ["a sword", "une épée"], ["a castle", "un château"], ["a dragon", "un dragon"], ["a witch / a wizard", "une sorcière / un sorcier, un magicien"], ["brave / evil", "courageux / maléfique"], ["magic", "magique, la magie"]] },
            { t: "astuce", md: "Attention aux **lettres muettes** : dans *knight*, on n'entend ni le k ni le gh (/naɪt/, comme *night*) ; dans *sword*, le w est muet ; dans *castle*, le t ne se prononce pas." },
          ],
        },
        {
          titre: "Raconter une histoire au prétérit",
          blocs: [
            { t: "propriete", titre: "Les connecteurs du récit", md: "Ouverture : **Once upon a time** (il était une fois), **One day** (un jour).\nEnchaînement : **First** (d'abord), **Then** / **Next** (ensuite), **After that** (après cela).\nSurprise : **Suddenly** (soudain).\nFin : **Finally** / **In the end** (enfin, à la fin), et la formule magique : **They lived happily ever after.** (Ils vécurent heureux pour toujours.)" },
            { t: "etapes", titre: "Construire ton récit", items: [{ titre: "La situation", md: "*Once upon a time, there was a king who lived in a castle.*" }, { titre: "Le déclencheur", md: "*One day, he found a magic sword.*" }, { titre: "Les péripéties", md: "*Then he fought a dragon. After that, he crossed a dark forest.*" }, { titre: "Le coup de théâtre", md: "*Suddenly, a wizard appeared!*" }, { titre: "La fin", md: "*In the end, the king won and they lived happily ever after.*" }] },
            { t: "exemple", titre: "Mettre les verbes au prétérit", etapes: ["*One day, Arthur ___ (see) a sword in a stone.* → see est irrégulier : ***saw***.", "*He ___ (pull) it out* → régulier : ***pulled***.", "*and ___ (become) king.* → irrégulier : ***became***.", "*Robin Hood ___ (not / be) a bad man* → ***wasn't*** ; *he ___ (take) money from the rich and ___ (give) it to the poor* → ***took***, ***gave***."] },
            { t: "verifie", q: "Quel connecteur introduit un événement inattendu ?", choix: ["First", "Then", "Suddenly", "Finally"], bonne: 2, explication: "Suddenly (soudain) annonce une surprise. First, then et finally organisent simplement l'ordre des événements." },
            { t: "verifie", q: "Quelle phrase de récit est correcte ?", choix: ["Once upon a time, there was a king who lived in a castle.", "Once upon a time, there is a king who live in a castle.", "Once upon a time, there were a king who lived in a castle."], bonne: 0, explication: "Un récit se raconte au prétérit : there was (avec un singulier, a king) et lived (live + -d)." },
          ],
        },
      ],
      bilan: "Once upon a time… Un roi et son épée, un archer de Sherwood, un monstre écossais : avec le prétérit et quelques connecteurs, à toi de raconter. And they lived happily ever after!",
    },
  },
};
