/**
 * French for the Zhizn v Rossii course cards, headings and questions.
 *
 * The seventh and last country course a French reader can open. It is also
 * the one where a missing table actually stopped a reader rather than merely
 * slowing them down: in front of a Latin alphabet a French reader can guess
 * at a Polish or an Italian sentence, in front of Cyrillic they cannot.
 *
 * Keyed on the RUSSIAN source text exactly as it appears in
 * zhiznVRossiiCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * in the course is one nobody can ever see, and nothing reports it at
 * runtime: the card renders, the tap works, and the reader is told there is
 * no translation for a card that was in fact translated. So every key here
 * was extracted from the built module and paired back, never retyped: one
 * wrong character — an и for a й, a ё written flat — and the lookup misses
 * in silence.
 *
 * Like the German table and unlike the older ones, this covers the QUIZZES as
 * well. A lesson that ends in three untranslated questions is not a lesson
 * somebody can finish.
 *
 * WHAT STAYS RUSSIAN, and it follows ZHIZN_V_ROSSII_DE so that a reader who
 * switches between the two tables does not meet one word glossed two ways.
 * Institutions take their French conventional form where one exists — the
 * Государственная Дума is the Douma d'État, the Совет Федерации the Conseil
 * de la Fédération, the Конституционный Суд the Cour constitutionnelle. Where
 * a word is the answer the exam wants and has no French equivalent — EGE,
 * OGE, MROT, SNILS, INN — the French gives the meaning and keeps the
 * abbreviation beside it. And the everyday words the course teaches keep
 * their Russian and gain the meaning next to them: propiska against
 * enregistrement, datcha, banya, venik, marchroutka, elektritchka, bortsch,
 * chtchi, oukha, smetana, Ded Moroz, Snegourotchka.
 *
 * Transliteration follows French usage, not German or English: Tchaïkovski
 * and not Tschaikowski, Iouri Gagarine and not Juri Gagarin, Iekaterinbourg
 * and not Jekaterinburg. A reader who looks a name up will be looking it up
 * in French.
 */
