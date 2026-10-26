// ÉCLORE — Cours illustrés, 4e Espagnol (LV2, deuxième année, niveau A1+ vers A2).
// Schéma : docs/COURS.md. Validation : node tools/validate-cours.mjs content/cours/4e/espagnol.js
export default {
  id: "4e-espagnol",
  chapitres: {
    "4e-espagnol-01-present-revisions": {
      accroche: "Inés, une collégienne de Valencia, t'écrit : « Me llamo Inés, soy española y vivo en Valencia. » Trois verbes, trois terminaisons… et pas un seul pronom sujet ! Avant de raconter le passé et l'avenir, révisons le temps de base : le présent.",
      objectifs: [
        "Conjuguer au présent les verbes réguliers et les verbes à diphtongue",
        "Retenir les irréguliers courants : ser, estar, ir, tener, hacer, decir, venir, salir, poner",
        "Employer les verbes pronominaux comme levantarse",
        "Choisir entre ser et estar",
      ],
      sections: [
        {
          titre: "Trois groupes, une même logique",
          blocs: [
            { t: "texte", md: "En espagnol, l'infinitif se termine par **[[-ar]]**, **[[-er]]** ou **[[-ir]]**. Pour conjuguer, on enlève cette terminaison et on ajoute celle de la personne.\n\nLa terminaison est si claire qu'on ==n'utilise presque jamais le pronom sujet== : *[[Hablo español]]* veut dire « je parle espagnol ». On garde *[[yo]]*, *[[tú]]*, *[[él]]* seulement pour insister ou pour éviter une confusion." },
            { t: "tableau", titre: "Le présent des verbes réguliers", entetes: ["Personne", "[[hablar]] (parler)", "[[comer]] (manger)", "[[vivir]] (vivre)"], lignes: [["[[yo]]", "[[habl**o**]]", "[[com**o**]]", "[[viv**o**]]"], ["[[tú]]", "[[habl**as**]]", "[[com**es**]]", "[[viv**es**]]"], ["[[él / ella / usted]]", "[[habl**a**]]", "[[com**e**]]", "[[viv**e**]]"], ["[[nosotros]]", "[[habl**amos**]]", "[[com**emos**]]", "[[viv**imos**]]"], ["[[vosotros]]", "[[habl**áis**]]", "[[com**éis**]]", "[[viv**ís**]]"], ["[[ellos / ellas / ustedes]]", "[[habl**an**]]", "[[com**en**]]", "[[viv**en**]]"]] },
            { t: "astuce", md: "Les verbes en [[-er]] et en [[-ir]] se ressemblent beaucoup : ils ne diffèrent qu'avec **[[nosotros]]** ([[comemos / vivimos]]) et **[[vosotros]]** ([[coméis / vivís]]). Et **[[usted]]**, le « vous » de politesse, se conjugue comme [[él]]." },
            { t: "exemple", titre: "Parler de sa famille", md: "*[[Yo **vivo** en Lyon y mis padres **trabajan** en un hospital.]]*\nJe vis à Lyon et mes parents travaillent dans un hôpital. [[Vivir]] → [[yo viv**o**]] ; [[trabajar]] → [[ellos trabaj**an**]]." },
            { t: "verifie", q: "Quelle est la forme de « [[hablar]] » avec [[nosotros]] ?", choix: ["[[hablemos]]", "[[hablamos]]", "[[hablan]]", "[[habláis]]"], bonne: 1, explication: "Verbe en [[-ar]] : radical [[habl-]] + [[-amos]] = [[hablamos]]. [[Hablan]], c'est « ils parlent » ; [[habláis]], « vous parlez »." },
          ],
        },
        {
          titre: "Les verbes qui se transforment : la botte",
          blocs: [
            { t: "propriete", titre: "Les diphtongues", md: "Dans certains verbes, la voyelle du radical se transforme quand elle porte l'accent tonique :\n• **[[e]] → [[ie]]** : [[querer]] → **[[quiero]]**, [[pensar]] → **[[pienso]]**, [[empezar]] → **[[empiezo]]**, [[preferir]] → **[[prefiero]]** ;\n• **[[o]] → [[ue]]** : [[poder]] → **[[puedo]]**, [[dormir]] → **[[duermo]]**, [[volver]] → **[[vuelvo]]**, [[contar]] → **[[cuento]]** (et [[jugar]] → **[[juego]]**).\n==Avec [[nosotros]] et [[vosotros]], pas de diphtongue== : [[queremos, queréis, podemos, podéis.]]" },
            { t: "schema", titre: "La botte des diphtongues", legende: "Les quatre personnes dans la botte changent de voyelle. [[Nosotros]] et [[vosotros]] restent dehors : leur radical ne bouge pas.", svg: `<svg viewBox="0 0 400 230"><path class="aplat" d="M40 40 L200 40 L200 122 L370 122 L370 180 L40 180 Z"/><path class="trait" fill="none" d="M40 40 L200 40 L200 122 L370 122 L370 180 L40 180 Z"/><text class="texte" x="120" y="70" text-anchor="middle">yo qu<tspan class="texte-pigment">ie</tspan>ro</text><text class="texte" x="120" y="106" text-anchor="middle">tú qu<tspan class="texte-pigment">ie</tspan>res</text><text class="texte" x="120" y="158" text-anchor="middle">él qu<tspan class="texte-pigment">ie</tspan>re</text><text class="texte" x="285" y="70" text-anchor="middle">nosotros queremos</text><text class="texte" x="285" y="106" text-anchor="middle">vosotros queréis</text><text class="texte" x="285" y="158" text-anchor="middle">ellos qu<tspan class="texte-pigment">ie</tspan>ren</text><text class="texte-petit" x="285" y="30" text-anchor="middle">hors de la botte : e reste e</text><text class="texte-main" x="200" y="212" text-anchor="middle">dans la botte : e → ie, o → ue</text></svg>` },
            { t: "attention", md: "Erreur classique : *[[vosotros quieréis]]* ou *[[nosotros puedemos]]*. Avec [[nosotros]] et [[vosotros]], l'accent tonique tombe sur la terminaison, pas sur le radical : la voyelle reste intacte. On dit **[[queréis]]** et **[[podemos]]**." },
            { t: "exemple", titre: "Dans la botte ou dehors ?", md: "*[[Nosotros **podemos** salir, pero ellos no **pueden**.]]*\nNous, nous pouvons sortir, mais eux ne peuvent pas. [[Podemos]] est hors de la botte ; [[pueden]] est dedans." },
          ],
        },
        {
          titre: "Les irréguliers à connaître par cœur",
          blocs: [
            { t: "texte", md: "Les verbes les plus fréquents sont irréguliers. Bonne nouvelle : beaucoup ne le sont qu'à **la première personne** ([[yo]]). Le reste se conjugue presque normalement." },
            { t: "tableau", titre: "Irréguliers à la 1re personne", entetes: ["Infinitif", "[[yo]]", "Les autres personnes"], lignes: [["[[hacer]] (faire)", "[[**hago**]]", "[[haces, hace, hacemos, hacéis, hacen]]"], ["[[poner]] (mettre)", "[[**pongo**]]", "[[pones, pone, ponemos, ponéis, ponen]]"], ["[[salir]] (sortir)", "[[**salgo**]]", "[[sales, sale, salimos, salís, salen]]"], ["[[tener]] (avoir)", "[[**tengo**]]", "[[tienes, tiene, tenemos, tenéis, tienen]] ([[e]] → [[ie]])"], ["[[venir]] (venir)", "[[**vengo**]]", "[[vienes, viene, venimos, venís, vienen]] ([[e]] → [[ie]])"], ["[[decir]] (dire)", "[[**digo**]]", "[[dices, dice, decimos, decís, dicen]] ([[e]] → [[i]])"]] },
            { t: "tableau", titre: "Les trois grands irréguliers", entetes: ["Personne", "[[ser]] (être)", "[[estar]] (être)", "[[ir]] (aller)"], lignes: [["[[yo]]", "[[soy]]", "[[estoy]]", "[[voy]]"], ["[[tú]]", "[[eres]]", "[[estás]]", "[[vas]]"], ["[[él / ella]]", "[[es]]", "[[está]]", "[[va]]"], ["[[nosotros]]", "[[somos]]", "[[estamos]]", "[[vamos]]"], ["[[vosotros]]", "[[sois]]", "[[estáis]]", "[[vais]]"], ["[[ellos / ellas]]", "[[son]]", "[[están]]", "[[van]]"]] },
            { t: "exemple", titre: "Une matinée bien remplie", md: "*[[Por la mañana **hago** la cama, **pongo** la mesa y **salgo** de casa a las ocho. **Voy** al colegio a pie.]]*\nLe matin, je fais mon lit, je mets la table et je sors de chez moi à huit heures. Je vais au collège à pied." },
            { t: "verifie", q: "Quelle est la forme de « [[decir]] » avec [[tú]] ?", choix: ["[[deces]]", "[[dices]]", "[[decís]]", "[[digues]]"], bonne: 1, explication: "[[Decir]] change son [[e]] en [[i]] : [[digo, dices, dice, decimos, decís, dicen.]] [[Decís]] est la forme de [[vosotros]]." },
          ],
        },
        {
          titre: "Les verbes pronominaux",
          blocs: [
            { t: "definition", terme: "Verbe pronominal", md: "Un verbe qui se conjugue avec un pronom réfléchi. On le reconnaît à son infinitif en **[[-se]]** : *[[levantarse]]* (se lever), *[[ducharse]]* (se doucher), *[[llamarse]]* (s'appeler), *[[acostarse]]* (se coucher)." },
            { t: "tableau", titre: "[[Levantarse]] au présent", entetes: ["Personne", "Pronom + verbe", "Français"], lignes: [["[[yo]]", "[[**me** levanto]]", "je me lève"], ["[[tú]]", "[[**te** levantas]]", "tu te lèves"], ["[[él / ella]]", "[[**se** levanta]]", "il / elle se lève"], ["[[nosotros]]", "[[**nos** levantamos]]", "nous nous levons"], ["[[vosotros]]", "[[**os** levantáis]]", "vous vous levez"], ["[[ellos / ellas]]", "[[**se** levantan]]", "ils / elles se lèvent"]] },
            { t: "attention", md: "Le pronom se place **devant** le verbe conjugué, comme en français : *[[me levanto]]*, jamais *[[levanto me]]*. Il ne se colle à la fin que de l'infinitif : *[[Voy a levantarme]]*. Pense aussi aux diphtongues : [[acostarse]] → **[[me acuesto]]**." },
            { t: "exemple", md: "*[[Por la mañana **me levanto** a las siete y **me ducho**. Mi hermano **se acuesta** muy tarde.]]*\nLe matin, je me lève à sept heures et je me douche. Mon frère se couche très tard." },
          ],
        },
        {
          titre: "[[Ser]] ou [[estar]] ?",
          blocs: [
            { t: "propriete", titre: "Deux verbes pour « être »", md: "**[[Ser]]** dit ce qu'on *est* : l'identité, l'origine, la nationalité, la profession, le caractère, l'heure. *[[Soy francés. Es médico. Son las tres.]]*\n**[[Estar]]** dit où l'on est et *comment* on va en ce moment : le lieu, un état passager, un résultat. *[[Estoy en casa. Estoy cansado.]]*" },
            { t: "exemple", titre: "[[Mi padre ___ médico y hoy ___ en casa.]]", etapes: ["« [[médico]] » est une profession, l'identité de la personne → **[[es]]**.", "« [[en casa]] » est un lieu → **[[está]]**.", "Résultat : *[[Mi padre es médico y hoy está en casa.]]* Mon père est médecin et aujourd'hui il est à la maison."] },
            { t: "astuce", md: "Pose-toi la question : la phrase dit **qui** ou **quoi** ([[ser]]), ou bien **où** et **comment ça va** ([[estar]]) ? *[[Soy de Madrid]]* : l'origine, donc [[ser]]. *[[Estoy contenta]]* : mon humeur du moment, donc [[estar]]." },
            { t: "verifie", q: "Comment dit-on « Je suis fatigué » ?", choix: ["[[Soy cansado]]", "[[Estoy cansado]]", "[[Tengo cansado]]"], bonne: 1, explication: "La fatigue est un état passager : on emploie [[estar]]. Une fille dira « [[Estoy cansada]] »." },
          ],
        },
      ],
      bilan: "Au présent, la terminaison dit qui parle ; la botte rappelle les diphtongues ; et pour « être », ser dit qui tu es, estar dit où tu es et comment tu vas.",
    },
    "4e-espagnol-02-preterito-perfecto": {
      accroche: "Le soir, ta correspondante t'appelle : « ¿Qué has hecho hoy? » Pour lui raconter ta journée, il te faut un passé qui touche encore le présent : le pretérito perfecto, cousin du passé composé français.",
      objectifs: [
        "Former le pretérito perfecto avec haber et le participe passé",
        "Connaître les participes passés irréguliers les plus courants",
        "Placer correctement les pronoms et la négation",
        "Employer ce temps avec ses marqueurs : hoy, esta semana, ya, todavía no…",
      ],
      sections: [
        {
          titre: "Un passé encore relié au présent",
          blocs: [
            { t: "texte", md: "Le [[pretérito perfecto]] raconte ce qui s'est passé ==dans une période qui n'est pas encore terminée== : aujourd'hui, cette semaine, cette année. *[[Hoy he comido paella]]* : aujourd'hui (la journée continue), j'ai mangé de la paella.\n\nIl sert aussi à parler d'**expériences**, sans date précise : *[[¿Has estado alguna vez en México?]]* (Es-tu déjà allé au Mexique ?)" },
            { t: "schema", titre: "Le passé d'une période pas finie", legende: "Hier est terminé : on emploie un autre temps. Mais aujourd'hui, cette semaine, cette année continuent jusqu'à maintenant : c'est le domaine du [[pretérito perfecto]].", svg: `<svg viewBox="0 0 400 200"><rect class="aplat" x="150" y="40" width="200" height="110" rx="10"/><rect class="trait-fin" x="150" y="40" width="200" height="110" rx="10" fill="none"/><text class="texte-petit" x="250" y="62" text-anchor="middle">hoy, esta semana, este año</text><line class="trait" x1="15" y1="110" x2="385" y2="110" marker-end="url(#fl)"/><line class="trait" x1="320" y1="96" x2="320" y2="124"/><text class="texte" x="320" y="140" text-anchor="middle">ahora</text><circle cx="225" cy="110" r="6" fill="var(--pigment)"/><text class="texte-main" x="225" y="94" text-anchor="middle">he comido</text><circle cx="80" cy="110" r="6" fill="var(--encre)"/><text class="texte-main" x="80" y="94" text-anchor="middle">comí</text><text class="texte-petit" x="80" y="135" text-anchor="middle">ayer</text><text class="texte-petit" x="80" y="180" text-anchor="middle">pretérito indefinido</text><text class="texte-pigment" x="250" y="180" text-anchor="middle">pretérito perfecto</text></svg>` },
            { t: "liste", titre: "Les marqueurs du [[pretérito perfecto]]", items: ["**[[hoy]]** (aujourd'hui), **[[esta mañana]]** (ce matin), **[[esta semana]]**, **[[este año]]**", "**[[ya]]** (déjà) : *[[Ya he terminado.]]* J'ai déjà fini.", "**[[todavía no]]** (pas encore) : *[[Todavía no he comido.]]* Je n'ai pas encore mangé.", "**[[nunca]]** (jamais), **[[alguna vez]]** (déjà, une fois dans ta vie)"] },
            { t: "verifie", q: "Quel marqueur s'emploie avec le [[pretérito perfecto]] ?", choix: ["[[ayer]]", "[[esta semana]]", "[[el año pasado]]", "[[en 1492]]"], bonne: 1, explication: "[[Esta semana]] désigne une période qui n'est pas finie. Les trois autres renvoient à un passé terminé : on emploiera le [[pretérito indefinido]]." },
          ],
        },
        {
          titre: "La formation : [[haber]] + participe",
          blocs: [
            { t: "propriete", titre: "Formation", md: "**[[haber]]** au présent + **participe passé**.\nParticipe régulier : **[[-ar]] → [[-ado]]** ([[hablar]] → [[hablado]]) ; **[[-er / -ir]] → [[-ido]]** ([[comer]] → [[comido]], [[vivir]] → [[vivido]])." },
            { t: "tableau", titre: "Le [[pretérito perfecto]]", entetes: ["Personne", "[[haber]]", "+ participe", "Exemple"], lignes: [["[[yo]]", "[[**he**]]", "[[hablado]]", "[[He hablado con Ana.]] (J'ai parlé avec Ana.)"], ["[[tú]]", "[[**has**]]", "[[comido]]", "[[¿Has comido?]] (As-tu mangé ?)"], ["[[él / ella]]", "[[**ha**]]", "[[vivido]]", "[[Ha vivido en Cuba.]] (Il a vécu à Cuba.)"], ["[[nosotros]]", "[[**hemos**]]", "[[hablado]]", "[[Hoy hemos hablado con el profesor.]]"], ["[[vosotros]]", "[[**habéis**]]", "[[comido]]", "[[¿Habéis comido bien?]]"], ["[[ellos / ellas]]", "[[**han**]]", "[[llegado]]", "[[Han llegado tarde.]] (Ils sont arrivés tard.)"]] },
            { t: "attention", md: "Deux réflexes français à oublier :\n1. L'auxiliaire est **toujours [[haber]]**, jamais [[ser]] : *[[he ido al cine]]* (je **suis** allé au cinéma), *[[ha llegado]]* (elle **est** arrivée).\n2. Le participe est **invariable** : *[[Ellas han llegado]]*, et non *[[han llegadas]]*." },
            { t: "verifie", q: "Comment dit-on « Je suis allé au cinéma » (aujourd'hui) ?", choix: ["[[Soy ido al cine]]", "[[He ido al cine]]", "[[Estoy ido al cine]]", "[[He ida al cine]]"], bonne: 1, explication: "Toujours [[haber]] + participe invariable : [[He ido al cine.]] [[Ser]] n'est jamais l'auxiliaire du passé composé en espagnol." },
          ],
        },
        {
          titre: "Les participes irréguliers",
          blocs: [
            { t: "texte", md: "Quelques verbes très courants ont un participe irrégulier. Il faut les apprendre par cœur, comme en français « fait », « dit » ou « mis »." },
            { t: "tableau", titre: "Les huit participes irréguliers à connaître", entetes: ["Infinitif", "Participe", "Exemple"], lignes: [["[[hacer]] (faire)", "[[**hecho**]]", "[[He hecho los deberes.]]"], ["[[decir]] (dire)", "[[**dicho**]]", "[[¿Qué has dicho?]]"], ["[[ver]] (voir)", "[[**visto**]]", "[[Hemos visto la película.]]"], ["[[escribir]] (écrire)", "[[**escrito**]]", "[[Ha escrito una carta.]]"], ["[[poner]] (mettre)", "[[**puesto**]]", "[[He puesto la mesa.]]"], ["[[volver]] (revenir)", "[[**vuelto**]]", "[[Mis abuelos han vuelto a Cuba.]]"], ["[[abrir]] (ouvrir)", "[[**abierto**]]", "[[¿Has abierto la ventana?]]"], ["[[romper]] (casser)", "[[**roto**]]", "[[Pablo ha roto un vaso.]]"]] },
            { t: "astuce", md: "Regroupe-les par sons : **[[-cho]]** ([[hecho, dicho]]), **[[-sto]]** ([[visto, puesto]]), **[[-to]]** ([[escrito, vuelto, abierto, roto]]). Et ne te méfie pas de tout : *[[vivir]]* est régulier → **[[vivido]]**." },
            { t: "exemple", md: "*[[Este año, mis abuelos **han vuelto** a Cuba y **han visto** a toda la familia.]]*\nCette année, mes grands-parents sont retournés à Cuba et ont vu toute la famille." },
          ],
        },
        {
          titre: "Pronoms et négation : avant le bloc",
          blocs: [
            { t: "propriete", titre: "[[Haber]] et le participe sont inséparables", md: "On ne glisse **rien** entre [[haber]] et le participe. Les pronoms et la négation se placent **devant [[haber]]** : *[[Me he levantado temprano]]* (je me suis levé tôt), *[[No lo he visto]]* (je ne l'ai pas vu)." },
            { t: "exemple", titre: "Traduire « Je me suis levé tôt »", etapes: ["Verbe pronominal : [[levantarse]] → pronom **[[me]]**.", "Auxiliaire [[haber]] : **[[he]]**. Participe : [[levant**ado**]].", "Le pronom se place devant tout le bloc : *[[Me he levantado temprano.]]*"] },
            { t: "exemple", titre: "Un petit dialogue", md: "— *[[¿**Has visto** la película?]]*\n— *[[No, todavía no la **he visto**, pero ya **he leído** el libro.]]*\n— As-tu vu le film ? — Non, je ne l'ai pas encore vu, mais j'ai déjà lu le livre." },
            { t: "attention", md: "Ne calque pas le français « je n'ai pas vu » : *[[He no visto]]* est faux. On dit **[[No he visto]]**." },
            { t: "verifie", q: "Comment dit-on « Je me suis levé tôt » ?", choix: ["[[He me levantado temprano]]", "[[Me he levantado temprano]]", "[[Me soy levantado temprano]]"], bonne: 1, explication: "Le pronom [[me]] se place devant [[haber]], et l'auxiliaire est toujours [[haber]] : [[Me he levantado temprano.]]" },
          ],
        },
      ],
      bilan: "Haber + participe, toujours collés, toujours invariables : c'est le passé d'aujourd'hui, de cette semaine, et des petits mots ya et todavía no.",
    },
    "4e-espagnol-03-preterito-indefinido": {
      accroche: "« Cristóbal Colón llegó a América en 1492. » Cette phrase raconte un fait achevé depuis plus de cinq siècles. Pour les récits, les biographies et ce que tu as fait hier, l'espagnol a un temps vedette : le pretérito indefinido.",
      objectifs: [
        "Conjuguer les verbes réguliers au pretérito indefinido",
        "Connaître les irréguliers fréquents : fue, hizo, tuvo, estuvo, dijo, vino, pudo",
        "Raconter un fait passé et terminé avec les bons marqueurs",
      ],
      sections: [
        {
          titre: "Le temps des faits terminés",
          blocs: [
            { t: "definition", terme: "[[Pretérito indefinido]]", md: "Le temps d'une action **passée et terminée**, coupée du présent : hier, l'an dernier, en 1492. On le traduit par le passé composé à l'oral (*[[ayer comí]]* : hier, j'ai mangé) ou par le passé simple dans un récit écrit." },
            { t: "texte", md: "Compare : *[[Hoy **he comido** paella]]* (aujourd'hui, la journée n'est pas finie : [[pretérito perfecto]]) et *[[Ayer **comí** paella]]* (hier, c'est terminé : [[indefinido]]). ==C'est le marqueur de temps qui décide.==" },
            { t: "liste", titre: "Les marqueurs de l'[[indefinido]]", items: ["**[[ayer]]** (hier), **[[anoche]]** (hier soir), **[[anteayer]]** (avant-hier)", "**[[la semana pasada]]**, **[[el mes pasado]]**, **[[el año pasado]]**", "**[[hace dos años]]** (il y a deux ans)", "une date : **[[en 1492]]**, **[[el 12 de octubre]]**"] },
            { t: "savais-tu", md: "En Amérique latine et aux Canaries, on emploie l'[[indefinido]] même pour aujourd'hui : un Mexicain dira volontiers *[[Hoy comí tacos]]*. En Espagne, on dira plutôt *[[Hoy he comido tacos]]*." },
            { t: "verifie", q: "Quel marqueur appelle le [[pretérito indefinido]] ?", choix: ["[[hoy]]", "[[esta mañana]]", "[[anoche]]", "[[todavía no]]"], bonne: 2, explication: "[[Anoche]] (hier soir) désigne un moment terminé. [[Hoy, esta mañana]] et [[todavía no]] vont avec le [[pretérito perfecto]]." },
          ],
        },
        {
          titre: "Les verbes réguliers",
          blocs: [
            { t: "tableau", titre: "Le [[pretérito indefinido]] régulier", entetes: ["Personne", "[[hablar]]", "[[comer]]", "[[vivir]]"], lignes: [["[[yo]]", "[[habl**é**]]", "[[com**í**]]", "[[viv**í**]]"], ["[[tú]]", "[[habl**aste**]]", "[[com**iste**]]", "[[viv**iste**]]"], ["[[él / ella / usted]]", "[[habl**ó**]]", "[[com**ió**]]", "[[viv**ió**]]"], ["[[nosotros]]", "[[habl**amos**]]", "[[com**imos**]]", "[[viv**imos**]]"], ["[[vosotros]]", "[[habl**asteis**]]", "[[com**isteis**]]", "[[viv**isteis**]]"], ["[[ellos / ellas / ustedes]]", "[[habl**aron**]]", "[[com**ieron**]]", "[[viv**ieron**]]"]] },
            { t: "propriete", titre: "Deux séries de terminaisons", md: "**[[-ar]]** : [[-é, -aste, -ó, -amos, -asteis, -aron.]]\n**[[-er]] et [[-ir]]** (les mêmes !) : [[-í, -iste, -ió, -imos, -isteis, -ieron.]]" },
            { t: "attention", md: "L'accent écrit change tout : *[[hablo]]* = je parle (présent), *[[habló]]* = il a parlé (passé). Oublier l'accent, c'est changer de personne **et** de temps.\n\nNote aussi que *[[hablamos]]* est identique au présent : seul le contexte (*[[ayer]]*, *[[el año pasado]]*) fait la différence." },
            { t: "verifie", q: "Complète : « [[Ayer yo ___ (hablar) con Ana.]] »", choix: ["[[hablo]]", "[[hablé]]", "[[habló]]", "[[he hablado]]"], bonne: 1, explication: "[[Ayer]] appelle l'[[indefinido]], et avec [[yo]] la terminaison est [[-é]] : [[hablé]]. [[Habló]], c'est « il a parlé »." },
          ],
        },
        {
          titre: "Les irréguliers incontournables",
          blocs: [
            { t: "texte", md: "Les verbes les plus fréquents sont irréguliers. Leur radical change et ==ils ne portent aucun accent écrit== : *[[hice]]*, *[[hizo]]*, *[[tuve]]*, *[[tuvo]]*." },
            { t: "tableau", titre: "Les irréguliers à connaître", entetes: ["Infinitif", "[[yo]]", "[[él / ella]]", "[[ellos / ellas]]"], lignes: [["[[ser / ir]]", "[[fui]]", "[[**fue**]]", "[[fueron]]"], ["[[hacer]] (faire)", "[[hice]]", "[[**hizo**]]", "[[hicieron]]"], ["[[tener]] (avoir)", "[[tuve]]", "[[**tuvo**]]", "[[tuvieron]]"], ["[[estar]] (être)", "[[estuve]]", "[[**estuvo**]]", "[[estuvieron]]"], ["[[decir]] (dire)", "[[dije]]", "[[**dijo**]]", "[[dijeron]]"], ["[[venir]] (venir)", "[[vine]]", "[[**vino**]]", "[[vinieron]]"], ["[[poder]] (pouvoir)", "[[pude]]", "[[**pudo**]]", "[[pudieron]]"], ["[[poner]] (mettre)", "[[puse]]", "[[**puso**]]", "[[pusieron]]"], ["[[querer]] (vouloir)", "[[quise]]", "[[**quiso**]]", "[[quisieron]]"]] },
            { t: "astuce", md: "**[[Ser]]** et **[[ir]]** ont exactement les mêmes formes : *[[fue]]* veut dire « il fut » ou « il alla ». Le contexte tranche : *[[Fue un viaje inolvidable]]* (ce fut un voyage inoubliable) / *[[Fue a Barcelona]]* (il est allé à Barcelone).\n\nRemarque le **z** de *[[hizo]]* (pour garder le son de *[[hice]]*) et le **j** de *[[dijeron]]* : après le j, la terminaison perd son i." },
            { t: "verifie", q: "Comment dit-on « nous sommes allés » (l'année dernière) ?", choix: ["[[hemos ido]]", "[[fuimos]]", "[[íbamos]]", "[[vamos]]"], bonne: 1, explication: "L'année dernière est terminée : [[indefinido]] de [[ir]], [[fuimos]]. [[Hemos ido]] irait avec « cette année »." },
          ],
        },
        {
          titre: "Raconter un récit au passé",
          blocs: [
            { t: "exemple", titre: "Un voyage scolaire", md: "*[[El año pasado **fui** a Barcelona con mi clase. **Visitamos** la Sagrada Familia, **comimos** tapas y mi amigo Hugo **perdió** su móvil en el metro. ¡**Fue** un viaje inolvidable!]]*\nL'an dernier, je suis allé à Barcelone avec ma classe. Nous avons visité la Sagrada Familia, nous avons mangé des tapas et mon ami Hugo a perdu son portable dans le métro. Ce fut un voyage inoubliable !" },
            { t: "texte", md: "Dans une biographie, chaque étape est un fait terminé : voilà pourquoi l'[[indefinido]] est le temps de l'histoire. *[[Nació]]* (il naquit), *[[llegó]]* (il arriva), *[[murió]]* (il mourut) : les verbes s'enchaînent comme les étapes d'une frise." },
            { t: "frise", titre: "La vie de [[Cristóbal Colón]], racontée à l'[[indefinido]]", evenements: [{ date: 1451, label: "Nació en Génova", detail: "Christophe Colomb naît à Gênes, en Italie." }, { date: 1492, label: "Llegó a América", detail: "Le 12 octobre, ses navires atteignent une île des Bahamas." }, { date: 1493, label: "Volvió a España", detail: "Il revient et raconte son voyage aux Rois catholiques." }, { date: 1498, label: "Hizo su tercer viaje", detail: "Il atteint les côtes de l'actuel Venezuela." }, { date: 1506, label: "Murió en Valladolid", detail: "Il meurt en Espagne, persuadé d'avoir atteint l'Asie." }] },
          ],
        },
      ],
      bilan: "Ayer, anoche, en 1492 : quand l'action est terminée, l'indefinido raconte. Un accent sur hablé et habló, aucun sur fui, hizo, tuvo.",
    },
    "4e-espagnol-04-imperfecto-recit": {
      accroche: "« Cuando tenía ocho años, vivía en un pueblo pequeño… » Ainsi commencent beaucoup d'histoires : avant l'action, il faut un décor. Pour peindre ce décor et raconter les habitudes d'autrefois, l'espagnol utilise l'imperfecto.",
      objectifs: [
        "Conjuguer l'imperfecto des verbes réguliers et de ser, ir, ver",
        "Décrire au passé et raconter des habitudes",
        "Choisir entre imperfecto et indefinido dans un récit",
      ],
      sections: [
        {
          titre: "Le temps du décor et des habitudes",
          blocs: [
            { t: "definition", terme: "[[Imperfecto]]", md: "L'imparfait espagnol. Il montre une action passée **dans sa durée**, sans début ni fin précis : une habitude, une description, une action en cours. Il correspond presque toujours à l'imparfait français." },
            { t: "liste", titre: "Trois grands emplois", items: ["**Les habitudes** : *[[Todos los días **iba** al colegio en bici.]]* Tous les jours, j'allais au collège à vélo.", "**Les descriptions** (décor, météo, âge, heure, caractère) : *[[Era de noche y **hacía** frío.]]* Il faisait nuit et il faisait froid.", "**Une action en cours** : *[[Leía un libro.]]* J'étais en train de lire un livre."] },
            { t: "texte", md: "Ses marqueurs parlent de durée et de répétition : **[[antes]]** (avant, autrefois), **[[siempre]]** (toujours), **[[todos los días]]** (tous les jours), **[[cuando era pequeño]]** ou **[[de pequeño]]** (quand j'étais petit), **[[mientras]]** (pendant que)." },
            { t: "verifie", q: "Quelle phrase décrit un décor ?", choix: ["[[De repente, sonó el teléfono.]]", "[[Hacía sol y los pájaros cantaban.]]", "[[Ayer llegué tarde.]]"], bonne: 1, explication: "[[Hacía sol y los pájaros cantaban]] (il faisait beau et les oiseaux chantaient) : météo et ambiance, à l'[[imperfecto]]. Les deux autres phrases racontent des actions ponctuelles." },
          ],
        },
        {
          titre: "Une conjugaison très régulière",
          blocs: [
            { t: "tableau", titre: "L'[[imperfecto]] des verbes réguliers", entetes: ["Personne", "[[hablar]]", "[[comer]]", "[[vivir]]"], lignes: [["[[yo]]", "[[habl**aba**]]", "[[com**ía**]]", "[[viv**ía**]]"], ["[[tú]]", "[[habl**abas**]]", "[[com**ías**]]", "[[viv**ías**]]"], ["[[él / ella]]", "[[habl**aba**]]", "[[com**ía**]]", "[[viv**ía**]]"], ["[[nosotros]]", "[[habl**ábamos**]]", "[[com**íamos**]]", "[[viv**íamos**]]"], ["[[vosotros]]", "[[habl**abais**]]", "[[com**íais**]]", "[[viv**íais**]]"], ["[[ellos / ellas]]", "[[habl**aban**]]", "[[com**ían**]]", "[[viv**ían**]]"]] },
            { t: "propriete", titre: "Deux séries de terminaisons", md: "**[[-ar]]** : [[-aba, -abas, -aba, -ábamos, -abais, -aban]] (accent seulement sur *[[-ábamos]]*).\n**[[-er / -ir]]** : [[-ía, -ías, -ía, -íamos, -íais, -ían]] (accent sur le **í** à toutes les personnes)." },
            { t: "tableau", titre: "Seulement trois irréguliers", entetes: ["Personne", "[[ser]]", "[[ir]]", "[[ver]]"], lignes: [["[[yo]]", "[[era]]", "[[iba]]", "[[veía]]"], ["[[tú]]", "[[eras]]", "[[ibas]]", "[[veías]]"], ["[[él / ella]]", "[[era]]", "[[iba]]", "[[veía]]"], ["[[nosotros]]", "[[éramos]]", "[[íbamos]]", "[[veíamos]]"], ["[[vosotros]]", "[[erais]]", "[[ibais]]", "[[veíais]]"], ["[[ellos / ellas]]", "[[eran]]", "[[iban]]", "[[veían]]"]] },
            { t: "attention", md: "*[[Yo hablaba]]* et *[[él hablaba]]* ont la même forme : si le sens n'est pas clair, ajoute le pronom sujet. Et n'oublie pas l'accent : *[[comíamos]]*, *[[vivían]]*. Sans lui, le mot ne se prononce plus de la même façon." },
            { t: "verifie", q: "Quel est l'[[imperfecto]] de « [[ser]] » avec [[nosotros]] ?", choix: ["[[éramos]]", "[[fuimos]]", "[[somos]]", "[[seremos]]"], bonne: 0, explication: "[[Ser]] est irrégulier à l'[[imperfecto]] : [[era, eras, era, éramos, erais, eran.]] [[Fuimos]] est l'[[indefinido]], [[somos]] le présent, [[seremos]] le futur." },
          ],
        },
        {
          titre: "Décor et action : les deux temps du récit",
          blocs: [
            { t: "propriete", titre: "[[Imperfecto]] ou [[indefinido]] ?", md: "L'**[[imperfecto]]** plante le décor et montre ce qui dure. L'**[[indefinido]]** apporte l'action ponctuelle, l'événement qui fait avancer l'histoire.\n*[[Llovía cuando salí.]]* Il pleuvait (le décor) quand je suis sorti (l'action)." },
            { t: "schema", titre: "Une action ponctuelle sur un fond de décor", legende: "La bande qui dure, c'est l'[[imperfecto]] ; l'éclair qui tombe à un moment précis, c'est l'[[indefinido]].", svg: `<svg viewBox="0 0 400 220"><rect class="aplat" x="40" y="88" width="300" height="34" rx="6"/><line class="trait" x1="15" y1="105" x2="385" y2="105" marker-end="url(#fl)"/><path class="trait-fin" d="M70 91 l-4 10 M105 91 l-4 10 M140 91 l-4 10 M260 91 l-4 10 M295 91 l-4 10 M325 91 l-4 10"/><path class="aplat-fort" d="M206 28 L188 64 L200 64 L192 96 L218 54 L205 54 L214 28 Z"/><circle cx="200" cy="105" r="7" fill="var(--pigment)"/><text class="texte-main" x="300" y="44" text-anchor="middle">salí</text><text class="texte-petit" x="300" y="62" text-anchor="middle">action ponctuelle</text><text class="texte-petit" x="300" y="76" text-anchor="middle">(indefinido)</text><text class="texte-main" x="110" y="150" text-anchor="middle">llovía</text><text class="texte-petit" x="110" y="168" text-anchor="middle">décor qui dure</text><text class="texte-petit" x="110" y="182" text-anchor="middle">(imperfecto)</text><text class="texte" x="290" y="160" text-anchor="middle">Llovía cuando salí.</text><text class="texte-petit" x="290" y="178" text-anchor="middle">Il pleuvait quand je suis sorti.</text></svg>` },
            { t: "exemple", titre: "Analyser un début de récit", etapes: ["*[[Era de noche y **llovía**.]]* → description du décor : [[imperfecto]] ([[era, llovía]]).", "*[[De repente, alguien **llamó** a la puerta.]]* → action soudaine : [[indefinido]] ([[llamó]]).", "Le mot *[[de repente]]* (soudain) annonce presque toujours un [[indefinido]]."] },
            { t: "astuce", md: "Imagine un film : l'[[imperfecto]], c'est le décor et la musique de fond ; l'[[indefinido]], c'est le moment où quelque chose arrive. Avec **[[mientras]]** (pendant que), l'action en cours est à l'[[imperfecto]] : *[[Mientras **leía**, mi hermano **entró**.]]* Pendant que je lisais, mon frère est entré." },
            { t: "verifie", q: "Complète : « [[Yo ___ la tele cuando mi madre ___.]] »", choix: ["[[vi / llegaba]]", "[[veía / llegó]]", "[[veía / llegaba]]", "[[vi / llegó]]"], bonne: 1, explication: "Regarder la télé est l'action en cours, le décor : [[veía]] ([[imperfecto]]). L'arrivée de la mère est ponctuelle : [[llegó]] ([[indefinido]])." },
          ],
        },
        {
          titre: "Raconter un souvenir",
          blocs: [
            { t: "exemple", titre: "Un souvenir d'enfance", md: "*[[Cuando **tenía** ocho años, **vivía** en un pueblo pequeño. Todos los días **iba** al colegio en bici y **jugaba** con mis vecinos. Un día, mientras **jugábamos** en el parque, **encontramos** un perro perdido y lo **llevamos** a casa.]]*\nQuand j'avais huit ans, je vivais dans un petit village. Tous les jours, j'allais à l'école à vélo et je jouais avec mes voisins. Un jour, pendant que nous jouions au parc, nous avons trouvé un chien perdu et nous l'avons ramené à la maison." },
            { t: "texte", md: "Repère le basculement : tout le début est à l'[[imperfecto]] (l'âge, le lieu, les habitudes). Puis **[[un día]]** (un jour) fait surgir l'événement, à l'[[indefinido]].\n\nPour parler d'un changement, oppose *[[antes]]* et *[[ahora]]* : *[[Antes **era** tímido, pero ahora hablo mucho.]]* Avant, j'étais timide, mais maintenant je parle beaucoup." },
            { t: "savais-tu", md: "Les contes espagnols commencent par *[[Érase una vez…]]* ou *[[Había una vez…]]* (Il était une fois). Deux [[imperfectos]], bien sûr : le décor d'abord !" },
          ],
        },
      ],
      bilan: "L'imperfecto peint le décor et les habitudes (-aba, -ía) ; l'indefinido fait surgir l'action. « Llovía cuando salí » : tout le récit tient dans cette phrase.",
    },
    "4e-espagnol-05-futur": {
      accroche: "Que feras-tu cet été ? Et en 2050, les voitures voleront-elles ? Pour parler de tes projets ou imaginer l'avenir, l'espagnol t'offre deux outils : le futur proche, très facile, et le futur simple, très régulier.",
      objectifs: [
        "Exprimer un projet avec ir a + infinitif",
        "Conjuguer le futur simple des verbes réguliers",
        "Connaître les futurs irréguliers : tendré, haré, podré, saldré…",
        "Faire des prédictions avec les marqueurs du futur",
      ],
      sections: [
        {
          titre: "Le futur proche : [[ir a]] + infinitif",
          blocs: [
            { t: "propriete", titre: "Formation", md: "**[[ir]]** au présent + **[[a]]** + infinitif.\n*[[Voy a estudiar.]]* Je vais étudier. *[[Mañana vamos a visitar el museo.]]* Demain, nous allons visiter le musée." },
            { t: "tableau", titre: "Le futur proche", entetes: ["Personne", "[[ir]]", "+ [[a]] + infinitif"], lignes: [["[[yo]]", "[[voy]]", "[[a comer]]"], ["[[tú]]", "[[vas]]", "[[a salir]]"], ["[[él / ella]]", "[[va]]", "[[a llover]]"], ["[[nosotros]]", "[[vamos]]", "[[a visitar el museo]]"], ["[[vosotros]]", "[[vais]]", "[[a jugar]]"], ["[[ellos / ellas]]", "[[van]]", "[[a viajar a Chile]]"]] },
            { t: "attention", md: "Le petit mot **[[a]]** est obligatoire, alors qu'il n'existe pas en français : « je vais manger » se dit *[[voy a comer]]*, jamais *[[voy comer]]*." },
            { t: "verifie", q: "Comment dit-on « Je vais manger » ?", choix: ["[[Voy comer]]", "[[Voy a comer]]", "[[Vengo a comer]]", "[[Comeré a]]"], bonne: 1, explication: "Futur proche : [[ir]] conjugué + [[a]] + infinitif. [[Vengo a comer]] voudrait dire « je viens manger »." },
          ],
        },
        {
          titre: "Le futur simple des verbes réguliers",
          blocs: [
            { t: "propriete", titre: "L'infinitif entier + la terminaison", md: "On garde **tout l'infinitif** et on ajoute **[[-é, -ás, -á, -emos, -éis, -án]]**. Les terminaisons sont les mêmes pour les verbes en [[-ar, -er]] et [[-ir]]." },
            { t: "tableau", titre: "Le futur simple", entetes: ["Personne", "[[hablar]]", "[[comer]]", "[[vivir]]"], lignes: [["[[yo]]", "[[hablar**é**]]", "[[comer**é**]]", "[[vivir**é**]]"], ["[[tú]]", "[[hablar**ás**]]", "[[comer**ás**]]", "[[vivir**ás**]]"], ["[[él / ella]]", "[[hablar**á**]]", "[[comer**á**]]", "[[vivir**á**]]"], ["[[nosotros]]", "[[hablar**emos**]]", "[[comer**emos**]]", "[[vivir**emos**]]"], ["[[vosotros]]", "[[hablar**éis**]]", "[[comer**éis**]]", "[[vivir**éis**]]"], ["[[ellos / ellas]]", "[[hablar**án**]]", "[[comer**án**]]", "[[vivir**án**]]"]] },
            { t: "astuce", md: "Les terminaisons ressemblent au présent de **[[haber]]** : [[he, has, ha, hemos, habéis, han.]] Seule la personne **[[nosotros]]** n'a pas d'accent écrit : *[[hablaremos]]*." },
            { t: "verifie", q: "Comment dit-on « nous parlerons » ?", choix: ["[[hablaremos]]", "[[hablarémos]]", "[[hablamos]]", "[[hablábamos]]"], bonne: 0, explication: "Infinitif [[hablar]] + [[-emos]], sans accent : [[hablaremos]]. [[Hablamos]] est le présent (ou l'[[indefinido]]), [[hablábamos]] l'[[imperfecto]]." },
          ],
        },
        {
          titre: "Les futurs irréguliers",
          blocs: [
            { t: "texte", md: "Une douzaine de verbes modifient leur radical. ==Les terminaisons, elles, ne changent jamais.== Ces verbes se rangent en trois familles faciles à retenir." },
            { t: "tableau", titre: "Trois familles d'irréguliers", entetes: ["Ce qui se passe", "Infinitif", "Futur ([[yo]])"], lignes: [["Le **e** de l'infinitif tombe", "[[poder, saber, querer, haber]]", "[[**podré**, **sabré**, **querré**, **habrá**]] (il y aura)"], ["Un **d** remplace la voyelle", "[[tener, poner, salir, venir]]", "[[**tendré**, **pondré**, **saldré**, **vendré**]]"], ["Le radical raccourcit", "[[hacer, decir]]", "[[**haré**, **diré**]]"]] },
            { t: "exemple", titre: "Une promesse", md: "*[[Si estudias, **podrás** aprobar y **tendrás** buenas notas.]]*\nSi tu travailles, tu pourras réussir et tu auras de bonnes notes." },
            { t: "attention", md: "*[[Teneré]]* et *[[poderé]]* n'existent pas ! Retiens les radicaux **[[tendr-]]** et **[[podr-]]**, puis ajoute les terminaisons habituelles : [[tendré, tendrás, tendrá…]]" },
          ],
        },
        {
          titre: "Projets, prédictions et marqueurs",
          blocs: [
            { t: "schema", titre: "Deux futurs sur la ligne du temps", legende: "Le futur proche vise un projet décidé, souvent proche ; le futur simple regarde plus loin : promesses, prédictions, rêves.", svg: `<svg viewBox="0 0 400 220"><line class="trait" x1="20" y1="120" x2="385" y2="120" marker-end="url(#fl)"/><line class="trait" x1="60" y1="110" x2="60" y2="130"/><text class="texte" x="40" y="150" text-anchor="middle">ahora</text><line class="trait-fin" x1="170" y1="112" x2="170" y2="128"/><text class="texte-petit" x="170" y="106" text-anchor="middle">mañana</text><line class="trait-fin" x1="330" y1="112" x2="330" y2="128"/><text class="texte-petit" x="330" y="148" text-anchor="middle">el año que viene</text><path class="trait-fin" fill="none" d="M60 130 Q115 175 166 132" marker-end="url(#fl)"/><text class="texte-main" x="115" y="192" text-anchor="middle">Voy a estudiar.</text><text class="texte-petit" x="115" y="208" text-anchor="middle">futur proche : un projet</text><path class="trait" fill="none" stroke="var(--pigment)" d="M60 120 Q195 20 326 116" marker-end="url(#fl-p)"/><text class="texte-main" x="195" y="34" text-anchor="middle">Estudiaré en Madrid.</text><text class="texte-petit" x="195" y="52" text-anchor="middle">futur simple : l'avenir</text></svg>` },
            { t: "liste", titre: "Les marqueurs du futur", items: ["**[[mañana]]** (demain), **[[pasado mañana]]** (après-demain)", "**[[la semana que viene]]**, **[[el año que viene]]**, **[[el próximo año]]** (l'an prochain)", "**[[dentro de dos días]]** (dans deux jours)", "**[[en el futuro]]**, **[[en 2050]]**"] },
            { t: "texte", md: "Le futur proche sert surtout pour les **projets** décidés : *[[Este verano voy a viajar a Chile.]]* Le futur simple sert pour les **prédictions** et les promesses, souvent après *[[Creo que…]]* (je crois que), *[[Seguro que…]]* (c'est sûr que), *[[Quizás…]]* (peut-être) : *[[Creo que en 2050 los coches **volarán** y la gente **hará** viajes a la Luna.]]*" },
            { t: "attention", md: "Ne confonds pas **[[mañana]]** (demain) et **[[la mañana]]** (le matin) : *[[mañana por la mañana]]* = demain matin. Et pour la météo : *[[Mañana lloverá]]* (demain, il pleuvra), futur de *[[llover]]*." },
            { t: "verifie", q: "Quelle phrase exprime une prédiction ?", choix: ["[[Mañana voy a ir al dentista.]]", "[[Creo que en el futuro la gente vivirá en Marte.]]", "[[Ayer fui al cine.]]"], bonne: 1, explication: "[[Creo que]] + futur simple ([[vivirá]]) : on imagine l'avenir. La première phrase est un projet décidé, la troisième parle du passé." },
          ],
        },
      ],
      bilan: "Voy a + infinitif pour tes projets ; l'infinitif entier + é, ás, á, emos, éis, án pour l'avenir ; et une douzaine d'irréguliers comme tendré, haré, podré.",
    },
    "4e-espagnol-06-imperatif-conseils": {
      accroche: "« ¡Levántate, que es tarde! », « ¡Pon la mesa! », « Siga todo recto. » Parents, profs, passants : tout le monde donne des ordres et des conseils. Apprends à les comprendre… et à les donner toi-même.",
      objectifs: [
        "Former l'impératif affirmatif avec tú, vosotros et usted",
        "Connaître les impératifs irréguliers : pon, ten, ven, haz, di, sal",
        "Accrocher les pronoms derrière l'impératif",
        "Exprimer l'obligation avec hay que, tener que et deber",
      ],
      sections: [
        {
          titre: "Tutoyer : [[tú]] et [[vosotros]]",
          blocs: [
            { t: "propriete", titre: "Deux règles simples", md: "**[[tú]]** : la forme de la 3e personne du présent. [[hablar]] → *[[habla]]* ; [[comer]] → *[[come]]* ; [[escribir]] → *[[escribe]]*.\n**[[vosotros]]** : l'infinitif dont le **[[-r]]** devient **[[-d]]**. *[[hablad]]*, *[[comed]]*, *[[escribid]]*." },
            { t: "tableau", titre: "L'impératif régulier", entetes: ["Infinitif", "[[tú]]", "[[vosotros]]"], lignes: [["[[hablar]] (parler)", "[[¡Habla!]]", "[[¡Hablad!]]"], ["[[comer]] (manger)", "[[¡Come!]]", "[[¡Comed!]]"], ["[[vivir]] (vivre)", "[[¡Vive!]]", "[[¡Vivid!]]"], ["[[beber]] (boire)", "[[¡Bebe!]]", "[[¡Bebed!]]"], ["[[cerrar]] (fermer, [[e]] → [[ie]])", "[[¡Cierra!]]", "[[¡Cerrad!]]"]] },
            { t: "attention", md: "Le [[tú]] garde la diphtongue du présent (*[[cierra]]*, *[[duerme]]*), mais le [[vosotros]], formé sur l'infinitif, n'en a jamais : *[[cerrad]]*, *[[dormid]]*." },
            { t: "verifie", q: "Comment dit-on « Mangez ! » à [[vosotros]] ?", choix: ["[[¡Comed!]]", "[[¡Comen!]]", "[[¡Comad!]]", "[[¡Coméis!]]"], bonne: 0, explication: "[[Vosotros]] : infinitif [[comer]], le [[-r]] devient [[-d]] → [[¡Comed!]] [[Coméis]] est le présent, [[coman]] la forme de [[ustedes]]." },
          ],
        },
        {
          titre: "Huit impératifs irréguliers",
          blocs: [
            { t: "tableau", titre: "Les irréguliers avec [[tú]]", entetes: ["Infinitif", "[[tú]]", "Exemple"], lignes: [["[[poner]] (mettre)", "[[**pon**]]", "[[¡Pon la mesa!]] (Mets la table !)"], ["[[tener]] (avoir)", "[[**ten**]]", "[[¡Ten cuidado!]] (Fais attention !)"], ["[[venir]] (venir)", "[[**ven**]]", "[[¡Ven aquí!]] (Viens ici !)"], ["[[hacer]] (faire)", "[[**haz**]]", "[[¡Haz los deberes!]] (Fais tes devoirs !)"], ["[[decir]] (dire)", "[[**di**]]", "[[¡Di la verdad!]] (Dis la vérité !)"], ["[[salir]] (sortir)", "[[**sal**]]", "[[¡Sal de aquí!]] (Sors d'ici !)"], ["[[ser]] (être)", "[[**sé**]]", "[[¡Sé bueno!]] (Sois sage !)"], ["[[ir]] (aller)", "[[**ve**]]", "[[¡Ve a tu cuarto!]] (Va dans ta chambre !)"]] },
            { t: "astuce", md: "Retiens la formule magique : **[[Ven, di, sal, haz, ten, ve, pon, sé]]**. Des formes courtes, d'une seule syllabe. Seul le **[[tú]]** est irrégulier : au vosotros, on revient à la règle (*[[poned]]*, *[[tened]]*, *[[haced]]*)." },
            { t: "verifie", q: "Quel est l'impératif de « [[hacer]] » avec [[tú]] ?", choix: ["[[hace]]", "[[haz]]", "[[haga]]", "[[haced]]"], bonne: 1, explication: "[[Hacer]] fait partie des huit irréguliers : [[¡Haz!]] [[Haga]] est la forme de [[usted]], [[haced]] celle de [[vosotros]]." },
          ],
        },
        {
          titre: "Vouvoyer : [[usted]] et [[ustedes]]",
          blocs: [
            { t: "propriete", titre: "Les voyelles s'inversent", md: "Pour **[[usted]]**, la voyelle de la terminaison s'inverse : **[[-ar]] → [[-e]]**, **[[-er / -ir]] → [[-a]]**. *[[hable]]*, *[[coma]]*, *[[escriba]]*. Pour **[[ustedes]]**, on ajoute **[[-n]]** : *[[hablen]]*, *[[coman]]*, *[[escriban]]*." },
            { t: "exemple", titre: "Les formes irrégulières de [[usted]]", md: "Les verbes irréguliers à la 1re personne du présent gardent leur irrégularité : [[hago]] → **[[haga]]** ; [[tengo]] → **[[tenga]]** ; [[pongo]] → **[[ponga]]** ; [[salgo]] → **[[salga]]** ; [[digo]] → **[[diga]]**.\n*[[Entre, por favor. Siéntese. Tenga cuidado.]]*\nEntrez, s'il vous plaît. Asseyez-vous. Faites attention." },
            { t: "texte", md: "On emploie [[usted]] avec un adulte qu'on ne connaît pas : un vendeur, un médecin, un passant. Ce « vous » de politesse s'adresse à **une seule** personne ; *[[ustedes]]* s'adresse à plusieurs : *[[¡Siéntense, por favor!]]*" },
          ],
        },
        {
          titre: "Les pronoms collés derrière : l'enclise",
          blocs: [
            { t: "propriete", titre: "L'enclise", md: "À l'impératif affirmatif, les pronoms se **collent à la fin** du verbe, dans l'ordre COI puis COD : *[[¡Levántate!]]* (lève-toi), *[[¡Dímelo!]]* (dis-le-moi), *[[¡Siéntense!]]* (asseyez-vous). On ajoute souvent un **accent écrit** pour garder la syllabe forte à sa place." },
            { t: "etapes", titre: "Construire « Dis-le-moi ! »", items: [{ titre: "Le verbe", md: "[[decir]] → impératif [[tú]] : **[[di]]**." }, { titre: "Le COI", md: "« moi » → **[[me]]** : *[[dime]]* (dis-moi)." }, { titre: "Le COD", md: "« le » → **[[lo]]**, après le COI : *[[dimelo]]*." }, { titre: "L'accent", md: "La syllabe forte reste *[[di]]* : on écrit **[[¡Dímelo!]]**" }] },
            { t: "attention", md: "*[[¡Te levanta!]]* est faux : à l'impératif affirmatif, le pronom ne se place jamais devant. On dit **[[¡Levántate!]]** Et l'accent est obligatoire : *[[levántate]]*, *[[siéntate]]*, *[[acuéstate]]*." },
            { t: "verifie", q: "Comment dit-on « Lève-toi ! » ?", choix: ["[[¡Te levanta!]]", "[[¡Levántate!]]", "[[¡Levanta tú!]]", "[[¡Levántete!]]"], bonne: 1, explication: "Impératif [[tú (levanta)]] + pronom [[te]] collé derrière, avec un accent pour garder la syllabe forte : [[¡Levántate!]]" },
          ],
        },
        {
          titre: "L'obligation et les conseils",
          blocs: [
            { t: "tableau", titre: "Trois façons de dire « il faut »", entetes: ["Expression", "Sens", "Exemple"], lignes: [["**[[hay que]]** + infinitif", "il faut (obligation générale, pour tout le monde)", "[[Hay que dormir bien.]]"], ["**[[tener que]]** + infinitif", "devoir (obligation personnelle)", "[[Tienes que descansar.]]"], ["**[[deber]]** + infinitif", "devoir (conseil, devoir moral)", "[[Debes beber agua.]]"]] },
            { t: "exemple", titre: "Une famille pleine de conseils", md: "— *[[Mamá, me duele la cabeza.]]*\n— *[[Tienes que descansar. ¡**Acuéstate** y **bebe** agua! **Hay que** dormir bien para estar en forma. Y tú, Pablo, ¡**pon** la mesa, por favor!]]*\n— Maman, j'ai mal à la tête. — Tu dois te reposer. Couche-toi et bois de l'eau ! Il faut bien dormir pour être en forme. Et toi, Pablo, mets la table, s'il te plaît !" },
            { t: "astuce", md: "*[[Hay que]]* est impersonnel : il ne se conjugue jamais. *[[Tener que]]* se conjugue : *[[tengo que]]*, *[[tienes que]]*, *[[tenemos que]]*… Et « je dois » avec [[deber]] se dit simplement **[[debo]]**." },
          ],
        },
      ],
      bilan: "Pour tú, la 3e personne du présent ; pour vosotros, le -r devient -d ; pour usted, les voyelles s'inversent ; et les pronoms se collent derrière : ¡Dímelo!",
    },
    "4e-espagnol-07-pronoms-comparaison": {
      accroche: "« ¿El libro? Lo leo todas las noches y mañana se lo presto a Ana. » Grâce à de petits mots comme lo et se, on évite de se répéter. Et pour dire que ce livre est meilleur que les autres, il faut savoir comparer.",
      objectifs: [
        "Remplacer un complément par un pronom COD ou COI",
        "Placer les pronoms avant ou après le verbe",
        "Comparer avec más… que, menos… que, tan… como et les irréguliers",
        "Former le superlatif et choisir entre muy et mucho",
      ],
      sections: [
        {
          titre: "COD et COI : qui remplace quoi ?",
          blocs: [
            { t: "texte", md: "Le **COD** se rattache directement au verbe (« quoi ? », « qui ? ») : *[[Veo la película]]* → **[[La veo]]** (je la vois). Le **COI** répond à la question « à qui ? » : *[[Hablo a mi abuela]]* → **[[Le hablo]]** (je lui parle)." },
            { t: "tableau", titre: "Les pronoms compléments", entetes: ["Personne", "COD", "COI", "Français"], lignes: [["[[yo]]", "[[me]]", "[[me]]", "me"], ["[[tú]]", "[[te]]", "[[te]]", "te"], ["[[él / ella / usted]]", "[[**lo / la**]]", "[[**le**]]", "le, la / lui"], ["[[nosotros]]", "[[nos]]", "[[nos]]", "nous"], ["[[vosotros]]", "[[os]]", "[[os]]", "vous"], ["[[ellos / ellas / ustedes]]", "[[**los / las**]]", "[[**les**]]", "les / leur"]] },
            { t: "propriete", titre: "Retiens", md: "Les pronoms ne diffèrent qu'à la 3e personne : **[[lo, la, los, las]]** pour le COD ; **[[le, les]]** pour le COI. Pour les autres personnes, une seule forme : *[[Te veo]]* (je te vois), *[[Te hablo]]* (je te parle)." },
            { t: "attention", md: "Comme « lui » en français, **[[le]]** sert pour un homme ou pour une femme : *[[Le escribo a mi abuela]]*, j'écris à ma grand-mère. Ne mets pas *[[la]]* ici : c'est un COI !" },
            { t: "verifie", q: "Comment dit-on « Je la vois » ([[la película]]) ?", choix: ["[[Le veo]]", "[[La veo]]", "[[Veo la]]", "[[Lo veo]]"], bonne: 1, explication: "[[La película]] est féminin et COD : [[la]]. Le pronom se place devant le verbe conjugué : [[La veo.]]" },
          ],
        },
        {
          titre: "Où placer le pronom ?",
          blocs: [
            { t: "propriete", titre: "Trois positions", md: "• **Devant** le verbe conjugué : *[[Lo compro.]]* *[[No lo compro.]]*\n• **Collé derrière** l'infinitif : *[[Voy a comprarlo.]]*\n• **Collé derrière** l'impératif affirmatif : *[[¡Cómpralo!]]*" },
            { t: "schema", titre: "Devant ou collé derrière ?", legende: "[[Lo compro]] : je l'achète. [[Voy a comprarlo]] : je vais l'acheter. [[¡Cómpralo!]] : achète-le ! Avec l'impératif, on ajoute un accent écrit.", svg: `<svg viewBox="0 0 400 220"><text class="texte-petit" x="20" y="55">conjugué</text><rect class="aplat" x="150" y="35" width="45" height="30" rx="4"/><text class="texte" x="172" y="55" text-anchor="middle">lo</text><rect class="trait" fill="none" x="205" y="35" width="90" height="30" rx="4"/><text class="texte" x="250" y="55" text-anchor="middle">compro</text><text class="texte-petit" x="305" y="55">devant</text><text class="texte-petit" x="20" y="120">infinitif</text><rect class="trait" fill="none" x="110" y="100" width="65" height="30" rx="4"/><text class="texte" x="142" y="120" text-anchor="middle">voy a</text><rect class="trait" fill="none" x="185" y="100" width="90" height="30" rx="4"/><text class="texte" x="230" y="120" text-anchor="middle">comprar</text><rect class="aplat" x="275" y="100" width="40" height="30" rx="4"/><text class="texte" x="295" y="120" text-anchor="middle">lo</text><text class="texte-petit" x="325" y="120">collé</text><text class="texte-petit" x="20" y="185">impératif</text><rect class="trait" fill="none" x="185" y="165" width="90" height="30" rx="4"/><text class="texte" x="230" y="185" text-anchor="middle">¡cómpra</text><rect class="aplat" x="275" y="165" width="40" height="30" rx="4"/><text class="texte" x="295" y="185" text-anchor="middle">lo!</text><text class="texte-petit" x="325" y="185">collé</text></svg>` },
            { t: "astuce", md: "Avec un infinitif après un verbe conjugué, les deux places sont correctes : *[[Lo voy a comprar]]* = *[[Voy a comprarlo]]*. Mais choisis : jamais les deux à la fois !" },
            { t: "verifie", q: "Comment dit-on « Je vais l'acheter » ([[el libro]]) ?", choix: ["[[Voy a lo comprar]]", "[[Voy a comprarlo]]", "[[Voy lo a comprar]]", "[[Voy a comprarle]]"], bonne: 1, explication: "Le pronom COD [[lo]] se colle derrière l'infinitif : [[comprarlo]]. [[Le]] serait un COI (« lui »)." },
          ],
        },
        {
          titre: "Deux pronoms ensemble",
          blocs: [
            { t: "propriete", titre: "COI d'abord, puis COD", md: "Quand deux pronoms se suivent, le **COI** passe en premier : *[[Me lo das]]* (tu me le donnes). Et **[[le / les]]** se transforme en [[**se**]] devant [[lo, la, los, las]] : on dit *[[Se lo doy]]* (je le lui donne), jamais *[[le lo doy]]*." },
            { t: "exemple", titre: "Prêter un stylo à Ana", etapes: ["*[[Doy el bolígrafo a Ana.]]* Je donne le stylo à Ana.", "COD : [[el bolígrafo]] → **[[lo]]**. COI : [[a Ana]] → **[[le]]**.", "Ordre COI + COD : *[[le lo]]*… qui devient **[[se lo]]**.", "Résultat : *[[Se lo doy.]]* Je le lui donne."] },
            { t: "texte", md: "Avec les autres personnes, rien ne change : — *[[¿Me das el bolígrafo?]]* — *[[Sí, **te lo** doy ahora.]]* (Tu me donnes le stylo ? — Oui, je te le donne maintenant.)" },
            { t: "verifie", q: "Comment dit-on « Je le lui donne » ?", choix: ["[[Le lo doy]]", "[[Se lo doy]]", "[[Lo le doy]]", "[[Lo se doy]]"], bonne: 1, explication: "COI avant COD, et [[le]] devient [[se]] devant [[lo]] : [[Se lo doy.]]" },
          ],
        },
        {
          titre: "Comparer",
          blocs: [
            { t: "tableau", titre: "Les comparatifs", entetes: ["Sens", "Structure", "Exemple"], lignes: [["supériorité", "**[[más]]** + adjectif + **[[que]]**", "[[Mi hermano es más alto que yo.]]"], ["infériorité", "**[[menos]]** + adjectif + **[[que]]**", "[[Ana es menos tímida que Luis.]]"], ["égalité (adjectif)", "**[[tan]]** + adjectif + **[[como]]**", "[[Soy tan rápido como él.]]"], ["égalité (nom)", "**[[tanto / tanta / tantos]]** + nom + **[[como]]**", "[[Tengo tantos libros como tú.]]"]] },
            { t: "tableau", titre: "Quatre comparatifs irréguliers", entetes: ["Adjectif", "Comparatif", "Exemple"], lignes: [["[[bueno]] (bon)", "**[[mejor]]** (meilleur, mieux)", "[[Este libro es mejor que el otro.]]"], ["[[malo]] (mauvais)", "**[[peor]]** (pire)", "[[Hoy el tiempo es peor que ayer.]]"], ["[[grande]] (âgé)", "**[[mayor]]** (plus âgé)", "[[Carlos tiene 15 años: es mayor que Ana.]]"], ["[[pequeño]] (jeune)", "**[[menor]]** (plus jeune)", "[[Ana es menor que Carlos.]]"]] },
            { t: "attention", md: "*[[Más mejor]]* n'existe pas, pas plus que « plus meilleur » en français. Et attention : « plus grand » par la taille se dit *[[más alto]]* ; *[[mayor]]* parle de l'**âge**." },
          ],
        },
        {
          titre: "Le superlatif, [[muy]] et [[mucho]]",
          blocs: [
            { t: "propriete", titre: "Le superlatif", md: "• **[[el / la / los / las más]]** + adjectif + **[[de]]** : *[[Madrid es la ciudad más grande de España.]]*\n• Le suffixe **[[-ísimo]]** = très, très : [[bueno]] → *[[buenísimo]]*, [[alto]] → *[[altísimo]]*. *[[La paella está buenísima]]* : la paella est délicieuse." },
            { t: "texte", md: "**[[Muy]]** (très) se place devant un adjectif ou un adverbe et ne change jamais : *[[muy cansado]]*, *[[muy bien]]*. **[[Mucho]]** (beaucoup) accompagne un nom et s'accorde avec lui : *[[mucho trabajo]]*, *[[mucha hambre]]*, *[[muchos amigos]]*. Après un verbe, il reste invariable : *[[Estudio mucho]]*.\n\nDonc : *[[Tengo mucha hambre y estoy muy cansado.]]* J'ai très faim et je suis très fatigué." },
            { t: "exemple", titre: "Tout ensemble", md: "*[[Mi hermano es **mayor que** yo y es **más alto**, pero yo soy **tan rápido como** él. Tengo un libro **buenísimo**: lo leo todas las noches y mañana se lo presto a mi amiga.]]*\nMon frère est plus âgé que moi et plus grand, mais je suis aussi rapide que lui. J'ai un livre génial : je le lis tous les soirs et demain je le prête à mon amie." },
          ],
        },
      ],
      bilan: "Lo et la pour le COD, le pour le COI, se devant lo ; devant le verbe conjugué, collé après l'infinitif ; et pour comparer, más que, menos que, tan como, sans jamais dire más mejor.",
    },
    "4e-espagnol-08-vie-quotidienne": {
      accroche: "Te voilà à Madrid pour une semaine. Il faut prendre le métro, acheter un tee-shirt, commander au restaurant… et peut-être expliquer au pharmacien que tu as mal à la gorge. Voici les mots qui sauvent la vie quotidienne.",
      objectifs: [
        "Te déplacer et faire des achats en ville",
        "Commander au restaurant et parler de nourriture",
        "Dire où tu as mal avec doler",
        "Parler de tes loisirs, de tes émotions et de ton caractère",
      ],
      sections: [
        {
          titre: "En ville et dans les magasins",
          blocs: [
            { t: "tableau", titre: "La ville et les transports", entetes: ["Espagnol", "Français"], lignes: [["[[la calle]]", "la rue"], ["[[la plaza]]", "la place"], ["[[el ayuntamiento]]", "la mairie"], ["[[la estación]]", "la gare"], ["[[la parada de autobús]]", "l'arrêt de bus"], ["[[el metro]]", "le métro"], ["[[a pie / en bici]]", "à pied / à vélo"]] },
            { t: "exemple", titre: "Dans une boutique", md: "— *[[Hola, ¿**cuánto cuesta** esta camiseta?]]*\n— *[[Cuesta doce euros. Es muy **barata**.]]*\n— *[[¿Tiene la **talla** M?]]*\n— Bonjour, combien coûte ce tee-shirt ? — Il coûte douze euros. Il n'est vraiment pas cher. — Vous avez la taille M ?" },
            { t: "liste", titre: "Pour faire les boutiques", items: ["**[[la tienda]]** (le magasin), **[[el mercado]]** (le marché)", "**[[la camiseta]]** (le tee-shirt), **[[los pantalones]]** (le pantalon), **[[los zapatos]]** (les chaussures), **[[el abrigo]]** (le manteau)", "**[[barato]]** (bon marché) ≠ **[[caro]]** (cher)"] },
            { t: "attention", md: "*[[Los pantalones]]* est au pluriel en espagnol : *[[Estos pantalones son caros]]*. Et **[[la tienda]]**, c'est le magasin ; la tente de camping se dit *[[la tienda de campaña]]*." },
            { t: "verifie", q: "Comment demande-t-on « Combien ça coûte ? » ?", choix: ["[[¿Cuánto cuesta?]]", "[[¿Cuántos años tienes?]]", "[[¿Qué hora es?]]", "[[¿Dónde está?]]"], bonne: 0, explication: "[[¿Cuánto cuesta?]] vient du verbe [[costar]] ([[o]] → [[ue]]). Les autres questions demandent l'âge, l'heure et le lieu." },
          ],
        },
        {
          titre: "Au restaurant",
          blocs: [
            { t: "tableau", titre: "À table", entetes: ["Espagnol", "Français"], lignes: [["[[la carta]]", "la carte, le menu"], ["[[el primer plato]]", "l'entrée (le premier plat)"], ["[[el segundo plato]]", "le plat principal"], ["[[el postre]]", "le dessert"], ["[[la cuenta]]", "l'addition"], ["[[el pan, la carne, el pescado]]", "le pain, la viande, le poisson"], ["[[las verduras, la fruta]]", "les légumes, les fruits"]] },
            { t: "exemple", titre: "Commander", md: "— *[[De primer plato quiero una ensalada y de segundo, pescado.]]*\n— *[[¿Y de postre?]]*\n— *[[Fruta, por favor. Y **la cuenta**, cuando pueda.]]*\n— En entrée, je voudrais une salade et en plat, du poisson. — Et en dessert ? — Des fruits, s'il vous plaît. Et l'addition, quand vous pourrez." },
            { t: "savais-tu", md: "En Espagne, on déjeune tard, vers 14 h, et on dîne souvent après 21 h. À midi, beaucoup de restaurants proposent un *[[menú del día]]* : entrée, plat, dessert, pain et boisson à prix fixe." },
          ],
        },
        {
          titre: "Le corps et la santé",
          blocs: [
            { t: "propriete", titre: "[[Doler]] fonctionne comme [[gustar]]", md: "Pour dire où tu as mal, la partie du corps est le **sujet** du verbe : *[[Me **duele** la cabeza]]* (la tête me fait mal). Si le sujet est au pluriel, le verbe aussi : *[[Me **duelen** las piernas]]*. Le pronom change selon la personne : [[me, te, le, nos, os, les.]]" },
            { t: "schema", titre: "[[¿Dónde te duele?]]", legende: "[[Me duele la cabeza, me duele la garganta, me duelen los pies…]]", svg: `<svg viewBox="0 0 400 280"><circle class="aplat" cx="200" cy="48" r="25"/><circle class="trait" fill="none" cx="200" cy="48" r="25"/><line class="trait" x1="200" y1="73" x2="200" y2="86"/><rect class="aplat-papier" stroke="var(--encre)" x="170" y="86" width="60" height="84" rx="12"/><line class="trait" x1="172" y1="96" x2="132" y2="158"/><line class="trait" x1="228" y1="96" x2="268" y2="158"/><circle class="aplat-fort" cx="129" cy="164" r="7"/><circle class="aplat-fort" cx="271" cy="164" r="7"/><line class="trait" x1="186" y1="170" x2="176" y2="252"/><line class="trait" x1="214" y1="170" x2="224" y2="252"/><ellipse class="aplat-fort" cx="168" cy="258" rx="13" ry="6"/><ellipse class="aplat-fort" cx="232" cy="258" rx="13" ry="6"/><text class="texte" x="60" y="52" text-anchor="middle">la cabeza</text><line class="pointille" x1="100" y1="48" x2="174" y2="48"/><text class="texte" x="60" y="90" text-anchor="middle">la garganta</text><line class="pointille" x1="105" y1="86" x2="196" y2="80"/><text class="texte" x="60" y="132" text-anchor="middle">el brazo</text><line class="pointille" x1="95" y1="128" x2="150" y2="128"/><text class="texte" x="60" y="172" text-anchor="middle">la mano</text><line class="pointille" x1="92" y1="168" x2="120" y2="166"/><text class="texte" x="340" y="135" text-anchor="middle">el estómago</text><line class="pointille" x1="298" y1="131" x2="214" y2="131"/><text class="texte" x="340" y="214" text-anchor="middle">la pierna</text><line class="pointille" x1="305" y1="210" x2="222" y2="210"/><text class="texte" x="340" y="262" text-anchor="middle">el pie</text><line class="pointille" x1="320" y1="258" x2="247" y2="258"/></svg>` },
            { t: "texte", md: "D'autres expressions utiles : **[[tener fiebre]]** (avoir de la fièvre), **[[estar enfermo]]** (être malade), **[[el médico]]** (le médecin), **[[la farmacia]]** (la pharmacie).\n— *[[¿Qué te pasa?]]* — *[[Tengo fiebre y me duele la garganta.]]*\n— Qu'est-ce qui t'arrive ? — J'ai de la fièvre et j'ai mal à la gorge." },
            { t: "attention", md: "Ne traduis pas mot à mot « j'ai mal à » : *[[tengo mal a la cabeza]]* est faux. Dis **[[me duele la cabeza]]**. Et accorde le verbe : *[[me duelen los pies]]*, car *[[los pies]]* est pluriel." },
            { t: "verifie", q: "Comment dit-on « J'ai mal aux jambes » ?", choix: ["[[Me duele las piernas]]", "[[Me duelen las piernas]]", "[[Tengo mal a las piernas]]", "[[Duelo las piernas]]"], bonne: 1, explication: "[[Las piernas]] est le sujet, au pluriel : le verbe [[doler]] se met au pluriel, [[me duelen.]]" },
          ],
        },
        {
          titre: "Loisirs et technologies",
          blocs: [
            { t: "tableau", titre: "Le temps libre", entetes: ["Espagnol", "Français"], lignes: [["[[jugar al fútbol]]", "jouer au football"], ["[[tocar la guitarra]]", "jouer de la guitare"], ["[[el móvil]]", "le téléphone portable"], ["[[el ordenador]]", "l'ordinateur"], ["[[la pantalla]]", "l'écran"], ["[[las redes sociales]]", "les réseaux sociaux"], ["[[descargar]]", "télécharger"]] },
            { t: "astuce", md: "« Jouer » a deux traductions : **[[jugar a]]** pour un sport ou un jeu (*[[juego al fútbol]]*, car [[a]] + [[el]] = [[al]]), **[[tocar]]** pour un instrument (*[[toco la guitarra]]*). *[[Mi hermana toca la guitarra y yo juego al fútbol.]]*" },
          ],
        },
        {
          titre: "Émotions et caractère",
          blocs: [
            { t: "propriete", titre: "[[Estar]] pour l'émotion, [[ser]] pour le caractère", md: "Une émotion est passagère : [[**estar** contento, triste, enfadado]] (fâché), [[nervioso, preocupado]] (inquiet).\nLe caractère est durable : [[**ser** simpático, tímido, generoso, perezoso]] (paresseux), [[trabajador]] (travailleur)." },
            { t: "exemple", titre: "Avant l'examen", md: "*[[Pablo **es** tímido y trabajador. Hoy **está** nervioso porque tiene un examen. Yo también **estoy preocupada por** el examen.]]*\nPablo est timide et travailleur. Aujourd'hui, il est nerveux car il a un examen. Moi aussi, je suis inquiète à cause de l'examen." },
            { t: "verifie", q: "Comment dit-on « Pablo est timide » (c'est son caractère) ?", choix: ["[[Pablo está tímido]]", "[[Pablo es tímido]]", "[[Pablo tiene tímido]]"], bonne: 1, explication: "Le caractère est durable : on emploie [[ser]]. [[Estar]] sert pour les émotions passagères, comme [[nervioso]]." },
          ],
        },
      ],
      bilan: "Cuánto cuesta, la cuenta, me duele : trois clés pour la ville. Et retiens : estar pour l'humeur du moment, ser pour le caractère.",
    },
    "4e-espagnol-09-voyager-decrire": {
      accroche: "Tu sors de la gare de Séville, ton sac sur le dos. Où est l'office de tourisme ? Fait-il froid le soir ? Faut-il réserver une chambre ? Avec quelques phrases clés, tu voyages en toute autonomie.",
      objectifs: [
        "Demander ton chemin et comprendre des indications",
        "Situer un lieu avec les prépositions",
        "Réserver une chambre, parler de la météo et décrire un paysage",
        "Distinguer por et para, exprimer des quantités",
      ],
      sections: [
        {
          titre: "Demander et donner son chemin",
          blocs: [
            { t: "tableau", titre: "Les indications", entetes: ["Espagnol", "Français"], lignes: [["[[Perdone, ¿dónde está…?]]", "Excusez-moi, où est… ?"], ["[[Sigue todo recto.]]", "Continue tout droit."], ["[[Gira a la derecha.]]", "Tourne à droite."], ["[[Gira a la izquierda.]]", "Tourne à gauche."], ["[[Toma la primera calle.]]", "Prends la première rue."], ["[[Está cerca / lejos.]]", "C'est près / loin."]] },
            { t: "schema", titre: "Plan : de la gare à l'office de tourisme", legende: "[[1. Sigue todo recto. 2. Gira a la izquierda. La oficina de turismo está enfrente del museo, al lado del banco.]]", svg: `<svg viewBox="0 0 400 300"><g class="trait-fin"><line x1="185" y1="20" x2="185" y2="105"/><line x1="185" y1="135" x2="185" y2="290"/><line x1="215" y1="20" x2="215" y2="105"/><line x1="215" y1="135" x2="215" y2="290"/><line x1="20" y1="105" x2="185" y2="105"/><line x1="215" y1="105" x2="380" y2="105"/><line x1="20" y1="135" x2="185" y2="135"/><line x1="215" y1="135" x2="380" y2="135"/></g><rect class="aplat-papier" stroke="var(--encre)" x="30" y="40" width="75" height="42" rx="3"/><text class="texte-petit" x="67" y="65" text-anchor="middle">el museo</text><rect class="aplat" stroke="var(--encre)" x="30" y="148" width="75" height="48" rx="3"/><text class="texte-petit" x="67" y="168" text-anchor="middle">oficina de</text><text class="texte-petit" x="67" y="182" text-anchor="middle">turismo</text><rect class="aplat-papier" stroke="var(--encre)" x="112" y="148" width="62" height="48" rx="3"/><text class="texte-petit" x="143" y="176" text-anchor="middle">el banco</text><rect class="aplat-papier" stroke="var(--encre)" x="228" y="40" width="85" height="42" rx="3"/><text class="texte-petit" x="270" y="65" text-anchor="middle">la farmacia</text><rect class="aplat" x="240" y="150" width="130" height="62" rx="18"/><text class="texte-petit" x="305" y="185" text-anchor="middle">la plaza</text><path fill="none" stroke="var(--pigment)" stroke-width="3" d="M200 266 L200 120 L80 120" marker-end="url(#fl-p)"/><circle cx="200" cy="268" r="6" fill="var(--pigment)"/><text class="texte-petit" x="222" y="248">1. Sigue todo recto</text><text class="texte-petit" x="222" y="276">Estás aquí (la estación)</text><text class="texte-petit" x="180" y="99" text-anchor="end">2. Gira a la izquierda</text></svg>` },
            { t: "exemple", titre: "Au coin de la rue", md: "— *[[Perdone, ¿dónde está la oficina de turismo?]]*\n— *[[Siga todo recto y gire a la izquierda. Está enfrente del museo, al lado del banco.]]*\n— *[[Gracias por su ayuda.]]*\nLe passant vouvoie ([[usted]]) : *[[siga]]*, *[[gire]]*. Entre amis, on dirait *[[sigue]]* et *[[gira]]*." },
            { t: "verifie", q: "Comment dit-on « Tourne à droite » ?", choix: ["[[Gira a la izquierda]]", "[[Gira a la derecha]]", "[[Sigue todo recto]]", "[[Toma la derecha calle]]"], bonne: 1, explication: "[[La derecha]] = la droite, [[la izquierda]] = la gauche. [[Sigue todo recto]] veut dire « continue tout droit »." },
          ],
        },
        {
          titre: "Situer un lieu",
          blocs: [
            { t: "tableau", titre: "Les prépositions de lieu", entetes: ["Espagnol", "Français", "Exemple"], lignes: [["[[al lado de]]", "à côté de", "[[La farmacia está al lado del banco.]]"], ["[[enfrente de]]", "en face de", "[[La oficina está enfrente del museo.]]"], ["[[cerca de / lejos de]]", "près de / loin de", "[[El hotel está cerca de la playa.]]"], ["[[entre]]", "entre", "[[El pueblo está entre la montaña y el lago.]]"], ["[[delante de / detrás de]]", "devant / derrière", "[[El coche está delante de la casa.]]"], ["[[encima de / debajo de]]", "sur / sous", "[[El libro está encima de la mesa.]]"]] },
            { t: "attention", md: "**[[a]] + [[el]] = [[al]]** et **[[de]] + [[el]] = [[del]]** : *[[al lado del banco]]*, jamais *[[al lado de el banco]]*. Ces contractions sont obligatoires. Avec *[[la]]*, rien ne change : *[[al lado de la farmacia]]*. Et pour situer, on emploie **[[estar]]** : *[[El museo está enfrente.]]*" },
            { t: "astuce", md: "Pour dire qu'une chose **existe** quelque part, on emploie **[[hay]]** : *[[Cerca del pueblo hay un bosque]]* (il y a une forêt). Pour situer une chose précise, déjà connue, on emploie **[[estar]]** : *[[El bosque está cerca.]]*" },
          ],
        },
        {
          titre: "À l'hôtel et la météo",
          blocs: [
            { t: "exemple", titre: "Réserver une chambre", md: "— *[[Buenos días, quería una **habitación doble** con baño **para dos noches**.]]*\n— *[[Muy bien. Aquí tiene **la llave**. **El desayuno** es a las ocho.]]*\n— Bonjour, je voudrais une chambre double avec salle de bains pour deux nuits. — Très bien. Voici la clé. Le petit-déjeuner est à huit heures.\n[[Quería]] (je voulais) est plus poli que *[[quiero]]* ; on dit aussi *[[una habitación individual]]* et *[[la reserva]]*." },
            { t: "tableau", titre: "[[¿Qué tiempo hace?]] Quel temps fait-il ?", entetes: ["Espagnol", "Français"], lignes: [["[[Hace sol.]]", "Il y a du soleil."], ["[[Hace calor / frío.]]", "Il fait chaud / froid."], ["[[Hace viento.]]", "Il y a du vent."], ["[[Llueve. / Nieva.]]", "Il pleut. / Il neige."], ["[[Está nublado.]]", "Le ciel est nuageux."], ["[[Hay tormenta. / Hay niebla.]]", "Il y a de l'orage. / Il y a du brouillard."]] },
            { t: "astuce", md: "Trois verbes pour la météo : **[[hacer]]** pour le soleil, la chaleur, le froid et le vent ; **[[hay]]** pour l'orage et le brouillard ; **[[estar]]** pour *[[nublado]]*. *[[Llover]]* et *[[nevar]]* se conjuguent seuls : *[[llueve]]*, *[[nieva]]*." },
          ],
        },
        {
          titre: "Décrire un paysage",
          blocs: [
            { t: "liste", titre: "Les paysages", items: ["**[[la montaña]]** (la montagne), **[[el bosque]]** (la forêt), **[[el río]]** (le fleuve, la rivière), **[[el lago]]** (le lac)", "**[[la playa]]** (la plage), **[[la isla]]** (l'île), **[[el desierto]]** (le désert)", "**[[el campo]]** (la campagne), **[[el pueblo]]** (le village)"] },
            { t: "exemple", titre: "Une carte postale", md: "*[[Estoy en un pueblo **entre** la montaña y el lago. Hace sol, pero por la noche hace frío. **Cerca del** pueblo hay un bosque y un río.]]*\nJe suis dans un village entre la montagne et le lac. Il fait beau, mais la nuit il fait froid. Près du village, il y a une forêt et une rivière." },
          ],
        },
        {
          titre: "[[Por]] ou [[para]] ? Et les quantités",
          blocs: [
            { t: "propriete", titre: "[[Por]] et [[para]]", md: "**[[Por]]** = la cause, le trajet, le moment de la journée : *[[gracias por tu ayuda]]*, *[[pasear por el parque]]*, *[[por la mañana]]*.\n**[[Para]]** = le but, la destination, le destinataire, le délai : *[[estudio para aprender]]*, *[[el tren para Madrid]]*, *[[un regalo para ti]]*, *[[para el lunes]]*." },
            { t: "tableau", titre: "Exprimer une quantité", entetes: ["Espagnol", "Français"], lignes: [["[[un kilo de naranjas]]", "un kilo d'oranges"], ["[[medio litro de leche]]", "un demi-litre de lait"], ["[[una docena de huevos]]", "une douzaine d'œufs"], ["[[un poco de pan]]", "un peu de pain"], ["[[muchos / pocos turistas]]", "beaucoup de / peu de touristes"], ["[[demasiado ruido]]", "trop de bruit"]] },
            { t: "attention", md: "« Un demi-litre » se dit **[[medio litro]]**, sans *[[un]]* devant *[[medio]]*. Et pas de [[*de*]] après *[[mucho]]* ou *[[poco]]* : *[[muchos turistas]]*, *[[poca gente]]*." },
            { t: "verifie", q: "Pourquoi emploie-t-on « [[para]] » dans « [[Estudio español para viajar a México]] » ?", choix: ["Pour exprimer la cause", "Pour exprimer le but", "Pour exprimer un trajet"], bonne: 1, explication: "J'étudie l'espagnol pour voyager : c'est le but, donc [[para]]. La cause et le trajet appellent [[por]]." },
            { t: "verifie", q: "Complète : « [[Paseo ___ el parque ___ la mañana.]] »", choix: ["[[por / por]]", "[[para / por]]", "[[por / para]]", "[[para / para]]"], bonne: 0, explication: "Un trajet à travers le parc ([[por el parque]]) et un moment de la journée ([[por la mañana]]) : [[por]] les deux fois." },
          ],
        },
      ],
      bilan: "Sigue todo recto, gira a la izquierda, está al lado del banco : tu sais te repérer. Et retiens : por regarde la cause et le chemin, para regarde le but.",
    },
    "4e-espagnol-10-culture-hispanophone": {
      accroche: "Près de 500 millions de personnes ont l'espagnol pour langue maternelle, du Mexique à la Terre de Feu. Derrière cette langue, il y a des pyramides mayas, des cités incas, des peintres, des fêtes et des musiques qui font danser le monde entier.",
      objectifs: [
        "Situer les grands pays hispanophones d'Amérique latine et leurs capitales",
        "Connaître les Mayas, les Aztèques et les Incas, puis la conquête et les indépendances",
        "Reconnaître des artistes, des fêtes et des musiques du monde hispanique",
        "Citer des repères culturels de l'Espagne",
      ],
      sections: [
        {
          titre: "L'espagnol, langue de deux continents",
          blocs: [
            { t: "texte", md: "L'espagnol est langue officielle dans une **vingtaine de pays** : l'Espagne, la Guinée équatoriale en Afrique, et surtout l'Amérique latine, du Mexique au Chili. ==Le Mexique est le pays hispanophone le plus peuplé== : environ 130 millions d'habitants, près de trois fois plus que l'Espagne." },
            { t: "carte", fond: "monde", titre: "L'Amérique latine hispanophone", cadre: [-118, -56, -34, 33], zones: ["MX", "GT", "SV", "HN", "NI", "CR", "PA", "CU", "DO", "PR", "CO", "VE", "EC", "PE", "BO", "CL", "AR", "UY", "PY"], reperes: [{ nom: "Ciudad de México", lat: 19.4326, lon: -99.1332 }, { nom: "La Habana", lat: 23.1136, lon: -82.3666 }, { nom: "Bogotá", lat: 4.711, lon: -74.0721 }, { nom: "Lima", lat: -12.0464, lon: -77.0428 }, { nom: "Machu Picchu", lat: -13.1631, lon: -72.545 }, { nom: "Santiago", lat: -33.4489, lon: -70.6693 }, { nom: "Buenos Aires", lat: -34.6037, lon: -58.3816 }], legende: "Les pays colorés ont l'espagnol pour langue officielle. Le Brésil, au centre de l'Amérique du Sud, parle portugais." },
            { t: "tableau", titre: "Six pays, six capitales", entetes: ["[[País]]", "[[Capital]]", "Un repère"], lignes: [["[[México]]", "[[Ciudad de México]]", "l'ancienne Tenochtitlan des Aztèques"], ["[[Colombia]]", "[[Bogotá]]", "le pays de García Márquez"], ["[[Perú]]", "[[Lima]]", "le Machu Picchu, dans les Andes"], ["[[Argentina]]", "[[Buenos Aires]]", "la ville du tango"], ["[[Chile]]", "[[Santiago]]", "un pays étiré le long des Andes"], ["[[Cuba]]", "[[La Habana]]", "l'île du son et de la salsa"]] },
            { t: "verifie", q: "Quel est le pays hispanophone le plus peuplé ?", choix: ["L'Espagne", "L'Argentine", "Le Mexique", "La Colombie"], bonne: 2, explication: "Le Mexique compte environ 130 millions d'habitants, bien plus que l'Espagne (environ 48 millions)." },
          ],
        },
        {
          titre: "Les civilisations précolombiennes",
          blocs: [
            { t: "definition", terme: "Précolombien", md: "Qui existait **avant l'arrivée de Christophe Colomb** en Amérique, en 1492. Les grandes civilisations précolombiennes avaient des villes, des routes, des calendriers et des savoirs très avancés." },
            { t: "tableau", titre: "Trois grandes civilisations", entetes: ["Civilisation", "Où ?", "À retenir"], lignes: [["[[los mayas]]", "Yucatán (Mexique), Guatemala", "pyramides (Chichén Itzá), écriture, calendrier très précis"], ["[[los aztecas]]", "centre du Mexique", "capitale **Tenochtitlan**, fondée en 1325 sur un lac"], ["[[los incas]]", "Andes (Pérou)", "capitale **Cuzco**, cité du **Machu Picchu**, routes de montagne"]] },
            { t: "savais-tu", md: "Tenochtitlan était bâtie sur une île du lac Texcoco. Les Espagnols, éblouis, la comparaient à Venise. [[Ciudad de México]] a été construite sur ses ruines : on voit encore les restes du [[Templo Mayor]] en plein centre." },
            { t: "verifie", q: "Le Machu Picchu est une cité construite par quelle civilisation ?", choix: ["Les Mayas", "Les Aztèques", "Les Incas"], bonne: 2, explication: "Le Machu Picchu est une cité inca, perchée dans les Andes au Pérou, construite vers 1450." },
          ],
        },
        {
          titre: "De la conquête aux indépendances",
          blocs: [
            { t: "texte", md: "Après l'arrivée de Colomb, les Espagnols conquièrent les grands empires en quelques années : **Hernán Cortés** soumet les Aztèques en **1521**, **Francisco Pizarro** les Incas à partir de **1532**. L'Amérique devient pour trois siècles un empire espagnol : voilà pourquoi on y parle espagnol. Au XIXe siècle, les colonies prennent leur indépendance." },
            { t: "frise", titre: "De Tenochtitlan aux indépendances", evenements: [{ date: 1325, label: "Fondation de Tenochtitlan", detail: "Les Aztèques fondent leur capitale sur une île du lac Texcoco." }, { date: 1450, label: "Construction du Machu Picchu", detail: "Vers 1450, les Incas bâtissent la cité dans les Andes." }, { date: 1492, label: "Colomb atteint l'Amérique", detail: "Le 12 octobre, il débarque sur une île des Bahamas." }, { date: 1521, label: "Cortés prend Tenochtitlan", detail: "Fin de l'Empire aztèque." }, { date: 1532, label: "Pizarro capture l'empereur inca", detail: "Atahualpa est fait prisonnier à Cajamarca : l'Empire inca s'effondre." }, { date: 1810, label: "Le Mexique se soulève", detail: "Le prêtre Miguel Hidalgo lance le « Grito de Dolores »." }, { date: 1816, label: "Indépendance de l'Argentine", detail: "Proclamée le 9 juillet à Tucumán." }, { date: 1821, label: "Indépendance du Mexique et du Pérou", detail: "Le Pérou en juillet, le Mexique en septembre." }, { date: 1824, label: "Bataille d'Ayacucho", detail: "Fin de la domination espagnole en Amérique du Sud." }] },
            { t: "attention", md: "Ne mélange pas les civilisations : les **Aztèques** et les **Mayas** vivaient au Mexique et en Amérique centrale, les **Incas** dans les Andes. Le Machu Picchu est donc inca, au Pérou, et non aztèque !" },
          ],
        },
        {
          titre: "Artistes, fêtes et musiques",
          blocs: [
            { t: "texte", md: "**Frida Kahlo** (1907-1954), peintre mexicaine, est célèbre pour ses **autoportraits** colorés, où elle exprime sa douleur et son amour du Mexique. **Gabriel García Márquez**, écrivain colombien, a écrit *[[Cien años de soledad]]* (Cent ans de solitude) et a reçu le **prix Nobel de littérature en 1982**." },
            { t: "exemple", titre: "[[El Día de Muertos]] (1er et 2 novembre, Mexique)", md: "*[[El Día de Muertos, las familias mexicanas preparan una ofrenda con fotos, flores de cempasúchil, pan de muerto y calaveras de azúcar. No es una fiesta triste: es una celebración de la vida de los que ya no están.]]*\nLe jour des Morts, les familles mexicaines préparent un autel avec des photos, des fleurs de [[cempasúchil]], du pain des morts et des têtes de mort en sucre. Ce n'est pas une fête triste : c'est une célébration de la vie de ceux qui ne sont plus là." },
            { t: "tableau", titre: "Musiques et danses", entetes: ["Musique", "Origine"], lignes: [["[[la salsa]]", "Cuba, Porto Rico, New York"], ["[[el tango]]", "Buenos Aires (Argentine)"], ["[[el reggaetón]]", "Porto Rico, Panamá"], ["[[el mariachi]]", "Mexique"], ["[[el flamenco]]", "Andalousie (Espagne)"]] },
            { t: "verifie", q: "Quand célèbre-t-on le [[Día de Muertos]] au Mexique ?", choix: ["Le 31 octobre", "Les 1er et 2 novembre", "Le 25 décembre", "Le 6 janvier"], bonne: 1, explication: "Le [[Día de Muertos]] se fête les 1er et 2 novembre, avec des [[ofrendas]], des fleurs de [[cempasúchil]] et des [[calaveras]] en sucre." },
          ],
        },
        {
          titre: "Repères d'Espagne",
          blocs: [
            { t: "texte", md: "L'Espagne est divisée en **[[17 comunidades autónomas]]** ([[Cataluña, Andalucía, Galicia, País Vasco, Madrid…]]), qui ont chacune leur gouvernement. À côté du castillan, trois langues sont **co-officielles** dans leurs régions : le **catalan**, le **basque** (*[[euskera]]*) et le **galicien**." },
            { t: "carte", fond: "monde", titre: "Le [[Camino de Santiago]] et Guernica", cadre: [-10, 41, 3.5, 44.2], zones: ["ES"], reperes: [{ nom: "Roncesvalles", lat: 43.0092, lon: -1.3194 }, { nom: "Pamplona", lat: 42.8125, lon: -1.6458 }, { nom: "Burgos", lat: 42.3439, lon: -3.6969 }, { nom: "León", lat: 42.5987, lon: -5.5671 }, { nom: "Santiago de Compostela", lat: 42.8782, lon: -8.5448 }, { nom: "Guernica", lat: 43.3167, lon: -2.6833 }], traits: [{ de: [43.0092, -1.3194], a: [42.8125, -1.6458] }, { de: [42.8125, -1.6458], a: [42.3439, -3.6969] }, { de: [42.3439, -3.6969], a: [42.5987, -5.5671] }, { de: [42.5987, -5.5671], a: [42.8782, -8.5448], label: "Camino francés" }], legende: "Le chemin le plus fréquenté entre en Espagne par les Pyrénées et traverse le nord du pays jusqu'à [[Santiago de Compostela]], en Galice." },
            { t: "texte", md: "Depuis le Moyen Âge, des pèlerins marchent sur le **[[Camino de Santiago]]** jusqu'à la cathédrale de **[[Santiago de Compostela]]**. En **1937**, pendant la guerre civile, **Picasso** peint *Guernica* pour dénoncer le **bombardement** de cette petite ville basque : un cri contre la violence de la guerre." },
            { t: "liste", titre: "À table !", items: ["**[[la paella]]** : riz au safran, venu de la région de Valencia", "**[[la tortilla de patatas]]** : omelette aux pommes de terre", "**[[el gazpacho]]** : soupe froide de tomates, d'Andalousie", "**[[las tapas]]** : petites portions à partager", "**[[los churros]]** : beignets, souvent trempés dans du chocolat chaud"] },
          ],
        },
      ],
      bilan: "Du Machu Picchu au Camino de Santiago, de Frida Kahlo au flamenco : parler espagnol, c'est ouvrir la porte d'une vingtaine de pays et de siècles d'histoire.",
    },
  },
};
