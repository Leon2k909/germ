/**
 * German for the Życie w Polsce course cards, headings and questions.
 *
 * Keyed on the POLISH source text exactly as it appears in
 * zycieWPolsceCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but check-pl-translations fails
 * on a key that matches nothing in the course, because a typo there is silent
 * otherwise: the card renders, the tap works, and the reader is told there is
 * no translation for a card that was in fact translated.
 *
 * Like the Russian table and unlike the three older ones, this covers the
 * QUIZZES as well. A lesson that ends in three untranslated questions is not
 * a lesson somebody can finish.
 *
 * WHAT STAYS POLISH. Names of institutions in their German conventional form
 * where one exists — Sejm and Senat keep their names, the Rada Ministrów is
 * the Ministerrat, the Trybunał Konstytucyjny the Verfassungsgerichtshof.
 * Where a word is the answer itself and has no German equivalent — PESEL,
 * województwo, gmina, PKW — the German gives the meaning and keeps the Polish
 * word beside it, so the reader learns the term they will actually meet.
 */
export const ZYCIE_W_POLSCE_DE: Record<string, string> = {
  // ── Course line, chapters and lesson titles ─────────────────────────────
  // The course NAME is absent on purpose: it is an interface string and
  // already goes through the i18n tables, so a second translation of it here
  // would fight the first.
  "Historia, ustrój i codzienność — jak działa ten kraj.":
    "Geschichte, Staatsaufbau und Alltag — wie dieses Land funktioniert.",

  "Symbole i wartości Rzeczypospolitej": "Symbole und Werte der Republik",
  "Ustrój i instytucje": "Staatsaufbau und Institutionen",
  "Historia Polski": "Geschichte Polens",
  "Geografia, gospodarka i Polska w świecie": "Geografie, Wirtschaft und Polen in der Welt",
  "Społeczeństwo i życie codzienne": "Gesellschaft und Alltag",

  "Symbole narodowe": "Nationale Symbole",
  "Konstytucja i wartości ustrojowe": "Verfassung und Grundwerte",
  "Prawa i wolności": "Rechte und Freiheiten",
  "Obowiązki obywatela": "Pflichten der Bürgerinnen und Bürger",

  "Sejm i Senat": "Sejm und Senat",
  "Prezydent": "Der Präsident",
  "Rada Ministrów": "Der Ministerrat",
  "Sądy i Trybunały": "Gerichte und Tribunale",
  "Samorząd terytorialny": "Kommunale Selbstverwaltung",

  "Od Mieszka I do Rzeczypospolitej Obojga Narodów":
    "Von Mieszko I. bis zur Adelsrepublik beider Nationen",
  "Rozbiory i walka o niepodległość": "Die Teilungen und der Kampf um die Unabhängigkeit",
  "II Rzeczpospolita": "Die Zweite Republik",
  "II wojna światowa i okupacja": "Der Zweite Weltkrieg und die Besatzung",
  "PRL i Solidarność": "Die Volksrepublik und die Solidarność",
  "1989 i III Rzeczpospolita": "1989 und die Dritte Republik",

  "Geografia i regiony": "Geografie und Regionen",
  "Podział administracyjny i miasta": "Verwaltungsgliederung und Städte",
  "Gospodarka i praca": "Wirtschaft und Arbeit",
  "Polska w Unii Europejskiej i NATO": "Polen in der Europäischen Union und in der NATO",

  "Religia i tradycje": "Religion und Bräuche",
  "Święta i kalendarz": "Feiertage und Kalender",
  "Edukacja i zdrowie": "Bildung und Gesundheit",
  "Codzienność, media i kultura": "Alltag, Medien und Kultur",
  // pl-symbole
  "Dlaczego od tego zaczynamy: symbole widuje się codziennie — na urzędzie, na paszporcie, na koszulce reprezentacji — więc są najłatwiejszym wejściem w resztę.":
    "Warum wir hier anfangen: Symbole sieht man täglich — am Amt, im Pass, auf dem Trikot der Nationalmannschaft — und sie sind deshalb der leichteste Einstieg in alles Übrige.",
  "Godło": "Das Wappen",
  "Godłem Polski jest **orzeł biały** w złotej koronie, ze złotym dziobem i szponami, na **czerwonym** tle. Opisuje go **artykuł 28 Konstytucji**. Korona wróciła na głowę orła w **1990 roku**; w czasach PRL orzeł jej nie miał.":
    "Das Wappen Polens ist der **weiße Adler** mit goldener Krone, goldenem Schnabel und goldenen Fängen auf **rotem** Grund. Beschrieben wird er in **Artikel 28 der Verfassung**. Die Krone kehrte **1990** auf den Kopf des Adlers zurück; in der Volksrepublik trug er keine.",
  "Flaga i barwy": "Flagge und Farben",
  "Flaga ma dwa poziome pasy: **biały u góry, czerwony u dołu**. Kolejność nie jest dowolna — biel jest zawsze nad czerwienią. **2 maja** obchodzi się Dzień Flagi Rzeczypospolitej Polskiej.":
    "Die Flagge hat zwei waagerechte Streifen: **weiß oben, rot unten**. Die Reihenfolge ist nicht beliebig — Weiß steht immer über Rot. Am **2. Mai** wird der Tag der Flagge der Republik Polen begangen.",
  "Hymn": "Die Hymne",
  "Mazurek Dąbrowskiego": "Der Dąbrowski-Marsch",
  "Hymn państwowy, powstały w 1797 roku we Włoszech, w Legionach Polskich. Słowa napisał Józef Wybicki.":
    "Die Staatshymne, entstanden 1797 in Italien, bei den Polnischen Legionen. Den Text schrieb Józef Wybicki.",
  "Pierwsze słowa": "Die ersten Worte",
  "„Jeszcze Polska nie zginęła, kiedy my żyjemy” — zdanie napisane wtedy, gdy państwa polskiego na mapie nie było.":
    "„Noch ist Polen nicht verloren, solange wir leben“ — ein Satz, geschrieben zu einer Zeit, als es einen polnischen Staat auf der Karte nicht gab.",
  "Który kolor znajduje się na fladze Polski u góry?": "Welche Farbe liegt auf der Flagge Polens oben?",
  "Czerwony": "Rot",
  "Biały": "Weiß",
  "Kolejność jest dowolna": "Die Reihenfolge ist beliebig",
  "Złoty": "Gold",
  "Biały pas jest zawsze na górze, czerwony na dole. Odwrócona flaga to flaga Indonezji lub Monako.":
    "Der weiße Streifen liegt immer oben, der rote unten. Umgekehrt ist es die Flagge Indonesiens oder Monacos.",
  "Barwy i ich użycie": "Die Farben und ihr Gebrauch",
  "Flagi używa się w dni świąt państwowych, na budynkach urzędów i podczas uroczystości. Wersję z **godłem** na białym pasie stosują polskie statki i placówki dyplomatyczne — nie wywiesza się jej na balkonie.":
    "Die Flagge wird an staatlichen Feiertagen, an Amtsgebäuden und bei Feierlichkeiten gezeigt. Die Fassung mit dem **Wappen** im weißen Streifen führen polnische Schiffe und diplomatische Vertretungen — auf den Balkon gehört sie nicht.",
  "Skąd wzięły się barwy": "Woher die Farben kommen",
  "Biel od orła, czerwień od pola herbowego. Ustalono je oficjalnie **7 lutego 1831 roku**, w czasie powstania listopadowego — barwy narodowe są więc młodsze niż sam herb o kilkaset lat.":
    "Das Weiß vom Adler, das Rot vom Wappenfeld. Amtlich festgelegt wurden sie am **7. Februar 1831**, während des Novemberaufstands — die Nationalfarben sind also um mehrere Jahrhunderte jünger als das Wappen selbst.",
  "Kto napisał słowa hymnu Polski?": "Wer schrieb den Text der polnischen Hymne?",
  "Adam Mickiewicz": "Adam Mickiewicz",
  "Józef Wybicki": "Józef Wybicki",
  "Fryderyk Chopin": "Fryderyk Chopin",
  "Juliusz Słowacki": "Juliusz Słowacki",
  "Józef Wybicki, w 1797 roku we Włoszech. Mickiewicz i Słowacki to poeci romantyczni, Chopin kompozytor.":
    "Józef Wybicki, 1797 in Italien. Mickiewicz und Słowacki sind Dichter der Romantik, Chopin ist Komponist.",
  // pl-konstytucja
  "Konstytucja z 1997 roku": "Die Verfassung von 1997",
  "Obowiązująca **Konstytucja Rzeczypospolitej Polskiej** została uchwalona **2 kwietnia 1997 roku** i przyjęta w referendum. Jest najwyższym prawem w państwie: żadna ustawa nie może być z nią sprzeczna.":
    "Die geltende **Verfassung der Republik Polen** wurde am **2. April 1997** beschlossen und in einem Referendum angenommen. Sie ist das höchste Recht im Staat: kein Gesetz darf ihr widersprechen.",
  "Zasady ustrojowe": "Die Grundsätze der Staatsordnung",
  "Republika": "Republik",
  "Polska jest republiką — głowę państwa się wybiera, a nie dziedziczy.":
    "Polen ist eine Republik — das Staatsoberhaupt wird gewählt, nicht vererbt.",
  "Państwo prawa": "Rechtsstaat",
  "Organy władzy działają na podstawie i w granicach prawa, nie poza nim.":
    "Die Staatsorgane handeln auf der Grundlage und in den Grenzen des Rechts, nicht außerhalb davon.",
  "Podział władz": "Gewaltenteilung",
  "Ustawodawcza, wykonawcza i sądownicza są rozdzielone i wzajemnie się równoważą.":
    "Gesetzgebung, Verwaltung und Rechtsprechung sind getrennt und halten einander im Gleichgewicht.",
  "Konstytucja to nie zbiór życzeń: sprzeczną z nią ustawę może uchylić **Trybunał Konstytucyjny**.":
    "Die Verfassung ist keine Wunschliste: ein Gesetz, das ihr widerspricht, kann der **Verfassungsgerichtshof** aufheben.",
  "W którym roku uchwalono obowiązującą Konstytucję RP?":
    "In welchem Jahr wurde die geltende Verfassung Polens beschlossen?",
  "1989": "1989",
  "1997": "1997",
  "2004": "2004",
  "1952": "1952",
  "2 kwietnia 1997 roku, potwierdzona w referendum. 1989 to rok wyborów czerwcowych, 2004 to wejście do Unii Europejskiej.":
    "Am 2. April 1997, bestätigt im Referendum. 1989 ist das Jahr der Juniwahlen, 2004 der Beitritt zur Europäischen Union.",
  "Jak zmienić Konstytucję": "Wie die Verfassung geändert wird",
  "Zmiana wymaga większości **2/3** w Sejmie i bezwzględnej w Senacie. Jeśli dotyczy rozdziałów o ustroju, wolnościach albo o samej procedurze zmiany, można zażądać jeszcze **referendum**.":
    "Eine Änderung verlangt eine Mehrheit von **zwei Dritteln** im Sejm und die absolute Mehrheit im Senat. Betrifft sie die Kapitel über die Staatsordnung, die Freiheiten oder das Änderungsverfahren selbst, kann zusätzlich ein **Referendum** verlangt werden.",
  "Poprzednie konstytucje": "Die früheren Verfassungen",
  "3 maja 1791": "3. Mai 1791",
  "Pierwsza w Europie, obowiązywała czternaście miesięcy.":
    "Die erste in Europa, in Kraft für vierzehn Monate.",
  "Marcowa 1921": "Die Märzverfassung 1921",
  "Republika parlamentarna II Rzeczypospolitej.": "Die parlamentarische Republik der Zweiten Republik.",
  "Kwietniowa 1935": "Die Aprilverfassung 1935",
  "Wzmocniła prezydenta kosztem parlamentu.": "Stärkte den Präsidenten auf Kosten des Parlaments.",
  "Z 1952": "Die von 1952",
  "Konstytucja PRL, zmieniana wielokrotnie, obowiązywała do 1997 roku.":
    "Die Verfassung der Volksrepublik, vielfach geändert, in Kraft bis 1997.",
  "Jakiej większości w Sejmie wymaga zmiana Konstytucji?":
    "Welche Mehrheit im Sejm verlangt eine Verfassungsänderung?",
  "Zwykłej": "Die einfache",
  "Bezwzględnej": "Die absolute",
  "Dwóch trzecich": "Zwei Drittel",
  "Jednomyślności": "Einstimmigkeit",
  "Dwóch trzecich w Sejmie i bezwzględnej w Senacie — próg wyraźnie wyższy niż przy zwykłej ustawie.":
    "Zwei Drittel im Sejm und die absolute Mehrheit im Senat — eine deutlich höhere Schwelle als bei einem gewöhnlichen Gesetz.",
  // pl-prawa
  "Rozdział II Konstytucji jest najdłuższy w całym dokumencie. To nie przypadek: państwo, które przez pół wieku ograniczało wolności, spisało je potem wyjątkowo dokładnie.":
    "Das zweite Kapitel der Verfassung ist das längste des ganzen Dokuments. Das ist kein Zufall: ein Staat, der die Freiheiten ein halbes Jahrhundert lang beschnitten hat, hat sie danach besonders genau aufgeschrieben.",
  "Wolności osobiste": "Persönliche Freiheiten",
  "Każdemu przysługuje **prawo do życia**, **nietykalność osobista** i **wolność sumienia**. Nikogo nie wolno zatrzymać bez podstawy prawnej, a zatrzymanego trzeba w ciągu **48 godzin** przekazać sądowi — inaczej musi zostać zwolniony.":
    "Jedem stehen das **Recht auf Leben**, die **körperliche Unversehrtheit** und die **Gewissensfreiheit** zu. Niemand darf ohne Rechtsgrundlage festgenommen werden, und wer festgenommen ist, muss binnen **48 Stunden** einem Gericht vorgeführt werden — sonst ist er freizulassen.",
  "Obowiązuje **domniemanie niewinności**: dopóki sąd nie orzeknie prawomocnie, człowiek jest niewinny. Kara może spotkać tylko za czyn, który był zabroniony **w chwili popełnienia**.":
    "Es gilt die **Unschuldsvermutung**: solange kein Gericht rechtskräftig entschieden hat, ist ein Mensch unschuldig. Bestraft werden kann nur, was **zum Zeitpunkt der Tat** verboten war.",
  "Wolności polityczne": "Politische Freiheiten",
  "Wolność słowa": "Meinungsfreiheit",
  "Wolno wyrażać poglądy i rozpowszechniać informacje. Cenzura prewencyjna jest zakazana.":
    "Ansichten dürfen geäußert und Informationen verbreitet werden. Eine Vorzensur ist verboten.",
  "Zgromadzenia": "Versammlungen",
  "Wolno organizować pokojowe zgromadzenia i w nich uczestniczyć.":
    "Friedliche Versammlungen dürfen veranstaltet und besucht werden.",
  "Zrzeszanie się": "Vereinigungsfreiheit",
  "Wolno tworzyć partie, związki zawodowe i stowarzyszenia.":
    "Parteien, Gewerkschaften und Vereine dürfen gegründet werden.",
  "Petycje": "Petitionen",
  "Każdy może kierować wnioski i skargi do organów władzy publicznej.":
    "Jeder darf Anträge und Beschwerden an die Organe der öffentlichen Gewalt richten.",
  "Prawa socjalne": "Soziale Rechte",
  "Konstytucja mówi też o **prawie do nauki** — obowiązkowej i bezpłatnej w szkołach publicznych do 18. roku życia — o **ochronie zdrowia** i o **prawie do zabezpieczenia społecznego** na starość, w chorobie i przy bezrobociu.":
    "Die Verfassung spricht auch vom **Recht auf Bildung** — verpflichtend und in öffentlichen Schulen unentgeltlich bis zum 18. Lebensjahr —, vom **Gesundheitsschutz** und vom **Recht auf soziale Sicherung** im Alter, bei Krankheit und bei Arbeitslosigkeit.",
  "Kto broni tych praw": "Wer diese Rechte verteidigt",
  "**Rzecznik Praw Obywatelskich** stoi na straży wolności i praw człowieka. Można się do niego zwrócić bezpłatnie, także pisemnie. Osobno działa **Rzecznik Praw Dziecka**.":
    "Der **Bürgerrechtsbeauftragte** wacht über die Freiheiten und Menschenrechte. An ihn kann man sich unentgeltlich wenden, auch schriftlich. Daneben arbeitet ein eigener **Kinderrechtsbeauftragter**.",
  "Wolności nie są nieograniczone. Ograniczyć je może tylko **ustawa** i tylko wtedy, gdy jest to konieczne dla bezpieczeństwa, porządku publicznego, zdrowia albo wolności innych osób. Nigdy nie wolno naruszyć **istoty** danej wolności.":
    "Die Freiheiten sind nicht schrankenlos. Einschränken darf sie nur ein **Gesetz** und nur dann, wenn das für die Sicherheit, die öffentliche Ordnung, die Gesundheit oder die Freiheit anderer nötig ist. Der **Wesensgehalt** einer Freiheit darf nie angetastet werden.",
  "W ciągu ilu godzin zatrzymany musi zostać przekazany sądowi?":
    "Binnen wie vielen Stunden muss eine festgenommene Person einem Gericht vorgeführt werden?",
  "24 godzin": "Binnen 24 Stunden",
  "48 godzin": "Binnen 48 Stunden",
  "72 godzin": "Binnen 72 Stunden",
  "Nie ma takiego terminu": "Eine solche Frist gibt es nicht",
  "48 godzin. Sąd ma potem 24 godziny na decyzję o tymczasowym aresztowaniu — razem najwyżej 72.":
    "48 Stunden. Das Gericht hat danach 24 Stunden für die Entscheidung über die Untersuchungshaft — zusammen höchstens 72.",
  "Skarga konstytucyjna": "Die Verfassungsbeschwerde",
  "Kto uważa, że jego wolność naruszył **przepis**, a nie sam wyrok, może po wyczerpaniu drogi sądowej złożyć **skargę konstytucyjną** do Trybunału Konstytucyjnego. Skargę sporządza adwokat albo radca prawny.":
    "Wer meint, seine Freiheit sei durch eine **Vorschrift** verletzt worden und nicht durch das Urteil selbst, kann nach Erschöpfung des Rechtswegs eine **Verfassungsbeschwerde** beim Verfassungsgerichtshof einlegen. Verfasst wird sie von einer Rechtsanwältin oder einem Rechtsberater.",
  "Ochrona danych": "Datenschutz",
  "Od 2018 roku obowiązuje europejskie rozporządzenie **RODO**. Każdy ma prawo wiedzieć, jakie dane o nim zebrano, żądać ich poprawienia i — w wielu wypadkach — usunięcia. Nadzoruje to **Prezes Urzędu Ochrony Danych Osobowych**.":
    "Seit 2018 gilt die europäische **Datenschutz-Grundverordnung**. Jeder hat das Recht zu erfahren, welche Daten über ihn gesammelt wurden, ihre Berichtigung zu verlangen und — in vielen Fällen — ihre Löschung. Darüber wacht der **Präsident des Amtes für den Schutz personenbezogener Daten**.",
  "Do kogo można się zwrócić bezpłatnie, gdy urząd narusza prawa obywatela?":
    "An wen kann man sich unentgeltlich wenden, wenn eine Behörde Bürgerrechte verletzt?",
  "Do Rzecznika Praw Obywatelskich": "An den Bürgerrechtsbeauftragten",
  "Do wojewody": "An den Woiwoden",
  "Do Prezydenta": "An den Präsidenten",
  "Do Najwyższej Izby Kontroli": "An die Oberste Kontrollkammer",
  "Rzecznik Praw Obywatelskich stoi na straży wolności i praw; wniosek jest wolny od opłat.":
    "Der Bürgerrechtsbeauftragte wacht über die Freiheiten und Rechte; der Antrag ist gebührenfrei.",
  // pl-obowiazki
  "Wierność i troska o dobro wspólne": "Treue und Sorge um das Gemeinwohl",
  "Konstytucja wymienia obowiązki krótko, w kilku artykułach. Pierwszy z nich to **wierność Rzeczypospolitej** i troska o **dobro wspólne** — sformułowanie ogólne, ale to z niego wynikają pozostałe.":
    "Die Verfassung zählt die Pflichten kurz auf, in wenigen Artikeln. Die erste ist die **Treue zur Republik** und die Sorge um das **Gemeinwohl** — allgemein formuliert, aber aus ihr folgen die übrigen.",
  "Obowiązki konkretne": "Die einzelnen Pflichten",
  "Przestrzeganie prawa": "Das Recht befolgen",
  "Obowiązuje każdego, kto znajduje się pod władzą Rzeczypospolitej — także cudzoziemca.":
    "Gilt für jeden, der sich unter der Hoheit der Republik befindet — auch für Ausländer.",
  "Ciężary publiczne": "Öffentliche Lasten",
  "Podatki i inne świadczenia nakłada wyłącznie ustawa, nie rozporządzenie.":
    "Steuern und andere Abgaben legt ausschließlich ein Gesetz fest, keine Verordnung.",
  "Obrona ojczyzny": "Verteidigung des Vaterlandes",
  "Obowiązek obywateli polskich. Kto ze względu na przekonania nie może pełnić służby wojskowej, może zostać skierowany do służby zastępczej.":
    "Eine Pflicht der polnischen Staatsangehörigen. Wer aus Überzeugung keinen Wehrdienst leisten kann, kann einem Ersatzdienst zugewiesen werden.",
  "Dbałość o środowisko": "Sorge um die Umwelt",
  "Kto pogarsza stan środowiska, odpowiada za to.":
    "Wer den Zustand der Umwelt verschlechtert, hat dafür einzustehen.",
  "Obowiązek szkolny": "Die Schulpflicht",
  "Nauka jest **obowiązkowa do 18. roku życia**. Odpowiadają za to rodzice albo opiekunowie; szkoła publiczna jest bezpłatna.":
    "Bildung ist **bis zum 18. Lebensjahr verpflichtend**. Dafür haften die Eltern oder Sorgeberechtigten; die öffentliche Schule ist unentgeltlich.",
  "Obowiązkowa zasadnicza służba wojskowa została w Polsce **zawieszona w 2009 roku**. Obowiązek obrony pozostał w Konstytucji, ale pobór w czasie pokoju się nie odbywa.":
    "Der verpflichtende Grundwehrdienst wurde in Polen **2009 ausgesetzt**. Die Pflicht zur Verteidigung steht weiter in der Verfassung, aber in Friedenszeiten wird nicht eingezogen.",
  "Do którego roku życia trwa w Polsce obowiązek nauki?":
    "Bis zu welchem Lebensjahr besteht in Polen die Bildungspflicht?",
  "Do 15. roku życia": "Bis zum 15. Lebensjahr",
  "Do 16. roku życia": "Bis zum 16. Lebensjahr",
  "Do 18. roku życia": "Bis zum 18. Lebensjahr",
  "Do ukończenia szkoły średniej": "Bis zum Abschluss der weiterführenden Schule",
  "Do 18. roku życia. Obowiązek szkolny — nauka w szkole podstawowej — kończy się wcześniej, ale obowiązek nauki trwa dłużej.":
    "Bis zum 18. Lebensjahr. Die Schulpflicht — der Unterricht in der Grundschule — endet früher, die Bildungspflicht dauert länger.",
  "Podatki w praktyce": "Steuern in der Praxis",
  "Zeznanie roczne **PIT** składa się do **30 kwietnia** za rok poprzedni. Można to zrobić przez internet; urząd skarbowy przygotowuje wstępnie wypełnione zeznanie, które wystarczy sprawdzić i zatwierdzić.":
    "Die Jahreserklärung **PIT** wird bis zum **30. April** für das Vorjahr eingereicht. Das geht auch online; das Finanzamt bereitet eine vorausgefüllte Erklärung vor, die man nur prüfen und bestätigen muss.",
  "Udział w wyborach": "Die Teilnahme an Wahlen",
  "Głosowanie jest **prawem, nie obowiązkiem** — nie ma kary za nieoddanie głosu. Prawo wybierania przysługuje od 18. roku życia, także obywatelom mieszkającym za granicą, w obwodach przy placówkach dyplomatycznych.":
    "Wählen ist ein **Recht, keine Pflicht** — für eine nicht abgegebene Stimme gibt es keine Strafe. Das Wahlrecht besteht ab dem 18. Lebensjahr, auch für Staatsangehörige im Ausland, in Wahlbezirken bei den diplomatischen Vertretungen.",
  "Do kiedy składa się roczne zeznanie podatkowe PIT?":
    "Bis wann wird die jährliche Steuererklärung PIT eingereicht?",
  "Do 31 stycznia": "Bis zum 31. Januar",
  "Do 30 kwietnia": "Bis zum 30. April",
  "Do 30 czerwca": "Bis zum 30. Juni",
  "Do 31 grudnia": "Bis zum 31. Dezember",
  "Do 30 kwietnia za rok poprzedni.": "Bis zum 30. April für das Vorjahr.",
  // pl-sejm-senat
  "Dwie izby, dwie różne liczby i dwie różne role. Mylenie ich to najczęstsza pomyłka w rozmowie o polskiej polityce.":
    "Zwei Kammern, zwei verschiedene Zahlen und zwei verschiedene Rollen. Sie zu verwechseln ist der häufigste Fehler in einem Gespräch über polnische Politik.",
  "Dwie izby parlamentu": "Die zwei Kammern des Parlaments",
  "Sejm": "Der Sejm",
  "460 posłów, wybieranych na 4 lata. Izba pierwsza: to tutaj powstają i zapadają rozstrzygnięcia.":
    "460 Abgeordnete, gewählt auf 4 Jahre. Die erste Kammer: hier entstehen die Entscheidungen und hier fallen sie.",
  "Senat": "Der Senat",
  "100 senatorów, również na 4 lata. Izba druga: poprawia, odrzuca albo przyjmuje ustawy Sejmu.":
    "100 Senatoren, ebenfalls auf 4 Jahre. Die zweite Kammer: sie ändert, verwirft oder nimmt die Gesetze des Sejm an.",
  "Kto może kandydować": "Wer kandidieren kann",
  "Posłem może zostać obywatel, który ukończył **21 lat**; senatorem — **30 lat**. Głosować wolno od **18. roku życia**. Mandatu poselskiego nie można łączyć z senatorskim.":
    "Abgeordneter kann werden, wer **21 Jahre** alt ist; Senator, wer **30** ist. Wählen darf man ab dem **18. Lebensjahr**. Ein Sejm-Mandat lässt sich nicht mit einem Senatsmandat verbinden.",
  "Jak powstaje ustawa": "Wie ein Gesetz entsteht",
  "Projekt trafia do Sejmu, który czyta go i głosuje. Przyjęty projekt idzie do **Senatu**: ten ma **30 dni**, żeby go przyjąć, odrzucić albo poprawić. Poprawki i odrzucenie Sejm może **odrzucić bezwzględną większością**. Na końcu ustawę podpisuje **Prezydent**.":
    "Der Entwurf geht an den Sejm, der ihn liest und darüber abstimmt. Der angenommene Entwurf geht an den **Senat**: er hat **30 Tage**, ihn anzunehmen, zu verwerfen oder zu ändern. Änderungen und die Verwerfung kann der Sejm mit **absoluter Mehrheit zurückweisen**. Am Ende unterzeichnet der **Präsident** das Gesetz.",
  "Inicjatywę ustawodawczą mają posłowie, Senat, Prezydent, Rada Ministrów — a także **100 tysięcy obywateli**, którzy złożą podpisy pod projektem.":
    "Das Recht, Gesetze einzubringen, haben die Abgeordneten, der Senat, der Präsident, der Ministerrat — und **100 000 Bürgerinnen und Bürger**, die einen Entwurf mit ihren Unterschriften einreichen.",
  "Zgromadzenie Narodowe": "Die Nationalversammlung",
  "Sejm i Senat obradujące wspólnie tworzą **Zgromadzenie Narodowe**. Zbiera się rzadko: żeby odebrać przysięgę od Prezydenta, uznać go za trwale niezdolnego do sprawowania urzędu albo postawić przed Trybunałem Stanu.":
    "Sejm und Senat bilden gemeinsam tagend die **Nationalversammlung**. Sie tritt selten zusammen: um dem Präsidenten den Eid abzunehmen, ihn für dauerhaft amtsunfähig zu erklären oder ihn vor den Staatsgerichtshof zu stellen.",
  "Ilu posłów zasiada w Sejmie?": "Wie viele Abgeordnete sitzen im Sejm?",
  "100": "100",
  "230": "230",
  "460": "460",
  "560": "560",
  "460 posłów. 100 to liczba senatorów; razem obie izby liczą 560 osób.":
    "460 Abgeordnete. 100 ist die Zahl der Senatoren; zusammen zählen beide Kammern 560 Personen.",
  "Jak się głosuje": "Wie gewählt wird",
  "Do Sejmu wybiera się **proporcjonalnie**, z list w okręgach; mandaty dzieli się metodą **d'Hondta**, a partia musi przekroczyć próg **5 procent** (koalicja 8). Do Senatu głosuje się **większościowo**: w każdym ze stu okręgów wygrywa jeden kandydat.":
    "In den Sejm wird **verhältnismäßig** gewählt, über Listen in Wahlkreisen; die Sitze verteilt das **d'Hondt**-Verfahren, und eine Partei muss die **Fünfprozenthürde** nehmen (ein Bündnis acht). In den Senat wird nach **Mehrheitswahl** gewählt: in jedem der hundert Wahlkreise gewinnt eine Person.",
  "Immunitet": "Die Immunität",
  "Posła ani senatora nie można pociągnąć do odpowiedzialności karnej bez zgody własnej izby. Immunitet chroni mandat, a nie osobę: izba może go **uchylić**.":
    "Gegen eine Abgeordnete oder einen Senator darf ohne Zustimmung der eigenen Kammer kein Strafverfahren geführt werden. Die Immunität schützt das Mandat, nicht die Person: die Kammer kann sie **aufheben**.",
  "Ilu senatorów liczy Senat?": "Wie viele Senatoren zählt der Senat?",
  "100 senatorów, po jednym z każdego okręgu. 460 to liczba posłów.":
    "100 Senatoren, je einer aus jedem Wahlkreis. 460 ist die Zahl der Abgeordneten.",
  // pl-prezydent
  "Wybór i kadencja": "Wahl und Amtszeit",
  "Prezydenta wybierają obywatele w **wyborach powszechnych**, na **5 lat**, najwyżej **dwa razy**. Kandydat musi mieć ukończone **35 lat** i zebrać **100 tysięcy podpisów**. Wygrywa ten, kto uzyska ponad połowę głosów; jeśli nikt nie uzyska, po dwóch tygodniach odbywa się **druga tura** między dwoma najlepszymi.":
    "Den Präsidenten wählen die Bürgerinnen und Bürger in **allgemeinen Wahlen**, auf **5 Jahre**, höchstens **zweimal**. Wer kandidiert, muss **35 Jahre** alt sein und **100 000 Unterschriften** sammeln. Es gewinnt, wer mehr als die Hälfte der Stimmen erhält; erreicht das niemand, folgt zwei Wochen später eine **Stichwahl** zwischen den beiden Besten.",
  "Co Prezydent może": "Was der Präsident kann",
  "Podpisać albo nie": "Unterschreiben oder nicht",
  "Ustawę podpisuje w ciągu 21 dni. Może ją zawetować albo skierować do Trybunału Konstytucyjnego.":
    "Ein Gesetz unterzeichnet er binnen 21 Tagen. Er kann ein Veto einlegen oder es dem Verfassungsgerichtshof vorlegen.",
  "Weto": "Das Veto",
  "Weto Sejm odrzuca większością 3/5 głosów. Ustawy skierowanej do Trybunału zawetować już nie można.":
    "Ein Veto weist der Sejm mit einer Mehrheit von drei Fünfteln zurück. Ein Gesetz, das dem Gerichtshof vorliegt, kann nicht mehr mit einem Veto belegt werden.",
  "Powołania": "Ernennungen",
  "Powołuje Prezesa Rady Ministrów, sędziów na wniosek Krajowej Rady Sądownictwa i ratyfikuje umowy międzynarodowe.":
    "Er ernennt den Vorsitzenden des Ministerrats, die Richter auf Vorschlag des Landesjustizrats und ratifiziert völkerrechtliche Verträge.",
  "Zwierzchnictwo": "Oberbefehl",
  "Jest najwyższym zwierzchnikiem Sił Zbrojnych; w czasie pokoju sprawuje je przez Ministra Obrony Narodowej.":
    "Er ist der oberste Befehlshaber der Streitkräfte; in Friedenszeiten übt er ihn über den Minister für Nationale Verteidigung aus.",
  "Kontrasygnata": "Die Gegenzeichnung",
  "Większość aktów urzędowych Prezydenta wymaga **podpisu Prezesa Rady Ministrów**, który bierze za nie odpowiedzialność przed Sejmem. Konstytucja wylicza jednak **prerogatywy** — akty, których kontrasygnata nie dotyczy, na przykład prawo łaski, zarządzenie wyborów czy nadanie obywatelstwa.":
    "Die meisten Amtsakte des Präsidenten verlangen die **Unterschrift des Vorsitzenden des Ministerrats**, der dafür vor dem Sejm einsteht. Die Verfassung zählt allerdings **Prärogative** auf — Akte, die keine Gegenzeichnung brauchen, etwa das Begnadigungsrecht, das Ansetzen von Wahlen oder die Verleihung der Staatsangehörigkeit.",
  "Prezydent nie kieruje rządem. Politykę bieżącą prowadzi **Rada Ministrów**; Prezydent reprezentuje państwo i stoi na straży Konstytucji.":
    "Der Präsident führt die Regierung nicht. Die laufende Politik macht der **Ministerrat**; der Präsident vertritt den Staat und wacht über die Verfassung.",
  "Na ile lat wybiera się Prezydenta Rzeczypospolitej?":
    "Auf wie viele Jahre wird der Präsident der Republik gewählt?",
  "4 lata": "4 Jahre",
  "5 lat": "5 Jahre",
  "6 lat": "6 Jahre",
  "7 lat": "7 Jahre",
  "5 lat, najwyżej dwie kadencje. 4 lata trwa kadencja Sejmu i Senatu.":
    "5 Jahre, höchstens zwei Amtszeiten. 4 Jahre dauert die Wahlperiode von Sejm und Senat.",
  "Gdy Prezydenta zabraknie": "Wenn der Präsident fehlt",
  "Jeśli Prezydent nie może sprawować urzędu, zastępuje go **Marszałek Sejmu**, a gdyby i on nie mógł — Marszałek Senatu. Tak stało się w kwietniu 2010 roku po katastrofie smoleńskiej.":
    "Kann der Präsident sein Amt nicht ausüben, vertritt ihn der **Marschall des Sejm**, und wenn auch dieser nicht kann, der Marschall des Senats. So geschah es im April 2010 nach dem Absturz von Smolensk.",
  "Rezydencja i przysięga": "Amtssitz und Eid",
  "Siedzibą Prezydenta jest **Pałac Prezydencki** w Warszawie. Urząd obejmuje po złożeniu przysięgi przed **Zgromadzeniem Narodowym**.":
    "Der Sitz des Präsidenten ist der **Präsidentenpalast** in Warschau. Das Amt tritt er nach dem Eid vor der **Nationalversammlung** an.",
  "Jaką większością Sejm odrzuca weto Prezydenta?":
    "Mit welcher Mehrheit weist der Sejm ein Veto des Präsidenten zurück?",
  "Zwykłą": "Mit der einfachen",
  "Bezwzględną": "Mit der absoluten",
  "Trzech piątych": "Mit drei Fünfteln",
  "Trzech piątych głosów. Dwie trzecie potrzebne są do zmiany Konstytucji.":
    "Mit drei Fünfteln der Stimmen. Zwei Drittel braucht es für eine Verfassungsänderung.",
  // pl-rzad
  "Kto rządzi na co dzień": "Wer im Alltag regiert",
  "**Rada Ministrów** — czyli rząd — prowadzi politykę wewnętrzną i zagraniczną państwa. Na jej czele stoi **Prezes Rady Ministrów**, w mowie potocznej premier. W skład wchodzą ministrowie kierujący działami administracji.":
    "Der **Ministerrat** — also die Regierung — führt die Innen- und Außenpolitik des Staates. An seiner Spitze steht der **Vorsitzende des Ministerrats**, umgangssprachlich der Premier. Dazu gehören die Minister, die je einen Verwaltungsbereich leiten.",
  "Jak powstaje rząd": "Wie eine Regierung entsteht",
  "Prezydent desygnuje premiera, ten proponuje skład rządu, a Sejm udziela mu **wotum zaufania** bezwzględną większością. Gdy się nie uda, inicjatywę przejmuje Sejm — Konstytucja przewiduje **trzy kolejne kroki**, żeby państwo nie zostało bez rządu.":
    "Der Präsident benennt den Premier, dieser schlägt die Regierung vor, und der Sejm spricht ihr mit absoluter Mehrheit das **Vertrauen** aus. Gelingt das nicht, geht die Initiative an den Sejm über — die Verfassung sieht **drei aufeinanderfolgende Schritte** vor, damit der Staat nicht ohne Regierung bleibt.",
  "Jak rząd upada": "Wie eine Regierung fällt",
  "**Konstruktywne wotum nieufności**: Sejm może odwołać rząd tylko wtedy, gdy jednocześnie wskaże nowego premiera. Nie da się obalić rządu, nie mając następcy — to zabezpieczenie wzięte z niemieckiej Ustawy Zasadniczej.":
    "**Das konstruktive Misstrauensvotum**: der Sejm kann die Regierung nur dann abberufen, wenn er zugleich einen neuen Premier benennt. Ohne Nachfolger lässt sich keine Regierung stürzen — eine Sicherung, die aus dem deutschen Grundgesetz übernommen ist.",
  "Kto pilnuje rządu": "Wer die Regierung kontrolliert",
  "Uchwala budżet, pyta w interpelacjach, odwołuje ministrów.":
    "Er beschließt den Haushalt, fragt in Interpellationen nach und beruft Minister ab.",
  "Najwyższa Izba Kontroli": "Die Oberste Kontrollkammer",
  "Bada wydatki państwa i podlega Sejmowi, nie rządowi.":
    "Sie prüft die Ausgaben des Staates und untersteht dem Sejm, nicht der Regierung.",
  "Trybunał Stanu": "Der Staatsgerichtshof",
  "Sądzi najwyższych urzędników za naruszenie Konstytucji lub ustawy.":
    "Er richtet über die höchsten Amtsträger wegen Verstößen gegen Verfassung oder Gesetz.",
  "Czego wymaga konstruktywne wotum nieufności?": "Was verlangt das konstruktive Misstrauensvotum?",
  "Zgody Prezydenta": "Die Zustimmung des Präsidenten",
  "Jednoczesnego wskazania nowego premiera": "Dass zugleich ein neuer Premier benannt wird",
  "Rozwiązania Sejmu": "Die Auflösung des Sejm",
  "Większości 2/3 głosów": "Eine Mehrheit von zwei Dritteln",
  "Sejm musi wskazać następcę. Bez tego wniosek jest bezskuteczny — państwo nie zostaje bez rządu.":
    "Der Sejm muss einen Nachfolger benennen. Ohne das bleibt der Antrag wirkungslos — der Staat bleibt nicht ohne Regierung.",
  "Budżet": "Der Haushalt",
  "Rada Ministrów przygotowuje **ustawę budżetową** i przedkłada ją Sejmowi. Jeśli parlament nie uchwali jej w ciągu **czterech miesięcy**, Prezydent może skrócić kadencję Sejmu.":
    "Der Ministerrat bereitet das **Haushaltsgesetz** vor und legt es dem Sejm vor. Beschließt das Parlament es nicht binnen **vier Monaten**, kann der Präsident die Wahlperiode des Sejm verkürzen.",
  "Ministerstwa": "Die Ministerien",
  "Każdy minister kieruje **działem administracji rządowej** — finansami, zdrowiem, edukacją, obroną. Podział działów określa ustawa, a nie sam premier; liczba ministerstw bywa różna w kolejnych rządach.":
    "Jeder Minister leitet einen **Bereich der Regierungsverwaltung** — Finanzen, Gesundheit, Bildung, Verteidigung. Wie die Bereiche geschnitten sind, bestimmt ein Gesetz und nicht der Premier selbst; die Zahl der Ministerien fällt in jeder Regierung anders aus.",
  "Kto przygotowuje projekt ustawy budżetowej?": "Wer bereitet den Entwurf des Haushaltsgesetzes vor?",
  "Narodowy Bank Polski": "Die Polnische Nationalbank",
  "Rada Ministrów. Sejm budżet uchwala, ale sam go nie pisze.":
    "Der Ministerrat. Der Sejm beschließt den Haushalt, schreibt ihn aber nicht selbst.",
  // pl-sady
  "Trzy szczeble sądów": "Drei Stufen der Gerichte",
  "Sprawy zaczynają się w **sądzie rejonowym**, odwołania trafiają do **okręgowego**, a dalej do **apelacyjnego**. Na szczycie stoi **Sąd Najwyższy**, który czuwa nad jednolitością orzecznictwa — nie rozpatruje spraw od początku.":
    "Verfahren beginnen beim **Rayongericht**, Rechtsmittel gehen an das **Bezirksgericht** und weiter an das **Appellationsgericht**. An der Spitze steht das **Oberste Gericht**, das über die Einheitlichkeit der Rechtsprechung wacht — es verhandelt Sachen nicht von vorn.",
  "Sądy administracyjne": "Die Verwaltungsgerichte",
  "Osobną drogą idą spory z urzędami. Skargę na decyzję rozpatruje **wojewódzki sąd administracyjny**, a skargę kasacyjną — **Naczelny Sąd Administracyjny**.":
    "Streit mit Behörden geht einen eigenen Weg. Eine Klage gegen einen Bescheid verhandelt das **Woiwodschaftsverwaltungsgericht**, die Kassationsbeschwerde das **Oberste Verwaltungsgericht**.",
  "Dwa trybunały": "Zwei Gerichtshöfe",
  "Trybunał Konstytucyjny": "Der Verfassungsgerichtshof",
  "Orzeka, czy ustawa jest zgodna z Konstytucją. Może to zbadać na skargę konstytucyjną obywatela.":
    "Er entscheidet, ob ein Gesetz mit der Verfassung vereinbar ist. Prüfen kann er das auch auf die Verfassungsbeschwerde einer Bürgerin hin.",
  "Sądzi Prezydenta, premiera i ministrów za delikty konstytucyjne — nie za zwykłe przestępstwa.":
    "Er richtet über den Präsidenten, den Premier und die Minister wegen Verfassungsverstößen — nicht wegen gewöhnlicher Straftaten.",
  "Zasady procesu": "Die Grundsätze des Verfahrens",
  "Postępowanie jest **dwuinstancyjne**: od wyroku przysługuje odwołanie. Rozprawy są **jawne**, a wyrok ogłasza się publicznie. Sędziowie są **niezawiśli** i podlegają tylko Konstytucji oraz ustawom.":
    "Das Verfahren ist **zweiinstanzlich**: gegen ein Urteil steht das Rechtsmittel offen. Die Verhandlungen sind **öffentlich**, und das Urteil wird öffentlich verkündet. Die Richter sind **unabhängig** und nur der Verfassung und den Gesetzen unterworfen.",
  "Sądy powszechne rozstrzygają spory między ludźmi i sądzą przestępstwa. **Trybunał Konstytucyjny nie jest sądem odwoławczym** — nie zmieni wyroku w sprawie, przygląda się przepisowi.":
    "Die ordentlichen Gerichte entscheiden Streit zwischen Menschen und richten über Straftaten. **Der Verfassungsgerichtshof ist kein Rechtsmittelgericht** — er ändert kein Urteil in einer Sache, er sieht sich die Vorschrift an.",
  "Który organ orzeka o zgodności ustawy z Konstytucją?":
    "Welches Organ entscheidet über die Vereinbarkeit eines Gesetzes mit der Verfassung?",
  "Sąd Najwyższy": "Das Oberste Gericht",
  "Naczelny Sąd Administracyjny": "Das Oberste Verwaltungsgericht",
  "Trybunał Konstytucyjny. Sąd Najwyższy czuwa nad orzecznictwem sądów, Trybunał Stanu sądzi urzędników.":
    "Der Verfassungsgerichtshof. Das Oberste Gericht wacht über die Rechtsprechung der Gerichte, der Staatsgerichtshof richtet über Amtsträger.",
  "Ława przysięgłych? Nie tutaj": "Geschworene? Hier nicht",
  "Polska nie ma ławy przysięgłych. W części spraw obok sędziego zawodowego orzekają **ławnicy** — obywatele wybierani przez rady gmin, którzy mają przy wyrokowaniu taki sam głos jak sędzia.":
    "Polen kennt keine Geschworenenbank. In einem Teil der Verfahren entscheiden neben der Berufsrichterin **Schöffen** — von den Gemeinderäten gewählte Bürgerinnen und Bürger, deren Stimme bei der Urteilsfindung so viel zählt wie die der Richterin.",
  "Prokuratura i adwokatura": "Staatsanwaltschaft und Anwaltschaft",
  "Prokurator": "Der Staatsanwalt",
  "Prowadzi postępowanie przygotowawcze i oskarża przed sądem.":
    "Er führt das Ermittlungsverfahren und vertritt die Anklage vor Gericht.",
  "Adwokat i radca prawny": "Rechtsanwalt und Rechtsberater",
  "Bronią i reprezentują. Kto nie ma środków, może dostać obrońcę z urzędu.":
    "Sie verteidigen und vertreten. Wer die Mittel nicht hat, kann einen Pflichtverteidiger bekommen.",
  "Komornik": "Der Gerichtsvollzieher",
  "Wykonuje prawomocne orzeczenia sądu, gdy dłużnik ich nie wypełnia.":
    "Er vollstreckt rechtskräftige Gerichtsentscheidungen, wenn die Schuldnerin sie nicht erfüllt.",
  "Kto orzeka w polskim sądzie obok sędziego zawodowego w części spraw?":
    "Wer entscheidet in einem polnischen Gericht in manchen Verfahren neben der Berufsrichterin?",
  "Ława przysięgłych": "Eine Geschworenenbank",
  "Ławnicy": "Schöffen",
  "Wojewoda": "Der Woiwode",
  "Ławnicy, wybierani przez rady gmin. Ławy przysięgłych w Polsce nie ma.":
    "Schöffen, von den Gemeinderäten gewählt. Eine Geschworenenbank gibt es in Polen nicht.",
  // pl-samorzad
  "Trzy szczeble": "Drei Stufen",
  "Polska dzieli się na **16 województw**, te na **powiaty**, a powiaty na **gminy**. Gmina jest szczeblem podstawowym: to ona odpowiada za sprawy, których nie zastrzeżono dla innych.":
    "Polen gliedert sich in **16 Woiwodschaften**, diese in **Kreise** und die Kreise in **Gemeinden**. Die Gemeinde ist die Grundstufe: sie ist für alles zuständig, was nicht anderen vorbehalten ist.",
  "Kto czym kieruje": "Wer was leitet",
  "Gmina": "Die Gemeinde",
  "Rada gminy i wójt, w mieście burmistrz albo prezydent miasta. Szkoły podstawowe, drogi lokalne, woda, śmieci.":
    "Gemeinderat und Gemeindevorsteher, in der Stadt Bürgermeister oder Stadtpräsident. Grundschulen, örtliche Straßen, Wasser, Müll.",
  "Powiat": "Der Kreis",
  "Rada powiatu i starosta. Szpitale powiatowe, szkoły średnie, prawa jazdy, rejestracja pojazdów.":
    "Kreisrat und Landrat. Kreiskrankenhäuser, weiterführende Schulen, Führerscheine, Fahrzeugzulassung.",
  "Województwo": "Die Woiwodschaft",
  "Sejmik i marszałek. Rozwój regionu, drogi wojewódzkie, fundusze europejskie.":
    "Regionalparlament und Marschall. Regionalentwicklung, Woiwodschaftsstraßen, europäische Fördermittel.",
  "Wojewoda a marszałek": "Woiwode und Marschall",
  "W województwie są **dwie** władze i łatwo je pomylić. **Marszałka** wybiera sejmik — to samorząd. **Wojewodę** powołuje premier — to przedstawiciel rządu w terenie, który nadzoruje legalność działań samorządu.":
    "In einer Woiwodschaft gibt es **zwei** Gewalten, und sie sind leicht zu verwechseln. Den **Marschall** wählt das Regionalparlament — das ist die Selbstverwaltung. Den **Woiwoden** ernennt der Premier — er ist der Vertreter der Regierung vor Ort und überwacht die Rechtmäßigkeit dessen, was die Selbstverwaltung tut.",
  "Wybory samorządowe": "Die Kommunalwahlen",
  "Radnych, wójtów, burmistrzów i prezydentów miast wybiera się co **5 lat**. Mieszkańcy mogą też odwołać wójta albo radę w **referendum lokalnym**.":
    "Ratsmitglieder, Gemeindevorsteher, Bürgermeister und Stadtpräsidenten werden alle **5 Jahre** gewählt. Die Einwohner können einen Gemeindevorsteher oder einen Rat auch in einem **kommunalen Referendum** abberufen.",
  "Kto powołuje wojewodę?": "Wer ernennt den Woiwoden?",
  "Sejmik województwa": "Das Regionalparlament der Woiwodschaft",
  "Prezes Rady Ministrów": "Der Vorsitzende des Ministerrats",
  "Prezydent Rzeczypospolitej": "Der Präsident der Republik",
  "Mieszkańcy w wyborach": "Die Einwohner in einer Wahl",
  "Premier. Wojewoda reprezentuje rząd; marszałka wybiera sejmik i to on kieruje samorządem województwa.":
    "Der Premier. Der Woiwode vertritt die Regierung; den Marschall wählt das Regionalparlament, und er leitet die Selbstverwaltung der Woiwodschaft.",
  "Skąd samorząd bierze pieniądze": "Woher die Selbstverwaltung ihr Geld nimmt",
  "Gminy mają **dochody własne** — podatek od nieruchomości, opłaty lokalne — oraz **udział w podatkach** PIT i CIT. Do tego dochodzą subwencje i dotacje z budżetu państwa, między innymi oświatowa.":
    "Die Gemeinden haben **eigene Einnahmen** — Grundsteuer, örtliche Gebühren — sowie einen **Anteil an den Steuern** PIT und CIT. Dazu kommen Zuweisungen und Zuschüsse aus dem Staatshaushalt, unter anderem für die Bildung.",
  "Sołectwa i dzielnice": "Ortsteile und Stadtviertel",
  "Wewnątrz gminy działają jednostki pomocnicze: na wsi **sołectwa** z sołtysem, w mieście **dzielnice** albo **osiedla**. Część gmin oddaje mieszkańcom do rozdysponowania **budżet obywatelski**.":
    "Innerhalb einer Gemeinde arbeiten Untergliederungen: auf dem Land **Schulzenämter** mit einem Ortsvorsteher, in der Stadt **Stadtbezirke** oder **Siedlungen**. Ein Teil der Gemeinden gibt den Einwohnern einen **Bürgerhaushalt** zur eigenen Verteilung.",
  "Który szczebel samorządu odpowiada za szkoły podstawowe?":
    "Welche Stufe der Selbstverwaltung ist für die Grundschulen zuständig?",
  "Państwo": "Der Staat",
  "Gmina. Powiat prowadzi szkoły średnie, województwo zajmuje się rozwojem regionu.":
    "Die Gemeinde. Der Kreis führt die weiterführenden Schulen, die Woiwodschaft kümmert sich um die Regionalentwicklung.",
  // pl-poczatki
  "Sześćset lat w jednej lekcji — nie po to, żeby je zapamiętać, tylko żeby wiedzieć, skąd biorą się nazwy, które wracają później: Piastowie, Jagiellonowie, Rzeczpospolita.":
    "Sechshundert Jahre in einer Lektion — nicht damit man sie sich merkt, sondern damit man weiß, woher die Namen kommen, die später wiederkehren: die Piasten, die Jagiellonen, die Rzeczpospolita.",
  "Chrzest i pierwsze państwo": "Die Taufe und der erste Staat",
  "**Mieszko I** przyjmuje chrzest w **966 roku**. Jego syn **Bolesław Chrobry** koronuje się w **1025** na pierwszego króla Polski. Dynastia nazywa się **Piastami** i rządzi do 1370 roku.":
    "**Mieszko I.** nimmt **966** die Taufe an. Sein Sohn **Bolesław der Tapfere** krönt sich **1025** zum ersten König Polens. Die Dynastie heißt **Piasten** und regiert bis 1370.",
  "Rozbicie i zjednoczenie": "Zersplitterung und Wiedervereinigung",
  "Po śmierci Bolesława Krzywoustego w 1138 roku kraj rozpada się na dzielnice na blisko dwieście lat. Scala go dopiero **Władysław Łokietek**, a jego syn **Kazimierz Wielki** (1333–1370) rozbudowuje państwo — powiada się o nim, że „zastał Polskę drewnianą, a zostawił murowaną”. W **1364** zakłada uniwersytet w Krakowie.":
    "Nach dem Tod Bolesławs des Schiefmündigen im Jahr 1138 zerfällt das Land für fast zweihundert Jahre in Teilfürstentümer. Erst **Władysław Ellenlang** fügt es wieder zusammen, und sein Sohn **Kasimir der Große** (1333–1370) baut den Staat aus — von ihm heißt es, er habe „ein hölzernes Polen vorgefunden und ein steinernes hinterlassen“. **1364** gründet er die Universität in Krakau.",
  "Unia z Litwą": "Die Union mit Litauen",
  "1385 — unia w Krewie": "1385 — die Union von Krewo",
  "Wielki książę litewski Jagiełło żeni się z królową Jadwigą, przyjmuje chrzest i zostaje królem Polski.":
    "Der litauische Großfürst Jagiełło heiratet Königin Jadwiga, nimmt die Taufe an und wird König von Polen.",
  "1410 — Grunwald": "1410 — Grunwald",
  "Wojska polsko-litewskie pokonują zakon krzyżacki w jednej z największych bitew średniowiecznej Europy.":
    "Die polnisch-litauischen Heere schlagen den Deutschen Orden in einer der größten Schlachten des mittelalterlichen Europa.",
  "1569 — unia lubelska": "1569 — die Union von Lublin",
  "Polska i Litwa tworzą jedno państwo: Rzeczpospolitą Obojga Narodów, ze wspólnym sejmem i wspólnym królem.":
    "Polen und Litauen bilden einen Staat: die Adelsrepublik beider Nationen, mit gemeinsamem Sejm und gemeinsamem König.",
  "Szlachecka republika": "Die Adelsrepublik",
  "Rzeczpospolita jest monarchią, ale króla **wybiera szlachta** w wolnej elekcji. Sejm decyduje o podatkach i wojnie. Zasada **liberum veto** pozwala jednemu posłowi zerwać obrady — z czasem paraliżuje państwo.":
    "Die Rzeczpospolita ist eine Monarchie, aber den König **wählt der Adel** in freier Wahl. Der Sejm entscheidet über Steuern und Krieg. Der Grundsatz des **liberum veto** erlaubt einem einzigen Abgeordneten, die Sitzung zu sprengen — mit der Zeit lähmt das den Staat.",
  "W którym roku odbyła się bitwa pod Grunwaldem?": "In welchem Jahr fand die Schlacht bei Grunwald statt?",
  "1385": "1385",
  "1410": "1410",
  "1569": "1569",
  "1683": "1683",
  "1410. 1385 to unia w Krewie, 1569 unia lubelska, 1683 odsiecz wiedeńska.":
    "1410. 1385 ist die Union von Krewo, 1569 die Union von Lublin, 1683 der Entsatz von Wien.",
  "Gniezno i Kraków": "Gnesen und Krakau",
  "Pierwszą stolicą było **Gniezno**, gdzie w **1000 roku** cesarz Otton III spotkał się z Bolesławem Chrobrym. Od XI wieku ośrodkiem władzy stał się **Kraków**, na Wawelu koronowano królów aż do XVIII wieku.":
    "Die erste Hauptstadt war **Gnesen**, wo im Jahr **1000** Kaiser Otto III. mit Bolesław dem Tapferen zusammentraf. Ab dem 11. Jahrhundert wurde **Krakau** zum Machtzentrum; auf dem Wawel wurden die Könige bis ins 18. Jahrhundert gekrönt.",
  "Złoty wiek": "Das goldene Zeitalter",
  "XVI stulecie nazywa się **złotym wiekiem**: rozkwitają nauka i literatura, **Mikołaj Kopernik** ogłasza teorię heliocentryczną, a **Jan Kochanowski** pisze po polsku zamiast po łacinie.":
    "Das 16. Jahrhundert heißt das **goldene Zeitalter**: Wissenschaft und Literatur blühen auf, **Nikolaus Kopernikus** verkündet das heliozentrische Weltbild, und **Jan Kochanowski** schreibt auf Polnisch statt auf Latein.",
  "Który uniwersytet założono w Krakowie w 1364 roku?": "Welche Universität wurde 1364 in Krakau gegründet?",
  "Uniwersytet Warszawski": "Die Universität Warschau",
  "Uniwersytet Jagielloński": "Die Jagiellonen-Universität",
  "Uniwersytet Wrocławski": "Die Universität Breslau",
  "Politechnika Gdańska": "Die Technische Universität Danzig",
  "Uniwersytet Jagielloński, jedna z najstarszych uczelni Europy. Uniwersytet Warszawski powstał w 1816 roku.":
    "Die Jagiellonen-Universität, eine der ältesten Hochschulen Europas. Die Universität Warschau entstand 1816.",
  // pl-rozbiory
  "Trzy rozbiory": "Die drei Teilungen",
  "Osłabioną Rzeczpospolitą dzielą między siebie **Rosja, Prusy i Austria**: w **1772**, **1793** i **1795** roku. Po trzecim rozbiorze państwo polskie **znika z mapy na 123 lata**.":
    "Die geschwächte Rzeczpospolita teilen **Russland, Preußen und Österreich** unter sich auf: **1772**, **1793** und **1795**. Nach der dritten Teilung **verschwindet der polnische Staat für 123 Jahre von der Karte**.",
  "Próba ratunku": "Der Rettungsversuch",
  "Cztery lata przed końcem Sejm Czteroletni uchwala **Konstytucję 3 maja 1791** — pierwszą w Europie i drugą na świecie nowoczesną konstytucję spisaną. Znosi liberum veto i wolną elekcję. Sąsiedzi widzą w niej zagrożenie i wkraczają zbrojnie.":
    "Vier Jahre vor dem Ende beschließt der Vierjährige Sejm die **Verfassung vom 3. Mai 1791** — die erste in Europa und die zweite geschriebene moderne Verfassung der Welt. Sie schafft das liberum veto und die freie Königswahl ab. Die Nachbarn sehen darin eine Bedrohung und marschieren ein.",
  "Powstania": "Die Aufstände",
  "1794 — insurekcja kościuszkowska": "1794 — der Kościuszko-Aufstand",
  "Tadeusz Kościuszko prowadzi ostatnią próbę obrony Rzeczypospolitej. Po klęsce następuje trzeci rozbiór.":
    "Tadeusz Kościuszko führt den letzten Versuch, die Rzeczpospolita zu verteidigen. Nach der Niederlage folgt die dritte Teilung.",
  "1830 — powstanie listopadowe": "1830 — der Novemberaufstand",
  "Wybucha w Warszawie przeciw Rosji. Po klęsce tysiące ludzi emigruje na Zachód.":
    "Er bricht in Warschau gegen Russland aus. Nach der Niederlage emigrieren Tausende in den Westen.",
  "1863 — powstanie styczniowe": "1863 — der Januaraufstand",
  "Największe i najdłuższe. Po nim represje: rusyfikacja, konfiskaty, zsyłki na Sybir.":
    "Der größte und längste. Danach die Repressionen: Russifizierung, Beschlagnahmungen, Verbannung nach Sibirien.",
  "Naród bez państwa": "Eine Nation ohne Staat",
  "Przez sto dwadzieścia trzy lata polskość trwa w kulturze: w wierszach **Mickiewicza** i **Słowackiego**, w muzyce **Chopina**, w malarstwie **Matejki**. W 1903 roku **Maria Skłodowska-Curie** dostaje Nagrodę Nobla — pierwszą z dwóch.":
    "Hundertdreiundzwanzig Jahre lang lebt das Polnische in der Kultur: in den Gedichten **Mickiewiczs** und **Słowackis**, in der Musik **Chopins**, in der Malerei **Matejkos**. 1903 erhält **Maria Skłodowska-Curie** den Nobelpreis — den ersten von zweien.",
  "Ile lat Polski nie było na mapie Europy?":
    "Wie viele Jahre lang gab es Polen auf der Karte Europas nicht?",
  "50 lat": "50 Jahre",
  "99 lat": "99 Jahre",
  "123 lata": "123 Jahre",
  "150 lat": "150 Jahre",
  "123 lata — od trzeciego rozbioru w 1795 do odzyskania niepodległości w 1918.":
    "123 Jahre — von der dritten Teilung 1795 bis zur Wiedererlangung der Unabhängigkeit 1918.",
  "Trzej zaborcy, trzy porządki": "Drei Teilungsmächte, drei Ordnungen",
  "Zabór rosyjski": "Der russische Teil",
  "Największy. Po powstaniach nasilona rusyfikacja i zsyłki.":
    "Der größte. Nach den Aufständen verschärfte Russifizierung und Verbannungen.",
  "Zabór pruski": "Der preußische Teil",
  "Silna germanizacja, ale i lepsza gospodarka oraz powszechna szkoła.":
    "Starke Germanisierung, aber auch die bessere Wirtschaft und eine allgemeine Schule.",
  "Zabór austriacki": "Der österreichische Teil",
  "Galicja, uboga, lecz od 1867 roku z autonomią: polskie szkoły i sejm we Lwowie.":
    "Galizien, arm, aber ab 1867 mit Autonomie: polnische Schulen und ein Landtag in Lemberg.",
  "Praca zamiast powstania": "Arbeit statt Aufstand",
  "Po klęsce 1863 roku część działaczy odchodzi od zbrojnych zrywów na rzecz **pracy organicznej**: zakładania szkół, spółdzielni i czytelni. Spór między walką a pracą u podstaw przewija się przez cały wiek XIX.":
    "Nach der Niederlage von 1863 wenden sich manche Aktivisten von bewaffneten Erhebungen ab und der **organischen Arbeit** zu: Schulen, Genossenschaften und Lesesälen. Der Streit zwischen Kampf und Kleinarbeit zieht sich durch das ganze 19. Jahrhundert.",
  "Które powstanie wybuchło w 1863 roku?": "Welcher Aufstand brach 1863 aus?",
  "Listopadowe": "Der Novemberaufstand",
  "Styczniowe": "Der Januaraufstand",
  "Warszawskie": "Der Warschauer Aufstand",
  "Wielkopolskie": "Der Großpolnische Aufstand",
  "Styczniowe. Listopadowe to 1830, wielkopolskie 1918, warszawskie 1944.":
    "Der Januaraufstand. Der Novemberaufstand war 1830, der Großpolnische 1918, der Warschauer 1944.",
  // pl-druga-rp
  "11 listopada 1918": "Der 11. November 1918",
  "Gdy trzy zaborcze mocarstwa przegrywają albo rozpadają się w I wojnie światowej, Polska wraca. **11 listopada 1918** Rada Regencyjna przekazuje **Józefowi Piłsudskiemu** władzę wojskową. Dzień ten jest dziś **Narodowym Świętem Niepodległości**.":
    "Als die drei Teilungsmächte im Ersten Weltkrieg unterliegen oder zerfallen, kehrt Polen zurück. Am **11. November 1918** überträgt der Regentschaftsrat **Józef Piłsudski** die militärische Gewalt. Dieser Tag ist heute der **Nationale Unabhängigkeitstag**.",
  "Granice trzeba było wywalczyć": "Die Grenzen mussten erkämpft werden",
  "Kształt państwa ustala się w walkach i plebiscytach: powstanie wielkopolskie, trzy powstania śląskie, wojna z Rosją bolszewicką. **Bitwa Warszawska w sierpniu 1920** zatrzymuje ofensywę na zachód — nazywa się ją „cudem nad Wisłą”.":
    "Die Gestalt des Staates entsteht in Kämpfen und Volksabstimmungen: der Großpolnische Aufstand, drei Schlesische Aufstände, der Krieg gegen das bolschewistische Russland. Die **Schlacht bei Warschau im August 1920** stoppt den Vormarsch nach Westen — man nennt sie das „Wunder an der Weichsel“.",
  "Państwo od zera": "Ein Staat von null",
  "Jedna waluta": "Eine Währung",
  "Trzy systemy prawne, trzy koleje, cztery waluty. W 1924 roku reforma Grabskiego wprowadza złotego.":
    "Drei Rechtssysteme, drei Eisenbahnen, vier Währungen. 1924 führt die Grabski-Reform den Złoty ein.",
  "Gdynia": "Gdingen",
  "Port budowany od podstaw od 1926 roku daje krajowi własne wyjście na Bałtyk.":
    "Der ab 1926 von Grund auf gebaute Hafen gibt dem Land einen eigenen Zugang zur Ostsee.",
  "Konstytucja marcowa": "Die Märzverfassung",
  "1921 — republika parlamentarna. W 1935 zastępuje ją kwietniowa, wzmacniająca prezydenta.":
    "1921 — eine parlamentarische Republik. 1935 löst die Aprilverfassung sie ab und stärkt den Präsidenten.",
  "Kraj wielu narodów": "Ein Land vieler Völker",
  "W II Rzeczypospolitej mieszkają Polacy, Ukraińcy, Żydzi, Białorusini, Niemcy i Litwini. Około **jednej trzeciej** mieszkańców to mniejszości narodowe — więcej niż dziś.":
    "In der Zweiten Republik leben Polen, Ukrainer, Juden, Belarussen, Deutsche und Litauer. Etwa **ein Drittel** der Bevölkerung gehört nationalen Minderheiten an — mehr als heute.",
  "Jak nazywa się bitwa z sierpnia 1920 roku, która zatrzymała ofensywę bolszewicką?":
    "Wie heißt die Schlacht vom August 1920, die den bolschewistischen Vormarsch aufhielt?",
  "Bitwa pod Grunwaldem": "Die Schlacht bei Grunwald",
  "Bitwa Warszawska": "Die Schlacht bei Warschau",
  "Bitwa pod Wiedniem": "Die Schlacht bei Wien",
  "Bitwa nad Bzurą": "Die Schlacht an der Bzura",
  "Bitwa Warszawska, zwana cudem nad Wisłą. Bzura to wrzesień 1939, Wiedeń 1683, Grunwald 1410.":
    "Die Schlacht bei Warschau, das Wunder an der Weichsel genannt. Die Bzura ist September 1939, Wien 1683, Grunwald 1410.",
  "Zamach majowy": "Der Maiputsch",
  "W **maju 1926** Piłsudski przeprowadza zamach stanu. Zaczyna się okres **sanacji** — rządów obozu piłsudczykowskiego, w których rola parlamentu maleje. Piłsudski umiera w 1935 roku.":
    "Im **Mai 1926** führt Piłsudski einen Staatsstreich durch. Es beginnt die Zeit der **Sanacja** — der Herrschaft des Piłsudski-Lagers, in der die Rolle des Parlaments schrumpft. Piłsudski stirbt 1935.",
  "Kultura międzywojnia": "Die Kultur der Zwischenkriegszeit",
  "Dwudziestolecie to czas **Tuwima**, **Witkacego** i **Gombrowicza**, kabaretu warszawskiego i pierwszego polskiego radia. W 1924 roku powstaje Polskie Radio, a filmy kręci się w Warszawie i Wilnie.":
    "Die zwanzig Jahre sind die Zeit von **Tuwim**, **Witkacy** und **Gombrowicz**, des Warschauer Kabaretts und des ersten polnischen Rundfunks. 1924 entsteht Polskie Radio, und Filme werden in Warschau und Wilna gedreht.",
  "Kto przeprowadził zamach majowy w 1926 roku?": "Wer führte 1926 den Maiputsch durch?",
  "Roman Dmowski": "Roman Dmowski",
  "Józef Piłsudski": "Józef Piłsudski",
  "Ignacy Paderewski": "Ignacy Paderewski",
  "Wincenty Witos": "Wincenty Witos",
  "Józef Piłsudski. Dmowski był jego głównym przeciwnikiem politycznym, Paderewski pianistą i premierem w 1919 roku.":
    "Józef Piłsudski. Dmowski war sein wichtigster politischer Gegner, Paderewski Pianist und 1919 Ministerpräsident.",
  // pl-wojna
  "Sześć lat, które zmieniły granice, ludność i krajobraz kraju bardziej niż cokolwiek wcześniej. Bez nich nie da się zrozumieć ani dzisiejszej mapy, ani dzisiejszych świąt.":
    "Sechs Jahre, die Grenzen, Bevölkerung und Landschaft des Landes stärker verändert haben als alles zuvor. Ohne sie versteht man weder die heutige Karte noch die heutigen Feiertage.",
  "Wrzesień 1939": "September 1939",
  "**1 września 1939** Niemcy atakują Polskę — wojna zaczyna się od ostrzału **Westerplatte**. **17 września** od wschodu wkracza Związek Radziecki, wykonując tajny protokół paktu Ribbentrop–Mołotow. Państwo zostaje podzielone między dwóch okupantów.":
    "Am **1. September 1939** greift Deutschland Polen an — der Krieg beginnt mit dem Beschuss der **Westerplatte**. Am **17. September** rückt von Osten die Sowjetunion ein und vollzieht das geheime Protokoll des Ribbentrop-Molotow-Pakts. Der Staat wird zwischen zwei Besatzern aufgeteilt.",
  "Okupacja": "Die Besatzung",
  "Niemcy prowadzą na ziemiach polskich **Zagładę**: w obozach, z których największym był **Auschwitz-Birkenau**, ginie około trzech milionów polskich Żydów. Sowieci wywożą setki tysięcy ludzi na wschód, a wiosną 1940 mordują w **Katyniu** i innych miejscach blisko 22 tysiące polskich oficerów.":
    "Deutschland betreibt auf polnischem Boden den **Holocaust**: in den Lagern, deren größtes **Auschwitz-Birkenau** war, kommen etwa drei Millionen polnische Juden um. Die Sowjets verschleppen Hunderttausende nach Osten und ermorden im Frühjahr 1940 in **Katyn** und an anderen Orten annähernd 22 000 polnische Offiziere.",
  "Państwo Podziemne": "Der Untergrundstaat",
  "Armia Krajowa": "Die Heimatarmee",
  "Największa podziemna armia okupowanej Europy, podległa rządowi w Londynie.":
    "Die größte Untergrundarmee des besetzten Europa, der Regierung in London unterstellt.",
  "Tajne nauczanie": "Der geheime Unterricht",
  "Szkoły i uniwersytety działały w mieszkaniach, mimo kary śmierci za nauczanie.":
    "Schulen und Universitäten arbeiteten in Wohnungen, trotz der Todesstrafe für das Unterrichten.",
  "Powstanie w getcie": "Der Aufstand im Ghetto",
  "Kwiecień 1943: zryw skazany z góry, podjęty, by zginąć z bronią w ręku.":
    "April 1943: eine von vornherein aussichtslose Erhebung, unternommen, um mit der Waffe in der Hand zu sterben.",
  "Powstanie Warszawskie": "Der Warschauer Aufstand",
  "1 sierpnia 1944, 63 dni walki. Miasto zostaje po nim celowo zburzone.":
    "1. August 1944, 63 Tage Kampf. Danach wird die Stadt planmäßig zerstört.",
  "Bilans": "Die Bilanz",
  "Polska traci około **6 milionów** obywateli — blisko jedną piątą ludności. Granice przesuwają się na zachód: kraj traci Kresy Wschodnie, zyskuje ziemie nad Odrą i Bałtykiem. Miliony ludzi zostają przesiedlone.":
    "Polen verliert etwa **6 Millionen** Staatsangehörige — fast ein Fünftel der Bevölkerung. Die Grenzen verschieben sich nach Westen: das Land verliert die östlichen Kresy und gewinnt Gebiete an Oder und Ostsee. Millionen Menschen werden umgesiedelt.",
  "Którego dnia rozpoczęła się II wojna światowa atakiem na Polskę?":
    "An welchem Tag begann der Zweite Weltkrieg mit dem Angriff auf Polen?",
  "17 września 1939": "Am 17. September 1939",
  "1 września 1939": "Am 1. September 1939",
  "1 sierpnia 1944": "Am 1. August 1944",
  "8 maja 1945": "Am 8. Mai 1945",
  "1 września 1939. 17 września to wkroczenie ZSRR, 1 sierpnia 1944 to Powstanie Warszawskie, 8 maja 1945 to koniec wojny w Europie.":
    "Am 1. September 1939. Der 17. September ist der Einmarsch der Sowjetunion, der 1. August 1944 der Warschauer Aufstand, der 8. Mai 1945 das Kriegsende in Europa.",
  "Polacy poza krajem": "Polen außerhalb des Landes",
  "Rząd przeniósł się do **Londynu**. Polscy lotnicy walczyli w bitwie o Anglię — najskuteczniejszy był **dywizjon 303**. Żołnierze generała Andersa przeszli przez Bliski Wschód do Włoch i w 1944 roku zdobyli **Monte Cassino**.":
    "Die Regierung ging nach **London**. Polnische Flieger kämpften in der Luftschlacht um England — die erfolgreichste war die **Staffel 303**. Die Soldaten General Anders' zogen über den Nahen Osten nach Italien und nahmen 1944 **Monte Cassino**.",
  "Ci, którzy ratowali": "Die, die gerettet haben",
  "Za pomoc Żydom groziła w okupowanej Polsce **kara śmierci**, także dla całej rodziny. Mimo to działała **Żegota** — Rada Pomocy Żydom. Polacy stanowią najliczniejszą grupę wśród odznaczonych tytułem **Sprawiedliwy wśród Narodów Świata**.":
    "Auf Hilfe für Juden stand im besetzten Polen die **Todesstrafe**, auch für die ganze Familie. Dennoch arbeitete **Żegota** — der Rat für Judenhilfe. Polinnen und Polen stellen die größte Gruppe unter den mit dem Titel **Gerechte unter den Völkern** Ausgezeichneten.",
  "Jak nazywał się polski dywizjon myśliwski, który wsławił się w bitwie o Anglię?":
    "Wie hieß die polnische Jagdstaffel, die sich in der Luftschlacht um England auszeichnete?",
  "Dywizjon 300": "Staffel 300",
  "Dywizjon 303": "Staffel 303",
  "Dywizjon 316": "Staffel 316",
  "Dywizjon 1": "Staffel 1",
  "Dywizjon 303 imienia Tadeusza Kościuszki, jeden z najskuteczniejszych w całej bitwie.":
    "Die Staffel 303 „Tadeusz Kościuszko“, eine der erfolgreichsten der ganzen Luftschlacht.",
  // pl-prl
  "Polska Rzeczpospolita Ludowa": "Die Volksrepublik Polen",
  "Po wojnie Polska znajduje się w strefie wpływów Związku Radzieckiego. Władzę sprawuje jedna partia — **PZPR**. Gospodarka jest planowana centralnie, prywatny przemysł znacjonalizowany, granica zachodnia potwierdzona dopiero układami z lat 1970 i 1990.":
    "Nach dem Krieg liegt Polen im Einflussbereich der Sowjetunion. Die Macht hat eine einzige Partei — die **PZPR**. Die Wirtschaft wird zentral geplant, die private Industrie verstaatlicht, die Westgrenze erst durch die Verträge von 1970 und 1990 bestätigt.",
  "Bunty": "Die Aufstände",
  "1956 — Poznań": "1956 — Posen",
  "Robotniczy protest stłumiony wojskiem; zapoczątkował odwilż.":
    "Ein Arbeiterprotest, mit Militär niedergeschlagen; er leitete das Tauwetter ein.",
  "1968 — Marzec": "1968 — der März",
  "Protesty studenckie i antysemicka kampania, po której kraj opuszcza kilkanaście tysięcy osób.":
    "Studentenproteste und eine antisemitische Kampagne, nach der über zehntausend Menschen das Land verlassen.",
  "1970 — Wybrzeże": "1970 — die Küste",
  "Strajki przeciw podwyżkom cen, stłumione strzałami do robotników.":
    "Streiks gegen Preiserhöhungen, niedergeschlagen mit Schüssen auf Arbeiter.",
  "1976 — Radom i Ursus": "1976 — Radom und Ursus",
  "Kolejne strajki; powstaje Komitet Obrony Robotników.":
    "Weitere Streiks; es entsteht das Komitee zur Verteidigung der Arbeiter.",
  "Solidarność": "Die Solidarność",
  "W **sierpniu 1980** strajk w Stoczni Gdańskiej kończy się **porozumieniami sierpniowymi**. Powstaje **NSZZ „Solidarność”** — pierwszy niezależny związek zawodowy w bloku wschodnim, z **Lechem Wałęsą** na czele. W szczytowym momencie liczy blisko dziesięć milionów członków.":
    "Im **August 1980** endet der Streik auf der Danziger Werft mit den **Augustabkommen**. Es entsteht die **Solidarność** — die erste unabhängige Gewerkschaft im Ostblock, mit **Lech Wałęsa** an der Spitze. Auf ihrem Höhepunkt zählt sie fast zehn Millionen Mitglieder.",
  "Stan wojenny": "Das Kriegsrecht",
  "**13 grudnia 1981** generał Wojciech Jaruzelski wprowadza **stan wojenny**. Solidarność zostaje zdelegalizowana, tysiące działaczy internowanych. Związek działa dalej w podziemiu.":
    "Am **13. Dezember 1981** verhängt General Wojciech Jaruzelski das **Kriegsrecht**. Die Solidarność wird verboten, Tausende Aktivisten interniert. Die Gewerkschaft arbeitet im Untergrund weiter.",
  "Wybór **Karola Wojtyły** na papieża w **1978** i jego pielgrzymka do Polski rok później są dla wielu badaczy jednym z warunków tego, co stało się w 1980 roku.":
    "Die Wahl **Karol Wojtyłas** zum Papst **1978** und seine Pilgerreise nach Polen ein Jahr später sind für viele Forschende eine der Voraussetzungen dessen, was 1980 geschah.",
  "W którym roku wprowadzono w Polsce stan wojenny?":
    "In welchem Jahr wurde in Polen das Kriegsrecht verhängt?",
  "1970": "1970",
  "1976": "1976",
  "1981": "1981",
  "13 grudnia 1981 roku. 1980 to powstanie Solidarności, 1989 to wybory czerwcowe.":
    "Am 13. Dezember 1981. 1980 entstand die Solidarność, 1989 waren die Juniwahlen.",
  "Życie codzienne w PRL": "Der Alltag in der Volksrepublik",
  "Gospodarka niedoboru oznaczała **kolejki** i **kartki** na mięso, cukier czy buty. Mieszkania przydzielała spółdzielnia, a na samochód czekało się latami. Paszport trzymał urząd i trzeba było o niego prosić.":
    "Die Mangelwirtschaft bedeutete **Schlangen** und **Bezugsscheine** für Fleisch, Zucker oder Schuhe. Wohnungen verteilte die Genossenschaft, und auf ein Auto wartete man jahrelang. Den Reisepass verwahrte die Behörde, und man musste darum bitten.",
  "Kultura mimo cenzury": "Kultur trotz Zensur",
  "Mimo cenzury powstawały film, teatr i muzyka, które znano poza krajem: szkoła filmowa w Łodzi, plakat polski, jazz. Obok tego działał **drugi obieg** — książki drukowane i kolportowane nielegalnie.":
    "Trotz der Zensur entstanden Film, Theater und Musik, die man auch außerhalb des Landes kannte: die Filmhochschule in Łódź, das polnische Plakat, der Jazz. Daneben arbeitete der **zweite Umlauf** — Bücher, die illegal gedruckt und verteilt wurden.",
  "W którym roku powstała Solidarność?": "In welchem Jahr entstand die Solidarność?",
  "1980": "1980",
  "W sierpniu 1980 roku, po strajku w Stoczni Gdańskiej. W 1981 wprowadzono stan wojenny.":
    "Im August 1980, nach dem Streik auf der Danziger Werft. 1981 wurde das Kriegsrecht verhängt.",
  // pl-trzecia-rp
  "Okrągły Stół": "Der Runde Tisch",
  "Wiosną **1989** władza i opozycja siadają do rozmów przy **Okrągłym Stole**. Ustalają częściowo wolne wybory: o 35 procent miejsc w Sejmie wolno ubiegać się każdemu, Senat jest wolny w całości.":
    "Im Frühjahr **1989** setzen sich Machthaber und Opposition am **Runden Tisch** zusammen. Sie vereinbaren teilweise freie Wahlen: um 35 Prozent der Sitze im Sejm darf sich jeder bewerben, der Senat ist vollständig frei.",
  "4 czerwca 1989": "Der 4. Juni 1989",
  "Solidarność zdobywa **wszystkie** mandaty, o które mogła się ubiegać w Sejmie, i **99 na 100** miejsc w Senacie. We wrześniu **Tadeusz Mazowiecki** zostaje pierwszym od czterdziestu lat niekomunistycznym premierem w bloku wschodnim.":
    "Die Solidarność gewinnt **alle** Mandate, um die sie sich im Sejm bewerben durfte, und **99 von 100** Sitzen im Senat. Im September wird **Tadeusz Mazowiecki** der erste nichtkommunistische Ministerpräsident im Ostblock seit vierzig Jahren.",
  "Przemiany lat dziewięćdziesiątych": "Der Umbruch der neunziger Jahre",
  "Gospodarka": "Die Wirtschaft",
  "Plan Balcerowicza otwiera rynek. Ceny rosną, przedsiębiorstwa upadają, ale półki pustoszeć przestają.":
    "Der Balcerowicz-Plan öffnet den Markt. Die Preise steigen, Betriebe gehen ein, aber die Regale hören auf, leer zu sein.",
  "Samorząd": "Die Selbstverwaltung",
  "1990: pierwsze wolne wybory samorządowe i odrodzenie gmin.":
    "1990: die ersten freien Kommunalwahlen und die Wiedergeburt der Gemeinden.",
  "Konstytucja": "Die Verfassung",
  "1997: nowa ustawa zasadnicza zastępuje poprawianą konstytucję z 1952 roku.":
    "1997: ein neues Grundgesetz löst die immer wieder geflickte Verfassung von 1952 ab.",
  "Reforma administracyjna": "Die Verwaltungsreform",
  "1999: 49 województw zastąpiono 16, przywrócono powiaty.":
    "1999: 49 Woiwodschaften werden durch 16 ersetzt, die Kreise kehren zurück.",
  "Miejsce w Europie": "Der Platz in Europa",
  "W **1999** Polska wstępuje do **NATO**, w **2004** do **Unii Europejskiej** — po referendum, w którym za opowiedziało się ponad trzy czwarte głosujących. Od **2007** należy do strefy Schengen; waluty euro nie przyjęła.":
    "**1999** tritt Polen der **NATO** bei, **2004** der **Europäischen Union** — nach einem Referendum, in dem über drei Viertel der Abstimmenden dafür waren. Seit **2007** gehört es zum Schengen-Raum; den Euro hat es nicht übernommen.",
  "W którym roku Polska wstąpiła do Unii Europejskiej?":
    "In welchem Jahr trat Polen der Europäischen Union bei?",
  "1999": "1999",
  "2007": "2007",
  "1 maja 2004. 1999 to wejście do NATO, 2007 to strefa Schengen.":
    "Am 1. Mai 2004. 1999 ist der Beitritt zur NATO, 2007 der Eintritt in den Schengen-Raum.",
  "Prezydenci III Rzeczypospolitej": "Die Präsidenten der Dritten Republik",
  "Pierwszym prezydentem wybranym w wyborach powszechnych został w **1990 roku Lech Wałęsa**. Po nim urząd sprawowali kolejno Aleksander Kwaśniewski, Lech Kaczyński, Bronisław Komorowski i Andrzej Duda.":
    "Erster in allgemeiner Wahl gewählter Präsident wurde **1990 Lech Wałęsa**. Nach ihm hatten Aleksander Kwaśniewski, Lech Kaczyński, Bronisław Komorowski und Andrzej Duda das Amt inne.",
  "Katastrofa smoleńska": "Der Absturz von Smolensk",
  "**10 kwietnia 2010** w katastrofie samolotu pod Smoleńskiem zginęło 96 osób, w tym prezydent **Lech Kaczyński** z małżonką oraz wielu przedstawicieli władz. Delegacja leciała na obchody rocznicy zbrodni katyńskiej.":
    "Am **10. April 2010** kamen beim Absturz eines Flugzeugs bei Smolensk 96 Menschen ums Leben, darunter Präsident **Lech Kaczyński** mit seiner Frau und viele Vertreter des Staates. Die Delegation war auf dem Weg zur Gedenkfeier für das Massaker von Katyn.",
  "Kto był pierwszym prezydentem wybranym w wyborach powszechnych po 1989 roku?":
    "Wer war nach 1989 der erste in allgemeiner Wahl gewählte Präsident?",
  "Wojciech Jaruzelski": "Wojciech Jaruzelski",
  "Lech Wałęsa": "Lech Wałęsa",
  "Aleksander Kwaśniewski": "Aleksander Kwaśniewski",
  "Tadeusz Mazowiecki": "Tadeusz Mazowiecki",
  "Lech Wałęsa, w 1990 roku. Jaruzelskiego wybrało Zgromadzenie Narodowe w 1989, Mazowiecki był premierem.":
    "Lech Wałęsa, 1990. Jaruzelski wurde 1989 von der Nationalversammlung gewählt, Mazowiecki war Ministerpräsident.",
  // pl-geografia
  "Położenie i sąsiedzi": "Lage und Nachbarn",
  "Polska leży w Europie Środkowej i graniczy z **siedmioma** państwami: Niemcami, Czechami, Słowacją, Ukrainą, Białorusią, Litwą i Rosją (obwód kaliningradzki). Od północy ma dostęp do **Morza Bałtyckiego**.":
    "Polen liegt in Mitteleuropa und grenzt an **sieben** Staaten: Deutschland, Tschechien, die Slowakei, die Ukraine, Belarus, Litauen und Russland (Gebiet Kaliningrad). Im Norden hat es Zugang zur **Ostsee**.",
  "Ukształtowanie terenu": "Die Geländeform",
  "Kraj opada z południa na północ: **góry** na granicy południowej, **wyżyny** w środku, **niziny** na północy, **pojezierza** i wybrzeże. Najwyższy szczyt to **Rysy** w Tatrach — **2499 m n.p.m.** Powierzchnia kraju to około **312 700 km²**.":
    "Das Land fällt von Süden nach Norden ab: **Gebirge** an der Südgrenze, **Hochland** in der Mitte, **Tiefland** im Norden, **Seenplatten** und die Küste. Der höchste Gipfel ist die **Meeraugspitze** in der Hohen Tatra — **2499 m über dem Meer**. Die Fläche des Landes beträgt rund **312 700 km²**.",
  "Rzeki i jeziora": "Flüsse und Seen",
  "Wisła": "Die Weichsel",
  "Najdłuższa rzeka, 1047 km. Płynie z gór na północ, przez Kraków i Warszawę, do Bałtyku pod Gdańskiem.":
    "Der längste Fluss, 1047 km. Sie fließt aus den Bergen nach Norden, durch Krakau und Warschau, bei Danzig in die Ostsee.",
  "Odra": "Die Oder",
  "Druga co do długości, na znacznym odcinku granica z Niemcami.":
    "Der zweitlängste Fluss, auf einem großen Abschnitt die Grenze zu Deutschland.",
  "Mazury": "Masuren",
  "Kraina tysiąca jezior na północnym wschodzie; największe z nich to Śniardwy.":
    "Das Land der tausend Seen im Nordosten; der größte von ihnen ist der Spirdingsee.",
  "Puszcza Białowieska": "Der Wald von Białowieża",
  "Ostatni fragment pierwotnej puszczy niżowej Europy, wpisany na listę UNESCO. Żyją tu żubry.":
    "Das letzte Stück Urwald des europäischen Tieflands, auf der UNESCO-Liste. Hier leben Wisente.",
  "Krainy historyczne": "Die historischen Landschaften",
  "Poza podziałem administracyjnym mówi się o krainach: **Mazowsze** wokół Warszawy, **Małopolska** wokół Krakowa, **Wielkopolska** wokół Poznania, **Śląsk** na południowym zachodzie, **Pomorze** nad morzem, **Mazury** i **Podlasie** na wschodzie.":
    "Neben der Verwaltungsgliederung spricht man von Landschaften: **Masowien** um Warschau, **Kleinpolen** um Krakau, **Großpolen** um Posen, **Schlesien** im Südwesten, **Pommern** an der See, **Masuren** und **Podlachien** im Osten.",
  "Jak nazywa się najwyższy szczyt Polski?": "Wie heißt der höchste Gipfel Polens?",
  "Śnieżka": "Die Schneekoppe",
  "Rysy": "Die Meeraugspitze",
  "Giewont": "Der Giewont",
  "Babia Góra": "Die Babia Góra",
  "Rysy w Tatrach, 2499 m. Śnieżka to najwyższy szczyt Karkonoszy, Giewont jest niższy i leży nad Zakopanem.":
    "Die Meeraugspitze in der Hohen Tatra, 2499 m. Die Schneekoppe ist der höchste Gipfel des Riesengebirges, der Giewont ist niedriger und liegt über Zakopane.",
  "Klimat": "Das Klima",
  "Klimat jest **umiarkowany przejściowy**: między morskim z zachodu a kontynentalnym ze wschodu. Dlatego pogoda bywa zmienna, a zimy raz łagodne, raz mroźne. Występują wszystkie **cztery pory roku**.":
    "Das Klima ist **gemäßigt und im Übergang**: zwischen dem maritimen aus dem Westen und dem kontinentalen aus dem Osten. Deshalb ist das Wetter wechselhaft und die Winter sind mal mild, mal frostig. Es gibt alle **vier Jahreszeiten**.",
  "Parki narodowe": "Die Nationalparks",
  "Jest ich **23**. Najstarsze to Białowieski i Pieniński, najwyżej położony — **Tatrzański**. Nad morzem leży Słowiński z ruchomymi wydmami, które przesuwają się o kilka metrów rocznie.":
    "Es gibt **23**. Die ältesten sind der von Białowieża und der von Pieniny, der höchstgelegene ist der **Tatra-Nationalpark**. An der See liegt der Slowinzische mit den Wanderdünen, die sich jährlich um mehrere Meter verschieben.",
  "Która rzeka jest najdłuższa w Polsce?": "Welcher Fluss ist der längste Polens?",
  "Warta": "Die Warthe",
  "Bug": "Der Bug",
  "Wisła, 1047 km. Odra jest druga, Warta jest dopływem Odry.":
    "Die Weichsel, 1047 km. Die Oder ist die zweite, die Warthe ist ein Nebenfluss der Oder.",
  // pl-miasta
  "Szesnaście województw": "Sechzehn Woiwodschaften",
  "Od reformy z **1999 roku** kraj dzieli się na **16 województw**. Wcześniej było ich 49. Każde ma stolicę — a dwa z nich mają po dwie: w kujawsko-pomorskim sejmik obraduje w Toruniu, a wojewoda urzęduje w Bydgoszczy; w lubuskim podobnie dzielą się Zielona Góra i Gorzów Wielkopolski.":
    "Seit der Reform von **1999** gliedert sich das Land in **16 Woiwodschaften**. Vorher waren es 49. Jede hat eine Hauptstadt — und zwei von ihnen haben zwei: in Kujawien-Pommern tagt das Regionalparlament in Thorn, während der Woiwode in Bromberg amtiert; in Lebus teilen sich Grünberg und Landsberg an der Warthe die Aufgaben ähnlich.",
  "Największe miasta": "Die größten Städte",
  "Warszawa": "Warschau",
  "Stolica od 1596 roku, około 1,8 miliona mieszkańców. Siedziba Sejmu, Senatu, Prezydenta i rządu.":
    "Hauptstadt seit 1596, rund 1,8 Millionen Einwohner. Sitz von Sejm, Senat, Präsident und Regierung.",
  "Kraków": "Krakau",
  "Dawna stolica i miejsce koronacji królów. Uniwersytet Jagielloński działa od 1364 roku.":
    "Die frühere Hauptstadt und der Ort der Königskrönungen. Die Jagiellonen-Universität arbeitet seit 1364.",
  "Łódź, Wrocław, Poznań": "Łódź, Breslau, Posen",
  "Kolejne co do wielkości. Wrocław leży nad Odrą, Poznań nad Wartą.":
    "Die nächstgrößeren. Breslau liegt an der Oder, Posen an der Warthe.",
  "Gdańsk": "Danzig",
  "Główny port, miasto porozumień sierpniowych i początku Solidarności.":
    "Der wichtigste Hafen, die Stadt der Augustabkommen und des Anfangs der Solidarność.",
  "Ludność": "Die Bevölkerung",
  "W Polsce mieszka około **37–38 milionów** osób. Kraj jest dziś **jednolity narodowościowo** — inaczej niż przed wojną, gdy jedną trzecią mieszkańców stanowiły mniejszości. Uznanych mniejszości narodowych i etnicznych jest **dziewięć i cztery**, a językiem regionalnym jest **kaszubski**.":
    "In Polen leben rund **37 bis 38 Millionen** Menschen. Das Land ist heute **national einheitlich** — anders als vor dem Krieg, als ein Drittel der Einwohner Minderheiten angehörte. Anerkannt sind **neun** nationale und **vier** ethnische Minderheiten, und Regionalsprache ist das **Kaschubische**.",
  "Stolicą Polski nie zawsze była Warszawa. Najpierw było **Gniezno**, potem przez pół tysiąclecia **Kraków**; przeniesienie dworu do Warszawy nastąpiło za Zygmunta III Wazy pod koniec XVI wieku.":
    "Die Hauptstadt Polens war nicht immer Warschau. Zuerst war es **Gnesen**, dann ein halbes Jahrtausend lang **Krakau**; der Hof zog Ende des 16. Jahrhunderts unter Sigismund III. Wasa nach Warschau um.",
  "Ile województw ma Polska?": "Wie viele Woiwodschaften hat Polen?",
  "12": "12",
  "16": "16",
  "24": "24",
  "49": "49",
  "16 od reformy z 1999 roku. Wcześniej było 49.": "16 seit der Reform von 1999. Vorher waren es 49.",
  "Zabytki na liście UNESCO": "Denkmäler auf der UNESCO-Liste",
  "Historyczne centrum, wpisane w 1978 roku wśród pierwszych obiektów na świecie.":
    "Die historische Altstadt, 1978 unter den allerersten Stätten der Welt eingetragen.",
  "Wieliczka": "Wieliczka",
  "Kopalnia soli czynna od średniowiecza, z kaplicami wykutymi w solnej skale.":
    "Ein Salzbergwerk, in Betrieb seit dem Mittelalter, mit Kapellen, die in den Salzfels geschlagen sind.",
  "Starówka odbudowana po wojnie — wpisana właśnie za tę odbudowę.":
    "Die nach dem Krieg wiederaufgebaute Altstadt — eingetragen gerade wegen dieses Wiederaufbaus.",
  "Auschwitz-Birkenau": "Auschwitz-Birkenau",
  "Miejsce pamięci, zachowane jako świadectwo.": "Eine Gedenkstätte, als Zeugnis erhalten.",
  "Miasta wojewódzkie": "Die Woiwodschaftshauptstädte",
  "Stolicami województw są między innymi Warszawa, Kraków, Łódź, Wrocław, Poznań, Gdańsk, Szczecin, Lublin, Białystok, Katowice, Rzeszów, Kielce, Olsztyn i Opole.":
    "Hauptstädte der Woiwodschaften sind unter anderem Warschau, Krakau, Łódź, Breslau, Posen, Danzig, Stettin, Lublin, Białystok, Kattowitz, Rzeszów, Kielce, Allenstein und Oppeln.",
  "Które miasto było stolicą Polski przed Warszawą?": "Welche Stadt war vor Warschau die Hauptstadt Polens?",
  "Poznań": "Posen",
  "Wrocław": "Breslau",
  "Kraków, przez blisko pięćset lat. Jeszcze wcześniej stolicą było Gniezno.":
    "Krakau, fast fünfhundert Jahre lang. Noch früher war Gnesen die Hauptstadt.",
  // pl-gospodarka
  "Waluta": "Die Währung",
  "Walutą jest **złoty (PLN)**, dzielony na 100 groszy. Polska należy do Unii Europejskiej, ale **nie przyjęła euro** — zobowiązała się do tego w traktacie akcesyjnym, bez wyznaczonej daty. Pieniądz emituje **Narodowy Bank Polski**.":
    "Die Währung ist der **Złoty (PLN)**, geteilt in 100 Groschen. Polen gehört zur Europäischen Union, hat aber **den Euro nicht übernommen** — im Beitrittsvertrag hat es sich dazu verpflichtet, ohne festes Datum. Das Geld gibt die **Polnische Nationalbank** aus.",
  "Praca": "Die Arbeit",
  "Umowa o pracę": "Der Arbeitsvertrag",
  "Daje urlop, ochronę przed zwolnieniem i składki. Obok niej działają umowy zlecenia i o dzieło.":
    "Er gibt Urlaub, Kündigungsschutz und Beiträge. Daneben gibt es Auftrags- und Werkverträge.",
  "Płaca minimalna": "Der Mindestlohn",
  "Ustalana co roku rozporządzeniem Rady Ministrów, obowiązuje wszystkich pracowników.":
    "Jedes Jahr durch Verordnung des Ministerrats festgelegt, gilt für alle Arbeitnehmer.",
  "Czas pracy": "Die Arbeitszeit",
  "Zasadniczo 8 godzin dziennie i 40 tygodniowo, przeciętnie w przyjętym okresie rozliczeniowym.":
    "Grundsätzlich 8 Stunden am Tag und 40 in der Woche, im Durchschnitt des jeweiligen Abrechnungszeitraums.",
  "Urlop": "Der Urlaub",
  "20 dni przy stażu poniżej 10 lat, 26 dni powyżej. Nauka wlicza się do stażu.":
    "20 Tage bei weniger als 10 Jahren Beschäftigungszeit, 26 Tage darüber. Ausbildungszeiten werden angerechnet.",
  "Podatki i składki": "Steuern und Beiträge",
  "Podatek dochodowy od osób fizycznych (**PIT**) jest progresywny. Do tego dochodzą składki na **ZUS** — emerytalna, rentowa, chorobowa i wypadkowa — oraz składka zdrowotna na **NFZ**. Podstawowa stawka **VAT** wynosi 23 procent, na żywność i książki jest niższa.":
    "Die Einkommensteuer natürlicher Personen (**PIT**) ist progressiv. Dazu kommen die Beiträge an die Sozialversicherung **ZUS** — für Rente, Erwerbsminderung, Krankheit und Unfall — sowie der Gesundheitsbeitrag an den **NFZ**. Der normale **Mehrwertsteuersatz** beträgt 23 Prozent, auf Lebensmittel und Bücher ist er niedriger.",
  "Czym Polska żyje": "Wovon Polen lebt",
  "Gospodarka opiera się na przemyśle, usługach i rolnictwie. Kraj jest dużym producentem żywności, mebli, sprzętu AGD i części samochodowych, a od lat dziewięćdziesiątych rośnie w nim sektor informatyczny i usług dla biznesu.":
    "Die Wirtschaft ruht auf Industrie, Dienstleistungen und Landwirtschaft. Das Land ist ein großer Hersteller von Lebensmitteln, Möbeln, Haushaltsgeräten und Autoteilen, und seit den neunziger Jahren wachsen der IT-Sektor und die Dienstleistungen für Unternehmen.",
  "Jaka jest waluta Polski?": "Welche Währung hat Polen?",
  "Euro": "Den Euro",
  "Korona": "Die Krone",
  "Marka": "Die Mark",
  "Złoty, dzielony na 100 groszy. Polska jest w Unii Europejskiej, ale euro nie przyjęła.":
    "Den Złoty, geteilt in 100 Groschen. Polen ist in der Europäischen Union, hat den Euro aber nicht übernommen.",
  "Zakładanie działalności": "Ein Gewerbe anmelden",
  "Jednoosobową działalność gospodarczą rejestruje się w **CEIDG** — bezpłatnie i przez internet. Spółki wpisuje się do **KRS**. Do rozliczeń potrzebny jest numer **NIP**, a przy zatrudnianiu zgłoszenie do ZUS.":
    "Ein Einzelunternehmen meldet man im **CEIDG** an — kostenlos und über das Internet. Gesellschaften werden ins **Landesgerichtsregister KRS** eingetragen. Für die Abrechnung braucht man eine **Steuernummer NIP**, und wer beschäftigt, meldet das der Sozialversicherung.",
  "Emerytura": "Die Rente",
  "Wiek emerytalny wynosi **60 lat dla kobiet** i **65 lat dla mężczyzn**. Wysokość świadczenia zależy od sumy odprowadzonych składek i przewidywanej długości życia — im dłużej się pracuje, tym wyższa emerytura.":
    "Das Renteneintrittsalter beträgt **60 Jahre für Frauen** und **65 Jahre für Männer**. Die Höhe hängt von der Summe der eingezahlten Beiträge und der erwarteten Lebensdauer ab — je länger man arbeitet, desto höher die Rente.",
  "Gdzie rejestruje się jednoosobową działalność gospodarczą?": "Wo meldet man ein Einzelunternehmen an?",
  "W CEIDG": "Im CEIDG",
  "W KRS": "Im KRS",
  "W ZUS": "Bei der Sozialversicherung ZUS",
  "W urzędzie wojewódzkim": "Im Woiwodschaftsamt",
  "W CEIDG, bezpłatnie i przez internet. KRS jest rejestrem spółek.":
    "Im CEIDG, kostenlos und über das Internet. Das KRS ist das Register der Gesellschaften.",
  // pl-swiat
  "Dwie daty": "Zwei Daten",
  "**1999** — wejście do **NATO**, razem z Czechami i Węgrami. **2004** — wejście do **Unii Europejskiej**, razem z dziewięcioma innymi państwami, po referendum, w którym wzięło udział blisko 59 procent uprawnionych, a za opowiedziało się ponad trzy czwarte głosujących.":
    "**1999** — der Beitritt zur **NATO**, gemeinsam mit Tschechien und Ungarn. **2004** — der Beitritt zur **Europäischen Union**, gemeinsam mit neun weiteren Staaten, nach einem Referendum, an dem fast 59 Prozent der Berechtigten teilnahmen und in dem über drei Viertel der Abstimmenden dafür waren.",
  "Co daje członkostwo w Unii": "Was die Mitgliedschaft in der Union bringt",
  "Swoboda przemieszczania": "Freizügigkeit",
  "Wolno mieszkać, pracować i studiować w każdym państwie członkowskim.":
    "Man darf in jedem Mitgliedstaat wohnen, arbeiten und studieren.",
  "Schengen": "Schengen",
  "Od 2007 roku granice wewnętrzne przekracza się bez kontroli.":
    "Seit 2007 werden die Binnengrenzen ohne Kontrolle überschritten.",
  "Fundusze": "Fördermittel",
  "Polska jest jednym z największych odbiorców funduszy spójności — drogi, koleje, oczyszczalnie.":
    "Polen ist einer der größten Empfänger von Kohäsionsmitteln — Straßen, Bahnstrecken, Kläranlagen.",
  "Parlament Europejski": "Das Europäische Parlament",
  "Polacy wybierają swoich posłów co pięć lat, w wyborach bezpośrednich.":
    "Polen wählt seine Abgeordneten alle fünf Jahre, in unmittelbarer Wahl.",
  "Sąsiedztwo i bezpieczeństwo": "Nachbarschaft und Sicherheit",
  "Polska graniczy z **Ukrainą, Białorusią i Rosją**, więc granica wschodnia kraju jest zarazem zewnętrzną granicą Unii Europejskiej i NATO. Współpracuje też w formatach regionalnych — **Grupa Wyszehradzka** z Czechami, Słowacją i Węgrami oraz **Trójkąt Weimarski** z Niemcami i Francją.":
    "Polen grenzt an die **Ukraine, Belarus und Russland**, und damit ist seine Ostgrenze zugleich die Außengrenze der Europäischen Union und der NATO. Es arbeitet auch in regionalen Formaten mit — in der **Visegrád-Gruppe** mit Tschechien, der Slowakei und Ungarn und im **Weimarer Dreieck** mit Deutschland und Frankreich.",
  "**Polonia** — Polacy i osoby polskiego pochodzenia mieszkające za granicą — liczy według szacunków kilkanaście do dwudziestu milionów osób. Największe skupiska są w Stanach Zjednoczonych, Niemczech i Wielkiej Brytanii.":
    "Die **Polonia** — Polinnen, Polen und Menschen polnischer Herkunft, die im Ausland leben — umfasst Schätzungen zufolge zwischen zehn und zwanzig Millionen Personen. Die größten Gemeinschaften gibt es in den Vereinigten Staaten, in Deutschland und in Großbritannien.",
  "W którym roku Polska wstąpiła do NATO?": "In welchem Jahr trat Polen der NATO bei?",
  "1999, pięć lat przed wejściem do Unii Europejskiej. 2007 to strefa Schengen.":
    "1999, fünf Jahre vor dem Beitritt zur Europäischen Union. 2007 ist der Eintritt in den Schengen-Raum.",
  "Prawo europejskie": "Das europäische Recht",
  "Prawo Unii Europejskiej obowiązuje w Polsce bezpośrednio, a **Trybunał Sprawiedliwości Unii Europejskiej** w Luksemburgu czuwa nad jego stosowaniem. Osobno działa **Europejski Trybunał Praw Człowieka** w Strasburgu, do którego można złożyć skargę po wyczerpaniu drogi krajowej.":
    "Das Recht der Europäischen Union gilt in Polen unmittelbar, und der **Gerichtshof der Europäischen Union** in Luxemburg wacht über seine Anwendung. Davon getrennt arbeitet der **Europäische Gerichtshof für Menschenrechte** in Straßburg, bei dem man nach Erschöpfung des nationalen Rechtswegs Beschwerde einlegen kann.",
  "Pomoc dla Ukrainy": "Die Hilfe für die Ukraine",
  "Po pełnoskalowej agresji Rosji na Ukrainę w **2022 roku** przez Polskę przeszły miliony uchodźców, a kilkaset tysięcy zostało na dłużej. Był to największy ruch ludności w tej części Europy od czasu II wojny światowej.":
    "Nach dem großangelegten Angriff Russlands auf die Ukraine **2022** kamen Millionen Geflüchtete durch Polen, und mehrere Hunderttausend blieben länger. Es war die größte Bevölkerungsbewegung in diesem Teil Europas seit dem Zweiten Weltkrieg.",
  "Który trybunał rozpatruje skargi na naruszenie praw człowieka po wyczerpaniu drogi krajowej?":
    "Welcher Gerichtshof verhandelt Beschwerden wegen Menschenrechtsverletzungen nach Erschöpfung des nationalen Rechtswegs?",
  "Europejski Trybunał Praw Człowieka w Strasburgu":
    "Der Europäische Gerichtshof für Menschenrechte in Straßburg",
  "Trybunał w Strasburgu. Ten w Luksemburgu zajmuje się prawem Unii, a nie skargami indywidualnymi tego rodzaju.":
    "Der Gerichtshof in Straßburg. Der in Luxemburg befasst sich mit dem Recht der Union, nicht mit Individualbeschwerden dieser Art.",
  // pl-religia
  "Kościół i państwo": "Kirche und Staat",
  "Konstytucja zapewnia **wolność sumienia i wyznania**, a państwo jest **bezstronne** w sprawach przekonań religijnych. Nie ma religii państwowej. Stosunki z Kościołem katolickim reguluje **konkordat** ze Stolicą Apostolską z 1993 roku.":
    "Die Verfassung sichert die **Gewissens- und Bekenntnisfreiheit**, und der Staat ist in Fragen religiöser Überzeugung **unparteiisch**. Eine Staatsreligion gibt es nicht. Das Verhältnis zur katholischen Kirche regelt ein **Konkordat** mit dem Heiligen Stuhl von 1993.",
  "Kto w co wierzy": "Wer woran glaubt",
  "Zdecydowana większość mieszkańców deklaruje wyznanie **rzymskokatolickie**, choć udział praktykujących od lat maleje, zwłaszcza w miastach i wśród młodych. Obecne są też **prawosławie** — najliczniej na Podlasiu — oraz protestantyzm, judaizm i islam, ten ostatni między innymi wśród **Tatarów polskich**, osiadłych tu od stuleci.":
    "Die große Mehrheit der Einwohner gibt das **römisch-katholische** Bekenntnis an, auch wenn der Anteil der Praktizierenden seit Jahren sinkt, besonders in den Städten und unter jungen Menschen. Vertreten sind auch die **Orthodoxie** — am zahlreichsten in Podlachien — sowie Protestantismus, Judentum und Islam, letzterer unter anderem bei den **polnischen Tataren**, die seit Jahrhunderten hier ansässig sind.",
  "Jan Paweł II": "Johannes Paul II.",
  "Wybór **Karola Wojtyły** na papieża w **1978 roku** i jego pielgrzymki do kraju miały znaczenie wykraczające poza religię: dla wielu badaczy są jednym z warunków tego, co wydarzyło się w 1980 roku.":
    "Die Wahl **Karol Wojtyłas** zum Papst **1978** und seine Pilgerreisen ins Land hatten eine Bedeutung, die über das Religiöse hinausging: für viele Forschende sind sie eine der Voraussetzungen dessen, was 1980 geschah.",
  "Religia w szkole publicznej jest **nieobowiązkowa**. Rodzice albo pełnoletni uczniowie decydują, czy dziecko chodzi na religię, na etykę, czy na żadne z nich.":
    "Der Religionsunterricht an der öffentlichen Schule ist **freiwillig**. Die Eltern oder volljährige Schülerinnen und Schüler entscheiden, ob ein Kind Religion, Ethik oder keines von beidem besucht.",
  "Jaki jest stosunek państwa polskiego do wyznań według Konstytucji?":
    "Wie steht der polnische Staat nach der Verfassung zu den Bekenntnissen?",
  "Katolicyzm jest religią państwową": "Der Katholizismus ist Staatsreligion",
  "Państwo jest bezstronne w sprawach przekonań religijnych":
    "Der Staat ist in Fragen religiöser Überzeugung unparteiisch",
  "Wyznawanie religii jest zakazane": "Eine Religion auszuüben ist verboten",
  "Religię wybiera wojewoda": "Die Religion wählt der Woiwode",
  "Państwo jest bezstronne, a każdemu przysługuje wolność sumienia i wyznania. Religii państwowej nie ma.":
    "Der Staat ist unparteiisch, und jedem steht die Gewissens- und Bekenntnisfreiheit zu. Eine Staatsreligion gibt es nicht.",
  "Miejsca pielgrzymek": "Wallfahrtsorte",
  "Najważniejszym jest **Jasna Góra** w Częstochowie z obrazem Matki Boskiej Częstochowskiej. Sierpniowe piesze pielgrzymki idą tam z całego kraju, niektóre po kilkanaście dni.":
    "Der wichtigste ist **Jasna Góra** in Tschenstochau mit dem Bild der Schwarzen Madonna. Im August ziehen Fußwallfahrten aus dem ganzen Land dorthin, manche über anderthalb Wochen lang.",
  "Mniejszości wyznaniowe": "Religiöse Minderheiten",
  "Prawosławni najliczniej mieszkają na **Podlasiu**, ewangelicy na **Śląsku Cieszyńskim**. Meczety Tatarów polskich w **Kruszynianach** i **Bohonikach** stoją tam od stuleci.":
    "Orthodoxe leben am zahlreichsten in **Podlachien**, Evangelische im **Teschener Schlesien**. Die Moscheen der polnischen Tataren in **Kruszyniany** und **Bohoniki** stehen dort seit Jahrhunderten.",
  "Gdzie znajduje się najważniejsze sanktuarium pielgrzymkowe w Polsce?":
    "Wo liegt der wichtigste Wallfahrtsort Polens?",
  "W Krakowie": "In Krakau",
  "W Częstochowie": "In Tschenstochau",
  "W Gnieźnie": "In Gnesen",
  "W Licheniu": "In Licheń",
  "Jasna Góra w Częstochowie. Gniezno jest siedzibą prymasa, ale nie głównym miejscem pielgrzymek.":
    "Jasna Góra in Tschenstochau. Gnesen ist der Sitz des Primas, aber nicht der wichtigste Wallfahrtsort.",
  // pl-swieta
  "Trzy daty wracają najczęściej i najłatwiej je pomylić: 3 maja, 11 listopada i 1 sierpnia. Pierwsza to konstytucja, druga niepodległość, trzecia powstanie.":
    "Drei Daten kehren am häufigsten wieder und werden am leichtesten verwechselt: der 3. Mai, der 11. November und der 1. August. Der erste steht für die Verfassung, der zweite für die Unabhängigkeit, der dritte für den Aufstand.",
  "Święta państwowe": "Staatliche Feiertage",
  "3 maja": "Der 3. Mai",
  "Święto Konstytucji 3 Maja — rocznica ustawy z 1791 roku. Dzień wolny od pracy.":
    "Das Fest der Verfassung vom 3. Mai — der Jahrestag des Gesetzes von 1791. Ein arbeitsfreier Tag.",
  "11 listopada": "Der 11. November",
  "Narodowe Święto Niepodległości — rocznica roku 1918. Dzień wolny od pracy.":
    "Der Nationale Unabhängigkeitstag — der Jahrestag des Jahres 1918. Ein arbeitsfreier Tag.",
  "1 sierpnia": "Der 1. August",
  "Godzina „W”: o 17.00 syreny w Warszawie upamiętniają Powstanie Warszawskie. Dniem wolnym nie jest.":
    "Die Stunde „W“: um 17 Uhr erinnern die Sirenen in Warschau an den Warschauer Aufstand. Ein arbeitsfreier Tag ist er nicht.",
  "Święta kościelne wolne od pracy": "Kirchliche Feiertage ohne Arbeit",
  "Wolne są między innymi **Wielkanoc** z poniedziałkiem wielkanocnym, **Boże Ciało**, **15 sierpnia** (Wniebowzięcie, zarazem Święto Wojska Polskiego), **1 listopada** (Wszystkich Świętych) oraz **25 i 26 grudnia**.":
    "Arbeitsfrei sind unter anderem **Ostern** mit dem Ostermontag, **Fronleichnam**, der **15. August** (Mariä Himmelfahrt, zugleich der Tag des Polnischen Heeres), der **1. November** (Allerheiligen) sowie der **25. und 26. Dezember**.",
  "Zwyczaje": "Bräuche",
  "Wigilia": "Der Heilige Abend",
  "24 grudnia: dwanaście potraw, opłatek, wolne miejsce przy stole, kolacja po pierwszej gwiazdce.":
    "Der 24. Dezember: zwölf Gerichte, die geteilte Oblate, ein freier Platz am Tisch, das Abendessen nach dem ersten Stern.",
  "Śmigus-dyngus": "Śmigus-dyngus",
  "Poniedziałek wielkanocny, gdy polewa się wodą — zwyczaj starszy niż chrześcijaństwo.":
    "Der Ostermontag, an dem man einander mit Wasser begießt — ein Brauch, der älter ist als das Christentum.",
  "Andrzejki": "Der Andreasabend",
  "Wieczór 29 listopada, wróżby z wosku lanego przez ucho od klucza.":
    "Der Abend des 29. November, mit Wahrsagen aus Wachs, das durch einen Schlüsselbart gegossen wird.",
  "Imieniny": "Der Namenstag",
  "Bywają obchodzone chętniej niż urodziny, zwłaszcza przez starsze pokolenia.":
    "Er wird mitunter lieber begangen als der Geburtstag, vor allem von den älteren Generationen.",
  "Co upamiętnia święto 3 maja?": "Woran erinnert das Fest am 3. Mai?",
  "Odzyskanie niepodległości": "An die Wiedererlangung der Unabhängigkeit",
  "Uchwalenie Konstytucji 3 maja 1791 roku": "An den Beschluss der Verfassung vom 3. Mai 1791",
  "Wybuch Powstania Warszawskiego": "An den Ausbruch des Warschauer Aufstands",
  "Wejście do Unii Europejskiej": "An den Beitritt zur Europäischen Union",
  "Konstytucję z 1791 roku. Niepodległość to 11 listopada, Powstanie Warszawskie to 1 sierpnia.":
    "An die Verfassung von 1791. Die Unabhängigkeit ist der 11. November, der Warschauer Aufstand der 1. August.",
  "Wszystkich Świętych": "Allerheiligen",
  "**1 listopada** miliony ludzi jadą na groby bliskich i stawiają znicze. Cmentarze świecą wtedy przez całą noc — to jeden z najbardziej rozpoznawalnych obrazów polskiego roku.":
    "Am **1. November** fahren Millionen Menschen zu den Gräbern ihrer Angehörigen und stellen Grablichter auf. Die Friedhöfe leuchten dann die ganze Nacht — eines der einprägsamsten Bilder des polnischen Jahres.",
  "Rok szkolny i wakacje": "Schuljahr und Ferien",
  "Rok szkolny zaczyna się **1 września** i kończy w drugiej połowie czerwca. Wakacje trwają lipiec i sierpień, ferie zimowe dwa tygodnie, w różnych terminach zależnie od województwa.":
    "Das Schuljahr beginnt am **1. September** und endet in der zweiten Junihälfte. Die Sommerferien dauern Juli und August, die Winterferien zwei Wochen, je nach Woiwodschaft zu unterschiedlichen Terminen.",
  "Co upamiętnia 11 listopada?": "Woran erinnert der 11. November?",
  "Uchwalenie Konstytucji": "An den Beschluss der Verfassung",
  "Odzyskanie niepodległości w 1918 roku": "An die Wiedererlangung der Unabhängigkeit 1918",
  "Wejście do NATO": "An den Beitritt zur NATO",
  "Odzyskanie niepodległości. Konstytucja to 3 maja, Powstanie Warszawskie 1 sierpnia.":
    "An die Wiedererlangung der Unabhängigkeit. Die Verfassung ist der 3. Mai, der Warschauer Aufstand der 1. August.",
  // pl-edukacja
  "Droga przez szkołę": "Der Weg durch die Schule",
  "Dzieci zaczynają od **rocznego przygotowania przedszkolnego** w wieku sześciu lat, potem idzie **ośmioletnia szkoła podstawowa**. Kończy ją **egzamin ósmoklasisty**. Dalej wybiera się **liceum** (4 lata), **technikum** (5 lat) albo **szkołę branżową**.":
    "Kinder beginnen mit einem **Vorschuljahr** im Alter von sechs Jahren, danach folgt die **achtjährige Grundschule**. Sie endet mit der **Prüfung der achten Klasse**. Weiter wählt man das **Lyzeum** (4 Jahre), das **Technikum** (5 Jahre) oder die **Berufsschule**.",
  "Matura i studia": "Abitur und Studium",
  "**Matura** otwiera drogę na studia; wyniki decydują o przyjęciu na uczelnię. Studia dzielą się na **licencjackie**, **magisterskie** i **doktoranckie**. Studia dzienne na uczelniach publicznych są **bezpłatne**.":
    "Die **Matura** öffnet den Weg zum Studium; die Ergebnisse entscheiden über die Aufnahme an einer Hochschule. Das Studium gliedert sich in **Bachelor**, **Master** und **Promotion**. Ein Vollzeitstudium an öffentlichen Hochschulen ist **kostenlos**.",
  "Ochrona zdrowia": "Die Gesundheitsversorgung",
  "NFZ": "Der NFZ",
  "Narodowy Fundusz Zdrowia finansuje leczenie ze składek. Ubezpieczony leczy się bezpłatnie.":
    "Der Nationale Gesundheitsfonds finanziert die Behandlung aus den Beiträgen. Wer versichert ist, wird kostenlos behandelt.",
  "Lekarz rodzinny": "Die Hausärztin",
  "Pierwszy kontakt; kieruje do specjalisty i prowadzi dokumentację.":
    "Die erste Anlaufstelle; sie überweist zu Fachärzten und führt die Unterlagen.",
  "Numer 112": "Die Nummer 112",
  "Jeden numer alarmowy do pogotowia, straży i policji, w całej Unii Europejskiej.":
    "Eine Notrufnummer für Rettungsdienst, Feuerwehr und Polizei, in der ganzen Europäischen Union.",
  "PESEL": "Die PESEL-Nummer",
  "Jedenastocyfrowy numer identyfikacyjny; potrzebny u lekarza, w urzędzie i w banku.":
    "Eine elfstellige Kennnummer; man braucht sie beim Arzt, im Amt und in der Bank.",
  "Numer **PESEL** zawiera datę urodzenia i płeć: przedostatnia cyfra parzysta oznacza kobietę, nieparzysta mężczyznę.":
    "Die **PESEL**-Nummer enthält Geburtsdatum und Geschlecht: eine gerade vorletzte Ziffer steht für eine Frau, eine ungerade für einen Mann.",
  "Ile lat trwa w Polsce szkoła podstawowa?": "Wie viele Jahre dauert die Grundschule in Polen?",
  "8 lat": "8 Jahre",
  "9 lat": "9 Jahre",
  "12 lat": "12 Jahre",
  "Osiem lat, zakończone egzaminem ósmoklasisty. Liceum trwa cztery lata, technikum pięć.":
    "Acht Jahre, abgeschlossen mit der Prüfung der achten Klasse. Das Lyzeum dauert vier Jahre, das Technikum fünf.",
  "Uczelnie": "Die Hochschulen",
  "Najstarszą uczelnią jest **Uniwersytet Jagielloński** (1364), największą **Uniwersytet Warszawski**. Obok uniwersytetów działają politechniki, uczelnie medyczne, ekonomiczne i artystyczne, a także szkoły prywatne.":
    "Die älteste Hochschule ist die **Jagiellonen-Universität** (1364), die größte die **Universität Warschau**. Neben den Universitäten gibt es Technische Hochschulen, medizinische, wirtschaftswissenschaftliche und künstlerische Hochschulen sowie private Einrichtungen.",
  "Apteki i leki": "Apotheken und Arzneimittel",
  "Leki na receptę wydaje apteka po okazaniu **e-recepty** — kodu przychodzącego SMS-em albo widocznego w aplikacji. Część leków jest refundowana, czyli tańsza dzięki dopłacie NFZ.":
    "Verschreibungspflichtige Arzneimittel gibt die Apotheke gegen ein **E-Rezept** heraus — einen Code, der per SMS kommt oder in der App sichtbar ist. Ein Teil der Mittel ist erstattet, also durch den Zuschuss des Gesundheitsfonds billiger.",
  "Jaki jest numer alarmowy obowiązujący w Polsce i całej Unii Europejskiej?":
    "Welche Notrufnummer gilt in Polen und in der ganzen Europäischen Union?",
  "997": "997",
  "998": "998",
  "112": "112",
  "999": "999",
  "112. Dawne numery 997, 998 i 999 nadal działają, ale 112 łączy ze wszystkimi służbami.":
    "Die 112. Die früheren Nummern 997, 998 und 999 funktionieren weiterhin, aber die 112 verbindet mit allen Diensten.",
  // pl-codziennosc
  "Załatwianie spraw": "Behördengänge",
  "Sprawy urzędowe załatwia się w **urzędzie gminy** albo **miasta**, a coraz częściej przez internet: **profil zaufany** i aplikacja **mObywatel** zastępują wizytę i papierowy dowód. Meldunek zgłasza się w urzędzie miejsca zamieszkania.":
    "Amtliche Angelegenheiten erledigt man im **Gemeinde-** oder **Stadtamt**, und immer öfter über das Internet: das **vertrauenswürdige Profil** und die App **mObywatel** ersetzen den Besuch und den Ausweis auf Papier. Die Anmeldung des Wohnsitzes erfolgt beim Amt des Wohnorts.",
  "Życie codzienne": "Der Alltag",
  "Zakupy w niedziele": "Einkaufen am Sonntag",
  "Handel w niedziele jest ograniczony ustawą; otwarte pozostają między innymi piekarnie, stacje paliw i sklepy prowadzone przez właściciela.":
    "Der Handel an Sonntagen ist durch ein Gesetz eingeschränkt; geöffnet bleiben unter anderem Bäckereien, Tankstellen und Läden, die der Inhaber selbst führt.",
  "Transport": "Der Verkehr",
  "PKP prowadzi koleje dalekobieżne, w miastach jeżdżą tramwaje i autobusy, bilet kasuje się przy wejściu.":
    "Die PKP betreibt den Fernverkehr auf der Schiene, in den Städten fahren Straßenbahnen und Busse, den Fahrschein entwertet man beim Einsteigen.",
  "Kuchnia": "Die Küche",
  "Pierogi, bigos, żurek, rosół, kotlet schabowy; obiad bywa jedzony wcześniej niż w Europie Zachodniej.":
    "Pierogi, Bigos, Żurek, Brühe, das panierte Schnitzel; das Mittagessen wird oft früher gegessen als in Westeuropa.",
  "Powitanie": "Die Begrüßung",
  "„Dzień dobry” do wszystkich, „cześć” do znajomych. Do osoby starszej mówi się „pan” albo „pani”.":
    "„Dzień dobry“ zu allen, „cześć“ zu Bekannten. Zu älteren Personen sagt man „pan“ oder „pani“.",
  "Media": "Die Medien",
  "Działają media **publiczne** — Telewizja Polska i Polskie Radio, finansowane z abonamentu i budżetu — oraz liczne prywatne stacje, gazety i portale. Nad rynkiem czuwa **Krajowa Rada Radiofonii i Telewizji**, wymieniona w Konstytucji.":
    "Es gibt **öffentliche** Medien — das Polnische Fernsehen und den Polnischen Rundfunk, finanziert aus Rundfunkgebühr und Haushalt — sowie zahlreiche private Sender, Zeitungen und Portale. Über den Markt wacht der **Landesrat für Rundfunk und Fernsehen**, der in der Verfassung genannt ist.",
  "Kultura": "Die Kultur",
  "Polska ma pięcioro noblistów literackich: **Sienkiewicza**, **Reymonta**, **Miłosza**, **Szymborską** i **Tokarczuk**. W muzyce najbardziej znany jest **Chopin**, któremu poświęcony jest konkurs pianistyczny odbywający się w Warszawie co pięć lat.":
    "Polen hat fünf Nobelpreisträgerinnen und -träger für Literatur: **Sienkiewicz**, **Reymont**, **Miłosz**, **Szymborska** und **Tokarczuk**. In der Musik ist **Chopin** der bekannteste; ihm ist der Klavierwettbewerb gewidmet, der alle fünf Jahre in Warschau stattfindet.",
  "Jak nazywa się aplikacja, w której można nosić dokumenty w telefonie?":
    "Wie heißt die App, in der man seine Dokumente im Telefon tragen kann?",
  "ePUAP": "ePUAP",
  "mObywatel": "mObywatel",
  "mBank": "mBank",
  "mObywatel. PESEL to numer identyfikacyjny, a nie aplikacja.":
    "mObywatel. PESEL ist eine Kennnummer und keine App.",
  "Mieszkanie": "Das Wohnen",
  "Większość ludzi mieszka **we własnym** mieszkaniu lub domu — udział własności jest jednym z najwyższych w Europie. Przy najmie podpisuje się umowę i zwykle wpłaca kaucję; opłaty za wodę i ogrzewanie często idą osobno, do wspólnoty albo spółdzielni.":
    "Die meisten Menschen wohnen **in der eigenen** Wohnung oder im eigenen Haus — der Anteil des Eigentums gehört zu den höchsten in Europa. Bei Miete wird ein Vertrag geschlossen und meist eine Kaution hinterlegt; Wasser und Heizung laufen oft getrennt, an die Eigentümergemeinschaft oder die Genossenschaft.",
  "Sport": "Der Sport",
  "Najpopularniejsze są **piłka nożna** i **siatkówka**; reprezentacja siatkarzy należy do najlepszych na świecie. Zimą kraj ogląda **skoki narciarskie**, a raz w roku ulicami miast biegną tysiące uczestników maratonów.":
    "Am beliebtesten sind **Fußball** und **Volleyball**; die Volleyballnationalmannschaft gehört zu den besten der Welt. Im Winter schaut das Land **Skispringen**, und einmal im Jahr laufen Tausende durch die Straßen der Städte bei den Marathons.",
  "Ile osób z Polski otrzymało literacką Nagrodę Nobla?":
    "Wie viele Menschen aus Polen haben den Literaturnobelpreis erhalten?",
  "Dwie": "Zwei",
  "Trzy": "Drei",
  "Pięć": "Fünf",
  "Siedem": "Sieben",
  "Pięć: Sienkiewicz, Reymont, Miłosz, Szymborska i Tokarczuk.":
    "Fünf: Sienkiewicz, Reymont, Miłosz, Szymborska und Tokarczuk.",
};
