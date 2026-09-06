/**
 * English for the Vivir en España course cards and headings.
 *
 * Keyed on the SPANISH source text exactly as it appears in
 * vivirEnEspanaCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but this table arrives
 * complete: every string the reader can tap is here, quizzes included.
 *
 * THE LAST OF THE FOUR country courses English could not read, after Russian,
 * Polish and Italian. With it, English joins German as a reading language for
 * all seven: whichever country a learner opens, the app they set to English
 * can now show it to them.
 *
 * WHAT STAYS SPANISH. The documents and institutions a learner meets on a
 * form keep their own names, with the sense beside them: DNI, NIE, TIE,
 * padrón, empadronamiento, arraigo, IRPF, RETA, SEPE, finiquito, vida
 * laboral, Cl@ve, selectividad, ESO, Bachillerato, concertado, Cortes. So do
 * the words for things with no English name — menú del día, tapeo,
 * sobremesa, jornada partida, Las Fallas, la Roja — explained where they
 * first appear.
 *
 * ONE PAIR NEEDS CARE. Castilian and Spanish name the same language, and the
 * course says so on its own card; article 3 uses castellano deliberately,
 * because the other languages of Spain are Spanish too. The translation
 * keeps Castilian wherever the source is talking about the constitutional
 * term, and Spanish where it is talking about the world language.
 *
 * ONE WORD IS MISSING ON PURPOSE, so the coverage line reads 99 per cent
 * rather than 100. "Municipales" is spelled the same in Spanish and French,
 * and the English table for Vivre en France already has it, rendered
 * "Municipal". Both tables are spread into one object, so a second copy here
 * would be a key nobody could tell apart from the first — and this one would
 * have differed, because it said "Local". Whichever spread ran last would
 * have decided the wording for BOTH courses, with no error anywhere.
 * check-en-translations found it on the run that added this file.
 *
 * The course NAME is not here: it is an interface string that already goes
 * through the i18n tables, and a second translation of it would fight the
 * first. The tagline underneath it is course text, so it belongs here.
 */
