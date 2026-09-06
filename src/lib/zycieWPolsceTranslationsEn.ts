/**
 * English for the Zycie w Polsce course cards and headings.
 *
 * Keyed on the POLISH source text exactly as it appears in
 * zycieWPolsceCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but this table arrives
 * complete: every string the reader can tap is here, quizzes included.
 *
 * WHY THIS ONE. English could read three of the seven country courses;
 * German could read all seven. Russian was closed first, because Cyrillic
 * leaves a reader nothing to work with. Polish is the next widest gap: the
 * alphabet is at least readable, but a sentence about the Sejm, a voivode
 * and a wójt is not guessable from Latin letters alone.
 *
 * WHAT STAYS POLISH. The offices and institutions a learner will actually
 * meet on a form or a sign keep their own names, with the meaning given
 * beside them where it is not obvious: Sejm, Senat, wójt, starosta, sołtys,
 * voivode, PESEL, NIP, ZUS, NFZ, CEIDG, KRS, PIT, matura, Solidarność. A
 * translation that turned the wójt into a mayor and the Sejm into a
 * parliament would read more smoothly and teach the wrong word.
 *
 * Proper names and numbers appear as entries even where nothing changes —
 * "Adam Mickiewicz", "1410", "112". That is deliberate and matches the
 * German table beside it: a key that is present means the line was read and
 * needed nothing, while an absent key cannot be told apart from one nobody
 * has looked at yet.
 *
 * ONE WORD IS MISSING ON PURPOSE, so the coverage line reads 99 per cent
 * rather than 100. "Sport" is spelled the same in Polish, German and English,
 * and the English table for Leben in Deutschland already has it. Both tables
 * are spread into one object, so a second copy here would be a key nobody
 * could tell apart from the first — today the values agree, and the day
 * somebody edits one of them they would silently stop agreeing.
 * check-en-translations fails on any such pair.
 *
 * The course NAME is not here: it is an interface string that already goes
 * through the i18n tables, and a second translation of it would fight the
 * first. The tagline underneath it is course text, so it belongs here.
 */
