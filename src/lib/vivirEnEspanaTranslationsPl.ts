/**
 * Polish for the Vivir en Espana course cards, headings and questions.
 *
 * Keyed on the SPANISH source text exactly as it appears in
 * vivirEnEspanaCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * in the course is one nobody can ever see, and nothing reports it at
 * runtime: the card renders, the tap works, and the reader is told there is
 * no translation for a card that was in fact translated. So every key here
 * was extracted from the built module and paired back, never retyped.
 *
 * Covers the QUIZZES as well as the lesson text. A lesson that ends in three
 * untranslated questions is not a lesson somebody can finish.
 *
 * WHAT STAYS SPANISH, and it follows VIVIR_EN_ESPANA_DE and _FR so that a
 * reader who switches between the tables does not meet one word glossed two
 * ways. Institutions keep their Spanish name where the exam asks for it —
 * Cortes Generales, Congreso de los Diputados, Consejo General del Poder
 * Judicial, Defensor del Pueblo, Tribunal Superior de Justicia — and the
 * Polish carries the explanation around them. Where a word is the answer
 * itself and Polish has none of its own — padrón, empadronamiento, NIE, TIE,
 * DNI, RETA, IRPF, Bachillerato, ESO, finiquito, menú del día, tapeo,
 * sobremesa, centro concertado, España vaciada — the Polish gives the meaning
 * and keeps the Spanish word beside it, so the reader learns the term they
 * will actually meet at the counter.
 *
 * Place names take their Polish exonym where Polish has one and uses nothing
 * else — Sewilla, Kadyks, Kordoba, Madryt, Katalonia, Kraj Basków, Nawarra,
 * Baleary, Wyspy Kanaryjskie — while institutions, buildings and terms a
 * reader would look up keep the Spanish: Moncloa, Zarzuela, Meseta Central,
 * Sierra Nevada, Las Fallas, San Fermín.
 */
