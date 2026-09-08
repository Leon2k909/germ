/**
 * Polish for the Vivir en Espana practice questions.
 *
 * The lesson text of this course has had a Polish table for a while, and the
 * questions of the practice bank had none — so a lesson read in Polish and
 * then asked its questions in Spanish. They arrive in the same stepped
 * session as the course's own quiz blocks, through the same component, so the
 * marker was already there and only the words were missing.
 *
 * Keyed on the SPANISH of esQuestionBank.ts, exactly as it stands there. Every
 * key was extracted from the built module and paired back by position, never
 * retyped: one wrong character and the lookup misses in silence — the marker
 * disappears and the reader is told there is nothing, for a question that was
 * in fact translated.
 *
 * WHAT STAYS SPANISH follows VIVIR_EN_ESPANA_PL, so a reader who moves between
 * a lesson and its questions never meets one word glossed two ways.
 * Institutions keep their Spanish name where the exam asks for it — Cortes
 * Generales, Congreso de los Diputados, Consejo General del Poder Judicial,
 * Defensor del Pueblo, Tribunal Superior de Justicia — and where a word is the
 * answer itself and Polish has none of its own — padrón, empadronamiento, NIE,
 * TIE, DNI, IRPF, Bachillerato, ESO, finiquito, tapeo, sobremesa, España
 * vaciada — the Polish gives the meaning and keeps the Spanish beside it.
 *
 * Strings another Polish table already answers are deliberately absent. Every
 * table for one target is spread into a single object, so a second entry for
 * the same key would be a silent collision, and the older table would decide
 * the wording for both. check-pl-bank-translation counts what a reader
 * reaches rather than what this file holds.
 */
