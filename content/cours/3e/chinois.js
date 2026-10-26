// ÉCLORE — Cours illustrés, 3e Chinois (LV2, troisième année, niveau A2).
// Mandarin, caractères simplifiés + pinyin. Schéma : docs/COURS.md.
// Validation : node tools/validate-cours.mjs content/cours/3e/chinois.js
// Conventions de pinyin (identiques au module de questions content/3e/chinois.js) : 不 et 一 sont notés
// avec leur ton réel (bú shì, yí ge, yì tiān) ; le changement 3e ton + 3e ton n'est pas noté (nǐ hǎo) ;
// les particules 了, 过, 着, 的, 得, 地 sont au ton neutre.
export default {
  id: "3e-chinois",
  chapitres: {
    // ───────────────────────── 1. Les aspects : 过, 在, 着 ─────────────────────────
    "3e-chinois-01-aspects-guo-zai-zhe": {
      accroche: "« Je suis déjà allé en Chine », « je suis en train de lire », « la porte est ouverte » : en français, c'est le temps du verbe qui fait tout le travail. Le verbe chinois, lui, ne se conjugue jamais. Il s'entoure de petits mots qui disent **comment** l'action se déroule : déjà vécue, accomplie, en cours ou installée dans la durée.",
      objectifs: [
        "Raconter une expérience vécue avec 过 et la nier avec 没…过",
        "Décrire une action en cours avec 在 / 正在 (… 呢)",
        "Décrire un état qui dure avec 着",
        "Choisir entre 了, 过, 在 et 着",
      ],
      sections: [
        {
          titre: "Un verbe, quatre façons de voir l'action",
          blocs: [
            { t: "texte", md: "吃 (chī : manger) garde toujours la même forme, que tu parles d'hier, d'aujourd'hui ou de demain. Pour situer l'action, le chinois utilise des **marques d'aspect** : de petits mots placés juste avant ou juste après le verbe.\n\nTu connais déjà **了 (le)** depuis la 4e. Cette année, trois nouvelles marques le rejoignent : **过 (guo)**, **在 (zài)** et **着 (zhe)**." },
            { t: "definition", terme: "Aspect", md: "La façon dont on regarde une action : déjà **vécue** un jour (过), **accomplie** (了), **en train de se dérouler** (在), ou devenue un **état qui dure** (着). L'aspect ne dit pas *quand* : c'est le rôle des mots de temps comme 昨天 (zuótiān : hier) ou 现在 (xiànzài : maintenant)." },
            { t: "schema", titre: "La ligne du temps des aspects", legende: "过 et 了 regardent vers le passé ; 在 se place au moment où l'on parle ; 着 décrit l'état qui reste après l'action (on a ouvert la porte, elle est encore ouverte).", svg: `<svg viewBox="0 0 400 250"><line class="trait" x1="14" y1="128" x2="388" y2="128" marker-end="url(#fl)"/><text class="texte-petit" x="16" y="118">passé</text><text class="texte-petit" x="386" y="148" text-anchor="end">temps</text><text class="texte-pigment" x="60" y="40" text-anchor="middle" style="font-size:24px">过</text><text class="texte-petit" x="60" y="58" text-anchor="middle">guo</text><text class="texte-petit" x="60" y="72" text-anchor="middle">expérience vécue</text><text class="texte" x="60" y="96" text-anchor="middle" style="font-size:16px">我去过中国</text><line class="pointille" x1="60" y1="103" x2="60" y2="119"/><circle class="aplat-fort" cx="60" cy="128" r="6"/><text class="texte-pigment" x="175" y="40" text-anchor="middle" style="font-size:24px">了</text><text class="texte-petit" x="175" y="58" text-anchor="middle">le</text><text class="texte-petit" x="175" y="72" text-anchor="middle">action accomplie</text><text class="texte" x="175" y="96" text-anchor="middle" style="font-size:16px">我吃了</text><line class="pointille" x1="175" y1="103" x2="175" y2="119"/><circle class="aplat-fort" cx="175" cy="128" r="6"/><text class="texte-pigment" x="300" y="40" text-anchor="middle" style="font-size:24px">在</text><text class="texte-petit" x="300" y="58" text-anchor="middle">zài</text><text class="texte-petit" x="300" y="72" text-anchor="middle">action en cours</text><text class="texte" x="300" y="96" text-anchor="middle" style="font-size:16px">我在吃</text><line class="pointille" x1="300" y1="103" x2="300" y2="117"/><rect class="aplat-fort" x="280" y="121" width="40" height="14" rx="7"/><text class="texte-petit" x="300" y="150" text-anchor="middle">maintenant</text><rect class="aplat trait-fin" x="215" y="160" width="160" height="10" rx="5"/><circle class="aplat-fort" cx="215" cy="165" r="5"/><text class="texte-pigment" x="295" y="196" text-anchor="middle" style="font-size:24px">着</text><text class="texte-petit" x="295" y="213" text-anchor="middle">zhe : état qui dure</text><text class="texte" x="295" y="236" text-anchor="middle" style="font-size:16px">门开着</text></svg>` },
          ],
        },
        {
          titre: "过 : ce que tu as déjà vécu",
          blocs: [
            { t: "propriete", titre: "Verbe + 过 = expérience", md: "**过 (guo)** se colle **juste après le verbe** : on a fait l'expérience au moins une fois dans sa vie.\n我去过中国 (wǒ qù guo Zhōngguó) : je suis déjà allé en Chine.\n我吃过饺子 (wǒ chī guo jiǎozi) : j'ai déjà mangé des raviolis chinois." },
            { t: "texte", md: "Pour poser la question, ajoute 吗 (ma) à la fin, ou 没有 (méiyǒu) : 你去过北京吗？ / 你去过北京没有？(nǐ qù guo Běijīng ma / méiyǒu ?). Pour compter les fois, place le nombre et **次 (cì : fois)** après 过 : 我去过两次 (wǒ qù guo liǎng cì) : j'y suis allé deux fois." },
            { t: "tableau", titre: "Affirmer, nier, insister", entetes: ["Forme", "Chinois", "Sens"], lignes: [["affirmation", "我看过这个电影。(wǒ kàn guo zhège diànyǐng)", "J'ai déjà vu ce film."], ["négation : 没 + verbe + 过", "我没看过这个电影。(wǒ méi kàn guo zhège diànyǐng)", "Je n'ai jamais vu ce film."], ["insistance : 从来没…过", "我从来没吃过北京烤鸭。(wǒ cónglái méi chī guo Běijīng kǎoyā)", "Je n'ai jamais, de ma vie, mangé de canard laqué."], ["nombre de fois", "我去过两次。(wǒ qù guo liǎng cì)", "J'y suis allé deux fois."]] },
            { t: "attention", md: "À la négation, **了 disparaît, mais 过 reste** ! 我去了 (wǒ qù le) → 我没去 (wǒ méi qù : je n'y suis pas allé, cette fois-là). Mais 我去过 (wǒ qù guo) → **我没去过** (wǒ méi qù guo : je n'y suis jamais allé). Et jamais de 不 avec 过 : *我不看过* est faux." },
            { t: "verifie", q: "Comment dit-on « Je n'ai jamais mangé de raviolis » ?", choix: ["我没吃饺子。", "我没吃过饺子。", "我不吃过饺子。", "我吃没过饺子。"], bonne: 1, explication: "Expérience jamais vécue : **没 + verbe + 过** : 我没吃过饺子 (wǒ méi chī guo jiǎozi). 我没吃饺子 veut seulement dire « je n'ai pas mangé de raviolis » (cette fois) ; 不 ne va pas avec 过, et 没 se place devant le verbe." },
          ],
        },
        {
          titre: "在 et 正在 : en train de…",
          blocs: [
            { t: "propriete", titre: "在 / 正在 + verbe (+ 呢)", md: "Pour une action **en cours** au moment où l'on parle, place **在 (zài)** ou **正在 (zhèngzài : justement en train de)** devant le verbe. On ajoute souvent **呢 (ne)** en fin de phrase.\n我在看书 (wǒ zài kàn shū) : je suis en train de lire.\n妈妈正在做饭呢 (māma zhèngzài zuò fàn ne) : maman est justement en train de préparer le repas." },
            { t: "exemple", titre: "Au téléphone", md: "— 你在做什么呢？(Nǐ zài zuò shénme ne ?) Qu'est-ce que tu es en train de faire ?\n— 我在做作业。(Wǒ zài zuò zuòyè.) Je fais mes devoirs.\n— 你弟弟呢？(Nǐ dìdi ne ?) Et ton petit frère ?\n— 别说话，他正在睡觉呢！(Bié shuō huà, tā zhèngzài shuì jiào ne !) Ne parle pas, il est en train de dormir !" },
            { t: "tableau", titre: "Trois emplois de 在", entetes: ["Emploi", "Construction", "Exemple"], lignes: [["verbe « être à »", "在 + lieu, sans autre verbe", "我在家。(wǒ zài jiā) Je suis à la maison."], ["préposition de lieu", "在 + lieu + verbe", "我在学校吃饭。(wǒ zài xuéxiào chī fàn) Je mange à l'école."], ["marque du progressif", "在 + verbe d'action", "我在吃饭。(wǒ zài chī fàn) Je suis en train de manger."]] },
            { t: "astuce", md: "Pour savoir si 在 marque le progressif, regarde ce qui le suit : un **lieu** (家 jiā, 学校 xuéxiào) → « être à » ; un **verbe d'action** (吃 chī, 看 kàn, 睡觉 shuì jiào) → « en train de ». Dans 我在学校 (je suis à l'école), 在 ne dit donc pas qu'une action est en cours." },
            { t: "attention", md: "On ne peut pas être « en train » de vivre une expérience passée : 在 / 正在 et 过 ne vont **jamais ensemble**. *我正在看过电视* est faux. Choisis : 我正在看电视 (wǒ zhèngzài kàn diànshì : je suis en train de regarder la télé) ou 我看过… (j'ai déjà vu…)." },
          ],
        },
        {
          titre: "着 : un état qui dure",
          blocs: [
            { t: "propriete", titre: "Verbe + 着 = état", md: "**着 (zhe)**, collé après le verbe, décrit la **situation qui reste** une fois l'action faite.\n门开着 (mén kāi zhe) : la porte est ouverte (on l'a ouverte, elle le reste).\n他穿着一件白衬衫 (tā chuān zhe yí jiàn bái chènshān) : il porte une chemise blanche." },
            { t: "texte", md: "着 aime les verbes de **posture** et de **tenue** : 坐 (zuò : être assis), 站 (zhàn : être debout), 穿 (chuān : porter un vêtement), 开 (kāi : ouvrir), 拿 (ná : tenir).\n\nAvec deux verbes, **verbe 1 + 着 + verbe 2** décrit la manière : le premier verbe dit la posture pendant la seconde action. 他坐着看报纸 (tā zuò zhe kàn bàozhǐ) : il lit le journal assis." },
            { t: "tableau", titre: "Bilan : un verbe, quatre marques", entetes: ["Marque", "Valeur", "Exemple", "Sens"], lignes: [["了 (le)", "action accomplie", "我吃了三个饺子。(wǒ chī le sān ge jiǎozi)", "J'ai mangé trois raviolis."], ["过 (guo)", "expérience vécue", "我吃过饺子。(wǒ chī guo jiǎozi)", "J'ai déjà mangé des raviolis."], ["在 (zài)", "action en cours", "我在吃饺子。(wǒ zài chī jiǎozi)", "Je suis en train de manger des raviolis."], ["着 (zhe)", "état qui dure", "他坐着吃饺子。(tā zuò zhe chī jiǎozi)", "Il mange des raviolis assis."]] },
            { t: "verifie", q: "Que signifie 教室的门开着 (jiàoshì de mén kāi zhe) ?", choix: ["La porte de la classe est ouverte.", "Ouvre la porte de la classe !", "On a déjà ouvert une fois la porte de la classe.", "Je suis en train d'ouvrir la porte de la classe."], bonne: 0, explication: "**着** décrit l'état qui dure : la porte reste ouverte. « Je suis en train d'ouvrir » se dirait 我在开门 (wǒ zài kāi mén) ; une expérience serait marquée par 过." },
          ],
        },
      ],
      bilan: "过 pour ce que tu as vécu, 了 pour ce qui est fait, 在 pour ce qui se passe, 着 pour ce qui dure : le verbe ne change jamais, ce sont ses petits compagnons qui racontent le temps.",
    },

    // ───────────────────────── 2. Le complément de degré ─────────────────────────
    "3e-chinois-02-complement-de-degre": {
      accroche: "En français, on dit « il parle **bien** chinois » : l'adverbe colle au verbe. En chinois, le jugement arrive **à la fin**, après un petit mot qui sonne « de » : 他说得很好 (tā shuō de hěn hǎo). Avec ce petit 得, tu peux juger tout ce que font les autres, et parler de tes talents avec modestie.",
      objectifs: [
        "Construire verbe + 得 + (很) + adjectif",
        "Employer le complément de degré avec un complément d'objet",
        "Nier et interroger une appréciation",
        "Distinguer 的, 得 et 地",
      ],
      sections: [
        {
          titre: "Juger la manière : verbe + 得",
          blocs: [
            { t: "texte", md: "Pour dire **comment** une action se fait (vite, bien, tôt, joliment…), le chinois place l'appréciation **après le verbe**, reliée par **得 (de)**. Le verbe vient d'abord, le jugement ensuite, comme une note donnée à l'action." },
            { t: "definition", terme: "Complément de degré", md: "Un adjectif placé après **verbe + 得**, qui juge la manière ou le résultat de l'action. On met souvent **很 (hěn)** devant l'adjectif : 他跑得很快 (tā pǎo de hěn kuài) : il court très vite." },
            { t: "schema", titre: "Le complément de degré, pièce par pièce", legende: "得 suit toujours directement un verbe. Avec un objet (汉语 Hànyǔ : le chinois), on répète le verbe. La négation 不 se place après 得.", svg: `<svg viewBox="0 0 400 280"><text class="texte" x="12" y="20">Sans objet : il court très vite</text><rect class="aplat-papier trait-fin" x="20" y="30" width="50" height="34" rx="6"/><text class="texte" x="45" y="54" text-anchor="middle" style="font-size:18px">他</text><rect class="aplat-papier trait-fin" x="80" y="30" width="50" height="34" rx="6"/><text class="texte" x="105" y="54" text-anchor="middle" style="font-size:18px">跑</text><rect class="aplat trait" x="140" y="30" width="40" height="34" rx="6"/><text class="texte-pigment" x="160" y="54" text-anchor="middle" style="font-size:18px">得</text><rect class="aplat-papier trait-fin" x="190" y="30" width="80" height="34" rx="6"/><text class="texte" x="230" y="54" text-anchor="middle" style="font-size:18px">很快</text><text class="texte-petit" x="45" y="78" text-anchor="middle">sujet</text><text class="texte-petit" x="105" y="78" text-anchor="middle">verbe</text><text class="texte-petit" x="160" y="78" text-anchor="middle">lien</text><text class="texte-petit" x="230" y="78" text-anchor="middle">appréciation</text><text class="texte" x="12" y="108">Avec un objet, on répète le verbe : il parle très bien chinois</text><path class="trait-fin" d="M92 127 Q134 108 174 125" marker-end="url(#fl-p)"/><rect class="aplat-papier trait-fin" x="20" y="130" width="40" height="34" rx="6"/><text class="texte" x="40" y="154" text-anchor="middle" style="font-size:18px">他</text><rect class="aplat-papier trait-fin" x="68" y="130" width="80" height="34" rx="6"/><text class="texte" x="108" y="154" text-anchor="middle" style="font-size:18px">说汉语</text><rect class="aplat-papier trait-fin" x="156" y="130" width="40" height="34" rx="6"/><text class="texte" x="176" y="154" text-anchor="middle" style="font-size:18px">说</text><rect class="aplat trait" x="204" y="130" width="36" height="34" rx="6"/><text class="texte-pigment" x="222" y="154" text-anchor="middle" style="font-size:18px">得</text><rect class="aplat-papier trait-fin" x="248" y="130" width="64" height="34" rx="6"/><text class="texte" x="280" y="154" text-anchor="middle" style="font-size:18px">很好</text><text class="texte-petit" x="40" y="178" text-anchor="middle">sujet</text><text class="texte-petit" x="108" y="178" text-anchor="middle">verbe + objet</text><text class="texte-petit" x="176" y="178" text-anchor="middle">verbe</text><text class="texte-petit" x="222" y="178" text-anchor="middle">lien</text><text class="texte-petit" x="280" y="178" text-anchor="middle">appréciation</text><text class="texte" x="12" y="208">Négation, juste après le lien : je ne chante pas bien</text><rect class="aplat-papier trait-fin" x="20" y="218" width="50" height="34" rx="6"/><text class="texte" x="45" y="242" text-anchor="middle" style="font-size:18px">我</text><rect class="aplat-papier trait-fin" x="80" y="218" width="50" height="34" rx="6"/><text class="texte" x="105" y="242" text-anchor="middle" style="font-size:18px">唱</text><rect class="aplat trait" x="140" y="218" width="40" height="34" rx="6"/><text class="texte-pigment" x="160" y="242" text-anchor="middle" style="font-size:18px">得</text><rect class="aplat-papier trait" x="190" y="218" width="80" height="34" rx="6"/><text class="texte-pigment" x="214" y="242" text-anchor="middle" style="font-size:18px">不</text><text class="texte" x="246" y="242" text-anchor="middle" style="font-size:18px">好</text><text class="texte-petit" x="45" y="266" text-anchor="middle">sujet</text><text class="texte-petit" x="105" y="266" text-anchor="middle">verbe</text><text class="texte-petit" x="160" y="266" text-anchor="middle">lien</text><text class="texte-petit" x="230" y="266" text-anchor="middle">négation + adjectif</text></svg>` },
            { t: "liste", titre: "Des expressions toutes prêtes", items: ["起得很早 (qǐ de hěn zǎo) : se lever très tôt", "睡得很晚 (shuì de hěn wǎn) : se coucher très tard", "来得很早 (lái de hěn zǎo) : arriver très tôt", "写得很漂亮 (xiě de hěn piàoliang) : écrire très joliment", "说得很流利 (shuō de hěn liúlì) : parler très couramment"] },
            { t: "verifie", q: "Comment dit-on « Il se lève très tôt » ?", choix: ["他很早起。", "他起得很早。", "他起很早得。", "他得起很早。"], bonne: 1, explication: "Verbe + **得** + 很 + adjectif : 他起得很早 (tā qǐ de hěn zǎo). 得 suit directement le verbe 起 (qǐ : se lever), et l'appréciation vient à la fin." },
          ],
        },
        {
          titre: "Avec un objet, on répète le verbe",
          blocs: [
            { t: "propriete", titre: "得 suit toujours un verbe, jamais un nom", md: "Quand le verbe a un objet, trois solutions :\n— **répéter le verbe** : 他说汉语**说得**很好 (tā shuō Hànyǔ shuō de hěn hǎo) ;\n— placer l'objet **en tête** : 他汉语说得很好 (tā Hànyǔ shuō de hěn hǎo) ;\n— **supprimer** l'objet si on le comprend : 他说得很好.\nToutes signifient : il parle très bien chinois." },
            { t: "exemple", titre: "Construire « Mon père cuisine très bien »", etapes: ["Le sujet : 我爸爸 (wǒ bàba : mon père).", "Le verbe et son objet : 做饭 (zuò fàn : faire la cuisine).", "On répète le verbe et on ajoute 得 : 做得 (zuò de).", "L'appréciation : 很好吃 (hěn hǎochī : très bon à manger).", "Résultat : 我爸爸做饭做得很好吃 (wǒ bàba zuò fàn zuò de hěn hǎochī)."] },
            { t: "attention", md: "*他打篮球得很好* est faux : 得 se retrouve après le nom 篮球 (lánqiú : basket). Dis 他打篮球**打得**很好 (tā dǎ lánqiú dǎ de hěn hǎo), 他篮球打得很好 ou 他打得很好. Même chose avec 开车 (kāi chē : conduire) : 我哥哥开车**开得**太快了 (wǒ gēge kāi chē kāi de tài kuài le) : mon grand frère conduit trop vite !" },
          ],
        },
        {
          titre: "Nier et poser une question",
          blocs: [
            { t: "propriete", titre: "La négation porte sur le jugement", md: "On ne nie pas l'action (il a nagé), on nie l'appréciation : **不** se place **après 得**, devant l'adjectif.\n他游得很快 (tā yóu de hěn kuài) → 他游得**不**快 (tā yóu de bú kuài) : il ne nage pas vite.\n我唱歌唱得**不太**好 (wǒ chàng gē chàng de bú tài hǎo) : je ne chante pas très bien." },
            { t: "tableau", titre: "Affirmer, nier, demander", entetes: ["Forme", "Chinois", "Sens"], lignes: [["affirmation", "她跳舞跳得很好。(tā tiào wǔ tiào de hěn hǎo)", "Elle danse très bien."], ["négation", "她跳舞跳得不好。(tā tiào wǔ tiào de bù hǎo)", "Elle ne danse pas bien."], ["question avec 怎么样", "她跳得怎么样？(tā tiào de zěnmeyàng ?)", "Comment danse-t-elle ?"], ["question affirmative-négative", "她跳得好不好？(tā tiào de hǎo bu hǎo ?)", "Danse-t-elle bien ?"]] },
            { t: "astuce", md: "Écoute les tons de 不 : il devient **bú** devant un 4e ton (不快 bú kuài, 不太 bú tài, 不错 búcuò) et reste **bù** ailleurs (不好 bù hǎo, 不早 bù zǎo). 我跳舞跳得不错 (wǒ tiào wǔ tiào de búcuò) : je danse plutôt bien, une façon modeste de parler de soi !" },
            { t: "exemple", titre: "Une famille de chanteurs", md: "我姐姐唱歌唱得很好听。(Wǒ jiějie chàng gē chàng de hěn hǎotīng.) Ma grande sœur chante très bien.\n我唱得不太好，可是我跳舞跳得不错。(Wǒ chàng de bú tài hǎo, kěshì wǒ tiào wǔ tiào de búcuò.) Moi, je ne chante pas très bien, mais je danse plutôt bien.\n你呢？你唱得怎么样？(Nǐ ne ? Nǐ chàng de zěnmeyàng ?) Et toi ? Comment chantes-tu ?" },
            { t: "verifie", q: "Quelle est la négation de 他来得很早 (il est arrivé très tôt) ?", choix: ["他不来得早。", "他来得不早。", "他没来得早。", "他来不得早。"], bonne: 1, explication: "不 se place **après 得**, devant l'adjectif : 他来得不早 (tā lái de bù zǎo) : il n'est pas arrivé tôt. 早 (zǎo) est au 3e ton, donc 不 reste bù." },
          ],
        },
        {
          titre: "的, 得, 地 : trois « de » à ne pas confondre",
          blocs: [
            { t: "texte", md: "Ils se prononcent tous **de**, au ton neutre, mais ne s'écrivent pas pareil et ne jouent pas le même rôle. À l'oral, aucun risque ; à l'écrit, la confusion est une vraie faute." },
            { t: "tableau", titre: "Qui fait quoi ?", entetes: ["Caractère", "Place", "Rôle", "Exemple"], lignes: [["的", "devant un **nom**", "relie un déterminant au nom", "我的书 (wǒ de shū) : mon livre ; 漂亮的衣服 (piàoliang de yīfu) : de jolis vêtements"], ["得", "après un **verbe**", "introduit le jugement", "说得很好 (shuō de hěn hǎo) : parler très bien"], ["地", "devant un **verbe**", "transforme l'adjectif en adverbe", "认真地学习 (rènzhēn de xuéxí) : étudier sérieusement"]] },
            { t: "astuce", md: "Regarde la **position** : ==的 + nom, verbe + 得, 地 + verbe==. Devant un nom : 的. Après un verbe : 得. Devant un verbe : 地." },
            { t: "exemple", titre: "Les trois dans une phrase", md: "我的同学认真地学习，考得很好。(Wǒ de tóngxué rènzhēn de xuéxí, kǎo de hěn hǎo.) Mon camarade étudie sérieusement et réussit très bien ses examens.\n的 relie 我 au nom 同学 (tóngxué : camarade) ; 地 relie l'adjectif 认真 au verbe 学习 qui suit ; 得 relie le verbe 考 (kǎo : passer un examen) à son jugement 很好." },
            { t: "verifie", q: "Complète : 他踢足球踢___很好。(Il joue très bien au football.)", choix: ["的", "得", "地"], bonne: 1, explication: "Après le verbe répété 踢 (tī : taper du pied, jouer au football), c'est **得** qui introduit le jugement : 他踢足球踢得很好 (tā tī zúqiú tī de hěn hǎo)." },
          ],
        },
      ],
      bilan: "Verbe + 得 + jugement, le verbe répété s'il a un objet, 不 juste après 得 : en chinois, on nomme l'action d'abord, on la juge ensuite.",
    },

    // ───────────────────────── 3. Compléments de résultat et de direction ─────────────────────────
    "3e-chinois-03-complements-resultat-direction": {
      accroche: "找 (zhǎo) veut dire « chercher ». Mais as-tu **trouvé** ? Pour le dire, le chinois colle au verbe un second mot qui annonce le résultat : 找到 (zhǎodào). De la même façon, un simple 来 ou 去 indique si quelqu'un vient vers toi ou s'éloigne. Deux petits mots, et ta phrase devient précise comme une flèche.",
      objectifs: [
        "Exprimer le résultat d'une action avec 完, 懂, 到, 见 et 好",
        "Nier un résultat avec 没 et dire qu'on n'y arrive pas : 听不懂, 看不懂",
        "Indiquer la direction d'un mouvement avec 来 et 去",
        "Placer correctement un lieu avec 来 et 去",
      ],
      sections: [
        {
          titre: "L'action et son résultat",
          blocs: [
            { t: "texte", md: "Beaucoup de verbes chinois disent seulement l'**effort** : 找 (zhǎo : chercher), 听 (tīng : écouter), 看 (kàn : regarder). Pour dire que l'effort a **abouti**, on colle derrière un second élément. Le premier caractère dit ce que tu fais, le second ce que tu obtiens." },
            { t: "definition", terme: "Complément de résultat", md: "Un verbe ou un adjectif collé **directement** au verbe, qui indique le résultat de l'action : 听 (tīng : écouter) + 懂 (dǒng : comprendre) = 听懂 (tīngdǒng) : comprendre en écoutant." },
            { t: "tableau", titre: "Cinq résultats à connaître", entetes: ["Résultat", "Idée", "Exemples"], lignes: [["完 (wán)", "c'est fini", "做完 (zuòwán) finir de faire ; 吃完 (chīwán) finir de manger ; 写完 (xiěwán) finir d'écrire"], ["懂 (dǒng)", "c'est compris", "听懂 (tīngdǒng) comprendre à l'oral ; 看懂 (kàndǒng) comprendre en lisant"], ["到 (dào)", "c'est atteint", "找到 (zhǎodào) trouver ; 买到 (mǎidào) réussir à acheter"], ["见 (jiàn)", "c'est perçu", "看见 (kànjiàn) voir, apercevoir ; 听见 (tīngjiàn) entendre"], ["好 (hǎo)", "c'est bien fait, prêt", "准备好 (zhǔnbèi hǎo) être prêt ; 做好 (zuòhǎo) bien terminer"]] },
            { t: "propriete", titre: "Où placer 了 et l'objet ?", md: "Le verbe et son résultat restent **collés**. 了 vient juste après eux, puis l'objet :\n我写完作业了 (wǒ xiěwán zuòyè le) : j'ai fini mes devoirs.\n我昨天在街上看见了保罗 (wǒ zuótiān zài jiē shang kànjiàn le Bǎoluó) : hier, j'ai vu Paul dans la rue.\nQuestion : 你听懂了吗？(nǐ tīngdǒng le ma ?) As-tu compris ?" },
          ],
        },
        {
          titre: "Nier un résultat : 没 ou 不 ?",
          blocs: [
            { t: "propriete", titre: "没(有) + verbe + résultat, sans 了", md: "Le résultat **n'a pas été obtenu** : 没 (méi) se place devant le verbe, et 了 disparaît.\n我没听懂 (wǒ méi tīngdǒng) : je n'ai pas compris.\n我还没吃完 (wǒ hái méi chīwán) : je n'ai pas encore fini de manger." },
            { t: "texte", md: "Pour dire que tu **n'arrives pas** à obtenir le résultat, parce que c'est trop difficile pour toi, glisse **不** entre le verbe et le résultat. À la forme positive, on glisse **得** : j'y arrive." },
            { t: "tableau", titre: "Des nuances à bien distinguer", entetes: ["Phrase", "Sens"], lignes: [["我没听懂。(wǒ méi tīngdǒng)", "Je n'ai pas compris (cette fois-ci)."], ["我听不懂。(wǒ tīng bu dǒng)", "Je n'arrive pas à comprendre (c'est trop dur pour moi)."], ["我听得懂。(wǒ tīng de dǒng)", "J'arrive à comprendre."], ["这本书太难了，我看不懂。(zhè běn shū tài nán le, wǒ kàn bu dǒng)", "Ce livre est trop difficile, je n'arrive pas à le comprendre."]] },
            { t: "attention", md: "Trois pièges : *我不听懂* (不 ne nie pas un résultat passé), *我没听懂了* (了 ne va pas avec 没) et *我听没懂* (没 ne s'insère jamais entre le verbe et son résultat)." },
            { t: "verifie", q: "Le professeur parle trop vite : tu n'arrives pas à le comprendre. Tu dis :", choix: ["我听不懂。", "我不听懂。", "我听懂了。", "我没听懂了。"], bonne: 0, explication: "Impossible d'obtenir le résultat : 不 entre le verbe et le résultat, 听不懂 (tīng bu dǒng). 我听懂了 dirait le contraire, et les deux autres formes sont fautives." },
          ],
        },
        {
          titre: "来 et 去 : vers moi ou loin de moi",
          blocs: [
            { t: "texte", md: "Après un verbe de mouvement, **来 (lái)** et **去 (qù)** jouent le rôle d'une flèche. Tout dépend de **celui qui parle** : 来 montre un mouvement **vers lui**, 去 un mouvement **qui s'éloigne de lui**." },
            { t: "schema", titre: "Tout dépend de l'endroit où tu es", legende: "来 (lái) : vers celui qui parle. 去 (qù) : en s'éloignant de lui. Si tu étais en bas, tu dirais 上去 (shàngqù) à quelqu'un qui monte.", svg: `<svg viewBox="0 0 400 240"><text class="texte" x="100" y="20" text-anchor="middle">Je suis dans la pièce</text><path class="trait" d="M96 92 V40 H18 V200 H96 V150"/><circle class="aplat trait-fin" cx="55" cy="118" r="20"/><text class="texte" x="55" y="125" text-anchor="middle" style="font-size:18px">我</text><text class="texte-petit" x="55" y="156" text-anchor="middle">je parle</text><text class="texte-petit" x="146" y="82" text-anchor="middle">vers moi</text><text class="texte-pigment" x="146" y="102" text-anchor="middle" style="font-size:16px">进来 jìnlái</text><line class="trait" x1="190" y1="112" x2="84" y2="112" style="stroke:var(--pigment)" marker-end="url(#fl-p)"/><line class="trait" x1="84" y1="132" x2="190" y2="132" marker-end="url(#fl)"/><text class="texte" x="146" y="156" text-anchor="middle" style="font-size:16px">出去 chūqù</text><text class="texte-petit" x="146" y="172" text-anchor="middle">loin de moi</text><line class="pointille" x1="203" y1="34" x2="203" y2="226"/><text class="texte" x="304" y="20" text-anchor="middle">Je suis en haut</text><line class="trait" x1="300" y1="96" x2="392" y2="96"/><line class="trait" x1="208" y1="216" x2="300" y2="216"/><path class="trait-fin" d="M216 216 V192 H233 V168 H250 V144 H267 V120 H284 V96 H300"/><circle class="aplat trait-fin" cx="356" cy="72" r="18"/><text class="texte" x="356" y="79" text-anchor="middle" style="font-size:18px">我</text><text class="texte-petit" x="356" y="46" text-anchor="middle">je parle</text><line class="trait" x1="214" y1="176" x2="270" y2="100" style="stroke:var(--pigment)" marker-end="url(#fl-p)"/><text class="texte-petit" x="266" y="52" text-anchor="middle">vers moi</text><text class="texte-pigment" x="266" y="72" text-anchor="middle" style="font-size:16px">上来 shànglái</text><line class="trait" x1="312" y1="112" x2="262" y2="186" marker-end="url(#fl)"/><text class="texte" x="306" y="164" style="font-size:16px">下去 xiàqù</text><text class="texte-petit" x="306" y="180">loin de moi</text></svg>` },
            { t: "tableau", titre: "Les verbes de direction les plus courants", entetes: ["Verbe", "+ 来 (vers moi)", "+ 去 (loin de moi)"], lignes: [["进 (jìn) entrer", "进来 (jìnlái) : entre ici !", "进去 (jìnqù) : entrer là-bas"], ["出 (chū) sortir", "出来 (chūlái) : sors, viens vers moi", "出去 (chūqù) : sortir d'ici"], ["上 (shàng) monter", "上来 (shànglái) : monte vers moi", "上去 (shàngqù) : monter là-haut"], ["下 (xià) descendre", "下来 (xiàlái) : descends vers moi", "下去 (xiàqù) : descendre là-bas"], ["回 (huí) revenir", "回来 (huílái) : revenir ici", "回去 (huíqù) : retourner là-bas"]] },
            { t: "verifie", q: "Tu es dans le jardin ; ton frère est dans la maison. Tu lui cries « Sors ! » :", choix: ["出来！", "出去！", "进来！", "回去！"], bonne: 0, explication: "Ton frère sort et vient **vers toi** : 出 (chū) + 来, 出来 (chūlái). 出去 se dirait si tu étais dans la maison avec lui ; 进来 signifie « entre » et 回去 « retourne là-bas »." },
          ],
        },
        {
          titre: "Où placer le lieu ?",
          blocs: [
            { t: "propriete", titre: "Verbe + lieu + 来 / 去", md: "Le lieu se glisse **entre** le verbe et 来 / 去 :\n他回家去了 (tā huí jiā qù le) : il est rentré chez lui (et je n'y suis pas).\n我爸爸回家来了 (wǒ bàba huí jiā lái le) : mon père est rentré (à la maison, où je suis).\n请进教室来 (qǐng jìn jiàoshì lái) : entre dans la classe, s'il te plaît." },
            { t: "attention", md: "*他回去家了* est faux : le lieu ne se place jamais après 来 / 去. Dans la conversation, on dit aussi tout simplement 他回家了 (tā huí jiā le)." },
            { t: "exemple", titre: "En classe", md: "Le professeur : 你们听懂了吗？(Nǐmen tīngdǒng le ma ?) Avez-vous compris ?\nLes élèves : 听懂了！(Tīngdǒng le !) Oui !\nLéo : 我没听懂，请再说一遍。(Wǒ méi tīngdǒng, qǐng zài shuō yí biàn.) Je n'ai pas compris, répétez s'il vous plaît.\nOn frappe à la porte. Le professeur : 请进来！(Qǐng jìnlái !) Entrez !" },
            { t: "verifie", q: "Tu es à la maison. Comment dis-tu « Ma mère est rentrée » ?", choix: ["我妈妈回家来了。", "我妈妈回来家了。", "我妈妈回家去了。"], bonne: 0, explication: "Le lieu 家 (jiā) se place entre 回 et 来, et c'est **来** car ta mère revient vers toi, qui es à la maison : 我妈妈回家来了 (wǒ māma huí jiā lái le)." },
          ],
        },
      ],
      bilan: "Un résultat collé au verbe (做完, 听懂, 找到), 没 pour un échec ponctuel, 不 pour l'impossible, et 来 ou 去 selon l'endroit où tu te trouves : tes phrases disent enfin jusqu'où va l'action.",
    },

    // ───────────────────────── 4. Les connecteurs ─────────────────────────
    "3e-chinois-04-connecteurs": {
      accroche: "« Parce qu'il pleut, donc nous restons à la maison. » En français, c'est une faute ; en chinois, c'est la règle ! Les connecteurs chinois aiment aller **par deux**, comme des serre-livres qui encadrent tes idées. Avec eux, tu passes de phrases isolées à un vrai raisonnement.",
      objectifs: [
        "Exprimer la cause et la conséquence avec 因为… 所以… et demander pourquoi avec 为什么",
        "Exprimer l'opposition et la condition avec 虽然… 但是… et 如果… 就…",
        "Ajouter, choisir et enchaîner des idées : 不但… 而且…, 还是 / 或者, 先… 然后…",
      ],
      sections: [
        {
          titre: "Des connecteurs qui vont par deux",
          blocs: [
            { t: "texte", md: "En français, on choisit **un** connecteur : « parce que » **ou** « donc ». En chinois, on en met souvent **deux** : le premier ouvre la première proposition, le second ouvre la seconde. Et l'ordre est presque toujours le même : ==la cause, l'obstacle ou la condition d'abord, la conséquence ensuite==." },
            { t: "tableau", titre: "Les paires à connaître", entetes: ["Paire", "Pinyin", "Sens", "Exemple"], lignes: [["因为… 所以…", "yīnwèi… suǒyǐ…", "parce que… donc…", "因为下雨，所以我们不去公园。(yīnwèi xià yǔ, suǒyǐ wǒmen bú qù gōngyuán)"], ["虽然… 但是…", "suīrán… dànshì…", "bien que… (mais)…", "虽然汉语很难，但是很有意思。(suīrán Hànyǔ hěn nán, dànshì hěn yǒu yìsi)"], ["如果… 就…", "rúguǒ… jiù…", "si… alors…", "如果明天天气好，我们就去爬山。(rúguǒ míngtiān tiānqì hǎo, wǒmen jiù qù pá shān)"], ["不但… 而且…", "búdàn… érqiě…", "non seulement… mais en plus…", "她不但会说汉语，而且会写汉字。(tā búdàn huì shuō Hànyǔ, érqiě huì xiě Hànzì)"], ["先… 然后…", "xiān… ránhòu…", "d'abord… ensuite…", "我先做作业，然后看电视。(wǒ xiān zuò zuòyè, ránhòu kàn diànshì)"]] },
            { t: "astuce", md: "Pense à des **serre-livres** : 因为 tient la cause, 所以 tient la conséquence. Quand tu entends le premier, attends-toi au second ! C'est aussi un excellent indice pour comprendre un texte." },
          ],
        },
        {
          titre: "La cause : 因为… 所以… et 为什么",
          blocs: [
            { t: "propriete", titre: "因为 + cause，所以 + conséquence", md: "因为下雨，所以我们不去公园 : comme il pleut, nous n'allons pas au parc.\nPour **demander** la cause : **为什么** (wèi shénme : pourquoi, mot à mot « pour quoi ») ? On répond avec 因为 (yīnwèi)." },
            { t: "exemple", titre: "Pourquoi ?", md: "— 你为什么学汉语？(Nǐ wèi shénme xué Hànyǔ ?) Pourquoi apprends-tu le chinois ?\n— 因为我喜欢中国文化，所以我学习汉语。(Yīnwèi wǒ xǐhuan Zhōngguó wénhuà, suǒyǐ wǒ xuéxí Hànyǔ.) Comme j'aime la culture chinoise, j'apprends le chinois.\n— 你昨天为什么没来？(Nǐ zuótiān wèi shénme méi lái ?) Pourquoi n'es-tu pas venu hier ?\n— 因为我生病了。(Yīnwèi wǒ shēng bìng le.) Parce que j'étais malade." },
            { t: "attention", md: "La cause peut aussi venir **après**, comme une explication ajoutée : 我没去学校，因为我生病了 (wǒ méi qù xuéxiào, yīnwèi wǒ shēng bìng le). Dans ce cas, **pas de 所以**. Et ne mélange jamais les paires : *虽然… 所以…* ou *因为… 但是…* sont faux." },
            { t: "verifie", q: "Complète : ___我感冒了，所以今天没去上学。(Comme j'ai un rhume, je ne suis pas allé à l'école aujourd'hui.)", choix: ["因为", "虽然", "如果"], bonne: 0, explication: "La seconde proposition commence par 所以 (donc) : la première donne la **cause**, avec **因为** (yīnwèi). 感冒 (gǎnmào) : avoir un rhume ; 上学 (shàng xué) : aller à l'école." },
          ],
        },
        {
          titre: "L'opposition et la condition",
          blocs: [
            { t: "propriete", titre: "虽然… 但是… : bien que…", md: "虽然汉语很难，但是很有意思 (suīrán Hànyǔ hěn nán, dànshì hěn yǒu yìsi) : bien que le chinois soit difficile, il est très intéressant.\nEn français, « bien que… mais » est une faute ; en chinois, on garde **les deux**. 但是 peut être remplacé par **可是** (kěshì). Quand les deux propositions ont le même sujet, il se place souvent avant 虽然 : 汉语虽然很难，但是很有意思. Pour ajouter « quand même », place **还是** (háishi) devant le verbe : 虽然下雨了，但是我们还是去了公园 (suīrán xià yǔ le, dànshì wǒmen háishi qù le gōngyuán)." },
            { t: "propriete", titre: "如果… 就… : si… alors…", md: "如果 (rúguǒ) ouvre la condition. **就 (jiù)** est un adverbe : il se place **après le sujet** de la seconde proposition, juste devant le verbe. Quand ce sujet n'est pas exprimé, 就 ouvre la proposition." },
            { t: "schema", titre: "Où placer 就 ?", legende: "如果明天下雨，我们就不去公园了 : s'il pleut demain, nous n'irons pas au parc. 如果你有时间，就来我家吧 : si tu as le temps, viens chez moi.", svg: `<svg viewBox="0 0 400 200"><text class="texte" x="12" y="20" style="font-size:14px">Avec un sujet : 就 vient après lui</text><rect class="aplat-papier trait-fin" x="10" y="32" width="124" height="34" rx="6"/><text class="texte" x="72" y="55" text-anchor="middle" style="font-size:16px">如果明天下雨</text><text class="texte" x="140" y="58" style="font-size:16px">，</text><rect class="aplat-papier trait-fin" x="160" y="32" width="56" height="34" rx="6"/><text class="texte" x="188" y="55" text-anchor="middle" style="font-size:16px">我们</text><rect class="aplat trait" x="224" y="32" width="36" height="34" rx="6"/><text class="texte-pigment" x="242" y="55" text-anchor="middle" style="font-size:18px">就</text><rect class="aplat-papier trait-fin" x="268" y="32" width="120" height="34" rx="6"/><text class="texte" x="328" y="55" text-anchor="middle" style="font-size:16px">不去公园了</text><text class="texte-petit" x="72" y="82" text-anchor="middle">rúguǒ míngtiān xià yǔ</text><text class="texte-petit" x="188" y="82" text-anchor="middle">wǒmen</text><text class="texte-petit" x="242" y="82" text-anchor="middle">jiù</text><text class="texte-petit" x="328" y="82" text-anchor="middle">bú qù gōngyuán le</text><text class="texte" x="12" y="122" style="font-size:14px">Sans sujet exprimé : 就 ouvre la proposition</text><rect class="aplat-papier trait-fin" x="10" y="134" width="124" height="34" rx="6"/><text class="texte" x="72" y="157" text-anchor="middle" style="font-size:16px">如果你有时间</text><text class="texte" x="140" y="160" style="font-size:16px">，</text><rect class="aplat trait" x="160" y="134" width="36" height="34" rx="6"/><text class="texte-pigment" x="178" y="157" text-anchor="middle" style="font-size:18px">就</text><rect class="aplat-papier trait-fin" x="204" y="134" width="96" height="34" rx="6"/><text class="texte" x="252" y="157" text-anchor="middle" style="font-size:16px">来我家吧</text><text class="texte-petit" x="72" y="184" text-anchor="middle">rúguǒ nǐ yǒu shíjiān</text><text class="texte-petit" x="178" y="184" text-anchor="middle">jiù</text><text class="texte-petit" x="252" y="184" text-anchor="middle">lái wǒ jiā ba</text></svg>` },
            { t: "attention", md: "*如果你有时间，就我们去看电影* est faux : 就 ne se place jamais devant le sujet. Dis 如果你有时间，**我们就**去看电影 (rúguǒ nǐ yǒu shíjiān, wǒmen jiù qù kàn diànyǐng)." },
            { t: "verifie", q: "Quelle phrase dit correctement « Bien que ce vêtement soit joli, il est trop cher » ?", choix: ["虽然这件衣服很漂亮，但是太贵了。", "虽然这件衣服很漂亮，所以太贵了。", "如果这件衣服很漂亮，但是太贵了。"], bonne: 0, explication: "虽然 (suīrán) appelle **但是** (dànshì) : on oppose la beauté et le prix. On ne mélange pas les paires. 贵 (guì) : cher ; 太…了 (tài… le) : trop." },
          ],
        },
        {
          titre: "Ajouter, choisir, enchaîner",
          blocs: [
            { t: "propriete", titre: "不但… 而且… : non seulement… mais en plus…", md: "Avec un seul sujet, il se place **avant** 不但 : 她不但会说汉语，而且会写汉字 (tā búdàn huì shuō Hànyǔ, érqiě huì xiě Hànzì) : non seulement elle parle chinois, mais en plus elle écrit les caractères." },
            { t: "tableau", titre: "« Ou » : question ou affirmation ?", entetes: ["Mot", "Emploi", "Exemple"], lignes: [["还是 (háishi)", "dans une **question** qui propose un choix", "你喝茶还是喝咖啡？(nǐ hē chá háishi hē kāfēi ?) Tu bois du thé ou du café ?"], ["或者 (huòzhě)", "dans une **affirmation**", "周末我看书或者看电影。(zhōumò wǒ kàn shū huòzhě kàn diànyǐng) Le week-end, je lis ou je regarde un film."]] },
            { t: "texte", md: "Pour raconter dans l'ordre : **先** (xiān : d'abord) devant le premier verbe, **然后** (ránhòu : ensuite) en tête de la suite, **最后** (zuìhòu : enfin) pour terminer. 我先做作业，然后看电视，最后睡觉 (wǒ xiān zuò zuòyè, ránhòu kàn diànshì, zuìhòu shuì jiào) : d'abord je fais mes devoirs, ensuite je regarde la télé, enfin je dors." },
            { t: "exemple", titre: "Un petit paragraphe argumenté", md: "虽然我很喜欢上海，但是我更喜欢北京。(Suīrán wǒ hěn xǐhuan Shànghǎi, dànshì wǒ gèng xǐhuan Běijīng.) J'aime beaucoup Shanghai, mais je préfère Pékin.\n因为北京有很多有名的地方，所以每年有很多游客。(Yīnwèi Běijīng yǒu hěn duō yǒumíng de dìfang, suǒyǐ měi nián yǒu hěn duō yóukè.) Comme Pékin a beaucoup de lieux célèbres, il y a beaucoup de touristes chaque année.\n如果你明年来中国，我们就一起去长城吧！(Rúguǒ nǐ míngnián lái Zhōngguó, wǒmen jiù yìqǐ qù Chángchéng ba !) Si tu viens en Chine l'an prochain, allons ensemble à la Grande Muraille !" },
            { t: "verifie", q: "Complète la question : 你想去北京___去上海？(Veux-tu aller à Pékin ou à Shanghai ?)", choix: ["还是", "或者", "而且"], bonne: 0, explication: "Dans une **question** qui propose un choix, « ou » se dit **还是** (háishi). 或者 (huòzhě) s'emploie dans une affirmation ; 而且 (érqiě) ajoute une idée." },
          ],
        },
      ],
      bilan: "Cause, obstacle, condition d'abord, conséquence ensuite ; deux serre-livres par phrase, 就 après le sujet, 还是 pour demander et 或者 pour affirmer : tes idées tiennent debout.",
    },

    // ───────────────────────── 5. 把 et 被 ─────────────────────────
    "3e-chinois-05-ba-bei-introduction": {
      accroche: "« Le gâteau ? Mon petit frère l'a mangé ! » Pour mettre un objet en avant, le chinois a deux outils : **把** pour insister sur ce qu'on **fait** d'un objet, **被** pour dire ce qu'un objet ou une personne **subit**. Deux petits caractères, et l'ordre de la phrase se met à bouger.",
      objectifs: [
        "Construire une phrase simple avec 把 : sujet + 把 + objet + verbe + complément",
        "Construire une phrase passive simple avec 被",
        "Choisir entre phrase ordinaire, phrase en 把 et phrase en 被",
      ],
      sections: [
        {
          titre: "把 : l'objet passe devant le verbe",
          blocs: [
            { t: "texte", md: "Dans une phrase ordinaire, l'objet suit le verbe : 我打开了门 (wǒ dǎkāi le mén) : j'ai ouvert la porte. Avec **把 (bǎ)**, on déplace l'objet **devant le verbe**, pour insister sur **ce qu'on en fait** : 我把门打开了 (wǒ bǎ mén dǎkāi le)." },
            { t: "propriete", titre: "Le schéma de la phrase en 把", md: "**sujet + 把 + objet précis + verbe + autre élément**\n我把作业做完了 (wǒ bǎ zuòyè zuòwán le) : j'ai fini mes devoirs.\n请把手机放在桌子上 (qǐng bǎ shǒujī fàng zài zhuōzi shang) : pose le portable sur la table, s'il te plaît." },
            { t: "tableau", titre: "Ce qui peut suivre le verbe", entetes: ["Après le verbe", "Exemple", "Sens"], lignes: [["un résultat", "我把杯子打破了。(wǒ bǎ bēizi dǎpò le)", "J'ai cassé le verre."], ["une direction", "我把作业带来了。(wǒ bǎ zuòyè dàilái le)", "J'ai apporté mes devoirs."], ["在 + lieu", "他把书放在书包里了。(tā bǎ shū fàng zài shūbāo li le)", "Il a mis le livre dans son cartable."], ["给 + personne", "请把盐给我。(qǐng bǎ yán gěi wǒ)", "Passe-moi le sel, s'il te plaît."]] },
          ],
        },
        {
          titre: "Les trois règles de 把",
          blocs: [
            { t: "liste", titre: "À respecter à chaque fois", ordonnee: true, items: ["**Le verbe n'est jamais seul.** Il est suivi d'un résultat (做完, 打破, 洗干净 xǐ gānjìng), d'une direction (带来 dàilái), de 在 + lieu, de 给 + personne, ou au moins de 了. *我把书看* est incomplet.", "**L'objet est précis**, déjà connu : 这本书 (zhè běn shū : ce livre), 我的手机 (mon portable), la porte dont on parle. Pas *一本书* (un livre quelconque).", "**La négation et la défense se placent avant 把** : 我没把作业带来 (wǒ méi bǎ zuòyè dàilái) : je n'ai pas apporté mes devoirs ; 别把杯子打破了 (bié bǎ bēizi dǎpò le) : ne casse pas le verre !"] },
            { t: "attention", md: "*我把一本书看* cumule deux fautes : un objet imprécis et un verbe seul. Correct : 我把这本书看完了 (wǒ bǎ zhè běn shū kànwán le) : j'ai fini de lire ce livre. Et *我把钥匙没带来* est faux : dis 我**没把**钥匙带来 (wǒ méi bǎ yàoshi dàilái) : je n'ai pas apporté les clés." },
            { t: "verifie", q: "« Ne ferme pas la fenêtre ! » se dit :", choix: ["别把窗户关上！", "把别窗户关上！", "把窗户别关上！", "别关上把窗户！"], bonne: 0, explication: "La défense **别** (bié) se place **avant 把** ; puis l'objet précis 窗户 (chuānghu : la fenêtre) et le verbe avec son complément 关上 (guānshàng : fermer) : 别把窗户关上！" },
          ],
        },
        {
          titre: "被 : la phrase passive",
          blocs: [
            { t: "propriete", titre: "Ce qui subit + 被 + (auteur) + verbe + complément", md: "蛋糕被弟弟吃了 (dàngāo bèi dìdi chī le) : le gâteau a été mangé par mon petit frère.\nPas besoin du verbe « être » : **被 (bèi)** suffit. Comme avec 把, le verbe est suivi d'un complément ou au moins de 了." },
            { t: "texte", md: "L'auteur de l'action est **facultatif** : 我的自行车被偷了 (wǒ de zìxíngchē bèi tōu le) : mon vélo a été volé (on ne sait pas par qui). Pour le préciser, place-le juste après 被 : 我的手机被小偷偷了 (wǒ de shǒujī bèi xiǎotōu tōu le) : mon portable a été volé par un voleur." },
            { t: "savais-tu", md: "À l'origine, 被 veut dire « subir ». Voilà pourquoi la phrase en 被 sert surtout pour des événements **subis**, souvent désagréables : un vol, une casse, une mauvaise surprise. Pour un événement neutre, le chinois préfère souvent une phrase ordinaire." },
            { t: "verifie", q: "Que signifie 我的巧克力被小狗吃了 (wǒ de qiǎokèlì bèi xiǎo gǒu chī le) ?", choix: ["Mon chocolat a été mangé par le chiot.", "J'ai donné mon chocolat au chiot.", "Le chiot n'aime pas le chocolat.", "J'ai mangé le chocolat du chiot."], bonne: 0, explication: "Le chocolat (巧克力) **subit** l'action : 被 + l'auteur 小狗 (xiǎo gǒu : le chiot) + 吃了 (a mangé)." },
          ],
        },
        {
          titre: "Une scène, trois phrases",
          blocs: [
            { t: "schema", titre: "Qui agit ? Qui subit ?", legende: "弟弟 (dìdi) : petit frère ; 杯子 (bēizi) : verre ; 打破 (dǎpò) : casser. Les trois phrases racontent la même scène : mon petit frère a cassé le verre. Seul le point de vue change.", svg: `<svg viewBox="0 0 400 256"><text class="texte" x="12" y="18" style="font-size:14px">Phrase ordinaire : on raconte</text><rect class="c-bleu" fill-opacity=".28" x="20" y="28" width="56" height="34" rx="6"/><rect class="trait-fin" x="20" y="28" width="56" height="34" rx="6"/><text class="texte" x="48" y="51" text-anchor="middle" style="font-size:18px">弟弟</text><rect class="c-vert" fill-opacity=".3" x="84" y="28" width="76" height="34" rx="6"/><rect class="trait-fin" x="84" y="28" width="76" height="34" rx="6"/><text class="texte" x="122" y="51" text-anchor="middle" style="font-size:18px">打破了</text><rect class="c-orange" fill-opacity=".3" x="168" y="28" width="56" height="34" rx="6"/><rect class="trait-fin" x="168" y="28" width="56" height="34" rx="6"/><text class="texte" x="196" y="51" text-anchor="middle" style="font-size:18px">杯子</text><text class="texte-petit" x="48" y="76" text-anchor="middle">qui agit</text><text class="texte-petit" x="122" y="76" text-anchor="middle">verbe + résultat</text><text class="texte-petit" x="196" y="76" text-anchor="middle">objet</text><text class="texte" x="12" y="104" style="font-size:14px">Avec 把 : ce que le petit frère a fait du verre</text><rect class="c-bleu" fill-opacity=".28" x="20" y="114" width="56" height="34" rx="6"/><rect class="trait-fin" x="20" y="114" width="56" height="34" rx="6"/><text class="texte" x="48" y="137" text-anchor="middle" style="font-size:18px">弟弟</text><rect class="aplat trait" x="84" y="114" width="36" height="34" rx="6"/><text class="texte-pigment" x="102" y="137" text-anchor="middle" style="font-size:18px">把</text><rect class="c-orange" fill-opacity=".3" x="128" y="114" width="56" height="34" rx="6"/><rect class="trait-fin" x="128" y="114" width="56" height="34" rx="6"/><text class="texte" x="156" y="137" text-anchor="middle" style="font-size:18px">杯子</text><rect class="c-vert" fill-opacity=".3" x="200" y="114" width="76" height="34" rx="6"/><rect class="trait-fin" x="200" y="114" width="76" height="34" rx="6"/><text class="texte" x="238" y="137" text-anchor="middle" style="font-size:18px">打破了</text><text class="texte-petit" x="48" y="162" text-anchor="middle">qui agit</text><text class="texte-petit" x="156" y="162" text-anchor="middle">objet précis</text><text class="texte-petit" x="238" y="162" text-anchor="middle">verbe + résultat</text><text class="texte" x="12" y="190" style="font-size:14px">Avec 被 : ce que le verre a subi</text><rect class="c-orange" fill-opacity=".3" x="20" y="200" width="56" height="34" rx="6"/><rect class="trait-fin" x="20" y="200" width="56" height="34" rx="6"/><text class="texte" x="48" y="223" text-anchor="middle" style="font-size:18px">杯子</text><rect class="aplat trait" x="84" y="200" width="36" height="34" rx="6"/><text class="texte-pigment" x="102" y="223" text-anchor="middle" style="font-size:18px">被</text><rect class="c-bleu" fill-opacity=".28" x="128" y="200" width="56" height="34" rx="6"/><rect class="trait-fin" x="128" y="200" width="56" height="34" rx="6"/><text class="texte" x="156" y="223" text-anchor="middle" style="font-size:18px">弟弟</text><rect class="c-vert" fill-opacity=".3" x="200" y="200" width="76" height="34" rx="6"/><rect class="trait-fin" x="200" y="200" width="76" height="34" rx="6"/><text class="texte" x="238" y="223" text-anchor="middle" style="font-size:18px">打破了</text><text class="texte-petit" x="48" y="248" text-anchor="middle">qui subit</text><text class="texte-petit" x="156" y="248" text-anchor="middle">auteur</text><text class="texte-petit" x="238" y="248" text-anchor="middle">verbe + résultat</text><rect class="c-bleu" fill-opacity=".28" x="300" y="150" width="14" height="14" rx="3"/><text class="texte-petit" x="320" y="161">le petit frère</text><rect class="c-orange" fill-opacity=".3" x="300" y="172" width="14" height="14" rx="3"/><text class="texte-petit" x="320" y="183">le verre</text><rect class="c-vert" fill-opacity=".3" x="300" y="194" width="14" height="14" rx="3"/><text class="texte-petit" x="320" y="205">l'action</text></svg>` },
            { t: "tableau", titre: "Trois points de vue", entetes: ["Phrase", "Ce qu'elle met en avant", "Sens"], lignes: [["弟弟打破了杯子。(dìdi dǎpò le bēizi)", "on raconte simplement", "Mon petit frère a cassé le verre."], ["弟弟把杯子打破了。(dìdi bǎ bēizi dǎpò le)", "ce que le sujet a **fait** du verre", "Mon petit frère a cassé le verre."], ["杯子被弟弟打破了。(bēizi bèi dìdi dǎpò le)", "ce que le verre a **subi**", "Le verre a été cassé par mon petit frère."]] },
            { t: "astuce", md: "Pour choisir, demande-toi : le sujet **agit** sur l'objet ? → **把** : 妈妈把衣服洗干净了 (māma bǎ yīfu xǐ gānjìng le) : maman a bien lavé les vêtements. Le sujet **subit** l'action ? → **被** : 鱼被小猫吃了 (yú bèi xiǎo māo chī le) : le poisson a été mangé par le chaton." },
            { t: "exemple", titre: "À la maison", md: "Maman : 你把房间收拾好了吗？(Nǐ bǎ fángjiān shōushi hǎo le ma ?) As-tu rangé ta chambre ?\nMoi : 收拾好了！可是我的巧克力被小狗吃了……(Shōushi hǎo le ! Kěshì wǒ de qiǎokèlì bèi xiǎo gǒu chī le…) Oui ! Mais mon chocolat a été mangé par le chiot…" },
          ],
        },
      ],
      bilan: "把 : sujet + 把 + objet précis + verbe + complément, pour ce qu'on fait. 被 : ce qui subit + 被 + (auteur) + verbe + complément, pour ce qu'on subit. Dans les deux cas, le verbe n'est jamais seul.",
    },

    // ───────────────────────── 6. Technologie et vie moderne ─────────────────────────
    "3e-chinois-06-technologie-vie-moderne": {
      accroche: "En chinois, l'ordinateur est un « cerveau électrique » (电脑 diànnǎo) et le téléphone portable une « machine de la main » (手机 shǒujī). Les mots du numérique sont souvent de petites images très logiques. Et en Chine, ce téléphone sert à presque tout : discuter, payer, louer un vélo, commander un repas…",
      objectifs: [
        "Nommer les objets et les usages du numérique",
        "Dire combien de temps et à quelle fréquence tu utilises les écrans",
        "Donner ton avis sur le numérique avec 我觉得",
        "Connaître quelques faits de la vie numérique en Chine",
      ],
      sections: [
        {
          titre: "Des mots construits comme des images",
          blocs: [
            { t: "tableau", titre: "Les objets", entetes: ["Mot", "Pinyin", "Sens", "Mot à mot"], lignes: [["手机", "shǒujī", "téléphone portable", "main + machine"], ["电脑", "diànnǎo", "ordinateur", "électricité + cerveau"], ["平板电脑", "píngbǎn diànnǎo", "tablette", "plaque plate + ordinateur"], ["耳机", "ěrjī", "écouteurs", "oreille + machine"], ["充电器", "chōngdiànqì", "chargeur", "remplir + électricité + appareil"]] },
            { t: "savais-tu", md: "**电 (diàn)**, l'électricité, se cache dans beaucoup de mots modernes : 电话 (diànhuà : téléphone, « parole électrique »), 电视 (diànshì : télévision, « vue électrique »), 电影 (diànyǐng : film, « ombre électrique ») et 电脑 (diànnǎo : ordinateur, « cerveau électrique »)." },
            { t: "tableau", titre: "Les actions", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [["上网", "shàng wǎng", "aller sur internet (« monter sur le réseau »)"], ["在网上", "zài wǎngshàng", "sur internet"], ["发短信", "fā duǎnxìn", "envoyer un SMS (« message court »)"], ["打电话", "dǎ diànhuà", "téléphoner"], ["拍照", "pāi zhào", "prendre une photo"], ["看视频", "kàn shìpín", "regarder des vidéos"], ["玩游戏", "wán yóuxì", "jouer aux jeux vidéo"], ["下载", "xiàzài", "télécharger (« charger vers le bas »)"]] },
          ],
        },
        {
          titre: "Combien de temps ? Combien de fois ?",
          blocs: [
            { t: "propriete", titre: "La durée se place après le verbe", md: "Le **moment** (每天 měi tiān, 昨天 zuótiān, 晚上 wǎnshang) se place **avant** le verbe ; la **durée** (一个小时 yí ge xiǎoshí : une heure) se place **après** :\n我每天上网一个小时 (wǒ měi tiān shàng wǎng yí ge xiǎoshí) : je vais sur internet une heure par jour.\nSi le verbe a un objet, on **répète le verbe** : 他昨天玩游戏玩了三个小时 (tā zuótiān wán yóuxì wán le sān ge xiǎoshí) : hier, il a joué aux jeux vidéo pendant trois heures." },
            { t: "attention", md: "Devant un classificateur, « deux » se dit **两** (liǎng), pas 二 : 两个小时 (liǎng ge xiǎoshí) : deux heures. 二 (èr) sert pour compter et dans les nombres (十二, 二十)." },
            { t: "schema", titre: "Du jamais au tous les jours", legende: "Les mots de fréquence se placent devant le verbe, comme 常常. Avec 每天, on ajoute souvent 都 (dōu : à chaque fois) : 我每天晚上都在网上看视频 (wǒ měi tiān wǎnshang dōu zài wǎngshàng kàn shìpín).", svg: `<svg viewBox="0 0 400 170"><line class="trait" x1="18" y1="76" x2="388" y2="76" marker-end="url(#fl)"/><circle class="aplat-fort" cx="50" cy="76" r="3"/><circle class="aplat-fort" cx="125" cy="76" r="5"/><circle class="aplat-fort" cx="200" cy="76" r="7"/><circle class="aplat-fort" cx="275" cy="76" r="9"/><circle class="aplat-fort" cx="350" cy="76" r="11"/><text class="texte" x="50" y="50" text-anchor="middle" style="font-size:16px">从来不</text><text class="texte" x="125" y="50" text-anchor="middle" style="font-size:16px">很少</text><text class="texte" x="200" y="50" text-anchor="middle" style="font-size:16px">有时候</text><text class="texte" x="275" y="50" text-anchor="middle" style="font-size:16px">常常</text><text class="texte" x="350" y="50" text-anchor="middle" style="font-size:16px">每天</text><text class="texte-petit" x="50" y="106" text-anchor="middle">cónglái bù</text><text class="texte-petit" x="125" y="106" text-anchor="middle">hěn shǎo</text><text class="texte-petit" x="200" y="106" text-anchor="middle">yǒu shíhou</text><text class="texte-petit" x="275" y="106" text-anchor="middle">chángcháng</text><text class="texte-petit" x="350" y="106" text-anchor="middle">měi tiān</text><text class="texte" x="50" y="124" text-anchor="middle">jamais</text><text class="texte" x="125" y="124" text-anchor="middle">rarement</text><text class="texte" x="200" y="124" text-anchor="middle">parfois</text><text class="texte" x="275" y="124" text-anchor="middle">souvent</text><text class="texte" x="350" y="124" text-anchor="middle">chaque jour</text><text class="texte-pigment" x="200" y="158" text-anchor="middle" style="font-size:14px">devant le verbe : 我很少玩游戏。</text></svg>` },
            { t: "verifie", q: "Comment dit-on « Je vais sur internet deux heures par jour » ?", choix: ["我每天上网两个小时。", "我每天上网二个小时。", "我两个小时每天上网。"], bonne: 0, explication: "Le moment 每天 avant le verbe, la durée 两个小时 après : 我每天上网两个小时 (wǒ měi tiān shàng wǎng liǎng ge xiǎoshí). Devant 个, « deux » se dit 两, jamais 二." },
          ],
        },
        {
          titre: "Donner son avis",
          blocs: [
            { t: "liste", titre: "Pour juger", items: ["我觉得… (wǒ juéde…) : je trouve que…", "方便 (fāngbiàn) : pratique", "有用 (yǒuyòng) : utile", "有意思 (yǒu yìsi) : intéressant", "对眼睛不好 (duì yǎnjing bù hǎo) : mauvais pour les yeux", "我很少玩游戏 (wǒ hěn shǎo wán yóuxì) : je joue rarement aux jeux vidéo"] },
            { t: "exemple", titre: "Mes habitudes numériques", md: "我每天用手机。我常常给朋友发微信，有时候在网上看视频。我觉得手机很方便，但是玩得太多对眼睛不好。\n(Wǒ měi tiān yòng shǒujī. Wǒ chángcháng gěi péngyou fā Wēixìn, yǒu shíhou zài wǎngshàng kàn shìpín. Wǒ juéde shǒujī hěn fāngbiàn, dànshì wán de tài duō duì yǎnjing bù hǎo.)\nJ'utilise mon portable tous les jours. J'envoie souvent des messages WeChat à mes amis, et parfois je regarde des vidéos sur internet. Je trouve le portable très pratique, mais trop jouer, c'est mauvais pour les yeux." },
            { t: "texte", md: "Lis ce message d'un ami : 我常常玩手机玩到很晚，所以早上起不来。(Wǒ chángcháng wán shǒujī wán dào hěn wǎn, suǒyǐ zǎoshang qǐ bu lái.)\n\n玩到很晚 (wán dào hěn wǎn) : jouer **jusqu'à** tard ; 所以 annonce la conséquence ; 起不来 (qǐ bu lái) : ne pas **arriver** à se lever, avec 不 entre le verbe et le complément, comme dans 听不懂. Son problème : il joue tard sur son téléphone, donc il n'arrive pas à se lever le matin." },
          ],
        },
        {
          titre: "La vie numérique en Chine",
          blocs: [
            { t: "texte", md: "En Chine, le téléphone sert très souvent de porte-monnaie. Dans les magasins, les restaurants et même sur les marchés, on paie en **scannant un code QR** : 扫码 (sǎo mǎ). Le code lui-même s'appelle **二维码** (èrwéimǎ : « code à deux dimensions »)." },
            { t: "definition", terme: "微信 (Wēixìn)", md: "WeChat, une application de messagerie très utilisée en Chine. Elle permet aussi d'envoyer de l'argent et de payer. 微 (wēi) = tout petit, 信 (xìn) = message, lettre. Une autre application de paiement très courante s'appelle 支付宝 (Zhīfùbǎo)." },
            { t: "etapes", titre: "Payer avec son téléphone", items: [{ titre: "Ouvrir l'application", md: "微信 (Wēixìn) ou 支付宝 (Zhīfùbǎo), sur son 手机." }, { titre: "Scanner le code", md: "扫码 (sǎo mǎ) : on vise le 二维码 (èrwéimǎ) du magasin avec l'appareil photo." }, { titre: "Taper le montant", md: "Par exemple 二十块 (èrshí kuài : vingt yuans)." }, { titre: "Confirmer", md: "Avec un code secret : c'est payé, sans pièces ni billets." }] },
            { t: "tableau", titre: "D'autres mots de la vie quotidienne", entetes: ["Mot", "Pinyin", "Sens"], lignes: [["外卖", "wàimài", "repas livré à domicile (« vendu dehors »)"], ["共享单车", "gòngxiǎng dānchē", "vélo en libre-service (« vélo partagé »)"], ["高铁", "gāotiě", "train à grande vitesse"]] },
            { t: "savais-tu", md: "La Chine possède le plus long réseau de lignes à grande vitesse du monde : le 高铁 (gāotiě) relie Pékin à Shanghai, environ 1 300 km, en un peu plus de quatre heures." },
            { t: "verifie", q: "Que signifie 扫码 (sǎo mǎ) ?", choix: ["scanner un code", "télécharger une application", "envoyer un SMS", "recharger son téléphone"], bonne: 0, explication: "扫 (sǎo) = balayer, scanner ; 码 (mǎ) = code. On scanne le 二维码 (code QR) pour payer. Télécharger se dit 下载 (xiàzài), envoyer un SMS 发短信 (fā duǎnxìn)." },
          ],
        },
      ],
      bilan: "Une machine dans la main (手机), un cerveau électrique sur le bureau (电脑) ; la durée après le verbe, la fréquence devant, et un avis bien pesé avec 我觉得 : tu sais parler de ta vie numérique.",
    },

    // ───────────────────────── 7. Environnement et villes ─────────────────────────
    "3e-chinois-07-environnement-villes": {
      accroche: "En 1980, moins d'un Chinois sur cinq vivait en ville. Aujourd'hui, c'est presque deux sur trois ! Métro, embouteillages et gratte-ciel d'un côté ; air frais, champs et calme de l'autre. Apprends à comparer la ville et la campagne, à décrire ce qui change, et à dire ce qu'il faut faire pour protéger l'environnement.",
      objectifs: [
        "Décrire et comparer la ville et la campagne avec 比, 没有… 那么 et 越来越",
        "Parler de l'environnement et conseiller avec 应该 et 别",
        "Situer quelques repères géographiques de la Chine : fleuves, villes, pandas",
      ],
      sections: [
        {
          titre: "Ville ou campagne ?",
          blocs: [
            { t: "tableau", titre: "Deux mondes", entetes: ["La ville : 城市 (chéngshì)", "La campagne : 农村 (nóngcūn)"], lignes: [["热闹 (rènao) : animé", "安静 (ānjìng) : calme"], ["地铁 (dìtiě) : métro", "自行车 (zìxíngchē) : vélo"], ["交通 (jiāotōng) : circulation ; 堵车 (dǔ chē) : embouteillage", "空气 (kōngqì) : air ; 新鲜 (xīnxiān) : frais"], ["方便 (fāngbiàn) : pratique", "人很少 (rén hěn shǎo) : il y a peu de monde"]] },
            { t: "texte", md: "Dans une simple description, l'adjectif est précédé de 很 : 城市很热闹，农村很安静 (chéngshì hěn rènao, nóngcūn hěn ānjìng) : la ville est très animée, la campagne très calme. 农村 signifie mot à mot « village agricole » ; 堵车, « voitures bouchées »." },
            { t: "exemple", titre: "Shanghai et le village des grands-parents", md: "我住在上海。上海很热闹，地铁很方便，但是常常堵车。我爷爷奶奶住在农村，那儿的空气比城市的新鲜。\n(Wǒ zhù zài Shànghǎi. Shànghǎi hěn rènao, dìtiě hěn fāngbiàn, dànshì chángcháng dǔ chē. Wǒ yéye nǎinai zhù zài nóngcūn, nàr de kōngqì bǐ chéngshì de xīnxiān.)\nJ'habite à Shanghai. Shanghai est très animée, le métro est très pratique, mais il y a souvent des embouteillages. Mes grands-parents habitent à la campagne : l'air y est plus frais qu'en ville." },
          ],
        },
        {
          titre: "Comparer et dire ce qui change",
          blocs: [
            { t: "propriete", titre: "Trois structures", md: "**A 比 B + adjectif** : 农村比城市安静 (nóngcūn bǐ chéngshì ānjìng) : la campagne est plus calme que la ville.\n**A 没有 B 那么 + adjectif** : 城市没有农村那么安静 (chéngshì méiyǒu nóngcūn nàme ānjìng) : la ville n'est pas aussi calme que la campagne.\n**越来越 + adjectif** (yuè lái yuè) : de plus en plus. 城市越来越大 (chéngshì yuè lái yuè dà) : les villes sont de plus en plus grandes." },
            { t: "attention", md: "Dans une comparaison avec 比, comme après 越来越, n'ajoute **jamais 很** devant l'adjectif : ces structures marquent déjà le degré. *天气越来越很热* est faux : dis 天气越来越热 (tiānqì yuè lái yuè rè) : il fait de plus en plus chaud. Et pour nier une comparaison, n'écris pas *城市比农村不安静* : utilise 没有… 那么." },
            { t: "graphique", type: "courbe", titre: "Part de la population chinoise vivant en ville", unite: "%", donnees: [{ label: "1980", valeur: 19 }, { label: "1990", valeur: 26 }, { label: "2000", valeur: 36 }, { label: "2010", valeur: 50 }, { label: "2020", valeur: 64 }] },
            { t: "texte", md: "城市人口越来越多 (chéngshì rénkǒu yuè lái yuè duō) : la population des villes est de plus en plus nombreuse. Beaucoup d'habitants des campagnes sont venus travailler dans les grandes villes ; aujourd'hui, plus de 60 % des Chinois sont citadins." },
            { t: "verifie", q: "Que signifie 河水越来越干净 (héshuǐ yuè lái yuè gānjìng) ?", choix: ["L'eau de la rivière est de plus en plus propre.", "L'eau de la rivière est très propre.", "L'eau de la rivière est plus propre que celle de la mer.", "L'eau de la rivière était propre autrefois."], bonne: 0, explication: "**越来越 + adjectif** exprime une évolution : « de plus en plus ». 干净 (gānjìng) : propre. « Très propre » serait 很干净 ; une comparaison utiliserait 比." },
          ],
        },
        {
          titre: "Protéger l'environnement",
          blocs: [
            { t: "tableau", titre: "Les mots de l'environnement", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [["环境", "huánjìng", "environnement"], ["保护环境", "bǎohù huánjìng", "protéger l'environnement"], ["污染", "wūrǎn", "pollution, polluer"], ["垃圾", "lājī", "déchets"], ["垃圾分类", "lājī fēnlèi", "trier les déchets"], ["节约用水", "jiéyuē yòng shuǐ", "économiser l'eau"], ["塑料袋", "sùliàodài", "sac plastique"], ["种树", "zhòng shù", "planter des arbres"], ["关灯", "guān dēng", "éteindre la lumière (« fermer la lampe »)"], ["干净 / 脏", "gānjìng / zāng", "propre / sale"]] },
            { t: "propriete", titre: "Conseiller avec 应该, défendre avec 别", md: "**应该** (yīnggāi) + verbe : on devrait, il faut. 我们应该保护环境 (wǒmen yīnggāi bǎohù huánjìng) : nous devons protéger l'environnement.\n**别** (bié) + verbe : ne… pas (défense). 别浪费水 (bié làngfèi shuǐ) : ne gaspille pas l'eau ; 别用塑料袋 (bié yòng sùliàodài) : n'utilise pas de sacs plastique." },
            { t: "exemple", titre: "Des conseils pour la classe", md: "为了保护环境，我们应该多坐地铁，少开车。(Wèile bǎohù huánjìng, wǒmen yīnggāi duō zuò dìtiě, shǎo kāi chē.) Pour protéger l'environnement, nous devrions prendre plus le métro et moins la voiture.\n离开教室的时候，别忘了关灯！(Líkāi jiàoshì de shíhou, bié wàng le guān dēng !) Quand tu quittes la classe, n'oublie pas d'éteindre la lumière !" },
            { t: "astuce", md: "种 se lit **zhòng** quand il signifie « planter » (种树 zhòng shù), mais **zhǒng** quand il veut dire « sorte » (这种 zhè zhǒng : cette sorte). Même caractère, deux lectures !" },
          ],
        },
        {
          titre: "Repères : fleuves, villes et pandas",
          blocs: [
            { t: "carte", fond: "monde", titre: "Quelques repères en Chine", cadre: [72, 18, 136, 50], reperes: [{ nom: "Pékin", lat: 39.9042, lon: 116.4074 }, { nom: "Shanghai", lat: 31.2304, lon: 121.4737 }, { nom: "Wuhan, sur le Yangzi", lat: 30.5928, lon: 114.3055 }, { nom: "Chengdu, au Sichuan", lat: 30.5728, lon: 104.0668 }, { nom: "Lanzhou, sur le fleuve Jaune", lat: 36.0611, lon: 103.8343 }, { nom: "Xi'an", lat: 34.3416, lon: 108.9398 }], legende: "北京 (Běijīng : « capitale du Nord ») : Pékin ; 上海 (Shànghǎi) : Shanghai ; 西安 (Xī'ān) : Xi'an. Shanghai est à l'embouchure du Yangzi (长江 Cháng Jiāng), qui traverse aussi Wuhan ; Lanzhou est sur le fleuve Jaune (黄河 Huáng Hé). Chengdu est la capitale du Sichuan (四川 Sìchuān), le pays des pandas." },
            { t: "texte", md: "Le **长江** (Cháng Jiāng : « long fleuve »), le Yangzi, mesure environ 6 300 km : c'est le plus long fleuve d'Asie et le troisième du monde. Le **黄河** (Huáng Hé : « fleuve Jaune ») est le deuxième de Chine ; il doit son nom au limon jaune qu'il transporte." },
            { t: "definition", terme: "熊猫 (xióngmāo)", md: "Le panda géant, mot à mot « ours-chat ». Il vit à l'état sauvage dans les forêts de bambous des montagnes du centre de la Chine, surtout au **Sichuan** (四川 Sìchuān), et dans les provinces voisines du Shaanxi et du Gansu." },
            { t: "verifie", q: "Que signifie mot à mot 长江 (Cháng Jiāng), le nom chinois du Yangzi ?", choix: ["le long fleuve", "le fleuve jaune", "le grand lac", "la rivière du nord"], bonne: 0, explication: "长 (cháng) = long, 江 (jiāng) = fleuve. Le 长江 est le plus long fleuve d'Asie. Le fleuve Jaune se dit 黄河 (Huáng Hé)." },
          ],
        },
      ],
      bilan: "比 pour comparer, 没有… 那么 pour nuancer, 越来越 pour dire ce qui change, sans jamais de 很 ; 应该 pour conseiller, 别 pour défendre : tu peux décrire ta ville et défendre la planète en chinois.",
    },

    // ───────────────────────── 8. École, avenir et métiers ─────────────────────────
    "3e-chinois-08-ecole-avenir-metiers": {
      accroche: "Médecin, ingénieur, cuisinier, avocat… En chinois, beaucoup de métiers se terminent par le même caractère, comme une signature : 师 pour le maître, 员 pour l'employé. Cette année, tu fais ton stage de 3e et tu penses à ton orientation ; tes camarades chinois, eux, préparent le 中考 (zhōngkǎo).",
      objectifs: [
        "Nommer des métiers et leurs lieux de travail",
        "Parler de tes projets et de tes centres d'intérêt avec 想当, 对… 感兴趣 et 将来",
        "Raconter ton stage de 3e",
        "Comparer l'école en Chine et en France",
      ],
      sections: [
        {
          titre: "Les métiers et leurs lieux",
          blocs: [
            { t: "tableau", titre: "Métiers et lieux de travail", entetes: ["Métier", "Pinyin", "Sens", "Lieu de travail"], lignes: [["医生", "yīshēng", "médecin", "医院 (yīyuàn) : hôpital"], ["护士", "hùshi", "infirmier, infirmière", "医院 (yīyuàn) : hôpital"], ["老师", "lǎoshī", "professeur", "学校 (xuéxiào) : école"], ["工程师", "gōngchéngshī", "ingénieur", "公司 (gōngsī) : entreprise"], ["工人", "gōngrén", "ouvrier", "工厂 (gōngchǎng) : usine"], ["厨师", "chúshī", "cuisinier", "饭馆 (fànguǎn) : restaurant"], ["律师", "lǜshī", "avocat", "法院 (fǎyuàn) : tribunal"], ["记者", "jìzhě", "journaliste", "电视台 (diànshìtái) : chaîne de télévision"], ["警察", "jǐngchá", "policier", "dans la rue, au commissariat"], ["司机", "sījī", "chauffeur", "dans un bus, un taxi"], ["翻译", "fānyì", "traducteur, interprète", "公司 (gōngsī) : entreprise"]] },
            { t: "propriete", titre: "师 et 员", md: "**师 (shī : maître)** termine souvent le nom d'un métier qualifié : 老师, 工程师, 律师, 厨师.\n**员 (yuán : membre)** désigne un membre d'un groupe ou un employé : 服务员 (fúwùyuán : serveur), 演员 (yǎnyuán : acteur), 运动员 (yùndòngyuán : sportif)." },
            { t: "astuce", md: "Repère les caractères partagés : **医** (yī : soigner) dans 医生 et 医院 ; **工** (gōng : travail) dans 工人, 工厂 et 工程师. Le métier et son lieu se ressemblent souvent !" },
            { t: "texte", md: "Pour dire où l'on travaille, **在 + lieu** se place **avant** le verbe : 我爸爸是工程师，他在一家公司工作 (wǒ bàba shì gōngchéngshī, tā zài yì jiā gōngsī gōngzuò) : mon père est ingénieur, il travaille dans une entreprise. 家 (jiā) est ici le classificateur des entreprises et des magasins." },
          ],
        },
        {
          titre: "Parler de ses projets",
          blocs: [
            { t: "tableau", titre: "Les mots du projet", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [["将来 / 以后", "jiānglái / yǐhòu", "plus tard, à l'avenir"], ["我想当医生。", "wǒ xiǎng dāng yīshēng", "Je veux devenir médecin."], ["我打算上大学。", "wǒ dǎsuàn shàng dàxué", "J'ai l'intention d'aller à l'université."], ["我希望…", "wǒ xīwàng…", "J'espère…"], ["我的梦想是当一名医生。", "wǒ de mèngxiǎng shì dāng yì míng yīshēng", "Mon rêve est de devenir médecin."]] },
            { t: "propriete", titre: "对 + domaine + (很) 感兴趣", md: "S'intéresser à : le domaine se place **entre 对 et 感兴趣**.\n我对科学很感兴趣 (wǒ duì kēxué hěn gǎn xìngqù) : je m'intéresse beaucoup aux sciences.\n我对音乐很感兴趣 (wǒ duì yīnyuè hěn gǎn xìngqù) : je m'intéresse beaucoup à la musique." },
            { t: "attention", md: "N'oublie pas **当** (dāng : devenir, exercer le rôle de) : *我想工程师* n'a pas de verbe. Dis 将来我想**当**工程师 (jiānglái wǒ xiǎng dāng gōngchéngshī) : plus tard, je veux devenir ingénieur. Dans 一名 (yì míng), 名 est un classificateur soutenu pour les personnes." },
            { t: "verifie", q: "Complète : 我___历史很感兴趣。(Je m'intéresse beaucoup à l'histoire.)", choix: ["对", "在", "给", "把"], bonne: 0, explication: "**对** + domaine + 很感兴趣 : 我对历史很感兴趣 (wǒ duì lìshǐ hěn gǎn xìngqù). 历史 (lìshǐ) : l'histoire. 在 introduit un lieu, 给 un bénéficiaire, 把 un objet." },
          ],
        },
        {
          titre: "Raconter son stage",
          blocs: [
            { t: "texte", md: "Le stage d'observation se dit **实习** (shíxí). Pour le raconter, place le **lieu avant** le verbe et la **durée après** le verbe et 了 : 我在医院实习了一个星期 (wǒ zài yīyuàn shíxí le yí ge xīngqī) : j'ai fait un stage d'une semaine à l'hôpital." },
            { t: "exemple", titre: "Mon stage chez le vétérinaire", md: "我对动物很感兴趣，所以将来我想当兽医。我在一家动物医院实习了一个星期。虽然工作很累，但是我觉得很有意思。\n(Wǒ duì dòngwù hěn gǎn xìngqù, suǒyǐ jiānglái wǒ xiǎng dāng shòuyī. Wǒ zài yì jiā dòngwù yīyuàn shíxí le yí ge xīngqī. Suīrán gōngzuò hěn lèi, dànshì wǒ juéde hěn yǒu yìsi.)\nJe m'intéresse beaucoup aux animaux, donc plus tard je veux devenir vétérinaire. J'ai fait un stage d'une semaine dans une clinique vétérinaire. Bien que le travail soit fatigant, je l'ai trouvé très intéressant.\n动物 (dòngwù) : animal ; 兽医 (shòuyī) : vétérinaire ; 累 (lèi) : fatigant." },
            { t: "verifie", q: "Quelle phrase dit « J'ai fait un stage de deux semaines dans une entreprise » ?", choix: ["我在一家公司实习了两个星期。", "我实习了在一家公司两个星期。", "我两个星期在一家公司实习了。"], bonne: 0, explication: "Le lieu (在一家公司) avant le verbe, la durée (两个星期 liǎng ge xīngqī) après le verbe et 了 : 我在一家公司实习了两个星期." },
          ],
        },
        {
          titre: "L'école en Chine",
          blocs: [
            { t: "etapes", titre: "Le parcours scolaire chinois", items: [{ titre: "小学 (xiǎoxué) : l'école primaire", md: "En général 6 ans, à partir de 6 ans." }, { titre: "初中 (chūzhōng) : le collège", md: "3 ans. 初 (chū) = début, 中 = 中学 (zhōngxué), l'école secondaire." }, { titre: "中考 (zhōngkǎo)", md: "L'examen de fin de collège : il décide de l'entrée au lycée." }, { titre: "高中 (gāozhōng) : le lycée", md: "3 ans, avec beaucoup de travail." }, { titre: "高考 (gāokǎo)", md: "En juin, le grand examen d'entrée à l'université." }, { titre: "大学 (dàxué) : l'université", md: "Le résultat du 高考 décide en grande partie de l'université où l'on entre." }] },
            { t: "tableau", titre: "En France et en Chine", entetes: ["Étape", "En France", "En Chine"], lignes: [["école primaire", "5 ans (du CP au CM2)", "小学 (xiǎoxué) : 6 ans en général"], ["collège", "4 ans (de la 6e à la 3e)", "初中 (chūzhōng) : 3 ans"], ["examen de fin de collège", "le diplôme national du brevet", "中考 (zhōngkǎo)"], ["lycée", "3 ans", "高中 (gāozhōng) : 3 ans"], ["examen de fin de lycée", "le baccalauréat", "高考 (gāokǎo)"]] },
            { t: "savais-tu", md: "Le 高考 est un événement national : chaque année, plus de dix millions de candidats le passent en même temps, à partir du 7 juin. Ne confonds pas : le **中考** à la fin du 初中, le **高考** à la fin du 高中." },
          ],
        },
      ],
      bilan: "师 pour le maître, 员 pour l'employé, 在 + lieu avant le verbe, 对… 感兴趣 pour tes passions et 想当 pour ton avenir : du stage de 3e au 高考, tu sais parler d'école et de métiers.",
    },

    // ───────────────────────── 9. Histoire et culture ─────────────────────────
    "3e-chinois-09-histoire-culture": {
      accroche: "Pourquoi la langue chinoise s'appelle-t-elle 汉语 (Hànyǔ), « la langue des Han » ? Parce qu'une dynastie a laissé une trace si forte qu'elle a donné son nom à la langue, à l'écriture et au groupe majoritaire du pays. Remonte le temps : de Confucius aux empereurs, du papier à la boussole, jusqu'aux caravanes de la Route de la soie.",
      objectifs: [
        "Présenter Confucius et une de ses maximes",
        "Situer les grandes dynasties dans l'ordre",
        "Nommer les quatre grandes inventions chinoises",
        "Expliquer le rôle de la Route de la soie",
      ],
      sections: [
        {
          titre: "Confucius, le maître",
          blocs: [
            { t: "definition", terme: "孔子 (Kǒngzǐ), Confucius", md: "Penseur et maître de l'Antiquité chinoise (551-479 av. J.-C.). Il enseigne l'**étude**, le **respect des parents** et la **bienveillance** envers les autres, 仁 (rén). Après sa mort, ses disciples réunissent ses paroles dans les **Entretiens**, 《论语》 (Lúnyǔ)." },
            { t: "citation", texte: "己所不欲，勿施于人。(jǐ suǒ bú yù, wù shī yú rén)\n« Ce que tu ne veux pas pour toi, ne l'impose pas aux autres. »", auteur: "Confucius", source: "Entretiens (《论语》), livre XV" },
            { t: "texte", md: "Lis la maxime mot à mot : 己 (jǐ) soi-même, 所不欲 (suǒ bú yù) ce qu'on ne désire pas, 勿 (wù) ne pas, 施 (shī) imposer, 于人 (yú rén) aux autres. C'est du **chinois classique** : très court, très dense, et chaque caractère compte." },
            { t: "citation", texte: "三人行，必有我师焉。(sān rén xíng, bì yǒu wǒ shī yān)\n« Quand je marche avec deux autres personnes, je trouve forcément en elles un maître. »", auteur: "Confucius", source: "Entretiens (《论语》), livre VII" },
            { t: "savais-tu", md: "Le nom « Confucius » est la forme latinisée de 孔夫子 (Kǒng Fūzǐ), « Maître Kong », donnée par des missionnaires européens. En chinois, on dit simplement 孔子." },
          ],
        },
        {
          titre: "Les grandes dynasties",
          blocs: [
            { t: "texte", md: "Pendant plus de deux mille ans, la Chine est gouvernée par des **dynasties** : des familles impériales qui se succèdent sur le trône. Chacune a laissé des traces que l'on voit encore aujourd'hui." },
            { t: "frise", titre: "De Confucius au dernier empereur", evenements: [{ date: -551, label: "Naissance de Confucius (孔子 Kǒngzǐ)", detail: "Il vit jusqu'en 479 av. J.-C. et enseigne l'étude et la bienveillance." }, { date: -221, label: "秦 Qín : la Chine unifiée", detail: "Le premier empereur, 秦始皇 (Qín Shǐhuáng), impose une même écriture, une même monnaie, les mêmes poids et mesures." }, { date: -206, label: "汉 Hàn", detail: "Jusqu'en 220. Début de la Route de la soie ; la dynastie donne son nom à 汉语 (Hànyǔ) et 汉字 (Hànzì)." }, { date: 105, label: "Le papier de 蔡伦 (Cài Lún)", detail: "Ce fonctionnaire des Han met au point un papier de qualité." }, { date: 618, label: "唐 Táng : l'âge d'or", detail: "Jusqu'en 907. Le poète 李白 (Lǐ Bái, 701-762) ; Chang'an est l'une des plus grandes villes du monde." }, { date: 960, label: "宋 Sòng", detail: "Jusqu'en 1279. Caractères mobiles d'imprimerie (vers 1040) ; boussole utilisée pour naviguer." }, { date: 1271, label: "元 Yuán : dynastie mongole", detail: "Jusqu'en 1368. Le Vénitien Marco Polo séjourne à la cour de Kubilai Khan." }, { date: 1368, label: "明 Míng", detail: "Jusqu'en 1644. Construction de la Cité interdite (故宫 Gùgōng), de 1406 à 1420." }, { date: 1644, label: "清 Qīng", detail: "La dernière dynastie impériale." }, { date: 1912, label: "Fin de l'Empire", detail: "Le dernier empereur abdique : la Chine devient une république." }] },
            { t: "propriete", titre: "Retenir l'ordre des sept grandes dynasties", md: "**秦 Qín → 汉 Hàn → 唐 Táng → 宋 Sòng → 元 Yuán → 明 Míng → 清 Qīng**\nRépète-les comme une comptine : Qín, Hàn, Táng, Sòng, Yuán, Míng, Qīng." },
            { t: "savais-tu", md: "Le tombeau du premier empereur, près de 西安 (Xī'ān), est gardé par des milliers de soldats en terre cuite, les 兵马俑 (bīngmǎyǒng). Des paysans les ont découverts par hasard en 1974, en creusant un puits." },
            { t: "verifie", q: "Quelle dynastie a donné son nom à la langue chinoise, 汉语 (Hànyǔ) ?", choix: ["秦 Qín", "汉 Hàn", "唐 Táng", "清 Qīng"], bonne: 1, explication: "La dynastie **汉** (206 av. J.-C. - 220) a donné son nom à la langue (汉语), aux caractères (汉字 Hànzì) et au groupe majoritaire, les Han (汉族 Hànzú)." },
          ],
        },
        {
          titre: "Les quatre grandes inventions",
          blocs: [
            { t: "tableau", titre: "四大发明 (sì dà fāmíng) : les quatre grandes inventions", entetes: ["Invention", "Chinois", "Mot à mot", "Repère"], lignes: [["le papier", "造纸术 (zàozhǐshù)", "technique de fabrication du papier", "mis au point par 蔡伦 (Cài Lún) vers 105, sous les Han"], ["l'imprimerie", "印刷术 (yìnshuāshù)", "technique d'impression", "planches gravées sous les Tang ; caractères mobiles de 毕昇 (Bì Shēng) vers 1040, sous les Song"], ["la poudre", "火药 (huǒyào)", "remède de feu", "découverte par des alchimistes qui cherchaient des remèdes"], ["la boussole", "指南针 (zhǐnánzhēn)", "aiguille qui indique le sud", "utilisée pour naviguer sous les Song"]] },
            { t: "texte", md: "指南针 se décompose ainsi : 指 (zhǐ) indiquer, 南 (nán) sud, 针 (zhēn) aiguille. Les Chinois repéraient le **sud** ; les Européens, eux, parlent de l'aiguille qui montre le nord." },
            { t: "attention", md: "La **porcelaine** (瓷器 cíqì) et la soie sont de célèbres créations chinoises, mais elles ne font **pas** partie de la liste traditionnelle des quatre grandes inventions : papier, imprimerie, poudre, boussole." },
            { t: "verifie", q: "Que signifie mot à mot 火药 (huǒyào), la poudre ?", choix: ["remède de feu", "aiguille du sud", "papier de feu", "poudre blanche"], bonne: 0, explication: "火 (huǒ) = feu, 药 (yào) = remède, médicament : la poudre a été découverte par des alchimistes qui cherchaient des remèdes." },
          ],
        },
        {
          titre: "La Route de la soie",
          blocs: [
            { t: "definition", terme: "丝绸之路 (sīchóu zhī lù)", md: "La **Route de la soie** : un réseau de routes commerciales qui, dès la dynastie Han, relie 长安 (Cháng'ān, aujourd'hui 西安 Xī'ān) à l'Asie centrale, à la Perse et à la Méditerranée. 丝绸 = soie, 之 = mot de liaison du chinois classique (comme 的), 路 = route." },
            { t: "carte", fond: "monde", titre: "La Route de la soie, de Chang'an à la Méditerranée", cadre: [8, 22, 118, 50], reperes: [{ nom: "Chang'an (Xi'an)", lat: 34.3416, lon: 108.9398 }, { nom: "Dunhuang", lat: 40.1421, lon: 94.6619 }, { nom: "Kashgar", lat: 39.4677, lon: 75.9938 }, { nom: "Samarcande", lat: 39.6542, lon: 66.9597 }, { nom: "Ctésiphon", lat: 33.0936, lon: 44.5808 }, { nom: "Antioche", lat: 36.2021, lon: 36.1601 }, { nom: "Rome", lat: 41.9028, lon: 12.4964 }], traits: [{ de: [34.3416, 108.9398], a: [40.1421, 94.6619] }, { de: [40.1421, 94.6619], a: [39.4677, 75.9938] }, { de: [39.4677, 75.9938], a: [39.6542, 66.9597] }, { de: [39.6542, 66.9597], a: [33.0936, 44.5808] }, { de: [33.0936, 44.5808], a: [36.2021, 36.1601] }, { de: [36.2021, 36.1601], a: [41.9028, 12.4964], label: "par la mer" }], legende: "Un tracé simplifié : en réalité, plusieurs routes passaient d'oasis en oasis, et d'autres branches menaient vers l'Inde." },
            { t: "texte", md: "Les caravanes de chameaux ne faisaient pas tout le trajet : les marchandises passaient de main en main, d'oasis en oasis. On y échangeait la soie (丝绸 sīchóu), très recherchée jusqu'à Rome, mais aussi des chevaux, des épices, du verre… et surtout des **idées** : le **bouddhisme**, né en Inde, est arrivé en Chine par l'Asie centrale vers le Ier siècle de notre ère." },
            { t: "savais-tu", md: "Le nom « Route de la soie » est récent : il a été inventé en **1877** par le géographe allemand Ferdinand von Richthofen. Au VIIe siècle, le moine 玄奘 (Xuánzàng) emprunte ces routes pour aller chercher des textes bouddhistes en Inde. Son voyage a inspiré le grand roman 《西游记》 (Xīyóujì, *La Pérégrination vers l'Ouest*), écrit sous les Ming, où il est accompagné du roi des singes 孙悟空 (Sūn Wùkōng)." },
            { t: "exemple", titre: "Visiter Xi'an", md: "Imagine que tu visites 西安 (Xī'ān). Tu y vois l'armée de terre cuite (兵马俑 bīngmǎyǒng) du premier empereur, dynastie **秦**. La ville s'appelait 长安 (Cháng'ān) sous les **汉** et les **唐** : c'était le grand point de départ de la Route de la soie. Tu peux dire : 西安是一个很有名的古城 (Xī'ān shì yí ge hěn yǒumíng de gǔchéng) : Xi'an est une ville ancienne très célèbre." },
            { t: "verifie", q: "Que veut dire 路 (lù) dans 丝绸之路 ?", choix: ["la route", "la soie", "le commerce", "l'ouest"], bonne: 0, explication: "丝绸 (sīchóu) = la soie, 之 (zhī) = mot de liaison, 路 (lù) = la route : 丝绸之路, « la route de la soie »." },
          ],
        },
      ],
      bilan: "Confucius et sa bienveillance, sept dynasties de 秦 à 清, quatre inventions (papier, imprimerie, poudre, boussole) et des routes qui reliaient 长安 à la Méditerranée : chaque caractère porte une histoire.",
    },

    // ───────────────────────── 10. Méthode ─────────────────────────
    "3e-chinois-10-methode-dnb": {
      accroche: "Un texte plein de caractères inconnus ? Pas de panique : même un lecteur chinois devine parfois un mot grâce à sa **clé** et au contexte. En fin de 3e, l'important n'est pas de tout connaître, mais d'avoir une **méthode** : repérer les indices, prononcer juste et organiser tes idées.",
      objectifs: [
        "Deviner le sens d'un caractère grâce à sa clé et au contexte",
        "Repérer les indices de temps et les connecteurs dans un texte",
        "Appliquer les changements de ton de 不, de 一 et des 3e tons",
        "Organiser un exposé ou une lettre, et demander de l'aide à l'oral",
      ],
      sections: [
        {
          titre: "La clé, un indice de sens",
          blocs: [
            { t: "texte", md: "Beaucoup de caractères associent une **clé**, qui indique le domaine de sens, et un **élément phonétique**, qui donne une idée de la prononciation. La clé se place souvent à gauche ou en haut." },
            { t: "tableau", titre: "Huit clés à connaître", entetes: ["Clé", "Domaine", "Exemples"], lignes: [["氵", "l'eau", "河 (hé) rivière, 海 (hǎi) mer, 洗 (xǐ) laver, 游泳 (yóuyǒng) nager"], ["口", "la bouche", "吃 (chī) manger, 喝 (hē) boire, 唱 (chàng) chanter, 叫 (jiào) appeler"], ["扌", "la main", "打 (dǎ) frapper, 找 (zhǎo) chercher, 拍 (pāi) taper"], ["讠", "la parole", "说 (shuō) parler, 话 (huà) parole, 语 (yǔ) langue, 读 (dú) lire"], ["艹", "les plantes", "花 (huā) fleur, 草 (cǎo) herbe, 茶 (chá) thé, 菜 (cài) légume"], ["饣", "la nourriture", "饭 (fàn) repas, 饿 (è) avoir faim"], ["钅", "le métal", "钱 (qián) argent, 铁 (tiě) fer"], ["忄", "le cœur, les sentiments", "快 (kuài) rapide, 慢 (màn) lent, 忙 (máng) occupé, 怕 (pà) avoir peur"]] },
            { t: "exemple", titre: "Deviner un caractère inconnu", etapes: ["Tu lis : 她很喜欢唱歌。(tā hěn xǐhuan chàng gē)", "Tu ne connais pas 唱, mais tu reconnais la clé 口 : une action de la bouche.", "Le contexte aide : 歌 (gē) veut dire chanson, et 喜欢 (xǐhuan : aimer) attend une activité.", "Conclusion : 唱歌 = chanter. Elle aime beaucoup chanter."] },
            { t: "attention", md: "La clé met sur la piste, elle ne donne **pas** le sens exact : 河 et 海 contiennent tous deux 氵, mais l'un est une rivière, l'autre la mer. Vérifie toujours avec le contexte." },
            { t: "verifie", q: "Quel caractère a sans doute un rapport avec la parole ?", choix: ["请 (qǐng)", "河 (hé)", "花 (huā)", "钱 (qián)"], bonne: 0, explication: "请 (qǐng : prier, inviter, « s'il te plaît ») porte à gauche la clé **讠** de la parole. 河 porte 氵 (l'eau), 花 porte 艹 (les plantes), 钱 porte 钅 (le métal)." },
          ],
        },
        {
          titre: "Lire un texte : la méthode",
          blocs: [
            { t: "etapes", titre: "Comprendre un texte en six étapes", items: [{ titre: "Lire le titre et la consigne", md: "Qui écrit ? À qui ? De quoi parle-t-on ?" }, { titre: "Repérer les nombres et les dates", md: "年 (nián : année), 月 (yuè : mois), 号 (hào : jour), les heures, les prix." }, { titre: "Repérer les noms propres", md: "Villes (北京 Běijīng), personnes (小明 Xiǎo Míng) : ils structurent l'histoire." }, { titre: "Repérer les marques de temps", md: "了 (le) accompli, 过 (guo) expérience, 在 (zài) en cours ; 要 (yào), 会 (huì), 打算 (dǎsuàn) pour le futur ; 昨天 (zuótiān), 明天 (míngtiān)…" }, { titre: "Repérer les connecteurs", md: "因为 (yīnwèi), 但是 (dànshì), 可是 (kěshì), 如果 (rúguǒ) : ils montrent la logique du texte." }, { titre: "Deviner, puis vérifier", md: "Clé + contexte ; puis relis la phrase entière pour vérifier que ton idée a du sens." }] },
            { t: "exemple", titre: "Appliquer la méthode", md: "我昨天去了海边，水很冷，可是我还是游泳了。(Wǒ zuótiān qù le hǎibiān, shuǐ hěn lěng, kěshì wǒ háishi yóuyǒng le.)\n**Indices** : 昨天 et 了 → c'est passé ; 可是 → une opposition arrive ; 还是 (háishi) → « quand même » ; 海边 (hǎibiān) → le bord de mer, avec la clé 氵 ; 游泳 → encore 氵, l'eau.\n**Sens** : hier, je suis allé au bord de la mer ; l'eau était froide, mais je me suis quand même baigné." },
          ],
        },
        {
          titre: "Prononcer juste : les changements de ton",
          blocs: [
            { t: "texte", md: "Chaque syllabe a un ton **de base**. Mais à l'oral, certains tons changent selon leur voisin. Ces règles sont automatiques chez les Chinois : applique-les aussi, et ton chinois sonnera naturel." },
            { t: "tableau", titre: "Trois règles à appliquer", entetes: ["Règle", "Exemples", "Prononciation"], lignes: [["3e ton + 3e ton : le premier se dit au 2e ton", "你好 (nǐ hǎo), 很好 (hěn hǎo)", "ní hǎo, hén hǎo"], ["不 (bù) devant un 4e ton devient bú", "不是, 不去, 不对", "bú shì, bú qù, bú duì"], ["不 garde bù devant les autres tons", "不好, 不忙, 不吃", "bù hǎo, bù máng, bù chī"], ["一 (yī) devant un 4e ton devient yí", "一个, 一次, 一下", "yí ge, yí cì, yíxià"], ["一 devant un 1er, 2e ou 3e ton devient yì", "一天, 一年, 一起", "yì tiān, yì nián, yìqǐ"], ["一 garde yī seul, en comptant ou en fin de mot", "一, 第一, 十一", "yī, dì yī, shíyī"]] },
            { t: "propriete", titre: "Ce qu'on écrit, ce qu'on dit", md: "Dans ce cours, comme dans les exercices, 不 et 一 sont notés avec leur ton **réel** (bú shì, yí ge). En revanche, le changement 3e + 3e n'est **pas** noté : on écrit nǐ hǎo, et on dit ní hǎo. Attention : dans 一个, 个 se prononce ge (ton neutre), mais c'est son ton d'origine, le 4e (gè), qui compte : on dit donc yí ge." },
            { t: "verifie", q: "Comment se prononce 一起 (ensemble) ?", choix: ["yìqǐ", "yíqǐ", "yīqǐ"], bonne: 0, explication: "起 (qǐ) est au 3e ton : devant un 1er, 2e ou 3e ton, 一 se dit **yì**. On dirait yí devant un 4e ton (一个 yí ge), et yī seul ou en comptant." },
          ],
        },
        {
          titre: "Organiser un écrit ou un oral",
          blocs: [
            { t: "tableau", titre: "Les mots pour organiser", entetes: ["Mot", "Pinyin", "Sens"], lignes: [["首先", "shǒuxiān", "d'abord"], ["然后", "ránhòu", "ensuite"], ["另外", "lìngwài", "de plus"], ["比如", "bǐrú", "par exemple"], ["最后", "zuìhòu", "enfin"], ["总之", "zǒngzhī", "en somme"], ["我觉得 / 我认为", "wǒ juéde / wǒ rènwéi", "je trouve que / je pense que"]] },
            { t: "exemple", titre: "Un exposé en trois temps", md: "首先，我介绍一下我的城市。然后，我说说我的爱好。最后，我谈谈我的梦想。\n(Shǒuxiān, wǒ jièshào yíxià wǒ de chéngshì. Ránhòu, wǒ shuōshuo wǒ de àihào. Zuìhòu, wǒ tántan wǒ de mèngxiǎng.)\nD'abord, je vous présente ma ville. Ensuite, je parle de mes loisirs. Enfin, je parle de mon rêve. Remarque 一下 lu yíxià, car 下 (xià) est au 4e ton.\nPour conclure avec ton avis : 我觉得汉语虽然很难，但是很有意思。(Wǒ juéde Hànyǔ suīrán hěn nán, dànshì hěn yǒu yìsi.) Je trouve que le chinois, bien qu'il soit difficile, est très intéressant." },
            { t: "etapes", titre: "Écrire une lettre à un ami", items: [{ titre: "S'adresser à lui", md: "亲爱的小明：(qīn'ài de Xiǎo Míng) Cher Xiaoming, suivi de deux-points." }, { titre: "Saluer", md: "你好！(nǐ hǎo) puis le message, organisé avec 首先, 然后, 最后." }, { titre: "Souhaiter", md: "祝你身体健康！(zhù nǐ shēntǐ jiànkāng) Je te souhaite une bonne santé !" }, { titre: "Signer et dater", md: "Ton prénom, puis la date du plus grand au plus petit : 2026年6月20日 (année 年 nián, mois 月 yuè, jour 日 rì ; à l'oral, on dit plutôt 号 hào)." }] },
            { t: "liste", titre: "Pour se débrouiller à l'oral", items: ["请再说一遍。(qǐng zài shuō yí biàn) : répète, s'il te plaît.", "请说慢一点儿。(qǐng shuō màn yìdiǎnr) : parle plus lentement, s'il te plaît.", "« stage » 用汉语怎么说？(… yòng Hànyǔ zěnme shuō ?) : comment dit-on « stage » en chinois ? Réponse : 实习 (shíxí)."] },
            { t: "verifie", q: "Tu n'as pas bien entendu la question de l'examinateur. Tu dis :", choix: ["请再说一遍。", "祝你身体健康！", "总之。", "没关系。"], bonne: 0, explication: "请再说一遍 (qǐng zài shuō yí biàn) : « répète une fois de plus, s'il te plaît ». 祝你身体健康 termine une lettre, 总之 (zǒngzhī) signifie « en somme » et 没关系 (méi guānxi) « ce n'est pas grave »." },
          ],
        },
      ],
      bilan: "Une clé pour deviner, des indices pour comprendre, des tons qui s'adaptent à leurs voisins et des connecteurs pour organiser : avec cette méthode, tu es prêt à lire, écouter, parler et écrire en chinois.",
    },
  },
};
