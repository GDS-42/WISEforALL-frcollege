// ÉCLORE — Cours illustrés, 5e Chinois (LV2, première année, niveau A1).
// Mandarin standard : caractères simplifiés + pinyin.
// Convention pinyin (la même que le module de questions content/5e/chinois.js) : tons d'origine écrits
// pour deux 3e tons (你好 nǐ hǎo, dit « ní hǎo ») ; tons réellement prononcés écrits pour 不 et 一
// (不是 bú shì, 一个 yí ge).
// Schéma : docs/COURS.md. Validation : node tools/validate-cours.mjs content/cours/5e/chinois.js
export default {
  id: "5e-chinois",
  chapitres: {
    "5e-chinois-01-saluer-pinyin-tons": {
      accroche: "Dans une école de Pékin, le professeur entre et toute la classe lance en chœur : « 老师好！ ». Trois syllabes seulement, et pourtant chacune chante sur une mélodie précise : en mandarin, la mélodie d'une syllabe fait partie du mot.",
      objectifs: [
        "Saluer, prendre congé, remercier et t'excuser en chinois",
        "Reconnaître les quatre tons et le ton neutre, et lire leurs signes",
        "Lire une syllabe en pinyin (initiale, finale, ton) et appliquer les changements de ton de 你好 et de 不",
      ],
      sections: [
        {
          titre: "Premiers mots : saluer, remercier, s'excuser",
          blocs: [
            { t: "texte", md: "En chinois, ==on salue en ajoutant 好 hǎo (bien) après la personne== à qui l'on parle. **你好** nǐ hǎo, mot à mot « toi bien », veut dire « bonjour, salut ». Pour un adulte que l'on respecte, on remplace 你 nǐ (tu) par **您** nín (vous de politesse) : 您好 nín hǎo. À un groupe, on dit **你们好** nǐmen hǎo (们 men marque le pluriel). Et en classe, on salue son professeur par son titre : **老师好** lǎoshī hǎo !" },
            { t: "tableau", titre: "Les formules de base", entetes: ["Chinois", "Pinyin", "Sens", "On répond…"], lignes: [
              ["**你好**", "nǐ hǎo", "Bonjour, salut", "你好！"],
              ["**您好**", "nín hǎo", "Bonjour (poli)", "您好！"],
              ["**老师好**", "lǎoshī hǎo", "Bonjour, professeur", "同学们好！ Tóngxuémen hǎo ! (Bonjour, les élèves !)"],
              ["**再见**", "zàijiàn", "Au revoir", "再见！"],
              ["**谢谢**", "xièxie", "Merci", "不客气 bú kèqi (de rien)"],
              ["**对不起**", "duìbuqǐ", "Pardon, excuse-moi", "没关系 méi guānxi (ce n'est pas grave)"],
            ] },
            { t: "astuce", md: "Les formules vont **par paires** : à un merci (谢谢) on répond 不客气, mot à mot « ne fais pas de cérémonie » ; à une excuse (对不起) on répond 没关系, « ça n'a pas d'importance ». Ne les mélange pas !\n\n**再见** zàijiàn se décompose en 再 zài (de nouveau) + 见 jiàn (voir) : c'est « au revoir », exactement comme en français." },
            { t: "exemple", titre: "En classe", md: "— 同学们好！ Tóngxuémen hǎo ! (Bonjour, les élèves !)\n— 老师好！ Lǎoshī hǎo ! (Bonjour, professeur !)\n— 谢谢！ Xièxie ! (Merci !) — 不客气！ Bú kèqi ! (De rien !)\n— 老师再见！ Lǎoshī zàijiàn ! (Au revoir, professeur !)" },
            { t: "verifie", q: "Tu bouscules un camarade dans le couloir et tu lui dis 对不起. Que va-t-il sans doute te répondre ?", choix: ["不客气 bú kèqi", "没关系 méi guānxi", "谢谢 xièxie", "你好 nǐ hǎo"], bonne: 1, explication: "À une excuse, on répond **没关系** méi guānxi : « ce n'est pas grave ». 不客气 (de rien) répond à un merci, pas à un pardon." },
          ],
        },
        {
          titre: "Quatre tons qui changent le sens",
          blocs: [
            { t: "texte", md: "Le mandarin est une **langue à tons** : chaque syllabe se prononce sur une mélodie précise, et ==changer la mélodie, c'est changer de mot==. Écoute la syllabe **ma** : selon le ton, elle veut dire « maman », « chanvre », « cheval » ou « gronder ». Il y a quatre tons, plus un ton neutre." },
            { t: "schema", titre: "Les quatre tons : la mélodie de la voix", legende: "Convention : de gauche à droite, le temps qui passe ; de bas en haut, la hauteur de la voix, de 1 (grave) à 5 (aigu). Une couleur par ton : rouge pour le 1er (5 → 5), vert pour le 2e (3 → 5), bleu pour le 3e (2 → 1 → 4), violet pour le 4e (5 → 1). Le point marque le début de la syllabe.", svg: `<svg viewBox="0 0 400 262"><text class="texte-petit" x="12" y="90" text-anchor="middle" transform="rotate(-90 12 90)">hauteur de la voix</text><text class="texte-petit" x="32" y="54" text-anchor="end">5</text><text class="texte-petit" x="32" y="74" text-anchor="end">4</text><text class="texte-petit" x="32" y="94" text-anchor="end">3</text><text class="texte-petit" x="32" y="114" text-anchor="end">2</text><text class="texte-petit" x="32" y="134" text-anchor="end">1</text><rect class="aplat-papier" x="38" y="40" width="84" height="100" rx="6"/><rect class="aplat-papier" x="128" y="40" width="84" height="100" rx="6"/><rect class="aplat-papier" x="218" y="40" width="84" height="100" rx="6"/><rect class="aplat-papier" x="308" y="40" width="84" height="100" rx="6"/><path class="trait-fin" opacity=".3" d="M38 50h84M38 70h84M38 90h84M38 110h84M38 130h84M128 50h84M128 70h84M128 90h84M128 110h84M128 130h84M218 50h84M218 70h84M218 90h84M218 110h84M218 130h84M308 50h84M308 70h84M308 90h84M308 110h84M308 130h84"/><rect class="trait-fin" x="38" y="40" width="84" height="100" rx="6"/><rect class="trait-fin" x="128" y="40" width="84" height="100" rx="6"/><rect class="trait-fin" x="218" y="40" width="84" height="100" rx="6"/><rect class="trait-fin" x="308" y="40" width="84" height="100" rx="6"/><path d="M48 50H112" fill="none" stroke="var(--co-c-rouge)" stroke-width="5" stroke-linecap="round"/><path d="M138 90Q170 88 202 50" fill="none" stroke="var(--co-c-vert)" stroke-width="5" stroke-linecap="round"/><path d="M228 110C244 140 268 140 292 70" fill="none" stroke="var(--co-c-bleu)" stroke-width="5" stroke-linecap="round"/><path d="M318 50Q350 54 382 130" fill="none" stroke="var(--co-c-violet)" stroke-width="5" stroke-linecap="round"/><circle class="c-rouge" cx="48" cy="50" r="5"/><circle class="c-vert" cx="138" cy="90" r="5"/><circle class="c-bleu" cx="228" cy="110" r="5"/><circle class="c-violet" cx="318" cy="50" r="5"/><line class="trait-fin" x1="38" y1="150" x2="390" y2="150" marker-end="url(#fl)"/><text class="texte-petit" x="34" y="154" text-anchor="end">durée</text><text class="texte" x="80" y="174" text-anchor="middle">1er ton</text><text class="texte" x="170" y="174" text-anchor="middle">2e ton</text><text class="texte" x="260" y="174" text-anchor="middle">3e ton</text><text class="texte" x="350" y="174" text-anchor="middle">4e ton</text><text class="c-rouge" style="font-size:26px;font-weight:700" x="80" y="202" text-anchor="middle">ā</text><text class="c-vert" style="font-size:26px;font-weight:700" x="170" y="202" text-anchor="middle">á</text><text class="c-bleu" style="font-size:26px;font-weight:700" x="260" y="202" text-anchor="middle">ǎ</text><text class="c-violet" style="font-size:26px;font-weight:700" x="350" y="202" text-anchor="middle">à</text><text class="texte" style="font-size:19px" x="80" y="230" text-anchor="middle">妈 mā</text><text class="texte" style="font-size:19px" x="170" y="230" text-anchor="middle">麻 má</text><text class="texte" style="font-size:19px" x="260" y="230" text-anchor="middle">马 mǎ</text><text class="texte" style="font-size:19px" x="350" y="230" text-anchor="middle">骂 mà</text><text class="texte-petit" x="80" y="250" text-anchor="middle">maman</text><text class="texte-petit" x="170" y="250" text-anchor="middle">chanvre</text><text class="texte-petit" x="260" y="250" text-anchor="middle">cheval</text><text class="texte-petit" x="350" y="250" text-anchor="middle">gronder</text></svg>` },
            { t: "tableau", titre: "Les signes des tons", entetes: ["Ton", "Signe", "Mélodie", "Exemple"], lignes: [
              ["1er ton", "**ā** (trait plat)", "haut et plat, tenu", "妈 mā : maman"],
              ["2e ton", "**á** (accent qui monte)", "monte, comme une question étonnée : « hein ? »", "麻 má : chanvre"],
              ["3e ton", "**ǎ** (petit v)", "descend tout bas, puis remonte", "马 mǎ : cheval"],
              ["4e ton", "**à** (accent qui descend)", "descend d'un coup, comme un ordre : « stop ! »", "骂 mà : gronder"],
              ["ton neutre", "**a** (aucun signe)", "court et léger", "吗 ma : particule de question"],
            ] },
            { t: "definition", terme: "Le ton neutre", md: "Une syllabe **sans signe** se dit au **ton neutre** : brève, légère, sans effort. C'est souvent la deuxième syllabe d'un mot redoublé : 谢谢 xièxi**e**, 妈妈 māma, 爸爸 bàba. Seule la première syllabe garde son ton." },
            { t: "verifie", q: "Quel signe marque le 3e ton ?", choix: ["à", "ǎ", "á", "ā"], bonne: 1, explication: "Le 3e ton s'écrit avec un **petit v** : ǎ, comme dans 你好 nǐ hǎo. Le signe dessine la mélodie : la voix descend, puis remonte. à est le 4e ton, á le 2e, ā le 1er." },
          ],
        },
        {
          titre: "Le pinyin : lire une syllabe",
          blocs: [
            { t: "definition", terme: "Le pinyin", md: "Le **pinyin** (拼音 pīnyīn) est l'écriture du chinois en lettres latines, utilisée en Chine pour apprendre à lire. Il note la **prononciation** : à un caractère correspond une syllabe. Chaque syllabe se découpe en trois morceaux : une **initiale** (la consonne du début), une **finale** (tout le reste) et un **ton**." },
            { t: "schema", titre: "Anatomie d'une syllabe : hǎo", legende: "Initiale + finale + ton. Le signe du ton se pose sur la voyelle principale de la finale.", svg: `<svg viewBox="0 0 400 186"><rect class="aplat" x="56" y="56" width="84" height="74" rx="8"/><rect class="trait" x="56" y="56" width="84" height="74" rx="8"/><rect class="aplat-papier" x="150" y="56" width="120" height="74" rx="8"/><rect class="trait" x="150" y="56" width="120" height="74" rx="8"/><text class="texte" style="font-size:46px" x="98" y="110" text-anchor="middle">h</text><text class="texte" style="font-size:46px" x="210" y="110" text-anchor="middle">ǎo</text><text class="texte-pigment" x="210" y="22" text-anchor="middle">ton : 3e ton (ˇ)</text><line class="trait-fin" x1="207" y1="28" x2="199" y2="60" marker-end="url(#fl-p)"/><text class="texte" x="98" y="152" text-anchor="middle">initiale</text><text class="texte" x="210" y="152" text-anchor="middle">finale</text><text class="texte-petit" x="98" y="168" text-anchor="middle">la consonne du début</text><text class="texte-petit" x="210" y="168" text-anchor="middle">tout le reste</text><text class="texte" style="font-size:26px" x="292" y="104" text-anchor="middle">=</text><text class="texte" style="font-size:42px" x="336" y="110" text-anchor="middle">好</text><text class="texte-petit" x="336" y="134" text-anchor="middle">bien, bon</text></svg>` },
            { t: "tableau", titre: "Les initiales, par familles", entetes: ["Où se forme le son ?", "Initiales", "Conseils", "Exemples"], lignes: [
              ["les lèvres", "b p m f", "**p** avec un souffle, **b** sans souffle", "爸 bà, 妈 mā"],
              ["la langue derrière les dents", "d t n l", "**t** avec un souffle, **d** sans souffle", "他 tā, 你 nǐ"],
              ["le fond de la gorge", "g k h", "**k** avec un souffle ; **h** raclé", "哥 gē, 客 kè, 好 hǎo"],
              ["lèvres souriantes", "j q x", "**j** « dj », **q** « tch » avec un souffle, **x** « ch » doux", "见 jiàn, 七 qī, 谢 xiè"],
              ["langue recourbée", "zh ch sh r", "**zh** « dj », **ch** « tch » avec un souffle, **sh** « ch », **r** un « j » doux", "中 zhōng, 吃 chī, 是 shì, 人 rén"],
              ["langue contre les dents", "z c s", "**z** « dz », **c** « ts » avec un souffle, **s** « s »", "再 zài, 菜 cài, 三 sān"],
            ] },
            { t: "tableau", titre: "Quelques finales", entetes: ["Finale", "Se dit à peu près", "Exemples"], lignes: [
              ["**e**", "« eu »", "哥 gē, 客 kè"],
              ["**u**", "« ou »", "不 bù, 五 wǔ"],
              ["**ü**, et **u** après j, q, x, y", "« u » comme dans « lune »", "女 nǚ, 去 qù"],
              ["**ao** / **ou**", "« a-o » / « o-ou », d'un seul souffle", "好 hǎo, 口 kǒu"],
              ["**ai** / **ei** / **ie**", "« aï » / « eï » / « iè »", "再 zài, 妹 mèi, 谢 xiè"],
              ["**an** / **ang**", "« ane », n bien prononcé / « an » du fond de la gorge", "三 sān, 王 Wáng"],
              ["**i** après z, c, s, zh, ch, sh, r", "pas un « i » : on prolonge la consonne", "是 shì, 字 zì"],
            ] },
            { t: "attention", md: "Le pinyin n'est pas du français ! **x** ne se dit jamais « ks » : 谢谢 xièxie sonne à peu près « chiè-chie », lèvres souriantes. **e** seul se dit « eu » (哥 gē) et **u** se dit « ou » (不 bù)… sauf après j, q, x, y, où c'est un « u » français. Et **an**, **en** ne sont pas nasaux comme en français : on entend le n." },
            { t: "astuce", md: "Où poser le signe du ton ? Sur le **a** s'il y en a un (hǎo, zài) ; sinon sur le **o** ou le **e** (kǒu, xiè) ; dans **iu** et **ui**, sur la deuxième lettre (liù, duì)." },
            { t: "verifie", q: "Dans la syllabe xiè (谢), quelle est la finale ?", choix: ["x", "ie", "xi", "è seulement"], bonne: 1, explication: "L'initiale est la consonne du début, **x** ; la finale est tout le reste, **ie** ; le ton (ici le 4e) se pose sur le e : xiè." },
          ],
        },
        {
          titre: "Quand les tons changent",
          blocs: [
            { t: "propriete", titre: "Deux 3e tons de suite", md: "Quand deux syllabes au **3e ton** se suivent, ==la première se prononce au 2e ton==. On écrit **你好 nǐ hǎo**, mais on dit **ní hǎo**. De même, 很好 hěn hǎo (très bien) se dit « hén hǎo ». Dans ce cours, comme dans les manuels, on écrit les tons d'origine." },
            { t: "propriete", titre: "不 devant un 4e ton", md: "**不** bù (ne… pas) se prononce **bú** (2e ton) ==devant un 4e ton== : 不客气 bú kèqi, 不是 bú shì. Devant les autres tons, il reste bù : 不好 bù hǎo (pas bien). Pour 不, on écrit directement le ton prononcé." },
            { t: "exemple", titre: "Lire quatre expressions", etapes: [
              "你们好 nǐmen hǎo : 们 men est au ton neutre et sépare les deux 3e tons ; rien ne change.",
              "你好 nǐ hǎo : deux 3e tons collés ; le premier monte, on dit « ní hǎo ».",
              "不客气 : 客 kè est au 4e ton, donc 不 devient bú : bú kèqi.",
              "不好 : 好 hǎo est au 3e ton, 不 reste bù : bù hǎo.",
            ] },
            { t: "savais-tu", md: "Les enfants chinois apprennent eux aussi le pinyin à l'école primaire, pour lire les mots dont ils ne connaissent pas encore les caractères. Et sur un téléphone, on tape le plus souvent en pinyin : le clavier propose ensuite les caractères correspondants." },
          ],
        },
      ],
      bilan: "你好、谢谢、再见 : trois formules ; quatre tons (plat, montant, en creux, descendant) et un ton neutre ; une syllabe = initiale + finale + ton ; deux 3e tons de suite font « ní hǎo », et 不 devient bú devant un 4e ton.",
    },

    "5e-chinois-02-caracteres-traits-cles": {
      accroche: "Le caractère 人 ressemble à quelqu'un qui marche, 山 à trois sommets, 木 à un arbre avec ses branches et ses racines. Il y a plus de 3 000 ans, les premiers caractères chinois étaient de petits dessins. Tes premiers caractères commencent ici.",
      objectifs: [
        "Reconnaître les traits de base et compter les traits d'un caractère",
        "Appliquer les règles de l'ordre des traits (十, 木, 人, 日)",
        "Reconnaître les pictogrammes et les clés courants pour deviner un sens",
      ],
      sections: [
        {
          titre: "Des dessins devenus caractères",
          blocs: [
            { t: "definition", terme: "Le caractère (汉字 hànzì)", md: "Un **caractère** chinois note à la fois **une syllabe** et **un sens**. Le chinois n'a pas d'alphabet : on apprend les caractères un par un. Un élève chinois en apprend plusieurs milliers à l'école ; mais rassure-toi, les plus fréquents reviennent sans cesse, et quelques dizaines suffisent déjà pour écrire tes premières phrases." },
            { t: "texte", md: "Beaucoup de caractères simples sont des **pictogrammes** : à l'origine, des dessins de ce qu'ils désignent. Les plus anciens, gravés sur des os et des carapaces de tortue, ont plus de 3 000 ans. Au fil des siècles, les dessins se sont simplifiés et redressés en traits : le soleil rond est devenu un rectangle, le croissant de lune un cadre allongé." },
            { t: "schema", titre: "Du pictogramme au caractère", legende: "Le rond du soleil devient 日, le croissant de lune 月, l'arbre avec ses branches et ses racines 木, la silhouette de profil 人, les trois sommets 山, l'eau qui coule entre des gouttes 水. Les dessins du haut sont simplifiés.", svg: `<svg viewBox="0 0 400 200"><circle class="trait" cx="34" cy="45" r="20"/><path class="trait" d="M27 45H41"/><path class="aplat" d="M110 22A23 23 0 0 0 110 68A30 30 0 0 1 110 22Z"/><path class="trait" d="M110 22A23 23 0 0 0 110 68A30 30 0 0 1 110 22Z"/><path class="trait" d="M166 16V76M166 34L148 18M166 34L184 18M166 58L148 74M166 58L184 74"/><path class="trait" d="M240 16Q237 46 214 76M236 44Q246 58 256 74"/><path class="aplat" d="M272 74V48L286 62L300 20L314 62L328 48V74Z"/><path class="trait" d="M272 74V48L286 62L300 20L314 62L328 48V74Z"/><path class="trait" d="M366 16Q357 31 366 46Q375 61 366 76M350 26L344 38M352 52L346 64M382 26L388 38M380 52L386 64"/><line class="trait-fin" x1="34" y1="86" x2="34" y2="106" marker-end="url(#fl)"/><line class="trait-fin" x1="100" y1="86" x2="100" y2="106" marker-end="url(#fl)"/><line class="trait-fin" x1="166" y1="86" x2="166" y2="106" marker-end="url(#fl)"/><line class="trait-fin" x1="234" y1="86" x2="234" y2="106" marker-end="url(#fl)"/><line class="trait-fin" x1="300" y1="86" x2="300" y2="106" marker-end="url(#fl)"/><line class="trait-fin" x1="366" y1="86" x2="366" y2="106" marker-end="url(#fl)"/><text class="texte" style="font-size:32px" x="34" y="146" text-anchor="middle">日</text><text class="texte" style="font-size:32px" x="100" y="146" text-anchor="middle">月</text><text class="texte" style="font-size:32px" x="166" y="146" text-anchor="middle">木</text><text class="texte" style="font-size:32px" x="234" y="146" text-anchor="middle">人</text><text class="texte" style="font-size:32px" x="300" y="146" text-anchor="middle">山</text><text class="texte" style="font-size:32px" x="366" y="146" text-anchor="middle">水</text><text class="texte" x="34" y="172" text-anchor="middle">rì</text><text class="texte" x="100" y="172" text-anchor="middle">yuè</text><text class="texte" x="166" y="172" text-anchor="middle">mù</text><text class="texte" x="234" y="172" text-anchor="middle">rén</text><text class="texte" x="300" y="172" text-anchor="middle">shān</text><text class="texte" x="366" y="172" text-anchor="middle">shuǐ</text><text class="texte-petit" x="34" y="190" text-anchor="middle">soleil</text><text class="texte-petit" x="100" y="190" text-anchor="middle">lune</text><text class="texte-petit" x="166" y="190" text-anchor="middle">arbre</text><text class="texte-petit" x="234" y="190" text-anchor="middle">personne</text><text class="texte-petit" x="300" y="190" text-anchor="middle">montagne</text><text class="texte-petit" x="366" y="190" text-anchor="middle">eau</text></svg>` },
            { t: "texte", md: "D'autres pictogrammes à connaître : **口** kǒu (bouche : une bouche ouverte), **火** huǒ (feu : des flammes), **女** nǚ (femme), **子** zǐ (enfant)." },
            { t: "verifie", q: "Que représentait à l'origine le caractère 木 mù ?", choix: ["Un arbre, avec ses branches et ses racines", "Une personne qui marche", "Trois montagnes", "De l'eau qui coule"], bonne: 0, explication: "**木** mù (arbre) dessine un tronc, des branches en haut et des racines en bas. La personne est 人, la montagne 山, l'eau 水." },
          ],
        },
        {
          titre: "Les traits de base et leur nombre",
          blocs: [
            { t: "texte", md: "Un caractère se construit avec un petit nombre de **traits** (笔画 bǐhuà), toujours tracés dans le même sens. Un trait, c'est ==un geste du pinceau, sans le lever==. Même s'il change de direction, il ne compte que pour un." },
            { t: "tableau", titre: "Les traits de base", entetes: ["Nom", "Comment le tracer", "Exemple"], lignes: [
              ["**横** héng", "horizontal, de gauche à droite", "一, 三"],
              ["**竖** shù", "vertical, de haut en bas", "十 (2e trait)"],
              ["**撇** piě", "oblique qui descend vers la gauche", "人 (1er trait)"],
              ["**捺** nà", "oblique qui descend vers la droite, en s'élargissant", "人 (2e trait)"],
              ["**点** diǎn", "point, petit trait court", "六 (1er trait), 火"],
              ["**折** zhé", "trait qui tourne à angle, sans lever le pinceau", "口 (2e trait)"],
              ["**钩** gōu", "petit crochet en fin de trait", "子 (2e trait), 你"],
            ] },
            { t: "propriete", titre: "Compter les traits", md: "On compte **chaque geste du pinceau**, pas les morceaux. **口** a **3 traits** : le côté gauche, puis le haut et le côté droit d'un seul trait en angle, enfin le bas qui ferme le carré. **女** a 3 traits, **子** aussi : 好 = 女 + 子 = **6 traits**. Pour un caractère composé, additionne ses éléments : 你 = 亻 (2) + 尔 (5) = **7 traits**." },
            { t: "tableau", titre: "Combien de traits ?", entetes: ["Caractère", "Sens", "Nombre de traits"], lignes: [
              ["人 rén", "personne", "2"],
              ["十 shí", "dix", "2"],
              ["口 kǒu", "bouche", "3"],
              ["山 shān", "montagne", "3"],
              ["女 nǚ", "femme", "3"],
              ["木 mù", "arbre", "4"],
              ["日 rì", "soleil", "4"],
              ["好 hǎo", "bien, bon", "6 (女 + 子)"],
              ["你 nǐ", "tu, toi", "7 (亻 + 尔)"],
            ] },
          ],
        },
        {
          titre: "L'ordre des traits",
          blocs: [
            { t: "texte", md: "L'ordre des traits n'est pas libre : ==il rend l'écriture plus rapide, plus régulière et plus belle==, et il aide à mémoriser. Bonne nouvelle : quelques règles suffisent pour la plupart des caractères." },
            { t: "tableau", titre: "Les règles de l'ordre des traits", entetes: ["Règle", "Exemple"], lignes: [
              ["De haut en bas", "三 : les trois traits horizontaux, du haut vers le bas"],
              ["De gauche à droite", "川 : les trois traits, de gauche à droite"],
              ["L'horizontal avant le vertical qui le croise", "十 : 横 puis 竖"],
              ["L'oblique gauche (撇) avant l'oblique droite (捺)", "人, 八"],
              ["L'extérieur avant l'intérieur", "月 : le cadre, puis les deux petits traits"],
              ["On ferme le cadre en dernier", "日, 国 : le trait du bas vient à la fin"],
            ] },
            { t: "schema", titre: "L'ordre des traits de 木 et de 人", legende: "Dans chaque case, le trait en couleur est celui que l'on trace, avec son numéro d'ordre ; les traits déjà tracés sont à l'encre.", svg: `<svg viewBox="0 0 400 264"><rect class="aplat-papier" x="14" y="14" width="76" height="76" rx="4"/><rect class="aplat-papier" x="110" y="14" width="76" height="76" rx="4"/><rect class="aplat-papier" x="206" y="14" width="76" height="76" rx="4"/><rect class="aplat-papier" x="302" y="14" width="76" height="76" rx="4"/><rect class="aplat-papier" x="14" y="150" width="76" height="76" rx="4"/><rect class="aplat-papier" x="110" y="150" width="76" height="76" rx="4"/><path class="pointille" opacity=".5" d="M52 14V90M14 52H90M148 14V90M110 52H186M244 14V90M206 52H282M340 14V90M302 52H378M52 150V226M14 188H90M148 150V226M110 188H186"/><rect class="trait-fin" x="14" y="14" width="76" height="76" rx="4"/><rect class="trait-fin" x="110" y="14" width="76" height="76" rx="4"/><rect class="trait-fin" x="206" y="14" width="76" height="76" rx="4"/><rect class="trait-fin" x="302" y="14" width="76" height="76" rx="4"/><rect class="trait-fin" x="14" y="150" width="76" height="76" rx="4"/><rect class="trait-fin" x="110" y="150" width="76" height="76" rx="4"/><path d="M26 44H78" fill="none" stroke="var(--pigment)" stroke-width="5" stroke-linecap="round"/><text class="texte-pigment" x="19" y="48" text-anchor="middle">1</text><path d="M122 44H174" fill="none" stroke="var(--encre)" stroke-width="5" stroke-linecap="round"/><path d="M148 24V82" fill="none" stroke="var(--pigment)" stroke-width="5" stroke-linecap="round"/><text class="texte-pigment" x="160" y="30" text-anchor="middle">2</text><path d="M218 44H270M244 24V82" fill="none" stroke="var(--encre)" stroke-width="5" stroke-linecap="round"/><path d="M243 46Q234 64 218 76" fill="none" stroke="var(--pigment)" stroke-width="5" stroke-linecap="round"/><text class="texte-pigment" x="226" y="61" text-anchor="middle">3</text><path d="M314 44H366M340 24V82M339 46Q330 64 314 76" fill="none" stroke="var(--encre)" stroke-width="5" stroke-linecap="round"/><path d="M341 46Q352 64 368 76" fill="none" stroke="var(--pigment)" stroke-width="5" stroke-linecap="round"/><text class="texte-pigment" x="360" y="61" text-anchor="middle">4</text><path d="M54 160Q52 194 26 216" fill="none" stroke="var(--pigment)" stroke-width="5" stroke-linecap="round"/><text class="texte-pigment" x="66" y="168" text-anchor="middle">1</text><path d="M150 160Q148 194 122 216" fill="none" stroke="var(--encre)" stroke-width="5" stroke-linecap="round"/><path d="M145 185Q158 204 176 216" fill="none" stroke="var(--pigment)" stroke-width="5" stroke-linecap="round"/><text class="texte-pigment" x="162" y="182" text-anchor="middle">2</text><text class="texte" style="font-size:15px" x="52" y="108" text-anchor="middle">横 héng</text><text class="texte" style="font-size:15px" x="148" y="108" text-anchor="middle">竖 shù</text><text class="texte" style="font-size:15px" x="244" y="108" text-anchor="middle">撇 piě</text><text class="texte" style="font-size:15px" x="340" y="108" text-anchor="middle">捺 nà</text><text class="texte-petit" x="52" y="124" text-anchor="middle">horizontal</text><text class="texte-petit" x="148" y="124" text-anchor="middle">vertical</text><text class="texte-petit" x="244" y="124" text-anchor="middle">oblique gauche</text><text class="texte-petit" x="340" y="124" text-anchor="middle">oblique droite</text><text class="texte" style="font-size:15px" x="52" y="244" text-anchor="middle">撇 piě</text><text class="texte" style="font-size:15px" x="148" y="244" text-anchor="middle">捺 nà</text><text class="texte-petit" x="52" y="259" text-anchor="middle">oblique gauche</text><text class="texte-petit" x="148" y="259" text-anchor="middle">oblique droite</text><text class="texte" style="font-size:15px" x="212" y="172">木 : 横 → 竖 → 撇 → 捺</text><text class="texte" style="font-size:15px" x="212" y="198">人 : 撇 → 捺</text><text class="texte-petit" x="212" y="224">• horizontal avant vertical</text><text class="texte-petit" x="212" y="242">• oblique gauche avant droite</text></svg>` },
            { t: "exemple", titre: "Écrire 日 rì (soleil) en 4 traits", etapes: [
              "竖 : le côté gauche, de haut en bas.",
              "横折 : le haut puis le côté droit, d'un seul geste, sans lever le pinceau.",
              "横 : le trait du milieu.",
              "横 : le trait du bas, qui ferme le cadre en dernier.",
            ] },
            { t: "verifie", q: "Combien de traits compte le caractère 日 rì (soleil) ?", choix: ["3", "4", "5"], bonne: 1, explication: "Côté gauche (1), haut et côté droit d'un seul geste (2), milieu (3), bas qui ferme le cadre (4) : **4 traits**. Le trait en angle ne compte que pour un." },
          ],
        },
        {
          titre: "Les clés : des familles de sens",
          blocs: [
            { t: "definition", terme: "La clé (部首 bùshǒu)", md: "Une **clé** est l'élément d'un caractère qui indique souvent ==la famille de sens==. Elle sert aussi à classer les caractères dans les dictionnaires. Certaines clés changent de forme quand elles se placent à gauche : 人 devient **亻**, 水 devient **氵** (« les trois gouttes d'eau »)." },
            { t: "tableau", titre: "Des clés à reconnaître", entetes: ["Clé", "Sens", "Exemples"], lignes: [
              ["**亻** (forme de 人)", "personne", "你 nǐ (tu), 他 tā (il), 休 xiū (se reposer)"],
              ["**口**", "bouche", "吃 chī (manger), 喝 hē (boire), 叫 jiào (appeler)"],
              ["**氵** (forme de 水)", "eau", "河 hé (rivière), 海 hǎi (mer)"],
              ["**女**", "femme", "妈 mā (maman), 姐 jiě (grande sœur), 她 tā (elle)"],
              ["**木**", "arbre, bois", "林 lín (bois, bosquet), 森 sēn (forêt)"],
              ["**日**", "soleil, jour", "明 míng (clair), 早 zǎo (tôt)"],
            ] },
            { t: "texte", md: "Les éléments se combinent comme dans une devinette : 木 + 木 = **林** lín (un bois) ; avec trois arbres, **森** sēn (森林 sēnlín, la forêt) ; 日 + 月 = **明** míng (clair, lumineux) ; 亻 + 木 = **休** xiū, une personne adossée à un arbre : se reposer ; 女 + 子 = **好** hǎo (bien, bon)." },
            { t: "savais-tu", md: "Depuis les années 1950, la Chine continentale utilise des **caractères simplifiés**, avec moins de traits : 马 mǎ (cheval), 门 mén (porte). À Taïwan, à Hong Kong et à Macao, on écrit les **caractères traditionnels** : 馬, 門. Dans ce cours, tu apprends les simplifiés." },
            { t: "verifie", q: "Tu rencontres le caractère inconnu 湖 hú. À quoi a-t-il sans doute rapport ?", choix: ["À l'eau", "À la bouche", "À une femme", "Au soleil"], bonne: 0, explication: "**湖** porte à gauche la clé **氵**, l'eau : il veut dire « lac ». La clé ne donne pas tout le sens, mais elle met sur la piste." },
          ],
        },
      ],
      bilan: "Un caractère = une syllabe et un sens ; on compte chaque geste du pinceau ; haut avant bas, gauche avant droite, 横 avant 竖, 撇 avant 捺, on ferme le cadre en dernier ; et la clé met sur la piste du sens.",
    },

    "5e-chinois-03-se-presenter": {
      accroche: "Premier jour d'échange à Shanghai. Ton correspondant te sourit : « 你好！我叫李明。你呢？ ». Il attend ton nom… et sans doute ta nationalité. Bonne nouvelle : en chinois, le verbe ne se conjugue jamais.",
      objectifs: [
        "Dire et demander le nom avec 叫",
        "Dire ta nationalité avec 是 et le mot 人",
        "Utiliser les pronoms personnels, 也 et 呢",
      ],
      sections: [
        {
          titre: "Les pronoms, sans conjugaison",
          blocs: [
            { t: "tableau", titre: "Les pronoms personnels", entetes: ["Singulier", "Pluriel (+ 们 men)"], lignes: [
              ["**我** wǒ : je, moi", "**我们** wǒmen : nous"],
              ["**你** nǐ : tu, toi", "**你们** nǐmen : vous (plusieurs personnes)"],
              ["**您** nín : vous (politesse, une personne)", "—"],
              ["**他** tā : il, lui", "**他们** tāmen : ils, eux"],
              ["**她** tā : elle", "**她们** tāmen : elles"],
            ] },
            { t: "propriete", titre: "Un verbe, une seule forme", md: "En chinois, ==le verbe ne change jamais== : 我**是**, 你**是**, 他**是**, 我们**是**… c'est toujours **是** shì (être). Pour mettre un pronom au pluriel, on ajoute **们** men : 我 → 我们. Le verbe, lui, ne bouge pas : 我们是法国人 (nous sommes français)." },
            { t: "texte", md: "**他** et **她** se prononcent tous deux **tā** : à l'oral, « il » et « elle » sont identiques ! À l'écrit, on les distingue par la clé : 亻 (personne) dans 他, 女 (femme) dans 她." },
            { t: "verifie", q: "Comment dit-on « Nous sommes élèves » ?", choix: ["我们是学生。", "我是们学生。", "我们是们学生。", "我们学生是。"], bonne: 0, explication: "On ajoute 们 au pronom (**我们**) ; 是 ne change pas et se place entre le sujet et l'attribut. 学生 xuésheng = élève." },
          ],
        },
        {
          titre: "Dire et demander son nom",
          blocs: [
            { t: "texte", md: "Pour dire ton nom, utilise **叫** jiào (s'appeler) : **我叫 Léa。** Wǒ jiào Léa. Pour le demander : **你叫什么名字？** Nǐ jiào shénme míngzi ? Mot à mot : « tu t'appelles quel nom ? ». **什么** shénme veut dire « quoi, quel » et **名字** míngzi « nom ».\n\nRemarque : ==pas d'inversion==. 什么名字 prend simplement la place de la réponse : 你叫**什么名字**？ → 我叫**王小明**。" },
            { t: "attention", md: "Ne dis pas « 我是叫 Léa » ✗ : 是 et 叫 sont deux verbes, un seul suffit. Dis **我叫 Léa** (je m'appelle Léa) ou **我是 Léa** (je suis Léa)." },
            { t: "definition", terme: "Le nom de famille d'abord", md: "En chinois, ==le nom de famille vient en premier==, puis le prénom. Dans **王小明** Wáng Xiǎomíng, 王 Wáng est le nom de famille et 小明 Xiǎomíng le prénom. 王, 李 Lǐ et 张 Zhāng sont parmi les noms de famille les plus répandus en Chine." },
            { t: "schema", titre: "Se présenter : l'ordre des mots", legende: "En haut : la nationalité se forme avec le pays + 人. En bas : en chinois, le nom de famille passe devant le prénom ; en français, c'est l'inverse.", svg: `<svg viewBox="0 0 400 246"><text class="texte-petit" x="200" y="16" text-anchor="middle">Une phrase pour dire sa nationalité</text><rect class="aplat-papier" x="20" y="26" width="74" height="56" rx="6"/><rect class="trait" x="20" y="26" width="74" height="56" rx="6"/><rect class="aplat-papier" x="102" y="26" width="74" height="56" rx="6"/><rect class="trait" x="102" y="26" width="74" height="56" rx="6"/><rect class="aplat" x="184" y="26" width="110" height="56" rx="6"/><rect class="trait" x="184" y="26" width="110" height="56" rx="6"/><rect class="aplat" x="302" y="26" width="88" height="56" rx="6"/><rect class="trait" x="302" y="26" width="88" height="56" rx="6"/><text class="texte" style="font-size:24px" x="57" y="58" text-anchor="middle">我</text><text class="texte" style="font-size:24px" x="139" y="58" text-anchor="middle">是</text><text class="texte" style="font-size:24px" x="239" y="58" text-anchor="middle">法国</text><text class="texte" style="font-size:24px" x="346" y="58" text-anchor="middle">人</text><text class="texte-petit" x="57" y="74" text-anchor="middle">wǒ : je</text><text class="texte-petit" x="139" y="74" text-anchor="middle">shì : être</text><text class="texte-petit" x="239" y="74" text-anchor="middle">Fǎguó : France</text><text class="texte-petit" x="346" y="74" text-anchor="middle">rén : personne</text><path class="trait-fin" d="M188 90Q188 98 198 98H277Q284 98 287 106Q290 98 297 98H376Q386 98 386 90"/><text class="texte" style="font-size:15px" x="287" y="124" text-anchor="middle">法国人 Fǎguórén</text><text class="texte-petit" x="287" y="140" text-anchor="middle">un Français, une Française</text><text class="texte-petit" x="200" y="168" text-anchor="middle">L'ordre des noms</text><rect class="aplat" x="40" y="176" width="56" height="44" rx="6"/><rect class="trait" x="40" y="176" width="56" height="44" rx="6"/><rect class="aplat-papier" x="100" y="176" width="84" height="44" rx="6"/><rect class="trait" x="100" y="176" width="84" height="44" rx="6"/><text class="texte" style="font-size:20px" x="68" y="200" text-anchor="middle">王</text><text class="texte" style="font-size:20px" x="142" y="200" text-anchor="middle">小明</text><text class="texte-petit" x="68" y="214" text-anchor="middle">Wáng</text><text class="texte-petit" x="142" y="214" text-anchor="middle">Xiǎomíng</text><rect class="aplat-papier" x="232" y="176" width="60" height="44" rx="6"/><rect class="trait" x="232" y="176" width="60" height="44" rx="6"/><rect class="aplat" x="296" y="176" width="84" height="44" rx="6"/><rect class="trait" x="296" y="176" width="84" height="44" rx="6"/><text class="texte" style="font-size:15px" x="262" y="204" text-anchor="middle">Léa</text><text class="texte" style="font-size:15px" x="338" y="204" text-anchor="middle">Martin</text><text class="texte-petit" x="68" y="238" text-anchor="middle">nom de famille</text><text class="texte-petit" x="142" y="238" text-anchor="middle">prénom</text><text class="texte-petit" x="262" y="238" text-anchor="middle">prénom</text><text class="texte-petit" x="338" y="238" text-anchor="middle">nom de famille</text></svg>` },
          ],
        },
        {
          titre: "Dire sa nationalité",
          blocs: [
            { t: "texte", md: "Pour la nationalité, la recette est simple : ==pays + 人 rén (personne)==. **国** guó veut dire « pays » : 法国 Fǎguó (la France) → **法国人** Fǎguórén (un Français, une Française). Le même mot sert au masculin et au féminin. Pour demander : **你是哪国人？** Nǐ shì nǎ guó rén ? (tu es une personne de quel pays ?)" },
            { t: "tableau", titre: "Pays et nationalités", entetes: ["Pays", "Nationalité", "Sens"], lignes: [
              ["中国 Zhōngguó", "中国人 Zhōngguórén", "Chine → Chinois, Chinoise"],
              ["法国 Fǎguó", "法国人 Fǎguórén", "France → Français, Française"],
              ["英国 Yīngguó", "英国人 Yīngguórén", "Royaume-Uni → Britannique"],
              ["美国 Měiguó", "美国人 Měiguórén", "États-Unis → Américain, Américaine"],
              ["德国 Déguó", "德国人 Déguórén", "Allemagne → Allemand, Allemande"],
            ] },
            { t: "savais-tu", md: "**中国** Zhōngguó signifie « le pays du Milieu » : 中 zhōng = milieu, 国 guó = pays. Pour d'autres pays, le premier caractère imite souvent un son du nom : 法 Fǎ pour « France », 德 Dé pour « Deutschland », 英 Yīng pour « England »." },
            { t: "attention", md: "La négation **不** se place **devant** le verbe : **我不是中国人。** Wǒ bú shì Zhōngguórén. (Je ne suis pas chinois.) 不 se prononce bú, car 是 shì est au 4e ton. Et ne dis pas « 我是法国 » : cela voudrait dire « je suis la France » !" },
            { t: "verifie", q: "Comment demande-t-on à quelqu'un sa nationalité ?", choix: ["你是哪国人？", "你叫什么名字？", "你是哪国人吗？", "你是法国吗？"], bonne: 0, explication: "**哪** nǎ (quel) suffit à faire une question : on n'ajoute pas 吗. 你叫什么名字 demande le nom, pas la nationalité." },
          ],
        },
        {
          titre: "Renvoyer la question : 呢 et 也",
          blocs: [
            { t: "propriete", titre: "呢 ne et 也 yě", md: "**呢** ne, placé après un nom ou un pronom, ==renvoie la même question== : 我是法国人，**你呢？** (Je suis français, et toi ?) Pas besoin de répéter toute la phrase.\n\n**也** yě (aussi) se place ==toujours devant le verbe== (ou devant 很 + adjectif : 我也很高兴) : 我**也**是法国人 (moi aussi, je suis français). Jamais en fin de phrase comme « aussi » en français : « 我是法国人也 » ✗." },
            { t: "exemple", titre: "Une présentation complète", md: "— 你好！我叫李明。你叫什么名字？\n— 我叫 Léa。我是法国人，你呢？\n— 我是中国人。很高兴认识你！\n— 我也很高兴认识你！\n\n(Nǐ hǎo ! Wǒ jiào Lǐ Míng. Nǐ jiào shénme míngzi ? — Wǒ jiào Léa. Wǒ shì Fǎguórén, nǐ ne ? — Wǒ shì Zhōngguórén. Hěn gāoxìng rènshi nǐ ! — Wǒ yě hěn gāoxìng rènshi nǐ !)\n\n**很高兴认识你** = 很 hěn (très) + 高兴 gāoxìng (content) + 认识 rènshi (connaître) + 你 : « ravi de te connaître, enchanté »." },
            { t: "astuce", md: "En chinois, ==la réponse reprend la structure de la question== : 你**叫**什么名字？ → 我**叫**李明。 ; 你**是**哪国人？ → 我**是**法国人。 Remplace le mot interrogatif par ta réponse, et le tour est joué." },
          ],
        },
      ],
      bilan: "我叫…、我是法国人、你呢？ : un verbe qui ne se conjugue jamais, 们 pour le pluriel, 人 après le pays, le nom de famille d'abord, et 也 toujours devant le verbe.",
    },

    "5e-chinois-04-nombres-age-date": {
      accroche: "En chinois, 99 se dit « neuf dix neuf » : 九十九. Pas de « quatre-vingt-dix-neuf » ! Avec seulement onze caractères, de 零 à 十, tu peux compter jusqu'à 99… et dire ton âge et la date de ton anniversaire.",
      objectifs: [
        "Compter de 0 à 99 en lisant les nombres comme un calcul",
        "Demander et dire ton âge avec 岁",
        "Dire la date : mois, jour, jour de la semaine, anniversaire",
      ],
      sections: [
        {
          titre: "De 0 à 10, avec une seule main",
          blocs: [
            { t: "texte", md: "Les dix premiers nombres sont la base de tout. Les trois premiers se reconnaissent tout de suite : un, deux, trois traits horizontaux, **一 二 三**. En Chine, on compte aussi ==avec une seule main, même jusqu'à 10== : de 6 à 10, chaque nombre a son geste." },
            { t: "tableau", titre: "Les nombres de 0 à 10", entetes: ["Chiffre", "Caractère", "Pinyin", "Geste d'une main"], lignes: [
              ["0", "零", "líng", "—"],
              ["1", "一", "yī", "l'index levé"],
              ["2", "二", "èr", "l'index et le majeur"],
              ["3", "三", "sān", "trois doigts levés"],
              ["4", "四", "sì", "quatre doigts, le pouce replié"],
              ["5", "五", "wǔ", "la main ouverte"],
              ["6", "六", "liù", "le pouce et le petit doigt tendus"],
              ["7", "七", "qī", "le bout du pouce, de l'index et du majeur réunis"],
              ["8", "八", "bā", "le pouce et l'index écartés"],
              ["9", "九", "jiǔ", "l'index replié en crochet"],
              ["10", "十", "shí", "le poing fermé, ou les deux index croisés"],
            ] },
            { t: "astuce", md: "Le geste de 10 avec les deux index croisés dessine le caractère **十** lui-même ! Et pour retenir 四 sì (4) et 十 shí (10), qui se ressemblent à l'oral, fais bien la différence entre le **s** sifflant et le **sh** langue recourbée, et entre le 4e ton et le 2e ton." },
          ],
        },
        {
          titre: "De 11 à 99 : compter comme un calcul",
          blocs: [
            { t: "propriete", titre: "Avant ou après 十", md: "Un chiffre placé ==**après** 十 s'ajoute== : 十二 shí'èr = 10 + 2 = 12. Un chiffre placé ==**avant** 十 multiplie== : 二十 èrshí = 2 × 10 = 20. On combine les deux : 三十五 sānshíwǔ = 3 × 10 + 5 = 35. Et 100 se dit 一百 yìbǎi." },
            { t: "schema", titre: "Lire un nombre chinois", legende: "Le même caractère 十 sert partout : c'est sa place par rapport aux autres chiffres qui dit s'il faut ajouter ou multiplier.", svg: `<svg viewBox="0 0 400 190"><text class="texte" style="font-size:26px" x="64" y="46" text-anchor="middle">十二</text><text class="texte-petit" x="64" y="64" text-anchor="middle">shí'èr</text><text class="texte" style="font-size:16px" x="122" y="44">10 + 2 = 12</text><text class="texte" style="font-size:26px" x="64" y="104" text-anchor="middle">二十</text><text class="texte-petit" x="64" y="122" text-anchor="middle">èrshí</text><text class="texte" style="font-size:16px" x="122" y="102">2 × 10 = 20</text><text class="texte" style="font-size:26px" x="64" y="162" text-anchor="middle">三十五</text><text class="texte-petit" x="64" y="180" text-anchor="middle">sānshíwǔ</text><text class="texte" style="font-size:16px" x="122" y="160">3 × 10 + 5 = 35</text><rect class="aplat" x="262" y="22" width="126" height="150" rx="8"/><rect class="trait" x="262" y="22" width="126" height="150" rx="8"/><text class="texte" style="font-size:15px" x="325" y="56" text-anchor="middle">Après 十 :</text><text class="texte-pigment" x="325" y="78" text-anchor="middle">on ajoute +</text><line class="pointille" x1="276" y1="97" x2="374" y2="97"/><text class="texte" style="font-size:15px" x="325" y="126" text-anchor="middle">Avant 十 :</text><text class="texte-pigment" x="325" y="148" text-anchor="middle">on multiplie ×</text></svg>` },
            { t: "attention", md: "De 11 à 19, on dit simplement 十一, 十六…, sans 一 devant : **十六** shíliù (16). Et l'apostrophe de **shí'èr** sépare les deux syllabes : on lit shí-èr. Ne confonds pas 十二 (12) et 二十 (20) : l'ordre change tout !" },
            { t: "propriete", titre: "Le ton de 一 change", md: "**一** se prononce **yī** quand on compte ou dans une date (一月 yīyuè, 十一 shíyī) ; **yí** devant un 4e ton (一个 yí ge) ; **yì** devant les autres tons (一百 yìbǎi). Comme pour 不, on écrit le ton réellement prononcé." },
            { t: "verifie", q: "Quel nombre s'écrit 七十四 ?", choix: ["47", "74", "704", "11"], bonne: 1, explication: "七十 = 7 × 10 = 70, puis 四 = 4 : **74** (qīshísì). 47 s'écrirait 四十七." },
          ],
        },
        {
          titre: "Dire son âge",
          blocs: [
            { t: "texte", md: "Pour demander son âge à un enfant : **你几岁？** Nǐ jǐ suì ? (几 jǐ = combien, 岁 suì = an d'âge). On peut ajouter **今年** jīnnián (cette année), placé avant 几 : 你今年几岁？ La réponse remplace 几 par le nombre : **我十二岁。** Wǒ shí'èr suì. (J'ai 12 ans.)" },
            { t: "attention", md: "==L'âge se dit sans verbe== : ni 有 (avoir), ni 是 (être). « 我有十二岁 » ✗ est un calque du français. Dis simplement **我十二岁。** Le nombre se place avant 岁 : « 我岁十二 » ✗ n'existe pas." },
          ],
        },
        {
          titre: "Mois, jours et date",
          blocs: [
            { t: "texte", md: "Les mois n'ont pas de nom : ce sont des **numéros + 月** yuè (lune, mois). 一月 yīyuè (janvier), 二月 èryuè (février)… 十二月 shí'èryuè (décembre). Le jour du mois se dit avec **号** hào à l'oral (ou 日 rì à l'écrit) : 三号 sān hào, le 3. Les jours de la semaine sont **星期** xīngqī (semaine) + un numéro." },
            { t: "tableau", titre: "La semaine", entetes: ["Jour", "Chinois", "Pinyin"], lignes: [
              ["lundi", "星期一", "xīngqīyī"],
              ["mardi", "星期二", "xīngqī'èr"],
              ["mercredi", "星期三", "xīngqīsān"],
              ["jeudi", "星期四", "xīngqīsì"],
              ["vendredi", "星期五", "xīngqīwǔ"],
              ["samedi", "星期六", "xīngqīliù"],
              ["dimanche", "星期天 (ou 星期日)", "xīngqītiān (xīngqīrì)"],
            ] },
            { t: "propriete", titre: "Du plus grand au plus petit", md: "En chinois, la date va ==du plus grand au plus petit== : **année → mois → jour → jour de la semaine**. 2026年5月3号，星期天 = le dimanche 3 mai 2026. L'année (年 nián) se lit chiffre par chiffre : 二零二六年 èr líng èr liù nián. Attention : il n'y a pas de « 星期七 » ; dimanche, c'est 星期天." },
            { t: "exemple", titre: "Dates et anniversaire", md: "Le 14 juillet : **七月十四号** qīyuè shísì hào.\nMercredi : **星期三** xīngqīsān.\n« Mon anniversaire est le 2 mars » : **我的生日是三月二号。** Wǒ de shēngrì shì sānyuè èr hào. (生日 shēngrì = anniversaire)\nEt pour fêter ça : **生日快乐！** Shēngrì kuàilè ! (Joyeux anniversaire !)" },
            { t: "verifie", q: "Comment écrit-on « le 5 mars » ?", choix: ["三月五号", "五月三号", "五号三月", "三号五月"], bonne: 0, explication: "Mars est le 3e mois (三月), et le jour vient **après** le mois : **三月五号** sānyuè wǔ hào. 五月三号 serait le 3 mai." },
          ],
        },
      ],
      bilan: "零 à 十, puis on calcule : 十二 = 10 + 2, 二十 = 2 × 10 ; l'âge sans verbe (我十二岁) ; la date du plus grand au plus petit : 2026年5月3号，星期天.",
    },

    "5e-chinois-05-famille-avoir": {
      accroche: "Xiǎomíng parle de sa famille : « 我有一个姐姐和两个弟弟。 » Une sœur plus âgée, deux frères plus jeunes : en chinois, on ne dit presque jamais « frère » tout court, on précise s'il est l'aîné ou le cadet.",
      objectifs: [
        "Nommer les membres de ta famille, aînés et cadets",
        "Dire ce que tu as ou n'as pas avec 有 et 没有, et compter avec 个 et 口",
        "Exprimer la possession avec 的",
      ],
      sections: [
        {
          titre: "Les membres de la famille",
          blocs: [
            { t: "texte", md: "Les mots de la famille proche sont souvent **redoublés**, avec une deuxième syllabe au ton neutre : 爸爸 bàba (papa), 妈妈 māma (maman). Pour les frères et sœurs, le chinois précise ==qui est l'aîné et qui est le cadet== : le grand frère n'a pas le même nom que le petit frère !" },
            { t: "schema", titre: "L'arbre de la famille", legende: "Du côté du père : 爷爷 yéye et 奶奶 nǎinai ; du côté de la mère : 外公 wàigōng et 外婆 wàipó (dans le nord, on dit souvent 姥姥 lǎolao pour la grand-mère maternelle). Les aînés sont à gauche de 我, les cadets à droite.", svg: `<svg viewBox="0 0 400 250"><text class="texte-petit" x="110" y="14" text-anchor="middle">côté du père</text><text class="texte-petit" x="290" y="14" text-anchor="middle">côté de la mère</text><path class="trait-fin" d="M92 34H128M110 34V88M272 34H308M290 34V88M130 100H270M200 100V140M50 140H350M50 140V150M125 140V150M200 140V148M275 140V150M350 140V150"/><text class="texte" style="font-size:18px" x="70" y="40" text-anchor="middle">爷爷</text><text class="texte" style="font-size:18px" x="150" y="40" text-anchor="middle">奶奶</text><text class="texte" style="font-size:18px" x="250" y="40" text-anchor="middle">外公</text><text class="texte" style="font-size:18px" x="330" y="40" text-anchor="middle">外婆</text><text class="texte-petit" x="70" y="56" text-anchor="middle">yéye</text><text class="texte-petit" x="150" y="56" text-anchor="middle">nǎinai</text><text class="texte-petit" x="250" y="56" text-anchor="middle">wàigōng</text><text class="texte-petit" x="330" y="56" text-anchor="middle">wàipó</text><text class="texte" style="font-size:18px" x="110" y="106" text-anchor="middle">爸爸</text><text class="texte" style="font-size:18px" x="290" y="106" text-anchor="middle">妈妈</text><text class="texte-petit" x="110" y="122" text-anchor="middle">bàba</text><text class="texte-petit" x="290" y="122" text-anchor="middle">māma</text><circle class="aplat" cx="200" cy="164" r="17"/><circle class="trait-fin" cx="200" cy="164" r="17"/><text class="texte" style="font-size:18px" x="50" y="170" text-anchor="middle">哥哥</text><text class="texte" style="font-size:18px" x="125" y="170" text-anchor="middle">姐姐</text><text class="texte" style="font-size:18px" x="200" y="170" text-anchor="middle">我</text><text class="texte" style="font-size:18px" x="275" y="170" text-anchor="middle">弟弟</text><text class="texte" style="font-size:18px" x="350" y="170" text-anchor="middle">妹妹</text><text class="texte-petit" x="50" y="190" text-anchor="middle">gēge</text><text class="texte-petit" x="125" y="190" text-anchor="middle">jiějie</text><text class="texte-petit" x="200" y="194" text-anchor="middle">wǒ</text><text class="texte-petit" x="275" y="190" text-anchor="middle">dìdi</text><text class="texte-petit" x="350" y="190" text-anchor="middle">mèimei</text><text class="texte-petit" x="50" y="204" text-anchor="middle">grand frère</text><text class="texte-petit" x="125" y="204" text-anchor="middle">grande sœur</text><text class="texte-petit" x="200" y="208" text-anchor="middle">moi</text><text class="texte-petit" x="275" y="204" text-anchor="middle">petit frère</text><text class="texte-petit" x="350" y="204" text-anchor="middle">petite sœur</text><line class="trait-fin" x1="184" y1="224" x2="34" y2="224" marker-end="url(#fl)"/><line class="trait-fin" x1="216" y1="224" x2="366" y2="224" marker-end="url(#fl)"/><text class="texte-pigment" x="110" y="242" text-anchor="middle">plus âgés que moi</text><text class="texte-pigment" x="290" y="242" text-anchor="middle">plus jeunes que moi</text></svg>` },
            { t: "astuce", md: "Retiens les paires : **哥哥 / 弟弟** pour les frères (aîné / cadet), **姐姐 / 妹妹** pour les sœurs (aînée / cadette). Les deux mots des sœurs portent la clé **女** (femme) : 姐, 妹." },
            { t: "verifie", q: "Ton frère a 9 ans et toi 12. Comment l'appelles-tu ?", choix: ["哥哥 gēge", "弟弟 dìdi", "姐姐 jiějie", "爷爷 yéye"], bonne: 1, explication: "Il est plus jeune que toi : c'est ton **petit frère**, 弟弟 dìdi. 哥哥 serait un frère plus âgé." },
          ],
        },
        {
          titre: "Avoir et ne pas avoir : 有 et 没有",
          blocs: [
            { t: "definition", terme: "有 yǒu", md: "**有** yǒu veut dire « avoir » ou « il y a » : 我有一个哥哥 (j'ai un grand frère). ==Sa négation est toujours 没有 méiyǒu==, jamais 不有 : **我没有妹妹。** Wǒ méiyǒu mèimei. (Je n'ai pas de petite sœur.)" },
            { t: "attention", md: "« 我不有狗 » ✗ n'existe pas : on dit **我没有狗** Wǒ méiyǒu gǒu (je n'ai pas de chien ; 狗 gǒu = chien). 不 est la négation la plus courante, mais ==有 refuse 不== : c'est l'exception à retenir." },
            { t: "texte", md: "Pour relier deux noms, utilise **和** hé (et) : 爸爸和妈妈 (papa et maman). Dans une liste, les éléments sont séparés par la virgule d'énumération chinoise **、** : 爸爸、妈妈和我 (papa, maman et moi)." },
          ],
        },
        {
          titre: "Compter les personnes : 个 et 口",
          blocs: [
            { t: "propriete", titre: "Nombre + classificateur + nom", md: "Entre un nombre et un nom, le chinois exige un petit mot : le **classificateur** (on dit aussi une mesure). Le plus courant est **个** gè : 一个哥哥 yí ge gēge (un grand frère). Devant un classificateur, « deux » se dit **两** liǎng, et non 二 : **两个妹妹** liǎng ge mèimei (deux petites sœurs)." },
            { t: "schema", titre: "Le petit mot obligatoire : le classificateur", legende: "个 est le classificateur le plus courant ; 口 kǒu (la « bouche ») sert ici à compter l'ensemble des membres d'une famille.", svg: `<svg viewBox="0 0 400 212"><text class="texte-petit" x="65" y="20" text-anchor="middle">nombre</text><text class="texte-petit" x="155" y="20" text-anchor="middle">classificateur</text><text class="texte-petit" x="255" y="20" text-anchor="middle">nom</text><text class="texte-petit" x="352" y="20" text-anchor="middle">sens</text><rect class="aplat-papier" x="30" y="30" width="70" height="48" rx="6"/><rect class="trait" x="30" y="30" width="70" height="48" rx="6"/><rect class="aplat" x="120" y="30" width="70" height="48" rx="6"/><rect class="trait" x="120" y="30" width="70" height="48" rx="6"/><rect class="aplat-papier" x="210" y="30" width="90" height="48" rx="6"/><rect class="trait" x="210" y="30" width="90" height="48" rx="6"/><text class="texte" style="font-size:22px" x="65" y="58" text-anchor="middle">一</text><text class="texte" style="font-size:22px" x="155" y="58" text-anchor="middle">个</text><text class="texte" style="font-size:22px" x="255" y="58" text-anchor="middle">哥哥</text><text class="texte-petit" x="65" y="72" text-anchor="middle">yí</text><text class="texte-petit" x="155" y="72" text-anchor="middle">ge</text><text class="texte-petit" x="255" y="72" text-anchor="middle">gēge</text><text class="texte-petit" x="352" y="58" text-anchor="middle">un grand frère</text><rect class="aplat-papier" x="30" y="92" width="70" height="48" rx="6"/><rect class="trait" x="30" y="92" width="70" height="48" rx="6"/><rect class="aplat" x="120" y="92" width="70" height="48" rx="6"/><rect class="trait" x="120" y="92" width="70" height="48" rx="6"/><rect class="aplat-papier" x="210" y="92" width="90" height="48" rx="6"/><rect class="trait" x="210" y="92" width="90" height="48" rx="6"/><text class="texte" style="font-size:22px" x="65" y="120" text-anchor="middle">两</text><text class="texte" style="font-size:22px" x="155" y="120" text-anchor="middle">个</text><text class="texte" style="font-size:22px" x="255" y="120" text-anchor="middle">妹妹</text><text class="texte-petit" x="65" y="134" text-anchor="middle">liǎng</text><text class="texte-petit" x="155" y="134" text-anchor="middle">ge</text><text class="texte-petit" x="255" y="134" text-anchor="middle">mèimei</text><text class="texte-petit" x="352" y="114" text-anchor="middle">deux petites</text><text class="texte-petit" x="352" y="128" text-anchor="middle">sœurs</text><rect class="aplat-papier" x="30" y="154" width="70" height="48" rx="6"/><rect class="trait" x="30" y="154" width="70" height="48" rx="6"/><rect class="aplat" x="120" y="154" width="70" height="48" rx="6"/><rect class="trait" x="120" y="154" width="70" height="48" rx="6"/><rect class="aplat-papier" x="210" y="154" width="90" height="48" rx="6"/><rect class="trait" x="210" y="154" width="90" height="48" rx="6"/><text class="texte" style="font-size:22px" x="65" y="182" text-anchor="middle">四</text><text class="texte" style="font-size:22px" x="155" y="182" text-anchor="middle">口</text><text class="texte" style="font-size:22px" x="255" y="182" text-anchor="middle">人</text><text class="texte-petit" x="65" y="196" text-anchor="middle">sì</text><text class="texte-petit" x="155" y="196" text-anchor="middle">kǒu</text><text class="texte-petit" x="255" y="196" text-anchor="middle">rén</text><text class="texte-petit" x="352" y="176" text-anchor="middle">quatre personnes</text><text class="texte-petit" x="352" y="190" text-anchor="middle">(toute la famille)</text><text class="texte" x="110" y="59" text-anchor="middle">+</text><text class="texte" x="200" y="59" text-anchor="middle">+</text><text class="texte" x="110" y="121" text-anchor="middle">+</text><text class="texte" x="200" y="121" text-anchor="middle">+</text><text class="texte" x="110" y="183" text-anchor="middle">+</text><text class="texte" x="200" y="183" text-anchor="middle">+</text></svg>` },
            { t: "texte", md: "Pour compter **tous** les membres d'une famille, on emploie le classificateur **口** kǒu (bouche) : **你家有几口人？** Nǐ jiā yǒu jǐ kǒu rén ? (Combien êtes-vous dans ta famille ?) → **我家有四口人。** Wǒ jiā yǒu sì kǒu rén. (Nous sommes quatre dans ma famille.) ==口 sert pour le total==, pas pour une personne précise : on ne dit pas « 一口哥哥 »." },
            { t: "exemple", titre: "Présenter sa famille", md: "我家有五口人：爸爸、妈妈、一个哥哥、一个妹妹和我。我没有弟弟。\nWǒ jiā yǒu wǔ kǒu rén : bàba, māma, yí ge gēge, yí ge mèimei hé wǒ. Wǒ méiyǒu dìdi.\n(Nous sommes cinq : papa, maman, un grand frère, une petite sœur et moi. Je n'ai pas de petit frère.)" },
            { t: "verifie", q: "Comment dit-on « J'ai deux grandes sœurs » ?", choix: ["我有两个姐姐。", "我有二个姐姐。", "我有两姐姐。", "我有两口姐姐。"], bonne: 0, explication: "Nombre + classificateur + nom : **两个姐姐**. Devant 个, « deux » se dit 两, le classificateur est obligatoire, et 口 ne compte que le total de la famille." },
          ],
        },
        {
          titre: "Mon, ton, son : 的",
          blocs: [
            { t: "propriete", titre: "的 de : la possession", md: "**的** de relie ==le possesseur, placé devant, à ce qu'il possède, placé derrière== : 我的书 wǒ de shū (mon livre), 你的书 nǐ de shū (ton livre), 老师的书 (le livre du professeur). Avec la famille proche, on omet souvent 的 : **我妈妈** wǒ māma (ma mère), **我家** wǒ jiā (ma famille, chez moi)." },
            { t: "tableau", titre: "Possesseur + 的 + objet", entetes: ["Chinois", "Mot à mot", "Sens"], lignes: [
              ["我的书", "moi + de + livre", "mon livre"],
              ["你的书", "toi + de + livre", "ton livre"],
              ["她妈妈 (ou 她的妈妈)", "elle + (de) + maman", "sa mère (à elle)"],
              ["这是你的书吗？", "ceci + être + toi + de + livre + ?", "Est-ce que c'est ton livre ?"],
            ] },
            { t: "attention", md: "L'ordre est l'inverse du français « le livre **de** Léa » : en chinois, le possesseur vient d'abord, **Léa 的书**. 我妈妈 = ma mère, mais « 妈妈的我 » ✗ inverserait le possesseur et la personne possédée. Et 我是妈妈 voudrait dire « je suis maman »." },
          ],
        },
      ],
      bilan: "哥哥 / 弟弟, 姐姐 / 妹妹 : aîné ou cadet ; 有 se nie avec 没 (没有) ; nombre + classificateur + nom (一个哥哥, 两个妹妹, 四口人) ; et le possesseur passe devant avec 的.",
    },

    "5e-chinois-06-questions": {
      accroche: "En français, on peut demander « Tu es élève ? », « Est-ce que tu es élève ? » ou « Es-tu élève ? ». En chinois, c'est plus simple : on ne déplace jamais rien. On ajoute un petit mot à la fin, ou on remplace la réponse par un mot interrogatif.",
      objectifs: [
        "Poser une question fermée avec 吗 et renvoyer la question avec 呢",
        "Utiliser 什么, 谁, 哪儿 en les plaçant à la place de la réponse",
        "Demander une quantité avec 几 ou 多少",
      ],
      sections: [
        {
          titre: "Oui ou non : la particule 吗",
          blocs: [
            { t: "propriete", titre: "吗 à la fin de la phrase", md: "Pour une question à laquelle on répond par oui ou par non, ==on garde la phrase affirmative et on ajoute 吗 ma à la fin== : 你是学生。 → **你是学生吗？** Nǐ shì xuésheng ma ? (Es-tu élève ?) Rien d'autre ne bouge : pas d'inversion du sujet et du verbe." },
            { t: "texte", md: "Pour répondre, on reprend le verbe : **是** (oui, je le suis) ou **不是** bú shì (non). À 你有哥哥吗？ (As-tu un grand frère ?), on répond 有 (oui) ou 没有 (non). Le chinois n'a pas vraiment de mot pour « oui » : on répète le verbe !\n\n**呢** ne, lui, renvoie la question sans la répéter : 我很好，**你呢？** (Je vais bien, et toi ?) ; 我十二岁，你呢？ (J'ai douze ans, et toi ?)." },
            { t: "verifie", q: "Comment transformes-tu 他是老师 en question : « Est-il professeur ? »", choix: ["他是老师吗？", "是他老师吗？", "他吗是老师？", "吗他是老师？"], bonne: 0, explication: "On garde la phrase et on ajoute **吗** à la fin : 他是老师吗？ Tā shì lǎoshī ma ? Le chinois n'inverse jamais le sujet et le verbe." },
          ],
        },
        {
          titre: "Les mots interrogatifs",
          blocs: [
            { t: "tableau", titre: "Les mots pour questionner", entetes: ["Mot", "Pinyin", "Sens", "Exemple"], lignes: [
              ["**什么**", "shénme", "quoi, quel", "这是什么？ Qu'est-ce que c'est ?"],
              ["**谁**", "shéi", "qui", "他是谁？ Qui est-il ?"],
              ["**哪儿**", "nǎr", "où", "你去哪儿？ Où vas-tu ?"],
              ["**哪**", "nǎ", "quel, lequel", "你是哪国人？ De quel pays es-tu ?"],
              ["**几**", "jǐ", "combien (petit nombre)", "你有几个哥哥？ Combien de grands frères as-tu ?"],
              ["**多少**", "duōshao", "combien (tout nombre)", "你们班有多少学生？ Combien d'élèves y a-t-il dans votre classe ?"],
            ] },
            { t: "propriete", titre: "Le mot interrogatif prend la place de la réponse", md: "En chinois, ==le mot interrogatif se met exactement là où sera la réponse==. Ni inversion, ni « est-ce que ». Pour fabriquer une question, écris la réponse, puis remplace l'information cherchée par le bon mot interrogatif." },
            { t: "schema", titre: "Remplacer la réponse", legende: "谁 prend la place de 老师 ; 哪儿 prend la place de 学校. Le reste de la phrase ne bouge pas.", svg: `<svg viewBox="0 0 400 200"><text class="texte-petit" x="200" y="18" text-anchor="middle">On remplace l'information cherchée par le mot interrogatif</text><line class="pointille" x1="200" y1="34" x2="200" y2="176"/><rect class="aplat" x="112" y="38" width="56" height="34" rx="6"/><rect class="aplat" x="122" y="126" width="36" height="34" rx="6"/><rect class="aplat" x="312" y="38" width="56" height="34" rx="6"/><rect class="aplat" x="312" y="126" width="56" height="34" rx="6"/><text class="texte" style="font-size:22px" x="40" y="64" text-anchor="middle">他</text><text class="texte" style="font-size:22px" x="80" y="64" text-anchor="middle">是</text><text class="texte" style="font-size:22px" x="140" y="64" text-anchor="middle">老师</text><text class="texte" style="font-size:22px" x="180" y="64" text-anchor="middle">。</text><text class="texte-petit" x="40" y="84" text-anchor="middle">tā</text><text class="texte-petit" x="80" y="84" text-anchor="middle">shì</text><text class="texte-petit" x="140" y="84" text-anchor="middle">lǎoshī</text><line class="trait-fin" x1="140" y1="90" x2="140" y2="120" marker-end="url(#fl-p)"/><text class="texte" style="font-size:22px" x="40" y="152" text-anchor="middle">他</text><text class="texte" style="font-size:22px" x="80" y="152" text-anchor="middle">是</text><text class="texte" style="font-size:22px" x="140" y="152" text-anchor="middle">谁</text><text class="texte" style="font-size:22px" x="176" y="152" text-anchor="middle">？</text><text class="texte-petit" x="40" y="172" text-anchor="middle">tā</text><text class="texte-petit" x="80" y="172" text-anchor="middle">shì</text><text class="texte-petit" x="140" y="172" text-anchor="middle">shéi</text><text class="texte-petit" x="100" y="194" text-anchor="middle">Il est professeur. → Qui est-il ?</text><text class="texte" style="font-size:22px" x="236" y="64" text-anchor="middle">你</text><text class="texte" style="font-size:22px" x="276" y="64" text-anchor="middle">去</text><text class="texte" style="font-size:22px" x="340" y="64" text-anchor="middle">学校</text><text class="texte" style="font-size:22px" x="380" y="64" text-anchor="middle">。</text><text class="texte-petit" x="236" y="84" text-anchor="middle">nǐ</text><text class="texte-petit" x="276" y="84" text-anchor="middle">qù</text><text class="texte-petit" x="340" y="84" text-anchor="middle">xuéxiào</text><line class="trait-fin" x1="340" y1="90" x2="340" y2="120" marker-end="url(#fl-p)"/><text class="texte" style="font-size:22px" x="236" y="152" text-anchor="middle">你</text><text class="texte" style="font-size:22px" x="276" y="152" text-anchor="middle">去</text><text class="texte" style="font-size:22px" x="340" y="152" text-anchor="middle">哪儿</text><text class="texte" style="font-size:22px" x="380" y="152" text-anchor="middle">？</text><text class="texte-petit" x="236" y="172" text-anchor="middle">nǐ</text><text class="texte-petit" x="276" y="172" text-anchor="middle">qù</text><text class="texte-petit" x="340" y="172" text-anchor="middle">nǎr</text><text class="texte-petit" x="300" y="194" text-anchor="middle">Tu vas à l'école. → Où vas-tu ?</text></svg>` },
            { t: "texte", md: "谁 se prononce **shéi** à l'oral (shuí est une prononciation plus soutenue). Pour « où », dans le sud de la Chine, on dit plutôt **哪里** nǎlǐ, qui a le même sens que 哪儿 nǎr. Avec le verbe 住 zhù (habiter) : **你住在哪儿？** Nǐ zhù zài nǎr ? (Où habites-tu ?) → 我住在巴黎。 Wǒ zhù zài Bālí. (J'habite à Paris.)" },
            { t: "exemple", titre: "Trois questions à partir d'une phrase", md: "Phrase de départ : **他是老师。** Tā shì lǎoshī. (Il est professeur.)\n• Oui ou non : **他是老师吗？** Tā shì lǎoshī ma ?\n• Qui ? : **谁是老师？** Shéi shì lǎoshī ? (谁 remplace 他)\n• Quoi ? : **他是什么老师？** Tā shì shénme lǎoshī ? (Il est professeur de quoi ?) → 他是中文老师。 (Il est professeur de chinois.)" },
          ],
        },
        {
          titre: "Jamais deux marques de question",
          blocs: [
            { t: "attention", md: "==Un seul outil de question par phrase.== Avec 什么, 谁, 哪儿, 哪, 几 ou 多少, on n'ajoute **jamais** 吗.\n✗ 你叫什么名字吗？ → ✓ 你叫什么名字？\n✗ 你是哪国人吗？ → ✓ 你是哪国人？" },
            { t: "texte", md: "Il existe une autre façon de demander oui ou non : la forme **verbe + 不 + verbe**. **你是不是法国人？** Nǐ shì bu shì Fǎguórén ? (Es-tu français, oui ou non ?) Elle pose déjà la question : on n'y ajoute pas 吗 non plus. Et 吗 ne se place jamais après le sujet : « 你吗是中国人？ » ✗." },
            { t: "verifie", q: "Quelle question est correcte ?", choix: ["这是什么？", "这是什么吗？", "什么是这吗？", "这吗是什么？"], bonne: 0, explication: "**这是什么？** Zhè shì shénme ? (Qu'est-ce que c'est ?) : 什么 suffit, pas de 吗, et pas d'inversion. 这 zhè = ceci." },
          ],
        },
        {
          titre: "Combien ? 几 ou 多少",
          blocs: [
            { t: "tableau", titre: "几 ou 多少 ?", entetes: ["", "几 jǐ", "多少 duōshao"], lignes: [
              ["Quel nombre attend-on ?", "un petit nombre (en général moins de 10)", "n'importe quel nombre"],
              ["Classificateur devant le nom ?", "obligatoire : 几个哥哥, 几口人", "facultative : 多少学生"],
              ["Exemple", "你有几个哥哥？", "你们班有多少学生？"],
              ["Âge, heure", "你几岁？ 现在几点？", "—"],
            ] },
            { t: "texte", md: "Comme un nombre, **几** a besoin d'un classificateur devant le nom : on dit 几个哥哥, jamais « 几哥哥 ». **多少** convient aux grandes quantités et peut se passer de classificateur. Dans les deux cas, le mot se place devant le nom, après le verbe, là où sera le nombre de la réponse : 你有**几**个哥哥？ → 我有**两**个哥哥。" },
            { t: "verifie", q: "Tu veux savoir combien d'habitants compte une ville. Quel mot choisis-tu ?", choix: ["几 jǐ", "多少 duōshao", "什么 shénme"], bonne: 1, explication: "Le nombre attendu est très grand : **多少** duōshao. 几 attend un petit nombre, et 什么 ne demande pas une quantité." },
          ],
        },
      ],
      bilan: "吗 à la fin pour oui ou non, 呢 pour « et toi ? » ; 什么, 谁, 哪儿 à la place de la réponse ; 几 + classificateur pour un petit nombre, 多少 pour tous les autres ; et jamais 吗 avec un mot interrogatif.",
    },

    "5e-chinois-07-ecole-heure": {
      accroche: "Ton correspondant chinois t'envoie son emploi du temps : « 星期一上午八点：数学。 » Pour le lire, il te faut l'heure, le nom des matières… et une règle d'ordre des mots très différente du français.",
      objectifs: [
        "Demander et dire l'heure avec 点, 分, 半 et 刻",
        "Placer le temps avant le verbe, du plus grand au plus petit : 我八点上课",
        "Nommer les matières et le matériel scolaire",
      ],
      sections: [
        {
          titre: "Quelle heure est-il ?",
          blocs: [
            { t: "texte", md: "Pour demander l'heure : **现在几点？** Xiànzài jǐ diǎn ? (maintenant, combien d'heures ?). On répond avec **点** diǎn (heure) et **分** fēn (minute) : 现在八点。 (Il est 8 h.) 现在八点十分。 (Il est 8 h 10.) Pour les quarts et la demie, deux mots pratiques : **刻** kè (un quart d'heure) et **半** bàn (demi)." },
            { t: "schema", titre: "L'horloge chinoise", legende: "Sur le cadran : 一刻 yí kè (un quart) = 15 minutes, 半 bàn (demi) = 30 minutes, 三刻 sān kè (trois quarts) = 45 minutes. La moitié colorée montre la demi-heure. L'horloge indique 八点半 : 8 h 30.", svg: `<svg viewBox="0 0 400 250"><path class="aplat" d="M135 42A88 88 0 0 1 135 218Z"/><circle class="trait" cx="135" cy="130" r="88"/><path class="trait-fin" d="M135.0 50.0L135.0 42.0M175.0 60.7L179.0 53.8M204.3 90.0L211.2 86.0M215.0 130.0L223.0 130.0M204.3 170.0L211.2 174.0M175.0 199.3L179.0 206.2M135.0 210.0L135.0 218.0M95.0 199.3L91.0 206.2M65.7 170.0L58.8 174.0M55.0 130.0L47.0 130.0M65.7 90.0L58.8 86.0M95.0 60.7L91.0 53.8"/><text class="texte-petit" x="169" y="75" text-anchor="middle">1</text><text class="texte-petit" x="194" y="100" text-anchor="middle">2</text><text class="texte-petit" x="203" y="134" text-anchor="middle">3</text><text class="texte-petit" x="194" y="168" text-anchor="middle">4</text><text class="texte-petit" x="169" y="193" text-anchor="middle">5</text><text class="texte-petit" x="135" y="202" text-anchor="middle">6</text><text class="texte-petit" x="101" y="193" text-anchor="middle">7</text><text class="texte-petit" x="76" y="168" text-anchor="middle">8</text><text class="texte-petit" x="67" y="134" text-anchor="middle">9</text><text class="texte-petit" x="76" y="100" text-anchor="middle">10</text><text class="texte-petit" x="101" y="75" text-anchor="middle">11</text><text class="texte-petit" x="135" y="66" text-anchor="middle">12</text><line x1="135" y1="130" x2="135" y2="186" stroke="var(--encre)" stroke-width="2.5" stroke-linecap="round"/><line x1="135" y1="130" x2="88" y2="143" stroke="var(--encre)" stroke-width="5" stroke-linecap="round"/><circle class="aplat-fort" cx="135" cy="130" r="5"/><text class="texte" style="font-size:15px" x="233" y="124">一刻</text><text class="texte-petit" x="233" y="140">yí kè</text><text class="texte-petit" x="233" y="154">15 min</text><text class="texte" style="font-size:15px" x="37" y="124" text-anchor="end">三刻</text><text class="texte-petit" x="37" y="140" text-anchor="end">sān kè</text><text class="texte-petit" x="37" y="154" text-anchor="end">45 min</text><text class="texte" style="font-size:15px" x="135" y="240" text-anchor="middle">半 bàn = 30 min</text><text class="texte" style="font-size:24px" x="340" y="44" text-anchor="middle">八点半</text><text class="texte-petit" x="340" y="64" text-anchor="middle">bā diǎn bàn = 8 h 30</text><line class="pointille" x1="290" y1="80" x2="392" y2="80"/><text class="texte" style="font-size:15px" x="290" y="106">八点</text><text class="texte-petit" x="394" y="106" text-anchor="end">8 h</text><text class="texte" style="font-size:15px" x="290" y="132">八点一刻</text><text class="texte-petit" x="394" y="132" text-anchor="end">8 h 15</text><text class="texte" style="font-size:15px" x="290" y="158">八点半</text><text class="texte-petit" x="394" y="158" text-anchor="end">8 h 30</text><text class="texte" style="font-size:15px" x="290" y="184">八点三刻</text><text class="texte-petit" x="394" y="184" text-anchor="end">8 h 45</text></svg>` },
            { t: "tableau", titre: "Dire l'heure", entetes: ["Heure", "Chinois", "Pinyin"], lignes: [
              ["8 h", "八点", "bā diǎn"],
              ["8 h 10", "八点十分", "bā diǎn shí fēn"],
              ["8 h 15", "八点十五分 ou 八点一刻", "bā diǎn shíwǔ fēn, bā diǎn yí kè"],
              ["8 h 30", "八点半 ou 八点三十分", "bā diǎn bàn, bā diǎn sānshí fēn"],
              ["8 h 45", "八点四十五分 ou 八点三刻", "bā diǎn sìshíwǔ fēn, bā diǎn sān kè"],
              ["8 h 55", "差五分九点", "chà wǔ fēn jiǔ diǎn"],
              ["2 h", "两点", "liǎng diǎn"],
            ] },
            { t: "attention", md: "Deux pièges : **半 vient après 点** (九点半 jiǔ diǎn bàn, jamais « 半九点 ») ; et 2 h se dit **两点** liǎng diǎn, pas « 二点 ». Avec **差** chà (il manque), on compte comme « 9 h moins 5 » : 差五分九点 = 8 h 55. Enfin, 一 se dit yí devant 刻 kè, qui est au 4e ton : 一刻 yí kè." },
            { t: "verifie", q: "Comment dit-on « Il est 7 h 45 » ?", choix: ["现在七点三刻。", "现在七点一刻。", "现在三刻七点。", "现在七点半。"], bonne: 0, explication: "三刻 = trois quarts d'heure = 45 minutes, placé après 点 : **七点三刻** qī diǎn sān kè (ou 七点四十五分). 一刻 = 15 min, 半 = 30 min." },
          ],
        },
        {
          titre: "Les moments de la journée",
          blocs: [
            { t: "texte", md: "Pour préciser, on ajoute le moment de la journée **avant** l'heure : **上午** shàngwǔ (le matin), **中午** zhōngwǔ (midi), **下午** xiàwǔ (l'après-midi), **晚上** wǎnshang (le soir). 下午两点 = 14 h ; 晚上八点 = 20 h. À l'oral, on dit plus souvent « 2 h de l'après-midi » que « 14 h ». Et pour les jours : **今天** jīntiān (aujourd'hui), **明天** míngtiān (demain)." },
            { t: "texte", md: "**上** shàng (haut, monter) et **下** xià (bas, descendre) marquent l'avant et l'après : 上午 (avant midi) et 下午 (après midi), mais aussi **上课** shàngkè (commencer le cours, avoir cours) et **下课** xiàkè (finir le cours). On ajoute **课** kè (cours) au nom d'une matière : 数学课 shùxué kè, le cours de maths." },
          ],
        },
        {
          titre: "Le temps se place avant le verbe",
          blocs: [
            { t: "propriete", titre: "Le temps avant le verbe, du plus grand au plus petit", md: "En français, l'heure vient souvent à la fin : « j'ai cours à 8 h ». En chinois, ==le temps se place avant le verbe==, juste après le sujet (ou en tête de phrase), et ==du plus grand au plus petit== : jour → moment → heure. **我星期一上午八点上课。** Wǒ xīngqīyī shàngwǔ bā diǎn shàngkè. (Le lundi, j'ai cours à 8 h du matin.)" },
            { t: "schema", titre: "L'ordre des mots du temps", legende: "Le sujet, puis le temps du plus grand au plus petit, puis le verbe : 我星期一上午八点上课。", svg: `<svg viewBox="0 0 400 138"><text class="texte-petit" x="196" y="26" text-anchor="middle">le temps : du plus grand au plus petit</text><line class="trait-fin" x1="66" y1="38" x2="326" y2="38" marker-end="url(#fl)"/><rect class="aplat-papier" x="8" y="66" width="46" height="46" rx="6"/><rect class="trait" x="8" y="66" width="46" height="46" rx="6"/><rect class="aplat" x="62" y="50" width="104" height="62" rx="6"/><rect class="trait" x="62" y="50" width="104" height="62" rx="6"/><rect class="aplat" x="174" y="58" width="80" height="54" rx="6"/><rect class="trait" x="174" y="58" width="80" height="54" rx="6"/><rect class="aplat" x="262" y="66" width="66" height="46" rx="6"/><rect class="trait" x="262" y="66" width="66" height="46" rx="6"/><rect class="aplat-papier" x="336" y="66" width="58" height="46" rx="6"/><rect class="trait" x="336" y="66" width="58" height="46" rx="6"/><text class="texte" style="font-size:20px" x="31" y="90" text-anchor="middle">我</text><text class="texte" style="font-size:20px" x="114" y="90" text-anchor="middle">星期一</text><text class="texte" style="font-size:20px" x="214" y="90" text-anchor="middle">上午</text><text class="texte" style="font-size:20px" x="295" y="90" text-anchor="middle">八点</text><text class="texte" style="font-size:20px" x="365" y="90" text-anchor="middle">上课</text><text class="texte-petit" x="31" y="106" text-anchor="middle">wǒ</text><text class="texte-petit" x="114" y="106" text-anchor="middle">xīngqīyī</text><text class="texte-petit" x="214" y="106" text-anchor="middle">shàngwǔ</text><text class="texte-petit" x="295" y="106" text-anchor="middle">bā diǎn</text><text class="texte-petit" x="365" y="106" text-anchor="middle">shàngkè</text><text class="texte-pigment" x="31" y="130" text-anchor="middle">sujet</text><text class="texte-pigment" x="114" y="130" text-anchor="middle">jour</text><text class="texte-pigment" x="214" y="130" text-anchor="middle">moment</text><text class="texte-pigment" x="295" y="130" text-anchor="middle">heure</text><text class="texte-pigment" x="365" y="130" text-anchor="middle">verbe</text></svg>` },
            { t: "attention", md: "« 我上课八点 » ✗ : l'heure ne vient jamais après le verbe. ✓ **我八点上课**, ou 八点我上课. Et pas de petit mot pour « à » : l'heure se place simplement devant le verbe. Pour la négation de 有, toujours 没 : 我星期三下午**没有**课 (le mercredi après-midi, je n'ai pas cours)." },
            { t: "verifie", q: "Comment dit-on « Demain, j'ai cours à 9 h » ?", choix: ["我明天九点上课。", "我上课明天九点。", "我九点明天上课。", "明天上课我九点。"], bonne: 0, explication: "Le temps se place avant le verbe, du plus grand au plus petit : **明天** (demain), puis **九点** (9 h), puis 上课. 我九点明天上课 met le petit avant le grand." },
          ],
        },
        {
          titre: "Les matières et le matériel",
          blocs: [
            { t: "tableau", titre: "Les matières", entetes: ["Chinois", "Pinyin", "Matière"], lignes: [
              ["数学", "shùxué", "mathématiques"],
              ["中文", "Zhōngwén", "chinois"],
              ["法语", "Fǎyǔ", "français"],
              ["英语", "Yīngyǔ", "anglais"],
              ["历史", "lìshǐ", "histoire"],
              ["体育", "tǐyù", "EPS (sport)"],
              ["音乐", "yīnyuè", "musique"],
            ] },
            { t: "definition", terme: "语 yǔ, la langue", md: "**语** yǔ veut dire « langue ». Compare les trois mots formés sur le même pays : 法国 Fǎguó (le pays) → 法国人 Fǎguórén (la personne) → **法语** Fǎyǔ (la langue). De même : 英国, 英国人, 英语." },
            { t: "texte", md: "**学** xué (étudier) se retrouve partout à l'école : **学校** xuéxiào (l'école), **学生** xuésheng (l'élève), et 数学 (les maths : 数 shù, le nombre). Dans ton **书包** shūbāo (cartable, mot à mot « sac à livres »), tu ranges ton **书** shū (livre) et ton **笔** bǐ (stylo). En classe, on salue le **老师** lǎoshī (professeur)." },
            { t: "exemple", titre: "Une journée de cours", md: "我星期一上午八点上课，十二点下课。下午我有数学课和体育课。\nWǒ xīngqīyī shàngwǔ bā diǎn shàngkè, shí'èr diǎn xiàkè. Xiàwǔ wǒ yǒu shùxué kè hé tǐyù kè.\n(Le lundi, je commence à 8 h du matin et je finis à midi. L'après-midi, j'ai maths et EPS.)\nOrdre du temps : 星期一 → 上午 → 八点, puis le verbe 上课." },
          ],
        },
      ],
      bilan: "现在几点？ — 八点、八点一刻、八点半、两点 ; le temps avant le verbe, du plus grand au plus petit (星期一上午八点上课) ; 语 pour les langues, 课 pour les cours, 学 pour tout ce qui touche à l'étude.",
    },

    "5e-chinois-08-loisirs-gouts": {
      accroche: "Le soir, dans les parcs chinois, on croise des joueurs de ping-pong, des enfants qui jouent au basket et des groupes qui dansent ensemble. Pour dire ce que tu aimes faire, une question d'abord : joue-t-on avec le pied ou avec la main ?",
      objectifs: [
        "Parler de tes loisirs avec le bon verbe : 踢, 打, 看, 听…",
        "Exprimer tes goûts avec 喜欢, 爱 et 最",
        "Dire ce que tu sais faire avec 会 et choisir entre 不 et 没",
      ],
      sections: [
        {
          titre: "Verbe + nom : les loisirs",
          blocs: [
            { t: "texte", md: "Beaucoup de loisirs chinois sont formés d'==un verbe + un nom== : 看 kàn (regarder) + 书 shū (livre) = **看书** (lire) ; 听 tīng (écouter) + 音乐 yīnyuè (musique) = **听音乐** ; 唱 chàng (chanter) + 歌 gē (chanson) = **唱歌** (chanter)." },
            { t: "tableau", titre: "Les loisirs", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [
              ["看书", "kàn shū", "lire"],
              ["看电视", "kàn diànshì", "regarder la télévision"],
              ["听音乐", "tīng yīnyuè", "écouter de la musique"],
              ["唱歌", "chàng gē", "chanter"],
              ["跳舞", "tiàowǔ", "danser"],
              ["画画", "huà huà", "dessiner"],
              ["游泳", "yóuyǒng", "nager"],
            ] },
            { t: "schema", titre: "Le pied ou la main ?", legende: "Le verbe dépend du geste : on « frappe du pied » le ballon de foot, on « frappe de la main » le ballon de basket et la balle de ping-pong, et on joue du piano (钢琴) avec 弹 tán, le verbe des instruments dont on joue du bout des doigts.", svg: `<svg viewBox="0 0 400 194"><text class="texte" style="font-size:34px" x="65" y="46" text-anchor="middle">踢</text><text class="texte" style="font-size:34px" x="200" y="46" text-anchor="middle">打</text><text class="texte" style="font-size:34px" x="335" y="46" text-anchor="middle">弹</text><text class="texte" x="65" y="68" text-anchor="middle">tī</text><text class="texte" x="200" y="68" text-anchor="middle">dǎ</text><text class="texte" x="335" y="68" text-anchor="middle">tán</text><text class="texte-pigment" x="65" y="88" text-anchor="middle">avec le pied</text><text class="texte-pigment" x="200" y="88" text-anchor="middle">avec la main</text><text class="texte-pigment" x="335" y="88" text-anchor="middle">du bout des doigts</text><rect class="aplat" x="10" y="100" width="110" height="86" rx="8"/><rect class="trait-fin" x="10" y="100" width="110" height="86" rx="8"/><rect class="aplat" x="128" y="100" width="144" height="86" rx="8"/><rect class="trait-fin" x="128" y="100" width="144" height="86" rx="8"/><rect class="aplat" x="280" y="100" width="110" height="86" rx="8"/><rect class="trait-fin" x="280" y="100" width="110" height="86" rx="8"/><text class="texte" style="font-size:16px" x="65" y="139" text-anchor="middle">足球</text><text class="texte-petit" x="65" y="155" text-anchor="middle">zúqiú : football</text><text class="texte" style="font-size:16px" x="200" y="124" text-anchor="middle">篮球</text><text class="texte-petit" x="200" y="138" text-anchor="middle">lánqiú : basket</text><text class="texte" style="font-size:16px" x="200" y="164" text-anchor="middle">乒乓球</text><text class="texte-petit" x="200" y="178" text-anchor="middle">pīngpāngqiú : ping-pong</text><text class="texte" style="font-size:16px" x="335" y="139" text-anchor="middle">钢琴</text><text class="texte-petit" x="335" y="155" text-anchor="middle">gāngqín : piano</text></svg>` },
            { t: "attention", md: "On ne dit pas « 踢篮球 » ✗ : au basket et au ping-pong, on frappe avec la main, donc **打篮球** dǎ lánqiú, **打乒乓球** dǎ pīngpāngqiú. Regarde les clés : 踢 contient 足 (le pied), 打 contient 扌 (la main). Le verbe se place toujours avant le nom du sport." },
            { t: "verifie", q: "Comment dit-on « jouer au ping-pong » ?", choix: ["打乒乓球", "踢乒乓球", "弹乒乓球", "看乒乓球"], bonne: 0, explication: "On frappe la balle avec une raquette tenue à la main : **打**乒乓球 dǎ pīngpāngqiú. 踢 sert pour le foot, 弹 pour le piano, et 看 veut dire « regarder »." },
          ],
        },
        {
          titre: "Aimer : 喜欢, 爱 et 最",
          blocs: [
            { t: "definition", terme: "喜欢 xǐhuan", md: "**喜欢** xǐhuan veut dire « aimer bien ». Il se construit avec un nom (**我喜欢音乐**, j'aime la musique) ou directement avec un verbe, sans mot de liaison (**我喜欢看书**, j'aime lire), comme « aimer + infinitif » en français. Pour un sentiment plus fort, on emploie **爱** ài (adorer, aimer fort) : 我爱踢足球。" },
            { t: "propriete", titre: "最, 也, 都 : devant le verbe", md: "Les petits mots **最** zuì (le plus), **也** yě (aussi) et **都** dōu (tous) se placent ==juste devant le verbe==, jamais à la fin : **我最喜欢游泳** (ce que je préfère, c'est nager) ; **我也喜欢游泳** (moi aussi, j'aime nager) ; **我们都喜欢听音乐** (nous aimons tous écouter de la musique). La négation 不 se place au même endroit." },
            { t: "schema", titre: "La place des petits mots", legende: "Exemple : 我们都喜欢听音乐。 Wǒmen dōu xǐhuan tīng yīnyuè. (Nous aimons tous écouter de la musique.)", svg: `<svg viewBox="0 0 400 150"><rect class="aplat-papier" x="10" y="46" width="84" height="50" rx="6"/><rect class="trait" x="10" y="46" width="84" height="50" rx="6"/><rect class="aplat" x="104" y="22" width="84" height="98" rx="6"/><rect class="trait" x="104" y="22" width="84" height="98" rx="6"/><rect class="aplat-papier" x="198" y="46" width="84" height="50" rx="6"/><rect class="trait" x="198" y="46" width="84" height="50" rx="6"/><rect class="aplat-papier" x="292" y="46" width="100" height="50" rx="6"/><rect class="trait" x="292" y="46" width="100" height="50" rx="6"/><text class="texte" style="font-size:20px" x="52" y="72" text-anchor="middle">我们</text><text class="texte-petit" x="52" y="88" text-anchor="middle">wǒmen</text><text class="texte" style="font-size:15px" x="146" y="44" text-anchor="middle">都 dōu</text><text class="texte" style="font-size:15px" x="146" y="66" text-anchor="middle">也 yě</text><text class="texte" style="font-size:15px" x="146" y="88" text-anchor="middle">最 zuì</text><text class="texte" style="font-size:15px" x="146" y="110" text-anchor="middle">不 bù</text><text class="texte" style="font-size:20px" x="240" y="72" text-anchor="middle">喜欢</text><text class="texte-petit" x="240" y="88" text-anchor="middle">xǐhuan</text><text class="texte" style="font-size:20px" x="342" y="72" text-anchor="middle">听音乐</text><text class="texte-petit" x="342" y="88" text-anchor="middle">tīng yīnyuè</text><text class="texte-pigment" x="52" y="140" text-anchor="middle">sujet</text><text class="texte-pigment" x="146" y="140" text-anchor="middle">devant le verbe</text><text class="texte-pigment" x="240" y="140" text-anchor="middle">verbe</text><text class="texte-pigment" x="342" y="140" text-anchor="middle">complément</text></svg>` },
            { t: "verifie", q: "Comment dit-on « Moi aussi, j'aime jouer au basket » ?", choix: ["我也喜欢打篮球。", "也我喜欢打篮球。", "我喜欢也打篮球。", "我喜欢打篮球也。"], bonne: 0, explication: "**也** se place juste devant le verbe qu'il accompagne, ici 喜欢 : 我也喜欢打篮球 Wǒ yě xǐhuan dǎ lánqiú. Jamais en tête ni en fin de phrase." },
          ],
        },
        {
          titre: "Savoir faire : 会",
          blocs: [
            { t: "texte", md: "**会** huì veut dire ==« savoir faire »==, pour une chose qu'on a apprise : **我会游泳** (je sais nager), **我会说中文** (je sais parler chinois ; 说 shuō = parler). Pour répondre à 你会游泳吗？ (Sais-tu nager ?), on reprend simplement le verbe : 会 (oui) ou 不会 (non)." },
            { t: "attention", md: "Ne confonds pas **会** (savoir faire) et **喜欢** (aimer) : 我会游泳 = je sais nager ; 我喜欢游泳 = j'aime nager. Et 不 devant 会 se prononce **bú**, car 会 huì est au 4e ton : 我不会跳舞 Wǒ bú huì tiàowǔ (je ne sais pas danser)." },
          ],
        },
        {
          titre: "不 ou 没 ?",
          blocs: [
            { t: "propriete", titre: "Choisir la négation", md: "**不** bù nie ==le présent, l'habitude, les goûts et les capacités== : 我**不**喜欢唱歌 (je n'aime pas chanter), 我**不**会跳舞 (je ne sais pas danser). **没** méi nie surtout **有** : 我**没有**足球 (je n'ai pas de ballon de foot). Dans tous les cas, ==la négation se place devant le verbe==, jamais devant le sujet." },
            { t: "tableau", titre: "不 ou 没 ?", entetes: ["Verbe", "Négation", "Exemple"], lignes: [
              ["喜欢 (aimer)", "不 bù", "我不喜欢唱歌。 Wǒ bù xǐhuan chàng gē."],
              ["会 (savoir faire)", "不 bú", "我不会游泳。 Wǒ bú huì yóuyǒng."],
              ["是 (être)", "不 bú", "他不是老师。 Tā bú shì lǎoshī."],
              ["有 (avoir)", "没 méi", "我没有足球。 Wǒ méiyǒu zúqiú."],
            ] },
            { t: "exemple", titre: "Un dialogue sur les loisirs", md: "— 你喜欢做什么？ Nǐ xǐhuan zuò shénme ? (Qu'aimes-tu faire ? 做 zuò = faire)\n— 我喜欢踢足球，也喜欢听音乐。我不喜欢唱歌。\n— 你会游泳吗？\n— 会！我很喜欢游泳。\n(J'aime jouer au foot et aussi écouter de la musique. Je n'aime pas chanter. — Sais-tu nager ? — Oui ! J'aime beaucoup nager.)" },
            { t: "verifie", q: "Comment dit-on « Il ne sait pas nager » ?", choix: ["他不会游泳。", "他没会游泳。", "他会不游泳。", "不他会游泳。"], bonne: 0, explication: "On nie 会 avec **不**, placé devant : 他不会游泳 Tā bú huì yóuyǒng. 没 ne se combine pas avec 会, et la négation ne se place ni entre 会 et le verbe, ni devant le sujet." },
          ],
        },
      ],
      bilan: "踢 avec le pied, 打 avec la main ; 喜欢 + nom ou verbe, 最 / 也 / 都 devant le verbe ; 会 pour ce qu'on sait faire ; 不 pour les goûts et les capacités, 没 pour 有.",
    },

    "5e-chinois-09-nourriture-boissons": {
      accroche: "Raviolis fumants, bol de nouilles, thé bien chaud… En Chine, le repas se partage : les plats sont posés au milieu de la table et chacun se sert avec ses baguettes. Pour prendre place à table, apprends à dire ce que tu manges, ce que tu bois et ce dont tu as envie.",
      objectifs: [
        "Nommer des aliments, des boissons et les repas de la journée",
        "Dire ce que tu manges et ce que tu bois avec 吃 et 喝",
        "Exprimer une envie avec 想 et commander avec 要",
      ],
      sections: [
        {
          titre: "Manger : 吃",
          blocs: [
            { t: "texte", md: "**吃** chī veut dire « manger ». Remarque sa clé **口** (bouche), à gauche ! On l'emploie pour tout ce qui est solide : 吃饺子 chī jiǎozi (manger des raviolis), 吃苹果 chī píngguǒ (manger une pomme)." },
            { t: "tableau", titre: "Ce qu'on mange", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [
              ["米饭", "mǐfàn", "riz cuit"],
              ["面条", "miàntiáo", "nouilles"],
              ["饺子", "jiǎozi", "raviolis"],
              ["面包", "miànbāo", "pain"],
              ["苹果", "píngguǒ", "pomme"],
            ] },
            { t: "astuce", md: "Découpe les mots : **面** miàn désigne la farine de blé, d'où 面条 (nouilles : 条 tiáo évoque une chose longue et fine) et 面包 (pain). **米** mǐ est le riz cru ; une fois cuit, il devient **米饭**. Dans le nord de la Chine, on mange traditionnellement plus de blé (nouilles, raviolis) ; dans le sud, plus de riz." },
          ],
        },
        {
          titre: "Boire : 喝",
          blocs: [
            { t: "texte", md: "**喝** hē veut dire « boire » : lui aussi porte la clé de la bouche, 口. On l'emploie pour tous les liquides : 喝水 hē shuǐ (boire de l'eau), 喝茶 hē chá (boire du thé)." },
            { t: "tableau", titre: "Ce qu'on boit", entetes: ["Chinois", "Pinyin", "Sens"], lignes: [
              ["水", "shuǐ", "eau"],
              ["茶", "chá", "thé"],
              ["牛奶", "niúnǎi", "lait (牛 niú : bœuf, vache + 奶 nǎi : lait)"],
              ["果汁", "guǒzhī", "jus de fruits (果 guǒ : fruit + 汁 zhī : jus)"],
              ["咖啡", "kāfēi", "café"],
            ] },
            { t: "attention", md: "**渴** kě (avoir soif) et **喝** hē (boire) se ressemblent ! 渴 porte la clé de l'eau **氵**, 喝 celle de la bouche **口**. 我很渴，我想喝水。 Wǒ hěn kě, wǒ xiǎng hē shuǐ. (J'ai très soif, j'ai envie de boire de l'eau.)" },
            { t: "savais-tu", md: "Le mot français « thé » vient d'une prononciation du sud de la Chine, « té » ; le chinois **咖啡** kāfēi, lui, imite le son du mot « café ». Les mots voyagent dans les deux sens !" },
            { t: "verifie", q: "Quel verbe emploie-t-on avec 牛奶 niúnǎi (lait) ?", choix: ["吃 chī", "喝 hē", "打 dǎ"], bonne: 1, explication: "Le lait est un liquide : on le boit, **喝牛奶** hē niúnǎi. 吃 sert pour les aliments solides, et 打 pour les sports de balle à la main." },
          ],
        },
        {
          titre: "Les repas, la faim et le goût",
          blocs: [
            { t: "texte", md: "Le repas se dit **饭** fàn : au départ, le riz cuit, puis, par extension, le repas tout entier. **吃饭** chīfàn veut dire « manger, prendre un repas ». Les trois repas de la journée se forment avec un mot du moment : 早 zǎo (tôt), 午 wǔ (midi), 晚 wǎn (soir)." },
            { t: "schema", titre: "Les trois repas", legende: "早饭, 午饭, 晚饭 : le moment de la journée + 饭 fàn (repas). On retrouve 早 dans 早上 zǎoshang (le matin) et 晚 dans 晚上 wǎnshang (le soir).", svg: `<svg viewBox="0 0 400 166"><line class="trait-fin" x1="20" y1="104" x2="386" y2="104" marker-end="url(#fl)"/><path class="aplat-fort" d="M52 104A18 18 0 0 1 88 104Z"/><path class="trait-fin" d="M70 78V70M54 84L48 78M86 84L92 78M46 98H38M94 98H102"/><circle class="aplat-fort" cx="200" cy="66" r="16"/><path class="trait-fin" d="M200 44V36M200 88V96M178 66H170M222 66H230M184.4 50.4L178.8 44.8M215.6 50.4L221.2 44.8M184.4 81.6L178.8 87.2M215.6 81.6L221.2 87.2"/><path class="aplat-fort" d="M338 46A20 20 0 0 0 338 86A26 26 0 0 1 338 46Z"/><text class="texte" style="font-size:15px" x="70" y="26" text-anchor="middle">早 zǎo : tôt</text><text class="texte" style="font-size:15px" x="200" y="26" text-anchor="middle">午 wǔ : midi</text><text class="texte" style="font-size:15px" x="330" y="26" text-anchor="middle">晚 wǎn : soir</text><text class="texte" style="font-size:20px" x="70" y="136" text-anchor="middle">早饭</text><text class="texte" style="font-size:20px" x="200" y="136" text-anchor="middle">午饭</text><text class="texte" style="font-size:20px" x="330" y="136" text-anchor="middle">晚饭</text><text class="texte-petit" x="70" y="156" text-anchor="middle">zǎofàn : petit-déjeuner</text><text class="texte-petit" x="200" y="156" text-anchor="middle">wǔfàn : déjeuner</text><text class="texte-petit" x="330" y="156" text-anchor="middle">wǎnfàn : dîner</text></svg>` },
            { t: "propriete", titre: "饿 et 渴 : sans « avoir »", md: "En chinois, on n'« a » pas faim : on est « affamé ». **饿** è (avoir faim) et **渴** kě (avoir soif) s'emploient comme des adjectifs, avec **很** hěn (très) et ==sans 是 ni 有== : **我很饿。** Wǒ hěn è. (J'ai faim.) 我很渴。 (J'ai soif.) « 我有饿 » ✗ et « 我是饿 » ✗ sont des calques du français." },
            { t: "texte", md: "Pour dire que c'est bon : **好吃** hǎochī (bon à manger) pour un plat, **好喝** hǎohē (bon à boire) pour une boisson. 这个饺子很好吃！ Zhège jiǎozi hěn hǎochī ! (Ces raviolis sont très bons !) 这个果汁很好喝！ (Ce jus de fruits est très bon !)" },
          ],
        },
        {
          titre: "Avoir envie, commander : 想 et 要",
          blocs: [
            { t: "propriete", titre: "想 ou 要 ?", md: "**想** xiǎng + verbe = ==avoir envie de== : 我想吃饺子 (j'ai envie de manger des raviolis). **要** yào = ==vouloir, prendre== : une décision, une commande. 我要一个苹果 (je veux une pomme) ; 我要面条 (je prends des nouilles). Pour dire qu'on n'a pas envie : **不想** bù xiǎng, devant le verbe : 我不想喝咖啡 (je n'ai pas envie de boire de café)." },
            { t: "exemple", titre: "Au restaurant", md: "— 你想吃什么？ Nǐ xiǎng chī shénme ? (Qu'as-tu envie de manger ?)\n— 我想吃饺子。你呢？\n— 我要面条，也想喝茶。\n— 服务员！我们要饺子、面条和茶。\n(Je voudrais des raviolis. Et toi ? — Je prends des nouilles, et j'ai aussi envie de thé. — Serveur ! Nous voudrions des raviolis, des nouilles et du thé.)\n**服务员** fúwùyuán = le serveur, la serveuse." },
            { t: "attention", md: "Avec un nombre, n'oublie pas le classificateur : 我要**一个**苹果 (yí ge), jamais « 我要一苹果 ». Et une règle de politesse : ==ne plante jamais tes **筷子** kuàizi (baguettes) debout dans ton bol de riz== ; cela rappelle les bâtons d'encens des cérémonies pour les défunts. Pose-les plutôt sur le côté." },
            { t: "verifie", q: "Le serveur te demande 你要什么？ Que réponds-tu pour commander du riz et du thé ?", choix: ["我要米饭和茶。", "我是米饭和茶。", "我喝米饭和茶。", "我会米饭和茶。"], bonne: 0, explication: "On reprend le verbe de la question, **要** : 我要米饭和茶 (je voudrais du riz et du thé). 我是… voudrait dire « je suis du riz », et le riz ne se boit pas." },
          ],
        },
      ],
      bilan: "吃 pour le solide, 喝 pour le liquide ; 我很饿 sans « avoir » ; 好吃 et 好喝 ; 想 pour l'envie, 要 pour commander ; et les baguettes jamais plantées dans le riz.",
    },

    "5e-chinois-10-culture-chine": {
      accroche: "Fin janvier ou février, des centaines de millions de Chinois prennent la route pour rentrer chez leurs parents : c'est la fête du Printemps, la plus grande fête de l'année. Lanternes rouges, enveloppes rouges, pétards… et un nouvel animal qui prend la tête de l'année.",
      objectifs: [
        "Connaître la fête du Printemps et ses traditions",
        "Utiliser le zodiaque chinois, une tradition du calendrier, pour trouver l'animal d'une année",
        "Situer et présenter des repères du patrimoine : Grande Muraille, panda, baguettes, calligraphie",
      ],
      sections: [
        {
          titre: "La Chine sur la carte",
          blocs: [
            { t: "texte", md: "La **Chine** (中国 Zhōngguó) est un immense pays d'Asie orientale, presque aussi vaste que l'Europe entière, et peuplé de plus de 1,4 milliard d'habitants. Sa capitale est **Pékin** (北京 Běijīng) ; **Shanghai** (上海 Shànghǎi) est une immense ville portuaire sur la côte est. Le mandarin, appelé en Chine 普通话 pǔtōnghuà (« la langue commune »), est la langue officielle : c'est la langue maternelle la plus parlée du monde." },
            { t: "carte", fond: "monde", titre: "La Chine et quelques repères", cadre: [72, 16, 136, 54], zones: ["CN"], reperes: [
              { nom: "Pékin", lat: 39.9042, lon: 116.4074 },
              { nom: "Shanghai", lat: 31.2304, lon: 121.4737 },
              { nom: "Xi'an", lat: 34.3416, lon: 108.9398 },
              { nom: "Chengdu (pandas)", lat: 30.5728, lon: 104.0668 },
              { nom: "Hong Kong", lat: 22.3193, lon: 114.1694 },
              { nom: "Jiayuguan (Grande Muraille)", lat: 39.7732, lon: 98.2895 },
            ], legende: "La Grande Muraille s'étire d'est en ouest dans le nord du pays, de la mer jusqu'au col de Jiayuguan ; les pandas géants vivent dans les montagnes du Sichuan, autour de Chengdu. Le mandarin est aussi parlé à Taïwan et à Singapour." },
          ],
        },
        {
          titre: "La fête du Printemps",
          blocs: [
            { t: "definition", terme: "春节 Chūnjié, la fête du Printemps", md: "Le Nouvel An chinois s'appelle **春节** Chūnjié, « la fête du Printemps », car il annonce la fin de l'hiver. Il suit le **calendrier traditionnel**, fondé sur les phases de la Lune : il commence à une nouvelle lune, ==entre le 21 janvier et le 20 février== de notre calendrier. En 2026, il est tombé le 17 février. On se souhaite **新年快乐！** Xīnnián kuàilè ! (Bonne année !)" },
            { t: "etapes", titre: "Les grands moments de la fête", items: [
              { titre: "Avant la fête : le grand ménage", md: "On nettoie la maison pour chasser la malchance de l'année passée, puis on décore tout en **rouge**, la couleur de la joie et de la chance : lanternes, papiers découpés, 春联 chūnlián (des vœux calligraphiés de chaque côté de la porte)." },
              { titre: "Le réveillon (除夕 chúxī)", md: "Toute la famille se réunit pour un grand repas. Dans le nord, on prépare ensemble des **饺子** jiǎozi (raviolis) ; dans le sud, d'autres plats de fête, comme le gâteau de riz gluant 年糕 niángāo." },
              { titre: "Minuit : les pétards", md: "Pétards et feux d'artifice accueillent la nouvelle année dans un grand vacarme. Ils sont aujourd'hui interdits au centre de nombreuses grandes villes." },
              { titre: "Le premier jour : vœux et 红包", md: "On rend visite à la famille et l'on se souhaite 新年快乐. Les adultes offrent aux enfants des **红包** hóngbāo (红 hóng : rouge ; 包 bāo : enveloppe) contenant de l'argent." },
              { titre: "Le 15e jour : la fête des Lanternes", md: "La **fête des Lanternes** (元宵节 Yuánxiāojié) clôt les festivités : on admire les lanternes et l'on mange des boulettes de riz gluant." },
            ] },
            { t: "savais-tu", md: "Pourquoi colle-t-on parfois le caractère **福** fú (bonheur) à l'envers sur les portes ? C'est un jeu de mots : « à l'envers » se dit 倒 dào, qui se prononce comme 到 dào (arriver). « Le bonheur est à l'envers » sonne donc comme « le bonheur est arrivé » !" },
            { t: "verifie", q: "Que contient un 红包 hóngbāo ?", choix: ["De l'argent, offert aux enfants", "Des raviolis", "Une lanterne", "Des pétards"], bonne: 0, explication: "Le **红包** est une enveloppe rouge contenant de l'argent, que les adultes offrent aux enfants pour leur souhaiter une bonne année. Aujourd'hui, on en envoie aussi par téléphone." },
          ],
        },
        {
          titre: "Les douze animaux du zodiaque",
          blocs: [
            { t: "propriete", titre: "Le cycle des 12 animaux", md: "Le **zodiaque chinois** (生肖 shēngxiào) est une tradition qui associe chaque année à ==l'un de 12 animaux, dans un ordre fixe== : rat, bœuf, tigre, lapin, dragon, serpent, cheval, chèvre, singe, coq, chien, cochon. Le cycle recommence tous les 12 ans. Attention : l'année du zodiaque commence ==à la fête du Printemps, pas le 1er janvier==." },
            { t: "schema", titre: "Le cercle du zodiaque", legende: "Le cycle se lit dans le sens des aiguilles d'une montre, en partant du rat, en haut. 2026, entouré, est l'année du cheval (马 mǎ) ; 2027 sera celle de la chèvre (羊 yáng), et 2032 de nouveau celle du rat.", svg: `<svg viewBox="0 0 400 304"><circle class="aplat-papier" cx="200" cy="152" r="108"/><circle class="aplat" cx="200" cy="238" r="18"/><path class="trait-fin" d="M216.6 90.2L228.0 47.7M245.3 106.7L276.4 75.6M261.8 135.4L304.3 124.0M261.8 168.6L304.3 180.0M245.3 197.3L276.4 228.4M216.6 213.8L228.0 256.3M183.4 213.8L172.0 256.3M154.7 197.3L123.6 228.4M138.2 168.6L95.7 180.0M138.2 135.4L95.7 124.0M154.7 106.7L123.6 75.6M183.4 90.2L172.0 47.7"/><circle class="trait" cx="200" cy="152" r="108"/><circle class="trait-fin" cx="200" cy="152" r="64"/><circle class="trait-fin" cx="200" cy="238" r="18"/><path class="trait-fin" d="M209 103A50 50 0 0 1 243 127" marker-end="url(#fl-p)"/><text class="texte" style="font-size:24px" x="200" y="152" text-anchor="middle">生肖</text><text class="texte-petit" x="200" y="170" text-anchor="middle">shēngxiào</text><text class="texte-petit" x="200" y="184" text-anchor="middle">12 animaux</text><text class="texte" style="font-size:20px" x="200" y="73" text-anchor="middle">鼠</text><text class="texte-petit" x="200" y="16" text-anchor="middle">rat</text><text class="texte-pigment" style="font-size:11px" x="200" y="29" text-anchor="middle">2020</text><text class="texte" style="font-size:20px" x="243" y="85" text-anchor="middle">牛</text><text class="texte-petit" x="267" y="34" text-anchor="middle">bœuf</text><text class="texte-pigment" style="font-size:11px" x="267" y="47" text-anchor="middle">2021</text><text class="texte" style="font-size:20px" x="274" y="116" text-anchor="middle">虎</text><text class="texte-petit" x="316" y="83" text-anchor="middle">tigre</text><text class="texte-pigment" style="font-size:11px" x="316" y="96" text-anchor="middle">2022</text><text class="texte" style="font-size:20px" x="286" y="159" text-anchor="middle">兔</text><text class="texte-petit" x="334" y="150" text-anchor="middle">lapin</text><text class="texte-pigment" style="font-size:11px" x="334" y="163" text-anchor="middle">2023</text><text class="texte" style="font-size:20px" x="274" y="202" text-anchor="middle">龙</text><text class="texte-petit" x="316" y="217" text-anchor="middle">dragon</text><text class="texte-pigment" style="font-size:11px" x="316" y="230" text-anchor="middle">2024</text><text class="texte" style="font-size:20px" x="243" y="233" text-anchor="middle">蛇</text><text class="texte-petit" x="267" y="266" text-anchor="middle">serpent</text><text class="texte-pigment" style="font-size:11px" x="267" y="279" text-anchor="middle">2025</text><text class="texte" style="font-size:20px" x="200" y="245" text-anchor="middle">马</text><text class="texte-petit" x="200" y="284" text-anchor="middle">cheval</text><text class="texte-pigment" style="font-size:11px" x="200" y="297" text-anchor="middle">2026</text><text class="texte" style="font-size:20px" x="157" y="233" text-anchor="middle">羊</text><text class="texte-petit" x="133" y="266" text-anchor="middle">chèvre</text><text class="texte-pigment" style="font-size:11px" x="133" y="279" text-anchor="middle">2027</text><text class="texte" style="font-size:20px" x="126" y="202" text-anchor="middle">猴</text><text class="texte-petit" x="84" y="217" text-anchor="middle">singe</text><text class="texte-pigment" style="font-size:11px" x="84" y="230" text-anchor="middle">2028</text><text class="texte" style="font-size:20px" x="114" y="159" text-anchor="middle">鸡</text><text class="texte-petit" x="66" y="150" text-anchor="middle">coq</text><text class="texte-pigment" style="font-size:11px" x="66" y="163" text-anchor="middle">2029</text><text class="texte" style="font-size:20px" x="126" y="116" text-anchor="middle">狗</text><text class="texte-petit" x="84" y="83" text-anchor="middle">chien</text><text class="texte-pigment" style="font-size:11px" x="84" y="96" text-anchor="middle">2030</text><text class="texte" style="font-size:20px" x="157" y="85" text-anchor="middle">猪</text><text class="texte-petit" x="133" y="34" text-anchor="middle">cochon</text><text class="texte-pigment" style="font-size:11px" x="133" y="47" text-anchor="middle">2031</text></svg>` },
            { t: "texte", md: "Selon une légende, l'ordre viendrait d'une course entre les animaux : le rat, malin, serait arrivé premier en voyageant sur le dos du bœuf. Comme les signes du zodiaque occidental, le zodiaque chinois ==ne dit rien de scientifique== sur le caractère des gens : c'est une tradition qui sert à nommer les années et qui inspire fêtes, décorations et timbres." },
            { t: "exemple", titre: "Trouver l'animal d'une année", etapes: [
              "Pars d'une année connue : 2024 est l'année du dragon (龙 lóng).",
              "Avance dans l'ordre : serpent (蛇 shé) en 2025, cheval (马 mǎ) en 2026, chèvre (羊 yáng) en 2027.",
              "Pour reculer, tourne dans l'autre sens : 2023 = lapin (兔 tù), 2022 = tigre (虎 hǔ).",
              "Vérifie la date de naissance : un enfant né le 20 janvier 2026, avant la fête du Printemps du 17 février, est encore du serpent.",
            ] },
            { t: "verifie", q: "2026 est l'année du cheval. De quel animal sera l'année 2038 ?", choix: ["Du cheval, car 2038 = 2026 + 12", "Du singe", "Du rat", "Du dragon"], bonne: 0, explication: "Le cycle compte **12 animaux** : 12 ans plus tard, le même animal revient. 2038 = 2026 + 12 : ce sera de nouveau l'année du cheval." },
          ],
        },
        {
          titre: "Repères du patrimoine",
          blocs: [
            { t: "frise", titre: "La Grande Muraille à travers le temps", evenements: [
              { date: -475, label: "Début des Royaumes combattants", detail: "Pendant cette époque (475-221 av. J.-C.), des royaumes rivaux élèvent des murs pour se protéger de leurs voisins." },
              { date: -221, label: "Qin Shi Huang unifie la Chine", detail: "Le premier empereur relie et prolonge des murs plus anciens, au nord." },
              { date: 1368, label: "Début de la dynastie Ming", detail: "Les Ming (1368-1644) reconstruisent la Muraille en briques et en pierres : ce sont les parties les plus visitées aujourd'hui." },
              { date: 1987, label: "Patrimoine mondial de l'UNESCO", detail: "La Grande Muraille, 长城 Chángchéng (« le long mur »), est inscrite sur la liste du patrimoine mondial." },
            ] },
            { t: "attention", md: "Idée reçue : on **ne voit pas** la Grande Muraille à l'œil nu depuis la Lune. Elle est très longue, mais large de quelques mètres seulement ; même depuis l'orbite terrestre, on la distingue très difficilement." },
            { t: "texte", md: "Le **panda géant** (大熊猫 dà xióngmāo, « grand ours-chat ») vit dans les forêts de bambous des montagnes du centre de la Chine, surtout dans la province du **Sichuan** (四川 Sìchuān). Il passe une grande partie de la journée à manger, et se nourrit presque uniquement de **bambou**. C'est l'un des symboles de la Chine.\n\nÀ table, on se sert de **筷子** kuàizi, les baguettes : dans beaucoup de plats, les aliments sont coupés en petits morceaux avant la cuisson, pour être faciles à saisir." },
            { t: "tableau", titre: "La calligraphie et les quatre trésors du lettré (文房四宝 wénfáng sìbǎo)", entetes: ["Trésor", "Chinois", "Rôle"], lignes: [
              ["le pinceau", "笔 bǐ", "tracer les traits"],
              ["le bâton d'encre", "墨 mò", "l'encre solide, qu'on frotte"],
              ["le papier", "纸 zhǐ", "recevoir l'écriture"],
              ["la pierre à encre", "砚 yàn", "on y frotte le bâton d'encre avec un peu d'eau"],
            ] },
            { t: "texte", md: "La **calligraphie** (书法 shūfǎ, « l'art d'écrire ») est un art à part entière : au pinceau et à l'encre, chaque trait garde la trace du geste du calligraphe, de sa vitesse et de sa force. On respecte l'ordre des traits que tu as appris : c'est lui qui donne au caractère son équilibre." },
          ],
        },
      ],
      bilan: "春节 entre le 21 janvier et le 20 février, en rouge, avec 红包 et 饺子 ; 12 animaux dans un ordre fixe, et une année qui commence à la fête du Printemps (2026 = cheval) ; la Grande Muraille, le panda et son bambou, les baguettes et les quatre trésors du calligraphe.",
    },
  },
};
