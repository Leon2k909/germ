/**
 * Polish for the Vivere in Italia practice questions.
 *
 * The lesson text of this course has had a Polish table for a while, and the
 * questions of the practice bank had none — so a lesson read in Polish and
 * then asked its questions in Italian. They arrive in the same stepped
 * session as the course's own quiz blocks, through the same component, so the
 * marker was already there and only the words were missing.
 *
 * Keyed on the ITALIAN of itQuestionBank.ts, exactly as it stands there. Every
 * key was extracted from the built module and paired back by position, never
 * retyped: one wrong character and the lookup misses in silence — the marker
 * disappears and the reader is told there is nothing, for a question that was
 * in fact translated.
 *
 * WHAT STAYS ITALIAN follows VIVERE_IN_ITALIA_PL, so a reader who moves
 * between the lesson and its questions never meets one word glossed two ways.
 * Institutions keep their Italian name where the exam asks for it — Camera dei
 * deputati, Senato, Corte costituzionale, Consiglio superiore della
 * magistratura — and where a word is the answer itself and Polish has none of
 * its own — codice fiscale, permesso di soggiorno, questura, partita IVA,
 * INPS, INAIL, CCNL, SPID, Ferragosto — the Polish gives the meaning and
 * keeps the Italian beside it. Place names take their Polish exonym where
 * Polish uses nothing else: Mediolan, Neapol, Wenecja, Turyn, Florencja.
 *
 * Strings another Polish table already answers are deliberately absent. Every
 * table for one target is spread into a single object, so a second entry for
 * the same key would be a silent collision, and the older table would decide
 * the wording for both. check-pl-bank-translation counts what a reader
 * reaches rather than what this file holds.
 */
