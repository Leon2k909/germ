/**
 * Polish for the Vivere in Italia course cards, headings and questions.
 *
 * Keyed on the ITALIAN source text exactly as it appears in
 * vivereInItaliaCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * in the course is one nobody can ever see, and nothing reports it at
 * runtime: the card renders, the tap works, and the reader is told there is
 * no translation for a card that was in fact translated. So every key here
 * was extracted from the built module and paired back, never retyped.
 *
 * Covers the QUIZZES as well as the lesson text. A lesson that ends in three
 * untranslated questions is not a lesson somebody can finish.
 *
 * WHAT STAYS ITALIAN, and it follows VIVERE_IN_ITALIA_DE and _FR so that a
 * reader who switches between the tables does not meet one word glossed two
 * ways. Institutions keep their Italian name where the exam asks for it —
 * Camera dei deputati, Senato della Repubblica, Corte costituzionale,
 * Presidente del Consiglio, Consiglio superiore della magistratura — and the
 * Polish carries the explanation around them. Where a word is the answer
 * itself and Polish has none of its own — codice fiscale, permesso di
 * soggiorno, questura, partita IVA, IRPEF, INPS, INAIL, CCNL, TFR, SPID,
 * tredicesima, Ferragosto, distretto industriale — the Polish gives the
 * meaning and keeps the Italian word beside it, so the reader learns the term
 * they will actually meet at the counter.
 *
 * Latin that the course quotes as Latin stays Latin: feriae Augusti, simul
 * stabunt simul cadent. Translating those would remove the very thing the
 * sentence is teaching.
 *
 * Place names take their Polish exonym where Polish has one and uses nothing
 * else — Mediolan, Neapol, Wenecja, Sycylia, Piza, Turyn, Florencja — while
 * regions and streets that a reader would look up on a map keep the Italian:
 * Valle d'Aosta, Trentino-Alto Adige, via dei Fori Imperiali, Palazzo Chigi.
 */