export const ES_QUESTION_BANK_PL: Record<string, string> = {
  "¿Qué artículo de la Constitución describe la bandera?":
    "Który artykuł konstytucji opisuje flagę?",
  "El artículo 1": "Artykuł 1",
  "El artículo 3": "Artykuł 3",
  "El artículo 4": "Artykuł 4",
  "El artículo 11": "Artykuł 11",
  "El artículo 4. El 3 se ocupa de las lenguas y el 11 de la nacionalidad: los tres están en el título preliminar y se confunden con facilidad.":
    "Artykuł 4. Artykuł 3 zajmuje się językami, a 11 obywatelstwem: wszystkie trzy stoją w tytule wstępnym i łatwo je pomylić.",
  "¿En el reinado de quién se adoptaron el rojo y el amarillo?":
    "Za panowania kogo przyjęto czerwień i żółć?",
  "De Felipe II": "Filipa II",
  "De Carlos III": "Karola III",
  "De Fernando VII": "Ferdynanda VII",
  "De Alfonso XIII": "Alfonsa XIII",
  "Carlos III convocó en 1785 un concurso para dotar a la Armada de un pabellón distinguible. De la marina pasó al ejército y, ya en el siglo XIX, a bandera nacional.":
    "Karol III ogłosił w 1785 roku konkurs, żeby dać marynarce rozpoznawalną banderę. Z marynarki przeszła do wojska, a już w XIX wieku stała się flagą narodową.",
  "¿Por qué se eligieron el rojo y el amarillo para el pabellón?":
    "Dlaczego na banderę wybrano czerwień i żółć?",
  "Por ser los colores de la Casa Real": "Bo to barwy domu królewskiego",
  "Para que la escuadra se distinguiera desde lejos en el mar":
    "Żeby eskadrę było widać z daleka na morzu",
  "Por recordar el oro de América": "Bo przypominają złoto Ameryki",
  "Por imitar a la bandera francesa": "Żeby naśladować flagę francuską",
  "Casi todas las flotas europeas usaban fondos blancos con escudos y de lejos se confundían. El rojo y el amarillo se ven a mucha distancia: la razón fue práctica antes que simbólica.":
    "Prawie wszystkie floty europejskie używały białych tł z herbami i z daleka się myliły. Czerwień i żółć widać z wielkiej odległości: powód był praktyczny, zanim stał się symboliczny.",
  "¿Qué reino representa la granada situada al pie del escudo?":
    "Które królestwo przedstawia granat u dołu herbu?",
  "Navarra": "Nawarrę",
  "Aragón": "Aragonię",
  "León": "León",
  "La granada recuerda el reino nazarí incorporado en 1492, el último de la Península. Navarra aporta las cadenas y Aragón los cuatro palos.":
    "Granat przypomina królestwo Nasrydów przyłączone w 1492 roku, ostatnie na Półwyspie. Nawarra wnosi łańcuchy, a Aragonia cztery pale.",
  "¿Qué lema llevan las columnas de Hércules del escudo?":
    "Jaką dewizę noszą kolumny Herkulesa w herbie?",
  "PLUS ULTRA": "PLUS ULTRA",
  "NON PLUS ULTRA": "NON PLUS ULTRA",
  "UNA GRANDE Y LIBRE": "UNA GRANDE Y LIBRE",
  "TANTO MONTA": "TANTO MONTA",
  "Plus ultra, más allá. Antes del descubrimiento de América el lema era el contrario, non plus ultra: nada más allá del estrecho. Se le quitó la negación.":
    "Plus ultra, dalej. Przed odkryciem Ameryki dewiza brzmiała odwrotnie, non plus ultra: nic dalej niż cieśnina. Zdjęto z niej przeczenie.",
  "¿Cómo se llama el himno nacional español?": "Jak nazywa się hiszpański hymn narodowy?",
  "Himno de Riego": "Himno de Riego",
  "Marcha Real": "Marcha Real",
  "La Marsellesa": "Marsylianka",
  "Cara al sol": "Cara al sol",
  "La Marcha Real. El Himno de Riego fue el himno de la Segunda República, entre 1931 y 1939.":
    "Marcha Real. Himno de Riego był hymnem Drugiej Republiki, w latach 1931–1939.",
  "¿Desde qué año está documentado el himno español?":
    "Od którego roku hiszpański hymn jest udokumentowany?",
  "Desde 1492": "Od 1492",
  "Desde 1761": "Od 1761",
  "Desde 1812": "Od 1812",
  "Desde 1978": "Od 1978",
  "Aparece en 1761 como Marcha Granadera, lo que lo convierte en uno de los himnos más antiguos de Europa.":
    "Pojawia się w 1761 roku jako Marcha Granadera, co czyni go jednym z najstarszych hymnów Europy.",
  "¿Qué se celebra el 6 de diciembre?": "Co świętuje się 6 grudnia?",
  "La Fiesta Nacional": "Święto narodowe",
  "La proclamación del rey": "Proklamację króla",
  "El Día de la Hispanidad": "Dzień Hiszpańskości",
  "El Día de la Constitución, por el referéndum de 1978. La Fiesta Nacional es el 12 de octubre, y el Día de la Hispanidad es otro nombre para esa misma fecha.":
    "Dzień Konstytucji, od referendum z 1978 roku. Święto narodowe przypada 12 października, a Dzień Hiszpańskości to inna nazwa tej samej daty.",
  "¿Qué se conmemora el 2 de mayo en la Comunidad de Madrid?":
    "Co upamiętnia się 2 maja we wspólnocie Madrytu?",
  "La entrada de los Reyes Católicos en Granada": "Wejście Królów Katolickich do Grenady",
  "El levantamiento de 1808 contra las tropas de Napoleón":
    "Powstanie z 1808 roku przeciw wojskom Napoleona",
  "La proclamación de la Segunda República": "Proklamację Drugiej Republiki",
  "La aprobación del Estatuto de Autonomía": "Uchwalenie statutu autonomii",
  "El levantamiento del pueblo de Madrid en 1808, que abre la Guerra de la Independencia. Es fiesta de la comunidad, no nacional.":
    "Powstanie ludu Madrytu w 1808 roku, które otwiera wojnę o niepodległość. To święto wspólnoty, a nie narodowe.",
  "¿Qué lengua declara oficial del Estado el artículo 3?":
    "Który język artykuł 3 ogłasza urzędowym językiem państwa?",
  "El castellano": "Kastylijski",
  "El español y el catalán": "Hiszpański i kataloński",
  "Todas las lenguas de España por igual": "Wszystkie języki Hiszpanii na równi",
  "No lo dice ningún artículo": "Nie mówi tego żaden artykuł",
  "El castellano es la lengua española oficial del Estado, y el mismo artículo añade que las demás lenguas españolas serán también oficiales en sus respectivas comunidades.":
    "Kastylijski jest hiszpańskim językiem urzędowym państwa, a ten sam artykuł dodaje, że pozostałe języki hiszpańskie będą również urzędowe w swoich wspólnotach.",
  "¿Cuál es la diferencia entre la bandera con escudo y la bandera sin escudo?":
    "Jaka jest różnica między flagą z herbem a flagą bez herbu?",
  "La de los edificios oficiales lleva escudo; la de uso común normalmente no":
    "Ta na budynkach urzędowych nosi herb; ta w powszechnym użyciu zwykle nie",
  "La del escudo solo puede usarla la Casa Real": "Tej z herbem może używać tylko dom królewski",
  "La sin escudo está prohibida": "Ta bez herbu jest zakazana",
  "Son banderas de dos épocas distintas": "To flagi z dwóch różnych epok",
  "Ambas son correctas. La versión oficial, la de organismos y actos del Estado, incorpora el escudo; la que se cuelga de un balcón o se ve en un estadio suele ser la lisa.":
    "Obie są poprawne. Wersja urzędowa, ta instytucji i aktów państwa, ma herb; ta, którą wywiesza się z balkonu albo widuje na stadionie, jest zwykle gładka.",
  "¿Qué figuras ocupan los dos primeros cuarteles del escudo?":
    "Jakie figury zajmują dwa pierwsze pola herbu?",
  "Un águila y una cruz": "Orzeł i krzyż",
  "Un castillo y un león": "Zamek i lew",
  "Dos columnas": "Dwie kolumny",
  "Una granada y unas cadenas": "Granat i łańcuchy",
  "El castillo de Castilla y el león de León. Las cadenas son de Navarra, la granada del reino de Granada y las columnas enmarcan el conjunto.":
    "Zamek Kastylii i lew Leónu. Łańcuchy są nawarskie, granat z królestwa Grenady, a kolumny obramowują całość.",
  "¿Qué reino representan las cadenas del escudo?":
    "Które królestwo przedstawiają łańcuchy w herbie?",
  "Castilla": "Kastylię",
  "Portugal": "Portugalię",
  "Las cadenas son el emblema de Navarra. Aragón aporta los cuatro palos rojos sobre fondo dorado, y Portugal nunca formó parte del escudo.":
    "Łańcuchy są godłem Nawarry. Aragonia wnosi cztery czerwone pale na złotym tle, a Portugalia nigdy nie była częścią herbu.",
  "¿Cuántos artículos tiene la Constitución española?":
    "Ile artykułów ma konstytucja hiszpańska?",
  "Noventa y nueve": "Dziewięćdziesiąt dziewięć",
  "Ciento sesenta y nueve": "Sto sześćdziesiąt dziewięć",
  "Ciento sesenta y nueve, repartidos en un título preliminar y diez títulos, más las disposiciones finales. Es un texto largo para los estándares europeos.":
    "Sto sześćdziesiąt dziewięć, rozdzielonych na tytuł wstępny i dziesięć tytułów, plus przepisy końcowe. To tekst długi jak na europejskie standardy.",
  "¿Cuándo entró en vigor la Constitución?": "Kiedy konstytucja weszła w życie?",
  "El 1 de enero de 1979": "1 stycznia 1979",
  "El 29 de diciembre, el día de su publicación en el Boletín Oficial del Estado. El 6 fue el referéndum y el 27 la sanción del rey.":
    "29 grudnia, w dniu jej ogłoszenia w Boletín Oficial del Estado. 6 grudnia było referendum, a 27 sankcja króla.",
  "¿Cómo se conoce a los siete diputados que redactaron el borrador?":
    "Jak nazywa się siedmiu posłów, którzy napisali projekt?",
  "Los constituyentes": "Konstytuanci",
  "Los padres de la Constitución": "Ojcowie konstytucji",
  "La comisión de notables": "Komisja notabli",
  "El consejo de redacción": "Rada redakcyjna",
  "Se les llama los padres de la Constitución. Pertenecían a partidos distintos, lo que era el punto: el texto se escribió para que ninguna fuerza quedara fuera.":
    "Nazywa się ich ojcami konstytucji. Należeli do różnych partii, i o to właśnie chodziło: tekst napisano tak, żeby żadna siła nie została poza nim.",
  "¿Qué palabra resume el método con el que se redactó la Constitución?":
    "Które słowo streszcza metodę, którą napisano konstytucję?",
  "Imposición": "Narzucenie",
  "Consenso": "Konsens",
  "Plebiscito": "Plebiscyt",
  "Codificación": "Kodyfikacja",
  "Consenso. Algunos artículos son deliberadamente amplios porque se acordó la frase precisamente por admitir más de una lectura: era el precio de que nadie quedara excluido.":
    "Konsens. Niektóre artykuły są celowo szerokie, bo zdanie uzgodniono właśnie dlatego, że dopuszcza więcej niż jedno odczytanie: to była cena tego, żeby nikogo nie wykluczyć.",
  "¿Qué título de la Constitución trata de la organización territorial del Estado?":
    "Który tytuł konstytucji dotyczy organizacji terytorialnej państwa?",
  "El título preliminar": "Tytuł wstępny",
  "El título I": "Tytuł I",
  "El título VI": "Tytuł VI",
  "El título VIII": "Tytuł VIII",
  "El título VIII. De él nacen las comunidades autónomas, y por eso al modelo se le llama a veces Estado del título VIII.":
    "Tytuł VIII. Z niego rodzą się wspólnoty autonomiczne, i dlatego model ten nazywa się czasem państwem tytułu VIII.",
  "¿Qué artículos forman el título preliminar?": "Które artykuły tworzą tytuł wstępny?",
  "Del 1 al 9": "Od 1 do 9",
  "Del 1 al 14": "Od 1 do 14",
  "Del 10 al 55": "Od 10 do 55",
  "Del 1 al 29": "Od 1 do 29",
  "Del 1 al 9: qué es España, dónde reside la soberanía, las lenguas, la bandera, la capital. Del 10 al 55 va el título I, sobre derechos y deberes.":
    "Od 1 do 9: czym jest Hiszpania, gdzie mieszka suwerenność, języki, flaga, stolica. Od 10 do 55 biegnie tytuł I, o prawach i obowiązkach.",
  "¿Qué dos afirmaciones contiene el artículo 2?": "Które dwa twierdzenia zawiera artykuł 2?",
  "La unidad de la Nación y el derecho a la autonomía de nacionalidades y regiones":
    "Jedność Narodu i prawo narodowości i regionów do autonomii",
  "La soberanía popular y la monarquía parlamentaria":
    "Suwerenność ludu i monarchię parlamentarną",
  "La oficialidad del castellano y de las demás lenguas":
    "Urzędowość kastylijskiego i pozostałych języków",
  "La igualdad ante la ley y la prohibición de discriminación":
    "Równość wobec prawa i zakaz dyskryminacji",
  "Las dos mitades se acordaron juntas y ninguna se entiende sin la otra. Sobre ellas se construyó después todo el Estado autonómico.":
    "Obie połowy uzgodniono razem i żadnej nie da się zrozumieć bez drugiej. Na nich zbudowano potem całe państwo autonomiczne.",
  "¿Qué artículo se reformó en 2011?": "Który artykuł zreformowano w 2011 roku?",
  "El artículo 13": "Artykuł 13",
  "El artículo 135": "Artykuł 135",
  "El artículo 2": "Artykuł 2",
  "El artículo 168": "Artykuł 168",
  "El 135, sobre estabilidad presupuestaria, en plena crisis de deuda. La otra reforma, la de 1992, tocó el artículo 13.":
    "Artykuł 135, o stabilności budżetowej, w pełni kryzysu zadłużenia. Druga reforma, ta z 1992 roku, dotknęła artykułu 13.",
  "¿Por qué se reformó la Constitución en 1992?":
    "Dlaczego zreformowano konstytucję w 1992 roku?",
  "Para permitir el voto de extranjeros en las elecciones municipales tras Maastricht":
    "Żeby po Maastricht pozwolić cudzoziemcom głosować w wyborach gminnych",
  "Para introducir el euro": "Żeby wprowadzić euro",
  "Para reformar el Senado": "Żeby zreformować Senat",
  "Para ampliar las competencias autonómicas": "Żeby rozszerzyć kompetencje wspólnot",
  "El Tratado de Maastricht obligaba a reconocer el sufragio pasivo en las municipales a los ciudadanos comunitarios, y hubo que añadir dos palabras al artículo 13.":
    "Traktat z Maastricht zobowiązywał do uznania biernego prawa wyborczego w wyborach gminnych dla obywateli Wspólnoty i trzeba było dodać dwa słowa do artykułu 13.",
  "¿Qué procedimiento de reforma obliga a disolver las Cortes y convocar elecciones?":
    "Który tryb zmiany konstytucji nakazuje rozwiązanie Cortes i rozpisanie wyborów?",
  "El del artículo 167": "Ten z artykułu 167",
  "El del artículo 168": "Ten z artykułu 168",
  "El del artículo 92": "Ten z artykułu 92",
  "Ninguno lo exige": "Żaden tego nie wymaga",
  "El procedimiento agravado del artículo 168, que además exige dos tercios de ambas cámaras antes y después, y un referéndum obligatorio al final.":
    "Tryb zaostrzony z artykułu 168, który wymaga ponadto dwóch trzecich w obu izbach przed i po, a na koniec obowiązkowego referendum.",
  "¿Qué partes de la Constitución protege el procedimiento agravado?":
    "Które części konstytucji chroni tryb zaostrzony?",
  "Solo el título de la Corona": "Tylko tytuł o Koronie",
  "El título preliminar, los derechos fundamentales de la sección primera y el título de la Corona":
    "Tytuł wstępny, prawa podstawowe z sekcji pierwszej i tytuł o Koronie",
  "Todo el texto por igual": "Cały tekst na równi",
  "Solo el título VIII": "Tylko tytuł VIII",
  "Son las tres partes que el constituyente quiso poner casi fuera de alcance. Todo lo demás se reforma por el procedimiento ordinario, con tres quintos de cada cámara.":
    "To trzy części, które ustrojodawca chciał postawić niemal poza zasięgiem. Wszystko inne zmienia się trybem zwykłym, trzema piątymi każdej izby.",
  "¿Quién sancionó la Constitución en diciembre de 1978?":
    "Kto sankcjonował konstytucję w grudniu 1978 roku?",
  "El presidente del Gobierno": "Prezes rządu",
  "El rey": "Król",
  "El presidente de las Cortes": "Przewodniczący Cortes",
  "El rey la sancionó el 27 de diciembre, después de que las Cortes la aprobaran y el pueblo la ratificara en referéndum.":
    "Król sankcjonował ją 27 grudnia, po tym, jak Cortes ją uchwaliły, a naród zatwierdził w referendum.",
  "¿Qué mayoría exige el procedimiento ordinario de reforma?":
    "Jakiej większości wymaga zwykły tryb zmiany?",
  "Mayoría simple de cada cámara": "Zwykłej większości każdej izby",
  "Mayoría absoluta del Congreso": "Bezwzględnej większości Kongresu",
  "Tres quintos de cada cámara": "Trzech piątych każdej izby",
  "Dos tercios de cada cámara": "Dwóch trzecich każdej izby",
  "Tres quintos de Congreso y Senado. Los dos tercios corresponden al procedimiento agravado del artículo 168, que además obliga a disolver las Cortes.":
    "Trzech piątych Kongresu i Senatu. Dwie trzecie odpowiadają trybowi zaostrzonemu z artykułu 168, który dodatkowo nakazuje rozwiązanie Cortes.",
  "¿Qué artículos están protegidos por el recurso de amparo?":
    "Które artykuły chroni recurso de amparo?",
  "Del 14 al 29": "Od 14 do 29",
  "Del 30 al 38": "Od 30 do 38",
  "Del 39 al 52": "Od 39 do 52",
  "Del 14 al 29: la igualdad y los derechos fundamentales y libertades públicas. Los de los artículos 39 a 52 son principios rectores y no llegan al amparo.":
    "Od 14 do 29: równość oraz prawa podstawowe i wolności publiczne. Te z artykułów 39 do 52 są zasadami kierunkowymi i do amparo nie sięgają.",
  "¿Qué establece el artículo 14?": "Co ustanawia artykuł 14?",
  "El derecho a la vida": "Prawo do życia",
  "La igualdad ante la ley sin discriminación alguna":
    "Równość wobec prawa bez jakiejkolwiek dyskryminacji",
  "La libertad de expresión": "Wolność wypowiedzi",
  "El derecho a la educación": "Prawo do nauki",
  "La igualdad ante la ley, sin que pueda prevalecer discriminación por nacimiento, raza, sexo, religión, opinión o cualquier otra condición personal o social.":
    "Równość wobec prawa, bez możliwości przeważenia dyskryminacji ze względu na urodzenie, rasę, płeć, religię, poglądy albo jakikolwiek inny warunek osobisty czy społeczny.",
  "¿Qué abolió el artículo 15?": "Co zniósł artykuł 15?",
  "La esclavitud": "Niewolnictwo",
  "La pena de muerte": "Karę śmierci",
  "La prisión por deudas": "Więzienie za długi",
  "La pena de muerte, con una salvedad inicial para las leyes penales militares en tiempo de guerra. Esa excepción se suprimió por ley en 1995.":
    "Karę śmierci, z początkowym zastrzeżeniem dla wojskowych ustaw karnych w czasie wojny. Ten wyjątek zniesiono ustawą w 1995 roku.",
  "¿Cuándo desapareció por completo la pena de muerte del ordenamiento español?":
    "Kiedy kara śmierci zniknęła całkowicie z hiszpańskiego porządku prawnego?",
  "En 1985": "W 1985",
  "En 1995": "W 1995",
  "En 2005": "W 2005",
  "La Constitución la abolió en 1978 salvo para las leyes penales militares en tiempo de guerra, y esa última excepción se eliminó por ley en 1995.":
    "Konstytucja zniosła ją w 1978 roku poza wojskowymi ustawami karnymi w czasie wojny, a ten ostatni wyjątek usunięto ustawą w 1995 roku.",
  "¿Qué protege el artículo 18?": "Co chroni artykuł 18?",
  "El honor, la intimidad, el domicilio y el secreto de las comunicaciones":
    "Cześć, prywatność, mir domowy i tajemnicę komunikowania się",
  "El derecho de huelga": "Prawo do strajku",
  "La libertad de circulación": "Swobodę przemieszczania się",
  "El derecho de petición": "Prawo petycji",
  "Es el artículo de la vida privada: honor, intimidad, propia imagen, inviolabilidad del domicilio y secreto de las comunicaciones.":
    "To artykuł życia prywatnego: cześć, prywatność, własny wizerunek, nienaruszalność mieszkania i tajemnica komunikowania się.",
  "¿En qué casos puede entrarse en un domicilio sin permiso del titular?":
    "W jakich przypadkach można wejść do mieszkania bez zgody jego posiadacza?",
  "Nunca": "Nigdy",
  "Con resolución judicial o en caso de delito flagrante":
    "Za postanowieniem sądu albo w razie przestępstwa na gorącym uczynku",
  "Siempre que lo pida la policía": "Zawsze, gdy zażąda tego policja",
  "Con autorización del ayuntamiento": "Za zezwoleniem urzędu miasta",
  "El domicilio es inviolable. Solo caben el consentimiento del titular, la resolución judicial y el delito flagrante: fuera de esos tres supuestos, la entrada es ilegal.":
    "Mieszkanie jest nienaruszalne. Wchodzą w grę tylko zgoda posiadacza, postanowienie sądu i przestępstwo na gorącym uczynku: poza tymi trzema przypadkami wejście jest bezprawne.",
  "¿Para qué sirve el habeas corpus?": "Czemu służy habeas corpus?",
  "Para recurrir una sentencia firme": "Zaskarżeniu prawomocnego wyroku",
  "Para llevar de inmediato ante un juez a quien esté detenido ilegalmente":
    "Natychmiastowemu postawieniu przed sędzią osoby bezprawnie zatrzymanej",
  "Para pedir asistencia letrada gratuita": "Wnioskowaniu o bezpłatną pomoc prawną",
  "Para impugnar una ley ante el Tribunal Constitucional":
    "Zaskarżeniu ustawy przed Trybunałem Konstytucyjnym",
  "Está previsto en el artículo 17 y sirve para poner sin demora a un detenido a disposición judicial. Es la garantía práctica del límite de las setenta y dos horas.":
    "Przewiduje go artykuł 17 i służy niezwłocznemu postawieniu zatrzymanego do dyspozycji sądu. To praktyczna gwarancja granicy siedemdziesięciu dwóch godzin.",
  "¿Hace falta autorización para celebrar una manifestación en la vía pública?":
    "Czy do zorganizowania manifestacji na drodze publicznej trzeba zezwolenia?",
  "Sí, la autoridad debe concederla": "Tak, władza musi go udzielić",
  "No: basta comunicarla previamente a la autoridad":
    "Nie: wystarczy uprzednio zawiadomić władzę",
  "Solo si participan más de mil personas": "Tylko jeśli bierze udział ponad tysiąc osób",
  "Solo en las capitales de provincia": "Tylko w stolicach prowincji",
  "El artículo 21 exige comunicación previa, no autorización. La autoridad solo puede prohibirla por razones fundadas de alteración del orden público con peligro para personas o bienes.":
    "Artykuł 21 wymaga uprzedniego zawiadomienia, a nie zezwolenia. Władza może jej zakazać tylko z uzasadnionych powodów naruszenia porządku publicznego z niebezpieczeństwem dla osób albo mienia.",
  "¿Qué prohíbe expresamente el artículo 20 en materia de prensa?":
    "Czego artykuł 20 zakazuje wprost w sprawach prasy?",
  "La publicidad": "Reklamy",
  "La censura previa": "Cenzury prewencyjnej",
  "Las publicaciones extranjeras": "Publikacji zagranicznych",
  "El anonimato de las fuentes": "Anonimowości źródeł",
  "La censura previa. El mismo artículo reconoce la libertad de expresión y el derecho a comunicar y recibir información veraz.":
    "Cenzury prewencyjnej. Ten sam artykuł uznaje wolność wypowiedzi i prawo do przekazywania i otrzymywania rzetelnej informacji.",
  "¿A qué deben orientarse las penas privativas de libertad?":
    "Ku czemu mają zmierzać kary pozbawienia wolności?",
  "A la retribución del daño causado": "Ku odpłacie za wyrządzoną szkodę",
  "A la reeducación y la reinserción social": "Ku reedukacji i powrotowi do społeczeństwa",
  "A la disuasión de terceros": "Ku odstraszeniu innych",
  "Al resarcimiento de la víctima": "Ku naprawieniu szkody ofierze",
  "El artículo 25 fija la reeducación y la reinserción como orientación de las penas y las medidas de seguridad. Es un mandato constitucional, no una recomendación.":
    "Artykuł 25 wyznacza reedukację i powrót do społeczeństwa jako kierunek kar i środków zabezpieczających. To nakaz konstytucyjny, a nie zalecenie.",
  "¿Dónde está reconocido el derecho a una vivienda digna?":
    "Gdzie uznane jest prawo do godnego mieszkania?",
  "Entre los derechos fundamentales, con amparo": "Wśród praw podstawowych, z ochroną amparo",
  "En el artículo 47, entre los principios rectores": "W artykule 47, wśród zasad kierunkowych",
  "En el título preliminar": "W tytule wstępnym",
  "No aparece en la Constitución": "Nie pojawia się w konstytucji",
  "Está en el artículo 47, entre los principios rectores de la política social y económica: obliga al legislador, pero no se reclama directamente ante un juez como la libertad de expresión.":
    "Stoi w artykule 47, wśród zasad kierunkowych polityki społecznej i gospodarczej: wiąże ustawodawcę, ale nie dochodzi się go wprost przed sędzią, jak wolności wypowiedzi.",
  "¿Cuál es la diferencia práctica entre un derecho fundamental y un principio rector?":
    "Jaka jest praktyczna różnica między prawem podstawowym a zasadą kierunkową?",
  "Ninguna: los dos se alegan igual": "Żadna: obu dochodzi się tak samo",
  "El fundamental llega al amparo constitucional; el principio rector solo conforme a las leyes que lo desarrollen":
    "Podstawowe sięga amparo konstytucyjnego; zasada kierunkowa tylko zgodnie z rozwijającymi ją ustawami",
  "El principio rector obliga a las comunidades y el fundamental al Estado":
    "Zasada kierunkowa wiąże wspólnoty, a podstawowe państwo",
  "El principio rector no aparece en el texto constitucional":
    "Zasada kierunkowa nie pojawia się w tekście konstytucji",
  "La diferencia es de protección, no de importancia. Los fundamentales exigen ley orgánica y llegan al Tribunal Constitucional por la vía del amparo.":
    "Różnica dotyczy ochrony, a nie wagi. Podstawowe wymagają ustawy organicznej i docierają do Trybunału Konstytucyjnego drogą amparo.",
  "¿Qué garantiza el artículo 24?": "Co gwarantuje artykuł 24?",
  "La tutela judicial efectiva y la presunción de inocencia":
    "Skuteczną ochronę sądową i domniemanie niewinności",
  "La libertad religiosa": "Wolność religijną",
  "El derecho al trabajo": "Prawo do pracy",
  "La inviolabilidad del domicilio": "Nienaruszalność mieszkania",
  "Juez ordinario predeterminado por la ley, defensa y asistencia de letrado, proceso sin dilaciones indebidas y presunción de inocencia. Es el artículo del proceso justo.":
    "Sędzia zwyczajny wyznaczony wcześniej przez ustawę, obrona i pomoc adwokata, proces bez nieuzasadnionej zwłoki i domniemanie niewinności. To artykuł rzetelnego procesu.",
  "¿Cuándo quedó suspendido el servicio militar obligatorio en España?":
    "Kiedy w Hiszpanii zawieszono obowiązkową służbę wojskową?",
  "En 2001": "W 2001",
  "Sigue vigente": "Nadal obowiązuje",
  "En 2001. Desde entonces las Fuerzas Armadas son enteramente profesionales, aunque el artículo 30 mantiene el derecho y el deber de defender a España.":
    "W 2001. Od tego czasu siły zbrojne są w całości zawodowe, choć artykuł 30 utrzymuje prawo i obowiązek obrony Hiszpanii.",
  "¿Qué artículo impone contribuir al sostenimiento de los gastos públicos?":
    "Który artykuł nakłada obowiązek udziału w utrzymaniu wydatków publicznych?",
  "El artículo 30": "Artykuł 30",
  "El artículo 31": "Artykuł 31",
  "El artículo 35": "Artykuł 35",
  "El artículo 47": "Artykuł 47",
  "El artículo 31, según la capacidad económica de cada uno. El 30 trata de la defensa y el 35 del trabajo.":
    "Artykuł 31, według możliwości ekonomicznych każdego. Artykuł 30 dotyczy obrony, a 35 pracy.",
  "¿Qué carácter no puede tener nunca el sistema tributario?":
    "Jakiego charakteru nigdy nie może mieć system podatkowy?",
  "Progresivo": "Progresywnego",
  "Confiscatorio": "Konfiskacyjnego",
  "Igualitario": "Egalitarnego",
  "General": "Powszechnego",
  "El artículo 31 exige que sea justo, igual y progresivo, y prohíbe expresamente que tenga alcance confiscatorio: la carga no puede vaciar el patrimonio de quien la soporta.":
    "Artykuł 31 wymaga, żeby był sprawiedliwy, równy i progresywny, i zakazuje wprost, by miał zasięg konfiskacyjny: ciężar nie może opróżnić majątku tego, kto go dźwiga.",
  "¿Cuál es la regla principal de la nacionalidad española de origen?":
    "Jaka jest główna zasada hiszpańskiego obywatelstwa z urodzenia?",
  "Nacer en territorio español": "Urodzenie się na terytorium hiszpańskim",
  "Nacer de padre o madre españoles": "Urodzenie się z ojca albo matki Hiszpanów",
  "Residir cinco años en España": "Zamieszkiwanie w Hiszpanii przez pięć lat",
  "Estar inscrito en el padrón municipal": "Wpis do padrón, gminnego rejestru mieszkańców",
  "Rige el criterio de la sangre: es español de origen quien nace de padre o madre españoles, nazca donde nazca. Nacer en España no basta por sí solo.":
    "Obowiązuje zasada krwi: Hiszpanem z urodzenia jest ten, kto rodzi się z ojca albo matki Hiszpanów, gdziekolwiek się urodzi. Urodzenie się w Hiszpanii samo w sobie nie wystarcza.",
  "¿Puede privarse de la nacionalidad a un español de origen?":
    "Czy można pozbawić obywatelstwa Hiszpana z urodzenia?",
  "Sí, por sentencia judicial": "Tak, wyrokiem sądu",
  "No: el artículo 11 lo prohíbe": "Nie: artykuł 11 tego zakazuje",
  "Sí, si adquiere otra nacionalidad": "Tak, jeśli nabędzie inne obywatelstwo",
  "Solo en tiempo de guerra": "Tylko w czasie wojny",
  "El artículo 11 lo prohíbe expresamente. Quien la ha adquirido por residencia sí puede perderla en supuestos tasados, pero el español de origen no.":
    "Artykuł 11 zakazuje tego wprost. Kto nabył je przez zamieszkanie, może je stracić w wyliczonych przypadkach, ale Hiszpan z urodzenia nie.",
  "¿Con qué países permite la Constitución tratados de doble nacionalidad?":
    "Z którymi krajami konstytucja dopuszcza umowy o podwójnym obywatelstwie?",
  "Con ninguno": "Z żadnym",
  "Con los países iberoamericanos y aquellos con vinculación particular con España":
    "Z krajami iberoamerykańskimi i tymi o szczególnej więzi z Hiszpanią",
  "Solo con los Estados de la Unión Europea": "Tylko z państwami Unii Europejskiej",
  "Con todos los países del mundo": "Ze wszystkimi krajami świata",
  "El artículo 11 los prevé para los países iberoamericanos y para los que hayan tenido o tengan una vinculación particular con España, como Andorra, Filipinas, Guinea Ecuatorial y Portugal.":
    "Artykuł 11 przewiduje je dla krajów iberoamerykańskich i dla tych, które miały albo mają szczególną więź z Hiszpanią, jak Andora, Filipiny, Gwinea Równikowa i Portugalia.",
  "¿Qué plazo de residencia se exige a quien ha obtenido la condición de refugiado?":
    "Jakiego okresu zamieszkania wymaga się od osoby, która uzyskała status uchodźcy?",
  "Cinco años. Es un plazo intermedio entre el general de diez y el de dos que corresponde a los países con vínculo histórico.":
    "Pięciu lat. To termin pośredni między ogólnym dziesięcioletnim a dwuletnim, który przysługuje krajom o więzi historycznej.",
  "¿Qué plazo se aplica a quien nació en territorio español pero no es español de origen?":
    "Jaki termin stosuje się wobec osoby urodzonej na terytorium hiszpańskim, ale niebędącej Hiszpanem z urodzenia?",
  "Un año, el plazo más corto, junto con supuestos como llevar un año casado con una persona española sin estar separado.":
    "Rok, termin najkrótszy, obok przypadków takich jak roczne małżeństwo z osobą hiszpańską bez separacji.",
  "¿Qué dos pruebas acreditan el suficiente grado de integración?":
    "Które dwa egzaminy poświadczają wystarczający stopień integracji?",
  "Un examen de historia y otro de geografía": "Egzamin z historii i drugi z geografii",
  "La prueba de lengua DELE A2 y la prueba CCSE": "Egzamin językowy DELE A2 i egzamin CCSE",
  "Una entrevista en el ayuntamiento y un certificado de empadronamiento":
    "Rozmowa w urzędzie miasta i zaświadczenie o zameldowaniu",
  "Un examen del Ministerio de Justicia y una prueba médica":
    "Egzamin ministerstwa sprawiedliwości i badanie lekarskie",
  "Las dos las administra el Instituto Cervantes: el DELE A2 examina la lengua y la CCSE los conocimientos constitucionales y socioculturales.":
    "Oba przeprowadza Instituto Cervantes: DELE A2 bada język, a CCSE wiedzę konstytucyjną i społeczno-kulturową.",
  "¿Quién está exento de la prueba de lengua DELE A2?":
    "Kto jest zwolniony z egzaminu językowego DELE A2?",
  "Los mayores de sesenta y cinco años": "Osoby powyżej sześćdziesiątego piątego roku życia",
  "Quienes proceden de países donde el español es lengua oficial":
    "Osoby z krajów, w których hiszpański jest językiem urzędowym",
  "Quienes llevan más de veinte años en España":
    "Osoby, które mieszkają w Hiszpanii ponad dwadzieścia lat",
  "Nadie está exento": "Nikt nie jest zwolniony",
  "La exención alcanza a los nacionales de países hispanohablantes, que sí deben realizar en cambio la prueba CCSE.":
    "Zwolnienie obejmuje obywateli krajów hiszpańskojęzycznych, którzy muszą natomiast zdać egzamin CCSE.",
  "¿A qué edad se alcanza la mayoría de edad en España?":
    "W jakim wieku osiąga się w Hiszpanii pełnoletność?",
  "A los dieciséis": "W szesnastym roku życia",
  "A los dieciocho": "W osiemnastym roku życia",
  "A los veintiuno": "W dwudziestym pierwszym roku życia",
  "A los veinticinco": "W dwudziestym piątym roku życia",
  "A los dieciocho, y con ella llegan el derecho de voto y la plena capacidad de obrar.":
    "W osiemnastym roku życia, a wraz z nią przychodzą prawo głosu i pełna zdolność do czynności prawnych.",
  "¿A partir de qué edad es obligatorio tener el DNI?":
    "Od jakiego wieku posiadanie DNI jest obowiązkowe?",
  "A los siete": "Od siódmego roku życia",
  "A los catorce": "Od czternastego roku życia",
  "No es obligatorio": "Nie jest obowiązkowe",
  "A partir de los catorce años, cuatro antes de la mayoría de edad. Puede solicitarse antes de forma voluntaria.":
    "Od czternastego roku życia, cztery lata przed pełnoletnością. Wcześniej można o niego wystąpić dobrowolnie.",
  "¿Qué recoge el artículo 35 además del derecho al trabajo?":
    "Co poza prawem do pracy zawiera artykuł 35?",
  "El deber de trabajar": "Obowiązek pracy",
  "La jornada de cuarenta horas": "Czterdziestogodzinny czas pracy",
  "El artículo 35 enuncia a la vez el deber y el derecho al trabajo, junto con la libre elección de profesión y una remuneración suficiente. La huelga está en el artículo 28.":
    "Artykuł 35 głosi zarazem obowiązek i prawo do pracy, wraz z wolnym wyborem zawodu i wystarczającym wynagrodzeniem. Strajk stoi w artykule 28.",
  "¿Cuántos festivos del calendario laboral fija el ayuntamiento?":
    "Ile świąt kalendarza pracy ustala urząd miasta?",
  "Ninguno": "Żadnego",
  "Cuatro": "Cztery",
  "Seis": "Sześć",
  "Dos de los catorce son locales y los decide cada municipio, normalmente el día del patrón y la fiesta mayor. Por eso un festivo puede no serlo a treinta kilómetros.":
    "Dwa z czternastu są lokalne i decyduje o nich każda gmina, zwykle dzień patrona i święto główne. Dlatego dzień wolny może nim nie być trzydzieści kilometrów dalej.",
  "¿Qué día se celebra la fiesta de Cataluña?": "Którego dnia obchodzi się święto Katalonii?",
  "El 23 de abril": "23 kwietnia",
  "El 25 de julio": "25 lipca",
  "El 11 de septiembre": "11 września",
  "El 9 de octubre": "9 października",
  "El 11 de septiembre, la Diada. El 25 de julio es Galicia, el 9 de octubre la Comunidad Valenciana y el 23 de abril Aragón y Castilla y León.":
    "11 września, Diada. 25 lipca to Galicja, 9 października Wspólnota Walencka, a 23 kwietnia Aragonia i Kastylia-León.",
  "¿Qué día se celebra la fiesta de Galicia?": "Którego dnia obchodzi się święto Galicji?",
  "El 28 de febrero": "28 lutego",
  "El 6 de diciembre": "6 grudnia",
  "El 25 de julio, día de Santiago Apóstol, patrón de España y de Galicia.":
    "25 lipca, w dzień świętego Jakuba Apostoła, patrona Hiszpanii i Galicji.",
  "¿Qué día se celebra la fiesta de Andalucía?": "Którego dnia obchodzi się święto Andaluzji?",
  "El 2 de mayo": "2 maja",
  "El 28 de febrero, aniversario del referéndum autonómico de 1980. El 2 de mayo es Madrid y el 23 de abril Aragón y Castilla y León.":
    "28 lutego, w rocznicę referendum autonomicznego z 1980 roku. 2 maja to Madryt, a 23 kwietnia Aragonia i Kastylia-León.",
  "¿Qué día llegan tradicionalmente los regalos a los niños en España?":
    "Którego dnia dzieci w Hiszpanii tradycyjnie dostają prezenty?",
  "El 24 de diciembre": "24 grudnia",
  "El 25 de diciembre": "25 grudnia",
  "El 31 de diciembre": "31 grudnia",
  "El 6 de enero": "6 stycznia",
  "El 6 de enero, con los Reyes Magos, cuya cabalgata se celebra la tarde del día 5. En muchas casas conviven hoy ambas fechas, pero la de Reyes sigue siendo la principal.":
    "6 stycznia, od Trzech Króli, których orszak przejeżdża po południu 5 stycznia. W wielu domach obie daty dziś współistnieją, ale ta od Trzech Króli pozostaje główna.",
  "¿Qué día de Semana Santa es festivo en toda España?":
    "Który dzień Wielkiego Tygodnia jest wolny w całej Hiszpanii?",
  "El Domingo de Ramos": "Niedziela Palmowa",
  "El Jueves Santo": "Wielki Czwartek",
  "El Viernes Santo": "Wielki Piątek",
  "El Lunes de Pascua": "Poniedziałek Wielkanocny",
  "El Viernes Santo lo es en todo el país. El Jueves Santo lo es en la mayoría de comunidades pero no en todas, y el Lunes de Pascua solo en algunas.":
    "Wielki Piątek jest nim w całym kraju. Wielki Czwartek jest w większości wspólnot, ale nie we wszystkich, a Poniedziałek Wielkanocny tylko w niektórych.",
  "¿Desde qué lugar se retransmiten las campanadas de Nochevieja?":
    "Skąd transmituje się sylwestrowe uderzenia zegara?",
  "Desde la Plaza Mayor de Madrid": "Z Plaza Mayor w Madrycie",
  "Desde la Puerta del Sol de Madrid": "Z Puerta del Sol w Madrycie",
  "Desde la Sagrada Familia de Barcelona": "Z Sagrada Familia w Barcelonie",
  "Desde la Giralda de Sevilla": "Z Giraldy w Sewilli",
  "Desde el reloj de la Puerta del Sol. La retransmisión es uno de los programas de televisión más vistos del año en España.":
    "Z zegara na Puerta del Sol. Ta transmisja to jeden z najchętniej oglądanych programów telewizyjnych roku w Hiszpanii.",
  "¿En qué ciudad se celebran los San Fermines?": "W którym mieście obchodzi się San Fermines?",
  "En Bilbao": "W Bilbao",
  "En Zaragoza": "W Saragossie",
  "En Logroño": "W Logroño",
  "En Pamplona, del 6 al 14 de julio, y los encierros de la mañana son su imagen más conocida fuera de España.":
    "W Pampelunie, od 6 do 14 lipca, a poranne gonitwy byków są ich najbardziej znanym obrazem poza Hiszpanią.",
  "¿En qué ciudad se celebra la Feria de Abril?":
    "W którym mieście obchodzi się Feria de Abril?",
  "En Málaga": "W Maladze",
  "En Córdoba": "W Kordobie",
  "En Granada": "W Grenadzie",
  "En Sevilla, dos semanas después de Semana Santa, con casetas, caballos y trajes de flamenca.":
    "W Sewilli, dwa tygodnie po Wielkim Tygodniu, z namiotami, końmi i strojami flamenco.",
  "¿Qué son las chirigotas?": "Czym są chirigotas?",
  "Los monumentos que se queman en las Fallas": "Pomnikami, które pali się na Fallas",
  "Las agrupaciones que cantan con letras satíricas en el carnaval de Cádiz":
    "Grupami, które śpiewają satyryczne teksty na karnawale w Kadyksie",
  "Los encierros de las fiestas de Pamplona": "Gonitwami byków w święto Pampeluny",
  "Las casetas de la Feria de Abril": "Namiotami na Feria de Abril",
  "Son la seña de identidad del carnaval gaditano: coplas de humor y crítica que se preparan durante todo el año y compiten en el Gran Teatro Falla.":
    "To znak rozpoznawczy karnawału w Kadyksie: żartobliwe i krytyczne kuplety przygotowywane przez cały rok, które rywalizują w Gran Teatro Falla.",
  "¿Qué es hacer puente?": "Czym jest hacer puente?",
  "Trabajar en festivo para librar otro día": "Pracą w święto, żeby mieć wolne innego dnia",
  "Librar el lunes o el viernes contiguo a un festivo que cae en martes o jueves":
    "Wzięciem wolnego w poniedziałek albo piątek przylegający do święta wypadającego we wtorek albo czwartek",
  "Cambiar un festivo local por uno nacional": "Zamianą święta lokalnego na ogólnokrajowe",
  "Acumular las vacaciones al final del año": "Kumulowaniem urlopu na koniec roku",
  "Cuando el festivo cae en martes o jueves, muchos toman también el día que lo separa del fin de semana. Si coinciden dos festivos cercanos se habla, medio en broma, de acueducto.":
    "Gdy święto wypada we wtorek albo czwartek, wielu bierze też dzień, który dzieli je od weekendu. Gdy zbiegają się dwa bliskie święta, mówi się, pół żartem, o akwedukcie.",
  "¿Cuándo se queman los monumentos de las Fallas?": "Kiedy pali się pomniki Fallas?",
  "La noche del 19 de marzo": "W nocy 19 marca",
  "La noche de San Juan, el 23 de junio": "W noc świętego Jana, 23 czerwca",
  "El 15 de agosto": "15 sierpnia",
  "El último día del carnaval": "Ostatniego dnia karnawału",
  "La noche del 19 de marzo, la cremà. Los monumentos se levantan durante días por toda la ciudad y arden todos la misma noche.":
    "W nocy 19 marca, to cremà. Pomniki stawia się przez wiele dni w całym mieście i wszystkie płoną tej samej nocy.",
  "¿Puede una comunidad autónoma sustituir un festivo estatal por otro propio?":
    "Czy wspólnota autonomiczna może zastąpić święto państwowe własnym?",
  "No, la lista estatal es idéntica en todo el país":
    "Nie, lista państwowa jest identyczna w całym kraju",
  "Sí, dentro de los límites que fija la ley": "Tak, w granicach, które wyznacza ustawa",
  "Solo las comunidades con lengua propia": "Tylko wspólnoty z własnym językiem",
  "Solo con autorización del Gobierno central": "Tylko za zgodą rządu centralnego",
  "Las comunidades pueden sustituir algunos festivos estatales por fiestas propias, de modo que ni siquiera la lista del Estado se aplica igual en todas partes.":
    "Wspólnoty mogą zastąpić niektóre święta państwowe własnymi, tak że nawet lista państwa nie obowiązuje wszędzie tak samo.",
  "¿Qué cargo ocupa el rey en el Estado español?":
    "Jaki urząd zajmuje król w państwie hiszpańskim?",
  "Presidente del Gobierno": "Prezesa rządu",
  "Jefe del Estado": "Głowy państwa",
  "Presidente de las Cortes": "Przewodniczącego Cortes",
  "Jefe de la Administración": "Szefa administracji",
  "Jefe del Estado, símbolo de su unidad y permanencia. Quien dirige la política es el presidente del Gobierno, que es otro cargo y está en otro edificio.":
    "Głowa państwa, symbol jego jedności i trwałości. Politykę prowadzi prezes rządu, a to inny urząd i inny budynek.",
  "¿Qué dos verbos emplea el artículo 56 para describir la función del rey?":
    "Których dwóch czasowników używa artykuł 56, żeby opisać funkcję króla?",
  "Gobernar y administrar": "Rządzić i administrować",
  "Arbitrar y moderar": "Arbitrować i moderować",
  "Legislar y sancionar": "Stanowić prawo i sankcjonować",
  "Dirigir y coordinar": "Kierować i koordynować",
  "Arbitra y modera el funcionamiento regular de las instituciones. Ninguno de los dos verbos significa gobernar, y esa elección de palabras es deliberada.":
    "Arbitruje i moderuje regularne funkcjonowanie instytucji. Żaden z tych dwóch czasowników nie znaczy rządzić, a ten wybór słów jest celowy.",
  "¿Quién puede refrendar el nombramiento del presidente del Gobierno?":
    "Kto może kontrasygnować powołanie prezesa rządu?",
  "El presidente del Congreso": "Przewodniczący Kongresu",
  "El ministro de la Presidencia": "Minister przy prezesie rządu",
  "El presidente del Tribunal Supremo": "Prezes Sądu Najwyższego",
  "Nadie: ese acto no se refrenda": "Nikt: ten akt nie jest kontrasygnowany",
  "La propuesta y el nombramiento del presidente del Gobierno, y la disolución de las Cortes prevista en el artículo 99, los refrenda el presidente del Congreso. Los demás actos, el Gobierno.":
    "Wniosek i powołanie prezesa rządu oraz rozwiązanie Cortes przewidziane w artykule 99 kontrasygnuje przewodniczący Kongresu. Pozostałe akty rząd.",
  "¿Por qué la Constitución declara inviolable la persona del rey?":
    "Dlaczego konstytucja ogłasza osobę króla nietykalną?",
  "Porque su cargo es vitalicio": "Bo jego urząd jest dożywotni",
  "Porque todos sus actos los refrenda otro, que asume la responsabilidad":
    "Bo wszystkie jego akty kontrasygnuje ktoś inny, kto bierze odpowiedzialność",
  "Porque no interviene en ningún acto público":
    "Bo nie bierze udziału w żadnym akcie publicznym",
  "Porque lo protege un tratado internacional": "Bo chroni go umowa międzynarodowa",
  "La irresponsabilidad del rey solo se sostiene sobre el refrendo: siempre hay alguien que firma con él y responde. Un acto sin refrendo carece de validez.":
    "Nieodpowiedzialność króla trzyma się wyłącznie na kontrasygnacie: zawsze jest ktoś, kto podpisuje razem z nim i odpowiada. Akt bez kontrasygnaty jest nieważny.",
  "¿En qué plazo debe el rey sancionar las leyes aprobadas por las Cortes?":
    "W jakim terminie król musi sankcjonować ustawy uchwalone przez Cortes?",
  "En quince días": "W piętnaście dni",
  "En un mes": "W miesiąc",
  "En tres meses": "W trzy miesiące",
  "No hay plazo": "Terminu nie ma",
  "Quince días para sancionar y promulgar. Es un acto debido: no puede negarse ni retrasarlo a voluntad.":
    "Piętnaście dni na sankcję i promulgację. To akt należny: nie może odmówić ani odwlekać go wedle woli.",
  "¿Qué tipo de indultos prohíbe la ley española?":
    "Jakiego rodzaju ułaskawień zakazuje prawo hiszpańskie?",
  "Los indultos generales": "Ułaskawień powszechnych",
  "Los indultos a extranjeros": "Ułaskawień cudzoziemców",
  "Los indultos por delitos económicos": "Ułaskawień za przestępstwa gospodarcze",
  "El rey ejerce el derecho de gracia con arreglo a la ley, y esa ley prohíbe los indultos generales. Los individuales sí son posibles, a propuesta del Gobierno.":
    "Król wykonuje prawo łaski zgodnie z ustawą, a ta ustawa zakazuje ułaskawień powszechnych. Indywidualne są możliwe, na wniosek rządu.",
  "¿Qué criterio de sucesión establece todavía el artículo 57?":
    "Jakie kryterium następstwa tronu wciąż ustanawia artykuł 57?",
  "Igualdad absoluta entre hombres y mujeres": "Pełną równość mężczyzn i kobiet",
  "Preferencia del varón sobre la mujer en el mismo grado":
    "Pierwszeństwo mężczyzny przed kobietą w tym samym stopniu",
  "Elección por las Cortes entre los descendientes": "Wybór przez Cortes spośród potomków",
  "Preferencia del hijo mayor sin distinción de sexo":
    "Pierwszeństwo najstarszego dziecka bez różnicy płci",
  "Es la única preferencia por razón de sexo que queda en el texto. Cambiarla exigiría el procedimiento agravado del artículo 168, con disolución de las Cortes y referéndum.":
    "To jedyne pierwszeństwo ze względu na płeć, jakie pozostało w tekście. Zmiana wymagałaby trybu zaostrzonego z artykułu 168, z rozwiązaniem Cortes i referendum.",
  "¿En qué año fue proclamado rey Juan Carlos I?":
    "W którym roku Jan Karol I został ogłoszony królem?",
  "En 1969": "W 1969",
  "En 1981": "W 1981",
  "En 1975, dos días después de la muerte de Franco. La Constitución llegaría tres años más tarde, en 1978.":
    "W 1975, dwa dni po śmierci Franco. Konstytucja przyszła trzy lata później, w 1978.",
  "¿En qué año fue proclamado Felipe VI?": "W którym roku ogłoszono królem Filipa VI?",
  "En 2004": "W 2004",
  "En 2011": "W 2011",
  "En 2014": "W 2014",
  "En 2018": "W 2018",
  "El 19 de junio de 2014, tras la abdicación de su padre. La proclamación se celebró ante las Cortes Generales.":
    "19 czerwca 2014 roku, po abdykacji ojca. Proklamacja odbyła się przed Cortes Generales.",
  "¿Cuál es la residencia habitual de la familia real?":
    "Jaka jest stała rezydencja rodziny królewskiej?",
  "El Palacio Real": "Pałac Królewski",
  "El Palacio de la Zarzuela": "Pałac Zarzuela",
  "El Palacio de la Moncloa": "Pałac Moncloa",
  "El Palacio de las Cortes": "Pałac Cortes",
  "La Zarzuela es la residencia; el Palacio Real se reserva para actos oficiales. La Moncloa es del presidente del Gobierno.":
    "Zarzuela jest rezydencją; Pałac Królewski zachowano na akty oficjalne. Moncloa należy do prezesa rządu.",
  "¿Qué hace el rey al ser proclamado ante las Cortes?":
    "Co robi król przy proklamacji przed Cortes?",
  "Presenta un programa de gobierno": "Przedstawia program rządu",
  "Presta juramento de guardar y hacer guardar la Constitución":
    "Składa przysięgę przestrzegania i strzeżenia konstytucji",
  "Firma un pacto con los partidos": "Podpisuje pakt z partiami",
  "Nombra al presidente del Gobierno": "Powołuje prezesa rządu",
  "Jura o promete guardar y hacer guardar la Constitución y las leyes, y respetar los derechos de los ciudadanos y de las comunidades autónomas.":
    "Przysięga albo przyrzeka przestrzegać i strzec konstytucji i ustaw oraz szanować prawa obywateli i wspólnot autonomicznych.",
  "¿Quién tiene el mando supremo de las Fuerzas Armadas?":
    "Kto ma najwyższe zwierzchnictwo nad siłami zbrojnymi?",
  "El ministro de Defensa": "Minister obrony",
  "El jefe del Estado Mayor": "Szef sztabu generalnego",
  "El artículo 62 se lo atribuye al rey. La dirección efectiva de la defensa corresponde al Gobierno, según el artículo 97: el mando es simbólico y la política es del ejecutivo.":
    "Artykuł 62 przypisuje je królowi. Faktyczne kierowanie obroną należy do rządu, według artykułu 97: zwierzchnictwo jest symboliczne, a polityka należy do władzy wykonawczej.",
  "¿Qué ocurre con un acto del rey que no lleva refrendo?":
    "Co dzieje się z aktem króla, który nie ma kontrasygnaty?",
  "Es válido pero recurrible": "Jest ważny, ale zaskarżalny",
  "Carece de validez": "Jest nieważny",
  "Debe ratificarlo el Congreso": "Musi go zatwierdzić Kongres",
  "Lo asume el Consejo de Ministros": "Przejmuje go Rada Ministrów",
  "Sin refrendo el acto no vale. Es la pieza que hace compatibles un jefe del Estado irresponsable y un sistema en el que todo acto tiene un responsable.":
    "Bez kontrasygnaty akt nie ma mocy. To element, który godzi nieodpowiedzialną głowę państwa z ustrojem, w którym każdy akt ma odpowiedzialnego.",
  "¿Entre qué cifras permite la Constitución fijar el número de diputados?":
    "Między jakimi liczbami konstytucja pozwala ustalić liczbę posłów?",
  "Entre 200 y 300": "Między 200 a 300",
  "Entre 300 y 400": "Między 300 a 400",
  "Entre 250 y 350": "Między 250 a 350",
  "No fija ninguna horquilla": "Nie ustala żadnych widełek",
  "Entre trescientos y cuatrocientos. La ley electoral ha elegido siempre trescientos cincuenta, pero podría moverse dentro de ese margen sin reformar la Constitución.":
    "Między trzystu a czterystu. Ordynacja wyborcza zawsze wybierała trzystu pięćdziesięciu, ale mogłaby się poruszać w tych granicach bez zmiany konstytucji.",
  "¿Cuál es la circunscripción electoral en las elecciones al Congreso?":
    "Co jest okręgiem wyborczym w wyborach do Kongresu?",
  "La comunidad autónoma": "Wspólnota autonomiczna",
  "La provincia": "Prowincja",
  "El municipio": "Gmina",
  "Toda España como circunscripción única": "Cała Hiszpania jako jeden okręg",
  "La provincia, más Ceuta y Melilla con un diputado cada una. La circunscripción única solo se usa en las elecciones europeas.":
    "Prowincja, plus Ceuta i Melilla po jednym pośle. Jeden okręg dla całego kraju stosuje się tylko w wyborach europejskich.",
  "¿Qué mecanismo da a las provincias pequeñas más peso relativo?":
    "Który mechanizm daje małym prowincjom większą wagę względną?",
  "El sistema D'Hondt": "System D'Hondta",
  "El mínimo inicial de dos escaños por provincia":
    "Wyjściowe minimum dwóch mandatów na prowincję",
  "El umbral del tres por ciento": "Próg trzech procent",
  "Las listas cerradas": "Listy zamknięte",
  "Cada provincia parte de dos escaños antes de repartir el resto por población. Es un efecto distinto del que produce el D'Hondt, y suele atribuirse por error a este último.":
    "Każda prowincja startuje z dwoma mandatami, zanim rozdzieli się resztę według liczby ludności. To skutek inny niż ten, który daje D'Hondt, a często błędnie przypisuje się go temu drugiemu.",
  "¿Qué umbral debe superar una lista para obtener escaño?":
    "Jaki próg musi przekroczyć lista, żeby uzyskać mandat?",
  "El uno por ciento nacional": "Jeden procent w skali kraju",
  "El tres por ciento de los votos válidos de su circunscripción":
    "Trzy procent ważnych głosów w swoim okręgu",
  "El cinco por ciento nacional": "Pięć procent w skali kraju",
  "No hay umbral": "Progu nie ma",
  "El tres por ciento, y se calcula por circunscripción, no en el conjunto del país. En provincias pequeñas el umbral efectivo es en la práctica mucho más alto.":
    "Trzy procent, i liczy się je w okręgu, a nie w skali kraju. W małych prowincjach próg rzeczywisty jest w praktyce dużo wyższy.",
  "¿Qué significa que las listas sean cerradas y bloqueadas?":
    "Co znaczy, że listy są zamknięte i zablokowane?",
  "Que solo pueden presentarlas los partidos con representación":
    "Że mogą je wystawiać tylko partie z reprezentacją",
  "Que se vota la candidatura entera en el orden fijado por el partido":
    "Że głosuje się na całą listę w kolejności ustalonej przez partię",
  "Que no se publican hasta el día de la votación": "Że nie ogłasza się ich do dnia głosowania",
  "Que no admiten candidatos independientes": "Że nie dopuszczają kandydatów niezależnych",
  "Cerrada significa que no se pueden mezclar candidatos de listas distintas; bloqueada, que no se puede alterar el orden. El votante elige un partido, no personas.":
    "Zamknięta znaczy, że nie można mieszać kandydatów z różnych list; zablokowana, że nie można zmienić kolejności. Wyborca wybiera partię, a nie osoby.",
  "¿Cuántos senadores elige directamente cada provincia peninsular?":
    "Ilu senatorów wybiera bezpośrednio każda prowincja półwyspowa?",
  "Depende de su población": "Zależy od liczby ludności",
  "Cuatro por provincia peninsular, con independencia de la población. Las islas y las ciudades autónomas siguen reglas propias, y a todos ellos se suman los designados por las comunidades.":
    "Czterech na prowincję półwyspową, niezależnie od liczby ludności. Wyspy i miasta autonomiczne mają własne reguły, a do nich wszystkich dochodzą senatorowie wyznaczeni przez wspólnoty.",
  "¿Cómo designan las comunidades autónomas a sus senadores?":
    "Jak wspólnoty autonomiczne wyznaczają swoich senatorów?",
  "Uno por comunidad y otro más por cada millón de habitantes":
    "Po jednym na wspólnotę i jeszcze po jednym na każdy milion mieszkańców",
  "Cuatro por comunidad": "Po czterech na wspólnotę",
  "Uno por provincia": "Po jednym na prowincję",
  "En proporción a los escaños de su parlamento":
    "Proporcjonalnie do mandatów w swoim parlamencie",
  "Uno fijo por comunidad y otro adicional por cada millón de habitantes, designados por su asamblea legislativa. Es la vía territorial del Senado, junto a la provincial.":
    "Jeden stały na wspólnotę i dodatkowy na każdy milion mieszkańców, wyznaczani przez jej zgromadzenie ustawodawcze. To droga terytorialna do Senatu, obok prowincjonalnej.",
  "¿Cuánto dura una legislatura?": "Ile trwa kadencja parlamentu?",
  "Seis años": "Sześć lat",
  "Cuatro años, salvo disolución anticipada, que en España ha sido frecuente: pocas legislaturas han llegado completas a su término.":
    "Cztery lata, o ile nie dojdzie do wcześniejszego rozwiązania, co w Hiszpanii zdarzało się często: mało która kadencja dobiegła pełnego końca.",
  "¿Cuánto tiempo debe pasar para que el Congreso levante un veto del Senado por mayoría simple?":
    "Ile czasu musi minąć, żeby Kongres odrzucił weto Senatu zwykłą większością?",
  "Quince días": "Piętnaście dni",
  "Un mes": "Miesiąc",
  "Dos meses": "Dwa miesiące",
  "Seis meses": "Sześć miesięcy",
  "Dos meses. Antes de ese plazo también puede levantarlo, pero necesita mayoría absoluta: el tiempo rebaja la exigencia.":
    "Dwa miesiące. Przed tym terminem też może je odrzucić, ale potrzebuje większości bezwzględnej: czas obniża wymóg.",
  "¿Qué es la Diputación Permanente?": "Czym jest Diputación Permanente?",
  "El grupo que vela por los poderes de la cámara cuando está disuelta o fuera de sesiones":
    "Zespołem, który strzeże uprawnień izby, gdy jest rozwiązana albo poza sesją",
  "La comisión que redacta los presupuestos": "Komisją, która układa budżet",
  "El órgano que dirige los debates": "Organem, który prowadzi debaty",
  "El conjunto de diputados con más antigüedad": "Zbiorem posłów o najdłuższym stażu",
  "Cada cámara tiene la suya, presidida por su presidente. Es lo que impide que el Parlamento desaparezca del todo entre una disolución y las siguientes elecciones.":
    "Każda izba ma własną, a przewodniczy jej jej przewodniczący. To ona nie pozwala parlamentowi zniknąć całkiem między rozwiązaniem a kolejnymi wyborami.",
  "¿Qué tres funciones atribuye el artículo 66 a las Cortes Generales?":
    "Które trzy funkcje przypisuje artykuł 66 Cortes Generales?",
  "Legislar, aprobar los presupuestos y controlar al Gobierno":
    "Stanowienie prawa, uchwalanie budżetu i kontrolę rządu",
  "Legislar, juzgar y gobernar": "Stanowienie prawa, sądzenie i rządzenie",
  "Elegir al rey, legislar y nombrar jueces":
    "Wybór króla, stanowienie prawa i powoływanie sędziów",
  "Aprobar tratados, indultar y recaudar":
    "Zatwierdzanie traktatów, ułaskawianie i pobieranie podatków",
  "Potestad legislativa, presupuestos y control de la acción del Gobierno. Juzgar corresponde al poder judicial y gobernar al ejecutivo.":
    "Władza ustawodawcza, budżet i kontrola działania rządu. Sądzenie należy do władzy sądowniczej, a rządzenie do wykonawczej.",
  "¿Cuántos diputados eligen Ceuta y Melilla?": "Ilu posłów wybierają Ceuta i Melilla?",
  "Uno cada una": "Po jednym",
  "Dos cada una": "Po dwóch",
  "Cuatro cada una": "Po czterech",
  "Un diputado cada una. Son circunscripciones propias, distintas de las provincias, y también eligen senadores con reglas específicas.":
    "Po jednym pośle. To osobne okręgi, różne od prowincji, i wybierają też senatorów według szczególnych reguł.",
  "¿Por qué se dice que el bicameralismo español es imperfecto?":
    "Dlaczego mówi się, że hiszpańska dwuizbowość jest niedoskonała?",
  "Porque el Senado tiene menos miembros": "Bo Senat ma mniej członków",
  "Porque las dos cámaras no tienen el mismo peso y el Congreso decide en última instancia":
    "Bo obie izby nie mają tej samej wagi, a Kongres rozstrzyga w ostatniej instancji",
  "Porque el Senado no se elige por sufragio": "Bo Senat nie pochodzi z wyborów",
  "Porque solo una de las dos aprueba los presupuestos": "Bo budżet uchwala tylko jedna z dwóch",
  "El Congreso inviste al presidente, puede derribarlo y levanta los vetos del Senado. Imperfecto es aquí un término técnico, no un juicio de valor.":
    "Kongres udziela wotum zaufania premierowi, może go obalić i odrzuca weta Senatu. Niedoskonała jest tu terminem technicznym, a nie oceną.",
  "¿Quiénes componen el Gobierno?": "Kto tworzy rząd?",
  "El presidente, los vicepresidentes y los ministros": "Prezes, wicepremierzy i ministrowie",
  "El rey y los ministros": "Król i ministrowie",
  "Los diputados del partido más votado": "Posłowie partii z największą liczbą głosów",
  "El presidente y los presidentes autonómicos": "Prezes i przewodniczący wspólnot",
  "Presidente, vicepresidentes en su caso y ministros, que reunidos forman el Consejo de Ministros. El rey no forma parte del Gobierno.":
    "Prezes, w danym razie wicepremierzy i ministrowie, którzy zebrani tworzą Radę Ministrów. Król nie wchodzi w skład rządu.",
  "¿Qué artículo define las funciones del Gobierno?": "Który artykuł określa funkcje rządu?",
  "El artículo 66": "Artykuł 66",
  "El artículo 97": "Artykuł 97",
  "El artículo 99": "Artykuł 99",
  "El artículo 117": "Artykuł 117",
  "El 97: política interior y exterior, Administración civil y militar, defensa, función ejecutiva y potestad reglamentaria. El 99 regula la investidura.":
    "Artykuł 97: polityka wewnętrzna i zagraniczna, administracja cywilna i wojskowa, obrona, funkcja wykonawcza i władza wydawania rozporządzeń. Artykuł 99 reguluje wotum zaufania.",
  "¿Qué hace el rey antes de proponer un candidato a la presidencia?":
    "Co robi król, zanim zaproponuje kandydata na prezesa rządu?",
  "Consultar a los representantes designados por los grupos políticos":
    "Konsultuje się z przedstawicielami wyznaczonymi przez grupy polityczne",
  "Consultar al Tribunal Constitucional": "Konsultuje się z Trybunałem Konstytucyjnym",
  "Convocar un referéndum": "Zwołuje referendum",
  "Nombrar un gobierno provisional": "Powołuje rząd tymczasowy",
  "Las consultas son una ronda de reuniones con los grupos con representación, y sirven para saber quién puede reunir una mayoría antes de proponer un nombre.":
    "Konsultacje to runda spotkań z grupami mającymi reprezentację i służą temu, żeby wiedzieć, kto może zebrać większość, zanim padnie nazwisko.",
  "¿Qué ocurre si en dos meses nadie logra ser investido presidente?":
    "Co się dzieje, jeśli w dwa miesiące nikt nie uzyska wotum zaufania?",
  "Gobierna el partido más votado": "Rządzi partia z największą liczbą głosów",
  "El rey disuelve las Cortes y se convocan nuevas elecciones":
    "Król rozwiązuje Cortes i rozpisuje się nowe wybory",
  "Decide el Senado": "Rozstrzyga Senat",
  "Se prorroga el gobierno anterior cuatro años": "Poprzedni rząd przedłuża się o cztery lata",
  "El plazo corre desde la primera votación de investidura. España ha llegado a repetir elecciones por esta vía en más de una ocasión.":
    "Termin biegnie od pierwszego głosowania o wotum zaufania. Hiszpania nieraz doszła tą drogą do powtórzonych wyborów.",
  "¿Qué mayoría basta en la segunda votación de investidura?":
    "Jaka większość wystarcza w drugim głosowaniu o wotum zaufania?",
  "La misma que en la primera": "Ta sama co w pierwszym",
  "Mayoría simple: más votos a favor que en contra. Se celebra cuarenta y ocho horas después de la primera, en la que se exigía mayoría absoluta.":
    "Większość zwykła: więcej głosów za niż przeciw. Odbywa się czterdzieści osiem godzin po pierwszym, w którym wymagano większości bezwzględnej.",
  "¿Qué fracción de los diputados debe firmar una moción de censura?":
    "Jaka część posłów musi podpisać wniosek o wotum nieufności?",
  "Una décima parte": "Jedna dziesiąta",
  "Una cuarta parte": "Jedna czwarta",
  "Un tercio": "Jedna trzecia",
  "La mayoría absoluta": "Większość bezwzględna",
  "Una décima parte del Congreso para presentarla. Para que prospere hace falta después la mayoría absoluta de la cámara.":
    "Jedna dziesiąta Kongresu, żeby go złożyć. Żeby przeszedł, potrzebna jest potem bezwzględna większość izby.",
  "¿Cuántas veces ha prosperado una moción de censura desde 1978?":
    "Ile razy od 1978 roku wniosek o wotum nieufności przeszedł?",
  "Una": "Raz",
  "Una sola, en 2018. El carácter constructivo lo explica: es fácil reunir votos contra alguien y difícil reunirlos a favor de un sustituto concreto.":
    "Jeden jedyny raz, w 2018 roku. Tłumaczy to jego konstruktywny charakter: łatwo zebrać głosy przeciw komuś, a trudno za konkretnym następcą.",
  "¿Qué mayoría exige una cuestión de confianza?":
    "Jakiej większości wymaga wniosek o wotum zaufania?",
  "Mayoría simple, a diferencia de la moción de censura, que exige mayoría absoluta. La plantea el propio presidente y perderla le obliga a dimitir.":
    "Zwykłej, w odróżnieniu od wniosku o wotum nieufności, który wymaga większości bezwzględnej. Zgłasza go sam prezes rządu, a przegrana zmusza go do dymisji.",
  "¿Cuándo NO puede el presidente disolver las Cortes?":
    "Kiedy prezes rządu NIE może rozwiązać Cortes?",
  "En el primer año de legislatura": "W pierwszym roku kadencji",
  "Mientras esté en trámite una moción de censura":
    "Gdy trwa postępowanie nad wnioskiem o wotum nieufności",
  "Durante el periodo de sesiones": "W czasie sesji",
  "En año electoral europeo": "W roku wyborów europejskich",
  "Ni con una moción de censura en trámite, ni antes de que haya pasado un año desde la disolución anterior. Las dos limitaciones están en el artículo 115.":
    "Ani gdy trwa postępowanie nad wnioskiem o wotum nieufności, ani zanim minie rok od poprzedniego rozwiązania. Oba ograniczenia stoją w artykule 115.",
  "¿Qué es la potestad reglamentaria?": "Czym jest władza wydawania rozporządzeń?",
  "La facultad del Gobierno de dictar normas de rango inferior a la ley":
    "Uprawnieniem rządu do wydawania aktów niższego rzędu niż ustawa",
  "El derecho del Gobierno a vetar leyes": "Prawem rządu do wetowania ustaw",
  "La capacidad de convocar referendos": "Możliwością zwoływania referendów",
  "El poder de nombrar jueces": "Władzą powoływania sędziów",
  "Los reglamentos desarrollan y aplican las leyes sin poder contradecirlas. Es una de las funciones que el artículo 97 atribuye al Gobierno.":
    "Rozporządzenia rozwijają i stosują ustawy, nie mogąc im przeczyć. To jedna z funkcji, które artykuł 97 przypisuje rządowi.",
  "¿Cómo se llama el órgano colegiado que forman el presidente y los ministros?":
    "Jak nazywa się organ kolegialny, który tworzą prezes rządu i ministrowie?",
  "El Consejo de Estado": "Consejo de Estado",
  "El Consejo de Ministros": "Rada Ministrów",
  "El Consejo General": "Consejo General",
  "La Junta de Gobierno": "Junta de Gobierno",
  "El Consejo de Ministros. El Consejo de Estado es otra cosa: el supremo órgano consultivo del Gobierno.":
    "Rada Ministrów. Consejo de Estado to co innego: najwyższy organ doradczy rządu.",
  "¿Cuántos días deben pasar entre la presentación de una moción de censura y su votación?":
    "Ile dni musi minąć między złożeniem wniosku o wotum nieufności a głosowaniem nad nim?",
  "Cinco días, y en los dos primeros pueden presentarse mociones alternativas. El plazo da tiempo a negociar y a que aparezcan otros candidatos.":
    "Pięć dni, a w pierwszych dwóch można składać wnioski alternatywne. Termin daje czas na negocjacje i na pojawienie się innych kandydatów.",
  "¿Qué le ocurre al candidato incluido en una moción de censura que prospera?":
    "Co dzieje się z kandydatem ujętym we wniosku o wotum nieufności, który przechodzi?",
  "Debe someterse después a una investidura ordinaria":
    "Musi potem przejść zwykłą procedurę wotum zaufania",
  "Queda automáticamente investido presidente": "Automatycznie zostaje prezesem rządu",
  "Asume solo de forma interina hasta las elecciones":
    "Obejmuje urząd tylko tymczasowo, do wyborów",
  "Debe ser ratificado por el Senado": "Musi go zatwierdzić Senat",
  "La moción constructiva inviste y destituye en el mismo acto. Por eso no puede presentarse sin candidato: no serviría para nada dejar el país sin gobierno.":
    "Wniosek konstruktywny w jednym akcie powołuje i odwołuje. Dlatego nie można go złożyć bez kandydata: zostawienie kraju bez rządu nie służyłoby niczemu.",
  "¿En nombre de quién se administra la justicia en España?":
    "W czyim imieniu wymierza się w Hiszpanii sprawiedliwość?",
  "Del pueblo": "Ludu",
  "Del rey": "Króla",
  "Del Estado": "Państwa",
  "De las Cortes": "Cortes",
  "El artículo 117 dice que la justicia emana del pueblo y se administra en nombre del rey. Las dos mitades de la frase van juntas y suelen citarse a medias.":
    "Artykuł 117 mówi, że sprawiedliwość wypływa z ludu i wymierza się ją w imieniu króla. Obie połowy tego zdania idą razem, a cytuje się je zwykle po połowie.",
  "¿Cómo se accede a la carrera judicial?": "Jak wchodzi się do zawodu sędziego?",
  "Por nombramiento del Gobierno": "Przez powołanie przez rząd",
  "Por oposición": "Przez konkurs",
  "Por elección popular": "Przez wybór powszechny",
  "Por designación del CGPJ": "Przez wyznaczenie przez CGPJ",
  "Por oposición, un examen público y competitivo. Es lo que mantiene el acceso fuera del alcance de la política, aunque el gobierno de la carrera lo lleve el CGPJ.":
    "Przez konkurs, publiczny egzamin z rywalizacją. To właśnie trzyma wejście poza zasięgiem polityki, choć zarząd nad karierą sprawuje CGPJ.",
  "¿Cuántos vocales tiene el Consejo General del Poder Judicial?":
    "Ilu członków ma Consejo General del Poder Judicial?",
  "Veinticinco": "Dwudziestu pięciu",
  "Veinte vocales más su presidente, que lo es también del Tribunal Supremo, con mandato de cinco años. Doce son los magistrados del Tribunal Constitucional.":
    "Dwudziestu członków plus przewodniczący, który jest zarazem prezesem Sądu Najwyższego, z pięcioletnią kadencją. Dwunastu to sędziowie Trybunału Konstytucyjnego.",
  "¿Cuáles son los cuatro órdenes jurisdiccionales?": "Jakie są cztery piony orzecznicze?",
  "Civil, penal, contencioso-administrativo y social":
    "Cywilny, karny, administracyjny i socjalny",
  "Civil, penal, militar y mercantil": "Cywilny, karny, wojskowy i handlowy",
  "Constitucional, civil, penal y laboral": "Konstytucyjny, cywilny, karny i pracy",
  "Ordinario, especial, foral y autonómico": "Zwykły, szczególny, foralny i autonomiczny",
  "El contencioso-administrativo resuelve los pleitos con la Administración y el social los laborales. La jurisdicción militar existe, pero no es uno de los cuatro órdenes ordinarios.":
    "Pion administracyjny rozstrzyga spory z administracją, a socjalny sprawy pracownicze. Sądownictwo wojskowe istnieje, ale nie jest jednym z czterech pionów zwykłych.",
  "¿Qué tribunal tiene competencia en toda España sobre delitos como el terrorismo?":
    "Który sąd ma właściwość w całej Hiszpanii w sprawach takich jak terroryzm?",
  "La Audiencia Nacional": "Audiencia Nacional",
  "Las Audiencias Provinciales": "Audiencias Provinciales",
  "La Audiencia Nacional, con sede en Madrid y jurisdicción en todo el territorio para materias tasadas: terrorismo, delitos económicos de gran alcance, extradiciones.":
    "Audiencia Nacional, z siedzibą w Madrycie i jurysdykcją na całym terytorium w wyliczonych sprawach: terroryzm, przestępstwa gospodarcze wielkiej skali, ekstradycje.",
  "¿Cuántos Tribunales Superiores de Justicia hay?":
    "Ile jest Tribunales Superiores de Justicia?",
  "Uno por comunidad autónoma": "Po jednym na wspólnotę autonomiczną",
  "Cuatro, uno por orden jurisdiccional": "Cztery, po jednym na pion orzeczniczy",
  "Uno por comunidad autónoma. Culminan la organización judicial en su territorio, pero no están por encima del Tribunal Supremo.":
    "Po jednym na wspólnotę autonomiczną. Wieńczą organizację sądową na swoim terenie, ale nie stoją ponad Sądem Najwyższym.",
  "¿Quién nombra al fiscal general del Estado?": "Kto powołuje prokuratora generalnego państwa?",
  "El rey, a propuesta del Gobierno, oído el CGPJ":
    "Król, na wniosek rządu, po wysłuchaniu CGPJ",
  "El Congreso por tres quintos": "Kongres większością trzech piątych",
  "El propio Ministerio Fiscal": "Sama prokuratura",
  "Lo nombra el rey a propuesta del Gobierno, oído el Consejo General del Poder Judicial. Esa dependencia del ejecutivo es objeto de debate recurrente.":
    "Powołuje go król na wniosek rządu, po wysłuchaniu Consejo General del Poder Judicial. Ta zależność od władzy wykonawczej jest przedmiotem powracającej debaty.",
  "¿Cuántos magistrados del Tribunal Constitucional propone el Congreso?":
    "Ilu sędziów Trybunału Konstytucyjnego proponuje Kongres?",
  "Ocho": "Ośmiu",
  "Cuatro, por mayoría de tres quintos. Otros cuatro los propone el Senado, dos el Gobierno y dos el Consejo General del Poder Judicial.":
    "Czterech, większością trzech piątych. Kolejnych czterech proponuje Senat, dwóch rząd, a dwóch Consejo General del Poder Judicial.",
  "¿Cuánto dura el mandato de un magistrado del Tribunal Constitucional?":
    "Ile trwa kadencja sędziego Trybunału Konstytucyjnego?",
  "Nueve años": "Dziewięć lat",
  "Doce años": "Dwanaście lat",
  "Nueve años, y el tribunal se renueva por terceras partes cada tres, de modo que nunca cambia entero de una vez.":
    "Dziewięć lat, a trybunał odnawia się w jednej trzeciej co trzy lata, tak że nigdy nie zmienia się cały naraz.",
  "¿Cada cuánto se renueva por terceras partes el Tribunal Constitucional?":
    "Co ile lat Trybunał Konstytucyjny odnawia się w jednej trzeciej?",
  "Cada año": "Co rok",
  "Cada tres años": "Co trzy lata",
  "Cada cinco años": "Co pięć lat",
  "Cada nueve años": "Co dziewięć lat",
  "Cada tres años se renueva un tercio. El escalonamiento evita que una sola mayoría parlamentaria componga el tribunal entero.":
    "Co trzy lata odnawia się jedna trzecia. Rozłożenie w czasie nie pozwala jednej większości parlamentarnej złożyć całego trybunału.",
  "¿Cuál de estas NO es competencia del Tribunal Constitucional?":
    "Które z tych NIE należy do kompetencji Trybunału Konstytucyjnego?",
  "El recurso de inconstitucionalidad": "Skarga o niekonstytucyjność",
  "El recurso de amparo": "Skarga amparo",
  "Los conflictos de competencia entre el Estado y las comunidades":
    "Spory kompetencyjne między państwem a wspólnotami",
  "El recurso de casación penal": "Kasacja karna",
  "La casación es del Tribunal Supremo, que culmina la jurisdicción ordinaria. El Constitucional juzga leyes, derechos fundamentales y repartos de competencia.":
    "Kasacja należy do Sądu Najwyższego, który wieńczy sądownictwo zwykłe. Trybunał Konstytucyjny sądzi ustawy, prawa podstawowe i podział kompetencji.",
  "¿Qué orden jurisdiccional resuelve los pleitos con la Administración?":
    "Który pion orzeczniczy rozstrzyga spory z administracją?",
  "El civil": "Cywilny",
  "El penal": "Karny",
  "El contencioso-administrativo": "Administracyjny",
  "El social": "Socjalny",
  "El contencioso-administrativo. El social ve los conflictos laborales y de Seguridad Social, y el civil los de particulares entre sí.":
    "Pion administracyjny. Socjalny rozpatruje spory pracownicze i z ubezpieczenia społecznego, a cywilny spory osób prywatnych między sobą.",
  "¿Qué prevé el artículo 125 sobre la participación ciudadana en la justicia?":
    "Co przewiduje artykuł 125 co do udziału obywateli w wymiarze sprawiedliwości?",
  "El tribunal del jurado": "Sąd przysięgłych",
  "La elección popular de los jueces": "Wybór sędziów przez lud",
  "El referéndum sobre sentencias": "Referendum w sprawie wyroków",
  "La mediación obligatoria": "Obowiązkową mediację",
  "El artículo 125 abre la puerta a la acción popular y al jurado, que juzga determinados delitos. Los jueces profesionales no se eligen: se accede por oposición.":
    "Artykuł 125 otwiera drogę do skargi powszechnej i do ławy przysięgłych, która sądzi określone przestępstwa. Sędziów zawodowych się nie wybiera: wchodzi się przez konkurs.",
  "¿Desde qué edad se puede votar en España?": "Od jakiego wieku można w Hiszpanii głosować?",
  "Desde los dieciséis": "Od szesnastu lat",
  "Desde los dieciocho": "Od osiemnastu lat",
  "Desde los veintiuno": "Od dwudziestu jeden lat",
  "Desde los veinticinco": "Od dwudziestu pięciu lat",
  "Desde los dieciocho, que es también la mayoría de edad. El sufragio es universal, libre, igual, directo y secreto.":
    "Od osiemnastu lat, co jest zarazem pełnoletnością. Wybory są powszechne, wolne, równe, bezpośrednie i tajne.",
  "¿Qué circunscripción se emplea en las elecciones europeas?":
    "Który okręg stosuje się w wyborach europejskich?",
  "Circunscripción única para todo el país, a diferencia de las generales, que se reparten por provincias.":
    "Jeden okręg dla całego kraju, w odróżnieniu od wyborów parlamentarnych, które rozdziela się na prowincje.",
  "Si ningún candidato reúne la mayoría absoluta de los concejales, ¿quién resulta elegido alcalde?":
    "Jeśli żaden kandydat nie zbierze bezwzględnej większości radnych, kto zostaje burmistrzem?",
  "Se repiten las elecciones": "Powtarza się wybory",
  "El cabeza de la lista más votada": "Lider listy z największą liczbą głosów",
  "El concejal de más edad": "Najstarszy radny",
  "Decide el pleno por sorteo": "Rozstrzyga rada przez losowanie",
  "La ley prevé esa salida automática para que ningún ayuntamiento quede sin alcalde. Es la razón de que gobiernen a veces listas que no tienen mayoría en el pleno.":
    "Ustawa przewiduje to automatyczne wyjście, żeby żadna gmina nie została bez burmistrza. To powód, dla którego rządzą czasem listy niemające większości w radzie.",
  "¿Qué exige el artículo 6 a los partidos políticos?":
    "Czego artykuł 6 wymaga od partii politycznych?",
  "Que tengan sede en Madrid": "Żeby miały siedzibę w Madrycie",
  "Que su estructura interna y su funcionamiento sean democráticos":
    "Żeby ich struktura wewnętrzna i działanie były demokratyczne",
  "Que presenten candidatos en todas las provincias":
    "Żeby wystawiały kandydatów we wszystkich prowincjach",
  "Que se financien solo con cuotas": "Żeby finansowały się wyłącznie ze składek",
  "El mismo requisito que el artículo 7 impone a sindicatos y asociaciones empresariales. Es una exigencia poco frecuente en el derecho comparado.":
    "Ten sam wymóg artykuł 7 nakłada na związki zawodowe i organizacje pracodawców. To wymóg rzadki w prawie porównawczym.",
  "¿Cuáles son los dos sindicatos mayoritarios en España?":
    "Które dwa związki zawodowe są w Hiszpanii największe?",
  "Comisiones Obreras y la Unión General de Trabajadores":
    "Comisiones Obreras i Unión General de Trabajadores",
  "La CNT y la UGT": "CNT i UGT",
  "USO y CSIF": "USO i CSIF",
  "ELA y LAB": "ELA i LAB",
  "CCOO y UGT. Los convenios que negocian se aplican a todo el sector y no solo a sus afiliados, lo que explica que su peso sea mayor que su afiliación.":
    "CCOO i UGT. Układy, które negocjują, stosuje się do całej branży, a nie tylko do ich członków, co tłumaczy, dlaczego ich waga jest większa niż liczba członków.",
  "¿Qué materias quedan excluidas de la iniciativa legislativa popular?":
    "Które dziedziny są wyłączone z obywatelskiej inicjatywy ustawodawczej?",
  "Los tributos, lo internacional, el derecho de gracia y las leyes orgánicas":
    "Podatki, sprawy międzynarodowe, prawo łaski i ustawy organiczne",
  "Solo la reforma constitucional": "Tylko zmiana konstytucji",
  "Todo lo que afecte a las comunidades autónomas":
    "Wszystko, co dotyczy wspólnot autonomicznych",
  "La exclusión es amplia y limita bastante el alcance del instrumento: quedan fuera precisamente algunas de las materias sobre las que más se pediría legislar.":
    "Wyłączenie jest szerokie i mocno ogranicza zasięg tego narzędzia: poza nim zostają właśnie niektóre z dziedzin, o które najbardziej chciano by prosić o ustawy.",
  "¿De quién depende el Defensor del Pueblo?": "Od kogo zależy Defensor del Pueblo?",
  "Del Gobierno": "Od rządu",
  "De las Cortes Generales": "Od Cortes Generales",
  "Del Tribunal Constitucional": "Od Trybunału Konstytucyjnego",
  "Del Consejo General del Poder Judicial": "Od Consejo General del Poder Judicial",
  "Es alto comisionado de las Cortes Generales, no del Gobierno. Esa dependencia parlamentaria es lo que le permite supervisar a la Administración.":
    "Jest wysokim komisarzem Cortes Generales, a nie rządu. Właśnie ta zależność od parlamentu pozwala mu nadzorować administrację.",
  "¿Son ejecutivas las resoluciones del Defensor del Pueblo?":
    "Czy rozstrzygnięcia Defensor del Pueblo są wykonalne?",
  "Sí, obligan a la Administración": "Tak, wiążą administrację",
  "No: recomienda y da publicidad, y puede recurrir leyes ante el Tribunal Constitucional":
    "Nie: zaleca i nadaje sprawom rozgłos, a ustawy może zaskarżyć do Trybunału Konstytucyjnego",
  "Sí, si las ratifica el Congreso": "Tak, jeśli zatwierdzi je Kongres",
  "Solo en materia de extranjería": "Tylko w sprawach cudzoziemców",
  "Su fuerza es la del informe público y la del recurso. No anula actos ni impone sanciones: para eso están los tribunales.":
    "Jego siłą jest publiczny raport i skarga. Nie uchyla aktów ani nie nakłada kar: od tego są sądy.",
  "¿Qué organismo fiscaliza las cuentas del Estado y del sector público?":
    "Który organ kontroluje rachunki państwa i sektora publicznego?",
  "El Tribunal de Cuentas": "Tribunal de Cuentas",
  "El Banco de España": "Banco de España",
  "La Agencia Tributaria": "Agencia Tributaria",
  "El Tribunal de Cuentas, previsto en el artículo 136 y dependiente también de las Cortes. La Agencia Tributaria recauda, que es otra función.":
    "Tribunal de Cuentas, przewidziany w artykule 136 i również zależny od Cortes. Agencia Tributaria pobiera podatki, a to inna funkcja.",
  "¿Quién convoca un referéndum consultivo?": "Kto zwołuje referendum konsultacyjne?",
  "El rey, a propuesta del presidente autorizada por el Congreso":
    "Król, na wniosek prezesa rządu upoważniony przez Kongres",
  "El Congreso por sí solo": "Sam Kongres",
  "El Gobierno por decreto": "Rząd dekretem",
  "Las comunidades autónomas en su territorio": "Wspólnoty autonomiczne na swoim terenie",
  "Los tres pasos del artículo 92 son sucesivos: propone el presidente, autoriza el Congreso, convoca el rey. Y su resultado es consultivo, no vinculante en sentido jurídico.":
    "Trzy kroki z artykułu 92 następują po sobie: proponuje prezes rządu, upoważnia Kongres, zwołuje król. A jego wynik jest konsultacyjny, prawnie niewiążący.",
  "¿Qué se vota en unas elecciones municipales?": "Na co głosuje się w wyborach gminnych?",
  "El alcalde": "Na burmistrza",
  "Los concejales": "Na radnych",
  "El presidente de la diputación": "Na przewodniczącego rady prowincji",
  "Una lista de concejales. El alcalde lo elige después el pleno, y el presidente de la diputación provincial sale de entre los concejales electos.":
    "Na listę radnych. Burmistrza wybiera potem rada, a przewodniczący rady prowincji wychodzi spośród wybranych radnych.",
  "¿Qué permite el derecho de petición del artículo 29?":
    "Na co pozwala prawo petycji z artykułu 29?",
  "Dirigirse por escrito a los poderes públicos":
    "Na zwrócenie się pisemnie do władz publicznych",
  "Exigir una respuesta favorable de la Administración":
    "Na żądanie przychylnej odpowiedzi administracji",
  "Convocar una manifestación": "Na zwołanie manifestacji",
  "Recurrir una ley ante el Tribunal Constitucional":
    "Na zaskarżenie ustawy do Trybunału Konstytucyjnego",
  "Es un derecho antiguo, sencillo y poco utilizado: permite dirigirse por escrito, individual o colectivamente, sin garantizar el contenido de la respuesta.":
    "To prawo dawne, proste i mało używane: pozwala zwrócić się pisemnie, samemu albo zbiorowo, nie gwarantując treści odpowiedzi.",
  "¿Cómo se elige al presidente de una comunidad autónoma?":
    "Jak wybiera się przewodniczącego wspólnoty autonomicznej?",
  "Directamente por los ciudadanos": "Bezpośrednio przez obywateli",
  "Por el parlamento autonómico, que lo inviste":
    "Przez parlament wspólnoty, który udziela mu wotum zaufania",
  "Por el Gobierno central": "Przez rząd centralny",
  "Por los alcaldes de la comunidad": "Przez burmistrzów wspólnoty",
  "Igual que el presidente del Gobierno en las generales: se vota una cámara y la cámara inviste. La única elección directa de personas en España es la del Senado.":
    "Tak samo jak prezesa rządu w wyborach parlamentarnych: głosuje się na izbę, a izba udziela wotum. Jedyny bezpośredni wybór osób w Hiszpanii to wybór do Senatu.",
  "¿Qué ciudad se considera la más antigua de Europa occidental?":
    "Które miasto uchodzi za najstarsze w Europie Zachodniej?",
  "Cádiz": "Kadyks",
  "Tarragona": "Tarragona",
  "Cádiz, fundada por los fenicios como factoría comercial. Antes de Roma, la costa peninsular recibió a fenicios, griegos y cartagineses.":
    "Kadyks, założony przez Fenicjan jako faktoria handlowa. Przed Rzymem wybrzeże Półwyspu przyjmowało Fenicjan, Greków i Kartagińczyków.",
  "¿Dónde desembarcaron los romanos en el 218 antes de Cristo?":
    "Gdzie Rzymianie wylądowali w 218 roku przed Chrystusem?",
  "En Ampurias": "W Ampurias",
  "En Cartagena": "W Kartagenie",
  "En Tarragona": "W Tarragonie",
  "En Ampurias, en la costa catalana, durante la segunda guerra púnica. La conquista completa tardaría dos siglos, hasta las guerras cántabras.":
    "W Ampurias, na wybrzeżu katalońskim, w czasie drugiej wojny punickiej. Pełny podbój potrwa dwa stulecia, aż do wojen kantabryjskich.",
  "¿Qué guerras cerraron la conquista romana de la Península?":
    "Które wojny zamknęły rzymski podbój Półwyspu?",
  "Las guerras púnicas": "Wojny punickie",
  "Las guerras cántabras": "Wojny kantabryjskie",
  "Las guerras lusitanas": "Wojny luzytańskie",
  "Las guerras celtíberas": "Wojny celtyberyjskie",
  "Las cántabras, hacia el 19 antes de Cristo, dirigidas en parte por el propio Augusto. La resistencia del norte fue la última en ceder.":
    "Kantabryjskie, około 19 roku przed Chrystusem, prowadzone po części przez samego Augusta. Opór północy poddał się jako ostatni.",
  "¿Qué lenguas actuales de España proceden del latín?":
    "Które dzisiejsze języki Hiszpanii pochodzą od łaciny?",
  "El castellano, el gallego y el catalán": "Kastylijski, galicyjski i kataloński",
  "El castellano y el euskera": "Kastylijski i baskijski",
  "Solo el castellano": "Tylko kastylijski",
  "El euskera y el gallego": "Baskijski i galicyjski",
  "Las tres son lenguas romances. El euskera no lo es: es anterior a la llegada de Roma y sin parentesco conocido con ninguna lengua viva.":
    "Wszystkie trzy są językami romańskimi. Baskijski nim nie jest: jest starszy niż przybycie Rzymu i nie ma znanego pokrewieństwa z żadnym żywym językiem.",
  "¿Qué ocurrió en el III Concilio de Toledo, en el 589?":
    "Co wydarzyło się na III soborze w Toledo, w 589 roku?",
  "Se promulgó el Liber Iudiciorum": "Ogłoszono Liber Iudiciorum",
  "Recaredo se convirtió al catolicismo": "Rekared przeszedł na katolicyzm",
  "Se fundó el reino de Asturias": "Założono królestwo Asturii",
  "Se dividió el reino visigodo": "Podzielono królestwo Wizygotów",
  "El rey abandonó el arrianismo, con lo que el reino quedó unificado en religión y la monarquía atada a la Iglesia. El Liber Iudiciorum llegaría en el 654.":
    "Król porzucił arianizm, przez co królestwo zjednoczyło się w religii, a monarchia związała z Kościołem. Liber Iudiciorum przyjdzie w 654 roku.",
  "¿Qué pueblos entraron en la Península en el 409?":
    "Które ludy weszły na Półwysep w 409 roku?",
  "Suevos, vándalos y alanos": "Swebowie, Wandalowie i Alanowie",
  "Normandos y sajones": "Normanowie i Sasi",
  "Hunos y ostrogodos": "Hunowie i Ostrogoci",
  "Bereberes y árabes": "Berberowie i Arabowie",
  "Tras ellos llegaron los visigodos, que acabaron imponiéndose y estableciendo la capital en Toledo. Los ejércitos musulmanes no cruzarían hasta el 711.":
    "Za nimi przyszli Wizygoci, którzy w końcu wzięli górę i osadzili stolicę w Toledo. Wojska muzułmańskie przeprawią się dopiero w 711 roku.",
  "¿En qué batalla fue derrotado el último rey visigodo?":
    "W której bitwie pokonano ostatniego króla Wizygotów?",
  "En Covadonga": "Pod Covadongą",
  "En Guadalete": "Nad Guadalete",
  "En Las Navas de Tolosa": "Pod Las Navas de Tolosa",
  "En Numancia": "Pod Numancją",
  "En Guadalete, en el 711. Covadonga fue en cambio la escaramuza en que la tradición sitúa el origen del reino de Asturias, once años después.":
    "Nad Guadalete, w 711 roku. Covadonga była natomiast potyczką, w której tradycja umieszcza początek królestwa Asturii, jedenaście lat później.",
  "¿Quién proclamó el Califato de Córdoba?": "Kto proklamował Kalifat Kordoby?",
  "Almanzor": "Almanzor",
  "Abderramán III": "Abd ar-Rahman III",
  "Boabdil": "Boabdil",
  "Tariq": "Tarik",
  "Abderramán III, en el 929, con lo que el emirato se independizó también en lo religioso. Boabdil fue el último rey de Granada, cinco siglos después.":
    "Abd ar-Rahman III, w 929 roku, przez co emirat usamodzielnił się także religijnie. Boabdil był ostatnim królem Grenady, pięć wieków później.",
  "¿Qué son los reinos de taifas?": "Czym są królestwa taifa?",
  "Los estados en que se fragmentó al-Ándalus tras 1031":
    "Państwami, na które rozpadła się al-Andalus po 1031 roku",
  "Los condados cristianos del Pirineo": "Hrabstwami chrześcijańskimi w Pirenejach",
  "Las provincias romanas de Hispania": "Prowincjami rzymskimi Hiszpanii",
  "Los territorios que Castilla cedió a Portugal":
    "Terytoriami, które Kastylia oddała Portugalii",
  "Más de veinte estados rivales surgidos del hundimiento del califato. Su debilidad les obligó a pagar tributos a los reinos del norte y a llamar en su auxilio a almorávides y almohades.":
    "Ponad dwadzieścia rywalizujących państw powstałych z upadku kalifatu. Ich słabość zmusiła je do płacenia trybutów królestwom północy i do wzywania na pomoc Almorawidów i Almohadów.",
  "¿Qué ciudad tomó Alfonso VI en 1085?": "Które miasto zdobył Alfons VI w 1085 roku?",
  "Zaragoza": "Saragossę",
  "Toledo, la antigua capital visigoda, que se convirtió en el gran punto de contacto entre las culturas y sede de la Escuela de Traductores.":
    "Toledo, dawną stolicę Wizygotów, które stało się wielkim punktem styku kultur i siedzibą Szkoły Tłumaczy.",
  "¿Qué hacía la Escuela de Traductores de Toledo?":
    "Czym zajmowała się Szkoła Tłumaczy w Toledo?",
  "Enseñaba latín a los nobles castellanos": "Uczyła łaciny szlachtę kastylijską",
  "Vertía al latín obras griegas y árabes que Europa había perdido":
    "Przekładała na łacinę dzieła greckie i arabskie, które Europa utraciła",
  "Traducía la Biblia a las lenguas peninsulares": "Tłumaczyła Biblię na języki Półwyspu",
  "Formaba intérpretes para la corte": "Kształciła tłumaczy dla dworu",
  "Cristianos, musulmanes y judíos trabajaron juntos en ella. Por esa vía volvieron a Europa Aristóteles, Euclides y buena parte de la ciencia griega, a través del árabe.":
    "Pracowali w niej razem chrześcijanie, muzułmanie i Żydzi. Tą drogą wrócili do Europy Arystoteles, Euklides i spora część nauki greckiej, przez arabski.",
  "¿Qué victoria de 1212 abrió el valle del Guadalquivir?":
    "Które zwycięstwo z 1212 roku otworzyło dolinę Gwadalkiwiru?",
  "Guadalete": "Guadalete",
  "Las Navas de Tolosa": "Las Navas de Tolosa",
  "Covadonga": "Covadonga",
  "Lepanto": "Lepanto",
  "Las Navas de Tolosa, con los reyes de Castilla, Aragón y Navarra combatiendo juntos. Córdoba caería en 1236 y Sevilla en 1248.":
    "Las Navas de Tolosa, gdzie królowie Kastylii, Aragonii i Nawarry walczyli razem. Kordoba padnie w 1236, a Sewilla w 1248 roku.",
  "¿Qué quedaba de al-Ándalus después de la toma de Sevilla en 1248?":
    "Co zostało z al-Andalus po zdobyciu Sewilli w 1248 roku?",
  "Nada: la conquista estaba completa": "Nic: podbój był zakończony",
  "El reino nazarí de Granada": "Nasrydzkie królestwo Grenady",
  "El reino de Valencia": "Królestwo Walencji",
  "Las islas Baleares": "Baleary",
  "Granada sobrevivió como reino vasallo dos siglos y medio más, y en ese tiempo construyó la Alhambra. No caería hasta 1492.":
    "Grenada przetrwała jako królestwo lenne jeszcze dwa i pół wieku, a w tym czasie zbudowała Alhambrę. Padnie dopiero w 1492 roku.",
  "¿En qué año se casaron Isabel de Castilla y Fernando de Aragón?":
    "W którym roku pobrali się Izabela Kastylijska i Ferdynand Aragoński?",
  "En 1469": "W 1469",
  "En 1479": "W 1479",
  "En 1492": "W 1492",
  "En 1512": "W 1512",
  "En 1469. Fue una unión dinástica: cada reino conservó sus leyes, sus cortes, su moneda y sus aduanas durante dos siglos y medio más.":
    "W 1469. To był związek dynastyczny: każde królestwo zachowało swoje prawa, swoje kortezy, swoją monetę i swoje komory celne jeszcze przez dwa i pół wieku.",
  "¿Qué significa que la unión de Castilla y Aragón fue dinástica?":
    "Co znaczy, że unia Kastylii i Aragonii była dynastyczna?",
  "Que solo duró una generación": "Że trwała tylko jedno pokolenie",
  "Que compartieron corona pero siguieron siendo reinos distintos, con leyes propias":
    "Że dzieliły koronę, ale pozostały odrębnymi królestwami, z własnym prawem",
  "Que la decidieron las cortes de ambos reinos": "Że zdecydowały o niej kortezy obu królestw",
  "Que fue reconocida por el papa": "Że uznał ją papież",
  "Compartieron monarcas, no ordenamiento. La unificación jurídica llegó con los Decretos de Nueva Planta, ya en el siglo XVIII y con un rey Borbón.":
    "Dzieliły monarchów, a nie porządek prawny. Ujednolicenie prawne przyszło wraz z Decretos de Nueva Planta, już w XVIII wieku i za króla Burbona.",
  "¿Qué obra publicó Nebrija en 1492?": "Jakie dzieło wydał Nebrija w 1492 roku?",
  "El primer diccionario de la lengua": "Pierwszy słownik języka",
  "La primera gramática de una lengua romance": "Pierwszą gramatykę języka romańskiego",
  "La primera traducción de la Biblia al castellano":
    "Pierwsze tłumaczenie Biblii na kastylijski",
  "El primer atlas del Nuevo Mundo": "Pierwszy atlas Nowego Świata",
  "La Gramática castellana, la primera de una lengua romance. Que apareciera el mismo año que Granada y América no fue casualidad: la lengua se pensaba ya como instrumento de gobierno.":
    "Gramatykę kastylijską, pierwszą gramatykę języka romańskiego. To, że ukazała się w tym samym roku co Grenada i Ameryka, nie było przypadkiem: język myślano już jako narzędzie rządzenia.",
  "¿En qué año se incorporó Navarra a la corona?": "W którym roku Nawarra weszła do korony?",
  "En 1580": "W 1580",
  "En 1512, conservando sus fueros e instituciones, que están en el origen del régimen foral que Navarra mantiene hoy.":
    "W 1512, zachowując swoje fueros i instytucje, które leżą u źródeł ustroju foralnego, jaki Nawarra ma do dziś.",
  "¿Por qué Carlos I es también conocido como Carlos V?":
    "Dlaczego Karol I jest znany także jako Karol V?",
  "Porque reinó dos veces": "Bo panował dwa razy",
  "Porque fue el quinto rey de Castilla con ese nombre":
    "Bo był piątym królem Kastylii o tym imieniu",
  "Porque fue además emperador del Sacro Imperio": "Bo był ponadto cesarzem Świętego Cesarstwa",
  "Porque cambió de nombre al abdicar": "Bo zmienił imię, abdykując",
  "Carlos I de España y V del Sacro Imperio Romano Germánico. Heredó Castilla, Aragón, Italia, Flandes, Austria y América, un conjunto sin precedentes.":
    "Karol I Hiszpanii i V Świętego Cesarstwa Rzymskiego Narodu Niemieckiego. Odziedziczył Kastylię, Aragonię, Włochy, Flandrię, Austrię i Amerykę, zestaw bez precedensu.",
  "¿En qué año fijó Felipe II la capital en Madrid?":
    "W którym roku Filip II osadził stolicę w Madrycie?",
  "En 1516": "W 1516",
  "En 1561": "W 1561",
  "En 1605": "W 1605",
  "En 1561. Hasta entonces la corte era itinerante, y se eligió Madrid por su posición central más que por su tamaño, que era modesto.":
    "W 1561. Do tego czasu dwór wędrował, a Madryt wybrano ze względu na centralne położenie bardziej niż na wielkość, która była skromna.",
  "¿Entre qué años estuvo Portugal unido a la corona española?":
    "Między którymi latami Portugalia była połączona z koroną hiszpańską?",
  "Entre 1492 y 1512": "Między 1492 a 1512",
  "Entre 1580 y 1640": "Między 1580 a 1640",
  "Entre 1640 y 1713": "Między 1640 a 1713",
  "Nunca lo estuvo": "Nigdy nie była",
  "Sesenta años, desde Felipe II hasta la sublevación de 1640, simultánea a la de Cataluña. Portugal recuperó entonces su independencia de forma definitiva.":
    "Sześćdziesiąt lat, od Filipa II do powstania z 1640 roku, równoczesnego z katalońskim. Portugalia odzyskała wtedy niepodległość ostatecznie.",
  "¿Qué provocó las sublevaciones de Portugal y Cataluña en 1640?":
    "Co wywołało powstania Portugalii i Katalonii w 1640 roku?",
  "Una epidemia de peste": "Epidemia dżumy",
  "Las exigencias fiscales y militares del conde-duque de Olivares":
    "Żądania podatkowe i wojskowe hrabiego-księcia Olivaresa",
  "La expulsión de los moriscos": "Wypędzenie Morysków",
  "El descubrimiento de la plata de Potosí": "Odkrycie srebra w Potosí",
  "El esfuerzo de guerra continuo agotó a los reinos periféricos y las dos revueltas estallaron el mismo año. Cataluña volvió a la corona tras doce años; Portugal, nunca.":
    "Nieustanny wysiłek wojenny wyczerpał peryferyjne królestwa i oba bunty wybuchły w tym samym roku. Katalonia wróciła do korony po dwunastu latach; Portugalia nigdy.",
  "¿Quién pintó Las Meninas?": "Kto namalował Panny dworskie?",
  "El Greco": "El Greco",
  "Velázquez": "Velázquez",
  "Murillo": "Murillo",
  "Goya": "Goya",
  "Diego Velázquez, en 1656, y el cuadro está en el Museo del Prado. Goya es un siglo y medio posterior, ya en la época de la Guerra de la Independencia.":
    "Diego Velázquez, w 1656 roku, a obraz jest w Muzeum Prado. Goya jest półtora wieku późniejszy, już z czasów wojny o niepodległość.",
  "¿Qué perdió España en el Tratado de Utrecht de 1713?":
    "Co Hiszpania straciła w traktacie utrechckim z 1713 roku?",
  "Cuba y Filipinas": "Kubę i Filipiny",
  "Sus territorios europeos y Gibraltar": "Swoje terytoria europejskie i Gibraltar",
  "Navarra y el Rosellón": "Nawarrę i Roussillon",
  "Portugal y sus colonias": "Portugalię i jej kolonie",
  "Los territorios en Italia y Flandes, además de Menorca y Gibraltar, que sigue siendo británico. Cuba y Filipinas se perdieron en 1898.":
    "Terytoria we Włoszech i we Flandrii, a poza tym Minorkę i Gibraltar, który do dziś jest brytyjski. Kubę i Filipiny stracono w 1898 roku.",
  "¿Qué hicieron los Decretos de Nueva Planta?": "Co zrobiły Decretos de Nueva Planta?",
  "Crear las provincias actuales": "Utworzyły dzisiejsze prowincje",
  "Suprimir las instituciones propias de la Corona de Aragón y extender el modelo castellano":
    "Zniosły własne instytucje Korony Aragonii i rozciągnęły model kastylijski",
  "Reformar el ejército tras el Desastre del 98": "Zreformowały wojsko po klęsce 1898 roku",
  "Fundar las primeras universidades": "Założyły pierwsze uniwersytety",
  "Felipe V los impuso tras ganar la Guerra de Sucesión. Con ellos la unión dinástica de 1469 se convirtió, dos siglos y medio después, en un Estado unificado.":
    "Filip V narzucił je po wygraniu wojny o sukcesję. Wraz z nimi unia dynastyczna z 1469 roku stała się, dwa i pół wieku później, państwem zjednoczonym.",
  "¿Cómo se llama el periodo cultural que va aproximadamente del siglo XVI al XVII?":
    "Jak nazywa się okres kulturowy, który biegnie mniej więcej od XVI do XVII wieku?",
  "El Renacimiento": "Renesans",
  "La Ilustración": "Oświecenie",
  "El Modernismo": "Modernizm",
  "El Siglo de Oro, que reúne a Cervantes, Lope, Calderón, Quevedo y Góngora en literatura y a El Greco, Velázquez y Murillo en pintura.":
    "Złoty Wiek, który skupia Cervantesa, Lopego, Calderóna, Queveda i Góngorę w literaturze oraz El Greca, Velázqueza i Murilla w malarstwie.",
  "¿Qué ciudad conserva hoy Las Meninas y buena parte de la pintura del Siglo de Oro?":
    "Które miasto przechowuje dziś Panny dworskie i sporą część malarstwa Złotego Wieku?",
  "Madrid, en el Museo del Prado": "Madryt, w Muzeum Prado",
  "Barcelona, en el MNAC": "Barcelona, w MNAC",
  "Sevilla, en el Museo de Bellas Artes": "Sewilla, w Muzeum Sztuk Pięknych",
  "Toledo, en el Museo del Greco": "Toledo, w Muzeum El Greca",
  "El Museo del Prado, en Madrid, reúne la colección real. El Greco tiene museo propio en Toledo, pero el grueso de la pintura de la época está en el Prado.":
    "Muzeum Prado w Madrycie skupia kolekcję królewską. El Greco ma własne muzeum w Toledo, ale trzon malarstwa tamtej epoki jest w Prado.",
  "¿A quién colocó Napoleón en el trono español?":
    "Kogo Napoleon posadził na tronie hiszpańskim?",
  "A Fernando VII": "Ferdynanda VII",
  "A su hermano José I": "Swojego brata Józefa I",
  "A Amadeo de Saboya": "Amadeusza Sabaudzkiego",
  "A Carlos IV": "Karola IV",
  "A José Bonaparte, conocido como José I. El levantamiento del 2 de mayo de 1808 dio comienzo a la Guerra de la Independencia.":
    "Józefa Bonapartego, znanego jako Józef I. Powstanie 2 maja 1808 roku dało początek wojnie o niepodległość.",
  "¿Qué palabra española de uso internacional nació en la Guerra de la Independencia?":
    "Które hiszpańskie słowo o międzynarodowym zasięgu narodziło się w wojnie o niepodległość?",
  "Fiesta": "Fiesta",
  "Guerrilla": "Guerrilla",
  "Siesta": "Siesta",
  "Armada": "Armada",
  "Guerrilla, por las partidas irregulares que hostigaban al ejército francés. Es uno de los préstamos españoles más extendidos en otras lenguas.":
    "Guerrilla, od nieregularnych oddziałów nękających wojsko francuskie. To jedno z najszerzej rozpowszechnionych zapożyczeń hiszpańskich w innych językach.",
  "¿En qué ciudad se aprobó la primera Constitución española?":
    "W którym mieście uchwalono pierwszą konstytucję hiszpańską?",
  "En Madrid": "W Madrycie",
  "En Bayona": "W Bayonne",
  "En Cádiz, la ciudad que resistía mientras el resto del país estaba ocupado. Se aprobó el 19 de marzo de 1812.":
    "W Kadyksie, mieście, które stawiało opór, gdy reszta kraju była okupowana. Uchwalono ją 19 marca 1812 roku.",
  "¿Qué principio proclamaba la Constitución de 1812?":
    "Jaką zasadę głosiła konstytucja z 1812 roku?",
  "La soberanía nacional": "Suwerenność narodu",
  "El derecho divino de los reyes": "Boskie prawo królów",
  "El sufragio universal femenino": "Powszechne prawo wyborcze kobiet",
  "El Estado autonómico": "Państwo autonomiczne",
  "Soberanía nacional, división de poderes y libertad de imprenta. Fernando VII la derogó en 1814 al regresar del cautiverio.":
    "Suwerenność narodu, podział władz i wolność druku. Ferdynand VII uchylił ją w 1814 roku po powrocie z niewoli.",
  "¿Qué rey derogó la Constitución de 1812 al volver al trono?":
    "Który król uchylił konstytucję z 1812 roku po powrocie na tron?",
  "Carlos IV": "Karol IV",
  "José I": "Józef I",
  "Fernando VII": "Ferdynand VII",
  "Alfonso XII": "Alfons XII",
  "Fernando VII, en 1814, restaurando el absolutismo. El vaivén entre texto liberal y vuelta atrás se repetiría durante todo el siglo.":
    "Ferdynand VII, w 1814 roku, przywracając absolutyzm. Wahadło między tekstem liberalnym a nawrotem będzie powtarzać się przez cały wiek.",
  "¿Entre qué años se independizó la América continental española?":
    "Między którymi latami usamodzielniła się kontynentalna Ameryka hiszpańska?",
  "Entre 1780 y 1800": "Między 1780 a 1800",
  "Entre 1810 y 1824": "Między 1810 a 1824",
  "Entre 1830 y 1850": "Między 1830 a 1850",
  "Entre 1860 y 1880": "Między 1860 a 1880",
  "El vacío de poder de 1808 fue el detonante, y la batalla de Ayacucho cerró el proceso en 1824. Quedaron solo Cuba, Puerto Rico y Filipinas.":
    "Zapalnikiem była próżnia władzy z 1808 roku, a bitwa pod Ayacucho zamknęła proces w 1824. Zostały tylko Kuba, Portoryko i Filipiny.",
  "¿Qué enfrentaron en el fondo las guerras carlistas?":
    "Co w gruncie rzeczy ścierało się w wojnach karlistowskich?",
  "Dos ideas de país: liberalismo frente a absolutismo, centro frente a fueros":
    "Dwie idee kraju: liberalizm wobec absolutyzmu, centrum wobec fueros",
  "Castilla contra Aragón": "Kastylia przeciw Aragonii",
  "La Iglesia contra el ejército": "Kościół przeciw wojsku",
  "El campo contra la ciudad exclusivamente": "Wyłącznie wieś przeciw miastu",
  "La disputa dinástica entre Isabel y su tío Carlos ocultaba un choque más hondo. Fueron tres guerras civiles a lo largo del siglo, con intervalos, hasta 1876.":
    "Spór dynastyczny między Izabelą a jej stryjem Karolem krył starcie głębsze. Były to trzy wojny domowe w ciągu stulecia, z przerwami, aż do 1876 roku.",
  "¿Cómo se llamó la revolución de 1868?": "Jak nazwano rewolucję z 1868 roku?",
  "La Semana Trágica": "Tragiczny Tydzień",
  "La Gloriosa, que abrió el Sexenio Democrático. La Pepa es la Constitución de 1812, y la Restauración empieza en 1875.":
    "La Gloriosa, która otworzyła Sexenio Democrático. La Pepa to konstytucja z 1812 roku, a Restauracja zaczyna się w 1875.",
  "¿Qué rey extranjero ocupó el trono español durante el Sexenio Democrático?":
    "Który obcy król zajmował tron hiszpański w czasie Sexenio Democrático?",
  "Amadeo de Saboya": "Amadeusz Sabaudzki",
  "Leopoldo de Hohenzollern": "Leopold Hohenzollern",
  "Fernando de Coburgo": "Ferdynand Koburg",
  "Luis de Orleans": "Ludwik Orleański",
  "Amadeo de Saboya, que reinó dos años y abdicó en 1873. Su marcha dio paso a la Primera República.":
    "Amadeusz Sabaudzki, który panował dwa lata i abdykował w 1873 roku. Jego odejście otworzyło drogę Pierwszej Republice.",
  "¿Quién diseñó el sistema de turno de la Restauración?":
    "Kto zaprojektował system turno okresu Restauracji?",
  "Cánovas del Castillo": "Cánovas del Castillo",
  "Sagasta": "Sagasta",
  "Prim": "Prim",
  "Espartero": "Espartero",
  "Antonio Cánovas del Castillo, con Alfonso XII en el trono desde 1875. Los dos partidos se alternaban por acuerdo, sostenidos en el campo por el caciquismo.":
    "Antonio Cánovas del Castillo, z Alfonsem XII na tronie od 1875 roku. Dwie partie zmieniały się na mocy umowy, podtrzymywane na wsi przez caciquismo.",
  "¿Qué era el caciquismo?": "Czym było caciquismo?",
  "Un impuesto sobre la tierra": "Podatkiem od ziemi",
  "El control de las elecciones en el campo por notables locales":
    "Kontrolą wyborów na wsi przez miejscowych notabli",
  "Un sistema de gremios urbanos": "Systemem cechów miejskich",
  "El nombre del turno de partidos": "Nazwą naprzemienności partii",
  "Notables locales garantizaban el resultado que el turno había pactado de antemano. Es lo que permitía que la alternancia funcionara sin que las elecciones decidieran nada.":
    "Miejscowi notable zapewniali wynik, który turno uzgodniło wcześniej. To właśnie pozwalało naprzemienności działać, bez tego, żeby wybory o czymkolwiek rozstrzygały.",
  "¿Con qué país se enfrentó España en 1898?":
    "Z jakim krajem Hiszpania starła się w 1898 roku?",
  "Con Francia": "Z Francją",
  "Con el Reino Unido": "Ze Zjednoczonym Królestwem",
  "Con Estados Unidos": "Ze Stanami Zjednoczonymi",
  "Con Alemania": "Z Niemcami",
  "Con Estados Unidos, en una guerra breve que costó a España Cuba, Puerto Rico y Filipinas. Se lo llamó simplemente el Desastre.":
    "Ze Stanami Zjednoczonymi, w krótkiej wojnie, która kosztowała Hiszpanię Kubę, Portoryko i Filipiny. Nazwano to po prostu Klęską.",
  "¿Qué grupo de escritores surgió de la conmoción de 1898?":
    "Która grupa pisarzy wyrosła ze wstrząsu 1898 roku?",
  "La Generación del 27": "Pokolenie 27",
  "La Generación del 98": "Pokolenie 98",
  "El Modernismo catalán": "Modernizm kataloński",
  "La Institución Libre de Enseñanza": "Institución Libre de Enseñanza",
  "Unamuno, Baroja, Azorín y Machado, entre otros, se preguntaron qué era España y qué debía hacer consigo misma. La Generación del 27 es tres décadas posterior.":
    "Unamuno, Baroja, Azorín i Machado, między innymi, pytali, czym jest Hiszpania i co ma ze sobą zrobić. Pokolenie 27 jest trzy dekady późniejsze.",
  "¿Entre qué años gobernó la dictadura de Primo de Rivera?":
    "Między którymi latami rządziła dyktatura Prima de Rivery?",
  "Entre 1917 y 1920": "Między 1917 a 1920",
  "Entre 1923 y 1930": "Między 1923 a 1930",
  "Entre 1931 y 1936": "Między 1931 a 1936",
  "Entre 1936 y 1939": "Między 1936 a 1939",
  "Siete años con el consentimiento de Alfonso XIII. Su caída arrastró al rey: las municipales del año siguiente se leyeron como un plebiscito sobre la monarquía.":
    "Siedem lat, za przyzwoleniem Alfonsa XIII. Jej upadek pociągnął króla: wybory gminne następnego roku odczytano jako plebiscyt o monarchii.",
  "¿Qué elecciones precipitaron la caída de Alfonso XIII?":
    "Które wybory przyspieszyły upadek Alfonsa XIII?",
  "Unas generales": "Parlamentarne",
  "Unas municipales": "Gminne",
  "Unas europeas": "Europejskie",
  "Un referéndum": "Referendum",
  "Las municipales del 12 de abril de 1931. Las ciudades votaron republicano y el rey salió del país dos días después.":
    "Wybory gminne 12 kwietnia 1931 roku. Miasta zagłosowały republikańsko, a król wyjechał z kraju dwa dni później.",
  "¿Qué introdujo la Constitución republicana de 1931?":
    "Co wprowadziła republikańska konstytucja z 1931 roku?",
  "El Estado laico, el divorcio y el voto femenino":
    "Państwo świeckie, rozwód i prawo głosu kobiet",
  "El Estado de las autonomías tal como existe hoy":
    "Państwo autonomii takie, jakie istnieje dziś",
  "El sufragio censitario": "Cenzusowe prawo wyborcze",
  "Fue de las más avanzadas de su tiempo. También abrió la vía a los estatutos de autonomía: el de Cataluña se aprobó en 1932 y el del País Vasco en 1936.":
    "Była jedną z najbardziej postępowych w swoim czasie. Otworzyła też drogę statutom autonomii: kataloński uchwalono w 1932, a baskijski w 1936 roku.",
  "¿En qué año votaron las mujeres por primera vez en España?":
    "W którym roku kobiety w Hiszpanii zagłosowały po raz pierwszy?",
  "En 1931": "W 1931",
  "En 1933": "W 1933",
  "En 1977": "W 1977",
  "El derecho se aprobó en 1931 y se ejerció en las elecciones de 1933. Clara Campoamor lo había defendido en las Cortes contra buena parte de su propio grupo.":
    "Prawo uchwalono w 1931 roku, a skorzystano z niego w wyborach 1933. Clara Campoamor broniła go w Cortes przeciw sporej części własnego klubu.",
  "¿Qué diputada se opuso al voto femenino en el debate de 1931?":
    "Która posłanka sprzeciwiła się prawu głosu kobiet w debacie 1931 roku?",
  "Margarita Nelken": "Margarita Nelken",
  "Victoria Kent, también republicana y también diputada, temía que el voto de las mujeres favoreciera a la derecha. El debate entre ambas es uno de los más citados de aquellas Cortes.":
    "Victoria Kent, także republikanka i także posłanka, obawiała się, że głos kobiet pomoże prawicy. Debata między nimi jest jedną z najczęściej cytowanych w tamtych Cortes.",
  "¿Qué convirtió la sublevación de julio de 1936 en una guerra civil?":
    "Co zamieniło powstanie z lipca 1936 roku w wojnę domową?",
  "La intervención de Francia": "Interwencja Francji",
  "Que el golpe triunfó en unas zonas y fracasó en otras":
    "To, że zamach zwyciężył w jednych rejonach, a w innych zawiódł",
  "La negativa del rey a firmar": "Odmowa króla podpisania",
  "Una huelga general": "Strajk generalny",
  "El fracaso parcial partió el país en dos y ninguno de los bandos pudo imponerse rápido. Un golpe que triunfa del todo o fracasa del todo no produce tres años de guerra.":
    "Częściowe niepowodzenie przecięło kraj na dwoje i żadna ze stron nie mogła szybko wziąć góry. Zamach, który zwycięża w całości albo w całości zawodzi, nie daje trzech lat wojny.",
  "¿Qué países apoyaron al bando sublevado?": "Które kraje wsparły stronę powstańczą?",
  "Francia y el Reino Unido": "Francja i Zjednoczone Królestwo",
  "Alemania e Italia": "Niemcy i Włochy",
  "La Unión Soviética": "Związek Radziecki",
  "Estados Unidos y Portugal": "Stany Zjednoczone i Portugalia",
  "Alemania e Italia apoyaron a los sublevados y la Unión Soviética a la República, mientras las democracias occidentales se mantenían en la no intervención.":
    "Niemcy i Włochy wsparły powstańców, a Związek Radziecki Republikę, podczas gdy demokracje zachodnie trzymały się nieinterwencji.",
  "¿Qué cuadro pintó Picasso a raíz del bombardeo de 1937?":
    "Jaki obraz namalował Picasso po bombardowaniu z 1937 roku?",
  "Las Meninas": "Panny dworskie",
  "El Guernica": "Guernikę",
  "Los fusilamientos del 3 de mayo": "Rozstrzelanie powstańców madryckich",
  "El jardín de las delicias": "Ogród rozkoszy ziemskich",
  "El Guernica, hoy en el Museo Reina Sofía de Madrid. Los fusilamientos del 3 de mayo es de Goya y recuerda la represión francesa de 1808.":
    "Guernica, dziś w Muzeum Reina Sofía w Madrycie. Rozstrzelanie powstańców madryckich jest Goi i przypomina francuskie represje z 1808 roku.",
  "¿Cuántos años duró la dictadura de Franco?": "Ile lat trwała dyktatura Franco?",
  "Veintiocho": "Dwadzieścia osiem",
  "Treinta y seis": "Trzydzieści sześć",
  "Cuarenta y cinco": "Czterdzieści pięć",
  "De 1939 a 1975. La Segunda República había durado ocho años, de los cuales solo los tres últimos fueron de guerra.":
    "Od 1939 do 1975. Druga Republika trwała osiem lat, z czego tylko trzy ostatnie były wojenne.",
  "¿Cómo se llamó la política económica de los años cuarenta?":
    "Jak nazwano politykę gospodarczą lat czterdziestych?",
  "La estabilización": "Stabilizacją",
  "La reconversión": "Restrukturyzacją",
  "Autarquía: aislamiento, cartillas de racionamiento y hambre. Se los conoce como los años del hambre. El desarrollismo llegaría en los sesenta.":
    "Autarkia: izolacja, kartki żywnościowe i głód. Nazywa się je latami głodu. Desarrollismo przyjdzie w latach sześćdziesiątych.",
  "¿En qué año ingresó España en la ONU?": "W którym roku Hiszpania wstąpiła do ONZ?",
  "En 1953": "W 1953",
  "En 1955": "W 1955",
  "En 1955, tras los acuerdos con Estados Unidos y el concordato con la Santa Sede, ambos de 1953, que rompieron el aislamiento de la posguerra.":
    "W 1955, po porozumieniach ze Stanami Zjednoczonymi i konkordacie ze Stolicą Apostolską, obu z 1953 roku, które przełamały powojenną izolację.",
  "¿A quién designó Franco como sucesor a título de rey?":
    "Kogo Franco wyznaczył na następcę z tytułem króla?",
  "A Alfonso XIII": "Alfonsa XIII",
  "A Juan de Borbón": "Jana Burbona",
  "A Juan Carlos de Borbón": "Jana Karola Burbona",
  "A Carrero Blanco": "Carrera Blanco",
  "A Juan Carlos, nieto de Alfonso XIII, en 1969, pasando por encima de su padre. Carrero Blanco era el sucesor previsto en la presidencia del Gobierno, no en la jefatura del Estado.":
    "Jana Karola, wnuka Alfonsa XIII, w 1969 roku, przeskakując jego ojca. Carrero Blanco był przewidzianym następcą na stanowisku prezesa rządu, a nie głowy państwa.",
  "¿Qué trajeron los años sesenta a la economía española?":
    "Co lata sześćdziesiąte przyniosły gospodarce hiszpańskiej?",
  "Cartillas de racionamiento": "Kartki żywnościowe",
  "Industria, turismo y las divisas de la emigración a Europa":
    "Przemysł, turystykę i dewizy z emigracji do Europy",
  "La nacionalización de la banca": "Nacjonalizację banków",
  "El ingreso en la Comunidad Económica Europea":
    "Wejście do Europejskiej Wspólnoty Gospodarczej",
  "Es lo que se llamó desarrollismo. Dos millones de españoles trabajaban en Europa y sus envíos, junto al turismo, sostuvieron la balanza de pagos.":
    "To właśnie nazwano desarrollismo. Dwa miliony Hiszpanów pracowały w Europie, a ich przekazy, obok turystyki, utrzymały bilans płatniczy.",
  "¿Cuándo fue proclamado rey Juan Carlos I?": "Kiedy ogłoszono królem Jana Karola I?",
  "El 20 de noviembre de 1975": "20 listopada 1975",
  "El 22 de noviembre de 1975": "22 listopada 1975",
  "El 15 de junio de 1977": "15 czerwca 1977",
  "Dos días después de la muerte de Franco, dentro de las reglas del propio régimen. Las primeras elecciones libres llegarían año y medio más tarde.":
    "Dwa dni po śmierci Franco, w ramach reguł samego reżimu. Pierwsze wolne wybory przyjdą półtora roku później.",
  "¿Qué norma abrió el paso a las elecciones libres?":
    "Który akt otworzył drogę do wolnych wyborów?",
  "La Ley para la Reforma Política": "Ley para la Reforma Política",
  "La Ley de Amnistía": "Ustawa o amnestii",
  "Los Pactos de la Moncloa": "Pakty z Moncloa",
  "La Ley Orgánica del Estado": "Ley Orgánica del Estado",
  "Aprobada por las propias Cortes del régimen y ratificada en referéndum en diciembre de 1976. De ahí la fórmula: se fue de la ley a la ley, sin ruptura formal.":
    "Uchwalona przez same Cortes reżimu i zatwierdzona w referendum w grudniu 1976 roku. Stąd formuła: przeszło się od prawa do prawa, bez formalnego zerwania.",
  "¿Qué partido se legalizó un Sábado Santo de 1977?":
    "Którą partię zalegalizowano w Wielką Sobotę 1977 roku?",
  "El PSOE": "PSOE",
  "El Partido Comunista": "Partię Komunistyczną",
  "Alianza Popular": "Alianza Popular",
  "UCD": "UCD",
  "El PCE, en la decisión más arriesgada del periodo. Se eligió un fin de semana largo precisamente para amortiguar la reacción.":
    "PCE, w najbardziej ryzykownej decyzji tego okresu. Wybrano długi weekend właśnie po to, żeby stłumić reakcję.",
  "¿En qué fecha se celebraron las primeras elecciones libres desde 1936?":
    "W jakim dniu odbyły się pierwsze wolne wybory od 1936 roku?",
  "El 28 de octubre de 1982": "28 października 1982",
  "El 23 de febrero de 1981": "23 lutego 1981",
  "Cuarenta y un años después de las últimas. La Constitución llegaría año y medio más tarde, redactada por las Cortes salidas de esa votación.":
    "Czterdzieści jeden lat po ostatnich. Konstytucja przyjdzie półtora roku później, napisana przez Cortes wyłonione w tym głosowaniu.",
  "¿Qué fueron los Pactos de la Moncloa?": "Czym były Pakty z Moncloa?",
  "Un acuerdo entre el rey y los militares": "Porozumieniem między królem a wojskowymi",
  "Un acuerdo económico y social entre gobierno y oposición":
    "Porozumieniem gospodarczym i społecznym między rządem a opozycją",
  "El pacto que fijó las autonomías": "Paktem, który ustalił autonomie",
  "El tratado de adhesión a la CEE": "Traktatem o przystąpieniu do EWG",
  "Firmados en octubre de 1977 con una inflación superior al veinte por ciento. Permitieron afrontar la crisis mientras se redactaba la Constitución.":
    "Podpisane w październiku 1977 roku, przy inflacji powyżej dwudziestu procent. Pozwoliły stawić czoła kryzysowi, gdy pisano konstytucję.",
  "¿Qué se asaltó el 23 de febrero de 1981?": "Co zaatakowano 23 lutego 1981 roku?",
  "La sede del Gobierno catalán": "Siedzibę rządu katalońskiego",
  "El Congreso, durante una votación de investidura, con el Gobierno y los diputados dentro. El golpe fracasó esa misma noche.":
    "Kongres, w czasie głosowania o wotum zaufania, z rządem i posłami w środku. Zamach upadł tej samej nocy.",
  "¿Qué partido ganó las elecciones de 1982 con mayoría absoluta?":
    "Która partia wygrała wybory 1982 roku bezwzględną większością?",
  "El PCE": "PCE",
  "El PSOE, con Felipe González, y gobernó hasta 1996. La alternancia demostró que el sistema funcionaba.":
    "PSOE, z Felipem Gonzálezem, i rządziła do 1996 roku. Naprzemienność dowiodła, że system działa.",
  "¿Qué se decidió en el referéndum de 1986, además de la entrada en la CEE?":
    "O czym zdecydowano w referendum z 1986 roku, poza wejściem do EWG?",
  "La permanencia en la OTAN": "O pozostaniu w NATO",
  "La reforma del Senado": "O reformie Senatu",
  "El mapa autonómico": "O mapie autonomii",
  "La adopción del euro": "O przyjęciu euro",
  "La entrada en la CEE no se sometió a referéndum: fue un tratado. Lo que se votó ese año fue la permanencia en la OTAN, y ganó el sí.":
    "Wejścia do EWG nie poddano referendum: to był traktat. Tym, nad czym w tamtym roku głosowano, było pozostanie w NATO, i wygrało tak.",
  "¿Qué tres acontecimientos coincidieron en España en 1992?":
    "Które trzy wydarzenia zbiegły się w Hiszpanii w 1992 roku?",
  "Los Juegos de Barcelona, la Expo de Sevilla y el primer AVE":
    "Igrzyska w Barcelonie, Expo w Sewilli i pierwszy AVE",
  "La entrada en la CEE, el euro y la OTAN": "Wejście do EWG, euro i NATO",
  "La Constitución, el 23-F y las autonomías": "Konstytucja, 23-F i autonomie",
  "El Mundial de fútbol, la Expo y la peseta":
    "Mistrzostwa świata w piłce nożnej, Expo i peseta",
  "Doce meses en los que el país se enseñó al mundo. El Mundial de fútbol se había celebrado diez años antes, en 1982.":
    "Dwanaście miesięcy, w których kraj pokazał się światu. Mistrzostwa świata w piłce nożnej odbyły się dziesięć lat wcześniej, w 1982 roku.",
  "¿Qué moneda sustituyó el euro en 2002?": "Którą walutę euro zastąpiło w 2002 roku?",
  "El real": "Reala",
  "La peseta": "Pesetę",
  "El duro": "Duro",
  "La peseta, que había circulado desde 1868. El duro era el nombre coloquial de la moneda de cinco pesetas, no una moneda distinta.":
    "Pesetę, która krążyła od 1868 roku. Duro było potoczną nazwą monety pięciopesetowej, a nie odrębną walutą.",
  "¿Qué ocurrió el 11 de marzo de 2004?": "Co wydarzyło się 11 marca 2004 roku?",
  "El intento de golpe de Estado": "Próba zamachu stanu",
  "Los atentados en trenes de cercanías de Madrid":
    "Zamachy w podmiejskich pociągach w Madrycie",
  "La abdicación de Juan Carlos I": "Abdykacja Jana Karola I",
  "La entrada en el euro": "Wejście do strefy euro",
  "Ciento noventa y tres muertos: el mayor atentado de la historia de España. El 23-F fue en 1981 y la abdicación en 2014.":
    "Sto dziewięćdziesiąt trzy ofiary śmiertelne: największy zamach w historii Hiszpanii. 23-F był w 1981 roku, a abdykacja w 2014.",
  "¿En qué año anunció ETA su disolución?": "W którym roku ETA ogłosiła swoje rozwiązanie?",
  "Anunció el fin de su actividad armada en 2011 y su disolución en 2018. Había causado más de ochocientas muertes desde los años sesenta.":
    "Koniec działalności zbrojnej ogłosiła w 2011 roku, a rozwiązanie w 2018. Od lat sześćdziesiątych spowodowała ponad osiemset śmierci.",
  "¿Por qué se dice que la Transición fue una reforma y no una ruptura?":
    "Dlaczego mówi się, że Transición była reformą, a nie zerwaniem?",
  "Porque la dirigió el ejército": "Bo kierowało nią wojsko",
  "Porque las instituciones del régimen aprobaron su propia disolución":
    "Bo instytucje reżimu uchwaliły własne rozwiązanie",
  "Porque no hubo elecciones": "Bo nie było wyborów",
  "Porque la Constitución se copió de otro país": "Bo konstytucję skopiowano z innego kraju",
  "Las Cortes franquistas votaron la ley que las disolvía, y de ahí la fórmula de ir de la ley a la ley. Esa elección explica tanto la estabilidad posterior como los debates que siguen abiertos.":
    "Cortes frankistowskie przegłosowały ustawę, która je rozwiązywała, i stąd formuła przejścia od prawa do prawa. Ten wybór tłumaczy zarówno późniejszą stabilność, jak i debaty, które pozostają otwarte.",
  "¿Cuántas ciudades autónomas hay en España?": "Ile jest w Hiszpanii miast autonomicznych?",
  "Ceuta y Melilla, ambas desde 1995. No son comunidades autónomas, sino una categoría propia con estatuto y competencias más limitadas.":
    "Ceuta i Melilla, obie od 1995 roku. Nie są wspólnotami autonomicznymi, lecz własną kategorią, ze statutem i bardziej ograniczonymi kompetencjami.",
  "¿Qué título de la Constitución regula la organización territorial?":
    "Który tytuł konstytucji reguluje organizację terytorialną?",
  "El título VIII, que no enumera comunidades sino que establece cómo pueden constituirse. El mapa autonómico se hizo después, siguiendo ese procedimiento.":
    "Tytuł VIII, który nie wylicza wspólnot, lecz ustala, jak mogą się ukonstytuować. Mapa autonomii powstała potem, według tej procedury.",
  "¿Qué comunidades accedieron a la autonomía por la vía rápida del artículo 151?":
    "Które wspólnoty doszły do autonomii szybką drogą artykułu 151?",
  "Cataluña, País Vasco, Galicia y Andalucía": "Katalonia, Kraj Basków, Galicja i Andaluzja",
  "Madrid, Cataluña y el País Vasco": "Madryt, Katalonia i Kraj Basków",
  "Todas las que tienen lengua propia": "Wszystkie, które mają własny język",
  "Las siete uniprovinciales": "Siedem jednoprowincjonalnych",
  "Las tres con estatuto plebiscitado durante la República, más Andalucía, que lo consiguió tras un referéndum en 1980. Las demás siguieron la vía más lenta del artículo 143.":
    "Trzy ze statutem przegłosowanym za Republiki, plus Andaluzja, która zdobyła go po referendum w 1980 roku. Pozostałe poszły wolniejszą drogą artykułu 143.",
  "¿Con qué tipo de norma se aprueba un Estatuto de Autonomía?":
    "Jakim rodzajem aktu uchwala się statut autonomii?",
  "Con un decreto del Gobierno": "Dekretem rządu",
  "Con una ley orgánica": "Ustawą organiczną",
  "Con una ley ordinaria": "Ustawą zwykłą",
  "Con un reglamento autonómico": "Rozporządzeniem wspólnoty",
  "Ley orgánica de las Cortes Generales. Por eso su reforma exige el acuerdo de la comunidad y del Estado: pertenece a los dos ordenamientos a la vez.":
    "Ustawą organiczną Cortes Generales. Dlatego jego zmiana wymaga zgody wspólnoty i państwa: należy do obu porządków naraz.",
  "¿Cuántas provincias tiene España?": "Ile prowincji ma Hiszpania?",
  "Treinta y ocho": "Trzydzieści osiem",
  "Ochenta y una": "Osiemdziesiąt jeden",
  "Cincuenta provincias, agrupadas en diecisiete comunidades. Siete comunidades son uniprovinciales, como Madrid, Murcia o Asturias.":
    "Pięćdziesiąt prowincji, zgrupowanych w siedemnastu wspólnotach. Siedem wspólnot jest jednoprowincjonalnych, jak Madryt, Murcja czy Asturia.",
  "¿Qué ocurre en una comunidad uniprovincial?":
    "Co dzieje się we wspólnocie jednoprowincjonalnej?",
  "Tiene dos parlamentos": "Ma dwa parlamenty",
  "La comunidad absorbe las funciones de la diputación provincial":
    "Wspólnota przejmuje funkcje rady prowincji",
  "No tiene estatuto propio": "Nie ma własnego statutu",
  "Depende directamente del Gobierno central": "Zależy bezpośrednio od rządu centralnego",
  "Al coincidir el territorio, no tiene sentido mantener dos administraciones. Madrid, Murcia, Asturias, Cantabria, La Rioja, Navarra y las Baleares están en ese caso.":
    "Skoro terytorium się pokrywa, utrzymywanie dwóch administracji nie ma sensu. Madryt, Murcja, Asturia, Kantabria, La Rioja, Nawarra i Baleary są w takiej sytuacji.",
  "¿Qué artículo enumera las competencias exclusivas del Estado?":
    "Który artykuł wylicza wyłączne kompetencje państwa?",
  "El artículo 143": "Artykuł 143",
  "El artículo 148": "Artykuł 148",
  "El artículo 149": "Artykuł 149",
  "El artículo 155": "Artykuł 155",
  "El 149 lista lo que es exclusivo del Estado y el 148 lo que las comunidades pueden asumir. El 143 es una de las vías de acceso a la autonomía y el 155 el mecanismo de última instancia.":
    "Artykuł 149 wylicza to, co należy wyłącznie do państwa, a 148 to, co wspólnoty mogą przejąć. Artykuł 143 to jedna z dróg dojścia do autonomii, a 155 mechanizm ostatniej instancji.",
  "¿Cuál de estas materias es competencia exclusiva del Estado?":
    "Która z tych dziedzin należy do wyłącznych kompetencji państwa?",
  "El turismo": "Turystyka",
  "El urbanismo": "Urbanistyka",
  "La administración de justicia": "Wymiar sprawiedliwości",
  "La agricultura": "Rolnictwo",
  "Justicia, defensa, relaciones internacionales y moneda están entre las exclusivas. Turismo, urbanismo y agricultura son de las que las comunidades pueden asumir.":
    "Wymiar sprawiedliwości, obrona, stosunki międzynarodowe i waluta są wśród wyłącznych. Turystyka, urbanistyka i rolnictwo należą do tych, które wspólnoty mogą przejąć.",
  "¿Cómo se llama el sistema de financiación del País Vasco?":
    "Jak nazywa się system finansowania Kraju Basków?",
  "El convenio": "Convenio",
  "El concierto": "Concierto",
  "El cupo común": "Cupo común",
  "El fondo foral": "Fondo foral",
  "El concierto económico vasco; el navarro se llama convenio. Ambos permiten recaudar los propios impuestos y pagar al Estado una cantidad por los servicios comunes.":
    "Baskijski concierto económico; nawarski nazywa się convenio. Oba pozwalają pobierać własne podatki i płacić państwu kwotę za wspólne usługi.",
  "¿Qué mecanismo prevé el artículo 155?": "Jaki mechanizm przewiduje artykuł 155?",
  "La disolución de un parlamento autonómico por el rey":
    "Rozwiązanie parlamentu wspólnoty przez króla",
  "Medidas del Gobierno, aprobadas por el Senado, si una comunidad incumple gravemente":
    "Środki rządu, zatwierdzone przez Senat, jeśli wspólnota ciężko narusza obowiązki",
  "La creación de nuevas comunidades": "Tworzenie nowych wspólnot",
  "El reparto anual de los fondos europeos": "Coroczny podział funduszy europejskich",
  "Requiere un requerimiento previo y la aprobación del Senado por mayoría absoluta. Se aplicó por primera vez en 2017, casi cuarenta años después de escribirse.":
    "Wymaga uprzedniego wezwania i zatwierdzenia przez Senat bezwzględną większością. Zastosowano go po raz pierwszy w 2017 roku, prawie czterdzieści lat po napisaniu.",
  "¿Quién representa a la Administración del Estado en cada comunidad autónoma?":
    "Kto reprezentuje administrację państwa w każdej wspólnocie autonomicznej?",
  "El presidente autonómico": "Przewodniczący wspólnoty",
  "El alcalde de la capital": "Burmistrz stolicy",
  "El presidente del Tribunal Superior de Justicia": "Prezes Tribunal Superior de Justicia",
  "El delegado del Gobierno, nombrado por el Gobierno central, con subdelegados en cada provincia. No es un cargo autonómico.":
    "Delegat rządu, powoływany przez rząd centralny, z subdelegatami w każdej prowincji. To nie jest urząd wspólnoty.",
  "¿Para qué sirve el Fondo de Compensación Interterritorial?":
    "Czemu służy Fondo de Compensación Interterritorial?",
  "Para financiar las lenguas cooficiales": "Finansowaniu języków współurzędowych",
  "Para corregir desequilibrios económicos entre territorios":
    "Wyrównywaniu nierówności gospodarczych między terytoriami",
  "Para pagar la deuda de las comunidades": "Spłacie długu wspólnot",
  "Para repartir los fondos europeos": "Podziałowi funduszy europejskich",
  "La Constitución garantiza la solidaridad entre territorios y prohíbe que las diferencias entre estatutos supongan privilegios económicos o sociales. Este fondo es el instrumento.":
    "Konstytucja gwarantuje solidarność między terytoriami i zakazuje, by różnice między statutami oznaczały przywileje gospodarcze albo socjalne. Ten fundusz jest narzędziem.",
  "¿Cómo se llama el parlamento de una comunidad autónoma?":
    "Jak nazywa się parlament wspólnoty autonomicznej?",
  "Cortes Generales": "Cortes Generales",
  "Diputación": "Diputación",
  "Asamblea legislativa, con nombres propios en cada comunidad: Parlament, Cortes, Junta General, Asamblea. El Consejo de Gobierno es el ejecutivo, no el legislativo.":
    "Zgromadzenie ustawodawcze, z własnymi nazwami w każdej wspólnocie: Parlament, Cortes, Junta General, Asamblea. Consejo de Gobierno jest władzą wykonawczą, a nie ustawodawczą.",
  "¿Qué extensión aproximada tiene España?": "Jaką mniej więcej powierzchnię ma Hiszpania?",
  "300.000 km²": "300 000 km²",
  "400.000 km²": "400 000 km²",
  "505.000 km²": "505 000 km²",
  "700.000 km²": "700 000 km²",
  "Unos 505.000 kilómetros cuadrados, lo que la convierte en el segundo país más extenso de la Unión Europea, tras Francia.":
    "Około 505 000 kilometrów kwadratowych, co czyni ją drugim co do wielkości krajem Unii Europejskiej, po Francji.",
  "¿Qué país europeo es más montañoso que España?":
    "Który kraj europejski jest bardziej górzysty niż Hiszpania?",
  "Austria": "Austria",
  "Suiza": "Szwajcaria",
  "Italia": "Włochy",
  "Noruega": "Norwegia",
  "Solo Suiza tiene una altitud media mayor. La Meseta Central está por encima de los seiscientos metros, y eso explica los inviernos duros del interior pese a la latitud.":
    "Tylko Szwajcaria ma wyższą średnią wysokość. Meseta Central leży powyżej sześciuset metrów, i to tłumaczy surowe zimy wnętrza kraju mimo szerokości geograficznej.",
  "¿Qué cordillera separa España de Francia?":
    "Które pasmo górskie oddziela Hiszpanię od Francji?",
  "El Sistema Ibérico": "Góry Iberyjskie",
  "Sierra Morena": "Sierra Morena",
  "Los Pirineos, de mar a mar, con Andorra encajada entre ambos países. La Cantábrica cierra el norte peninsular pero no es frontera.":
    "Pireneje, od morza do morza, z Andorą wciśniętą między oba kraje. Góry Kantabryjskie zamykają północ Półwyspu, ale nie są granicą.",
  "¿Cuál es el pico más alto de la Península?": "Który szczyt jest najwyższy na Półwyspie?",
  "El Moncayo": "Moncayo",
  "El Mulhacén, en Sierra Nevada, con 3.479 metros. El Teide es más alto pero está en Tenerife, y el Aneto es el techo de los Pirineos.":
    "Mulhacén, w Sierra Nevada, 3479 metrów. Teide jest wyższy, ale leży na Teneryfie, a Aneto jest dachem Pirenejów.",
  "¿Cuál es el río de mayor caudal de España?": "Która rzeka Hiszpanii ma największy przepływ?",
  "El Ebro, y es además el gran río de la vertiente mediterránea, la más seca. El Tajo es el más largo y el Guadalquivir el único navegable.":
    "Ebro, a jest przy tym wielką rzeką zlewiska śródziemnomorskiego, najsuchszego. Tag jest najdłuższy, a Gwadalkiwir jedyny żeglowny.",
  "¿Qué río español es navegable hasta una ciudad del interior?":
    "Która rzeka hiszpańska jest żeglowna aż do miasta w głębi kraju?",
  "El Guadalquivir, hasta Sevilla": "Gwadalkiwir, do Sewilli",
  "El Ebro, hasta Zaragoza": "Ebro, do Saragossy",
  "El Duero, hasta Valladolid": "Duero, do Valladolid",
  "El Tajo, hasta Toledo": "Tag, do Toledo",
  "Sevilla es el único puerto fluvial de España, a ochenta kilómetros de la desembocadura. Fue lo que la convirtió en la puerta del comercio americano.":
    "Sewilla jest jedynym portem rzecznym Hiszpanii, osiemdziesiąt kilometrów od ujścia. To właśnie uczyniło z niej bramę handlu z Ameryką.",
  "¿Cuáles son las tres vertientes hidrográficas españolas?":
    "Jakie są trzy zlewiska hiszpańskie?",
  "Cantábrica, atlántica y mediterránea": "Kantabryjskie, atlantyckie i śródziemnomorskie",
  "Norte, centro y sur": "Północne, środkowe i południowe",
  "Atlántica, africana y balear": "Atlantyckie, afrykańskie i balearskie",
  "Pirenaica, ibérica y bética": "Pirenejskie, iberyjskie i betyckie",
  "La cantábrica tiene ríos cortos y caudalosos, la atlántica los grandes ríos peninsulares y la mediterránea es la más seca salvo por el Ebro.":
    "Kantabryjskie ma rzeki krótkie i zasobne w wodę, atlantyckie wielkie rzeki Półwyspu, a śródziemnomorskie jest najsuchsze, poza Ebro.",
  "¿En qué océano están las Islas Canarias?": "Na którym oceanie leżą Wyspy Kanaryjskie?",
  "En el Mediterráneo": "Na Morzu Śródziemnym",
  "En el Atlántico": "Na Atlantyku",
  "En el Cantábrico": "Na Morzu Kantabryjskim",
  "En el mar de Alborán": "Na Morzu Alborańskim",
  "En el Atlántico, frente a la costa africana y a unos mil quinientos kilómetros de la Península. Las Baleares son las mediterráneas.":
    "Na Atlantyku, naprzeciw wybrzeża afrykańskiego i jakieś tysiąc pięćset kilometrów od Półwyspu. Baleary są tymi śródziemnomorskimi.",
  "¿Qué particularidad horaria tienen las Canarias?":
    "Jaka jest osobliwość czasu na Wyspach Kanaryjskich?",
  "Tienen una hora menos que la Península": "Mają godzinę mniej niż Półwysep",
  "Tienen una hora más": "Mają godzinę więcej",
  "No cambian la hora en verano": "Nie zmieniają czasu latem",
  "Ninguna: comparten horario con el resto del país": "Żadna: mają ten sam czas co reszta kraju",
  "Una hora menos, y es la única parte de España en otro huso. Los avisos horarios de la televisión española lo recuerdan a diario.":
    "Godzinę mniej, i to jedyna część Hiszpanii w innej strefie. Sygnały czasu w hiszpańskiej telewizji przypominają o tym codziennie.",
  "¿Cuál es el origen geológico de las Canarias?":
    "Jakie jest geologiczne pochodzenie Wysp Kanaryjskich?",
  "Sedimentario": "Osadowe",
  "Volcánico": "Wulkaniczne",
  "Coralino": "Koralowe",
  "Glaciar": "Lodowcowe",
  "Volcánico, y el volcanismo sigue activo: la erupción de La Palma en 2021 lo recordó. El Teide es el mayor de esos edificios volcánicos.":
    "Wulkaniczne, a wulkanizm wciąż jest czynny: wybuch na La Palmie w 2021 roku o tym przypomniał. Teide jest największą z tych budowli wulkanicznych.",
  "¿Con qué países y territorios limita España?":
    "Z jakimi krajami i terytoriami graniczy Hiszpania?",
  "Portugal, Francia, Andorra, Gibraltar y Marruecos":
    "Portugalia, Francja, Andora, Gibraltar i Maroko",
  "Portugal y Francia solamente": "Tylko Portugalia i Francja",
  "Portugal, Francia e Italia": "Portugalia, Francja i Włochy",
  "Portugal, Francia, Andorra e Italia": "Portugalia, Francja, Andora i Włochy",
  "Con Marruecos por Ceuta y Melilla, y con el territorio británico de Gibraltar en el sur peninsular. Italia no comparte frontera terrestre con España.":
    "Z Marokiem przez Ceutę i Melillę, a z brytyjskim terytorium Gibraltaru na południu Półwyspu. Włochy nie mają z Hiszpanią granicy lądowej.",
  "¿Qué tienen de singular Ceuta y Melilla en el conjunto de la Unión Europea?":
    "Co jest osobliwego w Ceucie i Melilli w skali Unii Europejskiej?",
  "Son las únicas ciudades sin ayuntamiento": "Są jedynymi miastami bez rady miejskiej",
  "Son las únicas fronteras terrestres de la Unión con África":
    "Są jedynymi lądowymi granicami Unii z Afryką",
  "Son las únicas exentas de impuestos": "Są jedynymi zwolnionymi z podatków",
  "Son las únicas fuera del espacio Schengen": "Są jedynymi poza strefą Schengen",
  "Están en el norte de África y, por tanto, la Unión Europea tiene ahí su única frontera terrestre con el continente africano.":
    "Leżą w północnej Afryce, a więc Unia Europejska ma tam swoją jedyną granicę lądową z kontynentem afrykańskim.",
  "¿Cómo se conoce a la franja húmeda del norte peninsular?":
    "Jak nazywa się wilgotny pas północy Półwyspu?",
  "La España seca": "Sucha Hiszpania",
  "La España verde": "Zielona Hiszpania",
  "La España vaciada": "España vaciada",
  "La cornisa mediterránea": "Wybrzeże śródziemnomorskie",
  "La España verde, de clima oceánico, con lluvias repartidas todo el año. La España vaciada designa en cambio el interior despoblado, que es otra cosa.":
    "Zielona Hiszpania, o klimacie oceanicznym, z opadami rozłożonymi na cały rok. España vaciada oznacza natomiast wyludnione wnętrze kraju, a to co innego.",
  "¿Cuántos apartados tiene el artículo 3 de la Constitución?":
    "Ile ustępów ma artykuł 3 konstytucji?",
  "Tres: el castellano como lengua oficial del Estado, la cooficialidad de las demás según los estatutos, y la protección de las modalidades lingüísticas como patrimonio.":
    "Trzy: kastylijski jako język urzędowy państwa, współurzędowość pozostałych zgodnie ze statutami i ochrona odmian językowych jako dziedzictwa.",
  "¿En qué comunidades es oficial el catalán?":
    "W których wspólnotach kataloński jest urzędowy?",
  "Solo en Cataluña": "Tylko w Katalonii",
  "En Cataluña y las Illes Balears, y en la Comunidad Valenciana con la denominación de valenciano":
    "W Katalonii i na Balearach, a we Wspólnocie Walenckiej pod nazwą walencki",
  "En Cataluña y Aragón": "W Katalonii i Aragonii",
  "En toda la costa mediterránea": "Na całym wybrzeżu śródziemnomorskim",
  "Tres comunidades, con la particularidad de la denominación que fija el estatuto valenciano. En Aragón hay hablantes en la franja oriental, pero sin oficialidad.":
    "Trzy wspólnoty, ze szczególną nazwą, którą ustala statut walencki. W Aragonii są użytkownicy w pasie wschodnim, ale bez urzędowości.",
  "¿Con qué lengua comparte origen el gallego?":
    "Z jakim językiem galicyjski dzieli pochodzenie?",
  "Con el castellano": "Z kastylijskim",
  "Con el portugués": "Z portugalskim",
  "Con el catalán": "Z katalońskim",
  "Con el asturiano": "Z asturyjskim",
  "Ambos proceden del galaicoportugués medieval, y de ahí su proximidad. Todas las demás lenguas romances peninsulares vienen también del latín, pero por ramas distintas.":
    "Oba pochodzą ze średniowiecznego galicyjsko-portugalskiego, i stąd ich bliskość. Wszystkie pozostałe języki romańskie Półwyspu też pochodzą z łaciny, ale innymi gałęziami.",
  "¿En qué territorios es oficial el euskera?": "Na jakich terytoriach baskijski jest urzędowy?",
  "En el País Vasco y en la zona vascófona de Navarra":
    "W Kraju Basków i w baskijskojęzycznej strefie Nawarry",
  "Solo en el País Vasco": "Tylko w Kraju Basków",
  "En el País Vasco, Navarra y La Rioja": "W Kraju Basków, Nawarze i La Rioja",
  "En todo el norte peninsular": "W całej północy Półwyspu",
  "En Navarra el régimen lingüístico varía por comarcas, con una zona vascófona, una mixta y una no vascófona. En el País Vasco es oficial en toda la comunidad.":
    "W Nawarze ustrój językowy zmienia się od okręgu do okręgu: jest strefa baskijskojęzyczna, mieszana i niebaskijskojęzyczna. W Kraju Basków jest urzędowy w całej wspólnocie.",
  "¿Qué es el euskera batua?": "Czym jest euskera batua?",
  "Un dialecto del euskera hablado en Vizcaya":
    "Dialektem baskijskiego, którym mówi się w Bizkai",
  "El estándar escrito unificado, fijado desde los años sesenta":
    "Ujednoliconym standardem pisanym, ustalonym od lat sześćdziesiątych",
  "El nombre vasco de la Constitución": "Baskijską nazwą konstytucji",
  "Un método de enseñanza para adultos": "Metodą nauczania dorosłych",
  "Batua significa unificado. Antes de él el euskera tenía dialectos históricos sin una norma común escrita; el batua es lo que se enseña hoy en la escuela.":
    "Batua znaczy ujednolicony. Przed nim baskijski miał dialekty historyczne bez wspólnej normy pisanej; batua jest tym, czego uczy się dziś w szkole.",
  "¿De qué lengua es una variedad el aranés?": "Odmianą jakiego języka jest arański?",
  "Del catalán": "Katalońskiego",
  "Del occitano": "Oksytańskiego",
  "Del francés": "Francuskiego",
  "Del aragonés": "Aragońskiego",
  "Del occitano, la lengua del sur de Francia. Es oficial en toda Cataluña desde 2006 y propia del Valle de Arán.":
    "Oksytańskiego, języka południowej Francji. Jest urzędowy w całej Katalonii od 2006 roku i własny dla Doliny Aranu.",
  "¿Qué protege el tercer apartado del artículo 3?": "Co chroni trzeci ustęp artykułu 3?",
  "Las lenguas cooficiales": "Języki współurzędowe",
  "Las modalidades lingüísticas de España como patrimonio cultural":
    "Odmiany językowe Hiszpanii jako dziedzictwo kulturowe",
  "El derecho a estudiar en la lengua materna": "Prawo do nauki w języku ojczystym",
  "El uso del castellano en la Administración": "Używanie kastylijskiego w administracji",
  "Es el apartado que ampara hablas sin cooficialidad como el asturiano, el aragonés, el leonés o la fala extremeña, con grados de reconocimiento que fijan las leyes autonómicas.":
    "To ustęp, który osłania mowy bez współurzędowości, jak asturyjski, aragoński, leoński czy fala z Estremadury, ze stopniami uznania ustalanymi przez ustawy wspólnot.",
  "¿Cuál de estas hablas NO es cooficial en ninguna comunidad?":
    "Która z tych mów NIE jest współurzędowa w żadnej wspólnocie?",
  "El asturiano": "Asturyjski",
  "El asturiano, llamado también bable, está protegido por su estatuto pero no es lengua oficial. Las otras tres sí lo son en sus territorios.":
    "Asturyjski, nazywany też bable, jest chroniony przez swój statut, ale nie jest językiem urzędowym. Pozostałe trzy są nimi na swoich terytoriach.",
  "¿Cuántas personas hablan español en el mundo, aproximadamente?":
    "Ile mniej więcej osób mówi po hiszpańsku na świecie?",
  "Cien millones": "Sto milionów",
  "Trescientos millones": "Trzysta milionów",
  "Seiscientos millones": "Sześćset milionów",
  "Mil millones": "Miliard",
  "Alrededor de seiscientos millones, lo que la sitúa como segunda lengua materna del mundo tras el chino mandarín. La mayoría de sus hablantes no vive en España.":
    "Około sześciuset milionów, co stawia go jako drugi język ojczysty świata, po chińskim mandaryńskim. Większość jego użytkowników nie mieszka w Hiszpanii.",
  "¿Qué país tiene más hispanohablantes?":
    "Który kraj ma najwięcej osób mówiących po hiszpańsku?",
  "España": "Hiszpania",
  "Argentina": "Argentyna",
  "Colombia": "Kolumbia",
  "México": "Meksyk",
  "México, con mucha diferencia. Es la razón de que la norma del español no se decida solo en Madrid, sino en común con las academias americanas.":
    "Meksyk, z dużą przewagą. To powód, dla którego norma hiszpańszczyzny nie zapada tylko w Madrycie, lecz wspólnie z akademiami amerykańskimi.",
  "¿Cómo se llama la asociación que reúne a la RAE con las academias americanas?":
    "Jak nazywa się zrzeszenie, które łączy RAE z akademiami amerykańskimi?",
  "La Asociación de Academias de la Lengua Española":
    "Asociación de Academias de la Lengua Española",
  "La Organización de Estados Iberoamericanos": "Organizacja Państw Iberoamerykańskich",
  "El Instituto Cervantes": "Instituto Cervantes",
  "La Unión Panhispánica": "Unia Panhiszpańska",
  "Con ella se publican en común diccionarios y gramáticas, en lo que se llama política panhispánica. El Instituto Cervantes se ocupa en cambio de difundir la lengua fuera.":
    "Z nią wspólnie wydaje się słowniki i gramatyki, w czymś, co nazywa się polityką panhiszpańską. Instituto Cervantes zajmuje się natomiast szerzeniem języka poza krajem.",
  "¿Qué organismo administra las pruebas de lengua para la nacionalidad?":
    "Który organ przeprowadza egzaminy językowe na obywatelstwo?",
  "La Real Academia Española": "Real Academia Española",
  "La Escuela Oficial de Idiomas": "Escuela Oficial de Idiomas",
  "El Instituto Cervantes administra tanto el DELE como la prueba CCSE. El Ministerio de Justicia resuelve el expediente de nacionalidad, que es otra fase.":
    "Instituto Cervantes przeprowadza zarówno DELE, jak i egzamin CCSE. Ministerstwo sprawiedliwości rozstrzyga sprawę o obywatelstwo, a to inny etap.",
  "¿Por qué la Constitución emplea la palabra castellano y no español?":
    "Dlaczego konstytucja używa słowa kastylijski, a nie hiszpański?",
  "Porque español es un término americano": "Bo hiszpański to termin amerykański",
  "Porque las demás lenguas de España también son españolas":
    "Bo pozostałe języki Hiszpanii też są hiszpańskie",
  "Porque castellano es más antiguo": "Bo kastylijski jest starszy",
  "Por un error de redacción nunca corregido": "Przez nigdy niepoprawiony błąd redakcyjny",
  "Llamar español solo a una de ellas dejaría fuera al catalán, al gallego y al euskera, que son igualmente lenguas de España. Fuera del país predomina el término español.":
    "Nazwanie hiszpańskim tylko jednego z nich zostawiłoby poza nawiasem kataloński, galicyjski i baskijski, które są tak samo językami Hiszpanii. Poza krajem przeważa termin hiszpański.",
  "¿Cuál es el sector económico más importante de España?":
    "Który sektor gospodarki jest w Hiszpanii najważniejszy?",
  "La industria": "Przemysł",
  "Los servicios": "Usługi",
  "La minería": "Górnictwo",
  "Los servicios, y dentro de ellos el turismo, que sitúa a España año tras año entre los primeros destinos del mundo por número de visitantes.":
    "Usługi, a w ich obrębie turystyka, która rok po roku stawia Hiszpanię wśród pierwszych kierunków świata pod względem liczby odwiedzających.",
  "¿Qué provincia abastece de hortalizas a buena parte de Europa en invierno?":
    "Która prowincja zaopatruje zimą sporą część Europy w warzywa?",
  "Almería": "Almería",
  "Valencia": "Walencja",
  "Murcia": "Murcja",
  "Huelva": "Huelva",
  "El mar de invernaderos de Almería, en la zona más árida de Europa continental, produce fuera de temporada gracias al clima y a la tecnología de riego.":
    "Morze szklarni w Almeríi, w najbardziej suchym rejonie Europy kontynentalnej, produkuje poza sezonem dzięki klimatowi i technice nawadniania.",
  "¿Qué particularidad tiene la industria automovilística española?":
    "Jaka jest osobliwość hiszpańskiego przemysłu samochodowego?",
  "Es la mayor de Europa": "Jest największy w Europie",
  "Fabrica mucho pero sin marcas propias: las plantas son de grupos extranjeros":
    "Produkuje dużo, ale bez własnych marek: zakłady należą do grup zagranicznych",
  "Se concentra en una sola región": "Skupia się w jednym regionie",
  "Produce solo vehículos eléctricos": "Wytwarza wyłącznie pojazdy elektryczne",
  "España está entre los mayores fabricantes europeos, con plantas repartidas por varias comunidades, pero las marcas pertenecen a grupos con sede fuera del país.":
    "Hiszpania jest wśród największych producentów europejskich, z zakładami rozrzuconymi po kilku wspólnotach, ale marki należą do grup z siedzibą poza krajem.",
  "¿Qué energías renovables tienen más peso en España?":
    "Które źródła odnawialne mają w Hiszpanii największą wagę?",
  "La geotérmica y la mareomotriz": "Geotermalne i pływowe",
  "La eólica y la solar": "Wiatrowe i słoneczne",
  "La biomasa y el carbón": "Biomasa i węgiel",
  "La nuclear y la hidráulica": "Jądrowe i wodne",
  "El viento del interior y las horas de sol favorecen a ambas. La nuclear no es renovable, aunque también aporta a la generación.":
    "Wiatr wnętrza kraju i liczba godzin słońca sprzyjają obu. Energia jądrowa nie jest odnawialna, choć również dokłada się do produkcji.",
  "¿Cuál es el problema económico más persistente de España?":
    "Jaki jest najbardziej uporczywy problem gospodarczy Hiszpanii?",
  "La inflación": "Inflacja",
  "El paro": "Bezrobocie",
  "La deuda externa privada": "Prywatny dług zagraniczny",
  "La escasez de energía": "Niedobór energii",
  "La tasa de desempleo lleva décadas por encima de la media europea, con dos rasgos añadidos: el paro juvenil y la elevada temporalidad de los contratos.":
    "Stopa bezrobocia od dziesięcioleci stoi powyżej średniej europejskiej, z dwiema dodatkowymi cechami: bezrobociem młodych i wysokim udziałem umów na czas określony.",
  "¿Qué es la temporalidad en el mercado laboral?": "Czym jest temporalidad na rynku pracy?",
  "El trabajo estacional en la agricultura": "Pracą sezonową w rolnictwie",
  "La proporción de contratos de duración limitada":
    "Udziałem umów o ograniczonym czasie trwania",
  "El número de horas extraordinarias": "Liczbą godzin nadliczbowych",
  "La rotación entre sectores": "Przechodzeniem między branżami",
  "Es la parte del empleo que no es indefinida, y en España ha sido históricamente alta en comparación europea. Afecta sobre todo a los trabajadores jóvenes.":
    "To ta część zatrudnienia, która nie jest bezterminowa, a w Hiszpanii historycznie była wysoka w porównaniu europejskim. Dotyka przede wszystkim młodych pracowników.",
  "¿Qué caracteriza la demografía española actual?":
    "Co cechuje dzisiejszą demografię Hiszpanii?",
  "Natalidad muy baja y esperanza de vida muy alta":
    "Bardzo niska dzietność i bardzo wysoka oczekiwana długość życia",
  "Natalidad alta y población joven": "Wysoka dzietność i młoda ludność",
  "Población estable desde 1980": "Ludność stabilna od 1980 roku",
  "Emigración masiva y despoblación general": "Masowa emigracja i powszechne wyludnienie",
  "La combinación de las dos cosas es lo que tensiona el sistema de pensiones a largo plazo. La esperanza de vida española está entre las mayores del mundo.":
    "Połączenie tych dwóch rzeczy właśnie napina na dłuższą metę system emerytalny. Hiszpańska oczekiwana długość życia jest wśród najwyższych na świecie.",
  "¿Qué financiaron en España los fondos estructurales y de cohesión europeos?":
    "Co w Hiszpanii sfinansowały europejskie fundusze strukturalne i spójności?",
  "Las pensiones": "Emerytury",
  "Carreteras, depuradoras, universidades y trenes":
    "Drogi, oczyszczalnie, uniwersytety i pociągi",
  "La deuda pública": "Dług publiczny",
  "Las nóminas de los funcionarios": "Pensje urzędników",
  "Transformaron las infraestructuras del país en poco más de una década tras la entrada en 1986. Es el efecto más visible de la integración europea.":
    "Przemieniły infrastrukturę kraju w niewiele ponad dziesięć lat po wejściu w 1986 roku. To najbardziej widoczny skutek integracji europejskiej.",
  "¿Cuántos años de residencia necesitan los nacionales iberoamericanos para pedir la nacionalidad?":
    "Ilu lat zamieszkania potrzebują obywatele iberoamerykańscy, żeby ubiegać się o obywatelstwo?",
  "Dos, frente a los diez del plazo general. El vínculo con América no es solo lingüístico: está también escrito en el Código Civil.":
    "Dwóch, wobec dziesięciu w terminie ogólnym. Więź z Ameryką nie jest tylko językowa: stoi też zapisana w kodeksie cywilnym.",
  "¿Qué reúnen periódicamente las Cumbres Iberoamericanas?":
    "Kogo okresowo zbierają Szczyty Iberoamerykańskie?",
  "A los jefes de Estado y de Gobierno de los países iberoamericanos":
    "Głowy państw i szefów rządów krajów iberoamerykańskich",
  "A los rectores de las universidades": "Rektorów uniwersytetów",
  "A los ministros de Economía de la Unión Europea": "Ministrów gospodarki Unii Europejskiej",
  "A las academias de la lengua": "Akademie języka",
  "Son el marco institucional del vínculo con América Latina, junto con organismos comunes en educación y cultura.":
    "Są instytucjonalnymi ramami więzi z Ameryką Łacińską, obok wspólnych organów w edukacji i kulturze.",
  "¿Junto a qué país entró España en la Comunidad Económica Europea?":
    "Z jakim krajem Hiszpania weszła do Europejskiej Wspólnoty Gospodarczej?",
  "Junto a Grecia": "Z Grecją",
  "Junto a Portugal": "Z Portugalią",
  "Junto a Irlanda": "Z Irlandią",
  "Sola": "Sama",
  "Con Portugal, el 1 de enero de 1986. Grecia había entrado cinco años antes, en 1981.":
    "Z Portugalią, 1 stycznia 1986 roku. Grecja weszła pięć lat wcześniej, w 1981.",
  "¿De dónde proceden principalmente los residentes extranjeros en España?":
    "Skąd pochodzą głównie cudzoziemcy mieszkający w Hiszpanii?",
  "De América Latina, Europa del Este, Marruecos y la propia Unión Europea":
    "Z Ameryki Łacińskiej, Europy Wschodniej, Maroka i samej Unii Europejskiej",
  "Solo de la Unión Europea": "Wyłącznie z Unii Europejskiej",
  "Sobre todo de Asia oriental": "Przede wszystkim z Azji Wschodniej",
  "Principalmente de América del Norte": "Głównie z Ameryki Północnej",
  "El país del que salieron millones de emigrantes en el siglo XX cuenta hoy con varios millones de residentes extranjeros, y esos cuatro orígenes son los mayores.":
    "Kraj, z którego w XX wieku wyjechały miliony emigrantów, ma dziś kilka milionów mieszkańców-cudzoziemców, a te cztery kierunki są największe.",
  "¿Desde cuándo forma España parte del espacio Schengen?":
    "Od kiedy Hiszpania należy do strefy Schengen?",
  "Desde su entrada en la CEE en 1986": "Od wejścia do EWG w 1986 roku",
  "Desde los años noventa": "Od lat dziewięćdziesiątych",
  "Desde la adopción del euro": "Od przyjęcia euro",
  "No forma parte de Schengen": "Nie należy do Schengen",
  "La adhesión al acuerdo se firmó en 1991 y su aplicación llegó en 1995. Entrar en la Comunidad y entrar en Schengen fueron dos pasos distintos y separados por años.":
    "Przystąpienie do układu podpisano w 1991 roku, a jego stosowanie przyszło w 1995. Wejście do Wspólnoty i wejście do Schengen były dwoma osobnymi krokami, rozdzielonymi latami.",
  "¿Qué norma desarrolla los derechos laborales básicos en España?":
    "Który akt rozwija podstawowe prawa pracownicze w Hiszpanii?",
  "El Código Civil": "Kodeks cywilny",
  "El Estatuto de los Trabajadores": "Estatuto de los Trabajadores",
  "La Ley de Bases": "Ley de Bases",
  "El Reglamento de Empleo": "Reglamento de Empleo",
  "El Estatuto de los Trabajadores. Por debajo de él están los convenios colectivos, que pueden mejorar sus mínimos pero nunca empeorarlos.":
    "Estatuto de los Trabajadores. Poniżej niego stoją układy zbiorowe, które mogą poprawić jego minima, ale nigdy ich pogorszyć.",
  "¿Qué artículo de la Constitución garantiza el derecho de huelga?":
    "Który artykuł konstytucji gwarantuje prawo do strajku?",
  "El artículo 28": "Artykuł 28",
  "El artículo 37": "Artykuł 37",
  "El artículo 41": "Artykuł 41",
  "El 28, junto con la libertad sindical. El 35 recoge el derecho y deber de trabajar, el 37 la negociación colectiva y el 41 la Seguridad Social.":
    "Artykuł 28, wraz z wolnością związkową. Artykuł 35 zawiera prawo i obowiązek pracy, 37 negocjacje zbiorowe, a 41 ubezpieczenie społeczne.",
  "¿Qué significan las siglas SMI?": "Co oznacza skrót SMI?",
  "Sistema Mínimo de Ingresos": "Sistema Mínimo de Ingresos",
  "Salario mínimo interprofesional": "Salario mínimo interprofesional",
  "Seguro Mutuo Industrial": "Seguro Mutuo Industrial",
  "Subsidio por Movilidad Interior": "Subsidio por Movilidad Interior",
  "El suelo salarial para la jornada completa, que el Gobierno actualiza cada año por real decreto tras consultar a sindicatos y empresarios.":
    "Płacowy próg dla pełnego etatu, który rząd co roku aktualizuje dekretem królewskim, po zasięgnięciu opinii związków i pracodawców.",
  "¿Cuál es la jornada máxima legal en España?":
    "Jaki jest ustawowy maksymalny czas pracy w Hiszpanii?",
  "Treinta y cinco horas semanales": "Trzydzieści pięć godzin tygodniowo",
  "Cuarenta horas semanales de promedio anual":
    "Czterdzieści godzin tygodniowo w średniej rocznej",
  "Cuarenta y ocho horas semanales": "Czterdzieści osiem godzin tygodniowo",
  "La que fije cada empresa": "Taki, jaki ustali każda firma",
  "Cuarenta horas de promedio en cómputo anual, lo que permite semanas más largas y más cortas siempre que la media se respete. Las horas extraordinarias tienen tope legal.":
    "Czterdzieści godzin średnio w rozliczeniu rocznym, co pozwala na tygodnie dłuższe i krótsze, byle średnia była zachowana. Godziny nadliczbowe mają ustawowy pułap.",
  "¿Qué es un contrato fijo discontinuo?": "Czym jest contrato fijo discontinuo?",
  "Un contrato temporal renovable cada año": "Umową na czas określony odnawianą co roku",
  "Un contrato indefinido para trabajos estacionales o intermitentes":
    "Umową bezterminową na prace sezonowe albo przerywane",
  "Un contrato a tiempo parcial": "Umową na część etatu",
  "Un contrato de formación": "Umową szkoleniową",
  "Es indefinido, aunque la prestación se concentre en determinadas temporadas: a la persona se la llama cada campaña y conserva su antigüedad.":
    "Jest bezterminowa, choć świadczenie pracy skupia się w określonych sezonach: człowieka wzywa się na każdą kampanię, a on zachowuje swój staż.",
  "¿Pueden sustituirse las vacaciones por una compensación económica?":
    "Czy urlop można zastąpić rekompensatą pieniężną?",
  "Sí, si lo acuerdan empresa y trabajador": "Tak, jeśli uzgodnią to firma i pracownik",
  "No: el descanso es obligatorio": "Nie: odpoczynek jest obowiązkowy",
  "Sí, hasta la mitad de los días": "Tak, do połowy dni",
  "Solo en los contratos temporales": "Tylko przy umowach na czas określony",
  "La ley no permite cambiar vacaciones por dinero mientras dura el contrato. Solo se compensan en metálico las no disfrutadas cuando la relación laboral termina.":
    "Ustawa nie pozwala zamieniać urlopu na pieniądze, dopóki trwa umowa. W gotówce rozlicza się tylko dni niewykorzystane, gdy stosunek pracy się kończy.",
  "¿Qué dos descuentos separan el salario bruto del neto?":
    "Które dwa potrącenia oddzielają płacę brutto od netto?",
  "Las cotizaciones a la Seguridad Social y la retención del IRPF":
    "Składki na ubezpieczenie społeczne i zaliczka na IRPF",
  "El IVA y el IRPF": "VAT i IRPF",
  "La cuota sindical y el seguro médico": "Składka związkowa i ubezpieczenie zdrowotne",
  "El impuesto de sociedades y la retención": "Podatek od spółek i zaliczka",
  "La cotización financia la sanidad, el paro y las pensiones; la retención es un adelanto del impuesto sobre la renta que se ajusta en la declaración anual.":
    "Składka finansuje ochronę zdrowia, zasiłek dla bezrobotnych i emerytury; zaliczka jest przedpłatą podatku dochodowego, którą wyrównuje się w rocznym zeznaniu.",
  "¿Cuántas pagas extraordinarias son habituales y cuándo se cobran?":
    "Ile dodatkowych wypłat jest zwyczajowych i kiedy się je dostaje?",
  "Una, en diciembre": "Jedna, w grudniu",
  "Dos, en junio y en diciembre": "Dwie, w czerwcu i w grudniu",
  "Tres, repartidas por trimestres": "Trzy, rozłożone na kwartały",
  "Ninguna: van siempre prorrateadas": "Żadna: zawsze są rozłożone na miesiące",
  "Dos, aunque muchos convenios permiten prorratearlas en las doce mensualidades, con lo que el importe mensual sube y las extras desaparecen del calendario.":
    "Dwie, choć wiele układów pozwala rozłożyć je na dwanaście miesięcy, przez co kwota miesięczna rośnie, a dodatkowe wypłaty znikają z kalendarza.",
  "¿Qué organismo gestiona la prestación por desempleo?":
    "Który organ prowadzi świadczenie dla bezrobotnych?",
  "El SEPE": "SEPE",
  "El Ministerio de Trabajo directamente": "Bezpośrednio ministerstwo pracy",
  "El Servicio Público de Empleo Estatal. Cobrar el paro exige haber cotizado un mínimo, y la duración depende de lo cotizado.":
    "Servicio Público de Empleo Estatal. Pobieranie zasiłku wymaga przepracowania minimum składkowego, a długość zależy od tego, ile się odprowadziło.",
  "¿Qué documento resume todo lo que una persona ha cotizado?":
    "Który dokument podsumowuje wszystko, co dana osoba odprowadziła?",
  "El finiquito": "Finiquito",
  "La vida laboral": "Vida laboral",
  "El certificado de empresa": "Zaświadczenie z firmy",
  "El informe de vida laboral, que puede pedirse en cualquier momento a la Seguridad Social. La nómina refleja un solo mes.":
    "Raport vida laboral, o który można w każdej chwili poprosić ubezpieczenie społeczne. Pasek płacowy pokazuje jeden miesiąc.",
  "¿Qué diferencia hay entre finiquito e indemnización?":
    "Jaka jest różnica między finiquito a odprawą?",
  "Son dos nombres de lo mismo": "To dwie nazwy tego samego",
  "El finiquito liquida lo pendiente y se cobra siempre; la indemnización solo corresponde en determinados despidos":
    "Finiquito rozlicza to, co zaległe, i dostaje się je zawsze; odprawa przysługuje tylko przy określonych zwolnieniach",
  "La indemnización se cobra siempre y el finiquito solo si hay despido":
    "Odprawę dostaje się zawsze, a finiquito tylko przy zwolnieniu",
  "El finiquito lo paga el SEPE y la indemnización la empresa":
    "Finiquito płaci SEPE, a odprawę firma",
  "El finiquito incluye vacaciones no disfrutadas y pagas pendientes al terminar cualquier contrato. La indemnización se suma a él solo cuando el despido da derecho a ella.":
    "Finiquito obejmuje niewykorzystany urlop i zaległe wypłaty przy zakończeniu każdej umowy. Odprawa dochodzi do niego tylko wtedy, gdy zwolnienie daje do niej prawo.",
  "¿Qué es un convenio colectivo?": "Czym jest układ zbiorowy?",
  "Un contrato individual con la empresa": "Indywidualną umową z firmą",
  "Un acuerdo entre representantes de trabajadores y empresarios que fija condiciones para un sector o una empresa":
    "Porozumieniem między przedstawicielami pracowników a pracodawcami, które ustala warunki dla branży albo firmy",
  "Una norma dictada por el Gobierno": "Aktem wydanym przez rząd",
  "Un pacto entre comunidades autónomas": "Paktem między wspólnotami autonomicznymi",
  "Puede ser de sector o de empresa, y mejora los mínimos legales: salarios, jornada, permisos. Se aplica a todo el ámbito que cubre, no solo a los afiliados.":
    "Może być branżowy albo zakładowy i poprawia minima ustawowe: płace, czas pracy, urlopy. Stosuje się go do całego objętego zakresu, a nie tylko do członków związku.",
  "¿Qué número acompaña a un trabajador toda su vida laboral?":
    "Który numer towarzyszy pracownikowi przez całe życie zawodowe?",
  "El número de afiliación a la Seguridad Social":
    "Numer przynależności do ubezpieczenia społecznego",
  "El número de nómina": "Numer paska płacowego",
  "El código del convenio": "Kod układu zbiorowego",
  "El número de contrato": "Numer umowy",
  "Se obtiene con la primera alta y ya no cambia, aunque se cambie de empresa, de régimen o de comunidad.":
    "Uzyskuje się go przy pierwszym zgłoszeniu i już się nie zmienia, nawet przy zmianie firmy, systemu czy wspólnoty.",
  "¿Cómo se financia el Sistema Nacional de Salud?":
    "Jak finansowany jest Sistema Nacional de Salud?",
  "Con primas mensuales de los asegurados": "Miesięcznymi składkami ubezpieczonych",
  "Con impuestos": "Podatkami",
  "Con las cuotas de las mutuas": "Składkami towarzystw wzajemnych",
  "Con los copagos farmacéuticos": "Dopłatami do leków",
  "Se financia con impuestos y es universal: no hay primas ni cuotas mensuales. El copago farmacéutico cubre solo una parte del precio de los medicamentos.":
    "Finansuje się go z podatków i jest powszechny: nie ma składek ani miesięcznych opłat. Dopłata do leków pokrywa tylko część ich ceny.",
  "¿Quién gestiona la sanidad pública en España?":
    "Kto zarządza publiczną ochroną zdrowia w Hiszpanii?",
  "El Estado": "Państwo",
  "Los ayuntamientos": "Gminy",
  "Las diputaciones": "Rady prowincji",
  "Las comunidades gestionan y el Estado fija las bases y coordina. De ahí que los tiempos de espera y la organización varíen de una a otra.":
    "Zarządzają wspólnoty, a państwo ustala podstawy i koordynuje. Stąd kolejki i organizacja różnią się od jednej do drugiej.",
  "¿Cuál es la puerta de entrada habitual al sistema sanitario?":
    "Co jest zwykłą bramą wejściową do systemu ochrony zdrowia?",
  "El hospital": "Szpital",
  "El centro de salud y el médico de familia": "Przychodnia i lekarz rodzinny",
  "La farmacia": "Apteka",
  "Urgencias": "Izba przyjęć",
  "El médico de familia atiende, receta y deriva al especialista. A urgencias se puede acudir directamente, pero no es la vía ordinaria.":
    "Lekarz rodzinny przyjmuje, przepisuje i kieruje do specjalisty. Na izbę przyjęć można trafić bezpośrednio, ale to nie jest droga zwykła.",
  "¿Qué ocurre con la tarjeta sanitaria al mudarse a otra comunidad autónoma?":
    "Co dzieje się z kartą zdrowia przy przeprowadzce do innej wspólnoty autonomicznej?",
  "Nada: es la misma en toda España": "Nic: jest ta sama w całej Hiszpanii",
  "Hay que cambiarla y asignarse un nuevo médico":
    "Trzeba ją wymienić i przypisać sobie nowego lekarza",
  "Deja de tener validez durante seis meses": "Traci ważność na sześć miesięcy",
  "La emite entonces el Estado": "Wydaje ją wtedy państwo",
  "La emite cada comunidad, así que al cambiar de residencia hay que tramitar una nueva. La atención está garantizada en toda España, pero el trámite es autonómico.":
    "Wydaje ją każda wspólnota, więc przy zmianie miejsca zamieszkania trzeba załatwić nową. Opieka jest zagwarantowana w całej Hiszpanii, ale formalność jest sprawą wspólnoty.",
  "¿De qué depende el porcentaje del copago farmacéutico?":
    "Od czego zależy procent dopłaty do leków?",
  "De la edad": "Od wieku",
  "De la renta": "Od dochodu",
  "De la comunidad autónoma": "Od wspólnoty autonomicznej",
  "Del tipo de farmacia": "Od rodzaju apteki",
  "Se calcula en porcentaje según la renta, y los pensionistas tienen además topes mensuales que limitan lo que pueden llegar a pagar.":
    "Liczy się go procentowo według dochodu, a emeryci mają ponadto miesięczne pułapy, które ograniczają to, ile mogą zapłacić.",
  "¿Entre qué edades es obligatoria la enseñanza en España?":
    "Między jakim wiekiem nauka w Hiszpanii jest obowiązkowa?",
  "De 3 a 16 años": "Od 3 do 16 lat",
  "De 6 a 16 años": "Od 6 do 16 lat",
  "De 6 a 18 años": "Od 6 do 18 lat",
  "De 5 a 15 años": "Od 5 do 15 lat",
  "De los seis a los dieciséis, es decir, Primaria y ESO. Infantil no es obligatoria y Bachillerato o FP tampoco.":
    "Od szóstego do szesnastego roku życia, czyli Primaria i ESO. Infantil nie jest obowiązkowa, a Bachillerato ani FP też nie.",
  "¿Cuántos cursos tiene la Educación Primaria?": "Ile lat trwa Educación Primaria?",
  "Seis cursos, de los seis a los doce años. La ESO tiene cuatro, de los doce a los dieciséis.":
    "Sześć lat, od szóstego do dwunastego roku życia. ESO trwa cztery, od dwunastego do szesnastego.",
  "¿Qué significan las siglas ESO?": "Co oznacza skrót ESO?",
  "Enseñanza Superior Obligatoria": "Enseñanza Superior Obligatoria",
  "Educación Secundaria Obligatoria": "Educación Secundaria Obligatoria",
  "Escuela Secundaria Oficial": "Escuela Secundaria Oficial",
  "Estudios Superiores Ordinarios": "Estudios Superiores Ordinarios",
  "Cuatro cursos entre los doce y los dieciséis años, al término de los cuales se obtiene el título de Graduado en ESO.":
    "Cztery lata między dwunastym a szesnastym rokiem życia, po których otrzymuje się tytuł Graduado en ESO.",
  "¿Qué alternativa al Bachillerato existe después de la ESO?":
    "Jaka alternatywa dla Bachillerato istnieje po ESO?",
  "La Formación Profesional de grado medio": "Formación Profesional stopnia średniego",
  "El doctorado": "Doktorat",
  "Ninguna: el Bachillerato es obligatorio": "Żadna: Bachillerato jest obowiązkowe",
  "La FP de grado medio, y desde ella puede pasarse al grado superior y a la universidad. Ni el Bachillerato ni la FP son obligatorios.":
    "FP stopnia średniego, a z niego można przejść na stopień wyższy i na uniwersytet. Ani Bachillerato, ani FP nie są obowiązkowe.",
  "¿Cuántos años dura un grado universitario en la mayoría de las carreras?":
    "Ile lat trwają studia licencjackie na większości kierunków?",
  "Cuatro años en la mayoría, seguidos opcionalmente de máster y doctorado. Algunas carreras como Medicina son más largas.":
    "Cztery lata na większości, po nich opcjonalnie magisterium i doktorat. Niektóre kierunki, jak medycyna, są dłuższe.",
  "¿A partir de qué nota se aprueba en el sistema educativo español?":
    "Od jakiej oceny zdaje się w hiszpańskim systemie oświaty?",
  "A partir del cuatro": "Od czwórki",
  "A partir del cinco": "Od piątki",
  "A partir del seis": "Od szóstki",
  "A partir del diez": "Od dziesiątki",
  "La escala va de cero a diez y se aprueba con cinco. En la universidad se usa la misma escala, con la mención de matrícula de honor para las mejores notas.":
    "Skala biegnie od zera do dziesięciu, a zdaje się z piątką. Na uniwersytecie stosuje się tę samą skalę, z wyróżnieniem matrícula de honor dla najlepszych ocen.",
  "¿Puede un centro concertado cobrar por la enseñanza en las etapas concertadas?":
    "Czy centro concertado może pobierać opłaty za nauczanie na etapach objętych umową?",
  "Sí, libremente": "Tak, dowolnie",
  "No: recibe fondos públicos precisamente a cambio de no hacerlo":
    "Nie: dostaje środki publiczne właśnie w zamian za to, że tego nie robi",
  "Sí, hasta un tope fijado por la comunidad": "Tak, do pułapu ustalonego przez wspólnotę",
  "Solo en Bachillerato": "Tylko w Bachillerato",
  "Ese es el trato del concierto: financiación pública a cambio de gratuidad en las etapas cubiertas. Las actividades complementarias sí pueden tener coste.":
    "Taka jest umowa concierto: finansowanie publiczne w zamian za bezpłatność na objętych etapach. Zajęcia dodatkowe mogą natomiast kosztować.",
  "¿Qué prueba hay que superar para acceder a la universidad?":
    "Jaki egzamin trzeba zdać, żeby dostać się na uniwersytet?",
  "Una prueba de acceso conocida durante décadas como selectividad":
    "Egzamin wstępny, przez dziesięciolecia znany jako selectividad",
  "El título de Graduado en ESO": "Tytuł Graduado en ESO",
  "Una entrevista en la facultad": "Rozmowę na wydziale",
  "Ninguna: basta con el Bachillerato": "Żadnego: wystarczy Bachillerato",
  "Además de superar el Bachillerato hay que aprobar la prueba de acceso, cuyas siglas han cambiado varias veces pero que todo el mundo sigue llamando selectividad.":
    "Poza zdaniem Bachillerato trzeba zdać egzamin wstępny, którego skrót zmieniał się kilka razy, ale który wszyscy dalej nazywają selectividad.",
  "¿Puede empadronarse una persona sin permiso de residencia?":
    "Czy osoba bez zezwolenia na pobyt może się zameldować?",
  "No, hace falta autorización previa": "Nie, potrzebne jest uprzednie zezwolenie",
  "Sí: el padrón registra dónde se vive, no la situación administrativa":
    "Tak: padrón rejestruje, gdzie się mieszka, a nie status administracyjny",
  "Solo si tiene contrato de trabajo": "Tylko jeśli ma umowę o pracę",
  "Solo en los municipios grandes": "Tylko w dużych gminach",
  "El padrón es un registro de residencia efectiva. De él dependen la tarjeta sanitaria y la escolarización, y por eso el acceso no se condiciona a la situación administrativa.":
    "Padrón jest rejestrem faktycznego zamieszkania. Od niego zależą karta zdrowia i przyjęcie do szkoły, i dlatego dostępu do niego nie uzależnia się od statusu administracyjnego.",
  "¿Qué acredita un certificado de empadronamiento?":
    "Co poświadcza zaświadczenie o empadronamiento?",
  "El domicilio y el tiempo que se lleva residiendo en el municipio":
    "Adres i czas zamieszkiwania w gminie",
  "La situación laboral": "Status zawodowy",
  "El nivel de renta": "Poziom dochodu",
  "Es la prueba habitual del tiempo de residencia, y por eso lo piden después otros expedientes, incluidos los de arraigo y nacionalidad.":
    "To zwykły dowód czasu zamieszkania, i dlatego żądają go potem inne sprawy, w tym te o arraigo i o obywatelstwo.",
  "¿Qué significan las siglas TIE?": "Co oznacza skrót TIE?",
  "Tarjeta de identidad de extranjero": "Tarjeta de identidad de extranjero",
  "Trámite de inscripción exterior": "Trámite de inscripción exterior",
  "Título de ingreso especial": "Título de ingreso especial",
  "Tasa de identificación estatal": "Tasa de identificación estatal",
  "Es el documento físico que acredita la autorización de residencia y lleva impreso el NIE. El NIE por sí solo es un número, no una tarjeta.":
    "To fizyczny dokument, który poświadcza zezwolenie na pobyt i ma nadrukowany NIE. Sam NIE jest numerem, a nie kartą.",
  "¿Qué necesitan los ciudadanos de la Unión Europea para residir en España?":
    "Czego potrzebują obywatele Unii Europejskiej, żeby mieszkać w Hiszpanii?",
  "Una autorización de residencia": "Zezwolenia na pobyt",
  "Un certificado de registro en el Registro Central de Extranjeros":
    "Zaświadczenia o wpisie do Registro Central de Extranjeros",
  "Un visado renovable cada año": "Wizy odnawianej co roku",
  "Nada en absoluto": "Zupełnie niczego",
  "No necesitan permiso, pero sí inscribirse y obtener un certificado de registro, que es un trámite mucho más ligero que una autorización de residencia.":
    "Nie potrzebują zezwolenia, ale muszą się wpisać i uzyskać zaświadczenie o rejestracji, co jest formalnością o wiele lżejszą niż zezwolenie na pobyt.",
  "¿Qué son las figuras de arraigo?": "Czym są formy arraigo?",
  "Ayudas económicas para familias numerosas": "Pomocą finansową dla rodzin wielodzietnych",
  "Vías de regularización para quien lleva tiempo en el país y acredita vínculos":
    "Drogami legalizacji dla tych, którzy są w kraju od dłuższego czasu i wykazują więzi",
  "Contratos agrícolas de temporada": "Sezonowymi umowami rolniczymi",
  "Programas de retorno voluntario": "Programami dobrowolnego powrotu",
  "Hay arraigo social, laboral, familiar y para la formación, cada uno con requisitos propios. Todos parten de la permanencia acreditada en España.":
    "Istnieje arraigo społeczne, zawodowe, rodzinne i szkoleniowe, każde z własnymi wymogami. Wszystkie wychodzą od wykazanego pobytu w Hiszpanii.",
  "¿Qué permite la residencia de larga duración?": "Na co pozwala pobyt długoterminowy?",
  "Votar en las elecciones generales": "Na głosowanie w wyborach parlamentarnych",
  "Residir y trabajar de forma indefinida en las mismas condiciones que los españoles":
    "Na mieszkanie i pracę bezterminowo, na tych samych warunkach co Hiszpanie",
  "Obtener automáticamente la nacionalidad": "Na automatyczne uzyskanie obywatelstwa",
  "Viajar sin pasaporte por toda Europa": "Na podróżowanie bez paszportu po całej Europie",
  "Salvo en lo que la ley reserva a la nacionalidad, como el voto en las generales. Es un paso anterior y distinto al de hacerse español.":
    "Poza tym, co ustawa zastrzega dla obywatelstwa, jak głos w wyborach parlamentarnych. To krok wcześniejszy i inny niż stanie się Hiszpanem.",
  "¿Qué se necesita para hacer trámites con la Administración por internet?":
    "Czego trzeba, żeby załatwiać sprawy urzędowe przez internet?",
  "Solo el NIE": "Samego NIE",
  "Una identidad digital: Cl@ve o un certificado digital":
    "Tożsamości cyfrowej: Cl@ve albo certyfikatu cyfrowego",
  "Una cuenta bancaria española": "Hiszpańskiego konta bankowego",
  "Un correo electrónico verificado": "Zweryfikowanego adresu e-mail",
  "Sin Cl@ve o certificado no se pide cita, no se descarga la vida laboral ni se presenta la declaración. Es hoy el requisito práctico para casi todo.":
    "Bez Cl@ve albo certyfikatu nie umówi się wizyty, nie pobierze vida laboral ani nie złoży zeznania. To dziś praktyczny wymóg do prawie wszystkiego.",
  "¿Ante qué organismo se presenta la declaración de la renta?":
    "W którym organie składa się zeznanie podatkowe?",
  "Ante la Seguridad Social": "W ubezpieczeniu społecznym",
  "Ante la Agencia Tributaria": "W Agencia Tributaria",
  "Ante el ayuntamiento": "W urzędzie miasta",
  "Ante el Ministerio de Justicia": "W ministerstwie sprawiedliwości",
  "Ante la Agencia Tributaria, normalmente entre abril y junio. Regulariza lo que ya se retuvo en la nómina, y puede salir a pagar o a devolver.":
    "W Agencia Tributaria, zwykle między kwietniem a czerwcem. Rozlicza to, co już potrącono z pensji, i może wyjść do zapłaty albo do zwrotu.",
  "¿Ante qué ministerio se tramita el expediente de nacionalidad?":
    "W którym ministerstwie prowadzi się sprawę o obywatelstwo?",
  "Interior": "Spraw wewnętrznych",
  "Justicia": "Sprawiedliwości",
  "Inclusión y Seguridad Social": "Włączenia i ubezpieczenia społecznego",
  "Asuntos Exteriores": "Spraw zagranicznych",
  "El Ministerio de Justicia resuelve el expediente. Interior se ocupa de extranjería y las pruebas las administra el Instituto Cervantes: tres organismos distintos en un mismo camino.":
    "Ministerstwo sprawiedliwości rozstrzyga sprawę. Ministerstwo spraw wewnętrznych zajmuje się cudzoziemcami, a egzaminy przeprowadza Instituto Cervantes: trzy różne organy na jednej drodze.",
  "¿Qué dos pruebas del Instituto Cervantes se exigen para la nacionalidad?":
    "Których dwóch egzaminów Instituto Cervantes wymaga się do obywatelstwa?",
  "El DELE A2 y la CCSE": "DELE A2 i CCSE",
  "El DELE B1 y una entrevista": "DELE B1 i rozmowy",
  "La CCSE y un examen de historia": "CCSE i egzaminu z historii",
  "Un examen médico y uno de lengua": "Badania lekarskiego i egzaminu językowego",
  "La de lengua a nivel A2, de la que están exentos los nacionales de países hispanohablantes, y la de conocimientos constitucionales y socioculturales.":
    "Językowego na poziomie A2, z którego zwolnieni są obywatele krajów hiszpańskojęzycznych, i tego z wiedzy konstytucyjnej i społeczno-kulturowej.",
  "¿Con qué acto se cierra la concesión de la nacionalidad?":
    "Jakim aktem zamyka się nadanie obywatelstwa?",
  "Con la entrega del DNI": "Wydaniem DNI",
  "Con la jura o promesa de fidelidad al Rey y obediencia a la Constitución, y la inscripción en el Registro Civil":
    "Przysięgą albo przyrzeczeniem wierności Królowi i posłuszeństwa konstytucji oraz wpisem do Registro Civil",
  "Con una ceremonia en el ayuntamiento": "Uroczystością w urzędzie miasta",
  "Con el pago de una tasa": "Uiszczeniem opłaty",
  "El acto formal y la inscripción registral cierran el expediente. El DNI llega después, como consecuencia de ya ser español.":
    "Akt formalny i wpis do rejestru zamykają sprawę. DNI przychodzi potem, jako następstwo bycia już Hiszpanem.",
  "¿Qué documento necesita un extranjero además del NIE para ser dado de alta en un empleo?":
    "Jakiego dokumentu poza NIE potrzebuje cudzoziemiec, żeby zostać zgłoszonym do pracy?",
  "El certificado de empadronamiento": "Zaświadczenia o zameldowaniu",
  "El carné de conducir": "Prawa jazdy",
  "El pasaporte en vigor únicamente": "Wyłącznie ważnego paszportu",
  "El número de la Seguridad Social es distinto del NIE y no lo sustituye: hace falta para el alta laboral y acompaña a la persona toda su vida.":
    "Numer ubezpieczenia społecznego jest inny niż NIE i go nie zastępuje: potrzebny jest do zgłoszenia do pracy i towarzyszy człowiekowi przez całe życie.",
  "¿Qué derecho da el empadronamiento a los ciudadanos de la Unión Europea?":
    "Jakie prawo daje zameldowanie obywatelom Unii Europejskiej?",
  "Votar en las elecciones municipales": "Głosowanie w wyborach gminnych",
  "Acceder a la función pública": "Dostęp do służby publicznej",
  "Obtener la nacionalidad en dos años": "Uzyskanie obywatelstwa w dwa lata",
  "El voto municipal, tras la reforma constitucional de 1992 que lo permitió. Las generales siguen reservadas a quien tiene la nacionalidad española.":
    "Głos w wyborach gminnych, po zmianie konstytucji z 1992 roku, która na to pozwoliła. Wybory parlamentarne pozostają zastrzeżone dla tych, którzy mają obywatelstwo hiszpańskie.",
  "¿A qué hora se come habitualmente en España?":
    "O której godzinie zwykle jada się w Hiszpanii obiad?",
  "Entre las doce y la una": "Między dwunastą a pierwszą",
  "Entre las dos y las tres": "Między drugą a trzecią",
  "A las cuatro": "O czwartej",
  "Antes de las doce": "Przed dwunastą",
  "La comida del mediodía es la principal del día y se hace entre las dos y las tres, más tarde que en casi toda Europa. La cena llega a partir de las nueve.":
    "Południowy posiłek jest głównym posiłkiem dnia i je się go między drugą a trzecią, później niż niemal w całej Europie. Kolacja przychodzi od dziewiątej.",
  "¿Qué explica en parte los horarios tardíos españoles?":
    "Co po części tłumaczy późne hiszpańskie pory?",
  "El clima mediterráneo": "Klimat śródziemnomorski",
  "Que España usa la hora de Europa central pese a estar a la longitud de Londres":
    "To, że Hiszpania używa czasu środkowoeuropejskiego, choć leży na długości Londynu",
  "La duración de la jornada escolar": "Długość dnia szkolnego",
  "Una ley de horarios comerciales": "Ustawa o godzinach handlu",
  "El sol se pone más tarde de lo que marca el reloj, y las comidas se desplazan con él. La otra parte de la explicación es simple costumbre heredada.":
    "Słońce zachodzi później, niż wskazuje zegar, a posiłki przesuwają się razem z nim. Druga część wyjaśnienia to po prostu odziedziczony zwyczaj.",
  "¿Cómo se llama el segundo desayuno de media mañana?":
    "Jak nazywa się drugie śniadanie w połowie poranka?",
  "La merienda": "Merienda",
  "El almuerzo": "Almuerzo",
  "La sobremesa": "Sobremesa",
  "El aperitivo": "Aperitivo",
  "En España almuerzo designa a menudo ese tentempié de media mañana. La merienda es de media tarde y la sobremesa el rato de charla tras la comida.":
    "W Hiszpanii almuerzo oznacza często tę przekąskę w połowie poranka. Merienda jest w połowie popołudnia, a sobremesa to czas rozmowy po posiłku.",
  "¿Qué es la jornada partida?": "Czym jest jornada partida?",
  "Trabajar solo por la mañana": "Pracą tylko rano",
  "Cerrar a mediodía y reabrir por la tarde":
    "Zamknięciem w południe i ponownym otwarciem po południu",
  "Repartir la semana en cuatro días": "Rozłożeniem tygodnia na cztery dni",
  "Turnarse con otro empleado": "Zmianowością z innym pracownikiem",
  "Es más común cuanto más pequeño es el municipio. En las grandes ciudades muchos comercios ya no cierran a mediodía.":
    "Jest tym częstsza, im mniejsza gmina. W wielkich miastach wiele sklepów już nie zamyka w południe.",
  "¿Qué papel tiene realmente la siesta en España?": "Jaką rolę naprawdę ma sjesta w Hiszpanii?",
  "Es una práctica diaria generalizada": "Jest powszechną codzienną praktyką",
  "Es sobre todo una costumbre de fin de semana y de verano":
    "Jest przede wszystkim zwyczajem weekendowym i letnim",
  "Está regulada por convenio en todos los sectores":
    "Jest uregulowana układem we wszystkich branżach",
  "Desapareció por completo en los años ochenta":
    "Zniknęła całkowicie w latach osiemdziesiątych",
  "La imagen internacional exagera su alcance: con jornadas y desplazamientos actuales, dormir a diario después de comer es minoritario entre semana.":
    "Międzynarodowy obraz wyolbrzymia jej zasięg: przy dzisiejszych godzinach pracy i dojazdach codzienne spanie po obiedzie jest w tygodniu rzadkością.",
  "¿Qué es el tapeo?": "Czym jest tapeo?",
  "Comer de pie en un restaurante": "Jedzeniem na stojąco w restauracji",
  "Ir de bar en bar tomando algo pequeño con la bebida":
    "Chodzeniem od baru do baru i braniem czegoś małego do picia",
  "Un menú infantil": "Menu dziecięcym",
  "Un tipo de cocina regional": "Rodzajem kuchni regionalnej",
  "En unas ciudades la tapa va incluida con la consumición y en otras se paga aparte. Es tanto una forma de comer como una forma de moverse por la calle.":
    "W jednych miastach tapa jest wliczona w napój, a w innych płaci się za nią osobno. To zarazem sposób jedzenia i sposób poruszania się po ulicy.",
  "¿Qué es la sobremesa?": "Czym jest sobremesa?",
  "El postre": "Deserem",
  "El rato de conversación que sigue a la comida, con la mesa ya recogida":
    "Czasem rozmowy po posiłku, przy uprzątniętym już stole",
  "El mantel que se pone sobre la mesa": "Obrusem, który kładzie się na stole",
  "La cuenta que se pide al final": "Rachunkiem, o który prosi się na koniec",
  "Puede durar más que la propia comida, sobre todo en fin de semana, y es una de las costumbres que más llama la atención a quien llega de fuera.":
    "Może trwać dłużej niż sam posiłek, zwłaszcza w weekend, i jest jednym ze zwyczajów, które najbardziej zwracają uwagę przybysza.",
  "¿En qué contextos se usa el usted en España?":
    "W jakich sytuacjach używa się w Hiszpanii formy usted?",
  "Con casi todo el mundo, salvo la familia": "Wobec prawie wszystkich, poza rodziną",
  "Con personas mayores y en contextos muy formales":
    "Wobec osób starszych i w sytuacjach bardzo formalnych",
  "Nunca: ha desaparecido del uso": "Nigdy: zniknęła z użycia",
  "Solo por escrito": "Tylko na piśmie",
  "El tuteo está mucho más extendido en España que en el resto del mundo hispanohablante: se tutea a compañeros, camareros y desconocidos de edad parecida.":
    "Mówienie na ty jest w Hiszpanii o wiele bardziej rozpowszechnione niż w reszcie świata hiszpańskojęzycznego: mówi się na ty do kolegów, kelnerów i nieznajomych w podobnym wieku.",
  "¿Qué tipo de vivienda predomina en las ciudades españolas?":
    "Jaki rodzaj mieszkania przeważa w hiszpańskich miastach?",
  "La casa unifamiliar": "Dom jednorodzinny",
  "El piso en edificio": "Mieszkanie w bloku",
  "La vivienda rural rehabilitada": "Odnowiony dom na wsi",
  "El adosado": "Dom w zabudowie szeregowej",
  "El piso es la forma dominante, y la propiedad está muy extendida: la proporción de hogares en vivienda propia es de las más altas de Europa, aunque el alquiler crece entre los jóvenes.":
    "Mieszkanie jest formą dominującą, a własność bardzo rozpowszechniona: odsetek gospodarstw we własnym mieszkaniu należy do najwyższych w Europie, choć najem rośnie wśród młodych.",
  "¿Cómo se conoce a la selección española de fútbol?":
    "Jak nazywa się hiszpańska reprezentacja piłkarska?",
  "La Azzurra": "La Azzurra",
  "La Roja": "La Roja",
  "Los Azules": "Los Azules",
  "La Albiceleste": "La Albiceleste",
  "La Roja, por el color de la camiseta. La Azzurra es Italia y la Albiceleste Argentina.":
    "La Roja, od koloru koszulki. La Azzurra to Włochy, a La Albiceleste Argentyna.",
  "¿Cómo se llama la gran vuelta ciclista española?":
    "Jak nazywa się wielki hiszpański wyścig kolarski?",
  "El Giro": "Giro",
  "La Vuelta a España": "Vuelta a España",
  "El Tour": "Tour",
  "La Ronda Ibérica": "Ronda Ibérica",
  "La Vuelta a España, que se corre cada septiembre. El Giro es italiano y se corre en mayo, y el Tour francés en julio.":
    "Vuelta a España, którą jedzie się co roku we wrześniu. Giro jest włoskie i jedzie się je w maju, a Tour francuski w lipcu.",
  "¿Cómo se llama el partido entre los dos grandes clubes de fútbol españoles?":
    "Jak nazywa się mecz między dwoma wielkimi klubami piłkarskimi Hiszpanii?",
  "El derbi": "Derby",
  "El clásico": "El clásico",
  "La final": "Finał",
  "El duelo": "Pojedynek",
  "El clásico. Derbi se reserva para los partidos entre equipos de la misma ciudad, como los dos de Madrid o los dos de Sevilla.":
    "El clásico. Derby zachowuje się dla meczów między drużynami z tego samego miasta, jak dwie madryckie albo dwie sewilskie.",
  "¿Por qué razón principal se independizan tarde los jóvenes españoles?":
    "Z jakiego głównego powodu młodzi Hiszpanie późno się usamodzielniają?",
  "Por tradición familiar": "Z tradycji rodzinnej",
  "Por razones económicas: precios de la vivienda y empleo inestable":
    "Z powodów ekonomicznych: cen mieszkań i niestabilnego zatrudnienia",
  "Porque la ley lo dificulta": "Bo utrudnia to prawo",
  "Porque estudian más años que en otros países": "Bo uczą się więcej lat niż w innych krajach",
  "La edad media de emancipación es de las más altas de Europa, y las encuestas apuntan sobre todo al coste de la vivienda y a la inestabilidad del primer empleo.":
    "Średni wiek usamodzielnienia należy do najwyższych w Europie, a badania wskazują przede wszystkim na koszt mieszkania i na niestabilność pierwszej pracy.",
};
