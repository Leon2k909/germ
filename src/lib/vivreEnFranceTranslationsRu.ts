/**
 * Russian for the Vivre en France course cards, headings and questions.
 *
 * Keyed on the FRENCH source text exactly as it appears in
 * vivreEnFranceCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * is, because it fails silently: the card renders, the tap works, and the
 * reader is told a translated card has no translation. Every key here was
 * extracted from the built module and paired back, never retyped: one wrong
 * character — an e for an é, a straight apostrophe for a typographic one —
 * and the lookup misses without a sound. check-ru-country-translations
 * catches that.
 *
 * The line between what is translated and what is not runs where Russian
 * itself draws it. An institution Russian has a name for gets that name —
 * Национальное собрание, Сенат, Государственный совет. What stays French is
 * what a reader will meet printed on a form or a doorplate and nowhere else:
 * the préfecture, a titre de séjour, the CAF, a numéro fiscal. Those lead in
 * French, and a Russian gloss follows once. The mairie is on the other side
 * of the line: Russian calls it the мэрия and always has.
 *
 * The republic names its own values in words that translate badly one at a
 * time. Laïcité is not atheism and not a wall between two powers; it is the
 * state keeping out of belief so that belief can keep out of the state. It
 * leads in French wherever the course is about it.
 */
export const VIVRE_EN_FRANCE_RU: Record<string, string> = {
  "Valeurs, institutions et vie quotidienne — comment le pays fonctionne.":
    "Ценности, устройство власти и повседневная жизнь — как страна работает.",
  "Les symboles de la République": "Символы Республики",
  "Principes et valeurs de la République": "Начала и ценности Республики",
  "Pourquoi commencer par là : les symboles reviennent dans presque chaque série de questions, et ils sont faciles à retenir parce qu'on les voit tous les jours — sur une mairie, sur un timbre, sur un maillot de football.":
    "Почему начинают с этого: символы возвращаются почти в каждом наборе вопросов, и запомнить их легко, потому что видишь их каждый день — на мэрии, на марке, на футбольной майке.",
  "Le drapeau tricolore": "Трёхцветное знамя",
  "Le drapeau français est **bleu, blanc, rouge**, en trois bandes verticales. Le bleu et le rouge sont les couleurs de Paris, le blanc celle de la royauté : la Révolution a mis les trois ensemble. Il est décrit à l'**article 2 de la Constitution**.":
    "Французское знамя **синее, белое, красное**, в три отвесные полосы. Синий и красный — цвета Парижа, белый — цвет королевского дома: Революция свела все три вместе. Оно описано в **статье 2 Конституции**.",
  "Brûler publiquement un drapeau français est **interdit** et constitue une infraction. Le drapeau est un symbole de l'État, pas un objet ordinaire.":
    "Прилюдно жечь французское знамя **запрещено**, и это правонарушение. Знамя есть символ государства, а не обычная вещь.",
  "La devise": "Девиз",
  "**Liberté, Égalité, Fraternité.** On la lit au fronton des mairies, des écoles et des tribunaux, et elle figure sur les pièces de monnaie et les documents officiels. Elle aussi est inscrite à l'article 2 de la Constitution.":
    "**Свобода, равенство, братство.** Его читают на фронтонах мэрий, школ и судов, он стоит на монетах и на казённых бумагах. Он тоже вписан в статью 2 Конституции.",
  "Marianne": "Марианна",
  "**Marianne** est le visage de la République. Elle porte le **bonnet phrygien**, le couvre-chef des esclaves affranchis dans la Rome antique : le symbole de la liberté conquise. On la voit sur les **timbres**, sur les pièces d'euro françaises, sur les documents officiels et dans les mairies, sous forme de buste.":
    "**Марианна** — лицо Республики. На ней **фригийский колпак**, головной убор отпущенных на волю рабов древнего Рима: знак отвоёванной свободы. Её видят на **марках**, на французских монетах евро, на казённых бумагах и в мэриях, в виде бюста.",
  "Le coq et l'hymne": "Петух и гимн",
  "Le coq gaulois": "Галльский петух",
  "Symbole populaire plutôt qu'officiel. C'est lui qui figure sur les maillots des équipes de France.":
    "Символ скорее народный, чем узаконенный. Именно он стоит на майках сборных Франции.",
  "La Marseillaise": "Марсельеза",
  "L'hymne national, écrit et composé en 1792 par Rouget de Lisle. Il commence par « Allons enfants de la Patrie, le jour de gloire est arrivé ! »":
    "Государственный гимн, написанный и положенный на музыку в 1792 году Руже де Лилем. Он начинается словами: «Вперёд, сыны Отечества, день славы настал!»",
  "Le 14 juillet": "14 июля",
  "La fête nationale. Elle commémore la prise de la Bastille de 1789 et la Fête de la Fédération de 1790.":
    "Народный праздник. Он напоминает о взятии Бастилии в 1789 году и о Празднике Федерации 1790 года.",
  "Le faisceau de licteur": "Ликторская связка",
  "L'emblème de la République française, présent sur le passeport et les documents diplomatiques.":
    "Герб Французской Республики, стоящий на паспорте и на посольских бумагах.",
  "À retenir": "Что запомнить",
  "Noms importants": "Важные имена",
  "Marianne · Rouget de Lisle · le coq gaulois.": "Марианна · Руже де Лиль · галльский петух.",
  "Chiffres importants": "Важные числа",
  "40 questions · 45 minutes · 32 bonnes réponses pour réussir. Drapeau et devise : article 2 de la Constitution. Marseillaise : 1792. Fête nationale : 14 juillet.":
    "40 вопросов · 45 минут · 32 верных ответа, чтобы сдать. Знамя и девиз — статья 2 Конституции. Марсельеза — 1792. Народный праздник — 14 июля.",
  "Mots importants": "Важные слова",
  "Tricolore · devise · bonnet phrygien · hymne national · fête nationale.":
    "Трёхцветное знамя · девиз · фригийский колпак · государственный гимн · народный праздник.",
  "En une phrase : les symboles disent en images ce que la devise dit en mots — une République née d'une révolution et qui s'en souvient.":
    "Одной строкой: символы говорят в образах то же, что девиз говорит словами, — Республика родилась из революции и помнит об этом.",
  "Répondez à ces questions": "Ответьте на эти вопросы",
  "Combien de bonnes réponses faut-il pour réussir l'examen civique ?":
    "Сколько верных ответов нужно, чтобы сдать гражданский экзамен?",
  "20 sur 40": "20 из 40",
  "26 sur 40": "26 из 40",
  "32 sur 40": "32 из 40",
  "40 sur 40": "40 из 40",
  "Il faut 32 bonnes réponses sur 40, soit 80 %, en 45 minutes au maximum.":
    "Нужно 32 верных ответа из 40, то есть 80 %, самое большее за 45 минут.",
  "Que porte Marianne sur la tête ?": "Что у Марианны на голове?",
  "Une couronne": "Корона",
  "Un bonnet phrygien": "Фригийский колпак",
  "Un casque": "Шлем",
  "Un chapeau de paille": "Соломенная шляпа",
  "Le bonnet phrygien, porté par les esclaves affranchis de la Rome antique : il signifie la liberté conquise.":
    "Фригийский колпак, который носили отпущенные на волю рабы древнего Рима: он значит отвоёванную свободу.",
  "Qui a écrit et composé La Marseillaise ?": "Кто написал слова и музыку Марсельезы?",
  "Rouget de Lisle": "Руже де Лиль",
  "Victor Hugo": "Виктор Гюго",
  "Napoléon Bonaparte": "Наполеон Бонапарт",
  "Hector Berlioz": "Гектор Берлиоз",
  "Claude Joseph Rouget de Lisle l'a écrite à Strasbourg en 1792. Elle est devenue l'hymne national en 1795.":
    "Клод Жозеф Руже де Лиль написал её в Страсбурге в 1792 году. Государственным гимном она стала в 1795-м.",
  "Liberté, Égalité, Fraternité": "Свобода, равенство, братство",
  "Pourquoi cette leçon : la devise n'est pas une décoration. Chacun de ses trois mots correspond à des droits précis, et les questions portent sur ce qu'ils veulent dire concrètement, pas sur leur ordre.":
    "Зачем эта лекция: девиз — не украшение. Каждому из трёх слов отвечают вполне определённые права, и вопросы бывают о том, что они значат на деле, а не о порядке слов.",
  "La liberté": "Свобода",
  "Une **liberté**, c'est le droit de faire ce que l'on veut sans nuire à autrui. L'article 4 de la Déclaration des droits de l'homme et du citoyen de 1789 le dit ainsi : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. » Ma liberté s'arrête donc là où commence celle des autres — et nulle part avant.":
    "**Свобода** — это право делать то, что хочешь, не вредя другому. Статья 4 Декларации прав человека и гражданина 1789 года говорит так: «Свобода состоит в возможности делать всё, что не вредит другому». Значит, моя свобода кончается там, где начинается чужая, — и нигде раньше.",
  "Liberté d'expression": "Свобода слова",
  "Dire, écrire et publier ce que l'on pense. Elle vaut aussi sur les réseaux sociaux, où la loi s'applique exactement comme ailleurs.":
    "Говорить, писать и печатать то, что думаешь. Она действует и в общественных сетях, где закон применяется точно так же, как везде.",
  "Liberté d'association": "Свобода объединений",
  "Créer une association ou y adhérer librement, sans autorisation préalable. Elle date de la loi de 1901.":
    "Свободно создавать объединение или вступать в него, без предварительного разрешения. Она идёт от закона 1901 года.",
  "Liberté de conscience": "Свобода совести",
  "Croire, ne pas croire, changer de religion ou n'en avoir aucune. Personne n'a à s'en justifier.":
    "Верить, не верить, менять веру или не иметь никакой. Оправдываться в этом никто не обязан.",
  "Liberté de circulation": "Свобода передвижения",
  "Aller et venir librement sur le territoire, s'installer où l'on veut, quitter le pays et y revenir.":
    "Свободно ездить по стране, селиться где хочешь, покидать страну и возвращаться в неё.",
  "La liberté d'expression a des limites, et elles sont dans la loi : l'injure, la diffamation, l'incitation à la haine, l'apologie du terrorisme et la négation des crimes contre l'humanité sont des délits. « C'était sur internet » n'est pas une excuse.":
    "У свободы слова есть пределы, и они прописаны в законе: оскорбление, клевета, разжигание ненависти, оправдание терроризма и отрицание преступлений против человечности — правонарушения. Отговорка о том, что дело было в сети, не спасает.",
  "L'égalité": "Равенство",
  "L'**égalité** signifie que la loi est la même pour tous et que tous ont les mêmes droits, quels que soient leur origine, leur sexe, leur religion, leur handicap ou leur fortune. Ce n'est pas l'égalité des situations : c'est l'égalité **devant la loi** et l'égalité **des droits**.":
    "**Равенство** значит, что закон один для всех и что у всех одни и те же права, каково бы ни было их происхождение, пол, вера, увечье или состояние. Это не равенство положений: это равенство **перед законом** и равенство **прав**.",
  "La fraternité": "Братство",
  "La **fraternité** est le devoir de solidarité envers les autres. Elle prend une forme légale : l'obligation de **porter secours** à une personne en danger, l'impôt qui finance les services publics, la Sécurité sociale qui répartit les risques entre tous.":
    "**Братство** — это долг стоять за других. У него есть и законный вид: обязанность **прийти на помощь** человеку в опасности, налог, на который живут общественные службы, Sécurité sociale, раскладывающая беду на всех.",
  "Déclaration des droits de l'homme et du citoyen (1789) · loi de 1901 sur les associations.":
    "Декларация прав человека и гражданина (1789) · закон 1901 года об объединениях.",
  "1789 : la Déclaration. Article 4 : la liberté ne nuit pas à autrui. 1901 : liberté d'association.":
    "1789 — Декларация. Статья 4 — свобода не вредит другому. 1901 — свобода объединений.",
  "Liberté · égalité · fraternité · solidarité · discrimination · devoir de secours.":
    "Свобода · равенство · братство · солидарность · дискриминация · долг помощи.",
  "En une phrase : liberté pour chacun, égalité entre tous, fraternité de tous envers chacun — et les trois sont des règles de droit, pas des vœux.":
    "Одной строкой: свобода для каждого, равенство между всеми, братство всех к каждому, — и все три суть нормы права, а не пожелания.",
  "Que signifie l'Égalité dans la devise de la République ?":
    "Что значит «равенство» в девизе Республики?",
  "Tout le monde gagne la même chose": "Что все зарабатывают одинаково",
  "La loi est la même pour tous et tous ont les mêmes droits":
    "Что закон один для всех и у всех одни и те же права",
  "Tout le monde doit avoir le même travail": "Что у всех должна быть одна и та же работа",
  "Tout le monde doit penser pareil": "Что все должны думать одинаково",
  "C'est l'égalité devant la loi et l'égalité des droits, pas l'égalité des revenus ou des situations.":
    "Это равенство перед законом и равенство прав, а не равенство доходов или положений.",
  "Qu'est-ce que la liberté d'association ?": "Что такое свобода объединений?",
  "Le droit de créer une association ou d'y adhérer librement":
    "Право свободно создать объединение или вступить в него",
  "Le droit d'entrer dans n'importe quel bâtiment": "Право войти в любое здание",
  "L'obligation d'appartenir à une association": "Обязанность состоять в каком-нибудь объединении",
  "Le droit de fonder une entreprise": "Право основать предприятие",
  "Depuis la loi de 1901, on peut créer une association ou y adhérer sans autorisation préalable — et on peut aussi n'en faire partie d'aucune.":
    "С закона 1901 года объединение можно создать или вступить в него без предварительного разрешения — а можно не состоять ни в одном.",
  "La laïcité et la loi de 1905": "Laïcité и закон 1905 года",
  "Pourquoi cette leçon : la laïcité est le sujet le plus souvent mal compris de l'examen. Elle n'interdit pas la religion — elle organise la neutralité de l'État. La différence est exactement ce qui est demandé.":
    "Зачем эта лекция: laïcité — то, что на экзамене понимают неверно чаще всего. Она не запрещает религию, она устраивает беспристрастность государства. Об этой разнице и спрашивают.",
  "Ce qu'est la laïcité": "Что такое laïcité",
  "La **laïcité** repose sur trois idées : la **liberté de conscience**, la **séparation des institutions publiques et des religions**, et l'**égalité de tous devant la loi** quelles que soient leurs croyances. L'État ne reconnaît, ne salarie et ne subventionne aucun culte.":
    "**Laïcité** стоит на трёх мыслях: **свобода совести**, **отделение общественных учреждений от религий** и **равенство всех перед законом** независимо от веры. Государство не признаёт, не оплачивает и не поддерживает никакого исповедания.",
  "La loi du 9 décembre 1905": "Закон от 9 декабря 1905 года",
  "La **loi de séparation des Églises et de l'État** a été votée le **9 décembre 1905**. C'est le texte fondateur de la laïcité française. Son article 1er garantit la liberté de conscience et le libre exercice des cultes ; son article 2 dispose que la République ne reconnaît ni ne salarie aucun culte.":
    "**Закон об отделении церквей от государства** был принят **9 декабря 1905 года**. Это основополагающий текст французской laïcité. Первая его статья ручается за свободу совести и за свободное отправление обрядов; вторая говорит, что Республика не признаёт и не оплачивает никакого исповедания.",
  "La **journée de la laïcité** est fixée au **9 décembre**, date anniversaire de la loi. C'est une question qui revient.":
    "**День laïcité** приходится на **9 декабря**, годовщину закона. Об этом спрашивают снова и снова.",
  "Qui doit être neutre": "Кто обязан быть беспристрастным",
  "La neutralité s'impose à l'**État et à ses agents**, pas aux usagers. Un fonctionnaire, un enseignant, un agent de mairie ne peuvent pas manifester leurs convictions religieuses dans l'exercice de leurs fonctions. Une personne qui vient à la mairie, elle, reste libre.":
    "Беспристрастность обязательна для **государства и его служащих**, а не для тех, кто к ним приходит. Чиновник, учитель, работник мэрии не могут при исполнении обязанностей выказывать свои верования. А человек, пришедший в мэрию, остаётся свободен.",
  "À l'école publique": "В государственной школе",
  "Les élèves ne peuvent pas porter de signes religieux ostensibles (loi de 2004). Un bijou discret reste possible ; c'est l'ostentation qui est visée.":
    "Ученикам нельзя носить бросающиеся в глаза знаки веры (закон 2004 года). Неприметное украшение остаётся возможным; запрет метит в показное.",
  "La charte de la laïcité": "Хартия laïcité",
  "Affichée dans les écoles depuis 2013, elle explique aux élèves et aux familles ce que la laïcité permet et ce qu'elle interdit.":
    "Вывешенная в школах с 2013 года, она объясняет ученикам и семьям, что laïcité позволяет и что запрещает.",
  "Dans la rue": "На улице",
  "L'espace public n'est pas soumis à la neutralité. Chacun peut y porter ce qu'il veut, à l'exception de la dissimulation intégrale du visage, interdite depuis 2010.":
    "Общественное место беспристрастности не подчинено. Каждый может носить там что хочет, кроме полного сокрытия лица, запрещённого с 2010 года.",
  "Le financement": "Кто платит",
  "L'État ne finance pas les cultes, mais il peut financer l'entretien des édifices religieux construits avant 1905, dont il est propriétaire.":
    "Государство не содержит исповеданий, но может оплачивать поддержание молитвенных зданий, построенных до 1905 года, которыми оно владеет.",
  "Croire ou ne pas croire": "Верить или не верить",
  "Chacun peut **changer de religion** ou n'en avoir aucune, librement et à tout moment. Une personne qui déclare ne croire en aucun dieu est **athée** ; celle qui estime qu'on ne peut pas savoir est **agnostique**. Ni l'une ni l'autre n'a de compte à rendre.":
    "Каждый может **сменить веру** или не иметь никакой, свободно и в любой час. Тот, кто говорит, что не верит ни в какого бога, — **атеист**; тот, кто считает, что знать этого нельзя, — **агностик**. Ни тот ни другой ни перед кем не отчитывается.",
  "L'**antisémitisme** désigne précisément la haine ou les préjugés visant les Juifs. Comme le racisme et les autres discriminations, il est un délit puni par la loi, et non une opinion.":
    "**Антисемитизм** означает именно ненависть или предубеждение против евреев. Как расизм и другие виды дискриминации, он есть наказуемое законом правонарушение, а не мнение.",
  "Loi du 9 décembre 1905 · loi de 2004 sur les signes religieux à l'école · charte de la laïcité (2013).":
    "Закон от 9 декабря 1905 года · закон 2004 года о знаках веры в школе · хартия laïcité (2013).",
  "1905 : séparation des Églises et de l'État. 9 décembre : journée de la laïcité. 2004 : signes religieux à l'école. 2013 : charte de la laïcité.":
    "1905 — отделение церквей от государства. 9 декабря — день laïcité. 2004 — знаки веры в школе. 2013 — хартия laïcité.",
  "Laïcité · neutralité · liberté de conscience · culte · athée · agnostique · antisémitisme.":
    "Laïcité · беспристрастность · свобода совести · исповедание · атеист · агностик · антисемитизм.",
  "En une phrase : l'État ne croit rien pour que chacun puisse croire ce qu'il veut.":
    "Одной строкой: государство не верит ни во что, чтобы каждый мог верить во что хочет.",
  "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?":
    "В каком году был принят закон об отделении церквей от государства?",
  "1789": "1789",
  "1881": "1881",
  "1905": "1905",
  "1958": "1958",
  "Le 9 décembre 1905. C'est le texte fondateur de la laïcité, et le 9 décembre est aujourd'hui la journée de la laïcité.":
    "9 декабря 1905 года. Это основополагающий текст laïcité, и 9 декабря нынче — день laïcité.",
  "Qui doit respecter la neutralité religieuse dans les services publics ?":
    "Кто обязан соблюдать беспристрастность в делах веры в общественных службах?",
  "Les usagers du service": "Те, кто службой пользуется",
  "Les agents du service public": "Служащие общественной службы",
  "Tout le monde dans la rue": "Все на улице",
  "Personne, la neutralité n'est pas obligatoire": "Никто, беспристрастность необязательна",
  "La neutralité s'impose aux agents, pas aux usagers. Une personne qui se rend à la mairie reste libre de ses convictions et de sa tenue.":
    "Беспристрастность обязательна для служащих, а не для тех, кто к ним приходит. Человек, идущий в мэрию, волен и в своих убеждениях, и в одежде.",
  "Une personne déclare ne croire en aucun dieu. On peut dire :":
    "Человек говорит, что не верит ни в какого бога. Можно сказать:",
  "qu'elle est athée": "что он атеист",
  "qu'elle est croyante": "что он верующий",
  "qu'elle enfreint la loi": "что он нарушает закон",
  "qu'elle doit choisir une religion": "что он обязан выбрать веру",
  "Elle est athée, et c'est parfaitement légal : la liberté de conscience comprend le droit de ne rien croire.":
    "Он атеист, и это вполне законно: свобода совести включает право не верить ни во что.",
  "Les libertés fondamentales": "Основные свободы",
  "Pourquoi cette leçon : les questions ne demandent pas de réciter une liste de libertés, mais de reconnaître où elles s'appliquent et où elles s'arrêtent. C'est là que se joue la différence entre une bonne et une mauvaise réponse.":
    "Зачем эта лекция: вопросы не требуют перечислить свободы наизусть, они требуют узнать, где те действуют и где кончаются. Именно там и решается, верен ответ или нет.",
  "S'exprimer": "Высказываться",
  "La **liberté d'expression** permet de dire et d'écrire ce que l'on pense, y compris pour critiquer le gouvernement, une religion ou une idée. Elle est **encadrée par la loi** : on ne peut pas injurier, diffamer, inciter à la haine, faire l'apologie du terrorisme ni nier des crimes contre l'humanité.":
    "**Свобода слова** позволяет говорить и писать то, что думаешь, в том числе бранить правительство, веру или мысль. Она **очерчена законом**: нельзя оскорблять, клеветать, разжигать ненависть, оправдывать терроризм и отрицать преступления против человечности.",
  "La **liberté de la presse** garantit que les journalistes peuvent enquêter et publier sans autorisation ni censure préalable. Elle protège le droit d'être informé autant que celui d'informer.":
    "**Свобода печати** ручается за то, что газетчики могут вести расследование и печатать без разрешения и без предварительной цензуры. Она защищает право знать не меньше, чем право сообщать.",
  "Sur les **réseaux sociaux**, la liberté d'expression est la même qu'ailleurs, et la loi aussi : un message haineux publié en ligne est une infraction, pas un avis.":
    "В **общественных сетях** свобода слова та же, что и везде, и закон тоже: злобное сообщение, выложенное в сети, есть правонарушение, а не мнение.",
  "Se réunir, s'associer, se syndiquer": "Собираться, объединяться, вступать в союз",
  "Manifester": "Выходить на улицу",
  "Se rassembler pacifiquement est un droit. Une manifestation sur la voie publique doit être déclarée en préfecture.":
    "Собираться мирно — это право. О шествии по улицам надо заявить в préfecture.",
  "S'associer": "Объединяться",
  "Depuis 1901, créer une association demande une simple déclaration, jamais une autorisation.":
    "С 1901 года создание объединения требует простого заявления, а не разрешения.",
  "Se syndiquer": "Вступать в союз",
  "Tout salarié peut adhérer au syndicat de son choix — ou à aucun. Personne ne peut être sanctionné pour cela.":
    "Любой работник может вступить в тот союз, который выберет, — или ни в один. Наказать за это никого нельзя.",
  "Faire grève": "Бастовать",
  "Le droit de grève est constitutionnel. Il sert à défendre des revendications professionnelles collectives.":
    "Право на забастовку записано в Конституции. Оно служит тому, чтобы отстаивать общие требования по работе.",
  "Aller et venir": "Ездить и возвращаться",
  "La **liberté de circulation** permet de se déplacer et de s'installer librement sur le territoire, de le quitter et d'y revenir. En Europe, l'espace Schengen l'étend au-delà des frontières françaises.":
    "**Свобода передвижения** позволяет свободно ездить и селиться по стране, покидать её и возвращаться. В Европе шенгенское пространство раздвигает её за французские границы.",
  "Quand une liberté peut être restreinte": "Когда свободу можно урезать",
  "L'État peut restreindre une liberté, mais seulement **au nom de l'ordre public** et **dans les limites fixées par la loi** — jamais parce qu'une opinion déplaît. La sécurité, la santé publique et les droits d'autrui sont les motifs admis.":
    "Государство может урезать свободу, но только **во имя общественного порядка** и **в пределах, положенных законом**, — никогда потому, что мнение не по нраву. Безопасность, народное здоровье и права других — вот допустимые поводы.",
  "Loi de 1901 (associations) · loi de 1881 (liberté de la presse).":
    "Закон 1901 года (объединения) · закон 1881 года (свобода печати).",
  "1881 : liberté de la presse. 1901 : liberté d'association. L'ordre public est le seul motif général de restriction.":
    "1881 — свобода печати. 1901 — свобода объединений. Общественный порядок — единственный общий повод для ограничения.",
  "Expression · presse · association · syndicat · grève · circulation · ordre public.":
    "Слово · печать · объединение · союз · забастовка · передвижение · общественный порядок.",
  "En une phrase : toutes ces libertés existent par défaut, et il faut une loi pour les limiter — jamais l'inverse.":
    "Одной строкой: все эти свободы есть сами по себе, и чтобы их ограничить, нужен закон, — никогда наоборот.",
  "À quoi sert le droit de grève ?": "Для чего служит право на забастовку?",
  "À défendre des revendications professionnelles": "Чтобы отстаивать требования по работе",
  "À obtenir des vacances supplémentaires automatiquement":
    "Чтобы сами собой появились лишние дни отпуска",
  "À refuser de payer ses impôts": "Чтобы не платить налоги",
  "À quitter son emploi sans préavis": "Чтобы уйти с работы без предупреждения",
  "La grève est l'arrêt collectif et concerté du travail pour défendre des revendications professionnelles. C'est un droit constitutionnel.":
    "Забастовка — это общая, сговорённая заранее остановка работы, чтобы отстоять требования по делу. Это право записано в Конституции.",
  "Au nom de quoi l'État peut-il restreindre une liberté ?":
    "Во имя чего государство может урезать свободу?",
  "De l'opinion du gouvernement": "Во имя мнения правительства",
  "De l'ordre public, dans les limites fixées par la loi":
    "Во имя общественного порядка, в пределах, положенных законом",
  "De la volonté d'une majorité de citoyens": "Во имя воли большинства граждан",
  "D'une décision d'un employeur": "Во имя решения работодателя",
  "Seul l'ordre public — sécurité, santé publique, droits d'autrui — justifie une restriction, et elle doit être prévue par la loi.":
    "Только общественный порядок — безопасность, народное здоровье, права других — оправдывает ограничение, и оно должно быть предусмотрено законом.",
  "Impôts, solidarité et service public": "Налоги, солидарность и общественная служба",
  "Pourquoi cette leçon : la fraternité de la devise se paie. Les questions sur l'impôt et la Sécurité sociale demandent de comprendre à quoi sert l'argent, pas de connaître des taux.":
    "Зачем эта лекция: братство из девиза стоит денег. Вопросы о налоге и о Sécurité sociale требуют понимать, на что идут эти деньги, а не помнить ставки.",
  "L'impôt": "Налог",
  "Les impôts financent les **dépenses publiques** : écoles, hôpitaux, routes, police, justice, défense, aides sociales. **Déclarer ses revenus** à l'administration fiscale est **obligatoire chaque année**, même quand on ne paie pas d'impôt sur le revenu.":
    "Из налогов оплачиваются **общественные расходы**: школы, больницы, дороги, полиция, суд, оборона, пособия. **Заявлять о своих доходах** налоговому ведомству **обязательно каждый год**, даже когда подоходного налога не платишь.",
  "Ne pas déclarer, ou déclarer faux, expose à des pénalités et, dans les cas graves, à des poursuites pénales. La déclaration est un devoir, pas une formalité facultative.":
    "Не заявить или заявить неправду — значит навлечь пени, а в тяжёлых случаях и уголовное преследование. Заявление есть долг, а не необязательная бумажка.",
  "La Sécurité sociale": "Sécurité sociale",
  "La **Sécurité sociale** a été créée en **1945**, au sortir de la Seconde Guerre mondiale. Elle couvre la maladie, la vieillesse, la famille et les accidents du travail. Elle repose sur un principe simple : chacun cotise selon ses moyens et reçoit selon ses besoins.":
    "**Sécurité sociale** была создана в **1945 году**, сразу после Второй мировой войны. Она покрывает болезнь, старость, семью и увечья на работе. Она стоит на простом начале: каждый вносит по достатку и получает по нужде.",
  "Le service public": "Общественная служба",
  "Égalité": "Равенство",
  "Le service public traite tous les usagers de la même façon, sans distinction d'origine, de religion ou de fortune.":
    "Общественная служба обходится со всеми одинаково, невзирая на происхождение, веру или состояние.",
  "Neutralité": "Беспристрастность",
  "Ses agents ne montrent ni leurs convictions religieuses ni leurs préférences politiques dans leur fonction.":
    "Её служащие при исполнении не показывают ни своих верований, ни своих предпочтений в делах государственных.",
  "Continuité": "Непрерывность",
  "Il fonctionne sans interruption : c'est pourquoi certains services ont un service minimum même en cas de grève.":
    "Она работает без перерыва: потому у иных служб есть наименьшая обязательная работа даже во время забастовки.",
  "Gratuité relative": "Условная бесплатность",
  "Beaucoup de services sont gratuits à l'usage — l'école publique, l'état civil — parce qu'ils sont payés par l'impôt.":
    "Многие службы бесплатны для того, кто ими пользуется, — государственная школа, état civil, — потому что за них уже заплачено налогом.",
  "Ce qu'on peut faire à la mairie": "Что можно сделать в мэрии",
  "La mairie tient l'**état civil** : déclarer une naissance, se marier, obtenir un acte. On y fait aussi sa demande de **carte d'identité** ou de **passeport**, on s'**inscrit sur les listes électorales** et on inscrit ses enfants à l'**école publique**.":
    "Мэрия ведёт **état civil**, записи о рождении, браке и смерти: заявить о рождении, заключить брак, получить свидетельство. Там же просят **carte d'identité** или **паспорт**, **вносятся в избирательные списки** и записывают детей в **государственную школу**.",
  "Sécurité sociale · services fiscaux · mairie · état civil.":
    "Sécurité sociale · налоговые службы · мэрия · état civil (записи гражданского состояния).",
  "1945 : création de la Sécurité sociale. Déclaration de revenus : tous les ans, obligatoire.":
    "1945 — создание Sécurité sociale. Заявление о доходах — каждый год, обязательно.",
  "Impôt · dépense publique · cotisation · service public · état civil · listes électorales.":
    "Налог · общественный расход · взнос · общественная служба · état civil · избирательные списки.",
  "En une phrase : l'impôt est la forme concrète de la fraternité, et le service public est ce qu'il achète.":
    "Одной строкой: налог — это братство в осязаемом виде, а общественная служба — то, что на него покупают.",
  "Déclarer ses revenus aux services fiscaux est :": "Заявлять о своих доходах налоговым службам:",
  "facultatif": "необязательно",
  "obligatoire chaque année": "обязательно каждый год",
  "obligatoire seulement pour les salariés": "обязательно только для наёмных работников",
  "réservé aux personnes imposables": "положено только тем, кто налог платит",
  "La déclaration est annuelle et obligatoire, même si l'on ne paie pas d'impôt sur le revenu au bout du compte.":
    "Заявление подаётся раз в год и обязательно, даже если подоходного налога в итоге платить не придётся.",
  "Quand la Sécurité sociale a-t-elle été établie en France ?":
    "Когда во Франции была учреждена Sécurité sociale?",
  "En 1905": "В 1905",
  "En 1936": "В 1936",
  "En 1945": "В 1945",
  "En 1958": "В 1958",
  "En 1945, à la Libération. Elle couvre la maladie, la vieillesse, la famille et les accidents du travail.":
    "В 1945 году, при Освобождении. Она покрывает болезнь, старость, семью и увечья на работе.",
  "La Constitution et l'État de droit": "Конституция и правовое государство",
  "Système institutionnel et politique": "Устройство власти и государственных дел",
  "Pourquoi cette leçon avant les autres du thème : tout le reste — le président, le Parlement, les communes — est organisé par un seul texte. Le connaître, c'est comprendre pourquoi les institutions sont ainsi et pas autrement.":
    "Почему эта лекция идёт впереди прочих в теме: всё остальное — президент, парламент, коммуны — устроено одним-единственным текстом. Знать его — значит понимать, почему учреждения таковы, а не иные.",
  "La Ve République": "Пятая Республика",
  "La **Constitution du 4 octobre 1958** fonde la **Ve République**. Elle a été voulue par le **général de Gaulle** après l'instabilité de la IVe. Elle donne au président de la République un rôle central, ce qui la distingue des républiques précédentes.":
    "**Конституция от 4 октября 1958 года** учреждает **Пятую Республику**. Её желал **генерал де Голль** после шаткости Четвёртой. Она отводит президенту Республики срединное место, чем и отличается от прежних республик.",
  "L'article 1er": "Статья первая",
  "L'article 1er dispose que la France est une **République indivisible, laïque, démocratique et sociale**. Elle assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion, et respecte toutes les croyances. Ces quatre adjectifs sont demandés tels quels.":
    "Первая статья гласит, что Франция есть **неделимая, светская, народовластная и социальная Республика**. Она обеспечивает равенство перед законом всем гражданам без различия происхождения, племени или веры и уважает всякую веру. Эти четыре определения спрашивают именно в таком виде.",
  "Indivisible": "Неделимая",
  "Un seul peuple, un seul territoire, une seule loi. Il n'existe pas de citoyenneté régionale.":
    "Один народ, одна земля, один закон. Областного гражданства не существует.",
  "Laïque": "Светская",
  "L'État est neutre en matière de religion et ne reconnaît aucun culte.":
    "Государство беспристрастно в делах веры и не признаёт никакого исповедания.",
  "Démocratique": "Народовластная",
  "Le pouvoir vient du peuple, qui l'exerce par ses représentants et par le référendum.":
    "Власть идёт от народа, который вершит её через своих избранников и через референдум.",
  "Sociale": "Социальная",
  "L'État garantit une protection : santé, retraite, aide aux plus fragiles.":
    "Государство ручается за защиту: здоровье, пенсия, помощь самым слабым.",
  "L'État de droit": "Правовое государство",
  "L'**État de droit** signifie que tout le monde est soumis à la loi, y compris l'État lui-même. Un citoyen peut attaquer une décision de l'administration devant un juge et obtenir son annulation. Personne n'est au-dessus des règles.":
    "**Правовое государство** значит, что закону подчинены все, включая само государство. Гражданин может обжаловать решение ведомства перед судьёй и добиться его отмены. Никто не стоит выше правил.",
  "On n'a **pas le droit de ne pas respecter une loi**, même quand on la juge injuste. On peut la contester, faire campagne pour la changer, saisir un juge — mais pas s'en dispenser.":
    "**Права не соблюдать закон нет**, даже когда считаешь его несправедливым. Его можно оспорить, добиваться его перемены, обратиться к судье, — но не освободить себя от него.",
  "La séparation des pouvoirs": "Разделение властей",
  "Les trois pouvoirs sont le **législatif** (faire la loi), l'**exécutif** (l'appliquer) et le **judiciaire** (juger). Les séparer empêche qu'une seule main les tienne tous : c'est l'idée de **Montesquieu**, et c'est la garantie principale contre l'arbitraire.":
    "Три власти — это **законодательная** (издавать закон), **исполнительная** (применять его) и **судебная** (судить). Разделение не даёт одной руке держать все три: это мысль **Монтескьё**, и это главная порука против произвола.",
  "Modifier la Constitution": "Изменить Конституцию",
  "Une révision constitutionnelle est votée dans les mêmes termes par les deux assemblées, puis approuvée soit par **référendum**, soit par le **Congrès** (Assemblée nationale et Sénat réunis à Versailles) à la majorité des trois cinquièmes.":
    "Пересмотр Конституции принимается в одних и тех же словах обеими палатами, а затем утверждается либо **референдумом**, либо **Конгрессом** (Национальное собрание и Сенат, сошедшиеся в Версале) большинством в три пятых.",
  "Charles de Gaulle · Montesquieu · le Congrès de Versailles.":
    "Шарль де Голль · Монтескьё · Версальский Конгресс.",
  "4 octobre 1958 : Constitution de la Ve République. Trois pouvoirs. Trois cinquièmes au Congrès pour réviser.":
    "4 октября 1958 года — Конституция Пятой Республики. Три власти. Три пятых в Конгрессе для пересмотра.",
  "Constitution · Ve République · État de droit · séparation des pouvoirs · référendum · Congrès.":
    "Конституция · Пятая Республика · правовое государство · разделение властей · референдум · Конгресс.",
  "En une phrase : la Constitution place la loi au-dessus de tous, y compris de ceux qui la font.":
    "Одной строкой: Конституция ставит закон выше всех, в том числе выше тех, кто его пишет.",
  "Quels sont les trois pouvoirs de la séparation des pouvoirs ?":
    "Каковы три власти в разделении властей?",
  "Législatif, exécutif, judiciaire": "Законодательная, исполнительная, судебная",
  "Militaire, religieux, civil": "Военная, церковная, гражданская",
  "National, régional, communal": "Общегосударственная, областная, общинная",
  "Politique, économique, social": "Государственная, хозяйственная, общественная",
  "Le législatif fait la loi, l'exécutif l'applique, le judiciaire juge. Les séparer empêche la concentration du pouvoir.":
    "Законодательная издаёт закон, исполнительная его применяет, судебная судит. Разделение не даёт власти сойтись в одних руках.",
  "A-t-on le droit de ne pas respecter une loi que l'on juge injuste ?":
    "Есть ли право не соблюдать закон, который считаешь несправедливым?",
  "Oui, si beaucoup de gens la trouvent injuste": "Да, если многие считают его несправедливым",
  "Non : on peut la contester, mais pas s'en dispenser":
    "Нет: его можно оспорить, но не освободить себя от него",
  "Oui, à condition de le dire à la mairie": "Да, если сказать об этом в мэрии",
  "Oui, si elle est ancienne": "Да, если он старый",
  "La loi s'impose à tous. On peut la critiquer, manifester, saisir un juge ou faire campagne pour la changer — pas décider de ne pas l'appliquer.":
    "Закон обязателен для всех. Его можно бранить, выйти на улицу, обратиться к судье или добиваться его перемены, — но не решить, что для тебя он не действует.",
  "Le président et le gouvernement": "Президент и правительство",
  "Pourquoi cette leçon : la confusion entre le président et le Premier ministre est l'erreur la plus fréquente. L'un est élu par le peuple, l'autre est nommé — et cela change tout ce qu'ils font.":
    "Зачем эта лекция: путаница между президентом и премьер-министром — самая частая ошибка. Одного избирает народ, другого назначают, — и от этого меняется всё, что они делают.",
  "Le président de la République": "Президент Республики",
  "Le président est élu au **suffrage universel direct** pour **cinq ans**, au scrutin majoritaire à deux tours. Il est le **chef de l'État** et le **chef des armées**. Il nomme le Premier ministre, préside le Conseil des ministres, promulgue les lois et peut dissoudre l'Assemblée nationale.":
    "Президента избирают **всеобщим прямым голосованием** на **пять лет**, по большинству в два тура. Он **глава государства** и **глава войска**. Он назначает премьер-министра, ведёт Совет министров, обнародует законы и может распустить Национальное собрание.",
  "Pour se présenter, il faut être de **nationalité française**, avoir **18 ans révolus**, jouir de ses droits civils et politiques, être inscrit sur les listes électorales et réunir **500 parrainages** d'élus.":
    "Чтобы выставить свою кандидатуру, надо иметь **французское гражданство**, быть **полных 18 лет**, пользоваться своими гражданскими и государственными правами, состоять в избирательных списках и собрать **500 поручительств** от избранных лиц.",
  "Si le président décède ou démissionne, c'est le **président du Sénat** qui assure l'intérim — pas le Premier ministre. C'est une question classique.":
    "Если президент умрёт или уйдёт в отставку, дела временно ведёт **председатель Сената**, а не премьер-министр. Об этом спрашивают из раза в раз.",
  "Le Premier ministre et le gouvernement": "Премьер-министр и правительство",
  "Le **Premier ministre** est **nommé par le président de la République**. Il n'est pas élu. Il **dirige l'action du gouvernement**, propose les ministres au président et fait appliquer les lois. Le gouvernement est responsable devant l'Assemblée nationale, qui peut le renverser par une motion de censure.":
    "**Премьер-министра** **назначает президент Республики**. Его не избирают. Он **ведёт работу правительства**, предлагает президенту министров и следит за исполнением законов. Правительство отвечает перед Национальным собранием, которое может его свалить вотумом недоверия.",
  "Le président": "Президент",
  "Chef de l'État et des armées. Élu 5 ans au suffrage universel direct. Nomme le Premier ministre.":
    "Глава государства и войска. Избирается на 5 лет всеобщим прямым голосованием. Назначает премьер-министра.",
  "Le Premier ministre": "Премьер-министр",
  "Chef du gouvernement. Nommé, pas élu. Dirige l'action du gouvernement.":
    "Глава правительства. Назначен, а не избран. Ведёт работу правительства.",
  "Les ministres": "Министры",
  "Nommés par le président sur proposition du Premier ministre. Chacun dirige un domaine.":
    "Назначаются президентом по предложению премьер-министра. Каждый ведёт своё поприще.",
  "Le Conseil des ministres": "Совет министров",
  "Réunion hebdomadaire, présidée par le président de la République à l'Élysée.":
    "Еженедельное заседание под началом президента Республики в Елисейском дворце.",
  "Le Défenseur des droits": "Защитник прав",
  "Le **Défenseur des droits** est une autorité indépendante. Toute personne qui s'estime victime d'une discrimination ou mal traitée par une administration peut le saisir **gratuitement**. Il n'est ni un juge ni un ministre : il enquête, recommande et fait pression.":
    "**Защитник прав** — это независимая власть. Всякий, кто считает себя ущемлённым или дурно принятым в каком-нибудь ведомстве, может обратиться к нему **бесплатно**. Он не судья и не министр: он ведёт разбирательство, даёт советы и давит.",
  "Président de la République · Premier ministre · Défenseur des droits · président du Sénat.":
    "Президент Республики · премьер-министр · Защитник прав · председатель Сената.",
  "5 ans de mandat présidentiel. 18 ans et 500 parrainages pour être candidat. Intérim : président du Sénat.":
    "5 лет — срок президента. 18 лет и 500 поручительств, чтобы стать кандидатом. Временно замещает — председатель Сената.",
  "Suffrage universel direct · chef de l'État · nomination · motion de censure · autorité indépendante.":
    "Всеобщее прямое голосование · глава государства · назначение · вотум недоверия · независимая власть.",
  "En une phrase : le peuple choisit le président, le président choisit le Premier ministre, et l'Assemblée peut renvoyer le second sans toucher au premier.":
    "Одной строкой: народ выбирает президента, президент выбирает премьер-министра, а Собрание может прогнать второго, не тронув первого.",
  "Comment est désigné le Premier ministre ?": "Как ставится премьер-министр?",
  "Il est élu par les Français": "Его избирают французы",
  "Il est nommé par le président de la République": "Его назначает президент Республики",
  "Il est élu par les sénateurs": "Его избирают сенаторы",
  "Il est tiré au sort parmi les députés": "Его тянут жребием среди депутатов",
  "Le Premier ministre est nommé par le président. Il n'est jamais élu directement par les citoyens.":
    "Премьер-министра назначает президент. Граждане никогда не избирают его напрямую.",
  "Qui assure l'intérim du président de la République en cas de décès ?":
    "Кто временно ведёт дела президента Республики в случае его смерти?",
  "Le président du Sénat": "Председатель Сената",
  "Le président de l'Assemblée nationale": "Председатель Национального собрания",
  "Le président du Conseil constitutionnel": "Председатель Конституционного совета",
  "C'est le président du Sénat, jusqu'à l'élection d'un nouveau président de la République.":
    "Председатель Сената, до избрания нового президента Республики.",
  "Quelle est la durée du mandat du président de la République ?":
    "Каков срок полномочий президента Республики?",
  "4 ans": "4 года",
  "5 ans": "5 лет",
  "6 ans": "6 лет",
  "7 ans": "7 лет",
  "Cinq ans depuis la réforme du quinquennat de 2000. Auparavant, le mandat durait sept ans.":
    "Пять лет, с перемены 2000 года. Прежде срок длился семь лет.",
  "Le Parlement et la loi": "Парламент и закон",
  "Pourquoi cette leçon : les deux chambres portent des noms proches et des durées de mandat différentes. Les questions jouent précisément là-dessus.":
    "Зачем эта лекция: у двух палат схожие названия и разные сроки полномочий. Вопросы играют именно на этом.",
  "Deux chambres": "Две палаты",
  "Le **Parlement** vote la loi. Il comprend l'**Assemblée nationale** et le **Sénat**. Les deux examinent les textes ; en cas de désaccord persistant, c'est l'Assemblée nationale qui a le dernier mot.":
    "**Парламент** принимает закон. В него входят **Национальное собрание** и **Сенат**. Обе палаты разбирают тексты; если спор не кончается, последнее слово за Национальным собранием.",
  "Assemblée nationale": "Национальное собрание",
  "577 députés, élus au suffrage universel DIRECT pour 5 ans. Siège au Palais Bourbon.":
    "577 депутатов, избранных всеобщим ПРЯМЫМ голосованием на 5 лет. Заседает в Бурбонском дворце.",
  "Sénat": "Сенат",
  "Sénateurs élus au suffrage INDIRECT par de grands électeurs, pour 6 ans. Siège au Palais du Luxembourg.":
    "Сенаторы избираются НЕПРЯМЫМ голосованием через выборщиков, на 6 лет. Заседает в Люксембургском дворце.",
  "Qui fait quoi": "Кто что делает",
  "Les deux votent la loi et contrôlent le gouvernement. Seule l'Assemblée peut le renverser.":
    "Обе принимают закон и надзирают за правительством. Свалить его может только Собрание.",
  "Le Congrès": "Конгресс",
  "Les deux chambres réunies à Versailles, pour réviser la Constitution.":
    "Обе палаты, сошедшиеся в Версале, чтобы пересмотреть Конституцию.",
  "Comment naît une loi": "Как рождается закон",
  "Un texte proposé par le gouvernement est un **projet de loi** ; proposé par des parlementaires, c'est une **proposition de loi**. Il fait la navette entre les deux chambres jusqu'à un vote identique, puis le président de la République le **promulgue** et il est publié au *Journal officiel*.":
    "Текст, внесённый правительством, — это **projet de loi**; внесённый членами парламента — **proposition de loi**. Он ходит челноком между палатами, пока обе не примут его слово в слово, а затем президент Республики его **обнародует**, и он печатается в *Journal officiel*.",
  "Les partis politiques": "Политические партии",
  "**Adhérer à un parti politique est libre.** Les partis concourent à l'expression du suffrage, se forment et exercent leur activité librement, dans le respect de la souveraineté nationale et de la démocratie.":
    "**Вступать в политическую партию волен каждый.** Партии участвуют в том, чтобы голос народа был высказан, складываются и работают свободно, уважая народное верховенство и народовластие.",
  "Assemblée nationale · Sénat · Palais Bourbon · Palais du Luxembourg · Journal officiel.":
    "Национальное собрание · Сенат · Бурбонский дворец · Люксембургский дворец · Journal officiel.",
  "577 députés, 5 ans. Sénateurs, 6 ans. Dernier mot : l'Assemblée nationale.":
    "577 депутатов, 5 лет. Сенаторы — 6 лет. Последнее слово — за Национальным собранием.",
  "Parlement · député · sénateur · suffrage indirect · navette · promulgation.":
    "Парламент · депутат · сенатор · непрямое голосование · челнок · обнародование.",
  "En une phrase : deux chambres écrivent la loi, une seule peut faire tomber le gouvernement.":
    "Одной строкой: закон пишут две палаты, свалить правительство может только одна.",
  "Quelle est la durée du mandat des députés ?": "Каков срок полномочий депутатов?",
  "3 ans": "3 года",
  "9 ans": "9 лет",
  "Cinq ans, sauf dissolution de l'Assemblée nationale par le président. Les sénateurs, eux, sont élus pour six ans.":
    "Пять лет, если только президент не распустит Национальное собрание. Сенаторов же избирают на шесть лет.",
  "Comment sont désignés les députés ?": "Как ставятся депутаты?",
  "Élus au suffrage universel direct par les citoyens":
    "Их избирают граждане всеобщим прямым голосованием",
  "Nommés par le président de la République": "Их назначает президент Республики",
  "Élus par les conseillers municipaux": "Их избирают члены городских советов",
  "Désignés par les partis politiques": "Их ставят политические партии",
  "Au suffrage universel direct, dans chaque circonscription, au scrutin majoritaire à deux tours. Ce sont les sénateurs qui sont élus indirectement.":
    "Всеобщим прямым голосованием, в каждом округе, по большинству в два тура. Непрямым голосованием избирают как раз сенаторов.",
  "La justice et le Conseil constitutionnel": "Правосудие и Конституционный совет",
  "Pourquoi cette leçon : plusieurs questions demandent qui sanctionne quoi. Un maire n'est pas un juge, et le Conseil constitutionnel ne juge pas les voleurs.":
    "Зачем эта лекция: несколько вопросов о том, кто за что наказывает. Мэр — не судья, а Конституционный совет не судит воров.",
  "Qui juge": "Кто судит",
  "Seul un **juge** peut sanctionner l'auteur d'une infraction. La justice est rendue au nom du peuple français par des magistrats **indépendants**, et personne — ni un ministre, ni un maire, ni la police — ne peut prononcer une peine à leur place.":
    "Наказать нарушителя может только **судья**. Правосудие вершится именем французского народа **независимыми** судьями, и никто — ни министр, ни мэр, ни полиция — не может вынести наказание вместо них.",
  "Contravention": "Мелкое нарушение",
  "L'infraction la plus légère : stationnement gênant, petit excès de vitesse. Amende.":
    "Самое лёгкое нарушение: помеха при стоянке, небольшое превышение скорости. Денежный штраф.",
  "Délit": "Проступок",
  "Plus grave : vol, escroquerie, violences. Jugé par le tribunal correctionnel.":
    "Потяжелее: кража, мошенничество, побои. Судит исправительный суд.",
  "Crime": "Тяжкое преступление",
  "Le plus grave : meurtre, viol. Jugé par la cour d'assises, avec des jurés citoyens.":
    "Самое тяжкое: убийство, насилие. Судит суд присяжных, где присяжные — обычные граждане.",
  "Conseil de prud'hommes": "Суд по трудовым спорам (prud'hommes)",
  "Les litiges entre un salarié et son employeur : licenciement, salaires, contrat.":
    "Споры между работником и работодателем: увольнение, жалованье, договор.",
  "Être juré d'assises": "Быть присяжным",
  "Un citoyen tiré au sort peut être appelé comme **juré d'assises**. Ce n'est pas une invitation : c'est **obligatoire**, et se dérober sans motif légitime est sanctionné. Le juré siège aux côtés des magistrats professionnels et participe au verdict.":
    "Гражданина, вытянутого жребием, могут позвать **присяжным**. Это не приглашение: это **обязанность**, и уклонение без законной причины наказуемо. Присяжный сидит рядом с судьями по должности и участвует в приговоре.",
  "Le Conseil constitutionnel": "Конституционный совет",
  "Le **Conseil constitutionnel** vérifie que les lois sont **conformes à la Constitution**. Il contrôle aussi la régularité des élections nationales et des référendums. Il ne juge ni les crimes ni les litiges entre personnes.":
    "**Конституционный совет** проверяет, **отвечают ли законы Конституции**. Он же следит за правильностью общегосударственных выборов и референдумов. Он не судит ни преступлений, ни споров между людьми.",
  "Se défendre": "Защищать себя",
  "Après une interpellation, on peut **garder le silence**, **être assisté d'un avocat** et **prévenir un proche**. L'**aide juridictionnelle** permet aux personnes aux revenus modestes d'avoir un avocat pris en charge par l'État.":
    "После задержания можно **молчать**, **иметь при себе адвоката** и **известить близкого**. **Судебная помощь от казны** позволяет людям со скромным достатком получить адвоката, за которого платит государство.",
  "Une condamnation peut s'accompagner de la **privation des droits civils et politiques** : pendant cette période, la personne ne peut ni voter ni être élue. Elle reste soumise à la loi comme tout le monde.":
    "К приговору может прибавиться **лишение гражданских и государственных прав**: на этот срок человек не может ни голосовать, ни быть избранным. Закону он подчинён так же, как и все.",
  "Conseil constitutionnel · cour d'assises · tribunal correctionnel · conseil de prud'hommes.":
    "Конституционный совет · суд присяжных · исправительный суд · суд по трудовым спорам.",
  "Trois degrés d'infraction : contravention, délit, crime. Le crime est le plus grave.":
    "Три ступени нарушения: мелкое нарушение, проступок, тяжкое преступление. Тяжкое преступление — самое серьёзное.",
  "Magistrat · juré · aide juridictionnelle · droits civils et politiques · constitutionnalité.":
    "Судья · присяжный · судебная помощь от казны · гражданские и государственные права · соответствие Конституции.",
  "En une phrase : la justice punit les personnes, le Conseil constitutionnel corrige les lois.":
    "Одной строкой: правосудие наказывает людей, Конституционный совет правит законы.",
  "Qui sanctionne l'auteur d'un vol ?": "Кто наказывает вора?",
  "Le maire de la commune": "Мэр коммуны",
  "Un juge": "Судья",
  "Le préfet": "Префект",
  "La victime elle-même": "Сам потерпевший",
  "Seul un juge peut prononcer une peine. La police interpelle et enquête ; elle ne juge pas.":
    "Вынести наказание может только судья. Полиция задерживает и ведёт розыск; она не судит.",
  "Quel est le rôle du Conseil constitutionnel ?": "Какова роль Конституционного совета?",
  "Juger les crimes les plus graves": "Судить самые тяжкие преступления",
  "Vérifier que les lois sont conformes à la Constitution":
    "Проверять, отвечают ли законы Конституции",
  "Nommer le Premier ministre": "Назначать премьер-министра",
  "Gérer les collèges publics": "Ведать государственными средними школами",
  "Il contrôle la constitutionnalité des lois et veille à la régularité des élections nationales et des référendums.":
    "Он проверяет законы на соответствие Конституции и следит за правильностью общегосударственных выборов и референдумов.",
  "Voter en France": "Голосовать во Франции",
  "Pourquoi cette leçon : les questions sur le vote portent sur des conditions précises — l'âge, la nationalité, l'inscription — et sur ce qui est obligatoire et ce qui ne l'est pas.":
    "Зачем эта лекция: вопросы о голосовании бывают о вполне определённых условиях — возраст, гражданство, запись в списки — и о том, что обязательно, а что нет.",
  "La souveraineté": "Верховная власть",
  "La **souveraineté nationale appartient au peuple**, qui l'exerce par ses **représentants** et par la voie du **référendum**. Aucune section du peuple ni aucun individu ne peut s'en attribuer l'exercice.":
    "**Народное верховенство принадлежит народу**, который вершит его через своих **избранников** и путём **референдума**. Ни часть народа, ни отдельный человек не могут присвоить себе это право.",
  "Qui peut voter": "Кто может голосовать",
  "Pour voter aux élections présidentielles et législatives, il faut être de **nationalité française**, avoir **18 ans**, jouir de ses **droits civils et politiques** et être **inscrit sur les listes électorales**.":
    "Чтобы голосовать на выборах президента и депутатов, надо иметь **французское гражданство**, быть **18 лет** от роду, пользоваться своими **гражданскими и государственными правами** и **состоять в избирательных списках**.",
  "Les citoyens d'un autre pays de l'Union européenne résidant en France peuvent voter aux élections **municipales** et **européennes**, mais pas aux présidentielles ni aux législatives.":
    "Граждане другой страны Европейского союза, живущие во Франции, могут голосовать на **городских** и **европейских** выборах, но не на президентских и не на депутатских.",
  "S'inscrire": "Записаться",
  "L'inscription sur les listes électorales est **obligatoire**. On s'inscrit **en ligne** ou, sans internet, **à la mairie** de son domicile. Le **vote lui-même n'est pas obligatoire** en France — l'inscription l'est, l'acte de voter est un droit.":
    "Запись в избирательные списки **обязательна**. Записываются **через сеть** или, без интернета, **в мэрии** по месту жительства. **Само голосование во Франции необязательно**: обязательна запись, а голосовать — это право.",
  "Les principales élections": "Главные выборы",
  "Présidentielle": "Президентские",
  "Le président de la République, tous les 5 ans, au suffrage universel direct.":
    "Президент Республики, раз в 5 лет, всеобщим прямым голосованием.",
  "Législatives": "Депутатские",
  "Les députés de l'Assemblée nationale, tous les 5 ans.":
    "Депутаты Национального собрания, раз в 5 лет.",
  "Municipales": "Городские",
  "Les conseillers municipaux, tous les 6 ans. Le conseil élit ensuite le maire.":
    "Члены городского совета, раз в 6 лет. Затем совет избирает мэра.",
  "Européennes": "Европейские",
  "Les députés européens, tous les 5 ans, élus directement par les citoyens.":
    "Европейские депутаты, раз в 5 лет, избираются гражданами напрямую.",
  "Listes électorales · mairie · référendum.": "Избирательные списки · мэрия · референдум.",
  "18 ans pour voter. 5 ans : président, députés, députés européens. 6 ans : conseil municipal et maire.":
    "18 лет, чтобы голосовать. 5 лет — президент, депутаты, европейские депутаты. 6 лет — городской совет и мэр.",
  "Souveraineté · suffrage universel · inscription · droits civils et politiques.":
    "Верховная власть · всеобщее голосование · запись в списки · гражданские и государственные права.",
  "En une phrase : s'inscrire est obligatoire, voter est libre, et les deux se font à la mairie quand internet manque.":
    "Одной строкой: записаться обязательно, голосовать вольно, а и то и другое делают в мэрии, когда интернета нет.",
  "En France, est-ce obligatoire de voter ?": "Обязательно ли во Франции голосовать?",
  "Oui, sous peine d'amende": "Да, иначе штраф",
  "Non : voter est un droit, seule l'inscription est obligatoire":
    "Нет: голосовать — это право, обязательна только запись в списки",
  "Oui, mais seulement aux présidentielles": "Да, но только на президентских выборах",
  "Non, et l'inscription non plus": "Нет, и запись в списки тоже необязательна",
  "L'inscription sur les listes électorales est obligatoire ; l'acte de voter reste un droit que personne n'est contraint d'exercer.":
    "Запись в избирательные списки обязательна; само голосование остаётся правом, пользоваться которым никого не заставляют.",
  "À qui appartient la souveraineté nationale ?": "Кому принадлежит народное верховенство?",
  "Au président de la République": "Президенту Республики",
  "Au peuple": "Народу",
  "Au Parlement": "Парламенту",
  "Au gouvernement": "Правительству",
  "Elle appartient au peuple, qui l'exerce par ses représentants et par le référendum.":
    "Оно принадлежит народу, который вершит его через своих избранников и через референдум.",
  "Communes, départements, régions": "Коммуны, департаменты, области",
  "Pourquoi cette leçon : plusieurs questions demandent qui s'occupe de quoi. Écoles, collèges et lycées relèvent de trois niveaux différents, et c'est exactement ce que l'examen vérifie.":
    "Зачем эта лекция: несколько вопросов о том, кто чем ведает. Начальные школы, средние и старшие относятся к трём разным ступеням, и как раз это экзамен и проверяет.",
  "Trois niveaux": "Три ступени",
  "La France est découpée en **communes**, **départements** et **régions**. À chaque niveau, une assemblée élue et des compétences propres.":
    "Франция поделена на **коммуны**, **департаменты** и **области**. На каждой ступени — избранное собрание и свой круг дел.",
  "La commune": "Коммуна",
  "Le conseil municipal est élu pour 6 ans ; il élit le maire parmi ses membres. La commune gère les écoles maternelles et élémentaires.":
    "Городской совет избирается на 6 лет; он избирает мэра из своих же членов. Коммуна ведает детскими садами и начальными школами.",
  "Le département": "Департамент",
  "Le conseil départemental gère les collèges, l'action sociale et les routes départementales. Il y a 101 départements.":
    "Совет департамента ведает средними школами, помощью нуждающимся и дорогами департамента. Департаментов 101.",
  "La région": "Область",
  "Le conseil régional gère les lycées, la formation professionnelle et les transports régionaux. 13 régions en métropole.":
    "Совет области ведает старшими школами, обучением ремеслу и областными перевозками. В самой Франции 13 областей.",
  "Il représente l'État dans le département. Il est nommé, pas élu.":
    "Он представляет государство в департаменте. Его назначают, а не избирают.",
  "Le maire": "Мэр",
  "Le maire est **élu par le conseil municipal**, non directement par les habitants, pour **six ans**. Il dirige la commune, célèbre les mariages, tient l'état civil et est **officier de police judiciaire**. Il est à la fois élu de la commune et représentant de l'État sur son territoire.":
    "Мэра **избирает городской совет**, а не жители напрямую, на **шесть лет**. Он правит коммуной, заключает браки, ведёт état civil и есть **чин судебной полиции**. Он разом и избранник коммуны, и представитель государства на её земле.",
  "Pour être candidat aux municipales, il faut avoir 18 ans, jouir de ses droits civils et politiques, et être inscrit sur la liste électorale de la commune ou y payer des impôts locaux. Un ressortissant de l'Union européenne peut être conseiller municipal, mais pas maire.":
    "Чтобы выставить свою кандидатуру на городских выборах, надо быть 18 лет от роду, пользоваться своими гражданскими и государственными правами и состоять в избирательном списке коммуны либо платить в ней местные налоги. Гражданин страны Европейского союза может быть членом городского совета, но не мэром.",
  "Le découpage": "Как поделена страна",
  "Il y a **101 départements**, dont **cinq d'outre-mer**, et **13 régions en métropole**. Le 101e département est **Mayotte**, devenue département en **2011**.":
    "Департаментов **101**, из них **пять заморских**, и **13 областей в самой Франции**. Сто первый департамент — **Майотта**, ставшая департаментом в **2011 году**.",
  "Commune · département · région · préfet · maire · Mayotte.":
    "Коммуна · департамент · область · префект · мэр · Майотта.",
  "101 départements · 13 régions métropolitaines · 6 ans pour le conseil municipal et le maire · Mayotte 101e depuis 2011.":
    "101 департамент · 13 областей в самой Франции · 6 лет у городского совета и мэра · Майотта сто первая с 2011 года.",
  "Collectivité territoriale · conseil municipal · conseil départemental · conseil régional · officier d'état civil.":
    "Местное самоуправление · городской совет · совет департамента · совет области · ведущий état civil.",
  "En une phrase : école la commune, collège le département, lycée la région — dans l'ordre où l'enfant grandit.":
    "Одной строкой: начальная школа — коммуна, средняя — департамент, старшая — область, ровно в том порядке, в каком ребёнок растёт.",
  "Qui gère les collèges publics ?": "Кто ведает государственными средними школами?",
  "L'État seul": "Одно только государство",
  "Le département gère les collèges. La commune gère les écoles maternelles et élémentaires, la région les lycées.":
    "Средними школами ведает департамент. Коммуна ведает детскими садами и начальными школами, область — старшими.",
  "Comment sont désignés les maires ?": "Как ставятся мэры?",
  "Élus directement par les habitants": "Их избирают жители напрямую",
  "Élus par le conseil municipal": "Их избирает городской совет",
  "Nommés par le préfet": "Их назначает префект",
  "Les habitants élisent le conseil municipal ; le conseil élit ensuite le maire parmi ses membres.":
    "Жители избирают городской совет; затем совет избирает мэра из своих же членов.",
  "La France dans l'Union européenne": "Франция в Европейском союзе",
  "Pourquoi cette leçon : une part régulière des questions porte sur l'Europe — les dates, les sièges, le drapeau, l'hymne. Ce sont des faits, et ils se retiennent en une fois.":
    "Зачем эта лекция: часть вопросов неизменно об Европе — даты, где что заседает, знамя, гимн. Это простые сведения, и запоминаются они с первого раза.",
  "La construction européenne": "Как строилась Европа",
  "La première étape est la **Communauté européenne du charbon et de l'acier (CECA)**, créée par le **traité de Paris de 1951**. L'idée : mettre en commun les industries de la guerre pour la rendre matériellement impossible.":
    "Первый шаг — **Европейское объединение угля и стали (CECA)**, созданное **Парижским договором 1951 года**. Мысль была такая: свести вместе те производства, из которых делают войну, чтобы война стала попросту невозможной.",
  "Le **traité de Maastricht**, signé en **1992**, fonde l'**Union européenne** et crée la **citoyenneté européenne**. Tout citoyen d'un État membre est aussi citoyen de l'Union.":
    "**Маастрихтский договор**, подписанный в **1992 году**, учреждает **Европейский союз** и создаёт **европейское гражданство**. Всякий гражданин страны-участницы есть и гражданин Союза.",
  "Au 1er janvier 2025, l'Union compte **27 États membres**. Le **Royaume-Uni** l'a quittée en **2020** — c'est le seul État à être sorti.":
    "На 1 января 2025 года в Союзе **27 стран-участниц**. **Соединённое Королевство** ушло из него в **2020 году** — это единственная страна, которая вышла.",
  "Les symboles": "Символы",
  "Le drapeau": "Знамя",
  "Douze étoiles dorées en cercle sur fond bleu. Les douze ne comptent pas les pays : c'est un symbole de perfection et d'unité.":
    "Двенадцать золотых звёзд кругом на синем поле. Двенадцать — это не число стран: это знак совершенства и единства.",
  "L'hymne": "Гимн",
  "L'Ode à la joie, tirée de la Neuvième Symphonie de Beethoven. Sans paroles officielles.":
    "Ода к радости из Девятой симфонии Бетховена. Без положенных слов.",
  "La journée de l'Europe": "День Европы",
  "Le 9 mai, anniversaire de la déclaration Schuman de 1950.":
    "9 мая, годовщина заявления Шумана 1950 года.",
  "La monnaie": "Деньги",
  "L'euro, monnaie officielle de la France depuis 2002 pour les pièces et les billets.":
    "Евро, узаконенные деньги Франции с 2002 года — и монеты, и бумажки.",
  "Les institutions et leurs sièges": "Учреждения и где они сидят",
  "Parlement européen": "Европейский парламент",
  "Strasbourg. Ses députés sont élus directement par les citoyens des États membres.":
    "Страсбург. Его депутатов избирают напрямую граждане стран-участниц.",
  "Commission européenne": "Европейская комиссия",
  "Bruxelles. Elle propose les textes et veille à leur application.":
    "Брюссель. Она вносит тексты и следит за их исполнением.",
  "Banque centrale européenne": "Европейский центральный банк",
  "Francfort. Elle conduit la politique monétaire de la zone euro.":
    "Франкфурт. Он ведёт денежные дела зоны евро.",
  "Conseil de l'UE": "Совет ЕС",
  "Bruxelles. Il réunit les ministres des États membres.":
    "Брюссель. В нём сходятся министры стран-участниц.",
  "CECA · traité de Maastricht · déclaration Schuman · Beethoven · Strasbourg, Bruxelles, Francfort.":
    "CECA · Маастрихтский договор · заявление Шумана · Бетховен · Страсбург, Брюссель, Франкфурт.",
  "1951 CECA · 1992 Maastricht et citoyenneté européenne · 2002 euro · 2020 départ du Royaume-Uni · 27 États au 1er janvier 2025 · 9 mai journée de l'Europe · 12 étoiles.":
    "1951 — CECA · 1992 — Маастрихт и европейское гражданство · 2002 — евро · 2020 — уход Соединённого Королевства · 27 стран на 1 января 2025 · 9 мая — День Европы · 12 звёзд.",
  "Union européenne · citoyenneté européenne · zone euro · Parlement européen · Commission.":
    "Европейский союз · европейское гражданство · зона евро · Европейский парламент · Комиссия.",
  "En une phrase : Strasbourg vote, Bruxelles propose, Francfort tient la monnaie.":
    "Одной строкой: Страсбург голосует, Брюссель вносит, Франкфурт держит деньги.",
  "Où est le siège de la Banque centrale européenne ?": "Где сидит Европейский центральный банк?",
  "À Bruxelles": "В Брюсселе",
  "À Strasbourg": "В Страсбурге",
  "À Francfort": "Во Франкфурте",
  "À Luxembourg": "В Люксембурге",
  "À Francfort, en Allemagne. Le Parlement siège à Strasbourg et la Commission à Bruxelles.":
    "Во Франкфурте, в Германии. Парламент сидит в Страсбурге, а Комиссия в Брюсселе.",
  "Quel État a quitté l'Union européenne en 2020 ?":
    "Какая страна ушла из Европейского союза в 2020 году?",
  "La Norvège": "Норвегия",
  "Le Royaume-Uni": "Соединённое Королевство",
  "La Suisse": "Швейцария",
  "L'Irlande": "Ирландия",
  "Le Royaume-Uni, à l'issue du Brexit. La Norvège et la Suisse n'ont jamais été membres.":
    "Соединённое Королевство, по итогу брексита. Норвегия и Швейцария никогда не были участницами.",
  "Quel est l'hymne de l'Union européenne ?": "Каков гимн Европейского союза?",
  "L'Ode à la joie de Beethoven": "Ода к радости Бетховена",
  "L'Hymne à l'amour": "Гимн любви",
  "Le Chant des partisans": "Песнь партизан",
  "L'Ode à la joie, extraite de la Neuvième Symphonie de Beethoven. Elle est jouée sans paroles.":
    "Ода к радости из Девятой симфонии Бетховена. Играют её без слов.",
  "La Déclaration des droits de l'homme et du citoyen": "Декларация прав человека и гражданина",
  "Droits et devoirs": "Права и обязанности",
  "Pourquoi cette leçon : un texte de 1789 est encore en vigueur aujourd'hui, et plusieurs questions le citent mot pour mot. Il vaut mieux l'avoir lu une fois.":
    "Зачем эта лекция: текст 1789 года действует и поныне, и несколько вопросов приводят его слово в слово. Лучше прочесть его хоть раз.",
  "Le texte fondateur": "Основополагающий текст",
  "La **Déclaration des droits de l'homme et du citoyen** a été adoptée le **26 août 1789**, quelques semaines après la prise de la Bastille. C'est le **texte fondateur** qui établit les droits et les devoirs de chaque citoyen, et il fait partie du **bloc de constitutionnalité** : il a encore aujourd'hui valeur de droit.":
    "**Декларация прав человека и гражданина** была принята **26 августа 1789 года**, через несколько недель после взятия Бастилии. Это **основополагающий текст**, который устанавливает права и обязанности каждого гражданина, и он входит в **свод конституционных норм**: он и сегодня имеет силу закона.",
  "Les articles à connaître": "Статьи, которые надо знать",
  "Article 1er": "Статья 1",
  "« Les hommes naissent et demeurent libres et égaux en droits. » C'est la phrase la plus citée du texte.":
    "«Люди рождаются и остаются свободными и равными в правах». Это самая приводимая строка текста.",
  "Article 4": "Статья 4",
  "« La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. » Ma liberté s'arrête où commence celle des autres.":
    "«Свобода состоит в возможности делать всё, что не вредит другому». Моя свобода кончается там, где начинается чужая.",
  "Article 6": "Статья 6",
  "La loi est l'expression de la volonté générale et doit être la même pour tous.":
    "Закон есть выражение общей воли и должен быть один для всех.",
  "Article 11": "Статья 11",
  "La libre communication des pensées et des opinions est un des droits les plus précieux de l'homme.":
    "Свободное сообщение мыслей и мнений есть одно из драгоценнейших прав человека.",
  "Ne pas confondre : la **Déclaration de 1789** est française et fondatrice ; la **Déclaration universelle des droits de l'homme** est celle de l'ONU, adoptée en **1948**. Les deux existent, et les questions distinguent l'une de l'autre.":
    "Не путать: **Декларация 1789 года** — французская и основополагающая; **Всеобщая декларация прав человека** — это декларация ООН, принятая в **1948 году**. Есть и та и другая, и вопросы их различают.",
  "Les droits fondamentaux": "Основные права",
  "Les **droits fondamentaux** sont les droits reconnus à toute personne du seul fait qu'elle est humaine. Ils ne se méritent pas et ne se retirent pas : dignité, sûreté, liberté de conscience, égalité devant la loi, droit à un procès équitable.":
    "**Основные права** — это права, признанные за всяким человеком уже потому, что он человек. Их не заслуживают и не отнимают: достоинство, личная неприкосновенность, свобода совести, равенство перед законом, право на справедливый суд.",
  "Déclaration des droits de l'homme et du citoyen · Déclaration universelle de 1948.":
    "Декларация прав человека и гражданина · Всеобщая декларация 1948 года.",
  "26 août 1789 : la Déclaration. Article 1er : libres et égaux en droits. Article 4 : ne pas nuire à autrui. 1948 : Déclaration universelle.":
    "26 августа 1789 года — Декларация. Статья 1 — свободны и равны в правах. Статья 4 — не вредить другому. 1948 — Всеобщая декларация.",
  "Droits fondamentaux · dignité · sûreté · volonté générale · bloc de constitutionnalité.":
    "Основные права · достоинство · личная неприкосновенность · общая воля · свод конституционных норм.",
  "En une phrase : un texte écrit pour renverser une monarchie sert encore, deux siècles plus tard, à annuler une loi.":
    "Одной строкой: текст, написанный, чтобы свалить монархию, два века спустя всё ещё годится на то, чтобы отменить закон.",
  "Quel texte affirme que tous les hommes naissent libres et égaux en droits ?":
    "Какой текст утверждает, что все люди рождаются свободными и равными в правах?",
  "La Constitution de 1958": "Конституция 1958 года",
  "La Déclaration des droits de l'homme et du citoyen de 1789":
    "Декларация прав человека и гражданина 1789 года",
  "Le Code civil de 1804": "Гражданский кодекс 1804 года",
  "La loi de 1905": "Закон 1905 года",
  "C'est l'article 1er de la Déclaration de 1789 : « Les hommes naissent et demeurent libres et égaux en droits. »":
    "Это статья 1 Декларации 1789 года: «Люди рождаются и остаются свободными и равными в правах».",
  "Que sont les droits fondamentaux ?": "Что такое основные права?",
  "Des avantages accordés aux personnes méritantes": "Преимущества, даваемые достойным людям",
  "Des droits reconnus à toute personne du seul fait qu'elle est humaine":
    "Права, признанные за всяким человеком уже потому, что он человек",
  "Des droits réservés aux citoyens français": "Права, положенные только французским гражданам",
  "Des règles qui s'appliquent seulement aux fonctionnaires":
    "Правила, которые действуют только для чиновников",
  "Ils appartiennent à toute personne, sans condition de nationalité, de mérite ou de fortune.":
    "Они принадлежат всякому человеку, без условия гражданства, заслуг или состояния.",
  "Les droits du citoyen": "Права гражданина",
  "Pourquoi cette leçon : être citoyen n'est pas un statut décoratif. Il ouvre des droits précis, et les questions demandent lesquels.":
    "Зачем эта лекция: гражданство — не украшение. Оно открывает вполне определённые права, и вопросы бывают о том, какие именно.",
  "Être citoyen": "Быть гражданином",
  "Être **citoyen d'un État**, c'est en avoir la nationalité et, avec elle, des **droits politiques** : voter, être élu, accéder aux emplois publics. C'est aussi être soumis à ses lois et à ses devoirs.":
    "Быть **гражданином государства** — значит иметь его гражданство, а с ним и **государственные права**: голосовать, быть избранным, поступать на казённую службу. Это же значит быть подчинённым его законам и его обязанностям.",
  "Droit de vote": "Право голоса",
  "Choisir ses représentants à partir de 18 ans, une fois inscrit sur les listes électorales.":
    "Выбирать своих избранников с 18 лет, записавшись в избирательные списки.",
  "Droit d'être élu": "Право быть избранным",
  "Se présenter à une élection, du conseil municipal à la présidence de la République.":
    "Выставить свою кандидатуру на выборах, от городского совета до поста президента Республики.",
  "Droit à la sûreté": "Право на личную неприкосновенность",
  "Ne pas être arrêté ni détenu arbitrairement. Toute privation de liberté est encadrée par la loi et contrôlée par un juge.":
    "Не быть задержанным и не сидеть под стражей по произволу. Всякое лишение свободы очерчено законом и проверяется судьёй.",
  "Droit à la justice": "Право на правосудие",
  "Être jugé par un tribunal indépendant, être assisté d'un avocat, faire appel d'une décision.":
    "Быть судимым независимым судом, иметь при себе адвоката, обжаловать решение.",
  "La sûreté": "Личная неприкосновенность",
  "Le **droit à la sûreté** protège contre l'arrestation arbitraire. On ne peut être arrêté que dans les cas prévus par la loi et selon les formes qu'elle prescrit. C'est ce droit qui distingue un État de droit d'un régime arbitraire.":
    "**Право на личную неприкосновенность** защищает от задержания по произволу. Задержать могут только в случаях, предусмотренных законом, и в том порядке, какой он предписывает. Именно это право отличает правовое государство от произвола.",
  "La dignité": "Достоинство",
  "La **dignité humaine** ne se négocie pas. Y porter atteinte — traitements dégradants, esclavage moderne, logement indigne, humiliation raciste — est une infraction, quelle que soit la situation administrative de la victime.":
    "**Человеческое достоинство** торгу не подлежит. Посягать на него — унижающее обращение, нынешнее рабство, негодное жильё, оскорбление по племени — есть правонарушение, каково бы ни было положение потерпевшего по бумагам.",
  "La citoyenneté numérique": "Гражданство в сети",
  "La **citoyenneté numérique**, c'est appliquer en ligne les mêmes droits et les mêmes devoirs qu'ailleurs : s'informer, s'exprimer, participer — sans harceler, insulter ni diffuser de fausses informations. La **majorité numérique** est fixée à **15 ans** : en dessous, l'inscription sur un réseau social requiert l'accord des parents.":
    "**Гражданство в сети** — это те же права и те же обязанности в сети, что и вне её: узнавать, высказываться, участвовать, — не преследуя, не оскорбляя и не разнося ложных вестей. **Сетевое совершеннолетие** положено в **15 лет**: до него запись в общественную сеть требует согласия родителей.",
  "Défenseur des droits · avocat · aide juridictionnelle.":
    "Защитник прав · адвокат · судебная помощь от казны.",
  "18 ans : majorité civile et droit de vote. 15 ans : majorité numérique.":
    "18 лет — гражданское совершеннолетие и право голоса. 15 лет — сетевое совершеннолетие.",
  "Citoyenneté · sûreté · dignité · arrestation arbitraire · citoyenneté numérique.":
    "Гражданство · личная неприкосновенность · достоинство · задержание по произволу · гражданство в сети.",
  "En une phrase : les droits fondamentaux valent pour toute personne, les droits politiques pour les citoyens.":
    "Одной строкой: основные права есть у всякого человека, государственные — у граждан.",
  "Quel droit protège une personne contre une arrestation arbitraire ?":
    "Какое право защищает человека от задержания по произволу?",
  "Le droit de propriété": "Право собственности",
  "Le droit à la sûreté": "Право на личную неприкосновенность",
  "Le droit de grève": "Право на забастовку",
  "Le droit d'association": "Право на объединение",
  "Le droit à la sûreté : nul ne peut être arrêté ni détenu en dehors des cas et des formes prévus par la loi.":
    "Право на личную неприкосновенность: никого нельзя задержать или держать под стражей вне случаев и порядка, предусмотренных законом.",
  "À quel âge est fixée la majorité numérique en France ?":
    "В каком возрасте во Франции положено сетевое совершеннолетие?",
  "13 ans": "13 лет",
  "15 ans": "15 лет",
  "16 ans": "16 лет",
  "18 ans": "18 лет",
  "15 ans. En dessous, l'inscription sur un réseau social nécessite l'accord d'un parent.":
    "15 лет. До этого запись в общественную сеть требует согласия родителя.",
  "Les devoirs du citoyen": "Обязанности гражданина",
  "Pourquoi cette leçon : les devoirs sont la moitié la plus vite oubliée du thème, et pourtant plusieurs d'entre eux sont pénalement sanctionnés.":
    "Зачем эта лекция: обязанности — та половина темы, которую забывают первой, а между тем за иные из них наказывают по уголовному закону.",
  "Respecter la loi": "Соблюдать закон",
  "Le premier devoir est de **respecter la loi**, la Constitution et les valeurs de la République. Nul n'est censé ignorer la loi, et on ne peut pas s'en dispenser au motif qu'on la juge injuste.":
    "Первая обязанность — **соблюдать закон**, Конституцию и ценности Республики. Незнание закона никого не оправдывает, и нельзя освободить себя от него на том основании, что считаешь его несправедливым.",
  "Payer l'impôt": "Платить налог",
  "**Déclarer ses revenus** et **payer ses impôts** est un devoir. La contribution commune est répartie entre les citoyens en raison de leurs facultés — l'article 13 de la Déclaration de 1789 le disait déjà.":
    "**Заявлять о своих доходах** и **платить налоги** — обязанность. Общий взнос раскладывается между гражданами по их достатку, — статья 13 Декларации 1789 года говорила это уже тогда.",
  "Porter secours": "Приходить на помощь",
  "Il est **obligatoire de porter secours** à une personne en danger : appeler les secours, ou intervenir si l'on peut le faire sans risque pour soi. Ne rien faire est le délit de **non-assistance à personne en danger**.":
    "**Прийти на помощь** человеку в опасности **обязательно**: вызвать спасателей или вмешаться, если это можно сделать без опасности для себя. Не сделать ничего — это проступок, **неоказание помощи человеку в опасности**.",
  "Être **juré d'assises** est un devoir civique, pas une proposition. Le citoyen tiré au sort doit se présenter ; ne pas répondre sans motif légitime est puni d'une amende.":
    "Быть **присяжным** — гражданская обязанность, а не предложение. Гражданин, вытянутый жребием, обязан явиться; неявка без законной причины наказывается штрафом.",
  "Le devoir de solidarité et le devoir de mémoire": "Долг солидарности и долг памяти",
  "Devoir de solidarité": "Долг солидарности",
  "Contribuer à la vie collective : impôts, cotisations sociales, secours à autrui, service à la communauté.":
    "Вносить своё в общую жизнь: налоги, взносы на общее обеспечение, помощь ближнему, служба своей округе.",
  "Devoir de mémoire": "Долг памяти",
  "Se souvenir des événements douloureux de l'histoire — Shoah, esclavage, guerres — pour qu'ils ne se répètent pas.":
    "Помнить о больных событиях истории — Шоа, рабство, войны, — чтобы они не повторились.",
  "Devoir de vote ?": "Долг голосовать?",
  "Non : voter est un droit. Mais s'inscrire sur les listes électorales est une obligation.":
    "Нет: голосовать — это право. А вот записаться в избирательные списки — обязанность.",
  "Devoir de défense": "Долг обороны",
  "Le recensement à 16 ans et la Journée défense et citoyenneté sont obligatoires pour les jeunes Français.":
    "Учёт в 16 лет и День обороны и гражданства обязательны для молодых французов.",
  "Non-assistance à personne en danger · juré d'assises · Journée défense et citoyenneté.":
    "Неоказание помощи человеку в опасности · присяжный · День обороны и гражданства.",
  "16 ans : recensement. 18 ans : majorité civile. Déclaration de revenus : chaque année.":
    "16 лет — учёт. 18 лет — гражданское совершеннолетие. Заявление о доходах — каждый год.",
  "Devoir · solidarité · mémoire · non-assistance · civisme.":
    "Обязанность · солидарность · память · неоказание помощи · гражданская совесть.",
  "En une phrase : la République donne des droits à chacun et demande en retour trois choses concrètes — respecter la loi, payer sa part, secourir qui est en danger.":
    "Одной строкой: Республика даёт права каждому и просит взамен три осязаемые вещи — соблюдать закон, платить свою долю, выручать того, кто в опасности.",
  "Est-il obligatoire de porter secours à une personne en danger ?":
    "Обязательно ли приходить на помощь человеку в опасности?",
  "Oui, c'est une obligation légale": "Да, это обязанность по закону",
  "Non, c'est un choix personnel": "Нет, это личный выбор",
  "Seulement pour les professionnels de santé": "Только для врачей и прочих людей здравоохранения",
  "Seulement si l'on connaît la personne": "Только если этого человека знаешь",
  "Ne pas porter secours — ou au minimum appeler les secours — est le délit de non-assistance à personne en danger.":
    "Не прийти на помощь — или хотя бы не вызвать спасателей — есть проступок, неоказание помощи человеку в опасности.",
  "Qu'est-ce que le devoir de mémoire ?": "Что такое долг памяти?",
  "L'obligation d'apprendre l'histoire par cœur": "Обязанность выучить историю наизусть",
  "Se souvenir des événements douloureux du passé pour qu'ils ne se répètent pas":
    "Помнить о больных событиях прошлого, чтобы они не повторились",
  "Le droit de garder le silence devant un juge": "Право молчать перед судьёй",
  "L'obligation de conserver ses documents administratifs":
    "Обязанность хранить свои казённые бумаги",
  "C'est le travail collectif de mémoire sur la Shoah, l'esclavage, les guerres — commémorations, enseignement, lieux de mémoire.":
    "Это общая работа памяти о Шоа, о рабстве, о войнах — поминовения, преподавание, памятные места.",
  "La loi au quotidien": "Закон изо дня в день",
  "Pourquoi cette leçon : ce sont les questions les plus concrètes de l'examen — un âge, une interdiction, une amende. Elles se retiennent comme une liste.":
    "Зачем эта лекция: это самые осязаемые вопросы экзамена — возраст, запрет, штраф. Запоминаются они как список.",
  "Les âges": "Возрасты",
  "La majorité civile. On devient responsable de ses actes, on peut voter, signer un contrat, se marier sans autorisation.":
    "Гражданское совершеннолетие. Человек отвечает за свои поступки, может голосовать, подписать договор, вступить в брак без чужого разрешения.",
  "La majorité numérique : en dessous, un réseau social demande l'accord des parents.":
    "Сетевое совершеннолетие: до него общественная сеть спрашивает согласия родителей.",
  "Fin de l'instruction obligatoire, et recensement pour la Journée défense et citoyenneté.":
    "Конец обязательного обучения и учёт для Дня обороны и гражданства.",
  "Début de l'instruction obligatoire, depuis la rentrée 2019.":
    "Начало обязательного обучения, с учебного года 2019-го.",
  "Interdictions à connaître": "Запреты, которые надо знать",
  "La **vente d'alcool** est interdite aux personnes de **moins de 18 ans**, comme celle du tabac. **Fumer est interdit** dans tous les lieux fermés accueillant du public — bureaux, restaurants, gares, transports — et dans les écoles ; en terrasse ouverte, c'est autorisé.":
    "**Продажа спиртного** запрещена людям **моложе 18 лет**, как и продажа табака. **Курить запрещено** во всех закрытых местах, куда ходят люди, — конторы, рестораны, вокзалы, перевозки — и в школах; на открытой веранде можно.",
  "La **polygamie** est interdite : on ne peut pas être marié à plusieurs personnes en même temps. Un mariage contracté alors qu'on est déjà marié est nul, et la bigamie est un délit.":
    "**Многожёнство** запрещено: нельзя состоять в браке с несколькими людьми разом. Брак, заключённый при уже имеющемся браке, недействителен, а двоежёнство — проступок.",
  "Sur la route": "На дороге",
  "Le **non-respect du code de la route** est une infraction, sanctionnée par une amende et un retrait de points, et par des peines plus lourdes dans les cas graves. **Conduire une moto sans permis** est un **délit**, pas une simple contravention.":
    "**Несоблюдение правил дорожного движения** — нарушение, за которое штрафуют и снимают баллы, а в тяжёлых случаях наказывают строже. **Ездить на мотоцикле без прав** — это **проступок**, а не простое мелкое нарушение.",
  "Les papiers": "Бумаги",
  "Pour obtenir une **carte d'identité**, il faut en faire la demande **en mairie** avec un justificatif d'identité, un justificatif de domicile et une photo. La carte est **gratuite** lors d'une première demande.":
    "Чтобы получить **carte d'identité**, надо подать прошение **в мэрию** с подтверждением личности, подтверждением места жительства и снимком. В первый раз карточка **бесплатна**.",
  "Le stationnement réservé": "Отведённая стоянка",
  "Se garer sur une place réservée aux **personnes handicapées** sans y avoir droit est une infraction lourdement sanctionnée. La place n'est pas une commodité : elle est la condition pour que quelqu'un puisse sortir de sa voiture.":
    "Встать на место, отведённое **людям с увечьем**, не имея на то права, — нарушение, за которое наказывают тяжело. Это место не удобство: без него человек попросту не выйдет из своей машины.",
  "Code de la route · carte nationale d'identité · mairie.":
    "Правила дорожного движения · carte nationale d'identité, удостоверение личности · мэрия.",
  "18 ans : majorité, alcool, tabac. 15 ans : réseaux sociaux. 3 à 16 ans : instruction obligatoire.":
    "18 лет — совершеннолетие, спиртное, табак. 15 лет — общественные сети. С 3 до 16 лет — обязательное обучение.",
  "Contravention · délit · crime · amende · polygamie · lieu fermé accueillant du public.":
    "Мелкое нарушение · проступок · тяжкое преступление · штраф · многожёнство · закрытое место, куда ходят люди.",
  "En une phrase : la plupart de ces règles protègent quelqu'un d'autre que celui à qui elles s'imposent.":
    "Одной строкой: почти всякое из этих правил защищает не того, на кого оно наложено.",
  "La vente d'alcool en France est interdite aux personnes de moins de :":
    "Продажа спиртного во Франции запрещена людям моложе:",
  "20 ans": "20 лет",
  "21 ans": "21 года",
  "18 ans, pour l'alcool comme pour le tabac. Le commerçant doit refuser la vente en cas de doute.":
    "18 лет — и для спиртного, и для табака. Торговец обязан отказать в продаже, если сомневается.",
  "Quelle est l'infraction la plus grave ?": "Какое нарушение самое тяжкое?",
  "La contravention": "Мелкое нарушение",
  "Le délit": "Проступок",
  "Le crime": "Тяжкое преступление",
  "L'amende": "Штраф",
  "Dans l'ordre croissant : contravention, délit, crime. Le crime est jugé par la cour d'assises.":
    "По возрастанию: мелкое нарушение, проступок, тяжкое преступление. Тяжкое преступление судит суд присяжных.",
  "Les mises en situation": "Задачи из жизни",
  "Pourquoi cette leçon : douze des quarante questions de l'examen ne demandent aucune date. Elles décrivent une scène et demandent quelle attitude est la bonne. Elles se préparent, mais autrement.":
    "Зачем эта лекция: двенадцать из сорока вопросов экзамена не спрашивают ни одной даты. Они описывают случай и спрашивают, как правильно поступить. К ним готовятся, но иначе.",
  "Ce qu'est une mise en situation": "Что такое задача из жизни",
  "Une **mise en situation** raconte un cas concret : un collègue au travail, une règle à l'école, un voisin, une démarche administrative. Quatre réactions sont proposées ; une seule est conforme au droit et aux valeurs de la République.":
    "**Задача из жизни** рассказывает случай: сослуживец на работе, правило в школе, сосед, хождение по ведомствам. Предлагают четыре ответа; закону и ценностям Республики отвечает только один.",
  "La règle qui les résout presque toutes": "Правило, которым решается почти всякая из них",
  "La bonne réponse est celle qui fait passer **le droit commun, l'égalité entre les personnes et le respect mutuel** avant la préférence personnelle, la coutume ou l'arrangement privé. Quand deux réponses semblent raisonnables, choisir celle qui **s'adresse à l'institution compétente** plutôt que celle qui règle l'affaire soi-même.":
    "Верен тот ответ, который ставит **общий закон, равенство между людьми и взаимное уважение** выше личного предпочтения, обычая или частного уговора. Когда два ответа кажутся разумными, выбирай тот, который **обращается к ведающему учреждению**, а не тот, который улаживает дело своими руками.",
  "Laïcité": "Laïcité",
  "L'agent public reste neutre ; l'usager reste libre. Une administration ne refuse pas un service au motif d'une croyance.":
    "Служащий остаётся беспристрастен; тот, кто к нему пришёл, остаётся свободен. Ведомство не отказывает в услуге по причине веры.",
  "Aucune différence de traitement selon le sexe, l'origine, la religion ou le handicap. Une femme peut créer une entreprise, diriger, se syndiquer, exactement comme un homme.":
    "Никакой разницы в обращении по полу, происхождению, вере или увечью. Женщина может основать предприятие, начальствовать, вступить в союз ровно так же, как мужчина.",
  "On peut être en désaccord et le dire. On ne peut ni insulter, ni menacer, ni inciter à la haine.":
    "Можно быть несогласным и сказать об этом. Нельзя ни оскорблять, ни угрожать, ни разжигать ненависть.",
  "Vivre ensemble": "Жить вместе",
  "Le bruit, les parties communes, le tri des déchets : on en parle d'abord, on saisit ensuite le syndic, le bailleur ou la mairie.":
    "Шум, общие помещения, разбор мусора: сперва говорят об этом, а затем обращаются к управляющему домом, к хозяину жилья или в мэрию.",
  "Trois exemples et leur raisonnement": "Три случая и ход рассуждения",
  "**Un employeur demande à une candidate si elle compte avoir des enfants.** La question est illégale : lors d'un entretien d'embauche, on ne peut interroger le candidat que sur ce qui sert à évaluer sa capacité à occuper le poste.":
    "**Работодатель спрашивает у соискательницы, собирается ли она рожать детей.** Вопрос противозаконен: на собеседовании о работе спрашивать можно только о том, что помогает оценить пригодность к должности.",
  "**Un voisin met la musique très fort à minuit.** On lui en parle d'abord ; si cela continue, on prévient le syndic ou le bailleur, puis la mairie ou la police. On ne se fait pas justice soi-même.":
    "**Сосед в полночь включает музыку во весь голос.** Сперва говорят с ним; если это продолжается, извещают управляющего домом или хозяина жилья, а затем мэрию или полицию. Правосудие своими руками не вершат.",
  "**Un enfant refuse un cours parce qu'il heurte ses convictions.** L'instruction est obligatoire et les programmes s'appliquent à tous. Les seuls motifs d'absence acceptés par l'école sont la maladie, une réunion familiale solennelle, un empêchement de transport ou une absence des personnes responsables.":
    "**Ребёнок отказывается от урока, потому что тот задевает его убеждения.** Обучение обязательно, и учебные программы одни для всех. Школа принимает лишь такие причины отсутствия: болезнь, торжественное семейное собрание, помеха в дороге или отлучка тех, кто за ребёнка отвечает.",
  "Défenseur des droits · inspection du travail · conseil de prud'hommes · syndic.":
    "Защитник прав · надзор за трудом · суд по трудовым спорам · управляющий домом.",
  "40 questions au total : 28 de connaissance, 12 de mise en situation.":
    "Всего 40 вопросов: 28 на знание, 12 задач из жизни.",
  "Discrimination · neutralité · droit commun · institution compétente · vivre-ensemble.":
    "Дискриминация · беспристрастность · общий закон · ведающее учреждение · совместная жизнь.",
  "En une phrase : la bonne réponse est presque toujours la plus égalitaire et la moins expéditive.":
    "Одной строкой: верный ответ почти всегда самый ровный ко всем и самый неторопливый.",
  "Dans le cadre d'un entretien d'embauche, que peut-on demander au candidat ?":
    "О чём можно спрашивать соискателя на собеседовании о работе?",
  "Sa religion": "О его вере",
  "Ce qui permet d'évaluer sa capacité à occuper le poste":
    "О том, что помогает оценить его пригодность к должности",
  "S'il compte avoir des enfants": "Собирается ли он заводить детей",
  "Son origine ethnique": "О его племенном происхождении",
  "Les questions doivent porter uniquement sur l'aptitude professionnelle. Religion, origine, santé, vie familiale et opinions politiques sont hors sujet et discriminatoires.":
    "Вопросы должны быть только о пригодности к делу. Вера, происхождение, здоровье, семейная жизнь и убеждения о государственных делах к делу не относятся и ущемляют человека.",
  "Une personne peut-elle changer librement de religion en France ?":
    "Может ли человек во Франции свободно сменить веру?",
  "Oui, la liberté de conscience le garantit": "Да, за это ручается свобода совести",
  "Non, il faut une autorisation de la mairie": "Нет, нужно разрешение мэрии",
  "Seulement avec l'accord de sa famille": "Только с согласия своей семьи",
  "Seulement une fois dans sa vie": "Только один раз в жизни",
  "La liberté de conscience comprend le droit de croire, de ne pas croire et de changer de conviction à tout moment, sans se justifier.":
    "Свобода совести включает право верить, не верить и менять убеждение в любой час, ни перед кем не оправдываясь.",
  "De la monarchie à la République": "От монархии к Республике",
  "Histoire, géographie et culture": "История, география и культура",
  "Pourquoi cette leçon : presque tous les symboles, la devise et la Déclaration viennent de dix années entre 1789 et 1799. Les dates de cette période reviennent sans arrêt.":
    "Зачем эта лекция: почти все символы, девиз и Декларация вышли из десяти лет между 1789 и 1799 годами. Даты этой поры возвращаются без конца.",
  "Avant 1789": "До 1789 года",
  "La France était une **monarchie absolue**. Les rois étaient sacrés à **Reims**, dans la cathédrale, et **Louis XIV** — le Roi-Soleil — avait fait de **Versailles** le centre du pouvoir royal. La société était divisée en trois ordres : clergé, noblesse et tiers état.":
    "Франция была **самодержавной монархией**. Королей венчали на царство в **Реймсе**, в соборе, а **Людовик XIV**, Король-Солнце, сделал **Версаль** средоточием королевской власти. Общество делилось на три сословия: духовенство, дворянство и третье сословие.",
  "La **Révolution française** commence en **1789**. Le **14 juillet**, le peuple prend la **Bastille**, prison royale devenue symbole de l'arbitraire. Le **26 août**, l'Assemblée adopte la **Déclaration des droits de l'homme et du citoyen**. En 1790, la **Fête de la Fédération** célèbre l'unité du pays : la fête nationale commémore les deux.":
    "**Французская революция** начинается в **1789 году**. **14 июля** народ берёт **Бастилию**, королевскую тюрьму, ставшую знаком произвола. **26 августа** Собрание принимает **Декларацию прав человека и гражданина**. В 1790 году **Праздник Федерации** славит единство страны: народный праздник напоминает об обоих.",
  "**Louis XVI** est jugé, condamné et **guillotiné en 1793**. C'est le seul roi de France exécuté pendant la Révolution — la question porte sur lui.":
    "**Людовика XVI** судили, осудили и **казнили на гильотине в 1793 году**. Это единственный король Франции, казнённый во время Революции, — вопрос именно о нём.",
  "Napoléon": "Наполеон",
  "**Napoléon Bonaparte** devient **empereur en 1804**. La même année, il fait adopter le **Code civil**, aussi appelé Code Napoléon : il unifie le droit privé et sert encore de base au droit français d'aujourd'hui.":
    "**Наполеон Бонапарт** становится **императором в 1804 году**. В тот же год он проводит **Гражданский кодекс**, называемый ещё кодексом Наполеона: он сводит воедино частное право и до сих пор лежит в основании французского права.",
  "Début de la Révolution. Prise de la Bastille le 14 juillet, Déclaration des droits le 26 août.":
    "Начало Революции. Взятие Бастилии 14 июля, Декларация прав 26 августа.",
  "1792": "1792",
  "Proclamation de la Première République. La Marseillaise est écrite la même année.":
    "Провозглашение Первой Республики. В тот же год написана Марсельеза.",
  "1793": "1793",
  "Louis XVI est guillotiné.": "Людовика XVI казнят на гильотине.",
  "1804": "1804",
  "Napoléon Ier devient empereur et promulgue le Code civil.":
    "Наполеон I становится императором и обнародует Гражданский кодекс.",
  "Louis XIV · Louis XVI · Napoléon Ier · Reims · Versailles · la Bastille.":
    "Людовик XIV · Людовик XVI · Наполеон I · Реймс · Версаль · Бастилия.",
  "1789 Révolution · 1792 Première République · 1793 Louis XVI guillotiné · 1804 Empire et Code civil.":
    "1789 — Революция · 1792 — Первая Республика · 1793 — казнь Людовика XVI · 1804 — Империя и Гражданский кодекс.",
  "Monarchie absolue · tiers état · Bastille · Code civil · sacre.":
    "Самодержавная монархия · третье сословие · Бастилия · Гражданский кодекс · венчание на царство.",
  "En une phrase : en quinze ans, la France passe d'un roi de droit divin à un code de lois qui vaut pour tous.":
    "Одной строкой: за пятнадцать лет Франция переходит от короля милостью Божией к своду законов, который один для всех.",
  "En quelle année a débuté la Révolution française ?":
    "В каком году началась Французская революция?",
  "1776": "1776",
  "1848": "1848",
  "1789 : prise de la Bastille le 14 juillet, Déclaration des droits de l'homme et du citoyen le 26 août.":
    "1789 год: взятие Бастилии 14 июля, Декларация прав человека и гражданина 26 августа.",
  "Parmi ces textes, lequel a été adopté sous Napoléon Ier ?":
    "Который из этих текстов принят при Наполеоне I?",
  "Le Code civil": "Гражданский кодекс",
  "La loi de séparation des Églises et de l'État": "Закон об отделении церквей от государства",
  "La Constitution de la Ve République": "Конституция Пятой Республики",
  "Le Code civil, en 1804. Il unifie le droit privé et reste la base du droit français.":
    "Гражданский кодекс, в 1804 году. Он сводит воедино частное право и остаётся основанием французского права.",
  "Dans quelle ville les rois de France étaient-ils couronnés ?":
    "В каком городе венчали на царство королей Франции?",
  "À Paris": "В Париже",
  "À Versailles": "В Версале",
  "À Reims": "В Реймсе",
  "À Orléans": "В Орлеане",
  "À Reims, dans la cathédrale. Versailles était la résidence du pouvoir, pas le lieu du sacre.":
    "В Реймсе, в соборе. Версаль был обиталищем власти, а не местом венчания на царство.",
  "Les Républiques et les deux guerres": "Республики и две войны",
  "Pourquoi cette leçon : les deux guerres mondiales fournissent trois jours fériés et plusieurs questions. Les dates et ce qu'elles commémorent sont à distinguer soigneusement.":
    "Зачем эта лекция: две мировые войны дают три нерабочих дня и несколько вопросов. Даты и то, о чём они напоминают, надо тщательно различать.",
  "Les guerres": "Войны",
  "Première Guerre mondiale": "Первая мировая война",
  "1914-1918. L'armistice est signé le 11 novembre 1918 : c'est ce que commémore le 11 novembre, jour férié.":
    "1914–1918. Перемирие подписано 11 ноября 1918 года: об этом и напоминает 11 ноября, нерабочий день.",
  "Seconde Guerre mondiale": "Вторая мировая война",
  "1939-1945. Le 8 mai commémore la victoire des Alliés et la fin de la guerre en Europe en 1945.":
    "1939–1945. 8 мая напоминает о победе союзников и о конце войны в Европе в 1945 году.",
  "L'appel du 18 juin": "Призыв 18 июня",
  "En 1940, depuis Londres, le général de Gaulle appelle à continuer le combat. C'est l'acte fondateur de la France libre.":
    "В 1940 году из Лондона генерал де Голль зовёт продолжать борьбу. Это учредительный шаг Свободной Франции.",
  "Le débarquement": "Высадка",
  "Le 6 juin 1944, en Normandie. Paris est libéré le 25 août 1944.":
    "6 июня 1944 года, в Нормандии. Париж освобождён 25 августа 1944 года.",
  "Les Républiques": "Республики",
  "La **Première République** est proclamée en 1792. La **Troisième** dure de 1870 à 1940 et donne à la France l'école gratuite et laïque et la loi de 1905. La **Quatrième** naît en 1946. La **Cinquième**, née de la Constitution du 4 octobre 1958, est celle d'aujourd'hui.":
    "**Первая Республика** провозглашена в 1792 году. **Третья** длится с 1870 по 1940 год и даёт Франции бесплатную и светскую школу и закон 1905 года. **Четвёртая** рождается в 1946 году. **Пятая**, рождённая Конституцией от 4 октября 1958 года, — нынешняя.",
  "Après 1945": "После 1945 года",
  "L'**Organisation des Nations unies (ONU)** est créée en **1945**. En France, les femmes obtiennent le **droit de vote en 1944** et votent pour la première fois en 1945. Depuis **1962**, le président de la République est élu au **suffrage universel direct** ; la première élection de ce type a lieu en 1965.":
    "**Организация Объединённых Наций (ООН)** создана в **1945 году**. Во Франции женщины получают **право голоса в 1944 году** и впервые голосуют в 1945-м. С **1962 года** президента Республики избирают **всеобщим прямым голосованием**; первые такие выборы прошли в 1965 году.",
  "La **peine de mort** est abolie en **1981**, sous la présidence de **François Mitterrand**, sur proposition du garde des Sceaux Robert Badinter.":
    "**Смертная казнь** отменена в **1981 году**, при президенте **Франсуа Миттеране**, по предложению хранителя печатей Робера Бадинтера.",
  "Les présidents de la Ve République": "Президенты Пятой Республики",
  "Charles de Gaulle, Georges Pompidou, Valéry Giscard d'Estaing, François Mitterrand, Jacques Chirac, Nicolas Sarkozy, François Hollande, Emmanuel Macron. Le premier est aussi le fondateur du régime.":
    "Шарль де Голль, Жорж Помпиду, Валери Жискар д'Эстен, Франсуа Миттеран, Жак Ширак, Николя Саркози, Франсуа Олланд, Эмманюэль Макрон. Первый из них — и основатель нынешнего строя.",
  "Charles de Gaulle · François Mitterrand · Robert Badinter · ONU.":
    "Шарль де Голль · Франсуа Миттеран · Робер Бадинтер · ООН.",
  "1914-1918 et 1939-1945 · 11 novembre et 8 mai · 18 juin 1940 · 6 juin et 25 août 1944 · 1944 vote des femmes · 1945 ONU · 1958 Ve République · 1962 suffrage universel direct · 1981 abolition de la peine de mort.":
    "1914–1918 и 1939–1945 · 11 ноября и 8 мая · 18 июня 1940 · 6 июня и 25 августа 1944 · 1944 — голос женщин · 1945 — ООН · 1958 — Пятая Республика · 1962 — всеобщее прямое голосование · 1981 — отмена смертной казни.",
  "Armistice · Libération · France libre · République · abolition.":
    "Перемирие · Освобождение · Свободная Франция · Республика · отмена.",
  "En une phrase : le 11 novembre est un armistice, le 8 mai une victoire, le 14 juillet une révolution — trois jours fériés, trois choses différentes.":
    "Одной строкой: 11 ноября — перемирие, 8 мая — победа, 14 июля — революция: три нерабочих дня, три разные вещи.",
  "Le 11 novembre est un jour férié. À quoi correspond cette date ?":
    "11 ноября — нерабочий день. Чему отвечает эта дата?",
  "À l'armistice de 1918, fin de la Première Guerre mondiale":
    "Перемирию 1918 года, концу Первой мировой войны",
  "À la victoire de 1945": "Победе 1945 года",
  "Au débarquement de Normandie": "Высадке в Нормандии",
  "À la prise de la Bastille": "Взятию Бастилии",
  "L'armistice du 11 novembre 1918. Le 8 mai commémore la victoire de 1945.":
    "Перемирию 11 ноября 1918 года. О победе 1945 года напоминает 8 мая.",
  "Sous quel président a été abolie la peine de mort en France ?":
    "При каком президенте во Франции отменили смертную казнь?",
  "Charles de Gaulle": "Шарль де Голль",
  "Valéry Giscard d'Estaing": "Валери Жискар д'Эстен",
  "François Mitterrand": "Франсуа Миттеран",
  "Jacques Chirac": "Жак Ширак",
  "En 1981, sous François Mitterrand, sur proposition de Robert Badinter, alors garde des Sceaux.":
    "В 1981 году, при Франсуа Миттеране, по предложению Робера Бадинтера, тогдашнего хранителя печатей.",
  "Mémoire : Shoah, Résistance, esclavage": "Память: Шоа, Сопротивление, рабство",
  "Pourquoi cette leçon : le devoir de mémoire est une valeur de la République autant qu'un chapitre d'histoire. Ces questions demandent de nommer les faits exactement.":
    "Зачем эта лекция: долг памяти — такая же ценность Республики, как и глава истории. Эти вопросы требуют называть события в точности.",
  "La Shoah": "Шоа",
  "La **Shoah** est le **génocide des Juifs d'Europe** perpétré par l'Allemagne nazie pendant la Seconde Guerre mondiale : environ six millions de personnes assassinées. En France, l'État de Vichy a participé aux arrestations et aux déportations — un fait reconnu officiellement par la République en 1995.":
    "**Шоа** — это **истребление европейских евреев**, совершённое нацистской Германией во время Второй мировой войны: убито около шести миллионов человек. Во Франции вишистское государство участвовало в задержаниях и высылках — это Республика признала во всеуслышание в 1995 году.",
  "**Nier la Shoah** est un délit en France, et non une opinion. C'est l'une des limites explicites de la liberté d'expression.":
    "**Отрицать Шоа** — во Франции проступок, а не мнение. Это один из прямо названных пределов свободы слова.",
  "La Résistance": "Сопротивление",
  "La **Résistance** rassemble ceux qui combattent l'occupation et le régime de Vichy. **Jean Moulin** en est la figure la plus connue : envoyé par de Gaulle, il unifie les mouvements de résistance en 1943 avant d'être arrêté et torturé à mort. Il repose au **Panthéon**.":
    "**Сопротивление** собирает тех, кто борется с оккупацией и с вишистским правлением. Самое известное его лицо — **Жан Мулен**: посланный де Голлем, он сводит воедино движения сопротивления в 1943 году, а затем схвачен и замучен насмерть. Он покоится в **Пантеоне**.",
  "L'esclavage": "Рабство",
  "L'esclavage a été **aboli définitivement en 1848**, sur l'initiative de **Victor Schœlcher**. Une première abolition, en 1794, avait été annulée par Napoléon en 1802. **Nantes** fut le principal port français de la traite négrière au XVIIIe siècle. Parmi les philosophes des Lumières, **Montesquieu** a dénoncé l'esclavage dans *De l'esprit des lois*.":
    "Рабство **отменено окончательно в 1848 году**, по почину **Виктора Шёльшера**. Первую отмену, 1794 года, Наполеон упразднил в 1802-м. **Нант** был главным французским портом работорговли в восемнадцатом веке. Среди мыслителей Просвещения **Монтескьё** обличал рабство в *О духе законов*.",
  "La colonisation": "Захват заморских земель",
  "La France a possédé un vaste empire colonial : l'**Algérie**, le Maroc, la Tunisie, une grande partie de l'Afrique de l'Ouest, l'Indochine, Madagascar. La décolonisation s'achève pour l'essentiel entre 1954 et 1962 ; l'Algérie devient indépendante en **1962**.":
    "У Франции была обширная заморская держава: **Алжир**, Марокко, Тунис, большая часть Западной Африки, Индокитай, Мадагаскар. Освобождение этих земель в основном кончается между 1954 и 1962 годами; Алжир становится независимым в **1962 году**.",
  "Shoah": "Шоа",
  "Génocide des Juifs d'Europe, 1941-1945. Le nier est un délit.":
    "Истребление европейских евреев, 1941–1945. Отрицать его — проступок.",
  "Jean Moulin": "Жан Мулен",
  "Unificateur de la Résistance, mort en 1943. Au Panthéon depuis 1964.":
    "Собравший Сопротивление воедино, умер в 1943 году. В Пантеоне с 1964-го.",
  "Victor Schœlcher": "Виктор Шёльшер",
  "Artisan de l'abolition définitive de l'esclavage en 1848.":
    "Тот, чьими трудами рабство отменено окончательно в 1848 году.",
  "Le 10 mai": "10 мая",
  "Journée nationale de commémoration de l'abolition de l'esclavage en métropole.":
    "Общегосударственный день памяти об отмене рабства, в самой Франции.",
  "Shoah · Jean Moulin · Victor Schœlcher · Montesquieu · Nantes · Panthéon.":
    "Шоа · Жан Мулен · Виктор Шёльшер · Монтескьё · Нант · Пантеон.",
  "1848 abolition définitive de l'esclavage · 1943 unification de la Résistance · 1962 indépendance de l'Algérie · 10 mai journée de commémoration.":
    "1848 — окончательная отмена рабства · 1943 — Сопротивление сведено воедино · 1962 — независимость Алжира · 10 мая — день памяти.",
  "Génocide · déportation · Résistance · traite négrière · colonisation · devoir de mémoire.":
    "Истребление народа · высылка · Сопротивление · работорговля · захват заморских земель · долг памяти.",
  "En une phrase : la République nomme ce qu'elle a fait de pire, parce que taire un crime est la première étape pour le refaire.":
    "Одной строкой: Республика называет худшее из того, что сделала, потому что молчание о преступлении есть первый шаг к тому, чтобы его повторить.",
  "Qu'est-ce que la Shoah ?": "Что такое Шоа?",
  "Une bataille de la Seconde Guerre mondiale": "Сражение Второй мировой войны",
  "Le génocide des Juifs d'Europe pendant la Seconde Guerre mondiale":
    "Истребление европейских евреев во время Второй мировой войны",
  "Un traité de paix signé en 1945": "Мирный договор, подписанный в 1945 году",
  "Un mouvement de résistance français": "Французское движение сопротивления",
  "Le génocide des Juifs d'Europe perpétré par l'Allemagne nazie. Le nier est un délit en France.":
    "Истребление европейских евреев, совершённое нацистской Германией. Отрицать его во Франции — проступок.",
  "Depuis quand l'esclavage est-il aboli définitivement en France ?":
    "С какого времени рабство во Франции отменено окончательно?",
  "1794": "1794",
  "1946": "1946",
  "1848, sur l'initiative de Victor Schœlcher. L'abolition de 1794 avait été annulée par Napoléon en 1802.":
    "С 1848 года, по почину Виктора Шёльшера. Отмену 1794 года Наполеон упразднил в 1802-м.",
  "La géographie de la France": "География Франции",
  "Pourquoi cette leçon : montagnes, fleuves, mers et chefs-lieux sont des faits simples, et une série de questions porte dessus chaque fois.":
    "Зачем эта лекция: горы, реки, моря и главные города — сведения простые, и всякий раз о них спрашивает целый ряд вопросов.",
  "Les chiffres": "Числа",
  "Au **1er janvier 2025**, la France compte environ **68,6 millions d'habitants** : 66,4 millions en métropole et 2,3 millions dans les cinq départements d'outre-mer. Il y a **101 départements** et **13 régions en métropole**.":
    "На **1 января 2025 года** во Франции около **68,6 миллиона жителей**: 66,4 миллиона в самой Франции и 2,3 миллиона в пяти заморских департаментах. Департаментов **101**, а областей в самой Франции **13**.",
  "Reliefs et eaux": "Горы и воды",
  "Le mont Blanc": "Монблан",
  "Le plus haut sommet de France, dans les Alpes, à environ 4 800 mètres.":
    "Самая высокая вершина Франции, в Альпах, около 4 800 метров.",
  "Les Alpes": "Альпы",
  "La chaîne de montagnes située entre la France et l'Italie. Les Pyrénées séparent la France de l'Espagne.":
    "Горная гряда между Францией и Италией. Пиренеи же отделяют Францию от Испании.",
  "La Seine": "Сена",
  "Le fleuve qui traverse Paris. Les autres grands fleuves : Loire, Rhône, Garonne, Rhin.":
    "Река, которая течёт через Париж. Другие большие реки: Луара, Рона, Гаронна, Рейн.",
  "Les mers": "Моря",
  "La France métropolitaine est bordée par la Manche, la mer du Nord, l'océan Atlantique et la mer Méditerranée.":
    "Саму Францию омывают Ла-Манш, Северное море, Атлантический океан и Средиземное море.",
  "Villes et régions": "Города и области",
  "Les plus grandes métropoles sont **Paris**, **Lyon**, **Marseille**, **Toulouse**, **Lille**, **Bordeaux** et **Nice**. **Marseille** est le premier **port maritime** de France.":
    "Самые большие города — **Париж**, **Лион**, **Марсель**, **Тулуза**, **Лилль**, **Бордо** и **Ницца**. **Марсель** — первый **морской порт** Франции.",
  "Auvergne-Rhône-Alpes": "Овернь — Рона — Альпы",
  "Chef-lieu : Lyon. Région réputée pour ses stations de ski.":
    "Главный город — Лион. Область славится своими лыжными местами.",
  "Bretagne": "Бретань",
  "Chef-lieu : Rennes.": "Главный город — Ренн.",
  "Provence-Alpes-Côte d'Azur": "Прованс — Альпы — Лазурный берег",
  "Chef-lieu : Marseille.": "Главный город — Марсель.",
  "Normandie": "Нормандия",
  "Chef-lieu : Rouen. Les plages du débarquement de 1944 s'y trouvent.":
    "Главный город — Руан. Там же берега высадки 1944 года.",
  "Mont Blanc · Alpes · Pyrénées · Seine · Marseille · Lyon · Rennes · Rouen.":
    "Монблан · Альпы · Пиренеи · Сена · Марсель · Лион · Ренн · Руан.",
  "68,6 millions d'habitants en 2025 · 101 départements · 13 régions métropolitaines · mont Blanc environ 4 800 m.":
    "68,6 миллиона жителей в 2025 году · 101 департамент · 13 областей в самой Франции · Монблан около 4 800 м.",
  "Métropole · chef-lieu · fleuve · port maritime · massif.":
    "Сама Франция · главный город · река · морской порт · горный массив.",
  "En une phrase : la France tient dans quatre mers, deux grandes chaînes de montagnes et treize régions.":
    "Одной строкой: Франция умещается в четырёх морях, двух больших горных грядах и тринадцати областях.",
  "Quelle est la plus haute montagne de France ?": "Какая гора во Франции самая высокая?",
  "Le pic du Midi": "Пик-дю-Миди",
  "Le puy de Dôme": "Пюи-де-Дом",
  "Le mont Ventoux": "Мон-Ванту",
  "Le mont Blanc, dans les Alpes, à environ 4 800 mètres. C'est aussi le plus haut sommet d'Europe occidentale.":
    "Монблан, в Альпах, около 4 800 метров. Это и самая высокая вершина Западной Европы.",
  "Quel fleuve traverse Paris ?": "Какая река течёт через Париж?",
  "La Loire": "Луара",
  "Le Rhône": "Рона",
  "La Garonne": "Гаронна",
  "La Seine. Elle prend sa source en Bourgogne et se jette dans la Manche au Havre.":
    "Сена. Она начинается в Бургундии и впадает в Ла-Манш у Гавра.",
  "Quel est le chef-lieu de la région Bretagne ?": "Какой главный город у области Бретань?",
  "Brest": "Брест",
  "Rennes": "Ренн",
  "Nantes": "Нант",
  "Quimper": "Кемпер",
  "Rennes. Nantes est la plus grande ville de la région voisine des Pays de la Loire.":
    "Ренн. Нант — самый большой город соседней области Пеи-де-ла-Луар.",
  "La France d'outre-mer": "Заморская Франция",
  "Pourquoi cette leçon : la France ne s'arrête pas à l'hexagone, et l'examen le vérifie. Les questions demandent quel territoire est où.":
    "Зачем эта лекция: Франция не кончается шестиугольником своей земли, и экзамен это проверяет. Вопросы бывают о том, какая земля где.",
  "Ce qu'est la France d'outre-mer": "Что такое заморская Франция",
  "La **France d'outre-mer** rassemble les territoires français situés hors d'Europe. Leurs habitants sont **français et citoyens de l'Union européenne**, votent aux mêmes élections et sont soumis aux mêmes lois, avec des adaptations locales.":
    "**Заморская Франция** сводит вместе французские земли за пределами Европы. Их жители — **французы и граждане Европейского союза**, голосуют на тех же выборах и подчинены тем же законам, с поправками на местные условия.",
  "Les cinq départements d'outre-mer": "Пять заморских департаментов",
  "La Guadeloupe": "Гваделупа",
  "Aux Antilles, dans la mer des Caraïbes.": "На Антильских островах, в Карибском море.",
  "La Martinique": "Мартиника",
  "Aux Antilles également.": "Тоже на Антильских островах.",
  "La Guyane": "Гвиана",
  "En Amérique du Sud. C'est le seul territoire français à avoir une frontière avec le Brésil.":
    "В Южной Америке. Это единственная французская земля, у которой есть граница с Бразилией.",
  "La Réunion": "Реюньон",
  "Dans l'océan Indien, au sud-est du continent africain, près de Madagascar.":
    "В Индийском океане, к юго-востоку от Африки, близ Мадагаскара.",
  "Mayotte": "Майотта",
  "Dans l'océan Indien aussi. Devenue le 101e département français en 2011.":
    "Тоже в Индийском океане. Стала сто первым французским департаментом в 2011 году.",
  "Les autres territoires": "Другие земли",
  "S'y ajoutent la **Nouvelle-Calédonie**, la **Polynésie française**, **Saint-Pierre-et-Miquelon**, **Wallis-et-Futuna**, **Saint-Martin**, **Saint-Barthélemy** et les Terres australes et antarctiques françaises. La **Corse** n'est pas outre-mer : c'est une île de la Méditerranée qui fait partie de la métropole.":
    "К ним прибавляются **Новая Каледония**, **Французская Полинезия**, **Сен-Пьер и Микелон**, **Уоллис и Футуна**, **Сен-Мартен**, **Сен-Бартелеми** и Французские южные и антарктические земли. **Корсика** не заморская: это остров в Средиземном море, входящий в саму Францию.",
  "La fusée **Ariane** décolle de **Kourou**, en **Guyane**. La proximité de l'équateur donne un avantage physique au lancement — c'est pourquoi le port spatial européen s'y trouve.":
    "Ракета **«Ариан»** взлетает из **Куру**, в **Гвиане**. Близость экватора даёт запуску выигрыш по законам природы — потому европейская космическая пристань и стоит там.",
  "Guadeloupe · Martinique · Guyane · La Réunion · Mayotte · Kourou · Nouvelle-Calédonie.":
    "Гваделупа · Мартиника · Гвиана · Реюньон · Майотта · Куру · Новая Каледония.",
  "5 départements d'outre-mer · 2,3 millions d'habitants · Mayotte 101e département en 2011.":
    "5 заморских департаментов · 2,3 миллиона жителей · Майотта — сто первый департамент в 2011 году.",
  "Outre-mer · département d'outre-mer · métropole · Antilles · océan Indien.":
    "Заморские земли · заморский департамент · сама Франция · Антильские острова · Индийский океан.",
  "En une phrase : la France est présente sur tous les océans, et ses habitants y sont français de plein droit.":
    "Одной строкой: Франция есть на всех океанах, и её тамошние жители — французы в полном праве.",
  "Quel département français a une frontière avec le Brésil ?":
    "У какого французского департамента есть граница с Бразилией?",
  "La Guyane, en Amérique du Sud. Elle a aussi une frontière avec le Suriname.":
    "У Гвианы, в Южной Америке. У неё есть граница и с Суринамом.",
  "Quelle île française est située dans l'océan Indien ?":
    "Какой французский остров лежит в Индийском океане?",
  "La Corse": "Корсика",
  "La Réunion, au sud-est de l'Afrique, près de Madagascar. Mayotte s'y trouve également.":
    "Реюньон, к юго-востоку от Африки, близ Мадагаскара. Там же и Майотта.",
  "Arts, lettres et patrimoine": "Искусства, словесность и наследие",
  "Pourquoi cette leçon : une longue série de questions se résume à « qui était cette personne ? ». Les classer par métier est le moyen le plus rapide de les retenir.":
    "Зачем эта лекция: длинный ряд вопросов сводится к одному: «кто был этот человек?». Разобрать их по ремеслу — самый быстрый способ запомнить.",
  "Les écrivains": "Писатели",
  "Molière": "Мольер",
  "Auteur de théâtre du XVIIe siècle, maître de la comédie. On appelle le français « la langue de Molière ».":
    "Сочинитель пьес семнадцатого века, мастер весёлого действа. Французский зовут «языком Мольера».",
  "Charles Baudelaire": "Шарль Бодлер",
  "Poète du XIXe siècle, auteur des Fleurs du mal.":
    "Поэт девятнадцатого века, сочинитель «Цветов зла».",
  "George Sand": "Жорж Санд",
  "Romancière du XIXe siècle. Une femme, malgré le prénom qu'elle s'était choisi.":
    "Романистка девятнадцатого века. Женщина, несмотря на имя, которое она себе выбрала.",
  "Albert Camus": "Альбер Камю",
  "Écrivain et philosophe du XXe siècle, prix Nobel de littérature.":
    "Писатель и мыслитель двадцатого века, Нобелевский лауреат по литературе.",
  "Simone de Beauvoir": "Симона де Бовуар",
  "Philosophe et écrivaine, autrice du Deuxième Sexe, figure majeure du féminisme.":
    "Мыслительница и писательница, сочинительница «Второго пола», одно из главных лиц женского движения.",
  "Marguerite Yourcenar": "Маргерит Юрсенар",
  "Écrivaine, première femme élue à l'Académie française, en 1980.":
    "Писательница, первая женщина, избранная во Французскую академию, в 1980 году.",
  "Poète, romancier et dramaturge. Les Misérables, Notre-Dame de Paris.":
    "Поэт, романист и сочинитель пьес. «Отверженные», «Собор Парижской Богоматери».",
  "Les Lumières": "Просвещение",
  "Voltaire, Rousseau, Diderot, Montesquieu : les penseurs du XVIIIe siècle qui préparent la Révolution.":
    "Вольтер, Руссо, Дидро, Монтескьё — мыслители восемнадцатого века, готовившие Революцию.",
  "Les artistes": "Художники",
  "Claude Monet": "Клод Моне",
  "Peintre impressionniste, auteur des Nymphéas, visibles au musée de l'Orangerie.":
    "Живописец-импрессионист, написавший «Кувшинки», которые можно видеть в музее Оранжери.",
  "Auguste Renoir": "Огюст Ренуар",
  "Peintre impressionniste également.": "Тоже живописец-импрессионист.",
  "Paul Cézanne": "Поль Сезанн",
  "Peintre, figure de la transition vers l'art moderne.":
    "Живописец, лицо перехода к новому искусству.",
  "Auguste Rodin": "Огюст Роден",
  "Sculpteur : Le Penseur, Le Baiser.": "Ваятель: «Мыслитель», «Поцелуй».",
  "**Eugène Delacroix** a peint *La Liberté guidant le peuple*, où Marianne brandit le drapeau tricolore. Parmi les compositeurs français : **Claude Debussy**, **Maurice Ravel**, **Hector Berlioz**. **Marie Curie** était une scientifique, deux fois prix Nobel — la seule personne primée dans deux disciplines scientifiques différentes.":
    "**Эжен Делакруа** написал *«Свободу, ведущую народ»*, где Марианна вздымает трёхцветное знамя. Среди французских сочинителей музыки — **Клод Дебюсси**, **Морис Равель**, **Гектор Берлиоз**. **Мария Кюри** была учёной, дважды Нобелевским лауреатом: единственный человек, награждённый в двух разных науках.",
  "Le patrimoine": "Наследие",
  "Le Louvre": "Лувр",
  "À Paris. La Joconde de Léonard de Vinci y est exposée.":
    "В Париже. Там выставлена «Джоконда» Леонардо да Винчи.",
  "Le château de Versailles": "Версальский дворец",
  "Près de Paris. Symbole du pouvoir royal de Louis XIV.":
    "Близ Парижа. Знак королевской власти Людовика XIV.",
  "Le Mont-Saint-Michel": "Мон-Сен-Мишель",
  "En Normandie, sur un îlot rocheux dans la baie.":
    "В Нормандии, на скалистом островке в заливе.",
  "Lascaux": "Ласко",
  "En Dordogne. Peintures préhistoriques, vieilles d'environ 17 000 ans.":
    "В Дордони. Доисторические росписи, которым около 17 000 лет.",
  "Les fêtes culturelles": "Праздники искусства",
  "La **tour Eiffel** a été construite pour l'**Exposition universelle de 1889**. Les **Journées européennes du patrimoine**, en septembre, permettent de visiter gratuitement des lieux habituellement fermés. Le **1er mai** est la **Fête du Travail**, jour férié et chômé.":
    "**Эйфелева башня** была построена ко **Всемирной выставке 1889 года**. **Европейские дни наследия** в сентябре позволяют бесплатно осмотреть места, обыкновенно закрытые. **1 мая** — **Праздник труда**, нерабочий день.",
  "Molière · Baudelaire · George Sand · Camus · Beauvoir · Yourcenar · Monet · Renoir · Cézanne · Rodin · Delacroix · Marie Curie.":
    "Мольер · Бодлер · Жорж Санд · Камю · Бовуар · Юрсенар · Моне · Ренуар · Сезанн · Роден · Делакруа · Мария Кюри.",
  "1889 tour Eiffel · 1980 Yourcenar à l'Académie · 1er mai Fête du Travail · Journées du patrimoine en septembre.":
    "1889 — Эйфелева башня · 1980 — Юрсенар в Академии · 1 мая — Праздник труда · Дни наследия в сентябре.",
  "Impressionnisme · Lumières · patrimoine · Académie française · musée.":
    "Импрессионизм · Просвещение · наследие · Французская академия · музей.",
  "En une phrase : trois classements suffisent — ceux qui écrivaient, ceux qui peignaient ou sculptaient, et les lieux qu'on visite.":
    "Одной строкой: довольно трёх рядов — те, кто писал словом, те, кто писал красками или ваял, и места, куда ходят смотреть.",
  "Qui a peint « La Liberté guidant le peuple » ?": "Кто написал «Свободу, ведущую народ»?",
  "Eugène Delacroix": "Эжен Делакруа",
  "Eugène Delacroix, en 1830. Le tableau est exposé au Louvre ; la figure centrale est une allégorie de la liberté.":
    "Эжен Делакруа, в 1830 году. Картина выставлена в Лувре; средняя её фигура — олицетворение свободы.",
  "Qui était Simone de Beauvoir ?": "Кем была Симона де Бовуар?",
  "Une peintre impressionniste": "Живописица-импрессионистка",
  "Une philosophe et écrivaine, figure du féminisme":
    "Мыслительница и писательница, лицо женского движения",
  "Une scientifique prix Nobel": "Учёная, Нобелевский лауреат",
  "Une résistante fusillée en 1943": "Участница Сопротивления, расстрелянная в 1943 году",
  "Philosophe et écrivaine, autrice du Deuxième Sexe (1949), l'un des textes fondateurs du féminisme moderne.":
    "Мыслительница и писательница, сочинительница «Второго пола» (1949), одного из основополагающих текстов нынешнего женского движения.",
  "À quelle occasion a été construite la tour Eiffel ?":
    "По какому случаю построена Эйфелева башня?",
  "Pour le centenaire de la Révolution et l'Exposition universelle de 1889":
    "К столетию Революции и Всемирной выставке 1889 года",
  "Pour les Jeux olympiques de 1900": "К Олимпийским играм 1900 года",
  "Pour la Libération de Paris": "К освобождению Парижа",
  "Pour l'Exposition coloniale de 1931": "К Колониальной выставке 1931 года",
  "Pour l'Exposition universelle de 1889, qui marquait le centenaire de la Révolution française.":
    "Ко Всемирной выставке 1889 года, которая отмечала столетие Французской революции.",
  "État civil, famille et logement": "État civil, семья и жильё",
  "Vivre dans la société française": "Жить во французском обществе",
  "Pourquoi cette leçon : ce sont les démarches que tout le monde fait un jour. Les questions demandent où aller et dans quel délai.":
    "Зачем эта лекция: это те хождения по ведомствам, которые однажды выпадают каждому. Вопросы бывают о том, куда идти и в какой срок.",
  "L'état civil": "État civil — записи гражданского состояния",
  "L'**état civil** est tenu par la **mairie**. C'est là qu'on **déclare une naissance**, qu'on se marie, qu'on déclare un décès et qu'on obtient un acte. La naissance doit être déclarée **dans les cinq jours** qui suivent l'accouchement, pour **tout enfant né en France**, quelle que soit la nationalité des parents.":
    "**État civil** ведёт **мэрия**. Именно там **заявляют о рождении**, заключают брак, заявляют о смерти и получают свидетельство. О рождении надо заявить **в течение пяти дней** после родов, и это касается **всякого ребёнка, рождённого во Франции**, каково бы ни было гражданство родителей.",
  "Le mariage": "Брак",
  "Seul le **mariage civil célébré en mairie** est reconnu légalement. Une cérémonie religieuse peut avoir lieu, mais **après** le mariage civil et sans effet juridique propre. Le mariage entre personnes de même sexe est légal depuis 2013. La **polygamie est interdite**.":
    "Законным признаётся только **гражданский брак, заключённый в мэрии**. Церковный обряд возможен, но **после** гражданского брака и своей силы в праве не имеет. Брак между людьми одного пола законен с 2013 года. **Многожёнство запрещено**.",
  "Le divorce": "Развод",
  "Chacun des deux époux peut le demander, seul ou d'un commun accord. Il n'est pas nécessaire d'obtenir l'accord de l'autre.":
    "Просить о нём может каждый из супругов, один или по общему согласию. Согласия другого добиваться не нужно.",
  "L'autorité parentale": "Родительская власть",
  "En cas de divorce, elle reste en principe exercée EN COMMUN par les deux parents. C'est l'exception qui doit être décidée par un juge.":
    "При разводе её по общему правилу ВМЕСТЕ несут оба родителя. Отступление от этого решает судья.",
  "Le PACS": "PACS",
  "Un contrat d'union civile, plus simple que le mariage, ouvert à tous les couples.":
    "Договор гражданского союза, проще брака, открытый всем парам.",
  "L'aide juridictionnelle": "Судебная помощь от казны",
  "Elle permet aux personnes à faibles revenus d'avoir un avocat pris en charge par l'État.":
    "Она позволяет людям с малым достатком получить адвоката, за которого платит государство.",
  "Le logement": "Жильё",
  "Un **locataire** peut décorer, meubler et vivre normalement chez lui sans rien demander. Il doit en revanche l'**accord écrit du propriétaire** pour tout **travaux de transformation** — abattre une cloison, changer la destination d'une pièce. Les **réparations importantes** et le remplacement d'un équipement fourni avec le logement, comme une machine à laver cassée, incombent au **propriétaire**.":
    "**Съёмщик** волен украшать, обставлять и просто жить у себя, ни у кого не спрашиваясь. А вот на всякую **переделку** — снести перегородку, изменить назначение комнаты — нужно **письменное согласие хозяина**. **Крупный ремонт** и замена того, что было отдано вместе с жильём, вроде сломавшейся стиральной машины, лежат на **хозяине**.",
  "L'autorité parentale est le devoir de protéger l'enfant : sa sécurité, sa santé, son éducation, sa moralité. Les **punitions physiques sont interdites** depuis la loi de 2019.":
    "Родительская власть — это долг оберегать ребёнка: его безопасность, здоровье, воспитание, нравственность. **Телесные наказания запрещены** с закона 2019 года.",
  "Mairie · état civil · PACS · aide juridictionnelle · juge aux affaires familiales.":
    "Мэрия · état civil · PACS · судебная помощь от казны · судья по семейным делам.",
  "5 jours pour déclarer une naissance · mariage pour tous depuis 2013 · interdiction des violences éducatives depuis 2019.":
    "5 дней, чтобы заявить о рождении · брак для всех с 2013 года · запрет насилия в воспитании с 2019 года.",
  "État civil · mariage civil · autorité parentale · locataire · propriétaire.":
    "État civil · гражданский брак · родительская власть · съёмщик · хозяин жилья.",
  "En une phrase : la mairie enregistre la vie de famille, et le juge n'intervient que lorsque les adultes ne s'accordent plus.":
    "Одной строкой: мэрия записывает семейную жизнь, а судья вмешивается лишь тогда, когда взрослые больше не могут договориться.",
  "Où faut-il déclarer la naissance d'un enfant ?": "Где надо заявить о рождении ребёнка?",
  "À la préfecture": "В préfecture",
  "À la mairie": "В мэрии",
  "Au commissariat": "В полицейском участке",
  "À la caisse d'allocations familiales": "В кассе семейных пособий",
  "À la mairie du lieu de naissance, dans les cinq jours. C'est elle qui tient l'état civil.":
    "В мэрии того места, где ребёнок родился, в течение пяти дней. Именно она ведёт état civil.",
  "En cas de divorce, qui exerce l'autorité parentale ?":
    "Кто несёт родительскую власть при разводе?",
  "La mère seule": "Одна мать",
  "Le père seul": "Один отец",
  "Les deux parents, en commun": "Оба родителя, вместе",
  "Le juge, à la place des parents": "Судья, вместо родителей",
  "Le divorce ne change rien à l'autorité parentale : elle reste conjointe, sauf décision contraire d'un juge.":
    "Развод ничего не меняет в родительской власти: она остаётся общей, если только судья не решит иначе.",
  "Est-ce possible de punir physiquement ses enfants ?":
    "Можно ли наказывать своих детей телесно?",
  "Oui, si la punition reste légère": "Да, если наказание лёгкое",
  "Non : les violences éducatives sont interdites": "Нет: насилие в воспитании запрещено",
  "Oui, jusqu'à l'âge de 10 ans": "Да, пока ребёнку нет 10 лет",
  "Oui, avec l'accord de l'autre parent": "Да, с согласия другого родителя",
  "La loi de 2019 interdit toute violence physique ou psychologique dans l'éducation. L'autorité parentale s'exerce sans violence.":
    "Закон 2019 года запрещает всякое насилие в воспитании, телесное и душевное. Родительскую власть несут без насилия.",
  "La santé et l'Assurance maladie": "Здоровье и Assurance maladie",
  "Pourquoi cette leçon : quatre mots reviennent — carte Vitale, mutuelle, tiers payant, Assurance maladie — et les questions demandent lequel fait quoi.":
    "Зачем эта лекция: возвращаются четыре слова — carte Vitale, mutuelle, tiers payant, Assurance maladie, — и вопросы бывают о том, что из них что делает.",
  "L'Assurance maladie": "Assurance maladie",
  "Le remboursement des frais de santé est demandé à l'**Assurance maladie**, branche de la Sécurité sociale, à travers la **CPAM** (caisse primaire d'assurance maladie). L'**inscription est obligatoire** : ce n'est pas un contrat qu'on choisit, c'est une affiliation.":
    "Возврат денег за лечение просят у **Assurance maladie**, ветви Sécurité sociale, через **CPAM** (местную кассу медицинского страхования). **Запись обязательна**: это не договор, который выбирают, а приписка.",
  "La carte Vitale": "Carte Vitale",
  "Elle atteste des droits à l'Assurance maladie et transmet la feuille de soins électronique. Elle ne sert pas à payer.":
    "Она удостоверяет права в Assurance maladie и передаёт электронный лист лечения. Платить ею нельзя.",
  "La mutuelle": "Mutuelle",
  "Une complémentaire santé, facultative, qui rembourse ce que l'Assurance maladie ne couvre pas.":
    "Необязательное дополнительное страхование здоровья, возвращающее то, чего не покрывает Assurance maladie.",
  "Le tiers payant": "Tiers payant",
  "Le dispositif qui évite d'avancer les frais : le professionnel de santé se fait payer directement par l'Assurance maladie.":
    "Порядок, при котором не надо платить вперёд: врачу платит напрямую Assurance maladie.",
  "Le médecin traitant": "Лечащий врач",
  "Le médecin déclaré comme référent. Passer par lui donne droit au meilleur taux de remboursement.":
    "Врач, заявленный как основной. Идя через него, получаешь наибольший возврат денег.",
  "Les droits sur son corps": "Права на своё тело",
  "La **contraception est libre**, remboursée pour les mineures et les jeunes femmes, et confidentielle. L'**interruption volontaire de grossesse (IVG)** est **légale** en France depuis la loi Veil de 1975 ; depuis 2024, la liberté d'y recourir est garantie par la **Constitution**.":
    "**Предохранение от беременности свободно**, для несовершеннолетних и молодых женщин оплачивается казной, и об этом никто не узнает. **Прерывание беременности по своей воле (IVG)** во Франции **законно** с закона Вейль 1975 года; с 2024 года свобода к нему прибегнуть обеспечена **Конституцией**.",
  "Assurance maladie · CPAM · carte Vitale · mutuelle · loi Veil.":
    "Assurance maladie · CPAM · carte Vitale · mutuelle · закон Вейль.",
  "1945 Sécurité sociale · 1975 loi Veil · 2024 IVG inscrite dans la Constitution.":
    "1945 — Sécurité sociale · 1975 — закон Вейль · 2024 — IVG вписано в Конституцию.",
  "Affiliation · remboursement · complémentaire santé · tiers payant · confidentialité.":
    "Приписка · возврат денег · дополнительное страхование здоровья · tiers payant · тайна обращения.",
  "En une phrase : la carte prouve, l'Assurance rembourse, la mutuelle complète et le tiers payant évite d'avancer.":
    "Одной строкой: карточка удостоверяет, Assurance возвращает, mutuelle дополняет, а tiers payant избавляет от платы вперёд.",
  "Qu'est-ce que le tiers payant ?": "Что такое tiers payant?",
  "Une aide financière versée chaque mois": "Денежное пособие, выдаваемое каждый месяц",
  "Le dispositif qui évite d'avancer les frais de santé":
    "Порядок, при котором не надо платить за лечение вперёд",
  "Une assurance privée obligatoire": "Обязательное частное страхование",
  "Un impôt sur les soins médicaux": "Налог на врачебную помощь",
  "Avec le tiers payant, le professionnel de santé est payé directement par l'Assurance maladie : le patient n'avance rien.":
    "При tiers payant врачу платит напрямую Assurance maladie: больной не платит вперёд ничего.",
  "À quoi sert la carte Vitale ?": "Для чего нужна carte Vitale?",
  "À payer les consultations": "Чтобы платить за приёмы у врача",
  "À attester des droits à l'Assurance maladie et transmettre les soins":
    "Чтобы удостоверять права в Assurance maladie и передавать сведения о лечении",
  "À prouver son identité": "Чтобы удостоверять личность",
  "À souscrire une mutuelle": "Чтобы оформить mutuelle",
  "Elle prouve les droits et transmet la feuille de soins par voie électronique. Ce n'est ni un moyen de paiement ni une pièce d'identité.":
    "Она удостоверяет права и передаёт лист лечения по электронной связи. Это ни средство платежа, ни удостоверение личности.",
  "Le travail et les droits des salariés": "Работа и права наёмных работников",
  "Pourquoi cette leçon : les questions sur le travail portent presque toutes sur une protection — contre le travail non déclaré, contre le licenciement abusif, contre la discrimination.":
    "Зачем эта лекция: вопросы о работе почти все о защите — от незаявленного труда, от несправедливого увольнения, от дискриминации.",
  "Le salaire et le temps de travail": "Жалованье и рабочее время",
  "Le **SMIC** est le **salaire minimum** légal en France : aucun employeur ne peut payer un salarié en dessous. La **durée légale du travail** est de **35 heures par semaine** ; au-delà, ce sont des heures supplémentaires, majorées.":
    "**SMIC** — это узаконенное **наименьшее жалованье** во Франции: ниже него платить работнику не вправе никакой работодатель. **Положенная законом продолжительность работы** — **35 часов в неделю**; сверх того идут сверхурочные, по повышенной плате.",
  "**Travailler sans être déclaré est illégal** — pour l'employeur comme pour le salarié. C'est le travail dissimulé : pas de cotisations, donc pas de retraite, pas d'assurance chômage, pas de couverture en cas d'accident.":
    "**Работать незаявленным противозаконно** — и для работодателя, и для работника. Это скрытый труд: нет взносов, а значит, нет ни пенсии, ни страхования на случай безработицы, ни покрытия при увечье.",
  "Les textes qui font la règle": "Тексты, из которых берётся правило",
  "Les règles du travail viennent du **Code du travail**, des **conventions collectives** de la branche et du **contrat de travail**. En cas de litige entre un salarié et son employeur, c'est le **conseil de prud'hommes** qui tranche.":
    "Правила труда идут из **Кодекса труда**, из **отраслевых договоров между работниками и хозяевами** и из **трудового договора**. Спор между работником и работодателем решает **суд по трудовым спорам**.",
  "Ce que personne ne peut vous refuser": "В чём отказать никто не вправе",
  "Tout salarié, quels que soient sa nationalité, son poste ou son ancienneté, peut adhérer au syndicat de son choix.":
    "Всякий работник, каково бы ни было его гражданство, должность или выслуга, может вступить в тот союз, который выберет.",
  "Créer une entreprise": "Основать предприятие",
  "Une femme le peut exactement comme un homme. Une personne étrangère en situation régulière le peut aussi.":
    "Женщина может это ровно так же, как мужчина. Может и иностранец, живущий в стране на законном положении.",
  "Le congé parental": "Родительский отпуск",
  "Le père comme la mère peuvent le demander, à la naissance ou à l'adoption d'un enfant.":
    "Просить о нём могут и отец, и мать, при рождении ребёнка или при усыновлении.",
  "Le congé paternité": "Отцовский отпуск",
  "25 jours depuis le 1er juillet 2021, auxquels s'ajoutent les 3 jours de naissance — 28 jours en tout.":
    "25 дней с 1 июля 2021 года, к которым прибавляются 3 дня по случаю рождения — всего 28 дней.",
  "La grossesse au travail": "Беременность на работе",
  "**Licencier une femme en raison de sa grossesse ou de son congé de maternité est illégal.** La protection est renforcée pendant le congé et dans les semaines qui suivent le retour.":
    "**Увольнять женщину из-за беременности или отпуска по родам противозаконно.** Защита усилена на время отпуска и на первые недели после выхода на работу.",
  "Chercher un emploi": "Искать работу",
  "La première démarche est de **s'inscrire à France Travail** — l'ancien Pôle emploi. L'inscription ouvre l'accompagnement, les offres et, sous conditions, l'allocation chômage.":
    "Первым делом надо **записаться в France Travail** — прежний Pôle emploi. Запись открывает сопровождение, предложения работы и, при известных условиях, пособие по безработице.",
  "SMIC · Code du travail · convention collective · conseil de prud'hommes · France Travail · inspection du travail.":
    "SMIC · Кодекс труда · договор между работниками и хозяевами · суд по трудовым спорам · France Travail · надзор за трудом.",
  "35 heures par semaine · congé paternité 25 jours depuis le 1er juillet 2021 (+3 jours de naissance).":
    "35 часов в неделю · отцовский отпуск 25 дней с 1 июля 2021 года (+3 дня по случаю рождения).",
  "Travail dissimulé · heures supplémentaires · syndicat · congé parental · licenciement.":
    "Скрытый труд · сверхурочные часы · союз работников · родительский отпуск · увольнение.",
  "En une phrase : être déclaré est ce qui transforme un travail en droits.":
    "Одной строкой: заявленность — это то, что превращает работу в права.",
  "Qu'est-ce que le SMIC ?": "Что такое SMIC?",
  "Le salaire moyen des Français": "Среднее жалованье французов",
  "Le salaire minimum légal": "Узаконенное наименьшее жалованье",
  "Une aide versée aux chômeurs": "Пособие, выдаваемое безработным",
  "Un impôt prélevé sur les salaires": "Налог, взимаемый с жалованья",
  "Le salaire minimum interprofessionnel de croissance : le plancher légal en dessous duquel aucun salarié ne peut être payé.":
    "Наименьшее растущее жалованье, единое для всех ремёсел: узаконенный пол, ниже которого работнику платить нельзя.",
  "Quelles sont les affaires traitées par le conseil de prud'hommes ?":
    "Какие дела разбирает суд по трудовым спорам?",
  "Les crimes les plus graves": "Самые тяжкие преступления",
  "Les litiges entre un salarié et son employeur": "Споры между работником и работодателем",
  "Les divorces": "Разводы",
  "Les infractions au code de la route": "Нарушения правил дорожного движения",
  "Le conseil de prud'hommes juge les conflits individuels du travail : licenciement, salaires, contrat, harcèlement.":
    "Суд по трудовым спорам судит отдельные трудовые ссоры: увольнение, жалованье, договор, преследование на работе.",
  "Travailler sans être déclaré est :": "Работать незаявленным:",
  "légal si l'employeur est d'accord": "законно, если работодатель согласен",
  "illégal, pour l'employeur comme pour le salarié":
    "противозаконно и для работодателя, и для работника",
  "autorisé pour les emplois de courte durée": "разрешено на короткой работе",
  "autorisé dans le secteur agricole": "разрешено в сельском хозяйстве",
  "C'est le travail dissimulé, un délit. Le salarié perd toute couverture : retraite, chômage, accident du travail.":
    "Это скрытый труд, проступок. Работник теряет всякое покрытие: пенсию, пособие по безработице, помощь при увечье на работе.",
  "L'école et l'instruction": "Школа и обучение",
  "Pourquoi cette leçon : deux âges, un nom d'établissement et une règle d'absence. C'est tout ce que l'examen demande, et il le demande souvent.":
    "Зачем эта лекция: два возраста, название заведения и правило об отсутствии. Это всё, о чём спрашивает экзамен, и спрашивает часто.",
  "L'instruction obligatoire": "Обязательное обучение",
  "L'instruction est obligatoire **de 3 à 16 ans**, depuis la rentrée 2019. Ce n'est pas l'école qui est obligatoire, c'est l'**instruction** : elle peut se faire dans un établissement public, privé ou, sous conditions strictes, dans la famille. De 16 à 18 ans s'ajoute une obligation de **formation**.":
    "Обучение обязательно **с 3 до 16 лет**, с учебного года 2019-го. Обязательна не школа, а **обучение**: оно может идти в государственном заведении, в частном или, при строгих условиях, дома. С 16 до 18 лет прибавляется обязанность **учиться ремеслу**.",
  "Des parents qui ne respectent pas l'obligation d'instruction risquent une amende et, dans les cas les plus graves, une peine d'emprisonnement. Ce n'est pas une simple formalité administrative.":
    "Родителям, не исполняющим обязанность учить ребёнка, грозит штраф, а в самых тяжёлых случаях и тюрьма. Это не пустая казённая условность.",
  "Le parcours": "Ступени учения",
  "L'école maternelle": "Детский сад",
  "De 3 à 6 ans. Gérée par la commune.": "С 3 до 6 лет. Ведает им коммуна.",
  "L'école élémentaire": "Начальная школа",
  "De 6 à 11 ans. Gérée par la commune également.": "С 6 до 11 лет. Ею тоже ведает коммуна.",
  "Le collège": "Средняя школа",
  "Après l'école élémentaire, de 11 à 15 ans. Géré par le département.":
    "После начальной школы, с 11 до 15 лет. Ведает ею департамент.",
  "Le lycée": "Старшая школа",
  "Après le collège. Géré par la région. Il mène au baccalauréat.":
    "После средней школы. Ведает ею область. Она ведёт к baccalauréat.",
  "S'inscrire et participer": "Записаться и участвовать",
  "On inscrit son enfant à l'école publique **auprès de la mairie**, qui l'affecte ensuite à une école. L'école publique est **gratuite** depuis les lois de Jules Ferry, en **1881**, et laïque depuis 1882. Les parents d'élèves peuvent **se faire élire au conseil d'école** ou au conseil d'administration et rencontrer les enseignants.":
    "Ребёнка записывают в государственную школу **в мэрии**, а она затем определяет его в ту или иную школу. Государственная школа **бесплатна** со времени законов Жюля Ферри, с **1881 года**, и светская с 1882-го. Родители учеников могут **избраться в школьный совет** или в правление и встречаться с учителями.",
  "Les absences": "Отсутствие в школе",
  "Les motifs d'absence acceptés sont limités : **maladie de l'enfant**, maladie contagieuse dans la famille, **réunion solennelle de famille**, empêchement de transport, absence des personnes responsables. Les convictions personnelles n'en font pas partie.":
    "Причин отсутствия принимают немного: **болезнь ребёнка**, заразная болезнь в семье, **торжественное семейное собрание**, помеха в дороге, отлучка тех, кто за ребёнка отвечает. Личные убеждения в их число не входят.",
  "Accueillir tous les enfants": "Принять всякого ребёнка",
  "Les enfants qui **ne parlent pas français** bénéficient d'un dispositif d'accueil et de cours de français adapté, tout en suivant les autres enseignements. Les enfants **en situation de handicap** ont **droit à être scolarisés** en milieu ordinaire, avec les aménagements et l'accompagnement nécessaires.":
    "Дети, которые **не говорят по-французски**, получают особый приём и уроки французского по своим силам, продолжая при этом учиться всему остальному. Дети **с увечьем** имеют **право учиться** в обычной среде, с нужными приспособлениями и сопровождением.",
  "Jules Ferry · collège · lycée · conseil d'école · mairie.":
    "Жюль Ферри · средняя школа · старшая школа · школьный совет · мэрия.",
  "3 à 16 ans : instruction obligatoire · 16 à 18 ans : obligation de formation · 1881 gratuité · 1882 laïcité de l'école.":
    "С 3 до 16 лет — обязательное обучение · с 16 до 18 лет — обязанность учиться ремеслу · 1881 — бесплатность · 1882 — светскость школы.",
  "Instruction · scolarisation · inclusion · absence justifiée · baccalauréat.":
    "Обучение · учение в школе · принятие всякого ребёнка · оправданное отсутствие · baccalauréat.",
  "En une phrase : l'école est gratuite, laïque et obligatoire depuis Jules Ferry, et depuis 2019 elle commence à trois ans.":
    "Одной строкой: школа бесплатна, светская и обязательна со времён Жюля Ферри, а с 2019 года начинается в три года.",
  "À quel âge commence l'instruction obligatoire des enfants ?":
    "С какого возраста начинается обязательное обучение детей?",
  "À 2 ans": "С 2 лет",
  "À 3 ans": "С 3 лет",
  "À 6 ans": "С 6 лет",
  "À 7 ans": "С 7 лет",
  "Depuis la rentrée 2019, l'instruction est obligatoire dès 3 ans. Auparavant, elle commençait à 6 ans.":
    "С учебного года 2019-го обучение обязательно с 3 лет. Прежде оно начиналось в 6.",
  "Comment s'appellent les établissements que les élèves intègrent après l'école élémentaire ?":
    "Как называются заведения, в которые ученики поступают после начальной школы?",
  "Les lycées": "Старшие школы",
  "Les collèges": "Средние школы",
  "Les universités": "Университеты",
  "Les écoles maternelles": "Детские сады",
  "Le collège, de la sixième à la troisième. Le lycée vient après le collège.":
    "Средняя школа, с шестого класса по третий. Старшая школа идёт после средней.",
  "Services publics et urgences": "Общественные службы и неотложная помощь",
  "Pourquoi cette leçon en dernier : ce sont les numéros et les guichets. On les apprend en une minute, et ils valent des points sûrs.":
    "Почему эта лекция последняя: тут номера и окошки. Выучиваются они за минуту, а очки дают верные.",
  "Les numéros d'urgence": "Номера неотложной помощи",
  "17 — Police": "17 — полиция",
  "Police secours ou gendarmerie. Agression, vol en cours, danger immédiat.":
    "Дежурная полиция или жандармерия. Нападение, кража на ходу, немедленная опасность.",
  "15 — SAMU": "15 — SAMU, скорая помощь",
  "Urgence médicale : malaise, accident, détresse vitale.":
    "Неотложный врачебный случай: дурнота, несчастье, угроза жизни.",
  "18 — Pompiers": "18 — пожарные",
  "Incendie, accident, secours à personne.": "Пожар, несчастный случай, помощь человеку.",
  "112 — Numéro européen": "112 — европейский номер",
  "Fonctionne partout dans l'Union européenne, depuis n'importe quel téléphone.":
    "Работает по всему Европейскому союзу, с любого телефона.",
  "À retenir aussi : le **114** est le numéro d'urgence par SMS pour les personnes sourdes ou malentendantes, et le **119** celui de l'enfance en danger.":
    "Запомнить ещё: **114** — неотложный номер для сообщений от глухих и слабослышащих, а **119** — номер для детей в опасности.",
  "Où s'adresser": "Куда обращаться",
  "La mairie": "Мэрия",
  "État civil, carte d'identité, passeport, listes électorales, inscription à l'école.":
    "État civil, удостоверение личности (carte d'identité), паспорт, избирательные списки, запись в школу.",
  "La préfecture": "Préfecture",
  "Titres de séjour, permis de conduire, carte grise. Le préfet y représente l'État.":
    "Titre de séjour, водительские права, carte grise — свидетельство на машину. Префект представляет там государство.",
  "La CPAM": "CPAM",
  "Assurance maladie : carte Vitale, remboursements, complémentaire santé solidaire.":
    "Assurance maladie: carte Vitale, возврат денег, дополнительное страхование здоровья для нуждающихся.",
  "France Travail": "France Travail",
  "Recherche d'emploi, accompagnement, allocation chômage.":
    "Поиск работы, сопровождение, пособие по безработице.",
  "Ce que le service public vous doit": "Что общественная служба тебе должна",
  "Un **usager** peut demander une information, obtenir un document, déposer une réclamation et exiger d'être traité comme tout le monde. Si une administration refuse un service pour un motif interdit — origine, religion, sexe, handicap — c'est une **discrimination**, et le **Défenseur des droits** peut être saisi gratuitement.":
    "**Тот, кто пришёл в службу**, может спросить сведения, получить бумагу, подать жалобу и потребовать, чтобы с ним обошлись как со всеми. Если ведомство отказывает в услуге по запрещённой причине — происхождение, вера, пол, увечье, — это **дискриминация**, и к **Защитнику прав** можно обратиться бесплатно.",
  "SAMU · police secours · pompiers · CPAM · France Travail · Défenseur des droits.":
    "SAMU · дежурная полиция · пожарные · CPAM · France Travail · Защитник прав.",
  "17 police · 15 SAMU · 18 pompiers · 112 Europe · 114 SMS urgence · 119 enfance en danger.":
    "17 — полиция · 15 — SAMU · 18 — пожарные · 112 — Европа · 114 — неотложное сообщение · 119 — дети в опасности.",
  "Usager · réclamation · discrimination · préfecture · titre de séjour.":
    "Тот, кто пришёл в службу · жалоба · дискриминация · préfecture · titre de séjour.",
  "En une phrase : trois numéros pour l'urgence, quatre guichets pour le reste — et un recours gratuit quand un guichet vous traite mal.":
    "Одной строкой: три номера на неотложный случай, четыре окошка на всё остальное — и бесплатная жалоба, когда в окошке обошлись дурно.",
  "Quel numéro d'urgence permet d'appeler le SAMU ?": "По какому номеру вызывают SAMU?",
  "15": "15",
  "17": "17",
  "18": "18",
  "112": "112",
  "Le 15 pour le SAMU, le 17 pour la police, le 18 pour les pompiers. Le 112 fonctionne partout en Europe.":
    "15 — SAMU, 17 — полиция, 18 — пожарные. 112 работает по всей Европе.",
  "Que peut faire un usager du service public dans une mairie ?":
    "Что можно сделать в мэрии тому, кто пришёл в общественную службу?",
  "Demander un acte d'état civil et s'inscrire sur les listes électorales":
    "Попросить свидетельство из état civil и записаться в избирательные списки",
  "Obtenir un titre de séjour": "Получить titre de séjour",
  "Faire juger un litige avec son employeur": "Отсудить спор со своим работодателем",
  "Demander le remboursement de ses frais de santé": "Попросить возврат денег за лечение",
  "La mairie tient l'état civil et les listes électorales. Le titre de séjour relève de la préfecture, les frais de santé de la CPAM, les litiges du travail des prud'hommes.":
    "Мэрия ведёт état civil и избирательные списки. Titre de séjour — дело préfecture, деньги за лечение — дело CPAM, трудовые споры — дело суда по трудовым спорам.",
  "Quel est le rôle du Défenseur des droits ?": "Какова роль Защитника прав?",
  "Juger les crimes": "Судить преступления",
  "Défendre les personnes dont les droits ne sont pas respectés, gratuitement":
    "Бесплатно защищать людей, чьи права не соблюдают",
  "Nommer les préfets": "Назначать префектов",
  "Voter les lois": "Принимать законы",
  "C'est une autorité indépendante que toute personne peut saisir gratuitement, notamment en cas de discrimination ou de litige avec une administration.":
    "Это независимая власть, к которой всякий может обратиться бесплатно, особенно при дискриминации или в споре с ведомством.",
};