export const VIVERE_IN_ITALIA_PL: Record<string, string> = {
  "Storia, ordinamento e vita quotidiana — come funziona il paese.":
    "Historia, ustrój i życie codzienne — jak funkcjonuje ten kraj.",
  "Simboli nazionali": "Symbole narodowe",
  "Simboli e principi fondamentali": "Symbole i zasady podstawowe",
  "Perché si comincia da qui: i simboli si incontrano tutti i giorni — sul municipio, sul passaporto, sulla maglia della nazionale — e sono quindi la porta più facile per entrare in tutto il resto.":
    "Dlaczego zaczynamy od tego: symbole spotyka się codziennie — na ratuszu, w paszporcie, na koszulce reprezentacji — i są przez to najłatwiejszą bramą do całej reszty.",
  "La bandiera": "Flaga",
  "Il **tricolore** ha tre bande verticali di uguali dimensioni: **verde** dalla parte dell'asta, **bianco** al centro, **rosso** al battente. Lo descrive l'**articolo 12** della Costituzione, l'ultimo dei principi fondamentali — il che dice già qualcosa: la bandiera non è un dettaglio decorativo, sta fra le cose che fondano la Repubblica.":
    "**Tricolore** ma trzy pionowe pasy jednakowej szerokości: **zielony** od strony drzewca, **biały** w środku, **czerwony** od strony wolnego brzegu. Opisuje go **artykuł 12** Konstytucji, ostatni z zasad podstawowych — a to już coś mówi: flaga nie jest ozdobnym szczegółem, stoi wśród rzeczy, na których opiera się Republika.",
  "Nacque a **Reggio Emilia il 7 gennaio 1797**, quando la Repubblica Cispadana lo adottò come proprio vessillo. È la bandiera nazionale più antica d'Europa dopo quelle di Danimarca e Paesi Bassi, e il 7 gennaio si celebra la **Festa del Tricolore**.":
    "Narodził się w **Reggio Emilia 7 stycznia 1797 roku**, kiedy Republika Cispadańska przyjęła go za swój sztandar. To najstarsza flaga narodowa Europy po duńskiej i niderlandzkiej, a 7 stycznia obchodzi się **Festa del Tricolore**.",
  "Ai colori non è assegnato per legge alcun significato. Le spiegazioni che si sentono — il verde delle pianure, il bianco delle nevi alpine, il rosso del sangue versato — sono letture affettive nate dopo, non una regola scritta da qualche parte.":
    "Kolorom nie przypisano ustawowo żadnego znaczenia. Wyjaśnienia, które się słyszy — zieleń równin, biel alpejskich śniegów, czerwień przelanej krwi — to odczytania emocjonalne powstałe później, a nie reguła gdzieś zapisana.",
  "L'emblema": "Godło",
  "L'Italia non ha uno stemma di famiglia regnante: ha un **emblema**, scelto per concorso pubblico e in vigore dal **5 maggio 1948**. Lo disegnò Paolo Paschetto. Non è uno scudo, ed è la differenza che conta: non discende da una dinastia, è stato inventato da una repubblica appena nata per rappresentarsi.":
    "Włochy nie mają herbu rodziny panującej: mają **emblema**, godło wyłonione w publicznym konkursie i obowiązujące od **5 maja 1948 roku**. Zaprojektował je Paolo Paschetto. To nie tarcza herbowa, i właśnie ta różnica się liczy: nie pochodzi od dynastii, wymyśliła je dopiero co narodzona republika, żeby się przedstawić.",
  "La stella": "Gwiazda",
  "La stella d'Italia, il simbolo più antico del paese: accompagna l'immagine dell'Italia da prima dell'Unità.":
    "Gwiazda Italii, najstarszy symbol kraju: towarzyszy wizerunkowi Włoch jeszcze sprzed zjednoczenia.",
  "La ruota dentata": "Koło zębate",
  "L'ingranaggio richiama il lavoro, su cui l'articolo 1 fonda la Repubblica.":
    "Tryb przypomina o pracy, na której artykuł 1 opiera Republikę.",
  "L'olivo e la quercia": "Oliwka i dąb",
  "L'olivo per la pace, la quercia per la forza e la dignità. Sono due alberi che crescono in tutta la penisola.":
    "Oliwka za pokój, dąb za siłę i godność. To dwa drzewa, które rosną na całym półwyspie.",
  "Da quale parte della bandiera si trova il verde?": "Po której stronie flagi jest zieleń?",
  "Al centro": "W środku",
  "Dalla parte dell'asta": "Od strony drzewca",
  "Dalla parte del battente": "Od strony wolnego brzegu",
  "Cambia a seconda della regione": "Zależy od regionu",
  "Verde all'asta, bianco al centro, rosso al battente. L'ordine non è libero: è fissato dall'articolo 12 della Costituzione, e una bandiera con i colori invertiti è semplicemente sbagliata.":
    "Zielony przy drzewcu, biały w środku, czerwony od wolnego brzegu. Kolejność nie jest dowolna: ustala ją artykuł 12 Konstytucji, a flaga z odwróconymi kolorami jest po prostu błędna.",
  "L'inno": "Hymn",
  "L'inno nazionale si chiama ufficialmente **Il Canto degli Italiani**, ma tutti lo conoscono come **Inno di Mameli** oppure dal suo primo verso, **Fratelli d'Italia**. Il testo è di **Goffredo Mameli**, che lo scrisse nel **1847** a vent'anni; la musica è di **Michele Novaro**. Mameli morì due anni dopo, a ventun anni, difendendo la Repubblica Romana.":
    "Hymn narodowy nazywa się oficjalnie **Il Canto degli Italiani**, ale wszyscy znają go jako **Inno di Mameli** albo od pierwszego wersu, **Fratelli d'Italia**. Tekst napisał **Goffredo Mameli** w **1847 roku**, mając dwadzieścia lat; muzykę skomponował **Michele Novaro**. Mameli zginął dwa lata później, w wieku dwudziestu jeden lat, broniąc Republiki Rzymskiej.",
  "Curiosamente l'inno è stato per settant'anni un inno di fatto: adottato in via provvisoria nel **1946**, è diventato inno ufficiale per legge soltanto il **4 dicembre 2017**. In Italia le cose provvisorie durano.":
    "Co ciekawe, przez siedemdziesiąt lat hymn był hymnem faktycznym: przyjęty tymczasowo w **1946 roku**, hymnem oficjalnym stał się ustawą dopiero **4 grudnia 2017 roku**. We Włoszech rzeczy tymczasowe trwają.",
  "Chi scrisse il testo dell'inno nazionale?": "Kto napisał tekst hymnu narodowego?",
  "Michele Novaro": "Michele Novaro",
  "Giuseppe Verdi": "Giuseppe Verdi",
  "Goffredo Mameli": "Goffredo Mameli",
  "Giuseppe Mazzini": "Giuseppe Mazzini",
  "Il testo è di Goffredo Mameli, la musica di Michele Novaro: per questo si dice Inno di Mameli e non Inno di Novaro. Verdi non c'entra, anche se il coro del Nabucco viene spesso proposto come alternativa.":
    "Tekst jest Goffreda Mamelego, muzyka Michelego Novara: dlatego mówi się Inno di Mameli, a nie Inno di Novaro. Verdi nie ma z tym nic wspólnego, choć chór z Nabucco bywa proponowany jako alternatywa.",
  "Le date della Repubblica": "Daty Republiki",
  "2 giugno": "2 czerwca",
  "Festa della Repubblica. Ricorda il referendum del 2 e 3 giugno 1946, con cui gli italiani scelsero la repubblica al posto della monarchia.":
    "Festa della Repubblica, święto Republiki. Upamiętnia referendum z 2 i 3 czerwca 1946 roku, w którym Włosi wybrali republikę zamiast monarchii.",
  "25 aprile": "25 kwietnia",
  "Anniversario della Liberazione, la fine dell'occupazione nazifascista nel 1945.":
    "Rocznica wyzwolenia, koniec okupacji nazistowsko-faszystowskiej w 1945 roku.",
  "4 novembre": "4 listopada",
  "Giorno dell'Unità nazionale e Festa delle Forze armate: l'armistizio del 1918. Non è più giorno festivo dal 1977 e si celebra la prima domenica di novembre.":
    "Dzień Jedności Narodowej i Święto Sił Zbrojnych: rozejm z 1918 roku. Od 1977 roku nie jest już dniem wolnym i obchodzi się go w pierwszą niedzielę listopada.",
  "Il **2 giugno** è la festa nazionale vera e propria. A Roma si svolgono la deposizione della corona all'Altare della Patria e la parata lungo via dei Fori Imperiali, con il sorvolo delle Frecce Tricolori che lasciano nel cielo le tre bande.":
    "**2 czerwca** to właściwe święto narodowe. W Rzymie odbywa się złożenie wieńca przy Altare della Patria i defilada wzdłuż via dei Fori Imperiali, z przelotem Frecce Tricolori, które zostawiają na niebie trzy pasy.",
  "Che cosa si ricorda il 2 giugno?": "Co upamiętnia 2 czerwca?",
  "La proclamazione del Regno d'Italia nel 1861": "Proklamowanie Królestwa Włoch w 1861 roku",
  "Il referendum del 1946 e la nascita della Repubblica":
    "Referendum z 1946 roku i narodziny Republiki",
  "L'entrata in vigore della Costituzione": "Wejście w życie Konstytucji",
  "La fine della Seconda guerra mondiale": "Koniec drugiej wojny światowej",
  "Il 2 giugno 1946 gli italiani votarono per la repubblica contro la monarchia, e nello stesso giorno elessero l'Assemblea costituente. Il Regno era stato proclamato l'11 marzo 1861, la Costituzione entrò in vigore il 1º gennaio 1948: tre date diverse che è facile confondere.":
    "2 czerwca 1946 roku Włosi zagłosowali za republiką przeciw monarchii, a tego samego dnia wybrali Zgromadzenie Konstytucyjne. Królestwo proklamowano 11 marca 1861 roku, Konstytucja weszła w życie 1 stycznia 1948: trzy różne daty, które łatwo pomylić.",
  "Da non confondere: il **7 gennaio** è la Festa del Tricolore, cioè della bandiera; il **2 giugno** è la Festa della Repubblica. Solo la seconda è giorno festivo.":
    "Nie mylić: **7 stycznia** to Festa del Tricolore, święto flagi; **2 czerwca** to Festa della Repubblica. Tylko to drugie jest dniem wolnym.",
  "La Costituzione e i principi fondamentali": "Konstytucja i zasady podstawowe",
  "Perché conta: quasi tutto quello che verrà dopo — il Parlamento, le regioni, i diritti, perfino la bandiera — è scritto in un unico testo del 1947. Chi lo conosce a grandi linee ha già la mappa del resto del corso.":
    "Dlaczego to ważne: prawie wszystko, co przyjdzie potem — parlament, regiony, prawa, nawet flaga — jest zapisane w jednym tekście z 1947 roku. Kto zna go z grubsza, ma już mapę reszty kursu.",
  "Come è nata": "Jak powstała",
  "Il **2 giugno 1946**, nello stesso giorno del referendum, gli italiani elessero l'**Assemblea costituente**. Fu la prima consultazione a suffragio davvero universale della storia italiana: **votarono per la prima volta le donne**. L'Assemblea lavorò un anno e mezzo e approvò il testo il **22 dicembre 1947**.":
    "**2 czerwca 1946 roku**, tego samego dnia co referendum, Włosi wybrali **Assemblea costituente**, Zgromadzenie Konstytucyjne. Było to pierwsze w historii Włoch głosowanie naprawdę powszechne: **po raz pierwszy głosowały kobiety**. Zgromadzenie pracowało półtora roku i przyjęło tekst **22 grudnia 1947 roku**.",
  "La Costituzione fu promulgata il **27 dicembre 1947** dal capo provvisorio dello Stato **Enrico De Nicola** ed entrò in vigore il **1º gennaio 1948**. Fu scritta da un'assemblea in cui sedevano insieme democratici cristiani, comunisti, socialisti, liberali e azionisti: è un testo di compromesso, e si vede.":
    "Konstytucję promulgowała **27 grudnia 1947 roku** tymczasowa głowa państwa **Enrico De Nicola**, a weszła ona w życie **1 stycznia 1948 roku**. Napisało ją zgromadzenie, w którym zasiadali razem chadecy, komuniści, socjaliści, liberałowie i działacze Partito d'Azione: to tekst kompromisu, i widać to.",
  "Quando è entrata in vigore la Costituzione?": "Kiedy Konstytucja weszła w życie?",
  "Il 2 giugno 1946": "2 czerwca 1946",
  "Il 22 dicembre 1947": "22 grudnia 1947",
  "Il 1º gennaio 1948": "1 stycznia 1948",
  "Il 25 aprile 1945": "25 kwietnia 1945",
  "Approvata il 22 dicembre 1947, promulgata il 27 dicembre, entrata in vigore il 1º gennaio 1948. Le tre date sono vicine ma distinte: approvazione, firma, efficacia.":
    "Przyjęta 22 grudnia 1947 roku, promulgowana 27 grudnia, weszła w życie 1 stycznia 1948. Trzy daty leżą blisko siebie, ale są różne: przyjęcie, podpis, moc obowiązująca.",
  "Come è fatta": "Jak jest zbudowana",
  "Il testo ha **139 articoli** più diciotto disposizioni transitorie e finali, ed è diviso in tre parti disuguali.":
    "Tekst ma **139 artykułów** plus osiemnaście przepisów przejściowych i końcowych, i dzieli się na trzy nierówne części.",
  "Principi fondamentali": "Zasady podstawowe",
  "Articoli 1–12. Dodici articoli che dicono che cosa è la Repubblica prima di dire come funziona.":
    "Artykuły 1–12. Dwanaście artykułów, które mówią, czym Republika jest, zanim powiedzą, jak działa.",
  "Parte I · Diritti e doveri dei cittadini": "Część I · Prawa i obowiązki obywateli",
  "Articoli 13–54. Le libertà, la famiglia, la salute, la scuola, il lavoro, il voto, le tasse.":
    "Artykuły 13–54. Wolności, rodzina, zdrowie, szkoła, praca, głosowanie, podatki.",
  "Parte II · Ordinamento della Repubblica": "Część II · Ustrój Republiki",
  "Articoli 55–139. Parlamento, Governo, Presidente, magistratura, regioni. È il capitolo 2 di questo corso.":
    "Artykuły 55–139. Parlament, rząd, prezydent, sądownictwo, regiony. To rozdział 2 tego kursu.",
  "I primi articoli": "Pierwsze artykuły",
  "L'**articolo 1** stabilisce che l'Italia è una Repubblica democratica **fondata sul lavoro** e che la sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione. Quella formula sul lavoro fu il compromesso trovato fra chi voleva una repubblica dei lavoratori e chi voleva una formula più generale.":
    "**Artykuł 1** stanowi, że Włochy są republiką demokratyczną **opartą na pracy** i że zwierzchnictwo należy do narodu, który sprawuje je w formach i granicach Konstytucji. Ta formuła o pracy była kompromisem między tymi, którzy chcieli republiki ludzi pracy, a tymi, którzy woleli ujęcie ogólniejsze.",
  "L'**articolo 3** enuncia due uguaglianze, non una. La prima è **formale**: tutti sono uguali davanti alla legge senza distinzione di sesso, razza, lingua, religione, opinioni politiche, condizioni personali e sociali. La seconda è **sostanziale**: è compito della Repubblica rimuovere gli ostacoli che di fatto impediscono quell'uguaglianza. Il secondo comma è quello che giustifica le politiche sociali.":
    "**Artykuł 3** wyraża dwie równości, nie jedną. Pierwsza jest **formalna**: wszyscy są równi wobec prawa, bez różnicy płci, rasy, języka, religii, poglądów politycznych oraz warunków osobistych i społecznych. Druga jest **materialna**: zadaniem Republiki jest usuwanie przeszkód, które faktycznie tej równości nie dopuszczają. To drugi ustęp uzasadnia politykę społeczną.",
  "L'**articolo 11** contiene il verbo più discusso del testo: l'Italia **ripudia** la guerra come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali. Lo stesso articolo consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: su questa frase poggia l'adesione italiana all'Unione europea.":
    "**Artykuł 11** zawiera najbardziej dyskutowany czasownik całego tekstu: Włochy **odrzucają** wojnę jako narzędzie zamachu na wolność innych narodów i jako sposób rozstrzygania sporów międzynarodowych. Ten sam artykuł dopuszcza ograniczenia suwerenności konieczne dla porządku zapewniającego pokój: na tym zdaniu opiera się przystąpienie Włoch do Unii Europejskiej.",
  "Quanti sono gli articoli dei principi fondamentali?":
    "Ile jest artykułów zasad podstawowych?",
  "Sette": "Siedem",
  "Dodici": "Dwanaście",
  "Ventuno": "Dwadzieścia jeden",
  "Centotrentanove": "Sto trzydzieści dziewięć",
  "I principi fondamentali sono gli articoli da 1 a 12, prima ancora della Parte I. Centotrentanove è il totale degli articoli della Costituzione.":
    "Zasady podstawowe to artykuły od 1 do 12, jeszcze przed Częścią I. Sto trzydzieści dziewięć to łączna liczba artykułów Konstytucji.",
  "Una costituzione rigida": "Konstytucja sztywna",
  "La Costituzione non si cambia con una legge ordinaria. L'**articolo 138** impone una procedura aggravata: ciascuna Camera deve approvare due volte, a distanza di almeno tre mesi, e nella seconda votazione serve la maggioranza assoluta. Se non si raggiungono i due terzi, cinquecentomila elettori, cinque consigli regionali o un quinto dei parlamentari possono chiedere un **referendum confermativo**.":
    "Konstytucji nie zmienia się ustawą zwykłą. **Artykuł 138** narzuca tryb utrudniony: każda izba musi uchwalić dwa razy, w odstępie co najmniej trzech miesięcy, a w drugim głosowaniu potrzebna jest bezwzględna większość. Jeśli nie osiągnie się dwóch trzecich, pięćset tysięcy wyborców, pięć rad regionalnych albo jedna piąta parlamentarzystów może zażądać **referendum zatwierdzającego**.",
  "L'**articolo 139** mette un limite ancora più netto: la **forma repubblicana non può essere oggetto di revisione costituzionale**. Non esiste procedura, per quanto aggravata, che possa riportare la monarchia.":
    "**Artykuł 139** stawia granicę jeszcze ostrzejszą: **forma republikańska nie może być przedmiotem zmiany konstytucji**. Nie istnieje tryb, choćby najbardziej utrudniony, który mógłby przywrócić monarchię.",
  "Che cosa non può essere modificato in nessun modo?":
    "Czego nie można zmienić w żaden sposób?",
  "Il numero dei parlamentari": "Liczby parlamentarzystów",
  "La forma repubblicana": "Formy republikańskiej",
  "La durata del mandato presidenziale": "Długości kadencji prezydenta",
  "L'articolo 139 sottrae la forma repubblicana a qualsiasi revisione. Tutto il resto — parlamentari, mandato, perfino l'articolo 12 sulla bandiera — è modificabile con la procedura dell'articolo 138.":
    "Artykuł 139 wyjmuje formę republikańską spod jakiejkolwiek rewizji. Cała reszta — parlamentarzyści, kadencja, nawet artykuł 12 o fladze — jest zmienialna w trybie artykułu 138.",
  "Il referendum dell'articolo 138 è **confermativo** e non ha quorum: vale qualunque sia l'affluenza. È cosa diversa dal referendum **abrogativo** dell'articolo 75, che invece è valido solo se vota la maggioranza degli aventi diritto.":
    "Referendum z artykułu 138 jest **zatwierdzające** i nie ma progu frekwencji: liczy się niezależnie od tego, ilu przyjdzie. To co innego niż referendum **uchylające** z artykułu 75, ważne tylko wtedy, gdy zagłosuje większość uprawnionych.",
  "Diritti e doveri dei cittadini": "Prawa i obowiązki obywateli",
  "Perché conta: la Parte I non elenca soltanto quello che si può fare. Elenca anche quattro doveri, e sono quelli che trasformano un abitante in un cittadino.":
    "Dlaczego to ważne: Część I nie wylicza tylko tego, co wolno. Wylicza też cztery obowiązki, a to one zmieniają mieszkańca w obywatela.",
  "Quattro gruppi di rapporti": "Cztery grupy stosunków",
  "La Parte I va dall'articolo 13 al 54 ed è divisa in quattro titoli, ognuno dei quali guarda la persona da un lato diverso: **rapporti civili**, **etico-sociali**, **economici** e **politici**.":
    "Część I sięga od artykułu 13 do 54 i dzieli się na cztery tytuły, z których każdy patrzy na człowieka z innej strony: stosunki **cywilne**, **etyczno-społeczne**, **gospodarcze** i **polityczne**.",
  "Civili · 13–28": "Cywilne · 13–28",
  "Libertà personale, domicilio, corrispondenza, circolazione, riunione, associazione, religione, pensiero, difesa in giudizio.":
    "Wolność osobista, mir domowy, korespondencja, poruszanie się, zgromadzenia, zrzeszanie się, religia, myśl, obrona przed sądem.",
  "Etico-sociali · 29–34": "Etyczno-społeczne · 29–34",
  "Famiglia, salute, scuola. Qui stanno il diritto alle cure e l'istruzione obbligatoria.":
    "Rodzina, zdrowie, szkoła. Tutaj stoi prawo do leczenia i obowiązek nauki.",
  "Economici · 35–47": "Gospodarcze · 35–47",
  "Lavoro, retribuzione, sindacati, sciopero, impresa, proprietà, risparmio.":
    "Praca, wynagrodzenie, związki zawodowe, strajk, przedsiębiorstwo, własność, oszczędności.",
  "Politici · 48–54": "Polityczne · 48–54",
  "Voto, partiti, petizioni, accesso agli uffici pubblici, difesa della patria, tributi, fedeltà alla Repubblica.":
    "Głosowanie, partie, petycje, dostęp do urzędów publicznych, obrona ojczyzny, daniny, wierność Republice.",
  "Le libertà": "Wolności",
  "L'**articolo 13** dichiara inviolabile la libertà personale: nessuna detenzione o perquisizione se non per atto motivato dell'autorità giudiziaria. Se in casi eccezionali interviene la polizia, deve avvisare il giudice entro quarantotto ore, e il giudice ha altre quarantotto ore per convalidare. Passate le novantasei ore senza convalida, il provvedimento perde ogni effetto.":
    "**Artykuł 13** uznaje wolność osobistą za nienaruszalną: żadnego zatrzymania ani przeszukania inaczej niż na uzasadnione postanowienie organu sądowego. Jeśli w wyjątkowych przypadkach wkracza policja, musi zawiadomić sędziego w ciągu czterdziestu ośmiu godzin, a sędzia ma kolejne czterdzieści osiem na zatwierdzenie. Po dziewięćdziesięciu sześciu godzinach bez zatwierdzenia środek traci wszelką moc.",
  "L'**articolo 21** garantisce a tutti il diritto di manifestare liberamente il proprio pensiero con la parola, lo scritto e ogni altro mezzo di diffusione. La stampa non può essere soggetta ad autorizzazioni o censure: è una frase scritta da chi aveva appena vissuto vent'anni di giornali autorizzati.":
    "**Artykuł 21** gwarantuje każdemu prawo do swobodnego wyrażania myśli słowem, pismem i każdym innym środkiem rozpowszechniania. Prasa nie może podlegać zezwoleniom ani cenzurze: to zdanie napisali ludzie, którzy właśnie przeżyli dwadzieścia lat gazet koncesjonowanych.",
  "Entro quanto tempo l'autorità giudiziaria deve essere avvisata di un fermo di polizia?":
    "W jakim czasie organ sądowy musi zostać zawiadomiony o zatrzymaniu przez policję?",
  "Entro ventiquattro ore": "W ciągu dwudziestu czterech godzin",
  "Entro quarantotto ore": "W ciągu czterdziestu ośmiu godzin",
  "Entro una settimana": "W ciągu tygodnia",
  "Non è previsto alcun termine": "Nie przewidziano żadnego terminu",
  "Quarantotto ore per l'avviso al giudice e altre quarantotto per la convalida. Se il termine passa senza convalida, il provvedimento è revocato e resta privo di effetto: il tempo qui non è una formalità, è la garanzia.":
    "Czterdzieści osiem godzin na zawiadomienie sędziego i kolejne czterdzieści osiem na zatwierdzenie. Jeśli termin minie bez zatwierdzenia, środek zostaje uchylony i pozostaje bez skutku: czas nie jest tu formalnością, jest gwarancją.",
  "La pena e il processo": "Kara i proces",
  "L'**articolo 27** contiene tre regole che stanno insieme: la responsabilità penale è **personale**, l'imputato **non è considerato colpevole** fino alla condanna definitiva, e le pene devono tendere alla **rieducazione** del condannato. Lo stesso articolo chiude con quattro parole: non è ammessa la pena di morte.":
    "**Artykuł 27** zawiera trzy reguły, które trzymają się razem: odpowiedzialność karna jest **osobista**, oskarżonego **nie uważa się za winnego** aż do prawomocnego skazania, a kary mają zmierzać do **resocjalizacji** skazanego. Ten sam artykuł kończy się czterema słowami: kara śmierci jest niedopuszczalna.",
  "L'**articolo 24** garantisce a tutti il diritto di agire in giudizio e la difesa in ogni stato del procedimento; ai non abbienti lo Stato assicura i mezzi per agire e difendersi, ed è da qui che nasce il **patrocinio a spese dello Stato**.":
    "**Artykuł 24** gwarantuje każdemu prawo do wystąpienia na drogę sądową i do obrony na każdym etapie postępowania; niezamożnym państwo zapewnia środki do działania i obrony, i stąd bierze się **patrocinio a spese dello Stato**, pomoc prawna na koszt państwa.",
  "I doveri": "Obowiązki",
  "Il **voto** (articolo 48) è definito insieme diritto e **dovere civico**: non è sanzionato, ma la Costituzione lo chiama con quel nome di proposito. L'**articolo 52** definisce la difesa della patria un sacro dovere. L'**articolo 54** chiede a tutti fedeltà alla Repubblica e, a chi ricopre funzioni pubbliche, di adempierle con disciplina e onore.":
    "**Głosowanie** (artykuł 48) jest określone zarazem jako prawo i **obowiązek obywatelski**: nie jest zagrożone sankcją, ale Konstytucja celowo nazywa je tym słowem. **Artykuł 52** określa obronę ojczyzny jako święty obowiązek. **Artykuł 54** wymaga od wszystkich wierności Republice, a od pełniących funkcje publiczne — wykonywania ich z dyscypliną i honorem.",
  "L'**articolo 53** è il dovere che si incontra ogni anno: tutti concorrono alle spese pubbliche **in ragione della propria capacità contributiva**, e il sistema tributario è informato a criteri di **progressività**. Chi guadagna di più non paga solo di più: paga una quota maggiore. È il principio su cui poggiano gli scaglioni dell'IRPEF.":
    "**Artykuł 53** to obowiązek, z którym spotyka się co roku: wszyscy uczestniczą w wydatkach publicznych **stosownie do swojej zdolności płatniczej**, a system podatkowy opiera się na kryteriach **progresywności**. Kto zarabia więcej, nie płaci tylko więcej: płaci większą część. To zasada, na której opierają się progi IRPEF.",
  "Che cosa significa che il sistema tributario è progressivo?":
    "Co oznacza, że system podatkowy jest progresywny?",
  "Che le tasse aumentano ogni anno": "Że podatki rosną co roku",
  "Che chi ha un reddito più alto paga una quota proporzionalmente maggiore":
    "Że kto ma wyższy dochód, płaci proporcjonalnie większą część",
  "Che tutti pagano la stessa percentuale": "Że wszyscy płacą ten sam procent",
  "Che si paga a rate": "Że płaci się w ratach",
  "Progressività significa che l'aliquota cresce con il reddito, non solo l'importo. Una tassa uguale in percentuale per tutti sarebbe proporzionale, non progressiva: l'articolo 53 chiede espressamente la seconda.":
    "Progresywność znaczy, że wraz z dochodem rośnie stawka, a nie tylko kwota. Podatek o jednakowym procencie dla wszystkich byłby proporcjonalny, nie progresywny: artykuł 53 wyraźnie żąda tego drugiego.",
  "Come definisce il voto la Costituzione?": "Jak Konstytucja określa głosowanie?",
  "Solo un diritto": "Tylko jako prawo",
  "Un diritto e un dovere civico": "Jako prawo i obowiązek obywatelski",
  "Un obbligo sanzionabile con una multa": "Jako obowiązek zagrożony grzywną",
  "Una facoltà riservata a chi paga le tasse":
    "Jako uprawnienie zastrzeżone dla płacących podatki",
  "L'articolo 48 usa entrambe le parole: il voto è un diritto e il suo esercizio è un dovere civico. Dovere civico però non vuol dire obbligo sanzionato — chi non vota non paga nulla.":
    "Artykuł 48 używa obu słów: głosowanie jest prawem, a jego wykonywanie obowiązkiem obywatelskim. Obowiązek obywatelski nie znaczy jednak obowiązku zagrożonego sankcją — kto nie głosuje, nic nie płaci.",
  "Molte di queste garanzie valgono per **tutti**, non solo per i cittadini: l'articolo 13 dice nessuno, l'articolo 21 dice tutti. I diritti riservati ai cittadini sono soprattutto quelli politici — il voto, l'accesso ai pubblici uffici.":
    "Wiele z tych gwarancji dotyczy **wszystkich**, nie tylko obywateli: artykuł 13 mówi „nikt”, artykuł 21 mówi „wszyscy”. Prawa zastrzeżone dla obywateli to przede wszystkim polityczne — głosowanie, dostęp do urzędów publicznych.",
  "La lingua italiana e le minoranze linguistiche": "Język włoski i mniejszości językowe",
  "Perché conta: l'Italia è unita da centosessant'anni, ma la sua unità linguistica è molto più recente — ed è ancora incompleta, per legge e di proposito.":
    "Dlaczego to ważne: Włochy są zjednoczone od stu sześćdziesięciu lat, ale ich jedność językowa jest o wiele młodsza — i wciąż niepełna, z mocy ustawy i z rozmysłem.",
  "Una lingua giovane": "Młody język",
  "L'italiano standard non nasce da un parlato ma da una **lingua scritta**: il fiorentino letterario del Trecento di **Dante, Petrarca e Boccaccio**, scelto nel Cinquecento come modello per tutta la penisola. Per secoli è stata la lingua della scrittura mentre si parlava altro.":
    "Włoski standardowy nie wyrasta z mowy, lecz z **języka pisanego**: z literackiego florenckiego XIV wieku, języka **Dantego, Petrarki i Boccaccia**, wybranego w XVI wieku na wzór dla całego półwyspu. Przez stulecia był językiem pisma, podczas gdy mówiło się czym innym.",
  "Alla proclamazione del Regno, nel 1861, chi sapeva usare l'italiano era una piccola minoranza: la stima più citata, quella del linguista **Tullio De Mauro**, parla di poco più del due per cento della popolazione, e altri studiosi arrivano a percentuali più alte, comunque lontane dalla maggioranza. A unificare la lingua sono stati la scuola dell'obbligo, la leva militare, l'emigrazione interna e — negli anni Cinquanta e Sessanta — la televisione.":
    "W chwili proklamowania Królestwa, w 1861 roku, ci, którzy umieli posługiwać się włoskim, byli niewielką mniejszością: najczęściej przywoływane oszacowanie, językoznawcy **Tullia De Mauro**, mówi o niewiele ponad dwóch procentach ludności, a inni badacze podają wartości wyższe, i tak dalekie od większości. Język zjednoczyły szkoła obowiązkowa, pobór do wojska, migracja wewnętrzna i — w latach pięćdziesiątych i sześćdziesiątych — telewizja.",
  "L'**Accademia della Crusca**, fondata a Firenze nel **1583**, è la più antica accademia linguistica del mondo ancora attiva. Il suo nome viene dall'immagine della farina separata dalla crusca: separare le parole buone dalle altre.":
    "**Accademia della Crusca**, założona we Florencji w **1583 roku**, jest najstarszą działającą do dziś akademią językową świata. Jej nazwa pochodzi od obrazu mąki oddzielonej od otrąb: oddzielać słowa dobre od pozostałych.",
  "Da quale parlata deriva l'italiano standard?":
    "Z której mowy wywodzi się włoski standardowy?",
  "Dal romano dell'epoca imperiale": "Z rzymskiego z czasów cesarstwa",
  "Dal fiorentino letterario del Trecento": "Z literackiego florenckiego XIV wieku",
  "Dal milanese dell'Ottocento": "Z mediolańskiego XIX wieku",
  "Dal napoletano del Seicento": "Z neapolitańskiego XVII wieku",
  "Il modello è il fiorentino di Dante, Petrarca e Boccaccio, adottato come lingua scritta comune nel Cinquecento. Il latino è l'antenato di tutte le parlate italiane, non il modello dell'italiano moderno.":
    "Wzorem jest florencki Dantego, Petrarki i Boccaccia, przyjęty w XVI wieku jako wspólny język pisany. Łacina jest przodkiem wszystkich mów włoskich, a nie wzorem współczesnego włoskiego.",
  "Dialetti o lingue?": "Dialekty czy języki?",
  "Quelli che in Italia si chiamano **dialetti** in genere non sono varianti dell'italiano: sono lingue romanze sorelle, discese dal latino per conto proprio. Il napoletano, il siciliano, il veneto o il piemontese non derivano dall'italiano più di quanto lo spagnolo derivi dal francese.":
    "To, co we Włoszech nazywa się **dialektami**, na ogół nie jest odmianami włoskiego: to siostrzane języki romańskie, wywodzące się z łaciny na własną rękę. Neapolitański, sycylijski, wenecki czy piemoncki nie pochodzą od włoskiego bardziej, niż hiszpański pochodzi od francuskiego.",
  "Il dialetto non è scomparso. Secondo le rilevazioni ISTAT una quota consistente della popolazione lo usa ancora, soprattutto in famiglia e fra amici, spesso alternandolo all'italiano nella stessa conversazione.":
    "Dialekt nie zniknął. Według badań ISTAT znaczna część ludności wciąż go używa, zwłaszcza w rodzinie i wśród znajomych, często przeplatając go włoskim w tej samej rozmowie.",
  "Le minoranze riconosciute": "Uznane mniejszości",
  "L'**articolo 6** della Costituzione impegna la Repubblica a tutelare con apposite norme le minoranze linguistiche. La **legge 482 del 1999** ha dato attuazione a quell'articolo dopo cinquant'anni, riconoscendo **dodici** minoranze storiche.":
    "**Artykuł 6** Konstytucji zobowiązuje Republikę do ochrony mniejszości językowych osobnymi przepisami. **Ustawa 482 z 1999 roku** wykonała ten artykuł po pięćdziesięciu latach, uznając **dwanaście** mniejszości historycznych.",
  "Le dodici": "Tych dwanaście",
  "Albanesi, catalane, germaniche, greche, slovene, croate, e le popolazioni parlanti francese, franco-provenzale, friulano, ladino, occitano e sardo.":
    "Albańska, katalońska, germańska, grecka, słoweńska, chorwacka oraz ludność mówiąca po francusku, francusko-prowansalsku, friulsku, ladyńsku, oksytańsku i sardyńsku.",
  "Alto Adige · Südtirol": "Alto Adige · Südtirol",
  "Il tedesco è equiparato all'italiano: atti bilingui, scuole separate per gruppo linguistico, e la proporzionale etnica per i posti pubblici.":
    "Niemiecki jest zrównany z włoskim: dokumenty dwujęzyczne, osobne szkoły dla każdej grupy językowej i proporcja etniczna przy obsadzaniu stanowisk publicznych.",
  "Valle d'Aosta": "Valle d'Aosta",
  "Il francese è equiparato all'italiano fin dallo statuto speciale del 1948; nelle valli walser si parlano anche varietà germaniche.":
    "Francuski jest zrównany z włoskim od statutu specjalnego z 1948 roku; w dolinach walserskich mówi się także odmianami germańskimi.",
  "Friuli Venezia Giulia": "Friuli Venezia Giulia",
  "Tutela dello sloveno nelle province di Trieste, Gorizia e Udine, e del friulano, parlato da alcune centinaia di migliaia di persone.":
    "Ochrona słoweńskiego w prowincjach Triest, Gorycja i Udine oraz friulskiego, którym mówi kilkaset tysięcy osób.",
  "Quale legge dà attuazione all'articolo 6 sulle minoranze linguistiche?":
    "Która ustawa wykonuje artykuł 6 o mniejszościach językowych?",
  "La legge 482 del 1999": "Ustawa 482 z 1999 roku",
  "La legge 194 del 1978": "Ustawa 194 z 1978 roku",
  "La legge 300 del 1970": "Ustawa 300 z 1970 roku",
  "La legge 91 del 1992": "Ustawa 91 z 1992 roku",
  "La legge 15 dicembre 1999, n. 482, riconosce dodici minoranze linguistiche storiche. La 300 del 1970 è lo Statuto dei lavoratori e la 91 del 1992 riguarda la cittadinanza: numeri facili da scambiare.":
    "Ustawa z 15 grudnia 1999 roku, nr 482, uznaje dwanaście historycznych mniejszości językowych. Ustawa 300 z 1970 roku to Statuto dei lavoratori, a 91 z 1992 dotyczy obywatelstwa: numery łatwo pomylić.",
  "In quale regione il francese è equiparato all'italiano?":
    "W którym regionie francuski jest zrównany z włoskim?",
  "In Piemonte": "W Piemoncie",
  "In Liguria": "W Ligurii",
  "In Valle d'Aosta": "W Valle d'Aosta",
  "In Trentino-Alto Adige": "W Trentino-Alto Adige",
  "La Valle d'Aosta è bilingue italiano-francese per statuto speciale. In Trentino-Alto Adige la seconda lingua è il tedesco, e in Piemonte si parlano occitano e franco-provenzale, tutelati ma non equiparati.":
    "Valle d'Aosta jest dwujęzyczna włosko-francuska na mocy statutu specjalnego. W Trentino-Alto Adige drugim językiem jest niemiecki, a w Piemoncie mówi się po oksytańsku i francusko-prowansalsku, chronionych, ale niezrównanych.",
  "L'italiano non è dichiarato lingua ufficiale nei principi fondamentali della Costituzione. Lo si ricava dallo statuto del Trentino-Alto Adige e dalla legge 482, che lo chiama lingua ufficiale della Repubblica: una di quelle cose che sembrano ovvie e non sono scritte dove ci si aspetta.":
    "Włoski nie jest ogłoszony językiem urzędowym w zasadach podstawowych Konstytucji. Wywodzi się to ze statutu Trentino-Alto Adige i z ustawy 482, która nazywa go językiem urzędowym Republiki: jedna z tych rzeczy, które wydają się oczywiste, a nie są zapisane tam, gdzie się ich szuka.",
  "Feste civili e religiose": "Święta państwowe i kościelne",
  "Perché conta: il calendario racconta un paese meglio di molti manuali. In Italia le feste nazionali sono dodici, e una tredicesima cambia da città a città.":
    "Dlaczego to ważne: kalendarz opowiada o kraju lepiej niż niejeden podręcznik. We Włoszech świąt państwowych jest dwanaście, a trzynaste zmienia się od miasta do miasta.",
  "I giorni festivi": "Dni wolne",
  "Sono festivi per legge dodici giorni all'anno, più il patrono locale. Quattro sono civili, gli altri religiosi — l'equilibrio di un paese che è stato a lungo cattolico e ha scritto una costituzione laica.":
    "Ustawowo wolnych jest dwanaście dni w roku, plus miejscowy patron. Cztery są świeckie, pozostałe kościelne — równowaga kraju, który długo był katolicki, a napisał konstytucję świecką.",
  "Feste civili": "Święta świeckie",
  "25 aprile, Liberazione · 1º maggio, festa dei lavoratori · 2 giugno, Repubblica. La quarta è il 1º gennaio, che è civile ma senza contenuto politico.":
    "25 kwietnia, wyzwolenie · 1 maja, święto pracujących · 2 czerwca, Republika. Czwartym jest 1 stycznia, świecki, ale bez treści politycznej.",
  "Feste religiose fisse": "Święta kościelne stałe",
  "6 gennaio Epifania · 15 agosto Assunzione · 1º novembre Ognissanti · 8 dicembre Immacolata · 25 dicembre Natale · 26 dicembre Santo Stefano.":
    "6 stycznia Objawienie Pańskie · 15 sierpnia Wniebowzięcie · 1 listopada Wszystkich Świętych · 8 grudnia Niepokalane Poczęcie · 25 grudnia Boże Narodzenie · 26 grudnia świętego Szczepana.",
  "Feste mobili": "Święta ruchome",
  "La Pasqua e il Lunedì dell'Angelo, che tutti chiamano Pasquetta. La data dipende dal primo plenilunio di primavera.":
    "Wielkanoc i Poniedziałek Wielkanocny, który wszyscy nazywają Pasquetta. Data zależy od pierwszej wiosennej pełni księżyca.",
  "Il patrono": "Patron",
  "Ogni comune ha il suo giorno festivo: sant'Ambrogio a Milano il 7 dicembre, san Gennaro a Napoli il 19 settembre, santi Pietro e Paolo a Roma il 29 giugno.":
    "Każda gmina ma swój dzień wolny: świętego Ambrożego w Mediolanie 7 grudnia, świętego Januarego w Neapolu 19 września, świętych Piotra i Pawła w Rzymie 29 czerwca.",
  "Quale di queste è una festa civile e non religiosa?":
    "Które z tych świąt jest świeckie, a nie kościelne?",
  "L'Epifania": "Objawienie Pańskie",
  "Il 25 aprile": "25 kwietnia",
  "Il 15 agosto": "15 sierpnia",
  "L'8 dicembre": "8 grudnia",
  "Il 25 aprile è l'anniversario della Liberazione, una data storica. Epifania, Assunzione e Immacolata sono ricorrenze religiose entrate nel calendario civile.":
    "25 kwietnia to rocznica wyzwolenia, data historyczna. Objawienie Pańskie, Wniebowzięcie i Niepokalane Poczęcie to uroczystości kościelne, które weszły do kalendarza państwowego.",
  "Ferragosto": "Ferragosto",
  "Il **15 agosto** la Chiesa celebra l'Assunzione, ma il nome della festa è più antico: **Ferragosto** viene dalle *feriae Augusti*, il riposo istituito dall'imperatore **Augusto nel 18 avanti Cristo** alla fine dei lavori agricoli. È la festa in cui l'Italia si ferma davvero: nelle settimane intorno chiudono uffici, negozi e interi quartieri delle città.":
    "**15 sierpnia** Kościół obchodzi Wniebowzięcie, ale nazwa święta jest starsza: **Ferragosto** pochodzi od *feriae Augusti*, odpoczynku ustanowionego przez cesarza **Augusta w 18 roku przed naszą erą** po zakończeniu prac polowych. To święto, w którym Włochy naprawdę się zatrzymują: w okolicznych tygodniach zamykają się biura, sklepy i całe dzielnice miast.",
  "I giorni della memoria": "Dni pamięci",
  "Alcune ricorrenze non sono festive ma sono istituite per legge, e nelle scuole si osservano.":
    "Niektóre rocznice nie są dniami wolnymi, ale ustanowiono je ustawą i w szkołach się je obchodzi.",
  "27 gennaio": "27 stycznia",
  "Giorno della Memoria, per le vittime della Shoah, delle leggi razziali e della deportazione. È la data della liberazione di Auschwitz.":
    "Giorno della Memoria, za ofiary Shoah, ustaw rasowych i deportacji. To data wyzwolenia Auschwitz.",
  "10 febbraio": "10 lutego",
  "Giorno del Ricordo, per le vittime delle foibe e per l'esodo giuliano-dalmata.":
    "Giorno del Ricordo, za ofiary foib i za exodus julijsko-dalmatyński.",
  "9 maggio": "9 maja",
  "Giorno della memoria delle vittime del terrorismo, nell'anniversario del ritrovamento del corpo di Aldo Moro nel 1978.":
    "Dzień pamięci ofiar terroryzmu, w rocznicę odnalezienia ciała Alda Moro w 1978 roku.",
  "Da dove viene il nome Ferragosto?": "Skąd pochodzi nazwa Ferragosto?",
  "Dal ferro battuto nelle fiere estive": "Od kutego żelaza na letnich jarmarkach",
  "Dalle feriae Augusti, il riposo istituito dall'imperatore Augusto":
    "Od feriae Augusti, odpoczynku ustanowionego przez cesarza Augusta",
  "Dall'Assunzione di Maria": "Od Wniebowzięcia Maryi",
  "Dalla fiera del bestiame di agosto": "Od sierpniowego targu bydła",
  "Il nome viene dalle feriae Augusti del 18 avanti Cristo, quindi da una festa romana precedente di secoli alla ricorrenza cristiana che poi si è sovrapposta alla stessa data.":
    "Nazwa pochodzi od feriae Augusti z 18 roku przed naszą erą, a więc od święta rzymskiego o stulecia wcześniejszego niż uroczystość chrześcijańska, która później nałożyła się na tę samą datę.",
  "Le feste che non sono nel calendario": "Święta, których nie ma w kalendarzu",
  "Accanto alle date ufficiali ci sono ricorrenze che scandiscono l'anno senza essere festive: il **Carnevale**, che a Venezia e a Viareggio dura settimane; la **Befana** del 6 gennaio, che porta i doni ai bambini e riempie le calze di carbone di zucchero; il **palio** o la **sagra** di paese, che in molti comuni è l'evento più partecipato dell'anno.":
    "Obok dat oficjalnych są uroczystości, które wyznaczają rytm roku, nie będąc dniami wolnymi: **Carnevale**, który w Wenecji i Viareggio trwa tygodniami; **Befana** 6 stycznia, która przynosi dzieciom prezenty i wypełnia skarpety węglem z cukru; **palio** albo wiejska **sagra**, w wielu gminach najliczniej odwiedzane wydarzenie roku.",
  "Che cosa si ricorda il 27 gennaio?": "Co upamiętnia 27 stycznia?",
  "L'esodo giuliano-dalmata": "Exodus julijsko-dalmatyński",
  "Le vittime della Shoah": "Ofiary Shoah",
  "Le vittime del terrorismo": "Ofiary terroryzmu",
  "La fine della Prima guerra mondiale": "Koniec pierwszej wojny światowej",
  "Il Giorno della Memoria cade il 27 gennaio, anniversario della liberazione di Auschwitz. Il Giorno del Ricordo, dedicato alle foibe e all'esodo, è il 10 febbraio: due date vicine e distinte.":
    "Giorno della Memoria przypada 27 stycznia, w rocznicę wyzwolenia Auschwitz. Giorno del Ricordo, poświęcony foibom i exodusowi, wypada 10 lutego: dwie daty blisko siebie i różne.",
  "Il patrono è giorno festivo **solo nel proprio comune**. Un ufficio milanese chiude il 7 dicembre; lo stesso giorno a Roma si lavora normalmente.":
    "Patron jest dniem wolnym **tylko we własnej gminie**. Biuro w Mediolanie zamyka 7 grudnia; tego samego dnia w Rzymie pracuje się normalnie.",
  "Il Parlamento": "Parlament",
  "L'ordinamento della Repubblica": "Ustrój Republiki",
  "Perché conta: in Italia le due camere hanno gli stessi identici poteri. È una scelta rara in Europa, e spiega da sola perché qui fare una legge richieda più tempo che altrove.":
    "Dlaczego to ważne: we Włoszech obie izby mają dokładnie te same uprawnienia. To rzadki wybór w Europie i sam z siebie tłumaczy, dlaczego uchwalenie ustawy wymaga tu więcej czasu niż gdzie indziej.",
  "Due camere, gli stessi poteri": "Dwie izby, te same uprawnienia",
  "Il Parlamento è formato dalla **Camera dei deputati** e dal **Senato della Repubblica**. Il sistema si chiama **bicameralismo paritario** — spesso detto perfetto: le due camere fanno esattamente le stesse cose. Entrambe votano la fiducia al governo, entrambe devono approvare ogni legge, e nel medesimo testo.":
    "Parlament tworzą **Camera dei deputati** i **Senato della Repubblica**. System nazywa się **bicameralismo paritario**, dwuizbowość równorzędna — często mówi się: doskonała. Obie izby robią dokładnie to samo: obie udzielają rządowi wotum zaufania, obie muszą uchwalić każdą ustawę, i to w tym samym brzmieniu.",
  "Se una camera modifica anche una virgola, il testo torna all'altra. L'andirivieni si chiama **navetta** e può durare a lungo. Nessun altro grande paese europeo funziona così: in Germania il Bundesrat interviene solo su certe materie, in Francia l'ultima parola spetta all'Assemblea nazionale.":
    "Jeśli jedna izba zmieni choćby przecinek, tekst wraca do drugiej. To chodzenie tam i z powrotem nazywa się **navetta** i potrafi trwać długo. Żaden inny duży kraj Europy tak nie działa: w Niemczech Bundesrat wkracza tylko w niektórych sprawach, we Francji ostatnie słowo należy do Zgromadzenia Narodowego.",
  "Camera dei deputati": "Camera dei deputati",
  "400 deputati, a Palazzo Montecitorio. Si può essere eletti a partire da 25 anni.":
    "400 deputowanych, w Palazzo Montecitorio. Wybranym można zostać od 25 roku życia.",
  "Senato della Repubblica": "Senato della Repubblica",
  "200 senatori elettivi, a Palazzo Madama. Per essere eletti servono 40 anni.":
    "200 senatorów z wyboru, w Palazzo Madama. Żeby zostać wybranym, trzeba mieć 40 lat.",
  "Senatori a vita": "Senatorowie dożywotni",
  "Gli ex Presidenti della Repubblica lo sono di diritto. Il Presidente in carica può nominarne fino a cinque per altissimi meriti.":
    "Byli Prezydenci Republiki są nimi z mocy prawa. Urzędujący Prezydent może mianować do pięciu za najwyższe zasługi.",
  "Cinque anni": "Pięć lat",
  "Tanto dura la legislatura, salvo scioglimento anticipato — che in Italia è tutt'altro che raro.":
    "Tyle trwa kadencja, z wyjątkiem wcześniejszego rozwiązania — co we Włoszech wcale nie jest rzadkie.",
  "I numeri sono cambiati di recente: fino al 2022 i deputati erano **630** e i senatori elettivi **315**. Il taglio a 400 e 200 è stato deciso da una legge costituzionale confermata dal **referendum del 2020** e si è applicato dalle elezioni successive.":
    "Liczby zmieniły się niedawno: do 2022 roku deputowanych było **630**, a senatorów z wyboru **315**. Cięcie do 400 i 200 przesądziła ustawa konstytucyjna potwierdzona **referendum z 2020 roku** i zastosowano je od kolejnych wyborów.",
  "Quanti deputati siedono oggi alla Camera?": "Ilu deputowanych zasiada dziś w Camera?",
  "200": "200",
  "315": "315",
  "400": "400",
  "630": "630",
  "Quattrocento dal 2022, dopo il referendum del 2020. Seicentotrenta era il numero precedente, e duecento è quello dei senatori elettivi.":
    "Czterystu od 2022 roku, po referendum z 2020. Sześćset trzydzieści to liczba wcześniejsza, a dwieście to liczba senatorów z wyboru.",
  "Chi vota e chi può essere eletto": "Kto głosuje i kto może być wybrany",
  "Per entrambe le camere si vota a **diciotto anni**. Non è sempre stato così: fino alla legge costituzionale del **2021** il Senato si eleggeva solo dai venticinque anni in su, e per quasi settant'anni i giovani hanno avuto in mano una scheda sola su due.":
    "Do obu izb głosuje się od **osiemnastego roku życia**. Nie zawsze tak było: do ustawy konstytucyjnej z **2021 roku** Senat wybierało się dopiero od dwudziestu pięciu lat wzwyż, i przez prawie siedemdziesiąt lat młodzi trzymali w ręku tylko jedną kartę z dwóch.",
  "Che cosa significa bicameralismo paritario?": "Co oznacza bicameralismo paritario?",
  "Che le due camere hanno gli stessi poteri": "Że obie izby mają te same uprawnienia",
  "Che le due camere hanno lo stesso numero di membri": "Że obie izby mają tyle samo członków",
  "Che le due camere si riuniscono sempre insieme": "Że obie izby zawsze obradują razem",
  "Che ogni regione elegge lo stesso numero di parlamentari":
    "Że każdy region wybiera tylu samo parlamentarzystów",
  "Paritario si riferisce ai poteri, non ai numeri: Camera e Senato hanno funzioni identiche pur avendo quattrocento membri l'una e duecento l'altro.":
    "Paritario odnosi się do uprawnień, nie do liczb: Camera i Senato mają identyczne funkcje, choć jedna ma czterystu członków, a drugi dwustu.",
  "Il referendum abrogativo": "Referendum uchylające",
  "L'**articolo 75** consente a **cinquecentomila elettori** o a **cinque consigli regionali** di chiedere l'abrogazione di una legge. Il voto è valido solo se partecipa la **maggioranza degli aventi diritto**: sotto quella soglia il risultato non conta, quale che sia. Restano fuori le leggi tributarie e di bilancio, l'amnistia e l'indulto, e la ratifica dei trattati internazionali.":
    "**Artykuł 75** pozwala **pięciuset tysiącom wyborców** albo **pięciu radom regionalnym** zażądać uchylenia ustawy. Głosowanie jest ważne tylko wtedy, gdy weźmie w nim udział **większość uprawnionych**: poniżej tego progu wynik się nie liczy, jakikolwiek by był. Poza zakresem zostają ustawy podatkowe i budżetowe, amnestia i darowanie kary oraz ratyfikacja umów międzynarodowych.",
  "Alcuni referendum hanno cambiato il paese più di molte legislature: il **divorzio** nel 1974 e l'**aborto** nel 1981, in entrambi i casi con la conferma delle leggi che si voleva cancellare, e il **nucleare** nel 1987 e di nuovo nel 2011.":
    "Niektóre referenda zmieniły kraj bardziej niż niejedna kadencja: **rozwód** w 1974 roku i **aborcja** w 1981, w obu przypadkach z potwierdzeniem ustaw, które chciano skasować, oraz **energia jądrowa** w 1987 i ponownie w 2011 roku.",
  "Chi è senatore a vita di diritto, senza bisogno di nomina?":
    "Kto jest senatorem dożywotnim z mocy prawa, bez potrzeby mianowania?",
  "Gli ex Presidenti del Consiglio": "Byli premierzy",
  "Gli ex Presidenti della Repubblica": "Byli Prezydenci Republiki",
  "I presidenti delle regioni a statuto speciale":
    "Przewodniczący regionów o statucie specjalnym",
  "I giudici della Corte costituzionale a fine mandato":
    "Sędziowie Corte costituzionale po zakończeniu kadencji",
  "Gli ex capi dello Stato lo diventano automaticamente. Gli altri senatori a vita sono nominati dal Presidente in carica, non più di cinque, per meriti nel campo sociale, scientifico, artistico o letterario.":
    "Byłe głowy państwa stają się nimi automatycznie. Pozostałych senatorów dożywotnich mianuje urzędujący Prezydent, nie więcej niż pięciu, za zasługi w dziedzinie społecznej, naukowej, artystycznej lub literackiej.",
  "Il quorum del cinquanta per cento riguarda il referendum **abrogativo**. Quello **confermativo** su una legge costituzionale non ne ha: due strumenti che portano lo stesso nome e funzionano in modo opposto.":
    "Próg pięćdziesięciu procent dotyczy referendum **uchylającego**. **Zatwierdzające**, w sprawie ustawy konstytucyjnej, progu nie ma: dwa narzędzia o tej samej nazwie, działające odwrotnie.",
  "Il Governo": "Rząd",
  "Perché conta: chi guida il governo in Italia non è eletto da nessuno con quel nome sulla scheda, e non può licenziare i propri ministri. Due fatti che spiegano molta della politica italiana.":
    "Dlaczego to ważne: kto kieruje rządem we Włoszech, nie jest przez nikogo wybierany pod tym tytułem na karcie do głosowania i nie może zwolnić własnych ministrów. Dwa fakty, które tłumaczą wiele z włoskiej polityki.",
  "Come nasce un governo": "Jak powstaje rząd",
  "Il Governo è formato dal **Presidente del Consiglio dei ministri** e dai **ministri**, che insieme compongono il **Consiglio dei ministri**. La sede è **Palazzo Chigi**.":
    "Rząd tworzą **Presidente del Consiglio dei ministri** i **ministrowie**, którzy razem składają się na **Consiglio dei ministri**. Siedzibą jest **Palazzo Chigi**.",
  "L'**articolo 92** stabilisce il percorso: il Presidente della Repubblica nomina il Presidente del Consiglio e, **su proposta di quest'ultimo**, i ministri. Prima di nominare, il capo dello Stato svolge le **consultazioni**: riceve i gruppi parlamentari per capire chi possa avere una maggioranza.":
    "**Artykuł 92** wyznacza drogę: Prezydent Republiki mianuje Presidente del Consiglio, a **na jego wniosek** — ministrów. Przed mianowaniem głowa państwa prowadzi **consultazioni**: przyjmuje kluby parlamentarne, żeby zorientować się, kto może mieć większość.",
  "Entro **dieci giorni** dalla formazione il governo si presenta alle camere per la **fiducia** (articolo 94). Serve quella di entrambe: un governo che l'ottiene alla Camera e la perde al Senato non esiste.":
    "W ciągu **dziesięciu dni** od utworzenia rząd staje przed izbami po **wotum zaufania** (artykuł 94). Potrzebne jest od obu: rząd, który uzyska je w Camera, a straci w Senato, nie istnieje.",
  "Chi nomina il Presidente del Consiglio?": "Kto mianuje Presidente del Consiglio?",
  "Gli elettori, con il voto alle politiche": "Wyborcy, głosując w wyborach parlamentarnych",
  "Il Presidente della Repubblica": "Prezydent Republiki",
  "La Camera dei deputati": "Camera dei deputati",
  "Il partito che ha preso più voti": "Partia, która dostała najwięcej głosów",
  "Lo nomina il capo dello Stato, dopo le consultazioni. Il nome del candidato può comparire sui manifesti elettorali, ma sulla scheda si votano i partiti e i loro candidati, non il capo del governo.":
    "Mianuje go głowa państwa, po konsultacjach. Nazwisko kandydata może widnieć na plakatach wyborczych, ale na karcie głosuje się na partie i ich kandydatów, a nie na szefa rządu.",
  "Un primo fra pari": "Pierwszy wśród równych",
  "Il Presidente del Consiglio **dirige la politica generale del governo** e ne è responsabile, ma **non può revocare un ministro**. È una differenza netta rispetto al cancelliere tedesco o al primo ministro britannico: un ministro che non si dimette resta al suo posto, e l'unica via è la crisi dell'intero governo.":
    "Presidente del Consiglio **kieruje ogólną polityką rządu** i za nią odpowiada, ale **nie może odwołać ministra**. To wyraźna różnica wobec kanclerza niemieckiego czy brytyjskiego premiera: minister, który nie poda się do dymisji, zostaje na miejscu, a jedyną drogą jest kryzys całego rządu.",
  "Da qui la brevità dei governi italiani: dal 1946 se ne sono succeduti a un ritmo che dà una durata media di poco più di un anno. La continuità l'hanno garantita l'amministrazione e — spesso — gli stessi ministri, che cambiavano governo senza cambiare scrivania.":
    "Stąd krótkość włoskich rządów: od 1946 roku następowały po sobie w tempie, które daje średnią długość niewiele ponad rok. Ciągłość zapewniały administracja i — często — sami ministrowie, którzy zmieniali rząd, nie zmieniając biurka.",
  "Quando il governo fa le leggi": "Kiedy rząd tworzy prawo",
  "Decreto legge · art. 77": "Decreto legge · art. 77",
  "In casi straordinari di necessità e urgenza. Entra in vigore subito, ma decade dall'inizio se il Parlamento non lo converte in legge entro sessanta giorni.":
    "W nadzwyczajnych przypadkach konieczności i pilności. Wchodzi w życie od razu, ale upada od początku, jeśli parlament nie przekształci go w ustawę w ciągu sześćdziesięciu dni.",
  "Decreto legislativo · art. 76": "Decreto legislativo · art. 76",
  "Il Parlamento delega il governo a scrivere una normativa, fissando principi, criteri e un termine. Serve per i testi lunghi e tecnici, come i codici.":
    "Parlament upoważnia rząd do napisania przepisów, ustalając zasady, kryteria i termin. Służy do tekstów długich i technicznych, takich jak kodeksy.",
  "Regolamento": "Rozporządzenie",
  "Norme di dettaglio che attuano una legge. Non hanno forza di legge e non possono contraddirla.":
    "Przepisy szczegółowe wykonujące ustawę. Nie mają mocy ustawy i nie mogą jej przeczyć.",
  "Che cosa succede a un decreto legge non convertito entro sessanta giorni?":
    "Co dzieje się z decreto legge nieprzekształconym w ustawę w ciągu sześćdziesięciu dni?",
  "Diventa definitivo automaticamente": "Staje się ostateczny automatycznie",
  "Decade, e perde effetto fin dall'inizio": "Upada i traci skutek od samego początku",
  "Resta in vigore altri sessanta giorni": "Zostaje w mocy przez kolejnych sześćdziesiąt dni",
  "Passa alla Corte costituzionale": "Przechodzi do Corte costituzionale",
  "Decade retroattivamente: è come se non fosse mai esistito, e il Parlamento deve semmai regolare i rapporti sorti nel frattempo. Sessanta giorni è un termine severo, ed è per questo che i decreti si accumulano a fine scadenza.":
    "Upada z mocą wsteczną: jakby nigdy nie istniał, a parlament musi co najwyżej uregulować stosunki powstałe w międzyczasie. Sześćdziesiąt dni to termin surowy i dlatego dekrety piętrzą się pod koniec biegu.",
  "Come cade": "Jak upada",
  "La **mozione di sfiducia** deve essere firmata da almeno un decimo dei componenti della camera e non può essere discussa prima di **tre giorni** dalla presentazione: il tempo serve a raffreddare gli animi. Nella pratica, però, i governi italiani cadono quasi sempre per **dimissioni**, non per un voto: un partito esce dalla maggioranza e il Presidente del Consiglio sale al Quirinale.":
    "**Mozione di sfiducia**, wniosek o wotum nieufności, musi podpisać co najmniej jedna dziesiąta członków izby i nie można go rozpatrywać wcześniej niż **trzy dni** po złożeniu: czas ma ostudzić emocje. W praktyce jednak włoskie rządy padają niemal zawsze przez **dymisję**, a nie przez głosowanie: partia wychodzi z większości, a Presidente del Consiglio jedzie na Kwirynał.",
  "Il Presidente del Consiglio può revocare un ministro?":
    "Czy Presidente del Consiglio może odwołać ministra?",
  "Sì, in qualsiasi momento": "Tak, w każdej chwili",
  "Sì, con l'accordo del Consiglio dei ministri": "Tak, za zgodą Consiglio dei ministri",
  "No: può proporne la nomina, non la revoca":
    "Nie: może wnioskować o mianowanie, nie o odwołanie",
  "Solo con l'autorizzazione del Parlamento": "Tylko za upoważnieniem parlamentu",
  "L'articolo 92 gli dà il potere di proporre i ministri al Presidente della Repubblica, non quello di rimuoverli. Un ministro che rifiuta di dimettersi si toglie solo aprendo una crisi di governo.":
    "Artykuł 92 daje mu prawo proponowania ministrów Prezydentowi Republiki, a nie usuwania ich. Ministra, który odmawia dymisji, można usunąć jedynie otwierając kryzys rządowy.",
  "Presidente della Repubblica e Presidente del Consiglio sono due cariche diverse e si confondono di continuo. Il primo sta al **Quirinale** e dura sette anni; il secondo sta a **Palazzo Chigi** e dura quanto la sua maggioranza.":
    "Prezydent Republiki i Presidente del Consiglio to dwa różne urzędy i nieustannie się je myli. Pierwszy siedzi na **Kwirynale** i trwa siedem lat; drugi siedzi w **Palazzo Chigi** i trwa tyle, co jego większość.",
  "Perché conta: sulla carta il capo dello Stato è una figura di garanzia che firma. Nei momenti di crisi è la persona che decide chi prova a governare — e in Italia le crisi non sono rare.":
    "Dlaczego to ważne: na papierze głowa państwa to postać gwaranta, która podpisuje. W chwilach kryzysu to człowiek, który decyduje, kto spróbuje rządzić — a we Włoszech kryzysy nie są rzadkie.",
  "Come si elegge": "Jak się go wybiera",
  "Il Presidente è eletto dal **Parlamento in seduta comune**, cioè deputati e senatori insieme, con l'aggiunta di **cinquantotto delegati regionali**: tre per ogni regione, uno solo per la Valle d'Aosta, che è troppo piccola per tre.":
    "Prezydenta wybiera **parlament na wspólnym posiedzeniu**, czyli deputowani i senatorowie razem, z dodatkiem **pięćdziesięciu ośmiu delegatów regionalnych**: po trzech z każdego regionu, tylko jeden z Valle d'Aosta, która jest za mała na trzech.",
  "Nei primi tre scrutini serve la maggioranza dei **due terzi**; dal quarto basta la **maggioranza assoluta**. Il voto è segreto, e la segretezza produce i **franchi tiratori**: parlamentari che votano contro le indicazioni del proprio gruppo senza che nessuno sappia chi siano. Alcune elezioni hanno richiesto oltre venti scrutini.":
    "W pierwszych trzech turach potrzebna jest większość **dwóch trzecich**; od czwartej wystarczy **bezwzględna**. Głosowanie jest tajne, a tajność rodzi **franchi tiratori**: parlamentarzystów, którzy głosują wbrew wskazaniom własnego klubu, i nikt nie wie, kto to. Niektóre wybory wymagały ponad dwudziestu tur.",
  "Sette anni": "Siedem lat",
  "Il mandato è più lungo della legislatura di proposito: il Presidente non deve dipendere dal Parlamento che lo ha eletto.":
    "Kadencja jest dłuższa od parlamentarnej z rozmysłem: Prezydent nie ma zależeć od parlamentu, który go wybrał.",
  "Cinquant'anni": "Pięćdziesiąt lat",
  "L'età minima. Servono anche la cittadinanza italiana e il godimento dei diritti civili e politici.":
    "Minimalny wiek. Potrzebne są także obywatelstwo włoskie i pełnia praw obywatelskich i politycznych.",
  "Il Quirinale": "Kwirynał",
  "La residenza ufficiale, un palazzo che è stato dei papi e poi dei re prima di essere della Repubblica.":
    "Oficjalna rezydencja, pałac, który należał do papieży, potem do królów, zanim stał się siedzibą Republiki.",
  "Quanto dura il mandato del Presidente della Repubblica?":
    "Ile trwa kadencja Prezydenta Republiki?",
  "Quattro anni": "Cztery lata",
  "Nove anni": "Dziewięć lat",
  "Sette anni, due più della legislatura. Cinque è la durata delle camere e nove quella dei giudici costituzionali.":
    "Siedem lat, o dwa więcej niż kadencja parlamentu. Pięć to długość kadencji izb, a dziewięć — sędziów konstytucyjnych.",
  "Che cosa può fare": "Co może",
  "**Promulga le leggi**, e prima di firmarle può **rinviarle una volta** alle camere con un messaggio motivato. Se il Parlamento riapprova lo stesso testo, deve promulgarlo: il rinvio è un freno, non un veto.":
    "**Promulguje ustawy**, a przed podpisaniem może **raz odesłać** je izbom z uzasadnionym orędziem. Jeśli parlament ponownie uchwali ten sam tekst, musi go promulgować: odesłanie jest hamulcem, nie wetem.",
  "**Scioglie le camere**, sentiti i loro presidenti, e non può farlo negli ultimi sei mesi del proprio mandato — il cosiddetto **semestre bianco**, pensato perché non usi lo scioglimento per farsi rieleggere. **Nomina** il Presidente del Consiglio e cinque giudici costituzionali, **presiede** il Consiglio superiore della magistratura e il Consiglio supremo di difesa, **comanda** le forze armate, **concede la grazia** e **ratifica** i trattati.":
    "**Rozwiązuje izby**, po wysłuchaniu ich przewodniczących, i nie może tego zrobić w ostatnich sześciu miesiącach własnej kadencji — to tak zwany **semestre bianco**, pomyślany po to, by nie użył rozwiązania do własnej reelekcji. **Mianuje** Presidente del Consiglio i pięciu sędziów konstytucyjnych, **przewodniczy** Consiglio superiore della magistratura i Najwyższej Radzie Obrony, **dowodzi** siłami zbrojnymi, **stosuje prawo łaski** i **ratyfikuje** umowy międzynarodowe.",
  "Quante volte il Presidente può rinviare una legge alle camere?":
    "Ile razy Prezydent może odesłać ustawę izbom?",
  "Nessuna: deve promulgare quello che riceve": "Ani razu: musi promulgować to, co dostaje",
  "Una sola volta": "Tylko raz",
  "Due volte": "Dwa razy",
  "Tutte le volte che ritiene necessario": "Tyle razy, ile uzna za konieczne",
  "Un solo rinvio, con messaggio motivato. Se le camere riapprovano il medesimo testo, la promulgazione diventa un atto dovuto: il Presidente frena, non blocca.":
    "Jedno odesłanie, z uzasadnionym orędziem. Jeśli izby ponownie uchwalą ten sam tekst, promulgacja staje się obowiązkiem: Prezydent hamuje, nie blokuje.",
  "Di che cosa risponde": "Za co odpowiada",
  "Il Presidente **non è responsabile** degli atti compiuti nell'esercizio delle sue funzioni, con due eccezioni: **alto tradimento** e **attentato alla Costituzione**, per i quali lo mette in stato d'accusa il Parlamento in seduta comune e lo giudica la Corte costituzionale integrata da sedici membri esterni.":
    "Prezydent **nie ponosi odpowiedzialności** za czynności dokonane w wykonywaniu swoich funkcji, z dwoma wyjątkami: **zdrada stanu** i **zamach na Konstytucję**, za które stawia go w stan oskarżenia parlament na wspólnym posiedzeniu, a sądzi Corte costituzionale uzupełniona o szesnastu członków spoza jej składu.",
  "Ogni suo atto richiede la **controfirma** del ministro proponente, che se ne assume la responsabilità (articolo 89). È il meccanismo che tiene insieme un capo dello Stato irresponsabile e un sistema in cui qualcuno deve pur rispondere.":
    "Każdy jego akt wymaga **kontrasygnaty** wnioskującego ministra, który bierze za niego odpowiedzialność (artykuł 89). To mechanizm spinający nieodpowiedzialną głowę państwa z systemem, w którym ktoś jednak musi odpowiadać.",
  "Il mandato non prevede limiti di rielezione, ma per sessantasette anni nessuno è stato rieletto. È successo due volte in tempi recenti, entrambe in una crisi in cui il Parlamento non trovava un altro nome.":
    "Kadencja nie przewiduje ograniczeń reelekcji, ale przez sześćdziesiąt siedem lat nikt nie został wybrany ponownie. Zdarzyło się to dwa razy w ostatnich latach, oba razy w kryzysie, w którym parlament nie znajdował innego nazwiska.",
  "Che cos'è il semestre bianco?": "Czym jest semestre bianco?",
  "I primi sei mesi di mandato, in cui il Presidente non firma leggi":
    "Pierwszymi sześcioma miesiącami kadencji, w których Prezydent nie podpisuje ustaw",
  "Gli ultimi sei mesi di mandato, in cui non può sciogliere le camere":
    "Ostatnimi sześcioma miesiącami kadencji, w których nie może rozwiązać izb",
  "Il periodo fra lo scioglimento e le elezioni": "Okresem między rozwiązaniem izb a wyborami",
  "La pausa estiva dei lavori parlamentari": "Letnią przerwą w pracach parlamentu",
  "Gli ultimi sei mesi. La regola esiste perché un Presidente in scadenza non possa sciogliere il Parlamento e farsene eleggere uno più favorevole alla propria rielezione.":
    "Ostatnimi sześcioma miesiącami. Reguła istnieje po to, by kończący kadencję Prezydent nie mógł rozwiązać parlamentu i wybrać sobie takiego, który chętniej wybierze go ponownie.",
  "Il Presidente non governa. Non decide le tasse, non presenta il bilancio, non guida la politica estera: sceglie chi ci prova, e controlla che si resti dentro la Costituzione.":
    "Prezydent nie rządzi. Nie decyduje o podatkach, nie przedstawia budżetu, nie prowadzi polityki zagranicznej: wybiera tego, kto spróbuje, i pilnuje, żeby pozostawać w granicach Konstytucji.",
  "La giustizia e la Corte costituzionale": "Wymiar sprawiedliwości i Corte costituzionale",
  "Perché conta: in Italia i giudici non sono nominati dal potere politico e i pubblici ministeri non scelgono quali reati perseguire. Sono due scelte precise, e sono anche due dei temi più discussi del paese.":
    "Dlaczego to ważne: we Włoszech sędziów nie mianuje władza polityczna, a prokuratorzy nie wybierają, które przestępstwa ścigać. To dwa świadome wybory i zarazem dwa z najbardziej dyskutowanych tematów w kraju.",
  "Un ordine autonomo": "Autonomiczny stan",
  "L'**articolo 104** definisce la magistratura un **ordine autonomo e indipendente da ogni altro potere**. Non si dice potere ma ordine, e la differenza è voluta: i giudici non rappresentano nessuno e non rispondono a un elettorato.":
    "**Artykuł 104** określa sądownictwo jako **stan autonomiczny i niezależny od każdej innej władzy**. Nie mówi się „władza”, tylko „stan”, i ta różnica jest zamierzona: sędziowie nikogo nie reprezentują i nie odpowiadają przed elektoratem.",
  "L'**articolo 101** completa il quadro: i giudici sono **soggetti soltanto alla legge**. Si entra in magistratura per **concorso**, non per nomina, e la carriera è gestita dal **Consiglio superiore della magistratura**, presieduto dal Presidente della Repubblica.":
    "**Artykuł 101** dopełnia obrazu: sędziowie podlegają **wyłącznie ustawie**. Do sądownictwa wchodzi się przez **konkurs**, a nie przez nominację, a karierą zarządza **Consiglio superiore della magistratura**, któremu przewodniczy Prezydent Republiki.",
  "L'**articolo 112** impone al pubblico ministero l'**obbligatorietà dell'azione penale**: ricevuta una notizia di reato deve procedere. In teoria toglie ogni discrezionalità politica; in pratica, con più fascicoli che magistrati, la scelta si sposta sulle priorità.":
    "**Artykuł 112** nakłada na prokuratora **obowiązek ścigania**: po otrzymaniu zawiadomienia o przestępstwie musi działać. W teorii odbiera to wszelką uznaniowość polityczną; w praktyce, gdy akt jest więcej niż prokuratorów, wybór przenosi się na priorytety.",
  "Come si diventa magistrato in Italia?":
    "Jak zostaje się sędzią lub prokuratorem we Włoszech?",
  "Per nomina del ministro della Giustizia": "Przez mianowanie przez ministra sprawiedliwości",
  "Per elezione popolare": "Przez wybór powszechny",
  "Per concorso pubblico": "Przez konkurs publiczny",
  "Per designazione del Parlamento": "Przez wskazanie przez parlament",
  "Per concorso. È la scelta che tiene la carriera fuori dalle mani della politica, e la ragione per cui il CSM, non il ministro, decide trasferimenti e promozioni.":
    "Przez konkurs. To wybór, który trzyma karierę poza rękami polityki, i powód, dla którego o przeniesieniach i awansach decyduje CSM, a nie minister.",
  "Tre gradi di giudizio": "Trzy instancje",
  "Primo grado": "Pierwsza instancja",
  "Giudice di pace, tribunale o corte d'assise secondo la materia e la gravità. Qui si accertano i fatti.":
    "Giudice di pace, sąd okręgowy albo corte d'assise, zależnie od sprawy i jej ciężaru. Tutaj ustala się fakty.",
  "Appello": "Apelacja",
  "La corte d'appello riesamina il caso, fatti compresi. Può ribaltare la decisione.":
    "Sąd apelacyjny bada sprawę na nowo, łącznie z faktami. Może odwrócić rozstrzygnięcie.",
  "Cassazione": "Kasacja",
  "La Corte suprema non rivede i fatti: controlla che la legge sia stata applicata correttamente. È il giudizio di legittimità.":
    "Sąd Najwyższy nie bada faktów: sprawdza, czy ustawę zastosowano prawidłowo. To ocena zgodności z prawem.",
  "Finché la Cassazione non ha deciso, la sentenza non è **definitiva** — in italiano si dice passata in giudicato — e l'imputato resta non colpevole a norma dell'articolo 27. La lunghezza dei processi civili e penali è da decenni il problema più segnalato all'Italia dalle istituzioni europee.":
    "Dopóki Cassazione nie orzeknie, wyrok nie jest **prawomocny** — po włosku mówi się passata in giudicato — a oskarżony pozostaje niewinny w rozumieniu artykułu 27. Długość procesów cywilnych i karnych od dziesięcioleci jest problemem najczęściej wytykanym Włochom przez instytucje europejskie.",
  "Che cosa esamina la Corte di cassazione?": "Co bada Corte di cassazione?",
  "I fatti, una terza volta": "Fakty, po raz trzeci",
  "La corretta applicazione della legge": "Prawidłowe zastosowanie ustawy",
  "Solo le sentenze di condanna": "Tylko wyroki skazujące",
  "La legittimità costituzionale delle leggi": "Zgodność ustaw z Konstytucją",
  "La Cassazione giudica la legittimità, non il merito: non stabilisce se il fatto sia avvenuto, ma se il diritto sia stato applicato bene. La legittimità costituzionale delle leggi spetta invece alla Corte costituzionale.":
    "Cassazione ocenia zgodność z prawem, a nie meritum: nie ustala, czy zdarzenie miało miejsce, lecz czy prawo zastosowano dobrze. Zgodność ustaw z Konstytucją należy natomiast do Corte costituzionale.",
  "La Corte costituzionale": "Corte costituzionale",
  "È un organo a sé, che non fa parte della magistratura ordinaria. Ha **quindici giudici**, nominati in tre modi diversi perché nessun potere possa comporla da solo: **cinque** dal Presidente della Repubblica, **cinque** dal Parlamento in seduta comune, **cinque** dalle supreme magistrature.":
    "To organ osobny, nienależący do zwykłego sądownictwa. Ma **piętnastu sędziów**, powoływanych na trzy różne sposoby, żeby żadna władza nie mogła obsadzić go sama: **pięciu** przez Prezydenta Republiki, **pięciu** przez parlament na wspólnym posiedzeniu, **pięciu** przez najwyższe sądy.",
  "Durano **nove anni** e **non sono rieleggibili**: un mandato lungo e senza rinnovo mette il giudice al riparo da chi lo ha nominato. La sede è **Palazzo della Consulta**, e per questo la Corte si chiama spesso semplicemente la Consulta.":
    "Trwają **dziewięć lat** i **nie mogą być wybrani ponownie**: długa kadencja bez odnowienia chroni sędziego przed tym, kto go powołał. Siedzibą jest **Palazzo della Consulta**, i dlatego Trybunał często nazywa się po prostu Consulta.",
  "Giudica sulla **legittimità costituzionale** delle leggi, sui **conflitti di attribuzione** fra poteri dello Stato e fra Stato e regioni, sulle **accuse** contro il Presidente della Repubblica, e sull'**ammissibilità dei referendum** abrogativi. Una legge dichiarata incostituzionale cessa di avere efficacia dal giorno dopo la pubblicazione della sentenza.":
    "Orzeka o **zgodności ustaw z Konstytucją**, o **sporach kompetencyjnych** między władzami państwa oraz między państwem a regionami, o **oskarżeniach** przeciw Prezydentowi Republiki i o **dopuszczalności referendów** uchylających. Ustawa uznana za niezgodną z Konstytucją traci moc od dnia następnego po ogłoszeniu wyroku.",
  "Come sono scelti i quindici giudici della Corte costituzionale?":
    "Jak wybiera się piętnastu sędziów Corte costituzionale?",
  "Tutti dal Parlamento in seduta comune": "Wszystkich przez parlament na wspólnym posiedzeniu",
  "Cinque dal Presidente, cinque dal Parlamento, cinque dalle supreme magistrature":
    "Pięciu przez Prezydenta, pięciu przez parlament, pięciu przez najwyższe sądy",
  "Tutti dal Presidente della Repubblica": "Wszystkich przez Prezydenta Republiki",
  "Per concorso, come i magistrati ordinari": "Przez konkurs, jak zwykłych sędziów",
  "Tre origini diverse, cinque ciascuna, perché nessun potere possa formare la Corte da solo. Il mandato di nove anni non rinnovabile completa la garanzia.":
    "Trzy różne źródła, po pięciu z każdego, żeby żadna władza nie mogła sama uformować Trybunału. Dziewięcioletnia kadencja bez możliwości odnowienia dopełnia gwarancji.",
  "Corte costituzionale e Corte di cassazione sono due organi distinti. La prima giudica le **leggi**, la seconda le **sentenze**. Che stiano entrambe a Roma e comincino con la stessa parola non aiuta.":
    "Corte costituzionale i Corte di cassazione to dwa odrębne organy. Pierwszy ocenia **ustawy**, drugi **wyroki**. To, że oba mieszczą się w Rzymie i zaczynają od tego samego słowa, nie pomaga.",
  "Regioni, province e comuni": "Regiony, prowincje i gminy",
  "Perché conta: l'articolo che elenca gli enti della Repubblica comincia dal comune e finisce con lo Stato. L'ordine non è casuale, ed è la chiave per capire il rapporto fra centro e territorio.":
    "Dlaczego to ważne: artykuł, który wylicza jednostki Republiki, zaczyna się od gminy, a kończy na państwie. Kolejność nie jest przypadkowa i jest kluczem do zrozumienia relacji między centrum a terytorium.",
  "Dal basso verso l'alto": "Od dołu do góry",
  "L'**articolo 114** dice che la Repubblica è costituita dai **comuni**, dalle **province**, dalle **città metropolitane**, dalle **regioni** e dallo **Stato**. Elencare lo Stato per ultimo, dopo il comune, fu una scelta della riforma del **Titolo V** nel **2001**: i territori non sono articolazioni dello Stato, sono elementi della Repubblica al pari suo.":
    "**Artykuł 114** mówi, że Republikę tworzą **gminy**, **prowincje**, **miasta metropolitalne**, **regiony** i **państwo**. Wymienienie państwa na końcu, po gminie, było wyborem reformy **Tytułu V** z **2001 roku**: terytoria nie są ogniwami państwa, są elementami Republiki na równi z nim.",
  "La riforma ha anche ribaltato il criterio delle competenze. Prima le regioni potevano legiferare solo nelle materie elencate; oggi l'elenco è quello delle materie **esclusive dello Stato** — difesa, moneta, giustizia, immigrazione — e delle materie **concorrenti**, mentre tutto ciò che non è elencato spetta alle **regioni**.":
    "Reforma odwróciła też kryterium kompetencji. Wcześniej regiony mogły stanowić prawo tylko w wyliczonych dziedzinach; dziś wyliczone są dziedziny **wyłączne dla państwa** — obrona, waluta, wymiar sprawiedliwości, imigracja — oraz dziedziny **dzielone**, a wszystko, co nie zostało wymienione, należy do **regionów**.",
  "Venti regioni, cinque diverse dalle altre": "Dwadzieścia regionów, pięć innych niż reszta",
  "Le regioni sono **venti**, e **cinque** hanno uno **statuto speciale** approvato con legge costituzionale. Non è un privilegio arbitrario: ciascuna ha una ragione storica precisa.":
    "Regionów jest **dwadzieścia**, a **pięć** ma **statut specjalny** uchwalony ustawą konstytucyjną. To nie arbitralny przywilej: każdy ma precyzyjną rację historyczną.",
  "Sicilia e Sardegna": "Sycylia i Sardynia",
  "Isole, con un movimento autonomista forte nell'immediato dopoguerra. La Sicilia ottenne lo statuto nel 1946, prima ancora della Costituzione.":
    "Wyspy, z silnym ruchem autonomistycznym tuż po wojnie. Sycylia dostała statut w 1946 roku, jeszcze przed Konstytucją.",
  "Trentino-Alto Adige": "Trentino-Alto Adige",
  "La minoranza di lingua tedesca. Le competenze vere stanno nelle due province autonome di Trento e Bolzano più che nella regione.":
    "Mniejszość niemieckojęzyczna. Prawdziwe kompetencje leżą w dwóch prowincjach autonomicznych, Trydencie i Bolzano, bardziej niż w regionie.",
  "Il confine orientale, conteso fino agli anni Cinquanta, e le minoranze slovena e friulana.":
    "Granica wschodnia, sporna aż do lat pięćdziesiątych, oraz mniejszości słoweńska i friulska.",
  "La minoranza francofona, in una regione così piccola da avere un solo consiglio che fa anche da provincia.":
    "Mniejszość francuskojęzyczna, w regionie tak małym, że ma jedną radę, która pełni też funkcję prowincji.",
  "Quante regioni italiane hanno uno statuto speciale?":
    "Ile włoskich regionów ma statut specjalny?",
  "Tre": "Trzy",
  "Cinque": "Pięć",
  "Otto": "Osiem",
  "Venti: ogni regione ha il proprio statuto": "Dwadzieścia: każdy region ma własny statut",
  "Cinque: Sicilia, Sardegna, Trentino-Alto Adige, Friuli Venezia Giulia e Valle d'Aosta. Le altre quindici hanno statuti ordinari, che non sono leggi costituzionali.":
    "Pięć: Sycylia, Sardynia, Trentino-Alto Adige, Friuli Venezia Giulia i Valle d'Aosta. Pozostałych piętnaście ma statuty zwykłe, które nie są ustawami konstytucyjnymi.",
  "Chi governa una regione": "Kto rządzi regionem",
  "Ogni regione ha un **Consiglio regionale**, che fa le leggi, una **Giunta**, che governa, e un **Presidente della Regione**, eletto direttamente dai cittadini nella quasi totalità dei casi. Lo si sente chiamare **governatore**: è un uso giornalistico, non un titolo che esista nella Costituzione.":
    "Każdy region ma **Consiglio regionale**, który stanowi prawo, **Giuntę**, która rządzi, i **Presidente della Regione**, wybieranego niemal zawsze bezpośrednio przez obywateli. Słyszy się nazwę **governatore**: to zwyczaj dziennikarski, a nie tytuł istniejący w Konstytucji.",
  "La regola che tiene insieme il sistema è chiamata dagli addetti ai lavori *simul stabunt, simul cadent*: se il Presidente cade, cade con lui l'intero consiglio e si torna al voto. Serve a evitare che una regione resti senza guida per anni.":
    "Zasada spinająca ten system jest w fachowym języku nazywana *simul stabunt, simul cadent*: jeśli upada Przewodniczący, upada z nim cała rada i wraca się do wyborów. Ma to zapobiec temu, żeby region latami został bez kierownictwa.",
  "Comuni e città metropolitane": "Gminy i miasta metropolitalne",
  "I comuni sono circa **ottomila**, dalle metropoli ai paesi di poche decine di abitanti. Il **sindaco** è eletto **direttamente** dai cittadini insieme al consiglio comunale, e nei comuni sopra i quindicimila abitanti si vota su due turni con ballottaggio. Il municipio è dove si fa quasi tutto ciò che riguarda la vita quotidiana: residenza, carta d'identità, stato civile, scuole dell'infanzia, rifiuti, urbanistica.":
    "Gmin jest około **ośmiu tysięcy**, od metropolii po wsie liczące kilkadziesiąt osób. **Sindaco**, burmistrz, jest wybierany **bezpośrednio** przez mieszkańców razem z radą gminy, a w gminach powyżej piętnastu tysięcy mieszkańców głosuje się w dwóch turach z dogrywką. Ratusz to miejsce, gdzie załatwia się prawie wszystko, co dotyczy życia codziennego: zameldowanie, dowód osobisty, akta stanu cywilnego, przedszkola, śmieci, planowanie przestrzenne.",
  "Le **città metropolitane** sono **quattordici** e dal 2015 hanno sostituito le province nei territori dei grandi capoluoghi. Il sindaco del comune capoluogo ne è anche sindaco metropolitano.":
    "**Miast metropolitalnych** jest **czternaście** i od 2015 roku zastąpiły prowincje na terenach wielkich stolic regionów. Burmistrz miasta stołecznego jest zarazem burmistrzem metropolitalnym.",
  "Chi elegge il sindaco di un comune italiano?": "Kto wybiera burmistrza włoskiej gminy?",
  "Il consiglio comunale, fra i propri membri": "Rada gminy, spośród swoich członków",
  "I cittadini, con voto diretto": "Mieszkańcy, w głosowaniu bezpośrednim",
  "Il prefetto, che rappresenta il governo": "Prefekt, który reprezentuje rząd",
  "Il presidente della regione": "Przewodniczący regionu",
  "Direttamente i cittadini, dal 1993. Prima lo eleggeva il consiglio comunale, e i sindaci cambiavano ogni volta che cambiavano gli equilibri fra i partiti in aula.":
    "Bezpośrednio mieszkańcy, od 1993 roku. Wcześniej wybierała go rada gminy, a burmistrzowie zmieniali się za każdym razem, gdy zmieniał się układ sił między partiami na sali.",
  "In quale ordine l'articolo 114 elenca gli enti della Repubblica?":
    "W jakiej kolejności artykuł 114 wylicza jednostki Republiki?",
  "Dallo Stato al comune": "Od państwa do gminy",
  "Dal comune allo Stato": "Od gminy do państwa",
  "In ordine alfabetico": "Alfabetycznie",
  "Per numero di abitanti": "Według liczby mieszkańców",
  "Comuni, province, città metropolitane, regioni, Stato. L'ordine fu invertito dalla riforma del 2001 per dire che i territori non discendono dallo Stato ma stanno accanto ad esso.":
    "Gminy, prowincje, miasta metropolitalne, regiony, państwo. Kolejność odwróciła reforma z 2001 roku, żeby powiedzieć, że terytoria nie pochodzą od państwa, lecz stoją obok niego.",
  "Il **prefetto** non è un organo della regione né del comune: rappresenta il **governo** in ogni provincia e dipende dal Ministero dell'interno. È lui che riceve le domande di cittadinanza e firma gli accordi di integrazione.":
    "**Prefetto**, prefekt, nie jest organem regionu ani gminy: reprezentuje **rząd** w każdej prowincji i podlega Ministerstwu Spraw Wewnętrznych. To on przyjmuje wnioski o obywatelstwo i podpisuje umowy integracyjne.",
  "Da Roma ai Comuni": "Od Rzymu do komun miejskich",
  "Storia d'Italia": "Historia Włoch",
  "Perché si comincia da qui: fra la caduta dell'impero e l'Unità passano quasi quattordici secoli in cui l'Italia non è uno Stato. Chi non tiene presente quel vuoto non capisce né i campanili né le cento cucine.":
    "Dlaczego zaczynamy od tego: między upadkiem cesarstwa a zjednoczeniem mija prawie czternaście stuleci, w których Włochy nie są państwem. Kto o tej pustce nie pamięta, nie zrozumie ani przywiązania do własnej dzwonnicy, ani stu różnych kuchni.",
  "Che cosa lascia Roma": "Co zostawia Rzym",
  "La tradizione data la fondazione di Roma al **753 avanti Cristo**, la repubblica al **509** e l'impero al **27 avanti Cristo**, quando Ottaviano riceve il titolo di Augusto. L'impero d'Occidente finisce nel **476**, con la deposizione di Romolo Augustolo.":
    "Tradycja datuje założenie Rzymu na **753 rok przed naszą erą**, republikę na **509**, a cesarstwo na **27 rok przed naszą erą**, kiedy Oktawian otrzymuje tytuł Augusta. Cesarstwo zachodnie kończy się w **476 roku**, wraz z obaleniem Romulusa Augustulusa.",
  "Ciò che resta non è un territorio ma un'eredità: la **lingua latina**, da cui discendono l'italiano e le altre lingue romanze; il **diritto romano**, che è ancora l'ossatura del codice civile; le **strade**, molte delle quali ricalcate dalle statali di oggi; e l'idea stessa di città come luogo di cittadinanza.":
    "To, co zostaje, nie jest terytorium, lecz dziedzictwem: **łacina**, z której wywodzą się włoski i pozostałe języki romańskie; **prawo rzymskie**, wciąż szkielet kodeksu cywilnego; **drogi**, z których wiele powtarzają dzisiejsze drogi krajowe; i sama idea miasta jako miejsca obywatelstwa.",
  "In quale anno finisce l'Impero romano d'Occidente?":
    "W którym roku kończy się Cesarstwo Zachodniorzymskie?",
  "Nel 27 avanti Cristo": "W 27 roku przed naszą erą",
  "Nel 313": "W 313",
  "Nel 476": "W 476",
  "Nel 1453": "W 1453",
  "Il 476 è la deposizione di Romolo Augustolo. Il 1453 è la caduta di Costantinopoli, cioè la fine dell'impero d'Oriente, quasi mille anni più tardi.":
    "476 rok to obalenie Romulusa Augustulusa. 1453 to upadek Konstantynopola, czyli koniec cesarstwa wschodniego, prawie tysiąc lat później.",
  "Un mosaico di poteri": "Mozaika władz",
  "Dopo il 476 la penisola non torna unita per quasi quattordici secoli. Arrivano i **Longobardi** nel **568**, che si insediano al centro e al nord; i **Franchi** di Carlo Magno li sconfiggono nel **774**; nel frattempo nasce lo **Stato della Chiesa**, che taglia l'Italia a metà e resterà lì fino al 1870.":
    "Po 476 roku półwysep nie wraca do jedności przez prawie czternaście stuleci. W **568 roku** przychodzą **Longobardowie**, którzy osiadają w centrum i na północy; **Frankowie** Karola Wielkiego pokonują ich w **774**; tymczasem powstaje **Państwo Kościelne**, które przecina Włochy na pół i zostanie tam aż do 1870 roku.",
  "Il Sud normanno": "Normańskie Południe",
  "Nel 1130 i Normanni fondano il Regno di Sicilia, il primo Stato accentrato d'Europa, con Palermo capitale multilingue di arabi, greci, latini ed ebrei.":
    "W 1130 roku Normanowie zakładają Królestwo Sycylii, pierwsze scentralizowane państwo Europy, ze stolicą w wielojęzycznym Palermo Arabów, Greków, Latynów i Żydów.",
  "I Comuni del Nord": "Komuny miejskie Północy",
  "Le città padane si governano da sé attraverso consoli e assemblee, e comprano o strappano l'autonomia all'imperatore.":
    "Miasta doliny Padu rządzą się same przez konsulów i zgromadzenia, a autonomię kupują od cesarza albo mu ją wydzierają.",
  "Lo Stato della Chiesa": "Państwo Kościelne",
  "Il papa è anche sovrano temporale su una fascia che va dal Lazio alla Romagna. La divisione fra Nord e Sud passa di lì.":
    "Papież jest także władcą świeckim pasa ziemi od Lacjum po Romanię. Podział na Północ i Południe biegnie właśnie tamtędy.",
  "Le Repubbliche marinare": "Republiki morskie",
  "Amalfi, Pisa, Genova e Venezia costruiscono flotte, colonie e banche, e portano in Italia la contabilità e la lettera di cambio.":
    "Amalfi, Piza, Genua i Wenecja budują floty, kolonie i banki, i przynoszą do Włoch księgowość oraz weksel.",
  "Legnano e la pace di Costanza": "Legnano i pokój w Konstancji",
  "Nel **1176** i Comuni riuniti nella **Lega Lombarda** sconfiggono a **Legnano** l'imperatore Federico Barbarossa. La **pace di Costanza** del **1183** riconosce alle città il diritto di eleggere i propri magistrati e di amministrarsi.":
    "W **1176 roku** komuny zjednoczone w **Lidze Lombardzkiej** pokonują pod **Legnano** cesarza Fryderyka Barbarossę. **Pokój w Konstancji** z **1183 roku** przyznaje miastom prawo wybierania własnych urzędników i samodzielnego zarządzania sobą.",
  "È un fatto senza paragoni nell'Europa del tempo: decine di città indipendenti, ciascuna con leggi, monete e milizie proprie, nel raggio di poche decine di chilometri. Da lì viene il **campanilismo**, che non è un difetto caratteriale ma il residuo di secoli in cui il campanile accanto era davvero un altro Stato.":
    "To fakt bez odpowiednika w ówczesnej Europie: dziesiątki niezależnych miast, każde z własnym prawem, własną monetą i własną milicją, w promieniu kilkudziesięciu kilometrów. Stąd bierze się **campanilismo**, przywiązanie do własnej dzwonnicy, które nie jest wadą charakteru, lecz pozostałością po stuleciach, w których dzwonnica obok naprawdę należała do innego państwa.",
  "Che cosa riconosce ai Comuni la pace di Costanza del 1183?":
    "Co pokój w Konstancji z 1183 roku przyznaje komunom?",
  "Il diritto di governarsi da sé, eleggendo i propri magistrati":
    "Prawo do samodzielnych rządów przez wybór własnych urzędników",
  "L'esenzione da ogni tassa imperiale per sempre":
    "Zwolnienie z każdego podatku cesarskiego na zawsze",
  "Il diritto di battere moneta d'oro": "Prawo bicia złotej monety",
  "L'unione in un solo regno del Nord": "Połączenie Północy w jedno królestwo",
  "Dopo Legnano l'imperatore riconosce l'autogoverno cittadino. Le città restano formalmente dentro l'impero, ma amministrano sé stesse: è il compromesso che rende possibile l'età dei Comuni.":
    "Po Legnano cesarz uznaje miejski samorząd. Miasta formalnie zostają w cesarstwie, ale zarządzają sobą same: to kompromis, który umożliwia epokę komun.",
  "Dai Comuni alle Signorie": "Od komun do signorii",
  "Nel Trecento le lotte fra fazioni logorano le istituzioni comunali, e in una città dopo l'altra un uomo o una famiglia prende il potere in modo stabile: nascono le **Signorie**, che nel secolo successivo diventano **Principati** riconosciuti. I Visconti e poi gli Sforza a Milano, i Medici a Firenze, gli Este a Ferrara, i Gonzaga a Mantova.":
    "W XIV wieku walki między stronnictwami wyniszczają instytucje komunalne i w mieście po mieście jeden człowiek albo jedna rodzina przejmuje władzę na stałe: rodzą się **signorie**, które w następnym stuleciu stają się uznanymi **księstwami**. Viscontich, a potem Sforzów w Mediolanie, Medyceuszy we Florencji, Este w Ferrarze, Gonzagów w Mantui.",
  "Venezia fa eccezione e resta una repubblica per oltre mille anni, fino al 1797: la **Serenissima**, governata da un doge eletto e da un consiglio di patrizi.":
    "Wenecja jest wyjątkiem i pozostaje republiką przez ponad tysiąc lat, aż do 1797 roku: **Serenissima**, rządzona przez wybieranego dożę i radę patrycjuszy.",
  "Quale città mantiene un ordinamento repubblicano fino al 1797?":
    "Które miasto utrzymuje ustrój republikański aż do 1797 roku?",
  "Milano": "Mediolan",
  "Firenze": "Florencja",
  "Venezia": "Wenecja",
  "Napoli": "Neapol",
  "La Repubblica di Venezia dura oltre mille anni e finisce solo con l'arrivo di Napoleone. Milano e Firenze passano invece a signorie ereditarie, e Napoli è un regno fin dal Medioevo.":
    "Republika Wenecka trwa ponad tysiąc lat i kończy się dopiero wraz z przybyciem Napoleona. Mediolan i Florencja przechodzą natomiast pod signorie dziedziczne, a Neapol jest królestwem od średniowiecza.",
  "Medioevo non significa immobilità. Fra il 1100 e il 1300 l'Italia inventa la banca moderna, la partita doppia, l'università come corporazione — Bologna, 1088 — e la lettera di cambio: strumenti che l'Europa userà per secoli.":
    "Średniowiecze nie znaczy bezruch. Między 1100 a 1300 rokiem Włochy wymyślają nowoczesny bank, podwójną księgowość, uniwersytet jako korporację — Bolonia, 1088 — i weksel: narzędzia, których Europa będzie używać przez stulecia.",
  "Il Rinascimento e gli Stati italiani": "Renesans i państwa włoskie",
  "Perché conta: nello stesso mezzo secolo l'Italia raggiunge il vertice della propria influenza culturale e perde ogni indipendenza politica. Le due cose accadono insieme, e non per caso.":
    "Dlaczego to ważne: w ciągu tego samego półwiecza Włochy osiągają szczyt swojego wpływu kulturalnego i tracą wszelką niezależność polityczną. Obie rzeczy dzieją się razem i nie przez przypadek.",
  "Cinque Stati in equilibrio": "Pięć państw w równowadze",
  "La **pace di Lodi**, nel **1454**, chiude decenni di guerre fra le potenze della penisola e fissa un equilibrio fra cinque Stati: il **Ducato di Milano**, la **Repubblica di Venezia**, la **Repubblica di Firenze**, lo **Stato della Chiesa** e il **Regno di Napoli**.":
    "**Pokój w Lodi**, w **1454 roku**, zamyka dziesięciolecia wojen między potęgami półwyspu i ustala równowagę pięciu państw: **Księstwa Mediolanu**, **Republiki Weneckiej**, **Republiki Florenckiej**, **Państwa Kościelnego** i **Królestwa Neapolu**.",
  "Nessuno è abbastanza forte da prevalere, e per quarant'anni la diplomazia sostituisce la guerra. È in questo intervallo che nascono le **ambasciate permanenti**, un'invenzione italiana che l'Europa adotterà per intero.":
    "Żadne nie jest dość silne, by przeważyć, i przez czterdzieści lat dyplomacja zastępuje wojnę. To w tym czasie powstają **stałe ambasady**, wynalazek włoski, który Europa przyjmie w całości.",
  "Firenze e i Medici": "Florencja i Medyceusze",
  "I **Medici** sono banchieri prima che signori, e governano Firenze senza cariche formali: comprano consenso, sposano alleanze e finanziano artisti. **Lorenzo il Magnifico** tiene in piedi l'equilibrio di Lodi con la sola abilità politica, e muore nel **1492**.":
    "**Medyceusze** są bankierami wcześniej niż władcami i rządzą Florencją bez formalnych urzędów: kupują poparcie, żenią sojusze i finansują artystów. **Wawrzyniec Wspaniały** utrzymuje równowagę z Lodi samą zręcznością polityczną i umiera w **1492 roku**.",
  "Le arti": "Sztuki",
  "Leonardo, Michelangelo, Raffaello, Brunelleschi, Botticelli: in tre generazioni una penisola di pochi milioni di abitanti produce una parte enorme dell'arte europea.":
    "Leonardo, Michał Anioł, Rafael, Brunelleschi, Botticelli: w trzy pokolenia półwysep liczący kilka milionów mieszkańców wytwarza ogromną część sztuki europejskiej.",
  "Il pensiero politico": "Myśl polityczna",
  "Machiavelli scrive Il Principe nel 1513, osservando il potere per come funziona invece che per come dovrebbe essere.":
    "Machiavelli pisze Księcia w 1513 roku, przyglądając się władzy taką, jaka jest, a nie taką, jaka być powinna.",
  "La scienza": "Nauka",
  "Galileo fonda il metodo sperimentale, e nel 1633 è processato per aver sostenuto che la Terra gira intorno al Sole.":
    "Galileusz zakłada metodę doświadczalną, a w 1633 roku staje przed sądem za twierdzenie, że Ziemia krąży wokół Słońca.",
  "Quali sono i cinque Stati dell'equilibrio fissato dalla pace di Lodi?":
    "Jakie pięć państw tworzy równowagę ustaloną pokojem w Lodi?",
  "Milano, Venezia, Firenze, Stato della Chiesa e Regno di Napoli":
    "Mediolan, Wenecja, Florencja, Państwo Kościelne i Królestwo Neapolu",
  "Milano, Torino, Genova, Firenze e Roma": "Mediolan, Turyn, Genua, Florencja i Rzym",
  "Venezia, Genova, Pisa, Amalfi e Napoli": "Wenecja, Genua, Piza, Amalfi i Neapol",
  "Piemonte, Lombardia, Toscana, Lazio e Sicilia":
    "Piemont, Lombardia, Toskania, Lacjum i Sycylia",
  "Sono i cinque grandi del Quattrocento italiano. Genova, Pisa e Amalfi erano repubbliche marinare di due secoli prima, e le regioni moderne non esistevano ancora.":
    "To pięć wielkich włoskiego XV wieku. Genua, Piza i Amalfi były republikami morskimi dwa stulecia wcześniej, a nowoczesne regiony jeszcze nie istniały.",
  "Il crollo": "Załamanie",
  "Nel **1494** **Carlo VIII** di Francia scende in Italia con un esercito che nessuno Stato italiano può fermare da solo. Comincia il ciclo delle **guerre d'Italia**, che dura fino alla pace di **Cateau-Cambrésis** nel **1559** e si combatte quasi interamente sul suolo italiano fra eserciti stranieri.":
    "W **1494 roku** **Karol VIII** francuski wkracza do Włoch z armią, której żadne państwo włoskie nie zatrzyma samo. Zaczyna się cykl **wojen włoskich**, trwający aż do pokoju w **Cateau-Cambrésis** w **1559 roku** i toczony niemal w całości na ziemi włoskiej przez obce armie.",
  "Nel **1527** i lanzichenecchi imperiali saccheggiano Roma: il **sacco di Roma** è la data che gli storici prendono per la fine del Rinascimento come stagione fiduciosa. Alla fine delle guerre la penisola è in mano alla **Spagna**, che vi resterà per un secolo e mezzo, e dopo di essa all'**Austria**.":
    "W **1527 roku** cesarscy lancknechci łupią Rzym: **sacco di Roma** to data, którą historycy przyjmują za koniec renesansu jako epoki pełnej wiary. Po zakończeniu wojen półwysep jest w rękach **Hiszpanii**, która zostanie tam półtora wieku, a po niej **Austrii**.",
  "Che cosa comincia con la discesa di Carlo VIII nel 1494?":
    "Co zaczyna się wraz z wyprawą Karola VIII w 1494 roku?",
  "L'unificazione della penisola": "Zjednoczenie półwyspu",
  "Le guerre d'Italia, combattute in casa da eserciti stranieri":
    "Wojny włoskie, toczone u siebie przez obce armie",
  "La costruzione dello Stato della Chiesa": "Budowa Państwa Kościelnego",
  "La nascita delle repubbliche marinare": "Narodziny republik morskich",
  "L'equilibrio di Lodi si rivela fragile davanti a uno Stato nazionale che può schierare un esercito grande. Da lì al 1559 l'Italia è il campo su cui Francia e Spagna decidono chi comanda in Europa.":
    "Równowaga z Lodi okazuje się krucha wobec państwa narodowego, które może wystawić dużą armię. Odtąd do 1559 roku Włochy są polem, na którym Francja i Hiszpania rozstrzygają, kto rządzi w Europie.",
  "Due secoli in ombra": "Dwa stulecia w cieniu",
  "Il Sei e il Settecento sono i secoli in cui il baricentro europeo si sposta sull'Atlantico e le città italiane, vissute di commercio mediterraneo, perdono peso. Restano però primati culturali che si esportano: il **melodramma**, nato a Firenze intorno al 1600 e diventato la forma teatrale d'Europa; e la **musica strumentale** di Vivaldi, Corelli e Scarlatti.":
    "XVII i XVIII wiek to stulecia, w których środek ciężkości Europy przesuwa się na Atlantyk, a miasta włoskie, żyjące z handlu śródziemnomorskiego, tracą znaczenie. Zostają jednak pierwszeństwa kulturalne, które się eksportuje: **opera**, narodzona we Florencji około 1600 roku i przemieniona w europejską formę teatralną, oraz **muzyka instrumentalna** Vivaldiego, Corellego i Scarlattiego.",
  "Nel Settecento l'Italia diventa la meta obbligata del **Grand Tour**: i giovani aristocratici europei vengono a vedere le rovine e le collezioni. È il momento in cui si costruisce l'immagine dell'Italia come paese dell'arte — un'immagine che vale ancora, e che il turismo di oggi eredita direttamente.":
    "W XVIII wieku Włochy stają się obowiązkowym celem **Grand Tour**: młodzi arystokraci europejscy przyjeżdżają oglądać ruiny i kolekcje. To wtedy buduje się obraz Włoch jako kraju sztuki — obraz wciąż aktualny, który dzisiejsza turystyka dziedziczy wprost.",
  "Che cos'era il Grand Tour?": "Czym był Grand Tour?",
  "Un giro in carrozza fra le corti italiane per motivi diplomatici":
    "Objazdem karetą po dworach włoskich w celach dyplomatycznych",
  "Il viaggio di formazione che portava i giovani europei a vedere l'arte italiana":
    "Podróżą formacyjną, która wiodła młodych Europejczyków do sztuki włoskiej",
  "Una gara ciclistica dell'Ottocento": "Wyścigiem kolarskim XIX wieku",
  "Il percorso delle Repubbliche marinare verso l'Oriente":
    "Szlakiem republik morskich na Wschód",
  "Fra Sei e Ottocento il viaggio in Italia era considerato parte dell'educazione di un giovane colto europeo. Da quella pratica nasce buona parte dell'immagine internazionale del paese.":
    "Między XVII a XIX wiekiem podróż do Włoch uchodziła za część wykształcenia młodego, oczytanego Europejczyka. Z tej praktyki bierze się spora część międzynarodowego obrazu kraju.",
  "Rinascimento non è un periodo politico ma culturale, e i due calendari non coincidono: quando l'arte italiana è al suo apice, l'indipendenza politica è già finita.":
    "Renesans nie jest okresem politycznym, lecz kulturalnym, a oba kalendarze się nie pokrywają: kiedy sztuka włoska jest u szczytu, niezależność polityczna już się skończyła.",
  "Il Risorgimento e l'Unità": "Risorgimento i zjednoczenie",
  "Perché conta: l'Italia unita ha poco più di centosessant'anni, meno della Germania di poco e molto meno di Francia o Spagna. È un paese antico e uno Stato giovane, e quasi tutte le sue tensioni nascono da questa differenza.":
    "Dlaczego to ważne: zjednoczone Włochy mają niewiele ponad sto sześćdziesiąt lat, o mało mniej niż Niemcy i znacznie mniej niż Francja czy Hiszpania. To kraj stary i państwo młode, a niemal wszystkie jego napięcia biorą się z tej różnicy.",
  "Napoleone e la Restaurazione": "Napoleon i restauracja",
  "Nel **1796** Napoleone entra in Italia e riorganizza la penisola in repubbliche satelliti. È allora che nasce il **tricolore**, ed è allora che per la prima volta da secoli si parla di un'Italia come entità politica possibile.":
    "W **1796 roku** Napoleon wkracza do Włoch i przekształca półwysep w republiki satelickie. Wtedy właśnie rodzi się **tricolore** i wtedy po raz pierwszy od stuleci mówi się o Włoszech jako o możliwej całości politycznej.",
  "Il **congresso di Vienna**, nel **1815**, rimette ogni cosa al suo posto: l'Austria in Lombardia e Veneto, i Borbone a Napoli, il papa a Roma, i Savoia in Piemonte. Ma l'idea è ormai in circolazione, e le società segrete come la **Carboneria** la fanno viaggiare.":
    "**Kongres wiedeński**, w **1815 roku**, odstawia wszystko na miejsce: Austrię w Lombardii i Wenecji, Burbonów w Neapolu, papieża w Rzymie, Sabaudów w Piemoncie. Ale idea jest już w obiegu, a tajne stowarzyszenia takie jak **karbonaryzm** wprawiają ją w ruch.",
  "Mazzini": "Mazzini",
  "Fonda la Giovine Italia nel 1831. Vuole una repubblica unitaria fatta dal popolo, e passa la vita in esilio.":
    "Zakłada Młode Włochy w 1831 roku. Chce republiki jednolitej, stworzonej przez lud, i całe życie spędza na wygnaniu.",
  "Cavour": "Cavour",
  "Primo ministro del Piemonte. Punta su diplomazia, ferrovie e alleanze internazionali più che sulle insurrezioni.":
    "Premier Piemontu. Stawia na dyplomację, koleje i sojusze międzynarodowe bardziej niż na powstania.",
  "Garibaldi": "Garibaldi",
  "Il combattente. Nel 1860 conquista il Regno delle Due Sicilie con mille volontari e lo consegna al re.":
    "Wojownik. W 1860 roku zdobywa Królestwo Obojga Sycylii z tysiącem ochotników i oddaje je królowi.",
  "Vittorio Emanuele II": "Wiktor Emanuel II",
  "Re di Sardegna e poi primo re d'Italia. Mantiene il numero dinastico piemontese, il che dice molto su come nacque il nuovo Stato.":
    "Król Sardynii, a potem pierwszy król Włoch. Zachowuje piemoncki numer dynastyczny, co wiele mówi o tym, jak powstało nowe państwo.",
  "Il 1848 e lo Statuto": "Rok 1848 i Statut",
  "Il **1848** è l'anno delle rivoluzioni in tutta Europa. A Milano ci sono le **cinque giornate**, a Venezia si proclama una repubblica, a Roma un'altra. Quasi tutto viene represso, ma resta una cosa: il **4 marzo 1848** Carlo Alberto concede lo **Statuto albertino**, la costituzione del Regno di Sardegna.":
    "**1848** to rok rewolucji w całej Europie. W Mediolanie są **pięć dni**, w Wenecji ogłasza się republikę, w Rzymie drugą. Prawie wszystko zostaje stłumione, ale zostaje jedna rzecz: **4 marca 1848 roku** Karol Albert nadaje **Statuto albertino**, konstytucję Królestwa Sardynii.",
  "Lo Statuto sarà la costituzione dell'Italia unita fino al 1948. Era **flessibile**, cioè modificabile con legge ordinaria: è la ragione per cui il fascismo poté svuotarlo senza mai violarlo formalmente, e la ragione per cui i costituenti del 1947 vollero una costituzione **rigida**.":
    "Statut będzie konstytucją zjednoczonych Włoch aż do 1948 roku. Był **giętki**, czyli zmienialny ustawą zwykłą: to powód, dla którego faszyzm mógł go wydrążyć, nigdy formalnie nie łamiąc, i powód, dla którego twórcy konstytucji z 1947 roku chcieli konstytucji **sztywnej**.",
  "Perché lo Statuto albertino non impedì l'ascesa del fascismo?":
    "Dlaczego Statuto albertino nie powstrzymał dojścia faszyzmu do władzy?",
  "Perché non prevedeva un parlamento": "Bo nie przewidywał parlamentu",
  "Perché era flessibile e modificabile con legge ordinaria":
    "Bo był giętki i zmienialny ustawą zwykłą",
  "Perché era stato sospeso nel 1915": "Bo zawieszono go w 1915 roku",
  "Perché non valeva nel Sud": "Bo nie obowiązywał na Południu",
  "Bastavano leggi ordinarie per cambiarne l'impianto, e il regime procedette così, senza mai abrogarlo. Da qui la scelta del 1947: una costituzione rigida, con procedura aggravata e un nucleo immodificabile.":
    "Do zmiany jego konstrukcji wystarczały ustawy zwykłe, i reżim tak właśnie postępował, nigdy go nie uchylając. Stąd wybór z 1947 roku: konstytucja sztywna, z trybem utrudnionym i rdzeniem niezmienialnym.",
  "Dieci anni decisivi": "Dziesięć rozstrzygających lat",
  "Nel **1859** la seconda guerra d'indipendenza, combattuta con la Francia, porta al Piemonte la Lombardia. Nel **1860** i plebisciti annettono Emilia e Toscana, mentre **Garibaldi** sbarca a Marsala con i **Mille** e in pochi mesi conquista il Sud, che consegna al re a Teano.":
    "W **1859 roku** druga wojna o niepodległość, prowadzona wspólnie z Francją, przynosi Piemontowi Lombardię. W **1860** plebiscyty przyłączają Emilię i Toskanię, a **Garibaldi** ląduje w Marsali z **tysiącem** i w kilka miesięcy zdobywa Południe, które oddaje królowi w Teano.",
  "Il **17 marzo 1861** il primo Parlamento italiano proclama il **Regno d'Italia**. Mancano ancora il **Veneto**, che arriva nel **1866**, e **Roma**, presa il **20 settembre 1870** attraverso la breccia di Porta Pia. La capitale si sposta tre volte: Torino, Firenze, Roma.":
    "**17 marca 1861 roku** pierwszy włoski parlament proklamuje **Królestwo Włoch**. Brakuje jeszcze **Wenecji Euganejskiej**, która przychodzi w **1866**, i **Rzymu**, zdobytego **20 września 1870 roku** przez wyłom w Porta Pia. Stolica przenosi się trzy razy: Turyn, Florencja, Rzym.",
  "Quale territorio entra nel Regno d'Italia per ultimo fra questi?":
    "Które z tych terytoriów wchodzi do Królestwa Włoch jako ostatnie?",
  "La Lombardia": "Lombardia",
  "La Toscana": "Toskania",
  "Il Veneto": "Wenecja Euganejska",
  "Roma": "Rzym",
  "Lombardia nel 1859, Toscana nel 1860, Veneto nel 1866, Roma nel 1870. Trento e Trieste arriveranno solo dopo la Prima guerra mondiale.":
    "Lombardia w 1859, Toskania w 1860, Wenecja Euganejska w 1866, Rzym w 1870. Trydent i Triest przyjdą dopiero po pierwszej wojnie światowej.",
  "Uno Stato senza cittadini": "Państwo bez obywateli",
  "Al momento dell'Unità votava una piccolissima parte della popolazione, l'analfabetismo superava il settanta per cento e l'italiano era parlato da una minoranza. La frase più citata sul periodo — fatta l'Italia, restano da fare gli italiani — è attribuita a Massimo d'Azeglio, e la paternità è discussa; ma coglie il problema.":
    "W chwili zjednoczenia głosowała bardzo niewielka część ludności, analfabetyzm przekraczał siedemdziesiąt procent, a włoskim mówiła mniejszość. Najczęściej cytowane zdanie o tym okresie — Włochy zrobione, teraz trzeba zrobić Włochów — przypisuje się Massimowi d'Azeglio, i autorstwo jest sporne; ale trafia w sedno.",
  "Nel Sud l'annessione porta tasse nuove, leva obbligatoria e una repressione durissima del **brigantaggio**, un fenomeno insieme criminale e di rivolta sociale. Da lì nasce la **questione meridionale**, e da lì comincia l'**emigrazione**: fra il 1861 e il 1970 lasciano il paese circa **ventisei milioni** di persone.":
    "Na Południu przyłączenie przynosi nowe podatki, przymusowy pobór i bardzo twarde tłumienie **brigantaggio**, zjawiska zarazem przestępczego i buntowniczego. Stąd rodzi się **questione meridionale**, kwestia południowa, i stąd zaczyna się **emigracja**: między 1861 a 1970 rokiem kraj opuszcza około **dwudziestu sześciu milionów** osób.",
  "Che cos'è la questione meridionale?": "Czym jest questione meridionale?",
  "La disputa sui confini fra Regno d'Italia e Regno delle Due Sicilie":
    "Sporem o granice między Królestwem Włoch a Królestwem Obojga Sycylii",
  "Il divario economico e sociale fra Sud e Nord aperto dopo l'Unità":
    "Przepaścią gospodarczą i społeczną między Południem a Północą, otwartą po zjednoczeniu",
  "Il dibattito sulla capitale da assegnare al nuovo Stato":
    "Debatą o tym, które miasto zostanie stolicą nowego państwa",
  "La controversia sulla lingua da adottare nelle scuole del Sud":
    "Sporem o język w szkołach Południa",
  "L'unificazione applicò al Mezzogiorno leggi, tasse e tariffe pensate per il Nord, e il divario che ne seguì non si è mai chiuso. È il tema su cui l'Italia discute ininterrottamente da centosessant'anni.":
    "Zjednoczenie zastosowało na Południu ustawy, podatki i taryfy pomyślane dla Północy, a powstała z tego przepaść nigdy się nie zamknęła. To temat, o którym Włochy dyskutują nieprzerwanie od stu sześćdziesięciu lat.",
  "Il Regno d'Italia comincia con **Vittorio Emanuele II**, non primo: il re conservò il numero che aveva come sovrano di Sardegna. Un dettaglio che dice come l'Unità fu vissuta al Sud — un'annessione al Piemonte più che una fondazione comune.":
    "Królestwo Włoch zaczyna się od **Wiktora Emanuela II**, nie Pierwszego: król zachował numer, który miał jako władca Sardynii. Szczegół, który mówi, jak zjednoczenie odebrano na Południu — jako przyłączenie do Piemontu bardziej niż wspólne założenie państwa.",
  "Le guerre mondiali e il fascismo": "Wojny światowe i faszyzm",
  "Perché conta: fra il 1915 e il 1945 l'Italia entra in due guerre mondiali, perde una monarchia, sperimenta una dittatura e si ritrova occupata e divisa in due. Tutto ciò che viene dopo è una risposta a questo trentennio.":
    "Dlaczego to ważne: między 1915 a 1945 rokiem Włochy wchodzą w dwie wojny światowe, tracą monarchię, przechodzą dyktaturę i zostają okupowane oraz przecięte na pół. Wszystko, co przychodzi potem, jest odpowiedzią na to trzydziestolecie.",
  "La Grande guerra": "Wielka wojna",
  "L'Italia entra in guerra nel **1915**, dopo aver firmato in segreto il **patto di Londra** con Francia, Gran Bretagna e Russia, e nonostante fosse alleata degli imperi centrali. Il paese si spacca fra interventisti e neutralisti, e la decisione viene presa dal governo e dal re più che dal Parlamento.":
    "Włochy wchodzą do wojny w **1915 roku**, po tajnym podpisaniu **paktu londyńskiego** z Francją, Wielką Brytanią i Rosją, mimo że były sojusznikiem państw centralnych. Kraj dzieli się na interwencjonistów i neutralistów, a decyzję podejmują rząd i król bardziej niż parlament.",
  "Seguono tre anni e mezzo di guerra di trincea sull'Isonzo e sul Carso, la rotta di **Caporetto** nel **1917**, e la vittoria di **Vittorio Veneto** nel **1918**. I morti italiani sono circa **seicentomila**.":
    "Następują trzy i pół roku wojny okopowej nad Isonzo i na Krasie, klęska pod **Caporetto** w **1917** i zwycięstwo pod **Vittorio Veneto** w **1918**. Włoskich poległych jest około **sześciuset tysięcy**.",
  "Alla conferenza di pace l'Italia ottiene Trento, Trieste, l'Alto Adige e l'Istria, ma non tutto ciò che il patto di Londra prometteva. Nasce la formula della **vittoria mutilata**, che alimenta il risentimento su cui il fascismo costruirà il proprio consenso.":
    "Na konferencji pokojowej Włochy dostają Trydent, Triest, Alto Adige i Istrię, ale nie wszystko, co obiecywał pakt londyński. Rodzi się formuła **okaleczonego zwycięstwa**, która karmi resentyment, na którym faszyzm zbuduje swoje poparcie.",
  "Che cosa indica l'espressione vittoria mutilata?":
    "Co oznacza wyrażenie okaleczone zwycięstwo?",
  "La sconfitta di Caporetto": "Klęskę pod Caporetto",
  "Il senso che l'Italia avesse vinto ottenendo meno del promesso":
    "Poczucie, że Włochy wygrały, dostając mniej, niż obiecano",
  "Le perdite militari della Grande guerra": "Straty wojskowe wielkiej wojny",
  "La divisione del paese nel 1943": "Podział kraju w 1943 roku",
  "L'Italia ottenne meno di quanto il patto di Londra le avesse riconosciuto, e su questo scarto si costruì un risentimento che i movimenti nazionalisti usarono a piene mani.":
    "Włochy dostały mniej, niż przyznawał im pakt londyński, i na tej różnicy zbudował się resentyment, po który ruchy nacjonalistyczne sięgnęły pełnymi garściami.",
  "La presa del potere": "Przejęcie władzy",
  "Nel **1919** nascono i **Fasci italiani di combattimento**. In un paese scosso da scioperi, occupazioni di fabbriche e violenza politica, le squadre fasciste si presentano come forza d'ordine e vengono tollerate da industriali, proprietari terrieri e apparati dello Stato.":
    "W **1919 roku** powstają **Fasci italiani di combattimento**. W kraju wstrząsanym strajkami, okupacjami fabryk i przemocą polityczną bojówki faszystowskie przedstawiają się jako siła porządku i są tolerowane przez przemysłowców, właścicieli ziemskich i aparat państwa.",
  "Il **28 ottobre 1922** le squadre convergono su Roma. **Vittorio Emanuele III** rifiuta di firmare lo stato d'assedio che l'esercito avrebbe eseguito senza difficoltà, e il 30 ottobre incarica **Mussolini** di formare il governo. Il passaggio avviene formalmente dentro le regole dello Statuto: è così che finisce l'Italia liberale.":
    "**28 października 1922 roku** bojówki zbiegają się na Rzym. **Wiktor Emanuel III** odmawia podpisania stanu oblężenia, który wojsko wykonałoby bez trudu, a 30 października powierza **Mussoliniemu** misję utworzenia rządu. Przejście dokonuje się formalnie wewnątrz reguł Statutu: tak kończą się Włochy liberalne.",
  "Che cosa fece Vittorio Emanuele III il 28 ottobre 1922?":
    "Co zrobił Wiktor Emanuel III 28 października 1922 roku?",
  "Firmò lo stato d'assedio e fece fermare le squadre":
    "Podpisał stan oblężenia i kazał zatrzymać bojówki",
  "Rifiutò lo stato d'assedio e incaricò Mussolini di formare il governo":
    "Odmówił stanu oblężenia i powierzył Mussoliniemu misję utworzenia rządu",
  "Abdicò a favore del figlio": "Abdykował na rzecz syna",
  "Sciolse il Parlamento e indisse elezioni": "Rozwiązał parlament i rozpisał wybory",
  "L'esercito avrebbe potuto fermare la marcia senza difficoltà. La firma non arrivò, e due giorni dopo Mussolini ricevette l'incarico: una scelta del re, non un colpo di Stato riuscito con la forza.":
    "Wojsko mogło zatrzymać marsz bez trudu. Podpis nie przyszedł, a dwa dni później Mussolini dostał misję: to był wybór króla, a nie zamach stanu udany siłą.",
  "Il regime": "Reżim",
  "1924 · Matteotti": "1924 · Matteotti",
  "Il deputato socialista Giacomo Matteotti denuncia i brogli elettorali e viene rapito e ucciso. È la crisi che il regime supera assumendosi ogni responsabilità.":
    "Socjalistyczny deputowany Giacomo Matteotti ujawnia fałszerstwa wyborcze i zostaje porwany i zabity. To kryzys, który reżim przechodzi, biorąc na siebie całą odpowiedzialność.",
  "1925–26 · Le leggi fascistissime": "1925–26 · Ustawy najbardziej faszystowskie",
  "Sciolti i partiti, soppressa la stampa libera, istituito il Tribunale speciale. Lo Stato liberale finisce senza che lo Statuto sia mai abrogato.":
    "Rozwiązane partie, zniesiona wolna prasa, powołany Trybunał Specjalny. Państwo liberalne kończy się, choć Statutu nigdy nie uchylono.",
  "1929 · I Patti Lateranensi": "1929 · Traktaty laterańskie",
  "Con la Santa Sede si chiude la questione romana aperta nel 1870. Nasce lo Stato della Città del Vaticano.":
    "Ze Stolicą Apostolską zamyka się kwestia rzymska otwarta w 1870 roku. Powstaje Państwo Watykańskie.",
  "1938 · Le leggi razziali": "1938 · Ustawy rasowe",
  "Gli ebrei italiani sono esclusi da scuole, professioni e vita pubblica. È il preludio alle deportazioni che seguiranno dal 1943.":
    "Włoscy Żydzi zostają wykluczeni ze szkół, zawodów i życia publicznego. To zapowiedź deportacji, które nastąpią od 1943 roku.",
  "Nel **1935** l'invasione dell'**Etiopia** porta le sanzioni della Società delle Nazioni e spinge l'Italia verso la Germania. L'**asse Roma-Berlino** è del 1936, il **patto d'acciaio** del 1939.":
    "W **1935 roku** najazd na **Etiopię** przynosi sankcje Ligi Narodów i popycha Włochy ku Niemcom. **Oś Rzym-Berlin** pochodzi z 1936 roku, **pakt stalowy** z 1939.",
  "La seconda guerra e la rottura": "Druga wojna i pęknięcie",
  "L'Italia entra in guerra il **10 giugno 1940**, impreparata. Dopo tre anni di sconfitte, il **25 luglio 1943** il Gran consiglio del fascismo mette Mussolini in minoranza e il re lo fa arrestare. L'**8 settembre 1943** viene annunciato l'**armistizio** con gli Alleati.":
    "Włochy wchodzą do wojny **10 czerwca 1940 roku**, nieprzygotowane. Po trzech latach klęsk, **25 lipca 1943 roku** Wielka Rada Faszystowska przegłosowuje Mussoliniego, a król każe go aresztować. **8 września 1943 roku** ogłoszony zostaje **rozejm** z aliantami.",
  "Il re e il governo lasciano Roma senza dare ordini chiari all'esercito, che si dissolve. I tedeschi occupano il centro-nord e vi installano la **Repubblica sociale italiana**. Il paese è tagliato in due, con un fronte che risale lentamente la penisola per venti mesi: è **guerra civile** oltre che guerra di liberazione.":
    "Król i rząd opuszczają Rzym, nie wydając wojsku jasnych rozkazów, i armia się rozpada. Niemcy zajmują centrum i północ i osadzają tam **Włoską Republikę Socjalną**. Kraj jest przecięty na dwoje, a front pełznie w górę półwyspu przez dwadzieścia miesięcy: to **wojna domowa** równie mocno jak wojna wyzwoleńcza.",
  "Che cosa accade l'8 settembre 1943?": "Co dzieje się 8 września 1943 roku?",
  "Mussolini viene arrestato": "Mussolini zostaje aresztowany",
  "Viene annunciato l'armistizio con gli Alleati": "Zostaje ogłoszony rozejm z aliantami",
  "L'Italia entra in guerra": "Włochy wchodzą do wojny",
  "Le città del Nord insorgono": "Miasta Północy podnoszą powstanie",
  "L'arresto di Mussolini è del 25 luglio, l'entrata in guerra del 10 giugno 1940 e l'insurrezione del 25 aprile 1945. L'8 settembre è l'annuncio dell'armistizio, seguito dal collasso dell'esercito e dall'occupazione tedesca.":
    "Aresztowanie Mussoliniego przypada na 25 lipca, wejście do wojny na 10 czerwca 1940, a powstanie na 25 kwietnia 1945. 8 września to ogłoszenie rozejmu, po którym następuje rozpad armii i niemiecka okupacja.",
  "Fra il settembre 1943 e l'aprile 1945 esistono due Italie: il Regno del Sud, cobelligerante degli Alleati, e la Repubblica sociale al Nord, sotto controllo tedesco. Molte date di questo periodo valgono per una sola metà del paese.":
    "Między wrześniem 1943 a kwietniem 1945 istnieją dwie Italie: Królestwo Południa, współwalczące z aliantami, i Republika Socjalna na Północy, pod kontrolą niemiecką. Wiele dat z tego okresu dotyczy tylko jednej połowy kraju.",
  "Resistenza, Repubblica e dopoguerra": "Ruch oporu, Republika i powojnie",
  "Perché conta: la Costituzione non nasce a tavolino. Nasce da chi ha combattuto una guerra civile e ha poi dovuto scrivere insieme le regole di un paese in macerie. Quasi ogni articolo porta il segno di quell'esperienza.":
    "Dlaczego to ważne: Konstytucja nie powstaje przy biurku. Powstaje z ludzi, którzy stoczyli wojnę domową, a potem musieli razem napisać reguły kraju w gruzach. Prawie każdy artykuł nosi ślad tego doświadczenia.",
  "La Resistenza": "Ruch oporu",
  "Dopo l'8 settembre 1943 si organizzano le formazioni partigiane, coordinate dal **Comitato di liberazione nazionale**, in cui siedono insieme comunisti, socialisti, democratici cristiani, liberali e azionisti: forze che si combatteranno per i decenni successivi ma che in quel momento scrivono insieme.":
    "Po 8 września 1943 roku organizują się oddziały partyzanckie, koordynowane przez **Komitet Wyzwolenia Narodowego**, w którym zasiadają razem komuniści, socjaliści, chadecy, liberałowie i działacze Partito d'Azione: siły, które będą się zwalczać przez kolejne dziesięciolecia, ale które w tym momencie piszą wspólnie.",
  "Il **25 aprile 1945** il Comitato per l'alta Italia proclama l'insurrezione generale, e Milano e Torino sono liberate prima dell'arrivo degli Alleati. La data è oggi festa nazionale: ricorda la Resistenza, non la firma della resa.":
    "**25 kwietnia 1945 roku** Komitet dla Górnych Włoch ogłasza powstanie powszechne, a Mediolan i Turyn zostają wyzwolone przed przybyciem aliantów. Ta data jest dziś świętem narodowym: upamiętnia ruch oporu, a nie podpisanie kapitulacji.",
  "Che cosa proclama il Comitato di liberazione nazionale il 25 aprile 1945?":
    "Co ogłasza Komitet Wyzwolenia Narodowego 25 kwietnia 1945 roku?",
  "La nascita della Repubblica": "Narodziny Republiki",
  "L'insurrezione generale nelle città del Nord": "Powstanie powszechne w miastach Północy",
  "L'armistizio con gli Alleati": "Rozejm z aliantami",
  "L'insurrezione. La Repubblica nasce dal referendum del 2 giugno 1946 e la Costituzione entra in vigore il 1º gennaio 1948: tre date diverse, spesso confuse fra loro.":
    "Powstanie. Republika rodzi się z referendum z 2 czerwca 1946 roku, a Konstytucja wchodzi w życie 1 stycznia 1948: trzy różne daty, często ze sobą mylone.",
  "Dalla monarchia alla Repubblica": "Od monarchii do Republiki",
  "Il **2 giugno 1946** gli italiani votano su due schede: la forma dello Stato e l'Assemblea costituente. La **repubblica** prevale con circa il cinquantaquattro per cento, con un Nord largamente repubblicano e un Sud in maggioranza monarchico. **Umberto II** lascia il paese, e la monarchia sabauda finisce dopo ottantacinque anni.":
    "**2 czerwca 1946 roku** Włosi głosują na dwóch kartach: o formie państwa i o Zgromadzeniu Konstytucyjnym. **Republika** wygrywa z około pięćdziesięcioma czterema procentami, przy Północy w większości republikańskiej i Południu w większości monarchistycznym. **Humbert II** opuszcza kraj, a monarchia sabaudzka kończy się po osiemdziesięciu pięciu latach.",
  "L'Assemblea lavora un anno e mezzo e il **1º gennaio 1948** la Costituzione entra in vigore. Il **18 aprile 1948** si tengono le prime elezioni politiche repubblicane, in un clima segnato dall'inizio della guerra fredda.":
    "Zgromadzenie pracuje półtora roku i **1 stycznia 1948 roku** Konstytucja wchodzi w życie. **18 kwietnia 1948 roku** odbywają się pierwsze republikańskie wybory parlamentarne, w atmosferze naznaczonej początkiem zimnej wojny.",
  "Il miracolo economico": "Cud gospodarczy",
  "Con il **piano Marshall** e la ricostruzione, fra il **1958 e il 1963** l'Italia cresce a ritmi che nessun altro paese europeo tocca nello stesso periodo, a parte la Germania. È il **boom economico**: da paese prevalentemente agricolo a potenza industriale in una generazione.":
    "Dzięki **planowi Marshalla** i odbudowie, między **1958 a 1963 rokiem** Włochy rosną w tempie, jakiego w tym samym okresie nie osiąga żaden inny kraj Europy poza Niemcami. To **boom gospodarczy**: z kraju głównie rolniczego w potęgę przemysłową w jedno pokolenie.",
  "La migrazione interna": "Migracja wewnętrzna",
  "Milioni di persone lasciano il Sud e il Nordest per le fabbriche del triangolo industriale fra Torino, Milano e Genova.":
    "Miliony ludzi opuszczają Południe i północny wschód dla fabryk trójkąta przemysłowego między Turynem, Mediolanem i Genuą.",
  "Gli oggetti": "Przedmioty",
  "La Fiat 500, la Vespa, il frigorifero, il televisore. Il consumo di massa arriva insieme all'unificazione linguistica.":
    "Fiat 500, Vespa, lodówka, telewizor. Konsumpcja masowa przychodzi razem ze zjednoczeniem językowym.",
  "L'Europa": "Europa",
  "Nel 1957 l'Italia firma a Roma i trattati che istituiscono la Comunità economica europea: non vi aderisce, la fonda.":
    "W 1957 roku Włochy podpisują w Rzymie traktaty ustanawiające Europejską Wspólnotę Gospodarczą: nie przystępują do niej, lecz ją zakładają.",
  "Che cosa fu il boom economico italiano?": "Czym był włoski boom gospodarczy?",
  "La ripresa dopo la crisi petrolifera del 1973": "Ożywieniem po kryzysie naftowym 1973 roku",
  "La crescita fra il 1958 e il 1963 che rese l'Italia un paese industriale":
    "Wzrostem między 1958 a 1963 rokiem, który uczynił Włochy krajem przemysłowym",
  "L'espansione coloniale degli anni Trenta": "Ekspansją kolonialną lat trzydziestych",
  "L'aumento delle esportazioni dopo l'ingresso nell'euro":
    "Wzrostem eksportu po wejściu do strefy euro",
  "In pochi anni l'Italia passò da economia in larga parte agricola a potenza industriale, con una migrazione interna di milioni di persone. La crisi petrolifera del 1973 chiude piuttosto quella stagione.":
    "W kilka lat Włochy przeszły z gospodarki w dużej mierze rolniczej w potęgę przemysłową, przy migracji wewnętrznej milionów ludzi. Kryzys naftowy 1973 roku raczej zamyka tę epokę.",
  "Gli anni difficili": "Trudne lata",
  "Dalla fine degli anni Sessanta il paese attraversa una lunga stagione di violenza politica, chiamata **anni di piombo**: stragi con matrice neofascista, terrorismo di sinistra, apparati dello Stato deviati. Nel **1978** le **Brigate rosse** rapiscono **Aldo Moro**, uccidendo i cinque uomini della scorta, e lo assassinano dopo cinquantacinque giorni. Nel **1980** una bomba alla stazione di **Bologna** uccide ottantacinque persone.":
    "Od końca lat sześćdziesiątych kraj przechodzi długi okres przemocy politycznej, zwany **anni di piombo**, latami ołowiu: zamachy o podłożu neofaszystowskim, terroryzm lewicowy, wypaczone służby państwa. W **1978 roku** **Czerwone Brygady** porywają **Alda Moro**, zabijając pięciu ludzi z ochrony, i mordują go po pięćdziesięciu pięciu dniach. W **1980 roku** bomba na dworcu w **Bolonii** zabija osiemdziesiąt pięć osób.",
  "All'inizio degli anni Novanta l'inchiesta **Mani pulite** porta alla luce un sistema diffuso di finanziamento illecito dei partiti. Fra il **1992** e il **1994** i partiti che avevano governato dal dopoguerra si dissolvono quasi tutti: è la fine di quella che si chiama **Prima Repubblica**. Nello stesso 1992 le stragi di Capaci e via d'Amelio uccidono i giudici **Falcone** e **Borsellino**.":
    "Na początku lat dziewięćdziesiątych śledztwo **Mani pulite** wydobywa na jaw rozległy system nielegalnego finansowania partii. Między **1992** a **1994 rokiem** partie, które rządziły od czasów powojennych, niemal wszystkie się rozpadają: to koniec tego, co nazywa się **Pierwszą Republiką**. W tym samym 1992 roku zamachy w Capaci i przy via d'Amelio zabijają sędziów **Falcone** i **Borsellina**.",
  "Che cosa fu Mani pulite?": "Czym było Mani pulite?",
  "Una riforma della pubblica amministrazione": "Reformą administracji publicznej",
  "L'inchiesta sul finanziamento illecito dei partiti che portò alla fine della Prima Repubblica":
    "Śledztwem w sprawie nielegalnego finansowania partii, które przyniosło koniec Pierwszej Republiki",
  "Un movimento studentesco degli anni Settanta": "Ruchem studenckim lat siedemdziesiątych",
  "Il piano di risanamento dei conti per entrare nell'euro":
    "Planem uzdrowienia finansów przed wejściem do strefy euro",
  "L'inchiesta milanese aperta nel 1992 rivelò un sistema di tangenti che coinvolgeva quasi tutti i partiti di governo. In due anni il quadro politico nato nel dopoguerra si dissolse.":
    "Mediolańskie śledztwo otwarte w 1992 roku ujawniło system łapówek obejmujący prawie wszystkie partie rządzące. W dwa lata układ polityczny narodzony po wojnie rozsypał się.",
  "Prima e Seconda Repubblica non sono categorie giuridiche: la Costituzione è sempre la stessa dal 1948. Indicano due stagioni del sistema dei partiti, separate dal biennio 1992-94.":
    "Pierwsza i Druga Republika nie są kategoriami prawnymi: Konstytucja jest ta sama od 1948 roku. Oznaczają dwie epoki systemu partyjnego, rozdzielone dwuleciem 1992–94.",
  "Il territorio": "Terytorium",
  "Territorio, economia e l'Italia nel mondo": "Terytorium, gospodarka i Włochy w świecie",
  "Perché conta: l'Italia è lunga milleduecento chilometri e larga in certi punti meno di cinquanta. Quasi tutto ciò che la riguarda — il clima, le cucine, i dialetti, perfino la politica — comincia da questa forma.":
    "Dlaczego to ważne: Włochy mają tysiąc dwieście kilometrów długości, a miejscami mniej niż pięćdziesiąt szerokości. Prawie wszystko, co ich dotyczy — klimat, kuchnie, dialekty, nawet polityka — zaczyna się od tego kształtu.",
  "Una penisola e due catene": "Półwysep i dwa łańcuchy",
  "Il paese misura circa **trecentomila chilometri quadrati** e conta poco meno di **sessanta milioni** di abitanti. Le **Alpi** ne chiudono il lato settentrionale e segnano il confine con Francia, Svizzera, Austria e Slovenia; gli **Appennini** lo percorrono per intero dal Nord alla Calabria, e proseguono in Sicilia.":
    "Kraj mierzy około **trzystu tysięcy kilometrów kwadratowych** i liczy niewiele mniej niż **sześćdziesiąt milionów** mieszkańców. **Alpy** zamykają go od północy i wyznaczają granicę z Francją, Szwajcarią, Austrią i Słowenią; **Apeniny** przebiegają go w całości od północy po Kalabrię i ciągną się dalej na Sycylii.",
  "Fra le due catene sta la **pianura padana**, l'unica grande pianura del paese e il suo motore agricolo e industriale. Il resto è in gran parte collina: la pianura copre poco più di un quinto del territorio, e questa scarsità spiega perché in Italia si costruisca in verticale sulle colline e si coltivi a terrazze.":
    "Między obydwoma łańcuchami leży **Nizina Padańska**, jedyna wielka nizina kraju i jego motor rolniczy oraz przemysłowy. Reszta to w dużej mierze wzgórza: nizina zajmuje niewiele ponad jedną piątą terytorium, a ta skąpość tłumaczy, dlaczego we Włoszech buduje się na wzgórzach w pionie, a uprawia tarasowo.",
  "Il Po": "Pad",
  "Il fiume più lungo, circa 650 chilometri dal Monviso all'Adriatico. Attraversa la pianura che porta il suo nome.":
    "Najdłuższa rzeka, około 650 kilometrów od Monviso po Adriatyk. Przecina nizinę, która nosi jej imię.",
  "Il lago di Garda": "Jezioro Garda",
  "Il più grande dei laghi italiani, diviso fra tre regioni: Lombardia, Veneto e Trentino.":
    "Największe z jezior włoskich, podzielone między trzy regiony: Lombardię, Wenecję Euganejską i Trydent.",
  "La Sicilia": "Sycylia",
  "La più grande isola del Mediterraneo. La Sardegna è la seconda.":
    "Największa wyspa Morza Śródziemnego. Sardynia jest druga.",
  "Le coste": "Wybrzeża",
  "Circa settemilacinquecento chilometri: nessun punto della penisola è lontanissimo dal mare.":
    "Około siedmiu i pół tysiąca kilometrów: żaden punkt półwyspu nie leży bardzo daleko od morza.",
  "Qual è il fiume più lungo d'Italia?": "Która rzeka jest najdłuższa we Włoszech?",
  "Il Tevere": "Tyber",
  "L'Adige": "Adyga",
  "L'Arno": "Arno",
  "Il Po, circa seicentocinquanta chilometri. L'Adige è il secondo, il Tevere il terzo: entrambi sono più corti di metà.":
    "Pad, około sześciuset pięćdziesięciu kilometrów. Adyga jest druga, Tyber trzeci: oba są krótsze o ponad połowę.",
  "Una terra che si muove": "Ziemia, która się rusza",
  "L'Italia si trova sulla linea di contatto fra la placca africana e quella euroasiatica, e questo la rende **sismica** quasi ovunque tranne che in Sardegna. I terremoti distruttivi ricorrono: il Belice, il Friuli, l'Irpinia, l'Umbria, L'Aquila, il Centro Italia. Ogni volta si riapre la stessa discussione sull'edilizia antisismica.":
    "Włochy leżą na linii styku płyty afrykańskiej i euroazjatyckiej, i to czyni je **sejsmicznymi** niemal wszędzie poza Sardynią. Niszczące trzęsienia wracają: Belice, Friuli, Irpinia, Umbria, L'Aquila, Włochy środkowe. Za każdym razem odżywa ta sama dyskusja o budownictwie odpornym na wstrząsy.",
  "Gli stessi movimenti danno all'Italia i suoi **vulcani attivi**: l'**Etna**, il maggiore d'Europa, che erutta più volte l'anno; il **Vesuvio**, che nel **79 dopo Cristo** seppellì Pompei ed Ercolano e che sovrasta un'area densamente abitata; lo **Stromboli**, in attività quasi continua; e i **Campi Flegrei**, una vasta caldera a ovest di Napoli.":
    "Te same ruchy dają Włochom ich **czynne wulkany**: **Etnę**, największą w Europie, wybuchającą kilka razy w roku; **Wezuwiusza**, który w **79 roku naszej ery** pogrzebał Pompeje i Herkulanum i który góruje nad gęsto zaludnionym obszarem; **Stromboli**, czynne niemal bez przerwy; oraz **Pola Flegrejskie**, rozległą kalderę na zachód od Neapolu.",
  "Qual è il lago più grande d'Italia?": "Które jezioro jest największe we Włoszech?",
  "Il lago di Como": "Jezioro Como",
  "Il lago Maggiore": "Jezioro Maggiore",
  "Il lago Trasimeno": "Jezioro Trasimeno",
  "Il Garda, diviso fra Lombardia, Veneto e Trentino. Maggiore e Como sono più piccoli, e il Trasimeno, il maggiore dell'Italia centrale, è molto più piccolo di tutti e tre.":
    "Garda, podzielone między Lombardię, Wenecję Euganejską i Trydent. Maggiore i Como są mniejsze, a Trasimeno, największe we Włoszech środkowych, jest znacznie mniejsze od wszystkich trzech.",
  "Il clima, al plurale": "Klimat, w liczbie mnogiej",
  "Con questa lunghezza il clima non può essere uno solo. Le Alpi hanno inverni alpini e nevi permanenti; la pianura padana ha estati afose e nebbie invernali; le coste e le isole hanno il clima mediterraneo, con estati secche e inverni miti. Fra Bolzano e Lampedusa corrono più di dieci gradi di temperatura media annua.":
    "Przy takiej długości klimat nie może być jeden. Alpy mają zimy alpejskie i wieczne śniegi; Nizina Padańska duszne lata i zimowe mgły; wybrzeża i wyspy klimat śródziemnomorski, z suchymi latami i łagodnymi zimami. Między Bolzano a Lampedusą różnica średniej rocznej temperatury przekracza dziesięć stopni.",
  "Due Stati dentro": "Dwa państwa w środku",
  "Nel territorio italiano si trovano due Stati indipendenti, entrambi **enclave**, cioè completamente circondati: la **Repubblica di San Marino**, sull'Appennino romagnolo, che si dice la più antica repubblica ancora esistente; e lo **Stato della Città del Vaticano**, nato con i Patti Lateranensi del 1929, il più piccolo Stato del mondo.":
    "Na terytorium Włoch znajdują się dwa niepodległe państwa, oba będące **enklawami**, czyli całkowicie otoczone: **Republika San Marino**, w Apeninach romańskich, o której mówi się, że jest najstarszą istniejącą republiką; oraz **Państwo Watykańskie**, powstałe z traktatów laterańskich z 1929 roku, najmniejsze państwo świata.",
  "Quali due Stati indipendenti si trovano dentro il territorio italiano?":
    "Które dwa niepodległe państwa leżą na terytorium Włoch?",
  "Monaco e Andorra": "Monako i Andora",
  "San Marino e la Città del Vaticano": "San Marino i Watykan",
  "Malta e San Marino": "Malta i San Marino",
  "Il Liechtenstein e la Città del Vaticano": "Liechtenstein i Watykan",
  "San Marino e il Vaticano sono enclave, cioè circondati per intero dall'Italia. Monaco confina con la Francia, Andorra sta fra Francia e Spagna, e Malta e il Liechtenstein non confinano affatto con l'Italia.":
    "San Marino i Watykan są enklawami, czyli otoczonymi w całości przez Włochy. Monako graniczy z Francją, Andora leży między Francją a Hiszpanią, a Malta i Liechtenstein nie graniczą z Włochami w ogóle.",
  "Il **Monte Bianco**, 4.808 metri, è la vetta più alta della catena alpina; la sovranità della cima è oggetto di una controversia mai risolta con la Francia. Le carte dei due paesi non coincidono.":
    "**Mont Blanc**, 4808 metrów, jest najwyższym szczytem łańcucha alpejskiego; zwierzchnictwo nad wierzchołkiem jest przedmiotem nigdy nierozstrzygniętego sporu z Francją. Mapy obu krajów się nie pokrywają.",
  "Le città e il patrimonio": "Miasta i dziedzictwo",
  "Perché conta: l'Italia non ha una sola grande città che concentri tutto, come Parigi o Londra. Ne ha molte, ciascuna con una storia da capitale, e questo cambia il modo in cui il paese funziona.":
    "Dlaczego to ważne: Włochy nie mają jednego wielkiego miasta, które skupia wszystko, jak Paryż czy Londyn. Mają ich wiele, każde z historią stolicy, a to zmienia sposób, w jaki kraj działa.",
  "Molte capitali mancate": "Wiele niedoszłych stolic",
  "**Roma** è la più popolosa, con circa due milioni e mezzo di abitanti nel comune. Seguono **Milano**, **Napoli**, **Torino** e **Palermo**. Nessuna però assorbe il paese: Milano è il centro economico e finanziario, Torino quello industriale storico, Napoli la capitale del Mezzogiorno, Firenze e Venezia due città d'arte con un peso mondiale sproporzionato alla loro dimensione.":
    "**Rzym** jest najludniejszy, z około dwoma i pół milionami mieszkańców w granicach gminy. Dalej idą **Mediolan**, **Neapol**, **Turyn** i **Palermo**. Żadne jednak nie wchłania kraju: Mediolan jest centrum gospodarczym i finansowym, Turyn historycznie przemysłowym, Neapol stolicą Południa, a Florencja i Wenecja to dwa miasta sztuki o światowym znaczeniu nieproporcjonalnym do ich wielkości.",
  "La ragione è nei quattordici secoli senza uno Stato unico: ogni città è stata capitale di qualcosa, e ne ha conservato il palazzo, il teatro, l'università e l'orgoglio.":
    "Powód leży w czternastu stuleciach bez jednego państwa: każde miasto było stolicą czegoś i zachowało po tym pałac, teatr, uniwersytet i dumę.",
  "Qual è la città italiana più popolosa?": "Które miasto włoskie jest najludniejsze?",
  "Torino": "Turyn",
  "Roma, con circa due milioni e mezzo di abitanti nel comune. Milano è la seconda per popolazione comunale, pur avendo un'area metropolitana che per alcuni conteggi la avvicina.":
    "Rzym, z około dwoma i pół milionami mieszkańców w granicach gminy. Mediolan jest drugi pod względem ludności gminy, choć ma obszar metropolitalny, który przy niektórych sposobach liczenia zbliża go do Rzymu.",
  "Il primato del patrimonio": "Pierwszeństwo w dziedzictwie",
  "L'Italia è il **primo paese al mondo per numero di siti iscritti nella lista del patrimonio mondiale dell'UNESCO**, davanti alla Cina. Non si tratta soltanto di monumenti isolati: interi **centri storici** sono iscritti come un unico sito — Roma, Firenze, Venezia con la sua laguna, Napoli, Siena, Urbino, Ferrara.":
    "Włochy są **pierwszym krajem świata pod względem liczby obiektów wpisanych na listę światowego dziedzictwa UNESCO**, przed Chinami. Nie chodzi tylko o pojedyncze zabytki: całe **centra historyczne** są wpisane jako jeden obiekt — Rzym, Florencja, Wenecja z laguną, Neapol, Siena, Urbino, Ferrara.",
  "Pompei ed Ercolano": "Pompeje i Herkulanum",
  "Sepolte dall'eruzione del Vesuvio nel 79 dopo Cristo e riscoperte nel Settecento: due città romane conservate come nessun'altra al mondo.":
    "Pogrzebane przez wybuch Wezuwiusza w 79 roku naszej ery i odkryte na nowo w XVIII wieku: dwa miasta rzymskie zachowane jak żadne inne na świecie.",
  "La Valle dei Templi": "Dolina Świątyń",
  "Ad Agrigento, in Sicilia: templi greci del quinto secolo avanti Cristo, in un'isola che fu Magna Grecia prima che Roma.":
    "W Agrigento na Sycylii: świątynie greckie z V wieku przed naszą erą, na wyspie, która była Wielką Grecją, zanim stała się rzymska.",
  "Le Dolomiti": "Dolomity",
  "Iscritte come patrimonio naturale, non culturale: la lista comprende anche paesaggi.":
    "Wpisane jako dziedzictwo przyrodnicze, a nie kulturowe: lista obejmuje także krajobrazy.",
  "I borghi": "Miasteczka",
  "Migliaia di piccoli centri storici non iscritti in nessuna lista compongono un patrimonio diffuso che nessun catalogo riesce a contenere.":
    "Tysiące małych zabytkowych ośrodków, niewpisanych na żadną listę, składają się na dziedzictwo rozproszone, którego żaden katalog nie zdoła pomieścić.",
  "Quale sito archeologico fu sepolto dall'eruzione del 79 dopo Cristo?":
    "Które stanowisko archeologiczne pogrzebał wybuch z 79 roku naszej ery?",
  "Pompei": "Pompeje",
  "Ostia antica": "Ostia Antica",
  "Paestum": "Paestum",
  "Pompei, insieme a Ercolano e Stabia. La Valle dei Templi è greca e in Sicilia, Paestum è greca in Campania e Ostia era il porto di Roma, abbandonato lentamente e non sepolto.":
    "Pompeje, razem z Herkulanum i Stabiami. Dolina Świątyń jest grecka i leży na Sycylii, Paestum jest greckie w Kampanii, a Ostia była portem Rzymu, opuszczonym powoli, a nie zasypanym.",
  "Il turismo e i suoi problemi": "Turystyka i jej kłopoty",
  "Il turismo è una delle principali voci dell'economia italiana e uno dei motivi per cui il paese è fra le prime destinazioni al mondo. Ma la concentrazione crea difficoltà proprie: **Venezia** e **Firenze** vedono i residenti diminuire mentre gli affitti brevi crescono, e in alcune giornate i visitatori superano gli abitanti.":
    "Turystyka jest jedną z głównych pozycji włoskiej gospodarki i jednym z powodów, dla których kraj należy do pierwszych kierunków świata. Ale takie skupienie tworzy własne trudności: **Wenecja** i **Florencja** widzą ubywających mieszkańców i rosnące najmy krótkoterminowe, a w niektóre dni odwiedzających jest więcej niż mieszkańców.",
  "All'estremo opposto ci sono le **aree interne**: paesi appenninici che si spopolano, dove restano case vuote e servizi in chiusura. È il rovescio esatto della stessa medaglia, e le due cose sono spesso a poche decine di chilometri l'una dall'altra.":
    "Na przeciwnym biegunie są **obszary wewnętrzne**: apenińskie wsie, które się wyludniają, gdzie zostają puste domy i zamykane usługi. To dokładna odwrotność tego samego medalu, a obie rzeczy dzieli często kilkadziesiąt kilometrów.",
  "Quale paese ha il maggior numero di siti nella lista del patrimonio mondiale UNESCO?":
    "Który kraj ma najwięcej obiektów na liście światowego dziedzictwa UNESCO?",
  "La Francia": "Francja",
  "La Spagna": "Hiszpania",
  "L'Italia": "Włochy",
  "La Grecia": "Grecja",
  "L'Italia, davanti alla Cina. Il primato si spiega anche con la struttura del paese: molte città sono state capitali, e ciascuna ha conservato un centro storico intero.":
    "Włochy, przed Chinami. Pierwszeństwo tłumaczy się także budową kraju: wiele miast było stolicami i każde zachowało całe centrum historyczne.",
  "Un sito UNESCO non è sempre un edificio. Possono esserlo un intero centro storico, un paesaggio agricolo, una catena montuosa — e anche pratiche immateriali, come l'arte del pizzaiuolo napoletano.":
    "Obiekt UNESCO nie zawsze jest budynkiem. Może nim być całe centrum historyczne, krajobraz rolniczy, łańcuch górski — a także praktyki niematerialne, jak sztuka neapolitańskiego pizzaiuola.",
  "L'economia": "Gospodarka",
  "Perché conta: l'economia italiana non si capisce guardando le grandi aziende, perché non è fatta di quelle. È fatta di migliaia di imprese piccole che, messe insieme per territorio, funzionano come una grande.":
    "Dlaczego to ważne: włoskiej gospodarki nie zrozumie się, patrząc na wielkie firmy, bo nie z nich się składa. Składa się z tysięcy małych przedsiębiorstw, które zebrane razem na jednym terenie działają jak jedno wielkie.",
  "I distretti industriali": "Okręgi przemysłowe",
  "Un **distretto industriale** è un territorio in cui molte piccole e medie imprese fanno tutte la stessa cosa, o parti diverse della stessa cosa, e si passano il lavoro. Non è un'invenzione a tavolino: è cresciuto dove c'era già un mestiere, spesso da botteghe artigiane.":
    "**Distretto industriale**, okręg przemysłowy, to teren, na którym wiele małych i średnich firm robi to samo albo różne części tego samego i przekazuje sobie pracę. To nie wynalazek zza biurka: wyrósł tam, gdzie już było rzemiosło, często z warsztatów rzemieślniczych.",
  "Occhiali": "Okulary",
  "Nel Bellunese, in Veneto: una valle alpina che produce una quota rilevante degli occhiali del mondo.":
    "W okolicach Belluno, w Wenecji Euganejskiej: alpejska dolina, która wytwarza znaczną część okularów świata.",
  "Ceramica": "Ceramika",
  "A Sassuolo, in Emilia: piastrelle esportate ovunque, da un distretto nato attorno all'argilla locale.":
    "W Sassuolo, w Emilii: płytki eksportowane wszędzie, z okręgu narosłego wokół miejscowej gliny.",
  "Calzature": "Obuwie",
  "Nelle Marche e in Veneto, dove la scarpa si fa in filiera fra decine di piccole imprese vicine.":
    "W Marche i Wenecji Euganejskiej, gdzie but powstaje w łańcuchu dziesiątek sąsiadujących małych firm.",
  "Meccanica": "Mechanika",
  "Lungo la via Emilia: macchine per il packaging, motori, automazione. È il settore che esporta di più.":
    "Wzdłuż via Emilia: maszyny do pakowania, silniki, automatyka. To branża, która eksportuje najwięcej.",
  "Le esportazioni si riassumono spesso nelle **quattro A**: **abbigliamento**, **arredamento**, **automazione** e **alimentare**. Insieme al turismo, sono ciò per cui il paese è conosciuto sui mercati.":
    "Eksport streszcza się często w **czterech A**: **abbigliamento** (odzież), **arredamento** (meble), **automazione** (automatyka) i **alimentare** (żywność). Razem z turystyką to właśnie z tego kraj jest znany na rynkach.",
  "Che cos'è un distretto industriale?": "Czym jest distretto industriale?",
  "Una zona franca esente da imposte": "Strefą wolnocłową zwolnioną z podatków",
  "Un territorio in cui molte piccole e medie imprese lavorano nello stesso settore e si passano il lavoro":
    "Terenem, na którym wiele małych i średnich firm pracuje w tej samej branży i przekazuje sobie pracę",
  "Un quartiere riservato agli stabilimenti in una grande città":
    "Dzielnicą wielkiego miasta zarezerwowaną dla zakładów",
  "Un consorzio pubblico che finanzia le imprese":
    "Konsorcjum publicznym, które finansuje przedsiębiorstwa",
  "È una concentrazione territoriale di imprese specializzate, cresciuta di solito da un mestiere già presente. Sostituisce con la vicinanza ciò che altrove fa la dimensione aziendale.":
    "To terytorialne skupienie wyspecjalizowanych firm, wyrosłe zwykle z już obecnego rzemiosła. Bliskością zastępuje to, co gdzie indziej daje wielkość przedsiębiorstwa.",
  "Due velocità": "Dwie prędkości",
  "Il **divario fra Nord e Sud** è la questione economica più antica del paese e non si è mai chiusa. Il reddito per abitante nel Mezzogiorno è nettamente inferiore a quello del Centro-Nord, la disoccupazione è più alta e l'occupazione femminile molto più bassa.":
    "**Przepaść między Północą a Południem** to najstarsza kwestia gospodarcza kraju i nigdy się nie zamknęła. Dochód na mieszkańca na Południu jest wyraźnie niższy niż w Centrum i na Północy, bezrobocie wyższe, a zatrudnienie kobiet znacznie niższe.",
  "Su tutto pesa poi l'**economia sommersa**, cioè il lavoro e il fatturato che non risultano da nessuna parte: una quota stimata in più di un decimo del prodotto interno lordo, con punte assai maggiori in alcuni settori e in alcune aree.":
    "Na wszystkim ciąży jeszcze **szara strefa**, czyli praca i obroty, które nigdzie nie figurują: udział szacowany na ponad jedną dziesiątą produktu krajowego brutto, z o wiele wyższymi wartościami w niektórych branżach i na niektórych obszarach.",
  "Quali sono le quattro A dell'export italiano?": "Jakie są cztery A włoskiego eksportu?",
  "Agricoltura, artigianato, acciaio e auto": "Agricoltura, artigianato, acciaio i auto",
  "Abbigliamento, arredamento, automazione e alimentare":
    "Abbigliamento, arredamento, automazione i alimentare",
  "Arte, artigianato, agricoltura e automobili": "Arte, artigianato, agricoltura i automobili",
  "Alimentare, acciaio, aeronautica e arredamento":
    "Alimentare, acciaio, aeronautica i arredamento",
  "Abbigliamento, arredamento, automazione e alimentare: la formula riassume ciò per cui l'Italia è conosciuta sui mercati esteri, insieme al turismo.":
    "Abbigliamento, arredamento, automazione i alimentare: odzież, meble, automatyka i żywność. Formuła streszcza to, z czego Włochy są znane na rynkach zagranicznych, obok turystyki.",
  "I nodi aperti": "Węzły nierozwiązane",
  "L'Italia ha un **debito pubblico** fra i più alti d'Europa in rapporto al prodotto, eredità di decenni di spesa a deficit soprattutto negli anni Ottanta. Serve un avanzo primario costante solo per non farlo crescere, il che riduce lo spazio per investire.":
    "Włochy mają **dług publiczny** należący do najwyższych w Europie w stosunku do produktu, spadek po dziesięcioleciach wydatków na deficyt, zwłaszcza w latach osiemdziesiątych. Sama nadwyżka pierwotna jest potrzebna po to tylko, żeby dług nie rósł, a to ogranicza przestrzeń na inwestycje.",
  "Il secondo nodo è **demografico**: la natalità è fra le più basse del mondo e la popolazione invecchia. Il terzo è la partenza dei giovani: molti laureati lasciano il paese, e l'Italia forma persone che poi lavorano altrove.":
    "Drugim węzłem jest **demografia**: dzietność należy do najniższych na świecie, a ludność się starzeje. Trzecim jest wyjazd młodych: wielu absolwentów opuszcza kraj, a Włochy kształcą ludzi, którzy potem pracują gdzie indziej.",
  "Che cosa indica l'espressione economia sommersa?": "Co oznacza wyrażenie economia sommersa?",
  "L'economia delle regioni costiere": "Gospodarkę regionów nadmorskich",
  "Il lavoro e il fatturato che non risultano ufficialmente":
    "Pracę i obroty, które nie figurują oficjalnie",
  "Il settore delle imprese pubbliche": "Sektor przedsiębiorstw państwowych",
  "Il commercio con i paesi extraeuropei": "Handel z krajami spoza Europy",
  "È la parte di attività economica non dichiarata: lavoro senza contratto, ricavi non fatturati. In Italia è stimata sopra un decimo del prodotto interno lordo, con punte molto più alte in alcuni settori.":
    "To ta część działalności gospodarczej, której się nie zgłasza: praca bez umowy, przychody bez faktury. We Włoszech szacuje się ją na ponad jedną dziesiątą produktu krajowego brutto, ze znacznie wyższymi wartościami w niektórych branżach.",
  "Piccola impresa non significa impresa arretrata. Molte aziende italiane con poche decine di dipendenti sono leader mondiali nella loro nicchia: fanno una cosa sola, e la fanno meglio di chiunque altro.":
    "Mała firma nie znaczy firma zacofana. Wiele włoskich przedsiębiorstw z kilkudziesięcioma pracownikami jest światowymi liderami w swojej niszy: robią jedną rzecz i robią ją lepiej niż ktokolwiek inny.",
  "L'Italia in Europa e nel mondo": "Włochy w Europie i w świecie",
  "Perché conta: l'Italia non ha aderito all'Europa comunitaria, l'ha fondata. E il paese che oggi riceve chi arriva dal mare è lo stesso da cui, per un secolo, sono partiti in ventisei milioni.":
    "Dlaczego to ważne: Włochy nie przystąpiły do wspólnotowej Europy, one ją założyły. A kraj, który dziś przyjmuje przybywających morzem, to ten sam, z którego przez sto lat wyjechało dwadzieścia sześć milionów.",
  "Fra i fondatori": "Wśród założycieli",
  "L'**articolo 11** della Costituzione consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: è la base giuridica di tutto ciò che segue.":
    "**Artykuł 11** Konstytucji dopuszcza ograniczenia suwerenności konieczne dla porządku zapewniającego pokój: to podstawa prawna wszystkiego, co następuje.",
  "1949 · NATO": "1949 · NATO",
  "L'Italia è fra i dodici paesi che firmano il trattato dell'Atlantico del Nord.":
    "Włochy są wśród dwunastu państw, które podpisują traktat północnoatlantycki.",
  "1951 · CECA": "1951 · EWWiS",
  "Con la Comunità europea del carbone e dell'acciaio comincia l'integrazione. L'Italia è fra i sei fondatori.":
    "Od Europejskiej Wspólnoty Węgla i Stali zaczyna się integracja. Włochy są wśród sześciu założycieli.",
  "1957 · Trattati di Roma": "1957 · Traktaty rzymskie",
  "Nascono la CEE e l'Euratom, firmate in Campidoglio. La sede della firma non è un dettaglio.":
    "Powstają EWG i Euratom, podpisane na Kapitolu. Miejsce podpisania nie jest szczegółem.",
  "1955 · ONU": "1955 · ONZ",
  "L'ammissione arriva dieci anni dopo la fondazione, sbloccata insieme a quella di altri paesi rimasti fuori per la guerra fredda.":
    "Przyjęcie przychodzi dziesięć lat po założeniu organizacji, odblokowane razem z przyjęciem innych krajów, które zostały poza nią przez zimną wojnę.",
  "L'**euro** sostituisce la lira come moneta di conto nel **1999** e come contante il **1º gennaio 2002**. L'Italia fa parte dello **spazio Schengen**, del **G7** e del **G20**, e l'**italiano** è una delle lingue ufficiali dell'Unione europea.":
    "**Euro** zastępuje lira jako pieniądz rozliczeniowy w **1999 roku**, a jako gotówka **1 stycznia 2002**. Włochy należą do **strefy Schengen**, do **G7** i do **G20**, a **włoski** jest jednym z języków urzędowych Unii Europejskiej.",
  "In quale anno l'Italia entra nella NATO?": "W którym roku Włochy wstępują do NATO?",
  "Nel 1946": "W 1946",
  "Nel 1949": "W 1949",
  "Nel 1955": "W 1955",
  "Nel 1957": "W 1957",
  "Nel 1949, fra i dodici firmatari originari. Il 1955 è l'ammissione all'ONU e il 1957 la firma dei Trattati di Roma: tre date vicine e distinte.":
    "W 1949 roku, wśród dwunastu pierwotnych sygnatariuszy. Rok 1955 to przyjęcie do ONZ, a 1957 podpisanie traktatów rzymskich: trzy daty blisko siebie i różne.",
  "Roma capitale dell'alimentazione mondiale": "Rzym stolicą światowego wyżywienia",
  "Tre agenzie delle Nazioni Unite che si occupano di cibo e agricoltura hanno sede a Roma: la **FAO**, l'**IFAD** e il **Programma alimentare mondiale**. È una concentrazione che nessun'altra città al mondo ha, e fa di Roma la capitale internazionale di quel tema.":
    "Trzy agendy Organizacji Narodów Zjednoczonych zajmujące się żywnością i rolnictwem mają siedzibę w Rzymie: **FAO**, **IFAD** i **Światowy Program Żywnościowy**. To skupienie, jakiego nie ma żadne inne miasto świata, i czyni ono z Rzymu międzynarodową stolicę tego tematu.",
  "Quali agenzie delle Nazioni Unite hanno sede a Roma?":
    "Które agendy Organizacji Narodów Zjednoczonych mają siedzibę w Rzymie?",
  "Quelle che si occupano di alimentazione e agricoltura":
    "Te, które zajmują się żywnością i rolnictwem",
  "Quelle che si occupano di salute": "Te, które zajmują się zdrowiem",
  "Quelle che si occupano di istruzione e cultura": "Te, które zajmują się oświatą i kulturą",
  "Quelle che si occupano di lavoro": "Te, które zajmują się pracą",
  "FAO, IFAD e Programma alimentare mondiale. La salute sta a Ginevra con l'OMS, la cultura a Parigi con l'UNESCO e il lavoro a Ginevra con l'OIL.":
    "FAO, IFAD i Światowy Program Żywnościowy. Zdrowie jest w Genewie w WHO, kultura w Paryżu w UNESCO, a praca w Genewie w MOP.",
  "Un paese che è partito e che riceve": "Kraj, który wyjeżdżał i który przyjmuje",
  "Fra il 1861 e il 1970 lasciarono l'Italia circa **ventisei milioni** di persone, verso le Americhe prima e verso l'Europa del Nord poi. In molti paesi esistono comunità di origine italiana grandi quanto una regione, e la lingua italiana è parlata fuori dai confini più che dentro certi confini storici.":
    "Między 1861 a 1970 rokiem Włochy opuściło około **dwudziestu sześciu milionów** osób, najpierw do obu Ameryk, potem do Europy Północnej. W wielu krajach istnieją społeczności włoskiego pochodzenia wielkości całego regionu, a językiem włoskim mówi się poza granicami więcej niż wewnątrz niektórych granic historycznych.",
  "Dagli anni Ottanta il movimento si è invertito: oggi risiedono in Italia circa **cinque milioni** di cittadini stranieri, la comunità più numerosa delle quali è quella romena. La posizione al centro del Mediterraneo fa dell'Italia una delle frontiere esterne dell'Unione, con tutto ciò che ne consegue nel dibattito pubblico.":
    "Od lat osiemdziesiątych ruch się odwrócił: dziś mieszka we Włoszech około **pięciu milionów** cudzoziemców, a najliczniejsza z tych społeczności to rumuńska. Położenie w środku Morza Śródziemnego czyni z Włoch jedną z zewnętrznych granic Unii, ze wszystkim, co z tego wynika w debacie publicznej.",
  "Quanti cittadini stranieri risiedono oggi in Italia, all'incirca?":
    "Ilu mniej więcej cudzoziemców mieszka dziś we Włoszech?",
  "Circa mezzo milione": "Około pół miliona",
  "Circa due milioni": "Około dwóch milionów",
  "Circa cinque milioni": "Około pięciu milionów",
  "Circa dieci milioni": "Około dziesięciu milionów",
  "Circa cinque milioni, poco meno di un decimo della popolazione. La comunità più numerosa è quella romena. Il movimento si è invertito negli anni Ottanta: fino ad allora l'Italia era un paese da cui si partiva.":
    "Około pięciu milionów, niewiele mniej niż jedna dziesiąta ludności. Najliczniejsza społeczność to rumuńska. Ruch odwrócił się w latach osiemdziesiątych: do tego czasu Włochy były krajem, z którego się wyjeżdżało.",
  "Aderire e fondare non sono la stessa cosa. L'Italia è fra i sei paesi che hanno creato la CECA nel 1951 e la CEE nel 1957: non è entrata in un'Europa già esistente, l'ha costruita.":
    "Przystąpić i założyć to nie to samo. Włochy są wśród sześciu krajów, które stworzyły EWWiS w 1951 roku i EWG w 1957: nie weszły do gotowej Europy, one ją zbudowały.",
  "Lavoro, contratti e sindacati": "Praca, umowy i związki zawodowe",
  "Società e vita quotidiana": "Społeczeństwo i życie codzienne",
  "Perché conta: la Costituzione mette il lavoro nel primo articolo, e il diritto del lavoro italiano ha alcune particolarità che sorprendono chi arriva da altri paesi — a cominciare dal fatto che il salario minimo non lo fissa la legge.":
    "Dlaczego to ważne: Konstytucja umieszcza pracę w pierwszym artykule, a włoskie prawo pracy ma kilka osobliwości, które zaskakują przybyszów z innych krajów — poczynając od tego, że płacy minimalnej nie ustala ustawa.",
  "Che cosa dice la Costituzione": "Co mówi Konstytucja",
  "L'**articolo 1** fonda la Repubblica sul lavoro; l'**articolo 4** riconosce a tutti il diritto al lavoro e impegna la Repubblica a renderlo effettivo. L'**articolo 36** stabilisce che la retribuzione deve essere **proporzionata** alla quantità e qualità del lavoro e comunque **sufficiente** ad assicurare un'esistenza libera e dignitosa.":
    "**Artykuł 1** opiera Republikę na pracy; **artykuł 4** przyznaje każdemu prawo do pracy i zobowiązuje Republikę, by uczyniła je rzeczywistym. **Artykuł 36** stanowi, że wynagrodzenie musi być **proporcjonalne** do ilości i jakości pracy, a w każdym razie **wystarczające**, by zapewnić wolne i godne życie.",
  "L'**articolo 37** garantisce alla donna lavoratrice gli stessi diritti e la stessa retribuzione dell'uomo. L'**articolo 39** riconosce la libertà sindacale e l'**articolo 40** il diritto di sciopero.":
    "**Artykuł 37** gwarantuje pracującej kobiecie te same prawa i to samo wynagrodzenie co mężczyźnie. **Artykuł 39** uznaje wolność związkową, a **artykuł 40** prawo do strajku.",
  "Il contratto collettivo": "Układ zbiorowy",
  "In Italia le condizioni minime non sono fissate azienda per azienda ma **settore per settore**, attraverso il **contratto collettivo nazionale di lavoro**, il CCNL, firmato dalle organizzazioni dei datori e dai sindacati. Esistono centinaia di CCNL: metalmeccanici, commercio, edilizia, scuola, sanità privata.":
    "We Włoszech warunków minimalnych nie ustala się firma po firmie, lecz **branża po branży**, przez **contratto collettivo nazionale di lavoro**, krajowy układ zbiorowy pracy, w skrócie CCNL, podpisywany przez organizacje pracodawców i związki zawodowe. Istnieją setki CCNL: metalowcy, handel, budownictwo, szkolnictwo, prywatna ochrona zdrowia.",
  "Da qui una conseguenza che spesso sorprende: **l'Italia non ha un salario minimo fissato per legge**. I minimi stanno nei contratti collettivi, e chi lavora in un settore senza contratto applicato può trovarsi senza quella protezione. Il tema è oggetto di discussione da anni.":
    "Stąd wniosek, który często zaskakuje: **Włochy nie mają płacy minimalnej ustalonej ustawą**. Minima są w układach zbiorowych, a kto pracuje w branży bez stosowanego układu, może się bez tej ochrony znaleźć. Temat jest przedmiotem sporu od lat.",
  "Chi fissa in Italia le retribuzioni minime?":
    "Kto ustala we Włoszech minimalne wynagrodzenia?",
  "Una legge nazionale sul salario minimo": "Ustawa krajowa o płacy minimalnej",
  "I contratti collettivi nazionali, settore per settore":
    "Krajowe układy zbiorowe, branża po branży",
  "Ogni singola azienda": "Każda pojedyncza firma",
  "Le regioni, con proprie leggi": "Regiony, własnymi ustawami",
  "Non esiste un salario minimo di legge: i minimi stanno nei CCNL firmati per ciascun settore. È una delle particolarità del sistema italiano rispetto a gran parte d'Europa.":
    "Ustawowa płaca minimalna nie istnieje: minima są w CCNL podpisanych dla każdej branży. To jedna z osobliwości włoskiego systemu na tle większości Europy.",
  "Le forme del contratto": "Formy umowy",
  "Tempo indeterminato": "Na czas nieokreślony",
  "Senza scadenza. Resta la forma di riferimento, e il licenziamento richiede una giusta causa o un giustificato motivo.":
    "Bez terminu końcowego. Pozostaje formą odniesienia, a zwolnienie wymaga słusznej przyczyny albo uzasadnionego powodu.",
  "Tempo determinato": "Na czas określony",
  "Con una scadenza e limiti di durata e di rinnovo, per evitare che diventi permanente sotto altro nome.":
    "Z terminem oraz ograniczeniami długości i odnawiania, żeby nie stała się stałą pod inną nazwą.",
  "Apprendistato": "Nauka zawodu",
  "Unisce lavoro e formazione, per i giovani. Prevede contributi ridotti per il datore.":
    "Łączy pracę i kształcenie, dla młodych. Przewiduje obniżone składki dla pracodawcy.",
  "Partita IVA": "Partita IVA",
  "Lavoro autonomo: si fattura invece di ricevere una busta paga, e si versano da soli imposte e contributi.":
    "Praca na własny rachunek: wystawia się faktury zamiast dostawać pasek płacowy, a podatki i składki odprowadza się samemu.",
  "La busta paga": "Pasek płacowy",
  "Fra **lordo** e **netto** corre una differenza notevole: dallo stipendio lordo si sottraggono i contributi previdenziali versati all'**INPS** e l'imposta sul reddito, l'**IRPEF**, che è progressiva a scaglioni come vuole l'articolo 53.":
    "Między **brutto** a **netto** jest znaczna różnica: od wynagrodzenia brutto odejmuje się składki emerytalne odprowadzane do **INPS** oraz podatek dochodowy, **IRPEF**, progresywny według progów, tak jak chce artykuł 53.",
  "Due voci sono tipicamente italiane. La **tredicesima** è una mensilità aggiuntiva pagata a dicembre, e in alcuni settori esiste anche una **quattordicesima** a giugno. Il **TFR**, trattamento di fine rapporto, è una somma accantonata ogni mese e liquidata quando il rapporto finisce, per qualunque motivo finisca.":
    "Dwie pozycje są typowo włoskie. **Tredicesima** to dodatkowa pensja wypłacana w grudniu, a w niektórych branżach istnieje też **quattordicesima** w czerwcu. **TFR**, trattamento di fine rapporto, to kwota odkładana co miesiąc i wypłacana, gdy stosunek pracy się kończy, z jakiegokolwiek powodu by się skończył.",
  "Che cos'è la tredicesima?": "Czym jest tredicesima?",
  "Un'imposta aggiuntiva di fine anno": "Dodatkowym podatkiem na koniec roku",
  "Una mensilità in più, corrisposta a dicembre": "Dodatkową pensją, wypłacaną w grudniu",
  "Il contributo versato all'INPS": "Składką odprowadzaną do INPS",
  "Il numero massimo di ore settimanali di straordinario":
    "Maksymalną liczbą nadgodzin w tygodniu",
  "Una mensilità aggiuntiva pagata a dicembre. In alcuni settori esiste anche una quattordicesima, di solito a giugno: entrambe sono previste dai contratti collettivi.":
    "Dodatkową pensją płaconą w grudniu. W niektórych branżach istnieje też quattordicesima, zwykle w czerwcu: obie przewidują układy zbiorowe.",
  "I sindacati e le tutele": "Związki zawodowe i ochrona",
  "Le tre confederazioni storiche sono **CGIL**, **CISL** e **UIL**, nate dalla scissione del sindacato unitario del dopoguerra lungo linee politiche. Lo **Statuto dei lavoratori** del **1970** ha portato le libertà costituzionali dentro i luoghi di lavoro e vietato il licenziamento senza giusta causa nelle imprese maggiori.":
    "Trzy historyczne centrale to **CGIL**, **CISL** i **UIL**, powstałe z rozłamu powojennego jednolitego związku wzdłuż linii politycznych. **Statuto dei lavoratori** z **1970 roku** wniósł wolności konstytucyjne do miejsc pracy i zakazał zwolnienia bez słusznej przyczyny w większych przedsiębiorstwach.",
  "Due enti pubblici accompagnano ogni rapporto di lavoro: l'**INPS**, che incassa i contributi e paga pensioni e indennità, e l'**INAIL**, che assicura contro gli infortuni e le malattie professionali. Le **ferie** minime sono quattro settimane l'anno, e almeno due vanno godute nell'anno di maturazione.":
    "Dwie instytucje publiczne towarzyszą każdemu stosunkowi pracy: **INPS**, który pobiera składki i wypłaca emerytury oraz świadczenia, i **INAIL**, który ubezpiecza od wypadków i chorób zawodowych. Minimalny **urlop** to cztery tygodnie w roku, a co najmniej dwa trzeba wykorzystać w roku, w którym nabyło się do nich prawo.",
  "Che cos'è il TFR?": "Czym jest TFR?",
  "Un fondo pensione obbligatorio gestito dai sindacati":
    "Obowiązkowym funduszem emerytalnym zarządzanym przez związki zawodowe",
  "Una somma accantonata ogni mese e liquidata alla fine del rapporto di lavoro":
    "Kwotą odkładaną co miesiąc i wypłacaną na koniec stosunku pracy",
  "Il contributo per la formazione professionale": "Składką na kształcenie zawodowe",
  "Un premio legato ai risultati aziendali": "Premią zależną od wyników firmy",
  "Il trattamento di fine rapporto matura ogni mese e viene pagato alla cessazione, qualunque ne sia il motivo: dimissioni, licenziamento o pensione. È una particolarità italiana.":
    "Trattamento di fine rapporto narasta co miesiąc i jest wypłacane przy ustaniu stosunku pracy, jakikolwiek byłby powód: dymisja, zwolnienie czy emerytura. To włoska osobliwość.",
  "Assunzione a tempo indeterminato non significa impossibilità di licenziare. Significa che serve una **giusta causa** o un **giustificato motivo**, e che senza di essi il licenziamento è impugnabile.":
    "Zatrudnienie na czas nieokreślony nie znaczy, że zwolnić nie można. Znaczy, że potrzebna jest **słuszna przyczyna** albo **uzasadniony powód**, a bez nich zwolnienie da się zaskarżyć.",
  "Sanità e scuola": "Ochrona zdrowia i szkoła",
  "Perché conta: sono i due servizi che si incontrano per primi vivendo in un paese. In Italia entrambi sono pubblici e universali sulla carta, e in entrambi le regioni contano moltissimo.":
    "Dlaczego to ważne: to dwie usługi, na które natrafia się najpierw, mieszkając w kraju. We Włoszech obie są na papierze publiczne i powszechne, a w obu regiony znaczą bardzo wiele.",
  "Il Servizio sanitario nazionale": "Krajowa służba zdrowia",
  "Il **Servizio sanitario nazionale** nasce nel **1978** e sostituisce il vecchio sistema delle casse mutue legate alla categoria professionale. Poggia su tre principi: **universalità** — vale per tutti i residenti — **uguaglianza** e **globalità** della copertura. È finanziato dalla **fiscalità generale**, cioè dalle tasse, non da un premio assicurativo.":
    "**Servizio sanitario nazionale** powstaje w **1978 roku** i zastępuje dawny system kas branżowych powiązanych z wykonywanym zawodem. Opiera się na trzech zasadach: **powszechności** — dotyczy wszystkich mieszkańców — **równości** i **kompletności** ochrony. Finansuje ją **ogólny system podatkowy**, czyli podatki, a nie składka ubezpieczeniowa.",
  "La gestione però è **regionale**. Ogni regione organizza le proprie aziende sanitarie e i propri ospedali, e da qui nascono differenze reali di attesa, qualità e organizzazione, con una **mobilità sanitaria** che porta molti pazienti del Sud a curarsi al Nord.":
    "Zarządzanie jest jednak **regionalne**. Każdy region organizuje własne jednostki zdrowia i własne szpitale, a stąd biorą się realne różnice w czasie oczekiwania, jakości i organizacji, przy **mobilności zdrowotnej**, która wielu pacjentów z Południa wiedzie na leczenie na Północ.",
  "Il medico di base": "Lekarz rodzinny",
  "Si sceglie fra quelli disponibili nella propria zona ed è il primo riferimento: visita, prescrive e indirizza allo specialista.":
    "Wybiera się go spośród dostępnych w swojej okolicy i jest pierwszym punktem odniesienia: bada, wypisuje recepty i kieruje do specjalisty.",
  "La tessera sanitaria": "Karta zdrowia",
  "Dà accesso alle prestazioni e riporta il codice fiscale. Sul retro è anche tessera europea di assicurazione malattia.":
    "Daje dostęp do świadczeń i zawiera codice fiscale. Na odwrocie jest zarazem europejską kartą ubezpieczenia zdrowotnego.",
  "Il ticket": "Dopłata",
  "Una quota a carico del paziente per visite ed esami, con esenzioni per reddito, età e patologia. Il pronto soccorso urgente non si paga.":
    "Część kosztu wizyt i badań ponoszona przez pacjenta, ze zwolnieniami ze względu na dochód, wiek i chorobę. Za nagły przypadek na izbie przyjęć się nie płaci.",
  "I codici di priorità": "Kody pierwszeństwa",
  "Al pronto soccorso non si è ricevuti in ordine di arrivo ma di gravità: chi arriva dopo può passare prima.":
    "Na izbie przyjęć przyjmuje się nie w kolejności przybycia, lecz według ciężkości stanu: kto przyszedł później, może wejść wcześniej.",
  "In quale anno nasce il Servizio sanitario nazionale?":
    "W którym roku powstaje Servizio sanitario nazionale?",
  "Nel 1948": "W 1948",
  "Nel 1970": "W 1970",
  "Nel 1978": "W 1978",
  "Nel 2001": "W 2001",
  "Nel 1978, sostituendo le casse mutue legate alla categoria professionale. Prima di allora la copertura dipendeva dal mestiere che si faceva.":
    "W 1978 roku, zastępując kasy branżowe powiązane z wykonywanym zawodem. Wcześniej ochrona zależała od tego, jaki się miało zawód.",
  "La scuola": "Szkoła",
  "L'istruzione è **obbligatoria dai sei ai sedici anni** e l'articolo 34 la dichiara gratuita per almeno otto anni. Il percorso comincia prima, con la scuola dell'infanzia dai tre anni, che non è obbligatoria ma è frequentata dalla grande maggioranza dei bambini.":
    "Nauka jest **obowiązkowa od szóstego do szesnastego roku życia**, a artykuł 34 ogłasza ją bezpłatną przez co najmniej osiem lat. Droga zaczyna się wcześniej, przedszkolem od trzeciego roku życia, które nie jest obowiązkowe, ale uczęszcza do niego zdecydowana większość dzieci.",
  "Primaria": "Szkoła podstawowa",
  "Cinque anni, dai sei agli undici. È quella che tutti chiamano ancora scuola elementare.":
    "Pięć lat, od szóstego do jedenastego roku życia. To ta, którą wszyscy wciąż nazywają elementare.",
  "Secondaria di primo grado": "Szkoła średnia pierwszego stopnia",
  "Tre anni, dagli undici ai quattordici: le medie. Si chiude con un esame.":
    "Trzy lata, od jedenastu do czternastu: medie. Kończy się egzaminem.",
  "Secondaria di secondo grado": "Szkoła średnia drugiego stopnia",
  "Cinque anni. Si sceglie fra liceo, istituto tecnico e istituto professionale, e la scelta si fa a tredici anni.":
    "Pięć lat. Wybiera się między liceum, technikum a szkołą zawodową, a wyboru dokonuje się w wieku trzynastu lat.",
  "Università": "Uniwersytet",
  "Laurea triennale e poi magistrale biennale, oppure corsi a ciclo unico per medicina, giurisprudenza e architettura.":
    "Studia licencjackie trzyletnie, a potem magisterskie dwuletnie, albo jednolite dla medycyny, prawa i architektury.",
  "L'esame che chiude la secondaria superiore si chiama ufficialmente **esame di Stato** e tutti lo chiamano **maturità**. Dà accesso all'università e si valuta in **centesimi**, con il sessanta come minimo per la promozione.":
    "Egzamin kończący szkołę średnią drugiego stopnia nazywa się oficjalnie **esame di Stato**, a wszyscy mówią na niego **maturità**. Daje wstęp na uniwersytet i ocenia się go **w setnych**, przy sześćdziesięciu jako minimum do zdania.",
  "Fino a quale età l'istruzione è obbligatoria in Italia?":
    "Do jakiego wieku nauka jest we Włoszech obowiązkowa?",
  "Fino ai quattordici anni": "Do czternastego roku życia",
  "Fino ai sedici anni": "Do szesnastego roku życia",
  "Fino ai diciotto anni": "Do osiemnastego roku życia",
  "Fino al conseguimento del diploma": "Do uzyskania świadectwa dojrzałości",
  "Dai sei ai sedici anni. Il diploma della secondaria superiore si ottiene a diciannove, ma l'obbligo finisce prima: si può assolvere l'ultimo tratto anche in un percorso di formazione professionale.":
    "Od szóstego do szesnastego roku życia. Świadectwo szkoły średniej drugiego stopnia uzyskuje się w wieku dziewiętnastu lat, ale obowiązek kończy się wcześniej: ostatni odcinek można też odbyć w kształceniu zawodowym.",
  "I voti": "Oceny",
  "Le scale cambiano a ogni livello, e questo confonde chi arriva da fuori. Alla primaria e alle medie si usano i **decimi**, con il sei come sufficienza. Alla maturità si usano i **centesimi**, con il sessanta. All'università si usano i **trentesimi**, con il diciotto come minimo e la possibilità della **lode**. La laurea si valuta in **centodecimi**, e il massimo è centodieci e lode.":
    "Skale zmieniają się na każdym poziomie i to myli przybyszów z zewnątrz. W podstawówce i w medie używa się **dziesiętnych**, z szóstką jako oceną dostateczną. Na maturità używa się **setnych**, z sześćdziesiątką. Na uniwersytecie używa się **trzydziestych**, z osiemnastką jako minimum i możliwością **lode**, wyróżnienia. Dyplom ocenia się **w stu dziesiątych**, a maksimum to sto dziesięć z wyróżnieniem.",
  "Su quale scala si valutano gli esami universitari in Italia?":
    "W jakiej skali ocenia się egzaminy uniwersyteckie we Włoszech?",
  "In decimi": "W dziesiętnych",
  "In trentesimi": "W trzydziestych",
  "In centesimi": "W setnych",
  "In centodecimi": "W stu dziesiątych",
  "In trentesimi, con diciotto come voto minimo e la lode oltre il trenta. I centodecimi si usano per il voto finale di laurea e i centesimi per la maturità.":
    "W trzydziestych, z osiemnastką jako oceną minimalną i wyróżnieniem powyżej trzydziestu. Sto dziesiątych stosuje się do końcowej oceny dyplomu, a setne do maturità.",
  "Il **liceo** non è la scuola superiore in generale: è uno dei tre indirizzi, accanto all'istituto tecnico e a quello professionale. Tutti e tre danno un diploma che apre all'università.":
    "**Liceo** to nie szkoła średnia w ogóle: to jeden z trzech kierunków, obok technikum i szkoły zawodowej. Wszystkie trzy dają świadectwo otwierające drogę na uniwersytet.",
  "Vivere in Italia": "Życie we Włoszech",
  "Perché conta: questa è la lezione pratica. Nessuna delle prove qui descritte riguarda la storia o le istituzioni — e questo corso non prepara a nessuna di esse. Servono a sapere che cosa lo Stato chiede, e a chi.":
    "Dlaczego to ważne: to lekcja praktyczna. Żadna z opisanych tu procedur nie dotyczy historii ani instytucji — i ten kurs do żadnej z nich nie przygotowuje. Służą temu, żeby wiedzieć, czego państwo wymaga i od kogo.",
  "Il codice fiscale, prima di tutto": "Codice fiscale, przede wszystkim",
  "Il **codice fiscale** è una sigla di sedici caratteri ricavata da nome, cognome, data e luogo di nascita. Non è una tessera: è un identificativo, e serve praticamente per ogni cosa — aprire un conto, firmare un contratto d'affitto, iscriversi al servizio sanitario, comprare una scheda telefonica.":
    "**Codice fiscale** to szesnastoznakowy kod wyprowadzony z imienia, nazwiska, daty i miejsca urodzenia. To nie karta: to identyfikator, i potrzebny jest praktycznie do wszystkiego — do otwarcia konta, podpisania umowy najmu, zapisania się do służby zdrowia, kupienia karty telefonicznej.",
  "Segue la **residenza**, cioè l'iscrizione all'anagrafe del comune in cui si abita davvero. Dalla residenza dipendono la carta d'identità, il medico di base, l'iscrizione a scuola e il diritto di voto alle comunali per i cittadini dell'Unione.":
    "Dalej idzie **residenza**, czyli wpis do ewidencji ludności gminy, w której naprawdę się mieszka. Od residenzy zależą dowód osobisty, lekarz rodzinny, zapisanie do szkoły i prawo głosu w wyborach gminnych dla obywateli Unii.",
  "Il permesso di soggiorno": "Pozwolenie na pobyt",
  "Chi non è cittadino dell'Unione europea ha bisogno di un **permesso di soggiorno**, che si chiede alla **questura** presentando la domanda tramite gli uffici postali abilitati. La durata e le condizioni dipendono dal motivo: lavoro, studio, famiglia, protezione.":
    "Kto nie jest obywatelem Unii Europejskiej, potrzebuje **permesso di soggiorno**, o które występuje się do **questury**, składając wniosek przez upoważnione placówki pocztowe. Długość i warunki zależą od powodu: praca, nauka, rodzina, ochrona.",
  "Per il **permesso di soggiorno UE per soggiornanti di lungo periodo**, che non ha scadenza, si richiedono almeno cinque anni di soggiorno regolare, un reddito e la dimostrazione di conoscere l'italiano al livello **A2** attraverso un test.":
    "O **permesso di soggiorno UE dla rezydentów długoterminowych**, które nie ma terminu ważności, można się ubiegać po co najmniej pięciu latach legalnego pobytu, przy dochodzie i wykazaniu znajomości włoskiego na poziomie **A2** przez test.",
  "A che cosa serve il codice fiscale?": "Do czego służy codice fiscale?",
  "Solo a pagare le imposte": "Wyłącznie do płacenia podatków",
  "A identificare la persona in quasi ogni rapporto con enti e privati":
    "Do identyfikacji osoby w niemal każdym kontakcie z urzędami i firmami",
  "Ad accedere al pronto soccorso": "Do dostania się na izbę przyjęć",
  "A votare alle elezioni comunali": "Do głosowania w wyborach gminnych",
  "È l'identificativo di base: serve per il conto in banca, il contratto d'affitto, l'iscrizione al servizio sanitario, il contratto di lavoro. Il nome inganna, perché il suo uso va molto oltre il fisco.":
    "To podstawowy identyfikator: potrzebny do konta w banku, umowy najmu, zapisu do służby zdrowia, umowy o pracę. Nazwa myli, bo jego użycie sięga daleko poza podatki.",
  "L'accordo di integrazione": "Umowa integracyjna",
  "Chi entra per la prima volta e chiede un permesso di almeno un anno firma con lo Stato un **accordo di integrazione**, in vigore dal 2012. Funziona a **crediti**: se ne ricevono sedici all'inizio, e vanno mantenuti o accresciuti nell'arco di **due anni**, prorogabili di uno.":
    "Kto wjeżdża po raz pierwszy i występuje o pozwolenie na co najmniej rok, podpisuje z państwem **accordo di integrazione**, obowiązujące od 2012 roku. Działa na **punkty**: dostaje się szesnaście na początku i trzeba je utrzymać albo pomnożyć w ciągu **dwóch lat**, z możliwością przedłużenia o rok.",
  "La formazione civica": "Szkolenie obywatelskie",
  "Entro tre mesi dalla firma si partecipa a una sessione sull'ordinamento, sui diritti e doveri e sui servizi. Non è un esame: la partecipazione dà crediti.":
    "W ciągu trzech miesięcy od podpisania bierze się udział w sesji o ustroju, prawach i obowiązkach oraz usługach. To nie egzamin: sam udział daje punkty.",
  "Che cosa si verifica alla fine": "Co się sprawdza na końcu",
  "Conoscenza dell'italiano parlato almeno al livello A2, conoscenza sufficiente della cultura civica e della vita civile in Italia.":
    "Znajomość mówionego włoskiego co najmniej na poziomie A2 oraz wystarczającą znajomość kultury obywatelskiej i życia obywatelskiego we Włoszech.",
  "I crediti si perdono": "Punkty się traci",
  "Condanne penali definitive e sanzioni gravi li riducono. Azzerarli comporta la revoca del permesso di soggiorno.":
    "Prawomocne wyroki karne i poważne kary je zmniejszają. Wyzerowanie ich pociąga za sobą cofnięcie pozwolenia na pobyt.",
  "Chi lo firma alla prefettura": "Podpis w prefekturze",
  "L'accordo si sottoscrive davanti allo sportello unico presso la prefettura, che rappresenta il governo in ogni provincia.":
    "Umowę podpisuje się przed jednym okienkiem w prefekturze, która reprezentuje rząd w każdej prowincji.",
  "È l'unica prova italiana che tocca la conoscenza del paese, e resta molto lontana da un esame di educazione civica: si verifica una conoscenza sufficiente della vita civile, non un programma di storia e istituzioni.":
    "To jedyna włoska procedura dotykająca znajomości kraju i bardzo daleko jej do egzaminu z wiedzy o społeczeństwie: sprawdza się wystarczającą znajomość życia obywatelskiego, a nie program z historii i instytucji.",
  "Come funziona l'accordo di integrazione?": "Jak działa accordo di integrazione?",
  "Con un esame scritto di storia e istituzioni":
    "Przez pisemny egzamin z historii i instytucji",
  "Con un sistema a crediti da mantenere in due anni":
    "Przez system punktów, które trzeba utrzymać przez dwa lata",
  "Con un colloquio annuale in questura": "Przez coroczną rozmowę w questurze",
  "Con il versamento di una cauzione": "Przez wpłacenie kaucji",
  "Si ricevono sedici crediti alla firma e si verificano dopo due anni, insieme alla conoscenza dell'italiano a livello A2 e a una conoscenza sufficiente della vita civile. Non c'è un esame di educazione civica.":
    "Przy podpisie dostaje się szesnaście punktów i sprawdza się je po dwóch latach, razem ze znajomością włoskiego na poziomie A2 i wystarczającą znajomością życia obywatelskiego. Egzaminu z wiedzy o społeczeństwie nie ma.",
  "La cittadinanza": "Obywatelstwo",
  "Si può diventare cittadini italiani per **discendenza**, per **matrimonio** o per **residenza**. Per residenza il termine ordinario per chi non è cittadino dell'Unione è di **dieci anni**; è più breve per i cittadini dell'Unione, per i rifugiati e per chi è nato in Italia.":
    "Obywatelem włoskim można zostać przez **pochodzenie**, przez **małżeństwo** albo przez **zamieszkanie**. Przez zamieszkanie zwykły termin dla osób spoza Unii to **dziesięć lat**; jest krótszy dla obywateli Unii, dla uchodźców i dla urodzonych we Włoszech.",
  "Dal **2018** la domanda per matrimonio e per residenza richiede un certificato di conoscenza dell'italiano non inferiore al livello **B1** del quadro europeo. È una prova **linguistica**: non verte sulla storia, sulla Costituzione o sulle istituzioni.":
    "Od **2018 roku** wniosek z tytułu małżeństwa i zamieszkania wymaga zaświadczenia o znajomości włoskiego nie niższej niż poziom **B1** według skali europejskiej. To sprawdzian **językowy**: nie dotyczy historii, Konstytucji ani instytucji.",
  "Quale livello di italiano è richiesto per la domanda di cittadinanza?":
    "Jakiego poziomu włoskiego wymaga wniosek o obywatelstwo?",
  "A1": "A1",
  "A2": "A2",
  "B1": "B1",
  "C1": "C1",
  "B1 per la cittadinanza, dal 2018. Il livello A2 serve invece per il permesso di soggiorno di lungo periodo: due prove diverse, con due soglie diverse, entrambe soltanto linguistiche.":
    "B1 dla obywatelstwa, od 2018 roku. Poziom A2 służy natomiast do pozwolenia na pobyt długoterminowy: dwa różne sprawdziany, z dwoma różnymi progami, oba wyłącznie językowe.",
  "Per i servizi online serve un'identità digitale: **SPID** o la **carta d'identità elettronica**. Senza una delle due non si prenota una visita, non si scarica un certificato e non si consulta il proprio fascicolo previdenziale.":
    "Do usług internetowych potrzebna jest tożsamość cyfrowa: **SPID** albo **elektroniczny dowód osobisty**. Bez jednego z tych dwóch nie umówisz wizyty, nie pobierzesz zaświadczenia i nie zajrzysz do własnych akt ubezpieczeniowych.",
  "La vita di tutti i giorni": "Życie codzienne",
  "Perché si chiude qui: le regole non scritte si imparano più lentamente di quelle scritte, e sono quelle che fanno sentire a proprio agio o fuori posto. Nessuna di esse è obbligatoria; tutte sono reali.":
    "Dlaczego kończymy tutaj: reguł niepisanych uczy się wolniej niż pisanych, a to one sprawiają, że człowiek czuje się swobodnie albo nie na miejscu. Żadna z nich nie jest obowiązkowa; wszystkie są prawdziwe.",
  "Il caffè e la tavola": "Kawa i stół",
  "Il **caffè** in Italia è l'espresso, e si beve **al banco** in un minuto. Il **cappuccino** è una bevanda della **mattina**: ordinarlo dopo pranzo non è vietato da nessuna legge, ma segnala immediatamente che si viene da fuori. Dopo il pasto si prende il caffè, eventualmente **corretto** con un liquore.":
    "**Kawa** we Włoszech to espresso i pije się ją **przy barze** w minutę. **Cappuccino** to napój **poranny**: zamówienie go po obiedzie nie jest zabronione żadną ustawą, ale natychmiast zdradza przybysza. Po posiłku bierze się kawę, ewentualnie **corretto**, z kroplą alkoholu.",
  "I pasti hanno orari precisi: colazione leggera e dolce, pranzo fra le tredici e le quattordici, cena dalle venti in poi, più tardi man mano che si scende verso sud. Prima di cena c'è l'**aperitivo**, che a Milano è diventato quasi un pasto.":
    "Posiłki mają swoje pory: śniadanie lekkie i słodkie, obiad między trzynastą a czternastą, kolacja od dwudziestej wzwyż, tym później, im dalej na południe. Przed kolacją jest **aperitivo**, które w Mediolanie stało się niemal posiłkiem.",
  "In quale momento della giornata si beve tradizionalmente il cappuccino?":
    "O jakiej porze dnia tradycyjnie pije się cappuccino?",
  "Al mattino": "Rano",
  "Dopo pranzo": "Po obiedzie",
  "Dopo cena": "Po kolacji",
  "In qualunque momento, indifferentemente": "O dowolnej porze, obojętnie",
  "Il cappuccino appartiene alla colazione. Dopo il pasto si prende l'espresso: non è una regola scritta, ma è seguita così largamente da funzionare come tale.":
    "Cappuccino należy do śniadania. Po posiłku bierze się espresso: to nie reguła pisana, ale przestrzegana tak powszechnie, że działa jak reguła.",
  "Una cucina che non esiste": "Kuchnia, która nie istnieje",
  "La **cucina italiana** al singolare è in buona parte un'invenzione dell'estero e dell'emigrazione. In Italia la cucina è **regionale**, spesso cittadina: il ragù non è lo stesso a Bologna e a Napoli, la pizza di Napoli e quella romana sono due prodotti diversi, e ogni valle ha il proprio formaggio.":
    "**Kuchnia włoska** w liczbie pojedynczej jest w dużej mierze wynalazkiem zagranicy i emigracji. We Włoszech kuchnia jest **regionalna**, często miejska: ragù nie jest to samo w Bolonii i w Neapolu, pizza neapolitańska i rzymska to dwa różne produkty, a każda dolina ma własny ser.",
  "Vale anche per l'ordine del pasto: antipasto, **primo** — pasta, riso o zuppa — **secondo** con contorno, poi frutta o dolce. Il primo non è un antipasto e il secondo non si accompagna alla pasta: sono due portate distinte, servite una dopo l'altra.":
    "Dotyczy to także porządku posiłku: przystawka, **primo** — makaron, ryż albo zupa — **secondo** z dodatkiem, potem owoce albo deser. Primo nie jest przystawką, a secondo nie towarzyszy makaronowi: to dwa osobne dania, podawane jedno po drugim.",
  "Casa, famiglia, piazza": "Dom, rodzina, plac",
  "I giovani italiani lasciano la casa dei genitori più tardi che in quasi tutta Europa, per ragioni che sono soprattutto economiche: affitti, salari d'ingresso, lavoro instabile. I **nonni** hanno spesso un ruolo quotidiano nella cura dei nipoti, e questo tiene insieme molti bilanci familiari.":
    "Młodzi Włosi opuszczają dom rodziców później niż niemal w całej Europie, z powodów przede wszystkim ekonomicznych: czynsze, płace na starcie, niestabilna praca. **Dziadkowie** mają często codzienną rolę w opiece nad wnukami, i to spina niejeden domowy budżet.",
  "La **piazza** resta il luogo dello stare insieme, e la **passeggiata** serale è ancora una pratica diffusa nei centri piccoli e medi. Nel rivolgersi a qualcuno si distingue fra **tu** e **lei**: il lei con gli sconosciuti, con chi è più anziano e in ogni contesto formale, finché non è l'altro a proporre il passaggio al tu.":
    "**Plac** pozostaje miejscem przebywania razem, a wieczorna **passeggiata** wciąż jest praktyką powszechną w małych i średnich miastach. Zwracając się do kogoś, rozróżnia się **tu** i **lei**: lei do nieznajomych, do starszych i w każdym kontekście formalnym, dopóki druga osoba nie zaproponuje przejścia na tu.",
  "Quando si usa il lei rivolgendosi a qualcuno?": "Kiedy zwraca się do kogoś przez lei?",
  "Solo negli atti scritti": "Tylko w pismach",
  "Con gli sconosciuti, con chi è più anziano e nei contesti formali":
    "Do nieznajomych, do starszych i w sytuacjach formalnych",
  "Sempre, anche in famiglia": "Zawsze, także w rodzinie",
  "Soltanto nel Sud del paese": "Wyłącznie na Południu kraju",
  "Il passaggio al tu di solito lo propone la persona più anziana o di posizione superiore. Dare del tu troppo presto a uno sconosciuto è la scortesia più facile da commettere.":
    "Przejście na tu proponuje zwykle osoba starsza albo wyżej postawiona. Zbyt szybkie przejście na tu wobec nieznajomego to najłatwiejsza do popełnienia niezręczność.",
  "Lo sport": "Sport",
  "Il **calcio** è lo sport nazionale: la **Serie A** riempie le conversazioni da agosto a maggio, e la nazionale, gli **azzurri**, ha vinto quattro campionati del mondo. Il colore azzurro delle maglie non viene dalla bandiera ma dal blu Savoia, e la Repubblica ha scelto di conservarlo.":
    "**Piłka nożna** jest sportem narodowym: **Serie A** wypełnia rozmowy od sierpnia do maja, a reprezentacja, **azzurri**, wygrała cztery mistrzostwa świata. Błękit koszulek nie pochodzi od flagi, lecz od barwy Sabaudów, a Republika postanowiła go zachować.",
  "Il secondo sport per radicamento è il **ciclismo**, con il **Giro d'Italia** che ogni maggio attraversa il paese. Chi è in testa alla classifica indossa la **maglia rosa**, del colore della carta del giornale che lo organizzò.":
    "Drugim sportem pod względem zakorzenienia jest **kolarstwo**, z **Giro d'Italia**, które co maj przecina kraj. Kto prowadzi w klasyfikacji, nosi **maglia rosa**, różową koszulkę w kolorze papieru gazety, która wyścig zorganizowała.",
  "Di che colore è la maglia di chi guida la classifica del Giro d'Italia?":
    "Jakiego koloru jest koszulka lidera klasyfikacji Giro d'Italia?",
  "Gialla": "Żółta",
  "Rosa": "Różowa",
  "Verde": "Zielona",
  "Azzurra": "Błękitna",
  "Rosa, come la carta del quotidiano sportivo che organizzò la corsa. La maglia gialla appartiene invece al Tour de France, per la stessa ragione: il colore della carta del suo giornale.":
    "Różowa, jak papier dziennika sportowego, który zorganizował wyścig. Żółta koszulka należy natomiast do Tour de France, z tego samego powodu: to kolor papieru jego gazety.",
  "Gli orari": "Godziny",
  "Molti negozi e uffici chiudono per la **pausa pranzo**, soprattutto nei centri piccoli e al Sud, e riaprono nel pomeriggio fino a sera. Ad **agosto**, e in particolare intorno a **Ferragosto**, chiudono per ferie negozi, studi professionali e interi quartieri delle grandi città.":
    "Wiele sklepów i biur zamyka się na **przerwę obiadową**, zwłaszcza w małych miejscowościach i na Południu, i otwiera ponownie po południu aż do wieczora. W **sierpniu**, a szczególnie w okolicach **Ferragosto**, zamykają się na urlop sklepy, kancelarie i całe dzielnice wielkich miast.",
  "Nessuna di queste consuetudini è una regola, e in una città grande molte non valgono più. Ma conoscerle spiega perché una porta è chiusa alle quattordici e trenta, e perché il barista alza un sopracciglio davanti a un cappuccino ordinato alle nove di sera.":
    "Żaden z tych zwyczajów nie jest regułą, a w dużym mieście wiele z nich już nie obowiązuje. Ale ich znajomość tłumaczy, dlaczego drzwi są zamknięte o czternastej trzydzieści i dlaczego barman unosi brew na widok cappuccina zamówionego o dziewiątej wieczorem.",
};
