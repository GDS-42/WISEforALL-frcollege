# Brief commun — nouvelles LV2 d'ÉCLORE : allemand, arabe, chinois

ÉCLORE est un jeu éducatif web (HTML/ES modules, sans dépendance) couvrant le programme du collège français.
Dépôt : /home/user/WISEforALL-frcollege. On ajoute trois deuxièmes langues vivantes (LV2, de la 5e à la 3e),
au même niveau d'exigence que l'espagnol existant. Public : élèves français de 12 à 15 ans, débutants en 5e.
Niveaux CECRL visés (programme du cycle 4, LV2) : 5e ≈ A1, 4e ≈ A1+/A2, 3e ≈ A2.

## Clés et fichiers
- Matières (déjà déclarées dans content/matieres.js) : `allemand`, `arabe`, `chinois` (cycles 5e, 4e, 3e).
- Questions : `content/<niveau>/<matiere>.js` (ex. content/5e/arabe.js). id du module `<niveau>-<matiere>`.
- Cours : `content/cours/<niveau>/<matiere>.js`.
- Ids de chapitre : `<niveau>-<matiere>-NN-slug` (slug ASCII minuscule, tirets), comme dans l'espagnol.

## Modèles à lire avant d'écrire (obligatoire)
- docs/CONTENU.md (schéma des modules de questions, types d'items, règles pédagogiques).
- docs/COURS.md (schéma des cours illustrés, blocs, schémas SVG, couleurs c-*, verifie).
- docs/PEDAGOGIE.md (esprit : explications élaborées, pas de piège gratuit).
- Modèle direct : content/5e/espagnol.js, content/4e/espagnol.js, content/3e/espagnol.js et
  content/cours/5e/espagnol.js (même gabarit : 10 chapitres, ~15 items par chapitre, 3 compétences par chapitre,
  `retenir`, `exemple`, explications en français, variété de types : qcm, vf, trous, ordre, assoc, texte, flash…).

## Correction automatique (ce que le correcteur saura faire — conçois les items en conséquence)
- Allemand : « ä/ae », « ö/oe », « ü/ue », « ß/ss » sont équivalents, même en mode strict ; la majuscule des
  noms n'est pas exigée en mode non strict. En `strict: true`, la forme (terminaison, genre) doit être exacte.
- Arabe : comparaison sans voyelles brèves (harakat), sans tatwil ; أ إ آ ٱ = ا ; ة = ه en fin de mot ; ى = ي.
  Un élève français a rarement un clavier arabe : la reconnaissance de l'écriture passe surtout par qcm, vf, assoc,
  ordre, flash. Les saisies en écriture arabe doivent rester rares (≤ 10 % des items) ; quand une saisie porte
  sur un mot arabe, accepte aussi sa translittération courante (liste plusieurs graphies : « salam », « salaam »).
  Donne toujours le sens en français dans les explications, et la translittération entre parenthèses pour les
  mots nouveaux en 5e (ex. « كِتاب (kitāb) : livre »). Arabe standard moderne (fuṣḥā), voyellé en 5e pour les
  mots nouveaux, de moins en moins voyellé ensuite.
- Chinois : mandarin, caractères simplifiés + pinyin. Pour toute saisie, liste à la fois les caractères et le
  pinyin : le correcteur accepte le pinyin avec accents de ton (nǐ hǎo), avec chiffres (ni3 hao3) ou sans ton,
  avec ou sans espaces, et ignore la ponctuation pleine chasse (，。？！). Les tons s'évaluent par qcm/assoc.
- L'écriture arabe et les caractères chinois sont détectés automatiquement à l'affichage (bonne police, sens de
  lecture droite-à-gauche pour l'arabe, taille agrandie) : écris-les directement dans le texte, sans balise.
- La lecture à voix haute utilise de-DE, ar et zh-CN automatiquement selon la matière.

## Exigences de qualité (la demande insiste : « soit soigneux et vérifie »)
- Exactitude linguistique absolue : orthographe, genres, déclinaisons, conjugaisons, harakat, tons, traits,
  caractères simplifiés (jamais traditionnels), mesures/classificateurs justes. Vérifie chaque mot étranger
  deux fois. En cas de doute sur une forme, choisis une formulation plus simple dont tu es certain.
- Translittérations et pinyin cohérents d'un bout à l'autre du module.
- Distracteurs plausibles mais indiscutablement faux ; une seule bonne réponse.
- Culture : respectueuse, factuelle, sans stéréotype ; pas de contenu religieux prosélyte (on peut citer des
  fêtes comme faits culturels) ; neutralité politique ; aucune personne vivante controversée.
- Pour le prophète de l'islam, écrire « Muhammad » (jamais « Mahomet ») si jamais il est mentionné.
- Citations : uniquement des textes du domaine public ; sinon paraphrase.
- Validation obligatoire avant de rendre :
  `node tools/validate.mjs` (questions : 0 erreur ; regarde les lignes de ton fichier) et, pour un cours,
  `node tools/validate-cours.mjs content/cours/<niv>/<matiere>.js` (0 erreur, 0 avertissement).
- Ne modifie AUCUN autre fichier que ceux de ta mission. Ne fais pas de commit.

## Progression d'ensemble (pour la cohérence entre niveaux ; chaque niveau a exactement 10 chapitres)

### Allemand
- 5e (A1) : 01 begruessen-vorstellen (salutations, du/Sie, sons ä ö ü ß ch sch, alphabet) · 02 zahlen-datum-uhrzeit ·
  03 artikel-sein-haben (der/die/das, ein/eine, noms à majuscule, pluriels courants) · 04 familie-tiere-beschreibung
  (mein/dein, adjectif attribut) · 05 praesens-verbstellung (verbes réguliers, verbe en 2e position, questions W-
  et oui/non) · 06 unregelmaessige-verben-moegen (fahren, lesen, essen, mögen, möchten ; gern/lieber/am liebsten) ·
  07 schule-stundenplan · 08 freizeit-akkusativ (den/einen, Hobbys, kein) · 09 essen-einkaufen (Preise in Euro,
  möchten, Lebensmittel) · 10 deutschsprachige-laender (Allemagne, Autriche, Suisse, Liechtenstein, Luxembourg ;
  fêtes : Advent, Weihnachtsmarkt, Karneval/Fasching ; repères simples).
- 4e (A1+/A2) : 01 dativ-praepositionen (mit, bei, zu, von, aus, nach ; dem/der) · 02 perfekt-haben-sein ·
  03 modalverben (können, müssen, dürfen, sollen, wollen) · 04 wohnen-stadt-weg (Wechselpräpositionen in/auf/an
  avec lieu, indiquer le chemin) · 05 trennbare-reflexive-verben-tagesablauf · 06 koerper-gesundheit-imperativ ·
  07 kleidung-komparativ (gut–besser–am besten, so … wie, als) · 08 reisen-praeteritum (war/hatte, transports) ·
  09 freunde-medien-nebensatz (weil, dass : verbe à la fin) · 10 kultur-geschichte (Berlin, mur 1961–1989, traité
  de l'Élysée 1963 et amitié franco-allemande, OFAJ, inventions).
- 3e (A2) : 01 vergangenheit-wiederholung (Perfekt/Präteritum) · 02 nebensaetze (wenn, als, ob, obwohl, damit) ·
  03 zukunft-werden-plaene · 04 adjektivdeklination-superlativ · 05 meinung-argumentieren · 06 umwelt-zukunft
  (Mülltrennung, Energiewende) · 07 schule-beruf-praktikum (stage de 3e) · 08 geschichte-erinnerung (1945, deux
  États, 1989, réunification 1990, construction européenne) · 09 kunst-literatur-konjunktiv2 (Grimm, Goethe,
  Beethoven, Bauhaus ; würde/hätte/wäre pour souhaits) · 10 sprachpraxis-dnb (méthodes de compréhension et
  d'expression, connecteurs).

### Arabe (arabe standard moderne)
- 5e (A1) : 01 alphabet-ecriture-1 (sens d'écriture, lettres et leurs formes isolée/initiale/médiane/finale, lettres
  qui ne s'attachent pas à gauche) · 02 alphabet-sons-signes (sons propres : ع ح خ غ ق ص ض ط ظ ; voyelles brèves,
  voyelles longues, soukoun, chadda, tanwin, ة, article ال et lettres solaires/lunaires) · 03 saluer-se-presenter ·
  04 nombres-jours-mois (chiffres arabes ١٢٣ et 123, 0–20, dizaines, jours de la semaine) · 05 pronoms-phrase-nominale
  (أنا أنتَ أنتِ هو هي ; pas de verbe « être » au présent) · 06 genre-accord (ة du féminin, accord de l'adjectif,
  هذا/هذه) · 07 famille-possessifs (suffixes ـي ـكَ ـكِ ـه ـها) · 08 ecole-objets-couleurs · 09 maison-nourriture ·
  10 monde-arabe (22 pays de la Ligue arabe, langues et dialectes, calligraphie, chiffres et mots arabes passés au
  français : algèbre, chiffre, sucre, café, jupe… ; fêtes comme faits culturels).
- 4e (A1+/A2) : 01 accompli-passe (فَعَلَ ; كتب، ذهب، درس aux personnes du singulier et nous) · 02 inaccompli-present
  (يفعل) · 03 negation (لا + inaccompli, ما/لم pour le passé, ليس) · 04 journee-heure-loisirs · 05 ville-prepositions-
  directions (في على تحت أمام وراء بجانب) · 06 pluriels (pluriels réguliers ـون/ـات, quelques pluriels brisés
  fréquents) · 07 corps-sante-vetements · 08 voyage-transports · 09 phrase-verbale-nominale (ordre VSO/SVO, كان au
  passé) · 10 al-andalus-savants (Al-Andalus, Bayt al-Hikma, Al-Khwarizmi, Ibn Sina, Ibn Rushd, Les Mille et Une Nuits).
- 3e (A2) : 01 futur-imperatif (سـ / سوف, impératif اُكتبْ) · 02 racines-schemes (racine trilitère : ك ت ب →
  كتب، كاتب، كتاب، مكتب، مكتبة) · 03 subordonnees (لأنّ، عندما، إذا، أنْ) · 04 comparatif-superlatif (أفعل) ·
  05 medias-technologie · 06 environnement-ville-campagne · 07 metiers-avenir · 08 voyager-dans-le-monde-arabe
  (Maghreb, Machrek, Golfe ; patrimoine : Pétra, médinas, Alhambra) · 09 litterature-arts (Naguib Mahfouz – Nobel
  1988, poésie classique, calligraphie, musique : Oum Kalthoum ; paraphrases seulement) · 10 methode-dnb.

### Chinois (mandarin, caractères simplifiés + pinyin)
- 5e (A1) : 01 saluer-pinyin-tons (你好、再见、谢谢 ; quatre tons et ton neutre ; initiales/finales) · 02 caracteres-
  traits-cles (traits de base, ordre des traits, clés 人 口 木 水 火 日 月 女 子, pictogrammes) · 03 se-presenter
  (我叫…、我是法国人、你呢？) · 04 nombres-age-date (一 à 十, 十一 à 九十九, 岁, 月/号/星期) · 05 famille-avoir (有/没有,
  口 et 个, 的) · 06 questions (吗, 呢, 什么, 谁, 哪儿, 几/多少) · 07 ecole-heure (点、分、半、上课) · 08 loisirs-gouts
  (喜欢, 爱, 会, 不/没) · 09 nourriture-boissons (吃、喝、要、想) · 10 culture-chine (春节, zodiaque chinois, Grande
  Muraille, panda, baguettes, calligraphie).
- 4e (A1+/A2) : 01 classificateurs (个 本 只 张 杯 件 条) · 02 aspect-le-passe (了, 没有 + verbe) · 03 localisation
  (在, 里/上/下/前/后/旁边, 哪儿/那儿) · 04 transports-direction (坐/骑/开, 怎么去, 往左/右拐) · 05 comparaison (比,
  没有…那么, 一样) · 06 vetements-achats (多少钱, 块/毛, 太…了) · 07 meteo-saisons · 08 corps-sante (疼, 舒服, 生病) ·
  09 projets-futur (要, 想, 打算, 会, 明天/明年) · 10 fetes-villes (中秋节, 端午节, 北京, 上海, 香港, 西安 ; cuisine
  régionale).
- 3e (A2) : 01 aspects-guo-zai-zhe (过 expérience, 在/正在 progressif, 着) · 02 complement-de-degre (得 : 说得很好) ·
  03 complements-resultat-direction (完, 懂, 到, 来/去) · 04 connecteurs (因为…所以, 虽然…但是, 如果…就, 不但…而且) ·
  05 ba-bei-introduction (把 et 被, usages simples) · 06 technologie-vie-moderne (手机, 网上, 微信 comme fait) ·
  07 environnement-villes · 08 ecole-avenir-metiers · 09 histoire-culture (Confucius, dynasties principales,
  quatre grandes inventions, Route de la soie) · 10 methode-dnb.
