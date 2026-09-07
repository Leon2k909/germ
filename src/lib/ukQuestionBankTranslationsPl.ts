/**
 * Polish for the Life in the UK practice questions.
 *
 * The lesson text of this course has had a Polish table for a while, and the
 * questions of the practice bank had none — so a lesson read in Polish and
 * then asked its questions in English. They arrive in the same stepped session
 * as the course's own quiz blocks, through the same component, so the marker
 * was already there and only the words were missing.
 *
 * Keyed on the ENGLISH of ukQuestionBank.ts, exactly as it stands there. Every
 * key was extracted from the built module and paired back by position, never
 * retyped: one wrong character and the lookup misses in silence — the marker
 * disappears and the reader is told there is nothing, for a question that was
 * in fact translated.
 *
 * Names of institutions, laws and offices stay in English on purpose, the way
 * they do in LIFE_IN_THE_UK_PL: the exam is sat in English and asks for those
 * exact words. A Polish name is used only where Polish has nothing else —
 * Tamiza, Londyn, Kornwalia, Orkady. What is translated is everything around
 * them.
 *
 * Strings another Polish table already answers are deliberately absent. Every
 * table for one target is spread into a single object, so a second entry for
 * the same key would be a silent collision, and the older table would decide
 * the wording for both. check-pl-bank-translation counts what a reader
 * reaches rather than what this file holds.
 */
