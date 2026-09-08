/**
 * Polish for the Zhizn v Rossii practice questions.
 *
 * The sixth and last bank a Polish reader meets, and the one the reader
 * needs most: in front of a Latin alphabet they can guess at an Italian or a
 * Spanish sentence, in front of Cyrillic they cannot. Until this table there
 * was a Russian lesson that read in Polish and then asked its questions in
 * Russian.
 *
 * Keyed on the RUSSIAN source text exactly as it appears in ruQuestionBank.ts
 * — question, every option and explanation. Each key was extracted from the
 * built module and paired back, never retyped: one wrong character, an и for
 * a й or a ё written flat, and the lookup misses in silence, the question
 * renders in Russian and nothing anywhere reports it.
 *
 * WHAT STAYS RUSSIAN follows ZHIZN_V_ROSSII_PL exactly, because the lesson
 * and its questions are read one after the other and a word glossed two ways
 * between them teaches nothing. Institutions take their Polish conventional
 * form where one exists — Duma Państwowa, Rada Federacji, Sąd Konstytucyjny.
 * Where the abbreviation is itself the answer the exam wants and Polish has
 * no equivalent — EGE, OGE, MROT, SNILS, INN, OMS, MFC, ZAGS — the Polish
 * gives the meaning and keeps the abbreviation beside it. The everyday words
 * the course teaches keep their Russian and gain the meaning next to them:
 * propiska, dacza, bania, marszrutka, elektryczka.
 *
 * Transliteration follows Polish usage, not German or English: Czajkowski,
 * Jurij Gagarin, Jekaterynburg. Settled exonyms are used — Moskwa,
 * Petersburg, Nowogród, Bajkał, Wołga — and where Polish has none, the
 * Polish transliteration of the Russian stands.
 *
 * Options are plain strings in this bank, not objects, and the four of a
 * question are only ever distinguished by their text: two options that come
 * back the same Polish sentence make a question with no answer. Each is
 * translated so the four stay four.
 *
 * check-pl-bank-translation refuses a single missing string, a key that no
 * question contains, a key another Polish table already claims, and a
 * rendering that drops one of the words above.
 */
