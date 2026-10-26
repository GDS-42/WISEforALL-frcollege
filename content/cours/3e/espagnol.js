// ÉCLORE — Cours illustrés, 3e Espagnol (LV2, troisième année, niveau A2).
// Schéma : docs/COURS.md. Validation : node tools/validate-cours.mjs content/cours/3e/espagnol.js
export default {
  id: "3e-espagnol",
  chapitres: {
    "3e-espagnol-01-temps-du-passe": {
      accroche: "« Llovía. Cuando llegué al instituto, la clase ya había empezado. » En deux phrases, trois temps du passé différents. Pas de panique : chacun a un rôle précis, comme les acteurs d'un film. Aujourd'hui, tu apprends à les diriger.",
      objectifs: [
        "Conjuguer le pretérito perfecto et le pretérito indefinido, réguliers et irréguliers",
        "Conjuguer l'imperfecto et reconnaître le pluscuamperfecto",
        "Choisir le bon temps grâce aux marqueurs temporels",
        "Raconter une histoire : le décor à l'imperfecto, l'action à l'indefinido",
      ],
      sections: [
        {
          titre: "Quatre temps, quatre rôles",
          blocs: [
            { t: "texte", md: "En français, tu dis « j'ai mangé » pour presque tout. L'espagnol, lui, ==distingue soigneusement le passé qui touche encore le présent et le passé bien terminé==. Il a aussi un temps pour le décor et un temps pour ce qui s'était passé avant.\n\nRegarde la ligne du temps : chaque temps occupe sa place." },
            { t: "schema", titre: "La ligne du temps des passés", legende: "Esta semana he dormido poco. Ayer llovía y, cuando llegué, la clase ya había empezado.", svg: `<svg viewBox="0 0 400 230"><rect class="aplat" x="95" y="126" width="120" height="28" rx="6"/><line class="trait" x1="15" y1="140" x2="388" y2="140" marker-end="url(#fl)"/><line class="trait" x1="345" y1="122" x2="345" y2="158"/><text class="texte-main" x="345" y="114" text-anchor="middle">ahora</text><circle cx="55" cy="140" r="6" fill="var(--pigment)"/><circle cx="185" cy="140" r="6" fill="var(--pigment)"/><path class="trait-fin" d="M262 128 Q303 92 340 126" marker-end="url(#fl-p)"/><text class="texte" x="155" y="62" text-anchor="middle">imperfecto</text><text class="texte-petit" x="155" y="78" text-anchor="middle">llovía (décor, durée)</text><line class="pointille" x1="155" y1="84" x2="155" y2="124"/><text class="texte" x="300" y="56" text-anchor="middle">perfecto</text><text class="texte-petit" x="300" y="72" text-anchor="middle">he dormido poco</text><text class="texte-petit" x="300" y="86" text-anchor="middle">(esta semana)</text><text class="texte" x="15" y="182">pluscuamperfecto</text><text class="texte-petit" x="15" y="198">había empezado (avant)</text><line class="pointille" x1="55" y1="148" x2="55" y2="168"/><text class="texte" x="230" y="182" text-anchor="middle">indefinido</text><text class="texte-petit" x="230" y="198" text-anchor="middle">llegué (action finie)</text><line class="pointille" x1="185" y1="148" x2="215" y2="168"/></svg>` },
            { t: "liste", titre: "Le rôle de chacun", items: ["**Perfecto** : un passé dans une période qui n'est pas finie (*hoy, esta semana, este año*) ou une expérience (*ya, nunca, todavía no*).", "**Indefinido** : une action terminée, datée, dans une période close (*ayer, anoche, el año pasado, en 2010, hace dos días*).", "**Imperfecto** : le décor, la description, l'habitude (*antes, siempre, de niño, todos los días, mientras*).", "**Pluscuamperfecto** : le passé du passé, ce qui s'était produit **avant** une autre action passée."] },
          ],
        },
        {
          titre: "Perfecto et indefinido : la conjugaison",
          blocs: [
            { t: "propriete", titre: "Former le pretérito perfecto", md: "**haber au présent** + **participe passé**.\nhe, has, ha, hemos, habéis, han + habl**ado** / com**ido** / viv**ido**.\n\nLe participe ne s'accorde jamais et rien ne se glisse entre *haber* et lui : *Lo he visto*, jamais *he lo visto*." },
            { t: "tableau", titre: "L'indefinido des verbes réguliers", entetes: ["Personne", "hablar", "comer", "vivir"], lignes: [["yo", "hablé", "comí", "viví"], ["tú", "hablaste", "comiste", "viviste"], ["él / ella / usted", "habló", "comió", "vivió"], ["nosotros", "hablamos", "comimos", "vivimos"], ["vosotros", "hablasteis", "comisteis", "vivisteis"], ["ellos / ustedes", "hablaron", "comieron", "vivieron"]] },
            { t: "tableau", titre: "Les irréguliers à connaître par cœur", entetes: ["Infinitif", "yo", "él", "ellos"], lignes: [["tener", "tuve", "tuvo", "tuvieron"], ["estar", "estuve", "estuvo", "estuvieron"], ["poder", "pude", "pudo", "pudieron"], ["poner", "puse", "puso", "pusieron"], ["hacer", "hice", "**hizo**", "hicieron"], ["querer", "quise", "quiso", "quisieron"], ["venir", "vine", "vino", "vinieron"], ["decir", "dije", "dijo", "**dijeron**"], ["ser / ir", "fui", "fue", "fueron"], ["dar", "di", "dio", "dieron"], ["pedir", "pedí", "**pidió**", "**pidieron**"], ["dormir", "dormí", "**durmió**", "**durmieron**"]] },
            { t: "astuce", md: "Les irréguliers « forts » n'ont **aucun accent écrit** : *tuve, hizo, dijo*. Et les verbes en -ir comme *pedir, dormir, sentir, morir* ne changent qu'aux **troisièmes personnes** : *pidió, durmió, sintió, murió*. Participes irréguliers : **hecho, dicho, visto, escrito, puesto, abierto, vuelto, roto, muerto**." },
            { t: "verifie", q: "Complète : « Anoche Ana ___ una pizza. »", choix: ["pedió", "pidió", "ha pedido", "pedía"], bonne: 1, explication: "*Anoche* (hier soir) appelle l'indefinido. Et *pedir* change son e en i à la 3e personne : **pidió**. *Pedió* n'existe pas." },
          ],
        },
        {
          titre: "L'imperfecto et le pluscuamperfecto",
          blocs: [
            { t: "tableau", titre: "L'imperfecto : deux terminaisons, trois irréguliers", entetes: ["Personne", "hablar", "comer / vivir", "ser", "ir"], lignes: [["yo", "hablaba", "comía / vivía", "era", "iba"], ["tú", "hablabas", "comías", "eras", "ibas"], ["él / ella", "hablaba", "comía", "era", "iba"], ["nosotros", "hablábamos", "comíamos", "éramos", "íbamos"], ["vosotros", "hablabais", "comíais", "erais", "ibais"], ["ellos", "hablaban", "comían", "eran", "iban"]] },
            { t: "texte", md: "Le troisième irrégulier est **ver** : *veía, veías, veía…* Tous les autres sont réguliers. L'imperfecto sert à **décrire** (*Mis abuelos eran muy generosos*) et à dire une **habitude** (*Iban al mercado cada domingo* : ils allaient au marché tous les dimanches)." },
            { t: "definition", terme: "Pluscuamperfecto", md: "**haber à l'imperfecto** (había, habías, había, habíamos, habíais, habían) + **participe**. Il exprime une action **antérieure** à une autre action passée : *Cuando llegamos al cine, la película ya **había empezado*** (le film avait déjà commencé)." },
            { t: "citation", texte: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo…", auteur: "Miguel de Cervantes", source: "Don Quijote de la Mancha, 1605" },
            { t: "texte", md: "Le roman le plus célèbre d'Espagne commence… par un imperfecto : *vivía* (vivait). Cervantes plante le décor avant de lancer l'aventure." },
          ],
        },
        {
          titre: "Raconter : le décor et l'action",
          blocs: [
            { t: "propriete", titre: "La règle du récit", md: "==L'imperfecto plante le décor, l'indefinido fait avancer l'histoire.==\n*Llovía* (décor) *cuando salí* (action). *Mientras leía, sonó el teléfono* : la lecture est en cours, la sonnerie l'interrompt." },
            { t: "exemple", titre: "Analyser un petit récit", etapes: ["« Ayer fue un día raro. » → indefinido : une journée datée, terminée.", "« Hacía frío y yo estaba cansada. » → imperfecto : le décor et l'état.", "« Cuando llegué al instituto, la clase ya había empezado. » → *llegué* fait avancer l'action ; *había empezado* s'est passé avant.", "« Esta semana he dormido muy poco. » → perfecto : la semaine n'est pas finie."] },
            { t: "tableau", titre: "Les marqueurs temporels, des panneaux indicateurs", entetes: ["Marqueur", "Temps appelé"], lignes: [["hoy, esta mañana, este año, ya, nunca, todavía no", "perfecto"], ["ayer, anoche, el año pasado, en 2010, hace dos años", "indefinido"], ["antes, de niño, siempre, todos los días, mientras", "imperfecto"], ["ya (avant une autre action passée)", "pluscuamperfecto"]] },
            { t: "attention", md: "« Hace dos años » ne se met **pas** au perfecto : c'est un moment précis et terminé. On dit *Hace dos años **visité** Perú*, pas *he visitado*. De même, *el año pasado* appelle l'indefinido : *El año pasado mis padres **estuvieron** en Perú y **pudieron** visitar Machu Picchu.*" },
            { t: "verifie", q: "Quelle phrase raconte correctement une action qui en interrompt une autre ?", choix: ["Leí cuando sonaba el teléfono.", "Mientras leía, sonó el teléfono.", "Mientras leí, sonaba el teléfono.", "Mientras he leído, sonó el teléfono."], bonne: 1, explication: "La lecture est l'action en cours (décor) : **leía**, imperfecto. La sonnerie survient et l'interrompt : **sonó**, indefinido." },
          ],
        },
      ],
      bilan: "Perfecto pour un passé qui touche le présent, indefinido pour l'action finie, imperfecto pour le décor, pluscuamperfecto pour l'avant : avec ces quatre outils, tu racontes tout.",
    },
    "3e-espagnol-02-futur-conditionnel": {
      accroche: "« L'année prochaine, j'irai à Barcelone. J'aimerais voir la mer… » Projets, rêves, conseils : pour parler de ce qui n'existe pas encore, l'espagnol a deux temps jumeaux, le futur et le conditionnel. Bonne nouvelle : ils se construisent presque de la même façon.",
      objectifs: [
        "Conjuguer le futur simple, réguliers et irréguliers",
        "Conjuguer le conditionnel présent",
        "Exprimer une hypothèse, un conseil, une demande polie ou une probabilité",
      ],
      sections: [
        {
          titre: "Le futur : l'infinitif + une terminaison",
          blocs: [
            { t: "texte", md: "Pour le futur, pas besoin de chercher un radical : ==on garde l'infinitif entier== et on ajoute les terminaisons. Elles sont les mêmes pour les trois groupes (-ar, -er, -ir). C'est l'un des temps les plus simples de l'espagnol." },
            { t: "tableau", titre: "Futur et conditionnel des verbes réguliers", entetes: ["Personne", "Futur", "Conditionnel"], lignes: [["yo", "hablar**é**", "hablar**ía**"], ["tú", "comer**ás**", "comer**ías**"], ["él / ella / usted", "vivir**á**", "vivir**ía**"], ["nosotros", "hablar**emos**", "hablar**íamos**"], ["vosotros", "comer**éis**", "comer**íais**"], ["ellos / ustedes", "vivir**án**", "vivir**ían**"]] },
            { t: "propriete", titre: "Deux formules à retenir", md: "**Futur** = infinitif + **-é, -ás, -á, -emos, -éis, -án**.\n**Conditionnel** = infinitif + **-ía, -ías, -ía, -íamos, -íais, -ían** (les terminaisons de l'imperfecto en -er).\n\nToutes les formes portent un accent écrit, sauf *-emos* au futur." },
            { t: "astuce", md: "Le **futur proche**, **ir a + infinitif**, existe aussi : *Voy a salir* (je vais sortir). À l'oral, il est très courant pour un projet immédiat. Le futur simple sert plutôt pour un avenir plus lointain ou une promesse : *Te llamaré.*" },
          ],
        },
        {
          titre: "Douze radicaux irréguliers",
          blocs: [
            { t: "texte", md: "Quelques verbes très fréquents abîment leur infinitif. Mais ils le font ==de la même façon au futur et au conditionnel== : apprends le radical une fois, il te servira deux fois. Les terminaisons, elles, restent régulières." },
            { t: "tableau", titre: "Les radicaux irréguliers", entetes: ["Infinitif", "Radical", "Futur (yo)", "Conditionnel (yo)"], lignes: [["tener", "tendr-", "tendré", "tendría"], ["venir", "vendr-", "vendré", "vendría"], ["poner", "pondr-", "pondré", "pondría"], ["salir", "saldr-", "saldré", "saldría"], ["valer", "valdr-", "valdré", "valdría"], ["poder", "podr-", "podré", "podría"], ["saber", "sabr-", "sabré", "sabría"], ["haber", "habr-", "habrá (il y aura)", "habría"], ["querer", "querr-", "querré", "querría"], ["caber", "cabr-", "cabré", "cabría"], ["hacer", "har-", "haré", "haría"], ["decir", "dir-", "diré", "diría"]] },
            { t: "astuce", md: "Trois familles : le **-d-** qui remplace une voyelle (tendr-, vendr-, pondr-, saldr-, valdr-) ; la voyelle qui **tombe** (podr-, sabr-, habr-, querr-, cabr-) ; les deux **rebelles** : *har-* et *dir-*. Ainsi « nous ferons » se dit **haremos**." },
            { t: "verifie", q: "Comment dit-on « ils voudront » ?", choix: ["quererán", "querrán", "quieren", "querrían"], bonne: 1, explication: "*Querer* perd son e : radical **querr-**, puis la terminaison *-án* : **querrán**. *Querrían* est le conditionnel (ils voudraient)." },
          ],
        },
        {
          titre: "Hypothèse, conseil, politesse",
          blocs: [
            { t: "propriete", titre: "L'hypothèse réelle : si + présent, futur", md: "*Si llueve mañana, **nos quedaremos** en casa.* (S'il pleut demain, nous resterons à la maison.)\n\nComme en français, ==jamais de futur après *si*== : on ne dit pas *si lloverá*." },
            { t: "etapes", titre: "Trois usages du conditionnel", items: [{ titre: "Le souhait", md: "*Me **gustaría** ir al concierto, pero no **tendré** tiempo.* (J'aimerais…)" }, { titre: "Le conseil", md: "**Yo que tú** / **Yo en tu lugar** + conditionnel : *Yo que tú, **estudiaría** más antes del examen.* (À ta place, je…)" }, { titre: "La demande polie", md: "*¿**Podrías** ayudarme?* (Pourrais-tu m'aider ?) *¿Le **importaría** cerrar la ventana?*" }] },
            { t: "exemple", titre: "Un projet de voyage", md: "*El año que viene **iré** a Barcelona. Si tengo tiempo, **visitaré** la Sagrada Familia. Me **gustaría** ver el mar, pero no sé si **podré**. Yo que tú, **reservaría** el hotel ahora: en verano **habrá** mucha gente.*\n\n(L'an prochain, j'irai à Barcelone. Si j'ai le temps, je visiterai la Sagrada Familia. J'aimerais voir la mer, mais je ne sais pas si je pourrai. À ta place, je réserverais l'hôtel maintenant : en été, il y aura beaucoup de monde.)" },
            { t: "attention", md: "Un francophone est tenté de dire *Si tendré tiempo…* parce qu'il pense au futur. Erreur ! Après *si*, le présent : *Si **tengo** tiempo, iré.*" },
          ],
        },
        {
          titre: "Deviner : le futur de probabilité",
          blocs: [
            { t: "texte", md: "Voici un emploi qui n'existe pas vraiment en français. Quand tu fais une **supposition**, l'espagnol utilise le futur pour le présent, et le conditionnel pour le passé." },
            { t: "tableau", titre: "Supposer sans être sûr", entetes: ["Espagnol", "Sens", "Temps"], lignes: [["¿Qué hora es? — No sé, **serán** las diez.", "Il doit être dix heures.", "futur = supposition sur le présent"], ["¿Dónde está Marta? — **Estará** en la biblioteca.", "Elle doit être à la bibliothèque.", "futur = supposition sur le présent"], ["Cuando llegó, **serían** las diez.", "Il devait être dix heures.", "conditionnel = supposition sur le passé"]] },
            { t: "verifie", q: "« ¿Qué hora es? — No sé, ___ las diez. » Quelle forme exprime la probabilité ?", choix: ["son", "serán", "fueron", "sean"], bonne: 1, explication: "Le futur **serán** exprime une supposition sur le présent : « il doit être dix heures ». *Son* serait une certitude." },
          ],
        },
      ],
      bilan: "Infinitif + -é ou -ía, douze radicaux à connaître, et tu peux promettre, rêver, conseiller poliment et même deviner l'heure.",
    },
    "3e-espagnol-03-subjonctif-present": {
      accroche: "« Ojalá haga sol mañana. » Ce petit mot, *ojalá*, vient de l'arabe et signifie « si Dieu le veut ». Il est toujours suivi d'un mode que les francophones redoutent : le subjonctif. Pourtant, en espagnol, il obéit à une mécanique très logique.",
      objectifs: [
        "Former le subjonctif présent des verbes réguliers et irréguliers",
        "Employer le subjonctif après ojalá, que, es importante que, para que et cuando",
        "Donner un ordre négatif",
      ],
      sections: [
        {
          titre: "Fabriquer le subjonctif en trois gestes",
          blocs: [
            { t: "etapes", titre: "La recette du subjonctif présent", items: [{ titre: "Pars du présent avec yo", md: "hablar → *hablo* ; comer → *como* ; tener → *tengo*." }, { titre: "Enlève le -o", md: "*habl-* ; *com-* ; *teng-*." }, { titre: "Inverse la voyelle", md: "Les verbes en **-ar** prennent un **e** ; ceux en **-er / -ir** prennent un **a** : *hable, coma, tenga*." }] },
            { t: "tableau", titre: "Les verbes réguliers", entetes: ["Personne", "hablar", "comer", "vivir"], lignes: [["yo", "hable", "coma", "viva"], ["tú", "hables", "comas", "vivas"], ["él / ella / usted", "hable", "coma", "viva"], ["nosotros", "hablemos", "comamos", "vivamos"], ["vosotros", "habléis", "comáis", "viváis"], ["ellos / ustedes", "hablen", "coman", "vivan"]] },
            { t: "astuce", md: "==La voyelle « change de camp »== : le *a* des verbes en -ar devient *e*, le *e* et le *i* des autres deviennent *a*. Pense à une balançoire : quand l'un monte, l'autre descend." },
          ],
        },
        {
          titre: "Les irréguliers : surtout logiques",
          blocs: [
            { t: "texte", md: "Puisque le subjonctif part du présent *yo*, ==il garde l'irrégularité de ce présent==. Si tu sais dire *hago*, tu sais dire *haga*. Les verbes qui diphtonguent (e → ie, o → ue) gardent la diphtongue, sauf avec nosotros et vosotros : *pueda, puedas*, mais *podamos*." },
            { t: "tableau", titre: "Du présent (yo) au subjonctif", entetes: ["Infinitif", "Présent (yo)", "Subjonctif (yo)"], lignes: [["tener", "tengo", "tenga"], ["hacer", "hago", "haga"], ["decir", "digo", "diga"], ["poner", "pongo", "ponga"], ["salir", "salgo", "salga"], ["conocer", "conozco", "conozca"], ["poder", "puedo", "pueda (podamos)"], ["querer", "quiero", "quiera (queramos)"]] },
            { t: "tableau", titre: "Les six irréguliers à part", entetes: ["Infinitif", "Subjonctif", "Astuce"], lignes: [["ser", "sea, seas, sea, seamos, seáis, sean", "*Que seas feliz*"], ["ir", "vaya, vayas, vaya, vayamos, vayáis, vayan", "*Que te vaya bien*"], ["estar", "esté, estés, esté, estemos, estéis, estén", "accent écrit"], ["haber", "haya, hayas, haya…", "*Ojalá haya sol*"], ["saber", "sepa, sepas, sepa…", "*Quiero que lo sepas*"], ["dar", "dé, des, dé, demos, deis, den", "*dé* avec accent, pour le distinguer de *de*"]] },
            { t: "verifie", q: "Quelle est la forme de « ir » au subjonctif présent avec « ellos » ?", choix: ["van", "vayan", "fueran", "irán"], bonne: 1, explication: "*Ir* est l'un des six irréguliers à part : **vaya, vayas, vaya, vayamos, vayáis, vayan**." },
          ],
        },
        {
          titre: "Quand faut-il le subjonctif ?",
          blocs: [
            { t: "propriete", titre: "Le subjonctif exprime ce qui n'est pas (encore) réel", md: "On l'emploie après un verbe ou une expression de **souhait**, de **volonté**, de **jugement**, de **but**, et après **cuando** quand l'action est à venir. La proposition est introduite par *que*, et les deux verbes ont souvent des sujets différents : *Quiero **que** vengas.*" },
            { t: "tableau", titre: "Les déclencheurs du subjonctif", entetes: ["Déclencheur", "Exemple", "Traduction"], lignes: [["Ojalá", "Ojalá **apruebe**.", "Pourvu que je réussisse."], ["Que (souhait)", "¡Que te **vaya** bien!", "Bonne chance !"], ["Espero que / Quiero que", "Quiero que **vengas** a mi casa.", "Je veux que tu viennes chez moi."], ["Es importante / necesario / posible que", "Es posible que **llueva**.", "Il est possible qu'il pleuve."], ["Para que (but)", "Te lo explico para que lo **entiendas**.", "Je te l'explique pour que tu le comprennes."], ["Cuando + futur", "Cuando **sea** mayor, seré médica.", "Quand je serai grande, je serai médecin."], ["No creo que", "No creo que **venga**.", "Je ne crois pas qu'il vienne."]] },
            { t: "attention", md: "Erreur typique : *Espero que viene*. Après **espero que**, toujours le subjonctif : *Espero que **venga** pronto.* Et attention au piège de **cuando** : en français, on dit « quand je serai » (futur), mais en espagnol, *cuando* + futur est **impossible** : *Cuando **sea** mayor*, jamais *cuando seré*." },
            { t: "texte", md: "À l'inverse, **creo que** (je crois que) exprime une certitude : il est suivi de l'**indicatif**. *Creo que viene* (je crois qu'il vient), mais *No creo que venga* (je ne crois pas qu'il vienne)." },
            { t: "verifie", q: "Quelle phrase est correcte ?", choix: ["Cuando seré mayor, viajaré.", "Cuando sea mayor, viajaré.", "Cuando soy mayor, viajaré.", "Cuando sería mayor, viajaré."], bonne: 1, explication: "Après *cuando*, une action à venir se met au **subjonctif** : *cuando sea mayor*. Le verbe principal, lui, reste au futur : *viajaré*." },
          ],
        },
        {
          titre: "Défendre : l'impératif négatif",
          blocs: [
            { t: "propriete", titre: "No + subjonctif", md: "Pour interdire, on n'utilise pas l'impératif mais **no + subjonctif présent** : *¡No **hables**!* (ne parle pas), *¡No **comáis** eso!* (ne mangez pas ça), *¡No **salgáis** sin abrigo!*\n\nLes pronoms se placent **devant** le verbe : *¡Dímelo!* devient *¡No me lo **digas**!* ; *¡Hazlo!* devient *¡No lo **hagas**!*" },
            { t: "exemple", titre: "Un message plein de subjonctifs", md: "*Ojalá **haga** sol mañana. Quiero que **vengas** a mi casa para que **veamos** la película juntos. Cuando **termines** los deberes, llámame. Y por favor, ¡no **llegues** tarde!*\n\n(Pourvu qu'il fasse beau demain. Je veux que tu viennes chez moi pour que nous regardions le film ensemble. Quand tu auras fini tes devoirs, appelle-moi. Et s'il te plaît, n'arrive pas en retard !)" },
            { t: "savais-tu", md: "Dans *llegues*, un **u** apparaît : il garde le son « g » dur devant le *e*. De même : *buscar* → *busque* ; *pagar* → *pague*. L'orthographe change pour que la prononciation reste la même." },
          ],
        },
      ],
      bilan: "Présent yo, on enlève le -o, on inverse la voyelle : voilà le subjonctif, le mode des souhaits, des buts, des projets et des interdits.",
    },
    "3e-espagnol-04-pronoms-constructions": {
      accroche: "« Le doy el libro a Ana » ou « Se lo doy » ? Les Espagnols raccourcissent leurs phrases avec des pronoms collés les uns aux autres, et parfois même au verbe : *dámelo*. Un vrai jeu de construction, avec quelques règles à connaître.",
      objectifs: [
        "Employer les pronoms COD et COI, combinés et enclitiques",
        "Utiliser les relatifs que, quien, donde et cuyo",
        "Manier les tournures affectives (gustar, encantar, doler, parecer)",
        "Choisir entre ser et estar devant un adjectif, entre por et para",
      ],
      sections: [
        {
          titre: "Les pronoms compléments et leur ordre",
          blocs: [
            { t: "tableau", titre: "Pronoms COD et COI", entetes: ["Personne", "COD (le, la)", "COI (lui)"], lignes: [["yo", "me", "me"], ["tú", "te", "te"], ["él / ella / usted", "**lo / la**", "**le**"], ["nosotros", "nos", "nos"], ["vosotros", "os", "os"], ["ellos / ellas / ustedes", "**los / las**", "**les**"]] },
            { t: "propriete", titre: "Deux règles d'or", md: "1. Quand il y a deux pronoms, le **COI passe avant le COD** : *¿Me das el libro? — Sí, **te lo** doy.*\n2. Quand **le** ou **les** rencontre **lo, la, los, las**, il se transforme en **se** : ==jamais *le lo*==." },
            { t: "etapes", titre: "« Le regalo el libro a mi madre » → « Se lo regalo »", items: [{ titre: "Repère les compléments", md: "*el libro* = COD (quoi ?) ; *a mi madre* = COI (à qui ?)." }, { titre: "Remplace-les", md: "*el libro* → **lo** ; *a mi madre* → **le**." }, { titre: "Range-les", md: "COI avant COD : *le lo regalo*… impossible à prononcer !" }, { titre: "Transforme le en se", md: "**Se lo regalo.** (Je le lui offre.)" }] },
            { t: "propriete", titre: "L'enclise : les pronoms collés au verbe", md: "Avec l'**infinitif**, le **gérondif** et l'**impératif affirmatif**, les pronoms se collent à la fin du verbe : *quiero ver**te***, *está diciéndo**lo***, *¡dá**melo**!* (donne-le-moi).\n\nOn ajoute souvent un **accent écrit** pour garder la syllabe tonique à sa place : *da* → *dámelo*, *diciendo* → *diciéndolo*." },
            { t: "verifie", q: "Remplace les compléments : « Le regalo el libro a mi madre » → « ___ regalo. »", choix: ["Le lo", "Se lo", "Lo le", "Se le"], bonne: 1, explication: "COI avant COD, et *le* devant *lo* devient **se** : *Se lo regalo*." },
          ],
        },
        {
          titre: "Relier deux phrases : les relatifs",
          blocs: [
            { t: "tableau", titre: "Quatre relatifs", entetes: ["Relatif", "Emploi", "Exemple"], lignes: [["**que**", "personne ou chose (qui, que)", "El libro **que** leo es genial."], ["**quien / quienes**", "personne, surtout après une préposition", "La chica con **quien** hablo es Ana."], ["**donde**", "lieu (où)", "La ciudad **donde** nací se llama Oviedo."], ["**cuyo / cuya / cuyos / cuyas**", "dont (possession)", "El chico **cuyo** padre es médico es mi primo."]] },
            { t: "attention", md: "**Cuyo** s'accorde avec le nom qui le **suit**, pas avec le possesseur : *el chico **cuya** madre* (la mère), *la chica **cuyo** hermano* (le frère). Tu l'as déjà rencontré dans la première phrase du *Quijote* : *de **cuyo** nombre no quiero acordarme*." },
          ],
        },
        {
          titre: "Les tournures affectives : me gusta, me duele",
          blocs: [
            { t: "texte", md: "En espagnol, on ne dit pas « j'aime la musique » mais littéralement « la musique **me plaît** ». Le vrai sujet du verbe, c'est **la chose aimée**. C'est donc elle qui commande l'accord : un singulier ou un infinitif → *gusta* ; un pluriel → *gustan*." },
            { t: "tableau", titre: "Le schéma de gustar", entetes: ["Pour préciser", "Pronom", "Verbe", "Sujet (la chose)"], lignes: [["(A mí)", "me", "gusta", "la música / bailar"], ["(A ti)", "te", "gustan", "los deportes"], ["(A Juan / a ella)", "le", "encanta", "el cine"], ["(A nosotros)", "nos", "duele", "la cabeza"], ["(A vosotros)", "os", "parece", "bien"], ["(A ellos)", "les", "interesan", "las noticias"]] },
            { t: "liste", titre: "Les verbes qui fonctionnent pareil", items: ["**encantar** : adorer — *A mi hermana le encanta la música.*", "**doler** : avoir mal — *Me duele la cabeza* (j'ai mal à la tête), *me duelen los pies*.", "**parecer** : sembler, trouver — *Me parece que…* (il me semble que…, je trouve que…).", "**interesar**, **molestar** (déranger) — *¿Te molesta la música?*"] },
            { t: "verifie", q: "La phrase « Me gusta los perros » est-elle correcte ?", choix: ["Oui", "Non, il faut « Me gustan los perros »"], bonne: 1, explication: "Le sujet est *los perros* (pluriel) : le verbe s'accorde avec lui. **Me gustan los perros.**" },
          ],
        },
        {
          titre: "Ser ou estar ? Por ou para ?",
          blocs: [
            { t: "propriete", titre: "Ser ou estar devant un adjectif", md: "**Ser** + adjectif = une **caractéristique**, ce que la personne ou la chose *est* (*Es muy lista*).\n**Estar** + adjectif = un **état**, un résultat, ce qu'elle *est en ce moment* (*Hoy está cansada*)." },
            { t: "tableau", titre: "Des adjectifs qui changent de sens", entetes: ["Adjectif", "avec ser", "avec estar"], lignes: [["listo", "*Es listo* : il est intelligent", "*Está listo* : il est prêt"], ["aburrido", "*Es aburrido* : il est ennuyeux", "*Está aburrido* : il s'ennuie"], ["rico", "*Es rico* : il est riche", "*Está rico* : c'est délicieux"], ["malo", "*Es malo* : il est méchant", "*Está malo* : il est malade"]] },
            { t: "attention", md: "Tu t'ennuies en cours ? Ne dis surtout pas *Soy aburrido* : tu annonces que **tu es ennuyeux** ! Dis **Estoy aburrido** (ou *aburrida*)." },
            { t: "tableau", titre: "Por ou para ?", entetes: ["Emploi", "por", "para"], lignes: [["Idée", "la **cause**, l'échange, le passage", "le **but**, le destinataire, la destination"], ["Cause / but", "*Gracias **por** tu ayuda.*", "*Estudio **para** aprobar.*"], ["Échange / destinataire", "*Lo compré **por** diez euros.*", "*Este regalo es **para** ti.*"], ["Temps", "*por la mañana* (le matin), durée", "*para mañana* (pour demain, délai)"], ["Lieu", "*Paseo **por** el parque* (à travers)", "*Salgo **para** Madrid* (direction)"], ["Moyen", "*por teléfono, por correo*", "—"]] },
            { t: "astuce", md: "Pour choisir, demande-toi : est-ce que je regarde **en arrière**, vers la cause (*por* : à cause de, grâce à) ou **en avant**, vers le but (*para* : afin de, destiné à) ? Le francophone dit « merci pour » et écrit *gracias para* : faux ! On remercie **à cause** de l'aide reçue : *gracias **por***." },
            { t: "citation", texte: "¿Qué es poesía?, dices mientras clavas\nen mi pupila tu pupila azul.\n¿Qué es poesía? ¿Y tú me lo preguntas?\nPoesía… eres tú.", auteur: "Gustavo Adolfo Bécquer", source: "Rimas, XXI (1871)" },
            { t: "exemple", titre: "Tout ensemble", md: "*A mi hermana **le encanta** la música. Le he comprado un disco y **se lo** voy a dar mañana: ¡no **se lo** digas! **Es** muy lista, pero hoy **está** aburrida. Gracias **por** tu ayuda, este regalo es **para** ti.*\n\n(Ma sœur adore la musique. Je lui ai acheté un disque et je vais le lui donner demain : ne le lui dis pas ! Elle est très intelligente, mais aujourd'hui elle s'ennuie. Merci pour ton aide, ce cadeau est pour toi.)" },
          ],
        },
      ],
      bilan: "COI avant COD, le devient se, la chose aimée commande gustar, ser pour l'identité, estar pour l'état, por pour la cause, para pour le but.",
    },
    "3e-espagnol-05-obligation-duree-gerondif": {
      accroche: "« Llevo tres años aprendiendo guitarra. » Mot à mot : « je porte trois ans en apprenant la guitare ». Bizarre ? C'est pourtant la façon la plus naturelle de dire « j'apprends la guitare depuis trois ans ». L'espagnol aime ces petites tournures qui disent le temps qui passe.",
      objectifs: [
        "Exprimer l'obligation avec tener que, hay que et deber",
        "Former le gérondif et l'employer avec estar et seguir",
        "Exprimer la durée et l'aspect avec llevar, desde hace, acabar de et volver a",
      ],
      sections: [
        {
          titre: "Trois façons de dire « il faut »",
          blocs: [
            { t: "tableau", titre: "L'obligation", entetes: ["Structure", "Sens", "Exemple"], lignes: [["**tener que** + infinitif", "obligation **personnelle** (quelqu'un doit)", "*Tengo que estudiar.* Je dois étudier."], ["**hay que** + infinitif", "obligation **générale**, pour tout le monde", "*Hay que reciclar.* Il faut recycler."], ["**deber** + infinitif", "devoir **moral**, conseil fort", "*Debes respetar a los demás.* Tu dois respecter les autres."]] },
            { t: "propriete", titre: "Tener que se conjugue, hay que jamais", md: "*Tener que* change avec la personne : *yo **tengo** que, tú **tienes** que, nosotros **tenemos** que*.\n*Hay que* est **impersonnel** : il ne change jamais et n'a pas de sujet." },
            { t: "attention", md: "Ne mélange pas : *hay que* + infinitif (il faut), mais *hay* tout seul = il y a (*hay mucha gente*). Et on ne dit pas *tengo de estudiar* : c'est **tengo que**." },
            { t: "verifie", q: "Quelle phrase exprime une obligation personnelle ?", choix: ["Hay que llegar puntual.", "Tengo que ensayar hoy.", "Hay mucha gente.", "Me gusta ensayar."], bonne: 1, explication: "**Tener que** désigne qui doit agir : *tengo que* = je dois. *Hay que* vaut pour tout le monde." },
          ],
        },
        {
          titre: "Le gérondif : l'action en train de se faire",
          blocs: [
            { t: "definition", terme: "Gérondif", md: "Forme invariable du verbe qui montre une action **en cours**. Verbes en -ar → **-ando** (habl**ando**) ; verbes en -er / -ir → **-iendo** (com**iendo**, viv**iendo**)." },
            { t: "tableau", titre: "Les gérondifs irréguliers", entetes: ["Infinitif", "Gérondif", "Pourquoi ?"], lignes: [["leer", "leyendo", "i entre deux voyelles devient **y**"], ["ir", "yendo", "même règle"], ["dormir", "durmiendo", "o → u"], ["pedir", "pidiendo", "e → i"], ["decir", "diciendo", "e → i"], ["poder", "pudiendo", "o → u"]] },
            { t: "propriete", titre: "Estar et seguir + gérondif", md: "**Estar + gérondif** = être en train de : *¿Qué haces? — **Estoy haciendo** los deberes.*\n**Seguir + gérondif** = continuer à : *Sigue lloviendo* (il continue de pleuvoir). ==Jamais d'infinitif après *seguir*== : on ne dit pas *sigue llover*." },
            { t: "verifie", q: "Quel est le gérondif de « comer » ?", choix: ["comando", "comiendo", "comido", "comer"], bonne: 1, explication: "Les verbes en -er font leur gérondif en **-iendo** : *comiendo*. *Comido* est le participe passé." },
          ],
        },
        {
          titre: "Dire depuis combien de temps",
          blocs: [
            { t: "schema", titre: "Hace, desde hace, llevar", legende: "Llegué hace cinco años : un point dans le passé. Vivo aquí desde hace cinco años : une durée qui continue jusqu'à aujourd'hui.", svg: `<svg viewBox="0 0 400 200"><rect class="aplat" x="80" y="106" width="250" height="28" rx="6"/><line class="trait" x1="15" y1="120" x2="330" y2="120"/><line class="pointille" x1="330" y1="120" x2="385" y2="120" marker-end="url(#fl)"/><circle cx="80" cy="120" r="6" fill="var(--pigment)"/><line class="trait" x1="330" y1="100" x2="330" y2="140"/><text class="texte" x="205" y="58" text-anchor="middle">Vivo aquí desde hace cinco años.</text><text class="texte-petit" x="205" y="76" text-anchor="middle">= Llevo cinco años viviendo aquí.</text><path class="trait-fin" d="M90 92 L322 92" marker-end="url(#fl-p)"/><text class="texte" x="80" y="162" text-anchor="middle">hace cinco años</text><text class="texte-petit" x="80" y="178" text-anchor="middle">Llegué hace cinco años.</text><text class="texte-main" x="330" y="164" text-anchor="middle">ahora</text></svg>` },
            { t: "tableau", titre: "Les mots de la durée", entetes: ["Structure", "Sens", "Exemple"], lignes: [["**hace** + durée", "il y a (un point passé)", "*Llegué hace una hora.*"], ["**desde hace** + durée", "depuis (une durée)", "*Vivo en Madrid desde hace cinco años.*"], ["**desde** + date", "depuis (un point de départ)", "*Estudio español desde 2023.*"], ["**llevar** + durée + gérondif", "faire quelque chose depuis", "*Mi hermano lleva tres años estudiando chino.*"], ["**llevar** + durée + lieu", "être quelque part depuis", "*Llevo dos meses en el equipo.*"]] },
            { t: "astuce", md: "Avec *llevar*, c'est le verbe **llevar** qui se conjugue, et l'action est au gérondif : *¿Cuánto tiempo **llevas estudiando** español? — **Llevo** dos años.*" },
          ],
        },
        {
          titre: "Venir de, refaire : acabar de et volver a",
          blocs: [
            { t: "propriete", titre: "Deux périphrases d'aspect", md: "**Acabar de + infinitif** = venir de (passé très récent) : *Acabo de comer* (je viens de manger).\n**Volver a + infinitif** = refaire, recommencer à : *Ha vuelto a llover* (il s'est remis à pleuvoir) ; *Vuelve a leer el texto* (relis le texte)." },
            { t: "exemple", titre: "Un musicien motivé", md: "*Llevo tres años aprendiendo guitarra y sigo practicando cada día. Hoy tengo que ensayar porque acabo de entrar en un grupo. Hay que llegar puntual al ensayo: el profesor ha vuelto a enfadarse la semana pasada.*\n\n(J'apprends la guitare depuis trois ans et je continue à pratiquer tous les jours. Aujourd'hui, je dois répéter car je viens d'entrer dans un groupe. Il faut arriver à l'heure à la répétition : le professeur s'est encore fâché la semaine dernière.)" },
            { t: "attention", md: "Un francophone traduit « je viens de manger » par *vengo de comer* : en espagnol, cela veut dire « je reviens d'avoir mangé quelque part » ! Pour le passé récent, c'est **acabo de comer**." },
          ],
        },
      ],
      bilan: "Tener que pour toi, hay que pour tous ; estar et seguir avec le gérondif ; llevar et desde hace pour la durée ; acabar de pour le tout juste, volver a pour le encore.",
    },
    "3e-espagnol-06-ville-voyages-quotidien": {
      accroche: "Tu viens d'atterrir à Madrid. Il faut trouver la gare, acheter un billet, joindre ta famille d'accueil… et ta valise n'est pas arrivée. Rassure-toi : avec une vingtaine de phrases-clés, tu peux te sortir de toutes ces situations.",
      objectifs: [
        "Connaître le vocabulaire des transports, du logement et de la ville",
        "Demander son chemin, réserver, se plaindre poliment, résoudre un problème",
        "Parler du téléphone, d'internet, de l'argent et des achats",
      ],
      sections: [
        {
          titre: "Se déplacer et se loger",
          blocs: [
            { t: "tableau", titre: "Le vocabulaire du voyageur", entetes: ["Espagnol", "Français", "Espagnol", "Français"], lignes: [["el tren", "le train", "el piso", "l'appartement"], ["el autobús", "le bus", "alquilar", "louer"], ["el metro", "le métro", "el barrio", "le quartier"], ["el avión, el aeropuerto", "l'avion, l'aéroport", "la acera", "le trottoir"], ["la estación", "la gare", "el ayuntamiento", "la mairie"], ["el andén", "le quai", "la plaza", "la place"], ["la parada", "l'arrêt (bus)", "el semáforo", "le feu (tricolore)"], ["el billete de ida y vuelta", "le billet aller-retour", "la oficina de turismo", "l'office de tourisme"], ["el atasco", "l'embouteillage", "la habitación doble / individual", "la chambre double / simple"]] },
            { t: "attention", md: "Faux amis ! **El piso** est un appartement (ou un étage), pas un « pis ». **La parada** est un arrêt de bus, pas une parade. Et **el billete** désigne aussi bien un billet de train qu'un billet de banque." },
          ],
        },
        {
          titre: "Demander son chemin",
          blocs: [
            { t: "texte", md: "Pour aborder un inconnu, commence par **Perdone** (excusez-moi, forme *usted*) puis pose ta question : *¿Para ir a la estación?* ou *¿Me puede decir dónde está la estación?* On te répondra à l'**impératif de politesse** : *siga, gire, tome*." },
            { t: "schema", titre: "Siga todo recto y gire a la izquierda", legende: "La estación está al final de la calle, al lado del ayuntamiento.", svg: `<svg viewBox="0 0 400 240"><rect class="aplat" x="20" y="108" width="360" height="24"/><rect class="aplat" x="188" y="132" width="24" height="100"/><path d="M200 218 L200 120 L84 120" fill="none" stroke="var(--pigment)" stroke-width="3" marker-end="url(#fl-p)"/><circle cx="200" cy="222" r="6" fill="var(--pigment)"/><text class="texte-petit" x="220" y="226">estás aquí</text><rect class="aplat-papier" x="20" y="58" width="86" height="40"/><rect class="trait" x="20" y="58" width="86" height="40" fill="none"/><text class="texte-petit" x="63" y="82" text-anchor="middle">la estación</text><rect class="aplat-papier" x="112" y="58" width="100" height="40"/><rect class="trait" x="112" y="58" width="100" height="40" fill="none"/><text class="texte-petit" x="162" y="82" text-anchor="middle">el ayuntamiento</text><rect class="aplat-papier" x="262" y="30" width="118" height="62"/><rect class="trait-fin" x="262" y="30" width="118" height="62" fill="none"/><text class="texte-petit" x="321" y="66" text-anchor="middle">la plaza</text><rect class="trait-fin" x="218" y="138" width="10" height="24" fill="none"/><circle class="aplat-fort" cx="223" cy="150" r="3"/><text class="texte-petit" x="234" y="154">el semáforo</text><text class="texte-main" x="214" y="196">1. Siga todo recto</text><text class="texte" x="30" y="156">2. gire a la izquierda</text><text class="texte-petit" x="63" y="46" text-anchor="middle">3. al final de la calle</text></svg>` },
            { t: "liste", titre: "Les indications", items: ["*Siga todo recto* : continuez tout droit.", "*Gire a la derecha / a la izquierda* : tournez à droite / à gauche.", "*Tome la primera calle* : prenez la première rue.", "*Está al final de la calle / al lado de / enfrente de / cerca de* : c'est au bout de la rue / à côté de / en face de / près de."] },
            { t: "verifie", q: "On te dit : « Siga todo recto y gire a la izquierda ». Que dois-tu faire ?", choix: ["Tourner à droite puis continuer", "Continuer tout droit puis tourner à gauche", "Faire demi-tour", "Prendre le bus"], bonne: 1, explication: "*Todo recto* = tout droit ; *a la izquierda* = à gauche (*a la derecha* = à droite)." },
          ],
        },
        {
          titre: "Réserver, se plaindre, résoudre un problème",
          blocs: [
            { t: "propriete", titre: "Le conditionnel de politesse", md: "Pour demander poliment, utilise **quisiera** (je voudrais) ou **podría** (pourriez-vous) : *Quisiera reservar una habitación doble para dos noches. ¿Está incluido el desayuno?*" },
            { t: "etapes", titre: "Se plaindre poliment à l'hôtel", items: [{ titre: "Interpeller", md: "*Perdone…* (Excusez-moi…)" }, { titre: "Exposer le problème", md: "*La habitación está sucia* (sale) / *La ducha no funciona* (ne marche pas)." }, { titre: "Demander une solution", md: "*¿Podría cambiarla, por favor?* (Pourriez-vous la changer ?)" }, { titre: "Remercier", md: "*Muchas gracias, es usted muy amable.*" }] },
            { t: "tableau", titre: "Quand tout va mal", entetes: ["Espagnol", "Français"], lignes: [["Se me ha perdido la maleta.", "J'ai perdu ma valise (sans le vouloir)."], ["He perdido el tren.", "J'ai raté le train."], ["No funciona.", "Ça ne marche pas."], ["¿Me puede ayudar?", "Pouvez-vous m'aider ?"]] },
            { t: "attention", md: "*¡Quiero otra habitación!* est correct, mais brutal. *Perdone, ¿podría cambiarme la habitación?* obtient bien plus vite un sourire… et une nouvelle chambre." },
          ],
        },
        {
          titre: "Téléphone, internet et achats",
          blocs: [
            { t: "tableau", titre: "Le numérique et l'argent", entetes: ["Espagnol", "Français"], lignes: [["el móvil", "le portable"], ["la cobertura", "le réseau (No tengo cobertura : je ne capte pas)"], ["la contraseña", "le mot de passe"], ["descargar / subir una foto", "télécharger / publier une photo"], ["el correo electrónico", "le courriel"], ["las redes sociales", "les réseaux sociaux"], ["pagar en efectivo / con tarjeta", "payer en espèces / par carte"], ["el cajero automático", "le distributeur de billets"], ["las rebajas", "les soldes"], ["la talla", "la taille (vêtement)"]] },
            { t: "savais-tu", md: "En Espagne, on décroche le téléphone en disant **¿Diga?**, **¿Dígame?** (dites-moi) ou simplement **¿Sí?** Au Mexique, on entend plutôt *¿Bueno?*" },
            { t: "exemple", titre: "À la gare", md: "— *Perdone, ¿me puede decir dónde está la estación?*\n— *Siga todo recto y gire a la izquierda, está al lado del ayuntamiento.*\n— *Gracias.* […] *Quiero un billete de ida y vuelta, ¿puedo pagar con tarjeta?*\n— *Claro, son doce euros.*\n\nPour un prix, demande **¿Cuánto cuesta?** (combien ça coûte ?) ou, à la caisse, **¿Cuánto es?** (ça fait combien ?)." },
          ],
        },
      ],
      bilan: "Perdone pour aborder, quisiera et podría pour demander, todo recto et a la izquierda pour s'orienter : voyager en espagnol, c'est d'abord être poli.",
    },
    "3e-espagnol-07-societe-engagement": {
      accroche: "Une manifestation pour le climat à Madrid, une ONG qui accueille des réfugiés à Barcelone, une jeune Colombienne qui prépare son premier entretien d'embauche… Pour comprendre le monde hispanophone et y prendre ta place, il te faut les mots de l'engagement.",
      objectifs: [
        "Connaître le lexique de l'égalité, de la solidarité et de l'environnement",
        "Parler du travail, de l'orientation et de la candidature",
        "Comprendre le lexique des migrations, des droits et des médias",
      ],
      sections: [
        {
          titre: "Égalité et solidarité",
          blocs: [
            { t: "tableau", titre: "Vivre ensemble", entetes: ["Espagnol", "Français"], lignes: [["la igualdad / la desigualdad", "l'égalité / l'inégalité"], ["la discriminación", "la discrimination"], ["el respeto", "le respect"], ["la solidaridad", "la solidarité"], ["hacer voluntariado", "faire du bénévolat"], ["una ONG", "une ONG (organisation non gouvernementale)"], ["ayudar a los demás", "aider les autres"]] },
            { t: "definition", terme: "El voluntariado", md: "Le **bénévolat** : on donne de son temps, sans être payé, pour une cause. *Hago voluntariado en una ONG* = je suis bénévole dans une ONG. Attention : *voluntario* veut dire « bénévole » (ou « volontaire »)." },
            { t: "verifie", q: "Que signifie « la igualdad » ?", choix: ["l'égalité", "la liberté", "l'église", "l'identité"], bonne: 0, explication: "**La igualdad** = l'égalité (*igual* = égal). Son contraire est *la desigualdad*." },
          ],
        },
        {
          titre: "Protéger la planète",
          blocs: [
            { t: "tableau", titre: "Le lexique de l'environnement", entetes: ["Espagnol", "Français"], lignes: [["el medio ambiente", "l'environnement"], ["reciclar / el reciclaje", "recycler / le recyclage"], ["la basura / los residuos", "les ordures / les déchets"], ["la contaminación", "la pollution"], ["el cambio climático", "le changement climatique"], ["el calentamiento global", "le réchauffement climatique"], ["ahorrar energía", "économiser l'énergie"]] },
            { t: "propriete", titre: "Deux structures pour s'engager", md: "**Hay que** + infinitif (il faut) : *Hay que reducir la basura.*\n**Es importante que** + subjonctif : *Es importante que todos **tengamos** los mismos derechos y que nadie **sufra** discriminación.*" },
            { t: "attention", md: "**La contaminación** veut dire « la pollution », pas « la contamination ». Et **ahorrar** (économiser) n'a rien à voir avec « horreur » : *ahorrar dinero* = économiser de l'argent." },
          ],
        },
        {
          titre: "Le travail et l'orientation",
          blocs: [
            { t: "tableau", titre: "Le monde du travail", entetes: ["Espagnol", "Français", "Espagnol", "Français"], lignes: [["el trabajo, el empleo", "le travail, l'emploi", "el abogado", "l'avocat"], ["el paro", "le chômage", "la enfermera", "l'infirmière"], ["las prácticas", "le stage", "el periodista", "le journaliste"], ["el currículum", "le CV", "la ingeniera", "l'ingénieure"], ["la entrevista", "l'entretien", "el panadero", "le boulanger"], ["la formación", "la formation, les études", "la médica", "la médecin"], ["la experiencia", "l'expérience", "la cocinera", "la cuisinière"], ["el sueldo", "le salaire", "el informático", "l'informaticien"]] },
            { t: "etapes", titre: "Trouver un stage", items: [{ titre: "El currículum", md: "Tu remplis tes **datos personales**, ta **formación** (tes études, tes diplômes), ton **experiencia** et tes **idiomas**." }, { titre: "La carta de motivación", md: "*Me gustaría hacer las prácticas en su empresa porque…*" }, { titre: "La entrevista", md: "On te demande : *¿Por qué quieres trabajar aquí?* Tu réponds avec *creo que* et *me interesa*." }, { titre: "Las prácticas", md: "Ton stage commence : *¡Enhorabuena!* (félicitations)." }] },
            { t: "verifie", q: "Dans un « currículum », la rubrique « formación » correspond à :", choix: ["tes loisirs", "tes études et diplômes", "ton salaire", "ton adresse"], bonne: 1, explication: "**La formación** = la formation, c'est-à-dire tes études et diplômes. L'expérience professionnelle, c'est *la experiencia*." },
          ],
        },
        {
          titre: "Migrations, droits et médias",
          blocs: [
            { t: "tableau", titre: "Citoyenneté et information", entetes: ["Espagnol", "Français"], lignes: [["la frontera", "la frontière"], ["el migrante / el refugiado", "le migrant / le réfugié (qui fuit la guerre ou la persécution)"], ["emigrar", "émigrer"], ["el derecho / la ley", "le droit / la loi"], ["votar", "voter"], ["la libertad de expresión", "la liberté d'expression"], ["la huelga", "la grève"], ["las noticias / el periódico", "les informations / le journal"], ["el titular", "le gros titre"], ["la noticia falsa", "la fausse information (fake news)"], ["informarse", "s'informer"]] },
            { t: "citation", texte: "La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos.", auteur: "Miguel de Cervantes", source: "Don Quijote de la Mancha, II, 58 (1615)" },
            { t: "texte", md: "Don Quichotte le dit à son écuyer : « La liberté, Sancho, est l'un des dons les plus précieux que les cieux aient faits aux hommes. » Quatre siècles plus tard, la *libertad de expresión* est inscrite dans la Constitution espagnole." },
            { t: "exemple", titre: "Un témoignage engagé", md: "*Este año hago voluntariado en una ONG que ayuda a los refugiados. Creo que es importante que nadie sufra discriminación. También participo en una campaña de reciclaje en el instituto: hay que reducir la basura y ahorrar energía.*\n\n(Cette année, je suis bénévole dans une ONG qui aide les réfugiés. Je crois qu'il est important que personne ne subisse de discrimination. Je participe aussi à une campagne de recyclage au collège : il faut réduire les déchets et économiser l'énergie.)" },
            { t: "astuce", md: "Avant de partager un **titular** choc, pose-toi trois questions : *¿Quién lo dice? ¿Cuándo? ¿Dónde más se publica?* C'est le meilleur réflexe contre *las noticias falsas* (qu'on appelle aussi *bulos* en Espagne)." },
          ],
        },
      ],
      bilan: "Igualdad, medio ambiente, trabajo, derechos : avec ces mots et deux structures, hay que et es importante que, tu peux défendre tes idées en espagnol.",
    },
    "3e-espagnol-08-culture-espagne": {
      accroche: "Un pays où l'on parle quatre langues, où l'on mange douze grains de raisin à minuit le 31 décembre, où un palais arabe domine Grenade et où une église de Gaudí est en chantier depuis 1882. Bienvenue en Espagne, terre de contrastes.",
      objectifs: [
        "Situer les régions, les langues et les institutions de l'Espagne",
        "Connaître les grandes étapes de l'histoire espagnole",
        "Identifier les artistes et les œuvres majeures",
        "Connaître les fêtes et la gastronomie",
      ],
      sections: [
        {
          titre: "Un pays, des régions, des langues",
          blocs: [
            { t: "texte", md: "L'Espagne compte **17 comunidades autónomas** (communautés autonomes) et **2 villes autonomes** en Afrique du Nord : Ceuta et Melilla. Chaque communauté a son gouvernement et son parlement, avec des pouvoirs importants (éducation, santé…)." },
            { t: "carte", fond: "monde", titre: "España : quelques communautés autonomes et leurs villes", cadre: [-10, 35, 5, 44.2], zones: ["ES"], reperes: [{ nom: "Madrid (capitale)", lat: 40.4168, lon: -3.7038 }, { nom: "Barcelona (Cataluña)", lat: 41.3874, lon: 2.1686 }, { nom: "Santiago de Compostela (Galicia)", lat: 42.8782, lon: -8.5448 }, { nom: "Vitoria-Gasteiz (País Vasco)", lat: 42.8467, lon: -2.6716 }, { nom: "Valencia", lat: 39.4699, lon: -0.3763 }, { nom: "Sevilla (Andalucía)", lat: 37.3891, lon: -5.9845 }, { nom: "Granada", lat: 37.1773, lon: -3.5986 }, { nom: "Pamplona (Navarra)", lat: 42.8125, lon: -1.6458 }, { nom: "Ceuta", lat: 35.8894, lon: -5.3213 }, { nom: "Melilla", lat: 35.2923, lon: -2.9381 }], legende: "Les îles Canaries, dans l'Atlantique, forment aussi une communauté autonome." },
            { t: "tableau", titre: "Les langues de l'Espagne", entetes: ["Langue", "Où ?", "Statut"], lignes: [["el castellano (español)", "partout", "officiel dans tout le pays"], ["el catalán", "Cataluña, Baleares, Comunidad Valenciana (valenciano)", "co-officiel"], ["el gallego", "Galicia", "co-officiel"], ["el euskera (basque)", "País Vasco, nord de Navarra", "co-officiel"]] },
            { t: "propriete", titre: "Une monarchie parlementaire", md: "Depuis la **Constitution de 1978**, l'Espagne est une **monarchie parlementaire** : le roi (**Felipe VI** depuis 2014) est le chef de l'État, mais c'est un **gouvernement** issu des élections qui dirige le pays. Le parlement s'appelle *las Cortes Generales*." },
          ],
        },
        {
          titre: "Les grandes étapes de l'histoire",
          blocs: [
            { t: "frise", titre: "De Al-Ándalus à la démocratie", evenements: [{ date: 711, label: "Début d'Al-Ándalus", detail: "Des troupes musulmanes venues d'Afrique du Nord conquièrent la péninsule. Huit siècles de présence : Mezquita de Córdoba, Alhambra de Granada." }, { date: 1492, label: "Prise de Grenade, voyage de Colomb", detail: "Les Rois catholiques, Isabel y Fernando, prennent Grenade : fin d'Al-Ándalus. La même année, Colomb atteint l'Amérique." }, { date: 1605, label: "Don Quijote de Cervantes", detail: "Siècle d'or des arts et des lettres." }, { date: 1808, label: "Soulèvement contre Napoléon", detail: "Le 2 mai à Madrid ; Goya peint les exécutions du 3 mai." }, { date: 1936, label: "Début de la Guerre civile", detail: "Républicains contre nationalistes du général Franco." }, { date: 1939, label: "Victoire de Franco", detail: "Début d'une dictature de 36 ans." }, { date: 1975, label: "Mort de Franco", detail: "Début de la Transición démocratique ; Juan Carlos Ier devient roi." }, { date: 1978, label: "Constitution", detail: "L'Espagne devient une monarchie parlementaire démocratique." }] },
            { t: "savais-tu", md: "1492 est une année charnière : prise de Grenade, premier voyage de Colomb, expulsion des Juifs d'Espagne… et publication de la première **grammaire du castillan**, par Antonio de Nebrija." },
            { t: "verifie", q: "Que s'est-il passé en 1492 ?", choix: ["La mort de Franco", "La prise de Grenade et le premier voyage de Colomb", "Le début de la Guerre civile", "La Constitution démocratique"], bonne: 1, explication: "En **1492**, les Rois catholiques prennent Grenade, dernier royaume musulman de la péninsule, et Christophe Colomb atteint l'Amérique." },
          ],
        },
        {
          titre: "Peintres, architectes, écrivains",
          blocs: [
            { t: "tableau", titre: "Les artistes à connaître", entetes: ["Artiste", "Art", "Œuvre", "À retenir"], lignes: [["**Velázquez**", "peinture (XVIIe s.)", "*Las Meninas* (1656)", "au musée du Prado, à Madrid"], ["**Goya**", "peinture", "*El 3 de mayo de 1808*", "les fusillades des Madrilènes par les soldats de Napoléon"], ["**Picasso**", "peinture (cubisme)", "*Guernica* (1937)", "contre le bombardement de la ville basque"], ["**Dalí**", "peinture", "*La persistencia de la memoria*", "le **surréalisme** (montres molles)"], ["**Gaudí**", "architecture", "*la Sagrada Familia*, *el Parque Güell*", "à Barcelone"], ["**Almodóvar**", "cinéma", "*Todo sobre mi madre*, *Volver*", "Oscar en 2000"], ["**Cervantes**", "littérature", "*Don Quijote de la Mancha* (1605)", "le chevalier et son écuyer Sancho"], ["**García Lorca**", "poésie, théâtre", "*Romancero gitano*, *La casa de Bernarda Alba*", "fusillé en 1936"]] },
            { t: "texte", md: "Le 26 avril 1937, en pleine Guerre civile, l'aviation allemande alliée de Franco bombarde la petite ville basque de **Guernica**. Picasso, révolté, peint en quelques semaines une immense toile en noir et blanc : un cheval hurlant, une mère qui tient son enfant mort, une ampoule comme un œil. ==*Guernica* dénonce les horreurs de la guerre et le bombardement des civils.== On peut la voir au musée Reina Sofía de Madrid." },
            { t: "texte", md: "Dans *La casa de Bernarda Alba*, Lorca imagine une mère autoritaire qui, à la mort de son mari, enferme ses cinq filles dans la maison pour un deuil de huit ans : une pièce sur l'étouffement et le désir de liberté. Le poète est assassiné par les franquistes au début de la guerre, en 1936." },
            { t: "citation", texte: "Cada uno es hijo de sus obras.", auteur: "Miguel de Cervantes", source: "Don Quijote de la Mancha, I, 4 (1605)" },
          ],
        },
        {
          titre: "Fêtes et gastronomie",
          blocs: [
            { t: "tableau", titre: "Le calendrier des fêtes", entetes: ["Fête", "Ville", "Quand ?", "Ce qu'on y fait"], lignes: [["las Fallas", "Valencia", "mars", "on brûle d'immenses statues de carton"], ["la Feria de Abril", "Sevilla", "avril", "robes à volants, sevillanas, casetas"], ["la Semana Santa", "toute l'Espagne", "printemps", "processions religieuses"], ["San Fermín", "Pamplona", "juillet", "lâcher de taureaux dans les rues"], ["la Tomatina", "Buñol", "fin août", "bataille géante de tomates"], ["las doce uvas", "toute l'Espagne", "Nochevieja (31 décembre)", "un grain de raisin à chacun des 12 coups de minuit"]] },
            { t: "liste", titre: "À table !", items: ["**la paella** : le riz au safran de Valencia.", "**la tortilla de patatas** : l'omelette aux pommes de terre.", "**el gazpacho** : la soupe froide de tomates d'Andalousie.", "**el jamón** et **las tapas** : à partager au bar.", "**el turrón** : la confiserie aux amandes de Noël."] },
            { t: "exemple", titre: "Lire un texte de civilisation", md: "*En Cataluña se habla catalán y castellano. Su capital, Barcelona, es famosa por la Sagrada Familia de Gaudí. En 1937, durante la Guerra Civil, Picasso pintó Guernica para denunciar el bombardeo de la ciudad. Desde 1978, España es una monarquía parlamentaria.*\n\n(En Catalogne, on parle catalan et castillan. Sa capitale, Barcelone, est célèbre pour la Sagrada Familia de Gaudí. En 1937, pendant la Guerre civile, Picasso a peint *Guernica* pour dénoncer le bombardement de la ville. Depuis 1978, l'Espagne est une monarchie parlementaire.)" },
            { t: "verifie", q: "Qui a peint « El 3 de mayo de 1808 » ?", choix: ["Velázquez", "Goya", "Picasso", "Dalí"], bonne: 1, explication: "**Goya** a peint en 1814 les fusillades de Madrilènes par les soldats de Napoléon, au lendemain du soulèvement du 2 mai 1808." },
          ],
        },
      ],
      bilan: "17 communautés, quatre langues, une monarchie parlementaire depuis 1978, et des génies de Velázquez à Picasso : l'Espagne se comprend par son histoire.",
    },
    "3e-espagnol-09-culture-amerique-latine": {
      accroche: "De la frontière des États-Unis à la Terre de Feu, plus de 400 millions de personnes parlent espagnol en Amérique. Pyramides mayas, cité inca perchée dans les nuages, tango de Buenos Aires, crânes en sucre du Día de Muertos : un continent entier t'attend.",
      objectifs: [
        "Situer les pays hispanophones d'Amérique et leurs capitales",
        "Connaître les civilisations précolombiennes, la conquête et les indépendances",
        "Identifier des personnalités, des musiques et des fêtes",
        "Comprendre la diversité culturelle et les migrations",
      ],
      sections: [
        {
          titre: "Dix-neuf pays qui parlent espagnol",
          blocs: [
            { t: "carte", fond: "monde", titre: "L'Amérique hispanophone et quelques capitales", cadre: [-118, -56, -34, 33], zones: ["MX", "GT", "SV", "HN", "NI", "CR", "PA", "CU", "DO", "PR", "CO", "VE", "EC", "PE", "BO", "CL", "AR", "UY", "PY"], reperes: [{ nom: "Ciudad de México", lat: 19.4326, lon: -99.1332 }, { nom: "La Habana", lat: 23.1136, lon: -82.3666 }, { nom: "Bogotá", lat: 4.711, lon: -74.0721 }, { nom: "Caracas", lat: 10.4806, lon: -66.9036 }, { nom: "Lima", lat: -12.0464, lon: -77.0428 }, { nom: "La Paz", lat: -16.4897, lon: -68.1193 }, { nom: "Santiago", lat: -33.4489, lon: -70.6693 }, { nom: "Buenos Aires", lat: -34.6037, lon: -58.3816 }], legende: "En couleur, les 19 pays d'Amérique où l'espagnol est langue officielle." },
            { t: "texte", md: "L'espagnol est langue officielle dans **19 pays d'Amérique**, du Mexique à l'Argentine, en passant par Cuba et Porto Rico. Attention : le **Brésil**, le plus grand pays d'Amérique du Sud, parle **portugais** ! Et l'on parle anglais au Guyana, néerlandais au Suriname, français en Guyane." },
            { t: "attention", md: "Ne confonds pas *latino* et *hispano* : les Brésiliens sont latino-américains, mais pas hispanophones. Et l'espagnol d'Amérique a ses mots à lui : *el carro* (la voiture, en Colombie et au Mexique), *el celular* (le portable), *ustedes* à la place de *vosotros*." },
          ],
        },
        {
          titre: "Des empires précolombiens aux indépendances",
          blocs: [
            { t: "tableau", titre: "Trois grandes civilisations", entetes: ["Civilisation", "Région", "Lieux célèbres"], lignes: [["**les Aztèques** (aztecas)", "centre du Mexique", "Tenochtitlan, leur capitale bâtie sur un lac"], ["**les Mayas** (mayas)", "Yucatán (Mexique), Guatemala", "Chichén Itzá, Tikal"], ["**les Incas** (incas)", "Andes, surtout le Pérou", "Cuzco, Machu Picchu"]] },
            { t: "carte", fond: "monde", titre: "Civilisations précolombiennes et routes des conquistadors", cadre: [-110, -20, -60, 28], reperes: [{ nom: "Tenochtitlan (aztecas)", lat: 19.4326, lon: -99.1332 }, { nom: "Chichén Itzá (mayas)", lat: 20.6843, lon: -88.5678 }, { nom: "Tikal (mayas)", lat: 17.222, lon: -89.6237 }, { nom: "Cuzco (incas)", lat: -13.532, lon: -71.9675 }, { nom: "Machu Picchu", lat: -13.1631, lon: -72.545 }], traits: [{ de: [21.5, -80.0], a: [19.4326, -99.1332], label: "Cortés, 1519-1521" }, { de: [8.9824, -79.5199], a: [-13.532, -71.9675], label: "Pizarro, 1532-1533" }] },
            { t: "frise", titre: "Cinq siècles d'histoire", evenements: [{ date: 1325, label: "Fondation de Tenochtitlan", detail: "La capitale aztèque ; Mexico est bâtie sur ses ruines." }, { date: 1492, label: "Colón arrive en Amérique", detail: "Il croit avoir atteint les Indes." }, { date: 1521, label: "Cortés soumet les Aztèques", detail: "Chute de Tenochtitlan." }, { date: 1533, label: "Pizarro soumet les Incas", detail: "Prise de Cuzco, après l'exécution de l'empereur Atahualpa." }, { date: 1810, label: "Début des indépendances", detail: "Soulèvements au Mexique, au Venezuela, en Argentine…" }, { date: 1825, label: "Fin des guerres d'indépendance", detail: "Bolívar et San Martín ont libéré l'Amérique du Sud." }, { date: 1959, label: "Révolution cubaine", detail: "Fidel Castro et Che Guevara prennent le pouvoir." }, { date: 1992, label: "Nobel de la paix pour Rigoberta Menchú", detail: "Militante maya des droits des peuples indigènes du Guatemala." }] },
            { t: "definition", terme: "Simón Bolívar, « el Libertador »", md: "Né à Caracas en 1783, il mène les guerres d'indépendance contre l'Espagne au **Venezuela**, en **Colombie**, en **Équateur**, au **Pérou** et en **Bolivie**, qui porte son nom. Au sud, **José de San Martín** libère l'Argentine, le Chili et le Pérou." },
            { t: "verifie", q: "Qui a conquis l'Empire aztèque en 1521 ?", choix: ["Francisco Pizarro", "Hernán Cortés", "Simón Bolívar", "Cristóbal Colón"], bonne: 1, explication: "**Hernán Cortés** prend Tenochtitlan en 1521. Pizarro, lui, soumet les Incas (1533) ; Bolívar libère l'Amérique du Sud au XIXe siècle." },
          ],
        },
        {
          titre: "Personnalités, musiques et fêtes",
          blocs: [
            { t: "tableau", titre: "Des personnalités à connaître", entetes: ["Personnalité", "Pays", "Domaine"], lignes: [["Frida Kahlo", "Mexique", "peinture (autoportraits)"], ["Diego Rivera", "Mexique", "peinture murale (*murales*)"], ["Gabriel García Márquez", "Colombie", "roman : *Cien años de soledad*"], ["Pablo Neruda", "Chili", "poésie, prix Nobel 1971"], ["Che Guevara", "Argentine", "révolution cubaine (1959)"], ["Rigoberta Menchú", "Guatemala", "droits des indigènes, Nobel de la paix 1992"], ["Lionel Messi", "Argentine", "football"]] },
            { t: "tableau", titre: "Musiques et danses", entetes: ["Musique", "Origine"], lignes: [["el tango", "Buenos Aires et Montevideo (Río de la Plata)"], ["la salsa", "racines cubaines"], ["la cumbia", "Colombie"], ["el reggaetón", "Porto Rico"], ["los mariachis", "Mexique"]] },
            { t: "texte", md: "Au **Mexique**, les 1er et 2 novembre, on célèbre le **Día de Muertos** : les familles dressent des *ofrendas* (autels) avec des photos, des fleurs orange de *cempasúchil* et des *calaveras* (crânes) en sucre, pour accueillir l'âme des défunts. C'est une fête joyeuse, pas triste ! Au **Pérou**, le 24 juin, l'**Inti Raymi**, la fête inca du Soleil, renaît chaque année à Cuzco. En Colombie, le **carnaval de Barranquilla** est l'un des plus grands du monde." },
            { t: "citation", texte: "Yo soy un hombre sincero\nde donde crece la palma,\ny antes de morirme quiero\nechar mis versos del alma.", auteur: "José Martí", source: "Versos sencillos (1891)" },
            { t: "savais-tu", md: "Ces vers du poète cubain José Martí sont devenus les paroles de la chanson *Guantanamera*, chantée dans le monde entier." },
          ],
        },
        {
          titre: "Une diversité vivante",
          blocs: [
            { t: "texte", md: "L'espagnol n'a pas effacé les langues d'avant la conquête. Des millions de personnes parlent encore le **quechua** (Andes), l'**aimara** (Bolivie, Pérou), le **guaraní** (officiel au Paraguay, à côté de l'espagnol), le **náhuatl**, la langue des Aztèques, et les langues **mayas**. Des mots sont même passés en français : *chocolat* et *tomate* viennent du náhuatl." },
            { t: "propriete", titre: "Les migrations vers le Nord", md: "La **frontière entre le Mexique et les États-Unis** est l'une des plus traversées au monde. Aujourd'hui, plus de **60 millions d'hispanos** vivent aux États-Unis, où l'espagnol est la **deuxième langue** du pays." },
            { t: "exemple", titre: "Lire un texte sur le Mexique", md: "*México es un país enorme: su capital, Ciudad de México, está construida sobre la antigua Tenochtitlan de los aztecas. Cada año, el 1 y el 2 de noviembre, las familias celebran el Día de Muertos con flores, calaveras de azúcar y ofrendas.*\n\n(Le Mexique est un pays immense : sa capitale, Mexico, est construite sur l'ancienne Tenochtitlan des Aztèques. Chaque année, les 1er et 2 novembre, les familles célèbrent le Jour des morts avec des fleurs, des crânes en sucre et des offrandes.)" },
            { t: "verifie", q: "Qu'est-ce que l'Inti Raymi ?", choix: ["Une danse argentine", "La fête inca du Soleil, à Cuzco", "Un plat mexicain", "Le carnaval de Barranquilla"], bonne: 1, explication: "*Inti* signifie « soleil » en quechua. L'**Inti Raymi** est la grande fête inca du Soleil, célébrée à Cuzco le 24 juin, au solstice d'hiver austral." },
          ],
        },
      ],
      bilan: "Aztèques, Mayas et Incas, conquête puis indépendances, tango, Día de Muertos et quechua : l'Amérique latine est un monde aux mille visages qui partagent une langue.",
    },
    "3e-espagnol-10-expression-strategies": {
      accroche: "Au brevet comme dans la vie, il ne suffit pas de connaître des mots : il faut les organiser. Un bon texte espagnol, c'est un squelette de connecteurs, des opinions bien introduites… et des accents à la bonne place. Voici ta boîte à outils.",
      objectifs: [
        "Structurer un texte et donner ton opinion avec des connecteurs",
        "Décrire une image et raconter au passé",
        "Appliquer les règles d'accentuation et de ponctuation",
      ],
      sections: [
        {
          titre: "Structurer et argumenter",
          blocs: [
            { t: "tableau", titre: "Les connecteurs", entetes: ["Espagnol", "Français", "Rôle"], lignes: [["en primer lugar", "d'abord", "commencer"], ["además", "de plus", "ajouter"], ["sin embargo", "cependant", "opposer"], ["por eso", "c'est pourquoi", "conséquence"], ["por un lado… por otro lado", "d'un côté… de l'autre", "comparer"], ["por último / en conclusión", "enfin / en conclusion", "conclure"]] },
            { t: "propriete", titre: "Donner son opinion", md: "**Creo que / Pienso que / Me parece que + indicatif** : *Creo que **es** útil.*\n**En mi opinión**, … ; **Estoy de acuerdo** (je suis d'accord) ; **No estoy de acuerdo**." },
            { t: "attention", md: "Deux erreurs typiques des francophones : *soy de acuerdo* (faux : être d'accord est un **état**, donc **estoy de acuerdo**) et *pienso de que* (faux : on dit **pienso que**, sans *de*)." },
            { t: "exemple", titre: "Un paragraphe argumenté", md: "*En mi opinión, las redes sociales tienen ventajas e inconvenientes. **En primer lugar**, permiten comunicarse. **Además**, informan rápidamente. **Sin embargo**, pueden difundir noticias falsas. **Por eso**, creo que hay que usarlas con cuidado. ¿No te parece?*\n\n(À mon avis, les réseaux sociaux ont des avantages et des inconvénients. D'abord, ils permettent de communiquer. De plus, ils informent rapidement. Cependant, ils peuvent diffuser de fausses informations. C'est pourquoi je crois qu'il faut les utiliser avec prudence. Tu ne trouves pas ?)" },
            { t: "verifie", q: "Comment dit-on « Je suis d'accord » ?", choix: ["Soy de acuerdo.", "Estoy de acuerdo.", "Tengo de acuerdo.", "Estoy acuerdo."], bonne: 1, explication: "On est d'accord comme on est dans un état : **estoy de acuerdo**, avec *estar* et la préposition *de*." },
          ],
        },
        {
          titre: "Décrire une image, raconter une histoire",
          blocs: [
            { t: "etapes", titre: "Décrire une image en quatre temps", items: [{ titre: "Présenter", md: "*Se trata de una foto / un cuadro de…* (Il s'agit de…)" }, { titre: "Situer", md: "*En primer plano* (au premier plan), *en el fondo* (à l'arrière-plan), *en el centro*, *a la derecha / a la izquierda*, *arriba / abajo*." }, { titre: "Décrire", md: "*Se ve / Hay…* (on voit / il y a) ; avec *estar* + gérondif pour les actions : *Una mujer está leyendo.*" }, { titre: "Interpréter", md: "*Creo que el artista quiere denunciar… Me parece que…*" }] },
            { t: "texte", md: "Pour **raconter**, reprends la règle du chapitre 1 : le **cadre à l'imperfecto** (*era, había, hacía*), puis les **actions à l'indefinido**, reliées par *de repente* (soudain), *entonces* (alors), *luego* (ensuite), *al final* (à la fin).\n\n*Érase una vez una niña que **vivía** en un pueblo. Un día, **encontró** un mapa misterioso.* (Il était une fois une petite fille qui vivait dans un village. Un jour, elle trouva une carte mystérieuse.)" },
            { t: "citation", texte: "Caminante, no hay camino,\nse hace camino al andar.", auteur: "Antonio Machado", source: "Proverbios y cantares, XXIX, Campos de Castilla" },
          ],
        },
        {
          titre: "Où tombe l'accent ?",
          blocs: [
            { t: "texte", md: "En espagnol, chaque mot a une **syllabe tonique**, prononcée plus fort. Une règle simple permet de la trouver, et l'**accent écrit** (*la tilde*) n'apparaît que lorsque le mot désobéit à la règle." },
            { t: "schema", titre: "Agudas, llanas, esdrújulas", legende: "La syllabe en couleur est la syllabe tonique, comptée à partir de la fin du mot.", svg: `<svg viewBox="0 0 400 260"><text class="texte-petit" x="182" y="12" text-anchor="middle">syllabe, en partant de la fin</text><text class="texte-petit" x="122" y="30" text-anchor="middle">3e</text><text class="texte-petit" x="182" y="30" text-anchor="middle">2e</text><text class="texte-petit" x="242" y="30" text-anchor="middle">1re</text><text class="texte-main" x="15" y="63">aguda</text><rect class="aplat-papier" x="155" y="40" width="54" height="34" rx="5"/><rect class="trait-fin" x="155" y="40" width="54" height="34" rx="5" fill="none"/><text class="texte" x="182" y="62" text-anchor="middle">ca</text><rect class="aplat-fort" x="215" y="40" width="54" height="34" rx="5"/><rect class="trait" x="215" y="40" width="54" height="34" rx="5" fill="none"/><text class="texte" x="242" y="62" text-anchor="middle">mión</text><text class="texte-petit" x="285" y="54">camión, jardín</text><text class="texte-petit" x="285" y="70">comer, ciudad</text><text class="texte-main" x="15" y="118">llana</text><rect class="aplat-fort" x="155" y="95" width="54" height="34" rx="5"/><rect class="trait" x="155" y="95" width="54" height="34" rx="5" fill="none"/><text class="texte" x="182" y="117" text-anchor="middle">ca</text><rect class="aplat-papier" x="215" y="95" width="54" height="34" rx="5"/><rect class="trait-fin" x="215" y="95" width="54" height="34" rx="5" fill="none"/><text class="texte" x="242" y="117" text-anchor="middle">sa</text><text class="texte-petit" x="285" y="109">casa, joven</text><text class="texte-petit" x="285" y="125">árbol, lápiz</text><text class="texte-main" x="15" y="173">esdrújula</text><rect class="aplat-fort" x="95" y="150" width="54" height="34" rx="5"/><rect class="trait" x="95" y="150" width="54" height="34" rx="5" fill="none"/><text class="texte" x="122" y="172" text-anchor="middle">mú</text><rect class="aplat-papier" x="155" y="150" width="54" height="34" rx="5"/><rect class="trait-fin" x="155" y="150" width="54" height="34" rx="5" fill="none"/><text class="texte" x="182" y="172" text-anchor="middle">si</text><rect class="aplat-papier" x="215" y="150" width="54" height="34" rx="5"/><rect class="trait-fin" x="215" y="150" width="54" height="34" rx="5" fill="none"/><text class="texte" x="242" y="172" text-anchor="middle">ca</text><text class="texte-petit" x="285" y="164">música, médico</text><text class="texte-petit" x="285" y="180">sábado (toujours)</text><line class="pointille" x1="15" y1="202" x2="385" y2="202"/><text class="texte-petit" x="200" y="224" text-anchor="middle">Fin en voyelle, n ou s → llana. Autre consonne → aguda.</text><text class="texte-petit" x="200" y="244" text-anchor="middle">Mot qui désobéit à la règle → accent écrit (tilde).</text></svg>` },
            { t: "propriete", titre: "La règle de l'accent", md: "1. Mot terminé par **voyelle, n ou s** → tonique sur l'**avant-dernière** syllabe (**llana**) : *ca-sa, jo-ven, e-xa-men*.\n2. Mot terminé par **une autre consonne** → tonique sur la **dernière** (**aguda**) : *co-mer, ciu-dad, re-loj*.\n3. Si le mot ne suit pas la règle, on écrit l'accent : agudas en voyelle, n, s (*camión, jardín, francés, café*) ; llanas en autre consonne (*árbol, lápiz, fácil*) ; et **toutes les esdrújulas** (*música, médico, sábado*)." },
            { t: "exemple", titre: "Faut-il un accent ?", etapes: ["**musica** : on dit MÚ-si-ca, tonique sur l'antépénultième → esdrújula → toujours un accent : **música**.", "**jardin** : on dit jar-DÍN, tonique sur la dernière, mais le mot finit par *n* → la règle voudrait la llana → accent : **jardín**.", "**examen** : on dit e-XA-men, llana terminée par *n* → la règle est respectée → **pas d'accent** : *examen*. Mais au pluriel, *exámenes* devient esdrújula !"] },
            { t: "verifie", q: "Quel mot est esdrújula ?", choix: ["camión", "casa", "sábado", "ciudad"], bonne: 2, explication: "**SÁ-ba-do** est accentué sur l'antépénultième syllabe : c'est une esdrújula, d'où l'accent écrit. *Camión* et *ciudad* sont agudas, *casa* est llana." },
          ],
        },
        {
          titre: "La ponctuation espagnole",
          blocs: [
            { t: "propriete", titre: "Ouvrir et fermer", md: "Les questions et les exclamations s'**ouvrent** avec un signe à l'envers et se **ferment** avec le signe habituel : ==**¿**Cómo estás**?** **¡**Qué bien**!**== Ainsi, le lecteur sait dès le début quelle intonation prendre." },
            { t: "liste", titre: "L'accent qui distingue", items: ["Les **interrogatifs** portent toujours un accent : *qué, quién, dónde, cuándo, cómo, cuánto, por qué*. Mais *porque* (parce que) n'en a pas.", "*tú* (tu, toi) / *tu* (ton) ; *él* (il) / *el* (le) ; *sí* (oui) / *si* (si) ; *mí* (moi) / *mi* (mon).", "*¿Por qué estudias? — Porque quiero aprobar.*"] },
            { t: "attention", md: "Le signe d'ouverture se place **au début de la question**, pas forcément au début de la phrase : *Y tú, **¿**qué piensas?* — et jamais d'espace entre le signe et le mot." },
          ],
        },
      ],
      bilan: "Des connecteurs pour l'ordre, estoy de acuerdo pour l'accord, l'imperfecto pour le décor, la tilde quand le mot désobéit, et ¿ ¡ pour ouvrir : ton espagnol est prêt pour le brevet.",
    },
  },
};
