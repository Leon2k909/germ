/**
 * Polish for the Zhizn v Rossii course cards, headings and questions.
 *
 * The seventh and last country course a Polish reader can open, and the one
 * where a missing table actually stopped a reader rather than merely slowing
 * them down: in front of a Latin alphabet a Polish reader can guess at an
 * Italian or a Spanish sentence, in front of Cyrillic they cannot.
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
 * Covers the QUIZZES as well as the lesson text. A lesson that ends in three
 * untranslated questions is not a lesson somebody can finish.
 *
 * WHAT STAYS RUSSIAN, and it follows ZHIZN_V_ROSSII_DE and _FR so that a
 * reader who switches between the tables does not meet one word glossed two
 * ways. Institutions take their Polish conventional form where one exists —
 * the Государственная Дума is the Duma Państwowa, the Совет Федерации the
 * Rada Federacji, the Конституционный Суд the Sąd Konstytucyjny. Where a word
 * is the answer the exam wants and Polish has no equivalent — EGE, OGE, MROT,
 * SNILS, INN, OMS — the Polish gives the meaning and keeps the abbreviation
 * beside it. And the everyday words the course teaches keep their Russian and
 * gain the meaning next to them: propiska against ewidencja meldunkowa,
 * dacza, bania, wienik, marszrutka, elektryczka, barszcz, szczi, ucha,
 * pielmieni, Dziadek Mróz, Śnieżynka.
 *
 * Transliteration follows Polish usage, not German or English: Czajkowski and
 * not Tschaikowski, Jurij Gagarin and not Yuri Gagarin, Jekaterynburg and not
 * Yekaterinburg. A reader who looks a name up will be looking it up in
 * Polish. Where Polish has a settled exonym it is used — Moskwa, Petersburg,
 * Nowogród, Włodzimierz, Bajkał, Wołga — and where it does not, the Polish
 * transliteration of the Russian stands: Wostocznyj, Plesieck, Ojmiakon.
 *
 * NO CYRILLIC IN A VALUE. A Polish sentence keeps none, proper names
 * included, and check-pl-country-translations enforces that for this row.
 */