export const RU_QUESTION_BANK_PL: Record<string, string> = {
  "Сколько полос на государственном флаге России?": "Ile pasów ma flaga państwowa Rosji?",
  "Две": "Dwa",
  "Пять": "Pięć",
  "Три равные горизонтальные полосы. Порядок закреплён федеральным конституционным законом 2000 года.":
    "Trzy równe poziome pasy. Ich kolejność ustala federalna ustawa konstytucyjna z 2000 roku.",
  "При каком правителе появился российский триколор?":
    "Za którego władcy pojawiła się rosyjska trójkolorowa flaga?",
  "При Иване III": "Za Iwana III",
  "При Петре I": "Za Piotra I",
  "При Екатерине II": "Za Katarzyny II",
  "При Александре II": "Za Aleksandra II",
  "При Петре I, сначала как флаг торговых судов. Двуглавый орёл в гербе, наоборот, старше: он появился при Иване III, в конце XV века.":
    "Za Piotra I, najpierw jako flaga statków handlowych. Dwugłowy orzeł w herbie jest odwrotnie: starszy, pojawił się za Iwana III, pod koniec XV wieku.",
  "Закреплены ли в законе значения цветов флага?": "Czy ustawa ustala znaczenia barw flagi?",
  "Да, они перечислены в конституционном законе": "Tak, wylicza je ustawa konstytucyjna",
  "Нет: распространённые толкования появились позже и в законе их нет":
    "Nie: rozpowszechnione wykładnie pojawiły się później i w ustawie ich nie ma",
  "Да, но только для белого цвета": "Tak, ale tylko dla bieli",
  "Значения устанавливает каждый субъект федерации": "Znaczenia ustala każdy podmiot federacji",
  "Закон описывает полотнище и порядок полос, но не приписывает цветам смысла. Толкования вроде чистоты, верности и отваги — позднейшие и неофициальные.":
    "Ustawa opisuje płat i kolejność pasów, ale nie przypisuje barwom sensu. Wykładnie w rodzaju czystości, wierności i męstwa są późniejsze i nieoficjalne.",
  "Какая птица изображена на государственном гербе?": "Jaki ptak widnieje w herbie państwowym?",
  "Одноглавый орёл": "Orzeł jednogłowy",
  "Двуглавый орёл": "Orzeł dwugłowy",
  "Сокол": "Sokół",
  "Лебедь": "Łabędź",
  "Золотой двуглавый орёл на красном щите, с тремя коронами, скипетром и державой, и всадником на груди.":
    "Złoty dwugłowy orzeł na czerwonej tarczy, z trzema koronami, berłem i jabłkiem, oraz jeźdźcem na piersi.",
  "Сколько корон над головами орла на гербе?":
    "Ile koron znajduje się nad głowami orła w herbie?",
  "Одна": "Jedna",
  "Ни одной": "Ani jednej",
  "Три короны, которые сегодня толкуют как символ суверенитета Российской Федерации и её частей.":
    "Trzy korony, które dziś tłumaczy się jako symbol suwerenności Federacji Rosyjskiej i jej części.",
  "Что изображено на щите на груди орла?": "Co przedstawia tarcza na piersi orła?",
  "Всадник, поражающий копьём дракона": "Jeźdźca przebijającego włócznią smoka",
  "Крест": "Krzyż",
  "Медведь": "Niedźwiedzia",
  "Корабль": "Okręt",
  "Это древний московский герб, который связывают с Георгием Победоносцем. Он попал на грудь двуглавого орла при объединении русских земель вокруг Москвы.":
    "To dawny herb Moskwy, który wiąże się ze świętym Jerzym Zwycięzcą. Trafił na pierś dwugłowego orła przy jednoczeniu ziem ruskich wokół Moskwy.",
  "Кто написал слова действующего государственного гимна?":
    "Kto napisał słowa obowiązującego hymnu państwowego?",
  "Александр Пушкин": "Aleksander Puszkin",
  "Сергей Михалков, и он писал текст к этой мелодии трижды: в 1943, 1977 и 2000 годах. Музыка во всех случаях александровская.":
    "Siergiej Michałkow, a tekst do tej melodii pisał trzykrotnie: w 1943, 1977 i 2000 roku. Muzyka za każdym razem była Aleksandrowa.",
  "Какая мелодия была гимном России с 1990 по 2000 год?":
    "Jaka melodia była hymnem Rosji w latach 1990–2000?",
  "Патриотическая песня Глинки": "Pieśń patriotyczna Glinki",
  "Гимн Александрова без слов": "Hymn Aleksandrowa bez słów",
  "Марш Преображенского полка": "Marsz Pułku Preobrażeńskiego",
  "Боже, царя храни": "Boże, cara chroń",
  "Патриотическая песня Глинки, к которой так и не утвердили текста. Отсутствие слов было одной из причин вернуться в 2000 году к прежней мелодии.":
    "Pieśń patriotyczna Glinki, do której nigdy nie zatwierdzono tekstu. Brak słów był jedną z przyczyn powrotu w 2000 roku do dawnej melodii.",
  "Какая статья Конституции называет столицей Москву?":
    "Który artykuł Konstytucji wskazuje Moskwę jako stolicę?",
  "Статья 1": "Artykuł 1",
  "Статья 68": "Artykuł 68",
  "Статья 70": "Artykuł 70",
  "Статья 137": "Artykuł 137",
  "Статья 70. Статья 68 — о государственном языке, а статья 1 определяет форму государства.":
    "Artykuł 70. Artykuł 68 dotyczy języka państwowego, a artykuł 1 określa formę państwa.",
  "Что устанавливает статья 68 Конституции?": "Co ustanawia artykuł 68 Konstytucji?",
  "Государственный флаг": "Flagę państwową",
  "Русский язык как государственный на всей территории":
    "Rosyjski jako język państwowy na całym terytorium",
  "Порядок принятия законов": "Tryb uchwalania ustaw",
  "Столицу": "Stolicę",
  "Русский язык — государственный на всей территории России, при этом республики вправе устанавливать свои государственные языки. Об этом подробнее в главе о языках.":
    "Rosyjski jest językiem państwowym na całym terytorium Rosji, przy czym republiki mogą ustanawiać własne języki państwowe. Szerzej o tym w rozdziale o językach.",
  "Когда отмечается День Государственного флага?": "Kiedy obchodzi się Dzień Flagi Państwowej?",
  "12 июня": "12 czerwca",
  "22 августа": "22 sierpnia",
  "4 ноября": "4 listopada",
  "12 декабря": "12 grudnia",
  "22 августа. Это памятная дата, а не нерабочий праздничный день.":
    "22 sierpnia. To data pamiętna, a nie dzień wolny od pracy.",
  "Какое событие 1990 года лежит в основе Дня России?":
    "Jakie wydarzenie z 1990 roku leży u podstaw Dnia Rosji?",
  "Принятие Конституции": "Uchwalenie Konstytucji",
  "Принятие Декларации о государственном суверенитете РСФСР":
    "Przyjęcie Deklaracji o suwerenności państwowej RSFRR",
  "Распад Советского Союза": "Rozpad Związku Radzieckiego",
  "Первые выборы президента": "Pierwsze wybory prezydenta",
  "Декларация о государственном суверенитете, принятая 12 июня 1990 года. Праздник дважды менял название и стал Днём России только в 2002 году.":
    "Deklaracja o suwerenności państwowej, przyjęta 12 czerwca 1990 roku. Święto dwukrotnie zmieniało nazwę i Dniem Rosji stało się dopiero w 2002 roku.",
  "В каком году государственный герб получил нынешний вид?":
    "W którym roku herb państwowy uzyskał dzisiejszą postać?",
  "В 1918 году": "W 1918 roku",
  "В 2000 году": "W 2000 roku",
  "В 1993 году. Законы о флаге, гербе и гимне в их действующей редакции приняты позже, в 2000 году.":
    "W 1993 roku. Ustawy o fladze, herbie i hymnie w obowiązującym brzmieniu uchwalono później, w 2000 roku.",
  "Когда Конституция вступила в силу?": "Kiedy Konstytucja weszła w życie?",
  "1 января 1994 года": "1 stycznia 1994 roku",
  "12 июня 1994 года": "12 czerwca 1994 roku",
  "Со дня официального опубликования — 25 декабря 1993 года. 12 декабря состоялось всенародное голосование, и именно эту дату отмечают как День Конституции.":
    "Z dniem oficjalnego ogłoszenia — 25 grudnia 1993 roku. 12 grudnia odbyło się głosowanie powszechne i to właśnie tę datę obchodzi się jako Dzień Konstytucji.",
  "Какую конституцию заменила Конституция 1993 года?":
    "Jaką konstytucję zastąpiła Konstytucja z 1993 roku?",
  "Конституцию СССР 1977 года": "Konstytucję ZSRR z 1977 roku",
  "Конституцию РСФСР 1978 года": "Konstytucję RSFRR z 1978 roku",
  "Конституцию 1936 года": "Konstytucję z 1936 roku",
  "Никакую: это первая конституция России": "Żadnej: to pierwsza konstytucja Rosji",
  "Конституцию РСФСР 1978 года, которую к началу девяностых правили десятки раз. Конституция СССР 1977 года перестала действовать вместе с Союзом.":
    "Konstytucję RSFRR z 1978 roku, którą na początku lat dziewięćdziesiątych poprawiano dziesiątki razy. Konstytucja ZSRR z 1977 roku przestała obowiązywać wraz ze Związkiem.",
  "Сколько глав в первом разделе Конституции?":
    "Ile rozdziałów liczy pierwsza część Konstytucji?",
  "Двенадцать": "Dwanaście",
  "Двадцать": "Dwadzieścia",
  "Девять глав и сто тридцать семь статей. Второй раздел короткий и содержит заключительные и переходные положения.":
    "Dziewięć rozdziałów i sto trzydzieści siedem artykułów. Druga część jest krótka i zawiera przepisy końcowe i przejściowe.",
  "Какие статьи входят в главу о правах и свободах человека?":
    "Które artykuły wchodzą w skład rozdziału o prawach i wolnościach człowieka?",
  "С 1 по 16": "Od 1 do 16",
  "С 17 по 64": "Od 17 do 64",
  "С 65 по 79": "Od 65 do 79",
  "С 80 по 93": "Od 80 do 93",
  "Статьи 17–64, это самая длинная глава Конституции. Статьи 1–16 — основы конституционного строя, 65–79 — федеративное устройство.":
    "Artykuły 17–64, to najdłuższy rozdział Konstytucji. Artykuły 1–16 to podstawy ustroju konstytucyjnego, 65–79 ustrój federalny.",
  "Как статья 1 определяет Российскую Федерацию?": "Jak artykuł 1 określa Federację Rosyjską?",
  "Как демократическое федеративное правовое государство с республиканской формой правления":
    "Jako demokratyczne federalne państwo prawne o republikańskiej formie rządów",
  "Как союз суверенных республик": "Jako związek suwerennych republik",
  "Как унитарное государство": "Jako państwo unitarne",
  "Как социалистическое государство рабочих и крестьян":
    "Jako socjalistyczne państwo robotników i chłopów",
  "Четыре характеристики в одном предложении, и у каждой есть продолжение в отдельной главе: демократия, федерация, право и республиканская форма правления.":
    "Cztery cechy w jednym zdaniu, a każda ma ciąg dalszy w osobnym rozdziale: demokracja, federacja, prawo i republikańska forma rządów.",
  "Кого статья 3 называет единственным источником власти?":
    "Kogo artykuł 3 nazywa jedynym źródłem władzy?",
  "Президента": "Prezydenta",
  "Носитель суверенитета и единственный источник власти — многонациональный народ. Слово «многонациональный» стоит и в преамбуле, и это не украшение.":
    "Nosicielem suwerenności i jedynym źródłem władzy jest wielonarodowy naród. Słowo „wielonarodowy” stoi też w preambule i nie jest ozdobnikiem.",
  "Что провозглашает статья 2 Конституции?": "Co proklamuje artykuł 2 Konstytucji?",
  "Разделение властей": "Podział władz",
  "Человека, его права и свободы высшей ценностью":
    "Człowieka, jego prawa i wolności jako najwyższą wartość",
  "Светский характер государства": "Świecki charakter państwa",
  "Единство экономического пространства": "Jedność przestrzeni gospodarczej",
  "Признание, соблюдение и защита прав и свобод объявлены обязанностью государства. Разделение властей — статья 10, светское государство — статья 14.":
    "Uznanie, przestrzeganie i ochrona praw i wolności są ogłoszone obowiązkiem państwa. Podział władz to artykuł 10, państwo świeckie artykuł 14.",
  "Что устанавливает статья 13 об идеологии?": "Co artykuł 13 ustanawia w sprawie ideologii?",
  "Государственной идеологией объявляется патриотизм":
    "Ideologią państwową ogłasza się patriotyzm",
  "Никакая идеология не может устанавливаться в качестве государственной или обязательной":
    "Żadna ideologia nie może być ustanowiona jako państwowa ani obowiązkowa",
  "Идеология определяется федеральным законом": "Ideologię określa ustawa federalna",
  "Об идеологии Конституция не говорит": "O ideologii Konstytucja nie mówi",
  "Статья 13 закрепляет идеологическое и политическое многообразие и многопартийность. Формулировка прямая: никакая идеология не может быть государственной или обязательной.":
    "Artykuł 13 ustanawia różnorodność ideologiczną i polityczną oraz wielopartyjność. Sformułowanie jest wprost: żadna ideologia nie może być państwowa ani obowiązkowa.",
  "Что означает, что Россия — светское государство?":
    "Co znaczy, że Rosja jest państwem świeckim?",
  "Религия запрещена": "Religia jest zakazana",
  "Религиозные объединения отделены от государства и равны перед законом":
    "Związki wyznaniowe są oddzielone od państwa i równe wobec prawa",
  "Установлена одна государственная религия": "Ustanowiono jedną religię państwową",
  "Религиозные организации управляют школами": "Organizacje religijne zarządzają szkołami",
  "Статья 14: никакая религия не может устанавливаться в качестве государственной или обязательной, а объединения отделены от государства и равны перед законом.":
    "Artykuł 14: żadna religia nie może być ustanowiona jako państwowa ani obowiązkowa, a związki wyznaniowe są oddzielone od państwa i równe wobec prawa.",
  "Сколько субъектов федерации должны одобрить поправку к главам с третьей по восьмую?":
    "Ilu podmiotów federacji musi zatwierdzić poprawkę do rozdziałów od trzeciego do ósmego?",
  "Половина": "Połowa",
  "Не менее двух третей": "Nie mniej niż dwie trzecie",
  "Три четверти": "Trzy czwarte",
  "Все": "Wszystkie",
  "Поправка принимается в порядке федерального конституционного закона и вступает в силу после одобрения органами законодательной власти не менее чем двух третей субъектов.":
    "Poprawkę uchwala się w trybie federalnej ustawy konstytucyjnej, a wchodzi w życie po zatwierdzeniu przez organy władzy ustawodawczej nie mniej niż dwóch trzecich podmiotów.",
  "Какой орган должен быть созван для пересмотра глав 1, 2 и 9?":
    "Jaki organ trzeba zwołać, żeby zmienić rozdziały 1, 2 i 9?",
  "Конституционное Собрание": "Zgromadzenie Konstytucyjne",
  "Конституционное Собрание по статье 135. Его ни разу не созывали, и федерального конституционного закона о нём до сих пор нет.":
    "Zgromadzenie Konstytucyjne z artykułu 135. Nigdy go nie zwołano, a federalnej ustawy konstytucyjnej o nim do dziś nie ma.",
  "В каком году в Конституцию внесли крупный пакет поправок к главам с третьей по восьмую?":
    "W którym roku wniesiono do Konstytucji duży pakiet poprawek do rozdziałów od trzeciego do ósmego?",
  "В 2008 году": "W 2008 roku",
  "В 2014 году": "W 2014 roku",
  "В 2020 году": "W 2020 roku",
  "В 2023 году": "W 2023 roku",
  "В 2020 году. До этого поправки касались сроков полномочий в 2008 году и объединения высших судов в 2014-м.":
    "W 2020 roku. Wcześniej poprawki dotyczyły długości kadencji w 2008 roku i połączenia sądów najwyższych w 2014.",
  "Является ли 12 декабря нерабочим днём?": "Czy 12 grudnia jest dniem wolnym od pracy?",
  "Да, это государственный праздник": "Tak, to święto państwowe",
  "Нет: с 2005 года это памятная дата, но рабочий день":
    "Nie: od 2005 roku to data pamiętna, ale dzień pracujący",
  "Да, но только для государственных служащих": "Tak, ale tylko dla urzędników państwowych",
  "Это выходной раз в пять лет": "To dzień wolny raz na pięć lat",
  "День Конституции остался памятной датой, но нерабочим быть перестал. Памятная дата и праздничный выходной — разные вещи.":
    "Dzień Konstytucji pozostał datą pamiętną, ale przestał być dniem wolnym. Data pamiętna i świąteczny dzień wolny to dwie różne rzeczy.",
  "С какого момента, по статье 17, человеку принадлежат основные права?":
    "Od jakiego momentu, według artykułu 17, człowiekowi przysługują prawa podstawowe?",
  "С получения паспорта": "Od otrzymania paszportu",
  "От рождения": "Od urodzenia",
  "С восемнадцати лет": "Od osiemnastego roku życia",
  "С момента регистрации по месту жительства": "Od chwili zameldowania w miejscu zamieszkania",
  "Права и свободы принадлежат каждому от рождения и неотчуждаемы. Паспорт и совершеннолетие меняют объём дееспособности, а не сам факт обладания правами.":
    "Prawa i wolności przysługują każdemu od urodzenia i są niezbywalne. Paszport i pełnoletność zmieniają zakres zdolności do czynności prawnych, a nie sam fakt posiadania praw.",
  "Чем отличаются статьи, начинающиеся словом «каждый», от статей о гражданах?":
    "Czym różnią się artykuły zaczynające się od słowa „każdy” od artykułów o obywatelach?",
  "Ничем: это стилистическая разница": "Niczym: to różnica stylistyczna",
  "Права со словом «каждый» принадлежат и иностранцам, а права граждан — только гражданам":
    "Prawa ze słowem „każdy” przysługują też cudzoziemcom, a prawa obywateli tylko obywatelom",
  "«Каждый» означает только совершеннолетних": "„Każdy” oznacza wyłącznie pełnoletnich",
  "«Каждый» относится к юридическим лицам": "„Każdy” odnosi się do osób prawnych",
  "Это ключ к чтению всей главы. Избирательные права и доступ к государственной службе записаны как права граждан; свобода слова, неприкосновенность жилища и право на защиту — как права каждого.":
    "To klucz do czytania całego rozdziału. Prawa wyborcze i dostęp do służby państwowej zapisano jako prawa obywateli; wolność słowa, nienaruszalność mieszkania i prawo do obrony jako prawa każdego.",
  "Каково фактическое положение смертной казни в России?":
    "Jaki jest faktyczny stan kary śmierci w Rosji?",
  "Применяется по приговорам судов": "Wykonuje się ją na podstawie wyroków sądów",
  "Действует мораторий, и наказание не применяется":
    "Obowiązuje moratorium i kary się nie stosuje",
  "Полностью исключена из Конституции": "Została całkowicie usunięta z Konstytucji",
  "Применяется только в военное время": "Stosuje się ją tylko w czasie wojny",
  "В статье 20 она названа исключительной мерой, но с середины девяностых действует мораторий, подтверждённый решениями Конституционного Суда.":
    "W artykule 20 nazwano ją środkiem wyjątkowym, ale od połowy lat dziewięćdziesiątych obowiązuje moratorium, potwierdzone orzeczeniami Sądu Konstytucyjnego.",
  "Что защищает статья 25 Конституции?": "Co chroni artykuł 25 Konstytucji?",
  "Тайну переписки": "Tajemnicę korespondencji",
  "Неприкосновенность жилища": "Nienaruszalność mieszkania",
  "Никто не вправе проникать в жилище против воли проживающих иначе как в случаях, установленных законом, или по судебному решению. Тайна переписки — статья 23.":
    "Nikt nie ma prawa wejść do mieszkania wbrew woli mieszkających w nim osób inaczej niż w przypadkach określonych ustawą albo na mocy orzeczenia sądu. Tajemnica korespondencji to artykuł 23.",
  "Что гарантирует статья 26 Конституции?": "Co gwarantuje artykuł 26 Konstytucji?",
  "Право определять и указывать свою национальность и пользоваться родным языком":
    "Prawo do określenia i wskazania swojej narodowości oraz posługiwania się językiem ojczystym",
  "Право на двойное гражданство": "Prawo do podwójnego obywatelstwa",
  "Право на альтернативную гражданскую службу": "Prawo do zastępczej służby cywilnej",
  "Свободу вероисповедания": "Wolność wyznania",
  "И одновременно запрет принуждать к указанию национальности. Для страны, где живут сотни народов, это существенная норма, а не формальность.":
    "A zarazem zakaz zmuszania do wskazania narodowości. Dla kraju, w którym żyją setki narodów, to norma istotna, a nie formalność.",
  "Что гарантирует статья 28 Конституции?": "Co gwarantuje artykuł 28 Konstytucji?",
  "Свободу совести и вероисповедания": "Wolność sumienia i wyznania",
  "Свободу собраний": "Wolność zgromadzeń",
  "Право на труд": "Prawo do pracy",
  "В том числе право не исповедовать никакой религии и свободно выбирать, иметь и распространять убеждения. Свобода собраний — статья 31.":
    "W tym prawo do niewyznawania żadnej religii i do swobodnego wybierania, posiadania i szerzenia przekonań. Wolność zgromadzeń to artykuł 31.",
  "Какая статья закрепляет право на жилище?": "Który artykuł ustanawia prawo do mieszkania?",
  "Статья 37": "Artykuł 37",
  "Статья 40": "Artykuł 40",
  "Статья 41": "Artykuł 41",
  "Статья 40: никто не может быть произвольно лишён жилища, а малоимущим оно предоставляется бесплатно или за доступную плату. Статья 41 — о здоровье, 43 — об образовании.":
    "Artykuł 40: nikogo nie można samowolnie pozbawić mieszkania, a osobom ubogim przysługuje ono bezpłatnie albo za przystępną opłatą. Artykuł 41 dotyczy zdrowia, a 43 oświaty.",
  "Что говорит статья 41 о медицинской помощи?": "Co mówi artykuł 41 o pomocy medycznej?",
  "Она платная для всех": "Jest płatna dla wszystkich",
  "В государственных и муниципальных учреждениях она оказывается гражданам бесплатно":
    "W placówkach państwowych i samorządowych udziela się jej obywatelom bezpłatnie",
  "Её объём определяет работодатель": "Jej zakres określa pracodawca",
  "Она бесплатна только для детей": "Jest bezpłatna tylko dla dzieci",
  "Помощь в государственных и муниципальных учреждениях здравоохранения оказывается бесплатно, за счёт бюджета, страховых взносов и других поступлений.":
    "Pomocy w państwowych i samorządowych zakładach opieki zdrowotnej udziela się bezpłatnie, ze środków budżetu, składek ubezpieczeniowych i innych wpływów.",
  "Против кого человек не обязан свидетельствовать по статье 51?":
    "Przeciw komu człowiek nie ma obowiązku zeznawać według artykułu 51?",
  "Только против самого себя": "Tylko przeciw sobie samemu",
  "Против себя, супруга и близких родственников": "Przeciw sobie, małżonkowi i bliskim krewnym",
  "Против любого знакомого": "Przeciw każdemu znajomemu",
  "Против работодателя": "Przeciw pracodawcy",
  "Круг близких родственников определяется федеральным законом. Это одна из самых известных статей Конституции — её часто цитируют, не открывая текста.":
    "Krąg bliskich krewnych określa ustawa federalna. To jeden z najbardziej znanych artykułów Konstytucji — cytuje się go często, nie otwierając tekstu.",
  "Что означает право на квалифицированную юридическую помощь по статье 48?":
    "Co oznacza prawo do wykwalifikowanej pomocy prawnej z artykułu 48?",
  "Что помощь всегда платная": "Że pomoc jest zawsze płatna",
  "Что в случаях, предусмотренных законом, она оказывается бесплатно":
    "Że w przypadkach przewidzianych ustawą udziela się jej bezpłatnie",
  "Что защитника назначает следователь": "Że obrońcę wyznacza śledczy",
  "Что помощь доступна только гражданам": "Że pomoc przysługuje tylko obywatelom",
  "Право гарантировано каждому, а в предусмотренных законом случаях помощь оказывается бесплатно. Задержанный вправе пользоваться помощью защитника с момента задержания.":
    "Prawo jest zagwarantowane każdemu, a w przypadkach przewidzianych ustawą pomocy udziela się bezpłatnie. Zatrzymany ma prawo do pomocy obrońcy od chwili zatrzymania.",
  "В чью пользу толкуются неустранимые сомнения в виновности?":
    "Na czyją korzyść tłumaczy się nieusuwalne wątpliwości co do winy?",
  "В пользу обвинения": "Na korzyść oskarżenia",
  "В пользу обвиняемого": "Na korzyść oskarżonego",
  "В пользу потерпевшего": "Na korzyść pokrzywdzonego",
  "Их толкует суд по своему усмотрению": "Tłumaczy je sąd według własnego uznania",
  "Это часть презумпции невиновности в статье 49. Обвиняемый не обязан доказывать свою невиновность, а сомнения работают на него.":
    "To część domniemania niewinności z artykułu 49. Oskarżony nie musi dowodzić swojej niewinności, a wątpliwości działają na jego korzyść.",
  "Какие уровни образования статья 43 объявляет общедоступными и бесплатными?":
    "Które poziomy kształcenia artykuł 43 ogłasza powszechnie dostępnymi i bezpłatnymi?",
  "Только начальное": "Tylko podstawowe",
  "Дошкольное, основное общее и среднее профессиональное":
    "Przedszkolne, podstawowe ogólne i średnie zawodowe",
  "Только высшее": "Tylko wyższe",
  "Все уровни без исключения": "Wszystkie poziomy bez wyjątku",
  "Высшее образование тоже можно получить бесплатно, но на конкурсной основе — это отдельная оговорка той же статьи.":
    "Wykształcenie wyższe też można zdobyć bezpłatnie, ale w trybie konkursowym — to osobne zastrzeżenie tego samego artykułu.",
  "Что устанавливает статья 37 о труде?": "Co ustanawia artykuł 37 w sprawie pracy?",
  "Труд обязателен для всех трудоспособных":
    "Praca jest obowiązkowa dla wszystkich zdolnych do niej",
  "Труд свободен, а принудительный труд запрещён":
    "Praca jest wolna, a praca przymusowa zakazana",
  "Работать можно только по трудовому договору":
    "Pracować można wyłącznie na podstawie umowy o pracę",
  "Продолжительность рабочего дня записана в Конституции":
    "Długość dnia pracy zapisano w Konstytucji",
  "Каждый вправе распоряжаться своими способностями к труду и выбирать род деятельности. Конкретная продолжительность рабочей недели установлена не Конституцией, а Трудовым кодексом.":
    "Każdy może rozporządzać swoimi zdolnościami do pracy i wybierać rodzaj zajęcia. Konkretną długość tygodnia pracy ustala nie Konstytucja, lecz kodeks pracy.",
  "Какая статья обязывает сохранять природу?":
    "Który artykuł nakłada obowiązek ochrony przyrody?",
  "Статья 58. Рядом стоят статья 57 о налогах и статья 59 о защите Отечества: три обязанности подряд, которые легко перепутать.":
    "Artykuł 58. Obok stoją artykuł 57 o podatkach i artykuł 59 o obronie Ojczyzny: trzy obowiązki jeden po drugim, które łatwo pomylić.",
  "Как Конституция называет защиту Отечества?": "Jak Konstytucja nazywa obronę Ojczyzny?",
  "Правом гражданина": "Prawem obywatela",
  "Долгом и обязанностью гражданина": "Powinnością i obowiązkiem obywatela",
  "Обязанностью каждого, кто живёт в стране": "Obowiązkiem każdego, kto mieszka w kraju",
  "Добровольным делом": "Sprawą dobrowolną",
  "Статья 59 использует оба слова сразу. Военная служба несётся по федеральному закону, а при противоречии убеждениям возможна альтернативная гражданская служба.":
    "Artykuł 59 używa obu słów naraz. Służbę wojskową pełni się na podstawie ustawy federalnej, a gdy przeczy ona przekonaniom, możliwa jest zastępcza służba cywilna.",
  "Кто имеет право на альтернативную гражданскую службу?":
    "Komu przysługuje prawo do zastępczej służby cywilnej?",
  "Любой призывник по заявлению": "Każdemu poborowemu na wniosek",
  "Тот, чьим убеждениям или вероисповеданию противоречит несение военной службы":
    "Temu, czyim przekonaniom albo wyznaniu przeczy pełnienie służby wojskowej",
  "Только студенты": "Tylko studentom",
  "Такого права в России нет": "Takiego prawa w Rosji nie ma",
  "Право закреплено прямо в статье 59, а порядок определяет федеральный закон. Оно распространяется также на представителей коренных малочисленных народов, ведущих традиционный образ жизни.":
    "Prawo zapisano wprost w artykule 59, a tryb określa ustawa federalna. Obejmuje ono także przedstawicieli rdzennych małych narodów prowadzących tradycyjny tryb życia.",
  "Что говорит статья 38 об обязанностях в семье?":
    "Co mówi artykuł 38 o obowiązkach w rodzinie?",
  "Только родители обязаны заботиться о детях":
    "Tylko rodzice mają obowiązek troszczyć się o dzieci",
  "Родители заботятся о детях, а трудоспособные взрослые дети — о нетрудоспособных родителях":
    "Rodzice troszczą się o dzieci, a zdolne do pracy dorosłe dzieci o niezdolnych do pracy rodziców",
  "Обязанности в семье устанавливает регион": "Obowiązki w rodzinie ustala region",
  "Об этом Конституция не говорит": "Konstytucja o tym nie mówi",
  "Обязанность идёт в обе стороны, и это записано прямо в Конституции, а не только в Семейном кодексе.":
    "Obowiązek idzie w obie strony i jest to zapisane wprost w Konstytucji, a nie tylko w kodeksie rodzinnym.",
  "Имеют ли обратную силу законы, ухудшающие положение налогоплательщиков?":
    "Czy ustawy pogarszające położenie podatników działają wstecz?",
  "Да, если так решит парламент": "Tak, jeśli tak postanowi parlament",
  "Нет: статья 57 это прямо запрещает": "Nie: artykuł 57 wprost tego zakazuje",
  "Да, в случае бюджетного дефицита": "Tak, w razie deficytu budżetowego",
  "Вопрос решает суд в каждом случае": "Rozstrzyga o tym sąd w każdej sprawie",
  "Прямая оговорка статьи 57. Законы, устанавливающие новые налоги или ухудшающие положение налогоплательщиков, обратной силы не имеют.":
    "To wyraźne zastrzeżenie artykułu 57. Ustawy ustanawiające nowe podatki albo pogarszające położenie podatników nie działają wstecz.",
  "Какое образование Конституция называет обязательным?":
    "Jakie wykształcenie Konstytucja nazywa obowiązkowym?",
  "Дошкольное": "Przedszkolne",
  "Основное общее": "Podstawowe ogólne",
  "Среднее профессиональное": "Średnie zawodowe",
  "Высшее": "Wyższe",
  "Основное общее образование обязательно, и обеспечить его получение детьми должны родители или лица, их заменяющие.":
    "Podstawowe wykształcenie ogólne jest obowiązkowe, a zapewnić jego zdobycie dzieciom mają rodzice albo osoby, które ich zastępują.",
  "Что означает, что гражданство России едино и равно независимо от оснований приобретения?":
    "Co oznacza, że obywatelstwo Rosji jest jednolite i równe niezależnie od podstawy nabycia?",
  "Что все граждане имеют одинаковые права независимо от того, получили они гражданство по рождению или были приняты":
    "Że wszyscy obywatele mają te same prawa niezależnie od tego, czy otrzymali obywatelstwo przez urodzenie, czy zostali przyjęci",
  "Что гражданство нельзя изменить": "Że obywatelstwa nie można zmienić",
  "Что двойное гражданство запрещено": "Że podwójne obywatelstwo jest zakazane",
  "Что гражданство даётся только по рождению":
    "Że obywatelstwo nadaje się wyłącznie przez urodzenie",
  "Статья 6. Из неё же следует, что гражданина нельзя лишить гражданства или права его изменить.":
    "Artykuł 6. Wynika z niego również, że obywatela nie można pozbawić obywatelstwa ani prawa do jego zmiany.",
  "В каком году принят действующий федеральный закон о гражданстве?":
    "W którym roku uchwalono obowiązującą ustawę federalną o obywatelstwie?",
  "В 2002 году": "W 2002 roku",
  "Закон 2023 года заменил закон 2002 года. Он же перестроил перечень оснований для приёма в упрощённом порядке.":
    "Ustawa z 2023 roku zastąpiła ustawę z 2002 roku. Ona też przebudowała wykaz podstaw przyjęcia w trybie uproszczonym.",
  "Какой документ должен иметь заявитель, чтобы начался отсчёт пятилетнего срока проживания?":
    "Jaki dokument musi mieć wnioskodawca, żeby zaczął biec pięcioletni okres zamieszkiwania?",
  "Визу": "Wizę",
  "Разрешение на временное проживание": "Zezwolenie na pobyt czasowy",
  "Вид на жительство": "Kartę stałego pobytu",
  "Патент на работу": "Patent na pracę",
  "Срок считается со дня получения вида на жительство. Разрешение на временное проживание — предшествующая ступень, а не она.":
    "Okres liczy się od dnia otrzymania karty stałego pobytu. Zezwolenie na pobyt czasowy to stopień poprzedzający, a nie ten.",
  "Кто может претендовать на приём в гражданство в упрощённом порядке?":
    "Kto może ubiegać się o przyjęcie do obywatelstwa w trybie uproszczonym?",
  "Любой, кто прожил в стране год": "Każdy, kto mieszkał w kraju rok",
  "В частности, близкие родственники граждан России, выпускники российских вузов и носители русского языка":
    "Między innymi bliscy krewni obywateli Rosji, absolwenci rosyjskich uczelni i osoby uznane za rodzimych użytkowników języka rosyjskiego",
  "Только граждане государств СНГ": "Tylko obywatele państw WNP",
  "Упрощённого порядка не существует": "Tryb uproszczony nie istnieje",
  "Перечень категорий установлен законом и время от времени меняется. Общий порядок с пятилетним сроком остаётся правилом, а упрощённый — исключением из него.":
    "Wykaz kategorii ustala ustawa i co pewien czas się zmienia. Tryb ogólny z pięcioletnim okresem pozostaje regułą, a uproszczony wyjątkiem od niej.",
  "Что, кроме срока проживания, требуется для приёма в гражданство?":
    "Czego poza okresem zamieszkiwania wymaga się przy przyjęciu do obywatelstwa?",
  "Только законный источник средств": "Tylko legalnego źródła utrzymania",
  "Владение русским языком, знание истории и основ законодательства, законный источник средств":
    "Znajomości rosyjskiego, wiedzy o historii i podstawach prawa oraz legalnego źródła utrzymania",
  "Наличие недвижимости": "Posiadania nieruchomości",
  "Служба в армии": "Służby w wojsku",
  "Знание языка, истории и основ законодательства подтверждается экзаменом. Именно его форму — тридцать шесть заданий за девяносто минут — берёт тренировочный тест этого курса.":
    "Znajomość języka, historii i podstaw prawa potwierdza egzamin. To właśnie jego postać — trzydzieści sześć zadań w dziewięćdziesiąt minut — bierze test ćwiczeniowy tego kursu.",
  "С какого года принятые в гражданство приносят присягу?":
    "Od którego roku przyjęci do obywatelstwa składają przysięgę?",
  "С 1993 года": "Od 1993 roku",
  "С 2002 года": "Od 2002 roku",
  "С 2017 года": "Od 2017 roku",
  "С 2023 года": "Od 2023 roku",
  "Присяга гражданина Российской Федерации введена в 2017 году и приносится после принятия решения о приёме в гражданство.":
    "Przysięgę obywatela Federacji Rosyjskiej wprowadzono w 2017 roku i składa się ją po wydaniu decyzji o przyjęciu do obywatelstwa.",
  "С какого возраста гражданин России получает паспорт?":
    "Od jakiego wieku obywatel Rosji dostaje paszport?",
  "С 10 лет": "Od 10 lat",
  "С 14 лет": "Od 14 lat",
  "С 16 лет": "Od 16 lat",
  "Паспорт выдаётся в 14 лет, а совершеннолетие с правом голоса и полной дееспособностью наступает в 18.":
    "Paszport wydaje się w wieku 14 lat, a pełnoletność wraz z prawem głosu i pełną zdolnością do czynności prawnych przychodzi w wieku 18 lat.",
  "Какая статья Трудового кодекса перечисляет нерабочие праздничные дни?":
    "Który artykuł kodeksu pracy wylicza świąteczne dni wolne od pracy?",
  "Статья 91": "Artykuł 91",
  "Статья 112": "Artykuł 112",
  "Статья 115": "Artykuł 115",
  "Статья 128": "Artykuł 128",
  "Статья 112. Статья 115 — о продолжительности ежегодного отпуска, статья 91 — о рабочем времени.":
    "Artykuł 112. Artykuł 115 dotyczy długości corocznego urlopu, a artykuł 91 czasu pracy.",
  "Какого числа отмечается Рождество Христово?": "Którego dnia obchodzi się Boże Narodzenie?",
  "25 декабря": "25 grudnia",
  "31 декабря": "31 grudnia",
  "7 января": "7 stycznia",
  "14 января": "14 stycznia",
  "7 января, потому что церковный календарь остался юлианским. По той же причине 14 января отмечают старый Новый год.":
    "7 stycznia, ponieważ kalendarz cerkiewny pozostał juliański. Z tego samego powodu 14 stycznia obchodzi się stary Nowy Rok.",
  "Что отмечают 23 февраля?": "Co obchodzi się 23 lutego?",
  "День защитника Отечества": "Dzień Obrońcy Ojczyzny",
  "Праздник ведёт начало от 1918 года. Сегодня поздравляют не только военных, и по массовости он стоит рядом с 8 марта.":
    "Święto wywodzi się z 1918 roku. Dziś życzenia składa się nie tylko wojskowym, a powszechnością dorównuje 8 marca.",
  "С какого года 8 марта стало в стране нерабочим днём?":
    "Od którego roku 8 marca stało się w kraju dniem wolnym od pracy?",
  "С 1918 года": "Od 1918 roku",
  "С 1966 года": "Od 1966 roku",
  "С 1966 года. Сам праздник отмечался задолго до этого, но выходным сделался только тогда.":
    "Od 1966 roku. Samo święto obchodzono dużo wcześniej, ale dniem wolnym stało się dopiero wtedy.",
  "Как назывался праздник 1 мая до 1992 года?": "Jak nazywało się święto 1 maja do 1992 roku?",
  "Праздник Весны и Труда": "Święto Wiosny i Pracy",
  "День международной солидарности трудящихся": "Dzień Międzynarodowej Solidarności Ludzi Pracy",
  "День трудовой славы": "Dzień Chwały Pracy",
  "День рабочего класса": "Dzień Klasy Robotniczej",
  "Название сменилось в 1992 году на Праздник Весны и Труда. Сам выходной сохранился.":
    "Nazwa zmieniła się w 1992 roku na Święto Wiosny i Pracy. Sam dzień wolny pozostał.",
  "Что происходит в Москве 9 мая?": "Co dzieje się w Moskwie 9 maja?",
  "Парад на Красной площади и шествие «Бессмертного полка»":
    "Parada na placu Czerwonym i pochód „Nieśmiertelnego pułku”",
  "Выборы в Государственную Думу": "Wybory do Dumy Państwowej",
  "Открытие учебного года": "Rozpoczęcie roku szkolnego",
  "Ежегодное послание парламенту": "Doroczne orędzie do parlamentu",
  "День Победы — с парадом, минутой молчания и шествием «Бессмертного полка», которое за последние годы стало частью дня по всей стране.":
    "Dzień Zwycięstwa — z paradą, minutą ciszy i pochodem „Nieśmiertelnego pułku”, który w ostatnich latach stał się częścią tego dnia w całym kraju.",
  "Какой праздник 4 ноября заменил в календаре?":
    "Jakie święto zastąpiło w kalendarzu 4 listopada?",
  "7 ноября, годовщину Октябрьской революции": "7 listopada, rocznicę rewolucji październikowej",
  "12 декабря, День Конституции": "12 grudnia, Dzień Konstytucji",
  "День народного единства введён в 2005 году вместо годовщины революции. Он посвящён освобождению Москвы ополчением Минина и Пожарского в 1612 году.":
    "Dzień Jedności Narodowej wprowadzono w 2005 roku zamiast rocznicy rewolucji. Poświęcony jest wyzwoleniu Moskwy przez pospolite ruszenie Minina i Pożarskiego w 1612 roku.",
  "Каким событиям посвящён День народного единства?":
    "Jakim wydarzeniom poświęcony jest Dzień Jedności Narodowej?",
  "Событиям 1612 года": "Wydarzeniom 1612 roku",
  "Событиям 1812 года": "Wydarzeniom 1812 roku",
  "Событиям 1917 года": "Wydarzeniom 1917 roku",
  "Событиям 1991 года": "Wydarzeniom 1991 roku",
  "Освобождению Москвы от польско-литовского гарнизона ополчением Минина и Пожарского, что положило конец Смутному времени.":
    "Wyzwoleniu Moskwy spod załogi polsko-litewskiej przez pospolite ruszenie Minina i Pożarskiego, co położyło kres wielkiej smucie.",
  "Что отмечают 12 апреля?": "Co obchodzi się 12 kwietnia?",
  "День знаний": "Dzień Wiedzy",
  "День космонавтики": "Dzień Kosmonautyki",
  "День памяти и скорби": "Dzień Pamięci i Żałoby",
  "День флага": "Dzień Flagi",
  "День космонавтики, в память о полёте Гагарина в 1961 году. Это памятная дата, а не выходной.":
    "Dzień Kosmonautyki, na pamiątkę lotu Gagarina w 1961 roku. To data pamiętna, a nie dzień wolny.",
  "Что происходит 1 сентября?": "Co dzieje się 1 września?",
  "День знаний: линейки, первый звонок и цветы учителям":
    "Dzień Wiedzy: apele, pierwszy dzwonek i kwiaty dla nauczycieli",
  "День города в Москве": "Dzień Miasta w Moskwie",
  "Начало финансового года": "Początek roku budżetowego",
  "День работника образования": "Dzień Pracownika Oświaty",
  "День знаний. Он рабочий, но школы начинают год торжественной линейкой, а первоклассники дают первый звонок.":
    "Dzień Wiedzy. Jest dniem pracującym, ale szkoły zaczynają rok uroczystym apelem, a pierwszoklasiści dają pierwszy dzwonek.",
  "Чему посвящено 22 июня?": "Czemu poświęcone jest 22 czerwca?",
  "Дню Победы": "Dniowi Zwycięstwa",
  "Дню памяти и скорби, годовщине начала войны в 1941 году":
    "Dniowi Pamięci i Żałoby, rocznicy wybuchu wojny w 1941 roku",
  "Дню России": "Dniowi Rosji",
  "Дню защитника Отечества": "Dniowi Obrońcy Ojczyzny",
  "В этот день в 1941 году началась война. Флаги приспускают, а ночью проводят акцию «Свеча памяти».":
    "Tego dnia w 1941 roku zaczęła się wojna. Flagi opuszcza się do połowy masztu, a nocą odbywa się akcja „Świeca pamięci”.",
  "Что такое Масленица?": "Czym jest Maslenica?",
  "Неделя перед Великим постом, с блинами и сожжением чучела зимы":
    "Tygodniem przed Wielkim Postem, z blinami i paleniem kukły zimy",
  "Праздник урожая осенью": "Jesiennym świętem plonów",
  "Название новогодних каникул": "Nazwą ferii noworocznych",
  "Ярмарка в честь Дня города": "Jarmarkiem z okazji Dnia Miasta",
  "Народный праздник проводов зимы, привязанный к церковному календарю: его дата зависит от даты Пасхи и потому подвижна.":
    "Ludowe święto pożegnania zimy, związane z kalendarzem cerkiewnym: jego data zależy od daty Wielkanocy i dlatego jest ruchoma.",
  "Какова была разница между юлианским и григорианским календарями при переходе 1918 года?":
    "Jaka była różnica między kalendarzem juliańskim a gregoriańskim przy przejściu w 1918 roku?",
  "Семь дней": "Siedem dni",
  "Десять дней": "Dziesięć dni",
  "Тринадцать дней": "Trzynaście dni",
  "Тридцать дней": "Trzydzieści dni",
  "Тринадцать дней. Отсюда и Рождество 7 января, и старый Новый год 14 января: обе даты — прежние числа, пересчитанные на новый календарь.":
    "Trzynaście dni. Stąd i Boże Narodzenie 7 stycznia, i stary Nowy Rok 14 stycznia: obie daty to dawne dni, przeliczone na nowy kalendarz.",
  "Как статья 80 называет Президента?": "Jak artykuł 80 nazywa Prezydenta?",
  "Главой исполнительной власти": "Szefem władzy wykonawczej",
  "Главой государства": "Głową państwa",
  "Председателем Правительства": "Przewodniczącym Rządu",
  "Главой парламента": "Przewodniczącym parlamentu",
  "Глава государства и гарант Конституции. Он не отнесён ни к одной из трёх ветвей власти, а стоит над разделением, установленным статьёй 10.":
    "Głową państwa i gwarantem Konstytucji. Nie zaliczono go do żadnej z trzech władz, lecz stoi ponad podziałem, który ustanawia artykuł 10.",
  "Каким был срок полномочий Президента до поправки 2008 года?":
    "Jak długa była kadencja Prezydenta przed poprawką z 2008 roku?",
  "Семь лет": "Siedem lat",
  "Четыре года. Той же поправкой срок полномочий Государственной Думы увеличили с четырёх лет до пяти.":
    "Cztery lata. Tą samą poprawką kadencję Dumy Państwowej wydłużono z czterech lat do pięciu.",
  "Сколько лет кандидат в Президенты должен постоянно проживать в России?":
    "Ile lat kandydat na Prezydenta musi stale mieszkać w Rosji?",
  "Десять": "Dziesięć",
  "Двадцать пять": "Dwadzieścia pięć",
  "Такого требования нет": "Takiego wymogu nie ma",
  "Двадцать пять лет — требование, добавленное поправками 2020 года. Тогда же появился запрет на иностранное гражданство и вид на жительство, в том числе в прошлом.":
    "Dwadzieścia pięć lat — wymóg dodany poprawkami z 2020 roku. Wtedy też pojawił się zakaz posiadania obcego obywatelstwa i karty stałego pobytu, również w przeszłości.",
  "Какое слово убрали из ограничения на сроки поправками 2020 года?":
    "Jakie słowo usunięto z ograniczenia liczby kadencji poprawkami z 2020 roku?",
  "Слово «двух»": "Słowo „dwóch”",
  "Слово «подряд»": "Słowo „pod rząd”",
  "Слово «шесть»": "Słowo „sześć”",
  "Ничего не убирали": "Niczego nie usuwano",
  "Прежде в тексте стояло «двух сроков подряд». После поправки осталось ограничение двумя сроками без этой оговорки.":
    "Wcześniej w tekście stało „dwóch kadencji pod rząd”. Po poprawce zostało ograniczenie do dwóch kadencji bez tego zastrzeżenia.",
  "Кого Президент назначает после утверждения кандидатуры Государственной Думой?":
    "Kogo Prezydent powołuje po zatwierdzeniu kandydatury przez Dumę Państwową?",
  "Председателя Правительства": "Przewodniczącego Rządu",
  "Генерального прокурора": "Prokuratora Generalnego",
  "Председателя Конституционного Суда": "Prezesa Sądu Konstytucyjnego",
  "Председателя Центрального банка": "Prezesa Banku Centralnego",
  "Председателя Правительства. Генерального прокурора и судей высших судов назначает Совет Федерации по представлению Президента, а Председателя Центрального банка — Дума.":
    "Przewodniczącego Rządu. Prokuratora Generalnego i sędziów sądów najwyższych powołuje Rada Federacji na wniosek Prezydenta, a Prezesa Banku Centralnego — Duma.",
  "Кто является Верховным Главнокомандующим Вооружёнными Силами?":
    "Kto jest Najwyższym Zwierzchnikiem Sił Zbrojnych?",
  "Министр обороны": "Minister obrony",
  "Начальник Генерального штаба": "Szef Sztabu Generalnego",
  "Президент, по статье 87. Он же вводит военное положение — с последующим утверждением Советом Федерации.":
    "Prezydent, zgodnie z artykułem 87. On też wprowadza stan wojenny — z następczym zatwierdzeniem przez Radę Federacji.",
  "Какой орган утверждает указ Президента о введении военного положения?":
    "Jaki organ zatwierdza dekret Prezydenta o wprowadzeniu stanu wojennego?",
  "Совет Федерации. То же касается чрезвычайного положения: указ издаёт Президент, а утверждает верхняя палата.":
    "Rada Federacji. To samo dotyczy stanu nadzwyczajnego: dekret wydaje Prezydent, a zatwierdza go izba wyższa.",
  "Какое право Президента позволяет ему не подписать принятый закон?":
    "Jakie uprawnienie pozwala Prezydentowi nie podpisać uchwalonej ustawy?",
  "Право роспуска": "Prawo rozwiązania izby",
  "Право вето": "Prawo weta",
  "Право помилования": "Prawo łaski",
  "Право законодательной инициативы": "Prawo inicjatywy ustawodawczej",
  "Вето. Оно преодолевается повторным принятием закона двумя третями голосов в обеих палатах, после чего Президент обязан подписать.":
    "Weto. Przełamuje się je ponownym uchwaleniem ustawy dwiema trzecimi głosów w obu izbach, po czym Prezydent ma obowiązek ją podpisać.",
  "Что из перечисленного относится к полномочиям Президента?":
    "Co z wymienionych należy do uprawnień Prezydenta?",
  "Помилование": "Ułaskawienie",
  "Амнистия": "Amnestia",
  "Утверждение бюджета": "Uchwalenie budżetu",
  "Установление местных налогов": "Ustanawianie podatków lokalnych",
  "Помилование — акт в отношении конкретного осуждённого. Амнистию объявляет Государственная Дума, а бюджет утверждает парламент по представлению Правительства.":
    "Ułaskawienie to akt wobec konkretnego skazanego. Amnestię ogłasza Duma Państwowa, a budżet uchwala parlament na wniosek Rządu.",
  "Какая палата выдвигает обвинение при отрешении Президента от должности?":
    "Która izba wysuwa oskarżenie przy złożeniu Prezydenta z urzędu?",
  "Государственная Дума двумя третями голосов": "Duma Państwowa dwiema trzecimi głosów",
  "Совет Федерации простым большинством": "Rada Federacji zwykłą większością",
  "Обе палаты совместно": "Obie izby wspólnie",
  "Дума выдвигает обвинение, суды дают заключения, а решение принимает Совет Федерации двумя третями. Процедура ни разу не была доведена до конца.":
    "Duma wysuwa oskarżenie, sądy wydają opinie, a rozstrzyga Rada Federacji dwiema trzecimi. Procedury nigdy nie doprowadzono do końca.",
  "В какой срок должно быть принято решение об отрешении Президента?":
    "W jakim terminie musi zapaść rozstrzygnięcie o złożeniu Prezydenta z urzędu?",
  "В месячный": "W miesięcznym",
  "В трёхмесячный": "W trzymiesięcznym",
  "В шестимесячный": "W sześciomiesięcznym",
  "Три месяца с момента выдвижения обвинения. Если Совет Федерации не уложится в срок, обвинение считается отклонённым.":
    "Trzy miesiące od wysunięcia oskarżenia. Jeśli Rada Federacji nie zmieści się w terminie, oskarżenie uważa się za oddalone.",
  "Где находится официальная резиденция Президента?":
    "Gdzie mieści się oficjalna rezydencja Prezydenta?",
  "В Доме Правительства": "W Domu Rządu",
  "В Московском Кремле": "Na Kremlu moskiewskim",
  "На Охотном Ряду": "Przy Ochotnym Riadzie",
  "На Большой Дмитровке": "Przy Bolszoj Dmitrowce",
  "Московский Кремль. Дом Правительства занимает Председатель Правительства, а Охотный Ряд и Большая Дмитровка — это Дума и Совет Федерации.":
    "Kreml moskiewski. Dom Rządu zajmuje Przewodniczący Rządu, a Ochotny Riad i Bolszaja Dmitrowka to Duma i Rada Federacji.",
  "Что Президент приносит при вступлении в должность?":
    "Co Prezydent składa przy obejmowaniu urzędu?",
  "Присягу народу": "Przysięgę wobec narodu",
  "Отчёт парламенту": "Sprawozdanie parlamentowi",
  "Клятву на Конституции перед судом": "Ślubowanie na Konstytucję przed sądem",
  "Ничего не требуется": "Niczego się nie wymaga",
  "Присягу, текст которой записан в статье 82. С этого момента он приступает к исполнению полномочий.":
    "Przysięgę, której tekst zapisano w artykule 82. Od tej chwili przystępuje do wykonywania swoich uprawnień.",
  "Как называется верхняя палата российского парламента?":
    "Jak nazywa się izba wyższa rosyjskiego parlamentu?",
  "Верховный Совет": "Rada Najwyższa",
  "Сенат республик": "Senat republik",
  "Совет Федерации — палата регионов. Государственная Дума нижняя, и именно в неё вносятся законопроекты.":
    "Rada Federacji — izba regionów. Duma Państwowa jest niższa i to do niej wnosi się projekty ustaw.",
  "На какой срок избирается Государственная Дума?": "Na jaki okres wybiera się Dumę Państwową?",
  "Пять лет — с поправки 2008 года; прежде было четыре. Президент избирается на шесть лет: эти две цифры легко перепутать.":
    "Na pięć lat — od poprawki z 2008 roku; wcześniej były cztery. Prezydenta wybiera się na sześć lat: te dwie liczby łatwo pomylić.",
  "Сколько депутатов Думы избирается по одномандатным округам?":
    "Ilu deputowanych Dumy wybiera się w okręgach jednomandatowych?",
  "Сто": "Stu",
  "Все четыреста пятьдесят": "Wszystkich czterystu pięćdziesięciu",
  "Половина, то есть 225. Другая половина проходит по партийным спискам в едином федеральном округе. Система называется смешанной.":
    "Połowę, czyli 225. Druga połowa wchodzi z list partyjnych w jednym okręgu federalnym. System nazywa się mieszanym.",
  "Сколько сенаторов вправе назначить Президент по поправкам 2020 года?":
    "Ilu senatorów może powołać Prezydent według poprawek z 2020 roku?",
  "Не более десяти": "Nie więcej niż dziesięciu",
  "Не более тридцати": "Nie więcej niż trzydziestu",
  "Не более пятидесяти": "Nie więcej niż pięćdziesięciu",
  "Ни одного": "Ani jednego",
  "Не более тридцати. К ним добавляются по два представителя от каждого субъекта и бывшие президенты, которые могут стать пожизненными сенаторами.":
    "Nie więcej niż trzydziestu. Dochodzą do nich po dwaj przedstawiciele każdego podmiotu oraz byli prezydenci, którzy mogą zostać dożywotnimi senatorami.",
  "Почему Совет Федерации нельзя распустить?": "Dlaczego Rady Federacji nie można rozwiązać?",
  "Так решил Конституционный Суд": "Tak postanowił Sąd Konstytucyjny",
  "Он не избирается целиком: его состав меняется постепенно, вслед за выборами в регионах":
    "Nie jest wybierana w całości: jej skład zmienia się stopniowo, w ślad za wyborami w regionach",
  "Его защищает международный договор": "Chroni ją umowa międzynarodowa",
  "Его можно распустить, но только с согласия Думы":
    "Można ją rozwiązać, ale tylko za zgodą Dumy",
  "У палаты нет единого срока полномочий, поэтому она работает непрерывно. Роспуск предусмотрен только для Государственной Думы, и лишь в двух случаях.":
    "Izba nie ma jednej kadencji, więc pracuje nieprzerwanie. Rozwiązanie przewidziano tylko dla Dumy Państwowej i to jedynie w dwóch przypadkach.",
  "С какого возраста можно стать сенатором Российской Федерации?":
    "Od jakiego wieku można zostać senatorem Federacji Rosyjskiej?",
  "С 25 лет": "Od 25 lat",
  "С тридцати лет. Двадцать один — для депутата Думы, тридцать пять — для Президента.":
    "Od trzydziestu lat. Dwadzieścia jeden dotyczy deputowanego Dumy, a trzydzieści pięć Prezydenta.",
  "Сколько времени есть у Совета Федерации на рассмотрение принятого Думой закона?":
    "Ile czasu ma Rada Federacji na rozpatrzenie ustawy uchwalonej przez Dumę?",
  "Пять дней": "Pięć dni",
  "Четырнадцать дней": "Czternaście dni",
  "Срок не ограничен": "Termin jest nieograniczony",
  "Четырнадцать дней. Пять дней — срок, в который Дума передаёт закон в верхнюю палату, а четырнадцать дней есть и у Президента на подписание.":
    "Czternaście dni. Pięć dni to termin, w którym Duma przekazuje ustawę izbie wyższej, a czternaście dni ma też Prezydent na podpisanie.",
  "Какой большинство нужно Думе, чтобы принять федеральный конституционный закон?":
    "Jakiej większości potrzebuje Duma, żeby uchwalić federalną ustawę konstytucyjną?",
  "Простое большинство": "Zwykłej większości",
  "Абсолютное большинство": "Bezwzględnej większości",
  "Две трети голосов депутатов, а в Совете Федерации — три четверти. Обычный федеральный закон принимается простым большинством.":
    "Dwóch trzecich głosów deputowanych, a w Radzie Federacji trzech czwartych. Zwykłą ustawę federalną uchwala się zwykłą większością.",
  "Как преодолевается вето Президента?": "Jak przełamuje się weto Prezydenta?",
  "Повторным голосованием только в Думе": "Ponownym głosowaniem tylko w Dumie",
  "Двумя третями голосов в обеих палатах": "Dwiema trzecimi głosów w obu izbach",
  "Решением Конституционного Суда": "Orzeczeniem Sądu Konstytucyjnego",
  "Вето преодолеть нельзя": "Weta nie da się przełamać",
  "Обе палаты должны повторно принять закон в прежней редакции двумя третями голосов, после чего Президент обязан его подписать в течение семи дней.":
    "Obie izby muszą ponownie uchwalić ustawę w dawnym brzmieniu dwiema trzecimi głosów, po czym Prezydent ma obowiązek podpisać ją w ciągu siedmiu dni.",
  "Какие законы Совет Федерации обязан рассмотреть непременно?":
    "Jakie ustawy Rada Federacji musi rozpatrzyć obowiązkowo?",
  "Все без исключения": "Wszystkie bez wyjątku",
  "О бюджете, налогах, ратификации договоров, границе, войне и мире":
    "O budżecie, podatkach, ratyfikacji umów, granicy, wojnie i pokoju",
  "Только уголовные": "Tylko karne",
  "Только те, что внёс Президент": "Tylko te, które wniósł Prezydent",
  "Перечень в статье 106. Остальные законы, не рассмотренные в четырнадцатидневный срок, считаются одобренными молчанием.":
    "Wykaz jest w artykule 106. Pozostałe ustawy, nierozpatrzone w czternastodniowym terminie, uważa się za zatwierdzone milczeniem.",
  "Кто объявляет амнистию?": "Kto ogłasza amnestię?",
  "Государственная Дума. Помилование в отношении конкретного человека — полномочие Президента: два разных акта и два разных органа.":
    "Duma Państwowa. Ułaskawienie wobec konkretnego człowieka jest uprawnieniem Prezydenta: dwa różne akty i dwa różne organy.",
  "Кто назначает выборы Президента Российской Федерации?":
    "Kto zarządza wybory Prezydenta Federacji Rosyjskiej?",
  "Центральная избирательная комиссия": "Centralna Komisja Wyborcza",
  "Совет Федерации. А выборы Государственной Думы, наоборот, назначает Президент: полномочия здесь намеренно перекрещены.":
    "Rada Federacji. A wybory do Dumy Państwowej zarządza odwrotnie Prezydent: uprawnienia są tu skrzyżowane celowo.",
  "В каких случаях палаты Федерального Собрания собираются совместно?":
    "W jakich przypadkach izby Zgromadzenia Federalnego zbierają się wspólnie?",
  "Каждую неделю": "Co tydzień",
  "Для посланий Президента и выступлений глав иностранных государств":
    "Na orędzia Prezydenta i wystąpienia głów obcych państw",
  "Для принятия любого закона": "Przy uchwalaniu każdej ustawy",
  "Никогда": "Nigdy",
  "По общему правилу палаты заседают раздельно. Совместные заседания — исключение, названное в статье 100.":
    "Co do zasady izby obradują oddzielnie. Posiedzenia wspólne są wyjątkiem wskazanym w artykule 100.",
  "Кто входит в состав Правительства?": "Kto wchodzi w skład Rządu?",
  "Председатель, его заместители и федеральные министры":
    "Przewodniczący, jego zastępcy i ministrowie federalni",
  "Президент и министры": "Prezydent i ministrowie",
  "Депутаты правящей партии": "Deputowani partii rządzącej",
  "Главы субъектов Федерации": "Szefowie podmiotów Federacji",
  "Состав определён статьёй 110. Президент в Правительство не входит: он глава государства, а не глава правительства.":
    "Skład określa artykuł 110. Prezydent nie wchodzi w skład Rządu: jest głową państwa, a nie szefem rządu.",
  "Какую власть осуществляет Правительство?": "Jaką władzę sprawuje Rząd?",
  "Законодательную": "Ustawodawczą",
  "Исполнительную": "Wykonawczą",
  "Судебную": "Sądowniczą",
  "Учредительную": "Ustrojodawczą",
  "Исполнительную. Законодательную осуществляет Федеральное Собрание, судебную — суды: разделение закреплено статьёй 10.":
    "Wykonawczą. Ustawodawczą sprawuje Zgromadzenie Federalne, a sądowniczą sądy: podział ustanawia artykuł 10.",
  "Как изменилась роль Думы при назначении Председателя Правительства после 2020 года?":
    "Jak zmieniła się rola Dumy przy powoływaniu Przewodniczącego Rządu po 2020 roku?",
  "Она перестала участвовать": "Przestała w tym uczestniczyć",
  "Вместо «согласия» Дума теперь «утверждает» кандидатуру":
    "Zamiast „zgody” Duma teraz „zatwierdza” kandydaturę",
  "Она получила право сама выдвигать кандидата":
    "Dostała prawo samodzielnego wysuwania kandydata",
  "Ничего не изменилось": "Nic się nie zmieniło",
  "Формулировка стала жёстче: Президент назначает Председателя после утверждения Думой. Право трижды отклонить кандидатуру, с последующим роспуском, при этом сохранилось.":
    "Sformułowanie stało się mocniejsze: Prezydent powołuje Przewodniczącego po zatwierdzeniu przez Dumę. Prawo trzykrotnego odrzucenia kandydatury, z następującym po nim rozwiązaniem izby, przy tym pozostało.",
  "Кого из министров Дума НЕ утверждает?": "Którego z ministrów Duma NIE zatwierdza?",
  "Министра финансов": "Ministra finansów",
  "Министра обороны": "Ministra obrony",
  "Министра просвещения": "Ministra oświaty",
  "Министра транспорта": "Ministra transportu",
  "Руководителей силового блока — обороны, внутренних дел, иностранных дел, юстиции, спецслужб — назначает Президент после консультаций с Советом Федерации.":
    "Szefów resortów siłowych — obrony, spraw wewnętrznych, spraw zagranicznych, sprawiedliwości, służb specjalnych — powołuje Prezydent po konsultacjach z Radą Federacji.",
  "Кто разрабатывает и представляет федеральный бюджет?":
    "Kto opracowuje i przedkłada budżet federalny?",
  "Центральный банк": "Bank Centralny",
  "Счётная палата": "Izba Obrachunkowa",
  "Правительство разрабатывает и вносит бюджет, а утверждает его парламент законом. Счётная палата проверяет исполнение.":
    "Rząd opracowuje i wnosi budżet, a uchwala go parlament w formie ustawy. Izba Obrachunkowa kontroluje wykonanie.",
  "Что происходит, если Дума повторно выразит недоверие Правительству в течение трёх месяцев?":
    "Co się dzieje, jeśli Duma po raz drugi w ciągu trzech miesięcy wyrazi Rządowi wotum nieufności?",
  "Правительство обязано уйти в отставку": "Rząd musi podać się do dymisji",
  "Президент объявляет об отставке Правительства либо распускает Думу":
    "Prezydent ogłasza dymisję Rządu albo rozwiązuje Dumę",
  "Вопрос передаётся в Совет Федерации": "Sprawa trafia do Rady Federacji",
  "Недоверие не влечёт последствий": "Wotum nieufności nie pociąga za sobą skutków",
  "Выбор остаётся за Президентом, и это второе из двух конституционных оснований роспуска Думы. Первое — трёхкратное отклонение кандидатуры Председателя.":
    "Wybór należy do Prezydenta i jest to druga z dwóch konstytucyjnych podstaw rozwiązania Dumy. Pierwszą jest trzykrotne odrzucenie kandydatury Przewodniczącego.",
  "Может ли Правительство само поставить перед Думой вопрос о доверии?":
    "Czy Rząd może sam postawić przed Dumą kwestię wotum zaufania?",
  "Да": "Tak",
  "Нет": "Nie",
  "Только с согласия Президента": "Tylko za zgodą Prezydenta",
  "Только раз в год": "Tylko raz w roku",
  "Может, и это зеркальная процедура к недоверию. При отказе в доверии Президент в течение семи дней принимает решение об отставке Правительства или о роспуске Думы.":
    "Może, a jest to procedura lustrzana wobec wotum nieufności. W razie odmowy zaufania Prezydent w ciągu siedmiu dni rozstrzyga o dymisji Rządu albo o rozwiązaniu Dumy.",
  "Кто вправе отменить постановление Правительства?": "Kto może uchylić rozporządzenie Rządu?",
  "Президент, если оно противоречит Конституции, законам или его указам":
    "Prezydent, jeśli jest ono sprzeczne z Konstytucją, ustawami albo jego dekretami",
  "Никто": "Nikt",
  "Это одна из связок между Президентом и исполнительной властью. Постановления обязательны на всей территории, но стоят ниже Конституции, законов и указов.":
    "To jedno z wiązań między Prezydentem a władzą wykonawczą. Rozporządzenia obowiązują na całym terytorium, ale stoją niżej niż Konstytucja, ustawy i dekrety.",
  "Как в обиходе называют Дом Правительства в Москве?":
    "Jak potocznie nazywa się Dom Rządu w Moskwie?",
  "Белый дом": "Biały Dom",
  "Серый дом": "Szary Dom",
  "Красный дом": "Czerwony Dom",
  "Дом Советов": "Dom Rad",
  "Белый дом, по цвету здания на Краснопресненской набережной. Кремль — резиденция Президента, а не Правительства.":
    "Biały Dom, od koloru gmachu na Nabrzeżu Krasnopresnieńskim. Kreml jest rezydencją Prezydenta, a nie Rządu.",
  "Какая из этих сфер названа в статье 114 среди задач Правительства?":
    "Którą z tych dziedzin wymienia artykuł 114 wśród zadań Rządu?",
  "Толкование Конституции": "Wykładnię Konstytucji",
  "Единая политика в области культуры, науки, образования и здравоохранения":
    "Jednolitą politykę w dziedzinie kultury, nauki, oświaty i ochrony zdrowia",
  "Назначение судей": "Powoływanie sędziów",
  "Объявление амнистии": "Ogłaszanie amnestii",
  "Толкует Конституцию Конституционный Суд, судей назначает Совет Федерации, амнистию объявляет Дума. Правительство отвечает за исполнение и за отраслевую политику.":
    "Konstytucję wykłada Sąd Konstytucyjny, sędziów powołuje Rada Federacji, amnestię ogłasza Duma. Rząd odpowiada za wykonanie i za politykę branżową.",
  "Применялась ли когда-нибудь норма о роспуске Думы после трёхкратного отклонения кандидатуры премьера?":
    "Czy kiedykolwiek zastosowano przepis o rozwiązaniu Dumy po trzykrotnym odrzuceniu kandydatury premiera?",
  "Да, дважды": "Tak, dwa razy",
  "Нет, ни разу": "Nie, ani razu",
  "Да, в 1998 году": "Tak, w 1998 roku",
  "Она была отменена в 2020 году": "Uchylono go w 2020 roku",
  "Ни разу. В 1998 году дело дошло до третьего голосования, но кандидатура была утверждена. Норма работает самим фактом своего существования.":
    "Ani razu. W 1998 roku doszło do trzeciego głosowania, ale kandydaturę zatwierdzono. Przepis działa samym faktem swojego istnienia.",
  "Влечёт ли избрание новой Государственной Думы отставку Правительства?":
    "Czy wybór nowej Dumy Państwowej pociąga za sobą dymisję Rządu?",
  "Да, автоматически": "Tak, automatycznie",
  "Нет: Правительство слагает полномочия перед вновь избранным Президентом":
    "Nie: Rząd składa swoje uprawnienia przed nowo wybranym Prezydentem",
  "Да, если сменилось большинство": "Tak, jeśli zmieniła się większość",
  "Решает Совет Федерации": "Rozstrzyga Rada Federacji",
  "Полномочия слагаются перед Президентом, а не перед Думой. Смена состава нижней палаты сама по себе судьбу Правительства не решает.":
    "Uprawnienia składa się przed Prezydentem, a nie przed Dumą. Zmiana składu izby niższej sama w sobie o losie Rządu nie rozstrzyga.",
  "Где находится Дом Правительства?": "Gdzie mieści się Dom Rządu?",
  "На Краснопресненской набережной": "Na Nabrzeżu Krasnopresnieńskim",
  "В Кремле": "Na Kremlu",
  "На Краснопресненской набережной. Охотный Ряд — Государственная Дума, Большая Дмитровка — Совет Федерации, Кремль — Президент.":
    "Na Nabrzeżu Krasnopresnieńskim. Ochotny Riad to Duma Państwowa, Bolszaja Dmitrowka to Rada Federacji, a Kreml to Prezydent.",
  "Что прямо запрещает статья 118 Конституции?":
    "Czego wprost zakazuje artykuł 118 Konstytucji?",
  "Суд присяжных": "Sądu przysięgłych",
  "Создание чрезвычайных судов": "Tworzenia sądów nadzwyczajnych",
  "Апелляцию по уголовным делам": "Apelacji w sprawach karnych",
  "Участие граждан в правосудии": "Udziału obywateli w wymiarze sprawiedliwości",
  "Чрезвычайные суды не допускаются. Суд присяжных, наоборот, прямо предусмотрен Конституцией как форма участия граждан в правосудии.":
    "Sądy nadzwyczajne są niedopuszczalne. Sąd przysięgłych, przeciwnie, Konstytucja przewiduje wprost jako formę udziału obywateli w wymiarze sprawiedliwości.",
  "Каким трём требованиям должен отвечать судья?": "Jakim trzem wymogom musi odpowiadać sędzia?",
  "Возраст 25 лет, высшее юридическое образование, стаж пять лет":
    "Wiek 25 lat, wyższe wykształcenie prawnicze, pięcioletni staż",
  "Возраст 30 лет, любое высшее образование, стаж три года":
    "Wiek 30 lat, dowolne wyższe wykształcenie, trzyletni staż",
  "Возраст 21 год, юридическое образование, без требований к стажу":
    "Wiek 21 lat, wykształcenie prawnicze, bez wymogu stażu",
  "Возраст 35 лет, учёная степень, стаж десять лет":
    "Wiek 35 lat, stopień naukowy, dziesięcioletni staż",
  "Для высших судов требования выше, но это общий минимум по статье 119. Судьи независимы, несменяемы и неприкосновенны.":
    "Wobec sądów najwyższych wymogi są wyższe, ale to ogólne minimum z artykułu 119. Sędziowie są niezawiśli, nieusuwalni i nietykalni.",
  "К чьей системе относятся мировые судьи?": "Do czyjego systemu należą sędziowie pokoju?",
  "К федеральным судам": "Do sądów federalnych",
  "К судам субъектов Федерации": "Do sądów podmiotów Federacji",
  "К муниципальным органам": "Do organów samorządu",
  "К арбитражной ветви": "Do pionu arbitrażowego",
  "Мировые судьи — суды субъектов, а не федеральные. Они рассматривают самые простые гражданские и часть уголовных дел.":
    "Sędziowie pokoju to sądy podmiotów, a nie federalne. Rozpoznają najprostsze sprawy cywilne i część spraw karnych.",
  "Какие споры рассматривают арбитражные суды?": "Jakie spory rozpoznają sądy arbitrażowe?",
  "Уголовные дела": "Sprawy karne",
  "Экономические споры между организациями и предпринимателями":
    "Spory gospodarcze między organizacjami a przedsiębiorcami",
  "Семейные дела": "Sprawy rodzinne",
  "Жалобы на законы": "Skargi na ustawy",
  "Это отдельная ветвь внутри судебной системы. Жалобы на законы рассматривает Конституционный Суд, а уголовные дела — суды общей юрисдикции.":
    "To osobny pion wewnątrz systemu sądowego. Skargi na ustawy rozpoznaje Sąd Konstytucyjny, a sprawy karne sądy powszechne.",
  "Через сколько инстанций обычно проходит дело?":
    "Przez ile instancji zwykle przechodzi sprawa?",
  "Через одну": "Przez jedną",
  "Через две": "Przez dwie",
  "Через три": "Przez trzy",
  "Через пять": "Przez pięć",
  "Первая инстанция, апелляция и кассация. Есть ещё надзорная инстанция в Верховном Суде, но туда доходят немногие дела.":
    "Pierwsza instancja, apelacja i kasacja. Jest jeszcze instancja nadzorcza w Sądzie Najwyższym, ale dociera tam niewiele spraw.",
  "Зачем в 2019 году создали отдельные кассационные и апелляционные суды?":
    "Po co w 2019 roku utworzono osobne sądy kasacyjne i apelacyjne?",
  "Чтобы разгрузить мировых судей": "Żeby odciążyć sędziów pokoju",
  "Чтобы проверка шла не в том же регионе, где выносилось решение":
    "Żeby kontrola nie odbywała się w tym samym regionie, w którym zapadło orzeczenie",
  "Чтобы заменить арбитражные суды": "Żeby zastąpić sądy arbitrażowe",
  "Чтобы сократить число инстанций": "Żeby zmniejszyć liczbę instancji",
  "Прежде апелляцию на решение областного суда рассматривал тот же областной суд другим составом. Окружные суды разорвали эту связку.":
    "Wcześniej apelację od orzeczenia sądu obwodowego rozpoznawał ten sam sąd obwodowy w innym składzie. Sądy okręgowe zerwały to wiązanie.",
  "Какие дела относятся к ведению Верховного Суда?":
    "Jakie sprawy należą do właściwości Sądu Najwyższego?",
  "Гражданские, уголовные, административные и экономические споры":
    "Cywilne, karne, administracyjne i spory gospodarcze",
  "Только споры между органами власти": "Tylko spory między organami władzy",
  "Только жалобы на законы": "Tylko skargi na ustawy",
  "После упразднения Высшего Арбитражного Суда в 2014 году экономические споры тоже перешли к нему. Жалобы на законы остались у Конституционного Суда.":
    "Po zniesieniu Najwyższego Sądu Arbitrażowego w 2014 roku spory gospodarcze też do niego przeszły. Skargi na ustawy zostały przy Sądzie Konstytucyjnym.",
  "Какое значение имеют разъяснения Верховного Суда по вопросам судебной практики?":
    "Jakie znaczenie mają wyjaśnienia Sądu Najwyższego w kwestiach praktyki sądowej?",
  "Они носят рекомендательный характер и почти не используются":
    "Mają charakter zalecenia i prawie się ich nie stosuje",
  "Они фактически определяют, как нижестоящие суды читают закон":
    "Faktycznie rozstrzygają, jak sądy niższe czytają ustawę",
  "Они имеют силу федерального закона": "Mają moc ustawy federalnej",
  "Они обязательны только для арбитражных судов": "Wiążą tylko sądy arbitrażowe",
  "Формально это разъяснения, а не нормы. На практике постановления Пленума задают единообразие и решают, какое толкование закона будет применяться по всей стране.":
    "Formalnie są to wyjaśnienia, a nie normy. W praktyce uchwały pełnego składu narzucają jednolitość i rozstrzygają, która wykładnia ustawy będzie stosowana w całym kraju.",
  "Что происходит с нормой, признанной Конституционным Судом неконституционной?":
    "Co dzieje się z przepisem uznanym przez Sąd Konstytucyjny za niezgodny z Konstytucją?",
  "Она утрачивает силу": "Traci moc",
  "Она применяется до отмены парламентом": "Stosuje się go do czasu uchylenia przez parlament",
  "Она действует ещё год": "Obowiązuje jeszcze rok",
  "Её применение решает каждый суд отдельно": "O jego stosowaniu rozstrzyga każdy sąd osobno",
  "Норма утрачивает силу, и отдельного решения парламента для этого не требуется. Законодателю остаётся привести закон в порядок.":
    "Przepis traci moc i osobne rozstrzygnięcie parlamentu nie jest do tego potrzebne. Ustawodawcy pozostaje doprowadzić ustawę do porządku.",
  "Какое из этих полномочий принадлежит Конституционному Суду?":
    "Które z tych uprawnień należy do Sądu Konstytucyjnego?",
  "Пересмотр приговоров по уголовным делам": "Wzruszanie wyroków w sprawach karnych",
  "Рассмотрение экономических споров": "Rozpoznawanie sporów gospodarczych",
  "Назначение судей районных судов": "Powoływanie sędziów sądów rejonowych",
  "Толкование Конституции, разрешение споров о компетенции, проверка конституционности законов. Приговоры и экономические споры — к Верховному Суду.":
    "Wykładnia Konstytucji, rozstrzyganie sporów kompetencyjnych, badanie zgodności ustaw z Konstytucją. Wyroki i spory gospodarcze należą do Sądu Najwyższego.",
  "Кто назначает Генерального прокурора?": "Kto powołuje Prokuratora Generalnego?",
  "Президент единолично": "Prezydent jednoosobowo",
  "Совет Федерации по представлению Президента": "Rada Federacji na wniosek Prezydenta",
  "Совет Федерации по представлению Президента — тот же порядок, что и для судей высших судов. Прокуратура при этом судом не является.":
    "Rada Federacji na wniosek Prezydenta — ten sam tryb co przy sędziach sądów najwyższych. Prokuratura nie jest przy tym sądem.",
  "Как устроена прокуратура по статье 129?":
    "Jak zbudowana jest prokuratura według artykułu 129?",
  "Как единая централизованная система с подчинением вышестоящим прокурорам":
    "Jako jednolity scentralizowany system z podległością prokuratorom wyższego stopnia",
  "Как система независимых региональных прокуратур":
    "Jako system niezależnych prokuratur regionalnych",
  "Как подразделение Министерства юстиции": "Jako komórka Ministerstwa Sprawiedliwości",
  "Как часть судебной системы": "Jako część systemu sądowego",
  "Единая централизованная система во главе с Генеральным прокурором. Она надзирает за соблюдением законов и поддерживает обвинение, но не судит.":
    "Jednolity scentralizowany system na czele z Prokuratorem Generalnym. Nadzoruje przestrzeganie ustaw i popiera oskarżenie, ale nie sądzi.",
  "Кем осуществляется правосудие в России?": "Kto sprawuje w Rosji wymiar sprawiedliwości?",
  "Только судом": "Wyłącznie sąd",
  "Судом и прокуратурой": "Sąd i prokuratura",
  "Судом и следственными органами": "Sąd i organy śledcze",
  "Судом и органами власти субъектов": "Sąd i organy władzy podmiotów",
  "Статья 118: правосудие осуществляется только судом. Прокуратура и следствие участвуют в процессе, но приговор выносит суд.":
    "Artykuł 118: wymiar sprawiedliwości sprawuje wyłącznie sąd. Prokuratura i śledztwo biorą udział w procesie, ale wyrok wydaje sąd.",
  "С какого возраста наступает право избирать?":
    "Od jakiego wieku przysługuje prawo wybierania?",
  "Активное избирательное право — с восемнадцати лет, вместе с совершеннолетием. Право быть избранным зависит от должности.":
    "Czynne prawo wyborcze — od osiemnastego roku życia, wraz z pełnoletnością. Prawo bycia wybranym zależy od urzędu.",
  "С какого возраста можно быть избранным главой субъекта Федерации?":
    "Od jakiego wieku można zostać wybranym na szefa podmiotu Federacji?",
  "С тридцати лет — тот же порог, что и для сенатора. Тридцать пять требуется только для Президента.":
    "Od trzydziestu lat — ten sam próg co dla senatora. Trzydzieści pięć wymagane jest tylko wobec Prezydenta.",
  "Кто по статье 32 не имеет права избирать и быть избранным?":
    "Kto według artykułu 32 nie ma prawa wybierania i bycia wybranym?",
  "Все, кто находится под следствием": "Wszyscy, przeciw którym toczy się śledztwo",
  "Признанные судом недееспособными и содержащиеся в местах лишения свободы по приговору":
    "Uznani przez sąd za niezdolnych do czynności prawnych i przebywający w zakładach karnych na mocy wyroku",
  "Не имеющие постоянной регистрации": "Nieposiadający stałego zameldowania",
  "Не служившие в армии": "Ci, którzy nie służyli w wojsku",
  "Два исключения, и оба требуют решения суда. Заключение под стражу до приговора права голоса не лишает.":
    "Dwa wyjątki, a każdy wymaga orzeczenia sądu. Tymczasowe aresztowanie przed wyrokiem prawa głosu nie odbiera.",
  "Какой орган возглавляет систему избирательных комиссий?":
    "Jaki organ stoi na czele systemu komisji wyborczych?",
  "Министерство юстиции": "Ministerstwo Sprawiedliwości",
  "Общественная палата": "Izba Społeczna",
  "ЦИК, а ниже — комиссии субъектов, территориальные и участковые. На участках работают наблюдатели от кандидатов и партий.":
    "CIK, Centralna Komisja Wyborcza, a niżej komisje podmiotów, terytorialne i obwodowe. W lokalach pracują obserwatorzy kandydatów i partii.",
  "Что статья 3 называет высшим непосредственным выражением власти народа?":
    "Co artykuł 3 nazywa najwyższym bezpośrednim wyrazem władzy narodu?",
  "Референдум и свободные выборы": "Referendum i wolne wybory",
  "Заседания парламента": "Posiedzenia parlamentu",
  "Обращения к Президенту": "Wystąpienia do Prezydenta",
  "Работу общественных организаций": "Pracę organizacji społecznych",
  "Оба названы прямо и в одном ряду. Народ осуществляет власть непосредственно и через органы государственной власти и местного самоуправления.":
    "Oba wymieniono wprost i w jednym rzędzie. Naród sprawuje władzę bezpośrednio oraz przez organy władzy państwowej i samorządu.",
  "Сколько раз проводился общероссийский референдум?":
    "Ile razy przeprowadzono ogólnorosyjskie referendum?",
  "Ни разу": "Ani razu",
  "Дважды": "Dwa razy",
  "Пять раз": "Pięć razy",
  "Каждые пять лет": "Co pięć lat",
  "В 1991 и 1993 годах. Голосование по поправкам 2020 года проводилось в особом порядке и референдумом в строгом смысле не называлось.":
    "W 1991 i 1993 roku. Głosowanie nad poprawkami z 2020 roku odbyło się w trybie szczególnym i referendum w ścisłym znaczeniu go nie nazywano.",
  "Какое требование закон предъявляет к политической партии?":
    "Jaki wymóg stawia ustawa partii politycznej?",
  "Наличие региональных отделений более чем в половине субъектов":
    "Posiadanie oddziałów regionalnych w ponad połowie podmiotów",
  "Наличие представительства во всех муниципалитетах":
    "Posiadanie przedstawicielstwa we wszystkich gminach",
  "Согласие Совета Федерации": "Zgodę Rady Federacji",
  "Существование не менее десяти лет": "Istnienie od co najmniej dziesięciu lat",
  "Закон о политических партиях требует определённой численности и региональных отделений более чем в половине субъектов Федерации.":
    "Ustawa o partiach politycznych wymaga określonej liczby członków i oddziałów regionalnych w ponad połowie podmiotów Federacji.",
  "Какая глава Конституции посвящена местному самоуправлению?":
    "Który rozdział Konstytucji poświęcono samorządowi lokalnemu?",
  "Третья": "Trzeci",
  "Шестая": "Szósty",
  "Восьмая": "Ósmy",
  "Девятая": "Dziewiąty",
  "Восьмая глава, статьи 130–133. Отдельная глава подчёркивает, что местное самоуправление не является нижним этажом государственной власти.":
    "Rozdział ósmy, artykuły 130–133. Osobny rozdział podkreśla, że samorząd lokalny nie jest najniższym piętrem władzy państwowej.",
  "Какие из этих образований являются муниципальными?":
    "Które z tych jednostek są jednostkami samorządu?",
  "Городской округ, муниципальный округ, муниципальный район, поселение":
    "Okrąg miejski, okrąg gminny, rejon gminny, osiedle",
  "Область, край, республика": "Obwód, kraj, republika",
  "Федеральный округ и субъект": "Okrąg federalny i podmiot",
  "Регион и агломерация": "Region i aglomeracja",
  "Области, края и республики — субъекты Федерации, то есть государственный уровень. Федеральные округа вообще не предусмотрены Конституцией.":
    "Obwody, kraje i republiki to podmioty Federacji, czyli poziom państwowy. Okręgów federalnych Konstytucja w ogóle nie przewiduje.",
  "Что относится к вопросам местного значения?": "Co należy do spraw o znaczeniu lokalnym?",
  "Благоустройство, местные дороги, жилищно-коммунальное хозяйство":
    "Zagospodarowanie terenu, drogi lokalne, gospodarka komunalna",
  "Оборона и безопасность": "Obrona i bezpieczeństwo",
  "Уголовное законодательство": "Prawo karne",
  "Денежная эмиссия": "Emisja pieniądza",
  "Оборона, уголовное право и денежная эмиссия — исключительное ведение Федерации. Муниципалитет отвечает за то, что видно из окна.":
    "Obrona, prawo karne i emisja pieniądza to wyłączna właściwość Federacji. Gmina odpowiada za to, co widać z okna.",
  "На каком условии государственные полномочия могут быть переданы муниципалитету?":
    "Pod jakim warunkiem uprawnienia państwowe mogą zostać przekazane gminie?",
  "Только вместе с необходимыми для их исполнения средствами":
    "Tylko wraz ze środkami niezbędnymi do ich wykonania",
  "По решению главы муниципалитета": "Na mocy decyzji wójta",
  "Безвозмездно, как обязанность": "Nieodpłatnie, jako obowiązek",
  "Передача невозможна": "Przekazanie jest niemożliwe",
  "Наделение отдельными государственными полномочиями возможно законом и с передачей материальных и финансовых средств. Иначе обязанность повисла бы без денег.":
    "Powierzenie pojedynczych uprawnień państwowych jest możliwe ustawą i wraz z przekazaniem środków rzeczowych i finansowych. Inaczej obowiązek wisiałby bez pieniędzy.",
  "Кто назначает Уполномоченного по правам человека в Российской Федерации?":
    "Kto powołuje Rzecznika Praw Człowieka w Federacji Rosyjskiej?",
  "Государственная Дума. Омбудсмен работает независимо от органов власти, и у большинства субъектов есть собственный уполномоченный.":
    "Duma Państwowa. Rzecznik działa niezależnie od organów władzy, a większość podmiotów ma własnego rzecznika.",
  "Как избирается глава муниципального образования?":
    "Jak wybiera się szefa jednostki samorządowej?",
  "Порядок различается: прямые выборы, избрание депутатами или по конкурсу":
    "Tryb bywa różny: wybory bezpośrednie, wybór przez radnych albo konkurs",
  "Только прямыми выборами по всей стране": "Wyłącznie w wyborach bezpośrednich w całym kraju",
  "Его назначает губернатор": "Powołuje go gubernator",
  "Его назначает Президент": "Powołuje go Prezydent",
  "Способ определяют закон субъекта и устав муниципалитета, поэтому в соседних городах он может быть разным.":
    "Sposób określa ustawa podmiotu i statut gminy, dlatego w sąsiednich miastach może być inny.",
  "Как назывался торговый путь, вдоль которого выросла Киевская Русь?":
    "Jak nazywał się szlak handlowy, wzdłuż którego wyrosła Ruś Kijowska?",
  "Великий шёлковый путь": "Wielki Jedwabny Szlak",
  "Волжский путь": "Szlak wołżański",
  "Янтарный путь": "Szlak bursztynowy",
  "От Балтики по Волхову и Днепру к Чёрному морю и Константинополю. Города вырастали там, где стоило держать перевоз и склад: Новгород, Смоленск, Киев.":
    "Od Bałtyku Wołchowem i Dnieprem do Morza Czarnego i Konstantynopola. Miasta wyrastały tam, gdzie opłacało się trzymać przewóz i skład: Nowogród, Smoleńsk, Kijów.",
  "К какому году летопись относит призвание Рюрика?":
    "Do którego roku latopis odnosi powołanie Ruryka?",
  "К 862 году": "Do 862 roku",
  "К 882 году": "Do 882 roku",
  "К 988 году": "Do 988 roku",
  "К 1147 году": "Do 1147 roku",
  "862 год по «Повести временных лет». 882-й — объединение Новгорода и Киева Олегом, 988-й — Крещение Руси, 1147-й — первое упоминание Москвы.":
    "Rok 862 według „Powieści minionych lat”. Rok 882 to połączenie Nowogrodu i Kijowa przez Olega, 988 chrzest Rusi, a 1147 pierwsza wzmianka o Moskwie.",
  "Кто объединил Новгород и Киев под одной властью?":
    "Kto połączył Nowogród i Kijów pod jedną władzą?",
  "Рюрик": "Ruryk",
  "Олег": "Oleg",
  "Владимир": "Włodzimierz",
  "Олег в 882 году, и он же сделал Киев столицей. С этой даты принято вести начало Киевской Руси.":
    "Oleg w 882 roku, i to on uczynił Kijów stolicą. Od tej daty przyjęło się liczyć początek Rusi Kijowskiej.",
  "Какой князь крестил Русь?": "Który książę ochrzcił Ruś?",
  "Игорь": "Igor",
  "Святослав": "Światosław",
  "Князь Владимир, в 988 году. Решение было и религиозным, и политическим: страна входила в круг христианской Европы.":
    "Książę Włodzimierz, w 988 roku. Decyzja była zarazem religijna i polityczna: kraj wchodził w krąg chrześcijańskiej Europy.",
  "Кто создал славянскую азбуку?": "Kto stworzył alfabet słowiański?",
  "Кирилл и Мефодий": "Cyryl i Metody",
  "Нестор Летописец": "Nestor Latopisiec",
  "Кириллица создана в IX веке для перевода богослужебных книг на понятный славянам язык. Нестор — летописец, автор «Повести временных лет».":
    "Cyrylicę stworzono w IX wieku, żeby przełożyć księgi liturgiczne na język zrozumiały dla Słowian. Nestor był latopisem, autorem „Powieści minionych lat”.",
  "Что заменила Русская Правда в порядке наказаний?":
    "Co Ruska Prawda zastąpiła w porządku kar?",
  "Церковный суд": "Sąd cerkiewny",
  "Кровную месть": "Zemstę rodową",
  "Ордынский суд": "Sąd ordyński",
  "Суд веча": "Sąd wiecu",
  "Вместо мести устанавливались денежные штрафы, различавшиеся по состоянию потерпевшего. Свод дополнялся при потомках Ярослава.":
    "Zamiast zemsty ustanowiono kary pieniężne, zróżnicowane według stanu pokrzywdzonego. Zbiór uzupełniano za potomków Jarosława.",
  "С кем породнился Ярослав Мудрый через своих дочерей?":
    "Z kim spowinowacił się Jarosław Mądry przez swoje córki?",
  "С королями Франции, Норвегии и Венгрии": "Z królami Francji, Norwegii i Węgier",
  "С ханами степи": "Z chanami stepu",
  "С императорами Китая": "Z cesarzami Chin",
  "Ни с кем: браки заключались только внутри Руси":
    "Z nikim: małżeństwa zawierano tylko wewnątrz Rusi",
  "Русь была частью европейской династической сети, и киевский двор считался желанной партией. Это одна из причин, по которым XI век называют временем расцвета.":
    "Ruś była częścią europejskiej sieci dynastycznej, a dwór kijowski uchodził za pożądaną partię. To jedna z przyczyn, dla których wiek XI nazywa się czasem rozkwitu.",
  "Чем управлялась Новгородская республика?": "Czym rządziła się republika nowogrodzka?",
  "Наследственным князем": "Dziedzicznym księciem",
  "Вечем — собранием горожан, приглашавшим и изгонявшим князя":
    "Wiecem — zgromadzeniem mieszczan, które księcia zapraszało i wypędzało",
  "Митрополитом": "Metropolitą",
  "Ханским наместником": "Namiestnikiem chana",
  "Новгород ближе к городской республике, чем к княжеству: князя нанимали как военного руководителя и могли прогнать. Эта традиция кончится в 1478 году.":
    "Nowogród bliższy był republice miejskiej niż księstwu: księcia najmowano jako dowódcę wojskowego i można go było przepędzić. Ta tradycja skończy się w 1478 roku.",
  "Куда сместился центр силы русских земель в XII веке?":
    "Dokąd przesunął się ośrodek siły ziem ruskich w XII wieku?",
  "На юго-запад, в Галицко-Волынскую землю": "Na południowy zachód, do ziemi halicko-wołyńskiej",
  "На северо-восток, во Владимиро-Суздальскую землю":
    "Na północny wschód, do ziemi włodzimiersko-suzdalskiej",
  "На север, в Новгород": "Na północ, do Nowogrodu",
  "Он остался в Киеве": "Pozostał w Kijowie",
  "При Андрее Боголюбском центр переместился на северо-восток. Из этих земель через двести лет вырастет Москва.":
    "Za Andrzeja Bogolubskiego ośrodek przesunął się na północny wschód. Z tych ziem dwieście lat później wyrośnie Moskwa.",
  "О чём говорит «Слово о полку Игореве»?": "O czym opowiada „Słowo o wyprawie Igora”?",
  "О крещении Руси": "O chrzcie Rusi",
  "О неудачном походе против половцев и о разобщённости князей":
    "O nieudanej wyprawie przeciw Połowcom i o rozbiciu książąt",
  "О призвании варягов": "O powołaniu Waregów",
  "О Куликовской битве": "O bitwie na Kulikowym Polu",
  "Тема поэмы — та же беда, что и у Любечского съезда: князья не действуют вместе. Единственный известный список сгорел в московском пожаре 1812 года.":
    "Tematem poematu jest ta sama bieda co przy zjeździe lubeckim: książęta nie działają razem. Jedyny znany odpis spłonął w pożarze Moskwy w 1812 roku.",
  "В каком году впервые упоминается Москва?": "W którym roku po raz pierwszy wspomniano Moskwę?",
  "В 1147 году": "W 1147 roku",
  "В 1237 году": "W 1237 roku",
  "1147 год. Тогда это небольшой пункт на окраине Владимиро-Суздальской земли; до превращения в центр страны пройдёт около двухсот лет.":
    "Rok 1147. Wtedy jest to niewielki punkt na skraju ziemi włodzimiersko-suzdalskiej; do przemiany w ośrodek kraju minie około dwustu lat.",
  "В каком году пал Киев под ударом войск Батыя?":
    "W którym roku Kijów padł pod ciosem wojsk Batu-chana?",
  "В 1223 году": "W 1223 roku",
  "1240 год. Нашествие началось в 1237-м с Рязани, а 1242-й — это Ледовое побоище, событие западного направления.":
    "Rok 1240. Najazd zaczął się w 1237 od Riazania, a 1242 to bitwa na lodzie, wydarzenie kierunku zachodniego.",
  "Почему княжества не смогли выставить против Батыя общее войско?":
    "Dlaczego księstwa nie zdołały wystawić przeciw Batu-chanowi wspólnego wojska?",
  "Не хватало оружия": "Brakowało broni",
  "Из-за раздробленности, закреплённой Любечским съездом":
    "Z powodu rozbicia dzielnicowego, utrwalonego zjazdem lubeckim",
  "Князья были в походе на запад": "Książęta byli na wyprawie na zachód",
  "Мешала зима": "Przeszkodziła zima",
  "Съезд 1097 года закрепил разделение земель между княжескими линиями, и через сто сорок лет каждое княжество оборонялось поодиночке.":
    "Zjazd z 1097 roku utrwalił podział ziem między linie książęce i sto czterdzieści lat później każde księstwo broniło się w pojedynkę.",
  "Как называлась дань, которую русские земли платили Орде?":
    "Jak nazywała się danina, którą ziemie ruskie płaciły Ordzie?",
  "Оброк": "Obrok",
  "Выход": "Wychód",
  "Тягло": "Tiagło",
  "Полюдье": "Polud'je",
  "Выход. Собирали его сначала ханские сборщики — баскаки, а позже это право перешло к самим князьям, и с него началось возвышение Москвы.":
    "Wychód. Zbierali go najpierw poborcy chańscy — baskakowie, a później prawo to przeszło na samych książąt i od niego zaczęło się wyniesienie Moskwy.",
  "Кто такие баскаки?": "Kim byli baskakowie?",
  "Ханские сборщики дани": "Chańskimi poborcami daniny",
  "Русские воеводы": "Ruskimi wojewodami",
  "Купцы Великого Новгорода": "Kupcami Wielkiego Nowogrodu",
  "Монахи-летописцы": "Mnichami latopisami",
  "Ордынские чиновники, собиравшие выход на местах. Позже сбор передали князьям, и это оказалось решающим преимуществом для Москвы.":
    "Urzędnicy ordyńscy, którzy zbierali wychód na miejscu. Później pobór przekazano książętom i okazało się to rozstrzygającą przewagą Moskwy.",
  "Где Александр Невский разбил шведов в 1240 году?":
    "Gdzie Aleksander Newski rozbił Szwedów w 1240 roku?",
  "На Чудском озере": "Nad jeziorem Czudzkim",
  "На Неве": "Nad Newą",
  "На Куликовом поле": "Na Kulikowym Polu",
  "На Угре": "Nad Ugrą",
  "На Неве, откуда и прозвище. Ледовое побоище на Чудском озере состоялось двумя годами позже, против Ливонского ордена.":
    "Nad Newą, stąd też przydomek. Bitwa na lodzie jeziora Czudzkiego rozegrała się dwa lata później, przeciw zakonowi inflanckiemu.",
  "Почему Александр Невский не воевал с Ордой?":
    "Dlaczego Aleksander Newski nie walczył z Ordą?",
  "Он был родственником хана": "Był krewnym chana",
  "Воевать одновременно на два фронта было невозможно":
    "Walka na dwa fronty naraz była niemożliwa",
  "Орда не претендовала на его земли": "Orda nie rościła sobie praw do jego ziem",
  "Ему запретил митрополит": "Zabronił mu metropolita",
  "С запада шли Орден и Швеция, с востока — Орда. Выбор в пользу соглашения с Ордой историки обсуждают до сих пор.":
    "Z zachodu szedł zakon i Szwecja, ze wschodu Orda. Wybór porozumienia z Ordą historycy roztrząsają do dziś.",
  "Какие два решения Ивана Калиты усилили Москву?":
    "Które dwie decyzje Iwana Kality wzmocniły Moskwę?",
  "Право собирать дань и перенос митрополичьей кафедры":
    "Prawo zbierania daniny i przeniesienie stolicy metropolitalnej",
  "Строительство флота и открытие университета": "Budowa floty i otwarcie uniwersytetu",
  "Отказ платить дань и союз с Литвой": "Odmowa płacenia daniny i sojusz z Litwą",
  "Введение земских соборов и Судебника": "Wprowadzenie soborów ziemskich i sudiebnika",
  "Деньги и церковный авторитет. Ни того, ни другого не давало географическое положение города — это был результат расчёта.":
    "Pieniądze i powaga Cerkwi. Ani jednego, ani drugiego nie dawało miastu jego położenie — to był wynik wyrachowania.",
  "Против кого сражалось войско Дмитрия Донского на Куликовом поле?":
    "Przeciw komu walczyło wojsko Dymitra Dońskiego na Kulikowym Polu?",
  "Против Батыя": "Przeciw Batu-chanowi",
  "Против Мамая": "Przeciw Mamajowi",
  "Против Ахмата": "Przeciw Achmatowi",
  "Против Тохтамыша": "Przeciw Tochtamyszowi",
  "Против Мамая. Тохтамыш сжёг Москву через два года после битвы, а Ахмат стоял на Угре ровно столетие спустя.":
    "Przeciw Mamajowi. Tochtamysz spalił Moskwę dwa lata po bitwie, a Achmat stanął nad Ugrą równo sto lat później.",
  "Сняла ли Куликовская битва ордынскую зависимость?":
    "Czy bitwa na Kulikowym Polu zniosła zależność od Ordy?",
  "Да, сразу же": "Tak, od razu",
  "Нет: через два года Тохтамыш сжёг Москву": "Nie: dwa lata później Tochtamysz spalił Moskwę",
  "Да, но только для Москвы": "Tak, ale tylko dla Moskwy",
  "Зависимости к тому времени уже не было": "Zależności już wtedy nie było",
  "Победа показала, что Орду можно побеждать, но зависимость продержалась ещё сто лет, до стояния на Угре в 1480 году.":
    "Zwycięstwo pokazało, że Ordę można pokonywać, ale zależność utrzymała się jeszcze sto lat, do stania nad Ugrą w 1480 roku.",
  "Кто присоединил Новгород к Московскому государству?":
    "Kto przyłączył Nowogród do państwa moskiewskiego?",
  "Иван Калита": "Iwan Kalita",
  "Дмитрий Донской": "Dymitr Doński",
  "Иван III в 1478 году. Он вывез вечевой колокол — символ городского самоуправления, и республиканская традиция Новгорода прервалась.":
    "Iwan III w 1478 roku. Wywiózł dzwon wiecowy — symbol miejskiego samorządu, i tradycja republikańska Nowogrodu się urwała.",
  "Какой титул принял Иван III?": "Jaki tytuł przyjął Iwan III?",
  "Царь": "Car",
  "Государь всея Руси": "Gosudar wszej Rusi",
  "Император": "Cesarz",
  "Великий хан": "Wielki chan",
  "«Государь всея Руси». Царём первым венчается Иван IV в 1547 году, а императором станет Пётр I в 1721-м.":
    "„Gosudar wszej Rusi”, władca całej Rusi. Na cara pierwszy koronuje się Iwan IV w 1547 roku, a cesarzem zostanie Piotr I w 1721.",
  "Сколько лет длилась ордынская зависимость?": "Ile lat trwała zależność od Ordy?",
  "Около ста лет": "Około stu lat",
  "Около ста сорока лет": "Około stu czterdziestu lat",
  "Около двухсот сорока лет": "Około dwustu czterdziestu lat",
  "Около трёхсот лет": "Około trzystu lat",
  "С 1240 по 1480 год — двести сорок лет. Это дольше, чем существовала Российская империя.":
    "Od 1240 do 1480 roku — dwieście czterdzieści lat. To dłużej, niż istniało Imperium Rosyjskie.",
  "Кто написал икону «Троица»?": "Kto napisał ikonę „Trójca Święta”?",
  "Феофан Грек": "Teofan Grek",
  "Дионисий": "Dionizy",
  "Симон Ушаков": "Symon Uszakow",
  "Андрей Рублёв, около 1425 года, для Троице-Сергиева монастыря. Икона стала образцом для нескольких поколений иконописцев.":
    "Andrzej Rublow, około 1425 roku, dla monasteru Troicko-Siergijewskiego. Ikona stała się wzorem dla kilku pokoleń ikonopisarzy.",
  "Какой герб появился при Иване III?": "Jaki herb pojawił się za Iwana III?",
  "Всадник с копьём": "Jeździec z włócznią",
  "Лев": "Lew",
  "Двуглавый орёл вошёл в русскую геральдику в конце XV века. Всадник — древний московский герб, который позже оказался на груди орла.":
    "Dwugłowy orzeł wszedł do heraldyki ruskiej pod koniec XV wieku. Jeździec to dawny herb Moskwy, który później znalazł się na piersi orła.",
  "Чем московский порядок наследования отличался от порядка в соседних княжествах?":
    "Czym moskiewski porządek dziedziczenia różnił się od porządku w sąsiednich księstwach?",
  "Наследование шло от отца к сыну, а не дробилось между братьями":
    "Dziedziczenie szło z ojca na syna, a nie dzieliło się między braci",
  "Наследника выбирало вече": "Następcę wybierało wiece",
  "Княжество делилось поровну между всеми детьми":
    "Księstwo dzielono po równo między wszystkie dzieci",
  "Наследника назначал хан": "Następcę wyznaczał chan",
  "Прямое наследование не давало владениям дробиться. Соседние княжества, наоборот, распадались с каждым поколением.":
    "Dziedziczenie w prostej linii nie pozwalało włościom się rozdrabniać. Sąsiednie księstwa przeciwnie, rozpadały się z każdym pokoleniem.",
  "В каком году Иван IV венчался на царство?": "W którym roku Iwan IV koronował się na cara?",
  "В 1497 году": "W 1497 roku",
  "В 1547 году": "W 1547 roku",
  "В 1552 году": "W 1552 roku",
  "1547 год. 1497-й — Судебник Ивана III, 1552-й — взятие Казани, 1480-й — стояние на Угре.":
    "Rok 1547. Rok 1497 to sudiebnik Iwana III, 1552 zdobycie Kazania, a 1480 stanie nad Ugrą.",
  "Что такое земский собор?": "Czym był sobór ziemski?",
  "Сословное собрание, созывавшееся по решению власти":
    "Zgromadzeniem stanowym, zwoływanym decyzją władzy",
  "Постоянный парламент": "Stałym parlamentem",
  "Собрание городских ремесленников": "Zgromadzeniem rzemieślników miejskich",
  "Собор собирался нерегулярно и представлял сословия, а не избирателей. Но именно он в 1613 году выбрал царя, и этот прецедент запомнился.":
    "Sobór zbierał się nieregularnie i przedstawiał stany, a nie wyborców. Ale to właśnie on w 1613 roku wybrał cara i ten precedens zapamiętano.",
  "Какое ханство было присоединено в 1552 году?": "Który chanat przyłączono w 1552 roku?",
  "Астраханское": "Astrachański",
  "Казанское": "Kazański",
  "Крымское": "Krymski",
  "Сибирское": "Syberyjski",
  "Казань в 1552-м, Астрахань в 1556-м, и Волга стала русской рекой на всём протяжении. Крым войдёт в состав России только в 1783 году.":
    "Kazań w 1552, Astrachań w 1556, i Wołga stała się rzeką rosyjską na całej długości. Krym wejdzie w skład Rosji dopiero w 1783 roku.",
  "Кто начал присоединение Сибири в 1580-е годы?":
    "Kto zaczął przyłączanie Syberii w latach osiemdziesiątych XVI wieku?",
  "Ермак": "Jermak",
  "Дежнёв": "Dieżniow",
  "Хабаров": "Chabarow",
  "Беринг": "Bering",
  "Отряд Ермака. Дежнёв в 1648 году пройдёт проливом между Азией и Америкой: путь до Тихого океана занял меньше века.":
    "Oddział Jermaka. Dieżniow w 1648 roku przejdzie cieśniną między Azją a Ameryką: droga do Oceanu Spokojnego zajęła niecały wiek.",
  "Что такое опричнина?": "Czym była opricznina?",
  "Особый удел царя с собственным войском, время казней и конфискаций":
    "Osobnym udziałem cara z własnym wojskiem, czasem egzekucji i konfiskat",
  "Система сбора налогов": "Systemem poboru podatków",
  "Свод законов Ивана IV": "Zbiorem praw Iwana IV",
  "Название царского двора": "Nazwą dworu carskiego",
  "С 1565 по 1572 год. Массовые казни, разгром Новгорода и разорение центральных уездов вместе с Ливонской войной подорвали хозяйство страны.":
    "Od 1565 do 1572 roku. Masowe egzekucje, pogrom Nowogrodu i zniszczenie powiatów środkowych wraz z wojną inflancką podkopały gospodarkę kraju.",
  "Что было учреждено в Москве в 1589 году?": "Co ustanowiono w Moskwie w 1589 roku?",
  "Синод": "Synod",
  "Земский собор": "Sobór ziemski",
  "Сенат": "Senat",
  "Патриаршество: русская церковь стала полностью самостоятельной. Пётр I упразднит его и заменит Синодом, а восстановят патриаршество в 1917 году.":
    "Patriarchat: cerkiew rosyjska stała się całkowicie samodzielna. Piotr I go zniesie i zastąpi Synodem, a patriarchat przywrócą w 1917 roku.",
  "Что такое Смутное время?": "Czym była wielka smuta?",
  "Период с 1598 по 1613 год: пресечение династии, самозванцы, голод и интервенция":
    "Okresem od 1598 do 1613 roku: wygaśnięcie dynastii, samozwańcy, głód i interwencja",
  "Годы опричнины": "Latami oprieczniny",
  "Церковный раскол XVII века": "Rozłamem cerkiewnym XVII wieku",
  "Восстание Пугачёва": "Powstaniem Pugaczowa",
  "Государство фактически перестало существовать: в Москве стоял иноземный гарнизон, а власть на местах распалась. Выход нашёлся снизу, через ополчение.":
    "Państwo faktycznie przestało istnieć: w Moskwie stała obca załoga, a władza w terenie się rozpadła. Wyjście znalazło się od dołu, przez pospolite ruszenie.",
  "Кто возглавил ополчение, освободившее Москву в 1612 году?":
    "Kto stanął na czele pospolitego ruszenia, które wyzwoliło Moskwę w 1612 roku?",
  "Минин и Пожарский": "Minin i Pożarski",
  "Иван Сусанин и Михаил Романов": "Iwan Susanin i Michał Romanow",
  "Ермак и Дежнёв": "Jermak i Dieżniow",
  "Никон и Аввакум": "Nikon i Awwakum",
  "Земский староста Кузьма Минин собрал средства, князь Дмитрий Пожарский возглавил войско. Это событие лежит в основе Дня народного единства.":
    "Starosta ziemski Kuźma Minin zebrał środki, a książę Dymitr Pożarski stanął na czele wojska. To wydarzenie leży u podstaw Dnia Jedności Narodowej.",
  "Сколько лет правила династия Романовых?": "Ile lat panowała dynastia Romanowów?",
  "Сто лет": "Sto lat",
  "Двести лет": "Dwieście lat",
  "Триста четыре года": "Trzysta cztery lata",
  "Четыреста лет": "Czterysta lat",
  "С 1613 по 1917 год. Первым был избран шестнадцатилетний Михаил, последним стал Николай II.":
    "Od 1613 do 1917 roku. Pierwszym wybrano szesnastoletniego Michała, a ostatnim został Mikołaj II.",
  "Что изменил в положении крестьян бессрочный сыск беглых?":
    "Co w położeniu chłopów zmieniło bezterminowe poszukiwanie zbiegów?",
  "Крестьянин мог уйти от владельца через десять лет":
    "Chłop mógł odejść od właściciela po dziesięciu latach",
  "Крестьянин оказался прикреплён к земле и владельцу навсегда":
    "Chłop został przywiązany do ziemi i właściciela na zawsze",
  "Крестьяне получили право владеть землёй": "Chłopi dostali prawo posiadania ziemi",
  "Ничего: норма не применялась": "Nic: przepisu nie stosowano",
  "До Уложения срок сыска был ограничен, и по его истечении беглого не возвращали. С 1649 года эта возможность исчезла.":
    "Przed uchwaleniem zbioru termin poszukiwań był ograniczony, a po jego upływie zbiega nie zwracano. Od 1649 roku ta możliwość zniknęła.",
  "Кто провёл церковную реформу середины XVII века?":
    "Kto przeprowadził reformę cerkiewną w połowie XVII wieku?",
  "Патриарх Никон": "Patriarcha Nikon",
  "Протопоп Аввакум": "Protopop Awwakum",
  "Митрополит Алексий": "Metropolita Aleksy",
  "Патриарх Филарет": "Patriarcha Filaret",
  "Никон исправил книги и обряды по греческому образцу. Часть верующих реформу не приняла — произошёл раскол, а Аввакум стал вождём старообрядцев.":
    "Nikon poprawił księgi i obrzędy według wzoru greckiego. Część wiernych reformy nie przyjęła — doszło do rozłamu, a Awwakum stał się przywódcą staroobrzędowców.",
  "Кто такие старообрядцы?": "Kim są staroobrzędowcy?",
  "Верующие, не принявшие реформу Никона": "Wiernymi, którzy nie przyjęli reformy Nikona",
  "Монахи древних монастырей": "Mnichami dawnych monasterów",
  "Служители дореформенной церкви в Новгороде":
    "Duchownymi przedreformacyjnej cerkwi w Nowogrodzie",
  "Последователи католического обряда": "Wyznawcami obrządku katolickiego",
  "Раскол XVII века отделил их от господствующей церкви на столетия. Старообрядческие общины существуют и сегодня.":
    "Rozłam XVII wieku oddzielił ich od cerkwi panującej na stulecia. Wspólnoty staroobrzędowe istnieją i dziś.",
  "Сколько лет действовало Соборное уложение 1649 года?":
    "Ile lat obowiązywał kodeks soborowy z 1649 roku?",
  "Около двадцати лет": "Około dwudziestu lat",
  "Около пятидесяти лет": "Około pięćdziesięciu lat",
  "Почти двести лет": "Prawie dwieście lat",
  "Оно действует до сих пор": "Obowiązuje do dziś",
  "Почти двести лет — до кодификации законов в XIX веке. Крепостное право, им закреплённое, отменят в 1861 году.":
    "Prawie dwieście lat — do kodyfikacji prawa w XIX wieku. Poddaństwo, które utrwalił, zniosą w 1861 roku.",
  "В каком году был основан Санкт-Петербург?": "W którym roku założono Sankt Petersburg?",
  "В 1700 году": "W 1700 roku",
  "1703 год, на отвоёванной у Швеции земле. Столицей он останется более двухсот лет, до 1918 года.":
    "Rok 1703, na ziemi odbitej Szwecji. Stolicą pozostanie ponad dwieście lat, do 1918 roku.",
  "Что такое Табель о рангах?": "Czym była tabela rang?",
  "Список дворянских родов": "Spisem rodów szlacheckich",
  "Система чинов, при которой положение зависело от службы, а не от происхождения":
    "Systemem stopni, w którym pozycja zależała od służby, a nie od pochodzenia",
  "Перечень налогов": "Wykazem podatków",
  "Реестр земельных владений": "Rejestrem posiadłości ziemskich",
  "Введена Петром I. Она открыла дорогу наверх людям незнатного происхождения и связала статус с государственной службой.":
    "Wprowadził ją Piotr I. Otworzyła drogę w górę ludziom nieszlacheckiego pochodzenia i związała pozycję ze służbą państwową.",
  "Сколько лет длилась Северная война?": "Ile lat trwała wielka wojna północna?",
  "Двенадцать лет": "Dwanaście lat",
  "Двадцать один год": "Dwadzieścia jeden lat",
  "Тридцать лет": "Trzydzieści lat",
  "С 1700 по 1721 год. Полтавская победа 1709 года стала переломом, а окончание войны совпало с провозглашением империи.":
    "Od 1700 do 1721 roku. Zwycięstwo pod Połtawą w 1709 roku stało się przełomem, a koniec wojny zbiegł się z proklamowaniem imperium.",
  "Что такое эпоха дворцовых переворотов?": "Czym była epoka przewrotów pałacowych?",
  "Период, когда гвардия несколько раз решала, кто займёт престол":
    "Okresem, w którym gwardia kilkakrotnie rozstrzygała, kto zasiądzie na tronie",
  "Годы строительства дворцов в Петербурге": "Latami budowy pałaców w Petersburgu",
  "Время войн с Турцией": "Czasem wojen z Turcją",
  "Период правления Екатерины II": "Okresem panowania Katarzyny II",
  "После смерти Петра I престол несколько раз переходил при участии гвардейских полков. Закончилась эпоха воцарением Екатерины II в 1762 году.":
    "Po śmierci Piotra I tron kilka razy przechodził z udziałem pułków gwardyjskich. Epoka skończyła się wstąpieniem na tron Katarzyny II w 1762 roku.",
  "В каком году был присоединён Крым при Екатерине II?":
    "W którym roku przyłączono Krym za Katarzyny II?",
  "В 1774 году": "W 1774 roku",
  "В 1783 году": "W 1783 roku",
  "В 1812 году": "W 1812 roku",
  "1783 год. К этому же времени относятся освоение Новороссии и основание Одессы, Севастополя и Херсона.":
    "Rok 1783. Z tym samym czasem wiąże się zagospodarowanie Noworosji i założenie Odessy, Sewastopola i Chersonia.",
  "Какое крупное народное восстание произошло при Екатерине II?":
    "Jakie wielkie powstanie ludowe wybuchło za Katarzyny II?",
  "Восстание Болотникова": "Powstanie Bołotnikowa",
  "Соляной бунт": "Bunt solny",
  "Восстание 1773–1775 годов охватило Урал и Поволжье. Просвещённые замыслы императрицы остались на бумаге, а крепостное право стало жёстче.":
    "Powstanie z lat 1773–1775 objęło Ural i Powołże. Oświecone zamiary cesarzowej zostały na papierze, a poddaństwo stało się surowsze.",
  "Кто командовал русской армией в Бородинском сражении?":
    "Kto dowodził armią rosyjską w bitwie pod Borodino?",
  "Суворов": "Suworow",
  "Кутузов": "Kutuzow",
  "Нахимов": "Nachimow",
  "Багратион": "Bagration",
  "Михаил Кутузов. После сражения он оставил Москву, и это решение спасло армию, хотя город почти целиком сгорел.":
    "Michaił Kutuzow. Po bitwie oddał Moskwę i ta decyzja uratowała armię, choć miasto spłonęło niemal doszczętnie.",
  "Чего требовали декабристы в 1825 году?": "Czego żądali dekabryści w 1825 roku?",
  "Конституции и ограничения самодержавия": "Konstytucji i ograniczenia samowładztwa",
  "Восстановления патриаршества": "Przywrócenia patriarchatu",
  "Присоединения новых земель": "Przyłączenia nowych ziem",
  "Отмены Табели о рангах": "Zniesienia tabeli rang",
  "Это первое выступление за конституцию в русской истории. Восстание было подавлено за день, пятерых казнили, остальных сослали в Сибирь.":
    "To pierwsze wystąpienie o konstytucję w dziejach Rosji. Powstanie stłumiono w jeden dzień, pięciu skazano na śmierć, resztę zesłano na Syberię.",
  "Какой император отменил крепостное право?": "Który cesarz zniósł poddaństwo?",
  "Николай I": "Mikołaj I",
  "Александр II": "Aleksander II",
  "Александр III": "Aleksander III",
  "Николай II": "Mikołaj II",
  "Александр II, манифестом 19 февраля 1861 года. За ним последовали земская, судебная и военная реформы.":
    "Aleksander II, manifestem z 19 lutego 1861 roku. Po nim przyszły reformy ziemska, sądowa i wojskowa.",
  "Что получили крестьяне по реформе 1861 года и чего не получили?":
    "Co chłopi dostali na mocy reformy z 1861 roku, a czego nie dostali?",
  "Личную свободу, но землю пришлось выкупать":
    "Wolność osobistą, ale ziemię trzeba było wykupić",
  "И свободу, и землю безвозмездно": "I wolność, i ziemię za darmo",
  "Землю, но остались лично зависимыми": "Ziemię, ale pozostali osobiście zależni",
  "Право уйти в город без документов": "Prawo wyjazdu do miasta bez dokumentów",
  "Выкупные платежи легли на деревню на десятилетия вперёд. Именно поэтому реформу называют незавершённой.":
    "Opłaty wykupne legły na wsi na dziesięciolecia naprzód. Właśnie dlatego reformę nazywa się niedokończoną.",
  "Что ввела судебная реформа 1864 года?": "Co wprowadziła reforma sądowa z 1864 roku?",
  "Гласный суд, состязательность, адвокатуру и суд присяжных":
    "Jawność rozprawy, kontradyktoryjność, adwokaturę i sąd przysięgłych",
  "Военные трибуналы": "Trybunały wojskowe",
  "Церковный суд по гражданским делам": "Sąd cerkiewny w sprawach cywilnych",
  "Единый кассационный суд": "Jednolity sąd kasacyjny",
  "Реформа считается самой удачной из великих реформ. Суд присяжных, введённый тогда, был упразднён в советское время и вернулся в девяностые.":
    "Reformę uważa się za najbardziej udaną z wielkich reform. Sąd przysięgłych, wprowadzony wtedy, zniesiono w czasach radzieckich i wrócił w latach dziewięćdziesiątych.",
  "Что провозгласил Манифест 17 октября 1905 года?":
    "Co proklamował manifest z 17 października 1905 roku?",
  "Гражданские свободы и созыв Государственной думы":
    "Swobody obywatelskie i zwołanie Dumy Państwowej",
  "Отмену крепостного права": "Zniesienie poddaństwa",
  "Вступление в Первую мировую войну": "Przystąpienie do pierwszej wojny światowej",
  "Введение конституции": "Wprowadzenie konstytucji",
  "Дума стала первым в русской истории выборным законодательным органом. Отдельной конституции при этом принято не было.":
    "Duma stała się pierwszym w dziejach Rosji wybieralnym organem ustawodawczym. Osobnej konstytucji przy tym nie uchwalono.",
  "Какая железная дорога связала Москву с Тихим океаном?":
    "Która linia kolejowa połączyła Moskwę z Oceanem Spokojnym?",
  "Николаевская": "Nikołajewska",
  "Транссибирская магистраль": "Kolej transsyberyjska",
  "Турксиб": "Turksib",
  "Байкало-Амурская магистраль": "Magistrala bajkalsko-amurska",
  "Транссиб, строительство которого началось в 1891 году. Турксиб построен в советское время, а БАМ — во второй половине XX века.":
    "Transsyb, którego budowę zaczęto w 1891 roku. Turksib zbudowano w czasach radzieckich, a BAM w drugiej połowie XX wieku.",
  "Сколько революций произошло в России в 1917 году?":
    "Ile rewolucji wybuchło w Rosji w 1917 roku?",
  "Ни одной: это была одна длинная революция": "Ani jednej: to była jedna długa rewolucja",
  "Февральская и Октябрьская, и между ними восемь месяцев. Первая свергла монархию, вторая сменила пришедшее ей на смену правительство.":
    "Lutowa i październikowa, a między nimi osiem miesięcy. Pierwsza obaliła monarchię, druga zmieniła rząd, który po niej przyszedł.",
  "Что такое двоевластие?": "Czym była dwuwładza?",
  "Одновременное существование Временного правительства и Советов":
    "Równoczesnym istnieniem Rządu Tymczasowego i rad",
  "Разделение власти между царём и Думой": "Podziałem władzy między cara a Dumę",
  "Правление двух императоров": "Panowaniem dwóch cesarzy",
  "Раздел страны между красными и белыми": "Podziałem kraju między czerwonych a białych",
  "Правительство считало себя властью до Учредительного собрания, а за Советами стояли гарнизон и заводы. Ни одна из сторон не решалась ни выйти из войны, ни разделить землю.":
    "Rząd uważał się za władzę do czasu Konstytuanty, a za radami stały garnizon i fabryki. Żadna ze stron nie odważyła się ani wyjść z wojny, ani podzielić ziemi.",
  "Почему Октябрьскую революцию отмечали 7 ноября?":
    "Dlaczego rewolucję październikową obchodzono 7 listopada?",
  "Так решили в 1930-е годы": "Tak postanowiono w latach trzydziestych",
  "Из-за перехода с юлианского календаря на григорианский":
    "Z powodu przejścia z kalendarza juliańskiego na gregoriański",
  "По решению II съезда Советов": "Na mocy uchwały II zjazdu rad",
  "Из-за разницы часовых поясов": "Z powodu różnicy stref czasowych",
  "25 октября по старому стилю — это 7 ноября по новому. Календарь сменили в 1918 году, а название события осталось прежним.":
    "25 października starego stylu to 7 listopada nowego. Kalendarz zmieniono w 1918 roku, a nazwa wydarzenia została dawna.",
  "Какие два декрета были приняты первыми после Октября?":
    "Które dwa dekrety uchwalono jako pierwsze po październiku?",
  "О мире и о земле": "O pokoju i o ziemi",
  "О труде и об образовании": "O pracy i o oświacie",
  "О церкви и о календаре": "O cerkwi i o kalendarzu",
  "О национализации и о хлебе": "O nacjonalizacji i o chlebie",
  "Именно эти два вопроса Временное правительство откладывало восемь месяцев, и именно их ждала страна.":
    "To właśnie te dwie sprawy Rząd Tymczasowy odkładał przez osiem miesięcy i to właśnie ich kraj oczekiwał.",
  "Что произошло с Учредительным собранием?": "Co stało się z Konstytuantą?",
  "Оно приняло конституцию": "Uchwaliła konstytucję",
  "Оно было распущено в январе 1918 года после первого заседания":
    "Rozwiązano ją w styczniu 1918 roku po pierwszym posiedzeniu",
  "Выборы в него не состоялись": "Wybory do niej się nie odbyły",
  "Оно работало до 1922 года": "Działała do 1922 roku",
  "Выборы прошли, но большевики получили меньшинство. Собрание распустили после первого же заседания.":
    "Wybory się odbyły, ale bolszewicy dostali mniejszość. Zgromadzenie rozwiązano zaraz po pierwszym posiedzeniu.",
  "Чем обернулся для России Брестский мир?": "Czym okazał się dla Rosji pokój brzeski?",
  "Выходом из войны ценой огромных территорий": "Wyjściem z wojny za cenę ogromnych terytoriów",
  "Присоединением новых земель": "Przyłączeniem nowych ziem",
  "Союзом с Германией": "Sojuszem z Niemcami",
  "Отсрочкой военных действий на год": "Odroczeniem działań wojennych o rok",
  "Мир подписан в марте 1918 года. Тогда же столица вернулась из Петрограда в Москву, а страна вступала в гражданскую войну.":
    "Pokój podpisano w marcu 1918 roku. Wtedy też stolica wróciła z Piotrogrodu do Moskwy, a kraj wchodził w wojnę domową.",
  "В какой город вернулась столица в 1918 году?":
    "Do jakiego miasta wróciła stolica w 1918 roku?",
  "В Петроград": "Do Piotrogrodu",
  "В Москву": "Do Moskwy",
  "В Киев": "Do Kijowa",
  "В Нижний Новгород": "Do Niżnego Nowogrodu",
  "Столица вернулась в Москву после двухсот с лишним лет в Петербурге. Причиной была близость фронта к прежней столице.":
    "Stolica wróciła do Moskwy po z górą dwustu latach w Petersburgu. Przyczyną była bliskość frontu od dawnej stolicy.",
  "Где и когда была расстреляна царская семья?": "Gdzie i kiedy rozstrzelano rodzinę carską?",
  "В Петрограде в 1917 году": "W Piotrogrodzie w 1917 roku",
  "В Екатеринбурге в июле 1918 года": "W Jekaterynburgu w lipcu 1918 roku",
  "В Москве в 1919 году": "W Moskwie w 1919 roku",
  "В Тобольске в 1920 году": "W Tobolsku w 1920 roku",
  "Останки были найдены и идентифицированы уже в конце XX века, а в 2000 году члены семьи причислены Русской православной церковью к лику святых.":
    "Szczątki odnaleziono i zidentyfikowano dopiero pod koniec XX wieku, a w 2000 roku członków rodziny Rosyjska Cerkiew Prawosławna zaliczyła w poczet świętych.",
  "Сколько лет длилась Гражданская война?": "Ile lat trwała wojna domowa?",
  "Два года": "Dwa lata",
  "Около четырёх лет": "Około czterech lat",
  "С 1918 по 1922 год. Против красных выступали белые армии, крестьянские восстания и войска иностранных держав.":
    "Od 1918 do 1922 roku. Przeciw czerwonym wystąpiły armie białych, powstania chłopskie i wojska obcych mocarstw.",
  "Сколько человек покинуло страну в результате революции и Гражданской войны?":
    "Ilu ludzi opuściło kraj w następstwie rewolucji i wojny domowej?",
  "Около ста тысяч": "Około stu tysięcy",
  "Около полумиллиона": "Około pół miliona",
  "Около двух миллионов": "Około dwóch milionów",
  "Около десяти миллионов": "Około dziesięciu milionów",
  "Около двух миллионов: офицеры, учёные, инженеры, писатели. Уехал целый слой общества, и это сказалось на десятилетия вперёд.":
    "Około dwóch milionów: oficerowie, uczeni, inżynierowie, pisarze. Wyjechała cała warstwa społeczeństwa i odbiło się to na dziesięciolecia naprzód.",
  "Что заменило продразвёрстку при новой экономической политике?":
    "Co zastąpiło przymusowy skup zboża w nowej polityce ekonomicznej?",
  "Налог": "Podatek",
  "Полное освобождение от повинностей": "Całkowite zwolnienie z powinności",
  "Карточки": "Kartki",
  "Барщина": "Pańszczyzna",
  "Продовольственный налог: крестьянин знал заранее, сколько отдаст, и остальное мог продать. Была разрешена торговля и мелкое частное предпринимательство.":
    "Podatek żywnościowy: chłop wiedział z góry, ile odda, a resztę mógł sprzedać. Dopuszczono handel i drobną prywatną przedsiębiorczość.",
  "Какие республики подписали договор об образовании СССР?":
    "Które republiki podpisały układ o utworzeniu ZSRR?",
  "РСФСР, Украина, Белоруссия и Закавказская федерация":
    "RSFRR, Ukraina, Białoruś i Federacja Zakaukaska",
  "Все пятнадцать союзных республик": "Wszystkie piętnaście republik związkowych",
  "РСФСР и Украина": "RSFRR i Ukraina",
  "РСФСР, Украина, Белоруссия и Казахстан": "RSFRR, Ukraina, Białoruś i Kazachstan",
  "Четыре подписанта в 1922 году. До пятнадцати республик Союз вырастет позже, в том числе за счёт разделения Закавказской федерации.":
    "Czterech sygnatariuszy w 1922 roku. Do piętnastu republik Związek urośnie później, między innymi przez podział Federacji Zakaukaskiej.",
  "Что вызвало голод 1921–1922 годов в Поволжье?": "Co wywołało głód lat 1921–1922 w Powołżu?",
  "Неурожай на разорённой войной земле": "Nieurodzaj na ziemi zniszczonej wojną",
  "Массовая эмиграция крестьян": "Masowa emigracja chłopów",
  "Эпидемия скота": "Epidemia u bydła",
  "Закрытие границ": "Zamknięcie granic",
  "Хозяйство было подорвано войной и продразвёрсткой, а засуха довершила дело. Голод стал одной из причин перехода к новой экономической политике.":
    "Gospodarkę podkopały wojna i przymusowy skup zboża, a susza dopełniła dzieła. Głód stał się jedną z przyczyn przejścia do nowej polityki ekonomicznej.",
  "Что было свёрнуто в конце двадцатых годов?": "Co zwinięto pod koniec lat dwudziestych?",
  "Новая экономическая политика": "Nową politykę ekonomiczną",
  "Продразвёрстка": "Przymusowy skup zboża",
  "Пятилетние планы": "Plany pięcioletnie",
  "НЭП свернули ради форсированной индустриализации. Военный коммунизм и продразвёрстка кончились раньше, в 1921 году.":
    "NEP zwinięto na rzecz przyspieszonej industrializacji. Komunizm wojenny i przymusowy skup zboża skończyły się wcześniej, w 1921 roku.",
  "Какие из этих объектов построены в годы первых пятилеток?":
    "Które z tych obiektów zbudowano w latach pierwszych pięciolatek?",
  "Магнитка, Днепрогэс и Турксиб": "Magnitka, Dnieprogres i Turksib",
  "Транссиб и Николаевская дорога": "Transsyb i kolej nikołajewska",
  "Петербургский порт": "Port petersburski",
  "За десятилетие страна из аграрной стала промышленной. Транссиб построен ещё в империи, а БАМ — во второй половине века.":
    "W ciągu dziesięciolecia kraj z rolniczego stał się przemysłowy. Transsyb zbudowano jeszcze w imperium, a BAM w drugiej połowie wieku.",
  "За счёт чего в основном финансировалась индустриализация?":
    "Z czego głównie finansowano industrializację?",
  "За счёт иностранных займов": "Z pożyczek zagranicznych",
  "За счёт деревни, экспорта зерна и низких зарплат": "Kosztem wsi, wywozu zboża i niskich płac",
  "За счёт продажи колоний": "Ze sprzedaży kolonii",
  "За счёт золотого запаса империи": "Z zapasu złota imperium",
  "Средства брали внутри страны: у деревни через закупочные цены, у населения через зарплаты и займы. Это и связывает индустриализацию с коллективизацией.":
    "Środki brano wewnątrz kraju: ze wsi przez ceny skupu, od ludności przez płace i pożyczki. To właśnie wiąże industrializację z kolektywizacją.",
  "Что такое коллективизация?": "Czym była kolektywizacja?",
  "Объединение крестьянских хозяйств в колхозы": "Łączeniem gospodarstw chłopskich w kołchozy",
  "Переселение горожан в деревню": "Przesiedlaniem mieszczan na wieś",
  "Раздача земли крестьянам": "Rozdawaniem ziemi chłopom",
  "Создание рабочих кооперативов в городах": "Tworzeniem spółdzielni robotniczych w miastach",
  "Сплошная коллективизация началась в 1929 году и сопровождалась раскулачиванием — конфискацией имущества и высылкой зажиточных крестьян.":
    "Powszechna kolektywizacja zaczęła się w 1929 roku i szła w parze z rozkułaczaniem — konfiskatą majątku i zsyłką zamożnych chłopów.",
  "Какие регионы охватил голод 1932–1933 годов?": "Które regiony objął głód lat 1932–1933?",
  "Только Украину": "Tylko Ukrainę",
  "Украину, Поволжье, Казахстан, Северный Кавказ и Западную Сибирь":
    "Ukrainę, Powołże, Kazachstan, Kaukaz Północny i Syberię Zachodnią",
  "Только Сибирь": "Tylko Syberię",
  "Прибалтику и Белоруссию": "Kraje bałtyckie i Białoruś",
  "Голод затронул основные зерновые районы. Число погибших исчисляется миллионами; оценки расходятся, но порядок величины не оспаривается.":
    "Głód dotknął główne rejony zbożowe. Liczbę ofiar liczy się w milionach; szacunki się różnią, ale rzędu wielkości nikt nie podważa.",
  "Что такое раскулачивание?": "Czym było rozkułaczanie?",
  "Конфискация имущества и высылка зажиточных крестьян":
    "Konfiskatą majątku i zsyłką zamożnych chłopów",
  "Освобождение крестьян от налогов": "Zwolnieniem chłopów z podatków",
  "Передача земли колхозам за выкуп": "Przekazaniem ziemi kołchozom za wykupem",
  "Перепись сельского населения": "Spisem ludności wiejskiej",
  "Сотни тысяч семей были отправлены в отдалённые районы страны, и многие погибли в дороге или в первые годы на новом месте.":
    "Setki tysięcy rodzin wysłano do odległych rejonów kraju, a wiele osób zginęło w drodze albo w pierwszych latach na nowym miejscu.",
  "Что строили заключённые ГУЛАГа?": "Co budowali więźniowie GUŁagu?",
  "Каналы, прииски, комбинаты за полярным кругом":
    "Kanały, kopalnie, kombinaty za kręgiem polarnym",
  "Только дороги в европейской части": "Tylko drogi w części europejskiej",
  "Жильё в крупных городах": "Mieszkania w wielkich miastach",
  "Ничего: труд не использовался": "Nic: pracy nie wykorzystywano",
  "Беломорканал, золотые прииски Колымы, Норильский комбинат. Принудительный труд был встроен в хозяйственные планы.":
    "Kanał Białomorski, kopalnie złota na Kołymie, kombinat norylski. Praca przymusowa była wbudowana w plany gospodarcze.",
  "Что такое «тройки» в период Большого террора?":
    "Czym były „trójki” w okresie wielkiego terroru?",
  "Внесудебные органы, выносившие приговоры": "Organami pozasądowymi, które wydawały wyroki",
  "Бригады на стройках пятилетки": "Brygadami na budowach pięciolatki",
  "Комиссии по раскулачиванию": "Komisjami do rozkułaczania",
  "Отделения милиции": "Komisariatami milicji",
  "Дела рассматривались без суда и защиты, приговоры выносились за минуты. Аресты при этом шли по спущенным сверху разнарядкам.":
    "Sprawy rozpoznawano bez sądu i bez obrony, wyroki zapadały w ciągu minut. Aresztowania szły przy tym według rozdzielników spuszczanych z góry.",
  "На какие годы пришёлся пик массовых репрессий?":
    "Na jakie lata przypadł szczyt masowych represji?",
  "На 1929–1930": "Na 1929–1930",
  "На 1932–1933": "Na 1932–1933",
  "На 1937–1938": "Na 1937–1938",
  "На 1945–1946": "Na 1945–1946",
  "Большой террор 1937–1938 годов: несколько сотен тысяч расстрелянных по массовым операциям и столько же и более отправленных в лагеря.":
    "Wielki terror lat 1937–1938: kilkaset tysięcy rozstrzelanych w operacjach masowych i tyluż albo więcej wysłanych do łagrów.",
  "Какие народы подверглись депортации в годы войны и после неё?":
    "Które narody dotknęła deportacja w latach wojny i po niej?",
  "Поволжские немцы, крымские татары, чеченцы, ингуши, калмыки и другие":
    "Niemcy nadwołżańscy, Tatarzy krymscy, Czeczeni, Ingusze, Kałmucy i inni",
  "Только поволжские немцы": "Tylko Niemcy nadwołżańscy",
  "Только народы Сибири": "Tylko narody Syberii",
  "Депортаций не было": "Deportacji nie było",
  "Целые народы были насильственно выселены с мест проживания. Многие погибли в пути или в первые годы на новом месте; возвращение началось только после 1956 года.":
    "Całe narody przymusowo wysiedlono z miejsc zamieszkania. Wielu zginęło w drodze albo w pierwszych latach na nowym miejscu; powroty zaczęły się dopiero po 1956 roku.",
  "Как была официально названа Конституция 1936 года?":
    "Jak oficjalnie nazwano Konstytucję z 1936 roku?",
  "Самой демократической в мире": "Najbardziej demokratyczną na świecie",
  "Временным основным законом": "Tymczasową ustawą zasadniczą",
  "Конституцией переходного периода": "Konstytucją okresu przejściowego",
  "Уставом Союза": "Statutem Związku",
  "Расхождение между её текстом и практикой тех же лет — наглядный пример того, почему конституция без работающих судов остаётся бумагой.":
    "Rozbieżność między jej tekstem a praktyką tych samych lat jest wyrazistym przykładem tego, dlaczego konstytucja bez działających sądów zostaje papierem.",
  "Что началось после XX съезда партии в 1956 году?":
    "Co zaczęło się po XX zjeździe partii w 1956 roku?",
  "Реабилитация: пересмотр дел и восстановление доброго имени осуждённых":
    "Rehabilitacja: wznawianie spraw i przywracanie dobrego imienia skazanym",
  "Новая волна арестов": "Nowa fala aresztowań",
  "Вторая коллективизация": "Druga kolektywizacja",
  "Закрытие архивов": "Zamknięcie archiwów",
  "На съезде прозвучал доклад о культе личности. Реабилитация шла волнами и продолжалась десятилетиями.":
    "Na zjeździe wygłoszono referat o kulcie jednostki. Rehabilitacja szła falami i ciągnęła się dziesięcioleciami.",
  "Что было открыто в Москве в 2017 году?": "Co otwarto w Moskwie w 2017 roku?",
  "«Стена скорби» — памятник жертвам политических репрессий":
    "„Ścianę Żałoby” — pomnik ofiar represji politycznych",
  "Музей космонавтики": "Muzeum Kosmonautyki",
  "Мемориал защитникам Москвы": "Pomnik obrońców Moskwy",
  "Памятник Тысячелетию России": "Pomnik Tysiąclecia Rosji",
  "Государственный памятник жертвам репрессий. Работают также музеи и мемориальные комплексы на местах бывших лагерей и полигонов, включая Бутовский.":
    "Państwowy pomnik ofiar represji. Działają też muzea i kompleksy pamięci w miejscach dawnych łagrów i poligonów, w tym w Butowie.",
  "Чем Великая Отечественная война отличается по срокам от Второй мировой?":
    "Czym wielka wojna ojczyźniana różni się datami od drugiej wojny światowej?",
  "Ничем: это одно и то же": "Niczym: to jedno i to samo",
  "Она шла с 22 июня 1941 по 9 мая 1945 года, на советско-германском фронте":
    "Trwała od 22 czerwca 1941 do 9 maja 1945 roku, na froncie radziecko-niemieckim",
  "Она началась в 1939 году": "Zaczęła się w 1939 roku",
  "Она закончилась в сентябре 1945 года": "Skończyła się we wrześniu 1945 roku",
  "Вторая мировая шла с 1939 по 1945 год. Великая Отечественная — та её часть, что велась на советско-германском фронте.":
    "Druga wojna światowa trwała od 1939 do 1945 roku. Wielka wojna ojczyźniana to ta jej część, którą prowadzono na froncie radziecko-niemieckim.",
  "Когда была прорвана и снята блокада Ленинграда?":
    "Kiedy przerwano i zniesiono blokadę Leningradu?",
  "В январе 1944 года": "W styczniu 1944 roku",
  "В декабре 1941 года": "W grudniu 1941 roku",
  "В феврале 1943 года": "W lutym 1943 roku",
  "В мае 1945 года": "W maju 1945 roku",
  "Блокада была полностью снята в январе 1944 года, продлившись почти девятьсот дней с сентября 1941-го.":
    "Blokadę zniesiono całkowicie w styczniu 1944 roku, a trwała prawie dziewięćset dni, od września 1941.",
  "Какое сражение стало переломом в ходе войны?":
    "Która bitwa stała się przełomem w przebiegu wojny?",
  "Сталинградская битва": "Bitwa stalingradzka",
  "Битва за Берлин": "Bitwa o Berlin",
  "Окружение и капитуляция немецкой армии под Сталинградом зимой 1942–1943 годов. Летом 1943-го на Курской дуге инициатива закрепилась окончательно.":
    "Okrążenie i kapitulacja armii niemieckiej pod Stalingradem zimą 1942–1943. Latem 1943 na łuku kurskim inicjatywa utrwaliła się ostatecznie.",
  "Какими оцениваются потери СССР в войне?": "Jak szacuje się straty ZSRR w wojnie?",
  "Около семи миллионов человек": "Na około siedem milionów ludzi",
  "Около двенадцати миллионов": "Na około dwanaście milionów",
  "Около двадцати семи миллионов": "Na około dwadzieścia siedem milionów",
  "Около сорока миллионов": "Na około czterdzieści milionów",
  "Около двадцати семи миллионов, большую часть из которых составило мирное население. Это самые тяжёлые потери среди всех стран — участниц войны.":
    "Na około dwadzieścia siedem milionów, z czego większość stanowiła ludność cywilna. To najcięższe straty spośród wszystkich krajów uczestniczących w wojnie.",
  "Какое место стало одним из известнейших символов Холокоста на оккупированной территории?":
    "Które miejsce stało się jednym z najbardziej znanych symboli Zagłady na terenach okupowanych?",
  "Бабий Яр": "Babi Jar",
  "Хатынь": "Chatyń",
  "Пискарёвское кладбище": "Cmentarz Piskariowski",
  "Прохоровка": "Prochorowka",
  "Бабий Яр под Киевом. Хатынь — сожжённая белорусская деревня, Пискарёвское кладбище — блокадный Ленинград, Прохоровка — Курская дуга.":
    "Babi Jar pod Kijowem. Chatyń to spalona wieś białoruska, cmentarz Piskariowski to oblężony Leningrad, a Prochorowka to łuk kurski.",
  "Что произошло в 1949 году?": "Co wydarzyło się w 1949 roku?",
  "СССР испытал атомную бомбу": "ZSRR przeprowadził próbę bomby atomowej",
  "Был запущен первый спутник": "Wystrzelono pierwszego sputnika",
  "Умер Сталин": "Umarł Stalin",
  "Началась война в Корее": "Zaczęła się wojna w Korei",
  "Испытание атомной бомбы и начало ядерного противостояния двух блоков. Спутник запустят в 1957 году, а Сталин умрёт в 1953-м.":
    "Próba bomby atomowej i początek jądrowej rywalizacji dwóch bloków. Sputnika wystrzelą w 1957 roku, a Stalin umrze w 1953.",
  "Как называют период после XX съезда партии?": "Jak nazywa się okres po XX zjeździe partii?",
  "Застой": "Zastój",
  "Оттепель": "Odwilż",
  "Оттепель: массовая реабилитация, возвращение людей из лагерей, ослабление цензуры. Застоем назовут следующие два десятилетия.":
    "Odwilż: masowa rehabilitacja, powroty ludzi z łagrów, zelżenie cenzury. Zastojem nazwie się dwa następne dziesięciolecia.",
  "Кто первым в мире совершил полёт в космос?": "Kto pierwszy na świecie odbył lot w kosmos?",
  "Юрий Гагарин": "Jurij Gagarin",
  "Герман Титов": "German Titow",
  "Алексей Леонов": "Aleksiej Leonow",
  "Валентина Терешкова": "Walentina Tierieszkowa",
  "12 апреля 1961 года. Титов полетел вторым, Леонов первым вышел в открытый космос, Терешкова стала первой женщиной-космонавтом.":
    "12 kwietnia 1961 roku. Titow poleciał jako drugi, Leonow pierwszy wyszedł w otwartą przestrzeń, a Tierieszkowa została pierwszą kobietą kosmonautką.",
  "Чем закончился Карибский кризис 1962 года?": "Czym skończył się kryzys kubański z 1962 roku?",
  "Взаимными уступками и первыми соглашениями об ограничении вооружений":
    "Wzajemnymi ustępstwami i pierwszymi porozumieniami o ograniczeniu zbrojeń",
  "Военным столкновением": "Starciem zbrojnym",
  "Разрывом отношений на десять лет": "Zerwaniem stosunków na dziesięć lat",
  "Выходом СССР из ООН": "Wystąpieniem ZSRR z ONZ",
  "Кризис подвёл мир к грани ядерной войны и заставил обе стороны искать механизмы предотвращения: тогда же появилась прямая линия связи между Москвой и Вашингтоном.":
    "Kryzys doprowadził świat na skraj wojny jądrowej i zmusił obie strony do szukania mechanizmów zapobiegania: wtedy też powstała bezpośrednia linia łączności między Moskwą a Waszyngtonem.",
  "Сколько лет продолжалась война в Афганистане?": "Ile lat trwała wojna w Afganistanie?",
  "Пятнадцать лет": "Piętnaście lat",
  "С 1979 по 1989 год. Она шла на фоне экономического застоя, и её итоги стали одним из факторов перемен второй половины восьмидесятых.":
    "Od 1979 do 1989 roku. Toczyła się na tle zastoju gospodarczego, a jej wynik stał się jednym z czynników przemian drugiej połowy lat osiemdziesiątych.",
  "Что было объявлено в 1985 году?": "Co ogłoszono w 1985 roku?",
  "Перестройка и гласность": "Pierestrojkę i głasnost",
  "Первая пятилетка": "Pierwszą pięciolatkę",
  "С приходом Михаила Горбачёва открылись архивы, вернулись запрещённые книги, началось публичное обсуждение прошлого.":
    "Wraz z dojściem Michaiła Gorbaczowa otwarły się archiwa, wróciły książki zakazane, zaczęła się publiczna rozmowa o przeszłości.",
  "Что произошло 12 июня 1991 года?": "Co wydarzyło się 12 czerwca 1991 roku?",
  "Были подписаны Беловежские соглашения": "Podpisano porozumienia białowieskie",
  "Прошли первые прямые выборы Президента РСФСР":
    "Odbyły się pierwsze bezpośrednie wybory Prezydenta RSFRR",
  "Была принята Декларация о суверенитете": "Przyjęto Deklarację o suwerenności",
  "Провалилась попытка государственного переворота": "Nie powiodła się próba zamachu stanu",
  "Победил Борис Ельцин. Декларация о суверенитете принята ровно годом раньше, а Беловежские соглашения подписаны 8 декабря того же года.":
    "Zwyciężył Borys Jelcyn. Deklarację o suwerenności przyjęto równo rok wcześniej, a porozumienia białowieskie podpisano 8 grudnia tego samego roku.",
  "Что произошло в России в 1998 году?": "Co wydarzyło się w Rosji w 1998 roku?",
  "Дефолт": "Niewypłacalność państwa",
  "Деноминация рубля и рост экономики": "Denominacja rubla i wzrost gospodarczy",
  "Вступление в Совет Европы": "Wstąpienie do Rady Europy",
  "Государство отказалось платить по краткосрочным обязательствам, рубль обесценился в несколько раз. Через год начался экономический рост, продолжавшийся почти десятилетие.":
    "Państwo odmówiło spłaty zobowiązań krótkoterminowych, a rubel stracił na wartości kilkakrotnie. Rok później zaczął się wzrost gospodarczy, który trwał prawie dziesięć lat.",
  "Какую примерно долю земной суши занимает Россия?":
    "Jaką mniej więcej część lądów Ziemi zajmuje Rosja?",
  "Около одной двадцатой": "Około jednej dwudziestej",
  "Около одной восьмой": "Około jednej ósmej",
  "Около четверти": "Około jednej czwartej",
  "Свыше семнадцати миллионов квадратных километров — около одной восьмой всей суши планеты. Это делает Россию крупнейшей страной мира.":
    "Ponad siedemnaście milionów kilometrów kwadratowych — około jednej ósmej wszystkich lądów planety. To czyni Rosję największym krajem świata.",
  "Какова протяжённость страны с запада на восток?":
    "Jaka jest rozciągłość kraju z zachodu na wschód?",
  "Около трёх тысяч километров": "Około trzech tysięcy kilometrów",
  "Около пяти тысяч": "Około pięciu tysięcy",
  "Почти десять тысяч": "Prawie dziesięć tysięcy",
  "Около двадцати тысяч": "Około dwudziestu tysięcy",
  "Почти десять тысяч километров, при четырёх тысячах с севера на юг. Отсюда и одиннадцать часовых поясов.":
    "Prawie dziesięć tysięcy kilometrów, przy czterech tysiącach z północy na południe. Stąd i jedenaście stref czasowych.",
  "Какая доля населения живёт в европейской части страны?":
    "Jaka część ludności mieszka w europejskiej części kraju?",
  "Около половины": "Około połowy",
  "Около трёх четвертей": "Około trzech czwartych",
  "Почти всё население": "Prawie cała ludność",
  "Около трёх четвертей населения — при том что три четверти территории лежат в Азии. Этот разрыв — одна из главных особенностей российской географии.":
    "Około trzech czwartych ludności — przy tym, że trzy czwarte terytorium leży w Azji. Ta rozbieżność jest jedną z głównych osobliwości geografii Rosji.",
  "Какова разница во времени между Москвой и Камчаткой?":
    "Jaka jest różnica czasu między Moskwą a Kamczatką?",
  "Три часа": "Trzy godziny",
  "Шесть часов": "Sześć godzin",
  "Девять часов": "Dziewięć godzin",
  "Девять часов: когда в Москве девять утра, на Камчатке уже вечер. Всего страна занимает одиннадцать часовых поясов.":
    "Dziewięć godzin: kiedy w Moskwie jest dziewiąta rano, na Kamczatce już wieczór. W sumie kraj zajmuje jedenaście stref czasowych.",
  "Что изменилось в российском времяисчислении в 2014 году?":
    "Co zmieniło się w rosyjskiej rachubie czasu w 2014 roku?",
  "Вернулись одиннадцать часовых поясов и прекратился перевод часов":
    "Wróciło jedenaście stref czasowych i ustało przestawianie zegarków",
  "Страна перешла на единое время": "Kraj przeszedł na jeden czas",
  "Было введено летнее время": "Wprowadzono czas letni",
  "Калининград перешёл на московское время": "Kaliningrad przeszedł na czas moskiewski",
  "С 2010 по 2014 год поясов было девять. Сезонного перевода часов в России с тех пор нет, и разница с Европой меняется дважды в год за счёт соседей.":
    "Od 2010 do 2014 roku stref było dziewięć. Sezonowego przestawiania zegarków w Rosji od tego czasu nie ma, a różnica wobec Europy zmienia się dwa razy w roku za sprawą sąsiadów.",
  "Со сколькими государствами Россия имеет сухопутную границу?":
    "Z iloma państwami Rosja ma granicę lądową?",
  "С восемью": "Z ośmioma",
  "С одиннадцатью": "Z jedenastoma",
  "С четырнадцатью": "Z czternastoma",
  "С двадцатью": "Z dwudziestoma",
  "С четырнадцатью — по этому показателю Россия делит первое место в мире с Китаем. Морские соседи, США и Япония, в это число не входят.":
    "Z czternastoma — pod tym względem Rosja dzieli pierwsze miejsce na świecie z Chinami. Sąsiedzi morscy, Stany Zjednoczone i Japonia, w tej liczbie się nie mieszczą.",
  "Через какой пролив проходит морская граница с США?":
    "Przez jaką cieśninę przebiega granica morska ze Stanami Zjednoczonymi?",
  "Через Берингов": "Przez Cieśninę Beringa",
  "Через Лаперуза": "Przez Cieśninę La Pérouse’a",
  "Через Керченский": "Przez Cieśninę Kerczeńską",
  "Через Татарский": "Przez Cieśninę Tatarską",
  "Берингов пролив: между островами Ратманова и Крузенштерна около четырёх километров. Пролив Лаперуза отделяет Сахалин от Хоккайдо.":
    "Cieśnina Beringa: między wyspami Ratmanowa i Kruzenszterna jest około czterech kilometrów. Cieśnina La Pérouse’a oddziela Sachalin od Hokkaido.",
  "Какими государствами и морем окружена Калининградская область?":
    "Jakimi państwami i morzem otoczony jest obwód kaliningradzki?",
  "Польшей, Литвой и Балтийским морем": "Polską, Litwą i Morzem Bałtyckim",
  "Белоруссией и Латвией": "Białorusią i Łotwą",
  "Финляндией и Эстонией": "Finlandią i Estonią",
  "Только Польшей": "Tylko Polską",
  "Область не имеет сухопутной связи с остальной страной, то есть является эксклавом. Это единственный такой регион в России.":
    "Obwód nie ma połączenia lądowego z resztą kraju, czyli jest eksklawą. To jedyny taki region w Rosji.",
  "Какая точка является самой северной материковой точкой России?":
    "Który punkt jest najdalej na północ wysuniętym punktem lądowym Rosji?",
  "Мыс Челюскин": "Przylądek Czeluskin",
  "Мыс Дежнёва": "Przylądek Dieżniowa",
  "Остров Ратманова": "Wyspa Ratmanowa",
  "Гора Базардюзю": "Góra Bazardüzü",
  "Мыс Челюскин на Таймыре. Базардюзю — самая южная точка, а остров Ратманова — самая восточная.":
    "Przylądek Czeluskin na Tajmyrze. Bazardüzü to punkt najdalej wysunięty na południe, a wyspa Ratmanowa najdalej na wschód.",
  "Почему линии часовых поясов на карте России не идут по меридианам?":
    "Dlaczego linie stref czasowych na mapie Rosji nie biegną wzdłuż południków?",
  "Из-за рельефа": "Z powodu rzeźby terenu",
  "Потому что время устанавливается для каждого субъекта Федерации отдельно":
    "Ponieważ czas ustala się osobno dla każdego podmiotu Federacji",
  "Из-за международных соглашений": "Z powodu umów międzynarodowych",
  "Они идут строго по меридианам": "Biegną ściśle wzdłuż południków",
  "Пояс определяется административной границей, а не географической долготой. Поэтому карта времени повторяет карту регионов.":
    "Strefę wyznacza granica administracyjna, a nie długość geograficzna. Dlatego mapa czasu powtarza mapę regionów.",
  "Какова примерная численность населения России?":
    "Jaka jest w przybliżeniu liczba ludności Rosji?",
  "Около 90 миллионов": "Około 90 milionów",
  "Около 146 миллионов": "Około 146 milionów",
  "Около 200 миллионов": "Około 200 milionów",
  "Около 300 миллионов": "Około 300 milionów",
  "Около ста сорока шести миллионов человек, распределённых крайне неравномерно: густо на юго-западе и вдоль Транссиба, почти пусто на севере Сибири.":
    "Około stu czterdziestu sześciu milionów ludzi, rozmieszczonych skrajnie nierówno: gęsto na południowym zachodzie i wzdłuż Transsybu, prawie pusto na północy Syberii.",
  "Где в России первыми встречают Новый год?": "Gdzie w Rosji Nowy Rok wita się jako pierwszy?",
  "В Калининграде": "W Kaliningradzie",
  "На Камчатке и Чукотке": "Na Kamczatce i Czukotce",
  "На востоке страны, где время опережает московское на девять часов. Калининград, наоборот, встречает его последним — там на час меньше московского.":
    "Na wschodzie kraju, gdzie czas wyprzedza moskiewski o dziewięć godzin. Kaliningrad przeciwnie, wita go ostatni — ma o godzinę mniej niż Moskwa.",
  "Какой регион является самым западным?": "Który region leży najdalej na zachód?",
  "Псковская область": "Obwód pskowski",
  "Ленинградская область": "Obwód leningradzki",
  "Республика Карелия": "Republika Karelii",
  "Калининградская область, которая к тому же единственный российский регион с временем на час меньше московского.":
    "Obwód kaliningradzki, który jest przy tym jedynym rosyjskim regionem z czasem o godzinę mniejszym niż moskiewski.",
  "Какая природная зона занимает наибольшую площадь в России?":
    "Która strefa przyrodnicza zajmuje w Rosji największy obszar?",
  "Тундра": "Tundra",
  "Тайга": "Tajga",
  "Степь": "Step",
  "Полупустыня": "Półpustynia",
  "Тайга — крупнейший лесной массив планеты. На Россию приходится около пятой части всех лесов мира.":
    "Tajga — największy kompleks leśny planety. Na Rosję przypada około jednej piątej wszystkich lasów świata.",
  "Какую долю мировых лесов занимают леса России?":
    "Jaką część lasów świata stanowią lasy Rosji?",
  "Около одной пятой": "Około jednej piątej",
  "Около пятой части, и по площади лесов страна занимает первое место в мире.":
    "Około jednej piątej, a pod względem powierzchni lasów kraj zajmuje pierwsze miejsce na świecie.",
  "Почему в северных городах дома строят на сваях?":
    "Dlaczego w miastach północy domy stawia się na palach?",
  "Из-за паводков": "Z powodu powodzi",
  "Чтобы тепло здания не растопило вечную мерзлоту под ним":
    "Żeby ciepło budynku nie roztopiło wiecznej zmarzliny pod nim",
  "Из-за сильных ветров": "Z powodu silnych wiatrów",
  "Так дешевле строить": "Tak buduje się taniej",
  "Растаявший грунт теряет несущую способность, и здание проседает. Сваи поднимают дом, оставляя между ним и землёй продуваемый зазор.":
    "Rozmarznięty grunt traci nośność i budynek osiada. Pale podnoszą dom, zostawiając między nim a ziemią przewiewaną szczelinę.",
  "Какая река является самой длинной в Европе?": "Która rzeka jest najdłuższa w Europie?",
  "Дунай": "Dunaj",
  "Волга": "Wołga",
  "Днепр": "Dniepr",
  "Дон": "Don",
  "Волга, около трёх с половиной тысяч километров. Она впадает не в океан, а в Каспийское море — крупнейший замкнутый водоём планеты.":
    "Wołga, około trzech i pół tysiąca kilometrów. Uchodzi nie do oceanu, lecz do Morza Kaspijskiego — największego zamkniętego zbiornika planety.",
  "Какая из сибирских рек самая полноводная?":
    "Która z rzek syberyjskich ma największy przepływ?",
  "Обь": "Ob",
  "Енисей": "Jenisej",
  "Лена": "Lena",
  "Амур": "Amur",
  "Енисей. Все три великие сибирские реки текут на север, а Амур на Дальнем Востоке течёт на восток, и по нему частично проходит граница с Китаем.":
    "Jenisej. Wszystkie trzy wielkie rzeki syberyjskie płyną na północ, a Amur na Dalekim Wschodzie płynie na wschód i częściowo biegnie po nim granica z Chinami.",
  "Какова глубина Байкала?": "Jaka jest głębokość Bajkału?",
  "642 метра": "642 metry",
  "1042 метра": "1042 metry",
  "1642 метра": "1642 metry",
  "2642 метра": "2642 metry",
  "1642 метра — самое глубокое озеро мира. В нём сосредоточено около пятой части мировых запасов поверхностной пресной воды.":
    "1642 metry — najgłębsze jezioro świata. Skupia około jednej piątej światowych zasobów powierzchniowej wody słodkiej.",
  "Какое озеро является крупнейшим пресноводным в Европе?":
    "Które jezioro jest największym jeziorem słodkowodnym Europy?",
  "Чудское": "Czudzkie",
  "Ладожское. Байкал глубже и больше по объёму, но находится в Азии, а Каспий — солёный и замкнутый.":
    "Ładoga. Bajkał jest głębszy i większy objętością, ale leży w Azji, a Kaspijskie jest słone i zamknięte.",
  "Какой хребет разделяет Европу и Азию и богат рудами?":
    "Które pasmo dzieli Europę i Azję i jest bogate w rudy?",
  "Алтай": "Ałtaj",
  "Саяны": "Sajany",
  "Урал — древний и невысокий хребет. На его рудах выросла уральская промышленность ещё в петровское время.":
    "Ural — pasmo stare i niewysokie. Na jego rudach wyrósł przemysł uralski jeszcze w czasach Piotra I.",
  "Какой вулкан является высочайшим действующим вулканом Евразии?":
    "Który wulkan jest najwyższym czynnym wulkanem Eurazji?",
  "Казбек": "Kazbek",
  "Авачинская Сопка": "Awaczyńska Sopka",
  "Ключевская Сопка на Камчатке. Эльбрус и Казбек — потухшие вулканы Кавказа, а Эльбрус вдобавок высшая точка России.":
    "Kluczewska Sopka na Kamczatce. Elbrus i Kazbek to wygasłe wulkany Kaukazu, a Elbrus jest w dodatku najwyższym punktem Rosji.",
  "Какой климат преобладает в Сибири?": "Jaki klimat przeważa na Syberii?",
  "Морской": "Morski",
  "Резко континентальный": "Skrajnie kontynentalny",
  "Субтропический": "Podzwrotnikowy",
  "Муссонный": "Monsunowy",
  "Резко континентальный: очень холодная зима и жаркое лето, разница между ними доходит до шестидесяти градусов. Муссонный климат — на Дальнем Востоке.":
    "Skrajnie kontynentalny: bardzo mroźna zima i upalne lato, a różnica między nimi dochodzi do sześćdziesięciu stopni. Klimat monsunowy panuje na Dalekim Wschodzie.",
  "Какие населённые пункты оспаривают звание полюса холода Северного полушария?":
    "Które miejscowości spierają się o miano bieguna zimna półkuli północnej?",
  "Норильск и Мурманск": "Norylsk i Murmańsk",
  "Оймякон и Верхоянск": "Ojmiakon i Wierchojańsk",
  "Воркута и Салехард": "Workuta i Salechard",
  "Якутск и Магадан": "Jakuck i Magadan",
  "Оба в Якутии, и там фиксировали температуры около минус шестидесяти семи градусов. В тот же январский день в Сочи может быть плюс десять.":
    "Obie leżą w Jakucji i notowano tam temperatury około minus sześćdziesięciu siedmiu stopni. Tego samego styczniowego dnia w Soczi może być plus dziesięć.",
  "Где в России субтропический климат?": "Gdzie w Rosji panuje klimat podzwrotnikowy?",
  "На побережье Чёрного моря около Сочи": "Na wybrzeżu Morza Czarnego w okolicach Soczi",
  "На юге Сибири": "Na południu Syberii",
  "На Камчатке": "Na Kamczatce",
  "Узкая полоса черноморского побережья, защищённая с севера горами. Это единственная субтропическая зона страны.":
    "Wąski pas wybrzeża czarnomorskiego, osłonięty od północy górami. To jedyna strefa podzwrotnikowa kraju.",
  "Куда заносятся редкие и исчезающие виды?": "Dokąd wpisuje się gatunki rzadkie i ginące?",
  "В Красную книгу": "Do Czerwonej Księgi",
  "В Зелёную книгу": "Do Zielonej Księgi",
  "В реестр заповедников": "Do rejestru rezerwatów",
  "В список ЮНЕСКО": "Na listę UNESCO",
  "В Красную книгу. Среди самых известных её обитателей — амурский тигр, белый медведь, зубр и дальневосточный леопард.":
    "Do Czerwonej Księgi. Wśród najbardziej znanych jej mieszkańców są tygrys amurski, niedźwiedź polarny, żubr i lampart amurski.",
  "Какая статья Конституции содержит перечень субъектов Федерации?":
    "Który artykuł Konstytucji zawiera wykaz podmiotów Federacji?",
  "Статья 5": "Artykuł 5",
  "Статья 65": "Artykuł 65",
  "Статья 71": "Artykuł 71",
  "Статья 73": "Artykuł 73",
  "Статья 65. Статья 5 говорит о равноправии субъектов, а 71 и 73 распределяют предметы ведения.":
    "Artykuł 65. Artykuł 5 mówi o równouprawnieniu podmiotów, a 71 i 73 rozdzielają zakresy właściwości.",
  "Какой вид субъекта Федерации самый многочисленный?":
    "Który rodzaj podmiotu Federacji jest najliczniejszy?",
  "Область": "Obwód",
  "Автономный округ": "Okręg autonomiczny",
  "Области, вместе с краями, составляют большинство субъектов. Автономная область при этом всего одна — Еврейская.":
    "Obwody, razem z krajami, stanowią większość podmiotów. Obwód autonomiczny jest przy tym tylko jeden — Żydowski.",
  "Какие города являются самостоятельными субъектами Федерации?":
    "Które miasta są samodzielnymi podmiotami Federacji?",
  "Москва, Санкт-Петербург и Севастополь": "Moskwa, Sankt Petersburg i Sewastopol",
  "Только Москва": "Tylko Moskwa",
  "Москва, Санкт-Петербург и Новосибирск": "Moskwa, Sankt Petersburg i Nowosybirsk",
  "Все города-миллионники": "Wszystkie miasta powyżej miliona mieszkańców",
  "Города федерального значения — отдельный вид субъекта. Новосибирск, несмотря на размер, входит в состав Новосибирской области.":
    "Miasta o znaczeniu federalnym to osobny rodzaj podmiotu. Nowosybirsk mimo swojej wielkości wchodzi w skład obwodu nowosybirskiego.",
  "Сколько автономных областей в составе России?":
    "Ile obwodów autonomicznych wchodzi w skład Rosji?",
  "Двадцать четыре": "Dwadzieścia cztery",
  "Одна — Еврейская автономная область. Автономных округов несколько, и это другой вид субъекта.":
    "Jeden — Żydowski Obwód Autonomiczny. Okręgów autonomicznych jest kilka i to inny rodzaj podmiotu.",
  "Какой документ является основным для края или области?":
    "Jaki dokument jest podstawowy dla kraju albo obwodu?",
  "Конституция": "Konstytucja",
  "Устав": "Statut",
  "Договор с Федерацией": "Umowa z Federacją",
  "Регламент": "Regulamin",
  "Устав. Конституция есть только у республик, и это одно из двух отличий, наряду с правом устанавливать государственные языки.":
    "Statut. Konstytucję mają tylko republiki i jest to jedna z dwóch różnic, obok prawa do ustanawiania języków państwowych.",
  "Какие языки являются государственными в Татарстане?":
    "Jakie języki są państwowe w Tatarstanie?",
  "Только русский": "Tylko rosyjski",
  "Русский и татарский": "Rosyjski i tatarski",
  "Только татарский": "Tylko tatarski",
  "Русский, татарский и башкирский": "Rosyjski, tatarski i baszkirski",
  "Республики вправе устанавливать свои государственные языки наряду с русским. Так же устроено в Якутии с якутским и в Башкортостане с башкирским.":
    "Republiki mogą ustanawiać własne języki państwowe obok rosyjskiego. Tak samo urządzono to w Jakucji z jakuckim i w Baszkortostanie z baszkirskim.",
  "Что относится к исключительному ведению Федерации по статье 71?":
    "Co należy do wyłącznej właściwości Federacji według artykułu 71?",
  "Оборона, внешняя политика, гражданство, денежная эмиссия":
    "Obrona, polityka zagraniczna, obywatelstwo, emisja pieniądza",
  "Образование и здравоохранение": "Oświata i ochrona zdrowia",
  "Благоустройство городов": "Zagospodarowanie miast",
  "Природопользование": "Korzystanie z zasobów przyrody",
  "Здесь субъекты не законодательствуют вовсе. Образование, здравоохранение и природопользование относятся к совместному ведению по статье 72.":
    "Tutaj podmioty nie stanowią prawa w ogóle. Oświata, ochrona zdrowia i korzystanie z zasobów przyrody należą do właściwości wspólnej według artykułu 72.",
  "Что говорит статья 73 о полномочиях субъектов?":
    "Co mówi artykuł 73 o uprawnieniach podmiotów?",
  "Субъекты обладают всей полнотой власти вне ведения Федерации и совместного ведения":
    "Podmiotom przysługuje pełnia władzy poza właściwością Federacji i właściwością wspólną",
  "Субъекты действуют только по прямому поручению центра":
    "Podmioty działają tylko na bezpośrednie polecenie centrum",
  "Полномочия субъектов перечислены отдельным списком":
    "Uprawnienia podmiotów wyliczono osobnym wykazem",
  "Субъекты не обладают собственными полномочиями":
    "Podmiotom nie przysługują własne uprawnienia",
  "Перечисляется то, что забирает центр; остальное остаётся регионам. Та же логика лежит в основе испанского и немецкого федерализма.":
    "Wylicza się to, co zabiera centrum; reszta zostaje regionom. Ta sama logika leży u podstaw federalizmu hiszpańskiego i niemieckiego.",
  "Как может называться законодательный орган субъекта?":
    "Jak może nazywać się organ ustawodawczy podmiotu?",
  "Только думой": "Tylko dumą",
  "Думой, советом, хуралом, курултаем и иначе": "Dumą, radą, churałem, kurułtajem i inaczej",
  "Только собранием": "Tylko zgromadzeniem",
  "Название одинаково во всех субъектах": "Nazwa jest taka sama we wszystkich podmiotach",
  "Название выбирает сам субъект, и в нём часто отражается язык и традиция региона: Хурал в Бурятии и Калмыкии, Курултай в Башкортостане.":
    "Nazwę wybiera sam podmiot i często odbija się w niej język i tradycja regionu: churał w Buriacji i Kałmucji, kurułtaj w Baszkortostanie.",
  "Сколько федеральных округов в России?": "Ile jest w Rosji okręgów federalnych?",
  "Восемь. Они введены указом Президента в 2000 году, в Конституции не упомянуты и субъектами Федерации не являются.":
    "Osiem. Wprowadzono je dekretem Prezydenta w 2000 roku, Konstytucja o nich nie wspomina i podmiotami Federacji nie są.",
  "Что происходило при укрупнении регионов в 2000-е годы?":
    "Co działo się przy łączeniu regionów w latach dwutysięcznych?",
  "Автономные округа объединялись с краями и областями через референдум":
    "Okręgi autonomiczne łączyły się z krajami i obwodami w drodze referendum",
  "Области делились на более мелкие": "Obwody dzieliły się na mniejsze",
  "Создавались новые республики": "Tworzono nowe republiki",
  "Субъекты переходили в другие федеральные округа":
    "Podmioty przechodziły do innych okręgów federalnych",
  "Каждое объединение проходило через референдум в обоих регионах, и число субъектов сократилось. Это единственный способ изменить состав Федерации изнутри.":
    "Każde połączenie przechodziło przez referendum w obu regionach, a liczba podmiotów się zmniejszyła. To jedyny sposób zmiany składu Federacji od wewnątrz.",
  "Что говорит статья 5 об отношениях субъектов с федеральными органами?":
    "Co mówi artykuł 5 o stosunkach podmiotów z organami federalnymi?",
  "Субъекты равноправны": "Podmioty są równouprawnione",
  "Республики имеют преимущество": "Republiki mają pierwszeństwo",
  "Города федерального значения имеют преимущество":
    "Miasta o znaczeniu federalnym mają pierwszeństwo",
  "Порядок определяется отдельным договором для каждого":
    "Tryb określa osobna umowa dla każdego",
  "Равноправие закреплено прямо, при том что исторические названия и объём собственных институтов различаются. Равенство здесь — о положении, а не об устройстве.":
    "Równouprawnienie zapisano wprost, przy tym że nazwy historyczne i zakres własnych instytucji się różnią. Równość jest tu o położeniu, a nie o ustroju.",
  "По какому признаку выделялись автономные округа?":
    "Według jakiego kryterium wyodrębniano okręgi autonomiczne?",
  "По территориям коренных народов Севера": "Według terytoriów rdzennych narodów Północy",
  "По численности населения": "Według liczby ludności",
  "По границам федеральных округов": "Według granic okręgów federalnych",
  "По уровню промышленного развития": "Według poziomu rozwoju przemysłu",
  "Некоторые из них до сих пор входят в состав области, оставаясь при этом самостоятельными субъектами Федерации — редкая конструкция даже среди федераций.":
    "Niektóre z nich do dziś wchodzą w skład obwodu, pozostając zarazem samodzielnymi podmiotami Federacji — konstrukcja rzadka nawet wśród federacji.",
  "Какой город является крупнейшим в Европе по населению?":
    "Które miasto jest największe w Europie pod względem liczby ludności?",
  "Лондон": "Londyn",
  "Париж": "Paryż",
  "Москва": "Moskwa",
  "Стамбул": "Stambuł",
  "Москва, около тринадцати миллионов жителей. Стамбул больше, но лежит преимущественно в азиатской части.":
    "Moskwa, około trzynastu milionów mieszkańców. Stambuł jest większy, ale leży w przeważającej części w części azjatyckiej.",
  "В каком году открылось московское метро?": "W którym roku otwarto metro moskiewskie?",
  "В 1917 году": "W 1917 roku",
  "В 1935 году": "W 1935 roku",
  "В 1947 году": "W 1947 roku",
  "В 1961 году": "W 1961 roku",
  "1935 год. Оформление станций первых очередей — часть архитектурного наследия города, и некоторые из них охраняются как памятники.":
    "Rok 1935. Wystrój stacji z pierwszych etapów budowy należy do dziedzictwa architektonicznego miasta, a niektóre z nich są chronione jako zabytki.",
  "Какой музей Санкт-Петербурга входит в число крупнейших в мире?":
    "Które muzeum Sankt Petersburga należy do największych na świecie?",
  "Третьяковская галерея": "Galeria Trietiakowska",
  "Эрмитаж": "Ermitaż",
  "Русский музей": "Muzeum Rosyjskie",
  "Кунсткамера": "Kunstkamera",
  "Эрмитаж, размещённый в Зимнем дворце и соседних зданиях. Третьяковская галерея находится в Москве.":
    "Ermitaż, mieszczący się w Pałacu Zimowym i sąsiednich gmachach. Galeria Trietiakowska znajduje się w Moskwie.",
  "Что такое белые ночи?": "Czym są białe noce?",
  "Период, когда ночью почти не темнеет из-за северной широты":
    "Okresem, kiedy nocą prawie się nie ściemnia z powodu północnej szerokości geograficznej",
  "Зимние праздники в Петербурге": "Zimowymi świętami w Petersburgu",
  "Название фестиваля искусств": "Nazwą festiwalu sztuki",
  "Ночные экскурсии по разводным мостам": "Nocnymi wycieczkami po mostach zwodzonych",
  "В июне в Петербурге сумерки не переходят в настоящую ночь. На этом строится летний туристический сезон города.":
    "W czerwcu w Petersburgu zmierzch nie przechodzi w prawdziwą noc. Na tym opiera się letni sezon turystyczny miasta.",
  "Сколько примерно в России городов-миллионников?":
    "Ile mniej więcej jest w Rosji miast powyżej miliona mieszkańców?",
  "Около шестнадцати": "Około szesnastu",
  "Около тридцати": "Około trzydziestu",
  "Более пятидесяти": "Ponad pięćdziesiąt",
  "Около шестнадцати, считая обе столицы. Крупнейшие после них — Новосибирск, Екатеринбург, Казань и Нижний Новгород.":
    "Około szesnastu, licząc obie stolice. Największe po nich to Nowosybirsk, Jekaterynburg, Kazań i Niżny Nowogród.",
  "Какой город является третьим по населению в стране?":
    "Które miasto jest trzecie w kraju pod względem liczby ludności?",
  "Нижний Новгород": "Niżny Nowogród",
  "Новосибирск, выросший вокруг моста Транссиба через Обь. Рядом с ним находится Академгородок — крупный научный центр.":
    "Nowosybirsk, który wyrósł wokół mostu Transsybu przez Ob. Obok niego leży Akademgorodok — duży ośrodek naukowy.",
  "Чем известен казанский кремль?": "Z czego znany jest kreml kazański?",
  "Мечетью и православным собором внутри одной стены":
    "Z meczetu i prawosławnego soboru w obrębie jednego muru",
  "Самой высокой башней страны": "Z najwyższej wieży w kraju",
  "Тем, что построен в XIX веке": "Z tego, że zbudowano go w XIX wieku",
  "Тем, что в нём находится резиденция Президента России":
    "Z tego, że mieści się w nim rezydencja Prezydenta Rosji",
  "Ансамбль внесён в список Всемирного наследия ЮНЕСКО именно как памятник сосуществования двух традиций в одном городе.":
    "Zespół wpisano na listę światowego dziedzictwa UNESCO właśnie jako pomnik współistnienia dwóch tradycji w jednym mieście.",
  "Какой город является конечной точкой Транссиба?":
    "Które miasto jest punktem końcowym Transsybu?",
  "Хабаровск": "Chabarowsk",
  "Иркутск": "Irkuck",
  "Чита": "Czyta",
  "Владивосток, главный порт на Тихом океане. Время там опережает московское на семь часов.":
    "Władywostok, główny port nad Oceanem Spokojnym. Czas jest tam siedem godzin przed moskiewskim.",
  "Какова длина Транссибирской магистрали от Москвы до Владивостока?":
    "Jaka jest długość kolei transsyberyjskiej z Moskwy do Władywostoku?",
  "5288 километров": "5288 kilometrów",
  "7288 километров": "7288 kilometrów",
  "9288 километров": "9288 kilometrów",
  "12 288 километров": "12 288 kilometrów",
  "9288 километров и семь часовых поясов — самая длинная железная дорога в мире. Поезд идёт около шести суток.":
    "9288 kilometrów i siedem stref czasowych — najdłuższa linia kolejowa świata. Pociąg jedzie około sześciu dób.",
  "Какие города входят в Золотое кольцо?": "Które miasta wchodzą w skład Złotego Pierścienia?",
  "Владимир, Суздаль, Ярославль, Кострома и другие города северо-востока":
    "Włodzimierz, Suzdal, Jarosław, Kostroma i inne miasta północnego wschodu",
  "Города-миллионники европейской части":
    "Miasta powyżej miliona mieszkańców w części europejskiej",
  "Города Транссиба": "Miasta przy Transsybie",
  "Города Золотой Орды": "Miasta Złotej Ordy",
  "Это те земли, из которых выросло Московское государство. Белокаменные соборы XII века стоят там до сих пор.":
    "To te ziemie, z których wyrosło państwo moskiewskie. Białokamienne sobory z XII wieku stoją tam do dziś.",
  "За что присваивалось звание города-героя?": "Za co nadawano tytuł miasta-bohatera?",
  "За оборону в годы Великой Отечественной войны":
    "Za obronę w latach wielkiej wojny ojczyźnianej",
  "За промышленные достижения": "Za osiągnięcia przemysłowe",
  "За древность города": "Za dawność miasta",
  "За вклад в освоение космоса": "Za wkład w podbój kosmosu",
  "В нынешних границах России это Волгоград, Санкт-Петербург, Москва, Мурманск, Смоленск, Тула и Новороссийск. Позже появилось звание города воинской славы.":
    "W dzisiejszych granicach Rosji są to Wołgograd, Sankt Petersburg, Moskwa, Murmańsk, Smoleńsk, Tuła i Noworosyjsk. Później pojawił się tytuł miasta chwały wojennej.",
  "Что такое наукоград?": "Czym jest naukograd?",
  "Город, построенный вокруг научных институтов":
    "Miastem zbudowanym wokół instytutów naukowych",
  "Город с ограниченным въездом": "Miastem z ograniczonym wjazdem",
  "Университетский квартал": "Dzielnicą uniwersytecką",
  "Технопарк при заводе": "Parkiem technologicznym przy zakładzie",
  "Дубна, Королёв, Пущино и другие. От закрытого города наукоград отличается тем, что приехать туда можно свободно.":
    "Dubna, Korolow, Puszczino i inne. Od miasta zamkniętego naukograd różni się tym, że przyjechać tam można swobodnie.",
  "Что такое ЗАТО?": "Czym jest ZATO?",
  "Закрытое административно-территориальное образование с ограниченным въездом":
    "Zamkniętą jednostką administracyjno-terytorialną z ograniczonym wjazdem",
  "Заповедная территория особой охраны": "Terenem chronionym o szczególnym reżimie",
  "Западный административный округ": "Zachodnim okręgiem administracyjnym",
  "Завод оборонного значения": "Zakładem o znaczeniu obronnym",
  "Города при предприятиях атомной и оборонной промышленности. На картах советского времени многих из них попросту не было.":
    "Miasta przy zakładach przemysłu atomowego i obronnego. Na mapach z czasów radzieckich wielu z nich po prostu nie było.",
  "Сколько народов насчитала перепись 2021 года?":
    "Ile narodów naliczył spis powszechny z 2021 roku?",
  "Больше тысячи": "Ponad tysiąc",
  "Более 190": "Ponad 190",
  "Около 40": "Około 40",
  "Ровно 100": "Dokładnie 100",
  "Точное число всегда спорно: перепись записывает то, что человек говорит о себе сам, а границы между близкими группами проводят по-разному.":
    "Dokładna liczba zawsze bywa sporna: spis zapisuje to, co człowiek sam o sobie mówi, a granice między bliskimi grupami wytycza się rozmaicie.",
  "Какую долю населения составляют русские?": "Jaką część ludności stanowią Rosjanie?",
  "Около 95 %": "Około 95 %",
  "Около 60 %": "Około 60 %",
  "Около 80 %": "Około 80 %",
  "Примерно 105 миллионов человек по переписи 2021 года. В отдельных республиках картина совершенно другая.":
    "Mniej więcej 105 milionów ludzi według spisu z 2021 roku. W poszczególnych republikach obraz jest zupełnie inny.",
  "Какой народ идёт за русскими по численности?":
    "Który naród idzie za Rosjanami pod względem liczebności?",
  "Татары": "Tatarzy",
  "Башкиры": "Baszkirzy",
  "Чуваши": "Czuwasze",
  "Армяне": "Ormianie",
  "По переписи 2021 года за татарами следуют чеченцы, башкиры, чуваши, аварцы и армяне.":
    "Według spisu z 2021 roku po Tatarach idą Czeczeni, Baszkirzy, Czuwasze, Awarowie i Ormianie.",
  "Есть ли в нынешнем российском паспорте графа «национальность»?":
    "Czy w dzisiejszym rosyjskim paszporcie jest rubryka „narodowość”?",
  "Да, она заполняется по родителям": "Tak, wypełnia się ją według rodziców",
  "Да, но заполняется по желанию": "Tak, ale wypełnia się ją na życzenie",
  "Она есть только в загранпаспорте": "Jest tylko w paszporcie zagranicznym",
  "Нет, её убрали": "Nie, usunięto ją",
  "В советском паспорте такая графа была и записывалась по родителям. В паспорте нынешнего образца её нет — национальность человек определяет сам.":
    "W paszporcie radzieckim taka rubryka była i wpisywano ją według rodziców. W paszporcie dzisiejszego wzoru jej nie ma — narodowość człowiek określa sam.",
  "Какая статья Конституции гарантирует права коренных малочисленных народов?":
    "Który artykuł Konstytucji gwarantuje prawa rdzennych małych narodów?",
  "Статья 14": "Artykuł 14",
  "Статья 3": "Artykuł 3",
  "Статья 69": "Artykuł 69",
  "Статья 26": "Artykuł 26",
  "Статья 26 говорит о национальной принадлежности каждого, статья 14 — о светском государстве, статья 3 — о носителе суверенитета.":
    "Artykuł 26 mówi o przynależności narodowej każdego, artykuł 14 o państwie świeckim, a artykuł 3 o nosicielu suwerenności.",
  "Сколько народов входит в единый перечень коренных малочисленных?":
    "Ile narodów wchodzi do jednolitego wykazu rdzennych małych narodów?",
  "Сорок семь": "Czterdzieści siedem",
  "Сто девяносто": "Sto dziewięćdziesiąt",
  "Перечень утверждает Правительство. Двадцать четыре — это число республик, а сто девяносто с лишним — общее число народов страны.":
    "Wykaz zatwierdza Rząd. Dwadzieścia cztery to liczba republik, a sto dziewięćdziesiąt z górą to ogólna liczba narodów kraju.",
  "Что даёт статус коренного малочисленного народа?": "Co daje status rdzennego małego narodu?",
  "Освобождение от налогов": "Zwolnienie z podatków",
  "Отдельное представительство в Государственной Думе":
    "Osobne przedstawicielstwo w Dumie Państwowej",
  "Собственное гражданство": "Własne obywatelstwo",
  "Права на традиционное природопользование, льготы на промысел и досрочную пенсию":
    "Prawa do tradycyjnego korzystania z przyrody, ulgi na połowy i łowy oraz wcześniejszą emeryturę",
  "Это не привилегия по происхождению, а возмещение за то, что современное хозяйство сокращает землю традиционного промысла.":
    "To nie przywilej z racji pochodzenia, lecz wyrównanie za to, że dzisiejsza gospodarka odbiera ziemię tradycyjnym zajęciom.",
  "Всегда ли титульный народ составляет большинство в своей республике?":
    "Czy naród tytularny zawsze stanowi większość w swojej republice?",
  "Нет: в Карелии карелов немного, в Башкортостане башкир около четверти":
    "Nie: w Karelii Karelów jest niewielu, w Baszkortostanie Baszkirów około jednej czwartej",
  "Да, иначе республику переименовали бы": "Tak, inaczej republikę by przemianowano",
  "Да, это условие статуса республики": "Tak, to warunek statusu republiki",
  "Так было до 1993 года": "Tak było do 1993 roku",
  "Имя республики говорит об истории, а не о нынешней арифметике. В Чечне, Ингушетии, Дагестане и Туве титульные народы действительно преобладают.":
    "Nazwa republiki mówi o historii, a nie o dzisiejszej arytmetyce. W Czeczenii, Inguszetii, Dagestanie i Tuwie narody tytularne rzeczywiście przeważają.",
  "Сколько человек при переписи 2021 года не указали национальность?":
    "Ile osób przy spisie z 2021 roku nie podało narodowości?",
  "Никто: ответ обязателен": "Nikt: odpowiedź jest obowiązkowa",
  "Около шестнадцати миллионов": "Około szesnastu milionów",
  "Несколько тысяч": "Kilka tysięcy",
  "Около миллиона": "Około miliona",
  "Ответ на этот вопрос переписи добровольный, и очень многие им не воспользовались.":
    "Odpowiedź na to pytanie spisu jest dobrowolna i bardzo wielu z niej nie skorzystało.",
  "Как перевести выражение «многонациональный народ» из преамбулы на язык прав?":
    "Jak przełożyć wyrażenie „wielonarodowy naród” z preambuły na język praw?",
  "Суверенитет принадлежит крупнейшему народу": "Suwerenność należy do największego narodu",
  "Суверенитет разделён между республиками": "Suwerenność jest podzielona między republiki",
  "Суверенитет принадлежит всем народам страны вместе":
    "Suwerenność należy do wszystkich narodów kraju razem",
  "Каждый народ обладает собственным суверенитетом": "Każdy naród ma własną suwerenność",
  "Носитель суверенитета в статье 3 назван так же, как в преамбуле. Отсюда и федеративное устройство страны.":
    "Nosiciela suwerenności artykuł 3 nazywa tak samo jak preambuła. Stąd też federalny ustrój kraju.",
  "Какое право, кроме указания национальности, даёт статья 26?":
    "Jakie prawo poza wskazaniem narodowości daje artykuł 26?",
  "Пользоваться родным языком и свободно выбирать язык общения и обучения":
    "Posługiwanie się językiem ojczystym i swobodny wybór języka porozumiewania się i nauki",
  "Требовать преподавания на родном языке в любой школе страны":
    "Żądanie nauczania w języku ojczystym w każdej szkole w kraju",
  "Получать документы на родном языке в любом органе власти":
    "Otrzymywanie dokumentów w języku ojczystym w każdym organie władzy",
  "Менять гражданство без согласия государства": "Zmianę obywatelstwa bez zgody państwa",
  "Свободный выбор языка общения, воспитания, обучения и творчества. Обязать государство преподавать любой язык где угодно эта статья не может.":
    "Swobodny wybór języka porozumiewania się, wychowania, nauki i twórczości. Zobowiązać państwa do nauczania dowolnego języka gdziekolwiek ten artykuł nie może.",
  "В каких республиках титульный народ составляет уверенное большинство?":
    "W których republikach naród tytularny stanowi pewną większość?",
  "В Мордовии и Удмуртии": "W Mordowii i Udmurcji",
  "Ни в одной": "W żadnej",
  "В Чечне, Ингушетии, Дагестане и Туве": "W Czeczenii, Inguszetii, Dagestanie i Tuwie",
  "В Карелии и Коми": "W Karelii i Republice Komi",
  "В Карелии карелов небольшая доля, в Мордовии и Удмуртии преобладают русские. Национальный состав в России — вопрос конкретного места, а не общей цифры.":
    "W Karelii udział Karelów jest niewielki, a w Mordowii i Udmurcji przeważają Rosjanie. Skład narodowościowy w Rosji jest sprawą konkretnego miejsca, a nie ogólnej liczby.",
  "Почему число народов при каждой переписи оказывается спорным?":
    "Dlaczego liczba narodów przy każdym spisie okazuje się sporna?",
  "Часть народов запрещено учитывать": "Części narodów nie wolno uwzględniać",
  "Перепись записывает самоопределение, а границы между близкими группами проводят по-разному":
    "Spis zapisuje samookreślenie, a granice między bliskimi grupami wytycza się rozmaicie",
  "Перепись охватывает не всю страну": "Spis nie obejmuje całego kraju",
  "Список народов утверждается заново каждые десять лет":
    "Wykaz narodów zatwierdza się od nowa co dziesięć lat",
  "Одни считают группу самостоятельным народом, другие — частью соседнего. Ни один вариант подсчёта не отменяет ответа самого человека.":
    "Jedni uważają grupę za samodzielny naród, drudzy za część sąsiedniego. Żaden sposób liczenia nie unieważnia odpowiedzi samego człowieka.",
  "Какая численность служит верхней границей для коренного малочисленного народа?":
    "Jaka liczebność stanowi górną granicę dla rdzennego małego narodu?",
  "Сто тысяч человек": "Sto tysięcy osób",
  "Десять тысяч человек": "Dziesięć tysięcy osób",
  "Границы нет": "Granicy nie ma",
  "Пятьдесят тысяч человек": "Pięćdziesiąt tysięcy osób",
  "Кроме численности учитываются жизнь на землях предков, традиционное хозяйство и осознание себя самостоятельной общностью. Некоторые из этих народов — несколько сотен человек.":
    "Poza liczebnością bierze się pod uwagę życie na ziemiach przodków, tradycyjne gospodarowanie i poczucie odrębnej wspólnoty. Niektóre z tych narodów liczą kilkaset osób.",
  "Какой язык является государственным на всей территории страны?":
    "Który język jest państwowy na całym terytorium kraju?",
  "Государственного языка нет": "Języka państwowego nie ma",
  "Русский": "Rosyjski",
  "Каждый регион решает сам": "Każdy region rozstrzyga sam",
  "Статья 68. Республики могут добавить к нему свои государственные языки, но заменить русский не могут.":
    "Artykuł 68. Republiki mogą dodać do niego własne języki państwowe, ale zastąpić rosyjskiego nie mogą.",
  "Какая статья Конституции объявляет Россию светским государством?":
    "Który artykuł Konstytucji ogłasza Rosję państwem świeckim?",
  "Статья 28": "Artykuł 28",
  "Статья 28 даёт свободу совести, статья 68 говорит о языках, статья 69 — о коренных малочисленных народах.":
    "Artykuł 28 daje wolność sumienia, artykuł 68 mówi o językach, a artykuł 69 o rdzennych małych narodach.",
  "Является ли Пасха нерабочим днём по федеральному закону?":
    "Czy Wielkanoc jest dniem wolnym od pracy według ustawy federalnej?",
  "Нет, но она всегда приходится на воскресенье": "Nie, ale zawsze wypada w niedzielę",
  "Да, вместе с понедельником после неё": "Tak, razem z poniedziałkiem po niej",
  "Да, но только в отдельных республиках": "Tak, ale tylko w niektórych republikach",
  "Да, с 1997 года": "Tak, od 1997 roku",
  "Из религиозных праздников нерабочим днём по всей стране объявлено только 7 января. Пасха передвижная и в перечень не входит.":
    "Ze świąt religijnych dniem wolnym w całym kraju ogłoszono tylko 7 stycznia. Wielkanoc jest ruchoma i do wykazu nie wchodzi.",
  "В каких регионах традиционен буддизм?": "W których regionach tradycyjny jest buddyzm?",
  "В Татарстане и Башкортостане": "W Tatarstanie i Baszkortostanie",
  "В Дагестане и Чечне": "W Dagestanie i Czeczenii",
  "В Калмыкии, Бурятии и Туве": "W Kałmucji, Buriacji i Tuwie",
  "Калмыкия — единственный буддийский регион в Европе. Татарстан, Башкортостан, Дагестан и Чечня — области распространения ислама.":
    "Kałmucja jest jedynym buddyjskim regionem w Europie. Tatarstan, Baszkortostan, Dagestan i Czeczenia to obszary islamu.",
  "Сколько примерно языков народов России существует?":
    "Ile mniej więcej istnieje języków narodów Rosji?",
  "Ровно сто": "Dokładnie sto",
  "Более тысячи": "Ponad tysiąc",
  "Около ста пятидесяти": "Około stu pięćdziesięciu",
  "Около двадцати": "Około dwudziestu",
  "Часть из них ЮНЕСКО относит к исчезающим. Государственный статус в республиках имеют несколько десятков.":
    "Część z nich UNESCO zalicza do ginących. Status języka państwowego w republikach ma kilkadziesiąt.",
  "Что гарантирует статья 28?": "Co gwarantuje artykuł 28?",
  "Право менять только между традиционными религиями":
    "Prawo przechodzenia tylko między religiami tradycyjnymi",
  "Свободу совести, включая право не исповедовать никакой религии":
    "Wolność sumienia, wraz z prawem do niewyznawania żadnej religii",
  "Право религиозных объединений на бюджетную поддержку":
    "Prawo związków wyznaniowych do wsparcia z budżetu",
  "Обязательное изучение основ религии в школе": "Obowiązkową naukę podstaw religii w szkole",
  "Свободно выбирать, иметь и распространять убеждения и действовать в согласии с ними. Право не верить в этой статье записано наравне с правом верить.":
    "Swobodne wybieranie, posiadanie i szerzenie przekonań oraz działanie w zgodzie z nimi. Prawo do niewiary zapisano w tym artykule na równi z prawem do wiary.",
  "Какая республика объявила государственными языки всех своих народов сразу?":
    "Która republika ogłosiła językami państwowymi języki wszystkich swoich narodów naraz?",
  "Якутия": "Jakucja",
  "Бурятия": "Buriacja",
  "Карелия": "Karelia",
  "Дагестан": "Dagestan",
  "Их там больше десятка. Это самый многоязычный субъект страны, и решение отражает именно это.":
    "Jest ich tam ponad dziesięć. To najbardziej wielojęzyczny podmiot kraju i właśnie to odbija ta decyzja.",
  "Что решил Конституционный Суд в 2004 году о письменности?":
    "Co Sąd Konstytucyjny rozstrzygnął w 2004 roku w sprawie pisma?",
  "Требование единой графической основы соответствует Конституции":
    "Wymóg jednolitej podstawy graficznej jest zgodny z Konstytucją",
  "Республики вправе выбирать письменность сами": "Republiki mogą same wybierać pismo",
  "Латиница допустима для языков без своей традиции":
    "Alfabet łaciński jest dopuszczalny dla języków bez własnej tradycji",
  "Вопрос относится к ведению муниципалитетов": "Sprawa należy do właściwości gmin",
  "Письменность государственных языков признана вопросом общегосударственным, а не только республиканским.":
    "Pismo języków państwowych uznano za sprawę ogólnopaństwową, a nie tylko republikańską.",
  "Какие религии названы в преамбуле закона о свободе совести 1997 года?":
    "Jakie religie wymienia preambuła ustawy o wolności sumienia z 1997 roku?",
  "Преамбула религий не называет": "Preambuła religii nie wymienia",
  "Христианство, ислам, буддизм и иудаизм": "Chrześcijaństwo, islam, buddyzm i judaizm",
  "Только православие": "Tylko prawosławie",
  "Все зарегистрированные объединения перечислены поимённо":
    "Wszystkie zarejestrowane związki wyliczono z nazwy",
  "Преамбула признаёт особую роль православия в истории страны и выражает уважение к этим религиям как части исторического наследия народов России.":
    "Preambuła uznaje szczególną rolę prawosławia w dziejach kraju i wyraża szacunek dla tych religii jako części dziedzictwa historycznego narodów Rosji.",
  "Какой праздник отмечается 24 мая?": "Jakie święto obchodzi się 24 maja?",
  "День славянской письменности и культуры": "Dzień Piśmiennictwa i Kultury Słowiańskiej",
  "День русского языка": "Dzień Języka Rosyjskiego",
  "День русского языка — 6 июня, в день рождения Пушкина; День народного единства — 4 ноября; День Конституции — 12 декабря.":
    "Dzień Języka Rosyjskiego przypada 6 czerwca, w dzień urodzin Puszkina; Dzień Jedności Narodowej 4 listopada; Dzień Konstytucji 12 grudnia.",
  "Как обстоит дело с выходными на Ураза-байрам и Курбан-байрам?":
    "Jak wygląda sprawa dni wolnych na Uraza-bajram i Kurban-bajram?",
  "Их объявляют выходными законы отдельных республик":
    "Dniami wolnymi ogłaszają je ustawy poszczególnych republik",
  "Это нерабочие дни по всей стране": "To dni wolne w całym kraju",
  "Они не бывают выходными нигде": "Nigdzie nie bywają dniami wolnymi",
  "Решение принимает работодатель": "Rozstrzyga o tym pracodawca",
  "Общероссийский нерабочий религиозный праздник один — 7 января. Остальное решается региональным законом.":
    "Ogólnorosyjskie wolne święto religijne jest jedno — 7 stycznia. O reszcie rozstrzyga ustawa regionalna.",
  "После какого события в законе о языках появилось требование кириллицы?":
    "Po jakim wydarzeniu w ustawie o językach pojawił się wymóg cyrylicy?",
  "После принятия Конституции 1993 года": "Po uchwaleniu Konstytucji w 1993 roku",
  "После переписи 2002 года": "Po spisie z 2002 roku",
  "После решения Татарстана перевести татарскую письменность на латиницу":
    "Po decyzji Tatarstanu o przeniesieniu pisma tatarskiego na alfabet łaciński",
  "После распада СССР": "Po rozpadzie ZSRR",
  "Республика приняла такое решение в конце 1990-х. Требование единой графической основы появилось в ответ, а в 2004 году его подтвердил Конституционный Суд.":
    "Republika podjęła taką decyzję pod koniec lat dziewięćdziesiątych. Wymóg jednolitej podstawy graficznej pojawił się w odpowiedzi, a w 2004 roku potwierdził go Sąd Konstytucyjny.",
  "Что задало нынешний облик русских печатных букв?":
    "Co nadało dzisiejszą postać rosyjskim literom drukowanym?",
  "Типографские правила XIX века": "Zasady typograficzne XIX wieku",
  "Гражданская азбука Петра I 1708 года": "Grażdanka Piotra I z 1708 roku",
  "Реформа орфографии 1918 года": "Reforma ortografii z 1918 roku",
  "Азбука Кирилла и Мефодия без изменений": "Alfabet Cyryla i Metodego bez zmian",
  "Кирилл и Мефодий принесли письменность в IX веке, реформа 1918 года убрала несколько букв, а форму нынешнего шрифта задала гражданская азбука.":
    "Cyryl i Metody przynieśli pismo w IX wieku, reforma z 1918 roku usunęła kilka liter, a kształt dzisiejszego kroju nadała grażdanka.",
  "Может ли алфавит государственного языка республики строиться не на кириллице?":
    "Czy alfabet języka państwowego republiki może opierać się nie na cyrylicy?",
  "Нет ни при каких условиях": "Nie w żadnym wypadku",
  "Да, по решению парламента республики": "Tak, na mocy uchwały parlamentu republiki",
  "Да, если язык не имеет кириллической традиции":
    "Tak, jeśli język nie ma tradycji cyrylickiej",
  "Только если это установит федеральный закон": "Tylko jeśli ustanowi to ustawa federalna",
  "Закон о языках оставляет такую возможность, но отдаёт её федеральному законодателю, а не республике.":
    "Ustawa o językach zostawia taką możliwość, ale oddaje ją ustawodawcy federalnemu, a nie republice.",
  "Кого считают создателем современного русского литературного языка?":
    "Kogo uważa się za twórcę współczesnego rosyjskiego języka literackiego?",
  "Николая Карамзина": "Nikołaja Karamzina",
  "Александра Пушкина": "Aleksandra Puszkina",
  "Михаила Ломоносова": "Michaiła Łomonosowa",
  "Льва Толстого": "Lwa Tołstoja",
  "До него книжный и разговорный язык расходились гораздо сильнее. «Евгений Онегин» написан уже языком, который читается сегодня почти без пояснений.":
    "Przed nim język książkowy i mówiony rozchodziły się dużo mocniej. „Eugeniusz Oniegin” napisany jest już językiem, który czyta się dziś niemal bez objaśnień.",
  "Какого числа отмечается День русского языка?":
    "Którego dnia obchodzi się Dzień Języka Rosyjskiego?",
  "1 сентября": "1 września",
  "6 июня": "6 czerwca",
  "24 мая": "24 maja",
  "В день рождения Пушкина. Это же число — Пушкинский день России, а 24 мая отмечают День славянской письменности.":
    "W dzień urodzin Puszkina. Ta sama data to Puszkinowski Dzień Rosji, a 24 maja obchodzi się Dzień Piśmiennictwa Słowiańskiego.",
  "Кто написал «Войну и мир»?": "Kto napisał „Wojnę i pokój”?",
  "Фёдор Достоевский": "Fiodor Dostojewski",
  "Иван Тургенев": "Iwan Turgieniew",
  "Антон Чехов": "Anton Czechow",
  "Ему же принадлежит «Анна Каренина», а усадьба Ясная Поляна сохранена как музей.":
    "Jemu też przypisuje się „Annę Kareninę”, a dwór w Jasnej Polanie zachowano jako muzeum.",
  "Как называется главное собрание русского искусства в Москве?":
    "Jak nazywa się główny zbiór sztuki rosyjskiej w Moskwie?",
  "Оружейная палата": "Zbrojownia",
  "Пушкинский дом": "Dom Puszkina",
  "Она выросла из частного собрания купца Павла Третьякова. Русский музей — петербургский, основан в 1895 году.":
    "Wyrósł ze zbioru prywatnego kupca Pawła Trietiakowa. Muzeum Rosyjskie jest petersburskie, założone w 1895 roku.",
  "Кто написал «Преступление и наказание»?": "Kto napisał „Zbrodnię i karę”?",
  "Николай Гоголь": "Nikołaj Gogol",
  "Михаил Лермонтов": "Michaił Lermontow",
  "Ему же принадлежат «Идиот» и «Братья Карамазовы». Из русских авторов его, вероятно, чаще всех переводят и ставят на сцене.":
    "Jego są też „Idiota” i „Bracia Karamazow”. Z autorów rosyjskich to jego zapewne najczęściej tłumaczą i wystawiają na scenie.",
  "Кто из русских писателей был вынужден отказаться от Нобелевской премии?":
    "Który z rosyjskich pisarzy musiał odmówić przyjęcia Nagrody Nobla?",
  "Иосиф Бродский": "Josif Brodski",
  "Премия 1958 года. Отказ был вынужденным, под давлением; Бунин, Шолохов, Солженицын и Бродский свои премии получили.":
    "Nagroda z 1958 roku. Odmowa była wymuszona, pod naciskiem; Bunin, Szołochow, Sołżenicyn i Brodski swoje nagrody odebrali.",
  "Что такое «Русские сезоны»?": "Czym były „Sezony rosyjskie”?",
  "Ежегодный фестиваль в Большом театре": "Dorocznym festiwalem w Teatrze Wielkim",
  "Цикл выставок передвижников": "Cyklem wystaw pieriedwiżników",
  "Серия концертов Чайковского за границей": "Serią koncertów Czajkowskiego za granicą",
  "Показы русского балета в Париже, начатые Дягилевым в 1909 году":
    "Pokazami baletu rosyjskiego w Paryżu, zaczętymi przez Diagilewa w 1909 roku",
  "Именно после них русский балет стал мировым эталоном: танцовщики и декорации оказались такими, каких в Париже не видели.":
    "To właśnie po nich balet rosyjski stał się światowym wzorcem: tancerze i dekoracje okazali się tacy, jakich w Paryżu nie widziano.",
  "Кто основал Московский Художественный театр?": "Kto założył Moskiewski Teatr Artystyczny?",
  "Станиславский и Немирович-Данченко": "Stanisławski i Niemirowicz-Danczenko",
  "Дягилев и Нижинский": "Diagilew i Niżyński",
  "Чехов и Горький": "Czechow i Gorki",
  "Мейерхольд и Вахтангов": "Meyerhold i Wachtangow",
  "Театр открылся в 1898 году, а метод работы с актёром — система Станиславского — преподаётся в театральных школах по всему миру.":
    "Teatr otwarto w 1898 roku, a metody pracy z aktorem — systemu Stanisławskiego — uczy się w szkołach teatralnych na całym świecie.",
  "Кому принадлежат балеты «Лебединое озеро», «Спящая красавица» и «Щелкунчик»?":
    "Czyje są balety „Jezioro łabędzie”, „Śpiąca królewna” i „Dziadek do orzechów”?",
  "Сергею Рахманинову": "Siergieja Rachmaninowa",
  "Петру Чайковскому": "Piotra Czajkowskiego",
  "Сергею Прокофьеву": "Siergieja Prokofiewa",
  "Игорю Стравинскому": "Igora Strawińskiego",
  "На этих трёх балетах держится мировой балетный репертуар. Стравинскому принадлежит «Весна священная», Прокофьеву — «Ромео и Джульетта».":
    "Na tych trzech baletach trzyma się światowy repertuar baletowy. Strawińskiego jest „Święto wiosny”, a Prokofiewa „Romeo i Julia”.",
  "Что объединяло передвижников?": "Co łączyło pieriedwiżników?",
  "Работа при императорской Академии художеств": "Praca przy cesarskiej Akademii Sztuk Pięknych",
  "Отказ от пейзажа как жанра": "Odrzucenie pejzażu jako gatunku",
  "Товарищество 1870 года, возившее выставки по городам":
    "Towarzystwo z 1870 roku, które woziło wystawy po miastach",
  "Общая манера письма": "Wspólna maniera malarska",
  "Устав и выставочный маршрут, а не стиль: писали они очень по-разному, и пейзаж у них стал самостоятельным сюжетом.":
    "Statut i trasa wystaw, a nie styl: malowali bardzo rozmaicie, a pejzaż stał się u nich samodzielnym tematem.",
  "Где впервые исполнили Ленинградскую симфонию Шостаковича?":
    "Gdzie po raz pierwszy wykonano Symfonię leningradzką Szostakowicza?",
  "В осаждённом Ленинграде в августе 1942 года": "W oblężonym Leningradzie w sierpniu 1942 roku",
  "В Москве после войны": "W Moskwie po wojnie",
  "В Куйбышеве в 1945 году": "W Kujbyszewie w 1945 roku",
  "В Нью-Йорке": "W Nowym Jorku",
  "Оркестр собрали из оставшихся в живых музыкантов города. Это Седьмая симфония композитора.":
    "Orkiestrę zebrano z muzyków miasta, którzy pozostali przy życiu. To Siódma symfonia kompozytora.",
  "Сколько русских авторов получили Нобелевскую премию по литературе?":
    "Ilu rosyjskich autorów dostało Nagrodę Nobla w dziedzinie literatury?",
  "Один": "Jeden",
  "Пятеро": "Pięciu",
  "Двое": "Dwóch",
  "Бунин в 1933 году, Пастернак в 1958-м, Шолохов в 1965-м, Солженицын в 1970-м и Бродский в 1987-м.":
    "Bunin w 1933 roku, Pasternak w 1958, Szołochow w 1965, Sołżenicyn w 1970 i Brodski w 1987.",
  "Какие четыре пьесы Чехова держат мировой репертуар?":
    "Które cztery sztuki Czechowa trzymają się w światowym repertuarze?",
  "«Три сестры», «Маскарад», «Борис Годунов», «Женитьба»":
    "„Trzy siostry”, „Maskarada”, „Borys Godunow”, „Ożenek”",
  "«Чайка», «Дядя Ваня», «Три сестры», «Вишнёвый сад»":
    "„Mewa”, „Wujaszek Wania”, „Trzy siostry”, „Wiśniowy sad”",
  "«Ревизор», «Гроза», «Горе от ума», «Чайка»": "„Rewizor”, „Burza”, „Mądremu biada”, „Mewa”",
  "«На дне», «Чайка», «Вишнёвый сад», «Бесприданница»":
    "„Na dnie”, „Mewa”, „Wiśniowy sad”, „Bezposażna”",
  "Чайка со шторы Художественного театра — эмблема именно отсюда. Остальные названия принадлежат Гоголю, Островскому, Грибоедову, Горькому, Лермонтову и Пушкину.":
    "Mewa z kurtyny Teatru Artystycznego to godło właśnie stąd. Pozostałe tytuły należą do Gogola, Ostrowskiego, Gribojedowa, Gorkiego, Lermontowa i Puszkina.",
  "Чем известен Иван Айвазовский?": "Z czego znany jest Iwan Ajwazowski?",
  "Портретами императорской семьи": "Z portretów rodziny cesarskiej",
  "Лесными пейзажами": "Z pejzaży leśnych",
  "Историческими полотнами о Сибири": "Z płócien historycznych o Syberii",
  "Морскими видами: почти шесть тысяч полотен":
    "Z widoków morskich: prawie sześć tysięcy płócien",
  "Он работал в Феодосии. Лес — это Шишкин, сибирские сюжеты — Суриков.":
    "Pracował w Teodozji. Las to Sziszkin, a wątki syberyjskie Surikow.",
  "В каком году основана Академия наук?": "W którym roku założono Akademię Nauk?",
  "В 1724 году, указом Петра I": "W 1724 roku, dekretem Piotra I",
  "В 1755 году": "W 1755 roku",
  "Одно из старейших научных учреждений Европы, созданное сразу как государственное. В 1755 году основан Московский университет.":
    "Jedna z najstarszych instytucji naukowych Europy, powołana od razu jako państwowa. W 1755 roku założono Uniwersytet Moskiewski.",
  "Кто сформулировал периодический закон?": "Kto sformułował prawo okresowości?",
  "Иван Павлов": "Iwan Pawłow",
  "Лев Ландау": "Lew Landau",
  "Дмитрий Менделеев": "Dmitrij Mendelejew",
  "Михаил Ломоносов": "Michaił Łomonosow",
  "1869 год. В таблице остались пустые клетки под неоткрытые элементы, и когда их нашли, свойства совпали с предсказанными.":
    "Rok 1869. W tablicy zostały puste pola pod nieodkryte pierwiastki, a kiedy je znaleziono, właściwości zgodziły się z przewidzianymi.",
  "Какого числа отмечается День космонавтики?": "Którego dnia obchodzi się Dzień Kosmonautyki?",
  "12 апреля": "12 kwietnia",
  "4 октября": "4 października",
  "В этот день в 1961 году состоялся первый полёт человека в космос. 4 октября 1957 года был запущен первый спутник.":
    "Tego dnia w 1961 roku odbył się pierwszy lot człowieka w kosmos. 4 października 1957 roku wystrzelono pierwszego sputnika.",
  "Кто стала первой женщиной в космосе?": "Kto został pierwszą kobietą w kosmosie?",
  "Светлана Савицкая": "Swietłana Sawicka",
  "Елена Кондакова": "Jelena Kondakowa",
  "Анна Кикина": "Anna Kikina",
  "1963 год, корабль «Восток-6». Савицкая первой из женщин вышла в открытый космос в 1984 году.":
    "Rok 1963, statek „Wostok-6”. Sawicka jako pierwsza z kobiet wyszła w otwartą przestrzeń w 1984 roku.",
  "По чьему замыслу основан Московский университет?":
    "Z czyjego zamysłu założono Uniwersytet Moskiewski?",
  "Екатерины II": "Katarzyny II",
  "Дмитрия Менделеева": "Dmitrija Mendelejewa",
  "Петра I": "Piotra I",
  "Университет открыт в 1755 году и носит его имя. Ломоносов был химиком, физиком, астрономом, поэтом и историком сразу.":
    "Uniwersytet otwarto w 1755 roku i nosi jego imię. Łomonosow był zarazem chemikiem, fizykiem, astronomem, poetą i historykiem.",
  "Кто первым из россиян получил Нобелевскую премию?":
    "Kto pierwszy z Rosjan otrzymał Nagrodę Nobla?",
  "Илья Мечников": "Ilja Miecznikow",
  "Пётр Капица": "Piotr Kapica",
  "1904 год, за работы о пищеварении. Мечников получил премию в 1908 году за учение об иммунитете.":
    "Rok 1904, za prace o trawieniu. Miecznikow dostał nagrodę w 1908 roku za naukę o odporności.",
  "Кто был главным конструктором космической программы?":
    "Kto był głównym konstruktorem programu kosmicznego?",
  "Константин Циолковский": "Konstantin Ciołkowski",
  "Игорь Курчатов": "Igor Kurczatow",
  "Сергей Королёв": "Siergiej Korolow",
  "Его имя держали в тайне до самой смерти в 1966 году. Циолковский был теоретиком, Курчатов вёл атомный проект.":
    "Jego nazwisko trzymano w tajemnicy aż do śmierci w 1966 roku. Ciołkowski był teoretykiem, a Kurczatow prowadził projekt atomowy.",
  "Кто первым вышел в открытый космос?": "Kto pierwszy wyszedł w otwartą przestrzeń kosmiczną?",
  "1965 год, корабль «Восход-2». Гагарин совершил первый полёт, Титов был вторым, Терешкова — первой женщиной.":
    "Rok 1965, statek „Woschod-2”. Gagarin odbył pierwszy lot, Titow był drugi, a Tierieszkowa pierwszą kobietą.",
  "В какой стране находится космодром Байконур?":
    "W jakim kraju znajduje się kosmodrom Bajkonur?",
  "На границе России и Казахстана": "Na granicy Rosji i Kazachstanu",
  "В Казахстане, Россия его арендует": "W Kazachstanie, Rosja go dzierżawi",
  "В России, Оренбургская область": "W Rosji, w obwodzie orenburskim",
  "В Узбекистане": "W Uzbekistanie",
  "Космодром остался за границей после распада СССР. Именно поэтому в Амурской области построили Восточный.":
    "Kosmodrom został za granicą po rozpadzie ZSRR. Właśnie dlatego w obwodzie amurskim zbudowano Wostocznyj.",
  "Сколько проработала на орбите станция «Мир»?": "Jak długo pracowała na orbicie stacja „Mir”?",
  "Двадцать пять лет": "Dwadzieścia pięć lat",
  "Она работает до сих пор": "Pracuje do dziś",
  "Пятнадцать лет, с 1986 по 2001 год": "Piętnaście lat, od 1986 do 2001 roku",
  "Пять лет, как и рассчитывали": "Pięć lat, tak jak liczono",
  "Расчётный срок был пятилетним. С 1998 года Россия участвует в Международной космической станции.":
    "Zakładany okres wynosił pięć lat. Od 1998 roku Rosja uczestniczy w Międzynarodowej Stacji Kosmicznej.",
  "Кто руководил атомным проектом?": "Kto kierował projektem atomowym?",
  "Андрей Сахаров": "Andriej Sacharow",
  "При нём в 1954 году в Обнинске заработала первая в мире атомная электростанция, а в 1959-м вышел в море атомный ледокол.":
    "Za niego w 1954 roku w Obnińsku ruszyła pierwsza na świecie elektrownia jądrowa, a w 1959 wyszedł w morze lodołamacz atomowy.",
  "Кто заложил теоретическую основу космонавтики?":
    "Kto położył teoretyczne podstawy kosmonautyki?",
  "Николай Кибальчич": "Nikołaj Kibalczicz",
  "Валентин Глушко": "Walentin Głuszko",
  "Константин Циолковский, школьный учитель из Калуги":
    "Konstantin Ciołkowski, nauczyciel szkolny z Kaługi",
  "Расчёт ракетного движения он опубликовал в 1903 году — за полвека до первого спутника.":
    "Rachunek napędu rakietowego ogłosił w 1903 roku — pół wieku przed pierwszym sputnikiem.",
  "Чем важен атомный ледокольный флот?": "Czym ważna jest flota atomowych lodołamaczy?",
  "Он принадлежит нескольким странам совместно": "Należy wspólnie do kilku państw",
  "Он единственный в мире, и без него Северный морской путь не работал бы круглый год":
    "Jest jedyna na świecie i bez niej Północna Droga Morska nie działałaby przez cały rok",
  "Он используется только для научных экспедиций": "Służy tylko wyprawom naukowym",
  "Он заменяет атомные электростанции на севере": "Zastępuje na północy elektrownie jądrowe",
  "Первым был ледокол «Ленин», вышедший в море в 1959 году.":
    "Pierwszy był lodołamacz „Lenin”, który wyszedł w morze w 1959 roku.",
  "Что такое «Луноход-1»?": "Czym był „Łunochod-1”?",
  "Первая ракета, достигшая Луны": "Pierwszą rakietą, która dotarła do Księżyca",
  "Первый спутник Луны": "Pierwszym sztucznym satelitą Księżyca",
  "Проект, который так и не был запущен": "Projektem, którego nigdy nie wystrzelono",
  "Первый самоходный аппарат, работавший на другом небесном теле":
    "Pierwszym pojazdem samojezdnym, który pracował na innym ciele niebieskim",
  "1970 год. Через год на орбиту вышла первая орбитальная станция — «Салют-1».":
    "Rok 1970. Rok później na orbitę weszła pierwsza stacja orbitalna — „Salut-1”.",
  "В какой форме заключается трудовой договор?": "W jakiej formie zawiera się umowę o pracę?",
  "Записью в трудовой книжке": "Wpisem do książeczki pracy",
  "Письменно, в двух экземплярах": "Pisemnie, w dwóch egzemplarzach",
  "Устно, при свидетелях": "Ustnie, przy świadkach",
  "Только через нотариуса": "Wyłącznie u notariusza",
  "Один экземпляр остаётся у работника. Если человека фактически допустили к работе, договор считается заключённым и без подписанной бумаги.":
    "Jeden egzemplarz zostaje u pracownika. Jeśli człowieka faktycznie dopuszczono do pracy, umowę uważa się za zawartą i bez podpisanego papieru.",
  "Какова нормальная продолжительность рабочей недели?":
    "Jaki jest normalny wymiar tygodnia pracy?",
  "Не более 48 часов": "Nie więcej niż 48 godzin",
  "Её устанавливает работодатель": "Ustala go pracodawca",
  "Не более 40 часов": "Nie więcej niż 40 godzin",
  "Не более 36 часов": "Nie więcej niż 36 godzin",
  "Трудовой кодекс задаёт верхнюю границу; у отдельных категорий работников неделя короче.":
    "Kodeks pracy wyznacza górną granicę; u niektórych kategorii pracowników tydzień jest krótszy.",
  "Из скольких копеек состоит рубль?": "Z ilu kopiejek składa się rubel?",
  "Из ста": "Ze stu",
  "Из десяти": "Z dziesięciu",
  "Из тысячи": "Z tysiąca",
  "Копейки давно отменены": "Kopiejki dawno zniesiono",
  "Графический знак рубля утверждён в 2013 году, а выпуск денег ведёт Центральный банк.":
    "Znak graficzny rubla zatwierdzono w 2013 roku, a emisję pieniądza prowadzi Bank Centralny.",
  "Как называется национальная платёжная система?": "Jak nazywa się krajowy system płatniczy?",
  "«Рубль»": "„Rubel”",
  "«Восток»": "„Wostok”",
  "«Спутник»": "„Sputnik”",
  "«Мир»": "„Mir”",
  "Пенсии и бюджетные выплаты зачисляются именно на такие карты. Безналичная оплата в стране распространена очень широко.":
    "Emerytury i wypłaty budżetowe wpływają właśnie na takie karty. Płatność bezgotówkowa jest w kraju bardzo rozpowszechniona.",
  "Какова наибольшая длительность испытательного срока по общему правилу?":
    "Jaka jest najdłuższa dopuszczalna próba według reguły ogólnej?",
  "Шесть месяцев для всех": "Sześć miesięcy dla wszystkich",
  "Год": "Rok",
  "Три месяца": "Trzy miesiące",
  "Один месяц": "Jeden miesiąc",
  "До шести месяцев испытание допускается только для руководителей организаций, их заместителей и главных бухгалтеров.":
    "Do sześciu miesięcy próba jest dopuszczalna tylko wobec kierowników organizacji, ich zastępców i głównych księgowych.",
  "Как часто должна выплачиваться заработная плата?":
    "Jak często musi być wypłacane wynagrodzenie?",
  "Не реже одного раза в квартал": "Nie rzadziej niż raz na kwartał",
  "Не реже чем каждые полмесяца": "Nie rzadziej niż co pół miesiąca",
  "Один раз в месяц": "Raz w miesiącu",
  "По усмотрению работодателя": "Według uznania pracodawcy",
  "Аванс здесь не любезность работодателя, а прямое требование Трудового кодекса.":
    "Zaliczka nie jest tu uprzejmością pracodawcy, lecz wprost wymogiem kodeksu pracy.",
  "Что такое МРОТ?": "Czym jest MROT?",
  "Средняя зарплата по стране": "Przeciętnym wynagrodzeniem w kraju",
  "Размер пособия по безработице": "Wysokością zasiłku dla bezrobotnych",
  "Минимальный стаж для пенсии": "Najkrótszym stażem uprawniającym do emerytury",
  "Минимальный размер оплаты труда, ниже которого платить нельзя":
    "Najniższym wynagrodzeniem za pracę, poniżej którego płacić nie wolno",
  "Устанавливается федеральным законом. В регионе может действовать собственное, более высокое соглашение.":
    "Ustala je ustawa federalna. W regionie może obowiązywać własne, wyższe porozumienie.",
  "Что произошло с трудовой книжкой в 2020 году?":
    "Co stało się z książeczką pracy w 2020 roku?",
  "Её перевели в электронный вид": "Przeniesiono ją do postaci elektronicznej",
  "Её отменили совсем": "Zniesiono ją całkowicie",
  "Её стали хранить у работника дома": "Zaczęto ją przechowywać u pracownika w domu",
  "Её заменил трудовой договор": "Zastąpiła ją umowa o pracę",
  "Тем, кто устраивается на работу впервые, бумажную книжку уже не заводят: сведения о стаже хранит Социальный фонд.":
    "Tym, którzy podejmują pracę po raz pierwszy, papierowej książeczki już się nie zakłada: dane o stażu przechowuje Fundusz Socjalny.",
  "Каковы ставки налога на профессиональный доход у самозанятых?":
    "Jakie są stawki podatku od dochodu zawodowego u samozatrudnionych?",
  "Самозанятые налог не платят": "Samozatrudnieni podatku nie płacą",
  "4 % с поступлений от частных лиц и 6 % от организаций":
    "4 % od wpływów od osób prywatnych i 6 % od organizacji",
  "13 % со всего дохода": "13 % od całego dochodu",
  "6 % во всех случаях": "6 % we wszystkich przypadkach",
  "Режим действует с 2019 года, без отчётности и без кассы, пока доход не превышает 2,4 миллиона рублей в год.":
    "Reżim obowiązuje od 2019 roku, bez sprawozdawczości i bez kasy, dopóki dochód nie przekracza 2,4 miliona rubli rocznie.",
  "Каким станет пенсионный возраст к 2028 году?": "Jaki będzie wiek emerytalny do 2028 roku?",
  "65 лет для всех": "65 lat dla wszystkich",
  "Он останется прежним": "Zostanie taki jak dotąd",
  "65 лет для мужчин и 60 лет для женщин": "65 lat dla mężczyzn i 60 lat dla kobiet",
  "60 лет для мужчин и 55 лет для женщин": "60 lat dla mężczyzn i 55 lat dla kobiet",
  "Реформа 2018 года подняла возраст постепенно. Кроме возраста нужны стаж и пенсионные коэффициенты.":
    "Reforma z 2018 roku podniosła wiek stopniowo. Poza wiekiem potrzebne są staż i współczynniki emerytalne.",
  "Что такое СНИЛС?": "Czym jest SNILS?",
  "Номер индивидуального лицевого счёта в пенсионном страховании":
    "Numerem indywidualnego konta w ubezpieczeniu emerytalnym",
  "Номер налогоплательщика": "Numerem podatnika",
  "Номер полиса медицинского страхования": "Numerem polisy ubezpieczenia zdrowotnego",
  "Номер трудового договора": "Numerem umowy o pracę",
  "На нём копится стаж, и он нужен почти для любой государственной услуги. Номер налогоплательщика — это ИНН.":
    "Na nim gromadzi się staż i potrzebny jest do niemal każdej usługi państwowej. Numer podatnika to INN.",
  "Есть ли трудовой договор, если человека допустили к работе, но бумагу не подписали?":
    "Czy umowa o pracę istnieje, jeśli człowieka dopuszczono do pracy, ale papieru nie podpisano?",
  "Только если прошло больше месяца": "Tylko jeśli minął ponad miesiąc",
  "Только по решению суда": "Tylko na mocy orzeczenia sądu",
  "Да, договор считается заключённым": "Tak, umowę uważa się za zawartą",
  "Нет, до подписи отношений нет": "Nie, przed podpisem nie ma stosunku pracy",
  "Работодатель обязан оформить документ письменно после этого, но права работника действуют с первого дня работы.":
    "Pracodawca ma obowiązek sporządzić potem dokument na piśmie, ale prawa pracownika działają od pierwszego dnia pracy.",
  "К какой части дохода применяется повышенная ставка подоходного налога?":
    "Do jakiej części dochodu stosuje się podwyższoną stawkę podatku dochodowego?",
  "К доходу супругов вместе": "Do dochodu małżonków łącznie",
  "Только к той части, которая перешла порог": "Tylko do tej części, która przekroczyła próg",
  "Ко всему доходу за год": "Do całego dochodu za rok",
  "К доходу следующего года": "Do dochodu roku następnego",
  "Шкала действует с 2025 года: базовая ставка 13 %, выше порогов — 15, 18, 20 и 22 процента, каждая на своей части дохода.":
    "Skala obowiązuje od 2025 roku: stawka podstawowa 13 %, powyżej progów 15, 18, 20 i 22 procent, każda na swojej części dochodu.",
  "Кто отвечает за устойчивость рубля?": "Kto odpowiada za stabilność rubla?",
  "Министерство финансов": "Ministerstwo Finansów",
  "Это названо в Конституции его основной функцией. Выпуск денег тоже ведёт он.":
    "Konstytucja nazywa to jego podstawowym zadaniem. Emisję pieniądza też prowadzi on.",
  "По какому номеру вызывают скорую помощь?": "Pod jaki numer wzywa się pogotowie ratunkowe?",
  "104": "104",
  "103": "103",
  "102": "102",
  "101 — пожарные и спасатели, 102 — полиция, 104 — аварийная газовая служба, 112 — единый экстренный номер.":
    "101 to straż pożarna i ratownicy, 102 policja, 104 pogotowie gazowe, a 112 jednolity numer alarmowy.",
  "Сколько классов занимает полное школьное обучение?": "Ile klas obejmuje pełna nauka szkolna?",
  "Четыре года начальной школы, пять лет основной и два года старшей. Обязательными Конституция называет девять классов.":
    "Cztery lata szkoły początkowej, pięć lat podstawowej i dwa lata starszej. Obowiązkowe według Konstytucji jest dziewięć klas.",
  "Какая школьная оценка является высшей?": "Która ocena szkolna jest najwyższa?",
  "Шкала пятибалльная: 2 — неудовлетворительно, а единицу на практике почти не ставят.":
    "Skala jest pięciostopniowa: 2 to niedostateczny, a jedynki w praktyce prawie się nie stawia.",
  "Когда начинается учебный год?": "Kiedy zaczyna się rok szkolny?",
  "1 августа": "1 sierpnia",
  "1 октября": "1 października",
  "В разные дни в разных регионах": "W różnych dniach w różnych regionach",
  "Этот день называется Днём знаний и отмечается по всей стране одинаково.":
    "Ten dzień nazywa się Dniem Wiedzy i obchodzi się go jednakowo w całym kraju.",
  "Кто платит взносы медицинского страхования за детей и пенсионеров?":
    "Kto płaci składki ubezpieczenia zdrowotnego za dzieci i emerytów?",
  "Федеральный бюджет напрямую": "Budżet federalny bezpośrednio",
  "Никто, они не застрахованы": "Nikt, nie są ubezpieczeni",
  "Регион": "Region",
  "Сами застрахованные": "Sami ubezpieczeni",
  "За работающих взносы платит работодатель, за неработающих — субъект федерации.":
    "Za pracujących składki płaci pracodawca, a za niepracujących podmiot federacji.",
  "Что определяет объём бесплатной медицинской помощи?":
    "Co określa zakres bezpłatnej pomocy medycznej?",
  "Договор с работодателем": "Umowa z pracodawcą",
  "Программа государственных гарантий, утверждаемая ежегодно":
    "Program gwarancji państwowych, zatwierdzany co roku",
  "Решение главного врача поликлиники": "Decyzja ordynatora przychodni",
  "Страховая организация по своему усмотрению": "Zakład ubezpieczeń według własnego uznania",
  "Всё, что за пределами программы, оказывается платно или по добровольному страхованию.":
    "Wszystko, co poza programem, świadczy się odpłatnie albo z ubezpieczenia dobrowolnego.",
  "Как часто можно менять поликлинику?": "Jak często można zmienić przychodnię?",
  "В любой момент, сколько угодно раз": "W każdej chwili, dowolnie wiele razy",
  "Только при переезде в другой регион": "Tylko przy przeprowadzce do innego regionu",
  "Менять её нельзя": "Zmieniać jej nie wolno",
  "Не чаще одного раза в год": "Nie częściej niż raz w roku",
  "Прикрепление обычно идёт по месту жительства, но выбор возможен. Врача внутри поликлиники тоже можно выбрать, с его согласия.":
    "Przypisanie idzie zwykle według miejsca zamieszkania, ale wybór jest możliwy. Lekarza wewnątrz przychodni też można wybrać, za jego zgodą.",
  "Что такое диспансеризация?": "Czym jest dyspanseryzacja?",
  "Бесплатное профилактическое обследование по полису":
    "Bezpłatnym badaniem profilaktycznym w ramach polisy",
  "Постановка на учёт у психиатра": "Objęciem opieką psychiatryczną",
  "Осмотр перед приёмом на работу": "Badaniem przed przyjęciem do pracy",
  "Лечение в дневном стационаре": "Leczeniem na oddziale dziennym",
  "До сорока лет она проходится раз в три года, после сорока — ежегодно, и на неё дают оплачиваемый выходной.":
    "Do czterdziestego roku życia przechodzi się ją raz na trzy lata, po czterdziestce co roku, i przysługuje na nią płatny dzień wolny.",
  "Какие предметы на ЕГЭ обязательны для всех?":
    "Które przedmioty na EGE są obowiązkowe dla wszystkich?",
  "Обязательных нет": "Obowiązkowych nie ma",
  "Русский язык и математика": "Język rosyjski i matematyka",
  "Русский язык и история": "Język rosyjski i historia",
  "Математика и иностранный язык": "Matematyka i język obcy",
  "Остальные предметы выпускник выбирает под ту специальность, на которую собирается поступать.":
    "Pozostałe przedmioty absolwent wybiera pod ten kierunek, na który zamierza się dostać.",
  "Чем бюджетное место в вузе отличается от платного?":
    "Czym miejsce budżetowe na uczelni różni się od płatnego?",
  "Оно даёт диплом другого образца": "Daje dyplom innego wzoru",
  "Оно доступно только жителям региона": "Dostępne jest tylko dla mieszkańców regionu",
  "Его оплачивает государство и распределяет по конкурсу баллов":
    "Opłaca je państwo i rozdziela w konkursie punktów",
  "На нём учатся дольше": "Studiuje się na nim dłużej",
  "Конституция говорит именно так: высшее образование бесплатно на конкурсной основе — не всем, но и не за деньги.":
    "Konstytucja mówi właśnie tak: wykształcenie wyższe jest bezpłatne w trybie konkursowym — nie dla wszystkich, ale i nie za pieniądze.",
  "С какого года ЕГЭ проводится по всей стране?":
    "Od którego roku EGE przeprowadza się w całym kraju?",
  "С 2009 года": "Od 2009 roku",
  "С 1999 года": "Od 1999 roku",
  "С 2015 года": "Od 2015 roku",
  "Он служит одновременно выпускным экзаменом школы и вступительным экзаменом вуза.":
    "Służy zarazem za egzamin końcowy szkoły i egzamin wstępny na uczelnię.",
  "Действует ли полис медицинского страхования за пределами региона, где выдан?":
    "Czy polisa ubezpieczenia zdrowotnego działa poza regionem, w którym ją wydano?",
  "Только в течение полугода": "Tylko przez pół roku",
  "Только по экстренным случаям": "Tylko w przypadkach nagłych",
  "Да, по всей стране": "Tak, w całym kraju",
  "Нет, при переезде нужен новый": "Nie, po przeprowadzce potrzebna jest nowa",
  "Переехав, менять полис не нужно — нужно только прикрепиться к новой поликлинике.":
    "Po przeprowadzce polisy zmieniać nie trzeba — trzeba się tylko zapisać do nowej przychodni.",
  "Чем специалитет отличается от бакалавриата по сроку?":
    "Czym specjalitet różni się od studiów licencjackich pod względem czasu?",
  "Специалитет длится три года": "Specjalitet trwa trzy lata",
  "Специалист учится пять-шесть лет, бакалавр четыре":
    "Specjalista uczy się pięć–sześć lat, licencjat cztery",
  "Наоборот, бакалавр учится дольше": "Odwrotnie, licencjat uczy się dłużej",
  "Сроки одинаковые": "Czas jest taki sam",
  "По специалитету учатся, например, врачи. После бакалавриата можно пойти в магистратуру ещё на два года.":
    "W trybie specjalitetu uczą się na przykład lekarze. Po licencjacie można pójść na studia magisterskie na kolejne dwa lata.",
  "По какому принципу принимают детей в школу?":
    "Według jakiej zasady przyjmuje się dzieci do szkoły?",
  "По результатам вступительного тестирования": "Według wyników testu wstępnego",
  "По очереди подачи заявления, без учёта адреса":
    "Według kolejności złożenia wniosku, bez względu na adres",
  "По выбору директора школы": "Według wyboru dyrektora szkoły",
  "По территориальному: за школой закреплён участок, и живущим на нём место гарантировано":
    "Według terytorialnej: do szkoły przypisany jest rejon, a mieszkającym w nim miejsce się gwarantuje",
  "Оставшиеся после закреплённых места распределяются между всеми остальными желающими.":
    "Miejsca, które zostaną po przypisanych, rozdziela się między wszystkich pozostałych chętnych.",
  "Какой документ является основным у ребёнка до четырнадцати лет?":
    "Jaki dokument jest podstawowy u dziecka do czternastego roku życia?",
  "Справка из школы": "Zaświadczenie ze szkoły",
  "Свидетельство о рождении": "Akt urodzenia",
  "Паспорт родителя с записью о ребёнке": "Paszport rodzica z wpisem o dziecku",
  "Полис медицинского страхования": "Polisa ubezpieczenia zdrowotnego",
  "Паспорт выдаётся в четырнадцать лет, и с этого момента основным документом становится он.":
    "Paszport wydaje się w wieku czternastu lat i od tej chwili to on staje się dokumentem podstawowym.",
  "Какой номер является единым для всех экстренных служб?":
    "Który numer jest jednolity dla wszystkich służb ratunkowych?",
  "01": "01",
  "Со 112 можно позвонить без денег на счету, без сим-карты и с заблокированного телефона.":
    "Pod 112 można zadzwonić bez środków na koncie, bez karty SIM i z zablokowanego telefonu.",
  "Что скрывается за вывеской «Мои документы»?": "Co kryje się za szyldem „Moje dokumenty”?",
  "Многофункциональный центр государственных услуг":
    "MFC, wielofunkcyjne centrum usług państwowych",
  "Архив": "Archiwum",
  "Отделение полиции": "Komisariat policji",
  "Нотариальная контора": "Kancelaria notarialna",
  "Одно окно почти для всего: паспорт, регистрация, справки, выписки, пособия.":
    "Jedno okienko niemal do wszystkiego: paszport, zameldowanie, zaświadczenia, wypisy, świadczenia.",
  "По какому номеру вызывают полицию?": "Pod jaki numer wzywa się policję?",
  "101 — пожарные и спасатели, 103 — скорая помощь, 104 — аварийная газовая служба.":
    "101 to straż pożarna i ratownicy, 103 pogotowie ratunkowe, a 104 pogotowie gazowe.",
  "Что пришло на смену прописке в 1993 году?": "Co zastąpiło propiskę w 1993 roku?",
  "Отметка в трудовой книжке": "Adnotacja w książeczce pracy",
  "Ничего, прописка сохранилась под другим названием": "Nic, propiska została pod inną nazwą",
  "Регистрационный учёт, носящий уведомительный характер":
    "Ewidencja meldunkowa o charakterze zgłoszeniowym",
  "Разрешение на проживание, выдаваемое городом":
    "Zezwolenie na zamieszkanie wydawane przez miasto",
  "Прописка разрешала жить в городе, регистрация лишь уведомляет государство об адресе. Конституционный Суд указывал, что она не может быть условием осуществления прав.":
    "Propiska pozwalała mieszkać w mieście, a zameldowanie tylko zawiadamia państwo o adresie. Sąd Konstytucyjny wskazywał, że nie może ono być warunkiem korzystania z praw.",
  "Чем регистрация по месту жительства отличается от регистрации по месту пребывания?":
    "Czym zameldowanie w miejscu zamieszkania różni się od zameldowania w miejscu pobytu?",
  "Между ними нет разницы": "Między nimi nie ma różnicy",
  "Первая постоянна и ставится штампом, вторая временна и оформляется свидетельством":
    "Pierwsze jest stałe i przybija się je pieczątką, drugie jest czasowe i wydaje się na nie zaświadczenie",
  "Первая для граждан, вторая для иностранцев":
    "Pierwsze dotyczy obywateli, drugie cudzoziemców",
  "Первая бесплатна, вторая платна": "Pierwsze jest bezpłatne, drugie płatne",
  "Одна другую не отменяет: временная регистрация не лишает человека постоянной.":
    "Jedno drugiego nie unieważnia: zameldowanie czasowe nie odbiera człowiekowi stałego.",
  "Что регистрируют органы записи актов гражданского состояния?":
    "Co rejestrują organy stanu cywilnego?",
  "Только брак и развод": "Tylko małżeństwo i rozwód",
  "Сделки с недвижимостью": "Czynności dotyczące nieruchomości",
  "Место жительства": "Miejsce zamieszkania",
  "Рождение, брак, развод, отцовство, перемену имени и смерть":
    "Urodzenie, małżeństwo, rozwód, ojcostwo, zmianę imienia i zgon",
  "Место жительства регистрируют другие органы, а сделки с недвижимостью — Росреестр.":
    "Miejsce zamieszkania rejestrują inne organy, a czynności dotyczące nieruchomości Rosreestr.",
  "Каков брачный возраст?": "Jaki jest wiek uprawniający do zawarcia małżeństwa?",
  "18 лет, при уважительных причинах может быть снижен до 16":
    "18 lat, a przy ważnych powodach może być obniżony do 16",
  "21 год без исключений": "21 lat bez wyjątków",
  "18 лет без исключений": "18 lat bez wyjątków",
  "16 лет для всех": "16 lat dla wszystkich",
  "В отдельных регионах региональный закон допускает и более ранний возраст. Между заявлением и регистрацией обычно проходит месяц.":
    "W niektórych regionach ustawa regionalna dopuszcza i wcześniejszy wiek. Między wnioskiem a ślubem mija zwykle miesiąc.",
  "На какой срок выдают заграничный паспорт?": "Na jaki okres wydaje się paszport zagraniczny?",
  "Обычный на пять лет, биометрический на десять":
    "Zwykły na pięć lat, biometryczny na dziesięć",
  "Оба на пять лет": "Oba na pięć lat",
  "Оба на десять лет": "Oba na dziesięć lat",
  "Внутренний паспорт за пределами страны не действует, поэтому загранпаспорт оформляется отдельно.":
    "Paszport wewnętrzny poza granicami kraju nie działa, dlatego zagraniczny wyrabia się osobno.",
  "Какой возраст охватывает призыв на военную службу?":
    "Jaki wiek obejmuje pobór do służby wojskowej?",
  "От 16 до 25 лет": "Od 16 do 25 lat",
  "От 20 до 35 лет": "Od 20 do 35 lat",
  "От 18 до 30 лет": "Od 18 do 30 lat",
  "От 18 до 27 лет": "Od 18 do 27 lat",
  "Верхняя граница поднята с 27 до 30 лет с 2024 года. Мужчины при этом состоят на воинском учёте.":
    "Górną granicę podniesiono z 27 do 30 lat od 2024 roku. Mężczyźni pozostają przy tym w ewidencji wojskowej.",
  "Что даёт подтверждённая учётная запись на портале государственных услуг?":
    "Co daje potwierdzone konto na portalu usług państwowych?",
  "Возможность подать большинство заявлений и записаться на приём, не выходя из дома":
    "Możliwość złożenia większości wniosków i zapisania się na wizytę bez wychodzenia z domu",
  "Освобождение от государственных пошлин": "Zwolnienie z opłat państwowych",
  "Право не иметь регистрации": "Prawo do nieposiadania zameldowania",
  "Замену паспорта в электронном виде": "Wymianę paszportu w postaci elektronicznej",
  "Портал и приложение заменяют очередь, но не сам документ: паспорт по-прежнему бумажный.":
    "Portal Gosusługi i jego aplikacja zastępują kolejkę, ale nie sam dokument: paszport jest wciąż papierowy.",
  "Лишает ли отсутствие регистрации права на медицинскую помощь?":
    "Czy brak zameldowania odbiera prawo do pomocy medycznej?",
  "Да, и школа ребёнку тоже недоступна": "Tak, a dziecku niedostępna jest też szkoła",
  "Нет, и никакой ответственности не наступает": "Nie, i nie grozi za to żadna odpowiedzialność",
  "Нет, но за проживание без неё дольше срока предусмотрен штраф":
    "Nie, ale za mieszkanie bez niego dłużej niż przez określony czas przewidziano grzywnę",
  "Да, без регистрации помощь платная": "Tak, bez zameldowania pomoc jest płatna",
  "Регистрация — обязанность, а не разрешение: прав она не даёт и не отнимает, но не оформить её нельзя.":
    "Zameldowanie jest obowiązkiem, a nie zezwoleniem: praw nie daje i nie odbiera, ale nie dopełnić go nie wolno.",
  "Что такое альтернативная гражданская служба?": "Czym jest zastępcza służba cywilna?",
  "Отсрочка от призыва на время учёбы": "Odroczeniem poboru na czas nauki",
  "Замена военной службы для тех, чьим убеждениям она противоречит":
    "Zastąpieniem służby wojskowej dla tych, czyim przekonaniom ona przeczy",
  "Служба по контракту за деньги": "Służbą kontraktową za pieniądze",
  "Работа в военных учреждениях без оружия": "Pracą w instytucjach wojskowych bez broni",
  "Право на неё даёт Конституция. Такая служба дольше обычной и проходит, как правило, в гражданских учреждениях.":
    "Prawo do niej daje Konstytucja. Taka służba jest dłuższa niż zwykła i odbywa się z reguły w instytucjach cywilnych.",
  "Чем занимается Социальный фонд?": "Czym zajmuje się Fundusz Socjalny?",
  "Медицинским страхованием": "Ubezpieczeniem zdrowotnym",
  "Сбором налогов": "Poborem podatków",
  "Выдачей паспортов": "Wydawaniem paszportów",
  "Пенсиями, пособиями, номером СНИЛС и сведениями о стаже":
    "Emeryturami, świadczeniami, numerem SNILS i danymi o stażu",
  "Он образован объединением прежних пенсионного и социального фондов. Налоги собирает налоговая служба.":
    "Powstał z połączenia dawnych funduszy emerytalnego i socjalnego. Podatki pobiera służba podatkowa.",
  "От чего образуется отчество?": "Od czego tworzy się otczestwo, imię odojcowskie?",
  "От имени крёстного": "Od imienia ojca chrzestnego",
  "От имени отца": "Od imienia ojca",
  "От фамилии рода": "Od nazwiska rodu",
  "От места рождения": "Od miejsca urodzenia",
  "Иванович и Ивановна, Сергеевич и Сергеевна. Обращение по имени и отчеству считается уважительным.":
    "Iwanowicz i Iwanowna, Siergiejewicz i Siergiejewna. Zwracanie się po imieniu i otczestwie uchodzi za pełne szacunku.",
  "Что принято делать, входя в квартиру?": "Co przyjęło się robić, wchodząc do mieszkania?",
  "Ничего особенного": "Nic szczególnego",
  "Снимать верхнюю одежду только по просьбе хозяев":
    "Zdejmować wierzchnie okrycie dopiero na prośbę gospodarzy",
  "Разуваться в прихожей": "Zdejmować buty w przedpokoju",
  "Оставлять обувь на лестничной площадке": "Zostawiać buty na klatce schodowej",
  "Гостю обычно дают тапочки. Зимой улицы посыпают реагентами, и хозяева берегут пол.":
    "Gościowi zwykle podaje się kapcie. Zimą ulice posypuje się środkami chemicznymi, a gospodarze oszczędzają podłogę.",
  "Что такое борщ?": "Czym jest barszcz?",
  "Суп со свёклой": "Zupą z burakami",
  "Каша из гречки": "Kaszą gryczaną",
  "Пирог с мясом": "Pierogiem z mięsem",
  "Кисломолочный напиток": "Napojem z mleka fermentowanego",
  "Щи варят из капусты, уху — из рыбы. Суп здесь не закуска, а полноценное первое блюдо.":
    "Szczi gotuje się z kapusty, a uchę z ryby. Zupa nie jest tu przystawką, lecz pełnoprawnym pierwszym daniem.",
  "Какой праздник считается главным семейным праздником года?":
    "Które święto uchodzi za główne święto rodzinne w roku?",
  "Рождество": "Boże Narodzenie",
  "Пасха": "Wielkanoc",
  "Новый год": "Nowy Rok",
  "Ставят ёлку, ждут Деда Мороза и Снегурочку, под бой курантов провожают старый год. Каникулы длятся с 1 по 8 января.":
    "Stawia się choinkę, czeka na Dziadka Mroza i Śnieżynkę, przy biciu zegara żegna stary rok. Ferie trwają od 1 do 8 stycznia.",
  "К кому обращаются по имени и отчеству?": "Do kogo zwraca się po imieniu i otczestwie?",
  "Только к государственным служащим": "Tylko do urzędników państwowych",
  "К близким друзьям": "Do bliskich przyjaciół",
  "К преподавателю, врачу, начальнику, к человеку старше себя":
    "Do wykładowcy, lekarza, przełożonego, do kogoś starszego od siebie",
  "К любому незнакомому на улице": "Do każdego nieznajomego na ulicy",
  "Между знакомыми ровесниками обычно достаточно имени, часто уменьшительного.":
    "Między znajomymi rówieśnikami zwykle wystarcza imię, często zdrobniałe.",
  "Кто предлагает перейти на «ты»?": "Kto proponuje przejście na „ty”?",
  "Переход происходит сам собой": "Przejście dokonuje się samo",
  "Старший или тот, кто выше по положению": "Starszy albo ten, kto stoi wyżej",
  "Младший, в знак доверия": "Młodszy, na znak zaufania",
  "Тот, кто заговорил первым": "Ten, kto odezwał się pierwszy",
  "И предложение это обычно произносят вслух. К незнакомому, к старшему и к должностному лицу — только «вы».":
    "I propozycję tę wypowiada się zwykle na głos. Do nieznajomego, do starszego i do urzędnika — wyłącznie „pan” albo „pani”.",
  "Что означает выражение «шесть соток»?": "Co oznacza wyrażenie „sześć arów”?",
  "Площадь типовой квартиры": "Powierzchnię typowego mieszkania",
  "Норму жилья на человека": "Normę powierzchni mieszkalnej na osobę",
  "Размер огорода при деревенском доме": "Wielkość ogrodu przy wiejskim domu",
  "Размер дачного участка, какие раздавали в советское время":
    "Wielkość działki daczy, jakie rozdawano w czasach radzieckich",
  "Участки давали работникам предприятий, и дом на них строили своими руками. Летом города по выходным заметно пустеют именно поэтому.":
    "Działki dawano pracownikom zakładów, a dom stawiano na nich własnymi rękami. Latem miasta w weekendy wyraźnie pustoszeją właśnie dlatego.",
  "Чем парятся в бане?": "Czym parzy się w bani?",
  "Веником из берёзовых или дубовых веток": "Wienikiem z gałązek brzozowych albo dębowych",
  "Горячими камнями": "Rozgrzanymi kamieniami",
  "Полотенцем, смоченным в кипятке": "Ręcznikiem zmoczonym we wrzątku",
  "Ничем, просто сидят в жаре": "Niczym, po prostu siedzi się w gorącu",
  "Ходят компанией, между заходами пьют чай. Суббота — традиционный банный день.":
    "Chodzi się w towarzystwie, a między wejściami pije herbatę. Sobota to tradycyjny dzień bani.",
  "Из чего состоит полный обед?": "Z czego składa się pełny obiad?",
  "Из одного основного блюда": "Z jednego dania głównego",
  "Из первого, второго и третьего": "Z pierwszego, drugiego i trzeciego",
  "Из закуски и горячего": "Z przystawki i dania gorącego",
  "Из супа и десерта": "Z zupy i deseru",
  "Первое — суп, второе — основное блюдо, третье — напиток: компот, кисель или чай.":
    "Pierwsze to zupa, drugie danie główne, a trzecie napój: kompot, kisiel albo herbata.",
  "Сколько длятся новогодние каникулы?": "Ile trwają ferie noworoczne?",
  "Две недели": "Dwa tygodnie",
  "Это самый длинный нерабочий период в году, и на него приходится и Рождество 7 января.":
    "To najdłuższy nieroboczy okres w roku i przypada na niego także Boże Narodzenie 7 stycznia.",
  "Что такое маршрутка?": "Czym jest marszrutka?",
  "Микроавтобус по фиксированному маршруту, останавливающийся по просьбе":
    "Mikrobusem na stałej trasie, który zatrzymuje się na życzenie",
  "Городской автобус большой вместимости": "Autobusem miejskim o dużej pojemności",
  "Такси с несколькими пассажирами": "Taksówką z kilkoma pasażerami",
  "Пригородный поезд": "Pociągiem podmiejskim",
  "Платят при входе или при выходе. Пригородный поезд называется электричкой.":
    "Płaci się przy wejściu albo przy wyjściu. Pociąg podmiejski nazywa się elektryczką.",
  "Сочетается ли уменьшительное имя с отчеством?": "Czy zdrobniałe imię łączy się z otczestwem?",
  "Да, в неофициальной обстановке": "Tak, w sytuacjach nieoficjalnych",
  "Сочетается только у женских имён": "Łączy się tylko przy imionach żeńskich",
  "Нет: с отчеством идёт только полное имя": "Nie: z otczestwem idzie wyłącznie pełne imię",
  "Да, так говорят с молодыми коллегами": "Tak, tak mówi się do młodszych współpracowników",
  "Уменьшительное имя между знакомыми — норма, а не фамильярность, но рядом с отчеством оно не стоит.":
    "Zdrobniałe imię między znajomymi jest normą, a nie poufałością, ale obok otczestwa nie stoi.",
  "В скольких российских городах работает метро?": "W ilu rosyjskich miastach działa metro?",
  "В каждом городе-миллионнике": "W każdym mieście powyżej miliona mieszkańców",
  "В семи": "W siedmiu",
  "Только в Москве и Санкт-Петербурге": "Tylko w Moskwie i Sankt Petersburgu",
  "В двадцати с лишним": "W ponad dwudziestu",
  "Москва, Санкт-Петербург, Нижний Новгород, Новосибирск, Самара, Екатеринбург и Казань. В остальных городах ходят автобусы, троллейбусы и трамваи.":
    "Moskwa, Sankt Petersburg, Niżny Nowogród, Nowosybirsk, Samara, Jekaterynburg i Kazań. W pozostałych miastach jeżdżą autobusy, trolejbusy i tramwaje.",
  "Почему жильцы не включают отопление в квартире сами?":
    "Dlaczego mieszkańcy nie włączają ogrzewania w mieszkaniu sami?",
  "Это запрещено правилами дома": "Zabraniają tego przepisy domowe",
  "Отопление включают только по заявлению жильцов":
    "Ogrzewanie włącza się dopiero na wniosek mieszkańców",
  "Каждая квартира отапливается своим котлом": "Każde mieszkanie ogrzewa własny kocioł",
  "Тепло идёт из общей котельной сразу на весь район":
    "Ciepło idzie ze wspólnej kotłowni od razu na całą dzielnicę",
  "Поэтому и решение о начале сезона принимается по погоде: когда среднесуточная температура пять дней держится ниже +8 °C.":
    "Dlatego i decyzja o początku sezonu zapada według pogody: kiedy średnia dobowa temperatura przez pięć dni utrzymuje się poniżej +8 °C.",
};