export const UK_QUESTION_BANK_PL: Record<string, string> = {
  "What does the rule of law mean?": "Co oznaczają rządy prawa?",
  "The police may act outside the law when necessary":
    "Że policja może w razie potrzeby działać poza prawem",
  "Everyone is subject to the law, including the government":
    "Że każdy podlega prawu, także rząd",
  "Only judges are bound by the law": "Że prawem związani są tylko sędziowie",
  "Laws apply only to citizens": "Że prawo dotyczy tylko obywateli",
  "Nobody is above the law — not ministers, not the police, not the government itself. That is what makes it the rule of LAW rather than the rule of whoever is in charge.":
    "Nikt nie stoi ponad prawem — ani minister, ani policja, ani sam rząd. Właśnie to czyni z tego rządy PRAWA, a nie rządy tego, kto akurat rządzi.",
  "What does tolerance mean as a British value?":
    "Co jako brytyjska wartość oznacza tolerancja?",
  "Agreeing with every religion": "Zgadzanie się z każdą religią",
  "Respect for people of different faiths and beliefs, and of none":
    "Szacunek dla ludzi innej wiary i innych przekonań, a także dla niewierzących",
  "Keeping your opinions to yourself": "Zachowywanie swoich poglądów dla siebie",
  "Following the established church": "Podążanie za kościołem państwowym",
  "Tolerance is respect, not agreement — and it explicitly covers people with no religious belief as well as believers.":
    "Tolerancja to szacunek, a nie zgoda — i wyraźnie obejmuje ludzi bez wiary religijnej tak samo jak wierzących.",
  "Membership of a church": "Przynależność do kościoła",
  "The rule of law means everyone is subject to the law, including those who govern. The others are not British values at all.":
    "Rządy prawa oznaczają, że każdy podlega prawu, także rządzący. Pozostałe nie są brytyjskimi wartościami.",
  "How many protected characteristics does the Equality Act 2010 list?":
    "Ile cech chronionych wylicza Equality Act 2010?",
  "Five": "Pięć",
  "Seven": "Siedem",
  "Nine": "Dziewięć",
  "Twelve": "Dwanaście",
  "Nine: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation.":
    "Dziewięć: wiek, niepełnosprawność, zmiana płci, małżeństwo i związek partnerski, ciąża i macierzyństwo, rasa, religia lub przekonania, płeć oraz orientacja seksualna.",
  "Which of these is NOT protected under the Equality Act 2010?":
    "Która z tych cech NIE jest chroniona przez Equality Act 2010?",
  "Pregnancy and maternity": "Ciąża i macierzyństwo",
  "Political opinion is not a protected characteristic in Great Britain. The other three are among the nine that are.":
    "Poglądy polityczne nie są cechą chronioną w Wielkiej Brytanii. Pozostałe trzy należą do dziewięciu, które są.",
  "Is freedom of speech in the UK unlimited?":
    "Czy wolność słowa w Wielkiej Brytanii jest nieograniczona?",
  "Yes, nothing said may be prosecuted": "Tak, za nic powiedzianego nie można ścigać",
  "No — inciting violence or racial hatred is a criminal offence":
    "Nie — podżeganie do przemocy albo do nienawiści rasowej jest przestępstwem",
  "Yes, but only in private": "Tak, ale tylko prywatnie",
  "No — all criticism of the government is banned": "Nie — zakazana jest wszelka krytyka rządu",
  "Freedom of speech is a real right with a real boundary. Speech that incites violence or racial hatred is a crime.":
    "Wolność słowa jest prawdziwym prawem z prawdziwą granicą. Mowa podżegająca do przemocy albo do nienawiści rasowej jest przestępstwem.",
  "Which law sets out the protected characteristics?": "Która ustawa wylicza cechy chronione?",
  "The Human Rights Act 1998": "Human Rights Act 1998",
  "The Equality Act 2010": "Equality Act 2010",
  "The Bill of Rights 1689": "Bill of Rights 1689",
  "The Equality Act 2010. The Human Rights Act 1998 is the separate law that brought the European Convention on Human Rights into UK law.":
    "Equality Act 2010. Human Rights Act 1998 to osobna ustawa, która wprowadziła Europejską Konwencję Praw Człowieka do prawa brytyjskiego.",
  "A landlord refuses to rent to someone because of their religion. What is this?":
    "Wynajmujący odmawia komuś wynajmu z powodu jego religii. Czym to jest?",
  "Lawful, as it is private property": "Zgodne z prawem, bo to własność prywatna",
  "Unlawful discrimination under the Equality Act 2010":
    "Bezprawną dyskryminacją według Equality Act 2010",
  "Lawful if no contract was signed": "Zgodne z prawem, jeśli nie podpisano umowy",
  "A civil matter with no legal protection": "Sprawą cywilną bez żadnej ochrony prawnej",
  "Religion or belief is one of the nine protected characteristics, and housing is covered. Owning the property does not create an exemption.":
    "Religia lub przekonania to jedna z dziewięciu cech chronionych, a mieszkalnictwo jest objęte. Bycie właścicielem nieruchomości nie tworzy wyjątku.",
  "Which of these is a responsibility rather than a right?":
    "Która z tych rzeczy jest obowiązkiem, a nie prawem?",
  "Serving on a jury when summoned": "Zasiadanie w ławie przysięgłych po wezwaniu",
  "Freedom from discrimination": "Wolność od dyskryminacji",
  "Jury service is a duty you must perform when called. The other three are rights you hold.":
    "Zasiadanie w ławie przysięgłych to obowiązek, który trzeba wypełnić po wezwaniu. Pozostałe trzy to prawa, które się ma.",
  "What does democracy mean in the UK?": "Co w Wielkiej Brytanii oznacza demokracja?",
  "The monarch decides policy": "Że o polityce decyduje monarcha",
  "Government by the people, through representatives they elect and can vote out":
    "Rządy narodu, przez przedstawicieli, których wybiera i których może odwołać",
  "Every law is put to a public vote": "Że każda ustawa idzie pod głosowanie powszechne",
  "The courts choose the government": "Że rząd wybierają sądy",
  "Representative democracy: you elect MPs, and you can remove them at the next election. Referendums happen but are the exception, not the system.":
    "Demokracja przedstawicielska: wybierasz MPs i możesz ich usunąć w kolejnych wyborach. Referenda się zdarzają, ale są wyjątkiem, a nie systemem.",
  "Which of these is a right rather than a responsibility?":
    "Która z tych rzeczy jest prawem, a nie obowiązkiem?",
  "Paying income tax": "Płacenie podatku dochodowego",
  "Freedom from unfair discrimination": "Wolność od niesprawiedliwej dyskryminacji",
  "Obeying the law": "Przestrzeganie prawa",
  "Freedom from discrimination is a right you hold. Tax, jury service and obeying the law are duties owed in return.":
    "Wolność od dyskryminacji to prawo, które się ma. Podatki, ława przysięgłych i przestrzeganie prawa to obowiązki należne w zamian.",
  "Freedom to live as you choose within the law": "Wolność życia po swojemu w granicach prawa",
  "Which four nations make up the United Kingdom?":
    "Które cztery kraje tworzą Zjednoczone Królestwo?",
  "England, Scotland, Wales and Ireland": "Anglia, Szkocja, Walia i Irlandia",
  "England, Scotland, Wales and Northern Ireland": "Anglia, Szkocja, Walia i Irlandia Północna",
  "England, Scotland, Wales and the Isle of Man": "Anglia, Szkocja, Walia i Isle of Man",
  "England, Wales, Northern Ireland and the Channel Islands":
    "Anglia, Walia, Irlandia Północna i Channel Islands",
  "Northern Ireland, not the whole of Ireland. The Republic of Ireland is a separate country.":
    "Irlandia Północna, a nie cała Irlandia. Republika Irlandii to osobne państwo.",
  "What is the capital of Wales?": "Które miasto jest stolicą Walii?",
  "Swansea": "Swansea",
  "Cardiff": "Cardiff",
  "Newport": "Newport",
  "Bangor": "Bangor",
  "Cardiff, home of the Senedd — the Welsh Parliament.":
    "Cardiff, siedziba Senedd — walijskiego parlamentu.",
  "What is the capital of Scotland?": "Które miasto jest stolicą Szkocji?",
  "Glasgow": "Glasgow",
  "Aberdeen": "Aberdeen",
  "Dundee": "Dundee",
  "Edinburgh, where the Scottish Parliament sits at Holyrood. Glasgow is larger but is not the capital.":
    "Edinburgh, gdzie w Holyrood zasiada szkocki parlament. Glasgow jest większe, ale nie jest stolicą.",
  "Which is the largest city in Scotland?": "Które miasto jest największe w Szkocji?",
  "Inverness": "Inverness",
  "Glasgow is the largest by population; Edinburgh is the capital. The test likes this split.":
    "Glasgow jest największe pod względem liczby ludności; Edinburgh jest stolicą. Egzamin lubi ten podział.",
  "Which mountain is the highest in Wales?": "Która góra jest najwyższa w Walii?",
  "Ben Nevis": "Ben Nevis",
  "Scafell Pike": "Scafell Pike",
  "Snowdon": "Snowdon",
  "Slieve Donard": "Slieve Donard",
  "Snowdon — Yr Wyddfa — at 1,085 m. Ben Nevis is Scotland's and the UK's highest.":
    "Snowdon — Yr Wyddfa — 1085 m. Ben Nevis jest najwyższy w Szkocji i w całej Wielkiej Brytanii.",
  "Which is the highest mountain in England?": "Która góra jest najwyższa w Anglii?",
  "Helvellyn": "Helvellyn",
  "Scafell Pike in the Lake District, 978 m — the lowest of the four national high points.":
    "Scafell Pike w Lake District, 978 m — najniższy z czterech szczytów narodowych.",
  "What is the largest freshwater lake by area in the whole UK?":
    "Które jezioro słodkowodne jest największe powierzchniowo w całej Wielkiej Brytanii?",
  "Loch Lomond": "Loch Lomond",
  "Windermere": "Windermere",
  "Lough Neagh": "Lough Neagh",
  "Loch Ness": "Loch Ness",
  "Lough Neagh in Northern Ireland. Loch Lomond is the largest in Great Britain, and Windermere the largest in England.":
    "Lough Neagh w Irlandii Północnej. Loch Lomond jest największe w Great Britain, a Windermere największe w Anglii.",
  "Which sea lies to the east of Great Britain?": "Które morze leży na wschód od Great Britain?",
  "The Irish Sea": "Morze Irlandzkie",
  "The North Sea": "Morze Północne",
  "The Atlantic Ocean": "Ocean Atlantycki",
  "The English Channel": "Kanał La Manche",
  "The North Sea to the east, the Channel to the south, the Irish Sea to the west.":
    "Morze Północne na wschodzie, kanał La Manche na południu, Morze Irlandzkie na zachodzie.",
  "Which of these is a Crown Dependency rather than part of the UK?":
    "Która z tych wysp jest Crown Dependency, a nie częścią Wielkiej Brytanii?",
  "Anglesey": "Anglesey",
  "The Isle of Wight": "Isle of Wight",
  "The Isles of Scilly": "Isles of Scilly",
  "The Isle of Man and the Channel Islands are Crown Dependencies with their own governments. The others are UK islands.":
    "Isle of Man i Channel Islands to Crown Dependencies z własnymi rządami. Pozostałe to wyspy brytyjskie.",
  "How many National Parks are there in the UK?":
    "Ile parków narodowych jest w Wielkiej Brytanii?",
  "15, including the Lake District, Snowdonia, the Cairngorms and the Peak District.":
    "15, w tym Lake District, Snowdonia, Cairngorms i Peak District.",
  "Which river flows through London?": "Która rzeka przepływa przez Londyn?",
  "The Mersey": "Mersey",
  "The Thames — the second longest river in the UK, after the Severn.":
    "Tamiza — druga najdłuższa rzeka Wielkiej Brytanii, po Severn.",
  "In which year did the Channel Tunnel open?": "W którym roku otwarto Channel Tunnel?",
  "1984": "1984",
  "1990": "1990",
  "1994": "1994",
  "2000": "2000",
  "1994, linking Folkestone with Coquelles in France — the UK's only fixed land link to the continent.":
    "W 1994, łącząc Folkestone z Coquelles we Francji — jedyne stałe połączenie lądowe Wielkiej Brytanii z kontynentem.",
  "Which of these is an official language in Wales?":
    "Który z tych języków jest urzędowy w Walii?",
  "Gaelic": "Gaelicki",
  "Welsh": "Walijski",
  "Cornish": "Kornijski",
  "Irish": "Irlandzki",
  "Welsh is official in Wales and taught in schools there. Gaelic is spoken in parts of Scotland, Irish in Northern Ireland.":
    "Walijski jest urzędowy w Walii i uczy się go tam w szkołach. Po gaelicku mówi się w części Szkocji, po irlandzku w Irlandii Północnej.",
  "How many counties does Northern Ireland have?": "Ile hrabstw ma Irlandia Północna?",
  "Four": "Cztery",
  "Six": "Sześć",
  "Six: Antrim, Armagh, Down, Fermanagh, Londonderry and Tyrone.":
    "Sześć: Antrim, Armagh, Down, Fermanagh, Londonderry i Tyrone.",
  "What is the national flower of England?": "Który kwiat jest narodowym kwiatem Anglii?",
  "The rose — the red and white Tudor rose, from the end of the Wars of the Roses.":
    "Róża — czerwono-biała róża Tudorów, z końca Wojen Dwóch Róż.",
  "Which plant is the emblem of Scotland?": "Która roślina jest godłem Szkocji?",
  "The leek": "Por",
  "The oak": "Dąb",
  "The thistle, a spiny purple flower, has been Scotland's emblem for centuries.":
    "Oset, kolczasty purpurowy kwiat, jest godłem Szkocji od stuleci.",
  "On what date is St Andrew's Day?": "Na jaką datę przypada St Andrew's Day?",
  "1 March": "1 marca",
  "17 March": "17 marca",
  "23 April": "23 kwietnia",
  "30 November": "30 listopada",
  "30 November, and it is a bank holiday in Scotland.":
    "30 listopada, i w Szkocji jest to dzień wolny.",
  "St George is the patron saint of which nation?": "St George jest patronem którego kraju?",
  "England, celebrated on 23 April. His red cross on white forms part of the Union Flag.":
    "Anglii, obchodzony 23 kwietnia. Jego czerwony krzyż na białym tle tworzy część Union Flag.",
  "Which patron saints' days both fall in March?":
    "Wspomnienia których patronów przypadają oba w marcu?",
  "St George and St Andrew": "St George i St Andrew",
  "St David and St Patrick": "St David i St Patrick",
  "St Patrick and St George": "St Patrick i St George",
  "St David and St Andrew": "St David i St Andrew",
  "St David on 1 March and St Patrick on 17 March. These two are the pair most often confused.":
    "St David 1 marca i St Patrick 17 marca. To ta para, którą myli się najczęściej.",
  "Which three crosses make up the Union Flag?": "Które trzy krzyże tworzą Union Flag?",
  "St George, St Andrew and St David": "St George, St Andrew i St David",
  "St George, St Andrew and St Patrick": "St George, St Andrew i St Patrick",
  "St Patrick, St David and St Andrew": "St Patrick, St David i St Andrew",
  "St George, St David and St Patrick": "St George, St David i St Patrick",
  "England's St George, Scotland's St Andrew and Ireland's St Patrick. Wales is not represented.":
    "Angielski St George, szkocki St Andrew i irlandzki St Patrick. Walia nie jest przedstawiona.",
  "Why is Wales not represented on the Union Flag?":
    "Dlaczego Walia nie jest przedstawiona na Union Flag?",
  "Wales refused to join": "Walia odmówiła przystąpienia",
  "Wales was already united with England when the flag was designed":
    "Walia była już połączona z Anglią, gdy projektowano flagę",
  "The dragon was considered unsuitable": "Uznano smoka za nieodpowiedniego",
  "Wales joined the UK only in 1900": "Walia dołączyła do Wielkiej Brytanii dopiero w 1900 roku",
  "By 1606 Wales had already been joined to England, so it was not treated as a separate kingdom.":
    "Do 1606 roku Walia była już połączona z Anglią, więc nie traktowano jej jako osobnego królestwa.",
  "What is the national anthem of the UK?": "Jaki jest hymn narodowy Wielkiej Brytanii?",
  "Land of Hope and Glory": "Land of Hope and Glory",
  "God Save the King": "God Save the King",
  "Jerusalem": "Jerusalem",
  "Rule, Britannia!": "Rule, Britannia!",
  "God Save the King — God Save the Queen during a queen's reign. The words follow the monarch's gender.":
    "God Save the King — a God Save the Queen za panowania królowej. Słowa idą za płcią monarchy.",
  "Which animal appears on the flag of Wales?": "Które zwierzę widnieje na fladze Walii?",
  "A lion": "Lew",
  "A unicorn": "Jednorożec",
  "A dragon": "Smok",
  "An eagle": "Orzeł",
  "Which two animals support the Royal Coat of Arms?":
    "Które dwa zwierzęta podtrzymują Royal Coat of Arms?",
  "A lion and a unicorn": "Lew i jednorożec",
  "A lion and a dragon": "Lew i smok",
  "An eagle and a lion": "Orzeł i lew",
  "A unicorn and a stag": "Jednorożec i jeleń",
  "The lion for England and the unicorn for Scotland.": "Lew za Anglię i jednorożec za Szkocję.",
  "Which flower is associated with Northern Ireland?":
    "Którą roślinę wiąże się z Irlandią Północną?",
  "The shamrock, the three-leaved clover associated with St Patrick.":
    "Koniczynę, trójlistną koniczynkę wiązaną ze St Patrick.",
  "What does the Scottish flag, the Saltire, look like?": "Jak wygląda flaga Szkocji, Saltire?",
  "A red cross on white": "Czerwony krzyż na białym tle",
  "A white diagonal cross on blue": "Biały ukośny krzyż na niebieskim tle",
  "A red diagonal cross on white": "Czerwony ukośny krzyż na białym tle",
  "A red dragon on green and white": "Czerwony smok na zielono-białym tle",
  "A white diagonal cross — St Andrew's saltire — on a blue background.":
    "Biały ukośny krzyż — saltire St Andrew — na niebieskim tle.",
  "In which year did Claudius begin the Roman conquest of Britain?":
    "W którym roku Klaudiusz rozpoczął rzymski podbój Brytanii?",
  "AD 43 under Claudius. Caesar's earlier expedition in 55 BC failed to conquer anything.":
    "W 43 roku n.e. za Klaudiusza. Wcześniejsza wyprawa Cezara w 55 roku p.n.e. niczego nie podbiła.",
  "What happened when Julius Caesar came to Britain in 55 BC?":
    "Co się stało, gdy Juliusz Cezar przybył do Brytanii w 55 roku p.n.e.?",
  "He conquered the whole island": "Podbił całą wyspę",
  "His expedition failed and Britain was not conquered":
    "Jego wyprawa się nie powiodła i Brytanii nie podbito",
  "He built Hadrian's Wall": "Zbudował Hadrian's Wall",
  "He was defeated by Boudicca": "Został pokonany przez Boudiccę",
  "Caesar came and left. The conquest began almost a century later under Claudius, in AD 43.":
    "Cezar przybył i odszedł. Podbój zaczął się prawie sto lat później za Klaudiusza, w 43 roku n.e.",
  "Who built a wall across northern England to keep out the tribes of the north?":
    "Kto zbudował mur w poprzek północnej Anglii, żeby powstrzymać plemiona z północy?",
  "Julius Caesar": "Juliusz Cezar",
  "Emperor Hadrian": "Cesarz Hadrian",
  "Hadrian's Wall, begun around AD 122. The Romans never conquered what is now Scotland.":
    "Hadrian's Wall, zaczęty około 122 roku n.e. Rzymianie nigdy nie podbili terenów dzisiejszej Szkocji.",
  "Who led a revolt against Roman rule in eastern England?":
    "Kto poprowadził bunt przeciw rzymskim rządom we wschodniej Anglii?",
  "Boudicca, queen of the Iceni. Her statue stands on Westminster Bridge in London.":
    "Boudicca, królowa Icenów. Jej pomnik stoi na Westminster Bridge w Londynie.",
  "In which year did the Romans leave Britain?": "W którym roku Rzymianie opuścili Brytanię?",
  "AD 597": "W 597 roku n.e.",
  "AD 410, when troops were withdrawn to defend Rome itself.":
    "W 410 roku n.e., kiedy wojska wycofano do obrony samego Rzymu.",
  "A Roman legal code": "Rzymskim kodeksem prawnym",
  "The law brought by the Normans in 1066": "Prawem przyniesionym przez Normanów w 1066 roku",
  "A tax paid to the Vikings": "Podatkiem płaconym wikingom",
  "Alfred could not drive the Vikings out entirely, so a boundary was agreed. The north and east kept Danish law.":
    "Alfred nie zdołał wyprzeć wikingów całkowicie, więc uzgodniono granicę. Północ i wschód zachowały prawo duńskie.",
  "Which king defeated the Vikings and agreed the boundary that created the Danelaw?":
    "Który król pokonał wikingów i uzgodnił granicę, z której powstał Danelaw?",
  "Harold": "Harold",
  "Canute": "Kanut",
  "Edward the Confessor": "Edward Wyznawca",
  "Alfred the Great, King of Wessex — the only English monarch called 'the Great'.":
    "Alfred Wielki, król Wesseksu — jedyny angielski monarcha nazywany Wielkim.",
  "Which prehistoric monument stands in Wiltshire?":
    "Który prehistoryczny zabytek stoi w Wiltshire?",
  "Hadrian's Wall": "Hadrian's Wall",
  "Stonehenge": "Stonehenge",
  "Skara Brae": "Skara Brae",
  "Maiden Castle": "Maiden Castle",
  "Stonehenge, built in the Stone Age and still a World Heritage Site.":
    "Stonehenge, zbudowany w epoce kamienia i wciąż wpisany na listę światowego dziedzictwa.",
  "Where is the Stone Age settlement of Skara Brae?":
    "Gdzie leży osada z epoki kamienia Skara Brae?",
  "Cornwall": "Kornwalia",
  "Orkney": "Orkady",
  "Skara Brae is in Orkney, off the north coast of Scotland.":
    "Skara Brae leży na Orkadach, u północnych wybrzeży Szkocji.",
  "The languages of which people gave rise to modern Welsh, Gaelic and Irish?":
    "Języki którego ludu dały początek dzisiejszemu walijskiemu, gaelickiemu i irlandzkiemu?",
  "The Celts": "Celtów",
  "The Vikings": "Wikingów",
  "The Celts of the Iron Age. Their languages survive in Wales, Scotland and Ireland.":
    "Celtów z epoki żelaza. Ich języki przetrwały w Walii, Szkocji i Irlandii.",
  "Where does the name 'England' come from?": "Skąd pochodzi nazwa „England”?",
  "The Angles, one of the tribes who settled after the Romans":
    "Od Anglów, jednego z plemion, które osiedliły się po Rzymianach",
  "A Roman province called Anglia": "Od rzymskiej prowincji zwanej Anglia",
  "The Norman word for island": "Od normańskiego słowa oznaczającego wyspę",
  "A Viking king named Engle": "Od wikińskiego króla imieniem Engle",
  "Angles, Saxons and Jutes settled after AD 410. 'Angle-land' became England.":
    "Anglowie, Sasi i Jutowie osiedlili się po 410 roku n.e. „Angle-land” stało się England.",
  "In which year was the Battle of Hastings?": "W którym roku odbyła się Battle of Hastings?",
  "1066 — William of Normandy defeated Harold. It is the last successful invasion of Britain.":
    "W 1066 — Wilhelm z Normandii pokonał Harolda. To ostatnia udana inwazja na Brytanię.",
  "Who founded a monastery on Iona and helped convert Scotland to Christianity?":
    "Kto założył klasztor na Ionie i pomógł nawrócić Szkocję na chrześcijaństwo?",
  "St Augustine": "St Augustine",
  "St Columba in Scotland; St Augustine did the same in the south and became the first Archbishop of Canterbury.":
    "St Columba w Szkocji; St Augustine zrobił to samo na południu i został pierwszym Archbishop of Canterbury.",
  "In which year was Magna Carta agreed?": "W którym roku uzgodniono Magna Carta?",
  "1215 at Runnymede, forced on King John by his barons.":
    "W 1215 w Runnymede, wymuszona na królu Janie przez jego baronów.",
  "What principle did Magna Carta establish?": "Jaką zasadę ustanowiła Magna Carta?",
  "That everyone could vote": "Że każdy może głosować",
  "That the king was subject to the law": "Że król podlega prawu",
  "That Parliament chose the monarch": "Że parlament wybiera monarchę",
  "The king was bound by law and could not tax at will. It did not create Parliament or give anyone the vote.":
    "Króla wiązało prawo i nie mógł dowolnie nakładać podatków. Nie stworzyła parlamentu ani nie dała nikomu prawa głosu.",
  "What was the Domesday Book?": "Czym był Domesday Book?",
  "A record of church law": "Zapisem prawa kościelnego",
  "A survey of land ownership and value across England":
    "Spisem własności ziemi i jej wartości w całej Anglii",
  "A list of English kings": "Spisem królów Anglii",
  "The first English dictionary": "Pierwszym słownikiem angielskim",
  "Ordered by William the Conqueror in 1086 to record who owned what and what it was worth.":
    "Zarządzony przez Wilhelma Zdobywcę w 1086 roku, żeby zapisać, kto co posiada i ile to jest warte.",
  "Who won the Battle of Bannockburn in 1314?": "Kto wygrał Battle of Bannockburn w 1314 roku?",
  "Henry V": "Henryk V",
  "Robert the Bruce, securing Scottish independence. Wallace had led the earlier resistance and was executed in 1305.":
    "Robert Bruce, zapewniając Szkocji niepodległość. Wallace prowadził wcześniejszy opór i został stracony w 1305 roku.",
  "Which king conquered Wales and built a ring of castles there?":
    "Który król podbił Walię i zbudował tam pierścień zamków?",
  "Henry II": "Henryk II",
  "Richard I": "Ryszard I",
  "King John": "Król Jan",
  "Edward I. The Statute of Rhuddlan of 1284 annexed Wales to the English Crown.":
    "Edward I. Statute of Rhuddlan z 1284 roku przyłączył Walię do korony angielskiej.",
  "Roughly how much of Britain's population died in the Black Death?":
    "Mniej więcej jaka część ludności Brytanii zmarła w czasie czarnej śmierci?",
  "A tenth": "Jedna dziesiąta",
  "A third": "Jedna trzecia",
  "A half": "Połowa",
  "Two thirds": "Dwie trzecie",
  "About a third, from 1348. The resulting shortage of labour helped end the feudal system.":
    "Około jedna trzecia, od 1348 roku. Wynikły z tego brak rąk do pracy pomógł zakończyć feudalizm.",
  "What triggered the Peasants' Revolt of 1381?": "Co wywołało bunt chłopski w 1381 roku?",
  "A new poll tax": "Nowy podatek pogłówny",
  "The Black Death": "Czarna śmierć",
  "The loss of France": "Utrata Francji",
  "The murder of Thomas Becket": "Zabójstwo Thomasa Becketa",
  "A poll tax imposed after the Black Death. The revolt was led by Wat Tyler.":
    "Podatek pogłówny nałożony po czarnej śmierci. Buntem kierował Wat Tyler.",
  "How long did the Hundred Years War last?": "Jak długo trwała wojna stuletnia?",
  "Exactly 100 years": "Dokładnie 100 lat",
  "From 1337 to 1453": "Od 1337 do 1453 roku",
  "From 1215 to 1315": "Od 1215 do 1315 roku",
  "From 1485 to 1585": "Od 1485 do 1585 roku",
  "1337 to 1453 — 116 years, on and off, despite the name.":
    "Od 1337 do 1453 — 116 lat, z przerwami, mimo nazwy.",
  "Which houses fought the Wars of the Roses?": "Które rody walczyły w Wojnach Dwóch Róż?",
  "Tudor and Stuart": "Tudorowie i Stuartowie",
  "Lancaster and York": "Lancaster i York",
  "York and Normandy": "York i Normandia",
  "Wessex and Mercia": "Wessex i Mercja",
  "Lancaster (red rose) and York (white rose). The Tudor rose combined both after 1485.":
    "Lancaster (czerwona róża) i York (biała róża). Róża Tudorów połączyła obie po 1485 roku.",
  "Which battle ended the Wars of the Roses in 1485?":
    "Która bitwa zakończyła Wojny Dwóch Róż w 1485 roku?",
  "Agincourt": "Agincourt",
  "Bosworth Field": "Bosworth Field",
  "Bannockburn": "Bannockburn",
  "Hastings": "Hastings",
  "Bosworth Field. Richard III was killed and Henry Tudor became Henry VII.":
    "Bosworth Field. Ryszard III zginął, a Henryk Tudor został Henrykiem VII.",
  "Who was murdered in Canterbury Cathedral in 1170?":
    "Kto został zamordowany w katedrze w Canterbury w 1170 roku?",
  "Thomas Becket": "Thomas Becket",
  "Wat Tyler": "Wat Tyler",
  "Thomas Becket, Archbishop of Canterbury, after quarrelling with Henry II.":
    "Thomas Becket, Archbishop of Canterbury, po sporze z Henrykiem II.",
  "Which English king won the Battle of Agincourt in 1415?":
    "Który król Anglii wygrał Battle of Agincourt w 1415 roku?",
  "Edward III": "Edward III",
  "Henry V. Despite such victories, England ended the Hundred Years War holding only Calais.":
    "Henryk V. Mimo takich zwycięstw Anglia zakończyła wojnę stuletnią, trzymając już tylko Calais.",
  "Which king spent almost his entire reign abroad on crusade?":
    "Który król spędził niemal całe panowanie za granicą, na krucjacie?",
  "Richard I, the Lionheart. His brother John succeeded him and was forced to accept Magna Carta.":
    "Ryszard I, Lwie Serce. Jego brat Jan objął po nim tron i został zmuszony przyjąć Magna Carta.",
  "How many wives did Henry VIII have?": "Ile żon miał Henryk VIII?",
  "Six: divorced, beheaded, died; divorced, beheaded, survived.":
    "Sześć: rozwiedziona, ścięta, zmarła; rozwiedziona, ścięta, przeżyła.",
  "He converted to Protestantism by conviction": "Z przekonania przeszedł na protestantyzm",
  "Parliament voted to leave": "Parlament przegłosował wyjście",
  "He was excommunicated for heresy": "Został ekskomunikowany za herezję",
  "The break began as a dispute over his first marriage. He made himself Head of the Church of England.":
    "Zerwanie zaczęło się od sporu o jego pierwsze małżeństwo. Uczynił siebie zwierzchnikiem Church of England.",
  "In which year was the Spanish Armada defeated?": "W którym roku pokonano Wielką Armadę?",
  "1558": "1558",
  "1588 — beaten off by the English navy and then scattered by storms.":
    "W 1588 — odparta przez angielską flotę, a potem rozproszona przez sztormy.",
  "Which of Henry VIII's wives was the mother of Elizabeth I?":
    "Która z żon Henryka VIII była matką Elżbiety I?",
  "Anne Boleyn, who was beheaded. Catherine of Aragon was Mary I's mother and Jane Seymour Edward VI's.":
    "Anna Boleyn, która została ścięta. Katarzyna Aragońska była matką Marii I, a Jane Seymour Edwarda VI.",
  "Oxford": "Oxford",
  "Stratford-upon-Avon in 1564. He worked in London, at the Globe Theatre.":
    "Stratford-upon-Avon, w 1564 roku. Pracował w Londynie, w Globe Theatre.",
  "Which monarch was known as 'Bloody Mary'?": "Którą monarchinię nazywano „Bloody Mary”?",
  "Mary II": "Marię II",
  "Mary, Queen of Scots": "Marię Stuart",
  "Mary I, a devout Catholic who reversed the Reformation and had Protestants executed.":
    "Marię I, gorliwą katoliczkę, która odwróciła reformację i kazała stracać protestantów.",
  "What was the Dissolution of the Monasteries?": "Czym była Dissolution of the Monasteries?",
  "The closing of monasteries and seizure of their wealth by the Crown":
    "Zamknięciem klasztorów i przejęciem ich majątku przez koronę",
  "A new set of monastic rules": "Nowym zbiorem reguł zakonnych",
  "The founding of new monasteries": "Zakładaniem nowych klasztorów",
  "A tax on the Church paid to Rome": "Podatkiem od Kościoła płaconym Rzymowi",
  "It followed Henry VIII's break with Rome and transferred great wealth to the Crown.":
    "Nastąpiło po zerwaniu Henryka VIII z Rzymem i przeniosło ogromny majątek na koronę.",
  "How long did Elizabeth I reign?": "Jak długo panowała Elżbieta I?",
  "About 20 years": "Około 20 lat",
  "About 45 years": "Około 45 lat",
  "About 60 years": "Około 60 lat",
  "About 70 years": "Około 70 lat",
  "45 years. She never married and found a religious middle way that largely held.":
    "45 lat. Nigdy nie wyszła za mąż i znalazła religijną drogę pośrednią, która w większości się utrzymała.",
  "Which Tudor king ended the Wars of the Roses and founded the dynasty?":
    "Który król Tudorów zakończył Wojny Dwóch Róż i założył dynastię?",
  "Henry VII": "Henryk VII",
  "Richard III": "Ryszard III",
  "Henry VII won at Bosworth Field in 1485.":
    "Henryk VII zwyciężył pod Bosworth Field w 1485 roku.",
  "Whose son became James VI of Scotland and then James I of England?":
    "Czyj syn został Jakubem VI Szkocji, a potem Jakubem I Anglii?",
  "Mary, Queen of Scots, executed in 1587. Her son united the two crowns in 1603.":
    "Marii Stuart, straconej w 1587 roku. Jej syn połączył obie korony w 1603.",
  "Which of these plays did Shakespeare write?": "Którą z tych sztuk napisał Shakespeare?",
  "The Canterbury Tales": "The Canterbury Tales",
  "Macbeth": "Makbet",
  "Paradise Lost": "Raj utracony",
  "Oliver Twist": "Oliver Twist",
  "Macbeth. The Canterbury Tales is Chaucer, Paradise Lost is Milton, Oliver Twist is Dickens.":
    "Makbeta. The Canterbury Tales są Chaucera, Raj utracony Miltona, a Oliver Twist Dickensa.",
  "Which Tudor monarch died at the age of 15?": "Który monarcha Tudorów umarł w wieku 15 lat?",
  "Edward VI, Henry VIII's only surviving son. The Book of Common Prayer dates from his reign.":
    "Edward VI, jedyny żyjący syn Henryka VIII. Book of Common Prayer pochodzi z jego panowania.",
  "What is remembered every year on 5 November?": "Co upamiętnia się co roku 5 listopada?",
  "The failure of the Gunpowder Plot": "Niepowodzenie spisku prochowego",
  "The execution of Charles I": "Egzekucję Karola I",
  "Guy Fawkes and his fellow plotters failed to blow up Parliament in 1605.":
    "Guy Fawkes i pozostali spiskowcy nie zdołali wysadzić parlamentu w 1605 roku.",
  "Who were the Cavaliers?": "Kim byli Cavaliers?",
  "Members of the Gunpowder Plot": "Uczestnikami spisku prochowego",
  "Cavaliers, or Royalists, supported Charles I. The Roundheads supported Parliament.":
    "Cavaliers, czyli rojaliści, popierali Karola I. Roundheads popierali parlament.",
  "In which year was Charles I executed?": "W którym roku stracono Karola I?",
  "1642": "1642",
  "1649 — the only English king put to death by his own subjects.":
    "W 1649 — jedyny angielski król zgładzony przez własnych poddanych.",
  "What title did Oliver Cromwell hold?": "Jaki tytuł nosił Oliver Cromwell?",
  "King of England": "Króla Anglii",
  "Lord Protector": "Lord Protector",
  "Prime Minister": "Premiera",
  "Lord Chancellor": "Lord Chancellor",
  "Lord Protector of the Commonwealth. He refused the crown.":
    "Lord Protector of the Commonwealth. Odmówił przyjęcia korony.",
  "What was the Restoration of 1660?": "Czym była restauracja z 1660 roku?",
  "Parliament inviting Charles II back to the throne":
    "Zaproszeniem Karola II z powrotem na tron przez parlament",
  "The rebuilding of London after the fire": "Odbudową Londynu po pożarze",
  "The return of Catholicism": "Powrotem katolicyzmu",
  "The reopening of the monasteries": "Ponownym otwarciem klasztorów",
  "After Cromwell's death Parliament invited Charles II to return, ending the republic.":
    "Po śmierci Cromwella parlament zaprosił Karola II do powrotu, kończąc republikę.",
  "Votes for all men over 21": "Prawo głosu dla wszystkich mężczyzn powyżej 21 lat",
  "The union of England and Scotland": "Unię Anglii i Szkocji",
  "Freedom of religion for Catholics": "Wolność religijną dla katolików",
  "It made the monarchy constitutional: no taxation or standing army without Parliament, regular parliaments, free elections.":
    "Uczynił monarchię konstytucyjną: żadnych podatków ani stałej armii bez parlamentu, regularne parlamenty, wolne wybory.",
  "Why is the change of monarch in 1688 called the Glorious Revolution?":
    "Dlaczego zmianę monarchy w 1688 roku nazywa się chwalebną rewolucją?",
  "It gave ordinary people the vote": "Dała zwykłym ludziom prawo głosu",
  "It ended a war with France": "Zakończyła wojnę z Francją",
  "James II fled rather than fight, so the throne changed hands without a battle in England.":
    "Jakub II wolał uciec niż walczyć, więc tron zmienił właściciela bez bitwy w Anglii.",
  "Which two monarchs ruled jointly after the Glorious Revolution?":
    "Którzy dwoje monarchów panowali wspólnie po chwalebnej rewolucji?",
  "William III and Mary II": "Wilhelm III i Maria II",
  "Charles II and James II": "Karol II i Jakub II",
  "James I and Charles I": "Jakub I i Karol I",
  "Mary I and Elizabeth I": "Maria I i Elżbieta I",
  "William of Orange and his wife Mary, James II's Protestant daughter.":
    "Wilhelm Orański i jego żona Maria, protestancka córka Jakuba II.",
  "In which year was the Great Fire of London?": "W którym roku był wielki pożar Londynu?",
  "1665": "1665",
  "1666, the year after the Great Plague of 1665.": "W 1666, rok po wielkiej zarazie z 1665.",
  "What did Charles I believe about his authority?": "Co Karol I sądził o swojej władzy?",
  "That it came from Parliament": "Że pochodzi od parlamentu",
  "That it came from God — the divine right of kings":
    "Że pochodzi od Boga — boskie prawo królów",
  "That it came from the Church of England": "Że pochodzi od Church of England",
  "That it could be voted on": "Że można nad nią głosować",
  "The divine right of kings. He ruled eleven years without calling Parliament, and the quarrel became war in 1642.":
    "Boskie prawo królów. Rządził jedenaście lat bez zwoływania parlamentu, a spór stał się wojną w 1642 roku.",
  "Which Bible translation was ordered by James I?": "Który przekład Biblii zlecił Jakub I?",
  "The Book of Common Prayer": "Book of Common Prayer",
  "The King James Bible": "King James Bible",
  "The Geneva Bible": "Geneva Bible",
  "The Great Bible": "Great Bible",
  "The King James Bible, still the best-known English translation.":
    "King James Bible, wciąż najbardziej znany przekład angielski.",
  "Which scientific institution was founded during the reign of Charles II?":
    "Którą instytucję naukową założono za panowania Karola II?",
  "The Royal Society": "Royal Society",
  "The British Museum": "British Museum",
  "The National Gallery": "National Gallery",
  "The Royal Institution": "Royal Institution",
  "The Royal Society, Britain's oldest scientific institution, founded in the 1660s.":
    "Royal Society, najstarszą brytyjską instytucję naukową, założoną w latach sześćdziesiątych XVII wieku.",
  "What did the Act of Union of 1707 create?": "Co stworzył Act of Union z 1707 roku?",
  "The United Kingdom": "Zjednoczone Królestwo",
  "The Kingdom of Great Britain": "Królestwo Great Britain",
  "The Commonwealth": "Commonwealth",
  "The British Empire": "Imperium Brytyjskie",
  "It joined the parliaments of England and Scotland as Great Britain. Ireland was added in 1801, creating the UK.":
    "Połączył parlamenty Anglii i Szkocji w Great Britain. Irlandię dodano w 1801 roku, tworząc UK.",
  "Which Act of Union created the United Kingdom by adding Ireland?":
    "Który Act of Union stworzył Zjednoczone Królestwo, dodając Irlandię?",
  "The Act of 1707": "Ustawa z 1707 roku",
  "The Act of 1801": "Ustawa z 1801 roku",
  "The Act of 1832": "Ustawa z 1832 roku",
  "The Act of 1922": "Ustawa z 1922 roku",
  "1707 made Great Britain; 1801 added Ireland and made it the United Kingdom.":
    "Rok 1707 stworzył Great Britain; 1801 dodał Irlandię i uczynił z tego Zjednoczone Królestwo.",
  "Which battle in 1746 was the last fought on British soil?":
    "Która bitwa z 1746 roku była ostatnią stoczoną na ziemi brytyjskiej?",
  "Culloden": "Culloden",
  "Waterloo": "Waterloo",
  "Trafalgar": "Trafalgar",
  "Culloden, where the Jacobite rising under Bonnie Prince Charlie was crushed.":
    "Culloden, gdzie zmiażdżono powstanie jakobickie pod wodzą Bonnie Prince Charlie.",
  "Which Act abolished slavery throughout the British Empire?":
    "Która ustawa zniosła niewolnictwo w całym imperium brytyjskim?",
  "1807 ended the slave trade; 1833 abolished slavery itself and freed those already enslaved.":
    "Rok 1807 zakończył handel niewolnikami; 1833 zniósł samo niewolnictwo i uwolnił tych, którzy już byli zniewoleni.",
  "What did the Act of 1807 abolish?": "Co zniosła ustawa z 1807 roku?",
  "Slavery itself throughout the Empire": "Samo niewolnictwo w całym imperium",
  "The slave trade — the buying and carrying of enslaved people":
    "Handel niewolnikami — kupowanie i przewożenie zniewolonych ludzi",
  "Child labour in factories": "Pracę dzieci w fabrykach",
  "The East India Company": "East India Company",
  "1807 stopped the trade. Slavery itself continued until the Act of 1833.":
    "Rok 1807 zatrzymał handel. Samo niewolnictwo trwało do ustawy z 1833 roku.",
  "Who led the parliamentary campaign against the slave trade?":
    "Kto poprowadził w parlamencie kampanię przeciw handlowi niewolnikami?",
  "Robert Peel": "Robert Peel",
  "Wilberforce, supported by the Quakers among others.":
    "Wilberforce, wspierany między innymi przez kwakrów.",
  "Who commanded the British fleet at Trafalgar in 1805?":
    "Kto dowodził brytyjską flotą pod Trafalgarem w 1805 roku?",
  "Captain Cook": "Kapitan Cook",
  "Sir Francis Drake": "Sir Francis Drake",
  "Nelson won and was killed in the battle. Nelson's Column stands in Trafalgar Square.":
    "Nelson zwyciężył i zginął w bitwie. Nelson's Column stoi na Trafalgar Square.",
  "Who finally defeated Napoleon at Waterloo in 1815?":
    "Kto ostatecznie pokonał Napoleona pod Waterloo w 1815 roku?",
  "William Pitt": "William Pitt",
  "George III": "Jerzy III",
  "Wellington beat Napoleon on land, ten years after Nelson had beaten the French at sea.":
    "Wellington pokonał Napoleona na lądzie, dziesięć lat po tym, jak Nelson pokonał Francuzów na morzu.",
  "From 1760 to 1820": "Od 1760 do 1820 roku",
  "64 years — the second longest reign, after Elizabeth II.":
    "64 lata — drugie najdłuższe panowanie, po Elżbiecie II.",
  "Who improved the steam engine and made industrial power practical?":
    "Kto ulepszył maszynę parową i uczynił siłę przemysłową użyteczną?",
  "James Watt. Stephenson built the Rocket and the first passenger railways.":
    "James Watt. Stephenson zbudował Rocket i pierwsze koleje pasażerskie.",
  "Who founded modern nursing during the Crimean War?":
    "Kto stworzył nowoczesne pielęgniarstwo podczas wojny krymskiej?",
  "Elizabeth Fry": "Elizabeth Fry",
  "Mary Seacole": "Mary Seacole",
  "Florence Nightingale, who set up the first nursing school at St Thomas' Hospital in London.":
    "Florence Nightingale, która założyła pierwszą szkołę pielęgniarską w St Thomas' Hospital w Londynie.",
  "What did Charles Darwin publish in 1859?": "Co Karol Darwin wydał w 1859 roku?",
  "Principia Mathematica": "Principia Mathematica",
  "On the Origin of Species": "O powstawaniu gatunków",
  "The Wealth of Nations": "Bogactwo narodów",
  "A Christmas Carol": "Opowieść wigilijną",
  "On the Origin of Species, setting out evolution by natural selection.":
    "O powstawaniu gatunków, gdzie wyłożył ewolucję przez dobór naturalny.",
  "What was displayed at the Great Exhibition of 1851?":
    "Co pokazano na wielkiej wystawie w 1851 roku?",
  "British industrial and imperial achievement, in the Crystal Palace":
    "Brytyjskie osiągnięcia przemysłowe i imperialne, w Crystal Palace",
  "The Crown Jewels": "Klejnoty koronne",
  "Paintings from the National Gallery": "Obrazy z National Gallery",
  "The first railway engines only": "Wyłącznie pierwsze lokomotywy",
  "It showcased Britain at the height of its industrial power, in the purpose-built Crystal Palace.":
    "Pokazała Brytanię u szczytu jej potęgi przemysłowej, w zbudowanym specjalnie Crystal Palace.",
  "In which year did the American colonies declare independence?":
    "W którym roku kolonie amerykańskie ogłosiły niepodległość?",
  "1776. Britain lost its most valuable settler colonies.":
    "W 1776. Brytania straciła swoje najcenniejsze kolonie osadnicze.",
  "Which engineer built the Great Western Railway and the Clifton Suspension Bridge?":
    "Który inżynier zbudował Great Western Railway i Clifton Suspension Bridge?",
  "Thomas Telford": "Thomas Telford",
  "Brunel — railways, bridges, tunnels and pioneering steamships.":
    "Brunel — koleje, mosty, tunele i pionierskie parowce.",
  "On what date did the First World War end?":
    "W jakiej dacie skończyła się pierwsza wojna światowa?",
  "8 May 1918": "8 maja 1918",
  "11 November 1918": "11 listopada 1918",
  "1 September 1939": "1 września 1939",
  "6 June 1944": "6 czerwca 1944",
  "11 November 1918 — which is why Remembrance Day falls on that date.":
    "11 listopada 1918 — i dlatego Remembrance Day przypada na tę datę.",
  "In which year did women get the vote on the same terms as men?":
    "W którym roku kobiety uzyskały prawo głosu na tych samych zasadach co mężczyźni?",
  "1918 gave the vote to women over 30 with a property qualification; 1928 brought full equality at 21.":
    "Rok 1918 dał prawo głosu kobietom powyżej 30 lat z cenzusem majątkowym; 1928 przyniósł pełne zrównanie od 21 lat.",
  "What did the Representation of the People Act of 1918 do for women?":
    "Co Representation of the People Act z 1918 roku dał kobietom?",
  "Gave all women over 21 the vote": "Prawo głosu wszystkim kobietom powyżej 21 lat",
  "Gave women over 30 who met a property qualification the vote":
    "Prawo głosu kobietom powyżej 30 lat, które spełniały cenzus majątkowy",
  "Gave no women the vote": "Nie dał prawa głosu żadnej kobiecie",
  "Allowed women to stand for Parliament only":
    "Pozwolił kobietom jedynie kandydować do parlamentu",
  "Over 30, and with property. Equality with men at 21 waited another ten years, until 1928.":
    "Powyżej 30 lat i z majątkiem. Zrównanie z mężczyznami od 21 lat czekało jeszcze dziesięć lat, do 1928 roku.",
  "Who led the suffragette campaign for votes for women?":
    "Kto poprowadził kampanię sufrażystek o prawo głosu dla kobiet?",
  "Emmeline Pankhurst. The campaign used protests, hunger strikes and imprisonment.":
    "Emmeline Pankhurst. Kampania sięgała po protesty, strajki głodowe i więzienie.",
  "Who was Prime Minister for most of the Second World War?":
    "Kto był premierem przez większość drugiej wojny światowej?",
  "Churchill became Prime Minister in 1940 and led Britain for the rest of the war.":
    "Churchill został premierem w 1940 roku i prowadził Brytanię przez resztę wojny.",
  "What was the Battle of Britain?": "Czym była Battle of Britain?",
  "A naval battle in the Atlantic": "Bitwą morską na Atlantyku",
  "The RAF holding off the German air force in 1940":
    "Powstrzymaniem niemieckiego lotnictwa przez RAF w 1940 roku",
  "The Allied landings in Normandy": "Lądowaniem aliantów w Normandii",
  "The bombing of London": "Bombardowaniem Londynu",
  "The air battle of 1940 that prevented invasion. The Blitz was the bombing of British cities.":
    "Bitwą powietrzną 1940 roku, która udaremniła inwazję. The Blitz to bombardowanie miast brytyjskich.",
  "What happened on 6 June 1944?": "Co wydarzyło się 6 czerwca 1944 roku?",
  "VE Day": "VE Day",
  "The D-Day landings in Normandy": "Lądowanie D-Day w Normandii",
  "The start of the Blitz": "Początek the Blitz",
  "The evacuation from Dunkirk": "Ewakuacją z Dunkierki",
  "D-Day — the Allied landings that opened the campaign to liberate western Europe.":
    "D-Day — lądowanie aliantów, które otworzyło kampanię wyzwalania Europy Zachodniej.",
  "Bevan as Health Minister. Beveridge wrote the 1942 report; Attlee was the Prime Minister of the day.":
    "Bevan jako minister zdrowia. Beveridge napisał raport z 1942 roku; Attlee był ówczesnym premierem.",
  "What did the Beveridge Report of 1942 identify?":
    "Co wskazał raport Beveridge'a z 1942 roku?",
  "Five giants: want, disease, ignorance, squalor and idleness":
    "Pięć olbrzymów: niedostatek, chorobę, niewiedzę, nędzę i bezczynność",
  "The causes of the war": "Przyczyny wojny",
  "A plan for decolonisation": "Plan dekolonizacji",
  "The structure of the Commonwealth": "Strukturę Commonwealthu",
  "Those five giants became the target of the post-war welfare state.":
    "Te pięć olbrzymów stało się celem powojennego państwa opiekuńczego.",
  "Which ship gave its name to a generation of post-war arrivals from the Caribbean?":
    "Który statek dał nazwę pokoleniu powojennych przybyszów z Karaibów?",
  "The Empire Windrush": "Empire Windrush",
  "The Mayflower": "Mayflower",
  "HMS Victory": "HMS Victory",
  "The Cutty Sark": "Cutty Sark",
  "The Empire Windrush arrived in 1948, the same year the NHS was founded.":
    "Empire Windrush przypłynął w 1948 roku, w tym samym, w którym powstał NHS.",
  "The referendum was June 2016; the UK left on 31 January 2020, with a transition period to year end.":
    "Referendum odbyło się w czerwcu 2016 roku; Wielka Brytania wyszła 31 stycznia 2020, z okresem przejściowym do końca roku.",
  "In which year did the UK join the European Economic Community?":
    "W którym roku Wielka Brytania weszła do Europejskiej Wspólnoty Gospodarczej?",
  "1957": "1957",
  "1973. The EEC later became the European Union.":
    "W 1973. EWG stała się później Unią Europejską.",
  "Who became the first woman Prime Minister of the UK?":
    "Kto został pierwszą kobietą na stanowisku premiera Wielkiej Brytanii?",
  "Barbara Castle": "Barbara Castle",
  "Margaret Thatcher in 1979. Theresa May was the second, in 2016.":
    "Margaret Thatcher w 1979 roku. Theresa May była drugą, w 2016.",
  "Which agreement of 1998 brought peace to Northern Ireland?":
    "Które porozumienie z 1998 roku przyniosło pokój Irlandii Północnej?",
  "The Good Friday Agreement": "Good Friday Agreement",
  "The Anglo-Irish Agreement": "Anglo-Irish Agreement",
  "The Treaty of Rome": "Traktat rzymski",
  "The Act of Union": "Act of Union",
  "The Good Friday Agreement, which also created the power-sharing Northern Ireland Assembly.":
    "Good Friday Agreement, które stworzyło też Northern Ireland Assembly opartą na podziale władzy.",
  "Which countries became independent in 1947, beginning decolonisation?":
    "Które kraje uzyskały niepodległość w 1947 roku, zaczynając dekolonizację?",
  "Kenya and Nigeria": "Kenia i Nigeria",
  "India and Pakistan": "Indie i Pakistan",
  "Australia and New Zealand": "Australia i Nowa Zelandia",
  "Jamaica and Barbados": "Jamajka i Barbados",
  "India and Pakistan first, then most of Africa and the Caribbean. Many joined the Commonwealth.":
    "Najpierw Indie i Pakistan, potem większość Afryki i Karaibów. Wiele z nich weszło do Commonwealthu.",
  "Where did codebreakers work to break German ciphers in the Second World War?":
    "Gdzie pracowali kryptolodzy łamiący niemieckie szyfry w drugiej wojnie światowej?",
  "Bletchley Park": "Bletchley Park",
  "Chequers": "Chequers",
  "Portsmouth": "Portsmouth",
  "Sandhurst": "Sandhurst",
  "Bletchley Park, where Alan Turing and others shortened the war.":
    "W Bletchley Park, gdzie Alan Turing i inni skrócili wojnę.",
  "Which came first: Magna Carta or the Battle of Hastings?":
    "Co było pierwsze: Magna Carta czy Battle of Hastings?",
  "The Battle of Hastings": "Battle of Hastings",
  "Magna Carta came first, by two centuries": "Magna Carta była pierwsza, o dwa stulecia",
  "Hastings 1066, Magna Carta 1215 — the Conquest comes first, by about 150 years.":
    "Hastings 1066, Magna Carta 1215 — podbój normański jest pierwszy, o jakieś 150 lat.",
  "Put these in order: the Spanish Armada, the Great Fire of London, the Act of Union with Scotland.":
    "Ustaw w kolejności: Wielka Armada, wielki pożar Londynu, Act of Union ze Szkocją.",
  "Armada, Great Fire, Act of Union": "Armada, wielki pożar, Act of Union",
  "Great Fire, Armada, Act of Union": "Wielki pożar, Armada, Act of Union",
  "Act of Union, Armada, Great Fire": "Act of Union, Armada, wielki pożar",
  "Armada, Act of Union, Great Fire": "Armada, Act of Union, wielki pożar",
  "Armada 1588, Great Fire 1666, Act of Union 1707.":
    "Armada 1588, wielki pożar 1666, Act of Union 1707.",
  "Which happened first: the founding of the NHS or the end of the Second World War?":
    "Co było pierwsze: powstanie NHS czy koniec drugiej wojny światowej?",
  "The end of the war": "Koniec wojny",
  "The same year": "Ten sam rok",
  "The NHS, by ten years": "NHS, o dziesięć lat",
  "The war ended in 1945; the NHS opened in 1948, built by the government elected afterwards.":
    "Wojna skończyła się w 1945; NHS ruszył w 1948, zbudowany przez rząd wybrany później.",
  "Which of these happened in 1689?": "Które z tych wydarzeń miało miejsce w 1689 roku?",
  "The Glorious Revolution": "Chwalebna rewolucja",
  "The Glorious Revolution was 1688; the Bill of Rights that settled its terms was 1689.":
    "Chwalebna rewolucja to 1688; Bill of Rights, który ustalił jej warunki, to 1689.",
  "In which year did the Romans first successfully invade Britain?":
    "W którym roku Rzymianie po raz pierwszy skutecznie najechali Brytanię?",
  "AD 43 under Claudius. 55 BC was Caesar's failed expedition; AD 122 Hadrian's Wall; AD 410 the departure.":
    "W 43 roku n.e. za Klaudiusza. 55 rok p.n.e. to nieudana wyprawa Cezara; 122 rok n.e. to Hadrian's Wall; 410 to odejście.",
  "Which came first: the abolition of the slave trade or the Battle of Waterloo?":
    "Co było pierwsze: zniesienie handlu niewolnikami czy bitwa pod Waterloo?",
  "The abolition of the slave trade, in 1807": "Zniesienie handlu niewolnikami, w 1807 roku",
  "Waterloo, in 1815": "Waterloo, w 1815 roku",
  "They happened the same year": "Zdarzyły się w tym samym roku",
  "Waterloo, by twenty years": "Waterloo, o dwadzieścia lat",
  "The slave trade was abolished in 1807, eight years before Waterloo in 1815.":
    "Handel niewolnikami zniesiono w 1807 roku, osiem lat przed Waterloo w 1815.",
  "In which year did London most recently host the Olympic Games?":
    "W którym roku Londyn ostatnio gościł igrzyska olimpijskie?",
  "2012. London has hosted three times — 1908, 1948 and 2012 — more than any other city.":
    "W 2012. Londyn gościł je trzy razy — 1908, 1948 i 2012 — więcej niż jakiekolwiek inne miasto.",
  "In which year did Queen Elizabeth II die?": "W którym roku umarła królowa Elżbieta II?",
  "2021": "2021",
  "2023": "2023",
  "September 2022, after 70 years — the longest reign in British history. Charles III succeeded her.":
    "We wrześniu 2022 roku, po 70 latach — to najdłuższe panowanie w historii Brytanii. Po niej wstąpił Karol III.",
  "Which came first: the Peasants' Revolt or the Black Death?":
    "Co było pierwsze: bunt chłopski czy czarna śmierć?",
  "The Peasants' Revolt": "Bunt chłopski",
  "The Peasants' Revolt, by fifty years": "Bunt chłopski, o pięćdziesiąt lat",
  "The Black Death arrived in 1348; the revolt followed in 1381, triggered by a poll tax imposed afterwards.":
    "Czarna śmierć przyszła w 1348 roku; bunt nastąpił w 1381, wywołany nałożonym potem podatkiem pogłównym.",
  "In which year did the Scottish Parliament and the Welsh Assembly first sit?":
    "W którym roku po raz pierwszy zebrały się szkocki parlament i zgromadzenie walijskie?",
  "1997": "1997",
  "2007": "2007",
  "1999, after referendums in 1997.": "W 1999, po referendach z 1997 roku.",
  "Which of these is the oldest?": "Który z tych zabytków jest najstarszy?",
  "The Tower of London": "Tower of London",
  "Edinburgh Castle": "Edinburgh Castle",
  "Stonehenge, from about 2500 BC — over two thousand years older than Hadrian's Wall.":
    "Stonehenge, z około 2500 roku p.n.e. — ponad dwa tysiące lat starszy niż Hadrian's Wall.",
  "What kind of monarchy does the UK have?": "Jaką monarchię ma Wielka Brytania?",
  "An absolute monarchy": "Absolutną",
  "A constitutional monarchy": "Konstytucyjną",
  "An elected monarchy": "Elekcyjną",
  "No monarchy at all": "Żadnej",
  "The monarch is Head of State but does not govern. Parliament makes the law.":
    "Monarcha jest głową państwa, ale nie rządzi. Prawo stanowi parlament.",
  "The monarch's power to veto any law": "Prawem monarchy do zawetowania każdej ustawy",
  "The monarch's formal signature that turns a bill into an Act":
    "Formalnym podpisem monarchy, który zmienia projekt w Act",
  "The ceremony crowning a monarch": "Ceremonią koronacji monarchy",
  "The final formal step in making a law. It has not been refused since 1708.":
    "Ostatnim formalnym krokiem w stanowieniu prawa. Nie odmówiono go od 1708 roku.",
  "Who writes the speech the monarch reads at the State Opening of Parliament?":
    "Kto pisze mowę, którą monarcha odczytuje na State Opening of Parliament?",
  "The government": "Rząd",
  "The Speaker of the Commons": "Speaker of the Commons",
  "The House of Lords": "House of Lords",
  "The government writes it — it sets out their plans, not the monarch's views.":
    "Pisze ją rząd — przedstawia jego plany, a nie poglądy monarchy.",
  "Who became monarch in September 2022?": "Kto został monarchą we wrześniu 2022 roku?",
  "King Charles III": "Król Karol III",
  "Prince William": "Książę William",
  "Queen Camilla": "Królowa Camilla",
  "King George VII": "Król Jerzy VII",
  "Charles III succeeded his mother, Elizabeth II, on her death.":
    "Karol III wstąpił po swojej matce, Elżbiecie II, po jej śmierci.",
  "Where does a coronation take place?": "Gdzie odbywa się koronacja?",
  "St Paul's Cathedral": "St Paul's Cathedral",
  "Westminster Abbey": "Westminster Abbey",
  "Buckingham Palace": "Buckingham Palace",
  "Westminster Abbey, conducted by the Archbishop of Canterbury.":
    "W Westminster Abbey, a przeprowadza ją Archbishop of Canterbury.",
  "Since the law changed in 2013, who inherits the throne?":
    "Od zmiany prawa w 2013 roku, kto dziedziczy tron?",
  "The eldest son": "Najstarszy syn",
  "The eldest child, regardless of sex": "Najstarsze dziecko, niezależnie od płci",
  "Whoever Parliament chooses": "Ten, kogo wybierze parlament",
  "The eldest male relative": "Najstarszy męski krewny",
  "The eldest child inherits. An older sister is no longer passed over for a younger brother.":
    "Dziedziczy najstarsze dziecko. Starszej siostry nie pomija się już na rzecz młodszego brata.",
  "Can the monarch express political opinions in public?":
    "Czy monarcha może publicznie wyrażać poglądy polityczne?",
  "Yes, freely": "Tak, swobodnie",
  "No — the monarch must remain politically neutral":
    "Nie — monarcha musi pozostać politycznie bezstronny",
  "Only during elections": "Tylko w czasie wyborów",
  "Only in the House of Lords": "Tylko w House of Lords",
  "Political neutrality is the whole point of the office. The monarch does not vote either.":
    "Polityczna bezstronność to sedno tego urzędu. Monarcha również nie głosuje.",
  "How long did Queen Elizabeth II reign?": "Jak długo panowała królowa Elżbieta II?",
  "50 years": "50 lat",
  "64 years": "64 lata",
  "70 years": "70 lat",
  "75 years": "75 lat",
  "70 years, from 1952 to 2022 — the longest in British history. Victoria's 64 years is second.":
    "70 lat, od 1952 do 2022 — najdłużej w historii Brytanii. Wiktoria z 64 latami jest druga.",
  "Who is the heir to the throne?": "Kto jest następcą tronu?",
  "Prince Harry": "Książę Harry",
  "Princess Anne": "Księżniczka Anna",
  "Prince Edward": "Książę Edward",
  "Prince William, Prince of Wales.": "Książę William, Prince of Wales.",
  "What role does the monarch play in appointing a Prime Minister?":
    "Jaką rolę odgrywa monarcha przy powoływaniu premiera?",
  "Chooses whoever they prefer": "Wybiera, kogo woli",
  "Invites the leader who can command a majority in the Commons":
    "Zaprasza tego lidera, który może zapewnić sobie większość w Commons",
  "Appoints the leader of the largest party in the Lords":
    "Powołuje lidera największej partii w Lords",
  "Has no role at all": "Nie odgrywa żadnej",
  "The monarch invites whoever can command a Commons majority — a formal act with no personal choice in practice.":
    "Monarcha zaprasza tego, kto może mieć większość w Commons — akt formalny, bez realnego osobistego wyboru.",
  "How many MPs sit in the House of Commons?": "Ilu MPs zasiada w House of Commons?",
  "650, one for each constituency, each elected by first past the post.":
    "650, po jednym na każdy okręg, każdy wybrany w systemie first past the post.",
  "Elected by constituencies": "Wybierani w okręgach",
  "Appointed, or sitting as hereditary peers or bishops":
    "Mianowani albo zasiadający jako dziedziczni parowie lub biskupi",
  "Chosen by the House of Commons": "Wybierani przez House of Commons",
  "Selected at random": "Wybierani losowo",
  "The Lords is not elected. Most are life peers, alongside some hereditary peers and senior Church of England bishops.":
    "Lords nie pochodzi z wyboru. Większość to parowie dożywotni, obok części parów dziedzicznych i starszych biskupów Church of England.",
  "Five years, though an election can be called sooner.":
    "Pięć lat, choć wybory można rozpisać wcześniej.",
  "Where does the Prime Minister live and work?": "Gdzie mieszka i pracuje premier?",
  "10 Downing Street": "10 Downing Street",
  "The Palace of Westminster": "Palace of Westminster",
  "Chequers only": "Wyłącznie w Chequers",
  "10 Downing Street in London.": "Pod adresem 10 Downing Street w Londynie.",
  "What voting system is used to elect MPs to the House of Commons?":
    "W jakim systemie wybiera się MPs do House of Commons?",
  "Proportional representation": "Proporcjonalnym",
  "First past the post": "First past the post",
  "The single transferable vote": "Pojedynczego głosu przechodniego",
  "A second ballot": "Dwóch tur",
  "First past the post — whoever gets the most votes in a constituency wins the seat.":
    "First past the post — mandat zdobywa ten, kto ma w okręgu najwięcej głosów.",
  "What is a by-election?": "Czym są wybory uzupełniające?",
  "A second round of a general election": "Drugą turą wyborów powszechnych",
  "An election in one constituency when its MP dies or resigns":
    "Wyborami w jednym okręgu, gdy jego MP umiera albo rezygnuje",
  "An election for the House of Lords": "Wyborami do House of Lords",
  "A local council election": "Wyborami do rady lokalnej",
  "It fills a single seat between general elections.":
    "Obsadzają jeden mandat między wyborami powszechnymi.",
  "Who chairs debates in the House of Commons?": "Kto prowadzi debaty w House of Commons?",
  "The Leader of the Opposition": "Leader of the Opposition",
  "The Lord Chancellor": "Lord Chancellor",
  "The Speaker, who is politically neutral and gives up party allegiance.":
    "Speaker, który jest politycznie bezstronny i rezygnuje z przynależności partyjnej.",
  "From what age can you vote in a UK general election?":
    "Od jakiego wieku można głosować w brytyjskich wyborach powszechnych?",
  "18, and you must be on the electoral register. Photo ID is now required at polling stations in Great Britain.":
    "Od 18 lat, i trzeba być w rejestrze wyborców. W Great Britain w lokalu wyborczym wymagany jest teraz dokument ze zdjęciem.",
  "What is the Cabinet?": "Czym jest Cabinet?",
  "All MPs of the governing party": "Wszystkimi MPs partii rządzącej",
  "About 20 senior ministers chosen by the Prime Minister":
    "Około 20 starszych ministrów wybranych przez premiera",
  "The House of Lords committee": "Komisją House of Lords",
  "The civil service leadership": "Kierownictwem służby cywilnej",
  "Senior ministers, each running a department — Chancellor of the Exchequer, Home Secretary, Foreign Secretary and so on.":
    "Starszymi ministrami, każdy kieruje resortem — Chancellor of the Exchequer, Home Secretary, Foreign Secretary i tak dalej.",
  "What is the Opposition?": "Czym jest Opposition?",
  "Members of the Lords who vote against the government":
    "Członkami Lords, którzy głosują przeciw rządowi",
  "The largest party not in government": "Największą partią spoza rządu",
  "Any MP who rebels": "Każdym MP, który się buntuje",
  "The civil service": "Służbą cywilną",
  "Its leader is Leader of the Opposition and heads a shadow cabinet challenging each minister.":
    "Jej lider jest Leader of the Opposition i stoi na czele gabinetu cieni, który rzuca wyzwanie każdemu ministrowi.",
  "Are civil servants politically neutral?":
    "Czy urzędnicy służby cywilnej są politycznie bezstronni?",
  "No — they change with each government": "Nie — zmieniają się z każdym rządem",
  "Yes — they carry out policy but stay in post when the government changes":
    "Tak — realizują politykę, ale zostają na stanowiskach, gdy rząd się zmienia",
  "Only senior ones": "Tylko ci najwyżsi stopniem",
  "They are elected": "Pochodzą z wyboru",
  "Ministers come and go; the civil service stays and serves whichever government is in office.":
    "Ministrowie przychodzą i odchodzą; służba cywilna zostaje i służy każdemu rządowi, który jest u władzy.",
  "What are local council services funded by?": "Z czego finansowane są usługi rad lokalnych?",
  "National Insurance": "Z National Insurance",
  "Council tax and central government funding": "Z council tax i dotacji rządu centralnego",
  "Income tax only": "Wyłącznie z podatku dochodowego",
  "The Crown": "Z korony",
  "Councils run schools, refuse collection, housing, roads and libraries, funded by council tax and central grants.":
    "Rady prowadzą szkoły, wywóz śmieci, mieszkalnictwo, drogi i biblioteki, finansowane z council tax i dotacji centralnych.",
  "What must happen before a bill becomes an Act of Parliament?":
    "Co musi się stać, zanim projekt stanie się Act of Parliament?",
  "Only a Commons vote": "Tylko głosowanie w Commons",
  "Debate and agreement in both Houses, then Royal Assent":
    "Debata i zgoda w obu izbach, potem Royal Assent",
  "A public referendum": "Referendum",
  "Approval by the Supreme Court": "Zgoda Supreme Court",
  "Commons, then Lords, back to the Commons if amended, then the monarch's Royal Assent.":
    "Commons, potem Lords, z powrotem do Commons przy poprawkach, a na koniec Royal Assent monarchy.",
  "Which of these is a national party in Scotland?":
    "Która z tych partii jest partią narodową w Szkocji?",
  "Plaid Cymru": "Plaid Cymru",
  "The SNP": "SNP",
  "Sinn Féin": "Sinn Féin",
  "The Liberal Democrats": "Liberal Democrats",
  "The Scottish National Party. Plaid Cymru is the Welsh national party.":
    "Scottish National Party. Plaid Cymru to walijska partia narodowa.",
  "MSPs in Scotland, MSs in the Senedd, MLAs in the Northern Ireland Assembly, MPs at Westminster.":
    "MSPs w Szkocji, MSs w Senedd, MLAs w Northern Ireland Assembly, MPs w Westminsterze.",
  "What are members of the Northern Ireland Assembly called?":
    "Jak nazywa się członków Northern Ireland Assembly?",
  "TDs": "TDs",
  "MLAs — Members of the Legislative Assembly, at Stormont.":
    "MLAs — Members of the Legislative Assembly, w Stormont.",
  "Which of these is a reserved matter kept by the UK Parliament?":
    "Która z tych spraw jest zastrzeżona dla parlamentu Wielkiej Brytanii?",
  "Defence, foreign policy, immigration, the currency and national security are reserved. Health, education and housing are devolved.":
    "Obrona, polityka zagraniczna, imigracja, waluta i bezpieczeństwo narodowe są zastrzeżone. Zdrowie, edukacja i mieszkalnictwo są przekazane.",
  "Where does the Scottish Parliament sit?": "Gdzie zasiada szkocki parlament?",
  "Stormont": "Stormont",
  "Holyrood": "Holyrood",
  "The Senedd": "Senedd",
  "Westminster": "Westminster",
  "Holyrood in Edinburgh. Stormont is Northern Ireland's, the Senedd is Wales'.":
    "W Holyrood w Edinburghu. Stormont należy do Irlandii Północnej, Senedd do Walii.",
  "What is the Welsh Parliament called?": "Jak nazywa się parlament walijski?",
  "The Assembly": "Assembly",
  "Senedd Cymru. It was called the National Assembly for Wales until 2020.":
    "Senedd Cymru. Do 2020 roku nazywał się National Assembly for Wales.",
  "Does England have its own devolved parliament?": "Czy Anglia ma własny przekazany parlament?",
  "Yes, in Manchester": "Tak, w Manchesterze",
  "Yes, alongside the UK Parliament": "Tak, obok parlamentu Wielkiej Brytanii",
  "No — English matters are decided by the UK Parliament":
    "Nie — o sprawach angielskich decyduje parlament Wielkiej Brytanii",
  "Yes, since 1999": "Tak, od 1999 roku",
  "England has no devolved parliament, which is why the UK Parliament and 'the English one' are easy to confuse.":
    "Anglia nie ma przekazanego parlamentu, i właśnie dlatego łatwo pomylić parlament Wielkiej Brytanii z „angielskim”.",
  "Which agreement created the Northern Ireland Assembly?":
    "Które porozumienie stworzyło Northern Ireland Assembly?",
  "The Good Friday Agreement of 1998": "Good Friday Agreement z 1998 roku",
  "The Scotland Act": "Scotland Act",
  "The Good Friday Agreement, with power shared between communities.":
    "Good Friday Agreement, z władzą dzieloną między społecznościami.",
  "Why do university fees and NHS rules differ across the UK?":
    "Dlaczego opłaty za studia i zasady NHS różnią się w obrębie Wielkiej Brytanii?",
  "Each nation sets its own taxes entirely": "Każdy kraj w całości ustala własne podatki",
  "Health and education are devolved matters": "Zdrowie i edukacja to sprawy przekazane",
  "The EU required it": "Wymagała tego UE",
  "Local councils decide": "Decydują rady lokalne",
  "Health and education are devolved, so each nation's government sets its own policy.":
    "Zdrowie i edukacja są przekazane, więc rząd każdego z krajów prowadzi własną politykę.",
  "How many people sit on a jury in Scotland?":
    "Ile osób zasiada w ławie przysięgłych w Szkocji?",
  "15 — Scotland has its own legal system and differs from the rest of the UK here.":
    "15 — Szkocja ma własny system prawny i różni się tu od reszty Wielkiej Brytanii.",
  "Crown Court judges with a jury": "Sędziowie Crown Court z ławą przysięgłych",
  "Magistrates, usually unpaid volunteers": "Magistrates, zwykle niepłatni ochotnicy",
  "Barristers sitting as a panel": "Barristers zasiadający w składzie",
  "Magistrates handle the great majority of criminal cases and are members of the local community.":
    "Magistrates rozpatrują ogromną większość spraw karnych i są członkami lokalnej społeczności.",
  "Theft": "Kradzież",
  "Civil law covers disputes between people and organisations. The other three are criminal offences.":
    "Prawo cywilne dotyczy sporów między ludźmi i organizacjami. Pozostałe trzy to przestępstwa.",
  "What is the highest court of appeal in the UK?":
    "Który sąd jest najwyższą instancją odwoławczą w Wielkiej Brytanii?",
  "The Crown Court": "Crown Court",
  "The Court of Appeal": "Court of Appeal",
  "The Supreme Court, which took over that role from the House of Lords in 2009.":
    "Supreme Court, który przejął tę rolę od House of Lords w 2009 roku.",
  "Between which ages can you be summoned for jury service?":
    "W jakim przedziale wieku można zostać wezwanym do ławy przysięgłych?",
  "16 to 65": "Od 16 do 65 lat",
  "18 to 70": "Od 18 do 70 lat",
  "21 to 70": "Od 21 do 70 lat",
  "18 to 65": "Od 18 do 65 lat",
  "18 to 70, if you are on the electoral register. It is a legal duty.":
    "Od 18 do 70 lat, jeśli jest się w rejestrze wyborców. To obowiązek prawny.",
  "What is legal aid?": "Czym jest legal aid?",
  "Free advice from the police": "Bezpłatną poradą od policji",
  "Public funding for legal advice or representation for those who cannot afford it":
    "Publicznym finansowaniem porady prawnej albo reprezentacji dla tych, których na nią nie stać",
  "A charity run by solicitors": "Organizacją charytatywną prowadzoną przez solicitors",
  "Insurance against losing a case": "Ubezpieczeniem od przegrania sprawy",
  "It exists so the right to a fair trial is real rather than theoretical.":
    "Istnieje po to, żeby prawo do rzetelnego procesu było realne, a nie teoretyczne.",
  "What is the difference between a solicitor and a barrister?":
    "Czym różni się solicitor od barrister?",
  "Solicitors advise and prepare cases; barristers argue in the higher courts":
    "Solicitors doradzają i przygotowują sprawy; barristers występują przed sądami wyższymi",
  "Barristers advise; solicitors judge": "Barristers doradzają; solicitors sądzą",
  "There is no difference": "Niczym",
  "Solicitors work only for the government": "Solicitors pracują wyłącznie dla rządu",
  "Solicitors give advice and represent clients in lower courts; barristers are specialist advocates in the higher courts.":
    "Solicitors udzielają porad i reprezentują klientów przed sądami niższymi; barristers to wyspecjalizowani obrońcy przed sądami wyższymi.",
  "Who decides the sentence in a Crown Court trial?":
    "Kto orzeka o karze w procesie przed Crown Court?",
  "The jury": "Ława przysięgłych",
  "The judge": "Sędzia",
  "The magistrates": "Magistrates",
  "The prosecution": "Oskarżenie",
  "The jury decides guilt; the judge decides the law and the sentence.":
    "Ława przysięgłych rozstrzyga o winie; sędzia rozstrzyga kwestie prawne i wymierza karę.",
  "Are judges independent of the government?": "Czy sędziowie są niezależni od rządu?",
  "No, they are appointed by ministers and follow their instructions":
    "Nie, mianują ich ministrowie i wykonują ich polecenia",
  "Yes — they interpret the law and can find government action unlawful":
    "Tak — wykładają prawo i mogą uznać działanie rządu za bezprawne",
  "Only in the Supreme Court": "Tylko w Supreme Court",
  "Only in civil cases": "Tylko w sprawach cywilnych",
  "Judicial independence is central to the rule of law. A government act found unlawful must be put right.":
    "Niezawisłość sędziowska jest sednem rządów prawa. Działanie rządu uznane za bezprawne trzeba naprawić.",
  "What is the age of criminal responsibility in Scotland?":
    "Od jakiego wieku w Szkocji ponosi się odpowiedzialność karną?",
  "12 in Scotland and 10 in England, Wales and Northern Ireland — a difference the test likes to ask about.":
    "12 lat w Szkocji i 10 w Anglii, Walii i Irlandii Północnej — o tę różnicę egzamin lubi pytać.",
  "Must the police obey the law themselves?": "Czy policja sama musi przestrzegać prawa?",
  "No, they are exempt while on duty": "Nie, na służbie jest z tego zwolniona",
  "Yes — and complaints against them are investigated independently":
    "Tak — a skargi na policję bada się niezależnie",
  "Only senior officers": "Tylko funkcjonariusze wyższych stopni",
  "Only in civil matters": "Tylko w kwestiach cywilnych",
  "Everyone is subject to the law, including the police. That is what the rule of law means.":
    "Każdy podlega prawu, także policja. Właśnie to znaczą rządy prawa.",
  "Local council services": "Usługi rady lokalnej",
  "NI contributions build entitlement to the state pension and some benefits. Council tax pays for local services.":
    "Składki NI budują uprawnienie do emerytury państwowej i części świadczeń. Council tax opłaca usługi lokalne.",
  "How do most employees pay income tax?":
    "W jaki sposób większość pracowników płaci podatek dochodowy?",
  "By annual cheque": "Corocznym czekiem",
  "Through PAYE, deducted by the employer": "Przez PAYE, potrącany przez pracodawcę",
  "Through Self Assessment": "Przez Self Assessment",
  "At their local council": "W swojej radzie lokalnej",
  "PAYE — Pay As You Earn. The self-employed complete a Self Assessment return instead.":
    "PAYE — Pay As You Earn. Samozatrudnieni składają zamiast tego zeznanie Self Assessment.",
  "Which body collects tax in the UK?": "Który urząd pobiera podatki w Wielkiej Brytanii?",
  "The Treasury": "Treasury",
  "HM Revenue and Customs": "HM Revenue and Customs",
  "The Bank of England": "Bank of England",
  "The Home Office": "Home Office",
  "HMRC collects income tax, National Insurance and other taxes.":
    "HMRC pobiera podatek dochodowy, National Insurance i inne podatki.",
  "Which Act brought the European Convention on Human Rights into UK law?":
    "Która ustawa wprowadziła Europejską Konwencję Praw Człowieka do prawa brytyjskiego?",
  "The Human Rights Act 1998.": "Human Rights Act 1998.",
  "Which of these is a responsibility of living in the UK?":
    "Która z tych rzeczy jest obowiązkiem życia w Wielkiej Brytanii?",
  "Joining a political party": "Wstąpienie do partii politycznej",
  "Paying tax and National Insurance": "Płacenie podatków i National Insurance",
  "Attending church": "Chodzenie do kościoła",
  "Owning property": "Posiadanie nieruchomości",
  "Tax and National Insurance fund the NHS, schools, roads, defence and the police.":
    "Podatki i National Insurance finansują NHS, szkoły, drogi, obronę i policję.",
  "How is a vote cast in a UK election?":
    "W jaki sposób oddaje się głos w brytyjskich wyborach?",
  "Publicly, by show of hands": "Jawnie, przez podniesienie ręki",
  "By secret ballot": "W tajnym głosowaniu",
  "By declaring it to a returning officer": "Ogłaszając go returning officer",
  "Online only": "Wyłącznie przez internet",
  "By secret ballot — your vote cannot be seen or traced.":
    "W tajnym głosowaniu — twojego głosu nie da się zobaczyć ani powiązać z tobą.",
  "What should you do about a law you disagree with?":
    "Co należy zrobić z prawem, z którym się nie zgadzasz?",
  "Ignore it": "Zignorować je",
  "Campaign and vote to change it, while still obeying it":
    "Prowadzić kampanię i głosować za jego zmianą, przestrzegając go w tym czasie",
  "Take it to the monarch": "Zanieść sprawę do monarchy",
  "Refuse to pay tax": "Odmówić płacenia podatków",
  "Obey the law while working to change it. That is the difference between liberty and lawlessness.":
    "Przestrzegać prawa i pracować nad jego zmianą. Na tym polega różnica między wolnością a bezprawiem.",
  "Allowed with parental consent": "Dozwolone za zgodą rodziców",
  "A criminal offence": "Przestępstwem",
  "Allowed over 21": "Dozwolone powyżej 21 lat",
  "A civil matter only": "Wyłącznie sprawą cywilną",
  "Forcing someone to marry is a crime. An arranged marriage both people freely accept is lawful; a forced one is not.":
    "Zmuszanie kogoś do małżeństwa jest przestępstwem. Małżeństwo aranżowane, na które oboje godzą się dobrowolnie, jest legalne; wymuszone nie.",
  "What is a civil partnership?": "Czym jest civil partnership?",
  "A business agreement": "Umową handlową",
  "A legal alternative to marriage with similar rights":
    "Prawną alternatywą dla małżeństwa, z podobnymi prawami",
  "A form of employment contract": "Rodzajem umowy o pracę",
  "A council housing arrangement": "Formą najmu mieszkania komunalnego",
  "Open to both same-sex and opposite-sex couples, with rights similar to marriage.":
    "Otwarte dla par jednopłciowych i różnopłciowych, z prawami podobnymi do małżeństwa.",
  "When did same-sex marriage become legal in Northern Ireland?":
    "Kiedy małżeństwa jednopłciowe stały się legalne w Irlandii Północnej?",
  "2014": "2014",
  "It is not legal there": "Nie są tam legalne",
  "2020 in Northern Ireland; 2014 in England, Wales and Scotland.":
    "W 2020 w Irlandii Północnej; w 2014 w Anglii, Walii i Szkocji.",
  "How is volunteering regarded in the UK?":
    "Jak w Wielkiej Brytanii postrzega się wolontariat?",
  "As unusual and discouraged": "Jako coś niezwykłego i niemile widzianego",
  "As a valued part of community life": "Jako cenioną część życia wspólnoty",
  "As paid part-time work": "Jako płatną pracę na część etatu",
  "As compulsory for citizens": "Jako obowiązek obywateli",
  "Charity shops, food banks, sports clubs, school governors — giving time is treated as valuable as giving money.":
    "Sklepy charytatywne, banki żywności, kluby sportowe, rady szkół — dawanie czasu ceni się tak samo jak dawanie pieniędzy.",
  "Roughly what share of the UK population belongs to a minority ethnic group?":
    "Mniej więcej jaka część ludności Wielkiej Brytanii należy do mniejszości etnicznych?",
  "About a fifth": "Około jedna piąta",
  "About a half": "Około połowa",
  "About three quarters": "Około trzy czwarte",
  "Roughly a fifth, with the largest cities being the most diverse.":
    "Mniej więcej jedna piąta, a najbardziej różnorodne są największe miasta.",
  "The monarch — a role dating from Henry VIII's break with Rome. The Archbishop of Canterbury is its senior bishop.":
    "Monarcha — rola sięgająca zerwania Henryka VIII z Rzymem. Archbishop of Canterbury jest jego najwyższym rangą biskupem.",
  "Which nation of the UK has a Presbyterian national church?":
    "Który kraj Wielkiej Brytanii ma prezbiteriański kościół narodowy?",
  "The Church of Scotland. Wales and Northern Ireland have no established church at all.":
    "Church of Scotland. Walia i Irlandia Północna nie mają w ogóle kościoła państwowego.",
  "What is the second largest religion in the UK?":
    "Która religia jest drugą co do wielkości w Wielkiej Brytanii?",
  "Islam. Christianity is the largest, and a large and growing share of people report no religion.":
    "Islam. Chrześcijaństwo jest największe, a duża i rosnąca część ludzi deklaruje brak religii.",
  "Which festival is known as the festival of lights?": "Które święto zwie się świętem świateł?",
  "Eid al-Fitr": "Id al-Fitr",
  "Diwali": "Diwali",
  "Vaisakhi": "Vaisakhi",
  "Hanukkah": "Chanuka",
  "Diwali, the Hindu festival of lights, also marked by Sikhs and Jains.":
    "Diwali, hinduskie święto świateł, obchodzone też przez sikhów i dźinistów.",
  "Who founded Sikhism?": "Kto założył sikhizm?",
  "Guru Nanak": "Guru Nanak",
  "The Buddha": "Budda",
  "Guru Gobind Singh": "Guru Gobind Singh",
  "Moses": "Mojżesz",
  "Guru Nanak. Vaisakhi is the major Sikh festival.":
    "Guru Nanak. Vaisakhi jest głównym świętem sikhów.",
  "Does religious tolerance in the UK protect people with no religion?":
    "Czy tolerancja religijna w Wielkiej Brytanii chroni ludzi bez religii?",
  "No, only believers": "Nie, tylko wierzących",
  "Yes — belief and non-belief are both protected":
    "Tak — chronione są zarówno wiara, jak i jej brak",
  "Only in Scotland": "Tylko w Szkocji",
  "Only in schools": "Tylko w szkołach",
  "Religion or belief is a protected characteristic, and that includes having none.":
    "Religia lub przekonania to cecha chroniona, a to obejmuje także ich brak.",
  "Which senior clergy sit in the House of Lords?":
    "Którzy wysocy duchowni zasiadają w House of Lords?",
  "Roman Catholic bishops": "Biskupi rzymskokatoliccy",
  "Church of England bishops": "Biskupi Church of England",
  "Church of Scotland ministers": "Duchowni Church of Scotland",
  "No clergy sit in the Lords": "W Lords nie zasiadają żadni duchowni",
  "Senior Church of England bishops sit in the Lords — a consequence of it being the established church in England.":
    "W Lords zasiadają starsi biskupi Church of England — skutek tego, że jest to kościół państwowy w Anglii.",
  "What is celebrated on 26 December?": "Co obchodzi się 26 grudnia?",
  "Christmas Eve": "Wigilię",
  "Boxing Day": "Boxing Day",
  "New Year's Eve": "Sylwestra",
  "Twelfth Night": "Twelfth Night",
  "Boxing Day, a public holiday throughout the UK.":
    "Boxing Day, dzień wolny w całej Wielkiej Brytanii.",
  "A Northern Irish holiday in July": "Świętem Irlandii Północnej w lipcu",
  "New Year's Eve in Scotland, celebrated on a larger scale than elsewhere. Scotland also takes 2 January as a holiday.":
    "Sylwestrem w Szkocji, obchodzonym z większym rozmachem niż gdzie indziej. Szkocja ma też wolne 2 stycznia.",
  "What is eaten on Shrove Tuesday?": "Co jada się w Shrove Tuesday?",
  "Hot cross buns": "Hot cross buns",
  "Pancakes": "Naleśniki",
  "Christmas pudding": "Christmas pudding",
  "Haggis": "Haggis",
  "Pancake Day, the day before Lent begins. It is not a public holiday.":
    "Pancake Day, dzień przed początkiem Wielkiego Postu. Nie jest dniem wolnym.",
  "What does Remembrance Day on 11 November mark?":
    "Co upamiętnia Remembrance Day 11 listopada?",
  "The Gunpowder Plot": "Spisek prochowy",
  "The Battle of Britain": "Battle of Britain",
  "The armistice of 11 November 1918. Poppies are worn and there is a two-minute silence at 11am.":
    "Rozejm z 11 listopada 1918 roku. Nosi się maki, a o 11 rano zapada dwuminutowa cisza.",
  "Which two patron saints' days are public holidays in their nations?":
    "Wspomnienia których dwóch patronów są dniami wolnymi w ich krajach?",
  "St George's and St David's": "St George i St David",
  "St Patrick's and St Andrew's": "St Patrick i St Andrew",
  "St George's and St Andrew's": "St George i St Andrew",
  "All four are public holidays": "Wszystkie cztery są dniami wolnymi",
  "St Patrick's Day in Northern Ireland and St Andrew's Day in Scotland. St George's and St David's are not.":
    "St Patrick's Day w Irlandii Północnej i St Andrew's Day w Szkocji. St George's i St David's nie są.",
  "What are bank holidays?": "Czym są bank holidays?",
  "Days when only banks close": "Dniami, w których zamykają się tylko banki",
  "Public holidays when most businesses close":
    "Dniami wolnymi, w których większość firm jest zamknięta",
  "Days for paying taxes": "Dniami płacenia podatków",
  "Religious festivals only": "Wyłącznie świętami religijnymi",
  "They differ between the four nations, and include days in early May, late May and August.":
    "Różnią się między czterema krajami i obejmują dni na początku maja, pod koniec maja i w sierpniu.",
  "When is Burns Night?": "Kiedy jest Burns Night?",
  "1 January": "1 stycznia",
  "25 January": "25 stycznia",
  "25 January, celebrating Robert Burns, Scotland's national poet.":
    "25 stycznia, na cześć Roberta Burnsa, narodowego poety Szkocji.",
  "On what date is Halloween?": "Na jaką datę przypada Halloween?",
  "31 October": "31 października",
  "5 November": "5 listopada",
  "1 November": "1 listopada",
  "11 November": "11 listopada",
  "31 October — an ancient festival, now marked with costumes and pumpkins. Bonfire Night follows on 5 November.":
    "31 października — dawne święto, dziś obchodzone z przebraniami i dyniami. Bonfire Night wypada 5 listopada.",
  "Which Easter days are public holidays in most of the UK?":
    "Które dni Wielkanocy są dniami wolnymi w większości Wielkiej Brytanii?",
  "Good Friday and Easter Monday": "Wielki Piątek i poniedziałek wielkanocny",
  "Easter Sunday only": "Tylko niedziela wielkanocna",
  "The whole Easter week": "Cały tydzień wielkanocny",
  "Maundy Thursday only": "Tylko Wielki Czwartek",
  "Good Friday and Easter Monday. The date moves each year, falling in March or April.":
    "Wielki Piątek i poniedziałek wielkanocny. Data zmienia się co roku i wypada w marcu albo kwietniu.",
  "What is traditionally eaten for Christmas dinner in Britain?":
    "Co tradycyjnie jada się w Brytanii na obiad bożonarodzeniowy?",
  "Roast turkey": "Pieczonego indyka",
  "Fish and chips": "Fish and chips",
  "Roast lamb": "Pieczoną jagnięcinę",
  "Roast turkey with vegetables, followed by Christmas pudding.":
    "Pieczonego indyka z warzywami, a po nim Christmas pudding.",
  "Wimbledon is a district of south-west London — the oldest tennis tournament in the world.":
    "Wimbledon to dzielnica południowo-zachodniego Londynu — najstarszy turniej tenisowy na świecie.",
  "Golf, with St Andrews as its historic home. Cricket and rugby originated in England.":
    "Golf, którego historycznym domem jest St Andrews. Krykiet i rugby narodziły się w Anglii.",
  "What is the Ashes?": "Czym są the Ashes?",
  "A rugby tournament": "Turniejem rugby",
  "A Test cricket series between England and Australia":
    "Serią meczów testowych w krykieta między Anglią a Australią",
  "A horse race at Aintree": "Wyścigiem konnym w Aintree",
  "A golf championship": "Mistrzostwami w golfie",
  "The historic cricket series between England and Australia. Lord's in London is the most famous ground.":
    "Historyczną serią meczów krykieta między Anglią a Australią. Lord's w Londynie to najsłynniejszy stadion.",
  "Which nations compete in the Six Nations rugby championship?":
    "Które reprezentacje grają w turnieju rugby Six Nations?",
  "Only the four UK nations": "Tylko cztery kraje Wielkiej Brytanii",
  "England, Scotland, Wales, Ireland, France and Italy":
    "Anglia, Szkocja, Walia, Irlandia, Francja i Włochy",
  "The Commonwealth nations": "Kraje Commonwealthu",
  "England, Wales, Australia, France, Italy and Ireland":
    "Anglia, Walia, Australia, Francja, Włochy i Irlandia",
  "The four home nations plus France and Italy — and Ireland competes as one team, north and south.":
    "Cztery kraje Wielkiej Brytanii plus Francja i Włochy — a Irlandia gra jedną drużyną, północ i południe razem.",
  "Where is the Grand National run?": "Gdzie rozgrywa się Grand National?",
  "Ascot": "Ascot",
  "Aintree": "Aintree",
  "Epsom": "Epsom",
  "Cheltenham": "Cheltenham",
  "Aintree, near Liverpool. Royal Ascot and the Derby at Epsom are the other famous meetings.":
    "W Aintree pod Liverpoolem. Royal Ascot i Derby w Epsom to pozostałe słynne mityngi.",
  "How do the UK nations compete at the Commonwealth Games?":
    "Jak kraje Wielkiej Brytanii startują w Commonwealth Games?",
  "As one British team": "Jako jedna drużyna brytyjska",
  "Each nation competes separately": "Każdy kraj startuje osobno",
  "Only England competes": "Startuje tylko Anglia",
  "As two teams, Britain and Ireland": "Jako dwie drużyny, Brytania i Irlandia",
  "England, Scotland, Wales and Northern Ireland each enter separately — unlike at the Olympics.":
    "Anglia, Szkocja, Walia i Irlandia Północna zgłaszają się osobno — inaczej niż na igrzyskach olimpijskich.",
  "What is the oldest football competition in the world?":
    "Które rozgrywki piłkarskie są najstarsze na świecie?",
  "The Premier League": "Premier League",
  "The FA Cup": "FA Cup",
  "The World Cup": "Mistrzostwa świata",
  "The Champions League": "Liga Mistrzów",
  "The FA Cup, an English competition and the oldest in the sport.":
    "FA Cup, rozgrywki angielskie i najstarsze w tym sporcie.",
  "Which organisation cares for many historic houses, gardens and coastline in the UK?":
    "Która organizacja opiekuje się wieloma zabytkowymi domami, ogrodami i wybrzeżem w Wielkiej Brytanii?",
  "The National Trust": "National Trust",
  "English Heritage only": "Wyłącznie English Heritage",
  "The National Trust, a charity that protects historic places and open countryside.":
    "National Trust, organizacja charytatywna, która chroni zabytkowe miejsca i otwartą przyrodę.",
  "Chaucer, in the fourteenth century — two hundred years before Shakespeare.":
    "Chaucer, w XIV wieku — dwieście lat przed Shakespeare'em.",
  "Liverpool — the most commercially successful band in British history.":
    "Liverpool — zespół, który odniósł największy komercyjny sukces w historii Brytanii.",
  "Scotland's Bard. He wrote Auld Lang Syne, sung at New Year around the world.":
    "Bard Szkocji. Napisał Auld Lang Syne, śpiewane na całym świecie w Nowy Rok.",
  "Who wrote Pride and Prejudice?": "Kto napisał Dumę i uprzedzenie?",
  "Charlotte Brontë": "Charlotte Brontë",
  "George Eliot": "George Eliot",
  "Agatha Christie": "Agatha Christie",
  "Jane Austen, whose novels portray English social life in the early nineteenth century.":
    "Jane Austen, której powieści malują angielskie życie towarzyskie początku XIX wieku.",
  "Which novelist wrote Oliver Twist and Great Expectations?":
    "Który powieściopisarz napisał Olivera Twista i Wielkie nadzieje?",
  "Thomas Hardy": "Thomas Hardy",
  "Rudyard Kipling": "Rudyard Kipling",
  "George Orwell": "George Orwell",
  "Charles Dickens, whose books exposed the poverty of industrial Britain.":
    "Charles Dickens, którego książki obnażyły biedę przemysłowej Brytanii.",
  "Where is the National Gallery?": "Gdzie jest National Gallery?",
  "Trafalgar Square, London": "Trafalgar Square, Londyn",
  "Trafalgar Square in London. It holds the national collection of paintings and is free to enter.":
    "Na Trafalgar Square w Londynie. Mieści narodową kolekcję malarstwa, a wstęp jest bezpłatny.",
  "In which year was the British Museum founded?": "W którym roku założono British Museum?",
  "1653": "1653",
  "1753": "1753",
  "1853": "1853",
  "1901": "1901",
  "1753 — the first national public museum in the world, and free to enter.":
    "1753 — pierwsze narodowe muzeum publiczne na świecie, z bezpłatnym wstępem.",
  "Which prize for contemporary art is named after a British painter?":
    "Która nagroda dla sztuki współczesnej nosi imię brytyjskiego malarza?",
  "The Booker Prize": "Booker Prize",
  "The Turner Prize": "Turner Prize",
  "The Mercury Prize": "Mercury Prize",
  "The Brit Award": "Brit Award",
  "The Turner Prize, named after J. M. W. Turner, the painter of light and sea.":
    "Turner Prize, nazwana od J. M. W. Turnera, malarza światła i morza.",
  "What are the Proms?": "Czym są the Proms?",
  "A summer season of classical concerts at the Royal Albert Hall":
    "Letnim sezonem koncertów muzyki klasycznej w Royal Albert Hall",
  "A rock festival in Somerset": "Festiwalem rockowym w Somerset",
  "A poetry competition": "Konkursem poetyckim",
  "A dance tradition in Wales": "Tradycją taneczną w Walii",
  "Running since 1895 and ending with the Last Night of the Proms.":
    "Odbywają się od 1895 roku i kończą się Last Night of the Proms.",
  "Which of these composers was British?": "Który z tych kompozytorów był Brytyjczykiem?",
  "Edward Elgar": "Edward Elgar",
  "Johann Sebastian Bach": "Johann Sebastian Bach",
  "Wolfgang Amadeus Mozart": "Wolfgang Amadeus Mozart",
  "Antonín Dvořák": "Antonín Dvořák",
  "Elgar, alongside Purcell, Holst, Vaughan Williams and Britten.":
    "Elgar, obok Purcella, Holsta, Vaughana Williamsa i Brittena.",
  "Fleming, a Scottish scientist, in 1928. It became the first widely used antibiotic.":
    "Fleming, szkocki uczony, w 1928 roku. Stała się pierwszym powszechnie stosowanym antybiotykiem.",
  "Tim Berners-Lee, in 1989 while working at CERN.":
    "Tim Berners-Lee, w 1989 roku, pracując w CERN.",
  "Which scientist described gravity and the laws of motion?":
    "Który uczony opisał grawitację i prawa ruchu?",
  "Newton, whose Principia Mathematica is one of the most important scientific books ever written.":
    "Newton, którego Principia Mathematica to jedna z najważniejszych książek naukowych, jakie napisano.",
  "Who gave the first public demonstration of television?":
    "Kto po raz pierwszy publicznie pokazał telewizję?",
  "John Logie Baird, a Scot. Bell developed the telephone.":
    "John Logie Baird, Szkot. Bell rozwinął telefon.",
  "Whose X-ray work was essential to discovering the structure of DNA?":
    "Czyja praca rentgenowska była niezbędna do odkrycia struktury DNA?",
  "Ada Lovelace": "Ada Lovelace",
  "Dorothy Hodgkin": "Dorothy Hodgkin",
  "Rosalind Franklin, alongside Crick and Watson.": "Rosalind Franklin, obok Cricka i Watsona.",
  "Who discovered electromagnetic induction, the principle behind the electric motor?":
    "Kto odkrył indukcję elektromagnetyczną, zasadę stojącą za silnikiem elektrycznym?",
  "Michael Faraday — the principle behind both the motor and the generator.":
    "Michael Faraday — zasada ta stoi zarówno za silnikiem, jak i za prądnicą.",
  "Where was Dolly the sheep, the first cloned mammal, created?":
    "Gdzie stworzono owcę Dolly, pierwszego sklonowanego ssaka?",
  "Scotland, in 1996.": "W Szkocji, w 1996 roku.",
  "In which country did the first successful IVF birth take place?":
    "W którym kraju doszło do pierwszych udanych narodzin z zapłodnienia in vitro?",
  "The United States": "Stany Zjednoczone",
  "France": "Francja",
  "Australia": "Australia",
  "England, in 1978.": "W Anglii, w 1978 roku.",
  "Who laid the foundations of computer science and worked at Bletchley Park?":
    "Kto położył podwaliny informatyki i pracował w Bletchley Park?",
  "Alan Turing, whose codebreaking work shortened the Second World War.":
    "Alan Turing, którego praca nad łamaniem szyfrów skróciła drugą wojnę światową.",
  "Margaret Thatcher, from 1979 to 1990. Theresa May was the second, from 2016.":
    "Margaret Thatcher, od 1979 do 1990 roku. Theresa May była drugą, od 2016.",
  "Which Prime Minister's government built the welfare state and the NHS?":
    "Rząd którego premiera zbudował państwo opiekuńcze i NHS?",
  "Attlee's government, elected in 1945. Bevan founded the NHS as his Health Minister.":
    "Rząd Attleego, wybrany w 1945 roku. Bevan założył NHS jako jego minister zdrowia.",
  "Who opened Britain's first Indian restaurant and introduced shampooing?":
    "Kto otworzył pierwszą indyjską restaurację w Brytanii i wprowadził szamponowanie?",
  "Gandhi": "Gandhi",
  "Sake Dean Mahomet, an early figure in Britain's multicultural history.":
    "Sake Dean Mahomet, wczesna postać wielokulturowej historii Brytanii.",
  "Which explorer's voyages mapped much of the Pacific?":
    "Czyje wyprawy odwzorowały na mapach większość Pacyfiku?",
  "Captain James Cook": "Kapitana Jamesa Cooka",
  "Sir Walter Raleigh": "Sir Waltera Raleigha",
  "Ernest Shackleton": "Ernesta Shackletona",
  "Captain James Cook, in the eighteenth century.": "Kapitan James Cook, w XVIII wieku.",
  "Who was voted the greatest Briton in a national poll?":
    "Kogo wybrano największym Brytyjczykiem w ogólnokrajowym plebiscycie?",
  "Winston Churchill, who led Britain through the Second World War.":
    "Winstona Churchilla, który przeprowadził Brytanię przez drugą wojnę światową.",
  "Who led Scottish resistance to Edward I and was executed in 1305?":
    "Kto poprowadził szkocki opór przeciw Edwardowi I i został stracony w 1305 roku?",
  "Rob Roy": "Rob Roy",
  "William Wallace. Robert the Bruce later won independence at Bannockburn in 1314.":
    "William Wallace. Robert Bruce wywalczył potem niepodległość pod Bannockburn w 1314 roku.",
  "Which of these people campaigned to abolish the slave trade?":
    "Która z tych osób prowadziła kampanię o zniesienie handlu niewolnikami?",
  "Wilberforce led the parliamentary campaign that ended the trade in 1807.":
    "Wilberforce poprowadził kampanię w parlamencie, która zakończyła ten handel w 1807 roku.",
  "5 to 16 in England, Wales and Scotland; Northern Ireland starts at 4. In England you must stay in education or training until 18.":
    "Od 5 do 16 lat w Anglii, Walii i Szkocji; Irlandia Północna zaczyna od 4. W Anglii trzeba zostać w nauce albo szkoleniu do 18 roku życia.",
  "111 is the NHS urgent advice line. 999 and 112 are emergencies; 101 is non-emergency police.":
    "111 to linia pilnych porad NHS. 999 i 112 są od nagłych wypadków; 101 to policja w sprawach niepilnych.",
  "Which numbers reach the emergency services in the UK?":
    "Które numery łączą ze służbami ratunkowymi w Wielkiej Brytanii?",
  "999 or 112": "999 albo 112",
  "111 or 101": "111 albo 101",
  "911 only": "Wyłącznie 911",
  "100 or 200": "100 albo 200",
  "Both 999 and 112 are free from any phone and reach police, ambulance, fire and coastguard.":
    "Zarówno 999, jak i 112 są bezpłatne z każdego telefonu i łączą z policją, pogotowiem, strażą pożarną i strażą przybrzeżną.",
  "What does 'free at the point of use' mean for the NHS?":
    "Co dla NHS znaczy „bezpłatny w chwili korzystania”?",
  "You are not charged for treatment when you receive it, because it is funded by taxation":
    "Że nie płacisz za leczenie, kiedy je otrzymujesz, bo finansują je podatki",
  "Only emergencies are free": "Że bezpłatne są tylko nagłe wypadki",
  "Only citizens are treated free": "Że bezpłatnie leczy się tylko obywateli",
  "Care is based on clinical need, not ability to pay, and is paid for through taxation.":
    "Opieka zależy od potrzeby medycznej, a nie od zamożności, i jest opłacana z podatków.",
  "Who is normally your first point of contact for NHS healthcare?":
    "Kto jest zwykle pierwszym punktem kontaktu w opiece NHS?",
  "A hospital consultant": "Szpitalny konsultant",
  "A pharmacist": "Farmaceuta",
  "The ambulance service": "Pogotowie",
  "A general practitioner. You need to be registered with a local practice to be referred onward for most care.":
    "Lekarz rodzinny. Trzeba być zapisanym do miejscowej praktyki, żeby dostać skierowanie do większości świadczeń.",
  "Where are NHS prescriptions free?": "Gdzie recepty NHS są bezpłatne?",
  "Everywhere in the UK": "Wszędzie w Wielkiej Brytanii",
  "Scotland, Wales and Northern Ireland": "W Szkocji, Walii i Irlandii Północnej",
  "England only": "Wyłącznie w Anglii",
  "Nowhere": "Nigdzie",
  "Free in Scotland, Wales and Northern Ireland; charged in England, with many exemptions.":
    "Bezpłatne w Szkocji, Walii i Irlandii Północnej; płatne w Anglii, z licznymi zwolnieniami.",
  "What are the main exams taken at 16 in England, Wales and Northern Ireland?":
    "Jakie główne egzaminy zdaje się w wieku 16 lat w Anglii, Walii i Irlandii Północnej?",
  "A levels": "A levels",
  "GCSEs": "GCSEs",
  "Highers": "Highers",
  "Degrees": "Dyplomy",
  "GCSEs. Scotland has National Qualifications instead, and Highers in place of A levels.":
    "GCSEs. Szkocja ma zamiast tego National Qualifications, a w miejsce A levels — Highers.",
  "Which are the two oldest universities in the UK?":
    "Które dwa uniwersytety są najstarsze w Wielkiej Brytanii?",
  "Oxford and Cambridge": "Oxford i Cambridge",
  "Edinburgh and Glasgow": "Edinburgh i Glasgow",
  "London and Durham": "Londyn i Durham",
  "St Andrews and Aberdeen": "St Andrews i Aberdeen",
  "Oxford and Cambridge. Tuition fees differ across the UK because education is devolved.":
    "Oxford i Cambridge. Opłaty za studia różnią się w obrębie Wielkiej Brytanii, bo edukacja jest sprawą przekazaną.",
  "Is misusing the 999 emergency number an offence?":
    "Czy nadużycie numeru alarmowego 999 jest przestępstwem?",
  "No, it is simply discouraged": "Nie, jest tylko niemile widziane",
  "Yes, it is an offence": "Tak, jest przestępstwem",
  "Only if repeated": "Tylko jeśli się powtarza",
  "Only for businesses": "Tylko dla firm",
  "999 is for a life at risk, serious injury, a crime in progress or a fire. Misusing it is an offence — 111 exists for everything else urgent.":
    "999 jest od zagrożenia życia, poważnego urazu, przestępstwa w toku albo pożaru. Nadużywanie go jest przestępstwem — od wszystkiego innego pilnego jest 111.",
};