export const VIVIR_EN_ESPANA_PL: Record<string, string> = {
  "Historia, instituciones y vida diaria: cómo funciona el país.":
    "Historia, instytucje i życie codzienne: jak funkcjonuje ten kraj.",
  "Símbolos nacionales": "Symbole narodowe",
  "Símbolos y Constitución": "Symbole i Konstytucja",
  "Por qué se empieza aquí: los símbolos se ven todos los días — en el ayuntamiento, en el pasaporte, en la camiseta de la selección — y son la puerta más fácil para entrar en todo lo demás.":
    "Dlaczego zaczynamy od tego: symbole widuje się codziennie — na ratuszu, w paszporcie, na koszulce reprezentacji — i są najłatwiejszą bramą do całej reszty.",
  "La bandera": "Flaga",
  "La bandera tiene tres franjas horizontales: **roja, amarilla y roja**. La amarilla es **el doble de ancha** que cada una de las rojas, de modo que ocupa la mitad de la bandera. Lo establece el **artículo 4** de la Constitución.":
    "Flaga ma trzy poziome pasy: **czerwony, żółty i czerwony**. Żółty jest **dwa razy szerszy** niż każdy z czerwonych, więc zajmuje połowę flagi. Ustala to **artykuł 4** Konstytucji.",
  "Su origen es marinero. En **1785 Carlos III** convocó un concurso para dotar a la Armada de un pabellón que se distinguiera en el mar: casi todas las flotas europeas usaban entonces fondos blancos con escudos, y de lejos se confundían. El rojo y el amarillo se ven a mucha distancia. De ahí pasó al ejército y, en el siglo XIX, a bandera nacional.":
    "Jej pochodzenie jest morskie. W **1785 roku Karol III** ogłosił konkurs na banderę dla floty, którą dałoby się rozpoznać na morzu: prawie wszystkie floty europejskie używały wtedy białych pól z herbami i z daleka się myliły. Czerwień i żółć widać z bardzo daleka. Stamtąd przeszła do wojska, a w XIX wieku stała się flagą narodową.",
  "El escudo": "Herb",
  "El escudo es un resumen de historia peninsular. Está **cuartelado**: cada cuartel corresponde a un reino que acabó formando parte de España.":
    "Herb jest streszczeniem historii półwyspu. Jest **czterodzielny**: każde pole odpowiada królestwu, które ostatecznie weszło w skład Hiszpanii.",
  "Castilla y León": "Kastylia i León",
  "El castillo dorado y el león púrpura ocupan los dos primeros cuarteles.":
    "Złoty zamek i purpurowy lew zajmują dwa pierwsze pola.",
  "Aragón y Navarra": "Aragonia i Nawarra",
  "Los cuatro palos rojos de Aragón y las cadenas de Navarra completan el cuartelado.":
    "Cztery czerwone pale Aragonii i łańcuchy Nawarry dopełniają czterodzielnego układu.",
  "Granada": "Granada",
  "La granada al pie recuerda el último reino incorporado, en 1492.":
    "Owoc granatu u dołu przypomina ostatnie przyłączone królestwo, w 1492 roku.",
  "Las columnas": "Kolumny",
  "Las columnas de Hércules, con el lema PLUS ULTRA: más allá, hacia el Atlántico. Antes del descubrimiento el lema era el contrario.":
    "Słupy Herkulesa, z dewizą PLUS ULTRA: dalej, ku Atlantykowi. Przed odkryciem Ameryki dewiza brzmiała odwrotnie.",
  "¿Cómo son las franjas de la bandera española?": "Jakie są pasy hiszpańskiej flagi?",
  "Tres franjas iguales: roja, amarilla y roja": "Trzy równe pasy: czerwony, żółty i czerwony",
  "Roja, amarilla del doble de ancho, y roja": "Czerwony, żółty dwa razy szerszy i czerwony",
  "Dos franjas: roja arriba y amarilla abajo": "Dwa pasy: czerwony u góry i żółty u dołu",
  "Tres franjas verticales": "Trzy pasy pionowe",
  "La amarilla ocupa la mitad de la bandera y cada roja un cuarto. No son tres franjas iguales, y esa proporción está fijada en el artículo 4 de la Constitución.":
    "Żółty zajmuje połowę flagi, a każdy czerwony jedną czwartą. To nie są trzy równe pasy, a ta proporcja jest ustalona w artykule 4 Konstytucji.",
  "El himno": "Hymn",
  "El himno se llama **Marcha Real** y tiene una rareza que lo distingue de casi todos los demás: **no tiene letra**. Se canta con la boca cerrada, o no se canta. Solo otros pocos países en el mundo están en la misma situación.":
    "Hymn nazywa się **Marcha Real** i ma osobliwość, która odróżnia go od niemal wszystkich innych: **nie ma słów**. Śpiewa się go z zamkniętymi ustami albo wcale. Tylko kilka innych krajów świata jest w tej samej sytuacji.",
  "Es además uno de los himnos más antiguos de Europa: aparece documentado ya en **1761** como Marcha Granadera. Se le han puesto letras en varias épocas, pero ninguna ha llegado a ser oficial, y los intentos de darle una han fracasado siempre.":
    "Jest przy tym jednym z najstarszych hymnów Europy: udokumentowany już w **1761 roku** jako Marcha Granadera. Podkładano mu słowa w różnych epokach, ale żadne nie stało się oficjalne, a próby nadania mu tekstu zawsze kończyły się niepowodzeniem.",
  "¿Qué particularidad tiene el himno nacional español?":
    "Jaką osobliwość ma hiszpański hymn narodowy?",
  "Que dura menos de treinta segundos": "Że trwa krócej niż trzydzieści sekund",
  "Que no tiene letra oficial": "Że nie ma oficjalnych słów",
  "Que solo puede interpretarse en actos militares":
    "Że można go wykonywać tylko podczas uroczystości wojskowych",
  "Que se compuso en el siglo XX": "Że skomponowano go w XX wieku",
  "La Marcha Real carece de letra oficial. Se han propuesto varias a lo largo del tiempo y ninguna ha prosperado; es además uno de los himnos más antiguos de Europa, documentado desde 1761.":
    "Marcha Real nie ma oficjalnego tekstu. Proponowano ich kilka na przestrzeni czasu i żaden się nie utrzymał; jest przy tym jednym z najstarszych hymnów Europy, udokumentowanym od 1761 roku.",
  "Las fechas": "Daty",
  "12 de octubre": "12 października",
  "Fiesta Nacional de España. Conmemora la llegada de Colón a América en 1492 y el desfile en Madrid es el acto central.":
    "Fiesta Nacional de España, święto narodowe Hiszpanii. Upamiętnia przybycie Kolumba do Ameryki w 1492 roku, a defilada w Madrycie jest głównym punktem obchodów.",
  "6 de diciembre": "6 grudnia",
  "Día de la Constitución. Se celebra el referéndum de 1978, no la fecha en que entró en vigor.":
    "Dzień Konstytucji. Świętuje się referendum z 1978 roku, a nie datę wejścia w życie.",
  "2 de mayo": "2 maja",
  "Fiesta de la Comunidad de Madrid: el levantamiento de 1808 contra las tropas de Napoleón. Es autonómica, no nacional.":
    "Święto Wspólnoty Madrytu: powstanie z 1808 roku przeciw wojskom Napoleona. Jest autonomiczne, nie narodowe.",
  "La lengua oficial del Estado es el **castellano**, según el artículo 3, que añade que las demás lenguas españolas serán también oficiales en sus comunidades. Es el único artículo de los primeros que habla de lenguas, y en el capítulo cuarto se ve por qué importa tanto.":
    "Językiem urzędowym państwa jest **castellano**, kastylijski, według artykułu 3, który dodaje, że pozostałe języki hiszpańskie będą również urzędowe we własnych wspólnotach. To jedyny z pierwszych artykułów mówiący o językach, a w czwartym rozdziale widać, dlaczego to tak ważne.",
  "¿Qué se celebra el 12 de octubre?": "Co świętuje się 12 października?",
  "El Día de la Constitución": "Dzień Konstytucji",
  "La Fiesta Nacional de España": "Święto narodowe Hiszpanii",
  "El aniversario de la proclamación del rey": "Rocznicę proklamowania króla",
  "El fin de la Guerra Civil": "Koniec wojny domowej",
  "El 12 de octubre es la Fiesta Nacional. El Día de la Constitución es el 6 de diciembre: dos fechas que se confunden con frecuencia porque ambas son festivos nacionales.":
    "12 października to święto narodowe. Dzień Konstytucji przypada 6 grudnia: dwie daty często mylone, bo obie są świętami państwowymi.",
  "Bandera con escudo y bandera sin escudo son las dos correctas. La que llevan los edificios oficiales incluye el escudo; la que se ve en un balcón o en un estadio normalmente no.":
    "Flaga z herbem i flaga bez herbu są obie poprawne. Ta na budynkach urzędowych zawiera herb; ta z balkonu albo ze stadionu zwykle nie.",
  "La Constitución de 1978": "Konstytucja z 1978 roku",
  "Por qué importa: casi todo lo que viene después — el rey, las Cortes, las autonomías, las lenguas — está en un texto de 1978 que se escribió deliberadamente para que nadie ganara del todo. Entender ese punto de partida explica su forma.":
    "Dlaczego to ważne: prawie wszystko, co przyjdzie potem — król, Cortes, wspólnoty autonomiczne, języki — jest w tekście z 1978 roku, napisanym rozmyślnie tak, żeby nikt nie wygrał do końca. Zrozumienie tego punktu wyjścia tłumaczy jego kształt.",
  "Cómo se hizo": "Jak powstała",
  "Tras la muerte de Franco en 1975, las **elecciones de junio de 1977** dieron unas Cortes que asumieron la tarea de escribir una Constitución. La comisión encargó el borrador a **siete diputados** de partidos distintos, a los que se conoce como los **padres de la Constitución**.":
    "Po śmierci Franca w 1975 roku **wybory z czerwca 1977 roku** dały Cortes, które podjęły się napisania konstytucji. Komisja powierzyła projekt **siedmiu deputowanym** z różnych partii, których nazywa się **ojcami Konstytucji**.",
  "El calendario del final del año siguiente conviene tenerlo ordenado: las Cortes aprobaron el texto el **31 de octubre de 1978**, el pueblo lo ratificó en **referéndum el 6 de diciembre**, el rey lo sancionó el **27 de diciembre** y entró en vigor el **29 de diciembre**, el día de su publicación en el Boletín Oficial del Estado.":
    "Kalendarz końca następnego roku warto mieć uporządkowany: Cortes przyjęły tekst **31 października 1978 roku**, naród zatwierdził go w **referendum 6 grudnia**, król sankcjonował go **27 grudnia**, a wszedł w życie **29 grudnia**, w dniu ogłoszenia w Boletín Oficial del Estado.",
  "La palabra que resume el método es **consenso**. El texto se redactó buscando que ninguna fuerza quedara fuera, y esa es la razón de que algunos artículos sean deliberadamente amplios: se acordó la frase precisamente porque admitía más de una lectura.":
    "Słowo, które streszcza metodę, to **consenso**, konsens. Tekst redagowano tak, żeby żadna siła nie została poza nim, i to jest powód, dla którego niektóre artykuły są rozmyślnie szerokie: zgodzono się na zdanie właśnie dlatego, że dopuszczało więcej niż jedno odczytanie.",
  "¿En qué fecha se ratificó la Constitución en referéndum?":
    "W jakiej dacie Konstytucję zatwierdzono w referendum?",
  "El 31 de octubre de 1978": "31 października 1978",
  "El 6 de diciembre de 1978": "6 grudnia 1978",
  "El 27 de diciembre de 1978": "27 grudnia 1978",
  "El 29 de diciembre de 1978": "29 grudnia 1978",
  "Aprobación en las Cortes el 31 de octubre, referéndum el 6 de diciembre, sanción real el 27 y entrada en vigor el 29. El Día de la Constitución celebra el referéndum.":
    "Przyjęcie w Cortes 31 października, referendum 6 grudnia, sankcja królewska 27 i wejście w życie 29. Dzień Konstytucji świętuje referendum.",
  "Cómo está hecha": "Jak jest zbudowana",
  "Tiene **169 artículos**, repartidos en un **título preliminar** y **diez títulos**, más disposiciones adicionales, transitorias, derogatoria y final. Es un texto largo comparado con otras constituciones europeas, y buena parte de esa extensión está en el título dedicado a los derechos.":
    "Ma **169 artykułów**, rozłożonych na **tytuł wstępny** i **dziesięć tytułów**, plus przepisy dodatkowe, przejściowe, uchylający i końcowy. To tekst długi w porównaniu z innymi konstytucjami europejskimi, a spora część tej długości mieści się w tytule poświęconym prawom.",
  "Título preliminar": "Tytuł wstępny",
  "Artículos 1 a 9: qué es España, dónde reside la soberanía, las lenguas, la bandera, la capital.":
    "Artykuły od 1 do 9: czym jest Hiszpania, gdzie mieszka zwierzchnictwo, języki, flaga, stolica.",
  "Título I": "Tytuł I",
  "Artículos 10 a 55: derechos y deberes fundamentales. Es el título más extenso.":
    "Artykuły od 10 do 55: prawa i obowiązki podstawowe. To tytuł najobszerniejszy.",
  "Títulos II a VI": "Tytuły od II do VI",
  "La Corona, las Cortes, el Gobierno y el poder judicial: quién hace qué.":
    "Korona, Cortes, rząd i władza sądownicza: kto co robi.",
  "Título VIII": "Tytuł VIII",
  "La organización territorial del Estado. De aquí nacen las comunidades autónomas.":
    "Ustrój terytorialny państwa. Stąd biorą się wspólnoty autonomiczne.",
  "Los primeros artículos": "Pierwsze artykuły",
  "El **artículo 1** define España como un **Estado social y democrático de Derecho**, sitúa la soberanía en el pueblo español y establece que la **forma política del Estado es la Monarquía parlamentaria**. Las tres afirmaciones están en el mismo artículo y conviene no separarlas: la monarquía es la forma, no el fundamento.":
    "**Artykuł 1** określa Hiszpanię jako **państwo socjalne i demokratyczne państwo prawa**, umieszcza zwierzchnictwo w narodzie hiszpańskim i stanowi, że **formą polityczną państwa jest monarchia parlamentarna**. Wszystkie trzy stwierdzenia stoją w tym samym artykule i lepiej ich nie rozdzielać: monarchia jest formą, a nie fundamentem.",
  "El **artículo 2** contiene la frase más discutida del texto: se fundamenta en la **indisoluble unidad de la Nación española** y a la vez reconoce y garantiza **el derecho a la autonomía de las nacionalidades y regiones** que la integran. Las dos mitades se acordaron juntas, y el capítulo cuarto de este curso explica qué se construyó sobre ellas.":
    "**Artykuł 2** zawiera najbardziej dyskutowane zdanie tekstu: opiera się na **nierozerwalnej jedności narodu hiszpańskiego**, a zarazem uznaje i gwarantuje **prawo do autonomii narodowości i regionów**, które go tworzą. Obie połowy uzgodniono razem, a czwarty rozdział tego kursu tłumaczy, co na nich zbudowano.",
  "¿Qué forma política del Estado establece el artículo 1?":
    "Jaką formę polityczną państwa ustanawia artykuł 1?",
  "La república parlamentaria": "Republikę parlamentarną",
  "La monarquía parlamentaria": "Monarchię parlamentarną",
  "La monarquía absoluta": "Monarchię absolutną",
  "El Estado federal": "Państwo federalne",
  "Monarquía parlamentaria: el rey es jefe del Estado pero no gobierna, y la soberanía reside en el pueblo. El mismo artículo define España como Estado social y democrático de Derecho.":
    "Monarchia parlamentarna: król jest głową państwa, ale nie rządzi, a zwierzchnictwo należy do narodu. Ten sam artykuł określa Hiszpanię jako państwo socjalne i demokratyczne państwo prawa.",
  "Cambiarla es difícil": "Zmienić ją jest trudno",
  "Hay **dos procedimientos**. El **ordinario**, del artículo 167, exige tres quintos de cada cámara. El **agravado**, del artículo 168, se aplica a las partes más protegidas — el título preliminar, los derechos fundamentales de la sección primera y el título de la Corona — y es de una dureza poco común: dos tercios de ambas cámaras, **disolución de las Cortes**, elecciones, ratificación por las nuevas cámaras y **referéndum obligatorio**.":
    "Są **dwa tryby**. **Zwykły**, z artykułu 167, wymaga trzech piątych w każdej izbie. **Zaostrzony**, z artykułu 168, stosuje się do części najlepiej chronionych — tytułu wstępnego, praw podstawowych z sekcji pierwszej i tytułu o Koronie — i jest rzadko spotykanej surowości: dwie trzecie obu izb, **rozwiązanie Cortes**, wybory, potwierdzenie przez nowe izby i **obowiązkowe referendum**.",
  "El resultado se ve en la práctica: la Constitución solo se ha reformado **dos veces** en más de cuarenta años, ambas por el procedimiento ordinario y ambas por exigencias europeas. En **1992** se tocó el artículo 13 para permitir el voto de extranjeros en las municipales tras Maastricht, y en **2011** el artículo 135, sobre estabilidad presupuestaria.":
    "Skutek widać w praktyce: Konstytucję zmieniono tylko **dwa razy** w ciągu ponad czterdziestu lat, oba razy trybem zwykłym i oba razy pod naciskiem wymogów europejskich. W **1992 roku** zmieniono artykuł 13, by po Maastricht dopuścić głos cudzoziemców w wyborach gminnych, a w **2011** artykuł 135, o stabilności budżetowej.",
  "¿Cuántas veces se ha reformado la Constitución española?":
    "Ile razy zmieniano hiszpańską Konstytucję?",
  "Ninguna": "Ani razu",
  "Dos": "Dwa razy",
  "Siete": "Siedem razy",
  "Más de veinte": "Ponad dwadzieścia razy",
  "Dos: en 1992, para permitir el voto de extranjeros en elecciones municipales, y en 2011, sobre estabilidad presupuestaria. Ambas por el procedimiento ordinario del artículo 167.":
    "Dwa: w 1992 roku, żeby dopuścić głos cudzoziemców w wyborach gminnych, i w 2011, o stabilności budżetowej. Oba razy trybem zwykłym z artykułu 167.",
  "El **29 de diciembre** entró en vigor, pero el festivo es el **6 de diciembre**, el del referéndum. Se celebra el día en que la gente votó, no el día en que el texto empezó a regir.":
    "**29 grudnia** weszła w życie, ale dniem wolnym jest **6 grudnia**, dzień referendum. Świętuje się dzień, w którym ludzie głosowali, a nie dzień, w którym tekst zaczął obowiązywać.",
  "Derechos y libertades fundamentales": "Prawa i wolności podstawowe",
  "Por qué importa: el título I no es una lista uniforme. Unos derechos están protegidos con todo el aparato del Estado y otros son principios que orientan la política. Saber en qué grupo cae cada uno es la mitad de entenderlo.":
    "Dlaczego to ważne: tytuł I nie jest jednolitą listą. Jedne prawa są chronione całym aparatem państwa, a inne są zasadami, które kierują polityką. Wiedzieć, do której grupy należy dane prawo, to połowa jego zrozumienia.",
  "Tres niveles de protección": "Trzy poziomy ochrony",
  "La Constitución protege sus derechos con intensidad distinta, y el criterio es dónde está escrito cada uno.":
    "Konstytucja chroni swoje prawa z różnym natężeniem, a kryterium jest to, gdzie każde z nich zapisano.",
  "Artículos 15 a 29": "Artykuły od 15 do 29",
  "Derechos fundamentales y libertades públicas. Máxima protección: ley orgánica, procedimiento judicial preferente y recurso de amparo ante el Tribunal Constitucional.":
    "Prawa podstawowe i wolności publiczne. Ochrona najwyższa: ustawa organiczna, uprzywilejowane postępowanie sądowe i skarga amparo do Trybunału Konstytucyjnego.",
  "Artículos 30 a 38": "Artykuły od 30 do 38",
  "Derechos y deberes de los ciudadanos. Vinculan a los poderes públicos y se regulan por ley, pero sin amparo constitucional.":
    "Prawa i obowiązki obywateli. Wiążą władze publiczne i reguluje je ustawa, ale bez ochrony konstytucyjnej amparo.",
  "Artículos 39 a 52": "Artykuły od 39 do 52",
  "Principios rectores de la política social y económica: vivienda, medio ambiente, tercera edad. Orientan al legislador y solo se alegan ante los tribunales conforme a las leyes que los desarrollen.":
    "Zasady kierunkowe polityki społecznej i gospodarczej: mieszkanie, środowisko, wiek podeszły. Kierują ustawodawcą i przed sądem można się na nie powołać tylko zgodnie z ustawami, które je rozwijają.",
  "El **artículo 14** abre la lista fuera de esa clasificación: los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por nacimiento, raza, sexo, religión, opinión o cualquier otra condición personal o social.":
    "**Artykuł 14** otwiera listę poza tą klasyfikacją: Hiszpanie są równi wobec prawa i nie może przeważyć żadna dyskryminacja z powodu urodzenia, rasy, płci, religii, poglądów ani jakiegokolwiek innego warunku osobistego czy społecznego.",
  "La persona": "Osoba",
  "El **artículo 15** reconoce el derecho a la vida y a la integridad física y moral, prohíbe la tortura y **abole la pena de muerte**, salvo lo que dispusieran las leyes penales militares en tiempo de guerra — excepción que fue suprimida por ley en 1995.":
    "**Artykuł 15** uznaje prawo do życia oraz do nietykalności fizycznej i moralnej, zakazuje tortur i **znosi karę śmierci**, poza tym, co przewidywały wojskowe ustawy karne na czas wojny — wyjątek zniesiony ustawą w 1995 roku.",
  "El **artículo 16** garantiza la libertad ideológica y religiosa, y añade una frase decisiva: **ninguna confesión tendrá carácter estatal**. No es exactamente una separación al modo francés, porque el mismo artículo obliga a los poderes públicos a mantener relaciones de cooperación con la Iglesia católica y las demás confesiones. Es una aconfesionalidad con cooperación.":
    "**Artykuł 16** gwarantuje wolność światopoglądową i religijną i dodaje zdanie rozstrzygające: **żadne wyznanie nie będzie miało charakteru państwowego**. To nie jest ściśle rozdział na sposób francuski, bo ten sam artykuł zobowiązuje władze publiczne do utrzymywania stosunków współpracy z Kościołem katolickim i pozostałymi wyznaniami. To bezwyznaniowość ze współpracą.",
  "El **artículo 17** protege la libertad personal: la **detención preventiva** no puede durar más de **setenta y dos horas**, pasadas las cuales el detenido debe ser puesto en libertad o a disposición judicial. El mismo artículo prevé el **habeas corpus**, el procedimiento para llevar de inmediato ante un juez a quien esté detenido ilegalmente.":
    "**Artykuł 17** chroni wolność osobistą: **zatrzymanie prewencyjne** nie może trwać dłużej niż **siedemdziesiąt dwie godziny**, po których zatrzymanego trzeba zwolnić albo przekazać do dyspozycji sądu. Ten sam artykuł przewiduje **habeas corpus**, procedurę natychmiastowego postawienia przed sędzią osoby zatrzymanej bezprawnie.",
  "¿Cuál es la duración máxima de una detención preventiva?":
    "Jak długo najdłużej może trwać zatrzymanie prewencyjne?",
  "Veinticuatro horas": "Dwadzieścia cztery godziny",
  "Cuarenta y ocho horas": "Czterdzieści osiem godzin",
  "Setenta y dos horas": "Siedemdziesiąt dwie godziny",
  "Cinco días": "Pięć dni",
  "Setenta y dos horas, según el artículo 17. Cumplido el plazo, el detenido debe quedar en libertad o pasar a disposición judicial; el habeas corpus sirve para forzarlo si no ocurre.":
    "Siedemdziesiąt dwie godziny, według artykułu 17. Po upływie terminu zatrzymany musi zostać zwolniony albo przekazany do dyspozycji sądu; habeas corpus służy do wymuszenia tego, jeśli tak się nie stanie.",
  "La vida en común": "Życie wspólne",
  "El **artículo 18** protege el honor, la intimidad y la propia imagen, declara **inviolable el domicilio** — no se entra sin consentimiento o resolución judicial, salvo delito flagrante — y garantiza el secreto de las comunicaciones. El **artículo 20** reconoce la libertad de expresión y el derecho a comunicar y recibir información veraz, y prohíbe la censura previa.":
    "**Artykuł 18** chroni cześć, prywatność i własny wizerunek, ogłasza **mir domowy nienaruszalnym** — nie wchodzi się bez zgody albo postanowienia sądu, poza przypadkiem gorącego uczynku — i gwarantuje tajemnicę korespondencji. **Artykuł 20** uznaje wolność wypowiedzi oraz prawo do przekazywania i otrzymywania prawdziwej informacji, a zakazuje cenzury uprzedniej.",
  "Los **artículos 21 y 22** amparan la reunión y la asociación: para reunirse en lugares de tránsito público basta comunicarlo a la autoridad, no pedir permiso. El **artículo 23** reconoce el derecho a participar en los asuntos públicos y a acceder en condiciones de igualdad a las funciones y cargos públicos.":
    "**Artykuły 21 i 22** chronią zgromadzenia i zrzeszanie się: żeby zebrać się w miejscu publicznego ruchu, wystarczy zawiadomić władzę, nie trzeba prosić o pozwolenie. **Artykuł 23** uznaje prawo do udziału w sprawach publicznych i do równego dostępu do funkcji i urzędów publicznych.",
  "¿Qué establece la Constitución sobre la religión del Estado?":
    "Co Konstytucja stanowi o religii państwa?",
  "Que la religión católica es la oficial": "Że religia katolicka jest oficjalna",
  "Que ninguna confesión tendrá carácter estatal":
    "Że żadne wyznanie nie będzie miało charakteru państwowego",
  "Que se prohíbe toda relación entre Estado y confesiones":
    "Że zakazuje się wszelkich relacji między państwem a wyznaniami",
  "Que cada comunidad autónoma decide su confesión":
    "Że każda wspólnota autonomiczna wybiera swoje wyznanie",
  "El artículo 16 dice que ninguna confesión tendrá carácter estatal, y a la vez obliga a mantener relaciones de cooperación con la Iglesia católica y las demás. Es aconfesionalidad, no separación estricta.":
    "Artykuł 16 mówi, że żadne wyznanie nie będzie miało charakteru państwowego, a zarazem zobowiązuje do utrzymywania stosunków współpracy z Kościołem katolickim i pozostałymi. To bezwyznaniowość, a nie ścisły rozdział.",
  "Ante la justicia": "Przed wymiarem sprawiedliwości",
  "El **artículo 24** reconoce la **tutela judicial efectiva**: derecho al juez ordinario predeterminado por la ley, a la defensa y a la asistencia de letrado, a un proceso público sin dilaciones indebidas y a la **presunción de inocencia**. El **artículo 25** añade que las penas privativas de libertad se orientarán a la reeducación y reinserción social.":
    "**Artykuł 24** uznaje **skuteczną ochronę sądową**: prawo do sędziego ustalonego uprzednio przez ustawę, do obrony i do pomocy adwokata, do jawnego procesu bez nieuzasadnionej zwłoki oraz do **domniemania niewinności**. **Artykuł 25** dodaje, że kary pozbawienia wolności mają zmierzać do przewychowania i powrotu do społeczeństwa.",
  "Cuando uno de los derechos de los artículos 14 a 29 se vulnera y los tribunales ordinarios no lo reparan, queda el **recurso de amparo** ante el **Tribunal Constitucional**. Es la última puerta interna, y solo se abre para ese grupo de derechos.":
    "Kiedy narusza się jedno z praw z artykułów od 14 do 29, a sądy powszechne tego nie naprawiają, zostaje **recurso de amparo**, skarga do **Trybunału Konstytucyjnego**. To ostatnie krajowe drzwi i otwierają się tylko dla tej grupy praw.",
  "¿Ante qué órgano se interpone el recurso de amparo?":
    "Do jakiego organu wnosi się recurso de amparo?",
  "Ante el Tribunal Supremo": "Do Sądu Najwyższego",
  "Ante el Tribunal Constitucional": "Do Trybunału Konstytucyjnego",
  "Ante el Defensor del Pueblo": "Do Rzecznika Praw Obywatelskich",
  "Ante el Consejo General del Poder Judicial": "Do Naczelnej Rady Sądownictwa",
  "El amparo se interpone ante el Tribunal Constitucional y solo protege los derechos de los artículos 14 a 29. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria, que es otra cosa.":
    "Amparo wnosi się do Trybunału Konstytucyjnego i chroni tylko prawa z artykułów od 14 do 29. Sąd Najwyższy stoi na szczycie sądownictwa powszechnego, a to co innego.",
  "El derecho a una **vivienda digna** está en el artículo 47, entre los principios rectores. Es un mandato al legislador, no un derecho que pueda reclamarse directamente ante un juez como la libertad de expresión.":
    "Prawo do **godnego mieszkania** stoi w artykule 47, wśród zasad kierunkowych. To nakaz dla ustawodawcy, a nie prawo, którego można dochodzić wprost przed sędzią, jak wolności wypowiedzi.",
  "Deberes de los ciudadanos y la nacionalidad": "Obowiązki obywateli i obywatelstwo",
  "Por qué importa: la Constitución no solo reparte derechos. Impone cuatro deberes, y uno de ellos se cumple todos los años. Y define quién es español, que es la puerta por la que se entra a todo lo demás.":
    "Dlaczego to ważne: Konstytucja nie tylko rozdaje prawa. Nakłada cztery obowiązki, a jeden z nich wypełnia się co roku. I określa, kto jest Hiszpanem — to brama, przez którą wchodzi się do całej reszty.",
  "Los deberes": "Obowiązki",
  "El **artículo 30** establece el derecho y el deber de **defender a España**. La ley regulaba con él el servicio militar obligatorio, que quedó **suspendido en 2001**: desde entonces las Fuerzas Armadas son enteramente profesionales. El mismo artículo prevé la objeción de conciencia y, para casos de grave riesgo, deberes de protección civil.":
    "**Artykuł 30** ustanawia prawo i obowiązek **obrony Hiszpanii**. Ustawa regulowała na jego podstawie obowiązkową służbę wojskową, **zawieszoną w 2001 roku**: od tego czasu siły zbrojne są w całości zawodowe. Ten sam artykuł przewiduje sprzeciw sumienia oraz, na wypadek poważnego zagrożenia, obowiązki obrony cywilnej.",
  "El **artículo 31** es el deber que se cumple cada año: todos contribuirán al sostenimiento de los gastos públicos **de acuerdo con su capacidad económica**, mediante un sistema tributario **justo**, inspirado en los principios de **igualdad y progresividad**, y que en ningún caso tendrá alcance **confiscatorio**. Progresividad significa que quien más gana no paga solo más dinero, sino un porcentaje mayor.":
    "**Artykuł 31** to obowiązek wypełniany co roku: wszyscy będą się przyczyniać do pokrywania wydatków publicznych **stosownie do swojej zdolności ekonomicznej**, przez **sprawiedliwy** system podatkowy, oparty na zasadach **równości i progresywności**, który w żadnym razie nie będzie miał **charakteru konfiskaty**. Progresywność znaczy, że kto więcej zarabia, płaci nie tylko więcej pieniędzy, ale większy procent.",
  "Defender a España · art. 30": "Obrona Hiszpanii · art. 30",
  "Derecho y deber. El servicio militar obligatorio está suspendido desde 2001.":
    "Prawo i obowiązek. Obowiązkowa służba wojskowa jest zawieszona od 2001 roku.",
  "Contribuir · art. 31": "Przyczynianie się · art. 31",
  "Según la capacidad económica, con un sistema progresivo y no confiscatorio.":
    "Według zdolności ekonomicznej, w systemie progresywnym i niekonfiskacyjnym.",
  "Trabajar · art. 35": "Praca · art. 35",
  "Deber y derecho al trabajo, a la libre elección de profesión y a una remuneración suficiente.":
    "Obowiązek i prawo do pracy, do swobodnego wyboru zawodu i do wystarczającego wynagrodzenia.",
  "La enseñanza básica · art. 27": "Nauczanie podstawowe · art. 27",
  "Es obligatoria y gratuita. El deber recae sobre quien tiene la patria potestad.":
    "Jest obowiązkowe i bezpłatne. Obowiązek spoczywa na tym, kto ma władzę rodzicielską.",
  "¿Qué significa que el sistema tributario es progresivo?":
    "Co znaczy, że system podatkowy jest progresywny?",
  "Que los impuestos suben cada año": "Że podatki rosną co roku",
  "Que quien tiene más renta paga un porcentaje mayor":
    "Że kto ma wyższy dochód, płaci większy procent",
  "Que todos pagan el mismo porcentaje": "Że wszyscy płacą ten sam procent",
  "Que se puede pagar a plazos": "Że można płacić w ratach",
  "La progresividad del artículo 31 se refiere al porcentaje, no solo al importe. Un impuesto que cobrara a todos el mismo porcentaje sería proporcional, no progresivo.":
    "Progresywność z artykułu 31 dotyczy procentu, a nie tylko kwoty. Podatek pobierający od wszystkich ten sam procent byłby proporcjonalny, nie progresywny.",
  "Quién es español": "Kto jest Hiszpanem",
  "El **artículo 11** remite a la ley, y esa ley es el **Código Civil**. La regla principal es la de la **sangre**: es español de origen quien nace de padre o madre españoles, con independencia del lugar de nacimiento. Nacer en territorio español no basta por sí solo, aunque hay reglas que evitan que un niño quede sin nacionalidad alguna.":
    "**Artykuł 11** odsyła do ustawy, a tą ustawą jest **Kodeks cywilny**. Zasadą główną jest zasada **krwi**: Hiszpanem z urodzenia jest ten, kto rodzi się z ojca albo matki Hiszpanów, niezależnie od miejsca urodzenia. Urodzenie na terytorium Hiszpanii samo w sobie nie wystarcza, choć istnieją reguły, które zapobiegają temu, by dziecko zostało bez żadnego obywatelstwa.",
  "El mismo artículo prohíbe privar de la nacionalidad a los españoles de origen y permite tratados de **doble nacionalidad** con los países iberoamericanos y con aquellos que hayan tenido o tengan una vinculación particular con España.":
    "Ten sam artykuł zakazuje pozbawiania obywatelstwa Hiszpanów z urodzenia i dopuszcza umowy o **podwójnym obywatelstwie** z krajami iberoamerykańskimi oraz z tymi, które miały albo mają szczególny związek z Hiszpanią.",
  "La nacionalidad por residencia": "Obywatelstwo przez zamieszkanie",
  "El plazo general es de **diez años** de residencia legal, continuada e inmediatamente anterior a la solicitud. Hay plazos abreviados, y responden a la historia de España más que a un criterio administrativo.":
    "Termin ogólny to **dziesięć lat** legalnego, nieprzerwanego pobytu bezpośrednio przed złożeniem wniosku. Istnieją terminy skrócone i odpowiadają one historii Hiszpanii bardziej niż kryterium administracyjnemu.",
  "Diez años": "Dziesięć lat",
  "El plazo general, para quien no encaja en ninguna de las categorías siguientes.":
    "Termin ogólny, dla kogoś, kto nie mieści się w żadnej z poniższych kategorii.",
  "Cinco años": "Pięć lat",
  "Para quienes hayan obtenido la condición de refugiado.":
    "Dla tych, którzy uzyskali status uchodźcy.",
  "Dos años": "Dwa lata",
  "Para nacionales de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial y Portugal, y para los sefardíes.":
    "Dla obywateli krajów iberoamerykańskich, Andory, Filipin, Gwinei Równikowej i Portugalii oraz dla Sefardyjczyków.",
  "Un año": "Rok",
  "Entre otros supuestos, para quien nació en territorio español, o lleva un año casado con española o español y no está separado.":
    "Między innymi dla tego, kto urodził się na terytorium Hiszpanii albo od roku jest w małżeństwie z Hiszpanką lub Hiszpanem i nie pozostaje w separacji.",
  "Además de la residencia se exigen **buena conducta cívica** y un **suficiente grado de integración**, que se acredita con dos pruebas del Instituto Cervantes: la de **lengua DELE A2** y la **CCSE**, de conocimientos constitucionales y socioculturales. Quien procede de un país donde el español es lengua oficial queda exento de la primera.":
    "Poza pobytem wymaga się **dobrego zachowania obywatelskiego** i **wystarczającego stopnia integracji**, który potwierdza się dwoma egzaminami Instituto Cervantes: językowym **DELE A2** i **CCSE**, z wiedzy konstytucyjnej i społeczno-kulturowej. Kto pochodzi z kraju, gdzie hiszpański jest językiem urzędowym, jest zwolniony z pierwszego.",
  "¿Cuántos años de residencia se exigen con carácter general para pedir la nacionalidad?":
    "Ilu lat pobytu wymaga się co do zasady, żeby wystąpić o obywatelstwo?",
  "Cinco": "Pięciu",
  "Diez": "Dziesięciu",
  "Quince": "Piętnastu",
  "Diez años de residencia legal y continuada. Cinco corresponde a los refugiados y dos a los nacionales de países iberoamericanos y a otros supuestos con vínculo histórico con España.":
    "Dziesięciu lat legalnego, nieprzerwanego pobytu. Pięć dotyczy uchodźców, a dwa obywateli krajów iberoamerykańskich i innych przypadków o historycznym związku z Hiszpanią.",
  "¿Qué plazo de residencia se aplica a los nacionales de países iberoamericanos?":
    "Jaki termin pobytu stosuje się do obywateli krajów iberoamerykańskich?",
  "El mismo plazo general de diez años": "Ten sam termin ogólny dziesięciu lat",
  "Dos años, igual que para Andorra, Filipinas, Guinea Ecuatorial, Portugal y los sefardíes. El plazo de un año se reserva a supuestos como haber nacido en España o llevar un año casado con una persona española.":
    "Dwa lata, tak samo jak dla Andory, Filipin, Gwinei Równikowej, Portugalii i Sefardyjczyków. Termin roczny jest zastrzeżony dla przypadków takich jak urodzenie się w Hiszpanii albo roczne małżeństwo z osobą hiszpańską.",
  "La **mayoría de edad** en España son los **dieciocho años**, y con ella llegan el voto y la plena capacidad de obrar. El **DNI** es obligatorio a partir de los catorce.":
    "**Pełnoletność** w Hiszpanii to **osiemnaście lat** i przychodzą z nią prawo głosu oraz pełna zdolność do czynności prawnych. **DNI**, dowód osobisty, jest obowiązkowy od czternastego roku życia.",
  "Fiestas y calendario": "Święta i kalendarz",
  "Por qué importa: el calendario laboral español tiene tres capas — el Estado, la comunidad y el municipio — y por eso dos ciudades vecinas pueden trabajar en días distintos. Entender las capas evita más de un viaje en balde.":
    "Dlaczego to ważne: hiszpański kalendarz pracy ma trzy warstwy — państwo, wspólnotę i gminę — i dlatego dwa sąsiednie miasta mogą pracować w różne dni. Zrozumienie tych warstw oszczędza niejednej podróży na darmo.",
  "Catorce días": "Czternaście dni",
  "El calendario laboral tiene **catorce festivos** al año. **Doce** los fija el Estado o la comunidad autónoma, y **dos son locales**, decididos por cada ayuntamiento: el día del patrón, la fiesta mayor, la feria del pueblo.":
    "Kalendarz pracy ma **czternaście dni wolnych** w roku. **Dwanaście** wyznacza państwo albo wspólnota autonomiczna, a **dwa są lokalne**, wybierane przez każdą gminę: dzień patrona, główny odpust, doroczny jarmark.",
  "De ahí que un festivo pueda no serlo a treinta kilómetros. Las comunidades pueden además sustituir algunos festivos nacionales por otros propios, de modo que ni siquiera la lista estatal se aplica igual en todas partes.":
    "Stąd dzień wolny może nim nie być trzydzieści kilometrów dalej. Wspólnoty mogą ponadto zastąpić niektóre święta krajowe własnymi, więc nawet lista państwowa nie stosuje się wszędzie tak samo.",
  "Fijos en todo el país": "Stałe w całym kraju",
  "1 de enero, 1 de mayo, 12 de octubre, 1 de noviembre, 6 y 8 de diciembre, y 25 de diciembre.":
    "1 stycznia, 1 maja, 12 października, 1 listopada, 6 i 8 grudnia oraz 25 grudnia.",
  "Semana Santa": "Wielki Tydzień",
  "El Viernes Santo es festivo en toda España. El Jueves Santo lo es en la mayoría de las comunidades, pero no en todas.":
    "Wielki Piątek jest wolny w całej Hiszpanii. Wielki Czwartek jest nim w większości wspólnot, ale nie we wszystkich.",
  "Días de la comunidad": "Dni wspólnot",
  "El 11 de septiembre en Cataluña, el 25 de julio en Galicia, el 9 de octubre en la Comunidad Valenciana, el 28 de febrero en Andalucía.":
    "11 września w Katalonii, 25 lipca w Galicji, 9 października we Wspólnocie Walenckiej, 28 lutego w Andaluzji.",
  "Los dos locales": "Dwa lokalne",
  "Los elige el ayuntamiento. Suelen coincidir con el patrón o con la fiesta grande del municipio.":
    "Wybiera je rada gminy. Zwykle wypadają w dzień patrona albo w największe święto miejscowości.",
  "¿Cuántos días festivos tiene el calendario laboral español?":
    "Ile dni wolnych ma hiszpański kalendarz pracy?",
  "Doce": "Dwanaście",
  "Catorce": "Czternaście",
  "Dieciséis": "Szesnaście",
  "Catorce: doce estatales o autonómicos y dos locales fijados por el ayuntamiento. Por eso dos municipios vecinos pueden tener días libres distintos.":
    "Czternaście: dwanaście państwowych albo wspólnotowych i dwa lokalne wyznaczone przez radę gminy. Dlatego dwie sąsiednie gminy mogą mieć różne dni wolne.",
  "El invierno": "Zima",
  "La **Nochevieja** tiene un rito muy preciso: al sonar las doce campanadas se comen **doce uvas**, una por campanada. Quien las termina a tiempo tendrá un buen año. La costumbre se difundió a comienzos del siglo XX y hoy se retransmite en directo desde la Puerta del Sol de Madrid.":
    "**Sylwester** ma bardzo precyzyjny obrzęd: przy dwunastu uderzeniach zegara zjada się **dwanaście winogron**, po jednym na uderzenie. Kto zdąży, będzie miał dobry rok. Zwyczaj rozpowszechnił się na początku XX wieku, a dziś transmituje się go na żywo z Puerta del Sol w Madrycie.",
  "Los regalos de invierno no llegan el 25 de diciembre sino el **6 de enero**, con los **Reyes Magos**. La tarde del día 5 se celebran las cabalgatas, y en Nochebuena y Navidad las familias se reúnen a comer. En muchas casas conviven ya ambas fechas, pero la de los Reyes sigue siendo la principal para los niños.":
    "Zimowe prezenty przychodzą nie 25 grudnia, lecz **6 stycznia**, z **Trzema Królami**. Wieczorem 5 odbywają się orszaki, a w Wigilię i Boże Narodzenie rodziny zbierają się przy stole. W wielu domach obie daty już współistnieją, ale dla dzieci główną wciąż pozostaje ta królewska.",
  "¿Qué se hace tradicionalmente en Nochevieja al sonar las campanadas?":
    "Co robi się tradycyjnie w sylwestra przy uderzeniach zegara?",
  "Se comen doce uvas, una por campanada":
    "Zjada się dwanaście winogron, po jednym na uderzenie",
  "Se encienden doce velas": "Zapala się dwanaście świec",
  "Se reparten doce monedas": "Rozdaje się dwanaście monet",
  "Se cantan doce coplas": "Śpiewa się dwanaście przyśpiewek",
  "Una uva por campanada, doce en total. La costumbre se extendió a principios del siglo XX y se retransmite cada año desde la Puerta del Sol.":
    "Jedno winogrono na uderzenie, dwanaście razem. Zwyczaj rozszerzył się na początku XX wieku i co roku jest transmitowany z Puerta del Sol.",
  "Las fiestas populares": "Święta ludowe",
  "Junto al calendario oficial está el de las fiestas que dan fama a las ciudades, y que en muchos casos duran una semana entera.":
    "Obok kalendarza urzędowego jest kalendarz świąt, które rozsławiają miasta, a w wielu przypadkach trwają cały tydzień.",
  "Las Fallas": "Las Fallas",
  "En Valencia, en marzo. Se levantan monumentos de cartón y madera por toda la ciudad y la noche del 19 se queman.":
    "W Walencji, w marcu. Po całym mieście stawia się figury z tektury i drewna, a w nocy 19 się je pali.",
  "La Feria de Abril": "Feria de Abril",
  "En Sevilla, con casetas, caballos y trajes de flamenca, dos semanas después de Semana Santa.":
    "W Sewilli, z namiotami, końmi i strojami flamenco, dwa tygodnie po Wielkim Tygodniu.",
  "San Fermín": "San Fermín",
  "En Pamplona, del 6 al 14 de julio. Los encierros de la mañana son su imagen más conocida.":
    "W Pampelunie, od 6 do 14 lipca. Poranne gonitwy z bykami są jego najbardziej znanym obrazem.",
  "El Carnaval": "Karnawał",
  "El de Santa Cruz de Tenerife y el de Cádiz son los mayores; el gaditano se recuerda sobre todo por sus chirigotas.":
    "Ten w Santa Cruz de Tenerife i ten w Kadyksie są największe; kadyksański pamięta się przede wszystkim z chirigot.",
  "¿En qué ciudad se celebran las Fallas?": "W którym mieście obchodzi się Las Fallas?",
  "En Sevilla": "W Sewilli",
  "En Pamplona": "W Pampelunie",
  "En Valencia": "W Walencji",
  "En Cádiz": "W Kadyksie",
  "Las Fallas son de Valencia y se queman en marzo. Sevilla tiene la Feria de Abril, Pamplona los San Fermines y Cádiz uno de los dos grandes carnavales.":
    "Las Fallas są z Walencji i pali się je w marcu. Sewilla ma Feria de Abril, Pampeluna San Fermines, a Kadyks jeden z dwóch wielkich karnawałów.",
  "Cuando un festivo cae en martes o jueves, muchos hacen **puente** y libran también el lunes o el viernes. Si caen dos cerca, se llama **acueducto**: no es una figura legal, pero explica por qué en esas semanas media España está cerrada.":
    "Kiedy dzień wolny wypada we wtorek albo w czwartek, wielu robi **puente**, most, i bierze wolne także w poniedziałek albo piątek. Jeśli dwa wypadną blisko siebie, mówi się **acueducto**, akwedukt: to nie jest figura prawna, ale tłumaczy, dlaczego w takich tygodniach pół Hiszpanii jest zamknięte.",
  "La Corona": "Korona",
  "Las instituciones del Estado": "Instytucje państwa",
  "Por qué importa: España tiene un rey y no lo gobierna nadie desde el trono. Entender qué hace exactamente el jefe del Estado — y qué no hace — es la primera pieza del sistema.":
    "Dlaczego to ważne: Hiszpania ma króla i nikt z tronu nie rządzi. Zrozumienie, co dokładnie robi głowa państwa — i czego nie robi — to pierwszy element systemu.",
  "Qué es el rey": "Czym jest król",
  "El **artículo 56** define al rey como **jefe del Estado**, **símbolo de su unidad y permanencia**, y le encarga **arbitrar y moderar** el funcionamiento regular de las instituciones. Ninguna de esas palabras significa gobernar: quien dirige la política es el Gobierno, y quien hace las leyes son las Cortes.":
    "**Artykuł 56** określa króla jako **głowę państwa**, **symbol jego jedności i trwałości**, i powierza mu **rozjemstwo i moderowanie** regularnego działania instytucji. Żadne z tych słów nie znaczy rządzić: polityką kieruje rząd, a ustawy stanowią Cortes.",
  "La persona del rey es **inviolable** y **no está sujeta a responsabilidad**. Eso solo se sostiene por una razón: sus actos los firma siempre otro, y ese otro responde.":
    "Osoba króla jest **nietykalna** i **nie podlega odpowiedzialności**. Utrzymuje się to tylko z jednego powodu: jego akty zawsze podpisuje ktoś jeszcze, i to ten ktoś odpowiada.",
  "El refrendo": "Kontrasygnata",
  "El **artículo 64** establece que los actos del rey serán **refrendados**, es decir, firmados también por quien asume su responsabilidad política: el **presidente del Gobierno**, el ministro competente, o el **presidente del Congreso** cuando se trata de proponer y nombrar al presidente del Gobierno o de disolver las Cortes. Un acto del rey sin refrendo carece de validez.":
    "**Artykuł 64** stanowi, że akty króla będą **kontrasygnowane**, czyli podpisane także przez tego, kto bierze za nie odpowiedzialność polityczną: **prezesa rządu**, właściwego ministra albo **przewodniczącego Kongresu**, gdy chodzi o zaproponowanie i mianowanie prezesa rządu albo o rozwiązanie Cortes. Akt króla bez kontrasygnaty jest nieważny.",
  "Es el mecanismo que hace compatibles dos cosas que parecen incompatibles: un jefe del Estado que no responde de nada, y un sistema en el que todo acto tiene un responsable.":
    "To mechanizm godzący dwie rzeczy, które wydają się nie do pogodzenia: głowę państwa, która za nic nie odpowiada, i system, w którym każdy akt ma swojego odpowiedzialnego.",
  "¿Qué significa que un acto del rey está refrendado?":
    "Co znaczy, że akt króla jest kontrasygnowany?",
  "Que ha sido aprobado por referéndum": "Że zatwierdzono go w referendum",
  "Que lo firma también quien asume su responsabilidad política":
    "Że podpisuje go także ten, kto bierze za niego odpowiedzialność polityczną",
  "Que lo ha revisado el Tribunal Constitucional": "Że przejrzał go Trybunał Konstytucyjny",
  "Que se publica en el Boletín Oficial del Estado":
    "Że ogłasza się go w Boletín Oficial del Estado",
  "El refrendo es la firma del presidente del Gobierno, del ministro competente o del presidente del Congreso. Sin ella el acto no vale, y es lo que permite que el rey sea irresponsable sin que nadie lo sea.":
    "Kontrasygnata to podpis prezesa rządu, właściwego ministra albo przewodniczącego Kongresu. Bez niej akt jest nieważny, i to ona pozwala, by król nie odpowiadał, a mimo to ktoś odpowiadał.",
  "Qué hace": "Co robi",
  "Sancionar y promulgar": "Sankcjonuje i promulguje",
  "Firma las leyes aprobadas por las Cortes en el plazo de quince días. No puede negarse: es un acto debido.":
    "Podpisuje ustawy uchwalone przez Cortes w terminie piętnastu dni. Nie może odmówić: to akt należny.",
  "Proponer candidato": "Proponuje kandydata",
  "Tras consultar a los grupos políticos, propone al Congreso un candidato a presidente del Gobierno.":
    "Po konsultacjach z klubami politycznymi proponuje Kongresowi kandydata na prezesa rządu.",
  "Convocar y disolver": "Zwołuje i rozwiązuje",
  "Convoca y disuelve las Cortes y convoca elecciones, siempre en los términos previstos en la Constitución.":
    "Zwołuje i rozwiązuje Cortes oraz zarządza wybory, zawsze na warunkach przewidzianych w Konstytucji.",
  "Mando supremo": "Najwyższe zwierzchnictwo",
  "Tiene el mando supremo de las Fuerzas Armadas, que dirige en la práctica el Gobierno.":
    "Sprawuje najwyższe zwierzchnictwo nad siłami zbrojnymi, którymi w praktyce kieruje rząd.",
  "Ejerce además el **derecho de gracia**, es decir, los **indultos** individuales, con arreglo a la ley — que **prohíbe los indultos generales** — y acredita a los embajadores. Al ser proclamado, presta juramento de guardar y hacer guardar la Constitución ante las Cortes reunidas.":
    "Wykonuje ponadto **prawo łaski**, czyli indywidualne **ułaskawienia**, zgodnie z ustawą — która **zakazuje ułaskawień zbiorowych** — i akredytuje ambasadorów. Przy proklamowaniu składa przed zebranymi Cortes przysięgę, że będzie strzegł Konstytucji i dbał o jej przestrzeganie.",
  "La sucesión": "Następstwo tronu",
  "La corona se hereda en los sucesores de **Juan Carlos I**, según el orden del **artículo 57**: primogenitura y representación, prefiriendo la línea anterior a la posterior, el grado más próximo al más remoto y, **en el mismo grado, el varón a la mujer**. Esa última regla es la única preferencia por sexo que queda en el texto constitucional, y para cambiarla haría falta el procedimiento agravado del artículo 168.":
    "Koronę dziedziczą następcy **Juana Carlosa I**, według porządku z **artykułu 57**: pierworództwo i reprezentacja, z pierwszeństwem linii wcześniejszej przed późniejszą, stopnia bliższego przed dalszym oraz — **w tym samym stopniu, mężczyzny przed kobietą**. Ta ostatnia reguła jest jedynym pierwszeństwem ze względu na płeć, jakie zostało w tekście konstytucji, a do jej zmiany trzeba by trybu zaostrzonego z artykułu 168.",
  "El heredero lleva el título de **Príncipe o Princesa de Asturias**. **Juan Carlos I** fue proclamado rey en **1975** y **abdicó en 2014**; **Felipe VI** fue proclamado el **19 de junio de 2014** ante las Cortes.":
    "Następca nosi tytuł **Księcia albo Księżnej Asturii**. **Juan Carlos I** został proklamowany królem w **1975 roku** i **abdykował w 2014**; **Filip VI** został proklamowany **19 czerwca 2014 roku** przed Cortes.",
  "¿Qué título recibe el heredero o la heredera de la Corona?":
    "Jaki tytuł otrzymuje następca albo następczyni tronu?",
  "Duque de Borgoña": "Księcia Burgundii",
  "Príncipe o Princesa de Asturias": "Księcia albo Księżnej Asturii",
  "Infante de España": "Infanta Hiszpanii",
  "Delfín de la Corona": "Delfina Korony",
  "Príncipe o Princesa de Asturias, junto con otros títulos históricos. Infante o infanta es el tratamiento de los demás hijos del rey.":
    "Księcia albo Księżnej Asturii, obok innych tytułów historycznych. Infant albo infantka to tytulatura pozostałych dzieci króla.",
  "¿Puede el rey negarse a firmar una ley aprobada por las Cortes?":
    "Czy król może odmówić podpisania ustawy uchwalonej przez Cortes?",
  "Sí, tiene derecho de veto": "Tak, ma prawo weta",
  "No: la sanción es un acto debido": "Nie: sankcja jest aktem należnym",
  "Solo si la ley afecta a la Corona": "Tylko jeśli ustawa dotyczy Korony",
  "Solo con el acuerdo del Tribunal Constitucional": "Tylko za zgodą Trybunału Konstytucyjnego",
  "Sanciona y promulga en el plazo de quince días, sin margen para negarse. La monarquía parlamentaria española no conserva ningún veto real.":
    "Sankcjonuje i promulguje w terminie piętnastu dni, bez marginesu na odmowę. Hiszpańska monarchia parlamentarna nie zachowuje żadnego weta królewskiego.",
  "La preferencia del **varón sobre la mujer** en el mismo grado sigue en el artículo 57 y solo podría suprimirse por el procedimiento agravado del artículo 168, el que obliga a disolver las Cortes y convocar un referéndum. No es una omisión: es la parte más difícil de reformar.":
    "Pierwszeństwo **mężczyzny przed kobietą** w tym samym stopniu wciąż stoi w artykule 57 i można by je usunąć tylko trybem zaostrzonym z artykułu 168, tym, który nakazuje rozwiązać Cortes i rozpisać referendum. To nie przeoczenie: to najtrudniejsza do zmiany część tekstu.",
  "Las Cortes Generales": "Cortes Generales",
  "Por qué importa: España tiene dos cámaras, pero no pesan lo mismo. Saber cuál manda cuando discrepan explica buena parte de cómo se aprueban aquí las leyes.":
    "Dlaczego to ważne: Hiszpania ma dwie izby, ale nie ważą tyle samo. Wiedzieć, która przeważa, gdy się różnią, tłumaczy sporą część tego, jak uchwala się tu ustawy.",
  "Dos cámaras desiguales": "Dwie nierówne izby",
  "Las Cortes Generales, dice el **artículo 66**, representan al pueblo español y están formadas por el **Congreso de los Diputados** y el **Senado**. Ejercen la potestad legislativa, aprueban los **presupuestos** y **controlan** la acción del Gobierno.":
    "Cortes Generales, mówi **artykuł 66**, reprezentują naród hiszpański i składają się z **Congreso de los Diputados** i **Senado**. Sprawują władzę ustawodawczą, uchwalają **budżet** i **kontrolują** działanie rządu.",
  "El bicameralismo español es **imperfecto**, y la palabra es técnica, no despectiva: las dos cámaras no tienen el mismo peso. El **Congreso predomina**. Es el que inviste al presidente del Gobierno, el que puede derribarlo y el que tiene la última palabra cuando las dos discrepan sobre una ley.":
    "Hiszpański system dwuizbowy jest **niedoskonały**, a to słowo jest techniczne, nie lekceważące: obie izby nie mają tej samej wagi. **Kongres przeważa**. To on udziela wotum zaufania prezesowi rządu, on może go obalić i on ma ostatnie słowo, kiedy obie izby różnią się co do ustawy.",
  "Congreso": "Kongres",
  "350 diputados. La Constitución fija una horquilla de entre 300 y 400, y la ley electoral ha elegido siempre el número redondo.":
    "350 deputowanych. Konstytucja wyznacza widełki od 300 do 400, a ustawa wyborcza zawsze wybierała liczbę okrągłą.",
  "Senado": "Senat",
  "Cámara de representación territorial: cuatro senadores por provincia elegidos directamente, más los que designan los parlamentos autonómicos.":
    "Izba reprezentacji terytorialnej: czterech senatorów z prowincji wybieranych bezpośrednio, plus ci wskazani przez parlamenty wspólnot autonomicznych.",
  "Cuatro años": "Cztery lata",
  "Es la duración de la legislatura, salvo disolución anticipada, que en España ha sido frecuente.":
    "Tyle trwa kadencja, poza wcześniejszym rozwiązaniem, które w Hiszpanii bywało częste.",
  "Diputación Permanente": "Diputación Permanente",
  "Cuando las cámaras están disueltas o fuera de periodo de sesiones, un grupo reducido vela por sus poderes.":
    "Gdy izby są rozwiązane albo poza sesją, mała grupa czuwa nad ich uprawnieniami.",
  "¿Cuántos diputados tiene el Congreso?": "Ilu deputowanych ma Kongres?",
  "Doscientos": "Dwustu",
  "Trescientos": "Trzystu",
  "Trescientos cincuenta": "Trzystu pięćdziesięciu",
  "Cuatrocientos": "Czterystu",
  "Trescientos cincuenta. La Constitución permite entre trescientos y cuatrocientos, y la ley electoral ha optado siempre por la cifra intermedia.":
    "Trzystu pięćdziesięciu. Konstytucja dopuszcza od trzystu do czterystu, a ustawa wyborcza zawsze wybierała liczbę pośrednią.",
  "Cómo se elige el Congreso": "Jak wybiera się Kongres",
  "La circunscripción es la **provincia**, y Ceuta y Melilla eligen un diputado cada una. Cada provincia tiene un **mínimo inicial de dos escaños** y el resto se reparte en proporción a la población, lo que da a las provincias pequeñas más peso relativo del que les correspondería.":
    "Okręgiem wyborczym jest **prowincja**, a Ceuta i Melilla wybierają po jednym deputowanym. Każda prowincja ma **minimum dwa mandaty** na start, a reszta rozdziela się proporcjonalnie do liczby ludności, co daje małym prowincjom większą wagę względną, niż by im przypadała.",
  "El reparto dentro de cada circunscripción se hace por el **sistema D'Hondt**, con **listas cerradas y bloqueadas**: se vota una candidatura entera, en el orden que fijó el partido, sin poder alterarlo. Quedan fuera las listas que no alcancen el **tres por ciento** de los votos válidos en su circunscripción.":
    "Podział wewnątrz każdego okręgu odbywa się **metodą D'Hondta**, przy **listach zamkniętych i zablokowanych**: głosuje się na całą listę, w kolejności ustalonej przez partię, bez możliwości jej zmiany. Poza podziałem zostają listy, które nie osiągną **trzech procent** ważnych głosów w swoim okręgu.",
  "El Senado y sus límites": "Senat i jego granice",
  "En el Senado, cada provincia peninsular elige **cuatro senadores** por voto directo; las islas y las ciudades autónomas siguen reglas propias. A ellos se suman los designados por las **comunidades autónomas**: uno por comunidad y otro más por cada millón de habitantes.":
    "W Senacie każda prowincja półwyspowa wybiera **czterech senatorów** w głosowaniu bezpośrednim; wyspy i miasta autonomiczne mają własne reguły. Do nich dochodzą wskazani przez **wspólnoty autonomiczne**: jeden na wspólnotę i jeden dodatkowy na każdy milion mieszkańców.",
  "Cuando el Senado **veta** un proyecto o lo enmienda, el Congreso puede **levantar el veto** por **mayoría absoluta**, o por mayoría simple pasados **dos meses**. De ahí que al Senado se le llame a menudo cámara de segunda lectura, y que su reforma sea una discusión abierta desde hace décadas.":
    "Kiedy Senat **wetuje** projekt albo go poprawia, Kongres może **odrzucić weto** **bezwzględną większością**, albo zwykłą większością po upływie **dwóch miesięcy**. Stąd Senat bywa nazywany izbą drugiego czytania, a jego reforma jest dyskusją otwartą od dziesięcioleci.",
  "¿Qué ocurre cuando el Senado veta un proyecto de ley?":
    "Co dzieje się, gdy Senat zawetuje projekt ustawy?",
  "El proyecto decae definitivamente": "Projekt upada ostatecznie",
  "El Congreso puede levantar el veto por mayoría absoluta":
    "Kongres może odrzucić weto bezwzględną większością",
  "Se convoca un referéndum": "Zarządza się referendum",
  "Decide el Tribunal Constitucional": "Decyduje Trybunał Konstytucyjny",
  "El Congreso levanta el veto por mayoría absoluta, o por mayoría simple transcurridos dos meses. Es la razón por la que el bicameralismo español se llama imperfecto.":
    "Kongres odrzuca weto bezwzględną większością, albo zwykłą po upływie dwóch miesięcy. To powód, dla którego hiszpańską dwuizbowość nazywa się niedoskonałą.",
  "¿Qué cámara se define como de representación territorial?":
    "Którą izbę określa się jako izbę reprezentacji terytorialnej?",
  "El Congreso de los Diputados": "Congreso de los Diputados",
  "El Senado": "Senat",
  "Las dos por igual": "Obie tak samo",
  "Ninguna: la representación es siempre del conjunto del pueblo":
    "Żadnej: reprezentacja zawsze dotyczy całego narodu",
  "El artículo 69 define así al Senado. En la práctica su composición mezcla elección provincial y designación autonómica, y esa doble vía es uno de los motivos de que se discuta su reforma.":
    "Artykuł 69 tak właśnie określa Senat. W praktyce jego skład miesza wybór prowincjonalny ze wskazaniem przez wspólnoty, a ta podwójna droga jest jednym z powodów, dla których dyskutuje się o jego reformie.",
  "El sistema D'Hondt no es lo que hace que las provincias pequeñas pesen más: eso lo produce el **mínimo de dos escaños por provincia**. Son dos efectos distintos que suelen atribuirse al mismo culpable.":
    "Metoda D'Hondta nie jest tym, co sprawia, że małe prowincje ważą więcej: robi to **minimum dwóch mandatów na prowincję**. To dwa różne skutki, zwykle przypisywane temu samemu winowajcy.",
  "El Gobierno": "Rząd",
  "Por qué importa: en España un gobierno no cae si pierde una votación. Solo cae si hay quien lo sustituya, y esa regla — copiada de Alemania y perfeccionada aquí — explica la estabilidad de los últimos cuarenta años.":
    "Dlaczego to ważne: w Hiszpanii rząd nie upada, gdy przegra głosowanie. Upada dopiero wtedy, gdy jest go kim zastąpić, a ta reguła — przejęta z Niemiec i tu udoskonalona — tłumaczy stabilność ostatnich czterdziestu lat.",
  "Qué hace y quién lo forma": "Co robi i kto go tworzy",
  "El **artículo 97** encarga al Gobierno dirigir la **política interior y exterior**, la **Administración civil y militar** y la **defensa del Estado**, ejercer la **función ejecutiva** y la **potestad reglamentaria**. Lo componen el **presidente**, los **vicepresidentes** en su caso y los **ministros**, que reunidos forman el **Consejo de Ministros**. Su sede es el **Palacio de la Moncloa**.":
    "**Artykuł 97** powierza rządowi kierowanie **polityką wewnętrzną i zagraniczną**, **administracją cywilną i wojskową** oraz **obroną państwa**, sprawowanie **funkcji wykonawczej** i **władzy rozporządzeniowej**. Tworzą go **prezes**, ewentualni **wiceprezesi** i **ministrowie**, którzy zebrani razem stanowią **Consejo de Ministros**. Jego siedzibą jest **Palacio de la Moncloa**.",
  "La investidura": "Wotum zaufania",
  "El **artículo 99** describe el camino. Tras unas elecciones, el rey **consulta** a los representantes designados por los grupos políticos y, a través del presidente del Congreso, **propone un candidato**. El candidato expone su programa ante la cámara y pide su confianza.":
    "**Artykuł 99** opisuje drogę. Po wyborach król **konsultuje** się z przedstawicielami wskazanymi przez kluby polityczne i, za pośrednictwem przewodniczącego Kongresu, **proponuje kandydata**. Kandydat przedstawia izbie swój program i prosi o zaufanie.",
  "En la **primera votación** necesita la **mayoría absoluta**. Si no la obtiene, cuarenta y ocho horas después basta la **mayoría simple**, es decir, más síes que noes. Si transcurren **dos meses** desde la primera votación sin que nadie sea investido, el rey **disuelve las Cortes** y se convocan nuevas elecciones.":
    "W **pierwszym głosowaniu** potrzebuje **bezwzględnej większości**. Jeśli jej nie uzyska, czterdzieści osiem godzin później wystarcza **zwykła większość**, czyli więcej głosów za niż przeciw. Jeśli od pierwszego głosowania minie **dwa miesiące**, a nikt nie uzyska zaufania, król **rozwiązuje Cortes** i zarządza nowe wybory.",
  "¿Qué mayoría se necesita en la primera votación de investidura?":
    "Jakiej większości potrzeba w pierwszym głosowaniu nad wotum zaufania?",
  "Mayoría simple": "Zwykłej większości",
  "Mayoría absoluta": "Bezwzględnej większości",
  "Tres quintos": "Trzech piątych",
  "Dos tercios": "Dwóch trzecich",
  "Mayoría absoluta en la primera votación. En la segunda, cuarenta y ocho horas después, basta con que haya más votos a favor que en contra.":
    "Bezwzględnej większości w pierwszym głosowaniu. W drugim, czterdzieści osiem godzin później, wystarczy, żeby głosów za było więcej niż przeciw.",
  "La censura constructiva": "Konstruktywne wotum nieufności",
  "La **moción de censura** española es **constructiva**: para derribar a un gobierno no basta con reunir votos en contra, hay que **presentar a la vez un candidato alternativo**. Si la moción prospera, ese candidato queda **automáticamente investido** presidente.":
    "Hiszpański **wniosek o wotum nieufności** jest **konstruktywny**: żeby obalić rząd, nie wystarczy zebrać głosów przeciw, trzeba **jednocześnie przedstawić kandydata alternatywnego**. Jeśli wniosek przejdzie, ten kandydat **automatycznie** uzyskuje zaufanie jako prezes rządu.",
  "La firma al menos la **décima parte** de los diputados y se vota transcurridos **cinco días**, durante los cuales pueden presentarse mociones alternativas. Exige **mayoría absoluta**. En más de cuarenta años solo ha prosperado **una vez**, en **2018**.":
    "Podpisuje go co najmniej **jedna dziesiąta** deputowanych, a głosuje się po upływie **pięciu dni**, w czasie których można zgłaszać wnioski alternatywne. Wymaga **bezwzględnej większości**. W ciągu ponad czterdziestu lat przeszedł tylko **raz**, w **2018 roku**.",
  "La figura inversa es la **cuestión de confianza**, que plantea el propio presidente sobre su programa o una declaración de política general: se gana con **mayoría simple**, y perderla obliga a dimitir.":
    "Odwrotnością jest **kwestia zaufania**, którą stawia sam prezes co do swojego programu albo deklaracji polityki ogólnej: wygrywa się ją **zwykłą większością**, a przegrana zmusza do dymisji.",
  "¿Qué distingue a la moción de censura española?":
    "Co wyróżnia hiszpański wniosek o wotum nieufności?",
  "Que solo puede presentarla la oposición": "Że może go zgłosić tylko opozycja",
  "Que es constructiva: debe incluir un candidato alternativo":
    "Że jest konstruktywny: musi zawierać kandydata alternatywnego",
  "Que exige una mayoría de dos tercios": "Że wymaga większości dwóch trzecich",
  "Que la convoca el rey": "Że zwołuje go król",
  "Sin candidato alternativo no hay moción. Es la razón de que solo haya prosperado una vez desde 1978: es fácil reunir votos contra alguien y difícil reunirlos a favor de un sustituto concreto.":
    "Bez kandydata alternatywnego nie ma wniosku. To powód, dla którego od 1978 roku przeszedł tylko raz: łatwo zebrać głosy przeciw komuś, a trudno zebrać je za konkretnym następcą.",
  "Disolver y seguir": "Rozwiązać i trwać",
  "El presidente puede **disolver** las Cortes y convocar elecciones anticipadas, con dos límites: no cabe hacerlo mientras esté en trámite una moción de censura, ni antes de que haya transcurrido **un año** desde la disolución anterior.":
    "Prezes może **rozwiązać** Cortes i rozpisać wcześniejsze wybory, z dwoma ograniczeniami: nie wolno tego zrobić, gdy toczy się wniosek o wotum nieufności, ani zanim minie **rok** od poprzedniego rozwiązania.",
  "Cuando el gobierno cesa, sigue **en funciones** hasta que tome posesión el siguiente. Un gobierno en funciones despacha lo ordinario y no puede, entre otras cosas, presentar proyectos de ley ni aprobar los presupuestos: mantiene el país en marcha, pero no lo dirige.":
    "Kiedy rząd ustępuje, trwa **w stanie tymczasowości** aż do objęcia urzędu przez następny. Rząd tymczasowy załatwia sprawy bieżące i nie może między innymi wnosić projektów ustaw ani uchwalać budżetu: utrzymuje kraj w ruchu, ale nim nie kieruje.",
  "¿Qué puede hacer un gobierno en funciones?": "Co może zrobić rząd w stanie tymczasowości?",
  "Todo lo que hacía antes de cesar": "Wszystko, co robił przed ustąpieniem",
  "Despachar los asuntos ordinarios, sin presentar proyectos de ley ni presupuestos":
    "Załatwiać sprawy bieżące, bez wnoszenia projektów ustaw i budżetu",
  "Nada: la Administración queda paralizada": "Nic: administracja zostaje sparaliżowana",
  "Solo convocar elecciones": "Tylko rozpisać wybory",
  "Se limita al despacho ordinario para que el país siga funcionando, pero no puede iniciar la acción legislativa ni aprobar presupuestos. España ha tenido periodos largos en esa situación.":
    "Ogranicza się do spraw bieżących, żeby kraj dalej działał, ale nie może rozpocząć działań ustawodawczych ani uchwalić budżetu. Hiszpania miała długie okresy w takim stanie.",
  "**Jefe del Estado** y **presidente del Gobierno** son dos cargos distintos y dos edificios distintos: el rey en la **Zarzuela**, el presidente en la **Moncloa**. En España el jefe del Estado no preside el Gobierno.":
    "**Głowa państwa** i **prezes rządu** to dwa różne urzędy i dwa różne budynki: król w **Zarzueli**, prezes w **Moncloi**. W Hiszpanii głowa państwa nie przewodniczy rządowi.",
  "El poder judicial y el Tribunal Constitucional": "Władza sądownicza i Trybunał Konstytucyjny",
  "Por qué importa: hay dos tribunales en la cumbre y no son el mismo. Uno cierra los pleitos; el otro juzga las leyes. Confundirlos es el error más común sobre la justicia española.":
    "Dlaczego to ważne: na szczycie stoją dwa trybunały i nie są tym samym. Jeden zamyka spory; drugi ocenia ustawy. Mylenie ich to najczęstszy błąd co do hiszpańskiego wymiaru sprawiedliwości.",
  "Jueces sometidos solo a la ley": "Sędziowie podlegli wyłącznie ustawie",
  "El **artículo 117** dice que la justicia **emana del pueblo** y se administra **en nombre del rey** por jueces y magistrados **independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley**. Se entra en la carrera judicial por **oposición**, no por nombramiento político.":
    "**Artykuł 117** mówi, że sprawiedliwość **pochodzi od narodu** i sprawuje się ją **w imieniu króla** przez sędziów **niezawisłych, nieusuwalnych, odpowiedzialnych i podległych wyłącznie władzy ustawy**. Do zawodu sędziowskiego wchodzi się przez **konkurs**, a nie przez nominację polityczną.",
  "El **Consejo General del Poder Judicial** es su órgano de gobierno: decide nombramientos, ascensos, inspección y régimen disciplinario. Lo forman **veinte vocales** más su **presidente**, que lo es también del Tribunal Supremo, con un mandato de **cinco años**.":
    "**Consejo General del Poder Judicial** jest jego organem zarządzającym: decyduje o nominacjach, awansach, kontroli i sprawach dyscyplinarnych. Tworzy go **dwudziestu członków** plus **przewodniczący**, który jest zarazem przewodniczącym Sądu Najwyższego, z kadencją **pięcioletnią**.",
  "La escalera de los tribunales": "Drabina sądów",
  "Juzgados": "Sądy pierwszej instancji",
  "La primera instancia, repartida por partidos judiciales. Aquí se ven los hechos.":
    "Pierwsza instancja, rozłożona po okręgach sądowych. Tutaj bada się fakty.",
  "Audiencias Provinciales": "Audiencias Provinciales",
  "Resuelven los recursos de apelación en cada provincia.":
    "Rozstrzygają apelacje w każdej prowincji.",
  "Tribunales Superiores de Justicia": "Tribunales Superiores de Justicia",
  "Uno por comunidad autónoma. Culminan la organización judicial en su territorio, sin ser una instancia superior al Supremo.":
    "Po jednym na wspólnotę autonomiczną. Wieńczą organizację sądową na swoim terenie, nie będąc instancją wyższą od Sądu Najwyższego.",
  "Tribunal Supremo": "Sąd Najwyższy",
  "El órgano jurisdiccional superior en todos los órdenes, salvo en materia de garantías constitucionales.":
    "Najwyższy organ orzekający we wszystkich pionach, poza sprawami gwarancji konstytucyjnych.",
  "La jurisdicción se divide en cuatro **órdenes**: **civil**, **penal**, **contencioso-administrativo** — para pleitos con la Administración — y **social**, para los laborales. Existe además la **Audiencia Nacional**, con competencia en toda España sobre delitos concretos como el terrorismo o los económicos de gran alcance.":
    "Sądownictwo dzieli się na cztery **piony**: **cywilny**, **karny**, **administracyjny** — do sporów z administracją — i **socjalny**, do spraw pracowniczych. Istnieje ponadto **Audiencia Nacional**, właściwa dla całej Hiszpanii w konkretnych przestępstwach, takich jak terroryzm czy poważne przestępstwa gospodarcze.",
  "El **Ministerio Fiscal** promueve la acción de la justicia en defensa de la legalidad y del interés público. Su jefe, el **fiscal general del Estado**, lo nombra el rey a propuesta del Gobierno, oído el Consejo General del Poder Judicial.":
    "**Ministerio Fiscal**, prokuratura, wszczyna działania wymiaru sprawiedliwości w obronie legalności i interesu publicznego. Jej szefa, **prokuratora generalnego państwa**, mianuje król na wniosek rządu, po wysłuchaniu Consejo General del Poder Judicial.",
  "¿Cuál es el órgano de gobierno del poder judicial?":
    "Który organ zarządza władzą sądowniczą?",
  "El Tribunal Supremo": "Sąd Najwyższy",
  "El Consejo General del Poder Judicial": "Consejo General del Poder Judicial",
  "El Ministerio de Justicia": "Ministerstwo Sprawiedliwości",
  "El Tribunal Constitucional": "Trybunał Konstytucyjny",
  "El CGPJ decide nombramientos, ascensos e inspección. El Tribunal Supremo juzga; el Ministerio de Justicia administra medios materiales, y no manda sobre los jueces.":
    "CGPJ decyduje o nominacjach, awansach i kontroli. Sąd Najwyższy sądzi; Ministerstwo Sprawiedliwości zarządza środkami materialnymi i nie rozkazuje sędziom.",
  "No forma parte del poder judicial: es un órgano **aparte**, regulado en su propio título. Tiene **doce magistrados**, nombrados por el rey a propuesta de cuatro órganos distintos, de modo que ninguno pueda componerlo por su cuenta.":
    "Nie należy do władzy sądowniczej: to organ **osobny**, uregulowany we własnym tytule. Ma **dwunastu sędziów**, mianowanych przez króla na wniosek czterech różnych organów, tak by żaden nie mógł obsadzić go sam.",
  "Cuatro del Congreso": "Czterech z Kongresu",
  "Elegidos por mayoría de tres quintos de la cámara.":
    "Wybieranych większością trzech piątych izby.",
  "Cuatro del Senado": "Czterech z Senatu",
  "También por tres quintos, entre candidatos propuestos por los parlamentos autonómicos.":
    "Także trzema piątymi, spośród kandydatów zgłoszonych przez parlamenty wspólnot.",
  "Dos del Gobierno": "Dwóch od rządu",
  "Es la vía más directa del ejecutivo al tribunal.":
    "To najbardziej bezpośrednia droga władzy wykonawczej do trybunału.",
  "Dos del CGPJ": "Dwóch od CGPJ",
  "La aportación del gobierno de los jueces.": "Wkład samorządu sędziowskiego.",
  "El mandato es de **nueve años** y el tribunal se renueva **por terceras partes cada tres**, de manera que nunca cambia entero de una vez. Sus competencias principales son el **recurso** y la **cuestión de inconstitucionalidad** contra las leyes, el **recurso de amparo** en defensa de los derechos fundamentales y los **conflictos de competencia** entre el Estado y las comunidades autónomas.":
    "Kadencja trwa **dziewięć lat**, a trybunał odnawia się **w jednej trzeciej co trzy lata**, tak że nigdy nie zmienia się cały naraz. Jego główne kompetencje to **skarga** i **pytanie o zgodność z konstytucją** wobec ustaw, **recurso de amparo** w obronie praw podstawowych oraz **spory kompetencyjne** między państwem a wspólnotami autonomicznymi.",
  "¿Cuántos magistrados tiene el Tribunal Constitucional?":
    "Ilu sędziów ma Trybunał Konstytucyjny?",
  "Nueve": "Dziewięciu",
  "Veinte": "Dwudziestu",
  "Doce, nombrados a propuesta de cuatro órganos distintos: cuatro del Congreso, cuatro del Senado, dos del Gobierno y dos del CGPJ. Veinte son los vocales del CGPJ.":
    "Dwunastu, mianowanych na wniosek czterech różnych organów: czterech z Kongresu, czterech z Senatu, dwóch od rządu i dwóch od CGPJ. Dwudziestu to członkowie CGPJ.",
  "¿Forma el Tribunal Constitucional parte del poder judicial?":
    "Czy Trybunał Konstytucyjny należy do władzy sądowniczej?",
  "Sí, es su órgano superior": "Tak, jest jej organem najwyższym",
  "No: es un órgano aparte, regulado en su propio título":
    "Nie: to organ osobny, uregulowany we własnym tytule",
  "Sí, es una sala del Tribunal Supremo": "Tak, jest izbą Sądu Najwyższego",
  "Solo cuando resuelve recursos de amparo": "Tylko wtedy, gdy rozstrzyga skargi amparo",
  "Está fuera del poder judicial y por encima de él en su materia. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria; el Constitucional juzga las leyes y los derechos fundamentales.":
    "Stoi poza władzą sądowniczą i ponad nią w swojej dziedzinie. Sąd Najwyższy jest szczytem sądownictwa powszechnego; Trybunał Konstytucyjny ocenia ustawy i prawa podstawowe.",
  "Los **Tribunales Superiores de Justicia** culminan la organización judicial **en su comunidad**, pero no están por encima del Supremo. Autonómico no significa aquí una instancia más alta, sino un ámbito distinto.":
    "**Tribunales Superiores de Justicia** wieńczą organizację sądową **w swojej wspólnocie**, ale nie stoją ponad Sądem Najwyższym. Autonomiczny nie znaczy tu wyższej instancji, tylko innego zakresu.",
  "Elecciones y participación ciudadana": "Wybory i udział obywateli",
  "Por qué importa: en España se vota en cuatro elecciones distintas, y en una de ellas no se elige a quien acaba mandando. Ese detalle sorprende a mucha gente el día que estrena el censo.":
    "Dlaczego to ważne: w Hiszpanii głosuje się w czterech różnych wyborach, a w jednych z nich nie wybiera się tego, kto ostatecznie rządzi. Ten szczegół zaskakuje wielu w dniu, w którym pierwszy raz idą do urny.",
  "Cuatro urnas": "Cztery urny",
  "El sufragio es **universal, libre, igual, directo y secreto**, y se ejerce desde los **dieciocho años**. Se vota en cuatro convocatorias distintas, que no coinciden en el tiempo ni tienen las mismas reglas.":
    "Prawo wyborcze jest **powszechne, wolne, równe, bezpośrednie i tajne**, i wykonuje się je od **osiemnastego roku życia**. Głosuje się w czterech różnych wyborach, które nie zbiegają się w czasie ani nie mają tych samych reguł.",
  "Generales": "Parlamentarne",
  "Para el Congreso y el Senado, cada cuatro años salvo disolución anticipada.":
    "Do Kongresu i Senatu, co cztery lata poza wcześniejszym rozwiązaniem.",
  "Autonómicas": "Wspólnotowe",
  "Para el parlamento de cada comunidad. Muchas coinciden en el mismo día, pero no todas.":
    "Do parlamentu każdej wspólnoty. Wiele wypada tego samego dnia, ale nie wszystkie.",
  "Municipales": "Samorządowe",
  "Para el pleno del ayuntamiento. Se celebran a la vez en toda España.":
    "Do rady gminy w pełnym składzie. Odbywają się jednocześnie w całej Hiszpanii.",
  "Europeas": "Europejskie",
  "Para el Parlamento Europeo, con España como circunscripción única.":
    "Do Parlamentu Europejskiego, przy Hiszpanii jako jednym okręgu.",
  "En las **municipales** se eligen **concejales**, no alcaldes. Es el pleno del ayuntamiento, ya constituido, el que **elige al alcalde** entre los cabezas de lista. Si ninguno logra la mayoría absoluta de los concejales, resulta elegido el que encabezó la lista más votada.":
    "W wyborach **gminnych** wybiera się **radnych**, a nie burmistrzów. To rada gminy, już ukonstytuowana, **wybiera burmistrza** spośród liderów list. Jeśli nikt nie zdobędzie bezwzględnej większości radnych, wybrany zostaje ten, kto otwierał listę z największą liczbą głosów.",
  "¿Quién elige al alcalde en España?": "Kto w Hiszpanii wybiera burmistrza?",
  "Los vecinos, con voto directo al candidato": "Mieszkańcy, głosując bezpośrednio na kandydata",
  "Los concejales, en el pleno de constitución": "Radni, na sesji ukonstytuowania rady",
  "El presidente de la comunidad autónoma": "Przewodniczący wspólnoty autonomicznej",
  "El delegado del Gobierno": "Delegat rządu",
  "En las municipales se vota una lista de concejales y son ellos quienes eligen alcalde. Si nadie reúne mayoría absoluta, lo es el cabeza de la lista más votada.":
    "W wyborach gminnych głosuje się na listę radnych i to oni wybierają burmistrza. Jeśli nikt nie zbierze bezwzględnej większości, zostaje nim lider listy z największą liczbą głosów.",
  "Partidos y sindicatos": "Partie i związki zawodowe",
  "El **artículo 6** define a los **partidos políticos** como expresión del pluralismo político e instrumento fundamental de la participación, y exige que su **estructura interna y su funcionamiento sean democráticos**. El **artículo 7** dice lo mismo de los **sindicatos** y de las **asociaciones empresariales**.":
    "**Artykuł 6** określa **partie polityczne** jako wyraz pluralizmu politycznego i podstawowe narzędzie udziału obywateli, i wymaga, żeby ich **struktura wewnętrzna i działanie były demokratyczne**. **Artykuł 7** mówi to samo o **związkach zawodowych** i o **organizacjach pracodawców**.",
  "Los dos sindicatos mayoritarios son **Comisiones Obreras** y la **Unión General de Trabajadores**, a los que se suman otros de ámbito autonómico o sectorial. La afiliación es baja en comparación europea, pero su papel es grande, porque los convenios que negocian se aplican a todo el sector y no solo a los afiliados.":
    "Dwa największe związki to **Comisiones Obreras** i **Unión General de Trabajadores**, obok których działają inne, wspólnotowe albo branżowe. Uzwiązkowienie jest na tle europejskim niskie, ale ich rola jest duża, bo układy, które negocjują, obowiązują całą branżę, a nie tylko członków.",
  "Participar sin ser elegido": "Udział bez bycia wybranym",
  "Iniciativa legislativa popular": "Obywatelska inicjatywa ustawodawcza",
  "Quinientas mil firmas acreditadas permiten llevar una proposición de ley al Congreso. Quedan fuera materias como los tributos o el derecho de gracia.":
    "Pięćset tysięcy poświadczonych podpisów pozwala wnieść projekt ustawy do Kongresu. Poza tą drogą zostają sprawy takie jak podatki czy prawo łaski.",
  "Derecho de petición": "Prawo petycji",
  "El artículo 29 permite dirigirse por escrito a los poderes públicos. Es antiguo, sencillo y poco usado.":
    "Artykuł 29 pozwala zwrócić się na piśmie do władz publicznych. Jest stare, proste i rzadko używane.",
  "Referéndum consultivo": "Referendum konsultacyjne",
  "El artículo 92 lo prevé para decisiones de especial trascendencia. Lo convoca el rey, a propuesta del presidente autorizada por el Congreso.":
    "Artykuł 92 przewiduje je dla decyzji o szczególnym znaczeniu. Zarządza je król, na wniosek prezesa rządu upoważniony przez Kongres.",
  "El jurado": "Ława przysięgłych",
  "El artículo 125 abre la participación en la Administración de Justicia. El tribunal del jurado juzga determinados delitos.":
    "Artykuł 125 otwiera udział obywateli w wymiarze sprawiedliwości. Sąd przysięgłych rozstrzyga określone przestępstwa.",
  "Dos instituciones vigilan por cuenta de las Cortes. El **Defensor del Pueblo** es su **alto comisionado** para la defensa de los derechos del título I: supervisa la actividad de la Administración y puede interponer recursos ante el Tribunal Constitucional, aunque sus resoluciones no son ejecutivas. El **Tribunal de Cuentas** fiscaliza las cuentas y la gestión económica del Estado y del sector público.":
    "Dwie instytucje czuwają w imieniu Cortes. **Defensor del Pueblo**, rzecznik praw obywatelskich, jest ich **wysokim komisarzem** do obrony praw z tytułu I: nadzoruje działanie administracji i może wnosić skargi do Trybunału Konstytucyjnego, choć jego rozstrzygnięcia nie są wykonalne. **Tribunal de Cuentas** kontroluje rachunki i gospodarkę finansową państwa oraz sektora publicznego.",
  "¿Cuántas firmas se necesitan para una iniciativa legislativa popular?":
    "Ile podpisów potrzeba do obywatelskiej inicjatywy ustawodawczej?",
  "Cincuenta mil": "Pięćdziesiąt tysięcy",
  "Cien mil": "Sto tysięcy",
  "Quinientas mil": "Pięćset tysięcy",
  "Un millón": "Milion",
  "Quinientas mil firmas acreditadas. Además hay materias excluidas: los tributos, lo internacional, el derecho de gracia y las leyes orgánicas quedan fuera de esta vía.":
    "Pięćset tysięcy poświadczonych podpisów. Do tego są sprawy wyłączone: podatki, kwestie międzynarodowe, prawo łaski i ustawy organiczne zostają poza tą drogą.",
  "¿Qué es el Defensor del Pueblo?": "Czym jest Defensor del Pueblo?",
  "Un tribunal que anula actos administrativos": "Trybunałem, który uchyla akty administracyjne",
  "El alto comisionado de las Cortes para la defensa de los derechos fundamentales":
    "Wysokim komisarzem Cortes do obrony praw podstawowych",
  "Un ministerio del Gobierno": "Ministerstwem w rządzie",
  "El fiscal jefe del Tribunal Supremo": "Prokuratorem naczelnym Sądu Najwyższego",
  "Depende de las Cortes, no del Gobierno, y supervisa a la Administración. Sus resoluciones no obligan, pero puede recurrir leyes ante el Tribunal Constitucional.":
    "Podlega Cortes, a nie rządowi, i nadzoruje administrację. Jego rozstrzygnięcia nie wiążą, ale może zaskarżyć ustawy do Trybunału Konstytucyjnego.",
  "En las **autonómicas** tampoco se vota directamente al presidente de la comunidad: se elige el parlamento, y este lo inviste. La única elección directa de una persona en España es la del **Senado**.":
    "W wyborach **wspólnotowych** też nie głosuje się bezpośrednio na przewodniczącego wspólnoty: wybiera się parlament, a ten udziela mu zaufania. Jedynym bezpośrednim wyborem osoby w Hiszpanii jest wybór do **Senatu**.",
  "De Hispania a al-Ándalus y los reinos cristianos":
    "Od Hispanii do al-Andalus i królestw chrześcijańskich",
  "Historia de España": "Historia Hiszpanii",
  "Por qué se empieza aquí: durante casi ocho siglos la Península no fue un país sino varios, y dos mundos convivieron en ella. Esa larga frontera interior explica más de España que cualquier fecha suelta.":
    "Dlaczego zaczynamy od tego: przez prawie osiem stuleci Półwysep nie był jednym krajem, lecz wieloma, i współistniały na nim dwa światy. Ta długa granica wewnętrzna tłumaczy o Hiszpanii więcej niż jakakolwiek pojedyncza data.",
  "Antes de Roma": "Przed Rzymem",
  "La Península estuvo poblada por **íberos** en el este y el sur y por pueblos **celtas** en el interior y el noroeste, con **Tartessos** como la civilización más antigua de la que hablan las fuentes. Por la costa llegaron **fenicios**, **griegos** y **cartagineses** a comerciar: **Cádiz**, fundada por fenicios, se considera la ciudad más antigua de Europa occidental.":
    "Półwysep zamieszkiwali **Iberowie** na wschodzie i południu oraz ludy **celtyckie** w głębi lądu i na północnym zachodzie, z **Tartessos** jako najstarszą cywilizacją, o której mówią źródła. Wzdłuż wybrzeża przybywali handlować **Fenicjanie**, **Grecy** i **Kartagińczycy**: **Kadyks**, założony przez Fenicjan, uchodzi za najstarsze miasto Europy Zachodniej.",
  "Hispania": "Hispania",
  "Los romanos desembarcaron en **Ampurias en el 218 antes de Cristo**, durante la segunda guerra púnica, y tardaron **dos siglos** en dominar el territorio: la resistencia del norte no cedió hasta las **guerras cántabras**, hacia el 19 antes de Cristo.":
    "Rzymianie wylądowali w **Ampurias w 218 roku przed naszą erą**, w czasie drugiej wojny punickiej, i potrzebowali **dwóch stuleci**, żeby opanować terytorium: opór północy nie ustąpił aż do **wojen kantabryjskich**, około 19 roku przed naszą erą.",
  "De Roma quedan la **lengua** —del latín salen el castellano, el gallego y el catalán—, el **derecho**, las **ciudades** y las obras que aún se usan: el **acueducto de Segovia**, el teatro de **Mérida**, las murallas de Lugo. Hispania dio además al imperio tres emperadores —**Trajano**, **Adriano** y **Teodosio**— y al pensamiento a **Séneca**.":
    "Po Rzymie zostały **język** — z łaciny wywodzą się kastylijski, galicyjski i kataloński — **prawo**, **miasta** oraz budowle, których wciąż się używa: **akwedukt w Segowii**, teatr w **Méridzie**, mury Lugo. Hispania dała ponadto cesarstwu trzech cesarzy — **Trajana**, **Hadriana** i **Teodozjusza** — a myśli **Senekę**.",
  "¿Qué emperadores romanos nacieron en Hispania?":
    "Którzy cesarze rzymscy urodzili się w Hispanii?",
  "Augusto y Nerón": "August i Neron",
  "Trajano y Adriano": "Trajan i Hadrian",
  "César y Calígula": "Cezar i Kaligula",
  "Constantino y Justiniano": "Konstantyn i Justynian",
  "Trajano y Adriano nacieron en Itálica, cerca de la actual Sevilla, y Teodosio en la actual Segovia. Hispania no fue solo una provincia: llegó a dar emperadores al imperio.":
    "Trajan i Hadrian urodzili się w Itálice, blisko dzisiejszej Sewilli, a Teodozjusz w okolicach dzisiejszej Segowii. Hispania nie była tylko prowincją: doszła do tego, że dawała cesarstwu cesarzy.",
  "Los visigodos": "Wizygoci",
  "Con el imperio en descomposición entraron **suevos, vándalos y alanos** en el **409**, y tras ellos los **visigodos**, que acabaron formando un reino con capital en **Toledo**. Su momento decisivo llegó en el **589**, cuando el rey **Recaredo** abandonó el arrianismo y se convirtió al **catolicismo** en el III Concilio de Toledo: religión y monarquía quedaron unidas, y así seguirían durante siglos.":
    "Gdy cesarstwo się rozkładało, w **409 roku** weszli **Swebowie, Wandalowie i Alanowie**, a po nich **Wizygoci**, którzy ostatecznie utworzyli królestwo ze stolicą w **Toledo**. Ich chwila rozstrzygająca przyszła w **589 roku**, kiedy król **Rekkared** porzucił arianizm i przeszedł na **katolicyzm** na III soborze w Toledo: religia i monarchia zrosły się ze sobą i tak miało zostać przez stulecia.",
  "711 y al-Ándalus": "711 i al-Andalus",
  "En el **711** un ejército musulmán cruzó el Estrecho y derrotó al rey visigodo Rodrigo en la batalla de **Guadalete**. En pocos años dominó casi toda la Península, a la que llamó **al-Ándalus**.":
    "W **711 roku** wojsko muzułmańskie przekroczyło Cieśninę i pokonało króla wizygockiego Roderyka w bitwie nad **Guadalete**. W kilka lat opanowało niemal cały Półwysep, który nazwało **al-Andalus**.",
  "El momento de mayor esplendor fue el **Califato de Córdoba**, proclamado por **Abderramán III** en el **929**. Córdoba llegó a ser la ciudad más poblada de Europa occidental, con bibliotecas, baños y una mezquita que aún se levanta. En el **1031** el califato se deshizo en los **reinos de taifas**, y la Península se fragmentó todavía más.":
    "Chwilą największej świetności był **Kalifat Kordoby**, proklamowany przez **Abd ar-Rahmana III** w **929 roku**. Kordoba stała się najludniejszym miastem Europy Zachodniej, z bibliotekami, łaźniami i meczetem, który stoi do dziś. W **1031 roku** kalifat rozpadł się na **królestwa taifa**, a Półwysep rozdrobnił się jeszcze bardziej.",
  "La Mezquita de Córdoba": "Meczet w Kordobie",
  "Ampliada durante dos siglos y convertida en catedral tras la conquista. El bosque de columnas sigue en pie.":
    "Rozbudowywany przez dwa stulecia i zamieniony w katedrę po zdobyciu miasta. Las kolumn stoi nadal.",
  "La Alhambra": "Alhambra",
  "Palacio y fortaleza del reino nazarí de Granada, el último de al-Ándalus, construido sobre todo en el siglo XIV.":
    "Pałac i twierdza nasrydzkiego królestwa Granady, ostatniego z al-Andalus, wzniesiony głównie w XIV wieku.",
  "La Escuela de Toledo": "Szkoła tłumaczy w Toledo",
  "Traductores cristianos, musulmanes y judíos vertieron al latín obras griegas y árabes que Europa había perdido.":
    "Tłumacze chrześcijańscy, muzułmańscy i żydowscy przekładali na łacinę dzieła greckie i arabskie, które Europa utraciła.",
  "El Camino de Santiago": "Droga świętego Jakuba",
  "Desde el siglo IX peregrinos de toda Europa cruzan el norte peninsular. Sigue haciéndose hoy.":
    "Od IX wieku pielgrzymi z całej Europy przemierzają północ Półwyspu. Idzie się nią do dziś.",
  "¿En qué año cruzaron el Estrecho los ejércitos musulmanes?":
    "W którym roku wojska muzułmańskie przekroczyły Cieśninę?",
  "En el 409": "W 409",
  "En el 589": "W 589",
  "En el 711": "W 711",
  "En el 1031": "W 1031",
  "El 711, con la derrota del rey visigodo Rodrigo en Guadalete. El 589 es la conversión de Recaredo y el 1031 el fin del Califato de Córdoba.":
    "W 711, wraz z klęską króla wizygockiego Roderyka nad Guadalete. Rok 589 to nawrócenie Rekkareda, a 1031 koniec Kalifatu Kordoby.",
  "Los reinos del norte": "Królestwa Północy",
  "En la franja cantábrica se formó el reino de **Asturias**, cuyo origen la tradición sitúa en **Covadonga**, y de él salieron **León** y **Castilla**. Al este surgieron **Navarra**, **Aragón** y los **condados catalanes**, unidos a Aragón en el siglo XII. Del oeste leonés nació **Portugal**.":
    "W pasie kantabryjskim uformowało się królestwo **Asturii**, którego początek tradycja umieszcza w **Covadondze**, a z niego wyszły **León** i **Kastylia**. Na wschodzie powstały **Nawarra**, **Aragonia** i **hrabstwa katalońskie**, połączone z Aragonią w XII wieku. Z zachodniej części Leónu narodziła się **Portugalia**.",
  "El avance hacia el sur fue lento y desigual, con siglos de treguas, pactos y matrimonios además de batallas. **Toledo** cayó en **1085**, la victoria de **Las Navas de Tolosa** en **1212** abrió Andalucía, **Sevilla** en **1248**. Solo quedó el **reino nazarí de Granada**, que resistiría dos siglos y medio más.":
    "Posuwanie się na południe było powolne i nierówne, ze stuleciami rozejmów, układów i małżeństw obok bitew. **Toledo** padło w **1085 roku**, zwycięstwo pod **Las Navas de Tolosa** w **1212** otworzyło Andaluzję, **Sewilla** padła w **1248**. Zostało tylko **nasrydzkie królestwo Granady**, które miało wytrzymać jeszcze dwa i pół stulecia.",
  "¿Qué ciudad fue la capital del Califato?": "Które miasto było stolicą Kalifatu?",
  "Toledo": "Toledo",
  "Córdoba": "Kordoba",
  "Sevilla": "Sewilla",
  "Córdoba, desde el 929. Toledo había sido la capital visigoda y Granada fue la sede del último reino nazarí, dos siglos y medio después de que el califato desapareciera.":
    "Kordoba, od 929 roku. Toledo było stolicą wizygocką, a Granada siedzibą ostatniego królestwa nasrydzkiego, dwa i pół wieku po tym, jak kalifat zniknął.",
  "Ocho siglos no son ocho siglos de guerra continua. Hubo largos periodos de tregua, alianzas cruzadas entre reyes cristianos y musulmanes, y un intercambio constante de libros, cultivos y palabras: buena parte del vocabulario español de la agricultura y la ciencia viene del árabe.":
    "Osiem stuleci to nie osiem stuleci nieprzerwanej wojny. Były długie okresy rozejmu, sojusze krzyżujące się między królami chrześcijańskimi a muzułmańskimi i nieustanna wymiana ksiąg, upraw i słów: spora część hiszpańskiego słownictwa rolniczego i naukowego pochodzi z arabskiego.",
  "Los Reyes Católicos y la monarquía hispánica": "Królowie Katoliccy i monarchia hiszpańska",
  "Por qué importa: en un solo año, 1492, España termina una guerra de siglos, expulsa a una parte de su población y llega a un continente que no sabía que existía. Casi todo lo que viene después arranca de ahí.":
    "Dlaczego to ważne: w jednym roku, 1492, Hiszpania kończy wojnę trwającą stulecia, wypędza część własnej ludności i dociera do kontynentu, o którego istnieniu nie wiedziała. Prawie wszystko, co przychodzi potem, bierze się stamtąd.",
  "Una unión de personas, no de reinos": "Unia osób, nie królestw",
  "**Isabel de Castilla** y **Fernando de Aragón** se casaron en **1469**. Lo que unieron fue una **corona**, no un Estado: cada reino conservó sus leyes, sus cortes, su moneda y sus aduanas. España nació como una **unión dinástica**, y la unificación jurídica no llegaría hasta el siglo XVIII.":
    "**Izabela Kastylijska** i **Ferdynand Aragoński** pobrali się w **1469 roku**. To, co połączyli, było **koroną**, a nie państwem: każde królestwo zachowało swoje prawa, swoje kortezy, swoją monetę i swoje komory celne. Hiszpania narodziła się jako **unia dynastyczna**, a ujednolicenie prawa miało przyjść dopiero w XVIII wieku.",
  "1492": "1492",
  "La toma de Granada": "Zdobycie Granady",
  "El 2 de enero cae el último reino nazarí, y con él termina la presencia política musulmana en la Península.":
    "2 stycznia pada ostatnie królestwo nasrydzkie, a wraz z nim kończy się polityczna obecność muzułmańska na Półwyspie.",
  "La expulsión de los judíos": "Wypędzenie Żydów",
  "El decreto de marzo obliga a convertirse o marchar. Los sefardíes conservaron durante siglos su lengua, y hoy tienen un plazo reducido para pedir la nacionalidad.":
    "Marcowy dekret nakazuje przyjąć chrzest albo wyjechać. Sefardyjczycy przez stulecia zachowywali swój język, a dziś mają skrócony termin do ubiegania się o obywatelstwo.",
  "La llegada a América": "Przybycie do Ameryki",
  "El 12 de octubre Colón alcanza una isla del Caribe. Es la fecha de la actual Fiesta Nacional.":
    "12 października Kolumb dociera do wyspy na Karaibach. To data dzisiejszego święta narodowego.",
  "La Gramática de Nebrija": "Gramatyka Nebriji",
  "La primera gramática de una lengua romance. Se publicó ese mismo año, y no por casualidad.":
    "Pierwsza gramatyka języka romańskiego. Ukazała się w tym samym roku i nie przez przypadek.",
  "En **1512** se incorporó **Navarra**, con lo que la Península quedó bajo una sola corona salvo Portugal. La empresa americana convirtió a Castilla en cabeza de un imperio en pocas décadas.":
    "W **1512 roku** przyłączono **Nawarrę**, przez co Półwysep znalazł się pod jedną koroną, poza Portugalią. Przedsięwzięcie amerykańskie w kilka dziesięcioleci uczyniło z Kastylii głowę imperium.",
  "¿Qué tres hechos coinciden en el año 1492?":
    "Które trzy wydarzenia zbiegają się w roku 1492?",
  "La toma de Granada, la expulsión de los judíos y la llegada a América":
    "Zdobycie Granady, wypędzenie Żydów i przybycie do Ameryki",
  "La unión de Castilla y Aragón, la conquista de Navarra y la de Portugal":
    "Unia Kastylii i Aragonii, podbój Nawarry i podbój Portugalii",
  "La llegada de los Borbones, Utrecht y los Decretos de Nueva Planta":
    "Przybycie Burbonów, Utrecht i dekrety Nueva Planta",
  "La fundación de Madrid, la de Sevilla y la de Cádiz": "Założenie Madrytu, Sewilli i Kadyksu",
  "Los tres ocurren en 1492, junto con la publicación de la primera gramática castellana. Navarra se incorporó en 1512 y Portugal solo estuvo unido a la corona entre 1580 y 1640.":
    "Wszystkie trzy zdarzają się w 1492 roku, obok wydania pierwszej gramatyki kastylijskiej. Nawarrę przyłączono w 1512, a Portugalia była złączona z koroną tylko między 1580 a 1640 rokiem.",
  "Los Austrias": "Habsburgowie",
  "**Carlos I** heredó en **1516** un conjunto sin precedentes: Castilla, Aragón, los territorios italianos, Flandes, Austria y América. Como **Carlos V** fue también emperador del Sacro Imperio. Su hijo **Felipe II** fijó la capital en **Madrid** en **1561**, construyó **El Escorial** y sumó **Portugal** en **1580**, en una unión que duraría hasta **1640**.":
    "**Karol I** odziedziczył w **1516 roku** zbiór bez precedensu: Kastylię, Aragonię, ziemie włoskie, Flandrię, Austrię i Amerykę. Jako **Karol V** był także cesarzem Świętego Cesarstwa. Jego syn **Filip II** ustanowił stolicę w **Madrycie** w **1561 roku**, zbudował **Escorial** i dołożył **Portugalię** w **1580**, w unii, która potrwała do **1640**.",
  "De aquella extensión viene la frase del imperio **donde nunca se ponía el sol**. También vinieron guerras interminables, tres bancarrotas y una economía que dependía de la plata americana más que de su propia producción.":
    "Z tego rozmiaru bierze się zdanie o imperium, **nad którym nigdy nie zachodziło słońce**. Wzięły się z niego także wojny bez końca, trzy bankructwa i gospodarka zależna od amerykańskiego srebra bardziej niż od własnej produkcji.",
  "El Siglo de Oro": "Złoty Wiek",
  "Mientras el poder político se desgastaba, la cultura vivió su mayor momento. **Cervantes** publicó el **Quijote** en **1605**, considerado la primera novela moderna; escribieron **Lope de Vega**, **Calderón**, **Quevedo** y **Góngora**; pintaron **El Greco**, **Velázquez** y **Murillo**. **Las Meninas**, de 1656, sigue en el **Museo del Prado**.":
    "Podczas gdy władza polityczna się wykruszała, kultura przeżywała swój największy moment. **Cervantes** wydał **Don Kichota** w **1605 roku**, uważanego za pierwszą nowoczesną powieść; pisali **Lope de Vega**, **Calderón**, **Quevedo** i **Góngora**; malowali **El Greco**, **Velázquez** i **Murillo**. **Panny dworskie**, z 1656 roku, wciąż wiszą w **Muzeum Prado**.",
  "¿Quién escribió el Quijote?": "Kto napisał Don Kichota?",
  "Lope de Vega": "Lope de Vega",
  "Miguel de Cervantes": "Miguel de Cervantes",
  "Francisco de Quevedo": "Francisco de Quevedo",
  "Pedro Calderón de la Barca": "Pedro Calderón de la Barca",
  "Cervantes publicó la primera parte en 1605 y la segunda en 1615. Se considera la primera novela moderna, y el 23 de abril, fecha de su muerte, es el Día del Libro.":
    "Cervantes wydał pierwszą część w 1605 roku, a drugą w 1615. Uchodzi za pierwszą nowoczesną powieść, a 23 kwietnia, data jego śmierci, jest Dniem Książki.",
  "Los Borbones": "Burbonowie",
  "La muerte sin descendencia del último Austria abrió en **1700** la **Guerra de Sucesión**, una guerra europea peleada también dentro de España. La ganó **Felipe V**, el primer **Borbón**, y el **Tratado de Utrecht** de **1713** repartió los despojos: España perdió sus territorios europeos y **Gibraltar**, que sigue siendo británico.":
    "Bezpotomna śmierć ostatniego Habsburga otworzyła w **1700 roku** **wojnę o sukcesję hiszpańską**, wojnę europejską toczoną także wewnątrz Hiszpanii. Wygrał ją **Filip V**, pierwszy **Burbon**, a **traktat utrechcki** z **1713 roku** rozdzielił łupy: Hiszpania straciła swoje ziemie europejskie i **Gibraltar**, który pozostaje brytyjski.",
  "Felipe V impuso los **Decretos de Nueva Planta**, que suprimieron las instituciones propias de la Corona de Aragón y extendieron el modelo castellano. La unión dinástica de 1469 se convirtió entonces, dos siglos y medio después, en un Estado unificado.":
    "Filip V narzucił **dekrety Nueva Planta**, które zniosły własne instytucje Korony Aragonii i rozciągnęły model kastylijski. Unia dynastyczna z 1469 roku stała się wtedy, dwa i pół wieku później, państwem jednolitym.",
  "¿Qué dinastía llegó al trono tras la Guerra de Sucesión?":
    "Która dynastia zasiadła na tronie po wojnie o sukcesję?",
  "Los Trastámara": "Trastámarowie",
  "Los Saboya": "Sabaudowie",
  "Los Borbones, con Felipe V, y siguen reinando hoy. Los Trastámara fueron la dinastía de los Reyes Católicos y los Saboya solo dieron un rey, Amadeo I, en el siglo XIX.":
    "Burbonowie, z Filipem V, i panują do dziś. Trastámarowie byli dynastią Królów Katolickich, a Sabaudowie dali tylko jednego króla, Amadeusza I, w XIX wieku.",
  "La unión de 1469 fue **dinástica**. Castilla y Aragón mantuvieron leyes, cortes y aduanas propias durante dos siglos y medio, y quien las suprimió fue un Borbón en el siglo XVIII, no los Reyes Católicos.":
    "Unia z 1469 roku była **dynastyczna**. Kastylia i Aragonia zachowały własne prawa, kortezy i komory celne przez dwa i pół stulecia, a zniósł je Burbon w XVIII wieku, nie Królowie Katoliccy.",
  "El siglo XIX": "Wiek XIX",
  "Por qué importa: en cien años España pierde un imperio, estrena su primera constitución, se pelea consigo misma tres veces y prueba una república que dura once meses. La inestabilidad del XIX explica la del XX.":
    "Dlaczego to ważne: w sto lat Hiszpania traci imperium, dostaje pierwszą konstytucję, trzy razy walczy sama ze sobą i próbuje republiki, która trwa jedenaście miesięcy. Niestabilność XIX wieku tłumaczy tę z XX.",
  "1808": "1808",
  "Napoleón entró en España con la excusa de atravesarla hacia Portugal y acabó colocando en el trono a su hermano **José I**. El **2 de mayo de 1808** el pueblo de Madrid se levantó, y con él el resto del país: empezó la **Guerra de la Independencia**, seis años de guerra irregular que dieron al mundo la palabra **guerrilla**.":
    "Napoleon wszedł do Hiszpanii pod pretekstem przemarszu do Portugalii, a skończył, sadzając na tronie swojego brata **Józefa I**. **2 maja 1808 roku** lud Madrytu powstał, a z nim reszta kraju: zaczęła się **wojna o niepodległość**, sześć lat wojny nieregularnej, która dała światu słowo **guerrilla**.",
  "La Pepa": "La Pepa",
  "Mientras el país estaba ocupado, unas Cortes reunidas en **Cádiz** —la ciudad que resistía— aprobaron el **19 de marzo de 1812** la primera **Constitución** española. Como ese día es San José, se la conoce como **La Pepa**.":
    "Gdy kraj był okupowany, kortezy zebrane w **Kadyksie** — mieście, które się broniło — uchwaliły **19 marca 1812 roku** pierwszą hiszpańską **konstytucję**. Ponieważ tego dnia przypada świętego Józefa, znana jest jako **La Pepa**.",
  "Proclamaba la **soberanía nacional**, la división de poderes y la libertad de imprenta. Duró poco: **Fernando VII** volvió en **1814**, la derogó y restauró el absolutismo. Ese vaivén entre texto liberal y vuelta atrás se repetiría durante todo el siglo.":
    "Głosiła **suwerenność narodu**, podział władz i wolność druku. Trwała krótko: **Ferdynand VII** wrócił w **1814 roku**, uchylił ją i przywrócił absolutyzm. Ten wahadłowy ruch między tekstem liberalnym a powrotem wstecz miał się powtarzać przez cały wiek.",
  "¿Cómo se conoce popularmente la Constitución de 1812?":
    "Jak popularnie nazywa się konstytucję z 1812 roku?",
  "La Gloriosa": "La Gloriosa",
  "La Nanita": "La Nanita",
  "La Cadista": "La Cadista",
  "Se aprobó el 19 de marzo, día de San José, y de ahí el apodo. La Gloriosa es en cambio el nombre de la revolución de 1868.":
    "Uchwalono ją 19 marca, w dzień świętego Józefa, i stąd przydomek. La Gloriosa to natomiast nazwa rewolucji z 1868 roku.",
  "El fin del imperio americano": "Koniec imperium amerykańskiego",
  "El vacío de poder de 1808 fue el detonante que las colonias esperaban. Entre **1810 y 1824** los territorios continentales de América se independizaron uno tras otro, y la batalla de **Ayacucho**, en 1824, cerró el proceso. Quedaron solo **Cuba**, **Puerto Rico** y **Filipinas**.":
    "Próżnia władzy z 1808 roku była zapalnikiem, na który czekały kolonie. Między **1810 a 1824 rokiem** kontynentalne terytoria Ameryki uzyskiwały niepodległość jedno po drugim, a bitwa pod **Ayacucho**, w 1824, zamknęła ten proces. Zostały tylko **Kuba**, **Portoryko** i **Filipiny**.",
  "Un siglo de conflictos": "Stulecie konfliktów",
  "Las guerras carlistas": "Wojny karlistowskie",
  "Tres guerras civiles desde 1833 entre los partidarios de Isabel II y los del pretendiente Carlos. Enfrentaron dos ideas de país.":
    "Trzy wojny domowe od 1833 roku między zwolennikami Izabeli II a stronnikami pretendenta Karola. Starły się w nich dwie idee kraju.",
  "El Sexenio Democrático": "Sexenio Democrático",
  "De 1868 a 1874, tras la revolución llamada la Gloriosa. Incluyó un rey importado, Amadeo de Saboya, que abdicó a los dos años.":
    "Od 1868 do 1874 roku, po rewolucji zwanej La Gloriosa. Objęło importowanego króla, Amadeusza Sabaudzkiego, który po dwóch latach abdykował.",
  "La Primera República": "Pierwsza Republika",
  "Proclamada en 1873, duró once meses y tuvo cuatro presidentes. Terminó con un golpe militar.":
    "Proklamowana w 1873 roku, trwała jedenaście miesięcy i miała czterech prezydentów. Skończyła się zamachem wojskowym.",
  "La Restauración": "Restauracja",
  "Desde 1875, con Alfonso XII. Cánovas diseñó un turno pactado entre dos partidos, sostenido por el caciquismo en el campo.":
    "Od 1875 roku, z Alfonsem XII. Cánovas zaprojektował uzgodnioną wymianę między dwiema partiami, podtrzymywaną na wsi przez system klientelistyczny.",
  "¿Cuánto duró la Primera República española?":
    "Jak długo trwała pierwsza republika hiszpańska?",
  "Once meses": "Jedenaście miesięcy",
  "Tres años": "Trzy lata",
  "Ocho años": "Osiem lat",
  "Veinte años": "Dwadzieścia lat",
  "Proclamada en febrero de 1873 y terminada por un golpe a comienzos de 1874, con cuatro presidentes en ese tiempo. La Segunda República, de 1931, duró ocho años.":
    "Proklamowana w lutym 1873 roku i zakończona zamachem na początku 1874, z czterema prezydentami w tym czasie. Druga Republika, z 1931 roku, trwała osiem lat.",
  "El Desastre": "Katastrofa",
  "En **1898**, tras una guerra breve con **Estados Unidos**, España perdió **Cuba**, **Puerto Rico** y **Filipinas**. Se lo llamó simplemente **el Desastre**, y el golpe fue más moral que militar: el país descubrió de golpe que ya no era una potencia.":
    "W **1898 roku**, po krótkiej wojnie ze **Stanami Zjednoczonymi**, Hiszpania straciła **Kubę**, **Portoryko** i **Filipiny**. Nazwano to po prostu **Katastrofą**, a cios był bardziej moralny niż wojskowy: kraj odkrył nagle, że nie jest już mocarstwem.",
  "De esa conmoción salió la **Generación del 98**, un grupo de escritores —Unamuno, Baroja, Azorín, Machado— que se preguntó qué era España y qué debía hacer consigo misma. La pregunta atravesaría todo el siglo siguiente.":
    "Z tego wstrząsu wyrosło **Pokolenie 98** — grupa pisarzy: Unamuno, Baroja, Azorín, Machado — która pytała, czym jest Hiszpania i co ma ze sobą zrobić. To pytanie przecięło całe następne stulecie.",
  "Mientras tanto, **Cataluña** y el **País Vasco** se industrializaban: el textil catalán y la siderurgia vasca crearon las primeras grandes concentraciones obreras, y con ellas el movimiento sindical. El **PSOE** se había fundado en **1879**.":
    "Tymczasem **Katalonia** i **Kraj Basków** uprzemysławiały się: kataloński przemysł włókienniczy i baskijska metalurgia stworzyły pierwsze wielkie skupiska robotnicze, a z nimi ruch związkowy. **PSOE** założono w **1879 roku**.",
  "¿Qué territorios perdió España en 1898?": "Które terytoria Hiszpania straciła w 1898 roku?",
  "México, Perú y Colombia": "Meksyk, Peru i Kolumbię",
  "Cuba, Puerto Rico y Filipinas": "Kubę, Portoryko i Filipiny",
  "Gibraltar y el Sáhara": "Gibraltar i Saharę",
  "Flandes y los territorios italianos": "Flandrię i ziemie włoskie",
  "Las últimas posesiones de ultramar, tras una guerra breve con Estados Unidos. La América continental se había independizado setenta años antes, y Gibraltar se perdió en 1713.":
    "Ostatnie posiadłości zamorskie, po krótkiej wojnie ze Stanami Zjednoczonymi. Ameryka kontynentalna uzyskała niepodległość siedemdziesiąt lat wcześniej, a Gibraltar utracono w 1713 roku.",
  "La Constitución de 1812 y la de 1978 se citan a veces juntas y no se parecen en nada salvo en el nombre. Entre ambas hubo otras cinco, más varios proyectos que no llegaron a regir.":
    "Konstytucję z 1812 roku i tę z 1978 przywołuje się czasem razem, a poza nazwą nie są do siebie w niczym podobne. Między nimi było jeszcze pięć innych, plus kilka projektów, które nigdy nie weszły w życie.",
  "República, Guerra Civil y dictadura": "Republika, wojna domowa i dyktatura",
  "Por qué importa: son los cuarenta y cinco años que la Constitución de 1978 tiene detrás. Casi cada decisión de aquel texto —el consenso, la rigidez, la censura constructiva— es una respuesta a algo que ocurrió aquí.":
    "Dlaczego to ważne: to czterdzieści pięć lat, które konstytucja z 1978 roku ma za sobą. Prawie każda decyzja tamtego tekstu — konsens, sztywność, konstruktywne wotum nieufności — jest odpowiedzią na coś, co zdarzyło się tutaj.",
  "El 14 de abril": "14 kwietnia",
  "Tras la dictadura de **Primo de Rivera**, entre 1923 y 1930, las **elecciones municipales** del 12 de abril de 1931 se leyeron como un plebiscito sobre la monarquía. Las ciudades votaron republicano; **Alfonso XIII** salió de España y el **14 de abril de 1931** se proclamó la **Segunda República**.":
    "Po dyktaturze **Primo de Rivery**, między 1923 a 1930 rokiem, **wybory gminne** z 12 kwietnia 1931 roku odczytano jako plebiscyt w sprawie monarchii. Miasta zagłosowały republikańsko; **Alfons XIII** opuścił Hiszpanię i **14 kwietnia 1931 roku** proklamowano **Drugą Republikę**.",
  "La **Constitución de 1931** fue de las más avanzadas de su tiempo: Estado laico, **divorcio**, y sobre todo el **voto femenino**, defendido en las Cortes por **Clara Campoamor** contra buena parte de su propio grupo. Las mujeres votaron por primera vez en **1933**. Se aprobaron además los primeros **estatutos de autonomía**, el de Cataluña en 1932.":
    "**Konstytucja z 1931 roku** należała do najbardziej postępowych swojego czasu: państwo świeckie, **rozwód**, a przede wszystkim **prawo wyborcze kobiet**, bronione w kortezach przez **Clarę Campoamor** wbrew sporej części własnego klubu. Kobiety zagłosowały po raz pierwszy w **1933 roku**. Uchwalono też pierwsze **statuty autonomii**, kataloński w 1932.",
  "¿Qué día se proclamó la Segunda República?": "Którego dnia proklamowano Drugą Republikę?",
  "El 12 de abril de 1931": "12 kwietnia 1931",
  "El 14 de abril de 1931": "14 kwietnia 1931",
  "El 18 de julio de 1936": "18 lipca 1936",
  "El 1 de abril de 1939": "1 kwietnia 1939",
  "El 12 de abril fueron las municipales y el 14 la proclamación. El 18 de julio de 1936 comienza la guerra y el 1 de abril de 1939 termina.":
    "12 kwietnia były wybory gminne, a 14 proklamacja. 18 lipca 1936 zaczyna się wojna, a 1 kwietnia 1939 się kończy.",
  "La guerra": "Wojna",
  "El **17 y 18 de julio de 1936** una parte del ejército se sublevó contra el Gobierno de la República. El golpe triunfó en unas zonas y fracasó en otras, y ese fracaso parcial fue precisamente lo que convirtió una sublevación en una **guerra civil** de casi tres años.":
    "**17 i 18 lipca 1936 roku** część wojska podniosła bunt przeciw rządowi Republiki. Zamach zwyciężył w jednych rejonach, a w innych zawiódł, i właśnie to częściowe niepowodzenie zamieniło bunt w niemal trzyletnią **wojnę domową**.",
  "Fue también un ensayo de la guerra europea que venía: Alemania e Italia apoyaron al bando sublevado y la Unión Soviética al republicano, mientras las democracias se mantenían en la no intervención. El bombardeo de **Guernica** en **1937** dio a Picasso el motivo de su cuadro más conocido, hoy en el **Museo Reina Sofía**.":
    "Była zarazem próbą generalną europejskiej wojny, która nadchodziła: Niemcy i Włochy wsparły stronę buntowników, a Związek Radziecki republikanów, podczas gdy demokracje trwały przy nieinterwencji. Bombardowanie **Guerniki** w **1937 roku** dało Picassowi temat jego najbardziej znanego obrazu, dziś w **Muzeum Reina Sofía**.",
  "La guerra terminó el **1 de abril de 1939**. Dejó cientos de miles de muertos y un **exilio** de medio millón de personas, entre ellas buena parte de los científicos, escritores y maestros del país.":
    "Wojna skończyła się **1 kwietnia 1939 roku**. Zostawiła setki tysięcy zabitych i **emigrację** pół miliona osób, wśród nich sporą część naukowców, pisarzy i nauczycieli kraju.",
  "¿Cuándo terminó la Guerra Civil española?": "Kiedy skończyła się hiszpańska wojna domowa?",
  "En 1936": "W 1936",
  "En 1937": "W 1937",
  "En 1939": "W 1939",
  "En 1945": "W 1945",
  "El 1 de abril de 1939, cinco meses antes de que empezara la Segunda Guerra Mundial. El bombardeo de Guernica fue en 1937.":
    "1 kwietnia 1939 roku, pięć miesięcy przed wybuchem drugiej wojny światowej. Bombardowanie Guerniki było w 1937.",
  "La dictadura": "Dyktatura",
  "**Francisco Franco** gobernó desde **1939 hasta 1975**. Se suprimieron los partidos y los sindicatos libres, se implantó la **censura**, se persiguió a los vencidos y las lenguas distintas del castellano quedaron fuera de la escuela y de la vida pública.":
    "**Francisco Franco** rządził od **1939 do 1975 roku**. Zniesiono partie i wolne związki zawodowe, wprowadzono **cenzurę**, prześladowano pokonanych, a języki inne niż kastylijski zniknęły ze szkoły i z życia publicznego.",
  "La autarquía": "Autarkia",
  "Los años cuarenta: aislamiento internacional, cartillas de racionamiento y hambre. Se los llamó los años del hambre.":
    "Lata czterdzieste: izolacja międzynarodowa, kartki na żywność i głód. Nazwano je latami głodu.",
  "1953 y 1955": "1953 i 1955",
  "Los acuerdos con Estados Unidos y el concordato con la Santa Sede rompen el aislamiento; en 1955 España ingresa en la ONU.":
    "Porozumienia ze Stanami Zjednoczonymi i konkordat ze Stolicą Apostolską przełamują izolację; w 1955 roku Hiszpania wchodzi do ONZ.",
  "El desarrollismo": "Desarrollismo",
  "En los sesenta llegan la industria, el turismo de sol y playa y las divisas de dos millones de emigrantes en Europa.":
    "W latach sześćdziesiątych przychodzą przemysł, turystyka słońca i plaży oraz dewizy dwóch milionów emigrantów w Europie.",
  "1973": "1973",
  "El almirante Carrero Blanco, sucesor previsto en la presidencia, muere en un atentado de ETA. El plan de continuidad se rompe.":
    "Admirał Carrero Blanco, przewidziany następca na stanowisku premiera, ginie w zamachu ETA. Plan ciągłości pęka.",
  "En **1969** Franco designó sucesor a título de rey a **Juan Carlos de Borbón**, nieto de Alfonso XIII. Franco murió el **20 de noviembre de 1975**, y lo que ocurrió después no estaba escrito en ninguna parte.":
    "W **1969 roku** Franco wyznaczył na następcę z tytułem króla **Juana Carlosa Burbona**, wnuka Alfonsa XIII. Franco umarł **20 listopada 1975 roku**, a to, co stało się potem, nie było nigdzie zapisane.",
  "¿Quién defendió el voto femenino en las Cortes republicanas?":
    "Kto bronił prawa wyborczego kobiet w kortezach republikańskich?",
  "Victoria Kent": "Victoria Kent",
  "Clara Campoamor": "Clara Campoamor",
  "Dolores Ibárruri": "Dolores Ibárruri",
  "María Zambrano": "María Zambrano",
  "Clara Campoamor lo defendió y lo sacó adelante, en contra de buena parte de su propio grupo. Victoria Kent, también diputada, se opuso entonces por temor al voto conservador de las mujeres.":
    "Clara Campoamor go broniła i przeprowadziła, wbrew sporej części własnego klubu. Victoria Kent, także deputowana, sprzeciwiła się wtedy z obawy przed konserwatywnym głosem kobiet.",
  "La Segunda República duró **ocho años** y solo los tres últimos fueron de guerra. No son lo mismo, aunque se nombren muchas veces de un tirón.":
    "Druga Republika trwała **osiem lat** i tylko trzy ostatnie były wojną. To nie to samo, choć wymienia się je często jednym tchem.",
  "La Transición y la democracia": "Transición i demokracja",
  "Por qué importa: en tres años España pasó de una dictadura a una democracia sin romper la legalidad anterior y sin una nueva guerra. Cómo se hizo eso es la explicación de casi todo el sistema descrito en el capítulo dos.":
    "Dlaczego to ważne: w trzy lata Hiszpania przeszła od dyktatury do demokracji, nie łamiąc wcześniejszej legalności i bez nowej wojny. Jak to zrobiono, tłumaczy niemal cały system opisany w rozdziale drugim.",
  "De la ley a la ley": "Od ustawy do ustawy",
  "**Juan Carlos I** fue proclamado rey el **22 de noviembre de 1975**, dos días después de la muerte de Franco, dentro de las reglas del régimen. En julio de **1976** nombró presidente del Gobierno a **Adolfo Suárez**, procedente del propio aparato franquista, lo que casi nadie interpretó entonces como una buena noticia.":
    "**Juan Carlos I** został proklamowany królem **22 listopada 1975 roku**, dwa dni po śmierci Franca, wewnątrz reguł reżimu. W lipcu **1976 roku** mianował prezesem rządu **Adolfa Suáreza**, wywodzącego się z samego aparatu frankistowskiego, czego niemal nikt nie odczytał wtedy jako dobrej wiadomości.",
  "Suárez llevó a las Cortes del régimen la **Ley para la Reforma Política**, que en la práctica las disolvía y abría elecciones libres. Las Cortes la aprobaron y el pueblo la ratificó en referéndum en **diciembre de 1976**. De ahí la fórmula con que se resume la Transición: se fue **de la ley a la ley**, sin ruptura formal.":
    "Suárez wniósł do kortezów reżimu **ustawę o reformie politycznej**, która w praktyce je rozwiązywała i otwierała wolne wybory. Kortezy ją uchwaliły, a naród zatwierdził w referendum w **grudniu 1976 roku**. Stąd formuła, którą streszcza się Transición: przeszło się **od ustawy do ustawy**, bez formalnego zerwania.",
  "En abril de **1977**, un **Sábado Santo**, se legalizó el **Partido Comunista**, la decisión más arriesgada del periodo. El **15 de junio de 1977** se celebraron las **primeras elecciones libres** desde 1936.":
    "W kwietniu **1977 roku**, w **Wielką Sobotę**, zalegalizowano **partię komunistyczną**, najbardziej ryzykowną decyzję tego okresu. **15 czerwca 1977 roku** odbyły się **pierwsze wolne wybory** od 1936 roku.",
  "¿Quién fue el presidente del Gobierno que dirigió la Transición?":
    "Kto był prezesem rządu, który poprowadził Transición?",
  "Leopoldo Calvo-Sotelo": "Leopoldo Calvo-Sotelo",
  "Adolfo Suárez": "Adolfo Suárez",
  "Felipe González": "Felipe González",
  "Manuel Fraga": "Manuel Fraga",
  "Adolfo Suárez, nombrado en 1976 y ganador de las elecciones de 1977 y 1979. Calvo-Sotelo le sucedió en 1981 y Felipe González ganó en 1982.":
    "Adolfo Suárez, mianowany w 1976 roku i zwycięzca wyborów w 1977 i 1979. Calvo-Sotelo zastąpił go w 1981, a Felipe González wygrał w 1982.",
  "Los años difíciles": "Trudne lata",
  "En **octubre de 1977** los partidos firmaron los **Pactos de la Moncloa**, un acuerdo económico y social que permitió afrontar la inflación y el paro sin que el sistema saltara por los aires. Al año siguiente se aprobó la **Constitución**.":
    "W **październiku 1977 roku** partie podpisały **pakty z Moncloi**, porozumienie gospodarcze i społeczne, które pozwoliło zmierzyć się z inflacją i bezrobociem, nie wysadzając systemu w powietrze. W następnym roku uchwalono **Konstytucję**.",
  "El momento más peligroso llegó el **23 de febrero de 1981**: un grupo de guardias civiles asaltó el Congreso durante la votación de investidura y secuestró al Gobierno y a los diputados. El golpe fracasó esa misma noche. Fue el último intento de volver atrás por la fuerza.":
    "Najniebezpieczniejsza chwila przyszła **23 lutego 1981 roku**: grupa żandarmów wtargnęła do Kongresu w czasie głosowania nad wotum zaufania i wzięła rząd oraz deputowanych jako zakładników. Zamach upadł tej samej nocy. Była to ostatnia próba cofnięcia się siłą.",
  "¿Qué ocurrió el 23 de febrero de 1981?": "Co wydarzyło się 23 lutego 1981 roku?",
  "Se aprobó la Constitución": "Uchwalono Konstytucję",
  "Un intento de golpe de Estado en el Congreso": "Próba zamachu stanu w Kongresie",
  "España entró en la Comunidad Económica Europea":
    "Hiszpania weszła do Europejskiej Wspólnoty Gospodarczej",
  "Se celebraron las primeras elecciones libres": "Odbyły się pierwsze wolne wybory",
  "El asalto al Congreso durante una votación de investidura, conocido desde entonces como el 23-F. Fracasó esa misma noche y fue el último intento de volver atrás por la fuerza.":
    "Szturm na Kongres w czasie głosowania nad wotum zaufania, znany odtąd jako 23-F. Upadł tej samej nocy i był ostatnią próbą cofnięcia się siłą.",
  "La normalidad": "Normalność",
  "1982": "1982",
  "El PSOE gana con mayoría absoluta y gobierna hasta 1996. La alternancia demuestra que el sistema funciona.":
    "PSOE wygrywa bezwzględną większością i rządzi do 1996 roku. Zmiana władzy dowodzi, że system działa.",
  "1986": "1986",
  "España entra en la Comunidad Económica Europea y ratifica en referéndum su permanencia en la OTAN.":
    "Hiszpania wchodzi do Europejskiej Wspólnoty Gospodarczej i potwierdza w referendum pozostanie w NATO.",
  "1992": "1992",
  "Juegos Olímpicos de Barcelona, Exposición Universal de Sevilla y el primer tren de alta velocidad. El año en que el país se enseña al mundo.":
    "Igrzyska olimpijskie w Barcelonie, wystawa światowa w Sewilli i pierwszy pociąg dużych prędkości. Rok, w którym kraj pokazuje się światu.",
  "2002": "2002",
  "El euro sustituye a la peseta en los bolsillos, tras tres años de existir solo en las cuentas.":
    "Euro zastępuje pesetę w kieszeniach, po trzech latach istnienia wyłącznie na kontach.",
  "El **11 de marzo de 2004** una serie de bombas en trenes de cercanías de Madrid causó ciento noventa y tres muertos: el mayor atentado de la historia de España. **ETA**, que había matado a más de ochocientas personas desde los años sesenta, anunció el fin de su actividad armada en 2011 y su disolución en 2018.":
    "**11 marca 2004 roku** seria bomb w podmiejskich pociągach Madrytu zabiła sto dziewięćdziesiąt trzy osoby: to największy zamach w historii Hiszpanii. **ETA**, która od lat sześćdziesiątych zabiła ponad osiemset osób, ogłosiła koniec działalności zbrojnej w 2011 roku i rozwiązanie w 2018.",
  "En **2014** **Juan Carlos I abdicó** y fue proclamado **Felipe VI**. El sistema autonómico, que la Constitución dejó abierto, se completó en los años ochenta y noventa hasta las diecisiete comunidades y las dos ciudades autónomas de hoy.":
    "W **2014 roku** **Juan Carlos I abdykował**, a proklamowano **Filipa VI**. System autonomiczny, który Konstytucja zostawiła otwarty, dopełnił się w latach osiemdziesiątych i dziewięćdziesiątych aż do dzisiejszych siedemnastu wspólnot i dwóch miast autonomicznych.",
  "¿En qué año entró España en la Comunidad Económica Europea?":
    "W którym roku Hiszpania weszła do Europejskiej Wspólnoty Gospodarczej?",
  "En 1978": "W 1978",
  "En 1982": "W 1982",
  "En 1986": "W 1986",
  "En 1992": "W 1992",
  "El 1 de enero de 1986, junto con Portugal. Ese mismo año se celebró el referéndum sobre la permanencia en la OTAN.":
    "1 stycznia 1986 roku, razem z Portugalią. W tym samym roku odbyło się referendum o pozostaniu w NATO.",
  "La Transición no fue una ruptura sino una **reforma pactada**: las instituciones del régimen aprobaron su propia disolución. Esa elección explica tanto la estabilidad posterior como los debates que siguen abiertos sobre lo que quedó sin resolver.":
    "Transición nie była zerwaniem, lecz **uzgodnioną reformą**: instytucje reżimu uchwaliły własne rozwiązanie. Ten wybór tłumaczy zarówno późniejszą stabilność, jak i spory, które wciąż toczą się o to, co zostało nierozstrzygnięte.",
  "Las comunidades autónomas": "Wspólnoty autonomiczne",
  "El Estado autonómico, el territorio y las lenguas": "Państwo autonomii, terytorium i języki",
  "Por qué importa: la Constitución no dibujó un mapa. Reconoció un derecho y dejó que el mapa se hiciera solo, y el resultado es uno de los Estados más descentralizados de Europa sin ser formalmente federal.":
    "Dlaczego to ważne: Konstytucja nie narysowała mapy. Uznała prawo i pozwoliła, żeby mapa zrobiła się sama, a wynikiem jest jedno z najbardziej zdecentralizowanych państw Europy, formalnie niebędące federacją.",
  "Un modelo abierto": "Model otwarty",
  "El **título VIII** no enumera comunidades: establece **cómo** pueden constituirse. Las provincias limítrofes con características históricas, culturales y económicas comunes podían acceder al autogobierno, y de ese procedimiento salieron **diecisiete comunidades autónomas** y, desde **1995**, las **dos ciudades autónomas** de **Ceuta** y **Melilla**.":
    "**Tytuł VIII** nie wylicza wspólnot: ustala **jak** mogą powstać. Sąsiadujące prowincje o wspólnych cechach historycznych, kulturowych i gospodarczych mogły uzyskać samorząd, a z tej procedury wyszło **siedemnaście wspólnot autonomicznych** oraz, od **1995 roku**, **dwa miasta autonomiczne**: **Ceuta** i **Melilla**.",
  "Hubo **dos vías**. La del **artículo 151**, más rápida y con más competencias desde el principio, la siguieron **Cataluña**, el **País Vasco**, **Galicia** y **Andalucía**. La del **artículo 143**, más lenta, la recorrieron las demás. Con los años las diferencias se fueron igualando en buena medida.":
    "Były **dwie drogi**. Drogę z **artykułu 151**, szybszą i z większymi kompetencjami od początku, poszły **Katalonia**, **Kraj Basków**, **Galicja** i **Andaluzja**. Drogę z **artykułu 143**, wolniejszą, przebyły pozostałe. Z latami różnice w dużej mierze się wyrównały.",
  "El estatuto": "Statut",
  "Cada comunidad tiene un **Estatuto de Autonomía**, que la Constitución llama su **norma institucional básica**. No es una ley cualquiera: se aprueba como **ley orgánica** de las Cortes Generales, de modo que forma parte a la vez del ordenamiento autonómico y del estatal.":
    "Każda wspólnota ma **Statut Autonomii**, który Konstytucja nazywa jej **podstawową normą ustrojową**. To nie zwykła ustawa: uchwala się go jako **ustawę organiczną** Cortes Generales, więc należy zarazem do porządku wspólnotowego i państwowego.",
  "Asamblea legislativa": "Zgromadzenie ustawodawcze",
  "El parlamento de la comunidad, elegido por sus ciudadanos. Aprueba las leyes autonómicas y el presupuesto.":
    "Parlament wspólnoty, wybierany przez jej mieszkańców. Uchwala ustawy wspólnotowe i budżet.",
  "Consejo de Gobierno": "Rada rządowa",
  "El ejecutivo, con su presidente al frente, investido por la asamblea igual que en el Estado.":
    "Władza wykonawcza, z przewodniczącym na czele, któremu zgromadzenie udziela zaufania tak samo jak w państwie.",
  "Tribunal Superior de Justicia": "Tribunal Superior de Justicia",
  "Culmina la organización judicial en el territorio, sin ser una instancia por encima del Tribunal Supremo.":
    "Wieńczy organizację sądową na terenie, nie będąc instancją ponad Sądem Najwyższym.",
  "Delegado del Gobierno": "Delegat rządu",
  "Representa a la Administración del Estado en la comunidad. No es un cargo autonómico: lo nombra el Gobierno central.":
    "Reprezentuje administrację państwa we wspólnocie. To nie urząd wspólnotowy: mianuje go rząd centralny.",
  "¿Cuántas comunidades autónomas tiene España?": "Ile wspólnot autonomicznych ma Hiszpania?",
  "Diecisiete": "Siedemnaście",
  "Diecinueve": "Dziewiętnaście",
  "Cincuenta": "Pięćdziesiąt",
  "Diecisiete comunidades, más las ciudades autónomas de Ceuta y Melilla desde 1995. Cincuenta es el número de provincias, que es otra división.":
    "Siedemnaście wspólnot, plus miasta autonomiczne Ceuta i Melilla od 1995 roku. Pięćdziesiąt to liczba prowincji, a to inny podział.",
  "Quién hace qué": "Kto co robi",
  "El **artículo 149** enumera las materias **exclusivas del Estado**: relaciones internacionales, defensa, administración de justicia, moneda, legislación mercantil, penal y laboral, y la regulación básica de muchas otras. El **artículo 148** enumera las que las comunidades **pueden asumir**: urbanismo, agricultura, turismo, sanidad e higiene, cultura, y por esa vía se llega a la sanidad y la educación que hoy gestionan.":
    "**Artykuł 149** wylicza dziedziny **wyłączne dla państwa**: stosunki międzynarodowe, obrona, wymiar sprawiedliwości, waluta, prawo handlowe, karne i pracy oraz regulacja podstawowa wielu innych. **Artykuł 148** wylicza te, które wspólnoty **mogą przejąć**: planowanie przestrzenne, rolnictwo, turystyka, zdrowie i higiena, kultura — i tą drogą dochodzi się do ochrony zdrowia i oświaty, którymi dziś zarządzają.",
  "La **financiación** sigue dos regímenes. La mayoría está en el **régimen común**, con una parte de los impuestos cedida y un fondo de reparto. El **País Vasco** y **Navarra** tienen **régimen foral** —el **concierto** y el **convenio**— por el que recaudan sus propios impuestos y pagan al Estado una cantidad por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "**Finansowanie** idzie dwoma trybami. Większość jest w **trybie wspólnym**, z częścią podatków przekazaną i funduszem wyrównawczym. **Kraj Basków** i **Nawarra** mają **tryb foralny** — **concierto** i **convenio** — w którym pobierają własne podatki i płacą państwu kwotę za usługi wspólne. To wyjątek historyczny uznany w pierwszym przepisie dodatkowym.",
  "¿Qué comunidades tienen régimen foral de financiación?":
    "Które wspólnoty mają foralny tryb finansowania?",
  "Cataluña y el País Vasco": "Katalonia i Kraj Basków",
  "El País Vasco y Navarra": "Kraj Basków i Nawarra",
  "Galicia y Navarra": "Galicja i Nawarra",
  "Ninguna: el sistema es igual para todas": "Żadna: system jest ten sam dla wszystkich",
  "El concierto vasco y el convenio navarro: recaudan sus propios impuestos y pagan al Estado por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "Baskijskie concierto i nawarskie convenio: pobierają własne podatki i płacą państwu za usługi wspólne. To wyjątek historyczny uznany w pierwszym przepisie dodatkowym.",
  "Los límites": "Granice",
  "La Constitución garantiza la **solidaridad** entre territorios y prohíbe que las diferencias entre estatutos impliquen **privilegios económicos o sociales**. Para corregir desequilibrios existe el **Fondo de Compensación Interterritorial**.":
    "Konstytucja gwarantuje **solidarność** między terytoriami i zakazuje, by różnice między statutami oznaczały **przywileje ekonomiczne lub społeczne**. Do wyrównywania nierównowagi istnieje **Fundusz Wyrównawczy Międzyterytorialny**.",
  "Y hay un último recurso: el **artículo 155**. Si una comunidad **incumple gravemente** sus obligaciones constitucionales o atenta contra el interés general de España, el Gobierno puede requerirla y, si no atiende el requerimiento, adoptar medidas con la **aprobación del Senado por mayoría absoluta**. Se aplicó por primera vez en 2017.":
    "I jest ostateczny środek: **artykuł 155**. Jeśli wspólnota **poważnie narusza** swoje obowiązki konstytucyjne albo godzi w interes ogólny Hiszpanii, rząd może ją wezwać, a jeśli wezwania nie usłucha — przyjąć środki za **zgodą Senatu wyrażoną bezwzględną większością**. Zastosowano go po raz pierwszy w 2017 roku.",
  "¿Qué es un Estatuto de Autonomía?": "Czym jest Statut Autonomii?",
  "Un reglamento del Gobierno autonómico": "Rozporządzeniem rządu wspólnoty",
  "La norma institucional básica de la comunidad, aprobada como ley orgánica":
    "Podstawową normą ustrojową wspólnoty, uchwaloną jako ustawa organiczna",
  "Un acuerdo entre comunidades vecinas": "Porozumieniem między sąsiednimi wspólnotami",
  "La constitución propia de cada comunidad": "Własną konstytucją każdej wspólnoty",
  "Es a la vez norma autonómica y ley orgánica estatal, y por eso su reforma exige el acuerdo de la comunidad y de las Cortes Generales. Constitución solo hay una.":
    "Jest zarazem normą wspólnotową i państwową ustawą organiczną, i dlatego jego zmiana wymaga zgody wspólnoty i Cortes Generales. Konstytucja jest tylko jedna.",
  "**Provincia** y **comunidad autónoma** no son lo mismo. Hay **cincuenta provincias** y diecisiete comunidades: siete de ellas son **uniprovinciales**, como Madrid, Murcia o Asturias, y en esos casos la comunidad absorbió las funciones de la diputación.":
    "**Prowincja** i **wspólnota autonomiczna** to nie to samo. Jest **pięćdziesiąt prowincji** i siedemnaście wspólnot: siedem z nich to wspólnoty **jednoprowincjonalne**, jak Madryt, Murcja czy Asturia, a w tych przypadkach wspólnota przejęła funkcje rady prowincji.",
  "El territorio": "Terytorium",
  "Por qué importa: España es el país más montañoso de Europa después de Suiza, y eso explica su clima, su reparto de población y por qué durante siglos fue tan difícil de gobernar desde un solo sitio.":
    "Dlaczego to ważne: Hiszpania jest najbardziej górzystym krajem Europy po Szwajcarii, a to tłumaczy jej klimat, rozkład ludności i to, dlaczego przez stulecia tak trudno było nią rządzić z jednego miejsca.",
  "Una meseta rodeada de sierras": "Płaskowyż otoczony pasmami",
  "El territorio ocupa unos **505.000 kilómetros cuadrados**, lo que hace de España el **segundo país más extenso de la Unión Europea** tras Francia, con algo menos de **cincuenta millones** de habitantes.":
    "Terytorium zajmuje około **505 000 kilometrów kwadratowych**, co czyni Hiszpanię **drugim co do wielkości krajem Unii Europejskiej** po Francji, z niewiele mniej niż **pięćdziesięcioma milionami** mieszkańców.",
  "En el centro está la **Meseta Central**, una llanura elevada a más de seiscientos metros y partida en dos por el **Sistema Central**. La rodean cordilleras por casi todos lados, y esa altitud media —de las más altas de Europa— es la razón de que el interior tenga inviernos duros pese a la latitud.":
    "W środku leży **Meseta Central**, wyniesiona na ponad sześćset metrów równina, przecięta na dwoje przez **Sistema Central**. Otaczają ją pasma niemal ze wszystkich stron, a ta średnia wysokość — jedna z najwyższych w Europie — jest powodem, dla którego wnętrze kraju ma ostre zimy mimo szerokości geograficznej.",
  "Los Pirineos": "Pireneje",
  "Frontera con Francia y Andorra, de mar a mar. Aíslan la Península del resto del continente.":
    "Granica z Francją i Andorą, od morza do morza. Odcinają Półwysep od reszty kontynentu.",
  "La Cordillera Cantábrica": "Góry Kantabryjskie",
  "Cierra el norte y separa la España húmeda de la seca. Los Picos de Europa son su tramo más alto.":
    "Zamykają północ i oddzielają Hiszpanię wilgotną od suchej. Picos de Europa to ich najwyższy odcinek.",
  "Los Sistemas Béticos": "Systemy Betyckie",
  "En el sur, con Sierra Nevada y el Mulhacén, de 3.479 metros: el pico más alto de la Península.":
    "Na południu, z Sierra Nevada i Mulhacénem, 3479 metrów: najwyższym szczytem Półwyspu.",
  "El Teide": "Teide",
  "En Tenerife, 3.715 metros. Es el punto más alto de España, y está en el Atlántico, no en la Península.":
    "Na Teneryfie, 3715 metrów. To najwyższy punkt Hiszpanii i leży na Atlantyku, a nie na Półwyspie.",
  "¿Cuál es el pico más alto de España?": "Który szczyt jest najwyższy w Hiszpanii?",
  "El Mulhacén": "Mulhacén",
  "El Aneto": "Aneto",
  "El Naranjo de Bulnes": "Naranjo de Bulnes",
  "El Teide, en Tenerife, con 3.715 metros. El Mulhacén, en Sierra Nevada, es el más alto de la Península con 3.479, y el Aneto el más alto de los Pirineos.":
    "Teide na Teneryfie, 3715 metrów. Mulhacén w Sierra Nevada jest najwyższy na Półwyspie, 3479, a Aneto najwyższy w Pirenejach.",
  "Los ríos": "Rzeki",
  "Los ríos se reparten en tres **vertientes**. La **cantábrica** tiene ríos cortos y caudalosos. La **atlántica** recoge los grandes: el **Tajo**, el más largo de la Península, que desemboca en Lisboa; el **Duero**; el **Guadiana**; y el **Guadalquivir**, el único navegable, hasta Sevilla. La **mediterránea** es la más seca salvo por el **Ebro**, el de mayor caudal de España.":
    "Rzeki rozkładają się na trzy **zlewiska**. **Kantabryjskie** ma rzeki krótkie i wartkie. **Atlantyckie** zbiera te wielkie: **Tag**, najdłuższy na Półwyspie, uchodzący w Lizbonie; **Duero**; **Gwadianę**; i **Gwadalkiwir**, jedyny żeglowny, aż do Sewilli. **Śródziemnomorskie** jest najsuchsze, poza **Ebro**, rzeką o największym przepływie w Hiszpanii.",
  "Que los grandes ríos vayan al Atlántico y desemboquen dos de ellos en Portugal tiene consecuencias prácticas: el agua es un asunto compartido con el país vecino, y el sureste peninsular, el más seco de Europa continental, depende de trasvases y desaladoras.":
    "To, że wielkie rzeki płyną ku Atlantykowi, a dwie z nich uchodzą w Portugalii, ma praktyczne skutki: woda jest sprawą dzieloną z sąsiednim krajem, a południowy wschód Półwyspu, najsuchszy w Europie kontynentalnej, zależy od przerzutów wody i odsalarni.",
  "¿Cuál es el río más largo de la Península Ibérica?":
    "Która rzeka jest najdłuższa na Półwyspie Iberyjskim?",
  "El Ebro": "Ebro",
  "El Tajo": "Tag",
  "El Duero": "Duero",
  "El Guadalquivir": "Gwadalkiwir",
  "El Tajo, que desemboca en Lisboa. El Ebro es el de mayor caudal y el Guadalquivir el único navegable, hasta Sevilla: tres ríos y tres primeros puestos distintos.":
    "Tag, który uchodzi w Lizbonie. Ebro ma największy przepływ, a Gwadalkiwir jest jedyną żeglowną, aż do Sewilli: trzy rzeki i trzy różne pierwsze miejsca.",
  "Las islas y África": "Wyspy i Afryka",
  "Las **Islas Baleares** están en el Mediterráneo; las **Canarias**, en el Atlántico, frente a la costa africana y a unos mil quinientos kilómetros de la Península. Son de origen **volcánico**, y el volcán sigue activo: la erupción de La Palma de 2021 lo recordó.":
    "**Baleary** leżą na Morzu Śródziemnym; **Wyspy Kanaryjskie** na Atlantyku, naprzeciw wybrzeża afrykańskiego i około tysiąca pięciuset kilometrów od Półwyspu. Są pochodzenia **wulkanicznego**, a wulkan wciąż jest czynny: przypomniał o tym wybuch na La Palmie w 2021 roku.",
  "**Ceuta** y **Melilla** están en el norte de África y son las **únicas fronteras terrestres** de la Unión Europea con el continente africano. España limita además con **Portugal**, **Francia**, **Andorra** y el territorio británico de **Gibraltar**.":
    "**Ceuta** i **Melilla** leżą w północnej Afryce i są **jedynymi lądowymi granicami** Unii Europejskiej z kontynentem afrykańskim. Hiszpania graniczy ponadto z **Portugalią**, **Francją**, **Andorą** i brytyjskim terytorium **Gibraltaru**.",
  "Los climas": "Klimaty",
  "El clima **mediterráneo** domina la mayor parte, con veranos secos y calurosos. El norte y el noroeste tienen clima **oceánico**, húmedo y templado: es la llamada España verde. El interior conserva el mediterráneo pero **continentalizado**, con más frío y más calor. El sureste es **semiárido** —Almería tiene el único desierto de Europa continental— y las **Canarias** son **subtropicales**, con temperaturas suaves todo el año.":
    "Klimat **śródziemnomorski** panuje na większości obszaru, z suchymi i gorącymi latami. Północ i północny zachód mają klimat **oceaniczny**, wilgotny i umiarkowany: to tak zwana zielona Hiszpania. Wnętrze zachowuje śródziemnomorski, ale **skontynentalizowany**, z większym zimnem i większym upałem. Południowy wschód jest **półpustynny** — Almería ma jedyną pustynię Europy kontynentalnej — a **Wyspy Kanaryjskie** są **subtropikalne**, z łagodnymi temperaturami przez cały rok.",
  "¿Qué tipo de clima tienen las Islas Canarias?": "Jaki klimat mają Wyspy Kanaryjskie?",
  "Oceánico": "Oceaniczny",
  "Continental": "Kontynentalny",
  "Subtropical": "Subtropikalny",
  "Semiárido": "Półpustynny",
  "Subtropical, con temperaturas suaves durante todo el año por su latitud y por la corriente marina. El oceánico corresponde al norte peninsular y el semiárido al sureste.":
    "Subtropikalny, z łagodnymi temperaturami przez cały rok, dzięki szerokości geograficznej i prądowi morskiemu. Oceaniczny odpowiada północy Półwyspu, a półpustynny południowemu wschodowi.",
  "Las Canarias están a unos **mil quinientos kilómetros** de la Península y tienen **una hora menos** que el resto del país. Es la única parte de España en otro huso horario.":
    "Wyspy Kanaryjskie leżą około **tysiąca pięciuset kilometrów** od Półwyspu i mają **godzinę mniej** niż reszta kraju. To jedyna część Hiszpanii w innej strefie czasowej.",
  "Las lenguas de España": "Języki Hiszpanii",
  "Por qué importa: en España se habla castellano en todas partes y otras cuatro lenguas son oficiales en su territorio. No es una curiosidad regional: está en el artículo 3 y organiza escuelas, administraciones y medios enteros.":
    "Dlaczego to ważne: w Hiszpanii wszędzie mówi się po kastylijsku, a cztery inne języki są urzędowe na swoim terenie. To nie regionalna ciekawostka: stoi w artykule 3 i organizuje całe szkoły, urzędy i media.",
  "Lo que dice el artículo 3": "Co mówi artykuł 3",
  "Tiene tres apartados y conviene leerlos juntos. El primero: el **castellano** es la lengua española oficial del Estado, y todos los españoles tienen el **deber de conocerla** y el **derecho a usarla**. El segundo: las **demás lenguas españolas** serán también oficiales en sus comunidades **de acuerdo con sus estatutos**. El tercero: la riqueza de las modalidades lingüísticas es un **patrimonio cultural** objeto de especial respeto y protección.":
    "Ma trzy ustępy i lepiej czytać je razem. Pierwszy: **kastylijski** jest hiszpańskim językiem urzędowym państwa, a wszyscy Hiszpanie mają **obowiązek go znać** i **prawo się nim posługiwać**. Drugi: **pozostałe języki hiszpańskie** będą również urzędowe we własnych wspólnotach **zgodnie z ich statutami**. Trzeci: bogactwo odmian językowych jest **dziedzictwem kulturowym** objętym szczególnym szacunkiem i ochroną.",
  "El deber de conocer se predica **solo del castellano**, y esa asimetría es deliberada. La cooficialidad, en cambio, no la decide el Estado en abstracto: la remite a cada estatuto.":
    "Obowiązek znajomości dotyczy **wyłącznie kastylijskiego** i ta asymetria jest zamierzona. Dwujęzyczności urzędowej państwo nie rozstrzyga natomiast w oderwaniu: odsyła ją do każdego statutu.",
  "Catalán": "Kataloński",
  "Oficial en Cataluña y en las Illes Balears, y en la Comunidad Valenciana con la denominación de valenciano que fija su estatuto.":
    "Urzędowy w Katalonii i na Balearach, a we Wspólnocie Walenckiej pod nazwą walencki, którą ustala jej statut.",
  "Gallego": "Galicyjski",
  "Oficial en Galicia. Comparte origen con el portugués: ambos vienen del galaicoportugués medieval.":
    "Urzędowy w Galicji. Ma wspólne pochodzenie z portugalskim: oba wywodzą się ze średniowiecznego galicyjsko-portugalskiego.",
  "Euskera": "Baskijski",
  "Oficial en el País Vasco y en la zona vascófona de Navarra, donde el régimen lingüístico varía por comarcas.":
    "Urzędowy w Kraju Basków i w baskijskojęzycznej strefie Nawarry, gdzie ustrój językowy zmienia się od okręgu do okręgu.",
  "Aranés": "Arański",
  "Una variedad del occitano, oficial en toda Cataluña desde 2006 y propia del Valle de Arán, donde lo habla unos pocos miles de personas.":
    "Odmiana oksytańskiego, urzędowa w całej Katalonii od 2006 roku i własna dla Doliny Aranu, gdzie mówi nią kilka tysięcy osób.",
  "¿En qué valle se habla el aranés?": "W której dolinie mówi się po arańsku?",
  "En el Valle de Arán": "W Dolinie Aranu",
  "En el Valle del Roncal": "W Dolinie Roncal",
  "En el Valle de Benasque": "W Dolinie Benasque",
  "En el Valle de Ansó": "W Dolinie Ansó",
  "En el Valle de Arán, en el Pirineo de Lérida, y es una variedad del occitano. Es la lengua oficial con menos hablantes de España, unos pocos miles.":
    "W Dolinie Aranu, w Pirenejach lleidzkich, i jest odmianą oksytańskiego. To urzędowy język Hiszpanii o najmniejszej liczbie mówiących, kilka tysięcy.",
  "El euskera, aparte": "Baskijski, osobno",
  "El castellano, el catalán y el gallego vienen del **latín**, como el portugués, el francés o el italiano. El **euskera no**: es una lengua **anterior a la llegada de Roma**, sin parentesco demostrado con ninguna lengua viva. Sobrevivió al latín en un rincón del continente donde todas las demás lenguas prerromanas desaparecieron.":
    "Kastylijski, kataloński i galicyjski pochodzą z **łaciny**, tak jak portugalski, francuski czy włoski. **Baskijski nie**: to język **starszy niż przybycie Rzymu**, bez dowiedzionego pokrewieństwa z jakimkolwiek żywym językiem. Przetrwał łacinę w zakątku kontynentu, gdzie wszystkie inne języki przedrzymskie zniknęły.",
  "No tuvo un estándar escrito unificado hasta el siglo XX: el **euskera batua**, fijado desde los años sesenta, es lo que se enseña hoy en la escuela, sobre los distintos dialectos históricos.":
    "Nie miał ujednoliconego standardu pisanego aż do XX wieku: **euskera batua**, ustalony od lat sześćdziesiątych, jest tym, czego uczy się dziś w szkole, ponad historycznymi dialektami.",
  "¿Cuál de estas lenguas NO procede del latín?": "Który z tych języków NIE pochodzi z łaciny?",
  "El catalán": "Kataloński",
  "El gallego": "Galicyjski",
  "El euskera": "Baskijski",
  "El aranés": "Arański",
  "El euskera es anterior a Roma y no tiene parentesco conocido con ninguna lengua viva. Las otras tres son romances, igual que el castellano.":
    "Baskijski jest starszy niż Rzym i nie ma znanego pokrewieństwa z żadnym żywym językiem. Pozostałe trzy są romańskie, tak jak kastylijski.",
  "Lo que se protege sin ser oficial": "Co jest chronione, nie będąc urzędowym",
  "El tercer apartado del artículo 3 cubre hablas que **no son cooficiales** pero sí objeto de protección: el **asturiano**, llamado también bable, el **aragonés** en el Pirineo, el **leonés**, la **fala** extremeña o el **caló**. Sus estatutos y sus leyes autonómicas les dan grados distintos de reconocimiento, siempre por debajo de la oficialidad.":
    "Trzeci ustęp artykułu 3 obejmuje mowy, które **nie są współurzędowe**, ale są przedmiotem ochrony: **asturyjski**, zwany też bable, **aragoński** w Pirenejach, **leoński**, estremadurska **fala** czy **caló**. Ich statuty i ustawy wspólnotowe dają im różne stopnie uznania, zawsze poniżej urzędowości.",
  "El español fuera de España": "Hiszpański poza Hiszpanią",
  "El español lo hablan alrededor de **seiscientos millones** de personas y es la **segunda lengua materna del mundo** por número de hablantes, después del chino mandarín. La mayoría de ellos no vive en España: el país que más hispanohablantes tiene es **México**.":
    "Hiszpańskim mówi około **sześciuset milionów** osób i jest **drugim językiem ojczystym świata** pod względem liczby mówiących, po chińskim mandaryńskim. Większość z nich nie mieszka w Hiszpanii: krajem o największej liczbie hiszpańskojęzycznych jest **Meksyk**.",
  "Por eso la norma no se decide en Madrid a solas. La **Real Academia Española** trabaja con las **veintidós academias** de América y Filipinas en la **Asociación de Academias de la Lengua Española**, y los diccionarios y gramáticas se publican en común. Es lo que se llama **política panhispánica**. La difusión de la lengua fuera corresponde al **Instituto Cervantes**, que es además quien administra las pruebas para la nacionalidad.":
    "Dlatego normy nie ustala się w samym Madrycie. **Real Academia Española** pracuje z **dwudziestoma dwiema akademiami** Ameryki i Filipin w **Stowarzyszeniu Akademii Języka Hiszpańskiego**, a słowniki i gramatyki wydaje się wspólnie. To właśnie nazywa się **polityką panhiszpańską**. Za szerzenie języka poza krajem odpowiada **Instituto Cervantes**, który zarazem przeprowadza egzaminy do obywatelstwa.",
  "¿Qué establece el artículo 3 respecto al castellano?":
    "Co artykuł 3 stanowi co do kastylijskiego?",
  "Solo el derecho a usarlo": "Tylko prawo do posługiwania się nim",
  "El deber de conocerlo y el derecho a usarlo":
    "Obowiązek jego znajomości i prawo do posługiwania się nim",
  "El deber de conocerlo, sin más": "Obowiązek jego znajomości, i nic więcej",
  "Que su uso es voluntario en las comunidades con lengua propia":
    "Że jego używanie jest dobrowolne we wspólnotach z własnym językiem",
  "Deber de conocer y derecho a usar, y solo respecto del castellano. Para las demás lenguas oficiales la Constitución remite a los estatutos, sin imponer un deber equivalente.":
    "Obowiązek znajomości i prawo używania, i tylko co do kastylijskiego. Przy pozostałych językach urzędowych Konstytucja odsyła do statutów, nie nakładając równoważnego obowiązku.",
  "**Español** y **castellano** designan la misma lengua. La Constitución emplea castellano, precisamente porque las otras lenguas de España también son españolas; en América y en el uso internacional predomina español.":
    "**Español** i **castellano** oznaczają ten sam język. Konstytucja używa słowa castellano właśnie dlatego, że pozostałe języki Hiszpanii też są hiszpańskie; w Ameryce i w użyciu międzynarodowym przeważa español.",
  "La economía y España en Europa": "Gospodarka i Hiszpania w Europie",
  "Por qué importa: en cuarenta años España pasó de pedir la entrada en Europa a ser una de sus mayores economías. Y arrastra desde entonces un problema que no ha resuelto ningún gobierno: el paro.":
    "Dlaczego to ważne: w czterdzieści lat Hiszpania przeszła od proszenia o wejście do Europy do bycia jedną z jej największych gospodarek. I ciągnie od tamtej pory problem, którego nie rozwiązał żaden rząd: bezrobocie.",
  "De qué vive el país": "Z czego kraj żyje",
  "Los **servicios** son con diferencia el sector mayor, y dentro de ellos el **turismo**: España está año tras año entre los primeros destinos del mundo por número de visitantes, con la costa, las islas y las ciudades históricas como principales reclamos.":
    "**Usługi** są zdecydowanie największym sektorem, a wewnątrz nich **turystyka**: Hiszpania rok w rok mieści się wśród pierwszych kierunków świata pod względem liczby odwiedzających, z wybrzeżem, wyspami i miastami historycznymi jako głównymi magnesami.",
  "Aceite de oliva": "Oliwa z oliwek",
  "España es el primer productor mundial, muy por delante del segundo. Jaén sola produce más que países enteros.":
    "Hiszpania jest pierwszym producentem świata, daleko przed drugim. Sama Jaén produkuje więcej niż całe państwa.",
  "Frutas y hortalizas": "Owoce i warzywa",
  "El invernadero de Almería abastece a buena parte de Europa en invierno, y los cítricos valencianos tienen mercado propio.":
    "Szklarnie Almeríi zaopatrują zimą sporą część Europy, a cytrusy walenckie mają własny rynek.",
  "Automóvil": "Samochody",
  "Uno de los mayores fabricantes de Europa, aunque sin marcas propias: las plantas son de grupos extranjeros.":
    "Jeden z największych producentów Europy, choć bez własnych marek: zakłady należą do grup zagranicznych.",
  "Renovables": "Odnawialne źródła",
  "La eólica y la solar tienen un peso creciente en la generación eléctrica, favorecidas por el viento del interior y las horas de sol.":
    "Energetyka wiatrowa i słoneczna mają rosnący udział w wytwarzaniu prądu, sprzyjają im wiatr w głębi lądu i godziny słońca.",
  "¿De qué producto es España el primer productor mundial?":
    "Którego produktu Hiszpania jest pierwszym producentem świata?",
  "Del vino": "Wina",
  "Del aceite de oliva": "Oliwy z oliwek",
  "Del arroz": "Ryżu",
  "Del azúcar": "Cukru",
  "Del aceite de oliva, con diferencia sobre el segundo. En vino está entre los primeros del mundo por superficie de viñedo, pero no encabeza la producción todos los años.":
    "Oliwy z oliwek, z dużą przewagą nad drugim. W winie Hiszpania mieści się wśród pierwszych na świecie pod względem powierzchni winnic, ale nie co roku prowadzi w produkcji.",
  "Los problemas de fondo": "Problemy u podstaw",
  "El **paro** es el más persistente. La tasa española ha estado sistemáticamente por encima de la media europea durante décadas, con dos rasgos añadidos: el **desempleo juvenil**, que en las crisis ha llegado a duplicar la tasa general, y la **temporalidad**, la proporción de contratos de duración limitada.":
    "**Bezrobocie** jest najbardziej uporczywe. Hiszpańska stopa od dziesięcioleci systematycznie przewyższa średnią europejską, z dwiema dodatkowymi cechami: **bezrobociem młodych**, które w kryzysach dochodziło do podwojenia stopy ogólnej, i **tymczasowością**, czyli udziałem umów na czas określony.",
  "El segundo es **territorial**. Buena parte del interior se ha ido despoblando durante generaciones, y a ese fenómeno se lo llama desde hace unos años la **España vaciada**: provincias enteras con menos de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "Drugi jest **terytorialny**. Spora część wnętrza kraju wyludniała się przez pokolenia, a to zjawisko od kilku lat nazywa się **España vaciada**, Hiszpanią opróżnioną: całe prowincje z mniej niż dziesięcioma mieszkańcami na kilometr kwadratowy, podczas gdy wybrzeże i wielkie miasta skupiają wzrost.",
  "El tercero es **demográfico**: la natalidad es de las más bajas de Europa y la esperanza de vida de las más altas del mundo, una combinación que tensiona el sistema de pensiones a largo plazo.":
    "Trzeci jest **demograficzny**: dzietność należy do najniższych w Europie, a oczekiwana długość życia do najwyższych na świecie, i to połączenie napina system emerytalny na dłuższą metę.",
  "¿Qué se conoce como la España vaciada?": "Co nazywa się España vaciada?",
  "Las ciudades que perdieron población en la crisis de 2008":
    "Miasta, które straciły ludność w kryzysie 2008 roku",
  "Las zonas del interior que llevan generaciones despoblándose":
    "Obszary wnętrza kraju, które wyludniają się od pokoleń",
  "Los pueblos abandonados tras la Guerra Civil": "Wsie opuszczone po wojnie domowej",
  "Las comarcas sin cobertura de internet": "Okolice bez zasięgu internetu",
  "Provincias enteras del interior con densidades por debajo de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "Całe prowincje wnętrza kraju o gęstości poniżej dziesięciu mieszkańców na kilometr kwadratowy, podczas gdy wybrzeże i wielkie miasta skupiają wzrost.",
  "España en Europa": "Hiszpania w Europie",
  "La entrada en la **Comunidad Económica Europea** el **1 de enero de 1986**, junto con Portugal, fue el mayor cambio económico del periodo democrático. Los **fondos estructurales y de cohesión** financiaron carreteras, depuradoras, universidades y trenes, y el mercado único reorientó el comercio exterior hacia Europa.":
    "Wejście do **Europejskiej Wspólnoty Gospodarczej** **1 stycznia 1986 roku**, razem z Portugalią, było największą zmianą gospodarczą okresu demokratycznego. **Fundusze strukturalne i spójności** sfinansowały drogi, oczyszczalnie, uniwersytety i pociągi, a jednolity rynek przekierował handel zagraniczny ku Europie.",
  "España forma parte del **euro** desde su creación, del espacio **Schengen**, y está en la **OTAN** desde **1982**, confirmada por el referéndum de 1986. En la **ONU** entró en **1955**.":
    "Hiszpania należy do **strefy euro** od jej powstania, do strefy **Schengen**, a w **NATO** jest od **1982 roku**, co potwierdziło referendum z 1986. Do **ONZ** weszła w **1955 roku**.",
  "El vínculo iberoamericano": "Więź iberoamerykańska",
  "Con América Latina el vínculo es lingüístico y también institucional: las **Cumbres Iberoamericanas** reúnen periódicamente a los jefes de Estado y de Gobierno, y existen organismos comunes en educación y cultura. Ese vínculo se refleja también en la ley: los nacionales de países iberoamericanos pueden pedir la nacionalidad tras **dos años** de residencia en lugar de diez.":
    "Z Ameryką Łacińską więź jest językowa, ale też instytucjonalna: **szczyty iberoamerykańskie** regularnie zbierają głowy państw i rządów, a w oświacie i kulturze istnieją wspólne organizacje. Ta więź odbija się także w prawie: obywatele krajów iberoamerykańskich mogą prosić o obywatelstwo po **dwóch latach** pobytu zamiast po dziesięciu.",
  "Y el flujo se ha invertido. El país del que salieron millones de emigrantes en el siglo XX cuenta hoy con varios millones de **residentes extranjeros**, procedentes sobre todo de América Latina, Europa del Este, Marruecos y la propia Unión Europea.":
    "A przepływ się odwrócił. Kraj, z którego w XX wieku wyjechały miliony emigrantów, liczy dziś kilka milionów **mieszkańców cudzoziemskich**, pochodzących przede wszystkim z Ameryki Łacińskiej, Europy Wschodniej, Maroka i samej Unii Europejskiej.",
  "¿En qué año entró España en la OTAN?": "W którym roku Hiszpania weszła do NATO?",
  "En 1975": "W 1975",
  "En 1982, y la permanencia se confirmó en el referéndum de 1986, el mismo año de la entrada en la Comunidad Económica Europea. Son dos hechos distintos que suelen juntarse.":
    "W 1982 roku, a pozostanie potwierdzono w referendum z 1986, w tym samym roku co wejście do Europejskiej Wspólnoty Gospodarczej. To dwa różne fakty, zwykle łączone.",
  "La entrada en la CEE **no** se sometió a referéndum: fue un tratado ratificado por las Cortes. Lo que se votó en 1986 fue la **permanencia en la OTAN**, y esa consulta sí fue un referéndum.":
    "Wejście do EWG **nie** było poddane referendum: to była umowa ratyfikowana przez Cortes. To, nad czym głosowano w 1986 roku, to **pozostanie w NATO**, i ta konsultacja rzeczywiście była referendum.",
  "Trabajo, contratos y Seguridad Social": "Praca, umowy i Seguridad Social",
  "Sociedad y vida cotidiana": "Społeczeństwo i życie codzienne",
  "Por qué importa: la nómina española tiene dos cifras muy distintas arriba y abajo, y entender qué pasa entre una y otra explica cómo se financian la sanidad, el paro y las pensiones.":
    "Dlaczego to ważne: hiszpański pasek płacowy ma na górze i na dole dwie bardzo różne liczby, a zrozumienie, co dzieje się między nimi, tłumaczy, jak finansuje się ochronę zdrowia, zasiłki i emerytury.",
  "Lo que dice la Constitución": "Co mówi Konstytucja",
  "El **artículo 35** reconoce el **deber y el derecho** al trabajo, a la libre elección de profesión y a una remuneración suficiente. El **artículo 28** garantiza la **libertad sindical** y el **derecho de huelga**; el **37**, la **negociación colectiva**; y el **41** obliga a mantener un régimen público de **Seguridad Social** para todos los ciudadanos.":
    "**Artykuł 35** uznaje **obowiązek i prawo** do pracy, do swobodnego wyboru zawodu i do wystarczającego wynagrodzenia. **Artykuł 28** gwarantuje **wolność związkową** i **prawo do strajku**; **37** — **rokowania zbiorowe**; a **41** zobowiązuje do utrzymywania publicznego systemu **Seguridad Social** dla wszystkich obywateli.",
  "La norma que lo desarrolla es el **Estatuto de los Trabajadores**, y por debajo de él están los **convenios colectivos**, que pueden ser de sector o de empresa y mejorar siempre lo que la ley fija como mínimo.":
    "Normą, która to rozwija, jest **Estatuto de los Trabajadores**, a poniżej niego stoją **układy zbiorowe**, które mogą być branżowe albo zakładowe i zawsze poprawiają to, co ustawa ustala jako minimum.",
  "El salario mínimo": "Płaca minimalna",
  "España **sí tiene un salario mínimo legal**: el **salario mínimo interprofesional**, que el **Gobierno fija cada año** por real decreto, previa consulta a sindicatos y organizaciones empresariales. Se expresa por día, por mes y por año, y se refiere a la jornada completa.":
    "Hiszpania **ma ustawową płacę minimalną**: **salario mínimo interprofesional**, który **rząd ustala co roku** dekretem królewskim, po konsultacji ze związkami zawodowymi i organizacjami pracodawców. Wyraża się go dziennie, miesięcznie i rocznie, i odnosi się do pełnego wymiaru czasu pracy.",
  "Es una diferencia real con otros países del sur de Europa, donde los mínimos solo existen dentro de los convenios. Aquí el convenio puede subir el suelo, nunca bajarlo.":
    "To rzeczywista różnica wobec innych krajów południa Europy, gdzie minima istnieją tylko wewnątrz układów. Tutaj układ może podnieść próg, nigdy go obniżyć.",
  "¿Quién fija el salario mínimo en España?": "Kto ustala w Hiszpanii płacę minimalną?",
  "Cada convenio colectivo, sector por sector": "Każdy układ zbiorowy, branża po branży",
  "El Gobierno, cada año, por real decreto": "Rząd, co roku, dekretem królewskim",
  "No existe salario mínimo legal": "Ustawowa płaca minimalna nie istnieje",
  "El salario mínimo interprofesional lo fija el Gobierno previa consulta a sindicatos y empresarios. Los convenios pueden mejorarlo pero nunca quedar por debajo.":
    "Salario mínimo interprofesional ustala rząd po konsultacji ze związkami i pracodawcami. Układy mogą go poprawić, ale nigdy zejść poniżej.",
  "El contrato y la jornada": "Umowa i czas pracy",
  "Indefinido": "Na czas nieokreślony",
  "Sin fecha de fin. Es la forma de referencia desde la reforma de 2021, que restringió el uso del contrato temporal.":
    "Bez daty końca. To forma odniesienia od reformy z 2021 roku, która ograniczyła stosowanie umów terminowych.",
  "Temporal": "Na czas określony",
  "Solo por causas tasadas: circunstancias de la producción o sustitución de una persona con derecho a reserva del puesto.":
    "Tylko z przyczyn wyliczonych w ustawie: okoliczności produkcyjne albo zastępstwo osoby z prawem do powrotu na stanowisko.",
  "Fijo discontinuo": "Stała praca sezonowa",
  "Indefinido pero para trabajos estacionales o intermitentes. Se llama a la persona cada temporada.":
    "Na czas nieokreślony, ale do prac sezonowych albo przerywanych. Osobę wzywa się co sezon.",
  "Autónomo": "Samozatrudnienie",
  "No es un contrato sino un régimen: se factura, y se pagan por cuenta propia impuestos y cotización.":
    "To nie umowa, lecz tryb: wystawia się faktury, a podatki i składki płaci się na własny rachunek.",
  "La **jornada máxima** es de **cuarenta horas semanales** de promedio en cómputo anual, y las **vacaciones** mínimas son de **treinta días naturales** al año, que no pueden sustituirse por dinero. Las horas extraordinarias tienen tope legal.":
    "**Maksymalny czas pracy** to **czterdzieści godzin tygodniowo** średnio w rozliczeniu rocznym, a minimalny **urlop** to **trzydzieści dni kalendarzowych** w roku, których nie da się zamienić na pieniądze. Nadgodziny mają ustawowy limit.",
  "¿Cuántos días de vacaciones al año garantiza como mínimo la ley?":
    "Ile dni urlopu w roku gwarantuje ustawa jako minimum?",
  "Veintiuno naturales": "Dwadzieścia jeden kalendarzowych",
  "Veintidós hábiles o treinta naturales":
    "Dwadzieścia dwa robocze albo trzydzieści kalendarzowych",
  "Cuarenta y cinco naturales": "Czterdzieści pięć kalendarzowych",
  "Los que fije cada empresa": "Tyle, ile ustali każda firma",
  "Treinta días naturales, que equivalen a los veintidós hábiles con que suelen contarse. No pueden cambiarse por dinero: el descanso es obligatorio.":
    "Trzydzieści dni kalendarzowych, co odpowiada dwudziestu dwóm roboczym, którymi zwykle się je liczy. Nie można ich zamienić na pieniądze: odpoczynek jest obowiązkowy.",
  "La nómina": "Pasek płacowy",
  "Entre el **bruto** y el **neto** hay dos descuentos. Las **cotizaciones a la Seguridad Social**, que la persona paga en parte y la empresa en parte mucho mayor, y la **retención del IRPF**, un adelanto del impuesto sobre la renta que se ajusta al año siguiente en la **declaración**.":
    "Między **brutto** a **netto** są dwa potrącenia. **Składki na Seguridad Social**, które pracownik płaci w części, a firma w części znacznie większej, oraz **zaliczka na IRPF**, przedpłata podatku dochodowego, którą wyrównuje się w następnym roku w **zeznaniu**.",
  "Son habituales **dos pagas extraordinarias**, en junio y en diciembre, que muchos convenios permiten **prorratear** en las doce mensualidades. Al terminar un contrato se recibe el **finiquito**, con lo pendiente de vacaciones y pagas, y en algunos despidos una **indemnización** aparte.":
    "Zwyczajowe są **dwie pensje dodatkowe**, w czerwcu i w grudniu, które wiele układów pozwala **rozłożyć** na dwanaście miesięcy. Po zakończeniu umowy dostaje się **finiquito**, rozliczenie zaległego urlopu i pensji, a przy niektórych zwolnieniach dodatkowo **odprawę**.",
  "La Seguridad Social": "Seguridad Social",
  "Todo trabajador tiene un **número de afiliación** que le acompaña toda la vida. Hay dos grandes regímenes: el **general**, para quien trabaja por cuenta ajena, y el **RETA**, el régimen especial de **trabajadores autónomos**, para quien lo hace por cuenta propia.":
    "Każdy pracujący ma **numer ubezpieczenia**, który towarzyszy mu przez całe życie. Są dwa duże tryby: **ogólny**, dla pracujących na cudzy rachunek, i **RETA**, tryb szczególny **samozatrudnionych**, dla pracujących na własny rachunek.",
  "De ahí salen las prestaciones: **desempleo** —que gestiona el **SEPE** y exige haber cotizado un mínimo—, **incapacidad temporal**, **nacimiento y cuidado de menor**, y la **jubilación**. El documento que resume todo lo cotizado se llama **vida laboral** y puede pedirse en cualquier momento.":
    "Stąd biorą się świadczenia: **zasiłek dla bezrobotnych** — którym zarządza **SEPE** i który wymaga minimalnego okresu składkowego — **czasowa niezdolność do pracy**, **narodziny i opieka nad dzieckiem** oraz **emerytura**. Dokument podsumowujący wszystkie składki nazywa się **vida laboral** i można go zamówić w każdej chwili.",
  "¿Qué es el RETA?": "Czym jest RETA?",
  "El registro de contratos temporales": "Rejestrem umów na czas określony",
  "El régimen especial de trabajadores autónomos": "Trybem szczególnym samozatrudnionych",
  "La retención del IRPF en la nómina": "Zaliczką na IRPF na pasku płacowym",
  "El fondo de garantía salarial": "Funduszem gwarantowanych świadczeń pracowniczych",
  "Es el régimen de la Seguridad Social para quien trabaja por cuenta propia, frente al régimen general de quien lo hace por cuenta ajena.":
    "To tryb Seguridad Social dla pracujących na własny rachunek, w odróżnieniu od trybu ogólnego dla pracujących na cudzy rachunek.",
  "**Finiquito** e **indemnización** no son lo mismo. El finiquito se cobra siempre al terminar y liquida lo pendiente; la indemnización solo corresponde en determinados despidos, y se suma al finiquito.":
    "**Finiquito** i **odprawa** to nie to samo. Finiquito dostaje się zawsze przy zakończeniu i rozlicza to, co zaległe; odprawa należy się tylko przy określonych zwolnieniach i dochodzi do finiquito.",
  "Sanidad y educación": "Ochrona zdrowia i oświata",
  "Por qué importa: los dos servicios que más se usan viviendo en un país. Los dos son públicos y universales, y los dos los gestionan las comunidades, no el Estado: eso explica que no funcionen igual en todas partes.":
    "Dlaczego to ważne: to dwie usługi, z których korzysta się najczęściej, mieszkając w kraju. Obie są publiczne i powszechne, i obiema zarządzają wspólnoty, a nie państwo: to tłumaczy, dlaczego nie działają wszędzie tak samo.",
  "El Sistema Nacional de Salud": "Sistema Nacional de Salud",
  "El **artículo 43** reconoce el derecho a la protección de la salud. El **Sistema Nacional de Salud** es **universal** y se financia con **impuestos**, no con un seguro: no hay primas ni cuotas mensuales. La gestión corresponde a las **comunidades autónomas**, y el Estado fija las bases y coordina.":
    "**Artykuł 43** uznaje prawo do ochrony zdrowia. **Sistema Nacional de Salud** jest **powszechny** i finansuje się go z **podatków**, a nie z ubezpieczenia: nie ma składek ani miesięcznych opłat. Zarządzanie należy do **wspólnot autonomicznych**, a państwo ustala podstawy i koordynuje.",
  "La puerta de entrada es el **centro de salud** y el **médico de familia**, que atiende, receta y **deriva** al especialista. A urgencias se puede acudir directamente, y para las emergencias hay un número único en toda España y en toda Europa: el **112**.":
    "Drzwiami wejściowymi są **przychodnia** i **lekarz rodzinny**, który przyjmuje, wypisuje recepty i **kieruje** do specjalisty. Na izbę przyjęć można iść bezpośrednio, a na nagłe wypadki jest jeden numer w całej Hiszpanii i w całej Europie: **112**.",
  "La tarjeta sanitaria": "Karta zdrowia",
  "Individual y emitida por la comunidad. Es lo que identifica a la persona ante el sistema; cambia si se cambia de comunidad.":
    "Indywidualna i wydawana przez wspólnotę. To ona identyfikuje osobę wobec systemu; zmienia się przy przeprowadzce do innej wspólnoty.",
  "La receta electrónica": "Recepta elektroniczna",
  "El médico prescribe en el sistema y la farmacia lee la tarjeta. Ya casi no se usa el papel.":
    "Lekarz wypisuje ją w systemie, a apteka odczytuje kartę. Papieru prawie się już nie używa.",
  "El copago farmacéutico": "Dopłata do leków",
  "Una parte del precio del medicamento a cargo del paciente, en porcentaje según la renta. Los pensionistas tienen topes mensuales.":
    "Część ceny leku po stronie pacjenta, w procencie zależnym od dochodu. Emeryci mają miesięczne limity.",
  "Las farmacias": "Apteki",
  "Establecimientos privados con licencia y horarios regulados. Siempre hay una de guardia abierta en cada zona.":
    "Prywatne placówki z koncesją i regulowanymi godzinami. W każdej okolicy zawsze jedna ma dyżur.",
  "¿Qué número se marca en España para una emergencia?":
    "Który numer wybiera się w Hiszpanii w nagłym wypadku?",
  "El 091": "091",
  "El 112": "112",
  "El 061": "061",
  "El 080": "080",
  "El 112 es el número único de emergencias en toda España y en toda la Unión Europea, y coordina policía, bomberos y ambulancias. Los otros son teléfonos de servicios concretos.":
    "112 to jeden numer alarmowy w całej Hiszpanii i w całej Unii Europejskiej, koordynujący policję, straż pożarną i pogotowie. Pozostałe to telefony konkretnych służb.",
  "La escuela": "Szkoła",
  "El **artículo 27** reconoce el derecho a la educación y declara la enseñanza básica **obligatoria y gratuita**. La obligatoriedad va de los **seis a los dieciséis años**, y también aquí gestionan las comunidades sobre unas bases estatales comunes.":
    "**Artykuł 27** uznaje prawo do nauki i ogłasza nauczanie podstawowe **obowiązkowym i bezpłatnym**. Obowiązek trwa od **szóstego do szesnastego roku życia**, a i tu zarządzają wspólnoty, na wspólnych podstawach państwowych.",
  "Infantil · 0 a 6": "Przedszkole · 0 do 6",
  "No obligatoria. El segundo ciclo, de tres a seis años, es gratuito y lo cursa la práctica totalidad de los niños.":
    "Nieobowiązkowe. Drugi cykl, od trzech do sześciu lat, jest bezpłatny i chodzi do niego praktycznie całość dzieci.",
  "Primaria · 6 a 12": "Szkoła podstawowa · 6 do 12",
  "Seis cursos, obligatoria. Es lo que en la conversación se sigue llamando el colegio.":
    "Sześć klas, obowiązkowa. To ta, którą w rozmowie wciąż nazywa się colegio.",
  "ESO · 12 a 16": "ESO · 12 do 16",
  "Cuatro cursos de Educación Secundaria Obligatoria. Al superarla se obtiene el título de Graduado en ESO.":
    "Cztery klasy obowiązkowej szkoły średniej. Po jej ukończeniu dostaje się tytuł Graduado en ESO.",
  "Bachillerato o FP · 16 a 18": "Bachillerato albo FP · 16 do 18",
  "Dos años de Bachillerato, o Formación Profesional de grado medio. Ninguna de las dos es obligatoria.":
    "Dwa lata Bachillerato albo kształcenie zawodowe stopnia średniego. Żadne z nich nie jest obowiązkowe.",
  "Para entrar en la universidad hay que superar el Bachillerato y una prueba de acceso, conocida durante décadas como **selectividad** y hoy con siglas que han ido cambiando. La universidad se organiza en **grado**, de cuatro años en la mayoría de las carreras, **máster** y **doctorado**.":
    "Żeby wejść na uniwersytet, trzeba ukończyć Bachillerato i zdać egzamin wstępny, przez dziesięciolecia znany jako **selectividad**, a dziś kryjący się pod zmieniającymi się skrótami. Uniwersytet dzieli się na **grado**, cztery lata na większości kierunków, **máster** i **doctorado**.",
  "¿Qué título se obtiene al terminar la enseñanza obligatoria?":
    "Jaki tytuł uzyskuje się po ukończeniu nauki obowiązkowej?",
  "El Bachillerato": "Bachillerato",
  "El Graduado en ESO": "Graduado en ESO",
  "El certificado de escolaridad": "Zaświadczenie o uczęszczaniu do szkoły",
  "El grado universitario": "Dyplom studiów uniwersyteckich",
  "El título de Graduado en Educación Secundaria Obligatoria, a los dieciséis años. El Bachillerato son dos cursos posteriores y no es obligatorio.":
    "Tytuł Graduado en Educación Secundaria Obligatoria, w wieku szesnastu lat. Bachillerato to dwie późniejsze klasy i nie jest obowiązkowe.",
  "Tres tipos de centro": "Trzy rodzaje placówek",
  "Los centros son **públicos**, **privados** o **concertados**. El **concertado** es la figura característica de España: un centro de titularidad **privada** —a menudo religiosa— sostenido con **fondos públicos** mediante un concierto, que a cambio no puede cobrar por la enseñanza en las etapas concertadas. Escolariza a una parte grande del alumnado, sobre todo en las ciudades.":
    "Placówki są **publiczne**, **prywatne** albo **concertado**. **Concertado** to figura charakterystyczna dla Hiszpanii: placówka **prywatna** — często kościelna — utrzymywana z **funduszy publicznych** na podstawie umowy, która w zamian nie może pobierać opłat za nauczanie na objętych umową etapach. Kształci sporą część uczniów, zwłaszcza w miastach.",
  "Las calificaciones van de **cero a diez**, y se aprueba a partir del **cinco**. En la universidad la escala es la misma, con la mención de **matrícula de honor** para las mejores notas.":
    "Oceny idą od **zera do dziesięciu**, a zdaje się od **piątki**. Na uniwersytecie skala jest ta sama, z wyróżnieniem **matrícula de honor** za najlepsze noty.",
  "¿Qué es un centro concertado?": "Czym jest centro concertado?",
  "Un centro público con horario ampliado": "Placówką publiczną o wydłużonych godzinach",
  "Un centro privado sostenido con fondos públicos":
    "Placówką prywatną utrzymywaną z funduszy publicznych",
  "Un centro que solo imparte Formación Profesional":
    "Placówką prowadzącą tylko kształcenie zawodowe",
  "Un centro para alumnos con necesidades especiales":
    "Placówką dla uczniów o specjalnych potrzebach",
  "De titularidad privada y financiación pública mediante concierto, y por eso no puede cobrar por la enseñanza en las etapas concertadas. Es una figura característica del sistema español.":
    "Własność prywatna, finansowanie publiczne na podstawie umowy, i dlatego nie wolno jej pobierać opłat za nauczanie na objętych umową etapach. To figura charakterystyczna dla systemu hiszpańskiego.",
  "La **tarjeta sanitaria** la emite la comunidad autónoma, no el Estado: al mudarse de comunidad hay que **cambiar de tarjeta y de médico**. La atención está garantizada en toda España, pero el trámite es autonómico.":
    "**Kartę zdrowia** wydaje wspólnota autonomiczna, a nie państwo: przy przeprowadzce do innej wspólnoty trzeba **zmienić kartę i lekarza**. Opieka jest zapewniona w całej Hiszpanii, ale formalność jest wspólnotowa.",
  "Vivir en España": "Życie w Hiszpanii",
  "Por qué importa: esta es la lección práctica. Ninguna de las pruebas que aquí se mencionan versa sobre historia, y este curso no prepara para ninguna de ellas: sirven para saber qué pide el Estado, y a quién.":
    "Dlaczego to ważne: to lekcja praktyczna. Żadna z wymienionych tu procedur nie dotyczy historii, a ten kurs do żadnej z nich nie przygotowuje: służą temu, żeby wiedzieć, czego państwo wymaga i od kogo.",
  "El padrón, primero": "Padrón, przede wszystkim",
  "El **empadronamiento** es la inscripción en el **padrón municipal** del ayuntamiento donde se vive. Es el trámite del que dependen casi todos los demás: la **tarjeta sanitaria**, la **escolarización** de los hijos, las ayudas municipales y, para los ciudadanos de la Unión, el voto en las **municipales**.":
    "**Empadronamiento** to wpis do **padrón municipal**, ewidencji ludności gminy, w której się mieszka. To formalność, od której zależy niemal wszystko inne: **karta zdrowia**, **zapisanie dzieci do szkoły**, zasiłki gminne oraz, dla obywateli Unii, głos w wyborach **gminnych**.",
  "Tiene una particularidad que conviene conocer: el padrón registra **dónde vive** una persona, no su situación administrativa, y puede empadronarse **con independencia** de ella. El certificado de empadronamiento acredita además el tiempo de residencia, que es lo que después cuentan otros expedientes.":
    "Ma osobliwość, o której warto wiedzieć: padrón rejestruje, **gdzie ktoś mieszka**, a nie jego sytuację administracyjną, i można się wpisać **niezależnie** od niej. Zaświadczenie o wpisie potwierdza ponadto czas pobytu, a właśnie to liczą później inne wnioski.",
  "Los documentos": "Dokumenty",
  "DNI": "DNI",
  "El documento nacional de identidad de los españoles, obligatorio desde los catorce años.":
    "Dowód osobisty Hiszpanów, obowiązkowy od czternastego roku życia.",
  "NIE": "NIE",
  "El número de identidad de extranjero. No es una tarjeta sino un número, y hace falta para trabajar, abrir una cuenta o firmar un contrato.":
    "Numer identyfikacyjny cudzoziemca. To nie karta, lecz numer, i jest potrzebny do pracy, otwarcia konta czy podpisania umowy.",
  "TIE": "TIE",
  "La tarjeta de identidad de extranjero: el documento físico que acredita la autorización de residencia y lleva el NIE.":
    "Karta tożsamości cudzoziemca: fizyczny dokument potwierdzający zezwolenie na pobyt, z wydrukowanym numerem NIE.",
  "Número de la Seguridad Social": "Numer Seguridad Social",
  "Necesario para ser dado de alta en un empleo. Es distinto del NIE y no lo sustituye.":
    "Potrzebny, żeby zostać zgłoszonym do pracy. Jest inny niż NIE i go nie zastępuje.",
  "Los ciudadanos de la **Unión Europea** no necesitan permiso de residencia: se inscriben en el Registro Central de Extranjeros y obtienen un **certificado de registro**, que es un trámite más ligero.":
    "Obywatele **Unii Europejskiej** nie potrzebują zezwolenia na pobyt: wpisują się do Centralnego Rejestru Cudzoziemców i dostają **zaświadczenie o rejestracji**, co jest lżejszą formalnością.",
  "¿Qué es el empadronamiento?": "Czym jest empadronamiento?",
  "La inscripción en el padrón municipal del lugar donde se vive":
    "Wpisem do ewidencji ludności gminy, w której się mieszka",
  "El permiso de residencia": "Zezwoleniem na pobyt",
  "El alta en la Seguridad Social": "Zgłoszeniem do Seguridad Social",
  "La declaración anual de la renta": "Rocznym zeznaniem podatkowym",
  "Es un registro del ayuntamiento sobre quién vive en el municipio. De él dependen la tarjeta sanitaria, la escolarización y el certificado que acredita el tiempo de residencia.":
    "To rejestr gminy, kto mieszka na jej terenie. Od niego zależą karta zdrowia, zapisanie do szkoły i zaświadczenie potwierdzające czas pobytu.",
  "La residencia": "Pobyt",
  "Las autorizaciones de residencia y trabajo son **temporales** al principio y se renuevan. Existen además figuras de **arraigo** —social, laboral, familiar o para la formación— pensadas para quien lleva ya tiempo en el país y acredita vínculos.":
    "Zezwolenia na pobyt i pracę są na początku **czasowe** i się je odnawia. Istnieją ponadto formy **arraigo** — społeczna, pracownicza, rodzinna albo dla kształcenia — pomyślane dla tych, którzy są w kraju od pewnego czasu i wykazują więzi.",
  "Tras **cinco años** de residencia legal y continuada puede solicitarse la **residencia de larga duración**, que autoriza a residir y trabajar de forma indefinida en las mismas condiciones que los españoles, salvo en lo que la ley reserva a la nacionalidad, como el voto en las generales.":
    "Po **pięciu latach** legalnego, nieprzerwanego pobytu można wystąpić o **pobyt długoterminowy**, uprawniający do mieszkania i pracy bezterminowo na tych samych warunkach co Hiszpanie, poza tym, co ustawa zastrzega dla obywatelstwa, jak głos w wyborach parlamentarnych.",
  "¿Cuántos años de residencia legal se exigen para la residencia de larga duración?":
    "Ilu lat legalnego pobytu wymaga pobyt długoterminowy?",
  "Tres": "Trzech",
  "Cinco años, y autoriza a residir y trabajar indefinidamente. Diez es el plazo general para pedir la nacionalidad, que es un paso distinto y posterior.":
    "Pięciu lat, i uprawnia do mieszkania i pracy bezterminowo. Dziesięć to ogólny termin do wystąpienia o obywatelstwo, a to inny i późniejszy krok.",
  "Los trámites de cada día": "Codzienne formalności",
  "Buena parte de la Administración se hace ya por internet, y para ello hace falta una **identidad digital**: el sistema **Cl@ve** o un **certificado digital**. Con ellos se pide cita en la Seguridad Social, se descarga la vida laboral, se presenta la declaración de la renta o se consulta un expediente.":
    "Sporą część administracji załatwia się już przez internet, a do tego potrzebna jest **tożsamość cyfrowa**: system **Cl@ve** albo **certyfikat cyfrowy**. Z nimi umawia się wizytę w Seguridad Social, pobiera vida laboral, składa zeznanie podatkowe czy sprawdza stan sprawy.",
  "La **declaración de la renta** se presenta cada año ante la **Agencia Tributaria**, normalmente entre abril y junio, y regulariza lo que ya se fue reteniendo en la nómina: puede salir a pagar o a devolver.":
    "**Zeznanie podatkowe** składa się co roku w **Agencia Tributaria**, zwykle między kwietniem a czerwcem, i wyrównuje ono to, co już potrącono z pensji: może wyjść dopłata albo zwrot.",
  "La nacionalidad": "Obywatelstwo",
  "El expediente se tramita ante el **Ministerio de Justicia**. Además del plazo de residencia que corresponda, se exigen **buena conducta cívica** y acreditar la **integración** con las dos pruebas del **Instituto Cervantes**: el **DELE A2** de lengua —del que están exentos los nacionales de países hispanohablantes— y la **CCSE**, de conocimientos constitucionales y socioculturales.":
    "Sprawę prowadzi **Ministerstwo Sprawiedliwości**. Poza właściwym terminem pobytu wymaga się **dobrego zachowania obywatelskiego** i wykazania **integracji** dwoma egzaminami **Instituto Cervantes**: językowym **DELE A2** — z którego zwolnieni są obywatele krajów hiszpańskojęzycznych — oraz **CCSE**, z wiedzy konstytucyjnej i społeczno-kulturowej.",
  "Concedida la nacionalidad, se cierra con un acto formal: **jurar o prometer fidelidad al Rey y obediencia a la Constitución y a las leyes**, y la inscripción en el Registro Civil.":
    "Po przyznaniu obywatelstwa zamyka je akt formalny: **przysięga albo przyrzeczenie wierności Królowi oraz posłuszeństwa Konstytucji i ustawom**, a potem wpis do rejestru stanu cywilnego.",
  "¿Qué número identifica a un extranjero en España para trabajar o firmar un contrato?":
    "Który numer identyfikuje w Hiszpanii cudzoziemca przy pracy albo podpisywaniu umowy?",
  "El DNI": "DNI",
  "El NIE": "NIE",
  "El número de la Seguridad Social": "Numer Seguridad Social",
  "El número de pasaporte": "Numer paszportu",
  "El número de identidad de extranjero. La TIE es la tarjeta física que lo lleva impreso, y el número de la Seguridad Social es otro distinto, necesario además para el alta laboral.":
    "Numer identyfikacyjny cudzoziemca. TIE to fizyczna karta z nim wydrukowanym, a numer Seguridad Social jest osobny i potrzebny dodatkowo do zgłoszenia do pracy.",
  "**Residencia** y **nacionalidad** son dos cosas distintas y dos expedientes distintos. La residencia de larga duración se pide a los cinco años ante Extranjería; la nacionalidad, con el plazo que corresponda, ante el Ministerio de Justicia.":
    "**Pobyt** i **obywatelstwo** to dwie różne rzeczy i dwie różne sprawy. O pobyt długoterminowy występuje się po pięciu latach w urzędzie do spraw cudzoziemców; o obywatelstwo, po właściwym terminie, w Ministerstwie Sprawiedliwości.",
  "La vida diaria": "Życie codzienne",
  "Por qué se cierra aquí: los horarios españoles desconciertan a casi todo el que llega, y las reglas de trato no están escritas en ninguna parte. Ninguna de estas cosas es obligatoria; todas son reales.":
    "Dlaczego kończymy tutaj: hiszpańskie godziny zbijają z tropu niemal każdego przybysza, a reguły obcowania nie są nigdzie zapisane. Żadna z tych rzeczy nie jest obowiązkowa; wszystkie są prawdziwe.",
  "El reloj": "Zegar",
  "España come y cena **más tarde** que casi toda Europa: la **comida** entre las dos y las tres, la **cena** a partir de las nueve, más tarde en verano y en el sur. El desayuno es ligero —café con leche y una tostada— y a media mañana mucha gente hace un segundo desayuno, el **almuerzo**.":
    "Hiszpania je obiad i kolację **później** niż niemal cała Europa: **obiad** między drugą a trzecią, **kolacja** od dziewiątej wzwyż, później latem i na południu. Śniadanie jest lekkie — biała kawa i grzanka — a w połowie przedpołudnia wielu je drugie śniadanie, **almuerzo**.",
  "Una parte de la explicación está en el huso horario: España peninsular usa la hora de Europa central pese a estar a la longitud de Londres, de modo que el sol se pone más tarde de lo que marca el reloj. La otra parte es costumbre heredada.":
    "Część wyjaśnienia leży w strefie czasowej: półwyspowa Hiszpania używa czasu środkowoeuropejskiego, choć leży na długości Londynu, przez co słońce zachodzi później, niż wskazuje zegar. Druga część to odziedziczony zwyczaj.",
  "Muchos comercios pequeños y oficinas cierran a mediodía y reabren por la tarde: es la **jornada partida**, más común cuanto más pequeño es el municipio. La **siesta** existe, pero como costumbre de fin de semana o de verano más que como práctica diaria.":
    "Wiele małych sklepów i biur zamyka się w południe i otwiera ponownie po południu: to **jornada partida**, dzień pracy przedzielony przerwą, tym powszechniejszy, im mniejsza miejscowość. **Siesta** istnieje, ale raczej jako zwyczaj weekendowy albo letni niż codzienna praktyka.",
  "¿A qué hora se cena habitualmente en España?":
    "O której godzinie zwykle je się w Hiszpanii kolację?",
  "Entre las siete y las ocho": "Między siódmą a ósmą",
  "A partir de las nueve": "Od dziewiątej wzwyż",
  "Entre las seis y las siete": "Między szóstą a siódmą",
  "Después de medianoche": "Po północy",
  "A partir de las nueve, y más tarde en verano y en el sur. La comida principal del día es la del mediodía, entre las dos y las tres.":
    "Od dziewiątej wzwyż, a latem i na południu jeszcze później. Głównym posiłkiem dnia jest ten w południe, między drugą a trzecią.",
  "La mesa": "Stół",
  "El **menú del día** es una institución: en la mayoría de los restaurantes, al mediodía y entre semana, se ofrece primer plato, segundo, pan, bebida y postre o café a **precio fijo**. Nació de una norma de los años sesenta pensada para el turismo y se quedó como costumbre.":
    "**Menú del día** to instytucja: w większości restauracji, w południe i w dni robocze, podaje się pierwsze danie, drugie, chleb, napój i deser albo kawę w **stałej cenie**. Wzięło się z przepisu z lat sześćdziesiątych pomyślanego pod turystykę i zostało jako zwyczaj.",
  "Fuera de las comidas está el **tapeo**: ir de bar en bar tomando algo pequeño con la bebida. En algunas ciudades la tapa se sirve **incluida** con la consumición y en otras se paga aparte. Y después de comer viene la **sobremesa**, el rato de conversación con la mesa ya recogida, que puede durar más que la comida.":
    "Poza posiłkami jest **tapeo**: chodzenie od baru do baru i branie czegoś małego do picia. W jednych miastach tapa jest **wliczona** w napój, w innych płaci się za nią osobno. A po jedzeniu przychodzi **sobremesa**, czas rozmowy przy sprzątniętym już stole, który potrafi trwać dłużej niż sam posiłek.",
  "¿Qué es el menú del día?": "Czym jest menú del día?",
  "La carta completa del restaurante": "Pełną kartą restauracji",
  "Una comida completa a precio fijo, al mediodía y entre semana":
    "Pełnym posiłkiem w stałej cenie, w południe i w dni robocze",
  "El plato recomendado por el cocinero": "Daniem poleconym przez kucharza",
  "Un servicio reservado a los turistas": "Usługą zarezerwowaną dla turystów",
  "Primer plato, segundo, pan, bebida y postre o café por un precio único. Nació de una norma de los años sesenta y se quedó como costumbre del país.":
    "Pierwsze danie, drugie, chleb, napój i deser albo kawa za jedną cenę. Wzięło się z przepisu z lat sześćdziesiątych i zostało jako zwyczaj kraju.",
  "El trato": "Sposób zwracania się",
  "El **tuteo** está mucho más extendido en España que en otros países de lengua española. Se tutea a compañeros de trabajo, a camareros, a dependientes y con frecuencia a desconocidos de edad parecida. El **usted** se reserva para personas mayores, para contextos muy formales y para dirigirse a alguien de quien se quiere marcar distancia o respeto especial.":
    "**Tuteo**, mówienie na ty, jest w Hiszpanii znacznie powszechniejsze niż w innych krajach języka hiszpańskiego. Mówi się na ty do kolegów z pracy, do kelnerów, do sprzedawców i często do nieznajomych w podobnym wieku. **Usted** rezerwuje się dla osób starszych, dla sytuacji bardzo formalnych i dla kogoś, wobec kogo chce się zaznaczyć dystans albo szczególny szacunek.",
  "El saludo habitual entre conocidos, y en presentaciones informales, son **dos besos** en la mejilla, empezando por la izquierda de quien saluda. Entre hombres suele ser un apretón de manos o un abrazo. En contextos profesionales la mano es lo normal.":
    "Zwykłym powitaniem wśród znajomych i przy nieformalnych przedstawieniach są **dwa całusy** w policzek, zaczynając od lewej strony witającego. Między mężczyznami to raczej uścisk dłoni albo objęcie. W sytuacjach zawodowych normą jest podanie ręki.",
  "¿Cómo se saluda habitualmente entre conocidos en una situación informal?":
    "Jak zwykle witają się znajomi w nieformalnej sytuacji?",
  "Con una inclinación": "Ukłonem",
  "Con dos besos en la mejilla": "Dwoma całusami w policzek",
  "Sin contacto físico": "Bez kontaktu fizycznego",
  "Con tres besos": "Trzema całusami",
  "Dos besos, empezando por la izquierda de quien saluda. Entre hombres es más común el apretón de manos o el abrazo, y en el trabajo la mano es lo habitual.":
    "Dwoma całusami, zaczynając od lewej strony witającego. Między mężczyznami częstszy jest uścisk dłoni albo objęcie, a w pracy normą jest podanie ręki.",
  "La calle y la casa": "Ulica i dom",
  "La vida social ocurre mucho **fuera de casa**: en el bar del barrio, en la terraza, en la plaza. Es una consecuencia práctica del clima y de las viviendas, en su mayoría **pisos** en edificios y no casas individuales. La **propiedad** está muy extendida: la proporción de hogares en vivienda propia es de las más altas de Europa, aunque el alquiler crece entre los jóvenes.":
    "Życie towarzyskie dzieje się w dużej mierze **poza domem**: w barze na osiedlu, na tarasie, na placu. To praktyczna konsekwencja klimatu i mieszkań, w większości **pisos** w blokach, a nie domów jednorodzinnych. **Własność** jest bardzo rozpowszechniona: udział gospodarstw we własnym mieszkaniu należy do najwyższych w Europie, choć najem rośnie wśród młodych.",
  "La familia sigue siendo muy cercana en el trato y en la práctica, y los jóvenes se **independizan tarde**, más que en casi toda Europa, por razones sobre todo económicas.":
    "Rodzina pozostaje bardzo bliska w obcowaniu i w praktyce, a młodzi **usamodzielniają się późno**, później niż niemal w całej Europie, z powodów przede wszystkim ekonomicznych.",
  "El deporte": "Sport",
  "El **fútbol** ocupa la conversación de agosto a mayo, con **LaLiga** y el partido entre los dos grandes clubes que se llama simplemente **el clásico**. La selección se conoce como **la Roja**. Después vienen el **baloncesto**, el **ciclismo** con la **Vuelta a España** cada septiembre, el **tenis** y el **motociclismo**, disciplinas en las que el país lleva décadas dando campeones.":
    "**Piłka nożna** zajmuje rozmowy od sierpnia do maja, z **LaLigą** i meczem dwóch wielkich klubów, który nazywa się po prostu **el clásico**. Reprezentacja znana jest jako **la Roja**. Dalej idą **koszykówka**, **kolarstwo** z **Vuelta a España** we wrześniu, **tenis** i **motocykle** — dyscypliny, w których kraj od dziesięcioleci daje mistrzów.",
  "Los horarios están cambiando, y en las grandes ciudades muchos comercios ya no cierran a mediodía. Estas costumbres describen una tendencia general, no una regla que valga en todas partes ni para todo el mundo.":
    "Godziny się zmieniają, a w wielkich miastach wiele sklepów już nie zamyka się w południe. Te zwyczaje opisują ogólną tendencję, a nie regułę obowiązującą wszędzie i wszystkich.",
};