export const ZHIZN_V_ROSSII_FR: Record<string, string> = {
  "История, устройство и повседневная жизнь: как устроена страна.":
    "Histoire, institutions et vie quotidienne : comment ce pays fonctionne.",
  "Государственные символы": "Les symboles de l'État",
  "Символы и Конституция": "Symboles et Constitution",
  "Почему начинаем отсюда: символы встречаются каждый день — на здании администрации, на паспорте, на форме сборной. Через них проще всего войти во всё остальное.":
    "Pourquoi commencer par là : on rencontre les symboles tous les jours — sur le bâtiment de l'administration, sur le passeport, sur le maillot de la sélection. C'est par eux qu'on entre le plus facilement dans tout le reste.",
  "Флаг": "Le drapeau",
  "Государственный флаг — прямоугольное полотнище из трёх равных горизонтальных полос: **белой сверху**, **синей посередине** и **красной снизу**. Порядок закреплён **федеральным конституционным законом 2000 года**, а сам триколор появился при **Петре I** — сначала как флаг торговых судов.":
    "Le drapeau de l'État est un rectangle de trois bandes horizontales égales : **blanche en haut**, **bleue au milieu** et **rouge en bas**. L'ordre est fixé par une **loi constitutionnelle fédérale de 2000**, et le tricolore lui-même est apparu sous **Pierre Ier** — d'abord comme pavillon des navires de commerce.",
  "Значения цветам официально не присвоены. Толкования, которые слышишь чаще всего — белый как чистота, синий как верность, красный как отвага — появились позже и в законе не записаны. **22 августа** отмечается День Государственного флага.":
    "Aucun sens n'est officiellement attribué aux couleurs. Les interprétations qu'on entend le plus souvent — le blanc pour la pureté, le bleu pour la fidélité, le rouge pour le courage — sont venues plus tard et ne figurent pas dans la loi. Le **22 août** se célèbre la Journée du drapeau national.",
  "Герб": "Les armoiries",
  "Герб — **двуглавый орёл**, золотой, на красном щите. Над головами — **три короны**, в лапах **скипетр и держава**, на груди — всадник, поражающий копьём дракона. Двуглавый орёл пришёл в русскую геральдику в конце **XV века**, при **Иване III**, а нынешний вид герб получил в **1993 году**.":
    "Les armoiries sont un **aigle bicéphale**, d'or, sur un écu rouge. Au-dessus des têtes, **trois couronnes** ; dans les serres, le **sceptre et le globe** ; sur la poitrine, un cavalier perçant un dragon de sa lance. L'aigle bicéphale est entré dans l'héraldique russe à la fin du **XVe siècle**, sous **Ivan III**, et les armoiries ont pris leur forme actuelle en **1993**.",
  "Три короны": "Les trois couronnes",
  "Сегодня их толкуют как символ суверенитета Российской Федерации и её частей.":
    "On les interprète aujourd'hui comme le symbole de la souveraineté de la Fédération de Russie et de ses parties.",
  "Скипетр и держава": "Le sceptre et le globe",
  "Знаки государственной власти и единства страны.":
    "Les insignes du pouvoir de l'État et de l'unité du pays.",
  "Всадник": "Le cavalier",
  "На груди орла — древний московский герб. Его связывают с Георгием Победоносцем.":
    "Sur la poitrine de l'aigle, les armes anciennes de Moscou. On les rattache à saint Georges.",
  "Красный щит": "L'écu rouge",
  "Цвет, на котором орёл изображался ещё в допетровской геральдике.":
    "La couleur sur laquelle l'aigle figurait déjà dans l'héraldique d'avant Pierre le Grand.",
  "В каком порядке идут полосы государственного флага сверху вниз?":
    "Dans quel ordre vont les bandes du drapeau de l'État, de haut en bas ?",
  "Красная, синяя, белая": "Rouge, bleue, blanche",
  "Белая, синяя, красная": "Blanche, bleue, rouge",
  "Синяя, белая, красная": "Bleue, blanche, rouge",
  "Белая, красная, синяя": "Blanche, rouge, bleue",
  "Белая сверху, синяя посередине, красная снизу. Порядок закреплён федеральным конституционным законом, и флаг с переставленными полосами — просто неправильный.":
    "Blanche en haut, bleue au milieu, rouge en bas. L'ordre est fixé par une loi constitutionnelle fédérale, et un drapeau aux bandes interverties est simplement faux.",
  "Гимн": "L'hymne",
  "Музыку написал **Александр Александров**: та же мелодия звучала как гимн Советского Союза с **1944 года**. Слова — **Сергея Михалкова**, и он писал их трижды: в 1943, в 1977 и в **2000 году**, когда мелодия вернулась уже к новому государству. Действующий текст начинается словами «Россия — священная наша держава».":
    "La musique est d'**Alexandre Alexandrov** : la même mélodie servait d'hymne à l'Union soviétique depuis **1944**. Les paroles sont de **Sergueï Mikhalkov**, et il les a écrites trois fois : en 1943, en 1977 et en **2000**, quand la mélodie est revenue pour un État nouveau. Le texte en vigueur s'ouvre sur la Russie comme puissance sacrée.",
  "Между 1990 и 2000 годом гимном была «Патриотическая песня» Глинки — без слов. Текста к ней так и не утвердили, и это одна из причин, по которым вернулись к прежней мелодии.":
    "Entre 1990 et 2000, l'hymne fut la « Chanson patriotique » de Glinka — sans paroles. On n'a jamais adopté de texte pour elle, et c'est l'une des raisons du retour à l'ancienne mélodie.",
  "Кто написал музыку государственного гимна?": "Qui a écrit la musique de l'hymne national ?",
  "Михаил Глинка": "Mikhaïl Glinka",
  "Александр Александров": "Alexandre Alexandrov",
  "Сергей Михалков": "Sergueï Mikhalkov",
  "Пётр Чайковский": "Piotr Tchaïkovski",
  "Музыка Александрова, слова Михалкова. Мелодия Глинки была гимном с 1990 по 2000 год, но так и осталась без слов.":
    "La musique est d'Alexandrov, les paroles de Mikhalkov. La mélodie de Glinka fut l'hymne de 1990 à 2000, mais elle est restée sans paroles.",
  "Столица, язык и главная дата": "La capitale, la langue et la grande date",
  "Столица — **Москва**; это записано в **статье 70** Конституции. Государственный язык на всей территории — **русский** (статья 68), при этом республики вправе устанавливать свои государственные языки.":
    "La capitale est **Moscou** ; c'est écrit à l'**article 70** de la Constitution. La langue officielle sur tout le territoire est le **russe** (article 68), les républiques ayant le droit d'établir leurs propres langues officielles.",
  "**12 июня** — **День России**. В этот день в **1990 году** была принята Декларация о государственном суверенитете РСФСР. Праздник несколько раз менял название: сначала он назывался Днём принятия декларации, потом Днём независимости, и лишь с 2002 года — Днём России.":
    "Le **12 juin** est la **Journée de la Russie**. Ce jour-là, en **1990**, fut adoptée la Déclaration de souveraineté de la RSFSR. La fête a changé plusieurs fois de nom : d'abord Journée de l'adoption de la déclaration, puis Journée de l'indépendance, et seulement depuis 2002 Journée de la Russie.",
  "Что отмечают 12 июня?": "Que célèbre-t-on le 12 juin ?",
  "День Конституции": "La Journée de la Constitution",
  "День России": "La Journée de la Russie",
  "День народного единства": "La Journée de l'unité nationale",
  "День Государственного флага": "La Journée du drapeau national",
  "12 июня — День России, в память о Декларации о государственном суверенитете 1990 года. День флага — 22 августа, а День народного единства — 4 ноября.":
    "Le 12 juin est la Journée de la Russie, en mémoire de la Déclaration de souveraineté de 1990. La Journée du drapeau est le 22 août, et celle de l'unité nationale le 4 novembre.",
  "**День России** и **День народного единства** — разные праздники и разные месяцы: 12 июня и 4 ноября. Первый связан с 1990 годом, второй — с событиями 1612 года.":
    "La **Journée de la Russie** et la **Journée de l'unité nationale** sont deux fêtes différentes, dans deux mois différents : le 12 juin et le 4 novembre. La première tient à 1990, la seconde aux événements de 1612.",
  "Конституция 1993 года": "La Constitution de 1993",
  "Почему это важно: почти всё, о чём пойдёт речь дальше — президент, парламент, суды, субъекты федерации, языки — записано в одном документе 1993 года. Кто знает его в общих чертах, у того уже есть карта всего курса.":
    "Pourquoi cela compte : presque tout ce dont il sera question ensuite — le président, le parlement, les tribunaux, les sujets de la Fédération, les langues — est écrit dans un seul document de 1993. Qui le connaît dans ses grandes lignes a déjà la carte de tout le cours.",
  "Как она появилась": "Comment elle est née",
  "Конституция принята **всенародным голосованием 12 декабря 1993 года** и вступила в силу со дня официального опубликования — **25 декабря 1993 года**. Она пришла на смену Конституции РСФСР 1978 года, которую к тому времени правили десятки раз.":
    "La Constitution a été adoptée par **vote populaire le 12 décembre 1993** et est entrée en vigueur le jour de sa publication officielle, le **25 décembre 1993**. Elle a remplacé la Constitution de la RSFSR de 1978, que l'on avait alors amendée des dizaines de fois.",
  "**12 декабря** — День Конституции. С 2005 года это не выходной день, но дата осталась памятной.":
    "Le **12 décembre** est la Journée de la Constitution. Depuis 2005, ce n'est plus un jour chômé, mais la date est restée commémorative.",
  "Как она устроена": "Comment elle est faite",
  "Текст состоит из **преамбулы** и **двух разделов**. Первый раздел — это **девять глав** и **137 статей**; второй, короткий, содержит заключительные и переходные положения.":
    "Le texte comprend un **préambule** et **deux sections**. La première section, ce sont **neuf chapitres** et **137 articles** ; la seconde, courte, contient les dispositions finales et transitoires.",
  "Глава 1 · Основы конституционного строя":
    "Chapitre 1 · Les fondements du régime constitutionnel",
  "Статьи 1–16. Что такое Россия, где источник власти, разделение властей, светское государство.":
    "Articles 1 à 16. Ce qu'est la Russie, d'où vient le pouvoir, la séparation des pouvoirs, l'État laïque.",
  "Глава 2 · Права и свободы человека": "Chapitre 2 · Les droits et libertés de l'homme",
  "Статьи 17–64. Самая длинная глава: личные, политические, социальные права и обязанности.":
    "Articles 17 à 64. Le plus long chapitre : droits personnels, politiques, sociaux, et les devoirs.",
  "Глава 3 · Федеративное устройство": "Chapitre 3 · L'organisation fédérale",
  "Статьи 65–79. Перечень субъектов, разграничение полномочий, языки.":
    "Articles 65 à 79. La liste des sujets, la répartition des compétences, les langues.",
  "Главы 4–8": "Chapitres 4 à 8",
  "Президент, Федеральное Собрание, Правительство, судебная власть и прокуратура, местное самоуправление.":
    "Le président, l'Assemblée fédérale, le gouvernement, le pouvoir judiciaire et le parquet, l'autonomie locale.",
  "Когда была принята Конституция Российской Федерации?":
    "Quand la Constitution de la Fédération de Russie a-t-elle été adoptée ?",
  "12 июня 1990 года": "Le 12 juin 1990",
  "12 декабря 1993 года": "Le 12 décembre 1993",
  "25 декабря 1993 года": "Le 25 décembre 1993",
  "4 ноября 1993 года": "Le 4 novembre 1993",
  "Принята всенародным голосованием 12 декабря, вступила в силу 25 декабря — со дня опубликования. День Конституции отмечают по первой из этих дат.":
    "Adoptée par vote populaire le 12 décembre, entrée en vigueur le 25 décembre, jour de sa publication. La Journée de la Constitution se tient à la première de ces dates.",
  "Первые статьи": "Les premiers articles",
  "**Статья 1** определяет Россию как **демократическое федеративное правовое государство с республиканской формой правления**. Четыре характеристики в одном предложении, и каждая имеет продолжение в отдельной главе.":
    "L'**article 1** définit la Russie comme un **État démocratique, fédéral et de droit, de forme républicaine**. Quatre caractères dans une seule phrase, et chacun a sa suite dans un chapitre à part.",
  "**Статья 2** называет человека, его права и свободы **высшей ценностью**, а признание и защиту этих прав — обязанностью государства. **Статья 3** говорит, что носителем суверенитета и **единственным источником власти** является **многонациональный народ** Российской Федерации.":
    "L'**article 2** fait de l'homme, de ses droits et de ses libertés la **valeur suprême**, et de la reconnaissance et de la protection de ces droits un devoir de l'État. L'**article 3** dit que le porteur de la souveraineté et l'**unique source du pouvoir** est le **peuple multinational** de la Fédération de Russie.",
  "**Статья 10** закрепляет разделение властей на законодательную, исполнительную и судебную. **Статья 13** устанавливает идеологическое многообразие: никакая идеология не может быть государственной или обязательной. **Статья 14** объявляет Россию **светским государством**: религиозные объединения отделены от государства и равны перед законом.":
    "L'**article 10** consacre la séparation des pouvoirs en législatif, exécutif et judiciaire. L'**article 13** établit la diversité idéologique : aucune idéologie ne peut être celle de l'État ni obligatoire. L'**article 14** déclare la Russie **État laïque** : les associations religieuses sont séparées de l'État et égales devant la loi.",
  "Сколько статей содержит первый раздел Конституции?":
    "Combien d'articles compte la première section de la Constitution ?",
  "Шестьдесят четыре": "Soixante-quatre",
  "Сто тридцать семь": "Cent trente-sept",
  "Сто шестьдесят девять": "Cent soixante-neuf",
  "Двести": "Deux cents",
  "Сто тридцать семь статей в девяти главах. Статья 64 завершает главу о правах и свободах, но не первый раздел целиком.":
    "Cent trente-sept articles en neuf chapitres. L'article 64 clôt le chapitre des droits et libertés, mais pas la première section tout entière.",
  "Что нельзя изменить обычным путём": "Ce qu'on ne peut pas changer par la voie ordinaire",
  "Конституция разделяет **поправки** и **пересмотр**. Главы **3–8** изменяются поправками, которые принимаются как федеральный конституционный закон и должны быть одобрены не менее чем **двумя третями субъектов** Федерации.":
    "La Constitution distingue les **amendements** et la **révision**. Les chapitres **3 à 8** se modifient par amendements, adoptés comme une loi constitutionnelle fédérale et devant être approuvés par au moins **deux tiers des sujets** de la Fédération.",
  "А вот главы **1, 2 и 9** — основы строя, права и свободы, и сам порядок изменения — **не могут быть пересмотрены Федеральным Собранием**. Для их изменения статья 135 требует созвать **Конституционное Собрание**, которое либо подтвердит неизменность Конституции, либо разработает новую. Такого собрания никогда не созывали, и закона о нём до сих пор нет.":
    "Mais les chapitres **1, 2 et 9** — les fondements du régime, les droits et libertés, et la procédure de modification elle-même — **ne peuvent pas être révisés par l'Assemblée fédérale**. Pour les changer, l'article 135 exige de convoquer une **Assemblée constitutionnelle**, qui soit confirmera que la Constitution reste inchangée, soit en élaborera une nouvelle. Une telle assemblée n'a jamais été convoquée, et la loi qui la régirait n'existe toujours pas.",
  "Крупные изменения вносились в **2008** году — о сроках полномочий, в **2014** — об объединении высших судов, и в **2020** — большим пакетом поправок к главам с третьей по восьмую.":
    "De grandes modifications ont été apportées en **2008**, sur la durée des mandats, en **2014**, sur la fusion des juridictions suprêmes, et en **2020**, par un vaste ensemble d'amendements aux chapitres trois à huit.",
  "Какие главы Конституции не может пересмотреть Федеральное Собрание?":
    "Quels chapitres de la Constitution l'Assemblée fédérale ne peut-elle pas réviser ?",
  "Первая, вторая и девятая": "Le premier, le deuxième et le neuvième",
  "Только первая": "Seulement le premier",
  "С третьей по восьмую": "Du troisième au huitième",
  "Никакие: Конституция неизменна": "Aucun : la Constitution est immuable",
  "Главы 1, 2 и 9 — основы конституционного строя, права и свободы и сам порядок изменения. Для них нужно Конституционное Собрание, которое ни разу не созывалось.":
    "Les chapitres 1, 2 et 9 — les fondements du régime constitutionnel, les droits et libertés et la procédure de modification elle-même. Il y faut une Assemblée constitutionnelle, qui n'a jamais été convoquée.",
  "**Поправка** и **пересмотр** — не одно и то же. Поправками меняют главы с третьей по восьмую; пересмотр касается глав 1, 2 и 9 и требует совсем другой процедуры.":
    "**Amendement** et **révision** ne sont pas la même chose. Les amendements changent les chapitres trois à huit ; la révision touche aux chapitres 1, 2 et 9 et demande une tout autre procédure.",
  "Права и свободы человека": "Les droits et libertés de l'homme",
  "Почему это важно: вторая глава — самая длинная в Конституции, и она написана о человеке, а не о гражданине. Большинство её статей начинается со слов «каждый» или «никто», и это различие имеет смысл.":
    "Pourquoi cela compte : le deuxième chapitre est le plus long de la Constitution, et il est écrit sur l'homme, non sur le citoyen. La plupart de ses articles commencent par « chacun » ou « nul », et cette distinction a un sens.",
  "Каждый и гражданин": "Chacun et le citoyen",
  "**Статья 17** говорит, что основные права и свободы принадлежат каждому **от рождения** и неотчуждаемы. **Статья 19** закрепляет равенство перед законом и судом независимо от пола, расы, национальности, языка, происхождения, имущественного и должностного положения, места жительства, отношения к религии и убеждений.":
    "L'**article 17** dit que les droits et libertés fondamentaux appartiennent à chacun **dès la naissance** et sont inaliénables. L'**article 19** consacre l'égalité devant la loi et devant le juge, sans considération de sexe, de race, de nationalité, de langue, d'origine, de situation matérielle ou professionnelle, de lieu de résidence, de rapport à la religion ni de convictions.",
  "Читая главу, стоит обращать внимание на первое слово статьи. Там, где написано **«каждый»**, право принадлежит и иностранцу; там, где **«граждане Российской Федерации»**, — только гражданам. Так устроены, например, избирательные права и право на доступ к государственной службе.":
    "En lisant le chapitre, il vaut la peine de regarder le premier mot de l'article. Là où il est écrit **« chacun »**, le droit appartient aussi à l'étranger ; là où il est écrit **« les citoyens de la Fédération de Russie »**, aux seuls citoyens. C'est ainsi que sont faits, par exemple, les droits électoraux et le droit d'accéder à la fonction publique.",
  "Личные права": "Les droits personnels",
  "**Статья 20** закрепляет право на жизнь. Смертная казнь в тексте упомянута как исключительная мера, но фактически не применяется: с середины девяностых действует **мораторий**, подтверждённый решениями Конституционного Суда.":
    "L'**article 20** consacre le droit à la vie. La peine de mort est mentionnée dans le texte comme une mesure exceptionnelle, mais elle n'est en fait pas appliquée : un **moratoire** est en vigueur depuis le milieu des années quatre-vingt-dix, confirmé par des décisions de la Cour constitutionnelle.",
  "**Статья 22** гарантирует свободу и личную неприкосновенность: **до судебного решения** человек не может быть задержан на срок **более 48 часов**. **Статья 23** защищает частную жизнь и тайну переписки, **статья 25** объявляет **неприкосновенным жилище**.":
    "L'**article 22** garantit la liberté et l'inviolabilité de la personne : **avant une décision de justice**, nul ne peut être retenu plus de **48 heures**. L'**article 23** protège la vie privée et le secret de la correspondance, l'**article 25** déclare le **domicile inviolable**.",
  "На какой срок можно задержать человека до судебного решения?":
    "Combien de temps peut-on retenir une personne avant une décision de justice ?",
  "На 24 часа": "24 heures",
  "На 48 часов": "48 heures",
  "На 72 часа": "72 heures",
  "Срок не установлен": "Aucune durée n'est fixée",
  "Статья 22 устанавливает предел в 48 часов. По истечении этого срока человек должен быть либо освобождён, либо его задержание должен продлить суд.":
    "L'article 22 fixe la limite à 48 heures. Ce délai passé, la personne doit être libérée ou sa rétention prolongée par un juge.",
  "Свобода мысли, слова и веры": "Liberté de pensée, de parole et de croyance",
  "**Статья 28** гарантирует свободу совести и вероисповедания, включая право не исповедовать никакой религии. **Статья 29** закрепляет свободу мысли и слова, право свободно искать, получать и распространять информацию — и содержит короткую и прямую формулу: **цензура запрещается**.":
    "L'**article 28** garantit la liberté de conscience et de religion, y compris le droit de ne professer aucune religion. L'**article 29** consacre la liberté de pensée et de parole, le droit de chercher, de recevoir et de diffuser librement l'information — et contient une formule courte et directe : **la censure est interdite**.",
  "**Статья 26** даёт каждому право **определять и указывать свою национальность** — и добавляет, что никто не может быть принуждён к её указанию. Там же — право пользоваться родным языком и свободно выбирать язык общения и творчества. Для страны, где живут сотни народов, это не формальность.":
    "L'**article 26** donne à chacun le droit de **déterminer et d'indiquer sa nationalité** — et ajoute que nul ne peut être contraint de l'indiquer. Là aussi se trouvent le droit d'employer sa langue maternelle et de choisir librement la langue du commerce et de la création. Pour un pays où vivent des centaines de peuples, ce n'est pas une formalité.",
  "Что прямо запрещает статья 29 Конституции?":
    "Qu'interdit expressément l'article 29 de la Constitution ?",
  "Иностранные средства массовой информации": "Les médias étrangers",
  "Цензуру": "La censure",
  "Публичные собрания": "Les rassemblements publics",
  "Анонимные публикации": "Les publications anonymes",
  "Формулировка короткая: цензура запрещается. Та же статья закрепляет свободу мысли и слова и право искать, получать и распространять информацию.":
    "La formule est courte : la censure est interdite. Le même article consacre la liberté de pensée et de parole et le droit de chercher, de recevoir et de diffuser l'information.",
  "Социальные права": "Les droits sociaux",
  "Труд · статья 37": "Le travail · article 37",
  "Труд свободен, принудительный труд запрещён. Отсюда же право на отдых и на оплачиваемый отпуск.":
    "Le travail est libre, le travail forcé est interdit. De là viennent aussi le droit au repos et aux congés payés.",
  "Жилище · статья 40": "Le logement · article 40",
  "Никто не может быть произвольно лишён жилища; малоимущим оно предоставляется бесплатно или за доступную плату.":
    "Nul ne peut être arbitrairement privé de son logement ; aux plus démunis, il est fourni gratuitement ou à un prix abordable.",
  "Здоровье · статья 41": "La santé · article 41",
  "Медицинская помощь в государственных и муниципальных учреждениях оказывается гражданам бесплатно.":
    "Les soins dans les établissements de l'État et des communes sont donnés gratuitement aux citoyens.",
  "Образование · статья 43": "L'éducation · article 43",
  "Дошкольное, основное общее и среднее профессиональное — общедоступны и бесплатны.":
    "La maternelle, l'enseignement général de base et l'enseignement professionnel secondaire sont accessibles à tous et gratuits.",
  "Гарантии в суде": "Les garanties devant le juge",
  "**Статья 48** даёт право на квалифицированную юридическую помощь, в предусмотренных законом случаях — бесплатную. **Статья 49** закрепляет **презумпцию невиновности**: обвиняемый считается невиновным, пока вина не доказана вступившим в законную силу приговором суда, и **неустранимые сомнения толкуются в его пользу**.":
    "L'**article 48** donne droit à une assistance juridique qualifiée et, dans les cas prévus par la loi, gratuite. L'**article 49** consacre la **présomption d'innocence** : l'accusé est réputé innocent tant que sa culpabilité n'est pas établie par un jugement devenu définitif, et les **doutes qui ne peuvent être levés s'interprètent en sa faveur**.",
  "**Статья 51** содержит правило, которое знают даже те, кто никогда не открывал Конституцию: **никто не обязан свидетельствовать против себя самого, своего супруга и близких родственников**.":
    "L'**article 51** contient une règle que connaissent même ceux qui n'ont jamais ouvert la Constitution : **nul n'est tenu de témoigner contre lui-même, contre son conjoint ni contre ses proches parents**.",
  "Что закрепляет статья 49 Конституции?": "Que consacre l'article 49 de la Constitution ?",
  "Право на жилище": "Le droit au logement",
  "Презумпцию невиновности": "La présomption d'innocence",
  "Свободу передвижения": "La liberté de circulation",
  "Право на образование": "Le droit à l'éducation",
  "Обвиняемый считается невиновным, пока его вина не доказана приговором суда, и неустранимые сомнения толкуются в его пользу. Статья 51 добавляет право не свидетельствовать против себя и близких.":
    "L'accusé est réputé innocent tant que sa culpabilité n'est pas établie par un jugement, et les doutes qui ne peuvent être levés s'interprètent en sa faveur. L'article 51 ajoute le droit de ne pas témoigner contre soi ni contre ses proches.",
  "Права, записанные словом **«каждый»**, принадлежат и иностранным гражданам. Только там, где статья говорит **«граждане Российской Федерации»**, речь идёт исключительно о гражданах — прежде всего это избирательные права.":
    "Les droits écrits avec le mot **« chacun »** appartiennent aussi aux étrangers. Ce n'est que là où l'article dit **« les citoyens de la Fédération de Russie »** qu'il s'agit des seuls citoyens — au premier chef pour les droits électoraux.",
  "Обязанности и гражданство": "Devoirs et nationalité",
  "Почему это важно: Конституция не только раздаёт права. В той же второй главе записаны обязанности, а гражданство — та дверь, через которую человек входит в полный объём и тех и других.":
    "Pourquoi cela compte : la Constitution ne distribue pas que des droits. Le même deuxième chapitre inscrit des devoirs, et la nationalité est la porte par laquelle on entre dans la pleine mesure des uns et des autres.",
  "Обязанности": "Les devoirs",
  "Их немного, и они разбросаны по главе 2. **Статья 57**: каждый обязан платить законно установленные **налоги и сборы**, причём законы, ухудшающие положение налогоплательщиков, обратной силы не имеют. **Статья 58**: каждый обязан **сохранять природу** и бережно относиться к природным богатствам.":
    "Ils sont peu nombreux et dispersés dans le chapitre 2. **Article 57** : chacun doit payer les **impôts et taxes** légalement établis, et les lois qui aggravent la situation des contribuables n'ont pas d'effet rétroactif. **Article 58** : chacun doit **protéger la nature** et ménager les richesses naturelles.",
  "**Статья 59** называет защиту Отечества **долгом и обязанностью гражданина**. Военная служба несётся по федеральному закону; если убеждениям или вероисповеданию человека несение военной службы противоречит, он имеет право на **альтернативную гражданскую службу**.":
    "L'**article 59** fait de la défense de la Patrie un **devoir et une obligation du citoyen**. Le service militaire s'accomplit selon une loi fédérale ; si le service militaire est contraire aux convictions ou à la religion d'une personne, elle a droit au **service civil de remplacement**.",
  "Налоги · статья 57": "Les impôts · article 57",
  "Обязанность, которая исполняется каждый год и касается всех.":
    "Un devoir que l'on accomplit chaque année et qui concerne tout le monde.",
  "Природа · статья 58": "La nature · article 58",
  "Сохранять природу и бережно относиться к природным богатствам.":
    "Protéger la nature et ménager les richesses naturelles.",
  "Защита Отечества · статья 59": "La défense de la Patrie · article 59",
  "Долг и обязанность гражданина, с правом на альтернативную гражданскую службу.":
    "Devoir et obligation du citoyen, avec le droit à un service civil de remplacement.",
  "Забота о семье · статья 38": "Le soin de la famille · article 38",
  "Забота о детях — обязанность родителей, а забота о нетрудоспособных родителях — обязанность взрослых детей.":
    "Prendre soin des enfants est un devoir des parents, et prendre soin des parents devenus incapables de travailler un devoir des enfants adultes.",
  "К этому добавляются обязанность получить **основное общее образование** (статья 43, причём обеспечивают её родители) и обязанность **заботиться о памятниках истории и культуры** (статья 44).":
    "S'y ajoutent le devoir de recevoir l'**enseignement général de base** (article 43, dont les parents répondent) et celui de **prendre soin des monuments de l'histoire et de la culture** (article 44).",
  "Какая статья Конституции обязывает платить налоги и сборы?":
    "Quel article de la Constitution oblige à payer les impôts et les taxes ?",
  "Статья 43": "L'article 43",
  "Статья 57": "L'article 57",
  "Статья 58": "L'article 58",
  "Статья 59": "L'article 59",
  "Статья 57. Статья 58 — о сохранении природы, статья 59 — о защите Отечества, статья 43 — об образовании: четыре обязанности, которые легко перепутать.":
    "L'article 57. L'article 58 porte sur la protection de la nature, l'article 59 sur la défense de la Patrie, l'article 43 sur l'éducation : quatre devoirs faciles à confondre.",
  "Гражданство": "La nationalité",
  "**Статья 6** говорит, что гражданство России **едино и равно независимо от оснований приобретения**: тот, кто получил его по рождению, и тот, кто был принят в гражданство, имеют одни и те же права. Гражданина нельзя лишить гражданства или права изменить его.":
    "L'**article 6** dit que la nationalité russe est **une et égale, quelle que soit la manière dont on l'a acquise** : celui qui l'a par la naissance et celui qui a été admis à la nationalité ont les mêmes droits. On ne peut retirer à un citoyen sa nationalité ni le droit d'en changer.",
  "**Статья 62** допускает **двойное гражданство** — гражданин России может иметь гражданство иностранного государства, и это само по себе не умаляет его прав. Та же статья распространяет на иностранцев и лиц без гражданства права и обязанности граждан, кроме случаев, установленных законом.":
    "L'**article 62** admet la **double nationalité** — un citoyen russe peut avoir la nationalité d'un État étranger, et cela ne diminue pas ses droits en soi. Le même article étend aux étrangers et aux apatrides les droits et devoirs des citoyens, sauf dans les cas fixés par la loi.",
  "Как принимают в гражданство": "Comment on est admis à la nationalité",
  "Порядок установлен **федеральным законом о гражданстве**, принятым в **2023 году** и заменившим закон 2002 года. Гражданство приобретается **по рождению**, **в результате приёма** и по иным основаниям.":
    "La procédure est fixée par la **loi fédérale sur la nationalité**, adoptée en **2023** et qui a remplacé celle de 2002. La nationalité s'acquiert **par la naissance**, **par admission** et par d'autres voies.",
  "В **общем порядке** заявитель должен постоянно проживать в России **пять лет** со дня получения вида на жительство. Для ряда категорий действует **упрощённый порядок** — в частности для тех, у кого близкие родственники граждане России, для выпускников российских вузов и для носителей русского языка.":
    "Dans la **procédure ordinaire**, le demandeur doit résider en permanence en Russie **cinq ans** à compter de l'obtention du titre de séjour. Pour plusieurs catégories, une **procédure simplifiée** s'applique — notamment pour ceux dont les proches parents sont citoyens russes, pour les diplômés des universités russes et pour les locuteurs natifs du russe.",
  "Помимо срока требуются **владение русским языком**, **знание истории России и основ законодательства**, законный источник средств к существованию и соблюдение российского законодательства. Знание подтверждается **экзаменом** — тем самым, чью форму берёт тренировочный тест этого курса. С 2017 года принятые в гражданство приносят **присягу**.":
    "Outre le délai, on exige la **maîtrise du russe**, la **connaissance de l'histoire de la Russie et des bases de la législation**, une source légale de moyens d'existence et le respect de la législation russe. La connaissance s'atteste par un **examen** — celui-là même dont le test d'entraînement de ce cours reprend la forme. Depuis 2017, ceux qui sont admis prêtent **serment**.",
  "Сколько лет нужно постоянно прожить в России, чтобы обратиться за гражданством в общем порядке?":
    "Combien d'années faut-il avoir résidé en permanence en Russie pour demander la nationalité par la voie ordinaire ?",
  "Три года": "Trois ans",
  "Пять лет": "Cinq ans",
  "Восемь лет": "Huit ans",
  "Десять лет": "Dix ans",
  "Пять лет со дня получения вида на жительство. Для ряда категорий — близких родственников граждан, выпускников российских вузов, носителей языка — срок сокращается или снимается.":
    "Cinq ans à compter de l'obtention du titre de séjour. Pour plusieurs catégories — proches parents de citoyens, diplômés des universités russes, locuteurs natifs — le délai est réduit ou levé.",
  "Допускает ли Конституция двойное гражданство?":
    "La Constitution admet-elle la double nationalité ?",
  "Нет, оно прямо запрещено": "Non, elle est expressément interdite",
  "Да, статья 62 его допускает": "Oui, l'article 62 l'admet",
  "Только для граждан государств СНГ": "Seulement pour les ressortissants des États de la CEI",
  "Только с разрешения суда": "Seulement avec l'autorisation d'un tribunal",
  "Статья 62 допускает гражданство иностранного государства, и само по себе оно не умаляет прав. Отдельные федеральные законы при этом ограничивают доступ к некоторым должностям.":
    "L'article 62 admet la nationalité d'un État étranger, et elle ne diminue pas les droits en soi. Des lois fédérales particulières limitent cependant l'accès à certaines fonctions.",
  "**Паспорт** гражданин получает в **14 лет**, а **совершеннолетие** наступает в **18**. С восемнадцати приходят право голоса и полная дееспособность.":
    "Le **passeport** s'obtient à **14 ans**, et la **majorité** vient à **18**. À dix-huit ans arrivent le droit de vote et la pleine capacité juridique.",
  "Праздники и календарь": "Fêtes et calendrier",
  "Почему это важно: календарь рассказывает о стране больше многих учебников. В России он начинается с самых длинных в Европе каникул и включает праздники сразу трёх эпох — имперской, советской и нынешней.":
    "Pourquoi cela compte : le calendrier raconte un pays mieux que bien des manuels. En Russie, il s'ouvre sur les plus longues vacances d'Europe et comprend des fêtes de trois époques à la fois — impériale, soviétique et actuelle.",
  "Нерабочие праздничные дни": "Les jours fériés chômés",
  "Их перечисляет **статья 112 Трудового кодекса**. Год открывается **новогодними каникулами**: нерабочими считаются **1, 2, 3, 4, 5, 6 и 8 января**, а **7 января** — **Рождество Христово**. Вместе получается непрерывная неделя с лишним — самые длинные государственные каникулы в Европе.":
    "L'**article 112 du Code du travail** les énumère. L'année s'ouvre sur les **vacances du Nouvel An** : sont chômés les **1er, 2, 3, 4, 5, 6 et 8 janvier**, et le **7 janvier** est **Noël**. Ensemble, cela fait une semaine et plus sans interruption — les plus longues vacances d'État d'Europe.",
  "23 февраля": "Le 23 février",
  "День защитника Отечества. Ведёт начало от 1918 года; сегодня поздравляют не только военных, но и мужчин вообще.":
    "La Journée du défenseur de la Patrie. Elle remonte à 1918 ; aujourd'hui, on ne félicite pas que les militaires, mais les hommes en général.",
  "8 марта": "Le 8 mars",
  "Международный женский день. Нерабочий с 1966 года и один из самых массово отмечаемых.":
    "La Journée internationale des femmes. Chômée depuis 1966 et l'une des plus largement fêtées.",
  "1 мая": "Le 1er mai",
  "Праздник Весны и Труда. До 1992 года — День международной солидарности трудящихся.":
    "La fête du Printemps et du Travail. Jusqu'en 1992, la Journée de la solidarité internationale des travailleurs.",
  "9 мая": "Le 9 mai",
  "День Победы. Парад на Красной площади, минута молчания, шествие «Бессмертного полка».":
    "Le Jour de la Victoire. Défilé sur la place Rouge, minute de silence, marche du « Régiment immortel ».",
  "Завершают список **12 июня** — День России — и **4 ноября**, **День народного единства**. Последний отмечается с **2005 года** и заменил в календаре 7 ноября, годовщину Октябрьской революции. Он посвящён событиям **1612 года**: освобождению Москвы ополчением Минина и Пожарского.":
    "La liste se termine par le **12 juin**, la Journée de la Russie, et le **4 novembre**, la **Journée de l'unité nationale**. Cette dernière se célèbre depuis **2005** et a remplacé au calendrier le 7 novembre, anniversaire de la révolution d'Octobre. Elle est consacrée aux événements de **1612** : la libération de Moscou par la levée de Minine et Pojarski.",
  "Что отмечают 4 ноября?": "Que célèbre-t-on le 4 novembre ?",
  "Годовщину Октябрьской революции": "L'anniversaire de la révolution d'Octobre",
  "День Победы": "Le Jour de la Victoire",
  "День народного единства, с 2005 года. Он посвящён событиям 1612 года и заменил в календаре 7 ноября — годовщину революции 1917 года.":
    "La Journée de l'unité nationale, depuis 2005. Elle est consacrée aux événements de 1612 et a remplacé au calendrier le 7 novembre, anniversaire de la révolution de 1917.",
  "Даты, которые не выходные": "Les dates qui ne sont pas chômées",
  "Некоторые дни отмечают по всей стране, хотя они и рабочие. **12 апреля** — **День космонавтики**, в память о полёте Гагарина в 1961 году. **1 сентября** — **День знаний**: линейки во дворах школ, первый звонок и цветы учителям. **22 июня** — **День памяти и скорби**, годовщина начала войны в 1941 году, со «Свечой памяти» и приспущенными флагами.":
    "Certaines journées se célèbrent dans tout le pays bien qu'elles soient ouvrées. Le **12 avril** est la **Journée de la cosmonautique**, en mémoire du vol de Gagarine en 1961. Le **1er septembre** est la **Journée du savoir** : rassemblements dans les cours d'école, première sonnerie et fleurs pour les enseignants. Le **22 juin** est la **Journée de la mémoire et de l'affliction**, anniversaire du début de la guerre en 1941, avec la « Bougie du souvenir » et les drapeaux en berne.",
  "Два календаря": "Deux calendriers",
  "В **1918 году** Россия перешла с **юлианского** календаря на **григорианский**, и разница между ними составляла тогда тринадцать дней. Отсюда две особенности, которые до сих пор удивляют приезжих.":
    "En **1918**, la Russie est passée du calendrier **julien** au **grégorien**, et l'écart entre les deux était alors de treize jours. De là viennent deux particularités qui étonnent encore ceux qui arrivent.",
  "Первая: **Рождество** Русская православная церковь празднует **7 января**, потому что церковный календарь остался юлианским. Вторая: **14 января** отмечают **старый Новый год** — тот же Новый год по прежнему счёту. Праздник неофициальный, но живой.":
    "La première : l'Église orthodoxe russe fête **Noël** le **7 janvier**, parce que le calendrier de l'Église est resté julien. La seconde : le **14 janvier**, on fête le **vieux Nouvel An** — le même Nouvel An selon l'ancien compte. La fête n'est pas officielle, mais elle est bien vivante.",
  "Почему в России отмечают «старый Новый год» 14 января?":
    "Pourquoi fête-t-on en Russie le « vieux Nouvel An » le 14 janvier ?",
  "Так решили в 1990-е годы": "On en a décidé ainsi dans les années 1990",
  "Из-за перехода с юлианского календаря на григорианский в 1918 году":
    "À cause du passage du calendrier julien au grégorien en 1918",
  "Это праздник северных народов": "C'est une fête des peuples du Nord",
  "Так отмечали при Петре I": "On le fêtait ainsi sous Pierre Ier",
  "Разница между календарями составляла тринадцать дней, и по прежнему счёту год начинался 14 января. По той же причине Рождество приходится на 7 января.":
    "L'écart entre les calendriers était de treize jours, et selon l'ancien compte l'année commençait le 14 janvier. Pour la même raison, Noël tombe le 7 janvier.",
  "Народные и церковные": "Les fêtes populaires et religieuses",
  "Рядом с государственным календарём живёт народный. **Масленица** — неделя перед Великим постом, с блинами и сожжением чучела зимы. **Пасха** — главный православный праздник, с крашеными яйцами и куличами; её дата подвижна. Осенью отмечают **Покров**, а летом — **Ивана Купалу**.":
    "À côté du calendrier de l'État vit un calendrier populaire. La **Maslenitsa** est la semaine qui précède le Grand Carême, avec ses blinis et le mannequin de l'hiver que l'on brûle. **Pâques** est la grande fête orthodoxe, avec les œufs peints et les koulitchs ; sa date est mobile. En automne on célèbre la **Protection de la Vierge**, et en été la **Saint-Jean slave**.",
  "Сколько дней длятся новогодние каникулы по Трудовому кодексу?":
    "Combien de jours durent les vacances du Nouvel An selon le Code du travail ?",
  "С 1 по 3 января": "Du 1er au 3 janvier",
  "С 1 по 8 января": "Du 1er au 8 janvier",
  "С 31 декабря по 2 января": "Du 31 décembre au 2 janvier",
  "Только 1 января": "Le 1er janvier seulement",
  "Нерабочими считаются 1–6 и 8 января, а 7 января — Рождество Христово. Вместе выходит непрерывная неделя с лишним, самые длинные государственные каникулы в Европе.":
    "Sont chômés les 1er à 6 et le 8 janvier, et le 7 janvier est Noël. Ensemble, cela fait une semaine et plus sans interruption, les plus longues vacances d'État d'Europe.",
  "**12 декабря** — День Конституции, но с 2005 года это **рабочий день**. Памятная дата и нерабочий праздник — не одно и то же.":
    "Le **12 décembre** est la Journée de la Constitution, mais depuis 2005 c'est un **jour ouvré**. Une date commémorative et un jour férié chômé ne sont pas la même chose.",
  "Президент": "Le président",
  "Государственное устройство": "L'organisation de l'État",
  "Почему начинаем с президента: в российской конструкции он стоит не внутри одной из трёх ветвей власти, а над ними. Понять эту особенность — значит понять остальное устройство.":
    "Pourquoi commencer par le président : dans la construction russe, il ne se tient pas à l'intérieur de l'un des trois pouvoirs, mais au-dessus d'eux. Comprendre cette particularité, c'est comprendre le reste de l'édifice.",
  "Что говорит глава 4": "Ce que dit le chapitre 4",
  "**Статья 80** называет Президента **главой государства** и **гарантом Конституции**, прав и свобод человека. Он принимает меры по охране суверенитета, обеспечивает согласованное функционирование органов власти и **определяет основные направления внутренней и внешней политики**.":
    "L'**article 80** fait du président le **chef de l'État** et le **garant de la Constitution**, des droits et des libertés de l'homme. Il prend les mesures de protection de la souveraineté, assure le fonctionnement concerté des organes du pouvoir et **définit les grandes orientations de la politique intérieure et extérieure**.",
  "Обратите внимание на слово «согласованное». Президент не отнесён ни к законодательной, ни к исполнительной, ни к судебной власти: он стоит над разделением, установленным статьёй 10, и связывает ветви между собой.":
    "Notez le mot « concerté ». Le président n'est rattaché ni au pouvoir législatif, ni à l'exécutif, ni au judiciaire : il se tient au-dessus de la séparation établie par l'article 10 et relie les pouvoirs entre eux.",
  "Как избирается": "Comment il est élu",
  "Президента избирают **граждане России** на основе всеобщего, равного и прямого избирательного права при тайном голосовании — сроком на **шесть лет**. До поправки **2008 года** срок составлял четыре года.":
    "Le président est élu par les **citoyens de Russie** au suffrage universel, égal et direct, à bulletin secret — pour **six ans**. Avant l'amendement de **2008**, le mandat était de quatre ans.",
  "Не моложе 35 лет": "Pas moins de 35 ans",
  "Возрастной ценз, установленный статьёй 81.": "La condition d'âge fixée par l'article 81.",
  "25 лет проживания": "25 ans de résidence",
  "Кандидат должен постоянно проживать в России не менее двадцати пяти лет — требование, добавленное поправками 2020 года.":
    "Le candidat doit avoir résidé en permanence en Russie au moins vingt-cinq ans — exigence ajoutée par les amendements de 2020.",
  "Без иностранного гражданства": "Sans nationalité étrangère",
  "И без вида на жительство в другом государстве, в том числе в прошлом. Тоже поправка 2020 года.":
    "Ni titre de séjour dans un autre État, y compris par le passé. Également un amendement de 2020.",
  "Не более двух сроков": "Pas plus de deux mandats",
  "Прежде в тексте стояло «двух сроков подряд»; поправки 2020 года слово «подряд» убрали.":
    "Le texte disait auparavant « deux mandats consécutifs » ; les amendements de 2020 ont retiré le mot « consécutifs ».",
  "На какой срок избирается Президент Российской Федерации?":
    "Pour combien de temps le président de la Fédération de Russie est-il élu ?",
  "На четыре года": "Quatre ans",
  "На пять лет": "Cinq ans",
  "На шесть лет": "Six ans",
  "На семь лет": "Sept ans",
  "Шесть лет — с поправки 2008 года; до неё срок был четырёхлетним. Государственная Дума избирается на пять лет, и эти две цифры часто путают.":
    "Six ans, depuis l'amendement de 2008 ; avant lui, le mandat était de quatre ans. La Douma d'État est élue pour cinq ans, et l'on confond souvent ces deux chiffres.",
  "Что он делает": "Ce qu'il fait",
  "Полномочия перечислены в **статье 83**. Президент **назначает Председателя Правительства** после утверждения его кандидатуры Государственной Думой, принимает решение об отставке Правительства, представляет кандидатуры судей высших судов и Генерального прокурора, формирует Совет Безопасности и Администрацию Президента.":
    "Ses pouvoirs sont énumérés à l'**article 83**. Le président **nomme le président du gouvernement** après approbation de sa candidature par la Douma d'État, décide de la démission du gouvernement, présente les candidatures des juges des juridictions suprêmes et du procureur général, forme le Conseil de sécurité et l'Administration présidentielle.",
  "В законодательном процессе он вносит законопроекты, **подписывает и обнародует** федеральные законы и обладает правом **вето**. Он **Верховный Главнокомандующий**, вводит военное и чрезвычайное положение с последующим утверждением Советом Федерации, решает вопросы гражданства, осуществляет **помилование** и награждает государственными наградами.":
    "Dans le travail législatif, il dépose des projets de loi, **signe et promulgue** les lois fédérales et dispose d'un droit de **veto**. Il est **commandant suprême**, instaure l'état de guerre et l'état d'urgence sous réserve d'approbation par le Conseil de la Fédération, tranche les questions de nationalité, exerce le **droit de grâce** et décerne les distinctions de l'État.",
  "Вступая в должность, Президент приносит **присягу** народу — текст записан в **статье 82**. Официальная резиденция — **Московский Кремль**.":
    "En entrant en fonction, le président prête **serment** devant le peuple — le texte est inscrit à l'**article 82**. La résidence officielle est le **Kremlin de Moscou**.",
  "Каков минимальный возраст кандидата в Президенты?":
    "Quel est l'âge minimal d'un candidat à la présidence ?",
  "21 год": "21 ans",
  "30 лет": "30 ans",
  "35 лет": "35 ans",
  "40 лет": "40 ans",
  "Тридцать пять лет. Двадцать один — возраст для избрания в Государственную Думу, тридцать — для сенатора: три ценза, которые стоит держать порознь.":
    "Trente-cinq ans. Vingt et un est l'âge pour être élu à la Douma d'État, trente pour être sénateur : trois conditions qu'il vaut mieux tenir séparées.",
  "Если полномочия прекращаются досрочно": "Si le mandat prend fin par anticipation",
  "**Статья 92** предусматривает три случая: отставка, стойкая неспособность по состоянию здоровья и отрешение от должности. Во всех трёх обязанности временно исполняет **Председатель Правительства**, и выборы должны состояться не позднее трёх месяцев.":
    "L'**article 92** prévoit trois cas : la démission, l'incapacité durable pour raison de santé et la destitution. Dans les trois, le **président du gouvernement** exerce les fonctions par intérim, et l'élection doit avoir lieu dans les trois mois.",
  "**Отрешение от должности** описано в **статье 93** и устроено намеренно тяжело. Государственная Дума выдвигает обвинение **двумя третями** голосов, Верховный Суд даёт заключение о наличии признаков преступления, Конституционный Суд — о соблюдении порядка, и решение принимает **Совет Федерации двумя третями** в трёхмесячный срок. Ни разу эта процедура не была доведена до конца.":
    "La **destitution** est décrite à l'**article 93** et rendue lourde à dessein. La Douma d'État met en accusation aux **deux tiers** des voix, la Cour suprême rend un avis sur l'existence des éléments d'une infraction, la Cour constitutionnelle sur le respect de la procédure, et la décision appartient au **Conseil de la Fédération aux deux tiers**, dans un délai de trois mois. Cette procédure n'a jamais été menée à son terme.",
  "Кто временно исполняет обязанности Президента при досрочном прекращении полномочий?":
    "Qui exerce les fonctions du président par intérim en cas de fin anticipée du mandat ?",
  "Председатель Совета Федерации": "Le président du Conseil de la Fédération",
  "Председатель Правительства": "Le président du gouvernement",
  "Председатель Государственной Думы": "Le président de la Douma d'État",
  "Председатель Конституционного Суда": "Le président de la Cour constitutionnelle",
  "Председатель Правительства, по статье 92, и выборы должны состояться не позднее трёх месяцев. Исполняющий обязанности при этом не вправе распускать Думу и назначать референдум.":
    "Le président du gouvernement, selon l'article 92, et l'élection doit avoir lieu dans les trois mois. Celui qui exerce l'intérim n'a pas le droit de dissoudre la Douma ni de convoquer un référendum.",
  "**Глава государства** и **глава правительства** в России — разные должности и разные здания: Президент в **Кремле**, Председатель Правительства в **Доме Правительства** на Краснопресненской набережной.":
    "**Chef de l'État** et **chef du gouvernement** sont en Russie deux charges différentes et deux bâtiments différents : le président au **Kremlin**, le président du gouvernement à la **Maison du gouvernement**, sur le quai de Krasnaïa Presnia.",
  "Федеральное Собрание": "L'Assemblée fédérale",
  "Почему это важно: у российского парламента две палаты, и они устроены совсем по-разному — одну избирают напрямую, вторую собирают из представителей регионов. Кто это различает, тот перестаёт путать Думу с Советом Федерации.":
    "Pourquoi cela compte : le parlement russe a deux chambres, et elles sont faites tout autrement l'une que l'autre — l'une est élue directement, l'autre est composée de représentants des régions. Qui fait cette distinction cesse de confondre la Douma et le Conseil de la Fédération.",
  "Две палаты": "Deux chambres",
  "**Статья 94** называет Федеральное Собрание **представительным и законодательным органом** Российской Федерации. Оно состоит из двух палат — **Совета Федерации** и **Государственной Думы**, — которые **заседают раздельно**. Совместно они собираются лишь в особых случаях: для посланий Президента и выступлений глав иностранных государств.":
    "L'**article 94** fait de l'Assemblée fédérale l'**organe représentatif et législatif** de la Fédération de Russie. Elle se compose de deux chambres — le **Conseil de la Fédération** et la **Douma d'État** — qui **siègent séparément**. Elles ne se réunissent ensemble que dans des cas particuliers : les messages du président et les discours de chefs d'État étrangers.",
  "Государственная Дума": "La Douma d'État",
  "450 депутатов, избираются на пять лет. Нижняя палата, и именно в неё вносятся законопроекты. Здание — на Охотном Ряду.":
    "450 députés, élus pour cinq ans. La chambre basse, et c'est à elle que sont déposés les projets de loi. Le bâtiment est sur l'Okhotny Riad.",
  "Совет Федерации": "Le Conseil de la Fédération",
  "Верхняя палата, палата регионов. Не избирается целиком и не имеет единого срока полномочий. Здание — на Большой Дмитровке.":
    "La chambre haute, la chambre des régions. Elle n'est pas élue en bloc et n'a pas de durée de mandat unique. Le bâtiment est sur la Bolchaïa Dmitrovka.",
  "Возраст, с которого можно быть избранным депутатом Государственной Думы.":
    "L'âge à partir duquel on peut être élu député à la Douma d'État.",
  "Возраст, с которого можно стать сенатором Российской Федерации.":
    "L'âge à partir duquel on peut devenir sénateur de la Fédération de Russie.",
  "Сколько депутатов в Государственной Думе?": "Combien de députés compte la Douma d'État ?",
  "Двести двадцать пять": "Deux cent vingt-cinq",
  "Триста": "Trois cents",
  "Четыреста пятьдесят": "Quatre cent cinquante",
  "Шестьсот тридцать": "Six cent trente",
  "Четыреста пятьдесят. Двести двадцать пять — это половина, которая избирается по одномандатным округам, а другая половина проходит по партийным спискам.":
    "Quatre cent cinquante. Deux cent vingt-cinq est la moitié élue dans des circonscriptions uninominales, l'autre moitié passant par les listes de partis.",
  "Как избирают Думу": "Comment la Douma est élue",
  "Система **смешанная**. **225 депутатов** избираются по **одномандатным округам** — по одному от округа, кто набрал больше голосов. Другие **225** проходят по **партийным спискам** в едином федеральном округе, и здесь действует **пятипроцентный барьер**: партия, не набравшая пяти процентов, мест не получает.":
    "Le système est **mixte**. **225 députés** sont élus dans des **circonscriptions uninominales** — un par circonscription, à celui qui a le plus de voix. Les **225** autres passent par des **listes de partis** dans une circonscription fédérale unique, et là s'applique un **seuil de cinq pour cent** : un parti qui n'atteint pas cinq pour cent n'obtient aucun siège.",
  "Срок полномочий Думы — **пять лет**; до поправки 2008 года он составлял четыре года. Президент вправе распустить Думу в двух случаях, прямо названных Конституцией: при трёхкратном отклонении кандидатуры Председателя Правительства и при повторном выражении недоверия Правительству.":
    "Le mandat de la Douma est de **cinq ans** ; avant l'amendement de 2008, il était de quatre. Le président a le droit de dissoudre la Douma dans deux cas expressément nommés par la Constitution : le triple rejet de la candidature au poste de président du gouvernement et un second vote de défiance envers le gouvernement.",
  "Как складывается Совет Федерации": "Comment se compose le Conseil de la Fédération",
  "В него входят **по два представителя от каждого субъекта** Федерации — один от законодательного органа, другой от исполнительного. К ним добавляются сенаторы, **назначаемые Президентом** (не более тридцати, по поправке 2020 года), а бывшие президенты вправе стать **пожизненными сенаторами**.":
    "Il comprend **deux représentants de chaque sujet** de la Fédération — l'un de l'organe législatif, l'autre de l'exécutif. S'y ajoutent des sénateurs **nommés par le président** (trente au plus, selon l'amendement de 2020), et les anciens présidents ont le droit de devenir **sénateurs à vie**.",
  "Отсюда важное следствие: Совет Федерации **не избирается целиком и не распускается**. Его состав меняется постепенно, вслед за выборами в регионах, и палата работает непрерывно.":
    "D'où une conséquence importante : le Conseil de la Fédération **n'est pas élu en bloc et ne se dissout pas**. Sa composition change peu à peu, au fil des élections dans les régions, et la chambre travaille sans interruption.",
  "Сколько представителей направляет в Совет Федерации каждый субъект?":
    "Combien de représentants chaque sujet envoie-t-il au Conseil de la Fédération ?",
  "Одного": "Un",
  "Двух": "Deux",
  "Трёх": "Trois",
  "Число зависит от населения": "Le nombre dépend de la population",
  "Двух: одного от законодательного органа субъекта, другого от исполнительного. Численность населения на это не влияет — в этом и смысл палаты регионов.":
    "Deux : l'un de l'organe législatif du sujet, l'autre de l'exécutif. La population n'y change rien — c'est tout le sens d'une chambre des régions.",
  "Как принимается закон": "Comment une loi est adoptée",
  "Законопроект вносится **в Государственную Думу**. Дума принимает федеральный закон **большинством голосов**, а федеральный конституционный — **двумя третями**. В течение пяти дней закон передаётся в **Совет Федерации**, у которого есть **четырнадцать дней** на рассмотрение.":
    "Le projet de loi est déposé **à la Douma d'État**. La Douma adopte une loi fédérale à la **majorité des voix**, et une loi constitutionnelle fédérale aux **deux tiers**. Dans les cinq jours, la loi passe au **Conseil de la Fédération**, qui dispose de **quatorze jours** pour l'examiner.",
  "Если Совет Федерации отклоняет закон, палаты создают согласительную комиссию, либо Дума преодолевает отклонение **двумя третями** голосов. Затем закон уходит **Президенту**, который в течение четырнадцати дней подписывает и обнародует его или налагает **вето**. Вето преодолевается **двумя третями голосов обеих палат**.":
    "Si le Conseil de la Fédération rejette la loi, les chambres forment une commission de conciliation, ou bien la Douma passe outre le rejet aux **deux tiers** des voix. La loi part ensuite au **président**, qui dans les quatorze jours la signe et la promulgue ou y oppose son **veto**. Le veto se surmonte aux **deux tiers des voix des deux chambres**.",
  "**Статья 106** перечисляет законы, которые Совет Федерации обязан рассмотреть непременно: бюджет, налоги и сборы, финансовое и таможенное регулирование, ратификация международных договоров, статус государственной границы, вопросы войны и мира.":
    "L'**article 106** énumère les lois que le Conseil de la Fédération est tenu d'examiner : le budget, les impôts et taxes, la réglementation financière et douanière, la ratification des traités internationaux, le statut de la frontière d'État, les questions de guerre et de paix.",
  "Какой барьер должна преодолеть партия, чтобы получить места по спискам?":
    "Quel seuil un parti doit-il franchir pour obtenir des sièges par les listes ?",
  "Три процента": "Trois pour cent",
  "Пять процентов": "Cinq pour cent",
  "Семь процентов": "Sept pour cent",
  "Барьера нет": "Il n'y a pas de seuil",
  "Пять процентов голосов в едином федеральном округе. Барьер менялся: в 2007 и 2011 годах он составлял семь процентов, а затем вернулся к пяти.":
    "Cinq pour cent des voix dans la circonscription fédérale unique. Le seuil a changé : en 2007 et 2011 il était de sept pour cent, puis il est revenu à cinq.",
  "Законопроект вносится **только в Государственную Думу**, никогда напрямую в Совет Федерации. Верхняя палата вступает в дело после того, как закон уже принят нижней.":
    "Un projet de loi se dépose **uniquement à la Douma d'État**, jamais directement au Conseil de la Fédération. La chambre haute entre en scène après que la chambre basse a adopté la loi.",
  "Правительство": "Le gouvernement",
  "Почему это важно: Правительство отвечает за то, что видно каждый день — бюджет, пенсии, дороги, школы. И оно единственный орган, который зависит сразу от двух: и от Президента, и от Думы.":
    "Pourquoi cela compte : le gouvernement répond de ce qui se voit tous les jours — le budget, les retraites, les routes, les écoles. Et c'est le seul organe qui dépende de deux autres à la fois : du président et de la Douma.",
  "Из кого состоит": "De qui il se compose",
  "**Статья 110** определяет состав: **Председатель Правительства**, его заместители и **федеральные министры**. Правительство осуществляет **исполнительную власть** Российской Федерации. Его резиденция — **Дом Правительства** на Краснопресненской набережной, в обиходе Белый дом.":
    "L'**article 110** en fixe la composition : le **président du gouvernement**, ses adjoints et les **ministres fédéraux**. Le gouvernement exerce le **pouvoir exécutif** de la Fédération de Russie. Sa résidence est la **Maison du gouvernement**, sur le quai de Krasnaïa Presnia, que l'on appelle couramment la Maison-Blanche.",
  "Как оно назначается": "Comment il est nommé",
  "**Председателя Правительства назначает Президент** — но только **после утверждения** кандидатуры **Государственной Думой**. До поправок 2020 года формулировка была мягче: Дума давала «согласие».":
    "**Le président nomme le président du gouvernement** — mais seulement **après approbation** de la candidature par la **Douma d'État**. Avant les amendements de 2020, la formule était plus souple : la Douma donnait son « accord ».",
  "Если Дума **трижды отклонит** представленные кандидатуры, Президент назначает Председателя сам, **распускает Думу** и назначает новые выборы. Эта норма никогда не применялась, но именно она задаёт баланс: у Думы есть право отказать, но у отказа есть цена.":
    "Si la Douma **rejette trois fois** les candidatures présentées, le président nomme lui-même le chef du gouvernement, **dissout la Douma** et convoque de nouvelles élections. Cette règle n'a jamais été appliquée, mais c'est elle qui fixe l'équilibre : la Douma a le droit de refuser, mais le refus a un prix.",
  "Заместителей и министров, кроме руководителей так называемого силового блока, тоже **утверждает Дума**. Министров обороны, внутренних дел, иностранных дел, юстиции и глав спецслужб назначает **Президент** после консультаций с **Советом Федерации**.":
    "Les adjoints et les ministres, sauf les chefs de ce qu'on appelle le bloc de force, sont eux aussi **approuvés par la Douma**. Les ministres de la Défense, de l'Intérieur, des Affaires étrangères, de la Justice et les chefs des services spéciaux sont nommés par le **président** après consultation du **Conseil de la Fédération**.",
  "Что происходит, если Государственная Дума трижды отклонит кандидатуру Председателя Правительства?":
    "Que se passe-t-il si la Douma d'État rejette trois fois la candidature au poste de président du gouvernement ?",
  "Президент обязан предложить четвёртую кандидатуру":
    "Le président doit proposer une quatrième candidature",
  "Президент назначает Председателя, распускает Думу и назначает новые выборы":
    "Le président nomme le chef du gouvernement, dissout la Douma et convoque de nouvelles élections",
  "Кандидатуру утверждает Совет Федерации":
    "La candidature est approuvée par le Conseil de la Fédération",
  "Правительство формируется без председателя": "Le gouvernement se forme sans chef",
  "Это одно из двух оснований роспуска Думы, прямо названных Конституцией. Норма ни разу не применялась, но она задаёт цену отказа.":
    "C'est l'un des deux motifs de dissolution de la Douma expressément nommés par la Constitution. La règle n'a jamais été appliquée, mais elle fixe le prix du refus.",
  "Чем оно занимается": "Ce dont il s'occupe",
  "**Статья 114** перечисляет главные направления: разработка и исполнение **федерального бюджета**, единая финансовая, кредитная и денежная политика, единая политика в области **культуры, науки, образования, здравоохранения, социального обеспечения** и экологии, управление федеральной собственностью, **оборона и государственная безопасность**, законность и борьба с преступностью.":
    "L'**article 114** énumère les grandes directions : l'élaboration et l'exécution du **budget fédéral**, une politique financière, du crédit et monétaire unique, une politique unique dans les domaines de la **culture, de la science, de l'éducation, de la santé, de la protection sociale** et de l'environnement, la gestion de la propriété fédérale, la **défense et la sécurité de l'État**, la légalité et la lutte contre la criminalité.",
  "Свои решения Правительство оформляет **постановлениями** и **распоряжениями**. Они обязательны на всей территории страны, но не должны противоречить Конституции, федеральным законам и указам Президента — иначе Президент вправе их отменить.":
    "Le gouvernement met ses décisions en forme par des **arrêtés** et des **ordonnances**. Elles s'imposent sur tout le territoire du pays, mais ne doivent pas contredire la Constitution, les lois fédérales ni les décrets du président — faute de quoi le président a le droit de les annuler.",
  "Какие акты издаёт Правительство Российской Федерации?":
    "Quels actes le gouvernement de la Fédération de Russie prend-il ?",
  "Указы и распоряжения": "Des décrets et des ordonnances",
  "Постановления и распоряжения": "Des arrêtés et des ordonnances",
  "Федеральные законы": "Des lois fédérales",
  "Приказы и инструкции": "Des instructions et des circulaires",
  "Постановления и распоряжения. Указы и распоряжения издаёт Президент, а федеральные законы принимает парламент: три разных вида актов и три разных органа.":
    "Des arrêtés et des ordonnances. Les décrets et ordonnances viennent du président, et les lois fédérales sont adoptées par le parlement : trois sortes d'actes et trois organes différents.",
  "Как оно уходит": "Comment il s'en va",
  "Государственная Дума может выразить Правительству **недоверие**. Если она сделает это **повторно в течение трёх месяцев**, Президент обязан выбрать: объявить об **отставке Правительства** либо **распустить Думу**. Выбор остаётся за ним, и это второе основание роспуска.":
    "La Douma d'État peut exprimer sa **défiance** envers le gouvernement. Si elle le fait **une seconde fois en trois mois**, le président doit choisir : annoncer la **démission du gouvernement** ou **dissoudre la Douma**. Le choix lui appartient, et c'est le second motif de dissolution.",
  "Правительство может и само поставить перед Думой **вопрос о доверии**. И в любом случае оно **слагает свои полномочия** перед вновь избранным Президентом — независимо от того, как давно было сформировано.":
    "Le gouvernement peut aussi poser lui-même à la Douma la **question de confiance**. Et dans tous les cas, il **remet ses pouvoirs** devant le président nouvellement élu — quelle que soit la date à laquelle il a été formé.",
  "Перед кем Правительство слагает свои полномочия?":
    "Devant qui le gouvernement remet-il ses pouvoirs ?",
  "Перед вновь избранным Президентом": "Devant le président nouvellement élu",
  "Перед вновь избранной Государственной Думой": "Devant la Douma d'État nouvellement élue",
  "Перед Советом Федерации": "Devant le Conseil de la Fédération",
  "Ни перед кем: оно работает бессрочно": "Devant personne : il travaille sans limite de durée",
  "Перед вновь избранным Президентом, и это происходит после каждых президентских выборов. Смена состава Думы сама по себе отставки Правительства не влечёт.":
    "Devant le président nouvellement élu, et cela se produit après chaque élection présidentielle. Le renouvellement de la Douma n'entraîne pas par lui-même la démission du gouvernement.",
  "**Указ** — акт Президента, **постановление** — акт Правительства, **федеральный закон** — акт парламента. Три слова, которые в новостях звучат рядом и означают три разные вещи.":
    "Le **décret** est un acte du président, l'**arrêté** un acte du gouvernement, la **loi fédérale** un acte du parlement. Trois mots qui se côtoient dans les journaux et désignent trois choses différentes.",
  "Судебная власть": "Le pouvoir judiciaire",
  "Почему это важно: на вершине стоят два суда, и они не одно и то же. Один судит законы, другой — дела. Их постоянно путают, и различие между ними стоит запомнить сразу.":
    "Pourquoi cela compte : au sommet se tiennent deux cours, et ce ne sont pas les mêmes. L'une juge les lois, l'autre les affaires. On les confond sans cesse, et la différence vaut d'être retenue tout de suite.",
  "Основные правила": "Les règles de base",
  "**Статья 118**: правосудие осуществляется **только судом**, судебная система устанавливается Конституцией и федеральным конституционным законом, а **создание чрезвычайных судов не допускается**. **Статья 120** объявляет судей **независимыми** и подчиняющимися только Конституции и закону; **статьи 121 и 122** добавляют **несменяемость** и **неприкосновенность**.":
    "**Article 118** : la justice n'est rendue **que par un tribunal**, le système judiciaire est établi par la Constitution et par une loi constitutionnelle fédérale, et la **création de juridictions d'exception n'est pas admise**. L'**article 120** déclare les juges **indépendants** et soumis à la seule Constitution et à la loi ; les **articles 121 et 122** ajoutent l'**inamovibilité** et l'**immunité**.",
  "Судьёй может стать гражданин России **не моложе 25 лет**, с высшим юридическим образованием и **стажем работы по юридической профессии не менее пяти лет**. Для высших судов требования выше.":
    "Peut devenir juge un citoyen russe d'**au moins 25 ans**, titulaire d'un diplôme supérieur de droit et ayant **au moins cinq ans d'exercice d'une profession juridique**. Pour les juridictions suprêmes, les exigences sont plus élevées.",
  "Лестница судов": "L'escalier des juridictions",
  "Мировые судьи": "Les juges de paix",
  "Самые простые дела: мелкие иски, часть уголовных дел. Это суды субъектов Федерации, а не федеральные.":
    "Les affaires les plus simples : petits litiges, une partie des affaires pénales. Ce sont des juridictions des sujets de la Fédération, non des juridictions fédérales.",
  "Районные суды": "Les tribunaux d'arrondissement",
  "Основное звено: большинство дел по первой инстанции рассматривается здесь.":
    "L'échelon principal : la plupart des affaires y sont jugées en première instance.",
  "Суды субъектов": "Les juridictions des sujets",
  "Областные, краевые, республиканские. Апелляция на районные суды и первая инстанция по тяжким делам.":
    "Tribunaux d'oblast, de kraï, de république. Appel des tribunaux d'arrondissement et première instance pour les affaires graves.",
  "Кассационные и апелляционные суды": "Les cours de cassation et d'appel",
  "Отдельные окружные суды, созданные в 2019 году, чтобы проверка шла не в том же регионе, где выносилось решение.":
    "Des juridictions de circonscription distinctes, créées en 2019 pour que le contrôle n'ait pas lieu dans la région où la décision a été rendue.",
  "Отдельную ветвь образуют **арбитражные суды**, которые рассматривают экономические споры между организациями и предпринимателями. Обычное дело проходит три инстанции: **первую**, **апелляцию** и **кассацию**.":
    "Une branche à part est formée par les **tribunaux d'arbitrage**, qui tranchent les litiges économiques entre organisations et entrepreneurs. Une affaire ordinaire passe par trois degrés : la **première instance**, l'**appel** et la **cassation**.",
  "Верховный Суд": "La Cour suprême",
  "**Верховный Суд** — высший судебный орган по **гражданским, уголовным, административным** делам и по **экономическим спорам**. Он даёт разъяснения по вопросам судебной практики, и эти разъяснения фактически определяют, как нижестоящие суды будут читать закон.":
    "La **Cour suprême** est l'organe judiciaire le plus élevé pour les affaires **civiles, pénales, administratives** et pour les **litiges économiques**. Elle donne des explications sur les questions de pratique judiciaire, et ces explications déterminent en fait la façon dont les juridictions inférieures liront la loi.",
  "В **2014 году** Высший Арбитражный Суд был **упразднён**, а его полномочия переданы Верховному Суду. С тех пор высших судов два, а не три.":
    "En **2014**, la Cour suprême d'arbitrage a été **supprimée** et ses attributions transférées à la Cour suprême. Depuis, il y a deux juridictions suprêmes et non trois.",
  "Конституционный Суд": "La Cour constitutionnelle",
  "**Конституционный Суд** стоит особняком: он не рассматривает дела граждан по существу, а **проверяет законы на соответствие Конституции**. С поправок **2020 года** в нём **одиннадцать судей**; прежде было девятнадцать. С **2008 года** он находится не в Москве, а в **Санкт-Петербурге**.":
    "La **Cour constitutionnelle** se tient à part : elle ne juge pas les affaires des citoyens au fond, elle **contrôle la conformité des lois à la Constitution**. Depuis les amendements de **2020**, elle compte **onze juges** ; ils étaient dix-neuf auparavant. Depuis **2008**, elle siège non à Moscou mais à **Saint-Pétersbourg**.",
  "Его полномочия: проверка конституционности законов и иных актов, разрешение споров о компетенции между органами власти, **толкование Конституции**, заключение при отрешении Президента и проверка законопроектов по запросу Президента. Норма, признанная неконституционной, **утрачивает силу**.":
    "Ses attributions : le contrôle de constitutionnalité des lois et autres actes, le règlement des conflits de compétence entre organes du pouvoir, l'**interprétation de la Constitution**, l'avis en cas de destitution du président et le contrôle de projets de loi à la demande du président. Une norme déclarée inconstitutionnelle **perd sa force**.",
  "Сколько судей в Конституционном Суде Российской Федерации?":
    "Combien de juges compte la Cour constitutionnelle de la Fédération de Russie ?",
  "Девять": "Neuf",
  "Одиннадцать": "Onze",
  "Девятнадцать": "Dix-neuf",
  "Двадцать один": "Vingt et un",
  "Одиннадцать — с поправок 2020 года; прежде судей было девятнадцать. Число сокращали постепенно, не заполняя открывающиеся места.":
    "Onze, depuis les amendements de 2020 ; auparavant les juges étaient dix-neuf. Le nombre a été réduit peu à peu, en ne pourvoyant pas les places qui se libéraient.",
  "В каком городе находится Конституционный Суд?":
    "Dans quelle ville se trouve la Cour constitutionnelle ?",
  "В Москве": "À Moscou",
  "В Санкт-Петербурге": "À Saint-Pétersbourg",
  "В Екатеринбурге": "À Iekaterinbourg",
  "В Казани": "À Kazan",
  "В Санкт-Петербурге с 2008 года — единственный высший орган власти, работающий не в столице. Верховный Суд переехал туда позже.":
    "À Saint-Pétersbourg depuis 2008 — le seul organe suprême du pouvoir qui ne travaille pas dans la capitale. La Cour suprême y a déménagé plus tard.",
  "Прокуратура": "Le parquet",
  "**Статья 129** отводит **прокуратуре** отдельное место в той же главе. Это **единая централизованная система** с подчинением нижестоящих прокуроров вышестоящим и **Генеральному прокурору**, которого назначает Совет Федерации по представлению Президента. Прокуратура надзирает за соблюдением законов и поддерживает обвинение в суде, но судом не является.":
    "L'**article 129** réserve au **parquet** une place à part dans le même chapitre. C'est un **système unique et centralisé**, où les procureurs inférieurs relèvent des supérieurs et du **procureur général**, nommé par le Conseil de la Fédération sur proposition du président. Le parquet veille au respect des lois et soutient l'accusation devant le tribunal, mais il n'est pas une juridiction.",
  "Что произошло с высшими судами в 2014 году?":
    "Qu'est-il arrivé aux juridictions suprêmes en 2014 ?",
  "Конституционный Суд переехал в Санкт-Петербург":
    "La Cour constitutionnelle a déménagé à Saint-Pétersbourg",
  "Высший Арбитражный Суд был упразднён, его полномочия перешли Верховному Суду":
    "La Cour suprême d'arbitrage a été supprimée et ses attributions transférées à la Cour suprême",
  "Был создан Верховный Суд": "La Cour suprême a été créée",
  "Число судей Конституционного Суда сократили до одиннадцати":
    "Le nombre de juges de la Cour constitutionnelle a été ramené à onze",
  "Переезд Конституционного Суда состоялся в 2008 году, а сокращение до одиннадцати судей — в 2020-м. В 2014 году высших судов стало два вместо трёх.":
    "Le déménagement de la Cour constitutionnelle date de 2008, et la réduction à onze juges de 2020. En 2014, les juridictions suprêmes sont passées de trois à deux.",
  "**Конституционный Суд** судит **законы**, **Верховный Суд** — **дела**. Обратиться в Конституционный Суд с жалобой на приговор нельзя; можно оспорить закон, по которому этот приговор вынесен.":
    "La **Cour constitutionnelle** juge les **lois**, la **Cour suprême** les **affaires**. On ne peut pas saisir la Cour constitutionnelle d'un recours contre un jugement ; on peut contester la loi sur laquelle ce jugement s'appuie.",
  "Выборы и местное самоуправление": "Élections et autonomie locale",
  "Почему это важно: голосуют в России в один и тот же день по всей стране, а местное самоуправление по Конституции вообще не входит в государственную власть. Обе особенности стоит знать заранее.":
    "Pourquoi cela compte : en Russie, on vote le même jour dans tout le pays, et l'autonomie locale, selon la Constitution, n'appartient pas du tout au pouvoir de l'État. Ces deux particularités valent d'être connues d'avance.",
  "Кто голосует и кого выбирают": "Qui vote et qui est élu",
  "**Статья 32** даёт гражданам право **избирать и быть избранными**. Активное избирательное право наступает в **18 лет**. Пассивное — то есть право самому баллотироваться — зависит от должности.":
    "L'**article 32** donne aux citoyens le droit d'**élire et d'être élus**. Le droit de vote s'acquiert à **18 ans**. Le droit d'être candidat, lui, dépend de la charge.",
  "18 лет": "18 ans",
  "Депутат представительного органа муниципального образования.":
    "Député de l'organe représentatif d'une commune.",
  "Депутат Государственной Думы.": "Député de la Douma d'État.",
  "Глава субъекта Федерации, а также сенатор.": "Chef d'un sujet de la Fédération, et sénateur.",
  "Президент Российской Федерации.": "Président de la Fédération de Russie.",
  "Та же статья называет два исключения: **не имеют права избирать и быть избранными** граждане, признанные судом **недееспособными**, и содержащиеся в местах лишения свободы **по приговору суда**. Заключение под стражу до приговора права голоса не лишает.":
    "Le même article nomme deux exceptions : **n'ont le droit ni d'élire ni d'être élus** les citoyens déclarés **incapables** par un tribunal et ceux qui se trouvent en détention **en exécution d'un jugement**. La détention avant jugement ne prive pas du droit de vote.",
  "С какого возраста можно быть избранным депутатом Государственной Думы?":
    "À partir de quel âge peut-on être élu député à la Douma d'État ?",
  "С 18 лет": "À partir de 18 ans",
  "С 21 года": "À partir de 21 ans",
  "С 30 лет": "À partir de 30 ans",
  "С 35 лет": "À partir de 35 ans",
  "С двадцати одного года. Восемнадцать — для муниципального депутата, тридцать — для сенатора и главы субъекта, тридцать пять — для Президента.":
    "À partir de vingt et un ans. Dix-huit pour un conseiller municipal, trente pour un sénateur et pour le chef d'un sujet, trente-cinq pour le président.",
  "Единый день голосования": "Le jour unique de scrutin",
  "Региональные и муниципальные выборы проводятся по всей стране в один и тот же день — **второе воскресенье сентября**. Выборы Президента и Государственной Думы имеют собственные сроки, но и они привязаны к этому дню, когда совпадают по времени.":
    "Les élections régionales et municipales ont lieu le même jour dans tout le pays — le **deuxième dimanche de septembre**. L'élection du président et celle de la Douma d'État ont leurs propres échéances, mais elles se rattachent aussi à ce jour quand elles tombent au même moment.",
  "Организует выборы система комиссий: **Центральная избирательная комиссия**, комиссии субъектов, территориальные и **участковые** комиссии. На участках работают наблюдатели от кандидатов и партий.":
    "Les élections sont organisées par un système de commissions : la **Commission électorale centrale**, les commissions des sujets, les commissions territoriales et les commissions de **bureau de vote**. Dans les bureaux travaillent des observateurs des candidats et des partis.",
  "Партии и референдум": "Les partis et le référendum",
  "**Статья 13** гарантирует **многопартийность**. Порядок создания партий определяет отдельный федеральный закон: он требует определённой численности и наличия **региональных отделений** более чем в половине субъектов Федерации.":
    "L'**article 13** garantit le **multipartisme**. La création des partis est réglée par une loi fédérale particulière : elle exige un effectif minimal et des **sections régionales** dans plus de la moitié des sujets de la Fédération.",
  "**Референдум** назван в **статье 3** высшим непосредственным выражением власти народа, наряду со свободными выборами. Его назначает **Президент** в порядке, установленном федеральным конституционным законом. Общероссийский референдум проводился дважды: в 1991 и 1993 годах.":
    "Le **référendum** est nommé à l'**article 3** comme l'expression directe la plus haute du pouvoir du peuple, à côté des élections libres. Il est convoqué par le **président** dans les formes fixées par une loi constitutionnelle fédérale. Un référendum de toute la Russie a eu lieu deux fois : en 1991 et en 1993.",
  "Местное самоуправление": "L'autonomie locale",
  "**Статья 12** содержит формулировку, удивляющую многих: органы местного самоуправления **не входят в систему органов государственной власти**. Местное самоуправление в пределах своих полномочий **самостоятельно**, и ему посвящена отдельная, восьмая глава Конституции.":
    "L'**article 12** contient une formule qui étonne beaucoup de gens : les organes de l'autonomie locale **n'appartiennent pas au système des organes du pouvoir de l'État**. Dans la limite de ses attributions, l'autonomie locale est **indépendante**, et un chapitre à part lui est consacré, le huitième.",
  "Оно осуществляется через **местные референдумы**, **выборы** и выборные органы. Виды муниципальных образований — **городской округ**, **муниципальный округ**, **муниципальный район** и **поселение**.":
    "Elle s'exerce par des **référendums locaux**, des **élections** et des organes élus. Les types de communes sont l'**arrondissement urbain**, l'**arrondissement municipal**, le **district municipal** et la **localité**.",
  "Что решают на местах": "Ce qui se décide sur place",
  "Благоустройство, местные дороги, жилищно-коммунальное хозяйство, вывоз мусора, содержание школ и детских садов.":
    "L'aménagement, les routes locales, le logement et les services urbains, l'enlèvement des ordures, l'entretien des écoles et des jardins d'enfants.",
  "Местный бюджет": "Le budget local",
  "Муниципалитеты самостоятельно формируют, утверждают и исполняют собственный бюджет и устанавливают местные налоги.":
    "Les communes établissent, adoptent et exécutent elles-mêmes leur propre budget et fixent les impôts locaux.",
  "Глава муниципалитета": "Le chef de la commune",
  "Порядок избрания различается: где-то прямые выборы, где-то избрание депутатами из своего состава или по конкурсу.":
    "Le mode de désignation varie : ici l'élection directe, là l'élection par les conseillers en leur sein ou par concours.",
  "Государственные полномочия": "Les compétences de l'État",
  "Их можно передать муниципалитету законом, но только вместе с деньгами на исполнение.":
    "On peut les transférer à une commune par une loi, mais seulement avec l'argent qui va avec.",
  "Когда проводится единый день голосования?": "Quand a lieu le jour unique de scrutin ?",
  "В первое воскресенье марта": "Le premier dimanche de mars",
  "Во второе воскресенье сентября": "Le deuxième dimanche de septembre",
  "В последнее воскресенье ноября": "Le dernier dimanche de novembre",
  "Даты назначаются в каждом регионе отдельно":
    "Les dates sont fixées séparément dans chaque région",
  "Второе воскресенье сентября. Единый день был введён, чтобы региональные и местные кампании не шли круглый год вразнобой.":
    "Le deuxième dimanche de septembre. Le jour unique a été instauré pour que les campagnes régionales et locales ne se succèdent pas toute l'année en ordre dispersé.",
  "Входят ли органы местного самоуправления в систему органов государственной власти?":
    "Les organes de l'autonomie locale appartiennent-ils au système des organes du pouvoir de l'État ?",
  "Да, это её нижнее звено": "Oui, ils en sont l'échelon inférieur",
  "Нет: статья 12 прямо говорит, что не входят":
    "Non : l'article 12 dit expressément qu'ils n'y appartiennent pas",
  "Входят только в городах федерального значения":
    "Ils n'y appartiennent que dans les villes de rang fédéral",
  "Входят, если так решит субъект Федерации":
    "Ils y appartiennent si le sujet de la Fédération en décide ainsi",
  "Статья 12 отделяет местное самоуправление от государственной власти и признаёт его самостоятельность в пределах полномочий. Ему посвящена отдельная восьмая глава.":
    "L'article 12 sépare l'autonomie locale du pouvoir de l'État et reconnaît son indépendance dans la limite de ses attributions. Un chapitre à part lui est consacré, le huitième.",
  "**Уполномоченный по правам человека** — федеральный омбудсмен — назначается **Государственной Думой**, а не Президентом, и работает независимо от органов власти. У большинства субъектов есть свой уполномоченный.":
    "Le **commissaire aux droits de l'homme** — le médiateur fédéral — est nommé par la **Douma d'État**, non par le président, et travaille indépendamment des organes du pouvoir. La plupart des sujets ont leur propre commissaire.",
  "Киевская Русь и раздробленность": "La Rus' de Kiev et le morcellement",
  "История России": "L'histoire de la Russie",
  "Почему начинаем отсюда: у русской государственности есть точка отсчёта, и она лежит не в Москве. Первые триста лет центром была не она, и это меняет всю картину.":
    "Pourquoi commencer par là : l'État russe a un point de départ, et il n'est pas à Moscou. Pendant les trois premiers siècles, le centre n'était pas elle, et cela change tout le tableau.",
  "Путь из варяг в греки": "La route des Varègues aux Grecs",
  "Восточные славяне жили племенными союзами по великим рекам, и через их земли шёл торговый **путь «из варяг в греки»** — от Балтики по Волхову и Днепру к Чёрному морю и Константинополю. Города вырастали там, где стоило держать перевоз и склад: **Новгород**, **Смоленск**, **Киев**.":
    "Les Slaves de l'Est vivaient en unions tribales le long des grands fleuves, et par leurs terres passait la **route « des Varègues aux Grecs »** — de la Baltique par le Volkhov et le Dniepr jusqu'à la mer Noire et à Constantinople. Les villes poussaient là où il valait la peine de tenir un passage et un entrepôt : **Novgorod**, **Smolensk**, **Kiev**.",
  "«Повесть временных лет» относит к **862 году** призвание **Рюрика** в Новгород, а к **882-му** — поход **Олега**, который взял Киев и соединил два центра. От этой даты и принято считать начало **Киевской Руси**.":
    "La « Chronique des temps passés » place en **862** l'appel de **Riourik** à Novgorod, et en **882** la campagne d'**Oleg**, qui prit Kiev et réunit les deux centres. C'est de cette date qu'on fait partir la **Rus' de Kiev**.",
  "988 год": "L'an 988",
  "В **988 году** князь **Владимир** принял христианство и крестил Русь. Решение было и политическим: христианский правитель переставал быть для соседей объектом миссии, а страна получала письменность, календарь и связи со всей византийской и латинской Европой.":
    "En **988**, le prince **Vladimir** reçut le christianisme et baptisa la Rus'. La décision était aussi politique : un souverain chrétien cessait d'être pour ses voisins un objet de mission, et le pays recevait l'écriture, le calendrier et des liens avec toute l'Europe byzantine et latine.",
  "Письменность принесла **кириллица**, созданная в IX веке **Кириллом и Мефодием** для славянских языков. Богослужение шло не на греческом, а на понятном языке, и это на столетия определило, какой будет книжность на Руси.":
    "L'écriture vint avec le **cyrillique**, créé au IXe siècle par **Cyrille et Méthode** pour les langues slaves. La liturgie ne se faisait pas en grec mais dans une langue compréhensible, et cela détermina pour des siècles ce que serait la culture écrite de la Rus'.",
  "В каком году произошло Крещение Руси?": "En quelle année eut lieu le baptême de la Rus' ?",
  "В 862 году": "En 862",
  "В 882 году": "En 882",
  "В 988 году": "En 988",
  "В 1097 году": "En 1097",
  "988 год, при князе Владимире. 862-й — призвание Рюрика по летописи, 882-й — объединение Новгорода и Киева, 1097-й — Любечский съезд.":
    "En 988, sous le prince Vladimir. 862 est l'appel de Riourik selon la chronique, 882 la réunion de Novgorod et de Kiev, 1097 la diète de Lioubetch.",
  "Ярослав Мудрый": "Iaroslav le Sage",
  "При **Ярославе Мудром** (XI век) Киев достиг расцвета. Появился первый письменный свод законов — **«Русская Правда»**, в котором вместо кровной мести устанавливались денежные штрафы. Была построена **София Киевская**, а дочери Ярослава вышли замуж за королей Франции, Норвегии и Венгрии: Русь была частью европейской династической сети.":
    "Sous **Iaroslav le Sage** (XIe siècle), Kiev connut son apogée. Parut le premier recueil de lois écrites, la **Rousskaïa Pravda**, où des amendes en argent remplaçaient la vengeance du sang. On bâtit la **Sainte-Sophie de Kiev**, et les filles de Iaroslav épousèrent les rois de France, de Norvège et de Hongrie : la Rus' faisait partie du réseau dynastique européen.",
  "Раздробленность": "Le morcellement",
  "В **1097 году** князья съехались в **Любече** и постановили: **каждый держит свою отчину**, то есть земли, унаследованные от отца. Съезд собирали, чтобы прекратить усобицы, а получилось иначе: он закрепил разделение Руси на самостоятельные княжества.":
    "En **1097**, les princes se réunirent à **Lioubetch** et décidèrent : **chacun garde son patrimoine**, c'est-à-dire les terres héritées de son père. On avait convoqué la diète pour mettre fin aux querelles ; il en alla autrement : elle fixa la division de la Rus' en principautés autonomes.",
  "Новгородская республика": "La république de Novgorod",
  "Князя приглашали и могли изгнать, а решало вече — собрание горожан. Ближе к городской республике, чем к княжеству.":
    "Le prince était invité et pouvait être chassé, et c'est le vétché, l'assemblée des habitants, qui décidait. Plus proche d'une république urbaine que d'une principauté.",
  "Владимиро-Суздальская земля": "La terre de Vladimir-Souzdal",
  "Северо-восток, куда при Андрее Боголюбском сместился центр силы. Из этих земель позже вырастет Москва.":
    "Le nord-est, où le centre de gravité se déplaça sous André Bogolioubski. C'est de ces terres que sortira Moscou.",
  "Галицко-Волынская земля": "La terre de Galicie-Volhynie",
  "Юго-запад, тесно связанный с Польшей и Венгрией.":
    "Le sud-ouest, étroitement lié à la Pologne et à la Hongrie.",
  "Владимир Мономах": "Vladimir Monomaque",
  "Последний, кому удалось на время собрать Русь под одной рукой, в начале XII века.":
    "Le dernier à réussir, pour un temps, à rassembler la Rus' sous une seule main, au début du XIIe siècle.",
  "Как назывался первый письменный свод законов Руси?":
    "Comment s'appelait le premier recueil de lois écrites de la Rus' ?",
  "Судебник": "Le Soudebnik",
  "Русская Правда": "La Rousskaïa Pravda",
  "Соборное уложение": "Le Code de 1649",
  "Стоглав": "Le Stoglav",
  "«Русская Правда» при Ярославе Мудром. Судебник — свод Ивана III 1497 года, а Соборное уложение — 1649 года: три разных документа из трёх разных эпох.":
    "La Rousskaïa Pravda, sous Iaroslav le Sage. Le Soudebnik est le recueil d'Ivan III de 1497, et le Code du Concile celui de 1649 : trois documents différents de trois époques différentes.",
  "Нашествие": "L'invasion",
  "В **1237–1240 годах** на Русь пришли войска **Батыя**. Рязань, Владимир, десятки городов были взяты и сожжены; в **1240 году** пал **Киев**. Раздробленность, начатая в Любече, не позволила выставить общее войско, и княжества гибли поодиночке.":
    "En **1237-1240**, les armées de **Batou** arrivèrent sur la Rus'. Riazan, Vladimir, des dizaines de villes furent prises et brûlées ; en **1240** tomba **Kiev**. Le morcellement commencé à Lioubetch empêcha de lever une armée commune, et les principautés périrent l'une après l'autre.",
  "К этому времени относится и **«Слово о полку Игореве»** — поэма о неудачном походе против половцев, главный памятник литературы домонгольской Руси. Её тема — та же беда: князья не действуют вместе.":
    "De cette époque date aussi le **Dit de la campagne d'Igor** — un poème sur une expédition manquée contre les Coumans, le grand monument littéraire de la Rus' d'avant les Mongols. Son sujet est le même malheur : les princes n'agissent pas ensemble.",
  "Что постановил Любечский съезд князей 1097 года?":
    "Qu'a décidé la diète des princes à Lioubetch en 1097 ?",
  "Что каждый князь держит свою отчину": "Que chaque prince garde son patrimoine",
  "Что Русь переходит к единому наследованию": "Que la Rus' passe à une succession unique",
  "Что столица переносится во Владимир": "Que la capitale est transférée à Vladimir",
  "Что вводится единый свод законов": "Qu'un recueil de lois unique est instauré",
  "Съезд собирали ради прекращения усобиц, но он закрепил разделение земель между княжескими линиями. Через сто сорок лет это обернулось невозможностью выставить общее войско.":
    "La diète avait été convoquée pour mettre fin aux querelles, mais elle fixa le partage des terres entre les lignées princières. Cent quarante ans plus tard, cela se traduisit par l'impossibilité de lever une armée commune.",
  "**Киевская Русь** — общее наследие России, Украины и Беларуси, и историография в каждой из трёх стран расставляет здесь свои акценты. Даты и события при этом одни и те же.":
    "La **Rus' de Kiev** est un héritage commun de la Russie, de l'Ukraine et de la Biélorussie, et l'historiographie de chacun des trois pays y met ses propres accents. Les dates et les événements, eux, sont les mêmes.",
  "Ордынское время и возвышение Москвы": "Le temps de la Horde et la montée de Moscou",
  "Почему это важно: за двести сорок лет зависимости центр русских земель окончательно переместился на северо-восток, и незначительный городок стал столицей. Как это вышло — вопрос не случая, а расчёта.":
    "Pourquoi cela compte : en deux cent quarante ans de dépendance, le centre des terres russes se déplaça définitivement vers le nord-est, et une bourgade sans importance devint la capitale. Comment cela s'est fait n'est pas une affaire de hasard mais de calcul.",
  "Как была устроена зависимость": "Comment la dépendance était faite",
  "Ордынское владычество не означало прямого управления. Князья оставались на местах, но получали от хана **ярлык** — грамоту на право княжить, — и собирали **дань**, которую называли **выходом**. Сначала её собирали ханские сборщики, **баскаки**, потом это право перешло к самим князьям, и здесь начинается история Москвы.":
    "La domination de la Horde ne signifiait pas une administration directe. Les princes restaient en place, mais recevaient du khan un **iarlyk** — une charte donnant le droit de régner — et levaient le **tribut**, qu'on appelait la **sortie**. Il fut d'abord levé par les percepteurs du khan, les **baskaks**, puis ce droit passa aux princes eux-mêmes, et c'est là que commence l'histoire de Moscou.",
  "Одновременно с востока давила Орда, а с запада шли другие противники. **Александр Невский** разбил шведов на Неве в **1240 году** и Ливонский орден на льду Чудского озера в **1242-м**, при этом с Ордой он выбрал путь соглашения: воевать на два фронта было нельзя.":
    "En même temps que la Horde pressait à l'est, d'autres adversaires venaient de l'ouest. **Alexandre Nevski** battit les Suédois sur la Neva en **1240** et l'ordre de Livonie sur la glace du lac Peïpous en **1242**, tout en choisissant l'entente avec la Horde : on ne pouvait pas se battre sur deux fronts.",
  "Расчёт московских князей": "Le calcul des princes de Moscou",
  "**Иван Калита** (1325–1340) добился права **собирать дань** со всех русских земель и отвозить её в Орду. Часть оседала в Москве. Он же добился переноса в Москву **митрополичьей кафедры** — и город стал не только богатым, но и церковным центром.":
    "**Ivan Kalita** (1325-1340) obtint le droit de **lever le tribut** sur toutes les terres russes et de le porter à la Horde. Une partie restait à Moscou. C'est lui aussi qui obtint le transfert à Moscou du **siège métropolitain** — et la ville devint non seulement riche, mais un centre de l'Église.",
  "Дань через свои руки": "Le tribut par ses propres mains",
  "Право собирать выход давало деньги и власть над соседями, которые платили через Москву.":
    "Le droit de lever la sortie donnait de l'argent et du pouvoir sur les voisins, qui payaient par Moscou.",
  "Митрополит в Москве": "Le métropolite à Moscou",
  "Церковный центр придавал городу вес, которого не давало его положение на карте.":
    "Un centre ecclésiastique donnait à la ville un poids que sa position sur la carte ne lui donnait pas.",
  "Скупка земель": "Le rachat des terres",
  "Московские князья покупали и выменивали села и волости, расширяя владения без войны.":
    "Les princes de Moscou achetaient et échangeaient des villages et des cantons, agrandissant leurs domaines sans guerre.",
  "Наследование от отца к сыну": "La succession de père en fils",
  "В Москве закрепился прямой порядок, тогда как в других землях княжества дробились между братьями.":
    "À Moscou s'établit l'ordre direct, alors qu'ailleurs les principautés se divisaient entre les frères.",
  "Что такое ярлык в ордынское время?": "Qu'est-ce qu'un iarlyk au temps de la Horde ?",
  "Дань, которую платили Орде": "Le tribut que l'on payait à la Horde",
  "Ханская грамота на право княжить": "Une charte du khan donnant le droit de régner",
  "Знак отличия ордынского воина": "L'insigne d'un guerrier de la Horde",
  "Договор между княжествами": "Un traité entre principautés",
  "Ярлык давал право на княжение, и за него между князьями шла постоянная борьба. Дань называлась выходом, а собирали её сначала баскаки, потом сами князья.":
    "Le iarlyk donnait le droit de régner, et les princes se le disputaient sans cesse. Le tribut s'appelait la sortie, et il fut levé d'abord par les baskaks, puis par les princes eux-mêmes.",
  "Куликово поле": "Le champ de Koulikovo",
  "В **1380 году** войско под началом московского князя **Дмитрия Донского** разбило на **Куликовом поле** армию **Мамая**. Победа не сняла зависимости — через два года Тохтамыш сжёг Москву, — но показала, что Орду можно побеждать, и что собирать общее войско способна именно Москва.":
    "En **1380**, l'armée conduite par le prince de Moscou **Dmitri Donskoï** battit sur le **champ de Koulikovo** celle de **Mamaï**. La victoire ne leva pas la dépendance — deux ans plus tard, Tokhtamych brûla Moscou — mais elle montra qu'on pouvait vaincre la Horde, et que Moscou était capable de lever une armée commune.",
  "В каком году произошла Куликовская битва?":
    "En quelle année eut lieu la bataille de Koulikovo ?",
  "В 1240 году": "En 1240",
  "В 1242 году": "En 1242",
  "В 1380 году": "En 1380",
  "В 1480 году": "En 1480",
  "1380 год, Дмитрий Донской против Мамая. 1240 и 1242 — победы Александра Невского на западе, 1480 — стояние на Угре, которым зависимость закончилась.":
    "En 1380, Dmitri Donskoï contre Mamaï. 1240 et 1242 sont les victoires d'Alexandre Nevski à l'ouest, 1480 la station sur l'Ougra, qui mit fin à la dépendance.",
  "Иван III": "Ivan III",
  "**Иван III** (1462–1505) завершил дело. В **1478 году** он присоединил **Новгород**, положив конец его вечевой республике, а в **1480-м** произошло **стояние на реке Угре**: два войска простояли друг против друга и разошлись без сражения. Этой датой принято обозначать **конец ордынской зависимости**.":
    "**Ivan III** (1462-1505) acheva l'ouvrage. En **1478**, il rattacha **Novgorod**, mettant fin à sa république du vétché, et en **1480** eut lieu la **station sur la rivière Ougra** : deux armées se firent face et se séparèrent sans combat. C'est par cette date qu'on marque la **fin de la dépendance envers la Horde**.",
  "При нём же появились **Судебник 1497 года** — единый свод законов для всей страны, — титул **«государь всея Руси»** и **двуглавый орёл** в качестве герба. Тогда же в Москве построили кирпичный Кремль, который стоит и сегодня.":
    "Sous lui parurent aussi le **Soudebnik de 1497** — un recueil de lois unique pour tout le pays —, le titre de **souverain de toute la Rus'** et l'**aigle bicéphale** comme armoiries. C'est alors qu'on bâtit à Moscou le Kremlin de brique, qui est encore debout.",
  "К этому времени относится и **Андрей Рублёв** с его «Троицей» — вершина русской иконописи, написанная в начале XV века.":
    "De cette époque date aussi **Andreï Roublev** et sa « Trinité » — le sommet de la peinture d'icônes russe, faite au début du XVe siècle.",
  "Чем закончилось стояние на реке Угре в 1480 году?":
    "Comment s'acheva la station sur la rivière Ougra en 1480 ?",
  "Крупным сражением и разгромом Орды": "Par une grande bataille et la déroute de la Horde",
  "Войска разошлись без битвы, и ордынская зависимость закончилась":
    "Les armées se séparèrent sans combat, et la dépendance envers la Horde prit fin",
  "Москва признала власть хана ещё на сто лет":
    "Moscou reconnut l'autorité du khan pour cent ans encore",
  "Присоединением Новгорода": "Par le rattachement de Novgorod",
  "Сражения не было: войска простояли по берегам и разошлись. Именно этой датой обозначают конец зависимости, а Новгород был присоединён двумя годами раньше.":
    "Il n'y eut pas de bataille : les armées restèrent sur les deux rives et se séparèrent. C'est par cette date qu'on marque la fin de la dépendance, et Novgorod avait été rattaché deux ans plus tôt.",
  "**Куликовская битва** и **стояние на Угре** разделены ровно столетием. Первая была громкой победой, но зависимости не сняла; вторая прошла без боя и стала концом эпохи.":
    "La **bataille de Koulikovo** et la **station sur l'Ougra** sont séparées par exactement un siècle. La première fut une victoire éclatante, mais ne leva pas la dépendance ; la seconde se passa sans combat et marqua la fin d'une époque.",
  "Московское царство": "Le tsarat de Moscou",
  "Почему это важно: за полтора столетия страна получает царя, теряет династию, едва не исчезает в Смуте и выбирает новую власть собором. Здесь же закрепляется крепостное право, которое продержится двести лет.":
    "Pourquoi cela compte : en un siècle et demi, le pays se donne un tsar, perd sa dynastie, manque de disparaître dans le Temps des troubles et choisit un nouveau pouvoir par une assemblée. C'est là aussi que s'installe le servage, qui tiendra deux cents ans.",
  "Первый царь": "Le premier tsar",
  "В **1547 году** **Иван IV** венчался на царство — до него московские правители звались великими князьями. Начало правления было временем реформ: **Судебник 1550 года**, созыв **земских соборов** — сословных собраний, — упорядочение управления и церковные постановления Стоглавого собора.":
    "En **1547**, **Ivan IV** fut couronné tsar — avant lui, les souverains de Moscou s'appelaient grands princes. Le début du règne fut un temps de réformes : le **Soudebnik de 1550**, la convocation des **assemblées de la terre** — des assemblées d'états —, la mise en ordre de l'administration et les décisions ecclésiastiques du concile des Cent Chapitres.",
  "Тогда же расширились границы: в **1552 году** была взята **Казань**, в **1556-м** — **Астрахань**, и Волга целиком стала русской рекой. В 1580-е годы отряд **Ермака** начал присоединение **Сибири** — движение, которое за семьдесят лет доведёт русских землепроходцев до Тихого океана.":
    "Les frontières s'étendirent alors : en **1552** fut prise **Kazan**, en **1556** **Astrakhan**, et la Volga devint tout entière un fleuve russe. Dans les années 1580, la troupe d'**Iermak** commença le rattachement de la **Sibérie** — un mouvement qui, en soixante-dix ans, mènera les explorateurs russes jusqu'au Pacifique.",
  "Опричнина": "L'opritchnina",
  "С **1565 по 1572 год** царь разделил государство на **опричнину**, управляемую лично им, и остальную землю. Годы опричнины — это массовые казни, конфискации, разгром Новгорода и разорение центральных уездов. Вместе с затяжной и проигранной **Ливонской войной** это надолго подорвало хозяйство страны.":
    "De **1565 à 1572**, le tsar partagea l'État entre l'**opritchnina**, qu'il administrait lui-même, et le reste du pays. Les années de l'opritchnina, ce sont des exécutions de masse, des confiscations, le sac de Novgorod et la ruine des districts du centre. Avec la longue **guerre de Livonie**, perdue, cela mina durablement l'économie du pays.",
  "В **1589 году** в Москве было учреждено **патриаршество**: русская церковь стала полностью самостоятельной.":
    "En **1589** fut institué à Moscou le **patriarcat** : l'Église russe devint pleinement indépendante.",
  "Кто первым в русской истории венчался на царство?":
    "Qui fut le premier de l'histoire russe à être couronné tsar ?",
  "Иван IV": "Ivan IV",
  "Михаил Романов": "Michel Romanov",
  "Пётр I": "Pierre Ier",
  "Иван IV, в 1547 году. Иван III носил титул государя всея Руси, а Пётр I два века спустя примет титул императора: три ступени одного восхождения.":
    "Ivan IV, en 1547. Ivan III portait le titre de souverain de toute la Rus', et Pierre Ier prendra deux siècles plus tard celui d'empereur : trois marches d'une même montée.",
  "Смутное время": "Le Temps des troubles",
  "После смерти сына Ивана IV династия пресеклась, и с **1598 по 1613 год** страна прошла через **Смуту**: борьбу за престол, самозванцев, объявлявших себя чудом спасшимся царевичем, страшный голод начала века и **польско-литовскую интервенцию**. В Москве стоял иноземный гарнизон, и государство фактически перестало существовать.":
    "Après la mort du fils d'Ivan IV, la dynastie s'éteignit, et de **1598 à 1613** le pays traversa les **Troubles** : la lutte pour le trône, des imposteurs se disant le tsarévitch miraculeusement sauvé, une terrible famine au début du siècle et l'**intervention polono-lituanienne**. Une garnison étrangère tenait Moscou, et l'État cessa de fait d'exister.",
  "Выход нашёлся снизу. В Нижнем Новгороде земский староста **Кузьма Минин** собрал средства, а князь **Дмитрий Пожарский** возглавил ополчение. В **1612 году** Москва была освобождена — это событие и лежит в основе **Дня народного единства** 4 ноября.":
    "L'issue vint d'en bas. À Nijni Novgorod, l'ancien de la ville **Kouzma Minine** réunit les fonds, et le prince **Dmitri Pojarski** prit la tête de la levée. En **1612**, Moscou fut libérée — et c'est cet événement qui fonde la **Journée de l'unité nationale**, le 4 novembre.",
  "В **1613 году** **Земский собор** избрал царём шестнадцатилетнего **Михаила Романова**. Династия **Романовых** будет править триста четыре года.":
    "En **1613**, l'**assemblée de la terre** élut tsar **Michel Romanov**, âgé de seize ans. La dynastie des **Romanov** régnera trois cent quatre ans.",
  "Кого Земский собор избрал царём в 1613 году?":
    "Qui l'assemblée de la terre élut-elle tsar en 1613 ?",
  "Бориса Годунова": "Boris Godounov",
  "Михаила Романова": "Michel Romanov",
  "Дмитрия Пожарского": "Dmitri Pojarski",
  "Владислава, королевича польского": "Ladislas, prince de Pologne",
  "Михаила Романова, и с него начинается династия, правившая до 1917 года. Пожарский возглавлял ополчение, но на престол не претендовал.":
    "Michel Romanov, et c'est de lui que part la dynastie qui régna jusqu'en 1917. Pojarski conduisait la levée, mais ne prétendait pas au trône.",
  "Век семнадцатый": "Le XVIIe siècle",
  "**Соборное уложение 1649 года** — свод законов, действовавший почти двести лет, — окончательно закрепило **крепостное право**: сыск беглых крестьян стал бессрочным, и крестьянин был навсегда прикреплён к земле и владельцу.":
    "Le **Code du Concile de 1649** — un recueil de lois en vigueur près de deux cents ans — fixa définitivement le **servage** : la recherche des paysans en fuite devint sans limite de temps, et le paysan fut attaché pour toujours à la terre et à son maître.",
  "В середине века патриарх **Никон** провёл церковную реформу, исправив книги и обряды по греческому образцу. Часть верующих её не приняла: произошёл **раскол**, и **старообрядцы** на столетия оказались вне господствующей церкви.":
    "Au milieu du siècle, le patriarche **Nikon** mena une réforme de l'Église, corrigeant les livres et les rites sur le modèle grec. Une partie des croyants ne l'accepta pas : ce fut le **schisme**, et les **vieux-croyants** restèrent des siècles hors de l'Église dominante.",
  "1649 · Соборное уложение": "1649 · Le Code du Concile",
  "Бессрочный сыск беглых. Крепостное право приобретает окончательный вид.":
    "Recherche sans limite de temps des fugitifs. Le servage prend sa forme définitive.",
  "1654 · Переяславская рада": "1654 · La rada de Pereïaslav",
  "Войско Запорожское переходит под власть московского царя, и начинается долгая война с Речью Посполитой.":
    "L'armée zaporogue passe sous l'autorité du tsar de Moscou, et commence une longue guerre avec la République des Deux Nations.",
  "1648 · До Тихого океана": "1648 · Jusqu'au Pacifique",
  "Семён Дежнёв проходит проливом между Азией и Америкой. Освоение Сибири занимает меньше века.":
    "Semion Dejnev franchit le détroit entre l'Asie et l'Amérique. La conquête de la Sibérie prend moins d'un siècle.",
  "Раскол": "Le schisme",
  "Реформа Никона делит верующих. Старообрядчество сохранится до наших дней.":
    "La réforme de Nikon divise les croyants. Les vieux-croyants subsisteront jusqu'à nos jours.",
  "Что окончательно закрепило Соборное уложение 1649 года?":
    "Qu'est-ce que le Code du Concile de 1649 a définitivement fixé ?",
  "Патриаршество": "Le patriarcat",
  "Крепостное право": "Le servage",
  "Право созывать земские соборы": "Le droit de convoquer les assemblées de la terre",
  "Присоединение Сибири": "Le rattachement de la Sibérie",
  "Сыск беглых крестьян стал бессрочным, и крестьянин оказался прикреплён к земле навсегда. Отменят крепостное право только в 1861 году.":
    "La recherche des paysans en fuite devint sans limite de temps, et le paysan se trouva attaché à la terre pour toujours. Le servage ne sera aboli qu'en 1861.",
  "**Земский собор** — не парламент. Он собирался нерегулярно, по решению власти, и представлял сословия, а не избирателей. Но именно собор в 1613 году выбрал царя, и этот прецедент остался в памяти.":
    "L'**assemblée de la terre** n'est pas un parlement. Elle se réunissait sans régularité, sur décision du pouvoir, et représentait des états, non des électeurs. Mais c'est bien elle qui, en 1613, choisit un tsar, et ce précédent est resté dans les mémoires.",
  "Российская империя": "L'Empire de Russie",
  "Почему это важно: за двести лет страна перестраивается сверху дважды — при Петре и при Александре II. Оба раза реформы идут от власти, а не снизу, и оба раза не доводятся до конца.":
    "Pourquoi cela compte : en deux cents ans, le pays est refait par en haut à deux reprises, sous Pierre et sous Alexandre II. Les deux fois, les réformes viennent du pouvoir et non d'en bas, et les deux fois elles restent inachevées.",
  "**Пётр I** правил с конца XVII века до **1725 года** и перестроил государство целиком. Он создал **регулярную армию и флот**, заменил приказы **коллегиями**, учредил **Сенат**, ввёл **Табель о рангах**, по которой служебное положение зависело от чина, а не от происхождения, и перевёл страну на новый календарь.":
    "**Pierre Ier** régna de la fin du XVIIe siècle à **1725** et refit l'État tout entier. Il créa une **armée et une flotte régulières**, remplaça les anciens bureaux par des **collèges**, institua le **Sénat**, introduisit la **Table des rangs**, qui faisait dépendre la position du service et non de la naissance, et fit passer le pays à un nouveau calendrier.",
  "В **1703 году** он основал **Санкт-Петербург** и вскоре перенёс туда столицу — она останется там больше двухсот лет. Долгая **Северная война** со Швецией (1700–1721) с победой под **Полтавой** в 1709 году дала выход к Балтике, и в **1721 году** Россия была провозглашена **империей**.":
    "En **1703**, il fonda **Saint-Pétersbourg** et y transféra bientôt la capitale — elle y restera plus de deux cents ans. La longue **guerre du Nord** contre la Suède (1700-1721), avec la victoire de **Poltava** en 1709, ouvrit l'accès à la Baltique, et en **1721** la Russie fut proclamée **empire**.",
  "В каком году Россия была провозглашена империей?":
    "En quelle année la Russie fut-elle proclamée empire ?",
  "В 1703 году": "En 1703",
  "В 1709 году": "En 1709",
  "В 1721 году": "En 1721",
  "В 1762 году": "En 1762",
  "1721 год, по окончании Северной войны. 1703-й — основание Петербурга, 1709-й — Полтавская битва: три даты одного царствования.":
    "En 1721, à la fin de la guerre du Nord. 1703 est la fondation de Pétersbourg, 1709 la bataille de Poltava : trois dates d'un même règne.",
  "Восемнадцатый век": "Le XVIIIe siècle",
  "После Петра наступила эпоха **дворцовых переворотов**: гвардия несколько раз решала, кто займёт престол. **Екатерина II** (1762–1796) расширила границы на юг и запад: в **1783 году** был присоединён **Крым**, а разделы Речи Посполитой отодвинули границу далеко на запад.":
    "Après Pierre vint l'époque des **coups de palais** : la garde décida plusieurs fois qui monterait sur le trône. **Catherine II** (1762-1796) étendit les frontières au sud et à l'ouest : en **1783** fut rattachée la **Crimée**, et les partages de la République des Deux Nations repoussèrent la frontière loin vers l'ouest.",
  "При ней же случилось крупнейшее народное восстание — **пугачёвское** (1773–1775), охватившее Урал и Поволжье. Просвещённые замыслы вроде Уложенной комиссии остались на бумаге, а крепостное право стало жёстче, чем прежде.":
    "C'est sous elle qu'eut lieu le plus grand soulèvement populaire, celui de **Pougatchev** (1773-1775), qui embrasa l'Oural et la région de la Volga. Les projets éclairés comme la Commission législative restèrent sur le papier, et le servage devint plus dur qu'auparavant.",
  "1812 год": "L'année 1812",
  "В **1812 году** армия Наполеона вошла в Россию. После **Бородинского сражения** русская армия под началом **Кутузова** оставила Москву, которая почти целиком сгорела. Отступление французов зимой обернулось катастрофой: из огромной армии вернулись немногие.":
    "En **1812**, l'armée de Napoléon entra en Russie. Après la **bataille de Borodino**, l'armée russe conduite par **Koutouzov** abandonna Moscou, qui brûla presque entièrement. La retraite des Français en hiver tourna à la catastrophe : de cette immense armée, peu revinrent.",
  "Война получила название **Отечественной**, а поход русской армии в Европу привёл её офицеров в Париж. Вернувшись, часть из них создала тайные общества, и в **1825 году** произошло восстание **декабристов** на Сенатской площади — первое выступление за конституцию в русской истории.":
    "La guerre reçut le nom de **guerre patriotique**, et la campagne de l'armée russe en Europe conduisit ses officiers jusqu'à Paris. De retour, une partie d'entre eux forma des sociétés secrètes, et en **1825** eut lieu le soulèvement des **décembristes** sur la place du Sénat — la première prise de parole pour une constitution dans l'histoire russe.",
  "Что произошло в 1812 году?": "Que s'est-il passé en 1812 ?",
  "Восстание декабристов": "Le soulèvement des décembristes",
  "Отечественная война против армии Наполеона":
    "La guerre patriotique contre l'armée de Napoléon",
  "Отмена крепостного права": "L'abolition du servage",
  "Провозглашение империи": "La proclamation de l'empire",
  "Вторжение Наполеона, Бородино, пожар Москвы и гибель Великой армии на обратном пути. Восстание декабристов — 1825 год, отмена крепостного права — 1861-й.":
    "L'invasion de Napoléon, Borodino, l'incendie de Moscou et la perte de la Grande Armée sur le chemin du retour. Le soulèvement des décembristes est de 1825, l'abolition du servage de 1861.",
  "Великие реформы": "Les grandes réformes",
  "**19 февраля 1861 года** **Александр II** подписал манифест об **отмене крепостного права**. Двадцать три миллиона человек получили личную свободу — но землю пришлось выкупать, и выкупные платежи легли на крестьян на десятилетия вперёд.":
    "Le **19 février 1861**, **Alexandre II** signa le manifeste d'**abolition du servage**. Vingt-trois millions de personnes reçurent la liberté personnelle — mais il fallut racheter la terre, et les paiements de rachat pesèrent sur les paysans des décennies durant.",
  "Земская реформа": "La réforme des zemstvos",
  "1864 год: выборные органы местного самоуправления, занимавшиеся школами, больницами и дорогами.":
    "1864 : des organes élus d'autonomie locale, qui s'occupaient des écoles, des hôpitaux et des routes.",
  "Судебная реформа": "La réforme judiciaire",
  "1864 год: гласный суд, состязательность, адвокатура и суд присяжных.":
    "1864 : procès public, débat contradictoire, barreau et jury.",
  "Военная реформа": "La réforme militaire",
  "1874 год: всеобщая воинская повинность вместо рекрутских наборов.":
    "1874 : le service militaire universel remplace les levées de recrues.",
  "Транссиб": "Le Transsibérien",
  "Строительство с 1891 года: самая длинная железная дорога в мире связала Москву с Тихим океаном.":
    "Chantier ouvert en 1891 : la plus longue voie ferrée du monde relia Moscou au Pacifique.",
  "Реформы не сняли напряжения. **Революция 1905 года** заставила власть издать **Манифест 17 октября**, которым были обещаны гражданские свободы и созвана **Государственная дума** — первый в русской истории выборный законодательный орган. **Столыпинская реформа** попыталась создать слой самостоятельных крестьян-собственников, но времени не хватило: в **1914 году** Россия вступила в **Первую мировую войну**.":
    "Les réformes ne dissipèrent pas les tensions. La **révolution de 1905** obligea le pouvoir à publier le **Manifeste du 17 octobre**, qui promettait des libertés civiles et convoquait la **Douma d'État** — le premier organe législatif élu de l'histoire russe. La **réforme de Stolypine** tenta de créer une couche de paysans propriétaires indépendants, mais le temps manqua : en **1914**, la Russie entra dans la **Première Guerre mondiale**.",
  "Тот же век дал мировую культуру: **Пушкин**, **Гоголь**, **Толстой**, **Достоевский**, **Чехов** в литературе, **Чайковский**, **Мусоргский**, **Римский-Корсаков** в музыке, **Менделеев** и **Павлов** в науке.":
    "Le même siècle donna au monde sa culture : **Pouchkine**, **Gogol**, **Tolstoï**, **Dostoïevski**, **Tchekhov** en littérature, **Tchaïkovski**, **Moussorgski**, **Rimski-Korsakov** en musique, **Mendeleïev** et **Pavlov** en science.",
  "В каком году было отменено крепостное право?": "En quelle année le servage fut-il aboli ?",
  "В 1825 году": "En 1825",
  "В 1861 году": "En 1861",
  "В 1874 году": "En 1874",
  "В 1905 году": "En 1905",
  "19 февраля 1861 года, манифест Александра II. Личную свободу получили около двадцати трёх миллионов человек, но землю им пришлось выкупать.":
    "Le 19 février 1861, par le manifeste d'Alexandre II. Environ vingt-trois millions de personnes reçurent la liberté personnelle, mais elles durent racheter la terre.",
  "**Государственная дума** появилась в 1906 году, после революции 1905-го, и была распущена в 1917-м. Нынешняя Дума — не её продолжение: она создана Конституцией 1993 года, хотя имя взято оттуда.":
    "La **Douma d'État** est née en 1906, après la révolution de 1905, et fut dissoute en 1917. La Douma d'aujourd'hui n'en est pas la suite : elle est créée par la Constitution de 1993, même si le nom en vient.",
  "1917 год и Гражданская война": "1917 et la guerre civile",
  "Почему это важно: в 1917 году революций было две, а не одна, и между ними прошло восемь месяцев. Кто их различает, тот понимает и всё, что было дальше.":
    "Pourquoi cela compte : en 1917, il y eut deux révolutions et non une, et huit mois les séparent. Qui les distingue comprend aussi tout ce qui a suivi.",
  "Февраль": "Février",
  "К третьему году войны в столице не хватало хлеба, транспорт не справлялся, а доверие к власти было исчерпано. В конце **февраля 1917 года** волнения в Петрограде переросли в восстание, гарнизон перешёл на сторону улицы, и **2 марта Николай II отрёкся от престола**. Монархия, стоявшая триста четыре года, кончилась за неделю.":
    "À la troisième année de guerre, le pain manquait dans la capitale, les transports ne suivaient plus et la confiance envers le pouvoir était épuisée. Fin **février 1917**, les troubles de Petrograd tournèrent à l'insurrection, la garnison passa du côté de la rue, et le **2 mars Nicolas II abdiqua**. La monarchie, debout depuis trois cent quatre ans, finit en une semaine.",
  "Установилось **двоевластие**: **Временное правительство**, объявившее себя властью до Учредительного собрания, и **Советы рабочих и солдатских депутатов**, за которыми стояли гарнизон и заводы. Ни одна из сторон не решалась ни выйти из войны, ни разделить землю, а именно этого ждала страна.":
    "S'installa un **double pouvoir** : le **gouvernement provisoire**, qui se déclarait au pouvoir jusqu'à l'Assemblée constituante, et les **soviets des députés ouvriers et soldats**, derrière lesquels se tenaient la garnison et les usines. Aucun des deux n'osait ni sortir de la guerre ni partager la terre, et c'est précisément ce que le pays attendait.",
  "Что произошло в феврале и марте 1917 года?":
    "Que s'est-il passé en février et en mars 1917 ?",
  "Большевики взяли власть": "Les bolcheviks ont pris le pouvoir",
  "Николай II отрёкся от престола и установилось двоевластие":
    "Nicolas II a abdiqué et un double pouvoir s'est installé",
  "Был подписан Брестский мир": "La paix de Brest-Litovsk a été signée",
  "Был образован СССР": "L'URSS a été formée",
  "Февральская революция закончилась отречением и появлением двух центров власти — Временного правительства и Советов. Большевики придут к власти в октябре, через восемь месяцев.":
    "La révolution de Février s'acheva par l'abdication et l'apparition de deux centres de pouvoir — le gouvernement provisoire et les soviets. Les bolcheviks prendront le pouvoir en octobre, huit mois plus tard.",
  "Октябрь": "Octobre",
  "**25 октября по старому стилю** — 7 ноября по новому — вооружённые отряды заняли ключевые точки Петрограда, и **II съезд Советов** объявил о переходе власти к Советам. Первыми же актами стали **Декрет о мире** и **Декрет о земле**: именно то, чего Временное правительство не сделало.":
    "Le **25 octobre de l'ancien style** — le 7 novembre du nouveau — des détachements armés occupèrent les points clés de Petrograd, et le **IIe congrès des soviets** annonça le passage du pouvoir aux soviets. Les tout premiers actes furent le **décret sur la paix** et le **décret sur la terre** : exactement ce que le gouvernement provisoire n'avait pas fait.",
  "Выборы в **Учредительное собрание** состоялись, но большевики получили меньшинство. Собрание, созванное в **январе 1918 года**, было распущено после первого же заседания. В **марте 1918 года** был подписан **Брестский мир**: Россия вышла из войны ценой огромных территорий. Тогда же столица вернулась в **Москву**.":
    "Les élections à l'**Assemblée constituante** eurent bien lieu, mais les bolcheviks y furent minoritaires. L'assemblée, réunie en **janvier 1918**, fut dissoute dès sa première séance. En **mars 1918** fut signée la **paix de Brest-Litovsk** : la Russie sortit de la guerre au prix d'immenses territoires. C'est alors aussi que la capitale revint à **Moscou**.",
  "Гражданская война": "La guerre civile",
  "С **1918 по 1922 год** страна воевала сама с собой. Против **красных** выступили **белые** армии на юге, востоке и северо-западе, действовали крестьянские восстания и войска иностранных держав. В **июле 1918 года** в Екатеринбурге были расстреляны **Николай II и его семья**.":
    "De **1918 à 1922**, le pays se fit la guerre à lui-même. Contre les **rouges** se dressèrent les armées **blanches** au sud, à l'est et au nord-ouest, avec des soulèvements paysans et des troupes de puissances étrangères. En **juillet 1918**, **Nicolas II et sa famille** furent fusillés à Iekaterinbourg.",
  "Военный коммунизм": "Le communisme de guerre",
  "Продразвёрстка — принудительное изъятие хлеба у крестьян, запрет торговли, всеобщая трудовая повинность.":
    "La réquisition — la saisie forcée du grain chez les paysans —, l'interdiction du commerce, le travail obligatoire pour tous.",
  "Красный и белый террор": "La terreur rouge et la terreur blanche",
  "Массовые казни велись обеими сторонами. Счёт жертв шёл на сотни тысяч.":
    "Les exécutions de masse furent le fait des deux camps. Les victimes se comptaient par centaines de milliers.",
  "Голод 1921–1922 годов": "La famine de 1921-1922",
  "Поволжье и юг: неурожай на разорённой войной земле. Погибли миллионы человек.":
    "La Volga et le sud : une mauvaise récolte sur une terre ruinée par la guerre. Des millions de personnes périrent.",
  "Эмиграция": "L'émigration",
  "Страну покинули около двух миллионов: офицеры, учёные, писатели, инженеры. Целый слой общества уехал.":
    "Environ deux millions de personnes quittèrent le pays : officiers, savants, écrivains, ingénieurs. Toute une couche de la société s'en alla.",
  "Что такое продразвёрстка?": "Qu'est-ce que la réquisition du grain ?",
  "Распределение земли между крестьянами": "La répartition de la terre entre les paysans",
  "Принудительное изъятие хлеба у крестьян в годы военного коммунизма":
    "La saisie forcée du grain chez les paysans pendant le communisme de guerre",
  "Система продовольственных карточек в городах":
    "Le système des cartes de rationnement dans les villes",
  "Налог, введённый Столыпиным": "Un impôt instauré par Stolypine",
  "Изъятие велось по разнарядке, без учёта того, что оставалось самому хозяйству. Отказ от продразвёрстки и стал первым шагом новой экономической политики.":
    "La saisie se faisait par quotas, sans tenir compte de ce qui restait à l'exploitation elle-même. C'est l'abandon de la réquisition qui fut le premier pas de la nouvelle politique économique.",
  "НЭП и образование СССР": "La NEP et la formation de l'URSS",
  "К **1921 году** хозяйство было разрушено, а крестьянские восстания и мятеж в Кронштадте показали пределы прежней политики. Была объявлена **новая экономическая политика**: продразвёрстку заменили налогом, разрешили торговлю и мелкое частное предпринимательство. Через несколько лет страна вернулась к довоенному уровню производства.":
    "En **1921**, l'économie était détruite, et les soulèvements paysans comme la révolte de Kronstadt montrèrent les limites de la politique antérieure. Fut proclamée la **nouvelle politique économique** : la réquisition fut remplacée par un impôt, le commerce et la petite entreprise privée furent autorisés. En quelques années, le pays revint au niveau de production d'avant-guerre.",
  "**30 декабря 1922 года** договор об образовании **Союза Советских Социалистических Республик** подписали четыре республики: **РСФСР**, **Украина**, **Белоруссия** и **Закавказская федерация**. Союз просуществует шестьдесят девять лет.":
    "Le **30 décembre 1922**, le traité de formation de l'**Union des républiques socialistes soviétiques** fut signé par quatre républiques : la **RSFSR**, l'**Ukraine**, la **Biélorussie** et la **Fédération de Transcaucasie**. L'Union durera soixante-neuf ans.",
  "Когда был образован Советский Союз?": "Quand l'Union soviétique a-t-elle été formée ?",
  "7 ноября 1917 года": "Le 7 novembre 1917",
  "3 марта 1918 года": "Le 3 mars 1918",
  "30 декабря 1922 года": "Le 30 décembre 1922",
  "5 декабря 1936 года": "Le 5 décembre 1936",
  "30 декабря 1922 года, договором четырёх республик. 1936 год — принятие новой союзной конституции, а не образование Союза.":
    "Le 30 décembre 1922, par le traité de quatre républiques. 1936 est l'adoption d'une nouvelle constitution de l'Union, non la formation de celle-ci.",
  "**Февральская** и **Октябрьская** революции — два разных события 1917 года. Первая свергла монархию, вторая сменила пришедшее ей на смену правительство. Между ними восемь месяцев.":
    "Les révolutions de **Février** et d'**Octobre** sont deux événements différents de 1917. La première a renversé la monarchie, la seconde a remplacé le gouvernement qui lui avait succédé. Huit mois les séparent.",
  "СССР: индустриализация, коллективизация, репрессии":
    "L'URSS : industrialisation, collectivisation, répressions",
  "Почему об этом говорят прямо: за полтора десятилетия страна прошла промышленный рывок и одновременно — голод, лагеря и массовые казни. Это части одной истории, и разделять их значит рассказывать её неверно.":
    "Pourquoi on en parle sans détour : en une quinzaine d'années, le pays a connu un bond industriel et, en même temps, la famine, les camps et les exécutions de masse. Ce sont les morceaux d'une même histoire, et les séparer, c'est la raconter faux.",
  "Курс на индустриализацию": "Le cap sur l'industrialisation",
  "После смерти Ленина в **1924 году** во внутрипартийной борьбе победил **Сталин**. Новая экономическая политика была свёрнута, и с **1928 года** страна перешла к **пятилетним планам**.":
    "Après la mort de Lénine en **1924**, **Staline** l'emporta dans la lutte interne au parti. La nouvelle politique économique fut abandonnée, et à partir de **1928** le pays passa aux **plans quinquennaux**.",
  "**Индустриализация** шла с огромной скоростью. Были построены **Магнитогорский** и **Кузнецкий** комбинаты, **Днепрогэс**, тракторные заводы, **Турксиб**. За десятилетие страна из аграрной стала промышленной, а население городов выросло в разы.":
    "L'**industrialisation** alla à une vitesse énorme. On bâtit les combinats de **Magnitogorsk** et du **Kouzbass**, le **barrage du Dniepr**, des usines de tracteurs, le **Turksib**. En une décennie, le pays passa d'agricole à industriel, et la population des villes fut multipliée.",
  "Средства на это брали внутри страны: у деревни — через закупочные цены и экспорт зерна, у населения — через низкие зарплаты и займы. Оборотной стороной рывка стало то, что описано дальше.":
    "Les moyens furent pris à l'intérieur : à la campagne, par les prix d'achat et l'exportation du grain ; à la population, par de bas salaires et des emprunts. L'envers du bond est ce qui est décrit plus loin.",
  "Коллективизация и голод": "La collectivisation et la famine",
  "С **1929 года** началась **сплошная коллективизация**: крестьянские хозяйства объединялись в колхозы, а зажиточные крестьяне подвергались **раскулачиванию** — конфискации имущества и высылке. Сотни тысяч семей были отправлены в отдалённые районы, многие погибли в дороге и на месте.":
    "À partir de **1929** commença la **collectivisation totale** : les exploitations paysannes furent réunies en kolkhozes, et les paysans aisés soumis au **dékoulakisation** — confiscation des biens et déportation. Des centaines de milliers de familles furent envoyées dans des régions reculées, beaucoup périrent en route ou sur place.",
  "В **1932–1933 годах** зерновые районы охватил **голод**. Он затронул **Украину**, **Поволжье**, **Казахстан**, **Северный Кавказ** и Западную Сибирь. Число погибших исчисляется **миллионами**; точные оценки расходятся, но порядок величины не оспаривается.":
    "En **1932-1933**, les régions céréalières furent frappées par la **famine**. Elle toucha l'**Ukraine**, la **Volga**, le **Kazakhstan**, le **Caucase du Nord** et la Sibérie occidentale. Le nombre de morts se compte en **millions** ; les estimations divergent, mais l'ordre de grandeur n'est pas contesté.",
  "С какого года в СССР начались пятилетние планы?":
    "À partir de quelle année les plans quinquennaux ont-ils commencé en URSS ?",
  "С 1922 года": "À partir de 1922",
  "С 1928 года": "À partir de 1928",
  "С 1936 года": "À partir de 1936",
  "С 1945 года": "À partir de 1945",
  "Первая пятилетка началась в 1928 году, вместе со свёртыванием новой экономической политики. Коллективизация развернётся годом позже.":
    "Le premier plan quinquennal commença en 1928, en même temps qu'était abandonnée la nouvelle politique économique. La collectivisation se déploiera un an plus tard.",
  "ГУЛАГ": "Le Goulag",
  "**ГУЛАГ** — Главное управление лагерей — это система **исправительно-трудовых лагерей**, через которую за годы её существования прошли **миллионы человек**. Заключённые строили каналы, добывали золото и никель, валили лес.":
    "Le **Goulag** — la Direction générale des camps — est le système des **camps de travail correctif**, par lequel sont passés, tout au long de son existence, des **millions de personnes**. Les détenus bâtissaient des canaux, extrayaient l'or et le nickel, abattaient la forêt.",
  "Беломорканал": "Le canal de la mer Blanche",
  "Построен в 1931–1933 годах силами заключённых. Смертность на стройке была крайне высокой.":
    "Bâti en 1931-1933 par les détenus. La mortalité sur le chantier fut extrêmement élevée.",
  "Колыма": "La Kolyma",
  "Золотые прииски Дальнего Востока. Название стало нарицательным обозначением самых тяжёлых лагерей.":
    "Les mines d'or de l'Extrême-Orient. Le nom est devenu la désignation ordinaire des camps les plus durs.",
  "Норильск": "Norilsk",
  "Город и комбинат за полярным кругом, построенные лагерным трудом.":
    "Une ville et un combinat au-delà du cercle polaire, bâtis par le travail des camps.",
  "Статья Уголовного кодекса о контрреволюционных преступлениях, по которой были осуждены миллионы.":
    "L'article du code pénal sur les crimes contre-révolutionnaires, sous lequel des millions furent condamnés.",
  "Отдельная страница — **депортации народов**. В годы войны и после неё с мест проживания были насильственно выселены целые народы: поволжские немцы, крымские татары, чеченцы, ингуши, калмыки, балкарцы и другие. Многие погибли в пути или в первые годы на новом месте.":
    "Une page à part est celle des **déportations de peuples**. Pendant la guerre et après elle, des peuples entiers furent chassés de force de leurs terres : les Allemands de la Volga, les Tatars de Crimée, les Tchétchènes, les Ingouches, les Kalmouks, les Balkars et d'autres. Beaucoup périrent en route ou dans les premières années sur le nouveau lieu.",
  "Что такое ГУЛАГ?": "Qu'est-ce que le Goulag ?",
  "Орган государственного планирования": "Un organe de planification de l'État",
  "Система исправительно-трудовых лагерей": "Le système des camps de travail correctif",
  "Название первой пятилетки": "Le nom du premier plan quinquennal",
  "Крупная стройка на Дальнем Востоке": "Un grand chantier de l'Extrême-Orient",
  "Главное управление лагерей. Через его систему прошли миллионы заключённых, чей труд использовался на каналах, приисках и в лесной промышленности.":
    "La Direction générale des camps. Des millions de détenus sont passés par son système, et leur travail servait aux canaux, aux mines et à l'industrie forestière.",
  "Большой террор": "La Grande Terreur",
  "Пик репрессий пришёлся на **1937–1938 годы**. Аресты шли по разнарядкам, дела рассматривали внесудебные **«тройки»**, приговоры выносились за минуты. По массовым операциям тех двух лет было расстреляно **несколько сотен тысяч человек**, столько же и более отправлено в лагеря.":
    "Le sommet des répressions fut atteint en **1937-1938**. Les arrestations se faisaient sur quotas, les dossiers étaient examinés par des **« troïkas »** extrajudiciaires, les sentences tombaient en quelques minutes. Les opérations de masse de ces deux années firent **plusieurs centaines de milliers de fusillés**, et autant ou davantage furent envoyés dans les camps.",
  "Пострадали все слои: партийные работники, командиры Красной армии, инженеры, учёные, священники, крестьяне, рабочие, представители национальных меньшинств. Одним из мест массовых расстрелов под Москвой был **Бутовский полигон**.":
    "Toutes les couches furent touchées : cadres du parti, chefs de l'Armée rouge, ingénieurs, savants, prêtres, paysans, ouvriers, membres des minorités nationales. L'un des lieux d'exécution de masse près de Moscou fut le **polygone de Boutovo**.",
  "Формально в **1936 году** была принята конституция, объявленная самой демократической в мире. Расхождение между её текстом и практикой тех же лет — один из самых наглядных примеров того, почему конституция без работающих судов остаётся бумагой.":
    "Formellement, une constitution fut adoptée en **1936** et déclarée la plus démocratique du monde. L'écart entre son texte et la pratique de ces mêmes années est l'un des exemples les plus parlants de ce qui fait qu'une constitution sans tribunaux qui travaillent reste du papier.",
  "Как об этом помнят": "Comment on s'en souvient",
  "На **XX съезде** партии в **1956 году** прозвучал доклад о культе личности, и началась **реабилитация** — пересмотр дел и восстановление доброго имени осуждённых. Она шла волнами и продолжалась десятилетиями.":
    "Au **XXe congrès** du parti, en **1956**, fut lu le rapport sur le culte de la personnalité, et commença la **réhabilitation** — la révision des dossiers et le rétablissement du bon nom des condamnés. Elle se fit par vagues et dura des décennies.",
  "**30 октября** — **День памяти жертв политических репрессий**. В **2017 году** в Москве была открыта **«Стена скорби»** — государственный памятник жертвам. Работают музеи и мемориальные комплексы на местах бывших лагерей и полигонов.":
    "Le **30 octobre** est la **Journée du souvenir des victimes des répressions politiques**. En **2017** fut inauguré à Moscou le **Mur de la douleur**, monument d'État aux victimes. Des musées et des mémoriaux fonctionnent sur les lieux des anciens camps et des polygones.",
  "Когда отмечается День памяти жертв политических репрессий?":
    "Quand se tient la Journée du souvenir des victimes des répressions politiques ?",
  "27 января": "Le 27 janvier",
  "22 июня": "Le 22 juin",
  "30 октября": "Le 30 octobre",
  "30 октября. 22 июня — День памяти и скорби, связанный с началом войны, а 9 мая — День Победы: три разные памятные даты.":
    "Le 30 octobre. Le 22 juin est la Journée de la mémoire et de l'affliction, liée au début de la guerre, et le 9 mai le Jour de la Victoire : trois dates commémoratives différentes.",
  "Оценки числа жертв расходятся между исследователями и продолжают уточняться по мере открытия архивов. Расхождения касаются величин, а не самого факта: массовые репрессии и голод признаны и государством, и историографией.":
    "Les estimations du nombre de victimes divergent entre les chercheurs et continuent de se préciser à mesure que les archives s'ouvrent. Les écarts portent sur des grandeurs, non sur le fait lui-même : les répressions de masse et la famine sont reconnues par l'État comme par l'historiographie.",
  "Война, послевоенные годы и распад СССР": "La guerre, l'après-guerre et la fin de l'URSS",
  "Почему это важно: война остаётся главным событием в народной памяти, а распад Союза — ближайшей к нам исторической границей. Между ними умещается почти полвека, которое объясняет сегодняшнюю карту.":
    "Pourquoi cela compte : la guerre reste le grand événement de la mémoire populaire, et la fin de l'Union la frontière historique la plus proche de nous. Entre les deux tient presque un demi-siècle, qui explique la carte d'aujourd'hui.",
  "22 июня 1941 года": "Le 22 juin 1941",
  "**22 июня 1941 года** Германия напала на Советский Союз. Началась **Великая Отечественная война** — так в России называют часть Второй мировой, шедшую на советско-германском фронте. Первые месяцы обернулись катастрофой: огромные потери, окружения, отступление до Москвы и Волги.":
    "Le **22 juin 1941**, l'Allemagne attaqua l'Union soviétique. Commença la **Grande Guerre patriotique** — c'est ainsi qu'on nomme en Russie la partie de la Seconde Guerre mondiale menée sur le front germano-soviétique. Les premiers mois furent une catastrophe : pertes énormes, encerclements, retraite jusqu'à Moscou et à la Volga.",
  "Блокада Ленинграда": "Le siège de Leningrad",
  "С сентября 1941 по январь 1944 года, почти 900 дней. Сотни тысяч жителей погибли, большинство — от голода.":
    "De septembre 1941 à janvier 1944, près de 900 jours. Des centaines de milliers d'habitants périrent, la plupart de faim.",
  "Битва за Москву": "La bataille de Moscou",
  "Зимой 1941–1942 годов немецкое наступление на столицу было остановлено и отброшено.":
    "À l'hiver 1941-1942, l'offensive allemande sur la capitale fut arrêtée et repoussée.",
  "Сталинград": "Stalingrad",
  "С лета 1942 по февраль 1943 года. Окружение и капитуляция немецкой армии стали переломом всей войны.":
    "De l'été 1942 à février 1943. L'encerclement et la capitulation de l'armée allemande furent le tournant de toute la guerre.",
  "Курская дуга": "Le saillant de Koursk",
  "Лето 1943 года, крупнейшее танковое сражение. После него инициатива уже не возвращалась к противнику.":
    "L'été 1943, la plus grande bataille de chars. Après elle, l'initiative ne revint plus à l'adversaire.",
  "Война закончилась **9 мая 1945 года**. Потери Советского Союза оцениваются примерно в **двадцать семь миллионов** человек, большую часть которых составило мирное население. На оккупированной территории проводилось уничтожение еврейского населения — **Холокост**; одним из его самых известных мест стал **Бабий Яр** под Киевом.":
    "La guerre s'acheva le **9 mai 1945**. Les pertes de l'Union soviétique sont estimées à quelque **vingt-sept millions** de personnes, dont la plus grande part de civils. Sur les territoires occupés fut menée l'extermination de la population juive — la **Shoah** ; l'un de ses lieux les plus connus est **Babi Yar**, près de Kiev.",
  "Когда началась Великая Отечественная война?":
    "Quand la Grande Guerre patriotique a-t-elle commencé ?",
  "1 сентября 1939 года": "Le 1er septembre 1939",
  "7 ноября 1941 года": "Le 7 novembre 1941",
  "9 мая 1945 года": "Le 9 mai 1945",
  "22 июня 1941 года. 1 сентября 1939-го началась Вторая мировая война, а 9 мая 1945-го Великая Отечественная закончилась.":
    "Le 22 juin 1941. Le 1er septembre 1939 commença la Seconde Guerre mondiale, et le 9 mai 1945 la Grande Guerre patriotique s'acheva.",
  "После войны": "Après la guerre",
  "Страна восстанавливалась из руин: были разрушены тысячи городов и десятки тысяч сёл. В **1949 году** СССР испытал атомную бомбу, и началось противостояние двух блоков, названное **холодной войной**.":
    "Le pays se relevait de ses ruines : des milliers de villes et des dizaines de milliers de villages avaient été détruits. En **1949**, l'URSS essaya la bombe atomique, et commença l'affrontement de deux blocs, qu'on appela la **guerre froide**.",
  "После смерти **Сталина в 1953 году** наступила **оттепель**: XX съезд 1956 года, массовая реабилитация, возвращение людей из лагерей, ослабление цензуры. В **1957 году** был запущен первый искусственный спутник Земли, а **12 апреля 1961 года** **Юрий Гагарин** совершил первый полёт человека в космос.":
    "Après la mort de **Staline en 1953** vint le **Dégel** : le XXe congrès de 1956, la réhabilitation de masse, le retour des gens des camps, l'assouplissement de la censure. En **1957** fut lancé le premier satellite artificiel de la Terre, et le **12 avril 1961** **Iouri Gagarine** accomplit le premier vol humain dans l'espace.",
  "**Карибский кризис 1962 года** подвёл мир к грани ядерной войны и закончился взаимными уступками. Затем последовали два десятилетия, которые позже назовут **застоем**: стабильность, рост нефтяных доходов и постепенное отставание экономики. С **1979 по 1989 год** шла война в **Афганистане**.":
    "La **crise de Cuba de 1962** amena le monde au bord de la guerre nucléaire et s'acheva par des concessions réciproques. Suivirent deux décennies qu'on appellera plus tard la **stagnation** : stabilité, hausse des revenus du pétrole et retard économique croissant. De **1979 à 1989** eut lieu la guerre en **Afghanistan**.",
  "Сколько дней продолжалась блокада Ленинграда?":
    "Combien de jours dura le siège de Leningrad ?",
  "Около ста дней": "Environ cent jours",
  "Около трёхсот дней": "Environ trois cents jours",
  "Почти девятьсот дней": "Près de neuf cents jours",
  "Более трёх лет": "Plus de trois ans",
  "С сентября 1941 по январь 1944 года — почти девятьсот дней. Погибли сотни тысяч жителей, подавляющее большинство от голода.":
    "De septembre 1941 à janvier 1944 — près de neuf cents jours. Des centaines de milliers d'habitants périrent, l'écrasante majorité de faim.",
  "Перестройка": "La perestroïka",
  "В **1985 году** к власти пришёл **Михаил Горбачёв** и объявил **перестройку** и **гласность**. Открылись архивы, вернулись запрещённые книги, началось обсуждение прошлого. В **1986 году** произошла авария на **Чернобыльской АЭС**.":
    "En **1985**, **Mikhaïl Gorbatchev** arriva au pouvoir et proclama la **perestroïka** et la **glasnost**. Les archives s'ouvrirent, les livres interdits revinrent, la discussion du passé commença. En **1986** survint l'accident de la centrale de **Tchernobyl**.",
  "В **1989 году** прошли первые за десятилетия выборы с несколькими кандидатами, а заседания Съезда народных депутатов транслировались по телевидению. В том же году пала Берлинская стена, и социалистические режимы в Восточной Европе сменились один за другим.":
    "En **1989** eurent lieu les premières élections depuis des décennies avec plusieurs candidats, et les séances du Congrès des députés du peuple furent retransmises à la télévision. La même année tomba le mur de Berlin, et les régimes socialistes d'Europe de l'Est changèrent l'un après l'autre.",
  "1991 год": "L'année 1991",
  "**12 июня 1990 года** РСФСР приняла **Декларацию о государственном суверенитете** — дата, ставшая Днём России. **12 июня 1991 года** прошли первые прямые выборы **Президента РСФСР**, на которых победил **Борис Ельцин**.":
    "Le **12 juin 1990**, la RSFSR adopta la **Déclaration de souveraineté** — la date devenue Journée de la Russie. Le **12 juin 1991** eut lieu la première élection présidentielle directe de la **RSFSR**, gagnée par **Boris Eltsine**.",
  "В **августе 1991 года** попытка государственного переворота провалилась за три дня, и после неё союзные структуры быстро утратили влияние. **8 декабря** руководители России, Украины и Белоруссии подписали **Беловежские соглашения**, а **25 декабря 1991 года** **Советский Союз прекратил существование**.":
    "En **août 1991**, une tentative de coup d'État échoua en trois jours, et après elle les structures de l'Union perdirent rapidement toute influence. Le **8 décembre**, les dirigeants de la Russie, de l'Ukraine et de la Biélorussie signèrent les **accords de Belovej**, et le **25 décembre 1991** l'**Union soviétique cessa d'exister**.",
  "Дальше — тяжёлые девяностые: **либерализация цен**, приватизация, обвал производства, **конституционный кризис 1993 года** и принятая по его итогам **Конституция**, **дефолт 1998 года**. С начала двухтысячных экономика стабилизировалась, а государственные институты приобрели нынешний вид.":
    "Ensuite viennent les années quatre-vingt-dix, difficiles : la **libéralisation des prix**, les privatisations, l'effondrement de la production, la **crise constitutionnelle de 1993** et la **Constitution** adoptée à son issue, le **défaut de 1998**. À partir du début des années deux mille, l'économie se stabilisa et les institutions de l'État prirent leur forme actuelle.",
  "В каком году прекратил существование Советский Союз?":
    "En quelle année l'Union soviétique a-t-elle cessé d'exister ?",
  "В 1989 году": "En 1989",
  "В 1990 году": "En 1990",
  "В 1991 году": "En 1991",
  "В 1993 году": "En 1993",
  "25 декабря 1991 года, после Беловежских соглашений 8 декабря. 1993-й — год принятия действующей Конституции.":
    "Le 25 décembre 1991, après les accords de Belovej du 8 décembre. 1993 est l'année de l'adoption de la Constitution en vigueur.",
  "**Вторая мировая** и **Великая Отечественная** — не одно и то же по срокам. Первая шла с 1939 по 1945 год, вторая — с 22 июня 1941 по 9 мая 1945-го, на советско-германском фронте.":
    "La **Seconde Guerre mondiale** et la **Grande Guerre patriotique** ne couvrent pas les mêmes dates. La première va de 1939 à 1945, la seconde du 22 juin 1941 au 9 mai 1945, sur le front germano-soviétique.",
  "География и часовые пояса": "Géographie et fuseaux horaires",
  "Территория и природа": "Le territoire et la nature",
  "Почему это важно: размеры страны меняют самые простые вещи. Когда в Калининграде утро, на Камчатке уже вечер того же дня, и расписание поездов приходится писать по одному времени на всю страну.":
    "Pourquoi cela compte : la taille du pays change les choses les plus simples. Quand il fait matin à Kaliningrad, c'est déjà le soir du même jour au Kamtchatka, et les horaires de trains ont dû être écrits à une seule heure pour tout le pays.",
  "Самая большая страна": "Le plus grand pays",
  "Площадь России — более **семнадцати миллионов квадратных километров**, около **одной восьмой** всей земной суши. Протяжённость с запада на восток — почти **десять тысяч километров**, с севера на юг — около четырёх тысяч.":
    "La superficie de la Russie dépasse **dix-sept millions de kilomètres carrés**, environ **un huitième** de toutes les terres émergées. Son étendue d'ouest en est est de près de **dix mille kilomètres**, du nord au sud d'environ quatre mille.",
  "Страна лежит **в двух частях света**. Условной границей между Европой и Азией считается **Уральский хребет**, и отсюда получается разрыв, который стоит запомнить: около **трёх четвертей территории** находится в Азии, а около **трёх четвертей населения** — в европейской части.":
    "Le pays est **à cheval sur deux parties du monde**. La frontière conventionnelle entre l'Europe et l'Asie est la **chaîne de l'Oural**, et il en résulte un écart qu'il vaut la peine de retenir : environ **trois quarts du territoire** sont en Asie, et environ **trois quarts de la population** dans la partie européenne.",
  "Одиннадцать часовых поясов": "Onze fuseaux horaires",
  "От **Калининграда** до **Камчатки** и **Чукотки** страна занимает **одиннадцать часовых поясов**. Разница между Москвой и Камчаткой составляет **девять часов**: когда в столице девять утра, там уже вечер.":
    "De **Kaliningrad** au **Kamtchatka** et à la **Tchoukotka**, le pays occupe **onze fuseaux horaires**. L'écart entre Moscou et le Kamtchatka est de **neuf heures** : quand il est neuf heures du matin dans la capitale, c'est déjà le soir là-bas.",
  "Число поясов менялось. В **2010 году** их сократили до девяти, а в **2014-м** вернули одиннадцать. Тогда же страна перестала переводить часы: сезонного времени в России больше нет.":
    "Le nombre de fuseaux a changé. En **2010**, on l'a réduit à neuf, et en **2014** on est revenu à onze. C'est alors aussi que le pays a cessé de changer d'heure : il n'y a plus d'heure saisonnière en Russie.",
  "Московское время": "L'heure de Moscou",
  "Точка отсчёта для всей страны. Расписания железных дорог долгое время писались только по нему.":
    "Le point de référence pour tout le pays. Les horaires des chemins de fer ont longtemps été écrits à cette seule heure.",
  "Калининград": "Kaliningrad",
  "Самый западный регион, и единственный, где время на час меньше московского.":
    "La région la plus occidentale, et la seule où l'heure est en retard d'une heure sur Moscou.",
  "Камчатка и Чукотка": "Le Kamtchatka et la Tchoukotka",
  "Самый восточный край: плюс девять часов к Москве. Новый год здесь встречают первыми в стране.":
    "L'extrême est : neuf heures de plus que Moscou. C'est là qu'on accueille le Nouvel An en premier dans le pays.",
  "Без перевода часов": "Sans changement d'heure",
  "С 2014 года сезонного перехода нет. Разница с Европой поэтому меняется дважды в год — за счёт соседей, а не нас.":
    "Depuis 2014, il n'y a plus de passage saisonnier. L'écart avec l'Europe change donc deux fois par an — du fait des voisins, non du nôtre.",
  "Сколько часовых поясов в России?": "Combien de fuseaux horaires compte la Russie ?",
  "Семь": "Sept",
  "Пятнадцать": "Quinze",
  "Одиннадцать. Девять было с 2010 по 2014 год, после чего прежнее число вернули. Разница между Москвой и Камчаткой — девять часов.":
    "Onze. Il y en eut neuf de 2010 à 2014, après quoi l'ancien nombre est revenu. L'écart entre Moscou et le Kamtchatka est de neuf heures.",
  "Соседи": "Les voisins",
  "У России **сухопутные границы с четырнадцатью государствами** — по этому показателю она делит первое место в мире с Китаем. На западе это Норвегия, Финляндия, Эстония, Латвия, Литва, Польша и Белоруссия, на юго-западе Украина, на юге Грузия, Азербайджан и Казахстан, на юго-востоке Китай, Монголия и КНДР.":
    "La Russie a des **frontières terrestres avec quatorze États** — sur ce point, elle partage la première place du monde avec la Chine. À l'ouest, ce sont la Norvège, la Finlande, l'Estonie, la Lettonie, la Lituanie, la Pologne et la Biélorussie ; au sud-ouest l'Ukraine ; au sud la Géorgie, l'Azerbaïdjan et le Kazakhstan ; au sud-est la Chine, la Mongolie et la Corée du Nord.",
  "Есть и **морские соседи**: **США** — через Берингов пролив, где между островами Ратманова и Крузенштерна около четырёх километров, — и **Япония**.":
    "Il y a aussi des **voisins maritimes** : les **États-Unis** — par le détroit de Béring, où quatre kilomètres environ séparent les îles Ratmanov et Kroussenstern — et le **Japon**.",
  "**Калининградская область** — **эксклав**: она не имеет сухопутной связи с остальной страной и окружена Польшей, Литвой и Балтийским морем.":
    "L'**oblast de Kaliningrad** est une **exclave** : il n'a aucune liaison terrestre avec le reste du pays et se trouve entouré par la Pologne, la Lituanie et la mer Baltique.",
  "По какому хребту проходит условная граница между Европой и Азией?":
    "Quelle chaîne marque la frontière conventionnelle entre l'Europe et l'Asie ?",
  "По Кавказскому": "Le Caucase",
  "По Уральскому": "L'Oural",
  "По Алтайскому": "L'Altaï",
  "По Саянам": "Les Saïans",
  "По Уралу. Отсюда и разрыв: три четверти территории в Азии, три четверти населения — в европейской части.":
    "L'Oural. De là vient l'écart : trois quarts du territoire en Asie, trois quarts de la population dans la partie européenne.",
  "Крайние точки": "Les points extrêmes",
  "Самая северная материковая точка — **мыс Челюскин** на Таймыре, самая южная — гора **Базардюзю** на Кавказе, самая западная — побережье Балтийского моря в **Калининградской области**, самая восточная — **остров Ратманова** в Беринговом проливе.":
    "Le point continental le plus au nord est le **cap Tcheliouskine**, sur la presqu'île de Taïmyr ; le plus au sud le mont **Bazardüzü**, dans le Caucase ; le plus à l'ouest la côte de la Baltique dans l'**oblast de Kaliningrad** ; le plus à l'est l'**île Ratmanov**, dans le détroit de Béring.",
  "Население страны — около **ста сорока шести миллионов** человек, и распределено оно крайне неравномерно: густо на юго-западе и вдоль Транссиба, почти пусто на севере Сибири и Дальнего Востока.":
    "La population du pays est d'environ **cent quarante-six millions** de personnes, et elle est répartie de façon très inégale : dense au sud-ouest et le long du Transsibérien, presque nulle dans le nord de la Sibérie et de l'Extrême-Orient.",
  "Какой регион России является эксклавом?": "Quelle région de Russie est une exclave ?",
  "Камчатский край": "Le kraï du Kamtchatka",
  "Калининградская область": "L'oblast de Kaliningrad",
  "Сахалинская область": "L'oblast de Sakhaline",
  "Республика Крым": "La république de Crimée",
  "Калининградская область не имеет сухопутной связи с остальной страной. Сахалин и Камчатка отделены морем, но эксклавами не являются.":
    "L'oblast de Kaliningrad n'a aucune liaison terrestre avec le reste du pays. Sakhaline et le Kamtchatka sont séparés par la mer, mais ne sont pas des exclaves.",
  "Часовой пояс и **административная граница** не всегда совпадают: время устанавливается для каждого субъекта отдельно, и потому линии на карте часовых поясов идут не по меридианам, а по границам регионов.":
    "Le fuseau horaire et la **limite administrative** ne coïncident pas toujours : l'heure est fixée séparément pour chaque sujet, et c'est pourquoi les lignes de la carte des fuseaux ne suivent pas les méridiens mais les frontières des régions.",
  "Природные зоны, реки и климат": "Zones naturelles, fleuves et climat",
  "Почему это важно: страна такой длины пересекает почти все природные зоны Северного полушария. В один и тот же день здесь бывает минус пятьдесят и плюс двадцать пять.":
    "Pourquoi cela compte : un pays de cette longueur traverse presque toutes les zones naturelles de l'hémisphère Nord. Le même jour, il peut y faire moins cinquante et plus vingt-cinq.",
  "Зоны с севера на юг": "Les zones du nord au sud",
  "Двигаясь с севера на юг, страна проходит **арктические пустыни**, **тундру**, **лесотундру**, **тайгу**, **смешанные и широколиственные леса**, **лесостепь**, **степь** и **полупустыни** у Каспия. Ни одна другая страна не пересекает столько зон подряд.":
    "En allant du nord au sud, le pays traverse les **déserts arctiques**, la **toundra**, la **toundra forestière**, la **taïga**, les **forêts mixtes et feuillues**, la **steppe boisée**, la **steppe** et les **semi-déserts** près de la Caspienne. Aucun autre pays ne traverse autant de zones à la suite.",
  "**Тайга** — крупнейший лесной массив планеты. На Россию приходится около **пятой части всех лесов мира**, и по площади леса она занимает первое место. Другая величина того же порядка: **вечная мерзлота** лежит примерно под **двумя третями** территории, и на ней строят на сваях, чтобы тепло здания не растопило грунт.":
    "La **taïga** est le plus grand massif forestier de la planète. La Russie porte environ **un cinquième de toutes les forêts du monde**, et par la surface boisée elle est au premier rang. Autre grandeur du même ordre : le **pergélisol** s'étend sous environ **deux tiers** du territoire, et l'on y bâtit sur pilotis pour que la chaleur du bâtiment ne dégèle pas le sol.",
  "Какую примерно долю территории России занимает вечная мерзлота?":
    "Quelle part du territoire russe le pergélisol occupe-t-il à peu près ?",
  "Около одной десятой": "Environ un dixième",
  "Около трети": "Environ un tiers",
  "Около двух третей": "Environ deux tiers",
  "Почти всю": "Presque tout",
  "Около двух третей. Поэтому в Норильске, Якутске и других северных городах дома ставят на сваи: иначе тепло здания растопит грунт под ним.":
    "Environ deux tiers. C'est pourquoi, à Norilsk, à Iakoutsk et dans d'autres villes du Nord, on pose les maisons sur pilotis : sinon la chaleur du bâtiment dégèlerait le sol au-dessous.",
  "Горы": "Les montagnes",
  "Урал": "L'Oural",
  "Невысокий древний хребет, разделяющий Европу и Азию. Богат рудами, и на них выросла уральская промышленность.":
    "Une vieille chaîne peu élevée qui sépare l'Europe de l'Asie. Riche en minerais, et c'est sur eux qu'a poussé l'industrie de l'Oural.",
  "Кавказ": "Le Caucase",
  "Самые высокие горы страны. Эльбрус, 5642 метра, — высшая точка России и всей Европы.":
    "Les montagnes les plus hautes du pays. L'Elbrouz, 5 642 mètres, est le point culminant de la Russie et de toute l'Europe.",
  "Алтай и Саяны": "L'Altaï et les Saïans",
  "Горы юга Сибири, с ледниками, степями в долинах и одним из самых чистых воздухов в стране.":
    "Les montagnes du sud de la Sibérie, avec leurs glaciers, leurs steppes de vallée et l'un des airs les plus purs du pays.",
  "Камчатка": "Le Kamtchatka",
  "Действующие вулканы, около трёх десятков. Ключевская Сопка — высочайший действующий вулкан Евразии.":
    "Des volcans actifs, une trentaine environ. Le Klioutchevskoï est le plus haut volcan actif d'Eurasie.",
  "Какая гора является высшей точкой России?":
    "Quelle montagne est le point culminant de la Russie ?",
  "Ключевская Сопка": "Le Klioutchevskoï",
  "Эльбрус": "L'Elbrouz",
  "Белуха": "La Beloukha",
  "Народная": "Le mont Narodnaïa",
  "Эльбрус на Кавказе, 5642 метра, — высшая точка и России, и Европы. Белуха — высшая точка Алтая, Народная — Урала, Ключевская Сопка — вулкан Камчатки.":
    "L'Elbrouz, dans le Caucase, 5 642 mètres — point culminant de la Russie et de l'Europe. La Beloukha est le point culminant de l'Altaï, le Narodnaïa celui de l'Oural, le Klioutchevskoï un volcan du Kamtchatka.",
  "Реки и озёра": "Fleuves et lacs",
  "Крупнейшие реки текут по Сибири на север: **Обь**, **Енисей**, **Лена**. Енисей — самый полноводный. На Дальнем Востоке течёт **Амур**, по которому частично проходит граница с Китаем.":
    "Les plus grands fleuves coulent à travers la Sibérie vers le nord : l'**Ob**, l'**Ienisseï**, la **Léna**. L'Ienisseï est le plus abondant. En Extrême-Orient coule l'**Amour**, sur lequel passe en partie la frontière avec la Chine.",
  "В европейской части главная река — **Волга**: около **трёх с половиной тысяч километров**, самая длинная река Европы. Она впадает не в океан, а в **Каспийское море**, замкнутый водоём, крупнейший на планете.":
    "Dans la partie européenne, le fleuve principal est la **Volga** : environ **trois mille cinq cents kilomètres**, le plus long fleuve d'Europe. Elle ne se jette pas dans un océan mais dans la **mer Caspienne**, plan d'eau fermé, le plus grand de la planète.",
  "**Байкал** — **самое глубокое озеро мира**: **1642 метра**. В нём сосредоточено около **пятой части** мировых запасов поверхностной пресной воды, и он внесён в список Всемирного наследия ЮНЕСКО. **Ладожское озеро** — крупнейшее пресноводное озеро Европы.":
    "Le **Baïkal** est le **lac le plus profond du monde** : **1 642 mètres**. Il concentre environ **un cinquième** des réserves mondiales d'eau douce de surface, et il est inscrit sur la liste du patrimoine mondial de l'UNESCO. Le **lac Ladoga** est le plus grand lac d'eau douce d'Europe.",
  "Какое озеро является самым глубоким в мире?": "Quel lac est le plus profond du monde ?",
  "Ладожское": "Le Ladoga",
  "Каспийское": "La Caspienne",
  "Байкал": "Le Baïkal",
  "Онежское": "L'Onega",
  "Байкал, 1642 метра, и в нём около пятой части мировой поверхностной пресной воды. Каспий — крупнейший замкнутый водоём, а Ладога — крупнейшее пресное озеро Европы.":
    "Le Baïkal, 1 642 mètres, et il porte environ un cinquième de l'eau douce de surface du monde. La Caspienne est le plus grand plan d'eau fermé, et le Ladoga le plus grand lac d'eau douce d'Europe.",
  "Климат": "Le climat",
  "Преобладает **умеренно континентальный** климат, в Сибири он становится **резко континентальным**: зима очень холодная, лето жаркое, разница между ними доходит до шестидесяти градусов. На Дальнем Востоке климат **муссонный**, с дождливым летом, на побережье Чёрного моря около Сочи — **субтропический**, а на севере **арктический**.":
    "Le climat **continental tempéré** domine ; en Sibérie il devient **fortement continental** : hiver très froid, été chaud, avec jusqu'à soixante degrés d'écart entre les deux. En Extrême-Orient, le climat est **de mousson**, avec un été pluvieux ; sur la côte de la mer Noire, près de Sotchi, il est **subtropical** ; au nord, **arctique**.",
  "**Оймякон** и **Верхоянск** в Якутии оспаривают звание **полюса холода** Северного полушария: там фиксировали температуры около минус шестидесяти семи градусов. При этом в тот же январский день в Сочи может быть плюс десять.":
    "**Oïmiakon** et **Verkhoïansk**, en Iakoutie, se disputent le titre de **pôle du froid** de l'hémisphère Nord : on y a relevé des températures d'environ moins soixante-sept degrés. Et le même jour de janvier, il peut faire plus dix à Sotchi.",
  "Что охраняют": "Ce que l'on protège",
  "В стране работают **заповедники**, **национальные парки** и заказники; первый заповедник, Баргузинский на Байкале, был создан ещё в 1917 году. Редкие виды заносятся в **Красную книгу**. Среди самых известных — **амурский тигр**, **белый медведь**, **зубр** и **дальневосточный леопард**.":
    "Le pays compte des **réserves naturelles intégrales**, des **parcs nationaux** et des réserves partielles ; la première, celle de Barguzine au Baïkal, fut créée dès 1917. Les espèces rares sont inscrites au **Livre rouge**. Parmi les plus connues : le **tigre de l'Amour**, l'**ours blanc**, le **bison d'Europe** et le **léopard de l'Amour**.",
  "**Каспийское море** называется морем, но по сути это **озеро** — крупнейший в мире замкнутый водоём, не связанный с океаном. Его правовой статус десятилетиями обсуждался прикаспийскими государствами именно из-за этой двойственности.":
    "La **mer Caspienne** s'appelle mer, mais c'est au fond un **lac** — le plus grand plan d'eau fermé du monde, sans lien avec l'océan. Son statut juridique a été discuté pendant des décennies par les États riverains, précisément à cause de cette ambiguïté.",
  "Федеративное устройство: субъекты": "L'organisation fédérale : les sujets",
  "Почему это важно: Россия — федерация, и её части называются по-разному не случайно. У республики есть то, чего нет у области, и понимание этой разницы объясняет карту.":
    "Pourquoi cela compte : la Russie est une fédération, et ses parties ne portent pas des noms différents par hasard. Une république a ce qu'un oblast n'a pas, et comprendre cette différence explique la carte.",
  "Шесть видов субъектов": "Six sortes de sujets",
  "**Статья 65** Конституции содержит перечень субъектов Федерации; на сегодня их **восемьдесят девять**. Все они, по **статье 5**, **равноправны** в отношениях с федеральными органами власти, но исторические названия и объём собственных институтов различаются.":
    "L'**article 65** de la Constitution contient la liste des sujets de la Fédération ; ils sont aujourd'hui **quatre-vingt-neuf**. Tous sont, selon l'**article 5**, **égaux en droits** dans leurs rapports avec les organes fédéraux, mais les noms hérités et l'étendue de leurs institutions propres diffèrent.",
  "Республика": "La république",
  "Имеет собственную конституцию и вправе устанавливать свои государственные языки наряду с русским.":
    "Elle a sa propre constitution et le droit d'établir ses langues officielles à côté du russe.",
  "Край и область": "Le kraï et l'oblast",
  "Самые многочисленные виды. Имеют устав, а не конституцию, и одну государственную языковую норму — русскую.":
    "Les sortes les plus nombreuses. Ils ont un statut, non une constitution, et une seule norme linguistique officielle, le russe.",
  "Город федерального значения": "La ville de rang fédéral",
  "Москва, Санкт-Петербург и Севастополь: города, которые сами являются субъектами Федерации.":
    "Moscou, Saint-Pétersbourg et Sébastopol : des villes qui sont elles-mêmes des sujets de la Fédération.",
  "Автономная область и автономные округа": "L'oblast autonome et les districts autonomes",
  "Автономная область одна — Еврейская. Автономные округа выделяются по территориям коренных народов Севера.":
    "L'oblast autonome est unique : celui des Juifs. Les districts autonomes se découpent sur les territoires des peuples autochtones du Nord.",
  "Различие между **конституцией** республики и **уставом** края или области — не только в названии документа. Республики появились там, где исторически жил один из народов страны, и право устанавливать **государственные языки** есть именно у них: татарский в Татарстане, якутский в Якутии, башкирский в Башкортостане.":
    "La différence entre la **constitution** d'une république et le **statut** d'un kraï ou d'un oblast n'est pas seulement dans le nom du document. Les républiques sont nées là où vivait historiquement l'un des peuples du pays, et le droit d'établir des **langues officielles** est le leur : le tatar au Tatarstan, le iakoute en Iakoutie, le bachkir au Bachkortostan.",
  "Что есть у республики, чего нет у области?":
    "Qu'est-ce qu'une république a et qu'un oblast n'a pas ?",
  "Собственная конституция и право устанавливать государственные языки":
    "Une constitution propre et le droit d'établir des langues officielles",
  "Право издавать законы": "Le droit de faire des lois",
  "Собственный бюджет": "Un budget propre",
  "Представительство в Совете Федерации": "Une représentation au Conseil de la Fédération",
  "Законы, бюджет и по два сенатора есть у каждого субъекта. Различают республику именно конституция вместо устава и право на свои государственные языки.":
    "Des lois, un budget et deux sénateurs, chaque sujet en a. Ce qui distingue la république, c'est justement la constitution au lieu du statut et le droit à ses propres langues officielles.",
  "Кто что решает": "Qui décide quoi",
  "**Статья 71** перечисляет **исключительное ведение Федерации**: оборона и безопасность, внешняя политика, гражданство, денежная эмиссия, уголовное и гражданское законодательство, федеральный бюджет. Здесь субъекты не законодательствуют вовсе.":
    "L'**article 71** énumère les **compétences exclusives de la Fédération** : la défense et la sécurité, la politique étrangère, la nationalité, l'émission de la monnaie, la législation pénale et civile, le budget fédéral. Là, les sujets ne légifèrent pas du tout.",
  "**Статья 72** называет **совместное ведение**: образование, здравоохранение, культура, природопользование, административное и трудовое законодательство. Здесь Федерация задаёт общие рамки, а субъект принимает свои законы внутри них.":
    "L'**article 72** nomme les **compétences partagées** : l'éducation, la santé, la culture, l'usage de la nature, la législation administrative et du travail. Là, la Fédération pose le cadre général et le sujet adopte ses lois à l'intérieur.",
  "А **статья 73** говорит коротко: **вне этих двух списков** субъекты обладают **всей полнотой государственной власти**. Логика та же, что в испанском или немецком федерализме: перечисляется то, что забирает центр, остальное остаётся регионам.":
    "Et l'**article 73** dit brièvement : **en dehors de ces deux listes**, les sujets détiennent la **plénitude du pouvoir d'État**. La logique est la même que dans le fédéralisme espagnol ou allemand : on énumère ce que le centre prend, le reste demeure aux régions.",
  "Как устроен субъект": "Comment un sujet est fait",
  "У каждого есть **законодательное собрание** — оно может называться думой, советом, хуралом, курултаем, — **высшее должностное лицо**, чаще всего **губернатор** или **глава республики**, и своё **правительство**. Есть и свой **верховный, краевой или областной суд**, входящий в общую федеральную судебную систему.":
    "Chacun a une **assemblée législative** — qui peut s'appeler douma, conseil, khoural, kouroultaï —, un **plus haut responsable**, le plus souvent **gouverneur** ou **chef de la république**, et son propre **gouvernement**. Il a aussi son **tribunal suprême, de kraï ou d'oblast**, qui appartient au système judiciaire fédéral commun.",
  "Отдельно стоит запомнить: **федеральные округа** — их восемь, и они появились указом Президента в **2000 году** — **не являются субъектами** Федерации и не упомянуты в Конституции. Это способ организации федеральных органов на местах, а не уровень власти.":
    "À retenir à part : les **districts fédéraux** — ils sont huit et sont nés d'un décret présidentiel en **2000** — **ne sont pas des sujets** de la Fédération et ne figurent pas dans la Constitution. C'est une façon d'organiser les organes fédéraux sur le terrain, non un échelon de pouvoir.",
  "Являются ли федеральные округа субъектами Федерации?":
    "Les districts fédéraux sont-ils des sujets de la Fédération ?",
  "Да, это самый крупный вид субъекта": "Oui, c'est la plus grande sorte de sujet",
  "Нет: они не упомянуты в Конституции и служат для организации федеральных органов":
    "Non : ils ne figurent pas dans la Constitution et servent à organiser les organes fédéraux",
  "Да, с 2000 года": "Oui, depuis 2000",
  "Только Центральный федеральный округ": "Seulement le district fédéral central",
  "Округа введены указом Президента в 2000 году и в Конституции их нет. Субъекты перечислены в статье 65, и федеральных округов в этом перечне не значится.":
    "Les districts ont été créés par décret présidentiel en 2000 et ne sont pas dans la Constitution. Les sujets sont énumérés à l'article 65, et les districts fédéraux ne figurent pas dans cette liste.",
  "Карта не всегда была такой": "La carte n'a pas toujours été ainsi",
  "Число субъектов менялось. В **2000-е годы** прошло **укрупнение регионов**: несколько автономных округов объединились с краями и областями, внутри которых находились, и число субъектов сократилось. Каждое такое объединение проходило через **референдум** в обоих регионах.":
    "Le nombre de sujets a changé. Dans les **années deux mille** eut lieu un **regroupement de régions** : plusieurs districts autonomes furent réunis aux kraïs et aux oblasts à l'intérieur desquels ils se trouvaient, et le nombre de sujets diminua. Chacune de ces réunions passa par un **référendum** dans les deux régions.",
  "Сколько видов субъектов Федерации предусматривает Конституция?":
    "Combien de sortes de sujets de la Fédération la Constitution prévoit-elle ?",
  "Три": "Trois",
  "Четыре": "Quatre",
  "Шесть": "Six",
  "Восемь": "Huit",
  "Республика, край, область, город федерального значения, автономная область и автономный округ. Восемь — это число федеральных округов, которые субъектами не являются.":
    "La république, le kraï, l'oblast, la ville de rang fédéral, l'oblast autonome et le district autonome. Huit est le nombre des districts fédéraux, qui ne sont pas des sujets.",
  "**Область** и **автономный округ** — разные виды субъектов, и путать их не стоит. Автономные округа выделялись по территориям коренных народов Севера, и некоторые из них до сих пор входят в состав области, оставаясь при этом самостоятельными субъектами.":
    "L'**oblast** et le **district autonome** sont des sortes différentes de sujets, et il ne faut pas les confondre. Les districts autonomes ont été découpés sur les territoires des peuples autochtones du Nord, et certains d'entre eux appartiennent encore à un oblast tout en restant des sujets à part entière.",
  "Города": "Les villes",
  "Почему это важно: почти все крупные города страны стоят в европейской части или вдоль одной железной дороги. Карта городов — это карта того, где людям было удобно жить и работать.":
    "Pourquoi cela compte : presque toutes les grandes villes du pays sont dans la partie européenne ou le long d'une seule voie ferrée. La carte des villes est celle des endroits où il était commode de vivre et de travailler.",
  "Две столицы": "Deux capitales",
  "**Москва** — столица и крупнейший город страны: около **тринадцати миллионов** жителей, самый населённый город Европы. Здесь **Кремль** и **Красная площадь**, внесённые в список ЮНЕСКО, и **метрополитен**, открытый в **1935 году** и знаменитый оформлением станций.":
    "**Moscou** est la capitale et la plus grande ville du pays : environ **treize millions** d'habitants, la ville la plus peuplée d'Europe. On y trouve le **Kremlin** et la **place Rouge**, inscrits à l'UNESCO, et un **métro** ouvert en **1935**, célèbre pour la décoration de ses stations.",
  "**Санкт-Петербург** — второй по величине, около **пяти с половиной миллионов**. Он был **столицей с 1712 по 1918 год**, и планировка центра сохранилась с тех времён. **Эрмитаж** — один из крупнейших музеев мира; летом сюда едут за **белыми ночами** и разводными мостами.":
    "**Saint-Pétersbourg** est la deuxième par la taille, avec environ **cinq millions et demi** d'habitants. Elle fut **capitale de 1712 à 1918**, et le plan du centre a gardé la forme de ce temps-là. L'**Ermitage** est l'un des plus grands musées du monde ; l'été, on y vient pour les **nuits blanches** et les ponts qui se lèvent.",
  "В какие годы столицей был Санкт-Петербург?":
    "Pendant quelles années Saint-Pétersbourg fut-elle capitale ?",
  "С 1703 по 1917 год": "De 1703 à 1917",
  "С 1712 по 1918 год": "De 1712 à 1918",
  "С 1721 по 1905 год": "De 1721 à 1905",
  "С 1700 по 1800 год": "De 1700 à 1800",
  "Город основан в 1703 году, столицей стал в 1712-м, а в 1918-м столица вернулась в Москву из-за близости фронта.":
    "La ville fut fondée en 1703, devint capitale en 1712, et en 1918 la capitale revint à Moscou du fait de la proximité du front.",
  "Города-миллионники": "Les villes millionnaires",
  "Кроме двух столиц в стране около **шестнадцати** городов с населением свыше миллиона. Крупнейшие из них — **Новосибирск**, **Екатеринбург**, **Казань**, **Нижний Новгород**, **Челябинск**, **Самара**, **Уфа**, **Ростов-на-Дону**, **Омск**, **Красноярск**, **Воронеж**, **Пермь**, **Волгоград** и **Краснодар**.":
    "Outre les deux capitales, le pays compte environ **seize** villes de plus d'un million d'habitants. Les plus grandes sont **Novossibirsk**, **Iekaterinbourg**, **Kazan**, **Nijni Novgorod**, **Tcheliabinsk**, **Samara**, **Oufa**, **Rostov-sur-le-Don**, **Omsk**, **Krasnoïarsk**, **Voronej**, **Perm**, **Volgograd** et **Krasnodar**.",
  "Новосибирск": "Novossibirsk",
  "Третий по населению город страны, выросший вокруг моста Транссиба через Обь. Рядом Академгородок — научный центр.":
    "La troisième ville du pays par la population, née autour du pont du Transsibérien sur l'Ob. À côté se trouve l'Akademgorodok, un centre scientifique.",
  "Екатеринбург": "Iekaterinbourg",
  "Столица Урала и промышленный центр, стоящий почти на границе Европы и Азии.":
    "La capitale de l'Oural et un centre industriel, presque sur la frontière de l'Europe et de l'Asie.",
  "Казань": "Kazan",
  "Столица Татарстана, где кремль с мечетью и православным собором внутри одной стены внесён в список ЮНЕСКО.":
    "La capitale du Tatarstan, dont le kremlin, avec une mosquée et une cathédrale orthodoxe dans une même enceinte, est inscrit à l'UNESCO.",
  "Владивосток": "Vladivostok",
  "Конечная точка Транссиба и главный порт на Тихом океане, в семи часах от Москвы по времени.":
    "Le terminus du Transsibérien et le grand port du Pacifique, à sept heures de Moscou en décalage horaire.",
  "Золотое кольцо": "L'Anneau d'or",
  "**Золотое кольцо** — маршрут по древним городам северо-востока от Москвы, сложившийся как туристический в 1960-е годы. В него входят **Владимир**, **Суздаль**, **Ярославль**, **Кострома**, **Ростов Великий**, **Переславль-Залесский** и **Сергиев Посад**. Это те самые земли, из которых выросло Московское государство, и белокаменные соборы XII века стоят там до сих пор.":
    "L'**Anneau d'or** est un itinéraire à travers les villes anciennes du nord-est de Moscou, constitué comme parcours touristique dans les années 1960. Il comprend **Vladimir**, **Souzdal**, **Iaroslavl**, **Kostroma**, **Rostov le Grand**, **Pereslavl-Zalesski** et **Serguiev Possad**. Ce sont les terres mêmes d'où est sorti l'État de Moscou, et les cathédrales de pierre blanche du XIIe siècle y sont encore debout.",
  "Что такое Золотое кольцо?": "Qu'est-ce que l'Anneau d'or ?",
  "Кольцевая автодорога вокруг Москвы": "Le périphérique autour de Moscou",
  "Маршрут по древним городам северо-востока от Москвы":
    "Un itinéraire à travers les villes anciennes du nord-est de Moscou",
  "Название московского метро": "Le nom du métro de Moscou",
  "Группа городов-миллионников": "Un groupe de villes millionnaires",
  "Владимир, Суздаль, Ярославль, Кострома, Ростов Великий, Переславль-Залесский и Сергиев Посад. Маршрут сложился в 1960-е годы, а сами города — XII века и старше.":
    "Vladimir, Souzdal, Iaroslavl, Kostroma, Rostov le Grand, Pereslavl-Zalesski et Serguiev Possad. L'itinéraire s'est constitué dans les années 1960, mais les villes elles-mêmes sont du XIIe siècle et plus anciennes.",
  "**Транссибирская магистраль** — самая длинная железная дорога в мире. От Москвы до **Владивостока** по ней **9288 километров**, и поезд идёт около **шести суток**, пересекая семь часовых поясов.":
    "Le **Transsibérien** est la plus longue voie ferrée du monde. De Moscou à **Vladivostok**, elle fait **9 288 kilomètres**, et le train met environ **six jours**, en traversant sept fuseaux horaires.",
  "Дорога объясняет карту расселения Сибири: почти все крупные сибирские города — Омск, Новосибирск, Красноярск, Иркутск, Хабаровск — стоят на ней или рядом. К северу от магистрали население редеет очень быстро.":
    "La ligne explique la carte du peuplement de la Sibérie : presque toutes les grandes villes sibériennes — Omsk, Novossibirsk, Krasnoïarsk, Irkoutsk, Khabarovsk — sont sur elle ou tout près. Au nord de la ligne, la population se raréfie très vite.",
  "Особые города": "Les villes particulières",
  "**Города-герои** — звание, присвоенное за оборону в годы войны. В нынешних границах России это **Волгоград**, **Санкт-Петербург**, **Москва**, **Мурманск**, **Смоленск**, **Тула** и **Новороссийск**. Позже появилось звание **города воинской славы**, которое получили несколько десятков городов.":
    "Les **villes héroïnes** portent un titre décerné pour leur défense pendant la guerre. Dans les frontières actuelles de la Russie, ce sont **Volgograd**, **Saint-Pétersbourg**, **Moscou**, **Mourmansk**, **Smolensk**, **Toula** et **Novorossiisk**. Plus tard est apparu le titre de **ville de gloire militaire**, que quelques dizaines de villes ont reçu.",
  "Есть и города особого назначения: **наукограды** вроде Дубны и Королёва, построенные вокруг институтов, и **закрытые административно-территориальные образования** — города при предприятиях атомной и оборонной промышленности, въезд в которые ограничен.":
    "Il y a aussi des villes d'affectation particulière : les **cités scientifiques** comme Doubna et Koroliov, bâties autour d'instituts, et les **formations administratives et territoriales fermées** — des villes attachées à des entreprises de l'industrie atomique et de la défense, dont l'accès est restreint.",
  "Сколько примерно идёт поезд от Москвы до Владивостока?":
    "Combien de temps met à peu près le train de Moscou à Vladivostok ?",
  "Двое суток": "Deux jours",
  "Около шести суток": "Environ six jours",
  "Около двух недель": "Environ deux semaines",
  "Меньше суток": "Moins d'un jour",
  "9288 километров и семь часовых поясов. Транссиб — самая длинная железная дорога в мире, и почти все крупные сибирские города стоят на ней.":
    "9 288 kilomètres et sept fuseaux horaires. Le Transsibérien est la plus longue voie ferrée du monde, et presque toutes les grandes villes sibériennes se tiennent sur elle.",
  "**Наукоград** и **закрытый город** — не одно и то же. В наукоград можно приехать свободно; в ЗАТО въезд ограничен, и на картах советского времени таких городов попросту не было.":
    "Une **cité scientifique** et une **ville fermée** ne sont pas la même chose. Dans une cité scientifique, on peut se rendre librement ; dans une formation fermée, l'accès est restreint, et sur les cartes de l'époque soviétique ces villes n'existaient tout simplement pas.",
  "Народы": "Les peuples",
  "Народы, языки и культура": "Peuples, langues et culture",
  "Почему это важно: Конституция начинается не со слова «государство» и не со слова «нация», а со слов «многонациональный народ». Из этого выражения выведено многое в устройстве страны — от названий республик до права молчать о своём происхождении.":
    "Pourquoi cela compte : la Constitution ne commence ni par le mot « État » ni par le mot « nation », mais par les mots « peuple multinational ». De cette expression découle beaucoup de l'organisation du pays — du nom des républiques au droit de se taire sur ses origines.",
  "Что говорит преамбула": "Ce que dit le préambule",
  "Основной закон открывается словами: **«Мы, многонациональный народ Российской Федерации…»**. Носитель суверенитета в статье 3 назван так же. Это не украшение текста: страна не описывает себя как государство одного народа, и на этом построена вся её федеративная часть.":
    "La loi fondamentale s'ouvre par ces mots : **« Nous, peuple multinational de la Fédération de Russie… »**. Le porteur de la souveraineté porte le même nom à l'article 3. Ce n'est pas un ornement du texte : le pays ne se décrit pas comme l'État d'un seul peuple, et toute sa partie fédérale est bâtie là-dessus.",
  "**Перепись 2021 года** насчитала более **190 народов**. Точное число всякий раз спорно, потому что перепись записывает то, что человек сказал о себе сам: некоторые группы одни считают отдельным народом, другие — частью соседнего. Около **шестнадцати миллионов** человек национальность не указали вовсе — и имели на это полное право.":
    "Le **recensement de 2021** a compté plus de **190 peuples**. Le nombre exact est chaque fois discuté, parce que le recensement note ce que la personne dit d'elle-même : certains groupes sont tenus par les uns pour un peuple à part, par les autres pour une partie du peuple voisin. Environ **seize millions** de personnes n'ont indiqué aucune nationalité — et elles en avaient parfaitement le droit.",
  "Кого сколько": "Qui, combien",
  "**Русские** составляют около **80 %** населения — примерно **105 миллионов** человек. Следующие по численности, по данным той же переписи, — **татары**, **чеченцы**, **башкиры**, **чуваши**, **аварцы** и **армяне**; у первых из них больше миллиона человек, дальше счёт идёт на сотни тысяч.":
    "Les **Russes** forment environ **80 %** de la population — quelque **105 millions** de personnes. Viennent ensuite, selon le même recensement, les **Tatars**, les **Tchétchènes**, les **Bachkirs**, les **Tchouvaches**, les **Avars** et les **Arméniens** ; les premiers dépassent le million, ensuite on compte par centaines de milliers.",
  "География распределена неровно. В большинстве регионов преобладают русские; в республиках Северного Кавказа, в Татарстане, Чувашии, Якутии картина другая. Именно поэтому национальный состав в России — вопрос не общей цифры, а конкретного места.":
    "La répartition géographique est inégale. Dans la plupart des régions, les Russes sont majoritaires ; dans les républiques du Caucase du Nord, au Tatarstan, en Tchouvachie, en Iakoutie, le tableau est autre. C'est pourquoi la composition des peuples en Russie est affaire de lieu précis, non de chiffre global.",
  "Как Конституция называет носителя суверенитета?":
    "Comment la Constitution nomme-t-elle le porteur de la souveraineté ?",
  "Русская нация": "La nation russe",
  "Многонациональный народ Российской Федерации":
    "Le peuple multinational de la Fédération de Russie",
  "Граждане и постоянные жители": "L'ensemble des citoyens et des résidents permanents",
  "Совокупность субъектов Федерации": "L'ensemble des sujets de la Fédération",
  "Этими словами открывается преамбула, и они же стоят в статье 3. Федеративное устройство страны выведено из них.":
    "Ce sont les mots qui ouvrent le préambule, et les mêmes se trouvent à l'article 3. L'organisation fédérale du pays en découle.",
  "Титульный народ — не всегда большинство":
    "Le peuple qui donne son nom n'est pas toujours majoritaire",
  "Двадцать четыре республики носят имена народов, но имя республики говорит об истории, а не о нынешней арифметике. В **Карелии** карелов — небольшая доля населения. В **Башкортостане** башкиры составляют около четверти. А в **Чечне**, **Ингушетии**, **Дагестане** и **Туве** титульные народы — уверенное большинство.":
    "Vingt-quatre républiques portent des noms de peuples, mais le nom d'une république parle d'histoire, non de l'arithmétique d'aujourd'hui. En **Carélie**, les Caréliens sont une petite part de la population. Au **Bachkortostan**, les Bachkirs forment environ un quart. En revanche, en **Tchétchénie**, en **Ingouchie**, au **Daghestan** et en **Touva**, les peuples qui donnent leur nom sont nettement majoritaires.",
  "Республика поэтому не «принадлежит» своему народу. Права в ней — у всех жителей одинаково, а особый статус касается языка и культуры, а не гражданства и не собственности.":
    "Une république n'« appartient » donc pas à son peuple. Les droits y sont les mêmes pour tous les habitants, et le statut particulier touche à la langue et à la culture, non à la nationalité ni à la propriété.",
  "Коренные малочисленные народы": "Les peuples autochtones peu nombreux",
  "Отдельная правовая категория. **Статья 69** Конституции гарантирует права **коренных малочисленных народов**; кто именно ими считается, определяет **единый перечень**, утверждённый Правительством, — в нём **сорок семь** народов.":
    "Une catégorie juridique à part. L'**article 69** de la Constitution garantit les droits des **peuples autochtones peu nombreux** ; qui en fait partie est fixé par une **liste unique** approuvée par le gouvernement, où figurent **quarante-sept** peuples.",
  "Условия попадания в перечень: народ живёт на землях предков, ведёт **традиционный образ жизни и хозяйство**, осознаёт себя самостоятельной общностью — и насчитывает **менее пятидесяти тысяч** человек. Некоторые из них — несколько сотен человек, а один-два измеряются десятками.":
    "Les conditions pour y figurer : le peuple vit sur les terres de ses ancêtres, mène un **mode de vie et une économie traditionnels**, se reconnaît comme une communauté distincte — et compte **moins de cinquante mille** personnes. Certains n'en comptent que quelques centaines, et un ou deux se mesurent en dizaines.",
  "Север и Сибирь": "Le Nord et la Sibérie",
  "Ненцы, ханты, манси, эвенки, эвены, чукчи, коряки, нанайцы. Оленеводство, рыболовство и охота — не хобби, а основа хозяйства.":
    "Nenets, Khantys, Mansis, Evenks, Évènes, Tchouktches, Koriaks, Nanaïs. L'élevage du renne, la pêche et la chasse ne sont pas un loisir mais la base de l'économie.",
  "Дальний Восток": "L'Extrême-Orient",
  "Нивхи, удэгейцы, ительмены, алеуты. Многие живут в нескольких сёлах, и язык держится там же, где промысел.":
    "Nivkhes, Oudéguéis, Itelmènes, Aléoutes. Beaucoup vivent dans quelques villages, et la langue tient là où tient le métier.",
  "Европейская часть": "La partie européenne",
  "Вепсы, саамы, ижорцы, водь. Народы старые, но малочисленные — и потому в том же перечне.":
    "Vepses, Sames, Ingriens, Vodes. Des peuples anciens mais peu nombreux — et donc dans la même liste.",
  "Абазины, шапсуги. Небольшие народы Северного Кавказа тоже входят в перечень, хотя их соседи в него не входят.":
    "Abazes, Chapsoughes. De petits peuples du Caucase du Nord figurent aussi dans la liste, alors que leurs voisins n'y sont pas.",
  "Что даёт статус: право на **территории традиционного природопользования**, льготы по охоте и рыболовству для собственных нужд, досрочную пенсию, освобождение от призыва при занятии традиционным промыслом. Это не привилегия по происхождению, а компенсация за то, что современное хозяйство землю их промысла сокращает.":
    "Ce que le statut donne : le droit à des **territoires d'usage traditionnel de la nature**, des facilités de chasse et de pêche pour ses propres besoins, une retraite anticipée, une dispense de service pour qui exerce un métier traditionnel. Ce n'est pas un privilège d'origine, mais une compensation pour le fait que l'économie moderne réduit la terre de ce métier.",
  "Какой признак обязателен для коренного малочисленного народа?":
    "Quel critère est obligatoire pour un peuple autochtone peu nombreux ?",
  "Собственная республика в составе Федерации": "Avoir sa propre république dans la Fédération",
  "Численность менее пятидесяти тысяч человек и традиционный образ жизни":
    "Compter moins de cinquante mille personnes et mener un mode de vie traditionnel",
  "Отдельное гражданство": "Avoir une nationalité distincte",
  "Свой государственный язык": "Avoir sa propre langue officielle",
  "Перечень утверждает Правительство. Кроме численности учитываются жизнь на землях предков, традиционное хозяйство и самосознание общности.":
    "La liste est approuvée par le gouvernement. Outre le nombre, on tient compte de la vie sur les terres des ancêtres, de l'économie traditionnelle et de la conscience d'être une communauté.",
  "Национальность — дело самого человека":
    "La nationalité est l'affaire de la personne elle-même",
  "**Статья 26** формулирует это прямо: каждый вправе определять и указывать свою национальную принадлежность — и **никто не может быть принуждён** к её определению и указанию. Та же статья даёт право пользоваться родным языком и свободно выбирать язык общения, воспитания, обучения и творчества.":
    "L'**article 26** le dit sans détour : chacun a le droit de déterminer et d'indiquer son appartenance nationale — et **nul ne peut être contraint** de la déterminer ni de l'indiquer. Le même article donne le droit d'employer sa langue maternelle et de choisir librement la langue du commerce, de l'éducation, de l'instruction et de la création.",
  "У этой нормы есть предыстория. В советских паспортах была графа «национальность», записанная по родителям; в паспорте нынешнего образца её нет. Перепись спрашивает — но ответ добровольный, и шестнадцать миллионов человек им и не воспользовались.":
    "Cette règle a une préhistoire. Les passeports soviétiques avaient une rubrique « nationalité », remplie d'après les parents ; le passeport actuel ne l'a plus. Le recensement pose la question — mais la réponse est facultative, et seize millions de personnes n'en ont pas fait usage.",
  "Может ли человека обязать указать свою национальность?":
    "Peut-on obliger quelqu'un à indiquer sa nationalité ?",
  "Да, при получении паспорта": "Oui, lors de la délivrance du passeport",
  "Нет, статья 26 прямо это запрещает": "Non, l'article 26 l'interdit expressément",
  "Да, если он живёт в республике": "Oui, s'il vit dans une république",
  "Да, во время переписи населения": "Oui, pendant le recensement de la population",
  "Каждый вправе определять и указывать свою национальную принадлежность — и никто не может быть к этому принуждён. В нынешнем паспорте такой графы нет.":
    "Chacun a le droit de déterminer et d'indiquer son appartenance nationale — et nul ne peut y être contraint. Le passeport actuel n'a plus cette rubrique.",
  "Не путайте **гражданство** и **национальность**. Гражданство в России одно, оно записано в паспорте и одинаково для всех. Национальность — самоопределение человека, нигде не удостоверяется и ни на какие права не влияет.":
    "Ne confondez pas la **nationalité au sens de citoyenneté** et l'**appartenance nationale**. La citoyenneté en Russie est unique, elle est inscrite au passeport et elle est la même pour tous. L'appartenance nationale est une autodéfinition, elle n'est attestée nulle part et n'ouvre aucun droit particulier.",
  "Языки и религии": "Langues et religions",
  "Почему это важно: русский язык связывает страну целиком, но он не единственный, у которого есть правовой статус. А в вопросах веры государство держится в стороне намеренно — и это записано в Конституции отдельной статьёй.":
    "Pourquoi cela compte : le russe relie le pays tout entier, mais il n'est pas la seule langue à avoir un statut juridique. Et en matière de foi, l'État se tient à l'écart à dessein — c'est écrit dans la Constitution, en un article à part.",
  "Государственный язык": "La langue officielle",
  "**Статья 68**: государственным языком на всей территории страны является **русский**. На нём ведутся суд, делопроизводство, официальные документы и школьное обучение по государственному стандарту.":
    "**Article 68** : la langue officielle sur tout le territoire du pays est le **russe**. C'est en russe que se tiennent les procès, l'administration, les documents officiels et l'enseignement scolaire selon le programme national.",
  "**Республики вправе устанавливать свои государственные языки** — они употребляются в органах власти республики наравне с русским. В республиках такой статус получили несколько десятков языков: татарский, башкирский, чувашский, якутский, бурятский, осетинский, чеченский и другие. В Дагестане государственными объявлены языки всех народов республики сразу — их больше десятка.":
    "**Les républiques ont le droit d'établir leurs propres langues officielles** — elles s'emploient dans les organes du pouvoir de la république à égalité avec le russe. Dans les républiques, quelques dizaines de langues ont reçu ce statut : le tatar, le bachkir, le tchouvache, le iakoute, le bouriate, l'ossète, le tchétchène et d'autres. Au Daghestan, les langues de tous les peuples de la république ont été déclarées officielles d'un coup — elles sont plus d'une dizaine.",
  "Та же статья гарантирует всем народам страны **право сохранять родной язык** и создавать условия для его изучения. Всего языков народов России около **ста пятидесяти**, и часть из них ЮНЕСКО относит к исчезающим.":
    "Le même article garantit à tous les peuples du pays le **droit de conserver leur langue maternelle** et de créer les conditions de son étude. Les langues des peuples de Russie sont au total environ **cent cinquante**, et l'UNESCO en range une partie parmi les langues menacées.",
  "Могут ли республики устанавливать собственные государственные языки?":
    "Les républiques peuvent-elles établir leurs propres langues officielles ?",
  "Нет, государственный язык только один": "Non, il n'y a qu'une seule langue officielle",
  "Да, они употребляются в органах республики наравне с русским":
    "Oui, elles s'emploient dans les organes de la république à égalité avec le russe",
  "Да, и русский язык там перестаёт быть государственным":
    "Oui, et le russe y cesse d'être langue officielle",
  "Только с разрешения Государственной Думы на каждый случай":
    "Seulement avec l'autorisation de la Douma d'État, cas par cas",
  "Статья 68. Русский остаётся государственным на всей территории; язык республики добавляется к нему, а не заменяет его.":
    "Article 68. Le russe reste langue officielle sur tout le territoire ; la langue de la république s'y ajoute, elle ne la remplace pas.",
  "Кириллица по закону": "Le cyrillique par la loi",
  "Федеральный закон **о языках народов Российской Федерации** требует, чтобы алфавиты государственного языка страны и государственных языков республик строились **на графической основе кириллицы**. Иная основа может быть установлена только федеральным законом.":
    "La loi fédérale **sur les langues des peuples de la Fédération de Russie** exige que les alphabets de la langue officielle du pays et des langues officielles des républiques reposent sur une **base graphique cyrillique**. Une autre base ne peut être établie que par une loi fédérale.",
  "Норма появилась после того, как Татарстан в конце 1990-х решил перевести татарскую письменность на латиницу. Конституционный Суд в **2004 году** признал требование единой графической основы соответствующим Конституции: письменность государственных языков — вопрос общегосударственный, а не только республиканский.":
    "La règle est apparue après que le Tatarstan eut décidé, à la fin des années 1990, de faire passer l'écriture tatare aux caractères latins. La Cour constitutionnelle a reconnu en **2004** que l'exigence d'une base graphique unique était conforme à la Constitution : l'écriture des langues officielles est une question de l'État tout entier, non de la seule république.",
  "У кириллицы своя история: её принесли в славянские земли **Кирилл и Мефодий** в IX веке, а нынешний облик букв задала **гражданская азбука Петра I** в 1708 году. **24 мая** отмечается День славянской письменности и культуры.":
    "Le cyrillique a sa propre histoire : **Cyrille et Méthode** l'ont apporté dans les terres slaves au IXe siècle, et la forme actuelle des lettres a été fixée par l'**alphabet civil de Pierre Ier** en 1708. Le **24 mai** se célèbre la Journée de l'écriture et de la culture slaves.",
  "На какой графической основе должны строиться алфавиты государственных языков республик?":
    "Sur quelle base graphique les alphabets des langues officielles des républiques doivent-ils reposer ?",
  "На основе кириллицы": "Sur le cyrillique",
  "На основе латиницы": "Sur l'alphabet latin",
  "Республика выбирает основу сама": "La république choisit elle-même la base",
  "На основе исторической письменности народа": "Sur l'écriture historique du peuple",
  "Так требует федеральный закон о языках; Конституционный Суд подтвердил это в 2004 году. Иную основу может установить только федеральный закон.":
    "C'est ce qu'exige la loi fédérale sur les langues ; la Cour constitutionnelle l'a confirmé en 2004. Une autre base ne peut être établie que par une loi fédérale.",
  "Светское государство": "L'État laïque",
  "**Статья 14**: Российская Федерация — **светское государство**. Никакая религия не может устанавливаться в качестве государственной или обязательной. Религиозные объединения **отделены от государства и равны перед законом**.":
    "**Article 14** : la Fédération de Russie est un **État laïque**. Aucune religion ne peut être établie comme religion d'État ni comme religion obligatoire. Les associations religieuses sont **séparées de l'État et égales devant la loi**.",
  "**Статья 28** даёт каждому свободу совести и вероисповедания: право исповедовать любую религию или **не исповедовать никакой**, свободно выбирать и менять убеждения и действовать в согласии с ними.":
    "L'**article 28** donne à chacun la liberté de conscience et de religion : le droit de professer n'importe quelle religion ou de **n'en professer aucune**, de choisir et de changer librement ses convictions et d'agir en accord avec elles.",
  "Практические следствия простые: в государственной школе нет обязательного богослужения, запись о вере нигде не ведётся, а религиозный праздник становится нерабочим днём только через обычный закон, как любой другой.":
    "Les conséquences pratiques sont simples : il n'y a pas d'office obligatoire à l'école publique, aucune mention de la foi n'est enregistrée nulle part, et une fête religieuse ne devient jour chômé que par une loi ordinaire, comme n'importe quelle autre.",
  "Традиционные религии": "Les religions traditionnelles",
  "Закон **о свободе совести и о религиозных объединениях 1997 года** в преамбуле признаёт особую роль **православия** в истории страны и выражает уважение к **христианству**, **исламу**, **буддизму**, **иудаизму** и другим религиям, составляющим неотъемлемую часть исторического наследия народов России. Преамбула — не установление государственной религии: сама статья 14 стоит выше.":
    "La loi **sur la liberté de conscience et les associations religieuses de 1997** reconnaît dans son préambule le rôle particulier de l'**orthodoxie** dans l'histoire du pays et exprime son respect pour le **christianisme**, l'**islam**, le **bouddhisme**, le **judaïsme** et les autres religions qui font partie intégrante de l'héritage historique des peuples de Russie. Le préambule n'établit pas une religion d'État : l'article 14 lui-même prime.",
  "Православие": "L'orthodoxie",
  "Крупнейшая конфессия. Русская православная церковь ведёт счёт от крещения 988 года; патриаршество восстановлено в 1917 году.":
    "La plus grande confession. L'Église orthodoxe russe fait remonter son histoire au baptême de 988 ; le patriarcat a été rétabli en 1917.",
  "Ислам": "L'islam",
  "Вторая по числу верующих. Распространён на Северном Кавказе, в Татарстане и Башкортостане; духовные управления действуют в нескольких центрах.":
    "La deuxième par le nombre de croyants. Il est répandu au Caucase du Nord, au Tatarstan et au Bachkortostan ; des directions spirituelles fonctionnent dans plusieurs centres.",
  "Буддизм": "Le bouddhisme",
  "Традиционен в Калмыкии, Бурятии и Туве. Калмыкия — единственный буддийский регион в Европе.":
    "Il est traditionnel en Kalmoukie, en Bouriatie et en Touva. La Kalmoukie est la seule région bouddhiste d'Europe.",
  "Иудаизм": "Le judaïsme",
  "Общины в крупных городах; Еврейская автономная область на Дальнем Востоке носит имя по истории своего образования.":
    "Des communautés dans les grandes villes ; l'oblast autonome juif, en Extrême-Orient, porte ce nom du fait de l'histoire de sa formation.",
  "В календаре это видно так: **7 января**, Рождество Христово, — нерабочий праздничный день по всей стране. **Ураза-байрам** и **Курбан-байрам** объявлены выходными законами отдельных республик, **Пасха** передвижная и выходным днём не считается, но приходится на воскресенье.":
    "Au calendrier, cela se voit ainsi : le **7 janvier**, Noël, est jour férié chômé dans tout le pays. L'**Aïd el-Fitr** et l'**Aïd el-Adha** sont déclarés chômés par les lois de certaines républiques, et **Pâques** est mobile et n'est pas jour chômé, mais tombe un dimanche.",
  "Какое место занимает преамбула закона 1997 года рядом со статьёй 14?":
    "Quelle place le préambule de la loi de 1997 occupe-t-il à côté de l'article 14 ?",
  "Она устанавливает православие государственной религией":
    "Il fait de l'orthodoxie la religion d'État",
  "Она описывает историческую роль религий, а норму задаёт статья 14":
    "Il décrit le rôle historique des religions, et c'est l'article 14 qui pose la règle",
  "Она отменяет действие статьи 14 для четырёх религий":
    "Il écarte l'article 14 pour quatre religions",
  "Она даёт перечисленным религиям право на бюджетные средства":
    "Il donne aux religions citées un droit à des fonds publics",
  "Преамбула говорит об истории и уважении, а не об установлении. Статья 14 стоит выше и запрещает государственную или обязательную религию.":
    "Le préambule parle d'histoire et de respect, non d'établissement. L'article 14 prime et interdit toute religion d'État ou obligatoire.",
  "Преамбула закона 1997 года иногда цитируется как доказательство того, что православие — государственная религия. Это не так: преамбула описывает историю, а норму устанавливает статья 14 Конституции, и она говорит обратное.":
    "Le préambule de la loi de 1997 est parfois cité comme preuve que l'orthodoxie serait religion d'État. Il n'en est rien : le préambule décrit une histoire, et c'est l'article 14 de la Constitution qui pose la règle, et il dit le contraire.",
  "Литература и искусство": "Littérature et arts",
  "Почему это важно: имена из этого урока встречаются на карте страны чаще любых других — площади, улицы, станции метро, театры и музеи названы в основном ими. Не узнав их, трудно понять, чем город гордится.":
    "Pourquoi cela compte : les noms de cette leçon se rencontrent sur la carte du pays plus que tous les autres — places, rues, stations de métro, théâtres et musées portent surtout les leurs. Sans les reconnaître, il est difficile de comprendre ce dont une ville est fière.",
  "Пушкин и золотой век": "Pouchkine et le siècle d'or",
  "**Александр Пушкин** (1799–1837) считается создателем современного русского литературного языка: до него книжный и разговорный язык расходились гораздо сильнее. Его роман в стихах **«Евгений Онегин»**, поэма «Медный всадник» и сказки читаются в школе целиком.":
    "**Alexandre Pouchkine** (1799-1837) passe pour le créateur de la langue littéraire russe moderne : avant lui, la langue des livres et celle de la conversation s'écartaient bien davantage. Son roman en vers **« Eugène Onéguine »**, le poème « Le Cavalier de bronze » et ses contes se lisent à l'école en entier.",
  "**6 июня**, в день его рождения, отмечается Пушкинский день России; с 2011 года это же число — **День русского языка**. ООН включила эту дату в собственный календарь языков.":
    "Le **6 juin**, jour de sa naissance, se célèbre la Journée Pouchkine de Russie ; depuis 2011, la même date est la **Journée de la langue russe**. L'ONU l'a inscrite à son propre calendrier des langues.",
  "Дальше идут **Михаил Лермонтов** («Герой нашего времени»), **Николай Гоголь** («Ревизор», «Мёртвые души»), **Иван Тургенев** («Отцы и дети»). Их называют золотым веком русской литературы, и укладывается он в одно столетие.":
    "Viennent ensuite **Mikhaïl Lermontov** (« Un héros de notre temps »), **Nicolas Gogol** (« Le Revizor », « Les Âmes mortes »), **Ivan Tourgueniev** (« Pères et fils »). On les appelle le siècle d'or de la littérature russe, et il tient en un seul siècle.",
  "Большой роман": "Le grand roman",
  "**Лев Толстой** (1828–1910) — «Война и мир» и «Анна Каренина»; его усадьба **Ясная Поляна** сохранена как музей. **Фёдор Достоевский** (1821–1881) — «Преступление и наказание», «Идиот», «Братья Карамазовы»; его переводят и ставят на сцене, вероятно, чаще всех русских авторов.":
    "**Léon Tolstoï** (1828-1910) — « Guerre et Paix » et « Anna Karénine » ; son domaine de **Iasnaïa Poliana** est conservé comme musée. **Fiodor Dostoïevski** (1821-1881) — « Crime et Châtiment », « L'Idiot », « Les Frères Karamazov » ; c'est sans doute lui, de tous les auteurs russes, que l'on traduit et que l'on joue le plus.",
  "**Антон Чехов** (1860–1904) писал короткие рассказы и четыре пьесы, на которых держится мировой репертуар: «Чайка», «Дядя Ваня», «Три сестры», «Вишнёвый сад». Чайка со шторы Художественного театра — эмблема именно отсюда.":
    "**Anton Tchekhov** (1860-1904) écrivait de courtes nouvelles et quatre pièces qui portent le répertoire mondial : « La Mouette », « Oncle Vania », « Les Trois Sœurs », « La Cerisaie ». La mouette du rideau du Théâtre d'art vient précisément de là.",
  "Серебряный век и премии": "Le siècle d'argent et les prix",
  "Начало XX века дало **Александра Блока**, **Анну Ахматову**, **Марину Цветаеву**, **Осипа Мандельштама**, **Бориса Пастернака**, **Владимира Маяковского**, **Сергея Есенина**. Судьбы этого поколения тяжелы: часть погибла в лагерях, часть уехала, часть замолчала на десятилетия.":
    "Le début du XXe siècle a donné **Alexandre Blok**, **Anna Akhmatova**, **Marina Tsvetaïeva**, **Ossip Mandelstam**, **Boris Pasternak**, **Vladimir Maïakovski**, **Sergueï Essenine**. Les destins de cette génération sont lourds : une partie a péri dans les camps, une partie est partie, une partie s'est tue pendant des décennies.",
  "Нобелевскую премию по литературе получили пятеро: **Иван Бунин** (1933, первым — уже в эмиграции), **Борис Пастернак** (1958, вынужден был отказаться под давлением), **Михаил Шолохов** (1965), **Александр Солженицын** (1970), **Иосиф Бродский** (1987).":
    "Cinq ont reçu le prix Nobel de littérature : **Ivan Bounine** (1933, le premier — déjà en exil), **Boris Pasternak** (1958, contraint de le refuser sous la pression), **Mikhaïl Cholokhov** (1965), **Alexandre Soljenitsyne** (1970), **Joseph Brodsky** (1987).",
  "Кто первым из русских писателей получил Нобелевскую премию по литературе?":
    "Quel écrivain russe reçut le premier le prix Nobel de littérature ?",
  "Лев Толстой": "Léon Tolstoï",
  "Иван Бунин": "Ivan Bounine",
  "Михаил Шолохов": "Mikhaïl Cholokhov",
  "Борис Пастернак": "Boris Pasternak",
  "Бунин получил её в 1933 году, живя уже в эмиграции. Толстой номинировался, но премии так и не получил.":
    "Bounine le reçut en 1933, vivant déjà en exil. Tolstoï fut proposé, mais n'obtint jamais le prix.",
  "Музыка": "La musique",
  "**Михаил Глинка** считается первым русским композитором мирового масштаба; с его опер начинается национальная традиция. Во второй половине XIX века складывается **«Могучая кучка»** — содружество композиторов, куда входили **Балакирев**, **Мусоргский**, **Бородин**, **Римский-Корсаков** и **Кюи**.":
    "**Mikhaïl Glinka** passe pour le premier compositeur russe d'envergure mondiale ; c'est de ses opéras que part la tradition nationale. Dans la seconde moitié du XIXe siècle se forme le **Groupe des Cinq** — une confrérie de compositeurs où l'on trouvait **Balakirev**, **Moussorgski**, **Borodine**, **Rimski-Korsakov** et **Cui**.",
  "**Пётр Чайковский** (1840–1893) написал три балета, на которых стоит мировой балетный репертуар: «Лебединое озеро», «Спящая красавица», «Щелкунчик». Дальше — **Сергей Рахманинов**, **Игорь Стравинский**, **Сергей Прокофьев**, **Дмитрий Шостакович**.":
    "**Piotr Tchaïkovski** (1840-1893) a écrit trois ballets sur lesquels repose le répertoire mondial : « Le Lac des cygnes », « La Belle au bois dormant », « Casse-Noisette ». Viennent ensuite **Sergueï Rachmaninov**, **Igor Stravinsky**, **Sergueï Prokofiev**, **Dmitri Chostakovitch**.",
  "**Седьмая симфония** Шостаковича, названная Ленинградской, была впервые исполнена в осаждённом городе **9 августа 1942 года** — оркестром, который собрали из оставшихся в живых музыкантов.":
    "La **Septième symphonie** de Chostakovitch, dite de Leningrad, fut jouée pour la première fois dans la ville assiégée le **9 août 1942** — par un orchestre rassemblé parmi les musiciens restés en vie.",
  "Что такое «Могучая кучка»?": "Qu'est-ce que le Groupe des Cinq ?",
  "Литературный кружок начала XX века": "Un cercle littéraire du début du XXe siècle",
  "Содружество русских композиторов XIX века":
    "Une confrérie de compositeurs russes du XIXe siècle",
  "Объединение художников-передвижников": "L'association des peintres ambulants",
  "Театральная труппа Станиславского": "La troupe de théâtre de Stanislavski",
  "Балакирев, Мусоргский, Бородин, Римский-Корсаков и Кюи. Они добивались национального звучания в опере и симфонии.":
    "Balakirev, Moussorgski, Borodine, Rimski-Korsakov et Cui. Ils cherchaient une sonorité nationale dans l'opéra et la symphonie.",
  "Театр и балет": "Le théâtre et le ballet",
  "**Большой театр** в Москве ведёт счёт с **1776 года**, **Мариинский** в Петербурге — с конца XVIII века. Русский балет стал мировым эталоном после **«Русских сезонов»** Сергея Дягилева, которые с **1909 года** показывали в Париже танцовщиков и декорации, каких там не видели.":
    "Le **théâtre Bolchoï** de Moscou fait remonter son histoire à **1776**, le **Mariinski** de Pétersbourg à la fin du XVIIIe siècle. Le ballet russe est devenu la référence mondiale après les **Saisons russes** de Serge Diaghilev, qui montrèrent à Paris à partir de **1909** des danseurs et des décors qu'on n'y avait pas vus.",
  "**Константин Станиславский** и **Владимир Немирович-Данченко** основали в **1898 году** Московский Художественный театр. Их метод работы с актёром — **система Станиславского** — преподаётся в театральных школах по всему миру.":
    "**Constantin Stanislavski** et **Vladimir Nemirovitch-Dantchenko** fondèrent en **1898** le Théâtre d'art de Moscou. Leur façon de travailler avec l'acteur — le **système Stanislavski** — s'enseigne dans les écoles de théâtre du monde entier.",
  "Живопись и икона": "La peinture et l'icône",
  "**Третьяковская галерея** в Москве выросла из частного собрания купца Павла Третьякова и открыта для публики с XIX века; **Русский музей** в Петербурге основан в 1895 году. В 1870 году художники объединились в товарищество **передвижников**, чтобы возить выставки по городам, а не показывать их только в столицах.":
    "La **galerie Tretiakov** de Moscou est née de la collection privée du marchand Pavel Tretiakov et est ouverte au public depuis le XIXe siècle ; le **Musée russe** de Pétersbourg a été fondé en 1895. En 1870, des peintres se sont réunis en société, les **ambulants**, pour porter leurs expositions à travers les villes au lieu de ne les montrer que dans les capitales.",
  "Илья Репин": "Ilia Répine",
  "«Бурлаки на Волге», «Запорожцы». Портретист и главный живописец передвижников.":
    "« Les Haleurs de la Volga », « Les Cosaques zaporogues ». Portraitiste et principal peintre des ambulants.",
  "Иван Шишкин и Исаак Левитан": "Ivan Chichkine et Isaac Levitan",
  "Лес и русская равнина. Пейзаж у передвижников был не фоном, а самостоятельным сюжетом.":
    "La forêt et la plaine russe. Chez les ambulants, le paysage n'était pas un fond mais un sujet à part entière.",
  "Иван Айвазовский": "Ivan Aïvazovski",
  "Море — почти шесть тысяч полотен. Работал в Феодосии и писал воду быстрее, чем большинство пишет эскизы.":
    "La mer — près de six mille toiles. Il travaillait à Feodossia et peignait l'eau plus vite que la plupart ne font une esquisse.",
  "Андрей Рублёв": "Andreï Roublev",
  "Иконописец начала XV века. Его «Троица» — самая известная русская икона; иконопись здесь древнее живописи на несколько веков.":
    "Peintre d'icônes du début du XVe siècle. Sa « Trinité » est la plus connue des icônes russes ; ici, la peinture d'icônes précède la peinture de plusieurs siècles.",
  "Кино добавилось в XX веке: **Сергей Эйзенштейн** и его «Броненосец „Потёмкин“» (1925) вошли в учебники монтажа, **Андрей Тарковский** — в число самых изучаемых режиссёров мира, а студия **«Мосфильм»** работает с 1924 года.":
    "Le cinéma s'est ajouté au XXe siècle : **Sergueï Eisenstein** et son « Cuirassé Potemkine » (1925) sont entrés dans les manuels de montage, **Andreï Tarkovski** compte parmi les cinéastes les plus étudiés au monde, et le studio **Mosfilm** travaille depuis 1924.",
  "Кто написал «Троицу»?": "Qui a peint la « Trinité » ?",
  "Василий Суриков": "Vassili Sourikov",
  "Икона начала XV века и самое известное произведение русской иконописи. Репин, Айвазовский и Суриков работали через четыреста с лишним лет после Рублёва.":
    "Une icône du début du XVe siècle et l'œuvre la plus connue de la peinture d'icônes russe. Répine, Aïvazovski et Sourikov ont travaillé plus de quatre cents ans après Roublev.",
  "**Передвижники** — не стиль живописи, а объединение с уставом и выставочным маршрутом. Их объединяло желание показывать картины по всей стране, а писали они по-разному.":
    "Les **ambulants** ne sont pas un style de peinture mais une association avec des statuts et un circuit d'expositions. Ce qui les unissait, c'était la volonté de montrer des tableaux dans tout le pays ; ils peignaient de façons très diverses.",
  "Наука и космос": "La science et l'espace",
  "Почему это важно: две даты из этого урока — 4 октября 1957 года и 12 апреля 1961 года — знают везде, и обе относятся к России. Праздник 12 апреля объясняется именно здесь.":
    "Pourquoi cela compte : deux dates de cette leçon — le 4 octobre 1957 et le 12 avril 1961 — sont connues partout, et toutes deux tiennent à la Russie. La fête du 12 avril s'explique précisément ici.",
  "С чего начиналась наука": "Par où la science a commencé",
  "**Академия наук** основана указом **Петра I в 1724 году** в Петербурге и открылась год спустя. Это одно из старейших научных учреждений Европы, и создавалось оно сразу как государственное.":
    "L'**Académie des sciences** a été fondée par décret de **Pierre Ier en 1724** à Pétersbourg et a ouvert un an plus tard. C'est l'une des plus anciennes institutions scientifiques d'Europe, et elle fut créée d'emblée comme institution d'État.",
  "**Михаил Ломоносов** (1711–1765) — первый русский учёный мирового уровня: химик, физик, астроном, поэт и историк сразу. По его замыслу в **1755 году** основан **Московский университет**, который носит его имя.":
    "**Mikhaïl Lomonossov** (1711-1765) est le premier savant russe de rang mondial : chimiste, physicien, astronome, poète et historien à la fois. C'est selon son projet que fut fondée en **1755** l'**université de Moscou**, qui porte son nom.",
  "**Дмитрий Менделеев** в **1869 году** сформулировал **периодический закон** и построил таблицу элементов, оставив в ней пустые клетки под ещё не открытые вещества. Когда их нашли, свойства совпали с предсказанными — это и сделало таблицу законом, а не удобным списком.":
    "**Dmitri Mendeleïev** formula en **1869** la **loi périodique** et construisit le tableau des éléments, y laissant des cases vides pour des corps encore inconnus. Quand on les trouva, leurs propriétés correspondirent aux prévisions — et c'est ce qui fit du tableau une loi et non une liste commode.",
  "**Иван Павлов** получил **Нобелевскую премию в 1904 году** за работы о пищеварении — первым из россиян; **Илья Мечников** — в 1908 году за учение об иммунитете. Позже премии по физике получили **Ландау**, **Басов** и **Прохоров**, **Капица**, **Алфёров**, **Абрикосов** и **Гинзбург**.":
    "**Ivan Pavlov** reçut le **prix Nobel en 1904** pour ses travaux sur la digestion — le premier venu de Russie ; **Ilia Metchnikov** l'obtint en 1908 pour la théorie de l'immunité. Plus tard, les prix de physique allèrent à **Landau**, **Bassov** et **Prokhorov**, **Kapitsa**, **Alferov**, **Abrikossov** et **Guinzbourg**.",
  "Спутник": "Le Spoutnik",
  "**4 октября 1957 года** с полигона в казахской степи вышел на орбиту **первый искусственный спутник Земли**. Аппарат весил 83 килограмма и передавал повторяющийся сигнал, который ловили радиолюбители по всему миру. С этого дня отсчитывают космическую эру.":
    "Le **4 octobre 1957**, depuis un polygone de la steppe kazakhe, le **premier satellite artificiel de la Terre** fut mis en orbite. L'engin pesait 83 kilos et émettait un signal répété que des radioamateurs captaient dans le monde entier. C'est de ce jour qu'on fait partir l'ère spatiale.",
  "Через месяц на орбиту отправили собаку **Лайку** — первое живое существо в космосе; вернуть её не могли, техники возвращения ещё не было. В **1960 году** **Белка и Стрелка** слетали и вернулись живыми, и это открыло дорогу человеку.":
    "Un mois plus tard, la chienne **Laïka** fut envoyée en orbite — le premier être vivant dans l'espace ; on ne pouvait pas la ramener, la technique du retour n'existait pas encore. En **1960**, **Belka et Strelka** partirent et revinrent vivantes, ce qui ouvrit la voie à l'homme.",
  "Теоретическую основу заложил школьный учитель из Калуги **Константин Циолковский**, опубликовавший расчёт ракетного движения в 1903 году. Практику вёл **Сергей Королёв** — главный конструктор, чьё имя до его смерти в 1966 году держали в тайне.":
    "Le fondement théorique avait été posé par un instituteur de Kalouga, **Konstantin Tsiolkovski**, qui publia le calcul de la propulsion par fusée en 1903. La pratique fut menée par **Sergueï Koroliov** — le constructeur en chef, dont le nom resta secret jusqu'à sa mort en 1966.",
  "Что произошло 4 октября 1957 года?": "Que s'est-il passé le 4 octobre 1957 ?",
  "Первый полёт человека в космос": "Le premier vol humain dans l'espace",
  "Запуск первого искусственного спутника Земли":
    "Le lancement du premier satellite artificiel de la Terre",
  "Первый выход в открытый космос": "La première sortie dans l'espace",
  "Запуск первой орбитальной станции": "Le lancement de la première station orbitale",
  "Аппарат весом 83 килограмма передавал сигнал, который слушал весь мир. С этой даты отсчитывают космическую эру.":
    "Un engin de 83 kilos émettait un signal que le monde entier écoutait. C'est de cette date qu'on fait partir l'ère spatiale.",
  "Гагарин": "Gagarine",
  "**12 апреля 1961 года** **Юрий Гагарин** на корабле **«Восток-1»** сделал **один виток** вокруг Земли и приземлился под Саратовом. Полёт длился **108 минут**. Ему было 27 лет.":
    "Le **12 avril 1961**, **Iouri Gagarine**, à bord du vaisseau **Vostok 1**, fit **une révolution** autour de la Terre et se posa près de Saratov. Le vol dura **108 minutes**. Il avait 27 ans.",
  "**12 апреля** — **День космонавтики**, государственный праздник; Генеральная Ассамблея ООН в 2011 году объявила эту дату Международным днём полёта человека в космос.":
    "Le **12 avril** est la **Journée de la cosmonautique**, fête d'État ; l'Assemblée générale de l'ONU a proclamé cette date, en 2011, Journée internationale du vol habité dans l'espace.",
  "Дальше сроки сжаты: **1963** — **Валентина Терешкова**, первая женщина в космосе; **1965** — **Алексей Леонов**, первый выход в открытый космос; **1970** — **«Луноход-1»**, первый самоходный аппарат на другом небесном теле; **1971** — **«Салют-1»**, первая орбитальная станция.":
    "Ensuite les échéances se resserrent : **1963** — **Valentina Terechkova**, première femme dans l'espace ; **1965** — **Alexeï Leonov**, première sortie dans l'espace ; **1970** — **Lunokhod 1**, premier engin automoteur sur un autre corps céleste ; **1971** — **Saliout 1**, première station orbitale.",
  "Сколько продолжался полёт Юрия Гагарина?": "Combien de temps dura le vol de Iouri Gagarine ?",
  "Около суток": "Environ une journée",
  "108 минут, один виток вокруг Земли": "108 minutes, une révolution autour de la Terre",
  "Двенадцать часов": "Douze heures",
  "Трое суток": "Trois jours",
  "Корабль «Восток-1», старт 12 апреля 1961 года, посадка под Саратовом. Эта дата стала Днём космонавтики.":
    "Le vaisseau Vostok 1, départ le 12 avril 1961, atterrissage près de Saratov. Cette date est devenue la Journée de la cosmonautique.",
  "Космос сегодня": "L'espace aujourd'hui",
  "Станция **«Мир»** работала на орбите с **1986 по 2001 год** — пятнадцать лет вместо расчётных пяти. С **1998 года** Россия участвует в **Международной космической станции**: первый её модуль был запущен именно отсюда, и российский сегмент обслуживает станцию до сих пор.":
    "La station **Mir** a travaillé en orbite de **1986 à 2001** — quinze ans au lieu des cinq prévus. Depuis **1998**, la Russie participe à la **Station spatiale internationale** : son premier module a été lancé précisément d'ici, et le segment russe dessert la station encore aujourd'hui.",
  "Байконур": "Baïkonour",
  "Старейший космодром мира, откуда стартовали спутник и Гагарин. Находится в Казахстане и арендуется Россией.":
    "Le plus ancien cosmodrome du monde, d'où sont partis le Spoutnik et Gagarine. Il se trouve au Kazakhstan et la Russie le loue.",
  "Плесецк": "Plessetsk",
  "Архангельская область. Самый северный действующий космодром; отсюда идут в основном военные и научные запуски.":
    "Oblast d'Arkhangelsk. Le cosmodrome actif le plus septentrional ; d'ici partent surtout les lancements militaires et scientifiques.",
  "Восточный": "Vostotchny",
  "Амурская область, первый пуск в 2016 году. Строился, чтобы тяжёлые запуски шли с собственной территории.":
    "Oblast de l'Amour, premier tir en 2016. Il fut bâti pour que les lancements lourds partent du territoire national.",
  "Звёздный городок": "La Cité des étoiles",
  "Подмосковье. Центр подготовки космонавтов; сюда приезжают тренироваться экипажи и других стран.":
    "Dans la région de Moscou. Le centre de préparation des cosmonautes ; des équipages d'autres pays viennent s'y entraîner.",
  "Атом": "L'atome",
  "Атомным проектом руководил **Игорь Курчатов**. В **1954 году** в **Обнинске** заработала **первая в мире атомная электростанция**, дававшая ток в общую сеть; в **1959 году** вышел в море **атомный ледокол «Ленин»**.":
    "Le projet atomique fut dirigé par **Igor Kourtchatov**. En **1954**, à **Obninsk**, entra en service la **première centrale nucléaire du monde** à fournir du courant au réseau général ; en **1959** prit la mer le **brise-glace nucléaire Lénine**.",
  "Атомный ледокольный флот у России единственный в мире — без него **Северный морской путь** не работал бы круглый год. Обратная сторона той же истории — **чернобыльская авария 1986 года**, после которой требования к безопасности реакторов пересматривались во всём мире.":
    "La flotte de brise-glaces nucléaires de la Russie est la seule au monde — sans elle, la **route maritime du Nord** ne fonctionnerait pas toute l'année. L'envers de la même histoire est l'**accident de Tchernobyl en 1986**, après lequel les exigences de sûreté des réacteurs furent revues partout dans le monde.",
  "Где в 1954 году заработала первая в мире атомная электростанция?":
    "Où entra en service, en 1954, la première centrale nucléaire du monde ?",
  "В Обнинске": "À Obninsk",
  "В Дубне": "À Doubna",
  "В Сарове": "À Sarov",
  "В Северодвинске": "À Severodvinsk",
  "Станция была небольшой, но давала ток в общую сеть — этим и отличалась от опытных реакторов. Через пять лет вышел атомный ледокол «Ленин».":
    "La centrale était petite, mais elle donnait du courant au réseau général — et c'est en cela qu'elle se distinguait des réacteurs d'essai. Cinq ans plus tard prenait la mer le brise-glace nucléaire Lénine.",
  "**Байконур** находится не в России. Космодром остался в Казахстане после распада СССР и работает по договору аренды — поэтому и строился Восточный.":
    "**Baïkonour** n'est pas en Russie. Le cosmodrome est resté au Kazakhstan après la fin de l'URSS et fonctionne sous un bail — c'est aussi pour cela qu'on a bâti Vostotchny.",
  "Работа и деньги": "Le travail et l'argent",
  "Общество и повседневная жизнь": "La société et la vie quotidienne",
  "Почему это важно: почти всё, что человек знает о новой стране в первый год, он узнаёт через работу и оплату счетов. Правила здесь записаны в одном кодексе, и они одинаковы для гражданина и для иностранца с разрешением на работу.":
    "Pourquoi cela compte : presque tout ce qu'on apprend d'un pays nouveau la première année, on l'apprend par le travail et le paiement des factures. Les règles sont ici écrites dans un seul code, et elles sont les mêmes pour le citoyen et pour l'étranger muni d'une autorisation de travail.",
  "Трудовой договор": "Le contrat de travail",
  "Отношения работника и работодателя описывает **Трудовой кодекс**, действующий с **2002 года**. Договор заключается **письменно, в двух экземплярах** — один остаётся у работника. Если человека фактически допустили к работе, договор считается заключённым, даже когда бумагу подписать забыли.":
    "Les rapports entre salarié et employeur sont décrits par le **Code du travail**, en vigueur depuis **2002**. Le contrat se conclut **par écrit, en deux exemplaires** — l'un reste au salarié. Si l'on a effectivement laissé quelqu'un prendre son travail, le contrat est réputé conclu, même quand on a oublié de signer le papier.",
  "**Испытательный срок** — не более **трёх месяцев**; для руководителей организаций, их заместителей и главных бухгалтеров он может доходить до шести. На испытании действуют те же правила, что и потом: та же оплата, тот же отпуск, те же взносы.":
    "La **période d'essai** ne dépasse pas **trois mois** ; pour les dirigeants d'organisations, leurs adjoints et les chefs comptables, elle peut aller jusqu'à six. Pendant l'essai s'appliquent les mêmes règles qu'ensuite : même paie, mêmes congés, mêmes cotisations.",
  "**Трудовая книжка** с **2020 года** ведётся в электронном виде. Тем, кто устраивается на работу впервые, бумажную уже не заводят; сведения о стаже хранятся в Социальном фонде и запрашиваются через портал.":
    "Le **livret de travail** est tenu depuis **2020** sous forme électronique. À ceux qui prennent un emploi pour la première fois, on n'en ouvre plus de version papier ; les informations sur les périodes travaillées sont conservées par le Fonds social et se demandent par le portail.",
  "Время и отпуск": "Le temps et les congés",
  "Нормальная рабочая неделя — **не более 40 часов**. Ежегодный оплачиваемый отпуск — **28 календарных дней**; у некоторых профессий и у работающих на Севере он длиннее. Заработная плата выплачивается **не реже чем каждые полмесяца**, то есть аванс здесь не любезность работодателя, а требование закона.":
    "La semaine de travail normale est d'**au plus 40 heures**. Le congé annuel payé est de **28 jours calendaires** ; il est plus long pour certaines professions et pour ceux qui travaillent dans le Nord. Le salaire se verse **au moins deux fois par mois** : l'acompte n'est donc pas une amabilité de l'employeur mais une exigence de la loi.",
  "Ниже **МРОТ** — минимального размера оплаты труда, который устанавливается федеральным законом, — платить нельзя. В регионах может действовать своё, более высокое соглашение.":
    "On ne peut pas payer en dessous du **MROT** — le montant minimal de rémunération du travail, fixé par une loi fédérale. Dans les régions, un accord propre et plus élevé peut s'appliquer.",
  "Сколько дней составляет ежегодный оплачиваемый отпуск по общему правилу?":
    "Combien de jours dure le congé annuel payé selon la règle générale ?",
  "28 календарных дней": "28 jours calendaires",
  "20 рабочих дней": "20 jours ouvrables",
  "14 календарных дней": "14 jours calendaires",
  "Столько, сколько записано в договоре": "Autant qu'il est écrit dans le contrat",
  "Меньше — нельзя, больше — можно. У работающих на Севере и у ряда профессий отпуск длиннее.":
    "Moins, c'est interdit ; plus, c'est permis. Pour ceux qui travaillent dans le Nord et pour certaines professions, le congé est plus long.",
  "Налоги и взносы": "Impôts et cotisations",
  "С заработка удерживается **налог на доходы физических лиц**. С **2025 года** он считается по **пятиступенчатой шкале**: базовая ставка **13 %**, а с дохода свыше 2,4 миллиона рублей в год ставка растёт до 15, 18, 20 и 22 процентов на верхних ступенях. Повышенная ставка применяется не ко всему доходу, а только к той части, которая перешла порог.":
    "Sur le salaire est retenu l'**impôt sur le revenu des personnes physiques**. Depuis **2025**, il se calcule selon une **échelle à cinq degrés** : taux de base **13 %**, et à partir de 2,4 millions de roubles par an le taux monte à 15, 18, 20 et 22 pour cent aux degrés supérieurs. Le taux majoré ne s'applique pas à tout le revenu, mais seulement à la part qui a franchi le seuil.",
  "**Страховые взносы** — на пенсию, медицину и социальное страхование — платит **работодатель**, сверх зарплаты и из своих средств. Работник их не перечисляет и в расчётном листке видит только НДФЛ.":
    "Les **cotisations sociales** — retraite, santé et assurance sociale — sont payées par l'**employeur**, en plus du salaire et sur ses propres fonds. Le salarié ne les verse pas et ne voit sur sa fiche de paie que l'impôt sur le revenu.",
  "Кто перечисляет страховые взносы за работника?":
    "Qui verse les cotisations sociales pour un salarié ?",
  "Работник из своей зарплаты": "Le salarié, sur son salaire",
  "Работодатель, сверх зарплаты и из своих средств":
    "L'employeur, en plus du salaire et sur ses propres fonds",
  "Работник и работодатель поровну": "Le salarié et l'employeur à parts égales",
  "Региональный бюджет": "Le budget de la région",
  "В расчётном листке работник видит удержание НДФЛ, но не взносы: они лежат на работодателе.":
    "Sur sa fiche de paie, le salarié voit la retenue de l'impôt sur le revenu, mais pas les cotisations : elles pèsent sur l'employeur.",
  "Номера, без которых не обойтись": "Les numéros dont on ne peut se passer",
  "СНИЛС": "Le SNILS",
  "Номер индивидуального лицевого счёта в системе пенсионного страхования. На нём копится стаж, и он нужен почти для любой государственной услуги.":
    "Le numéro du compte personnel dans le système d'assurance retraite. C'est sur lui que s'accumulent les périodes travaillées, et il faut l'avoir pour presque toute démarche publique.",
  "ИНН": "L'INN",
  "Идентификационный номер налогоплательщика. Присваивается один раз на всю жизнь и не меняется при переезде или смене фамилии.":
    "Le numéro d'identification du contribuable. Il est attribué une fois pour toutes et ne change ni au déménagement ni au changement de nom.",
  "Полис ОМС": "La police d'assurance maladie",
  "Обязательное медицинское страхование. Оформляется страховой организацией и действует по всей стране, а не только там, где выдан.":
    "L'assurance maladie obligatoire. Elle est établie par une compagnie d'assurance et vaut dans tout le pays, non seulement là où elle a été délivrée.",
  "Госуслуги": "Le portail des services publics",
  "Портал, через который заказывают справки, записываются к врачу и подают заявления. Подтверждённая учётная запись заменяет очередь.":
    "Le portail par lequel on commande des attestations, on prend rendez-vous chez le médecin et on dépose des demandes. Un compte confirmé remplace la file d'attente.",
  "Пенсия и самозанятость": "La retraite et le travail indépendant",
  "После реформы **2018 года** пенсионный возраст поднимается постепенно и к **2028 году** составит **65 лет** для мужчин и **60 лет** для женщин. Кроме возраста нужны стаж и пенсионные коэффициенты; у отдельных профессий и у северян сохраняется досрочный выход.":
    "Après la réforme de **2018**, l'âge de la retraite monte peu à peu et atteindra en **2028** **65 ans** pour les hommes et **60 ans** pour les femmes. Outre l'âge, il faut des périodes travaillées et des points de retraite ; certaines professions et les habitants du Nord gardent un départ anticipé.",
  "Для тех, кто работает на себя, с **2019 года** существует **налог на профессиональный доход**: **4 %** с поступлений от частных лиц и **6 %** от организаций, без отчётности и без кассы, пока доход не превышает 2,4 миллиона рублей в год. Регистрация занимает несколько минут в приложении, и именно поэтому «самозанятых» в стране миллионы.":
    "Pour ceux qui travaillent à leur compte, il existe depuis **2019** un **impôt sur le revenu professionnel** : **4 %** sur les rentrées venant de particuliers et **6 %** sur celles venant d'entreprises, sans déclaration comptable ni caisse enregistreuse, tant que le revenu ne dépasse pas 2,4 millions de roubles par an. L'inscription prend quelques minutes dans une application, et c'est bien pour cela que les travailleurs indépendants se comptent par millions dans le pays.",
  "Деньги": "L'argent",
  "Валюта — **рубль**, в нём **100 копеек**; графический знак ₽ утверждён в **2013 году**. Выпуск денег ведёт **Центральный банк**, и защита устойчивости рубля названа его основной функцией прямо в Конституции.":
    "La monnaie est le **rouble**, divisé en **100 kopecks** ; le signe ₽ a été adopté en **2013**. C'est la **Banque centrale** qui émet la monnaie, et la Constitution nomme expressément la défense de la stabilité du rouble comme sa fonction principale.",
  "Безналичная оплата распространена очень широко — карточкой платят и в маленьком магазине, и на рынке. Национальная платёжная система носит имя **«Мир»**; пенсии и бюджетные выплаты зачисляются именно на такие карты.":
    "Le paiement sans espèces est très répandu — on paie par carte dans la petite boutique comme au marché. Le système national de paiement porte le nom de **Mir** ; les retraites et les versements du budget arrivent précisément sur ces cartes-là.",
  "Что изменилось в налоге на доходы с 2025 года?":
    "Qu'est-ce qui a changé dans l'impôt sur le revenu à partir de 2025 ?",
  "Налог отменили для низких доходов": "L'impôt a été supprimé pour les bas revenus",
  "Единую ставку заменила пятиступенчатая шкала":
    "Le taux unique a été remplacé par une échelle à cinq degrés",
  "Ставку подняли до 22 % для всех": "Le taux est passé à 22 % pour tous",
  "Налог стал платить работодатель": "C'est l'employeur qui paie désormais l'impôt",
  "Базовая ставка осталась 13 %. Повышенные ставки применяются только к той части дохода, которая перешла соответствующий порог.":
    "Le taux de base est resté à 13 %. Les taux majorés ne s'appliquent qu'à la part du revenu qui a franchi le seuil correspondant.",
  "Устная договорённость об оплате «в конверте» не защищает работника ничем: без договора и взносов не идёт стаж, не считается пенсия и не оплачивается больничный. Требование письменного договора — не формальность.":
    "Un accord verbal pour être payé « dans une enveloppe » ne protège en rien le salarié : sans contrat ni cotisations, aucune période ne compte, la retraite ne se calcule pas et l'arrêt maladie n'est pas payé. L'exigence d'un contrat écrit n'est pas une formalité.",
  "Здоровье и образование": "Santé et éducation",
  "Почему это важно: две системы, с которыми сталкивается каждая семья. Обе бесплатны в своей основной части, но обе работают по правилам прикрепления и сроков, которых со стороны не видно.":
    "Pourquoi cela compte : deux systèmes que chaque famille rencontre. Tous deux sont gratuits dans leur partie principale, mais tous deux fonctionnent selon des règles de rattachement et de délais qu'on ne voit pas de l'extérieur.",
  "Как устроена медицина": "Comment la médecine est faite",
  "Основа — **обязательное медицинское страхование**. Полис ОМС оформляет страховая медицинская организация, а взносы за работающих платит работодатель, за детей, пенсионеров и безработных — регион. С полисом помощь в государственной поликлинике и больнице бесплатна.":
    "La base est l'**assurance maladie obligatoire**. La police est établie par une compagnie d'assurance maladie, et les cotisations sont payées par l'employeur pour ceux qui travaillent, par la région pour les enfants, les retraités et les chômeurs. Avec la police, les soins en polyclinique et à l'hôpital publics sont gratuits.",
  "Объём того, что входит в бесплатную помощь, определяет **программа государственных гарантий**, которую Правительство утверждает **каждый год**. Всё, что за её пределами, оказывается платно или по добровольному страхованию.":
    "L'étendue de ce qui entre dans les soins gratuits est fixée par le **programme des garanties de l'État**, que le gouvernement approuve **chaque année**. Tout ce qui est en dehors se paie ou relève d'une assurance volontaire.",
  "Человек **прикрепляется к поликлинике** — обычно по месту жительства, но выбрать другую можно, не чаще одного раза в год. Врача внутри поликлиники тоже можно выбрать, с согласия самого врача.":
    "On est **rattaché à une polyclinique** — d'ordinaire selon le lieu de résidence, mais on peut en choisir une autre, pas plus d'une fois par an. On peut aussi choisir son médecin à l'intérieur de la polyclinique, avec l'accord du médecin lui-même.",
  "Когда срочно": "Quand c'est urgent",
  "**Скорая помощь** вызывается по номеру **103**; единый номер экстренных служб — **112**, он работает даже без денег на счету и без сим-карты. При состояниях, угрожающих жизни, помощь оказывается **бесплатно и немедленно, без полиса и без документов** — отказ в таком случае незаконен.":
    "On appelle les **secours** au **103** ; le numéro d'urgence unique est le **112**, qui fonctionne même sans crédit et sans carte SIM. En cas d'état mettant la vie en danger, les soins sont donnés **gratuitement et immédiatement, sans police et sans papiers** — un refus serait alors illégal.",
  "Нужен ли полис, чтобы получить экстренную помощь?":
    "Faut-il une police d'assurance pour recevoir des soins d'urgence ?",
  "Да, иначе помощь будет платной": "Oui, sinon les soins seront payants",
  "Нет: при угрозе жизни помощь оказывают без полиса и документов":
    "Non : en cas de danger pour la vie, les soins sont donnés sans police ni papiers",
  "Да, но его можно предъявить позже в течение суток":
    "Oui, mais on peut la présenter plus tard dans les vingt-quatre heures",
  "Нужен полис добровольного страхования": "Il faut une police d'assurance volontaire",
  "Скорая помощь вызывается по номеру 103, единый экстренный номер — 112. Отказать в неотложной помощи из-за отсутствия документов нельзя.":
    "Les secours s'appellent au 103, le numéro d'urgence unique est le 112. On ne peut pas refuser des soins urgents faute de papiers.",
  "Отдельно стоит **диспансеризация** — бесплатное профилактическое обследование по полису ОМС: до сорока лет раз в три года, после сорока — ежегодно. На неё дают оплачиваемый выходной день.":
    "Il faut citer à part la **visite de prévention** — un examen préventif gratuit sur la police d'assurance maladie : tous les trois ans jusqu'à quarante ans, tous les ans après. Un jour de congé payé est accordé pour s'y rendre.",
  "Школа": "L'école",
  "Школьное обучение занимает **одиннадцать классов**: четыре года начальной школы, пять лет основной и два года старшей. Обязательным Конституция называет **основное общее образование** — то есть девять классов; дальше человек выбирает старшую школу или колледж.":
    "La scolarité couvre **onze classes** : quatre ans d'école primaire, cinq d'école de base et deux d'école supérieure. La Constitution appelle obligatoire l'**enseignement général de base** — c'est-à-dire neuf classes ; ensuite, on choisit l'école supérieure ou le collège professionnel.",
  "Учебный год начинается **1 сентября**, и это государственный праздник — **День знаний**. Оценки ставятся по **пятибалльной** шкале, где **5** — высшая, а **2** — неудовлетворительно; единицу на практике почти не ставят.":
    "L'année scolaire commence le **1er septembre**, et c'est une fête d'État — la **Journée du savoir**. Les notes vont sur une échelle **de cinq**, où **5** est la meilleure et **2** insuffisant ; le 1 ne se met presque jamais en pratique.",
  "Приём в школу идёт по территориальному принципу: за каждой школой закреплён свой участок, и живущим на нём место гарантировано. Оставшиеся места распределяются между всеми остальными.":
    "L'inscription à l'école suit le principe territorial : à chaque école est attaché un secteur, et ceux qui y habitent ont une place assurée. Les places restantes se répartissent entre tous les autres.",
  "Экзамены": "Les examens",
  "После **девятого** класса сдают **ОГЭ** — основной государственный экзамен. После **одиннадцатого** — **ЕГЭ**, единый государственный экзамен, который с **2009 года** служит одновременно выпускным и вступительным.":
    "Après la **neuvième** classe, on passe l'**OGE** — l'examen d'État de base. Après la **onzième**, l'**EGE**, l'examen d'État unifié, qui sert depuis **2009** à la fois d'examen de sortie et d'examen d'entrée.",
  "Обязательны русский язык и математика; остальные предметы выбирают под будущую специальность. **Результаты ЕГЭ действуют четыре года**, так что поступать можно не сразу после школы.":
    "Le russe et les mathématiques sont obligatoires ; les autres matières se choisissent selon la spécialité visée. Les **résultats de l'EGE valent quatre ans**, si bien qu'on peut s'inscrire ailleurs qu'aussitôt après l'école.",
  "Какой экзамен сдают после девятого класса?":
    "Quel examen passe-t-on après la neuvième classe ?",
  "ОГЭ": "L'OGE",
  "ЕГЭ": "L'EGE",
  "Вступительные экзамены вуза": "Les examens d'entrée de l'université",
  "Никакого": "Aucun",
  "ЕГЭ сдают после одиннадцатого класса, и он служит и выпускным, и вступительным экзаменом сразу.":
    "L'EGE se passe après la onzième classe, et il sert d'examen de sortie et d'entrée à la fois.",
  "После школы": "Après l'école",
  "Колледж": "Le collège professionnel",
  "Среднее профессиональное образование. Поступают после девятого или одиннадцатого класса, учатся два-четыре года и выходят с профессией.":
    "L'enseignement professionnel secondaire. On y entre après la neuvième ou la onzième classe, on y étudie deux à quatre ans et l'on en sort avec un métier.",
  "Бакалавриат и специалитет": "Le bachelor et le diplôme de spécialiste",
  "Первая ступень высшего образования: четыре года у бакалавра, пять-шесть лет у специалиста — например, у врача.":
    "Le premier degré de l'enseignement supérieur : quatre ans pour le bachelor, cinq à six pour le spécialiste — par exemple pour un médecin.",
  "Магистратура": "Le master",
  "Ещё два года после бакалавриата. Можно сменить направление, и второе высшее при этом не считается платным по умолчанию.":
    "Deux ans de plus après le bachelor. On peut changer de domaine, et ce second cursus n'est pas payant par défaut.",
  "Аспирантура": "Le doctorat",
  "Подготовка к научной работе и к защите диссертации. Отсюда выходят кандидаты наук.":
    "La préparation au travail scientifique et à la soutenance d'une thèse. C'est de là que sortent les candidats en sciences.",
  "Места в вузах делятся на **бюджетные** — оплаченные государством и распределяемые по конкурсу баллов — и **платные**. Конституция и говорит именно так: высшее образование бесплатно **на конкурсной основе**, то есть не всем, но и не за деньги.":
    "Les places à l'université se divisent en **places budgétaires** — payées par l'État et attribuées au concours des points — et **places payantes**. La Constitution le dit exactement ainsi : l'enseignement supérieur est gratuit **sur la base d'un concours**, c'est-à-dire non pour tous, mais pas non plus contre de l'argent.",
  "Сколько времени действуют результаты ЕГЭ?":
    "Combien de temps les résultats de l'EGE restent-ils valables ?",
  "Один год": "Un an",
  "Четыре года": "Quatre ans",
  "Бессрочно": "Sans limite de durée",
  "До конца календарного года": "Jusqu'à la fin de l'année civile",
  "Поэтому поступать можно не сразу после школы: результат остаётся действительным несколько приёмных кампаний подряд.":
    "C'est pourquoi on n'est pas obligé de s'inscrire aussitôt après l'école : le résultat reste valable plusieurs campagnes d'admission de suite.",
  "Полис ОМС действует **по всей стране**, а не только в регионе, где выдан. Переехав, менять его не нужно — нужно только прикрепиться к новой поликлинике.":
    "La police d'assurance maladie vaut **dans tout le pays**, non seulement dans la région où elle a été délivrée. Après un déménagement, il n'y a pas à la changer — il suffit de se rattacher à une nouvelle polyclinique.",
  "Документы и учреждения": "Papiers et administrations",
  "Почему это важно: почти любое дело здесь начинается с документа, и почти любой документ теперь оформляется в одном из двух мест — в многофункциональном центре или на портале. Знать, куда идти, важнее, чем знать название ведомства.":
    "Pourquoi cela compte : ici, presque toute démarche commence par un papier, et presque tout papier s'obtient désormais en deux endroits — au centre multiservices ou sur le portail. Savoir où aller importe plus que de connaître le nom de l'administration.",
  "Паспорт": "Le passeport",
  "До четырнадцати лет главный документ ребёнка — **свидетельство о рождении**. Затем выдаётся **паспорт гражданина Российской Федерации**, и его **меняют в 20 и в 45 лет**; после сорока пяти он служит уже без замены. Просроченный паспорт недействителен, и на замену даётся ограниченный срок.":
    "Jusqu'à quatorze ans, le papier principal d'un enfant est l'**acte de naissance**. Ensuite est délivré le **passeport de citoyen de la Fédération de Russie**, que l'on **change à 20 et à 45 ans** ; après quarante-cinq ans, il sert sans être renouvelé. Un passeport périmé n'est pas valable, et le délai pour le remplacer est limité.",
  "Для поездок за границу существует отдельный **заграничный паспорт** — обычный на пять лет и биометрический на десять. Внутренний паспорт за пределами страны не действует.":
    "Pour les voyages à l'étranger existe un **passeport étranger** à part — ordinaire pour cinq ans, biométrique pour dix. Le passeport intérieur ne vaut pas hors du pays.",
  "В каком возрасте меняют паспорт гражданина России?":
    "À quel âge change-t-on le passeport de citoyen russe ?",
  "В 20 и в 45 лет": "À 20 et à 45 ans",
  "В 18 и в 40 лет": "À 18 et à 40 ans",
  "Каждые десять лет": "Tous les dix ans",
  "Паспорт не меняют": "On ne change pas de passeport",
  "Выдаётся он в 14 лет, а после 45 служит без замены. Просроченный паспорт недействителен.":
    "Il est délivré à 14 ans, et après 45 il sert sans renouvellement. Un passeport périmé n'est pas valable.",
  "Регистрация, а не прописка": "L'enregistrement, et non la propiska",
  "Советская **прописка**, дававшая разрешение жить в городе, отменена в **1993 году**. Её место занял **регистрационный учёт**, и это принципиально другое: регистрация **уведомляет** государство о месте жительства, а не разрешает его. Конституционный Суд отдельно указывал, что регистрация не может быть условием осуществления прав.":
    "La **propiska** soviétique, qui donnait l'autorisation d'habiter en ville, a été abolie en **1993**. À sa place est venu l'**enregistrement**, et c'est tout autre chose : l'enregistrement **informe** l'État du lieu de résidence, il ne l'autorise pas. La Cour constitutionnelle a expressément indiqué qu'il ne peut être une condition de l'exercice des droits.",
  "Различают два вида. **Регистрация по месту жительства** — постоянная, ставится штампом в паспорт. **Регистрация по месту пребывания** — временная, оформляется, если человек живёт по другому адресу **более 90 дней**, и выдаётся отдельным свидетельством. Одна другую не отменяет.":
    "On distingue deux formes. L'**enregistrement au lieu de résidence** est permanent et se pose comme un tampon dans le passeport. L'**enregistrement au lieu de séjour** est temporaire, s'établit quand une personne habite à une autre adresse **plus de 90 jours**, et se délivre par une attestation séparée. L'un n'annule pas l'autre.",
  "Через какой срок проживания по новому адресу нужна регистрация по месту пребывания?":
    "Au bout de combien de temps à une nouvelle adresse faut-il un enregistrement au lieu de séjour ?",
  "Более 90 дней": "Plus de 90 jours",
  "Более 7 дней": "Plus de 7 jours",
  "Более года": "Plus d'un an",
  "Она не требуется вовсе": "Il n'est pas exigé du tout",
  "Постоянная регистрация по месту жительства при этом сохраняется: временная её не отменяет и ставится не штампом, а отдельным свидетельством.":
    "L'enregistrement permanent au lieu de résidence subsiste alors : le temporaire ne l'annule pas et ne se pose pas comme un tampon mais comme une attestation séparée.",
  "ЗАГС": "Le ZAGS",
  "**Органы записи актов гражданского состояния** регистрируют рождение, брак, расторжение брака, установление отцовства, перемену имени и смерть. Правовые последствия имеет только брак, заключённый там: **венчание в церкви само по себе брака не создаёт**.":
    "Les **services de l'état civil** enregistrent la naissance, le mariage, le divorce, la reconnaissance de paternité, le changement de nom et le décès. Seul le mariage conclu là a des effets juridiques : **une bénédiction à l'église ne crée pas de mariage par elle-même**.",
  "Брачный возраст — **18 лет**; при уважительных причинах он может быть снижен до шестнадцати, а в отдельных регионах и ниже по региональному закону. Между подачей заявления и регистрацией по общему правилу проходит месяц.":
    "L'âge du mariage est de **18 ans** ; pour des motifs sérieux, il peut être abaissé à seize, et dans certaines régions plus bas encore par une loi régionale. Entre le dépôt de la demande et l'enregistrement, il s'écoule en règle générale un mois.",
  "Какой брак имеет правовые последствия?": "Quel mariage a des effets juridiques ?",
  "Заключённый в органах ЗАГС": "Celui conclu aux services de l'état civil",
  "Освящённый в церкви": "Celui béni à l'église",
  "Любой, если пара живёт вместе более года":
    "Tout mariage, si le couple vit ensemble depuis plus d'un an",
  "Заверенный у нотариуса": "Celui certifié chez un notaire",
  "Венчание можно совершить дополнительно, но само по себе оно брака не создаёт. Совместная жизнь без регистрации тоже не приравнивается к браку.":
    "On peut faire bénir son union en plus, mais cela ne crée pas de mariage par soi-même. La vie commune sans enregistrement n'équivaut pas non plus à un mariage.",
  "Куда идти": "Où aller",
  "МФЦ": "Le centre multiservices",
  "Многофункциональный центр, вывеска «Мои документы». Одно окно почти для всего: паспорт, регистрация, справки, выписки, пособия.":
    "Le centre multiservices, à l'enseigne « Mes papiers ». Un guichet pour presque tout : passeport, enregistrement, attestations, extraits, allocations.",
  "Портал и приложение. Подтверждённая учётная запись позволяет подать большинство заявлений и записаться на приём, не выходя из дома.":
    "Le portail et l'application. Un compte confirmé permet de déposer la plupart des demandes et de prendre rendez-vous sans sortir de chez soi.",
  "Налоговая": "Le fisc",
  "ИНН, декларации, налоговые вычеты — в том числе на лечение, обучение и покупку жилья. Личный кабинет заменяет визит.":
    "L'INN, les déclarations, les déductions fiscales — y compris pour les soins, les études et l'achat d'un logement. L'espace personnel remplace la visite.",
  "Социальный фонд": "Le Fonds social",
  "Пенсии, пособия, СНИЛС и сведения о стаже. Образован объединением пенсионного и социального фондов.":
    "Retraites, allocations, numéro SNILS et périodes travaillées. Il est né de la fusion des fonds de retraite et social.",
  "Экстренные номера и воинский учёт": "Numéros d'urgence et registre militaire",
  "Единый номер — **112**. Отдельно работают **101** (пожарные и спасатели), **102** (полиция), **103** (скорая помощь) и **104** (аварийная газовая служба). Со 112 можно звонить без денег на счету, без сим-карты и с заблокированного телефона.":
    "Le numéro unique est le **112**. Fonctionnent aussi le **101** (pompiers et secours), le **102** (police), le **103** (secours médicaux) et le **104** (service d'urgence du gaz). Le 112 s'appelle sans crédit, sans carte SIM et depuis un téléphone bloqué.",
  "Мужчины состоят на **воинском учёте**. Призыв касается возраста **от 18 до 30 лет**; верхняя граница поднята с 27 до 30 с 2024 года. Тем, чьим убеждениям военная служба противоречит, Конституция даёт право на **альтернативную гражданскую службу** — она дольше и проходит обычно в гражданских учреждениях.":
    "Les hommes sont inscrits au **registre militaire**. L'appel concerne l'âge **de 18 à 30 ans** ; la limite supérieure est passée de 27 à 30 ans en 2024. À ceux dont les convictions s'opposent au service militaire, la Constitution donne droit à un **service civil de remplacement** — plus long, et accompli d'ordinaire dans des institutions civiles.",
  "Отсутствие регистрации не лишает человека прав — ни на медицинскую помощь, ни на школу для ребёнка, ни на выборы. Но за проживание без неё дольше установленного срока предусмотрен штраф, так что это обязанность, а не разрешение.":
    "L'absence d'enregistrement ne prive personne de ses droits — ni aux soins, ni à l'école pour son enfant, ni au vote. Mais habiter sans lui au-delà du délai fixé est passible d'une amende : c'est donc un devoir, non une autorisation.",
  "Быт и обычаи": "Le quotidien et les usages",
  "Почему это важно: правила из этого урока нигде не записаны, но нарушают их заметнее, чем законы. Разуться в прихожей и подарить нечётное число цветов — мелочи, по которым сразу видно, свой человек в доме или чужой.":
    "Pourquoi cela compte : les règles de cette leçon ne sont écrites nulle part, mais on les enfreint de façon plus visible que les lois. Se déchausser dans l'entrée et offrir un nombre impair de fleurs sont des détails auxquels on voit tout de suite si l'on est chez soi dans la maison ou étranger.",
  "Как обращаться": "Comment s'adresser aux gens",
  "У человека три имени: **имя, отчество и фамилия**. Отчество образуется от имени отца — **Иванович** и **Ивановна**, **Сергеевич** и **Сергеевна**. Обращение по имени и отчеству — уважительное: так говорят с преподавателем, врачом, начальником, с человеком старше себя.":
    "Une personne a trois noms : le **prénom, le patronyme et le nom de famille**. Le patronyme se forme sur le prénom du père — **Ivanovitch** et **Ivanovna**, **Sergueïevitch** et **Sergueïevna**. S'adresser à quelqu'un par le prénom et le patronyme est la forme respectueuse : c'est ainsi qu'on parle à un enseignant, à un médecin, à un supérieur, à quelqu'un de plus âgé que soi.",
  "Есть **«ты»** и **«вы»**. К незнакомому, к старшему, к должностному лицу — только «вы». Переход на «ты» предлагает старший или тот, кто выше по положению, и предложение это обычно произносят вслух.":
    "Il y a le **tu** et le **vous**. À un inconnu, à un aîné, à un représentant de l'autorité — seulement vous. Le passage au tu est proposé par l'aîné ou par celui qui est plus haut placé, et cette proposition se dit d'ordinaire à voix haute.",
  "Полные имена в быту почти не звучат: **Александр** — Саша, **Мария** — Маша, **Дмитрий** — Дима, **Екатерина** — Катя. Уменьшительное имя не фамильярность, а норма между знакомыми; но с отчеством оно не сочетается.":
    "Les prénoms complets ne s'entendent presque pas dans la vie courante : **Alexandre** devient Sacha, **Maria** Macha, **Dmitri** Dima, **Iekaterina** Katia. La forme familière n'est pas une familiarité mais la norme entre gens qui se connaissent ; elle ne s'emploie pourtant pas avec le patronyme.",
  "В гостях": "En visite",
  "В квартире **разуваются в прихожей** — почти без исключений; гостю дают тапочки. Приходить с пустыми руками не принято: приносят торт, конфеты или бутылку к столу.":
    "Dans un appartement, on **se déchausse dans l'entrée** — presque sans exception ; on donne des chaussons à l'invité. On ne vient pas les mains vides : on apporte un gâteau, des chocolats ou une bouteille pour la table.",
  "**Цветы дарят нечётным числом** — три, пять, семь. Чётное число несут на похороны, и ошибка эта считается неприятной. Большие букеты считают уже не по одному цветку, но привычка держится крепко.":
    "On **offre les fleurs en nombre impair** — trois, cinq, sept. Le nombre pair se porte aux funérailles, et cette erreur est mal ressentie. Les grands bouquets ne se comptent plus fleur à fleur, mais l'habitude tient bon.",
  "Через порог не здороваются и не передают вещей — примета старая, но соблюдают её многие. Хозяин сначала зовёт войти, и только потом подают руку.":
    "On ne se salue pas et l'on ne se passe rien par-dessus le seuil — la croyance est ancienne, mais beaucoup l'observent. L'hôte invite d'abord à entrer, et c'est seulement ensuite qu'on se donne la main.",
  "Сколько цветов принято дарить?": "Combien de fleurs offre-t-on d'ordinaire ?",
  "Нечётное число: три, пять, семь": "Un nombre impair : trois, cinq, sept",
  "Чётное число": "Un nombre pair",
  "Ровно дюжину": "Exactement une douzaine",
  "Число значения не имеет": "Le nombre n'a pas d'importance",
  "Чётное число цветов несут на похороны. Очень большие букеты по одному цветку уже не считают, но правило держится.":
    "Un nombre pair de fleurs se porte aux funérailles. Les très grands bouquets ne se comptent plus fleur à fleur, mais la règle tient.",
  "За столом": "À table",
  "Обед состоит из **первого** — супа, **второго** и **третьего**, то есть напитка. Суп здесь не закуска, а полноценное блюдо: **борщ** со свёклой, **щи** из капусты, **уха** из рыбы, **солянка**.":
    "Le repas se compose du **premier** — la soupe —, du **deuxième** et du **troisième**, c'est-à-dire de la boisson. La soupe n'est pas ici une entrée mais un plat à part entière : le **bortsch** à la betterave, les **chtchi** au chou, l'**oukha** de poisson, la **soliánka**.",
  "Дальше — **пельмени**, **каша**, **картошка**, **блины**, **пироги**. Со **сметаной** едят почти всё, что можно ею заправить. Из напитков — **чай** в любое время дня, **компот**, **квас** и **морс**.":
    "Viennent ensuite les **pelmeni**, la **kacha**, les **pommes de terre**, les **blinis**, les **tourtes**. On mange avec de la **smetana** presque tout ce qui s'en accommode. Comme boissons : le **thé** à toute heure du jour, le **kompot**, le **kvas** et le **mors**.",
  "**Солёные огурцы**, квашеная капуста и варенье — заготовки, которые многие семьи делают сами, банками, на всю зиму. Отсюда и погреба на дачах, и балконы, заставленные в сентябре.":
    "Les **cornichons au sel**, le chou fermenté et les confitures sont des conserves que bien des familles font elles-mêmes, par bocaux, pour tout l'hiver. De là les caves des datchas et les balcons encombrés en septembre.",
  "Дача и баня": "La datcha et la banya",
  "**Дача** — не загородный дом богатых, а массовое явление: участки по **шесть соток** раздавали работникам предприятий в советское время, и на них строили дом своими руками. Летом города заметно пустеют по выходным именно поэтому.":
    "La **datcha** n'est pas la maison de campagne des riches, mais un phénomène de masse : des parcelles de **six ares** furent distribuées aux employés des entreprises à l'époque soviétique, et l'on y bâtissait la maison de ses propres mains. C'est bien pour cela que les villes se vident sensiblement le week-end en été.",
  "**Баня** — не только мытьё. Ходят компанией, парятся **веником** из берёзовых или дубовых веток, между заходами пьют чай. Суббота — традиционный банный день.":
    "La **banya** n'est pas qu'une toilette. On y va en groupe, on s'y fouette d'un **venik** de branches de bouleau ou de chêne, on boit du thé entre les passages. Le samedi est le jour traditionnel de la banya.",
  "Зима и календарь": "L'hiver et le calendrier",
  "**Новый год** — главный семейный праздник года, и по значению он здесь стоит выше Рождества. Ставят **ёлку**, ждут **Деда Мороза** и его внучку **Снегурочку**, под **бой курантов** в полночь провожают старый год. На столе — **оливье**, селёдка под шубой и мандарины; **новогодние каникулы** длятся с 1 по 8 января.":
    "Le **Nouvel An** est la grande fête familiale de l'année, et il compte ici plus que Noël. On dresse un **sapin**, on attend **Ded Moroz**, le Père Gel, et sa petite-fille **Snegourotchka**, et l'on prend congé de l'année écoulée au **carillon** de minuit. Sur la table, la **salade Olivier**, le hareng sous manteau de fourrure et des mandarines ; les **vacances du Nouvel An** durent du 1er au 8 janvier.",
  "Зимой работает **центральное отопление**: тепло идёт в дома из общей котельной, а не от собственного котла в квартире. Отопительный сезон начинают, когда среднесуточная температура **пять дней подряд держится ниже +8 °C** — то есть по погоде, а не по календарю.":
    "L'hiver, c'est le **chauffage collectif** qui fonctionne : la chaleur arrive dans les logements depuis une chaufferie commune, non d'une chaudière dans l'appartement. La saison de chauffe s'ouvre quand la température moyenne du jour **reste sous +8 °C cinq jours de suite** — donc selon le temps qu'il fait, non selon le calendrier.",
  "Кто по традиции приходит вместе с Дедом Морозом?":
    "Qui vient traditionnellement avec Ded Moroz ?",
  "Снегурочка, его внучка": "Snegourotchka, sa petite-fille",
  "Его жена": "Sa femme",
  "Никто, он приходит один": "Personne, il vient seul",
  "Помощники-эльфы": "Des lutins qui l'aident",
  "Пару Дед Мороз и Снегурочка знают все, и обоих зовут на детские праздники. Подарки кладут под ёлку, а не в чулки.":
    "Tout le monde connaît le couple Ded Moroz et Snegourotchka, et on les invite tous deux aux fêtes d'enfants. Les cadeaux se posent sous le sapin, non dans des chaussettes.",
  "По какому признаку начинают отопительный сезон?":
    "À quel signe ouvre-t-on la saison de chauffe ?",
  "Когда среднесуточная температура пять дней держится ниже +8 °C":
    "Quand la température moyenne du jour reste sous +8 °C pendant cinq jours",
  "С первого октября по всей стране": "Au premier octobre dans tout le pays",
  "Когда об этом попросят жильцы дома": "Quand les habitants de l'immeuble le demandent",
  "Когда выпадет снег": "Quand la neige tombe",
  "Отопление идёт из общей котельной, а не от котла в квартире, поэтому и включают его сразу на весь район — по погоде, а не по календарю.":
    "Le chauffage vient d'une chaufferie commune et non d'une chaudière dans l'appartement, et c'est pourquoi on l'allume d'un coup pour tout le quartier — selon le temps qu'il fait, non selon le calendrier.",
  "Каждый день": "Tous les jours",
  "Подъезд": "La cage d'escalier",
  "Общий вход в многоквартирный дом, обычно с домофоном. Соседи по подъезду — отдельный круг знакомств, и объявления вешают именно там.":
    "L'entrée commune d'un immeuble, en général avec un interphone. Les voisins de la même cage forment un cercle à part, et c'est là qu'on affiche les annonces.",
  "Метро": "Le métro",
  "Работает в Москве, Санкт-Петербурге, Нижнем Новгороде, Новосибирске, Самаре, Екатеринбурге и Казани. В остальных городах — автобусы, троллейбусы и трамваи.":
    "Il fonctionne à Moscou, Saint-Pétersbourg, Nijni Novgorod, Novossibirsk, Samara, Iekaterinbourg et Kazan. Dans les autres villes : autobus, trolleybus et tramways.",
  "Электричка": "L'elektritchka",
  "Пригородный поезд. Ими ездят на дачу и на работу из области, и расписание знают наизусть.":
    "Le train de banlieue. On le prend pour aller à la datcha et pour venir travailler depuis la région, et l'on en connaît les horaires par cœur.",
  "Маршрутка": "La marchroutka",
  "Микроавтобус по фиксированному маршруту, останавливающийся по просьбе. Билета нет — платят при входе или при выходе.":
    "Un minibus sur une ligne fixe, qui s'arrête à la demande. Il n'y a pas de billet : on paie en montant ou en descendant.",
  "Тапочки в прихожей и просьба разуться — не проверка гостя на послушание. Улицу зимой посыпают реагентами, и хозяева берегут пол, а не проверяют манеры.":
    "Les chaussons dans l'entrée et la prière de se déchausser ne sont pas une épreuve d'obéissance pour l'invité. L'hiver, on répand des produits de déneigement dans les rues, et les hôtes protègent leur sol : ils ne vérifient pas vos manières.",
};
