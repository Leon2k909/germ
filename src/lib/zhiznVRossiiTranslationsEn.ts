/**
 * English for the Zhizn v Rossii course cards and headings.
 *
 * Keyed on the RUSSIAN source text exactly as it appears in
 * zhiznVRossiiCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — which is why a table like this
 * is filled in chapter by chapter rather than all at once. This one arrives
 * complete: every string the reader can tap is here.
 *
 * WHY ENGLISH, AND WHY THIS COURSE FIRST. German could already read all seven
 * country courses; English could read three. Of the four it could not, this
 * is the one where the gap actually stops a reader: Latin script can be
 * guessed at, Cyrillic cannot. A learner running the app in English met a
 * lesson in an alphabet they may not read at all, with the translation button
 * hidden because no table existed to offer.
 *
 * THE QUIZZES ARE HERE TOO, as they are in the German table and are not in
 * the three older courses. In front of an English or French card a reader can
 * usually work the question out; in front of Cyrillic they cannot, and a
 * lesson ending in three unreadable questions is not a lesson that was read.
 *
 * WHAT STAYS RUSSIAN. Proper names in their usual English form: the Duma, the
 * Kremlin, the rouble, the Federation Council. Where a term is the answer the
 * exam wants and has no English equivalent — EGE, OGE, OMS, SNILS, INN, MROT,
 * ZAGS — the English gives the meaning and keeps the abbreviation beside it,
 * so the reader learns the word they will actually meet on a form. Words for
 * things with no English name keep the Russian and are explained where they
 * first appear: banya, dacha, elektrichka, marshrutka, podyezd, venik.
 *
 * The course NAME is not here: it is an interface string that already goes
 * through the i18n tables, and a second translation of it would fight the
 * first. The tagline underneath it is course text, so it belongs here.
 */