export const VIVIR_EN_ESPANA_EN: Record<string, string> = {
  // course
  "Historia, instituciones y vida diaria: cómo funciona el país.":
    "History, institutions and everyday life: how the country works.",
  // chapter
  "Símbolos y Constitución": "Symbols and the Constitution",
  // es-simbolos
  "Símbolos nacionales": "National symbols",
  "Por qué se empieza aquí: los símbolos se ven todos los días — en el ayuntamiento, en el pasaporte, en la camiseta de la selección — y son la puerta más fácil para entrar en todo lo demás.":
    "Why we start here: the symbols are seen every day — on the town hall, in a passport, on the national team's shirt — and they are the easiest door into everything else.",
  "La bandera": "The flag",
  "La bandera tiene tres franjas horizontales: **roja, amarilla y roja**. La amarilla es **el doble de ancha** que cada una de las rojas, de modo que ocupa la mitad de la bandera. Lo establece el **artículo 4** de la Constitución.":
    "The flag has three horizontal stripes: **red, yellow and red**. The yellow one is **twice as wide** as each of the red ones, so it takes up half the flag. **Article 4** of the Constitution lays this down.",
  "Su origen es marinero. En **1785 Carlos III** convocó un concurso para dotar a la Armada de un pabellón que se distinguiera en el mar: casi todas las flotas europeas usaban entonces fondos blancos con escudos, y de lejos se confundían. El rojo y el amarillo se ven a mucha distancia. De ahí pasó al ejército y, en el siglo XIX, a bandera nacional.":
    "Its origin is naval. In **1785 Charles III** held a competition to give the Navy an ensign that could be told apart at sea: almost every European fleet then used white grounds with coats of arms, and from a distance they blurred together. Red and yellow can be seen a long way off. From there it passed to the army and, in the nineteenth century, became the national flag.",
  "El escudo": "The coat of arms",
  "El escudo es un resumen de historia peninsular. Está **cuartelado**: cada cuartel corresponde a un reino que acabó formando parte de España.":
    "The coat of arms is a summary of the peninsula's history. It is **quartered**: each quarter belongs to a kingdom that ended up part of Spain.",
  "Castilla y León": "Castile and León",
  "El castillo dorado y el león púrpura ocupan los dos primeros cuarteles.":
    "The golden castle and the purple lion take the first two quarters.",
  "Aragón y Navarra": "Aragon and Navarre",
  "Los cuatro palos rojos de Aragón y las cadenas de Navarra completan el cuartelado.":
    "The four red bars of Aragon and the chains of Navarre complete the quartering.",
  "Granada": "Granada",
  "La granada al pie recuerda el último reino incorporado, en 1492.":
    "The pomegranate at the foot recalls the last kingdom to be taken in, in 1492.",
  "Las columnas": "The columns",
  "Las columnas de Hércules, con el lema PLUS ULTRA: más allá, hacia el Atlántico. Antes del descubrimiento el lema era el contrario.":
    "The Pillars of Hercules, with the motto PLUS ULTRA: further beyond, out towards the Atlantic. Before the discovery the motto said the opposite.",
  "¿Cómo son las franjas de la bandera española?": "What are the stripes of the Spanish flag like?",
  "Tres franjas iguales: roja, amarilla y roja": "Three equal stripes: red, yellow and red",
  "Roja, amarilla del doble de ancho, y roja": "Red, yellow twice as wide, and red",
  "Dos franjas: roja arriba y amarilla abajo": "Two stripes: red above and yellow below",
  "Tres franjas verticales": "Three vertical stripes",
  "La amarilla ocupa la mitad de la bandera y cada roja un cuarto. No son tres franjas iguales, y esa proporción está fijada en el artículo 4 de la Constitución.":
    "The yellow takes half the flag and each red a quarter. They are not three equal stripes, and that proportion is fixed in article 4 of the Constitution.",
  "El himno": "The anthem",
  "El himno se llama **Marcha Real** y tiene una rareza que lo distingue de casi todos los demás: **no tiene letra**. Se canta con la boca cerrada, o no se canta. Solo otros pocos países en el mundo están en la misma situación.":
    "The anthem is called the **Marcha Real** and it has an oddity that sets it apart from almost every other: **it has no words**. It is hummed, or it is not sung at all. Only a handful of other countries in the world are in the same position.",
  "Es además uno de los himnos más antiguos de Europa: aparece documentado ya en **1761** como Marcha Granadera. Se le han puesto letras en varias épocas, pero ninguna ha llegado a ser oficial, y los intentos de darle una han fracasado siempre.":
    "It is also one of the oldest anthems in Europe: it is documented as early as **1761** as the Marcha Granadera. Words have been written for it at various times, but none has ever become official, and every attempt to give it a text has failed.",
  "¿Qué particularidad tiene el himno nacional español?":
    "What is unusual about the Spanish national anthem?",
  "Que dura menos de treinta segundos": "That it lasts less than thirty seconds",
  "Que no tiene letra oficial": "That it has no official words",
  "Que solo puede interpretarse en actos militares": "That it may only be played at military ceremonies",
  "Que se compuso en el siglo XX": "That it was composed in the twentieth century",
  "La Marcha Real carece de letra oficial. Se han propuesto varias a lo largo del tiempo y ninguna ha prosperado; es además uno de los himnos más antiguos de Europa, documentado desde 1761.":
    "The Marcha Real has no official words. Several have been proposed over time and none has stuck; it is also one of the oldest anthems in Europe, documented since 1761.",
  "Las fechas": "The dates",
  "12 de octubre": "12 October",
  "Fiesta Nacional de España. Conmemora la llegada de Colón a América en 1492 y el desfile en Madrid es el acto central.":
    "Spain's National Day. It marks Columbus's arrival in America in 1492, and the parade in Madrid is the central event.",
  "6 de diciembre": "6 December",
  "Día de la Constitución. Se celebra el referéndum de 1978, no la fecha en que entró en vigor.":
    "Constitution Day. What is celebrated is the referendum of 1978, not the date the text came into force.",
  "2 de mayo": "2 May",
  "Fiesta de la Comunidad de Madrid: el levantamiento de 1808 contra las tropas de Napoleón. Es autonómica, no nacional.":
    "The holiday of the Community of Madrid: the rising of 1808 against Napoleon's troops. It is regional, not national.",
  "La lengua oficial del Estado es el **castellano**, según el artículo 3, que añade que las demás lenguas españolas serán también oficiales en sus comunidades. Es el único artículo de los primeros que habla de lenguas, y en el capítulo cuarto se ve por qué importa tanto.":
    "The official language of the State is **Castilian**, under article 3, which adds that the other Spanish languages will also be official in their own communities. It is the only one of the opening articles that speaks about language, and chapter four shows why that matters so much.",
  "¿Qué se celebra el 12 de octubre?": "What is celebrated on 12 October?",
  "El Día de la Constitución": "Constitution Day",
  "La Fiesta Nacional de España": "Spain's National Day",
  "El aniversario de la proclamación del rey": "The anniversary of the king's proclamation",
  "El fin de la Guerra Civil": "The end of the Civil War",
  "El 12 de octubre es la Fiesta Nacional. El Día de la Constitución es el 6 de diciembre: dos fechas que se confunden con frecuencia porque ambas son festivos nacionales.":
    "12 October is the National Day. Constitution Day is 6 December: two dates often confused because both are national holidays.",
  "Bandera con escudo y bandera sin escudo son las dos correctas. La que llevan los edificios oficiales incluye el escudo; la que se ve en un balcón o en un estadio normalmente no.":
    "A flag with the coat of arms and one without are both correct. The one on official buildings carries the arms; the one seen on a balcony or in a stadium usually does not.",
  // es-constitucion
  "La Constitución de 1978": "The Constitution of 1978",
  "Por qué importa: casi todo lo que viene después — el rey, las Cortes, las autonomías, las lenguas — está en un texto de 1978 que se escribió deliberadamente para que nadie ganara del todo. Entender ese punto de partida explica su forma.":
    "Why this matters: almost everything that follows — the king, the Cortes, the autonomous communities, the languages — is in a text from 1978 written deliberately so that nobody would win outright. Understanding that starting point explains its shape.",
  "Cómo se hizo": "How it was made",
  "Tras la muerte de Franco en 1975, las **elecciones de junio de 1977** dieron unas Cortes que asumieron la tarea de escribir una Constitución. La comisión encargó el borrador a **siete diputados** de partidos distintos, a los que se conoce como los **padres de la Constitución**.":
    "After Franco's death in 1975, the **elections of June 1977** produced a Cortes that took on the task of writing a Constitution. The committee gave the drafting to **seven deputies** from different parties, known as the **fathers of the Constitution**.",
  "El calendario del final del año siguiente conviene tenerlo ordenado: las Cortes aprobaron el texto el **31 de octubre de 1978**, el pueblo lo ratificó en **referéndum el 6 de diciembre**, el rey lo sancionó el **27 de diciembre** y entró en vigor el **29 de diciembre**, el día de su publicación en el Boletín Oficial del Estado.":
    "The calendar of the end of the following year is worth keeping straight: the Cortes approved the text on **31 October 1978**, the people ratified it in a **referendum on 6 December**, the king gave his assent on **27 December** and it came into force on **29 December**, the day it was published in the Official State Gazette.",
  "La palabra que resume el método es **consenso**. El texto se redactó buscando que ninguna fuerza quedara fuera, y esa es la razón de que algunos artículos sean deliberadamente amplios: se acordó la frase precisamente porque admitía más de una lectura.":
    "The word that sums up the method is **consensus**. The text was drafted so that no force would be left out, and that is why some articles are deliberately broad: the wording was agreed on precisely because it allowed more than one reading.",
  "¿En qué fecha se ratificó la Constitución en referéndum?":
    "On what date was the Constitution ratified by referendum?",
  "El 31 de octubre de 1978": "On 31 October 1978",
  "El 6 de diciembre de 1978": "On 6 December 1978",
  "El 27 de diciembre de 1978": "On 27 December 1978",
  "El 29 de diciembre de 1978": "On 29 December 1978",
  "Aprobación en las Cortes el 31 de octubre, referéndum el 6 de diciembre, sanción real el 27 y entrada en vigor el 29. El Día de la Constitución celebra el referéndum.":
    "Approval in the Cortes on 31 October, referendum on 6 December, royal assent on the 27th and entry into force on the 29th. Constitution Day celebrates the referendum.",
  "Cómo está hecha": "How it is built",
  "Tiene **169 artículos**, repartidos en un **título preliminar** y **diez títulos**, más disposiciones adicionales, transitorias, derogatoria y final. Es un texto largo comparado con otras constituciones europeas, y buena parte de esa extensión está en el título dedicado a los derechos.":
    "It has **169 articles**, arranged in a **preliminary title** and **ten titles**, plus additional, transitional, repealing and final provisions. It is a long text compared with other European constitutions, and much of that length is in the title given to rights.",
  "Título preliminar": "Preliminary title",
  "Artículos 1 a 9: qué es España, dónde reside la soberanía, las lenguas, la bandera, la capital.":
    "Articles 1 to 9: what Spain is, where sovereignty lies, the languages, the flag, the capital.",
  "Título I": "Title I",
  "Artículos 10 a 55: derechos y deberes fundamentales. Es el título más extenso.":
    "Articles 10 to 55: fundamental rights and duties. It is the longest title.",
  "Títulos II a VI": "Titles II to VI",
  "La Corona, las Cortes, el Gobierno y el poder judicial: quién hace qué.":
    "The Crown, the Cortes, the Government and the judiciary: who does what.",
  "Título VIII": "Title VIII",
  "La organización territorial del Estado. De aquí nacen las comunidades autónomas.":
    "The territorial organisation of the State. The autonomous communities come from here.",
  "Los primeros artículos": "The opening articles",
  "El **artículo 1** define España como un **Estado social y democrático de Derecho**, sitúa la soberanía en el pueblo español y establece que la **forma política del Estado es la Monarquía parlamentaria**. Las tres afirmaciones están en el mismo artículo y conviene no separarlas: la monarquía es la forma, no el fundamento.":
    "**Article 1** defines Spain as a **social and democratic State subject to the rule of law**, places sovereignty in the Spanish people and establishes that the **political form of the State is the parliamentary monarchy**. All three statements are in the same article and are best not separated: the monarchy is the form, not the foundation.",
  "El **artículo 2** contiene la frase más discutida del texto: se fundamenta en la **indisoluble unidad de la Nación española** y a la vez reconoce y garantiza **el derecho a la autonomía de las nacionalidades y regiones** que la integran. Las dos mitades se acordaron juntas, y el capítulo cuarto de este curso explica qué se construyó sobre ellas.":
    "**Article 2** contains the most argued-over sentence in the text: it is founded on the **indissoluble unity of the Spanish Nation** and at the same time recognises and guarantees **the right to autonomy of the nationalities and regions** that make it up. The two halves were agreed together, and chapter four of this course explains what was built on them.",
  "¿Qué forma política del Estado establece el artículo 1?":
    "What political form of the State does article 1 establish?",
  "La república parlamentaria": "A parliamentary republic",
  "La monarquía parlamentaria": "A parliamentary monarchy",
  "La monarquía absoluta": "An absolute monarchy",
  "El Estado federal": "A federal State",
  "Monarquía parlamentaria: el rey es jefe del Estado pero no gobierna, y la soberanía reside en el pueblo. El mismo artículo define España como Estado social y democrático de Derecho.":
    "A parliamentary monarchy: the king is head of state but does not govern, and sovereignty lies with the people. The same article defines Spain as a social and democratic State subject to the rule of law.",
  "Cambiarla es difícil": "Changing it is hard",
  "Hay **dos procedimientos**. El **ordinario**, del artículo 167, exige tres quintos de cada cámara. El **agravado**, del artículo 168, se aplica a las partes más protegidas — el título preliminar, los derechos fundamentales de la sección primera y el título de la Corona — y es de una dureza poco común: dos tercios de ambas cámaras, **disolución de las Cortes**, elecciones, ratificación por las nuevas cámaras y **referéndum obligatorio**.":
    "There are **two procedures**. The **ordinary** one, in article 167, requires three fifths of each chamber. The **aggravated** one, in article 168, applies to the most protected parts — the preliminary title, the fundamental rights of the first section and the title on the Crown — and is unusually severe: two thirds of both chambers, **dissolution of the Cortes**, an election, ratification by the new chambers and a **compulsory referendum**.",
  "El resultado se ve en la práctica: la Constitución solo se ha reformado **dos veces** en más de cuarenta años, ambas por el procedimiento ordinario y ambas por exigencias europeas. En **1992** se tocó el artículo 13 para permitir el voto de extranjeros en las municipales tras Maastricht, y en **2011** el artículo 135, sobre estabilidad presupuestaria.":
    "The result shows in practice: the Constitution has been amended only **twice** in more than forty years, both times by the ordinary procedure and both times at European insistence. In **1992** article 13 was touched so that foreigners could vote in local elections after Maastricht, and in **2011** article 135, on budgetary stability.",
  "¿Cuántas veces se ha reformado la Constitución española?":
    "How many times has the Spanish Constitution been amended?",
  "Ninguna": "Never",
  "Dos": "Twice",
  "Siete": "Seven times",
  "Más de veinte": "More than twenty times",
  "Dos: en 1992, para permitir el voto de extranjeros en elecciones municipales, y en 2011, sobre estabilidad presupuestaria. Ambas por el procedimiento ordinario del artículo 167.":
    "Twice: in 1992, to allow foreigners to vote in local elections, and in 2011, on budgetary stability. Both by the ordinary procedure of article 167.",
  "El **29 de diciembre** entró en vigor, pero el festivo es el **6 de diciembre**, el del referéndum. Se celebra el día en que la gente votó, no el día en que el texto empezó a regir.":
    "It came into force on **29 December**, but the holiday is **6 December**, the day of the referendum. What is celebrated is the day people voted, not the day the text began to apply.",
  // es-derechos
  "Derechos y libertades fundamentales": "Fundamental rights and freedoms",
  "Por qué importa: el título I no es una lista uniforme. Unos derechos están protegidos con todo el aparato del Estado y otros son principios que orientan la política. Saber en qué grupo cae cada uno es la mitad de entenderlo.":
    "Why this matters: title I is not a uniform list. Some rights are protected with the full apparatus of the State and others are principles that steer policy. Knowing which group each falls into is half of understanding it.",
  "Tres niveles de protección": "Three levels of protection",
  "La Constitución protege sus derechos con intensidad distinta, y el criterio es dónde está escrito cada uno.":
    "The Constitution protects its rights with different force, and the test is where each one is written.",
  "Artículos 15 a 29": "Articles 15 to 29",
  "Derechos fundamentales y libertades públicas. Máxima protección: ley orgánica, procedimiento judicial preferente y recurso de amparo ante el Tribunal Constitucional.":
    "Fundamental rights and public freedoms. Maximum protection: organic law, a preferential judicial procedure and the amparo appeal to the Constitutional Court.",
  "Artículos 30 a 38": "Articles 30 to 38",
  "Derechos y deberes de los ciudadanos. Vinculan a los poderes públicos y se regulan por ley, pero sin amparo constitucional.":
    "Rights and duties of citizens. They bind the public authorities and are regulated by law, but without constitutional amparo.",
  "Artículos 39 a 52": "Articles 39 to 52",
  "Principios rectores de la política social y económica: vivienda, medio ambiente, tercera edad. Orientan al legislador y solo se alegan ante los tribunales conforme a las leyes que los desarrollen.":
    "Guiding principles of social and economic policy: housing, the environment, old age. They steer the legislator and can be invoked before the courts only in accordance with the laws that give them effect.",
  "El **artículo 14** abre la lista fuera de esa clasificación: los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por nacimiento, raza, sexo, religión, opinión o cualquier otra condición personal o social.":
    "**Article 14** opens the list outside that classification: Spaniards are equal before the law, and no discrimination may prevail on grounds of birth, race, sex, religion, opinion or any other personal or social condition.",
  "La persona": "The person",
  "El **artículo 15** reconoce el derecho a la vida y a la integridad física y moral, prohíbe la tortura y **abole la pena de muerte**, salvo lo que dispusieran las leyes penales militares en tiempo de guerra — excepción que fue suprimida por ley en 1995.":
    "**Article 15** recognises the right to life and to physical and moral integrity, prohibits torture and **abolishes the death penalty**, except as military criminal law might provide in time of war — an exception removed by statute in 1995.",
  "El **artículo 16** garantiza la libertad ideológica y religiosa, y añade una frase decisiva: **ninguna confesión tendrá carácter estatal**. No es exactamente una separación al modo francés, porque el mismo artículo obliga a los poderes públicos a mantener relaciones de cooperación con la Iglesia católica y las demás confesiones. Es una aconfesionalidad con cooperación.":
    "**Article 16** guarantees freedom of belief and religion, and adds a decisive sentence: **no confession shall have a state character**. It is not quite a separation in the French manner, because the same article requires the public authorities to maintain relations of cooperation with the Catholic Church and the other confessions. It is non-confessionality with cooperation.",
  "El **artículo 17** protege la libertad personal: la **detención preventiva** no puede durar más de **setenta y dos horas**, pasadas las cuales el detenido debe ser puesto en libertad o a disposición judicial. El mismo artículo prevé el **habeas corpus**, el procedimiento para llevar de inmediato ante un juez a quien esté detenido ilegalmente.":
    "**Article 17** protects personal liberty: **preventive detention** may not last more than **seventy-two hours**, after which the detainee must be released or brought before a judge. The same article provides for **habeas corpus**, the procedure for bringing anyone unlawfully detained before a judge at once.",
  "¿Cuál es la duración máxima de una detención preventiva?":
    "What is the maximum length of preventive detention?",
  "Veinticuatro horas": "Twenty-four hours",
  "Cuarenta y ocho horas": "Forty-eight hours",
  "Setenta y dos horas": "Seventy-two hours",
  "Cinco días": "Five days",
  "Setenta y dos horas, según el artículo 17. Cumplido el plazo, el detenido debe quedar en libertad o pasar a disposición judicial; el habeas corpus sirve para forzarlo si no ocurre.":
    "Seventy-two hours, under article 17. Once the limit is up, the detainee must be released or brought before a judge; habeas corpus is there to force it if that does not happen.",
  // es-derechos
  "La vida en común": "Living together",
  "El **artículo 18** protege el honor, la intimidad y la propia imagen, declara **inviolable el domicilio** — no se entra sin consentimiento o resolución judicial, salvo delito flagrante — y garantiza el secreto de las comunicaciones. El **artículo 20** reconoce la libertad de expresión y el derecho a comunicar y recibir información veraz, y prohíbe la censura previa.":
    "**Article 18** protects honour, privacy and one's own image, declares **the home inviolable** — no entry without consent or a court order, except in the case of a crime in progress — and guarantees the secrecy of communications. **Article 20** recognises freedom of expression and the right to impart and receive truthful information, and prohibits prior censorship.",
  "Los **artículos 21 y 22** amparan la reunión y la asociación: para reunirse en lugares de tránsito público basta comunicarlo a la autoridad, no pedir permiso. El **artículo 23** reconoce el derecho a participar en los asuntos públicos y a acceder en condiciones de igualdad a las funciones y cargos públicos.":
    "**Articles 21 and 22** cover assembly and association: to meet in places of public passage it is enough to notify the authorities, not to ask permission. **Article 23** recognises the right to take part in public affairs and to have equal access to public functions and offices.",
  "¿Qué establece la Constitución sobre la religión del Estado?":
    "What does the Constitution establish about the State's religion?",
  "Que la religión católica es la oficial": "That the Catholic religion is the official one",
  "Que ninguna confesión tendrá carácter estatal": "That no confession shall have a state character",
  "Que se prohíbe toda relación entre Estado y confesiones":
    "That any relationship between State and confessions is forbidden",
  "Que cada comunidad autónoma decide su confesión":
    "That each autonomous community decides its own confession",
  "El artículo 16 dice que ninguna confesión tendrá carácter estatal, y a la vez obliga a mantener relaciones de cooperación con la Iglesia católica y las demás. Es aconfesionalidad, no separación estricta.":
    "Article 16 says no confession shall have a state character, and at the same time requires relations of cooperation with the Catholic Church and the others. It is non-confessionality, not strict separation.",
  "Ante la justicia": "Before the courts",
  "El **artículo 24** reconoce la **tutela judicial efectiva**: derecho al juez ordinario predeterminado por la ley, a la defensa y a la asistencia de letrado, a un proceso público sin dilaciones indebidas y a la **presunción de inocencia**. El **artículo 25** añade que las penas privativas de libertad se orientarán a la reeducación y reinserción social.":
    "**Article 24** recognises **effective judicial protection**: the right to the ordinary judge predetermined by law, to a defence and to counsel, to a public trial without undue delay and to the **presumption of innocence**. **Article 25** adds that custodial sentences shall be aimed at re-education and social reintegration.",
  "Cuando uno de los derechos de los artículos 14 a 29 se vulnera y los tribunales ordinarios no lo reparan, queda el **recurso de amparo** ante el **Tribunal Constitucional**. Es la última puerta interna, y solo se abre para ese grupo de derechos.":
    "When one of the rights in articles 14 to 29 is infringed and the ordinary courts do not put it right, the **amparo appeal** to the **Constitutional Court** remains. It is the last door inside the country, and it opens only for that group of rights.",
  "¿Ante qué órgano se interpone el recurso de amparo?": "Before which body is an amparo appeal brought?",
  "Ante el Tribunal Supremo": "Before the Supreme Court",
  "Ante el Tribunal Constitucional": "Before the Constitutional Court",
  "Ante el Defensor del Pueblo": "Before the Ombudsman",
  "Ante el Consejo General del Poder Judicial": "Before the General Council of the Judiciary",
  "El amparo se interpone ante el Tribunal Constitucional y solo protege los derechos de los artículos 14 a 29. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria, que es otra cosa.":
    "Amparo is brought before the Constitutional Court and protects only the rights of articles 14 to 29. The Supreme Court is the top of the ordinary jurisdiction, which is a different thing.",
  "El derecho a una **vivienda digna** está en el artículo 47, entre los principios rectores. Es un mandato al legislador, no un derecho que pueda reclamarse directamente ante un juez como la libertad de expresión.":
    "The right to **decent housing** is in article 47, among the guiding principles. It is a mandate to the legislator, not a right that can be claimed directly before a judge the way freedom of expression can.",
  // es-deberes
  "Deberes de los ciudadanos y la nacionalidad": "The duties of citizens, and nationality",
  "Por qué importa: la Constitución no solo reparte derechos. Impone cuatro deberes, y uno de ellos se cumple todos los años. Y define quién es español, que es la puerta por la que se entra a todo lo demás.":
    "Why this matters: the Constitution does not only hand out rights. It imposes four duties, and one of them is discharged every year. And it defines who is Spanish, which is the door through which everything else is entered.",
  "Los deberes": "The duties",
  "El **artículo 30** establece el derecho y el deber de **defender a España**. La ley regulaba con él el servicio militar obligatorio, que quedó **suspendido en 2001**: desde entonces las Fuerzas Armadas son enteramente profesionales. El mismo artículo prevé la objeción de conciencia y, para casos de grave riesgo, deberes de protección civil.":
    "**Article 30** establishes the right and the duty to **defend Spain**. The law used it to regulate compulsory military service, which was **suspended in 2001**: since then the Armed Forces have been entirely professional. The same article provides for conscientious objection and, in cases of serious risk, for civil protection duties.",
  "El **artículo 31** es el deber que se cumple cada año: todos contribuirán al sostenimiento de los gastos públicos **de acuerdo con su capacidad económica**, mediante un sistema tributario **justo**, inspirado en los principios de **igualdad y progresividad**, y que en ningún caso tendrá alcance **confiscatorio**. Progresividad significa que quien más gana no paga solo más dinero, sino un porcentaje mayor.":
    "**Article 31** is the duty discharged every year: everyone shall contribute to the upkeep of public spending **according to their economic capacity**, through a **fair** tax system, guided by the principles of **equality and progressivity**, and which shall in no case be **confiscatory**. Progressivity means that whoever earns more pays not merely more money but a larger percentage.",
  "Defender a España · art. 30": "Defending Spain · art. 30",
  "Derecho y deber. El servicio militar obligatorio está suspendido desde 2001.":
    "A right and a duty. Compulsory military service has been suspended since 2001.",
  "Contribuir · art. 31": "Contributing · art. 31",
  "Según la capacidad económica, con un sistema progresivo y no confiscatorio.":
    "According to economic capacity, with a progressive and non-confiscatory system.",
  "Trabajar · art. 35": "Working · art. 35",
  "Deber y derecho al trabajo, a la libre elección de profesión y a una remuneración suficiente.":
    "A duty and a right to work, to the free choice of a profession and to sufficient pay.",
  "La enseñanza básica · art. 27": "Basic education · art. 27",
  "Es obligatoria y gratuita. El deber recae sobre quien tiene la patria potestad.":
    "It is compulsory and free. The duty falls on whoever holds parental authority.",
  "¿Qué significa que el sistema tributario es progresivo?":
    "What does it mean that the tax system is progressive?",
  "Que los impuestos suben cada año": "That taxes go up every year",
  "Que quien tiene más renta paga un porcentaje mayor":
    "That whoever has more income pays a larger percentage",
  "Que todos pagan el mismo porcentaje": "That everyone pays the same percentage",
  "Que se puede pagar a plazos": "That you can pay in instalments",
  "La progresividad del artículo 31 se refiere al porcentaje, no solo al importe. Un impuesto que cobrara a todos el mismo porcentaje sería proporcional, no progresivo.":
    "The progressivity of article 31 refers to the percentage, not only to the amount. A tax that charged everyone the same percentage would be proportional, not progressive.",
  "Quién es español": "Who is Spanish",
  "El **artículo 11** remite a la ley, y esa ley es el **Código Civil**. La regla principal es la de la **sangre**: es español de origen quien nace de padre o madre españoles, con independencia del lugar de nacimiento. Nacer en territorio español no basta por sí solo, aunque hay reglas que evitan que un niño quede sin nacionalidad alguna.":
    "**Article 11** refers to statute, and that statute is the **Civil Code**. The main rule is the one of **blood**: whoever is born to a Spanish father or mother is Spanish by origin, whatever the place of birth. Being born on Spanish soil is not enough by itself, though there are rules that stop a child being left with no nationality at all.",
  "El mismo artículo prohíbe privar de la nacionalidad a los españoles de origen y permite tratados de **doble nacionalidad** con los países iberoamericanos y con aquellos que hayan tenido o tengan una vinculación particular con España.":
    "The same article forbids depriving Spaniards by origin of their nationality and allows **dual nationality** treaties with the Ibero-American countries and with those that have had or have a particular tie with Spain.",
  "La nacionalidad por residencia": "Nationality by residence",
  "El plazo general es de **diez años** de residencia legal, continuada e inmediatamente anterior a la solicitud. Hay plazos abreviados, y responden a la historia de España más que a un criterio administrativo.":
    "The general period is **ten years** of lawful, continuous residence immediately before the application. There are shortened periods, and they answer to Spain's history rather than to any administrative test.",
  "Diez años": "Ten years",
  "El plazo general, para quien no encaja en ninguna de las categorías siguientes.":
    "The general period, for anyone who does not fall into one of the categories below.",
  "Cinco años": "Five years",
  "Para quienes hayan obtenido la condición de refugiado.":
    "For those who have been granted refugee status.",
  "Dos años": "Two years",
  "Para nacionales de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial y Portugal, y para los sefardíes.":
    "For nationals of Ibero-American countries, Andorra, the Philippines, Equatorial Guinea and Portugal, and for Sephardic Jews.",
  "Un año": "One year",
  "Entre otros supuestos, para quien nació en territorio español, o lleva un año casado con española o español y no está separado.":
    "Among other cases, for anyone born on Spanish soil, or married for a year to a Spanish woman or man and not separated.",
  "Además de la residencia se exigen **buena conducta cívica** y un **suficiente grado de integración**, que se acredita con dos pruebas del Instituto Cervantes: la de **lengua DELE A2** y la **CCSE**, de conocimientos constitucionales y socioculturales. Quien procede de un país donde el español es lengua oficial queda exento de la primera.":
    "Besides residence, **good civic conduct** and a **sufficient degree of integration** are required, proved by two tests from the Instituto Cervantes: the **DELE A2** language test and the **CCSE**, on constitutional and sociocultural knowledge. Anyone from a country where Spanish is an official language is exempt from the first.",
  "¿Cuántos años de residencia se exigen con carácter general para pedir la nacionalidad?":
    "How many years of residence are required in general to apply for nationality?",
  "Cinco": "Five",
  "Diez": "Ten",
  "Quince": "Fifteen",
  "Diez años de residencia legal y continuada. Cinco corresponde a los refugiados y dos a los nacionales de países iberoamericanos y a otros supuestos con vínculo histórico con España.":
    "Ten years of lawful, continuous residence. Five applies to refugees and two to nationals of Ibero-American countries and other cases with a historic tie to Spain.",
  "¿Qué plazo de residencia se aplica a los nacionales de países iberoamericanos?":
    "What period of residence applies to nationals of Ibero-American countries?",
  "El mismo plazo general de diez años": "The same general period of ten years",
  "Dos años, igual que para Andorra, Filipinas, Guinea Ecuatorial, Portugal y los sefardíes. El plazo de un año se reserva a supuestos como haber nacido en España o llevar un año casado con una persona española.":
    "Two years, the same as for Andorra, the Philippines, Equatorial Guinea, Portugal and Sephardic Jews. The one-year period is reserved for cases such as being born in Spain or being married to a Spanish person for a year.",
  "La **mayoría de edad** en España son los **dieciocho años**, y con ella llegan el voto y la plena capacidad de obrar. El **DNI** es obligatorio a partir de los catorce.":
    "**Majority** in Spain comes at **eighteen**, and with it the vote and full legal capacity. The **DNI**, the national identity card, is compulsory from fourteen.",
  // es-fiestas
  "Fiestas y calendario": "Holidays and the calendar",
  "Por qué importa: el calendario laboral español tiene tres capas — el Estado, la comunidad y el municipio — y por eso dos ciudades vecinas pueden trabajar en días distintos. Entender las capas evita más de un viaje en balde.":
    "Why this matters: the Spanish working calendar has three layers — the State, the community and the municipality — which is why two neighbouring towns can work on different days. Understanding the layers saves more than one wasted journey.",
  "Catorce días": "Fourteen days",
  "El calendario laboral tiene **catorce festivos** al año. **Doce** los fija el Estado o la comunidad autónoma, y **dos son locales**, decididos por cada ayuntamiento: el día del patrón, la fiesta mayor, la feria del pueblo.":
    "The working calendar has **fourteen holidays** a year. **Twelve** are set by the State or the autonomous community, and **two are local**, decided by each town council: the patron saint's day, the main festival, the town fair.",
  "De ahí que un festivo pueda no serlo a treinta kilómetros. Las comunidades pueden además sustituir algunos festivos nacionales por otros propios, de modo que ni siquiera la lista estatal se aplica igual en todas partes.":
    "So a holiday may not be one thirty kilometres away. Communities can also replace some national holidays with ones of their own, so not even the state list applies the same way everywhere.",
  "Fijos en todo el país": "Fixed across the whole country",
  "1 de enero, 1 de mayo, 12 de octubre, 1 de noviembre, 6 y 8 de diciembre, y 25 de diciembre.":
    "1 January, 1 May, 12 October, 1 November, 6 and 8 December, and 25 December.",
  "Semana Santa": "Holy Week",
  "El Viernes Santo es festivo en toda España. El Jueves Santo lo es en la mayoría de las comunidades, pero no en todas.":
    "Good Friday is a holiday throughout Spain. Maundy Thursday is one in most communities, but not in all.",
  "Días de la comunidad": "Community days",
  "El 11 de septiembre en Cataluña, el 25 de julio en Galicia, el 9 de octubre en la Comunidad Valenciana, el 28 de febrero en Andalucía.":
    "11 September in Catalonia, 25 July in Galicia, 9 October in the Valencian Community, 28 February in Andalusia.",
  "Los dos locales": "The two local ones",
  "Los elige el ayuntamiento. Suelen coincidir con el patrón o con la fiesta grande del municipio.":
    "The town council chooses them. They usually fall on the patron saint's day or on the town's main festival.",
  "¿Cuántos días festivos tiene el calendario laboral español?":
    "How many public holidays does the Spanish working calendar have?",
  "Doce": "Twelve",
  "Catorce": "Fourteen",
  "Dieciséis": "Sixteen",
  "Catorce: doce estatales o autonómicos y dos locales fijados por el ayuntamiento. Por eso dos municipios vecinos pueden tener días libres distintos.":
    "Fourteen: twelve national or regional and two local, fixed by the town council. That is why two neighbouring municipalities can have different days off.",
  "El invierno": "Winter",
  "La **Nochevieja** tiene un rito muy preciso: al sonar las doce campanadas se comen **doce uvas**, una por campanada. Quien las termina a tiempo tendrá un buen año. La costumbre se difundió a comienzos del siglo XX y hoy se retransmite en directo desde la Puerta del Sol de Madrid.":
    "**New Year's Eve** has a very precise ritual: as the twelve strokes of midnight sound, **twelve grapes** are eaten, one per stroke. Whoever finishes in time will have a good year. The custom spread at the beginning of the twentieth century and is now broadcast live from the Puerta del Sol in Madrid.",
  "Los regalos de invierno no llegan el 25 de diciembre sino el **6 de enero**, con los **Reyes Magos**. La tarde del día 5 se celebran las cabalgatas, y en Nochebuena y Navidad las familias se reúnen a comer. En muchas casas conviven ya ambas fechas, pero la de los Reyes sigue siendo la principal para los niños.":
    "Winter presents do not arrive on 25 December but on **6 January**, with the **Three Kings**. The processions are held on the evening of the 5th, and on Christmas Eve and Christmas Day families gather to eat. In many homes both dates now coexist, but the Kings remain the main one for children.",
  "¿Qué se hace tradicionalmente en Nochevieja al sonar las campanadas?":
    "What is traditionally done on New Year's Eve as the bells strike?",
  "Se comen doce uvas, una por campanada": "Twelve grapes are eaten, one per stroke",
  "Se encienden doce velas": "Twelve candles are lit",
  "Se reparten doce monedas": "Twelve coins are handed out",
  "Se cantan doce coplas": "Twelve songs are sung",
  "Una uva por campanada, doce en total. La costumbre se extendió a principios del siglo XX y se retransmite cada año desde la Puerta del Sol.":
    "One grape per stroke, twelve in all. The custom spread at the start of the twentieth century and is broadcast every year from the Puerta del Sol.",
  "Las fiestas populares": "The popular festivals",
  "Junto al calendario oficial está el de las fiestas que dan fama a las ciudades, y que en muchos casos duran una semana entera.":
    "Alongside the official calendar there is the one of the festivals that make cities famous, and that in many cases last a whole week.",
  "Las Fallas": "Las Fallas",
  "En Valencia, en marzo. Se levantan monumentos de cartón y madera por toda la ciudad y la noche del 19 se queman.":
    "In Valencia, in March. Monuments of card and wood are raised all over the city and burned on the night of the 19th.",
  "La Feria de Abril": "The Feria de Abril",
  "En Sevilla, con casetas, caballos y trajes de flamenca, dos semanas después de Semana Santa.":
    "In Seville, with marquees, horses and flamenco dresses, two weeks after Holy Week.",
  "San Fermín": "San Fermín",
  "En Pamplona, del 6 al 14 de julio. Los encierros de la mañana son su imagen más conocida.":
    "In Pamplona, from 6 to 14 July. The morning bull runs are its best-known image.",
  "El Carnaval": "Carnival",
  "El de Santa Cruz de Tenerife y el de Cádiz son los mayores; el gaditano se recuerda sobre todo por sus chirigotas.":
    "The ones in Santa Cruz de Tenerife and Cádiz are the largest; the Cádiz carnival is remembered above all for its chirigotas.",
  "¿En qué ciudad se celebran las Fallas?": "In which city are Las Fallas held?",
  "En Sevilla": "In Seville",
  "En Pamplona": "In Pamplona",
  "En Valencia": "In Valencia",
  "En Cádiz": "In Cádiz",
  "Las Fallas son de Valencia y se queman en marzo. Sevilla tiene la Feria de Abril, Pamplona los San Fermines y Cádiz uno de los dos grandes carnavales.":
    "Las Fallas belong to Valencia and are burned in March. Seville has the Feria de Abril, Pamplona the San Fermines and Cádiz one of the two great carnivals.",
  "Cuando un festivo cae en martes o jueves, muchos hacen **puente** y libran también el lunes o el viernes. Si caen dos cerca, se llama **acueducto**: no es una figura legal, pero explica por qué en esas semanas media España está cerrada.":
    "When a holiday falls on a Tuesday or a Thursday, many people make a **puente**, a bridge, and take the Monday or Friday off as well. If two fall close together it is called an **acueducto**: not a legal concept, but it explains why half of Spain is shut in those weeks.",
  // chapter
  "Las instituciones del Estado": "The institutions of the State",
  // es-corona
  "La Corona": "The Crown",
  "Por qué importa: España tiene un rey y no lo gobierna nadie desde el trono. Entender qué hace exactamente el jefe del Estado — y qué no hace — es la primera pieza del sistema.":
    "Why this matters: Spain has a king and nobody governs from the throne. Understanding exactly what the head of state does — and what he does not do — is the first piece of the system.",
  "Qué es el rey": "What the king is",
  "El **artículo 56** define al rey como **jefe del Estado**, **símbolo de su unidad y permanencia**, y le encarga **arbitrar y moderar** el funcionamiento regular de las instituciones. Ninguna de esas palabras significa gobernar: quien dirige la política es el Gobierno, y quien hace las leyes son las Cortes.":
    "**Article 56** defines the king as **head of State**, **symbol of its unity and permanence**, and charges him with **arbitrating and moderating** the regular working of the institutions. None of those words means governing: policy is led by the Government, and the laws are made by the Cortes.",
  // es-corona
  "La persona del rey es **inviolable** y **no está sujeta a responsabilidad**. Eso solo se sostiene por una razón: sus actos los firma siempre otro, y ese otro responde.":
    "The person of the king is **inviolable** and **not subject to responsibility**. That stands for one reason only: his acts are always signed by somebody else, and that somebody answers for them.",
  "El refrendo": "The countersignature",
  "El **artículo 64** establece que los actos del rey serán **refrendados**, es decir, firmados también por quien asume su responsabilidad política: el **presidente del Gobierno**, el ministro competente, o el **presidente del Congreso** cuando se trata de proponer y nombrar al presidente del Gobierno o de disolver las Cortes. Un acto del rey sin refrendo carece de validez.":
    "**Article 64** lays down that the king's acts shall be **countersigned**, that is, also signed by whoever takes political responsibility for them: the **prime minister**, the minister concerned, or the **president of the Congress** when it comes to proposing and appointing a prime minister or dissolving the Cortes. An act of the king without a countersignature has no validity.",
  "Es el mecanismo que hace compatibles dos cosas que parecen incompatibles: un jefe del Estado que no responde de nada, y un sistema en el que todo acto tiene un responsable.":
    "It is the mechanism that makes two apparently incompatible things fit together: a head of state who answers for nothing, and a system in which every act has somebody answerable for it.",
  "¿Qué significa que un acto del rey está refrendado?":
    "What does it mean that an act of the king is countersigned?",
  "Que ha sido aprobado por referéndum": "That it has been approved by referendum",
  "Que lo firma también quien asume su responsabilidad política":
    "That whoever takes political responsibility for it also signs it",
  "Que lo ha revisado el Tribunal Constitucional": "That the Constitutional Court has reviewed it",
  "Que se publica en el Boletín Oficial del Estado": "That it is published in the Official State Gazette",
  "El refrendo es la firma del presidente del Gobierno, del ministro competente o del presidente del Congreso. Sin ella el acto no vale, y es lo que permite que el rey sea irresponsable sin que nadie lo sea.":
    "The countersignature is the signature of the prime minister, of the minister concerned or of the president of the Congress. Without it the act is void, and it is what allows the king to bear no responsibility without anybody escaping it.",
  "Qué hace": "What he does",
  "Sancionar y promulgar": "Assent and promulgation",
  "Firma las leyes aprobadas por las Cortes en el plazo de quince días. No puede negarse: es un acto debido.":
    "He signs the laws passed by the Cortes within fifteen days. He cannot refuse: it is an act he is bound to perform.",
  "Proponer candidato": "Proposing a candidate",
  "Tras consultar a los grupos políticos, propone al Congreso un candidato a presidente del Gobierno.":
    "After consulting the political groups, he proposes a candidate for prime minister to the Congress.",
  "Convocar y disolver": "Summoning and dissolving",
  "Convoca y disuelve las Cortes y convoca elecciones, siempre en los términos previstos en la Constitución.":
    "He summons and dissolves the Cortes and calls elections, always on the terms the Constitution provides.",
  "Mando supremo": "Supreme command",
  "Tiene el mando supremo de las Fuerzas Armadas, que dirige en la práctica el Gobierno.":
    "He holds supreme command of the Armed Forces, which the Government directs in practice.",
  "Ejerce además el **derecho de gracia**, es decir, los **indultos** individuales, con arreglo a la ley — que **prohíbe los indultos generales** — y acredita a los embajadores. Al ser proclamado, presta juramento de guardar y hacer guardar la Constitución ante las Cortes reunidas.":
    "He also exercises the **right of mercy**, that is, individual **pardons**, in accordance with the law — which **prohibits general pardons** — and accredits ambassadors. On being proclaimed he swears before the assembled Cortes to keep and to have kept the Constitution.",
  "La sucesión": "The succession",
  "La corona se hereda en los sucesores de **Juan Carlos I**, según el orden del **artículo 57**: primogenitura y representación, prefiriendo la línea anterior a la posterior, el grado más próximo al más remoto y, **en el mismo grado, el varón a la mujer**. Esa última regla es la única preferencia por sexo que queda en el texto constitucional, y para cambiarla haría falta el procedimiento agravado del artículo 168.":
    "The crown is inherited by the successors of **Juan Carlos I**, in the order of **article 57**: primogeniture and representation, preferring the earlier line to the later, the nearer degree to the more remote and, **within the same degree, the male to the female**. That last rule is the only preference by sex left in the constitutional text, and changing it would need the aggravated procedure of article 168.",
  "El heredero lleva el título de **Príncipe o Princesa de Asturias**. **Juan Carlos I** fue proclamado rey en **1975** y **abdicó en 2014**; **Felipe VI** fue proclamado el **19 de junio de 2014** ante las Cortes.":
    "The heir bears the title of **Prince or Princess of Asturias**. **Juan Carlos I** was proclaimed king in **1975** and **abdicated in 2014**; **Felipe VI** was proclaimed before the Cortes on **19 June 2014**.",
  "¿Qué título recibe el heredero o la heredera de la Corona?":
    "What title does the heir to the Crown receive?",
  "Duque de Borgoña": "Duke of Burgundy",
  "Príncipe o Princesa de Asturias": "Prince or Princess of Asturias",
  "Infante de España": "Infante of Spain",
  "Delfín de la Corona": "Dauphin of the Crown",
  "Príncipe o Princesa de Asturias, junto con otros títulos históricos. Infante o infanta es el tratamiento de los demás hijos del rey.":
    "Prince or Princess of Asturias, along with other historic titles. Infante or infanta is the style of the king's other children.",
  "¿Puede el rey negarse a firmar una ley aprobada por las Cortes?":
    "Can the king refuse to sign a law passed by the Cortes?",
  "Sí, tiene derecho de veto": "Yes, he has a right of veto",
  "No: la sanción es un acto debido": "No: assent is an act he is bound to perform",
  "Solo si la ley afecta a la Corona": "Only if the law affects the Crown",
  "Solo con el acuerdo del Tribunal Constitucional": "Only with the agreement of the Constitutional Court",
  "Sanciona y promulga en el plazo de quince días, sin margen para negarse. La monarquía parlamentaria española no conserva ningún veto real.":
    "He gives assent and promulgates within fifteen days, with no room to refuse. The Spanish parliamentary monarchy keeps no royal veto at all.",
  "La preferencia del **varón sobre la mujer** en el mismo grado sigue en el artículo 57 y solo podría suprimirse por el procedimiento agravado del artículo 168, el que obliga a disolver las Cortes y convocar un referéndum. No es una omisión: es la parte más difícil de reformar.":
    "The preference of **male over female** within the same degree is still in article 57 and could be removed only by the aggravated procedure of article 168, the one that requires dissolving the Cortes and calling a referendum. It is not an oversight: it is the hardest part to reform.",
  // es-cortes
  "Las Cortes Generales": "The Cortes Generales",
  "Por qué importa: España tiene dos cámaras, pero no pesan lo mismo. Saber cuál manda cuando discrepan explica buena parte de cómo se aprueban aquí las leyes.":
    "Why this matters: Spain has two chambers, but they do not weigh the same. Knowing which one prevails when they disagree explains a good deal of how laws are passed here.",
  "Dos cámaras desiguales": "Two unequal chambers",
  "Las Cortes Generales, dice el **artículo 66**, representan al pueblo español y están formadas por el **Congreso de los Diputados** y el **Senado**. Ejercen la potestad legislativa, aprueban los **presupuestos** y **controlan** la acción del Gobierno.":
    "The Cortes Generales, says **article 66**, represent the Spanish people and are made up of the **Congress of Deputies** and the **Senate**. They exercise legislative power, approve the **budget** and **scrutinise** the Government's action.",
  "El bicameralismo español es **imperfecto**, y la palabra es técnica, no despectiva: las dos cámaras no tienen el mismo peso. El **Congreso predomina**. Es el que inviste al presidente del Gobierno, el que puede derribarlo y el que tiene la última palabra cuando las dos discrepan sobre una ley.":
    "Spanish bicameralism is **imperfect**, and the word is technical, not dismissive: the two chambers do not carry the same weight. The **Congress prevails**. It is the one that invests the prime minister, the one that can bring them down and the one with the last word when the two disagree over a law.",
  "Congreso": "The Congress",
  "350 diputados. La Constitución fija una horquilla de entre 300 y 400, y la ley electoral ha elegido siempre el número redondo.":
    "350 deputies. The Constitution fixes a range between 300 and 400, and the electoral law has always chosen the round number.",
  "Senado": "The Senate",
  "Cámara de representación territorial: cuatro senadores por provincia elegidos directamente, más los que designan los parlamentos autonómicos.":
    "The chamber of territorial representation: four senators per province elected directly, plus those designated by the regional parliaments.",
  "Cuatro años": "Four years",
  "Es la duración de la legislatura, salvo disolución anticipada, que en España ha sido frecuente.":
    "That is the length of a legislature, unless it is dissolved early, which in Spain has been frequent.",
  "Diputación Permanente": "The Standing Deputation",
  "Cuando las cámaras están disueltas o fuera de periodo de sesiones, un grupo reducido vela por sus poderes.":
    "When the chambers are dissolved or out of session, a small group looks after their powers.",
  "¿Cuántos diputados tiene el Congreso?": "How many deputies does the Congress have?",
  "Doscientos": "Two hundred",
  "Trescientos": "Three hundred",
  "Trescientos cincuenta": "Three hundred and fifty",
  "Cuatrocientos": "Four hundred",
  "Trescientos cincuenta. La Constitución permite entre trescientos y cuatrocientos, y la ley electoral ha optado siempre por la cifra intermedia.":
    "Three hundred and fifty. The Constitution allows between three hundred and four hundred, and the electoral law has always chosen the middle figure.",
  "Cómo se elige el Congreso": "How the Congress is elected",
  "La circunscripción es la **provincia**, y Ceuta y Melilla eligen un diputado cada una. Cada provincia tiene un **mínimo inicial de dos escaños** y el resto se reparte en proporción a la población, lo que da a las provincias pequeñas más peso relativo del que les correspondería.":
    "The constituency is the **province**, and Ceuta and Melilla elect one deputy each. Every province has an **initial minimum of two seats** and the rest are shared out in proportion to population, which gives the small provinces more relative weight than they would otherwise have.",
  "El reparto dentro de cada circunscripción se hace por el **sistema D'Hondt**, con **listas cerradas y bloqueadas**: se vota una candidatura entera, en el orden que fijó el partido, sin poder alterarlo. Quedan fuera las listas que no alcancen el **tres por ciento** de los votos válidos en su circunscripción.":
    "The share-out within each constituency uses the **D'Hondt system**, with **closed and blocked lists**: you vote for a whole list, in the order the party set, with no way to change it. Lists that do not reach **three per cent** of the valid votes in their constituency are left out.",
  "El Senado y sus límites": "The Senate and its limits",
  "En el Senado, cada provincia peninsular elige **cuatro senadores** por voto directo; las islas y las ciudades autónomas siguen reglas propias. A ellos se suman los designados por las **comunidades autónomas**: uno por comunidad y otro más por cada millón de habitantes.":
    "In the Senate each mainland province elects **four senators** by direct vote; the islands and the autonomous cities follow rules of their own. To them are added those designated by the **autonomous communities**: one per community and one more for each million inhabitants.",
  "Cuando el Senado **veta** un proyecto o lo enmienda, el Congreso puede **levantar el veto** por **mayoría absoluta**, o por mayoría simple pasados **dos meses**. De ahí que al Senado se le llame a menudo cámara de segunda lectura, y que su reforma sea una discusión abierta desde hace décadas.":
    "When the Senate **vetoes** a bill or amends it, the Congress can **lift the veto** by an **absolute majority**, or by a simple majority after **two months**. Hence the Senate is often called a chamber of second reading, and its reform has been an open argument for decades.",
  "¿Qué ocurre cuando el Senado veta un proyecto de ley?": "What happens when the Senate vetoes a bill?",
  "El proyecto decae definitivamente": "The bill lapses for good",
  "El Congreso puede levantar el veto por mayoría absoluta":
    "The Congress can lift the veto by an absolute majority",
  "Se convoca un referéndum": "A referendum is called",
  "Decide el Tribunal Constitucional": "The Constitutional Court decides",
  "El Congreso levanta el veto por mayoría absoluta, o por mayoría simple transcurridos dos meses. Es la razón por la que el bicameralismo español se llama imperfecto.":
    "The Congress lifts the veto by an absolute majority, or by a simple majority after two months. That is why Spanish bicameralism is called imperfect.",
  "¿Qué cámara se define como de representación territorial?":
    "Which chamber is defined as one of territorial representation?",
  "El Congreso de los Diputados": "The Congress of Deputies",
  "El Senado": "The Senate",
  "Las dos por igual": "Both equally",
  "Ninguna: la representación es siempre del conjunto del pueblo":
    "Neither: representation is always of the people as a whole",
  "El artículo 69 define así al Senado. En la práctica su composición mezcla elección provincial y designación autonómica, y esa doble vía es uno de los motivos de que se discuta su reforma.":
    "Article 69 defines the Senate that way. In practice its composition mixes provincial election with regional designation, and that double route is one of the reasons its reform is argued over.",
  "El sistema D'Hondt no es lo que hace que las provincias pequeñas pesen más: eso lo produce el **mínimo de dos escaños por provincia**. Son dos efectos distintos que suelen atribuirse al mismo culpable.":
    "The D'Hondt system is not what makes small provinces weigh more: that comes from the **minimum of two seats per province**. Two different effects usually blamed on the same culprit.",
  // es-gobierno
  "El Gobierno": "The Government",
  "Por qué importa: en España un gobierno no cae si pierde una votación. Solo cae si hay quien lo sustituya, y esa regla — copiada de Alemania y perfeccionada aquí — explica la estabilidad de los últimos cuarenta años.":
    "Why this matters: in Spain a government does not fall if it loses a vote. It falls only if there is somebody to replace it, and that rule — borrowed from Germany and refined here — explains the stability of the last forty years.",
  "Qué hace y quién lo forma": "What it does and who makes it up",
  "El **artículo 97** encarga al Gobierno dirigir la **política interior y exterior**, la **Administración civil y militar** y la **defensa del Estado**, ejercer la **función ejecutiva** y la **potestad reglamentaria**. Lo componen el **presidente**, los **vicepresidentes** en su caso y los **ministros**, que reunidos forman el **Consejo de Ministros**. Su sede es el **Palacio de la Moncloa**.":
    "**Article 97** charges the Government with directing **domestic and foreign policy**, the **civil and military administration** and the **defence of the State**, and with exercising the **executive function** and the **regulatory power**. It is made up of the **prime minister**, the **deputy prime ministers** where there are any, and the **ministers**, who together form the **Council of Ministers**. Its seat is the **Palacio de la Moncloa**.",
  "La investidura": "The investiture",
  "El **artículo 99** describe el camino. Tras unas elecciones, el rey **consulta** a los representantes designados por los grupos políticos y, a través del presidente del Congreso, **propone un candidato**. El candidato expone su programa ante la cámara y pide su confianza.":
    "**Article 99** describes the path. After an election the king **consults** the representatives designated by the political groups and, through the president of the Congress, **proposes a candidate**. The candidate sets out a programme before the chamber and asks for its confidence.",
  "En la **primera votación** necesita la **mayoría absoluta**. Si no la obtiene, cuarenta y ocho horas después basta la **mayoría simple**, es decir, más síes que noes. Si transcurren **dos meses** desde la primera votación sin que nadie sea investido, el rey **disuelve las Cortes** y se convocan nuevas elecciones.":
    "In the **first vote** an **absolute majority** is needed. If it is not obtained, forty-eight hours later a **simple majority** is enough, that is, more yesses than noes. If **two months** pass from the first vote without anybody being invested, the king **dissolves the Cortes** and a new election is called.",
  "¿Qué mayoría se necesita en la primera votación de investidura?":
    "What majority is needed in the first investiture vote?",
  "Mayoría simple": "A simple majority",
  "Mayoría absoluta": "An absolute majority",
  "Tres quintos": "Three fifths",
  "Dos tercios": "Two thirds",
  "Mayoría absoluta en la primera votación. En la segunda, cuarenta y ocho horas después, basta con que haya más votos a favor que en contra.":
    "An absolute majority in the first vote. In the second, forty-eight hours later, it is enough for there to be more votes in favour than against.",
  "La censura constructiva": "The constructive vote of no confidence",
  "La **moción de censura** española es **constructiva**: para derribar a un gobierno no basta con reunir votos en contra, hay que **presentar a la vez un candidato alternativo**. Si la moción prospera, ese candidato queda **automáticamente investido** presidente.":
    "The Spanish **motion of censure** is **constructive**: to bring a government down it is not enough to gather votes against, an **alternative candidate must be put forward at the same time**. If the motion succeeds, that candidate is **automatically invested** as prime minister.",
  "La firma al menos la **décima parte** de los diputados y se vota transcurridos **cinco días**, durante los cuales pueden presentarse mociones alternativas. Exige **mayoría absoluta**. En más de cuarenta años solo ha prosperado **una vez**, en **2018**.":
    "It is signed by at least a **tenth** of the deputies and voted on after **five days**, during which alternative motions may be tabled. It requires an **absolute majority**. In more than forty years it has succeeded only **once**, in **2018**.",
  "La figura inversa es la **cuestión de confianza**, que plantea el propio presidente sobre su programa o una declaración de política general: se gana con **mayoría simple**, y perderla obliga a dimitir.":
    "The reverse figure is the **question of confidence**, which the prime minister puts on their own programme or on a general policy statement: it is won by a **simple majority**, and losing it means resigning.",
  "¿Qué distingue a la moción de censura española?": "What sets the Spanish motion of censure apart?",
  "Que solo puede presentarla la oposición": "That only the opposition may table it",
  "Que es constructiva: debe incluir un candidato alternativo":
    "That it is constructive: it must include an alternative candidate",
  "Que exige una mayoría de dos tercios": "That it requires a two-thirds majority",
  "Que la convoca el rey": "That the king calls it",
  "Sin candidato alternativo no hay moción. Es la razón de que solo haya prosperado una vez desde 1978: es fácil reunir votos contra alguien y difícil reunirlos a favor de un sustituto concreto.":
    "Without an alternative candidate there is no motion. That is why it has succeeded only once since 1978: it is easy to gather votes against somebody and hard to gather them for one particular replacement.",
  "Disolver y seguir": "Dissolving, and carrying on",
  "El presidente puede **disolver** las Cortes y convocar elecciones anticipadas, con dos límites: no cabe hacerlo mientras esté en trámite una moción de censura, ni antes de que haya transcurrido **un año** desde la disolución anterior.":
    "The prime minister may **dissolve** the Cortes and call an early election, with two limits: it cannot be done while a motion of censure is under way, nor before **a year** has passed since the previous dissolution.",
  "Cuando el gobierno cesa, sigue **en funciones** hasta que tome posesión el siguiente. Un gobierno en funciones despacha lo ordinario y no puede, entre otras cosas, presentar proyectos de ley ni aprobar los presupuestos: mantiene el país en marcha, pero no lo dirige.":
    "When a government leaves office it continues **in a caretaker capacity** until the next one takes over. A caretaker government handles ordinary business and cannot, among other things, introduce bills or pass a budget: it keeps the country running, but it does not lead it.",
  "¿Qué puede hacer un gobierno en funciones?": "What can a caretaker government do?",
  "Todo lo que hacía antes de cesar": "Everything it did before leaving office",
  "Despachar los asuntos ordinarios, sin presentar proyectos de ley ni presupuestos":
    "Handle ordinary business, without introducing bills or a budget",
  "Nada: la Administración queda paralizada": "Nothing: the administration is paralysed",
  "Solo convocar elecciones": "Only call an election",
  "Se limita al despacho ordinario para que el país siga funcionando, pero no puede iniciar la acción legislativa ni aprobar presupuestos. España ha tenido periodos largos en esa situación.":
    "It is limited to ordinary business so that the country keeps working, but it cannot start legislation or pass a budget. Spain has had long periods in that situation.",
  "**Jefe del Estado** y **presidente del Gobierno** son dos cargos distintos y dos edificios distintos: el rey en la **Zarzuela**, el presidente en la **Moncloa**. En España el jefe del Estado no preside el Gobierno.":
    "**Head of State** and **prime minister** are two different offices and two different buildings: the king at the **Zarzuela**, the prime minister at the **Moncloa**. In Spain the head of state does not preside over the Government.",
  // es-justicia
  "El poder judicial y el Tribunal Constitucional": "The judiciary and the Constitutional Court",
  "Por qué importa: hay dos tribunales en la cumbre y no son el mismo. Uno cierra los pleitos; el otro juzga las leyes. Confundirlos es el error más común sobre la justicia española.":
    "Why this matters: there are two courts at the top and they are not the same. One closes cases; the other judges laws. Confusing them is the commonest error about Spanish justice.",
  "Jueces sometidos solo a la ley": "Judges subject only to the law",
  // es-justicia
  "El **artículo 117** dice que la justicia **emana del pueblo** y se administra **en nombre del rey** por jueces y magistrados **independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley**. Se entra en la carrera judicial por **oposición**, no por nombramiento político.":
    "**Article 117** says that justice **emanates from the people** and is administered **in the king's name** by judges and magistrates who are **independent, irremovable, accountable and subject only to the rule of law**. You enter the judicial career by **competitive examination**, not by political appointment.",
  "El **Consejo General del Poder Judicial** es su órgano de gobierno: decide nombramientos, ascensos, inspección y régimen disciplinario. Lo forman **veinte vocales** más su **presidente**, que lo es también del Tribunal Supremo, con un mandato de **cinco años**.":
    "The **General Council of the Judiciary** is its governing body: it decides appointments, promotions, inspection and discipline. It is made up of **twenty members** plus its **president**, who is also president of the Supreme Court, with a term of **five years**.",
  "La escalera de los tribunales": "The ladder of the courts",
  "Juzgados": "Courts of first instance",
  "La primera instancia, repartida por partidos judiciales. Aquí se ven los hechos.":
    "The first instance, spread across judicial districts. This is where the facts are examined.",
  "Audiencias Provinciales": "Provincial courts",
  "Resuelven los recursos de apelación en cada provincia.": "They decide appeals in each province.",
  "Tribunales Superiores de Justicia": "High Courts of Justice",
  "Uno por comunidad autónoma. Culminan la organización judicial en su territorio, sin ser una instancia superior al Supremo.":
    "One per autonomous community. They top the judicial organisation in their territory, without being an instance above the Supreme Court.",
  "Tribunal Supremo": "The Supreme Court",
  "El órgano jurisdiccional superior en todos los órdenes, salvo en materia de garantías constitucionales.":
    "The highest judicial body in every order, except in matters of constitutional guarantees.",
  "La jurisdicción se divide en cuatro **órdenes**: **civil**, **penal**, **contencioso-administrativo** — para pleitos con la Administración — y **social**, para los laborales. Existe además la **Audiencia Nacional**, con competencia en toda España sobre delitos concretos como el terrorismo o los económicos de gran alcance.":
    "Jurisdiction is divided into four **orders**: **civil**, **criminal**, **administrative** — for disputes with the administration — and **social**, for employment cases. There is also the **Audiencia Nacional**, with jurisdiction across the whole of Spain over particular offences such as terrorism or large-scale economic crime.",
  "El **Ministerio Fiscal** promueve la acción de la justicia en defensa de la legalidad y del interés público. Su jefe, el **fiscal general del Estado**, lo nombra el rey a propuesta del Gobierno, oído el Consejo General del Poder Judicial.":
    "The **Public Prosecution Service** promotes the action of justice in defence of legality and the public interest. Its head, the **State Attorney General**, is appointed by the king on the Government's proposal, after hearing the General Council of the Judiciary.",
  "¿Cuál es el órgano de gobierno del poder judicial?": "Which body governs the judiciary?",
  "El Tribunal Supremo": "The Supreme Court",
  "El Consejo General del Poder Judicial": "The General Council of the Judiciary",
  "El Ministerio de Justicia": "The Ministry of Justice",
  "El Tribunal Constitucional": "The Constitutional Court",
  "El CGPJ decide nombramientos, ascensos e inspección. El Tribunal Supremo juzga; el Ministerio de Justicia administra medios materiales, y no manda sobre los jueces.":
    "The CGPJ decides appointments, promotions and inspection. The Supreme Court judges; the Ministry of Justice administers material resources, and does not command judges.",
  "No forma parte del poder judicial: es un órgano **aparte**, regulado en su propio título. Tiene **doce magistrados**, nombrados por el rey a propuesta de cuatro órganos distintos, de modo que ninguno pueda componerlo por su cuenta.":
    "It is not part of the judiciary: it is a **separate** body, governed by a title of its own. It has **twelve magistrates**, appointed by the king on the proposal of four different bodies, so that none can make it up on its own.",
  "Cuatro del Congreso": "Four from the Congress",
  "Elegidos por mayoría de tres quintos de la cámara.": "Chosen by a three-fifths majority of the chamber.",
  "Cuatro del Senado": "Four from the Senate",
  "También por tres quintos, entre candidatos propuestos por los parlamentos autonómicos.":
    "Also by three fifths, from candidates proposed by the regional parliaments.",
  "Dos del Gobierno": "Two from the Government",
  "Es la vía más directa del ejecutivo al tribunal.":
    "It is the executive's most direct route to the court.",
  "Dos del CGPJ": "Two from the CGPJ",
  "La aportación del gobierno de los jueces.": "The contribution of the judges' own governing body.",
  "El mandato es de **nueve años** y el tribunal se renueva **por terceras partes cada tres**, de manera que nunca cambia entero de una vez. Sus competencias principales son el **recurso** y la **cuestión de inconstitucionalidad** contra las leyes, el **recurso de amparo** en defensa de los derechos fundamentales y los **conflictos de competencia** entre el Estado y las comunidades autónomas.":
    "The term is **nine years** and the court is renewed **by thirds every three**, so that it never changes entirely at once. Its main powers are the **appeal** and the **question of unconstitutionality** against laws, the **amparo appeal** in defence of fundamental rights and **conflicts of competence** between the State and the autonomous communities.",
  "¿Cuántos magistrados tiene el Tribunal Constitucional?":
    "How many magistrates does the Constitutional Court have?",
  "Nueve": "Nine",
  "Veinte": "Twenty",
  "Doce, nombrados a propuesta de cuatro órganos distintos: cuatro del Congreso, cuatro del Senado, dos del Gobierno y dos del CGPJ. Veinte son los vocales del CGPJ.":
    "Twelve, appointed on the proposal of four different bodies: four from the Congress, four from the Senate, two from the Government and two from the CGPJ. Twenty is the number of members of the CGPJ.",
  "¿Forma el Tribunal Constitucional parte del poder judicial?":
    "Is the Constitutional Court part of the judiciary?",
  "Sí, es su órgano superior": "Yes, it is its highest body",
  "No: es un órgano aparte, regulado en su propio título":
    "No: it is a separate body, governed by a title of its own",
  "Sí, es una sala del Tribunal Supremo": "Yes, it is a chamber of the Supreme Court",
  "Solo cuando resuelve recursos de amparo": "Only when it decides amparo appeals",
  "Está fuera del poder judicial y por encima de él en su materia. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria; el Constitucional juzga las leyes y los derechos fundamentales.":
    "It is outside the judiciary and above it in its own field. The Supreme Court is the top of the ordinary jurisdiction; the Constitutional Court judges laws and fundamental rights.",
  "Los **Tribunales Superiores de Justicia** culminan la organización judicial **en su comunidad**, pero no están por encima del Supremo. Autonómico no significa aquí una instancia más alta, sino un ámbito distinto.":
    "The **High Courts of Justice** top the judicial organisation **in their community**, but they are not above the Supreme Court. Regional here does not mean a higher instance, but a different sphere.",
  // es-participacion
  "Elecciones y participación ciudadana": "Elections and citizen participation",
  "Por qué importa: en España se vota en cuatro elecciones distintas, y en una de ellas no se elige a quien acaba mandando. Ese detalle sorprende a mucha gente el día que estrena el censo.":
    "Why this matters: in Spain you vote in four different elections, and in one of them you do not choose the person who ends up in charge. That detail surprises a lot of people the day they first appear on the roll.",
  "Cuatro urnas": "Four ballot boxes",
  "El sufragio es **universal, libre, igual, directo y secreto**, y se ejerce desde los **dieciocho años**. Se vota en cuatro convocatorias distintas, que no coinciden en el tiempo ni tienen las mismas reglas.":
    "Suffrage is **universal, free, equal, direct and secret**, and is exercised from the age of **eighteen**. There are four separate polls, which do not fall at the same time and do not have the same rules.",
  "Generales": "General",
  "Para el Congreso y el Senado, cada cuatro años salvo disolución anticipada.":
    "For the Congress and the Senate, every four years unless there is an early dissolution.",
  "Autonómicas": "Regional",
  "Para el parlamento de cada comunidad. Muchas coinciden en el mismo día, pero no todas.":
    "For the parliament of each community. Many fall on the same day, but not all.",
  "Para el pleno del ayuntamiento. Se celebran a la vez en toda España.":
    "For the full council of the town hall. They are held on the same day across the whole of Spain.",
  "Europeas": "European",
  "Para el Parlamento Europeo, con España como circunscripción única.":
    "For the European Parliament, with Spain as a single constituency.",
  "En las **municipales** se eligen **concejales**, no alcaldes. Es el pleno del ayuntamiento, ya constituido, el que **elige al alcalde** entre los cabezas de lista. Si ninguno logra la mayoría absoluta de los concejales, resulta elegido el que encabezó la lista más votada.":
    "In the **local** elections you choose **councillors**, not mayors. It is the full council of the town hall, once constituted, that **elects the mayor** from among the heads of the lists. If none of them wins an absolute majority of the councillors, the one who headed the most-voted list is elected.",
  "¿Quién elige al alcalde en España?": "Who elects the mayor in Spain?",
  "Los vecinos, con voto directo al candidato": "The residents, voting directly for the candidate",
  "Los concejales, en el pleno de constitución": "The councillors, at the constituting session",
  "El presidente de la comunidad autónoma": "The president of the autonomous community",
  "El delegado del Gobierno": "The Government's delegate",
  "En las municipales se vota una lista de concejales y son ellos quienes eligen alcalde. Si nadie reúne mayoría absoluta, lo es el cabeza de la lista más votada.":
    "In local elections you vote for a list of councillors, and it is they who elect the mayor. If nobody has an absolute majority, it is the head of the most-voted list.",
  "Partidos y sindicatos": "Parties and trade unions",
  "El **artículo 6** define a los **partidos políticos** como expresión del pluralismo político e instrumento fundamental de la participación, y exige que su **estructura interna y su funcionamiento sean democráticos**. El **artículo 7** dice lo mismo de los **sindicatos** y de las **asociaciones empresariales**.":
    "**Article 6** defines **political parties** as the expression of political pluralism and a fundamental instrument of participation, and requires their **internal structure and functioning to be democratic**. **Article 7** says the same of **trade unions** and of **employers' associations**.",
  "Los dos sindicatos mayoritarios son **Comisiones Obreras** y la **Unión General de Trabajadores**, a los que se suman otros de ámbito autonómico o sectorial. La afiliación es baja en comparación europea, pero su papel es grande, porque los convenios que negocian se aplican a todo el sector y no solo a los afiliados.":
    "The two largest unions are **Comisiones Obreras** and the **Unión General de Trabajadores**, joined by others of regional or sectoral scope. Membership is low by European comparison, but their role is large, because the agreements they negotiate apply to a whole sector and not only to members.",
  "Participar sin ser elegido": "Taking part without being elected",
  "Iniciativa legislativa popular": "Popular legislative initiative",
  "Quinientas mil firmas acreditadas permiten llevar una proposición de ley al Congreso. Quedan fuera materias como los tributos o el derecho de gracia.":
    "Five hundred thousand certified signatures allow a bill to be taken to the Congress. Matters such as taxes or the right of mercy are excluded.",
  "Derecho de petición": "The right of petition",
  "El artículo 29 permite dirigirse por escrito a los poderes públicos. Es antiguo, sencillo y poco usado.":
    "Article 29 allows anyone to write to the public authorities. It is old, simple and little used.",
  "Referéndum consultivo": "Consultative referendum",
  "El artículo 92 lo prevé para decisiones de especial trascendencia. Lo convoca el rey, a propuesta del presidente autorizada por el Congreso.":
    "Article 92 provides for one on decisions of special importance. The king calls it, on the prime minister's proposal authorised by the Congress.",
  "El jurado": "The jury",
  "El artículo 125 abre la participación en la Administración de Justicia. El tribunal del jurado juzga determinados delitos.":
    "Article 125 opens the way to taking part in the administration of justice. A jury court tries certain offences.",
  "Dos instituciones vigilan por cuenta de las Cortes. El **Defensor del Pueblo** es su **alto comisionado** para la defensa de los derechos del título I: supervisa la actividad de la Administración y puede interponer recursos ante el Tribunal Constitucional, aunque sus resoluciones no son ejecutivas. El **Tribunal de Cuentas** fiscaliza las cuentas y la gestión económica del Estado y del sector público.":
    "Two institutions keep watch on the Cortes' behalf. The **Ombudsman** is their **high commissioner** for the defence of the rights in title I: they supervise the administration's activity and can bring appeals before the Constitutional Court, though their rulings are not enforceable. The **Court of Auditors** audits the accounts and the financial management of the State and the public sector.",
  "¿Cuántas firmas se necesitan para una iniciativa legislativa popular?":
    "How many signatures are needed for a popular legislative initiative?",
  "Cincuenta mil": "Fifty thousand",
  "Cien mil": "One hundred thousand",
  "Quinientas mil": "Five hundred thousand",
  "Un millón": "One million",
  "Quinientas mil firmas acreditadas. Además hay materias excluidas: los tributos, lo internacional, el derecho de gracia y las leyes orgánicas quedan fuera de esta vía.":
    "Five hundred thousand certified signatures. There are also excluded matters: taxes, international affairs, the right of mercy and organic laws are outside this route.",
  "¿Qué es el Defensor del Pueblo?": "What is the Ombudsman?",
  "Un tribunal que anula actos administrativos": "A court that annuls administrative acts",
  "El alto comisionado de las Cortes para la defensa de los derechos fundamentales":
    "The Cortes' high commissioner for the defence of fundamental rights",
  "Un ministerio del Gobierno": "A government ministry",
  "El fiscal jefe del Tribunal Supremo": "The chief prosecutor of the Supreme Court",
  "Depende de las Cortes, no del Gobierno, y supervisa a la Administración. Sus resoluciones no obligan, pero puede recurrir leyes ante el Tribunal Constitucional.":
    "The office answers to the Cortes, not to the Government, and supervises the administration. Its rulings do not bind, but it can challenge laws before the Constitutional Court.",
  "En las **autonómicas** tampoco se vota directamente al presidente de la comunidad: se elige el parlamento, y este lo inviste. La única elección directa de una persona en España es la del **Senado**.":
    "In the **regional** elections you do not vote directly for the community's president either: you elect the parliament, and it invests them. The only direct election of a person in Spain is the one to the **Senate**.",
  // chapter
  "Historia de España": "The history of Spain",
  // es-hispania-al-andalus
  "De Hispania a al-Ándalus y los reinos cristianos":
    "From Hispania to al-Andalus and the Christian kingdoms",
  "Por qué se empieza aquí: durante casi ocho siglos la Península no fue un país sino varios, y dos mundos convivieron en ella. Esa larga frontera interior explica más de España que cualquier fecha suelta.":
    "Why we start here: for almost eight centuries the peninsula was not one country but several, and two worlds lived side by side in it. That long inner frontier explains more about Spain than any single date.",
  "Antes de Roma": "Before Rome",
  "La Península estuvo poblada por **íberos** en el este y el sur y por pueblos **celtas** en el interior y el noroeste, con **Tartessos** como la civilización más antigua de la que hablan las fuentes. Por la costa llegaron **fenicios**, **griegos** y **cartagineses** a comerciar: **Cádiz**, fundada por fenicios, se considera la ciudad más antigua de Europa occidental.":
    "The peninsula was settled by **Iberians** in the east and south and by **Celtic** peoples in the interior and the north-west, with **Tartessos** as the oldest civilisation the sources speak of. **Phoenicians**, **Greeks** and **Carthaginians** came along the coast to trade: **Cádiz**, founded by the Phoenicians, is held to be the oldest city in western Europe.",
  "Hispania": "Hispania",
  "Los romanos desembarcaron en **Ampurias en el 218 antes de Cristo**, durante la segunda guerra púnica, y tardaron **dos siglos** en dominar el territorio: la resistencia del norte no cedió hasta las **guerras cántabras**, hacia el 19 antes de Cristo.":
    "The Romans landed at **Ampurias in 218 BC**, during the second Punic war, and took **two centuries** to master the territory: the resistance of the north did not give way until the **Cantabrian wars**, around 19 BC.",
  "De Roma quedan la **lengua** —del latín salen el castellano, el gallego y el catalán—, el **derecho**, las **ciudades** y las obras que aún se usan: el **acueducto de Segovia**, el teatro de **Mérida**, las murallas de Lugo. Hispania dio además al imperio tres emperadores —**Trajano**, **Adriano** y **Teodosio**— y al pensamiento a **Séneca**.":
    "From Rome remain the **language** — Castilian, Galician and Catalan all come from Latin — the **law**, the **cities** and works still in use: the **aqueduct of Segovia**, the theatre at **Mérida**, the walls of Lugo. Hispania also gave the empire three emperors — **Trajan**, **Hadrian** and **Theodosius** — and gave thought **Seneca**.",
  "¿Qué emperadores romanos nacieron en Hispania?": "Which Roman emperors were born in Hispania?",
  "Augusto y Nerón": "Augustus and Nero",
  "Trajano y Adriano": "Trajan and Hadrian",
  "César y Calígula": "Caesar and Caligula",
  "Constantino y Justiniano": "Constantine and Justinian",
  "Trajano y Adriano nacieron en Itálica, cerca de la actual Sevilla, y Teodosio en la actual Segovia. Hispania no fue solo una provincia: llegó a dar emperadores al imperio.":
    "Trajan and Hadrian were born at Italica, near present-day Seville, and Theodosius in what is now Segovia. Hispania was not merely a province: it came to give the empire emperors.",
  "Los visigodos": "The Visigoths",
  "Con el imperio en descomposición entraron **suevos, vándalos y alanos** en el **409**, y tras ellos los **visigodos**, que acabaron formando un reino con capital en **Toledo**. Su momento decisivo llegó en el **589**, cuando el rey **Recaredo** abandonó el arrianismo y se convirtió al **catolicismo** en el III Concilio de Toledo: religión y monarquía quedaron unidas, y así seguirían durante siglos.":
    "With the empire falling apart, **Suebi, Vandals and Alans** came in in **409**, and after them the **Visigoths**, who ended up forming a kingdom with its capital at **Toledo**. Their decisive moment came in **589**, when king **Reccared** abandoned Arianism and converted to **Catholicism** at the Third Council of Toledo: religion and monarchy were bound together, and would stay so for centuries.",
  "711 y al-Ándalus": "711 and al-Andalus",
  "En el **711** un ejército musulmán cruzó el Estrecho y derrotó al rey visigodo Rodrigo en la batalla de **Guadalete**. En pocos años dominó casi toda la Península, a la que llamó **al-Ándalus**.":
    "In **711** a Muslim army crossed the Strait and defeated the Visigothic king Roderic at the battle of **Guadalete**. Within a few years it controlled almost the whole peninsula, which it called **al-Andalus**.",
  "El momento de mayor esplendor fue el **Califato de Córdoba**, proclamado por **Abderramán III** en el **929**. Córdoba llegó a ser la ciudad más poblada de Europa occidental, con bibliotecas, baños y una mezquita que aún se levanta. En el **1031** el califato se deshizo en los **reinos de taifas**, y la Península se fragmentó todavía más.":
    "The height of its splendour was the **Caliphate of Córdoba**, proclaimed by **Abd al-Rahman III** in **929**. Córdoba became the most populous city in western Europe, with libraries, baths and a mosque that still stands. In **1031** the caliphate broke up into the **taifa kingdoms**, and the peninsula fragmented further still.",
  "La Mezquita de Córdoba": "The Mosque of Córdoba",
  "Ampliada durante dos siglos y convertida en catedral tras la conquista. El bosque de columnas sigue en pie.":
    "Extended over two centuries and turned into a cathedral after the conquest. The forest of columns is still standing.",
  "La Alhambra": "The Alhambra",
  "Palacio y fortaleza del reino nazarí de Granada, el último de al-Ándalus, construido sobre todo en el siglo XIV.":
    "Palace and fortress of the Nasrid kingdom of Granada, the last of al-Andalus, built mostly in the fourteenth century.",
  "La Escuela de Toledo": "The School of Toledo",
  "Traductores cristianos, musulmanes y judíos vertieron al latín obras griegas y árabes que Europa había perdido.":
    "Christian, Muslim and Jewish translators put into Latin Greek and Arabic works that Europe had lost.",
  // es-hispania-al-andalus
  "El Camino de Santiago": "The Camino de Santiago",
  "Desde el siglo IX peregrinos de toda Europa cruzan el norte peninsular. Sigue haciéndose hoy.":
    "From the ninth century pilgrims from all over Europe have crossed the north of the peninsula. It is still walked today.",
  "¿En qué año cruzaron el Estrecho los ejércitos musulmanes?":
    "In what year did the Muslim armies cross the Strait?",
  "En el 409": "In 409",
  "En el 589": "In 589",
  "En el 711": "In 711",
  "En el 1031": "In 1031",
  "El 711, con la derrota del rey visigodo Rodrigo en Guadalete. El 589 es la conversión de Recaredo y el 1031 el fin del Califato de Córdoba.":
    "711, with the defeat of the Visigothic king Roderic at Guadalete. 589 is Reccared's conversion and 1031 the end of the Caliphate of Córdoba.",
  "Los reinos del norte": "The northern kingdoms",
  "En la franja cantábrica se formó el reino de **Asturias**, cuyo origen la tradición sitúa en **Covadonga**, y de él salieron **León** y **Castilla**. Al este surgieron **Navarra**, **Aragón** y los **condados catalanes**, unidos a Aragón en el siglo XII. Del oeste leonés nació **Portugal**.":
    "On the Cantabrian strip the kingdom of **Asturias** formed, whose origin tradition places at **Covadonga**, and from it came **León** and **Castile**. To the east arose **Navarre**, **Aragon** and the **Catalan counties**, joined to Aragon in the twelfth century. From the western part of León came **Portugal**.",
  "El avance hacia el sur fue lento y desigual, con siglos de treguas, pactos y matrimonios además de batallas. **Toledo** cayó en **1085**, la victoria de **Las Navas de Tolosa** en **1212** abrió Andalucía, **Sevilla** en **1248**. Solo quedó el **reino nazarí de Granada**, que resistiría dos siglos y medio más.":
    "The advance southwards was slow and uneven, with centuries of truces, pacts and marriages as well as battles. **Toledo** fell in **1085**, the victory of **Las Navas de Tolosa** in **1212** opened Andalusia, **Seville** in **1248**. Only the **Nasrid kingdom of Granada** was left, and it would hold out for another two and a half centuries.",
  "¿Qué ciudad fue la capital del Califato?": "Which city was the capital of the Caliphate?",
  "Toledo": "Toledo",
  "Córdoba": "Córdoba",
  "Sevilla": "Seville",
  "Córdoba, desde el 929. Toledo había sido la capital visigoda y Granada fue la sede del último reino nazarí, dos siglos y medio después de que el califato desapareciera.":
    "Córdoba, from 929. Toledo had been the Visigothic capital and Granada was the seat of the last Nasrid kingdom, two and a half centuries after the caliphate disappeared.",
  "Ocho siglos no son ocho siglos de guerra continua. Hubo largos periodos de tregua, alianzas cruzadas entre reyes cristianos y musulmanes, y un intercambio constante de libros, cultivos y palabras: buena parte del vocabulario español de la agricultura y la ciencia viene del árabe.":
    "Eight centuries are not eight centuries of continuous war. There were long periods of truce, alliances that crossed between Christian and Muslim kings, and a constant exchange of books, crops and words: much of the Spanish vocabulary of farming and science comes from Arabic.",
  // es-reyes-catolicos
  "Los Reyes Católicos y la monarquía hispánica": "The Catholic Monarchs and the Hispanic monarchy",
  "Por qué importa: en un solo año, 1492, España termina una guerra de siglos, expulsa a una parte de su población y llega a un continente que no sabía que existía. Casi todo lo que viene después arranca de ahí.":
    "Why this matters: in a single year, 1492, Spain ends a war of centuries, expels part of its own population and reaches a continent it did not know existed. Almost everything that follows starts there.",
  "Una unión de personas, no de reinos": "A union of persons, not of kingdoms",
  "**Isabel de Castilla** y **Fernando de Aragón** se casaron en **1469**. Lo que unieron fue una **corona**, no un Estado: cada reino conservó sus leyes, sus cortes, su moneda y sus aduanas. España nació como una **unión dinástica**, y la unificación jurídica no llegaría hasta el siglo XVIII.":
    "**Isabella of Castile** and **Ferdinand of Aragon** married in **1469**. What they joined was a **crown**, not a state: each kingdom kept its own laws, its own parliament, its own currency and its own customs posts. Spain was born as a **dynastic union**, and legal unification would not arrive until the eighteenth century.",
  "1492": "1492",
  "La toma de Granada": "The taking of Granada",
  "El 2 de enero cae el último reino nazarí, y con él termina la presencia política musulmana en la Península.":
    "On 2 January the last Nasrid kingdom falls, and with it the Muslim political presence in the peninsula ends.",
  "La expulsión de los judíos": "The expulsion of the Jews",
  "El decreto de marzo obliga a convertirse o marchar. Los sefardíes conservaron durante siglos su lengua, y hoy tienen un plazo reducido para pedir la nacionalidad.":
    "The March decree forces conversion or departure. The Sephardim kept their language for centuries, and today they have a shortened period in which to apply for nationality.",
  "La llegada a América": "The arrival in America",
  "El 12 de octubre Colón alcanza una isla del Caribe. Es la fecha de la actual Fiesta Nacional.":
    "On 12 October Columbus reaches an island in the Caribbean. It is the date of today's National Day.",
  "La Gramática de Nebrija": "Nebrija's Grammar",
  "La primera gramática de una lengua romance. Se publicó ese mismo año, y no por casualidad.":
    "The first grammar of a Romance language. It was published that same year, and not by chance.",
  "En **1512** se incorporó **Navarra**, con lo que la Península quedó bajo una sola corona salvo Portugal. La empresa americana convirtió a Castilla en cabeza de un imperio en pocas décadas.":
    "In **1512** **Navarre** was taken in, leaving the peninsula under a single crown apart from Portugal. The American venture made Castile the head of an empire within a few decades.",
  "¿Qué tres hechos coinciden en el año 1492?": "Which three events fall in the year 1492?",
  "La toma de Granada, la expulsión de los judíos y la llegada a América":
    "The taking of Granada, the expulsion of the Jews and the arrival in America",
  "La unión de Castilla y Aragón, la conquista de Navarra y la de Portugal":
    "The union of Castile and Aragon, the conquest of Navarre and that of Portugal",
  "La llegada de los Borbones, Utrecht y los Decretos de Nueva Planta":
    "The arrival of the Bourbons, Utrecht and the Nueva Planta decrees",
  "La fundación de Madrid, la de Sevilla y la de Cádiz": "The founding of Madrid, of Seville and of Cádiz",
  "Los tres ocurren en 1492, junto con la publicación de la primera gramática castellana. Navarra se incorporó en 1512 y Portugal solo estuvo unido a la corona entre 1580 y 1640.":
    "All three happen in 1492, along with the publication of the first Castilian grammar. Navarre was taken in in 1512, and Portugal was joined to the crown only between 1580 and 1640.",
  "Los Austrias": "The Habsburgs",
  "**Carlos I** heredó en **1516** un conjunto sin precedentes: Castilla, Aragón, los territorios italianos, Flandes, Austria y América. Como **Carlos V** fue también emperador del Sacro Imperio. Su hijo **Felipe II** fijó la capital en **Madrid** en **1561**, construyó **El Escorial** y sumó **Portugal** en **1580**, en una unión que duraría hasta **1640**.":
    "**Charles I** inherited in **1516** a combination without precedent: Castile, Aragon, the Italian territories, Flanders, Austria and America. As **Charles V** he was also Holy Roman Emperor. His son **Philip II** fixed the capital at **Madrid** in **1561**, built **El Escorial** and added **Portugal** in **1580**, in a union that would last until **1640**.",
  "De aquella extensión viene la frase del imperio **donde nunca se ponía el sol**. También vinieron guerras interminables, tres bancarrotas y una economía que dependía de la plata americana más que de su propia producción.":
    "From that extent comes the phrase about the empire **on which the sun never set**. From it also came endless wars, three bankruptcies and an economy that depended on American silver more than on what it produced itself.",
  "El Siglo de Oro": "The Golden Age",
  "Mientras el poder político se desgastaba, la cultura vivió su mayor momento. **Cervantes** publicó el **Quijote** en **1605**, considerado la primera novela moderna; escribieron **Lope de Vega**, **Calderón**, **Quevedo** y **Góngora**; pintaron **El Greco**, **Velázquez** y **Murillo**. **Las Meninas**, de 1656, sigue en el **Museo del Prado**.":
    "While political power was wearing away, culture had its greatest moment. **Cervantes** published **Don Quixote** in **1605**, held to be the first modern novel; **Lope de Vega**, **Calderón**, **Quevedo** and **Góngora** wrote; **El Greco**, **Velázquez** and **Murillo** painted. **Las Meninas**, from 1656, is still in the **Prado Museum**.",
  "¿Quién escribió el Quijote?": "Who wrote Don Quixote?",
  "Lope de Vega": "Lope de Vega",
  "Miguel de Cervantes": "Miguel de Cervantes",
  "Francisco de Quevedo": "Francisco de Quevedo",
  "Pedro Calderón de la Barca": "Pedro Calderón de la Barca",
  "Cervantes publicó la primera parte en 1605 y la segunda en 1615. Se considera la primera novela moderna, y el 23 de abril, fecha de su muerte, es el Día del Libro.":
    "Cervantes published the first part in 1605 and the second in 1615. It is held to be the first modern novel, and 23 April, the date of his death, is Book Day.",
  "Los Borbones": "The Bourbons",
  "La muerte sin descendencia del último Austria abrió en **1700** la **Guerra de Sucesión**, una guerra europea peleada también dentro de España. La ganó **Felipe V**, el primer **Borbón**, y el **Tratado de Utrecht** de **1713** repartió los despojos: España perdió sus territorios europeos y **Gibraltar**, que sigue siendo británico.":
    "The last Habsburg's death without an heir opened the **War of the Spanish Succession** in **1700**, a European war fought inside Spain as well. **Philip V**, the first **Bourbon**, won it, and the **Treaty of Utrecht** of **1713** shared out the spoils: Spain lost its European territories and **Gibraltar**, which is still British.",
  "Felipe V impuso los **Decretos de Nueva Planta**, que suprimieron las instituciones propias de la Corona de Aragón y extendieron el modelo castellano. La unión dinástica de 1469 se convirtió entonces, dos siglos y medio después, en un Estado unificado.":
    "Philip V imposed the **Nueva Planta decrees**, which abolished the institutions of the Crown of Aragon and extended the Castilian model. The dynastic union of 1469 became, two and a half centuries later, a unified state.",
  "¿Qué dinastía llegó al trono tras la Guerra de Sucesión?":
    "Which dynasty came to the throne after the War of the Succession?",
  "Los Trastámara": "The Trastámaras",
  "Los Saboya": "The House of Savoy",
  "Los Borbones, con Felipe V, y siguen reinando hoy. Los Trastámara fueron la dinastía de los Reyes Católicos y los Saboya solo dieron un rey, Amadeo I, en el siglo XIX.":
    "The Bourbons, with Philip V, and they still reign today. The Trastámaras were the dynasty of the Catholic Monarchs, and the House of Savoy gave only one king, Amadeo I, in the nineteenth century.",
  "La unión de 1469 fue **dinástica**. Castilla y Aragón mantuvieron leyes, cortes y aduanas propias durante dos siglos y medio, y quien las suprimió fue un Borbón en el siglo XVIII, no los Reyes Católicos.":
    "The union of 1469 was **dynastic**. Castile and Aragon kept their own laws, parliaments and customs posts for two and a half centuries, and the one who abolished them was a Bourbon in the eighteenth century, not the Catholic Monarchs.",
  // es-siglo-xix
  "El siglo XIX": "The nineteenth century",
  "Por qué importa: en cien años España pierde un imperio, estrena su primera constitución, se pelea consigo misma tres veces y prueba una república que dura once meses. La inestabilidad del XIX explica la del XX.":
    "Why this matters: in a hundred years Spain loses an empire, gets its first constitution, fights itself three times and tries a republic that lasts eleven months. The instability of the nineteenth century explains that of the twentieth.",
  "1808": "1808",
  "Napoleón entró en España con la excusa de atravesarla hacia Portugal y acabó colocando en el trono a su hermano **José I**. El **2 de mayo de 1808** el pueblo de Madrid se levantó, y con él el resto del país: empezó la **Guerra de la Independencia**, seis años de guerra irregular que dieron al mundo la palabra **guerrilla**.":
    "Napoleon came into Spain on the pretext of crossing it towards Portugal and ended up putting his brother **Joseph I** on the throne. On **2 May 1808** the people of Madrid rose, and the rest of the country with them: the **War of Independence** began, six years of irregular war that gave the world the word **guerrilla**.",
  "La Pepa": "La Pepa",
  "Mientras el país estaba ocupado, unas Cortes reunidas en **Cádiz** —la ciudad que resistía— aprobaron el **19 de marzo de 1812** la primera **Constitución** española. Como ese día es San José, se la conoce como **La Pepa**.":
    "While the country was occupied, a Cortes meeting at **Cádiz** — the city that was holding out — approved Spain's first **Constitution** on **19 March 1812**. Since that day is St Joseph's, it is known as **La Pepa**.",
  "Proclamaba la **soberanía nacional**, la división de poderes y la libertad de imprenta. Duró poco: **Fernando VII** volvió en **1814**, la derogó y restauró el absolutismo. Ese vaivén entre texto liberal y vuelta atrás se repetiría durante todo el siglo.":
    "It proclaimed **national sovereignty**, the separation of powers and freedom of the press. It did not last: **Ferdinand VII** returned in **1814**, repealed it and restored absolutism. That swing between a liberal text and a step backwards would repeat all century long.",
  "¿Cómo se conoce popularmente la Constitución de 1812?":
    "What is the Constitution of 1812 popularly called?",
  "La Gloriosa": "La Gloriosa",
  "La Nanita": "La Nanita",
  "La Cadista": "La Cadista",
  "Se aprobó el 19 de marzo, día de San José, y de ahí el apodo. La Gloriosa es en cambio el nombre de la revolución de 1868.":
    "It was approved on 19 March, St Joseph's day, and that is where the nickname comes from. La Gloriosa is the name of the revolution of 1868 instead.",
  "El fin del imperio americano": "The end of the American empire",
  "El vacío de poder de 1808 fue el detonante que las colonias esperaban. Entre **1810 y 1824** los territorios continentales de América se independizaron uno tras otro, y la batalla de **Ayacucho**, en 1824, cerró el proceso. Quedaron solo **Cuba**, **Puerto Rico** y **Filipinas**.":
    "The power vacuum of 1808 was the trigger the colonies had been waiting for. Between **1810 and 1824** the continental territories of America became independent one after another, and the battle of **Ayacucho**, in 1824, closed the process. Only **Cuba**, **Puerto Rico** and the **Philippines** were left.",
  "Un siglo de conflictos": "A century of conflicts",
  "Las guerras carlistas": "The Carlist wars",
  "Tres guerras civiles desde 1833 entre los partidarios de Isabel II y los del pretendiente Carlos. Enfrentaron dos ideas de país.":
    "Three civil wars from 1833 between the supporters of Isabella II and those of the pretender Carlos. They set two ideas of the country against each other.",
  "El Sexenio Democrático": "The Democratic Six Years",
  "De 1868 a 1874, tras la revolución llamada la Gloriosa. Incluyó un rey importado, Amadeo de Saboya, que abdicó a los dos años.":
    "From 1868 to 1874, after the revolution called La Gloriosa. It included an imported king, Amadeo of Savoy, who abdicated after two years.",
  "La Primera República": "The First Republic",
  "Proclamada en 1873, duró once meses y tuvo cuatro presidentes. Terminó con un golpe militar.":
    "Proclaimed in 1873, it lasted eleven months and had four presidents. It ended in a military coup.",
  "La Restauración": "The Restoration",
  "Desde 1875, con Alfonso XII. Cánovas diseñó un turno pactado entre dos partidos, sostenido por el caciquismo en el campo.":
    "From 1875, with Alfonso XII. Cánovas designed an agreed rotation between two parties, propped up by rural boss politics.",
  "¿Cuánto duró la Primera República española?": "How long did the Spanish First Republic last?",
  "Once meses": "Eleven months",
  "Tres años": "Three years",
  "Ocho años": "Eight years",
  "Veinte años": "Twenty years",
  "Proclamada en febrero de 1873 y terminada por un golpe a comienzos de 1874, con cuatro presidentes en ese tiempo. La Segunda República, de 1931, duró ocho años.":
    "Proclaimed in February 1873 and ended by a coup at the beginning of 1874, with four presidents in that time. The Second Republic, from 1931, lasted eight years.",
  "El Desastre": "The Disaster",
  "En **1898**, tras una guerra breve con **Estados Unidos**, España perdió **Cuba**, **Puerto Rico** y **Filipinas**. Se lo llamó simplemente **el Desastre**, y el golpe fue más moral que militar: el país descubrió de golpe que ya no era una potencia.":
    "In **1898**, after a short war with the **United States**, Spain lost **Cuba**, **Puerto Rico** and the **Philippines**. It was called simply **the Disaster**, and the blow was moral more than military: the country discovered all at once that it was no longer a power.",
  "De esa conmoción salió la **Generación del 98**, un grupo de escritores —Unamuno, Baroja, Azorín, Machado— que se preguntó qué era España y qué debía hacer consigo misma. La pregunta atravesaría todo el siglo siguiente.":
    "Out of that shock came the **Generation of '98**, a group of writers — Unamuno, Baroja, Azorín, Machado — who asked what Spain was and what it should do with itself. The question would run through the whole of the next century.",
  "Mientras tanto, **Cataluña** y el **País Vasco** se industrializaban: el textil catalán y la siderurgia vasca crearon las primeras grandes concentraciones obreras, y con ellas el movimiento sindical. El **PSOE** se había fundado en **1879**.":
    "Meanwhile **Catalonia** and the **Basque Country** were industrialising: Catalan textiles and Basque steel created the first large concentrations of workers, and with them the trade union movement. The **PSOE** had been founded in **1879**.",
  "¿Qué territorios perdió España en 1898?": "Which territories did Spain lose in 1898?",
  "México, Perú y Colombia": "Mexico, Peru and Colombia",
  "Cuba, Puerto Rico y Filipinas": "Cuba, Puerto Rico and the Philippines",
  "Gibraltar y el Sáhara": "Gibraltar and the Sahara",
  "Flandes y los territorios italianos": "Flanders and the Italian territories",
  "Las últimas posesiones de ultramar, tras una guerra breve con Estados Unidos. La América continental se había independizado setenta años antes, y Gibraltar se perdió en 1713.":
    "The last overseas possessions, after a short war with the United States. Continental America had become independent seventy years earlier, and Gibraltar was lost in 1713.",
  "La Constitución de 1812 y la de 1978 se citan a veces juntas y no se parecen en nada salvo en el nombre. Entre ambas hubo otras cinco, más varios proyectos que no llegaron a regir.":
    "The Constitution of 1812 and that of 1978 are sometimes cited together and have nothing in common but the name. Between them came five others, plus several drafts that never took effect.",
  // es-republica-guerra
  "República, Guerra Civil y dictadura": "Republic, Civil War and dictatorship",
  "Por qué importa: son los cuarenta y cinco años que la Constitución de 1978 tiene detrás. Casi cada decisión de aquel texto —el consenso, la rigidez, la censura constructiva— es una respuesta a algo que ocurrió aquí.":
    "Why this matters: these are the forty-five years the Constitution of 1978 has behind it. Almost every decision in that text — the consensus, the rigidity, the constructive vote of no confidence — is an answer to something that happened here.",
  "El 14 de abril": "14 April",
  "Tras la dictadura de **Primo de Rivera**, entre 1923 y 1930, las **elecciones municipales** del 12 de abril de 1931 se leyeron como un plebiscito sobre la monarquía. Las ciudades votaron republicano; **Alfonso XIII** salió de España y el **14 de abril de 1931** se proclamó la **Segunda República**.":
    "After the dictatorship of **Primo de Rivera**, between 1923 and 1930, the **local elections** of 12 April 1931 were read as a plebiscite on the monarchy. The cities voted republican; **Alfonso XIII** left Spain and on **14 April 1931** the **Second Republic** was proclaimed.",
  "La **Constitución de 1931** fue de las más avanzadas de su tiempo: Estado laico, **divorcio**, y sobre todo el **voto femenino**, defendido en las Cortes por **Clara Campoamor** contra buena parte de su propio grupo. Las mujeres votaron por primera vez en **1933**. Se aprobaron además los primeros **estatutos de autonomía**, el de Cataluña en 1932.":
    "The **Constitution of 1931** was among the most advanced of its time: a secular state, **divorce**, and above all **votes for women**, defended in the Cortes by **Clara Campoamor** against much of her own group. Women voted for the first time in **1933**. The first **statutes of autonomy** were also approved, Catalonia's in 1932.",
  "¿Qué día se proclamó la Segunda República?": "On what day was the Second Republic proclaimed?",
  "El 12 de abril de 1931": "On 12 April 1931",
  "El 14 de abril de 1931": "On 14 April 1931",
  "El 18 de julio de 1936": "On 18 July 1936",
  "El 1 de abril de 1939": "On 1 April 1939",
  "El 12 de abril fueron las municipales y el 14 la proclamación. El 18 de julio de 1936 comienza la guerra y el 1 de abril de 1939 termina.":
    "12 April was the local election and the 14th the proclamation. 18 July 1936 is when the war begins and 1 April 1939 when it ends.",
  "La guerra": "The war",
  "El **17 y 18 de julio de 1936** una parte del ejército se sublevó contra el Gobierno de la República. El golpe triunfó en unas zonas y fracasó en otras, y ese fracaso parcial fue precisamente lo que convirtió una sublevación en una **guerra civil** de casi tres años.":
    "On **17 and 18 July 1936** part of the army rose against the Republic's Government. The coup succeeded in some areas and failed in others, and that partial failure was precisely what turned a rising into a **civil war** of almost three years.",
  "Fue también un ensayo de la guerra europea que venía: Alemania e Italia apoyaron al bando sublevado y la Unión Soviética al republicano, mientras las democracias se mantenían en la no intervención. El bombardeo de **Guernica** en **1937** dio a Picasso el motivo de su cuadro más conocido, hoy en el **Museo Reina Sofía**.":
    "It was also a rehearsal for the European war to come: Germany and Italy backed the rebel side and the Soviet Union the republican one, while the democracies stayed with non-intervention. The bombing of **Guernica** in **1937** gave Picasso the subject of his best-known painting, today in the **Reina Sofía Museum**.",
  // es-republica-guerra
  "La guerra terminó el **1 de abril de 1939**. Dejó cientos de miles de muertos y un **exilio** de medio millón de personas, entre ellas buena parte de los científicos, escritores y maestros del país.":
    "The war ended on **1 April 1939**. It left hundreds of thousands dead and an **exile** of half a million people, among them a good part of the country's scientists, writers and teachers.",
  "¿Cuándo terminó la Guerra Civil española?": "When did the Spanish Civil War end?",
  "En 1936": "In 1936",
  "En 1937": "In 1937",
  "En 1939": "In 1939",
  "En 1945": "In 1945",
  "El 1 de abril de 1939, cinco meses antes de que empezara la Segunda Guerra Mundial. El bombardeo de Guernica fue en 1937.":
    "On 1 April 1939, five months before the Second World War began. The bombing of Guernica was in 1937.",
  "La dictadura": "The dictatorship",
  "**Francisco Franco** gobernó desde **1939 hasta 1975**. Se suprimieron los partidos y los sindicatos libres, se implantó la **censura**, se persiguió a los vencidos y las lenguas distintas del castellano quedaron fuera de la escuela y de la vida pública.":
    "**Francisco Franco** governed from **1939 to 1975**. Parties and free trade unions were abolished, **censorship** was imposed, the defeated were persecuted and the languages other than Castilian were shut out of schools and public life.",
  "La autarquía": "Autarky",
  "Los años cuarenta: aislamiento internacional, cartillas de racionamiento y hambre. Se los llamó los años del hambre.":
    "The forties: international isolation, ration books and hunger. They were called the years of hunger.",
  "1953 y 1955": "1953 and 1955",
  "Los acuerdos con Estados Unidos y el concordato con la Santa Sede rompen el aislamiento; en 1955 España ingresa en la ONU.":
    "The agreements with the United States and the concordat with the Holy See break the isolation; in 1955 Spain joins the UN.",
  "El desarrollismo": "The development years",
  "En los sesenta llegan la industria, el turismo de sol y playa y las divisas de dos millones de emigrantes en Europa.":
    "In the sixties come industry, sun-and-beach tourism and the foreign currency sent home by two million emigrants in Europe.",
  "1973": "1973",
  "El almirante Carrero Blanco, sucesor previsto en la presidencia, muere en un atentado de ETA. El plan de continuidad se rompe.":
    "Admiral Carrero Blanco, the intended successor as head of government, is killed in an ETA attack. The plan for continuity breaks down.",
  "En **1969** Franco designó sucesor a título de rey a **Juan Carlos de Borbón**, nieto de Alfonso XIII. Franco murió el **20 de noviembre de 1975**, y lo que ocurrió después no estaba escrito en ninguna parte.":
    "In **1969** Franco named **Juan Carlos de Borbón**, grandson of Alfonso XIII, as his successor with the title of king. Franco died on **20 November 1975**, and what happened next was written down nowhere.",
  "¿Quién defendió el voto femenino en las Cortes republicanas?":
    "Who defended votes for women in the republican Cortes?",
  "Victoria Kent": "Victoria Kent",
  "Clara Campoamor": "Clara Campoamor",
  "Dolores Ibárruri": "Dolores Ibárruri",
  "María Zambrano": "María Zambrano",
  "Clara Campoamor lo defendió y lo sacó adelante, en contra de buena parte de su propio grupo. Victoria Kent, también diputada, se opuso entonces por temor al voto conservador de las mujeres.":
    "Clara Campoamor defended it and carried it, against much of her own group. Victoria Kent, also a deputy, opposed it at the time for fear of a conservative women's vote.",
  "La Segunda República duró **ocho años** y solo los tres últimos fueron de guerra. No son lo mismo, aunque se nombren muchas veces de un tirón.":
    "The Second Republic lasted **eight years** and only the last three were of war. They are not the same thing, though they are often named in one breath.",
  // es-transicion
  "La Transición y la democracia": "The Transition and democracy",
  "Por qué importa: en tres años España pasó de una dictadura a una democracia sin romper la legalidad anterior y sin una nueva guerra. Cómo se hizo eso es la explicación de casi todo el sistema descrito en el capítulo dos.":
    "Why this matters: in three years Spain went from a dictatorship to a democracy without breaking the earlier legality and without another war. How that was done is the explanation for almost the whole system described in chapter two.",
  "De la ley a la ley": "From law to law",
  "**Juan Carlos I** fue proclamado rey el **22 de noviembre de 1975**, dos días después de la muerte de Franco, dentro de las reglas del régimen. En julio de **1976** nombró presidente del Gobierno a **Adolfo Suárez**, procedente del propio aparato franquista, lo que casi nadie interpretó entonces como una buena noticia.":
    "**Juan Carlos I** was proclaimed king on **22 November 1975**, two days after Franco's death, within the regime's own rules. In July **1976** he appointed as prime minister **Adolfo Suárez**, who came from the Francoist apparatus itself — which almost nobody read at the time as good news.",
  "Suárez llevó a las Cortes del régimen la **Ley para la Reforma Política**, que en la práctica las disolvía y abría elecciones libres. Las Cortes la aprobaron y el pueblo la ratificó en referéndum en **diciembre de 1976**. De ahí la fórmula con que se resume la Transición: se fue **de la ley a la ley**, sin ruptura formal.":
    "Suárez took to the regime's Cortes the **Law for Political Reform**, which in practice dissolved them and opened the way to free elections. The Cortes approved it and the people ratified it by referendum in **December 1976**. Hence the phrase that sums up the Transition: it went **from law to law**, with no formal break.",
  "En abril de **1977**, un **Sábado Santo**, se legalizó el **Partido Comunista**, la decisión más arriesgada del periodo. El **15 de junio de 1977** se celebraron las **primeras elecciones libres** desde 1936.":
    "In April **1977**, on **Holy Saturday**, the **Communist Party** was legalised, the riskiest decision of the period. On **15 June 1977** the **first free elections** since 1936 were held.",
  "¿Quién fue el presidente del Gobierno que dirigió la Transición?":
    "Who was the prime minister who led the Transition?",
  "Leopoldo Calvo-Sotelo": "Leopoldo Calvo-Sotelo",
  "Adolfo Suárez": "Adolfo Suárez",
  "Felipe González": "Felipe González",
  "Manuel Fraga": "Manuel Fraga",
  "Adolfo Suárez, nombrado en 1976 y ganador de las elecciones de 1977 y 1979. Calvo-Sotelo le sucedió en 1981 y Felipe González ganó en 1982.":
    "Adolfo Suárez, appointed in 1976 and winner of the elections of 1977 and 1979. Calvo-Sotelo succeeded him in 1981 and Felipe González won in 1982.",
  "Los años difíciles": "The difficult years",
  "En **octubre de 1977** los partidos firmaron los **Pactos de la Moncloa**, un acuerdo económico y social que permitió afrontar la inflación y el paro sin que el sistema saltara por los aires. Al año siguiente se aprobó la **Constitución**.":
    "In **October 1977** the parties signed the **Moncloa Pacts**, an economic and social agreement that made it possible to face inflation and unemployment without the system blowing apart. The **Constitution** was approved the following year.",
  "El momento más peligroso llegó el **23 de febrero de 1981**: un grupo de guardias civiles asaltó el Congreso durante la votación de investidura y secuestró al Gobierno y a los diputados. El golpe fracasó esa misma noche. Fue el último intento de volver atrás por la fuerza.":
    "The most dangerous moment came on **23 February 1981**: a group of Civil Guards stormed the Congress during an investiture vote and held the Government and the deputies hostage. The coup failed that same night. It was the last attempt to turn back by force.",
  "¿Qué ocurrió el 23 de febrero de 1981?": "What happened on 23 February 1981?",
  "Se aprobó la Constitución": "The Constitution was approved",
  "Un intento de golpe de Estado en el Congreso": "An attempted coup in the Congress",
  "España entró en la Comunidad Económica Europea": "Spain joined the European Economic Community",
  "Se celebraron las primeras elecciones libres": "The first free elections were held",
  "El asalto al Congreso durante una votación de investidura, conocido desde entonces como el 23-F. Fracasó esa misma noche y fue el último intento de volver atrás por la fuerza.":
    "The storming of the Congress during an investiture vote, known ever since as 23-F. It failed that same night and was the last attempt to turn back by force.",
  "La normalidad": "Normality",
  "1982": "1982",
  "El PSOE gana con mayoría absoluta y gobierna hasta 1996. La alternancia demuestra que el sistema funciona.":
    "The PSOE wins an absolute majority and governs until 1996. The change of party shows that the system works.",
  "1986": "1986",
  "España entra en la Comunidad Económica Europea y ratifica en referéndum su permanencia en la OTAN.":
    "Spain joins the European Economic Community and confirms by referendum that it will stay in NATO.",
  "1992": "1992",
  "Juegos Olímpicos de Barcelona, Exposición Universal de Sevilla y el primer tren de alta velocidad. El año en que el país se enseña al mundo.":
    "The Barcelona Olympics, the Seville World Exposition and the first high-speed train. The year the country showed itself to the world.",
  "2002": "2002",
  "El euro sustituye a la peseta en los bolsillos, tras tres años de existir solo en las cuentas.":
    "The euro replaces the peseta in people's pockets, after three years of existing only in the accounts.",
  "El **11 de marzo de 2004** una serie de bombas en trenes de cercanías de Madrid causó ciento noventa y tres muertos: el mayor atentado de la historia de España. **ETA**, que había matado a más de ochocientas personas desde los años sesenta, anunció el fin de su actividad armada en 2011 y su disolución en 2018.":
    "On **11 March 2004** a series of bombs on commuter trains in Madrid killed a hundred and ninety-three people: the largest attack in Spanish history. **ETA**, which had killed more than eight hundred people since the sixties, announced the end of its armed activity in 2011 and its dissolution in 2018.",
  "En **2014** **Juan Carlos I abdicó** y fue proclamado **Felipe VI**. El sistema autonómico, que la Constitución dejó abierto, se completó en los años ochenta y noventa hasta las diecisiete comunidades y las dos ciudades autónomas de hoy.":
    "In **2014** **Juan Carlos I abdicated** and **Felipe VI** was proclaimed. The system of autonomous communities, which the Constitution left open, was completed in the eighties and nineties, reaching today's seventeen communities and two autonomous cities.",
  "¿En qué año entró España en la Comunidad Económica Europea?":
    "In what year did Spain join the European Economic Community?",
  "En 1978": "In 1978",
  "En 1982": "In 1982",
  "En 1986": "In 1986",
  "En 1992": "In 1992",
  "El 1 de enero de 1986, junto con Portugal. Ese mismo año se celebró el referéndum sobre la permanencia en la OTAN.":
    "On 1 January 1986, together with Portugal. The referendum on staying in NATO was held that same year.",
  "La Transición no fue una ruptura sino una **reforma pactada**: las instituciones del régimen aprobaron su propia disolución. Esa elección explica tanto la estabilidad posterior como los debates que siguen abiertos sobre lo que quedó sin resolver.":
    "The Transition was not a break but a **negotiated reform**: the regime's own institutions approved their dissolution. That choice explains both the stability that followed and the arguments still open about what was left unsettled.",
  // chapter
  "El Estado autonómico, el territorio y las lenguas":
    "The State of autonomies, the territory and the languages",
  // es-autonomias
  "Las comunidades autónomas": "The autonomous communities",
  "Por qué importa: la Constitución no dibujó un mapa. Reconoció un derecho y dejó que el mapa se hiciera solo, y el resultado es uno de los Estados más descentralizados de Europa sin ser formalmente federal.":
    "Why this matters: the Constitution did not draw a map. It recognised a right and let the map make itself, and the result is one of the most decentralised states in Europe without being formally federal.",
  "Un modelo abierto": "An open model",
  "El **título VIII** no enumera comunidades: establece **cómo** pueden constituirse. Las provincias limítrofes con características históricas, culturales y económicas comunes podían acceder al autogobierno, y de ese procedimiento salieron **diecisiete comunidades autónomas** y, desde **1995**, las **dos ciudades autónomas** de **Ceuta** y **Melilla**.":
    "**Title VIII** does not list communities: it lays down **how** they may be constituted. Neighbouring provinces with common historical, cultural and economic characteristics could reach self-government, and out of that procedure came **seventeen autonomous communities** and, since **1995**, the **two autonomous cities** of **Ceuta** and **Melilla**.",
  "Hubo **dos vías**. La del **artículo 151**, más rápida y con más competencias desde el principio, la siguieron **Cataluña**, el **País Vasco**, **Galicia** y **Andalucía**. La del **artículo 143**, más lenta, la recorrieron las demás. Con los años las diferencias se fueron igualando en buena medida.":
    "There were **two routes**. The one in **article 151**, faster and with more powers from the start, was taken by **Catalonia**, the **Basque Country**, **Galicia** and **Andalusia**. The one in **article 143**, slower, was taken by the rest. Over the years the differences have largely evened out.",
  "El estatuto": "The statute",
  "Cada comunidad tiene un **Estatuto de Autonomía**, que la Constitución llama su **norma institucional básica**. No es una ley cualquiera: se aprueba como **ley orgánica** de las Cortes Generales, de modo que forma parte a la vez del ordenamiento autonómico y del estatal.":
    "Each community has a **Statute of Autonomy**, which the Constitution calls its **basic institutional norm**. It is not an ordinary law: it is passed as an **organic law** of the Cortes Generales, so that it is part of both the regional and the state legal order.",
  "Asamblea legislativa": "Legislative assembly",
  "El parlamento de la comunidad, elegido por sus ciudadanos. Aprueba las leyes autonómicas y el presupuesto.":
    "The community's parliament, elected by its citizens. It passes the regional laws and the budget.",
  "Consejo de Gobierno": "Governing council",
  "El ejecutivo, con su presidente al frente, investido por la asamblea igual que en el Estado.":
    "The executive, headed by its president, invested by the assembly just as at state level.",
  "Tribunal Superior de Justicia": "High Court of Justice",
  "Culmina la organización judicial en el territorio, sin ser una instancia por encima del Tribunal Supremo.":
    "It tops the judicial organisation in the territory, without being an instance above the Supreme Court.",
  "Delegado del Gobierno": "Government delegate",
  "Representa a la Administración del Estado en la comunidad. No es un cargo autonómico: lo nombra el Gobierno central.":
    "Represents the State administration in the community. It is not a regional post: the central Government appoints it.",
  "¿Cuántas comunidades autónomas tiene España?": "How many autonomous communities does Spain have?",
  "Diecisiete": "Seventeen",
  "Diecinueve": "Nineteen",
  "Cincuenta": "Fifty",
  "Diecisiete comunidades, más las ciudades autónomas de Ceuta y Melilla desde 1995. Cincuenta es el número de provincias, que es otra división.":
    "Seventeen communities, plus the autonomous cities of Ceuta and Melilla since 1995. Fifty is the number of provinces, which is a different division.",
  "Quién hace qué": "Who does what",
  "El **artículo 149** enumera las materias **exclusivas del Estado**: relaciones internacionales, defensa, administración de justicia, moneda, legislación mercantil, penal y laboral, y la regulación básica de muchas otras. El **artículo 148** enumera las que las comunidades **pueden asumir**: urbanismo, agricultura, turismo, sanidad e higiene, cultura, y por esa vía se llega a la sanidad y la educación que hoy gestionan.":
    "**Article 149** lists the matters **exclusive to the State**: international relations, defence, the administration of justice, currency, commercial, criminal and labour legislation, and the basic regulation of many others. **Article 148** lists the ones the communities **may take on**: planning, agriculture, tourism, health and hygiene, culture — and by that route they arrive at the health care and education they manage today.",
  "La **financiación** sigue dos regímenes. La mayoría está en el **régimen común**, con una parte de los impuestos cedida y un fondo de reparto. El **País Vasco** y **Navarra** tienen **régimen foral** —el **concierto** y el **convenio**— por el que recaudan sus propios impuestos y pagan al Estado una cantidad por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "**Funding** follows two regimes. Most are in the **common regime**, with a share of taxes handed over and a distribution fund. The **Basque Country** and **Navarre** have the **foral regime** — the concierto and the convenio — under which they collect their own taxes and pay the State a sum for shared services. It is a historic exception recognised in the first additional provision.",
  "¿Qué comunidades tienen régimen foral de financiación?": "Which communities have a foral funding regime?",
  "Cataluña y el País Vasco": "Catalonia and the Basque Country",
  "El País Vasco y Navarra": "The Basque Country and Navarre",
  "Galicia y Navarra": "Galicia and Navarre",
  "Ninguna: el sistema es igual para todas": "None: the system is the same for all",
  "El concierto vasco y el convenio navarro: recaudan sus propios impuestos y pagan al Estado por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "The Basque concierto and the Navarrese convenio: they collect their own taxes and pay the State for shared services. It is a historic exception recognised in the first additional provision.",
  "Los límites": "The limits",
  "La Constitución garantiza la **solidaridad** entre territorios y prohíbe que las diferencias entre estatutos impliquen **privilegios económicos o sociales**. Para corregir desequilibrios existe el **Fondo de Compensación Interterritorial**.":
    "The Constitution guarantees **solidarity** between territories and forbids differences between statutes from implying **economic or social privileges**. To correct imbalances there is the **Inter-Territorial Compensation Fund**.",
  "Y hay un último recurso: el **artículo 155**. Si una comunidad **incumple gravemente** sus obligaciones constitucionales o atenta contra el interés general de España, el Gobierno puede requerirla y, si no atiende el requerimiento, adoptar medidas con la **aprobación del Senado por mayoría absoluta**. Se aplicó por primera vez en 2017.":
    "And there is a last resort: **article 155**. If a community **seriously fails** in its constitutional obligations or acts against the general interest of Spain, the Government may issue a formal demand and, if it goes unheeded, adopt measures with the **Senate's approval by an absolute majority**. It was applied for the first time in 2017.",
  "¿Qué es un Estatuto de Autonomía?": "What is a Statute of Autonomy?",
  "Un reglamento del Gobierno autonómico": "A regulation of the regional government",
  "La norma institucional básica de la comunidad, aprobada como ley orgánica":
    "The community's basic institutional norm, passed as an organic law",
  "Un acuerdo entre comunidades vecinas": "An agreement between neighbouring communities",
  "La constitución propia de cada comunidad": "Each community's own constitution",
  "Es a la vez norma autonómica y ley orgánica estatal, y por eso su reforma exige el acuerdo de la comunidad y de las Cortes Generales. Constitución solo hay una.":
    "It is at once a regional norm and a state organic law, which is why amending it requires the agreement of both the community and the Cortes Generales. There is only one Constitution.",
  "**Provincia** y **comunidad autónoma** no son lo mismo. Hay **cincuenta provincias** y diecisiete comunidades: siete de ellas son **uniprovinciales**, como Madrid, Murcia o Asturias, y en esos casos la comunidad absorbió las funciones de la diputación.":
    "**Province** and **autonomous community** are not the same thing. There are **fifty provinces** and seventeen communities: seven of them are **single-province**, like Madrid, Murcia or Asturias, and in those cases the community absorbed the provincial council's functions.",
  // es-territorio
  "El territorio": "The territory",
  "Por qué importa: España es el país más montañoso de Europa después de Suiza, y eso explica su clima, su reparto de población y por qué durante siglos fue tan difícil de gobernar desde un solo sitio.":
    "Why this matters: Spain is the most mountainous country in Europe after Switzerland, and that explains its climate, how its population is spread and why for centuries it was so hard to govern from one place.",
  "Una meseta rodeada de sierras": "A plateau ringed by mountains",
  "El territorio ocupa unos **505.000 kilómetros cuadrados**, lo que hace de España el **segundo país más extenso de la Unión Europea** tras Francia, con algo menos de **cincuenta millones** de habitantes.":
    "The territory covers about **505,000 square kilometres**, which makes Spain the **second largest country in the European Union** after France, with a little under **fifty million** inhabitants.",
  "En el centro está la **Meseta Central**, una llanura elevada a más de seiscientos metros y partida en dos por el **Sistema Central**. La rodean cordilleras por casi todos lados, y esa altitud media —de las más altas de Europa— es la razón de que el interior tenga inviernos duros pese a la latitud.":
    "In the middle lies the **Central Plateau**, a plain raised more than six hundred metres and split in two by the **Central System**. Mountain ranges surround it on almost every side, and that average altitude — among the highest in Europe — is why the interior has hard winters despite the latitude.",
  "Los Pirineos": "The Pyrenees",
  // es-territorio
  "Frontera con Francia y Andorra, de mar a mar. Aíslan la Península del resto del continente.":
    "The border with France and Andorra, from sea to sea. They cut the peninsula off from the rest of the continent.",
  "La Cordillera Cantábrica": "The Cantabrian Range",
  "Cierra el norte y separa la España húmeda de la seca. Los Picos de Europa son su tramo más alto.":
    "It closes off the north and separates wet Spain from dry Spain. The Picos de Europa are its highest stretch.",
  "Los Sistemas Béticos": "The Baetic Systems",
  "En el sur, con Sierra Nevada y el Mulhacén, de 3.479 metros: el pico más alto de la Península.":
    "In the south, with the Sierra Nevada and Mulhacén, 3,479 metres: the highest peak in the peninsula.",
  "El Teide": "Teide",
  "En Tenerife, 3.715 metros. Es el punto más alto de España, y está en el Atlántico, no en la Península.":
    "On Tenerife, 3,715 metres. It is the highest point in Spain, and it is in the Atlantic, not in the peninsula.",
  "¿Cuál es el pico más alto de España?": "Which is the highest peak in Spain?",
  "El Mulhacén": "Mulhacén",
  "El Aneto": "Aneto",
  "El Naranjo de Bulnes": "Naranjo de Bulnes",
  "El Teide, en Tenerife, con 3.715 metros. El Mulhacén, en Sierra Nevada, es el más alto de la Península con 3.479, y el Aneto el más alto de los Pirineos.":
    "Teide, on Tenerife, at 3,715 metres. Mulhacén, in the Sierra Nevada, is the highest in the peninsula at 3,479, and Aneto the highest in the Pyrenees.",
  "Los ríos": "The rivers",
  "Los ríos se reparten en tres **vertientes**. La **cantábrica** tiene ríos cortos y caudalosos. La **atlántica** recoge los grandes: el **Tajo**, el más largo de la Península, que desemboca en Lisboa; el **Duero**; el **Guadiana**; y el **Guadalquivir**, el único navegable, hasta Sevilla. La **mediterránea** es la más seca salvo por el **Ebro**, el de mayor caudal de España.":
    "The rivers fall into three **watersheds**. The **Cantabrian** one has short, full rivers. The **Atlantic** one takes the big ones: the **Tagus**, the longest in the peninsula, which reaches the sea at Lisbon; the **Douro**; the **Guadiana**; and the **Guadalquivir**, the only navigable one, as far as Seville. The **Mediterranean** one is the driest apart from the **Ebro**, which carries the most water in Spain.",
  "Que los grandes ríos vayan al Atlántico y desemboquen dos de ellos en Portugal tiene consecuencias prácticas: el agua es un asunto compartido con el país vecino, y el sureste peninsular, el más seco de Europa continental, depende de trasvases y desaladoras.":
    "That the big rivers run to the Atlantic and that two of them reach the sea in Portugal has practical consequences: water is a matter shared with the neighbouring country, and the south-east of the peninsula, the driest part of continental Europe, depends on transfers and desalination plants.",
  "¿Cuál es el río más largo de la Península Ibérica?":
    "Which is the longest river in the Iberian Peninsula?",
  "El Ebro": "The Ebro",
  "El Tajo": "The Tagus",
  "El Duero": "The Douro",
  "El Guadalquivir": "The Guadalquivir",
  "El Tajo, que desemboca en Lisboa. El Ebro es el de mayor caudal y el Guadalquivir el único navegable, hasta Sevilla: tres ríos y tres primeros puestos distintos.":
    "The Tagus, which reaches the sea at Lisbon. The Ebro carries the most water and the Guadalquivir is the only navigable one, as far as Seville: three rivers and three different first places.",
  "Las islas y África": "The islands and Africa",
  "Las **Islas Baleares** están en el Mediterráneo; las **Canarias**, en el Atlántico, frente a la costa africana y a unos mil quinientos kilómetros de la Península. Son de origen **volcánico**, y el volcán sigue activo: la erupción de La Palma de 2021 lo recordó.":
    "The **Balearic Islands** are in the Mediterranean; the **Canaries** are in the Atlantic, off the African coast and some fifteen hundred kilometres from the peninsula. They are of **volcanic** origin, and the volcano is still active: the La Palma eruption of 2021 was a reminder.",
  "**Ceuta** y **Melilla** están en el norte de África y son las **únicas fronteras terrestres** de la Unión Europea con el continente africano. España limita además con **Portugal**, **Francia**, **Andorra** y el territorio británico de **Gibraltar**.":
    "**Ceuta** and **Melilla** are in north Africa and are the European Union's **only land borders** with the African continent. Spain also borders **Portugal**, **France**, **Andorra** and the British territory of **Gibraltar**.",
  "Los climas": "The climates",
  "El clima **mediterráneo** domina la mayor parte, con veranos secos y calurosos. El norte y el noroeste tienen clima **oceánico**, húmedo y templado: es la llamada España verde. El interior conserva el mediterráneo pero **continentalizado**, con más frío y más calor. El sureste es **semiárido** —Almería tiene el único desierto de Europa continental— y las **Canarias** son **subtropicales**, con temperaturas suaves todo el año.":
    "The **Mediterranean** climate covers most of the country, with dry, hot summers. The north and north-west have an **oceanic** climate, damp and mild: this is what is called green Spain. The interior keeps the Mediterranean climate but **continentalised**, colder and hotter by turns. The south-east is **semi-arid** — Almería has continental Europe's only desert — and the **Canaries** are **subtropical**, with mild temperatures all year.",
  "¿Qué tipo de clima tienen las Islas Canarias?": "What kind of climate do the Canary Islands have?",
  "Oceánico": "Oceanic",
  "Continental": "Continental",
  "Subtropical": "Subtropical",
  "Semiárido": "Semi-arid",
  "Subtropical, con temperaturas suaves durante todo el año por su latitud y por la corriente marina. El oceánico corresponde al norte peninsular y el semiárido al sureste.":
    "Subtropical, with mild temperatures all year because of the latitude and the ocean current. The oceanic climate belongs to the north of the peninsula and the semi-arid one to the south-east.",
  "Las Canarias están a unos **mil quinientos kilómetros** de la Península y tienen **una hora menos** que el resto del país. Es la única parte de España en otro huso horario.":
    "The Canaries are some **fifteen hundred kilometres** from the peninsula and are **an hour behind** the rest of the country. It is the only part of Spain in another time zone.",
  // es-lenguas
  "Las lenguas de España": "The languages of Spain",
  "Por qué importa: en España se habla castellano en todas partes y otras cuatro lenguas son oficiales en su territorio. No es una curiosidad regional: está en el artículo 3 y organiza escuelas, administraciones y medios enteros.":
    "Why this matters: Castilian is spoken everywhere in Spain and four other languages are official in their own territory. It is not a regional curiosity: it is in article 3 and it organises whole school systems, administrations and media.",
  "Lo que dice el artículo 3": "What article 3 says",
  "Tiene tres apartados y conviene leerlos juntos. El primero: el **castellano** es la lengua española oficial del Estado, y todos los españoles tienen el **deber de conocerla** y el **derecho a usarla**. El segundo: las **demás lenguas españolas** serán también oficiales en sus comunidades **de acuerdo con sus estatutos**. El tercero: la riqueza de las modalidades lingüísticas es un **patrimonio cultural** objeto de especial respeto y protección.":
    "It has three paragraphs and they are best read together. The first: **Castilian** is the official Spanish language of the State, and all Spaniards have the **duty to know it** and the **right to use it**. The second: the **other Spanish languages** shall also be official in their communities **in accordance with their statutes**. The third: the richness of the linguistic varieties is a **cultural heritage** deserving special respect and protection.",
  "El deber de conocer se predica **solo del castellano**, y esa asimetría es deliberada. La cooficialidad, en cambio, no la decide el Estado en abstracto: la remite a cada estatuto.":
    "The duty to know applies **only to Castilian**, and that asymmetry is deliberate. Co-officiality, by contrast, is not decided by the State in the abstract: it is left to each statute.",
  "Catalán": "Catalan",
  "Oficial en Cataluña y en las Illes Balears, y en la Comunidad Valenciana con la denominación de valenciano que fija su estatuto.":
    "Official in Catalonia and the Balearic Islands, and in the Valencian Community under the name of Valencian that its statute lays down.",
  "Gallego": "Galician",
  "Oficial en Galicia. Comparte origen con el portugués: ambos vienen del galaicoportugués medieval.":
    "Official in Galicia. It shares an origin with Portuguese: both come from medieval Galician-Portuguese.",
  "Euskera": "Basque",
  "Oficial en el País Vasco y en la zona vascófona de Navarra, donde el régimen lingüístico varía por comarcas.":
    "Official in the Basque Country and in the Basque-speaking zone of Navarre, where the language regime varies from district to district.",
  "Aranés": "Aranese",
  "Una variedad del occitano, oficial en toda Cataluña desde 2006 y propia del Valle de Arán, donde lo habla unos pocos miles de personas.":
    "A variety of Occitan, official throughout Catalonia since 2006 and native to the Aran Valley, where a few thousand people speak it.",
  "¿En qué valle se habla el aranés?": "In which valley is Aranese spoken?",
  "En el Valle de Arán": "In the Aran Valley",
  "En el Valle del Roncal": "In the Roncal Valley",
  "En el Valle de Benasque": "In the Benasque Valley",
  "En el Valle de Ansó": "In the Ansó Valley",
  "En el Valle de Arán, en el Pirineo de Lérida, y es una variedad del occitano. Es la lengua oficial con menos hablantes de España, unos pocos miles.":
    "In the Aran Valley, in the Pyrenees of Lleida, and it is a variety of Occitan. It is the official language of Spain with the fewest speakers, a few thousand.",
  "El euskera, aparte": "Basque, apart from the rest",
  "El castellano, el catalán y el gallego vienen del **latín**, como el portugués, el francés o el italiano. El **euskera no**: es una lengua **anterior a la llegada de Roma**, sin parentesco demostrado con ninguna lengua viva. Sobrevivió al latín en un rincón del continente donde todas las demás lenguas prerromanas desaparecieron.":
    "Castilian, Catalan and Galician come from **Latin**, like Portuguese, French or Italian. **Basque does not**: it is a language **older than Rome's arrival**, with no proven kinship to any living language. It survived Latin in a corner of the continent where every other pre-Roman language disappeared.",
  "No tuvo un estándar escrito unificado hasta el siglo XX: el **euskera batua**, fijado desde los años sesenta, es lo que se enseña hoy en la escuela, sobre los distintos dialectos históricos.":
    "It had no unified written standard until the twentieth century: **euskera batua**, settled from the sixties on, is what is taught in schools today, on top of the different historical dialects.",
  "¿Cuál de estas lenguas NO procede del latín?": "Which of these languages does NOT come from Latin?",
  "El catalán": "Catalan",
  "El gallego": "Galician",
  "El euskera": "Basque",
  "El aranés": "Aranese",
  "El euskera es anterior a Roma y no tiene parentesco conocido con ninguna lengua viva. Las otras tres son romances, igual que el castellano.":
    "Basque is older than Rome and has no known kinship with any living language. The other three are Romance, like Castilian.",
  "Lo que se protege sin ser oficial": "What is protected without being official",
  "El tercer apartado del artículo 3 cubre hablas que **no son cooficiales** pero sí objeto de protección: el **asturiano**, llamado también bable, el **aragonés** en el Pirineo, el **leonés**, la **fala** extremeña o el **caló**. Sus estatutos y sus leyes autonómicas les dan grados distintos de reconocimiento, siempre por debajo de la oficialidad.":
    "The third paragraph of article 3 covers forms of speech that are **not co-official** but are still protected: **Asturian**, also called bable, **Aragonese** in the Pyrenees, **Leonese**, the Extremaduran **fala** and **Caló**. Their statutes and regional laws give them varying degrees of recognition, always below official status.",
  "El español fuera de España": "Spanish outside Spain",
  "El español lo hablan alrededor de **seiscientos millones** de personas y es la **segunda lengua materna del mundo** por número de hablantes, después del chino mandarín. La mayoría de ellos no vive en España: el país que más hispanohablantes tiene es **México**.":
    "Spanish is spoken by around **six hundred million** people and is the **world's second native language** by number of speakers, after Mandarin Chinese. Most of them do not live in Spain: the country with the most Spanish speakers is **Mexico**.",
  "Por eso la norma no se decide en Madrid a solas. La **Real Academia Española** trabaja con las **veintidós academias** de América y Filipinas en la **Asociación de Academias de la Lengua Española**, y los diccionarios y gramáticas se publican en común. Es lo que se llama **política panhispánica**. La difusión de la lengua fuera corresponde al **Instituto Cervantes**, que es además quien administra las pruebas para la nacionalidad.":
    "That is why the standard is not settled in Madrid alone. The **Royal Spanish Academy** works with the **twenty-two academies** of America and the Philippines in the **Association of Academies of the Spanish Language**, and dictionaries and grammars are published jointly. This is what is called **pan-Hispanic policy**. Spreading the language abroad falls to the **Instituto Cervantes**, which is also the body that administers the tests for nationality.",
  "¿Qué establece el artículo 3 respecto al castellano?": "What does article 3 establish about Castilian?",
  "Solo el derecho a usarlo": "Only the right to use it",
  "El deber de conocerlo y el derecho a usarlo": "The duty to know it and the right to use it",
  "El deber de conocerlo, sin más": "The duty to know it, and nothing more",
  "Que su uso es voluntario en las comunidades con lengua propia":
    "That its use is optional in communities with their own language",
  "Deber de conocer y derecho a usar, y solo respecto del castellano. Para las demás lenguas oficiales la Constitución remite a los estatutos, sin imponer un deber equivalente.":
    "A duty to know and a right to use, and only for Castilian. For the other official languages the Constitution refers to the statutes, without imposing an equivalent duty.",
  "**Español** y **castellano** designan la misma lengua. La Constitución emplea castellano, precisamente porque las otras lenguas de España también son españolas; en América y en el uso internacional predomina español.":
    "**Spanish** and **Castilian** name the same language. The Constitution uses Castilian, precisely because the other languages of Spain are Spanish too; in America and in international use Spanish predominates.",
  // es-economia-europa
  "La economía y España en Europa": "The economy, and Spain in Europe",
  "Por qué importa: en cuarenta años España pasó de pedir la entrada en Europa a ser una de sus mayores economías. Y arrastra desde entonces un problema que no ha resuelto ningún gobierno: el paro.":
    "Why this matters: in forty years Spain went from asking to join Europe to being one of its largest economies. And it has dragged along since then a problem no government has solved: unemployment.",
  "De qué vive el país": "What the country lives on",
  "Los **servicios** son con diferencia el sector mayor, y dentro de ellos el **turismo**: España está año tras año entre los primeros destinos del mundo por número de visitantes, con la costa, las islas y las ciudades históricas como principales reclamos.":
    "**Services** are by far the largest sector, and within them **tourism**: year after year Spain is among the world's leading destinations by number of visitors, with the coast, the islands and the historic cities as the main draws.",
  "Aceite de oliva": "Olive oil",
  "España es el primer productor mundial, muy por delante del segundo. Jaén sola produce más que países enteros.":
    "Spain is the world's leading producer, well ahead of the second. Jaén alone produces more than entire countries.",
  "Frutas y hortalizas": "Fruit and vegetables",
  "El invernadero de Almería abastece a buena parte de Europa en invierno, y los cítricos valencianos tienen mercado propio.":
    "The greenhouses of Almería supply much of Europe in winter, and Valencian citrus has a market of its own.",
  "Automóvil": "Cars",
  "Uno de los mayores fabricantes de Europa, aunque sin marcas propias: las plantas son de grupos extranjeros.":
    "One of the largest manufacturers in Europe, though with no brands of its own: the plants belong to foreign groups.",
  "Renovables": "Renewables",
  "La eólica y la solar tienen un peso creciente en la generación eléctrica, favorecidas por el viento del interior y las horas de sol.":
    "Wind and solar carry a growing weight in electricity generation, favoured by the wind of the interior and the hours of sunshine.",
  "¿De qué producto es España el primer productor mundial?":
    "Of which product is Spain the world's leading producer?",
  "Del vino": "Wine",
  "Del aceite de oliva": "Olive oil",
  "Del arroz": "Rice",
  "Del azúcar": "Sugar",
  "Del aceite de oliva, con diferencia sobre el segundo. En vino está entre los primeros del mundo por superficie de viñedo, pero no encabeza la producción todos los años.":
    "Olive oil, well ahead of the second. In wine it is among the world's leaders by area of vineyard, but it does not head production every year.",
  "Los problemas de fondo": "The underlying problems",
  "El **paro** es el más persistente. La tasa española ha estado sistemáticamente por encima de la media europea durante décadas, con dos rasgos añadidos: el **desempleo juvenil**, que en las crisis ha llegado a duplicar la tasa general, y la **temporalidad**, la proporción de contratos de duración limitada.":
    "**Unemployment** is the most persistent. The Spanish rate has been consistently above the European average for decades, with two added features: **youth unemployment**, which in crises has reached twice the general rate, and **temporary work**, the share of fixed-term contracts.",
  "El segundo es **territorial**. Buena parte del interior se ha ido despoblando durante generaciones, y a ese fenómeno se lo llama desde hace unos años la **España vaciada**: provincias enteras con menos de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "The second is **territorial**. Much of the interior has been emptying out for generations, and for some years now that has been called **the emptied Spain**: whole provinces with fewer than ten inhabitants per square kilometre, while the coast and the large cities take the growth.",
  "El tercero es **demográfico**: la natalidad es de las más bajas de Europa y la esperanza de vida de las más altas del mundo, una combinación que tensiona el sistema de pensiones a largo plazo.":
    "The third is **demographic**: the birth rate is among the lowest in Europe and life expectancy among the highest in the world, a combination that strains the pension system in the long run.",
  "¿Qué se conoce como la España vaciada?": "What is known as the emptied Spain?",
  "Las ciudades que perdieron población en la crisis de 2008":
    "The cities that lost population in the 2008 crisis",
  "Las zonas del interior que llevan generaciones despoblándose":
    "The inland areas that have been emptying out for generations",
  "Los pueblos abandonados tras la Guerra Civil": "The villages abandoned after the Civil War",
  "Las comarcas sin cobertura de internet": "The districts with no internet coverage",
  "Provincias enteras del interior con densidades por debajo de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "Whole inland provinces with densities below ten inhabitants per square kilometre, while the coast and the large cities take the growth.",
  "España en Europa": "Spain in Europe",
  "La entrada en la **Comunidad Económica Europea** el **1 de enero de 1986**, junto con Portugal, fue el mayor cambio económico del periodo democrático. Los **fondos estructurales y de cohesión** financiaron carreteras, depuradoras, universidades y trenes, y el mercado único reorientó el comercio exterior hacia Europa.":
    "Joining the **European Economic Community** on **1 January 1986**, together with Portugal, was the greatest economic change of the democratic period. The **structural and cohesion funds** paid for roads, water treatment plants, universities and trains, and the single market turned foreign trade towards Europe.",
  "España forma parte del **euro** desde su creación, del espacio **Schengen**, y está en la **OTAN** desde **1982**, confirmada por el referéndum de 1986. En la **ONU** entró en **1955**.":
    "Spain has been part of the **euro** since it was created, of the **Schengen** area, and has been in **NATO** since **1982**, confirmed by the referendum of 1986. It joined the **UN** in **1955**.",
  "El vínculo iberoamericano": "The Ibero-American tie",
  "Con América Latina el vínculo es lingüístico y también institucional: las **Cumbres Iberoamericanas** reúnen periódicamente a los jefes de Estado y de Gobierno, y existen organismos comunes en educación y cultura. Ese vínculo se refleja también en la ley: los nacionales de países iberoamericanos pueden pedir la nacionalidad tras **dos años** de residencia en lugar de diez.":
    "With Latin America the tie is linguistic and institutional as well: the **Ibero-American Summits** bring heads of state and government together at intervals, and there are joint bodies in education and culture. That tie shows in the law too: nationals of Ibero-American countries can apply for nationality after **two years** of residence instead of ten.",
  "Y el flujo se ha invertido. El país del que salieron millones de emigrantes en el siglo XX cuenta hoy con varios millones de **residentes extranjeros**, procedentes sobre todo de América Latina, Europa del Este, Marruecos y la propia Unión Europea.":
    "And the flow has reversed. The country millions of emigrants left in the twentieth century now has several million **foreign residents**, from Latin America, eastern Europe, Morocco and the European Union itself above all.",
  "¿En qué año entró España en la OTAN?": "In what year did Spain join NATO?",
  "En 1975": "In 1975",
  "En 1982, y la permanencia se confirmó en el referéndum de 1986, el mismo año de la entrada en la Comunidad Económica Europea. Son dos hechos distintos que suelen juntarse.":
    "In 1982, and staying in was confirmed by the referendum of 1986, the same year Spain joined the European Economic Community. They are two different events that are often run together.",
  "La entrada en la CEE **no** se sometió a referéndum: fue un tratado ratificado por las Cortes. Lo que se votó en 1986 fue la **permanencia en la OTAN**, y esa consulta sí fue un referéndum.":
    "Joining the EEC was **not** put to a referendum: it was a treaty ratified by the Cortes. What was voted on in 1986 was **staying in NATO**, and that consultation was a referendum.",
  // chapter
  "Sociedad y vida cotidiana": "Society and everyday life",
  // es-trabajo
  "Trabajo, contratos y Seguridad Social": "Work, contracts and social security",
  "Por qué importa: la nómina española tiene dos cifras muy distintas arriba y abajo, y entender qué pasa entre una y otra explica cómo se financian la sanidad, el paro y las pensiones.":
    "Why this matters: a Spanish payslip has two very different figures at the top and the bottom, and understanding what happens between them explains how health care, unemployment benefit and pensions are paid for.",
  "Lo que dice la Constitución": "What the Constitution says",
  "El **artículo 35** reconoce el **deber y el derecho** al trabajo, a la libre elección de profesión y a una remuneración suficiente. El **artículo 28** garantiza la **libertad sindical** y el **derecho de huelga**; el **37**, la **negociación colectiva**; y el **41** obliga a mantener un régimen público de **Seguridad Social** para todos los ciudadanos.":
    "**Article 35** recognises the **duty and the right** to work, to the free choice of a profession and to sufficient pay. **Article 28** guarantees **freedom of association in trade unions** and the **right to strike**; **article 37**, **collective bargaining**; and **article 41** requires a public **social security** system to be maintained for all citizens.",
  "La norma que lo desarrolla es el **Estatuto de los Trabajadores**, y por debajo de él están los **convenios colectivos**, que pueden ser de sector o de empresa y mejorar siempre lo que la ley fija como mínimo.":
    "The statute that gives effect to this is the **Workers' Statute**, and below it come the **collective agreements**, which may be by sector or by company and can always improve on what the law sets as a minimum.",
  "El salario mínimo": "The minimum wage",
  "España **sí tiene un salario mínimo legal**: el **salario mínimo interprofesional**, que el **Gobierno fija cada año** por real decreto, previa consulta a sindicatos y organizaciones empresariales. Se expresa por día, por mes y por año, y se refiere a la jornada completa.":
    "Spain **does have a statutory minimum wage**: the **interprofessional minimum wage**, which the **Government sets each year** by royal decree, after consulting the unions and employers' organisations. It is expressed per day, per month and per year, and refers to a full-time job.",
  "Es una diferencia real con otros países del sur de Europa, donde los mínimos solo existen dentro de los convenios. Aquí el convenio puede subir el suelo, nunca bajarlo.":
    "It is a real difference from other southern European countries, where minimums exist only inside collective agreements. Here an agreement can raise the floor, never lower it.",
  "¿Quién fija el salario mínimo en España?": "Who sets the minimum wage in Spain?",
  "Cada convenio colectivo, sector por sector": "Each collective agreement, sector by sector",
  "El Gobierno, cada año, por real decreto": "The Government, each year, by royal decree",
  "No existe salario mínimo legal": "There is no statutory minimum wage",
  "El salario mínimo interprofesional lo fija el Gobierno previa consulta a sindicatos y empresarios. Los convenios pueden mejorarlo pero nunca quedar por debajo.":
    "The interprofessional minimum wage is set by the Government after consulting unions and employers. Agreements can improve on it but never fall below.",
  "El contrato y la jornada": "The contract and working hours",
  "Indefinido": "Permanent",
  "Sin fecha de fin. Es la forma de referencia desde la reforma de 2021, que restringió el uso del contrato temporal.":
    "With no end date. It has been the reference form since the 2021 reform, which restricted the use of temporary contracts.",
  "Temporal": "Temporary",
  "Solo por causas tasadas: circunstancias de la producción o sustitución de una persona con derecho a reserva del puesto.":
    "Only on listed grounds: circumstances of production, or replacing somebody entitled to keep their post.",
  "Fijo discontinuo": "Permanent seasonal",
  "Indefinido pero para trabajos estacionales o intermitentes. Se llama a la persona cada temporada.":
    "Permanent but for seasonal or intermittent work. The person is called back each season.",
  "Autónomo": "Self-employed",
  "No es un contrato sino un régimen: se factura, y se pagan por cuenta propia impuestos y cotización.":
    "Not a contract but a regime: you invoice, and pay your own taxes and contributions.",
  "La **jornada máxima** es de **cuarenta horas semanales** de promedio en cómputo anual, y las **vacaciones** mínimas son de **treinta días naturales** al año, que no pueden sustituirse por dinero. Las horas extraordinarias tienen tope legal.":
    "The **maximum working week** is **forty hours** on average over the year, and minimum **holiday** is **thirty calendar days** a year, which cannot be replaced by money. Overtime has a legal ceiling.",
  "¿Cuántos días de vacaciones al año garantiza como mínimo la ley?":
    "How many days of holiday a year does the law guarantee as a minimum?",
  "Veintiuno naturales": "Twenty-one calendar days",
  "Veintidós hábiles o treinta naturales": "Twenty-two working days or thirty calendar days",
  "Cuarenta y cinco naturales": "Forty-five calendar days",
  "Los que fije cada empresa": "Whatever each company sets",
  // es-trabajo
  "Treinta días naturales, que equivalen a los veintidós hábiles con que suelen contarse. No pueden cambiarse por dinero: el descanso es obligatorio.":
    "Thirty calendar days, which come to the twenty-two working days they are usually counted in. They cannot be exchanged for money: the rest is compulsory.",
  "La nómina": "The payslip",
  "Entre el **bruto** y el **neto** hay dos descuentos. Las **cotizaciones a la Seguridad Social**, que la persona paga en parte y la empresa en parte mucho mayor, y la **retención del IRPF**, un adelanto del impuesto sobre la renta que se ajusta al año siguiente en la **declaración**.":
    "Between **gross** and **net** there are two deductions. **Social security contributions**, which the person pays in part and the company in a far larger part, and the **IRPF withholding**, an advance on income tax that is settled the following year in the **tax return**.",
  "Son habituales **dos pagas extraordinarias**, en junio y en diciembre, que muchos convenios permiten **prorratear** en las doce mensualidades. Al terminar un contrato se recibe el **finiquito**, con lo pendiente de vacaciones y pagas, y en algunos despidos una **indemnización** aparte.":
    "**Two extra payments** are usual, in June and December, which many agreements allow to be **spread** across the twelve months. At the end of a contract you receive the **finiquito**, the final settlement, with outstanding holiday and extra pay, and in some dismissals a separate **severance payment**.",
  "La Seguridad Social": "Social security",
  "Todo trabajador tiene un **número de afiliación** que le acompaña toda la vida. Hay dos grandes regímenes: el **general**, para quien trabaja por cuenta ajena, y el **RETA**, el régimen especial de **trabajadores autónomos**, para quien lo hace por cuenta propia.":
    "Every worker has an **affiliation number** that stays with them for life. There are two large regimes: the **general** one, for employees, and **RETA**, the special regime for the **self-employed**, for those working on their own account.",
  "De ahí salen las prestaciones: **desempleo** —que gestiona el **SEPE** y exige haber cotizado un mínimo—, **incapacidad temporal**, **nacimiento y cuidado de menor**, y la **jubilación**. El documento que resume todo lo cotizado se llama **vida laboral** y puede pedirse en cualquier momento.":
    "From there come the benefits: **unemployment** — run by the **SEPE** and requiring a minimum of contributions — **temporary incapacity**, **birth and childcare**, and the **retirement pension**. The document summarising everything contributed is called the **vida laboral**, the working life record, and can be requested at any time.",
  "¿Qué es el RETA?": "What is RETA?",
  "El registro de contratos temporales": "The register of temporary contracts",
  "El régimen especial de trabajadores autónomos":
    "The special social security regime for the self-employed",
  "La retención del IRPF en la nómina": "The IRPF withholding on the payslip",
  "El fondo de garantía salarial": "The wage guarantee fund",
  "Es el régimen de la Seguridad Social para quien trabaja por cuenta propia, frente al régimen general de quien lo hace por cuenta ajena.":
    "It is the social security regime for people working on their own account, as against the general regime for employees.",
  "**Finiquito** e **indemnización** no son lo mismo. El finiquito se cobra siempre al terminar y liquida lo pendiente; la indemnización solo corresponde en determinados despidos, y se suma al finiquito.":
    "**Finiquito** and **severance payment** are not the same thing. The finiquito is always paid at the end and settles what is outstanding; severance is due only in certain dismissals, and is added to the finiquito.",
  // es-sanidad-educacion
  "Sanidad y educación": "Health and education",
  "Por qué importa: los dos servicios que más se usan viviendo en un país. Los dos son públicos y universales, y los dos los gestionan las comunidades, no el Estado: eso explica que no funcionen igual en todas partes.":
    "Why this matters: the two services most used when living in a country. Both are public and universal, and both are run by the communities rather than by the State: that is why they do not work the same everywhere.",
  "El Sistema Nacional de Salud": "The National Health System",
  "El **artículo 43** reconoce el derecho a la protección de la salud. El **Sistema Nacional de Salud** es **universal** y se financia con **impuestos**, no con un seguro: no hay primas ni cuotas mensuales. La gestión corresponde a las **comunidades autónomas**, y el Estado fija las bases y coordina.":
    "**Article 43** recognises the right to the protection of health. The **National Health System** is **universal** and funded by **taxes**, not by insurance: there are no premiums or monthly fees. Management belongs to the **autonomous communities**, and the State sets the framework and coordinates.",
  "La puerta de entrada es el **centro de salud** y el **médico de familia**, que atiende, receta y **deriva** al especialista. A urgencias se puede acudir directamente, y para las emergencias hay un número único en toda España y en toda Europa: el **112**.":
    "The way in is the **health centre** and the **family doctor**, who treats, prescribes and **refers** you to a specialist. You can go straight to accident and emergency, and for emergencies there is a single number across Spain and across Europe: **112**.",
  "La tarjeta sanitaria": "The health card",
  "Individual y emitida por la comunidad. Es lo que identifica a la persona ante el sistema; cambia si se cambia de comunidad.":
    "Individual and issued by the community. It is what identifies a person to the system; it changes if you move to another community.",
  "La receta electrónica": "The electronic prescription",
  "El médico prescribe en el sistema y la farmacia lee la tarjeta. Ya casi no se usa el papel.":
    "The doctor prescribes in the system and the pharmacy reads the card. Paper is hardly used any more.",
  "El copago farmacéutico": "The prescription charge",
  "Una parte del precio del medicamento a cargo del paciente, en porcentaje según la renta. Los pensionistas tienen topes mensuales.":
    "A share of the price of a medicine borne by the patient, as a percentage according to income. Pensioners have monthly caps.",
  "Las farmacias": "The pharmacies",
  "Establecimientos privados con licencia y horarios regulados. Siempre hay una de guardia abierta en cada zona.":
    "Private establishments with a licence and regulated opening hours. There is always one on duty and open in every area.",
  "¿Qué número se marca en España para una emergencia?":
    "What number do you dial in Spain for an emergency?",
  "El 091": "091",
  "El 112": "112",
  "El 061": "061",
  "El 080": "080",
  "El 112 es el número único de emergencias en toda España y en toda la Unión Europea, y coordina policía, bomberos y ambulancias. Los otros son teléfonos de servicios concretos.":
    "112 is the single emergency number across Spain and the whole European Union, and it coordinates police, fire brigade and ambulances. The others are numbers for particular services.",
  "La escuela": "School",
  "El **artículo 27** reconoce el derecho a la educación y declara la enseñanza básica **obligatoria y gratuita**. La obligatoriedad va de los **seis a los dieciséis años**, y también aquí gestionan las comunidades sobre unas bases estatales comunes.":
    "**Article 27** recognises the right to education and declares basic schooling **compulsory and free**. It is compulsory from **six to sixteen**, and here too the communities run it on common state foundations.",
  "Infantil · 0 a 6": "Nursery · 0 to 6",
  "No obligatoria. El segundo ciclo, de tres a seis años, es gratuito y lo cursa la práctica totalidad de los niños.":
    "Not compulsory. The second cycle, from three to six, is free and virtually every child attends it.",
  "Primaria · 6 a 12": "Primary · 6 to 12",
  "Seis cursos, obligatoria. Es lo que en la conversación se sigue llamando el colegio.":
    "Six years, compulsory. It is what people still call el colegio in conversation.",
  "ESO · 12 a 16": "ESO · 12 to 16",
  "Cuatro cursos de Educación Secundaria Obligatoria. Al superarla se obtiene el título de Graduado en ESO.":
    "Four years of compulsory secondary education. Passing it earns the ESO graduate certificate.",
  "Bachillerato o FP · 16 a 18": "Bachillerato or vocational training · 16 to 18",
  "Dos años de Bachillerato, o Formación Profesional de grado medio. Ninguna de las dos es obligatoria.":
    "Two years of Bachillerato, or intermediate vocational training. Neither of the two is compulsory.",
  "Para entrar en la universidad hay que superar el Bachillerato y una prueba de acceso, conocida durante décadas como **selectividad** y hoy con siglas que han ido cambiando. La universidad se organiza en **grado**, de cuatro años en la mayoría de las carreras, **máster** y **doctorado**.":
    "To enter university you must pass the Bachillerato and an entrance exam, known for decades as **selectividad** and now under initials that have kept changing. University is organised into a **grado**, four years for most subjects, a **máster** and a **doctorado**.",
  "¿Qué título se obtiene al terminar la enseñanza obligatoria?":
    "What qualification do you get at the end of compulsory education?",
  "El Bachillerato": "The Bachillerato",
  "El Graduado en ESO": "The ESO graduate certificate",
  "El certificado de escolaridad": "A school attendance certificate",
  "El grado universitario": "A university degree",
  "El título de Graduado en Educación Secundaria Obligatoria, a los dieciséis años. El Bachillerato son dos cursos posteriores y no es obligatorio.":
    "The certificate of Graduate in Compulsory Secondary Education, at sixteen. The Bachillerato is two later years and is not compulsory.",
  "Tres tipos de centro": "Three kinds of school",
  "Los centros son **públicos**, **privados** o **concertados**. El **concertado** es la figura característica de España: un centro de titularidad **privada** —a menudo religiosa— sostenido con **fondos públicos** mediante un concierto, que a cambio no puede cobrar por la enseñanza en las etapas concertadas. Escolariza a una parte grande del alumnado, sobre todo en las ciudades.":
    "Schools are **public**, **private** or **concertado**. The **concertado** is the characteristic Spanish figure: a **privately** owned school — often religious — supported with **public funds** under an agreement, which in exchange cannot charge for teaching in the covered stages. It educates a large share of pupils, especially in the cities.",
  "Las calificaciones van de **cero a diez**, y se aprueba a partir del **cinco**. En la universidad la escala es la misma, con la mención de **matrícula de honor** para las mejores notas.":
    "Marks run from **zero to ten**, and five is a pass. At university the scale is the same, with the mention of **matrícula de honor** for the best marks.",
  "¿Qué es un centro concertado?": "What is a concertado school?",
  "Un centro público con horario ampliado": "A state school with extended hours",
  "Un centro privado sostenido con fondos públicos": "A private school supported with public funds",
  "Un centro que solo imparte Formación Profesional": "A school that only teaches vocational training",
  "Un centro para alumnos con necesidades especiales": "A school for pupils with special needs",
  "De titularidad privada y financiación pública mediante concierto, y por eso no puede cobrar por la enseñanza en las etapas concertadas. Es una figura característica del sistema español.":
    "Privately owned and publicly funded under an agreement, which is why it cannot charge for teaching in the covered stages. It is a characteristic figure of the Spanish system.",
  "La **tarjeta sanitaria** la emite la comunidad autónoma, no el Estado: al mudarse de comunidad hay que **cambiar de tarjeta y de médico**. La atención está garantizada en toda España, pero el trámite es autonómico.":
    "The **health card** is issued by the autonomous community, not by the State: on moving to another community you have to **change card and doctor**. Care is guaranteed throughout Spain, but the paperwork is regional.",
  // es-vivir-en-espana
  "Vivir en España": "Living in Spain",
  "Por qué importa: esta es la lección práctica. Ninguna de las pruebas que aquí se mencionan versa sobre historia, y este curso no prepara para ninguna de ellas: sirven para saber qué pide el Estado, y a quién.":
    "Why this matters: this is the practical lesson. None of the tests mentioned here is about history, and this course does not prepare you for any of them: they are here so you know what the State asks, and of whom.",
  "El padrón, primero": "The padrón, first of all",
  "El **empadronamiento** es la inscripción en el **padrón municipal** del ayuntamiento donde se vive. Es el trámite del que dependen casi todos los demás: la **tarjeta sanitaria**, la **escolarización** de los hijos, las ayudas municipales y, para los ciudadanos de la Unión, el voto en las **municipales**.":
    "**Empadronamiento** is registration on the **padrón**, the municipal roll of the town hall where you live. It is the step almost everything else depends on: the **health card**, **school places** for children, municipal support and, for citizens of the Union, the vote in **local** elections.",
  "Tiene una particularidad que conviene conocer: el padrón registra **dónde vive** una persona, no su situación administrativa, y puede empadronarse **con independencia** de ella. El certificado de empadronamiento acredita además el tiempo de residencia, que es lo que después cuentan otros expedientes.":
    "It has a peculiarity worth knowing: the roll records **where a person lives**, not their administrative status, and you can register **regardless** of it. The padrón certificate also proves how long you have been resident, which is what other files later count.",
  "Los documentos": "The documents",
  "DNI": "DNI",
  "El documento nacional de identidad de los españoles, obligatorio desde los catorce años.":
    "The national identity document of Spanish citizens, compulsory from the age of fourteen.",
  "NIE": "NIE",
  "El número de identidad de extranjero. No es una tarjeta sino un número, y hace falta para trabajar, abrir una cuenta o firmar un contrato.":
    "The foreigner's identity number. It is not a card but a number, and it is needed to work, open an account or sign a contract.",
  "TIE": "TIE",
  "La tarjeta de identidad de extranjero: el documento físico que acredita la autorización de residencia y lleva el NIE.":
    "The foreigner's identity card: the physical document that proves the residence authorisation and carries the NIE.",
  "Número de la Seguridad Social": "Social security number",
  "Necesario para ser dado de alta en un empleo. Es distinto del NIE y no lo sustituye.":
    "Needed to be registered in a job. It is different from the NIE and does not replace it.",
  "Los ciudadanos de la **Unión Europea** no necesitan permiso de residencia: se inscriben en el Registro Central de Extranjeros y obtienen un **certificado de registro**, que es un trámite más ligero.":
    "Citizens of the **European Union** need no residence permit: they enter the Central Register of Foreigners and receive a **registration certificate**, which is a lighter procedure.",
  "¿Qué es el empadronamiento?": "What is empadronamiento?",
  "La inscripción en el padrón municipal del lugar donde se vive":
    "Registration on the municipal roll of the place where you live",
  "El permiso de residencia": "The residence permit",
  "El alta en la Seguridad Social": "Registration with social security",
  "La declaración anual de la renta": "The annual tax return",
  "Es un registro del ayuntamiento sobre quién vive en el municipio. De él dependen la tarjeta sanitaria, la escolarización y el certificado que acredita el tiempo de residencia.":
    "It is the town hall padrón, the record of who lives in the municipality. The health card, school places and the certificate proving length of residence all depend on it.",
  "La residencia": "Residence",
  "Las autorizaciones de residencia y trabajo son **temporales** al principio y se renuevan. Existen además figuras de **arraigo** —social, laboral, familiar o para la formación— pensadas para quien lleva ya tiempo en el país y acredita vínculos.":
    "Residence and work authorisations are **temporary** at first and are renewed. There are also forms of **arraigo**, rootedness — social, employment, family or for training — designed for people who have already been in the country for some time and can show ties.",
  "Tras **cinco años** de residencia legal y continuada puede solicitarse la **residencia de larga duración**, que autoriza a residir y trabajar de forma indefinida en las mismas condiciones que los españoles, salvo en lo que la ley reserva a la nacionalidad, como el voto en las generales.":
    "After **five years** of lawful, continuous residence you can apply for **long-term residence**, which allows you to live and work indefinitely on the same terms as Spaniards, except in what the law reserves to nationality, such as voting in general elections.",
  "¿Cuántos años de residencia legal se exigen para la residencia de larga duración?":
    "How many years of lawful residence are required for long-term residence?",
  "Tres": "Three",
  "Cinco años, y autoriza a residir y trabajar indefinidamente. Diez es el plazo general para pedir la nacionalidad, que es un paso distinto y posterior.":
    "Five years, and it allows you to live and work indefinitely. Ten is the general period for applying for nationality, which is a different and later step.",
  "Los trámites de cada día": "Everyday paperwork",
  "Buena parte de la Administración se hace ya por internet, y para ello hace falta una **identidad digital**: el sistema **Cl@ve** o un **certificado digital**. Con ellos se pide cita en la Seguridad Social, se descarga la vida laboral, se presenta la declaración de la renta o se consulta un expediente.":
    "Much of the administration is now done online, and that needs a **digital identity**: the **Cl@ve** system or a **digital certificate**. With them you book an appointment at social security, download your working life record, file your tax return or check a case file.",
  "La **declaración de la renta** se presenta cada año ante la **Agencia Tributaria**, normalmente entre abril y junio, y regulariza lo que ya se fue reteniendo en la nómina: puede salir a pagar o a devolver.":
    "The **tax return** is filed each year with the **Tax Agency**, normally between April and June, and settles what was already withheld from the payslip: it can end in a payment or a refund.",
  "La nacionalidad": "Nationality",
  "El expediente se tramita ante el **Ministerio de Justicia**. Además del plazo de residencia que corresponda, se exigen **buena conducta cívica** y acreditar la **integración** con las dos pruebas del **Instituto Cervantes**: el **DELE A2** de lengua —del que están exentos los nacionales de países hispanohablantes— y la **CCSE**, de conocimientos constitucionales y socioculturales.":
    "The file is handled by the **Ministry of Justice**. Besides whichever period of residence applies, **good civic conduct** is required and **integration** must be shown with the two **Instituto Cervantes** tests: the **DELE A2** language test — from which nationals of Spanish-speaking countries are exempt — and the **CCSE**, on constitutional and sociocultural knowledge.",
  "Concedida la nacionalidad, se cierra con un acto formal: **jurar o prometer fidelidad al Rey y obediencia a la Constitución y a las leyes**, y la inscripción en el Registro Civil.":
    "Once nationality is granted it closes with a formal act: **swearing or promising loyalty to the King and obedience to the Constitution and the laws**, and registration in the Civil Register.",
  "¿Qué número identifica a un extranjero en España para trabajar o firmar un contrato?":
    "Which number identifies a foreigner in Spain for working or signing a contract?",
  "El DNI": "The DNI",
  "El NIE": "The NIE",
  "El número de la Seguridad Social": "The social security number",
  "El número de pasaporte": "The passport number",
  "El número de identidad de extranjero. La TIE es la tarjeta física que lo lleva impreso, y el número de la Seguridad Social es otro distinto, necesario además para el alta laboral.":
    "The foreigner's identity number. The TIE is the physical card it is printed on, and the social security number is a different one, also needed to be registered in a job.",
  "**Residencia** y **nacionalidad** son dos cosas distintas y dos expedientes distintos. La residencia de larga duración se pide a los cinco años ante Extranjería; la nacionalidad, con el plazo que corresponda, ante el Ministerio de Justicia.":
    "**Residence** and **nationality** are two different things and two different files. Long-term residence is applied for after five years at the immigration office; nationality, with whatever period applies, at the Ministry of Justice.",
  // es-vida-cotidiana
  "La vida diaria": "Daily life",
  "Por qué se cierra aquí: los horarios españoles desconciertan a casi todo el que llega, y las reglas de trato no están escritas en ninguna parte. Ninguna de estas cosas es obligatoria; todas son reales.":
    "Why we close here: Spanish hours baffle almost everybody who arrives, and the rules of how people treat each other are written down nowhere. None of these things is compulsory; all of them are real.",
  "El reloj": "The clock",
  "España come y cena **más tarde** que casi toda Europa: la **comida** entre las dos y las tres, la **cena** a partir de las nueve, más tarde en verano y en el sur. El desayuno es ligero —café con leche y una tostada— y a media mañana mucha gente hace un segundo desayuno, el **almuerzo**.":
    "Spain eats lunch and dinner **later** than almost all of Europe: **lunch** between two and three, **dinner** from nine onwards, later in summer and in the south. Breakfast is light — white coffee and a piece of toast — and in mid-morning many people have a second breakfast, the **almuerzo**.",
  "Una parte de la explicación está en el huso horario: España peninsular usa la hora de Europa central pese a estar a la longitud de Londres, de modo que el sol se pone más tarde de lo que marca el reloj. La otra parte es costumbre heredada.":
    "Part of the explanation is the time zone: peninsular Spain uses central European time although it lies at the longitude of London, so the sun sets later than the clock suggests. The other part is inherited habit.",
  "Muchos comercios pequeños y oficinas cierran a mediodía y reabren por la tarde: es la **jornada partida**, más común cuanto más pequeño es el municipio. La **siesta** existe, pero como costumbre de fin de semana o de verano más que como práctica diaria.":
    "Many small shops and offices close at midday and reopen in the afternoon: this is the **jornada partida**, the split day, and it is more common the smaller the town. The **siesta** exists, but as a weekend or summer habit rather than a daily practice.",
  "¿A qué hora se cena habitualmente en España?": "At what time do people usually have dinner in Spain?",
  "Entre las siete y las ocho": "Between seven and eight",
  "A partir de las nueve": "From nine onwards",
  "Entre las seis y las siete": "Between six and seven",
  "Después de medianoche": "After midnight",
  "A partir de las nueve, y más tarde en verano y en el sur. La comida principal del día es la del mediodía, entre las dos y las tres.":
    "From nine onwards, and later in summer and in the south. The main meal of the day is the midday one, between two and three.",
  "La mesa": "The table",
  "El **menú del día** es una institución: en la mayoría de los restaurantes, al mediodía y entre semana, se ofrece primer plato, segundo, pan, bebida y postre o café a **precio fijo**. Nació de una norma de los años sesenta pensada para el turismo y se quedó como costumbre.":
    "The **menú del día** is an institution: in most restaurants, at midday and on weekdays, you get a first course, a second, bread, a drink and dessert or coffee at a **fixed price**. It came out of a rule from the sixties aimed at tourism and stayed as a custom.",
  "Fuera de las comidas está el **tapeo**: ir de bar en bar tomando algo pequeño con la bebida. En algunas ciudades la tapa se sirve **incluida** con la consumición y en otras se paga aparte. Y después de comer viene la **sobremesa**, el rato de conversación con la mesa ya recogida, que puede durar más que la comida.":
    "Outside mealtimes there is **tapeo**: going from bar to bar having something small with your drink. In some cities the tapa comes **included** with the drink and in others it is paid for separately. And after eating comes the **sobremesa**, the stretch of conversation with the table already cleared, which can last longer than the meal.",
  "¿Qué es el menú del día?": "What is the menú del día?",
  "La carta completa del restaurante": "The restaurant's full à la carte menu",
  "Una comida completa a precio fijo, al mediodía y entre semana":
    "A complete meal at a fixed price, at midday on weekdays",
  "El plato recomendado por el cocinero": "The chef's recommended dish",
  "Un servicio reservado a los turistas": "A service reserved for tourists",
  "Primer plato, segundo, pan, bebida y postre o café por un precio único. Nació de una norma de los años sesenta y se quedó como costumbre del país.":
    "A first course, a second, bread, a drink and dessert or coffee for a single price. It came out of a rule from the sixties and stayed as a custom of the country.",
  "El trato": "How people address each other",
  "El **tuteo** está mucho más extendido en España que en otros países de lengua española. Se tutea a compañeros de trabajo, a camareros, a dependientes y con frecuencia a desconocidos de edad parecida. El **usted** se reserva para personas mayores, para contextos muy formales y para dirigirse a alguien de quien se quiere marcar distancia o respeto especial.":
    "**Tú** is far more widespread in Spain than in other Spanish-speaking countries. It is used with colleagues, with waiters, with shop assistants and often with strangers of a similar age. **Usted** is kept for older people, for very formal settings and for addressing somebody where distance or particular respect is meant.",
  "El saludo habitual entre conocidos, y en presentaciones informales, son **dos besos** en la mejilla, empezando por la izquierda de quien saluda. Entre hombres suele ser un apretón de manos o un abrazo. En contextos profesionales la mano es lo normal.":
    "The usual greeting between people who know each other, and at informal introductions, is **two kisses** on the cheek, starting on the left of the person greeting. Between men it is usually a handshake or an embrace. In professional settings a handshake is the norm.",
  "¿Cómo se saluda habitualmente entre conocidos en una situación informal?":
    "How do people who know each other usually greet in an informal situation?",
  "Con una inclinación": "With a bow",
  "Con dos besos en la mejilla": "With two kisses on the cheek",
  "Sin contacto físico": "With no physical contact",
  "Con tres besos": "With three kisses",
  "Dos besos, empezando por la izquierda de quien saluda. Entre hombres es más común el apretón de manos o el abrazo, y en el trabajo la mano es lo habitual.":
    "Two kisses, starting on the left of the person greeting. Between men a handshake or an embrace is more common, and at work a handshake is usual.",
  "La calle y la casa": "The street and the home",
  "La vida social ocurre mucho **fuera de casa**: en el bar del barrio, en la terraza, en la plaza. Es una consecuencia práctica del clima y de las viviendas, en su mayoría **pisos** en edificios y no casas individuales. La **propiedad** está muy extendida: la proporción de hogares en vivienda propia es de las más altas de Europa, aunque el alquiler crece entre los jóvenes.":
    "Social life happens largely **outside the home**: in the neighbourhood bar, on the terrace, in the square. It is a practical consequence of the climate and of the housing, mostly **flats** in blocks rather than individual houses. **Ownership** is very widespread: the share of households in their own home is among the highest in Europe, though renting is growing among the young.",
  "La familia sigue siendo muy cercana en el trato y en la práctica, y los jóvenes se **independizan tarde**, más que en casi toda Europa, por razones sobre todo económicas.":
    "The family stays very close in habit and in practice, and young people **leave home late**, later than in almost all of Europe, for reasons that are above all economic.",
  "El deporte": "Sport",
  "El **fútbol** ocupa la conversación de agosto a mayo, con **LaLiga** y el partido entre los dos grandes clubes que se llama simplemente **el clásico**. La selección se conoce como **la Roja**. Después vienen el **baloncesto**, el **ciclismo** con la **Vuelta a España** cada septiembre, el **tenis** y el **motociclismo**, disciplinas en las que el país lleva décadas dando campeones.":
    "**Football** fills the conversation from August to May, with **LaLiga** and the match between the two big clubs known simply as **el clásico**. The national team is called **la Roja**. After it come **basketball**, **cycling** with the **Vuelta a España** each September, **tennis** and **motorcycling**, disciplines in which the country has been producing champions for decades.",
  "Los horarios están cambiando, y en las grandes ciudades muchos comercios ya no cierran a mediodía. Estas costumbres describen una tendencia general, no una regla que valga en todas partes ni para todo el mundo.":
    "Hours are changing, and in the big cities many shops no longer close at midday. These customs describe a general tendency, not a rule that holds everywhere or for everybody.",
};
