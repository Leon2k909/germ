/**
 * Russian for the Vivir en Espana course cards, headings and questions.
 *
 * Keyed on the SPANISH source text exactly as it appears in
 * vivirEnEspanaCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * is, because it fails silently: the card renders, the tap works, and the
 * reader is told a translated card has no translation. Every key here was
 * extracted from the built module and paired back, never retyped: one wrong
 * character — an n for an ñ, a plain question mark where the sentence opens
 * with ¿ — and the lookup misses without a sound.
 * check-ru-country-translations catches that.
 *
 * The line between what is translated and what is not runs where Russian
 * itself draws it. An institution Russian has a name for gets that name —
 * Кортесы, Конгресс депутатов, Сенат, Конституционный суд. What stays
 * Spanish is what a reader will meet printed on a card or a form and nowhere
 * else: the DNI, the NIE, an empadronamiento, the Seguridad Social, a
 * permiso de residencia. Those lead in Spanish, and a Russian gloss follows
 * once.
 *
 * The autonomous community is on the Russian side of that line and stays
 * there: the course is about who runs the hospitals and the schools, and a
 * reader needs to recognise that answer in Russian.
 */
export const VIVIR_EN_ESPANA_RU: Record<string, string> = {
  "Historia, instituciones y vida diaria: cómo funciona el país.":
    "История, устройство власти и повседневная жизнь: как страна работает.",
  "Símbolos nacionales": "Народные символы",
  "Símbolos y Constitución": "Символы и Конституция",
  "Por qué se empieza aquí: los símbolos se ven todos los días — en el ayuntamiento, en el pasaporte, en la camiseta de la selección — y son la puerta más fácil para entrar en todo lo demás.":
    "Почему начинают отсюда: символы видишь каждый день — на здании городской управы, на паспорте, на майке сборной, — и это самая лёгкая дверь во всё остальное.",
  "La bandera": "Знамя",
  "La bandera tiene tres franjas horizontales: **roja, amarilla y roja**. La amarilla es **el doble de ancha** que cada una de las rojas, de modo que ocupa la mitad de la bandera. Lo establece el **artículo 4** de la Constitución.":
    "У знамени три поперечные полосы: **красная, жёлтая и красная**. Жёлтая **вдвое шире** каждой из красных, так что занимает половину знамени. Это устанавливает **статья 4** Конституции.",
  "Su origen es marinero. En **1785 Carlos III** convocó un concurso para dotar a la Armada de un pabellón que se distinguiera en el mar: casi todas las flotas europeas usaban entonces fondos blancos con escudos, y de lejos se confundían. El rojo y el amarillo se ven a mucha distancia. De ahí pasó al ejército y, en el siglo XIX, a bandera nacional.":
    "Родом оно с моря. В **1785 году Карл III** объявил состязание, чтобы дать флоту стяг, заметный на воде: почти у всех европейских флотов были тогда белые полотнища с гербами, и издали их путали. Красное и жёлтое видно очень далеко. Оттуда знамя перешло в войско, а в девятнадцатом веке стало народным.",
  "El escudo": "Герб",
  "El escudo es un resumen de historia peninsular. Está **cuartelado**: cada cuartel corresponde a un reino que acabó formando parte de España.":
    "Герб — это вся история полуострова вкратце. Он **разделён на четверти**: каждая четверть отвечает королевству, вошедшему в конце концов в состав Испании.",
  "Castilla y León": "Кастилия и Леон",
  "El castillo dorado y el león púrpura ocupan los dos primeros cuarteles.":
    "Золотой замок и багряный лев занимают первые две четверти.",
  "Aragón y Navarra": "Арагон и Наварра",
  "Los cuatro palos rojos de Aragón y las cadenas de Navarra completan el cuartelado.":
    "Четыре красных столба Арагона и цепи Наварры довершают четверти.",
  "Granada": "Гранада",
  "La granada al pie recuerda el último reino incorporado, en 1492.":
    "Плод граната внизу напоминает о последнем присоединённом королевстве, в 1492 году.",
  "Las columnas": "Столпы",
  "Las columnas de Hércules, con el lema PLUS ULTRA: más allá, hacia el Atlántico. Antes del descubrimiento el lema era el contrario.":
    "Геркулесовы столпы с изречением PLUS ULTRA: дальше, к Атлантике. До открытия Америки изречение было обратным.",
  "¿Cómo son las franjas de la bandera española?": "Каковы полосы испанского знамени?",
  "Tres franjas iguales: roja, amarilla y roja": "Три равные полосы: красная, жёлтая и красная",
  "Roja, amarilla del doble de ancho, y roja": "Красная, жёлтая вдвое шире и красная",
  "Dos franjas: roja arriba y amarilla abajo": "Две полосы: красная сверху и жёлтая снизу",
  "Tres franjas verticales": "Три отвесные полосы",
  "La amarilla ocupa la mitad de la bandera y cada roja un cuarto. No son tres franjas iguales, y esa proporción está fijada en el artículo 4 de la Constitución.":
    "Жёлтая занимает половину знамени, а каждая красная — четверть. Полосы не равны, и это соотношение закреплено в статье 4 Конституции.",
  "El himno": "Гимн",
  "El himno se llama **Marcha Real** y tiene una rareza que lo distingue de casi todos los demás: **no tiene letra**. Se canta con la boca cerrada, o no se canta. Solo otros pocos países en el mundo están en la misma situación.":
    "Гимн зовётся **«Королевским маршем»**, и у него есть редкость, которой почти нет у других: **у него нет слов**. Его поют с закрытым ртом или не поют вовсе. В таком же положении лишь немногие страны мира.",
  "Es además uno de los himnos más antiguos de Europa: aparece documentado ya en **1761** como Marcha Granadera. Se le han puesto letras en varias épocas, pero ninguna ha llegado a ser oficial, y los intentos de darle una han fracasado siempre.":
    "К тому же это один из старейших гимнов Европы: в бумагах он значится уже в **1761 году** как «Гренадерский марш». Слова к нему сочиняли в разные времена, но ни одни не были приняты, и всякая попытка дать ему слова кончалась ничем.",
  "¿Qué particularidad tiene el himno nacional español?":
    "Какая особенность у испанского народного гимна?",
  "Que dura menos de treinta segundos": "Что он длится меньше тридцати секунд",
  "Que no tiene letra oficial": "Что у него нет положенных слов",
  "Que solo puede interpretarse en actos militares":
    "Что играть его можно только на военных торжествах",
  "Que se compuso en el siglo XX": "Что он сочинён в двадцатом веке",
  "La Marcha Real carece de letra oficial. Se han propuesto varias a lo largo del tiempo y ninguna ha prosperado; es además uno de los himnos más antiguos de Europa, documentado desde 1761.":
    "У «Королевского марша» нет положенных слов. Их предлагали не раз, и ни одни не прижились; к тому же это один из старейших гимнов Европы, известный по бумагам с 1761 года.",
  "Las fechas": "Даты",
  "12 de octubre": "12 октября",
  "Fiesta Nacional de España. Conmemora la llegada de Colón a América en 1492 y el desfile en Madrid es el acto central.":
    "Народный праздник Испании. Он напоминает о приходе Колумба в Америку в 1492 году, а главное действо — шествие войск в Мадриде.",
  "6 de diciembre": "6 декабря",
  "Día de la Constitución. Se celebra el referéndum de 1978, no la fecha en que entró en vigor.":
    "День Конституции. Отмечают референдум 1978 года, а не тот день, когда она вступила в силу.",
  "2 de mayo": "2 мая",
  "Fiesta de la Comunidad de Madrid: el levantamiento de 1808 contra las tropas de Napoleón. Es autonómica, no nacional.":
    "Праздник автономного сообщества Мадрид: восстание 1808 года против войск Наполеона. Он областной, а не общегосударственный.",
  "La lengua oficial del Estado es el **castellano**, según el artículo 3, que añade que las demás lenguas españolas serán también oficiales en sus comunidades. Es el único artículo de los primeros que habla de lenguas, y en el capítulo cuarto se ve por qué importa tanto.":
    "Государственный язык — **кастильский**, по статье 3, которая добавляет, что прочие языки Испании будут государственными и в своих сообществах. Это единственная из первых статей, где говорится о языках, и в четвёртой главе видно, почему это так важно.",
  "¿Qué se celebra el 12 de octubre?": "Что отмечают 12 октября?",
  "El Día de la Constitución": "День Конституции",
  "La Fiesta Nacional de España": "Народный праздник Испании",
  "El aniversario de la proclamación del rey": "Годовщину провозглашения короля",
  "El fin de la Guerra Civil": "Конец гражданской войны",
  "El 12 de octubre es la Fiesta Nacional. El Día de la Constitución es el 6 de diciembre: dos fechas que se confunden con frecuencia porque ambas son festivos nacionales.":
    "12 октября — народный праздник. День Конституции — 6 декабря: две даты, которые часто путают, потому что обе нерабочие по всей стране.",
  "Bandera con escudo y bandera sin escudo son las dos correctas. La que llevan los edificios oficiales incluye el escudo; la que se ve en un balcón o en un estadio normalmente no.":
    "Знамя с гербом и знамя без герба — верны оба. На казённых зданиях висит с гербом; то, что видишь на балконе или на стадионе, обыкновенно без.",
  "La Constitución de 1978": "Конституция 1978 года",
  "Por qué importa: casi todo lo que viene después — el rey, las Cortes, las autonomías, las lenguas — está en un texto de 1978 que se escribió deliberadamente para que nadie ganara del todo. Entender ese punto de partida explica su forma.":
    "Почему это важно: почти всё, что идёт дальше — король, Кортесы, самоуправные области, языки, — стоит в тексте 1978 года, который нарочно писали так, чтобы никто не выиграл до конца. Понять эту отправную точку — значит понять его вид.",
  "Cómo se hizo": "Как её сделали",
  "Tras la muerte de Franco en 1975, las **elecciones de junio de 1977** dieron unas Cortes que asumieron la tarea de escribir una Constitución. La comisión encargó el borrador a **siete diputados** de partidos distintos, a los que se conoce como los **padres de la Constitución**.":
    "После смерти Франко в 1975 году **выборы июня 1977 года** дали Кортесы, которые взялись писать Конституцию. Черновик поручили **семи депутатам** от разных партий, и их зовут **отцами Конституции**.",
  "El calendario del final del año siguiente conviene tenerlo ordenado: las Cortes aprobaron el texto el **31 de octubre de 1978**, el pueblo lo ratificó en **referéndum el 6 de diciembre**, el rey lo sancionó el **27 de diciembre** y entró en vigor el **29 de diciembre**, el día de su publicación en el Boletín Oficial del Estado.":
    "Порядок дней в конце следующего года стоит держать в голове: Кортесы приняли текст **31 октября 1978 года**, народ утвердил его на **референдуме 6 декабря**, король скрепил его **27 декабря**, а в силу он вступил **29 декабря**, в день напечатания в Государственном вестнике.",
  "La palabra que resume el método es **consenso**. El texto se redactó buscando que ninguna fuerza quedara fuera, y esa es la razón de que algunos artículos sean deliberadamente amplios: se acordó la frase precisamente porque admitía más de una lectura.":
    "Слово, которым весь этот способ и сводится воедино, — **общее согласие**. Текст писали так, чтобы ни одна сила не осталась за порогом, и потому иные статьи нарочно широки: на эти слова и согласились именно потому, что читать их можно не одним способом.",
  "¿En qué fecha se ratificó la Constitución en referéndum?":
    "В какой день Конституцию утвердили на референдуме?",
  "El 31 de octubre de 1978": "31 октября 1978 года",
  "El 6 de diciembre de 1978": "6 декабря 1978 года",
  "El 27 de diciembre de 1978": "27 декабря 1978 года",
  "El 29 de diciembre de 1978": "29 декабря 1978 года",
  "Aprobación en las Cortes el 31 de octubre, referéndum el 6 de diciembre, sanción real el 27 y entrada en vigor el 29. El Día de la Constitución celebra el referéndum.":
    "Принятие в Кортесах — 31 октября, референдум — 6 декабря, королевская скрепа — 27-го, вступление в силу — 29-го. День Конституции отмечает референдум.",
  "Cómo está hecha": "Как она устроена",
  "Tiene **169 artículos**, repartidos en un **título preliminar** y **diez títulos**, más disposiciones adicionales, transitorias, derogatoria y final. Es un texto largo comparado con otras constituciones europeas, y buena parte de esa extensión está en el título dedicado a los derechos.":
    "В ней **169 статей**, разложенных по **вводному разделу** и **десяти разделам**, плюс добавочные, переходные, отменяющее и заключительное положения. Для европейских конституций это длинный текст, и немалая часть этой длины приходится на раздел о правах.",
  "Título preliminar": "Вводный раздел",
  "Artículos 1 a 9: qué es España, dónde reside la soberanía, las lenguas, la bandera, la capital.":
    "Статьи с 1 по 9: что такое Испания, в ком верховная власть, языки, знамя, столица.",
  "Título I": "Раздел I",
  "Artículos 10 a 55: derechos y deberes fundamentales. Es el título más extenso.":
    "Статьи с 10 по 55: основные права и обязанности. Это самый длинный раздел.",
  "Títulos II a VI": "Разделы со II по VI",
  "La Corona, las Cortes, el Gobierno y el poder judicial: quién hace qué.":
    "Корона, Кортесы, правительство и судебная власть: кто что делает.",
  "Título VIII": "Раздел VIII",
  "La organización territorial del Estado. De aquí nacen las comunidades autónomas.":
    "Как государство поделено по землям. Отсюда рождаются автономные сообщества.",
  "Los primeros artículos": "Первые статьи",
  "El **artículo 1** define España como un **Estado social y democrático de Derecho**, sitúa la soberanía en el pueblo español y establece que la **forma política del Estado es la Monarquía parlamentaria**. Las tres afirmaciones están en el mismo artículo y conviene no separarlas: la monarquía es la forma, no el fundamento.":
    "**Статья 1** определяет Испанию как **социальное и народовластное правовое государство**, помещает верховную власть в испанском народе и устанавливает, что **образ правления есть парламентская монархия**. Все три утверждения стоят в одной статье, и разделять их не стоит: монархия — это вид правления, а не его основание.",
  "El **artículo 2** contiene la frase más discutida del texto: se fundamenta en la **indisoluble unidad de la Nación española** y a la vez reconoce y garantiza **el derecho a la autonomía de las nacionalidades y regiones** que la integran. Las dos mitades se acordaron juntas, y el capítulo cuarto de este curso explica qué se construyó sobre ellas.":
    "В **статье 2** стоят самые спорные слова всего текста: она основана на **нерасторжимом единстве испанской нации** и вместе с тем признаёт и обеспечивает **право на самоуправление входящих в неё народностей и краёв**. Обе половины согласовали разом, а четвёртая глава этого курса рассказывает, что на них построили.",
  "¿Qué forma política del Estado establece el artículo 1?":
    "Какой образ правления устанавливает статья 1?",
  "La república parlamentaria": "Парламентскую республику",
  "La monarquía parlamentaria": "Парламентскую монархию",
  "La monarquía absoluta": "Самодержавную монархию",
  "El Estado federal": "Союзное государство",
  "Monarquía parlamentaria: el rey es jefe del Estado pero no gobierna, y la soberanía reside en el pueblo. El mismo artículo define España como Estado social y democrático de Derecho.":
    "Парламентскую монархию: король — глава государства, но не правит, а верховная власть у народа. Та же статья определяет Испанию как социальное и народовластное правовое государство.",
  "Cambiarla es difícil": "Изменить её трудно",
  "Hay **dos procedimientos**. El **ordinario**, del artículo 167, exige tres quintos de cada cámara. El **agravado**, del artículo 168, se aplica a las partes más protegidas — el título preliminar, los derechos fundamentales de la sección primera y el título de la Corona — y es de una dureza poco común: dos tercios de ambas cámaras, **disolución de las Cortes**, elecciones, ratificación por las nuevas cámaras y **referéndum obligatorio**.":
    "Порядков **два**. **Обычный**, по статье 167, требует трёх пятых в каждой палате. **Утяжелённый**, по статье 168, применяется к самым оберегаемым частям — к вводному разделу, к основным правам первого отделения и к разделу о Короне — и суров, как мало где: две трети обеих палат, **роспуск Кортесов**, выборы, утверждение новыми палатами и **обязательный референдум**.",
  "El resultado se ve en la práctica: la Constitución solo se ha reformado **dos veces** en más de cuarenta años, ambas por el procedimiento ordinario y ambas por exigencias europeas. En **1992** se tocó el artículo 13 para permitir el voto de extranjeros en las municipales tras Maastricht, y en **2011** el artículo 135, sobre estabilidad presupuestaria.":
    "Что из этого вышло, видно на деле: Конституцию за сорок с лишним лет меняли только **дважды**, оба раза обычным порядком и оба раза по требованиям Европы. В **1992 году** тронули статью 13, чтобы после Маастрихта позволить иностранцам голосовать на городских выборах, а в **2011-м** — статью 135, о твёрдости казённой росписи.",
  "¿Cuántas veces se ha reformado la Constitución española?":
    "Сколько раз меняли испанскую Конституцию?",
  "Ninguna": "Ни разу",
  "Dos": "Дважды",
  "Siete": "Семь раз",
  "Más de veinte": "Больше двадцати раз",
  "Dos: en 1992, para permitir el voto de extranjeros en elecciones municipales, y en 2011, sobre estabilidad presupuestaria. Ambas por el procedimiento ordinario del artículo 167.":
    "Дважды: в 1992 году, чтобы позволить иностранцам голосовать на городских выборах, и в 2011-м, о твёрдости казённой росписи. Оба раза обычным порядком статьи 167.",
  "El **29 de diciembre** entró en vigor, pero el festivo es el **6 de diciembre**, el del referéndum. Se celebra el día en que la gente votó, no el día en que el texto empezó a regir.":
    "В силу она вступила **29 декабря**, а нерабочий день — **6 декабря**, день референдума. Отмечают тот день, когда голосовали люди, а не тот, когда текст начал действовать.",
  "Derechos y libertades fundamentales": "Основные права и свободы",
  "Por qué importa: el título I no es una lista uniforme. Unos derechos están protegidos con todo el aparato del Estado y otros son principios que orientan la política. Saber en qué grupo cae cada uno es la mitad de entenderlo.":
    "Почему это важно: раздел I — не однородный список. Одни права ограждены всей мощью государства, а другие суть начала, направляющие государственные дела. Знать, в какую из этих кучек попадает каждое, — половина всего понимания.",
  "Tres niveles de protección": "Три ступени защиты",
  "La Constitución protege sus derechos con intensidad distinta, y el criterio es dónde está escrito cada uno.":
    "Конституция ограждает свои права по-разному, и мерило тут одно: где именно каждое записано.",
  "Artículos 15 a 29": "Статьи с 15 по 29",
  "Derechos fundamentales y libertades públicas. Máxima protección: ley orgánica, procedimiento judicial preferente y recurso de amparo ante el Tribunal Constitucional.":
    "Основные права и общественные свободы. Наибольшая защита: только органическим законом, первоочередное разбирательство в суде и жалоба о защите в Конституционный суд.",
  "Artículos 30 a 38": "Статьи с 30 по 38",
  "Derechos y deberes de los ciudadanos. Vinculan a los poderes públicos y se regulan por ley, pero sin amparo constitucional.":
    "Права и обязанности граждан. Они связывают власти и устраиваются законом, но жалобы о защите в Конституционный суд по ним нет.",
  "Artículos 39 a 52": "Статьи с 39 по 52",
  "Principios rectores de la política social y económica: vivienda, medio ambiente, tercera edad. Orientan al legislador y solo se alegan ante los tribunales conforme a las leyes que los desarrollen.":
    "Направляющие начала общественных и хозяйственных дел: жильё, окружающая природа, старость. Они указывают путь законодателю, а в судах на них ссылаются лишь по тем законам, которые их развивают.",
  "El **artículo 14** abre la lista fuera de esa clasificación: los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por nacimiento, raza, sexo, religión, opinión o cualquier otra condición personal o social.":
    "**Статья 14** открывает список вне этого деления: испанцы равны перед законом, и никакое ущемление не должно брать верх — ни по рождению, ни по племени, ни по полу, ни по вере, ни по убеждениям, ни по какому иному личному или общественному положению.",
  "La persona": "Человек",
  "El **artículo 15** reconoce el derecho a la vida y a la integridad física y moral, prohíbe la tortura y **abole la pena de muerte**, salvo lo que dispusieran las leyes penales militares en tiempo de guerra — excepción que fue suprimida por ley en 1995.":
    "**Статья 15** признаёт право на жизнь и на телесную и душевную неприкосновенность, запрещает пытки и **отменяет смертную казнь**, кроме того, что могли бы положить военно-уголовные законы во время войны, — а это исключение убрали законом в 1995 году.",
  "El **artículo 16** garantiza la libertad ideológica y religiosa, y añade una frase decisiva: **ninguna confesión tendrá carácter estatal**. No es exactamente una separación al modo francés, porque el mismo artículo obliga a los poderes públicos a mantener relaciones de cooperación con la Iglesia católica y las demás confesiones. Es una aconfesionalidad con cooperación.":
    "**Статья 16** ручается за свободу убеждений и веры и добавляет решающие слова: **никакое исповедание не будет государственным**. Это не совсем отделение на французский лад, потому что та же статья обязывает власти держать связи сотрудничества с католической Церковью и с прочими исповеданиями. Это невероисповедность с сотрудничеством.",
  "El **artículo 17** protege la libertad personal: la **detención preventiva** no puede durar más de **setenta y dos horas**, pasadas las cuales el detenido debe ser puesto en libertad o a disposición judicial. El mismo artículo prevé el **habeas corpus**, el procedimiento para llevar de inmediato ante un juez a quien esté detenido ilegalmente.":
    "**Статья 17** ограждает личную свободу: **предварительное задержание** не может длиться дольше **семидесяти двух часов**, а по их истечении задержанного надо освободить или передать судье. Та же статья предусматривает **habeas corpus** — порядок, которым незаконно задержанного немедля ведут к судье.",
  "¿Cuál es la duración máxima de una detención preventiva?":
    "Какова наибольшая продолжительность предварительного задержания?",
  "Veinticuatro horas": "Двадцать четыре часа",
  "Cuarenta y ocho horas": "Сорок восемь часов",
  "Setenta y dos horas": "Семьдесят два часа",
  "Cinco días": "Пять дней",
  "Setenta y dos horas, según el artículo 17. Cumplido el plazo, el detenido debe quedar en libertad o pasar a disposición judicial; el habeas corpus sirve para forzarlo si no ocurre.":
    "Семьдесят два часа, по статье 17. Как срок вышел, задержанного надо освободить или передать судье; а если этого не происходит, для того и есть habeas corpus.",
  "La vida en común": "Жизнь среди людей",
  "El **artículo 18** protege el honor, la intimidad y la propia imagen, declara **inviolable el domicilio** — no se entra sin consentimiento o resolución judicial, salvo delito flagrante — y garantiza el secreto de las comunicaciones. El **artículo 20** reconoce la libertad de expresión y el derecho a comunicar y recibir información veraz, y prohíbe la censura previa.":
    "**Статья 18** ограждает честь, частную жизнь и собственный облик, объявляет **жилище неприкосновенным** — войти нельзя без согласия или судебного постановления, кроме как при преступлении с поличным — и ручается за тайну сообщений. **Статья 20** признаёт свободу слова и право сообщать и получать правдивые сведения и запрещает предварительную цензуру.",
  "Los **artículos 21 y 22** amparan la reunión y la asociación: para reunirse en lugares de tránsito público basta comunicarlo a la autoridad, no pedir permiso. El **artículo 23** reconoce el derecho a participar en los asuntos públicos y a acceder en condiciones de igualdad a las funciones y cargos públicos.":
    "**Статьи 21 и 22** ограждают собрания и объединения: чтобы собраться там, где ходят люди, довольно известить власть, а не просить разрешения. **Статья 23** признаёт право участвовать в общественных делах и на равных условиях занимать казённые должности.",
  "¿Qué establece la Constitución sobre la religión del Estado?":
    "Что устанавливает Конституция о вере государства?",
  "Que la religión católica es la oficial": "Что католическая вера — государственная",
  "Que ninguna confesión tendrá carácter estatal":
    "Что никакое исповедание не будет государственным",
  "Que se prohíbe toda relación entre Estado y confesiones":
    "Что всякая связь между государством и исповеданиями запрещена",
  "Que cada comunidad autónoma decide su confesión":
    "Что каждое автономное сообщество выбирает своё исповедание",
  "El artículo 16 dice que ninguna confesión tendrá carácter estatal, y a la vez obliga a mantener relaciones de cooperación con la Iglesia católica y las demás. Es aconfesionalidad, no separación estricta.":
    "Статья 16 говорит, что никакое исповедание не будет государственным, и вместе с тем обязывает держать связи сотрудничества с католической Церковью и прочими. Это невероисповедность, а не строгое отделение.",
  "Ante la justicia": "Перед судом",
  "El **artículo 24** reconoce la **tutela judicial efectiva**: derecho al juez ordinario predeterminado por la ley, a la defensa y a la asistencia de letrado, a un proceso público sin dilaciones indebidas y a la **presunción de inocencia**. El **artículo 25** añade que las penas privativas de libertad se orientarán a la reeducación y reinserción social.":
    "**Статья 24** признаёт **действительную судебную защиту**: право на обычного судью, заранее указанного законом, на защиту и на помощь адвоката, на открытое разбирательство без ненужных проволочек и на **признание невиновным, пока не доказано обратное**. **Статья 25** добавляет, что наказания, лишающие свободы, будут направлены на перевоспитание и возвращение человека в общество.",
  "Cuando uno de los derechos de los artículos 14 a 29 se vulnera y los tribunales ordinarios no lo reparan, queda el **recurso de amparo** ante el **Tribunal Constitucional**. Es la última puerta interna, y solo se abre para ese grupo de derechos.":
    "Когда одно из прав статей с 14 по 29 нарушено, а обычные суды этого не поправили, остаётся **жалоба о защите** в **Конституционный суд**. Это последняя дверь внутри страны, и открывается она только для этой кучки прав.",
  "¿Ante qué órgano se interpone el recurso de amparo?":
    "В какое учреждение подают жалобу о защите?",
  "Ante el Tribunal Supremo": "В Верховный суд",
  "Ante el Tribunal Constitucional": "В Конституционный суд",
  "Ante el Defensor del Pueblo": "К Народному защитнику",
  "Ante el Consejo General del Poder Judicial": "В Общий совет судебной власти",
  "El amparo se interpone ante el Tribunal Constitucional y solo protege los derechos de los artículos 14 a 29. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria, que es otra cosa.":
    "Жалобу о защите подают в Конституционный суд, и ограждает она только права статей с 14 по 29. Верховный суд — вершина обычного правосудия, а это иное.",
  "El derecho a una **vivienda digna** está en el artículo 47, entre los principios rectores. Es un mandato al legislador, no un derecho que pueda reclamarse directamente ante un juez como la libertad de expresión.":
    "Право на **достойное жильё** стоит в статье 47, среди направляющих начал. Это наказ законодателю, а не право, которое можно потребовать прямо у судьи, как свободу слова.",
  "Deberes de los ciudadanos y la nacionalidad": "Обязанности граждан и гражданство",
  "Por qué importa: la Constitución no solo reparte derechos. Impone cuatro deberes, y uno de ellos se cumple todos los años. Y define quién es español, que es la puerta por la que se entra a todo lo demás.":
    "Почему это важно: Конституция не только раздаёт права. Она возлагает четыре обязанности, и одну из них исполняют каждый год. И она определяет, кто испанец, — а это та дверь, через которую входят во всё остальное.",
  "Los deberes": "Обязанности",
  "El **artículo 30** establece el derecho y el deber de **defender a España**. La ley regulaba con él el servicio militar obligatorio, que quedó **suspendido en 2001**: desde entonces las Fuerzas Armadas son enteramente profesionales. El mismo artículo prevé la objeción de conciencia y, para casos de grave riesgo, deberes de protección civil.":
    "**Статья 30** устанавливает право и обязанность **защищать Испанию**. На ней закон держал обязательную воинскую службу, которая **приостановлена с 2001 года**: с тех пор вооружённые силы целиком наёмные. Та же статья предусматривает отказ по совести, а на случай большой беды — обязанности по гражданской обороне.",
  "El **artículo 31** es el deber que se cumple cada año: todos contribuirán al sostenimiento de los gastos públicos **de acuerdo con su capacidad económica**, mediante un sistema tributario **justo**, inspirado en los principios de **igualdad y progresividad**, y que en ningún caso tendrá alcance **confiscatorio**. Progresividad significa que quien más gana no paga solo más dinero, sino un porcentaje mayor.":
    "**Статья 31** — та обязанность, которую исполняют каждый год: все будут участвовать в общественных расходах **по своему достатку**, через **справедливое** податное устройство, построенное на началах **равенства и возрастания доли**, и ни в каком случае это не будет **отбиранием имущества**. Возрастание доли значит, что тот, кто зарабатывает больше, платит не просто больше денег, а бóльшую долю.",
  "Defender a España · art. 30": "Защищать Испанию · ст. 30",
  "Derecho y deber. El servicio militar obligatorio está suspendido desde 2001.":
    "Право и обязанность. Обязательная воинская служба приостановлена с 2001 года.",
  "Contribuir · art. 31": "Вносить своё · ст. 31",
  "Según la capacidad económica, con un sistema progresivo y no confiscatorio.":
    "По достатку, при возрастающей доле и без отбирания имущества.",
  "Trabajar · art. 35": "Трудиться · ст. 35",
  "Deber y derecho al trabajo, a la libre elección de profesión y a una remuneración suficiente.":
    "Обязанность и право на труд, на свободный выбор ремесла и на достаточную плату.",
  "La enseñanza básica · art. 27": "Начальное обучение · ст. 27",
  "Es obligatoria y gratuita. El deber recae sobre quien tiene la patria potestad.":
    "Оно обязательно и бесплатно. Обязанность лежит на том, у кого родительская власть.",
  "¿Qué significa que el sistema tributario es progresivo?":
    "Что значит, что податное устройство возрастающее?",
  "Que los impuestos suben cada año": "Что налоги растут каждый год",
  "Que quien tiene más renta paga un porcentaje mayor":
    "Что у кого доход больше, тот платит бóльшую долю",
  "Que todos pagan el mismo porcentaje": "Что все платят одну и ту же долю",
  "Que se puede pagar a plazos": "Что платить можно по частям",
  "La progresividad del artículo 31 se refiere al porcentaje, no solo al importe. Un impuesto que cobrara a todos el mismo porcentaje sería proporcional, no progresivo.":
    "Возрастание в статье 31 — о доле, а не только о сумме. Налог, который брал бы со всех одну и ту же долю, был бы соразмерным, а не возрастающим.",
  "Quién es español": "Кто испанец",
  "El **artículo 11** remite a la ley, y esa ley es el **Código Civil**. La regla principal es la de la **sangre**: es español de origen quien nace de padre o madre españoles, con independencia del lugar de nacimiento. Nacer en territorio español no basta por sí solo, aunque hay reglas que evitan que un niño quede sin nacionalidad alguna.":
    "**Статья 11** отсылает к закону, и закон этот — **Гражданский кодекс**. Главное правило — **по крови**: испанец по рождению тот, кто родился от отца или матери испанцев, где бы он ни родился. Рождения на испанской земле само по себе не довольно, хотя есть правила, чтобы ребёнок не остался вовсе без гражданства.",
  "El mismo artículo prohíbe privar de la nacionalidad a los españoles de origen y permite tratados de **doble nacionalidad** con los países iberoamericanos y con aquellos que hayan tenido o tengan una vinculación particular con España.":
    "Та же статья запрещает лишать гражданства испанцев по рождению и позволяет договоры о **двойном гражданстве** со странами Иберийской Америки и с теми, у кого была или есть особая связь с Испанией.",
  "La nacionalidad por residencia": "Гражданство по проживанию",
  "El plazo general es de **diez años** de residencia legal, continuada e inmediatamente anterior a la solicitud. Hay plazos abreviados, y responden a la historia de España más que a un criterio administrativo.":
    "Обычный срок — **десять лет** законного, непрерывного проживания, прямо предшествующего прошению. Есть и укороченные сроки, и отвечают они истории Испании больше, чем какому-нибудь канцелярскому мерилу.",
  "Diez años": "Десять лет",
  "El plazo general, para quien no encaja en ninguna de las categorías siguientes.":
    "Обычный срок, для того, кто не подходит ни под один из следующих разрядов.",
  "Cinco años": "Пять лет",
  "Para quienes hayan obtenido la condición de refugiado.":
    "Для тех, кто получил положение беженца.",
  "Dos años": "Два года",
  "Para nacionales de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial y Portugal, y para los sefardíes.":
    "Для граждан стран Иберийской Америки, Андорры, Филиппин, Экваториальной Гвинеи и Португалии, а также для сефардов.",
  "Un año": "Один год",
  "Entre otros supuestos, para quien nació en territorio español, o lleva un año casado con española o español y no está separado.":
    "Среди прочих случаев — для рождённого на испанской земле или для того, кто год состоит в браке с испанкой или испанцем и не разъехался с супругом.",
  "Además de la residencia se exigen **buena conducta cívica** y un **suficiente grado de integración**, que se acredita con dos pruebas del Instituto Cervantes: la de **lengua DELE A2** y la **CCSE**, de conocimientos constitucionales y socioculturales. Quien procede de un país donde el español es lengua oficial queda exento de la primera.":
    "Кроме проживания требуются **доброе гражданское поведение** и **достаточная вжитость в общество**, которую подтверждают двумя испытаниями Института Сервантеса: языковым **DELE A2** и **CCSE**, о знании Конституции и общественной жизни. Тот, кто родом из страны, где испанский — государственный язык, от первого освобождён.",
  "¿Cuántos años de residencia se exigen con carácter general para pedir la nacionalidad?":
    "Сколько лет проживания требуется по общему правилу, чтобы просить гражданства?",
  "Cinco": "Пять",
  "Diez": "Десять",
  "Quince": "Пятнадцать",
  "Diez años de residencia legal y continuada. Cinco corresponde a los refugiados y dos a los nacionales de países iberoamericanos y a otros supuestos con vínculo histórico con España.":
    "Десять лет законного и непрерывного проживания. Пять — это для беженцев, а два — для граждан стран Иберийской Америки и для прочих случаев исторической связи с Испанией.",
  "¿Qué plazo de residencia se aplica a los nacionales de países iberoamericanos?":
    "Какой срок проживания применяется к гражданам стран Иберийской Америки?",
  "El mismo plazo general de diez años": "Тот же обычный срок в десять лет",
  "Dos años, igual que para Andorra, Filipinas, Guinea Ecuatorial, Portugal y los sefardíes. El plazo de un año se reserva a supuestos como haber nacido en España o llevar un año casado con una persona española.":
    "Два года, как и для Андорры, Филиппин, Экваториальной Гвинеи, Португалии и сефардов. Срок в один год оставлен для таких случаев, как рождение в Испании или год брака с испанцем.",
  "La **mayoría de edad** en España son los **dieciocho años**, y con ella llegan el voto y la plena capacidad de obrar. El **DNI** es obligatorio a partir de los catorce.":
    "**Совершеннолетие** в Испании — **восемнадцать лет**, и с ним приходят голос и полная способность действовать. **DNI** обязателен с четырнадцати.",
  "Fiestas y calendario": "Праздники и месяцеслов",
  "Por qué importa: el calendario laboral español tiene tres capas — el Estado, la comunidad y el municipio — y por eso dos ciudades vecinas pueden trabajar en días distintos. Entender las capas evita más de un viaje en balde.":
    "Почему это важно: в испанском рабочем месяцеслове три слоя — государство, сообщество и город, — и потому два соседних города могут работать в разные дни. Понять эти слои — значит уберечься не от одной напрасной поездки.",
  "Catorce días": "Четырнадцать дней",
  "El calendario laboral tiene **catorce festivos** al año. **Doce** los fija el Estado o la comunidad autónoma, y **dos son locales**, decididos por cada ayuntamiento: el día del patrón, la fiesta mayor, la feria del pueblo.":
    "В рабочем месяцеслове **четырнадцать нерабочих дней** в году. **Двенадцать** назначает государство или автономное сообщество, а **два местные**, и решает их каждая городская управа: день покровителя, главный праздник, деревенская ярмарка.",
  "De ahí que un festivo pueda no serlo a treinta kilómetros. Las comunidades pueden además sustituir algunos festivos nacionales por otros propios, de modo que ni siquiera la lista estatal se aplica igual en todas partes.":
    "Оттого нерабочий день может не быть таковым в тридцати километрах отсюда. Сообщества могут вдобавок заменять иные общегосударственные дни своими, так что даже государственный список нигде не применяется одинаково.",
  "Fijos en todo el país": "Одни и те же по всей стране",
  "1 de enero, 1 de mayo, 12 de octubre, 1 de noviembre, 6 y 8 de diciembre, y 25 de diciembre.":
    "1 января, 1 мая, 12 октября, 1 ноября, 6 и 8 декабря и 25 декабря.",
  "Semana Santa": "Страстная неделя",
  "El Viernes Santo es festivo en toda España. El Jueves Santo lo es en la mayoría de las comunidades, pero no en todas.":
    "Страстная пятница нерабочая по всей Испании. Страстной четверг — в большинстве сообществ, но не во всех.",
  "Días de la comunidad": "Дни сообществ",
  "El 11 de septiembre en Cataluña, el 25 de julio en Galicia, el 9 de octubre en la Comunidad Valenciana, el 28 de febrero en Andalucía.":
    "11 сентября в Каталонии, 25 июля в Галисии, 9 октября в Валенсийском сообществе, 28 февраля в Андалусии.",
  "Los dos locales": "Два местных",
  "Los elige el ayuntamiento. Suelen coincidir con el patrón o con la fiesta grande del municipio.":
    "Их выбирает городская управа. Обыкновенно они совпадают с днём покровителя или с большим городским праздником.",
  "¿Cuántos días festivos tiene el calendario laboral español?":
    "Сколько нерабочих дней в испанском рабочем месяцеслове?",
  "Doce": "Двенадцать",
  "Catorce": "Четырнадцать",
  "Dieciséis": "Шестнадцать",
  "Catorce: doce estatales o autonómicos y dos locales fijados por el ayuntamiento. Por eso dos municipios vecinos pueden tener días libres distintos.":
    "Четырнадцать: двенадцать государственных или областных и два местных, назначенных городской управой. Оттого у двух соседних городов бывают разные свободные дни.",
  "El invierno": "Зима",
  "La **Nochevieja** tiene un rito muy preciso: al sonar las doce campanadas se comen **doce uvas**, una por campanada. Quien las termina a tiempo tendrá un buen año. La costumbre se difundió a comienzos del siglo XX y hoy se retransmite en directo desde la Puerta del Sol de Madrid.":
    "У **новогодней ночи** есть очень точный обряд: под двенадцать ударов колокола съедают **двенадцать виноградин**, по одной на удар. Кто успеет, у того будет добрый год. Обычай разошёлся в начале двадцатого века, а ныне его показывают в прямом виде с мадридской площади Пуэрта-дель-Соль.",
  "Los regalos de invierno no llegan el 25 de diciembre sino el **6 de enero**, con los **Reyes Magos**. La tarde del día 5 se celebran las cabalgatas, y en Nochebuena y Navidad las familias se reúnen a comer. En muchas casas conviven ya ambas fechas, pero la de los Reyes sigue siendo la principal para los niños.":
    "Зимние подарки приходят не 25 декабря, а **6 января**, с **тремя царями-волхвами**. Вечером пятого числа идут их шествия, а в сочельник и в Рождество семьи сходятся за столом. Во многих домах уживаются уже обе даты, но для детей главной остаётся царская.",
  "¿Qué se hace tradicionalmente en Nochevieja al sonar las campanadas?":
    "Что по обычаю делают в новогоднюю ночь под удары колокола?",
  "Se comen doce uvas, una por campanada": "Съедают двенадцать виноградин, по одной на удар",
  "Se encienden doce velas": "Зажигают двенадцать свечей",
  "Se reparten doce monedas": "Раздают двенадцать монет",
  "Se cantan doce coplas": "Поют двенадцать куплетов",
  "Una uva por campanada, doce en total. La costumbre se extendió a principios del siglo XX y se retransmite cada año desde la Puerta del Sol.":
    "По виноградине на удар, двенадцать всего. Обычай разошёлся в начале двадцатого века, и каждый год его показывают с площади Пуэрта-дель-Соль.",
  "Las fiestas populares": "Народные праздники",
  "Junto al calendario oficial está el de las fiestas que dan fama a las ciudades, y que en muchos casos duran una semana entera.":
    "Рядом с положенным месяцесловом идёт месяцеслов праздников, которые дают городам славу и во многих случаях длятся целую неделю.",
  "Las Fallas": "Фальяс",
  "En Valencia, en marzo. Se levantan monumentos de cartón y madera por toda la ciudad y la noche del 19 se queman.":
    "В Валенсии, в марте. По всему городу ставят изваяния из картона и дерева, а в ночь девятнадцатого их жгут.",
  "La Feria de Abril": "Апрельская ярмарка",
  "En Sevilla, con casetas, caballos y trajes de flamenca, dos semanas después de Semana Santa.":
    "В Севилье, с шатрами, лошадьми и платьями фламенко, через две недели после Страстной недели.",
  "San Fermín": "Сан-Фермин",
  "En Pamplona, del 6 al 14 de julio. Los encierros de la mañana son su imagen más conocida.":
    "В Памплоне, с 6 по 14 июля. Утренние бега с быками — самая известная его картина.",
  "El Carnaval": "Карнавал",
  "El de Santa Cruz de Tenerife y el de Cádiz son los mayores; el gaditano se recuerda sobre todo por sus chirigotas.":
    "Самые большие — в Санта-Крус-де-Тенерифе и в Кадисе; кадисский помнят прежде всего по его насмешливым песенным ватагам.",
  "¿En qué ciudad se celebran las Fallas?": "В каком городе празднуют Фальяс?",
  "En Sevilla": "В Севилье",
  "En Pamplona": "В Памплоне",
  "En Valencia": "В Валенсии",
  "En Cádiz": "В Кадисе",
  "Las Fallas son de Valencia y se queman en marzo. Sevilla tiene la Feria de Abril, Pamplona los San Fermines y Cádiz uno de los dos grandes carnavales.":
    "Фальяс валенсийские, и жгут их в марте. У Севильи Апрельская ярмарка, у Памплоны Сан-Фермины, а у Кадиса один из двух великих карнавалов.",
  "Cuando un festivo cae en martes o jueves, muchos hacen **puente** y libran también el lunes o el viernes. Si caen dos cerca, se llama **acueducto**: no es una figura legal, pero explica por qué en esas semanas media España está cerrada.":
    "Когда нерабочий день падает на вторник или четверг, многие строят **мост** и берут свободным ещё понедельник или пятницу. Если таких дней рядом два, это зовут **водоводом**: в законе такого нет, но этим и объясняется, почему в такие недели половина Испании закрыта.",
  "La Corona": "Корона",
  "Las instituciones del Estado": "Учреждения государства",
  "Por qué importa: España tiene un rey y no lo gobierna nadie desde el trono. Entender qué hace exactamente el jefe del Estado — y qué no hace — es la primera pieza del sistema.":
    "Почему это важно: у Испании есть король, но с трона никто не правит. Понять, что именно делает глава государства — и чего не делает, — первая часть всего устройства.",
  "Qué es el rey": "Кто такой король",
  "El **artículo 56** define al rey como **jefe del Estado**, **símbolo de su unidad y permanencia**, y le encarga **arbitrar y moderar** el funcionamiento regular de las instituciones. Ninguna de esas palabras significa gobernar: quien dirige la política es el Gobierno, y quien hace las leyes son las Cortes.":
    "**Статья 56** определяет короля как **главу государства**, **знак его единства и непрерывности**, и поручает ему **быть посредником и умерять** ровный ход учреждений. Ни одно из этих слов не значит «править»: делами страны ведает правительство, а законы издают Кортесы.",
  "La persona del rey es **inviolable** y **no está sujeta a responsabilidad**. Eso solo se sostiene por una razón: sus actos los firma siempre otro, y ese otro responde.":
    "Особа короля **неприкосновенна** и **ответственности не подлежит**. Держится это на одном-единственном основании: его акты всегда подписывает ещё кто-то, и отвечает этот другой.",
  "El refrendo": "Скрепа",
  "El **artículo 64** establece que los actos del rey serán **refrendados**, es decir, firmados también por quien asume su responsabilidad política: el **presidente del Gobierno**, el ministro competente, o el **presidente del Congreso** cuando se trata de proponer y nombrar al presidente del Gobierno o de disolver las Cortes. Un acto del rey sin refrendo carece de validez.":
    "**Статья 64** устанавливает, что акты короля будут **скреплены**, то есть подписаны и тем, кто берёт на себя ответственность перед страной: **председателем правительства**, ведающим министром или **председателем Конгресса**, когда речь о предложении и назначении председателя правительства или о роспуске Кортесов. Акт короля без скрепы силы не имеет.",
  "Es el mecanismo que hace compatibles dos cosas que parecen incompatibles: un jefe del Estado que no responde de nada, y un sistema en el que todo acto tiene un responsable.":
    "Это тот приём, которым уживаются две вещи, кажущиеся несовместимыми: глава государства, не отвечающий ни за что, и порядок, где у всякого акта есть ответчик.",
  "¿Qué significa que un acto del rey está refrendado?": "Что значит, что акт короля скреплён?",
  "Que ha sido aprobado por referéndum": "Что его утвердили на референдуме",
  "Que lo firma también quien asume su responsabilidad política":
    "Что его подписывает и тот, кто берёт на себя ответственность перед страной",
  "Que lo ha revisado el Tribunal Constitucional": "Что его проверил Конституционный суд",
  "Que se publica en el Boletín Oficial del Estado": "Что его печатают в Государственном вестнике",
  "El refrendo es la firma del presidente del Gobierno, del ministro competente o del presidente del Congreso. Sin ella el acto no vale, y es lo que permite que el rey sea irresponsable sin que nadie lo sea.":
    "Скрепа — это подпись председателя правительства, ведающего министра или председателя Конгресса. Без неё акт не действует, и именно она позволяет королю ни за что не отвечать, не оставляя при этом ни один акт без ответчика.",
  "Qué hace": "Что он делает",
  "Sancionar y promulgar": "Скреплять и обнародовать",
  "Firma las leyes aprobadas por las Cortes en el plazo de quince días. No puede negarse: es un acto debido.":
    "Он подписывает принятые Кортесами законы в пятнадцать дней. Отказаться он не может: это его обязанность.",
  "Proponer candidato": "Предлагать кандидата",
  "Tras consultar a los grupos políticos, propone al Congreso un candidato a presidente del Gobierno.":
    "Опросив собрания партий, он предлагает Конгрессу кандидата в председатели правительства.",
  "Convocar y disolver": "Созывать и распускать",
  "Convoca y disuelve las Cortes y convoca elecciones, siempre en los términos previstos en la Constitución.":
    "Он созывает и распускает Кортесы и назначает выборы, всегда в тех рамках, какие положены Конституцией.",
  "Mando supremo": "Верховное начальство",
  "Tiene el mando supremo de las Fuerzas Armadas, que dirige en la práctica el Gobierno.":
    "Ему принадлежит верховное начальство над вооружёнными силами, которыми на деле ведает правительство.",
  "Ejerce además el **derecho de gracia**, es decir, los **indultos** individuales, con arreglo a la ley — que **prohíbe los indultos generales** — y acredita a los embajadores. Al ser proclamado, presta juramento de guardar y hacer guardar la Constitución ante las Cortes reunidas.":
    "Он пользуется, кроме того, **правом милости**, то есть **помилованиями** отдельных людей, по закону, который **общие помилования запрещает**, и утверждает послов. При провозглашении он присягает перед собравшимися Кортесами хранить Конституцию и заставлять хранить её других.",
  "La sucesión": "Наследование",
  "La corona se hereda en los sucesores de **Juan Carlos I**, según el orden del **artículo 57**: primogenitura y representación, prefiriendo la línea anterior a la posterior, el grado más próximo al más remoto y, **en el mismo grado, el varón a la mujer**. Esa última regla es la única preferencia por sexo que queda en el texto constitucional, y para cambiarla haría falta el procedimiento agravado del artículo 168.":
    "Корона наследуется в потомстве **Хуана Карлоса I** по порядку **статьи 57**: первородство и представительство, причём старшая ветвь идёт впереди младшей, ближняя степень впереди дальней, а **в одной степени мужчина впереди женщины**. Это последнее правило — единственное предпочтение по полу, оставшееся в конституционном тексте, и чтобы его изменить, понадобился бы утяжелённый порядок статьи 168.",
  "El heredero lleva el título de **Príncipe o Princesa de Asturias**. **Juan Carlos I** fue proclamado rey en **1975** y **abdicó en 2014**; **Felipe VI** fue proclamado el **19 de junio de 2014** ante las Cortes.":
    "Наследник носит звание **принца или принцессы Астурийской**. **Хуан Карлос I** был провозглашён королём в **1975 году** и **отрёкся в 2014-м**; **Филипп VI** был провозглашён **19 июня 2014 года** перед Кортесами.",
  "¿Qué título recibe el heredero o la heredera de la Corona?":
    "Какое звание получает наследник или наследница Короны?",
  "Duque de Borgoña": "Герцога Бургундского",
  "Príncipe o Princesa de Asturias": "Принца или принцессы Астурийской",
  "Infante de España": "Инфанта Испании",
  "Delfín de la Corona": "Дофина Короны",
  "Príncipe o Princesa de Asturias, junto con otros títulos históricos. Infante o infanta es el tratamiento de los demás hijos del rey.":
    "Принца или принцессы Астурийской, вместе с прочими историческими званиями. Инфант или инфанта — это как называют остальных детей короля.",
  "¿Puede el rey negarse a firmar una ley aprobada por las Cortes?":
    "Может ли король отказаться подписать закон, принятый Кортесами?",
  "Sí, tiene derecho de veto": "Да, у него есть право запрета",
  "No: la sanción es un acto debido": "Нет: скрепа — его обязанность",
  "Solo si la ley afecta a la Corona": "Только если закон касается Короны",
  "Solo con el acuerdo del Tribunal Constitucional": "Только с согласия Конституционного суда",
  "Sanciona y promulga en el plazo de quince días, sin margen para negarse. La monarquía parlamentaria española no conserva ningún veto real.":
    "Он скрепляет и обнародует в пятнадцать дней, и отказаться ему негде. Испанская парламентская монархия не сохранила за королём никакого права запрета.",
  "La preferencia del **varón sobre la mujer** en el mismo grado sigue en el artículo 57 y solo podría suprimirse por el procedimiento agravado del artículo 168, el que obliga a disolver las Cortes y convocar un referéndum. No es una omisión: es la parte más difícil de reformar.":
    "Предпочтение **мужчины перед женщиной** в одной степени и поныне стоит в статье 57, и убрать его можно только утяжелённым порядком статьи 168, тем, что обязывает распустить Кортесы и назначить референдум. Это не забывчивость: это самая трудная для перемены часть.",
  "Las Cortes Generales": "Генеральные Кортесы",
  "Por qué importa: España tiene dos cámaras, pero no pesan lo mismo. Saber cuál manda cuando discrepan explica buena parte de cómo se aprueban aquí las leyes.":
    "Почему это важно: у Испании две палаты, но весят они не одинаково. Знать, чьё слово выше при разногласии, — значит понимать большую часть того, как здесь принимают законы.",
  "Dos cámaras desiguales": "Две неравные палаты",
  "Las Cortes Generales, dice el **artículo 66**, representan al pueblo español y están formadas por el **Congreso de los Diputados** y el **Senado**. Ejercen la potestad legislativa, aprueban los **presupuestos** y **controlan** la acción del Gobierno.":
    "Генеральные Кортесы, говорит **статья 66**, представляют испанский народ и состоят из **Конгресса депутатов** и **Сената**. Они вершат законодательную власть, принимают **роспись казны** и **надзирают** за работой правительства.",
  "El bicameralismo español es **imperfecto**, y la palabra es técnica, no despectiva: las dos cámaras no tienen el mismo peso. El **Congreso predomina**. Es el que inviste al presidente del Gobierno, el que puede derribarlo y el que tiene la última palabra cuando las dos discrepan sobre una ley.":
    "Испанское двухпалатие **несовершенное**, и слово это учёное, а не бранное: две палаты весят по-разному. **Конгресс сильнее**. Это он утверждает председателя правительства, он может его свалить и за ним последнее слово, когда палаты расходятся о законе.",
  "Congreso": "Конгресс",
  "350 diputados. La Constitución fija una horquilla de entre 300 y 400, y la ley electoral ha elegido siempre el número redondo.":
    "350 депутатов. Конституция кладёт вилку от 300 до 400, а избирательный закон всегда выбирал круглое число.",
  "Senado": "Сенат",
  "Cámara de representación territorial: cuatro senadores por provincia elegidos directamente, más los que designan los parlamentos autonómicos.":
    "Палата представительства земель: по четыре сенатора от провинции, избираемых напрямую, и ещё те, кого ставят областные собрания.",
  "Cuatro años": "Четыре года",
  "Es la duración de la legislatura, salvo disolución anticipada, que en España ha sido frecuente.":
    "Столько длится созыв, если только его не распустят раньше срока, — а в Испании это бывало часто.",
  "Diputación Permanente": "Постоянная депутация",
  "Cuando las cámaras están disueltas o fuera de periodo de sesiones, un grupo reducido vela por sus poderes.":
    "Когда палаты распущены или между сессиями, малая их часть бережёт их права.",
  "¿Cuántos diputados tiene el Congreso?": "Сколько депутатов в Конгрессе?",
  "Doscientos": "Двести",
  "Trescientos": "Триста",
  "Trescientos cincuenta": "Триста пятьдесят",
  "Cuatrocientos": "Четыреста",
  "Trescientos cincuenta. La Constitución permite entre trescientos y cuatrocientos, y la ley electoral ha optado siempre por la cifra intermedia.":
    "Триста пятьдесят. Конституция позволяет от трёхсот до четырёхсот, и избирательный закон всегда выбирал среднее число.",
  "Cómo se elige el Congreso": "Как избирают Конгресс",
  "La circunscripción es la **provincia**, y Ceuta y Melilla eligen un diputado cada una. Cada provincia tiene un **mínimo inicial de dos escaños** y el resto se reparte en proporción a la población, lo que da a las provincias pequeñas más peso relativo del que les correspondería.":
    "Избирательный округ — это **провинция**, а Сеута и Мелилья избирают по одному депутату. За каждой провинцией закреплены **не менее двух мест** для начала, а остальные раскладывают по числу жителей, отчего малые провинции весят больше, чем им причиталось бы.",
  "El reparto dentro de cada circunscripción se hace por el **sistema D'Hondt**, con **listas cerradas y bloqueadas**: se vota una candidatura entera, en el orden que fijó el partido, sin poder alterarlo. Quedan fuera las listas que no alcancen el **tres por ciento** de los votos válidos en su circunscripción.":
    "Внутри округа места раскладывают **способом д'Ондта**, при **закрытых и запертых списках**: голосуют за весь список разом, в том порядке, какой поставила партия, и переставить в нём нельзя ничего. За порогом остаются списки, не набравшие **трёх долей из ста** годных голосов в своём округе.",
  "El Senado y sus límites": "Сенат и его пределы",
  "En el Senado, cada provincia peninsular elige **cuatro senadores** por voto directo; las islas y las ciudades autónomas siguen reglas propias. A ellos se suman los designados por las **comunidades autónomas**: uno por comunidad y otro más por cada millón de habitantes.":
    "В Сенат каждая материковая провинция избирает **четырёх сенаторов** прямым голосованием; у островов и у самоуправных городов свои правила. К ним прибавляются те, кого ставят **автономные сообщества**: по одному от сообщества и ещё по одному на каждый миллион жителей.",
  "Cuando el Senado **veta** un proyecto o lo enmienda, el Congreso puede **levantar el veto** por **mayoría absoluta**, o por mayoría simple pasados **dos meses**. De ahí que al Senado se le llame a menudo cámara de segunda lectura, y que su reforma sea una discusión abierta desde hace décadas.":
    "Когда Сенат **накладывает запрет** на законопроект или правит его, Конгресс может **этот запрет снять** **полным большинством**, а через **два месяца** — и простым. Оттого Сенат часто зовут палатой второго чтения, а спор о его переустройстве идёт уже десятилетия.",
  "¿Qué ocurre cuando el Senado veta un proyecto de ley?":
    "Что бывает, когда Сенат накладывает запрет на законопроект?",
  "El proyecto decae definitivamente": "Законопроект отпадает окончательно",
  "El Congreso puede levantar el veto por mayoría absoluta":
    "Конгресс может снять запрет полным большинством",
  "Se convoca un referéndum": "Назначают референдум",
  "Decide el Tribunal Constitucional": "Решает Конституционный суд",
  "El Congreso levanta el veto por mayoría absoluta, o por mayoría simple transcurridos dos meses. Es la razón por la que el bicameralismo español se llama imperfecto.":
    "Конгресс снимает запрет полным большинством, а через два месяца — простым. Потому испанское двухпалатие и зовут несовершенным.",
  "¿Qué cámara se define como de representación territorial?":
    "Какая палата названа палатой представительства земель?",
  "El Congreso de los Diputados": "Конгресс депутатов",
  "El Senado": "Сенат",
  "Las dos por igual": "Обе поровну",
  "Ninguna: la representación es siempre del conjunto del pueblo":
    "Ни одна: представляют всегда весь народ разом",
  "El artículo 69 define así al Senado. En la práctica su composición mezcla elección provincial y designación autonómica, y esa doble vía es uno de los motivos de que se discuta su reforma.":
    "Так статья 69 определяет Сенат. На деле состав его мешает избрание по провинциям с назначением от сообществ, и этот двойной путь — одна из причин, почему спорят о его переустройстве.",
  "El sistema D'Hondt no es lo que hace que las provincias pequeñas pesen más: eso lo produce el **mínimo de dos escaños por provincia**. Son dos efectos distintos que suelen atribuirse al mismo culpable.":
    "Не способ д'Ондта делает малые провинции весомее: это делает **закреплённый минимум в два места на провинцию**. Это два разных следствия, которые обыкновенно валят на одного виновника.",
  "El Gobierno": "Правительство",
  "Por qué importa: en España un gobierno no cae si pierde una votación. Solo cae si hay quien lo sustituya, y esa regla — copiada de Alemania y perfeccionada aquí — explica la estabilidad de los últimos cuarenta años.":
    "Почему это важно: в Испании правительство не падает оттого, что проиграло голосование. Оно падает, только если есть кем его сменить, и этим правилом, взятым у Германии и доведённым здесь до ума, объясняется устойчивость последних сорока лет.",
  "Qué hace y quién lo forma": "Что оно делает и кто в него входит",
  "El **artículo 97** encarga al Gobierno dirigir la **política interior y exterior**, la **Administración civil y militar** y la **defensa del Estado**, ejercer la **función ejecutiva** y la **potestad reglamentaria**. Lo componen el **presidente**, los **vicepresidentes** en su caso y los **ministros**, que reunidos forman el **Consejo de Ministros**. Su sede es el **Palacio de la Moncloa**.":
    "**Статья 97** поручает правительству вести **внутренние и внешние дела**, **гражданское и военное управление** и **оборону государства**, вершить **исполнительную власть** и **власть издавать правила**. В него входят **председатель**, **заместители председателя**, если они есть, и **министры**, которые вместе образуют **Совет министров**. Место его — **дворец Монклоа**.",
  "La investidura": "Утверждение в должности",
  "El **artículo 99** describe el camino. Tras unas elecciones, el rey **consulta** a los representantes designados por los grupos políticos y, a través del presidente del Congreso, **propone un candidato**. El candidato expone su programa ante la cámara y pide su confianza.":
    "**Статья 99** описывает весь путь. После выборов король **опрашивает** тех, кого выставили партийные собрания, и через председателя Конгресса **предлагает кандидата**. Кандидат излагает палате свой замысел и просит доверия.",
  "En la **primera votación** necesita la **mayoría absoluta**. Si no la obtiene, cuarenta y ocho horas después basta la **mayoría simple**, es decir, más síes que noes. Si transcurren **dos meses** desde la primera votación sin que nadie sea investido, el rey **disuelve las Cortes** y se convocan nuevas elecciones.":
    "В **первом голосовании** ему нужно **полное большинство**. Если его нет, через сорок восемь часов довольно **простого большинства**, то есть чтобы «да» было больше, чем «нет». Если с первого голосования прошло **два месяца**, а никто не утверждён, король **распускает Кортесы** и назначают новые выборы.",
  "¿Qué mayoría se necesita en la primera votación de investidura?":
    "Какое большинство нужно в первом голосовании об утверждении в должности?",
  "Mayoría simple": "Простое большинство",
  "Mayoría absoluta": "Полное большинство",
  "Tres quintos": "Три пятых",
  "Dos tercios": "Две трети",
  "Mayoría absoluta en la primera votación. En la segunda, cuarenta y ocho horas después, basta con que haya más votos a favor que en contra.":
    "Полное большинство в первом голосовании. Во втором, через сорок восемь часов, довольно того, чтобы голосов «за» было больше, чем «против».",
  "La censura constructiva": "Созидательное недоверие",
  "La **moción de censura** española es **constructiva**: para derribar a un gobierno no basta con reunir votos en contra, hay que **presentar a la vez un candidato alternativo**. Si la moción prospera, ese candidato queda **automáticamente investido** presidente.":
    "Испанское **предложение о недоверии** **созидательное**: чтобы свалить правительство, мало собрать голоса против, надо **разом выставить и другого кандидата**. Если предложение проходит, этот кандидат **сам собою утверждается** председателем.",
  "La firma al menos la **décima parte** de los diputados y se vota transcurridos **cinco días**, durante los cuales pueden presentarse mociones alternativas. Exige **mayoría absoluta**. En más de cuarenta años solo ha prosperado **una vez**, en **2018**.":
    "Подписывает его не менее **десятой части** депутатов, а голосуют через **пять дней**, за которые могут быть внесены встречные предложения. Нужно **полное большинство**. За сорок с лишним лет оно прошло только **один раз**, в **2018 году**.",
  "La figura inversa es la **cuestión de confianza**, que plantea el propio presidente sobre su programa o una declaración de política general: se gana con **mayoría simple**, y perderla obliga a dimitir.":
    "Обратное этому — **вопрос о доверии**, который ставит сам председатель, о своём замысле или об общем заявлении о делах страны: выигрывают его **простым большинством**, а проиграв, обязаны уйти в отставку.",
  "¿Qué distingue a la moción de censura española?":
    "Чем отличается испанское предложение о недоверии?",
  "Que solo puede presentarla la oposición": "Тем, что внести его может только противная сторона",
  "Que es constructiva: debe incluir un candidato alternativo":
    "Тем, что оно созидательное: в нём должен быть и другой кандидат",
  "Que exige una mayoría de dos tercios": "Тем, что нужно большинство в две трети",
  "Que la convoca el rey": "Тем, что назначает его король",
  "Sin candidato alternativo no hay moción. Es la razón de que solo haya prosperado una vez desde 1978: es fácil reunir votos contra alguien y difícil reunirlos a favor de un sustituto concreto.":
    "Без другого кандидата предложения нет. Потому оно с 1978 года прошло лишь однажды: собрать голоса против кого-то легко, а за вполне определённого преемника — трудно.",
  "Disolver y seguir": "Распустить и остаться",
  "El presidente puede **disolver** las Cortes y convocar elecciones anticipadas, con dos límites: no cabe hacerlo mientras esté en trámite una moción de censura, ni antes de que haya transcurrido **un año** desde la disolución anterior.":
    "Председатель может **распустить** Кортесы и назначить досрочные выборы, но с двумя пределами: нельзя делать этого, пока идёт предложение о недоверии, и нельзя раньше, чем через **год** после прошлого роспуска.",
  "Cuando el gobierno cesa, sigue **en funciones** hasta que tome posesión el siguiente. Un gobierno en funciones despacha lo ordinario y no puede, entre otras cosas, presentar proyectos de ley ni aprobar los presupuestos: mantiene el país en marcha, pero no lo dirige.":
    "Когда правительство слагает полномочия, оно остаётся **при исполнении** до вступления следующего. Такое правительство ведёт текущие дела и не может, среди прочего, вносить законопроекты и принимать роспись казны: оно держит страну на ходу, но не правит ею.",
  "¿Qué puede hacer un gobierno en funciones?": "Что может правительство при исполнении?",
  "Todo lo que hacía antes de cesar": "Всё то же, что делало до сложения полномочий",
  "Despachar los asuntos ordinarios, sin presentar proyectos de ley ni presupuestos":
    "Вести текущие дела, но не вносить ни законопроектов, ни росписи казны",
  "Nada: la Administración queda paralizada": "Ничего: управление замирает",
  "Solo convocar elecciones": "Только назначить выборы",
  "Se limita al despacho ordinario para que el país siga funcionando, pero no puede iniciar la acción legislativa ni aprobar presupuestos. España ha tenido periodos largos en esa situación.":
    "Оно ограничивается текущими делами, чтобы страна шла своим ходом, но начать законодательную работу и принять роспись казны не может. Испания подолгу живала в таком положении.",
  "**Jefe del Estado** y **presidente del Gobierno** son dos cargos distintos y dos edificios distintos: el rey en la **Zarzuela**, el presidente en la **Moncloa**. En España el jefe del Estado no preside el Gobierno.":
    "**Глава государства** и **председатель правительства** — две разные должности и два разных здания: король в **Сарсуэле**, председатель в **Монклоа**. В Испании глава государства правительства не возглавляет.",
  "El poder judicial y el Tribunal Constitucional": "Судебная власть и Конституционный суд",
  "Por qué importa: hay dos tribunales en la cumbre y no son el mismo. Uno cierra los pleitos; el otro juzga las leyes. Confundirlos es el error más común sobre la justicia española.":
    "Почему это важно: на вершине два суда, и это не один и тот же. Один закрывает тяжбы, другой судит законы. Спутать их — самая частая ошибка об испанском правосудии.",
  "Jueces sometidos solo a la ley": "Судьи, подчинённые только закону",
  "El **artículo 117** dice que la justicia **emana del pueblo** y se administra **en nombre del rey** por jueces y magistrados **independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley**. Se entra en la carrera judicial por **oposición**, no por nombramiento político.":
    "**Статья 117** говорит, что правосудие **исходит от народа** и вершится **именем короля** судьями, **независимыми, несменяемыми, ответственными и подчинёнными единственно власти закона**. В судейскую службу входят **по состязательному испытанию**, а не по назначению сверху.",
  "El **Consejo General del Poder Judicial** es su órgano de gobierno: decide nombramientos, ascensos, inspección y régimen disciplinario. Lo forman **veinte vocales** más su **presidente**, que lo es también del Tribunal Supremo, con un mandato de **cinco años**.":
    "**Общий совет судебной власти** — то учреждение, которое ею ведает: он решает о назначениях, повышениях, надзоре и взысканиях. В него входят **двадцать членов** и **председатель**, который вместе с тем возглавляет и Верховный суд, на срок в **пять лет**.",
  "La escalera de los tribunales": "Лестница судов",
  "Juzgados": "Суды первой ступени",
  "La primera instancia, repartida por partidos judiciales. Aquí se ven los hechos.":
    "Первая ступень, разбитая по судебным округам. Здесь разбирают обстоятельства дела.",
  "Audiencias Provinciales": "Провинциальные палаты",
  "Resuelven los recursos de apelación en cada provincia.":
    "Они решают по жалобам на решения судов первой ступени в каждой провинции.",
  "Tribunales Superiores de Justicia": "Высшие суды правосудия",
  "Uno por comunidad autónoma. Culminan la organización judicial en su territorio, sin ser una instancia superior al Supremo.":
    "По одному на автономное сообщество. Они венчают судебное устройство своей земли, но выше Верховного суда не стоят.",
  "Tribunal Supremo": "Верховный суд",
  "El órgano jurisdiccional superior en todos los órdenes, salvo en materia de garantías constitucionales.":
    "Высшее судебное место во всех разрядах дел, кроме конституционных порук.",
  "La jurisdicción se divide en cuatro **órdenes**: **civil**, **penal**, **contencioso-administrativo** — para pleitos con la Administración — y **social**, para los laborales. Existe además la **Audiencia Nacional**, con competencia en toda España sobre delitos concretos como el terrorismo o los económicos de gran alcance.":
    "Правосудие делится на четыре **разряда**: **гражданский**, **уголовный**, **спорный с ведомствами** — для тяжб с управлением — и **трудовой**. Есть, кроме того, **Государственная палата**, ведающая по всей Испании отдельными преступлениями вроде терроризма или крупных хозяйственных.",
  "El **Ministerio Fiscal** promueve la acción de la justicia en defensa de la legalidad y del interés público. Su jefe, el **fiscal general del Estado**, lo nombra el rey a propuesta del Gobierno, oído el Consejo General del Poder Judicial.":
    "**Прокурорское ведомство** движет правосудие в защиту законности и общего блага. Его главу, **государственного генерального прокурора**, назначает король по предложению правительства, выслушав Общий совет судебной власти.",
  "¿Cuál es el órgano de gobierno del poder judicial?":
    "Какое учреждение ведает судебной властью?",
  "El Tribunal Supremo": "Верховный суд",
  "El Consejo General del Poder Judicial": "Общий совет судебной власти",
  "El Ministerio de Justicia": "Министерство правосудия",
  "El Tribunal Constitucional": "Конституционный суд",
  "El CGPJ decide nombramientos, ascensos e inspección. El Tribunal Supremo juzga; el Ministerio de Justicia administra medios materiales, y no manda sobre los jueces.":
    "CGPJ решает о назначениях, повышениях и надзоре. Верховный суд судит; министерство правосудия ведает вещественными средствами и судьями не начальствует.",
  "No forma parte del poder judicial: es un órgano **aparte**, regulado en su propio título. Tiene **doce magistrados**, nombrados por el rey a propuesta de cuatro órganos distintos, de modo que ninguno pueda componerlo por su cuenta.":
    "В судебную власть он не входит: это **отдельное** учреждение, устроенное своим собственным разделом. В нём **двенадцать судей**, назначаемых королём по предложению четырёх разных учреждений, чтобы ни одно не могло составить его в одиночку.",
  "Cuatro del Congreso": "Четверо от Конгресса",
  "Elegidos por mayoría de tres quintos de la cámara.":
    "Их избирают большинством в три пятых палаты.",
  "Cuatro del Senado": "Четверо от Сената",
  "También por tres quintos, entre candidatos propuestos por los parlamentos autonómicos.":
    "Тоже тремя пятыми, из кандидатов, предложенных областными собраниями.",
  "Dos del Gobierno": "Двое от правительства",
  "Es la vía más directa del ejecutivo al tribunal.":
    "Это самый прямой путь исполнительной власти в суд.",
  "Dos del CGPJ": "Двое от CGPJ",
  "La aportación del gobierno de los jueces.": "Доля тех, кто ведает судьями.",
  "El mandato es de **nueve años** y el tribunal se renueva **por terceras partes cada tres**, de manera que nunca cambia entero de una vez. Sus competencias principales son el **recurso** y la **cuestión de inconstitucionalidad** contra las leyes, el **recurso de amparo** en defensa de los derechos fundamentales y los **conflictos de competencia** entre el Estado y las comunidades autónomas.":
    "Срок — **девять лет**, и суд обновляется **по трети каждые три года**, так что целиком он никогда разом не меняется. Главные его дела — **жалоба** и **запрос о несоответствии Конституции** против законов, **жалоба о защите** основных прав и **споры о ведении** между государством и автономными сообществами.",
  "¿Cuántos magistrados tiene el Tribunal Constitucional?":
    "Сколько судей в Конституционном суде?",
  "Nueve": "Девять",
  "Veinte": "Двадцать",
  "Doce, nombrados a propuesta de cuatro órganos distintos: cuatro del Congreso, cuatro del Senado, dos del Gobierno y dos del CGPJ. Veinte son los vocales del CGPJ.":
    "Двенадцать, назначенных по предложению четырёх разных учреждений: четверо от Конгресса, четверо от Сената, двое от правительства и двое от CGPJ. А двадцать — это члены самого CGPJ.",
  "¿Forma el Tribunal Constitucional parte del poder judicial?":
    "Входит ли Конституционный суд в судебную власть?",
  "Sí, es su órgano superior": "Да, он высшее её учреждение",
  "No: es un órgano aparte, regulado en su propio título":
    "Нет: это отдельное учреждение, устроенное своим собственным разделом",
  "Sí, es una sala del Tribunal Supremo": "Да, это одна из палат Верховного суда",
  "Solo cuando resuelve recursos de amparo": "Только когда решает по жалобам о защите",
  "Está fuera del poder judicial y por encima de él en su materia. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria; el Constitucional juzga las leyes y los derechos fundamentales.":
    "Он вне судебной власти и выше неё в своём предмете. Верховный суд — вершина обычного правосудия; Конституционный судит законы и основные права.",
  "Los **Tribunales Superiores de Justicia** culminan la organización judicial **en su comunidad**, pero no están por encima del Supremo. Autonómico no significa aquí una instancia más alta, sino un ámbito distinto.":
    "**Высшие суды правосудия** венчают судебное устройство **в своём сообществе**, но выше Верховного не стоят. «Областной» тут значит не более высокую ступень, а иной круг дел.",
  "Elecciones y participación ciudadana": "Выборы и участие граждан",
  "Por qué importa: en España se vota en cuatro elecciones distintas, y en una de ellas no se elige a quien acaba mandando. Ese detalle sorprende a mucha gente el día que estrena el censo.":
    "Почему это важно: в Испании голосуют на четырёх разных выборах, и на одних из них выбирают не того, кто в итоге начальствует. Эта мелочь удивляет многих в тот день, когда они впервые попадают в списки.",
  "Cuatro urnas": "Четыре урны",
  "El sufragio es **universal, libre, igual, directo y secreto**, y se ejerce desde los **dieciocho años**. Se vota en cuatro convocatorias distintas, que no coinciden en el tiempo ni tienen las mismas reglas.":
    "Голосование **всеобщее, свободное, равное, прямое и тайное**, и пользуются им с **восемнадцати лет**. Голосуют на четырёх разных созывах, которые не совпадают по времени и живут не по одним правилам.",
  "Generales": "Общегосударственные",
  "Para el Congreso y el Senado, cada cuatro años salvo disolución anticipada.":
    "В Конгресс и в Сенат, раз в четыре года, если не будет досрочного роспуска.",
  "Autonómicas": "Областные",
  "Para el parlamento de cada comunidad. Muchas coinciden en el mismo día, pero no todas.":
    "В собрание каждого сообщества. Многие приходятся на один день, но не все.",
  "Municipales": "Городские",
  "Para el pleno del ayuntamiento. Se celebran a la vez en toda España.":
    "В общее собрание городской управы. Проходят разом по всей Испании.",
  "Europeas": "Европейские",
  "Para el Parlamento Europeo, con España como circunscripción única.":
    "В Европейский парламент, и вся Испания тут один избирательный округ.",
  "En las **municipales** se eligen **concejales**, no alcaldes. Es el pleno del ayuntamiento, ya constituido, el que **elige al alcalde** entre los cabezas de lista. Si ninguno logra la mayoría absoluta de los concejales, resulta elegido el que encabezó la lista más votada.":
    "На **городских** выборах избирают **гласных**, а не голову. Голову **избирает** уже собранное общее собрание городской управы, из тех, кто возглавлял списки. Если полного большинства гласных не набрал никто, избранным становится тот, чей список получил больше всех голосов.",
  "¿Quién elige al alcalde en España?": "Кто избирает в Испании городского голову?",
  "Los vecinos, con voto directo al candidato": "Жители, голосуя прямо за кандидата",
  "Los concejales, en el pleno de constitución": "Гласные, на учредительном собрании",
  "El presidente de la comunidad autónoma": "Глава автономного сообщества",
  "El delegado del Gobierno": "Уполномоченный правительства",
  "En las municipales se vota una lista de concejales y son ellos quienes eligen alcalde. Si nadie reúne mayoría absoluta, lo es el cabeza de la lista más votada.":
    "На городских выборах голосуют за список гласных, а голову избирают уже они. Если полного большинства не набрал никто, головой становится тот, кто возглавлял самый многоголосый список.",
  "Partidos y sindicatos": "Партии и союзы работников",
  "El **artículo 6** define a los **partidos políticos** como expresión del pluralismo político e instrumento fundamental de la participación, y exige que su **estructura interna y su funcionamiento sean democráticos**. El **artículo 7** dice lo mismo de los **sindicatos** y de las **asociaciones empresariales**.":
    "**Статья 6** определяет **политические партии** как выражение многоголосия в делах государства и как основное орудие участия и требует, чтобы их **внутреннее устройство и работа были народовластными**. **Статья 7** говорит то же о **союзах работников** и о **товариществах хозяев**.",
  "Los dos sindicatos mayoritarios son **Comisiones Obreras** y la **Unión General de Trabajadores**, a los que se suman otros de ámbito autonómico o sectorial. La afiliación es baja en comparación europea, pero su papel es grande, porque los convenios que negocian se aplican a todo el sector y no solo a los afiliados.":
    "Два самых больших союза работников — **Рабочие комиссии** и **Общий союз трудящихся**, а к ним прибавляются другие, областные или по промыслам. Состоящих в них немного по европейской мерке, но вес их велик, потому что выговоренные ими договоры действуют на весь промысел, а не только на своих.",
  "Participar sin ser elegido": "Участвовать, не будучи избранным",
  "Iniciativa legislativa popular": "Народный почин в издании законов",
  "Quinientas mil firmas acreditadas permiten llevar una proposición de ley al Congreso. Quedan fuera materias como los tributos o el derecho de gracia.":
    "Пятьсот тысяч заверенных подписей позволяют внести законопредложение в Конгресс. Вне этого остаются такие предметы, как подати или право милости.",
  "Derecho de petición": "Право прошения",
  "El artículo 29 permite dirigirse por escrito a los poderes públicos. Es antiguo, sencillo y poco usado.":
    "Статья 29 позволяет письменно обращаться к властям. Право это старое, простое и мало используемое.",
  "Referéndum consultivo": "Совещательный референдум",
  "El artículo 92 lo prevé para decisiones de especial trascendencia. Lo convoca el rey, a propuesta del presidente autorizada por el Congreso.":
    "Статья 92 предусматривает его для решений особой важности. Назначает его король, по предложению председателя, одобренному Конгрессом.",
  "El jurado": "Присяжные",
  "El artículo 125 abre la participación en la Administración de Justicia. El tribunal del jurado juzga determinados delitos.":
    "Статья 125 открывает участие в отправлении правосудия. Суд присяжных судит по отдельным преступлениям.",
  "Dos instituciones vigilan por cuenta de las Cortes. El **Defensor del Pueblo** es su **alto comisionado** para la defensa de los derechos del título I: supervisa la actividad de la Administración y puede interponer recursos ante el Tribunal Constitucional, aunque sus resoluciones no son ejecutivas. El **Tribunal de Cuentas** fiscaliza las cuentas y la gestión económica del Estado y del sector público.":
    "От имени Кортесов надзирают два учреждения. **Народный защитник** — их **верховный уполномоченный** по защите прав раздела I: он надзирает за работой управления и может подавать жалобы в Конституционный суд, хотя решения его сами по себе не исполняются. **Счётная палата** проверяет счета и хозяйственные дела государства и всего казённого хозяйства.",
  "¿Cuántas firmas se necesitan para una iniciativa legislativa popular?":
    "Сколько подписей нужно для народного почина в издании законов?",
  "Cincuenta mil": "Пятьдесят тысяч",
  "Cien mil": "Сто тысяч",
  "Quinientas mil": "Пятьсот тысяч",
  "Un millón": "Миллион",
  "Quinientas mil firmas acreditadas. Además hay materias excluidas: los tributos, lo internacional, el derecho de gracia y las leyes orgánicas quedan fuera de esta vía.":
    "Пятьсот тысяч заверенных подписей. И есть предметы, вынутые из этого: подати, дела с другими странами, право милости и органические законы этим путём не проходят.",
  "¿Qué es el Defensor del Pueblo?": "Что такое Народный защитник?",
  "Un tribunal que anula actos administrativos": "Суд, отменяющий распоряжения управления",
  "El alto comisionado de las Cortes para la defensa de los derechos fundamentales":
    "Верховный уполномоченный Кортесов по защите основных прав",
  "Un ministerio del Gobierno": "Одно из министерств правительства",
  "El fiscal jefe del Tribunal Supremo": "Старший прокурор при Верховном суде",
  "Depende de las Cortes, no del Gobierno, y supervisa a la Administración. Sus resoluciones no obligan, pero puede recurrir leyes ante el Tribunal Constitucional.":
    "Он подчинён Кортесам, а не правительству, и надзирает за управлением. Его решения ни к чему не обязывают, но он может обжаловать законы в Конституционном суде.",
  "En las **autonómicas** tampoco se vota directamente al presidente de la comunidad: se elige el parlamento, y este lo inviste. La única elección directa de una persona en España es la del **Senado**.":
    "На **областных** выборах главу сообщества тоже не избирают напрямую: избирают собрание, а оно уже его утверждает. Единственное прямое избрание человека в Испании — это выборы в **Сенат**.",
  "De Hispania a al-Ándalus y los reinos cristianos":
    "От Испании римской к аль-Андалусу и христианским королевствам",
  "Historia de España": "История Испании",
  "Por qué se empieza aquí: durante casi ocho siglos la Península no fue un país sino varios, y dos mundos convivieron en ella. Esa larga frontera interior explica más de España que cualquier fecha suelta.":
    "Почему начинают отсюда: почти восемь веков полуостров был не одной страной, а несколькими, и уживались на нём два мира. Этот долгий рубеж внутри объясняет об Испании больше, чем любая отдельная дата.",
  "Antes de Roma": "До Рима",
  "La Península estuvo poblada por **íberos** en el este y el sur y por pueblos **celtas** en el interior y el noroeste, con **Tartessos** como la civilización más antigua de la que hablan las fuentes. Por la costa llegaron **fenicios**, **griegos** y **cartagineses** a comerciar: **Cádiz**, fundada por fenicios, se considera la ciudad más antigua de Europa occidental.":
    "Полуостров населяли **иберы** на востоке и юге и **кельтские** народы внутри и на северо-западе, а **Тартесс** был древнейшей державой, о которой говорят источники. По берегам приходили торговать **финикийцы**, **греки** и **карфагеняне**: **Кадис**, основанный финикийцами, считают древнейшим городом Западной Европы.",
  "Hispania": "Испания римская",
  "Los romanos desembarcaron en **Ampurias en el 218 antes de Cristo**, durante la segunda guerra púnica, y tardaron **dos siglos** en dominar el territorio: la resistencia del norte no cedió hasta las **guerras cántabras**, hacia el 19 antes de Cristo.":
    "Римляне высадились в **Ампурьясе в 218 году до Рождества Христова**, во вторую пуническую войну, и покоряли эту землю **два века**: сопротивление севера не сломилось до **кантабрийских войн**, около 19 года до Рождества Христова.",
  "De Roma quedan la **lengua** —del latín salen el castellano, el gallego y el catalán—, el **derecho**, las **ciudades** y las obras que aún se usan: el **acueducto de Segovia**, el teatro de **Mérida**, las murallas de Lugo. Hispania dio además al imperio tres emperadores —**Trajano**, **Adriano** y **Teodosio**— y al pensamiento a **Séneca**.":
    "От Рима остались **язык** — из латыни вышли кастильский, галисийский и каталанский, — **право**, **города** и постройки, которыми пользуются до сих пор: **сеговийский водовод**, театр в **Мериде**, стены Луго. Испания дала, кроме того, империи трёх императоров — **Траяна**, **Адриана** и **Феодосия**, — а мысли **Сенеку**.",
  "¿Qué emperadores romanos nacieron en Hispania?": "Какие римские императоры родились в Испании?",
  "Augusto y Nerón": "Август и Нерон",
  "Trajano y Adriano": "Траян и Адриан",
  "César y Calígula": "Цезарь и Калигула",
  "Constantino y Justiniano": "Константин и Юстиниан",
  "Trajano y Adriano nacieron en Itálica, cerca de la actual Sevilla, y Teodosio en la actual Segovia. Hispania no fue solo una provincia: llegó a dar emperadores al imperio.":
    "Траян и Адриан родились в Италике, близ нынешней Севильи, а Феодосий — в нынешней Сеговии. Испания была не просто провинцией: она дала империи императоров.",
  "Los visigodos": "Вестготы",
  "Con el imperio en descomposición entraron **suevos, vándalos y alanos** en el **409**, y tras ellos los **visigodos**, que acabaron formando un reino con capital en **Toledo**. Su momento decisivo llegó en el **589**, cuando el rey **Recaredo** abandonó el arrianismo y se convirtió al **catolicismo** en el III Concilio de Toledo: religión y monarquía quedaron unidas, y así seguirían durante siglos.":
    "Когда империя расползалась, в **409 году** вошли **свевы, вандалы и аланы**, а за ними **вестготы**, которые в конце концов сложили королевство со столицей в **Толедо**. Решающий их час пришёл в **589 году**, когда король **Реккаред** оставил арианство и перешёл в **католичество** на третьем Толедском соборе: вера и королевская власть срослись и оставались вместе века.",
  "711 y al-Ándalus": "711 год и аль-Андалус",
  "En el **711** un ejército musulmán cruzó el Estrecho y derrotó al rey visigodo Rodrigo en la batalla de **Guadalete**. En pocos años dominó casi toda la Península, a la que llamó **al-Ándalus**.":
    "В **711 году** мусульманское войско перешло пролив и разбило вестготского короля Родриго в битве при **Гуадалете**. За несколько лет оно овладело почти всем полуостровом, который назвало **аль-Андалусом**.",
  "El momento de mayor esplendor fue el **Califato de Córdoba**, proclamado por **Abderramán III** en el **929**. Córdoba llegó a ser la ciudad más poblada de Europa occidental, con bibliotecas, baños y una mezquita que aún se levanta. En el **1031** el califato se deshizo en los **reinos de taifas**, y la Península se fragmentó todavía más.":
    "Ярче всего было при **Кордовском халифате**, провозглашённом **Абдаррахманом III** в **929 году**. Кордова стала самым многолюдным городом Западной Европы, с книгохранилищами, банями и мечетью, которая стоит и поныне. В **1031 году** халифат распался на **тайфы**, и полуостров раздробился ещё сильнее.",
  "La Mezquita de Córdoba": "Кордовская мечеть",
  "Ampliada durante dos siglos y convertida en catedral tras la conquista. El bosque de columnas sigue en pie.":
    "Её расширяли два века, а после завоевания обратили в собор. Лес её колонн стоит до сих пор.",
  "La Alhambra": "Альгамбра",
  "Palacio y fortaleza del reino nazarí de Granada, el último de al-Ándalus, construido sobre todo en el siglo XIV.":
    "Дворец и крепость насридского королевства Гранады, последнего в аль-Андалусе, построенные по большей части в четырнадцатом веке.",
  "La Escuela de Toledo": "Толедская школа",
  "Traductores cristianos, musulmanes y judíos vertieron al latín obras griegas y árabes que Europa había perdido.":
    "Переводчики христиане, мусульмане и евреи перелагали на латынь греческие и арабские сочинения, которые Европа успела потерять.",
  "El Camino de Santiago": "Путь святого Иакова",
  "Desde el siglo IX peregrinos de toda Europa cruzan el norte peninsular. Sigue haciéndose hoy.":
    "С девятого века богомольцы со всей Европы идут через север полуострова. Идут и поныне.",
  "¿En qué año cruzaron el Estrecho los ejércitos musulmanes?":
    "В каком году мусульманские войска перешли пролив?",
  "En el 409": "В 409 году",
  "En el 589": "В 589 году",
  "En el 711": "В 711 году",
  "En el 1031": "В 1031 году",
  "El 711, con la derrota del rey visigodo Rodrigo en Guadalete. El 589 es la conversión de Recaredo y el 1031 el fin del Califato de Córdoba.":
    "В 711-м, с разгромом вестготского короля Родриго при Гуадалете. 589-й — это переход Реккареда в католичество, а 1031-й — конец Кордовского халифата.",
  "Los reinos del norte": "Северные королевства",
  "En la franja cantábrica se formó el reino de **Asturias**, cuyo origen la tradición sitúa en **Covadonga**, y de él salieron **León** y **Castilla**. Al este surgieron **Navarra**, **Aragón** y los **condados catalanes**, unidos a Aragón en el siglo XII. Del oeste leonés nació **Portugal**.":
    "На кантабрийской полосе сложилось королевство **Астурия**, начало которого предание относит к **Ковадонге**, и из него вышли **Леон** и **Кастилия**. На востоке поднялись **Наварра**, **Арагон** и **каталонские графства**, соединившиеся с Арагоном в двенадцатом веке. На западе леонском родилась **Португалия**.",
  "El avance hacia el sur fue lento y desigual, con siglos de treguas, pactos y matrimonios además de batallas. **Toledo** cayó en **1085**, la victoria de **Las Navas de Tolosa** en **1212** abrió Andalucía, **Sevilla** en **1248**. Solo quedó el **reino nazarí de Granada**, que resistiría dos siglos y medio más.":
    "Продвижение на юг было медленным и неровным: века перемирий, уговоров и браков наравне с битвами. **Толедо** пал в **1085 году**, победа при **Лас-Навас-де-Толоса** в **1212-м** открыла Андалусию, **Севилья** — в **1248-м**. Осталось лишь **насридское королевство Гранада**, которое продержится ещё два с половиной века.",
  "¿Qué ciudad fue la capital del Califato?": "Какой город был столицей халифата?",
  "Toledo": "Толедо",
  "Córdoba": "Кордова",
  "Sevilla": "Севилья",
  "Córdoba, desde el 929. Toledo había sido la capital visigoda y Granada fue la sede del último reino nazarí, dos siglos y medio después de que el califato desapareciera.":
    "Кордова, с 929 года. Толедо был столицей вестготов, а Гранада — местом последнего насридского королевства, через два с половиной века после того, как халифат исчез.",
  "Ocho siglos no son ocho siglos de guerra continua. Hubo largos periodos de tregua, alianzas cruzadas entre reyes cristianos y musulmanes, y un intercambio constante de libros, cultivos y palabras: buena parte del vocabulario español de la agricultura y la ciencia viene del árabe.":
    "Восемь веков — это не восемь веков непрерывной войны. Были долгие перемирия, перекрёстные союзы между христианскими и мусульманскими королями и постоянный обмен книгами, посевами и словами: немалая часть испанских слов о земледелии и о науке пришла из арабского.",
  "Los Reyes Católicos y la monarquía hispánica": "Католические короли и испанская монархия",
  "Por qué importa: en un solo año, 1492, España termina una guerra de siglos, expulsa a una parte de su población y llega a un continente que no sabía que existía. Casi todo lo que viene después arranca de ahí.":
    "Почему это важно: за один только 1492 год Испания кончает войну, шедшую века, изгоняет часть своего населения и приходит на материк, о существовании которого не знала. Почти всё, что идёт дальше, берёт начало отсюда.",
  "Una unión de personas, no de reinos": "Союз людей, а не королевств",
  "**Isabel de Castilla** y **Fernando de Aragón** se casaron en **1469**. Lo que unieron fue una **corona**, no un Estado: cada reino conservó sus leyes, sus cortes, su moneda y sus aduanas. España nació como una **unión dinástica**, y la unificación jurídica no llegaría hasta el siglo XVIII.":
    "**Изабелла Кастильская** и **Фердинанд Арагонский** обвенчались в **1469 году**. Соединили они **корону**, а не государство: каждое королевство сохранило свои законы, свои кортесы, свою монету и свои таможни. Испания родилась как **союз двух династий**, а слияние в праве придёт только в восемнадцатом веке.",
  "1492": "1492",
  "La toma de Granada": "Взятие Гранады",
  "El 2 de enero cae el último reino nazarí, y con él termina la presencia política musulmana en la Península.":
    "2 января падает последнее насридское королевство, и с ним кончается мусульманская власть на полуострове.",
  "La expulsión de los judíos": "Изгнание евреев",
  "El decreto de marzo obliga a convertirse o marchar. Los sefardíes conservaron durante siglos su lengua, y hoy tienen un plazo reducido para pedir la nacionalidad.":
    "Мартовский указ велит креститься или уходить. Сефарды веками хранили свой язык, и нынче для них укорочен срок прошения о гражданстве.",
  "La llegada a América": "Приход в Америку",
  "El 12 de octubre Colón alcanza una isla del Caribe. Es la fecha de la actual Fiesta Nacional.":
    "12 октября Колумб достигает острова в Карибском море. Это и есть день нынешнего народного праздника.",
  "La Gramática de Nebrija": "Грамматика Небрихи",
  "La primera gramática de una lengua romance. Se publicó ese mismo año, y no por casualidad.":
    "Первая грамматика романского языка. Напечатана в том же самом году, и не случайно.",
  "En **1512** se incorporó **Navarra**, con lo que la Península quedó bajo una sola corona salvo Portugal. La empresa americana convirtió a Castilla en cabeza de un imperio en pocas décadas.":
    "В **1512 году** присоединилась **Наварра**, и полуостров оказался под одной короной, кроме Португалии. Американское предприятие за несколько десятилетий сделало Кастилию во главе целой империи.",
  "¿Qué tres hechos coinciden en el año 1492?": "Какие три события сходятся в 1492 году?",
  "La toma de Granada, la expulsión de los judíos y la llegada a América":
    "Взятие Гранады, изгнание евреев и приход в Америку",
  "La unión de Castilla y Aragón, la conquista de Navarra y la de Portugal":
    "Союз Кастилии и Арагона, завоевание Наварры и завоевание Португалии",
  "La llegada de los Borbones, Utrecht y los Decretos de Nueva Planta":
    "Приход Бурбонов, Утрехт и указы о новом устройстве",
  "La fundación de Madrid, la de Sevilla y la de Cádiz": "Основание Мадрида, Севильи и Кадиса",
  "Los tres ocurren en 1492, junto con la publicación de la primera gramática castellana. Navarra se incorporó en 1512 y Portugal solo estuvo unido a la corona entre 1580 y 1640.":
    "Все три случились в 1492 году, вместе с напечатанием первой кастильской грамматики. Наварра присоединилась в 1512-м, а Португалия была под той же короной только с 1580 по 1640 год.",
  "Los Austrias": "Австрийский дом",
  "**Carlos I** heredó en **1516** un conjunto sin precedentes: Castilla, Aragón, los territorios italianos, Flandes, Austria y América. Como **Carlos V** fue también emperador del Sacro Imperio. Su hijo **Felipe II** fijó la capital en **Madrid** en **1561**, construyó **El Escorial** y sumó **Portugal** en **1580**, en una unión que duraría hasta **1640**.":
    "**Карл I** унаследовал в **1516 году** невиданное дотоле собрание земель: Кастилию, Арагон, итальянские владения, Фландрию, Австрию и Америку. Как **Карл V** он был ещё и императором Священной империи. Его сын **Филипп II** положил столицу в **Мадриде** в **1561 году**, построил **Эскориал** и прибавил **Португалию** в **1580-м**, и союз этот продержится до **1640 года**.",
  "De aquella extensión viene la frase del imperio **donde nunca se ponía el sol**. También vinieron guerras interminables, tres bancarrotas y una economía que dependía de la plata americana más que de su propia producción.":
    "От этой шири и пошли слова об империи, **над которой никогда не заходит солнце**. Пошли от неё и бесконечные войны, три казённых разорения и хозяйство, зависевшее от американского серебра больше, чем от собственного труда.",
  "El Siglo de Oro": "Золотой век",
  "Mientras el poder político se desgastaba, la cultura vivió su mayor momento. **Cervantes** publicó el **Quijote** en **1605**, considerado la primera novela moderna; escribieron **Lope de Vega**, **Calderón**, **Quevedo** y **Góngora**; pintaron **El Greco**, **Velázquez** y **Murillo**. **Las Meninas**, de 1656, sigue en el **Museo del Prado**.":
    "Пока государственная власть изнашивалась, искусство переживало свой лучший час. **Сервантес** напечатал **«Дон Кихота»** в **1605 году**, и его считают первым нынешним романом; писали **Лопе де Вега**, **Кальдерон**, **Кеведо** и **Гонгора**; писали красками **Эль Греко**, **Веласкес** и **Мурильо**. **«Менины»** 1656 года по-прежнему в **музее Прадо**.",
  "¿Quién escribió el Quijote?": "Кто написал «Дон Кихота»?",
  "Lope de Vega": "Лопе де Вега",
  "Miguel de Cervantes": "Мигель де Сервантес",
  "Francisco de Quevedo": "Франсиско де Кеведо",
  "Pedro Calderón de la Barca": "Педро Кальдерон де ла Барка",
  "Cervantes publicó la primera parte en 1605 y la segunda en 1615. Se considera la primera novela moderna, y el 23 de abril, fecha de su muerte, es el Día del Libro.":
    "Сервантес напечатал первую часть в 1605 году, а вторую в 1615-м. Её считают первым нынешним романом, а 23 апреля, день его смерти, — День книги.",
  "Los Borbones": "Бурбоны",
  "La muerte sin descendencia del último Austria abrió en **1700** la **Guerra de Sucesión**, una guerra europea peleada también dentro de España. La ganó **Felipe V**, el primer **Borbón**, y el **Tratado de Utrecht** de **1713** repartió los despojos: España perdió sus territorios europeos y **Gibraltar**, que sigue siendo británico.":
    "Смерть последнего австрийца без потомства открыла в **1700 году** **войну за наследство**, войну общеевропейскую, которую вели и внутри Испании. Выиграл её **Филипп V**, первый **Бурбон**, а **Утрехтский договор** **1713 года** разделил добычу: Испания потеряла свои европейские владения и **Гибралтар**, который и поныне британский.",
  "Felipe V impuso los **Decretos de Nueva Planta**, que suprimieron las instituciones propias de la Corona de Aragón y extendieron el modelo castellano. La unión dinástica de 1469 se convirtió entonces, dos siglos y medio después, en un Estado unificado.":
    "Филипп V наложил **указы о новом устройстве**, которые упразднили собственные учреждения Арагонской короны и распространили кастильский образец. Союз двух династий 1469 года обратился тогда, через два с половиной века, в единое государство.",
  "¿Qué dinastía llegó al trono tras la Guerra de Sucesión?":
    "Какой дом взошёл на престол после войны за наследство?",
  "Los Trastámara": "Трастамара",
  "Los Saboya": "Савойский дом",
  "Los Borbones, con Felipe V, y siguen reinando hoy. Los Trastámara fueron la dinastía de los Reyes Católicos y los Saboya solo dieron un rey, Amadeo I, en el siglo XIX.":
    "Бурбоны, с Филиппом V, и царствуют они поныне. Трастамара были домом Католических королей, а Савойский дом дал лишь одного короля, Амадея I, в девятнадцатом веке.",
  "La unión de 1469 fue **dinástica**. Castilla y Aragón mantuvieron leyes, cortes y aduanas propias durante dos siglos y medio, y quien las suprimió fue un Borbón en el siglo XVIII, no los Reyes Católicos.":
    "Союз 1469 года был **династическим**. Кастилия и Арагон два с половиной века держали свои законы, свои кортесы и свои таможни, а упразднил их Бурбон в восемнадцатом веке, а вовсе не Католические короли.",
  "El siglo XIX": "Девятнадцатый век",
  "Por qué importa: en cien años España pierde un imperio, estrena su primera constitución, se pelea consigo misma tres veces y prueba una república que dura once meses. La inestabilidad del XIX explica la del XX.":
    "Почему это важно: за сто лет Испания теряет империю, впервые пробует конституцию, трижды воюет сама с собой и пробует республику, которая живёт одиннадцать месяцев. Шаткостью девятнадцатого века объясняется шаткость двадцатого.",
  "1808": "1808",
  "Napoleón entró en España con la excusa de atravesarla hacia Portugal y acabó colocando en el trono a su hermano **José I**. El **2 de mayo de 1808** el pueblo de Madrid se levantó, y con él el resto del país: empezó la **Guerra de la Independencia**, seis años de guerra irregular que dieron al mundo la palabra **guerrilla**.":
    "Наполеон вошёл в Испанию под тем предлогом, что идёт через неё в Португалию, а кончил тем, что посадил на престол своего брата **Иосифа I**. **2 мая 1808 года** народ Мадрида поднялся, а за ним и вся страна: началась **война за независимость**, шесть лет войны без правил, давшей миру слово **герилья**.",
  "La Pepa": "«Ла Пепа»",
  "Mientras el país estaba ocupado, unas Cortes reunidas en **Cádiz** —la ciudad que resistía— aprobaron el **19 de marzo de 1812** la primera **Constitución** española. Como ese día es San José, se la conoce como **La Pepa**.":
    "Пока страна была занята чужим войском, Кортесы, сошедшиеся в **Кадисе** — городе, который не сдавался, — приняли **19 марта 1812 года** первую испанскую **Конституцию**. А так как это день святого Иосифа, её зовут **«Ла Пепой»**.",
  "Proclamaba la **soberanía nacional**, la división de poderes y la libertad de imprenta. Duró poco: **Fernando VII** volvió en **1814**, la derogó y restauró el absolutismo. Ese vaivén entre texto liberal y vuelta atrás se repetiría durante todo el siglo.":
    "Она провозглашала **народное верховенство**, разделение властей и свободу печати. Прожила она недолго: **Фердинанд VII** вернулся в **1814 году**, отменил её и восстановил самодержавие. Это качание между вольным текстом и откатом назад будет повторяться весь век.",
  "¿Cómo se conoce popularmente la Constitución de 1812?":
    "Как в народе зовут Конституцию 1812 года?",
  "La Gloriosa": "«Ла Глориоса»",
  "La Nanita": "«Ла Нанита»",
  "La Cadista": "«Ла Кадиста»",
  "Se aprobó el 19 de marzo, día de San José, y de ahí el apodo. La Gloriosa es en cambio el nombre de la revolución de 1868.":
    "Её приняли 19 марта, в день святого Иосифа, отсюда и прозвище. А «Ла Глориоса» — это имя переворота 1868 года.",
  "El fin del imperio americano": "Конец американской империи",
  "El vacío de poder de 1808 fue el detonante que las colonias esperaban. Entre **1810 y 1824** los territorios continentales de América se independizaron uno tras otro, y la batalla de **Ayacucho**, en 1824, cerró el proceso. Quedaron solo **Cuba**, **Puerto Rico** y **Filipinas**.":
    "Безвластие 1808 года стало той искрой, которой ждали заморские владения. Между **1810 и 1824 годами** материковые земли Америки одна за другой стали независимыми, а битва при **Аякучо** в 1824 году закрыла это дело. Остались только **Куба**, **Пуэрто-Рико** и **Филиппины**.",
  "Un siglo de conflictos": "Век раздоров",
  "Las guerras carlistas": "Карлистские войны",
  "Tres guerras civiles desde 1833 entre los partidarios de Isabel II y los del pretendiente Carlos. Enfrentaron dos ideas de país.":
    "Три междоусобные войны с 1833 года между сторонниками Изабеллы II и сторонниками притязателя Карлоса. Столкнулись в них два представления о стране.",
  "El Sexenio Democrático": "Народовластное шестилетие",
  "De 1868 a 1874, tras la revolución llamada la Gloriosa. Incluyó un rey importado, Amadeo de Saboya, que abdicó a los dos años.":
    "С 1868 по 1874 год, после переворота, прозванного «Ла Глориосой». Был в нём и привозной король, Амадей Савойский, который через два года отрёкся.",
  "La Primera República": "Первая Республика",
  "Proclamada en 1873, duró once meses y tuvo cuatro presidentes. Terminó con un golpe militar.":
    "Провозглашённая в 1873 году, она прожила одиннадцать месяцев и сменила четырёх председателей. Кончилась военным переворотом.",
  "La Restauración": "Восстановление монархии",
  "Desde 1875, con Alfonso XII. Cánovas diseñó un turno pactado entre dos partidos, sostenido por el caciquismo en el campo.":
    "С 1875 года, при Альфонсе XII. Кановас придумал уговорную очерёдность двух партий, державшуюся на власти сельских заправил.",
  "¿Cuánto duró la Primera República española?": "Сколько прожила первая испанская Республика?",
  "Once meses": "Одиннадцать месяцев",
  "Tres años": "Три года",
  "Ocho años": "Восемь лет",
  "Veinte años": "Двадцать лет",
  "Proclamada en febrero de 1873 y terminada por un golpe a comienzos de 1874, con cuatro presidentes en ese tiempo. La Segunda República, de 1931, duró ocho años.":
    "Провозглашена в феврале 1873 года и кончена переворотом в начале 1874-го, и за это время сменилось четыре председателя. Вторая Республика, с 1931 года, прожила восемь лет.",
  "El Desastre": "Крушение",
  "En **1898**, tras una guerra breve con **Estados Unidos**, España perdió **Cuba**, **Puerto Rico** y **Filipinas**. Se lo llamó simplemente **el Desastre**, y el golpe fue más moral que militar: el país descubrió de golpe que ya no era una potencia.":
    "В **1898 году**, после короткой войны с **Соединёнными Штатами**, Испания потеряла **Кубу**, **Пуэрто-Рико** и **Филиппины**. Это назвали попросту **Крушением**, и удар был скорее душевным, чем военным: страна разом обнаружила, что она уже не держава.",
  "De esa conmoción salió la **Generación del 98**, un grupo de escritores —Unamuno, Baroja, Azorín, Machado— que se preguntó qué era España y qué debía hacer consigo misma. La pregunta atravesaría todo el siglo siguiente.":
    "Из этого потрясения вышло **поколение девяносто восьмого года**, кружок писателей — Унамуно, Бароха, Асорин, Мачадо, — спросивших себя, что такое Испания и что ей делать с собою. Этот вопрос пройдёт через весь следующий век.",
  "Mientras tanto, **Cataluña** y el **País Vasco** se industrializaban: el textil catalán y la siderurgia vasca crearon las primeras grandes concentraciones obreras, y con ellas el movimiento sindical. El **PSOE** se había fundado en **1879**.":
    "Тем временем **Каталония** и **Страна Басков** обзаводились промышленностью: каталонское ткачество и баскское литьё создали первые большие рабочие скопления, а с ними и движение союзов работников. **PSOE** была основана в **1879 году**.",
  "¿Qué territorios perdió España en 1898?": "Какие земли Испания потеряла в 1898 году?",
  "México, Perú y Colombia": "Мексику, Перу и Колумбию",
  "Cuba, Puerto Rico y Filipinas": "Кубу, Пуэрто-Рико и Филиппины",
  "Gibraltar y el Sáhara": "Гибралтар и Сахару",
  "Flandes y los territorios italianos": "Фландрию и итальянские владения",
  "Las últimas posesiones de ultramar, tras una guerra breve con Estados Unidos. La América continental se había independizado setenta años antes, y Gibraltar se perdió en 1713.":
    "Последние заморские владения, после короткой войны с Соединёнными Штатами. Материковая Америка стала независимой семьюдесятью годами раньше, а Гибралтар потеряли в 1713-м.",
  "La Constitución de 1812 y la de 1978 se citan a veces juntas y no se parecen en nada salvo en el nombre. Entre ambas hubo otras cinco, más varios proyectos que no llegaron a regir.":
    "Конституцию 1812 года и Конституцию 1978-го иногда поминают рядом, а сходства между ними нет никакого, кроме имени. Между ними было ещё пять, да несколько замыслов, так и не вступивших в силу.",
  "República, Guerra Civil y dictadura": "Республика, гражданская война и единовластие",
  "Por qué importa: son los cuarenta y cinco años que la Constitución de 1978 tiene detrás. Casi cada decisión de aquel texto —el consenso, la rigidez, la censura constructiva— es una respuesta a algo que ocurrió aquí.":
    "Почему это важно: это те сорок пять лет, что стоят за спиной Конституции 1978 года. Едва ли не всякое решение того текста — общее согласие, жёсткость, созидательное недоверие — есть ответ на то, что случилось здесь.",
  "El 14 de abril": "14 апреля",
  "Tras la dictadura de **Primo de Rivera**, entre 1923 y 1930, las **elecciones municipales** del 12 de abril de 1931 se leyeron como un plebiscito sobre la monarquía. Las ciudades votaron republicano; **Alfonso XIII** salió de España y el **14 de abril de 1931** se proclamó la **Segunda República**.":
    "После единовластия **Примо де Риверы**, с 1923 по 1930 год, **городские выборы** 12 апреля 1931 года прочли как всенародный опрос о монархии. Города проголосовали за республику; **Альфонс XIII** покинул Испанию, и **14 апреля 1931 года** была провозглашена **Вторая Республика**.",
  "La **Constitución de 1931** fue de las más avanzadas de su tiempo: Estado laico, **divorcio**, y sobre todo el **voto femenino**, defendido en las Cortes por **Clara Campoamor** contra buena parte de su propio grupo. Las mujeres votaron por primera vez en **1933**. Se aprobaron además los primeros **estatutos de autonomía**, el de Cataluña en 1932.":
    "**Конституция 1931 года** была из самых передовых для своего времени: светское государство, **развод** и прежде всего **женский голос**, который отстаивала в Кортесах **Клара Кампоамор** против доброй половины своих же. Женщины впервые голосовали в **1933 году**. Приняли, кроме того, первые **уставы о самоуправлении**, каталонский — в 1932-м.",
  "¿Qué día se proclamó la Segunda República?":
    "В какой день была провозглашена Вторая Республика?",
  "El 12 de abril de 1931": "12 апреля 1931 года",
  "El 14 de abril de 1931": "14 апреля 1931 года",
  "El 18 de julio de 1936": "18 июля 1936 года",
  "El 1 de abril de 1939": "1 апреля 1939 года",
  "El 12 de abril fueron las municipales y el 14 la proclamación. El 18 de julio de 1936 comienza la guerra y el 1 de abril de 1939 termina.":
    "12 апреля были городские выборы, а 14-го — провозглашение. 18 июля 1936 года война начинается, 1 апреля 1939-го — кончается.",
  "La guerra": "Война",
  "El **17 y 18 de julio de 1936** una parte del ejército se sublevó contra el Gobierno de la República. El golpe triunfó en unas zonas y fracasó en otras, y ese fracaso parcial fue precisamente lo que convirtió una sublevación en una **guerra civil** de casi tres años.":
    "**17 и 18 июля 1936 года** часть войска восстала против правительства Республики. Переворот удался в одних краях и провалился в других, и как раз этот половинчатый провал превратил мятеж в **междоусобную войну** длиною почти в три года.",
  "Fue también un ensayo de la guerra europea que venía: Alemania e Italia apoyaron al bando sublevado y la Unión Soviética al republicano, mientras las democracias se mantenían en la no intervención. El bombardeo de **Guernica** en **1937** dio a Picasso el motivo de su cuadro más conocido, hoy en el **Museo Reina Sofía**.":
    "Была она и пробой той европейской войны, что шла следом: Германия и Италия стояли за восставших, а Советский Союз за республиканцев, тогда как народовластные державы держались невмешательства. Бомбёжка **Герники** в **1937 году** дала Пикассо предмет его самой известной картины, ныне в **музее королевы Софии**.",
  "La guerra terminó el **1 de abril de 1939**. Dejó cientos de miles de muertos y un **exilio** de medio millón de personas, entre ellas buena parte de los científicos, escritores y maestros del país.":
    "Война кончилась **1 апреля 1939 года**. После неё остались сотни тысяч убитых и **изгнание** полумиллиона человек, среди которых была добрая часть учёных, писателей и учителей страны.",
  "¿Cuándo terminó la Guerra Civil española?": "Когда кончилась испанская гражданская война?",
  "En 1936": "В 1936 году",
  "En 1937": "В 1937 году",
  "En 1939": "В 1939 году",
  "En 1945": "В 1945 году",
  "El 1 de abril de 1939, cinco meses antes de que empezara la Segunda Guerra Mundial. El bombardeo de Guernica fue en 1937.":
    "1 апреля 1939 года, за пять месяцев до начала Второй мировой войны. Бомбёжка Герники была в 1937-м.",
  "La dictadura": "Единовластие",
  "**Francisco Franco** gobernó desde **1939 hasta 1975**. Se suprimieron los partidos y los sindicatos libres, se implantó la **censura**, se persiguió a los vencidos y las lenguas distintas del castellano quedaron fuera de la escuela y de la vida pública.":
    "**Франсиско Франко** правил с **1939 по 1975 год**. Партии и свободные союзы работников были упразднены, введена **цензура**, побеждённых преследовали, а языки, кроме кастильского, оказались вне школы и вне общественной жизни.",
  "La autarquía": "Опора на себя",
  "Los años cuarenta: aislamiento internacional, cartillas de racionamiento y hambre. Se los llamó los años del hambre.":
    "Сороковые годы: отрезанность от других стран, продовольственные карточки и голод. Их так и назвали — голодными годами.",
  "1953 y 1955": "1953 и 1955 годы",
  "Los acuerdos con Estados Unidos y el concordato con la Santa Sede rompen el aislamiento; en 1955 España ingresa en la ONU.":
    "Соглашения с Соединёнными Штатами и договор со Святым престолом ломают отрезанность; в 1955 году Испания входит в ООН.",
  "El desarrollismo": "Пора роста",
  "En los sesenta llegan la industria, el turismo de sol y playa y las divisas de dos millones de emigrantes en Europa.":
    "В шестидесятые приходят промышленность, приезжие ради солнца и пляжа и чужие деньги от двух миллионов уехавших в Европу.",
  "1973": "1973",
  "El almirante Carrero Blanco, sucesor previsto en la presidencia, muere en un atentado de ETA. El plan de continuidad se rompe.":
    "Адмирал Карреро Бланко, намеченный преемник на посту председателя, гибнет от покушения ЭТА. Замысел преемственности рушится.",
  "En **1969** Franco designó sucesor a título de rey a **Juan Carlos de Borbón**, nieto de Alfonso XIII. Franco murió el **20 de noviembre de 1975**, y lo que ocurrió después no estaba escrito en ninguna parte.":
    "В **1969 году** Франко назначил преемником с королевским званием **Хуана Карлоса Бурбона**, внука Альфонса XIII. Франко умер **20 ноября 1975 года**, а то, что случилось дальше, не было записано нигде.",
  "¿Quién defendió el voto femenino en las Cortes republicanas?":
    "Кто отстаивал женский голос в республиканских Кортесах?",
  "Victoria Kent": "Виктория Кент",
  "Clara Campoamor": "Клара Кампоамор",
  "Dolores Ibárruri": "Долорес Ибаррури",
  "María Zambrano": "Мария Самбрано",
  "Clara Campoamor lo defendió y lo sacó adelante, en contra de buena parte de su propio grupo. Victoria Kent, también diputada, se opuso entonces por temor al voto conservador de las mujeres.":
    "Клара Кампоамор отстояла его и провела, против доброй половины своих же. Виктория Кент, тоже депутат, была тогда против, боясь, что женщины проголосуют за старый порядок.",
  "La Segunda República duró **ocho años** y solo los tres últimos fueron de guerra. No son lo mismo, aunque se nombren muchas veces de un tirón.":
    "Вторая Республика прожила **восемь лет**, и лишь последние три из них были военными. Это не одно и то же, хотя их часто поминают одним духом.",
  "La Transición y la democracia": "Переход и народовластие",
  "Por qué importa: en tres años España pasó de una dictadura a una democracia sin romper la legalidad anterior y sin una nueva guerra. Cómo se hizo eso es la explicación de casi todo el sistema descrito en el capítulo dos.":
    "Почему это важно: за три года Испания перешла от единовластия к народовластию, не сломав прежней законности и не начав новой войны. Как это сделали — вот объяснение почти всего устройства, описанного во второй главе.",
  "De la ley a la ley": "От закона к закону",
  "**Juan Carlos I** fue proclamado rey el **22 de noviembre de 1975**, dos días después de la muerte de Franco, dentro de las reglas del régimen. En julio de **1976** nombró presidente del Gobierno a **Adolfo Suárez**, procedente del propio aparato franquista, lo que casi nadie interpretó entonces como una buena noticia.":
    "**Хуан Карлос I** был провозглашён королём **22 ноября 1975 года**, через два дня после смерти Франко, по правилам того же строя. В июле **1976 года** он назначил председателем правительства **Адольфо Суареса**, вышедшего из самих франкистских рядов, и мало кто счёл тогда это доброй вестью.",
  "Suárez llevó a las Cortes del régimen la **Ley para la Reforma Política**, que en la práctica las disolvía y abría elecciones libres. Las Cortes la aprobaron y el pueblo la ratificó en referéndum en **diciembre de 1976**. De ahí la fórmula con que se resume la Transición: se fue **de la ley a la ley**, sin ruptura formal.":
    "Суарес внёс в Кортесы того же строя **закон о переустройстве государственных дел**, который на деле их распускал и открывал свободные выборы. Кортесы его приняли, а народ утвердил на референдуме в **декабре 1976 года**. Отсюда и присказка, которой сводят весь переход: шли **от закона к закону**, без разрыва на бумаге.",
  "En abril de **1977**, un **Sábado Santo**, se legalizó el **Partido Comunista**, la decisión más arriesgada del periodo. El **15 de junio de 1977** se celebraron las **primeras elecciones libres** desde 1936.":
    "В апреле **1977 года**, в **Великую субботу**, узаконили **коммунистическую партию** — самое рискованное решение той поры. **15 июня 1977 года** прошли **первые свободные выборы** с 1936 года.",
  "¿Quién fue el presidente del Gobierno que dirigió la Transición?":
    "Кто был председателем правительства, который вёл переход?",
  "Leopoldo Calvo-Sotelo": "Леопольдо Кальво-Сотело",
  "Adolfo Suárez": "Адольфо Суарес",
  "Felipe González": "Фелипе Гонсалес",
  "Manuel Fraga": "Мануэль Фрага",
  "Adolfo Suárez, nombrado en 1976 y ganador de las elecciones de 1977 y 1979. Calvo-Sotelo le sucedió en 1981 y Felipe González ganó en 1982.":
    "Адольфо Суарес, назначенный в 1976 году и выигравший выборы 1977 и 1979 годов. Кальво-Сотело сменил его в 1981-м, а Фелипе Гонсалес победил в 1982-м.",
  "Los años difíciles": "Тяжёлые годы",
  "En **octubre de 1977** los partidos firmaron los **Pactos de la Moncloa**, un acuerdo económico y social que permitió afrontar la inflación y el paro sin que el sistema saltara por los aires. Al año siguiente se aprobó la **Constitución**.":
    "В **октябре 1977 года** партии подписали **Монклоаские уговоры**, соглашение о хозяйстве и об общественной жизни, которое позволило встретить обесценение денег и безработицу так, чтобы всё устройство не разлетелось. На следующий год приняли **Конституцию**.",
  "El momento más peligroso llegó el **23 de febrero de 1981**: un grupo de guardias civiles asaltó el Congreso durante la votación de investidura y secuestró al Gobierno y a los diputados. El golpe fracasó esa misma noche. Fue el último intento de volver atrás por la fuerza.":
    "Самый опасный час пришёл **23 февраля 1981 года**: отряд гражданской гвардии ворвался в Конгресс во время голосования об утверждении в должности и захватил правительство и депутатов. Переворот провалился в ту же ночь. Это была последняя попытка вернуться назад силой.",
  "¿Qué ocurrió el 23 de febrero de 1981?": "Что случилось 23 февраля 1981 года?",
  "Se aprobó la Constitución": "Приняли Конституцию",
  "Un intento de golpe de Estado en el Congreso":
    "Попытка государственного переворота в Конгрессе",
  "España entró en la Comunidad Económica Europea":
    "Испания вошла в Европейское экономическое сообщество",
  "Se celebraron las primeras elecciones libres": "Прошли первые свободные выборы",
  "El asalto al Congreso durante una votación de investidura, conocido desde entonces como el 23-F. Fracasó esa misma noche y fue el último intento de volver atrás por la fuerza.":
    "Приступ Конгресса во время голосования об утверждении в должности, известный с тех пор как 23-F. Он провалился в ту же ночь и был последней попыткой вернуться назад силой.",
  "La normalidad": "Обыкновенная жизнь",
  "1982": "1982",
  "El PSOE gana con mayoría absoluta y gobierna hasta 1996. La alternancia demuestra que el sistema funciona.":
    "PSOE побеждает с полным большинством и правит до 1996 года. Смена у власти доказывает, что устройство работает.",
  "1986": "1986",
  "España entra en la Comunidad Económica Europea y ratifica en referéndum su permanencia en la OTAN.":
    "Испания входит в Европейское экономическое сообщество и утверждает на референдуме своё пребывание в НАТО.",
  "1992": "1992",
  "Juegos Olímpicos de Barcelona, Exposición Universal de Sevilla y el primer tren de alta velocidad. El año en que el país se enseña al mundo.":
    "Олимпийские игры в Барселоне, Всемирная выставка в Севилье и первый скорый поезд. Год, когда страна показала себя миру.",
  "2002": "2002",
  "El euro sustituye a la peseta en los bolsillos, tras tres años de existir solo en las cuentas.":
    "Евро сменяет песету в карманах, прожив три года только в счетах.",
  "El **11 de marzo de 2004** una serie de bombas en trenes de cercanías de Madrid causó ciento noventa y tres muertos: el mayor atentado de la historia de España. **ETA**, que había matado a más de ochocientas personas desde los años sesenta, anunció el fin de su actividad armada en 2011 y su disolución en 2018.":
    "**11 марта 2004 года** взрывы в пригородных поездах Мадрида убили сто девяносто три человека: самое кровавое покушение в истории Испании. **ЭТА**, убившая с шестидесятых годов более восьмисот человек, объявила о конце вооружённой борьбы в 2011 году и о своём роспуске в 2018-м.",
  "En **2014** **Juan Carlos I abdicó** y fue proclamado **Felipe VI**. El sistema autonómico, que la Constitución dejó abierto, se completó en los años ochenta y noventa hasta las diecisiete comunidades y las dos ciudades autónomas de hoy.":
    "В **2014 году** **Хуан Карлос I отрёкся**, и был провозглашён **Филипп VI**. Устройство самоуправных областей, которое Конституция оставила незакрытым, доросло в восьмидесятые и девяностые до нынешних семнадцати сообществ и двух самоуправных городов.",
  "¿En qué año entró España en la Comunidad Económica Europea?":
    "В каком году Испания вошла в Европейское экономическое сообщество?",
  "En 1978": "В 1978 году",
  "En 1982": "В 1982 году",
  "En 1986": "В 1986 году",
  "En 1992": "В 1992 году",
  "El 1 de enero de 1986, junto con Portugal. Ese mismo año se celebró el referéndum sobre la permanencia en la OTAN.":
    "1 января 1986 года, вместе с Португалией. В тот же год прошёл референдум о пребывании в НАТО.",
  "La Transición no fue una ruptura sino una **reforma pactada**: las instituciones del régimen aprobaron su propia disolución. Esa elección explica tanto la estabilidad posterior como los debates que siguen abiertos sobre lo que quedó sin resolver.":
    "Переход был не разрывом, а **уговорным переустройством**: учреждения прежнего строя приняли свой собственный роспуск. Этим выбором объясняется и последующая устойчивость, и не закрытые доныне споры о том, что осталось нерешённым.",
  "Las comunidades autónomas": "Автономные сообщества",
  "El Estado autonómico, el territorio y las lenguas":
    "Государство самоуправных областей, земля и языки",
  "Por qué importa: la Constitución no dibujó un mapa. Reconoció un derecho y dejó que el mapa se hiciera solo, y el resultado es uno de los Estados más descentralizados de Europa sin ser formalmente federal.":
    "Почему это важно: Конституция не начертила карты. Она признала право и дала карте сложиться самой, а вышло одно из самых рассредоточенных государств Европы, союзным при этом на бумаге не будучи.",
  "Un modelo abierto": "Незакрытый образец",
  "El **título VIII** no enumera comunidades: establece **cómo** pueden constituirse. Las provincias limítrofes con características históricas, culturales y económicas comunes podían acceder al autogobierno, y de ese procedimiento salieron **diecisiete comunidades autónomas** y, desde **1995**, las **dos ciudades autónomas** de **Ceuta** y **Melilla**.":
    "**Раздел VIII** сообществ не перечисляет: он устанавливает, **как** они могут сложиться. Соседние провинции с общими историческими, культурными и хозяйственными чертами могли получить самоуправление, и из этого порядка вышли **семнадцать автономных сообществ**, а с **1995 года** — и **два самоуправных города**, **Сеута** и **Мелилья**.",
  "Hubo **dos vías**. La del **artículo 151**, más rápida y con más competencias desde el principio, la siguieron **Cataluña**, el **País Vasco**, **Galicia** y **Andalucía**. La del **artículo 143**, más lenta, la recorrieron las demás. Con los años las diferencias se fueron igualando en buena medida.":
    "Путей было **два**. Путём **статьи 151**, более быстрым и с бóльшим кругом дел с самого начала, пошли **Каталония**, **Страна Басков**, **Галисия** и **Андалусия**. Путём **статьи 143**, более медленным, прошли остальные. С годами разница по большей части сгладилась.",
  "El estatuto": "Устав",
  "Cada comunidad tiene un **Estatuto de Autonomía**, que la Constitución llama su **norma institucional básica**. No es una ley cualquiera: se aprueba como **ley orgánica** de las Cortes Generales, de modo que forma parte a la vez del ordenamiento autonómico y del estatal.":
    "У каждого сообщества есть **Устав о самоуправлении**, который Конституция зовёт его **основной учредительной нормой**. Это не всякий закон: его принимают как **органический закон** Генеральных Кортесов, так что он разом принадлежит и областному, и государственному правопорядку.",
  "Asamblea legislativa": "Законодательное собрание",
  "El parlamento de la comunidad, elegido por sus ciudadanos. Aprueba las leyes autonómicas y el presupuesto.":
    "Собрание сообщества, избираемое его жителями. Оно принимает областные законы и роспись казны.",
  "Consejo de Gobierno": "Правительственный совет",
  "El ejecutivo, con su presidente al frente, investido por la asamblea igual que en el Estado.":
    "Исполнительная власть, во главе со своим председателем, которого собрание утверждает так же, как это делается в государстве.",
  "Tribunal Superior de Justicia": "Высший суд правосудия",
  "Culmina la organización judicial en el territorio, sin ser una instancia por encima del Tribunal Supremo.":
    "Он венчает судебное устройство своей земли, но выше Верховного суда не стоит.",
  "Delegado del Gobierno": "Уполномоченный правительства",
  "Representa a la Administración del Estado en la comunidad. No es un cargo autonómico: lo nombra el Gobierno central.":
    "Он представляет государственное управление в сообществе. Должность эта не областная: его назначает средоточное правительство.",
  "¿Cuántas comunidades autónomas tiene España?": "Сколько в Испании автономных сообществ?",
  "Diecisiete": "Семнадцать",
  "Diecinueve": "Девятнадцать",
  "Cincuenta": "Пятьдесят",
  "Diecisiete comunidades, más las ciudades autónomas de Ceuta y Melilla desde 1995. Cincuenta es el número de provincias, que es otra división.":
    "Семнадцать сообществ, да ещё самоуправные города Сеута и Мелилья с 1995 года. Пятьдесят — это число провинций, а это другое деление.",
  "Quién hace qué": "Кто что делает",
  "El **artículo 149** enumera las materias **exclusivas del Estado**: relaciones internacionales, defensa, administración de justicia, moneda, legislación mercantil, penal y laboral, y la regulación básica de muchas otras. El **artículo 148** enumera las que las comunidades **pueden asumir**: urbanismo, agricultura, turismo, sanidad e higiene, cultura, y por esa vía se llega a la sanidad y la educación que hoy gestionan.":
    "**Статья 149** перечисляет предметы, **оставленные государству**: дела с другими странами, оборона, отправление правосудия, деньги, торговое, уголовное и трудовое законодательство и основные нормы многого другого. **Статья 148** перечисляет то, что сообщества **могут взять на себя**: застройка, земледелие, приезжие, здравоохранение и чистота, культура, — и этим путём доходят до здравоохранения и образования, которыми они нынче ведают.",
  "La **financiación** sigue dos regímenes. La mayoría está en el **régimen común**, con una parte de los impuestos cedida y un fondo de reparto. El **País Vasco** y **Navarra** tienen **régimen foral** —el **concierto** y el **convenio**— por el que recaudan sus propios impuestos y pagan al Estado una cantidad por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "**Деньги** идут двумя порядками. Большинство живёт по **общему порядку**, при котором им отдана часть налогов и есть общий раздаточный запас. У **Страны Басков** и **Наварры** — **старинный порядок**, **соглашение** и **договор**, по которому они сами собирают свои налоги и платят государству известную сумму за общие службы. Это историческое исключение признано в первом добавочном положении.",
  "¿Qué comunidades tienen régimen foral de financiación?":
    "У каких сообществ старинный порядок в денежных делах?",
  "Cataluña y el País Vasco": "У Каталонии и Страны Басков",
  "El País Vasco y Navarra": "У Страны Басков и Наварры",
  "Galicia y Navarra": "У Галисии и Наварры",
  "Ninguna: el sistema es igual para todas": "Ни у каких: порядок один для всех",
  "El concierto vasco y el convenio navarro: recaudan sus propios impuestos y pagan al Estado por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "Баскское соглашение и наваррский договор: они сами собирают свои налоги и платят государству за общие службы. Это историческое исключение признано в первом добавочном положении.",
  "Los límites": "Пределы",
  "La Constitución garantiza la **solidaridad** entre territorios y prohíbe que las diferencias entre estatutos impliquen **privilegios económicos o sociales**. Para corregir desequilibrios existe el **Fondo de Compensación Interterritorial**.":
    "Конституция ручается за **солидарность** между землями и запрещает, чтобы разница между уставами давала **преимущества в достатке или в общественном положении**. Чтобы выправлять перекосы, есть **Междуземельный уравнительный запас**.",
  "Y hay un último recurso: el **artículo 155**. Si una comunidad **incumple gravemente** sus obligaciones constitucionales o atenta contra el interés general de España, el Gobierno puede requerirla y, si no atiende el requerimiento, adoptar medidas con la **aprobación del Senado por mayoría absoluta**. Se aplicó por primera vez en 2017.":
    "И есть последнее средство: **статья 155**. Если сообщество **тяжко нарушает** свои конституционные обязанности или посягает на общее благо Испании, правительство может потребовать от него исправиться, а если требование не услышано — принять меры с **одобрения Сената полным большинством**. Впервые её применили в 2017 году.",
  "¿Qué es un Estatuto de Autonomía?": "Что такое Устав о самоуправлении?",
  "Un reglamento del Gobierno autonómico": "Правила, издаваемые областным правительством",
  "La norma institucional básica de la comunidad, aprobada como ley orgánica":
    "Основная учредительная норма сообщества, принимаемая как органический закон",
  "Un acuerdo entre comunidades vecinas": "Соглашение между соседними сообществами",
  "La constitución propia de cada comunidad": "Собственная конституция каждого сообщества",
  "Es a la vez norma autonómica y ley orgánica estatal, y por eso su reforma exige el acuerdo de la comunidad y de las Cortes Generales. Constitución solo hay una.":
    "Он разом и областная норма, и государственный органический закон, и потому перемена в нём требует согласия и сообщества, и Генеральных Кортесов. Конституция же одна.",
  "**Provincia** y **comunidad autónoma** no son lo mismo. Hay **cincuenta provincias** y diecisiete comunidades: siete de ellas son **uniprovinciales**, como Madrid, Murcia o Asturias, y en esos casos la comunidad absorbió las funciones de la diputación.":
    "**Провинция** и **автономное сообщество** — не одно и то же. Провинций **пятьдесят**, а сообществ семнадцать: семь из них **однопровинциальные**, как Мадрид, Мурсия или Астурия, и там сообщество вобрало в себя дела провинциального собрания.",
  "El territorio": "Земля",
  "Por qué importa: España es el país más montañoso de Europa después de Suiza, y eso explica su clima, su reparto de población y por qué durante siglos fue tan difícil de gobernar desde un solo sitio.":
    "Почему это важно: Испания — самая гористая страна Европы после Швейцарии, и этим объясняются её погода, то, как расселились люди, и то, почему веками ею было так трудно править из одного места.",
  "Una meseta rodeada de sierras": "Плоскогорье, окружённое хребтами",
  "El territorio ocupa unos **505.000 kilómetros cuadrados**, lo que hace de España el **segundo país más extenso de la Unión Europea** tras Francia, con algo menos de **cincuenta millones** de habitantes.":
    "Земля её занимает около **505 000 квадратных километров**, что делает Испанию **второй по величине страной Европейского союза** после Франции, а жителей в ней немногим меньше **пятидесяти миллионов**.",
  "En el centro está la **Meseta Central**, una llanura elevada a más de seiscientos metros y partida en dos por el **Sistema Central**. La rodean cordilleras por casi todos lados, y esa altitud media —de las más altas de Europa— es la razón de que el interior tenga inviernos duros pese a la latitud.":
    "В середине лежит **Центральная месета**, равнина, поднятая выше шестисот метров и рассечённая надвое **Центральной горной системой**. Хребты окружают её почти со всех сторон, и этой средней высотой, одной из самых больших в Европе, объясняются суровые зимы внутри страны, несмотря на её южное положение.",
  "Los Pirineos": "Пиренеи",
  "Frontera con Francia y Andorra, de mar a mar. Aíslan la Península del resto del continente.":
    "Граница с Францией и Андоррой, от моря до моря. Они отрезают полуостров от остального материка.",
  "La Cordillera Cantábrica": "Кантабрийские горы",
  "Cierra el norte y separa la España húmeda de la seca. Los Picos de Europa son su tramo más alto.":
    "Они замыкают север и отделяют влажную Испанию от сухой. Пики Европы — самая высокая их часть.",
  "Los Sistemas Béticos": "Бетские горы",
  "En el sur, con Sierra Nevada y el Mulhacén, de 3.479 metros: el pico más alto de la Península.":
    "На юге, с Сьеррой-Невадой и Мульасеном в 3479 метров: это высшая вершина полуострова.",
  "El Teide": "Тейде",
  "En Tenerife, 3.715 metros. Es el punto más alto de España, y está en el Atlántico, no en la Península.":
    "На Тенерифе, 3715 метров. Это высшая точка Испании, и стоит она в Атлантике, а не на полуострове.",
  "¿Cuál es el pico más alto de España?": "Какая вершина в Испании самая высокая?",
  "El Mulhacén": "Мульасен",
  "El Aneto": "Ането",
  "El Naranjo de Bulnes": "Наранхо-де-Бульнес",
  "El Teide, en Tenerife, con 3.715 metros. El Mulhacén, en Sierra Nevada, es el más alto de la Península con 3.479, y el Aneto el más alto de los Pirineos.":
    "Тейде, на Тенерифе, 3715 метров. Мульасен, в Сьерре-Неваде, высшая вершина полуострова, 3479 метров, а Ането — высшая в Пиренеях.",
  "Los ríos": "Реки",
  "Los ríos se reparten en tres **vertientes**. La **cantábrica** tiene ríos cortos y caudalosos. La **atlántica** recoge los grandes: el **Tajo**, el más largo de la Península, que desemboca en Lisboa; el **Duero**; el **Guadiana**; y el **Guadalquivir**, el único navegable, hasta Sevilla. La **mediterránea** es la más seca salvo por el **Ebro**, el de mayor caudal de España.":
    "Реки делятся на три **ската**. На **кантабрийском** они короткие и полноводные. На **атлантическом** собраны большие: **Тахо**, самая длинная на полуострове, впадающая у Лиссабона; **Дуэро**; **Гвадиана**; и **Гвадалквивир**, единственная судоходная, до Севильи. **Средиземный** скат самый сухой, если не считать **Эбро**, самой полноводной реки Испании.",
  "Que los grandes ríos vayan al Atlántico y desemboquen dos de ellos en Portugal tiene consecuencias prácticas: el agua es un asunto compartido con el país vecino, y el sureste peninsular, el más seco de Europa continental, depende de trasvases y desaladoras.":
    "То, что большие реки идут в Атлантику и две из них впадают в море уже в Португалии, имеет вполне осязаемые последствия: вода — дело общее с соседней страной, а юго-восток полуострова, самый сухой в материковой Европе, живёт переброской воды и опреснением.",
  "¿Cuál es el río más largo de la Península Ibérica?":
    "Какая река на Иберийском полуострове самая длинная?",
  "El Ebro": "Эбро",
  "El Tajo": "Тахо",
  "El Duero": "Дуэро",
  "El Guadalquivir": "Гвадалквивир",
  "El Tajo, que desemboca en Lisboa. El Ebro es el de mayor caudal y el Guadalquivir el único navegable, hasta Sevilla: tres ríos y tres primeros puestos distintos.":
    "Тахо, впадающая у Лиссабона. Эбро самая полноводная, а Гвадалквивир единственная судоходная, до Севильи: три реки и три разных первых места.",
  "Las islas y África": "Острова и Африка",
  "Las **Islas Baleares** están en el Mediterráneo; las **Canarias**, en el Atlántico, frente a la costa africana y a unos mil quinientos kilómetros de la Península. Son de origen **volcánico**, y el volcán sigue activo: la erupción de La Palma de 2021 lo recordó.":
    "**Балеарские острова** лежат в Средиземном море; **Канарские** — в Атлантике, против африканского берега и примерно в полутора тысячах километров от полуострова. Они **вулканического** происхождения, и вулкан не спит: извержение на Ла-Пальме в 2021 году об этом напомнило.",
  "**Ceuta** y **Melilla** están en el norte de África y son las **únicas fronteras terrestres** de la Unión Europea con el continente africano. España limita además con **Portugal**, **Francia**, **Andorra** y el territorio británico de **Gibraltar**.":
    "**Сеута** и **Мелилья** стоят на севере Африки и суть **единственные сухопутные границы** Европейского союза с африканским материком. Испания граничит, кроме того, с **Португалией**, **Францией**, **Андоррой** и с британским владением **Гибралтар**.",
  "Los climas": "Погода в разных краях",
  "El clima **mediterráneo** domina la mayor parte, con veranos secos y calurosos. El norte y el noroeste tienen clima **oceánico**, húmedo y templado: es la llamada España verde. El interior conserva el mediterráneo pero **continentalizado**, con más frío y más calor. El sureste es **semiárido** —Almería tiene el único desierto de Europa continental— y las **Canarias** son **subtropicales**, con temperaturas suaves todo el año.":
    "На большей части страны стоит **средиземная** погода, с сухим и жарким летом. На севере и северо-западе она **океанская**, влажная и мягкая: это так называемая зелёная Испания. Внутри страны погода остаётся средиземной, но **материковой**, с бóльшим холодом и бóльшим зноем. Юго-восток **полусухой** — в Альмерии единственная пустыня материковой Европы, — а **Канарские острова** **подтропические**, с мягкой теплотой круглый год.",
  "¿Qué tipo de clima tienen las Islas Canarias?": "Какая погода на Канарских островах?",
  "Oceánico": "Океанская",
  "Continental": "Материковая",
  "Subtropical": "Подтропическая",
  "Semiárido": "Полусухая",
  "Subtropical, con temperaturas suaves durante todo el año por su latitud y por la corriente marina. El oceánico corresponde al norte peninsular y el semiárido al sureste.":
    "Подтропическая, с мягкой теплотой круглый год из-за их южного положения и морского течения. Океанская стоит на севере полуострова, а полусухая — на юго-востоке.",
  "Las Canarias están a unos **mil quinientos kilómetros** de la Península y tienen **una hora menos** que el resto del país. Es la única parte de España en otro huso horario.":
    "Канарские острова лежат примерно в **полутора тысячах километров** от полуострова, и время там **на час меньше**, чем в остальной стране. Это единственная часть Испании в другом часовом поясе.",
  "Las lenguas de España": "Языки Испании",
  "Por qué importa: en España se habla castellano en todas partes y otras cuatro lenguas son oficiales en su territorio. No es una curiosidad regional: está en el artículo 3 y organiza escuelas, administraciones y medios enteros.":
    "Почему это важно: по-кастильски в Испании говорят везде, а ещё четыре языка государственные на своей земле. Это не областная диковинка: это стоит в статье 3 и устраивает целые школы, ведомства и газеты с телевидением.",
  "Lo que dice el artículo 3": "Что говорит статья 3",
  "Tiene tres apartados y conviene leerlos juntos. El primero: el **castellano** es la lengua española oficial del Estado, y todos los españoles tienen el **deber de conocerla** y el **derecho a usarla**. El segundo: las **demás lenguas españolas** serán también oficiales en sus comunidades **de acuerdo con sus estatutos**. El tercero: la riqueza de las modalidades lingüísticas es un **patrimonio cultural** objeto de especial respeto y protección.":
    "В ней три части, и читать их лучше вместе. Первая: **кастильский** — государственный испанский язык, и у всех испанцев есть **обязанность его знать** и **право им пользоваться**. Вторая: **прочие языки Испании** будут государственными и в своих сообществах, **согласно их уставам**. Третья: богатство языковых разновидностей есть **наследие**, к которому положены особое уважение и охрана.",
  "El deber de conocer se predica **solo del castellano**, y esa asimetría es deliberada. La cooficialidad, en cambio, no la decide el Estado en abstracto: la remite a cada estatuto.":
    "Обязанность знать сказана **только о кастильском**, и эта несимметричность нарочная. А совместную государственность языка государство не решает отвлечённо: оно отсылает к каждому уставу.",
  "Catalán": "Каталанский",
  "Oficial en Cataluña y en las Illes Balears, y en la Comunidad Valenciana con la denominación de valenciano que fija su estatuto.":
    "Государственный в Каталонии и на Балеарских островах, а в Валенсийском сообществе — под именем валенсийского, которое кладёт его устав.",
  "Gallego": "Галисийский",
  "Oficial en Galicia. Comparte origen con el portugués: ambos vienen del galaicoportugués medieval.":
    "Государственный в Галисии. У него общий корень с португальским: оба вышли из средневекового галисийско-португальского.",
  "Euskera": "Баскский",
  "Oficial en el País Vasco y en la zona vascófona de Navarra, donde el régimen lingüístico varía por comarcas.":
    "Государственный в Стране Басков и в баскоязычной полосе Наварры, где языковой порядок меняется от округа к округу.",
  "Aranés": "Аранский",
  "Una variedad del occitano, oficial en toda Cataluña desde 2006 y propia del Valle de Arán, donde lo habla unos pocos miles de personas.":
    "Разновидность окситанского, государственная во всей Каталонии с 2006 года и своя в Аранской долине, где на нём говорят несколько тысяч человек.",
  "¿En qué valle se habla el aranés?": "В какой долине говорят по-арански?",
  "En el Valle de Arán": "В Аранской долине",
  "En el Valle del Roncal": "В долине Ронкаль",
  "En el Valle de Benasque": "В долине Бенаске",
  "En el Valle de Ansó": "В долине Ансо",
  "En el Valle de Arán, en el Pirineo de Lérida, y es una variedad del occitano. Es la lengua oficial con menos hablantes de España, unos pocos miles.":
    "В Аранской долине, в пиренейской части Лериды, и это разновидность окситанского. Это государственный язык Испании с наименьшим числом говорящих, несколько тысяч.",
  "El euskera, aparte": "Баскский особняком",
  "El castellano, el catalán y el gallego vienen del **latín**, como el portugués, el francés o el italiano. El **euskera no**: es una lengua **anterior a la llegada de Roma**, sin parentesco demostrado con ninguna lengua viva. Sobrevivió al latín en un rincón del continente donde todas las demás lenguas prerromanas desaparecieron.":
    "Кастильский, каталанский и галисийский вышли из **латыни**, как португальский, французский или итальянский. А **баскский нет**: это язык **более ранний, чем приход Рима**, и родства с каким-либо живым языком у него не доказано. Он пережил латынь в том углу материка, где все прочие доримские языки исчезли.",
  "No tuvo un estándar escrito unificado hasta el siglo XX: el **euskera batua**, fijado desde los años sesenta, es lo que se enseña hoy en la escuela, sobre los distintos dialectos históricos.":
    "Единого письменного образца у него не было до двадцатого века: **euskera batua**, установленный с шестидесятых годов, — это то, чему учат нынче в школе, поверх разных исторических наречий.",
  "¿Cuál de estas lenguas NO procede del latín?": "Какой из этих языков НЕ происходит от латыни?",
  "El catalán": "Каталанский",
  "El gallego": "Галисийский",
  "El euskera": "Баскский",
  "El aranés": "Аранский",
  "El euskera es anterior a Roma y no tiene parentesco conocido con ninguna lengua viva. Las otras tres son romances, igual que el castellano.":
    "Баскский старше Рима, и известного родства с живыми языками у него нет. Остальные три романские, как и кастильский.",
  "Lo que se protege sin ser oficial": "То, что охраняют, не делая государственным",
  "El tercer apartado del artículo 3 cubre hablas que **no son cooficiales** pero sí objeto de protección: el **asturiano**, llamado también bable, el **aragonés** en el Pirineo, el **leonés**, la **fala** extremeña o el **caló**. Sus estatutos y sus leyes autonómicas les dan grados distintos de reconocimiento, siempre por debajo de la oficialidad.":
    "Третья часть статьи 3 покрывает говоры, **не ставшие государственными**, но всё же охраняемые: **астурийский**, называемый ещё бабле, **арагонский** в Пиренеях, **леонский**, эстремадурская **фала** и **кало**. Их уставы и областные законы дают им разную степень признания, но всегда ниже государственности.",
  "El español fuera de España": "Испанский за пределами Испании",
  "El español lo hablan alrededor de **seiscientos millones** de personas y es la **segunda lengua materna del mundo** por número de hablantes, después del chino mandarín. La mayoría de ellos no vive en España: el país que más hispanohablantes tiene es **México**.":
    "По-испански говорят около **шестисот миллионов** человек, и это **второй родной язык мира** по числу говорящих, после северокитайского. Большинство из них живёт не в Испании: больше всего говорящих по-испански в **Мексике**.",
  "Por eso la norma no se decide en Madrid a solas. La **Real Academia Española** trabaja con las **veintidós academias** de América y Filipinas en la **Asociación de Academias de la Lengua Española**, y los diccionarios y gramáticas se publican en común. Es lo que se llama **política panhispánica**. La difusión de la lengua fuera corresponde al **Instituto Cervantes**, que es además quien administra las pruebas para la nacionalidad.":
    "Потому и правила языка решают не в одном Мадриде. **Королевская испанская академия** работает с **двадцатью двумя академиями** Америки и Филиппин в **Объединении академий испанского языка**, и словари с грамматиками выходят сообща. Это и зовут **общеиспанской линией**. Распространением языка за пределами страны ведает **Институт Сервантеса**, который вдобавок и проводит испытания для гражданства.",
  "¿Qué establece el artículo 3 respecto al castellano?":
    "Что устанавливает статья 3 о кастильском?",
  "Solo el derecho a usarlo": "Только право им пользоваться",
  "El deber de conocerlo y el derecho a usarlo": "Обязанность его знать и право им пользоваться",
  "El deber de conocerlo, sin más": "Одну лишь обязанность его знать",
  "Que su uso es voluntario en las comunidades con lengua propia":
    "Что в сообществах со своим языком пользоваться им необязательно",
  "Deber de conocer y derecho a usar, y solo respecto del castellano. Para las demás lenguas oficiales la Constitución remite a los estatutos, sin imponer un deber equivalente.":
    "Обязанность знать и право пользоваться, и только о кастильском. О прочих государственных языках Конституция отсылает к уставам, не возлагая такой же обязанности.",
  "**Español** y **castellano** designan la misma lengua. La Constitución emplea castellano, precisamente porque las otras lenguas de España también son españolas; en América y en el uso internacional predomina español.":
    "**Испанский** и **кастильский** называют один и тот же язык. Конституция берёт слово «кастильский» как раз потому, что прочие языки Испании тоже испанские; в Америке же и в мире чаще говорят «испанский».",
  "La economía y España en Europa": "Хозяйство и Испания в Европе",
  "Por qué importa: en cuarenta años España pasó de pedir la entrada en Europa a ser una de sus mayores economías. Y arrastra desde entonces un problema que no ha resuelto ningún gobierno: el paro.":
    "Почему это важно: за сорок лет Испания прошла путь от прошения о приёме в Европу до одного из самых больших её хозяйств. И тащит с тех пор беду, которой не решило ни одно правительство, — безработицу.",
  "De qué vive el país": "Чем страна живёт",
  "Los **servicios** son con diferencia el sector mayor, y dentro de ellos el **turismo**: España está año tras año entre los primeros destinos del mundo por número de visitantes, con la costa, las islas y las ciudades históricas como principales reclamos.":
    "**Службы** с большим отрывом самая крупная часть хозяйства, а внутри них — **приезжие**: Испания год за годом стоит среди первых мест мира по числу гостей, и манят их прежде всего берега, острова и старинные города.",
  "Aceite de oliva": "Оливковое масло",
  "España es el primer productor mundial, muy por delante del segundo. Jaén sola produce más que países enteros.":
    "Испания первая в мире по его выделке, далеко впереди второго. Один Хаэн даёт больше, чем иные страны целиком.",
  "Frutas y hortalizas": "Плоды и огородные овощи",
  "El invernadero de Almería abastece a buena parte de Europa en invierno, y los cítricos valencianos tienen mercado propio.":
    "Теплицы Альмерии зимой кормят добрую часть Европы, а у валенсийских цитрусовых свой рынок.",
  "Automóvil": "Автомобили",
  "Uno de los mayores fabricantes de Europa, aunque sin marcas propias: las plantas son de grupos extranjeros.":
    "Один из крупнейших изготовителей Европы, хотя своих марок нет: заводы принадлежат чужим товариществам.",
  "Renovables": "Возобновляемая сила",
  "La eólica y la solar tienen un peso creciente en la generación eléctrica, favorecidas por el viento del interior y las horas de sol.":
    "Ветряная и солнечная всё больше весят в выработке электричества, чему помогают ветер во внутренних краях и обилие солнечных часов.",
  "¿De qué producto es España el primer productor mundial?":
    "По выделке какого товара Испания первая в мире?",
  "Del vino": "Вина",
  "Del aceite de oliva": "Оливкового масла",
  "Del arroz": "Риса",
  "Del azúcar": "Сахара",
  "Del aceite de oliva, con diferencia sobre el segundo. En vino está entre los primeros del mundo por superficie de viñedo, pero no encabeza la producción todos los años.":
    "Оливкового масла, с большим отрывом от второго. По вину она среди первых в мире по площади виноградников, но по выделке первенствует не каждый год.",
  "Los problemas de fondo": "Беды в самой основе",
  "El **paro** es el más persistente. La tasa española ha estado sistemáticamente por encima de la media europea durante décadas, con dos rasgos añadidos: el **desempleo juvenil**, que en las crisis ha llegado a duplicar la tasa general, y la **temporalidad**, la proporción de contratos de duración limitada.":
    "**Безработица** упорнее всех. Испанская доля десятилетиями держалась выше средней европейской, и к ней прибавляются две черты: **безработица среди молодых**, которая в тяжкие годы доходила до двойной от общей, и **срочность**, то есть доля договоров с ограниченным сроком.",
  "El segundo es **territorial**. Buena parte del interior se ha ido despoblando durante generaciones, y a ese fenómeno se lo llama desde hace unos años la **España vaciada**: provincias enteras con menos de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "Вторая беда — **земельная**. Большая часть внутренних краёв пустела поколениями, и это уже несколько лет зовут **опустевшей Испанией**: целые провинции, где меньше десяти жителей на квадратный километр, тогда как рост собирается на берегах и в больших городах.",
  "El tercero es **demográfico**: la natalidad es de las más bajas de Europa y la esperanza de vida de las más altas del mundo, una combinación que tensiona el sistema de pensiones a largo plazo.":
    "Третья — **людская**: рождаемость из самых низких в Европе, а ожидаемая продолжительность жизни из самых высоких в мире, и это сочетание в дальнем счёте натягивает пенсионный порядок до предела.",
  "¿Qué se conoce como la España vaciada?": "Что зовут опустевшей Испанией?",
  "Las ciudades que perdieron población en la crisis de 2008":
    "Города, потерявшие жителей в тяжёлые 2008 года",
  "Las zonas del interior que llevan generaciones despoblándose":
    "Внутренние края, которые пустеют поколениями",
  "Los pueblos abandonados tras la Guerra Civil": "Деревни, брошенные после гражданской войны",
  "Las comarcas sin cobertura de internet": "Округа, куда не дотянулся интернет",
  "Provincias enteras del interior con densidades por debajo de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "Целые внутренние провинции, где на квадратный километр меньше десяти жителей, тогда как рост собирается на берегах и в больших городах.",
  "España en Europa": "Испания в Европе",
  "La entrada en la **Comunidad Económica Europea** el **1 de enero de 1986**, junto con Portugal, fue el mayor cambio económico del periodo democrático. Los **fondos estructurales y de cohesión** financiaron carreteras, depuradoras, universidades y trenes, y el mercado único reorientó el comercio exterior hacia Europa.":
    "Вступление в **Европейское экономическое сообщество** **1 января 1986 года**, вместе с Португалией, стало самой большой хозяйственной переменой за всю пору народовластия. **Строительные и уравнительные запасы** оплатили дороги, очистные сооружения, университеты и поезда, а единый рынок повернул внешнюю торговлю к Европе.",
  "España forma parte del **euro** desde su creación, del espacio **Schengen**, y está en la **OTAN** desde **1982**, confirmada por el referéndum de 1986. En la **ONU** entró en **1955**.":
    "Испания в **евро** с самого его создания, в **шенгенском** пространстве и в **НАТО** с **1982 года**, что подтвердил референдум 1986-го. В **ООН** она вошла в **1955 году**.",
  "El vínculo iberoamericano": "Связь с Иберийской Америкой",
  "Con América Latina el vínculo es lingüístico y también institucional: las **Cumbres Iberoamericanas** reúnen periódicamente a los jefes de Estado y de Gobierno, y existen organismos comunes en educación y cultura. Ese vínculo se refleja también en la ley: los nacionales de países iberoamericanos pueden pedir la nacionalidad tras **dos años** de residencia en lugar de diez.":
    "С Латинской Америкой связь и языковая, и учрежденческая: **Иберо-американские встречи в верхах** время от времени сводят глав государств и правительств, и есть общие учреждения по образованию и культуре. Отражена эта связь и в законе: граждане стран Иберийской Америки могут просить гражданства после **двух лет** проживания вместо десяти.",
  "Y el flujo se ha invertido. El país del que salieron millones de emigrantes en el siglo XX cuenta hoy con varios millones de **residentes extranjeros**, procedentes sobre todo de América Latina, Europa del Este, Marruecos y la propia Unión Europea.":
    "И поток повернул вспять. В стране, из которой в двадцатом веке ушли миллионы, ныне живут несколько миллионов **иностранцев**, прибывших прежде всего из Латинской Америки, Восточной Европы, Марокко и из самого Европейского союза.",
  "¿En qué año entró España en la OTAN?": "В каком году Испания вступила в НАТО?",
  "En 1975": "В 1975 году",
  "En 1982, y la permanencia se confirmó en el referéndum de 1986, el mismo año de la entrada en la Comunidad Económica Europea. Son dos hechos distintos que suelen juntarse.":
    "В 1982-м, а пребывание подтвердил референдум 1986 года, в тот же год, что и вступление в Европейское экономическое сообщество. Это два разных события, которые обыкновенно сливают в одно.",
  "La entrada en la CEE **no** se sometió a referéndum: fue un tratado ratificado por las Cortes. Lo que se votó en 1986 fue la **permanencia en la OTAN**, y esa consulta sí fue un referéndum.":
    "Вступление в ЕЭС на референдум **не** выносили: это был договор, утверждённый Кортесами. В 1986 году голосовали о **пребывании в НАТО**, и вот это был именно референдум.",
  "Trabajo, contratos y Seguridad Social": "Работа, договоры и Seguridad Social",
  "Sociedad y vida cotidiana": "Общество и повседневная жизнь",
  "Por qué importa: la nómina española tiene dos cifras muy distintas arriba y abajo, y entender qué pasa entre una y otra explica cómo se financian la sanidad, el paro y las pensiones.":
    "Почему это важно: в испанском расчётном листке вверху и внизу стоят два очень разных числа, и понять, что происходит между ними, — значит понять, на что живут здравоохранение, пособия по безработице и пенсии.",
  "Lo que dice la Constitución": "Что говорит Конституция",
  "El **artículo 35** reconoce el **deber y el derecho** al trabajo, a la libre elección de profesión y a una remuneración suficiente. El **artículo 28** garantiza la **libertad sindical** y el **derecho de huelga**; el **37**, la **negociación colectiva**; y el **41** obliga a mantener un régimen público de **Seguridad Social** para todos los ciudadanos.":
    "**Статья 35** признаёт **обязанность и право** трудиться, свободно выбирать ремесло и получать достаточную плату. **Статья 28** ручается за **свободу союзов работников** и за **право на забастовку**; **статья 37** — за **общий сговор об условиях труда**; а **статья 41** обязывает держать казённый порядок **Seguridad Social** для всех граждан.",
  "La norma que lo desarrolla es el **Estatuto de los Trabajadores**, y por debajo de él están los **convenios colectivos**, que pueden ser de sector o de empresa y mejorar siempre lo que la ley fija como mínimo.":
    "Развивает всё это **Устав работников**, а ниже него стоят **общие договоры**, которые бывают по промыслу или по предприятию и всегда могут улучшить то, что закон кладёт наименьшим.",
  "El salario mínimo": "Наименьшее жалованье",
  "España **sí tiene un salario mínimo legal**: el **salario mínimo interprofesional**, que el **Gobierno fija cada año** por real decreto, previa consulta a sindicatos y organizaciones empresariales. Se expresa por día, por mes y por año, y se refiere a la jornada completa.":
    "У Испании **наименьшее жалованье по закону есть**: это **наименьшее жалованье, единое для всех ремёсел**, которое **правительство назначает каждый год** королевским указом, опросив прежде союзы работников и товарищества хозяев. Его называют по дням, по месяцам и по годам, и относится оно к полному рабочему дню.",
  "Es una diferencia real con otros países del sur de Europa, donde los mínimos solo existen dentro de los convenios. Aquí el convenio puede subir el suelo, nunca bajarlo.":
    "Это настоящее отличие от других стран юга Европы, где наименьшие ставки живут только внутри договоров. Здесь договор может поднять этот пол, но опустить его — никогда.",
  "¿Quién fija el salario mínimo en España?": "Кто назначает в Испании наименьшее жалованье?",
  "Cada convenio colectivo, sector por sector": "Каждый общий договор, от промысла к промыслу",
  "El Gobierno, cada año, por real decreto": "Правительство, каждый год, королевским указом",
  "No existe salario mínimo legal": "Наименьшего жалованья по закону не существует",
  "El salario mínimo interprofesional lo fija el Gobierno previa consulta a sindicatos y empresarios. Los convenios pueden mejorarlo pero nunca quedar por debajo.":
    "Наименьшее жалованье, единое для всех ремёсел, назначает правительство, опросив союзы работников и хозяев. Договоры могут его улучшить, но опуститься ниже — никогда.",
  "El contrato y la jornada": "Договор и рабочий день",
  "Indefinido": "Бессрочный",
  "Sin fecha de fin. Es la forma de referencia desde la reforma de 2021, que restringió el uso del contrato temporal.":
    "Без конечного дня. Это образцовый вид договора с переустройства 2021 года, которое сузило применение срочного.",
  "Temporal": "Срочный",
  "Solo por causas tasadas: circunstancias de la producción o sustitución de una persona con derecho a reserva del puesto.":
    "Только по перечисленным в законе причинам: обстоятельства производства или замена человека, за которым место сохраняется.",
  "Fijo discontinuo": "Постоянный с перерывами",
  "Indefinido pero para trabajos estacionales o intermitentes. Se llama a la persona cada temporada.":
    "Бессрочный, но для работ по временам года или с перерывами. Человека зовут каждый сезон.",
  "Autónomo": "Работающий на себя",
  "No es un contrato sino un régimen: se factura, y se pagan por cuenta propia impuestos y cotización.":
    "Это не договор, а положение: выставляешь счета и сам за себя платишь налоги и взносы.",
  "La **jornada máxima** es de **cuarenta horas semanales** de promedio en cómputo anual, y las **vacaciones** mínimas son de **treinta días naturales** al año, que no pueden sustituirse por dinero. Las horas extraordinarias tienen tope legal.":
    "**Наибольший рабочий день** даёт **сорок часов в неделю** в среднем за год, а наименьший **отпуск** — **тридцать календарных дней** в году, и заменить его деньгами нельзя. У сверхурочных часов есть законный предел.",
  "¿Cuántos días de vacaciones al año garantiza como mínimo la ley?":
    "Сколько дней отпуска в год закон ручается дать самое малое?",
  "Veintiuno naturales": "Двадцать один календарный",
  "Veintidós hábiles o treinta naturales": "Двадцать два рабочих или тридцать календарных",
  "Cuarenta y cinco naturales": "Сорок пять календарных",
  "Los que fije cada empresa": "Сколько положит каждое предприятие",
  "Treinta días naturales, que equivalen a los veintidós hábiles con que suelen contarse. No pueden cambiarse por dinero: el descanso es obligatorio.":
    "Тридцать календарных дней, что равно тем двадцати двум рабочим, которыми их обыкновенно считают. Менять их на деньги нельзя: отдых обязателен.",
  "La nómina": "Расчётный листок",
  "Entre el **bruto** y el **neto** hay dos descuentos. Las **cotizaciones a la Seguridad Social**, que la persona paga en parte y la empresa en parte mucho mayor, y la **retención del IRPF**, un adelanto del impuesto sobre la renta que se ajusta al año siguiente en la **declaración**.":
    "Между **начисленным** и **выданным на руки** стоят два вычета. **Взносы в Seguridad Social**, которые человек платит отчасти, а предприятие — куда большей частью, и **удержание IRPF**, задаток подоходного налога, который на следующий год выравнивают в **заявлении о доходах**.",
  "Son habituales **dos pagas extraordinarias**, en junio y en diciembre, que muchos convenios permiten **prorratear** en las doce mensualidades. Al terminar un contrato se recibe el **finiquito**, con lo pendiente de vacaciones y pagas, y en algunos despidos una **indemnización** aparte.":
    "Обычны **две дополнительные выплаты**, в июне и в декабре, которые многие договоры позволяют **разложить** на двенадцать месяцев. По окончании договора получают **окончательный расчёт**, с недогулянным отпуском и невыплаченным жалованьем, а при иных увольнениях ещё и **возмещение** отдельно.",
  "La Seguridad Social": "Seguridad Social",
  "Todo trabajador tiene un **número de afiliación** que le acompaña toda la vida. Hay dos grandes regímenes: el **general**, para quien trabaja por cuenta ajena, y el **RETA**, el régimen especial de **trabajadores autónomos**, para quien lo hace por cuenta propia.":
    "У всякого работника есть **номер приписки**, который остаётся с ним на всю жизнь. Порядков два больших: **общий**, для тех, кто работает по найму, и **RETA**, особый порядок для **работающих на себя**.",
  "De ahí salen las prestaciones: **desempleo** —que gestiona el **SEPE** y exige haber cotizado un mínimo—, **incapacidad temporal**, **nacimiento y cuidado de menor**, y la **jubilación**. El documento que resume todo lo cotizado se llama **vida laboral** y puede pedirse en cualquier momento.":
    "Отсюда идут пособия: **по безработице**, которым ведает **SEPE** и для которого нужно наименьшее число внесённых взносов, **по временной нетрудоспособности**, **по рождению и уходу за ребёнком** и **пенсия по старости**. Бумага, сводящая воедино все внесённые взносы, зовётся **трудовой жизнью**, и просить её можно в любое время.",
  "¿Qué es el RETA?": "Что такое RETA?",
  "El registro de contratos temporales": "Список срочных договоров",
  "El régimen especial de trabajadores autónomos": "Особый порядок для работающих на себя",
  "La retención del IRPF en la nómina": "Удержание IRPF в расчётном листке",
  "El fondo de garantía salarial": "Запас, ручающийся за выплату жалованья",
  "Es el régimen de la Seguridad Social para quien trabaja por cuenta propia, frente al régimen general de quien lo hace por cuenta ajena.":
    "Это порядок Seguridad Social для тех, кто работает на себя, в отличие от общего порядка для работающих по найму.",
  "**Finiquito** e **indemnización** no son lo mismo. El finiquito se cobra siempre al terminar y liquida lo pendiente; la indemnización solo corresponde en determinados despidos, y se suma al finiquito.":
    "**Окончательный расчёт** и **возмещение** — не одно и то же. Расчёт получают всегда при уходе, и им закрывают всё недоплаченное; возмещение же положено лишь при иных увольнениях и прибавляется к расчёту.",
  "Sanidad y educación": "Здравоохранение и образование",
  "Por qué importa: los dos servicios que más se usan viviendo en un país. Los dos son públicos y universales, y los dos los gestionan las comunidades, no el Estado: eso explica que no funcionen igual en todas partes.":
    "Почему это важно: это те две службы, которыми пользуются чаще всего, живя в стране. Обе казённые и открыты всем, и обеими ведают сообщества, а не государство: тем и объясняется, что работают они везде по-разному.",
  "El Sistema Nacional de Salud": "Народная служба здравоохранения",
  "El **artículo 43** reconoce el derecho a la protección de la salud. El **Sistema Nacional de Salud** es **universal** y se financia con **impuestos**, no con un seguro: no hay primas ni cuotas mensuales. La gestión corresponde a las **comunidades autónomas**, y el Estado fija las bases y coordina.":
    "**Статья 43** признаёт право на охрану здоровья. **Народная служба здравоохранения** открыта **всем** и живёт на **налоги**, а не на страховку: ни взносов, ни месячной платы тут нет. Ведают ею **автономные сообщества**, а государство кладёт общие основы и согласует.",
  "La puerta de entrada es el **centro de salud** y el **médico de familia**, que atiende, receta y **deriva** al especialista. A urgencias se puede acudir directamente, y para las emergencias hay un número único en toda España y en toda Europa: el **112**.":
    "Входная дверь — это **поликлиника** и **семейный врач**, который принимает, выписывает и **направляет** к врачу узкого дела. В неотложную помощь можно прийти и напрямую, а на крайний случай есть единый номер по всей Испании и по всей Европе: **112**.",
  "La tarjeta sanitaria": "Лечебная карточка",
  "Individual y emitida por la comunidad. Es lo que identifica a la persona ante el sistema; cambia si se cambia de comunidad.":
    "Она у каждого своя и выдаётся сообществом. Ею человека опознают в этой службе; при переезде в другое сообщество она меняется.",
  "La receta electrónica": "Электронный рецепт",
  "El médico prescribe en el sistema y la farmacia lee la tarjeta. Ya casi no se usa el papel.":
    "Врач выписывает в самой службе, а аптека считывает карточку. Бумагой почти уже не пользуются.",
  "El copago farmacéutico": "Доплата за лекарство",
  "Una parte del precio del medicamento a cargo del paciente, en porcentaje según la renta. Los pensionistas tienen topes mensuales.":
    "Часть цены лекарства ложится на больного, долей по его доходу. У пенсионеров есть месячные пределы.",
  "Las farmacias": "Аптеки",
  "Establecimientos privados con licencia y horarios regulados. Siempre hay una de guardia abierta en cada zona.":
    "Частные заведения с разрешением и с положенными часами работы. В каждой округе всегда есть одна дежурная, открытая.",
  "¿Qué número se marca en España para una emergencia?":
    "Какой номер набирают в Испании на крайний случай?",
  "El 091": "091",
  "El 112": "112",
  "El 061": "061",
  "El 080": "080",
  "El 112 es el número único de emergencias en toda España y en toda la Unión Europea, y coordina policía, bomberos y ambulancias. Los otros son teléfonos de servicios concretos.":
    "112 — единый номер на крайний случай по всей Испании и по всему Европейскому союзу, и он сводит вместе полицию, пожарных и скорую. Остальные — телефоны отдельных служб.",
  "La escuela": "Школа",
  "El **artículo 27** reconoce el derecho a la educación y declara la enseñanza básica **obligatoria y gratuita**. La obligatoriedad va de los **seis a los dieciséis años**, y también aquí gestionan las comunidades sobre unas bases estatales comunes.":
    "**Статья 27** признаёт право на образование и объявляет начальное обучение **обязательным и бесплатным**. Обязанность идёт с **шести до шестнадцати лет**, и здесь тоже ведают сообщества, поверх общих государственных основ.",
  "Infantil · 0 a 6": "Дошкольное · с 0 до 6",
  "No obligatoria. El segundo ciclo, de tres a seis años, es gratuito y lo cursa la práctica totalidad de los niños.":
    "Необязательно. Вторая его половина, с трёх до шести лет, бесплатна, и проходят её едва ли не все дети.",
  "Primaria · 6 a 12": "Начальная · с 6 до 12",
  "Seis cursos, obligatoria. Es lo que en la conversación se sigue llamando el colegio.":
    "Шесть годов, обязательна. В разговоре её по-прежнему зовут просто школой.",
  "ESO · 12 a 16": "ESO · с 12 до 16",
  "Cuatro cursos de Educación Secundaria Obligatoria. Al superarla se obtiene el título de Graduado en ESO.":
    "Четыре года обязательного среднего образования. Кто их прошёл, получает свидетельство об окончании ESO.",
  "Bachillerato o FP · 16 a 18": "Бачильерато или ремесленное училище · с 16 до 18",
  "Dos años de Bachillerato, o Formación Profesional de grado medio. Ninguna de las dos es obligatoria.":
    "Два года бачильерато или среднего обучения ремеслу. Ни то ни другое не обязательно.",
  "Para entrar en la universidad hay que superar el Bachillerato y una prueba de acceso, conocida durante décadas como **selectividad** y hoy con siglas que han ido cambiando. La universidad se organiza en **grado**, de cuatro años en la mayoría de las carreras, **máster** y **doctorado**.":
    "Чтобы поступить в университет, надо пройти бачильерато и вступительное испытание, которое десятилетиями звали **отбором**, а нынче оно ходит под сокращениями, что менялись не раз. Университет строится по ступеням: **степень**, четыре года на большинстве поприщ, **магистратура** и **докторантура**.",
  "¿Qué título se obtiene al terminar la enseñanza obligatoria?":
    "Какое свидетельство получают по окончании обязательного обучения?",
  "El Bachillerato": "Бачильерато",
  "El Graduado en ESO": "Свидетельство об окончании ESO",
  "El certificado de escolaridad": "Справку о посещении школы",
  "El grado universitario": "Университетскую степень",
  "El título de Graduado en Educación Secundaria Obligatoria, a los dieciséis años. El Bachillerato son dos cursos posteriores y no es obligatorio.":
    "Свидетельство об окончании обязательного среднего образования, в шестнадцать лет. Бачильерато — это два последующих года, и оно не обязательно.",
  "Tres tipos de centro": "Три вида заведений",
  "Los centros son **públicos**, **privados** o **concertados**. El **concertado** es la figura característica de España: un centro de titularidad **privada** —a menudo religiosa— sostenido con **fondos públicos** mediante un concierto, que a cambio no puede cobrar por la enseñanza en las etapas concertadas. Escolariza a una parte grande del alumnado, sobre todo en las ciudades.":
    "Заведения бывают **казённые**, **частные** и **договорные**. **Договорное** — это как раз испанская особенность: заведение в **частном** владении, часто церковном, содержимое на **казённые деньги** по соглашению, а взамен не имеющее права брать плату за обучение на тех ступенях, что покрыты соглашением. В них учится большая доля всех школьников, особенно в городах.",
  "Las calificaciones van de **cero a diez**, y se aprueba a partir del **cinco**. En la universidad la escala es la misma, con la mención de **matrícula de honor** para las mejores notas.":
    "Отметки идут **от нуля до десяти**, и сдал тот, у кого **пять** и выше. В университете мерка та же, а лучшим ставят отметку **с отличием**.",
  "¿Qué es un centro concertado?": "Что такое договорное заведение?",
  "Un centro público con horario ampliado": "Казённое заведение с удлинённым днём",
  "Un centro privado sostenido con fondos públicos":
    "Частное заведение, содержимое на казённые деньги",
  "Un centro que solo imparte Formación Profesional": "Заведение, где учат только ремеслу",
  "Un centro para alumnos con necesidades especiales": "Заведение для учеников с особыми нуждами",
  "De titularidad privada y financiación pública mediante concierto, y por eso no puede cobrar por la enseñanza en las etapas concertadas. Es una figura característica del sistema español.":
    "Оно в частном владении и живёт на казённые деньги по соглашению, а потому не может брать плату за обучение на покрытых соглашением ступенях. Это особенность именно испанского порядка.",
  "La **tarjeta sanitaria** la emite la comunidad autónoma, no el Estado: al mudarse de comunidad hay que **cambiar de tarjeta y de médico**. La atención está garantizada en toda España, pero el trámite es autonómico.":
    "**Лечебную карточку** выдаёт автономное сообщество, а не государство: переехав в другое сообщество, надо **менять и карточку, и врача**. Помощь обеспечена по всей Испании, но хождение по бумагам — областное.",
  "Vivir en España": "Жить в Испании",
  "Por qué importa: esta es la lección práctica. Ninguna de las pruebas que aquí se mencionan versa sobre historia, y este curso no prepara para ninguna de ellas: sirven para saber qué pide el Estado, y a quién.":
    "Почему это важно: это лекция о деле. Ни одно из упомянутых здесь испытаний не об истории, и этот курс ни к одному из них не готовит: они нужны, чтобы знать, чего государство требует и с кого.",
  "El padrón, primero": "Сперва прописка",
  "El **empadronamiento** es la inscripción en el **padrón municipal** del ayuntamiento donde se vive. Es el trámite del que dependen casi todos los demás: la **tarjeta sanitaria**, la **escolarización** de los hijos, las ayudas municipales y, para los ciudadanos de la Unión, el voto en las **municipales**.":
    "**Empadronamiento** — это запись в **городской список жителей** той управы, где человек живёт. От этого дела зависят почти все прочие: **лечебная карточка**, **устройство детей в школу**, городские пособия и, для граждан Союза, голос на **городских выборах**.",
  "Tiene una particularidad que conviene conocer: el padrón registra **dónde vive** una persona, no su situación administrativa, y puede empadronarse **con independencia** de ella. El certificado de empadronamiento acredita además el tiempo de residencia, que es lo que después cuentan otros expedientes.":
    "Есть тут особенность, которую стоит знать: список записывает, **где человек живёт**, а не каково его положение по бумагам, и записаться можно **независимо** от него. Свидетельство о такой записи подтверждает вдобавок срок проживания, а его-то потом и считают в других делах.",
  "Los documentos": "Бумаги",
  "DNI": "DNI",
  "El documento nacional de identidad de los españoles, obligatorio desde los catorce años.":
    "Народное удостоверение личности испанцев, обязательное с четырнадцати лет.",
  "NIE": "NIE",
  "El número de identidad de extranjero. No es una tarjeta sino un número, y hace falta para trabajar, abrir una cuenta o firmar un contrato.":
    "Опознавательный номер иностранца. Это не карточка, а номер, и нужен он, чтобы работать, открыть счёт или подписать договор.",
  "TIE": "TIE",
  "La tarjeta de identidad de extranjero: el documento físico que acredita la autorización de residencia y lleva el NIE.":
    "Удостоверение личности иностранца: та самая карточка, которая подтверждает разрешение на проживание и несёт на себе NIE.",
  "Número de la Seguridad Social": "Номер в Seguridad Social",
  "Necesario para ser dado de alta en un empleo. Es distinto del NIE y no lo sustituye.":
    "Он нужен, чтобы тебя оформили на работу. От NIE он отличен и его не заменяет.",
  "Los ciudadanos de la **Unión Europea** no necesitan permiso de residencia: se inscriben en el Registro Central de Extranjeros y obtienen un **certificado de registro**, que es un trámite más ligero.":
    "Гражданам **Европейского союза** разрешение на проживание не нужно: они записываются в Средоточный список иностранцев и получают **свидетельство о записи**, а это дело куда более лёгкое.",
  "¿Qué es el empadronamiento?": "Что такое empadronamiento?",
  "La inscripción en el padrón municipal del lugar donde se vive":
    "Запись в городской список жителей того места, где живёшь",
  "El permiso de residencia": "Разрешение на проживание",
  "El alta en la Seguridad Social": "Оформление в Seguridad Social",
  "La declaración anual de la renta": "Ежегодное заявление о доходах",
  "Es un registro del ayuntamiento sobre quién vive en el municipio. De él dependen la tarjeta sanitaria, la escolarización y el certificado que acredita el tiempo de residencia.":
    "Это список городской управы о том, кто живёт в городе. От него зависят лечебная карточка, устройство детей в школу и свидетельство, подтверждающее срок проживания.",
  "La residencia": "Проживание",
  "Las autorizaciones de residencia y trabajo son **temporales** al principio y se renuevan. Existen además figuras de **arraigo** —social, laboral, familiar o para la formación— pensadas para quien lleva ya tiempo en el país y acredita vínculos.":
    "Разрешения на проживание и работу поначалу **срочные** и продлеваются. Есть, кроме того, **arraigo** — по укоренённости в обществе, в работе, в семье или ради учёбы, — придуманные для тех, кто уже прожил в стране время и может показать свои связи.",
  "Tras **cinco años** de residencia legal y continuada puede solicitarse la **residencia de larga duración**, que autoriza a residir y trabajar de forma indefinida en las mismas condiciones que los españoles, salvo en lo que la ley reserva a la nacionalidad, como el voto en las generales.":
    "После **пяти лет** законного и непрерывного проживания можно просить **долгосрочного проживания**, которое позволяет жить и работать бессрочно на тех же условиях, что и испанцы, кроме того, что закон оставил гражданам, — например, голоса на общегосударственных выборах.",
  "¿Cuántos años de residencia legal se exigen para la residencia de larga duración?":
    "Сколько лет законного проживания требуется для долгосрочного проживания?",
  "Tres": "Три",
  "Cinco años, y autoriza a residir y trabajar indefinidamente. Diez es el plazo general para pedir la nacionalidad, que es un paso distinto y posterior.":
    "Пять лет, и оно позволяет жить и работать бессрочно. Десять — это обычный срок для прошения о гражданстве, а это иной и более поздний шаг.",
  "Los trámites de cada día": "Дела, что случаются каждый день",
  "Buena parte de la Administración se hace ya por internet, y para ello hace falta una **identidad digital**: el sistema **Cl@ve** o un **certificado digital**. Con ellos se pide cita en la Seguridad Social, se descarga la vida laboral, se presenta la declaración de la renta o se consulta un expediente.":
    "Немалая часть дел с ведомствами идёт уже через интернет, а для этого нужен **цифровой опознавательный знак**: **Cl@ve** или **цифровое свидетельство**. С ними записываются на приём в Seguridad Social, скачивают трудовую жизнь, подают заявление о доходах или смотрят своё дело.",
  "La **declaración de la renta** se presenta cada año ante la **Agencia Tributaria**, normalmente entre abril y junio, y regulariza lo que ya se fue reteniendo en la nómina: puede salir a pagar o a devolver.":
    "**Заявление о доходах** подают каждый год в **Налоговое ведомство**, обыкновенно между апрелем и июнем, и им выравнивают то, что уже удерживали из расчётного листка: может выйти доплата, а может и возврат.",
  "La nacionalidad": "Гражданство",
  "El expediente se tramita ante el **Ministerio de Justicia**. Además del plazo de residencia que corresponda, se exigen **buena conducta cívica** y acreditar la **integración** con las dos pruebas del **Instituto Cervantes**: el **DELE A2** de lengua —del que están exentos los nacionales de países hispanohablantes— y la **CCSE**, de conocimientos constitucionales y socioculturales.":
    "Дело ведут в **министерстве правосудия**. Кроме положенного срока проживания требуются **доброе гражданское поведение** и подтверждённая **вжитость в общество** — двумя испытаниями **Института Сервантеса**: языковым **DELE A2**, от которого освобождены граждане испаноязычных стран, и **CCSE**, о знании Конституции и общественной жизни.",
  "Concedida la nacionalidad, se cierra con un acto formal: **jurar o prometer fidelidad al Rey y obediencia a la Constitución y a las leyes**, y la inscripción en el Registro Civil.":
    "Когда гражданство дано, всё закрывается торжеством: **присягнуть или обещать верность королю и повиновение Конституции и законам**, и записью в книгу гражданского состояния.",
  "¿Qué número identifica a un extranjero en España para trabajar o firmar un contrato?":
    "Какой номер опознаёт иностранца в Испании, чтобы работать или подписать договор?",
  "El DNI": "DNI",
  "El NIE": "NIE",
  "El número de la Seguridad Social": "Номер в Seguridad Social",
  "El número de pasaporte": "Номер паспорта",
  "El número de identidad de extranjero. La TIE es la tarjeta física que lo lleva impreso, y el número de la Seguridad Social es otro distinto, necesario además para el alta laboral.":
    "Опознавательный номер иностранца. TIE — это та карточка, на которой он напечатан, а номер в Seguridad Social — иной, и нужен он вдобавок для оформления на работу.",
  "**Residencia** y **nacionalidad** son dos cosas distintas y dos expedientes distintos. La residencia de larga duración se pide a los cinco años ante Extranjería; la nacionalidad, con el plazo que corresponda, ante el Ministerio de Justicia.":
    "**Проживание** и **гражданство** — две разные вещи и два разных дела. О долгосрочном проживании просят через пять лет в ведомстве по делам иностранцев; о гражданстве, с положенным сроком, — в министерстве правосудия.",
  "La vida diaria": "Повседневная жизнь",
  "Por qué se cierra aquí: los horarios españoles desconciertan a casi todo el que llega, y las reglas de trato no están escritas en ninguna parte. Ninguna de estas cosas es obligatoria; todas son reales.":
    "Почему кончаем этим: испанские часы сбивают с толку едва ли не всякого приезжего, а правила обхождения нигде не записаны. Ничто из этого не обязательно; всё это настоящее.",
  "El reloj": "Часы",
  "España come y cena **más tarde** que casi toda Europa: la **comida** entre las dos y las tres, la **cena** a partir de las nueve, más tarde en verano y en el sur. El desayuno es ligero —café con leche y una tostada— y a media mañana mucha gente hace un segundo desayuno, el **almuerzo**.":
    "Испания обедает и ужинает **позже**, чем почти вся Европа: **обед** между двумя и тремя, **ужин** с девяти вечера, а летом и на юге ещё позже. Завтрак лёгкий — кофе с молоком и поджаренный хлеб, — а в середине утра многие завтракают во второй раз, и это зовётся **almuerzo**.",
  "Una parte de la explicación está en el huso horario: España peninsular usa la hora de Europa central pese a estar a la longitud de Londres, de modo que el sol se pone más tarde de lo que marca el reloj. La otra parte es costumbre heredada.":
    "Часть объяснения — в часовом поясе: материковая Испания живёт по среднеевропейскому времени, хотя лежит на долготе Лондона, так что солнце заходит позже, чем показывают часы. Другая часть — унаследованный обычай.",
  "Muchos comercios pequeños y oficinas cierran a mediodía y reabren por la tarde: es la **jornada partida**, más común cuanto más pequeño es el municipio. La **siesta** existe, pero como costumbre de fin de semana o de verano más que como práctica diaria.":
    "Многие мелкие лавки и конторы закрываются в полдень и открываются снова после полудня: это **разорванный рабочий день**, и чем меньше город, тем он обычнее. **Сиеста** существует, но скорее как обычай выходных или лета, чем как ежедневная привычка.",
  "¿A qué hora se cena habitualmente en España?": "В какое время в Испании обыкновенно ужинают?",
  "Entre las siete y las ocho": "Между семью и восемью",
  "A partir de las nueve": "С девяти вечера",
  "Entre las seis y las siete": "Между шестью и семью",
  "Después de medianoche": "После полуночи",
  "A partir de las nueve, y más tarde en verano y en el sur. La comida principal del día es la del mediodía, entre las dos y las tres.":
    "С девяти вечера, а летом и на юге ещё позже. Главная еда дня — полуденная, между двумя и тремя.",
  "La mesa": "Стол",
  "El **menú del día** es una institución: en la mayoría de los restaurantes, al mediodía y entre semana, se ofrece primer plato, segundo, pan, bebida y postre o café a **precio fijo**. Nació de una norma de los años sesenta pensada para el turismo y se quedó como costumbre.":
    "**Menú del día** — целое установление: в большинстве ресторанов в полдень по будням дают первое, второе, хлеб, питьё и сладкое или кофе за **твёрдую цену**. Родился он из правила шестидесятых годов, придуманного ради приезжих, да так и остался обычаем.",
  "Fuera de las comidas está el **tapeo**: ir de bar en bar tomando algo pequeño con la bebida. En algunas ciudades la tapa se sirve **incluida** con la consumición y en otras se paga aparte. Y después de comer viene la **sobremesa**, el rato de conversación con la mesa ya recogida, que puede durar más que la comida.":
    "Помимо еды за столом есть **tapeo**: ходить из бара в бар, беря к питью что-нибудь маленькое. В одних городах эту закуску подают **вместе** с питьём, в других за неё платят отдельно. А после еды идёт **sobremesa**, разговор за уже прибранным столом, который может длиться дольше самого обеда.",
  "¿Qué es el menú del día?": "Что такое menú del día?",
  "La carta completa del restaurante": "Полный список блюд ресторана",
  "Una comida completa a precio fijo, al mediodía y entre semana":
    "Полный обед за твёрдую цену, в полдень по будням",
  "El plato recomendado por el cocinero": "Блюдо, которое советует повар",
  "Un servicio reservado a los turistas": "Услуга только для приезжих",
  "Primer plato, segundo, pan, bebida y postre o café por un precio único. Nació de una norma de los años sesenta y se quedó como costumbre del país.":
    "Первое, второе, хлеб, питьё и сладкое или кофе за одну цену. Родился он из правила шестидесятых годов и остался обычаем страны.",
  "El trato": "Обхождение",
  "El **tuteo** está mucho más extendido en España que en otros países de lengua española. Se tutea a compañeros de trabajo, a camareros, a dependientes y con frecuencia a desconocidos de edad parecida. El **usted** se reserva para personas mayores, para contextos muy formales y para dirigirse a alguien de quien se quiere marcar distancia o respeto especial.":
    "Обращение **на «ты»** в Испании куда более принято, чем в других испаноязычных странах. На «ты» говорят с сослуживцами, с официантами, с продавцами и часто с незнакомыми своего возраста. **Usted**, то есть «вы», оставляют для людей старших, для очень строгих случаев и для тех, с кем хотят обозначить расстояние или особое почтение.",
  "El saludo habitual entre conocidos, y en presentaciones informales, son **dos besos** en la mejilla, empezando por la izquierda de quien saluda. Entre hombres suele ser un apretón de manos o un abrazo. En contextos profesionales la mano es lo normal.":
    "Обычное приветствие между знакомыми и при непринуждённом знакомстве — **два поцелуя** в щёку, начиная с левой стороны от того, кто здоровается. Между мужчинами это обыкновенно рукопожатие или объятие. В деловых случаях рука — дело обычное.",
  "¿Cómo se saluda habitualmente entre conocidos en una situación informal?":
    "Как обыкновенно здороваются знакомые в непринуждённой обстановке?",
  "Con una inclinación": "Поклоном",
  "Con dos besos en la mejilla": "Двумя поцелуями в щёку",
  "Sin contacto físico": "Не касаясь друг друга",
  "Con tres besos": "Тремя поцелуями",
  "Dos besos, empezando por la izquierda de quien saluda. Entre hombres es más común el apretón de manos o el abrazo, y en el trabajo la mano es lo habitual.":
    "Двумя поцелуями, начиная с левой стороны от того, кто здоровается. Между мужчинами чаще рукопожатие или объятие, а на работе рука — дело обычное.",
  "La calle y la casa": "Улица и дом",
  "La vida social ocurre mucho **fuera de casa**: en el bar del barrio, en la terraza, en la plaza. Es una consecuencia práctica del clima y de las viviendas, en su mayoría **pisos** en edificios y no casas individuales. La **propiedad** está muy extendida: la proporción de hogares en vivienda propia es de las más altas de Europa, aunque el alquiler crece entre los jóvenes.":
    "Жизнь среди людей идёт по большей части **вне дома**: в баре своего квартала, на веранде, на площади. Это простое следствие погоды и того, что жильё здесь — в большинстве **квартиры** в домах, а не отдельные дома. **Собственное жильё** очень распространено: доля семей, живущих в своём, одна из самых высоких в Европе, хотя среди молодых растёт наём.",
  "La familia sigue siendo muy cercana en el trato y en la práctica, y los jóvenes se **independizan tarde**, más que en casi toda Europa, por razones sobre todo económicas.":
    "Семья остаётся очень близкой и в обхождении, и на деле, а молодые **отделяются поздно**, позже, чем почти везде в Европе, и причины тут прежде всего денежные.",
  "El deporte": "Спорт",
  "El **fútbol** ocupa la conversación de agosto a mayo, con **LaLiga** y el partido entre los dos grandes clubes que se llama simplemente **el clásico**. La selección se conoce como **la Roja**. Después vienen el **baloncesto**, el **ciclismo** con la **Vuelta a España** cada septiembre, el **tenis** y el **motociclismo**, disciplinas en las que el país lleva décadas dando campeones.":
    "**Футбол** занимает разговоры с августа по май, с **LaLiga** и с матчем двух великих клубов, который зовут попросту **классикой**. Сборную знают как **красную**. Дальше идут **баскетбол**, **велосипед** с **Вуэльтой** каждый сентябрь, **теннис** и **мотогонки** — поприща, на которых страна десятилетиями даёт победителей.",
  "Los horarios están cambiando, y en las grandes ciudades muchos comercios ya no cierran a mediodía. Estas costumbres describen una tendencia general, no una regla que valga en todas partes ni para todo el mundo.":
    "Часы меняются, и в больших городах многие лавки в полдень уже не закрываются. Эти обычаи описывают общее направление, а не правило, годное везде и для всех.",
};