export const ZYCIE_W_POLSCE_EN: Record<string, string> = {
  // course
  "Historia, ustrój i codzienność — jak działa ten kraj.":
    "History, institutions and everyday life — how this country works.",
  // chapter
  "Symbole i wartości Rzeczypospolitej": "Symbols and values of the Republic",
  // pl-symbole
  "Symbole narodowe": "National symbols",
  "Dlaczego od tego zaczynamy: symbole widuje się codziennie — na urzędzie, na paszporcie, na koszulce reprezentacji — więc są najłatwiejszym wejściem w resztę.":
    "Why we start here: you see the symbols every day — at an office, in a passport, on the national team's shirt — so they are the easiest way into everything else.",
  "Godło": "The coat of arms",
  "Godłem Polski jest **orzeł biały** w złotej koronie, ze złotym dziobem i szponami, na **czerwonym** tle. Opisuje go **artykuł 28 Konstytucji**. Korona wróciła na głowę orła w **1990 roku**; w czasach PRL orzeł jej nie miał.":
    "Poland's coat of arms is a **white eagle** in a golden crown, with a golden beak and talons, on a **red** field. It is described in **article 28 of the Constitution**. The crown returned to the eagle's head in **1990**; in the communist period the eagle had none.",
  "Flaga i barwy": "The flag and the colours",
  "Flaga ma dwa poziome pasy: **biały u góry, czerwony u dołu**. Kolejność nie jest dowolna — biel jest zawsze nad czerwienią. **2 maja** obchodzi się Dzień Flagi Rzeczypospolitej Polskiej.":
    "The flag has two horizontal stripes: **white on top, red below**. The order is not optional — white is always above red. **2 May** is the Flag Day of the Republic of Poland.",
  "Hymn": "The anthem",
  "Mazurek Dąbrowskiego": "Dąbrowski's Mazurka",
  "Hymn państwowy, powstały w 1797 roku we Włoszech, w Legionach Polskich. Słowa napisał Józef Wybicki.":
    "The national anthem, written in 1797 in Italy, in the Polish Legions. The words are by Józef Wybicki.",
  "Pierwsze słowa": "The opening words",
  "„Jeszcze Polska nie zginęła, kiedy my żyjemy” — zdanie napisane wtedy, gdy państwa polskiego na mapie nie było.":
    "“Poland has not yet perished, so long as we still live” — a line written when the Polish state was not on the map at all.",
  "Który kolor znajduje się na fladze Polski u góry?": "Which colour is at the top of the Polish flag?",
  "Czerwony": "Red",
  "Biały": "White",
  "Kolejność jest dowolna": "The order is optional",
  "Złoty": "Gold",
  "Biały pas jest zawsze na górze, czerwony na dole. Odwrócona flaga to flaga Indonezji lub Monako.":
    "The white stripe is always on top and the red below. An upside-down flag is the flag of Indonesia or Monaco.",
  "Barwy i ich użycie": "The colours and how they are used",
  "Flagi używa się w dni świąt państwowych, na budynkach urzędów i podczas uroczystości. Wersję z **godłem** na białym pasie stosują polskie statki i placówki dyplomatyczne — nie wywiesza się jej na balkonie.":
    "The flag is flown on state holidays, on public buildings and at ceremonies. The version with the **coat of arms** on the white stripe is used by Polish ships and diplomatic missions — it does not go on a balcony.",
  "Skąd wzięły się barwy": "Where the colours come from",
  "Biel od orła, czerwień od pola herbowego. Ustalono je oficjalnie **7 lutego 1831 roku**, w czasie powstania listopadowego — barwy narodowe są więc młodsze niż sam herb o kilkaset lat.":
    "White from the eagle, red from the field of the arms. They were settled officially on **7 February 1831**, during the November Uprising — the national colours are therefore several centuries younger than the arms themselves.",
  "Kto napisał słowa hymnu Polski?": "Who wrote the words of the Polish anthem?",
  "Adam Mickiewicz": "Adam Mickiewicz",
  "Józef Wybicki": "Józef Wybicki",
  "Fryderyk Chopin": "Fryderyk Chopin",
  "Juliusz Słowacki": "Juliusz Słowacki",
  "Józef Wybicki, w 1797 roku we Włoszech. Mickiewicz i Słowacki to poeci romantyczni, Chopin kompozytor.":
    "Józef Wybicki, in 1797 in Italy. Mickiewicz and Słowacki were Romantic poets, Chopin a composer.",
  // pl-konstytucja
  "Konstytucja i wartości ustrojowe": "The Constitution and the values of the system",
  "Konstytucja z 1997 roku": "The Constitution of 1997",
  "Obowiązująca **Konstytucja Rzeczypospolitej Polskiej** została uchwalona **2 kwietnia 1997 roku** i przyjęta w referendum. Jest najwyższym prawem w państwie: żadna ustawa nie może być z nią sprzeczna.":
    "The **Constitution of the Republic of Poland** now in force was passed on **2 April 1997** and approved in a referendum. It is the supreme law in the state: no statute may contradict it.",
  "Zasady ustrojowe": "Founding principles",
  "Republika": "A republic",
  "Polska jest republiką — głowę państwa się wybiera, a nie dziedziczy.":
    "Poland is a republic — the head of state is elected, not inherited.",
  "Państwo prawa": "A state under the rule of law",
  "Organy władzy działają na podstawie i w granicach prawa, nie poza nim.":
    "Organs of power act on the basis of the law and within its limits, not outside it.",
  "Podział władz": "Separation of powers",
  "Ustawodawcza, wykonawcza i sądownicza są rozdzielone i wzajemnie się równoważą.":
    "The legislative, executive and judicial powers are separate and balance one another.",
  "Konstytucja to nie zbiór życzeń: sprzeczną z nią ustawę może uchylić **Trybunał Konstytucyjny**.":
    "The Constitution is not a list of wishes: a statute that contradicts it can be struck down by the **Constitutional Tribunal**.",
  "W którym roku uchwalono obowiązującą Konstytucję RP?":
    "In which year was the Constitution of the Republic of Poland now in force passed?",
  "1989": "1989",
  "1997": "1997",
  "2004": "2004",
  "1952": "1952",
  "2 kwietnia 1997 roku, potwierdzona w referendum. 1989 to rok wyborów czerwcowych, 2004 to wejście do Unii Europejskiej.":
    "2 April 1997, confirmed in a referendum. 1989 is the year of the June elections, 2004 the entry into the European Union.",
  "Jak zmienić Konstytucję": "How to change the Constitution",
  "Zmiana wymaga większości **2/3** w Sejmie i bezwzględnej w Senacie. Jeśli dotyczy rozdziałów o ustroju, wolnościach albo o samej procedurze zmiany, można zażądać jeszcze **referendum**.":
    "A change needs a **two-thirds** majority in the Sejm and an absolute one in the Senate. If it touches the chapters on the system of government, on freedoms or on the amendment procedure itself, a **referendum** can be demanded as well.",
  "Poprzednie konstytucje": "Earlier constitutions",
  "3 maja 1791": "3 May 1791",
  "Pierwsza w Europie, obowiązywała czternaście miesięcy.":
    "The first in Europe; it lasted fourteen months.",
  "Marcowa 1921": "The March Constitution of 1921",
  "Republika parlamentarna II Rzeczypospolitej.":
    "The parliamentary republic of the Second Polish Republic.",
  "Kwietniowa 1935": "The April Constitution of 1935",
  "Wzmocniła prezydenta kosztem parlamentu.": "It strengthened the president at parliament's expense.",
  "Z 1952": "The 1952 Constitution",
  "Konstytucja PRL, zmieniana wielokrotnie, obowiązywała do 1997 roku.":
    "The constitution of the People's Republic, amended many times, in force until 1997.",
  "Jakiej większości w Sejmie wymaga zmiana Konstytucji?":
    "What majority in the Sejm does changing the Constitution require?",
  "Zwykłej": "A simple one",
  "Bezwzględnej": "An absolute one",
  "Dwóch trzecich": "Two thirds",
  "Jednomyślności": "Unanimity",
  "Dwóch trzecich w Sejmie i bezwzględnej w Senacie — próg wyraźnie wyższy niż przy zwykłej ustawie.":
    "Two thirds in the Sejm and an absolute majority in the Senate — a threshold clearly higher than for an ordinary statute.",
  // pl-prawa
  "Prawa i wolności": "Rights and freedoms",
  "Rozdział II Konstytucji jest najdłuższy w całym dokumencie. To nie przypadek: państwo, które przez pół wieku ograniczało wolności, spisało je potem wyjątkowo dokładnie.":
    "Chapter II of the Constitution is the longest in the whole document. That is no accident: a state that restricted freedoms for half a century then wrote them down with unusual care.",
  "Wolności osobiste": "Personal freedoms",
  "Każdemu przysługuje **prawo do życia**, **nietykalność osobista** i **wolność sumienia**. Nikogo nie wolno zatrzymać bez podstawy prawnej, a zatrzymanego trzeba w ciągu **48 godzin** przekazać sądowi — inaczej musi zostać zwolniony.":
    "Everyone has the **right to life**, **personal inviolability** and **freedom of conscience**. Nobody may be detained without a legal basis, and a detained person must be brought before a court within **48 hours** — otherwise they must be released.",
  "Obowiązuje **domniemanie niewinności**: dopóki sąd nie orzeknie prawomocnie, człowiek jest niewinny. Kara może spotkać tylko za czyn, który był zabroniony **w chwili popełnienia**.":
    "The **presumption of innocence** applies: until a court rules with final effect, a person is innocent. Punishment can follow only for an act that was forbidden **at the time it was committed**.",
  "Wolności polityczne": "Political freedoms",
  "Wolność słowa": "Freedom of speech",
  "Wolno wyrażać poglądy i rozpowszechniać informacje. Cenzura prewencyjna jest zakazana.":
    "Views may be expressed and information spread. Preventive censorship is prohibited.",
  "Zgromadzenia": "Assembly",
  "Wolno organizować pokojowe zgromadzenia i w nich uczestniczyć.":
    "Peaceful assemblies may be organised and joined.",
  "Zrzeszanie się": "Association",
  "Wolno tworzyć partie, związki zawodowe i stowarzyszenia.":
    "Parties, trade unions and associations may be formed.",
  "Petycje": "Petitions",
  "Każdy może kierować wnioski i skargi do organów władzy publicznej.":
    "Anyone may send proposals and complaints to organs of public authority.",
  "Prawa socjalne": "Social rights",
  "Konstytucja mówi też o **prawie do nauki** — obowiązkowej i bezpłatnej w szkołach publicznych do 18. roku życia — o **ochronie zdrowia** i o **prawie do zabezpieczenia społecznego** na starość, w chorobie i przy bezrobociu.":
    "The Constitution also speaks of the **right to education** — compulsory and free in public schools up to the age of 18 — of **health protection** and of the **right to social security** in old age, in illness and in unemployment.",
  "Kto broni tych praw": "Who defends these rights",
  "**Rzecznik Praw Obywatelskich** stoi na straży wolności i praw człowieka. Można się do niego zwrócić bezpłatnie, także pisemnie. Osobno działa **Rzecznik Praw Dziecka**.":
    "The **Commissioner for Human Rights** guards freedoms and human rights. Anyone may approach the office free of charge, including in writing. There is a separate **Commissioner for Children's Rights**.",
  "Wolności nie są nieograniczone. Ograniczyć je może tylko **ustawa** i tylko wtedy, gdy jest to konieczne dla bezpieczeństwa, porządku publicznego, zdrowia albo wolności innych osób. Nigdy nie wolno naruszyć **istoty** danej wolności.":
    "Freedoms are not unlimited. Only a **statute** may restrict them, and only where that is necessary for security, public order, health or the freedom of others. The **essence** of a freedom may never be infringed.",
  "W ciągu ilu godzin zatrzymany musi zostać przekazany sądowi?":
    "Within how many hours must a detained person be brought before a court?",
  "24 godzin": "24 hours",
  "48 godzin": "48 hours",
  "72 godzin": "72 hours",
  "Nie ma takiego terminu": "There is no such deadline",
  "48 godzin. Sąd ma potem 24 godziny na decyzję o tymczasowym aresztowaniu — razem najwyżej 72.":
    "48 hours. The court then has 24 hours to decide on remand — 72 at the very most together.",
  "Skarga konstytucyjna": "The constitutional complaint",
  "Kto uważa, że jego wolność naruszył **przepis**, a nie sam wyrok, może po wyczerpaniu drogi sądowej złożyć **skargę konstytucyjną** do Trybunału Konstytucyjnego. Skargę sporządza adwokat albo radca prawny.":
    "Anyone who believes a **provision** infringed their freedom — rather than the judgment itself — may, once the court route is exhausted, lodge a **constitutional complaint** with the Constitutional Tribunal. The complaint is drawn up by an advocate or a legal counsel.",
  "Ochrona danych": "Data protection",
  "Od 2018 roku obowiązuje europejskie rozporządzenie **RODO**. Każdy ma prawo wiedzieć, jakie dane o nim zebrano, żądać ich poprawienia i — w wielu wypadkach — usunięcia. Nadzoruje to **Prezes Urzędu Ochrony Danych Osobowych**.":
    "Since 2018 the European **GDPR** regulation has applied. Everyone has the right to know what data has been collected about them, to demand its correction and — in many cases — its deletion. This is overseen by the **President of the Personal Data Protection Office**.",
  "Do kogo można się zwrócić bezpłatnie, gdy urząd narusza prawa obywatela?":
    "Whom can a citizen approach free of charge when an office infringes their rights?",
  "Do Rzecznika Praw Obywatelskich": "The Commissioner for Human Rights",
  "Do wojewody": "The voivode",
  "Do Prezydenta": "The President",
  "Do Najwyższej Izby Kontroli": "The Supreme Audit Office",
  "Rzecznik Praw Obywatelskich stoi na straży wolności i praw; wniosek jest wolny od opłat.":
    "The Commissioner for Human Rights guards freedoms and rights; an application is free of charge.",
  // pl-obowiazki
  "Obowiązki obywatela": "The duties of a citizen",
  // pl-obowiazki
  "Wierność i troska o dobro wspólne": "Loyalty and care for the common good",
  "Konstytucja wymienia obowiązki krótko, w kilku artykułach. Pierwszy z nich to **wierność Rzeczypospolitej** i troska o **dobro wspólne** — sformułowanie ogólne, ale to z niego wynikają pozostałe.":
    "The Constitution lists the duties briefly, in a few articles. The first is **loyalty to the Republic** and care for the **common good** — a general formulation, but the others follow from it.",
  "Obowiązki konkretne": "The specific duties",
  "Przestrzeganie prawa": "Obeying the law",
  "Obowiązuje każdego, kto znajduje się pod władzą Rzeczypospolitej — także cudzoziemca.":
    "It binds everyone under the authority of the Republic — a foreigner too.",
  "Ciężary publiczne": "Public burdens",
  "Podatki i inne świadczenia nakłada wyłącznie ustawa, nie rozporządzenie.":
    "Taxes and other levies are imposed by statute alone, not by regulation.",
  "Obrona ojczyzny": "Defence of the homeland",
  "Obowiązek obywateli polskich. Kto ze względu na przekonania nie może pełnić służby wojskowej, może zostać skierowany do służby zastępczej.":
    "A duty of Polish citizens. Anyone whose convictions prevent military service may be assigned to substitute service.",
  "Dbałość o środowisko": "Care for the environment",
  "Kto pogarsza stan środowiska, odpowiada za to.": "Whoever damages the environment answers for it.",
  "Obowiązek szkolny": "Compulsory schooling",
  "Nauka jest **obowiązkowa do 18. roku życia**. Odpowiadają za to rodzice albo opiekunowie; szkoła publiczna jest bezpłatna.":
    "Education is **compulsory up to the age of 18**. Parents or guardians are responsible for it; a public school is free.",
  "Obowiązkowa zasadnicza służba wojskowa została w Polsce **zawieszona w 2009 roku**. Obowiązek obrony pozostał w Konstytucji, ale pobór w czasie pokoju się nie odbywa.":
    "Compulsory basic military service was **suspended in Poland in 2009**. The duty of defence stayed in the Constitution, but there is no peacetime conscription.",
  "Do którego roku życia trwa w Polsce obowiązek nauki?":
    "Up to what age is education compulsory in Poland?",
  "Do 15. roku życia": "Up to the age of 15",
  "Do 16. roku życia": "Up to the age of 16",
  "Do 18. roku życia": "Up to the age of 18",
  "Do ukończenia szkoły średniej": "Until finishing secondary school",
  "Do 18. roku życia. Obowiązek szkolny — nauka w szkole podstawowej — kończy się wcześniej, ale obowiązek nauki trwa dłużej.":
    "Up to the age of 18. Compulsory schooling — attendance at primary school — ends earlier, but the duty to learn lasts longer.",
  "Podatki w praktyce": "Taxes in practice",
  "Zeznanie roczne **PIT** składa się do **30 kwietnia** za rok poprzedni. Można to zrobić przez internet; urząd skarbowy przygotowuje wstępnie wypełnione zeznanie, które wystarczy sprawdzić i zatwierdzić.":
    "The annual **PIT** return is filed by **30 April** for the previous year. It can be done online; the tax office prepares a pre-filled return that only needs checking and confirming.",
  "Udział w wyborach": "Taking part in elections",
  "Głosowanie jest **prawem, nie obowiązkiem** — nie ma kary za nieoddanie głosu. Prawo wybierania przysługuje od 18. roku życia, także obywatelom mieszkającym za granicą, w obwodach przy placówkach dyplomatycznych.":
    "Voting is a **right, not a duty** — there is no penalty for not casting a vote. The right to vote begins at 18, and it belongs to citizens living abroad as well, in districts attached to diplomatic missions.",
  "Do kiedy składa się roczne zeznanie podatkowe PIT?": "By when must the annual PIT tax return be filed?",
  "Do 31 stycznia": "By 31 January",
  "Do 30 kwietnia": "By 30 April",
  "Do 30 czerwca": "By 30 June",
  "Do 31 grudnia": "By 31 December",
  "Do 30 kwietnia za rok poprzedni.": "By 30 April for the previous year.",
  // chapter
  "Ustrój i instytucje": "The system and its institutions",
  // pl-sejm-senat
  "Sejm i Senat": "The Sejm and the Senate",
  "Dwie izby, dwie różne liczby i dwie różne role. Mylenie ich to najczęstsza pomyłka w rozmowie o polskiej polityce.":
    "Two chambers, two different numbers and two different roles. Mixing them up is the commonest slip in any conversation about Polish politics.",
  "Dwie izby parlamentu": "The two chambers of parliament",
  "Sejm": "The Sejm",
  "460 posłów, wybieranych na 4 lata. Izba pierwsza: to tutaj powstają i zapadają rozstrzygnięcia.":
    "460 deputies, elected for 4 years. The first chamber: this is where decisions are made and settled.",
  "Senat": "The Senate",
  "100 senatorów, również na 4 lata. Izba druga: poprawia, odrzuca albo przyjmuje ustawy Sejmu.":
    "100 senators, also for 4 years. The second chamber: it amends, rejects or accepts the Sejm's statutes.",
  "Kto może kandydować": "Who may stand",
  "Posłem może zostać obywatel, który ukończył **21 lat**; senatorem — **30 lat**. Głosować wolno od **18. roku życia**. Mandatu poselskiego nie można łączyć z senatorskim.":
    "A citizen who has turned **21** may become a deputy; a senator must be **30**. Voting is allowed from the age of **18**. A seat in the Sejm cannot be held together with one in the Senate.",
  "Jak powstaje ustawa": "How a statute is made",
  "Projekt trafia do Sejmu, który czyta go i głosuje. Przyjęty projekt idzie do **Senatu**: ten ma **30 dni**, żeby go przyjąć, odrzucić albo poprawić. Poprawki i odrzucenie Sejm może **odrzucić bezwzględną większością**. Na końcu ustawę podpisuje **Prezydent**.":
    "A bill goes to the Sejm, which reads it and votes. Once passed it goes to the **Senate**, which has **30 days** to accept, reject or amend it. The Sejm can **overturn amendments or a rejection by an absolute majority**. At the end the **President** signs the statute.",
  "Inicjatywę ustawodawczą mają posłowie, Senat, Prezydent, Rada Ministrów — a także **100 tysięcy obywateli**, którzy złożą podpisy pod projektem.":
    "The right to introduce legislation belongs to deputies, the Senate, the President and the Council of Ministers — and to **100,000 citizens** who sign a bill.",
  "Zgromadzenie Narodowe": "The National Assembly",
  "Sejm i Senat obradujące wspólnie tworzą **Zgromadzenie Narodowe**. Zbiera się rzadko: żeby odebrać przysięgę od Prezydenta, uznać go za trwale niezdolnego do sprawowania urzędu albo postawić przed Trybunałem Stanu.":
    "The Sejm and the Senate sitting together form the **National Assembly**. It meets rarely: to receive the President's oath, to declare the President permanently unable to serve, or to put the President before the Tribunal of State.",
  "Ilu posłów zasiada w Sejmie?": "How many deputies sit in the Sejm?",
  "100": "100",
  "230": "230",
  "460": "460",
  "560": "560",
  "460 posłów. 100 to liczba senatorów; razem obie izby liczą 560 osób.":
    "460 deputies. 100 is the number of senators; together the two chambers come to 560 people.",
  "Jak się głosuje": "How the voting works",
  "Do Sejmu wybiera się **proporcjonalnie**, z list w okręgach; mandaty dzieli się metodą **d'Hondta**, a partia musi przekroczyć próg **5 procent** (koalicja 8). Do Senatu głosuje się **większościowo**: w każdym ze stu okręgów wygrywa jeden kandydat.":
    "The Sejm is elected **proportionally**, from lists in constituencies; seats are shared out by the **d'Hondt** method, and a party must pass a **5 per cent** threshold (8 for a coalition). The Senate is elected by **first past the post**: in each of the hundred constituencies one candidate wins.",
  "Immunitet": "Immunity",
  "Posła ani senatora nie można pociągnąć do odpowiedzialności karnej bez zgody własnej izby. Immunitet chroni mandat, a nie osobę: izba może go **uchylić**.":
    "A deputy or a senator cannot be prosecuted without the consent of their own chamber. Immunity protects the seat, not the person: the chamber can **lift** it.",
  "Ilu senatorów liczy Senat?": "How many senators does the Senate have?",
  "100 senatorów, po jednym z każdego okręgu. 460 to liczba posłów.":
    "100 senators, one from each constituency. 460 is the number of deputies.",
  // pl-prezydent
  "Prezydent": "The President",
  "Wybór i kadencja": "Election and term",
  "Prezydenta wybierają obywatele w **wyborach powszechnych**, na **5 lat**, najwyżej **dwa razy**. Kandydat musi mieć ukończone **35 lat** i zebrać **100 tysięcy podpisów**. Wygrywa ten, kto uzyska ponad połowę głosów; jeśli nikt nie uzyska, po dwóch tygodniach odbywa się **druga tura** między dwoma najlepszymi.":
    "The President is chosen by the citizens in a **general election**, for **5 years**, and at most **twice**. A candidate must have turned **35** and collect **100,000 signatures**. Whoever gets more than half the votes wins; if nobody does, a **second round** between the top two is held a fortnight later.",
  "Co Prezydent może": "What the President can do",
  "Podpisać albo nie": "Sign, or not",
  "Ustawę podpisuje w ciągu 21 dni. Może ją zawetować albo skierować do Trybunału Konstytucyjnego.":
    "A statute is signed within 21 days. It can be vetoed or sent to the Constitutional Tribunal.",
  "Weto": "The veto",
  "Weto Sejm odrzuca większością 3/5 głosów. Ustawy skierowanej do Trybunału zawetować już nie można.":
    "The Sejm overrides a veto by a 3/5 majority. A statute already sent to the Tribunal can no longer be vetoed.",
  "Powołania": "Appointments",
  "Powołuje Prezesa Rady Ministrów, sędziów na wniosek Krajowej Rady Sądownictwa i ratyfikuje umowy międzynarodowe.":
    "The President appoints the Prime Minister, appoints judges on the motion of the National Council of the Judiciary, and ratifies international agreements.",
  "Zwierzchnictwo": "Command",
  "Jest najwyższym zwierzchnikiem Sił Zbrojnych; w czasie pokoju sprawuje je przez Ministra Obrony Narodowej.":
    "The President is the supreme commander of the Armed Forces; in peacetime this is exercised through the Minister of National Defence.",
  "Kontrasygnata": "Countersignature",
  "Większość aktów urzędowych Prezydenta wymaga **podpisu Prezesa Rady Ministrów**, który bierze za nie odpowiedzialność przed Sejmem. Konstytucja wylicza jednak **prerogatywy** — akty, których kontrasygnata nie dotyczy, na przykład prawo łaski, zarządzenie wyborów czy nadanie obywatelstwa.":
    "Most of the President's official acts require the **signature of the Prime Minister**, who then answers for them before the Sejm. The Constitution does list **prerogatives**, though — acts that need no countersignature, such as the power of pardon, calling elections and granting citizenship.",
  "Prezydent nie kieruje rządem. Politykę bieżącą prowadzi **Rada Ministrów**; Prezydent reprezentuje państwo i stoi na straży Konstytucji.":
    "The President does not run the government. Day-to-day policy is led by the **Council of Ministers**; the President represents the state and guards the Constitution.",
  "Na ile lat wybiera się Prezydenta Rzeczypospolitej?":
    "For how many years is the President of the Republic elected?",
  "4 lata": "4 years",
  "5 lat": "5 years",
  "6 lat": "6 years",
  "7 lat": "7 years",
  "5 lat, najwyżej dwie kadencje. 4 lata trwa kadencja Sejmu i Senatu.":
    "5 years, and at most two terms. The Sejm and the Senate serve 4-year terms.",
  "Gdy Prezydenta zabraknie": "When there is no President",
  "Jeśli Prezydent nie może sprawować urzędu, zastępuje go **Marszałek Sejmu**, a gdyby i on nie mógł — Marszałek Senatu. Tak stało się w kwietniu 2010 roku po katastrofie smoleńskiej.":
    "If the President cannot serve, the **Marshal of the Sejm** takes over, and if they cannot either, the Marshal of the Senate. That happened in April 2010 after the Smolensk crash.",
  "Rezydencja i przysięga": "Residence and oath",
  "Siedzibą Prezydenta jest **Pałac Prezydencki** w Warszawie. Urząd obejmuje po złożeniu przysięgi przed **Zgromadzeniem Narodowym**.":
    "The President's seat is the **Presidential Palace** in Warsaw. The office is taken up after swearing an oath before the **National Assembly**.",
  "Jaką większością Sejm odrzuca weto Prezydenta?":
    "By what majority does the Sejm override the President's veto?",
  "Zwykłą": "A simple one",
  "Bezwzględną": "An absolute one",
  "Trzech piątych": "Three fifths",
  "Trzech piątych głosów. Dwie trzecie potrzebne są do zmiany Konstytucji.":
    "Three fifths of the votes. Two thirds is what changing the Constitution needs.",
  // pl-rzad
  "Rada Ministrów": "The Council of Ministers",
  "Kto rządzi na co dzień": "Who governs day to day",
  "**Rada Ministrów** — czyli rząd — prowadzi politykę wewnętrzną i zagraniczną państwa. Na jej czele stoi **Prezes Rady Ministrów**, w mowie potocznej premier. W skład wchodzą ministrowie kierujący działami administracji.":
    "The **Council of Ministers** — the government — conducts the state's domestic and foreign policy. At its head stands the **President of the Council of Ministers**, in everyday speech the prime minister. It is made up of the ministers who run the branches of administration.",
  "Jak powstaje rząd": "How a government is formed",
  "Prezydent desygnuje premiera, ten proponuje skład rządu, a Sejm udziela mu **wotum zaufania** bezwzględną większością. Gdy się nie uda, inicjatywę przejmuje Sejm — Konstytucja przewiduje **trzy kolejne kroki**, żeby państwo nie zostało bez rządu.":
    "The President designates a prime minister, who proposes a cabinet, and the Sejm gives it a **vote of confidence** by an absolute majority. If that fails, the initiative passes to the Sejm — the Constitution provides **three successive steps**, so that the state is never left without a government.",
  "Jak rząd upada": "How a government falls",
  "**Konstruktywne wotum nieufności**: Sejm może odwołać rząd tylko wtedy, gdy jednocześnie wskaże nowego premiera. Nie da się obalić rządu, nie mając następcy — to zabezpieczenie wzięte z niemieckiej Ustawy Zasadniczej.":
    "**The constructive vote of no confidence**: the Sejm can remove a government only if it names a new prime minister at the same time. A government cannot be brought down without a successor — a safeguard taken from the German Basic Law.",
  "Kto pilnuje rządu": "Who keeps watch on the government",
  "Uchwala budżet, pyta w interpelacjach, odwołuje ministrów.":
    "It passes the budget, asks questions in interpellations, and dismisses ministers.",
  "Najwyższa Izba Kontroli": "The Supreme Audit Office",
  "Bada wydatki państwa i podlega Sejmowi, nie rządowi.":
    "It examines state spending and answers to the Sejm, not to the government.",
  "Trybunał Stanu": "The Tribunal of State",
  "Sądzi najwyższych urzędników za naruszenie Konstytucji lub ustawy.":
    "It tries the highest officials for breaching the Constitution or a statute.",
  "Czego wymaga konstruktywne wotum nieufności?": "What does a constructive vote of no confidence require?",
  "Zgody Prezydenta": "The President's consent",
  "Jednoczesnego wskazania nowego premiera": "Naming a new prime minister at the same time",
  "Rozwiązania Sejmu": "Dissolving the Sejm",
  "Większości 2/3 głosów": "A 2/3 majority of votes",
  "Sejm musi wskazać następcę. Bez tego wniosek jest bezskuteczny — państwo nie zostaje bez rządu.":
    "The Sejm must name a successor. Without that the motion has no effect — the state is not left without a government.",
  "Budżet": "The budget",
  "Rada Ministrów przygotowuje **ustawę budżetową** i przedkłada ją Sejmowi. Jeśli parlament nie uchwali jej w ciągu **czterech miesięcy**, Prezydent może skrócić kadencję Sejmu.":
    "The Council of Ministers prepares the **budget statute** and lays it before the Sejm. If parliament does not pass it within **four months**, the President may shorten the Sejm's term.",
  "Ministerstwa": "Ministries",
  "Każdy minister kieruje **działem administracji rządowej** — finansami, zdrowiem, edukacją, obroną. Podział działów określa ustawa, a nie sam premier; liczba ministerstw bywa różna w kolejnych rządach.":
    "Each minister runs a **branch of government administration** — finance, health, education, defence. The division into branches is set by statute, not by the prime minister; the number of ministries varies from one government to the next.",
  "Kto przygotowuje projekt ustawy budżetowej?": "Who prepares the draft budget statute?",
  "Narodowy Bank Polski": "The National Bank of Poland",
  "Rada Ministrów. Sejm budżet uchwala, ale sam go nie pisze.":
    "The Council of Ministers. The Sejm passes the budget but does not write it.",
  // pl-sady
  "Sądy i Trybunały": "Courts and Tribunals",
  "Trzy szczeble sądów": "Three tiers of courts",
  "Sprawy zaczynają się w **sądzie rejonowym**, odwołania trafiają do **okręgowego**, a dalej do **apelacyjnego**. Na szczycie stoi **Sąd Najwyższy**, który czuwa nad jednolitością orzecznictwa — nie rozpatruje spraw od początku.":
    "Cases begin in a **district court**, appeals go to a **regional court** and from there to a **court of appeal**. At the top stands the **Supreme Court**, which watches over the consistency of case law — it does not hear cases from the start.",
  "Sądy administracyjne": "Administrative courts",
  "Osobną drogą idą spory z urzędami. Skargę na decyzję rozpatruje **wojewódzki sąd administracyjny**, a skargę kasacyjną — **Naczelny Sąd Administracyjny**.":
    "Disputes with public offices take a separate route. A complaint against a decision is heard by a **voivodeship administrative court**, and a cassation complaint by the **Supreme Administrative Court**.",
  "Dwa trybunały": "The two tribunals",
  "Trybunał Konstytucyjny": "The Constitutional Tribunal",
  // pl-sady
  "Orzeka, czy ustawa jest zgodna z Konstytucją. Może to zbadać na skargę konstytucyjną obywatela.":
    "It rules on whether a statute agrees with the Constitution. It can examine that on a citizen's constitutional complaint.",
  "Sądzi Prezydenta, premiera i ministrów za delikty konstytucyjne — nie za zwykłe przestępstwa.":
    "It tries the President, the prime minister and ministers for constitutional offences — not for ordinary crimes.",
  "Zasady procesu": "The principles of procedure",
  "Postępowanie jest **dwuinstancyjne**: od wyroku przysługuje odwołanie. Rozprawy są **jawne**, a wyrok ogłasza się publicznie. Sędziowie są **niezawiśli** i podlegają tylko Konstytucji oraz ustawom.":
    "Proceedings run through **two instances**: a judgment can be appealed. Hearings are **public**, and the judgment is announced publicly. Judges are **independent** and subject only to the Constitution and to statute.",
  "Sądy powszechne rozstrzygają spory między ludźmi i sądzą przestępstwa. **Trybunał Konstytucyjny nie jest sądem odwoławczym** — nie zmieni wyroku w sprawie, przygląda się przepisowi.":
    "The ordinary courts settle disputes between people and try crimes. **The Constitutional Tribunal is not a court of appeal** — it will not change a judgment in a case; it looks at the provision.",
  "Który organ orzeka o zgodności ustawy z Konstytucją?":
    "Which body rules on whether a statute agrees with the Constitution?",
  "Sąd Najwyższy": "The Supreme Court",
  "Naczelny Sąd Administracyjny": "The Supreme Administrative Court",
  "Trybunał Konstytucyjny. Sąd Najwyższy czuwa nad orzecznictwem sądów, Trybunał Stanu sądzi urzędników.":
    "The Constitutional Tribunal. The Supreme Court watches over the case law of the courts, and the Tribunal of State tries officials.",
  "Ława przysięgłych? Nie tutaj": "A jury? Not here",
  "Polska nie ma ławy przysięgłych. W części spraw obok sędziego zawodowego orzekają **ławnicy** — obywatele wybierani przez rady gmin, którzy mają przy wyrokowaniu taki sam głos jak sędzia.":
    "Poland has no jury. In some cases **lay judges** sit alongside the professional judge — citizens chosen by municipal councils, whose vote on the verdict counts the same as the judge's.",
  "Prokuratura i adwokatura": "The prosecution service and the bar",
  "Prokurator": "The prosecutor",
  "Prowadzi postępowanie przygotowawcze i oskarża przed sądem.":
    "Conducts the preparatory proceedings and brings the charge in court.",
  "Adwokat i radca prawny": "Advocate and legal counsel",
  "Bronią i reprezentują. Kto nie ma środków, może dostać obrońcę z urzędu.":
    "They defend and represent. Anyone without means can be given a court-appointed defender.",
  "Komornik": "The bailiff",
  "Wykonuje prawomocne orzeczenia sądu, gdy dłużnik ich nie wypełnia.":
    "Enforces final court rulings when the debtor does not comply with them.",
  "Kto orzeka w polskim sądzie obok sędziego zawodowego w części spraw?":
    "Who rules alongside the professional judge in some Polish court cases?",
  "Ława przysięgłych": "A jury",
  "Ławnicy": "Lay judges",
  "Wojewoda": "The voivode",
  "Ławnicy, wybierani przez rady gmin. Ławy przysięgłych w Polsce nie ma.":
    "Lay judges, chosen by municipal councils. Poland has no jury.",
  // pl-samorzad
  "Samorząd terytorialny": "Local government",
  "Trzy szczeble": "Three tiers",
  "Polska dzieli się na **16 województw**, te na **powiaty**, a powiaty na **gminy**. Gmina jest szczeblem podstawowym: to ona odpowiada za sprawy, których nie zastrzeżono dla innych.":
    "Poland is divided into **16 voivodeships**, those into **counties**, and counties into **municipalities**. The municipality is the basic tier: it takes care of everything not reserved for the others.",
  "Kto czym kieruje": "Who runs what",
  "Gmina": "The municipality",
  "Rada gminy i wójt, w mieście burmistrz albo prezydent miasta. Szkoły podstawowe, drogi lokalne, woda, śmieci.":
    "A municipal council and a wójt, or in a town a mayor or a city president. Primary schools, local roads, water, refuse.",
  "Powiat": "The county",
  "Rada powiatu i starosta. Szpitale powiatowe, szkoły średnie, prawa jazdy, rejestracja pojazdów.":
    "A county council and a starosta. County hospitals, secondary schools, driving licences, vehicle registration.",
  "Województwo": "The voivodeship",
  "Sejmik i marszałek. Rozwój regionu, drogi wojewódzkie, fundusze europejskie.":
    "A regional assembly and a marshal. Regional development, voivodeship roads, European funds.",
  "Wojewoda a marszałek": "Voivode and marshal",
  "W województwie są **dwie** władze i łatwo je pomylić. **Marszałka** wybiera sejmik — to samorząd. **Wojewodę** powołuje premier — to przedstawiciel rządu w terenie, który nadzoruje legalność działań samorządu.":
    "A voivodeship has **two** authorities and they are easy to confuse. The **marshal** is chosen by the regional assembly — that is local government. The **voivode** is appointed by the prime minister — the government's representative on the ground, who supervises whether local government acts lawfully.",
  "Wybory samorządowe": "Local elections",
  "Radnych, wójtów, burmistrzów i prezydentów miast wybiera się co **5 lat**. Mieszkańcy mogą też odwołać wójta albo radę w **referendum lokalnym**.":
    "Councillors, wójts, mayors and city presidents are elected every **5 years**. Residents can also remove a wójt or a council in a **local referendum**.",
  "Kto powołuje wojewodę?": "Who appoints the voivode?",
  "Sejmik województwa": "The voivodeship assembly",
  "Prezes Rady Ministrów": "The Prime Minister",
  "Prezydent Rzeczypospolitej": "The President of the Republic",
  "Mieszkańcy w wyborach": "The residents, in an election",
  "Premier. Wojewoda reprezentuje rząd; marszałka wybiera sejmik i to on kieruje samorządem województwa.":
    "The prime minister. The voivode represents the government; the marshal is chosen by the regional assembly and runs the voivodeship's local government.",
  "Skąd samorząd bierze pieniądze": "Where local government gets its money",
  "Gminy mają **dochody własne** — podatek od nieruchomości, opłaty lokalne — oraz **udział w podatkach** PIT i CIT. Do tego dochodzą subwencje i dotacje z budżetu państwa, między innymi oświatowa.":
    "Municipalities have **their own revenue** — property tax, local charges — and a **share of the PIT and CIT** taxes. On top of that come subsidies and grants from the state budget, among them the education subsidy.",
  "Sołectwa i dzielnice": "Village councils and districts",
  "Wewnątrz gminy działają jednostki pomocnicze: na wsi **sołectwa** z sołtysem, w mieście **dzielnice** albo **osiedla**. Część gmin oddaje mieszkańcom do rozdysponowania **budżet obywatelski**.":
    "Inside a municipality there are auxiliary units: in the countryside **village councils** with a sołtys, in a town **districts** or **estates**. Some municipalities hand residents a **participatory budget** to spend.",
  "Który szczebel samorządu odpowiada za szkoły podstawowe?":
    "Which tier of local government is responsible for primary schools?",
  "Państwo": "The state",
  "Gmina. Powiat prowadzi szkoły średnie, województwo zajmuje się rozwojem regionu.":
    "The municipality. The county runs secondary schools, and the voivodeship deals with regional development.",
  // chapter
  "Historia Polski": "The history of Poland",
  // pl-poczatki
  "Od Mieszka I do Rzeczypospolitej Obojga Narodów": "From Mieszko I to the Polish-Lithuanian Commonwealth",
  "Sześćset lat w jednej lekcji — nie po to, żeby je zapamiętać, tylko żeby wiedzieć, skąd biorą się nazwy, które wracają później: Piastowie, Jagiellonowie, Rzeczpospolita.":
    "Six hundred years in one lesson — not to memorise them, but to know where the names that keep coming back come from: the Piasts, the Jagiellons, the Commonwealth.",
  "Chrzest i pierwsze państwo": "The baptism and the first state",
  "**Mieszko I** przyjmuje chrzest w **966 roku**. Jego syn **Bolesław Chrobry** koronuje się w **1025** na pierwszego króla Polski. Dynastia nazywa się **Piastami** i rządzi do 1370 roku.":
    "**Mieszko I** was baptised in **966**. His son **Bolesław the Brave** was crowned in **1025** as the first king of Poland. The dynasty is called the **Piasts** and it ruled until 1370.",
  "Rozbicie i zjednoczenie": "Fragmentation and reunion",
  "Po śmierci Bolesława Krzywoustego w 1138 roku kraj rozpada się na dzielnice na blisko dwieście lat. Scala go dopiero **Władysław Łokietek**, a jego syn **Kazimierz Wielki** (1333–1370) rozbudowuje państwo — powiada się o nim, że „zastał Polskę drewnianą, a zostawił murowaną”. W **1364** zakłada uniwersytet w Krakowie.":
    "After the death of Bolesław the Wrymouth in 1138 the country broke into duchies for nearly two hundred years. It was **Władysław the Elbow-high** who put it back together, and his son **Casimir the Great** (1333–1370) built the state up — it is said of him that he found a Poland of wood and left one of brick. In **1364** he founded the university in Kraków.",
  "Unia z Litwą": "The union with Lithuania",
  "1385 — unia w Krewie": "1385 — the Union of Krewo",
  "Wielki książę litewski Jagiełło żeni się z królową Jadwigą, przyjmuje chrzest i zostaje królem Polski.":
    "Grand Duke Jogaila of Lithuania marries Queen Jadwiga, is baptised and becomes king of Poland.",
  "1410 — Grunwald": "1410 — Grunwald",
  "Wojska polsko-litewskie pokonują zakon krzyżacki w jednej z największych bitew średniowiecznej Europy.":
    "Polish-Lithuanian forces defeat the Teutonic Order in one of the largest battles of medieval Europe.",
  "1569 — unia lubelska": "1569 — the Union of Lublin",
  "Polska i Litwa tworzą jedno państwo: Rzeczpospolitą Obojga Narodów, ze wspólnym sejmem i wspólnym królem.":
    "Poland and Lithuania form one state: the Polish-Lithuanian Commonwealth, with a common parliament and a common king.",
  "Szlachecka republika": "A republic of nobles",
  "Rzeczpospolita jest monarchią, ale króla **wybiera szlachta** w wolnej elekcji. Sejm decyduje o podatkach i wojnie. Zasada **liberum veto** pozwala jednemu posłowi zerwać obrady — z czasem paraliżuje państwo.":
    "The Commonwealth is a monarchy, but the king is **elected by the nobility** in a free election. The parliament decides on taxes and war. The **liberum veto** rule lets a single deputy break off a session — in time it paralysed the state.",
  "W którym roku odbyła się bitwa pod Grunwaldem?": "In what year was the Battle of Grunwald fought?",
  "1385": "1385",
  "1410": "1410",
  "1569": "1569",
  "1683": "1683",
  "1410. 1385 to unia w Krewie, 1569 unia lubelska, 1683 odsiecz wiedeńska.":
    "1410. 1385 is the Union of Krewo, 1569 the Union of Lublin, 1683 the relief of Vienna.",
  "Gniezno i Kraków": "Gniezno and Kraków",
  "Pierwszą stolicą było **Gniezno**, gdzie w **1000 roku** cesarz Otton III spotkał się z Bolesławem Chrobrym. Od XI wieku ośrodkiem władzy stał się **Kraków**, na Wawelu koronowano królów aż do XVIII wieku.":
    "The first capital was **Gniezno**, where in **1000** the emperor Otto III met Bolesław the Brave. From the 11th century **Kraków** became the seat of power, and kings were crowned at Wawel until the 18th century.",
  "Złoty wiek": "The golden age",
  "XVI stulecie nazywa się **złotym wiekiem**: rozkwitają nauka i literatura, **Mikołaj Kopernik** ogłasza teorię heliocentryczną, a **Jan Kochanowski** pisze po polsku zamiast po łacinie.":
    "The 16th century is called the **golden age**: learning and literature flourished, **Nicolaus Copernicus** announced the heliocentric theory, and **Jan Kochanowski** wrote in Polish instead of Latin.",
  "Który uniwersytet założono w Krakowie w 1364 roku?": "Which university was founded in Kraków in 1364?",
  "Uniwersytet Warszawski": "The University of Warsaw",
  "Uniwersytet Jagielloński": "The Jagiellonian University",
  "Uniwersytet Wrocławski": "The University of Wrocław",
  "Politechnika Gdańska": "Gdańsk University of Technology",
  "Uniwersytet Jagielloński, jedna z najstarszych uczelni Europy. Uniwersytet Warszawski powstał w 1816 roku.":
    "The Jagiellonian University, one of the oldest in Europe. The University of Warsaw was founded in 1816.",
  // pl-rozbiory
  "Rozbiory i walka o niepodległość": "The partitions and the struggle for independence",
  "Trzy rozbiory": "The three partitions",
  "Osłabioną Rzeczpospolitą dzielą między siebie **Rosja, Prusy i Austria**: w **1772**, **1793** i **1795** roku. Po trzecim rozbiorze państwo polskie **znika z mapy na 123 lata**.":
    "**Russia, Prussia and Austria** divided the weakened Commonwealth between them: in **1772**, **1793** and **1795**. After the third partition the Polish state **vanished from the map for 123 years**.",
  "Próba ratunku": "An attempt at rescue",
  "Cztery lata przed końcem Sejm Czteroletni uchwala **Konstytucję 3 maja 1791** — pierwszą w Europie i drugą na świecie nowoczesną konstytucję spisaną. Znosi liberum veto i wolną elekcję. Sąsiedzi widzą w niej zagrożenie i wkraczają zbrojnie.":
    "Four years before the end, the Four-Year Sejm passed the **Constitution of 3 May 1791** — the first in Europe and the second written modern constitution in the world. It abolished the liberum veto and free election. The neighbours saw a threat in it and moved in with troops.",
  "Powstania": "The uprisings",
  "1794 — insurekcja kościuszkowska": "1794 — the Kościuszko Uprising",
  "Tadeusz Kościuszko prowadzi ostatnią próbę obrony Rzeczypospolitej. Po klęsce następuje trzeci rozbiór.":
    "Tadeusz Kościuszko leads the last attempt to defend the Commonwealth. The third partition follows the defeat.",
  "1830 — powstanie listopadowe": "1830 — the November Uprising",
  "Wybucha w Warszawie przeciw Rosji. Po klęsce tysiące ludzi emigruje na Zachód.":
    "It breaks out in Warsaw against Russia. After the defeat thousands emigrate to the West.",
  "1863 — powstanie styczniowe": "1863 — the January Uprising",
  "Największe i najdłuższe. Po nim represje: rusyfikacja, konfiskaty, zsyłki na Sybir.":
    "The largest and the longest. Reprisals follow: Russification, confiscations, exile to Siberia.",
  "Naród bez państwa": "A nation without a state",
  "Przez sto dwadzieścia trzy lata polskość trwa w kulturze: w wierszach **Mickiewicza** i **Słowackiego**, w muzyce **Chopina**, w malarstwie **Matejki**. W 1903 roku **Maria Skłodowska-Curie** dostaje Nagrodę Nobla — pierwszą z dwóch.":
    "For a hundred and twenty-three years Polishness lived on in culture: in the verse of **Mickiewicz** and **Słowacki**, in the music of **Chopin**, in the painting of **Matejko**. In 1903 **Marie Skłodowska-Curie** received the Nobel Prize — the first of two.",
  "Ile lat Polski nie było na mapie Europy?": "For how many years was Poland absent from the map of Europe?",
  "50 lat": "50 years",
  "99 lat": "99 years",
  "123 lata": "123 years",
  "150 lat": "150 years",
  "123 lata — od trzeciego rozbioru w 1795 do odzyskania niepodległości w 1918.":
    "123 years — from the third partition in 1795 to regaining independence in 1918.",
  "Trzej zaborcy, trzy porządki": "Three partitioning powers, three orders",
  "Zabór rosyjski": "The Russian partition",
  "Największy. Po powstaniach nasilona rusyfikacja i zsyłki.":
    "The largest. After the uprisings, intensified Russification and exile.",
  "Zabór pruski": "The Prussian partition",
  "Silna germanizacja, ale i lepsza gospodarka oraz powszechna szkoła.":
    "Strong Germanisation, but also a better economy and universal schooling.",
  "Zabór austriacki": "The Austrian partition",
  "Galicja, uboga, lecz od 1867 roku z autonomią: polskie szkoły i sejm we Lwowie.":
    "Galicia, poor, but from 1867 with autonomy: Polish schools and a diet in Lwów.",
  "Praca zamiast powstania": "Work instead of uprising",
  "Po klęsce 1863 roku część działaczy odchodzi od zbrojnych zrywów na rzecz **pracy organicznej**: zakładania szkół, spółdzielni i czytelni. Spór między walką a pracą u podstaw przewija się przez cały wiek XIX.":
    "After the defeat of 1863 some activists turned from armed risings to **organic work**: founding schools, cooperatives and reading rooms. The argument between fighting and work at the grass roots runs through the whole 19th century.",
  "Które powstanie wybuchło w 1863 roku?": "Which uprising broke out in 1863?",
  "Listopadowe": "The November one",
  "Styczniowe": "The January one",
  "Warszawskie": "The Warsaw one",
  "Wielkopolskie": "The Greater Poland one",
  "Styczniowe. Listopadowe to 1830, wielkopolskie 1918, warszawskie 1944.":
    "The January Uprising. The November one was 1830, the Greater Poland one 1918, the Warsaw one 1944.",
  // pl-druga-rp
  "II Rzeczpospolita": "The Second Polish Republic",
  "11 listopada 1918": "11 November 1918",
  "Gdy trzy zaborcze mocarstwa przegrywają albo rozpadają się w I wojnie światowej, Polska wraca. **11 listopada 1918** Rada Regencyjna przekazuje **Józefowi Piłsudskiemu** władzę wojskową. Dzień ten jest dziś **Narodowym Świętem Niepodległości**.":
    "When the three partitioning powers lost or fell apart in the First World War, Poland came back. On **11 November 1918** the Regency Council handed military authority to **Józef Piłsudski**. That day is now the **National Independence Day**.",
  // pl-druga-rp
  "Granice trzeba było wywalczyć": "The borders had to be fought for",
  "Kształt państwa ustala się w walkach i plebiscytach: powstanie wielkopolskie, trzy powstania śląskie, wojna z Rosją bolszewicką. **Bitwa Warszawska w sierpniu 1920** zatrzymuje ofensywę na zachód — nazywa się ją „cudem nad Wisłą”.":
    "The shape of the state was settled in fighting and plebiscites: the Greater Poland Uprising, three Silesian Uprisings, the war with Bolshevik Russia. The **Battle of Warsaw in August 1920** halted the advance westward — it is called the Miracle on the Vistula.",
  "Państwo od zera": "A state from nothing",
  "Jedna waluta": "One currency",
  "Trzy systemy prawne, trzy koleje, cztery waluty. W 1924 roku reforma Grabskiego wprowadza złotego.":
    "Three legal systems, three railways, four currencies. In 1924 Grabski's reform brought in the złoty.",
  "Gdynia": "Gdynia",
  "Port budowany od podstaw od 1926 roku daje krajowi własne wyjście na Bałtyk.":
    "A port built from scratch from 1926 gave the country its own way out to the Baltic.",
  "Konstytucja marcowa": "The March Constitution",
  "1921 — republika parlamentarna. W 1935 zastępuje ją kwietniowa, wzmacniająca prezydenta.":
    "1921 — a parliamentary republic. In 1935 the April one replaced it, strengthening the president.",
  "Kraj wielu narodów": "A country of many peoples",
  "W II Rzeczypospolitej mieszkają Polacy, Ukraińcy, Żydzi, Białorusini, Niemcy i Litwini. Około **jednej trzeciej** mieszkańców to mniejszości narodowe — więcej niż dziś.":
    "The Second Republic was home to Poles, Ukrainians, Jews, Belarusians, Germans and Lithuanians. About **a third** of the population belonged to national minorities — more than today.",
  "Jak nazywa się bitwa z sierpnia 1920 roku, która zatrzymała ofensywę bolszewicką?":
    "What is the name of the battle of August 1920 that halted the Bolshevik advance?",
  "Bitwa pod Grunwaldem": "The Battle of Grunwald",
  "Bitwa Warszawska": "The Battle of Warsaw",
  "Bitwa pod Wiedniem": "The Battle of Vienna",
  "Bitwa nad Bzurą": "The Battle of the Bzura",
  "Bitwa Warszawska, zwana cudem nad Wisłą. Bzura to wrzesień 1939, Wiedeń 1683, Grunwald 1410.":
    "The Battle of Warsaw, called the Miracle on the Vistula. The Bzura was September 1939, Vienna 1683, Grunwald 1410.",
  "Zamach majowy": "The May Coup",
  "W **maju 1926** Piłsudski przeprowadza zamach stanu. Zaczyna się okres **sanacji** — rządów obozu piłsudczykowskiego, w których rola parlamentu maleje. Piłsudski umiera w 1935 roku.":
    "In **May 1926** Piłsudski carried out a coup. The period of **Sanacja** began — rule by the Piłsudski camp, in which parliament's role shrank. Piłsudski died in 1935.",
  "Kultura międzywojnia": "Culture between the wars",
  "Dwudziestolecie to czas **Tuwima**, **Witkacego** i **Gombrowicza**, kabaretu warszawskiego i pierwszego polskiego radia. W 1924 roku powstaje Polskie Radio, a filmy kręci się w Warszawie i Wilnie.":
    "The interwar decades were the time of **Tuwim**, **Witkacy** and **Gombrowicz**, of Warsaw cabaret and the first Polish radio. Polish Radio was founded in 1924, and films were made in Warsaw and Vilnius.",
  "Kto przeprowadził zamach majowy w 1926 roku?": "Who carried out the May Coup in 1926?",
  "Roman Dmowski": "Roman Dmowski",
  "Józef Piłsudski": "Józef Piłsudski",
  "Ignacy Paderewski": "Ignacy Paderewski",
  "Wincenty Witos": "Wincenty Witos",
  "Józef Piłsudski. Dmowski był jego głównym przeciwnikiem politycznym, Paderewski pianistą i premierem w 1919 roku.":
    "Józef Piłsudski. Dmowski was his main political opponent, Paderewski a pianist and prime minister in 1919.",
  // pl-wojna
  "II wojna światowa i okupacja": "The Second World War and the occupation",
  "Sześć lat, które zmieniły granice, ludność i krajobraz kraju bardziej niż cokolwiek wcześniej. Bez nich nie da się zrozumieć ani dzisiejszej mapy, ani dzisiejszych świąt.":
    "Six years that changed the country's borders, its people and its landscape more than anything before. Without them neither today's map nor today's holidays make sense.",
  "Wrzesień 1939": "September 1939",
  "**1 września 1939** Niemcy atakują Polskę — wojna zaczyna się od ostrzału **Westerplatte**. **17 września** od wschodu wkracza Związek Radziecki, wykonując tajny protokół paktu Ribbentrop–Mołotow. Państwo zostaje podzielone między dwóch okupantów.":
    "On **1 September 1939** Germany attacked Poland — the war began with the shelling of **Westerplatte**. On **17 September** the Soviet Union came in from the east, carrying out the secret protocol of the Molotov-Ribbentrop pact. The state was divided between two occupiers.",
  "Okupacja": "The occupation",
  "Niemcy prowadzą na ziemiach polskich **Zagładę**: w obozach, z których największym był **Auschwitz-Birkenau**, ginie około trzech milionów polskich Żydów. Sowieci wywożą setki tysięcy ludzi na wschód, a wiosną 1940 mordują w **Katyniu** i innych miejscach blisko 22 tysiące polskich oficerów.":
    "In the Polish lands the Germans carried out the **Holocaust**: about three million Polish Jews died, in camps of which the largest was **Auschwitz-Birkenau**. The Soviets deported hundreds of thousands eastwards, and in the spring of 1940 murdered nearly 22,000 Polish officers at **Katyn** and other places.",
  "Państwo Podziemne": "The Underground State",
  "Armia Krajowa": "The Home Army",
  "Największa podziemna armia okupowanej Europy, podległa rządowi w Londynie.":
    "The largest underground army in occupied Europe, answering to the government in London.",
  "Tajne nauczanie": "Clandestine teaching",
  "Szkoły i uniwersytety działały w mieszkaniach, mimo kary śmierci za nauczanie.":
    "Schools and universities ran in private flats, despite the death penalty for teaching.",
  "Powstanie w getcie": "The ghetto uprising",
  "Kwiecień 1943: zryw skazany z góry, podjęty, by zginąć z bronią w ręku.":
    "April 1943: a rising doomed from the start, taken up in order to die with a weapon in hand.",
  "Powstanie Warszawskie": "The Warsaw Uprising",
  "1 sierpnia 1944, 63 dni walki. Miasto zostaje po nim celowo zburzone.":
    "1 August 1944, 63 days of fighting. The city was deliberately destroyed afterwards.",
  "Bilans": "The reckoning",
  "Polska traci około **6 milionów** obywateli — blisko jedną piątą ludności. Granice przesuwają się na zachód: kraj traci Kresy Wschodnie, zyskuje ziemie nad Odrą i Bałtykiem. Miliony ludzi zostają przesiedlone.":
    "Poland lost about **6 million** citizens — close to a fifth of the population. The borders moved west: the country lost the Eastern Borderlands and gained the lands on the Oder and the Baltic. Millions of people were resettled.",
  "Którego dnia rozpoczęła się II wojna światowa atakiem na Polskę?":
    "On what day did the Second World War begin with the attack on Poland?",
  "17 września 1939": "17 September 1939",
  "1 września 1939": "1 September 1939",
  "1 sierpnia 1944": "1 August 1944",
  "8 maja 1945": "8 May 1945",
  "1 września 1939. 17 września to wkroczenie ZSRR, 1 sierpnia 1944 to Powstanie Warszawskie, 8 maja 1945 to koniec wojny w Europie.":
    "1 September 1939. 17 September is the Soviet entry, 1 August 1944 the Warsaw Uprising, 8 May 1945 the end of the war in Europe.",
  "Polacy poza krajem": "Poles abroad",
  "Rząd przeniósł się do **Londynu**. Polscy lotnicy walczyli w bitwie o Anglię — najskuteczniejszy był **dywizjon 303**. Żołnierze generała Andersa przeszli przez Bliski Wschód do Włoch i w 1944 roku zdobyli **Monte Cassino**.":
    "The government moved to **London**. Polish airmen fought in the Battle of Britain — the most effective was **No. 303 Squadron**. General Anders's soldiers came through the Middle East to Italy and took **Monte Cassino** in 1944.",
  "Ci, którzy ratowali": "Those who rescued",
  "Za pomoc Żydom groziła w okupowanej Polsce **kara śmierci**, także dla całej rodziny. Mimo to działała **Żegota** — Rada Pomocy Żydom. Polacy stanowią najliczniejszą grupę wśród odznaczonych tytułem **Sprawiedliwy wśród Narodów Świata**.":
    "In occupied Poland helping Jews carried the **death penalty**, for the whole family as well. Even so, **Żegota** — the Council to Aid Jews — was at work. Poles are the largest group among those honoured as **Righteous Among the Nations**.",
  "Jak nazywał się polski dywizjon myśliwski, który wsławił się w bitwie o Anglię?":
    "What was the Polish fighter squadron that made its name in the Battle of Britain called?",
  "Dywizjon 300": "No. 300 Squadron",
  "Dywizjon 303": "No. 303 Squadron",
  "Dywizjon 316": "No. 316 Squadron",
  "Dywizjon 1": "No. 1 Squadron",
  "Dywizjon 303 imienia Tadeusza Kościuszki, jeden z najskuteczniejszych w całej bitwie.":
    "No. 303 Squadron, named after Tadeusz Kościuszko, one of the most effective in the whole battle.",
  // pl-prl
  "PRL i Solidarność": "The People's Republic and Solidarity",
  "Polska Rzeczpospolita Ludowa": "The Polish People's Republic",
  "Po wojnie Polska znajduje się w strefie wpływów Związku Radzieckiego. Władzę sprawuje jedna partia — **PZPR**. Gospodarka jest planowana centralnie, prywatny przemysł znacjonalizowany, granica zachodnia potwierdzona dopiero układami z lat 1970 i 1990.":
    "After the war Poland lay in the Soviet Union's sphere of influence. Power was held by a single party, the **PZPR**. The economy was centrally planned, private industry nationalised, and the western border was only confirmed by treaties in 1970 and 1990.",
  "Bunty": "The revolts",
  "1956 — Poznań": "1956 — Poznań",
  "Robotniczy protest stłumiony wojskiem; zapoczątkował odwilż.":
    "A workers' protest put down with the army; it set off the thaw.",
  "1968 — Marzec": "1968 — March",
  "Protesty studenckie i antysemicka kampania, po której kraj opuszcza kilkanaście tysięcy osób.":
    "Student protests and an antisemitic campaign, after which more than ten thousand people left the country.",
  "1970 — Wybrzeże": "1970 — the Coast",
  "Strajki przeciw podwyżkom cen, stłumione strzałami do robotników.":
    "Strikes against price rises, put down by shooting at the workers.",
  "1976 — Radom i Ursus": "1976 — Radom and Ursus",
  "Kolejne strajki; powstaje Komitet Obrony Robotników.":
    "Further strikes; the Workers' Defence Committee was founded.",
  "Solidarność": "Solidarity",
  "W **sierpniu 1980** strajk w Stoczni Gdańskiej kończy się **porozumieniami sierpniowymi**. Powstaje **NSZZ „Solidarność”** — pierwszy niezależny związek zawodowy w bloku wschodnim, z **Lechem Wałęsą** na czele. W szczytowym momencie liczy blisko dziesięć milionów członków.":
    "In **August 1980** a strike at the Gdańsk Shipyard ended in the **August Agreements**. **NSZZ Solidarność** was founded — the first independent trade union in the Eastern bloc, with **Lech Wałęsa** at its head. At its peak it had close to ten million members.",
  "Stan wojenny": "Martial law",
  "**13 grudnia 1981** generał Wojciech Jaruzelski wprowadza **stan wojenny**. Solidarność zostaje zdelegalizowana, tysiące działaczy internowanych. Związek działa dalej w podziemiu.":
    "On **13 December 1981** General Wojciech Jaruzelski imposed **martial law**. Solidarity was banned and thousands of activists interned. The union went on working underground.",
  "Wybór **Karola Wojtyły** na papieża w **1978** i jego pielgrzymka do Polski rok później są dla wielu badaczy jednym z warunków tego, co stało się w 1980 roku.":
    "The election of **Karol Wojtyła** as pope in **1978** and his pilgrimage to Poland a year later are, for many historians, one of the conditions for what happened in 1980.",
  "W którym roku wprowadzono w Polsce stan wojenny?": "In which year was martial law imposed in Poland?",
  "1970": "1970",
  "1976": "1976",
  "1981": "1981",
  "13 grudnia 1981 roku. 1980 to powstanie Solidarności, 1989 to wybory czerwcowe.":
    "13 December 1981. 1980 is the founding of Solidarity, 1989 the June elections.",
  "Życie codzienne w PRL": "Everyday life in the People's Republic",
  "Gospodarka niedoboru oznaczała **kolejki** i **kartki** na mięso, cukier czy buty. Mieszkania przydzielała spółdzielnia, a na samochód czekało się latami. Paszport trzymał urząd i trzeba było o niego prosić.":
    "A shortage economy meant **queues** and **ration cards** for meat, sugar or shoes. Flats were allotted by a cooperative, and people waited years for a car. The passport was kept by an office and had to be asked for.",
  "Kultura mimo cenzury": "Culture despite censorship",
  "Mimo cenzury powstawały film, teatr i muzyka, które znano poza krajem: szkoła filmowa w Łodzi, plakat polski, jazz. Obok tego działał **drugi obieg** — książki drukowane i kolportowane nielegalnie.":
    "Despite censorship there was film, theatre and music known well beyond the country: the Łódź film school, the Polish poster, jazz. Alongside it ran the **second circulation** — books printed and passed round illegally.",
  "W którym roku powstała Solidarność?": "In which year was Solidarity founded?",
  "1980": "1980",
  "W sierpniu 1980 roku, po strajku w Stoczni Gdańskiej. W 1981 wprowadzono stan wojenny.":
    "In August 1980, after the strike at the Gdańsk Shipyard. Martial law was imposed in 1981.",
  // pl-trzecia-rp
  "1989 i III Rzeczpospolita": "1989 and the Third Republic",
  "Okrągły Stół": "The Round Table",
  "Wiosną **1989** władza i opozycja siadają do rozmów przy **Okrągłym Stole**. Ustalają częściowo wolne wybory: o 35 procent miejsc w Sejmie wolno ubiegać się każdemu, Senat jest wolny w całości.":
    "In the spring of **1989** the authorities and the opposition sat down to talks at the **Round Table**. They agreed on partly free elections: 35 per cent of the seats in the Sejm were open to anyone, and the Senate was free in full.",
  "4 czerwca 1989": "4 June 1989",
  "Solidarność zdobywa **wszystkie** mandaty, o które mogła się ubiegać w Sejmie, i **99 na 100** miejsc w Senacie. We wrześniu **Tadeusz Mazowiecki** zostaje pierwszym od czterdziestu lat niekomunistycznym premierem w bloku wschodnim.":
    "Solidarity won **every** seat it was allowed to contest in the Sejm, and **99 out of 100** in the Senate. In September **Tadeusz Mazowiecki** became the first non-communist prime minister in the Eastern bloc in forty years.",
  "Przemiany lat dziewięćdziesiątych": "The changes of the nineties",
  "Gospodarka": "The economy",
  "Plan Balcerowicza otwiera rynek. Ceny rosną, przedsiębiorstwa upadają, ale półki pustoszeć przestają.":
    "The Balcerowicz plan opened the market. Prices rose and firms went under, but the shelves stopped emptying.",
  "Samorząd": "Local government",
  "1990: pierwsze wolne wybory samorządowe i odrodzenie gmin.":
    "1990: the first free local elections and the rebirth of the municipalities.",
  "Konstytucja": "The Constitution",
  "1997: nowa ustawa zasadnicza zastępuje poprawianą konstytucję z 1952 roku.":
    "1997: a new basic law replaced the much-amended constitution of 1952.",
  "Reforma administracyjna": "The administrative reform",
  "1999: 49 województw zastąpiono 16, przywrócono powiaty.":
    "1999: 49 voivodeships were replaced by 16, and counties were brought back.",
  "Miejsce w Europie": "A place in Europe",
  "W **1999** Polska wstępuje do **NATO**, w **2004** do **Unii Europejskiej** — po referendum, w którym za opowiedziało się ponad trzy czwarte głosujących. Od **2007** należy do strefy Schengen; waluty euro nie przyjęła.":
    "In **1999** Poland joined **NATO** and in **2004** the **European Union** — after a referendum in which more than three quarters of those voting were in favour. Since **2007** it has been in the Schengen area; it has not adopted the euro.",
  "W którym roku Polska wstąpiła do Unii Europejskiej?": "In which year did Poland join the European Union?",
  "1999": "1999",
  "2007": "2007",
  "1 maja 2004. 1999 to wejście do NATO, 2007 to strefa Schengen.":
    "1 May 2004. 1999 is joining NATO, 2007 the Schengen area.",
  "Prezydenci III Rzeczypospolitej": "Presidents of the Third Republic",
  "Pierwszym prezydentem wybranym w wyborach powszechnych został w **1990 roku Lech Wałęsa**. Po nim urząd sprawowali kolejno Aleksander Kwaśniewski, Lech Kaczyński, Bronisław Komorowski i Andrzej Duda.":
    "The first president chosen in a general election was **Lech Wałęsa**, in **1990**. After him the office was held in turn by Aleksander Kwaśniewski, Lech Kaczyński, Bronisław Komorowski and Andrzej Duda.",
  "Katastrofa smoleńska": "The Smolensk crash",
  "**10 kwietnia 2010** w katastrofie samolotu pod Smoleńskiem zginęło 96 osób, w tym prezydent **Lech Kaczyński** z małżonką oraz wielu przedstawicieli władz. Delegacja leciała na obchody rocznicy zbrodni katyńskiej.":
    "On **10 April 2010** 96 people died in an air crash near Smolensk, among them President **Lech Kaczyński** and his wife and many senior officials. The delegation was flying to the commemoration of the Katyn massacre.",
  "Kto był pierwszym prezydentem wybranym w wyborach powszechnych po 1989 roku?":
    "Who was the first president chosen in a general election after 1989?",
  "Wojciech Jaruzelski": "Wojciech Jaruzelski",
  "Lech Wałęsa": "Lech Wałęsa",
  "Aleksander Kwaśniewski": "Aleksander Kwaśniewski",
  "Tadeusz Mazowiecki": "Tadeusz Mazowiecki",
  "Lech Wałęsa, w 1990 roku. Jaruzelskiego wybrało Zgromadzenie Narodowe w 1989, Mazowiecki był premierem.":
    "Lech Wałęsa, in 1990. Jaruzelski was chosen by the National Assembly in 1989, and Mazowiecki was prime minister.",
  // chapter
  "Geografia, gospodarka i Polska w świecie": "Geography, the economy and Poland in the world",
  // pl-geografia
  "Geografia i regiony": "Geography and the regions",
  "Położenie i sąsiedzi": "Position and neighbours",
  "Polska leży w Europie Środkowej i graniczy z **siedmioma** państwami: Niemcami, Czechami, Słowacją, Ukrainą, Białorusią, Litwą i Rosją (obwód kaliningradzki). Od północy ma dostęp do **Morza Bałtyckiego**.":
    "Poland lies in Central Europe and borders **seven** states: Germany, the Czech Republic, Slovakia, Ukraine, Belarus, Lithuania and Russia (the Kaliningrad exclave). To the north it has access to the **Baltic Sea**.",
  "Ukształtowanie terenu": "The lie of the land",
  "Kraj opada z południa na północ: **góry** na granicy południowej, **wyżyny** w środku, **niziny** na północy, **pojezierza** i wybrzeże. Najwyższy szczyt to **Rysy** w Tatrach — **2499 m n.p.m.** Powierzchnia kraju to około **312 700 km²**.":
    "The country falls away from south to north: **mountains** on the southern border, **uplands** in the middle, **lowlands** to the north, then the **lake districts** and the coast. The highest peak is **Rysy** in the Tatras — **2,499 m above sea level**. The country covers about **312,700 km²**.",
  "Rzeki i jeziora": "Rivers and lakes",
  "Wisła": "The Vistula",
  "Najdłuższa rzeka, 1047 km. Płynie z gór na północ, przez Kraków i Warszawę, do Bałtyku pod Gdańskiem.":
    "The longest river, 1,047 km. It runs from the mountains northwards, through Kraków and Warsaw, to the Baltic near Gdańsk.",
  "Odra": "The Oder",
  "Druga co do długości, na znacznym odcinku granica z Niemcami.":
    "The second longest, and for a good stretch the border with Germany.",
  "Mazury": "Masuria",
  "Kraina tysiąca jezior na północnym wschodzie; największe z nich to Śniardwy.":
    "The land of a thousand lakes in the north-east; the largest of them is Śniardwy.",
  "Puszcza Białowieska": "The Białowieża Forest",
  "Ostatni fragment pierwotnej puszczy niżowej Europy, wpisany na listę UNESCO. Żyją tu żubry.":
    "The last piece of Europe's primeval lowland forest, on the UNESCO list. Wisent live here.",
  "Krainy historyczne": "The historic lands",
  "Poza podziałem administracyjnym mówi się o krainach: **Mazowsze** wokół Warszawy, **Małopolska** wokół Krakowa, **Wielkopolska** wokół Poznania, **Śląsk** na południowym zachodzie, **Pomorze** nad morzem, **Mazury** i **Podlasie** na wschodzie.":
    "Beyond the administrative division people speak of the lands: **Mazovia** around Warsaw, **Lesser Poland** around Kraków, **Greater Poland** around Poznań, **Silesia** in the south-west, **Pomerania** on the sea, **Masuria** and **Podlasie** in the east.",
  "Jak nazywa się najwyższy szczyt Polski?": "What is the highest peak in Poland called?",
  "Śnieżka": "Śnieżka",
  "Rysy": "Rysy",
  "Giewont": "Giewont",
  "Babia Góra": "Babia Góra",
  "Rysy w Tatrach, 2499 m. Śnieżka to najwyższy szczyt Karkonoszy, Giewont jest niższy i leży nad Zakopanem.":
    "Rysy in the Tatras, 2,499 m. Śnieżka is the highest peak of the Karkonosze, and Giewont is lower and stands above Zakopane.",
  "Klimat": "Climate",
  "Klimat jest **umiarkowany przejściowy**: między morskim z zachodu a kontynentalnym ze wschodu. Dlatego pogoda bywa zmienna, a zimy raz łagodne, raz mroźne. Występują wszystkie **cztery pory roku**.":
    "The climate is **temperate transitional**: between the maritime one from the west and the continental one from the east. That is why the weather can change quickly and winters are mild one year and freezing the next. All **four seasons** occur.",
  "Parki narodowe": "National parks",
  "Jest ich **23**. Najstarsze to Białowieski i Pieniński, najwyżej położony — **Tatrzański**. Nad morzem leży Słowiński z ruchomymi wydmami, które przesuwają się o kilka metrów rocznie.":
    "There are **23**. The oldest are the Białowieża and Pieniny parks, and the highest is the **Tatra** one. On the coast lies Słowiński, with shifting dunes that move several metres a year.",
  "Która rzeka jest najdłuższa w Polsce?": "Which river is the longest in Poland?",
  "Warta": "The Warta",
  "Bug": "The Bug",
  "Wisła, 1047 km. Odra jest druga, Warta jest dopływem Odry.":
    "The Vistula, 1,047 km. The Oder is second, and the Warta is a tributary of the Oder.",
  // pl-miasta
  "Podział administracyjny i miasta": "Administrative divisions and cities",
  "Szesnaście województw": "Sixteen voivodeships",
  "Od reformy z **1999 roku** kraj dzieli się na **16 województw**. Wcześniej było ich 49. Każde ma stolicę — a dwa z nich mają po dwie: w kujawsko-pomorskim sejmik obraduje w Toruniu, a wojewoda urzęduje w Bydgoszczy; w lubuskim podobnie dzielą się Zielona Góra i Gorzów Wielkopolski.":
    "Since the reform of **1999** the country has been divided into **16 voivodeships**. Before that there were 49. Each has a capital — and two of them have two: in Kuyavia-Pomerania the assembly sits in Toruń while the voivode's office is in Bydgoszcz; in Lubusz, Zielona Góra and Gorzów Wielkopolski divide it the same way.",
  "Największe miasta": "The largest cities",
  "Warszawa": "Warsaw",
  "Stolica od 1596 roku, około 1,8 miliona mieszkańców. Siedziba Sejmu, Senatu, Prezydenta i rządu.":
    "The capital since 1596, about 1.8 million people. Seat of the Sejm, the Senate, the President and the government.",
  "Kraków": "Kraków",
  "Dawna stolica i miejsce koronacji królów. Uniwersytet Jagielloński działa od 1364 roku.":
    "The former capital and the place where kings were crowned. The Jagiellonian University has been running since 1364.",
  "Łódź, Wrocław, Poznań": "Łódź, Wrocław, Poznań",
  "Kolejne co do wielkości. Wrocław leży nad Odrą, Poznań nad Wartą.":
    "The next in size. Wrocław stands on the Oder, Poznań on the Warta.",
  "Gdańsk": "Gdańsk",
  "Główny port, miasto porozumień sierpniowych i początku Solidarności.":
    "The main port, the city of the August Agreements and of the beginning of Solidarity.",
  "Ludność": "Population",
  "W Polsce mieszka około **37–38 milionów** osób. Kraj jest dziś **jednolity narodowościowo** — inaczej niż przed wojną, gdy jedną trzecią mieszkańców stanowiły mniejszości. Uznanych mniejszości narodowych i etnicznych jest **dziewięć i cztery**, a językiem regionalnym jest **kaszubski**.":
    "About **37–38 million** people live in Poland. The country is **nationally homogeneous** today — unlike before the war, when a third of its inhabitants belonged to minorities. There are **nine** recognised national minorities and **four** ethnic ones, and the regional language is **Kashubian**.",
  "Stolicą Polski nie zawsze była Warszawa. Najpierw było **Gniezno**, potem przez pół tysiąclecia **Kraków**; przeniesienie dworu do Warszawy nastąpiło za Zygmunta III Wazy pod koniec XVI wieku.":
    "Warsaw has not always been the capital of Poland. First came **Gniezno**, then **Kraków** for half a millennium; the court moved to Warsaw under Sigismund III Vasa at the end of the 16th century.",
  "Ile województw ma Polska?": "How many voivodeships does Poland have?",
  "12": "12",
  "16": "16",
  "24": "24",
  "49": "49",
  "16 od reformy z 1999 roku. Wcześniej było 49.": "16 since the reform of 1999. Before that there were 49.",
  "Zabytki na liście UNESCO": "Monuments on the UNESCO list",
  "Historyczne centrum, wpisane w 1978 roku wśród pierwszych obiektów na świecie.":
    "The historic centre, entered in 1978 among the first sites in the world.",
  "Wieliczka": "Wieliczka",
  "Kopalnia soli czynna od średniowiecza, z kaplicami wykutymi w solnej skale.":
    "A salt mine worked since the Middle Ages, with chapels cut into the rock salt.",
  "Starówka odbudowana po wojnie — wpisana właśnie za tę odbudowę.":
    "An old town rebuilt after the war — listed precisely for that rebuilding.",
  "Auschwitz-Birkenau": "Auschwitz-Birkenau",
  "Miejsce pamięci, zachowane jako świadectwo.": "A memorial site, kept as testimony.",
  "Miasta wojewódzkie": "Voivodeship cities",
  "Stolicami województw są między innymi Warszawa, Kraków, Łódź, Wrocław, Poznań, Gdańsk, Szczecin, Lublin, Białystok, Katowice, Rzeszów, Kielce, Olsztyn i Opole.":
    "The voivodeship capitals include Warsaw, Kraków, Łódź, Wrocław, Poznań, Gdańsk, Szczecin, Lublin, Białystok, Katowice, Rzeszów, Kielce, Olsztyn and Opole.",
  "Które miasto było stolicą Polski przed Warszawą?": "Which city was the capital of Poland before Warsaw?",
  "Poznań": "Poznań",
  "Wrocław": "Wrocław",
  "Kraków, przez blisko pięćset lat. Jeszcze wcześniej stolicą było Gniezno.":
    "Kraków, for close to five hundred years. Before that the capital was Gniezno.",
  // pl-gospodarka
  "Gospodarka i praca": "The economy and work",
  "Waluta": "The currency",
  "Walutą jest **złoty (PLN)**, dzielony na 100 groszy. Polska należy do Unii Europejskiej, ale **nie przyjęła euro** — zobowiązała się do tego w traktacie akcesyjnym, bez wyznaczonej daty. Pieniądz emituje **Narodowy Bank Polski**.":
    "The currency is the **złoty (PLN)**, divided into 100 groszy. Poland belongs to the European Union but **has not adopted the euro** — it undertook to in the accession treaty, with no date set. Money is issued by the **National Bank of Poland**.",
  "Praca": "Work",
  "Umowa o pracę": "The employment contract",
  "Daje urlop, ochronę przed zwolnieniem i składki. Obok niej działają umowy zlecenia i o dzieło.":
    "It brings leave, protection against dismissal and contributions. Alongside it there are contracts of mandate and contracts for a specific task.",
  "Płaca minimalna": "The minimum wage",
  "Ustalana co roku rozporządzeniem Rady Ministrów, obowiązuje wszystkich pracowników.":
    "Set each year by a regulation of the Council of Ministers, and it applies to every employee.",
  "Czas pracy": "Working time",
  "Zasadniczo 8 godzin dziennie i 40 tygodniowo, przeciętnie w przyjętym okresie rozliczeniowym.":
    "In principle 8 hours a day and 40 a week, averaged over the settlement period in use.",
  "Urlop": "Leave",
  "20 dni przy stażu poniżej 10 lat, 26 dni powyżej. Nauka wlicza się do stażu.":
    "20 days with less than 10 years of service, 26 days above that. Education counts towards the service.",
  "Podatki i składki": "Taxes and contributions",
  "Podatek dochodowy od osób fizycznych (**PIT**) jest progresywny. Do tego dochodzą składki na **ZUS** — emerytalna, rentowa, chorobowa i wypadkowa — oraz składka zdrowotna na **NFZ**. Podstawowa stawka **VAT** wynosi 23 procent, na żywność i książki jest niższa.":
    "Personal income tax (**PIT**) is progressive. On top of it come **ZUS** contributions — pension, disability, sickness and accident — and the health contribution to the **NFZ**. The basic rate of **VAT** is 23 per cent, and it is lower on food and books.",
  "Czym Polska żyje": "What Poland lives on",
  "Gospodarka opiera się na przemyśle, usługach i rolnictwie. Kraj jest dużym producentem żywności, mebli, sprzętu AGD i części samochodowych, a od lat dziewięćdziesiątych rośnie w nim sektor informatyczny i usług dla biznesu.":
    "The economy rests on industry, services and agriculture. The country is a large producer of food, furniture, household appliances and car parts, and since the nineties its IT and business-services sector has been growing.",
  "Jaka jest waluta Polski?": "What is Poland's currency?",
  "Euro": "The euro",
  "Korona": "The koruna",
  "Marka": "The mark",
  "Złoty, dzielony na 100 groszy. Polska jest w Unii Europejskiej, ale euro nie przyjęła.":
    "The złoty, divided into 100 groszy. Poland is in the European Union but has not adopted the euro.",
  "Zakładanie działalności": "Starting a business",
  "Jednoosobową działalność gospodarczą rejestruje się w **CEIDG** — bezpłatnie i przez internet. Spółki wpisuje się do **KRS**. Do rozliczeń potrzebny jest numer **NIP**, a przy zatrudnianiu zgłoszenie do ZUS.":
    "A sole trader registers in **CEIDG** — free of charge and online. Companies are entered in the **KRS**. A **NIP** number is needed for tax, and taking on staff means registering with ZUS.",
  "Emerytura": "The pension",
  "Wiek emerytalny wynosi **60 lat dla kobiet** i **65 lat dla mężczyzn**. Wysokość świadczenia zależy od sumy odprowadzonych składek i przewidywanej długości życia — im dłużej się pracuje, tym wyższa emerytura.":
    "The pension age is **60 for women** and **65 for men**. The amount depends on the total contributions paid and on expected life span — the longer you work, the higher the pension.",
  "Gdzie rejestruje się jednoosobową działalność gospodarczą?":
    "Where is a sole trader's business registered?",
  "W CEIDG": "In CEIDG",
  "W KRS": "In the KRS",
  "W ZUS": "At ZUS",
  "W urzędzie wojewódzkim": "At the voivodeship office",
  "W CEIDG, bezpłatnie i przez internet. KRS jest rejestrem spółek.":
    "In CEIDG, free of charge and online. The KRS is the register of companies.",
  // pl-swiat
  "Polska w Unii Europejskiej i NATO": "Poland in the European Union and NATO",
  "Dwie daty": "Two dates",
  "**1999** — wejście do **NATO**, razem z Czechami i Węgrami. **2004** — wejście do **Unii Europejskiej**, razem z dziewięcioma innymi państwami, po referendum, w którym wzięło udział blisko 59 procent uprawnionych, a za opowiedziało się ponad trzy czwarte głosujących.":
    "**1999** — joining **NATO**, together with the Czech Republic and Hungary. **2004** — joining the **European Union**, together with nine other states, after a referendum in which nearly 59 per cent of those entitled took part and more than three quarters of them voted in favour.",
  "Co daje członkostwo w Unii": "What membership of the Union brings",
  "Swoboda przemieszczania": "Freedom of movement",
  "Wolno mieszkać, pracować i studiować w każdym państwie członkowskim.":
    "You may live, work and study in any member state.",
  "Schengen": "Schengen",
  "Od 2007 roku granice wewnętrzne przekracza się bez kontroli.":
    "Since 2007 internal borders are crossed without checks.",
  "Fundusze": "Funds",
  "Polska jest jednym z największych odbiorców funduszy spójności — drogi, koleje, oczyszczalnie.":
    "Poland is one of the largest recipients of cohesion funds — roads, railways, treatment plants.",
  "Parlament Europejski": "The European Parliament",
  "Polacy wybierają swoich posłów co pięć lat, w wyborach bezpośrednich.":
    "Poles elect their members every five years, in a direct election.",
  "Sąsiedztwo i bezpieczeństwo": "Neighbourhood and security",
  "Polska graniczy z **Ukrainą, Białorusią i Rosją**, więc granica wschodnia kraju jest zarazem zewnętrzną granicą Unii Europejskiej i NATO. Współpracuje też w formatach regionalnych — **Grupa Wyszehradzka** z Czechami, Słowacją i Węgrami oraz **Trójkąt Weimarski** z Niemcami i Francją.":
    "Poland borders **Ukraine, Belarus and Russia**, so the country's eastern border is at the same time the outer border of the European Union and of NATO. It also works in regional formats — the **Visegrád Group** with the Czech Republic, Slovakia and Hungary, and the **Weimar Triangle** with Germany and France.",
  "**Polonia** — Polacy i osoby polskiego pochodzenia mieszkające za granicą — liczy według szacunków kilkanaście do dwudziestu milionów osób. Największe skupiska są w Stanach Zjednoczonych, Niemczech i Wielkiej Brytanii.":
    "**Polonia** — Poles and people of Polish descent living abroad — is put at between about twelve and twenty million people. The largest concentrations are in the United States, Germany and the United Kingdom.",
  "W którym roku Polska wstąpiła do NATO?": "In which year did Poland join NATO?",
  "1999, pięć lat przed wejściem do Unii Europejskiej. 2007 to strefa Schengen.":
    "1999, five years before joining the European Union. 2007 is the Schengen area.",
  "Prawo europejskie": "European law",
  "Prawo Unii Europejskiej obowiązuje w Polsce bezpośrednio, a **Trybunał Sprawiedliwości Unii Europejskiej** w Luksemburgu czuwa nad jego stosowaniem. Osobno działa **Europejski Trybunał Praw Człowieka** w Strasburgu, do którego można złożyć skargę po wyczerpaniu drogi krajowej.":
    "European Union law applies in Poland directly, and the **Court of Justice of the European Union** in Luxembourg watches over how it is applied. Separately there is the **European Court of Human Rights** in Strasbourg, where a complaint can be lodged once the national route is exhausted.",
  "Pomoc dla Ukrainy": "Help for Ukraine",
  "Po pełnoskalowej agresji Rosji na Ukrainę w **2022 roku** przez Polskę przeszły miliony uchodźców, a kilkaset tysięcy zostało na dłużej. Był to największy ruch ludności w tej części Europy od czasu II wojny światowej.":
    "After Russia's full-scale aggression against Ukraine in **2022**, millions of refugees passed through Poland and several hundred thousand stayed longer. It was the largest movement of people in this part of Europe since the Second World War.",
  "Który trybunał rozpatruje skargi na naruszenie praw człowieka po wyczerpaniu drogi krajowej?":
    "Which court hears complaints about human rights violations once the national route is exhausted?",
  "Europejski Trybunał Praw Człowieka w Strasburgu": "The European Court of Human Rights in Strasbourg",
  "Trybunał w Strasburgu. Ten w Luksemburgu zajmuje się prawem Unii, a nie skargami indywidualnymi tego rodzaju.":
    "The court in Strasbourg. The one in Luxembourg deals with Union law, not with individual complaints of this kind.",
  // chapter
  "Społeczeństwo i życie codzienne": "Society and everyday life",
  // pl-religia
  "Religia i tradycje": "Religion and traditions",
  "Kościół i państwo": "Church and state",
  "Konstytucja zapewnia **wolność sumienia i wyznania**, a państwo jest **bezstronne** w sprawach przekonań religijnych. Nie ma religii państwowej. Stosunki z Kościołem katolickim reguluje **konkordat** ze Stolicą Apostolską z 1993 roku.":
    "The Constitution guarantees **freedom of conscience and religion**, and the state is **impartial** in matters of religious belief. There is no state religion. Relations with the Catholic Church are governed by the **concordat** with the Holy See of 1993.",
  "Kto w co wierzy": "Who believes what",
  "Zdecydowana większość mieszkańców deklaruje wyznanie **rzymskokatolickie**, choć udział praktykujących od lat maleje, zwłaszcza w miastach i wśród młodych. Obecne są też **prawosławie** — najliczniej na Podlasiu — oraz protestantyzm, judaizm i islam, ten ostatni między innymi wśród **Tatarów polskich**, osiadłych tu od stuleci.":
    "A large majority of the population declares itself **Roman Catholic**, though the share of those who practise has been falling for years, especially in the cities and among the young. There is also **Orthodoxy** — most numerous in Podlasie — as well as Protestantism, Judaism and Islam, the last among the **Polish Tatars**, settled here for centuries.",
  "Jan Paweł II": "John Paul II",
  "Wybór **Karola Wojtyły** na papieża w **1978 roku** i jego pielgrzymki do kraju miały znaczenie wykraczające poza religię: dla wielu badaczy są jednym z warunków tego, co wydarzyło się w 1980 roku.":
    "The election of **Karol Wojtyła** as pope in **1978** and his pilgrimages to the country mattered well beyond religion: for many historians they are one of the conditions for what happened in 1980.",
  "Religia w szkole publicznej jest **nieobowiązkowa**. Rodzice albo pełnoletni uczniowie decydują, czy dziecko chodzi na religię, na etykę, czy na żadne z nich.":
    "Religious instruction in a state school is **optional**. Parents, or pupils of age, decide whether a child attends religion, ethics, or neither.",
  "Jaki jest stosunek państwa polskiego do wyznań według Konstytucji?":
    "What is the Polish state's stance on religion under the Constitution?",
  "Katolicyzm jest religią państwową": "Catholicism is the state religion",
  "Państwo jest bezstronne w sprawach przekonań religijnych":
    "The state is impartial in matters of religious belief",
  "Wyznawanie religii jest zakazane": "Practising a religion is forbidden",
  "Religię wybiera wojewoda": "The voivode chooses the religion",
  "Państwo jest bezstronne, a każdemu przysługuje wolność sumienia i wyznania. Religii państwowej nie ma.":
    "The state is impartial, and everyone has freedom of conscience and religion. There is no state religion.",
  "Miejsca pielgrzymek": "Places of pilgrimage",
  "Najważniejszym jest **Jasna Góra** w Częstochowie z obrazem Matki Boskiej Częstochowskiej. Sierpniowe piesze pielgrzymki idą tam z całego kraju, niektóre po kilkanaście dni.":
    "The most important is **Jasna Góra** in Częstochowa, with the icon of the Black Madonna. Walking pilgrimages set out for it from all over the country in August, some of them taking a fortnight or more.",
  "Mniejszości wyznaniowe": "Religious minorities",
  "Prawosławni najliczniej mieszkają na **Podlasiu**, ewangelicy na **Śląsku Cieszyńskim**. Meczety Tatarów polskich w **Kruszynianach** i **Bohonikach** stoją tam od stuleci.":
    "The Orthodox live mostly in **Podlasie**, Lutherans in **Cieszyn Silesia**. The mosques of the Polish Tatars at **Kruszyniany** and **Bohoniki** have stood there for centuries.",
  "Gdzie znajduje się najważniejsze sanktuarium pielgrzymkowe w Polsce?":
    "Where is the most important pilgrimage shrine in Poland?",
  "W Krakowie": "In Kraków",
  "W Częstochowie": "In Częstochowa",
  "W Gnieźnie": "In Gniezno",
  "W Licheniu": "In Licheń",
  "Jasna Góra w Częstochowie. Gniezno jest siedzibą prymasa, ale nie głównym miejscem pielgrzymek.":
    "Jasna Góra in Częstochowa. Gniezno is the primate's seat but not the chief place of pilgrimage.",
  // pl-swieta
  "Święta i kalendarz": "Holidays and the calendar",
  "Trzy daty wracają najczęściej i najłatwiej je pomylić: 3 maja, 11 listopada i 1 sierpnia. Pierwsza to konstytucja, druga niepodległość, trzecia powstanie.":
    "Three dates come up most often and are the easiest to confuse: 3 May, 11 November and 1 August. The first is the constitution, the second independence, the third the uprising.",
  "Święta państwowe": "State holidays",
  "3 maja": "3 May",
  "Święto Konstytucji 3 Maja — rocznica ustawy z 1791 roku. Dzień wolny od pracy.":
    "Constitution Day — the anniversary of the act of 1791. A day off work.",
  "11 listopada": "11 November",
  "Narodowe Święto Niepodległości — rocznica roku 1918. Dzień wolny od pracy.":
    "National Independence Day — the anniversary of 1918. A day off work.",
  "1 sierpnia": "1 August",
  "Godzina „W”: o 17.00 syreny w Warszawie upamiętniają Powstanie Warszawskie. Dniem wolnym nie jest.":
    "The “W” hour: at 5 p.m. sirens in Warsaw mark the Warsaw Uprising. It is not a day off.",
  "Święta kościelne wolne od pracy": "Church holidays that are days off",
  "Wolne są między innymi **Wielkanoc** z poniedziałkiem wielkanocnym, **Boże Ciało**, **15 sierpnia** (Wniebowzięcie, zarazem Święto Wojska Polskiego), **1 listopada** (Wszystkich Świętych) oraz **25 i 26 grudnia**.":
    "Days off include **Easter** with Easter Monday, **Corpus Christi**, **15 August** (the Assumption, and also Polish Army Day), **1 November** (All Saints') and **25 and 26 December**.",
  "Zwyczaje": "Customs",
  "Wigilia": "Christmas Eve",
  "24 grudnia: dwanaście potraw, opłatek, wolne miejsce przy stole, kolacja po pierwszej gwiazdce.":
    "24 December: twelve dishes, the sharing of the wafer, an empty place at the table, supper after the first star.",
  "Śmigus-dyngus": "Śmigus-dyngus",
  "Poniedziałek wielkanocny, gdy polewa się wodą — zwyczaj starszy niż chrześcijaństwo.":
    "Easter Monday, when people throw water over each other — a custom older than Christianity.",
  "Andrzejki": "St Andrew's Eve",
  "Wieczór 29 listopada, wróżby z wosku lanego przez ucho od klucza.":
    "The evening of 29 November, with fortunes told from wax poured through the hole in a key.",
  "Imieniny": "Name days",
  "Bywają obchodzone chętniej niż urodziny, zwłaszcza przez starsze pokolenia.":
    "Often kept more readily than birthdays, especially by older generations.",
  "Co upamiętnia święto 3 maja?": "What does the holiday of 3 May commemorate?",
  "Odzyskanie niepodległości": "Regaining independence",
  "Uchwalenie Konstytucji 3 maja 1791 roku": "The passing of the Constitution of 3 May 1791",
  "Wybuch Powstania Warszawskiego": "The outbreak of the Warsaw Uprising",
  "Wejście do Unii Europejskiej": "Joining the European Union",
  "Konstytucję z 1791 roku. Niepodległość to 11 listopada, Powstanie Warszawskie to 1 sierpnia.":
    "The Constitution of 1791. Independence is 11 November, the Warsaw Uprising 1 August.",
  "Wszystkich Świętych": "All Saints' Day",
  "**1 listopada** miliony ludzi jadą na groby bliskich i stawiają znicze. Cmentarze świecą wtedy przez całą noc — to jeden z najbardziej rozpoznawalnych obrazów polskiego roku.":
    "On **1 November** millions travel to the graves of their relatives and set candles there. The cemeteries glow all night — one of the most recognisable pictures of the Polish year.",
  "Rok szkolny i wakacje": "The school year and the holidays",
  "Rok szkolny zaczyna się **1 września** i kończy w drugiej połowie czerwca. Wakacje trwają lipiec i sierpień, ferie zimowe dwa tygodnie, w różnych terminach zależnie od województwa.":
    "The school year begins on **1 September** and ends in the second half of June. The summer holidays cover July and August, and the winter break lasts two weeks, at different times depending on the voivodeship.",
  "Co upamiętnia 11 listopada?": "What does 11 November commemorate?",
  "Uchwalenie Konstytucji": "The passing of the Constitution",
  "Odzyskanie niepodległości w 1918 roku": "Regaining independence in 1918",
  "Wejście do NATO": "Joining NATO",
  "Odzyskanie niepodległości. Konstytucja to 3 maja, Powstanie Warszawskie 1 sierpnia.":
    "Regaining independence. The Constitution is 3 May, the Warsaw Uprising 1 August.",
  // pl-edukacja
  "Edukacja i zdrowie": "Education and health",
  "Droga przez szkołę": "The path through school",
  "Dzieci zaczynają od **rocznego przygotowania przedszkolnego** w wieku sześciu lat, potem idzie **ośmioletnia szkoła podstawowa**. Kończy ją **egzamin ósmoklasisty**. Dalej wybiera się **liceum** (4 lata), **technikum** (5 lat) albo **szkołę branżową**.":
    "Children begin with a **year of pre-school preparation** at the age of six, then comes the **eight-year primary school**. It ends with the **eighth-grade examination**. After that comes a choice: a **general secondary school** (4 years), a **technical school** (5 years) or a **vocational school**.",
  "Matura i studia": "The matura and university",
  "**Matura** otwiera drogę na studia; wyniki decydują o przyjęciu na uczelnię. Studia dzielą się na **licencjackie**, **magisterskie** i **doktoranckie**. Studia dzienne na uczelniach publicznych są **bezpłatne**.":
    "The **matura** opens the way to university; the results decide admission. Degrees are divided into **bachelor's**, **master's** and **doctoral**. Full-time study at public universities is **free**.",
  "Ochrona zdrowia": "Health care",
  "NFZ": "The NFZ",
  "Narodowy Fundusz Zdrowia finansuje leczenie ze składek. Ubezpieczony leczy się bezpłatnie.":
    "The National Health Fund pays for treatment out of contributions. An insured person is treated free of charge.",
  "Lekarz rodzinny": "The family doctor",
  "Pierwszy kontakt; kieruje do specjalisty i prowadzi dokumentację.":
    "The first point of contact; refers you to a specialist and keeps your records.",
  "Numer 112": "The number 112",
  "Jeden numer alarmowy do pogotowia, straży i policji, w całej Unii Europejskiej.":
    "One emergency number for the ambulance service, the fire brigade and the police, throughout the European Union.",
  "PESEL": "PESEL",
  "Jedenastocyfrowy numer identyfikacyjny; potrzebny u lekarza, w urzędzie i w banku.":
    "An eleven-digit identification number; needed at the doctor's, at an office and at the bank.",
  "Numer **PESEL** zawiera datę urodzenia i płeć: przedostatnia cyfra parzysta oznacza kobietę, nieparzysta mężczyznę.":
    "The **PESEL** number carries the date of birth and the sex: an even second-to-last digit means a woman, an odd one a man.",
  "Ile lat trwa w Polsce szkoła podstawowa?": "How many years does primary school last in Poland?",
  "8 lat": "8 years",
  "9 lat": "9 years",
  "12 lat": "12 years",
  "Osiem lat, zakończone egzaminem ósmoklasisty. Liceum trwa cztery lata, technikum pięć.":
    "Eight years, ending with the eighth-grade examination. A general secondary school lasts four years, a technical one five.",
  "Uczelnie": "Universities",
  "Najstarszą uczelnią jest **Uniwersytet Jagielloński** (1364), największą **Uniwersytet Warszawski**. Obok uniwersytetów działają politechniki, uczelnie medyczne, ekonomiczne i artystyczne, a także szkoły prywatne.":
    "The oldest institution is the **Jagiellonian University** (1364), the largest the **University of Warsaw**. Alongside the universities there are technical, medical, economic and arts institutions, and private ones too.",
  "Apteki i leki": "Pharmacies and medicines",
  "Leki na receptę wydaje apteka po okazaniu **e-recepty** — kodu przychodzącego SMS-em albo widocznego w aplikacji. Część leków jest refundowana, czyli tańsza dzięki dopłacie NFZ.":
    "A pharmacy dispenses prescription medicines on presentation of an **e-prescription** — a code that arrives by text message or appears in the app. Some medicines are reimbursed, that is, cheaper thanks to an NFZ subsidy.",
  "Jaki jest numer alarmowy obowiązujący w Polsce i całej Unii Europejskiej?":
    "What is the emergency number used in Poland and across the European Union?",
  "997": "997",
  "998": "998",
  "112": "112",
  "999": "999",
  "112. Dawne numery 997, 998 i 999 nadal działają, ale 112 łączy ze wszystkimi służbami.":
    "112. The old numbers 997, 998 and 999 still work, but 112 connects you to every service.",
  // pl-codziennosc
  "Codzienność, media i kultura": "Everyday life, media and culture",
  "Załatwianie spraw": "Getting things done",
  "Sprawy urzędowe załatwia się w **urzędzie gminy** albo **miasta**, a coraz częściej przez internet: **profil zaufany** i aplikacja **mObywatel** zastępują wizytę i papierowy dowód. Meldunek zgłasza się w urzędzie miejsca zamieszkania.":
    "Official business is dealt with at the **municipal** or **city office**, and more and more often online: the **trusted profile** and the **mObywatel** app take the place of a visit and a paper ID card. Residence is registered at the office where you live.",
  "Życie codzienne": "Everyday life",
  "Zakupy w niedziele": "Sunday shopping",
  "Handel w niedziele jest ograniczony ustawą; otwarte pozostają między innymi piekarnie, stacje paliw i sklepy prowadzone przez właściciela.":
    "Trading on Sundays is restricted by statute; bakeries, petrol stations and shops run by their owner, among others, stay open.",
  "Transport": "Transport",
  "PKP prowadzi koleje dalekobieżne, w miastach jeżdżą tramwaje i autobusy, bilet kasuje się przy wejściu.":
    "PKP runs the long-distance railways, cities have trams and buses, and a ticket is validated as you board.",
  "Kuchnia": "The kitchen",
  "Pierogi, bigos, żurek, rosół, kotlet schabowy; obiad bywa jedzony wcześniej niż w Europie Zachodniej.":
    "Pierogi, bigos, żurek, chicken broth, breaded pork cutlet; dinner is often eaten earlier than in Western Europe.",
  "Powitanie": "Greeting",
  "„Dzień dobry” do wszystkich, „cześć” do znajomych. Do osoby starszej mówi się „pan” albo „pani”.":
    "“Dzień dobry” to everyone, “cześć” to people you know. An older person is addressed as “pan” or “pani”.",
  "Media": "The media",
  "Działają media **publiczne** — Telewizja Polska i Polskie Radio, finansowane z abonamentu i budżetu — oraz liczne prywatne stacje, gazety i portale. Nad rynkiem czuwa **Krajowa Rada Radiofonii i Telewizji**, wymieniona w Konstytucji.":
    "There are **public** media — Polish Television and Polish Radio, funded by a licence fee and from the budget — and many private stations, papers and portals. The market is watched over by the **National Broadcasting Council**, named in the Constitution.",
  "Kultura": "Culture",
  "Polska ma pięcioro noblistów literackich: **Sienkiewicza**, **Reymonta**, **Miłosza**, **Szymborską** i **Tokarczuk**. W muzyce najbardziej znany jest **Chopin**, któremu poświęcony jest konkurs pianistyczny odbywający się w Warszawie co pięć lat.":
    "Poland has five Nobel laureates in literature: **Sienkiewicz**, **Reymont**, **Miłosz**, **Szymborska** and **Tokarczuk**. In music the best known is **Chopin**, and the piano competition named after him is held in Warsaw every five years.",
  "Jak nazywa się aplikacja, w której można nosić dokumenty w telefonie?":
    "What is the app called that lets you carry your documents on your phone?",
  "ePUAP": "ePUAP",
  "mObywatel": "mObywatel",
  "mBank": "mBank",
  "mObywatel. PESEL to numer identyfikacyjny, a nie aplikacja.":
    "mObywatel. PESEL is an identification number, not an app.",
  "Mieszkanie": "Housing",
  "Większość ludzi mieszka **we własnym** mieszkaniu lub domu — udział własności jest jednym z najwyższych w Europie. Przy najmie podpisuje się umowę i zwykle wpłaca kaucję; opłaty za wodę i ogrzewanie często idą osobno, do wspólnoty albo spółdzielni.":
    "Most people live in a flat or house **they own** — the share of ownership is one of the highest in Europe. Renting means signing a contract and usually paying a deposit; charges for water and heating often go separately, to the residents' association or the cooperative.",
  "Najpopularniejsze są **piłka nożna** i **siatkówka**; reprezentacja siatkarzy należy do najlepszych na świecie. Zimą kraj ogląda **skoki narciarskie**, a raz w roku ulicami miast biegną tysiące uczestników maratonów.":
    "The most popular are **football** and **volleyball**; the men's volleyball team is among the best in the world. In winter the country watches **ski jumping**, and once a year thousands of runners fill the streets of the cities for the marathons.",
  "Ile osób z Polski otrzymało literacką Nagrodę Nobla?":
    "How many people from Poland have received the Nobel Prize in Literature?",
  "Dwie": "Two",
  "Trzy": "Three",
  "Pięć": "Five",
  "Siedem": "Seven",
  "Pięć: Sienkiewicz, Reymont, Miłosz, Szymborska i Tokarczuk.":
    "Five: Sienkiewicz, Reymont, Miłosz, Szymborska and Tokarczuk.",
};
