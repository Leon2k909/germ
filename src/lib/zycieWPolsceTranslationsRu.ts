/**
 * Russian for the Zycie w Polsce course cards, headings and questions.
 *
 * Keyed on the POLISH source text exactly as it appears in
 * zycieWPolsceCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * is, because it fails silently: the card renders, the tap works, and the
 * reader is told a translated card has no translation. Every key here was
 * extracted from the built module and paired back, never retyped: one wrong
 * character — an l for an ł, a bare z for ż — and the lookup misses without
 * a sound. check-ru-country-translations catches that.
 *
 * Polish and Russian are close enough to be dangerous. A word that looks
 * familiar often is not: sklep is a shop and not a crypt, zapomnieć is to
 * forget and not to memorise, dywan is a carpet. Nothing here was translated
 * by the shape of the word.
 *
 * The line between what is translated and what is not runs where Russian
 * itself draws it. An institution Russian has a name for gets that name —
 * Сейм, Сенат, Конституция. What stays Polish is what a reader will meet
 * printed on a form or a doorplate and nowhere else: PESEL, wójt, gmina,
 * sejmik. Those lead in Polish, and a Russian gloss follows once.
 */
export const ZYCIE_W_POLSCE_RU: Record<string, string> = {
  "Historia, ustrój i codzienność — jak działa ten kraj.":
    "История, устройство и повседневность — как работает эта страна.",
  "Symbole narodowe": "Национальные символы",
  "Symbole i wartości Rzeczypospolitej": "Символы и ценности Речи Посполитой",
  "Dlaczego od tego zaczynamy: symbole widuje się codziennie — na urzędzie, na paszporcie, na koszulce reprezentacji — więc są najłatwiejszym wejściem w resztę.":
    "Почему начинаем отсюда: символы видишь каждый день — на здании учреждения, в паспорте, на футболке сборной, — и потому они самый лёгкий вход во всё остальное.",
  "Godło": "Герб",
  "Godłem Polski jest **orzeł biały** w złotej koronie, ze złotym dziobem i szponami, na **czerwonym** tle. Opisuje go **artykuł 28 Konstytucji**. Korona wróciła na głowę orła w **1990 roku**; w czasach PRL orzeł jej nie miał.":
    "Гербом Польши является **белый орёл** в золотой короне, с золотым клювом и когтями, на **красном** поле. Описывает его **статья 28 Конституции**. Корона вернулась на голову орла в **1990 году**; во времена ПНР орёл её не имел.",
  "Flaga i barwy": "Флаг и цвета",
  "Flaga ma dwa poziome pasy: **biały u góry, czerwony u dołu**. Kolejność nie jest dowolna — biel jest zawsze nad czerwienią. **2 maja** obchodzi się Dzień Flagi Rzeczypospolitej Polskiej.":
    "У флага две горизонтальные полосы: **белая сверху, красная снизу**. Порядок не произволен — белое всегда над красным. **2 мая** отмечают День флага Речи Посполитой Польской.",
  "Hymn": "Гимн",
  "Mazurek Dąbrowskiego": "Мазурка Домбровского",
  "Hymn państwowy, powstały w 1797 roku we Włoszech, w Legionach Polskich. Słowa napisał Józef Wybicki.":
    "Государственный гимн, сложенный в 1797 году в Италии, в польских легионах. Слова написал Юзеф Выбицкий.",
  "Pierwsze słowa": "Первые слова",
  "„Jeszcze Polska nie zginęła, kiedy my żyjemy” — zdanie napisane wtedy, gdy państwa polskiego na mapie nie było.":
    "«Ещё Польша не погибла, пока мы живём» — фраза, написанная тогда, когда польского государства на карте не было.",
  "Który kolor znajduje się na fladze Polski u góry?":
    "Какой цвет на флаге Польши находится сверху?",
  "Czerwony": "Красный",
  "Biały": "Белый",
  "Kolejność jest dowolna": "Порядок произволен",
  "Złoty": "Золотой",
  "Biały pas jest zawsze na górze, czerwony na dole. Odwrócona flaga to flaga Indonezji lub Monako.":
    "Белая полоса всегда сверху, красная снизу. Перевёрнутый флаг — это флаг Индонезии или Монако.",
  "Barwy i ich użycie": "Цвета и их употребление",
  "Flagi używa się w dni świąt państwowych, na budynkach urzędów i podczas uroczystości. Wersję z **godłem** na białym pasie stosują polskie statki i placówki dyplomatyczne — nie wywiesza się jej na balkonie.":
    "Флаг поднимают в дни государственных праздников, на зданиях учреждений и во время торжеств. Вариант с **гербом** на белой полосе используют польские суда и дипломатические представительства — на балконе его не вывешивают.",
  "Skąd wzięły się barwy": "Откуда взялись цвета",
  "Biel od orła, czerwień od pola herbowego. Ustalono je oficjalnie **7 lutego 1831 roku**, w czasie powstania listopadowego — barwy narodowe są więc młodsze niż sam herb o kilkaset lat.":
    "Белый от орла, красный от поля герба. Установили их официально **7 февраля 1831 года**, во время ноябрьского восстания, — национальные цвета, стало быть, на несколько сот лет моложе самого герба.",
  "Kto napisał słowa hymnu Polski?": "Кто написал слова гимна Польши?",
  "Adam Mickiewicz": "Адам Мицкевич",
  "Józef Wybicki": "Юзеф Выбицкий",
  "Fryderyk Chopin": "Фридерик Шопен",
  "Juliusz Słowacki": "Юлиуш Словацкий",
  "Józef Wybicki, w 1797 roku we Włoszech. Mickiewicz i Słowacki to poeci romantyczni, Chopin kompozytor.":
    "Юзеф Выбицкий, в 1797 году в Италии. Мицкевич и Словацкий — поэты-романтики, Шопен — композитор.",
  "Konstytucja i wartości ustrojowe": "Конституция и основы устройства",
  "Konstytucja z 1997 roku": "Конституция 1997 года",
  "Obowiązująca **Konstytucja Rzeczypospolitej Polskiej** została uchwalona **2 kwietnia 1997 roku** i przyjęta w referendum. Jest najwyższym prawem w państwie: żadna ustawa nie może być z nią sprzeczna.":
    "Действующая **Конституция Речи Посполитой Польской** принята **2 апреля 1997 года** и утверждена на референдуме. Это высший закон государства: ни один акт не может ей противоречить.",
  "Zasady ustrojowe": "Начала устройства",
  "Republika": "Республика",
  "Polska jest republiką — głowę państwa się wybiera, a nie dziedziczy.":
    "Польша — республика: главу государства избирают, а не наследуют.",
  "Państwo prawa": "Правовое государство",
  "Organy władzy działają na podstawie i w granicach prawa, nie poza nim.":
    "Органы власти действуют на основании права и в его границах, а не вне его.",
  "Podział władz": "Разделение властей",
  "Ustawodawcza, wykonawcza i sądownicza są rozdzielone i wzajemnie się równoważą.":
    "Законодательная, исполнительная и судебная разделены и взаимно друг друга уравновешивают.",
  "Konstytucja to nie zbiór życzeń: sprzeczną z nią ustawę może uchylić **Trybunał Konstytucyjny**.":
    "Конституция не свод пожеланий: противоречащий ей закон может отменить **Конституционный трибунал**.",
  "W którym roku uchwalono obowiązującą Konstytucję RP?":
    "В каком году приняли действующую Конституцию Польши?",
  "1989": "1989",
  "1997": "1997",
  "2004": "2004",
  "1952": "1952",
  "2 kwietnia 1997 roku, potwierdzona w referendum. 1989 to rok wyborów czerwcowych, 2004 to wejście do Unii Europejskiej.":
    "2 апреля 1997 года, подтверждена на референдуме. 1989 — год июньских выборов, 2004 — вступление в Европейский союз.",
  "Jak zmienić Konstytucję": "Как изменить Конституцию",
  "Zmiana wymaga większości **2/3** w Sejmie i bezwzględnej w Senacie. Jeśli dotyczy rozdziałów o ustroju, wolnościach albo o samej procedurze zmiany, można zażądać jeszcze **referendum**.":
    "Изменение требует большинства в **2/3** в Сейме и абсолютного в Сенате. Если оно касается разделов об устройстве, о свободах или о самом порядке изменения, можно потребовать вдобавок **референдум**.",
  "Poprzednie konstytucje": "Прежние конституции",
  "3 maja 1791": "3 мая 1791 года",
  "Pierwsza w Europie, obowiązywała czternaście miesięcy.":
    "Первая в Европе, действовала четырнадцать месяцев.",
  "Marcowa 1921": "Мартовская 1921 года",
  "Republika parlamentarna II Rzeczypospolitej.":
    "Парламентская республика Второй Речи Посполитой.",
  "Kwietniowa 1935": "Апрельская 1935 года",
  "Wzmocniła prezydenta kosztem parlamentu.": "Усилила президента за счёт парламента.",
  "Z 1952": "1952 года",
  "Konstytucja PRL, zmieniana wielokrotnie, obowiązywała do 1997 roku.":
    "Конституция ПНР, многократно изменявшаяся, действовала до 1997 года.",
  "Jakiej większości w Sejmie wymaga zmiana Konstytucji?":
    "Какого большинства в Сейме требует изменение Конституции?",
  "Zwykłej": "Простого",
  "Bezwzględnej": "Абсолютного",
  "Dwóch trzecich": "Двух третей",
  "Jednomyślności": "Единогласия",
  "Dwóch trzecich w Sejmie i bezwzględnej w Senacie — próg wyraźnie wyższy niż przy zwykłej ustawie.":
    "Двух третей в Сейме и абсолютного в Сенате — порог заметно выше, чем у обычного закона.",
  "Prawa i wolności": "Права и свободы",
  "Rozdział II Konstytucji jest najdłuższy w całym dokumencie. To nie przypadek: państwo, które przez pół wieku ograniczało wolności, spisało je potem wyjątkowo dokładnie.":
    "Раздел II Конституции самый длинный во всём документе. Это не случайность: государство, полвека ограничивавшее свободы, выписало их потом на редкость подробно.",
  "Wolności osobiste": "Личные свободы",
  "Każdemu przysługuje **prawo do życia**, **nietykalność osobista** i **wolność sumienia**. Nikogo nie wolno zatrzymać bez podstawy prawnej, a zatrzymanego trzeba w ciągu **48 godzin** przekazać sądowi — inaczej musi zostać zwolniony.":
    "Каждому принадлежат **право на жизнь**, **личная неприкосновенность** и **свобода совести**. Никого нельзя задержать без правового основания, а задержанного нужно в течение **48 часов** передать суду — иначе его обязаны освободить.",
  "Obowiązuje **domniemanie niewinności**: dopóki sąd nie orzeknie prawomocnie, człowiek jest niewinny. Kara może spotkać tylko za czyn, który był zabroniony **w chwili popełnienia**.":
    "Действует **презумпция невиновности**: пока суд не вынес окончательного решения, человек невиновен. Наказание возможно только за деяние, запрещённое **в момент совершения**.",
  "Wolności polityczne": "Политические свободы",
  "Wolność słowa": "Свобода слова",
  "Wolno wyrażać poglądy i rozpowszechniać informacje. Cenzura prewencyjna jest zakazana.":
    "Разрешено высказывать взгляды и распространять сведения. Предварительная цензура запрещена.",
  "Zgromadzenia": "Собрания",
  "Wolno organizować pokojowe zgromadzenia i w nich uczestniczyć.":
    "Разрешено устраивать мирные собрания и участвовать в них.",
  "Zrzeszanie się": "Объединения",
  "Wolno tworzyć partie, związki zawodowe i stowarzyszenia.":
    "Разрешено создавать партии, профсоюзы и общества.",
  "Petycje": "Петиции",
  "Każdy może kierować wnioski i skargi do organów władzy publicznej.":
    "Каждый может направлять обращения и жалобы в органы публичной власти.",
  "Prawa socjalne": "Социальные права",
  "Konstytucja mówi też o **prawie do nauki** — obowiązkowej i bezpłatnej w szkołach publicznych do 18. roku życia — o **ochronie zdrowia** i o **prawie do zabezpieczenia społecznego** na starość, w chorobie i przy bezrobociu.":
    "Конституция говорит и о **праве на образование** — обязательное и бесплатное в публичных школах до 18 лет, — об **охране здоровья** и о **праве на социальное обеспечение** в старости, при болезни и при безработице.",
  "Kto broni tych praw": "Кто защищает эти права",
  "**Rzecznik Praw Obywatelskich** stoi na straży wolności i praw człowieka. Można się do niego zwrócić bezpłatnie, także pisemnie. Osobno działa **Rzecznik Praw Dziecka**.":
    "**Rzecznik Praw Obywatelskich**, уполномоченный по правам граждан, стоит на страже свобод и прав человека. Обратиться к нему можно бесплатно, в том числе письменно. Отдельно действует **Rzecznik Praw Dziecka**, уполномоченный по правам ребёнка.",
  "Wolności nie są nieograniczone. Ograniczyć je może tylko **ustawa** i tylko wtedy, gdy jest to konieczne dla bezpieczeństwa, porządku publicznego, zdrowia albo wolności innych osób. Nigdy nie wolno naruszyć **istoty** danej wolności.":
    "Свободы не безграничны. Ограничить их может только **закон** и только тогда, когда это необходимо для безопасности, публичного порядка, здоровья или свобод других людей. Затрагивать **существо** самой свободы нельзя никогда.",
  "W ciągu ilu godzin zatrzymany musi zostać przekazany sądowi?":
    "В течение скольких часов задержанного обязаны передать суду?",
  "24 godzin": "24 часов",
  "48 godzin": "48 часов",
  "72 godzin": "72 часов",
  "Nie ma takiego terminu": "Такого срока нет",
  "48 godzin. Sąd ma potem 24 godziny na decyzję o tymczasowym aresztowaniu — razem najwyżej 72.":
    "48 часов. У суда потом есть 24 часа на решение о заключении под стражу — вместе не больше 72.",
  "Skarga konstytucyjna": "Конституционная жалоба",
  "Kto uważa, że jego wolność naruszył **przepis**, a nie sam wyrok, może po wyczerpaniu drogi sądowej złożyć **skargę konstytucyjną** do Trybunału Konstytucyjnego. Skargę sporządza adwokat albo radca prawny.":
    "Кто считает, что его свободу нарушил **сам предписанный порядок**, а не решение по делу, может, исчерпав судебный путь, подать **конституционную жалобу** в Конституционный трибунал. Жалобу составляет адвокат или юрисконсульт.",
  "Ochrona danych": "Защита данных",
  "Od 2018 roku obowiązuje europejskie rozporządzenie **RODO**. Każdy ma prawo wiedzieć, jakie dane o nim zebrano, żądać ich poprawienia i — w wielu wypadkach — usunięcia. Nadzoruje to **Prezes Urzędu Ochrony Danych Osobowych**.":
    "С 2018 года действует европейское постановление **RODO**, известное как GDPR. Каждый вправе знать, какие данные о нём собраны, требовать их исправления и — во многих случаях — удаления. Надзор ведёт **председатель Управления по защите персональных данных**.",
  "Do kogo można się zwrócić bezpłatnie, gdy urząd narusza prawa obywatela?":
    "К кому можно обратиться бесплатно, когда учреждение нарушает права гражданина?",
  "Do Rzecznika Praw Obywatelskich": "К уполномоченному по правам граждан",
  "Do wojewody": "К воеводе",
  "Do Prezydenta": "К президенту",
  "Do Najwyższej Izby Kontroli": "В Высшую контрольную палату",
  "Rzecznik Praw Obywatelskich stoi na straży wolności i praw; wniosek jest wolny od opłat.":
    "Уполномоченный по правам граждан стоит на страже свобод и прав; обращение к нему свободно от платы.",
  "Obowiązki obywatela": "Обязанности гражданина",
  "Wierność i troska o dobro wspólne": "Верность и забота об общем благе",
  "Konstytucja wymienia obowiązki krótko, w kilku artykułach. Pierwszy z nich to **wierność Rzeczypospolitej** i troska o **dobro wspólne** — sformułowanie ogólne, ale to z niego wynikają pozostałe.":
    "Конституция перечисляет обязанности коротко, в нескольких статьях. Первая из них — **верность Речи Посполитой** и забота об **общем благе**; формулировка общая, но из неё вытекают остальные.",
  "Obowiązki konkretne": "Обязанности по существу",
  "Przestrzeganie prawa": "Соблюдение права",
  "Obowiązuje każdego, kto znajduje się pod władzą Rzeczypospolitej — także cudzoziemca.":
    "Обязывает каждого, кто находится под властью Речи Посполитой, — в том числе иностранца.",
  "Ciężary publiczne": "Публичные повинности",
  "Podatki i inne świadczenia nakłada wyłącznie ustawa, nie rozporządzenie.":
    "Налоги и прочие повинности налагает исключительно закон, а не постановление.",
  "Obrona ojczyzny": "Оборона отечества",
  "Obowiązek obywateli polskich. Kto ze względu na przekonania nie może pełnić służby wojskowej, może zostać skierowany do służby zastępczej.":
    "Обязанность польских граждан. Кто по убеждениям не может нести военную службу, того могут направить на службу заменяющую.",
  "Dbałość o środowisko": "Забота об окружающей среде",
  "Kto pogarsza stan środowiska, odpowiada za to.":
    "Кто ухудшает состояние среды, тот за это отвечает.",
  "Obowiązek szkolny": "Обязанность ходить в школу",
  "Nauka jest **obowiązkowa do 18. roku życia**. Odpowiadają za to rodzice albo opiekunowie; szkoła publiczna jest bezpłatna.":
    "Учёба **обязательна до 18 лет**. Отвечают за это родители или опекуны; публичная школа бесплатна.",
  "Obowiązkowa zasadnicza służba wojskowa została w Polsce **zawieszona w 2009 roku**. Obowiązek obrony pozostał w Konstytucji, ale pobór w czasie pokoju się nie odbywa.":
    "Обязательная срочная военная служба в Польше **приостановлена в 2009 году**. Обязанность обороны в Конституции осталась, но призыва в мирное время нет.",
  "Do którego roku życia trwa w Polsce obowiązek nauki?":
    "До скольких лет в Польше длится обязанность учиться?",
  "Do 15. roku życia": "До 15 лет",
  "Do 16. roku życia": "До 16 лет",
  "Do 18. roku życia": "До 18 лет",
  "Do ukończenia szkoły średniej": "До окончания средней школы",
  "Do 18. roku życia. Obowiązek szkolny — nauka w szkole podstawowej — kończy się wcześniej, ale obowiązek nauki trwa dłużej.":
    "До 18 лет. Обязанность ходить в школу — учёба в начальной школе — кончается раньше, но обязанность учиться длится дольше.",
  "Podatki w praktyce": "Налоги на деле",
  "Zeznanie roczne **PIT** składa się do **30 kwietnia** za rok poprzedni. Można to zrobić przez internet; urząd skarbowy przygotowuje wstępnie wypełnione zeznanie, które wystarczy sprawdzić i zatwierdzić.":
    "Годовое заявление **PIT** подают до **30 апреля** за предыдущий год. Сделать это можно через интернет; налоговое управление готовит предварительно заполненное заявление, которое остаётся проверить и утвердить.",
  "Udział w wyborach": "Участие в выборах",
  "Głosowanie jest **prawem, nie obowiązkiem** — nie ma kary za nieoddanie głosu. Prawo wybierania przysługuje od 18. roku życia, także obywatelom mieszkającym za granicą, w obwodach przy placówkach dyplomatycznych.":
    "Голосование есть **право, а не обязанность** — за неявку не наказывают. Право избирать принадлежит человеку с 18 лет, в том числе гражданам, живущим за границей, на участках при дипломатических представительствах.",
  "Do kiedy składa się roczne zeznanie podatkowe PIT?":
    "До какого срока подают годовое налоговое заявление PIT?",
  "Do 31 stycznia": "До 31 января",
  "Do 30 kwietnia": "До 30 апреля",
  "Do 30 czerwca": "До 30 июня",
  "Do 31 grudnia": "До 31 декабря",
  "Do 30 kwietnia za rok poprzedni.": "До 30 апреля за предыдущий год.",
  "Sejm i Senat": "Сейм и Сенат",
  "Ustrój i instytucje": "Устройство и учреждения",
  "Dwie izby, dwie różne liczby i dwie różne role. Mylenie ich to najczęstsza pomyłka w rozmowie o polskiej polityce.":
    "Две палаты, два разных числа и две разные роли. Их путаница — самая частая ошибка в разговоре о польской политике.",
  "Dwie izby parlamentu": "Две палаты парламента",
  "Sejm": "Сейм",
  "460 posłów, wybieranych na 4 lata. Izba pierwsza: to tutaj powstają i zapadają rozstrzygnięcia.":
    "460 депутатов, избираемых на 4 года. Первая палата: именно здесь возникают и принимаются решения.",
  "Senat": "Сенат",
  "100 senatorów, również na 4 lata. Izba druga: poprawia, odrzuca albo przyjmuje ustawy Sejmu.":
    "100 сенаторов, тоже на 4 года. Вторая палата: правит, отклоняет или принимает законы Сейма.",
  "Kto może kandydować": "Кто может выдвигаться",
  "Posłem może zostać obywatel, który ukończył **21 lat**; senatorem — **30 lat**. Głosować wolno od **18. roku życia**. Mandatu poselskiego nie można łączyć z senatorskim.":
    "Депутатом может стать гражданин, которому исполнился **21 год**; сенатором — **30 лет**. Голосовать разрешено с **18 лет**. Мандат депутата нельзя совмещать с сенаторским.",
  "Jak powstaje ustawa": "Как рождается закон",
  "Projekt trafia do Sejmu, który czyta go i głosuje. Przyjęty projekt idzie do **Senatu**: ten ma **30 dni**, żeby go przyjąć, odrzucić albo poprawić. Poprawki i odrzucenie Sejm może **odrzucić bezwzględną większością**. Na końcu ustawę podpisuje **Prezydent**.":
    "Проект попадает в Сейм, который его читает и голосует. Принятый проект идёт в **Сенат**: у того есть **30 дней**, чтобы принять его, отклонить или поправить. Поправки и отклонение Сейм может **отвергнуть абсолютным большинством**. В конце закон подписывает **президент**.",
  "Inicjatywę ustawodawczą mają posłowie, Senat, Prezydent, Rada Ministrów — a także **100 tysięcy obywateli**, którzy złożą podpisy pod projektem.":
    "Право законодательной инициативы есть у депутатов, Сената, президента, Совета министров — а также у **100 тысяч граждан**, которые поставят подписи под проектом.",
  "Zgromadzenie Narodowe": "Национальное собрание",
  "Sejm i Senat obradujące wspólnie tworzą **Zgromadzenie Narodowe**. Zbiera się rzadko: żeby odebrać przysięgę od Prezydenta, uznać go za trwale niezdolnego do sprawowania urzędu albo postawić przed Trybunałem Stanu.":
    "Сейм и Сенат, заседающие вместе, образуют **Национальное собрание**. Собирается оно редко: чтобы принять присягу президента, признать его стойко неспособным исполнять должность или предать суду Государственного трибунала.",
  "Ilu posłów zasiada w Sejmie?": "Сколько депутатов заседает в Сейме?",
  "100": "100",
  "230": "230",
  "460": "460",
  "560": "560",
  "460 posłów. 100 to liczba senatorów; razem obie izby liczą 560 osób.":
    "460 депутатов. 100 — число сенаторов; вместе обе палаты насчитывают 560 человек.",
  "Jak się głosuje": "Как голосуют",
  "Do Sejmu wybiera się **proporcjonalnie**, z list w okręgach; mandaty dzieli się metodą **d'Hondta**, a partia musi przekroczyć próg **5 procent** (koalicja 8). Do Senatu głosuje się **większościowo**: w każdym ze stu okręgów wygrywa jeden kandydat.":
    "В Сейм избирают **пропорционально**, по спискам в округах; мандаты делят **методом д'Ондта**, а партия должна перейти порог в **5 процентов** (коалиция — 8). В Сенат голосуют **по большинству**: в каждом из ста округов побеждает один кандидат.",
  "Immunitet": "Неприкосновенность",
  "Posła ani senatora nie można pociągnąć do odpowiedzialności karnej bez zgody własnej izby. Immunitet chroni mandat, a nie osobę: izba może go **uchylić**.":
    "Ни депутата, ни сенатора нельзя привлечь к уголовной ответственности без согласия его палаты. Неприкосновенность защищает мандат, а не человека: палата может её **снять**.",
  "Ilu senatorów liczy Senat?": "Сколько сенаторов насчитывает Сенат?",
  "100 senatorów, po jednym z każdego okręgu. 460 to liczba posłów.":
    "100 сенаторов, по одному из каждого округа. 460 — число депутатов.",
  "Prezydent": "Президент",
  "Wybór i kadencja": "Избрание и срок",
  "Prezydenta wybierają obywatele w **wyborach powszechnych**, na **5 lat**, najwyżej **dwa razy**. Kandydat musi mieć ukończone **35 lat** i zebrać **100 tysięcy podpisów**. Wygrywa ten, kto uzyska ponad połowę głosów; jeśli nikt nie uzyska, po dwóch tygodniach odbywa się **druga tura** między dwoma najlepszymi.":
    "Президента избирают граждане на **всеобщих выборах**, на **5 лет**, самое большее **два раза**. Кандидату должно исполниться **35 лет**, и он должен собрать **100 тысяч подписей**. Побеждает тот, кто получит больше половины голосов; если не получит никто, через две недели проходит **второй тур** между двумя лучшими.",
  "Co Prezydent może": "Что президент может",
  "Podpisać albo nie": "Подписать или нет",
  "Ustawę podpisuje w ciągu 21 dni. Może ją zawetować albo skierować do Trybunału Konstytucyjnego.":
    "Закон он подписывает в течение 21 дня. Может наложить на него вето или направить в Конституционный трибунал.",
  "Weto": "Вето",
  "Weto Sejm odrzuca większością 3/5 głosów. Ustawy skierowanej do Trybunału zawetować już nie można.":
    "Вето Сейм отклоняет большинством в 3/5 голосов. На закон, направленный в трибунал, наложить вето уже нельзя.",
  "Powołania": "Назначения",
  "Powołuje Prezesa Rady Ministrów, sędziów na wniosek Krajowej Rady Sądownictwa i ratyfikuje umowy międzynarodowe.":
    "Он назначает председателя Совета министров, судей по представлению Всепольского судебного совета и ратифицирует международные договоры.",
  "Zwierzchnictwo": "Верховное начало",
  "Jest najwyższym zwierzchnikiem Sił Zbrojnych; w czasie pokoju sprawuje je przez Ministra Obrony Narodowej.":
    "Он верховный начальник Вооружённых сил; в мирное время осуществляет это через министра национальной обороны.",
  "Kontrasygnata": "Контрасигнатура",
  "Większość aktów urzędowych Prezydenta wymaga **podpisu Prezesa Rady Ministrów**, który bierze za nie odpowiedzialność przed Sejmem. Konstytucja wylicza jednak **prerogatywy** — akty, których kontrasygnata nie dotyczy, na przykład prawo łaski, zarządzenie wyborów czy nadanie obywatelstwa.":
    "Большинство должностных актов президента требует **подписи председателя Совета министров**, который несёт за них ответственность перед Сеймом. Конституция, однако, перечисляет **прерогативы** — акты, которых контрасигнатура не касается: например, право помилования, назначение выборов или предоставление гражданства.",
  "Prezydent nie kieruje rządem. Politykę bieżącą prowadzi **Rada Ministrów**; Prezydent reprezentuje państwo i stoi na straży Konstytucji.":
    "Президент правительством не руководит. Текущую политику ведёт **Совет министров**; президент представляет государство и стоит на страже Конституции.",
  "Na ile lat wybiera się Prezydenta Rzeczypospolitej?":
    "На сколько лет избирают президента Речи Посполитой?",
  "4 lata": "На 4 года",
  "5 lat": "На 5 лет",
  "6 lat": "На 6 лет",
  "7 lat": "На 7 лет",
  "5 lat, najwyżej dwie kadencje. 4 lata trwa kadencja Sejmu i Senatu.":
    "На 5 лет, самое большее два срока. 4 года длится срок Сейма и Сената.",
  "Gdy Prezydenta zabraknie": "Когда президента не станет",
  "Jeśli Prezydent nie może sprawować urzędu, zastępuje go **Marszałek Sejmu**, a gdyby i on nie mógł — Marszałek Senatu. Tak stało się w kwietniu 2010 roku po katastrofie smoleńskiej.":
    "Если президент не может исполнять должность, его заменяет **маршал Сейма**, а если бы и он не смог — маршал Сената. Так и случилось в апреле 2010 года после смоленской катастрофы.",
  "Rezydencja i przysięga": "Резиденция и присяга",
  "Siedzibą Prezydenta jest **Pałac Prezydencki** w Warszawie. Urząd obejmuje po złożeniu przysięgi przed **Zgromadzeniem Narodowym**.":
    "Резиденция президента — **Президентский дворец** в Варшаве. Должность он принимает, присягнув перед **Национальным собранием**.",
  "Jaką większością Sejm odrzuca weto Prezydenta?":
    "Каким большинством Сейм отклоняет вето президента?",
  "Zwykłą": "Простым",
  "Bezwzględną": "Абсолютным",
  "Trzech piątych": "Тремя пятыми",
  "Trzech piątych głosów. Dwie trzecie potrzebne są do zmiany Konstytucji.":
    "Тремя пятыми голосов. Две трети нужны для изменения Конституции.",
  "Rada Ministrów": "Совет министров",
  "Kto rządzi na co dzień": "Кто правит изо дня в день",
  "**Rada Ministrów** — czyli rząd — prowadzi politykę wewnętrzną i zagraniczną państwa. Na jej czele stoi **Prezes Rady Ministrów**, w mowie potocznej premier. W skład wchodzą ministrowie kierujący działami administracji.":
    "**Совет министров**, то есть правительство, ведёт внутреннюю и внешнюю политику государства. Во главе его стоит **председатель Совета министров**, в обиходе премьер. В состав входят министры, руководящие отраслями управления.",
  "Jak powstaje rząd": "Как создаётся правительство",
  "Prezydent desygnuje premiera, ten proponuje skład rządu, a Sejm udziela mu **wotum zaufania** bezwzględną większością. Gdy się nie uda, inicjatywę przejmuje Sejm — Konstytucja przewiduje **trzy kolejne kroki**, żeby państwo nie zostało bez rządu.":
    "Президент назначает премьера, тот предлагает состав правительства, а Сейм даёт ему **вотум доверия** абсолютным большинством. Если не выйдет, почин переходит к Сейму — Конституция предусматривает **три последовательных шага**, чтобы государство не осталось без правительства.",
  "Jak rząd upada": "Как правительство падает",
  "**Konstruktywne wotum nieufności**: Sejm może odwołać rząd tylko wtedy, gdy jednocześnie wskaże nowego premiera. Nie da się obalić rządu, nie mając następcy — to zabezpieczenie wzięte z niemieckiej Ustawy Zasadniczej.":
    "**Конструктивный вотум недоверия**: Сейм может отправить правительство в отставку лишь тогда, когда одновременно укажет нового премьера. Свалить правительство, не имея преемника, не выйдет — эта защита взята из немецкого Основного закона.",
  "Kto pilnuje rządu": "Кто следит за правительством",
  "Uchwala budżet, pyta w interpelacjach, odwołuje ministrów.":
    "Он принимает бюджет, спрашивает в запросах, отправляет министров в отставку.",
  "Najwyższa Izba Kontroli": "Высшая контрольная палата",
  "Bada wydatki państwa i podlega Sejmowi, nie rządowi.":
    "Проверяет расходы государства и подчинена Сейму, а не правительству.",
  "Trybunał Stanu": "Государственный трибунал",
  "Sądzi najwyższych urzędników za naruszenie Konstytucji lub ustawy.":
    "Судит высших должностных лиц за нарушение Конституции или закона.",
  "Czego wymaga konstruktywne wotum nieufności?": "Чего требует конструктивный вотум недоверия?",
  "Zgody Prezydenta": "Согласия президента",
  "Jednoczesnego wskazania nowego premiera": "Одновременного указания нового премьера",
  "Rozwiązania Sejmu": "Роспуска Сейма",
  "Większości 2/3 głosów": "Большинства в 2/3 голосов",
  "Sejm musi wskazać następcę. Bez tego wniosek jest bezskuteczny — państwo nie zostaje bez rządu.":
    "Сейм обязан указать преемника. Без этого обращение не имеет силы — государство без правительства не остаётся.",
  "Budżet": "Бюджет",
  "Rada Ministrów przygotowuje **ustawę budżetową** i przedkłada ją Sejmowi. Jeśli parlament nie uchwali jej w ciągu **czterech miesięcy**, Prezydent może skrócić kadencję Sejmu.":
    "Совет министров готовит **закон о бюджете** и вносит его в Сейм. Если парламент не примет его в течение **четырёх месяцев**, президент может сократить срок Сейма.",
  "Ministerstwa": "Министерства",
  "Każdy minister kieruje **działem administracji rządowej** — finansami, zdrowiem, edukacją, obroną. Podział działów określa ustawa, a nie sam premier; liczba ministerstw bywa różna w kolejnych rządach.":
    "Каждый министр ведёт **отрасль правительственного управления** — финансы, здравоохранение, образование, оборону. Деление на отрасли устанавливает закон, а не сам премьер; число министерств от правительства к правительству бывает разным.",
  "Kto przygotowuje projekt ustawy budżetowej?": "Кто готовит проект закона о бюджете?",
  "Narodowy Bank Polski": "Национальный банк Польши",
  "Rada Ministrów. Sejm budżet uchwala, ale sam go nie pisze.":
    "Совет министров. Сейм бюджет принимает, но сам его не пишет.",
  "Sądy i Trybunały": "Суды и трибуналы",
  "Trzy szczeble sądów": "Три ступени судов",
  "Sprawy zaczynają się w **sądzie rejonowym**, odwołania trafiają do **okręgowego**, a dalej do **apelacyjnego**. Na szczycie stoi **Sąd Najwyższy**, który czuwa nad jednolitością orzecznictwa — nie rozpatruje spraw od początku.":
    "Дела начинаются в **районном суде**, обжалование идёт в **окружной**, а дальше в **апелляционный**. На вершине стоит **Верховный суд**, который следит за единообразием судебной практики, а дела заново не разбирает.",
  "Sądy administracyjne": "Административные суды",
  "Osobną drogą idą spory z urzędami. Skargę na decyzję rozpatruje **wojewódzki sąd administracyjny**, a skargę kasacyjną — **Naczelny Sąd Administracyjny**.":
    "Особой дорогой идут споры с учреждениями. Жалобу на решение разбирает **воеводский административный суд**, а кассационную жалобу — **Высший административный суд**.",
  "Dwa trybunały": "Два трибунала",
  "Trybunał Konstytucyjny": "Конституционный трибунал",
  "Orzeka, czy ustawa jest zgodna z Konstytucją. Może to zbadać na skargę konstytucyjną obywatela.":
    "Решает, согласуется ли закон с Конституцией. Проверить это он может и по конституционной жалобе гражданина.",
  "Sądzi Prezydenta, premiera i ministrów za delikty konstytucyjne — nie za zwykłe przestępstwa.":
    "Судит президента, премьера и министров за нарушения Конституции — не за обычные преступления.",
  "Zasady procesu": "Начала процесса",
  "Postępowanie jest **dwuinstancyjne**: od wyroku przysługuje odwołanie. Rozprawy są **jawne**, a wyrok ogłasza się publicznie. Sędziowie są **niezawiśli** i podlegają tylko Konstytucji oraz ustawom.":
    "Разбирательство идёт **в двух инстанциях**: решение можно обжаловать. Заседания **открыты**, а приговор объявляют публично. Судьи **независимы** и подчинены только Конституции и законам.",
  "Sądy powszechne rozstrzygają spory między ludźmi i sądzą przestępstwa. **Trybunał Konstytucyjny nie jest sądem odwoławczym** — nie zmieni wyroku w sprawie, przygląda się przepisowi.":
    "Суды общей юрисдикции разрешают споры между людьми и судят преступления. **Конституционный трибунал не суд второй инстанции** — приговор по делу он не изменит, он смотрит на сам предписанный порядок.",
  "Który organ orzeka o zgodności ustawy z Konstytucją?":
    "Какой орган решает о соответствии закона Конституции?",
  "Sąd Najwyższy": "Верховный суд",
  "Naczelny Sąd Administracyjny": "Высший административный суд",
  "Trybunał Konstytucyjny. Sąd Najwyższy czuwa nad orzecznictwem sądów, Trybunał Stanu sądzi urzędników.":
    "Конституционный трибунал. Верховный суд следит за судебной практикой, Государственный трибунал судит должностных лиц.",
  "Ława przysięgłych? Nie tutaj": "Присяжные? Не здесь",
  "Polska nie ma ławy przysięgłych. W części spraw obok sędziego zawodowego orzekają **ławnicy** — obywatele wybierani przez rady gmin, którzy mają przy wyrokowaniu taki sam głos jak sędzia.":
    "Суда присяжных в Польше нет. В части дел рядом с профессиональным судьёй решают **народные заседатели** — граждане, избираемые советами гмин, и при вынесении приговора голос у них такой же, как у судьи.",
  "Prokuratura i adwokatura": "Прокуратура и адвокатура",
  "Prokurator": "Прокурор",
  "Prowadzi postępowanie przygotowawcze i oskarża przed sądem.":
    "Ведёт предварительное расследование и обвиняет перед судом.",
  "Adwokat i radca prawny": "Адвокат и юрисконсульт",
  "Bronią i reprezentują. Kto nie ma środków, może dostać obrońcę z urzędu.":
    "Защищают и представляют. У кого нет средств, тот может получить защитника по назначению.",
  "Komornik": "Судебный исполнитель",
  "Wykonuje prawomocne orzeczenia sądu, gdy dłużnik ich nie wypełnia.":
    "Исполняет вступившие в силу решения суда, когда должник их не выполняет.",
  "Kto orzeka w polskim sądzie obok sędziego zawodowego w części spraw?":
    "Кто в польском суде решает рядом с профессиональным судьёй в части дел?",
  "Ława przysięgłych": "Присяжные",
  "Ławnicy": "Народные заседатели",
  "Wojewoda": "Воевода",
  "Ławnicy, wybierani przez rady gmin. Ławy przysięgłych w Polsce nie ma.":
    "Народные заседатели, избираемые советами гмин. Суда присяжных в Польше нет.",
  "Samorząd terytorialny": "Территориальное самоуправление",
  "Trzy szczeble": "Три ступени",
  "Polska dzieli się na **16 województw**, te na **powiaty**, a powiaty na **gminy**. Gmina jest szczeblem podstawowym: to ona odpowiada za sprawy, których nie zastrzeżono dla innych.":
    "Польша делится на **16 воеводств**, те на **повяты**, а повяты на **гмины**. Гмина — ступень основная: она отвечает за всё, что не закреплено за другими.",
  "Kto czym kieruje": "Кто чем руководит",
  "Gmina": "Гмина",
  "Rada gminy i wójt, w mieście burmistrz albo prezydent miasta. Szkoły podstawowe, drogi lokalne, woda, śmieci.":
    "Совет гмины и wójt, в городе burmistrz или президент города. Начальные школы, местные дороги, вода, мусор.",
  "Powiat": "Повят",
  "Rada powiatu i starosta. Szpitale powiatowe, szkoły średnie, prawa jazdy, rejestracja pojazdów.":
    "Совет повята и староста. Повятовые больницы, средние школы, водительские права, учёт машин.",
  "Województwo": "Воеводство",
  "Sejmik i marszałek. Rozwój regionu, drogi wojewódzkie, fundusze europejskie.":
    "Сеймик и маршал. Развитие края, воеводские дороги, европейские фонды.",
  "Wojewoda a marszałek": "Воевода и маршал",
  "W województwie są **dwie** władze i łatwo je pomylić. **Marszałka** wybiera sejmik — to samorząd. **Wojewodę** powołuje premier — to przedstawiciel rządu w terenie, który nadzoruje legalność działań samorządu.":
    "В воеводстве **две** власти, и спутать их легко. **Маршала** избирает сеймик — это самоуправление. **Воеводу** назначает премьер — это представитель правительства на местах, надзирающий за законностью действий самоуправления.",
  "Wybory samorządowe": "Выборы в самоуправление",
  "Radnych, wójtów, burmistrzów i prezydentów miast wybiera się co **5 lat**. Mieszkańcy mogą też odwołać wójta albo radę w **referendum lokalnym**.":
    "Советников, wójtów, бургомистров и президентов городов избирают раз в **5 лет**. Жители могут и отозвать wójta или совет на **местном референдуме**.",
  "Kto powołuje wojewodę?": "Кто назначает воеводу?",
  "Sejmik województwa": "Сеймик воеводства",
  "Prezes Rady Ministrów": "Председатель Совета министров",
  "Prezydent Rzeczypospolitej": "Президент Речи Посполитой",
  "Mieszkańcy w wyborach": "Жители на выборах",
  "Premier. Wojewoda reprezentuje rząd; marszałka wybiera sejmik i to on kieruje samorządem województwa.":
    "Премьер. Воевода представляет правительство; маршала избирает сеймик, и он руководит самоуправлением воеводства.",
  "Skąd samorząd bierze pieniądze": "Откуда самоуправление берёт деньги",
  "Gminy mają **dochody własne** — podatek od nieruchomości, opłaty lokalne — oraz **udział w podatkach** PIT i CIT. Do tego dochodzą subwencje i dotacje z budżetu państwa, między innymi oświatowa.":
    "У гмин есть **собственные доходы** — налог на недвижимость, местные сборы — и **доля в налогах** PIT и CIT. К этому добавляются субвенции и дотации из государственного бюджета, в том числе на образование.",
  "Sołectwa i dzielnice": "Солецтва и районы",
  "Wewnątrz gminy działają jednostki pomocnicze: na wsi **sołectwa** z sołtysem, w mieście **dzielnice** albo **osiedla**. Część gmin oddaje mieszkańcom do rozdysponowania **budżet obywatelski**.":
    "Внутри гмины действуют вспомогательные единицы: на селе **sołectwa** во главе с sołtysem, в городе **районы** или **микрорайоны**. Часть гмин отдаёт жителям на распоряжение **гражданский бюджет**.",
  "Który szczebel samorządu odpowiada za szkoły podstawowe?":
    "Какая ступень самоуправления отвечает за начальные школы?",
  "Państwo": "Государство",
  "Gmina. Powiat prowadzi szkoły średnie, województwo zajmuje się rozwojem regionu.":
    "Гмина. Повят ведёт средние школы, воеводство занимается развитием края.",
  "Od Mieszka I do Rzeczypospolitej Obojga Narodów": "От Мешко I до Речи Посполитой Обоих Народов",
  "Historia Polski": "История Польши",
  "Sześćset lat w jednej lekcji — nie po to, żeby je zapamiętać, tylko żeby wiedzieć, skąd biorą się nazwy, które wracają później: Piastowie, Jagiellonowie, Rzeczpospolita.":
    "Шестьсот лет в одной лекции — не для того, чтобы их запомнить, а чтобы знать, откуда берутся имена, которые вернутся позже: Пясты, Ягеллоны, Речь Посполитая.",
  "Chrzest i pierwsze państwo": "Крещение и первое государство",
  "**Mieszko I** przyjmuje chrzest w **966 roku**. Jego syn **Bolesław Chrobry** koronuje się w **1025** na pierwszego króla Polski. Dynastia nazywa się **Piastami** i rządzi do 1370 roku.":
    "**Мешко I** принимает крещение в **966 году**. Его сын **Болеслав Храбрый** коронуется в **1025** первым королём Польши. Династия зовётся **Пястами** и правит до 1370 года.",
  "Rozbicie i zjednoczenie": "Раздробленность и объединение",
  "Po śmierci Bolesława Krzywoustego w 1138 roku kraj rozpada się na dzielnice na blisko dwieście lat. Scala go dopiero **Władysław Łokietek**, a jego syn **Kazimierz Wielki** (1333–1370) rozbudowuje państwo — powiada się o nim, że „zastał Polskę drewnianą, a zostawił murowaną”. W **1364** zakłada uniwersytet w Krakowie.":
    "После смерти Болеслава Кривоустого в 1138 году страна распадается на уделы почти на двести лет. Сшивает её только **Владислав Локоток**, а его сын **Казимир Великий** (1333–1370) достраивает государство — о нём говорят, что «застал Польшу деревянной, а оставил каменной». В **1364 году** он основывает университет в Кракове.",
  "Unia z Litwą": "Уния с Литвой",
  "1385 — unia w Krewie": "1385 — Кревская уния",
  "Wielki książę litewski Jagiełło żeni się z królową Jadwigą, przyjmuje chrzest i zostaje królem Polski.":
    "Великий князь литовский Ягайло женится на королеве Ядвиге, принимает крещение и становится королём Польши.",
  "1410 — Grunwald": "1410 — Грюнвальд",
  "Wojska polsko-litewskie pokonują zakon krzyżacki w jednej z największych bitew średniowiecznej Europy.":
    "Польско-литовские войска побеждают Тевтонский орден в одной из крупнейших битв средневековой Европы.",
  "1569 — unia lubelska": "1569 — Люблинская уния",
  "Polska i Litwa tworzą jedno państwo: Rzeczpospolitą Obojga Narodów, ze wspólnym sejmem i wspólnym królem.":
    "Польша и Литва образуют одно государство: Речь Посполитую Обоих Народов, с общим сеймом и общим королём.",
  "Szlachecka republika": "Шляхетская республика",
  "Rzeczpospolita jest monarchią, ale króla **wybiera szlachta** w wolnej elekcji. Sejm decyduje o podatkach i wojnie. Zasada **liberum veto** pozwala jednemu posłowi zerwać obrady — z czasem paraliżuje państwo.":
    "Речь Посполитая — монархия, но короля **выбирает шляхта** на вольной элекции. Сейм решает о налогах и войне. Правило **liberum veto** позволяет одному послу сорвать заседание — со временем оно парализует государство.",
  "W którym roku odbyła się bitwa pod Grunwaldem?": "В каком году произошла Грюнвальдская битва?",
  "1385": "1385",
  "1410": "1410",
  "1569": "1569",
  "1683": "1683",
  "1410. 1385 to unia w Krewie, 1569 unia lubelska, 1683 odsiecz wiedeńska.":
    "В 1410. 1385 — Кревская уния, 1569 — Люблинская, 1683 — выручка Вены.",
  "Gniezno i Kraków": "Гнезно и Краков",
  "Pierwszą stolicą było **Gniezno**, gdzie w **1000 roku** cesarz Otton III spotkał się z Bolesławem Chrobrym. Od XI wieku ośrodkiem władzy stał się **Kraków**, na Wawelu koronowano królów aż do XVIII wieku.":
    "Первой столицей было **Гнезно**, где в **1000 году** император Оттон III встретился с Болеславом Храбрым. С XI века средоточием власти стал **Краков**: на Вавеле короновали королей вплоть до XVIII века.",
  "Złoty wiek": "Золотой век",
  "XVI stulecie nazywa się **złotym wiekiem**: rozkwitają nauka i literatura, **Mikołaj Kopernik** ogłasza teorię heliocentryczną, a **Jan Kochanowski** pisze po polsku zamiast po łacinie.":
    "XVI столетие зовут **золотым веком**: расцветают наука и литература, **Николай Коперник** обнародует гелиоцентрическое учение, а **Ян Кохановский** пишет по-польски вместо латыни.",
  "Który uniwersytet założono w Krakowie w 1364 roku?":
    "Какой университет основали в Кракове в 1364 году?",
  "Uniwersytet Warszawski": "Варшавский университет",
  "Uniwersytet Jagielloński": "Ягеллонский университет",
  "Uniwersytet Wrocławski": "Вроцлавский университет",
  "Politechnika Gdańska": "Гданьский политехнический",
  "Uniwersytet Jagielloński, jedna z najstarszych uczelni Europy. Uniwersytet Warszawski powstał w 1816 roku.":
    "Ягеллонский университет, одно из старейших учебных заведений Европы. Варшавский университет возник в 1816 году.",
  "Rozbiory i walka o niepodległość": "Разделы и борьба за независимость",
  "Trzy rozbiory": "Три раздела",
  "Osłabioną Rzeczpospolitą dzielą między siebie **Rosja, Prusy i Austria**: w **1772**, **1793** i **1795** roku. Po trzecim rozbiorze państwo polskie **znika z mapy na 123 lata**.":
    "Ослабевшую Речь Посполитую делят между собой **Россия, Пруссия и Австрия**: в **1772**, **1793** и **1795 годах**. После третьего раздела польское государство **исчезает с карты на 123 года**.",
  "Próba ratunku": "Попытка спасения",
  "Cztery lata przed końcem Sejm Czteroletni uchwala **Konstytucję 3 maja 1791** — pierwszą w Europie i drugą na świecie nowoczesną konstytucję spisaną. Znosi liberum veto i wolną elekcję. Sąsiedzi widzą w niej zagrożenie i wkraczają zbrojnie.":
    "За четыре года до конца Четырёхлетний сейм принимает **Конституцию 3 мая 1791 года** — первую в Европе и вторую в мире записанную конституцию нового времени. Она отменяет liberum veto и вольную элекцию. Соседи видят в ней угрозу и входят с войсками.",
  "Powstania": "Восстания",
  "1794 — insurekcja kościuszkowska": "1794 — восстание Костюшко",
  "Tadeusz Kościuszko prowadzi ostatnią próbę obrony Rzeczypospolitej. Po klęsce następuje trzeci rozbiór.":
    "Тадеуш Костюшко ведёт последнюю попытку защитить Речь Посполитую. После поражения наступает третий раздел.",
  "1830 — powstanie listopadowe": "1830 — ноябрьское восстание",
  "Wybucha w Warszawie przeciw Rosji. Po klęsce tysiące ludzi emigruje na Zachód.":
    "Вспыхивает в Варшаве против России. После поражения тысячи людей уходят на Запад.",
  "1863 — powstanie styczniowe": "1863 — январское восстание",
  "Największe i najdłuższe. Po nim represje: rusyfikacja, konfiskaty, zsyłki na Sybir.":
    "Самое большое и самое долгое. После него репрессии: русификация, конфискации, ссылки в Сибирь.",
  "Naród bez państwa": "Народ без государства",
  "Przez sto dwadzieścia trzy lata polskość trwa w kulturze: w wierszach **Mickiewicza** i **Słowackiego**, w muzyce **Chopina**, w malarstwie **Matejki**. W 1903 roku **Maria Skłodowska-Curie** dostaje Nagrodę Nobla — pierwszą z dwóch.":
    "Сто двадцать три года польскость держится в культуре: в стихах **Мицкевича** и **Словацкого**, в музыке **Шопена**, в живописи **Матейко**. В 1903 году **Мария Склодовская-Кюри** получает Нобелевскую премию — первую из двух.",
  "Ile lat Polski nie było na mapie Europy?": "Сколько лет Польши не было на карте Европы?",
  "50 lat": "50 лет",
  "99 lat": "99 лет",
  "123 lata": "123 года",
  "150 lat": "150 лет",
  "123 lata — od trzeciego rozbioru w 1795 do odzyskania niepodległości w 1918.":
    "123 года — от третьего раздела в 1795 году до возвращения независимости в 1918.",
  "Trzej zaborcy, trzy porządki": "Три захватчика, три порядка",
  "Zabór rosyjski": "Русская часть",
  "Największy. Po powstaniach nasilona rusyfikacja i zsyłki.":
    "Самая большая. После восстаний усиленная русификация и ссылки.",
  "Zabór pruski": "Прусская часть",
  "Silna germanizacja, ale i lepsza gospodarka oraz powszechna szkoła.":
    "Сильная германизация, но и хозяйство получше, и всеобщая школа.",
  "Zabór austriacki": "Австрийская часть",
  "Galicja, uboga, lecz od 1867 roku z autonomią: polskie szkoły i sejm we Lwowie.":
    "Галиция, бедная, но с 1867 года с самоуправлением: польские школы и сейм во Львове.",
  "Praca zamiast powstania": "Работа вместо восстания",
  "Po klęsce 1863 roku część działaczy odchodzi od zbrojnych zrywów na rzecz **pracy organicznej**: zakładania szkół, spółdzielni i czytelni. Spór między walką a pracą u podstaw przewija się przez cały wiek XIX.":
    "После поражения 1863 года часть деятелей отходит от вооружённых порывов к **органической работе**: устройству школ, кооперативов и читален. Спор между борьбой и работой у основания тянется через весь XIX век.",
  "Które powstanie wybuchło w 1863 roku?": "Какое восстание вспыхнуло в 1863 году?",
  "Listopadowe": "Ноябрьское",
  "Styczniowe": "Январское",
  "Warszawskie": "Варшавское",
  "Wielkopolskie": "Великопольское",
  "Styczniowe. Listopadowe to 1830, wielkopolskie 1918, warszawskie 1944.":
    "Январское. Ноябрьское — это 1830, великопольское — 1918, варшавское — 1944.",
  "II Rzeczpospolita": "Вторая Речь Посполитая",
  "11 listopada 1918": "11 ноября 1918 года",
  "Gdy trzy zaborcze mocarstwa przegrywają albo rozpadają się w I wojnie światowej, Polska wraca. **11 listopada 1918** Rada Regencyjna przekazuje **Józefowi Piłsudskiemu** władzę wojskową. Dzień ten jest dziś **Narodowym Świętem Niepodległości**.":
    "Когда три захватившие державы проигрывают или распадаются в Первой мировой войне, Польша возвращается. **11 ноября 1918 года** Регентский совет передаёт **Юзефу Пилсудскому** военную власть. Этот день сегодня — **Национальный праздник независимости**.",
  "Granice trzeba było wywalczyć": "Границы пришлось отвоевать",
  "Kształt państwa ustala się w walkach i plebiscytach: powstanie wielkopolskie, trzy powstania śląskie, wojna z Rosją bolszewicką. **Bitwa Warszawska w sierpniu 1920** zatrzymuje ofensywę na zachód — nazywa się ją „cudem nad Wisłą”.":
    "Очертания государства складываются в боях и плебисцитах: великопольское восстание, три силезских восстания, война с большевистской Россией. **Варшавская битва в августе 1920 года** останавливает наступление на запад — её называют «чудом на Висле».",
  "Państwo od zera": "Государство с нуля",
  "Jedna waluta": "Одна валюта",
  "Trzy systemy prawne, trzy koleje, cztery waluty. W 1924 roku reforma Grabskiego wprowadza złotego.":
    "Три правовых порядка, три железные дороги, четыре валюты. В 1924 году реформа Грабского вводит злотый.",
  "Gdynia": "Гдыня",
  "Port budowany od podstaw od 1926 roku daje krajowi własne wyjście na Bałtyk.":
    "Порт, строящийся с нуля с 1926 года, даёт стране собственный выход на Балтику.",
  "Konstytucja marcowa": "Мартовская конституция",
  "1921 — republika parlamentarna. W 1935 zastępuje ją kwietniowa, wzmacniająca prezydenta.":
    "1921 — парламентская республика. В 1935 её сменяет апрельская, усиливающая президента.",
  "Kraj wielu narodów": "Страна многих народов",
  "W II Rzeczypospolitej mieszkają Polacy, Ukraińcy, Żydzi, Białorusini, Niemcy i Litwini. Około **jednej trzeciej** mieszkańców to mniejszości narodowe — więcej niż dziś.":
    "Во Второй Речи Посполитой живут поляки, украинцы, евреи, белорусы, немцы и литовцы. Около **трети** жителей — национальные меньшинства, больше, чем сегодня.",
  "Jak nazywa się bitwa z sierpnia 1920 roku, która zatrzymała ofensywę bolszewicką?":
    "Как называется битва августа 1920 года, остановившая большевистское наступление?",
  "Bitwa pod Grunwaldem": "Грюнвальдская битва",
  "Bitwa Warszawska": "Варшавская битва",
  "Bitwa pod Wiedniem": "Битва под Веной",
  "Bitwa nad Bzurą": "Битва на Бзуре",
  "Bitwa Warszawska, zwana cudem nad Wisłą. Bzura to wrzesień 1939, Wiedeń 1683, Grunwald 1410.":
    "Варшавская битва, прозванная чудом на Висле. Бзура — это сентябрь 1939, Вена — 1683, Грюнвальд — 1410.",
  "Zamach majowy": "Майский переворот",
  "W **maju 1926** Piłsudski przeprowadza zamach stanu. Zaczyna się okres **sanacji** — rządów obozu piłsudczykowskiego, w których rola parlamentu maleje. Piłsudski umiera w 1935 roku.":
    "В **мае 1926 года** Пилсудский совершает государственный переворот. Начинается пора **санации** — правления пилсудчиковского лагеря, при котором роль парламента убывает. Пилсудский умирает в 1935 году.",
  "Kultura międzywojnia": "Культура межвоенных лет",
  "Dwudziestolecie to czas **Tuwima**, **Witkacego** i **Gombrowicza**, kabaretu warszawskiego i pierwszego polskiego radia. W 1924 roku powstaje Polskie Radio, a filmy kręci się w Warszawie i Wilnie.":
    "Двадцатилетие — время **Тувима**, **Виткация** и **Гомбровича**, варшавского кабаре и первого польского радио. В 1924 году возникает Польское радио, а фильмы снимают в Варшаве и Вильне.",
  "Kto przeprowadził zamach majowy w 1926 roku?": "Кто совершил майский переворот 1926 года?",
  "Roman Dmowski": "Роман Дмовский",
  "Józef Piłsudski": "Юзеф Пилсудский",
  "Ignacy Paderewski": "Игнаций Падеревский",
  "Wincenty Witos": "Винценты Витос",
  "Józef Piłsudski. Dmowski był jego głównym przeciwnikiem politycznym, Paderewski pianistą i premierem w 1919 roku.":
    "Юзеф Пилсудский. Дмовский был его главным политическим противником, Падеревский — пианистом и премьером в 1919 году.",
  "II wojna światowa i okupacja": "Вторая мировая война и оккупация",
  "Sześć lat, które zmieniły granice, ludność i krajobraz kraju bardziej niż cokolwiek wcześniej. Bez nich nie da się zrozumieć ani dzisiejszej mapy, ani dzisiejszych świąt.":
    "Шесть лет, изменившие границы, население и облик страны сильнее, чем что бы то ни было прежде. Без них не понять ни сегодняшней карты, ни сегодняшних праздников.",
  "Wrzesień 1939": "Сентябрь 1939 года",
  "**1 września 1939** Niemcy atakują Polskę — wojna zaczyna się od ostrzału **Westerplatte**. **17 września** od wschodu wkracza Związek Radziecki, wykonując tajny protokół paktu Ribbentrop–Mołotow. Państwo zostaje podzielone między dwóch okupantów.":
    "**1 сентября 1939 года** Германия нападает на Польшу — война начинается с обстрела **Вестерплатте**. **17 сентября** с востока входит Советский Союз, исполняя тайный протокол пакта Риббентропа — Молотова. Государство делят между собой два оккупанта.",
  "Okupacja": "Оккупация",
  "Niemcy prowadzą na ziemiach polskich **Zagładę**: w obozach, z których największym był **Auschwitz-Birkenau**, ginie około trzech milionów polskich Żydów. Sowieci wywożą setki tysięcy ludzi na wschód, a wiosną 1940 mordują w **Katyniu** i innych miejscach blisko 22 tysiące polskich oficerów.":
    "Немцы ведут на польских землях **Катастрофу**: в лагерях, крупнейшим из которых был **Освенцим-Биркенау**, гибнет около трёх миллионов польских евреев. Советская сторона вывозит сотни тысяч людей на восток, а весной 1940 года убивает в **Катыни** и других местах без малого 22 тысячи польских офицеров.",
  "Państwo Podziemne": "Подпольное государство",
  "Armia Krajowa": "Армия Крайова",
  "Największa podziemna armia okupowanej Europy, podległa rządowi w Londynie.":
    "Крупнейшая подпольная армия оккупированной Европы, подчинённая правительству в Лондоне.",
  "Tajne nauczanie": "Тайное обучение",
  "Szkoły i uniwersytety działały w mieszkaniach, mimo kary śmierci za nauczanie.":
    "Школы и университеты работали в квартирах, несмотря на смертную казнь за преподавание.",
  "Powstanie w getcie": "Восстание в гетто",
  "Kwiecień 1943: zryw skazany z góry, podjęty, by zginąć z bronią w ręku.":
    "Апрель 1943 года: порыв, обречённый заранее, начатый ради того, чтобы погибнуть с оружием в руках.",
  "Powstanie Warszawskie": "Варшавское восстание",
  "1 sierpnia 1944, 63 dni walki. Miasto zostaje po nim celowo zburzone.":
    "1 августа 1944 года, 63 дня боёв. Город после него разрушают намеренно.",
  "Bilans": "Итог",
  "Polska traci około **6 milionów** obywateli — blisko jedną piątą ludności. Granice przesuwają się na zachód: kraj traci Kresy Wschodnie, zyskuje ziemie nad Odrą i Bałtykiem. Miliony ludzi zostają przesiedlone.":
    "Польша теряет около **6 миллионов** граждан — почти пятую часть населения. Границы сдвигаются на запад: страна теряет восточные окраины и получает земли над Одрой и Балтикой. Миллионы людей переселяют.",
  "Którego dnia rozpoczęła się II wojna światowa atakiem na Polskę?":
    "В какой день Вторая мировая война началась нападением на Польшу?",
  "17 września 1939": "17 сентября 1939 года",
  "1 września 1939": "1 сентября 1939 года",
  "1 sierpnia 1944": "1 августа 1944 года",
  "8 maja 1945": "8 мая 1945 года",
  "1 września 1939. 17 września to wkroczenie ZSRR, 1 sierpnia 1944 to Powstanie Warszawskie, 8 maja 1945 to koniec wojny w Europie.":
    "1 сентября 1939 года. 17 сентября — вступление СССР, 1 августа 1944 — Варшавское восстание, 8 мая 1945 — конец войны в Европе.",
  "Polacy poza krajem": "Поляки за пределами страны",
  "Rząd przeniósł się do **Londynu**. Polscy lotnicy walczyli w bitwie o Anglię — najskuteczniejszy był **dywizjon 303**. Żołnierze generała Andersa przeszli przez Bliski Wschód do Włoch i w 1944 roku zdobyli **Monte Cassino**.":
    "Правительство перебралось в **Лондон**. Польские лётчики бились в битве за Британию — успешнее всех был **дивизион 303**. Солдаты генерала Андерса прошли через Ближний Восток в Италию и в 1944 году взяли **Монте-Кассино**.",
  "Ci, którzy ratowali": "Те, кто спасал",
  "Za pomoc Żydom groziła w okupowanej Polsce **kara śmierci**, także dla całej rodziny. Mimo to działała **Żegota** — Rada Pomocy Żydom. Polacy stanowią najliczniejszą grupę wśród odznaczonych tytułem **Sprawiedliwy wśród Narodów Świata**.":
    "За помощь евреям в оккупированной Польше грозила **смертная казнь**, в том числе всей семье. И всё же действовала **Żegota** — Совет помощи евреям. Поляки составляют самую многочисленную группу среди удостоенных звания **Праведник народов мира**.",
  "Jak nazywał się polski dywizjon myśliwski, który wsławił się w bitwie o Anglię?":
    "Как назывался польский истребительный дивизион, прославившийся в битве за Британию?",
  "Dywizjon 300": "Дивизион 300",
  "Dywizjon 303": "Дивизион 303",
  "Dywizjon 316": "Дивизион 316",
  "Dywizjon 1": "Дивизион 1",
  "Dywizjon 303 imienia Tadeusza Kościuszki, jeden z najskuteczniejszych w całej bitwie.":
    "Дивизион 303 имени Тадеуша Костюшко, один из самых успешных во всей битве.",
  "PRL i Solidarność": "ПНР и «Солидарность»",
  "Polska Rzeczpospolita Ludowa": "Польская Народная Республика",
  "Po wojnie Polska znajduje się w strefie wpływów Związku Radzieckiego. Władzę sprawuje jedna partia — **PZPR**. Gospodarka jest planowana centralnie, prywatny przemysł znacjonalizowany, granica zachodnia potwierdzona dopiero układami z lat 1970 i 1990.":
    "После войны Польша оказывается в полосе влияния Советского Союза. Власть держит одна партия — **ПОРП**. Хозяйство планируют из центра, частную промышленность огосударствляют, а западную границу подтверждают только договорами 1970 и 1990 годов.",
  "Bunty": "Бунты",
  "1956 — Poznań": "1956 — Познань",
  "Robotniczy protest stłumiony wojskiem; zapoczątkował odwilż.":
    "Рабочий протест, подавленный войсками; с него началась оттепель.",
  "1968 — Marzec": "1968 — март",
  "Protesty studenckie i antysemicka kampania, po której kraj opuszcza kilkanaście tysięcy osób.":
    "Студенческие протесты и антисемитская кампания, после которой страну покидает больше десяти тысяч человек.",
  "1970 — Wybrzeże": "1970 — побережье",
  "Strajki przeciw podwyżkom cen, stłumione strzałami do robotników.":
    "Забастовки против повышения цен, подавленные стрельбой по рабочим.",
  "1976 — Radom i Ursus": "1976 — Радом и Урсус",
  "Kolejne strajki; powstaje Komitet Obrony Robotników.":
    "Новые забастовки; возникает Комитет защиты рабочих.",
  "Solidarność": "«Солидарность»",
  "W **sierpniu 1980** strajk w Stoczni Gdańskiej kończy się **porozumieniami sierpniowymi**. Powstaje **NSZZ „Solidarność”** — pierwszy niezależny związek zawodowy w bloku wschodnim, z **Lechem Wałęsą** na czele. W szczytowym momencie liczy blisko dziesięć milionów członków.":
    "В **августе 1980 года** забастовка на Гданьской верфи кончается **августовскими соглашениями**. Возникает **независимый самоуправляемый профсоюз «Солидарность»** — первый независимый профсоюз в восточном блоке, во главе с **Лехом Валенсой**. На вершине он насчитывает без малого десять миллионов членов.",
  "Stan wojenny": "Военное положение",
  "**13 grudnia 1981** generał Wojciech Jaruzelski wprowadza **stan wojenny**. Solidarność zostaje zdelegalizowana, tysiące działaczy internowanych. Związek działa dalej w podziemiu.":
    "**13 декабря 1981 года** генерал Войцех Ярузельский вводит **военное положение**. «Солидарность» объявляют вне закона, тысячи деятелей интернируют. Профсоюз действует дальше в подполье.",
  "Wybór **Karola Wojtyły** na papieża w **1978** i jego pielgrzymka do Polski rok później są dla wielu badaczy jednym z warunków tego, co stało się w 1980 roku.":
    "Избрание **Кароля Войтылы** папой в **1978 году** и его поездка в Польшу годом позже для многих исследователей — одно из условий того, что случилось в 1980.",
  "W którym roku wprowadzono w Polsce stan wojenny?":
    "В каком году в Польше ввели военное положение?",
  "1970": "1970",
  "1976": "1976",
  "1981": "1981",
  "13 grudnia 1981 roku. 1980 to powstanie Solidarności, 1989 to wybory czerwcowe.":
    "13 декабря 1981 года. 1980 — возникновение «Солидарности», 1989 — июньские выборы.",
  "Życie codzienne w PRL": "Повседневная жизнь в ПНР",
  "Gospodarka niedoboru oznaczała **kolejki** i **kartki** na mięso, cukier czy buty. Mieszkania przydzielała spółdzielnia, a na samochód czekało się latami. Paszport trzymał urząd i trzeba było o niego prosić.":
    "Хозяйство нехваток означало **очереди** и **талоны** на мясо, сахар или обувь. Квартиры распределял кооператив, а машину ждали годами. Паспорт держало учреждение, и о нём приходилось просить.",
  "Kultura mimo cenzury": "Культура вопреки цензуре",
  "Mimo cenzury powstawały film, teatr i muzyka, które znano poza krajem: szkoła filmowa w Łodzi, plakat polski, jazz. Obok tego działał **drugi obieg** — książki drukowane i kolportowane nielegalnie.":
    "Вопреки цензуре рождались кино, театр и музыка, известные за пределами страны: киношкола в Лодзи, польский плакат, джаз. Рядом с этим шёл **второй оборот** — книги, печатавшиеся и расходившиеся незаконно.",
  "W którym roku powstała Solidarność?": "В каком году возникла «Солидарность»?",
  "1980": "1980",
  "W sierpniu 1980 roku, po strajku w Stoczni Gdańskiej. W 1981 wprowadzono stan wojenny.":
    "В августе 1980 года, после забастовки на Гданьской верфи. В 1981 ввели военное положение.",
  "1989 i III Rzeczpospolita": "1989 год и Третья Речь Посполитая",
  "Okrągły Stół": "Круглый стол",
  "Wiosną **1989** władza i opozycja siadają do rozmów przy **Okrągłym Stole**. Ustalają częściowo wolne wybory: o 35 procent miejsc w Sejmie wolno ubiegać się każdemu, Senat jest wolny w całości.":
    "Весной **1989 года** власть и оппозиция садятся за переговоры **круглого стола**. Договариваются о частично свободных выборах: на 35 процентов мест в Сейме может претендовать любой, Сенат свободен целиком.",
  "4 czerwca 1989": "4 июня 1989 года",
  "Solidarność zdobywa **wszystkie** mandaty, o które mogła się ubiegać w Sejmie, i **99 na 100** miejsc w Senacie. We wrześniu **Tadeusz Mazowiecki** zostaje pierwszym od czterdziestu lat niekomunistycznym premierem w bloku wschodnim.":
    "«Солидарность» берёт **все** мандаты, на которые могла претендовать в Сейме, и **99 из 100** мест в Сенате. В сентябре **Тадеуш Мазовецкий** становится первым за сорок лет некоммунистическим премьером в восточном блоке.",
  "Przemiany lat dziewięćdziesiątych": "Перемены девяностых годов",
  "Gospodarka": "Хозяйство",
  "Plan Balcerowicza otwiera rynek. Ceny rosną, przedsiębiorstwa upadają, ale półki pustoszeć przestają.":
    "План Бальцеровича открывает рынок. Цены растут, предприятия падают, но полки пустеть перестают.",
  "Samorząd": "Самоуправление",
  "1990: pierwsze wolne wybory samorządowe i odrodzenie gmin.":
    "1990: первые свободные выборы в самоуправление и возрождение гмин.",
  "Konstytucja": "Конституция",
  "1997: nowa ustawa zasadnicza zastępuje poprawianą konstytucję z 1952 roku.":
    "1997: новый основной закон сменяет многократно правленную конституцию 1952 года.",
  "Reforma administracyjna": "Административная реформа",
  "1999: 49 województw zastąpiono 16, przywrócono powiaty.":
    "1999: 49 воеводств заменили 16, повяты вернули.",
  "Miejsce w Europie": "Место в Европе",
  "W **1999** Polska wstępuje do **NATO**, w **2004** do **Unii Europejskiej** — po referendum, w którym za opowiedziało się ponad trzy czwarte głosujących. Od **2007** należy do strefy Schengen; waluty euro nie przyjęła.":
    "В **1999 году** Польша вступает в **НАТО**, в **2004** — в **Европейский союз**, после референдума, на котором за высказалось больше трёх четвертей голосовавших. С **2007 года** она в шенгенской зоне; валюту евро не приняла.",
  "W którym roku Polska wstąpiła do Unii Europejskiej?":
    "В каком году Польша вступила в Европейский союз?",
  "1999": "1999",
  "2007": "2007",
  "1 maja 2004. 1999 to wejście do NATO, 2007 to strefa Schengen.":
    "1 мая 2004 года. 1999 — вступление в НАТО, 2007 — шенгенская зона.",
  "Prezydenci III Rzeczypospolitej": "Президенты Третьей Речи Посполитой",
  "Pierwszym prezydentem wybranym w wyborach powszechnych został w **1990 roku Lech Wałęsa**. Po nim urząd sprawowali kolejno Aleksander Kwaśniewski, Lech Kaczyński, Bronisław Komorowski i Andrzej Duda.":
    "Первым президентом, избранным на всеобщих выборах, стал в **1990 году Лех Валенса**. После него должность занимали по очереди Александр Квасьневский, Лех Качиньский, Бронислав Коморовский и Анджей Дуда.",
  "Katastrofa smoleńska": "Смоленская катастрофа",
  "**10 kwietnia 2010** w katastrofie samolotu pod Smoleńskiem zginęło 96 osób, w tym prezydent **Lech Kaczyński** z małżonką oraz wielu przedstawicieli władz. Delegacja leciała na obchody rocznicy zbrodni katyńskiej.":
    "**10 апреля 2010 года** в катастрофе самолёта под Смоленском погибли 96 человек, в том числе президент **Лех Качиньский** с супругой и многие представители власти. Делегация летела на памятные торжества по случаю годовщины катынского преступления.",
  "Kto był pierwszym prezydentem wybranym w wyborach powszechnych po 1989 roku?":
    "Кто был первым президентом, избранным на всеобщих выборах после 1989 года?",
  "Wojciech Jaruzelski": "Войцех Ярузельский",
  "Lech Wałęsa": "Лех Валенса",
  "Aleksander Kwaśniewski": "Александр Квасьневский",
  "Tadeusz Mazowiecki": "Тадеуш Мазовецкий",
  "Lech Wałęsa, w 1990 roku. Jaruzelskiego wybrało Zgromadzenie Narodowe w 1989, Mazowiecki był premierem.":
    "Лех Валенса, в 1990 году. Ярузельского избрало Национальное собрание в 1989, Мазовецкий был премьером.",
  "Geografia i regiony": "География и края",
  "Geografia, gospodarka i Polska w świecie": "География, хозяйство и Польша в мире",
  "Położenie i sąsiedzi": "Положение и соседи",
  "Polska leży w Europie Środkowej i graniczy z **siedmioma** państwami: Niemcami, Czechami, Słowacją, Ukrainą, Białorusią, Litwą i Rosją (obwód kaliningradzki). Od północy ma dostęp do **Morza Bałtyckiego**.":
    "Польша лежит в Средней Европе и граничит с **семью** государствами: Германией, Чехией, Словакией, Украиной, Белоруссией, Литвой и Россией (Калининградская область). С севера у неё выход к **Балтийскому морю**.",
  "Ukształtowanie terenu": "Рельеф",
  "Kraj opada z południa na północ: **góry** na granicy południowej, **wyżyny** w środku, **niziny** na północy, **pojezierza** i wybrzeże. Najwyższy szczyt to **Rysy** w Tatrach — **2499 m n.p.m.** Powierzchnia kraju to około **312 700 km²**.":
    "Страна опускается с юга на север: **горы** на южной границе, **возвышенности** посередине, **низменности** на севере, **поозёрья** и побережье. Самая высокая вершина — **Рысы** в Татрах, **2499 м над уровнем моря**. Площадь страны около **312 700 км²**.",
  "Rzeki i jeziora": "Реки и озёра",
  "Wisła": "Висла",
  "Najdłuższa rzeka, 1047 km. Płynie z gór na północ, przez Kraków i Warszawę, do Bałtyku pod Gdańskiem.":
    "Самая длинная река, 1047 км. Течёт с гор на север, через Краков и Варшаву, к Балтике под Гданьском.",
  "Odra": "Одра",
  "Druga co do długości, na znacznym odcinku granica z Niemcami.":
    "Вторая по длине, на большом отрезке — граница с Германией.",
  "Mazury": "Мазуры",
  "Kraina tysiąca jezior na północnym wschodzie; największe z nich to Śniardwy.":
    "Край тысячи озёр на северо-востоке; самое большое из них — Снярдвы.",
  "Puszcza Białowieska": "Беловежская пуща",
  "Ostatni fragment pierwotnej puszczy niżowej Europy, wpisany na listę UNESCO. Żyją tu żubry.":
    "Последний клочок первобытного равнинного леса Европы, внесённый в список ЮНЕСКО. Здесь живут зубры.",
  "Krainy historyczne": "Исторические края",
  "Poza podziałem administracyjnym mówi się o krainach: **Mazowsze** wokół Warszawy, **Małopolska** wokół Krakowa, **Wielkopolska** wokół Poznania, **Śląsk** na południowym zachodzie, **Pomorze** nad morzem, **Mazury** i **Podlasie** na wschodzie.":
    "Помимо административного деления говорят о краях: **Мазовше** вокруг Варшавы, **Малопольша** вокруг Кракова, **Великопольша** вокруг Познани, **Силезия** на юго-западе, **Поморье** у моря, **Мазуры** и **Подлясье** на востоке.",
  "Jak nazywa się najwyższy szczyt Polski?": "Как называется самая высокая вершина Польши?",
  "Śnieżka": "Снежка",
  "Rysy": "Рысы",
  "Giewont": "Гевонт",
  "Babia Góra": "Бабья Гура",
  "Rysy w Tatrach, 2499 m. Śnieżka to najwyższy szczyt Karkonoszy, Giewont jest niższy i leży nad Zakopanem.":
    "Рысы в Татрах, 2499 м. Снежка — высшая точка Карконошей, Гевонт ниже и стоит над Закопане.",
  "Klimat": "Климат",
  "Klimat jest **umiarkowany przejściowy**: między morskim z zachodu a kontynentalnym ze wschodu. Dlatego pogoda bywa zmienna, a zimy raz łagodne, raz mroźne. Występują wszystkie **cztery pory roku**.":
    "Климат **умеренный переходный**: между морским с запада и континентальным с востока. Оттого погода переменчива, а зимы то мягкие, то морозные. Есть все **четыре времени года**.",
  "Parki narodowe": "Национальные парки",
  "Jest ich **23**. Najstarsze to Białowieski i Pieniński, najwyżej położony — **Tatrzański**. Nad morzem leży Słowiński z ruchomymi wydmami, które przesuwają się o kilka metrów rocznie.":
    "Их **23**. Самые старые — Беловежский и Пенинский, самый высокогорный — **Татранский**. У моря лежит Словинский с движущимися дюнами, которые смещаются на несколько метров в год.",
  "Która rzeka jest najdłuższa w Polsce?": "Какая река самая длинная в Польше?",
  "Warta": "Варта",
  "Bug": "Буг",
  "Wisła, 1047 km. Odra jest druga, Warta jest dopływem Odry.":
    "Висла, 1047 км. Одра вторая, Варта — приток Одры.",
  "Podział administracyjny i miasta": "Административное деление и города",
  "Szesnaście województw": "Шестнадцать воеводств",
  "Od reformy z **1999 roku** kraj dzieli się na **16 województw**. Wcześniej było ich 49. Każde ma stolicę — a dwa z nich mają po dwie: w kujawsko-pomorskim sejmik obraduje w Toruniu, a wojewoda urzęduje w Bydgoszczy; w lubuskim podobnie dzielą się Zielona Góra i Gorzów Wielkopolski.":
    "После реформы **1999 года** страна делится на **16 воеводств**. Раньше их было 49. У каждого есть столица — а у двух их по две: в куявско-поморском сеймик заседает в Торуни, а воевода сидит в Быдгоще; в любушском так же делят между собой Зелёна-Гура и Гожув-Велькопольски.",
  "Największe miasta": "Крупнейшие города",
  "Warszawa": "Варшава",
  "Stolica od 1596 roku, około 1,8 miliona mieszkańców. Siedziba Sejmu, Senatu, Prezydenta i rządu.":
    "Столица с 1596 года, около 1,8 миллиона жителей. Местопребывание Сейма, Сената, президента и правительства.",
  "Kraków": "Краков",
  "Dawna stolica i miejsce koronacji królów. Uniwersytet Jagielloński działa od 1364 roku.":
    "Прежняя столица и место коронации королей. Ягеллонский университет работает с 1364 года.",
  "Łódź, Wrocław, Poznań": "Лодзь, Вроцлав, Познань",
  "Kolejne co do wielkości. Wrocław leży nad Odrą, Poznań nad Wartą.":
    "Следующие по величине. Вроцлав стоит на Одре, Познань на Варте.",
  "Gdańsk": "Гданьск",
  "Główny port, miasto porozumień sierpniowych i początku Solidarności.":
    "Главный порт, город августовских соглашений и начала «Солидарности».",
  "Ludność": "Население",
  "W Polsce mieszka około **37–38 milionów** osób. Kraj jest dziś **jednolity narodowościowo** — inaczej niż przed wojną, gdy jedną trzecią mieszkańców stanowiły mniejszości. Uznanych mniejszości narodowych i etnicznych jest **dziewięć i cztery**, a językiem regionalnym jest **kaszubski**.":
    "В Польше живёт около **37–38 миллионов** человек. Страна сегодня **однородна по составу народов** — иначе, чем до войны, когда треть жителей составляли меньшинства. Признанных национальных и этнических меньшинств **девять и четыре**, а региональным языком является **кашубский**.",
  "Stolicą Polski nie zawsze była Warszawa. Najpierw było **Gniezno**, potem przez pół tysiąclecia **Kraków**; przeniesienie dworu do Warszawy nastąpiło za Zygmunta III Wazy pod koniec XVI wieku.":
    "Столицей Польши не всегда была Варшава. Сперва было **Гнезно**, потом полтысячелетия **Краков**; перенос двора в Варшаву случился при Сигизмунде III Вазе в конце XVI века.",
  "Ile województw ma Polska?": "Сколько воеводств в Польше?",
  "12": "12",
  "16": "16",
  "24": "24",
  "49": "49",
  "16 od reformy z 1999 roku. Wcześniej było 49.": "16 после реформы 1999 года. Раньше было 49.",
  "Zabytki na liście UNESCO": "Памятники в списке ЮНЕСКО",
  "Historyczne centrum, wpisane w 1978 roku wśród pierwszych obiektów na świecie.":
    "Историческое ядро города, внесённое в 1978 году в числе первых объектов мира.",
  "Wieliczka": "Величка",
  "Kopalnia soli czynna od średniowiecza, z kaplicami wykutymi w solnej skale.":
    "Соляная шахта, работающая со средневековья, с часовнями, вырубленными в соляной породе.",
  "Starówka odbudowana po wojnie — wpisana właśnie za tę odbudowę.":
    "Старый город, отстроенный после войны, — внесён именно за это восстановление.",
  "Auschwitz-Birkenau": "Освенцим-Биркенау",
  "Miejsce pamięci, zachowane jako świadectwo.": "Место памяти, сохранённое как свидетельство.",
  "Miasta wojewódzkie": "Воеводские города",
  "Stolicami województw są między innymi Warszawa, Kraków, Łódź, Wrocław, Poznań, Gdańsk, Szczecin, Lublin, Białystok, Katowice, Rzeszów, Kielce, Olsztyn i Opole.":
    "Столицами воеводств являются, среди прочих, Варшава, Краков, Лодзь, Вроцлав, Познань, Гданьск, Щецин, Люблин, Белосток, Катовице, Жешув, Кельце, Ольштын и Ополе.",
  "Które miasto było stolicą Polski przed Warszawą?":
    "Какой город был столицей Польши до Варшавы?",
  "Poznań": "Познань",
  "Wrocław": "Вроцлав",
  "Kraków, przez blisko pięćset lat. Jeszcze wcześniej stolicą było Gniezno.":
    "Краков, без малого пятьсот лет. Ещё раньше столицей было Гнезно.",
  "Gospodarka i praca": "Хозяйство и работа",
  "Waluta": "Валюта",
  "Walutą jest **złoty (PLN)**, dzielony na 100 groszy. Polska należy do Unii Europejskiej, ale **nie przyjęła euro** — zobowiązała się do tego w traktacie akcesyjnym, bez wyznaczonej daty. Pieniądz emituje **Narodowy Bank Polski**.":
    "Валюта — **злотый (PLN)**, делится на 100 грошей. Польша состоит в Европейском союзе, но **евро не приняла** — обязалась это сделать в договоре о вступлении, без назначенной даты. Деньги выпускает **Национальный банк Польши**.",
  "Praca": "Работа",
  "Umowa o pracę": "Трудовой договор",
  "Daje urlop, ochronę przed zwolnieniem i składki. Obok niej działają umowy zlecenia i o dzieło.":
    "Даёт отпуск, защиту от увольнения и отчисления. Рядом с ним действуют договор поручения и договор подряда.",
  "Płaca minimalna": "Минимальная оплата",
  "Ustalana co roku rozporządzeniem Rady Ministrów, obowiązuje wszystkich pracowników.":
    "Устанавливается ежегодно постановлением Совета министров и обязательна для всех работников.",
  "Czas pracy": "Рабочее время",
  "Zasadniczo 8 godzin dziennie i 40 tygodniowo, przeciętnie w przyjętym okresie rozliczeniowym.":
    "По общему правилу 8 часов в день и 40 в неделю, в среднем за принятый расчётный период.",
  "Urlop": "Отпуск",
  "20 dni przy stażu poniżej 10 lat, 26 dni powyżej. Nauka wlicza się do stażu.":
    "20 дней при стаже меньше 10 лет, 26 дней при большем. Учёба в стаж засчитывается.",
  "Podatki i składki": "Налоги и отчисления",
  "Podatek dochodowy od osób fizycznych (**PIT**) jest progresywny. Do tego dochodzą składki na **ZUS** — emerytalna, rentowa, chorobowa i wypadkowa — oraz składka zdrowotna na **NFZ**. Podstawowa stawka **VAT** wynosi 23 procent, na żywność i książki jest niższa.":
    "Подоходный налог с физических лиц (**PIT**) прогрессивный. К нему добавляются отчисления в **ZUS** — пенсионное, по утрате трудоспособности, на случай болезни и от несчастных случаев — а также взнос на здравоохранение в **NFZ**. Основная ставка **VAT** составляет 23 процента, на продукты и книги она ниже.",
  "Czym Polska żyje": "Чем Польша живёт",
  "Gospodarka opiera się na przemyśle, usługach i rolnictwie. Kraj jest dużym producentem żywności, mebli, sprzętu AGD i części samochodowych, a od lat dziewięćdziesiątych rośnie w nim sektor informatyczny i usług dla biznesu.":
    "Хозяйство держится на промышленности, услугах и сельском хозяйстве. Страна крупно производит продовольствие, мебель, бытовую технику и автомобильные части, а с девяностых годов в ней растут отрасль вычислительной техники и услуги для предприятий.",
  "Jaka jest waluta Polski?": "Какая валюта в Польше?",
  "Euro": "Евро",
  "Korona": "Крона",
  "Marka": "Марка",
  "Złoty, dzielony na 100 groszy. Polska jest w Unii Europejskiej, ale euro nie przyjęła.":
    "Злотый, делится на 100 грошей. Польша в Европейском союзе, но евро не приняла.",
  "Zakładanie działalności": "Открытие своего дела",
  "Jednoosobową działalność gospodarczą rejestruje się w **CEIDG** — bezpłatnie i przez internet. Spółki wpisuje się do **KRS**. Do rozliczeń potrzebny jest numer **NIP**, a przy zatrudnianiu zgłoszenie do ZUS.":
    "Единоличную хозяйственную деятельность записывают в **CEIDG** — бесплатно и через интернет. Товарищества вносят в **KRS**. Для расчётов нужен номер **NIP**, а при найме людей — заявление в ZUS.",
  "Emerytura": "Пенсия",
  "Wiek emerytalny wynosi **60 lat dla kobiet** i **65 lat dla mężczyzn**. Wysokość świadczenia zależy od sumy odprowadzonych składek i przewidywanej długości życia — im dłużej się pracuje, tym wyższa emerytura.":
    "Пенсионный возраст составляет **60 лет для женщин** и **65 лет для мужчин**. Размер выплаты зависит от суммы отчислений и предполагаемой продолжительности жизни — чем дольше работаешь, тем пенсия выше.",
  "Gdzie rejestruje się jednoosobową działalność gospodarczą?":
    "Где записывают единоличную хозяйственную деятельность?",
  "W CEIDG": "В CEIDG",
  "W KRS": "В KRS",
  "W ZUS": "В ZUS",
  "W urzędzie wojewódzkim": "В воеводском управлении",
  "W CEIDG, bezpłatnie i przez internet. KRS jest rejestrem spółek.":
    "В CEIDG, бесплатно и через интернет. KRS — это реестр товариществ.",
  "Polska w Unii Europejskiej i NATO": "Польша в Европейском союзе и НАТО",
  "Dwie daty": "Две даты",
  "**1999** — wejście do **NATO**, razem z Czechami i Węgrami. **2004** — wejście do **Unii Europejskiej**, razem z dziewięcioma innymi państwami, po referendum, w którym wzięło udział blisko 59 procent uprawnionych, a za opowiedziało się ponad trzy czwarte głosujących.":
    "**1999** — вступление в **НАТО**, вместе с Чехией и Венгрией. **2004** — вступление в **Европейский союз**, вместе с девятью другими государствами, после референдума, в котором приняли участие без малого 59 процентов имевших право, а за высказалось больше трёх четвертей голосовавших.",
  "Co daje członkostwo w Unii": "Что даёт членство в Союзе",
  "Swoboda przemieszczania": "Свобода передвижения",
  "Wolno mieszkać, pracować i studiować w każdym państwie członkowskim.":
    "Разрешено жить, работать и учиться в любом государстве-члене.",
  "Schengen": "Шенген",
  "Od 2007 roku granice wewnętrzne przekracza się bez kontroli.":
    "С 2007 года внутренние границы переходят без контроля.",
  "Fundusze": "Фонды",
  "Polska jest jednym z największych odbiorców funduszy spójności — drogi, koleje, oczyszczalnie.":
    "Польша — один из крупнейших получателей фондов сплочения: дороги, железные дороги, очистные сооружения.",
  "Parlament Europejski": "Европейский парламент",
  "Polacy wybierają swoich posłów co pięć lat, w wyborach bezpośrednich.":
    "Поляки избирают своих депутатов раз в пять лет, прямым голосованием.",
  "Sąsiedztwo i bezpieczeństwo": "Соседство и безопасность",
  "Polska graniczy z **Ukrainą, Białorusią i Rosją**, więc granica wschodnia kraju jest zarazem zewnętrzną granicą Unii Europejskiej i NATO. Współpracuje też w formatach regionalnych — **Grupa Wyszehradzka** z Czechami, Słowacją i Węgrami oraz **Trójkąt Weimarski** z Niemcami i Francją.":
    "Польша граничит с **Украиной, Белоруссией и Россией**, и потому её восточная граница есть одновременно внешняя граница Европейского союза и НАТО. Работает она и в областных объединениях — **Вышеградская группа** с Чехией, Словакией и Венгрией и **Веймарский треугольник** с Германией и Францией.",
  "**Polonia** — Polacy i osoby polskiego pochodzenia mieszkające za granicą — liczy według szacunków kilkanaście do dwudziestu milionów osób. Największe skupiska są w Stanach Zjednoczonych, Niemczech i Wielkiej Brytanii.":
    "**Полония** — поляки и люди польского происхождения, живущие за границей, — насчитывает по оценкам от десяти с лишним до двадцати миллионов человек. Самые большие сгустки в Соединённых Штатах, Германии и Великобритании.",
  "W którym roku Polska wstąpiła do NATO?": "В каком году Польша вступила в НАТО?",
  "1999, pięć lat przed wejściem do Unii Europejskiej. 2007 to strefa Schengen.":
    "В 1999, за пять лет до вступления в Европейский союз. 2007 — шенгенская зона.",
  "Prawo europejskie": "Европейское право",
  "Prawo Unii Europejskiej obowiązuje w Polsce bezpośrednio, a **Trybunał Sprawiedliwości Unii Europejskiej** w Luksemburgu czuwa nad jego stosowaniem. Osobno działa **Europejski Trybunał Praw Człowieka** w Strasburgu, do którego można złożyć skargę po wyczerpaniu drogi krajowej.":
    "Право Европейского союза действует в Польше напрямую, а **Суд Европейского союза** в Люксембурге следит за его применением. Отдельно работает **Европейский суд по правам человека** в Страсбурге, куда можно подать жалобу, исчерпав путь внутри страны.",
  "Pomoc dla Ukrainy": "Помощь Украине",
  "Po pełnoskalowej agresji Rosji na Ukrainę w **2022 roku** przez Polskę przeszły miliony uchodźców, a kilkaset tysięcy zostało na dłużej. Był to największy ruch ludności w tej części Europy od czasu II wojny światowej.":
    "После полномасштабного нападения России на Украину в **2022 году** через Польшу прошли миллионы беженцев, а несколько сот тысяч остались надолго. Это было самое большое передвижение людей в этой части Европы со времён Второй мировой войны.",
  "Który trybunał rozpatruje skargi na naruszenie praw człowieka po wyczerpaniu drogi krajowej?":
    "Какой суд рассматривает жалобы на нарушение прав человека после исчерпания пути внутри страны?",
  "Europejski Trybunał Praw Człowieka w Strasburgu":
    "Европейский суд по правам человека в Страсбурге",
  "Trybunał w Strasburgu. Ten w Luksemburgu zajmuje się prawem Unii, a nie skargami indywidualnymi tego rodzaju.":
    "Суд в Страсбурге. Тот, что в Люксембурге, занимается правом Союза, а не такими личными жалобами.",
  "Religia i tradycje": "Религия и обычаи",
  "Społeczeństwo i życie codzienne": "Общество и повседневная жизнь",
  "Kościół i państwo": "Церковь и государство",
  "Konstytucja zapewnia **wolność sumienia i wyznania**, a państwo jest **bezstronne** w sprawach przekonań religijnych. Nie ma religii państwowej. Stosunki z Kościołem katolickim reguluje **konkordat** ze Stolicą Apostolską z 1993 roku.":
    "Конституция обеспечивает **свободу совести и вероисповедания**, а государство **беспристрастно** в делах религиозных убеждений. Государственной религии нет. Отношения с католической церковью определяет **конкордат** со Святым престолом 1993 года.",
  "Kto w co wierzy": "Кто во что верит",
  "Zdecydowana większość mieszkańców deklaruje wyznanie **rzymskokatolickie**, choć udział praktykujących od lat maleje, zwłaszcza w miastach i wśród młodych. Obecne są też **prawosławie** — najliczniej na Podlasiu — oraz protestantyzm, judaizm i islam, ten ostatni między innymi wśród **Tatarów polskich**, osiadłych tu od stuleci.":
    "Подавляющее большинство жителей называет себя **римско-католического** исповедания, хотя доля тех, кто ходит в церковь, годами убывает, особенно в городах и среди молодых. Есть и **православие** — гуще всего на Подлясье — а также протестантизм, иудаизм и ислам, последний в том числе среди **польских татар**, осевших здесь столетия назад.",
  "Jan Paweł II": "Иоанн Павел II",
  "Wybór **Karola Wojtyły** na papieża w **1978 roku** i jego pielgrzymki do kraju miały znaczenie wykraczające poza religię: dla wielu badaczy są jednym z warunków tego, co wydarzyło się w 1980 roku.":
    "Избрание **Кароля Войтылы** папой в **1978 году** и его поездки на родину значили больше, чем дело веры: для многих исследователей это одно из условий того, что произошло в 1980 году.",
  "Religia w szkole publicznej jest **nieobowiązkowa**. Rodzice albo pełnoletni uczniowie decydują, czy dziecko chodzi na religię, na etykę, czy na żadne z nich.":
    "Уроки религии в публичной школе **необязательны**. Родители или совершеннолетние ученики решают, ходит ли ребёнок на религию, на этику или ни на то, ни на другое.",
  "Jaki jest stosunek państwa polskiego do wyznań według Konstytucji?":
    "Каково по Конституции отношение польского государства к вероисповеданиям?",
  "Katolicyzm jest religią państwową": "Католичество — государственная религия",
  "Państwo jest bezstronne w sprawach przekonań religijnych":
    "Государство беспристрастно в делах религиозных убеждений",
  "Wyznawanie religii jest zakazane": "Исповедовать религию запрещено",
  "Religię wybiera wojewoda": "Религию выбирает воевода",
  "Państwo jest bezstronne, a każdemu przysługuje wolność sumienia i wyznania. Religii państwowej nie ma.":
    "Государство беспристрастно, а каждому принадлежит свобода совести и вероисповедания. Государственной религии нет.",
  "Miejsca pielgrzymek": "Места паломничества",
  "Najważniejszym jest **Jasna Góra** w Częstochowie z obrazem Matki Boskiej Częstochowskiej. Sierpniowe piesze pielgrzymki idą tam z całego kraju, niektóre po kilkanaście dni.":
    "Важнейшее — **Ясная Гура** в Ченстохове с образом Ченстоховской Божией Матери. Августовские пешие паломничества идут туда со всей страны, иные по две недели.",
  "Mniejszości wyznaniowe": "Религиозные меньшинства",
  "Prawosławni najliczniej mieszkają na **Podlasiu**, ewangelicy na **Śląsku Cieszyńskim**. Meczety Tatarów polskich w **Kruszynianach** i **Bohonikach** stoją tam od stuleci.":
    "Православные гуще всего живут на **Подлясье**, евангелики в **Тешинской Силезии**. Мечети польских татар в **Крушинянах** и **Бохониках** стоят там столетиями.",
  "Gdzie znajduje się najważniejsze sanktuarium pielgrzymkowe w Polsce?":
    "Где находится главное место паломничества Польши?",
  "W Krakowie": "В Кракове",
  "W Częstochowie": "В Ченстохове",
  "W Gnieźnie": "В Гнезно",
  "W Licheniu": "В Лихене",
  "Jasna Góra w Częstochowie. Gniezno jest siedzibą prymasa, ale nie głównym miejscem pielgrzymek.":
    "Ясная Гура в Ченстохове. Гнезно — местопребывание примаса, но не главное место паломничества.",
  "Święta i kalendarz": "Праздники и календарь",
  "Trzy daty wracają najczęściej i najłatwiej je pomylić: 3 maja, 11 listopada i 1 sierpnia. Pierwsza to konstytucja, druga niepodległość, trzecia powstanie.":
    "Три даты возвращаются чаще всего, и спутать их легче всего: 3 мая, 11 ноября и 1 августа. Первая — конституция, вторая — независимость, третья — восстание.",
  "Święta państwowe": "Государственные праздники",
  "3 maja": "3 мая",
  "Święto Konstytucji 3 Maja — rocznica ustawy z 1791 roku. Dzień wolny od pracy.":
    "Праздник Конституции 3 мая — годовщина закона 1791 года. Нерабочий день.",
  "11 listopada": "11 ноября",
  "Narodowe Święto Niepodległości — rocznica roku 1918. Dzień wolny od pracy.":
    "Национальный праздник независимости — годовщина 1918 года. Нерабочий день.",
  "1 sierpnia": "1 августа",
  "Godzina „W”: o 17.00 syreny w Warszawie upamiętniają Powstanie Warszawskie. Dniem wolnym nie jest.":
    "Час «W»: в 17.00 сирены в Варшаве напоминают о Варшавском восстании. Выходным этот день не является.",
  "Święta kościelne wolne od pracy": "Церковные праздники, свободные от работы",
  "Wolne są między innymi **Wielkanoc** z poniedziałkiem wielkanocnym, **Boże Ciało**, **15 sierpnia** (Wniebowzięcie, zarazem Święto Wojska Polskiego), **1 listopada** (Wszystkich Świętych) oraz **25 i 26 grudnia**.":
    "Свободны, среди прочих, **Пасха** с пасхальным понедельником, **праздник Тела Господня**, **15 августа** (Успение, оно же День Войска Польского), **1 ноября** (День всех святых), а также **25 и 26 декабря**.",
  "Zwyczaje": "Обычаи",
  "Wigilia": "Сочельник",
  "24 grudnia: dwanaście potraw, opłatek, wolne miejsce przy stole, kolacja po pierwszej gwiazdce.":
    "24 декабря: двенадцать блюд, облатка, свободное место за столом, ужин после первой звезды.",
  "Śmigus-dyngus": "Śmigus-dyngus",
  "Poniedziałek wielkanocny, gdy polewa się wodą — zwyczaj starszy niż chrześcijaństwo.":
    "Пасхальный понедельник, когда обливают водой, — обычай старше христианства.",
  "Andrzejki": "Андреевки",
  "Wieczór 29 listopada, wróżby z wosku lanego przez ucho od klucza.":
    "Вечер 29 ноября, гадания на воске, льющемся через ушко ключа.",
  "Imieniny": "Именины",
  "Bywają obchodzone chętniej niż urodziny, zwłaszcza przez starsze pokolenia.":
    "Их отмечают охотнее, чем день рождения, особенно старшие поколения.",
  "Co upamiętnia święto 3 maja?": "О чём напоминает праздник 3 мая?",
  "Odzyskanie niepodległości": "О возвращении независимости",
  "Uchwalenie Konstytucji 3 maja 1791 roku": "О принятии Конституции 3 мая 1791 года",
  "Wybuch Powstania Warszawskiego": "О начале Варшавского восстания",
  "Wejście do Unii Europejskiej": "О вступлении в Европейский союз",
  "Konstytucję z 1791 roku. Niepodległość to 11 listopada, Powstanie Warszawskie to 1 sierpnia.":
    "О Конституции 1791 года. Независимость — это 11 ноября, Варшавское восстание — 1 августа.",
  "Wszystkich Świętych": "День всех святых",
  "**1 listopada** miliony ludzi jadą na groby bliskich i stawiają znicze. Cmentarze świecą wtedy przez całą noc — to jeden z najbardziej rozpoznawalnych obrazów polskiego roku.":
    "**1 ноября** миллионы людей едут на могилы близких и ставят лампадки. Кладбища светятся тогда всю ночь — это один из самых узнаваемых образов польского года.",
  "Rok szkolny i wakacje": "Учебный год и каникулы",
  "Rok szkolny zaczyna się **1 września** i kończy w drugiej połowie czerwca. Wakacje trwają lipiec i sierpień, ferie zimowe dwa tygodnie, w różnych terminach zależnie od województwa.":
    "Учебный год начинается **1 сентября** и кончается во второй половине июня. Летние каникулы длятся июль и август, зимние — две недели, в разные сроки, смотря по воеводству.",
  "Co upamiętnia 11 listopada?": "О чём напоминает 11 ноября?",
  "Uchwalenie Konstytucji": "О принятии Конституции",
  "Odzyskanie niepodległości w 1918 roku": "О возвращении независимости в 1918 году",
  "Wejście do NATO": "О вступлении в НАТО",
  "Odzyskanie niepodległości. Konstytucja to 3 maja, Powstanie Warszawskie 1 sierpnia.":
    "О возвращении независимости. Конституция — это 3 мая, Варшавское восстание — 1 августа.",
  "Edukacja i zdrowie": "Образование и здоровье",
  "Droga przez szkołę": "Путь через школу",
  "Dzieci zaczynają od **rocznego przygotowania przedszkolnego** w wieku sześciu lat, potem idzie **ośmioletnia szkoła podstawowa**. Kończy ją **egzamin ósmoklasisty**. Dalej wybiera się **liceum** (4 lata), **technikum** (5 lat) albo **szkołę branżową**.":
    "Дети начинают с **годичной дошкольной подготовки** в шесть лет, потом идёт **восьмилетняя начальная школа**. Завершает её **экзамен восьмиклассника**. Дальше выбирают **лицей** (4 года), **техникум** (5 лет) или **отраслевую школу**.",
  "Matura i studia": "Матура и учёба в вузе",
  "**Matura** otwiera drogę na studia; wyniki decydują o przyjęciu na uczelnię. Studia dzielą się na **licencjackie**, **magisterskie** i **doktoranckie**. Studia dzienne na uczelniach publicznych są **bezpłatne**.":
    "**Матура** открывает дорогу в вуз; её итоги решают вопрос о приёме. Учёба делится на **бакалаврскую**, **магистерскую** и **докторскую**. Дневная учёба в публичных вузах **бесплатна**.",
  "Ochrona zdrowia": "Охрана здоровья",
  "NFZ": "NFZ",
  "Narodowy Fundusz Zdrowia finansuje leczenie ze składek. Ubezpieczony leczy się bezpłatnie.":
    "Национальный фонд здоровья оплачивает лечение из взносов. Застрахованный лечится бесплатно.",
  "Lekarz rodzinny": "Семейный врач",
  "Pierwszy kontakt; kieruje do specjalisty i prowadzi dokumentację.":
    "Первый, к кому идут; он направляет к специалисту и ведёт записи.",
  "Numer 112": "Номер 112",
  "Jeden numer alarmowy do pogotowia, straży i policji, w całej Unii Europejskiej.":
    "Один тревожный номер для скорой, пожарных и полиции, во всём Европейском союзе.",
  "PESEL": "PESEL",
  "Jedenastocyfrowy numer identyfikacyjny; potrzebny u lekarza, w urzędzie i w banku.":
    "Одиннадцатизначный опознавательный номер; нужен у врача, в учреждении и в банке.",
  "Numer **PESEL** zawiera datę urodzenia i płeć: przedostatnia cyfra parzysta oznacza kobietę, nieparzysta mężczyznę.":
    "Номер **PESEL** содержит дату рождения и пол: чётная предпоследняя цифра означает женщину, нечётная — мужчину.",
  "Ile lat trwa w Polsce szkoła podstawowa?": "Сколько лет длится в Польше начальная школа?",
  "8 lat": "8 лет",
  "9 lat": "9 лет",
  "12 lat": "12 лет",
  "Osiem lat, zakończone egzaminem ósmoklasisty. Liceum trwa cztery lata, technikum pięć.":
    "Восемь лет, с экзаменом восьмиклассника в конце. Лицей длится четыре года, техникум пять.",
  "Uczelnie": "Вузы",
  "Najstarszą uczelnią jest **Uniwersytet Jagielloński** (1364), największą **Uniwersytet Warszawski**. Obok uniwersytetów działają politechniki, uczelnie medyczne, ekonomiczne i artystyczne, a także szkoły prywatne.":
    "Старейший вуз — **Ягеллонский университет** (1364), самый большой — **Варшавский университет**. Рядом с университетами работают политехнические, медицинские, экономические и художественные вузы, а также частные школы.",
  "Apteki i leki": "Аптеки и лекарства",
  "Leki na receptę wydaje apteka po okazaniu **e-recepty** — kodu przychodzącego SMS-em albo widocznego w aplikacji. Część leków jest refundowana, czyli tańsza dzięki dopłacie NFZ.":
    "Лекарства по рецепту аптека выдаёт по предъявлении **электронного рецепта** — кода, приходящего в SMS или видного в приложении. Часть лекарств возмещается, то есть дешевле благодаря доплате NFZ.",
  "Jaki jest numer alarmowy obowiązujący w Polsce i całej Unii Europejskiej?":
    "Какой тревожный номер действует в Польше и во всём Европейском союзе?",
  "997": "997",
  "998": "998",
  "112": "112",
  "999": "999",
  "112. Dawne numery 997, 998 i 999 nadal działają, ale 112 łączy ze wszystkimi służbami.":
    "112. Прежние номера 997, 998 и 999 работают и дальше, но 112 соединяет со всеми службами.",
  "Codzienność, media i kultura": "Повседневность, средства печати и культура",
  "Załatwianie spraw": "Как улаживают дела",
  "Sprawy urzędowe załatwia się w **urzędzie gminy** albo **miasta**, a coraz częściej przez internet: **profil zaufany** i aplikacja **mObywatel** zastępują wizytę i papierowy dowód. Meldunek zgłasza się w urzędzie miejsca zamieszkania.":
    "Дела с учреждениями улаживают в **управлении гмины** или **города**, а всё чаще через интернет: **profil zaufany** и приложение **mObywatel** заменяют и визит, и бумажное удостоверение. О месте жительства заявляют в управлении по месту проживания.",
  "Życie codzienne": "Повседневная жизнь",
  "Zakupy w niedziele": "Покупки по воскресеньям",
  "Handel w niedziele jest ograniczony ustawą; otwarte pozostają między innymi piekarnie, stacje paliw i sklepy prowadzone przez właściciela.":
    "Торговля по воскресеньям ограничена законом; открытыми остаются, среди прочих, пекарни, заправки и лавки, которые держит сам хозяин.",
  "Transport": "Транспорт",
  "PKP prowadzi koleje dalekobieżne, w miastach jeżdżą tramwaje i autobusy, bilet kasuje się przy wejściu.":
    "PKP ведёт дальние поезда, в городах ходят трамваи и автобусы, билет пробивают при входе.",
  "Kuchnia": "Кухня",
  "Pierogi, bigos, żurek, rosół, kotlet schabowy; obiad bywa jedzony wcześniej niż w Europie Zachodniej.":
    "Вареники pierogi, бигос, журек, бульон, отбивная из свинины; обедают часто раньше, чем в Западной Европе.",
  "Powitanie": "Приветствие",
  "„Dzień dobry” do wszystkich, „cześć” do znajomych. Do osoby starszej mówi się „pan” albo „pani”.":
    "«Dzień dobry» всем, «cześć» знакомым. К человеку постарше обращаются «pan» или «pani».",
  "Media": "Средства печати и вещания",
  "Działają media **publiczne** — Telewizja Polska i Polskie Radio, finansowane z abonamentu i budżetu — oraz liczne prywatne stacje, gazety i portale. Nad rynkiem czuwa **Krajowa Rada Radiofonii i Telewizji**, wymieniona w Konstytucji.":
    "Работают **публичные** средства вещания — Польское телевидение и Польское радио, живущие на абонентскую плату и бюджет, — а также множество частных станций, газет и сайтов. За рынком следит **Всепольский совет радиовещания и телевидения**, названный в Конституции.",
  "Kultura": "Культура",
  "Polska ma pięcioro noblistów literackich: **Sienkiewicza**, **Reymonta**, **Miłosza**, **Szymborską** i **Tokarczuk**. W muzyce najbardziej znany jest **Chopin**, któremu poświęcony jest konkurs pianistyczny odbywający się w Warszawie co pięć lat.":
    "У Польши пять литературных нобелевских лауреатов: **Сенкевич**, **Реймонт**, **Милош**, **Шимборская** и **Токарчук**. В музыке самый известный — **Шопен**, которому посвящён конкурс пианистов, проходящий в Варшаве раз в пять лет.",
  "Jak nazywa się aplikacja, w której można nosić dokumenty w telefonie?":
    "Как называется приложение, в котором документы носят в телефоне?",
  "ePUAP": "ePUAP",
  "mObywatel": "mObywatel",
  "mBank": "mBank",
  "mObywatel. PESEL to numer identyfikacyjny, a nie aplikacja.":
    "mObywatel. PESEL — это опознавательный номер, а не приложение.",
  "Mieszkanie": "Жильё",
  "Większość ludzi mieszka **we własnym** mieszkaniu lub domu — udział własności jest jednym z najwyższych w Europie. Przy najmie podpisuje się umowę i zwykle wpłaca kaucję; opłaty za wodę i ogrzewanie często idą osobno, do wspólnoty albo spółdzielni.":
    "Большинство людей живёт **в своей** квартире или своём доме — доля собственности одна из самых высоких в Европе. При найме подписывают договор и обычно вносят залог; плата за воду и отопление часто идёт отдельно, в товарищество жильцов или в кооператив.",
  "Sport": "Спорт",
  "Najpopularniejsze są **piłka nożna** i **siatkówka**; reprezentacja siatkarzy należy do najlepszych na świecie. Zimą kraj ogląda **skoki narciarskie**, a raz w roku ulicami miast biegną tysiące uczestników maratonów.":
    "Самые любимые — **футбол** и **волейбол**; сборная волейболистов входит в число лучших в мире. Зимой страна смотрит **прыжки с трамплина**, а раз в год по улицам городов бегут тысячи участников марафонов.",
  "Ile osób z Polski otrzymało literacką Nagrodę Nobla?":
    "Сколько человек из Польши получили литературную Нобелевскую премию?",
  "Dwie": "Двое",
  "Trzy": "Трое",
  "Pięć": "Пятеро",
  "Siedem": "Семеро",
  "Pięć: Sienkiewicz, Reymont, Miłosz, Szymborska i Tokarczuk.":
    "Пятеро: Сенкевич, Реймонт, Милош, Шимборская и Токарчук.",
};