export const ZHIZN_V_ROSSII_PL: Record<string, string> = {
  "История, устройство и повседневная жизнь: как устроена страна.":
    "Historia, ustrój i życie codzienne: jak urządzony jest ten kraj.",
  "Государственные символы": "Symbole państwowe",
  "Символы и Конституция": "Symbole i Konstytucja",
  "Почему начинаем отсюда: символы встречаются каждый день — на здании администрации, на паспорте, на форме сборной. Через них проще всего войти во всё остальное.":
    "Dlaczego zaczynamy od tego: symbole spotyka się codziennie — na budynku urzędu, w paszporcie, na koszulce reprezentacji. Przez nie najłatwiej wejść w całą resztę.",
  "Флаг": "Flaga",
  "Государственный флаг — прямоугольное полотнище из трёх равных горизонтальных полос: **белой сверху**, **синей посередине** и **красной снизу**. Порядок закреплён **федеральным конституционным законом 2000 года**, а сам триколор появился при **Петре I** — сначала как флаг торговых судов.":
    "Flaga państwowa to prostokątny płat z trzech równych poziomych pasów: **białego u góry**, **niebieskiego pośrodku** i **czerwonego na dole**. Kolejność utrwala **federalna ustawa konstytucyjna z 2000 roku**, a sam trójkolor pojawił się za **Piotra I** — najpierw jako bandera statków handlowych.",
  "Значения цветам официально не присвоены. Толкования, которые слышишь чаще всего — белый как чистота, синий как верность, красный как отвага — появились позже и в законе не записаны. **22 августа** отмечается День Государственного флага.":
    "Kolorom nie przypisano oficjalnie żadnych znaczeń. Wykładnie, które słyszy się najczęściej — biel jako czystość, błękit jako wierność, czerwień jako męstwo — powstały później i nie są zapisane w ustawie. **22 sierpnia** obchodzi się Dzień Flagi Państwowej.",
  "Герб": "Herb",
  "Герб — **двуглавый орёл**, золотой, на красном щите. Над головами — **три короны**, в лапах **скипетр и держава**, на груди — всадник, поражающий копьём дракона. Двуглавый орёл пришёл в русскую геральдику в конце **XV века**, при **Иване III**, а нынешний вид герб получил в **1993 году**.":
    "Herb to **dwugłowy orzeł**, złoty, na czerwonej tarczy. Nad głowami — **trzy korony**, w szponach **berło i jabłko**, na piersi — jeździec przebijający włócznią smoka. Dwugłowy orzeł wszedł do heraldyki ruskiej pod koniec **XV wieku**, za **Iwana III**, a dzisiejszą postać herb uzyskał w **1993 roku**.",
  "Три короны": "Trzy korony",
  "Сегодня их толкуют как символ суверенитета Российской Федерации и её частей.":
    "Dziś tłumaczy się je jako symbol suwerenności Federacji Rosyjskiej i jej części.",
  "Скипетр и держава": "Berło i jabłko",
  "Знаки государственной власти и единства страны.": "Znaki władzy państwowej i jedności kraju.",
  "Всадник": "Jeździec",
  "На груди орла — древний московский герб. Его связывают с Георгием Победоносцем.":
    "Na piersi orła — dawny herb moskiewski. Wiąże się go ze świętym Jerzym.",
  "Красный щит": "Czerwona tarcza",
  "Цвет, на котором орёл изображался ещё в допетровской геральдике.":
    "Barwa, na której orła przedstawiano jeszcze w heraldyce przedpiotrowej.",
  "В каком порядке идут полосы государственного флага сверху вниз?":
    "W jakiej kolejności biegną pasy flagi państwowej z góry na dół?",
  "Красная, синяя, белая": "Czerwony, niebieski, biały",
  "Белая, синяя, красная": "Biały, niebieski, czerwony",
  "Синяя, белая, красная": "Niebieski, biały, czerwony",
  "Белая, красная, синяя": "Biały, czerwony, niebieski",
  "Белая сверху, синяя посередине, красная снизу. Порядок закреплён федеральным конституционным законом, и флаг с переставленными полосами — просто неправильный.":
    "Biały u góry, niebieski pośrodku, czerwony na dole. Kolejność utrwala federalna ustawa konstytucyjna, a flaga z przestawionymi pasami jest po prostu błędna.",
  "Гимн": "Hymn",
  "Музыку написал **Александр Александров**: та же мелодия звучала как гимн Советского Союза с **1944 года**. Слова — **Сергея Михалкова**, и он писал их трижды: в 1943, в 1977 и в **2000 году**, когда мелодия вернулась уже к новому государству. Действующий текст начинается словами «Россия — священная наша держава».":
    "Muzykę napisał **Aleksandr Aleksandrow**: ta sama melodia była hymnem Związku Radzieckiego od **1944 roku**. Słowa są **Siergieja Michałkowa**, który pisał je trzykrotnie: w 1943, w 1977 i w **2000 roku**, kiedy melodia wróciła już do nowego państwa. Obowiązujący tekst zaczyna się słowami „Rosja — nasze święte mocarstwo”.",
  "Между 1990 и 2000 годом гимном была «Патриотическая песня» Глинки — без слов. Текста к ней так и не утвердили, и это одна из причин, по которым вернулись к прежней мелодии.":
    "Między 1990 a 2000 rokiem hymnem była „Pieśń patriotyczna” Glinki — bez słów. Tekstu do niej tak i nie zatwierdzono, a to jeden z powodów, dla których wrócono do dawnej melodii.",
  "Кто написал музыку государственного гимна?": "Kto napisał muzykę hymnu państwowego?",
  "Михаил Глинка": "Michaił Glinka",
  "Александр Александров": "Aleksandr Aleksandrow",
  "Сергей Михалков": "Siergiej Michałkow",
  "Пётр Чайковский": "Piotr Czajkowski",
  "Музыка Александрова, слова Михалкова. Мелодия Глинки была гимном с 1990 по 2000 год, но так и осталась без слов.":
    "Muzyka Aleksandrowa, słowa Michałkowa. Melodia Glinki była hymnem od 1990 do 2000 roku, ale tak i została bez słów.",
  "Столица, язык и главная дата": "Stolica, język i główna data",
  "Столица — **Москва**; это записано в **статье 70** Конституции. Государственный язык на всей территории — **русский** (статья 68), при этом республики вправе устанавливать свои государственные языки.":
    "Stolicą jest **Moskwa**; zapisano to w **artykule 70** Konstytucji. Językiem państwowym na całym terytorium jest **rosyjski** (artykuł 68), przy czym republiki mają prawo ustanawiać własne języki państwowe.",
  "**12 июня** — **День России**. В этот день в **1990 году** была принята Декларация о государственном суверенитете РСФСР. Праздник несколько раз менял название: сначала он назывался Днём принятия декларации, потом Днём независимости, и лишь с 2002 года — Днём России.":
    "**12 czerwca** to **Dzień Rosji**. Tego dnia w **1990 roku** przyjęto Deklarację o suwerenności państwowej RSFRR. Święto kilka razy zmieniało nazwę: najpierw nazywało się Dniem przyjęcia deklaracji, potem Dniem Niepodległości, a dopiero od 2002 roku — Dniem Rosji.",
  "Что отмечают 12 июня?": "Co obchodzi się 12 czerwca?",
  "День Конституции": "Dzień Konstytucji",
  "День России": "Dzień Rosji",
  "День народного единства": "Dzień Jedności Narodowej",
  "День Государственного флага": "Dzień Flagi Państwowej",
  "12 июня — День России, в память о Декларации о государственном суверенитете 1990 года. День флага — 22 августа, а День народного единства — 4 ноября.":
    "12 czerwca to Dzień Rosji, na pamiątkę Deklaracji o suwerenności państwowej z 1990 roku. Dzień flagi przypada 22 sierpnia, a Dzień Jedności Narodowej 4 listopada.",
  "**День России** и **День народного единства** — разные праздники и разные месяцы: 12 июня и 4 ноября. Первый связан с 1990 годом, второй — с событиями 1612 года.":
    "**Dzień Rosji** i **Dzień Jedności Narodowej** to różne święta i różne miesiące: 12 czerwca i 4 listopada. Pierwsze wiąże się z rokiem 1990, drugie z wydarzeniami 1612 roku.",
  "Конституция 1993 года": "Konstytucja z 1993 roku",
  "Почему это важно: почти всё, о чём пойдёт речь дальше — президент, парламент, суды, субъекты федерации, языки — записано в одном документе 1993 года. Кто знает его в общих чертах, у того уже есть карта всего курса.":
    "Dlaczego to ważne: prawie wszystko, o czym będzie dalej mowa — prezydent, parlament, sądy, podmioty federacji, języki — jest zapisane w jednym dokumencie z 1993 roku. Kto zna go z grubsza, ma już mapę całego kursu.",
  "Как она появилась": "Jak powstała",
  "Конституция принята **всенародным голосованием 12 декабря 1993 года** и вступила в силу со дня официального опубликования — **25 декабря 1993 года**. Она пришла на смену Конституции РСФСР 1978 года, которую к тому времени правили десятки раз.":
    "Konstytucję przyjęto w **głosowaniu ogólnonarodowym 12 grudnia 1993 roku**, a weszła w życie z dniem oficjalnego ogłoszenia — **25 grudnia 1993 roku**. Zastąpiła Konstytucję RSFRR z 1978 roku, poprawianą do tego czasu dziesiątki razy.",
  "**12 декабря** — День Конституции. С 2005 года это не выходной день, но дата осталась памятной.":
    "**12 grudnia** to Dzień Konstytucji. Od 2005 roku nie jest dniem wolnym, ale data pozostała pamiętna.",
  "Как она устроена": "Jak jest zbudowana",
  "Текст состоит из **преамбулы** и **двух разделов**. Первый раздел — это **девять глав** и **137 статей**; второй, короткий, содержит заключительные и переходные положения.":
    "Tekst składa się z **preambuły** i **dwóch działów**. Pierwszy dział to **dziewięć rozdziałów** i **137 artykułów**; drugi, krótki, zawiera przepisy końcowe i przejściowe.",
  "Глава 1 · Основы конституционного строя": "Rozdział 1 · Podstawy ustroju konstytucyjnego",
  "Статьи 1–16. Что такое Россия, где источник власти, разделение властей, светское государство.":
    "Artykuły 1–16. Czym jest Rosja, gdzie leży źródło władzy, podział władz, państwo świeckie.",
  "Глава 2 · Права и свободы человека": "Rozdział 2 · Prawa i wolności człowieka",
  "Статьи 17–64. Самая длинная глава: личные, политические, социальные права и обязанности.":
    "Artykuły 17–64. Najdłuższy rozdział: prawa osobiste, polityczne, socjalne oraz obowiązki.",
  "Глава 3 · Федеративное устройство": "Rozdział 3 · Ustrój federalny",
  "Статьи 65–79. Перечень субъектов, разграничение полномочий, языки.":
    "Artykuły 65–79. Wykaz podmiotów, rozgraniczenie kompetencji, języki.",
  "Главы 4–8": "Rozdziały 4–8",
  "Президент, Федеральное Собрание, Правительство, судебная власть и прокуратура, местное самоуправление.":
    "Prezydent, Zgromadzenie Federalne, rząd, władza sądownicza i prokuratura, samorząd lokalny.",
  "Когда была принята Конституция Российской Федерации?":
    "Kiedy przyjęto Konstytucję Federacji Rosyjskiej?",
  "12 июня 1990 года": "12 czerwca 1990 roku",
  "12 декабря 1993 года": "12 grudnia 1993 roku",
  "25 декабря 1993 года": "25 grudnia 1993 roku",
  "4 ноября 1993 года": "4 listopada 1993 roku",
  "Принята всенародным голосованием 12 декабря, вступила в силу 25 декабря — со дня опубликования. День Конституции отмечают по первой из этих дат.":
    "Przyjęta w głosowaniu ogólnonarodowym 12 grudnia, weszła w życie 25 grudnia — z dniem ogłoszenia. Dzień Konstytucji obchodzi się według pierwszej z tych dat.",
  "Первые статьи": "Pierwsze artykuły",
  "**Статья 1** определяет Россию как **демократическое федеративное правовое государство с республиканской формой правления**. Четыре характеристики в одном предложении, и каждая имеет продолжение в отдельной главе.":
    "**Artykuł 1** określa Rosję jako **demokratyczne federalne państwo prawne o republikańskiej formie rządów**. Cztery cechy w jednym zdaniu, a każda ma ciąg dalszy w osobnym rozdziale.",
  "**Статья 2** называет человека, его права и свободы **высшей ценностью**, а признание и защиту этих прав — обязанностью государства. **Статья 3** говорит, что носителем суверенитета и **единственным источником власти** является **многонациональный народ** Российской Федерации.":
    "**Artykuł 2** nazywa człowieka, jego prawa i wolności **najwyższą wartością**, a uznanie i ochronę tych praw — obowiązkiem państwa. **Artykuł 3** mówi, że nosicielem suwerenności i **jedynym źródłem władzy** jest **wielonarodowy naród** Federacji Rosyjskiej.",
  "**Статья 10** закрепляет разделение властей на законодательную, исполнительную и судебную. **Статья 13** устанавливает идеологическое многообразие: никакая идеология не может быть государственной или обязательной. **Статья 14** объявляет Россию **светским государством**: религиозные объединения отделены от государства и равны перед законом.":
    "**Artykuł 10** utrwala podział władz na ustawodawczą, wykonawczą i sądowniczą. **Artykuł 13** ustanawia różnorodność ideologiczną: żadna ideologia nie może być państwowa ani obowiązkowa. **Artykuł 14** ogłasza Rosję **państwem świeckim**: związki wyznaniowe są oddzielone od państwa i równe wobec prawa.",
  "Сколько статей содержит первый раздел Конституции?":
    "Ile artykułów zawiera pierwszy dział Konstytucji?",
  "Шестьдесят четыре": "Sześćdziesiąt cztery",
  "Сто тридцать семь": "Sto trzydzieści siedem",
  "Сто шестьдесят девять": "Sto sześćdziesiąt dziewięć",
  "Двести": "Dwieście",
  "Сто тридцать семь статей в девяти главах. Статья 64 завершает главу о правах и свободах, но не первый раздел целиком.":
    "Sto trzydzieści siedem artykułów w dziewięciu rozdziałach. Artykuł 64 zamyka rozdział o prawach i wolnościach, ale nie cały pierwszy dział.",
  "Что нельзя изменить обычным путём": "Czego nie można zmienić zwykłą drogą",
  "Конституция разделяет **поправки** и **пересмотр**. Главы **3–8** изменяются поправками, которые принимаются как федеральный конституционный закон и должны быть одобрены не менее чем **двумя третями субъектов** Федерации.":
    "Konstytucja rozróżnia **poprawki** i **rewizję**. Rozdziały **3–8** zmienia się poprawkami, które przyjmuje się jako federalną ustawę konstytucyjną i które muszą zatwierdzić nie mniej niż **dwie trzecie podmiotów** Federacji.",
  "А вот главы **1, 2 и 9** — основы строя, права и свободы, и сам порядок изменения — **не могут быть пересмотрены Федеральным Собранием**. Для их изменения статья 135 требует созвать **Конституционное Собрание**, которое либо подтвердит неизменность Конституции, либо разработает новую. Такого собрания никогда не созывали, и закона о нём до сих пор нет.":
    "Natomiast rozdziałów **1, 2 i 9** — podstaw ustroju, praw i wolności oraz samego trybu zmiany — **Zgromadzenie Federalne nie może zrewidować**. Do ich zmiany artykuł 135 wymaga zwołania **Zgromadzenia Konstytucyjnego**, które albo potwierdzi niezmienność Konstytucji, albo opracuje nową. Takiego zgromadzenia nigdy nie zwołano, a ustawy o nim do dziś nie ma.",
  "Крупные изменения вносились в **2008** году — о сроках полномочий, в **2014** — об объединении высших судов, и в **2020** — большим пакетом поправок к главам с третьей по восьмую.":
    "Duże zmiany wnoszono w **2008 roku** — o długości kadencji, w **2014** — o połączeniu sądów najwyższych, i w **2020** — wielkim pakietem poprawek do rozdziałów od trzeciego do ósmego.",
  "Какие главы Конституции не может пересмотреть Федеральное Собрание?":
    "Których rozdziałów Konstytucji Zgromadzenie Federalne nie może zrewidować?",
  "Первая, вторая и девятая": "Pierwszego, drugiego i dziewiątego",
  "Только первая": "Tylko pierwszego",
  "С третьей по восьмую": "Od trzeciego do ósmego",
  "Никакие: Конституция неизменна": "Żadnych: Konstytucja jest niezmienna",
  "Главы 1, 2 и 9 — основы конституционного строя, права и свободы и сам порядок изменения. Для них нужно Конституционное Собрание, которое ни разу не созывалось.":
    "Rozdziałów 1, 2 i 9 — podstaw ustroju konstytucyjnego, praw i wolności oraz samego trybu zmiany. Do nich potrzebne jest Zgromadzenie Konstytucyjne, którego ani razu nie zwołano.",
  "**Поправка** и **пересмотр** — не одно и то же. Поправками меняют главы с третьей по восьмую; пересмотр касается глав 1, 2 и 9 и требует совсем другой процедуры.":
    "**Poprawka** i **rewizja** to nie to samo. Poprawkami zmienia się rozdziały od trzeciego do ósmego; rewizja dotyczy rozdziałów 1, 2 i 9 i wymaga zupełnie innej procedury.",
  "Права и свободы человека": "Prawa i wolności człowieka",
  "Почему это важно: вторая глава — самая длинная в Конституции, и она написана о человеке, а не о гражданине. Большинство её статей начинается со слов «каждый» или «никто», и это различие имеет смысл.":
    "Dlaczego to ważne: drugi rozdział jest najdłuższy w Konstytucji i napisano go o człowieku, a nie o obywatelu. Większość jego artykułów zaczyna się od słów „każdy” albo „nikt”, i ta różnica ma znaczenie.",
  "Каждый и гражданин": "Każdy i obywatel",
  "**Статья 17** говорит, что основные права и свободы принадлежат каждому **от рождения** и неотчуждаемы. **Статья 19** закрепляет равенство перед законом и судом независимо от пола, расы, национальности, языка, происхождения, имущественного и должностного положения, места жительства, отношения к религии и убеждений.":
    "**Artykuł 17** mówi, że podstawowe prawa i wolności przysługują każdemu **od urodzenia** i są niezbywalne. **Artykuł 19** utrwala równość wobec prawa i sądu niezależnie od płci, rasy, narodowości, języka, pochodzenia, stanu majątkowego i zajmowanego stanowiska, miejsca zamieszkania, stosunku do religii i przekonań.",
  "Читая главу, стоит обращать внимание на первое слово статьи. Там, где написано **«каждый»**, право принадлежит и иностранцу; там, где **«граждане Российской Федерации»**, — только гражданам. Так устроены, например, избирательные права и право на доступ к государственной службе.":
    "Czytając rozdział, warto zwracać uwagę na pierwsze słowo artykułu. Tam, gdzie napisano **„każdy”**, prawo przysługuje także cudzoziemcowi; tam, gdzie **„obywatele Federacji Rosyjskiej”** — tylko obywatelom. Tak są zbudowane na przykład prawa wyborcze i prawo dostępu do służby państwowej.",
  "Личные права": "Prawa osobiste",
  "**Статья 20** закрепляет право на жизнь. Смертная казнь в тексте упомянута как исключительная мера, но фактически не применяется: с середины девяностых действует **мораторий**, подтверждённый решениями Конституционного Суда.":
    "**Artykuł 20** utrwala prawo do życia. Karę śmierci wspomniano w tekście jako środek wyjątkowy, ale faktycznie się jej nie stosuje: od połowy lat dziewięćdziesiątych obowiązuje **moratorium**, potwierdzone orzeczeniami Sądu Konstytucyjnego.",
  "**Статья 22** гарантирует свободу и личную неприкосновенность: **до судебного решения** человек не может быть задержан на срок **более 48 часов**. **Статья 23** защищает частную жизнь и тайну переписки, **статья 25** объявляет **неприкосновенным жилище**.":
    "**Artykuł 22** gwarantuje wolność i nietykalność osobistą: **do orzeczenia sądu** człowieka nie można zatrzymać na dłużej niż **48 godzin**. **Artykuł 23** chroni życie prywatne i tajemnicę korespondencji, a **artykuł 25** ogłasza **nietykalność mieszkania**.",
  "На какой срок можно задержать человека до судебного решения?":
    "Na jaki czas można zatrzymać człowieka przed orzeczeniem sądu?",
  "На 24 часа": "Na 24 godziny",
  "На 48 часов": "Na 48 godzin",
  "На 72 часа": "Na 72 godziny",
  "Срок не установлен": "Termin nie jest ustalony",
  "Статья 22 устанавливает предел в 48 часов. По истечении этого срока человек должен быть либо освобождён, либо его задержание должен продлить суд.":
    "Artykuł 22 ustala granicę 48 godzin. Po upływie tego czasu człowiek musi zostać zwolniony albo jego zatrzymanie musi przedłużyć sąd.",
  "Свобода мысли, слова и веры": "Wolność myśli, słowa i wiary",
  "**Статья 28** гарантирует свободу совести и вероисповедания, включая право не исповедовать никакой религии. **Статья 29** закрепляет свободу мысли и слова, право свободно искать, получать и распространять информацию — и содержит короткую и прямую формулу: **цензура запрещается**.":
    "**Artykuł 28** gwarantuje wolność sumienia i wyznania, łącznie z prawem do niewyznawania żadnej religii. **Artykuł 29** utrwala wolność myśli i słowa oraz prawo do swobodnego poszukiwania, otrzymywania i rozpowszechniania informacji — i zawiera krótką, wprost wyrażoną formułę: **cenzura jest zakazana**.",
  "**Статья 26** даёт каждому право **определять и указывать свою национальность** — и добавляет, что никто не может быть принуждён к её указанию. Там же — право пользоваться родным языком и свободно выбирать язык общения и творчества. Для страны, где живут сотни народов, это не формальность.":
    "**Artykuł 26** daje każdemu prawo do **określania i wskazywania swojej narodowości** — i dodaje, że nikogo nie można zmusić do jej wskazania. Tam też stoi prawo do posługiwania się językiem ojczystym i do swobodnego wyboru języka porozumiewania się i twórczości. Dla kraju, w którym żyją setki narodów, to nie formalność.",
  "Что прямо запрещает статья 29 Конституции?": "Czego wprost zakazuje artykuł 29 Konstytucji?",
  "Иностранные средства массовой информации": "Zagranicznych środków masowego przekazu",
  "Цензуру": "Cenzury",
  "Публичные собрания": "Zgromadzeń publicznych",
  "Анонимные публикации": "Publikacji anonimowych",
  "Формулировка короткая: цензура запрещается. Та же статья закрепляет свободу мысли и слова и право искать, получать и распространять информацию.":
    "Sformułowanie jest krótkie: cenzura jest zakazana. Ten sam artykuł utrwala wolność myśli i słowa oraz prawo do poszukiwania, otrzymywania i rozpowszechniania informacji.",
  "Социальные права": "Prawa socjalne",
  "Труд · статья 37": "Praca · artykuł 37",
  "Труд свободен, принудительный труд запрещён. Отсюда же право на отдых и на оплачиваемый отпуск.":
    "Praca jest wolna, praca przymusowa zakazana. Stąd też prawo do wypoczynku i do płatnego urlopu.",
  "Жилище · статья 40": "Mieszkanie · artykuł 40",
  "Никто не может быть произвольно лишён жилища; малоимущим оно предоставляется бесплатно или за доступную плату.":
    "Nikogo nie można samowolnie pozbawić mieszkania; niezamożnym udostępnia się je bezpłatnie albo za przystępną opłatą.",
  "Здоровье · статья 41": "Zdrowie · artykuł 41",
  "Медицинская помощь в государственных и муниципальных учреждениях оказывается гражданам бесплатно.":
    "Pomoc medyczna w placówkach państwowych i komunalnych jest dla obywateli bezpłatna.",
  "Образование · статья 43": "Oświata · artykuł 43",
  "Дошкольное, основное общее и среднее профессиональное — общедоступны и бесплатны.":
    "Przedszkolna, podstawowa ogólna i średnia zawodowa są powszechnie dostępne i bezpłatne.",
  "Гарантии в суде": "Gwarancje przed sądem",
  "**Статья 48** даёт право на квалифицированную юридическую помощь, в предусмотренных законом случаях — бесплатную. **Статья 49** закрепляет **презумпцию невиновности**: обвиняемый считается невиновным, пока вина не доказана вступившим в законную силу приговором суда, и **неустранимые сомнения толкуются в его пользу**.":
    "**Artykuł 48** daje prawo do wykwalifikowanej pomocy prawnej, a w przypadkach przewidzianych ustawą — bezpłatnej. **Artykuł 49** utrwala **domniemanie niewinności**: oskarżonego uważa się za niewinnego, dopóki winy nie udowodni prawomocny wyrok sądu, a **wątpliwości, których nie da się usunąć, tłumaczy się na jego korzyść**.",
  "**Статья 51** содержит правило, которое знают даже те, кто никогда не открывал Конституцию: **никто не обязан свидетельствовать против себя самого, своего супруга и близких родственников**.":
    "**Artykuł 51** zawiera regułę, którą znają nawet ci, którzy nigdy nie otwierali Konstytucji: **nikt nie ma obowiązku zeznawać przeciw sobie samemu, swojemu małżonkowi i bliskim krewnym**.",
  "Что закрепляет статья 49 Конституции?": "Co utrwala artykuł 49 Konstytucji?",
  "Право на жилище": "Prawo do mieszkania",
  "Презумпцию невиновности": "Domniemanie niewinności",
  "Свободу передвижения": "Wolność poruszania się",
  "Право на образование": "Prawo do nauki",
  "Обвиняемый считается невиновным, пока его вина не доказана приговором суда, и неустранимые сомнения толкуются в его пользу. Статья 51 добавляет право не свидетельствовать против себя и близких.":
    "Oskarżonego uważa się za niewinnego, dopóki winy nie udowodni wyrok sądu, a wątpliwości, których nie da się usunąć, tłumaczy się na jego korzyść. Artykuł 51 dodaje prawo do nieskładania zeznań przeciw sobie i bliskim.",
  "Права, записанные словом **«каждый»**, принадлежат и иностранным гражданам. Только там, где статья говорит **«граждане Российской Федерации»**, речь идёт исключительно о гражданах — прежде всего это избирательные права.":
    "Prawa zapisane słowem **„każdy”** przysługują także cudzoziemcom. Tylko tam, gdzie artykuł mówi **„obywatele Federacji Rosyjskiej”**, chodzi wyłącznie o obywateli — przede wszystkim są to prawa wyborcze.",
  "Обязанности и гражданство": "Obowiązki i obywatelstwo",
  "Почему это важно: Конституция не только раздаёт права. В той же второй главе записаны обязанности, а гражданство — та дверь, через которую человек входит в полный объём и тех и других.":
    "Dlaczego to ważne: Konstytucja nie tylko rozdaje prawa. W tym samym drugim rozdziale zapisano obowiązki, a obywatelstwo to drzwi, przez które człowiek wchodzi w pełny zakres jednych i drugich.",
  "Обязанности": "Obowiązki",
  "Их немного, и они разбросаны по главе 2. **Статья 57**: каждый обязан платить законно установленные **налоги и сборы**, причём законы, ухудшающие положение налогоплательщиков, обратной силы не имеют. **Статья 58**: каждый обязан **сохранять природу** и бережно относиться к природным богатствам.":
    "Jest ich niewiele i są rozrzucone po rozdziale 2. **Artykuł 57**: każdy ma obowiązek płacić ustanowione zgodnie z prawem **podatki i opłaty**, przy czym ustawy pogarszające położenie podatników nie działają wstecz. **Artykuł 58**: każdy ma obowiązek **chronić przyrodę** i dbać o bogactwa naturalne.",
  "**Статья 59** называет защиту Отечества **долгом и обязанностью гражданина**. Военная служба несётся по федеральному закону; если убеждениям или вероисповеданию человека несение военной службы противоречит, он имеет право на **альтернативную гражданскую службу**.":
    "**Artykuł 59** nazywa obronę Ojczyzny **powinnością i obowiązkiem obywatela**. Służbę wojskową pełni się według ustawy federalnej; jeśli pełnienie służby wojskowej przeczy przekonaniom albo wyznaniu człowieka, ma on prawo do **zastępczej służby cywilnej**.",
  "Налоги · статья 57": "Podatki · artykuł 57",
  "Обязанность, которая исполняется каждый год и касается всех.":
    "Obowiązek wypełniany co roku i dotyczący wszystkich.",
  "Природа · статья 58": "Przyroda · artykuł 58",
  "Сохранять природу и бережно относиться к природным богатствам.":
    "Chronić przyrodę i dbać o bogactwa naturalne.",
  "Защита Отечества · статья 59": "Obrona Ojczyzny · artykuł 59",
  "Долг и обязанность гражданина, с правом на альтернативную гражданскую службу.":
    "Powinność i obowiązek obywatela, z prawem do zastępczej służby cywilnej.",
  "Забота о семье · статья 38": "Troska o rodzinę · artykuł 38",
  "Забота о детях — обязанность родителей, а забота о нетрудоспособных родителях — обязанность взрослых детей.":
    "Troska o dzieci jest obowiązkiem rodziców, a troska o niezdolnych do pracy rodziców — obowiązkiem dorosłych dzieci.",
  "К этому добавляются обязанность получить **основное общее образование** (статья 43, причём обеспечивают её родители) и обязанность **заботиться о памятниках истории и культуры** (статья 44).":
    "Do tego dochodzą obowiązek uzyskania **podstawowego wykształcenia ogólnego** (artykuł 43, przy czym zapewniają je rodzice) i obowiązek **dbania o zabytki historii i kultury** (artykuł 44).",
  "Какая статья Конституции обязывает платить налоги и сборы?":
    "Który artykuł Konstytucji zobowiązuje do płacenia podatków i opłat?",
  "Статья 43": "Artykuł 43",
  "Статья 57": "Artykuł 57",
  "Статья 58": "Artykuł 58",
  "Статья 59": "Artykuł 59",
  "Статья 57. Статья 58 — о сохранении природы, статья 59 — о защите Отечества, статья 43 — об образовании: четыре обязанности, которые легко перепутать.":
    "Artykuł 57. Artykuł 58 dotyczy ochrony przyrody, artykuł 59 obrony Ojczyzny, a artykuł 43 nauki: cztery obowiązki, które łatwo pomylić.",
  "Гражданство": "Obywatelstwo",
  "**Статья 6** говорит, что гражданство России **едино и равно независимо от оснований приобретения**: тот, кто получил его по рождению, и тот, кто был принят в гражданство, имеют одни и те же права. Гражданина нельзя лишить гражданства или права изменить его.":
    "**Artykuł 6** mówi, że obywatelstwo Rosji jest **jednolite i równe niezależnie od podstaw nabycia**: ten, kto uzyskał je przez urodzenie, i ten, kogo do niego przyjęto, mają te same prawa. Obywatela nie można pozbawić obywatelstwa ani prawa do jego zmiany.",
  "**Статья 62** допускает **двойное гражданство** — гражданин России может иметь гражданство иностранного государства, и это само по себе не умаляет его прав. Та же статья распространяет на иностранцев и лиц без гражданства права и обязанности граждан, кроме случаев, установленных законом.":
    "**Artykuł 62** dopuszcza **podwójne obywatelstwo** — obywatel Rosji może mieć obywatelstwo państwa obcego, a to samo w sobie nie umniejsza jego praw. Ten sam artykuł rozciąga na cudzoziemców i bezpaństwowców prawa i obowiązki obywateli, poza przypadkami określonymi w ustawie.",
  "Как принимают в гражданство": "Jak przyjmuje się do obywatelstwa",
  "Порядок установлен **федеральным законом о гражданстве**, принятым в **2023 году** и заменившим закон 2002 года. Гражданство приобретается **по рождению**, **в результате приёма** и по иным основаниям.":
    "Tryb ustala **federalna ustawa o obywatelstwie**, przyjęta w **2023 roku** i zastępująca ustawę z 2002. Obywatelstwo nabywa się **przez urodzenie**, **w wyniku przyjęcia** oraz na innych podstawach.",
  "В **общем порядке** заявитель должен постоянно проживать в России **пять лет** со дня получения вида на жительство. Для ряда категорий действует **упрощённый порядок** — в частности для тех, у кого близкие родственники граждане России, для выпускников российских вузов и для носителей русского языка.":
    "W **trybie ogólnym** wnioskodawca musi stale mieszkać w Rosji **pięć lat** od dnia uzyskania karty pobytu stałego. Dla szeregu kategorii obowiązuje **tryb uproszczony** — w szczególności dla tych, których bliscy krewni są obywatelami Rosji, dla absolwentów rosyjskich uczelni i dla nosicieli języka rosyjskiego.",
  "Помимо срока требуются **владение русским языком**, **знание истории России и основ законодательства**, законный источник средств к существованию и соблюдение российского законодательства. Знание подтверждается **экзаменом** — тем самым, чью форму берёт тренировочный тест этого курса. С 2017 года принятые в гражданство приносят **присягу**.":
    "Poza terminem wymaga się **znajomości języka rosyjskiego**, **znajomości historii Rosji i podstaw ustawodawstwa**, legalnego źródła utrzymania i przestrzegania rosyjskiego prawa. Znajomość potwierdza **egzamin** — ten sam, którego formę przyjmuje test ćwiczeniowy tego kursu. Od 2017 roku przyjęci do obywatelstwa składają **przysięgę**.",
  "Сколько лет нужно постоянно прожить в России, чтобы обратиться за гражданством в общем порядке?":
    "Ile lat trzeba stale mieszkać w Rosji, żeby wystąpić o obywatelstwo w trybie ogólnym?",
  "Три года": "Trzy lata",
  "Пять лет": "Pięć lat",
  "Восемь лет": "Osiem lat",
  "Десять лет": "Dziesięć lat",
  "Пять лет со дня получения вида на жительство. Для ряда категорий — близких родственников граждан, выпускников российских вузов, носителей языка — срок сокращается или снимается.":
    "Pięć lat od dnia uzyskania karty pobytu stałego. Dla szeregu kategorii — bliskich krewnych obywateli, absolwentów rosyjskich uczelni, nosicieli języka — termin skraca się albo znika.",
  "Допускает ли Конституция двойное гражданство?":
    "Czy Konstytucja dopuszcza podwójne obywatelstwo?",
  "Нет, оно прямо запрещено": "Nie, jest wprost zakazane",
  "Да, статья 62 его допускает": "Tak, dopuszcza je artykuł 62",
  "Только для граждан государств СНГ": "Tylko dla obywateli państw WNP",
  "Только с разрешения суда": "Tylko za zgodą sądu",
  "Статья 62 допускает гражданство иностранного государства, и само по себе оно не умаляет прав. Отдельные федеральные законы при этом ограничивают доступ к некоторым должностям.":
    "Artykuł 62 dopuszcza obywatelstwo państwa obcego, a samo w sobie nie umniejsza ono praw. Poszczególne ustawy federalne ograniczają przy tym dostęp do niektórych stanowisk.",
  "**Паспорт** гражданин получает в **14 лет**, а **совершеннолетие** наступает в **18**. С восемнадцати приходят право голоса и полная дееспособность.":
    "**Paszport** obywatel dostaje w wieku **14 lat**, a **pełnoletność** przychodzi w **18**. Od osiemnastu przychodzą prawo głosu i pełna zdolność do czynności prawnych.",
  "Праздники и календарь": "Święta i kalendarz",
  "Почему это важно: календарь рассказывает о стране больше многих учебников. В России он начинается с самых длинных в Европе каникул и включает праздники сразу трёх эпох — имперской, советской и нынешней.":
    "Dlaczego to ważne: kalendarz opowiada o kraju więcej niż niejeden podręcznik. W Rosji zaczyna się od najdłuższych w Europie ferii i obejmuje święta od razu z trzech epok — imperialnej, radzieckiej i obecnej.",
  "Нерабочие праздничные дни": "Wolne dni świąteczne",
  "Их перечисляет **статья 112 Трудового кодекса**. Год открывается **новогодними каникулами**: нерабочими считаются **1, 2, 3, 4, 5, 6 и 8 января**, а **7 января** — **Рождество Христово**. Вместе получается непрерывная неделя с лишним — самые длинные государственные каникулы в Европе.":
    "Wylicza je **artykuł 112 Kodeksu pracy**. Rok otwierają **ferie noworoczne**: wolne są **1, 2, 3, 4, 5, 6 i 8 stycznia**, a **7 stycznia** to **Boże Narodzenie**. Razem wychodzi nieprzerwany tydzień z okładem — najdłuższe państwowe ferie w Europie.",
  "23 февраля": "23 lutego",
  "День защитника Отечества. Ведёт начало от 1918 года; сегодня поздравляют не только военных, но и мужчин вообще.":
    "Dzień Obrońcy Ojczyzny. Wywodzi się z 1918 roku; dziś składa się życzenia nie tylko wojskowym, ale mężczyznom w ogóle.",
  "8 марта": "8 marca",
  "Международный женский день. Нерабочий с 1966 года и один из самых массово отмечаемых.":
    "Międzynarodowy Dzień Kobiet. Wolny od 1966 roku i jedno z najpowszechniej obchodzonych świąt.",
  "1 мая": "1 maja",
  "Праздник Весны и Труда. До 1992 года — День международной солидарности трудящихся.":
    "Święto Wiosny i Pracy. Do 1992 roku — Dzień Międzynarodowej Solidarności Ludzi Pracy.",
  "9 мая": "9 maja",
  "День Победы. Парад на Красной площади, минута молчания, шествие «Бессмертного полка».":
    "Dzień Zwycięstwa. Defilada na placu Czerwonym, minuta ciszy, pochód „Nieśmiertelnego pułku”.",
  "Завершают список **12 июня** — День России — и **4 ноября**, **День народного единства**. Последний отмечается с **2005 года** и заменил в календаре 7 ноября, годовщину Октябрьской революции. Он посвящён событиям **1612 года**: освобождению Москвы ополчением Минина и Пожарского.":
    "Listę zamykają **12 czerwca** — Dzień Rosji — i **4 listopada**, **Dzień Jedności Narodowej**. Ten ostatni obchodzi się od **2005 roku** i zastąpił w kalendarzu 7 listopada, rocznicę rewolucji październikowej. Poświęcony jest wydarzeniom **1612 roku**: wyzwoleniu Moskwy przez pospolite ruszenie Minina i Pożarskiego.",
  "Что отмечают 4 ноября?": "Co obchodzi się 4 listopada?",
  "Годовщину Октябрьской революции": "Rocznicę rewolucji październikowej",
  "День Победы": "Dzień Zwycięstwa",
  "День народного единства, с 2005 года. Он посвящён событиям 1612 года и заменил в календаре 7 ноября — годовщину революции 1917 года.":
    "Dzień Jedności Narodowej, od 2005 roku. Poświęcony jest wydarzeniom 1612 roku i zastąpił w kalendarzu 7 listopada — rocznicę rewolucji 1917 roku.",
  "Даты, которые не выходные": "Daty, które nie są wolne",
  "Некоторые дни отмечают по всей стране, хотя они и рабочие. **12 апреля** — **День космонавтики**, в память о полёте Гагарина в 1961 году. **1 сентября** — **День знаний**: линейки во дворах школ, первый звонок и цветы учителям. **22 июня** — **День памяти и скорби**, годовщина начала войны в 1941 году, со «Свечой памяти» и приспущенными флагами.":
    "Niektóre dni obchodzi się w całym kraju, choć są robocze. **12 kwietnia** to **Dzień Kosmonautyki**, na pamiątkę lotu Gagarina w 1961 roku. **1 września** to **Dzień Wiedzy**: apele na szkolnych dziedzińcach, pierwszy dzwonek i kwiaty dla nauczycieli. **22 czerwca** to **Dzień Pamięci i Żałoby**, rocznica wybuchu wojny w 1941 roku, ze „Świecą pamięci” i flagami opuszczonymi do połowy masztu.",
  "Два календаря": "Dwa kalendarze",
  "В **1918 году** Россия перешла с **юлианского** календаря на **григорианский**, и разница между ними составляла тогда тринадцать дней. Отсюда две особенности, которые до сих пор удивляют приезжих.":
    "W **1918 roku** Rosja przeszła z kalendarza **juliańskiego** na **gregoriański**, a różnica między nimi wynosiła wtedy trzynaście dni. Stąd dwie osobliwości, które do dziś dziwią przybyszów.",
  "Первая: **Рождество** Русская православная церковь празднует **7 января**, потому что церковный календарь остался юлианским. Вторая: **14 января** отмечают **старый Новый год** — тот же Новый год по прежнему счёту. Праздник неофициальный, но живой.":
    "Pierwsza: **Boże Narodzenie** Rosyjski Kościół Prawosławny świętuje **7 stycznia**, bo kalendarz cerkiewny pozostał juliański. Druga: **14 stycznia** obchodzi się **stary Nowy Rok** — ten sam Nowy Rok według dawnej rachuby. Święto jest nieoficjalne, ale żywe.",
  "Почему в России отмечают «старый Новый год» 14 января?":
    "Dlaczego w Rosji obchodzi się „stary Nowy Rok” 14 stycznia?",
  "Так решили в 1990-е годы": "Tak postanowiono w latach dziewięćdziesiątych",
  "Из-за перехода с юлианского календаря на григорианский в 1918 году":
    "Z powodu przejścia z kalendarza juliańskiego na gregoriański w 1918 roku",
  "Это праздник северных народов": "To święto ludów północy",
  "Так отмечали при Петре I": "Tak obchodzono za Piotra I",
  "Разница между календарями составляла тринадцать дней, и по прежнему счёту год начинался 14 января. По той же причине Рождество приходится на 7 января.":
    "Różnica między kalendarzami wynosiła trzynaście dni, a według dawnej rachuby rok zaczynał się 14 stycznia. Z tego samego powodu Boże Narodzenie przypada 7 stycznia.",
  "Народные и церковные": "Ludowe i cerkiewne",
  "Рядом с государственным календарём живёт народный. **Масленица** — неделя перед Великим постом, с блинами и сожжением чучела зимы. **Пасха** — главный православный праздник, с крашеными яйцами и куличами; её дата подвижна. Осенью отмечают **Покров**, а летом — **Ивана Купалу**.":
    "Obok kalendarza państwowego żyje ludowy. **Maslenica** to tydzień przed Wielkim Postem, z blinami i paleniem kukły zimy. **Wielkanoc** to główne święto prawosławne, z malowanymi jajkami i kuliczami; jej data jest ruchoma. Jesienią obchodzi się **Pokrow**, a latem **Iwana Kupałę**.",
  "Сколько дней длятся новогодние каникулы по Трудовому кодексу?":
    "Ile dni trwają ferie noworoczne według Kodeksu pracy?",
  "С 1 по 3 января": "Od 1 do 3 stycznia",
  "С 1 по 8 января": "Od 1 do 8 stycznia",
  "С 31 декабря по 2 января": "Od 31 grudnia do 2 stycznia",
  "Только 1 января": "Tylko 1 stycznia",
  "Нерабочими считаются 1–6 и 8 января, а 7 января — Рождество Христово. Вместе выходит непрерывная неделя с лишним, самые длинные государственные каникулы в Европе.":
    "Wolne są 1–6 i 8 stycznia, a 7 stycznia to Boże Narodzenie. Razem wychodzi nieprzerwany tydzień z okładem, najdłuższe państwowe ferie w Europie.",
  "**12 декабря** — День Конституции, но с 2005 года это **рабочий день**. Памятная дата и нерабочий праздник — не одно и то же.":
    "**12 grudnia** to Dzień Konstytucji, ale od 2005 roku jest to **dzień roboczy**. Data pamiętna i wolne święto to nie to samo.",
  "Президент": "Prezydent",
  "Государственное устройство": "Ustrój państwowy",
  "Почему начинаем с президента: в российской конструкции он стоит не внутри одной из трёх ветвей власти, а над ними. Понять эту особенность — значит понять остальное устройство.":
    "Dlaczego zaczynamy od prezydenta: w rosyjskiej konstrukcji stoi on nie wewnątrz jednej z trzech władz, lecz ponad nimi. Zrozumieć tę osobliwość znaczy zrozumieć resztę ustroju.",
  "Что говорит глава 4": "Co mówi rozdział 4",
  "**Статья 80** называет Президента **главой государства** и **гарантом Конституции**, прав и свобод человека. Он принимает меры по охране суверенитета, обеспечивает согласованное функционирование органов власти и **определяет основные направления внутренней и внешней политики**.":
    "**Artykuł 80** nazywa Prezydenta **głową państwa** i **gwarantem Konstytucji** oraz praw i wolności człowieka. Podejmuje środki ochrony suwerenności, zapewnia zgodne działanie organów władzy i **określa główne kierunki polityki wewnętrznej i zagranicznej**.",
  "Обратите внимание на слово «согласованное». Президент не отнесён ни к законодательной, ни к исполнительной, ни к судебной власти: он стоит над разделением, установленным статьёй 10, и связывает ветви между собой.":
    "Warto zwrócić uwagę na słowo „zgodne”. Prezydenta nie zaliczono ani do władzy ustawodawczej, ani wykonawczej, ani sądowniczej: stoi ponad podziałem ustanowionym w artykule 10 i wiąże te władze ze sobą.",
  "Как избирается": "Jak jest wybierany",
  "Президента избирают **граждане России** на основе всеобщего, равного и прямого избирательного права при тайном голосовании — сроком на **шесть лет**. До поправки **2008 года** срок составлял четыре года.":
    "Prezydenta wybierają **obywatele Rosji** w wyborach powszechnych, równych i bezpośrednich, w głosowaniu tajnym — na **sześć lat**. Do poprawki z **2008 roku** kadencja trwała cztery lata.",
  "Не моложе 35 лет": "Nie mniej niż 35 lat",
  "Возрастной ценз, установленный статьёй 81.": "Cenzus wieku ustanowiony w artykule 81.",
  "25 лет проживания": "25 lat zamieszkania",
  "Кандидат должен постоянно проживать в России не менее двадцати пяти лет — требование, добавленное поправками 2020 года.":
    "Kandydat musi stale mieszkać w Rosji nie mniej niż dwadzieścia pięć lat — wymóg dodany poprawkami z 2020 roku.",
  "Без иностранного гражданства": "Bez obcego obywatelstwa",
  "И без вида на жительство в другом государстве, в том числе в прошлом. Тоже поправка 2020 года.":
    "I bez karty pobytu w innym państwie, także w przeszłości. To również poprawka z 2020 roku.",
  "Не более двух сроков": "Nie więcej niż dwie kadencje",
  "Прежде в тексте стояло «двух сроков подряд»; поправки 2020 года слово «подряд» убрали.":
    "Wcześniej w tekście stało „dwóch kadencji z rzędu”; poprawki z 2020 roku wyrazy „z rzędu” usunęły.",
  "На какой срок избирается Президент Российской Федерации?":
    "Na jaką kadencję wybiera się Prezydenta Federacji Rosyjskiej?",
  "На четыре года": "Na cztery lata",
  "На пять лет": "Na pięć lat",
  "На шесть лет": "Na sześć lat",
  "На семь лет": "Na siedem lat",
  "Шесть лет — с поправки 2008 года; до неё срок был четырёхлетним. Государственная Дума избирается на пять лет, и эти две цифры часто путают.":
    "Sześć lat — od poprawki z 2008 roku; wcześniej kadencja była czteroletnia. Duma Państwowa wybierana jest na pięć lat, i te dwie liczby często się myli.",
  "Что он делает": "Co robi",
  "Полномочия перечислены в **статье 83**. Президент **назначает Председателя Правительства** после утверждения его кандидатуры Государственной Думой, принимает решение об отставке Правительства, представляет кандидатуры судей высших судов и Генерального прокурора, формирует Совет Безопасности и Администрацию Президента.":
    "Uprawnienia wylicza **artykuł 83**. Prezydent **mianuje Przewodniczącego Rządu** po zatwierdzeniu jego kandydatury przez Dumę Państwową, podejmuje decyzję o dymisji rządu, przedstawia kandydatury sędziów sądów najwyższych i Prokuratora Generalnego, tworzy Radę Bezpieczeństwa i Administrację Prezydenta.",
  "В законодательном процессе он вносит законопроекты, **подписывает и обнародует** федеральные законы и обладает правом **вето**. Он **Верховный Главнокомандующий**, вводит военное и чрезвычайное положение с последующим утверждением Советом Федерации, решает вопросы гражданства, осуществляет **помилование** и награждает государственными наградами.":
    "W procesie ustawodawczym wnosi projekty ustaw, **podpisuje i ogłasza** ustawy federalne i ma prawo **weta**. Jest **Naczelnym Dowódcą**, wprowadza stan wojenny i stan wyjątkowy z późniejszym zatwierdzeniem przez Radę Federacji, rozstrzyga sprawy obywatelstwa, stosuje **prawo łaski** i nadaje odznaczenia państwowe.",
  "Вступая в должность, Президент приносит **присягу** народу — текст записан в **статье 82**. Официальная резиденция — **Московский Кремль**.":
    "Obejmując urząd, Prezydent składa narodowi **przysięgę** — jej tekst zapisano w **artykule 82**. Oficjalną rezydencją jest **Kreml moskiewski**.",
  "Каков минимальный возраст кандидата в Президенты?":
    "Jaki jest minimalny wiek kandydata na Prezydenta?",
  "21 год": "21 lat",
  "30 лет": "30 lat",
  "35 лет": "35 lat",
  "40 лет": "40 lat",
  "Тридцать пять лет. Двадцать один — возраст для избрания в Государственную Думу, тридцать — для сенатора: три ценза, которые стоит держать порознь.":
    "Trzydzieści pięć lat. Dwadzieścia jeden to wiek do wyboru do Dumy Państwowej, trzydzieści — na senatora: trzy cenzusy, które warto trzymać osobno.",
  "Если полномочия прекращаются досрочно": "Jeśli kadencja kończy się przedterminowo",
  "**Статья 92** предусматривает три случая: отставка, стойкая неспособность по состоянию здоровья и отрешение от должности. Во всех трёх обязанности временно исполняет **Председатель Правительства**, и выборы должны состояться не позднее трёх месяцев.":
    "**Artykuł 92** przewiduje trzy przypadki: dymisję, trwałą niezdolność ze względu na stan zdrowia oraz złożenie z urzędu. We wszystkich trzech obowiązki tymczasowo pełni **Przewodniczący Rządu**, a wybory muszą się odbyć nie później niż w ciągu trzech miesięcy.",
  "**Отрешение от должности** описано в **статье 93** и устроено намеренно тяжело. Государственная Дума выдвигает обвинение **двумя третями** голосов, Верховный Суд даёт заключение о наличии признаков преступления, Конституционный Суд — о соблюдении порядка, и решение принимает **Совет Федерации двумя третями** в трёхмесячный срок. Ни разу эта процедура не была доведена до конца.":
    "**Złożenie z urzędu** opisuje **artykuł 93** i jest urządzone celowo trudno. Duma Państwowa wysuwa oskarżenie **dwiema trzecimi** głosów, Sąd Najwyższy wydaje opinię o istnieniu znamion przestępstwa, Sąd Konstytucyjny — o dochowaniu trybu, a decyzję podejmuje **Rada Federacji dwiema trzecimi** w terminie trzech miesięcy. Ani razu nie doprowadzono tej procedury do końca.",
  "Кто временно исполняет обязанности Президента при досрочном прекращении полномочий?":
    "Kto tymczasowo pełni obowiązki Prezydenta przy przedterminowym zakończeniu kadencji?",
  "Председатель Совета Федерации": "Przewodniczący Rady Federacji",
  "Председатель Правительства": "Przewodniczący Rządu",
  "Председатель Государственной Думы": "Przewodniczący Dumy Państwowej",
  "Председатель Конституционного Суда": "Przewodniczący Sądu Konstytucyjnego",
  "Председатель Правительства, по статье 92, и выборы должны состояться не позднее трёх месяцев. Исполняющий обязанности при этом не вправе распускать Думу и назначать референдум.":
    "Przewodniczący Rządu, według artykułu 92, a wybory muszą się odbyć nie później niż w ciągu trzech miesięcy. Pełniący obowiązki nie ma przy tym prawa rozwiązać Dumy ani zarządzić referendum.",
  "**Глава государства** и **глава правительства** в России — разные должности и разные здания: Президент в **Кремле**, Председатель Правительства в **Доме Правительства** на Краснопресненской набережной.":
    "**Głowa państwa** i **szef rządu** to w Rosji różne urzędy i różne budynki: Prezydent na **Kremlu**, Przewodniczący Rządu w **Domu Rządu** na Nabrzeżu Krasnopreśnieńskim.",
  "Федеральное Собрание": "Zgromadzenie Federalne",
  "Почему это важно: у российского парламента две палаты, и они устроены совсем по-разному — одну избирают напрямую, вторую собирают из представителей регионов. Кто это различает, тот перестаёт путать Думу с Советом Федерации.":
    "Dlaczego to ważne: rosyjski parlament ma dwie izby i są urządzone zupełnie inaczej — jedną wybiera się wprost, drugą składa z przedstawicieli regionów. Kto to rozróżnia, przestaje mylić Dumę z Radą Federacji.",
  "Две палаты": "Dwie izby",
  "**Статья 94** называет Федеральное Собрание **представительным и законодательным органом** Российской Федерации. Оно состоит из двух палат — **Совета Федерации** и **Государственной Думы**, — которые **заседают раздельно**. Совместно они собираются лишь в особых случаях: для посланий Президента и выступлений глав иностранных государств.":
    "**Artykuł 94** nazywa Zgromadzenie Federalne **organem przedstawicielskim i ustawodawczym** Federacji Rosyjskiej. Składa się z dwóch izb — **Rady Federacji** i **Dumy Państwowej** — które **obradują osobno**. Wspólnie zbierają się tylko w szczególnych przypadkach: na orędzia Prezydenta i wystąpienia głów państw obcych.",
  "Государственная Дума": "Duma Państwowa",
  "450 депутатов, избираются на пять лет. Нижняя палата, и именно в неё вносятся законопроекты. Здание — на Охотном Ряду.":
    "450 deputowanych, wybieranych na pięć lat. Izba niższa, i to właśnie do niej wnosi się projekty ustaw. Budynek — przy Ochotnym Riadzie.",
  "Совет Федерации": "Rada Federacji",
  "Верхняя палата, палата регионов. Не избирается целиком и не имеет единого срока полномочий. Здание — на Большой Дмитровке.":
    "Izba wyższa, izba regionów. Nie wybiera się jej w całości i nie ma jednolitej kadencji. Budynek — przy Bolszej Dmitrowce.",
  "Возраст, с которого можно быть избранным депутатом Государственной Думы.":
    "Wiek, od którego można zostać wybranym deputowanym Dumy Państwowej.",
  "Возраст, с которого можно стать сенатором Российской Федерации.":
    "Wiek, od którego można zostać senatorem Federacji Rosyjskiej.",
  "Сколько депутатов в Государственной Думе?": "Ilu deputowanych liczy Duma Państwowa?",
  "Двести двадцать пять": "Dwustu dwudziestu pięciu",
  "Триста": "Trzystu",
  "Четыреста пятьдесят": "Czterystu pięćdziesięciu",
  "Шестьсот тридцать": "Sześciuset trzydziestu",
  "Четыреста пятьдесят. Двести двадцать пять — это половина, которая избирается по одномандатным округам, а другая половина проходит по партийным спискам.":
    "Czterystu pięćdziesięciu. Dwustu dwudziestu pięciu to połowa wybierana w okręgach jednomandatowych, a druga połowa wchodzi z list partyjnych.",
  "Как избирают Думу": "Jak wybiera się Dumę",
  "Система **смешанная**. **225 депутатов** избираются по **одномандатным округам** — по одному от округа, кто набрал больше голосов. Другие **225** проходят по **партийным спискам** в едином федеральном округе, и здесь действует **пятипроцентный барьер**: партия, не набравшая пяти процентов, мест не получает.":
    "System jest **mieszany**. **225 deputowanych** wybiera się w **okręgach jednomandatowych** — po jednym z okręgu, ten, kto zbierze więcej głosów. Kolejnych **225** wchodzi z **list partyjnych** w jednym okręgu federalnym, a tu obowiązuje **próg pięcioprocentowy**: partia, która nie zbierze pięciu procent, mandatów nie dostaje.",
  "Срок полномочий Думы — **пять лет**; до поправки 2008 года он составлял четыре года. Президент вправе распустить Думу в двух случаях, прямо названных Конституцией: при трёхкратном отклонении кандидатуры Председателя Правительства и при повторном выражении недоверия Правительству.":
    "Kadencja Dumy trwa **pięć lat**; do poprawki z 2008 roku wynosiła cztery lata. Prezydent ma prawo rozwiązać Dumę w dwóch przypadkach wprost wymienionych w Konstytucji: przy trzykrotnym odrzuceniu kandydatury Przewodniczącego Rządu i przy powtórnym wyrażeniu rządowi nieufności.",
  "Как складывается Совет Федерации": "Jak składa się Rada Federacji",
  "В него входят **по два представителя от каждого субъекта** Федерации — один от законодательного органа, другой от исполнительного. К ним добавляются сенаторы, **назначаемые Президентом** (не более тридцати, по поправке 2020 года), а бывшие президенты вправе стать **пожизненными сенаторами**.":
    "Wchodzi do niej **po dwóch przedstawicieli z każdego podmiotu** Federacji — jeden od organu ustawodawczego, drugi od wykonawczego. Do nich dochodzą senatorowie **mianowani przez Prezydenta** (nie więcej niż trzydziestu, według poprawki z 2020 roku), a byli prezydenci mają prawo zostać **senatorami dożywotnimi**.",
  "Отсюда важное следствие: Совет Федерации **не избирается целиком и не распускается**. Его состав меняется постепенно, вслед за выборами в регионах, и палата работает непрерывно.":
    "Stąd ważny wniosek: Rady Federacji **nie wybiera się w całości i nie rozwiązuje**. Jej skład zmienia się stopniowo, w ślad za wyborami w regionach, a izba pracuje nieprzerwanie.",
  "Сколько представителей направляет в Совет Федерации каждый субъект?":
    "Ilu przedstawicieli kieruje do Rady Federacji każdy podmiot?",
  "Одного": "Jednego",
  "Двух": "Dwóch",
  "Трёх": "Trzech",
  "Число зависит от населения": "Liczba zależy od liczby ludności",
  "Двух: одного от законодательного органа субъекта, другого от исполнительного. Численность населения на это не влияет — в этом и смысл палаты регионов.":
    "Dwóch: jednego od organu ustawodawczego podmiotu, drugiego od wykonawczego. Liczba ludności nie ma na to wpływu — na tym właśnie polega sens izby regionów.",
  "Как принимается закон": "Jak uchwala się ustawę",
  "Законопроект вносится **в Государственную Думу**. Дума принимает федеральный закон **большинством голосов**, а федеральный конституционный — **двумя третями**. В течение пяти дней закон передаётся в **Совет Федерации**, у которого есть **четырнадцать дней** на рассмотрение.":
    "Projekt wnosi się **do Dumy Państwowej**. Duma uchwala ustawę federalną **większością głosów**, a federalną ustawę konstytucyjną — **dwiema trzecimi**. W ciągu pięciu dni ustawa trafia do **Rady Federacji**, która ma **czternaście dni** na rozpatrzenie.",
  "Если Совет Федерации отклоняет закон, палаты создают согласительную комиссию, либо Дума преодолевает отклонение **двумя третями** голосов. Затем закон уходит **Президенту**, который в течение четырнадцати дней подписывает и обнародует его или налагает **вето**. Вето преодолевается **двумя третями голосов обеих палат**.":
    "Jeśli Rada Federacji ustawę odrzuci, izby tworzą komisję uzgodnieniową albo Duma przełamuje odrzucenie **dwiema trzecimi** głosów. Potem ustawa idzie do **Prezydenta**, który w ciągu czternastu dni podpisuje ją i ogłasza albo zakłada **weto**. Weto przełamuje się **dwiema trzecimi głosów obu izb**.",
  "**Статья 106** перечисляет законы, которые Совет Федерации обязан рассмотреть непременно: бюджет, налоги и сборы, финансовое и таможенное регулирование, ратификация международных договоров, статус государственной границы, вопросы войны и мира.":
    "**Artykuł 106** wylicza ustawy, które Rada Federacji musi rozpatrzyć bezwzględnie: budżet, podatki i opłaty, regulacje finansowe i celne, ratyfikacja umów międzynarodowych, status granicy państwowej, sprawy wojny i pokoju.",
  "Какой барьер должна преодолеть партия, чтобы получить места по спискам?":
    "Jaki próg musi przekroczyć partia, żeby dostać mandaty z list?",
  "Три процента": "Trzy procent",
  "Пять процентов": "Pięć procent",
  "Семь процентов": "Siedem procent",
  "Барьера нет": "Progu nie ma",
  "Пять процентов голосов в едином федеральном округе. Барьер менялся: в 2007 и 2011 годах он составлял семь процентов, а затем вернулся к пяти.":
    "Pięć procent głosów w jednym okręgu federalnym. Próg się zmieniał: w 2007 i 2011 roku wynosił siedem procent, a potem wrócił do pięciu.",
  "Законопроект вносится **только в Государственную Думу**, никогда напрямую в Совет Федерации. Верхняя палата вступает в дело после того, как закон уже принят нижней.":
    "Projekt ustawy wnosi się **wyłącznie do Dumy Państwowej**, nigdy wprost do Rady Federacji. Izba wyższa wchodzi do gry po tym, jak ustawę uchwaliła już izba niższa.",
  "Правительство": "Rząd",
  "Почему это важно: Правительство отвечает за то, что видно каждый день — бюджет, пенсии, дороги, школы. И оно единственный орган, который зависит сразу от двух: и от Президента, и от Думы.":
    "Dlaczego to ważne: rząd odpowiada za to, co widać codziennie — budżet, emerytury, drogi, szkoły. I jest jedynym organem, który zależy od razu od dwóch: od Prezydenta i od Dumy.",
  "Из кого состоит": "Z kogo się składa",
  "**Статья 110** определяет состав: **Председатель Правительства**, его заместители и **федеральные министры**. Правительство осуществляет **исполнительную власть** Российской Федерации. Его резиденция — **Дом Правительства** на Краснопресненской набережной, в обиходе Белый дом.":
    "**Artykuł 110** określa skład: **Przewodniczący Rządu**, jego zastępcy i **ministrowie federalni**. Rząd sprawuje **władzę wykonawczą** Federacji Rosyjskiej. Jego siedzibą jest **Dom Rządu** na Nabrzeżu Krasnopreśnieńskim, w mowie potocznej Biały Dom.",
  "Как оно назначается": "Jak jest powoływany",
  "**Председателя Правительства назначает Президент** — но только **после утверждения** кандидатуры **Государственной Думой**. До поправок 2020 года формулировка была мягче: Дума давала «согласие».":
    "**Przewodniczącego Rządu mianuje Prezydent** — ale dopiero **po zatwierdzeniu** kandydatury przez **Dumę Państwową**. Do poprawek z 2020 roku sformułowanie było łagodniejsze: Duma dawała „zgodę”.",
  "Если Дума **трижды отклонит** представленные кандидатуры, Президент назначает Председателя сам, **распускает Думу** и назначает новые выборы. Эта норма никогда не применялась, но именно она задаёт баланс: у Думы есть право отказать, но у отказа есть цена.":
    "Jeśli Duma **trzykrotnie odrzuci** przedstawione kandydatury, Prezydent mianuje Przewodniczącego sam, **rozwiązuje Dumę** i zarządza nowe wybory. Tej normy nigdy nie zastosowano, ale to właśnie ona wyznacza równowagę: Duma ma prawo odmówić, ale odmowa ma swoją cenę.",
  "Заместителей и министров, кроме руководителей так называемого силового блока, тоже **утверждает Дума**. Министров обороны, внутренних дел, иностранных дел, юстиции и глав спецслужб назначает **Президент** после консультаций с **Советом Федерации**.":
    "Zastępców i ministrów, poza kierownikami tak zwanego bloku siłowego, także **zatwierdza Duma**. Ministrów obrony, spraw wewnętrznych, spraw zagranicznych, sprawiedliwości oraz szefów służb specjalnych mianuje **Prezydent** po konsultacjach z **Radą Federacji**.",
  "Что происходит, если Государственная Дума трижды отклонит кандидатуру Председателя Правительства?":
    "Co dzieje się, jeśli Duma Państwowa trzykrotnie odrzuci kandydaturę Przewodniczącego Rządu?",
  "Президент обязан предложить четвёртую кандидатуру":
    "Prezydent ma obowiązek przedstawić czwartą kandydaturę",
  "Президент назначает Председателя, распускает Думу и назначает новые выборы":
    "Prezydent mianuje Przewodniczącego, rozwiązuje Dumę i zarządza nowe wybory",
  "Кандидатуру утверждает Совет Федерации": "Kandydaturę zatwierdza Rada Federacji",
  "Правительство формируется без председателя": "Rząd tworzy się bez przewodniczącego",
  "Это одно из двух оснований роспуска Думы, прямо названных Конституцией. Норма ни разу не применялась, но она задаёт цену отказа.":
    "To jedna z dwóch podstaw rozwiązania Dumy wprost wymienionych w Konstytucji. Normy ani razu nie zastosowano, ale wyznacza ona cenę odmowy.",
  "Чем оно занимается": "Czym się zajmuje",
  "**Статья 114** перечисляет главные направления: разработка и исполнение **федерального бюджета**, единая финансовая, кредитная и денежная политика, единая политика в области **культуры, науки, образования, здравоохранения, социального обеспечения** и экологии, управление федеральной собственностью, **оборона и государственная безопасность**, законность и борьба с преступностью.":
    "**Artykuł 114** wylicza główne kierunki: opracowanie i wykonanie **budżetu federalnego**, jednolita polityka finansowa, kredytowa i pieniężna, jednolita polityka w dziedzinie **kultury, nauki, oświaty, ochrony zdrowia, zabezpieczenia społecznego** i ekologii, zarząd majątkiem federalnym, **obrona i bezpieczeństwo państwa**, praworządność i walka z przestępczością.",
  "Свои решения Правительство оформляет **постановлениями** и **распоряжениями**. Они обязательны на всей территории страны, но не должны противоречить Конституции, федеральным законам и указам Президента — иначе Президент вправе их отменить.":
    "Swoje rozstrzygnięcia rząd ujmuje w **uchwały** i **rozporządzenia**. Obowiązują one na całym terytorium kraju, ale nie mogą być sprzeczne z Konstytucją, ustawami federalnymi i dekretami Prezydenta — inaczej Prezydent ma prawo je uchylić.",
  "Какие акты издаёт Правительство Российской Федерации?":
    "Jakie akty wydaje Rząd Federacji Rosyjskiej?",
  "Указы и распоряжения": "Dekrety i rozporządzenia",
  "Постановления и распоряжения": "Uchwały i rozporządzenia",
  "Федеральные законы": "Ustawy federalne",
  "Приказы и инструкции": "Zarządzenia i instrukcje",
  "Постановления и распоряжения. Указы и распоряжения издаёт Президент, а федеральные законы принимает парламент: три разных вида актов и три разных органа.":
    "Uchwały i rozporządzenia. Dekrety i rozporządzenia wydaje Prezydent, a ustawy federalne uchwala parlament: trzy różne rodzaje aktów i trzy różne organy.",
  "Как оно уходит": "Jak odchodzi",
  "Государственная Дума может выразить Правительству **недоверие**. Если она сделает это **повторно в течение трёх месяцев**, Президент обязан выбрать: объявить об **отставке Правительства** либо **распустить Думу**. Выбор остаётся за ним, и это второе основание роспуска.":
    "Duma Państwowa może wyrazić rządowi **nieufność**. Jeśli zrobi to **powtórnie w ciągu trzech miesięcy**, Prezydent musi wybrać: ogłosić **dymisję rządu** albo **rozwiązać Dumę**. Wybór należy do niego, i to jest druga podstawa rozwiązania.",
  "Правительство может и само поставить перед Думой **вопрос о доверии**. И в любом случае оно **слагает свои полномочия** перед вновь избранным Президентом — независимо от того, как давно было сформировано.":
    "Rząd może też sam postawić przed Dumą **kwestię zaufania**. I w każdym razie **składa swoje pełnomocnictwa** przed nowo wybranym Prezydentem — niezależnie od tego, jak dawno go utworzono.",
  "Перед кем Правительство слагает свои полномочия?":
    "Przed kim rząd składa swoje pełnomocnictwa?",
  "Перед вновь избранным Президентом": "Przed nowo wybranym Prezydentem",
  "Перед вновь избранной Государственной Думой": "Przed nowo wybraną Dumą Państwową",
  "Перед Советом Федерации": "Przed Radą Federacji",
  "Ни перед кем: оно работает бессрочно": "Przed nikim: pracuje bezterminowo",
  "Перед вновь избранным Президентом, и это происходит после каждых президентских выборов. Смена состава Думы сама по себе отставки Правительства не влечёт.":
    "Przed nowo wybranym Prezydentem, i dzieje się to po każdych wyborach prezydenckich. Sama zmiana składu Dumy dymisji rządu nie pociąga.",
  "**Указ** — акт Президента, **постановление** — акт Правительства, **федеральный закон** — акт парламента. Три слова, которые в новостях звучат рядом и означают три разные вещи.":
    "**Dekret** to akt Prezydenta, **uchwała** — akt rządu, **ustawa federalna** — akt parlamentu. Trzy słowa, które w wiadomościach padają obok siebie i znaczą trzy różne rzeczy.",
  "Судебная власть": "Władza sądownicza",
  "Почему это важно: на вершине стоят два суда, и они не одно и то же. Один судит законы, другой — дела. Их постоянно путают, и различие между ними стоит запомнить сразу.":
    "Dlaczego to ważne: na szczycie stoją dwa sądy i nie są tym samym. Jeden sądzi ustawy, drugi sprawy. Myli się je nieustannie, a różnicę między nimi warto zapamiętać od razu.",
  "Основные правила": "Zasady podstawowe",
  "**Статья 118**: правосудие осуществляется **только судом**, судебная система устанавливается Конституцией и федеральным конституционным законом, а **создание чрезвычайных судов не допускается**. **Статья 120** объявляет судей **независимыми** и подчиняющимися только Конституции и закону; **статьи 121 и 122** добавляют **несменяемость** и **неприкосновенность**.":
    "**Artykuł 118**: wymiar sprawiedliwości sprawuje **wyłącznie sąd**, system sądów ustala Konstytucja i federalna ustawa konstytucyjna, a **tworzenie sądów nadzwyczajnych jest niedopuszczalne**. **Artykuł 120** ogłasza sędziów **niezawisłymi** i podległymi wyłącznie Konstytucji i ustawie; **artykuły 121 i 122** dodają **nieusuwalność** i **nietykalność**.",
  "Судьёй может стать гражданин России **не моложе 25 лет**, с высшим юридическим образованием и **стажем работы по юридической профессии не менее пяти лет**. Для высших судов требования выше.":
    "Sędzią może zostać obywatel Rosji **nie młodszy niż 25 lat**, z wyższym wykształceniem prawniczym i **stażem pracy w zawodzie prawniczym nie krótszym niż pięć lat**. Dla sądów najwyższych wymagania są wyższe.",
  "Лестница судов": "Drabina sądów",
  "Мировые судьи": "Sędziowie pokoju",
  "Самые простые дела: мелкие иски, часть уголовных дел. Это суды субъектов Федерации, а не федеральные.":
    "Sprawy najprostsze: drobne pozwy, część spraw karnych. To sądy podmiotów Federacji, a nie sądy federalne.",
  "Районные суды": "Sądy rejonowe",
  "Основное звено: большинство дел по первой инстанции рассматривается здесь.":
    "Ogniwo podstawowe: większość spraw w pierwszej instancji rozpoznaje się tutaj.",
  "Суды субъектов": "Sądy podmiotów",
  "Областные, краевые, республиканские. Апелляция на районные суды и первая инстанция по тяжким делам.":
    "Obwodowe, krajowe, republikańskie. Apelacja od sądów rejonowych i pierwsza instancja w sprawach o czyny najcięższe.",
  "Кассационные и апелляционные суды": "Sądy kasacyjne i apelacyjne",
  "Отдельные окружные суды, созданные в 2019 году, чтобы проверка шла не в том же регионе, где выносилось решение.":
    "Osobne sądy okręgowe, utworzone w 2019 roku, żeby kontrola nie odbywała się w tym samym regionie, w którym zapadło orzeczenie.",
  "Отдельную ветвь образуют **арбитражные суды**, которые рассматривают экономические споры между организациями и предпринимателями. Обычное дело проходит три инстанции: **первую**, **апелляцию** и **кассацию**.":
    "Osobną gałąź tworzą **sądy arbitrażowe**, które rozpoznają spory gospodarcze między organizacjami i przedsiębiorcami. Zwykła sprawa przechodzi trzy instancje: **pierwszą**, **apelację** i **kasację**.",
  "Верховный Суд": "Sąd Najwyższy",
  "**Верховный Суд** — высший судебный орган по **гражданским, уголовным, административным** делам и по **экономическим спорам**. Он даёт разъяснения по вопросам судебной практики, и эти разъяснения фактически определяют, как нижестоящие суды будут читать закон.":
    "**Sąd Najwyższy** jest najwyższym organem sądowym w sprawach **cywilnych, karnych, administracyjnych** oraz w **sporach gospodarczych**. Wydaje wyjaśnienia co do praktyki sądowej, a te wyjaśnienia faktycznie przesądzają, jak sądy niższe będą czytać ustawę.",
  "В **2014 году** Высший Арбитражный Суд был **упразднён**, а его полномочия переданы Верховному Суду. С тех пор высших судов два, а не три.":
    "W **2014 roku** Najwyższy Sąd Arbitrażowy **zniesiono**, a jego kompetencje przekazano Sądowi Najwyższemu. Od tego czasu sądów najwyższych są dwa, a nie trzy.",
  "Конституционный Суд": "Sąd Konstytucyjny",
  "**Конституционный Суд** стоит особняком: он не рассматривает дела граждан по существу, а **проверяет законы на соответствие Конституции**. С поправок **2020 года** в нём **одиннадцать судей**; прежде было девятнадцать. С **2008 года** он находится не в Москве, а в **Санкт-Петербурге**.":
    "**Sąd Konstytucyjny** stoi osobno: nie rozpoznaje spraw obywateli co do meritum, lecz **bada zgodność ustaw z Konstytucją**. Od poprawek z **2020 roku** ma **jedenastu sędziów**; wcześniej było ich dziewiętnastu. Od **2008 roku** mieści się nie w Moskwie, lecz w **Petersburgu**.",
  "Его полномочия: проверка конституционности законов и иных актов, разрешение споров о компетенции между органами власти, **толкование Конституции**, заключение при отрешении Президента и проверка законопроектов по запросу Президента. Норма, признанная неконституционной, **утрачивает силу**.":
    "Jego kompetencje: badanie konstytucyjności ustaw i innych aktów, rozstrzyganie sporów kompetencyjnych między organami władzy, **wykładnia Konstytucji**, opinia przy złożeniu Prezydenta z urzędu i badanie projektów ustaw na wniosek Prezydenta. Norma uznana za niekonstytucyjną **traci moc**.",
  "Сколько судей в Конституционном Суде Российской Федерации?":
    "Ilu sędziów ma Sąd Konstytucyjny Federacji Rosyjskiej?",
  "Девять": "Dziewięciu",
  "Одиннадцать": "Jedenastu",
  "Девятнадцать": "Dziewiętnastu",
  "Двадцать один": "Dwudziestu jeden",
  "Одиннадцать — с поправок 2020 года; прежде судей было девятнадцать. Число сокращали постепенно, не заполняя открывающиеся места.":
    "Jedenastu — od poprawek z 2020 roku; wcześniej sędziów było dziewiętnastu. Liczbę zmniejszano stopniowo, nie obsadzając zwalniających się miejsc.",
  "В каком городе находится Конституционный Суд?":
    "W którym mieście mieści się Sąd Konstytucyjny?",
  "В Москве": "W Moskwie",
  "В Санкт-Петербурге": "W Petersburgu",
  "В Екатеринбурге": "W Jekaterynburgu",
  "В Казани": "W Kazaniu",
  "В Санкт-Петербурге с 2008 года — единственный высший орган власти, работающий не в столице. Верховный Суд переехал туда позже.":
    "W Petersburgu od 2008 roku — jedyny najwyższy organ władzy pracujący poza stolicą. Sąd Najwyższy przeniósł się tam później.",
  "Прокуратура": "Prokuratura",
  "**Статья 129** отводит **прокуратуре** отдельное место в той же главе. Это **единая централизованная система** с подчинением нижестоящих прокуроров вышестоящим и **Генеральному прокурору**, которого назначает Совет Федерации по представлению Президента. Прокуратура надзирает за соблюдением законов и поддерживает обвинение в суде, но судом не является.":
    "**Artykuł 129** wyznacza **prokuraturze** osobne miejsce w tym samym rozdziale. To **jednolity, scentralizowany system** z podległością prokuratorów niższych wyższym i **Prokuratorowi Generalnemu**, którego mianuje Rada Federacji na wniosek Prezydenta. Prokuratura nadzoruje przestrzeganie ustaw i popiera oskarżenie przed sądem, ale sądem nie jest.",
  "Что произошло с высшими судами в 2014 году?":
    "Co stało się z sądami najwyższymi w 2014 roku?",
  "Конституционный Суд переехал в Санкт-Петербург":
    "Sąd Konstytucyjny przeniósł się do Petersburga",
  "Высший Арбитражный Суд был упразднён, его полномочия перешли Верховному Суду":
    "Najwyższy Sąd Arbitrażowy zniesiono, a jego kompetencje przeszły do Sądu Najwyższego",
  "Был создан Верховный Суд": "Utworzono Sąd Najwyższy",
  "Число судей Конституционного Суда сократили до одиннадцати":
    "Liczbę sędziów Sądu Konstytucyjnego zmniejszono do jedenastu",
  "Переезд Конституционного Суда состоялся в 2008 году, а сокращение до одиннадцати судей — в 2020-м. В 2014 году высших судов стало два вместо трёх.":
    "Przeniesienie Sądu Konstytucyjnego nastąpiło w 2008 roku, a zmniejszenie do jedenastu sędziów w 2020. W 2014 roku sądów najwyższych zrobiło się dwa zamiast trzech.",
  "**Конституционный Суд** судит **законы**, **Верховный Суд** — **дела**. Обратиться в Конституционный Суд с жалобой на приговор нельзя; можно оспорить закон, по которому этот приговор вынесен.":
    "**Sąd Konstytucyjny** sądzi **ustawy**, **Sąd Najwyższy** — **sprawy**. Do Sądu Konstytucyjnego nie można się zwrócić ze skargą na wyrok; można zaskarżyć ustawę, na podstawie której ten wyrok zapadł.",
  "Выборы и местное самоуправление": "Wybory i samorząd lokalny",
  "Почему это важно: голосуют в России в один и тот же день по всей стране, а местное самоуправление по Конституции вообще не входит в государственную власть. Обе особенности стоит знать заранее.":
    "Dlaczego to ważne: w Rosji głosuje się tego samego dnia w całym kraju, a samorząd lokalny według Konstytucji w ogóle nie należy do władzy państwowej. Obie osobliwości warto znać z góry.",
  "Кто голосует и кого выбирают": "Kto głosuje i kogo się wybiera",
  "**Статья 32** даёт гражданам право **избирать и быть избранными**. Активное избирательное право наступает в **18 лет**. Пассивное — то есть право самому баллотироваться — зависит от должности.":
    "**Artykuł 32** daje obywatelom prawo **wybierania i bycia wybranym**. Czynne prawo wyborcze przychodzi w wieku **18 lat**. Bierne — czyli prawo samemu kandydować — zależy od urzędu.",
  "18 лет": "18 lat",
  "Депутат представительного органа муниципального образования.":
    "Deputowany organu przedstawicielskiego jednostki samorządowej.",
  "Депутат Государственной Думы.": "Deputowany Dumy Państwowej.",
  "Глава субъекта Федерации, а также сенатор.": "Szef podmiotu Federacji, a także senator.",
  "Президент Российской Федерации.": "Prezydent Federacji Rosyjskiej.",
  "Та же статья называет два исключения: **не имеют права избирать и быть избранными** граждане, признанные судом **недееспособными**, и содержащиеся в местах лишения свободы **по приговору суда**. Заключение под стражу до приговора права голоса не лишает.":
    "Ten sam artykuł wymienia dwa wyjątki: **nie mają prawa wybierać ani być wybieranymi** obywatele uznani przez sąd za **ubezwłasnowolnionych** oraz przebywający w zakładach karnych **na mocy wyroku sądu**. Tymczasowe aresztowanie przed wyrokiem prawa głosu nie odbiera.",
  "С какого возраста можно быть избранным депутатом Государственной Думы?":
    "Od jakiego wieku można zostać wybranym deputowanym Dumy Państwowej?",
  "С 18 лет": "Od 18 lat",
  "С 21 года": "Od 21 lat",
  "С 30 лет": "Od 30 lat",
  "С 35 лет": "Od 35 lat",
  "С двадцати одного года. Восемнадцать — для муниципального депутата, тридцать — для сенатора и главы субъекта, тридцать пять — для Президента.":
    "Od dwudziestu jeden lat. Osiemnaście dotyczy deputowanego samorządowego, trzydzieści — senatora i szefa podmiotu, trzydzieści pięć — Prezydenta.",
  "Единый день голосования": "Jednolity dzień głosowania",
  "Региональные и муниципальные выборы проводятся по всей стране в один и тот же день — **второе воскресенье сентября**. Выборы Президента и Государственной Думы имеют собственные сроки, но и они привязаны к этому дню, когда совпадают по времени.":
    "Wybory regionalne i samorządowe odbywają się w całym kraju tego samego dnia — w **drugą niedzielę września**. Wybory Prezydenta i Dumy Państwowej mają własne terminy, ale i one wiążą się z tym dniem, kiedy zbiegają się w czasie.",
  "Организует выборы система комиссий: **Центральная избирательная комиссия**, комиссии субъектов, территориальные и **участковые** комиссии. На участках работают наблюдатели от кандидатов и партий.":
    "Wybory organizuje system komisji: **Centralna Komisja Wyborcza**, komisje podmiotów, komisje terytorialne i **obwodowe**. W lokalach pracują obserwatorzy od kandydatów i partii.",
  "Партии и референдум": "Partie i referendum",
  "**Статья 13** гарантирует **многопартийность**. Порядок создания партий определяет отдельный федеральный закон: он требует определённой численности и наличия **региональных отделений** более чем в половине субъектов Федерации.":
    "**Artykuł 13** gwarantuje **wielopartyjność**. Tryb zakładania partii określa osobna ustawa federalna: wymaga określonej liczby członków i istnienia **oddziałów regionalnych** w więcej niż połowie podmiotów Federacji.",
  "**Референдум** назван в **статье 3** высшим непосредственным выражением власти народа, наряду со свободными выборами. Его назначает **Президент** в порядке, установленном федеральным конституционным законом. Общероссийский референдум проводился дважды: в 1991 и 1993 годах.":
    "**Referendum** nazwano w **artykule 3** najwyższym bezpośrednim wyrazem władzy narodu, obok wolnych wyborów. Zarządza je **Prezydent** w trybie ustalonym federalną ustawą konstytucyjną. Referendum ogólnorosyjskie przeprowadzono dwa razy: w 1991 i 1993 roku.",
  "Местное самоуправление": "Samorząd lokalny",
  "**Статья 12** содержит формулировку, удивляющую многих: органы местного самоуправления **не входят в систему органов государственной власти**. Местное самоуправление в пределах своих полномочий **самостоятельно**, и ему посвящена отдельная, восьмая глава Конституции.":
    "**Artykuł 12** zawiera sformułowanie, które wielu zaskakuje: organy samorządu lokalnego **nie wchodzą w skład systemu organów władzy państwowej**. Samorząd lokalny w granicach swoich uprawnień jest **samodzielny**, a poświęcono mu osobny, ósmy rozdział Konstytucji.",
  "Оно осуществляется через **местные референдумы**, **выборы** и выборные органы. Виды муниципальных образований — **городской округ**, **муниципальный округ**, **муниципальный район** и **поселение**.":
    "Sprawuje się go przez **referenda lokalne**, **wybory** i organy z wyboru. Rodzaje jednostek samorządowych to **okręg miejski**, **okręg samorządowy**, **rejon samorządowy** i **osiedle**.",
  "Что решают на местах": "Co rozstrzyga się na miejscu",
  "Благоустройство, местные дороги, жилищно-коммунальное хозяйство, вывоз мусора, содержание школ и детских садов.":
    "Utrzymanie porządku, drogi lokalne, gospodarka mieszkaniowo-komunalna, wywóz śmieci, utrzymanie szkół i przedszkoli.",
  "Местный бюджет": "Budżet lokalny",
  "Муниципалитеты самостоятельно формируют, утверждают и исполняют собственный бюджет и устанавливают местные налоги.":
    "Jednostki samorządowe samodzielnie układają, uchwalają i wykonują własny budżet oraz ustanawiają podatki lokalne.",
  "Глава муниципалитета": "Szef jednostki samorządowej",
  "Порядок избрания различается: где-то прямые выборы, где-то избрание депутатами из своего состава или по конкурсу.":
    "Tryb wyboru bywa różny: gdzieś wybory bezpośrednie, gdzieś wybór przez radnych ze swojego grona albo w drodze konkursu.",
  "Государственные полномочия": "Kompetencje państwowe",
  "Их можно передать муниципалитету законом, но только вместе с деньгами на исполнение.":
    "Można je przekazać jednostce samorządowej ustawą, ale tylko razem z pieniędzmi na ich wykonanie.",
  "Когда проводится единый день голосования?": "Kiedy odbywa się jednolity dzień głosowania?",
  "В первое воскресенье марта": "W pierwszą niedzielę marca",
  "Во второе воскресенье сентября": "W drugą niedzielę września",
  "В последнее воскресенье ноября": "W ostatnią niedzielę listopada",
  "Даты назначаются в каждом регионе отдельно": "Daty wyznacza się osobno w każdym regionie",
  "Второе воскресенье сентября. Единый день был введён, чтобы региональные и местные кампании не шли круглый год вразнобой.":
    "W drugą niedzielę września. Jednolity dzień wprowadzono, żeby kampanie regionalne i lokalne nie trwały bez ładu przez cały rok.",
  "Входят ли органы местного самоуправления в систему органов государственной власти?":
    "Czy organy samorządu lokalnego wchodzą w skład systemu organów władzy państwowej?",
  "Да, это её нижнее звено": "Tak, to jego najniższe ogniwo",
  "Нет: статья 12 прямо говорит, что не входят": "Nie: artykuł 12 wprost mówi, że nie wchodzą",
  "Входят только в городах федерального значения":
    "Wchodzą tylko w miastach o znaczeniu federalnym",
  "Входят, если так решит субъект Федерации": "Wchodzą, jeśli tak postanowi podmiot Federacji",
  "Статья 12 отделяет местное самоуправление от государственной власти и признаёт его самостоятельность в пределах полномочий. Ему посвящена отдельная восьмая глава.":
    "Artykuł 12 oddziela samorząd lokalny od władzy państwowej i uznaje jego samodzielność w granicach uprawnień. Poświęcono mu osobny, ósmy rozdział.",
  "**Уполномоченный по правам человека** — федеральный омбудсмен — назначается **Государственной Думой**, а не Президентом, и работает независимо от органов власти. У большинства субъектов есть свой уполномоченный.":
    "**Rzecznik praw człowieka** — federalny ombudsman — jest powoływany przez **Dumę Państwową**, a nie przez Prezydenta, i pracuje niezależnie od organów władzy. Większość podmiotów ma własnego rzecznika.",
  "Киевская Русь и раздробленность": "Ruś Kijowska i rozbicie dzielnicowe",
  "История России": "Historia Rosji",
  "Почему начинаем отсюда: у русской государственности есть точка отсчёта, и она лежит не в Москве. Первые триста лет центром была не она, и это меняет всю картину.":
    "Dlaczego zaczynamy od tego: rosyjska państwowość ma punkt odniesienia i nie leży on w Moskwie. Przez pierwsze trzysta lat ośrodkiem nie była ona, a to zmienia cały obraz.",
  "Путь из варяг в греки": "Szlak od Waregów do Greków",
  "Восточные славяне жили племенными союзами по великим рекам, и через их земли шёл торговый **путь «из варяг в греки»** — от Балтики по Волхову и Днепру к Чёрному морю и Константинополю. Города вырастали там, где стоило держать перевоз и склад: **Новгород**, **Смоленск**, **Киев**.":
    "Słowianie wschodni żyli w związkach plemiennych nad wielkimi rzekami, a przez ich ziemie biegł szlak handlowy **„od Waregów do Greków”** — od Bałtyku Wołchowem i Dnieprem ku Morzu Czarnemu i Konstantynopolowi. Miasta wyrastały tam, gdzie warto było trzymać przewóz i skład: **Nowogród**, **Smoleńsk**, **Kijów**.",
  "«Повесть временных лет» относит к **862 году** призвание **Рюрика** в Новгород, а к **882-му** — поход **Олега**, который взял Киев и соединил два центра. От этой даты и принято считать начало **Киевской Руси**.":
    "„Powieść minionych lat” odnosi do **862 roku** powołanie **Ruryka** do Nowogrodu, a do **882** — wyprawę **Olega**, który zdobył Kijów i połączył oba ośrodki. Od tej daty przyjęło się liczyć początek **Rusi Kijowskiej**.",
  "988 год": "Rok 988",
  "В **988 году** князь **Владимир** принял христианство и крестил Русь. Решение было и политическим: христианский правитель переставал быть для соседей объектом миссии, а страна получала письменность, календарь и связи со всей византийской и латинской Европой.":
    "W **988 roku** książę **Włodzimierz** przyjął chrześcijaństwo i ochrzcił Ruś. Decyzja była też polityczna: chrześcijański władca przestawał być dla sąsiadów celem misji, a kraj dostawał pismo, kalendarz i więzi z całą Europą bizantyjską i łacińską.",
  "Письменность принесла **кириллица**, созданная в IX веке **Кириллом и Мефодием** для славянских языков. Богослужение шло не на греческом, а на понятном языке, и это на столетия определило, какой будет книжность на Руси.":
    "Pismo przyniosła **cyrylica**, stworzona w IX wieku przez **Cyryla i Metodego** dla języków słowiańskich. Nabożeństwo szło nie po grecku, lecz w języku zrozumiałym, i to na stulecia przesądziło, jaka będzie piśmienność na Rusi.",
  "В каком году произошло Крещение Руси?": "W którym roku nastąpił chrzest Rusi?",
  "В 862 году": "W 862 roku",
  "В 882 году": "W 882 roku",
  "В 988 году": "W 988 roku",
  "В 1097 году": "W 1097 roku",
  "988 год, при князе Владимире. 862-й — призвание Рюрика по летописи, 882-й — объединение Новгорода и Киева, 1097-й — Любечский съезд.":
    "W 988 roku, za księcia Włodzimierza. 862 to powołanie Ruryka według latopisu, 882 — połączenie Nowogrodu i Kijowa, 1097 — zjazd w Lubeczu.",
  "Ярослав Мудрый": "Jarosław Mądry",
  "При **Ярославе Мудром** (XI век) Киев достиг расцвета. Появился первый письменный свод законов — **«Русская Правда»**, в котором вместо кровной мести устанавливались денежные штрафы. Была построена **София Киевская**, а дочери Ярослава вышли замуж за королей Франции, Норвегии и Венгрии: Русь была частью европейской династической сети.":
    "Za **Jarosława Mądrego** (XI wiek) Kijów osiągnął rozkwit. Powstał pierwszy pisany zbiór praw — **„Ruska Prawda”**, w którym zamiast zemsty rodowej ustanowiono kary pieniężne. Zbudowano **Sofię Kijowską**, a córki Jarosława wyszły za królów Francji, Norwegii i Węgier: Ruś była częścią europejskiej sieci dynastycznej.",
  "Раздробленность": "Rozbicie dzielnicowe",
  "В **1097 году** князья съехались в **Любече** и постановили: **каждый держит свою отчину**, то есть земли, унаследованные от отца. Съезд собирали, чтобы прекратить усобицы, а получилось иначе: он закрепил разделение Руси на самостоятельные княжества.":
    "W **1097 roku** książęta zjechali się w **Lubeczu** i postanowili: **każdy trzyma swoją ojcowiznę**, czyli ziemie odziedziczone po ojcu. Zjazd zwołano, żeby przerwać waśnie, a wyszło inaczej: utrwalił podział Rusi na samodzielne księstwa.",
  "Новгородская республика": "Republika Nowogrodzka",
  "Князя приглашали и могли изгнать, а решало вече — собрание горожан. Ближе к городской республике, чем к княжеству.":
    "Księcia zapraszano i można go było wygnać, a rozstrzygało wiece — zgromadzenie mieszczan. Bliżej republiki miejskiej niż księstwa.",
  "Владимиро-Суздальская земля": "Ziemia włodzimiersko-suzdalska",
  "Северо-восток, куда при Андрее Боголюбском сместился центр силы. Из этих земель позже вырастет Москва.":
    "Północny wschód, dokąd za Andrzeja Bogolubskiego przesunął się ośrodek siły. Z tych ziem wyrośnie później Moskwa.",
  "Галицко-Волынская земля": "Ziemia halicko-wołyńska",
  "Юго-запад, тесно связанный с Польшей и Венгрией.":
    "Południowy zachód, ściśle związany z Polską i Węgrami.",
  "Владимир Мономах": "Włodzimierz Monomach",
  "Последний, кому удалось на время собрать Русь под одной рукой, в начале XII века.":
    "Ostatni, któremu udało się na czas jakiś zebrać Ruś pod jedną ręką, na początku XII wieku.",
  "Как назывался первый письменный свод законов Руси?":
    "Jak nazywał się pierwszy pisany zbiór praw Rusi?",
  "Судебник": "Sudiebnik",
  "Русская Правда": "Ruska Prawda",
  "Соборное уложение": "Sobornoje ułożenije",
  "Стоглав": "Stogław",
  "«Русская Правда» при Ярославе Мудром. Судебник — свод Ивана III 1497 года, а Соборное уложение — 1649 года: три разных документа из трёх разных эпох.":
    "„Ruska Prawda” za Jarosława Mądrego. Sudiebnik to zbiór Iwana III z 1497 roku, a Sobornoje ułożenije pochodzi z 1649: trzy różne dokumenty z trzech różnych epok.",
  "Нашествие": "Najazd",
  "В **1237–1240 годах** на Русь пришли войска **Батыя**. Рязань, Владимир, десятки городов были взяты и сожжены; в **1240 году** пал **Киев**. Раздробленность, начатая в Любече, не позволила выставить общее войско, и княжества гибли поодиночке.":
    "W **latach 1237–1240** na Ruś przyszły wojska **Batu-chana**. Riazań, Włodzimierz, dziesiątki miast zostały zdobyte i spalone; w **1240 roku** padł **Kijów**. Rozbicie zapoczątkowane w Lubeczu nie pozwoliło wystawić wspólnego wojska, a księstwa ginęły po kolei.",
  "К этому времени относится и **«Слово о полку Игореве»** — поэма о неудачном походе против половцев, главный памятник литературы домонгольской Руси. Её тема — та же беда: князья не действуют вместе.":
    "Do tego czasu należy też **„Słowo o wyprawie Igora”** — poemat o nieudanej wyprawie przeciw Połowcom, główny zabytek literatury Rusi przedmongolskiej. Jego temat to ta sama bieda: książęta nie działają razem.",
  "Что постановил Любечский съезд князей 1097 года?":
    "Co postanowił zjazd książąt w Lubeczu w 1097 roku?",
  "Что каждый князь держит свою отчину": "Że każdy książę trzyma swoją ojcowiznę",
  "Что Русь переходит к единому наследованию": "Że Ruś przechodzi na jednolite dziedziczenie",
  "Что столица переносится во Владимир": "Że stolicę przenosi się do Włodzimierza",
  "Что вводится единый свод законов": "Że wprowadza się jednolity zbiór praw",
  "Съезд собирали ради прекращения усобиц, но он закрепил разделение земель между княжескими линиями. Через сто сорок лет это обернулось невозможностью выставить общее войско.":
    "Zjazd zwołano dla przerwania waśni, ale utrwalił on podział ziem między linie książęce. Sto czterdzieści lat później obróciło się to niemożnością wystawienia wspólnego wojska.",
  "**Киевская Русь** — общее наследие России, Украины и Беларуси, и историография в каждой из трёх стран расставляет здесь свои акценты. Даты и события при этом одни и те же.":
    "**Ruś Kijowska** to wspólne dziedzictwo Rosji, Ukrainy i Białorusi, a historiografia każdego z tych trzech krajów rozkłada tu własne akcenty. Daty i wydarzenia pozostają przy tym te same.",
  "Ордынское время и возвышение Москвы": "Czasy ordy i wzrost Moskwy",
  "Почему это важно: за двести сорок лет зависимости центр русских земель окончательно переместился на северо-восток, и незначительный городок стал столицей. Как это вышло — вопрос не случая, а расчёта.":
    "Dlaczego to ważne: przez dwieście czterdzieści lat zależności ośrodek ziem ruskich przesunął się ostatecznie na północny wschód, a nieznaczące miasteczko stało się stolicą. Jak do tego doszło, to nie kwestia przypadku, lecz wyrachowania.",
  "Как была устроена зависимость": "Jak urządzona była zależność",
  "Ордынское владычество не означало прямого управления. Князья оставались на местах, но получали от хана **ярлык** — грамоту на право княжить, — и собирали **дань**, которую называли **выходом**. Сначала её собирали ханские сборщики, **баскаки**, потом это право перешло к самим князьям, и здесь начинается история Москвы.":
    "Zwierzchnictwo ordy nie oznaczało bezpośredniego zarządu. Książęta zostawali na miejscu, ale dostawali od chana **jarłyk** — pismo dające prawo do panowania — i zbierali **daninę**, którą nazywano **wychodem**. Najpierw zbierali ją chańscy poborcy, **baskakowie**, potem prawo to przeszło na samych książąt, i tu zaczyna się historia Moskwy.",
  "Одновременно с востока давила Орда, а с запада шли другие противники. **Александр Невский** разбил шведов на Неве в **1240 году** и Ливонский орден на льду Чудского озера в **1242-м**, при этом с Ордой он выбрал путь соглашения: воевать на два фронта было нельзя.":
    "Jednocześnie ze wschodu naciskała Orda, a z zachodu szli inni przeciwnicy. **Aleksander Newski** rozbił Szwedów nad Newą w **1240 roku** i zakon inflancki na lodzie jeziora Pejpus w **1242**, przy czym wobec Ordy wybrał drogę porozumienia: nie dało się wojować na dwa fronty.",
  "Расчёт московских князей": "Wyrachowanie książąt moskiewskich",
  "**Иван Калита** (1325–1340) добился права **собирать дань** со всех русских земель и отвозить её в Орду. Часть оседала в Москве. Он же добился переноса в Москву **митрополичьей кафедры** — и город стал не только богатым, но и церковным центром.":
    "**Iwan Kalita** (1325–1340) uzyskał prawo **zbierania daniny** ze wszystkich ziem ruskich i odwożenia jej do Ordy. Część osiadała w Moskwie. On też doprowadził do przeniesienia do Moskwy **stolicy metropolitalnej** — i miasto stało się nie tylko bogate, ale i cerkiewnym ośrodkiem.",
  "Дань через свои руки": "Danina przez własne ręce",
  "Право собирать выход давало деньги и власть над соседями, которые платили через Москву.":
    "Prawo zbierania wychodu dawało pieniądze i władzę nad sąsiadami, którzy płacili przez Moskwę.",
  "Митрополит в Москве": "Metropolita w Moskwie",
  "Церковный центр придавал городу вес, которого не давало его положение на карте.":
    "Ośrodek cerkiewny dawał miastu wagę, jakiej nie dawało mu położenie na mapie.",
  "Скупка земель": "Skupowanie ziem",
  "Московские князья покупали и выменивали села и волости, расширяя владения без войны.":
    "Książęta moskiewscy kupowali i wymieniali wsie oraz włości, powiększając swoje władanie bez wojny.",
  "Наследование от отца к сыну": "Dziedziczenie z ojca na syna",
  "В Москве закрепился прямой порядок, тогда как в других землях княжества дробились между братьями.":
    "W Moskwie utrwalił się porządek prosty, podczas gdy w innych ziemiach księstwa dzieliły się między braci.",
  "Что такое ярлык в ордынское время?": "Czym był jarłyk w czasach ordy?",
  "Дань, которую платили Орде": "Daniną płaconą Ordzie",
  "Ханская грамота на право княжить": "Pismem chana dającym prawo do panowania",
  "Знак отличия ордынского воина": "Odznaką wojownika ordy",
  "Договор между княжествами": "Umową między księstwami",
  "Ярлык давал право на княжение, и за него между князьями шла постоянная борьба. Дань называлась выходом, а собирали её сначала баскаки, потом сами князья.":
    "Jarłyk dawał prawo do panowania i toczyła się o niego nieustanna walka między książętami. Danina nazywała się wychodem, a zbierali ją najpierw baskakowie, potem sami książęta.",
  "Куликово поле": "Pole Kulikowe",
  "В **1380 году** войско под началом московского князя **Дмитрия Донского** разбило на **Куликовом поле** армию **Мамая**. Победа не сняла зависимости — через два года Тохтамыш сжёг Москву, — но показала, что Орду можно побеждать, и что собирать общее войско способна именно Москва.":
    "W **1380 roku** wojsko pod wodzą moskiewskiego księcia **Dymitra Dońskiego** rozbiło na **Polu Kulikowym** armię **Mamaja**. Zwycięstwo nie zniosło zależności — dwa lata później Tochtamysz spalił Moskwę — ale pokazało, że Ordę można pokonywać i że wspólne wojsko potrafi zebrać właśnie Moskwa.",
  "В каком году произошла Куликовская битва?":
    "W którym roku doszło do bitwy na Polu Kulikowym?",
  "В 1240 году": "W 1240 roku",
  "В 1242 году": "W 1242 roku",
  "В 1380 году": "W 1380 roku",
  "В 1480 году": "W 1480 roku",
  "1380 год, Дмитрий Донской против Мамая. 1240 и 1242 — победы Александра Невского на западе, 1480 — стояние на Угре, которым зависимость закончилась.":
    "W 1380 roku, Dymitr Doński przeciw Mamajowi. 1240 i 1242 to zwycięstwa Aleksandra Newskiego na zachodzie, a 1480 — stanie nad Ugrą, którym zakończyła się zależność.",
  "Иван III": "Iwan III",
  "**Иван III** (1462–1505) завершил дело. В **1478 году** он присоединил **Новгород**, положив конец его вечевой республике, а в **1480-м** произошло **стояние на реке Угре**: два войска простояли друг против друга и разошлись без сражения. Этой датой принято обозначать **конец ордынской зависимости**.":
    "**Iwan III** (1462–1505) dokończył dzieła. W **1478 roku** przyłączył **Nowogród**, kładąc kres jego republice wiecowej, a w **1480** doszło do **stania nad rzeką Ugrą**: dwa wojska przestały naprzeciw siebie i rozeszły się bez bitwy. Tą datą przyjęło się oznaczać **koniec zależności od Ordy**.",
  "При нём же появились **Судебник 1497 года** — единый свод законов для всей страны, — титул **«государь всея Руси»** и **двуглавый орёл** в качестве герба. Тогда же в Москве построили кирпичный Кремль, который стоит и сегодня.":
    "Za jego czasów pojawiły się też **Sudiebnik z 1497 roku** — jednolity zbiór praw dla całego kraju — tytuł **„gosudar wsieja Rusi”** i **dwugłowy orzeł** jako herb. Wtedy też zbudowano w Moskwie ceglany Kreml, który stoi do dziś.",
  "К этому времени относится и **Андрей Рублёв** с его «Троицей» — вершина русской иконописи, написанная в начале XV века.":
    "Do tego czasu należy też **Andriej Rublow** ze swoją „Trójcą Świętą” — szczytem ruskiego malarstwa ikonowego, namalowanym na początku XV wieku.",
  "Чем закончилось стояние на реке Угре в 1480 году?":
    "Czym zakończyło się stanie nad rzeką Ugrą w 1480 roku?",
  "Крупным сражением и разгромом Орды": "Wielką bitwą i rozgromieniem Ordy",
  "Войска разошлись без битвы, и ордынская зависимость закончилась":
    "Wojska rozeszły się bez bitwy, a zależność od Ordy się skończyła",
  "Москва признала власть хана ещё на сто лет": "Moskwa uznała władzę chana na kolejne sto lat",
  "Присоединением Новгорода": "Przyłączeniem Nowogrodu",
  "Сражения не было: войска простояли по берегам и разошлись. Именно этой датой обозначают конец зависимости, а Новгород был присоединён двумя годами раньше.":
    "Bitwy nie było: wojska przestały na brzegach i rozeszły się. Właśnie tą datą oznacza się koniec zależności, a Nowogród przyłączono dwa lata wcześniej.",
  "**Куликовская битва** и **стояние на Угре** разделены ровно столетием. Первая была громкой победой, но зависимости не сняла; вторая прошла без боя и стала концом эпохи.":
    "**Bitwę na Polu Kulikowym** i **stanie nad Ugrą** dzieli równo stulecie. Pierwsza była głośnym zwycięstwem, ale zależności nie zniosła; drugie przeszło bez walki i stało się końcem epoki.",
  "Московское царство": "Carstwo Moskiewskie",
  "Почему это важно: за полтора столетия страна получает царя, теряет династию, едва не исчезает в Смуте и выбирает новую власть собором. Здесь же закрепляется крепостное право, которое продержится двести лет.":
    "Dlaczego to ważne: w półtora stulecia kraj dostaje cara, traci dynastię, o mało nie ginie w Smucie i wybiera nową władzę soborem. Tu też utrwala się poddaństwo, które przetrwa dwieście lat.",
  "Первый царь": "Pierwszy car",
  "В **1547 году** **Иван IV** венчался на царство — до него московские правители звались великими князьями. Начало правления было временем реформ: **Судебник 1550 года**, созыв **земских соборов** — сословных собраний, — упорядочение управления и церковные постановления Стоглавого собора.":
    "W **1547 roku** **Iwan IV** koronował się na cara — przed nim władcy moskiewscy nosili tytuł wielkich książąt. Początek panowania był czasem reform: **Sudiebnik z 1550 roku**, zwoływanie **soborów ziemskich** — zgromadzeń stanowych — uporządkowanie zarządu i postanowienia cerkiewne soboru Stogławego.",
  "Тогда же расширились границы: в **1552 году** была взята **Казань**, в **1556-м** — **Астрахань**, и Волга целиком стала русской рекой. В 1580-е годы отряд **Ермака** начал присоединение **Сибири** — движение, которое за семьдесят лет доведёт русских землепроходцев до Тихого океана.":
    "Wtedy też rozszerzyły się granice: w **1552 roku** zdobyto **Kazań**, w **1556** — **Astrachań**, i Wołga stała się w całości rzeką rosyjską. W latach osiemdziesiątych XVI wieku oddział **Jermaka** rozpoczął przyłączanie **Syberii** — ruch, który w siedemdziesiąt lat doprowadzi rosyjskich odkrywców nad Ocean Spokojny.",
  "Опричнина": "Opricznina",
  "С **1565 по 1572 год** царь разделил государство на **опричнину**, управляемую лично им, и остальную землю. Годы опричнины — это массовые казни, конфискации, разгром Новгорода и разорение центральных уездов. Вместе с затяжной и проигранной **Ливонской войной** это надолго подорвало хозяйство страны.":
    "Od **1565 do 1572 roku** car podzielił państwo na **opriczninę**, zarządzaną osobiście przez niego, i resztę ziemi. Lata opriczniny to masowe egzekucje, konfiskaty, rozgromienie Nowogrodu i wyniszczenie ziem centralnych. Razem z przewlekłą i przegraną **wojną inflancką** nadwątliło to na długo gospodarkę kraju.",
  "В **1589 году** в Москве было учреждено **патриаршество**: русская церковь стала полностью самостоятельной.":
    "W **1589 roku** w Moskwie ustanowiono **patriarchat**: cerkiew rosyjska stała się całkowicie samodzielna.",
  "Кто первым в русской истории венчался на царство?":
    "Kto pierwszy w historii Rosji koronował się na cara?",
  "Иван IV": "Iwan IV",
  "Михаил Романов": "Michaił Romanow",
  "Пётр I": "Piotr I",
  "Иван IV, в 1547 году. Иван III носил титул государя всея Руси, а Пётр I два века спустя примет титул императора: три ступени одного восхождения.":
    "Iwan IV, w 1547 roku. Iwan III nosił tytuł gosudara wsieja Rusi, a Piotr I dwa wieki później przyjmie tytuł cesarza: trzy stopnie jednego wznoszenia.",
  "Смутное время": "Wielka Smuta",
  "После смерти сына Ивана IV династия пресеклась, и с **1598 по 1613 год** страна прошла через **Смуту**: борьбу за престол, самозванцев, объявлявших себя чудом спасшимся царевичем, страшный голод начала века и **польско-литовскую интервенцию**. В Москве стоял иноземный гарнизон, и государство фактически перестало существовать.":
    "Po śmierci syna Iwana IV dynastia wygasła i od **1598 do 1613 roku** kraj przeszedł przez **Smutę**: walkę o tron, samozwańców podających się za cudownie ocalonego carewicza, straszliwy głód początku wieku i **interwencję polsko-litewską**. W Moskwie stał obcy garnizon, a państwo faktycznie przestało istnieć.",
  "Выход нашёлся снизу. В Нижнем Новгороде земский староста **Кузьма Минин** собрал средства, а князь **Дмитрий Пожарский** возглавил ополчение. В **1612 году** Москва была освобождена — это событие и лежит в основе **Дня народного единства** 4 ноября.":
    "Wyjście znalazło się od dołu. W Niżnym Nowogrodzie starosta ziemski **Kuźma Minin** zebrał środki, a książę **Dymitr Pożarski** stanął na czele pospolitego ruszenia. W **1612 roku** Moskwę wyzwolono — i to wydarzenie leży u podstaw **Dnia Jedności Narodowej** 4 listopada.",
  "В **1613 году** **Земский собор** избрал царём шестнадцатилетнего **Михаила Романова**. Династия **Романовых** будет править триста четыре года.":
    "W **1613 roku** **Sobór Ziemski** wybrał na cara szesnastoletniego **Michaiła Romanowa**. Dynastia **Romanowów** będzie panować trzysta cztery lata.",
  "Кого Земский собор избрал царём в 1613 году?":
    "Kogo Sobór Ziemski wybrał na cara w 1613 roku?",
  "Бориса Годунова": "Borysa Godunowa",
  "Михаила Романова": "Michaiła Romanowa",
  "Дмитрия Пожарского": "Dymitra Pożarskiego",
  "Владислава, королевича польского": "Władysława, królewicza polskiego",
  "Михаила Романова, и с него начинается династия, правившая до 1917 года. Пожарский возглавлял ополчение, но на престол не претендовал.":
    "Michaiła Romanowa, i od niego zaczyna się dynastia panująca do 1917 roku. Pożarski stał na czele pospolitego ruszenia, ale do tronu nie pretendował.",
  "Век семнадцатый": "Wiek siedemnasty",
  "**Соборное уложение 1649 года** — свод законов, действовавший почти двести лет, — окончательно закрепило **крепостное право**: сыск беглых крестьян стал бессрочным, и крестьянин был навсегда прикреплён к земле и владельцу.":
    "**Sobornoje ułożenije z 1649 roku** — zbiór praw obowiązujący prawie dwieście lat — ostatecznie utrwaliło **poddaństwo**: poszukiwanie zbiegłych chłopów stało się bezterminowe, a chłop był na zawsze przypisany do ziemi i do właściciela.",
  "В середине века патриарх **Никон** провёл церковную реформу, исправив книги и обряды по греческому образцу. Часть верующих её не приняла: произошёл **раскол**, и **старообрядцы** на столетия оказались вне господствующей церкви.":
    "W połowie wieku patriarcha **Nikon** przeprowadził reformę cerkiewną, poprawiając księgi i obrzędy według wzoru greckiego. Część wiernych jej nie przyjęła: doszło do **rozłamu**, a **starowiercy** na stulecia znaleźli się poza cerkwią panującą.",
  "1649 · Соборное уложение": "1649 · Sobornoje ułożenije",
  "Бессрочный сыск беглых. Крепостное право приобретает окончательный вид.":
    "Bezterminowe poszukiwanie zbiegów. Poddaństwo przybiera ostateczny kształt.",
  "1654 · Переяславская рада": "1654 · Rada perejasławska",
  "Войско Запорожское переходит под власть московского царя, и начинается долгая война с Речью Посполитой.":
    "Wojsko Zaporoskie przechodzi pod władzę cara moskiewskiego i zaczyna się długa wojna z Rzecząpospolitą.",
  "1648 · До Тихого океана": "1648 · Nad Ocean Spokojny",
  "Семён Дежнёв проходит проливом между Азией и Америкой. Освоение Сибири занимает меньше века.":
    "Siemion Dieżniow przechodzi cieśniną między Azją a Ameryką. Zagospodarowanie Syberii zajmuje mniej niż stulecie.",
  "Раскол": "Rozłam",
  "Реформа Никона делит верующих. Старообрядчество сохранится до наших дней.":
    "Reforma Nikona dzieli wiernych. Starowierstwo przetrwa do naszych czasów.",
  "Что окончательно закрепило Соборное уложение 1649 года?":
    "Co ostatecznie utrwaliło Sobornoje ułożenije z 1649 roku?",
  "Патриаршество": "Patriarchat",
  "Крепостное право": "Poddaństwo",
  "Право созывать земские соборы": "Prawo zwoływania soborów ziemskich",
  "Присоединение Сибири": "Przyłączenie Syberii",
  "Сыск беглых крестьян стал бессрочным, и крестьянин оказался прикреплён к земле навсегда. Отменят крепостное право только в 1861 году.":
    "Poszukiwanie zbiegłych chłopów stało się bezterminowe, a chłop okazał się przypisany do ziemi na zawsze. Poddaństwo zniosą dopiero w 1861 roku.",
  "**Земский собор** — не парламент. Он собирался нерегулярно, по решению власти, и представлял сословия, а не избирателей. Но именно собор в 1613 году выбрал царя, и этот прецедент остался в памяти.":
    "**Sobór Ziemski** to nie parlament. Zbierał się nieregularnie, decyzją władzy, i reprezentował stany, a nie wyborców. Ale to właśnie sobór w 1613 roku wybrał cara, i ten precedens pozostał w pamięci.",
  "Российская империя": "Imperium Rosyjskie",
  "Почему это важно: за двести лет страна перестраивается сверху дважды — при Петре и при Александре II. Оба раза реформы идут от власти, а не снизу, и оба раза не доводятся до конца.":
    "Dlaczego to ważne: w dwieście lat kraj przebudowuje się z góry dwukrotnie — za Piotra i za Aleksandra II. Oba razy reformy idą od władzy, a nie od dołu, i oba razy nie zostają doprowadzone do końca.",
  "**Пётр I** правил с конца XVII века до **1725 года** и перестроил государство целиком. Он создал **регулярную армию и флот**, заменил приказы **коллегиями**, учредил **Сенат**, ввёл **Табель о рангах**, по которой служебное положение зависело от чина, а не от происхождения, и перевёл страну на новый календарь.":
    "**Piotr I** panował od końca XVII wieku do **1725 roku** i przebudował państwo w całości. Stworzył **regularną armię i flotę**, zastąpił prikazy **kolegiami**, powołał **Senat**, wprowadził **Tabelę rang**, według której pozycja służbowa zależała od stopnia, a nie od pochodzenia, i przestawił kraj na nowy kalendarz.",
  "В **1703 году** он основал **Санкт-Петербург** и вскоре перенёс туда столицу — она останется там больше двухсот лет. Долгая **Северная война** со Швецией (1700–1721) с победой под **Полтавой** в 1709 году дала выход к Балтике, и в **1721 году** Россия была провозглашена **империей**.":
    "W **1703 roku** założył **Petersburg** i wkrótce przeniósł tam stolicę — pozostanie tam ponad dwieście lat. Długa **wojna północna** ze Szwecją (1700–1721) ze zwycięstwem pod **Połtawą** w 1709 roku dała wyjście na Bałtyk, a w **1721 roku** Rosję proklamowano **imperium**.",
  "В каком году Россия была провозглашена империей?":
    "W którym roku Rosję proklamowano imperium?",
  "В 1703 году": "W 1703 roku",
  "В 1709 году": "W 1709 roku",
  "В 1721 году": "W 1721 roku",
  "В 1762 году": "W 1762 roku",
  "1721 год, по окончании Северной войны. 1703-й — основание Петербурга, 1709-й — Полтавская битва: три даты одного царствования.":
    "W 1721 roku, po zakończeniu wojny północnej. 1703 to założenie Petersburga, 1709 — bitwa pod Połtawą: trzy daty jednego panowania.",
  "Восемнадцатый век": "Wiek osiemnasty",
  "После Петра наступила эпоха **дворцовых переворотов**: гвардия несколько раз решала, кто займёт престол. **Екатерина II** (1762–1796) расширила границы на юг и запад: в **1783 году** был присоединён **Крым**, а разделы Речи Посполитой отодвинули границу далеко на запад.":
    "Po Piotrze nastała epoka **przewrotów pałacowych**: gwardia kilka razy rozstrzygała, kto zajmie tron. **Katarzyna II** (1762–1796) rozszerzyła granice na południe i na zachód: w **1783 roku** przyłączono **Krym**, a rozbiory Rzeczypospolitej odsunęły granicę daleko na zachód.",
  "При ней же случилось крупнейшее народное восстание — **пугачёвское** (1773–1775), охватившее Урал и Поволжье. Просвещённые замыслы вроде Уложенной комиссии остались на бумаге, а крепостное право стало жёстче, чем прежде.":
    "Za jej czasów doszło też do największego powstania ludowego — **pugaczowskiego** (1773–1775), które objęło Ural i Powołże. Oświeceniowe zamiary w rodzaju komisji kodyfikacyjnej zostały na papierze, a poddaństwo stało się twardsze niż przedtem.",
  "1812 год": "Rok 1812",
  "В **1812 году** армия Наполеона вошла в Россию. После **Бородинского сражения** русская армия под началом **Кутузова** оставила Москву, которая почти целиком сгорела. Отступление французов зимой обернулось катастрофой: из огромной армии вернулись немногие.":
    "W **1812 roku** armia Napoleona weszła do Rosji. Po **bitwie pod Borodino** armia rosyjska pod wodzą **Kutuzowa** oddała Moskwę, która niemal w całości spłonęła. Odwrót Francuzów zimą obrócił się katastrofą: z ogromnej armii wróciło niewielu.",
  "Война получила название **Отечественной**, а поход русской армии в Европу привёл её офицеров в Париж. Вернувшись, часть из них создала тайные общества, и в **1825 году** произошло восстание **декабристов** на Сенатской площади — первое выступление за конституцию в русской истории.":
    "Wojna dostała nazwę **Ojczyźnianej**, a wyprawa armii rosyjskiej do Europy przywiodła jej oficerów do Paryża. Po powrocie część z nich założyła tajne stowarzyszenia, a w **1825 roku** doszło do powstania **dekabrystów** na placu Senackim — pierwszego wystąpienia o konstytucję w historii Rosji.",
  "Что произошло в 1812 году?": "Co wydarzyło się w 1812 roku?",
  "Восстание декабристов": "Powstanie dekabrystów",
  "Отечественная война против армии Наполеона": "Wojna ojczyźniana przeciw armii Napoleona",
  "Отмена крепостного права": "Zniesienie poddaństwa",
  "Провозглашение империи": "Proklamowanie imperium",
  "Вторжение Наполеона, Бородино, пожар Москвы и гибель Великой армии на обратном пути. Восстание декабристов — 1825 год, отмена крепостного права — 1861-й.":
    "Najazd Napoleona, Borodino, pożar Moskwy i zagłada Wielkiej Armii w drodze powrotnej. Powstanie dekabrystów to rok 1825, a zniesienie poddaństwa — 1861.",
  "Великие реформы": "Wielkie reformy",
  "**19 февраля 1861 года** **Александр II** подписал манифест об **отмене крепостного права**. Двадцать три миллиона человек получили личную свободу — но землю пришлось выкупать, и выкупные платежи легли на крестьян на десятилетия вперёд.":
    "**19 lutego 1861 roku** **Aleksander II** podpisał manifest o **zniesieniu poddaństwa**. Dwadzieścia trzy miliony ludzi uzyskały wolność osobistą — ale ziemię trzeba było wykupić, a spłaty wykupne legły na chłopach na dziesięciolecia naprzód.",
  "Земская реформа": "Reforma ziemska",
  "1864 год: выборные органы местного самоуправления, занимавшиеся школами, больницами и дорогами.":
    "Rok 1864: wybieralne organy samorządu lokalnego, zajmujące się szkołami, szpitalami i drogami.",
  "Судебная реформа": "Reforma sądowa",
  "1864 год: гласный суд, состязательность, адвокатура и суд присяжных.":
    "Rok 1864: jawny sąd, kontradyktoryjność, adwokatura i sąd przysięgłych.",
  "Военная реформа": "Reforma wojskowa",
  "1874 год: всеобщая воинская повинность вместо рекрутских наборов.":
    "Rok 1874: powszechny obowiązek wojskowy zamiast branki rekruckiej.",
  "Транссиб": "Kolej transsyberyjska",
  "Строительство с 1891 года: самая длинная железная дорога в мире связала Москву с Тихим океаном.":
    "Budowa od 1891 roku: najdłuższa kolej świata połączyła Moskwę z Oceanem Spokojnym.",
  "Реформы не сняли напряжения. **Революция 1905 года** заставила власть издать **Манифест 17 октября**, которым были обещаны гражданские свободы и созвана **Государственная дума** — первый в русской истории выборный законодательный орган. **Столыпинская реформа** попыталась создать слой самостоятельных крестьян-собственников, но времени не хватило: в **1914 году** Россия вступила в **Первую мировую войну**.":
    "Reformy nie zdjęły napięcia. **Rewolucja 1905 roku** zmusiła władzę do wydania **Manifestu październikowego**, w którym obiecano swobody obywatelskie i zwołano **Dumę Państwową** — pierwszy w historii Rosji wybieralny organ ustawodawczy. **Reforma Stołypina** próbowała stworzyć warstwę samodzielnych chłopów-właścicieli, ale zabrakło czasu: w **1914 roku** Rosja weszła w **pierwszą wojnę światową**.",
  "Тот же век дал мировую культуру: **Пушкин**, **Гоголь**, **Толстой**, **Достоевский**, **Чехов** в литературе, **Чайковский**, **Мусоргский**, **Римский-Корсаков** в музыке, **Менделеев** и **Павлов** в науке.":
    "Ten sam wiek dał kulturę światową: **Puszkin**, **Gogol**, **Tołstoj**, **Dostojewski**, **Czechow** w literaturze, **Czajkowski**, **Musorgski**, **Rimski-Korsakow** w muzyce, **Mendelejew** i **Pawłow** w nauce.",
  "В каком году было отменено крепостное право?": "W którym roku zniesiono poddaństwo?",
  "В 1825 году": "W 1825 roku",
  "В 1861 году": "W 1861 roku",
  "В 1874 году": "W 1874 roku",
  "В 1905 году": "W 1905 roku",
  "19 февраля 1861 года, манифест Александра II. Личную свободу получили около двадцати трёх миллионов человек, но землю им пришлось выкупать.":
    "19 lutego 1861 roku, manifestem Aleksandra II. Wolność osobistą uzyskało około dwudziestu trzech milionów ludzi, ale ziemię musieli wykupić.",
  "**Государственная дума** появилась в 1906 году, после революции 1905-го, и была распущена в 1917-м. Нынешняя Дума — не её продолжение: она создана Конституцией 1993 года, хотя имя взято оттуда.":
    "**Duma Państwowa** pojawiła się w 1906 roku, po rewolucji 1905, i została rozwiązana w 1917. Dzisiejsza Duma nie jest jej kontynuacją: powołała ją Konstytucja z 1993 roku, choć nazwę wzięto stamtąd.",
  "1917 год и Гражданская война": "Rok 1917 i wojna domowa",
  "Почему это важно: в 1917 году революций было две, а не одна, и между ними прошло восемь месяцев. Кто их различает, тот понимает и всё, что было дальше.":
    "Dlaczego to ważne: w 1917 roku rewolucje były dwie, nie jedna, a między nimi minęło osiem miesięcy. Kto je rozróżnia, ten rozumie i wszystko, co przyszło potem.",
  "Февраль": "Luty",
  "К третьему году войны в столице не хватало хлеба, транспорт не справлялся, а доверие к власти было исчерпано. В конце **февраля 1917 года** волнения в Петрограде переросли в восстание, гарнизон перешёл на сторону улицы, и **2 марта Николай II отрёкся от престола**. Монархия, стоявшая триста четыре года, кончилась за неделю.":
    "W trzecim roku wojny w stolicy brakowało chleba, transport nie nadążał, a zaufanie do władzy się wyczerpało. Pod koniec **lutego 1917 roku** niepokoje w Piotrogrodzie przerosły w powstanie, garnizon przeszedł na stronę ulicy, a **2 marca Mikołaj II abdykował**. Monarchia, która stała trzysta cztery lata, skończyła się w tydzień.",
  "Установилось **двоевластие**: **Временное правительство**, объявившее себя властью до Учредительного собрания, и **Советы рабочих и солдатских депутатов**, за которыми стояли гарнизон и заводы. Ни одна из сторон не решалась ни выйти из войны, ни разделить землю, а именно этого ждала страна.":
    "Ustanowiła się **dwuwładza**: **Rząd Tymczasowy**, który ogłosił się władzą do czasu Zgromadzenia Ustawodawczego, i **Rady delegatów robotniczych i żołnierskich**, za którymi stały garnizon i fabryki. Żadna ze stron nie decydowała się ani wyjść z wojny, ani podzielić ziemi, a właśnie tego kraj oczekiwał.",
  "Что произошло в феврале и марте 1917 года?": "Co wydarzyło się w lutym i marcu 1917 roku?",
  "Большевики взяли власть": "Bolszewicy przejęli władzę",
  "Николай II отрёкся от престола и установилось двоевластие":
    "Mikołaj II abdykował i ustanowiła się dwuwładza",
  "Был подписан Брестский мир": "Podpisano pokój brzeski",
  "Был образован СССР": "Utworzono ZSRR",
  "Февральская революция закончилась отречением и появлением двух центров власти — Временного правительства и Советов. Большевики придут к власти в октябре, через восемь месяцев.":
    "Rewolucja lutowa skończyła się abdykacją i pojawieniem dwóch ośrodków władzy — Rządu Tymczasowego i Rad. Bolszewicy przyjdą do władzy w październiku, osiem miesięcy później.",
  "Октябрь": "Październik",
  "**25 октября по старому стилю** — 7 ноября по новому — вооружённые отряды заняли ключевые точки Петрограда, и **II съезд Советов** объявил о переходе власти к Советам. Первыми же актами стали **Декрет о мире** и **Декрет о земле**: именно то, чего Временное правительство не сделало.":
    "**25 października według starego stylu** — 7 listopada według nowego — oddziały zbrojne zajęły kluczowe punkty Piotrogrodu, a **II Zjazd Rad** ogłosił przejście władzy do Rad. Pierwszymi aktami stały się **Dekret o pokoju** i **Dekret o ziemi**: właśnie to, czego Rząd Tymczasowy nie zrobił.",
  "Выборы в **Учредительное собрание** состоялись, но большевики получили меньшинство. Собрание, созванное в **январе 1918 года**, было распущено после первого же заседания. В **марте 1918 года** был подписан **Брестский мир**: Россия вышла из войны ценой огромных территорий. Тогда же столица вернулась в **Москву**.":
    "Wybory do **Zgromadzenia Ustawodawczego** się odbyły, ale bolszewicy dostali mniejszość. Zgromadzenie, zwołane w **styczniu 1918 roku**, rozwiązano zaraz po pierwszym posiedzeniu. W **marcu 1918 roku** podpisano **pokój brzeski**: Rosja wyszła z wojny kosztem ogromnych terytoriów. Wtedy też stolica wróciła do **Moskwy**.",
  "Гражданская война": "Wojna domowa",
  "С **1918 по 1922 год** страна воевала сама с собой. Против **красных** выступили **белые** армии на юге, востоке и северо-западе, действовали крестьянские восстания и войска иностранных держав. В **июле 1918 года** в Екатеринбурге были расстреляны **Николай II и его семья**.":
    "Od **1918 do 1922 roku** kraj wojował sam ze sobą. Przeciw **czerwonym** wystąpiły **białe** armie na południu, wschodzie i północnym zachodzie, działały powstania chłopskie i wojska obcych mocarstw. W **lipcu 1918 roku** w Jekaterynburgu rozstrzelano **Mikołaja II i jego rodzinę**.",
  "Военный коммунизм": "Komunizm wojenny",
  "Продразвёрстка — принудительное изъятие хлеба у крестьян, запрет торговли, всеобщая трудовая повинность.":
    "Prodrazwiorstka — przymusowe odbieranie zboża chłopom, zakaz handlu, powszechny obowiązek pracy.",
  "Красный и белый террор": "Czerwony i biały terror",
  "Массовые казни велись обеими сторонами. Счёт жертв шёл на сотни тысяч.":
    "Masowe egzekucje prowadziły obie strony. Ofiary liczono w setkach tysięcy.",
  "Голод 1921–1922 годов": "Głód lat 1921–1922",
  "Поволжье и юг: неурожай на разорённой войной земле. Погибли миллионы человек.":
    "Powołże i południe: nieurodzaj na ziemi zniszczonej wojną. Zginęły miliony ludzi.",
  "Эмиграция": "Emigracja",
  "Страну покинули около двух миллионов: офицеры, учёные, писатели, инженеры. Целый слой общества уехал.":
    "Kraj opuściło około dwóch milionów: oficerowie, uczeni, pisarze, inżynierowie. Wyjechała cała warstwa społeczeństwa.",
  "Что такое продразвёрстка?": "Czym była prodrazwiorstka?",
  "Распределение земли между крестьянами": "Podziałem ziemi między chłopów",
  "Принудительное изъятие хлеба у крестьян в годы военного коммунизма":
    "Przymusowym odbieraniem zboża chłopom w latach komunizmu wojennego",
  "Система продовольственных карточек в городах": "Systemem kartek żywnościowych w miastach",
  "Налог, введённый Столыпиным": "Podatkiem wprowadzonym przez Stołypina",
  "Изъятие велось по разнарядке, без учёта того, что оставалось самому хозяйству. Отказ от продразвёрстки и стал первым шагом новой экономической политики.":
    "Odbierano według rozdzielnika, bez względu na to, co zostawało samemu gospodarstwu. Rezygnacja z prodrazwiorstki stała się pierwszym krokiem nowej polityki ekonomicznej.",
  "НЭП и образование СССР": "NEP i powstanie ZSRR",
  "К **1921 году** хозяйство было разрушено, а крестьянские восстания и мятеж в Кронштадте показали пределы прежней политики. Была объявлена **новая экономическая политика**: продразвёрстку заменили налогом, разрешили торговлю и мелкое частное предпринимательство. Через несколько лет страна вернулась к довоенному уровню производства.":
    "Do **1921 roku** gospodarka była zniszczona, a powstania chłopskie i bunt w Kronsztadzie pokazały granice dotychczasowej polityki. Ogłoszono **nową politykę ekonomiczną**: prodrazwiorstkę zastąpiono podatkiem, dopuszczono handel i drobną przedsiębiorczość prywatną. Po kilku latach kraj wrócił do przedwojennego poziomu produkcji.",
  "**30 декабря 1922 года** договор об образовании **Союза Советских Социалистических Республик** подписали четыре республики: **РСФСР**, **Украина**, **Белоруссия** и **Закавказская федерация**. Союз просуществует шестьдесят девять лет.":
    "**30 grudnia 1922 roku** umowę o utworzeniu **Związku Socjalistycznych Republik Radzieckich** podpisały cztery republiki: **RFSRR**, **Ukraina**, **Białoruś** i **Zakaukaska Federacja**. Związek przetrwa sześćdziesiąt dziewięć lat.",
  "Когда был образован Советский Союз?": "Kiedy powstał Związek Radziecki?",
  "7 ноября 1917 года": "7 listopada 1917 roku",
  "3 марта 1918 года": "3 marca 1918 roku",
  "30 декабря 1922 года": "30 grudnia 1922 roku",
  "5 декабря 1936 года": "5 grudnia 1936 roku",
  "30 декабря 1922 года, договором четырёх республик. 1936 год — принятие новой союзной конституции, а не образование Союза.":
    "30 grudnia 1922 roku, umową czterech republik. Rok 1936 to przyjęcie nowej konstytucji związkowej, a nie powstanie Związku.",
  "**Февральская** и **Октябрьская** революции — два разных события 1917 года. Первая свергла монархию, вторая сменила пришедшее ей на смену правительство. Между ними восемь месяцев.":
    "**Rewolucja lutowa** i **październikowa** to dwa różne wydarzenia 1917 roku. Pierwsza obaliła monarchię, druga zmieniła rząd, który po niej przyszedł. Dzieli je osiem miesięcy.",
  "СССР: индустриализация, коллективизация, репрессии":
    "ZSRR: industrializacja, kolektywizacja, represje",
  "Почему об этом говорят прямо: за полтора десятилетия страна прошла промышленный рывок и одновременно — голод, лагеря и массовые казни. Это части одной истории, и разделять их значит рассказывать её неверно.":
    "Dlaczego mówi się o tym wprost: w półtorej dekady kraj przeszedł skok przemysłowy i jednocześnie głód, łagry i masowe egzekucje. To części jednej historii, a rozdzielać je znaczy opowiadać ją nieprawdziwie.",
  "Курс на индустриализацию": "Kurs na industrializację",
  "После смерти Ленина в **1924 году** во внутрипартийной борьбе победил **Сталин**. Новая экономическая политика была свёрнута, и с **1928 года** страна перешла к **пятилетним планам**.":
    "Po śmierci Lenina w **1924 roku** w walce wewnątrzpartyjnej zwyciężył **Stalin**. Nową politykę ekonomiczną zwinięto i od **1928 roku** kraj przeszedł na **plany pięcioletnie**.",
  "**Индустриализация** шла с огромной скоростью. Были построены **Магнитогорский** и **Кузнецкий** комбинаты, **Днепрогэс**, тракторные заводы, **Турксиб**. За десятилетие страна из аграрной стала промышленной, а население городов выросло в разы.":
    "**Industrializacja** szła w ogromnym tempie. Zbudowano kombinaty **magnitogorski** i **kuźniecki**, **Dnieprogies**, fabryki traktorów, **Turksib**. W dekadę kraj z rolniczego stał się przemysłowy, a ludność miast wzrosła wielokrotnie.",
  "Средства на это брали внутри страны: у деревни — через закупочные цены и экспорт зерна, у населения — через низкие зарплаты и займы. Оборотной стороной рывка стало то, что описано дальше.":
    "Środki na to brano wewnątrz kraju: od wsi — przez ceny skupu i eksport zboża, od ludności — przez niskie płace i pożyczki. Drugą stroną tego skoku stało się to, co opisano dalej.",
  "Коллективизация и голод": "Kolektywizacja i głód",
  "С **1929 года** началась **сплошная коллективизация**: крестьянские хозяйства объединялись в колхозы, а зажиточные крестьяне подвергались **раскулачиванию** — конфискации имущества и высылке. Сотни тысяч семей были отправлены в отдалённые районы, многие погибли в дороге и на месте.":
    "Od **1929 roku** zaczęła się **kolektywizacja powszechna**: gospodarstwa chłopskie łączono w kołchozy, a zamożnych chłopów poddawano **rozkułaczaniu** — konfiskacie majątku i wysiedleniu. Setki tysięcy rodzin wysłano do odległych rejonów, wielu zginęło w drodze i na miejscu.",
  "В **1932–1933 годах** зерновые районы охватил **голод**. Он затронул **Украину**, **Поволжье**, **Казахстан**, **Северный Кавказ** и Западную Сибирь. Число погибших исчисляется **миллионами**; точные оценки расходятся, но порядок величины не оспаривается.":
    "W **latach 1932–1933** rejony zbożowe ogarnął **głód**. Objął **Ukrainę**, **Powołże**, **Kazachstan**, **Kaukaz Północny** i Syberię Zachodnią. Liczbę ofiar liczy się w **milionach**; dokładne szacunki się różnią, ale rzędu wielkości nikt nie kwestionuje.",
  "С какого года в СССР начались пятилетние планы?":
    "Od którego roku w ZSRR zaczęły się plany pięcioletnie?",
  "С 1922 года": "Od 1922 roku",
  "С 1928 года": "Od 1928 roku",
  "С 1936 года": "Od 1936 roku",
  "С 1945 года": "Od 1945 roku",
  "Первая пятилетка началась в 1928 году, вместе со свёртыванием новой экономической политики. Коллективизация развернётся годом позже.":
    "Pierwsza pięciolatka zaczęła się w 1928 roku, razem ze zwijaniem nowej polityki ekonomicznej. Kolektywizacja rozwinie się rok później.",
  "ГУЛАГ": "GUŁag",
  "**ГУЛАГ** — Главное управление лагерей — это система **исправительно-трудовых лагерей**, через которую за годы её существования прошли **миллионы человек**. Заключённые строили каналы, добывали золото и никель, валили лес.":
    "**GUŁag** — Główny Zarząd Łagrów — to system **obozów pracy poprawczej**, przez który przez lata jego istnienia przeszły **miliony ludzi**. Więźniowie budowali kanały, wydobywali złoto i nikiel, wycinali las.",
  "Беломорканал": "Kanał Białomorski",
  "Построен в 1931–1933 годах силами заключённых. Смертность на стройке была крайне высокой.":
    "Zbudowany w latach 1931–1933 rękami więźniów. Śmiertelność na budowie była skrajnie wysoka.",
  "Колыма": "Kołyma",
  "Золотые прииски Дальнего Востока. Название стало нарицательным обозначением самых тяжёлых лагерей.":
    "Kopalnie złota Dalekiego Wschodu. Nazwa stała się określeniem najcięższych łagrów.",
  "Норильск": "Norylsk",
  "Город и комбинат за полярным кругом, построенные лагерным трудом.":
    "Miasto i kombinat za kołem podbiegunowym, zbudowane pracą łagrową.",
  "Статья Уголовного кодекса о контрреволюционных преступлениях, по которой были осуждены миллионы.":
    "Artykuł kodeksu karnego o przestępstwach kontrrewolucyjnych, na podstawie którego skazano miliony.",
  "Отдельная страница — **депортации народов**. В годы войны и после неё с мест проживания были насильственно выселены целые народы: поволжские немцы, крымские татары, чеченцы, ингуши, калмыки, балкарцы и другие. Многие погибли в пути или в первые годы на новом месте.":
    "Osobną kartą są **deportacje narodów**. W czasie wojny i po niej przymusowo wysiedlono z miejsc zamieszkania całe narody: Niemców nadwołżańskich, Tatarów krymskich, Czeczenów, Inguszy, Kałmuków, Bałkarów i innych. Wielu zginęło w drodze albo w pierwszych latach na nowym miejscu.",
  "Что такое ГУЛАГ?": "Czym był GUŁag?",
  "Орган государственного планирования": "Organem planowania państwowego",
  "Система исправительно-трудовых лагерей": "Systemem obozów pracy poprawczej",
  "Название первой пятилетки": "Nazwą pierwszej pięciolatki",
  "Крупная стройка на Дальнем Востоке": "Wielką budową na Dalekim Wschodzie",
  "Главное управление лагерей. Через его систему прошли миллионы заключённых, чей труд использовался на каналах, приисках и в лесной промышленности.":
    "Główny Zarząd Łagrów. Przez jego system przeszły miliony więźniów, których pracę wykorzystywano przy kanałach, w kopalniach i w przemyśle drzewnym.",
  "Большой террор": "Wielki terror",
  "Пик репрессий пришёлся на **1937–1938 годы**. Аресты шли по разнарядкам, дела рассматривали внесудебные **«тройки»**, приговоры выносились за минуты. По массовым операциям тех двух лет было расстреляно **несколько сотен тысяч человек**, столько же и более отправлено в лагеря.":
    "Szczyt represji przypadł na **lata 1937–1938**. Aresztowania szły według rozdzielnika, sprawy rozpatrywały pozasądowe **„trójki”**, wyroki zapadały w kilka minut. W operacjach masowych tych dwóch lat rozstrzelano **kilkaset tysięcy ludzi**, tyle samo i więcej wysłano do łagrów.",
  "Пострадали все слои: партийные работники, командиры Красной армии, инженеры, учёные, священники, крестьяне, рабочие, представители национальных меньшинств. Одним из мест массовых расстрелов под Москвой был **Бутовский полигон**.":
    "Ucierpiały wszystkie warstwy: działacze partyjni, dowódcy Armii Czerwonej, inżynierowie, uczeni, duchowni, chłopi, robotnicy, przedstawiciele mniejszości narodowych. Jednym z miejsc masowych rozstrzeliwań pod Moskwą był **poligon w Butowie**.",
  "Формально в **1936 году** была принята конституция, объявленная самой демократической в мире. Расхождение между её текстом и практикой тех же лет — один из самых наглядных примеров того, почему конституция без работающих судов остаётся бумагой.":
    "Formalnie w **1936 roku** przyjęto konstytucję ogłoszoną najbardziej demokratyczną na świecie. Rozejście się jej tekstu z praktyką tych samych lat to jeden z najbardziej naocznych przykładów tego, dlaczego konstytucja bez działających sądów zostaje papierem.",
  "Как об этом помнят": "Jak się o tym pamięta",
  "На **XX съезде** партии в **1956 году** прозвучал доклад о культе личности, и началась **реабилитация** — пересмотр дел и восстановление доброго имени осуждённых. Она шла волнами и продолжалась десятилетиями.":
    "Na **XX zjeździe** partii w **1956 roku** padł referat o kulcie jednostki i zaczęła się **rehabilitacja** — rewizja spraw i przywracanie dobrego imienia skazanym. Szła falami i trwała dziesięciolecia.",
  "**30 октября** — **День памяти жертв политических репрессий**. В **2017 году** в Москве была открыта **«Стена скорби»** — государственный памятник жертвам. Работают музеи и мемориальные комплексы на местах бывших лагерей и полигонов.":
    "**30 października** to **Dzień Pamięci Ofiar Represji Politycznych**. W **2017 roku** w Moskwie odsłonięto **„Ścianę Smutku”** — państwowy pomnik ofiar. Działają muzea i kompleksy pamięci w miejscach dawnych łagrów i poligonów.",
  "Когда отмечается День памяти жертв политических репрессий?":
    "Kiedy obchodzi się Dzień Pamięci Ofiar Represji Politycznych?",
  "27 января": "27 stycznia",
  "22 июня": "22 czerwca",
  "30 октября": "30 października",
  "30 октября. 22 июня — День памяти и скорби, связанный с началом войны, а 9 мая — День Победы: три разные памятные даты.":
    "30 października. 22 czerwca to Dzień Pamięci i Żałoby, związany z wybuchem wojny, a 9 maja to Dzień Zwycięstwa: trzy różne daty pamiętne.",
  "Оценки числа жертв расходятся между исследователями и продолжают уточняться по мере открытия архивов. Расхождения касаются величин, а не самого факта: массовые репрессии и голод признаны и государством, и историографией.":
    "Szacunki liczby ofiar różnią się między badaczami i wciąż się je uściśla w miarę otwierania archiwów. Rozbieżności dotyczą wielkości, a nie samego faktu: masowe represje i głód są uznane i przez państwo, i przez historiografię.",
  "Война, послевоенные годы и распад СССР": "Wojna, lata powojenne i rozpad ZSRR",
  "Почему это важно: война остаётся главным событием в народной памяти, а распад Союза — ближайшей к нам исторической границей. Между ними умещается почти полвека, которое объясняет сегодняшнюю карту.":
    "Dlaczego to ważne: wojna pozostaje głównym wydarzeniem w pamięci ludzi, a rozpad Związku najbliższą nam granicą historyczną. Między nimi mieści się niemal pół wieku, które tłumaczy dzisiejszą mapę.",
  "22 июня 1941 года": "22 czerwca 1941 roku",
  "**22 июня 1941 года** Германия напала на Советский Союз. Началась **Великая Отечественная война** — так в России называют часть Второй мировой, шедшую на советско-германском фронте. Первые месяцы обернулись катастрофой: огромные потери, окружения, отступление до Москвы и Волги.":
    "**22 czerwca 1941 roku** Niemcy napadły na Związek Radziecki. Zaczęła się **wielka wojna ojczyźniana** — tak w Rosji nazywa się tę część drugiej wojny światowej, która toczyła się na froncie radziecko-niemieckim. Pierwsze miesiące obróciły się katastrofą: ogromne straty, okrążenia, odwrót aż pod Moskwę i Wołgę.",
  "Блокада Ленинграда": "Blokada Leningradu",
  "С сентября 1941 по январь 1944 года, почти 900 дней. Сотни тысяч жителей погибли, большинство — от голода.":
    "Od września 1941 do stycznia 1944 roku, prawie 900 dni. Zginęły setki tysięcy mieszkańców, w większości z głodu.",
  "Битва за Москву": "Bitwa o Moskwę",
  "Зимой 1941–1942 годов немецкое наступление на столицу было остановлено и отброшено.":
    "Zimą 1941–1942 niemieckie natarcie na stolicę zostało zatrzymane i odrzucone.",
  "Сталинград": "Stalingrad",
  "С лета 1942 по февраль 1943 года. Окружение и капитуляция немецкой армии стали переломом всей войны.":
    "Od lata 1942 do lutego 1943 roku. Okrążenie i kapitulacja armii niemieckiej stały się przełomem całej wojny.",
  "Курская дуга": "Łuk kurski",
  "Лето 1943 года, крупнейшее танковое сражение. После него инициатива уже не возвращалась к противнику.":
    "Lato 1943 roku, największa bitwa pancerna. Po niej inicjatywa już nie wróciła do przeciwnika.",
  "Война закончилась **9 мая 1945 года**. Потери Советского Союза оцениваются примерно в **двадцать семь миллионов** человек, большую часть которых составило мирное население. На оккупированной территории проводилось уничтожение еврейского населения — **Холокост**; одним из его самых известных мест стал **Бабий Яр** под Киевом.":
    "Wojna skończyła się **9 maja 1945 roku**. Straty Związku Radzieckiego szacuje się na około **dwadzieścia siedem milionów** ludzi, w większości ludności cywilnej. Na terenach okupowanych prowadzono zagładę ludności żydowskiej — **Holokaust**; jednym z jego najbardziej znanych miejsc stał się **Babi Jar** pod Kijowem.",
  "Когда началась Великая Отечественная война?": "Kiedy zaczęła się wielka wojna ojczyźniana?",
  "1 сентября 1939 года": "1 września 1939 roku",
  "7 ноября 1941 года": "7 listopada 1941 roku",
  "9 мая 1945 года": "9 maja 1945 roku",
  "22 июня 1941 года. 1 сентября 1939-го началась Вторая мировая война, а 9 мая 1945-го Великая Отечественная закончилась.":
    "22 czerwca 1941 roku. 1 września 1939 zaczęła się druga wojna światowa, a 9 maja 1945 wielka wojna ojczyźniana się skończyła.",
  "После войны": "Po wojnie",
  "Страна восстанавливалась из руин: были разрушены тысячи городов и десятки тысяч сёл. В **1949 году** СССР испытал атомную бомбу, и началось противостояние двух блоков, названное **холодной войной**.":
    "Kraj odbudowywał się z ruin: zniszczono tysiące miast i dziesiątki tysięcy wsi. W **1949 roku** ZSRR przeprowadził próbę bomby atomowej i zaczęło się przeciwstawienie dwóch bloków, nazwane **zimną wojną**.",
  "После смерти **Сталина в 1953 году** наступила **оттепель**: XX съезд 1956 года, массовая реабилитация, возвращение людей из лагерей, ослабление цензуры. В **1957 году** был запущен первый искусственный спутник Земли, а **12 апреля 1961 года** **Юрий Гагарин** совершил первый полёт человека в космос.":
    "Po śmierci **Stalina w 1953 roku** nastała **odwilż**: XX zjazd z 1956 roku, masowa rehabilitacja, powroty ludzi z łagrów, osłabienie cenzury. W **1957 roku** wystrzelono pierwszego sztucznego satelitę Ziemi, a **12 kwietnia 1961 roku** **Jurij Gagarin** odbył pierwszy lot człowieka w kosmos.",
  "**Карибский кризис 1962 года** подвёл мир к грани ядерной войны и закончился взаимными уступками. Затем последовали два десятилетия, которые позже назовут **застоем**: стабильность, рост нефтяных доходов и постепенное отставание экономики. С **1979 по 1989 год** шла война в **Афганистане**.":
    "**Kryzys kubański 1962 roku** podprowadził świat na skraj wojny jądrowej i skończył się wzajemnymi ustępstwami. Potem przyszły dwa dziesięciolecia, które później nazwie się **zastojem**: stabilność, wzrost dochodów z ropy i stopniowe zapóźnienie gospodarki. Od **1979 do 1989 roku** trwała wojna w **Afganistanie**.",
  "Сколько дней продолжалась блокада Ленинграда?": "Ile dni trwała blokada Leningradu?",
  "Около ста дней": "Około stu dni",
  "Около трёхсот дней": "Około trzystu dni",
  "Почти девятьсот дней": "Prawie dziewięćset dni",
  "Более трёх лет": "Ponad trzy lata",
  "С сентября 1941 по январь 1944 года — почти девятьсот дней. Погибли сотни тысяч жителей, подавляющее большинство от голода.":
    "Od września 1941 do stycznia 1944 roku — prawie dziewięćset dni. Zginęły setki tysięcy mieszkańców, przytłaczająca większość z głodu.",
  "Перестройка": "Pieriestrojka",
  "В **1985 году** к власти пришёл **Михаил Горбачёв** и объявил **перестройку** и **гласность**. Открылись архивы, вернулись запрещённые книги, началось обсуждение прошлого. В **1986 году** произошла авария на **Чернобыльской АЭС**.":
    "W **1985 roku** do władzy doszedł **Michaił Gorbaczow** i ogłosił **pieriestrojkę** oraz **głasnost**. Otwarły się archiwa, wróciły zakazane książki, zaczęła się rozmowa o przeszłości. W **1986 roku** doszło do awarii w **elektrowni jądrowej w Czarnobylu**.",
  "В **1989 году** прошли первые за десятилетия выборы с несколькими кандидатами, а заседания Съезда народных депутатов транслировались по телевидению. В том же году пала Берлинская стена, и социалистические режимы в Восточной Европе сменились один за другим.":
    "W **1989 roku** odbyły się pierwsze od dziesięcioleci wybory z kilkoma kandydatami, a posiedzenia Zjazdu Deputowanych Ludowych transmitowała telewizja. W tym samym roku upadł mur berliński, a reżimy socjalistyczne w Europie Wschodniej zmieniały się jeden po drugim.",
  "1991 год": "Rok 1991",
  "**12 июня 1990 года** РСФСР приняла **Декларацию о государственном суверенитете** — дата, ставшая Днём России. **12 июня 1991 года** прошли первые прямые выборы **Президента РСФСР**, на которых победил **Борис Ельцин**.":
    "**12 czerwca 1990 roku** RFSRR przyjęła **Deklarację o suwerenności państwowej** — datę, która stała się Dniem Rosji. **12 czerwca 1991 roku** odbyły się pierwsze bezpośrednie wybory **Prezydenta RFSRR**, w których zwyciężył **Borys Jelcyn**.",
  "В **августе 1991 года** попытка государственного переворота провалилась за три дня, и после неё союзные структуры быстро утратили влияние. **8 декабря** руководители России, Украины и Белоруссии подписали **Беловежские соглашения**, а **25 декабря 1991 года** **Советский Союз прекратил существование**.":
    "W **sierpniu 1991 roku** próba zamachu stanu upadła w trzy dni, a po niej struktury związkowe szybko straciły wpływ. **8 grudnia** przywódcy Rosji, Ukrainy i Białorusi podpisali **porozumienia białowieskie**, a **25 grudnia 1991 roku** **Związek Radziecki przestał istnieć**.",
  "Дальше — тяжёлые девяностые: **либерализация цен**, приватизация, обвал производства, **конституционный кризис 1993 года** и принятая по его итогам **Конституция**, **дефолт 1998 года**. С начала двухтысячных экономика стабилизировалась, а государственные институты приобрели нынешний вид.":
    "Dalej — ciężkie lata dziewięćdziesiąte: **uwolnienie cen**, prywatyzacja, załamanie produkcji, **kryzys konstytucyjny 1993 roku** i przyjęta w jego wyniku **Konstytucja**, **kryzys finansowy 1998 roku**. Od początku lat dwutysięcznych gospodarka się ustabilizowała, a instytucje państwowe przybrały dzisiejszy kształt.",
  "В каком году прекратил существование Советский Союз?":
    "W którym roku Związek Radziecki przestał istnieć?",
  "В 1989 году": "W 1989 roku",
  "В 1990 году": "W 1990 roku",
  "В 1991 году": "W 1991 roku",
  "В 1993 году": "W 1993 roku",
  "25 декабря 1991 года, после Беловежских соглашений 8 декабря. 1993-й — год принятия действующей Конституции.":
    "25 grudnia 1991 roku, po porozumieniach białowieskich z 8 grudnia. Rok 1993 to rok przyjęcia obowiązującej Konstytucji.",
  "**Вторая мировая** и **Великая Отечественная** — не одно и то же по срокам. Первая шла с 1939 по 1945 год, вторая — с 22 июня 1941 по 9 мая 1945-го, на советско-германском фронте.":
    "**Druga wojna światowa** i **wielka wojna ojczyźniana** to nie to samo pod względem dat. Pierwsza trwała od 1939 do 1945 roku, druga od 22 czerwca 1941 do 9 maja 1945, na froncie radziecko-niemieckim.",
  "География и часовые пояса": "Geografia i strefy czasowe",
  "Территория и природа": "Terytorium i przyroda",
  "Почему это важно: размеры страны меняют самые простые вещи. Когда в Калининграде утро, на Камчатке уже вечер того же дня, и расписание поездов приходится писать по одному времени на всю страну.":
    "Dlaczego to ważne: rozmiary kraju zmieniają najprostsze rzeczy. Kiedy w Kaliningradzie jest ranek, na Kamczatce jest już wieczór tego samego dnia, a rozkłady pociągów trzeba pisać według jednego czasu dla całego kraju.",
  "Самая большая страна": "Największy kraj",
  "Площадь России — более **семнадцати миллионов квадратных километров**, около **одной восьмой** всей земной суши. Протяжённость с запада на восток — почти **десять тысяч километров**, с севера на юг — около четырёх тысяч.":
    "Powierzchnia Rosji to ponad **siedemnaście milionów kilometrów kwadratowych**, około **jednej ósmej** całego lądu Ziemi. Rozciągłość z zachodu na wschód to prawie **dziesięć tysięcy kilometrów**, z północy na południe około czterech tysięcy.",
  "Страна лежит **в двух частях света**. Условной границей между Европой и Азией считается **Уральский хребет**, и отсюда получается разрыв, который стоит запомнить: около **трёх четвертей территории** находится в Азии, а около **трёх четвертей населения** — в европейской части.":
    "Kraj leży **w dwóch częściach świata**. Za umowną granicę między Europą a Azją uważa się **Ural**, a stąd bierze się rozdźwięk, który warto zapamiętać: około **trzech czwartych terytorium** znajduje się w Azji, a około **trzech czwartych ludności** — w części europejskiej.",
  "Одиннадцать часовых поясов": "Jedenaście stref czasowych",
  "От **Калининграда** до **Камчатки** и **Чукотки** страна занимает **одиннадцать часовых поясов**. Разница между Москвой и Камчаткой составляет **девять часов**: когда в столице девять утра, там уже вечер.":
    "Od **Kaliningradu** po **Kamczatkę** i **Czukotkę** kraj zajmuje **jedenaście stref czasowych**. Różnica między Moskwą a Kamczatką wynosi **dziewięć godzin**: kiedy w stolicy jest dziewiąta rano, tam jest już wieczór.",
  "Число поясов менялось. В **2010 году** их сократили до девяти, а в **2014-м** вернули одиннадцать. Тогда же страна перестала переводить часы: сезонного времени в России больше нет.":
    "Liczba stref się zmieniała. W **2010 roku** zmniejszono ją do dziewięciu, a w **2014** wrócono do jedenastu. Wtedy też kraj przestał przestawiać zegary: czasu sezonowego w Rosji już nie ma.",
  "Московское время": "Czas moskiewski",
  "Точка отсчёта для всей страны. Расписания железных дорог долгое время писались только по нему.":
    "Punkt odniesienia dla całego kraju. Rozkłady kolei długo pisano wyłącznie według niego.",
  "Калининград": "Kaliningrad",
  "Самый западный регион, и единственный, где время на час меньше московского.":
    "Najbardziej zachodni region i jedyny, gdzie czas jest o godzinę wcześniejszy niż moskiewski.",
  "Камчатка и Чукотка": "Kamczatka i Czukotka",
  "Самый восточный край: плюс девять часов к Москве. Новый год здесь встречают первыми в стране.":
    "Najdalej wysunięty wschód: dziewięć godzin więcej niż w Moskwie. Nowy Rok wita się tu jako pierwsi w kraju.",
  "Без перевода часов": "Bez przestawiania zegarów",
  "С 2014 года сезонного перехода нет. Разница с Европой поэтому меняется дважды в год — за счёт соседей, а не нас.":
    "Od 2014 roku nie ma zmiany sezonowej. Różnica z Europą zmienia się przez to dwa razy w roku — za sprawą sąsiadów, a nie nas.",
  "Сколько часовых поясов в России?": "Ile stref czasowych jest w Rosji?",
  "Семь": "Siedem",
  "Пятнадцать": "Piętnaście",
  "Одиннадцать. Девять было с 2010 по 2014 год, после чего прежнее число вернули. Разница между Москвой и Камчаткой — девять часов.":
    "Jedenaście. Dziewięć było od 2010 do 2014 roku, po czym wrócono do dawnej liczby. Różnica między Moskwą a Kamczatką to dziewięć godzin.",
  "Соседи": "Sąsiedzi",
  "У России **сухопутные границы с четырнадцатью государствами** — по этому показателю она делит первое место в мире с Китаем. На западе это Норвегия, Финляндия, Эстония, Латвия, Литва, Польша и Белоруссия, на юго-западе Украина, на юге Грузия, Азербайджан и Казахстан, на юго-востоке Китай, Монголия и КНДР.":
    "Rosja ma **granice lądowe z czternastoma państwami** — pod tym względem dzieli pierwsze miejsce na świecie z Chinami. Na zachodzie są to Norwegia, Finlandia, Estonia, Łotwa, Litwa, Polska i Białoruś, na południowym zachodzie Ukraina, na południu Gruzja, Azerbejdżan i Kazachstan, na południowym wschodzie Chiny, Mongolia i Korea Północna.",
  "Есть и **морские соседи**: **США** — через Берингов пролив, где между островами Ратманова и Крузенштерна около четырёх километров, — и **Япония**.":
    "Są też **sąsiedzi morscy**: **Stany Zjednoczone** — przez Cieśninę Beringa, gdzie między wyspami Ratmanowa i Kruzensterna jest około czterech kilometrów — oraz **Japonia**.",
  "**Калининградская область** — **эксклав**: она не имеет сухопутной связи с остальной страной и окружена Польшей, Литвой и Балтийским морем.":
    "**Obwód kaliningradzki** to **eksklawa**: nie ma lądowego połączenia z resztą kraju i otaczają go Polska, Litwa oraz Morze Bałtyckie.",
  "По какому хребту проходит условная граница между Европой и Азией?":
    "Którym pasmem biegnie umowna granica między Europą a Azją?",
  "По Кавказскому": "Kaukazem",
  "По Уральскому": "Uralem",
  "По Алтайскому": "Ałtajem",
  "По Саянам": "Sajanami",
  "По Уралу. Отсюда и разрыв: три четверти территории в Азии, три четверти населения — в европейской части.":
    "Uralem. Stąd i rozdźwięk: trzy czwarte terytorium w Azji, trzy czwarte ludności w części europejskiej.",
  "Крайние точки": "Punkty skrajne",
  "Самая северная материковая точка — **мыс Челюскин** на Таймыре, самая южная — гора **Базардюзю** на Кавказе, самая западная — побережье Балтийского моря в **Калининградской области**, самая восточная — **остров Ратманова** в Беринговом проливе.":
    "Najdalej na północ wysunięty punkt lądowy to **przylądek Czeluskin** na Tajmyrze, najbardziej południowy — góra **Bazardüzü** na Kaukazie, najbardziej zachodni — wybrzeże Morza Bałtyckiego w **obwodzie kaliningradzkim**, najbardziej wschodni — **wyspa Ratmanowa** w Cieśninie Beringa.",
  "Население страны — около **ста сорока шести миллионов** человек, и распределено оно крайне неравномерно: густо на юго-западе и вдоль Транссиба, почти пусто на севере Сибири и Дальнего Востока.":
    "Ludność kraju to około **stu czterdziestu sześciu milionów** osób i rozłożona jest skrajnie nierówno: gęsto na południowym zachodzie i wzdłuż kolei transsyberyjskiej, niemal pusto na północy Syberii i Dalekiego Wschodu.",
  "Какой регион России является эксклавом?": "Który region Rosji jest eksklawą?",
  "Камчатский край": "Kraj Kamczacki",
  "Калининградская область": "Obwód kaliningradzki",
  "Сахалинская область": "Obwód sachaliński",
  "Республика Крым": "Republika Krymu",
  "Калининградская область не имеет сухопутной связи с остальной страной. Сахалин и Камчатка отделены морем, но эксклавами не являются.":
    "Obwód kaliningradzki nie ma lądowego połączenia z resztą kraju. Sachalin i Kamczatka są oddzielone morzem, ale eksklawami nie są.",
  "Часовой пояс и **административная граница** не всегда совпадают: время устанавливается для каждого субъекта отдельно, и потому линии на карте часовых поясов идут не по меридианам, а по границам регионов.":
    "Strefa czasowa i **granica administracyjna** nie zawsze się pokrywają: czas ustala się osobno dla każdego podmiotu, i dlatego linie na mapie stref biegną nie po południkach, lecz po granicach regionów.",
  "Природные зоны, реки и климат": "Strefy przyrodnicze, rzeki i klimat",
  "Почему это важно: страна такой длины пересекает почти все природные зоны Северного полушария. В один и тот же день здесь бывает минус пятьдесят и плюс двадцать пять.":
    "Dlaczego to ważne: kraj takiej długości przecina niemal wszystkie strefy przyrodnicze półkuli północnej. Tego samego dnia bywa tu minus pięćdziesiąt i plus dwadzieścia pięć.",
  "Зоны с севера на юг": "Strefy z północy na południe",
  "Двигаясь с севера на юг, страна проходит **арктические пустыни**, **тундру**, **лесотундру**, **тайгу**, **смешанные и широколиственные леса**, **лесостепь**, **степь** и **полупустыни** у Каспия. Ни одна другая страна не пересекает столько зон подряд.":
    "Idąc z północy na południe, kraj przechodzi **pustynie arktyczne**, **tundrę**, **lasotundrę**, **tajgę**, **lasy mieszane i liściaste**, **lasostep**, **step** i **półpustynie** nad Morzem Kaspijskim. Żaden inny kraj nie przecina tylu stref z rzędu.",
  "**Тайга** — крупнейший лесной массив планеты. На Россию приходится около **пятой части всех лесов мира**, и по площади леса она занимает первое место. Другая величина того же порядка: **вечная мерзлота** лежит примерно под **двумя третями** территории, и на ней строят на сваях, чтобы тепло здания не растопило грунт.":
    "**Tajga** to największy kompleks leśny planety. Na Rosję przypada około **jednej piątej wszystkich lasów świata**, a pod względem powierzchni lasów zajmuje ona pierwsze miejsce. Inna wielkość tego samego rzędu: **wieczna zmarzlina** leży pod mniej więcej **dwiema trzecimi** terytorium, a buduje się na niej na palach, żeby ciepło budynku nie roztopiło gruntu.",
  "Какую примерно долю территории России занимает вечная мерзлота?":
    "Jaką mniej więcej część terytorium Rosji zajmuje wieczna zmarzlina?",
  "Около одной десятой": "Około jedną dziesiątą",
  "Около трети": "Około jedną trzecią",
  "Около двух третей": "Około dwie trzecie",
  "Почти всю": "Niemal całe",
  "Около двух третей. Поэтому в Норильске, Якутске и других северных городах дома ставят на сваи: иначе тепло здания растопит грунт под ним.":
    "Około dwie trzecie. Dlatego w Norylsku, Jakucku i innych północnych miastach domy stawia się na palach: inaczej ciepło budynku roztopi grunt pod nim.",
  "Горы": "Góry",
  "Урал": "Ural",
  "Невысокий древний хребет, разделяющий Европу и Азию. Богат рудами, и на них выросла уральская промышленность.":
    "Niewysokie stare pasmo dzielące Europę i Azję. Bogate w rudy, i na nich wyrósł przemysł uralski.",
  "Кавказ": "Kaukaz",
  "Самые высокие горы страны. Эльбрус, 5642 метра, — высшая точка России и всей Европы.":
    "Najwyższe góry kraju. Elbrus, 5642 metry, to najwyższy punkt Rosji i całej Europy.",
  "Алтай и Саяны": "Ałtaj i Sajany",
  "Горы юга Сибири, с ледниками, степями в долинах и одним из самых чистых воздухов в стране.":
    "Góry południa Syberii, z lodowcami, stepami w dolinach i jednym z najczystszych powietrz w kraju.",
  "Камчатка": "Kamczatka",
  "Действующие вулканы, около трёх десятков. Ключевская Сопка — высочайший действующий вулкан Евразии.":
    "Czynne wulkany, około trzydziestu. Kluczewska Sopka to najwyższy czynny wulkan Eurazji.",
  "Какая гора является высшей точкой России?": "Która góra jest najwyższym punktem Rosji?",
  "Ключевская Сопка": "Kluczewska Sopka",
  "Эльбрус": "Elbrus",
  "Белуха": "Biełucha",
  "Народная": "Narodnaja",
  "Эльбрус на Кавказе, 5642 метра, — высшая точка и России, и Европы. Белуха — высшая точка Алтая, Народная — Урала, Ключевская Сопка — вулкан Камчатки.":
    "Elbrus na Kaukazie, 5642 metry, to najwyższy punkt i Rosji, i Europy. Biełucha to najwyższy szczyt Ałtaju, Narodnaja — Uralu, a Kluczewska Sopka to wulkan Kamczatki.",
  "Реки и озёра": "Rzeki i jeziora",
  "Крупнейшие реки текут по Сибири на север: **Обь**, **Енисей**, **Лена**. Енисей — самый полноводный. На Дальнем Востоке течёт **Амур**, по которому частично проходит граница с Китаем.":
    "Największe rzeki płyną przez Syberię na północ: **Ob**, **Jenisej**, **Lena**. Jenisej ma największy przepływ. Na Dalekim Wschodzie płynie **Amur**, którym częściowo biegnie granica z Chinami.",
  "В европейской части главная река — **Волга**: около **трёх с половиной тысяч километров**, самая длинная река Европы. Она впадает не в океан, а в **Каспийское море**, замкнутый водоём, крупнейший на планете.":
    "W części europejskiej główną rzeką jest **Wołga**: około **trzech i pół tysiąca kilometrów**, najdłuższa rzeka Europy. Uchodzi nie do oceanu, lecz do **Morza Kaspijskiego**, zbiornika zamkniętego, największego na planecie.",
  "**Байкал** — **самое глубокое озеро мира**: **1642 метра**. В нём сосредоточено около **пятой части** мировых запасов поверхностной пресной воды, и он внесён в список Всемирного наследия ЮНЕСКО. **Ладожское озеро** — крупнейшее пресноводное озеро Европы.":
    "**Bajkał** to **najgłębsze jezioro świata**: **1642 metry**. Skupia około **jednej piątej** światowych zasobów powierzchniowej wody słodkiej i jest wpisany na listę światowego dziedzictwa UNESCO. **Jezioro Ładoga** jest największym jeziorem słodkowodnym Europy.",
  "Какое озеро является самым глубоким в мире?": "Które jezioro jest najgłębsze na świecie?",
  "Ладожское": "Ładoga",
  "Каспийское": "Morze Kaspijskie",
  "Байкал": "Bajkał",
  "Онежское": "Onega",
  "Байкал, 1642 метра, и в нём около пятой части мировой поверхностной пресной воды. Каспий — крупнейший замкнутый водоём, а Ладога — крупнейшее пресное озеро Европы.":
    "Bajkał, 1642 metry, i skupia około jednej piątej światowej powierzchniowej wody słodkiej. Morze Kaspijskie to największy zbiornik zamknięty, a Ładoga największe jezioro słodkie Europy.",
  "Климат": "Klimat",
  "Преобладает **умеренно континентальный** климат, в Сибири он становится **резко континентальным**: зима очень холодная, лето жаркое, разница между ними доходит до шестидесяти градусов. На Дальнем Востоке климат **муссонный**, с дождливым летом, на побережье Чёрного моря около Сочи — **субтропический**, а на севере **арктический**.":
    "Przeważa klimat **umiarkowany kontynentalny**, a na Syberii staje się **skrajnie kontynentalny**: zima bardzo mroźna, lato upalne, a różnica między nimi sięga sześćdziesięciu stopni. Na Dalekim Wschodzie klimat jest **monsunowy**, z deszczowym latem, na wybrzeżu Morza Czarnego koło Soczi — **subtropikalny**, a na północy **arktyczny**.",
  "**Оймякон** и **Верхоянск** в Якутии оспаривают звание **полюса холода** Северного полушария: там фиксировали температуры около минус шестидесяти семи градусов. При этом в тот же январский день в Сочи может быть плюс десять.":
    "**Ojmiakon** i **Wierchojańsk** w Jakucji spierają się o miano **bieguna zimna** półkuli północnej: notowano tam temperatury około minus sześćdziesięciu siedmiu stopni. A tego samego styczniowego dnia w Soczi może być plus dziesięć.",
  "Что охраняют": "Co się chroni",
  "В стране работают **заповедники**, **национальные парки** и заказники; первый заповедник, Баргузинский на Байкале, был создан ещё в 1917 году. Редкие виды заносятся в **Красную книгу**. Среди самых известных — **амурский тигр**, **белый медведь**, **зубр** и **дальневосточный леопард**.":
    "W kraju działają **rezerwaty**, **parki narodowe** i obszary chronione; pierwszy rezerwat, Bargużyński nad Bajkałem, powstał jeszcze w 1917 roku. Gatunki rzadkie wpisuje się do **Czerwonej Księgi**. Wśród najbardziej znanych są **tygrys amurski**, **niedźwiedź polarny**, **żubr** i **lampart amurski**.",
  "**Каспийское море** называется морем, но по сути это **озеро** — крупнейший в мире замкнутый водоём, не связанный с океаном. Его правовой статус десятилетиями обсуждался прикаспийскими государствами именно из-за этой двойственности.":
    "**Morze Kaspijskie** nazywa się morzem, ale w istocie jest **jeziorem** — największym na świecie zbiornikiem zamkniętym, niepołączonym z oceanem. O jego status prawny państwa nadkaspijskie spierały się dziesięcioleciami właśnie z powodu tej dwuznaczności.",
  "Федеративное устройство: субъекты": "Ustrój federalny: podmioty",
  "Почему это важно: Россия — федерация, и её части называются по-разному не случайно. У республики есть то, чего нет у области, и понимание этой разницы объясняет карту.":
    "Dlaczego to ważne: Rosja jest federacją, a jej części nazywają się różnie nie przez przypadek. Republika ma to, czego nie ma obwód, a zrozumienie tej różnicy tłumaczy mapę.",
  "Шесть видов субъектов": "Sześć rodzajów podmiotów",
  "**Статья 65** Конституции содержит перечень субъектов Федерации; на сегодня их **восемьдесят девять**. Все они, по **статье 5**, **равноправны** в отношениях с федеральными органами власти, но исторические названия и объём собственных институтов различаются.":
    "**Artykuł 65** Konstytucji zawiera wykaz podmiotów Federacji; dziś jest ich **osiemdziesiąt dziewięć**. Wszystkie są, według **artykułu 5**, **równouprawnione** w stosunkach z organami federalnymi, ale historyczne nazwy i zakres własnych instytucji się różnią.",
  "Республика": "Republika",
  "Имеет собственную конституцию и вправе устанавливать свои государственные языки наряду с русским.":
    "Ma własną konstytucję i prawo ustanawiania swoich języków państwowych obok rosyjskiego.",
  "Край и область": "Kraj i obwód",
  "Самые многочисленные виды. Имеют устав, а не конституцию, и одну государственную языковую норму — русскую.":
    "Najliczniejsze rodzaje. Mają statut, a nie konstytucję, i jedną państwową normę językową — rosyjską.",
  "Город федерального значения": "Miasto o znaczeniu federalnym",
  "Москва, Санкт-Петербург и Севастополь: города, которые сами являются субъектами Федерации.":
    "Moskwa, Petersburg i Sewastopol: miasta, które same są podmiotami Federacji.",
  "Автономная область и автономные округа": "Obwód autonomiczny i okręgi autonomiczne",
  "Автономная область одна — Еврейская. Автономные округа выделяются по территориям коренных народов Севера.":
    "Obwód autonomiczny jest jeden — Żydowski. Okręgi autonomiczne wydzielono według terenów rdzennych ludów Północy.",
  "Различие между **конституцией** республики и **уставом** края или области — не только в названии документа. Республики появились там, где исторически жил один из народов страны, и право устанавливать **государственные языки** есть именно у них: татарский в Татарстане, якутский в Якутии, башкирский в Башкортостане.":
    "Różnica między **konstytucją** republiki a **statutem** kraju czy obwodu to nie tylko nazwa dokumentu. Republiki powstały tam, gdzie historycznie żył jeden z narodów kraju, i prawo ustanawiania **języków państwowych** mają właśnie one: tatarski w Tatarstanie, jakucki w Jakucji, baszkirski w Baszkortostanie.",
  "Что есть у республики, чего нет у области?": "Co ma republika, czego nie ma obwód?",
  "Собственная конституция и право устанавливать государственные языки":
    "Własną konstytucję i prawo ustanawiania języków państwowych",
  "Право издавать законы": "Prawo do wydawania ustaw",
  "Собственный бюджет": "Własny budżet",
  "Представительство в Совете Федерации": "Przedstawicielstwo w Radzie Federacji",
  "Законы, бюджет и по два сенатора есть у каждого субъекта. Различают республику именно конституция вместо устава и право на свои государственные языки.":
    "Ustawy, budżet i po dwóch senatorów ma każdy podmiot. Republikę wyróżnia właśnie konstytucja zamiast statutu i prawo do własnych języków państwowych.",
  "Кто что решает": "Kto co rozstrzyga",
  "**Статья 71** перечисляет **исключительное ведение Федерации**: оборона и безопасность, внешняя политика, гражданство, денежная эмиссия, уголовное и гражданское законодательство, федеральный бюджет. Здесь субъекты не законодательствуют вовсе.":
    "**Artykuł 71** wylicza **wyłączne kompetencje Federacji**: obrona i bezpieczeństwo, polityka zagraniczna, obywatelstwo, emisja pieniądza, prawo karne i cywilne, budżet federalny. Tutaj podmioty nie stanowią prawa w ogóle.",
  "**Статья 72** называет **совместное ведение**: образование, здравоохранение, культура, природопользование, административное и трудовое законодательство. Здесь Федерация задаёт общие рамки, а субъект принимает свои законы внутри них.":
    "**Artykuł 72** wymienia **kompetencje wspólne**: oświata, ochrona zdrowia, kultura, korzystanie z przyrody, prawo administracyjne i pracy. Tutaj Federacja wyznacza ogólne ramy, a podmiot uchwala własne ustawy wewnątrz nich.",
  "А **статья 73** говорит коротко: **вне этих двух списков** субъекты обладают **всей полнотой государственной власти**. Логика та же, что в испанском или немецком федерализме: перечисляется то, что забирает центр, остальное остаётся регионам.":
    "A **artykuł 73** mówi krótko: **poza tymi dwiema listami** podmioty mają **pełnię władzy państwowej**. Logika jest ta sama co w federalizmie hiszpańskim czy niemieckim: wylicza się to, co bierze centrum, reszta zostaje regionom.",
  "Как устроен субъект": "Jak urządzony jest podmiot",
  "У каждого есть **законодательное собрание** — оно может называться думой, советом, хуралом, курултаем, — **высшее должностное лицо**, чаще всего **губернатор** или **глава республики**, и своё **правительство**. Есть и свой **верховный, краевой или областной суд**, входящий в общую федеральную судебную систему.":
    "Każdy ma **zgromadzenie ustawodawcze** — może się nazywać dumą, radą, churałem, kurułtajem — **najwyższą osobę urzędową**, najczęściej **gubernatora** albo **szefa republiki**, i własny **rząd**. Ma też własny **sąd najwyższy, krajowy albo obwodowy**, wchodzący do wspólnego federalnego systemu sądów.",
  "Отдельно стоит запомнить: **федеральные округа** — их восемь, и они появились указом Президента в **2000 году** — **не являются субъектами** Федерации и не упомянуты в Конституции. Это способ организации федеральных органов на местах, а не уровень власти.":
    "Osobno warto zapamiętać: **okręgi federalne** — jest ich osiem i pojawiły się dekretem Prezydenta w **2000 roku** — **nie są podmiotami** Federacji i nie ma o nich mowy w Konstytucji. To sposób organizacji organów federalnych w terenie, a nie szczebel władzy.",
  "Являются ли федеральные округа субъектами Федерации?":
    "Czy okręgi federalne są podmiotami Federacji?",
  "Да, это самый крупный вид субъекта": "Tak, to największy rodzaj podmiotu",
  "Нет: они не упомянуты в Конституции и служат для организации федеральных органов":
    "Nie: nie ma o nich mowy w Konstytucji i służą organizacji organów federalnych",
  "Да, с 2000 года": "Tak, od 2000 roku",
  "Только Центральный федеральный округ": "Tylko Centralny Okręg Federalny",
  "Округа введены указом Президента в 2000 году и в Конституции их нет. Субъекты перечислены в статье 65, и федеральных округов в этом перечне не значится.":
    "Okręgi wprowadzono dekretem Prezydenta w 2000 roku i w Konstytucji ich nie ma. Podmioty wylicza artykuł 65, a okręgów federalnych w tym wykazie nie znajdziemy.",
  "Карта не всегда была такой": "Mapa nie zawsze tak wyglądała",
  "Число субъектов менялось. В **2000-е годы** прошло **укрупнение регионов**: несколько автономных округов объединились с краями и областями, внутри которых находились, и число субъектов сократилось. Каждое такое объединение проходило через **референдум** в обоих регионах.":
    "Liczba podmiotów się zmieniała. W **latach dwutysięcznych** przeszło **scalanie regionów**: kilka okręgów autonomicznych połączyło się z krajami i obwodami, wewnątrz których leżały, a liczba podmiotów zmalała. Każde takie połączenie przechodziło przez **referendum** w obu regionach.",
  "Сколько видов субъектов Федерации предусматривает Конституция?":
    "Ile rodzajów podmiotów Federacji przewiduje Konstytucja?",
  "Три": "Trzy",
  "Четыре": "Cztery",
  "Шесть": "Sześć",
  "Восемь": "Osiem",
  "Республика, край, область, город федерального значения, автономная область и автономный округ. Восемь — это число федеральных округов, которые субъектами не являются.":
    "Republika, kraj, obwód, miasto o znaczeniu federalnym, obwód autonomiczny i okręg autonomiczny. Osiem to liczba okręgów federalnych, które podmiotami nie są.",
  "**Область** и **автономный округ** — разные виды субъектов, и путать их не стоит. Автономные округа выделялись по территориям коренных народов Севера, и некоторые из них до сих пор входят в состав области, оставаясь при этом самостоятельными субъектами.":
    "**Obwód** i **okręg autonomiczny** to różne rodzaje podmiotów i nie warto ich mylić. Okręgi autonomiczne wydzielano według terenów rdzennych ludów Północy, a niektóre z nich do dziś wchodzą w skład obwodu, pozostając przy tym samodzielnymi podmiotami.",
  "Города": "Miasta",
  "Почему это важно: почти все крупные города страны стоят в европейской части или вдоль одной железной дороги. Карта городов — это карта того, где людям было удобно жить и работать.":
    "Dlaczego to ważne: niemal wszystkie duże miasta kraju stoją w części europejskiej albo wzdłuż jednej linii kolejowej. Mapa miast to mapa tego, gdzie ludziom było wygodnie żyć i pracować.",
  "Две столицы": "Dwie stolice",
  "**Москва** — столица и крупнейший город страны: около **тринадцати миллионов** жителей, самый населённый город Европы. Здесь **Кремль** и **Красная площадь**, внесённые в список ЮНЕСКО, и **метрополитен**, открытый в **1935 году** и знаменитый оформлением станций.":
    "**Moskwa** to stolica i największe miasto kraju: około **trzynastu milionów** mieszkańców, najludniejsze miasto Europy. Tu są **Kreml** i **plac Czerwony**, wpisane na listę UNESCO, oraz **metro**, otwarte w **1935 roku** i słynne z wystroju stacji.",
  "**Санкт-Петербург** — второй по величине, около **пяти с половиной миллионов**. Он был **столицей с 1712 по 1918 год**, и планировка центра сохранилась с тех времён. **Эрмитаж** — один из крупнейших музеев мира; летом сюда едут за **белыми ночами** и разводными мостами.":
    "**Petersburg** jest drugi co do wielkości, około **pięciu i pół miliona**. Był **stolicą od 1712 do 1918 roku**, a układ centrum zachował się z tamtych czasów. **Ermitaż** to jedno z największych muzeów świata; latem przyjeżdża się tu po **białe noce** i rozsuwane mosty.",
  "В какие годы столицей был Санкт-Петербург?": "W jakich latach stolicą był Petersburg?",
  "С 1703 по 1917 год": "Od 1703 do 1917 roku",
  "С 1712 по 1918 год": "Od 1712 do 1918 roku",
  "С 1721 по 1905 год": "Od 1721 do 1905 roku",
  "С 1700 по 1800 год": "Od 1700 do 1800 roku",
  "Город основан в 1703 году, столицей стал в 1712-м, а в 1918-м столица вернулась в Москву из-за близости фронта.":
    "Miasto założono w 1703 roku, stolicą stało się w 1712, a w 1918 stolica wróciła do Moskwy z powodu bliskości frontu.",
  "Города-миллионники": "Miasta milionowe",
  "Кроме двух столиц в стране около **шестнадцати** городов с населением свыше миллиона. Крупнейшие из них — **Новосибирск**, **Екатеринбург**, **Казань**, **Нижний Новгород**, **Челябинск**, **Самара**, **Уфа**, **Ростов-на-Дону**, **Омск**, **Красноярск**, **Воронеж**, **Пермь**, **Волгоград** и **Краснодар**.":
    "Poza dwiema stolicami w kraju jest około **szesnastu** miast liczących ponad milion mieszkańców. Największe z nich to **Nowosybirsk**, **Jekaterynburg**, **Kazań**, **Niżny Nowogród**, **Czelabińsk**, **Samara**, **Ufa**, **Rostów nad Donem**, **Omsk**, **Krasnojarsk**, **Woroneż**, **Perm**, **Wołgograd** i **Krasnodar**.",
  "Новосибирск": "Nowosybirsk",
  "Третий по населению город страны, выросший вокруг моста Транссиба через Обь. Рядом Академгородок — научный центр.":
    "Trzecie co do liczby ludności miasto kraju, wyrosłe wokół mostu kolei transsyberyjskiej przez Ob. Obok Akademgorodok — ośrodek naukowy.",
  "Екатеринбург": "Jekaterynburg",
  "Столица Урала и промышленный центр, стоящий почти на границе Европы и Азии.":
    "Stolica Uralu i ośrodek przemysłowy, stojący niemal na granicy Europy i Azji.",
  "Казань": "Kazań",
  "Столица Татарстана, где кремль с мечетью и православным собором внутри одной стены внесён в список ЮНЕСКО.":
    "Stolica Tatarstanu, gdzie kreml z meczetem i soborem prawosławnym wewnątrz jednego muru jest wpisany na listę UNESCO.",
  "Владивосток": "Władywostok",
  "Конечная точка Транссиба и главный порт на Тихом океане, в семи часах от Москвы по времени.":
    "Końcowy punkt kolei transsyberyjskiej i główny port nad Oceanem Spokojnym, siedem godzin od Moskwy czasu.",
  "Золотое кольцо": "Złoty Pierścień",
  "**Золотое кольцо** — маршрут по древним городам северо-востока от Москвы, сложившийся как туристический в 1960-е годы. В него входят **Владимир**, **Суздаль**, **Ярославль**, **Кострома**, **Ростов Великий**, **Переславль-Залесский** и **Сергиев Посад**. Это те самые земли, из которых выросло Московское государство, и белокаменные соборы XII века стоят там до сих пор.":
    "**Złoty Pierścień** to szlak po dawnych miastach na północny wschód od Moskwy, ukształtowany jako turystyczny w latach sześćdziesiątych. Wchodzą do niego **Włodzimierz**, **Suzdal**, **Jarosław**, **Kostroma**, **Rostów Wielki**, **Perejasław Zaleski** i **Siergijew Posad**. To te same ziemie, z których wyrosło państwo moskiewskie, a białokamienne sobory z XII wieku stoją tam do dziś.",
  "Что такое Золотое кольцо?": "Czym jest Złoty Pierścień?",
  "Кольцевая автодорога вокруг Москвы": "Obwodnicą Moskwy",
  "Маршрут по древним городам северо-востока от Москвы":
    "Szlakiem po dawnych miastach na północny wschód od Moskwy",
  "Название московского метро": "Nazwą moskiewskiego metra",
  "Группа городов-миллионников": "Grupą miast milionowych",
  "Владимир, Суздаль, Ярославль, Кострома, Ростов Великий, Переславль-Залесский и Сергиев Посад. Маршрут сложился в 1960-е годы, а сами города — XII века и старше.":
    "Włodzimierz, Suzdal, Jarosław, Kostroma, Rostów Wielki, Perejasław Zaleski i Siergijew Posad. Szlak ukształtował się w latach sześćdziesiątych, a same miasta pochodzą z XII wieku i starsze.",
  "**Транссибирская магистраль** — самая длинная железная дорога в мире. От Москвы до **Владивостока** по ней **9288 километров**, и поезд идёт около **шести суток**, пересекая семь часовых поясов.":
    "**Kolej transsyberyjska** to najdłuższa linia kolejowa świata. Z Moskwy do **Władywostoku** biegnie nią **9288 kilometrów**, a pociąg jedzie około **sześciu dób**, przecinając siedem stref czasowych.",
  "Дорога объясняет карту расселения Сибири: почти все крупные сибирские города — Омск, Новосибирск, Красноярск, Иркутск, Хабаровск — стоят на ней или рядом. К северу от магистрали население редеет очень быстро.":
    "Ta linia tłumaczy mapę osadnictwa Syberii: niemal wszystkie duże miasta syberyjskie — Omsk, Nowosybirsk, Krasnojarsk, Irkuck, Chabarowsk — stoją na niej albo obok. Na północ od magistrali ludność bardzo szybko rzednie.",
  "Особые города": "Miasta szczególne",
  "**Города-герои** — звание, присвоенное за оборону в годы войны. В нынешних границах России это **Волгоград**, **Санкт-Петербург**, **Москва**, **Мурманск**, **Смоленск**, **Тула** и **Новороссийск**. Позже появилось звание **города воинской славы**, которое получили несколько десятков городов.":
    "**Miasta-bohaterowie** to tytuł nadany za obronę w latach wojny. W dzisiejszych granicach Rosji są to **Wołgograd**, **Petersburg**, **Moskwa**, **Murmańsk**, **Smoleńsk**, **Tuła** i **Noworosyjsk**. Później pojawił się tytuł **miasta chwały wojennej**, który dostało kilkadziesiąt miast.",
  "Есть и города особого назначения: **наукограды** вроде Дубны и Королёва, построенные вокруг институтов, и **закрытые административно-территориальные образования** — города при предприятиях атомной и оборонной промышленности, въезд в которые ограничен.":
    "Są też miasta o szczególnym przeznaczeniu: **naukogrody** w rodzaju Dubnej i Korolowa, zbudowane wokół instytutów, oraz **zamknięte jednostki administracyjno-terytorialne** — miasta przy zakładach przemysłu atomowego i zbrojeniowego, do których wjazd jest ograniczony.",
  "Сколько примерно идёт поезд от Москвы до Владивостока?":
    "Ile mniej więcej jedzie pociąg z Moskwy do Władywostoku?",
  "Двое суток": "Dwie doby",
  "Около шести суток": "Około sześciu dób",
  "Около двух недель": "Około dwóch tygodni",
  "Меньше суток": "Mniej niż dobę",
  "9288 километров и семь часовых поясов. Транссиб — самая длинная железная дорога в мире, и почти все крупные сибирские города стоят на ней.":
    "9288 kilometrów i siedem stref czasowych. Kolej transsyberyjska to najdłuższa linia kolejowa świata i niemal wszystkie duże miasta syberyjskie stoją na niej.",
  "**Наукоград** и **закрытый город** — не одно и то же. В наукоград можно приехать свободно; в ЗАТО въезд ограничен, и на картах советского времени таких городов попросту не было.":
    "**Naukograd** i **miasto zamknięte** to nie to samo. Do naukogrodu można przyjechać swobodnie; do miasta zamkniętego wjazd jest ograniczony, a na mapach czasów radzieckich takich miast po prostu nie było.",
  "Народы": "Narody",
  "Народы, языки и культура": "Narody, języki i kultura",
  "Почему это важно: Конституция начинается не со слова «государство» и не со слова «нация», а со слов «многонациональный народ». Из этого выражения выведено многое в устройстве страны — от названий республик до права молчать о своём происхождении.":
    "Dlaczego to ważne: Konstytucja zaczyna się nie od słowa „państwo” i nie od słowa „naród” w liczbie pojedynczej, lecz od słów „wielonarodowy naród”. Z tego wyrażenia wyprowadzono wiele w ustroju kraju — od nazw republik po prawo do milczenia o swoim pochodzeniu.",
  "Что говорит преамбула": "Co mówi preambuła",
  "Основной закон открывается словами: **«Мы, многонациональный народ Российской Федерации…»**. Носитель суверенитета в статье 3 назван так же. Это не украшение текста: страна не описывает себя как государство одного народа, и на этом построена вся её федеративная часть.":
    "Ustawa zasadnicza otwiera się słowami: **„My, wielonarodowy naród Federacji Rosyjskiej…”**. Nosiciela suwerenności artykuł 3 nazywa tak samo. To nie ozdoba tekstu: kraj nie opisuje siebie jako państwa jednego narodu, i na tym zbudowana jest cała jego część federalna.",
  "**Перепись 2021 года** насчитала более **190 народов**. Точное число всякий раз спорно, потому что перепись записывает то, что человек сказал о себе сам: некоторые группы одни считают отдельным народом, другие — частью соседнего. Около **шестнадцати миллионов** человек национальность не указали вовсе — и имели на это полное право.":
    "**Spis powszechny z 2021 roku** naliczył ponad **190 narodów**. Dokładna liczba za każdym razem bywa sporna, bo spis zapisuje to, co człowiek sam o sobie powiedział: niektóre grupy jedni uważają za osobny naród, inni za część sąsiedniego. Około **szesnastu milionów** ludzi w ogóle nie podało narodowości — i miało do tego pełne prawo.",
  "Кого сколько": "Kogo ilu",
  "**Русские** составляют около **80 %** населения — примерно **105 миллионов** человек. Следующие по численности, по данным той же переписи, — **татары**, **чеченцы**, **башкиры**, **чуваши**, **аварцы** и **армяне**; у первых из них больше миллиона человек, дальше счёт идёт на сотни тысяч.":
    "**Rosjanie** stanowią około **80 %** ludności — mniej więcej **105 milionów** osób. Kolejni pod względem liczebności, według tego samego spisu, to **Tatarzy**, **Czeczeni**, **Baszkirzy**, **Czuwasze**, **Awarowie** i **Ormianie**; pierwsi z nich liczą ponad milion osób, dalej rachunek idzie w setkach tysięcy.",
  "География распределена неровно. В большинстве регионов преобладают русские; в республиках Северного Кавказа, в Татарстане, Чувашии, Якутии картина другая. Именно поэтому национальный состав в России — вопрос не общей цифры, а конкретного места.":
    "Rozkład geograficzny jest nierówny. W większości regionów przeważają Rosjanie; w republikach Kaukazu Północnego, w Tatarstanie, Czuwaszji, Jakucji obraz jest inny. Właśnie dlatego skład narodowościowy w Rosji to kwestia nie ogólnej liczby, lecz konkretnego miejsca.",
  "Как Конституция называет носителя суверенитета?":
    "Jak Konstytucja nazywa nosiciela suwerenności?",
  "Русская нация": "Naród rosyjski",
  "Многонациональный народ Российской Федерации": "Wielonarodowy naród Federacji Rosyjskiej",
  "Граждане и постоянные жители": "Obywatele i stali mieszkańcy",
  "Совокупность субъектов Федерации": "Ogół podmiotów Federacji",
  "Этими словами открывается преамбула, и они же стоят в статье 3. Федеративное устройство страны выведено из них.":
    "Tymi słowami otwiera się preambuła i one też stoją w artykule 3. Z nich wyprowadzono federalny ustrój kraju.",
  "Титульный народ — не всегда большинство": "Naród tytularny to nie zawsze większość",
  "Двадцать четыре республики носят имена народов, но имя республики говорит об истории, а не о нынешней арифметике. В **Карелии** карелов — небольшая доля населения. В **Башкортостане** башкиры составляют около четверти. А в **Чечне**, **Ингушетии**, **Дагестане** и **Туве** титульные народы — уверенное большинство.":
    "Dwadzieścia cztery republiki noszą imiona narodów, ale nazwa republiki mówi o historii, a nie o dzisiejszej arytmetyce. W **Karelii** Karelowie stanowią niewielką część ludności. W **Baszkortostanie** Baszkirzy to około jednej czwartej. A w **Czeczenii**, **Inguszetii**, **Dagestanie** i **Tuwie** narody tytularne są zdecydowaną większością.",
  "Республика поэтому не «принадлежит» своему народу. Права в ней — у всех жителей одинаково, а особый статус касается языка и культуры, а не гражданства и не собственности.":
    "Republika nie „należy” więc do swojego narodu. Prawa mają w niej wszyscy mieszkańcy jednakowo, a status szczególny dotyczy języka i kultury, a nie obywatelstwa i nie własności.",
  "Коренные малочисленные народы": "Rdzenne narody małoliczne",
  "Отдельная правовая категория. **Статья 69** Конституции гарантирует права **коренных малочисленных народов**; кто именно ими считается, определяет **единый перечень**, утверждённый Правительством, — в нём **сорок семь** народов.":
    "Osobna kategoria prawna. **Artykuł 69** Konstytucji gwarantuje prawa **rdzennych narodów małolicznych**; kto dokładnie się do nich zalicza, określa **jednolity wykaz** zatwierdzony przez rząd — jest w nim **czterdzieści siedem** narodów.",
  "Условия попадания в перечень: народ живёт на землях предков, ведёт **традиционный образ жизни и хозяйство**, осознаёт себя самостоятельной общностью — и насчитывает **менее пятидесяти тысяч** человек. Некоторые из них — несколько сотен человек, а один-два измеряются десятками.":
    "Warunki wpisania do wykazu: naród żyje na ziemiach przodków, prowadzi **tradycyjny tryb życia i gospodarkę**, uznaje się za odrębną wspólnotę — i liczy **mniej niż pięćdziesiąt tysięcy** osób. Niektóre z nich liczą kilkaset osób, a jeden czy dwa mierzy się w dziesiątkach.",
  "Север и Сибирь": "Północ i Syberia",
  "Ненцы, ханты, манси, эвенки, эвены, чукчи, коряки, нанайцы. Оленеводство, рыболовство и охота — не хобби, а основа хозяйства.":
    "Nieńcy, Chantowie, Mansowie, Ewenkowie, Ewenowie, Czukcze, Koriacy, Nanajowie. Hodowla reniferów, rybołówstwo i myślistwo to nie hobby, lecz podstawa gospodarki.",
  "Дальний Восток": "Daleki Wschód",
  "Нивхи, удэгейцы, ительмены, алеуты. Многие живут в нескольких сёлах, и язык держится там же, где промысел.":
    "Niwchowie, Udegejcy, Itelmeni, Aleuci. Wielu żyje w kilku wsiach, a język trzyma się tam, gdzie trzyma się dawne rzemiosło i połów.",
  "Европейская часть": "Część europejska",
  "Вепсы, саамы, ижорцы, водь. Народы старые, но малочисленные — и потому в том же перечне.":
    "Wepsowie, Saamowie, Ingrowie, Wodowie. Narody stare, ale nieliczne — i dlatego w tym samym wykazie.",
  "Абазины, шапсуги. Небольшие народы Северного Кавказа тоже входят в перечень, хотя их соседи в него не входят.":
    "Abazyni, Szapsugowie. Niewielkie narody Kaukazu Północnego też wchodzą do wykazu, choć ich sąsiedzi już nie.",
  "Что даёт статус: право на **территории традиционного природопользования**, льготы по охоте и рыболовству для собственных нужд, досрочную пенсию, освобождение от призыва при занятии традиционным промыслом. Это не привилегия по происхождению, а компенсация за то, что современное хозяйство землю их промысла сокращает.":
    "Co daje ten status: prawo do **terenów tradycyjnego korzystania z przyrody**, ulgi w polowaniu i rybołówstwie na własne potrzeby, wcześniejszą emeryturę, zwolnienie z poboru przy zajmowaniu się tradycyjnym zajęciem. To nie przywilej z racji pochodzenia, lecz wyrównanie za to, że współczesna gospodarka kurczy ziemię, z której żyją.",
  "Какой признак обязателен для коренного малочисленного народа?":
    "Który warunek jest obowiązkowy dla rdzennego narodu małolicznego?",
  "Собственная республика в составе Федерации": "Własna republika w składzie Federacji",
  "Численность менее пятидесяти тысяч человек и традиционный образ жизни":
    "Liczebność poniżej pięćdziesięciu tysięcy osób i tradycyjny tryb życia",
  "Отдельное гражданство": "Odrębne obywatelstwo",
  "Свой государственный язык": "Własny język państwowy",
  "Перечень утверждает Правительство. Кроме численности учитываются жизнь на землях предков, традиционное хозяйство и самосознание общности.":
    "Wykaz zatwierdza rząd. Poza liczebnością bierze się pod uwagę życie na ziemiach przodków, tradycyjną gospodarkę i poczucie odrębności wspólnoty.",
  "Национальность — дело самого человека": "Narodowość to sprawa samego człowieka",
  "**Статья 26** формулирует это прямо: каждый вправе определять и указывать свою национальную принадлежность — и **никто не может быть принуждён** к её определению и указанию. Та же статья даёт право пользоваться родным языком и свободно выбирать язык общения, воспитания, обучения и творчества.":
    "**Artykuł 26** formułuje to wprost: każdy ma prawo określać i wskazywać swoją przynależność narodową — i **nikogo nie można zmusić** do jej określenia i wskazania. Ten sam artykuł daje prawo do posługiwania się językiem ojczystym i do swobodnego wyboru języka porozumiewania się, wychowania, nauki i twórczości.",
  "У этой нормы есть предыстория. В советских паспортах была графа «национальность», записанная по родителям; в паспорте нынешнего образца её нет. Перепись спрашивает — но ответ добровольный, и шестнадцать миллионов человек им и не воспользовались.":
    "Ta norma ma swoją przeszłość. W radzieckich paszportach była rubryka „narodowość”, wpisywana po rodzicach; w paszporcie dzisiejszego wzoru jej nie ma. Spis pyta — ale odpowiedź jest dobrowolna, i szesnaście milionów ludzi z niej nie skorzystało.",
  "Может ли человека обязать указать свою национальность?":
    "Czy można zobowiązać człowieka do wskazania swojej narodowości?",
  "Да, при получении паспорта": "Tak, przy odbiorze paszportu",
  "Нет, статья 26 прямо это запрещает": "Nie, artykuł 26 wprost tego zakazuje",
  "Да, если он живёт в республике": "Tak, jeśli mieszka w republice",
  "Да, во время переписи населения": "Tak, podczas spisu powszechnego",
  "Каждый вправе определять и указывать свою национальную принадлежность — и никто не может быть к этому принуждён. В нынешнем паспорте такой графы нет.":
    "Każdy ma prawo określać i wskazywać swoją przynależność narodową — i nikogo nie można do tego zmusić. W dzisiejszym paszporcie takiej rubryki nie ma.",
  "Не путайте **гражданство** и **национальность**. Гражданство в России одно, оно записано в паспорте и одинаково для всех. Национальность — самоопределение человека, нигде не удостоверяется и ни на какие права не влияет.":
    "Nie mylić **obywatelstwa** z **narodowością**. Obywatelstwo w Rosji jest jedno, zapisane w paszporcie i jednakowe dla wszystkich. Narodowość to samookreślenie człowieka, nigdzie się jej nie poświadcza i na żadne prawa nie wpływa.",
  "Языки и религии": "Języki i religie",
  "Почему это важно: русский язык связывает страну целиком, но он не единственный, у которого есть правовой статус. А в вопросах веры государство держится в стороне намеренно — и это записано в Конституции отдельной статьёй.":
    "Dlaczego to ważne: język rosyjski spina kraj w całości, ale nie jest jedynym, który ma status prawny. A w sprawach wiary państwo trzyma się z boku rozmyślnie — i zapisano to w Konstytucji osobnym artykułem.",
  "Государственный язык": "Język państwowy",
  "**Статья 68**: государственным языком на всей территории страны является **русский**. На нём ведутся суд, делопроизводство, официальные документы и школьное обучение по государственному стандарту.":
    "**Artykuł 68**: językiem państwowym na całym terytorium kraju jest **rosyjski**. Prowadzi się w nim sądy, urzędowanie, dokumenty oficjalne i nauczanie szkolne według standardu państwowego.",
  "**Республики вправе устанавливать свои государственные языки** — они употребляются в органах власти республики наравне с русским. В республиках такой статус получили несколько десятков языков: татарский, башкирский, чувашский, якутский, бурятский, осетинский, чеченский и другие. В Дагестане государственными объявлены языки всех народов республики сразу — их больше десятка.":
    "**Republiki mają prawo ustanawiać własne języki państwowe** — używa się ich w organach władzy republiki na równi z rosyjskim. W republikach taki status otrzymało kilkadziesiąt języków: tatarski, baszkirski, czuwaski, jakucki, buriacki, osetyjski, czeczeński i inne. W Dagestanie za państwowe ogłoszono od razu języki wszystkich narodów republiki — jest ich ponad dziesięć.",
  "Та же статья гарантирует всем народам страны **право сохранять родной язык** и создавать условия для его изучения. Всего языков народов России около **ста пятидесяти**, и часть из них ЮНЕСКО относит к исчезающим.":
    "Ten sam artykuł gwarantuje wszystkim narodom kraju **prawo do zachowania języka ojczystego** i do tworzenia warunków do jego nauki. Wszystkich języków narodów Rosji jest około **stu pięćdziesięciu**, a część z nich UNESCO zalicza do zagrożonych.",
  "Могут ли республики устанавливать собственные государственные языки?":
    "Czy republiki mogą ustanawiać własne języki państwowe?",
  "Нет, государственный язык только один": "Nie, język państwowy jest tylko jeden",
  "Да, они употребляются в органах республики наравне с русским":
    "Tak, używa się ich w organach republiki na równi z rosyjskim",
  "Да, и русский язык там перестаёт быть государственным":
    "Tak, i rosyjski przestaje tam być językiem państwowym",
  "Только с разрешения Государственной Думы на каждый случай":
    "Tylko za zgodą Dumy Państwowej w każdym przypadku",
  "Статья 68. Русский остаётся государственным на всей территории; язык республики добавляется к нему, а не заменяет его.":
    "Artykuł 68. Rosyjski pozostaje państwowym na całym terytorium; język republiki dochodzi do niego, a nie go zastępuje.",
  "Кириллица по закону": "Cyrylica z mocy ustawy",
  "Федеральный закон **о языках народов Российской Федерации** требует, чтобы алфавиты государственного языка страны и государственных языков республик строились **на графической основе кириллицы**. Иная основа может быть установлена только федеральным законом.":
    "Ustawa federalna **o językach narodów Federacji Rosyjskiej** wymaga, żeby alfabety języka państwowego kraju i języków państwowych republik budowano **na graficznej podstawie cyrylicy**. Inną podstawę może ustanowić tylko ustawa federalna.",
  "Норма появилась после того, как Татарстан в конце 1990-х решил перевести татарскую письменность на латиницу. Конституционный Суд в **2004 году** признал требование единой графической основы соответствующим Конституции: письменность государственных языков — вопрос общегосударственный, а не только республиканский.":
    "Norma pojawiła się po tym, jak Tatarstan pod koniec lat dziewięćdziesiątych postanowił przenieść piśmiennictwo tatarskie na alfabet łaciński. Sąd Konstytucyjny w **2004 roku** uznał wymóg jednolitej podstawy graficznej za zgodny z Konstytucją: pismo języków państwowych to sprawa ogólnopaństwowa, a nie tylko republikańska.",
  "У кириллицы своя история: её принесли в славянские земли **Кирилл и Мефодий** в IX веке, а нынешний облик букв задала **гражданская азбука Петра I** в 1708 году. **24 мая** отмечается День славянской письменности и культуры.":
    "Cyrylica ma własną historię: przynieśli ją na ziemie słowiańskie **Cyryl i Metody** w IX wieku, a dzisiejszy wygląd liter nadała **grażdanka Piotra I** w 1708 roku. **24 maja** obchodzi się Dzień Piśmiennictwa i Kultury Słowiańskiej.",
  "На какой графической основе должны строиться алфавиты государственных языков республик?":
    "Na jakiej podstawie graficznej mają być budowane alfabety języków państwowych republik?",
  "На основе кириллицы": "Na podstawie cyrylicy",
  "На основе латиницы": "Na podstawie alfabetu łacińskiego",
  "Республика выбирает основу сама": "Republika sama wybiera podstawę",
  "На основе исторической письменности народа": "Na podstawie historycznego pisma danego narodu",
  "Так требует федеральный закон о языках; Конституционный Суд подтвердил это в 2004 году. Иную основу может установить только федеральный закон.":
    "Tak wymaga ustawa federalna o językach; Sąd Konstytucyjny potwierdził to w 2004 roku. Inną podstawę może ustanowić tylko ustawa federalna.",
  "Светское государство": "Państwo świeckie",
  "**Статья 14**: Российская Федерация — **светское государство**. Никакая религия не может устанавливаться в качестве государственной или обязательной. Религиозные объединения **отделены от государства и равны перед законом**.":
    "**Artykuł 14**: Federacja Rosyjska jest **państwem świeckim**. Żadna religia nie może być ustanowiona jako państwowa ani obowiązkowa. Związki wyznaniowe są **oddzielone od państwa i równe wobec prawa**.",
  "**Статья 28** даёт каждому свободу совести и вероисповедания: право исповедовать любую религию или **не исповедовать никакой**, свободно выбирать и менять убеждения и действовать в согласии с ними.":
    "**Artykuł 28** daje każdemu wolność sumienia i wyznania: prawo do wyznawania dowolnej religii albo **niewyznawania żadnej**, do swobodnego wybierania i zmieniania przekonań oraz do działania w zgodzie z nimi.",
  "Практические следствия простые: в государственной школе нет обязательного богослужения, запись о вере нигде не ведётся, а религиозный праздник становится нерабочим днём только через обычный закон, как любой другой.":
    "Praktyczne skutki są proste: w szkole państwowej nie ma obowiązkowego nabożeństwa, zapisu o wierze nigdzie się nie prowadzi, a święto religijne staje się dniem wolnym tylko przez zwykłą ustawę, jak każde inne.",
  "Традиционные религии": "Religie tradycyjne",
  "Закон **о свободе совести и о религиозных объединениях 1997 года** в преамбуле признаёт особую роль **православия** в истории страны и выражает уважение к **христианству**, **исламу**, **буддизму**, **иудаизму** и другим религиям, составляющим неотъемлемую часть исторического наследия народов России. Преамбула — не установление государственной религии: сама статья 14 стоит выше.":
    "Ustawa **o wolności sumienia i o związkach wyznaniowych z 1997 roku** w preambule uznaje szczególną rolę **prawosławia** w historii kraju i wyraża szacunek dla **chrześcijaństwa**, **islamu**, **buddyzmu**, **judaizmu** i innych religii stanowiących nieodłączną część dziedzictwa historycznego narodów Rosji. Preambuła nie ustanawia religii państwowej: sam artykuł 14 stoi wyżej.",
  "Православие": "Prawosławie",
  "Крупнейшая конфессия. Русская православная церковь ведёт счёт от крещения 988 года; патриаршество восстановлено в 1917 году.":
    "Największe wyznanie. Rosyjski Kościół Prawosławny liczy się od chrztu z 988 roku; patriarchat przywrócono w 1917.",
  "Ислам": "Islam",
  "Вторая по числу верующих. Распространён на Северном Кавказе, в Татарстане и Башкортостане; духовные управления действуют в нескольких центрах.":
    "Drugi pod względem liczby wiernych. Rozpowszechniony na Kaukazie Północnym, w Tatarstanie i Baszkortostanie; zarządy duchowne działają w kilku ośrodkach.",
  "Буддизм": "Buddyzm",
  "Традиционен в Калмыкии, Бурятии и Туве. Калмыкия — единственный буддийский регион в Европе.":
    "Tradycyjny w Kałmucji, Buriacji i Tuwie. Kałmucja to jedyny buddyjski region w Europie.",
  "Иудаизм": "Judaizm",
  "Общины в крупных городах; Еврейская автономная область на Дальнем Востоке носит имя по истории своего образования.":
    "Gminy w dużych miastach; Żydowski Obwód Autonomiczny na Dalekim Wschodzie nosi swoją nazwę od historii swojego powstania.",
  "В календаре это видно так: **7 января**, Рождество Христово, — нерабочий праздничный день по всей стране. **Ураза-байрам** и **Курбан-байрам** объявлены выходными законами отдельных республик, **Пасха** передвижная и выходным днём не считается, но приходится на воскресенье.":
    "W kalendarzu widać to tak: **7 stycznia**, Boże Narodzenie, jest wolnym dniem świątecznym w całym kraju. **Uraza-bajram** i **Kurban-bajram** ogłoszono dniami wolnymi ustawami poszczególnych republik, **Wielkanoc** jest ruchoma i za dzień wolny się jej nie uważa, ale wypada w niedzielę.",
  "Какое место занимает преамбула закона 1997 года рядом со статьёй 14?":
    "Jakie miejsce zajmuje preambuła ustawy z 1997 roku obok artykułu 14?",
  "Она устанавливает православие государственной религией":
    "Ustanawia prawosławie religią państwową",
  "Она описывает историческую роль религий, а норму задаёт статья 14":
    "Opisuje historyczną rolę religii, a normę wyznacza artykuł 14",
  "Она отменяет действие статьи 14 для четырёх религий":
    "Uchyla działanie artykułu 14 wobec czterech religii",
  "Она даёт перечисленным религиям право на бюджетные средства":
    "Daje wymienionym religiom prawo do środków budżetowych",
  "Преамбула говорит об истории и уважении, а не об установлении. Статья 14 стоит выше и запрещает государственную или обязательную религию.":
    "Preambuła mówi o historii i o szacunku, a nie o ustanowieniu. Artykuł 14 stoi wyżej i zakazuje religii państwowej albo obowiązkowej.",
  "Преамбула закона 1997 года иногда цитируется как доказательство того, что православие — государственная религия. Это не так: преамбула описывает историю, а норму устанавливает статья 14 Конституции, и она говорит обратное.":
    "Preambułę ustawy z 1997 roku cytuje się czasem jako dowód, że prawosławie jest religią państwową. Tak nie jest: preambuła opisuje historię, a normę ustanawia artykuł 14 Konstytucji, i mówi on coś odwrotnego.",
  "Литература и искусство": "Literatura i sztuka",
  "Почему это важно: имена из этого урока встречаются на карте страны чаще любых других — площади, улицы, станции метро, театры и музеи названы в основном ими. Не узнав их, трудно понять, чем город гордится.":
    "Dlaczego to ważne: nazwiska z tej lekcji spotyka się na mapie kraju częściej niż jakiekolwiek inne — place, ulice, stacje metra, teatry i muzea nazwano głównie nimi. Nie poznawszy ich, trudno zrozumieć, z czego miasto jest dumne.",
  "Пушкин и золотой век": "Puszkin i złoty wiek",
  "**Александр Пушкин** (1799–1837) считается создателем современного русского литературного языка: до него книжный и разговорный язык расходились гораздо сильнее. Его роман в стихах **«Евгений Онегин»**, поэма «Медный всадник» и сказки читаются в школе целиком.":
    "**Aleksandr Puszkin** (1799–1837) uchodzi za twórcę współczesnego rosyjskiego języka literackiego: przed nim język książkowy i mówiony rozchodziły się o wiele mocniej. Jego powieść wierszem **„Eugeniusz Oniegin”**, poemat „Jeździec miedziany” i baśnie czyta się w szkole w całości.",
  "**6 июня**, в день его рождения, отмечается Пушкинский день России; с 2011 года это же число — **День русского языка**. ООН включила эту дату в собственный календарь языков.":
    "**6 czerwca**, w dzień jego urodzin, obchodzi się Dzień Puszkina w Rosji; od 2011 roku ta sama data to **Dzień Języka Rosyjskiego**. ONZ włączyła ją do własnego kalendarza języków.",
  "Дальше идут **Михаил Лермонтов** («Герой нашего времени»), **Николай Гоголь** («Ревизор», «Мёртвые души»), **Иван Тургенев** («Отцы и дети»). Их называют золотым веком русской литературы, и укладывается он в одно столетие.":
    "Dalej idą **Michaił Lermontow** („Bohater naszych czasów”), **Nikołaj Gogol** („Rewizor”, „Martwe dusze”), **Iwan Turgieniew** („Ojcowie i dzieci”). Nazywa się ich złotym wiekiem literatury rosyjskiej, a mieści się on w jednym stuleciu.",
  "Большой роман": "Wielka powieść",
  "**Лев Толстой** (1828–1910) — «Война и мир» и «Анна Каренина»; его усадьба **Ясная Поляна** сохранена как музей. **Фёдор Достоевский** (1821–1881) — «Преступление и наказание», «Идиот», «Братья Карамазовы»; его переводят и ставят на сцене, вероятно, чаще всех русских авторов.":
    "**Lew Tołstoj** (1828–1910) — „Wojna i pokój” oraz „Anna Karenina”; jego dwór **Jasna Polana** zachowano jako muzeum. **Fiodor Dostojewski** (1821–1881) — „Zbrodnia i kara”, „Idiota”, „Bracia Karamazow”; tłumaczy się go i wystawia zapewne częściej niż któregokolwiek rosyjskiego autora.",
  "**Антон Чехов** (1860–1904) писал короткие рассказы и четыре пьесы, на которых держится мировой репертуар: «Чайка», «Дядя Ваня», «Три сестры», «Вишнёвый сад». Чайка со шторы Художественного театра — эмблема именно отсюда.":
    "**Anton Czechow** (1860–1904) pisał krótkie opowiadania i cztery sztuki, na których trzyma się światowy repertuar: „Mewa”, „Wujaszek Wania”, „Trzy siostry”, „Wiśniowy sad”. Mewa z kurtyny Teatru Artystycznego pochodzi właśnie stąd.",
  "Серебряный век и премии": "Srebrny wiek i nagrody",
  "Начало XX века дало **Александра Блока**, **Анну Ахматову**, **Марину Цветаеву**, **Осипа Мандельштама**, **Бориса Пастернака**, **Владимира Маяковского**, **Сергея Есенина**. Судьбы этого поколения тяжелы: часть погибла в лагерях, часть уехала, часть замолчала на десятилетия.":
    "Początek XX wieku dał **Aleksandra Błoka**, **Annę Achmatową**, **Marinę Cwietajewą**, **Osipa Mandelsztama**, **Borysa Pasternaka**, **Włodzimierza Majakowskiego**, **Siergieja Jesienina**. Losy tego pokolenia są ciężkie: część zginęła w łagrach, część wyjechała, część zamilkła na dziesięciolecia.",
  "Нобелевскую премию по литературе получили пятеро: **Иван Бунин** (1933, первым — уже в эмиграции), **Борис Пастернак** (1958, вынужден был отказаться под давлением), **Михаил Шолохов** (1965), **Александр Солженицын** (1970), **Иосиф Бродский** (1987).":
    "Nagrodę Nobla w dziedzinie literatury dostało pięcioro: **Iwan Bunin** (1933, jako pierwszy — już na emigracji), **Borys Pasternak** (1958, musiał jej odmówić pod naciskiem), **Michaił Szołochow** (1965), **Aleksander Sołżenicyn** (1970), **Josif Brodski** (1987).",
  "Кто первым из русских писателей получил Нобелевскую премию по литературе?":
    "Który z rosyjskich pisarzy pierwszy dostał Nagrodę Nobla w dziedzinie literatury?",
  "Лев Толстой": "Lew Tołstoj",
  "Иван Бунин": "Iwan Bunin",
  "Михаил Шолохов": "Michaił Szołochow",
  "Борис Пастернак": "Borys Pasternak",
  "Бунин получил её в 1933 году, живя уже в эмиграции. Толстой номинировался, но премии так и не получил.":
    "Bunin dostał ją w 1933 roku, żyjąc już na emigracji. Tołstoja nominowano, ale nagrody tak i nie dostał.",
  "Музыка": "Muzyka",
  "**Михаил Глинка** считается первым русским композитором мирового масштаба; с его опер начинается национальная традиция. Во второй половине XIX века складывается **«Могучая кучка»** — содружество композиторов, куда входили **Балакирев**, **Мусоргский**, **Бородин**, **Римский-Корсаков** и **Кюи**.":
    "**Michaił Glinka** uchodzi za pierwszego rosyjskiego kompozytora światowej miary; od jego oper zaczyna się tradycja narodowa. W drugiej połowie XIX wieku powstaje **„Potężna Gromadka”** — zrzeszenie kompozytorów, do którego należeli **Bałakiriew**, **Musorgski**, **Borodin**, **Rimski-Korsakow** i **Cui**.",
  "**Пётр Чайковский** (1840–1893) написал три балета, на которых стоит мировой балетный репертуар: «Лебединое озеро», «Спящая красавица», «Щелкунчик». Дальше — **Сергей Рахманинов**, **Игорь Стравинский**, **Сергей Прокофьев**, **Дмитрий Шостакович**.":
    "**Piotr Czajkowski** (1840–1893) napisał trzy balety, na których stoi światowy repertuar baletowy: „Jezioro łabędzie”, „Śpiąca królewna”, „Dziadek do orzechów”. Dalej — **Siergiej Rachmaninow**, **Igor Strawiński**, **Siergiej Prokofiew**, **Dmitrij Szostakowicz**.",
  "**Седьмая симфония** Шостаковича, названная Ленинградской, была впервые исполнена в осаждённом городе **9 августа 1942 года** — оркестром, который собрали из оставшихся в живых музыкантов.":
    "**Siódmą symfonię** Szostakowicza, nazwaną Leningradzką, wykonano po raz pierwszy w oblężonym mieście **9 sierpnia 1942 roku** — przez orkiestrę zebraną z muzyków, którzy przeżyli.",
  "Что такое «Могучая кучка»?": "Czym była „Potężna Gromadka”?",
  "Литературный кружок начала XX века": "Kółkiem literackim początku XX wieku",
  "Содружество русских композиторов XIX века": "Zrzeszeniem rosyjskich kompozytorów XIX wieku",
  "Объединение художников-передвижников": "Zrzeszeniem malarzy pieriedwiżników",
  "Театральная труппа Станиславского": "Trupą teatralną Stanisławskiego",
  "Балакирев, Мусоргский, Бородин, Римский-Корсаков и Кюи. Они добивались национального звучания в опере и симфонии.":
    "Bałakiriew, Musorgski, Borodin, Rimski-Korsakow i Cui. Dążyli do narodowego brzmienia w operze i symfonii.",
  "Театр и балет": "Teatr i balet",
  "**Большой театр** в Москве ведёт счёт с **1776 года**, **Мариинский** в Петербурге — с конца XVIII века. Русский балет стал мировым эталоном после **«Русских сезонов»** Сергея Дягилева, которые с **1909 года** показывали в Париже танцовщиков и декорации, каких там не видели.":
    "**Teatr Bolszoj** w Moskwie liczy się od **1776 roku**, **Maryjski** w Petersburgu — od końca XVIII wieku. Balet rosyjski stał się światowym wzorcem po **„Sezonach Rosyjskich”** Siergieja Diagilewa, które od **1909 roku** pokazywały w Paryżu tancerzy i dekoracje, jakich tam nie widziano.",
  "**Константин Станиславский** и **Владимир Немирович-Данченко** основали в **1898 году** Московский Художественный театр. Их метод работы с актёром — **система Станиславского** — преподаётся в театральных школах по всему миру.":
    "**Konstantin Stanisławski** i **Władimir Niemirowicz-Danczenko** założyli w **1898 roku** Moskiewski Teatr Artystyczny. Ich metoda pracy z aktorem — **system Stanisławskiego** — jest wykładana w szkołach teatralnych na całym świecie.",
  "Живопись и икона": "Malarstwo i ikona",
  "**Третьяковская галерея** в Москве выросла из частного собрания купца Павла Третьякова и открыта для публики с XIX века; **Русский музей** в Петербурге основан в 1895 году. В 1870 году художники объединились в товарищество **передвижников**, чтобы возить выставки по городам, а не показывать их только в столицах.":
    "**Galeria Trietiakowska** w Moskwie wyrosła z prywatnego zbioru kupca Pawła Trietiakowa i jest otwarta dla publiczności od XIX wieku; **Muzeum Rosyjskie** w Petersburgu założono w 1895 roku. W 1870 roku malarze połączyli się w towarzystwo **pieriedwiżników**, żeby wozić wystawy po miastach, a nie pokazywać ich tylko w stolicach.",
  "Илья Репин": "Ilja Riepin",
  "«Бурлаки на Волге», «Запорожцы». Портретист и главный живописец передвижников.":
    "„Burłacy na Wołdze”, „Kozacy zaporoscy”. Portrecista i główny malarz pieriedwiżników.",
  "Иван Шишкин и Исаак Левитан": "Iwan Szyszkin i Izaak Lewitan",
  "Лес и русская равнина. Пейзаж у передвижников был не фоном, а самостоятельным сюжетом.":
    "Las i rosyjska równina. Pejzaż nie był u pieriedwiżników tłem, lecz samodzielnym tematem.",
  "Иван Айвазовский": "Iwan Ajwazowski",
  "Море — почти шесть тысяч полотен. Работал в Феодосии и писал воду быстрее, чем большинство пишет эскизы.":
    "Morze — prawie sześć tysięcy płócien. Pracował w Teodozji i malował wodę szybciej, niż większość maluje szkice.",
  "Андрей Рублёв": "Andriej Rublow",
  "Иконописец начала XV века. Его «Троица» — самая известная русская икона; иконопись здесь древнее живописи на несколько веков.":
    "Ikonopisarz początku XV wieku. Jego „Trójca Święta” to najbardziej znana ikona rosyjska; ikonopisarstwo jest tu starsze od malarstwa o kilka stuleci.",
  "Кино добавилось в XX веке: **Сергей Эйзенштейн** и его «Броненосец „Потёмкин“» (1925) вошли в учебники монтажа, **Андрей Тарковский** — в число самых изучаемых режиссёров мира, а студия **«Мосфильм»** работает с 1924 года.":
    "W XX wieku doszedł film: **Siergiej Eisenstein** i jego „Pancernik Potiomkin” (1925) weszli do podręczników montażu, **Andriej Tarkowski** należy do najczęściej badanych reżyserów świata, a wytwórnia **Mosfilm** działa od 1924 roku.",
  "Кто написал «Троицу»?": "Kto namalował „Trójcę Świętą”?",
  "Василий Суриков": "Wasilij Surikow",
  "Икона начала XV века и самое известное произведение русской иконописи. Репин, Айвазовский и Суриков работали через четыреста с лишним лет после Рублёва.":
    "Ikona z początku XV wieku i najbardziej znane dzieło rosyjskiego ikonopisarstwa. Riepin, Ajwazowski i Surikow pracowali ponad czterysta lat po Rublowie.",
  "**Передвижники** — не стиль живописи, а объединение с уставом и выставочным маршрутом. Их объединяло желание показывать картины по всей стране, а писали они по-разному.":
    "**Pieriedwiżnicy** to nie styl malarski, lecz zrzeszenie ze statutem i trasą wystawienniczą. Łączyła ich chęć pokazywania obrazów w całym kraju, a malowali różnie.",
  "Наука и космос": "Nauka i kosmos",
  "Почему это важно: две даты из этого урока — 4 октября 1957 года и 12 апреля 1961 года — знают везде, и обе относятся к России. Праздник 12 апреля объясняется именно здесь.":
    "Dlaczego to ważne: dwie daty z tej lekcji — 4 października 1957 i 12 kwietnia 1961 roku — zna się wszędzie, a obie dotyczą Rosji. Święto 12 kwietnia tłumaczy się właśnie tutaj.",
  "С чего начиналась наука": "Od czego zaczęła się nauka",
  "**Академия наук** основана указом **Петра I в 1724 году** в Петербурге и открылась год спустя. Это одно из старейших научных учреждений Европы, и создавалось оно сразу как государственное.":
    "**Akademię Nauk** założono dekretem **Piotra I w 1724 roku** w Petersburgu, a otwarto rok później. To jedna z najstarszych instytucji naukowych Europy i tworzono ją od razu jako państwową.",
  "**Михаил Ломоносов** (1711–1765) — первый русский учёный мирового уровня: химик, физик, астроном, поэт и историк сразу. По его замыслу в **1755 году** основан **Московский университет**, который носит его имя.":
    "**Michaił Łomonosow** (1711–1765) był pierwszym rosyjskim uczonym światowego formatu: chemikiem, fizykiem, astronomem, poetą i historykiem naraz. Według jego zamysłu w **1755 roku** założono **Uniwersytet Moskiewski**, który nosi jego imię.",
  "**Дмитрий Менделеев** в **1869 году** сформулировал **периодический закон** и построил таблицу элементов, оставив в ней пустые клетки под ещё не открытые вещества. Когда их нашли, свойства совпали с предсказанными — это и сделало таблицу законом, а не удобным списком.":
    "**Dmitrij Mendelejew** w **1869 roku** sformułował **prawo okresowości** i zbudował tablicę pierwiastków, zostawiając w niej puste pola pod jeszcze nieodkryte substancje. Kiedy je znaleziono, właściwości zgodziły się z przewidzianymi — i to właśnie uczyniło z tablicy prawo, a nie wygodny spis.",
  "**Иван Павлов** получил **Нобелевскую премию в 1904 году** за работы о пищеварении — первым из россиян; **Илья Мечников** — в 1908 году за учение об иммунитете. Позже премии по физике получили **Ландау**, **Басов** и **Прохоров**, **Капица**, **Алфёров**, **Абрикосов** и **Гинзбург**.":
    "**Iwan Pawłow** dostał **Nagrodę Nobla w 1904 roku** za prace o trawieniu — jako pierwszy z Rosjan; **Ilja Miecznikow** w 1908 roku za naukę o odporności. Później nagrody z fizyki dostali **Landau**, **Basow** i **Prochorow**, **Kapica**, **Ałfiorow**, **Abrikosow** i **Ginzburg**.",
  "Спутник": "Sputnik",
  "**4 октября 1957 года** с полигона в казахской степи вышел на орбиту **первый искусственный спутник Земли**. Аппарат весил 83 килограмма и передавал повторяющийся сигнал, который ловили радиолюбители по всему миру. С этого дня отсчитывают космическую эру.":
    "**4 października 1957 roku** z poligonu w kazachskim stepie wyszedł na orbitę **pierwszy sztuczny satelita Ziemi**. Aparat ważył 83 kilogramy i nadawał powtarzający się sygnał, który łapali radioamatorzy na całym świecie. Od tego dnia liczy się erę kosmiczną.",
  "Через месяц на орбиту отправили собаку **Лайку** — первое живое существо в космосе; вернуть её не могли, техники возвращения ещё не было. В **1960 году** **Белка и Стрелка** слетали и вернулись живыми, и это открыло дорогу человеку.":
    "Miesiąc później na orbitę wysłano psa **Łajkę** — pierwsze żywe stworzenie w kosmosie; sprowadzić jej nie umiano, techniki powrotu jeszcze nie było. W **1960 roku** **Biełka i Striełka** poleciały i wróciły żywe, i to otworzyło drogę człowiekowi.",
  "Теоретическую основу заложил школьный учитель из Калуги **Константин Циолковский**, опубликовавший расчёт ракетного движения в 1903 году. Практику вёл **Сергей Королёв** — главный конструктор, чьё имя до его смерти в 1966 году держали в тайне.":
    "Podstawy teoretyczne położył nauczyciel szkolny z Kaługi, **Konstantin Ciołkowski**, który w 1903 roku ogłosił rachunek ruchu rakiety. Praktykę prowadził **Siergiej Korolow** — główny konstruktor, którego nazwisko do jego śmierci w 1966 roku trzymano w tajemnicy.",
  "Что произошло 4 октября 1957 года?": "Co wydarzyło się 4 października 1957 roku?",
  "Первый полёт человека в космос": "Pierwszy lot człowieka w kosmos",
  "Запуск первого искусственного спутника Земли":
    "Wystrzelenie pierwszego sztucznego satelity Ziemi",
  "Первый выход в открытый космос": "Pierwsze wyjście w otwarty kosmos",
  "Запуск первой орбитальной станции": "Wystrzelenie pierwszej stacji orbitalnej",
  "Аппарат весом 83 килограмма передавал сигнал, который слушал весь мир. С этой даты отсчитывают космическую эру.":
    "Aparat o wadze 83 kilogramów nadawał sygnał, którego słuchał cały świat. Od tej daty liczy się erę kosmiczną.",
  "Гагарин": "Gagarin",
  "**12 апреля 1961 года** **Юрий Гагарин** на корабле **«Восток-1»** сделал **один виток** вокруг Земли и приземлился под Саратовом. Полёт длился **108 минут**. Ему было 27 лет.":
    "**12 kwietnia 1961 roku** **Jurij Gagarin** na statku **„Wostok-1”** wykonał **jedno okrążenie** Ziemi i wylądował pod Saratowem. Lot trwał **108 minut**. Miał 27 lat.",
  "**12 апреля** — **День космонавтики**, государственный праздник; Генеральная Ассамблея ООН в 2011 году объявила эту дату Международным днём полёта человека в космос.":
    "**12 kwietnia** to **Dzień Kosmonautyki**, święto państwowe; Zgromadzenie Ogólne ONZ w 2011 roku ogłosiło tę datę Międzynarodowym Dniem Lotu Człowieka w Kosmos.",
  "Дальше сроки сжаты: **1963** — **Валентина Терешкова**, первая женщина в космосе; **1965** — **Алексей Леонов**, первый выход в открытый космос; **1970** — **«Луноход-1»**, первый самоходный аппарат на другом небесном теле; **1971** — **«Салют-1»**, первая орбитальная станция.":
    "Dalej terminy są ściśnięte: **1963** — **Walentina Tierieszkowa**, pierwsza kobieta w kosmosie; **1965** — **Aleksiej Leonow**, pierwsze wyjście w otwarty kosmos; **1970** — **„Łunochod-1”**, pierwszy pojazd samobieżny na innym ciele niebieskim; **1971** — **„Salut-1”**, pierwsza stacja orbitalna.",
  "Сколько продолжался полёт Юрия Гагарина?": "Ile trwał lot Jurija Gagarina?",
  "Около суток": "Około doby",
  "108 минут, один виток вокруг Земли": "108 minut, jedno okrążenie Ziemi",
  "Двенадцать часов": "Dwanaście godzin",
  "Трое суток": "Trzy doby",
  "Корабль «Восток-1», старт 12 апреля 1961 года, посадка под Саратовом. Эта дата стала Днём космонавтики.":
    "Statek „Wostok-1”, start 12 kwietnia 1961 roku, lądowanie pod Saratowem. Ta data stała się Dniem Kosmonautyki.",
  "Космос сегодня": "Kosmos dzisiaj",
  "Станция **«Мир»** работала на орбите с **1986 по 2001 год** — пятнадцать лет вместо расчётных пяти. С **1998 года** Россия участвует в **Международной космической станции**: первый её модуль был запущен именно отсюда, и российский сегмент обслуживает станцию до сих пор.":
    "Stacja **„Mir”** pracowała na orbicie od **1986 do 2001 roku** — piętnaście lat zamiast planowanych pięciu. Od **1998 roku** Rosja uczestniczy w **Międzynarodowej Stacji Kosmicznej**: pierwszy jej moduł wystrzelono właśnie stąd, a segment rosyjski obsługuje stację do dziś.",
  "Байконур": "Bajkonur",
  "Старейший космодром мира, откуда стартовали спутник и Гагарин. Находится в Казахстане и арендуется Россией.":
    "Najstarszy kosmodrom świata, skąd startowały sputnik i Gagarin. Leży w Kazachstanie i Rosja go dzierżawi.",
  "Плесецк": "Plesieck",
  "Архангельская область. Самый северный действующий космодром; отсюда идут в основном военные и научные запуски.":
    "Obwód archangielski. Najbardziej na północ wysunięty czynny kosmodrom; stąd idą głównie starty wojskowe i naukowe.",
  "Восточный": "Wostocznyj",
  "Амурская область, первый пуск в 2016 году. Строился, чтобы тяжёлые запуски шли с собственной территории.":
    "Obwód amurski, pierwszy start w 2016 roku. Budowano go po to, żeby ciężkie starty szły z własnego terytorium.",
  "Звёздный городок": "Gwiezdne Miasteczko",
  "Подмосковье. Центр подготовки космонавтов; сюда приезжают тренироваться экипажи и других стран.":
    "Podmoskwie. Centrum przygotowania kosmonautów; przyjeżdżają tu trenować również załogi z innych krajów.",
  "Атом": "Atom",
  "Атомным проектом руководил **Игорь Курчатов**. В **1954 году** в **Обнинске** заработала **первая в мире атомная электростанция**, дававшая ток в общую сеть; в **1959 году** вышел в море **атомный ледокол «Ленин»**.":
    "Projektem atomowym kierował **Igor Kurczatow**. W **1954 roku** w **Obnińsku** ruszyła **pierwsza na świecie elektrownia jądrowa**, która oddawała prąd do wspólnej sieci; w **1959 roku** wyszedł w morze **atomowy lodołamacz „Lenin”**.",
  "Атомный ледокольный флот у России единственный в мире — без него **Северный морской путь** не работал бы круглый год. Обратная сторона той же истории — **чернобыльская авария 1986 года**, после которой требования к безопасности реакторов пересматривались во всём мире.":
    "Atomowa flota lodołamaczy jest u Rosji jedyna na świecie — bez niej **Północna Droga Morska** nie działałaby przez cały rok. Odwrotną stroną tej samej historii jest **awaria w Czarnobylu w 1986 roku**, po której wymagania wobec bezpieczeństwa reaktorów rewidowano na całym świecie.",
  "Где в 1954 году заработала первая в мире атомная электростанция?":
    "Gdzie w 1954 roku ruszyła pierwsza na świecie elektrownia jądrowa?",
  "В Обнинске": "W Obnińsku",
  "В Дубне": "W Dubnej",
  "В Сарове": "W Sarowie",
  "В Северодвинске": "W Siewierodwińsku",
  "Станция была небольшой, но давала ток в общую сеть — этим и отличалась от опытных реакторов. Через пять лет вышел атомный ледокол «Ленин».":
    "Elektrownia była niewielka, ale oddawała prąd do wspólnej sieci — i tym różniła się od reaktorów doświadczalnych. Pięć lat później wyszedł atomowy lodołamacz „Lenin”.",
  "**Байконур** находится не в России. Космодром остался в Казахстане после распада СССР и работает по договору аренды — поэтому и строился Восточный.":
    "**Bajkonur** nie leży w Rosji. Kosmodrom został w Kazachstanie po rozpadzie ZSRR i działa na podstawie umowy dzierżawy — i dlatego zbudowano Wostocznyj.",
  "Работа и деньги": "Praca i pieniądze",
  "Общество и повседневная жизнь": "Społeczeństwo i życie codzienne",
  "Почему это важно: почти всё, что человек знает о новой стране в первый год, он узнаёт через работу и оплату счетов. Правила здесь записаны в одном кодексе, и они одинаковы для гражданина и для иностранца с разрешением на работу.":
    "Dlaczego to ważne: prawie wszystko, czego człowiek dowiaduje się o nowym kraju w pierwszym roku, poznaje przez pracę i płacenie rachunków. Reguły są tu zapisane w jednym kodeksie i są jednakowe dla obywatela i dla cudzoziemca z zezwoleniem na pracę.",
  "Трудовой договор": "Umowa o pracę",
  "Отношения работника и работодателя описывает **Трудовой кодекс**, действующий с **2002 года**. Договор заключается **письменно, в двух экземплярах** — один остаётся у работника. Если человека фактически допустили к работе, договор считается заключённым, даже когда бумагу подписать забыли.":
    "Stosunki pracownika i pracodawcy opisuje **Kodeks pracy** obowiązujący od **2002 roku**. Umowę zawiera się **na piśmie, w dwóch egzemplarzach** — jeden zostaje u pracownika. Jeśli człowieka faktycznie dopuszczono do pracy, umowę uważa się za zawartą, nawet gdy papieru zapomniano podpisać.",
  "**Испытательный срок** — не более **трёх месяцев**; для руководителей организаций, их заместителей и главных бухгалтеров он может доходить до шести. На испытании действуют те же правила, что и потом: та же оплата, тот же отпуск, те же взносы.":
    "**Okres próbny** to nie więcej niż **trzy miesiące**; dla kierowników organizacji, ich zastępców i głównych księgowych może sięgać sześciu. Na okresie próbnym obowiązują te same reguły co potem: to samo wynagrodzenie, ten sam urlop, te same składki.",
  "**Трудовая книжка** с **2020 года** ведётся в электронном виде. Тем, кто устраивается на работу впервые, бумажную уже не заводят; сведения о стаже хранятся в Социальном фонде и запрашиваются через портал.":
    "**Książeczka pracy** od **2020 roku** prowadzona jest w postaci elektronicznej. Tym, którzy podejmują pracę po raz pierwszy, papierowej już się nie zakłada; dane o stażu przechowuje Fundusz Socjalny i pobiera się je przez portal.",
  "Время и отпуск": "Czas i urlop",
  "Нормальная рабочая неделя — **не более 40 часов**. Ежегодный оплачиваемый отпуск — **28 календарных дней**; у некоторых профессий и у работающих на Севере он длиннее. Заработная плата выплачивается **не реже чем каждые полмесяца**, то есть аванс здесь не любезность работодателя, а требование закона.":
    "Normalny tydzień pracy to **nie więcej niż 40 godzin**. Coroczny płatny urlop to **28 dni kalendarzowych**; w niektórych zawodach i u pracujących na Północy jest dłuższy. Wynagrodzenie wypłaca się **nie rzadziej niż co pół miesiąca**, czyli zaliczka nie jest tu uprzejmością pracodawcy, lecz wymogiem ustawy.",
  "Ниже **МРОТ** — минимального размера оплаты труда, который устанавливается федеральным законом, — платить нельзя. В регионах может действовать своё, более высокое соглашение.":
    "Poniżej **MROT** — minimalnego wynagrodzenia za pracę ustalanego ustawą federalną — płacić nie wolno. W regionach może obowiązywać własne, wyższe porozumienie.",
  "Сколько дней составляет ежегодный оплачиваемый отпуск по общему правилу?":
    "Ile dni wynosi coroczny płatny urlop według zasady ogólnej?",
  "28 календарных дней": "28 dni kalendarzowych",
  "20 рабочих дней": "20 dni roboczych",
  "14 календарных дней": "14 dni kalendarzowych",
  "Столько, сколько записано в договоре": "Tyle, ile zapisano w umowie",
  "Меньше — нельзя, больше — можно. У работающих на Севере и у ряда профессий отпуск длиннее.":
    "Mniej nie wolno, więcej można. U pracujących na Północy i w szeregu zawodów urlop jest dłuższy.",
  "Налоги и взносы": "Podatki i składki",
  "С заработка удерживается **налог на доходы физических лиц**. С **2025 года** он считается по **пятиступенчатой шкале**: базовая ставка **13 %**, а с дохода свыше 2,4 миллиона рублей в год ставка растёт до 15, 18, 20 и 22 процентов на верхних ступенях. Повышенная ставка применяется не ко всему доходу, а только к той части, которая перешла порог.":
    "Z zarobku potrąca się **podatek od dochodów osób fizycznych**. Od **2025 roku** liczy się go według **pięciostopniowej skali**: stawka podstawowa **13 %**, a od dochodu powyżej 2,4 miliona rubli rocznie stawka rośnie do 15, 18, 20 i 22 procent na wyższych stopniach. Stawkę podwyższoną stosuje się nie do całego dochodu, lecz tylko do tej części, która przekroczyła próg.",
  "**Страховые взносы** — на пенсию, медицину и социальное страхование — платит **работодатель**, сверх зарплаты и из своих средств. Работник их не перечисляет и в расчётном листке видит только НДФЛ.":
    "**Składki ubezpieczeniowe** — na emeryturę, medycynę i ubezpieczenie społeczne — płaci **pracodawca**, ponad wynagrodzenie i ze swoich środków. Pracownik ich nie odprowadza i na pasku płacowym widzi tylko podatek dochodowy.",
  "Кто перечисляет страховые взносы за работника?":
    "Kto odprowadza składki ubezpieczeniowe za pracownika?",
  "Работник из своей зарплаты": "Pracownik ze swojego wynagrodzenia",
  "Работодатель, сверх зарплаты и из своих средств":
    "Pracodawca, ponad wynagrodzenie i ze swoich środków",
  "Работник и работодатель поровну": "Pracownik i pracodawca po połowie",
  "Региональный бюджет": "Budżet regionalny",
  "В расчётном листке работник видит удержание НДФЛ, но не взносы: они лежат на работодателе.":
    "Na pasku płacowym pracownik widzi potrącenie podatku dochodowego, ale nie składki: te leżą po stronie pracodawcy.",
  "Номера, без которых не обойтись": "Numery, bez których się nie obejdzie",
  "СНИЛС": "SNILS",
  "Номер индивидуального лицевого счёта в системе пенсионного страхования. На нём копится стаж, и он нужен почти для любой государственной услуги.":
    "Numer indywidualnego konta w systemie ubezpieczenia emerytalnego. Na nim gromadzi się staż i potrzebny jest niemal do każdej usługi państwowej.",
  "ИНН": "INN",
  "Идентификационный номер налогоплательщика. Присваивается один раз на всю жизнь и не меняется при переезде или смене фамилии.":
    "Numer identyfikacji podatkowej. Nadaje się go raz na całe życie i nie zmienia się przy przeprowadzce ani zmianie nazwiska.",
  "Полис ОМС": "Polisa OMS",
  "Обязательное медицинское страхование. Оформляется страховой организацией и действует по всей стране, а не только там, где выдан.":
    "Obowiązkowe ubezpieczenie zdrowotne. Wystawia ją towarzystwo ubezpieczeniowe i działa w całym kraju, a nie tylko tam, gdzie ją wydano.",
  "Госуслуги": "Gosusługi",
  "Портал, через который заказывают справки, записываются к врачу и подают заявления. Подтверждённая учётная запись заменяет очередь.":
    "Portal, przez który zamawia się zaświadczenia, zapisuje do lekarza i składa wnioski. Potwierdzone konto zastępuje kolejkę.",
  "Пенсия и самозанятость": "Emerytura i samozatrudnienie",
  "После реформы **2018 года** пенсионный возраст поднимается постепенно и к **2028 году** составит **65 лет** для мужчин и **60 лет** для женщин. Кроме возраста нужны стаж и пенсионные коэффициенты; у отдельных профессий и у северян сохраняется досрочный выход.":
    "Po reformie z **2018 roku** wiek emerytalny podnosi się stopniowo i do **2028 roku** wyniesie **65 lat** dla mężczyzn i **60 lat** dla kobiet. Poza wiekiem potrzebne są staż i współczynniki emerytalne; w niektórych zawodach i u mieszkańców Północy pozostaje wcześniejsze przejście.",
  "Для тех, кто работает на себя, с **2019 года** существует **налог на профессиональный доход**: **4 %** с поступлений от частных лиц и **6 %** от организаций, без отчётности и без кассы, пока доход не превышает 2,4 миллиона рублей в год. Регистрация занимает несколько минут в приложении, и именно поэтому «самозанятых» в стране миллионы.":
    "Dla pracujących na siebie od **2019 roku** istnieje **podatek od dochodu zawodowego**: **4 %** od wpływów od osób prywatnych i **6 %** od organizacji, bez sprawozdawczości i bez kasy, dopóki dochód nie przekracza 2,4 miliona rubli rocznie. Rejestracja zajmuje kilka minut w aplikacji, i właśnie dlatego „samozatrudnionych” są w kraju miliony.",
  "Деньги": "Pieniądze",
  "Валюта — **рубль**, в нём **100 копеек**; графический знак ₽ утверждён в **2013 году**. Выпуск денег ведёт **Центральный банк**, и защита устойчивости рубля названа его основной функцией прямо в Конституции.":
    "Walutą jest **rubel**, a w nim **100 kopiejek**; znak graficzny ₽ zatwierdzono w **2013 roku**. Emisję pieniądza prowadzi **Bank Centralny**, a ochrona stabilności rubla jest nazwana jego podstawową funkcją wprost w Konstytucji.",
  "Безналичная оплата распространена очень широко — карточкой платят и в маленьком магазине, и на рынке. Национальная платёжная система носит имя **«Мир»**; пенсии и бюджетные выплаты зачисляются именно на такие карты.":
    "Płatność bezgotówkowa jest bardzo rozpowszechniona — kartą płaci się i w małym sklepie, i na targu. Krajowy system płatniczy nosi nazwę **„Mir”**; emerytury i wypłaty budżetowe wpływają właśnie na takie karty.",
  "Что изменилось в налоге на доходы с 2025 года?":
    "Co zmieniło się w podatku dochodowym od 2025 roku?",
  "Налог отменили для низких доходов": "Zniesiono podatek dla niskich dochodów",
  "Единую ставку заменила пятиступенчатая шкала":
    "Jednolitą stawkę zastąpiła pięciostopniowa skala",
  "Ставку подняли до 22 % для всех": "Stawkę podniesiono do 22 % dla wszystkich",
  "Налог стал платить работодатель": "Podatek zaczął płacić pracodawca",
  "Базовая ставка осталась 13 %. Повышенные ставки применяются только к той части дохода, которая перешла соответствующий порог.":
    "Stawka podstawowa została na poziomie 13 %. Stawki podwyższone stosuje się tylko do tej części dochodu, która przekroczyła odpowiedni próg.",
  "Устная договорённость об оплате «в конверте» не защищает работника ничем: без договора и взносов не идёт стаж, не считается пенсия и не оплачивается больничный. Требование письменного договора — не формальность.":
    "Ustne porozumienie o wypłacie „w kopercie” nie chroni pracownika niczym: bez umowy i składek nie biegnie staż, nie liczy się emerytura i nie płaci się za zwolnienie lekarskie. Wymóg umowy na piśmie to nie formalność.",
  "Здоровье и образование": "Zdrowie i oświata",
  "Почему это важно: две системы, с которыми сталкивается каждая семья. Обе бесплатны в своей основной части, но обе работают по правилам прикрепления и сроков, которых со стороны не видно.":
    "Dlaczego to ważne: dwa systemy, z którymi styka się każda rodzina. Oba są bezpłatne w swojej podstawowej części, ale oba działają według reguł przypisania i terminów, których z zewnątrz nie widać.",
  "Как устроена медицина": "Jak urządzona jest medycyna",
  "Основа — **обязательное медицинское страхование**. Полис ОМС оформляет страховая медицинская организация, а взносы за работающих платит работодатель, за детей, пенсионеров и безработных — регион. С полисом помощь в государственной поликлинике и больнице бесплатна.":
    "Podstawą jest **obowiązkowe ubezpieczenie zdrowotne**. Polisę OMS wystawia medyczna organizacja ubezpieczeniowa, a składki za pracujących płaci pracodawca, za dzieci, emerytów i bezrobotnych — region. Z polisą pomoc w państwowej przychodni i szpitalu jest bezpłatna.",
  "Объём того, что входит в бесплатную помощь, определяет **программа государственных гарантий**, которую Правительство утверждает **каждый год**. Всё, что за её пределами, оказывается платно или по добровольному страхованию.":
    "Zakres tego, co wchodzi w pomoc bezpłatną, określa **program gwarancji państwowych**, który rząd zatwierdza **co roku**. Wszystko poza nim jest odpłatne albo idzie z ubezpieczenia dobrowolnego.",
  "Человек **прикрепляется к поликлинике** — обычно по месту жительства, но выбрать другую можно, не чаще одного раза в год. Врача внутри поликлиники тоже можно выбрать, с согласия самого врача.":
    "Człowiek **przypisuje się do przychodni** — zwykle według miejsca zamieszkania, ale można wybrać inną, nie częściej niż raz w roku. Lekarza wewnątrz przychodni też można wybrać, za zgodą samego lekarza.",
  "Когда срочно": "Kiedy pilnie",
  "**Скорая помощь** вызывается по номеру **103**; единый номер экстренных служб — **112**, он работает даже без денег на счету и без сим-карты. При состояниях, угрожающих жизни, помощь оказывается **бесплатно и немедленно, без полиса и без документов** — отказ в таком случае незаконен.":
    "**Pogotowie** wzywa się pod numerem **103**; jednolity numer służb ratunkowych to **112** i działa nawet bez pieniędzy na koncie i bez karty SIM. Przy stanach zagrażających życiu pomocy udziela się **bezpłatnie i natychmiast, bez polisy i bez dokumentów** — odmowa w takim przypadku jest bezprawna.",
  "Нужен ли полис, чтобы получить экстренную помощь?":
    "Czy potrzebna jest polisa, żeby dostać pomoc w nagłym wypadku?",
  "Да, иначе помощь будет платной": "Tak, inaczej pomoc będzie odpłatna",
  "Нет: при угрозе жизни помощь оказывают без полиса и документов":
    "Nie: przy zagrożeniu życia pomocy udziela się bez polisy i dokumentów",
  "Да, но его можно предъявить позже в течение суток":
    "Tak, ale można ją okazać później, w ciągu doby",
  "Нужен полис добровольного страхования": "Potrzebna jest polisa ubezpieczenia dobrowolnego",
  "Скорая помощь вызывается по номеру 103, единый экстренный номер — 112. Отказать в неотложной помощи из-за отсутствия документов нельзя.":
    "Pogotowie wzywa się pod numerem 103, jednolity numer ratunkowy to 112. Odmówić pomocy w nagłym wypadku z powodu braku dokumentów nie wolno.",
  "Отдельно стоит **диспансеризация** — бесплатное профилактическое обследование по полису ОМС: до сорока лет раз в три года, после сорока — ежегодно. На неё дают оплачиваемый выходной день.":
    "Osobno stoi **badanie profilaktyczne** — bezpłatny przegląd zdrowia w ramach polisy OMS: do czterdziestego roku życia raz na trzy lata, po czterdziestce co roku. Na nie przysługuje płatny dzień wolny.",
  "Школа": "Szkoła",
  "Школьное обучение занимает **одиннадцать классов**: четыре года начальной школы, пять лет основной и два года старшей. Обязательным Конституция называет **основное общее образование** — то есть девять классов; дальше человек выбирает старшую школу или колледж.":
    "Nauka szkolna zajmuje **jedenaście klas**: cztery lata szkoły początkowej, pięć lat podstawowej i dwa lata starszej. Za obowiązkowe Konstytucja uznaje **podstawowe wykształcenie ogólne** — czyli dziewięć klas; dalej człowiek wybiera szkołę starszą albo kolegium.",
  "Учебный год начинается **1 сентября**, и это государственный праздник — **День знаний**. Оценки ставятся по **пятибалльной** шкале, где **5** — высшая, а **2** — неудовлетворительно; единицу на практике почти не ставят.":
    "Rok szkolny zaczyna się **1 września** i jest to święto państwowe — **Dzień Wiedzy**. Oceny stawia się w skali **pięciostopniowej**, gdzie **5** jest najwyższą, a **2** oznacza niedostateczny; jedynki w praktyce prawie się nie stawia.",
  "Приём в школу идёт по территориальному принципу: за каждой школой закреплён свой участок, и живущим на нём место гарантировано. Оставшиеся места распределяются между всеми остальными.":
    "Przyjęcie do szkoły idzie według zasady terytorialnej: do każdej szkoły przypisany jest własny obwód, a mieszkającym w nim miejsce jest zagwarantowane. Pozostałe miejsca rozdziela się między wszystkich innych.",
  "Экзамены": "Egzaminy",
  "После **девятого** класса сдают **ОГЭ** — основной государственный экзамен. После **одиннадцатого** — **ЕГЭ**, единый государственный экзамен, который с **2009 года** служит одновременно выпускным и вступительным.":
    "Po **dziewiątej** klasie zdaje się **OGE** — podstawowy egzamin państwowy. Po **jedenastej** — **EGE**, jednolity egzamin państwowy, który od **2009 roku** służy jednocześnie za końcowy i wstępny.",
  "Обязательны русский язык и математика; остальные предметы выбирают под будущую специальность. **Результаты ЕГЭ действуют четыре года**, так что поступать можно не сразу после школы.":
    "Obowiązkowe są język rosyjski i matematyka; pozostałe przedmioty wybiera się pod przyszłą specjalność. **Wyniki EGE są ważne cztery lata**, więc na studia można iść nie od razu po szkole.",
  "Какой экзамен сдают после девятого класса?": "Jaki egzamin zdaje się po dziewiątej klasie?",
  "ОГЭ": "OGE",
  "ЕГЭ": "EGE",
  "Вступительные экзамены вуза": "Egzaminy wstępne uczelni",
  "Никакого": "Żadnego",
  "ЕГЭ сдают после одиннадцатого класса, и он служит и выпускным, и вступительным экзаменом сразу.":
    "EGE zdaje się po jedenastej klasie i służy od razu za egzamin końcowy i wstępny.",
  "После школы": "Po szkole",
  "Колледж": "Kolegium",
  "Среднее профессиональное образование. Поступают после девятого или одиннадцатого класса, учатся два-четыре года и выходят с профессией.":
    "Średnie wykształcenie zawodowe. Wchodzi się po dziewiątej albo jedenastej klasie, uczy dwa do czterech lat i wychodzi z zawodem.",
  "Бакалавриат и специалитет": "Licencjat i studia jednolite",
  "Первая ступень высшего образования: четыре года у бакалавра, пять-шесть лет у специалиста — например, у врача.":
    "Pierwszy stopień wykształcenia wyższego: cztery lata u licencjata, pięć do sześciu lat u specjalisty — na przykład u lekarza.",
  "Магистратура": "Studia magisterskie",
  "Ещё два года после бакалавриата. Можно сменить направление, и второе высшее при этом не считается платным по умолчанию.":
    "Jeszcze dwa lata po licencjacie. Można zmienić kierunek, a drugie wyższe nie liczy się przy tym domyślnie jako płatne.",
  "Аспирантура": "Studia doktoranckie",
  "Подготовка к научной работе и к защите диссертации. Отсюда выходят кандидаты наук.":
    "Przygotowanie do pracy naukowej i do obrony rozprawy. Stąd wychodzą kandydaci nauk.",
  "Места в вузах делятся на **бюджетные** — оплаченные государством и распределяемые по конкурсу баллов — и **платные**. Конституция и говорит именно так: высшее образование бесплатно **на конкурсной основе**, то есть не всем, но и не за деньги.":
    "Miejsca na uczelniach dzielą się na **budżetowe** — opłacone przez państwo i rozdzielane w konkursie punktów — oraz **płatne**. Konstytucja mówi właśnie tak: wykształcenie wyższe jest bezpłatne **na zasadzie konkursu**, czyli nie dla wszystkich, ale i nie za pieniądze.",
  "Сколько времени действуют результаты ЕГЭ?": "Jak długo są ważne wyniki EGE?",
  "Один год": "Rok",
  "Четыре года": "Cztery lata",
  "Бессрочно": "Bezterminowo",
  "До конца календарного года": "Do końca roku kalendarzowego",
  "Поэтому поступать можно не сразу после школы: результат остаётся действительным несколько приёмных кампаний подряд.":
    "Dlatego na studia można iść nie od razu po szkole: wynik zostaje ważny przez kilka kolejnych rekrutacji.",
  "Полис ОМС действует **по всей стране**, а не только в регионе, где выдан. Переехав, менять его не нужно — нужно только прикрепиться к новой поликлинике.":
    "Polisa OMS działa **w całym kraju**, a nie tylko w regionie, gdzie ją wydano. Po przeprowadzce nie trzeba jej zmieniać — trzeba się tylko przypisać do nowej przychodni.",
  "Документы и учреждения": "Dokumenty i urzędy",
  "Почему это важно: почти любое дело здесь начинается с документа, и почти любой документ теперь оформляется в одном из двух мест — в многофункциональном центре или на портале. Знать, куда идти, важнее, чем знать название ведомства.":
    "Dlaczego to ważne: prawie każda sprawa zaczyna się tu od dokumentu, a prawie każdy dokument załatwia się teraz w jednym z dwóch miejsc — w centrum wielofunkcyjnym albo na portalu. Wiedzieć, dokąd iść, jest ważniejsze niż znać nazwę urzędu.",
  "Паспорт": "Paszport",
  "До четырнадцати лет главный документ ребёнка — **свидетельство о рождении**. Затем выдаётся **паспорт гражданина Российской Федерации**, и его **меняют в 20 и в 45 лет**; после сорока пяти он служит уже без замены. Просроченный паспорт недействителен, и на замену даётся ограниченный срок.":
    "Do czternastego roku życia głównym dokumentem dziecka jest **akt urodzenia**. Potem wydaje się **paszport obywatela Federacji Rosyjskiej**, a **wymienia się go w wieku 20 i 45 lat**; po czterdziestym piątym roku służy już bez wymiany. Paszport przeterminowany jest nieważny, a na wymianę daje się ograniczony termin.",
  "Для поездок за границу существует отдельный **заграничный паспорт** — обычный на пять лет и биометрический на десять. Внутренний паспорт за пределами страны не действует.":
    "Do wyjazdów za granicę istnieje osobny **paszport zagraniczny** — zwykły na pięć lat i biometryczny na dziesięć. Paszport wewnętrzny poza krajem nie działa.",
  "В каком возрасте меняют паспорт гражданина России?":
    "W jakim wieku wymienia się paszport obywatela Rosji?",
  "В 20 и в 45 лет": "W wieku 20 i 45 lat",
  "В 18 и в 40 лет": "W wieku 18 i 40 lat",
  "Каждые десять лет": "Co dziesięć lat",
  "Паспорт не меняют": "Paszportu się nie wymienia",
  "Выдаётся он в 14 лет, а после 45 служит без замены. Просроченный паспорт недействителен.":
    "Wydaje się go w wieku 14 lat, a po 45 służy bez wymiany. Paszport przeterminowany jest nieważny.",
  "Регистрация, а не прописка": "Rejestracja, a nie propiska",
  "Советская **прописка**, дававшая разрешение жить в городе, отменена в **1993 году**. Её место занял **регистрационный учёт**, и это принципиально другое: регистрация **уведомляет** государство о месте жительства, а не разрешает его. Конституционный Суд отдельно указывал, что регистрация не может быть условием осуществления прав.":
    "Radziecką **propiskę**, dającą zezwolenie na mieszkanie w mieście, zniesiono w **1993 roku**. Jej miejsce zajęła **ewidencja meldunkowa**, a to coś zasadniczo innego: rejestracja **zawiadamia** państwo o miejscu zamieszkania, a nie go zezwala. Sąd Konstytucyjny osobno wskazywał, że rejestracja nie może być warunkiem korzystania z praw.",
  "Различают два вида. **Регистрация по месту жительства** — постоянная, ставится штампом в паспорт. **Регистрация по месту пребывания** — временная, оформляется, если человек живёт по другому адресу **более 90 дней**, и выдаётся отдельным свидетельством. Одна другую не отменяет.":
    "Rozróżnia się dwa rodzaje. **Rejestracja w miejscu zamieszkania** jest stała i stawia się ją pieczątką w paszporcie. **Rejestracja w miejscu pobytu** jest czasowa, załatwia się ją, jeśli człowiek mieszka pod innym adresem **dłużej niż 90 dni**, i wydaje się na nią osobne zaświadczenie. Jedna nie uchyla drugiej.",
  "Через какой срок проживания по новому адресу нужна регистрация по месту пребывания?":
    "Po jakim czasie mieszkania pod nowym adresem potrzebna jest rejestracja w miejscu pobytu?",
  "Более 90 дней": "Po ponad 90 dniach",
  "Более 7 дней": "Po ponad 7 dniach",
  "Более года": "Po ponad roku",
  "Она не требуется вовсе": "Nie jest w ogóle potrzebna",
  "Постоянная регистрация по месту жительства при этом сохраняется: временная её не отменяет и ставится не штампом, а отдельным свидетельством.":
    "Stała rejestracja w miejscu zamieszkania przy tym zostaje: czasowa jej nie uchyla i stawia się ją nie pieczątką, lecz osobnym zaświadczeniem.",
  "ЗАГС": "ZAGS",
  "**Органы записи актов гражданского состояния** регистрируют рождение, брак, расторжение брака, установление отцовства, перемену имени и смерть. Правовые последствия имеет только брак, заключённый там: **венчание в церкви само по себе брака не создаёт**.":
    "**Urzędy stanu cywilnego** rejestrują urodzenie, małżeństwo, rozwód, uznanie ojcostwa, zmianę imienia i zgon. Skutki prawne ma tylko małżeństwo zawarte tam: **ślub w cerkwi sam w sobie małżeństwa nie tworzy**.",
  "Брачный возраст — **18 лет**; при уважительных причинах он может быть снижен до шестнадцати, а в отдельных регионах и ниже по региональному закону. Между подачей заявления и регистрацией по общему правилу проходит месяц.":
    "Wiek zawarcia małżeństwa to **18 lat**; z ważnych powodów może zostać obniżony do szesnastu, a w niektórych regionach i niżej, na podstawie ustawy regionalnej. Między złożeniem wniosku a rejestracją mija według zasady ogólnej miesiąc.",
  "Какой брак имеет правовые последствия?": "Które małżeństwo ma skutki prawne?",
  "Заключённый в органах ЗАГС": "Zawarte w urzędzie stanu cywilnego",
  "Освящённый в церкви": "Pobłogosławione w cerkwi",
  "Любой, если пара живёт вместе более года": "Każde, jeśli para mieszka razem dłużej niż rok",
  "Заверенный у нотариуса": "Poświadczone u notariusza",
  "Венчание можно совершить дополнительно, но само по себе оно брака не создаёт. Совместная жизнь без регистрации тоже не приравнивается к браку.":
    "Ślub kościelny można wziąć dodatkowo, ale sam w sobie małżeństwa nie tworzy. Wspólne życie bez rejestracji też nie jest równoznaczne z małżeństwem.",
  "Куда идти": "Dokąd iść",
  "МФЦ": "MFC",
  "Многофункциональный центр, вывеска «Мои документы». Одно окно почти для всего: паспорт, регистрация, справки, выписки, пособия.":
    "Centrum wielofunkcyjne, szyld „Moje dokumenty”. Jedno okienko niemal do wszystkiego: paszport, rejestracja, zaświadczenia, wypisy, zasiłki.",
  "Портал и приложение. Подтверждённая учётная запись позволяет подать большинство заявлений и записаться на приём, не выходя из дома.":
    "Portal i aplikacja. Potwierdzone konto pozwala złożyć większość wniosków i zapisać się na wizytę, nie wychodząc z domu.",
  "Налоговая": "Urząd skarbowy",
  "ИНН, декларации, налоговые вычеты — в том числе на лечение, обучение и покупку жилья. Личный кабинет заменяет визит.":
    "INN, deklaracje, ulgi podatkowe — w tym na leczenie, naukę i zakup mieszkania. Konto internetowe zastępuje wizytę.",
  "Социальный фонд": "Fundusz Socjalny",
  "Пенсии, пособия, СНИЛС и сведения о стаже. Образован объединением пенсионного и социального фондов.":
    "Emerytury, zasiłki, SNILS i dane o stażu. Powstał z połączenia funduszu emerytalnego i socjalnego.",
  "Экстренные номера и воинский учёт": "Numery ratunkowe i ewidencja wojskowa",
  "Единый номер — **112**. Отдельно работают **101** (пожарные и спасатели), **102** (полиция), **103** (скорая помощь) и **104** (аварийная газовая служба). Со 112 можно звонить без денег на счету, без сим-карты и с заблокированного телефона.":
    "Jednolity numer to **112**. Osobno działają **101** (straż pożarna i ratownicy), **102** (policja), **103** (pogotowie) i **104** (pogotowie gazowe). Pod 112 można dzwonić bez pieniędzy na koncie, bez karty SIM i z zablokowanego telefonu.",
  "Мужчины состоят на **воинском учёте**. Призыв касается возраста **от 18 до 30 лет**; верхняя граница поднята с 27 до 30 с 2024 года. Тем, чьим убеждениям военная служба противоречит, Конституция даёт право на **альтернативную гражданскую службу** — она дольше и проходит обычно в гражданских учреждениях.":
    "Mężczyźni figurują w **ewidencji wojskowej**. Pobór dotyczy wieku **od 18 do 30 lat**; górną granicę podniesiono z 27 do 30 od 2024 roku. Tym, których przekonaniom służba wojskowa przeczy, Konstytucja daje prawo do **zastępczej służby cywilnej** — jest dłuższa i odbywa się zwykle w instytucjach cywilnych.",
  "Отсутствие регистрации не лишает человека прав — ни на медицинскую помощь, ни на школу для ребёнка, ни на выборы. Но за проживание без неё дольше установленного срока предусмотрен штраф, так что это обязанность, а не разрешение.":
    "Brak rejestracji nie pozbawia człowieka praw — ani do pomocy medycznej, ani do szkoły dla dziecka, ani do wyborów. Ale za mieszkanie bez niej dłużej niż przez ustalony czas przewidziano grzywnę, więc to obowiązek, a nie zezwolenie.",
  "Быт и обычаи": "Życie codzienne i obyczaje",
  "Почему это важно: правила из этого урока нигде не записаны, но нарушают их заметнее, чем законы. Разуться в прихожей и подарить нечётное число цветов — мелочи, по которым сразу видно, свой человек в доме или чужой.":
    "Dlaczego to ważne: reguły z tej lekcji nie są nigdzie zapisane, ale ich naruszenie widać wyraźniej niż złamanie ustaw. Zdjąć buty w przedpokoju i podarować nieparzystą liczbę kwiatów to drobiazgi, po których od razu widać, czy ktoś jest w domu swój, czy obcy.",
  "Как обращаться": "Jak się zwracać",
  "У человека три имени: **имя, отчество и фамилия**. Отчество образуется от имени отца — **Иванович** и **Ивановна**, **Сергеевич** и **Сергеевна**. Обращение по имени и отчеству — уважительное: так говорят с преподавателем, врачом, начальником, с человеком старше себя.":
    "Człowiek ma trzy imiona: **imię, otczestwo i nazwisko**. Otczestwo tworzy się od imienia ojca — **Iwanowicz** i **Iwanowna**, **Siergiejewicz** i **Siergiejewna**. Zwracanie się po imieniu i otczestwie jest wyrazem szacunku: tak mówi się do wykładowcy, lekarza, przełożonego, do kogoś starszego od siebie.",
  "Есть **«ты»** и **«вы»**. К незнакомому, к старшему, к должностному лицу — только «вы». Переход на «ты» предлагает старший или тот, кто выше по положению, и предложение это обычно произносят вслух.":
    "Jest **„ty”** i **„wy”**. Do nieznajomego, do starszego, do osoby urzędowej — tylko „wy”. Przejście na „ty” proponuje starszy albo ten, kto stoi wyżej, a propozycję tę zwykle wypowiada się na głos.",
  "Полные имена в быту почти не звучат: **Александр** — Саша, **Мария** — Маша, **Дмитрий** — Дима, **Екатерина** — Катя. Уменьшительное имя не фамильярность, а норма между знакомыми; но с отчеством оно не сочетается.":
    "Pełnych imion w codzienności prawie się nie słyszy: **Aleksandr** to Sasza, **Marija** to Masza, **Dmitrij** to Dima, **Jekatierina** to Katia. Zdrobnienie nie jest poufałością, lecz normą między znajomymi; ale z otczestwem się go nie łączy.",
  "В гостях": "W gościach",
  "В квартире **разуваются в прихожей** — почти без исключений; гостю дают тапочки. Приходить с пустыми руками не принято: приносят торт, конфеты или бутылку к столу.":
    "W mieszkaniu **zdejmuje się buty w przedpokoju** — niemal bez wyjątków; gościowi daje się kapcie. Przychodzić z pustymi rękami nie wypada: przynosi się tort, cukierki albo butelkę do stołu.",
  "**Цветы дарят нечётным числом** — три, пять, семь. Чётное число несут на похороны, и ошибка эта считается неприятной. Большие букеты считают уже не по одному цветку, но привычка держится крепко.":
    "**Kwiaty daruje się w nieparzystej liczbie** — trzy, pięć, siedem. Parzystą liczbę niesie się na pogrzeb, a ta pomyłka uchodzi za przykrą. Wielkich bukietów już się po jednym kwiatku nie liczy, ale zwyczaj trzyma się mocno.",
  "Через порог не здороваются и не передают вещей — примета старая, но соблюдают её многие. Хозяин сначала зовёт войти, и только потом подают руку.":
    "Przez próg się nie wita i nie podaje rzeczy — przesąd stary, ale wielu go przestrzega. Gospodarz najpierw zaprasza do środka, a dopiero potem podaje rękę.",
  "Сколько цветов принято дарить?": "Ile kwiatów wypada darować?",
  "Нечётное число: три, пять, семь": "Nieparzystą liczbę: trzy, pięć, siedem",
  "Чётное число": "Parzystą liczbę",
  "Ровно дюжину": "Dokładnie tuzin",
  "Число значения не имеет": "Liczba nie ma znaczenia",
  "Чётное число цветов несут на похороны. Очень большие букеты по одному цветку уже не считают, но правило держится.":
    "Parzystą liczbę kwiatów niesie się na pogrzeb. Bardzo wielkich bukietów już się po jednym kwiatku nie liczy, ale reguła się trzyma.",
  "За столом": "Przy stole",
  "Обед состоит из **первого** — супа, **второго** и **третьего**, то есть напитка. Суп здесь не закуска, а полноценное блюдо: **борщ** со свёклой, **щи** из капусты, **уха** из рыбы, **солянка**.":
    "Obiad składa się z **pierwszego** — zupy, **drugiego** i **trzeciego**, czyli napoju. Zupa nie jest tu przystawką, lecz pełnym daniem: **barszcz** z burakami, **szczi** z kapusty, **ucha** z ryby, **solanka**.",
  "Дальше — **пельмени**, **каша**, **картошка**, **блины**, **пироги**. Со **сметаной** едят почти всё, что можно ею заправить. Из напитков — **чай** в любое время дня, **компот**, **квас** и **морс**.":
    "Dalej — **pielmieni**, **kasza**, **ziemniaki**, **bliny**, **pierogi**. Ze **śmietaną** je się prawie wszystko, co da się nią okrasić. Z napojów — **herbata** o każdej porze dnia, **kompot**, **kwas** i **mors**.",
  "**Солёные огурцы**, квашеная капуста и варенье — заготовки, которые многие семьи делают сами, банками, на всю зиму. Отсюда и погреба на дачах, и балконы, заставленные в сентябре.":
    "**Ogórki kiszone**, kapusta kiszona i konfitury to przetwory, które wiele rodzin robi samodzielnie, słoikami, na całą zimę. Stąd i piwnice na daczach, i balkony zastawione we wrześniu.",
  "Дача и баня": "Dacza i bania",
  "**Дача** — не загородный дом богатых, а массовое явление: участки по **шесть соток** раздавали работникам предприятий в советское время, и на них строили дом своими руками. Летом города заметно пустеют по выходным именно поэтому.":
    "**Dacza** to nie podmiejski dom bogatych, lecz zjawisko masowe: działki po **sześć arów** rozdawano pracownikom zakładów w czasach radzieckich, a na nich budowano dom własnymi rękami. Latem miasta wyraźnie pustoszeją w weekendy właśnie dlatego.",
  "**Баня** — не только мытьё. Ходят компанией, парятся **веником** из берёзовых или дубовых веток, между заходами пьют чай. Суббота — традиционный банный день.":
    "**Bania** to nie tylko mycie się. Chodzi się w towarzystwie, parzy **wienikiem** z brzozowych albo dębowych gałązek, a między wejściami pije herbatę. Sobota to tradycyjny dzień bani.",
  "Зима и календарь": "Zima i kalendarz",
  "**Новый год** — главный семейный праздник года, и по значению он здесь стоит выше Рождества. Ставят **ёлку**, ждут **Деда Мороза** и его внучку **Снегурочку**, под **бой курантов** в полночь провожают старый год. На столе — **оливье**, селёдка под шубой и мандарины; **новогодние каникулы** длятся с 1 по 8 января.":
    "**Nowy Rok** to główne rodzinne święto roku i znaczy tu więcej niż Boże Narodzenie. Stawia się **choinkę**, czeka na **Dziadka Mroza** i jego wnuczkę **Śnieżynkę**, a przy **biciu kurantów** o północy żegna stary rok. Na stole — **sałatka Oliviera**, śledź pod pierzynką i mandarynki; **ferie noworoczne** trwają od 1 do 8 stycznia.",
  "Зимой работает **центральное отопление**: тепло идёт в дома из общей котельной, а не от собственного котла в квартире. Отопительный сезон начинают, когда среднесуточная температура **пять дней подряд держится ниже +8 °C** — то есть по погоде, а не по календарю.":
    "Zimą działa **ogrzewanie centralne**: ciepło idzie do domów ze wspólnej kotłowni, a nie z własnego pieca w mieszkaniu. Sezon grzewczy zaczyna się, gdy średnia dobowa temperatura **przez pięć dni z rzędu utrzymuje się poniżej +8 °C** — czyli według pogody, a nie kalendarza.",
  "Кто по традиции приходит вместе с Дедом Морозом?":
    "Kto tradycyjnie przychodzi razem z Dziadkiem Mrozem?",
  "Снегурочка, его внучка": "Śnieżynka, jego wnuczka",
  "Его жена": "Jego żona",
  "Никто, он приходит один": "Nikt, przychodzi sam",
  "Помощники-эльфы": "Pomocnicy-elfy",
  "Пару Дед Мороз и Снегурочка знают все, и обоих зовут на детские праздники. Подарки кладут под ёлку, а не в чулки.":
    "Parę Dziadek Mróz i Śnieżynka znają wszyscy i oboje zaprasza się na dziecięce święta. Prezenty kładzie się pod choinkę, a nie do skarpet.",
  "По какому признаку начинают отопительный сезон?":
    "Po jakim znaku zaczyna się sezon grzewczy?",
  "Когда среднесуточная температура пять дней держится ниже +8 °C":
    "Gdy średnia dobowa temperatura przez pięć dni utrzymuje się poniżej +8 °C",
  "С первого октября по всей стране": "Od pierwszego października w całym kraju",
  "Когда об этом попросят жильцы дома": "Gdy poproszą o to mieszkańcy domu",
  "Когда выпадет снег": "Gdy spadnie śnieg",
  "Отопление идёт из общей котельной, а не от котла в квартире, поэтому и включают его сразу на весь район — по погоде, а не по календарю.":
    "Ogrzewanie idzie ze wspólnej kotłowni, a nie z pieca w mieszkaniu, i dlatego włącza się je od razu dla całej dzielnicy — według pogody, a nie kalendarza.",
  "Каждый день": "Codziennie",
  "Подъезд": "Klatka schodowa",
  "Общий вход в многоквартирный дом, обычно с домофоном. Соседи по подъезду — отдельный круг знакомств, и объявления вешают именно там.":
    "Wspólne wejście do bloku, zwykle z domofonem. Sąsiedzi z jednej klatki to osobny krąg znajomych, i ogłoszenia wiesza się właśnie tam.",
  "Метро": "Metro",
  "Работает в Москве, Санкт-Петербурге, Нижнем Новгороде, Новосибирске, Самаре, Екатеринбурге и Казани. В остальных городах — автобусы, троллейбусы и трамваи.":
    "Działa w Moskwie, Petersburgu, Niżnym Nowogrodzie, Nowosybirsku, Samarze, Jekaterynburgu i Kazaniu. W pozostałych miastach — autobusy, trolejbusy i tramwaje.",
  "Электричка": "Elektryczka",
  "Пригородный поезд. Ими ездят на дачу и на работу из области, и расписание знают наизусть.":
    "Pociąg podmiejski. Nimi jeździ się na daczę i do pracy z obwodu, a rozkład zna się na pamięć.",
  "Маршрутка": "Marszrutka",
  "Микроавтобус по фиксированному маршруту, останавливающийся по просьбе. Билета нет — платят при входе или при выходе.":
    "Mikrobus na stałej trasie, zatrzymujący się na życzenie. Biletu nie ma — płaci się przy wejściu albo przy wyjściu.",
  "Тапочки в прихожей и просьба разуться — не проверка гостя на послушание. Улицу зимой посыпают реагентами, и хозяева берегут пол, а не проверяют манеры.":
    "Kapcie w przedpokoju i prośba o zdjęcie butów to nie sprawdzian posłuszeństwa gościa. Ulice zimą posypuje się środkami chemicznymi, a gospodarze chronią podłogę, a nie sprawdzają maniery.",
};
