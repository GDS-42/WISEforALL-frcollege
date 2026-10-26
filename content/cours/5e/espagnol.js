// ÉCLORE — Cours illustrés, 5e Espagnol (LV2, première année, niveau A1).
// Schéma : docs/COURS.md. Validation : node tools/validate-cours.mjs content/cours/5e/espagnol.js
export default {
  id: "5e-espagnol",
  chapitres: {
    "5e-espagnol-01-saluer-se-presenter": {
      accroche: "Premier jour à Séville. Dans la cour du collège, une fille te sourit : « ¡Hola! ¿Cómo te llamas? ». Avec quatre mots bien choisis, tu peux lui répondre, te présenter… et te faire ta première amie espagnole.",
      objectifs: [
        "Saluer, prendre congé et remercier selon le moment de la journée",
        "Te présenter : ton nom, ton âge, ton pays",
        "Prononcer les sons propres à l'espagnol et placer ¿ ¡ et les accents",
      ],
      sections: [
        {
          titre: "Dire bonjour… à la bonne heure",
          blocs: [
            { t: "texte", md: "En français, « bonjour » sert toute la journée. En espagnol, ==la salutation change avec le moment de la journée==. **[[Hola]]** (salut) marche tout le temps, avec tout le monde. Mais pour être poli avec un adulte, on choisit selon l'heure : **[[Buenos días]]** le matin, **[[Buenas tardes]]** l'après-midi, **[[Buenas noches]]** le soir et la nuit.\n\nRemarque : *[[días]]* est masculin, donc *[[buenos]]* ; *[[tardes]]* et *[[noches]]* sont féminins, donc *[[buenas]]*." },
            { t: "schema", titre: "Une journée de salutations", legende: "En Espagne, l'après-midi ([[la tarde]]) dure jusqu'au dîner, vers 21 h : on dit « [[Buenas tardes]] » très tard !", svg: `<svg viewBox="0 0 400 200"><line class="trait" x1="20" y1="130" x2="385" y2="130" marker-end="url(#fl)"/><line class="trait-fin" x1="140" y1="122" x2="140" y2="138"/><line class="trait-fin" x1="290" y1="122" x2="290" y2="138"/><text class="texte-petit" x="140" y="152" text-anchor="middle">vers 14 h</text><text class="texte-petit" x="290" y="152" text-anchor="middle">vers 21 h</text><circle class="aplat-fort" cx="80" cy="70" r="16"/><path class="trait-fin" d="M80 44 L80 36 M80 96 L80 104 M54 70 L46 70 M106 70 L114 70"/><circle class="aplat" cx="215" cy="62" r="20"/><circle class="trait" cx="215" cy="62" r="20"/><path class="aplat-fort" d="M345 52 a20 20 0 1 0 14 34 a16 16 0 1 1 -14 -34 Z"/><text class="texte-main" x="80" y="182" text-anchor="middle">Buenos días</text><text class="texte-main" x="215" y="182" text-anchor="middle">Buenas tardes</text><text class="texte-main" x="340" y="182" text-anchor="middle">Buenas noches</text><text class="texte-petit" x="80" y="120" text-anchor="middle">la mañana</text><text class="texte-petit" x="215" y="120" text-anchor="middle">la tarde</text><text class="texte-petit" x="340" y="120" text-anchor="middle">la noche</text></svg>` },
            { t: "tableau", titre: "Les formules de base", entetes: ["Espagnol", "Français", "Quand ?"], lignes: [["[[**¡Hola!**]]", "Salut ! / Bonjour !", "à tout moment"], ["[[**¿Qué tal?** / **¿Cómo estás?**]]", "Ça va ? / Comment vas-tu ?", "avec un ami"], ["[[**¿Cómo está usted?**]]", "Comment allez-vous ?", "avec un adulte (politesse)"], ["[[**Bien, gracias. ¿Y tú?**]]", "Bien, merci. Et toi ?", "pour répondre"], ["[[**Adiós** / **Hasta luego**]]", "Au revoir / À plus tard", "pour partir"], ["[[**Hasta mañana**]]", "À demain", "pour partir"], ["[[**Gracias** — **De nada**]]", "Merci — De rien", "pour remercier"], ["[[**Por favor**]]", "S'il te plaît / S'il vous plaît", "pour demander"]] },
            { t: "verifie", q: "Il est 9 h du matin. Tu entres dans une boulangerie de Madrid. Que dis-tu ?", choix: ["[[¡Buenas noches!]]", "[[¡Buenos días!]]", "[[¡Buenas tardes!]]", "[[¡Hasta luego!]]"], bonne: 1, explication: "Le matin, on dit **[[Buenos días]]**. *[[Buenas tardes]]* sert l'après-midi, *[[Buenas noches]]* le soir, et *[[Hasta luego]]* veut dire « à plus tard » : on le dit en partant." },
          ],
        },
        {
          titre: "Se présenter : nom, âge, pays",
          blocs: [
            { t: "texte", md: "Pour te présenter, trois phrases suffisent. Chacune répond à une question que tes nouveaux amis vont te poser." },
            { t: "tableau", titre: "Trois questions, trois réponses", entetes: ["Question", "Réponse", "Traduction"], lignes: [["[[¿Cómo te llamas?]]", "[[**Me llamo** Léa.]]", "Je m'appelle Léa."], ["[[¿Cuántos años tienes?]]", "[[**Tengo** doce años.]]", "J'ai douze ans."], ["[[¿De dónde eres?]]", "[[**Soy** de Francia, soy **francesa**.]]", "Je viens de France, je suis française."]] },
            { t: "propriete", titre: "L'âge se dit avec « [[tener]] » (avoir)", md: "Comme en français, on **a** un âge : **[[Tengo doce años]]** (j'ai 12 ans). On ne dit jamais *[[soy doce años]]*.\n\nLa nationalité, elle, se dit avec **[[ser]]** (être) et s'accorde : un garçon dit **[[soy francés]]**, une fille dit **[[soy francesa]]**." },
            { t: "exemple", titre: "Un premier dialogue", md: "— [[¡Hola! ¿Cómo te llamas?]]\n— [[Me llamo Pablo. ¿Y tú?]]\n— [[Soy Léa. Tengo doce años y soy francesa.]]\n— [[¡Encantado!]]\n\n*[[Encantado]]* (enchanté) devient *[[encantada]]* si c'est une fille qui parle. Pour parler d'un autre : **[[¿Cómo se llama?]]** — [[**Se llama** Pablo]] (il s'appelle Pablo)." },
            { t: "verifie", q: "Comment dit-on « J'ai 12 ans » ?", choix: ["[[Soy doce años.]]", "[[Tengo doce años.]]", "[[Estoy doce años.]]", "[[Me llamo doce años.]]"], bonne: 1, explication: "L'âge se dit avec **[[tener]]** (avoir) : *[[Tengo doce años]]*, exactement comme « j'ai 12 ans »." },
          ],
        },
        {
          titre: "Les sons de l'espagnol",
          blocs: [
            { t: "texte", md: "Bonne nouvelle : l'espagnol ==se lit presque comme il s'écrit==. Chaque lettre se prononce, et toujours de la même façon. Le **e** se dit « é » (*[[me]]* = « mé »), le **u** se dit « ou » (*[[mucho]]* = « moutcho »). Quelques sons sont nouveaux pour toi : apprends-les une fois pour toutes." },
            { t: "tableau", titre: "Les lettres qui changent", entetes: ["Lettre", "Se prononce", "Exemple"], lignes: [["**j**, et **g** devant e, i", "« jota » : un r raclé au fond de la gorge", "[[**J**orge, **g**ente, ro**j**o]]"], ["**ll** et **y**", "comme le « y » de *yoga*", "[[me **ll**amo, **y**o]]"], ["**ñ**", "comme « gn » dans *montagne*", "[[ma**ñ**ana, Espa**ñ**a]]"], ["**rr** (et **r** en début de mot)", "r roulé fort, du bout de la langue", "[[pe**rr**o, **R**osa]]"], ["**z**, et **c** devant e, i", "« th » anglais en Espagne, « s » en Amérique", "[[**z**umo, **c**inco]]"], ["**h**", "muet : on ne le prononce jamais", "[[**h**ola]] = « ola »"], ["**v**", "comme un « b » doux", "[[**v**ale, **v**iernes]]"], ["**ch**", "« tch »", "[[mu**ch**o, **ch**ocolate]]"]] },
            { t: "attention", md: "Les pièges des francophones :\n• **ll** n'est pas un « l » : *[[llamo]]* se dit « yamo », pas « lamo ».\n• **u** n'est jamais « u » : *[[tú]]* se dit « tou ».\n• **en**, **an**, **on** ne sont jamais nasaux : dans *[[encantado]]*, on entend bien les deux **n**.\n• Le **j** n'est jamais le « j » de *jour* : dans *[[Jorge]]*, le **j** et le **ge** se disent tous deux avec un souffle raclé, à peu près « khor-khé »." },
            { t: "savais-tu", md: "La lettre **ñ** est née au Moyen Âge : les moines copistes écrivaient « nn » et, pour gagner de la place sur le parchemin, posaient le second n au-dessus du premier. Le petit trait ondulé, le *tilde*, est ce n couché !" },
            { t: "verifie", q: "Comment se prononce le « ll » de « [[me llamo]] » ?", choix: ["Comme le « l » de « lit »", "Comme le « y » de « yoga »", "Comme le « gn » de « montagne »"], bonne: 1, explication: "**ll** se prononce comme le « y » de *yoga* : *[[me llamo]]* = « mé yamo ». Le son « gn », c'est la lettre **ñ**." },
          ],
        },
        {
          titre: "Écrire : ¿ ¡ et les accents",
          blocs: [
            { t: "propriete", titre: "Deux points d'interrogation, deux points d'exclamation", md: "En espagnol, une question **commence par ¿** et finit par **?**. Une exclamation commence par **¡** et finit par **!**. Ainsi, tu sais dès le début qu'il faut changer de ton : **[[¿Cómo te llamas?]]** **[[¡Hola!]]**" },
            { t: "texte", md: "L'**accent écrit** (*[[la tilde]]* : á, é, í, ó, ú) indique la syllabe qu'on prononce plus fort : **[[adiós]]**, **[[también]]**, **[[días]]**, **[[música]]**. Il est obligatoire : l'oublier, c'est une faute d'orthographe.\n\nLes mots interrogatifs portent toujours un accent dans une question : **[[¿Cómo?]]** (comment ?), **[[¿Qué?]]** (quoi ?), **[[¿Dónde?]]** (où ?). Parfois l'accent distingue deux mots : **[[tú]]** (toi) et **[[tu]]** (ton), **[[sí]]** (oui) et **[[si]]** (si)." },
            { t: "attention", md: "N'écris pas *[[Como te llamas?]]* : il manque le **¿** au début et l'accent sur *[[Cómo]]*. La bonne phrase : **[[¿Cómo te llamas?]]**" },
            { t: "astuce", md: "Un mot sans accent écrit qui finit par une **voyelle**, un **n** ou un **s** s'accentue sur l'avant-dernière syllabe : [[*ca*-sa, *ha*-blan]]. Les autres s'accentuent sur la dernière : [[ha-*blar*, pa-*pel*]]. Si le mot « désobéit », on met une tilde : [[a-*diós*]]." },
          ],
        },
      ],
      bilan: "Hola, me llamo…, tengo… años, soy de… : avec ¿ ¡ au début, la tilde à sa place et la jota bien raclée, tu peux déjà te présenter à 500 millions de personnes.",
    },

    "5e-espagnol-02-nombres-dates-heure": {
      accroche: "Mateo, 12 ans, habite à Mexico. Son anniversaire tombe le 12 octobre, et il a invité ses amis « a las cinco ». Pour arriver à l'heure à la fête et chanter « ¡Feliz cumpleaños! », il te faut les nombres, les dates… et l'heure.",
      objectifs: [
        "Compter de 0 à 100",
        "Dire la date : jours, mois, saisons, anniversaire",
        "Demander et dire l'heure",
      ],
      sections: [
        {
          titre: "Compter de 0 à 100",
          blocs: [
            { t: "texte", md: "Les quinze premiers nombres s'apprennent par cœur. Ensuite, tout se construit avec une logique simple : on colle ou on ajoute **[[y]]** (et)." },
            { t: "tableau", titre: "De 0 à 30", entetes: ["0 à 9", "10 à 19", "20 à 30"], lignes: [["0 [[cero]]", "10 [[diez]]", "20 [[veinte]]"], ["1 [[uno]]", "11 [[once]]", "21 [[veintiuno]]"], ["2 [[dos]]", "12 [[doce]]", "22 [[veintidós]]"], ["3 [[tres]]", "13 [[trece]]", "23 [[veintitrés]]"], ["4 [[cuatro]]", "14 [[catorce]]", "24 [[veinticuatro]]"], ["5 [[cinco]]", "15 [[quince]]", "25 [[veinticinco]]"], ["6 [[seis]]", "16 [[dieciséis]]", "26 [[veintiséis]]"], ["7 [[siete]]", "17 [[diecisiete]]", "27 [[veintisiete]]"], ["8 [[ocho]]", "18 [[dieciocho]]", "28 [[veintiocho]]"], ["9 [[nueve]]", "19 [[diecinueve]]", "29 [[veintinueve]] / 30 [[treinta]]"]] },
            { t: "propriete", titre: "Au-delà de 30 : trois mots", md: "Les dizaines : [[diez, veinte, **treinta**, **cuarenta**, **cincuenta**, **sesenta**, **setenta**, **ochenta**, **noventa**, **cien**]] (100).\n\nDe 16 à 29, on écrit **en un seul mot** : [[*dieciséis*, *veintiuno*]]. À partir de 31, on écrit **en trois mots** : dizaine + **[[y]]** + unité. *[[treinta y uno]]* (31), *[[cuarenta y cinco]]* (45), *[[noventa y nueve]]* (99)." },
            { t: "attention", md: "Ne confonds pas **[[seis]]** (6) et **[[siete]]** (7), ni **[[sesenta]]** (60) et **[[setenta]]** (70). Astuce : *[[sesenta]]* vient de *[[seis]]*, *[[setenta]]* vient de *[[siete]]* : le **t** de *[[siete]]* se retrouve dans *[[setenta]]*." },
            { t: "verifie", q: "Quel nombre est « [[treinta y siete]] » ?", choix: ["27", "37", "47", "73"], bonne: 1, explication: "*[[treinta]]* = 30 et *[[siete]]* = 7 : 30 + 7 = **37**. 73 se dirait *[[setenta y tres]]*." },
          ],
        },
        {
          titre: "Les jours, les mois, les saisons",
          blocs: [
            { t: "tableau", titre: "Le calendrier espagnol", entetes: ["Jours", "Mois (1 à 6)", "Mois (7 à 12)", "Saisons"], lignes: [["[[lunes]] (lundi)", "[[enero]]", "[[julio]]", "[[la primavera]] (printemps)"], ["[[martes]] (mardi)", "[[febrero]]", "[[agosto]]", "[[el verano]] (été)"], ["[[miércoles]] (mercredi)", "[[marzo]]", "[[septiembre]]", "[[el otoño]] (automne)"], ["[[jueves]] (jeudi)", "[[abril]]", "[[octubre]]", "[[el invierno]] (hiver)"], ["[[viernes]] (vendredi)", "[[mayo]]", "[[noviembre]]", "—"], ["[[sábado]] (samedi)", "[[junio]]", "[[diciembre]]", "—"], ["[[domingo]] (dimanche)", "—", "—", "—"]] },
            { t: "attention", md: "Pas de majuscule ! Comme en français, on écrit **[[lunes]]**, **[[enero]]**, **[[verano]]** en minuscules. Ce n'est pas comme en anglais (*[[en:Monday]]*, *[[en:January]]*)." },
            { t: "definition", terme: "Dire la date", md: "On dit le jour, le nombre, puis **[[de]]** + le mois : **[[Hoy es miércoles 12 de agosto]]** (aujourd'hui, nous sommes le mercredi 12 août). Pour l'anniversaire : **[[¿Cuándo es tu cumpleaños?]]** — **[[Mi cumpleaños es el 12 de octubre.]]**" },
            { t: "savais-tu", md: "Le 12 octobre est un jour férié en Espagne : la *[[Fiesta Nacional]]*. Ce jour-là, en 1492, Christophe Colomb arrivait aux Amériques. Et pour souhaiter un bon anniversaire, on chante *[[Cumpleaños feliz]]* !" },
          ],
        },
        {
          titre: "[[¿Qué hora es?]] Dire l'heure",
          blocs: [
            { t: "texte", md: "Pour demander l'heure : **[[¿Qué hora es?]]** Pour répondre, on utilise le verbe *[[ser]]*, et on pense « la » heure, *[[la hora]]*, au féminin.\n\n• Une heure : **[[Es la una]]** (singulier, car il n'y a qu'une heure).\n• À partir de deux heures : [[**Son las dos**, **son las tres**]]… (pluriel)." },
            { t: "schema", titre: "L'horloge espagnole", legende: "Sur la moitié droite du cadran, on ajoute ([[y]]) ; sur la moitié gauche, on part de l'heure suivante et on retire ([[menos]]). L'horloge indique 7 h 45 : [[son las ocho menos cuarto.]]", svg: `<svg viewBox="0 0 400 250"><path class="aplat" d="M130 35 A90 90 0 0 1 130 215 Z"/><circle class="trait" cx="130" cy="125" r="90"/><line class="pointille" x1="130" y1="28" x2="130" y2="222"/><text class="texte" x="130" y="55" text-anchor="middle">12</text><text class="texte" x="206" y="130" text-anchor="middle">3</text><text class="texte" x="130" y="205" text-anchor="middle">6</text><text class="texte" x="54" y="130" text-anchor="middle">9</text><line class="trait" x1="130" y1="125" x2="62" y2="125"/><line class="trait" x1="130" y1="125" x2="94" y2="152" stroke-width="4"/><circle class="aplat-fort" cx="130" cy="125" r="5"/><text class="texte-petit" x="130" y="18" text-anchor="middle">en punto</text><text class="texte-petit" x="226" y="112">y cuarto</text><text class="texte-petit" x="130" y="240" text-anchor="middle">y media</text><text class="texte-petit" x="34" y="112" text-anchor="end">menos</text><text class="texte-petit" x="34" y="125" text-anchor="end">cuarto</text><text class="texte-pigment" x="188" y="72">y</text><text class="texte-pigment" x="62" y="72">menos</text><text class="texte-main" x="315" y="105" text-anchor="middle">7 h 45</text><text class="texte" x="315" y="135" text-anchor="middle">Son las ocho</text><text class="texte" x="315" y="155" text-anchor="middle">menos cuarto</text></svg>` },
            { t: "tableau", titre: "Exemples à connaître", entetes: ["Heure", "En espagnol"], lignes: [["1 h 00", "[[Es la una (en punto)]]"], ["1 h 15", "[[Es la una y cuarto]]"], ["1 h 30", "[[Es la una y media]]"], ["3 h 30", "[[Son las tres y media]]"], ["5 h 10", "[[Son las cinco y diez]]"], ["7 h 45", "[[Son las ocho menos cuarto]]"], ["9 h 40", "[[Son las diez menos veinte]]"]] },
            { t: "exemple", titre: "Dire 7 h 45, pas à pas", etapes: ["Les minutes dépassent 30 : on passe à l'heure suivante, 8 h.", "On retire ce qui manque : 15 minutes = un quart, *[[cuarto]]*.", "8 se dit *[[ocho]]*, au pluriel : **[[Son las ocho menos cuarto]]**."] },
            { t: "verifie", q: "Comment dit-on « Il est 3 h 30 » ?", choix: ["[[Es la tres y media.]]", "[[Son las tres y media.]]", "[[Son las cuatro menos media.]]", "[[Son tres y treinta.]]"], bonne: 1, explication: "À partir de 2 h, on emploie le pluriel **[[son las]]** ; « et demie » se dit **[[y media]]** : *[[Son las tres y media]]*." },
          ],
        },
        {
          titre: "Donner un rendez-vous",
          blocs: [
            { t: "texte", md: "Pour dire **à** quelle heure se passe quelque chose, on ajoute **[[a]]** : **[[¿A qué hora es la fiesta?]]** — **[[A las cinco.]]** (À cinq heures.) Pour préciser le moment : *[[de la mañana]]* (du matin), *[[de la tarde]]* (de l'après-midi), *[[de la noche]]* (du soir).\n\n*[[La fiesta de Mateo es el sábado 12 de octubre, a las cinco de la tarde.]]* La fête de Mateo a lieu le samedi 12 octobre, à cinq heures de l'après-midi." },
            { t: "astuce", md: "Retiens la différence : **[[Son las cinco]]** = il est cinq heures (maintenant). **[[A las cinco]]** = à cinq heures (le rendez-vous)." },
          ],
        },
      ],
      bilan: "Cuenta, fecha, hora : un, dos, tres… cien ; lunes 12 de octubre en minuscules ; es la una, son las dos, et après la demie, on retire avec menos.",
    },

    "5e-espagnol-03-ser-estar-hay": {
      accroche: "Sofía envoie un message à sa cousine de Bogotá : « Estoy en Madrid. Madrid es enorme y hay muchos museos ». Trois façons de dire « être » ou « il y a » en une seule phrase ! En français, un seul verbe être ; en espagnol, deux… et c'est logique.",
      objectifs: [
        "Choisir entre ser, estar et hay, et les conjuguer",
        "Employer les articles el, la, los, las, un, una, unos, unas",
        "Accorder noms et adjectifs en genre et en nombre",
      ],
      sections: [
        {
          titre: "Deux verbes pour « être »",
          blocs: [
            { t: "texte", md: "L'espagnol a deux verbes « être ». **[[Ser]]** dit ce que l'on **est** : son identité, ce qui nous définit. **[[Estar]]** dit **où** l'on est et **comment** on se sent en ce moment.\n\nCompare : *[[Soy francesa]]* (je suis française : c'est mon identité) et *[[Estoy cansada]]* (je suis fatiguée : ça passera après une nuit de sommeil)." },
            { t: "tableau", titre: "Conjugaison au présent", entetes: ["Pronom", "[[Ser]]", "[[Estar]]"], lignes: [["[[yo]] (je)", "[[soy]]", "[[estoy]]"], ["[[tú]] (tu)", "[[eres]]", "[[estás]]"], ["[[él / ella / usted]]", "[[es]]", "[[está]]"], ["[[nosotros]] (nous)", "[[somos]]", "[[estamos]]"], ["[[vosotros]] (vous)", "[[sois]]", "[[estáis]]"], ["[[ellos / ellas / ustedes]]", "[[son]]", "[[están]]"]] },
            { t: "propriete", titre: "Quand employer [[ser]] ou [[estar]] ?", md: "**[[Ser]]** : identité, nationalité, profession, caractère, description, heure.\n*[[Es profesor. Soy española. Es alto. Son las tres.]]*\n\n**[[Estar]]** : lieu et état passager (humeur, santé, fatigue).\n*[[Está en Madrid. Estoy cansado. Está contenta hoy.]]*" },
            { t: "attention", md: "Pour une profession, pas d'article : **[[Soy profesor]]** (je suis professeur), et non *[[soy un profesor]]*. Et même une grande ville immobile s'emploie avec *[[estar]]* pour le lieu : **[[Madrid está en España]]**." },
            { t: "verifie", q: "Comment dit-on « Elle est contente aujourd'hui » ?", choix: ["[[Es contenta hoy.]]", "[[Está contenta hoy.]]", "[[Hay contenta hoy.]]", "[[Estoy contenta hoy.]]"], bonne: 1, explication: "Être content aujourd'hui, c'est un **état passager** : on utilise *[[estar]]*, à la 3e personne : **[[está]]**. *[[Estoy]]* voudrait dire « je suis »." },
          ],
        },
        {
          titre: "[[Hay]] : il y a",
          blocs: [
            { t: "definition", terme: "[[Hay]]", md: "**[[Hay]]** veut dire « il y a ». Il est **invariable** : il ne change jamais, au singulier comme au pluriel. *[[Hay un gato]]* (il y a un chat), *[[hay dos gatos]]* (il y a deux chats)." },
            { t: "schema", titre: "[[Ser, estar]] ou [[hay]] ? Pose-toi la question", legende: "Une question suffit pour choisir le bon verbe.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat-papier" x="120" y="10" width="160" height="34" rx="8"/><rect class="trait" x="120" y="10" width="160" height="34" rx="8"/><text class="texte" x="200" y="32" text-anchor="middle">Que veux-tu dire ?</text><path class="trait-fin" d="M170 44 L70 92" marker-end="url(#fl)"/><path class="trait-fin" d="M200 44 L200 92" marker-end="url(#fl)"/><path class="trait-fin" d="M230 44 L330 92" marker-end="url(#fl)"/><text class="texte-petit" x="70" y="112" text-anchor="middle">ce qu'on est</text><text class="texte-petit" x="70" y="126" text-anchor="middle">(identité, métier,</text><text class="texte-petit" x="70" y="140" text-anchor="middle">caractère, heure)</text><text class="texte-petit" x="200" y="112" text-anchor="middle">où l'on est,</text><text class="texte-petit" x="200" y="126" text-anchor="middle">comment on va</text><text class="texte-petit" x="200" y="140" text-anchor="middle">(lieu, état)</text><text class="texte-petit" x="330" y="112" text-anchor="middle">ce qui existe</text><text class="texte-petit" x="330" y="126" text-anchor="middle">quelque part</text><text class="texte-petit" x="330" y="140" text-anchor="middle">(il y a)</text><rect class="aplat-fort" x="35" y="158" width="70" height="30" rx="6"/><rect class="aplat-fort" x="165" y="158" width="70" height="30" rx="6"/><rect class="aplat-fort" x="295" y="158" width="70" height="30" rx="6"/><text class="texte-main" x="70" y="179" text-anchor="middle">SER</text><text class="texte-main" x="200" y="179" text-anchor="middle">ESTAR</text><text class="texte-main" x="330" y="179" text-anchor="middle">HAY</text><text class="texte-petit" x="70" y="212" text-anchor="middle">María es española.</text><text class="texte-petit" x="200" y="212" text-anchor="middle">Está en Barcelona.</text><text class="texte-petit" x="330" y="212" text-anchor="middle">Hay una playa.</text></svg>` },
            { t: "attention", md: "Jamais d'article défini (*[[el, la, los, las]]*) après *[[hay]]*. On dit **[[Hay un museo]]** ou **[[Hay muchos museos]]**, mais jamais *[[hay el museo]]*. Pour situer une chose précise, on reprend *[[estar]]* : **[[El museo está en el centro]]**." },
            { t: "exemple", titre: "Les trois verbes dans un même texte", md: "*[[María **es** española]]* ([[ser]] : nationalité). *[[María **está** en Barcelona]]* ([[estar]] : lieu). *[[En Barcelona **hay** una playa]]* ([[hay]] : existence).\n\n*[[Madrid **está** en España. En Madrid **hay** muchos museos.]]*" },
          ],
        },
        {
          titre: "Les articles et le genre des noms",
          blocs: [
            { t: "tableau", titre: "Les articles", entetes: ["", "Masculin", "Féminin"], lignes: [["Défini singulier (le, la)", "[[**el** libro]]", "[[**la** casa]]"], ["Défini pluriel (les)", "[[**los** libros]]", "[[**las** casas]]"], ["Indéfini singulier (un, une)", "[[**un** gato]]", "[[**una** mesa]]"], ["Indéfini pluriel (des)", "[[**unos** gatos]]", "[[**unas** mesas]]"]] },
            { t: "texte", md: "En général, les noms en **-o** sont masculins (*[[el libro]]*) et les noms en **-a** sont féminins (*[[la casa]]*). Mais quelques mots trompeurs sont à apprendre par cœur : **[[el día]]** (le jour), [[**el problema**, **el mapa**]] (la carte) sont masculins ; **[[la mano]]** (la main) est féminin.\n\nAttention aussi aux mots dont le genre change par rapport au français : **[[la leche]]** (le lait), **[[el coche]]** (la voiture)." },
            { t: "verifie", q: "Quel article accompagne « [[problema]] » ?", choix: ["[[la]]", "[[el]]", "[[una]]"], bonne: 1, explication: "Malgré son -a final, **[[problema]]** est masculin : **[[el problema]]**, comme *[[el día]]* et *[[el mapa]]*." },
          ],
        },
        {
          titre: "Accorder en genre et en nombre",
          blocs: [
            { t: "propriete", titre: "Le féminin des adjectifs", md: "• **[[-o → -a]]** : [[*alto → alta*, *rojo → roja*]].\n• **[[-or → -ora]]** : *[[trabajador → trabajadora]]*, et pour les noms *[[profesor → profesora]]*.\n• En **-e** ou en **consonne** : pas de changement. *[[Un chico inteligente, una chica inteligente ; un coche azul, una casa azul.]]*" },
            { t: "tableau", titre: "Former le pluriel", entetes: ["Le mot finit par…", "On ajoute", "Exemple"], lignes: [["une voyelle", "[[**-s**]]", "[[casa → casas ; el día → los días]]"], ["une consonne", "[[**-es**]]", "[[profesor → profesores ; azul → azules]]"], ["un -z", "**[[-ces]]** (le z devient c)", "[[lápiz → lápices ; feliz → felices]]"]] },
            { t: "texte", md: "L'adjectif se place en général **après** le nom et s'accorde avec lui : *[[un coche rojo, una casa roja, unas casas blancas]]*. *[[Los estudiantes son muy inteligentes.]]*" },
            { t: "astuce", md: "Pour le z : en espagnol, on n'écrit presque jamais **ze** ni **zi**. Le z se change donc en c devant e : [[*lápiz → lápices*, *luz → luces*]]." },
          ],
        },
      ],
      bilan: "Ser pour ce que l'on est, estar pour où l'on est et comment on va, hay pour ce qui existe ; puis on accorde : el, la, los, las, et un -s ou un -es au pluriel.",
    },

    "5e-espagnol-04-famille-description": {
      accroche: "Dimanche à Valence : toute la famille de Pablo se retrouve autour d'une grande paella. Les abuelos, les tíos, les primos… Pablo te montre une photo et te demande : « ¿Quién es? ». Pour répondre, tu vas apprendre à nommer et à décrire chacun.",
      objectifs: [
        "Nommer les membres de la famille",
        "Utiliser les possessifs mi, tu, su et leurs pluriels",
        "Décrire le physique et le caractère d'une personne",
      ],
      sections: [
        {
          titre: "[[Mi familia]] : l'arbre généalogique",
          blocs: [
            { t: "texte", md: "Les noms de la famille vont souvent par deux : un masculin en **-o** et un féminin en **-a**. *[[El hermano]]* (le frère), *[[la hermana]]* (la sœur). Au pluriel masculin, le mot désigne tout le groupe : **[[los padres]]** = les parents (le père et la mère), **[[los hermanos]]** = les frères et sœurs." },
            { t: "schema", titre: "[[La familia de Pablo]]", legende: "[[Diego es el primo de Pablo : es el hijo de su tía Rosa.]]", svg: `<svg viewBox="0 0 400 260"><rect class="aplat-papier" x="110" y="12" width="80" height="38" rx="6"/><rect class="trait" x="110" y="12" width="80" height="38" rx="6"/><text class="texte" x="150" y="28" text-anchor="middle">el abuelo</text><text class="texte-petit" x="150" y="43" text-anchor="middle">Antonio</text><rect class="aplat-papier" x="210" y="12" width="80" height="38" rx="6"/><rect class="trait" x="210" y="12" width="80" height="38" rx="6"/><text class="texte" x="250" y="28" text-anchor="middle">la abuela</text><text class="texte-petit" x="250" y="43" text-anchor="middle">Carmen</text><line class="trait-fin" x1="190" y1="31" x2="210" y2="31"/><path class="trait-fin" d="M200 31 L200 78 M90 78 L230 78 M90 78 L90 96 M230 78 L230 96"/><rect class="aplat-papier" x="50" y="96" width="80" height="38" rx="6"/><rect class="trait" x="50" y="96" width="80" height="38" rx="6"/><text class="texte" x="90" y="112" text-anchor="middle">la tía</text><text class="texte-petit" x="90" y="127" text-anchor="middle">Rosa</text><rect class="aplat-papier" x="190" y="96" width="80" height="38" rx="6"/><rect class="trait" x="190" y="96" width="80" height="38" rx="6"/><text class="texte" x="230" y="112" text-anchor="middle">el padre</text><text class="texte-petit" x="230" y="127" text-anchor="middle">Luis</text><rect class="aplat-papier" x="290" y="96" width="80" height="38" rx="6"/><rect class="trait" x="290" y="96" width="80" height="38" rx="6"/><text class="texte" x="330" y="112" text-anchor="middle">la madre</text><text class="texte-petit" x="330" y="127" text-anchor="middle">Elena</text><line class="trait-fin" x1="270" y1="115" x2="290" y2="115"/><path class="trait-fin" d="M280 115 L280 162 M230 162 L330 162 M230 162 L230 180 M330 162 L330 180 M90 134 L90 180"/><rect class="aplat-papier" x="50" y="180" width="80" height="38" rx="6"/><rect class="trait" x="50" y="180" width="80" height="38" rx="6"/><text class="texte" x="90" y="196" text-anchor="middle">el primo</text><text class="texte-petit" x="90" y="211" text-anchor="middle">Diego</text><rect class="aplat-fort" x="190" y="180" width="80" height="38" rx="6"/><rect class="trait" x="190" y="180" width="80" height="38" rx="6"/><text class="texte" x="230" y="196" text-anchor="middle">yo</text><text class="texte-petit" x="230" y="211" text-anchor="middle">Pablo</text><rect class="aplat-papier" x="290" y="180" width="80" height="38" rx="6"/><rect class="trait" x="290" y="180" width="80" height="38" rx="6"/><text class="texte" x="330" y="196" text-anchor="middle">la hermana</text><text class="texte-petit" x="330" y="211" text-anchor="middle">Inés</text><text class="texte-main" x="200" y="248" text-anchor="middle">los padres = el padre + la madre</text></svg>` },
            { t: "tableau", titre: "Les mots de la famille", entetes: ["Masculin", "Féminin", "Français"], lignes: [["[[el padre]]", "[[la madre]]", "le père / la mère"], ["[[el hermano]]", "[[la hermana]]", "le frère / la sœur"], ["[[el abuelo]]", "[[la abuela]]", "le grand-père / la grand-mère"], ["[[el tío]]", "[[la tía]]", "l'oncle / la tante"], ["[[el primo]]", "[[la prima]]", "le cousin / la cousine"], ["[[el hijo]]", "[[la hija]]", "le fils / la fille"]] },
            { t: "verifie", q: "Que signifie « [[los padres]] » ?", choix: ["Les pères seulement", "Les parents (le père et la mère)", "Les grands-parents"], bonne: 1, explication: "Le masculin pluriel désigne tout le groupe : **[[los padres]]** = le père et la mère, donc les parents. Les grands-parents, ce sont **[[los abuelos]]**." },
          ],
        },
        {
          titre: "Les possessifs : [[mi, tu, su]]",
          blocs: [
            { t: "tableau", titre: "Un objet ou plusieurs", entetes: ["À qui ?", "Singulier", "Pluriel"], lignes: [["à moi", "[[**mi** madre]] (ma mère)", "[[**mis** padres]] (mes parents)"], ["à toi", "[[**tu** hermano]] (ton frère)", "[[**tus** hermanos]] (tes frères)"], ["à lui, à elle, à eux, à vous ([[usted]])", "[[**su** casa]] (sa / leur / votre maison)", "[[**sus** ojos]] (ses / leurs / vos yeux)"]] },
            { t: "propriete", titre: "Le possessif s'accorde en nombre, pas en genre", md: "*[[mi padre]]* et *[[mi madre]]* : même possessif pour un homme ou une femme. On ajoute seulement un **-s** quand le nom est au pluriel : [[*mis abuelos*, *tus primas*, *sus ojos*]]." },
            { t: "attention", md: "**[[su]]** a plusieurs sens : son, sa, leur, ou votre (de politesse). *[[Su casa]]* peut être « sa maison », « leur maison » ou « votre maison ». C'est le contexte qui t'aide. Et ne confonds pas **[[tu]]** (ton, sans accent) avec **[[tú]]** (toi, avec accent)." },
            { t: "exemple", titre: "Avec les possessifs", md: "*[[Mi hermana se llama Ana y sus ojos son azules.]]* Ma sœur s'appelle Ana et ses yeux sont bleus.\n\n*[[¿Cómo se llaman tus abuelos?]]* Comment s'appellent tes grands-parents ?" },
          ],
        },
        {
          titre: "Décrire le physique",
          blocs: [
            { t: "texte", md: "Pour décrire une personne, on utilise deux verbes. **[[Ser]]** pour la silhouette : [[*es alto*, *es rubia*]]. **[[Tener]]** pour les cheveux et les yeux : [[*tiene el pelo largo*, *tiene los ojos verdes*]]. Remarque l'article : en espagnol, on dit « il a **les** yeux verts », comme en français." },
            { t: "tableau", titre: "Le portrait", entetes: ["Avec [[ser]]", "Avec [[tener]]"], lignes: [["[[alto / bajo]] (grand / petit)", "[[el pelo largo / corto]] (les cheveux longs / courts)"], ["[[delgado / gordo]] (mince / gros)", "[[el pelo rubio / moreno / castaño]]"], ["[[rubio / moreno]] (blond / brun)", "[[los ojos azules / verdes / marrones]]"], ["[[guapo]] (beau)", "[[gafas]] (des lunettes)"]] },
            { t: "texte", md: "Les couleurs : **[[rojo]]** (rouge), **[[azul]]** (bleu), **[[verde]]** (vert), **[[amarillo]]** (jaune), **[[negro]]** (noir), **[[blanco]]** (blanc), **[[gris]]** (gris), **[[marrón]]** (marron), **[[naranja]]** (orange), **[[rosa]]** (rose). Comme tous les adjectifs, elles s'accordent : [[*los ojos azules*, *una camiseta roja*]]." },
            { t: "attention", md: "Attention aux faux amis ! **[[largo]]** = long (pas « large ») ; **[[gordo]]** = gros ; **[[moreno]]** = brun ; **[[embarazada]]** = enceinte (pas « embarrassée ») ! *[[Tiene el pelo largo]]* = elle a les cheveux longs." },
            { t: "verifie", q: "Comment dit-on « Elle a les cheveux longs » ?", choix: ["[[Es el pelo largo.]]", "[[Tiene el pelo largo.]]", "[[Tiene el pelo ancho.]]", "[[Está el pelo largo.]]"], bonne: 1, explication: "Pour les cheveux et les yeux, on emploie **[[tener]]** : *[[tiene el pelo largo]]*. Et *[[largo]]* veut bien dire « long »." },
          ],
        },
        {
          titre: "Décrire le caractère",
          blocs: [
            { t: "liste", titre: "Les qualités… et les défauts", items: ["**[[simpático / antipático]]** : sympathique / antipathique", "**[[amable]]** : gentil, aimable", "**[[divertido]]** : drôle, amusant", "**[[tímido]]** : timide", "**[[serio]]** : sérieux", "**[[inteligente]]** : intelligent", "**[[perezoso]]** : paresseux", "**[[trabajador]]** : travailleur"] },
            { t: "exemple", titre: "Le portrait d'Inés", md: "*[[Mi hermana se llama Inés. Es alta y morena, tiene los ojos verdes y el pelo largo. Es muy simpática pero un poco tímida.]]*\n\nMa sœur s'appelle Inés. Elle est grande et brune, elle a les yeux verts et les cheveux longs. Elle est très sympathique mais un peu timide." },
            { t: "astuce", md: "Pour nuancer, ajoute **[[muy]]** (très) ou **[[un poco]]** (un peu) devant l'adjectif. Et pour une personne âgée, préfère **[[mayor]]** à **[[viejo]]** (vieux), plus poli : *[[Mi abuelo es mayor y muy amable.]]*" },
            { t: "verifie", q: "Dans « [[Mis padres son altos]] », pourquoi écrit-on « [[altos]] » ?", choix: ["Parce que l'adjectif s'accorde avec « [[padres]] », masculin pluriel", "Parce que « [[alto]] » est toujours au pluriel", "Parce que « [[son]] » est au pluriel, mais l'adjectif ne s'accorde jamais"], bonne: 0, explication: "L'adjectif s'accorde avec le nom : *[[padres]]* est masculin pluriel, donc **[[altos]]**." },
          ],
        },
      ],
      bilan: "Mi padre, mis abuelos, su prima : je nomme ; es alto, tiene los ojos verdes, es simpático : je décris. Et je me méfie de largo, qui veut dire long !",
    },

    "5e-espagnol-05-present-indicatif": {
      accroche: "Lucas, un Lyonnais, rencontre Camila, une Péruvienne, sur un site d'échange linguistique. « ¿Dónde vives? ¿Cuántos idiomas hablas? » Pour lui répondre, il doit conjuguer ses premiers verbes. Bonne nouvelle : la plupart suivent trois modèles seulement.",
      objectifs: [
        "Conjuguer les verbes réguliers en -ar, -er, -ir au présent",
        "Employer les pronoms sujets et la négation",
        "Poser des questions avec les mots interrogatifs",
      ],
      sections: [
        {
          titre: "Les pronoms sujets",
          blocs: [
            { t: "tableau", titre: "Qui fait l'action ?", entetes: ["Espagnol", "Français", "Remarque"], lignes: [["[[yo]]", "je", "pas de majuscule"], ["[[tú]]", "tu", "avec accent"], ["[[él / ella / usted]]", "il / elle / vous (poli)", "*[[usted]]* se conjugue comme *[[él]]*"], ["[[nosotros / nosotras]]", "nous", "[[-as]] si le groupe est féminin"], ["[[vosotros / vosotras]]", "vous (à plusieurs amis)", "en Espagne"], ["[[ellos / ellas / ustedes]]", "ils / elles / vous (poli)", "*[[ustedes]]* : vous, en Amérique latine"]] },
            { t: "texte", md: "En espagnol, on **omet souvent le pronom**. Pourquoi ? Parce que la terminaison du verbe indique déjà la personne : *[[hablo]]* ne peut vouloir dire que « je parle ». On dit donc **[[Hablo español]]** plutôt que *[[yo hablo español]]*. On garde le pronom pour insister ou pour éviter une confusion : *[[Yo hablo inglés, pero él no.]]*" },
            { t: "savais-tu", md: "En Amérique latine, on n'utilise pas *[[vosotros]]* : pour parler à plusieurs personnes, même à des amis, on dit **[[ustedes]]**. Un Espagnol dit à ses amis *[[¿Habláis español?]]* ; un Mexicain dit *[[¿Hablan español?]]*" },
          ],
        },
        {
          titre: "Trois modèles : [[-ar, -er, -ir]]",
          blocs: [
            { t: "definition", terme: "Radical et terminaison", md: "Un verbe se coupe en deux : le **radical** (qui porte le sens) et la **terminaison** (qui indique la personne). Pour conjuguer, on enlève **[[-ar]]**, **[[-er]]** ou **[[-ir]]** de l'infinitif et on ajoute la terminaison du présent." },
            { t: "schema", titre: "Conjuguer, c'est changer la fin", legende: "Le radical [[habl-]] ne bouge pas : seule la terminaison change selon la personne.", svg: `<svg viewBox="0 0 400 180"><rect class="aplat" x="70" y="20" width="110" height="44" rx="6"/><rect class="trait" x="70" y="20" width="110" height="44" rx="6"/><rect class="aplat-fort" x="180" y="20" width="60" height="44" rx="6"/><rect class="trait" x="180" y="20" width="60" height="44" rx="6"/><text class="texte-main" x="125" y="48" text-anchor="middle">habl</text><text class="texte-main" x="210" y="48" text-anchor="middle">ar</text><text class="texte-petit" x="125" y="80" text-anchor="middle">radical</text><text class="texte-petit" x="210" y="80" text-anchor="middle">infinitif</text><path class="trait-fin" d="M210 86 L210 112" marker-end="url(#fl-p)"/><text class="texte" x="255" y="40">on enlève -ar…</text><text class="texte" x="255" y="58">… on ajoute</text><text class="texte" x="70" y="135">habl</text><text class="texte-pigment" x="100" y="135">o</text><text class="texte" x="140" y="135">habl</text><text class="texte-pigment" x="170" y="135">as</text><text class="texte" x="215" y="135">habl</text><text class="texte-pigment" x="245" y="135">a</text><text class="texte" x="285" y="135">habl</text><text class="texte-pigment" x="315" y="135">amos</text><text class="texte-petit" x="85" y="160" text-anchor="middle">yo</text><text class="texte-petit" x="158" y="160" text-anchor="middle">tú</text><text class="texte-petit" x="232" y="160" text-anchor="middle">él</text><text class="texte-petit" x="315" y="160" text-anchor="middle">nosotros</text></svg>` },
            { t: "tableau", titre: "Le présent des verbes réguliers", entetes: ["Pronom", "[[hablar]] (parler)", "[[comer]] (manger)", "[[vivir]] (vivre)"], lignes: [["[[yo]]", "[[habl**o**]]", "[[com**o**]]", "[[viv**o**]]"], ["[[tú]]", "[[habl**as**]]", "[[com**es**]]", "[[viv**es**]]"], ["[[él / ella / usted]]", "[[habl**a**]]", "[[com**e**]]", "[[viv**e**]]"], ["[[nosotros]]", "[[habl**amos**]]", "[[com**emos**]]", "[[viv**imos**]]"], ["[[vosotros]]", "[[habl**áis**]]", "[[com**éis**]]", "[[viv**ís**]]"], ["[[ellos / ellas / ustedes]]", "[[habl**an**]]", "[[com**en**]]", "[[viv**en**]]"]] },
            { t: "astuce", md: "Les verbes en **[[-er]]** et en **[[-ir]]** sont jumeaux : seules les formes de **[[nosotros]]** et **[[vosotros]]** diffèrent ([[*comemos / vivimos*, *coméis / vivís*]]). Retiens : *[[nosotros]]* garde la voyelle de l'infinitif." },
            { t: "attention", md: "Ne mélange pas les modèles : *[[vivemos]]* est faux, on dit **[[vivimos]]** (verbe en [[-ir]]). De même : *[[ellos viven]]* (ils vivent), *[[tú escribes]]* (tu écris), *[[yo leo]]* (je lis), *[[nosotros cantamos]]* (nous chantons)." },
            { t: "verifie", q: "Complète : « [[Vosotros … (vivir) en Madrid.]] »", choix: ["[[vivéis]]", "[[vivís]]", "[[viven]]", "[[vivimos]]"], bonne: 1, explication: "Avec *[[vosotros]]*, les verbes en [[-ir]] prennent **[[-ís]]** : *[[vivís]]*. *[[-éis]]* est la terminaison des verbes en [[-er]] (*[[coméis]]*)." },
          ],
        },
        {
          titre: "La négation : un seul petit mot",
          blocs: [
            { t: "propriete", titre: "[[No]] + verbe", md: "Pour dire « ne… pas », on place **[[no]]** juste **devant le verbe**. Il n'y a pas de deuxième mot comme le « pas » français.\n*[[Hablo inglés → **No** hablo inglés.]]* (Je ne parle pas anglais.)" },
            { t: "exemple", titre: "Phrases négatives", md: "*[[No como carne.]]* Je ne mange pas de viande.\n*[[Mi hermano no vive en París.]]* Mon frère n'habite pas à Paris.\n*[[— ¿Hablas alemán? — No, no hablo alemán.]]* Le premier *[[no]]* répond « non », le second fait la négation." },
            { t: "attention", md: "Pas d'article partitif en espagnol : « je ne mange pas **de** viande » se dit *[[no como carne]]*, sans rien entre le verbe et le nom." },
          ],
        },
        {
          titre: "Poser des questions",
          blocs: [
            { t: "tableau", titre: "Les mots interrogatifs (toujours avec accent)", entetes: ["Espagnol", "Français", "Exemple"], lignes: [["[[¿Qué?]]", "que, quoi", "[[¿Qué estudias?]]"], ["[[¿Dónde?]]", "où", "[[¿Dónde vives?]]"], ["[[¿Cuándo?]]", "quand", "[[¿Cuándo comes?]]"], ["[[¿Quién?]]", "qui", "[[¿Quién habla?]]"], ["[[¿Cuántos? / ¿Cuántas?]]", "combien", "[[¿Cuántos años tienes?]]"], ["[[¿Cómo?]]", "comment", "[[¿Cómo te llamas?]]"], ["[[¿Por qué?]]", "pourquoi", "[[¿Por qué no comes?]]"]] },
            { t: "texte", md: "La question se construit simplement : mot interrogatif + verbe + sujet. **[[¿Dónde estudia tu hermana?]]** (Où ta sœur étudie-t-elle ?). Sans mot interrogatif, on garde l'ordre de la phrase et on change seulement l'intonation : *[[¿Hablas español?]]*\n\n*[[¿Cuántos]]* s'accorde avec le nom : *[[¿Cuántos idiomas hablas?]]* mais *[[¿Cuántas hermanas tienes?]]*" },
            { t: "exemple", titre: "La réponse de Lucas", md: "[[— ¿Dónde vives? — **Vivo** en Lyon.\n— ¿Cuántos idiomas hablas? — **Hablo** dos idiomas, pero **no hablo** alemán.]]" },
            { t: "verifie", q: "Pourquoi dit-on souvent « [[Hablo español]] » sans « [[yo]] » ?", choix: ["Parce que « [[yo]] » est impoli", "Parce que la terminaison -o indique déjà « je »", "Parce que « [[yo]] » n'existe pas"], bonne: 1, explication: "La terminaison **-o** suffit à montrer que c'est « je » qui parle. Le pronom *[[yo]]* ne sert que pour insister." },
          ],
        },
      ],
      bilan: "Radical + terminaison : -o, -as, -a, -amos, -áis, -an pour hablar ; no devant le verbe pour nier ; ¿dónde?, ¿qué?, ¿cuántos? pour questionner.",
    },

    "5e-espagnol-06-verbes-irreguliers": {
      accroche: "Samedi, à Buenos Aires. Valentina écrit à son ami : « ¿Quieres ir al cine? Puedo ir a las seis. Me gustan las películas de aventuras ». Quatre verbes très fréquents, et pas un seul régulier ! Ces verbes rebelles sont les plus utiles de la langue.",
      objectifs: [
        "Conjuguer tener, ir et hacer au présent",
        "Conjuguer les verbes à diphtongue (e → ie, o → ue)",
        "Exprimer tes goûts avec gustar",
      ],
      sections: [
        {
          titre: "[[Tener, ir, hacer]] : trois verbes essentiels",
          blocs: [
            { t: "tableau", titre: "Trois irréguliers à savoir par cœur", entetes: ["Pronom", "[[tener]] (avoir)", "[[ir]] (aller)", "[[hacer]] (faire)"], lignes: [["[[yo]]", "[[**tengo**]]", "[[**voy**]]", "[[**hago**]]"], ["[[tú]]", "[[tienes]]", "[[vas]]", "[[haces]]"], ["[[él / ella / usted]]", "[[tiene]]", "[[va]]", "[[hace]]"], ["[[nosotros]]", "[[tenemos]]", "[[vamos]]", "[[hacemos]]"], ["[[vosotros]]", "[[tenéis]]", "[[vais]]", "[[hacéis]]"], ["[[ellos / ellas / ustedes]]", "[[tienen]]", "[[van]]", "[[hacen]]"]] },
            { t: "propriete", titre: "[[Ir a]] + lieu", md: "Pour dire où l'on va : **[[ir a]]** + lieu. Devant un nom masculin, **[[a]] + [[el]] = [[al]]** (contraction obligatoire).\n*[[Voy **al** colegio en autobús. Vamos **a la** playa.]]*" },
            { t: "exemple", titre: "Dans la vie de tous les jours", md: "*[[Tengo un hermano.]]* J'ai un frère.\n*[[Mis amigos tienen un perro.]]* Mes amis ont un chien.\n*[[¿Tú haces deporte?]]* Tu fais du sport ?\n*[[Hago los deberes.]]* Je fais mes devoirs." },
            { t: "verifie", q: "Complète : « [[Yo … (ir) al colegio en autobús.]] »", choix: ["[[vo]]", "[[voy]]", "[[va]]", "[[iro]]"], bonne: 1, explication: "*[[Ir]]* est très irrégulier : **[[voy, vas, va, vamos, vais, van]]**. Avec *[[yo]]* : **[[voy]]**." },
          ],
        },
        {
          titre: "Les verbes à diphtongue",
          blocs: [
            { t: "definition", terme: "Diphtongue", md: "Dans certains verbes, la voyelle du radical **se dédouble** quand on la prononce fort : **[[e → ie]]** (*[[querer → quiero]]*) ou **[[o → ue]]** (*[[poder → puedo]]*). Les terminaisons, elles, restent régulières." },
            { t: "schema", titre: "La botte des diphtongues", legende: "Les formes dans la botte diphtonguent ([[yo, tú, él, ellos]]) ; [[nosotros]] et [[vosotros]] restent dehors : [[queremos, queréis]].", svg: `<svg viewBox="0 0 400 230"><path class="aplat" d="M40 25 L190 25 L190 140 L345 140 Q375 140 375 175 L375 210 L40 210 Z"/><path class="trait" d="M40 25 L190 25 L190 140 L345 140 Q375 140 375 175 L375 210 L40 210 Z"/><text class="texte-petit" x="115" y="48" text-anchor="middle">yo</text><text class="texte-main" x="115" y="68" text-anchor="middle">quiero</text><text class="texte-petit" x="115" y="98" text-anchor="middle">tú</text><text class="texte-main" x="115" y="118" text-anchor="middle">quieres</text><text class="texte-petit" x="115" y="160" text-anchor="middle">él / ella</text><text class="texte-main" x="115" y="180" text-anchor="middle">quiere</text><text class="texte-petit" x="285" y="48" text-anchor="middle">nosotros</text><text class="texte" x="285" y="68" text-anchor="middle">queremos</text><text class="texte-petit" x="285" y="98" text-anchor="middle">vosotros</text><text class="texte" x="285" y="118" text-anchor="middle">queréis</text><text class="texte-petit" x="285" y="165" text-anchor="middle">ellos / ellas</text><text class="texte-main" x="285" y="185" text-anchor="middle">quieren</text></svg>` },
            { t: "tableau", titre: "[[e → ie]] et [[o → ue]]", entetes: ["Pronom", "[[querer]] (vouloir)", "[[poder]] (pouvoir)", "[[dormir]] (dormir)"], lignes: [["[[yo]]", "[[qu**ie**ro]]", "[[p**ue**do]]", "[[d**ue**rmo]]"], ["[[tú]]", "[[qu**ie**res]]", "[[p**ue**des]]", "[[d**ue**rmes]]"], ["[[él / ella / usted]]", "[[qu**ie**re]]", "[[p**ue**de]]", "[[d**ue**rme]]"], ["[[nosotros]]", "[[queremos]]", "[[podemos]]", "[[dormimos]]"], ["[[vosotros]]", "[[queréis]]", "[[podéis]]", "[[dormís]]"], ["[[ellos / ellas / ustedes]]", "[[qu**ie**ren]]", "[[p**ue**den]]", "[[d**ue**rmen]]"]] },
            { t: "liste", titre: "D'autres verbes qui diphtonguent", items: ["**[[e → ie]]** : [[empezar]] (commencer) → *[[empiezo]]* ; [[pensar]] (penser) → *[[pienso]]* ; [[preferir]] (préférer) → *[[prefiero]]*", "**[[o → ue]]** : [[volver]] (revenir) → *[[vuelvo]]* ; [[dormir → *duermo*]]", "**[[u → ue]]** (un cas unique) : [[jugar]] (jouer) → *[[juego, juegas, juega, jugamos, jugáis, juegan]]*"] },
            { t: "verifie", q: "Complète : « [[Nosotros … (poder) salir, pero ellos no … (poder).]] »", choix: ["[[puedemos / pueden]]", "[[podemos / pueden]]", "[[podemos / poden]]"], bonne: 1, explication: "*[[Nosotros]]* reste hors de la botte : **[[podemos]]**. *[[Ellos]]* est dans la botte : **[[pueden]]**." },
          ],
        },
        {
          titre: "[[Gustar]] : un verbe à l'envers",
          blocs: [
            { t: "texte", md: "Pour dire « j'aime », l'espagnol dit en réalité « **ça me plaît** ». Dans **[[Me gusta el chocolate]]**, le sujet du verbe est *[[el chocolate]]* : c'est lui qui plaît, et c'est lui qui commande l'accord du verbe. La personne qui aime est indiquée par un petit pronom placé devant : **[[me, te, le, nos, os, les]]**." },
            { t: "tableau", titre: "[[Gustar]] en deux formes", entetes: ["Pronom", "+ nom singulier ou verbe", "+ nom pluriel"], lignes: [["[[(a mí) me]]", "[[me **gusta** la música]]", "[[me **gustan** los deportes]]"], ["[[(a ti) te]]", "[[te **gusta** nadar]]", "[[te **gustan** los gatos]]"], ["[[(a él / a ella) le]]", "[[le **gusta** el fútbol]]", "[[le **gustan** las películas]]"], ["[[(a nosotros) nos]]", "[[nos **gusta** bailar]]", "[[nos **gustan** los libros]]"], ["[[(a vosotros) os]]", "[[os **gusta** el cine]]", "[[os **gustan** las fresas]]"], ["[[(a ellos) les]]", "[[les **gusta** leer]]", "[[les **gustan** los videojuegos]]"]] },
            { t: "propriete", titre: "[[Gusta]] ou [[gustan]] ?", md: "Regarde **ce qui plaît**, pas la personne :\n• un nom **singulier** ou un **verbe** → **[[gusta]]** : [[*me gusta la música*, *me gusta nadar*]] ;\n• un nom **pluriel** → **[[gustan]]** : *[[me gustan los deportes]]*." },
            { t: "attention", md: "Erreur classique des francophones : *[[Yo gusto el chocolate]]*. C'est faux ! On dit **[[Me gusta el chocolate]]**. Pour insister, on ajoute [[*a mí*, *a él*…]] : [[**A mí me gusta**, **a él no le gusta**]]. Et pour une personne nommée : *[[A mi hermana le gusta bailar.]]*" },
            { t: "exemple", titre: "Avec la négation", md: "*[[Me gustan los deportes, pero no me gusta el fútbol.]]* J'aime les sports, mais je n'aime pas le football. Le **[[no]]** se place devant le pronom." },
          ],
        },
      ],
      bilan: "Tengo, voy, hago s'apprennent par cœur ; dans la botte, quiero et puedo diphtonguent, mais pas nosotros ni vosotros ; et avec gustar, c'est ce qui plaît qui commande : me gusta, me gustan.",
    },

    "5e-espagnol-07-ecole-journee": {
      accroche: "À Salamanque, Lucía, 12 ans, est en primero de ESO, l'équivalent de la 5e. Elle commence à 8 h 30, sort à 14 h 30… et déjeune à 15 h ! Suis-la une journée entière et découvre les mots du collège et de la routine.",
      objectifs: [
        "Nommer les matières et le matériel scolaire",
        "Raconter ta routine avec des verbes pronominaux",
        "Parler de ton emploi du temps et des horaires",
      ],
      sections: [
        {
          titre: "En classe : matières et matériel",
          blocs: [
            { t: "texte", md: "Les matières ressemblent souvent au français : [[**matemáticas**, **historia**, **geografía**, **ciencias**, **música**, **tecnología**]]. D'autres sont à retenir : **[[lengua]]** (le cours de langue, l'espagnol pour les Espagnols), **[[dibujo]]** (arts plastiques), **[[educación física]]** (EPS). Les langues s'écrivent sans majuscule : [[**inglés**, **francés**, **español**]]." },
            { t: "tableau", titre: "[[El horario de Lucía]] (son emploi du temps)", entetes: ["[[Hora]]", "[[lunes]]", "[[martes]]", "[[miércoles]]"], lignes: [["8:30", "[[matemáticas]]", "[[inglés]]", "[[lengua]]"], ["9:25", "[[lengua]]", "[[matemáticas]]", "[[francés]]"], ["10:20", "[[ciencias]]", "[[historia]]", "[[educación física]]"], ["11:15", "[[**recreo**]]", "[[**recreo**]]", "[[**recreo**]]"], ["11:45", "[[francés]]", "[[dibujo]]", "[[matemáticas]]"], ["12:40", "[[música]]", "[[tecnología]]", "[[inglés]]"], ["13:35", "[[geografía]]", "[[educación física]]", "[[ciencias]]"]] },
            { t: "tableau", titre: "Dans la [[mochila]] (le cartable)", entetes: ["Espagnol", "Français"], lignes: [["[[el bolígrafo (el boli)]]", "le stylo"], ["[[el lápiz]]", "le crayon"], ["[[la goma]]", "la gomme"], ["[[el cuaderno]]", "le cahier"], ["[[el libro]]", "le livre"], ["[[la regla]]", "la règle"], ["[[la pizarra]]", "le tableau"], ["[[el profesor / la profesora]]", "le professeur"]] },
            { t: "verifie", q: "Que signifie « [[el bolígrafo]] » ?", choix: ["Le crayon", "Le stylo", "Le cahier", "La gomme"], bonne: 1, explication: "**[[El bolígrafo]]** (souvent abrégé *[[el boli]]*) est le stylo. Le crayon se dit *[[el lápiz]]*, le cahier *[[el cuaderno]]*, la gomme *[[la goma]]*." },
          ],
        },
        {
          titre: "Parler de son emploi du temps",
          blocs: [
            { t: "texte", md: "Pour dire quel cours tu as, utilise **[[tener clase de]]** + matière : *[[Tengo clase de francés.]]* (J'ai cours de français.) Pour l'heure, reprends ce que tu sais : **[[a las nueve]]** (à 9 h).\n\nUne habitude se dit avec **[[los]]** + jour au pluriel : **[[los lunes]]** = le lundi, tous les lundis." },
            { t: "exemple", titre: "Lucía présente sa semaine", md: "[[*Los lunes tengo clase de matemáticas a las ocho y media. La clase de francés es a las doce menos cuarto. Los martes tengo inglés y dibujo. La clase empieza a las ocho y media y termina a las dos y media.*]]" },
            { t: "attention", md: "« J'ai cours de français » se dit **[[Tengo clase de francés]]** : avec *[[tener]]*, sans article, et *[[francés]]* sans majuscule. Et « le lundi » (chaque semaine) se dit **[[los lunes]]**, pas *[[el lunes]]* (qui veut dire « lundi prochain »)." },
          ],
        },
        {
          titre: "La routine : les verbes pronominaux",
          blocs: [
            { t: "definition", terme: "Verbe pronominal", md: "Un verbe qui se conjugue avec un petit pronom réfléchi, comme « se lever » en français. À l'infinitif, le pronom est **collé à la fin** : **[[levantarse]]**. Conjugué, il se place **devant** le verbe : *[[me levanto]]*." },
            { t: "tableau", titre: "[[Levantarse]] (se lever) et [[acostarse]] (se coucher)", entetes: ["Pronom", "[[levantarse]]", "[[acostarse (o → ue)]]"], lignes: [["[[yo]]", "[[**me** levanto]]", "[[**me** acuesto]]"], ["[[tú]]", "[[**te** levantas]]", "[[**te** acuestas]]"], ["[[él / ella / usted]]", "[[**se** levanta]]", "[[**se** acuesta]]"], ["[[nosotros]]", "[[**nos** levantamos]]", "[[**nos** acostamos]]"], ["[[vosotros]]", "[[**os** levantáis]]", "[[**os** acostáis]]"], ["[[ellos / ellas / ustedes]]", "[[**se** levantan]]", "[[**se** acuestan]]"]] },
            { t: "etapes", titre: "[[La mañana de Lucía]]", items: [{ titre: "7:00", md: "*[[Me levanto.]]* Je me lève." }, { titre: "7:10", md: "*[[Me ducho.]]* Je me douche ([[ducharse]])." }, { titre: "7:30", md: "*[[Me visto.]]* Je m'habille ([[vestirse, e → i : me visto]])." }, { titre: "7:45", md: "*[[Desayuno.]]* Je prends mon petit-déjeuner." }, { titre: "8:15", md: "*[[Voy al instituto.]]* Je vais au collège." }] },
            { t: "attention", md: "N'oublie pas le pronom : « elle se douche » = **[[se ducha]]**, pas *[[ducha]]* tout seul. Et *[[acostarse]]* diphtongue comme *[[poder]]* : **[[me acuesto]]**, mais **[[nos acostamos]]**." },
            { t: "verifie", q: "Comment dit-on « Elle se douche » ?", choix: ["[[Ella me ducho.]]", "[[Ella se ducha.]]", "[[Ella ducha.]]", "[[Ella te duchas.]]"], bonne: 1, explication: "À la 3e personne, le pronom est **[[se]]** et la terminaison **-a** : *[[se ducha]]*." },
          ],
        },
        {
          titre: "Les repas et le rythme espagnol",
          blocs: [
            { t: "tableau", titre: "Les verbes des repas", entetes: ["Verbe", "Repas", "En Espagne, vers…"], lignes: [["[[desayunar]]", "[[el desayuno]] (petit-déjeuner)", "7 h 30"], ["[[comer / almorzar]]", "[[la comida]] (déjeuner)", "14 h 30 – 15 h"], ["[[merendar]]", "[[la merienda]] (goûter)", "18 h"], ["[[cenar]]", "[[la cena]] (dîner)", "21 h"]] },
            { t: "texte", md: "En Espagne, les cours finissent souvent vers **14 h** ou **14 h 30**. On rentre déjeuner en famille vers 14 h ou 15 h, et on dîne tard, vers **21 h**. L'après-midi, on fait ses devoirs (**[[hacer los deberes]]**), du sport, et on prend un goûter (*[[meriendo un bocadillo]]*).\n\n*[[Vuelvo a casa a las dos y media, como con mi familia y después hago los deberes.]]*" },
            { t: "savais-tu", md: "Dans beaucoup de collèges espagnols, il n'y a pas de cantine obligatoire : la *[[jornada continua]]* (journée continue) regroupe tous les cours le matin. L'après-midi reste libre pour les activités." },
            { t: "verifie", q: "Quelle est la forme de « [[acostarse]] » avec « [[yo]] » ?", choix: ["[[me acosto]]", "[[me acuesto]]", "[[yo acuesto]]"], bonne: 1, explication: "*[[Acostarse]]* diphtongue ([[o → ue]]) et garde son pronom : **[[me acuesto]]**." },
          ],
        },
      ],
      bilan: "Tengo clase de inglés a las nueve ; me levanto, me ducho, desayuno ; je vis à l'heure espagnole : comida à 15 h, cena à 21 h.",
    },

    "5e-espagnol-08-maison-ville-loisirs": {
      accroche: "Diego, un Colombien de 13 ans, vient passer une semaine chez toi. Il veut tout savoir : « ¿Dónde está mi dormitorio? ¿Hay una piscina cerca? ¿Juegas al fútbol? ». Pour lui faire visiter ta maison, ta ville et partager tes loisirs, il te faut les bons mots.",
      objectifs: [
        "Décrire ta maison et situer des objets avec des prépositions",
        "Nommer les lieux de la ville et indiquer un chemin",
        "Parler de tes loisirs et de tes sports",
      ],
      sections: [
        {
          titre: "[[Mi casa]] : les pièces et les meubles",
          blocs: [
            { t: "schema", titre: "[[El plano de mi casa]]", legende: "[[En el dormitorio, la cama está al lado de la ventana y la silla está delante de la mesa.]]", svg: `<svg viewBox="0 0 400 250"><rect class="aplat-papier" x="20" y="20" width="280" height="210"/><rect class="trait" x="20" y="20" width="280" height="210"/><line class="trait" x1="20" y1="110" x2="300" y2="110"/><line class="trait" x1="140" y1="20" x2="140" y2="110"/><line class="trait" x1="110" y1="110" x2="110" y2="230"/><text class="texte" x="80" y="60" text-anchor="middle">la cocina</text><text class="texte" x="220" y="60" text-anchor="middle">el salón</text><text class="texte" x="65" y="165" text-anchor="middle">el cuarto</text><text class="texte" x="65" y="181" text-anchor="middle">de baño</text><text class="texte" x="175" y="128" text-anchor="middle">el dormitorio</text><rect class="aplat" x="225" y="150" width="62" height="70" rx="4"/><rect class="trait-fin" x="225" y="150" width="62" height="70" rx="4"/><text class="texte-petit" x="256" y="190" text-anchor="middle">la cama</text><line stroke="var(--pigment)" stroke-width="6" x1="300" y1="150" x2="300" y2="205"/><text class="texte-petit" x="306" y="220">la ventana</text><rect class="trait-fin" x="125" y="150" width="60" height="32"/><text class="texte-petit" x="155" y="170" text-anchor="middle">la mesa</text><rect class="aplat-fort" x="143" y="192" width="24" height="20"/><text class="texte-petit" x="155" y="226" text-anchor="middle">la silla</text><circle class="aplat" cx="350" cy="80" r="26"/><circle class="trait-fin" cx="350" cy="80" r="26"/><line class="trait" x1="350" y1="106" x2="350" y2="130"/><text class="texte" x="350" y="160" text-anchor="middle">el jardín</text><line class="trait" x1="60" y1="230" x2="90" y2="230" stroke="var(--papier)" stroke-width="5"/><text class="texte-petit" x="75" y="246" text-anchor="middle">la puerta</text></svg>` },
            { t: "tableau", titre: "Les pièces et les meubles", entetes: ["Les pièces", "Les meubles et objets"], lignes: [["[[la cocina]] (la cuisine)", "[[la cama]] (le lit)"], ["[[el salón]] (le salon)", "[[la mesa]] (la table)"], ["[[el dormitorio]] (la chambre)", "[[la silla]] (la chaise)"], ["[[el cuarto de baño]] (la salle de bains)", "[[el armario]] (l'armoire)"], ["[[el jardín]] (le jardin)", "[[la ventana]] (la fenêtre) / [[la puerta]] (la porte)"]] },
            { t: "exemple", titre: "Décrire sa maison", md: "*[[Mi casa tiene tres dormitorios, una cocina grande y un jardín. Mi dormitorio es pequeño pero bonito.]]* Ma maison a trois chambres, une grande cuisine et un jardin. Ma chambre est petite mais jolie." },
            { t: "verifie", q: "Que signifie « [[la cama]] » ?", choix: ["La chambre", "Le lit", "La cuisine", "La table"], bonne: 1, explication: "**[[La cama]]** est le lit. La chambre se dit *[[el dormitorio]]*, la cuisine *[[la cocina]]*, la table *[[la mesa]]*." },
          ],
        },
        {
          titre: "Situer : où est le chat ?",
          blocs: [
            { t: "texte", md: "Pour situer un objet ou une personne, on utilise **[[estar]]** (le lieu !) suivi d'une préposition. La plupart se construisent avec **[[de]]** : *[[debajo **de** la mesa]]*." },
            { t: "tableau", titre: "Les prépositions de lieu", entetes: ["Espagnol", "Français", "Exemple"], lignes: [["[[en]]", "dans, sur", "[[El libro está en la mochila.]]"], ["[[encima de]]", "sur, au-dessus de", "[[El libro está encima de la silla.]]"], ["[[debajo de]]", "sous", "[[El gato está debajo de la mesa.]]"], ["[[delante de]]", "devant", "[[La silla está delante de la mesa.]]"], ["[[detrás de]]", "derrière", "[[El jardín está detrás de la casa.]]"], ["[[al lado de]]", "à côté de", "[[La cama está al lado de la ventana.]]"], ["[[entre]]", "entre", "[[El libro está entre la cama y la ventana.]]"]] },
            { t: "propriete", titre: "Deux contractions obligatoires", md: "**[[a]] + [[el]] = [[al]]** : *[[Voy **al** cine.]]* *[[Está **al** lado **del** armario.]]*\n**[[de]] + [[el]] = [[del]]** : *[[Vuelvo **del** colegio. Está cerca **del** parque.]]*\nAvec [[*la*, *los*, *las*]], pas de contraction : *[[a la piscina]]*, *[[de la casa]]*." },
            { t: "verifie", q: "Comment dit-on « Le livre est entre le lit et la fenêtre » ?", choix: ["[[El libro es entre la cama y la ventana.]]", "[[El libro está entre la cama y la ventana.]]", "[[Hay el libro entre la cama y la ventana.]]"], bonne: 1, explication: "Pour un lieu, on emploie **[[estar]]** : *[[está entre…]]*. *[[Hay]]* n'accepte pas l'article défini, et *[[es]]* ne sert pas pour situer." },
          ],
        },
        {
          titre: "En ville : se repérer",
          blocs: [
            { t: "liste", titre: "Les lieux de la ville", items: ["**[[el ayuntamiento]]** : la mairie", "**[[la biblioteca]]** : la bibliothèque", "**[[la librería]]** : la librairie (on y achète des livres)", "**[[la panadería]]** : la boulangerie", "**[[la estación]]** : la gare", "**[[el parque]]**, **[[la plaza]]** (la place), [[**la piscina**, **el cine**]]"] },
            { t: "attention", md: "Faux ami célèbre : **[[la librería]]** est la *librairie*, où l'on achète des livres. La *bibliothèque*, où on les emprunte, c'est **[[la biblioteca]]**." },
            { t: "etapes", titre: "[[— Perdona, ¿dónde está la estación?]]", items: [{ titre: "[[Todo recto]]", md: "*[[Sigue todo recto.]]* Continue tout droit." }, { titre: "[[A la derecha]]", md: "*[[Gira a la derecha en la plaza.]]* Tourne à droite sur la place." }, { titre: "[[La primera calle]]", md: "*[[Toma la primera calle a la izquierda.]]* Prends la première rue à gauche." }, { titre: "[[¡Ya está!]]", md: "*[[La estación está a la izquierda, cerca del parque.]]* La gare est à gauche, près du parc." }] },
            { t: "astuce", md: "**[[derecha]]** (droite) et **[[izquierda]]** (gauche) se confondent facilement. Retiens : *[[derecha]]* a un **d** comme « droite ». Et **[[cerca de]]** = près de, **[[lejos de]]** = loin de." },
          ],
        },
        {
          titre: "Mes loisirs et mes sports",
          blocs: [
            { t: "tableau", titre: "[[Jugar]] ou [[tocar]] ?", entetes: ["Verbe", "Pour…", "Exemples"], lignes: [["[[**jugar al / a la**]]", "les sports et les jeux", "[[juego al fútbol, al baloncesto, al tenis]]"], ["[[**tocar el / la**]]", "les instruments", "[[toco la guitarra, el piano]]"], ["autres verbes", "les loisirs", "[[nadar, bailar, leer, montar en bici, escuchar música, ver la tele]]"]] },
            { t: "texte", md: "« Jouer » a donc deux traductions : **[[jugar]]** pour les sports (*[[juego al fútbol]]* : n'oublie pas **[[al]]**), **[[tocar]]** pour la musique (*[[toco la guitarra]]*). Pour parler de ta passion : *[[Mi afición favorita es leer y mi deporte favorito es el baloncesto.]]*" },
            { t: "propriete", titre: "Le futur proche : [[ir a]] + infinitif", md: "Comme « je vais nager » en français : **[[ir a]]** + infinitif.\n*[[Voy a nadar.]]* Je vais nager.\n*[[Mañana vamos a ir al cine.]]* Demain, nous allons aller au cinéma.\n*[[Vamos a ir a la playa.]]* Nous allons aller à la plage." },
            { t: "exemple", titre: "Le week-end", md: "*[[Los sábados voy a la piscina con mis amigos y juego al baloncesto. El domingo voy a tocar la guitarra con mi primo.]]* Le samedi, je vais à la piscine avec mes amis et je joue au basket. Dimanche, je vais jouer de la guitare avec mon cousin." },
          ],
        },
      ],
      bilan: "Estar + préposition pour situer, al et del pour contracter, a la derecha ou a la izquierda pour guider ; et pour jouer : jugar al fútbol, tocar la guitarra.",
    },

    "5e-espagnol-09-nourriture-corps": {
      accroche: "Samedi matin, au marché de la Boquería, à Barcelone. Des montagnes de fraises, d'oranges et de jambon. Carmen, 12 ans, fait les courses pour sa grand-mère : « Quería un kilo de naranjas, por favor ». Le soir, elle a trop mangé : « ¡Me duele el estómago! ».",
      objectifs: [
        "Nommer les aliments et les repas",
        "Faire tes courses au marché : quantités et prix",
        "Nommer les parties du corps et dire où tu as mal",
      ],
      sections: [
        {
          titre: "À table ! Les repas et les aliments",
          blocs: [
            { t: "texte", md: "Tu connais déjà les quatre repas espagnols : **[[el desayuno]]** (le petit-déjeuner), **[[la comida]]** ou **[[el almuerzo]]** (le déjeuner), **[[la merienda]]** (le goûter) et **[[la cena]]** (le dîner). Voici de quoi les remplir." },
            { t: "tableau", titre: "Les aliments", entetes: ["Produits de base", "Fruits", "Boissons et légumes"], lignes: [["[[el pan]] (le pain)", "[[la manzana]] (la pomme)", "[[el agua]] (l'eau)"], ["[[el queso]] (le fromage)", "[[la naranja]] (l'orange)", "[[la leche]] (le lait)"], ["[[los huevos]] (les œufs)", "[[el plátano]] (la banane)", "[[el zumo]] (le jus)"], ["[[el pollo]] (le poulet)", "[[la fresa]] (la fraise)", "[[las verduras]] (les légumes)"], ["[[el pescado]] (le poisson)", "[[la pera]] (la poire)", "[[los tomates]] (les tomates)"], ["[[la carne]] (la viande), [[el arroz]] (le riz)", "[[las uvas]] (le raisin)", "[[las patatas]] (les pommes de terre)"]] },
            { t: "propriete", titre: "Avoir faim, avoir soif : avec [[tener]]", md: "Comme en français, on **a** faim : **[[Tengo hambre]]** (j'ai faim), **[[tengo sed]]** (j'ai soif). On ne dit jamais *[[estoy hambre]]*." },
            { t: "attention", md: "**[[El agua]]** est féminin, mais on dit *[[el]]* devant un **a** accentué pour éviter « [[la agua]] » : *[[el agua fría]]* (l'eau froide). Et **[[la leche]]** (le lait) est féminin. Attention aussi : *[[el zumo]]* en Espagne se dit *[[el jugo]]* en Amérique latine." },
            { t: "verifie", q: "Que signifie « [[el desayuno]] » ?", choix: ["Le dîner", "Le petit-déjeuner", "Le goûter", "Le déjeuner"], bonne: 1, explication: "**[[El desayuno]]** est le petit-déjeuner (*[[desayunar]]* = prendre le petit-déjeuner). Le dîner est *[[la cena]]*, le goûter *[[la merienda]]*." },
          ],
        },
        {
          titre: "Au marché : quantités et prix",
          blocs: [
            { t: "etapes", titre: "Un dialogue au marché", items: [{ titre: "Saluer", md: "— *[[Buenos días.]]*" }, { titre: "Demander", md: "— *[[Quería medio kilo de fresas, por favor.]]* Je voudrais un demi-kilo de fraises, s'il vous plaît." }, { titre: "Le prix", md: "— *[[¿Cuánto cuesta?]]* Combien ça coûte ?\n— *[[Son tres euros.]]*" }, { titre: "Payer", md: "— *[[Aquí tiene. Gracias.]]* Voici. Merci." }, { titre: "Partir", md: "— *[[¡Adiós, hasta luego!]]*" }] },
            { t: "tableau", titre: "Les quantités", entetes: ["Espagnol", "Français"], lignes: [["[[un kilo de manzanas]]", "un kilo de pommes"], ["[[medio kilo de fresas]]", "un demi-kilo de fraises"], ["[[una docena de huevos]]", "une douzaine d'œufs"], ["[[una botella de agua]]", "une bouteille d'eau"], ["[[un litro de leche]]", "un litre de lait"]] },
            { t: "astuce", md: "**[[Quería]]** (je voudrais) est plus poli que **[[quiero]]** (je veux) : c'est la formule idéale chez un commerçant. Et pour le prix total : **[[¿Cuánto es?]]** (ça fait combien ?)." },
            { t: "exemple", titre: "Calculer ce qu'on paie", md: "*[[Dos kilos de naranjas a tres euros el kilo.]]* Deux kilos d'oranges à trois euros le kilo : 2 × 3 = **6 euros**. *[[Son seis euros.]]*" },
          ],
        },
        {
          titre: "Le corps humain",
          blocs: [
            { t: "schema", titre: "[[El cuerpo]]", legende: "Au pluriel : [[los ojos, las orejas]] (les oreilles), [[los dientes]] (les dents), [[los pies]].", svg: `<svg viewBox="0 0 400 250"><circle class="aplat" cx="200" cy="45" r="26"/><circle class="trait" cx="200" cy="45" r="26"/><circle class="aplat-fort" cx="191" cy="40" r="3"/><circle class="aplat-fort" cx="209" cy="40" r="3"/><path class="trait-fin" d="M200 42 L197 50 L201 50"/><path class="trait-fin" d="M190 58 Q200 64 210 58"/><line class="trait" x1="200" y1="71" x2="200" y2="150"/><path class="trait" d="M200 88 L150 132 M200 88 L250 132"/><circle class="aplat-papier" cx="148" cy="135" r="7"/><circle class="trait-fin" cx="148" cy="135" r="7"/><path class="trait" d="M200 150 L170 222 M200 150 L230 222"/><path class="trait" d="M170 222 L152 226 M230 222 L248 226"/><path class="pointille" d="M120 30 L172 38 M120 100 L175 110 M120 140 L140 136 M120 185 L185 186 M120 228 L158 225"/><text class="texte" x="115" y="34" text-anchor="end">la cabeza</text><text class="texte" x="115" y="104" text-anchor="end">el brazo</text><text class="texte" x="115" y="144" text-anchor="end">la mano</text><text class="texte" x="115" y="189" text-anchor="end">la pierna</text><text class="texte" x="115" y="232" text-anchor="end">el pie</text><path class="pointille" d="M280 30 L212 39 M280 50 L204 47 M280 70 L211 60 M280 120 L204 120"/><text class="texte" x="285" y="34">los ojos</text><text class="texte" x="285" y="54">la nariz</text><text class="texte" x="285" y="74">la boca</text><text class="texte" x="285" y="124">el estómago</text><text class="texte-petit" x="285" y="180">la espalda (le dos)</text><text class="texte-petit" x="285" y="194">est derrière</text></svg>` },
            { t: "texte", md: "Retiens les mots les plus utiles : **[[la cabeza]]** (la tête), **[[los ojos]]** (les yeux), **[[la nariz]]** (le nez), **[[la boca]]** (la bouche), **[[las orejas]]** (les oreilles), **[[los dientes]]** (les dents), **[[el brazo]]** (le bras), **[[la mano]]** (la main, féminin malgré le -o !), **[[la pierna]]** (la jambe), **[[el pie]]** (le pied), **[[la espalda]]** (le dos), **[[el estómago]]** (le ventre, l'estomac)." },
            { t: "verifie", q: "Que signifie « [[la pierna]] » ?", choix: ["Le pied", "La jambe", "La pierre", "Le bras"], bonne: 1, explication: "**[[La pierna]]** est la jambe. Le pied se dit *[[el pie]]*, le bras *[[el brazo]]*. Ce n'est pas « la pierre » (*[[la piedra]]*) !" },
          ],
        },
        {
          titre: "J'ai mal : le verbe [[doler]]",
          blocs: [
            { t: "propriete", titre: "[[Doler]] se construit comme [[gustar]]", md: "Pour dire « j'ai mal à… », on dit en espagnol « **me fait mal** » : c'est la partie du corps qui est le sujet.\n• partie du corps au **singulier** → **[[duele]]** : *[[Me duele la cabeza.]]*\n• partie du corps au **pluriel** → **[[duelen]]** : *[[Me duelen los pies.]]*\n*[[Doler]]* diphtongue ([[o → ue]]), comme *[[poder]]*." },
            { t: "tableau", titre: "Qui a mal ?", entetes: ["Pronom", "Singulier", "Pluriel"], lignes: [["[[(a mí) me]]", "[[me duele la cabeza]]", "[[me duelen los pies]]"], ["[[(a ti) te]]", "[[te duele la espalda]]", "[[te duelen los ojos]]"], ["[[(a él / a ella) le]]", "[[le duele el estómago]]", "[[le duelen los dientes]]"], ["[[(a nosotros) nos]]", "[[nos duele la garganta]]", "[[nos duelen las piernas]]"]] },
            { t: "attention", md: "Avec le corps, on utilise l'**article**, pas le possessif : *[[Me duele **la** cabeza]]*, jamais *[[me duele mi cabeza]]* (le *[[me]]* dit déjà que c'est ta tête). Et « elle a mal aux dents » se dit **[[Le duelen los dientes]]**, au pluriel." },
            { t: "exemple", titre: "Chez le médecin… ou à la maison", md: "— *[[¿Qué te pasa?]]* Qu'est-ce qui t'arrive ?\n— *[[Me duele el estómago y me duelen las piernas.]]* J'ai mal au ventre et aux jambes.\n— *[[¡Pobrecita! Hoy no vas al instituto.]]* Ma pauvre ! Aujourd'hui, tu ne vas pas au collège." },
            { t: "verifie", q: "Comment dit-on « J'ai mal à la tête » ?", choix: ["[[Tengo mal la cabeza.]]", "[[Me duele la cabeza.]]", "[[Me duelen la cabeza.]]", "[[Me duele mi cabeza.]]"], bonne: 1, explication: "*[[La cabeza]]* est au singulier, donc **[[duele]]**, et on emploie l'article *[[la]]*, pas le possessif : **[[Me duele la cabeza]]**." },
          ],
        },
      ],
      bilan: "Tengo hambre, quería un kilo de fresas, ¿cuánto cuesta? ; et quand ça ne va pas : me duele la cabeza, me duelen los pies, avec l'article et jamais le possessif.",
    },

    "5e-espagnol-10-monde-hispanophone": {
      accroche: "Le 31 décembre à minuit, à Madrid, des milliers de personnes avalent douze grains de raisin, un à chaque coup de l'horloge de la Puerta del Sol. Au même moment, à Mexico, il n'est que 17 heures. L'espagnol se parle sur deux continents, et chaque pays a ses fêtes, ses artistes et ses accents.",
      objectifs: [
        "Situer l'Espagne, ses régions et ses grandes villes",
        "Connaître les pays et les capitales de l'Amérique hispanophone",
        "Connaître des fêtes et des artistes du monde hispanophone",
      ],
      sections: [
        {
          titre: "L'espagnol, une langue sur deux continents",
          blocs: [
            { t: "texte", md: "L'espagnol est la langue maternelle d'environ **500 millions** de personnes, ce qui en fait la deuxième langue maternelle du monde, après le chinois mandarin. On le parle en **Espagne**, dans presque toute l'**Amérique latine** et en **Guinée équatoriale**, en Afrique. Le pays qui compte le plus d'hispanophones n'est pas l'Espagne, mais le **Mexique** !" },
            { t: "carte", fond: "monde", titre: "Les pays où l'espagnol est langue officielle", zones: ["ES", "MX", "GT", "SV", "HN", "NI", "CR", "PA", "CU", "DO", "PR", "CO", "VE", "EC", "PE", "BO", "CL", "AR", "UY", "PY", "GQ"], reperes: [{ nom: "Madrid", lat: 40.4168, lon: -3.7038 }, { nom: "Ciudad de México", lat: 19.4326, lon: -99.1332 }, { nom: "La Habana", lat: 23.1136, lon: -82.3666 }, { nom: "Bogotá", lat: 4.711, lon: -74.0721 }, { nom: "Lima", lat: -12.0464, lon: -77.0428 }, { nom: "Santiago", lat: -33.4489, lon: -70.6693 }, { nom: "Buenos Aires", lat: -34.6037, lon: -58.3816 }], legende: "Le Brésil, au centre de l'Amérique du Sud, n'est pas coloré : on y parle portugais." },
            { t: "attention", md: "Le **Brésil** n'est pas hispanophone : on y parle **portugais**. C'est le plus grand pays d'Amérique du Sud, mais pas un pays de langue espagnole." },
            { t: "verifie", q: "Environ combien de personnes parlent espagnol comme langue maternelle ?", choix: ["50 millions", "500 millions", "5 milliards"], bonne: 1, explication: "Environ **500 millions** de personnes ont l'espagnol pour langue maternelle, surtout en Amérique latine." },
          ],
        },
        {
          titre: "L'Espagne, ses régions et ses villes",
          blocs: [
            { t: "carte", fond: "monde", titre: "España : grandes villes", cadre: [-10, 35.5, 4.5, 44.2], zones: ["ES"], reperes: [{ nom: "Madrid", lat: 40.4168, lon: -3.7038 }, { nom: "Barcelona", lat: 41.3874, lon: 2.1686 }, { nom: "Sevilla", lat: 37.3891, lon: -5.9845 }, { nom: "Granada", lat: 37.1773, lon: -3.5986 }, { nom: "Valencia", lat: 39.4699, lon: -0.3763 }, { nom: "Pamplona", lat: 42.8125, lon: -1.6458 }, { nom: "Bilbao", lat: 43.263, lon: -2.935 }, { nom: "Santiago de Compostela", lat: 42.8782, lon: -8.5448 }], legende: "Les îles Baléares sont en Méditerranée ; les Canaries, au large de l'Afrique, sont hors du cadre." },
            { t: "texte", md: "La capitale est **Madrid**, au centre du pays : on y visite le **musée du Prado** et le **Palais royal**. L'Espagne est divisée en régions appelées *comunidades autónomas* :\n• **Cataluña** (Catalogne), capitale **Barcelona**, la ville de Gaudí ;\n• **Andalucía** (Andalousie), au sud : **Sevilla**, traversée par le fleuve **Guadalquivir**, et **Granada**, avec l'Alhambra. C'est la terre du **flamenco** ;\n• **Galicia**, **País Vasco**, **Valencia**, et les îles **Baleares** et **Canarias**." },
            { t: "savais-tu", md: "En Espagne, on parle aussi d'autres langues, officielles dans leur région : le **catalan** en Catalogne, le **galicien** en Galice et le **basque** (*euskera*) au Pays basque. L'espagnol s'appelle aussi **el castellano**, la langue de Castille." },
            { t: "verifie", q: "Barcelone est la capitale de quelle région d'Espagne ?", choix: ["L'Andalousie", "La Catalogne", "La Galice", "Le Pays basque"], bonne: 1, explication: "**Barcelona** est la capitale de la **Catalogne** (*Cataluña*). La capitale de l'Andalousie est Séville." },
          ],
        },
        {
          titre: "L'Amérique hispanophone",
          blocs: [
            { t: "tableau", titre: "Pays et capitales", entetes: ["País", "Capital", "Pays (en français)"], lignes: [["México", "Ciudad de México", "Mexique"], ["Cuba", "La Habana", "Cuba"], ["Colombia", "Bogotá", "Colombie"], ["Venezuela", "Caracas", "Venezuela"], ["Perú", "Lima", "Pérou"], ["Chile", "Santiago", "Chili"], ["Argentina", "Buenos Aires", "Argentine"]] },
            { t: "texte", md: "Du **nord au sud** : le **Mexique** touche les États-Unis, puis viennent l'Amérique centrale et **Cuba** dans la mer des Caraïbes, la **Colombie** et le **Venezuela** près de l'équateur, le **Pérou**, et tout au sud le **Chili** et l'**Argentine**, jusqu'à la Terre de Feu.\n\nEspagnols et Latino-Américains parlent la même langue, avec des accents et quelques mots différents : *el zumo / el jugo* (le jus), *el coche / el carro* (la voiture), *el ordenador / la computadora* (l'ordinateur)." },
          ],
        },
        {
          titre: "Une année de fêtes",
          blocs: [
            { t: "etapes", titre: "El calendario de las fiestas", cycle: true, items: [{ titre: "6 de enero : Reyes Magos", md: "Les trois Rois mages apportent les cadeaux aux enfants espagnols." }, { titre: "Marzo o abril : Semana Santa", md: "La semaine sainte avant Pâques : grandes processions, par exemple à Séville." }, { titre: "6 – 14 de julio : San Fermín", md: "À **Pamplona**, vêtus de blanc et d'un foulard rouge, les coureurs précèdent les taureaux dans les rues : les *encierros*." }, { titre: "1 y 2 de noviembre : Día de Muertos", md: "Au **Mexique**, on honore les défunts avec des autels fleuris, des têtes de mort en sucre (*calaveras*) et le *pan de muerto*." }, { titre: "24 y 25 de diciembre : Nochebuena y Navidad", md: "Le réveillon et Noël, en famille." }, { titre: "31 de diciembre : Nochevieja", md: "À minuit, on mange **douze grains de raisin**, un à chaque coup de cloche : *las doce uvas*." }] },
            { t: "exemple", titre: "Le 6 janvier, el día de Reyes", md: "Le 5 janvier au soir, les Rois mages défilent dans les rues : c'est la *cabalgata*. Le 6 au matin, les enfants espagnols ouvrent leurs cadeaux et mangent le **roscón de Reyes**, une brioche en couronne qui cache une petite figurine." },
            { t: "verifie", q: "Dans quel pays célèbre-t-on surtout le Día de Muertos ?", choix: ["En Espagne", "Au Mexique", "En Argentine", "Au Chili"], bonne: 1, explication: "Le **Día de Muertos** (1er et 2 novembre) est une grande fête **mexicaine**, inscrite au patrimoine culturel immatériel de l'UNESCO depuis 2008." },
          ],
        },
        {
          titre: "Des artistes à connaître",
          blocs: [
            { t: "frise", titre: "Grands artistes du monde hispanophone", evenements: [{ date: 1656, label: "Velázquez peint « Las Meninas »", detail: "La petite infante entourée de ses demoiselles d'honneur, au musée du Prado." }, { date: 1814, label: "Goya peint « El 3 de mayo de 1808 »", detail: "Les fusillades de Madrid par les soldats de Napoléon." }, { date: 1882, label: "Début de la Sagrada Familia", detail: "Gaudí en prend la direction en 1883 ; la basilique de Barcelone est toujours en chantier." }, { date: 1931, label: "Dalí peint « La persistencia de la memoria »", detail: "Le tableau surréaliste aux montres molles." }, { date: 1937, label: "Picasso peint « Guernica »", detail: "Contre le bombardement de la ville basque pendant la guerre d'Espagne." }, { date: 1939, label: "Frida Kahlo peint « Las dos Fridas »", detail: "La peintre mexicaine est célèbre pour ses autoportraits." }] },
            { t: "definition", terme: "Le surréalisme", md: "Un mouvement artistique du XXe siècle qui peint les rêves et l'imaginaire. **Salvador Dalí** en est la grande figure espagnole, avec ses célèbres montres molles." },
            { t: "astuce", md: "Pour retenir qui a fait quoi : **Gaudí** = architecte (*Sagrada Familia*, *Parque Güell*) ; **Picasso** = *Guernica* ; **Dalí** = montres molles ; **Frida Kahlo** = autoportraits mexicains ; **Velázquez** = *Las Meninas*." },
          ],
        },
      ],
      bilan: "De Madrid à Buenos Aires, de San Fermín au Día de Muertos, de Velázquez à Frida Kahlo : l'espagnol est une langue, mais une vingtaine de pays et mille couleurs.",
    },
  },
};