export const ZHIZN_V_ROSSII_EN: Record<string, string> = {
  // course
  "История, устройство и повседневная жизнь: как устроена страна.":
    "History, institutions and everyday life: how the country is put together.",
  // chapter
  "Символы и Конституция": "Symbols and the Constitution",
  // ru-simvoly
  "Государственные символы": "State symbols",
  "Почему начинаем отсюда: символы встречаются каждый день — на здании администрации, на паспорте, на форме сборной. Через них проще всего войти во всё остальное.":
    "Why we start here: the symbols turn up every day — on a government building, in a passport, on the national team's kit. They are the easiest way into everything else.",
  "Флаг": "The flag",
  "Государственный флаг — прямоугольное полотнище из трёх равных горизонтальных полос: **белой сверху**, **синей посередине** и **красной снизу**. Порядок закреплён **федеральным конституционным законом 2000 года**, а сам триколор появился при **Петре I** — сначала как флаг торговых судов.":
    "The state flag is a rectangular cloth of three equal horizontal bands: **white on top**, **blue in the middle** and **red below**. The order is fixed by a **federal constitutional law of 2000**, and the tricolour itself appeared under **Peter I** — at first as the flag of merchant ships.",
  "Значения цветам официально не присвоены. Толкования, которые слышишь чаще всего — белый как чистота, синий как верность, красный как отвага — появились позже и в законе не записаны. **22 августа** отмечается День Государственного флага.":
    "No meanings are officially assigned to the colours. The readings you hear most often — white for purity, blue for loyalty, red for courage — came later and are not written into the law. **22 August** is State Flag Day.",
  "Герб": "The coat of arms",
  "Герб — **двуглавый орёл**, золотой, на красном щите. Над головами — **три короны**, в лапах **скипетр и держава**, на груди — всадник, поражающий копьём дракона. Двуглавый орёл пришёл в русскую геральдику в конце **XV века**, при **Иване III**, а нынешний вид герб получил в **1993 году**.":
    "The coat of arms is a **double-headed eagle**, gold, on a red shield. Above the heads are **three crowns**, in its claws **a sceptre and an orb**, and on its breast a horseman spearing a dragon. The double-headed eagle entered Russian heraldry at the end of the **15th century**, under **Ivan III**, and the arms took their present form in **1993**.",
  "Три короны": "Three crowns",
  "Сегодня их толкуют как символ суверенитета Российской Федерации и её частей.":
    "Today they are read as a symbol of the sovereignty of the Russian Federation and of its parts.",
  "Скипетр и держава": "Sceptre and orb",
  "Знаки государственной власти и единства страны.": "The marks of state power and of the country's unity.",
  "Всадник": "The horseman",
  "На груди орла — древний московский герб. Его связывают с Георгием Победоносцем.":
    "On the eagle's breast is the ancient coat of arms of Moscow. It is associated with St George the Victorious.",
  "Красный щит": "The red shield",
  "Цвет, на котором орёл изображался ещё в допетровской геральдике.":
    "The colour on which the eagle was already shown in pre-Petrine heraldry.",
  "В каком порядке идут полосы государственного флага сверху вниз?":
    "In what order do the bands of the state flag run from top to bottom?",
  "Красная, синяя, белая": "Red, blue, white",
  "Белая, синяя, красная": "White, blue, red",
  "Синяя, белая, красная": "Blue, white, red",
  "Белая, красная, синяя": "White, red, blue",
  "Белая сверху, синяя посередине, красная снизу. Порядок закреплён федеральным конституционным законом, и флаг с переставленными полосами — просто неправильный.":
    "White on top, blue in the middle, red below. The order is fixed by federal constitutional law, and a flag with the bands swapped is simply wrong.",
  "Гимн": "The anthem",
  "Музыку написал **Александр Александров**: та же мелодия звучала как гимн Советского Союза с **1944 года**. Слова — **Сергея Михалкова**, и он писал их трижды: в 1943, в 1977 и в **2000 году**, когда мелодия вернулась уже к новому государству. Действующий текст начинается словами «Россия — священная наша держава».":
    "The music was written by **Alexander Alexandrov**: the same melody was the anthem of the Soviet Union from **1944**. The words are by **Sergey Mikhalkov**, and he wrote them three times: in 1943, in 1977 and in **2000**, when the melody came back to a new state. The current text opens by calling Russia a sacred power.",
  "Между 1990 и 2000 годом гимном была «Патриотическая песня» Глинки — без слов. Текста к ней так и не утвердили, и это одна из причин, по которым вернулись к прежней мелодии.":
    "Between 1990 and 2000 the anthem was Glinka's Patriotic Song — without words. No text for it was ever approved, and that is one of the reasons the older melody came back.",
  "Кто написал музыку государственного гимна?": "Who wrote the music of the state anthem?",
  "Михаил Глинка": "Mikhail Glinka",
  "Александр Александров": "Alexander Alexandrov",
  "Сергей Михалков": "Sergey Mikhalkov",
  "Пётр Чайковский": "Pyotr Tchaikovsky",
  "Музыка Александрова, слова Михалкова. Мелодия Глинки была гимном с 1990 по 2000 год, но так и осталась без слов.":
    "The music is Alexandrov's, the words Mikhalkov's. Glinka's melody was the anthem from 1990 to 2000, but it never got words.",
  "Столица, язык и главная дата": "Capital, language and the main date",
  "Столица — **Москва**; это записано в **статье 70** Конституции. Государственный язык на всей территории — **русский** (статья 68), при этом республики вправе устанавливать свои государственные языки.":
    "The capital is **Moscow**; that is written into **article 70** of the Constitution. The state language across the whole territory is **Russian** (article 68), while the republics may establish state languages of their own alongside it.",
  "**12 июня** — **День России**. В этот день в **1990 году** была принята Декларация о государственном суверенитете РСФСР. Праздник несколько раз менял название: сначала он назывался Днём принятия декларации, потом Днём независимости, и лишь с 2002 года — Днём России.":
    "**12 June** is **Russia Day**. On that day in **1990** the Declaration of State Sovereignty of the RSFSR was adopted. The holiday changed its name several times: first it was the Day of the Adoption of the Declaration, then Independence Day, and only since 2002 has it been Russia Day.",
  "Что отмечают 12 июня?": "What is marked on 12 June?",
  "День Конституции": "Constitution Day",
  "День России": "Russia Day",
  "День народного единства": "National Unity Day",
  "День Государственного флага": "State Flag Day",
  "12 июня — День России, в память о Декларации о государственном суверенитете 1990 года. День флага — 22 августа, а День народного единства — 4 ноября.":
    "12 June is Russia Day, in memory of the Declaration of State Sovereignty of 1990. Flag Day is 22 August, and National Unity Day is 4 November.",
  "**День России** и **День народного единства** — разные праздники и разные месяцы: 12 июня и 4 ноября. Первый связан с 1990 годом, второй — с событиями 1612 года.":
    "**Russia Day** and **National Unity Day** are different holidays in different months: 12 June and 4 November. The first is tied to 1990, the second to the events of 1612.",
  // ru-konstitutsiya
  "Конституция 1993 года": "The Constitution of 1993",
  "Почему это важно: почти всё, о чём пойдёт речь дальше — президент, парламент, суды, субъекты федерации, языки — записано в одном документе 1993 года. Кто знает его в общих чертах, у того уже есть карта всего курса.":
    "Why this matters: almost everything that follows — the president, parliament, the courts, the federal subjects, languages — is written into one document from 1993. Anyone who knows it in outline already has a map of the whole course.",
  "Как она появилась": "How it came about",
  "Конституция принята **всенародным голосованием 12 декабря 1993 года** и вступила в силу со дня официального опубликования — **25 декабря 1993 года**. Она пришла на смену Конституции РСФСР 1978 года, которую к тому времени правили десятки раз.":
    "The Constitution was adopted by a **nationwide vote on 12 December 1993** and came into force on the day it was officially published — **25 December 1993**. It replaced the RSFSR Constitution of 1978, which by then had been amended dozens of times.",
  "**12 декабря** — День Конституции. С 2005 года это не выходной день, но дата осталась памятной.":
    "**12 December** is Constitution Day. Since 2005 it has not been a day off, but the date has stayed a commemorative one.",
  // ru-konstitutsiya
  "Как она устроена": "How it is built",
  "Текст состоит из **преамбулы** и **двух разделов**. Первый раздел — это **девять глав** и **137 статей**; второй, короткий, содержит заключительные и переходные положения.":
    "The text consists of a **preamble** and **two sections**. The first section is **nine chapters** and **137 articles**; the second, a short one, holds the concluding and transitional provisions.",
  "Глава 1 · Основы конституционного строя": "Chapter 1 · Foundations of the constitutional order",
  "Статьи 1–16. Что такое Россия, где источник власти, разделение властей, светское государство.":
    "Articles 1–16. What Russia is, where power comes from, the separation of powers, the secular state.",
  "Глава 2 · Права и свободы человека": "Chapter 2 · Human rights and freedoms",
  "Статьи 17–64. Самая длинная глава: личные, политические, социальные права и обязанности.":
    "Articles 17–64. The longest chapter: personal, political and social rights, and duties.",
  "Глава 3 · Федеративное устройство": "Chapter 3 · The federal structure",
  "Статьи 65–79. Перечень субъектов, разграничение полномочий, языки.":
    "Articles 65–79. The list of federal subjects, the division of powers, languages.",
  "Главы 4–8": "Chapters 4–8",
  "Президент, Федеральное Собрание, Правительство, судебная власть и прокуратура, местное самоуправление.":
    "The president, the Federal Assembly, the government, the judiciary and the prosecution service, local self-government.",
  "Когда была принята Конституция Российской Федерации?":
    "When was the Constitution of the Russian Federation adopted?",
  "12 июня 1990 года": "12 June 1990",
  "12 декабря 1993 года": "12 December 1993",
  "25 декабря 1993 года": "25 December 1993",
  "4 ноября 1993 года": "4 November 1993",
  "Принята всенародным голосованием 12 декабря, вступила в силу 25 декабря — со дня опубликования. День Конституции отмечают по первой из этих дат.":
    "Adopted by a nationwide vote on 12 December, in force from 25 December — the day it was published. Constitution Day is marked on the first of those dates.",
  "Первые статьи": "The opening articles",
  "**Статья 1** определяет Россию как **демократическое федеративное правовое государство с республиканской формой правления**. Четыре характеристики в одном предложении, и каждая имеет продолжение в отдельной главе.":
    "**Article 1** defines Russia as a **democratic federal law-based state with a republican form of government**. Four characteristics in one sentence, and each is carried on in a chapter of its own.",
  "**Статья 2** называет человека, его права и свободы **высшей ценностью**, а признание и защиту этих прав — обязанностью государства. **Статья 3** говорит, что носителем суверенитета и **единственным источником власти** является **многонациональный народ** Российской Федерации.":
    "**Article 2** calls the human being, their rights and freedoms the **highest value**, and makes recognising and protecting those rights a duty of the state. **Article 3** says that the bearer of sovereignty and the **sole source of power** is the **multi-ethnic people** of the Russian Federation.",
  "**Статья 10** закрепляет разделение властей на законодательную, исполнительную и судебную. **Статья 13** устанавливает идеологическое многообразие: никакая идеология не может быть государственной или обязательной. **Статья 14** объявляет Россию **светским государством**: религиозные объединения отделены от государства и равны перед законом.":
    "**Article 10** fixes the separation of powers into legislative, executive and judicial. **Article 13** establishes ideological diversity: no ideology may be made a state or a compulsory one. **Article 14** declares Russia a **secular state**: religious associations are separate from the state and equal before the law.",
  "Сколько статей содержит первый раздел Конституции?":
    "How many articles does the first section of the Constitution contain?",
  "Шестьдесят четыре": "Sixty-four",
  "Сто тридцать семь": "One hundred and thirty-seven",
  "Сто шестьдесят девять": "One hundred and sixty-nine",
  "Двести": "Two hundred",
  "Сто тридцать семь статей в девяти главах. Статья 64 завершает главу о правах и свободах, но не первый раздел целиком.":
    "One hundred and thirty-seven articles in nine chapters. Article 64 closes the chapter on rights and freedoms, but not the whole first section.",
  "Что нельзя изменить обычным путём": "What cannot be changed the ordinary way",
  "Конституция разделяет **поправки** и **пересмотр**. Главы **3–8** изменяются поправками, которые принимаются как федеральный конституционный закон и должны быть одобрены не менее чем **двумя третями субъектов** Федерации.":
    "The Constitution separates **amendments** from **revision**. Chapters **3–8** are changed by amendments, which are passed as a federal constitutional law and must be approved by at least **two thirds of the federal subjects**.",
  "А вот главы **1, 2 и 9** — основы строя, права и свободы, и сам порядок изменения — **не могут быть пересмотрены Федеральным Собранием**. Для их изменения статья 135 требует созвать **Конституционное Собрание**, которое либо подтвердит неизменность Конституции, либо разработает новую. Такого собрания никогда не созывали, и закона о нём до сих пор нет.":
    "Chapters **1, 2 and 9**, though — the foundations of the order, rights and freedoms, and the procedure for changing them — **cannot be revised by the Federal Assembly**. To change them, article 135 requires a **Constitutional Assembly** to be convened, which either confirms that the Constitution stands unchanged or drafts a new one. Such an assembly has never been convened, and there is still no law on it.",
  "Крупные изменения вносились в **2008** году — о сроках полномочий, в **2014** — об объединении высших судов, и в **2020** — большим пакетом поправок к главам с третьей по восьмую.":
    "Major changes were made in **2008**, on terms of office, in **2014**, on merging the highest courts, and in **2020**, as a large package of amendments to chapters three through eight.",
  "Какие главы Конституции не может пересмотреть Федеральное Собрание?":
    "Which chapters of the Constitution can the Federal Assembly not revise?",
  "Первая, вторая и девятая": "The first, the second and the ninth",
  "Только первая": "Only the first",
  "С третьей по восьмую": "The third through the eighth",
  "Никакие: Конституция неизменна": "None: the Constitution cannot be changed",
  "Главы 1, 2 и 9 — основы конституционного строя, права и свободы и сам порядок изменения. Для них нужно Конституционное Собрание, которое ни разу не созывалось.":
    "Chapters 1, 2 and 9 — the foundations of the constitutional order, rights and freedoms, and the procedure for changing them. They need a Constitutional Assembly, which has never once been convened.",
  "**Поправка** и **пересмотр** — не одно и то же. Поправками меняют главы с третьей по восьмую; пересмотр касается глав 1, 2 и 9 и требует совсем другой процедуры.":
    "**Amendment** and **revision** are not the same thing. Amendments change chapters three through eight; revision concerns chapters 1, 2 and 9 and takes an entirely different procedure.",
  // ru-prava
  "Права и свободы человека": "Human rights and freedoms",
  "Почему это важно: вторая глава — самая длинная в Конституции, и она написана о человеке, а не о гражданине. Большинство её статей начинается со слов «каждый» или «никто», и это различие имеет смысл.":
    "Why this matters: the second chapter is the longest in the Constitution, and it is written about the human being, not about the citizen. Most of its articles begin with the words “everyone” or “no one”, and that difference carries weight.",
  "Каждый и гражданин": "Everyone, and the citizen",
  "**Статья 17** говорит, что основные права и свободы принадлежат каждому **от рождения** и неотчуждаемы. **Статья 19** закрепляет равенство перед законом и судом независимо от пола, расы, национальности, языка, происхождения, имущественного и должностного положения, места жительства, отношения к религии и убеждений.":
    "**Article 17** says that basic rights and freedoms belong to everyone **from birth** and cannot be taken away. **Article 19** fixes equality before the law and the courts regardless of sex, race, ethnicity, language, origin, property or official status, place of residence, attitude to religion or convictions.",
  "Читая главу, стоит обращать внимание на первое слово статьи. Там, где написано **«каждый»**, право принадлежит и иностранцу; там, где **«граждане Российской Федерации»**, — только гражданам. Так устроены, например, избирательные права и право на доступ к государственной службе.":
    "When reading the chapter it is worth watching the first word of an article. Where it says **“everyone”**, the right belongs to a foreigner too; where it says **“citizens of the Russian Federation”**, only to citizens. That is how voting rights and the right of access to the civil service are built, for instance.",
  "Личные права": "Personal rights",
  "**Статья 20** закрепляет право на жизнь. Смертная казнь в тексте упомянута как исключительная мера, но фактически не применяется: с середины девяностых действует **мораторий**, подтверждённый решениями Конституционного Суда.":
    "**Article 20** fixes the right to life. The death penalty is named in the text as an exceptional measure, but is not in fact applied: a **moratorium** has been in force since the mid-nineties, confirmed by rulings of the Constitutional Court.",
  "**Статья 22** гарантирует свободу и личную неприкосновенность: **до судебного решения** человек не может быть задержан на срок **более 48 часов**. **Статья 23** защищает частную жизнь и тайну переписки, **статья 25** объявляет **неприкосновенным жилище**.":
    "**Article 22** guarantees liberty and personal inviolability: **before a court decision** a person may not be held for **more than 48 hours**. **Article 23** protects private life and the privacy of correspondence, and **article 25** declares **the home inviolable**.",
  "На какой срок можно задержать человека до судебного решения?":
    "For how long may a person be held before a court decision?",
  "На 24 часа": "For 24 hours",
  "На 48 часов": "For 48 hours",
  "На 72 часа": "For 72 hours",
  "Срок не установлен": "No limit is set",
  "Статья 22 устанавливает предел в 48 часов. По истечении этого срока человек должен быть либо освобождён, либо его задержание должен продлить суд.":
    "Article 22 sets the limit at 48 hours. After that the person must either be released or have the detention extended by a court.",
  "Свобода мысли, слова и веры": "Freedom of thought, speech and belief",
  "**Статья 28** гарантирует свободу совести и вероисповедания, включая право не исповедовать никакой религии. **Статья 29** закрепляет свободу мысли и слова, право свободно искать, получать и распространять информацию — и содержит короткую и прямую формулу: **цензура запрещается**.":
    "**Article 28** guarantees freedom of conscience and religion, including the right to profess none. **Article 29** fixes freedom of thought and speech and the right freely to seek, receive and impart information — and contains one short, blunt formula: **censorship is prohibited**.",
  "**Статья 26** даёт каждому право **определять и указывать свою национальность** — и добавляет, что никто не может быть принуждён к её указанию. Там же — право пользоваться родным языком и свободно выбирать язык общения и творчества. Для страны, где живут сотни народов, это не формальность.":
    "**Article 26** gives everyone the right to **determine and state their own ethnicity** — and adds that no one may be made to state it. The same article carries the right to use one's native language and to choose freely the language of communication and of creative work. For a country where hundreds of peoples live, that is not a formality.",
  "Что прямо запрещает статья 29 Конституции?":
    "What does article 29 of the Constitution prohibit outright?",
  "Иностранные средства массовой информации": "Foreign mass media",
  "Цензуру": "Censorship",
  "Публичные собрания": "Public assemblies",
  "Анонимные публикации": "Anonymous publications",
  "Формулировка короткая: цензура запрещается. Та же статья закрепляет свободу мысли и слова и право искать, получать и распространять информацию.":
    "The wording is short: censorship is prohibited. The same article fixes freedom of thought and speech and the right to seek, receive and impart information.",
  "Социальные права": "Social rights",
  "Труд · статья 37": "Labour · article 37",
  "Труд свободен, принудительный труд запрещён. Отсюда же право на отдых и на оплачиваемый отпуск.":
    "Labour is free and forced labour is prohibited. The right to rest and to paid leave comes from here as well.",
  "Жилище · статья 40": "Housing · article 40",
  "Никто не может быть произвольно лишён жилища; малоимущим оно предоставляется бесплатно или за доступную плату.":
    "No one may be arbitrarily deprived of their home; for those on low incomes it is provided free or for an affordable rent.",
  "Здоровье · статья 41": "Health · article 41",
  "Медицинская помощь в государственных и муниципальных учреждениях оказывается гражданам бесплатно.":
    "Medical care in state and municipal institutions is provided to citizens free of charge.",
  "Образование · статья 43": "Education · article 43",
  "Дошкольное, основное общее и среднее профессиональное — общедоступны и бесплатны.":
    "Pre-school, basic general and secondary vocational education are open to all and free.",
  "Гарантии в суде": "Guarantees in court",
  "**Статья 48** даёт право на квалифицированную юридическую помощь, в предусмотренных законом случаях — бесплатную. **Статья 49** закрепляет **презумпцию невиновности**: обвиняемый считается невиновным, пока вина не доказана вступившим в законную силу приговором суда, и **неустранимые сомнения толкуются в его пользу**.":
    "**Article 48** gives the right to qualified legal assistance, free of charge in the cases the law provides for. **Article 49** fixes the **presumption of innocence**: the accused is considered innocent until guilt is proved by a court judgment that has entered into legal force, and **doubts that cannot be resolved are read in their favour**.",
  "**Статья 51** содержит правило, которое знают даже те, кто никогда не открывал Конституцию: **никто не обязан свидетельствовать против себя самого, своего супруга и близких родственников**.":
    "**Article 51** contains a rule known even to people who have never opened the Constitution: **no one is obliged to testify against themselves, their spouse or their close relatives**.",
  "Что закрепляет статья 49 Конституции?": "What does article 49 of the Constitution establish?",
  "Право на жилище": "The right to housing",
  "Презумпцию невиновности": "The presumption of innocence",
  "Свободу передвижения": "Freedom of movement",
  "Право на образование": "The right to education",
  "Обвиняемый считается невиновным, пока его вина не доказана приговором суда, и неустранимые сомнения толкуются в его пользу. Статья 51 добавляет право не свидетельствовать против себя и близких.":
    "The accused is considered innocent until guilt is proved by a court judgment, and doubts that cannot be resolved are read in their favour. Article 51 adds the right not to testify against oneself or one's close family.",
  "Права, записанные словом **«каждый»**, принадлежат и иностранным гражданам. Только там, где статья говорит **«граждане Российской Федерации»**, речь идёт исключительно о гражданах — прежде всего это избирательные права.":
    "Rights written with the word **“everyone”** belong to foreign nationals too. Only where an article says **“citizens of the Russian Federation”** is it about citizens alone — above all, voting rights.",
  // ru-obyazannosti
  "Обязанности и гражданство": "Duties and citizenship",
  "Почему это важно: Конституция не только раздаёт права. В той же второй главе записаны обязанности, а гражданство — та дверь, через которую человек входит в полный объём и тех и других.":
    "Why this matters: the Constitution does not only hand out rights. The same second chapter sets down duties, and citizenship is the door through which a person enters the full measure of both.",
  "Обязанности": "Duties",
  "Их немного, и они разбросаны по главе 2. **Статья 57**: каждый обязан платить законно установленные **налоги и сборы**, причём законы, ухудшающие положение налогоплательщиков, обратной силы не имеют. **Статья 58**: каждый обязан **сохранять природу** и бережно относиться к природным богатствам.":
    "There are not many, and they are scattered through chapter 2. **Article 57**: everyone must pay lawfully established **taxes and levies**, and laws that worsen the position of taxpayers have no retroactive force. **Article 58**: everyone must **protect nature** and treat natural wealth with care.",
  "**Статья 59** называет защиту Отечества **долгом и обязанностью гражданина**. Военная служба несётся по федеральному закону; если убеждениям или вероисповеданию человека несение военной службы противоречит, он имеет право на **альтернативную гражданскую службу**.":
    "**Article 59** calls the defence of the Fatherland a **duty and an obligation of the citizen**. Military service is performed under federal law; if military service conflicts with a person's convictions or faith, they have the right to **alternative civilian service**.",
  "Налоги · статья 57": "Taxes · article 57",
  "Обязанность, которая исполняется каждый год и касается всех.":
    "A duty discharged every year, and one that touches everybody.",
  "Природа · статья 58": "Nature · article 58",
  "Сохранять природу и бережно относиться к природным богатствам.":
    "To protect nature and to treat natural wealth with care.",
  "Защита Отечества · статья 59": "Defence of the Fatherland · article 59",
  "Долг и обязанность гражданина, с правом на альтернативную гражданскую службу.":
    "A duty and an obligation of the citizen, with the right to alternative civilian service.",
  "Забота о семье · статья 38": "Care for the family · article 38",
  "Забота о детях — обязанность родителей, а забота о нетрудоспособных родителях — обязанность взрослых детей.":
    "Caring for children is a duty of parents, and caring for parents who can no longer work is a duty of adult children.",
  // ru-obyazannosti
  "К этому добавляются обязанность получить **основное общее образование** (статья 43, причём обеспечивают её родители) и обязанность **заботиться о памятниках истории и культуры** (статья 44).":
    "To these are added the duty to obtain **basic general education** (article 43, which parents are responsible for providing) and the duty to **care for monuments of history and culture** (article 44).",
  "Какая статья Конституции обязывает платить налоги и сборы?":
    "Which article of the Constitution requires taxes and levies to be paid?",
  "Статья 43": "Article 43",
  "Статья 57": "Article 57",
  "Статья 58": "Article 58",
  "Статья 59": "Article 59",
  "Статья 57. Статья 58 — о сохранении природы, статья 59 — о защите Отечества, статья 43 — об образовании: четыре обязанности, которые легко перепутать.":
    "Article 57. Article 58 is about protecting nature, article 59 about defending the Fatherland, article 43 about education: four duties that are easy to mix up.",
  "Гражданство": "Citizenship",
  "**Статья 6** говорит, что гражданство России **едино и равно независимо от оснований приобретения**: тот, кто получил его по рождению, и тот, кто был принят в гражданство, имеют одни и те же права. Гражданина нельзя лишить гражданства или права изменить его.":
    "**Article 6** says that Russian citizenship is **single and equal whatever the grounds on which it was acquired**: someone who has it by birth and someone who was admitted to it have the same rights. A citizen cannot be deprived of citizenship or of the right to change it.",
  "**Статья 62** допускает **двойное гражданство** — гражданин России может иметь гражданство иностранного государства, и это само по себе не умаляет его прав. Та же статья распространяет на иностранцев и лиц без гражданства права и обязанности граждан, кроме случаев, установленных законом.":
    "**Article 62** permits **dual citizenship** — a Russian citizen may hold the citizenship of a foreign state, and that in itself does not diminish their rights. The same article extends the rights and duties of citizens to foreigners and stateless persons, except in cases established by law.",
  "Как принимают в гражданство": "How citizenship is granted",
  "Порядок установлен **федеральным законом о гражданстве**, принятым в **2023 году** и заменившим закон 2002 года. Гражданство приобретается **по рождению**, **в результате приёма** и по иным основаниям.":
    "The procedure is set by the **federal law on citizenship** passed in **2023**, which replaced the law of 2002. Citizenship is acquired **by birth**, **by admission** and on other grounds.",
  "В **общем порядке** заявитель должен постоянно проживать в России **пять лет** со дня получения вида на жительство. Для ряда категорий действует **упрощённый порядок** — в частности для тех, у кого близкие родственники граждане России, для выпускников российских вузов и для носителей русского языка.":
    "Under the **general procedure** an applicant must have lived permanently in Russia for **five years** from the day they received a residence permit. A **simplified procedure** applies to a number of categories — in particular to those with close relatives who are Russian citizens, to graduates of Russian universities and to native speakers of Russian.",
  "Помимо срока требуются **владение русским языком**, **знание истории России и основ законодательства**, законный источник средств к существованию и соблюдение российского законодательства. Знание подтверждается **экзаменом** — тем самым, чью форму берёт тренировочный тест этого курса. С 2017 года принятые в гражданство приносят **присягу**.":
    "Besides the period of residence, what is required is **command of Russian**, **knowledge of Russian history and of the basics of the law**, a lawful source of income and compliance with Russian law. Knowledge is confirmed by an **examination** — the very one whose form the practice test in this course takes. Since 2017 those admitted to citizenship take an **oath**.",
  "Сколько лет нужно постоянно прожить в России, чтобы обратиться за гражданством в общем порядке?":
    "How many years must you live in Russia continuously to apply for citizenship under the general procedure?",
  "Три года": "Three years",
  "Пять лет": "Five years",
  "Восемь лет": "Eight years",
  "Десять лет": "Ten years",
  "Пять лет со дня получения вида на жительство. Для ряда категорий — близких родственников граждан, выпускников российских вузов, носителей языка — срок сокращается или снимается.":
    "Five years from the day the residence permit was issued. For a number of categories — close relatives of citizens, graduates of Russian universities, native speakers — the period is shortened or dropped.",
  "Допускает ли Конституция двойное гражданство?": "Does the Constitution allow dual citizenship?",
  "Нет, оно прямо запрещено": "No, it is expressly prohibited",
  "Да, статья 62 его допускает": "Yes, article 62 allows it",
  "Только для граждан государств СНГ": "Only for citizens of CIS states",
  "Только с разрешения суда": "Only with a court's permission",
  "Статья 62 допускает гражданство иностранного государства, и само по себе оно не умаляет прав. Отдельные федеральные законы при этом ограничивают доступ к некоторым должностям.":
    "Article 62 allows the citizenship of a foreign state, and in itself it does not diminish rights. Separate federal laws do, however, restrict access to certain offices.",
  "**Паспорт** гражданин получает в **14 лет**, а **совершеннолетие** наступает в **18**. С восемнадцати приходят право голоса и полная дееспособность.":
    "A citizen receives a **passport** at **14**, and **majority** comes at **18**. Eighteen brings the vote and full legal capacity.",
  // ru-prazdniki
  "Праздники и календарь": "Holidays and the calendar",
  "Почему это важно: календарь рассказывает о стране больше многих учебников. В России он начинается с самых длинных в Европе каникул и включает праздники сразу трёх эпох — имперской, советской и нынешней.":
    "Why this matters: a calendar says more about a country than many textbooks. In Russia it opens with the longest holidays in Europe and carries festivals from three eras at once — imperial, Soviet and present-day.",
  "Нерабочие праздничные дни": "Public holidays",
  "Их перечисляет **статья 112 Трудового кодекса**. Год открывается **новогодними каникулами**: нерабочими считаются **1, 2, 3, 4, 5, 6 и 8 января**, а **7 января** — **Рождество Христово**. Вместе получается непрерывная неделя с лишним — самые длинные государственные каникулы в Европе.":
    "They are listed in **article 112 of the Labour Code**. The year opens with the **New Year holidays**: **1, 2, 3, 4, 5, 6 and 8 January** are non-working days, and **7 January** is **Christmas**. Together that makes an unbroken week and more — the longest state holiday in Europe.",
  "23 февраля": "23 February",
  "День защитника Отечества. Ведёт начало от 1918 года; сегодня поздравляют не только военных, но и мужчин вообще.":
    "Defender of the Fatherland Day. It goes back to 1918; today the greetings go not only to servicemen but to men in general.",
  "8 марта": "8 March",
  "Международный женский день. Нерабочий с 1966 года и один из самых массово отмечаемых.":
    "International Women's Day. A non-working day since 1966 and one of the most widely kept.",
  "1 мая": "1 May",
  "Праздник Весны и Труда. До 1992 года — День международной солидарности трудящихся.":
    "Spring and Labour Day. Until 1992 it was the Day of International Workers' Solidarity.",
  "9 мая": "9 May",
  "День Победы. Парад на Красной площади, минута молчания, шествие «Бессмертного полка».":
    "Victory Day. The parade on Red Square, a minute's silence, the Immortal Regiment procession.",
  "Завершают список **12 июня** — День России — и **4 ноября**, **День народного единства**. Последний отмечается с **2005 года** и заменил в календаре 7 ноября, годовщину Октябрьской революции. Он посвящён событиям **1612 года**: освобождению Москвы ополчением Минина и Пожарского.":
    "The list closes with **12 June**, Russia Day, and **4 November**, **National Unity Day**. The latter has been marked since **2005** and replaced 7 November, the anniversary of the October Revolution, in the calendar. It commemorates the events of **1612**: the liberation of Moscow by the militia of Minin and Pozharsky.",
  "Что отмечают 4 ноября?": "What is marked on 4 November?",
  "Годовщину Октябрьской революции": "The anniversary of the October Revolution",
  "День Победы": "Victory Day",
  "День народного единства, с 2005 года. Он посвящён событиям 1612 года и заменил в календаре 7 ноября — годовщину революции 1917 года.":
    "National Unity Day, since 2005. It commemorates the events of 1612 and replaced 7 November — the anniversary of the 1917 revolution — in the calendar.",
  "Даты, которые не выходные": "Dates that are not days off",
  "Некоторые дни отмечают по всей стране, хотя они и рабочие. **12 апреля** — **День космонавтики**, в память о полёте Гагарина в 1961 году. **1 сентября** — **День знаний**: линейки во дворах школ, первый звонок и цветы учителям. **22 июня** — **День памяти и скорби**, годовщина начала войны в 1941 году, со «Свечой памяти» и приспущенными флагами.":
    "Some days are marked across the country even though they are working days. **12 April** is **Cosmonautics Day**, in memory of Gagarin's flight in 1961. **1 September** is the **Day of Knowledge**: assemblies in school yards, the first bell and flowers for the teachers. **22 June** is the **Day of Remembrance and Sorrow**, the anniversary of the start of the war in 1941, with the Candle of Memory and flags at half mast.",
  "Два календаря": "Two calendars",
  "В **1918 году** Россия перешла с **юлианского** календаря на **григорианский**, и разница между ними составляла тогда тринадцать дней. Отсюда две особенности, которые до сих пор удивляют приезжих.":
    "In **1918** Russia moved from the **Julian** calendar to the **Gregorian**, and the difference between them was thirteen days at the time. Two peculiarities follow from that, and they still surprise visitors.",
  "Первая: **Рождество** Русская православная церковь празднует **7 января**, потому что церковный календарь остался юлианским. Вторая: **14 января** отмечают **старый Новый год** — тот же Новый год по прежнему счёту. Праздник неофициальный, но живой.":
    "The first: the Russian Orthodox Church keeps **Christmas** on **7 January**, because the church calendar stayed Julian. The second: **14 January** is the **Old New Year** — the same New Year by the older reckoning. The holiday is unofficial, but very much alive.",
  "Почему в России отмечают «старый Новый год» 14 января?":
    "Why is the “Old New Year” marked in Russia on 14 January?",
  "Так решили в 1990-е годы": "It was decided in the 1990s",
  "Из-за перехода с юлианского календаря на григорианский в 1918 году":
    "Because of the move from the Julian calendar to the Gregorian in 1918",
  "Это праздник северных народов": "It is a festival of the northern peoples",
  "Так отмечали при Петре I": "It was kept that way under Peter I",
  "Разница между календарями составляла тринадцать дней, и по прежнему счёту год начинался 14 января. По той же причине Рождество приходится на 7 января.":
    "The difference between the calendars was thirteen days, and by the older reckoning the year began on 14 January. Christmas falls on 7 January for the same reason.",
  "Народные и церковные": "Folk and church festivals",
  "Рядом с государственным календарём живёт народный. **Масленица** — неделя перед Великим постом, с блинами и сожжением чучела зимы. **Пасха** — главный православный праздник, с крашеными яйцами и куличами; её дата подвижна. Осенью отмечают **Покров**, а летом — **Ивана Купалу**.":
    "Alongside the state calendar there is a folk one. **Maslenitsa** is the week before Lent, with pancakes and the burning of an effigy of winter. **Easter** is the chief Orthodox festival, with painted eggs and kulich; its date moves. In autumn comes **Pokrov**, and in summer **Ivan Kupala**.",
  "Сколько дней длятся новогодние каникулы по Трудовому кодексу?":
    "How long do the New Year holidays run under the Labour Code?",
  "С 1 по 3 января": "From 1 to 3 January",
  "С 1 по 8 января": "From 1 to 8 January",
  "С 31 декабря по 2 января": "From 31 December to 2 January",
  "Только 1 января": "1 January only",
  "Нерабочими считаются 1–6 и 8 января, а 7 января — Рождество Христово. Вместе выходит непрерывная неделя с лишним, самые длинные государственные каникулы в Европе.":
    "1–6 and 8 January are non-working days, and 7 January is Christmas. Together that comes to an unbroken week and more, the longest state holiday in Europe.",
  "**12 декабря** — День Конституции, но с 2005 года это **рабочий день**. Памятная дата и нерабочий праздник — не одно и то же.":
    "**12 December** is Constitution Day, but since 2005 it has been a **working day**. A commemorative date and a public holiday are not the same thing.",
  // chapter
  "Государственное устройство": "How the state is organised",
  // ru-prezident
  "Президент": "The president",
  "Почему начинаем с президента: в российской конструкции он стоит не внутри одной из трёх ветвей власти, а над ними. Понять эту особенность — значит понять остальное устройство.":
    "Why we start with the president: in the Russian design he stands not inside one of the three branches of power but above them. Understand that peculiarity and the rest of the structure follows.",
  "Что говорит глава 4": "What chapter 4 says",
  "**Статья 80** называет Президента **главой государства** и **гарантом Конституции**, прав и свобод человека. Он принимает меры по охране суверенитета, обеспечивает согласованное функционирование органов власти и **определяет основные направления внутренней и внешней политики**.":
    "**Article 80** calls the President the **head of state** and the **guarantor of the Constitution** and of human rights and freedoms. He takes measures to protect sovereignty, ensures that the organs of power work in concert, and **determines the main directions of domestic and foreign policy**.",
  "Обратите внимание на слово «согласованное». Президент не отнесён ни к законодательной, ни к исполнительной, ни к судебной власти: он стоит над разделением, установленным статьёй 10, и связывает ветви между собой.":
    "Note the words “in concert”. The President is assigned to neither the legislative, nor the executive, nor the judicial power: he stands above the separation set by article 10 and binds the branches to one another.",
  "Как избирается": "How he is elected",
  "Президента избирают **граждане России** на основе всеобщего, равного и прямого избирательного права при тайном голосовании — сроком на **шесть лет**. До поправки **2008 года** срок составлял четыре года.":
    "The President is elected by **the citizens of Russia** on the basis of universal, equal and direct suffrage by secret ballot — for **six years**. Before the **2008** amendment the term was four years.",
  "Не моложе 35 лет": "At least 35 years old",
  "Возрастной ценз, установленный статьёй 81.": "The age requirement set by article 81.",
  "25 лет проживания": "25 years of residence",
  "Кандидат должен постоянно проживать в России не менее двадцати пяти лет — требование, добавленное поправками 2020 года.":
    "A candidate must have lived permanently in Russia for at least twenty-five years — a requirement added by the 2020 amendments.",
  "Без иностранного гражданства": "No foreign citizenship",
  "И без вида на жительство в другом государстве, в том числе в прошлом. Тоже поправка 2020 года.":
    "And no residence permit in another state, at any time in the past either. Also a 2020 amendment.",
  "Не более двух сроков": "No more than two terms",
  "Прежде в тексте стояло «двух сроков подряд»; поправки 2020 года слово «подряд» убрали.":
    "The text used to say “two consecutive terms”; the 2020 amendments removed the word “consecutive”.",
  "На какой срок избирается Президент Российской Федерации?":
    "For what term is the President of the Russian Federation elected?",
  "На четыре года": "For four years",
  "На пять лет": "For five years",
  "На шесть лет": "For six years",
  "На семь лет": "For seven years",
  "Шесть лет — с поправки 2008 года; до неё срок был четырёхлетним. Государственная Дума избирается на пять лет, и эти две цифры часто путают.":
    "Six years, since the 2008 amendment; before it the term was four. The State Duma is elected for five years, and those two figures are often confused.",
  "Что он делает": "What he does",
  "Полномочия перечислены в **статье 83**. Президент **назначает Председателя Правительства** после утверждения его кандидатуры Государственной Думой, принимает решение об отставке Правительства, представляет кандидатуры судей высших судов и Генерального прокурора, формирует Совет Безопасности и Администрацию Президента.":
    "His powers are listed in **article 83**. The President **appoints the Chairman of the Government** after the State Duma has approved the candidate, decides on the Government's resignation, puts forward candidates for the judges of the highest courts and for the Prosecutor General, and forms the Security Council and the Presidential Administration.",
  "В законодательном процессе он вносит законопроекты, **подписывает и обнародует** федеральные законы и обладает правом **вето**. Он **Верховный Главнокомандующий**, вводит военное и чрезвычайное положение с последующим утверждением Советом Федерации, решает вопросы гражданства, осуществляет **помилование** и награждает государственными наградами.":
    "In the legislative process he introduces bills, **signs and promulgates** federal laws and holds a right of **veto**. He is **Supreme Commander-in-Chief**, introduces martial law and states of emergency subject to approval by the Federation Council, decides questions of citizenship, grants **pardons** and confers state awards.",
  "Вступая в должность, Президент приносит **присягу** народу — текст записан в **статье 82**. Официальная резиденция — **Московский Кремль**.":
    "On taking office the President swears an **oath** to the people — the text is set out in **article 82**. The official residence is the **Moscow Kremlin**.",
  "Каков минимальный возраст кандидата в Президенты?":
    "What is the minimum age for a presidential candidate?",
  "21 год": "21",
  // ru-prezident
  "30 лет": "30",
  "35 лет": "35",
  "40 лет": "40",
  "Тридцать пять лет. Двадцать один — возраст для избрания в Государственную Думу, тридцать — для сенатора: три ценза, которые стоит держать порознь.":
    "Thirty-five. Twenty-one is the age for election to the State Duma and thirty for a senator: three thresholds worth keeping apart.",
  "Если полномочия прекращаются досрочно": "If the term ends early",
  "**Статья 92** предусматривает три случая: отставка, стойкая неспособность по состоянию здоровья и отрешение от должности. Во всех трёх обязанности временно исполняет **Председатель Правительства**, и выборы должны состояться не позднее трёх месяцев.":
    "**Article 92** provides for three cases: resignation, lasting incapacity on health grounds, and removal from office. In all three the duties are carried out for the time being by the **Chairman of the Government**, and an election must be held within three months.",
  "**Отрешение от должности** описано в **статье 93** и устроено намеренно тяжело. Государственная Дума выдвигает обвинение **двумя третями** голосов, Верховный Суд даёт заключение о наличии признаков преступления, Конституционный Суд — о соблюдении порядка, и решение принимает **Совет Федерации двумя третями** в трёхмесячный срок. Ни разу эта процедура не была доведена до конца.":
    "**Removal from office** is described in **article 93** and is deliberately made hard. The State Duma brings the charge by a **two-thirds** vote, the Supreme Court gives an opinion that the elements of a crime are present, the Constitutional Court that the procedure was followed, and the decision is taken by the **Federation Council by two thirds** within three months. The procedure has never once been carried through.",
  "Кто временно исполняет обязанности Президента при досрочном прекращении полномочий?":
    "Who carries out the President's duties for the time being if the term ends early?",
  "Председатель Совета Федерации": "The Chairman of the Federation Council",
  "Председатель Правительства": "The Chairman of the Government",
  "Председатель Государственной Думы": "The Chairman of the State Duma",
  "Председатель Конституционного Суда": "The Chairman of the Constitutional Court",
  "Председатель Правительства, по статье 92, и выборы должны состояться не позднее трёх месяцев. Исполняющий обязанности при этом не вправе распускать Думу и назначать референдум.":
    "The Chairman of the Government, under article 92, and an election must be held within three months. The acting president may not dissolve the Duma or call a referendum.",
  "**Глава государства** и **глава правительства** в России — разные должности и разные здания: Президент в **Кремле**, Председатель Правительства в **Доме Правительства** на Краснопресненской набережной.":
    "**Head of state** and **head of government** are different offices in Russia, in different buildings: the President in the **Kremlin**, the Chairman of the Government in the **Government House** on Krasnopresnenskaya Embankment.",
  // ru-parlament
  "Федеральное Собрание": "The Federal Assembly",
  "Почему это важно: у российского парламента две палаты, и они устроены совсем по-разному — одну избирают напрямую, вторую собирают из представителей регионов. Кто это различает, тот перестаёт путать Думу с Советом Федерации.":
    "Why this matters: the Russian parliament has two chambers, and they are built quite differently — one is elected directly, the other assembled from representatives of the regions. Tell them apart and you stop confusing the Duma with the Federation Council.",
  "Две палаты": "Two chambers",
  "**Статья 94** называет Федеральное Собрание **представительным и законодательным органом** Российской Федерации. Оно состоит из двух палат — **Совета Федерации** и **Государственной Думы**, — которые **заседают раздельно**. Совместно они собираются лишь в особых случаях: для посланий Президента и выступлений глав иностранных государств.":
    "**Article 94** calls the Federal Assembly the **representative and legislative body** of the Russian Federation. It consists of two chambers — the **Federation Council** and the **State Duma** — which **sit separately**. They meet together only on special occasions: for the President's addresses and for speeches by foreign heads of state.",
  "Государственная Дума": "The State Duma",
  "450 депутатов, избираются на пять лет. Нижняя палата, и именно в неё вносятся законопроекты. Здание — на Охотном Ряду.":
    "450 deputies, elected for five years. The lower chamber, and the one bills are introduced into. Its building is on Okhotny Ryad.",
  "Совет Федерации": "The Federation Council",
  "Верхняя палата, палата регионов. Не избирается целиком и не имеет единого срока полномочий. Здание — на Большой Дмитровке.":
    "The upper chamber, the chamber of the regions. It is not elected as a whole and has no single term of office. Its building is on Bolshaya Dmitrovka.",
  "Возраст, с которого можно быть избранным депутатом Государственной Думы.":
    "The age from which a person may be elected a deputy of the State Duma.",
  "Возраст, с которого можно стать сенатором Российской Федерации.":
    "The age from which a person may become a senator of the Russian Federation.",
  "Сколько депутатов в Государственной Думе?": "How many deputies are there in the State Duma?",
  "Двести двадцать пять": "Two hundred and twenty-five",
  "Триста": "Three hundred",
  "Четыреста пятьдесят": "Four hundred and fifty",
  "Шестьсот тридцать": "Six hundred and thirty",
  "Четыреста пятьдесят. Двести двадцать пять — это половина, которая избирается по одномандатным округам, а другая половина проходит по партийным спискам.":
    "Four hundred and fifty. Two hundred and twenty-five is the half elected in single-member constituencies; the other half comes in on party lists.",
  "Как избирают Думу": "How the Duma is elected",
  "Система **смешанная**. **225 депутатов** избираются по **одномандатным округам** — по одному от округа, кто набрал больше голосов. Другие **225** проходят по **партийным спискам** в едином федеральном округе, и здесь действует **пятипроцентный барьер**: партия, не набравшая пяти процентов, мест не получает.":
    "The system is **mixed**. **225 deputies** are elected in **single-member constituencies** — one per constituency, to whoever gets the most votes. The other **225** come in on **party lists** in a single federal constituency, and here a **five per cent threshold** applies: a party that does not reach five per cent gets no seats.",
  "Срок полномочий Думы — **пять лет**; до поправки 2008 года он составлял четыре года. Президент вправе распустить Думу в двух случаях, прямо названных Конституцией: при трёхкратном отклонении кандидатуры Председателя Правительства и при повторном выражении недоверия Правительству.":
    "The Duma's term is **five years**; before the 2008 amendment it was four. The President may dissolve the Duma in the two cases the Constitution names expressly: when it rejects a candidate for Chairman of the Government three times, and when it votes no confidence in the Government a second time.",
  "Как складывается Совет Федерации": "How the Federation Council is put together",
  "В него входят **по два представителя от каждого субъекта** Федерации — один от законодательного органа, другой от исполнительного. К ним добавляются сенаторы, **назначаемые Президентом** (не более тридцати, по поправке 2020 года), а бывшие президенты вправе стать **пожизненными сенаторами**.":
    "It holds **two representatives from each federal subject** — one from the legislature, one from the executive. To them are added senators **appointed by the President** (no more than thirty, under the 2020 amendment), and former presidents may become **senators for life**.",
  "Отсюда важное следствие: Совет Федерации **не избирается целиком и не распускается**. Его состав меняется постепенно, вслед за выборами в регионах, и палата работает непрерывно.":
    "An important consequence follows: the Federation Council is **neither elected as a whole nor dissolved**. Its membership changes gradually, following the elections in the regions, and the chamber works without a break.",
  "Сколько представителей направляет в Совет Федерации каждый субъект?":
    "How many representatives does each federal subject send to the Federation Council?",
  "Одного": "One",
  "Двух": "Two",
  "Трёх": "Three",
  "Число зависит от населения": "The number depends on the population",
  "Двух: одного от законодательного органа субъекта, другого от исполнительного. Численность населения на это не влияет — в этом и смысл палаты регионов.":
    "Two: one from the subject's legislature, the other from its executive. Population makes no difference — that is the whole point of a chamber of the regions.",
  "Как принимается закон": "How a law is passed",
  "Законопроект вносится **в Государственную Думу**. Дума принимает федеральный закон **большинством голосов**, а федеральный конституционный — **двумя третями**. В течение пяти дней закон передаётся в **Совет Федерации**, у которого есть **четырнадцать дней** на рассмотрение.":
    "A bill is introduced **into the State Duma**. The Duma passes a federal law **by a majority of votes**, and a federal constitutional law **by two thirds**. Within five days the law goes to the **Federation Council**, which has **fourteen days** to consider it.",
  "Если Совет Федерации отклоняет закон, палаты создают согласительную комиссию, либо Дума преодолевает отклонение **двумя третями** голосов. Затем закон уходит **Президенту**, который в течение четырнадцати дней подписывает и обнародует его или налагает **вето**. Вето преодолевается **двумя третями голосов обеих палат**.":
    "If the Federation Council rejects the law, the chambers set up a conciliation commission, or the Duma overrides the rejection **by two thirds** of the votes. The law then goes to the **President**, who within fourteen days signs and promulgates it or imposes a **veto**. A veto is overridden **by two thirds of the votes in both chambers**.",
  "**Статья 106** перечисляет законы, которые Совет Федерации обязан рассмотреть непременно: бюджет, налоги и сборы, финансовое и таможенное регулирование, ратификация международных договоров, статус государственной границы, вопросы войны и мира.":
    "**Article 106** lists the laws the Federation Council must consider without fail: the budget, taxes and levies, financial and customs regulation, the ratification of international treaties, the status of the state border, and questions of war and peace.",
  "Какой барьер должна преодолеть партия, чтобы получить места по спискам?":
    "What threshold must a party clear to win seats on the lists?",
  "Три процента": "Three per cent",
  "Пять процентов": "Five per cent",
  "Семь процентов": "Seven per cent",
  "Барьера нет": "There is no threshold",
  "Пять процентов голосов в едином федеральном округе. Барьер менялся: в 2007 и 2011 годах он составлял семь процентов, а затем вернулся к пяти.":
    "Five per cent of the vote in the single federal constituency. The threshold has changed: in 2007 and 2011 it was seven per cent, and then it went back to five.",
  "Законопроект вносится **только в Государственную Думу**, никогда напрямую в Совет Федерации. Верхняя палата вступает в дело после того, как закон уже принят нижней.":
    "A bill is introduced **only into the State Duma**, never straight into the Federation Council. The upper chamber comes in after the lower one has already passed the law.",
  // ru-pravitelstvo
  "Правительство": "The government",
  "Почему это важно: Правительство отвечает за то, что видно каждый день — бюджет, пенсии, дороги, школы. И оно единственный орган, который зависит сразу от двух: и от Президента, и от Думы.":
    "Why this matters: the Government answers for what is visible every day — the budget, pensions, roads, schools. And it is the only body that depends on two others at once: on the President and on the Duma.",
  "Из кого состоит": "Who sits in it",
  "**Статья 110** определяет состав: **Председатель Правительства**, его заместители и **федеральные министры**. Правительство осуществляет **исполнительную власть** Российской Федерации. Его резиденция — **Дом Правительства** на Краснопресненской набережной, в обиходе Белый дом.":
    "**Article 110** sets out the composition: the **Chairman of the Government**, his deputies and the **federal ministers**. The Government exercises the **executive power** of the Russian Federation. Its seat is the **Government House** on Krasnopresnenskaya Embankment, known in everyday speech as the White House.",
  "Как оно назначается": "How it is appointed",
  "**Председателя Правительства назначает Президент** — но только **после утверждения** кандидатуры **Государственной Думой**. До поправок 2020 года формулировка была мягче: Дума давала «согласие».":
    "**The Chairman of the Government is appointed by the President** — but only **after the State Duma has approved** the candidate. Before the 2020 amendments the wording was softer: the Duma gave its “consent”.",
  "Если Дума **трижды отклонит** представленные кандидатуры, Президент назначает Председателя сам, **распускает Думу** и назначает новые выборы. Эта норма никогда не применялась, но именно она задаёт баланс: у Думы есть право отказать, но у отказа есть цена.":
    "If the Duma **rejects the candidates three times**, the President appoints a Chairman himself, **dissolves the Duma** and calls new elections. This provision has never been used, but it is what sets the balance: the Duma has the right to refuse, and refusal has a price.",
  "Заместителей и министров, кроме руководителей так называемого силового блока, тоже **утверждает Дума**. Министров обороны, внутренних дел, иностранных дел, юстиции и глав спецслужб назначает **Президент** после консультаций с **Советом Федерации**.":
    "Deputy chairmen and ministers, apart from the heads of what is called the security bloc, are **also confirmed by the Duma**. The ministers of defence, internal affairs, foreign affairs and justice and the heads of the security services are appointed by the **President** after consultations with the **Federation Council**.",
  "Что происходит, если Государственная Дума трижды отклонит кандидатуру Председателя Правительства?":
    "What happens if the State Duma rejects the candidate for Chairman of the Government three times?",
  "Президент обязан предложить четвёртую кандидатуру": "The President must put forward a fourth candidate",
  "Президент назначает Председателя, распускает Думу и назначает новые выборы":
    "The President appoints a Chairman, dissolves the Duma and calls new elections",
  "Кандидатуру утверждает Совет Федерации": "The candidate is confirmed by the Federation Council",
  "Правительство формируется без председателя": "The Government is formed without a chairman",
  "Это одно из двух оснований роспуска Думы, прямо названных Конституцией. Норма ни разу не применялась, но она задаёт цену отказа.":
    "It is one of the two grounds for dissolving the Duma that the Constitution names expressly. The provision has never been used, but it sets the price of refusal.",
  "Чем оно занимается": "What it deals with",
  "**Статья 114** перечисляет главные направления: разработка и исполнение **федерального бюджета**, единая финансовая, кредитная и денежная политика, единая политика в области **культуры, науки, образования, здравоохранения, социального обеспечения** и экологии, управление федеральной собственностью, **оборона и государственная безопасность**, законность и борьба с преступностью.":
    "**Article 114** lists the main areas: drawing up and executing the **federal budget**, a single financial, credit and monetary policy, a single policy in **culture, science, education, health care, social security** and the environment, the management of federal property, **defence and state security**, legality and the fight against crime.",
  "Свои решения Правительство оформляет **постановлениями** и **распоряжениями**. Они обязательны на всей территории страны, но не должны противоречить Конституции, федеральным законам и указам Президента — иначе Президент вправе их отменить.":
    "The Government puts its decisions into **resolutions** and **orders**. They are binding across the whole country, but they must not contradict the Constitution, federal laws or presidential decrees — otherwise the President may annul them.",
  "Какие акты издаёт Правительство Российской Федерации?":
    "What kind of acts does the Government of the Russian Federation issue?",
  "Указы и распоряжения": "Decrees and orders",
  "Постановления и распоряжения": "Resolutions and orders",
  "Федеральные законы": "Federal laws",
  "Приказы и инструкции": "Directives and instructions",
  "Постановления и распоряжения. Указы и распоряжения издаёт Президент, а федеральные законы принимает парламент: три разных вида актов и три разных органа.":
    "Resolutions and orders. Decrees and orders are issued by the President, and federal laws are passed by parliament: three different kinds of act and three different bodies.",
  "Как оно уходит": "How it goes",
  "Государственная Дума может выразить Правительству **недоверие**. Если она сделает это **повторно в течение трёх месяцев**, Президент обязан выбрать: объявить об **отставке Правительства** либо **распустить Думу**. Выбор остаётся за ним, и это второе основание роспуска.":
    "The State Duma may pass a vote of **no confidence** in the Government. If it does so **a second time within three months**, the President must choose: announce the **Government's resignation** or **dissolve the Duma**. The choice is his, and this is the second ground for dissolution.",
  "Правительство может и само поставить перед Думой **вопрос о доверии**. И в любом случае оно **слагает свои полномочия** перед вновь избранным Президентом — независимо от того, как давно было сформировано.":
    "The Government may itself put the **question of confidence** to the Duma. And in any case it **lays down its powers** before a newly elected President — however recently it was formed.",
  "Перед кем Правительство слагает свои полномочия?": "Before whom does the Government lay down its powers?",
  "Перед вновь избранным Президентом": "Before a newly elected President",
  "Перед вновь избранной Государственной Думой": "Before a newly elected State Duma",
  "Перед Советом Федерации": "Before the Federation Council",
  "Ни перед кем: оно работает бессрочно": "Before nobody: it serves without a term",
  "Перед вновь избранным Президентом, и это происходит после каждых президентских выборов. Смена состава Думы сама по себе отставки Правительства не влечёт.":
    "Before a newly elected President, and it happens after every presidential election. A change in the make-up of the Duma does not by itself bring the Government down.",
  "**Указ** — акт Президента, **постановление** — акт Правительства, **федеральный закон** — акт парламента. Три слова, которые в новостях звучат рядом и означают три разные вещи.":
    "A **decree** is an act of the President, a **resolution** an act of the Government, a **federal law** an act of parliament. Three words that sit side by side in the news and mean three different things.",
  // ru-sud
  "Судебная власть": "The judiciary",
  "Почему это важно: на вершине стоят два суда, и они не одно и то же. Один судит законы, другой — дела. Их постоянно путают, и различие между ними стоит запомнить сразу.":
    "Why this matters: two courts stand at the top, and they are not the same thing. One judges laws, the other judges cases. They are constantly confused, and the difference is worth learning straight away.",
  "Основные правила": "The basic rules",
  "**Статья 118**: правосудие осуществляется **только судом**, судебная система устанавливается Конституцией и федеральным конституционным законом, а **создание чрезвычайных судов не допускается**. **Статья 120** объявляет судей **независимыми** и подчиняющимися только Конституции и закону; **статьи 121 и 122** добавляют **несменяемость** и **неприкосновенность**.":
    "**Article 118**: justice is administered **by the courts alone**, the court system is established by the Constitution and by federal constitutional law, and **no extraordinary courts may be created**. **Article 120** declares judges **independent** and subject only to the Constitution and the law; **articles 121 and 122** add that they are **irremovable** and **immune**.",
  "Судьёй может стать гражданин России **не моложе 25 лет**, с высшим юридическим образованием и **стажем работы по юридической профессии не менее пяти лет**. Для высших судов требования выше.":
    "A citizen of Russia may become a judge at **25 or over**, with a higher legal education and **at least five years of work in the legal profession**. For the highest courts the requirements are stricter.",
  "Лестница судов": "The ladder of courts",
  // ru-sud
  "Мировые судьи": "Justices of the peace",
  "Самые простые дела: мелкие иски, часть уголовных дел. Это суды субъектов Федерации, а не федеральные.":
    "The simplest cases: small claims and some criminal matters. These are courts of the federal subjects, not federal courts.",
  "Районные суды": "District courts",
  "Основное звено: большинство дел по первой инстанции рассматривается здесь.":
    "The main tier: most cases are heard here at first instance.",
  "Суды субъектов": "Courts of the federal subjects",
  "Областные, краевые, республиканские. Апелляция на районные суды и первая инстанция по тяжким делам.":
    "Oblast, krai and republican courts. Appeals from the district courts, and first instance for serious cases.",
  "Кассационные и апелляционные суды": "Cassation and appeal courts",
  "Отдельные окружные суды, созданные в 2019 году, чтобы проверка шла не в том же регионе, где выносилось решение.":
    "Separate circuit courts, created in 2019 so that a decision is reviewed outside the region where it was handed down.",
  "Отдельную ветвь образуют **арбитражные суды**, которые рассматривают экономические споры между организациями и предпринимателями. Обычное дело проходит три инстанции: **первую**, **апелляцию** и **кассацию**.":
    "A branch of their own is formed by the **arbitration courts**, which hear economic disputes between organisations and entrepreneurs. An ordinary case passes through three instances: **first instance**, **appeal** and **cassation**.",
  "Верховный Суд": "The Supreme Court",
  "**Верховный Суд** — высший судебный орган по **гражданским, уголовным, административным** делам и по **экономическим спорам**. Он даёт разъяснения по вопросам судебной практики, и эти разъяснения фактически определяют, как нижестоящие суды будут читать закон.":
    "The **Supreme Court** is the highest judicial body for **civil, criminal and administrative** cases and for **economic disputes**. It issues clarifications on questions of judicial practice, and those clarifications in effect decide how the lower courts will read the law.",
  "В **2014 году** Высший Арбитражный Суд был **упразднён**, а его полномочия переданы Верховному Суду. С тех пор высших судов два, а не три.":
    "In **2014** the Supreme Arbitration Court was **abolished** and its powers transferred to the Supreme Court. Since then there have been two highest courts, not three.",
  "Конституционный Суд": "The Constitutional Court",
  "**Конституционный Суд** стоит особняком: он не рассматривает дела граждан по существу, а **проверяет законы на соответствие Конституции**. С поправок **2020 года** в нём **одиннадцать судей**; прежде было девятнадцать. С **2008 года** он находится не в Москве, а в **Санкт-Петербурге**.":
    "The **Constitutional Court** stands apart: it does not hear citizens' cases on their merits but **checks laws against the Constitution**. Since the **2020** amendments it has **eleven judges**; before that there were nineteen. Since **2008** it has sat not in Moscow but in **St Petersburg**.",
  "Его полномочия: проверка конституционности законов и иных актов, разрешение споров о компетенции между органами власти, **толкование Конституции**, заключение при отрешении Президента и проверка законопроектов по запросу Президента. Норма, признанная неконституционной, **утрачивает силу**.":
    "Its powers: checking the constitutionality of laws and other acts, settling disputes over competence between organs of power, **interpreting the Constitution**, giving an opinion in the removal of a President, and reviewing bills at the President's request. A provision found unconstitutional **loses its force**.",
  "Сколько судей в Конституционном Суде Российской Федерации?":
    "How many judges sit in the Constitutional Court of the Russian Federation?",
  "Девять": "Nine",
  "Одиннадцать": "Eleven",
  "Девятнадцать": "Nineteen",
  "Двадцать один": "Twenty-one",
  "Одиннадцать — с поправок 2020 года; прежде судей было девятнадцать. Число сокращали постепенно, не заполняя открывающиеся места.":
    "Eleven, since the 2020 amendments; before that there were nineteen judges. The number was brought down gradually, by leaving vacancies unfilled.",
  "В каком городе находится Конституционный Суд?": "In which city does the Constitutional Court sit?",
  "В Москве": "In Moscow",
  "В Санкт-Петербурге": "In St Petersburg",
  "В Екатеринбурге": "In Yekaterinburg",
  "В Казани": "In Kazan",
  "В Санкт-Петербурге с 2008 года — единственный высший орган власти, работающий не в столице. Верховный Суд переехал туда позже.":
    "In St Petersburg since 2008 — the only high organ of power that does not work in the capital. The Supreme Court moved there later.",
  "Прокуратура": "The prosecution service",
  "**Статья 129** отводит **прокуратуре** отдельное место в той же главе. Это **единая централизованная система** с подчинением нижестоящих прокуроров вышестоящим и **Генеральному прокурору**, которого назначает Совет Федерации по представлению Президента. Прокуратура надзирает за соблюдением законов и поддерживает обвинение в суде, но судом не является.":
    "**Article 129** gives the **prosecution service** a place of its own in the same chapter. It is a **single centralised system** in which lower prosecutors answer to higher ones and to the **Prosecutor General**, who is appointed by the Federation Council on the President's nomination. The service supervises compliance with the law and brings the prosecution in court, but it is not a court.",
  "Что произошло с высшими судами в 2014 году?": "What happened to the highest courts in 2014?",
  "Конституционный Суд переехал в Санкт-Петербург": "The Constitutional Court moved to St Petersburg",
  "Высший Арбитражный Суд был упразднён, его полномочия перешли Верховному Суду":
    "The Supreme Arbitration Court was abolished and its powers passed to the Supreme Court",
  "Был создан Верховный Суд": "The Supreme Court was created",
  "Число судей Конституционного Суда сократили до одиннадцати":
    "The number of Constitutional Court judges was cut to eleven",
  "Переезд Конституционного Суда состоялся в 2008 году, а сокращение до одиннадцати судей — в 2020-м. В 2014 году высших судов стало два вместо трёх.":
    "The Constitutional Court's move happened in 2008, and the cut to eleven judges in 2020. In 2014 the number of highest courts went from three to two.",
  "**Конституционный Суд** судит **законы**, **Верховный Суд** — **дела**. Обратиться в Конституционный Суд с жалобой на приговор нельзя; можно оспорить закон, по которому этот приговор вынесен.":
    "The **Constitutional Court** judges **laws**, the **Supreme Court** judges **cases**. You cannot take a complaint about a sentence to the Constitutional Court; you can challenge the law the sentence was handed down under.",
  // ru-vybory
  "Выборы и местное самоуправление": "Elections and local self-government",
  "Почему это важно: голосуют в России в один и тот же день по всей стране, а местное самоуправление по Конституции вообще не входит в государственную власть. Обе особенности стоит знать заранее.":
    "Why this matters: voting in Russia happens on the same day across the whole country, and under the Constitution local self-government is not part of state power at all. Both peculiarities are worth knowing in advance.",
  "Кто голосует и кого выбирают": "Who votes and who is elected",
  "**Статья 32** даёт гражданам право **избирать и быть избранными**. Активное избирательное право наступает в **18 лет**. Пассивное — то есть право самому баллотироваться — зависит от должности.":
    "**Article 32** gives citizens the right **to elect and to be elected**. The right to vote comes at **18**. The right to stand — to be a candidate yourself — depends on the office.",
  "18 лет": "18",
  "Депутат представительного органа муниципального образования.":
    "A deputy of the representative body of a municipality.",
  "Депутат Государственной Думы.": "A deputy of the State Duma.",
  "Глава субъекта Федерации, а также сенатор.": "The head of a federal subject, and a senator.",
  "Президент Российской Федерации.": "The President of the Russian Federation.",
  "Та же статья называет два исключения: **не имеют права избирать и быть избранными** граждане, признанные судом **недееспособными**, и содержащиеся в местах лишения свободы **по приговору суда**. Заключение под стражу до приговора права голоса не лишает.":
    "The same article names two exceptions: citizens declared **legally incapable** by a court, and those held in places of detention **under a court sentence**, **may neither vote nor be elected**. Being held in custody before sentence does not take the vote away.",
  "С какого возраста можно быть избранным депутатом Государственной Думы?":
    "From what age may a person be elected a deputy of the State Duma?",
  "С 18 лет": "From 18",
  "С 21 года": "From 21",
  "С 30 лет": "From 30",
  "С 35 лет": "From 35",
  "С двадцати одного года. Восемнадцать — для муниципального депутата, тридцать — для сенатора и главы субъекта, тридцать пять — для Президента.":
    "From twenty-one. Eighteen is for a municipal deputy, thirty for a senator and for the head of a federal subject, thirty-five for the President.",
  "Единый день голосования": "The single voting day",
  "Региональные и муниципальные выборы проводятся по всей стране в один и тот же день — **второе воскресенье сентября**. Выборы Президента и Государственной Думы имеют собственные сроки, но и они привязаны к этому дню, когда совпадают по времени.":
    "Regional and municipal elections are held across the country on the same day — the **second Sunday in September**. Presidential and State Duma elections have terms of their own, but they too are tied to that day when the timing coincides.",
  "Организует выборы система комиссий: **Центральная избирательная комиссия**, комиссии субъектов, территориальные и **участковые** комиссии. На участках работают наблюдатели от кандидатов и партий.":
    "Elections are run by a system of commissions: the **Central Election Commission**, the commissions of the federal subjects, territorial commissions and **precinct** commissions. Observers from candidates and parties work at the polling stations.",
  "Партии и референдум": "Parties and the referendum",
  "**Статья 13** гарантирует **многопартийность**. Порядок создания партий определяет отдельный федеральный закон: он требует определённой численности и наличия **региональных отделений** более чем в половине субъектов Федерации.":
    "**Article 13** guarantees a **multi-party system**. How parties are set up is decided by a separate federal law: it requires a certain membership and **regional branches** in more than half the federal subjects.",
  "**Референдум** назван в **статье 3** высшим непосредственным выражением власти народа, наряду со свободными выборами. Его назначает **Президент** в порядке, установленном федеральным конституционным законом. Общероссийский референдум проводился дважды: в 1991 и 1993 годах.":
    "The **referendum** is named in **article 3** as the highest direct expression of the people's power, alongside free elections. It is called by the **President** in the manner set by federal constitutional law. A nationwide referendum has been held twice: in 1991 and 1993.",
  "Местное самоуправление": "Local self-government",
  "**Статья 12** содержит формулировку, удивляющую многих: органы местного самоуправления **не входят в систему органов государственной власти**. Местное самоуправление в пределах своих полномочий **самостоятельно**, и ему посвящена отдельная, восьмая глава Конституции.":
    "**Article 12** contains a formula that surprises many: the organs of local self-government **are not part of the system of organs of state power**. Local self-government is **autonomous** within its powers, and a chapter of its own, the eighth, is given over to it.",
  "Оно осуществляется через **местные референдумы**, **выборы** и выборные органы. Виды муниципальных образований — **городской округ**, **муниципальный округ**, **муниципальный район** и **поселение**.":
    "It is exercised through **local referendums**, **elections** and elected bodies. The kinds of municipality are the **urban district**, the **municipal district**, the **municipal rayon** and the **settlement**.",
  "Что решают на местах": "What is decided locally",
  "Благоустройство, местные дороги, жилищно-коммунальное хозяйство, вывоз мусора, содержание школ и детских садов.":
    "Amenities, local roads, housing and utilities, refuse collection, the upkeep of schools and nurseries.",
  "Местный бюджет": "The local budget",
  "Муниципалитеты самостоятельно формируют, утверждают и исполняют собственный бюджет и устанавливают местные налоги.":
    "Municipalities draw up, approve and execute their own budget on their own account, and set local taxes.",
  "Глава муниципалитета": "The head of the municipality",
  "Порядок избрания различается: где-то прямые выборы, где-то избрание депутатами из своего состава или по конкурсу.":
    "How the head is chosen varies: in some places by direct election, in others by the deputies from among themselves or through a competitive selection.",
  "Государственные полномочия": "State powers",
  "Их можно передать муниципалитету законом, но только вместе с деньгами на исполнение.":
    "These can be handed to a municipality by law, but only together with the money to carry them out.",
  "Когда проводится единый день голосования?": "When is the single voting day held?",
  "В первое воскресенье марта": "On the first Sunday in March",
  "Во второе воскресенье сентября": "On the second Sunday in September",
  "В последнее воскресенье ноября": "On the last Sunday in November",
  "Даты назначаются в каждом регионе отдельно": "The dates are set separately in each region",
  "Второе воскресенье сентября. Единый день был введён, чтобы региональные и местные кампании не шли круглый год вразнобой.":
    "The second Sunday in September. The single day was brought in so that regional and local campaigns would not run out of step all year round.",
  "Входят ли органы местного самоуправления в систему органов государственной власти?":
    "Are the organs of local self-government part of the system of organs of state power?",
  "Да, это её нижнее звено": "Yes, they are its lowest tier",
  "Нет: статья 12 прямо говорит, что не входят": "No: article 12 says outright that they are not",
  "Входят только в городах федерального значения": "Only in the cities of federal significance",
  "Входят, если так решит субъект Федерации": "They are, if the federal subject decides so",
  "Статья 12 отделяет местное самоуправление от государственной власти и признаёт его самостоятельность в пределах полномочий. Ему посвящена отдельная восьмая глава.":
    "Article 12 separates local self-government from state power and recognises that it is autonomous within its powers. A separate eighth chapter is given over to it.",
  "**Уполномоченный по правам человека** — федеральный омбудсмен — назначается **Государственной Думой**, а не Президентом, и работает независимо от органов власти. У большинства субъектов есть свой уполномоченный.":
    "The **Commissioner for Human Rights** — the federal ombudsman — is appointed by the **State Duma**, not by the President, and works independently of the organs of power. Most federal subjects have a commissioner of their own.",
  // chapter
  "История России": "The history of Russia",
  // ru-kievskaya-rus
  "Киевская Русь и раздробленность": "Kievan Rus and the fragmentation",
  "Почему начинаем отсюда: у русской государственности есть точка отсчёта, и она лежит не в Москве. Первые триста лет центром была не она, и это меняет всю картину.":
    "Why we start here: Russian statehood has a starting point, and it does not lie in Moscow. For the first three hundred years the centre was somewhere else, and that changes the whole picture.",
  "Путь из варяг в греки": "The route from the Varangians to the Greeks",
  "Восточные славяне жили племенными союзами по великим рекам, и через их земли шёл торговый **путь «из варяг в греки»** — от Балтики по Волхову и Днепру к Чёрному морю и Константинополю. Города вырастали там, где стоило держать перевоз и склад: **Новгород**, **Смоленск**, **Киев**.":
    "The Eastern Slavs lived in tribal unions along the great rivers, and through their lands ran the trade **route “from the Varangians to the Greeks”** — from the Baltic along the Volkhov and the Dnieper to the Black Sea and Constantinople. Towns grew where it was worth holding a crossing and a warehouse: **Novgorod**, **Smolensk**, **Kiev**.",
  "«Повесть временных лет» относит к **862 году** призвание **Рюрика** в Новгород, а к **882-му** — поход **Олега**, который взял Киев и соединил два центра. От этой даты и принято считать начало **Киевской Руси**.":
    "The Primary Chronicle puts the calling of **Rurik** to Novgorod in **862**, and in **882** the campaign of **Oleg**, who took Kiev and joined the two centres. That date is taken as the beginning of **Kievan Rus**.",
  "988 год": "The year 988",
  "В **988 году** князь **Владимир** принял христианство и крестил Русь. Решение было и политическим: христианский правитель переставал быть для соседей объектом миссии, а страна получала письменность, календарь и связи со всей византийской и латинской Европой.":
    "In **988** Prince **Vladimir** accepted Christianity and baptised Rus. The decision was political as well: a Christian ruler stopped being a target for his neighbours' missions, and the country gained a script, a calendar and ties with the whole of Byzantine and Latin Europe.",
  "Письменность принесла **кириллица**, созданная в IX веке **Кириллом и Мефодием** для славянских языков. Богослужение шло не на греческом, а на понятном языке, и это на столетия определило, какой будет книжность на Руси.":
    "The script came with the **Cyrillic alphabet**, created in the 9th century by **Cyril and Methodius** for the Slavic languages. Worship was held not in Greek but in a language people understood, and that shaped what learning in Rus would look like for centuries.",
  "В каком году произошло Крещение Руси?": "In what year was Rus baptised?",
  // ru-kievskaya-rus
  "В 862 году": "In 862",
  "В 882 году": "In 882",
  "В 988 году": "In 988",
  "В 1097 году": "In 1097",
  "988 год, при князе Владимире. 862-й — призвание Рюрика по летописи, 882-й — объединение Новгорода и Киева, 1097-й — Любечский съезд.":
    "988, under Prince Vladimir. 862 is the calling of Rurik in the chronicle, 882 the joining of Novgorod and Kiev, 1097 the Congress of Lyubech.",
  "Ярослав Мудрый": "Yaroslav the Wise",
  "При **Ярославе Мудром** (XI век) Киев достиг расцвета. Появился первый письменный свод законов — **«Русская Правда»**, в котором вместо кровной мести устанавливались денежные штрафы. Была построена **София Киевская**, а дочери Ярослава вышли замуж за королей Франции, Норвегии и Венгрии: Русь была частью европейской династической сети.":
    "Under **Yaroslav the Wise** (11th century) Kiev reached its height. The first written code of laws appeared — the **Russkaya Pravda** — which put money fines in place of the blood feud. **St Sophia of Kiev** was built, and Yaroslav's daughters married the kings of France, Norway and Hungary: Rus was part of the European dynastic network.",
  "Раздробленность": "Fragmentation",
  "В **1097 году** князья съехались в **Любече** и постановили: **каждый держит свою отчину**, то есть земли, унаследованные от отца. Съезд собирали, чтобы прекратить усобицы, а получилось иначе: он закрепил разделение Руси на самостоятельные княжества.":
    "In **1097** the princes met at **Lyubech** and resolved that **each should hold his own patrimony** — the lands inherited from his father. The congress was called to put an end to the feuds; it did the opposite, and fixed the division of Rus into separate principalities.",
  "Новгородская республика": "The Novgorod Republic",
  "Князя приглашали и могли изгнать, а решало вече — собрание горожан. Ближе к городской республике, чем к княжеству.":
    "The prince was invited and could be driven out, and matters were settled by the veche, an assembly of townspeople. Closer to a city republic than to a principality.",
  "Владимиро-Суздальская земля": "The land of Vladimir-Suzdal",
  "Северо-восток, куда при Андрее Боголюбском сместился центр силы. Из этих земель позже вырастет Москва.":
    "The north-east, where the centre of power shifted under Andrey Bogolyubsky. Moscow would later grow out of these lands.",
  "Галицко-Волынская земля": "The land of Galicia-Volhynia",
  "Юго-запад, тесно связанный с Польшей и Венгрией.": "The south-west, closely tied to Poland and Hungary.",
  "Владимир Мономах": "Vladimir Monomakh",
  "Последний, кому удалось на время собрать Русь под одной рукой, в начале XII века.":
    "The last man who managed to gather Rus under one hand for a time, at the beginning of the 12th century.",
  "Как назывался первый письменный свод законов Руси?":
    "What was the first written code of laws in Rus called?",
  "Судебник": "The Sudebnik",
  "Русская Правда": "The Russkaya Pravda",
  "Соборное уложение": "The Sobornoye Ulozheniye",
  "Стоглав": "The Stoglav",
  "«Русская Правда» при Ярославе Мудром. Судебник — свод Ивана III 1497 года, а Соборное уложение — 1649 года: три разных документа из трёх разных эпох.":
    "The Russkaya Pravda, under Yaroslav the Wise. The Sudebnik is Ivan III's code of 1497, and the Sobornoye Ulozheniye dates from 1649: three different documents from three different eras.",
  "Нашествие": "The invasion",
  "В **1237–1240 годах** на Русь пришли войска **Батыя**. Рязань, Владимир, десятки городов были взяты и сожжены; в **1240 году** пал **Киев**. Раздробленность, начатая в Любече, не позволила выставить общее войско, и княжества гибли поодиночке.":
    "In **1237–1240** the armies of **Batu** came to Rus. Ryazan, Vladimir and dozens of towns were taken and burned; in **1240** **Kiev** fell. The fragmentation begun at Lyubech made a common army impossible, and the principalities went down one by one.",
  "К этому времени относится и **«Слово о полку Игореве»** — поэма о неудачном походе против половцев, главный памятник литературы домонгольской Руси. Её тема — та же беда: князья не действуют вместе.":
    "The same period gives us **The Tale of Igor's Campaign** — a poem about a failed expedition against the Cumans, and the chief literary monument of pre-Mongol Rus. Its theme is the same trouble: the princes do not act together.",
  "Что постановил Любечский съезд князей 1097 года?": "What did the Congress of Lyubech decide in 1097?",
  "Что каждый князь держит свою отчину": "That each prince holds his own patrimony",
  "Что Русь переходит к единому наследованию": "That Rus moves to a single line of inheritance",
  "Что столица переносится во Владимир": "That the capital moves to Vladimir",
  "Что вводится единый свод законов": "That a single code of laws is introduced",
  "Съезд собирали ради прекращения усобиц, но он закрепил разделение земель между княжескими линиями. Через сто сорок лет это обернулось невозможностью выставить общее войско.":
    "The congress was called to end the feuds, but it fixed the division of the lands between the princely lines. A hundred and forty years later that made it impossible to field a common army.",
  "**Киевская Русь** — общее наследие России, Украины и Беларуси, и историография в каждой из трёх стран расставляет здесь свои акценты. Даты и события при этом одни и те же.":
    "**Kievan Rus** is the shared inheritance of Russia, Ukraine and Belarus, and the historiography of each of the three sets its own emphases here. The dates and the events are the same.",
  // ru-orda-moskva
  "Ордынское время и возвышение Москвы": "The time of the Horde and the rise of Moscow",
  "Почему это важно: за двести сорок лет зависимости центр русских земель окончательно переместился на северо-восток, и незначительный городок стал столицей. Как это вышло — вопрос не случая, а расчёта.":
    "Why this matters: over two hundred and forty years of dependence the centre of the Russian lands moved for good to the north-east, and an unimportant little town became the capital. How that happened was not chance but calculation.",
  "Как была устроена зависимость": "How the dependence worked",
  "Ордынское владычество не означало прямого управления. Князья оставались на местах, но получали от хана **ярлык** — грамоту на право княжить, — и собирали **дань**, которую называли **выходом**. Сначала её собирали ханские сборщики, **баскаки**, потом это право перешло к самим князьям, и здесь начинается история Москвы.":
    "Rule by the Horde did not mean direct government. The princes stayed in place but received a **yarlyk** from the khan — a charter granting the right to rule — and collected the **tribute**, which was called the **vykhod**. At first the khan's collectors, the **baskaks**, gathered it; then the right passed to the princes themselves, and here the story of Moscow begins.",
  "Одновременно с востока давила Орда, а с запада шли другие противники. **Александр Невский** разбил шведов на Неве в **1240 году** и Ливонский орден на льду Чудского озера в **1242-м**, при этом с Ордой он выбрал путь соглашения: воевать на два фронта было нельзя.":
    "The Horde pressed from the east while other opponents came from the west. **Alexander Nevsky** beat the Swedes on the Neva in **1240** and the Livonian Order on the ice of Lake Peipus in **1242**, while with the Horde he chose accommodation: fighting on two fronts was impossible.",
  "Расчёт московских князей": "The calculation of the Moscow princes",
  "**Иван Калита** (1325–1340) добился права **собирать дань** со всех русских земель и отвозить её в Орду. Часть оседала в Москве. Он же добился переноса в Москву **митрополичьей кафедры** — и город стал не только богатым, но и церковным центром.":
    "**Ivan Kalita** (1325–1340) won the right to **collect the tribute** from all the Russian lands and take it to the Horde. Part of it stayed in Moscow. He also had the **metropolitan's see** moved to Moscow — and the town became not only rich but a church centre.",
  "Дань через свои руки": "The tribute through his own hands",
  "Право собирать выход давало деньги и власть над соседями, которые платили через Москву.":
    "The right to collect the vykhod brought money and power over neighbours, who paid through Moscow.",
  "Митрополит в Москве": "The metropolitan in Moscow",
  "Церковный центр придавал городу вес, которого не давало его положение на карте.":
    "A church centre gave the town a weight its position on the map did not.",
  "Скупка земель": "Buying up land",
  "Московские князья покупали и выменивали села и волости, расширяя владения без войны.":
    "The Moscow princes bought and exchanged villages and volosts, extending their holdings without war.",
  "Наследование от отца к сыну": "Inheritance from father to son",
  "В Москве закрепился прямой порядок, тогда как в других землях княжества дробились между братьями.":
    "In Moscow the direct order took hold, while in other lands principalities were split among brothers.",
  "Что такое ярлык в ордынское время?": "What was a yarlyk in the time of the Horde?",
  "Дань, которую платили Орде": "The tribute paid to the Horde",
  "Ханская грамота на право княжить": "A khan's charter granting the right to rule",
  "Знак отличия ордынского воина": "A badge of rank of a Horde warrior",
  "Договор между княжествами": "A treaty between principalities",
  "Ярлык давал право на княжение, и за него между князьями шла постоянная борьба. Дань называлась выходом, а собирали её сначала баскаки, потом сами князья.":
    "The yarlyk gave the right to rule, and the princes fought over it constantly. The tribute was called the vykhod, and it was gathered first by the baskaks and later by the princes themselves.",
  "Куликово поле": "Kulikovo Field",
  "В **1380 году** войско под началом московского князя **Дмитрия Донского** разбило на **Куликовом поле** армию **Мамая**. Победа не сняла зависимости — через два года Тохтамыш сжёг Москву, — но показала, что Орду можно побеждать, и что собирать общее войско способна именно Москва.":
    "In **1380** an army under the Moscow prince **Dmitry Donskoy** defeated the army of **Mamai** on **Kulikovo Field**. The victory did not lift the dependence — two years later Tokhtamysh burned Moscow — but it showed that the Horde could be beaten, and that Moscow was the one able to gather a common army.",
  "В каком году произошла Куликовская битва?": "In what year was the Battle of Kulikovo fought?",
  "В 1240 году": "In 1240",
  "В 1242 году": "In 1242",
  "В 1380 году": "In 1380",
  "В 1480 году": "In 1480",
  "1380 год, Дмитрий Донской против Мамая. 1240 и 1242 — победы Александра Невского на западе, 1480 — стояние на Угре, которым зависимость закончилась.":
    "1380, Dmitry Donskoy against Mamai. 1240 and 1242 are Alexander Nevsky's victories in the west, and 1480 is the stand on the Ugra, which ended the dependence.",
  "Иван III": "Ivan III",
  "**Иван III** (1462–1505) завершил дело. В **1478 году** он присоединил **Новгород**, положив конец его вечевой республике, а в **1480-м** произошло **стояние на реке Угре**: два войска простояли друг против друга и разошлись без сражения. Этой датой принято обозначать **конец ордынской зависимости**.":
    "**Ivan III** (1462–1505) finished the work. In **1478** he annexed **Novgorod**, putting an end to its veche republic, and in **1480** came the **stand on the river Ugra**: two armies faced each other and went their separate ways without a battle. That date is taken to mark the **end of dependence on the Horde**.",
  "При нём же появились **Судебник 1497 года** — единый свод законов для всей страны, — титул **«государь всея Руси»** и **двуглавый орёл** в качестве герба. Тогда же в Москве построили кирпичный Кремль, который стоит и сегодня.":
    "Under him came the **Sudebnik of 1497** — a single code of laws for the whole country — the title **“sovereign of all Rus”** and the **double-headed eagle** as the coat of arms. It was then, too, that the brick Kremlin still standing today was built in Moscow.",
  "К этому времени относится и **Андрей Рублёв** с его «Троицей» — вершина русской иконописи, написанная в начале XV века.":
    "The same period gives us **Andrei Rublev** and his Trinity — the summit of Russian icon painting, made at the beginning of the 15th century.",
  "Чем закончилось стояние на реке Угре в 1480 году?": "How did the stand on the river Ugra end in 1480?",
  "Крупным сражением и разгромом Орды": "In a great battle and the rout of the Horde",
  "Войска разошлись без битвы, и ордынская зависимость закончилась":
    "The armies parted without a battle, and dependence on the Horde ended",
  "Москва признала власть хана ещё на сто лет": "Moscow accepted the khan's power for another hundred years",
  "Присоединением Новгорода": "With the annexation of Novgorod",
  "Сражения не было: войска простояли по берегам и разошлись. Именно этой датой обозначают конец зависимости, а Новгород был присоединён двумя годами раньше.":
    "There was no battle: the armies stood on the two banks and went their separate ways. That is the date used for the end of the dependence, and Novgorod had been annexed two years earlier.",
  "**Куликовская битва** и **стояние на Угре** разделены ровно столетием. Первая была громкой победой, но зависимости не сняла; вторая прошла без боя и стала концом эпохи.":
    "The **Battle of Kulikovo** and the **stand on the Ugra** are exactly a century apart. The first was a loud victory that did not lift the dependence; the second passed without a fight and ended an era.",
  // ru-moskovskoe-tsarstvo
  "Московское царство": "The Muscovite tsardom",
  "Почему это важно: за полтора столетия страна получает царя, теряет династию, едва не исчезает в Смуте и выбирает новую власть собором. Здесь же закрепляется крепостное право, которое продержится двести лет.":
    "Why this matters: in a century and a half the country gains a tsar, loses a dynasty, comes close to vanishing in the Time of Troubles and chooses a new ruler by assembly. Serfdom is fixed here too, and it will last two hundred years.",
  "Первый царь": "The first tsar",
  "В **1547 году** **Иван IV** венчался на царство — до него московские правители звались великими князьями. Начало правления было временем реформ: **Судебник 1550 года**, созыв **земских соборов** — сословных собраний, — упорядочение управления и церковные постановления Стоглавого собора.":
    "In **1547** **Ivan IV** was crowned tsar — before him the Moscow rulers were called grand princes. The start of his reign was a time of reform: the **Sudebnik of 1550**, the calling of the **zemsky sobors** — assemblies of the estates — a tidying-up of administration, and the church decisions of the Stoglav council.",
  "Тогда же расширились границы: в **1552 году** была взята **Казань**, в **1556-м** — **Астрахань**, и Волга целиком стала русской рекой. В 1580-е годы отряд **Ермака** начал присоединение **Сибири** — движение, которое за семьдесят лет доведёт русских землепроходцев до Тихого океана.":
    "The borders widened at the same time: **Kazan** was taken in **1552** and **Astrakhan** in **1556**, and the whole Volga became a Russian river. In the 1580s a detachment under **Yermak** began the annexation of **Siberia** — a movement that within seventy years would carry Russian explorers to the Pacific.",
  "Опричнина": "The oprichnina",
  "С **1565 по 1572 год** царь разделил государство на **опричнину**, управляемую лично им, и остальную землю. Годы опричнины — это массовые казни, конфискации, разгром Новгорода и разорение центральных уездов. Вместе с затяжной и проигранной **Ливонской войной** это надолго подорвало хозяйство страны.":
    "From **1565 to 1572** the tsar split the state into the **oprichnina**, which he ruled in person, and the rest of the land. The years of the oprichnina meant mass executions, confiscations, the sack of Novgorod and the ruin of the central districts. Together with the long, lost **Livonian War** this damaged the country's economy for a long time to come.",
  "В **1589 году** в Москве было учреждено **патриаршество**: русская церковь стала полностью самостоятельной.":
    "In **1589** a **patriarchate** was established in Moscow: the Russian church became fully independent.",
  "Кто первым в русской истории венчался на царство?":
    "Who was the first in Russian history to be crowned tsar?",
  "Иван IV": "Ivan IV",
  "Михаил Романов": "Mikhail Romanov",
  "Пётр I": "Peter I",
  "Иван IV, в 1547 году. Иван III носил титул государя всея Руси, а Пётр I два века спустя примет титул императора: три ступени одного восхождения.":
    "Ivan IV, in 1547. Ivan III bore the title sovereign of all Rus, and Peter I would take the title of emperor two centuries later: three steps of one ascent.",
  "Смутное время": "The Time of Troubles",
  "После смерти сына Ивана IV династия пресеклась, и с **1598 по 1613 год** страна прошла через **Смуту**: борьбу за престол, самозванцев, объявлявших себя чудом спасшимся царевичем, страшный голод начала века и **польско-литовскую интервенцию**. В Москве стоял иноземный гарнизон, и государство фактически перестало существовать.":
    "After the death of Ivan IV's son the dynasty came to an end, and from **1598 to 1613** the country went through the **Time of Troubles**: a struggle for the throne, pretenders declaring themselves the miraculously saved tsarevich, a terrible famine at the start of the century, and **Polish-Lithuanian intervention**. A foreign garrison stood in Moscow, and the state effectively ceased to exist.",
  "Выход нашёлся снизу. В Нижнем Новгороде земский староста **Кузьма Минин** собрал средства, а князь **Дмитрий Пожарский** возглавил ополчение. В **1612 году** Москва была освобождена — это событие и лежит в основе **Дня народного единства** 4 ноября.":
    "The way out came from below. In Nizhny Novgorod the town elder **Kuzma Minin** raised the money and Prince **Dmitry Pozharsky** led the militia. In **1612** Moscow was freed — and that event is the basis of **National Unity Day** on 4 November.",
  "В **1613 году** **Земский собор** избрал царём шестнадцатилетнего **Михаила Романова**. Династия **Романовых** будет править триста четыре года.":
    "In **1613** a **Zemsky Sobor** elected the sixteen-year-old **Mikhail Romanov** as tsar. The **Romanov** dynasty would rule for three hundred and four years.",
  "Кого Земский собор избрал царём в 1613 году?": "Whom did the Zemsky Sobor elect tsar in 1613?",
  "Бориса Годунова": "Boris Godunov",
  // ru-moskovskoe-tsarstvo
  "Михаила Романова": "Mikhail Romanov",
  "Дмитрия Пожарского": "Dmitry Pozharsky",
  "Владислава, королевича польского": "Władysław, the Polish prince",
  "Михаила Романова, и с него начинается династия, правившая до 1917 года. Пожарский возглавлял ополчение, но на престол не претендовал.":
    "Mikhail Romanov, and with him begins the dynasty that ruled until 1917. Pozharsky led the militia but made no claim to the throne.",
  "Век семнадцатый": "The seventeenth century",
  "**Соборное уложение 1649 года** — свод законов, действовавший почти двести лет, — окончательно закрепило **крепостное право**: сыск беглых крестьян стал бессрочным, и крестьянин был навсегда прикреплён к земле и владельцу.":
    "The **Sobornoye Ulozheniye of 1649** — a code of laws that stayed in force for almost two hundred years — fixed **serfdom** for good: the search for runaway peasants became unlimited in time, and the peasant was tied to the land and to the owner for ever.",
  "В середине века патриарх **Никон** провёл церковную реформу, исправив книги и обряды по греческому образцу. Часть верующих её не приняла: произошёл **раскол**, и **старообрядцы** на столетия оказались вне господствующей церкви.":
    "In the middle of the century Patriarch **Nikon** carried out a church reform, correcting the books and the rites on the Greek model. Some believers did not accept it: the **schism** followed, and the **Old Believers** were left outside the dominant church for centuries.",
  "1649 · Соборное уложение": "1649 · The Sobornoye Ulozheniye",
  "Бессрочный сыск беглых. Крепостное право приобретает окончательный вид.":
    "The search for runaways becomes unlimited in time. Serfdom takes its final shape.",
  "1654 · Переяславская рада": "1654 · The Pereyaslav Council",
  "Войско Запорожское переходит под власть московского царя, и начинается долгая война с Речью Посполитой.":
    "The Zaporozhian Host passes under the authority of the Moscow tsar, and a long war with the Polish-Lithuanian Commonwealth begins.",
  "1648 · До Тихого океана": "1648 · To the Pacific",
  "Семён Дежнёв проходит проливом между Азией и Америкой. Освоение Сибири занимает меньше века.":
    "Semyon Dezhnyov passes through the strait between Asia and America. The opening of Siberia takes less than a century.",
  "Раскол": "The schism",
  "Реформа Никона делит верующих. Старообрядчество сохранится до наших дней.":
    "Nikon's reform divides the believers. The Old Belief survives to this day.",
  "Что окончательно закрепило Соборное уложение 1649 года?":
    "What did the Sobornoye Ulozheniye of 1649 fix for good?",
  "Патриаршество": "The patriarchate",
  "Крепостное право": "Serfdom",
  "Право созывать земские соборы": "The right to call zemsky sobors",
  "Присоединение Сибири": "The annexation of Siberia",
  "Сыск беглых крестьян стал бессрочным, и крестьянин оказался прикреплён к земле навсегда. Отменят крепостное право только в 1861 году.":
    "The search for runaway peasants became unlimited in time, and the peasant was tied to the land for ever. Serfdom would not be abolished until 1861.",
  "**Земский собор** — не парламент. Он собирался нерегулярно, по решению власти, и представлял сословия, а не избирателей. Но именно собор в 1613 году выбрал царя, и этот прецедент остался в памяти.":
    "A **zemsky sobor** is not a parliament. It met irregularly, when the authorities decided, and it represented the estates rather than voters. But it was a sobor that chose a tsar in 1613, and that precedent stayed in the memory.",
  // ru-imperiya
  "Российская империя": "The Russian Empire",
  "Почему это важно: за двести лет страна перестраивается сверху дважды — при Петре и при Александре II. Оба раза реформы идут от власти, а не снизу, и оба раза не доводятся до конца.":
    "Why this matters: over two hundred years the country is rebuilt from above twice — under Peter and under Alexander II. Both times the reforms come from the authorities rather than from below, and both times they are left unfinished.",
  "**Пётр I** правил с конца XVII века до **1725 года** и перестроил государство целиком. Он создал **регулярную армию и флот**, заменил приказы **коллегиями**, учредил **Сенат**, ввёл **Табель о рангах**, по которой служебное положение зависело от чина, а не от происхождения, и перевёл страну на новый календарь.":
    "**Peter I** ruled from the end of the 17th century until **1725** and rebuilt the state entirely. He created a **regular army and navy**, replaced the prikazy with **colleges**, established the **Senate**, brought in the **Table of Ranks**, under which a person's standing in service depended on rank rather than birth, and moved the country to a new calendar.",
  "В **1703 году** он основал **Санкт-Петербург** и вскоре перенёс туда столицу — она останется там больше двухсот лет. Долгая **Северная война** со Швецией (1700–1721) с победой под **Полтавой** в 1709 году дала выход к Балтике, и в **1721 году** Россия была провозглашена **империей**.":
    "In **1703** he founded **St Petersburg** and soon moved the capital there — it would stay for more than two hundred years. The long **Great Northern War** with Sweden (1700–1721), with the victory at **Poltava** in 1709, gave access to the Baltic, and in **1721** Russia was proclaimed an **empire**.",
  "В каком году Россия была провозглашена империей?": "In what year was Russia proclaimed an empire?",
  "В 1703 году": "In 1703",
  "В 1709 году": "In 1709",
  "В 1721 году": "In 1721",
  "В 1762 году": "In 1762",
  "1721 год, по окончании Северной войны. 1703-й — основание Петербурга, 1709-й — Полтавская битва: три даты одного царствования.":
    "1721, at the end of the Great Northern War. 1703 is the founding of Petersburg and 1709 the battle of Poltava: three dates from one reign.",
  "Восемнадцатый век": "The eighteenth century",
  "После Петра наступила эпоха **дворцовых переворотов**: гвардия несколько раз решала, кто займёт престол. **Екатерина II** (1762–1796) расширила границы на юг и запад: в **1783 году** был присоединён **Крым**, а разделы Речи Посполитой отодвинули границу далеко на запад.":
    "After Peter came the age of **palace coups**: several times the guards decided who would take the throne. **Catherine II** (1762–1796) pushed the borders south and west: **Crimea** was annexed in **1783**, and the partitions of the Polish-Lithuanian Commonwealth moved the border far to the west.",
  "При ней же случилось крупнейшее народное восстание — **пугачёвское** (1773–1775), охватившее Урал и Поволжье. Просвещённые замыслы вроде Уложенной комиссии остались на бумаге, а крепостное право стало жёстче, чем прежде.":
    "Under her came the largest popular rising of all — **Pugachev's** (1773–1775), which swept the Urals and the Volga. Enlightened schemes such as the Legislative Commission stayed on paper, and serfdom grew harsher than before.",
  "1812 год": "The year 1812",
  "В **1812 году** армия Наполеона вошла в Россию. После **Бородинского сражения** русская армия под началом **Кутузова** оставила Москву, которая почти целиком сгорела. Отступление французов зимой обернулось катастрофой: из огромной армии вернулись немногие.":
    "In **1812** Napoleon's army entered Russia. After the **battle of Borodino** the Russian army under **Kutuzov** gave up Moscow, which burned almost entirely. The French retreat in winter turned into a catastrophe: few of that huge army came back.",
  "Война получила название **Отечественной**, а поход русской армии в Европу привёл её офицеров в Париж. Вернувшись, часть из них создала тайные общества, и в **1825 году** произошло восстание **декабристов** на Сенатской площади — первое выступление за конституцию в русской истории.":
    "The war was named the **Patriotic War**, and the Russian army's march into Europe brought its officers to Paris. On their return some of them founded secret societies, and in **1825** came the **Decembrist** rising on Senate Square — the first move for a constitution in Russian history.",
  "Что произошло в 1812 году?": "What happened in 1812?",
  "Восстание декабристов": "The Decembrist rising",
  "Отечественная война против армии Наполеона": "The Patriotic War against Napoleon's army",
  "Отмена крепостного права": "The abolition of serfdom",
  "Провозглашение империи": "The proclamation of the empire",
  "Вторжение Наполеона, Бородино, пожар Москвы и гибель Великой армии на обратном пути. Восстание декабристов — 1825 год, отмена крепостного права — 1861-й.":
    "Napoleon's invasion, Borodino, the burning of Moscow and the destruction of the Grande Armée on the way back. The Decembrist rising was in 1825, the abolition of serfdom in 1861.",
  "Великие реформы": "The Great Reforms",
  "**19 февраля 1861 года** **Александр II** подписал манифест об **отмене крепостного права**. Двадцать три миллиона человек получили личную свободу — но землю пришлось выкупать, и выкупные платежи легли на крестьян на десятилетия вперёд.":
    "On **19 February 1861** **Alexander II** signed the manifesto **abolishing serfdom**. Twenty-three million people gained personal freedom — but the land had to be bought, and the redemption payments lay on the peasantry for decades to come.",
  "Земская реформа": "The zemstvo reform",
  "1864 год: выборные органы местного самоуправления, занимавшиеся школами, больницами и дорогами.":
    "1864: elected organs of local self-government, which looked after schools, hospitals and roads.",
  "Судебная реформа": "The judicial reform",
  "1864 год: гласный суд, состязательность, адвокатура и суд присяжных.":
    "1864: open trials, adversarial procedure, a bar and trial by jury.",
  "Военная реформа": "The military reform",
  "1874 год: всеобщая воинская повинность вместо рекрутских наборов.":
    "1874: universal military service in place of recruit levies.",
  "Транссиб": "The Trans-Siberian",
  "Строительство с 1891 года: самая длинная железная дорога в мире связала Москву с Тихим океаном.":
    "Built from 1891: the longest railway in the world tied Moscow to the Pacific.",
  "Реформы не сняли напряжения. **Революция 1905 года** заставила власть издать **Манифест 17 октября**, которым были обещаны гражданские свободы и созвана **Государственная дума** — первый в русской истории выборный законодательный орган. **Столыпинская реформа** попыталась создать слой самостоятельных крестьян-собственников, но времени не хватило: в **1914 году** Россия вступила в **Первую мировую войну**.":
    "The reforms did not release the pressure. The **revolution of 1905** forced the authorities to issue the **October Manifesto**, which promised civil liberties and called a **State Duma** — the first elected legislative body in Russian history. **Stolypin's reform** tried to create a layer of independent peasant proprietors, but there was not enough time: in **1914** Russia entered the **First World War**.",
  "Тот же век дал мировую культуру: **Пушкин**, **Гоголь**, **Толстой**, **Достоевский**, **Чехов** в литературе, **Чайковский**, **Мусоргский**, **Римский-Корсаков** в музыке, **Менделеев** и **Павлов** в науке.":
    "The same century gave the world its culture: **Pushkin**, **Gogol**, **Tolstoy**, **Dostoevsky** and **Chekhov** in literature, **Tchaikovsky**, **Mussorgsky** and **Rimsky-Korsakov** in music, **Mendeleev** and **Pavlov** in science.",
  "В каком году было отменено крепостное право?": "In what year was serfdom abolished?",
  "В 1825 году": "In 1825",
  "В 1861 году": "In 1861",
  "В 1874 году": "In 1874",
  "В 1905 году": "In 1905",
  "19 февраля 1861 года, манифест Александра II. Личную свободу получили около двадцати трёх миллионов человек, но землю им пришлось выкупать.":
    "19 February 1861, by Alexander II's manifesto. About twenty-three million people gained personal freedom, but they had to buy the land.",
  "**Государственная дума** появилась в 1906 году, после революции 1905-го, и была распущена в 1917-м. Нынешняя Дума — не её продолжение: она создана Конституцией 1993 года, хотя имя взято оттуда.":
    "The **State Duma** appeared in 1906, after the revolution of 1905, and was dissolved in 1917. Today's Duma is not its continuation: it was created by the Constitution of 1993, though the name comes from there.",
  // ru-1917
  "1917 год и Гражданская война": "1917 and the Civil War",
  "Почему это важно: в 1917 году революций было две, а не одна, и между ними прошло восемь месяцев. Кто их различает, тот понимает и всё, что было дальше.":
    "Why this matters: there were two revolutions in 1917, not one, and eight months lay between them. Tell them apart and everything that came after makes sense.",
  "Февраль": "February",
  "К третьему году войны в столице не хватало хлеба, транспорт не справлялся, а доверие к власти было исчерпано. В конце **февраля 1917 года** волнения в Петрограде переросли в восстание, гарнизон перешёл на сторону улицы, и **2 марта Николай II отрёкся от престола**. Монархия, стоявшая триста четыре года, кончилась за неделю.":
    "By the third year of the war there was not enough bread in the capital, the transport system could not cope, and trust in the government was spent. At the end of **February 1917** unrest in Petrograd grew into a rising, the garrison went over to the street, and **on 2 March Nicholas II abdicated**. A monarchy of three hundred and four years ended in a week.",
  "Установилось **двоевластие**: **Временное правительство**, объявившее себя властью до Учредительного собрания, и **Советы рабочих и солдатских депутатов**, за которыми стояли гарнизон и заводы. Ни одна из сторон не решалась ни выйти из войны, ни разделить землю, а именно этого ждала страна.":
    "**Dual power** followed: the **Provisional Government**, which declared itself the authority until a Constituent Assembly could meet, and the **Soviets of workers' and soldiers' deputies**, behind which stood the garrison and the factories. Neither side would leave the war or divide the land, and that was exactly what the country was waiting for.",
  "Что произошло в феврале и марте 1917 года?": "What happened in February and March 1917?",
  "Большевики взяли власть": "The Bolsheviks took power",
  "Николай II отрёкся от престола и установилось двоевластие":
    "Nicholas II abdicated and dual power was established",
  "Был подписан Брестский мир": "The Treaty of Brest-Litovsk was signed",
  "Был образован СССР": "The USSR was formed",
  "Февральская революция закончилась отречением и появлением двух центров власти — Временного правительства и Советов. Большевики придут к власти в октябре, через восемь месяцев.":
    "The February revolution ended in the abdication and in two centres of power — the Provisional Government and the Soviets. The Bolsheviks would take power in October, eight months later.",
  "Октябрь": "October",
  "**25 октября по старому стилю** — 7 ноября по новому — вооружённые отряды заняли ключевые точки Петрограда, и **II съезд Советов** объявил о переходе власти к Советам. Первыми же актами стали **Декрет о мире** и **Декрет о земле**: именно то, чего Временное правительство не сделало.":
    "On **25 October old style** — 7 November new style — armed detachments seized the key points of Petrograd, and the **Second Congress of Soviets** announced that power had passed to the Soviets. Its very first acts were the **Decree on Peace** and the **Decree on Land**: exactly what the Provisional Government had not done.",
  "Выборы в **Учредительное собрание** состоялись, но большевики получили меньшинство. Собрание, созванное в **январе 1918 года**, было распущено после первого же заседания. В **марте 1918 года** был подписан **Брестский мир**: Россия вышла из войны ценой огромных территорий. Тогда же столица вернулась в **Москву**.":
    "Elections to a **Constituent Assembly** were held, but the Bolsheviks won a minority. The assembly, which met in **January 1918**, was dissolved after its first sitting. In **March 1918** the **Treaty of Brest-Litovsk** was signed: Russia left the war at the cost of vast territories. The capital returned to **Moscow** at the same time.",
  "Гражданская война": "The Civil War",
  "С **1918 по 1922 год** страна воевала сама с собой. Против **красных** выступили **белые** армии на юге, востоке и северо-западе, действовали крестьянские восстания и войска иностранных держав. В **июле 1918 года** в Екатеринбурге были расстреляны **Николай II и его семья**.":
    "From **1918 to 1922** the country fought itself. Against the **Reds** stood the **White** armies in the south, the east and the north-west, along with peasant risings and the troops of foreign powers. In **July 1918** **Nicholas II and his family** were shot in Yekaterinburg.",
  "Военный коммунизм": "War communism",
  "Продразвёрстка — принудительное изъятие хлеба у крестьян, запрет торговли, всеобщая трудовая повинность.":
    "Prodrazvyorstka — the forced requisition of grain from the peasants — a ban on trade, and universal labour conscription.",
  "Красный и белый террор": "Red and White terror",
  "Массовые казни велись обеими сторонами. Счёт жертв шёл на сотни тысяч.":
    "Mass executions were carried out by both sides. The victims ran into hundreds of thousands.",
  "Голод 1921–1922 годов": "The famine of 1921–1922",
  "Поволжье и юг: неурожай на разорённой войной земле. Погибли миллионы человек.":
    "The Volga region and the south: a failed harvest on land ruined by war. Millions died.",
  "Эмиграция": "Emigration",
  "Страну покинули около двух миллионов: офицеры, учёные, писатели, инженеры. Целый слой общества уехал.":
    "About two million left the country: officers, scholars, writers, engineers. A whole layer of society went.",
  "Что такое продразвёрстка?": "What was prodrazvyorstka?",
  "Распределение земли между крестьянами": "The division of land among the peasants",
  "Принудительное изъятие хлеба у крестьян в годы военного коммунизма":
    "The forced requisition of grain from the peasants in the years of war communism",
  "Система продовольственных карточек в городах": "A system of ration cards in the towns",
  "Налог, введённый Столыпиным": "A tax introduced by Stolypin",
  // ru-1917
  "Изъятие велось по разнарядке, без учёта того, что оставалось самому хозяйству. Отказ от продразвёрстки и стал первым шагом новой экономической политики.":
    "The requisitions were made to a quota, without regard for what was left to the farm itself. Abandoning prodrazvyorstka was the first step of the New Economic Policy.",
  "НЭП и образование СССР": "The NEP and the founding of the USSR",
  "К **1921 году** хозяйство было разрушено, а крестьянские восстания и мятеж в Кронштадте показали пределы прежней политики. Была объявлена **новая экономическая политика**: продразвёрстку заменили налогом, разрешили торговлю и мелкое частное предпринимательство. Через несколько лет страна вернулась к довоенному уровню производства.":
    "By **1921** the economy was in ruins, and the peasant risings and the Kronstadt mutiny showed the limits of the old policy. The **New Economic Policy** was announced: requisitioning was replaced by a tax, and trade and small private enterprise were allowed. Within a few years the country was back at pre-war levels of production.",
  "**30 декабря 1922 года** договор об образовании **Союза Советских Социалистических Республик** подписали четыре республики: **РСФСР**, **Украина**, **Белоруссия** и **Закавказская федерация**. Союз просуществует шестьдесят девять лет.":
    "On **30 December 1922** the treaty founding the **Union of Soviet Socialist Republics** was signed by four republics: the **RSFSR**, **Ukraine**, **Byelorussia** and the **Transcaucasian Federation**. The Union would last sixty-nine years.",
  "Когда был образован Советский Союз?": "When was the Soviet Union founded?",
  "7 ноября 1917 года": "7 November 1917",
  "3 марта 1918 года": "3 March 1918",
  "30 декабря 1922 года": "30 December 1922",
  "5 декабря 1936 года": "5 December 1936",
  "30 декабря 1922 года, договором четырёх республик. 1936 год — принятие новой союзной конституции, а не образование Союза.":
    "30 December 1922, by a treaty of four republics. 1936 is the adoption of a new union constitution, not the founding of the Union.",
  "**Февральская** и **Октябрьская** революции — два разных события 1917 года. Первая свергла монархию, вторая сменила пришедшее ей на смену правительство. Между ними восемь месяцев.":
    "The **February** and **October** revolutions are two different events of 1917. The first brought down the monarchy; the second replaced the government that had taken its place. Eight months lie between them.",
  // ru-sssr
  "СССР: индустриализация, коллективизация, репрессии":
    "The USSR: industrialisation, collectivisation, repression",
  "Почему об этом говорят прямо: за полтора десятилетия страна прошла промышленный рывок и одновременно — голод, лагеря и массовые казни. Это части одной истории, и разделять их значит рассказывать её неверно.":
    "Why this is said plainly: in a decade and a half the country went through an industrial leap and, at the same time, famine, camps and mass executions. They are parts of one history, and to separate them is to tell it wrongly.",
  "Курс на индустриализацию": "The turn to industrialisation",
  "После смерти Ленина в **1924 году** во внутрипартийной борьбе победил **Сталин**. Новая экономическая политика была свёрнута, и с **1928 года** страна перешла к **пятилетним планам**.":
    "After Lenin's death in **1924** **Stalin** won the struggle inside the party. The New Economic Policy was wound up, and from **1928** the country moved to **five-year plans**.",
  "**Индустриализация** шла с огромной скоростью. Были построены **Магнитогорский** и **Кузнецкий** комбинаты, **Днепрогэс**, тракторные заводы, **Турксиб**. За десятилетие страна из аграрной стала промышленной, а население городов выросло в разы.":
    "**Industrialisation** went at enormous speed. The **Magnitogorsk** and **Kuznetsk** works were built, along with the **Dnieper dam**, tractor plants and the **Turkestan–Siberia railway**. In a decade the country went from agrarian to industrial, and the urban population grew several times over.",
  "Средства на это брали внутри страны: у деревни — через закупочные цены и экспорт зерна, у населения — через низкие зарплаты и займы. Оборотной стороной рывка стало то, что описано дальше.":
    "The money came from inside the country: from the villages, through purchase prices and grain exports; from the population, through low wages and state loans. The other side of the leap is what follows.",
  "Коллективизация и голод": "Collectivisation and famine",
  "С **1929 года** началась **сплошная коллективизация**: крестьянские хозяйства объединялись в колхозы, а зажиточные крестьяне подвергались **раскулачиванию** — конфискации имущества и высылке. Сотни тысяч семей были отправлены в отдалённые районы, многие погибли в дороге и на месте.":
    "From **1929** came **wholesale collectivisation**: peasant farms were merged into collective farms, and better-off peasants were subjected to **dekulakisation** — the confiscation of their property and deportation. Hundreds of thousands of families were sent to remote regions, and many died on the way or after arriving.",
  "В **1932–1933 годах** зерновые районы охватил **голод**. Он затронул **Украину**, **Поволжье**, **Казахстан**, **Северный Кавказ** и Западную Сибирь. Число погибших исчисляется **миллионами**; точные оценки расходятся, но порядок величины не оспаривается.":
    "In **1932–1933** **famine** swept the grain-growing regions. It struck **Ukraine**, the **Volga region**, **Kazakhstan**, the **North Caucasus** and western Siberia. The dead are counted in **millions**; exact estimates differ, but the order of magnitude is not disputed.",
  "С какого года в СССР начались пятилетние планы?": "From what year did five-year plans begin in the USSR?",
  "С 1922 года": "From 1922",
  "С 1928 года": "From 1928",
  "С 1936 года": "From 1936",
  "С 1945 года": "From 1945",
  "Первая пятилетка началась в 1928 году, вместе со свёртыванием новой экономической политики. Коллективизация развернётся годом позже.":
    "The first five-year plan began in 1928, along with the winding up of the New Economic Policy. Collectivisation would follow a year later.",
  "ГУЛАГ": "The Gulag",
  "**ГУЛАГ** — Главное управление лагерей — это система **исправительно-трудовых лагерей**, через которую за годы её существования прошли **миллионы человек**. Заключённые строили каналы, добывали золото и никель, валили лес.":
    "The **Gulag** — the Main Camp Administration — was a system of **corrective labour camps** through which **millions of people** passed over the years of its existence. Prisoners built canals, mined gold and nickel, and felled timber.",
  "Беломорканал": "The White Sea Canal",
  "Построен в 1931–1933 годах силами заключённых. Смертность на стройке была крайне высокой.":
    "Built in 1931–1933 by prisoners. The death rate on the site was extremely high.",
  "Колыма": "Kolyma",
  "Золотые прииски Дальнего Востока. Название стало нарицательным обозначением самых тяжёлых лагерей.":
    "The gold fields of the Far East. The name became a byword for the harshest camps.",
  "Норильск": "Norilsk",
  "Город и комбинат за полярным кругом, построенные лагерным трудом.":
    "A town and a works above the Arctic Circle, built by camp labour.",
  "Статья Уголовного кодекса о контрреволюционных преступлениях, по которой были осуждены миллионы.":
    "The article of the Criminal Code on counter-revolutionary crimes, under which millions were convicted.",
  "Отдельная страница — **депортации народов**. В годы войны и после неё с мест проживания были насильственно выселены целые народы: поволжские немцы, крымские татары, чеченцы, ингуши, калмыки, балкарцы и другие. Многие погибли в пути или в первые годы на новом месте.":
    "A page of its own is the **deportation of peoples**. During the war and after it, whole peoples were forcibly moved from where they lived: the Volga Germans, the Crimean Tatars, the Chechens, the Ingush, the Kalmyks, the Balkars and others. Many died on the way or in their first years in the new place.",
  "Что такое ГУЛАГ?": "What was the Gulag?",
  "Орган государственного планирования": "A state planning body",
  "Система исправительно-трудовых лагерей": "A system of corrective labour camps",
  "Название первой пятилетки": "The name of the first five-year plan",
  "Крупная стройка на Дальнем Востоке": "A large construction site in the Far East",
  "Главное управление лагерей. Через его систему прошли миллионы заключённых, чей труд использовался на каналах, приисках и в лесной промышленности.":
    "The Main Camp Administration. Millions of prisoners passed through its system, and their labour was used on canals, in the gold fields and in the timber industry.",
  "Большой террор": "The Great Terror",
  "Пик репрессий пришёлся на **1937–1938 годы**. Аресты шли по разнарядкам, дела рассматривали внесудебные **«тройки»**, приговоры выносились за минуты. По массовым операциям тех двух лет было расстреляно **несколько сотен тысяч человек**, столько же и более отправлено в лагеря.":
    "The repression peaked in **1937–1938**. Arrests were made to quotas, cases were heard by extrajudicial **“troikas”**, and sentences were handed down in minutes. In the mass operations of those two years **several hundred thousand people** were shot, and as many or more were sent to the camps.",
  "Пострадали все слои: партийные работники, командиры Красной армии, инженеры, учёные, священники, крестьяне, рабочие, представители национальных меньшинств. Одним из мест массовых расстрелов под Москвой был **Бутовский полигон**.":
    "Every layer suffered: party workers, Red Army commanders, engineers, scholars, priests, peasants, workers, members of national minorities. One of the places of mass shootings near Moscow was the **Butovo firing range**.",
  "Формально в **1936 году** была принята конституция, объявленная самой демократической в мире. Расхождение между её текстом и практикой тех же лет — один из самых наглядных примеров того, почему конституция без работающих судов остаётся бумагой.":
    "Formally, a constitution was adopted in **1936** and declared the most democratic in the world. The gap between its text and the practice of those same years is one of the clearest illustrations of why a constitution without working courts stays on paper.",
  "Как об этом помнят": "How it is remembered",
  "На **XX съезде** партии в **1956 году** прозвучал доклад о культе личности, и началась **реабилитация** — пересмотр дел и восстановление доброго имени осуждённых. Она шла волнами и продолжалась десятилетиями.":
    "At the **20th Congress** of the party in **1956** a report on the cult of personality was delivered, and **rehabilitation** began — the review of cases and the restoration of the good name of those convicted. It came in waves and went on for decades.",
  "**30 октября** — **День памяти жертв политических репрессий**. В **2017 году** в Москве была открыта **«Стена скорби»** — государственный памятник жертвам. Работают музеи и мемориальные комплексы на местах бывших лагерей и полигонов.":
    "**30 October** is the **Day of Remembrance of the Victims of Political Repression**. In **2017** the **Wall of Grief** was unveiled in Moscow — a state memorial to the victims. Museums and memorial complexes work on the sites of former camps and firing ranges.",
  "Когда отмечается День памяти жертв политических репрессий?":
    "When is the Day of Remembrance of the Victims of Political Repression marked?",
  "27 января": "27 January",
  "22 июня": "22 June",
  "30 октября": "30 October",
  "30 октября. 22 июня — День памяти и скорби, связанный с началом войны, а 9 мая — День Победы: три разные памятные даты.":
    "30 October. 22 June is the Day of Remembrance and Sorrow, tied to the start of the war, and 9 May is Victory Day: three different commemorative dates.",
  "Оценки числа жертв расходятся между исследователями и продолжают уточняться по мере открытия архивов. Расхождения касаются величин, а не самого факта: массовые репрессии и голод признаны и государством, и историографией.":
    "Estimates of the number of victims differ between researchers and are still being refined as archives open. The differences concern the figures, not the fact: mass repression and famine are acknowledged both by the state and by historians.",
  // ru-voina-i-raspad
  "Война, послевоенные годы и распад СССР": "The war, the post-war years and the break-up of the USSR",
  "Почему это важно: война остаётся главным событием в народной памяти, а распад Союза — ближайшей к нам исторической границей. Между ними умещается почти полвека, которое объясняет сегодняшнюю карту.":
    "Why this matters: the war remains the central event in popular memory, and the break-up of the Union is the historical border closest to us. Almost half a century fits between them, and it explains the map we have today.",
  "22 июня 1941 года": "22 June 1941",
  "**22 июня 1941 года** Германия напала на Советский Союз. Началась **Великая Отечественная война** — так в России называют часть Второй мировой, шедшую на советско-германском фронте. Первые месяцы обернулись катастрофой: огромные потери, окружения, отступление до Москвы и Волги.":
    "On **22 June 1941** Germany attacked the Soviet Union. The **Great Patriotic War** began — the name Russia gives to the part of the Second World War fought on the Soviet-German front. The first months were a catastrophe: enormous losses, encirclements, and retreat as far as Moscow and the Volga.",
  "Блокада Ленинграда": "The siege of Leningrad",
  "С сентября 1941 по январь 1944 года, почти 900 дней. Сотни тысяч жителей погибли, большинство — от голода.":
    "From September 1941 to January 1944, almost 900 days. Hundreds of thousands of residents died, most of them of hunger.",
  "Битва за Москву": "The battle of Moscow",
  "Зимой 1941–1942 годов немецкое наступление на столицу было остановлено и отброшено.":
    "In the winter of 1941–1942 the German advance on the capital was stopped and thrown back.",
  "Сталинград": "Stalingrad",
  "С лета 1942 по февраль 1943 года. Окружение и капитуляция немецкой армии стали переломом всей войны.":
    "From the summer of 1942 to February 1943. The encirclement and surrender of the German army was the turning point of the whole war.",
  "Курская дуга": "The Kursk salient",
  "Лето 1943 года, крупнейшее танковое сражение. После него инициатива уже не возвращалась к противнику.":
    "The summer of 1943, the largest tank battle. After it the initiative never returned to the enemy.",
  "Война закончилась **9 мая 1945 года**. Потери Советского Союза оцениваются примерно в **двадцать семь миллионов** человек, большую часть которых составило мирное население. На оккупированной территории проводилось уничтожение еврейского населения — **Холокост**; одним из его самых известных мест стал **Бабий Яр** под Киевом.":
    "The war ended on **9 May 1945**. Soviet losses are put at around **twenty-seven million** people, most of them civilians. In the occupied territory the Jewish population was exterminated — the **Holocaust**; one of its best-known sites was **Babi Yar** near Kiev.",
  "Когда началась Великая Отечественная война?": "When did the Great Patriotic War begin?",
  "1 сентября 1939 года": "1 September 1939",
  "7 ноября 1941 года": "7 November 1941",
  "9 мая 1945 года": "9 May 1945",
  "22 июня 1941 года. 1 сентября 1939-го началась Вторая мировая война, а 9 мая 1945-го Великая Отечественная закончилась.":
    "22 June 1941. The Second World War began on 1 September 1939, and the Great Patriotic War ended on 9 May 1945.",
  "После войны": "After the war",
  "Страна восстанавливалась из руин: были разрушены тысячи городов и десятки тысяч сёл. В **1949 году** СССР испытал атомную бомбу, и началось противостояние двух блоков, названное **холодной войной**.":
    "The country rebuilt from ruins: thousands of towns and tens of thousands of villages had been destroyed. In **1949** the USSR tested an atomic bomb, and the confrontation of two blocs began that came to be called the **Cold War**.",
  "После смерти **Сталина в 1953 году** наступила **оттепель**: XX съезд 1956 года, массовая реабилитация, возвращение людей из лагерей, ослабление цензуры. В **1957 году** был запущен первый искусственный спутник Земли, а **12 апреля 1961 года** **Юрий Гагарин** совершил первый полёт человека в космос.":
    "After **Stalin's death in 1953** came the **Thaw**: the 20th Congress of 1956, mass rehabilitation, people returning from the camps, a loosening of censorship. In **1957** the first artificial satellite of the Earth was launched, and on **12 April 1961** **Yuri Gagarin** made the first human flight into space.",
  "**Карибский кризис 1962 года** подвёл мир к грани ядерной войны и закончился взаимными уступками. Затем последовали два десятилетия, которые позже назовут **застоем**: стабильность, рост нефтяных доходов и постепенное отставание экономики. С **1979 по 1989 год** шла война в **Афганистане**.":
    "The **Cuban missile crisis of 1962** brought the world to the edge of nuclear war and ended in concessions on both sides. Then came two decades that would later be called the **stagnation**: stability, rising oil revenues and an economy gradually falling behind. From **1979 to 1989** there was war in **Afghanistan**.",
  "Сколько дней продолжалась блокада Ленинграда?": "How long did the siege of Leningrad last?",
  "Около ста дней": "About a hundred days",
  "Около трёхсот дней": "About three hundred days",
  "Почти девятьсот дней": "Almost nine hundred days",
  "Более трёх лет": "More than three years",
  "С сентября 1941 по январь 1944 года — почти девятьсот дней. Погибли сотни тысяч жителей, подавляющее большинство от голода.":
    "From September 1941 to January 1944 — almost nine hundred days. Hundreds of thousands of residents died, the overwhelming majority of hunger.",
  "Перестройка": "Perestroika",
  "В **1985 году** к власти пришёл **Михаил Горбачёв** и объявил **перестройку** и **гласность**. Открылись архивы, вернулись запрещённые книги, началось обсуждение прошлого. В **1986 году** произошла авария на **Чернобыльской АЭС**.":
    "In **1985** **Mikhail Gorbachev** came to power and announced **perestroika** and **glasnost**. Archives opened, banned books came back, and the past began to be discussed. In **1986** came the accident at the **Chernobyl nuclear power station**.",
  "В **1989 году** прошли первые за десятилетия выборы с несколькими кандидатами, а заседания Съезда народных депутатов транслировались по телевидению. В том же году пала Берлинская стена, и социалистические режимы в Восточной Европе сменились один за другим.":
    "In **1989** the first elections in decades with more than one candidate were held, and the sittings of the Congress of People's Deputies were broadcast on television. That same year the Berlin Wall fell, and the socialist regimes of Eastern Europe were replaced one after another.",
  "1991 год": "The year 1991",
  "**12 июня 1990 года** РСФСР приняла **Декларацию о государственном суверенитете** — дата, ставшая Днём России. **12 июня 1991 года** прошли первые прямые выборы **Президента РСФСР**, на которых победил **Борис Ельцин**.":
    "On **12 June 1990** the RSFSR adopted the **Declaration of State Sovereignty** — the date that became Russia Day. On **12 June 1991** the first direct elections for **President of the RSFSR** were held, and **Boris Yeltsin** won them.",
  "В **августе 1991 года** попытка государственного переворота провалилась за три дня, и после неё союзные структуры быстро утратили влияние. **8 декабря** руководители России, Украины и Белоруссии подписали **Беловежские соглашения**, а **25 декабря 1991 года** **Советский Союз прекратил существование**.":
    "In **August 1991** an attempted coup collapsed in three days, and after it the Union's structures quickly lost their hold. On **8 December** the leaders of Russia, Ukraine and Byelorussia signed the **Belovezha Accords**, and on **25 December 1991** the **Soviet Union ceased to exist**.",
  "Дальше — тяжёлые девяностые: **либерализация цен**, приватизация, обвал производства, **конституционный кризис 1993 года** и принятая по его итогам **Конституция**, **дефолт 1998 года**. С начала двухтысячных экономика стабилизировалась, а государственные институты приобрели нынешний вид.":
    "Then came the hard nineties: the **liberalisation of prices**, privatisation, a collapse in production, the **constitutional crisis of 1993** and the **Constitution** adopted as its outcome, and the **default of 1998**. From the early 2000s the economy steadied and the institutions of the state took the shape they have now.",
  "В каком году прекратил существование Советский Союз?":
    "In what year did the Soviet Union cease to exist?",
  "В 1989 году": "In 1989",
  // ru-voina-i-raspad
  "В 1990 году": "In 1990",
  "В 1991 году": "In 1991",
  "В 1993 году": "In 1993",
  "25 декабря 1991 года, после Беловежских соглашений 8 декабря. 1993-й — год принятия действующей Конституции.":
    "25 December 1991, after the Belovezha Accords of 8 December. 1993 is the year the current Constitution was adopted.",
  "**Вторая мировая** и **Великая Отечественная** — не одно и то же по срокам. Первая шла с 1939 по 1945 год, вторая — с 22 июня 1941 по 9 мая 1945-го, на советско-германском фронте.":
    "The **Second World War** and the **Great Patriotic War** do not cover the same span. The first ran from 1939 to 1945, the second from 22 June 1941 to 9 May 1945, on the Soviet-German front.",
  // chapter
  "Территория и природа": "Territory and nature",
  // ru-geografiya
  "География и часовые пояса": "Geography and time zones",
  "Почему это важно: размеры страны меняют самые простые вещи. Когда в Калининграде утро, на Камчатке уже вечер того же дня, и расписание поездов приходится писать по одному времени на всю страну.":
    "Why this matters: the size of the country changes the simplest things. When it is morning in Kaliningrad it is already evening of the same day in Kamchatka, and railway timetables have to be written in one single time for the whole country.",
  "Самая большая страна": "The largest country",
  "Площадь России — более **семнадцати миллионов квадратных километров**, около **одной восьмой** всей земной суши. Протяжённость с запада на восток — почти **десять тысяч километров**, с севера на юг — около четырёх тысяч.":
    "Russia covers more than **seventeen million square kilometres**, about **one eighth** of all the land on Earth. From west to east it stretches almost **ten thousand kilometres**, from north to south about four thousand.",
  "Страна лежит **в двух частях света**. Условной границей между Европой и Азией считается **Уральский хребет**, и отсюда получается разрыв, который стоит запомнить: около **трёх четвертей территории** находится в Азии, а около **трёх четвертей населения** — в европейской части.":
    "The country lies **in two parts of the world**. The conventional border between Europe and Asia is the **Ural range**, and that produces a gap worth remembering: about **three quarters of the territory** is in Asia, and about **three quarters of the population** in the European part.",
  "Одиннадцать часовых поясов": "Eleven time zones",
  "От **Калининграда** до **Камчатки** и **Чукотки** страна занимает **одиннадцать часовых поясов**. Разница между Москвой и Камчаткой составляет **девять часов**: когда в столице девять утра, там уже вечер.":
    "From **Kaliningrad** to **Kamchatka** and **Chukotka** the country covers **eleven time zones**. The difference between Moscow and Kamchatka is **nine hours**: when it is nine in the morning in the capital, it is already evening there.",
  "Число поясов менялось. В **2010 году** их сократили до девяти, а в **2014-м** вернули одиннадцать. Тогда же страна перестала переводить часы: сезонного времени в России больше нет.":
    "The number of zones has changed. In **2010** it was cut to nine, and in **2014** eleven came back. At the same time the country stopped changing its clocks: there is no seasonal time in Russia any more.",
  "Московское время": "Moscow time",
  "Точка отсчёта для всей страны. Расписания железных дорог долгое время писались только по нему.":
    "The reference point for the whole country. Railway timetables were written in it alone for a long time.",
  "Калининград": "Kaliningrad",
  "Самый западный регион, и единственный, где время на час меньше московского.":
    "The westernmost region, and the only one where the time is an hour behind Moscow.",
  "Камчатка и Чукотка": "Kamchatka and Chukotka",
  "Самый восточный край: плюс девять часов к Москве. Новый год здесь встречают первыми в стране.":
    "The easternmost edge: nine hours ahead of Moscow. The New Year is seen in here first in the country.",
  "Без перевода часов": "No clock changes",
  "С 2014 года сезонного перехода нет. Разница с Европой поэтому меняется дважды в год — за счёт соседей, а не нас.":
    "Since 2014 there has been no seasonal change. The difference with Europe therefore shifts twice a year — because of the neighbours, not us.",
  "Сколько часовых поясов в России?": "How many time zones does Russia have?",
  "Семь": "Seven",
  "Пятнадцать": "Fifteen",
  "Одиннадцать. Девять было с 2010 по 2014 год, после чего прежнее число вернули. Разница между Москвой и Камчаткой — девять часов.":
    "Eleven. There were nine from 2010 to 2014, after which the earlier number came back. The difference between Moscow and Kamchatka is nine hours.",
  "Соседи": "Neighbours",
  "У России **сухопутные границы с четырнадцатью государствами** — по этому показателю она делит первое место в мире с Китаем. На западе это Норвегия, Финляндия, Эстония, Латвия, Литва, Польша и Белоруссия, на юго-западе Украина, на юге Грузия, Азербайджан и Казахстан, на юго-востоке Китай, Монголия и КНДР.":
    "Russia has **land borders with fourteen states** — on that count it shares first place in the world with China. To the west are Norway, Finland, Estonia, Latvia, Lithuania, Poland and Belarus, to the south-west Ukraine, to the south Georgia, Azerbaijan and Kazakhstan, and to the south-east China, Mongolia and North Korea.",
  "Есть и **морские соседи**: **США** — через Берингов пролив, где между островами Ратманова и Крузенштерна около четырёх километров, — и **Япония**.":
    "There are **sea neighbours** too: the **United States**, across the Bering Strait, where about four kilometres separate the Ratmanov and Kruzenshtern islands, and **Japan**.",
  "**Калининградская область** — **эксклав**: она не имеет сухопутной связи с остальной страной и окружена Польшей, Литвой и Балтийским морем.":
    "**Kaliningrad Oblast** is an **exclave**: it has no land link with the rest of the country and is surrounded by Poland, Lithuania and the Baltic Sea.",
  "По какому хребту проходит условная граница между Европой и Азией?":
    "Which range forms the conventional border between Europe and Asia?",
  "По Кавказскому": "The Caucasus",
  "По Уральскому": "The Urals",
  "По Алтайскому": "The Altai",
  "По Саянам": "The Sayans",
  "По Уралу. Отсюда и разрыв: три четверти территории в Азии, три четверти населения — в европейской части.":
    "The Urals. Hence the gap: three quarters of the territory in Asia, three quarters of the population in the European part.",
  "Крайние точки": "The extreme points",
  "Самая северная материковая точка — **мыс Челюскин** на Таймыре, самая южная — гора **Базардюзю** на Кавказе, самая западная — побережье Балтийского моря в **Калининградской области**, самая восточная — **остров Ратманова** в Беринговом проливе.":
    "The northernmost point on the mainland is **Cape Chelyuskin** on the Taymyr Peninsula, the southernmost is Mount **Bazardyuzyu** in the Caucasus, the westernmost is the Baltic coast in **Kaliningrad Oblast**, and the easternmost is **Ratmanov Island** in the Bering Strait.",
  "Население страны — около **ста сорока шести миллионов** человек, и распределено оно крайне неравномерно: густо на юго-западе и вдоль Транссиба, почти пусто на севере Сибири и Дальнего Востока.":
    "The population is about **one hundred and forty-six million**, and it is spread very unevenly: densely in the south-west and along the Trans-Siberian, almost empty in northern Siberia and the Far East.",
  "Какой регион России является эксклавом?": "Which region of Russia is an exclave?",
  "Камчатский край": "Kamchatka Krai",
  "Калининградская область": "Kaliningrad Oblast",
  "Сахалинская область": "Sakhalin Oblast",
  "Республика Крым": "The Republic of Crimea",
  "Калининградская область не имеет сухопутной связи с остальной страной. Сахалин и Камчатка отделены морем, но эксклавами не являются.":
    "Kaliningrad Oblast has no land link with the rest of the country. Sakhalin and Kamchatka are separated by sea but are not exclaves.",
  "Часовой пояс и **административная граница** не всегда совпадают: время устанавливается для каждого субъекта отдельно, и потому линии на карте часовых поясов идут не по меридианам, а по границам регионов.":
    "A time zone and an **administrative border** do not always coincide: time is set for each federal subject separately, which is why the lines on the time-zone map follow regional borders rather than meridians.",
  // ru-priroda
  "Природные зоны, реки и климат": "Natural zones, rivers and climate",
  "Почему это важно: страна такой длины пересекает почти все природные зоны Северного полушария. В один и тот же день здесь бывает минус пятьдесят и плюс двадцать пять.":
    "Why this matters: a country this long crosses almost every natural zone of the northern hemisphere. On the same day it can be minus fifty in one place and plus twenty-five in another.",
  "Зоны с севера на юг": "The zones from north to south",
  "Двигаясь с севера на юг, страна проходит **арктические пустыни**, **тундру**, **лесотундру**, **тайгу**, **смешанные и широколиственные леса**, **лесостепь**, **степь** и **полупустыни** у Каспия. Ни одна другая страна не пересекает столько зон подряд.":
    "Going from north to south, the country passes through **arctic desert**, **tundra**, **forest tundra**, **taiga**, **mixed and broadleaf forest**, **forest steppe**, **steppe** and **semi-desert** by the Caspian. No other country crosses so many zones in a row.",
  "**Тайга** — крупнейший лесной массив планеты. На Россию приходится около **пятой части всех лесов мира**, и по площади леса она занимает первое место. Другая величина того же порядка: **вечная мерзлота** лежит примерно под **двумя третями** территории, и на ней строят на сваях, чтобы тепло здания не растопило грунт.":
    "The **taiga** is the largest forest on the planet. Russia holds about **a fifth of all the world's forest** and comes first in the world for forest area. A figure of the same order: **permafrost** lies under roughly **two thirds** of the territory, and buildings are put on piles so that their heat does not thaw the ground.",
  "Какую примерно долю территории России занимает вечная мерзлота?":
    "Roughly what share of Russia's territory is permafrost?",
  "Около одной десятой": "About a tenth",
  "Около трети": "About a third",
  "Около двух третей": "About two thirds",
  "Почти всю": "Almost all of it",
  "Около двух третей. Поэтому в Норильске, Якутске и других северных городах дома ставят на сваи: иначе тепло здания растопит грунт под ним.":
    "About two thirds. That is why houses in Norilsk, Yakutsk and other northern towns are set on piles: otherwise the heat of the building would thaw the ground beneath it.",
  "Горы": "Mountains",
  "Урал": "The Urals",
  "Невысокий древний хребет, разделяющий Европу и Азию. Богат рудами, и на них выросла уральская промышленность.":
    "A low, ancient range dividing Europe from Asia. Rich in ores, and Urals industry grew on them.",
  "Кавказ": "The Caucasus",
  "Самые высокие горы страны. Эльбрус, 5642 метра, — высшая точка России и всей Европы.":
    "The highest mountains in the country. Elbrus, 5,642 metres, is the highest point in Russia and in all of Europe.",
  "Алтай и Саяны": "The Altai and the Sayans",
  "Горы юга Сибири, с ледниками, степями в долинах и одним из самых чистых воздухов в стране.":
    "The mountains of southern Siberia, with glaciers, steppe in the valleys and some of the cleanest air in the country.",
  "Камчатка": "Kamchatka",
  "Действующие вулканы, около трёх десятков. Ключевская Сопка — высочайший действующий вулкан Евразии.":
    "Active volcanoes, about thirty of them. Klyuchevskaya Sopka is the highest active volcano in Eurasia.",
  "Какая гора является высшей точкой России?": "Which mountain is the highest point in Russia?",
  "Ключевская Сопка": "Klyuchevskaya Sopka",
  "Эльбрус": "Elbrus",
  "Белуха": "Belukha",
  "Народная": "Narodnaya",
  "Эльбрус на Кавказе, 5642 метра, — высшая точка и России, и Европы. Белуха — высшая точка Алтая, Народная — Урала, Ключевская Сопка — вулкан Камчатки.":
    "Elbrus in the Caucasus, 5,642 metres, is the highest point of both Russia and Europe. Belukha is the highest point of the Altai, Narodnaya of the Urals, and Klyuchevskaya Sopka is a volcano on Kamchatka.",
  "Реки и озёра": "Rivers and lakes",
  "Крупнейшие реки текут по Сибири на север: **Обь**, **Енисей**, **Лена**. Енисей — самый полноводный. На Дальнем Востоке течёт **Амур**, по которому частично проходит граница с Китаем.":
    "The largest rivers run north across Siberia: the **Ob**, the **Yenisei** and the **Lena**. The Yenisei carries the most water. In the Far East runs the **Amur**, along part of which the border with China passes.",
  "В европейской части главная река — **Волга**: около **трёх с половиной тысяч километров**, самая длинная река Европы. Она впадает не в океан, а в **Каспийское море**, замкнутый водоём, крупнейший на планете.":
    "In the European part the main river is the **Volga**: about **three and a half thousand kilometres**, the longest river in Europe. It flows not into an ocean but into the **Caspian Sea**, an enclosed body of water and the largest on the planet.",
  "**Байкал** — **самое глубокое озеро мира**: **1642 метра**. В нём сосредоточено около **пятой части** мировых запасов поверхностной пресной воды, и он внесён в список Всемирного наследия ЮНЕСКО. **Ладожское озеро** — крупнейшее пресноводное озеро Европы.":
    "**Lake Baikal** is the **deepest lake in the world**: **1,642 metres**. It holds about **a fifth** of the world's surface fresh water and is on the UNESCO World Heritage list. **Lake Ladoga** is the largest freshwater lake in Europe.",
  "Какое озеро является самым глубоким в мире?": "Which lake is the deepest in the world?",
  "Ладожское": "Ladoga",
  "Каспийское": "The Caspian",
  "Байкал": "Baikal",
  "Онежское": "Onega",
  "Байкал, 1642 метра, и в нём около пятой части мировой поверхностной пресной воды. Каспий — крупнейший замкнутый водоём, а Ладога — крупнейшее пресное озеро Европы.":
    "Baikal, 1,642 metres, and it holds about a fifth of the world's surface fresh water. The Caspian is the largest enclosed body of water, and Ladoga the largest freshwater lake in Europe.",
  "Климат": "Climate",
  "Преобладает **умеренно континентальный** климат, в Сибири он становится **резко континентальным**: зима очень холодная, лето жаркое, разница между ними доходит до шестидесяти градусов. На Дальнем Востоке климат **муссонный**, с дождливым летом, на побережье Чёрного моря около Сочи — **субтропический**, а на севере **арктический**.":
    "The prevailing climate is **temperate continental**, and in Siberia it becomes **sharply continental**: a very cold winter, a hot summer, and up to sixty degrees between them. In the Far East the climate is **monsoonal**, with a rainy summer; on the Black Sea coast near Sochi it is **subtropical**, and in the north **arctic**.",
  "**Оймякон** и **Верхоянск** в Якутии оспаривают звание **полюса холода** Северного полушария: там фиксировали температуры около минус шестидесяти семи градусов. При этом в тот же январский день в Сочи может быть плюс десять.":
    "**Oymyakon** and **Verkhoyansk** in Yakutia compete for the title of **pole of cold** of the northern hemisphere: temperatures of about minus sixty-seven degrees have been recorded there. On the same January day it can be plus ten in Sochi.",
  "Что охраняют": "What is protected",
  "В стране работают **заповедники**, **национальные парки** и заказники; первый заповедник, Баргузинский на Байкале, был создан ещё в 1917 году. Редкие виды заносятся в **Красную книгу**. Среди самых известных — **амурский тигр**, **белый медведь**, **зубр** и **дальневосточный леопард**.":
    "The country has **nature reserves**, **national parks** and sanctuaries; the first reserve, Barguzinsky on Baikal, was created back in 1917. Rare species are entered in the **Red Book**. Among the best known are the **Amur tiger**, the **polar bear**, the **wisent** and the **Amur leopard**.",
  "**Каспийское море** называется морем, но по сути это **озеро** — крупнейший в мире замкнутый водоём, не связанный с океаном. Его правовой статус десятилетиями обсуждался прикаспийскими государствами именно из-за этой двойственности.":
    "The **Caspian Sea** is called a sea but is really a **lake** — the largest enclosed body of water in the world, with no link to the ocean. Its legal status was argued over for decades by the Caspian states for exactly that reason.",
  // ru-subekty
  "Федеративное устройство: субъекты": "The federal structure: the subjects",
  "Почему это важно: Россия — федерация, и её части называются по-разному не случайно. У республики есть то, чего нет у области, и понимание этой разницы объясняет карту.":
    "Why this matters: Russia is a federation, and its parts are not called different things by accident. A republic has something an oblast does not, and understanding that difference explains the map.",
  "Шесть видов субъектов": "Six kinds of federal subject",
  "**Статья 65** Конституции содержит перечень субъектов Федерации; на сегодня их **восемьдесят девять**. Все они, по **статье 5**, **равноправны** в отношениях с федеральными органами власти, но исторические названия и объём собственных институтов различаются.":
    "**Article 65** of the Constitution holds the list of federal subjects; today there are **eighty-nine**. Under **article 5** they are all **equal** in their relations with federal bodies of power, but their historical names and the extent of their own institutions differ.",
  // ru-subekty
  "Республика": "A republic",
  "Имеет собственную конституцию и вправе устанавливать свои государственные языки наряду с русским.":
    "It has a constitution of its own and may establish its own state languages alongside Russian.",
  "Край и область": "Krai and oblast",
  "Самые многочисленные виды. Имеют устав, а не конституцию, и одну государственную языковую норму — русскую.":
    "The most numerous kinds. They have a charter rather than a constitution, and one state language norm — Russian.",
  "Город федерального значения": "A city of federal significance",
  "Москва, Санкт-Петербург и Севастополь: города, которые сами являются субъектами Федерации.":
    "Moscow, St Petersburg and Sevastopol: cities that are themselves federal subjects.",
  "Автономная область и автономные округа": "Autonomous oblast and autonomous okrugs",
  "Автономная область одна — Еврейская. Автономные округа выделяются по территориям коренных народов Севера.":
    "There is one autonomous oblast, the Jewish one. Autonomous okrugs were marked out on the territories of the indigenous peoples of the North.",
  "Различие между **конституцией** республики и **уставом** края или области — не только в названии документа. Республики появились там, где исторически жил один из народов страны, и право устанавливать **государственные языки** есть именно у них: татарский в Татарстане, якутский в Якутии, башкирский в Башкортостане.":
    "The difference between a republic's **constitution** and a krai's or oblast's **charter** is not only in the name of the document. Republics arose where one of the country's peoples historically lived, and the right to establish **state languages** belongs to them alone: Tatar in Tatarstan, Yakut in Yakutia, Bashkir in Bashkortostan.",
  "Что есть у республики, чего нет у области?": "What does a republic have that an oblast does not?",
  "Собственная конституция и право устанавливать государственные языки":
    "A constitution of its own and the right to establish state languages",
  "Право издавать законы": "The right to pass laws",
  "Собственный бюджет": "A budget of its own",
  "Представительство в Совете Федерации": "Representation in the Federation Council",
  "Законы, бюджет и по два сенатора есть у каждого субъекта. Различают республику именно конституция вместо устава и право на свои государственные языки.":
    "Laws, a budget and two senators belong to every federal subject. What sets a republic apart is precisely the constitution in place of a charter and the right to its own state languages.",
  "Кто что решает": "Who decides what",
  "**Статья 71** перечисляет **исключительное ведение Федерации**: оборона и безопасность, внешняя политика, гражданство, денежная эмиссия, уголовное и гражданское законодательство, федеральный бюджет. Здесь субъекты не законодательствуют вовсе.":
    "**Article 71** lists the **exclusive competence of the Federation**: defence and security, foreign policy, citizenship, the issue of money, criminal and civil law, the federal budget. Here the subjects do not legislate at all.",
  "**Статья 72** называет **совместное ведение**: образование, здравоохранение, культура, природопользование, административное и трудовое законодательство. Здесь Федерация задаёт общие рамки, а субъект принимает свои законы внутри них.":
    "**Article 72** names the **joint competence**: education, health care, culture, the use of natural resources, administrative and labour law. Here the Federation sets the general frame and the subject passes its own laws inside it.",
  "А **статья 73** говорит коротко: **вне этих двух списков** субъекты обладают **всей полнотой государственной власти**. Логика та же, что в испанском или немецком федерализме: перечисляется то, что забирает центр, остальное остаётся регионам.":
    "And **article 73** says it briefly: **outside these two lists** the subjects hold the **full extent of state power**. The logic is the same as in Spanish or German federalism: what the centre takes is listed, and the rest stays with the regions.",
  "Как устроен субъект": "How a subject is organised",
  "У каждого есть **законодательное собрание** — оно может называться думой, советом, хуралом, курултаем, — **высшее должностное лицо**, чаще всего **губернатор** или **глава республики**, и своё **правительство**. Есть и свой **верховный, краевой или областной суд**, входящий в общую федеральную судебную систему.":
    "Each has a **legislative assembly** — it may be called a duma, a council, a khural or a kurultai — a **highest official**, most often a **governor** or a **head of the republic**, and a **government** of its own. It also has its own **supreme, krai or oblast court**, which is part of the single federal court system.",
  "Отдельно стоит запомнить: **федеральные округа** — их восемь, и они появились указом Президента в **2000 году** — **не являются субъектами** Федерации и не упомянуты в Конституции. Это способ организации федеральных органов на местах, а не уровень власти.":
    "One thing to remember separately: the **federal districts** — there are eight, and they were created by presidential decree in **2000** — **are not federal subjects** and are not mentioned in the Constitution. They are a way of organising federal bodies on the ground, not a level of government.",
  "Являются ли федеральные округа субъектами Федерации?": "Are the federal districts federal subjects?",
  "Да, это самый крупный вид субъекта": "Yes, they are the largest kind of subject",
  "Нет: они не упомянуты в Конституции и служат для организации федеральных органов":
    "No: they are not mentioned in the Constitution and serve to organise federal bodies",
  "Да, с 2000 года": "Yes, since 2000",
  "Только Центральный федеральный округ": "Only the Central Federal District",
  "Округа введены указом Президента в 2000 году и в Конституции их нет. Субъекты перечислены в статье 65, и федеральных округов в этом перечне не значится.":
    "The districts were introduced by presidential decree in 2000 and do not appear in the Constitution. The subjects are listed in article 65, and no federal district is in that list.",
  "Карта не всегда была такой": "The map has not always looked like this",
  "Число субъектов менялось. В **2000-е годы** прошло **укрупнение регионов**: несколько автономных округов объединились с краями и областями, внутри которых находились, и число субъектов сократилось. Каждое такое объединение проходило через **референдум** в обоих регионах.":
    "The number of subjects has changed. In the **2000s** came a **merging of regions**: several autonomous okrugs joined the krais and oblasts they lay inside, and the number of subjects fell. Every such merger went through a **referendum** in both regions.",
  "Сколько видов субъектов Федерации предусматривает Конституция?":
    "How many kinds of federal subject does the Constitution provide for?",
  "Три": "Three",
  "Четыре": "Four",
  "Шесть": "Six",
  "Восемь": "Eight",
  "Республика, край, область, город федерального значения, автономная область и автономный округ. Восемь — это число федеральных округов, которые субъектами не являются.":
    "Republic, krai, oblast, city of federal significance, autonomous oblast and autonomous okrug. Eight is the number of federal districts, which are not subjects.",
  "**Область** и **автономный округ** — разные виды субъектов, и путать их не стоит. Автономные округа выделялись по территориям коренных народов Севера, и некоторые из них до сих пор входят в состав области, оставаясь при этом самостоятельными субъектами.":
    "**Oblast** and **autonomous okrug** are different kinds of subject and should not be confused. Autonomous okrugs were marked out on the territories of the indigenous peoples of the North, and some of them still lie within an oblast while remaining separate subjects.",
  // ru-goroda
  "Города": "Cities",
  "Почему это важно: почти все крупные города страны стоят в европейской части или вдоль одной железной дороги. Карта городов — это карта того, где людям было удобно жить и работать.":
    "Why this matters: almost every large city in the country stands in the European part or along one railway. The map of the cities is a map of where it was convenient for people to live and work.",
  "Две столицы": "Two capitals",
  "**Москва** — столица и крупнейший город страны: около **тринадцати миллионов** жителей, самый населённый город Европы. Здесь **Кремль** и **Красная площадь**, внесённые в список ЮНЕСКО, и **метрополитен**, открытый в **1935 году** и знаменитый оформлением станций.":
    "**Moscow** is the capital and the largest city in the country: about **thirteen million** people, the most populous city in Europe. Here are the **Kremlin** and **Red Square**, both on the UNESCO list, and the **metro**, opened in **1935** and famous for the design of its stations.",
  "**Санкт-Петербург** — второй по величине, около **пяти с половиной миллионов**. Он был **столицей с 1712 по 1918 год**, и планировка центра сохранилась с тех времён. **Эрмитаж** — один из крупнейших музеев мира; летом сюда едут за **белыми ночами** и разводными мостами.":
    "**St Petersburg** is the second largest, about **five and a half million**. It was the **capital from 1712 to 1918**, and the layout of the centre survives from those years. The **Hermitage** is one of the largest museums in the world; in summer people come for the **white nights** and the opening bridges.",
  "В какие годы столицей был Санкт-Петербург?": "In which years was St Petersburg the capital?",
  "С 1703 по 1917 год": "From 1703 to 1917",
  "С 1712 по 1918 год": "From 1712 to 1918",
  "С 1721 по 1905 год": "From 1721 to 1905",
  "С 1700 по 1800 год": "From 1700 to 1800",
  "Город основан в 1703 году, столицей стал в 1712-м, а в 1918-м столица вернулась в Москву из-за близости фронта.":
    "The city was founded in 1703 and became the capital in 1712; in 1918 the capital returned to Moscow because the front was close.",
  "Города-миллионники": "Cities of over a million",
  "Кроме двух столиц в стране около **шестнадцати** городов с населением свыше миллиона. Крупнейшие из них — **Новосибирск**, **Екатеринбург**, **Казань**, **Нижний Новгород**, **Челябинск**, **Самара**, **Уфа**, **Ростов-на-Дону**, **Омск**, **Красноярск**, **Воронеж**, **Пермь**, **Волгоград** и **Краснодар**.":
    "Besides the two capitals the country has about **sixteen** cities with more than a million people. The largest are **Novosibirsk**, **Yekaterinburg**, **Kazan**, **Nizhny Novgorod**, **Chelyabinsk**, **Samara**, **Ufa**, **Rostov-on-Don**, **Omsk**, **Krasnoyarsk**, **Voronezh**, **Perm**, **Volgograd** and **Krasnodar**.",
  "Новосибирск": "Novosibirsk",
  "Третий по населению город страны, выросший вокруг моста Транссиба через Обь. Рядом Академгородок — научный центр.":
    "The third largest city in the country, grown up around the Trans-Siberian bridge over the Ob. Akademgorodok, a centre of science, lies next to it.",
  "Екатеринбург": "Yekaterinburg",
  "Столица Урала и промышленный центр, стоящий почти на границе Европы и Азии.":
    "The capital of the Urals and an industrial centre, standing almost on the border of Europe and Asia.",
  "Казань": "Kazan",
  "Столица Татарстана, где кремль с мечетью и православным собором внутри одной стены внесён в список ЮНЕСКО.":
    "The capital of Tatarstan, where a kremlin holding a mosque and an Orthodox cathedral inside one wall is on the UNESCO list.",
  "Владивосток": "Vladivostok",
  "Конечная точка Транссиба и главный порт на Тихом океане, в семи часах от Москвы по времени.":
    "The end of the Trans-Siberian and the main port on the Pacific, seven hours ahead of Moscow.",
  "Золотое кольцо": "The Golden Ring",
  "**Золотое кольцо** — маршрут по древним городам северо-востока от Москвы, сложившийся как туристический в 1960-е годы. В него входят **Владимир**, **Суздаль**, **Ярославль**, **Кострома**, **Ростов Великий**, **Переславль-Залесский** и **Сергиев Посад**. Это те самые земли, из которых выросло Московское государство, и белокаменные соборы XII века стоят там до сих пор.":
    "The **Golden Ring** is a route through the ancient towns north-east of Moscow, put together as a tourist trail in the 1960s. It takes in **Vladimir**, **Suzdal**, **Yaroslavl**, **Kostroma**, **Rostov Veliky**, **Pereslavl-Zalessky** and **Sergiyev Posad**. These are the very lands the Muscovite state grew out of, and the white-stone cathedrals of the 12th century still stand there.",
  "Что такое Золотое кольцо?": "What is the Golden Ring?",
  "Кольцевая автодорога вокруг Москвы": "The ring road around Moscow",
  "Маршрут по древним городам северо-востока от Москвы":
    "A route through the ancient towns north-east of Moscow",
  "Название московского метро": "The name of the Moscow metro",
  "Группа городов-миллионников": "A group of cities of over a million",
  "Владимир, Суздаль, Ярославль, Кострома, Ростов Великий, Переславль-Залесский и Сергиев Посад. Маршрут сложился в 1960-е годы, а сами города — XII века и старше.":
    "Vladimir, Suzdal, Yaroslavl, Kostroma, Rostov Veliky, Pereslavl-Zalessky and Sergiyev Posad. The route was put together in the 1960s, but the towns themselves are of the 12th century and older.",
  "**Транссибирская магистраль** — самая длинная железная дорога в мире. От Москвы до **Владивостока** по ней **9288 километров**, и поезд идёт около **шести суток**, пересекая семь часовых поясов.":
    "The **Trans-Siberian Railway** is the longest railway in the world. From Moscow to **Vladivostok** it runs **9,288 kilometres**, and the train takes about **six days**, crossing seven time zones.",
  "Дорога объясняет карту расселения Сибири: почти все крупные сибирские города — Омск, Новосибирск, Красноярск, Иркутск, Хабаровск — стоят на ней или рядом. К северу от магистрали население редеет очень быстро.":
    "The railway explains the settlement map of Siberia: almost every large Siberian city — Omsk, Novosibirsk, Krasnoyarsk, Irkutsk, Khabarovsk — stands on it or beside it. North of the line the population thins out very fast.",
  "Особые города": "Special cities",
  "**Города-герои** — звание, присвоенное за оборону в годы войны. В нынешних границах России это **Волгоград**, **Санкт-Петербург**, **Москва**, **Мурманск**, **Смоленск**, **Тула** и **Новороссийск**. Позже появилось звание **города воинской славы**, которое получили несколько десятков городов.":
    "**Hero City** is a title awarded for the defence put up during the war. Within Russia's present borders they are **Volgograd**, **St Petersburg**, **Moscow**, **Murmansk**, **Smolensk**, **Tula** and **Novorossiysk**. The title of **City of Military Glory** came later and has gone to several dozen towns.",
  "Есть и города особого назначения: **наукограды** вроде Дубны и Королёва, построенные вокруг институтов, и **закрытые административно-территориальные образования** — города при предприятиях атомной и оборонной промышленности, въезд в которые ограничен.":
    "There are cities with a special purpose too: **science towns** such as Dubna and Korolyov, built around institutes, and **closed administrative-territorial formations** — towns attached to nuclear and defence plants, where entry is restricted.",
  "Сколько примерно идёт поезд от Москвы до Владивостока?":
    "About how long does the train from Moscow to Vladivostok take?",
  "Двое суток": "Two days",
  "Около шести суток": "About six days",
  "Около двух недель": "About two weeks",
  "Меньше суток": "Less than a day",
  "9288 километров и семь часовых поясов. Транссиб — самая длинная железная дорога в мире, и почти все крупные сибирские города стоят на ней.":
    "9,288 kilometres and seven time zones. The Trans-Siberian is the longest railway in the world, and almost every large Siberian city stands on it.",
  "**Наукоград** и **закрытый город** — не одно и то же. В наукоград можно приехать свободно; в ЗАТО въезд ограничен, и на картах советского времени таких городов попросту не было.":
    "A **science town** and a **closed town** are not the same thing. You can travel to a science town freely; entry to a closed one is restricted, and on Soviet-era maps such towns simply did not exist.",
  // chapter
  "Народы, языки и культура": "Peoples, languages and culture",
  // ru-narody
  "Народы": "Peoples",
  "Почему это важно: Конституция начинается не со слова «государство» и не со слова «нация», а со слов «многонациональный народ». Из этого выражения выведено многое в устройстве страны — от названий республик до права молчать о своём происхождении.":
    "Why this matters: the Constitution opens not with the word “state” or the word “nation” but with the words “multi-ethnic people”. A great deal in the way the country is built follows from that phrase — from the names of the republics to the right to say nothing about your origins.",
  "Что говорит преамбула": "What the preamble says",
  "Основной закон открывается словами: **«Мы, многонациональный народ Российской Федерации…»**. Носитель суверенитета в статье 3 назван так же. Это не украшение текста: страна не описывает себя как государство одного народа, и на этом построена вся её федеративная часть.":
    "The basic law opens with the words: **“We, the multi-ethnic people of the Russian Federation…”**. The bearer of sovereignty in article 3 is named the same way. This is not decoration: the country does not describe itself as the state of a single people, and its whole federal part is built on that.",
  "**Перепись 2021 года** насчитала более **190 народов**. Точное число всякий раз спорно, потому что перепись записывает то, что человек сказал о себе сам: некоторые группы одни считают отдельным народом, другие — частью соседнего. Около **шестнадцати миллионов** человек национальность не указали вовсе — и имели на это полное право.":
    "The **census of 2021** counted more than **190 peoples**. The exact number is open to argument every time, because a census records what a person says about themselves: some groups are counted by one side as a separate people and by another as part of a neighbouring one. About **sixteen million** people gave no ethnicity at all — and were fully entitled not to.",
  "Кого сколько": "Who there are and how many",
  "**Русские** составляют около **80 %** населения — примерно **105 миллионов** человек. Следующие по численности, по данным той же переписи, — **татары**, **чеченцы**, **башкиры**, **чуваши**, **аварцы** и **армяне**; у первых из них больше миллиона человек, дальше счёт идёт на сотни тысяч.":
    "**Russians** make up about **80 %** of the population — roughly **105 million** people. Next by number, according to the same census, are the **Tatars**, **Chechens**, **Bashkirs**, **Chuvash**, **Avars** and **Armenians**; the first of these number more than a million, and after that the count runs in hundreds of thousands.",
  "География распределена неровно. В большинстве регионов преобладают русские; в республиках Северного Кавказа, в Татарстане, Чувашии, Якутии картина другая. Именно поэтому национальный состав в России — вопрос не общей цифры, а конкретного места.":
    "The geography is uneven. In most regions Russians predominate; in the republics of the North Caucasus, in Tatarstan, Chuvashia and Yakutia the picture is different. That is exactly why the ethnic make-up of Russia is a question about a particular place, not about a single overall figure.",
  "Как Конституция называет носителя суверенитета?":
    "What does the Constitution call the bearer of sovereignty?",
  "Русская нация": "The Russian nation",
  "Многонациональный народ Российской Федерации": "The multi-ethnic people of the Russian Federation",
  "Граждане и постоянные жители": "Citizens and permanent residents",
  "Совокупность субъектов Федерации": "The totality of the federal subjects",
  // ru-narody
  "Этими словами открывается преамбула, и они же стоят в статье 3. Федеративное устройство страны выведено из них.":
    "Those words open the preamble, and they appear again in article 3. The country's federal structure follows from them.",
  "Титульный народ — не всегда большинство": "The titular people is not always the majority",
  "Двадцать четыре республики носят имена народов, но имя республики говорит об истории, а не о нынешней арифметике. В **Карелии** карелов — небольшая доля населения. В **Башкортостане** башкиры составляют около четверти. А в **Чечне**, **Ингушетии**, **Дагестане** и **Туве** титульные народы — уверенное большинство.":
    "Twenty-four republics bear the names of peoples, but a republic's name speaks of history, not of present-day arithmetic. In **Karelia** the Karelians are a small share of the population. In **Bashkortostan** the Bashkirs make up about a quarter. But in **Chechnya**, **Ingushetia**, **Dagestan** and **Tuva** the titular peoples are a solid majority.",
  "Республика поэтому не «принадлежит» своему народу. Права в ней — у всех жителей одинаково, а особый статус касается языка и культуры, а не гражданства и не собственности.":
    "A republic therefore does not “belong” to its people. Rights inside it are the same for every resident, and the special status concerns language and culture, not citizenship or property.",
  "Коренные малочисленные народы": "Indigenous small-numbered peoples",
  "Отдельная правовая категория. **Статья 69** Конституции гарантирует права **коренных малочисленных народов**; кто именно ими считается, определяет **единый перечень**, утверждённый Правительством, — в нём **сорок семь** народов.":
    "A legal category of its own. **Article 69** of the Constitution guarantees the rights of the **indigenous small-numbered peoples**; exactly who counts as one is decided by a **single list** approved by the Government — it holds **forty-seven** peoples.",
  "Условия попадания в перечень: народ живёт на землях предков, ведёт **традиционный образ жизни и хозяйство**, осознаёт себя самостоятельной общностью — и насчитывает **менее пятидесяти тысяч** человек. Некоторые из них — несколько сотен человек, а один-два измеряются десятками.":
    "The conditions for being on the list: the people lives on ancestral lands, keeps a **traditional way of life and economy**, sees itself as a distinct community — and numbers **fewer than fifty thousand**. Some of them number a few hundred, and one or two are counted in dozens.",
  "Север и Сибирь": "The North and Siberia",
  "Ненцы, ханты, манси, эвенки, эвены, чукчи, коряки, нанайцы. Оленеводство, рыболовство и охота — не хобби, а основа хозяйства.":
    "Nenets, Khanty, Mansi, Evenks, Evens, Chukchi, Koryaks, Nanai. Reindeer herding, fishing and hunting are not hobbies but the basis of the economy.",
  "Дальний Восток": "The Far East",
  "Нивхи, удэгейцы, ительмены, алеуты. Многие живут в нескольких сёлах, и язык держится там же, где промысел.":
    "Nivkh, Udege, Itelmens, Aleuts. Many live in a handful of villages, and the language holds on where the traditional livelihood does.",
  "Европейская часть": "The European part",
  "Вепсы, саамы, ижорцы, водь. Народы старые, но малочисленные — и потому в том же перечне.":
    "Veps, Sami, Izhorians, Votes. Old peoples, but small in number — and so on the same list.",
  "Абазины, шапсуги. Небольшие народы Северного Кавказа тоже входят в перечень, хотя их соседи в него не входят.":
    "Abazins, Shapsugs. Small peoples of the North Caucasus are on the list too, although their neighbours are not.",
  "Что даёт статус: право на **территории традиционного природопользования**, льготы по охоте и рыболовству для собственных нужд, досрочную пенсию, освобождение от призыва при занятии традиционным промыслом. Это не привилегия по происхождению, а компенсация за то, что современное хозяйство землю их промысла сокращает.":
    "What the status gives: a right to **territories of traditional resource use**, concessions on hunting and fishing for their own needs, an early pension, and exemption from conscription for those following a traditional livelihood. It is not a privilege of descent but compensation for the fact that a modern economy shrinks the land they live from.",
  "Какой признак обязателен для коренного малочисленного народа?":
    "Which feature is required of an indigenous small-numbered people?",
  "Собственная республика в составе Федерации": "A republic of its own within the Federation",
  "Численность менее пятидесяти тысяч человек и традиционный образ жизни":
    "A population of fewer than fifty thousand and a traditional way of life",
  "Отдельное гражданство": "A separate citizenship",
  "Свой государственный язык": "A state language of its own",
  "Перечень утверждает Правительство. Кроме численности учитываются жизнь на землях предков, традиционное хозяйство и самосознание общности.":
    "The list is approved by the Government. Besides numbers it takes account of life on ancestral lands, a traditional economy and a sense of being a distinct community.",
  "Национальность — дело самого человека": "Ethnicity is the person's own business",
  "**Статья 26** формулирует это прямо: каждый вправе определять и указывать свою национальную принадлежность — и **никто не может быть принуждён** к её определению и указанию. Та же статья даёт право пользоваться родным языком и свободно выбирать язык общения, воспитания, обучения и творчества.":
    "**Article 26** puts it plainly: everyone has the right to determine and state their ethnicity — and **no one may be forced** to determine or state it. The same article gives the right to use one's native language and to choose freely the language of communication, upbringing, education and creative work.",
  "У этой нормы есть предыстория. В советских паспортах была графа «национальность», записанная по родителям; в паспорте нынешнего образца её нет. Перепись спрашивает — но ответ добровольный, и шестнадцать миллионов человек им и не воспользовались.":
    "The provision has a history behind it. Soviet passports carried a line for “nationality”, filled in from the parents; the passport in use today has none. The census asks — but the answer is voluntary, and sixteen million people did not give one.",
  "Может ли человека обязать указать свою национальность?": "Can a person be made to state their ethnicity?",
  "Да, при получении паспорта": "Yes, when getting a passport",
  "Нет, статья 26 прямо это запрещает": "No, article 26 prohibits it outright",
  "Да, если он живёт в республике": "Yes, if they live in a republic",
  "Да, во время переписи населения": "Yes, during the census",
  "Каждый вправе определять и указывать свою национальную принадлежность — и никто не может быть к этому принуждён. В нынешнем паспорте такой графы нет.":
    "Everyone has the right to determine and state their ethnicity — and no one may be forced to. The passport in use today has no such line.",
  "Не путайте **гражданство** и **национальность**. Гражданство в России одно, оно записано в паспорте и одинаково для всех. Национальность — самоопределение человека, нигде не удостоверяется и ни на какие права не влияет.":
    "Do not confuse **citizenship** with **ethnicity**. There is one citizenship in Russia, it is written in the passport and it is the same for everyone. Ethnicity is a person's self-definition, it is certified nowhere and it affects no rights.",
  // ru-yazyki-religii
  "Языки и религии": "Languages and religions",
  "Почему это важно: русский язык связывает страну целиком, но он не единственный, у которого есть правовой статус. А в вопросах веры государство держится в стороне намеренно — и это записано в Конституции отдельной статьёй.":
    "Why this matters: Russian binds the whole country together, but it is not the only language with a legal status. And in matters of faith the state deliberately keeps its distance — which is written into the Constitution in an article of its own.",
  "Государственный язык": "The state language",
  "**Статья 68**: государственным языком на всей территории страны является **русский**. На нём ведутся суд, делопроизводство, официальные документы и школьное обучение по государственному стандарту.":
    "**Article 68**: the state language across the whole country is **Russian**. Court proceedings, official paperwork, official documents and school teaching to the state standard are conducted in it.",
  "**Республики вправе устанавливать свои государственные языки** — они употребляются в органах власти республики наравне с русским. В республиках такой статус получили несколько десятков языков: татарский, башкирский, чувашский, якутский, бурятский, осетинский, чеченский и другие. В Дагестане государственными объявлены языки всех народов республики сразу — их больше десятка.":
    "**Republics may establish state languages of their own** — they are used in the republic's organs of power on an equal footing with Russian. Several dozen languages have that status in the republics: Tatar, Bashkir, Chuvash, Yakut, Buryat, Ossetian, Chechen and others. In Dagestan the languages of all the republic's peoples were declared state languages at once — more than a dozen of them.",
  "Та же статья гарантирует всем народам страны **право сохранять родной язык** и создавать условия для его изучения. Всего языков народов России около **ста пятидесяти**, и часть из них ЮНЕСКО относит к исчезающим.":
    "The same article guarantees all the country's peoples the **right to keep their native language** and to create conditions for learning it. There are about **a hundred and fifty** languages of the peoples of Russia in all, and UNESCO classes some of them as endangered.",
  "Могут ли республики устанавливать собственные государственные языки?":
    "May republics establish state languages of their own?",
  "Нет, государственный язык только один": "No, there is only one state language",
  "Да, они употребляются в органах республики наравне с русским":
    "Yes, and they are used in the republic's organs on an equal footing with Russian",
  "Да, и русский язык там перестаёт быть государственным":
    "Yes, and Russian stops being a state language there",
  "Только с разрешения Государственной Думы на каждый случай":
    "Only with the State Duma's permission in each case",
  "Статья 68. Русский остаётся государственным на всей территории; язык республики добавляется к нему, а не заменяет его.":
    "Article 68. Russian remains the state language across the whole territory; a republic's language is added to it rather than replacing it.",
  "Кириллица по закону": "Cyrillic by law",
  "Федеральный закон **о языках народов Российской Федерации** требует, чтобы алфавиты государственного языка страны и государственных языков республик строились **на графической основе кириллицы**. Иная основа может быть установлена только федеральным законом.":
    "The federal law **on the languages of the peoples of the Russian Federation** requires the alphabets of the country's state language and of the state languages of the republics to be built **on the graphic basis of Cyrillic**. Another basis may be established only by federal law.",
  "Норма появилась после того, как Татарстан в конце 1990-х решил перевести татарскую письменность на латиницу. Конституционный Суд в **2004 году** признал требование единой графической основы соответствующим Конституции: письменность государственных языков — вопрос общегосударственный, а не только республиканский.":
    "The rule appeared after Tatarstan decided in the late 1990s to move Tatar writing to the Latin alphabet. In **2004** the Constitutional Court found the requirement of a single graphic basis to be in keeping with the Constitution: the writing system of state languages is a matter for the whole country, not for a republic alone.",
  "У кириллицы своя история: её принесли в славянские земли **Кирилл и Мефодий** в IX веке, а нынешний облик букв задала **гражданская азбука Петра I** в 1708 году. **24 мая** отмечается День славянской письменности и культуры.":
    "Cyrillic has a history of its own: it was brought to the Slavic lands by **Cyril and Methodius** in the 9th century, and the present shape of the letters was set by **Peter I's civil script** in 1708. **24 May** is the Day of Slavic Writing and Culture.",
  "На какой графической основе должны строиться алфавиты государственных языков республик?":
    "On what graphic basis must the alphabets of the republics' state languages be built?",
  "На основе кириллицы": "On Cyrillic",
  "На основе латиницы": "On the Latin alphabet",
  "Республика выбирает основу сама": "The republic chooses the basis itself",
  "На основе исторической письменности народа": "On the people's historical writing system",
  "Так требует федеральный закон о языках; Конституционный Суд подтвердил это в 2004 году. Иную основу может установить только федеральный закон.":
    "That is what the federal law on languages requires, and the Constitutional Court confirmed it in 2004. Another basis can be set only by federal law.",
  "Светское государство": "A secular state",
  "**Статья 14**: Российская Федерация — **светское государство**. Никакая религия не может устанавливаться в качестве государственной или обязательной. Религиозные объединения **отделены от государства и равны перед законом**.":
    "**Article 14**: the Russian Federation is a **secular state**. No religion may be established as a state or a compulsory one. Religious associations are **separate from the state and equal before the law**.",
  "**Статья 28** даёт каждому свободу совести и вероисповедания: право исповедовать любую религию или **не исповедовать никакой**, свободно выбирать и менять убеждения и действовать в согласии с ними.":
    "**Article 28** gives everyone freedom of conscience and religion: the right to profess any religion or **none**, to choose and change convictions freely and to act in accordance with them.",
  "Практические следствия простые: в государственной школе нет обязательного богослужения, запись о вере нигде не ведётся, а религиозный праздник становится нерабочим днём только через обычный закон, как любой другой.":
    "The practical consequences are simple: there is no compulsory worship in a state school, no record of belief is kept anywhere, and a religious festival becomes a non-working day only through an ordinary law, like any other.",
  "Традиционные религии": "Traditional religions",
  "Закон **о свободе совести и о религиозных объединениях 1997 года** в преамбуле признаёт особую роль **православия** в истории страны и выражает уважение к **христианству**, **исламу**, **буддизму**, **иудаизму** и другим религиям, составляющим неотъемлемую часть исторического наследия народов России. Преамбула — не установление государственной религии: сама статья 14 стоит выше.":
    "The preamble of the **1997 law on freedom of conscience and religious associations** acknowledges the particular role of **Orthodoxy** in the country's history and expresses respect for **Christianity**, **Islam**, **Buddhism**, **Judaism** and other religions that form an inseparable part of the historical heritage of the peoples of Russia. A preamble does not establish a state religion: article 14 itself stands above it.",
  "Православие": "Orthodoxy",
  "Крупнейшая конфессия. Русская православная церковь ведёт счёт от крещения 988 года; патриаршество восстановлено в 1917 году.":
    "The largest confession. The Russian Orthodox Church counts from the baptism of 988; the patriarchate was restored in 1917.",
  "Ислам": "Islam",
  "Вторая по числу верующих. Распространён на Северном Кавказе, в Татарстане и Башкортостане; духовные управления действуют в нескольких центрах.":
    "Second by number of believers. Widespread in the North Caucasus, in Tatarstan and Bashkortostan; spiritual boards operate in several centres.",
  "Буддизм": "Buddhism",
  "Традиционен в Калмыкии, Бурятии и Туве. Калмыкия — единственный буддийский регион в Европе.":
    "Traditional in Kalmykia, Buryatia and Tuva. Kalmykia is the only Buddhist region in Europe.",
  "Иудаизм": "Judaism",
  "Общины в крупных городах; Еврейская автономная область на Дальнем Востоке носит имя по истории своего образования.":
    "Communities in the large cities; the Jewish Autonomous Oblast in the Far East takes its name from the history of its founding.",
  "В календаре это видно так: **7 января**, Рождество Христово, — нерабочий праздничный день по всей стране. **Ураза-байрам** и **Курбан-байрам** объявлены выходными законами отдельных республик, **Пасха** передвижная и выходным днём не считается, но приходится на воскресенье.":
    "In the calendar it looks like this: **7 January**, Christmas, is a public holiday across the whole country. **Eid al-Fitr** and **Eid al-Adha** are made days off by the laws of individual republics, and **Easter** moves and is not counted a day off, though it falls on a Sunday.",
  "Какое место занимает преамбула закона 1997 года рядом со статьёй 14?":
    "Where does the preamble of the 1997 law stand next to article 14?",
  "Она устанавливает православие государственной религией": "It makes Orthodoxy the state religion",
  "Она описывает историческую роль религий, а норму задаёт статья 14":
    "It describes the historical role of religions, while article 14 sets the rule",
  "Она отменяет действие статьи 14 для четырёх религий": "It suspends article 14 for four religions",
  "Она даёт перечисленным религиям право на бюджетные средства":
    "It gives the listed religions a right to budget money",
  "Преамбула говорит об истории и уважении, а не об установлении. Статья 14 стоит выше и запрещает государственную или обязательную религию.":
    "The preamble speaks of history and respect, not of establishment. Article 14 stands above it and forbids a state or compulsory religion.",
  "Преамбула закона 1997 года иногда цитируется как доказательство того, что православие — государственная религия. Это не так: преамбула описывает историю, а норму устанавливает статья 14 Конституции, и она говорит обратное.":
    "The preamble of the 1997 law is sometimes quoted as proof that Orthodoxy is the state religion. It is not: the preamble describes history, while the rule is set by article 14 of the Constitution, and that says the opposite.",
  // ru-literatura
  "Литература и искусство": "Literature and art",
  "Почему это важно: имена из этого урока встречаются на карте страны чаще любых других — площади, улицы, станции метро, театры и музеи названы в основном ими. Не узнав их, трудно понять, чем город гордится.":
    "Why this matters: the names in this lesson appear on the map of the country more than any others — squares, streets, metro stations, theatres and museums are named mostly after them. Without recognising them it is hard to see what a city is proud of.",
  "Пушкин и золотой век": "Pushkin and the golden age",
  "**Александр Пушкин** (1799–1837) считается создателем современного русского литературного языка: до него книжный и разговорный язык расходились гораздо сильнее. Его роман в стихах **«Евгений Онегин»**, поэма «Медный всадник» и сказки читаются в школе целиком.":
    "**Alexander Pushkin** (1799–1837) is held to be the creator of the modern Russian literary language: before him the written and the spoken language were much further apart. His novel in verse **Eugene Onegin**, the poem The Bronze Horseman and his fairy tales are read in full at school.",
  "**6 июня**, в день его рождения, отмечается Пушкинский день России; с 2011 года это же число — **День русского языка**. ООН включила эту дату в собственный календарь языков.":
    "**6 June**, his birthday, is Pushkin Day in Russia; since 2011 the same date has also been the **Day of the Russian Language**. The UN has taken the date into its own calendar of languages.",
  "Дальше идут **Михаил Лермонтов** («Герой нашего времени»), **Николай Гоголь** («Ревизор», «Мёртвые души»), **Иван Тургенев** («Отцы и дети»). Их называют золотым веком русской литературы, и укладывается он в одно столетие.":
    "Then come **Mikhail Lermontov** (A Hero of Our Time), **Nikolai Gogol** (The Government Inspector, Dead Souls) and **Ivan Turgenev** (Fathers and Sons). They are called the golden age of Russian literature, and it fits inside one century.",
  "Большой роман": "The great novel",
  "**Лев Толстой** (1828–1910) — «Война и мир» и «Анна Каренина»; его усадьба **Ясная Поляна** сохранена как музей. **Фёдор Достоевский** (1821–1881) — «Преступление и наказание», «Идиот», «Братья Карамазовы»; его переводят и ставят на сцене, вероятно, чаще всех русских авторов.":
    "**Leo Tolstoy** (1828–1910) — War and Peace and Anna Karenina; his estate at **Yasnaya Polyana** is kept as a museum. **Fyodor Dostoevsky** (1821–1881) — Crime and Punishment, The Idiot, The Brothers Karamazov; he is probably translated and staged more than any other Russian author.",
  "**Антон Чехов** (1860–1904) писал короткие рассказы и четыре пьесы, на которых держится мировой репертуар: «Чайка», «Дядя Ваня», «Три сестры», «Вишнёвый сад». Чайка со шторы Художественного театра — эмблема именно отсюда.":
    "**Anton Chekhov** (1860–1904) wrote short stories and four plays that hold up the world repertoire: The Seagull, Uncle Vanya, Three Sisters and The Cherry Orchard. The seagull on the Art Theatre's curtain comes from exactly there.",
  "Серебряный век и премии": "The silver age and the prizes",
  "Начало XX века дало **Александра Блока**, **Анну Ахматову**, **Марину Цветаеву**, **Осипа Мандельштама**, **Бориса Пастернака**, **Владимира Маяковского**, **Сергея Есенина**. Судьбы этого поколения тяжелы: часть погибла в лагерях, часть уехала, часть замолчала на десятилетия.":
    "The start of the 20th century gave **Alexander Blok**, **Anna Akhmatova**, **Marina Tsvetaeva**, **Osip Mandelstam**, **Boris Pasternak**, **Vladimir Mayakovsky** and **Sergei Yesenin**. The fates of that generation were hard: some died in the camps, some left, some fell silent for decades.",
  "Нобелевскую премию по литературе получили пятеро: **Иван Бунин** (1933, первым — уже в эмиграции), **Борис Пастернак** (1958, вынужден был отказаться под давлением), **Михаил Шолохов** (1965), **Александр Солженицын** (1970), **Иосиф Бродский** (1987).":
    "Five have won the Nobel Prize in Literature: **Ivan Bunin** (1933, the first — already in emigration), **Boris Pasternak** (1958, forced to decline under pressure), **Mikhail Sholokhov** (1965), **Alexander Solzhenitsyn** (1970) and **Joseph Brodsky** (1987).",
  "Кто первым из русских писателей получил Нобелевскую премию по литературе?":
    "Which Russian writer was the first to win the Nobel Prize in Literature?",
  "Лев Толстой": "Leo Tolstoy",
  "Иван Бунин": "Ivan Bunin",
  "Михаил Шолохов": "Mikhail Sholokhov",
  "Борис Пастернак": "Boris Pasternak",
  // ru-literatura
  "Бунин получил её в 1933 году, живя уже в эмиграции. Толстой номинировался, но премии так и не получил.":
    "Bunin received it in 1933, already living in emigration. Tolstoy was nominated but never got the prize.",
  "Музыка": "Music",
  "**Михаил Глинка** считается первым русским композитором мирового масштаба; с его опер начинается национальная традиция. Во второй половине XIX века складывается **«Могучая кучка»** — содружество композиторов, куда входили **Балакирев**, **Мусоргский**, **Бородин**, **Римский-Корсаков** и **Кюи**.":
    "**Mikhail Glinka** is held to be the first Russian composer of world stature; the national tradition begins with his operas. In the second half of the 19th century **The Mighty Handful** took shape — a fellowship of composers made up of **Balakirev**, **Mussorgsky**, **Borodin**, **Rimsky-Korsakov** and **Cui**.",
  "**Пётр Чайковский** (1840–1893) написал три балета, на которых стоит мировой балетный репертуар: «Лебединое озеро», «Спящая красавица», «Щелкунчик». Дальше — **Сергей Рахманинов**, **Игорь Стравинский**, **Сергей Прокофьев**, **Дмитрий Шостакович**.":
    "**Pyotr Tchaikovsky** (1840–1893) wrote the three ballets the world ballet repertoire rests on: Swan Lake, The Sleeping Beauty and The Nutcracker. After him come **Sergei Rachmaninoff**, **Igor Stravinsky**, **Sergei Prokofiev** and **Dmitri Shostakovich**.",
  "**Седьмая симфония** Шостаковича, названная Ленинградской, была впервые исполнена в осаждённом городе **9 августа 1942 года** — оркестром, который собрали из оставшихся в живых музыкантов.":
    "Shostakovich's **Seventh Symphony**, called the Leningrad, was first played in the besieged city on **9 August 1942** — by an orchestra put together from the musicians still alive.",
  "Что такое «Могучая кучка»?": "What was The Mighty Handful?",
  "Литературный кружок начала XX века": "A literary circle of the early 20th century",
  "Содружество русских композиторов XIX века": "A fellowship of Russian composers of the 19th century",
  "Объединение художников-передвижников": "An association of Wanderer painters",
  "Театральная труппа Станиславского": "Stanislavski's theatre company",
  "Балакирев, Мусоргский, Бородин, Римский-Корсаков и Кюи. Они добивались национального звучания в опере и симфонии.":
    "Balakirev, Mussorgsky, Borodin, Rimsky-Korsakov and Cui. They were after a national sound in opera and symphony.",
  "Театр и балет": "Theatre and ballet",
  "**Большой театр** в Москве ведёт счёт с **1776 года**, **Мариинский** в Петербурге — с конца XVIII века. Русский балет стал мировым эталоном после **«Русских сезонов»** Сергея Дягилева, которые с **1909 года** показывали в Париже танцовщиков и декорации, каких там не видели.":
    "The **Bolshoi Theatre** in Moscow counts from **1776**, and the **Mariinsky** in Petersburg from the end of the 18th century. Russian ballet became the world's benchmark after Sergei Diaghilev's **Ballets Russes**, which from **1909** showed Paris dancers and sets it had never seen.",
  "**Константин Станиславский** и **Владимир Немирович-Данченко** основали в **1898 году** Московский Художественный театр. Их метод работы с актёром — **система Станиславского** — преподаётся в театральных школах по всему миру.":
    "**Konstantin Stanislavski** and **Vladimir Nemirovich-Danchenko** founded the Moscow Art Theatre in **1898**. Their way of working with an actor — the **Stanislavski system** — is taught in drama schools all over the world.",
  "Живопись и икона": "Painting and the icon",
  "**Третьяковская галерея** в Москве выросла из частного собрания купца Павла Третьякова и открыта для публики с XIX века; **Русский музей** в Петербурге основан в 1895 году. В 1870 году художники объединились в товарищество **передвижников**, чтобы возить выставки по городам, а не показывать их только в столицах.":
    "The **Tretyakov Gallery** in Moscow grew out of the private collection of the merchant Pavel Tretyakov and has been open to the public since the 19th century; the **Russian Museum** in Petersburg was founded in 1895. In 1870 painters joined together in the society of the **Wanderers**, to take exhibitions round the towns rather than show them only in the capitals.",
  "Илья Репин": "Ilya Repin",
  "«Бурлаки на Волге», «Запорожцы». Портретист и главный живописец передвижников.":
    "Barge Haulers on the Volga, The Zaporozhian Cossacks. A portraitist and the leading painter of the Wanderers.",
  "Иван Шишкин и Исаак Левитан": "Ivan Shishkin and Isaac Levitan",
  "Лес и русская равнина. Пейзаж у передвижников был не фоном, а самостоятельным сюжетом.":
    "The forest and the Russian plain. For the Wanderers landscape was not a background but a subject in its own right.",
  "Иван Айвазовский": "Ivan Aivazovsky",
  "Море — почти шесть тысяч полотен. Работал в Феодосии и писал воду быстрее, чем большинство пишет эскизы.":
    "The sea — almost six thousand canvases. He worked in Feodosia and painted water faster than most people paint sketches.",
  "Андрей Рублёв": "Andrei Rublev",
  "Иконописец начала XV века. Его «Троица» — самая известная русская икона; иконопись здесь древнее живописи на несколько веков.":
    "An icon painter of the early 15th century. His Trinity is the best-known Russian icon; icon painting here is several centuries older than painting.",
  "Кино добавилось в XX веке: **Сергей Эйзенштейн** и его «Броненосец „Потёмкин“» (1925) вошли в учебники монтажа, **Андрей Тарковский** — в число самых изучаемых режиссёров мира, а студия **«Мосфильм»** работает с 1924 года.":
    "Cinema was added in the 20th century: **Sergei Eisenstein** and his Battleship Potemkin (1925) went into the textbooks of editing, **Andrei Tarkovsky** is among the most studied directors in the world, and the **Mosfilm** studio has been working since 1924.",
  "Кто написал «Троицу»?": "Who painted the Trinity?",
  "Василий Суриков": "Vasily Surikov",
  "Икона начала XV века и самое известное произведение русской иконописи. Репин, Айвазовский и Суриков работали через четыреста с лишним лет после Рублёва.":
    "An icon of the early 15th century and the best-known work of Russian icon painting. Repin, Aivazovsky and Surikov worked more than four hundred years after Rublev.",
  "**Передвижники** — не стиль живописи, а объединение с уставом и выставочным маршрутом. Их объединяло желание показывать картины по всей стране, а писали они по-разному.":
    "The **Wanderers** were not a style of painting but an association with statutes and an exhibition route. What united them was the wish to show pictures across the country; they painted in different ways.",
  // ru-nauka-kosmos
  "Наука и космос": "Science and space",
  "Почему это важно: две даты из этого урока — 4 октября 1957 года и 12 апреля 1961 года — знают везде, и обе относятся к России. Праздник 12 апреля объясняется именно здесь.":
    "Why this matters: two dates from this lesson — 4 October 1957 and 12 April 1961 — are known everywhere, and both belong to Russia. The holiday on 12 April is explained right here.",
  "С чего начиналась наука": "How science began",
  "**Академия наук** основана указом **Петра I в 1724 году** в Петербурге и открылась год спустя. Это одно из старейших научных учреждений Европы, и создавалось оно сразу как государственное.":
    "The **Academy of Sciences** was founded by a decree of **Peter I in 1724** in Petersburg and opened a year later. It is one of the oldest scientific institutions in Europe, and it was set up as a state body from the start.",
  "**Михаил Ломоносов** (1711–1765) — первый русский учёный мирового уровня: химик, физик, астроном, поэт и историк сразу. По его замыслу в **1755 году** основан **Московский университет**, который носит его имя.":
    "**Mikhail Lomonosov** (1711–1765) was the first Russian scholar of world rank: chemist, physicist, astronomer, poet and historian all at once. **Moscow University**, founded in **1755** to his design, bears his name.",
  "**Дмитрий Менделеев** в **1869 году** сформулировал **периодический закон** и построил таблицу элементов, оставив в ней пустые клетки под ещё не открытые вещества. Когда их нашли, свойства совпали с предсказанными — это и сделало таблицу законом, а не удобным списком.":
    "In **1869** **Dmitri Mendeleev** formulated the **periodic law** and built the table of elements, leaving empty cells in it for substances not yet discovered. When they were found, their properties matched the predictions — and that is what made the table a law rather than a convenient list.",
  "**Иван Павлов** получил **Нобелевскую премию в 1904 году** за работы о пищеварении — первым из россиян; **Илья Мечников** — в 1908 году за учение об иммунитете. Позже премии по физике получили **Ландау**, **Басов** и **Прохоров**, **Капица**, **Алфёров**, **Абрикосов** и **Гинзбург**.":
    "**Ivan Pavlov** won the **Nobel Prize in 1904** for his work on digestion — the first Russian to do so; **Ilya Mechnikov** followed in 1908 for his theory of immunity. Later Nobel Prizes in physics went to **Landau**, **Basov** and **Prokhorov**, **Kapitsa**, **Alferov**, **Abrikosov** and **Ginzburg**.",
  "Спутник": "Sputnik",
  "**4 октября 1957 года** с полигона в казахской степи вышел на орбиту **первый искусственный спутник Земли**. Аппарат весил 83 килограмма и передавал повторяющийся сигнал, который ловили радиолюбители по всему миру. С этого дня отсчитывают космическую эру.":
    "On **4 October 1957** the **first artificial satellite of the Earth** went into orbit from a launch site on the Kazakh steppe. The craft weighed 83 kilograms and sent out a repeating signal that radio amateurs picked up all over the world. The space age is counted from that day.",
  "Через месяц на орбиту отправили собаку **Лайку** — первое живое существо в космосе; вернуть её не могли, техники возвращения ещё не было. В **1960 году** **Белка и Стрелка** слетали и вернулись живыми, и это открыло дорогу человеку.":
    "A month later the dog **Laika** was sent into orbit — the first living creature in space; there was no bringing her back, as the technology for returning did not yet exist. In **1960** **Belka and Strelka** flew and came home alive, and that opened the way for a human being.",
  "Теоретическую основу заложил школьный учитель из Калуги **Константин Циолковский**, опубликовавший расчёт ракетного движения в 1903 году. Практику вёл **Сергей Королёв** — главный конструктор, чьё имя до его смерти в 1966 году держали в тайне.":
    "The theory was laid down by a schoolteacher from Kaluga, **Konstantin Tsiolkovsky**, who published his calculations of rocket motion in 1903. The practice was led by **Sergei Korolev** — the chief designer, whose name was kept secret until his death in 1966.",
  "Что произошло 4 октября 1957 года?": "What happened on 4 October 1957?",
  "Первый полёт человека в космос": "The first human flight into space",
  "Запуск первого искусственного спутника Земли":
    "The launch of the first artificial satellite of the Earth",
  "Первый выход в открытый космос": "The first spacewalk",
  "Запуск первой орбитальной станции": "The launch of the first orbital station",
  "Аппарат весом 83 килограмма передавал сигнал, который слушал весь мир. С этой даты отсчитывают космическую эру.":
    "A craft weighing 83 kilograms sent out a signal the whole world listened to. The space age is counted from that date.",
  "Гагарин": "Gagarin",
  "**12 апреля 1961 года** **Юрий Гагарин** на корабле **«Восток-1»** сделал **один виток** вокруг Земли и приземлился под Саратовом. Полёт длился **108 минут**. Ему было 27 лет.":
    "On **12 April 1961** **Yuri Gagarin** made **one orbit** of the Earth aboard the **Vostok 1** spacecraft and landed near Saratov. The flight lasted **108 minutes**. He was 27.",
  "**12 апреля** — **День космонавтики**, государственный праздник; Генеральная Ассамблея ООН в 2011 году объявила эту дату Международным днём полёта человека в космос.":
    "**12 April** is **Cosmonautics Day**, a state holiday; in 2011 the UN General Assembly declared the date the International Day of Human Space Flight.",
  "Дальше сроки сжаты: **1963** — **Валентина Терешкова**, первая женщина в космосе; **1965** — **Алексей Леонов**, первый выход в открытый космос; **1970** — **«Луноход-1»**, первый самоходный аппарат на другом небесном теле; **1971** — **«Салют-1»**, первая орбитальная станция.":
    "After that the dates come close together: **1963** — **Valentina Tereshkova**, the first woman in space; **1965** — **Alexei Leonov**, the first spacewalk; **1970** — **Lunokhod 1**, the first self-propelled vehicle on another body; **1971** — **Salyut 1**, the first orbital station.",
  "Сколько продолжался полёт Юрия Гагарина?": "How long did Yuri Gagarin's flight last?",
  "Около суток": "About a day",
  "108 минут, один виток вокруг Земли": "108 minutes, one orbit of the Earth",
  "Двенадцать часов": "Twelve hours",
  "Трое суток": "Three days",
  "Корабль «Восток-1», старт 12 апреля 1961 года, посадка под Саратовом. Эта дата стала Днём космонавтики.":
    "The Vostok 1 spacecraft, launched on 12 April 1961, landing near Saratov. That date became Cosmonautics Day.",
  "Космос сегодня": "Space today",
  "Станция **«Мир»** работала на орбите с **1986 по 2001 год** — пятнадцать лет вместо расчётных пяти. С **1998 года** Россия участвует в **Международной космической станции**: первый её модуль был запущен именно отсюда, и российский сегмент обслуживает станцию до сих пор.":
    "The **Mir** station worked in orbit from **1986 to 2001** — fifteen years instead of the five it was designed for. Since **1998** Russia has taken part in the **International Space Station**: its first module was launched from here, and the Russian segment still keeps the station running.",
  "Байконур": "Baikonur",
  "Старейший космодром мира, откуда стартовали спутник и Гагарин. Находится в Казахстане и арендуется Россией.":
    "The oldest launch site in the world, from which the satellite and Gagarin went up. It lies in Kazakhstan and is leased by Russia.",
  "Плесецк": "Plesetsk",
  "Архангельская область. Самый северный действующий космодром; отсюда идут в основном военные и научные запуски.":
    "Arkhangelsk Oblast. The northernmost working launch site; the launches from here are mostly military and scientific.",
  "Восточный": "Vostochny",
  "Амурская область, первый пуск в 2016 году. Строился, чтобы тяжёлые запуски шли с собственной территории.":
    "Amur Oblast, first launch in 2016. It was built so that heavy launches could go from Russia's own territory.",
  "Звёздный городок": "Star City",
  "Подмосковье. Центр подготовки космонавтов; сюда приезжают тренироваться экипажи и других стран.":
    "Outside Moscow. The cosmonaut training centre; crews from other countries come here to train too.",
  "Атом": "The atom",
  "Атомным проектом руководил **Игорь Курчатов**. В **1954 году** в **Обнинске** заработала **первая в мире атомная электростанция**, дававшая ток в общую сеть; в **1959 году** вышел в море **атомный ледокол «Ленин»**.":
    "The atomic project was led by **Igor Kurchatov**. In **1954** the **world's first nuclear power station** started up in **Obninsk**, feeding current into the general grid; in **1959** the **nuclear icebreaker Lenin** put to sea.",
  "Атомный ледокольный флот у России единственный в мире — без него **Северный морской путь** не работал бы круглый год. Обратная сторона той же истории — **чернобыльская авария 1986 года**, после которой требования к безопасности реакторов пересматривались во всём мире.":
    "Russia's nuclear icebreaker fleet is the only one in the world — without it the **Northern Sea Route** could not work all year round. The other side of the same story is the **Chernobyl accident of 1986**, after which reactor safety requirements were reviewed the world over.",
  "Где в 1954 году заработала первая в мире атомная электростанция?":
    "Where did the world's first nuclear power station start up in 1954?",
  "В Обнинске": "In Obninsk",
  "В Дубне": "In Dubna",
  "В Сарове": "In Sarov",
  "В Северодвинске": "In Severodvinsk",
  "Станция была небольшой, но давала ток в общую сеть — этим и отличалась от опытных реакторов. Через пять лет вышел атомный ледокол «Ленин».":
    "The station was small, but it fed current into the general grid — and that is what set it apart from experimental reactors. Five years later the nuclear icebreaker Lenin put to sea.",
  "**Байконур** находится не в России. Космодром остался в Казахстане после распада СССР и работает по договору аренды — поэтому и строился Восточный.":
    "**Baikonur** is not in Russia. The launch site stayed in Kazakhstan after the break-up of the USSR and works under a lease — which is why Vostochny was built.",
  // chapter
  "Общество и повседневная жизнь": "Society and everyday life",
  // ru-rabota
  "Работа и деньги": "Work and money",
  "Почему это важно: почти всё, что человек знает о новой стране в первый год, он узнаёт через работу и оплату счетов. Правила здесь записаны в одном кодексе, и они одинаковы для гражданина и для иностранца с разрешением на работу.":
    "Why this matters: almost everything a person learns about a new country in the first year, they learn through work and paying bills. The rules here are written in one code, and they are the same for a citizen and for a foreigner with a work permit.",
  "Трудовой договор": "The employment contract",
  "Отношения работника и работодателя описывает **Трудовой кодекс**, действующий с **2002 года**. Договор заключается **письменно, в двух экземплярах** — один остаётся у работника. Если человека фактически допустили к работе, договор считается заключённым, даже когда бумагу подписать забыли.":
    "The relationship between employee and employer is set out in the **Labour Code**, in force since **2002**. A contract is made **in writing, in two copies** — one stays with the employee. If a person has actually been allowed to start work, the contract counts as made even when nobody remembered to sign the paper.",
  "**Испытательный срок** — не более **трёх месяцев**; для руководителей организаций, их заместителей и главных бухгалтеров он может доходить до шести. На испытании действуют те же правила, что и потом: та же оплата, тот же отпуск, те же взносы.":
    "A **probation period** may not exceed **three months**; for heads of organisations, their deputies and chief accountants it can run to six. During probation the same rules apply as afterwards: the same pay, the same leave, the same contributions.",
  "**Трудовая книжка** с **2020 года** ведётся в электронном виде. Тем, кто устраивается на работу впервые, бумажную уже не заводят; сведения о стаже хранятся в Социальном фонде и запрашиваются через портал.":
    "Since **2020** the **employment record book** has been kept electronically. Those starting work for the first time are no longer given a paper one; the record of service is held by the Social Fund and requested through the portal.",
  "Время и отпуск": "Hours and leave",
  "Нормальная рабочая неделя — **не более 40 часов**. Ежегодный оплачиваемый отпуск — **28 календарных дней**; у некоторых профессий и у работающих на Севере он длиннее. Заработная плата выплачивается **не реже чем каждые полмесяца**, то есть аванс здесь не любезность работодателя, а требование закона.":
    "A normal working week is **no more than 40 hours**. Annual paid leave is **28 calendar days**; for some occupations and for those working in the North it is longer. Wages are paid **at least every half-month**, so an advance here is not the employer's kindness but a requirement of the law.",
  "Ниже **МРОТ** — минимального размера оплаты труда, который устанавливается федеральным законом, — платить нельзя. В регионах может действовать своё, более высокое соглашение.":
    "Paying below the **MROT** — the minimum wage, which is set by federal law — is not allowed. A region may have an agreement of its own setting a higher figure.",
  "Сколько дней составляет ежегодный оплачиваемый отпуск по общему правилу?":
    "How many days of annual paid leave does the general rule give?",
  "28 календарных дней": "28 calendar days",
  "20 рабочих дней": "20 working days",
  "14 календарных дней": "14 calendar days",
  "Столько, сколько записано в договоре": "As many as the contract says",
  "Меньше — нельзя, больше — можно. У работающих на Севере и у ряда профессий отпуск длиннее.":
    "Less is not allowed, more is. Those working in the North and in a number of occupations get longer leave.",
  // ru-rabota
  "Налоги и взносы": "Taxes and contributions",
  "С заработка удерживается **налог на доходы физических лиц**. С **2025 года** он считается по **пятиступенчатой шкале**: базовая ставка **13 %**, а с дохода свыше 2,4 миллиона рублей в год ставка растёт до 15, 18, 20 и 22 процентов на верхних ступенях. Повышенная ставка применяется не ко всему доходу, а только к той части, которая перешла порог.":
    "**Personal income tax** is withheld from earnings. From **2025** it is worked out on a **five-step scale**: the basic rate is **13 %**, and on income above 2.4 million roubles a year the rate rises to 15, 18, 20 and 22 per cent on the upper steps. The higher rate applies not to the whole income but only to the part above the threshold.",
  "**Страховые взносы** — на пенсию, медицину и социальное страхование — платит **работодатель**, сверх зарплаты и из своих средств. Работник их не перечисляет и в расчётном листке видит только НДФЛ.":
    "**Social contributions** — for pensions, health care and social insurance — are paid by the **employer**, on top of the wage and out of the employer's own money. The employee pays none of them and sees only income tax on the payslip.",
  "Кто перечисляет страховые взносы за работника?": "Who pays the social contributions for an employee?",
  "Работник из своей зарплаты": "The employee, out of their wage",
  "Работодатель, сверх зарплаты и из своих средств":
    "The employer, on top of the wage and out of their own money",
  "Работник и работодатель поровну": "The employee and the employer in equal parts",
  "Региональный бюджет": "The regional budget",
  "В расчётном листке работник видит удержание НДФЛ, но не взносы: они лежат на работодателе.":
    "On the payslip an employee sees income tax withheld, but not the contributions: those fall on the employer.",
  "Номера, без которых не обойтись": "The numbers you cannot do without",
  "СНИЛС": "SNILS",
  "Номер индивидуального лицевого счёта в системе пенсионного страхования. На нём копится стаж, и он нужен почти для любой государственной услуги.":
    "The number of an individual account in the pension insurance system. Length of service builds up on it, and it is needed for almost every state service.",
  "ИНН": "INN",
  "Идентификационный номер налогоплательщика. Присваивается один раз на всю жизнь и не меняется при переезде или смене фамилии.":
    "The taxpayer identification number. It is assigned once for life and does not change when you move or change your surname.",
  "Полис ОМС": "The OMS policy",
  "Обязательное медицинское страхование. Оформляется страховой организацией и действует по всей стране, а не только там, где выдан.":
    "Compulsory medical insurance. It is issued by an insurance company and is valid across the whole country, not only where it was issued.",
  "Госуслуги": "Gosuslugi",
  "Портал, через который заказывают справки, записываются к врачу и подают заявления. Подтверждённая учётная запись заменяет очередь.":
    "The portal for ordering certificates, booking a doctor's appointment and filing applications. A verified account takes the place of a queue.",
  "Пенсия и самозанятость": "Pensions and self-employment",
  "После реформы **2018 года** пенсионный возраст поднимается постепенно и к **2028 году** составит **65 лет** для мужчин и **60 лет** для женщин. Кроме возраста нужны стаж и пенсионные коэффициенты; у отдельных профессий и у северян сохраняется досрочный выход.":
    "After the reform of **2018** the pension age is rising step by step and by **2028** will be **65** for men and **60** for women. Besides age you need a length of service and pension points; certain occupations and people in the North keep the right to retire early.",
  "Для тех, кто работает на себя, с **2019 года** существует **налог на профессиональный доход**: **4 %** с поступлений от частных лиц и **6 %** от организаций, без отчётности и без кассы, пока доход не превышает 2,4 миллиона рублей в год. Регистрация занимает несколько минут в приложении, и именно поэтому «самозанятых» в стране миллионы.":
    "For those working for themselves there has been a **tax on professional income** since **2019**: **4 %** on receipts from private individuals and **6 %** from organisations, with no reporting and no till, as long as income stays under 2.4 million roubles a year. Registering takes a few minutes in an app, and that is exactly why the country has millions of “self-employed”.",
  "Деньги": "Money",
  "Валюта — **рубль**, в нём **100 копеек**; графический знак ₽ утверждён в **2013 году**. Выпуск денег ведёт **Центральный банк**, и защита устойчивости рубля названа его основной функцией прямо в Конституции.":
    "The currency is the **rouble**, made up of **100 kopeks**; the ₽ symbol was approved in **2013**. Money is issued by the **Central Bank**, and protecting the stability of the rouble is named its principal function in the Constitution itself.",
  "Безналичная оплата распространена очень широко — карточкой платят и в маленьком магазине, и на рынке. Национальная платёжная система носит имя **«Мир»**; пенсии и бюджетные выплаты зачисляются именно на такие карты.":
    "Cashless payment is very widespread — people pay by card in a small shop and at the market alike. The national payment system is called **Mir**; pensions and state benefits are paid onto cards of that kind.",
  "Что изменилось в налоге на доходы с 2025 года?": "What changed in income tax from 2025?",
  "Налог отменили для низких доходов": "The tax was abolished for low incomes",
  "Единую ставку заменила пятиступенчатая шкала": "A five-step scale replaced the single rate",
  "Ставку подняли до 22 % для всех": "The rate was raised to 22 % for everyone",
  "Налог стал платить работодатель": "The employer began paying the tax",
  "Базовая ставка осталась 13 %. Повышенные ставки применяются только к той части дохода, которая перешла соответствующий порог.":
    "The basic rate stayed at 13 %. The higher rates apply only to the part of the income above the relevant threshold.",
  "Устная договорённость об оплате «в конверте» не защищает работника ничем: без договора и взносов не идёт стаж, не считается пенсия и не оплачивается больничный. Требование письменного договора — не формальность.":
    "A verbal arrangement to be paid “in an envelope” protects an employee from nothing: without a contract and contributions there is no length of service, no pension counted and no sick pay. The requirement of a written contract is not a formality.",
  // ru-zdravookhranenie-obrazovanie
  "Здоровье и образование": "Health and education",
  "Почему это важно: две системы, с которыми сталкивается каждая семья. Обе бесплатны в своей основной части, но обе работают по правилам прикрепления и сроков, которых со стороны не видно.":
    "Why this matters: two systems every family meets. Both are free in their main part, but both work by rules of registration and deadlines that are invisible from outside.",
  "Как устроена медицина": "How medicine is organised",
  "Основа — **обязательное медицинское страхование**. Полис ОМС оформляет страховая медицинская организация, а взносы за работающих платит работодатель, за детей, пенсионеров и безработных — регион. С полисом помощь в государственной поликлинике и больнице бесплатна.":
    "The basis is **compulsory medical insurance**. The OMS policy is issued by an insurance company, and contributions are paid by the employer for those in work and by the region for children, pensioners and the unemployed. With a policy, care in a state clinic or hospital is free.",
  "Объём того, что входит в бесплатную помощь, определяет **программа государственных гарантий**, которую Правительство утверждает **каждый год**. Всё, что за её пределами, оказывается платно или по добровольному страхованию.":
    "What free care covers is set by the **programme of state guarantees**, which the Government approves **every year**. Anything outside it is paid for, or covered by voluntary insurance.",
  "Человек **прикрепляется к поликлинике** — обычно по месту жительства, но выбрать другую можно, не чаще одного раза в год. Врача внутри поликлиники тоже можно выбрать, с согласия самого врача.":
    "A person **registers with a clinic** — usually where they live, but another can be chosen, no more than once a year. A doctor within the clinic can be chosen too, with that doctor's agreement.",
  "Когда срочно": "When it is urgent",
  "**Скорая помощь** вызывается по номеру **103**; единый номер экстренных служб — **112**, он работает даже без денег на счету и без сим-карты. При состояниях, угрожающих жизни, помощь оказывается **бесплатно и немедленно, без полиса и без документов** — отказ в таком случае незаконен.":
    "An **ambulance** is called on **103**; the single emergency number is **112**, and it works even with no money on the account and no SIM card. In conditions that threaten life, help is given **free and at once, without a policy and without documents** — a refusal in such a case is unlawful.",
  "Нужен ли полис, чтобы получить экстренную помощь?": "Do you need a policy to get emergency care?",
  "Да, иначе помощь будет платной": "Yes, otherwise the care will be charged for",
  "Нет: при угрозе жизни помощь оказывают без полиса и документов":
    "No: where life is at risk, care is given without a policy and without documents",
  "Да, но его можно предъявить позже в течение суток": "Yes, but it can be shown later, within 24 hours",
  "Нужен полис добровольного страхования": "You need a voluntary insurance policy",
  "Скорая помощь вызывается по номеру 103, единый экстренный номер — 112. Отказать в неотложной помощи из-за отсутствия документов нельзя.":
    "An ambulance is called on 103, and the single emergency number is 112. Urgent care cannot be refused for want of documents.",
  "Отдельно стоит **диспансеризация** — бесплатное профилактическое обследование по полису ОМС: до сорока лет раз в три года, после сорока — ежегодно. На неё дают оплачиваемый выходной день.":
    "Separate from that is the **check-up**, a free preventive examination under the OMS policy: once every three years up to the age of forty, and yearly after forty. A paid day off is given for it.",
  "Школа": "School",
  "Школьное обучение занимает **одиннадцать классов**: четыре года начальной школы, пять лет основной и два года старшей. Обязательным Конституция называет **основное общее образование** — то есть девять классов; дальше человек выбирает старшую школу или колледж.":
    "School lasts **eleven years**: four years of primary school, five of basic school and two of upper school. What the Constitution makes compulsory is **basic general education** — that is, nine years; after that a person chooses upper school or a college.",
  "Учебный год начинается **1 сентября**, и это государственный праздник — **День знаний**. Оценки ставятся по **пятибалльной** шкале, где **5** — высшая, а **2** — неудовлетворительно; единицу на практике почти не ставят.":
    "The school year begins on **1 September**, and that is a state holiday, the **Day of Knowledge**. Marks are given on a **five-point** scale, where **5** is the highest and **2** is a fail; in practice a 1 is almost never given.",
  "Приём в школу идёт по территориальному принципу: за каждой школой закреплён свой участок, и живущим на нём место гарантировано. Оставшиеся места распределяются между всеми остальными.":
    "Admission to a school goes by area: every school has its own catchment, and those living in it are guaranteed a place. The remaining places are shared out among everyone else.",
  "Экзамены": "Examinations",
  "После **девятого** класса сдают **ОГЭ** — основной государственный экзамен. После **одиннадцатого** — **ЕГЭ**, единый государственный экзамен, который с **2009 года** служит одновременно выпускным и вступительным.":
    "After the **ninth** year pupils sit the **OGE**, the basic state examination. After the **eleventh** comes the **EGE**, the unified state examination, which since **2009** has served as both a leaving and an entrance exam.",
  "Обязательны русский язык и математика; остальные предметы выбирают под будущую специальность. **Результаты ЕГЭ действуют четыре года**, так что поступать можно не сразу после школы.":
    "Russian and mathematics are compulsory; the other subjects are chosen with a future speciality in mind. **EGE results are valid for four years**, so applying to university need not happen straight after school.",
  "Какой экзамен сдают после девятого класса?": "Which examination is taken after the ninth year?",
  "ОГЭ": "The OGE",
  "ЕГЭ": "The EGE",
  "Вступительные экзамены вуза": "The university's own entrance exams",
  "Никакого": "None",
  "ЕГЭ сдают после одиннадцатого класса, и он служит и выпускным, и вступительным экзаменом сразу.":
    "The EGE is taken after the eleventh year, and it serves as both the leaving and the entrance examination at once.",
  "После школы": "After school",
  "Колледж": "College",
  "Среднее профессиональное образование. Поступают после девятого или одиннадцатого класса, учатся два-четыре года и выходят с профессией.":
    "Secondary vocational education. Students enter after the ninth or the eleventh year, study for two to four years and come out with a trade.",
  "Бакалавриат и специалитет": "Bachelor's and specialist degrees",
  "Первая ступень высшего образования: четыре года у бакалавра, пять-шесть лет у специалиста — например, у врача.":
    "The first stage of higher education: four years for a bachelor, five or six for a specialist — a doctor, for example.",
  "Магистратура": "Master's",
  "Ещё два года после бакалавриата. Можно сменить направление, и второе высшее при этом не считается платным по умолчанию.":
    "Another two years after the bachelor's. The field can be changed, and this does not count by default as a paid second degree.",
  "Аспирантура": "Postgraduate study",
  "Подготовка к научной работе и к защите диссертации. Отсюда выходят кандидаты наук.":
    "Preparation for research work and for defending a dissertation. Candidates of science come out of it.",
  "Места в вузах делятся на **бюджетные** — оплаченные государством и распределяемые по конкурсу баллов — и **платные**. Конституция и говорит именно так: высшее образование бесплатно **на конкурсной основе**, то есть не всем, но и не за деньги.":
    "Places at universities are divided into **state-funded** ones — paid for by the state and awarded on a competition of marks — and **fee-paying** ones. The Constitution puts it exactly that way: higher education is free **on a competitive basis**, that is, not for everyone, but not for money either.",
  "Сколько времени действуют результаты ЕГЭ?": "How long are EGE results valid?",
  "Один год": "One year",
  "Четыре года": "Four years",
  "Бессрочно": "Indefinitely",
  "До конца календарного года": "Until the end of the calendar year",
  "Поэтому поступать можно не сразу после школы: результат остаётся действительным несколько приёмных кампаний подряд.":
    "That is why applying need not happen straight after school: the result stays valid for several admission rounds in a row.",
  "Полис ОМС действует **по всей стране**, а не только в регионе, где выдан. Переехав, менять его не нужно — нужно только прикрепиться к новой поликлинике.":
    "An OMS policy is valid **across the whole country**, not only in the region where it was issued. After moving there is no need to change it — only to register with a new clinic.",
  // ru-zhizn-v-rossii
  "Документы и учреждения": "Documents and institutions",
  "Почему это важно: почти любое дело здесь начинается с документа, и почти любой документ теперь оформляется в одном из двух мест — в многофункциональном центре или на портале. Знать, куда идти, важнее, чем знать название ведомства.":
    "Why this matters: almost everything here starts with a document, and almost every document is now handled in one of two places — a multifunctional centre or the portal. Knowing where to go matters more than knowing the name of the agency.",
  "Паспорт": "The passport",
  "До четырнадцати лет главный документ ребёнка — **свидетельство о рождении**. Затем выдаётся **паспорт гражданина Российской Федерации**, и его **меняют в 20 и в 45 лет**; после сорока пяти он служит уже без замены. Просроченный паспорт недействителен, и на замену даётся ограниченный срок.":
    "Up to the age of fourteen a child's main document is the **birth certificate**. Then comes the **passport of a citizen of the Russian Federation**, and it is **replaced at 20 and at 45**; after forty-five it serves without replacement. An expired passport is invalid, and the time allowed for replacing it is limited.",
  "Для поездок за границу существует отдельный **заграничный паспорт** — обычный на пять лет и биометрический на десять. Внутренний паспорт за пределами страны не действует.":
    "For travel abroad there is a separate **foreign passport** — an ordinary one for five years and a biometric one for ten. The internal passport is not valid outside the country.",
  "В каком возрасте меняют паспорт гражданина России?":
    "At what age is a Russian citizen's passport replaced?",
  "В 20 и в 45 лет": "At 20 and at 45",
  "В 18 и в 40 лет": "At 18 and at 40",
  "Каждые десять лет": "Every ten years",
  "Паспорт не меняют": "The passport is never replaced",
  "Выдаётся он в 14 лет, а после 45 служит без замены. Просроченный паспорт недействителен.":
    "It is issued at 14, and after 45 it serves without replacement. An expired passport is invalid.",
  "Регистрация, а не прописка": "Registration, not propiska",
  "Советская **прописка**, дававшая разрешение жить в городе, отменена в **1993 году**. Её место занял **регистрационный учёт**, и это принципиально другое: регистрация **уведомляет** государство о месте жительства, а не разрешает его. Конституционный Суд отдельно указывал, что регистрация не может быть условием осуществления прав.":
    "The Soviet **propiska**, which gave permission to live in a city, was abolished in **1993**. Its place was taken by **registration**, and that is something quite different: registration **informs** the state where a person lives, it does not permit it. The Constitutional Court has said specifically that registration cannot be a condition for exercising rights.",
  "Различают два вида. **Регистрация по месту жительства** — постоянная, ставится штампом в паспорт. **Регистрация по месту пребывания** — временная, оформляется, если человек живёт по другому адресу **более 90 дней**, и выдаётся отдельным свидетельством. Одна другую не отменяет.":
    "There are two kinds. **Registration at the place of residence** is permanent and is stamped in the passport. **Registration at the place of stay** is temporary, is made when a person lives at another address for **more than 90 days**, and is issued as a separate certificate. Neither cancels the other.",
  "Через какой срок проживания по новому адресу нужна регистрация по месту пребывания?":
    "After how long at a new address is registration at the place of stay required?",
  "Более 90 дней": "More than 90 days",
  // ru-zhizn-v-rossii
  "Более 7 дней": "More than 7 days",
  "Более года": "More than a year",
  "Она не требуется вовсе": "It is not required at all",
  "Постоянная регистрация по месту жительства при этом сохраняется: временная её не отменяет и ставится не штампом, а отдельным свидетельством.":
    "The permanent registration at the place of residence stays in place: the temporary one does not cancel it and is not a stamp but a separate certificate.",
  "ЗАГС": "ZAGS",
  "**Органы записи актов гражданского состояния** регистрируют рождение, брак, расторжение брака, установление отцовства, перемену имени и смерть. Правовые последствия имеет только брак, заключённый там: **венчание в церкви само по себе брака не создаёт**.":
    "The **civil registry offices** record births, marriages, divorces, acknowledgements of paternity, changes of name and deaths. Only a marriage made there has legal effect: **a church wedding does not by itself create a marriage**.",
  "Брачный возраст — **18 лет**; при уважительных причинах он может быть снижен до шестнадцати, а в отдельных регионах и ниже по региональному закону. Между подачей заявления и регистрацией по общему правилу проходит месяц.":
    "The age for marriage is **18**; for good reasons it may be lowered to sixteen, and in some regions further under regional law. As a rule a month passes between the application and the registration.",
  "Какой брак имеет правовые последствия?": "Which marriage has legal effect?",
  "Заключённый в органах ЗАГС": "One made at a ZAGS office",
  "Освящённый в церкви": "One blessed in church",
  "Любой, если пара живёт вместе более года": "Any, if the couple have lived together for more than a year",
  "Заверенный у нотариуса": "One certified by a notary",
  "Венчание можно совершить дополнительно, но само по себе оно брака не создаёт. Совместная жизнь без регистрации тоже не приравнивается к браку.":
    "A church wedding can be held as well, but by itself it does not create a marriage. Living together without registering is not equivalent to marriage either.",
  "Куда идти": "Where to go",
  "МФЦ": "The MFC",
  "Многофункциональный центр, вывеска «Мои документы». Одно окно почти для всего: паспорт, регистрация, справки, выписки, пособия.":
    "The multifunctional centre, with “My Documents” over the door. One window for almost everything: passport, registration, certificates, extracts, benefits.",
  "Портал и приложение. Подтверждённая учётная запись позволяет подать большинство заявлений и записаться на приём, не выходя из дома.":
    "The portal and the app. A verified account lets you file most applications and book an appointment without leaving home.",
  "Налоговая": "The tax office",
  "ИНН, декларации, налоговые вычеты — в том числе на лечение, обучение и покупку жилья. Личный кабинет заменяет визит.":
    "INN, tax returns and tax deductions — including for treatment, education and buying a home. A personal account takes the place of a visit.",
  "Социальный фонд": "The Social Fund",
  "Пенсии, пособия, СНИЛС и сведения о стаже. Образован объединением пенсионного и социального фондов.":
    "Pensions, benefits, SNILS and the record of service. It was formed by merging the pension and social funds.",
  "Экстренные номера и воинский учёт": "Emergency numbers and military registration",
  "Единый номер — **112**. Отдельно работают **101** (пожарные и спасатели), **102** (полиция), **103** (скорая помощь) и **104** (аварийная газовая служба). Со 112 можно звонить без денег на счету, без сим-карты и с заблокированного телефона.":
    "The single number is **112**. Separately there are **101** (fire and rescue), **102** (police), **103** (ambulance) and **104** (gas emergency service). 112 can be called with no money on the account, with no SIM card and from a locked phone.",
  "Мужчины состоят на **воинском учёте**. Призыв касается возраста **от 18 до 30 лет**; верхняя граница поднята с 27 до 30 с 2024 года. Тем, чьим убеждениям военная служба противоречит, Конституция даёт право на **альтернативную гражданскую службу** — она дольше и проходит обычно в гражданских учреждениях.":
    "Men are on the **military register**. Conscription concerns ages **18 to 30**; the upper limit was raised from 27 to 30 in 2024. For those whose convictions are at odds with military service, the Constitution gives the right to **alternative civilian service** — it lasts longer and is usually done in civilian institutions.",
  "Отсутствие регистрации не лишает человека прав — ни на медицинскую помощь, ни на школу для ребёнка, ни на выборы. Но за проживание без неё дольше установленного срока предусмотрен штраф, так что это обязанность, а не разрешение.":
    "Having no registration does not take away a person's rights — not to medical care, not to a school place for a child, not to a vote. But living without it for longer than the set period carries a fine, so it is a duty rather than a permission.",
  // ru-byt
  "Быт и обычаи": "Everyday life and customs",
  "Почему это важно: правила из этого урока нигде не записаны, но нарушают их заметнее, чем законы. Разуться в прихожей и подарить нечётное число цветов — мелочи, по которым сразу видно, свой человек в доме или чужой.":
    "Why this matters: the rules in this lesson are written down nowhere, but breaking them shows more than breaking the law does. Taking your shoes off in the hall and giving an odd number of flowers are small things that say at once whether someone belongs in the house.",
  "Как обращаться": "How to address people",
  "У человека три имени: **имя, отчество и фамилия**. Отчество образуется от имени отца — **Иванович** и **Ивановна**, **Сергеевич** и **Сергеевна**. Обращение по имени и отчеству — уважительное: так говорят с преподавателем, врачом, начальником, с человеком старше себя.":
    "A person has three names: a **first name, a patronymic and a surname**. The patronymic is made from the father's name — **Ivanovich** and **Ivanovna**, **Sergeyevich** and **Sergeyevna**. Using the first name and patronymic is respectful: that is how you speak to a teacher, a doctor, a boss, or anyone older than you.",
  "Есть **«ты»** и **«вы»**. К незнакомому, к старшему, к должностному лицу — только «вы». Переход на «ты» предлагает старший или тот, кто выше по положению, и предложение это обычно произносят вслух.":
    "There is **ty** and **vy**. To a stranger, to an older person, to an official — only vy. The move to ty is offered by the older or more senior person, and the offer is usually spoken aloud.",
  "Полные имена в быту почти не звучат: **Александр** — Саша, **Мария** — Маша, **Дмитрий** — Дима, **Екатерина** — Катя. Уменьшительное имя не фамильярность, а норма между знакомыми; но с отчеством оно не сочетается.":
    "Full names are almost never used day to day: **Alexander** is Sasha, **Maria** is Masha, **Dmitry** is Dima, **Yekaterina** is Katya. A short name is not familiarity but the norm between people who know each other; it does not go with a patronymic, though.",
  "В гостях": "Visiting",
  "В квартире **разуваются в прихожей** — почти без исключений; гостю дают тапочки. Приходить с пустыми руками не принято: приносят торт, конфеты или бутылку к столу.":
    "In a flat people **take their shoes off in the hall** — almost without exception; a guest is given slippers. Arriving empty-handed is not done: people bring a cake, sweets or a bottle for the table.",
  "**Цветы дарят нечётным числом** — три, пять, семь. Чётное число несут на похороны, и ошибка эта считается неприятной. Большие букеты считают уже не по одному цветку, но привычка держится крепко.":
    "**Flowers are given in odd numbers** — three, five, seven. An even number is taken to a funeral, and the mistake is felt as an unpleasant one. Very large bouquets are no longer counted flower by flower, but the habit holds firm.",
  "Через порог не здороваются и не передают вещей — примета старая, но соблюдают её многие. Хозяин сначала зовёт войти, и только потом подают руку.":
    "People do not greet each other or hand things across a threshold — an old superstition, but many keep it. The host first asks you in, and only then is a hand offered.",
  "Сколько цветов принято дарить?": "How many flowers should be given?",
  "Нечётное число: три, пять, семь": "An odd number: three, five, seven",
  "Чётное число": "An even number",
  "Ровно дюжину": "Exactly a dozen",
  "Число значения не имеет": "The number does not matter",
  "Чётное число цветов несут на похороны. Очень большие букеты по одному цветку уже не считают, но правило держится.":
    "An even number of flowers is taken to a funeral. Very large bouquets are no longer counted flower by flower, but the rule holds.",
  "За столом": "At the table",
  "Обед состоит из **первого** — супа, **второго** и **третьего**, то есть напитка. Суп здесь не закуска, а полноценное блюдо: **борщ** со свёклой, **щи** из капусты, **уха** из рыбы, **солянка**.":
    "Dinner has a **first course** — soup — a **second** and a **third**, which is a drink. Soup here is not a starter but a full dish: **borshch** with beetroot, **shchi** of cabbage, **ukha** of fish, **solyanka**.",
  "Дальше — **пельмени**, **каша**, **картошка**, **блины**, **пироги**. Со **сметаной** едят почти всё, что можно ею заправить. Из напитков — **чай** в любое время дня, **компот**, **квас** и **морс**.":
    "Then come **pelmeni**, **kasha**, **potatoes**, **bliny** and **pies**. Almost anything that can take it is eaten with **smetana**. To drink there is **tea** at any time of day, **kompot**, **kvass** and **mors**.",
  "**Солёные огурцы**, квашеная капуста и варенье — заготовки, которые многие семьи делают сами, банками, на всю зиму. Отсюда и погреба на дачах, и балконы, заставленные в сентябре.":
    "**Pickled cucumbers**, sauerkraut and jam are preserves many families still make themselves, by the jar, for the whole winter. Hence the cellars at the dachas and the balconies stacked full in September.",
  "Дача и баня": "The dacha and the banya",
  "**Дача** — не загородный дом богатых, а массовое явление: участки по **шесть соток** раздавали работникам предприятий в советское время, и на них строили дом своими руками. Летом города заметно пустеют по выходным именно поэтому.":
    "The **dacha** is not a rich person's country house but something almost everybody had: plots of **six sotkas** were handed out to employees of enterprises in Soviet times, and people built a house on them with their own hands. That is exactly why the cities empty noticeably at weekends in summer.",
  "**Баня** — не только мытьё. Ходят компанией, парятся **веником** из берёзовых или дубовых веток, между заходами пьют чай. Суббота — традиционный банный день.":
    "The **banya** is not only about washing. People go as a group, take the steam with a **venik** of birch or oak twigs, and drink tea between rounds. Saturday is the traditional banya day.",
  "Зима и календарь": "Winter and the calendar",
  "**Новый год** — главный семейный праздник года, и по значению он здесь стоит выше Рождества. Ставят **ёлку**, ждут **Деда Мороза** и его внучку **Снегурочку**, под **бой курантов** в полночь провожают старый год. На столе — **оливье**, селёдка под шубой и мандарины; **новогодние каникулы** длятся с 1 по 8 января.":
    "**New Year** is the main family holiday of the year, and here it counts for more than Christmas. People put up a **fir tree**, wait for **Ded Moroz** and his granddaughter **Snegurochka**, and see the old year out on the **stroke of the Kremlin clock** at midnight. On the table there is **olivier salad**, herring under a fur coat and tangerines; the **New Year holidays** run from 1 to 8 January.",
  "Зимой работает **центральное отопление**: тепло идёт в дома из общей котельной, а не от собственного котла в квартире. Отопительный сезон начинают, когда среднесуточная температура **пять дней подряд держится ниже +8 °C** — то есть по погоде, а не по календарю.":
    "In winter there is **district heating**: the warmth comes into homes from a shared boiler house, not from a boiler in the flat. The heating season starts when the average daily temperature **stays below +8 °C for five days running** — by the weather, that is, not by the calendar.",
  "Кто по традиции приходит вместе с Дедом Морозом?": "Who traditionally comes with Ded Moroz?",
  "Снегурочка, его внучка": "Snegurochka, his granddaughter",
  "Его жена": "His wife",
  "Никто, он приходит один": "Nobody, he comes alone",
  "Помощники-эльфы": "Elf helpers",
  "Пару Дед Мороз и Снегурочка знают все, и обоих зовут на детские праздники. Подарки кладут под ёлку, а не в чулки.":
    "Everyone knows the pair of Ded Moroz and Snegurochka, and both are invited to children's parties. Presents go under the tree, not in stockings.",
  "По какому признаку начинают отопительный сезон?": "What decides when the heating season starts?",
  "Когда среднесуточная температура пять дней держится ниже +8 °C":
    "When the average daily temperature stays below +8 °C for five days",
  "С первого октября по всей стране": "On the first of October across the whole country",
  "Когда об этом попросят жильцы дома": "When the residents of a building ask for it",
  "Когда выпадет снег": "When the snow falls",
  "Отопление идёт из общей котельной, а не от котла в квартире, поэтому и включают его сразу на весь район — по погоде, а не по календарю.":
    "The heat comes from a shared boiler house rather than a boiler in the flat, so it is turned on for a whole district at once — by the weather, not by the calendar.",
  "Каждый день": "Every day",
  "Подъезд": "The podyezd",
  "Общий вход в многоквартирный дом, обычно с домофоном. Соседи по подъезду — отдельный круг знакомств, и объявления вешают именно там.":
    "The shared entrance to a block of flats, usually with an entryphone. The neighbours in your entrance are a social circle of their own, and notices go up right there.",
  "Метро": "The metro",
  "Работает в Москве, Санкт-Петербурге, Нижнем Новгороде, Новосибирске, Самаре, Екатеринбурге и Казани. В остальных городах — автобусы, троллейбусы и трамваи.":
    "It runs in Moscow, St Petersburg, Nizhny Novgorod, Novosibirsk, Samara, Yekaterinburg and Kazan. Other cities have buses, trolleybuses and trams.",
  "Электричка": "The elektrichka",
  "Пригородный поезд. Ими ездят на дачу и на работу из области, и расписание знают наизусть.":
    "The suburban train. People take them to the dacha and in to work from the region, and know the timetable by heart.",
  "Маршрутка": "The marshrutka",
  "Микроавтобус по фиксированному маршруту, останавливающийся по просьбе. Билета нет — платят при входе или при выходе.":
    "A minibus on a fixed route that stops when you ask. There is no ticket — you pay on getting on or getting off.",
  "Тапочки в прихожей и просьба разуться — не проверка гостя на послушание. Улицу зимой посыпают реагентами, и хозяева берегут пол, а не проверяют манеры.":
    "Slippers in the hall and being asked to take your shoes off are not a test of a guest's obedience. The streets are salted in winter, and the hosts are protecting their floor, not checking your manners.",
};