export const IT_QUESTION_BANK_PL: Record<string, string> = {
  "Quale articolo della Costituzione descrive la bandiera?":
    "Który artykuł konstytucji opisuje flagę?",
  "L'articolo 1": "Artykuł 1",
  "L'articolo 6": "Artykuł 6",
  "L'articolo 11": "Artykuł 11",
  "L'articolo 12": "Artykuł 12",
  "L'articolo 12 chiude i principi fondamentali e descrive il tricolore a tre bande verticali di uguali dimensioni.":
    "Artykuł 12 zamyka zasady podstawowe i opisuje tricolore o trzech pionowych pasach jednakowej wielkości.",
  "Come si chiama ufficialmente l'inno nazionale?": "Jak oficjalnie nazywa się hymn narodowy?",
  "Fratelli d'Italia": "Fratelli d'Italia",
  "Il Canto degli Italiani": "Il Canto degli Italiani",
  "Inno di Mameli": "Inno di Mameli",
  "Va' pensiero": "Va' pensiero",
  "Il titolo ufficiale è Il Canto degli Italiani. Fratelli d'Italia è il primo verso e Inno di Mameli il nome corrente: entrambi indicano lo stesso brano, ma non sono il titolo.":
    "Tytuł oficjalny brzmi Il Canto degli Italiani. Fratelli d'Italia to pierwszy wers, a Inno di Mameli nazwa potoczna: obie wskazują ten sam utwór, ale nie są tytułem.",
  "In quale città nacque il tricolore nel 1797?":
    "W którym mieście narodził się tricolore w 1797 roku?",
  "Reggio Emilia": "Reggio Emilia",
  "Bologna": "Bolonia",
  "Il 7 gennaio 1797 la Repubblica Cispadana adottò il tricolore a Reggio Emilia. Per questo il 7 gennaio è la Festa del Tricolore.":
    "7 stycznia 1797 roku Republika Cispadańska przyjęła tricolore w Reggio Emilia. Dlatego 7 stycznia jest Festa del Tricolore.",
  "Chi compose la musica dell'inno nazionale?": "Kto skomponował muzykę hymnu narodowego?",
  "Gioachino Rossini": "Gioachino Rossini",
  "La musica è di Michele Novaro, il testo di Goffredo Mameli. Il nome corrente ricorda solo l'autore delle parole.":
    "Muzykę napisał Michele Novaro, tekst Goffredo Mameli. Nazwa potoczna pamięta tylko autora słów.",
  "Da quando è in vigore l'emblema della Repubblica?": "Od kiedy obowiązuje godło Republiki?",
  "Dal 1861": "Od 1861",
  "Dal 1946": "Od 1946",
  "Dal 1948": "Od 1948",
  "Dal 2017": "Od 2017",
  "L'emblema, scelto per concorso pubblico, è in vigore dal 5 maggio 1948, pochi mesi dopo l'entrata in vigore della Costituzione.":
    "Godło, wybrane w konkursie publicznym, obowiązuje od 5 maja 1948 roku, kilka miesięcy po wejściu w życie konstytucji.",
  "Quale ramo dell'emblema rappresenta la pace?": "Która gałąź w godle przedstawia pokój?",
  "Il ramo di quercia": "Gałąź dębowa",
  "Il ramo di olivo": "Gałąź oliwna",
  "Il ramo di alloro": "Gałąź laurowa",
  "Il ramo di palma": "Gałąź palmowa",
  "L'olivo sta per la pace, la quercia per la forza e la dignità. Sono due alberi diffusi in tutta la penisola.":
    "Oliwka oznacza pokój, dąb siłę i godność. To dwa drzewa rozpowszechnione na całym półwyspie.",
  "Che cosa richiama la ruota dentata dell'emblema?": "Do czego nawiązuje koło zębate w godle?",
  "L'industria automobilistica": "Do przemysłu samochodowego",
  "Il lavoro": "Do pracy",
  "La navigazione": "Do żeglugi",
  "Il tempo": "Do czasu",
  "L'ingranaggio richiama il lavoro, su cui l'articolo 1 fonda la Repubblica: l'emblema cita la Costituzione.":
    "Koło zębate nawiązuje do pracy, na której artykuł 1 opiera Republikę: godło cytuje konstytucję.",
  "In che anno Il Canto degli Italiani è diventato inno ufficiale per legge?":
    "W którym roku Il Canto degli Italiani stał się ustawowo hymnem oficjalnym?",
  "Nel 1977": "W 1977",
  "Nel 2017": "W 2017",
  "Adottato in via provvisoria nel 1946, è diventato inno ufficiale soltanto con la legge del 4 dicembre 2017: settant'anni da provvisorio.":
    "Przyjęty tymczasowo w 1946 roku, stał się hymnem oficjalnym dopiero ustawą z 4 grudnia 2017: siedemdziesiąt lat tymczasowości.",
  "Che cosa si celebra il 7 gennaio?": "Co świętuje się 7 stycznia?",
  "La Festa della Repubblica": "Festa della Repubblica",
  "La Festa del Tricolore": "Festa del Tricolore",
  "L'Epifania civile": "Cywilne Objawienie Pańskie",
  "La Giornata della Costituzione": "Dzień Konstytucji",
  "Il 7 gennaio è la Festa del Tricolore, anniversario dell'adozione della bandiera nel 1797. Non è giorno festivo.":
    "7 stycznia to Festa del Tricolore, rocznica przyjęcia flagi w 1797 roku. Nie jest dniem wolnym.",
  "Quale evento ricorda il 4 novembre?": "Które wydarzenie przypomina 4 listopada?",
  "L'armistizio del 1918 e l'unità nazionale": "Rozejm z 1918 roku i jedność narodową",
  "La liberazione dal nazifascismo": "Wyzwolenie spod nazizmu i faszyzmu",
  "L'entrata in guerra del 1940": "Przystąpienie do wojny w 1940 roku",
  "Il 4 novembre è il Giorno dell'Unità nazionale e Festa delle Forze armate, legato all'armistizio del 1918. La Liberazione è il 25 aprile e la Repubblica il 2 giugno.":
    "4 listopada to Dzień Jedności Narodowej i Święto Sił Zbrojnych, związany z rozejmem z 1918 roku. Wyzwolenie przypada 25 kwietnia, a Republika 2 czerwca.",
  "Come sono disposte le bande del tricolore?": "Jak ułożone są pasy tricolore?",
  "Orizzontali, di larghezza diversa": "Poziomo, o różnej szerokości",
  "Verticali, di uguali dimensioni": "Pionowo, jednakowej wielkości",
  "Orizzontali, di uguali dimensioni": "Poziomo, jednakowej wielkości",
  "In diagonale": "Po skosie",
  "Tre bande verticali di uguali dimensioni. Le bande orizzontali sono quelle della bandiera ungherese, che ha gli stessi colori disposti diversamente.":
    "Trzy pionowe pasy jednakowej wielkości. Pasy poziome to flaga węgierska, która ma te same kolory ułożone inaczej.",
  "Chi disegnò l'emblema della Repubblica?": "Kto zaprojektował godło Republiki?",
  "Paolo Paschetto": "Paolo Paschetto",
  "Giuseppe Terragni": "Giuseppe Terragni",
  "Renato Guttuso": "Renato Guttuso",
  "Bruno Munari": "Bruno Munari",
  "L'emblema fu disegnato da Paolo Paschetto, vincitore del concorso pubblico bandito dal governo nel 1946.":
    "Godło zaprojektował Paolo Paschetto, zwycięzca konkursu publicznego ogłoszonego przez rząd w 1946 roku.",
  "Perché l'Italia ha un emblema e non uno stemma?":
    "Dlaczego Włochy mają emblemat, a nie herb?",
  "Perché lo stemma è riservato alle monarchie e l'emblema non discende da una dinastia":
    "Bo herb jest zastrzeżony dla monarchii, a emblemat nie wywodzi się z dynastii",
  "Perché l'araldica è vietata dalla Costituzione":
    "Bo heraldyka jest zakazana przez konstytucję",
  "Perché uno stemma sarebbe troppo costoso da riprodurre":
    "Bo herb byłby zbyt kosztowny w odtwarzaniu",
  "Perché lo stemma spetta solo alle regioni": "Bo herb przysługuje tylko regionom",
  "Uno stemma discende da una famiglia regnante; l'emblema fu inventato da una repubblica appena nata, scegliendolo per concorso pubblico. È una differenza di origine, non di forma.":
    "Herb wywodzi się z rodziny panującej; emblemat wymyśliła dopiero co narodzona republika, wybierając go w konkursie publicznym. To różnica pochodzenia, a nie formy.",
  "Quanti articoli ha la Costituzione italiana?": "Ile artykułów ma konstytucja włoska?",
  "Cinquantacinque": "Pięćdziesiąt pięć",
  "Duecento": "Dwieście",
  "Centotrentanove articoli, più diciotto disposizioni transitorie e finali. Dodici sono i soli principi fondamentali.":
    "Sto trzydzieści dziewięć artykułów, plus osiemnaście przepisów przejściowych i końcowych. Samych zasad podstawowych jest dwanaście.",
  "Chi promulgò la Costituzione nel dicembre 1947?":
    "Kto promulgował konstytucję w grudniu 1947 roku?",
  "Alcide De Gasperi": "Alcide De Gasperi",
  "Enrico De Nicola": "Enrico De Nicola",
  "Luigi Einaudi": "Luigi Einaudi",
  "Umberto II": "Umberto II",
  "Enrico De Nicola, capo provvisorio dello Stato. Einaudi sarà il primo Presidente della Repubblica eletto dal Parlamento, nel 1948.":
    "Enrico De Nicola, tymczasowa głowa państwa. Einaudi będzie pierwszym Prezydentem Republiki wybranym przez parlament, w 1948 roku.",
  "Quando fu eletta l'Assemblea costituente?": "Kiedy wybrano Zgromadzenie Konstytucyjne?",
  "Il 18 aprile 1948": "18 kwietnia 1948",
  "L'Assemblea fu eletta il 2 giugno 1946, lo stesso giorno del referendum istituzionale: una scheda per la forma dello Stato, una per i costituenti.":
    "Zgromadzenie wybrano 2 czerwca 1946 roku, tego samego dnia co referendum ustrojowe: jedna karta na formę państwa, druga na konstytuantę.",
  "Che cosa rese storico il voto del 2 giugno 1946?":
    "Co uczyniło głosowanie 2 czerwca 1946 roku historycznym?",
  "Fu il primo voto a scrutinio segreto": "Było pierwszym głosowaniem tajnym",
  "Fu la prima volta che votarono le donne a livello nazionale":
    "Kobiety po raz pierwszy głosowały na szczeblu krajowym",
  "Fu il primo voto con le schede stampate": "Było pierwszym głosowaniem z drukowanymi kartami",
  "Fu il primo voto aperto ai diciottenni":
    "Było pierwszym głosowaniem otwartym dla osiemnastolatków",
  "Fu la prima consultazione a suffragio davvero universale: le donne votarono per la prima volta a livello nazionale. Il voto ai diciottenni arriverà solo nel 1975.":
    "To była pierwsza konsultacja o naprawdę powszechnym prawie wyborczym: kobiety głosowały po raz pierwszy na szczeblu krajowym. Prawo głosu dla osiemnastolatków przyjdzie dopiero w 1975 roku.",
  "Su che cosa è fondata la Repubblica secondo l'articolo 1?":
    "Na czym opiera się Republika według artykułu 1?",
  "Sulla famiglia": "Na rodzinie",
  "Sul lavoro": "Na pracy",
  "Sulla libertà": "Na wolności",
  "Sulla proprietà": "Na własności",
  "Una repubblica democratica fondata sul lavoro: la formula fu il compromesso fra chi voleva una repubblica dei lavoratori e chi ne voleva una definizione più generale.":
    "Republika demokratyczna oparta na pracy: ta formuła była kompromisem między tymi, którzy chcieli republiki pracujących, a tymi, którzy chcieli definicji ogólniejszej.",
  "Che cosa aggiunge il secondo comma dell'articolo 3?": "Co dodaje ustęp drugi artykułu 3?",
  "L'uguaglianza davanti alla legge": "Równość wobec prawa",
  "Il compito della Repubblica di rimuovere gli ostacoli di fatto all'uguaglianza":
    "Zadanie Republiki, żeby usuwać faktyczne przeszkody równości",
  "Il divieto di discriminazione religiosa": "Zakaz dyskryminacji religijnej",
  "La parità fra uomo e donna nel lavoro": "Równość mężczyzny i kobiety w pracy",
  "Il primo comma enuncia l'uguaglianza formale, il secondo quella sostanziale: non basta che la legge sia uguale, la Repubblica deve rimuovere gli ostacoli che la rendono ineffettiva. È il comma su cui poggiano le politiche sociali.":
    "Ustęp pierwszy głosi równość formalną, drugi materialną: nie wystarczy, że prawo jest równe, Republika musi usuwać przeszkody, które czynią je nieskutecznym. To ustęp, na którym opiera się polityka społeczna.",
  "Su quale articolo poggia l'adesione italiana all'Unione europea?":
    "Na którym artykule opiera się przystąpienie Włoch do Unii Europejskiej?",
  "L'articolo 3": "Artykule 3",
  "L'articolo 138": "Artykule 138",
  "L'articolo 11 consente, in condizioni di parità con gli altri Stati, le limitazioni di sovranità necessarie a un ordinamento che assicuri pace e giustizia. Lo stesso articolo che ripudia la guerra apre all'Europa.":
    "Artykuł 11 dopuszcza, na równi z innymi państwami, ograniczenia suwerenności konieczne dla porządku zapewniającego pokój i sprawiedliwość. Ten sam artykuł, który odrzuca wojnę, otwiera się na Europę.",
  "Che cosa ripudia l'articolo 11?": "Co odrzuca artykuł 11?",
  "La pena di morte": "Karę śmierci",
  "La censura": "Cenzurę",
  "Il lavoro minorile": "Pracę dzieci",
  "L'Italia ripudia la guerra come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali. La pena di morte è abolita dall'articolo 27.":
    "Włochy odrzucają wojnę jako narzędzie zamachu na wolność innych narodów i jako środek rozstrzygania sporów międzynarodowych. Karę śmierci znosi artykuł 27.",
  "Quale articolo disciplina la revisione della Costituzione?":
    "Który artykuł reguluje zmianę konstytucji?",
  "L'articolo 75": "Artykuł 75",
  "L'articolo 101": "Artykuł 101",
  "L'articolo 139": "Artykuł 139",
  "L'articolo 138 detta la procedura aggravata; il 139 pone il limite invalicabile della forma repubblicana. Il 75 riguarda invece il referendum abrogativo.":
    "Artykuł 138 wyznacza tryb zaostrzony; 139 stawia nieprzekraczalną granicę formy republikańskiej. Artykuł 75 dotyczy natomiast referendum uchylającego.",
  "Quando può essere chiesto il referendum confermativo su una legge costituzionale?":
    "Kiedy można żądać referendum zatwierdzającego ustawę konstytucyjną?",
  "Sempre, dopo l'approvazione": "Zawsze, po jej uchwaleniu",
  "Solo se nella seconda votazione non si raggiungono i due terzi":
    "Tylko jeśli w drugim głosowaniu nie osiągnięto dwóch trzecich",
  "Solo se lo chiede il Presidente della Repubblica":
    "Tylko jeśli zażąda tego Prezydent Republiki",
  "Mai: le leggi costituzionali non sono referendabili":
    "Nigdy: ustawy konstytucyjne nie podlegają referendum",
  "Se ciascuna Camera approva con almeno i due terzi, la legge è definitiva. Sotto quella soglia, cinquecentomila elettori, cinque consigli regionali o un quinto dei parlamentari possono chiedere il referendum.":
    "Jeśli każda izba uchwali co najmniej dwiema trzecimi, ustawa jest ostateczna. Poniżej tego progu pięćset tysięcy wyborców, pięć rad regionalnych albo jedna piąta parlamentarzystów może zażądać referendum.",
  "Il referendum confermativo dell'articolo 138 è valido solo se vota la maggioranza degli aventi diritto?":
    "Czy referendum zatwierdzające z artykułu 138 jest ważne tylko wtedy, gdy zagłosuje większość uprawnionych?",
  "Sì, come tutti i referendum": "Tak, jak wszystkie referenda",
  "No, non ha quorum di partecipazione": "Nie, nie ma progu frekwencji",
  "Sì, ma solo per le riforme della Parte II": "Tak, ale tylko przy reformach Części II",
  "Dipende dal numero di firme raccolte": "Zależy od liczby zebranych podpisów",
  "Il confermativo non ha quorum: vale qualunque sia l'affluenza. Il quorum di metà più uno degli aventi diritto riguarda il referendum abrogativo dell'articolo 75.":
    "Zatwierdzające nie ma progu: jest ważne przy każdej frekwencji. Próg połowy plus jednego uprawnionego dotyczy referendum uchylającego z artykułu 75.",
  "Quali articoli formano la Parte II, sull'ordinamento della Repubblica?":
    "Które artykuły tworzą Część II, o ustroju Republiki?",
  "Dall'1 al 12": "Od 1 do 12",
  "Dal 13 al 54": "Od 13 do 54",
  "Dal 55 al 139": "Od 55 do 139",
  "Dal 100 al 139": "Od 100 do 139",
  "Principi fondamentali 1–12, Parte I sui diritti e doveri 13–54, Parte II sull'ordinamento 55–139.":
    "Zasady podstawowe 1–12, Część I o prawach i obowiązkach 13–54, Część II o ustroju 55–139.",
  "Quando l'Assemblea costituente approvò il testo della Costituzione?":
    "Kiedy Zgromadzenie Konstytucyjne uchwaliło tekst konstytucji?",
  "Approvazione il 22 dicembre 1947, promulgazione il 27 dicembre, entrata in vigore il 1º gennaio 1948. Il 18 aprile 1948 sono invece le prime elezioni politiche repubblicane.":
    "Uchwalenie 22 grudnia 1947, promulgacja 27 grudnia, wejście w życie 1 stycznia 1948. 18 kwietnia 1948 to natomiast pierwsze republikańskie wybory parlamentarne.",
  "Quali articoli formano la Parte I, sui diritti e doveri?":
    "Które artykuły tworzą Część I, o prawach i obowiązkach?",
  "Dal 55 al 96": "Od 55 do 96",
  "Dal 101 al 139": "Od 101 do 139",
  "La Parte I va dall'articolo 13 al 54 ed è divisa in quattro titoli: rapporti civili, etico-sociali, economici e politici.":
    "Część I obejmuje artykuły od 13 do 54 i dzieli się na cztery tytuły: stosunki cywilne, etyczno-społeczne, gospodarcze i polityczne.",
  "In quanti titoli è divisa la Parte I della Costituzione?":
    "Na ile tytułów dzieli się Część I konstytucji?",
  "Due": "Dwa",
  "Quattro": "Cztery",
  "Sei": "Sześć",
  "Quattro: rapporti civili, rapporti etico-sociali, rapporti economici e rapporti politici. Ogni titolo guarda la persona da un lato diverso.":
    "Cztery: stosunki cywilne, stosunki etyczno-społeczne, stosunki gospodarcze i stosunki polityczne. Każdy tytuł patrzy na człowieka z innej strony.",
  "Quale articolo esclude la pena di morte?": "Który artykuł wyklucza karę śmierci?",
  "L'articolo 13": "Artykuł 13",
  "L'articolo 21": "Artykuł 21",
  "L'articolo 24": "Artykuł 24",
  "L'articolo 27": "Artykuł 27",
  "L'articolo 27 chiude affermando che non è ammessa la pena di morte, dopo aver stabilito la personalità della responsabilità penale e il fine rieducativo della pena.":
    "Artykuł 27 kończy się stwierdzeniem, że kara śmierci jest niedopuszczalna, po ustaleniu osobistego charakteru odpowiedzialności karnej i resocjalizacyjnego celu kary.",
  "Quale principio NON è contenuto nell'articolo 27?": "Której zasady NIE zawiera artykuł 27?",
  "La responsabilità penale è personale": "Odpowiedzialność karna jest osobista",
  "L'imputato non è considerato colpevole fino alla condanna definitiva":
    "Oskarżonego nie uważa się za winnego do prawomocnego skazania",
  "Le pene devono tendere alla rieducazione": "Kary muszą zmierzać do resocjalizacji",
  "Nessuno può essere distolto dal giudice naturale":
    "Nikogo nie można pozbawić sędziego naturalnego",
  "Il giudice naturale è garantito dall'articolo 25. L'articolo 27 riunisce personalità della responsabilità, presunzione di non colpevolezza, fine rieducativo della pena e divieto della pena di morte.":
    "Sędziego naturalnego gwarantuje artykuł 25. Artykuł 27 łączy osobisty charakter odpowiedzialności, domniemanie niewinności, resocjalizacyjny cel kary i zakaz kary śmierci.",
  "Che cosa garantisce l'articolo 21?": "Co gwarantuje artykuł 21?",
  "La libertà di riunione": "Wolność zgromadzeń",
  "La libertà di manifestare il proprio pensiero": "Wolność wyrażania swoich myśli",
  "La libertà di associazione": "Wolność zrzeszania się",
  "La libertà religiosa": "Wolność religijną",
  "L'articolo 21 riguarda la manifestazione del pensiero con la parola, lo scritto e ogni mezzo di diffusione. Riunione è l'articolo 17, associazione il 18, religione il 19.":
    "Artykuł 21 dotyczy wyrażania myśli słowem, pismem i każdym środkiem rozpowszechniania. Zgromadzenia to artykuł 17, zrzeszanie 18, religia 19.",
  "La stampa può essere sottoposta ad autorizzazioni o censure?":
    "Czy prasa może podlegać zezwoleniom albo cenzurze?",
  "Sì, in caso di emergenza nazionale": "Tak, w razie stanu wyjątkowego",
  "No, l'articolo 21 lo esclude": "Nie, artykuł 21 to wyklucza",
  "Sì, se lo decide il Ministero dell'interno":
    "Tak, jeśli zdecyduje o tym ministerstwo spraw wewnętrznych",
  "Solo per le pubblicazioni straniere": "Tylko przy publikacjach zagranicznych",
  "L'articolo 21 esclude autorizzazioni e censure: è una frase scritta da chi aveva appena vissuto vent'anni di giornali autorizzati. Restano possibili i sequestri per atto motivato dell'autorità giudiziaria.":
    "Artykuł 21 wyklucza zezwolenia i cenzurę: to zdanie napisali ludzie, którzy właśnie przeżyli dwadzieścia lat gazet na zezwolenie. Pozostają możliwe zajęcia na uzasadnione postanowienie organu sądowego.",
  "Quale articolo tutela la salute come diritto dell'individuo?":
    "Który artykuł chroni zdrowie jako prawo jednostki?",
  "L'articolo 29": "Artykuł 29",
  "L'articolo 32": "Artykuł 32",
  "L'articolo 34": "Artykuł 34",
  "L'articolo 38": "Artykuł 38",
  "L'articolo 32 definisce la salute diritto dell'individuo e interesse della collettività, e garantisce cure gratuite agli indigenti. È la base del Servizio sanitario nazionale.":
    "Artykuł 32 określa zdrowie jako prawo jednostki i interes zbiorowości, i gwarantuje bezpłatne leczenie ubogim. To podstawa Servizio sanitario nazionale.",
  "Che cos'è il patrocinio a spese dello Stato?": "Czym jest patrocinio a spese dello Stato?",
  "Un contributo per le spese processuali di chi non può permettersele":
    "Dopłatą do kosztów procesu dla tych, których na nie nie stać",
  "Un fondo per le vittime di reato": "Funduszem dla ofiar przestępstw",
  "Un'assicurazione obbligatoria per gli avvocati": "Obowiązkowym ubezpieczeniem adwokatów",
  "Un sussidio per i detenuti": "Zasiłkiem dla osadzonych",
  "Nasce dall'articolo 24, che impone allo Stato di assicurare ai non abbienti i mezzi per agire e difendersi davanti a ogni giurisdizione.":
    "Wywodzi się z artykułu 24, który nakazuje państwu zapewnić niezamożnym środki do działania i obrony przed każdym sądem.",
  "Quale articolo riconosce il diritto di sciopero?": "Który artykuł uznaje prawo do strajku?",
  "L'articolo 35": "Artykuł 35",
  "L'articolo 39": "Artykuł 39",
  "L'articolo 40": "Artykuł 40",
  "L'articolo 46": "Artykuł 46",
  "L'articolo 40 riconosce il diritto di sciopero, che si esercita nell'ambito delle leggi che lo regolano. L'articolo 39 riguarda invece la libertà sindacale.":
    "Artykuł 40 uznaje prawo do strajku, wykonywane w ramach ustaw, które je regulują. Artykuł 39 dotyczy natomiast wolności związkowej.",
  "Chi non vota alle elezioni politiche che conseguenza subisce?":
    "Jaką konsekwencję ponosi ten, kto nie głosuje w wyborach parlamentarnych?",
  "Una sanzione amministrativa": "Karę administracyjną",
  "Nessuna: il dovere civico non è sanzionato": "Żadnej: obowiązek obywatelski nie jest karany",
  "La sospensione dei diritti politici": "Zawieszenie praw politycznych",
  "L'esclusione dai concorsi pubblici": "Wykluczenie z konkursów na stanowiska publiczne",
  "L'articolo 48 chiama il voto dovere civico, ma non prevede sanzioni. Dovere civico indica un obbligo morale e politico, non un obbligo giuridico assistito da pena.":
    "Artykuł 48 nazywa głosowanie obowiązkiem obywatelskim, ale nie przewiduje kar. Obowiązek obywatelski oznacza powinność moralną i polityczną, a nie prawną, obwarowaną karą.",
  "Quale articolo impone fedeltà alla Repubblica e l'osservanza della Costituzione?":
    "Który artykuł nakłada wierność Republice i przestrzeganie konstytucji?",
  "L'articolo 48": "Artykuł 48",
  "L'articolo 52": "Artykuł 52",
  "L'articolo 53": "Artykuł 53",
  "L'articolo 54": "Artykuł 54",
  "L'articolo 54 chiede a tutti fedeltà alla Repubblica e, a chi ricopre funzioni pubbliche, di adempierle con disciplina e onore.":
    "Artykuł 54 żąda od wszystkich wierności Republice, a od tych, którzy pełnią funkcje publiczne, wypełniania ich z dyscypliną i honorem.",
  "Le garanzie dell'articolo 13 sulla libertà personale valgono solo per i cittadini italiani?":
    "Czy gwarancje artykułu 13 o wolności osobistej dotyczą tylko obywateli włoskich?",
  "Sì, solo per i cittadini": "Tak, tylko obywateli",
  "No, l'articolo dice nessuno e vale per chiunque": "Nie, artykuł mówi nikt i dotyczy każdego",
  "Solo per i cittadini dell'Unione europea": "Tylko obywateli Unii Europejskiej",
  "Solo per chi ha la residenza": "Tylko osób z zameldowaniem",
  "L'articolo 13 usa la parola nessuno e l'articolo 21 la parola tutti: sono garanzie riferite alla persona. Riservati ai cittadini sono soprattutto i diritti politici, come il voto.":
    "Artykuł 13 używa słowa nikt, a artykuł 21 słowa wszyscy: to gwarancje odniesione do osoby. Dla obywateli zastrzeżone są przede wszystkim prawa polityczne, jak głosowanie.",
  "Quale articolo definisce sacro dovere la difesa della patria?":
    "Który artykuł określa obronę ojczyzny jako święty obowiązek?",
  "L'articolo 52. Il 48 riguarda il voto, il 53 i tributi e l'11 il ripudio della guerra: quattro articoli che si citano spesso insieme e si confondono facilmente.":
    "Artykuł 52. Artykuł 48 dotyczy głosowania, 53 danin, a 11 odrzucenia wojny: cztery artykuły, które często cytuje się razem i łatwo pomylić.",
  "Quale articolo della Costituzione tutela le minoranze linguistiche?":
    "Który artykuł konstytucji chroni mniejszości językowe?",
  "L'articolo 9": "Artykuł 9",
  "L'articolo 6 impegna la Repubblica a tutelare con apposite norme le minoranze linguistiche. L'attuazione arriverà però solo con la legge 482 del 1999.":
    "Artykuł 6 zobowiązuje Republikę do ochrony mniejszości językowych osobnymi przepisami. Wykonanie przyjdzie jednak dopiero z ustawą 482 z 1999 roku.",
  "Quante minoranze linguistiche storiche riconosce la legge del 1999?":
    "Ile historycznych mniejszości językowych uznaje ustawa z 1999 roku?",
  "Nove": "Dziewięć",
  "Venti": "Dwadzieścia",
  "Dodici: albanesi, catalane, germaniche, greche, slovene, croate, e le popolazioni parlanti francese, franco-provenzale, friulano, ladino, occitano e sardo.":
    "Dwanaście: albańską, katalońską, germańskie, grecką, słoweńską, chorwacką oraz ludność mówiącą po francusku, franko-prowansalsku, friulsku, ladyńsku, oksytańsku i sardyńsku.",
  "In quale regione il tedesco è equiparato all'italiano?":
    "W którym regionie niemiecki jest zrównany z włoskim?",
  "In Friuli Venezia Giulia": "We Friuli-Wenecji Julijskiej",
  "In Veneto": "W Wenecji Euganejskiej",
  "In Alto Adige il tedesco è equiparato all'italiano: atti bilingui, scuole distinte per gruppo linguistico e proporzionale etnica per i posti pubblici.":
    "W Południowym Tyrolu niemiecki jest zrównany z włoskim: dwujęzyczne akty, osobne szkoły dla każdej grupy językowej i proporcjonalny podział etniczny stanowisk publicznych.",
  "In che anno fu fondata l'Accademia della Crusca?":
    "W którym roku założono Accademia della Crusca?",
  "Nel 1321": "W 1321",
  "Nel 1583": "W 1583",
  "Nel 1861": "W 1861",
  "Fondata a Firenze nel 1583, è la più antica accademia linguistica del mondo ancora attiva.":
    "Założona we Florencji w 1583 roku, jest najstarszą wciąż działającą akademią językową na świecie.",
  "Perché il napoletano non è considerato una variante dell'italiano?":
    "Dlaczego neapolitańskiego nie uważa się za odmianę włoskiego?",
  "Perché ha un alfabeto diverso": "Bo ma inny alfabet",
  "Perché discende dal latino per conto proprio, come lingua romanza sorella":
    "Bo wywodzi się z łaciny na własną rękę, jako siostrzany język romański",
  "Perché è parlato solo in una città": "Bo mówi się nim tylko w jednym mieście",
  "Perché non ha una tradizione scritta": "Bo nie ma tradycji pisanej",
  "I cosiddetti dialetti italiani in genere non derivano dall'italiano: derivano dal latino in parallelo. Il napoletano ha inoltre una lunga tradizione scritta e letteraria.":
    "Tak zwane dialekty włoskie na ogół nie pochodzą od włoskiego: pochodzą z łaciny równolegle. Neapolitański ma poza tym długą tradycję pisaną i literacką.",
  "Quale studioso propose la stima più citata sugli italofoni al momento dell'Unità?":
    "Który badacz zaproponował najczęściej cytowane oszacowanie liczby italofonów w chwili zjednoczenia?",
  "Benedetto Croce": "Benedetto Croce",
  "Tullio De Mauro": "Tullio De Mauro",
  "Antonio Gramsci": "Antonio Gramsci",
  "Bruno Migliorini": "Bruno Migliorini",
  "La stima di poco più del due per cento è di Tullio De Mauro. Altri studiosi propongono percentuali più alte, comunque lontane dalla maggioranza della popolazione.":
    "Oszacowanie nieco ponad dwóch procent pochodzi od Tullia De Mauro. Inni badacze proponują wyższe odsetki, i tak dalekie od większości ludności.",
  "Che cos'è la proporzionale etnica in Alto Adige?":
    "Czym jest proporzionale etnica w Południowym Tyrolu?",
  "Una ripartizione dei posti nel pubblico impiego fra i gruppi linguistici":
    "Podziałem stanowisk w administracji publicznej między grupy językowe",
  "Un sistema elettorale riservato alle minoranze":
    "Systemem wyborczym zastrzeżonym dla mniejszości",
  "Una quota di studenti stranieri per classe": "Kwotą uczniów cudzoziemskich na klasę",
  "Una divisione del bilancio provinciale fra i comuni":
    "Podziałem budżetu prowincji między gminy",
  "I posti nel pubblico impiego sono ripartiti fra gruppo italiano, tedesco e ladino in proporzione alla loro consistenza, dichiarata al censimento.":
    "Stanowiska w administracji publicznej rozdziela się między grupę włoską, niemiecką i ladyńską proporcjonalnie do ich liczebności, zadeklarowanej przy spisie.",
  "Quali lingue minoritarie sono tutelate in Friuli Venezia Giulia?":
    "Które języki mniejszościowe są chronione we Friuli-Wenecji Julijskiej?",
  "Il tedesco e il ladino": "Niemiecki i ladyński",
  "Lo sloveno e il friulano": "Słoweński i friulski",
  "Il croato e l'albanese": "Chorwacki i albański",
  "L'occitano e il sardo": "Oksytański i sardyński",
  "Lo sloveno nelle province di Trieste, Gorizia e Udine, e il friulano, parlato da alcune centinaia di migliaia di persone.":
    "Słoweński w prowincjach Triest, Gorycja i Udine oraz friulski, którym mówi kilkaset tysięcy osób.",
  "Da quale città viene il modello su cui si è formato l'italiano standard?":
    "Z którego miasta pochodzi wzorzec, na którym ukształtował się włoski standardowy?",
  "Il fiorentino letterario del Trecento, quello di Dante, Petrarca e Boccaccio, fu adottato nel Cinquecento come modello scritto per tutta la penisola.":
    "Literacki florentyński z XIV wieku, ten Dantego, Petrarki i Boccaccia, przyjęto w XVI wieku jako wzorzec pisany dla całego półwyspu.",
  "Quale mezzo contribuì più di ogni altro a diffondere l'italiano parlato nel dopoguerra?":
    "Który środek przyczynił się bardziej niż jakikolwiek inny do rozpowszechnienia mówionego włoskiego po wojnie?",
  "Il cinema": "Kino",
  "La televisione": "Telewizja",
  "La radio a galena": "Radio kryształkowe",
  "I giornali": "Gazety",
  "Negli anni Cinquanta e Sessanta la televisione portò l'italiano nelle case di chi parlava solo dialetto, insieme alla scuola dell'obbligo e all'emigrazione interna.":
    "W latach pięćdziesiątych i sześćdziesiątych telewizja wniosła włoski do domów tych, którzy mówili tylko dialektem, wraz ze szkołą obowiązkową i migracją wewnętrzną.",
  "Da dove viene il nome dell'Accademia della Crusca?":
    "Skąd pochodzi nazwa Accademia della Crusca?",
  "Dal quartiere fiorentino in cui nacque": "Od florenckiej dzielnicy, w której powstała",
  "Dall'immagine della farina separata dalla crusca": "Od obrazu mąki oddzielonej od otrąb",
  "Dal cognome del fondatore": "Od nazwiska założyciela",
  "Da un'antica corporazione di fornai": "Od dawnego cechu piekarzy",
  "Il nome richiama il lavoro di separare la farina buona dalla crusca: separare le parole da accogliere da quelle da scartare.":
    "Nazwa przywołuje pracę oddzielania dobrej mąki od otrąb: oddzielania słów do przyjęcia od tych do odrzucenia.",
  "In quale regione si parlano, oltre al francese, varietà germaniche walser?":
    "W którym regionie mówi się, oprócz francuskiego, germańskimi odmianami walserskimi?",
  "In Emilia-Romagna": "W Emilii-Romanii",
  "In Calabria": "W Kalabrii",
  "Le comunità walser vivono nelle valli alpine della Valle d'Aosta e del Piemonte. In Valle d'Aosta convivono quindi italiano, francese e parlate germaniche.":
    "Wspólnoty walserskie żyją w alpejskich dolinach Doliny Aosty i Piemontu. W Dolinie Aosty współistnieją więc włoski, francuski i mowy germańskie.",
  "L'italiano è dichiarato lingua ufficiale nei principi fondamentali della Costituzione?":
    "Czy włoski jest ogłoszony językiem urzędowym w zasadach podstawowych konstytucji?",
  "Sì, all'articolo 6": "Tak, w artykule 6",
  "Sì, all'articolo 12": "Tak, w artykule 12",
  "No: lo si ricava dallo statuto del Trentino-Alto Adige e dalla legge 482":
    "Nie: wynika to ze statutu Trydentu-Górnej Adygi i z ustawy 482",
  "No: non è lingua ufficiale in nessun testo":
    "Nie: nie jest językiem urzędowym w żadnym tekście",
  "La Costituzione non lo dice. L'italiano è indicato come lingua ufficiale nello statuto speciale del Trentino-Alto Adige e nella legge 482 del 1999: una cosa ovvia che non sta dove ci si aspetta.":
    "Konstytucja tego nie mówi. Włoski jest wskazany jako język urzędowy w statucie specjalnym Trydentu-Górnej Adygi i w ustawie 482 z 1999 roku: rzecz oczywista, która nie stoi tam, gdzie się jej szuka.",
  "Quanti sono i giorni festivi nazionali, oltre al patrono locale?":
    "Ile jest dni świątecznych ogólnokrajowych, poza patronem lokalnym?",
  "Dieci": "Dziesięć",
  "Quindici": "Piętnaście",
  "Dodici giorni festivi per legge, più il santo patrono, che è festivo soltanto nel proprio comune.":
    "Dwanaście dni świątecznych z mocy ustawy, plus święty patron, który jest wolny tylko we własnej gminie.",
  "Quando si celebra il patrono di Milano?": "Kiedy obchodzi się patrona Mediolanu?",
  "Il 19 settembre": "19 września",
  "Il 4 ottobre": "4 października",
  "Il 7 dicembre": "7 grudnia",
  "Il 29 giugno": "29 czerwca",
  "Sant'Ambrogio si celebra il 7 dicembre: a Milano è giorno festivo e apre la stagione della Scala. Il 19 settembre è san Gennaro a Napoli.":
    "Świętego Ambrożego obchodzi się 7 grudnia: w Mediolanie jest to dzień wolny i otwiera sezon La Scali. 19 września to święty Januarius w Neapolu.",
  "Chi è il patrono di Napoli?": "Kto jest patronem Neapolu?",
  "San Petronio": "Święty Petroniusz",
  "San Gennaro": "Święty Januarius",
  "San Marco": "Święty Marek",
  "Santa Rosalia": "Święta Rozalia",
  "San Gennaro, celebrato il 19 settembre. San Petronio è di Bologna, san Marco di Venezia e santa Rosalia di Palermo.":
    "Święty Januarius, obchodzony 19 września. Święty Petroniusz jest patronem Bolonii, święty Marek Wenecji, a święta Rozalia Palermo.",
  "Che cosa si celebra il 1º maggio?": "Co świętuje się 1 maja?",
  "La Liberazione": "Wyzwolenie",
  "La festa dei lavoratori": "Święto pracujących",
  "La festa della Repubblica": "Święto Republiki",
  "L'Unità nazionale": "Jedność narodową",
  "Il 1º maggio è la festa dei lavoratori, una delle quattro ricorrenze civili del calendario italiano.":
    "1 maja to święto pracujących, jedna z czterech świeckich rocznic włoskiego kalendarza.",
  "Quando si celebrano i santi Pietro e Paolo, patroni di Roma?":
    "Kiedy obchodzi się świętych Piotra i Pawła, patronów Rzymu?",
  "Il 21 aprile": "21 kwietnia",
  "Il 1º novembre": "1 listopada",
  "Il 29 giugno, giorno festivo soltanto a Roma. Il 21 aprile è invece il Natale di Roma, che non è festivo.":
    "29 czerwca, dzień wolny tylko w Rzymie. 21 kwietnia to natomiast Narodziny Rzymu, które nie są dniem wolnym.",
  "Il giorno del patrono è festivo in tutta Italia?":
    "Czy dzień patrona jest wolny w całych Włoszech?",
  "Sì, come le altre dodici feste": "Tak, jak pozostałe dwanaście świąt",
  "No, soltanto nel comune di cui è patrono": "Nie, tylko w gminie, której jest patronem",
  "Sì, ma solo nei capoluoghi di regione": "Tak, ale tylko w stolicach regionów",
  "No, non è mai festivo per legge": "Nie, z mocy ustawy nigdy nie jest wolny",
  "È festivo solo nel proprio comune: un ufficio milanese chiude il 7 dicembre, mentre a Roma lo stesso giorno si lavora normalmente.":
    "Jest wolny tylko we własnej gminie: mediolańskie biuro zamyka się 7 grudnia, a w Rzymie tego samego dnia pracuje się normalnie.",
  "Con quale nome è comunemente conosciuto il Lunedì dell'Angelo?":
    "Pod jaką nazwą znany jest powszechnie Lunedì dell'Angelo?",
  "Pasquetta": "Pasquetta",
  "Carnevale": "Karnawał",
  "Befana": "Befana",
  "Il lunedì dopo Pasqua si chiama ufficialmente Lunedì dell'Angelo e comunemente Pasquetta. È una festa mobile, come la Pasqua da cui dipende.":
    "Poniedziałek po Wielkanocy nazywa się oficjalnie Lunedì dell'Angelo, a potocznie Pasquetta. To święto ruchome, jak Wielkanoc, od której zależy.",
  "Che cosa si ricorda il 10 febbraio?": "Co upamiętnia się 10 lutego?",
  "Le vittime delle foibe e l'esodo giuliano-dalmata": "Ofiary foib i exodus z Julii i Dalmacji",
  "I caduti della Grande guerra": "Poległych wielkiej wojny",
  "Il Giorno del Ricordo, istituito per le vittime delle foibe e per l'esodo delle popolazioni istriane, fiumane e dalmate.":
    "Giorno del Ricordo, ustanowiony dla ofiar foib i dla exodusu ludności istryjskiej, rijeckiej i dalmatyńskiej.",
  "A quale fatto del 1978 è legata la data del 9 maggio?":
    "Z jakim wydarzeniem z 1978 roku wiąże się data 9 maja?",
  "Alla strage di piazza Fontana": "Z zamachem na piazza Fontana",
  "Al ritrovamento del corpo di Aldo Moro": "Ze znalezieniem ciała Alda Moro",
  "All'attentato di via Fani": "Z zamachem przy via Fani",
  "Alla strage di Bologna": "Z zamachem w Bolonii",
  "Il 9 maggio 1978 fu ritrovato il corpo di Aldo Moro. Quella data è oggi il Giorno della memoria delle vittime del terrorismo. Il rapimento in via Fani era avvenuto il 16 marzo.":
    "9 maja 1978 roku znaleziono ciało Alda Moro. Ta data jest dziś Dniem pamięci ofiar terroryzmu. Porwanie przy via Fani nastąpiło 16 marca.",
  "Quale festa cade il 26 dicembre?": "Które święto przypada 26 grudnia?",
  "L'Immacolata": "Niepokalane Poczęcie",
  "Santo Stefano": "Świętego Szczepana",
  "Ognissanti": "Wszystkich Świętych",
  "Santo Stefano, il giorno dopo Natale. L'Immacolata è l'8 dicembre, l'Epifania il 6 gennaio e Ognissanti il 1º novembre.":
    "Świętego Szczepana, dzień po Bożym Narodzeniu. Niepokalane Poczęcie to 8 grudnia, Objawienie Pańskie 6 stycznia, a Wszystkich Świętych 1 listopada.",
  "Quando cade l'Immacolata Concezione?": "Kiedy przypada Niepokalane Poczęcie?",
  "Il 6 dicembre": "6 grudnia",
  "Il 6 gennaio": "6 stycznia",
  "L'8 dicembre. In molte case è il giorno in cui si fa l'albero di Natale, e a Roma il papa rende omaggio alla colonna di piazza di Spagna.":
    "8 grudnia. W wielu domach to dzień, w którym stawia się choinkę, a w Rzymie papież oddaje hołd kolumnie na placu Hiszpańskim.",
  "Da che cosa dipende la data della Pasqua?": "Od czego zależy data Wielkanocy?",
  "Da una data fissa stabilita nel Concilio di Trento":
    "Od stałej daty ustalonej na soborze trydenckim",
  "Dal primo plenilunio di primavera": "Od pierwszej wiosennej pełni księżyca",
  "Dal calendario civile dello Stato": "Od świeckiego kalendarza państwowego",
  "Dall'inizio della Quaresima, fissato al 1º marzo":
    "Od początku Wielkiego Postu, ustalonego na 1 marca",
  "La Pasqua cade la domenica successiva al primo plenilunio dopo l'equinozio di primavera. Da lei dipendono a cascata Carnevale, Quaresima e Pasquetta.":
    "Wielkanoc wypada w niedzielę po pierwszej pełni księżyca po równonocy wiosennej. Od niej zależą po kolei karnawał, Wielki Post i Pasquetta.",
  "Che cosa porta la Befana la notte del 6 gennaio?": "Co przynosi Befana w noc 6 stycznia?",
  "I doni ai bambini, e carbone di zucchero a chi non è stato buono":
    "Prezenty dzieciom, a węgiel z cukru tym, które nie były grzeczne",
  "Le uova di cioccolato": "Czekoladowe jajka",
  "I dolci del Carnevale": "Słodycze karnawałowe",
  "I regali ai soli adulti": "Prezenty wyłącznie dorosłym",
  "La Befana riempie le calze la notte dell'Epifania. Non è festa religiosa nel senso stretto: è una tradizione popolare che si è appoggiata alla data del 6 gennaio.":
    "Befana napełnia skarpety w noc Objawienia Pańskiego. Nie jest świętem religijnym w ścisłym sensie: to ludowa tradycja, która przywarła do daty 6 stycznia.",
  "Quanti sono oggi i senatori elettivi?": "Ilu jest dziś senatorów z wyboru?",
  "Cento": "Stu",
  "Trecentoquindici": "Trzystu piętnastu",
  "Quattrocento": "Czterystu",
  "Duecento dal 2022. Trecentoquindici era il numero precedente e quattrocento è quello dei deputati.":
    "Dwustu od 2022 roku. Trzystu piętnastu to liczba poprzednia, a czterystu to liczba deputowanych.",
  "In quale palazzo si riunisce la Camera dei deputati?":
    "W którym pałacu zbiera się Camera dei deputati?",
  "Palazzo Madama": "Palazzo Madama",
  "Palazzo Chigi": "Palazzo Chigi",
  "Palazzo Montecitorio": "Palazzo Montecitorio",
  "Palazzo della Consulta": "Palazzo della Consulta",
  "Montecitorio è la Camera, Madama il Senato, Chigi il governo e la Consulta la Corte costituzionale: quattro palazzi romani che nei giornali stanno per quattro istituzioni.":
    "Montecitorio to Camera, Madama Senato, Chigi rząd, a Consulta Corte costituzionale: cztery rzymskie pałace, które w gazetach zastępują cztery instytucje.",
  "In quale palazzo si riunisce il Senato?": "W którym pałacu zbiera się Senato?",
  "Palazzo Madama, che deve il nome a Margherita d'Austria. Il Quirinale è la residenza del Presidente della Repubblica.":
    "Palazzo Madama, który nazwę zawdzięcza Małgorzacie Austriaczce. Kwirynał jest rezydencją Prezydenta Republiki.",
  "Quanti anni bisogna avere per essere eletti senatori?":
    "Ile lat trzeba mieć, żeby zostać wybranym senatorem?",
  "Venticinque": "Dwadzieścia pięć",
  "Trenta": "Trzydzieści",
  "Quaranta": "Czterdzieści",
  "Cinquanta": "Pięćdziesiąt",
  "Quaranta per il Senato, venticinque per la Camera. Cinquanta è invece l'età minima per il Presidente della Repubblica.":
    "Czterdzieści do Senato, dwadzieścia pięć do Camera. Pięćdziesiąt to natomiast minimalny wiek dla Prezydenta Republiki.",
  "Quanti anni bisogna avere per essere eletti deputati?":
    "Ile lat trzeba mieć, żeby zostać wybranym deputowanym?",
  "Diciotto": "Osiemnaście",
  "Venticinque. A diciotto si può votare per entrambe le camere, ma per candidarsi le soglie restano più alte.":
    "Dwadzieścia pięć. W wieku osiemnastu lat można głosować do obu izb, ale progi kandydowania pozostają wyższe.",
  "Quanti erano deputati e senatori elettivi prima della riforma?":
    "Ilu było deputowanych i senatorów z wyboru przed reformą?",
  "500 e 250": "500 i 250",
  "630 e 315": "630 i 315",
  "700 e 350": "700 i 350",
  "400 e 200": "400 i 200",
  "Seicentotrenta e trecentoquindici, fino alla legislatura iniziata nel 2022. Quattrocento e duecento sono i numeri attuali.":
    "Sześciuset trzydziestu i trzystu piętnastu, aż do kadencji rozpoczętej w 2022 roku. Czterystu i dwustu to liczby obecne.",
  "Che cosa si intende per navetta parlamentare?": "Co rozumie się przez navetta parlamentare?",
  "Il passaggio di un testo da una camera all'altra finché non è identico":
    "Przechodzenie tekstu z jednej izby do drugiej, aż będzie identyczny",
  "Il servizio che collega Montecitorio e Palazzo Madama":
    "Połączenie kursujące między Montecitorio a Palazzo Madama",
  "La sessione notturna di approvazione del bilancio": "Nocne posiedzenie uchwalające budżet",
  "Il voto di fiducia ripetuto due volte": "Wotum zaufania powtórzone dwa razy",
  "Una legge deve essere approvata nel medesimo testo da entrambe le camere: se una la modifica, torna all'altra. L'andirivieni può ripetersi molte volte ed è la conseguenza diretta del bicameralismo paritario.":
    "Ustawa musi zostać uchwalona w tym samym brzmieniu przez obie izby: jeśli jedna ją zmieni, wraca do drugiej. Ta wędrówka tam i z powrotem może się powtarzać wiele razy i jest bezpośrednim skutkiem równorzędnej dwuizbowości.",
  "Quanto dura una legislatura?": "Ile trwa kadencja parlamentu?",
  "Sei anni": "Sześć lat",
  "Cinque anni, salvo scioglimento anticipato. Sette anni è la durata del mandato presidenziale, e in Italia le legislature arrivate a scadenza naturale sono una minoranza.":
    "Pięć lat, o ile nie dojdzie do wcześniejszego rozwiązania. Siedem lat to długość kadencji prezydenckiej, a we Włoszech kadencje dobiegłe naturalnego końca są w mniejszości.",
  "Quante firme servono per chiedere un referendum abrogativo?":
    "Ile podpisów trzeba, żeby zażądać referendum uchylającego?",
  "Cinquantamila": "Pięćdziesiąt tysięcy",
  "Centomila": "Sto tysięcy",
  "Cinquecentomila": "Pięćset tysięcy",
  "Un milione": "Milion",
  "Cinquecentomila elettori, oppure cinque consigli regionali. Centomila firme servono invece per una proposta di legge di iniziativa popolare.":
    "Pięćset tysięcy wyborców albo pięć rad regionalnych. Sto tysięcy podpisów potrzeba natomiast do obywatelskiej inicjatywy ustawodawczej.",
  "Quando è valido un referendum abrogativo?": "Kiedy referendum uchylające jest ważne?",
  "Sempre, qualunque sia l'affluenza": "Zawsze, przy każdej frekwencji",
  "Se partecipa la maggioranza degli aventi diritto":
    "Jeśli weźmie w nim udział większość uprawnionych",
  "Se partecipa un terzo degli aventi diritto":
    "Jeśli weźmie w nim udział jedna trzecia uprawnionych",
  "Se lo convalida la Corte costituzionale dopo il voto":
    "Jeśli po głosowaniu zatwierdzi je Corte costituzionale",
  "Serve il quorum di metà più uno degli aventi diritto. Molti referendum sono falliti non perché il no abbia vinto, ma perché non ci si è presentati: astenersi è un modo di far cadere la consultazione.":
    "Potrzebny jest próg połowy plus jednego uprawnionego. Wiele referendów przepadło nie dlatego, że wygrało nie, lecz dlatego, że nikt się nie pojawił: wstrzymanie się to sposób na obalenie konsultacji.",
  "Quale di queste materie NON può essere sottoposta a referendum abrogativo?":
    "Która z tych dziedzin NIE może być poddana referendum uchylającemu?",
  "Il diritto di famiglia": "Prawo rodzinne",
  "L'energia nucleare": "Energia jądrowa",
  "Le leggi tributarie e di bilancio": "Ustawy podatkowe i budżetowe",
  "La legge elettorale": "Ordynacja wyborcza",
  "L'articolo 75 esclude leggi tributarie e di bilancio, amnistia e indulto, e la ratifica dei trattati internazionali. Divorzio, aborto e nucleare sono invece stati tutti oggetto di referendum.":
    "Artykuł 75 wyłącza ustawy podatkowe i budżetowe, amnestię i abolicję oraz ratyfikację umów międzynarodowych. Rozwód, aborcja i energia jądrowa były natomiast wszystkie przedmiotem referendów.",
  "A quale età si vota oggi per il Senato?": "W jakim wieku głosuje się dziś do Senato?",
  "Diciotto anni": "Osiemnaście lat",
  "Ventun anni": "Dwadzieścia jeden lat",
  "Venticinque anni": "Dwadzieścia pięć lat",
  "Trent'anni": "Trzydzieści lat",
  "Diciotto, dalla legge costituzionale del 2021. Prima il Senato si eleggeva dai venticinque anni in su, e i più giovani avevano in mano una scheda sola.":
    "Osiemnaście, od ustawy konstytucyjnej z 2021 roku. Wcześniej do Senato wybierało się od dwudziestu pięciu lat wzwyż, a najmłodsi mieli w ręku tylko jedną kartę.",
  "Quanti senatori a vita può nominare il Presidente della Repubblica?":
    "Ilu senatorów dożywotnich może powołać Prezydent Republiki?",
  "Nessuno": "Żadnego",
  "Fino a tre": "Do trzech",
  "Fino a cinque": "Do pięciu",
  "Senza limite": "Bez ograniczeń",
  "Fino a cinque, per altissimi meriti nel campo sociale, scientifico, artistico o letterario. Gli ex Presidenti della Repubblica non rientrano in questo numero: lo sono di diritto.":
    "Do pięciu, za najwyższe zasługi na polu społecznym, naukowym, artystycznym albo literackim. Byli Prezydenci Republiki nie wchodzą do tej liczby: są nimi z mocy prawa.",
  "Dove ha sede il governo italiano?": "Gdzie ma siedzibę rząd włoski?",
  "Al Quirinale": "Na Kwirynale",
  "A Palazzo Chigi": "W Palazzo Chigi",
  "A Palazzo Madama": "W Palazzo Madama",
  "A Montecitorio": "W Montecitorio",
  "Palazzo Chigi. Il Quirinale è del Presidente della Repubblica: due palazzi a pochi minuti a piedi e due poteri distinti.":
    "Palazzo Chigi. Kwirynał należy do Prezydenta Republiki: dwa pałace kilka minut piechotą od siebie i dwie odrębne władze.",
  "Che cosa sono le consultazioni?": "Czym są consultazioni?",
  "I sondaggi commissionati dai partiti prima del voto":
    "Sondażami zamawianymi przez partie przed głosowaniem",
  "Gli incontri del Presidente della Repubblica con i gruppi parlamentari":
    "Spotkaniami Prezydenta Republiki z klubami parlamentarnymi",
  "Le riunioni del Consiglio dei ministri": "Posiedzeniami Rady Ministrów",
  "Le audizioni dei ministri in commissione": "Wysłuchaniami ministrów w komisji",
  "Prima di nominare un Presidente del Consiglio, il capo dello Stato riceve i gruppi per capire chi possa raccogliere una maggioranza. Non sono previste nel dettaglio dalla Costituzione: sono una prassi consolidata.":
    "Zanim powoła Prezydenta Rady, głowa państwa przyjmuje kluby, żeby zrozumieć, kto może zebrać większość. Konstytucja nie opisuje ich szczegółowo: to utrwalona praktyka.",
  "Entro quanti giorni dalla formazione il governo si presenta per la fiducia?":
    "W ilu dniach od utworzenia rząd staje po wotum zaufania?",
  "Sessanta": "Sześćdziesięciu",
  "Dieci giorni, secondo l'articolo 94. Sessanta è il termine di conversione dei decreti legge e tre il tempo minimo prima di discutere una mozione di sfiducia.":
    "W dziesięciu dniach, według artykułu 94. Sześćdziesiąt to termin przekształcenia dekretów z mocą ustawy, a trzy to minimalny czas przed debatą nad wnioskiem o wotum nieufności.",
  "Da quante camere deve ottenere la fiducia un governo?":
    "Od ilu izb rząd musi uzyskać wotum zaufania?",
  "Solo dalla Camera dei deputati": "Tylko od Camera dei deputati",
  "Solo dal Senato": "Tylko od Senato",
  "Da entrambe": "Od obu",
  "Da una qualsiasi delle due, a scelta del Presidente del Consiglio":
    "Od którejkolwiek z dwóch, do wyboru Prezydenta Rady",
  "Da entrambe, ed è una conseguenza del bicameralismo paritario. Un governo che ha i numeri alla Camera ma non al Senato non può esistere: è la ragione per cui le maggioranze italiane sono spesso larghe e fragili.":
    "Od obu, i to skutek równorzędnej dwuizbowości. Rząd, który ma liczby w Camera, ale nie w Senato, nie może istnieć: to powód, dla którego włoskie większości są często szerokie i kruche.",
  "Quale articolo consente al governo il decreto legge?":
    "Który artykuł pozwala rządowi na dekret z mocą ustawy?",
  "L'articolo 76": "Artykuł 76",
  "L'articolo 77": "Artykuł 77",
  "L'articolo 92": "Artykuł 92",
  "L'articolo 77, per casi straordinari di necessità e urgenza. Il 76 riguarda il decreto legislativo su delega, il 75 il referendum abrogativo e il 92 la nomina del governo.":
    "Artykuł 77, w nadzwyczajnych przypadkach konieczności i pilności. Artykuł 76 dotyczy dekretu ustawodawczego z upoważnienia, 75 referendum uchylającego, a 92 powołania rządu.",
  "Che cos'è un decreto legislativo?": "Czym jest dekret ustawodawczy?",
  "Una norma scritta dal governo su delega del Parlamento":
    "Aktem napisanym przez rząd z upoważnienia parlamentu",
  "Una norma d'urgenza che vale subito": "Aktem pilnym, który obowiązuje natychmiast",
  "Un regolamento di attuazione di una legge": "Rozporządzeniem wykonawczym do ustawy",
  "Una legge approvata da una sola camera": "Ustawą uchwaloną tylko przez jedną izbę",
  "Il Parlamento delega, fissando principi, criteri e un termine; il governo scrive il testo. Serve per normative lunghe e tecniche come i codici. Il decreto legge, invece, nasce dall'urgenza e non da una delega.":
    "Parlament udziela upoważnienia, wyznaczając zasady, kryteria i termin; rząd pisze tekst. Służy do długich i technicznych regulacji, jak kodeksy. Dekret z mocą ustawy rodzi się natomiast z pilności, a nie z upoważnienia.",
  "Chi propone al Presidente della Repubblica i nomi dei ministri?":
    "Kto przedstawia Prezydentowi Republiki nazwiska ministrów?",
  "I segretari dei partiti di maggioranza": "Sekretarze partii większości",
  "Il Presidente del Consiglio incaricato": "Desygnowany Prezydent Rady",
  "Il presidente della Camera": "Przewodniczący Camera",
  "Nessuno: li sceglie il Presidente della Repubblica da solo":
    "Nikt: wybiera ich sam Prezydent Republiki",
  "L'articolo 92 dice che il Presidente della Repubblica nomina i ministri su proposta del Presidente del Consiglio. La proposta è dell'uno, la nomina dell'altro: nessuno dei due decide da solo.":
    "Artykuł 92 mówi, że Prezydent Republiki powołuje ministrów na wniosek Prezydenta Rady. Wniosek należy do jednego, powołanie do drugiego: żaden z nich nie decyduje sam.",
  "Da quanti parlamentari deve essere firmata una mozione di sfiducia?":
    "Przez ilu parlamentarzystów musi być podpisany wniosek o wotum nieufności?",
  "Da dieci": "Przez dziesięciu",
  "Da un decimo dei componenti della camera": "Przez jedną dziesiątą składu izby",
  "Da un quarto": "Przez jedną czwartą",
  "Dalla maggioranza assoluta": "Przez większość bezwzględną",
  "Un decimo dei componenti. La soglia è bassa di proposito: presentare la mozione deve essere possibile, approvarla è un'altra cosa.":
    "Jedna dziesiąta składu. Próg jest niski celowo: złożenie wniosku ma być możliwe, jego uchwalenie to inna sprawa.",
  "Dopo quanto tempo dalla presentazione può essere discussa una mozione di sfiducia?":
    "Po jakim czasie od złożenia można debatować nad wnioskiem o wotum nieufności?",
  "Subito": "Natychmiast",
  "Non prima di tre giorni": "Nie wcześniej niż po trzech dniach",
  "Non prima di dieci giorni": "Nie wcześniej niż po dziesięciu dniach",
  "Non prima di un mese": "Nie wcześniej niż po miesiącu",
  "Tre giorni almeno. L'attesa serve a raffreddare gli animi e a dare tempo al governo di cercare i voti che gli mancano.":
    "Co najmniej trzy dni. Zwłoka służy ostudzeniu emocji i daniu rządowi czasu na poszukanie brakujących głosów.",
  "Chi compone il Consiglio dei ministri?": "Kto tworzy Radę Ministrów?",
  "Il Presidente del Consiglio e i ministri": "Prezydent Rady i ministrowie",
  "Il Presidente della Repubblica e i ministri": "Prezydent Republiki i ministrowie",
  "I capigruppo parlamentari": "Przewodniczący klubów parlamentarnych",
  "I presidenti delle regioni": "Przewodniczący regionów",
  "Il Presidente del Consiglio e i ministri insieme formano il Consiglio dei ministri, che è l'organo collegiale del governo.":
    "Prezydent Rady i ministrowie razem tworzą Radę Ministrów, która jest kolegialnym organem rządu.",
  "In che modo cadono di solito i governi italiani?":
    "W jaki sposób zwykle upadają rządy włoskie?",
  "Con un voto di sfiducia in aula": "Przez wotum nieufności na sali",
  "Per dimissioni del Presidente del Consiglio": "Przez dymisję Prezydenta Rady",
  "Per decisione del Presidente della Repubblica": "Przez decyzję Prezydenta Republiki",
  "Alla scadenza naturale dei cinque anni": "Z naturalnym upływem pięciu lat",
  "Quasi sempre per dimissioni: un partito lascia la maggioranza e il Presidente del Consiglio sale al Quirinale prima di essere messo in minoranza. Le mozioni di sfiducia approvate si contano sulle dita.":
    "Prawie zawsze przez dymisję: partia opuszcza większość, a Prezydent Rady idzie na Kwirynał, zanim zostanie przegłosowany. Uchwalone wnioski o wotum nieufności można policzyć na palcach.",
  "Un regolamento del governo può contraddire una legge?":
    "Czy rozporządzenie rządu może być sprzeczne z ustawą?",
  "Sì, se è più recente": "Tak, jeśli jest nowsze",
  "No: attua la legge e non può andarle contro":
    "Nie: wykonuje ustawę i nie może iść przeciw niej",
  "Sì, in caso di urgenza": "Tak, w razie pilności",
  "Solo con il parere della Corte costituzionale": "Tylko za opinią Corte costituzionale",
  "Il regolamento sta sotto la legge nella gerarchia delle fonti: ne detta i dettagli attuativi e non può contraddirla. Per fare qualcosa con forza di legge servono il decreto legge o il decreto legislativo.":
    "Rozporządzenie stoi w hierarchii źródeł pod ustawą: wyznacza szczegóły jej wykonania i nie może jej przeczyć. Żeby zrobić coś z mocą ustawy, potrzebny jest dekret z mocą ustawy albo dekret ustawodawczy.",
  "Quale palazzo è la residenza del Presidente della Repubblica?":
    "Który pałac jest rezydencją Prezydenta Republiki?",
  "Il Viminale": "Wiminał",
  "Il Quirinale, che fu dei papi e poi dei re. Il Viminale è il Ministero dell'interno, un altro nome di palazzo che nei giornali sostituisce l'istituzione.":
    "Kwirynał, który należał do papieży, a potem do królów. Wiminał to ministerstwo spraw wewnętrznych, kolejna nazwa pałacu, która w gazetach zastępuje instytucję.",
  "Qual è l'età minima per essere eletti Presidente della Repubblica?":
    "Jaki jest minimalny wiek, żeby zostać wybranym Prezydentem Republiki?",
  "Quaranta anni": "Czterdzieści lat",
  "Quarantacinque anni": "Czterdzieści pięć lat",
  "Sessant'anni": "Sześćdziesiąt lat",
  "Cinquant'anni, oltre alla cittadinanza italiana e al godimento dei diritti civili e politici. Quaranta è l'età minima per il Senato.":
    "Pięćdziesiąt lat, oprócz obywatelstwa włoskiego i korzystania z praw cywilnych i politycznych. Czterdzieści to minimalny wiek do Senato.",
  "Quanti delegati regionali partecipano all'elezione del Presidente?":
    "Ilu delegatów regionalnych bierze udział w wyborze Prezydenta?",
  "Cinquantotto": "Pięćdziesięciu ośmiu",
  "Cinquantotto: tre per ogni regione e uno soltanto per la Valle d'Aosta. Si aggiungono ai deputati e ai senatori riuniti in seduta comune.":
    "Pięćdziesięciu ośmiu: po trzech z każdego regionu i tylko jeden z Doliny Aosty. Dochodzą do deputowanych i senatorów zebranych na wspólnym posiedzeniu.",
  "Quanti delegati esprime la Valle d'Aosta all'elezione presidenziale?":
    "Ilu delegatów wysyła Dolina Aosty na wybór prezydencki?",
  "Uno": "Jednego",
  "Tre come tutte le altre": "Trzech, jak wszystkie pozostałe",
  "Uno solo: è l'eccezione prevista proprio per la sua dimensione. Tutte le altre diciannove regioni ne esprimono tre.":
    "Tylko jednego: to wyjątek przewidziany właśnie ze względu na jej wielkość. Wszystkie pozostałe dziewiętnaście regionów wysyła po trzech.",
  "Quale maggioranza serve nei primi tre scrutini per eleggere il Presidente?":
    "Jaka większość jest potrzebna w pierwszych trzech turach do wyboru Prezydenta?",
  "La maggioranza semplice": "Większość zwykła",
  "La maggioranza assoluta": "Większość bezwzględna",
  "I due terzi": "Dwie trzecie",
  "L'unanimità": "Jednomyślność",
  "Due terzi dell'assemblea nei primi tre scrutini; dal quarto basta la maggioranza assoluta. La soglia alta all'inizio spinge a cercare un nome largamente condiviso.":
    "Dwie trzecie zgromadzenia w pierwszych trzech turach; od czwartej wystarczy większość bezwzględna. Wysoki próg na początku skłania do szukania nazwiska szeroko akceptowanego.",
  "Che maggioranza basta dal quarto scrutinio in poi?":
    "Jaka większość wystarcza od czwartej tury?",
  "I tre quinti": "Trzy piąte",
  "La maggioranza dei presenti": "Większość obecnych",
  "La maggioranza assoluta dei componenti. È il momento in cui l'elezione diventa possibile per una coalizione senza bisogno dell'opposizione.":
    "Większość bezwzględna składu. To moment, w którym wybór staje się możliwy dla koalicji bez potrzeby udziału opozycji.",
  "Chi sono i franchi tiratori in un'elezione presidenziale?":
    "Kim są franchi tiratori w wyborze prezydenckim?",
  "I delegati regionali che votano per ultimi":
    "Delegatami regionalnymi, którzy głosują ostatni",
  "I parlamentari che votano diversamente da quanto indicato dal proprio gruppo":
    "Parlamentarzystami, którzy głosują inaczej, niż wskazał ich klub",
  "I senatori a vita": "Senatorami dożywotnimi",
  "Gli scrutatori incaricati dello spoglio": "Członkami komisji liczącymi głosy",
  "Il voto è segreto, e la segretezza permette di disobbedire al gruppo senza che si sappia chi è stato. Alcune elezioni sono naufragate proprio su questo, richiedendo decine di scrutini.":
    "Głosowanie jest tajne, a tajność pozwala nie posłuchać klubu tak, żeby nie wiadomo było kto. Niektóre wybory rozbiły się właśnie o to i wymagały dziesiątek tur.",
  "Chi presiede il Consiglio superiore della magistratura?":
    "Kto przewodniczy Consiglio superiore della magistratura?",
  "Il ministro della Giustizia": "Minister sprawiedliwości",
  "Il primo presidente della Cassazione": "Pierwszy prezes Kasacji",
  "Il presidente della Corte costituzionale": "Przewodniczący Corte costituzionale",
  "Lo presiede il capo dello Stato, come garanzia di indipendenza. Il primo presidente della Cassazione e il procuratore generale ne fanno parte di diritto, e il ministro della Giustizia non ne fa parte affatto.":
    "Przewodniczy mu głowa państwa, jako gwarancja niezależności. Pierwszy prezes Kasacji i prokurator generalny należą do niego z mocy prawa, a minister sprawiedliwości nie należy w ogóle.",
  "Quanti giudici costituzionali nomina il Presidente della Repubblica?":
    "Ilu sędziów konstytucyjnych powołuje Prezydent Republiki?",
  "Cinque su quindici. Altri cinque li elegge il Parlamento in seduta comune e cinque vengono dalle supreme magistrature.":
    "Pięciu na piętnastu. Kolejnych pięciu wybiera parlament na wspólnym posiedzeniu, a pięciu pochodzi z najwyższych sądów.",
  "Per quali atti il Presidente della Repubblica può essere chiamato a rispondere?":
    "Za jakie czyny Prezydent Republiki może zostać pociągnięty do odpowiedzialności?",
  "Per qualsiasi reato, come ogni cittadino": "Za każde przestępstwo, jak każdy obywatel",
  "Per alto tradimento e attentato alla Costituzione": "Za zdradę stanu i zamach na konstytucję",
  "Per le leggi che promulga": "Za ustawy, które promulguje",
  "Per nessun atto, in nessun caso": "Za żaden czyn, w żadnym wypadku",
  "Solo per questi due. Per il resto degli atti compiuti nell'esercizio delle funzioni non è responsabile: risponde il ministro che li controfirma.":
    "Tylko za te dwa. Za pozostałe czyny dokonane w sprawowaniu funkcji nie odpowiada: odpowiada minister, który je kontrasygnuje.",
  "A che cosa serve la controfirma ministeriale?": "Czemu służy kontrasygnata ministra?",
  "A certificare la firma del Presidente": "Poświadczeniu podpisu Prezydenta",
  "A far assumere al ministro la responsabilità dell'atto":
    "Przejęciu przez ministra odpowiedzialności za akt",
  "A rendere l'atto immediatamente esecutivo": "Uczynieniu aktu natychmiast wykonalnym",
  "A trasmettere l'atto alla Corte costituzionale": "Przekazaniu aktu do Corte costituzionale",
  "L'articolo 89 lega ogni atto presidenziale alla firma del ministro proponente, che se ne assume la responsabilità. È il modo di conciliare un capo dello Stato irresponsabile con un sistema in cui qualcuno deve rispondere.":
    "Artykuł 89 wiąże każdy akt prezydencki z podpisem wnioskującego ministra, który bierze za niego odpowiedzialność. To sposób pogodzenia nieodpowiedzialnej głowy państwa z ustrojem, w którym ktoś musi odpowiadać.",
  "Quale di questi poteri spetta al Presidente della Repubblica?":
    "Które z tych uprawnień przysługuje Prezydentowi Republiki?",
  "Approvare il bilancio": "Uchwalanie budżetu",
  "Concedere la grazia": "Stosowanie prawa łaski",
  "Nominare i sindaci": "Powoływanie burmistrzów",
  "Fissare le aliquote fiscali": "Ustalanie stawek podatkowych",
  "La grazia è un potere presidenziale. Bilancio e tasse spettano al Parlamento e al governo, e i sindaci li eleggono i cittadini.":
    "Prawo łaski jest uprawnieniem prezydenckim. Budżet i podatki należą do parlamentu i rządu, a burmistrzów wybierają obywatele.",
  "Chi giudica il Presidente messo in stato d'accusa?":
    "Kto sądzi Prezydenta postawionego w stan oskarżenia?",
  "La Corte di cassazione": "Sąd Kasacyjny",
  "Il Parlamento in seduta comune": "Parlament na wspólnym posiedzeniu",
  "La Corte costituzionale integrata da sedici membri esterni":
    "Corte costituzionale uzupełniony o szesnastu członków spoza składu",
  "Un tribunale ordinario di Roma": "Zwykły sąd w Rzymie",
  "La Corte costituzionale, allargata a sedici giudici aggregati sorteggiati da un elenco di cittadini. Il Parlamento in seduta comune mette in stato d'accusa, ma non giudica.":
    "Corte costituzionale, powiększony o szesnastu sędziów dobranych losowo z listy obywateli. Parlament na wspólnym posiedzeniu stawia w stan oskarżenia, ale nie sądzi.",
  "Chi mette il Presidente in stato d'accusa?": "Kto stawia Prezydenta w stan oskarżenia?",
  "La sola Camera dei deputati": "Sama Camera dei deputati",
  "Il Consiglio dei ministri": "Rada Ministrów",
  "La Corte costituzionale d'ufficio": "Corte costituzionale z urzędu",
  "Il Parlamento in seduta comune, a maggioranza assoluta. Poi il giudizio passa alla Corte costituzionale nella sua composizione allargata.":
    "Parlament na wspólnym posiedzeniu, większością bezwzględną. Potem osąd przechodzi do Corte costituzionale w jego powiększonym składzie.",
  "Quale articolo dichiara la magistratura autonoma e indipendente?":
    "Który artykuł ogłasza sądownictwo autonomicznym i niezależnym?",
  "L'articolo 104": "Artykuł 104",
  "L'articolo 112": "Artykuł 112",
  "L'articolo 104. Il 101 stabilisce che i giudici sono soggetti soltanto alla legge, il 112 l'obbligatorietà dell'azione penale e il 24 il diritto di difesa.":
    "Artykuł 104. Artykuł 101 stanowi, że sędziowie podlegają wyłącznie ustawie, 112 obowiązkowość ścigania karnego, a 24 prawo do obrony.",
  "A che cosa sono soggetti i giudici secondo la Costituzione?":
    "Czemu podlegają sędziowie według konstytucji?",
  "Al ministro della Giustizia": "Ministrowi sprawiedliwości",
  "Soltanto alla legge": "Wyłącznie ustawie",
  "Alle direttive del CSM": "Wytycznym CSM",
  "Al Presidente della Repubblica": "Prezydentowi Republiki",
  "Soltanto alla legge, dice l'articolo 101. Il CSM gestisce le carriere ma non può dire a un giudice come decidere, e il ministro non ha alcun potere sulle sentenze.":
    "Wyłącznie ustawie, mówi artykuł 101. CSM prowadzi kariery, ale nie może powiedzieć sędziemu, jak ma orzec, a minister nie ma żadnej władzy nad wyrokami.",
  "Che cosa comporta l'obbligatorietà dell'azione penale?":
    "Co pociąga za sobą obowiązkowość ścigania karnego?",
  "Che il pubblico ministero deve procedere su ogni notizia di reato":
    "Że prokurator musi podjąć działanie przy każdym zawiadomieniu o przestępstwie",
  "Che ogni processo deve concludersi entro un anno": "Że każdy proces musi zakończyć się w rok",
  "Che l'imputato deve essere sempre difeso da un avvocato":
    "Że oskarżonego zawsze musi bronić adwokat",
  "Che ogni condanna prevede il carcere": "Że każde skazanie oznacza więzienie",
  "Ricevuta una notizia di reato, il pubblico ministero non può scegliere di lasciar perdere. In teoria elimina ogni discrezionalità politica; nella pratica, con più fascicoli che magistrati, la scelta si sposta sull'ordine delle priorità.":
    "Po otrzymaniu zawiadomienia o przestępstwie prokurator nie może zdecydować, że odpuszcza. W teorii usuwa to wszelką uznaniowość polityczną; w praktyce, przy większej liczbie akt niż prokuratorów, wybór przesuwa się na kolejność priorytetów.",
  "Quale articolo stabilisce l'obbligatorietà dell'azione penale?":
    "Który artykuł ustanawia obowiązkowość ścigania karnego?",
  "L'articolo 112. È uno degli articoli più discussi della Costituzione, perché la sua attuazione dipende da quante risorse ha la giustizia.":
    "Artykuł 112. To jeden z najbardziej dyskutowanych artykułów konstytucji, bo jego wykonanie zależy od tego, ile zasobów ma wymiar sprawiedliwości.",
  "Quanti gradi di giudizio prevede il sistema italiano?":
    "Ile instancji przewiduje włoski system?",
  "Primo grado, appello e Cassazione. I primi due esaminano i fatti, il terzo soltanto la corretta applicazione della legge.":
    "Pierwszą instancję, apelację i Kasację. Dwie pierwsze badają fakty, trzecia wyłącznie prawidłowe zastosowanie prawa.",
  "Quando una sentenza penale diventa definitiva?": "Kiedy wyrok karny staje się ostateczny?",
  "Alla fine del primo grado": "Na koniec pierwszej instancji",
  "Dopo l'appello": "Po apelacji",
  "Dopo la pronuncia della Cassazione": "Po orzeczeniu Kasacji",
  "Dopo la conferma della Corte costituzionale": "Po potwierdzeniu przez Corte costituzionale",
  "Passa in giudicato dopo la Cassazione. Fino ad allora vale l'articolo 27: l'imputato non è considerato colpevole. La Corte costituzionale non entra nei processi: giudica le leggi.":
    "Uprawomocnia się po Kasacji. Do tego czasu obowiązuje artykuł 27: oskarżonego nie uważa się za winnego. Corte costituzionale nie wchodzi w procesy: sądzi ustawy.",
  "Dove ha sede la Corte costituzionale?": "Gdzie ma siedzibę Corte costituzionale?",
  "A Palazzo della Consulta": "W Palazzo della Consulta",
  "Palazzo della Consulta, di fronte al Quirinale. Per questo la Corte viene chiamata semplicemente la Consulta.":
    "Palazzo della Consulta, naprzeciw Kwirynału. Dlatego Trybunał nazywa się po prostu Consulta.",
  "Quanto dura il mandato di un giudice costituzionale?":
    "Ile trwa kadencja sędziego konstytucyjnego?",
  "A vita": "Dożywotnio",
  "Nove anni. Più lungo di una legislatura e del mandato presidenziale, così che nessun giudice debba qualcosa a chi lo ha nominato.":
    "Dziewięć lat. Dłużej niż kadencja parlamentu i kadencja prezydencka, tak żeby żaden sędzia nie był nic winien temu, kto go powołał.",
  "Un giudice costituzionale può essere rinominato alla scadenza?":
    "Czy sędzia konstytucyjny może być powołany ponownie po upływie kadencji?",
  "Sì, una volta": "Tak, raz",
  "Sì, senza limiti": "Tak, bez ograniczeń",
  "No: il mandato non è rinnovabile": "Nie: kadencja nie jest odnawialna",
  "Solo se lo propone il Presidente della Repubblica":
    "Tylko jeśli zaproponuje to Prezydent Republiki",
  "Non è rinnovabile, ed è parte della garanzia: un giudice che non può sperare in un secondo mandato non ha ragione di compiacere chi lo ha scelto.":
    "Nie jest odnawialna, i to część gwarancji: sędzia, który nie może liczyć na drugą kadencję, nie ma powodu przypodobać się temu, kto go wybrał.",
  "Quale di questi compiti NON spetta alla Corte costituzionale?":
    "Które z tych zadań NIE należy do Corte costituzionale?",
  "Giudicare la legittimità costituzionale delle leggi":
    "Orzekanie o zgodności ustaw z konstytucją",
  "Decidere i conflitti di attribuzione fra Stato e regioni":
    "Rozstrzyganie sporów kompetencyjnych między państwem a regionami",
  "Giudicare in appello i processi penali": "Orzekanie w apelacji w procesach karnych",
  "Decidere se un referendum abrogativo è ammissibile":
    "Rozstrzyganie o dopuszczalności referendum uchylającego",
  "L'appello spetta alla magistratura ordinaria. La Corte costituzionale giudica leggi, conflitti fra poteri, accuse contro il Presidente e ammissibilità dei referendum: mai un imputato.":
    "Apelacja należy do sądownictwa powszechnego. Corte costituzionale sądzi ustawy, spory między władzami, oskarżenia przeciw Prezydentowi i dopuszczalność referendów: nigdy oskarżonego.",
  "Da quando perde efficacia una legge dichiarata incostituzionale?":
    "Od kiedy traci moc ustawa uznana za niezgodną z konstytucją?",
  "Dal giorno in cui era stata approvata": "Od dnia, w którym została uchwalona",
  "Dal giorno successivo alla pubblicazione della sentenza":
    "Od dnia następnego po ogłoszeniu wyroku",
  "Dopo un anno, per dare tempo al Parlamento": "Po roku, żeby dać czas parlamentowi",
  "Solo se il Parlamento la abroga": "Tylko jeśli parlament ją uchyli",
  "Cessa di avere efficacia dal giorno dopo la pubblicazione della decisione. Non serve alcun intervento del Parlamento: la norma esce dall'ordinamento da sola.":
    "Przestaje obowiązywać od dnia po ogłoszeniu orzeczenia. Nie jest potrzebne żadne działanie parlamentu: przepis sam wypada z porządku prawnego.",
  "Chi decide trasferimenti, promozioni e provvedimenti disciplinari dei magistrati?":
    "Kto decyduje o przeniesieniach, awansach i sprawach dyscyplinarnych sędziów?",
  "Il Consiglio superiore della magistratura": "Consiglio superiore della magistratura",
  "Il CSM, presieduto dal Presidente della Repubblica. Tenere queste decisioni fuori dal governo è ciò che rende concreta l'indipendenza dell'articolo 104.":
    "CSM, któremu przewodniczy Prezydent Republiki. Trzymanie tych decyzji poza rządem jest tym, co czyni niezależność z artykułu 104 realną.",
  "Con quale nome viene comunemente indicata la Corte costituzionale?":
    "Jaką nazwą określa się powszechnie Corte costituzionale?",
  "La Cassazione": "Kasacja",
  "La Consulta": "Consulta",
  "La Corte dei conti": "Corte dei conti",
  "La Consulta, dal palazzo che la ospita. La Corte dei conti è un altro organo, che controlla la spesa pubblica.":
    "Consulta, od pałacu, który ją mieści. Corte dei conti to inny organ, który kontroluje wydatki publiczne.",
  "Quante sono le regioni italiane?": "Ile jest regionów włoskich?",
  "Ventidue": "Dwadzieścia dwa",
  "Venti, di cui cinque a statuto speciale e quindici a statuto ordinario.":
    "Dwadzieścia, z czego pięć o statucie specjalnym i piętnaście o statucie zwykłym.",
  "In che anno è stato riformato il Titolo V della Costituzione?":
    "W którym roku zreformowano Tytuł V konstytucji?",
  "Nel 1993": "W 1993",
  "Nel 2020": "W 2020",
  "Nel 2001. La riforma ha ribaltato il criterio delle competenze e ha messo lo Stato per ultimo nell'elenco degli enti della Repubblica.":
    "W 2001. Reforma odwróciła kryterium kompetencji i postawiła państwo na końcu listy podmiotów Republiki.",
  "Dopo la riforma del 2001, a chi spettano le materie non elencate nella Costituzione?":
    "Po reformie z 2001 roku, do kogo należą dziedziny niewymienione w konstytucji?",
  "Allo Stato": "Do państwa",
  "Alle regioni": "Do regionów",
  "Ai comuni": "Do gmin",
  "Sono decise di volta in volta dalla Corte costituzionale":
    "Rozstrzyga o nich za każdym razem Corte costituzionale",
  "Alle regioni. Prima valeva il criterio opposto: le regioni potevano legiferare solo sulle materie espressamente elencate. Il ribaltamento ha però moltiplicato i conflitti davanti alla Corte.":
    "Do regionów. Wcześniej obowiązywało kryterium odwrotne: regiony mogły stanowić prawo tylko w dziedzinach wyraźnie wymienionych. Odwrócenie zwielokrotniło jednak spory przed Trybunałem.",
  "Quali sono le due province autonome italiane?":
    "Które dwie prowincje włoskie są autonomiczne?",
  "Trieste e Gorizia": "Triest i Gorycja",
  "Trento e Bolzano": "Trydent i Bolzano",
  "Aosta e Sondrio": "Aosta i Sondrio",
  "Cagliari e Sassari": "Cagliari i Sassari",
  "Trento e Bolzano, che dentro il Trentino-Alto Adige hanno più poteri della regione stessa. È l'assetto nato dalla tutela della minoranza di lingua tedesca.":
    "Trydent i Bolzano, które wewnątrz Trydentu-Górnej Adygi mają więcej uprawnień niż sam region. To ustrój zrodzony z ochrony mniejszości niemieckojęzycznej.",
  "Quante sono le città metropolitane?": "Ile jest miast metropolitalnych?",
  "Quattordici": "Czternaście",
  "Quattordici, istituite dal 2015 al posto delle province nei territori dei grandi capoluoghi. Il sindaco del capoluogo ne è anche sindaco metropolitano.":
    "Czternaście, utworzonych od 2015 roku w miejsce prowincji na obszarach wielkich stolic. Burmistrz stolicy jest zarazem burmistrzem metropolitalnym.",
  "Perché la Sicilia ha uno statuto speciale?": "Dlaczego Sycylia ma statut specjalny?",
  "Perché è la regione più popolosa": "Bo jest regionem najludniejszym",
  "Perché è un'isola con un forte movimento autonomista nel dopoguerra":
    "Bo jest wyspą z silnym ruchem autonomicznym po wojnie",
  "Perché ospita una minoranza linguistica riconosciuta":
    "Bo mieszka w niej uznana mniejszość językowa",
  "Perché confina con uno Stato estero": "Bo graniczy z obcym państwem",
  "Lo statuto siciliano è del 1946, precedente alla Costituzione stessa: fu concesso mentre il movimento indipendentista era forte. Le altre speciali nascono da minoranze linguistiche o da confini contesi.":
    "Statut sycylijski pochodzi z 1946 roku, sprzed samej konstytucji: przyznano go, gdy ruch niepodległościowy był silny. Pozostałe statuty specjalne rodzą się z mniejszości językowych albo ze spornych granic.",
  "Quanti sono all'incirca i comuni italiani?": "Ile mniej więcej jest gmin włoskich?",
  "Ottocento": "Osiemset",
  "Duemila": "Dwa tysiące",
  "Ottomila": "Osiem tysięcy",
  "Ventimila": "Dwadzieścia tysięcy",
  "Circa ottomila, dalle grandi città a paesi di poche decine di abitanti. La frammentazione è tale che da anni si discute di accorpare i più piccoli.":
    "Około ośmiu tysięcy, od wielkich miast po wsie liczące kilkadziesiąt osób. Rozdrobnienie jest takie, że od lat dyskutuje się o łączeniu najmniejszych.",
  "Che cosa comporta la regola per cui consiglio e presidente regionale stanno o cadono insieme?":
    "Co pociąga za sobą zasada, że rada i przewodniczący regionu stoją albo padają razem?",
  "Che il presidente può sciogliere il consiglio quando vuole":
    "Że przewodniczący może rozwiązać radę, kiedy zechce",
  "Che se il presidente cade, si torna al voto per entrambi":
    "Że jeśli przewodniczący upada, wraca się do głosowania nad obydwoma",
  "Che il consiglio elegge il presidente fra i propri membri":
    "Że rada wybiera przewodniczącego spośród swoich członków",
  "Che il presidente non può essere sfiduciato":
    "Że przewodniczącemu nie można wyrazić wotum nieufności",
  "Dimissioni, sfiducia o impedimento del presidente sciolgono anche il consiglio e portano a nuove elezioni. Serve a evitare che una regione resti anni senza guida mentre si cercano maggioranze in aula.":
    "Dymisja, wotum nieufności albo przeszkoda po stronie przewodniczącego rozwiązują także radę i prowadzą do nowych wyborów. Służy to temu, żeby region nie został latami bez kierownictwa, gdy na sali szuka się większości.",
  "Il titolo di governatore per il presidente di una regione è ufficiale?":
    "Czy tytuł gubernatora dla przewodniczącego regionu jest oficjalny?",
  "Sì, è previsto dalla Costituzione": "Tak, przewiduje go konstytucja",
  "Sì, dal 2001": "Tak, od 2001 roku",
  "No: è un uso giornalistico": "Nie: to zwyczaj dziennikarski",
  "Sì, ma solo nelle regioni a statuto speciale":
    "Tak, ale tylko w regionach o statucie specjalnym",
  "La Costituzione parla di Presidente della Giunta regionale. Governatore è entrato dall'uso dei giornali, per analogia con gli Stati americani, e non ha alcun valore giuridico.":
    "Konstytucja mówi o Presidente della Giunta regionale. Gubernator wszedł z użycia gazetowego, przez analogię do stanów amerykańskich, i nie ma żadnej wartości prawnej.",
  "Chi approva le leggi regionali?": "Kto uchwala ustawy regionalne?",
  "Il consiglio regionale": "Rada regionu",
  "La giunta regionale": "Zarząd regionu",
  "Il prefetto": "Prefekt",
  "Il Parlamento nazionale": "Parlament krajowy",
  "Il consiglio regionale legifera, la giunta governa. È la stessa distinzione che a livello nazionale corre fra Parlamento e governo.":
    "Rada regionu stanowi prawo, zarząd rządzi. To ta sama różnica, która na szczeblu krajowym biegnie między parlamentem a rządem.",
  "Sopra quale soglia di abitanti l'elezione del sindaco prevede il ballottaggio?":
    "Powyżej jakiego progu mieszkańców wybór burmistrza przewiduje drugą turę?",
  "Cinquemila": "Pięć tysięcy",
  "Quindicimila": "Piętnaście tysięcy",
  "Quindicimila abitanti. Nei comuni più piccoli si vince al primo turno con la maggioranza relativa, senza secondo turno.":
    "Piętnaście tysięcy mieszkańców. W gminach mniejszych wygrywa się w pierwszej turze większością względną, bez drugiej tury.",
  "Chi rappresenta il governo nazionale in ogni provincia?":
    "Kto reprezentuje rząd krajowy w każdej prowincji?",
  "Il presidente della provincia": "Przewodniczący prowincji",
  "Il questore": "Questore",
  "Il sindaco del capoluogo": "Burmistrz stolicy prowincji",
  "Il prefetto, che dipende dal Ministero dell'interno. È lui a ricevere le domande di cittadinanza e a firmare gli accordi di integrazione: non è un organo eletto e non appartiene all'ente locale.":
    "Prefekt, który podlega ministerstwu spraw wewnętrznych. To on przyjmuje wnioski o obywatelstwo i podpisuje umowy integracyjne: nie pochodzi z wyboru i nie należy do samorządu.",
  "Quale di queste materie resta di competenza esclusiva dello Stato?":
    "Która z tych dziedzin pozostaje w wyłącznej kompetencji państwa?",
  "Il turismo": "Turystyka",
  "L'agricoltura": "Rolnictwo",
  "L'immigrazione": "Imigracja",
  "L'artigianato": "Rzemiosło",
  "Immigrazione, difesa, moneta e giustizia sono fra le materie esclusive dello Stato. Turismo, agricoltura e artigianato ricadono invece nella competenza regionale.":
    "Imigracja, obrona, waluta i wymiar sprawiedliwości należą do wyłącznych dziedzin państwa. Turystyka, rolnictwo i rzemiosło wchodzą natomiast w kompetencję regionów.",
  "A quale anno la tradizione assegna la fondazione di Roma?":
    "Na który rok tradycja umieszcza założenie Rzymu?",
  "753 avanti Cristo": "753 przed Chrystusem",
  "509 avanti Cristo": "509 przed Chrystusem",
  "27 avanti Cristo": "27 przed Chrystusem",
  "476 dopo Cristo": "476 po Chrystusie",
  "Il 753 avanti Cristo, per convenzione degli storici antichi. Il 509 è la repubblica, il 27 l'inizio dell'impero e il 476 la sua fine in Occidente.":
    "753 przed Chrystusem, zgodnie z umową starożytnych historyków. 509 to republika, 27 początek cesarstwa, a 476 jego koniec na Zachodzie.",
  "Chi depone l'ultimo imperatore romano d'Occidente?":
    "Kto strąca ostatniego cesarza rzymskiego na Zachodzie?",
  "Attila": "Attyla",
  "Odoacre": "Odoaker",
  "Teodorico": "Teodoryk",
  "Alarico": "Alaryk",
  "Odoacre depone Romolo Augustolo nel 476. Teodorico governerà l'Italia poco dopo, e Attila e Alarico avevano guidato incursioni precedenti senza deporre nessuno.":
    "Odoaker strąca Romulusa Augustulusa w 476 roku. Teodoryk będzie rządził Italią wkrótce potem, a Attyla i Alaryk prowadzili wcześniejsze najazdy, nie strącając nikogo.",
  "In quale anno i Longobardi entrano in Italia?":
    "W którym roku Longobardowie wkraczają do Italii?",
  "Nel 568": "W 568",
  "Nel 774": "W 774",
  "Nel 1130": "W 1130",
  "Nel 568. Si insediano al centro e al nord, e resteranno fino alla sconfitta contro Carlo Magno nel 774.":
    "W 568. Osiadają w środkowej i północnej części i zostaną aż do klęski z Karolem Wielkim w 774 roku.",
  "Chi sconfigge i Longobardi nel 774?": "Kto pokonuje Longobardów w 774 roku?",
  "Costantino": "Konstantyn",
  "Giustiniano": "Justynian",
  "Carlo Magno": "Karol Wielki",
  "Federico Barbarossa": "Fryderyk Barbarossa",
  "Carlo Magno prende Pavia e assume la corona longobarda. Le terre donate al papa consolidano il nucleo dello Stato della Chiesa.":
    "Karol Wielki bierze Pawię i przyjmuje koronę longobardzką. Ziemie darowane papieżowi umacniają zalążek Państwa Kościelnego.",
  "Quali erano le quattro repubbliche marinare?": "Które były cztery republiki morskie?",
  "Amalfi, Pisa, Genova e Venezia": "Amalfi, Piza, Genua i Wenecja",
  "Napoli, Bari, Palermo e Messina": "Neapol, Bari, Palermo i Mesyna",
  "Milano, Firenze, Siena e Lucca": "Mediolan, Florencja, Siena i Lukka",
  "Ravenna, Rimini, Ancona e Trieste": "Rawenna, Rimini, Ankona i Triest",
  "Amalfi, Pisa, Genova e Venezia. Costruirono flotte, colonie e banche, e portarono in Italia la contabilità moderna e la lettera di cambio.":
    "Amalfi, Piza, Genua i Wenecja. Zbudowały floty, kolonie i banki, i przyniosły do Italii nowoczesną księgowość oraz weksel.",
  "In quale anno la Lega Lombarda sconfigge Federico Barbarossa a Legnano?":
    "W którym roku Liga Lombardzka pokonuje Fryderyka Barbarossę pod Legnano?",
  "Nel 1176": "W 1176",
  "Nel 1183": "W 1183",
  "Nel 1250": "W 1250",
  "Nel 1176. La pace che ne consegue, quella di Costanza, è del 1183: la battaglia e il trattato sono due date distinte, a sette anni di distanza.":
    "W 1176. Pokój, który z tego wynika, ten z Konstancji, pochodzi z 1183: bitwa i traktat to dwie odrębne daty, w odstępie siedmiu lat.",
  "Che cosa fondano i Normanni nel Sud nel 1130?":
    "Co zakładają Normanowie na Południu w 1130 roku?",
  "La Repubblica di Amalfi": "Republikę Amalfi",
  "Il Regno di Sicilia, primo Stato accentrato d'Europa":
    "Królestwo Sycylii, pierwsze scentralizowane państwo Europy",
  "Il Ducato di Benevento": "Księstwo Benewentu",
  "Ruggero II unisce Sicilia e Italia meridionale in un regno con amministrazione centrale, catasto e burocrazia stabile, quando il resto d'Europa è ancora feudale.":
    "Roger II łączy Sycylię i południową Italię w królestwo z centralną administracją, katastrem i stałą biurokracją, gdy reszta Europy jest jeszcze feudalna.",
  "Qual è la più antica università del mondo occidentale ancora attiva?":
    "Który uniwersytet jest najstarszym wciąż działającym w świecie zachodnim?",
  "Padova": "Padwa",
  "Salerno": "Salerno",
  "Bologna, dal 1088. Nasce come corporazione di studenti che assumono i propri maestri, e vi si studia soprattutto diritto.":
    "Bolonia, od 1088 roku. Powstaje jako korporacja studentów, którzy sami zatrudniają swoich mistrzów, a studiuje się tam przede wszystkim prawo.",
  "Che cosa succede ai Comuni nel corso del Trecento?":
    "Co dzieje się z komunami w ciągu XIV wieku?",
  "Si uniscono in un regno del Nord": "Łączą się w królestwo Północy",
  "Vengono riassorbiti dall'impero": "Zostają wchłonięte przez cesarstwo",
  "Le lotte fra fazioni li trasformano in signorie":
    "Walki między stronnictwami przemieniają je w signorie",
  "Passano tutti sotto lo Stato della Chiesa": "Wszystkie przechodzą pod Państwo Kościelne",
  "Le istituzioni comunali si logorano nelle lotte interne, e in una città dopo l'altra una famiglia prende il potere in modo stabile. Le signorie diventeranno poi principati riconosciuti.":
    "Instytucje komunalne zużywają się w walkach wewnętrznych i w mieście po mieście jedna rodzina obejmuje władzę na stałe. Signorie staną się potem uznanymi księstwami.",
  "Che cosa concede l'editto di Milano del 313?": "Co przyznaje edykt mediolański z 313 roku?",
  "La cittadinanza a tutti gli abitanti dell'impero":
    "Obywatelstwo wszystkim mieszkańcom cesarstwa",
  "La libertà di culto ai cristiani": "Wolność kultu chrześcijanom",
  "L'autonomia alle città della Padania": "Autonomię miastom Niziny Padańskiej",
  "L'esenzione fiscale ai senatori": "Zwolnienie podatkowe senatorom",
  "Costantino pone fine alle persecuzioni. Per l'Italia significa l'inizio del ruolo di Roma come centro religioso, che le resterà anche quando avrà perso ogni altro potere.":
    "Konstantyn kładzie kres prześladowaniom. Dla Italii oznacza to początek roli Rzymu jako ośrodka religijnego, która pozostanie mu i wtedy, gdy straci wszelką inną władzę.",
  "Che cosa significava in origine la parola università?":
    "Co pierwotnie znaczyło słowo uniwersytet?",
  "Universalità del sapere": "Powszechność wiedzy",
  "Corporazione": "Korporacja",
  "Edificio pubblico": "Budynek publiczny",
  "Biblioteca": "Biblioteka",
  "Indicava una corporazione, come quelle degli artigiani. A Bologna erano gli studenti a riunirsi in corporazione e ad assumere i docenti: l'esatto contrario dell'organizzazione odierna.":
    "Oznaczało korporację, jak te rzemieślnicze. W Bolonii to studenci zbierali się w korporację i zatrudniali wykładowców: dokładne przeciwieństwo dzisiejszej organizacji.",
  "Quale eredità romana è ancora l'ossatura del codice civile italiano?":
    "Które rzymskie dziedzictwo wciąż stanowi szkielet włoskiego kodeksu cywilnego?",
  "Il calendario": "Kalendarz",
  "Il diritto romano": "Prawo rzymskie",
  "Le strade consolari": "Drogi konsularne",
  "Il latino ecclesiastico": "Łacina kościelna",
  "Il diritto romano, riscoperto e insegnato nelle università medievali, sta alla base del diritto civile di gran parte dell'Europa continentale.":
    "Prawo rzymskie, odkryte na nowo i wykładane na uniwersytetach średniowiecznych, leży u podstaw prawa cywilnego znacznej części Europy kontynentalnej.",
  "Da che cosa deriva storicamente il campanilismo italiano?":
    "Skąd historycznie bierze się włoski campanilismo?",
  "Dalla rivalità fra le squadre di calcio": "Z rywalizacji między drużynami piłkarskimi",
  "Da secoli in cui la città vicina era davvero un altro Stato":
    "Ze stuleci, w których sąsiednie miasto naprawdę było innym państwem",
  "Dalle divisioni introdotte dal fascismo": "Z podziałów wprowadzonych przez faszyzm",
  "Dalla riforma delle regioni del 1970": "Z reformy regionów z 1970 roku",
  "Decine di città indipendenti, ciascuna con leggi, monete e milizie proprie, a poche decine di chilometri l'una dall'altra. Il campanilismo è il residuo di quell'assetto, non un tratto caratteriale.":
    "Dziesiątki niezależnych miast, każde z własnym prawem, monetą i milicją, kilkadziesiąt kilometrów od siebie. Campanilismo jest pozostałością po tamtym układzie, a nie cechą charakteru.",
  "Chi era Lorenzo il Magnifico?": "Kim był Wawrzyniec Wspaniały?",
  "Un banchiere che governava Firenze senza cariche formali":
    "Bankierem, który rządził Florencją bez formalnych urzędów",
  "Il duca di Milano": "Księciem Mediolanu",
  "Un papa del Rinascimento": "Papieżem renesansu",
  "Il primo re di Napoli": "Pierwszym królem Neapolu",
  "I Medici erano banchieri prima che signori: governavano comprando consenso, sposando alleanze e finanziando artisti, senza bisogno di un titolo.":
    "Medyceusze byli bankierami, zanim stali się panami: rządzili, kupując poparcie, zawierając małżeńskie sojusze i finansując artystów, bez potrzeby tytułu.",
  "In quale anno muore Lorenzo de' Medici?": "W którym roku umiera Wawrzyniec Medyceusz?",
  "Nel 1454": "W 1454",
  "Nel 1492": "W 1492",
  "Nel 1513": "W 1513",
  "Nel 1527": "W 1527",
  "Nel 1492, lo stesso anno del viaggio di Colombo. Due anni dopo Carlo VIII scende in Italia e l'equilibrio che Lorenzo aveva retto crolla.":
    "W 1492, w tym samym roku co podróż Kolumba. Dwa lata później Karol VIII schodzi do Italii i równowaga, którą Wawrzyniec utrzymywał, wali się.",
  "Chi scrive Il Principe, e in quale anno?": "Kto pisze Księcia i w którym roku?",
  "Machiavelli, nel 1513": "Machiavelli, w 1513",
  "Guicciardini, nel 1540": "Guicciardini, w 1540",
  "Castiglione, nel 1528": "Castiglione, w 1528",
  "Machiavelli, nel 1492": "Machiavelli, w 1492",
  "Machiavelli lo scrive nel 1513, in esilio dopo il ritorno dei Medici a Firenze. È il primo libro che osserva il potere per come funziona invece che per come dovrebbe essere.":
    "Machiavelli pisze go w 1513 roku, na wygnaniu po powrocie Medyceuszy do Florencji. To pierwsza książka, która patrzy na władzę taką, jaka jest, a nie taką, jaka być powinna.",
  "Che cos'è il sacco di Roma del 1527?": "Czym jest sacco di Roma z 1527 roku?",
  "Un'incursione dei pirati saraceni": "Najazdem piratów saraceńskich",
  "Il saccheggio della città da parte dei lanzichenecchi imperiali":
    "Splądrowaniem miasta przez cesarskich landsknechtów",
  "La presa di Roma da parte dei bersaglieri": "Zdobyciem Rzymu przez bersalierów",
  "Un'epidemia di peste": "Epidemią dżumy",
  "Le truppe di Carlo V, rimaste senza paga, presero e devastarono la città per mesi. Gli storici usano questa data per segnare la fine del Rinascimento come stagione fiduciosa.":
    "Wojska Karola V, pozostawione bez żołdu, wzięły miasto i pustoszyły je miesiącami. Historycy tą datą znaczą koniec renesansu jako epoki ufnej.",
  "Quale pace chiude nel 1559 le guerre d'Italia?":
    "Który pokój zamyka w 1559 roku wojny włoskie?",
  "La pace di Lodi": "Pokój w Lodi",
  "La pace di Costanza": "Pokój w Konstancji",
  "La pace di Cateau-Cambrésis": "Pokój w Cateau-Cambrésis",
  "La pace di Westfalia": "Pokój westfalski",
  "Cateau-Cambrésis. Lodi era del 1454 e riguardava l'equilibrio interno; Costanza del 1183 e riguardava i Comuni; Westfalia del 1648 e riguardava la Germania.":
    "Cateau-Cambrésis. Lodi to 1454 rok i dotyczył równowagi wewnętrznej; Konstancja 1183 i dotyczyła komun; Westfalia 1648 i dotyczyła Niemiec.",
  "Quale potenza domina l'Italia dopo il 1559?":
    "Które mocarstwo dominuje w Italii po 1559 roku?",
  "L'Austria": "Austria",
  "L'Impero ottomano": "Imperium Osmańskie",
  "La Spagna, per circa un secolo e mezzo, prima di cedere il posto all'Austria nel Settecento. Milano, Napoli, Sicilia e Sardegna passano alla corona spagnola.":
    "Hiszpania, przez jakieś półtora wieku, zanim w XVIII wieku ustąpi miejsca Austrii. Mediolan, Neapol, Sycylia i Sardynia przechodzą pod koronę hiszpańską.",
  "Quale istituzione diplomatica nasce nell'Italia dell'equilibrio di Lodi?":
    "Która instytucja dyplomatyczna rodzi się w Italii równowagi z Lodi?",
  "Il congresso internazionale": "Kongres międzynarodowy",
  "L'ambasciata permanente": "Stałe poselstwo",
  "Il tribunale arbitrale": "Trybunał arbitrażowy",
  "Il passaporto diplomatico": "Paszport dyplomatyczny",
  "Con cinque Stati che non possono prevalere l'uno sull'altro, la diplomazia sostituisce la guerra e nasce l'idea di tenere stabilmente un rappresentante presso l'altro. L'Europa adotterà la pratica per intera.":
    "Przy pięciu państwach, z których żadne nie może przeważyć nad drugim, dyplomacja zastępuje wojnę i rodzi się pomysł trzymania na stałe przedstawiciela u drugiego. Europa przejmie tę praktykę w całości.",
  "Che cosa accade a Galileo nel 1633?": "Co dzieje się z Galileuszem w 1633 roku?",
  "Viene nominato matematico di corte": "Zostaje mianowany matematykiem dworskim",
  "Pubblica il primo trattato sul telescopio": "Wydaje pierwszy traktat o teleskopie",
  "È processato e costretto ad abiurare": "Zostaje osądzony i zmuszony do odwołania",
  "Viene eletto all'Accademia della Crusca": "Zostaje wybrany do Accademia della Crusca",
  "Il processo lo costringe all'abiura e agli arresti domiciliari fino alla morte, per aver sostenuto che la Terra gira intorno al Sole.":
    "Proces zmusza go do odwołania i do aresztu domowego aż do śmierci, za twierdzenie, że Ziemia krąży wokół Słońca.",
  "In quale città nasce il melodramma, intorno al 1600?":
    "W którym mieście rodzi się melodramat, około 1600 roku?",
  "A Firenze, dagli esperimenti di un gruppo di musicisti e letterati. Diventerà la forma teatrale d'Europa, e Venezia e Napoli ne saranno poi le capitali.":
    "We Florencji, z doświadczeń grupy muzyków i literatów. Stanie się formą teatralną Europy, a Wenecja i Neapol będą potem jego stolicami.",
  "Quale potenza subentra alla Spagna in Italia nel Settecento?":
    "Które mocarstwo zastępuje Hiszpanię w Italii w XVIII wieku?",
  "La Prussia": "Prusy",
  "La Russia": "Rosja",
  "L'Austria, che governerà la Lombardia e poi il Veneto fino al Risorgimento. È la potenza contro cui si combatteranno le guerre d'indipendenza.":
    "Austria, która będzie rządzić Lombardią, a potem Wenecją Euganejską aż do Risorgimenta. To mocarstwo, przeciw któremu stoczy się wojny o niepodległość.",
  "Perché i Medici poterono governare Firenze senza ricoprire cariche pubbliche?":
    "Dlaczego Medyceusze mogli rządzić Florencją, nie sprawując urzędów publicznych?",
  "Perché la legge fiorentina lo vietava ai nobili":
    "Bo florenckie prawo zakazywało tego szlachcie",
  "Perché il loro potere veniva dalla banca, dal credito e dalle alleanze":
    "Bo ich władza brała się z banku, kredytu i sojuszy",
  "Perché erano stati nominati dall'imperatore": "Bo mianował ich cesarz",
  "Perché la città non aveva istituzioni": "Bo miasto nie miało instytucji",
  "Erano banchieri: prestavano a chi contava, finanziavano artisti e combinavano matrimoni. Le istituzioni repubblicane restavano in piedi, ma decidevano quello che i Medici volevano.":
    "Byli bankierami: pożyczali tym, którzy się liczyli, finansowali artystów i kojarzyli małżeństwa. Instytucje republikańskie stały dalej, ale rozstrzygały to, czego chcieli Medyceusze.",
  "Quale famiglia governa Milano dopo i Visconti?":
    "Która rodzina rządzi Mediolanem po Viscontich?",
  "Gli Sforza": "Sforzowie",
  "Gli Este": "Este",
  "I Gonzaga": "Gonzagowie",
  "I Della Rovere": "Della Rovere",
  "Gli Sforza. Gli Este erano a Ferrara e i Gonzaga a Mantova: signorie diverse in città diverse, spesso confuse fra loro.":
    "Sforzowie. Este byli w Ferrarze, a Gonzagowie w Mantui: różne signorie w różnych miastach, często mylone ze sobą.",
  "Perché il Rinascimento italiano coincide con la perdita dell'indipendenza politica?":
    "Dlaczego włoski renesans zbiega się z utratą niezależności politycznej?",
  "Perché gli artisti lavoravano per committenti stranieri":
    "Bo artyści pracowali dla obcych zleceniodawców",
  "Perché gli Stati italiani erano troppo piccoli per reggere l'urto degli Stati nazionali":
    "Bo państwa włoskie były zbyt małe, żeby wytrzymać uderzenie państw narodowych",
  "Perché la cultura assorbiva le risorse militari": "Bo kultura pochłaniała zasoby wojskowe",
  "Perché i papi impedivano l'unificazione": "Bo papieże uniemożliwiali zjednoczenie",
  "Cinque Stati in equilibrio bastavano finché il confronto restava interno. Davanti a Francia e Spagna, capaci di schierare eserciti grandi, nessuno di essi poteva reggere da solo.":
    "Pięć państw w równowadze wystarczało, dopóki starcie pozostawało wewnętrzne. Wobec Francji i Hiszpanii, zdolnych wystawić wielkie armie, żadne z nich nie mogło wytrzymać samo.",
  "Chi fonda la Giovine Italia?": "Kto zakłada Giovine Italia?",
  "Giuseppe Mazzini, dall'esilio. Voleva una repubblica unitaria fatta dal popolo, e passò la vita fuori dall'Italia che contribuì a creare.":
    "Giuseppe Mazzini, z wygnania. Chciał republiki zjednoczonej, zrobionej przez lud, i spędził życie poza Italią, którą pomógł stworzyć.",
  "In quale anno nasce la Giovine Italia?": "W którym roku powstaje Giovine Italia?",
  "Nel 1815": "W 1815",
  "Nel 1831": "W 1831",
  "Nel 1848": "W 1848",
  "Nel 1831, a Marsiglia. Le sue insurrezioni fallirono quasi tutte, ma formarono la generazione che avrebbe fatto l'Unità.":
    "W 1831, w Marsylii. Jej powstania nieomal wszystkie zawiodły, ale uformowały pokolenie, które miało dokonać zjednoczenia.",
  "Che cosa stabilisce per l'Italia il congresso di Vienna?":
    "Co ustanawia dla Italii kongres wiedeński?",
  "L'unificazione sotto i Savoia": "Zjednoczenie pod Sabaudami",
  "Il ritorno dei sovrani cacciati da Napoleone": "Powrót władców przepędzonych przez Napoleona",
  "La creazione di una confederazione italiana": "Utworzenie konfederacji włoskiej",
  "L'indipendenza dello Stato della Chiesa dall'Austria":
    "Niezależność Państwa Kościelnego od Austrii",
  "La restaurazione: l'Austria in Lombardia e Veneto, i Borbone a Napoli, il papa a Roma, i Savoia in Piemonte. L'idea nazionale però resta in circolazione.":
    "Restaurację: Austria w Lombardii i Wenecji Euganejskiej, Burbonowie w Neapolu, papież w Rzymie, Sabaudowie w Piemoncie. Idea narodowa pozostaje jednak w obiegu.",
  "In quale anno viene concesso lo Statuto albertino?":
    "W którym roku nadano Statuto albertino?",
  "Il 4 marzo 1848, nell'anno delle rivoluzioni europee. Resterà la costituzione dell'Italia unita per un secolo, fino al 1948.":
    "4 marca 1848 roku, w roku rewolucji europejskich. Pozostanie konstytucją zjednoczonych Włoch przez stulecie, aż do 1948.",
  "Chi guida la spedizione dei Mille?": "Kto prowadzi wyprawę tysiąca?",
  "Giuseppe Garibaldi, con mille volontari partiti da Quarto. In pochi mesi conquistò un regno con un esercito assai più numeroso del suo.":
    "Giuseppe Garibaldi, z tysiącem ochotników, którzy wyruszyli z Quarto. W kilka miesięcy zdobył królestwo, którego armia była o wiele liczniejsza od jego własnej.",
  "Dove sbarcano i Mille nel maggio 1860?": "Gdzie ląduje tysiąc w maju 1860 roku?",
  "A Napoli": "W Neapolu",
  "A Marsala": "W Marsali",
  "A Messina": "W Mesynie",
  "A Palermo": "W Palermo",
  "A Marsala, in Sicilia. Palermo cadde poche settimane dopo e Napoli entro l'autunno.":
    "W Marsali, na Sycylii. Palermo padło kilka tygodni później, a Neapol do jesieni.",
  "Dove Garibaldi consegna a Vittorio Emanuele II il regno conquistato?":
    "Gdzie Garibaldi przekazuje Wiktorowi Emanuelowi II zdobyte królestwo?",
  "A Teano": "W Teano",
  "A Torino": "W Turynie",
  "A Gaeta": "W Gaecie",
  "L'incontro di Teano è uno dei gesti più discussi della storia italiana: un repubblicano che consegna un regno a un re, evitando una guerra fra italiani.":
    "Spotkanie w Teano jest jednym z najbardziej dyskutowanych gestów historii włoskiej: republikanin przekazuje królestwo królowi, unikając wojny między Włochami.",
  "In quale data viene proclamato il Regno d'Italia?": "W jakim dniu ogłoszono Królestwo Włoch?",
  "Il 4 marzo 1848": "4 marca 1848",
  "Il 17 marzo 1861": "17 marca 1861",
  "Il 20 settembre 1870": "20 września 1870",
  "Il 17 marzo 1861. Il 20 settembre 1870 è la presa di Roma e il 2 giugno 1946 la nascita della Repubblica: tre date che si confondono facilmente.":
    "17 marca 1861. 20 września 1870 to zdobycie Rzymu, a 2 czerwca 1946 narodziny Republiki: trzy daty, które łatwo pomylić.",
  "Quali furono, nell'ordine, le capitali del Regno d'Italia?":
    "Jakie były, po kolei, stolice Królestwa Włoch?",
  "Roma, Torino, Firenze": "Rzym, Turyn, Florencja",
  "Torino, Firenze, Roma": "Turyn, Florencja, Rzym",
  "Milano, Torino, Roma": "Mediolan, Turyn, Rzym",
  "Torino, Milano, Roma": "Turyn, Mediolan, Rzym",
  "Torino fino al 1865, Firenze fino al 1871, poi Roma. Il nuovo Stato spostò il proprio centro tre volte in dieci anni.":
    "Turyn do 1865, Florencja do 1871, potem Rzym. Nowe państwo przeniosło swój ośrodek trzy razy w dziesięć lat.",
  "Perché il primo re d'Italia si chiama Vittorio Emanuele II e non I?":
    "Dlaczego pierwszy król Włoch nazywa się Wiktor Emanuel II, a nie I?",
  "Perché il primo era stato suo padre": "Bo pierwszym był jego ojciec",
  "Perché mantenne il numero che aveva come re di Sardegna":
    "Bo zachował numer, który miał jako król Sardynii",
  "Per un errore mai corretto negli atti ufficiali":
    "Przez błąd nigdy nie poprawiony w aktach urzędowych",
  "Perché il numero I era riservato al re longobardo":
    "Bo numer I był zastrzeżony dla króla longobardzkiego",
  "Conservò la numerazione sabauda invece di ripartire da uno. È un dettaglio che dice come l'Unità fu vissuta al Sud: un'annessione al Piemonte più che una fondazione comune.":
    "Zachował numerację sabaudzką zamiast zacząć od jedynki. To szczegół, który mówi, jak zjednoczenie przeżyto na Południu: raczej jako przyłączenie do Piemontu niż wspólne założenie.",
  "Quante persone lasciarono l'Italia fra il 1861 e il 1970?":
    "Ile osób opuściło Włochy między 1861 a 1970 rokiem?",
  "Circa otto milioni": "Około ośmiu milionów",
  "Circa ventisei milioni": "Około dwudziestu sześciu milionów",
  "Circa quaranta milioni": "Około czterdziestu milionów",
  "Circa ventisei milioni, più della popolazione del paese al momento dell'Unità. È una delle emigrazioni più grandi della storia moderna.":
    "Około dwudziestu sześciu milionów, więcej niż ludność kraju w chwili zjednoczenia. To jedna z największych emigracji nowożytnej historii.",
  "Che cosa fu il brigantaggio postunitario?": "Czym było brigantaggio po zjednoczeniu?",
  "Un movimento di indipendenza siciliano": "Ruchem niepodległościowym sycylijskim",
  "Un fenomeno insieme criminale e di rivolta sociale nel Sud, represso duramente":
    "Zjawiskiem zarazem przestępczym i buntem społecznym na Południu, twardo stłumionym",
  "La resistenza dell'esercito borbonico regolare": "Oporem regularnej armii burbońskiej",
  "Una rivolta contadina nel Nord contro le tasse austriache":
    "Buntem chłopskim na Północy przeciw podatkom austriackim",
  "L'annessione portò tasse nuove, leva obbligatoria e leggi pensate per il Nord. La repressione militare che ne seguì durò anni e lasciò una ferita da cui nasce la questione meridionale.":
    "Przyłączenie przyniosło nowe podatki, przymusowy pobór i prawa pomyślane dla Północy. Represja wojskowa, która nastąpiła, trwała lata i zostawiła ranę, z której rodzi się kwestia południowa.",
  "In quale anno Roma diventa parte del Regno d'Italia?":
    "W którym roku Rzym staje się częścią Królestwa Włoch?",
  "Nel 1859": "W 1859",
  "Nel 1866": "W 1866",
  "Nel 1870": "W 1870",
  "Il 20 settembre 1870, attraverso la breccia di Porta Pia. Il 1866 aveva portato il Veneto e il 1859 la Lombardia.":
    "20 września 1870 roku, przez wyłom w Porta Pia. Rok 1866 przyniósł Wenecję Euganejską, a 1859 Lombardię.",
  "Quale accordo segreto porta l'Italia in guerra nel 1915?":
    "Który tajny układ prowadzi Włochy do wojny w 1915 roku?",
  "Il patto d'acciaio": "Pakt stalowy",
  "Il patto di Londra": "Układ londyński",
  "La Triplice alleanza": "Trójprzymierze",
  "L'asse Roma-Berlino": "Oś Rzym-Berlin",
  "Il patto di Londra, firmato con Francia, Gran Bretagna e Russia mentre l'Italia era formalmente alleata degli imperi centrali. Il patto d'acciaio è del 1939, con la Germania.":
    "Układ londyński, podpisany z Francją, Wielką Brytanią i Rosją, gdy Włochy były formalnie sojusznikiem państw centralnych. Pakt stalowy pochodzi z 1939 roku i został zawarty z Niemcami.",
  "Quanti furono all'incirca i morti italiani nella Prima guerra mondiale?":
    "Ilu mniej więcej Włochów zginęło w pierwszej wojnie światowej?",
  "Trecentomila": "Trzysta tysięcy",
  "Seicentomila": "Sześćset tysięcy",
  "Due milioni": "Dwa miliony",
  "Circa seicentomila. La guerra si combatté per tre anni e mezzo in trincea sull'Isonzo, sul Carso e sulle Alpi.":
    "Około sześciuset tysięcy. Wojnę toczono trzy i pół roku w okopach nad Isonzo, na Krasie i w Alpach.",
  "Che cosa fu Caporetto?": "Czym było Caporetto?",
  "La battaglia finale vinta dall'Italia": "Ostatnią bitwą wygraną przez Włochy",
  "La rotta del 1917 che portò il fronte fino al Piave":
    "Klęską z 1917 roku, która cofnęła front aż nad Piawę",
  "Il trattato di pace del 1919": "Traktatem pokojowym z 1919 roku",
  "Il luogo della firma dell'armistizio": "Miejscem podpisania rozejmu",
  "L'offensiva austro-tedesca sfondò le linee e l'esercito arretrò di cento chilometri. Il nome è entrato nella lingua comune come sinonimo di disfatta.":
    "Ofensywa austriacko-niemiecka przerwała linie, a armia cofnęła się o sto kilometrów. Nazwa weszła do języka potocznego jako synonim klęski.",
  "Quale battaglia chiude per l'Italia la Prima guerra mondiale?":
    "Która bitwa zamyka Włochom pierwszą wojnę światową?",
  "Caporetto": "Caporetto",
  "Il Piave": "Piawa",
  "Vittorio Veneto": "Vittorio Veneto",
  "Custoza": "Custoza",
  "Vittorio Veneto, nell'ottobre-novembre 1918, seguita dall'armistizio di Villa Giusti. Custoza appartiene invece alle guerre d'indipendenza.":
    "Vittorio Veneto, w październiku i listopadzie 1918 roku, po której nastąpił rozejm w Villa Giusti. Custoza należy natomiast do wojen o niepodległość.",
  "In quale anno nascono i Fasci italiani di combattimento?":
    "W którym roku powstają Fasci italiani di combattimento?",
  "Nel 1915": "W 1915",
  "Nel 1919": "W 1919",
  "Nel 1922": "W 1922",
  "Nel 1925": "W 1925",
  "Nel marzo 1919, a Milano. La marcia su Roma sarà tre anni dopo e le leggi fascistissime dal 1925.":
    "W marcu 1919 roku, w Mediolanie. Marsz na Rzym będzie trzy lata później, a ustawy faszystowskie od 1925.",
  "Chi era Giacomo Matteotti?": "Kim był Giacomo Matteotti?",
  "Il fondatore del Partito comunista": "Założycielem partii komunistycznej",
  "Il deputato socialista rapito e ucciso nel 1924 dopo aver denunciato i brogli":
    "Posłem socjalistycznym porwanym i zabitym w 1924 roku po ujawnieniu fałszerstw wyborczych",
  "Il presidente del consiglio prima di Mussolini": "Premierem przed Mussolinim",
  "Un generale della Grande guerra": "Generałem wielkiej wojny",
  "Aveva contestato in aula la validità delle elezioni. La sua morte aprì la crisi più grave del regime nascente, superata nel gennaio 1925 con l'assunzione pubblica di responsabilità da parte di Mussolini.":
    "Zakwestionował na sali ważność wyborów. Jego śmierć otworzyła najcięższy kryzys rodzącego się reżimu, przezwyciężony w styczniu 1925 roku publicznym wzięciem odpowiedzialności przez Mussoliniego.",
  "Che cosa furono le leggi fascistissime?": "Czym były leggi fascistissime?",
  "Le leggi che estesero il voto alle donne":
    "Ustawami, które rozszerzyły prawo głosu na kobiety",
  "I provvedimenti del 1925-26 che sciolsero i partiti e soppressero la stampa libera":
    "Aktami z lat 1925–26, które rozwiązały partie i zdławiły wolną prasę",
  "Le leggi economiche del 1936": "Ustawami gospodarczymi z 1936 roku",
  "I decreti di guerra del 1940": "Dekretami wojennymi z 1940 roku",
  "In due anni lo Stato liberale fu smontato con leggi ordinarie, senza che lo Statuto albertino fosse mai abrogato: la dimostrazione pratica di che cosa comporti una costituzione flessibile.":
    "W dwa lata państwo liberalne rozebrano zwykłymi ustawami, nie uchylając nigdy Statuto albertino: praktyczny dowód na to, czym grozi konstytucja elastyczna.",
  "Che cosa stabiliscono i Patti Lateranensi del 1929?":
    "Co ustanawiają traktaty laterańskie z 1929 roku?",
  "L'abolizione dell'insegnamento religioso": "Zniesienie nauczania religii",
  "La nascita dello Stato della Città del Vaticano e la fine della questione romana":
    "Powstanie Państwa Watykańskiego i koniec kwestii rzymskiej",
  "L'annessione dello Stato della Chiesa al Regno":
    "Przyłączenie Państwa Kościelnego do Królestwa",
  "La separazione fra Stato e Chiesa sul modello francese":
    "Rozdział państwa i Kościoła na wzór francuski",
  "L'accordo con la Santa Sede chiuse la questione aperta nel 1870 con la presa di Roma. I Patti sono stati rivisti nel 1984 e sono richiamati dalla Costituzione.":
    "Porozumienie ze Stolicą Apostolską zamknęło kwestię otwartą w 1870 roku zdobyciem Rzymu. Traktaty zrewidowano w 1984 roku, a konstytucja się do nich odwołuje.",
  "Quale articolo della Costituzione richiama i Patti Lateranensi?":
    "Który artykuł konstytucji odwołuje się do traktatów laterańskich?",
  "L'articolo 7": "Artykuł 7",
  "L'articolo 19": "Artykuł 19",
  "L'articolo 7, sui rapporti fra Stato e Chiesa cattolica. L'articolo 19 garantisce invece la libertà religiosa a tutti, e fu scritto separatamente proprio per non confondere le due cose.":
    "Artykuł 7, o stosunkach między państwem a Kościołem katolickim. Artykuł 19 gwarantuje natomiast wolność religijną wszystkim i został napisany osobno właśnie po to, żeby nie mylić tych dwóch rzeczy.",
  "In quale anno furono emanate le leggi razziali?": "W którym roku wydano ustawy rasowe?",
  "Nel 1929": "W 1929",
  "Nel 1935": "W 1935",
  "Nel 1938": "W 1938",
  "Nel 1943": "W 1943",
  "Nel 1938. Esclusero gli ebrei italiani da scuole, professioni e vita pubblica, preparando il terreno alle deportazioni che sarebbero cominciate dopo l'occupazione tedesca.":
    "W 1938. Wykluczyły włoskich Żydów ze szkół, zawodów i życia publicznego, przygotowując grunt pod deportacje, które zaczną się po okupacji niemieckiej.",
  "Quando entra l'Italia nella Seconda guerra mondiale?":
    "Kiedy Włochy wchodzą do drugiej wojny światowej?",
  "Il 1º settembre 1939": "1 września 1939",
  "Il 10 giugno 1940": "10 czerwca 1940",
  "Il 25 luglio 1943": "25 lipca 1943",
  "L'8 settembre 1943": "8 września 1943",
  "Il 10 giugno 1940, quando la Francia era quasi sconfitta e si pensava che la guerra sarebbe finita in poche settimane.":
    "10 czerwca 1940 roku, gdy Francja była już prawie pokonana i sądzono, że wojna skończy się w kilka tygodni.",
  "Che cos'era la Repubblica sociale italiana?": "Czym była Włoska Republika Socjalna?",
  "Il governo del Sud alleato degli angloamericani":
    "Rządem Południa sprzymierzonym z Anglosasami",
  "Lo Stato installato al centro-nord sotto controllo tedesco dopo l'8 settembre":
    "Państwem osadzonym na północy i w środku kraju pod kontrolą niemiecką po 8 września",
  "Il primo nome della Repubblica nata nel 1946":
    "Pierwszą nazwą Republiki powstałej w 1946 roku",
  "Un progetto costituzionale mai realizzato": "Nigdy niezrealizowanym projektem konstytucyjnym",
  "Nacque dopo l'armistizio, con Mussolini liberato dai tedeschi. Fra il settembre 1943 e l'aprile 1945 esistono due Italie: il Regno del Sud e la Repubblica sociale al Nord.":
    "Powstała po rozejmie, z Mussolinim uwolnionym przez Niemców. Między wrześniem 1943 a kwietniem 1945 istnieją dwie Italie: Królestwo Południa i Republika Socjalna na Północy.",
  "Che cosa accade il 25 luglio 1943?": "Co dzieje się 25 lipca 1943 roku?",
  "Viene annunciato l'armistizio": "Zostaje ogłoszony rozejm",
  "Il Gran consiglio mette Mussolini in minoranza e il re lo fa arrestare":
    "Wielka Rada przegłosowuje Mussoliniego, a król każe go aresztować",
  "Gli Alleati sbarcano in Sicilia": "Alianci lądują na Sycylii",
  "Roma viene liberata": "Rzym zostaje wyzwolony",
  "L'arresto è del 25 luglio, l'armistizio dell'8 settembre. Fra le due date passano sei settimane in cui il paese resta in guerra senza sapere da che parte.":
    "Aresztowanie to 25 lipca, rozejm 8 września. Między tymi datami mija sześć tygodni, w których kraj pozostaje w wojnie, nie wiedząc po której stronie.",
  "Con quale percentuale approssimativa vinse la repubblica nel referendum del 1946?":
    "Jakim mniej więcej odsetkiem republika wygrała w referendum z 1946 roku?",
  "Circa il 45 per cento": "Około 45 procent",
  "Circa il 54 per cento": "Około 54 procent",
  "Circa il 75 per cento": "Około 75 procent",
  "Circa il 90 per cento": "Około 90 procent",
  "Poco più della metà, con un Nord largamente repubblicano e un Sud in maggioranza monarchico. Il risultato fu contestato per settimane, e la differenza stretta spiega perché.":
    "Nieco ponad połowa, przy Północy w większości republikańskiej i Południu w większości monarchistycznym. Wynik kwestionowano tygodniami, a wąska różnica tłumaczy dlaczego.",
  "Che cos'era il Comitato di liberazione nazionale?": "Czym był Komitet Wyzwolenia Narodowego?",
  "Il governo del Regno del Sud": "Rządem Królestwa Południa",
  "L'organismo che coordinava le forze della Resistenza":
    "Organem, który koordynował siły ruchu oporu",
  "Il comando alleato in Italia": "Dowództwem alianckim we Włoszech",
  "L'assemblea che scrisse la Costituzione": "Zgromadzeniem, które napisało konstytucję",
  "Vi sedevano insieme comunisti, socialisti, democratici cristiani, liberali e azionisti. Quelle stesse forze si sarebbero combattute per decenni, ma in quel momento scrivevano insieme.":
    "Zasiadali w nim razem komuniści, socjaliści, chrześcijańscy demokraci, liberałowie i działacze Partito d'Azione. Te same siły miały zwalczać się przez dziesięciolecia, ale w tamtej chwili pisały razem.",
  "Chi fu l'ultimo re d'Italia?": "Kto był ostatnim królem Włoch?",
  "Vittorio Emanuele III": "Wiktor Emanuel III",
  "Carlo Alberto": "Karol Albert",
  "Umberto II, che regnò poco più di un mese e lasciò il paese dopo il referendum. Vittorio Emanuele III, suo padre, aveva abdicato in suo favore poche settimane prima.":
    "Umberto II, który panował nieco ponad miesiąc i opuścił kraj po referendum. Wiktor Emanuel III, jego ojciec, abdykował na jego rzecz kilka tygodni wcześniej.",
  "Quando si tennero le prime elezioni politiche della Repubblica?":
    "Kiedy odbyły się pierwsze wybory parlamentarne Republiki?",
  "Il 18 aprile 1948, in un clima segnato dall'inizio della guerra fredda. Il 2 giugno 1946 si era votato per la forma dello Stato e per l'Assemblea costituente.":
    "18 kwietnia 1948 roku, w klimacie naznaczonym początkiem zimnej wojny. 2 czerwca 1946 głosowano nad formą państwa i nad Zgromadzeniem Konstytucyjnym.",
  "Quale piano finanziò la ricostruzione postbellica?":
    "Który plan sfinansował odbudowę powojenną?",
  "Il piano Marshall": "Plan Marshalla",
  "Il piano Schuman": "Plan Schumana",
  "Il piano Beveridge": "Plan Beveridge'a",
  "Il piano Vanoni": "Plan Vanoniego",
  "Gli aiuti americani del piano Marshall. Il piano Schuman riguardava invece il carbone e l'acciaio, e da esso nascerà la prima comunità europea.":
    "Pomoc amerykańska z planu Marshalla. Plan Schumana dotyczył natomiast węgla i stali, a z niego narodzi się pierwsza wspólnota europejska.",
  "Quali città formavano il triangolo industriale del boom?":
    "Które miasta tworzyły trójkąt przemysłowy boomu?",
  "Roma, Napoli e Bari": "Rzym, Neapol i Bari",
  "Torino, Milano e Genova": "Turyn, Mediolan i Genua",
  "Milano, Bologna e Firenze": "Mediolan, Bolonia i Florencja",
  "Venezia, Trieste e Padova": "Wenecja, Triest i Padwa",
  "Torino, Milano e Genova. Verso quelle fabbriche si mossero milioni di persone dal Sud e dal Nordest: la più grande migrazione interna della storia italiana.":
    "Turyn, Mediolan i Genua. Ku tamtym fabrykom ruszyły miliony ludzi z Południa i z północnego wschodu: największa migracja wewnętrzna w historii Włoch.",
  "In quale anno l'Italia firma i trattati che istituiscono la Comunità economica europea?":
    "W którym roku Włochy podpisują traktaty ustanawiające Europejską Wspólnotę Gospodarczą?",
  "Nel 1951": "W 1951",
  "Nel 1992": "W 1992",
  "Il 25 marzo 1957, in Campidoglio. L'Italia non aderisce all'Europa comunitaria: la fonda, e lo fa nella propria capitale.":
    "25 marca 1957 roku, na Kapitolu. Włochy nie przystępują do Europy wspólnotowej: zakładają ją, i to we własnej stolicy.",
  "Quanti giorni durò il sequestro di Aldo Moro?": "Ile dni trwało porwanie Alda Moro?",
  "Trentatré": "Trzydzieści trzy",
  "Novanta": "Dziewięćdziesiąt",
  "Cinquantacinque giorni, dal 16 marzo al 9 maggio 1978. Nel rapimento in via Fani furono uccisi i cinque uomini della scorta.":
    "Pięćdziesiąt pięć dni, od 16 marca do 9 maja 1978 roku. W porwaniu przy via Fani zabito pięciu ludzi z obstawy.",
  "Quante vittime causò la bomba alla stazione di Bologna nel 1980?":
    "Ile ofiar spowodowała bomba na dworcu w Bolonii w 1980 roku?",
  "Diciassette": "Siedemnaście",
  "Quarantatré": "Czterdzieści trzy",
  "Ottantacinque": "Osiemdziesiąt pięć",
  "Centoventi": "Sto dwadzieścia",
  "Ottantacinque: è la strage più grave dell'Italia repubblicana. L'orologio della stazione è fermo sull'ora dell'esplosione.":
    "Osiemdziesiąt pięć: to najcięższy zamach w republikańskich Włoszech. Zegar na dworcu stoi na godzinie wybuchu.",
  "Chi erano Giovanni Falcone e Paolo Borsellino?":
    "Kim byli Giovanni Falcone i Paolo Borsellino?",
  "Due parlamentari dell'Assemblea costituente": "Dwoma posłami Zgromadzenia Konstytucyjnego",
  "I giudici antimafia uccisi nelle stragi del 1992":
    "Sędziami antymafijnymi zabitymi w zamachach w 1992 roku",
  "I fondatori del Partito d'azione": "Założycielami Partito d'Azione",
  "Due giornalisti dell'inchiesta Mani pulite": "Dwoma dziennikarzami śledztwa Mani pulite",
  "Uccisi a pochi mesi di distanza nelle stragi di Capaci e di via d'Amelio, nello stesso anno in cui Mani pulite faceva crollare il sistema dei partiti.":
    "Zabici w odstępie kilku miesięcy w zamachach w Capaci i przy via d'Amelio, w tym samym roku, w którym Mani pulite obalało system partyjny.",
  "Che cosa indica l'espressione Prima Repubblica?": "Co oznacza wyrażenie Pierwsza Republika?",
  "La repubblica proclamata da Mazzini a Roma nel 1849":
    "Republikę proklamowaną przez Mazziniego w Rzymie w 1849 roku",
  "La stagione del sistema dei partiti dal dopoguerra al 1992-94":
    "Epokę systemu partyjnego od powojnia do lat 1992–94",
  "Il periodo fra il 1946 e il 1948": "Okres między 1946 a 1948 rokiem",
  "Lo Stato nato dalla Resistenza al Nord": "Państwo zrodzone z ruchu oporu na Północy",
  "Non è una categoria giuridica: la Costituzione è la stessa dal 1948. Indica la stagione dei partiti nati dalla Resistenza, chiusa dal biennio di Mani pulite.":
    "To nie jest kategoria prawna: konstytucja jest ta sama od 1948 roku. Oznacza epokę partii zrodzonych z ruchu oporu, zamkniętą dwuleciem Mani pulite.",
  "In quale anno arrivano le banconote in euro?": "W którym roku przychodzą banknoty euro?",
  "Nel 1999": "W 1999",
  "Nel 2002": "W 2002",
  "Nel 2004": "W 2004",
  "Le banconote e le monete circolano dal 1º gennaio 2002; dal 1999 l'euro esisteva già come moneta di conto. La lira era nata con il Regno d'Italia nel 1862.":
    "Banknoty i monety krążą od 1 stycznia 2002 roku; od 1999 euro istniało już jako waluta rozliczeniowa. Lir narodził się wraz z Królestwem Włoch w 1862 roku.",
  "Che cosa portò lo Statuto dei lavoratori del 1970?":
    "Co przyniósł Statuto dei lavoratori z 1970 roku?",
  "Le libertà costituzionali dentro i luoghi di lavoro":
    "Wolności konstytucyjne wewnątrz miejsc pracy",
  "L'istituzione del salario minimo": "Ustanowienie płacy minimalnej",
  "La settimana di trentacinque ore": "Trzydziestopięciogodzinny tydzień pracy",
  "L'obbligo di iscrizione al sindacato": "Obowiązek zapisania się do związku zawodowego",
  "La legge 300 portò in fabbrica le libertà che la Costituzione garantiva fuori, e vietò il licenziamento senza giusta causa nelle imprese maggiori. Nello stesso anno nacquero le regioni a statuto ordinario.":
    "Ustawa 300 wniosła do fabryki wolności, które konstytucja gwarantowała na zewnątrz, i zakazała zwolnienia bez ważnej przyczyny w większych przedsiębiorstwach. W tym samym roku powstały regiony o statucie zwykłym.",
  "Quale catena montuosa percorre l'Italia da nord a sud?":
    "Które pasmo górskie przebiega Włochy z północy na południe?",
  "Le Alpi": "Alpy",
  "Gli Appennini": "Apeniny",
  "I Pirenei": "Pireneje",
  "Gli Appennini corrono per l'intera penisola e proseguono in Sicilia. Le Alpi chiudono soltanto il lato settentrionale, e le Dolomiti ne sono una parte.":
    "Apeniny biegną przez cały półwysep i przechodzą na Sycylię. Alpy zamykają tylko stronę północną, a Dolomity są ich częścią.",
  "Qual è l'unica grande pianura italiana?": "Która jest jedyną wielką niziną włoską?",
  "Il Tavoliere delle Puglie": "Tavoliere w Apulii",
  "La pianura padana": "Nizina Padańska",
  "La Maremma": "Maremma",
  "La piana di Catania": "Równina Katanii",
  "La pianura padana, attraversata dal Po. Le altre citate sono pianure reali ma molto più piccole: in Italia la pianura copre poco più di un quinto del territorio.":
    "Nizina Padańska, przecięta przez Pad. Pozostałe wymienione to prawdziwe niziny, ale znacznie mniejsze: we Włoszech nizina zajmuje niewiele ponad jedną piątą terytorium.",
  "Con quali Stati confina l'Italia via terra?": "Z którymi państwami Włochy graniczą lądem?",
  "Francia, Svizzera, Austria e Slovenia": "Francja, Szwajcaria, Austria i Słowenia",
  "Francia, Germania, Austria e Croazia": "Francja, Niemcy, Austria i Chorwacja",
  "Francia, Svizzera, Germania e Slovenia": "Francja, Szwajcaria, Niemcy i Słowenia",
  "Svizzera, Austria, Ungheria e Croazia": "Szwajcaria, Austria, Węgry i Chorwacja",
  "Quattro Stati lungo l'arco alpino. La Germania non tocca l'Italia, e la Croazia le sta di fronte sull'Adriatico ma non confina.":
    "Cztery państwa wzdłuż łuku alpejskiego. Niemcy nie dotykają Włoch, a Chorwacja leży naprzeciw nich na Adriatyku, ale nie graniczy.",
  "Qual è il vulcano attivo più grande d'Europa?":
    "Który wulkan jest największym czynnym wulkanem Europy?",
  "Il Vesuvio": "Wezuwiusz",
  "Lo Stromboli": "Stromboli",
  "L'Etna": "Etna",
  "I Campi Flegrei": "Pola Flegrejskie",
  "L'Etna, in Sicilia, che erutta più volte l'anno. Il Vesuvio è più piccolo ma più pericoloso, perché sovrasta un'area densamente abitata.":
    "Etna, na Sycylii, która wybucha kilka razy w roku. Wezuwiusz jest mniejszy, ale groźniejszy, bo góruje nad gęsto zaludnionym obszarem.",
  "Quale regione italiana non è sostanzialmente sismica?":
    "Który region włoski zasadniczo nie jest sejsmiczny?",
  "La Calabria": "Kalabria",
  "L'Umbria": "Umbria",
  "La Sardegna": "Sardynia",
  "Il Friuli Venezia Giulia": "Friuli-Wenecja Julijska",
  "La Sardegna, che sta su una porzione di crosta stabile. Calabria, Umbria e Friuli hanno invece subito terremoti distruttivi in tempi recenti.":
    "Sardynia, która leży na kawałku stabilnej skorupy. Kalabria, Umbria i Friuli doznały natomiast niszczących trzęsień w niedawnych czasach.",
  "Qual è la più grande isola del Mediterraneo?":
    "Która wyspa jest największa na Morzu Śródziemnym?",
  "Cipro": "Cypr",
  "Creta": "Kreta",
  "La Sicilia, seguita dalla Sardegna. Cipro e Creta sono più piccole di entrambe.":
    "Sycylia, a za nią Sardynia. Cypr i Kreta są mniejsze od obu.",
  "Quale montagna è la vetta più alta della catena alpina?":
    "Która góra jest najwyższym szczytem łańcucha alpejskiego?",
  "Il Monte Rosa": "Monte Rosa",
  "Il Gran Paradiso": "Gran Paradiso",
  "Il Cervino": "Matterhorn",
  "Il Monte Bianco": "Mont Blanc",
  "Il Monte Bianco, 4.808 metri. La sovranità della cima è oggetto di una controversia mai risolta con la Francia: le carte dei due paesi non coincidono.":
    "Mont Blanc, 4808 metrów. Zwierzchnictwo nad szczytem jest przedmiotem nigdy nierozstrzygniętego sporu z Francją: mapy obu krajów się nie pokrywają.",
  "Quanto misura all'incirca lo sviluppo costiero italiano?":
    "Ile mniej więcej mierzy linia brzegowa Włoch?",
  "Mille chilometri": "Tysiąc kilometrów",
  "Tremila chilometri": "Trzy tysiące kilometrów",
  "Settemilacinquecento chilometri": "Siedem i pół tysiąca kilometrów",
  "Quindicimila chilometri": "Piętnaście tysięcy kilometrów",
  "Circa settemilacinquecento chilometri fra penisola e isole. Nessun punto del paese è lontanissimo dal mare, e questo ha segnato cucina, commercio e storia.":
    "Około siedmiu i pół tysiąca kilometrów, licząc półwysep i wyspy. Żaden punkt kraju nie leży bardzo daleko od morza, a to naznaczyło kuchnię, handel i historię.",
  "Che cosa sono i Campi Flegrei?": "Czym są Pola Flegrejskie?",
  "Una pianura agricola della Campania": "Niziną rolniczą w Kampanii",
  "Una vasta caldera vulcanica a ovest di Napoli":
    "Rozległą kalderą wulkaniczną na zachód od Neapolu",
  "Un parco nazionale dell'Appennino": "Parkiem narodowym w Apeninach",
  "Un antico sito greco in Calabria": "Starożytnym stanowiskiem greckim w Kalabrii",
  "Una caldera, cioè un'ampia depressione vulcanica, densamente abitata. È sorvegliata di continuo perché il suolo si solleva e si abbassa nel fenomeno chiamato bradisismo.":
    "Kaldera, czyli szerokie zagłębienie wulkaniczne, gęsto zaludniona. Nadzoruje się ją bez przerwy, bo grunt podnosi się i opada w zjawisku zwanym bradyseizmem.",
  "Quale città è stata sepolta dall'eruzione del Vesuvio insieme a Pompei?":
    "Które miasto zostało zasypane przez wybuch Wezuwiusza razem z Pompejami?",
  "Cuma": "Kume",
  "Ercolano": "Herkulanum",
  "Capua": "Kapua",
  "Benevento": "Benewent",
  "Ercolano, insieme a Stabia. Furono coperte da materiali diversi, e per questo a Ercolano si sono conservati anche il legno e i papiri.":
    "Herkulanum, razem ze Stabiami. Przykryły je różne materiały i dlatego w Herkulanum zachowały się także drewno i papirusy.",
  "Perché in Italia si coltiva spesso a terrazze?":
    "Dlaczego we Włoszech często uprawia się na tarasach?",
  "Per ragioni estetiche legate al paesaggio":
    "Ze względów estetycznych związanych z krajobrazem",
  "Perché la pianura è scarsa e gran parte del territorio è collinare o montuoso":
    "Bo nizin jest mało, a większość terytorium jest pagórkowata albo górzysta",
  "Perché lo impone la normativa europea": "Bo nakazują to przepisy europejskie",
  "Per proteggere le colture dal vento marino": "Żeby chronić uprawy przed wiatrem od morza",
  "La pianura copre poco più di un quinto del paese. Terrazzare i pendii è il modo con cui generazioni di agricoltori hanno reso coltivabile ciò che altrimenti non lo era.":
    "Nizina zajmuje niewiele ponad jedną piątą kraju. Tarasowanie stoków to sposób, w jaki pokolenia rolników uczyniły uprawnym to, co inaczej by nie było.",
  "Quale di questi è uno Stato indipendente sull'Appennino romagnolo?":
    "Które z tych jest niepodległym państwem w Apeninie romaniolskim?",
  "Il Principato di Seborga": "Księstwo Seborgi",
  "La Repubblica di San Marino": "Republika San Marino",
  "Il Vaticano": "Watykan",
  "Campione d'Italia": "Campione d'Italia",
  "San Marino, che si dice la più antica repubblica ancora esistente. Il Vaticano è a Roma, e Campione d'Italia è invece un comune italiano circondato dalla Svizzera.":
    "San Marino, o którym mówi się, że jest najstarszą wciąż istniejącą republiką. Watykan jest w Rzymie, a Campione d'Italia to natomiast włoska gmina otoczona Szwajcarią.",
  "Perché il clima italiano non può essere descritto come uno solo?":
    "Dlaczego klimatu włoskiego nie da się opisać jako jednego?",
  "Perché il paese si estende per oltre mille chilometri in latitudine e ha rilievi molto diversi":
    "Bo kraj rozciąga się na ponad tysiąc kilometrów w szerokości geograficznej i ma bardzo różne ukształtowanie",
  "Perché le regioni misurano le temperature con metodi diversi":
    "Bo regiony mierzą temperaturę różnymi metodami",
  "Perché il Mediterraneo cambia temperatura ogni anno":
    "Bo Morze Śródziemne co roku zmienia temperaturę",
  "Perché le Alpi bloccano ogni corrente atlantica": "Bo Alpy blokują każdy prąd atlantycki",
  "Fra Bolzano e Lampedusa corrono più di dieci gradi di temperatura media annua. Le Alpi hanno clima alpino, la pianura padana estati afose e nebbie, le coste clima mediterraneo.":
    "Między Bolzano a Lampedusą jest ponad dziesięć stopni różnicy średniej rocznej temperatury. Alpy mają klimat alpejski, Nizina Padańska parne lata i mgły, a wybrzeża klimat śródziemnomorski.",
  "Quale città è il principale centro economico e finanziario italiano?":
    "Które miasto jest głównym ośrodkiem gospodarczym i finansowym Włoch?",
  "Milano, sede della borsa e della gran parte dei servizi finanziari. Roma è la capitale politica e amministrativa, Torino il centro industriale storico.":
    "Mediolan, siedziba giełdy i większości usług finansowych. Rzym jest stolicą polityczną i administracyjną, a Turyn historycznym ośrodkiem przemysłowym.",
  "Perché l'Italia non ha una sola città che concentri tutto, come Parigi o Londra?":
    "Dlaczego Włochy nie mają jednego miasta, które skupia wszystko, jak Paryż albo Londyn?",
  "Perché la Costituzione lo vieta": "Bo zakazuje tego konstytucja",
  "Perché per quattordici secoli ogni città è stata capitale di qualcosa":
    "Bo przez czternaście wieków każde miasto było stolicą czegoś",
  "Perché le distanze sono troppo grandi": "Bo odległości są zbyt duże",
  "Perché la capitale è stata scelta solo nel 1946": "Bo stolicę wybrano dopiero w 1946 roku",
  "Senza uno Stato unico, ogni città ha avuto il proprio palazzo di governo, il proprio teatro e la propria università, e li ha conservati. Il policentrismo italiano è un'eredità storica, non una scelta amministrativa.":
    "Bez jednego państwa każde miasto miało własny pałac rządowy, własny teatr i własny uniwersytet, i je zachowało. Włoski policentryzm jest dziedzictwem historii, a nie wyborem administracyjnym.",
  "Che cosa si trova ad Agrigento, in Sicilia?": "Co znajduje się w Agrigento na Sycylii?",
  "Il sito di Ercolano": "Stanowisko Herkulanum",
  "La Reggia di Caserta": "Pałac w Casercie",
  "Il Foro romano": "Forum Romanum",
  "La Valle dei Templi, con templi greci del quinto secolo avanti Cristo. La Sicilia fu Magna Grecia prima di essere romana, e in molti punti si vede.":
    "Dolina Świątyń, z greckimi świątyniami z V wieku przed Chrystusem. Sycylia była Wielką Grecją, zanim stała się rzymska, i w wielu miejscach to widać.",
  "Quale sito italiano è iscritto nella lista UNESCO come patrimonio naturale e non culturale?":
    "Który włoski obiekt jest wpisany na listę UNESCO jako dziedzictwo przyrodnicze, a nie kulturowe?",
  "Il centro storico di Siena": "Centrum historyczne Sieny",
  "La laguna di Venezia": "Laguna wenecka",
  "Le Dolomiti sono iscritte per il loro valore paesaggistico e geologico. Venezia e la sua laguna sono invece un sito culturale, che comprende anche l'ambiente in cui la città sta.":
    "Dolomity są wpisane za swoją wartość krajobrazową i geologiczną. Wenecja i jej laguna są natomiast obiektem kulturowym, który obejmuje także środowisko, w którym miasto stoi.",
  "Che cosa significa che un intero centro storico è iscritto come un solo sito?":
    "Co znaczy, że całe centrum historyczne jest wpisane jako jeden obiekt?",
  "Che ogni edificio è di proprietà pubblica": "Że każdy budynek jest własnością publiczną",
  "Che il riconoscimento riguarda il complesso urbano, non i singoli monumenti":
    "Że uznanie dotyczy zespołu miejskiego, a nie pojedynczych zabytków",
  "Che nessun edificio può essere modificato": "Że żadnego budynku nie można zmienić",
  "Che il sito è chiuso ai residenti": "Że obiekt jest zamknięty dla mieszkańców",
  "Roma, Firenze, Venezia, Napoli, Siena, Urbino e Ferrara sono iscritte così: conta il tessuto della città, non l'elenco dei suoi monumenti presi uno per uno.":
    "Rzym, Florencja, Wenecja, Neapol, Siena, Urbino i Ferrara są wpisane właśnie tak: liczy się tkanka miasta, a nie spis jego zabytków branych po kolei.",
  "Quale città italiana è costruita su una laguna?":
    "Które miasto włoskie jest zbudowane na lagunie?",
  "Genova": "Genua",
  "Trieste": "Triest",
  "Ravenna": "Rawenna",
  "Venezia, su un arcipelago di isolette in una laguna. La città e la laguna insieme formano un unico sito del patrimonio mondiale.":
    "Wenecja, na archipelagu wysepek w lagunie. Miasto i laguna razem tworzą jeden obiekt światowego dziedzictwa.",
  "Che cosa si intende per aree interne?": "Co rozumie się przez aree interne?",
  "I quartieri centrali delle grandi città": "Śródmiejskie dzielnice wielkich miast",
  "I territori lontani dai servizi, spesso appenninici, che si stanno spopolando":
    "Obszary oddalone od usług, często apenińskie, które się wyludniają",
  "Le zone industriali del Nord": "Strefy przemysłowe Północy",
  "Le regioni senza sbocco sul mare": "Regiony bez dostępu do morza",
  "Paesi distanti da scuole, ospedali e stazioni, dove la popolazione cala e i servizi chiudono. Sono l'esatto rovescio dell'affollamento turistico, e spesso stanno a poche decine di chilometri da esso.":
    "Miejscowości daleko od szkół, szpitali i dworców, gdzie ludności ubywa, a usługi się zamykają. Są dokładnym odwróceniem turystycznego tłoku, a często leżą kilkadziesiąt kilometrów od niego.",
  "Quale problema colpisce i centri storici di Venezia e Firenze?":
    "Który problem dotyka centrów historycznych Wenecji i Florencji?",
  "L'abbandono da parte dei turisti": "Porzucenie przez turystów",
  "La diminuzione dei residenti mentre crescono gli affitti brevi":
    "Ubywanie mieszkańców przy rosnącej liczbie najmów krótkoterminowych",
  "La mancanza di collegamenti ferroviari": "Brak połączeń kolejowych",
  "Il divieto di ristrutturare gli edifici": "Zakaz remontowania budynków",
  "In alcune giornate i visitatori superano gli abitanti, e chi vive in centro se ne va perché le case diventano alloggi turistici. È il rovescio del successo, e le due città lo affrontano con misure diverse.":
    "W niektóre dni odwiedzających jest więcej niż mieszkańców, a ci, którzy mieszkają w centrum, wyprowadzają się, bo domy stają się kwaterami turystycznymi. To odwrotna strona sukcesu, a oba miasta mierzą się z nią inaczej.",
  "Quale città è considerata la capitale del Mezzogiorno?":
    "Które miasto uchodzi za stolicę Mezzogiorno?",
  "Bari": "Bari",
  "Palermo": "Palermo",
  "Catania": "Katania",
  "Napoli, capitale di un regno per secoli e oggi la maggiore città del Sud. Palermo è la capitale della Sicilia e Bari il principale porto adriatico meridionale.":
    "Neapol, przez stulecia stolica królestwa, a dziś największe miasto Południa. Palermo jest stolicą Sycylii, a Bari głównym portem adriatyckim na południu.",
  "Che cosa può essere iscritto nella lista UNESCO oltre a monumenti e paesaggi?":
    "Co poza zabytkami i krajobrazami może zostać wpisane na listę UNESCO?",
  "Nulla: la lista comprende solo beni materiali": "Nic: lista obejmuje tylko dobra materialne",
  "Anche pratiche immateriali, come un'arte o un saper fare":
    "Także praktyki niematerialne, jak sztuka albo umiejętność",
  "Solo edifici anteriori al Settecento": "Tylko budynki sprzed XVIII wieku",
  "Solo siti di proprietà statale": "Tylko obiekty będące własnością państwa",
  "Esiste una lista del patrimonio culturale immateriale, in cui l'Italia è presente fra l'altro con l'arte del pizzaiuolo napoletano. Non tutto ciò che si tutela è fatto di pietra.":
    "Istnieje lista niematerialnego dziedzictwa kulturowego, na której Włochy są obecne między innymi sztuką neapolitańskiego pizzaiuolo. Nie wszystko, co się chroni, jest z kamienia.",
  "Quale città fu il centro industriale storico dell'Italia?":
    "Które miasto było historycznym ośrodkiem przemysłowym Włoch?",
  "Verona": "Werona",
  "Torino, attorno all'automobile. Insieme a Milano e Genova formava il triangolo industriale verso cui si mosse la migrazione interna del dopoguerra.":
    "Turyn, wokół samochodu. Razem z Mediolanem i Genuą tworzył trójkąt przemysłowy, ku któremu ruszyła powojenna migracja wewnętrzna.",
  "In quale città si trova il porto di Roma dell'età antica?":
    "W którym mieście znajduje się port Rzymu z czasów starożytnych?",
  "A Civitavecchia": "W Civitavecchii",
  "A Ostia": "W Ostii",
  "Ad Anzio": "W Anzio",
  "Ostia antica, alla foce del Tevere. Non fu sepolta da un'eruzione ma abbandonata lentamente, e per questo si è conservata in modo diverso da Pompei.":
    "Ostia antica, u ujścia Tybru. Nie zasypał jej wybuch, lecz porzucono ją powoli, i dlatego zachowała się inaczej niż Pompeje.",
  "Che cos'è il patrimonio diffuso italiano?": "Czym jest włoskie patrimonio diffuso?",
  "L'insieme dei musei statali": "Zbiorem muzeów państwowych",
  "Le migliaia di piccoli centri storici che nessuna lista riesce a contenere":
    "Tysiącami małych centrów historycznych, których żadna lista nie zdoła pomieścić",
  "Il fondo per il restauro delle chiese": "Funduszem na renowację kościołów",
  "L'archivio digitale dei beni culturali": "Cyfrowym archiwum dóbr kultury",
  "Accanto ai siti iscritti c'è un patrimonio distribuito in migliaia di borghi, pievi e centri minori. È una delle ragioni per cui in Italia il paesaggio culturale non si esaurisce nelle città d'arte.":
    "Obok wpisanych obiektów jest dziedzictwo rozłożone w tysiącach miasteczek, kościołów i mniejszych ośrodków. To jeden z powodów, dla których we Włoszech krajobraz kulturowy nie wyczerpuje się w miastach sztuki.",
  "Dove si concentra il distretto italiano dell'occhialeria?":
    "Gdzie skupia się włoski dystrykt optyczny?",
  "Nel Bellunese": "W Bellunese",
  "Nel Salento": "W Salento",
  "In Brianza": "W Brianzy",
  "Nella Valle d'Aosta": "W Dolinie Aosty",
  "Nel Bellunese, in Veneto: una valle alpina che produce una quota rilevante degli occhiali venduti nel mondo. È l'esempio più citato di distretto.":
    "W Bellunese, w Wenecji Euganejskiej: alpejska dolina, która wytwarza znaczną część okularów sprzedawanych na świecie. To najczęściej przywoływany przykład dystryktu.",
  "Quale distretto industriale ha sede a Sassuolo?":
    "Który dystrykt przemysłowy ma siedzibę w Sassuolo?",
  "La meccanica di precisione": "Mechanika precyzyjna",
  "La ceramica e le piastrelle": "Ceramika i płytki",
  "Le calzature": "Obuwie",
  "Gli elettrodomestici": "Sprzęt AGD",
  "La ceramica, nata attorno all'argilla locale ed esportata ovunque. Le calzature stanno soprattutto nelle Marche e in Veneto.":
    "Ceramika, zrodzona wokół miejscowej gliny i wywożona wszędzie. Obuwie stoi przede wszystkim w Marche i w Wenecji Euganejskiej.",
  "Da quale tipo di imprese è composta soprattutto l'economia italiana?":
    "Z jakiego rodzaju przedsiębiorstw składa się przede wszystkim gospodarka włoska?",
  "Da grandi gruppi industriali": "Z wielkich grup przemysłowych",
  "Da piccole e medie imprese": "Z małych i średnich przedsiębiorstw",
  "Da imprese pubbliche": "Z przedsiębiorstw państwowych",
  "Da multinazionali estere": "Z zagranicznych korporacji",
  "L'Italia ha pochissimi gruppi molto grandi e moltissime imprese piccole, spesso familiari. Messe insieme per territorio, funzionano come una grande azienda distribuita.":
    "Włochy mają bardzo niewiele bardzo dużych grup i mnóstwo małych firm, często rodzinnych. Zebrane razem na jednym terenie działają jak jedno wielkie rozproszone przedsiębiorstwo.",
  "Quale settore italiano esporta di più fra questi?":
    "Który sektor włoski eksportuje najwięcej spośród tych?",
  "La meccanica": "Mechanika",
  "L'editoria": "Wydawnictwa",
  "La cantieristica navale da diporto": "Budowa jachtów",
  "L'industria mineraria": "Przemysł wydobywczy",
  "La meccanica, in particolare le macchine per il confezionamento e l'automazione, concentrate lungo la via Emilia. È la A di automazione fra le quattro dell'export.":
    "Mechanika, w szczególności maszyny pakujące i automatyka, skupione wzdłuż via Emilia. To A od automazione wśród czterech A eksportu.",
  "Che cosa indica il divario Nord-Sud?": "Co oznacza podział Północ-Południe?",
  "La differenza di clima fra le due parti del paese":
    "Różnicę klimatu między dwiema częściami kraju",
  "La differenza di reddito, occupazione e servizi fra Mezzogiorno e Centro-Nord":
    "Różnicę dochodu, zatrudnienia i usług między Mezzogiorno a Centrum i Północą",
  "La distanza chilometrica fra le due estremità":
    "Odległość w kilometrach między dwoma krańcami",
  "La diversa densità di popolazione": "Różną gęstość zaludnienia",
  "Reddito per abitante più basso, disoccupazione più alta e occupazione femminile molto minore. È la questione economica più antica del paese, aperta con l'Unità e mai chiusa.":
    "Niższy dochód na mieszkańca, wyższe bezrobocie i znacznie niższe zatrudnienie kobiet. To najstarsza kwestia gospodarcza kraju, otwarta wraz ze zjednoczeniem i nigdy niezamknięta.",
  "Da che cosa deriva l'alto debito pubblico italiano?":
    "Skąd bierze się wysoki dług publiczny Włoch?",
  "Dalla ricostruzione postbellica": "Z odbudowy powojennej",
  "Da decenni di spesa a deficit, soprattutto negli anni Ottanta":
    "Z dziesięcioleci wydatków na deficyt, zwłaszcza w latach osiemdziesiątych",
  "Dall'ingresso nell'euro": "Z wejścia do strefy euro",
  "Dalla crisi finanziaria del 2008": "Z kryzysu finansowego z 2008 roku",
  "Il rapporto fra debito e prodotto è cresciuto soprattutto negli anni Ottanta. Da allora serve un avanzo primario costante solo per non farlo aumentare, il che riduce lo spazio per investire.":
    "Stosunek długu do produktu urósł przede wszystkim w latach osiemdziesiątych. Od tego czasu potrzebna jest stała nadwyżka pierwotna tylko po to, żeby nie rósł, co ogranicza pole do inwestowania.",
  "Che cosa caratterizza la demografia italiana attuale?":
    "Co cechuje dzisiejszą demografię Włoch?",
  "Una natalità fra le più basse del mondo e una popolazione che invecchia":
    "Jedna z najniższych na świecie dzietność i starzejąca się ludność",
  "Una crescita rapida della popolazione giovane": "Szybki wzrost ludności młodej",
  "Un equilibrio stabile fra nascite e decessi": "Trwała równowaga między urodzeniami a zgonami",
  "Un aumento della natalità dal 2000": "Wzrost dzietności od 2000 roku",
  "La natalità è fra le più basse al mondo e l'età media fra le più alte d'Europa. È uno dei tre nodi aperti dell'economia, insieme al debito e alla partenza dei giovani laureati.":
    "Dzietność należy do najniższych na świecie, a średni wiek do najwyższych w Europie. To jeden z trzech otwartych węzłów gospodarki, obok długu i wyjazdu młodych absolwentów.",
  "Quale di queste è una delle quattro A dell'export italiano?":
    "Które z tych jest jednym z czterech A włoskiego eksportu?",
  "Acciaio": "Acciaio",
  "Arredamento": "Arredamento",
  "Agricoltura": "Agricoltura",
  "Aeronautica": "Aeronautica",
  "Arredamento, insieme ad abbigliamento, automazione e alimentare. Le altre voci esistono nell'economia italiana ma non fanno parte della formula.":
    "Arredamento, obok abbigliamento, automazione i alimentare. Pozostałe pozycje istnieją we włoskiej gospodarce, ale nie należą do tej formuły.",
  "Perché piccola impresa non significa impresa arretrata?":
    "Dlaczego mała firma nie znaczy firma zacofana?",
  "Perché tutte le piccole imprese ricevono aiuti pubblici":
    "Bo wszystkie małe firmy dostają pomoc publiczną",
  "Perché molte sono leader mondiali nella propria nicchia specializzata":
    "Bo wiele z nich jest światowymi liderami w swojej wyspecjalizowanej niszy",
  "Perché sono esenti da imposte fino a dieci dipendenti":
    "Bo są zwolnione z podatków do dziesięciu pracowników",
  "Perché sono tutte di proprietà straniera": "Bo wszystkie należą do zagranicznych właścicieli",
  "Aziende con poche decine di dipendenti fanno una cosa sola e la fanno meglio di chiunque altro al mondo. La specializzazione sostituisce la scala.":
    "Firmy z kilkudziesięcioma pracownikami robią jedną rzecz i robią ją lepiej niż ktokolwiek inny na świecie. Specjalizacja zastępuje skalę.",
  "Quale fenomeno riguarda i giovani laureati italiani?":
    "Które zjawisko dotyczy młodych włoskich absolwentów?",
  "Un ritorno massiccio dall'estero": "Masowy powrót z zagranicy",
  "Una partenza verso altri paesi dopo la formazione":
    "Wyjazd do innych krajów po zakończeniu nauki",
  "Un aumento dell'occupazione nel settore pubblico":
    "Wzrost zatrudnienia w sektorze publicznym",
  "Una diminuzione delle iscrizioni universitarie all'estero":
    "Spadek zapisów na uczelnie za granicą",
  "Molti lasciano il paese dopo gli studi. L'Italia forma persone che poi lavorano altrove, e questo pesa sui conti tanto quanto sull'economia.":
    "Wielu opuszcza kraj po studiach. Włochy kształcą ludzi, którzy potem pracują gdzie indziej, a to obciąża rachunki tak samo jak gospodarkę.",
  "In quale zona si concentra il distretto meccanico italiano?":
    "W którym rejonie skupia się włoski dystrykt mechaniczny?",
  "Lungo la via Emilia": "Wzdłuż via Emilia",
  "In Sardegna": "Na Sardynii",
  "Nel Molise": "W Molise",
  "Lungo la via Emilia, fra Bologna, Modena, Reggio e Parma: macchine per il packaging, motori, automazione. È il settore che esporta di più.":
    "Wzdłuż via Emilia, między Bolonią, Modeną, Reggio i Parmą: maszyny pakujące, silniki, automatyka. To sektor, który eksportuje najwięcej.",
  "Come nascono di solito i distretti industriali italiani?":
    "Jak zwykle powstają włoskie dystrykty przemysłowe?",
  "Da piani di sviluppo statali": "Z państwowych planów rozwoju",
  "Da un mestiere già presente sul territorio, spesso artigiano":
    "Z rzemiosła już obecnego na danym terenie, często warsztatowego",
  "Dall'insediamento di multinazionali": "Z osiedlenia się korporacji",
  "Da fondi europei degli anni Novanta": "Z funduszy europejskich lat dziewięćdziesiątych",
  "Non sono stati progettati a tavolino: sono cresciuti dove esisteva già una tradizione di bottega, e si sono specializzati passandosi il lavoro fra imprese vicine.":
    "Nie zaprojektowano ich przy biurku: wyrosły tam, gdzie istniała już tradycja warsztatu, i wyspecjalizowały się, przekazując sobie pracę między sąsiednimi firmami.",
  "Quale voce dell'economia italiana è legata direttamente al patrimonio culturale?":
    "Która pozycja włoskiej gospodarki jest bezpośrednio związana z dziedzictwem kulturowym?",
  "La siderurgia": "Hutnictwo",
  "La chimica di base": "Chemia podstawowa",
  "L'estrazione mineraria": "Wydobycie kopalin",
  "Il turismo è una delle principali voci dell'economia, e poggia in gran parte sul patrimonio artistico e paesaggistico. Da qui anche i problemi di concentrazione nelle città d'arte.":
    "Turystyka jest jedną z głównych pozycji gospodarki i opiera się w dużej mierze na dziedzictwie artystycznym i krajobrazowym. Stąd też problemy z natłokiem w miastach sztuki.",
  "Quale articolo della Costituzione fonda l'adesione italiana all'Unione europea?":
    "Który artykuł konstytucji stanowi podstawę przystąpienia Włoch do Unii Europejskiej?",
  "L'articolo 117": "Artykuł 117",
  "L'articolo 11 consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace. È lo stesso articolo che ripudia la guerra.":
    "Artykuł 11 dopuszcza ograniczenia suwerenności konieczne dla porządku zapewniającego pokój. To ten sam artykuł, który odrzuca wojnę.",
  "Quale comunità europea nasce nel 1951 con l'Italia fra i fondatori?":
    "Która wspólnota europejska powstaje w 1951 roku z Włochami wśród założycieli?",
  "La CEE": "EWG",
  "La CECA": "EWWiS",
  "L'Euratom": "Euratom",
  "L'Unione europea": "Unia Europejska",
  "La Comunità europea del carbone e dell'acciaio. CEE ed Euratom nascono nel 1957 con i Trattati di Roma, e l'Unione europea nel 1992 a Maastricht.":
    "Europejska Wspólnota Węgla i Stali. EWG i Euratom powstają w 1957 roku traktatami rzymskimi, a Unia Europejska w 1992 w Maastricht.",
  "In quale anno l'Italia è ammessa all'ONU?": "W którym roku Włochy zostają przyjęte do ONZ?",
  "Nel 1945": "W 1945",
  "Nel 1955, dieci anni dopo la fondazione: l'ammissione era rimasta bloccata dalle tensioni della guerra fredda e fu sbloccata insieme a quella di altri paesi.":
    "W 1955, dziesięć lat po założeniu: przyjęcie było zablokowane napięciami zimnej wojny i odblokowano je razem z przyjęciem innych krajów.",
  "In quale città furono firmati i trattati che istituirono la CEE?":
    "W którym mieście podpisano traktaty ustanawiające EWG?",
  "A Bruxelles": "W Brukseli",
  "A Roma": "W Rzymie",
  "A Parigi": "W Paryżu",
  "A Maastricht": "W Maastricht",
  "In Campidoglio, a Roma, il 25 marzo 1957. La sede della firma non è un dettaglio: l'Italia non è entrata in un'Europa già esistente, l'ha costruita.":
    "Na Kapitolu, w Rzymie, 25 marca 1957 roku. Miejsce podpisania nie jest szczegółem: Włochy nie weszły do już istniejącej Europy, tylko ją zbudowały.",
  "Da quando l'euro esiste come moneta di conto, prima delle banconote?":
    "Od kiedy euro istnieje jako waluta rozliczeniowa, przed banknotami?",
  "Dal 1992": "Od 1992",
  "Dal 1999": "Od 1999",
  "Dal 2002": "Od 2002",
  "Dal 2004": "Od 2004",
  "Dal 1999 i cambi sono fissati e l'euro esiste nei conti; dal 1º gennaio 2002 circolano banconote e monete. La lira era nata nel 1862.":
    "Od 1999 kursy są ustalone i euro istnieje na rachunkach; od 1 stycznia 2002 krążą banknoty i monety. Lir narodził się w 1862 roku.",
  "Che cos'è lo spazio Schengen?": "Czym jest strefa Schengen?",
  "L'area in cui circola l'euro": "Obszarem, na którym krąży euro",
  "L'area in cui i controlli alle frontiere interne sono aboliti":
    "Obszarem, na którym zniesiono kontrole na granicach wewnętrznych",
  "L'unione doganale europea": "Europejską unią celną",
  "Il mercato unico dei servizi": "Jednolitym rynkiem usług",
  "Riguarda la circolazione delle persone senza controlli alle frontiere interne. Non coincide con l'area dell'euro: alcuni paesi stanno in una e non nell'altra.":
    "Dotyczy przemieszczania się osób bez kontroli na granicach wewnętrznych. Nie pokrywa się ze strefą euro: niektóre kraje są w jednej, a nie ma ich w drugiej.",
  "Quale organizzazione con sede a Roma si occupa di aiuti alimentari d'emergenza?":
    "Która organizacja z siedzibą w Rzymie zajmuje się awaryjną pomocą żywnościową?",
  "La FAO": "FAO",
  "Il Programma alimentare mondiale": "Światowy Program Żywnościowy",
  "L'OMS": "WHO",
  "L'UNESCO": "UNESCO",
  "Il Programma alimentare mondiale, che con FAO e IFAD fa di Roma la capitale internazionale dei temi dell'alimentazione. L'OMS sta a Ginevra e l'UNESCO a Parigi.":
    "Światowy Program Żywnościowy, który wraz z FAO i IFAD czyni z Rzymu międzynarodową stolicę spraw żywności. WHO mieści się w Genewie, a UNESCO w Paryżu.",
  "L'italiano è una delle lingue ufficiali dell'Unione europea?":
    "Czy włoski jest jednym z języków urzędowych Unii Europejskiej?",
  "No, le lingue ufficiali sono solo tre": "Nie, języki urzędowe są tylko trzy",
  "Sì": "Tak",
  "Solo per i documenti che riguardano l'Italia": "Tylko dla dokumentów dotyczących Włoch",
  "Solo dal 2004": "Dopiero od 2004 roku",
  "L'italiano è lingua ufficiale dell'Unione fin dall'inizio, come lingua di uno degli Stati fondatori: tutti gli atti vengono pubblicati anche in italiano.":
    "Włoski jest językiem urzędowym Unii od samego początku, jako język jednego z państw założycielskich: wszystkie akty ogłasza się także po włosku.",
  "Qual è oggi la comunità straniera più numerosa in Italia?":
    "Która społeczność cudzoziemska jest dziś najliczniejsza we Włoszech?",
  "Quella romena": "Rumuńska",
  "Quella cinese": "Chińska",
  "Quella marocchina": "Marokańska",
  "Quella albanese": "Albańska",
  "La comunità romena è la più numerosa fra i circa cinque milioni di cittadini stranieri residenti. Albanese e marocchina sono fra le più antiche per insediamento.":
    "Społeczność rumuńska jest najliczniejsza spośród około pięciu milionów cudzoziemców mieszkających w kraju. Albańska i marokańska należą do najstarszych osiedleniem.",
  "Verso quali destinazioni si diresse principalmente l'emigrazione italiana?":
    "Ku jakim kierunkom szła głównie emigracja włoska?",
  "Verso le Americhe prima e l'Europa del Nord poi":
    "Najpierw ku obu Amerykom, a potem ku Europie Północnej",
  "Verso l'Africa settentrionale": "Ku Afryce Północnej",
  "Verso l'Asia orientale": "Ku Azji Wschodniej",
  "Verso l'Europa dell'Est": "Ku Europie Wschodniej",
  "Prima Stati Uniti, Argentina e Brasile; dopo la Seconda guerra mondiale soprattutto Germania, Svizzera, Belgio e Francia. Da lì le grandi comunità di origine italiana nel mondo.":
    "Najpierw Stany Zjednoczone, Argentyna i Brazylia; po drugiej wojnie światowej przede wszystkim Niemcy, Szwajcaria, Belgia i Francja. Stąd wielkie społeczności włoskiego pochodzenia na świecie.",
  "In quale decennio il saldo migratorio italiano si inverte, da paese di partenza a paese di arrivo?":
    "W którym dziesięcioleciu włoskie saldo migracyjne się odwraca, z kraju wyjazdu na kraj przyjazdu?",
  "Negli anni Sessanta": "W latach sześćdziesiątych",
  "Negli anni Ottanta": "W latach osiemdziesiątych",
  "Negli anni Duemila": "W latach dwutysięcznych",
  "Negli anni Dieci": "W latach dziesiątych",
  "Negli anni Ottanta. Il paese che aveva visto partire ventisei milioni di persone comincia a riceverne, e nel giro di una generazione il dibattito pubblico cambia del tutto.":
    "W latach osiemdziesiątych. Kraj, z którego wyjechało dwadzieścia sześć milionów ludzi, zaczyna ich przyjmować, a w ciągu pokolenia debata publiczna zmienia się całkowicie.",
  "Di quale gruppo di grandi economie fa parte l'Italia?":
    "Do której grupy wielkich gospodarek należą Włochy?",
  "Del G7": "Do G7",
  "Del Consiglio nordico": "Do Rady Nordyckiej",
  "Del Mercosur": "Do Mercosuru",
  "Dell'ASEAN": "Do ASEAN",
  "Del G7 e del G20. Le altre organizzazioni citate riuniscono paesi di altre aree del mondo.":
    "Do G7 i do G20. Pozostałe wymienione organizacje skupiają kraje z innych obszarów świata.",
  "Perché la posizione geografica rende l'Italia una frontiera esterna dell'Unione europea?":
    "Dlaczego położenie geograficzne czyni z Włoch zewnętrzną granicę Unii Europejskiej?",
  "Perché confina con quattro Stati non europei":
    "Bo graniczą z czterema państwami spoza Europy",
  "Perché si estende al centro del Mediterraneo, fra Europa e Africa":
    "Bo rozciągają się pośrodku Morza Śródziemnego, między Europą a Afryką",
  "Perché non fa parte dello spazio Schengen": "Bo nie należą do strefy Schengen",
  "Perché ha il litorale più corto dell'Unione": "Bo mają najkrótszą linię brzegową w Unii",
  "La penisola e le isole si spingono verso sud fino a Lampedusa, più vicina all'Africa che alla Sicilia. Da qui il ruolo dell'Italia nel dibattito europeo sulle frontiere marittime.":
    "Półwysep i wyspy sięgają na południe aż po Lampedusę, bliższą Afryce niż Sycylii. Stąd rola Włoch w europejskiej debacie o granicach morskich.",
  "Che cosa significa la sigla CCNL?": "Co oznacza skrót CCNL?",
  "Contratto collettivo nazionale di lavoro": "Contratto collettivo nazionale di lavoro",
  "Consiglio consultivo nazionale del lavoro": "Consiglio consultivo nazionale del lavoro",
  "Codice civile nazionale del lavoro": "Codice civile nazionale del lavoro",
  "Cassa contributiva nazionale dei lavoratori": "Cassa contributiva nazionale dei lavoratori",
  "Il contratto collettivo nazionale di lavoro, firmato per ciascun settore dalle organizzazioni dei datori e dai sindacati. In Italia le condizioni minime si fissano per settore, non per azienda.":
    "Krajowy układ zbiorowy pracy, podpisywany dla każdej branży przez organizacje pracodawców i związki zawodowe. We Włoszech warunki minimalne ustala się dla branży, a nie dla firmy.",
  "Quale articolo della Costituzione richiede una retribuzione sufficiente a un'esistenza libera e dignitosa?":
    "Który artykuł konstytucji wymaga wynagrodzenia wystarczającego na wolne i godne życie?",
  "L'articolo 4": "Artykuł 4",
  "L'articolo 36": "Artykuł 36",
  "L'articolo 36. L'articolo 4 riconosce il diritto al lavoro e il 40 il diritto di sciopero: tre articoli spesso citati insieme e facili da scambiare.":
    "Artykuł 36. Artykuł 4 uznaje prawo do pracy, a 40 prawo do strajku: trzy artykuły często cytowane razem i łatwe do pomylenia.",
  "Quale ente incassa i contributi previdenziali e paga le pensioni?":
    "Która instytucja pobiera składki ubezpieczeniowe i wypłaca emerytury?",
  "L'INAIL": "INAIL",
  "L'INPS": "INPS",
  "L'Agenzia delle entrate": "Agenzia delle entrate",
  "Il Ministero del lavoro": "Ministerstwo pracy",
  "L'INPS. L'INAIL assicura invece contro gli infortuni sul lavoro e le malattie professionali: due enti distinti che accompagnano ogni rapporto di lavoro.":
    "INPS. INAIL ubezpiecza natomiast od wypadków przy pracy i chorób zawodowych: dwie odrębne instytucje, które towarzyszą każdemu stosunkowi pracy.",
  "Contro che cosa assicura l'INAIL?": "Od czego ubezpiecza INAIL?",
  "Contro la disoccupazione": "Od bezrobocia",
  "Contro gli infortuni sul lavoro e le malattie professionali":
    "Od wypadków przy pracy i chorób zawodowych",
  "Contro il fallimento dell'azienda": "Od upadłości firmy",
  "Contro i danni a terzi": "Od szkód wyrządzonych osobom trzecim",
  "Infortuni e malattie professionali. L'indennità di disoccupazione è invece pagata dall'INPS.":
    "Od wypadków i chorób zawodowych. Zasiłek dla bezrobotnych wypłaca natomiast INPS.",
  "Quali sono le tre confederazioni sindacali storiche italiane?":
    "Które trzy konfederacje związkowe są historycznymi konfederacjami włoskimi?",
  "CGIL, CISL e UIL": "CGIL, CISL i UIL",
  "CGIL, INPS e INAIL": "CGIL, INPS i INAIL",
  "CISL, CNEL e UIL": "CISL, CNEL i UIL",
  "UIL, CCNL e CGIL": "UIL, CCNL i CGIL",
  "CGIL, CISL e UIL, nate dalla scissione del sindacato unitario del dopoguerra lungo linee politiche. INPS e INAIL sono enti pubblici, e il CNEL è un organo di consulenza.":
    "CGIL, CISL i UIL, zrodzone z rozłamu powojennego jednolitego związku wzdłuż linii politycznych. INPS i INAIL to instytucje publiczne, a CNEL organ doradczy.",
  "Quante settimane di ferie retribuite spettano come minimo ogni anno?":
    "Ile tygodni płatnego urlopu przysługuje co roku co najmniej?",
  "Quattro settimane, di cui almeno due da godere nell'anno di maturazione. I contratti collettivi possono prevederne di più, mai di meno.":
    "Cztery tygodnie, z czego co najmniej dwa do wykorzystania w roku nabycia. Układy zbiorowe mogą przewidzieć więcej, nigdy mniej.",
  "Che cosa distingue il lavoro con partita IVA?": "Co odróżnia pracę na partita IVA?",
  "Si riceve una busta paga come i dipendenti":
    "Dostaje się pasek płacowy jak pracownicy najemni",
  "Si emette fattura e si versano da sé imposte e contributi":
    "Wystawia się fakturę i samemu odprowadza podatki i składki",
  "Il datore paga tutti i contributi": "Wszystkie składki płaci pracodawca",
  "Non si pagano imposte sul reddito": "Nie płaci się podatku dochodowego",
  "È lavoro autonomo: niente busta paga, niente ferie retribuite e nessuna trattenuta a monte. Imposte e contributi li versa direttamente chi lavora.":
    "To praca na własny rachunek: żadnego paska płacowego, żadnego płatnego urlopu i żadnych potrąceń u źródła. Podatki i składki odprowadza bezpośrednio pracujący.",
  "Che cosa serve per licenziare un dipendente a tempo indeterminato?":
    "Czego trzeba, żeby zwolnić pracownika zatrudnionego na czas nieokreślony?",
  "Nulla: basta il preavviso": "Niczego: wystarczy wypowiedzenie",
  "Una giusta causa o un giustificato motivo": "Ważnej przyczyny albo uzasadnionego powodu",
  "L'autorizzazione del sindacato": "Zgody związku zawodowego",
  "Il consenso dell'ispettorato del lavoro": "Zgody inspekcji pracy",
  "Il tempo indeterminato non rende impossibile il licenziamento: lo condiziona a una ragione riconosciuta. Senza di essa il provvedimento è impugnabile davanti al giudice del lavoro.":
    "Czas nieokreślony nie czyni zwolnienia niemożliwym: uzależnia je od uznanej przyczyny. Bez niej decyzję można zaskarżyć przed sądem pracy.",
  "Che cos'è l'apprendistato?": "Czym jest apprendistato?",
  "Un periodo di prova non retribuito": "Nieodpłatnym okresem próbnym",
  "Un contratto che unisce lavoro e formazione, rivolto ai giovani":
    "Umową, która łączy pracę i kształcenie, skierowaną do młodych",
  "Un tirocinio universitario obbligatorio": "Obowiązkowym stażem uniwersyteckim",
  "Un corso serale organizzato dalle regioni": "Kursem wieczorowym organizowanym przez regiony",
  "È un vero contratto di lavoro, retribuito, che affianca alla prestazione un percorso formativo, con contributi ridotti per il datore.":
    "To prawdziwa umowa o pracę, płatna, która obok świadczenia pracy zapewnia ścieżkę kształcenia, ze zmniejszonymi składkami dla pracodawcy.",
  "In che anno è stato approvato lo Statuto dei lavoratori?":
    "W którym roku uchwalono Statuto dei lavoratori?",
  "Nel 1970, la legge 300. Portò le libertà costituzionali dentro i luoghi di lavoro e limitò il licenziamento nelle imprese maggiori. Il 1978 è invece l'anno del Servizio sanitario nazionale.":
    "W 1970 roku, ustawa 300. Wniosła wolności konstytucyjne do miejsc pracy i ograniczyła zwolnienia w większych przedsiębiorstwach. Rok 1978 to natomiast rok Servizio sanitario nazionale.",
  "Perché il contratto a tempo determinato ha limiti di durata e di rinnovo?":
    "Dlaczego umowa na czas określony ma ograniczenia długości i liczby przedłużeń?",
  "Per ridurre il costo del lavoro": "Żeby obniżyć koszt pracy",
  "Per impedire che diventi un rapporto permanente senza le tutele di uno stabile":
    "Żeby nie stała się stosunkiem trwałym bez zabezpieczeń stałego zatrudnienia",
  "Per favorire le assunzioni stagionali": "Żeby sprzyjać zatrudnieniu sezonowemu",
  "Per uniformarsi a un regolamento europeo del 2001":
    "Żeby dostosować się do rozporządzenia europejskiego z 2001 roku",
  "Senza limiti si potrebbe tenere una persona a termine per tutta la vita lavorativa. I tetti servono a evitare che la precarietà diventi la forma normale del rapporto.":
    "Bez ograniczeń można by trzymać człowieka na czas określony przez całe życie zawodowe. Pułapy służą temu, żeby niepewność nie stała się normalną formą stosunku pracy.",
  "Che cosa sono i contributi previdenziali in busta paga?":
    "Czym są składki ubezpieczeniowe na pasku płacowym?",
  "Una tassa sul reddito": "Podatkiem od dochodu",
  "Le somme versate all'INPS che costruiscono il diritto alla pensione":
    "Kwotami odprowadzanymi do INPS, które budują prawo do emerytury",
  "Un contributo volontario al sindacato": "Dobrowolną składką na rzecz związku zawodowego",
  "Un accantonamento restituito ogni anno": "Odłożoną kwotą zwracaną co roku",
  "Sono la differenza principale fra lordo e netto insieme all'IRPEF, e non sono un'imposta: costruiscono la posizione previdenziale di chi lavora.":
    "Są, obok IRPEF, główną różnicą między brutto a netto, i nie są podatkiem: budują pozycję ubezpieczeniową pracującego.",
  "Quale conseguenza ha l'assenza di un salario minimo legale in Italia?":
    "Jaki skutek ma brak ustawowej płacy minimalnej we Włoszech?",
  "Che nessun lavoratore ha un minimo garantito":
    "Że żaden pracownik nie ma zagwarantowanego minimum",
  "Che il minimo dipende dal contratto collettivo applicato, e chi non ne ha uno resta scoperto":
    "Że minimum zależy od stosowanego układu zbiorowego, a kto go nie ma, zostaje bez ochrony",
  "Che i minimi li fissa ogni regione": "Że minima ustala każdy region",
  "Che il minimo è stabilito ogni anno dal bilancio dello Stato":
    "Że minimum ustala co roku budżet państwa",
  "I minimi stanno nei CCNL, che coprono la gran parte ma non la totalità dei rapporti. Chi lavora in un settore senza contratto applicato non ha quella protezione: è la ragione per cui il tema si discute da anni.":
    "Minima stoją w CCNL, które obejmują większość, ale nie całość stosunków pracy. Kto pracuje w branży bez stosowanego układu, nie ma tej ochrony: to powód, dla którego temat dyskutuje się od lat.",
  "Come è finanziato il Servizio sanitario nazionale?":
    "Jak finansowany jest Servizio sanitario nazionale?",
  "Con premi assicurativi individuali": "Z indywidualnych składek ubezpieczeniowych",
  "Con la fiscalità generale": "Z ogólnych podatków",
  "Con i contributi versati dai soli lavoratori dipendenti":
    "Ze składek odprowadzanych wyłącznie przez pracowników najemnych",
  "Con i ticket pagati dai pazienti": "Z dopłat wnoszonych przez pacjentów",
  "Dalle tasse, non da un premio assicurativo. È la differenza di fondo rispetto al vecchio sistema delle casse mutue, in cui la copertura dipendeva dalla categoria professionale.":
    "Z podatków, a nie ze składki ubezpieczeniowej. To zasadnicza różnica wobec dawnego systemu kas wzajemnych, w którym pokrycie zależało od kategorii zawodowej.",
  "Chi gestisce concretamente la sanità in Italia?":
    "Kto konkretnie zarządza ochroną zdrowia we Włoszech?",
  "Lo Stato centrale": "Państwo centralne",
  "Le regioni": "Regiony",
  "I comuni": "Gminy",
  "Le province": "Prowincje",
  "Le regioni organizzano aziende sanitarie e ospedali. Da qui differenze reali di attesa e organizzazione, e la mobilità sanitaria di chi si sposta per curarsi.":
    "Regiony organizują zakłady opieki zdrowotnej i szpitale. Stąd realne różnice w kolejkach i organizacji oraz migracja zdrowotna tych, którzy przemieszczają się, żeby się leczyć.",
  "Chi è il primo riferimento sanitario per un residente in Italia?":
    "Kto jest pierwszym punktem odniesienia zdrowotnego dla mieszkańca Włoch?",
  "Il pronto soccorso": "Szpitalny oddział ratunkowy",
  "Lo specialista ospedaliero": "Specjalista szpitalny",
  "Il farmacista": "Farmaceuta",
  "Il medico di medicina generale, che si sceglie fra quelli disponibili nella propria zona: visita, prescrive e indirizza allo specialista.":
    "Lekarz medycyny ogólnej, którego wybiera się spośród dostępnych w swojej okolicy: bada, przepisuje i kieruje do specjalisty.",
  "Con quale criterio si viene ricevuti al pronto soccorso?":
    "Według jakiego kryterium przyjmuje się na oddziale ratunkowym?",
  "In ordine di arrivo": "W kolejności przybycia",
  "In ordine di gravità": "W kolejności ciężkości stanu",
  "In base all'età": "Według wieku",
  "In base alla residenza": "Według miejsca zamieszkania",
  "I codici di priorità stabiliscono chi passa prima: una persona arrivata dopo può essere ricevuta per prima se la sua condizione è più grave.":
    "Kody pierwszeństwa ustalają, kto wchodzi wcześniej: osoba, która przyszła później, może zostać przyjęta jako pierwsza, jeśli jej stan jest cięższy.",
  "Che cos'è il ticket sanitario?": "Czym jest ticket sanitario?",
  "Il costo pieno di una visita privata": "Pełnym kosztem prywatnej wizyty",
  "Una quota a carico del paziente per alcune prestazioni, con esenzioni":
    "Częścią obciążającą pacjenta przy niektórych świadczeniach, z wyłączeniami",
  "Un abbonamento annuale al servizio sanitario": "Rocznym abonamentem na służbę zdrowia",
  "La tassa regionale sulla salute": "Regionalnym podatkiem zdrowotnym",
  "Una compartecipazione alla spesa, con esenzioni per reddito, età e patologia. Le prestazioni urgenti al pronto soccorso non si pagano.":
    "Współudział w kosztach, z wyłączeniami ze względu na dochód, wiek i chorobę. Za świadczenia pilne na oddziale ratunkowym się nie płaci.",
  "Che cosa sostituì il Servizio sanitario nazionale nel 1978?":
    "Co zastąpił Servizio sanitario nazionale w 1978 roku?",
  "Le assicurazioni private obbligatorie": "Obowiązkowe ubezpieczenia prywatne",
  "Le casse mutue legate alla categoria professionale":
    "Kasy wzajemne związane z kategorią zawodową",
  "Gli ospedali gestiti dalle province": "Szpitale prowadzone przez prowincje",
  "Il sistema di assistenza comunale": "System opieki gminnej",
  "Prima del 1978 la copertura dipendeva dal mestiere: ciascuna categoria aveva la propria cassa, e chi non rientrava in nessuna restava scoperto.":
    "Przed 1978 rokiem pokrycie zależało od zawodu: każda kategoria miała własną kasę, a kto nie mieścił się w żadnej, zostawał bez ochrony.",
  "Quanti anni dura la scuola primaria italiana?": "Ile lat trwa włoska szkoła podstawowa?",
  "Cinque anni, dai sei agli undici. Seguono tre anni di secondaria di primo grado e cinque di secondaria di secondo grado.":
    "Pięć lat, od szóstego do jedenastego roku życia. Potem następują trzy lata szkoły średniej pierwszego stopnia i pięć lat drugiego stopnia.",
  "Quanti anni dura la scuola secondaria di primo grado?":
    "Ile lat trwa szkoła średnia pierwszego stopnia?",
  "Tre anni, quelle che tutti chiamano medie, e si chiudono con un esame. La secondaria di secondo grado dura invece cinque anni.":
    "Trzy lata, te, które wszyscy nazywają medie, i kończą się egzaminem. Szkoła średnia drugiego stopnia trwa natomiast pięć lat.",
  "Fra quali indirizzi si sceglie per la scuola secondaria di secondo grado?":
    "Między jakimi kierunkami wybiera się przy szkole średniej drugiego stopnia?",
  "Liceo, istituto tecnico e istituto professionale": "Liceum, technikum i szkoła zawodowa",
  "Liceo classico e liceo scientifico soltanto":
    "Wyłącznie liceum klasyczne i liceum matematyczno-przyrodnicze",
  "Scuola pubblica e scuola paritaria": "Szkoła publiczna i szkoła na prawach publicznych",
  "Percorso breve e percorso lungo": "Ścieżka krótka i ścieżka długa",
  "Tre indirizzi, e la scelta si fa a tredici anni. Tutti e tre portano a un diploma che dà accesso all'università: il liceo non è la scuola superiore in generale, è uno dei tre.":
    "Trzy kierunki, a wybór podejmuje się w wieku trzynastu lat. Wszystkie trzy prowadzą do świadectwa, które daje wstęp na uniwersytet: liceum nie jest szkołą średnią w ogóle, jest jedną z trzech.",
  "Come si chiama ufficialmente l'esame che chiude la scuola superiore?":
    "Jak oficjalnie nazywa się egzamin kończący szkołę średnią?",
  "Maturità": "Maturità",
  "Esame di Stato": "Esame di Stato",
  "Diploma nazionale": "Świadectwo krajowe",
  "Esame di ammissione": "Egzamin wstępny",
  "Ufficialmente esame di Stato; maturità è il nome con cui lo chiamano tutti. Si valuta in centesimi, con sessanta come minimo.":
    "Oficjalnie esame di Stato; maturità to nazwa, którą posługują się wszyscy. Ocenia się w skali stu, przy sześćdziesięciu jako minimum.",
  "Su quale scala si valuta il voto finale di laurea?":
    "W jakiej skali ocenia się końcową ocenę dyplomu?",
  "In centodecimi, con centodieci e lode come massimo. I trentesimi valgono per i singoli esami e i centesimi per la maturità.":
    "W skali stu dziesięciu, gdzie maksimum to 110 z wyróżnieniem. Trzydziestki dotyczą pojedynczych egzaminów, a setki matury.",
  "Quali corsi universitari sono a ciclo unico, senza triennale e magistrale separate?":
    "Które kierunki uniwersyteckie mają jeden cykl, bez oddzielnych studiów licencjackich i magisterskich?",
  "Economia e ingegneria": "Ekonomia i inżynieria",
  "Medicina, giurisprudenza e architettura": "Medycyna, prawo i architektura",
  "Lettere e filosofia": "Filologia i filozofia",
  "Scienze politiche e sociologia": "Nauki polityczne i socjologia",
  "Medicina, giurisprudenza e architettura seguono un percorso unico più lungo. Gli altri corsi si articolano in una laurea triennale seguita da una magistrale biennale.":
    "Medycyna, prawo i architektura idą jedną, dłuższą ścieżką. Pozostałe kierunki dzielą się na trzyletni licencjat i dwuletnie studia magisterskie.",
  "A che cosa serve la tessera sanitaria, oltre a dare accesso alle prestazioni?":
    "Czemu służy tessera sanitaria, poza dostępem do świadczeń?",
  "A votare alle elezioni regionali": "Głosowaniu w wyborach regionalnych",
  "A riportare il codice fiscale e a valere come tessera europea di assicurazione malattia":
    "Podaje codice fiscale i służy jako europejska karta ubezpieczenia zdrowotnego",
  "A ottenere sconti sui trasporti pubblici": "Uzyskaniu zniżek na transport publiczny",
  "A dimostrare la residenza": "Wykazaniu miejsca zamieszkania",
  "Porta il codice fiscale sul fronte e sul retro è la tessera europea che consente l'assistenza negli altri Stati dell'Unione.":
    "Na przodzie nosi codice fiscale, a na odwrocie jest europejską kartą, która umożliwia opiekę w innych państwach Unii.",
  "Da quanti caratteri è composto il codice fiscale?": "Z ilu znaków składa się codice fiscale?",
  "Undici": "Z jedenastu",
  "Tredici": "Z trzynastu",
  "Sedici": "Z szesnastu",
  "Sedici caratteri ricavati da nome, cognome, data e luogo di nascita. Undici è la lunghezza della partita IVA, che è un'altra cosa.":
    "Szesnaście znaków wyprowadzonych z imienia, nazwiska, daty i miejsca urodzenia. Jedenaście to długość partita IVA, a to co innego.",
  "Che cos'è la residenza anagrafica?": "Czym jest residenza anagrafica?",
  "L'indirizzo indicato nel contratto di lavoro": "Adresem wskazanym w umowie o pracę",
  "L'iscrizione all'anagrafe del comune in cui si abita davvero":
    "Wpisem do rejestru mieszkańców gminy, w której naprawdę się mieszka",
  "Il luogo di nascita registrato sul certificato": "Miejscem urodzenia zapisanym w akcie",
  "L'indirizzo del proprio datore di lavoro": "Adresem swojego pracodawcy",
  "Da essa dipendono carta d'identità, medico di base, iscrizione a scuola e, per i cittadini dell'Unione, il voto alle comunali.":
    "Od niej zależą dowód osobisty, lekarz rodzinny, zapisanie do szkoły i, dla obywateli Unii, głosowanie w wyborach gminnych.",
  "A quale autorità si chiede il permesso di soggiorno?":
    "Do którego organu wnioskuje się o permesso di soggiorno?",
  "Al comune": "Do gminy",
  "Alla questura": "Do questury",
  "Alla regione": "Do regionu",
  "All'ambasciata": "Do ambasady",
  "Alla questura, presentando la domanda tramite gli uffici postali abilitati. L'accordo di integrazione si firma invece allo sportello unico presso la prefettura.":
    "Do questury, składając wniosek przez upoważnione urzędy pocztowe. Umowę integracyjną podpisuje się natomiast w jednym okienku przy prefekturze.",
  "Quale livello di italiano serve per il permesso di soggiorno UE per soggiornanti di lungo periodo?":
    "Jaki poziom włoskiego jest potrzebny do permesso di soggiorno UE dla pobytu długoterminowego?",
  "B2": "B2",
  "A2, dimostrato con un test. Il B1 serve invece per la domanda di cittadinanza: due soglie diverse per due procedure diverse.":
    "A2, wykazany testem. B1 służy natomiast do wniosku o obywatelstwo: dwa różne progi dla dwóch różnych procedur.",
  "Quanti anni di soggiorno regolare servono come minimo per il permesso di lungo periodo?":
    "Ile lat legalnego pobytu potrzeba co najmniej do zezwolenia długoterminowego?",
  "Cinque anni, insieme a un reddito e al test di italiano A2. Dieci anni è invece il termine ordinario per chiedere la cittadinanza per residenza.":
    "Pięć lat, wraz z dochodem i testem z włoskiego na poziomie A2. Dziesięć lat to natomiast zwykły termin ubiegania się o obywatelstwo z tytułu zamieszkania.",
  "Quanti crediti si ricevono alla firma dell'accordo di integrazione?":
    "Ile punktów otrzymuje się przy podpisaniu umowy integracyjnej?",
  "Sedici crediti iniziali, da mantenere o accrescere in due anni, prorogabili di uno. Azzerarli comporta la revoca del permesso di soggiorno.":
    "Szesnaście punktów początkowych, do utrzymania albo zwiększenia w ciągu dwóch lat, z możliwością przedłużenia o rok. Wyzerowanie ich oznacza cofnięcie permesso di soggiorno.",
  "Entro quanto tempo dalla firma dell'accordo si partecipa alla sessione di formazione civica?":
    "W jakim czasie od podpisania umowy uczestniczy się w sesji kształcenia obywatelskiego?",
  "Entro un mese": "W ciągu miesiąca",
  "Entro tre mesi": "W ciągu trzech miesięcy",
  "Entro un anno": "W ciągu roku",
  "Non è prevista": "Nie jest przewidziana",
  "Entro tre mesi. Non è un esame: la partecipazione dà crediti, e la sessione riguarda ordinamento, diritti e doveri e accesso ai servizi.":
    "W ciągu trzech miesięcy. To nie egzamin: udział daje punkty, a sesja dotyczy ustroju, praw i obowiązków oraz dostępu do usług.",
  "Che cosa si verifica alla scadenza dell'accordo di integrazione?":
    "Co sprawdza się z upływem terminu umowy integracyjnej?",
  "Un esame scritto di storia italiana": "Pisemny egzamin z historii Włoch",
  "La conoscenza dell'italiano parlato almeno all'A2 e una conoscenza sufficiente della vita civile":
    "Znajomość mówionego włoskiego co najmniej na poziomie A2 i wystarczającą znajomość życia obywatelskiego",
  "Il possesso di un contratto di lavoro a tempo indeterminato":
    "Posiadanie umowy o pracę na czas nieokreślony",
  "La frequenza di un corso universitario": "Uczęszczanie na studia",
  "Non esiste alcun esame di educazione civica: si verificano il livello linguistico e una conoscenza sufficiente della cultura civica e della vita civile in Italia.":
    "Nie istnieje żaden egzamin z wiedzy o społeczeństwie: sprawdza się poziom językowy i wystarczającą znajomość kultury obywatelskiej i życia obywatelskiego we Włoszech.",
  "Quanti anni di residenza servono ordinariamente a un cittadino non dell'Unione per chiedere la cittadinanza?":
    "Ile lat zamieszkania potrzeba zwykle obywatelowi spoza Unii, żeby ubiegać się o obywatelstwo?",
  "Dieci anni. Il termine è più breve per i cittadini dell'Unione, per i rifugiati e per chi è nato in Italia.":
    "Dziesięć lat. Termin jest krótszy dla obywateli Unii, dla uchodźców i dla urodzonych we Włoszech.",
  "Per quali vie si può ottenere la cittadinanza italiana?":
    "Jakimi drogami można uzyskać obywatelstwo włoskie?",
  "Solo per nascita sul territorio": "Tylko przez urodzenie na terytorium",
  "Per discendenza, per matrimonio o per residenza":
    "Przez pochodzenie, przez małżeństwo albo przez zamieszkanie",
  "Solo per matrimonio": "Tylko przez małżeństwo",
  "Solo per decreto del Presidente della Repubblica": "Tylko dekretem Prezydenta Republiki",
  "Le tre vie ordinarie. La nascita sul territorio da sola non basta: l'Italia non applica il principio dello ius soli puro.":
    "Trzy zwykłe drogi. Samo urodzenie na terytorium nie wystarcza: Włochy nie stosują czystej zasady ius soli.",
  "Da quale anno la domanda di cittadinanza richiede un certificato di lingua?":
    "Od którego roku wniosek o obywatelstwo wymaga certyfikatu językowego?",
  "Dal 2012": "Od 2012",
  "Dal 2018": "Od 2018",
  "Dal 2022": "Od 2022",
  "Dal 2018. L'accordo di integrazione, che è cosa diversa e riguarda il permesso di soggiorno, era invece entrato in vigore nel 2012.":
    "Od 2018. Umowa integracyjna, która jest czym innym i dotyczy permesso di soggiorno, weszła natomiast w życie w 2012 roku.",
  "Che cosa serve per accedere ai servizi pubblici online in Italia?":
    "Czego trzeba, żeby korzystać z usług publicznych online we Włoszech?",
  "Un'identità digitale come SPID o la carta d'identità elettronica":
    "Tożsamości cyfrowej, jak SPID albo elektroniczny dowód osobisty",
  "Il solo codice fiscale": "Samego codice fiscale",
  "Un indirizzo di posta elettronica certificata": "Adresu poczty elektronicznej poświadczonej",
  "La tessera sanitaria scaduta": "Przeterminowanej tessera sanitaria",
  "Senza SPID o carta d'identità elettronica non si prenota una visita, non si scarica un certificato e non si consulta il proprio fascicolo previdenziale.":
    "Bez SPID albo elektronicznego dowodu osobistego nie zamówi się wizyty, nie pobierze zaświadczenia i nie zajrzy do własnej teczki ubezpieczeniowej.",
  "Le prove richieste dallo Stato italiano riguardano la storia e le istituzioni del paese?":
    "Czy egzaminy wymagane przez państwo włoskie dotyczą historii i instytucji kraju?",
  "Sì, entrambe le prove sono di educazione civica":
    "Tak, oba egzaminy są z wiedzy o społeczeństwie",
  "No: il test A2 e il certificato B1 sono prove linguistiche":
    "Nie: test A2 i certyfikat B1 są egzaminami językowymi",
  "Solo la prova per la cittadinanza è di educazione civica":
    "Tylko egzamin na obywatelstwo jest z wiedzy o społeczeństwie",
  "Solo il test per il permesso è di educazione civica":
    "Tylko test do zezwolenia jest z wiedzy o społeczeństwie",
  "Sia l'A2 per il permesso di lungo periodo sia il B1 per la cittadinanza esaminano la lingua. L'unico riferimento alla vita civile è nella verifica dell'accordo di integrazione, e non è un esame di storia.":
    "Zarówno A2 do zezwolenia długoterminowego, jak i B1 do obywatelstwa badają język. Jedyne odniesienie do życia obywatelskiego jest przy sprawdzeniu umowy integracyjnej i nie jest egzaminem z historii.",
  "Come si beve abitualmente il caffè in Italia?": "Jak we Włoszech pije się zwykle kawę?",
  "Lungo, seduti al tavolo": "Dużą, siedząc przy stoliku",
  "Espresso, spesso al banco e in poco tempo": "Espresso, często przy barze i w krótkiej chwili",
  "Filtrato, in tazza grande": "Przelewową, w dużej filiżance",
  "Solo a colazione": "Tylko na śniadanie",
  "L'espresso al banco è il gesto quotidiano più diffuso. Al tavolo il prezzo di solito cambia, ed è la ragione per cui molti restano in piedi.":
    "Espresso przy barze to najczęstszy codzienny gest. Przy stoliku cena zwykle się zmienia, i to powód, dla którego wielu zostaje na stojąco.",
  "Che cos'è il caffè corretto?": "Czym jest caffè corretto?",
  "Un espresso con l'aggiunta di un liquore": "Espresso z dodatkiem likieru",
  "Un caffè preparato con acqua filtrata": "Kawą przyrządzoną na filtrowanej wodzie",
  "Un caffè senza zucchero": "Kawą bez cukru",
  "Un caffè con latte freddo": "Kawą z zimnym mlekiem",
  "Corretto con grappa, sambuca o un altro liquore. Si prende di solito dopo il pasto, al posto o dopo l'espresso semplice.":
    "Poprawiona grappą, sambucą albo innym likierem. Bierze się ją zwykle po posiłku, zamiast zwykłego espresso albo po nim.",
  "Che cos'è il primo in un pasto italiano?": "Czym jest primo we włoskim posiłku?",
  "L'antipasto": "Przystawką",
  "La portata di pasta, riso o zuppa": "Daniem z makaronu, ryżu albo zupą",
  "Il piatto di carne o pesce": "Daniem z mięsa albo ryby",
  "Il contorno servito per primo": "Dodatkiem podanym jako pierwszy",
  "Primo e secondo sono due portate distinte, servite una dopo l'altra: il primo è pasta, riso o zuppa, il secondo carne o pesce con contorno.":
    "Primo i secondo to dwa odrębne dania, podawane jedno po drugim: primo to makaron, ryż albo zupa, secondo mięso albo ryba z dodatkiem.",
  "Perché si dice che la cucina italiana al singolare quasi non esista?":
    "Dlaczego mówi się, że kuchnia włoska w liczbie pojedynczej niemal nie istnieje?",
  "Perché è stata inventata nel Novecento": "Bo wymyślono ją w XX wieku",
  "Perché è regionale e spesso cittadina, e cambia di valle in valle":
    "Bo jest regionalna, a często miejska, i zmienia się z doliny na dolinę",
  "Perché deriva interamente dalla cucina francese":
    "Bo w całości wywodzi się z kuchni francuskiej",
  "Perché i prodotti sono importati": "Bo produkty są importowane",
  "Il ragù non è lo stesso a Bologna e a Napoli, e la pizza napoletana e quella romana sono prodotti diversi. L'idea di una cucina nazionale unica è nata soprattutto fuori dai confini, con l'emigrazione.":
    "Ragù nie jest to samo w Bolonii i w Neapolu, a pizza neapolitańska i rzymska to różne wyroby. Idea jednej kuchni narodowej narodziła się przede wszystkim poza granicami, wraz z emigracją.",
  "Che cos'è l'aperitivo?": "Czym jest aperitivo?",
  "Il caffè che precede la colazione": "Kawą poprzedzającą śniadanie",
  "Il momento prima di cena, con una bevanda e qualcosa da mangiare":
    "Chwilą przed kolacją, z napojem i czymś do jedzenia",
  "Il dolce di fine pasto": "Deserem na koniec posiłku",
  "Il pasto di mezzogiorno nei giorni festivi": "Posiłkiem w południe w dni świąteczne",
  "Precede la cena e in alcune città, Milano in particolare, si è ampliato al punto da sostituirla quasi del tutto.":
    "Poprzedza kolację, a w niektórych miastach, zwłaszcza w Mediolanie, rozrósł się tak, że niemal ją zastępuje.",
  "Perché i giovani italiani lasciano tardi la casa dei genitori?":
    "Dlaczego młodzi Włosi późno opuszczają dom rodziców?",
  "Per una tradizione religiosa": "Z tradycji religijnej",
  "Soprattutto per ragioni economiche: affitti, salari d'ingresso e lavoro instabile":
    "Przede wszystkim z powodów ekonomicznych: czynsze, płace na starcie i niepewna praca",
  "Perché la legge lo prevede fino ai trent'anni":
    "Bo przewiduje to prawo, do trzydziestego roku życia",
  "Perché mancano corsi universitari fuori sede":
    "Bo brakuje studiów poza miejscem zamieszkania",
  "L'età media in cui si lascia la famiglia è fra le più alte d'Europa, e le indagini indicano cause soprattutto economiche più che culturali.":
    "Średni wiek opuszczenia rodziny należy do najwyższych w Europie, a badania wskazują na przyczyny raczej ekonomiczne niż kulturowe.",
  "Quale ruolo hanno spesso i nonni nelle famiglie italiane?":
    "Jaką rolę mają często dziadkowie we włoskich rodzinach?",
  "Vivono di norma separati dai figli e non partecipano":
    "Z reguły mieszkają osobno od dzieci i nie uczestniczą",
  "Curano quotidianamente i nipoti, sostenendo di fatto i bilanci familiari":
    "Codziennie opiekują się wnukami, faktycznie podtrzymując budżety rodzinne",
  "Sono assistiti in strutture pubbliche nella maggioranza dei casi":
    "W większości przypadków przebywają w placówkach publicznych",
  "Non hanno alcun ruolo riconosciuto": "Nie mają żadnej uznanej roli",
  "La cura dei nipoti da parte dei nonni sostituisce in molte famiglie servizi che costerebbero, e regge una parte non piccola dell'occupazione femminile.":
    "Opieka dziadków nad wnukami zastępuje w wielu rodzinach usługi, które kosztowałyby, i utrzymuje niemałą część zatrudnienia kobiet.",
  "Come si chiamano i giocatori della nazionale italiana di calcio?":
    "Jak nazywa się zawodników włoskiej reprezentacji piłkarskiej?",
  "I rossoneri": "Rossoneri",
  "Gli azzurri": "Azzurri",
  "I bianconeri": "Bianconeri",
  "I granata": "Granata",
  "Gli azzurri, dal colore delle maglie, che viene dal blu Savoia e non dalla bandiera. Gli altri nomi appartengono a singole squadre di club.":
    "Azzurri, od koloru koszulek, który pochodzi od błękitu sabaudzkiego, a nie od flagi. Pozostałe nazwy należą do poszczególnych klubów.",
  "Quanti campionati del mondo di calcio ha vinto l'Italia?":
    "Ile mistrzostw świata w piłce nożnej wygrały Włochy?",
  "Quattro. Solo il Brasile ne ha vinti di più. Il calcio è lo sport nazionale e occupa le conversazioni da agosto a maggio.":
    "Cztery. Tylko Brazylia wygrała ich więcej. Piłka nożna jest sportem narodowym i zajmuje rozmowy od sierpnia do maja.",
  "In quale mese si corre il Giro d'Italia?": "W którym miesiącu jedzie się Giro d'Italia?",
  "A marzo": "W marcu",
  "A maggio": "W maju",
  "A luglio": "W lipcu",
  "A settembre": "We wrześniu",
  "A maggio, attraversando il paese. Il Tour de France si corre invece a luglio: le due grandi corse a tappe non si sovrappongono.":
    "W maju, przemierzając kraj. Tour de France jedzie się natomiast w lipcu: dwa wielkie wyścigi etapowe się nie nakładają.",
  "Da dove viene il colore della maglia del Giro d'Italia?":
    "Skąd bierze się kolor koszulki Giro d'Italia?",
  "Dalla bandiera nazionale": "Z flagi narodowej",
  "Dalla carta del quotidiano sportivo che organizzò la corsa":
    "Z papieru dziennika sportowego, który zorganizował wyścig",
  "Dal colore delle Alpi al tramonto": "Z koloru Alp o zachodzie słońca",
  "Da una scelta casuale degli anni Cinquanta": "Z przypadkowego wyboru lat pięćdziesiątych",
  "Come la maglia gialla del Tour, il colore viene dalla carta del giornale organizzatore. Due corse diverse, due giornali, due colori, stessa logica.":
    "Jak żółta koszulka Touru, kolor pochodzi od papieru gazety-organizatora. Dwa różne wyścigi, dwie gazety, dwa kolory, ta sama logika.",
  "Che cosa succede a molti negozi e uffici italiani nel mese di agosto?":
    "Co dzieje się z wieloma włoskimi sklepami i biurami w sierpniu?",
  "Prolungano gli orari per il turismo": "Wydłużają godziny na potrzeby turystyki",
  "Chiudono per ferie, soprattutto intorno a Ferragosto":
    "Zamykają na urlop, zwłaszcza wokół Ferragosto",
  "Passano a un orario continuato": "Przechodzą na ciągły czas otwarcia",
  "Aprono anche di domenica per legge": "Otwierają też w niedziele z mocy ustawy",
  "Intorno al 15 agosto chiudono negozi, studi professionali e interi quartieri delle grandi città. È la settimana in cui il paese si ferma davvero.":
    "Około 15 sierpnia zamykają się sklepy, kancelarie i całe dzielnice wielkich miast. To tydzień, w którym kraj naprawdę się zatrzymuje.",
  "Che cos'è la pausa pranzo nei negozi italiani?":
    "Czym jest przerwa obiadowa we włoskich sklepach?",
  "Una chiusura pomeridiana obbligatoria per legge":
    "Popołudniowym zamknięciem obowiązkowym z mocy ustawy",
  "Una chiusura di alcune ore a metà giornata, con riapertura fino a sera":
    "Zamknięciem na kilka godzin w środku dnia, z ponownym otwarciem do wieczora",
  "Il giorno di riposo settimanale": "Tygodniowym dniem odpoczynku",
  "Un orario ridotto riservato all'estate": "Skróconym czasem otwarcia zarezerwowanym na lato",
  "Diffusa soprattutto nei centri piccoli e al Sud. Non è obbligatoria, e nelle grandi città molti esercizi ormai restano aperti tutto il giorno.":
    "Rozpowszechniona przede wszystkim w małych ośrodkach i na Południu. Nie jest obowiązkowa, a w wielkich miastach wiele lokali zostaje już otwartych cały dzień.",
};
