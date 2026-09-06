/**
 * German for the Vivir en España course cards, headings and questions.
 *
 * Keyed on the SPANISH source text exactly as it appears in
 * vivirEnEspanaCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but check-es-translations fails
 * on a key that matches nothing in the course, because a typo there is silent
 * otherwise: the card renders, the tap works, and the reader is told there is
 * no translation for a card that was in fact translated.
 *
 * Like the Russian, Polish and Italian tables and unlike the three older
 * ones, this covers the QUIZZES as well. With this one every country course
 * can be read in German.
 *
 * WHAT STAYS SPANISH. Institutions in the German form where one is
 * established — the Congreso de los Diputados is the Abgeordnetenkongress,
 * the Tribunal Constitucional the Verfassungsgericht. Where a word is the
 * answer itself and has no German equivalent — the Cortes Generales, the
 * comunidad autónoma, the NIE, the empadronamiento — the German gives the
 * meaning and keeps the Spanish word beside it, so the reader learns the term
 * they will actually meet at the counter.
 */
export const VIVIR_EN_ESPANA_DE: Record<string, string> = {
  // ── Course line, chapters and lesson titles ─────────────────────────────
  // The course NAME is absent on purpose: it is an interface string and
  // already goes through the i18n tables.
  "Historia, instituciones y vida diaria: cómo funciona el país.":
    "Geschichte, Institutionen und Alltag: wie dieses Land funktioniert.",

  "Símbolos y Constitución": "Symbole und Verfassung",
  "Las instituciones del Estado": "Die Institutionen des Staates",
  "Historia de España": "Geschichte Spaniens",
  "El Estado autonómico, el territorio y las lenguas":
    "Der Autonomiestaat, das Land und die Sprachen",
  "Sociedad y vida cotidiana": "Gesellschaft und Alltag",

  "Símbolos nacionales": "Nationale Symbole",
  "La Constitución de 1978": "Die Verfassung von 1978",
  "Derechos y libertades fundamentales": "Grundrechte und Grundfreiheiten",
  "Deberes de los ciudadanos y la nacionalidad":
    "Pflichten der Bürgerinnen und Bürger und die Staatsangehörigkeit",
  "Fiestas y calendario": "Feiertage und Kalender",

  "La Corona": "Die Krone",
  "Las Cortes Generales": "Die Cortes Generales",
  "El Gobierno": "Die Regierung",
  "El poder judicial y el Tribunal Constitucional":
    "Die rechtsprechende Gewalt und das Verfassungsgericht",
  "Elecciones y participación ciudadana": "Wahlen und Bürgerbeteiligung",

  "De Hispania a al-Ándalus y los reinos cristianos":
    "Von Hispania über al-Andalus zu den christlichen Königreichen",
  "Los Reyes Católicos y la monarquía hispánica":
    "Die Katholischen Könige und die spanische Monarchie",
  "El siglo XIX": "Das 19. Jahrhundert",
  "República, Guerra Civil y dictadura": "Republik, Bürgerkrieg und Diktatur",
  "La Transición y la democracia": "Die Transición und die Demokratie",

  "Las comunidades autónomas": "Die autonomen Gemeinschaften",
  "El territorio": "Das Land",
  "Las lenguas de España": "Die Sprachen Spaniens",
  "La economía y España en Europa": "Die Wirtschaft und Spanien in Europa",

  "Trabajo, contratos y Seguridad Social": "Arbeit, Verträge und Sozialversicherung",
  "Sanidad y educación": "Gesundheit und Bildung",
  "Vivir en España": "Leben in Spanien",
  "La vida diaria": "Der Alltag",
  // es-simbolos
  "Por qué se empieza aquí: los símbolos se ven todos los días — en el ayuntamiento, en el pasaporte, en la camiseta de la selección — y son la puerta más fácil para entrar en todo lo demás.":
    "Warum man hier anfängt: die Symbole sieht man jeden Tag — am Rathaus, im Pass, auf dem Trikot der Nationalmannschaft — und sie sind die leichteste Tür in alles Übrige.",
  "La bandera": "Die Flagge",
  "La bandera tiene tres franjas horizontales: **roja, amarilla y roja**. La amarilla es **el doble de ancha** que cada una de las rojas, de modo que ocupa la mitad de la bandera. Lo establece el **artículo 4** de la Constitución.":
    "Die Flagge hat drei waagerechte Streifen: **rot, gelb und rot**. Der gelbe ist **doppelt so breit** wie jeder der roten und nimmt damit die Hälfte der Flagge ein. Festgelegt ist das in **Artikel 4** der Verfassung.",
  "Su origen es marinero. En **1785 Carlos III** convocó un concurso para dotar a la Armada de un pabellón que se distinguiera en el mar: casi todas las flotas europeas usaban entonces fondos blancos con escudos, y de lejos se confundían. El rojo y el amarillo se ven a mucha distancia. De ahí pasó al ejército y, en el siglo XIX, a bandera nacional.":
    "Ihr Ursprung ist seemännisch. **1785 schrieb Karl III.** einen Wettbewerb aus, um der Marine eine Flagge zu geben, die sich auf See unterscheiden ließ: fast alle europäischen Flotten benutzten damals weiße Grundflächen mit Wappen, und von Weitem verwechselte man sie. Rot und Gelb sieht man auf große Entfernung. Von dort ging sie an das Heer und im 19. Jahrhundert zur Nationalflagge über.",
  "El escudo": "Das Wappen",
  "El escudo es un resumen de historia peninsular. Está **cuartelado**: cada cuartel corresponde a un reino que acabó formando parte de España.":
    "Das Wappen ist eine Zusammenfassung der Geschichte der Halbinsel. Es ist **geviert**: jedes Feld steht für ein Königreich, das am Ende zu Spanien gehörte.",
  "Castilla y León": "Kastilien und León",
  "El castillo dorado y el león púrpura ocupan los dos primeros cuarteles.":
    "Die goldene Burg und der purpurne Löwe füllen die beiden ersten Felder.",
  "Aragón y Navarra": "Aragón und Navarra",
  "Los cuatro palos rojos de Aragón y las cadenas de Navarra completan el cuartelado.":
    "Die vier roten Pfähle Aragóns und die Ketten Navarras vervollständigen die Vierung.",
  "Granada": "Granada",
  "La granada al pie recuerda el último reino incorporado, en 1492.":
    "Der Granatapfel am Fuß erinnert an das letzte einverleibte Königreich, 1492.",
  "Las columnas": "Die Säulen",
  "Las columnas de Hércules, con el lema PLUS ULTRA: más allá, hacia el Atlántico. Antes del descubrimiento el lema era el contrario.":
    "Die Säulen des Herakles, mit dem Wahlspruch PLUS ULTRA: weiter hinaus, zum Atlantik. Vor der Entdeckung lautete der Wahlspruch umgekehrt.",
  "¿Cómo son las franjas de la bandera española?": "Wie sind die Streifen der spanischen Flagge?",
  "Tres franjas iguales: roja, amarilla y roja": "Drei gleiche Streifen: rot, gelb und rot",
  "Roja, amarilla del doble de ancho, y roja": "Rot, gelb doppelt so breit, und rot",
  "Dos franjas: roja arriba y amarilla abajo": "Zwei Streifen: rot oben und gelb unten",
  "Tres franjas verticales": "Drei senkrechte Streifen",
  "La amarilla ocupa la mitad de la bandera y cada roja un cuarto. No son tres franjas iguales, y esa proporción está fijada en el artículo 4 de la Constitución.":
    "Der gelbe nimmt die Hälfte der Flagge ein und jeder rote ein Viertel. Es sind keine drei gleichen Streifen, und dieses Verhältnis steht in Artikel 4 der Verfassung.",
  "El himno": "Die Hymne",
  "El himno se llama **Marcha Real** y tiene una rareza que lo distingue de casi todos los demás: **no tiene letra**. Se canta con la boca cerrada, o no se canta. Solo otros pocos países en el mundo están en la misma situación.":
    "Die Hymne heißt **Marcha Real** und hat eine Eigenheit, die sie von fast allen anderen unterscheidet: sie hat **keinen Text**. Man summt sie mit geschlossenem Mund, oder man singt sie nicht. Nur wenige andere Länder der Welt sind in derselben Lage.",
  "Es además uno de los himnos más antiguos de Europa: aparece documentado ya en **1761** como Marcha Granadera. Se le han puesto letras en varias épocas, pero ninguna ha llegado a ser oficial, y los intentos de darle una han fracasado siempre.":
    "Sie ist außerdem eine der ältesten Hymnen Europas: schon **1761** ist sie als Marcha Granadera belegt. Zu verschiedenen Zeiten hat man ihr Texte gegeben, aber keiner wurde je amtlich, und die Versuche, ihr einen zu geben, sind stets gescheitert.",
  "¿Qué particularidad tiene el himno nacional español?":
    "Welche Besonderheit hat die spanische Nationalhymne?",
  "Que dura menos de treinta segundos": "Dass sie weniger als dreißig Sekunden dauert",
  "Que no tiene letra oficial": "Dass sie keinen amtlichen Text hat",
  "Que solo puede interpretarse en actos militares":
    "Dass sie nur bei militärischen Anlässen gespielt werden darf",
  "Que se compuso en el siglo XX": "Dass sie im 20. Jahrhundert komponiert wurde",
  "La Marcha Real carece de letra oficial. Se han propuesto varias a lo largo del tiempo y ninguna ha prosperado; es además uno de los himnos más antiguos de Europa, documentado desde 1761.":
    "Der Marcha Real fehlt ein amtlicher Text. Im Lauf der Zeit wurden mehrere vorgeschlagen, und keiner setzte sich durch; sie ist außerdem eine der ältesten Hymnen Europas, seit 1761 belegt.",
  "Las fechas": "Die Daten",
  "12 de octubre": "12. Oktober",
  "Fiesta Nacional de España. Conmemora la llegada de Colón a América en 1492 y el desfile en Madrid es el acto central.":
    "Nationalfeiertag Spaniens. Er erinnert an die Ankunft von Kolumbus in Amerika 1492, und die Parade in Madrid ist der zentrale Akt.",
  "6 de diciembre": "6. Dezember",
  "Día de la Constitución. Se celebra el referéndum de 1978, no la fecha en que entró en vigor.":
    "Tag der Verfassung. Gefeiert wird das Referendum von 1978, nicht das Datum des Inkrafttretens.",
  "2 de mayo": "2. Mai",
  "Fiesta de la Comunidad de Madrid: el levantamiento de 1808 contra las tropas de Napoleón. Es autonómica, no nacional.":
    "Feiertag der Autonomen Gemeinschaft Madrid: der Aufstand von 1808 gegen Napoleons Truppen. Er ist regional, nicht national.",
  "La lengua oficial del Estado es el **castellano**, según el artículo 3, que añade que las demás lenguas españolas serán también oficiales en sus comunidades. Es el único artículo de los primeros que habla de lenguas, y en el capítulo cuarto se ve por qué importa tanto.":
    "Amtssprache des Staates ist nach Artikel 3 das **Kastilische**, und derselbe Artikel fügt hinzu, dass die übrigen spanischen Sprachen in ihren Gemeinschaften ebenfalls Amtssprachen sind. Es ist der einzige der ersten Artikel, der von Sprachen handelt, und im vierten Kapitel wird sichtbar, warum das so wichtig ist.",
  "¿Qué se celebra el 12 de octubre?": "Was wird am 12. Oktober gefeiert?",
  "El Día de la Constitución": "Der Tag der Verfassung",
  "La Fiesta Nacional de España": "Der Nationalfeiertag Spaniens",
  "El aniversario de la proclamación del rey": "Der Jahrestag der Ausrufung des Königs",
  "El fin de la Guerra Civil": "Das Ende des Bürgerkriegs",
  "El 12 de octubre es la Fiesta Nacional. El Día de la Constitución es el 6 de diciembre: dos fechas que se confunden con frecuencia porque ambas son festivos nacionales.":
    "Der 12. Oktober ist der Nationalfeiertag. Der Tag der Verfassung ist der 6. Dezember: zwei Daten, die häufig verwechselt werden, weil beide landesweite Feiertage sind.",
  "Bandera con escudo y bandera sin escudo son las dos correctas. La que llevan los edificios oficiales incluye el escudo; la que se ve en un balcón o en un estadio normalmente no.":
    "Flagge mit Wappen und Flagge ohne Wappen sind beide richtig. Die an Amtsgebäuden trägt das Wappen; die auf einem Balkon oder in einem Stadion in der Regel nicht.",
  // es-constitucion
  "Por qué importa: casi todo lo que viene después — el rey, las Cortes, las autonomías, las lenguas — está en un texto de 1978 que se escribió deliberadamente para que nadie ganara del todo. Entender ese punto de partida explica su forma.":
    "Warum das wichtig ist: fast alles, was danach kommt — der König, die Cortes, die Autonomien, die Sprachen —, steht in einem Text von 1978, der bewusst so geschrieben wurde, dass niemand ganz gewann. Diesen Ausgangspunkt zu verstehen erklärt seine Form.",
  "Cómo se hizo": "Wie sie entstand",
  "Tras la muerte de Franco en 1975, las **elecciones de junio de 1977** dieron unas Cortes que asumieron la tarea de escribir una Constitución. La comisión encargó el borrador a **siete diputados** de partidos distintos, a los que se conoce como los **padres de la Constitución**.":
    "Nach Francos Tod 1975 brachten die **Wahlen vom Juni 1977** Cortes hervor, die die Aufgabe übernahmen, eine Verfassung zu schreiben. Der Ausschuss übertrug den Entwurf **sieben Abgeordneten** verschiedener Parteien, die man die **Väter der Verfassung** nennt.",
  "El calendario del final del año siguiente conviene tenerlo ordenado: las Cortes aprobaron el texto el **31 de octubre de 1978**, el pueblo lo ratificó en **referéndum el 6 de diciembre**, el rey lo sancionó el **27 de diciembre** y entró en vigor el **29 de diciembre**, el día de su publicación en el Boletín Oficial del Estado.":
    "Den Ablauf am Ende des folgenden Jahres sollte man geordnet im Kopf haben: die Cortes beschlossen den Text am **31. Oktober 1978**, das Volk bestätigte ihn im **Referendum am 6. Dezember**, der König sanktionierte ihn am **27. Dezember**, und in Kraft trat er am **29. Dezember**, dem Tag seiner Veröffentlichung im Staatsanzeiger.",
  "La palabra que resume el método es **consenso**. El texto se redactó buscando que ninguna fuerza quedara fuera, y esa es la razón de que algunos artículos sean deliberadamente amplios: se acordó la frase precisamente porque admitía más de una lectura.":
    "Das Wort, das die Methode zusammenfasst, ist **Konsens**. Der Text wurde so geschrieben, dass keine Kraft draußen blieb, und das ist der Grund, warum einige Artikel absichtlich weit gefasst sind: man einigte sich auf den Satz gerade deshalb, weil er mehr als eine Lesart zuließ.",
  "¿En qué fecha se ratificó la Constitución en referéndum?":
    "An welchem Datum wurde die Verfassung im Referendum bestätigt?",
  "El 31 de octubre de 1978": "Am 31. Oktober 1978",
  "El 6 de diciembre de 1978": "Am 6. Dezember 1978",
  "El 27 de diciembre de 1978": "Am 27. Dezember 1978",
  "El 29 de diciembre de 1978": "Am 29. Dezember 1978",
  "Aprobación en las Cortes el 31 de octubre, referéndum el 6 de diciembre, sanción real el 27 y entrada en vigor el 29. El Día de la Constitución celebra el referéndum.":
    "Beschluss in den Cortes am 31. Oktober, Referendum am 6. Dezember, königliche Sanktion am 27. und Inkrafttreten am 29. Der Tag der Verfassung feiert das Referendum.",
  "Cómo está hecha": "Wie sie gebaut ist",
  "Tiene **169 artículos**, repartidos en un **título preliminar** y **diez títulos**, más disposiciones adicionales, transitorias, derogatoria y final. Es un texto largo comparado con otras constituciones europeas, y buena parte de esa extensión está en el título dedicado a los derechos.":
    "Sie hat **169 Artikel**, verteilt auf einen **Vortitel** und **zehn Titel**, dazu ergänzende, Übergangs-, Aufhebungs- und Schlussbestimmungen. Sie ist ein langer Text im Vergleich zu anderen europäischen Verfassungen, und ein guter Teil dieser Länge steckt im Titel über die Rechte.",
  "Título preliminar": "Vortitel",
  "Artículos 1 a 9: qué es España, dónde reside la soberanía, las lenguas, la bandera, la capital.":
    "Artikel 1 bis 9: was Spanien ist, wo die Souveränität liegt, die Sprachen, die Flagge, die Hauptstadt.",
  "Título I": "Titel I",
  "Artículos 10 a 55: derechos y deberes fundamentales. Es el título más extenso.":
    "Artikel 10 bis 55: Grundrechte und Grundpflichten. Es ist der umfangreichste Titel.",
  "Títulos II a VI": "Titel II bis VI",
  "La Corona, las Cortes, el Gobierno y el poder judicial: quién hace qué.":
    "Die Krone, die Cortes, die Regierung und die rechtsprechende Gewalt: wer was tut.",
  "Título VIII": "Titel VIII",
  "La organización territorial del Estado. De aquí nacen las comunidades autónomas.":
    "Die territoriale Gliederung des Staates. Aus ihm entstehen die autonomen Gemeinschaften.",
  "Los primeros artículos": "Die ersten Artikel",
  "El **artículo 1** define España como un **Estado social y democrático de Derecho**, sitúa la soberanía en el pueblo español y establece que la **forma política del Estado es la Monarquía parlamentaria**. Las tres afirmaciones están en el mismo artículo y conviene no separarlas: la monarquía es la forma, no el fundamento.":
    "**Artikel 1** bestimmt Spanien als **sozialen und demokratischen Rechtsstaat**, verortet die Souveränität beim spanischen Volk und legt fest, dass die **politische Form des Staates die parlamentarische Monarchie** ist. Die drei Aussagen stehen im selben Artikel, und man sollte sie nicht trennen: die Monarchie ist die Form, nicht die Grundlage.",
  "El **artículo 2** contiene la frase más discutida del texto: se fundamenta en la **indisoluble unidad de la Nación española** y a la vez reconoce y garantiza **el derecho a la autonomía de las nacionalidades y regiones** que la integran. Las dos mitades se acordaron juntas, y el capítulo cuarto de este curso explica qué se construyó sobre ellas.":
    "**Artikel 2** enthält den meistdiskutierten Satz des Textes: er gründet auf der **unauflöslichen Einheit der spanischen Nation** und erkennt zugleich das **Recht auf Autonomie der Nationalitäten und Regionen** an, die sie bilden, und gewährleistet es. Beide Hälften wurden gemeinsam vereinbart, und das vierte Kapitel dieses Kurses erklärt, was darauf gebaut wurde.",
  "¿Qué forma política del Estado establece el artículo 1?":
    "Welche politische Form des Staates legt Artikel 1 fest?",
  "La república parlamentaria": "Die parlamentarische Republik",
  "La monarquía parlamentaria": "Die parlamentarische Monarchie",
  "La monarquía absoluta": "Die absolute Monarchie",
  "El Estado federal": "Den Bundesstaat",
  "Monarquía parlamentaria: el rey es jefe del Estado pero no gobierna, y la soberanía reside en el pueblo. El mismo artículo define España como Estado social y democrático de Derecho.":
    "Die parlamentarische Monarchie: der König ist Staatsoberhaupt, regiert aber nicht, und die Souveränität liegt beim Volk. Derselbe Artikel bestimmt Spanien als sozialen und demokratischen Rechtsstaat.",
  "Cambiarla es difícil": "Sie zu ändern ist schwer",
  "Hay **dos procedimientos**. El **ordinario**, del artículo 167, exige tres quintos de cada cámara. El **agravado**, del artículo 168, se aplica a las partes más protegidas — el título preliminar, los derechos fundamentales de la sección primera y el título de la Corona — y es de una dureza poco común: dos tercios de ambas cámaras, **disolución de las Cortes**, elecciones, ratificación por las nuevas cámaras y **referéndum obligatorio**.":
    "Es gibt **zwei Verfahren**. Das **gewöhnliche** aus Artikel 167 verlangt drei Fünftel in jeder Kammer. Das **erschwerte** aus Artikel 168 gilt für die am stärksten geschützten Teile — den Vortitel, die Grundrechte des ersten Abschnitts und den Titel über die Krone — und ist ungewöhnlich hart: zwei Drittel beider Kammern, **Auflösung der Cortes**, Neuwahlen, Bestätigung durch die neuen Kammern und ein **verbindliches Referendum**.",
  "El resultado se ve en la práctica: la Constitución solo se ha reformado **dos veces** en más de cuarenta años, ambas por el procedimiento ordinario y ambas por exigencias europeas. En **1992** se tocó el artículo 13 para permitir el voto de extranjeros en las municipales tras Maastricht, y en **2011** el artículo 135, sobre estabilidad presupuestaria.":
    "Das Ergebnis zeigt sich in der Praxis: die Verfassung wurde in über vierzig Jahren nur **zweimal** geändert, beide Male im gewöhnlichen Verfahren und beide Male auf europäisches Verlangen. **1992** wurde Artikel 13 angefasst, um nach Maastricht Ausländern das Wahlrecht bei Kommunalwahlen zu geben, und **2011** Artikel 135 über die Haushaltsstabilität.",
  "¿Cuántas veces se ha reformado la Constitución española?":
    "Wie oft wurde die spanische Verfassung geändert?",
  "Ninguna": "Nie",
  "Dos": "Zweimal",
  "Siete": "Siebenmal",
  "Más de veinte": "Mehr als zwanzigmal",
  "Dos: en 1992, para permitir el voto de extranjeros en elecciones municipales, y en 2011, sobre estabilidad presupuestaria. Ambas por el procedimiento ordinario del artículo 167.":
    "Zweimal: 1992, um Ausländern das Wahlrecht bei Kommunalwahlen zu geben, und 2011 zur Haushaltsstabilität. Beide Male im gewöhnlichen Verfahren des Artikels 167.",
  "El **29 de diciembre** entró en vigor, pero el festivo es el **6 de diciembre**, el del referéndum. Se celebra el día en que la gente votó, no el día en que el texto empezó a regir.":
    "Am **29. Dezember** trat sie in Kraft, aber der Feiertag ist der **6. Dezember**, der des Referendums. Gefeiert wird der Tag, an dem die Menschen abgestimmt haben, nicht der Tag, an dem der Text zu gelten begann.",
  // es-derechos
  "Por qué importa: el título I no es una lista uniforme. Unos derechos están protegidos con todo el aparato del Estado y otros son principios que orientan la política. Saber en qué grupo cae cada uno es la mitad de entenderlo.":
    "Warum das wichtig ist: Titel I ist keine gleichförmige Liste. Manche Rechte sind mit dem ganzen Apparat des Staates geschützt, andere sind Grundsätze, die die Politik ausrichten. Zu wissen, in welche Gruppe eines fällt, ist die halbe Miete.",
  "Tres niveles de protección": "Drei Schutzstufen",
  "La Constitución protege sus derechos con intensidad distinta, y el criterio es dónde está escrito cada uno.":
    "Die Verfassung schützt ihre Rechte unterschiedlich stark, und das Kriterium ist, wo jedes geschrieben steht.",
  "Artículos 15 a 29": "Artikel 15 bis 29",
  "Derechos fundamentales y libertades públicas. Máxima protección: ley orgánica, procedimiento judicial preferente y recurso de amparo ante el Tribunal Constitucional.":
    "Grundrechte und öffentliche Freiheiten. Höchster Schutz: Organgesetz, bevorzugtes gerichtliches Verfahren und Verfassungsbeschwerde vor dem Verfassungsgericht.",
  "Artículos 30 a 38": "Artikel 30 bis 38",
  "Derechos y deberes de los ciudadanos. Vinculan a los poderes públicos y se regulan por ley, pero sin amparo constitucional.":
    "Rechte und Pflichten der Bürgerinnen und Bürger. Sie binden die öffentliche Gewalt und werden durch Gesetz geregelt, aber ohne Verfassungsbeschwerde.",
  "Artículos 39 a 52": "Artikel 39 bis 52",
  "Principios rectores de la política social y económica: vivienda, medio ambiente, tercera edad. Orientan al legislador y solo se alegan ante los tribunales conforme a las leyes que los desarrollen.":
    "Leitgrundsätze der Sozial- und Wirtschaftspolitik: Wohnen, Umwelt, Alter. Sie weisen dem Gesetzgeber die Richtung und lassen sich vor Gericht nur nach Maßgabe der Gesetze geltend machen, die sie ausgestalten.",
  "El **artículo 14** abre la lista fuera de esa clasificación: los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por nacimiento, raza, sexo, religión, opinión o cualquier otra condición personal o social.":
    "**Artikel 14** eröffnet die Liste außerhalb dieser Einteilung: die Spanierinnen und Spanier sind vor dem Gesetz gleich, und keine Benachteiligung wegen Geburt, Rasse, Geschlecht, Religion, Meinung oder eines anderen persönlichen oder sozialen Umstands darf sich durchsetzen.",
  "La persona": "Die Person",
  // es-derechos
  "El **artículo 15** reconoce el derecho a la vida y a la integridad física y moral, prohíbe la tortura y **abole la pena de muerte**, salvo lo que dispusieran las leyes penales militares en tiempo de guerra — excepción que fue suprimida por ley en 1995.":
    "**Artikel 15** erkennt das Recht auf Leben und auf körperliche und seelische Unversehrtheit an, verbietet die Folter und **schafft die Todesstrafe ab**, vorbehaltlich dessen, was die Militärstrafgesetze für Kriegszeiten bestimmen sollten — eine Ausnahme, die 1995 durch Gesetz gestrichen wurde.",
  "El **artículo 16** garantiza la libertad ideológica y religiosa, y añade una frase decisiva: **ninguna confesión tendrá carácter estatal**. No es exactamente una separación al modo francés, porque el mismo artículo obliga a los poderes públicos a mantener relaciones de cooperación con la Iglesia católica y las demás confesiones. Es una aconfesionalidad con cooperación.":
    "**Artikel 16** gewährleistet die weltanschauliche und religiöse Freiheit und fügt einen entscheidenden Satz hinzu: **keine Konfession hat staatlichen Charakter**. Es ist nicht genau eine Trennung nach französischem Muster, denn derselbe Artikel verpflichtet die öffentliche Gewalt, Beziehungen der Zusammenarbeit zur katholischen Kirche und zu den übrigen Konfessionen zu unterhalten. Es ist Bekenntnisneutralität mit Zusammenarbeit.",
  "El **artículo 17** protege la libertad personal: la **detención preventiva** no puede durar más de **setenta y dos horas**, pasadas las cuales el detenido debe ser puesto en libertad o a disposición judicial. El mismo artículo prevé el **habeas corpus**, el procedimiento para llevar de inmediato ante un juez a quien esté detenido ilegalmente.":
    "**Artikel 17** schützt die persönliche Freiheit: die **vorläufige Festnahme** darf nicht länger als **zweiundsiebzig Stunden** dauern, nach deren Ablauf die festgenommene Person freizulassen oder dem Gericht vorzuführen ist. Derselbe Artikel sieht den **habeas corpus** vor, das Verfahren, das jemanden, der rechtswidrig festgehalten wird, unverzüglich vor eine Richterin bringt.",
  "¿Cuál es la duración máxima de una detención preventiva?":
    "Wie lange darf eine vorläufige Festnahme höchstens dauern?",
  "Veinticuatro horas": "Vierundzwanzig Stunden",
  "Cuarenta y ocho horas": "Achtundvierzig Stunden",
  "Setenta y dos horas": "Zweiundsiebzig Stunden",
  "Cinco días": "Fünf Tage",
  "Setenta y dos horas, según el artículo 17. Cumplido el plazo, el detenido debe quedar en libertad o pasar a disposición judicial; el habeas corpus sirve para forzarlo si no ocurre.":
    "Zweiundsiebzig Stunden, nach Artikel 17. Nach Ablauf der Frist muss die festgenommene Person freikommen oder dem Gericht vorgeführt werden; der habeas corpus dient dazu, das zu erzwingen, wenn es nicht geschieht.",
  "La vida en común": "Das Leben miteinander",
  "El **artículo 18** protege el honor, la intimidad y la propia imagen, declara **inviolable el domicilio** — no se entra sin consentimiento o resolución judicial, salvo delito flagrante — y garantiza el secreto de las comunicaciones. El **artículo 20** reconoce la libertad de expresión y el derecho a comunicar y recibir información veraz, y prohíbe la censura previa.":
    "**Artikel 18** schützt die Ehre, die Privatsphäre und das eigene Bild, erklärt die **Wohnung für unverletzlich** — man betritt sie nicht ohne Einwilligung oder gerichtliche Anordnung, außer bei einer auf frischer Tat ertappten Straftat — und gewährleistet das Kommunikationsgeheimnis. **Artikel 20** erkennt die Meinungsfreiheit und das Recht an, wahrheitsgemäße Information mitzuteilen und zu empfangen, und verbietet die Vorzensur.",
  "Los **artículos 21 y 22** amparan la reunión y la asociación: para reunirse en lugares de tránsito público basta comunicarlo a la autoridad, no pedir permiso. El **artículo 23** reconoce el derecho a participar en los asuntos públicos y a acceder en condiciones de igualdad a las funciones y cargos públicos.":
    "Die **Artikel 21 und 22** schützen Versammlung und Vereinigung: um sich an öffentlich zugänglichen Orten zu versammeln, genügt eine Mitteilung an die Behörde, keine Genehmigung. **Artikel 23** erkennt das Recht an, an den öffentlichen Angelegenheiten teilzunehmen und unter gleichen Bedingungen Zugang zu öffentlichen Ämtern zu erhalten.",
  "¿Qué establece la Constitución sobre la religión del Estado?":
    "Was bestimmt die Verfassung über die Religion des Staates?",
  "Que la religión católica es la oficial": "Dass die katholische Religion die amtliche ist",
  "Que ninguna confesión tendrá carácter estatal": "Dass keine Konfession staatlichen Charakter hat",
  "Que se prohíbe toda relación entre Estado y confesiones":
    "Dass jede Beziehung zwischen Staat und Konfessionen verboten ist",
  "Que cada comunidad autónoma decide su confesión":
    "Dass jede autonome Gemeinschaft ihre Konfession bestimmt",
  "El artículo 16 dice que ninguna confesión tendrá carácter estatal, y a la vez obliga a mantener relaciones de cooperación con la Iglesia católica y las demás. Es aconfesionalidad, no separación estricta.":
    "Artikel 16 sagt, dass keine Konfession staatlichen Charakter hat, und verpflichtet zugleich zu Beziehungen der Zusammenarbeit mit der katholischen Kirche und den übrigen. Es ist Bekenntnisneutralität, keine strikte Trennung.",
  "Ante la justicia": "Vor Gericht",
  "El **artículo 24** reconoce la **tutela judicial efectiva**: derecho al juez ordinario predeterminado por la ley, a la defensa y a la asistencia de letrado, a un proceso público sin dilaciones indebidas y a la **presunción de inocencia**. El **artículo 25** añade que las penas privativas de libertad se orientarán a la reeducación y reinserción social.":
    "**Artikel 24** erkennt den **wirksamen Rechtsschutz** an: das Recht auf die gesetzlich vorherbestimmte Richterin, auf Verteidigung und anwaltlichen Beistand, auf ein öffentliches Verfahren ohne ungebührliche Verzögerung und auf die **Unschuldsvermutung**. **Artikel 25** fügt hinzu, dass die freiheitsentziehenden Strafen auf Erziehung und Wiedereingliederung in die Gesellschaft ausgerichtet sein sollen.",
  "Cuando uno de los derechos de los artículos 14 a 29 se vulnera y los tribunales ordinarios no lo reparan, queda el **recurso de amparo** ante el **Tribunal Constitucional**. Es la última puerta interna, y solo se abre para ese grupo de derechos.":
    "Wird eines der Rechte der Artikel 14 bis 29 verletzt und die ordentlichen Gerichte helfen nicht ab, bleibt die **Verfassungsbeschwerde** vor dem **Verfassungsgericht**. Sie ist die letzte innerstaatliche Tür, und sie öffnet sich nur für diese Gruppe von Rechten.",
  "¿Ante qué órgano se interpone el recurso de amparo?":
    "Bei welchem Organ wird die Verfassungsbeschwerde eingelegt?",
  "Ante el Tribunal Supremo": "Beim Obersten Gerichtshof",
  "Ante el Tribunal Constitucional": "Beim Verfassungsgericht",
  "Ante el Defensor del Pueblo": "Beim Bürgerbeauftragten",
  "Ante el Consejo General del Poder Judicial": "Beim Generalrat der rechtsprechenden Gewalt",
  "El amparo se interpone ante el Tribunal Constitucional y solo protege los derechos de los artículos 14 a 29. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria, que es otra cosa.":
    "Die Verfassungsbeschwerde wird beim Verfassungsgericht eingelegt und schützt nur die Rechte der Artikel 14 bis 29. Der Oberste Gerichtshof ist die Spitze der ordentlichen Gerichtsbarkeit, was etwas anderes ist.",
  "El derecho a una **vivienda digna** está en el artículo 47, entre los principios rectores. Es un mandato al legislador, no un derecho que pueda reclamarse directamente ante un juez como la libertad de expresión.":
    "Das Recht auf eine **würdige Wohnung** steht in Artikel 47, unter den Leitgrundsätzen. Es ist ein Auftrag an den Gesetzgeber, kein Recht, das man vor einer Richterin unmittelbar einklagen könnte wie die Meinungsfreiheit.",
  // es-deberes
  "Por qué importa: la Constitución no solo reparte derechos. Impone cuatro deberes, y uno de ellos se cumple todos los años. Y define quién es español, que es la puerta por la que se entra a todo lo demás.":
    "Warum das wichtig ist: die Verfassung verteilt nicht nur Rechte. Sie legt vier Pflichten auf, und eine davon erfüllt man jedes Jahr. Und sie bestimmt, wer Spanierin ist, was die Tür zu allem Übrigen ist.",
  "Los deberes": "Die Pflichten",
  "El **artículo 30** establece el derecho y el deber de **defender a España**. La ley regulaba con él el servicio militar obligatorio, que quedó **suspendido en 2001**: desde entonces las Fuerzas Armadas son enteramente profesionales. El mismo artículo prevé la objeción de conciencia y, para casos de grave riesgo, deberes de protección civil.":
    "**Artikel 30** begründet das Recht und die Pflicht, **Spanien zu verteidigen**. Auf ihn stützte das Gesetz die Wehrpflicht, die **2001 ausgesetzt** wurde: seither sind die Streitkräfte vollständig berufsmäßig. Derselbe Artikel sieht die Kriegsdienstverweigerung aus Gewissensgründen vor und, für Fälle schwerer Gefahr, Pflichten im Zivilschutz.",
  "El **artículo 31** es el deber que se cumple cada año: todos contribuirán al sostenimiento de los gastos públicos **de acuerdo con su capacidad económica**, mediante un sistema tributario **justo**, inspirado en los principios de **igualdad y progresividad**, y que en ningún caso tendrá alcance **confiscatorio**. Progresividad significa que quien más gana no paga solo más dinero, sino un porcentaje mayor.":
    "**Artikel 31** ist die Pflicht, die man jedes Jahr erfüllt: alle tragen zu den öffentlichen Ausgaben bei, **nach Maßgabe ihrer wirtschaftlichen Leistungsfähigkeit**, über ein **gerechtes** Steuersystem, das den Grundsätzen der **Gleichheit und der Progression** folgt und in keinem Fall **erdrosselnde** Wirkung haben darf. Progression heißt, dass wer mehr verdient nicht nur mehr Geld zahlt, sondern einen höheren Anteil.",
  "Defender a España · art. 30": "Spanien verteidigen · Art. 30",
  "Derecho y deber. El servicio militar obligatorio está suspendido desde 2001.":
    "Recht und Pflicht. Die Wehrpflicht ist seit 2001 ausgesetzt.",
  "Contribuir · art. 31": "Beitragen · Art. 31",
  "Según la capacidad económica, con un sistema progresivo y no confiscatorio.":
    "Nach der wirtschaftlichen Leistungsfähigkeit, mit einem progressiven und nicht erdrosselnden System.",
  "Trabajar · art. 35": "Arbeiten · Art. 35",
  "Deber y derecho al trabajo, a la libre elección de profesión y a una remuneración suficiente.":
    "Pflicht und Recht auf Arbeit, auf die freie Wahl des Berufs und auf eine ausreichende Vergütung.",
  "La enseñanza básica · art. 27": "Die Grundschulbildung · Art. 27",
  "Es obligatoria y gratuita. El deber recae sobre quien tiene la patria potestad.":
    "Sie ist verpflichtend und unentgeltlich. Die Pflicht trifft die Sorgeberechtigten.",
  "¿Qué significa que el sistema tributario es progresivo?":
    "Was bedeutet es, dass das Steuersystem progressiv ist?",
  "Que los impuestos suben cada año": "Dass die Steuern jedes Jahr steigen",
  "Que quien tiene más renta paga un porcentaje mayor":
    "Dass ein höheres Einkommen einen höheren Anteil zahlt",
  "Que todos pagan el mismo porcentaje": "Dass alle denselben Anteil zahlen",
  "Que se puede pagar a plazos": "Dass man in Raten zahlen kann",
  "La progresividad del artículo 31 se refiere al porcentaje, no solo al importe. Un impuesto que cobrara a todos el mismo porcentaje sería proporcional, no progresivo.":
    "Die Progression des Artikels 31 bezieht sich auf den Anteil, nicht nur auf den Betrag. Eine Steuer, die von allen denselben Anteil nähme, wäre proportional, nicht progressiv.",
  "Quién es español": "Wer Spanierin ist",
  "El **artículo 11** remite a la ley, y esa ley es el **Código Civil**. La regla principal es la de la **sangre**: es español de origen quien nace de padre o madre españoles, con independencia del lugar de nacimiento. Nacer en territorio español no basta por sí solo, aunque hay reglas que evitan que un niño quede sin nacionalidad alguna.":
    "**Artikel 11** verweist auf das Gesetz, und dieses Gesetz ist das **Zivilgesetzbuch**. Die Hauptregel ist die des **Blutes**: Spanierin von Geburt ist, wer von einem spanischen Vater oder einer spanischen Mutter abstammt, gleich wo sie geboren wurde. Auf spanischem Boden geboren zu sein genügt für sich allein nicht, auch wenn Regeln verhindern, dass ein Kind ohne jede Staatsangehörigkeit bleibt.",
  "El mismo artículo prohíbe privar de la nacionalidad a los españoles de origen y permite tratados de **doble nacionalidad** con los países iberoamericanos y con aquellos que hayan tenido o tengan una vinculación particular con España.":
    "Derselbe Artikel verbietet, Spanierinnen von Geburt die Staatsangehörigkeit zu entziehen, und erlaubt Verträge über **doppelte Staatsangehörigkeit** mit den iberoamerikanischen Ländern und mit jenen, die eine besondere Verbindung zu Spanien hatten oder haben.",
  "La nacionalidad por residencia": "Die Staatsangehörigkeit durch Aufenthalt",
  "El plazo general es de **diez años** de residencia legal, continuada e inmediatamente anterior a la solicitud. Hay plazos abreviados, y responden a la historia de España más que a un criterio administrativo.":
    "Die allgemeine Frist beträgt **zehn Jahre** rechtmäßigen, ununterbrochenen und dem Antrag unmittelbar vorausgehenden Aufenthalts. Es gibt verkürzte Fristen, und sie folgen der Geschichte Spaniens mehr als einem verwaltungstechnischen Maßstab.",
  "Diez años": "Zehn Jahre",
  "El plazo general, para quien no encaja en ninguna de las categorías siguientes.":
    "Die allgemeine Frist, für alle, die in keine der folgenden Gruppen fallen.",
  "Cinco años": "Fünf Jahre",
  "Para quienes hayan obtenido la condición de refugiado.":
    "Für Menschen, die als Flüchtlinge anerkannt wurden.",
  "Dos años": "Zwei Jahre",
  "Para nacionales de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial y Portugal, y para los sefardíes.":
    "Für Staatsangehörige iberoamerikanischer Länder, Andorras, der Philippinen, Äquatorialguineas und Portugals sowie für Sephardinnen und Sepharden.",
  "Un año": "Ein Jahr",
  "Entre otros supuestos, para quien nació en territorio español, o lleva un año casado con española o español y no está separado.":
    "Unter anderem für wer auf spanischem Boden geboren wurde oder seit einem Jahr mit einer Spanierin oder einem Spanier verheiratet und nicht getrennt lebt.",
  "Además de la residencia se exigen **buena conducta cívica** y un **suficiente grado de integración**, que se acredita con dos pruebas del Instituto Cervantes: la de **lengua DELE A2** y la **CCSE**, de conocimientos constitucionales y socioculturales. Quien procede de un país donde el español es lengua oficial queda exento de la primera.":
    "Neben dem Aufenthalt verlangt werden **gutes staatsbürgerliches Verhalten** und ein **ausreichender Grad an Integration**, der mit zwei Prüfungen des Instituto Cervantes nachgewiesen wird: der Sprachprüfung **DELE A2** und der **CCSE** über verfassungsrechtliche und soziokulturelle Kenntnisse. Wer aus einem Land kommt, in dem Spanisch Amtssprache ist, ist von der ersten befreit.",
  "¿Cuántos años de residencia se exigen con carácter general para pedir la nacionalidad?":
    "Wie viele Jahre Aufenthalt verlangt der Regelfall für den Antrag auf die Staatsangehörigkeit?",
  "Cinco": "Fünf",
  "Diez": "Zehn",
  "Quince": "Fünfzehn",
  "Diez años de residencia legal y continuada. Cinco corresponde a los refugiados y dos a los nacionales de países iberoamericanos y a otros supuestos con vínculo histórico con España.":
    "Zehn Jahre rechtmäßigen und ununterbrochenen Aufenthalts. Fünf gelten für Flüchtlinge und zwei für Staatsangehörige iberoamerikanischer Länder und weitere Gruppen mit historischer Verbindung zu Spanien.",
  "¿Qué plazo de residencia se aplica a los nacionales de países iberoamericanos?":
    "Welche Aufenthaltsfrist gilt für Staatsangehörige iberoamerikanischer Länder?",
  "El mismo plazo general de diez años": "Dieselbe allgemeine Frist von zehn Jahren",
  "Dos años, igual que para Andorra, Filipinas, Guinea Ecuatorial, Portugal y los sefardíes. El plazo de un año se reserva a supuestos como haber nacido en España o llevar un año casado con una persona española.":
    "Zwei Jahre, ebenso wie für Andorra, die Philippinen, Äquatorialguinea, Portugal und die Sephardinnen und Sepharden. Die Frist von einem Jahr bleibt Fällen vorbehalten wie der Geburt in Spanien oder einer seit einem Jahr bestehenden Ehe mit einer spanischen Person.",
  "La **mayoría de edad** en España son los **dieciocho años**, y con ella llegan el voto y la plena capacidad de obrar. El **DNI** es obligatorio a partir de los catorce.":
    "Die **Volljährigkeit** liegt in Spanien bei **achtzehn Jahren**, und mit ihr kommen das Wahlrecht und die volle Geschäftsfähigkeit. Der **Personalausweis DNI** ist ab vierzehn verpflichtend.",
  // es-fiestas
  "Por qué importa: el calendario laboral español tiene tres capas — el Estado, la comunidad y el municipio — y por eso dos ciudades vecinas pueden trabajar en días distintos. Entender las capas evita más de un viaje en balde.":
    "Warum das wichtig ist: der spanische Arbeitskalender hat drei Schichten — den Staat, die Gemeinschaft und die Gemeinde — und deshalb können zwei Nachbarstädte an verschiedenen Tagen arbeiten. Die Schichten zu verstehen erspart mehr als eine vergebliche Fahrt.",
  "Catorce días": "Vierzehn Tage",
  "El calendario laboral tiene **catorce festivos** al año. **Doce** los fija el Estado o la comunidad autónoma, y **dos son locales**, decididos por cada ayuntamiento: el día del patrón, la fiesta mayor, la feria del pueblo.":
    "Der Arbeitskalender hat **vierzehn Feiertage** im Jahr. **Zwölf** legt der Staat oder die autonome Gemeinschaft fest, und **zwei sind örtlich**, von jeder Gemeinde bestimmt: der Tag des Schutzpatrons, das große Fest, der Jahrmarkt des Ortes.",
  "De ahí que un festivo pueda no serlo a treinta kilómetros. Las comunidades pueden además sustituir algunos festivos nacionales por otros propios, de modo que ni siquiera la lista estatal se aplica igual en todas partes.":
    "Daher kann ein Feiertag dreißig Kilometer weiter keiner sein. Die Gemeinschaften können außerdem einzelne landesweite Feiertage durch eigene ersetzen, sodass nicht einmal die staatliche Liste überall gleich gilt.",
  "Fijos en todo el país": "Im ganzen Land fest",
  "1 de enero, 1 de mayo, 12 de octubre, 1 de noviembre, 6 y 8 de diciembre, y 25 de diciembre.":
    "1. Januar, 1. Mai, 12. Oktober, 1. November, 6. und 8. Dezember und 25. Dezember.",
  "Semana Santa": "Die Karwoche",
  "El Viernes Santo es festivo en toda España. El Jueves Santo lo es en la mayoría de las comunidades, pero no en todas.":
    "Der Karfreitag ist in ganz Spanien Feiertag. Der Gründonnerstag ist es in den meisten Gemeinschaften, aber nicht in allen.",
  "Días de la comunidad": "Die Tage der Gemeinschaften",
  "El 11 de septiembre en Cataluña, el 25 de julio en Galicia, el 9 de octubre en la Comunidad Valenciana, el 28 de febrero en Andalucía.":
    "Der 11. September in Katalonien, der 25. Juli in Galicien, der 9. Oktober in der Valencianischen Gemeinschaft, der 28. Februar in Andalusien.",
  "Los dos locales": "Die beiden örtlichen",
  "Los elige el ayuntamiento. Suelen coincidir con el patrón o con la fiesta grande del municipio.":
    "Sie wählt die Gemeinde. Meist fallen sie auf den Schutzpatron oder auf das große Fest des Ortes.",
  "¿Cuántos días festivos tiene el calendario laboral español?":
    "Wie viele Feiertage hat der spanische Arbeitskalender?",
  "Doce": "Zwölf",
  "Catorce": "Vierzehn",
  "Dieciséis": "Sechzehn",
  "Catorce: doce estatales o autonómicos y dos locales fijados por el ayuntamiento. Por eso dos municipios vecinos pueden tener días libres distintos.":
    "Vierzehn: zwölf staatliche oder regionale und zwei örtliche, von der Gemeinde festgelegt. Deshalb können zwei benachbarte Gemeinden verschiedene freie Tage haben.",
  "El invierno": "Der Winter",
  "La **Nochevieja** tiene un rito muy preciso: al sonar las doce campanadas se comen **doce uvas**, una por campanada. Quien las termina a tiempo tendrá un buen año. La costumbre se difundió a comienzos del siglo XX y hoy se retransmite en directo desde la Puerta del Sol de Madrid.":
    "Der **Silvesterabend** hat einen sehr genauen Brauch: zu den zwölf Glockenschlägen isst man **zwölf Weintrauben**, eine je Schlag. Wer sie rechtzeitig schafft, bekommt ein gutes Jahr. Der Brauch verbreitete sich zu Beginn des 20. Jahrhunderts und wird heute live von der Puerta del Sol in Madrid übertragen.",
  "Los regalos de invierno no llegan el 25 de diciembre sino el **6 de enero**, con los **Reyes Magos**. La tarde del día 5 se celebran las cabalgatas, y en Nochebuena y Navidad las familias se reúnen a comer. En muchas casas conviven ya ambas fechas, pero la de los Reyes sigue siendo la principal para los niños.":
    "Die Geschenke des Winters kommen nicht am 25. Dezember, sondern am **6. Januar**, mit den **Heiligen Drei Königen**. Am Nachmittag des 5. ziehen die Umzüge, und an Heiligabend und Weihnachten kommen die Familien zum Essen zusammen. In vielen Häusern bestehen inzwischen beide Daten nebeneinander, aber für die Kinder bleibt das der Könige das wichtigere.",
  "¿Qué se hace tradicionalmente en Nochevieja al sonar las campanadas?":
    "Was tut man am Silvesterabend überlieferterweise beim Glockenschlag?",
  "Se comen doce uvas, una por campanada": "Man isst zwölf Weintrauben, eine je Schlag",
  "Se encienden doce velas": "Man zündet zwölf Kerzen an",
  "Se reparten doce monedas": "Man verteilt zwölf Münzen",
  "Se cantan doce coplas": "Man singt zwölf Lieder",
  "Una uva por campanada, doce en total. La costumbre se extendió a principios del siglo XX y se retransmite cada año desde la Puerta del Sol.":
    "Eine Traube je Glockenschlag, zwölf im Ganzen. Der Brauch verbreitete sich zu Beginn des 20. Jahrhunderts und wird jedes Jahr von der Puerta del Sol übertragen.",
  "Las fiestas populares": "Die Volksfeste",
  "Junto al calendario oficial está el de las fiestas que dan fama a las ciudades, y que en muchos casos duran una semana entera.":
    "Neben dem amtlichen Kalender steht der der Feste, die den Städten ihren Ruf geben und die vielfach eine ganze Woche dauern.",
  "Las Fallas": "Die Fallas",
  "En Valencia, en marzo. Se levantan monumentos de cartón y madera por toda la ciudad y la noche del 19 se queman.":
    "In Valencia, im März. In der ganzen Stadt werden Figuren aus Pappe und Holz aufgestellt und in der Nacht des 19. verbrannt.",
  "La Feria de Abril": "Die Feria de Abril",
  "En Sevilla, con casetas, caballos y trajes de flamenca, dos semanas después de Semana Santa.":
    "In Sevilla, mit Festzelten, Pferden und Flamencokleidern, zwei Wochen nach der Karwoche.",
  "San Fermín": "San Fermín",
  "En Pamplona, del 6 al 14 de julio. Los encierros de la mañana son su imagen más conocida.":
    "In Pamplona, vom 6. bis zum 14. Juli. Die morgendlichen Stiertriebe sind sein bekanntestes Bild.",
  "El Carnaval": "Der Karneval",
  "El de Santa Cruz de Tenerife y el de Cádiz son los mayores; el gaditano se recuerda sobre todo por sus chirigotas.":
    "Der von Santa Cruz de Tenerife und der von Cádiz sind die größten; den von Cádiz kennt man vor allem für seine Spottgesänge.",
  "¿En qué ciudad se celebran las Fallas?": "In welcher Stadt werden die Fallas gefeiert?",
  "En Sevilla": "In Sevilla",
  "En Pamplona": "In Pamplona",
  "En Valencia": "In Valencia",
  "En Cádiz": "In Cádiz",
  "Las Fallas son de Valencia y se queman en marzo. Sevilla tiene la Feria de Abril, Pamplona los San Fermines y Cádiz uno de los dos grandes carnavales.":
    "Die Fallas gehören zu Valencia und werden im März verbrannt. Sevilla hat die Feria de Abril, Pamplona die San Fermines und Cádiz einen der beiden großen Karnevale.",
  "Cuando un festivo cae en martes o jueves, muchos hacen **puente** y libran también el lunes o el viernes. Si caen dos cerca, se llama **acueducto**: no es una figura legal, pero explica por qué en esas semanas media España está cerrada.":
    "Fällt ein Feiertag auf einen Dienstag oder Donnerstag, machen viele eine **Brücke** und nehmen auch den Montag oder den Freitag frei. Fallen zwei nah beieinander, spricht man von einem **Aquädukt**: das ist kein Rechtsbegriff, erklärt aber, warum in solchen Wochen das halbe Land geschlossen hat.",
  // es-corona
  "Por qué importa: España tiene un rey y no lo gobierna nadie desde el trono. Entender qué hace exactamente el jefe del Estado — y qué no hace — es la primera pieza del sistema.":
    "Warum das wichtig ist: Spanien hat einen König, und vom Thron aus regiert niemand. Zu verstehen, was das Staatsoberhaupt genau tut — und was nicht —, ist das erste Stück des Systems.",
  "Qué es el rey": "Was der König ist",
  "El **artículo 56** define al rey como **jefe del Estado**, **símbolo de su unidad y permanencia**, y le encarga **arbitrar y moderar** el funcionamiento regular de las instituciones. Ninguna de esas palabras significa gobernar: quien dirige la política es el Gobierno, y quien hace las leyes son las Cortes.":
    "**Artikel 56** bestimmt den König als **Staatsoberhaupt**, als **Sinnbild der Einheit und des Fortbestands** des Staates, und trägt ihm auf, das regelmäßige Arbeiten der Institutionen zu **schlichten und zu mäßigen**. Keines dieser Wörter bedeutet regieren: die Politik führt die Regierung, und die Gesetze machen die Cortes.",
  "La persona del rey es **inviolable** y **no está sujeta a responsabilidad**. Eso solo se sostiene por una razón: sus actos los firma siempre otro, y ese otro responde.":
    "Die Person des Königs ist **unverletzlich** und **haftet nicht**. Das trägt nur aus einem Grund: seine Akte unterschreibt immer ein anderer, und dieser andere steht dafür ein.",
  "El refrendo": "Die Gegenzeichnung",
  "El **artículo 64** establece que los actos del rey serán **refrendados**, es decir, firmados también por quien asume su responsabilidad política: el **presidente del Gobierno**, el ministro competente, o el **presidente del Congreso** cuando se trata de proponer y nombrar al presidente del Gobierno o de disolver las Cortes. Un acto del rey sin refrendo carece de validez.":
    "**Artikel 64** legt fest, dass die Akte des Königs **gegengezeichnet** werden, also auch von der Person unterschrieben, die die politische Verantwortung übernimmt: dem **Regierungspräsidenten**, der zuständigen Ministerin oder dem **Präsidenten des Kongresses**, wenn es um den Vorschlag und die Ernennung des Regierungspräsidenten oder um die Auflösung der Cortes geht. Ein Akt des Königs ohne Gegenzeichnung ist unwirksam.",
  "Es el mecanismo que hace compatibles dos cosas que parecen incompatibles: un jefe del Estado que no responde de nada, y un sistema en el que todo acto tiene un responsable.":
    "Es ist der Mechanismus, der zwei scheinbar unvereinbare Dinge vereinbar macht: ein Staatsoberhaupt, das für nichts einsteht, und ein System, in dem für jeden Akt jemand einsteht.",
  "¿Qué significa que un acto del rey está refrendado?":
    "Was heißt es, dass ein Akt des Königs gegengezeichnet ist?",
  "Que ha sido aprobado por referéndum": "Dass er in einem Referendum gebilligt wurde",
  "Que lo firma también quien asume su responsabilidad política":
    "Dass ihn auch die Person unterschreibt, die die politische Verantwortung übernimmt",
  "Que lo ha revisado el Tribunal Constitucional": "Dass ihn das Verfassungsgericht geprüft hat",
  "Que se publica en el Boletín Oficial del Estado": "Dass er im Staatsanzeiger veröffentlicht wird",
  "El refrendo es la firma del presidente del Gobierno, del ministro competente o del presidente del Congreso. Sin ella el acto no vale, y es lo que permite que el rey sea irresponsable sin que nadie lo sea.":
    "Die Gegenzeichnung ist die Unterschrift des Regierungspräsidenten, der zuständigen Ministerin oder des Präsidenten des Kongresses. Ohne sie gilt der Akt nicht, und sie ist es, die zulässt, dass der König nicht haftet, ohne dass niemand haftet.",
  "Qué hace": "Was er tut",
  "Sancionar y promulgar": "Sanktionieren und ausfertigen",
  "Firma las leyes aprobadas por las Cortes en el plazo de quince días. No puede negarse: es un acto debido.":
    "Er unterzeichnet die von den Cortes beschlossenen Gesetze binnen fünfzehn Tagen. Er kann sich nicht weigern: es ist eine gebundene Handlung.",
  "Proponer candidato": "Einen Kandidaten vorschlagen",
  "Tras consultar a los grupos políticos, propone al Congreso un candidato a presidente del Gobierno.":
    "Nach Beratung mit den politischen Gruppen schlägt er dem Kongress eine Kandidatin oder einen Kandidaten für den Regierungsvorsitz vor.",
  "Convocar y disolver": "Einberufen und auflösen",
  "Convoca y disuelve las Cortes y convoca elecciones, siempre en los términos previstos en la Constitución.":
    "Er beruft die Cortes ein und löst sie auf und setzt Wahlen an, stets in den von der Verfassung vorgesehenen Formen.",
  "Mando supremo": "Oberbefehl",
  "Tiene el mando supremo de las Fuerzas Armadas, que dirige en la práctica el Gobierno.":
    "Ihm steht der Oberbefehl über die Streitkräfte zu, die in der Praxis die Regierung führt.",
  "Ejerce además el **derecho de gracia**, es decir, los **indultos** individuales, con arreglo a la ley — que **prohíbe los indultos generales** — y acredita a los embajadores. Al ser proclamado, presta juramento de guardar y hacer guardar la Constitución ante las Cortes reunidas.":
    "Er übt außerdem das **Gnadenrecht** aus, also die einzelnen **Begnadigungen**, nach Maßgabe des Gesetzes — das **allgemeine Begnadigungen verbietet** — und beglaubigt die Botschafter. Bei seiner Ausrufung leistet er vor den versammelten Cortes den Eid, die Verfassung zu wahren und wahren zu lassen.",
  "La sucesión": "Die Thronfolge",
  "La corona se hereda en los sucesores de **Juan Carlos I**, según el orden del **artículo 57**: primogenitura y representación, prefiriendo la línea anterior a la posterior, el grado más próximo al más remoto y, **en el mismo grado, el varón a la mujer**. Esa última regla es la única preferencia por sexo que queda en el texto constitucional, y para cambiarla haría falta el procedimiento agravado del artículo 168.":
    "Die Krone vererbt sich in den Nachkommen **Juan Carlos' I.**, nach der Ordnung des **Artikels 57**: Erstgeburt und Repräsentation, wobei die frühere Linie der späteren vorgeht, der nähere Grad dem entfernteren und, **im gleichen Grad, der Mann der Frau**. Diese letzte Regel ist die einzige Bevorzugung nach Geschlecht, die im Verfassungstext geblieben ist, und um sie zu ändern bräuchte es das erschwerte Verfahren des Artikels 168.",
  "El heredero lleva el título de **Príncipe o Princesa de Asturias**. **Juan Carlos I** fue proclamado rey en **1975** y **abdicó en 2014**; **Felipe VI** fue proclamado el **19 de junio de 2014** ante las Cortes.":
    "Die Thronfolgerin oder der Thronfolger trägt den Titel **Prinzessin oder Prinz von Asturien**. **Juan Carlos I.** wurde **1975** zum König ausgerufen und **dankte 2014 ab**; **Felipe VI.** wurde am **19. Juni 2014** vor den Cortes ausgerufen.",
  "¿Qué título recibe el heredero o la heredera de la Corona?":
    "Welchen Titel trägt die Thronfolgerin oder der Thronfolger?",
  "Duque de Borgoña": "Herzog von Burgund",
  "Príncipe o Princesa de Asturias": "Prinzessin oder Prinz von Asturien",
  "Infante de España": "Infant von Spanien",
  "Delfín de la Corona": "Dauphin der Krone",
  "Príncipe o Princesa de Asturias, junto con otros títulos históricos. Infante o infanta es el tratamiento de los demás hijos del rey.":
    "Prinzessin oder Prinz von Asturien, dazu weitere historische Titel. Infant oder Infantin ist die Anrede der übrigen Kinder des Königs.",
  "¿Puede el rey negarse a firmar una ley aprobada por las Cortes?":
    "Kann der König sich weigern, ein von den Cortes beschlossenes Gesetz zu unterschreiben?",
  "Sí, tiene derecho de veto": "Ja, er hat ein Vetorecht",
  "No: la sanción es un acto debido": "Nein: die Sanktion ist eine gebundene Handlung",
  "Solo si la ley afecta a la Corona": "Nur wenn das Gesetz die Krone betrifft",
  "Solo con el acuerdo del Tribunal Constitucional": "Nur im Einvernehmen mit dem Verfassungsgericht",
  "Sanciona y promulga en el plazo de quince días, sin margen para negarse. La monarquía parlamentaria española no conserva ningún veto real.":
    "Er sanktioniert und fertigt binnen fünfzehn Tagen aus, ohne Spielraum zur Weigerung. Die spanische parlamentarische Monarchie kennt kein königliches Veto mehr.",
  "La preferencia del **varón sobre la mujer** en el mismo grado sigue en el artículo 57 y solo podría suprimirse por el procedimiento agravado del artículo 168, el que obliga a disolver las Cortes y convocar un referéndum. No es una omisión: es la parte más difícil de reformar.":
    "Die Bevorzugung des **Mannes vor der Frau** im gleichen Grad steht weiter in Artikel 57 und ließe sich nur im erschwerten Verfahren des Artikels 168 streichen, dem, das zur Auflösung der Cortes und zu einem Referendum zwingt. Es ist kein Versehen: es ist der am schwersten zu ändernde Teil.",
  // es-cortes
  "Por qué importa: España tiene dos cámaras, pero no pesan lo mismo. Saber cuál manda cuando discrepan explica buena parte de cómo se aprueban aquí las leyes.":
    "Warum das wichtig ist: Spanien hat zwei Kammern, aber sie wiegen nicht gleich. Zu wissen, welche bei Uneinigkeit entscheidet, erklärt einen guten Teil davon, wie hier Gesetze beschlossen werden.",
  "Dos cámaras desiguales": "Zwei ungleiche Kammern",
  "Las Cortes Generales, dice el **artículo 66**, representan al pueblo español y están formadas por el **Congreso de los Diputados** y el **Senado**. Ejercen la potestad legislativa, aprueban los **presupuestos** y **controlan** la acción del Gobierno.":
    "Die Cortes Generales, sagt **Artikel 66**, vertreten das spanische Volk und bestehen aus dem **Abgeordnetenkongress** und dem **Senat**. Sie üben die gesetzgebende Gewalt aus, beschließen den **Haushalt** und **kontrollieren** das Handeln der Regierung.",
  "El bicameralismo español es **imperfecto**, y la palabra es técnica, no despectiva: las dos cámaras no tienen el mismo peso. El **Congreso predomina**. Es el que inviste al presidente del Gobierno, el que puede derribarlo y el que tiene la última palabra cuando las dos discrepan sobre una ley.":
    "Der spanische Bikameralismus ist **unvollkommen**, und das Wort ist fachlich und nicht abwertend gemeint: die beiden Kammern haben nicht dasselbe Gewicht. Der **Kongress überwiegt**. Er ist es, der den Regierungspräsidenten einsetzt, der ihn stürzen kann und der bei Uneinigkeit über ein Gesetz das letzte Wort hat.",
  "Congreso": "Kongress",
  "350 diputados. La Constitución fija una horquilla de entre 300 y 400, y la ley electoral ha elegido siempre el número redondo.":
    "350 Abgeordnete. Die Verfassung legt eine Spanne zwischen 300 und 400 fest, und das Wahlgesetz hat stets die runde Zahl gewählt.",
  "Senado": "Senat",
  "Cámara de representación territorial: cuatro senadores por provincia elegidos directamente, más los que designan los parlamentos autonómicos.":
    "Kammer der territorialen Vertretung: vier direkt gewählte Senatoren je Provinz, dazu jene, die die Regionalparlamente benennen.",
  "Cuatro años": "Vier Jahre",
  "Es la duración de la legislatura, salvo disolución anticipada, que en España ha sido frecuente.":
    "So lange dauert die Wahlperiode, außer bei vorzeitiger Auflösung, die in Spanien häufig war.",
  "Diputación Permanente": "Der Ständige Ausschuss",
  "Cuando las cámaras están disueltas o fuera de periodo de sesiones, un grupo reducido vela por sus poderes.":
    "Sind die Kammern aufgelöst oder außerhalb der Sitzungsperiode, wacht eine kleine Gruppe über ihre Befugnisse.",
  "¿Cuántos diputados tiene el Congreso?": "Wie viele Abgeordnete hat der Kongress?",
  "Doscientos": "Zweihundert",
  "Trescientos": "Dreihundert",
  "Trescientos cincuenta": "Dreihundertfünfzig",
  "Cuatrocientos": "Vierhundert",
  "Trescientos cincuenta. La Constitución permite entre trescientos y cuatrocientos, y la ley electoral ha optado siempre por la cifra intermedia.":
    "Dreihundertfünfzig. Die Verfassung erlaubt zwischen dreihundert und vierhundert, und das Wahlgesetz hat sich stets für die mittlere Zahl entschieden.",
  "Cómo se elige el Congreso": "Wie der Kongress gewählt wird",
  "La circunscripción es la **provincia**, y Ceuta y Melilla eligen un diputado cada una. Cada provincia tiene un **mínimo inicial de dos escaños** y el resto se reparte en proporción a la población, lo que da a las provincias pequeñas más peso relativo del que les correspondería.":
    "Wahlkreis ist die **Provinz**, und Ceuta und Melilla wählen je einen Abgeordneten. Jede Provinz hat ein **Anfangsminimum von zwei Sitzen**, und der Rest wird nach Bevölkerung verteilt, was den kleinen Provinzen mehr Gewicht gibt, als ihnen zustünde.",
  "El reparto dentro de cada circunscripción se hace por el **sistema D'Hondt**, con **listas cerradas y bloqueadas**: se vota una candidatura entera, en el orden que fijó el partido, sin poder alterarlo. Quedan fuera las listas que no alcancen el **tres por ciento** de los votos válidos en su circunscripción.":
    "Die Verteilung innerhalb jedes Wahlkreises erfolgt nach dem **d'Hondt-Verfahren**, mit **geschlossenen und starren Listen**: man wählt eine ganze Kandidatur, in der Reihenfolge, die die Partei festgelegt hat, ohne sie ändern zu können. Draußen bleiben Listen, die in ihrem Wahlkreis nicht **drei Prozent** der gültigen Stimmen erreichen.",
  "El Senado y sus límites": "Der Senat und seine Grenzen",
  "En el Senado, cada provincia peninsular elige **cuatro senadores** por voto directo; las islas y las ciudades autónomas siguen reglas propias. A ellos se suman los designados por las **comunidades autónomas**: uno por comunidad y otro más por cada millón de habitantes.":
    "Im Senat wählt jede Festlandsprovinz **vier Senatoren** in direkter Wahl; für die Inseln und die autonomen Städte gelten eigene Regeln. Dazu kommen die von den **autonomen Gemeinschaften** benannten: einer je Gemeinschaft und ein weiterer je Million Einwohner.",
  "Cuando el Senado **veta** un proyecto o lo enmienda, el Congreso puede **levantar el veto** por **mayoría absoluta**, o por mayoría simple pasados **dos meses**. De ahí que al Senado se le llame a menudo cámara de segunda lectura, y que su reforma sea una discusión abierta desde hace décadas.":
    "Legt der Senat gegen einen Entwurf ein **Veto** ein oder ändert er ihn, kann der Kongress das **Veto** mit **absoluter Mehrheit** **überstimmen**, oder nach **zwei Monaten** mit einfacher Mehrheit. Deshalb nennt man den Senat oft die Kammer der zweiten Lesung, und deshalb ist seine Reform seit Jahrzehnten eine offene Debatte.",
  "¿Qué ocurre cuando el Senado veta un proyecto de ley?":
    "Was geschieht, wenn der Senat gegen einen Gesetzentwurf ein Veto einlegt?",
  "El proyecto decae definitivamente": "Der Entwurf fällt endgültig",
  "El Congreso puede levantar el veto por mayoría absoluta":
    "Der Kongress kann das Veto mit absoluter Mehrheit überstimmen",
  "Se convoca un referéndum": "Es wird ein Referendum angesetzt",
  "Decide el Tribunal Constitucional": "Das Verfassungsgericht entscheidet",
  "El Congreso levanta el veto por mayoría absoluta, o por mayoría simple transcurridos dos meses. Es la razón por la que el bicameralismo español se llama imperfecto.":
    "Der Kongress überstimmt das Veto mit absoluter Mehrheit oder nach zwei Monaten mit einfacher Mehrheit. Das ist der Grund, warum der spanische Bikameralismus unvollkommen heißt.",
  "¿Qué cámara se define como de representación territorial?":
    "Welche Kammer wird als Kammer der territorialen Vertretung bestimmt?",
  "El Congreso de los Diputados": "Der Abgeordnetenkongress",
  "El Senado": "Der Senat",
  "Las dos por igual": "Beide gleichermaßen",
  "Ninguna: la representación es siempre del conjunto del pueblo":
    "Keine: die Vertretung gilt immer dem ganzen Volk",
  "El artículo 69 define así al Senado. En la práctica su composición mezcla elección provincial y designación autonómica, y esa doble vía es uno de los motivos de que se discuta su reforma.":
    "So bestimmt es Artikel 69 für den Senat. In der Praxis mischt seine Zusammensetzung Wahl in der Provinz und Benennung durch die Gemeinschaften, und dieser doppelte Weg ist einer der Gründe, warum über seine Reform gestritten wird.",
  "El sistema D'Hondt no es lo que hace que las provincias pequeñas pesen más: eso lo produce el **mínimo de dos escaños por provincia**. Son dos efectos distintos que suelen atribuirse al mismo culpable.":
    "Nicht das d'Hondt-Verfahren lässt die kleinen Provinzen schwerer wiegen: das bewirkt das **Minimum von zwei Sitzen je Provinz**. Es sind zwei verschiedene Wirkungen, die man meist demselben Schuldigen zuschreibt.",
  // es-gobierno
  "Por qué importa: en España un gobierno no cae si pierde una votación. Solo cae si hay quien lo sustituya, y esa regla — copiada de Alemania y perfeccionada aquí — explica la estabilidad de los últimos cuarenta años.":
    "Warum das wichtig ist: in Spanien fällt eine Regierung nicht, wenn sie eine Abstimmung verliert. Sie fällt nur, wenn es jemanden gibt, der sie ersetzt, und diese Regel — von Deutschland übernommen und hier verfeinert — erklärt die Beständigkeit der letzten vierzig Jahre.",
  "Qué hace y quién lo forma": "Was sie tut und wer sie bildet",
  "El **artículo 97** encarga al Gobierno dirigir la **política interior y exterior**, la **Administración civil y militar** y la **defensa del Estado**, ejercer la **función ejecutiva** y la **potestad reglamentaria**. Lo componen el **presidente**, los **vicepresidentes** en su caso y los **ministros**, que reunidos forman el **Consejo de Ministros**. Su sede es el **Palacio de la Moncloa**.":
    "**Artikel 97** trägt der Regierung auf, die **Innen- und Außenpolitik**, die **zivile und militärische Verwaltung** und die **Verteidigung des Staates** zu führen sowie die **vollziehende Gewalt** und die **Verordnungsbefugnis** auszuüben. Sie besteht aus dem **Präsidenten**, gegebenenfalls den **Vizepräsidenten** und den **Ministerinnen und Ministern**, die zusammen den **Ministerrat** bilden. Ihr Sitz ist der **Palacio de la Moncloa**.",
  "La investidura": "Die Investitur",
  "El **artículo 99** describe el camino. Tras unas elecciones, el rey **consulta** a los representantes designados por los grupos políticos y, a través del presidente del Congreso, **propone un candidato**. El candidato expone su programa ante la cámara y pide su confianza.":
    "**Artikel 99** beschreibt den Weg. Nach einer Wahl **berät** der König mit den von den politischen Gruppen benannten Vertretern und **schlägt** über den Präsidenten des Kongresses **eine Kandidatin oder einen Kandidaten vor**. Die Kandidatin legt der Kammer ihr Programm dar und bittet um ihr Vertrauen.",
  "En la **primera votación** necesita la **mayoría absoluta**. Si no la obtiene, cuarenta y ocho horas después basta la **mayoría simple**, es decir, más síes que noes. Si transcurren **dos meses** desde la primera votación sin que nadie sea investido, el rey **disuelve las Cortes** y se convocan nuevas elecciones.":
    "In der **ersten Abstimmung** braucht sie die **absolute Mehrheit**. Erreicht sie diese nicht, genügt achtundvierzig Stunden später die **einfache Mehrheit**, also mehr Ja- als Neinstimmen. Vergehen **zwei Monate** seit der ersten Abstimmung, ohne dass jemand eingesetzt wird, **löst der König die Cortes auf**, und es werden Neuwahlen angesetzt.",
  "¿Qué mayoría se necesita en la primera votación de investidura?":
    "Welche Mehrheit braucht die erste Abstimmung über die Investitur?",
  "Mayoría simple": "Die einfache Mehrheit",
  "Mayoría absoluta": "Die absolute Mehrheit",
  "Tres quintos": "Drei Fünftel",
  "Dos tercios": "Zwei Drittel",
  "Mayoría absoluta en la primera votación. En la segunda, cuarenta y ocho horas después, basta con que haya más votos a favor que en contra.":
    "Die absolute Mehrheit in der ersten Abstimmung. In der zweiten, achtundvierzig Stunden später, genügt es, dass es mehr Stimmen dafür als dagegen gibt.",
  "La censura constructiva": "Das konstruktive Misstrauen",
  "La **moción de censura** española es **constructiva**: para derribar a un gobierno no basta con reunir votos en contra, hay que **presentar a la vez un candidato alternativo**. Si la moción prospera, ese candidato queda **automáticamente investido** presidente.":
    "Der spanische **Misstrauensantrag** ist **konstruktiv**: um eine Regierung zu stürzen, genügt es nicht, Gegenstimmen zu sammeln, man muss **zugleich eine Alternative benennen**. Hat der Antrag Erfolg, ist diese Person **automatisch** zur Präsidentin eingesetzt.",
  "La firma al menos la **décima parte** de los diputados y se vota transcurridos **cinco días**, durante los cuales pueden presentarse mociones alternativas. Exige **mayoría absoluta**. En más de cuarenta años solo ha prosperado **una vez**, en **2018**.":
    "Unterzeichnet wird er von mindestens einem **Zehntel** der Abgeordneten, und abgestimmt wird nach **fünf Tagen**, in denen alternative Anträge eingebracht werden können. Er verlangt die **absolute Mehrheit**. In über vierzig Jahren hatte er nur **einmal** Erfolg, **2018**.",
  "La figura inversa es la **cuestión de confianza**, que plantea el propio presidente sobre su programa o una declaración de política general: se gana con **mayoría simple**, y perderla obliga a dimitir.":
    "Die umgekehrte Figur ist die **Vertrauensfrage**, die der Präsident selbst zu seinem Programm oder zu einer allgemeinen politischen Erklärung stellt: gewonnen wird sie mit **einfacher Mehrheit**, und sie zu verlieren zwingt zum Rücktritt.",
  "¿Qué distingue a la moción de censura española?": "Was zeichnet den spanischen Misstrauensantrag aus?",
  "Que solo puede presentarla la oposición": "Dass ihn nur die Opposition einbringen kann",
  "Que es constructiva: debe incluir un candidato alternativo":
    "Dass er konstruktiv ist: er muss eine Alternative benennen",
  // es-gobierno
  "Que exige una mayoría de dos tercios": "Dass er eine Zweidrittelmehrheit verlangt",
  "Que la convoca el rey": "Dass ihn der König einbringt",
  "Sin candidato alternativo no hay moción. Es la razón de que solo haya prosperado una vez desde 1978: es fácil reunir votos contra alguien y difícil reunirlos a favor de un sustituto concreto.":
    "Ohne Alternative gibt es keinen Antrag. Das ist der Grund, warum er seit 1978 nur einmal Erfolg hatte: Stimmen gegen jemanden zu sammeln ist leicht, sie für einen bestimmten Nachfolger zu sammeln schwer.",
  "Disolver y seguir": "Auflösen und weitermachen",
  "El presidente puede **disolver** las Cortes y convocar elecciones anticipadas, con dos límites: no cabe hacerlo mientras esté en trámite una moción de censura, ni antes de que haya transcurrido **un año** desde la disolución anterior.":
    "Der Präsident kann die Cortes **auflösen** und vorgezogene Wahlen ansetzen, mit zwei Grenzen: nicht, solange ein Misstrauensantrag anhängig ist, und nicht, bevor **ein Jahr** seit der letzten Auflösung vergangen ist.",
  "Cuando el gobierno cesa, sigue **en funciones** hasta que tome posesión el siguiente. Un gobierno en funciones despacha lo ordinario y no puede, entre otras cosas, presentar proyectos de ley ni aprobar los presupuestos: mantiene el país en marcha, pero no lo dirige.":
    "Endet eine Regierung, bleibt sie **geschäftsführend** im Amt, bis die nächste vereidigt ist. Eine geschäftsführende Regierung erledigt das Laufende und kann unter anderem keine Gesetzentwürfe einbringen und keinen Haushalt beschließen: sie hält das Land in Gang, führt es aber nicht.",
  "¿Qué puede hacer un gobierno en funciones?": "Was darf eine geschäftsführende Regierung tun?",
  "Todo lo que hacía antes de cesar": "Alles, was sie vor dem Amtsende tat",
  "Despachar los asuntos ordinarios, sin presentar proyectos de ley ni presupuestos":
    "Die laufenden Geschäfte erledigen, ohne Gesetzentwürfe oder Haushalte einzubringen",
  "Nada: la Administración queda paralizada": "Nichts: die Verwaltung steht still",
  "Solo convocar elecciones": "Nur Wahlen ansetzen",
  "Se limita al despacho ordinario para que el país siga funcionando, pero no puede iniciar la acción legislativa ni aprobar presupuestos. España ha tenido periodos largos en esa situación.":
    "Sie beschränkt sich auf die laufenden Geschäfte, damit das Land weiterläuft, kann aber die Gesetzgebung nicht anstoßen und keinen Haushalt beschließen. Spanien hatte lange Zeiten in dieser Lage.",
  "**Jefe del Estado** y **presidente del Gobierno** son dos cargos distintos y dos edificios distintos: el rey en la **Zarzuela**, el presidente en la **Moncloa**. En España el jefe del Estado no preside el Gobierno.":
    "**Staatsoberhaupt** und **Regierungspräsident** sind zwei verschiedene Ämter in zwei verschiedenen Häusern: der König in der **Zarzuela**, der Präsident in der **Moncloa**. In Spanien führt das Staatsoberhaupt die Regierung nicht.",
  // es-justicia
  "Por qué importa: hay dos tribunales en la cumbre y no son el mismo. Uno cierra los pleitos; el otro juzga las leyes. Confundirlos es el error más común sobre la justicia española.":
    "Warum das wichtig ist: an der Spitze stehen zwei Gerichte, und es sind nicht dieselben. Das eine schließt Rechtsstreitigkeiten ab; das andere richtet über die Gesetze. Sie zu verwechseln ist der häufigste Irrtum über die spanische Justiz.",
  "Jueces sometidos solo a la ley": "Richter, allein dem Gesetz unterworfen",
  "El **artículo 117** dice que la justicia **emana del pueblo** y se administra **en nombre del rey** por jueces y magistrados **independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley**. Se entra en la carrera judicial por **oposición**, no por nombramiento político.":
    "**Artikel 117** sagt, dass die Justiz **vom Volk ausgeht** und **im Namen des Königs** von Richterinnen und Richtern verwaltet wird, die **unabhängig, unabsetzbar, verantwortlich und allein der Herrschaft des Gesetzes unterworfen** sind. In die richterliche Laufbahn kommt man über eine **Auswahlprüfung**, nicht über eine politische Ernennung.",
  "El **Consejo General del Poder Judicial** es su órgano de gobierno: decide nombramientos, ascensos, inspección y régimen disciplinario. Lo forman **veinte vocales** más su **presidente**, que lo es también del Tribunal Supremo, con un mandato de **cinco años**.":
    "Der **Generalrat der rechtsprechenden Gewalt** ist ihr Leitungsorgan: er entscheidet über Ernennungen, Beförderungen, Aufsicht und Dienstrecht. Er besteht aus **zwanzig Mitgliedern** und seinem **Präsidenten**, der zugleich Präsident des Obersten Gerichtshofs ist, mit einer Amtszeit von **fünf Jahren**.",
  "La escalera de los tribunales": "Die Leiter der Gerichte",
  "Juzgados": "Amtsgerichte",
  "La primera instancia, repartida por partidos judiciales. Aquí se ven los hechos.":
    "Die erste Instanz, über die Gerichtsbezirke verteilt. Hier werden die Tatsachen verhandelt.",
  "Audiencias Provinciales": "Provinzgerichte",
  "Resuelven los recursos de apelación en cada provincia.":
    "Sie entscheiden über die Berufungen in jeder Provinz.",
  "Tribunales Superiores de Justicia": "Obergerichte",
  "Uno por comunidad autónoma. Culminan la organización judicial en su territorio, sin ser una instancia superior al Supremo.":
    "Eines je autonome Gemeinschaft. Sie schließen die Gerichtsorganisation ihres Gebiets ab, ohne eine dem Obersten Gerichtshof übergeordnete Instanz zu sein.",
  "Tribunal Supremo": "Oberster Gerichtshof",
  "El órgano jurisdiccional superior en todos los órdenes, salvo en materia de garantías constitucionales.":
    "Das höchste Gericht in allen Zweigen, außer in Fragen der Verfassungsgarantien.",
  "La jurisdicción se divide en cuatro **órdenes**: **civil**, **penal**, **contencioso-administrativo** — para pleitos con la Administración — y **social**, para los laborales. Existe además la **Audiencia Nacional**, con competencia en toda España sobre delitos concretos como el terrorismo o los económicos de gran alcance.":
    "Die Gerichtsbarkeit gliedert sich in vier **Zweige**: **Zivil**, **Straf**, **Verwaltung** — für Streitigkeiten mit der Verwaltung — und **Arbeit**. Daneben gibt es die **Audiencia Nacional**, mit landesweiter Zuständigkeit für bestimmte Straftaten wie Terrorismus oder große Wirtschaftsdelikte.",
  "El **Ministerio Fiscal** promueve la acción de la justicia en defensa de la legalidad y del interés público. Su jefe, el **fiscal general del Estado**, lo nombra el rey a propuesta del Gobierno, oído el Consejo General del Poder Judicial.":
    "Die **Staatsanwaltschaft** setzt das Handeln der Justiz zur Wahrung der Rechtmäßigkeit und des öffentlichen Interesses in Gang. Ihren Leiter, den **Generalstaatsanwalt**, ernennt der König auf Vorschlag der Regierung, nach Anhörung des Generalrats der rechtsprechenden Gewalt.",
  "¿Cuál es el órgano de gobierno del poder judicial?":
    "Welches ist das Leitungsorgan der rechtsprechenden Gewalt?",
  "El Tribunal Supremo": "Der Oberste Gerichtshof",
  "El Consejo General del Poder Judicial": "Der Generalrat der rechtsprechenden Gewalt",
  "El Ministerio de Justicia": "Das Justizministerium",
  "El Tribunal Constitucional": "Das Verfassungsgericht",
  "El CGPJ decide nombramientos, ascensos e inspección. El Tribunal Supremo juzga; el Ministerio de Justicia administra medios materiales, y no manda sobre los jueces.":
    "Der Generalrat entscheidet über Ernennungen, Beförderungen und Aufsicht. Der Oberste Gerichtshof spricht Recht; das Justizministerium verwaltet die Sachmittel und hat den Richtern nichts zu befehlen.",
  "No forma parte del poder judicial: es un órgano **aparte**, regulado en su propio título. Tiene **doce magistrados**, nombrados por el rey a propuesta de cuatro órganos distintos, de modo que ninguno pueda componerlo por su cuenta.":
    "Es gehört nicht zur rechtsprechenden Gewalt: es ist ein **eigenes** Organ, in einem eigenen Titel geregelt. Es hat **zwölf Richterinnen und Richter**, vom König auf Vorschlag von vier verschiedenen Organen ernannt, damit keines es allein besetzen kann.",
  "Cuatro del Congreso": "Vier vom Kongress",
  "Elegidos por mayoría de tres quintos de la cámara.":
    "Von der Kammer mit einer Mehrheit von drei Fünfteln gewählt.",
  "Cuatro del Senado": "Vier vom Senat",
  "También por tres quintos, entre candidatos propuestos por los parlamentos autonómicos.":
    "Ebenfalls mit drei Fünfteln, aus den von den Regionalparlamenten vorgeschlagenen Kandidaturen.",
  "Dos del Gobierno": "Zwei von der Regierung",
  "Es la vía más directa del ejecutivo al tribunal.":
    "Es ist der unmittelbarste Weg der Exekutive an das Gericht.",
  "Dos del CGPJ": "Zwei vom Generalrat",
  "La aportación del gobierno de los jueces.": "Der Beitrag der Selbstverwaltung der Richterschaft.",
  "El mandato es de **nueve años** y el tribunal se renueva **por terceras partes cada tres**, de manera que nunca cambia entero de una vez. Sus competencias principales son el **recurso** y la **cuestión de inconstitucionalidad** contra las leyes, el **recurso de amparo** en defensa de los derechos fundamentales y los **conflictos de competencia** entre el Estado y las comunidades autónomas.":
    "Die Amtszeit beträgt **neun Jahre**, und das Gericht erneuert sich **alle drei Jahre um ein Drittel**, sodass es nie auf einmal ganz wechselt. Seine wichtigsten Zuständigkeiten sind die **Klage** und die **Vorlage wegen Verfassungswidrigkeit** gegen Gesetze, die **Verfassungsbeschwerde** zur Verteidigung der Grundrechte und die **Zuständigkeitskonflikte** zwischen dem Staat und den autonomen Gemeinschaften.",
  "¿Cuántos magistrados tiene el Tribunal Constitucional?":
    "Wie viele Richterinnen und Richter hat das Verfassungsgericht?",
  "Nueve": "Neun",
  "Veinte": "Zwanzig",
  "Doce, nombrados a propuesta de cuatro órganos distintos: cuatro del Congreso, cuatro del Senado, dos del Gobierno y dos del CGPJ. Veinte son los vocales del CGPJ.":
    "Zwölf, ernannt auf Vorschlag von vier verschiedenen Organen: vier vom Kongress, vier vom Senat, zwei von der Regierung und zwei vom Generalrat. Zwanzig ist die Zahl der Mitglieder des Generalrats.",
  "¿Forma el Tribunal Constitucional parte del poder judicial?":
    "Gehört das Verfassungsgericht zur rechtsprechenden Gewalt?",
  "Sí, es su órgano superior": "Ja, es ist ihr oberstes Organ",
  "No: es un órgano aparte, regulado en su propio título":
    "Nein: es ist ein eigenes Organ, in einem eigenen Titel geregelt",
  "Sí, es una sala del Tribunal Supremo": "Ja, es ist ein Senat des Obersten Gerichtshofs",
  "Solo cuando resuelve recursos de amparo": "Nur wenn es über Verfassungsbeschwerden entscheidet",
  "Está fuera del poder judicial y por encima de él en su materia. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria; el Constitucional juzga las leyes y los derechos fundamentales.":
    "Es steht außerhalb der rechtsprechenden Gewalt und in seiner Materie über ihr. Der Oberste Gerichtshof ist die Spitze der ordentlichen Gerichtsbarkeit; das Verfassungsgericht richtet über die Gesetze und die Grundrechte.",
  "Los **Tribunales Superiores de Justicia** culminan la organización judicial **en su comunidad**, pero no están por encima del Supremo. Autonómico no significa aquí una instancia más alta, sino un ámbito distinto.":
    "Die **Obergerichte** schließen die Gerichtsorganisation **in ihrer Gemeinschaft** ab, stehen aber nicht über dem Obersten Gerichtshof. Regional heißt hier keine höhere Instanz, sondern ein anderer Bereich.",
  // es-participacion
  "Por qué importa: en España se vota en cuatro elecciones distintas, y en una de ellas no se elige a quien acaba mandando. Ese detalle sorprende a mucha gente el día que estrena el censo.":
    "Warum das wichtig ist: in Spanien wählt man bei vier verschiedenen Anlässen, und bei einem davon wählt man nicht die Person, die am Ende regiert. Dieses Detail überrascht viele an dem Tag, an dem sie zum ersten Mal im Wählerverzeichnis stehen.",
  "Cuatro urnas": "Vier Urnen",
  "El sufragio es **universal, libre, igual, directo y secreto**, y se ejerce desde los **dieciocho años**. Se vota en cuatro convocatorias distintas, que no coinciden en el tiempo ni tienen las mismas reglas.":
    "Das Wahlrecht ist **allgemein, frei, gleich, unmittelbar und geheim** und wird ab **achtzehn Jahren** ausgeübt. Gewählt wird bei vier verschiedenen Anlässen, die zeitlich nicht zusammenfallen und nicht denselben Regeln folgen.",
  "Generales": "Parlamentswahlen",
  "Para el Congreso y el Senado, cada cuatro años salvo disolución anticipada.":
    "Für Kongress und Senat, alle vier Jahre, außer bei vorgezogener Auflösung.",
  "Autonómicas": "Regionalwahlen",
  "Para el parlamento de cada comunidad. Muchas coinciden en el mismo día, pero no todas.":
    "Für das Parlament jeder Gemeinschaft. Viele fallen auf denselben Tag, aber nicht alle.",
  "Municipales": "Kommunalwahlen",
  "Para el pleno del ayuntamiento. Se celebran a la vez en toda España.":
    "Für die Ratsversammlung der Gemeinde. Sie finden in ganz Spanien gleichzeitig statt.",
  "Europeas": "Europawahlen",
  "Para el Parlamento Europeo, con España como circunscripción única.":
    "Für das Europäische Parlament, mit Spanien als einem einzigen Wahlkreis.",
  "En las **municipales** se eligen **concejales**, no alcaldes. Es el pleno del ayuntamiento, ya constituido, el que **elige al alcalde** entre los cabezas de lista. Si ninguno logra la mayoría absoluta de los concejales, resulta elegido el que encabezó la lista más votada.":
    "Bei den **Kommunalwahlen** wählt man **Ratsmitglieder**, keine Bürgermeister. Die bereits gebildete Ratsversammlung ist es, die den **Bürgermeister wählt**, unter den Spitzenkandidaten. Erreicht niemand die absolute Mehrheit der Ratsmitglieder, ist gewählt, wer die stimmenstärkste Liste angeführt hat.",
  "¿Quién elige al alcalde en España?": "Wer wählt in Spanien den Bürgermeister?",
  "Los vecinos, con voto directo al candidato": "Die Einwohner, durch Direktwahl der Person",
  "Los concejales, en el pleno de constitución": "Die Ratsmitglieder, in der konstituierenden Sitzung",
  "El presidente de la comunidad autónoma": "Der Präsident der autonomen Gemeinschaft",
  "El delegado del Gobierno": "Der Regierungsbeauftragte",
  "En las municipales se vota una lista de concejales y son ellos quienes eligen alcalde. Si nadie reúne mayoría absoluta, lo es el cabeza de la lista más votada.":
    "Bei den Kommunalwahlen wählt man eine Liste von Ratsmitgliedern, und diese wählen den Bürgermeister. Erreicht niemand die absolute Mehrheit, ist es der Spitzenkandidat der stimmenstärksten Liste.",
  "Partidos y sindicatos": "Parteien und Gewerkschaften",
  "El **artículo 6** define a los **partidos políticos** como expresión del pluralismo político e instrumento fundamental de la participación, y exige que su **estructura interna y su funcionamiento sean democráticos**. El **artículo 7** dice lo mismo de los **sindicatos** y de las **asociaciones empresariales**.":
    "**Artikel 6** bestimmt die **politischen Parteien** als Ausdruck des politischen Pluralismus und als grundlegendes Werkzeug der Beteiligung und verlangt, dass ihr **innerer Aufbau und ihre Arbeitsweise demokratisch** sind. **Artikel 7** sagt dasselbe über die **Gewerkschaften** und die **Arbeitgeberverbände**.",
  "Los dos sindicatos mayoritarios son **Comisiones Obreras** y la **Unión General de Trabajadores**, a los que se suman otros de ámbito autonómico o sectorial. La afiliación es baja en comparación europea, pero su papel es grande, porque los convenios que negocian se aplican a todo el sector y no solo a los afiliados.":
    "Die beiden größten Gewerkschaften sind **Comisiones Obreras** und die **Unión General de Trabajadores**, dazu kommen weitere auf regionaler oder Branchenebene. Der Organisationsgrad ist im europäischen Vergleich niedrig, ihre Rolle aber groß, weil die von ihnen ausgehandelten Tarifverträge für die ganze Branche gelten und nicht nur für die Mitglieder.",
  "Participar sin ser elegido": "Mitwirken, ohne gewählt zu sein",
  "Iniciativa legislativa popular": "Volksgesetzesinitiative",
  "Quinientas mil firmas acreditadas permiten llevar una proposición de ley al Congreso. Quedan fuera materias como los tributos o el derecho de gracia.":
    "Fünfhunderttausend beglaubigte Unterschriften erlauben es, einen Gesetzesvorschlag in den Kongress zu bringen. Ausgenommen bleiben Materien wie die Steuern oder das Gnadenrecht.",
  "Derecho de petición": "Petitionsrecht",
  "El artículo 29 permite dirigirse por escrito a los poderes públicos. Es antiguo, sencillo y poco usado.":
    "Artikel 29 erlaubt es, sich schriftlich an die öffentliche Gewalt zu wenden. Es ist alt, einfach und wenig genutzt.",
  "Referéndum consultivo": "Beratendes Referendum",
  "El artículo 92 lo prevé para decisiones de especial trascendencia. Lo convoca el rey, a propuesta del presidente autorizada por el Congreso.":
    "Artikel 92 sieht es für Entscheidungen von besonderer Tragweite vor. Angesetzt wird es vom König, auf Vorschlag des Präsidenten mit Ermächtigung des Kongresses.",
  "El jurado": "Die Geschworenen",
  "El artículo 125 abre la participación en la Administración de Justicia. El tribunal del jurado juzga determinados delitos.":
    "Artikel 125 öffnet die Mitwirkung an der Rechtspflege. Das Geschworenengericht richtet über bestimmte Straftaten.",
  "Dos instituciones vigilan por cuenta de las Cortes. El **Defensor del Pueblo** es su **alto comisionado** para la defensa de los derechos del título I: supervisa la actividad de la Administración y puede interponer recursos ante el Tribunal Constitucional, aunque sus resoluciones no son ejecutivas. El **Tribunal de Cuentas** fiscaliza las cuentas y la gestión económica del Estado y del sector público.":
    "Zwei Einrichtungen wachen im Auftrag der Cortes. Der **Bürgerbeauftragte** ist ihr **Hoher Kommissar** für die Verteidigung der Rechte des Titels I: er überwacht das Handeln der Verwaltung und kann vor dem Verfassungsgericht klagen, auch wenn seine Entscheidungen nicht vollstreckbar sind. Der **Rechnungshof** prüft die Rechnungen und die Wirtschaftsführung des Staates und des öffentlichen Sektors.",
  "¿Cuántas firmas se necesitan para una iniciativa legislativa popular?":
    "Wie viele Unterschriften braucht eine Volksgesetzesinitiative?",
  "Cincuenta mil": "Fünfzigtausend",
  "Cien mil": "Einhunderttausend",
  "Quinientas mil": "Fünfhunderttausend",
  "Un millón": "Eine Million",
  "Quinientas mil firmas acreditadas. Además hay materias excluidas: los tributos, lo internacional, el derecho de gracia y las leyes orgánicas quedan fuera de esta vía.":
    "Fünfhunderttausend beglaubigte Unterschriften. Außerdem gibt es ausgeschlossene Materien: Steuern, das Völkerrecht, das Gnadenrecht und die Organgesetze bleiben von diesem Weg ausgenommen.",
  "¿Qué es el Defensor del Pueblo?": "Was ist der Bürgerbeauftragte?",
  "Un tribunal que anula actos administrativos": "Ein Gericht, das Verwaltungsakte aufhebt",
  "El alto comisionado de las Cortes para la defensa de los derechos fundamentales":
    "Der Hohe Kommissar der Cortes für die Verteidigung der Grundrechte",
  "Un ministerio del Gobierno": "Ein Ministerium der Regierung",
  "El fiscal jefe del Tribunal Supremo": "Der leitende Staatsanwalt beim Obersten Gerichtshof",
  "Depende de las Cortes, no del Gobierno, y supervisa a la Administración. Sus resoluciones no obligan, pero puede recurrir leyes ante el Tribunal Constitucional.":
    "Er hängt von den Cortes ab, nicht von der Regierung, und überwacht die Verwaltung. Seine Entscheidungen binden nicht, aber er kann Gesetze vor dem Verfassungsgericht anfechten.",
  "En las **autonómicas** tampoco se vota directamente al presidente de la comunidad: se elige el parlamento, y este lo inviste. La única elección directa de una persona en España es la del **Senado**.":
    "Auch bei den **Regionalwahlen** wählt man den Präsidenten der Gemeinschaft nicht unmittelbar: gewählt wird das Parlament, und dieses setzt ihn ein. Die einzige unmittelbare Wahl einer Person in Spanien ist die zum **Senat**.",
  // es-hispania-al-andalus
  "Por qué se empieza aquí: durante casi ocho siglos la Península no fue un país sino varios, y dos mundos convivieron en ella. Esa larga frontera interior explica más de España que cualquier fecha suelta.":
    "Warum man hier anfängt: fast acht Jahrhunderte lang war die Halbinsel kein Land, sondern mehrere, und zwei Welten lebten in ihr nebeneinander. Diese lange innere Grenze erklärt mehr von Spanien als jedes einzelne Datum.",
  "Antes de Roma": "Vor Rom",
  "La Península estuvo poblada por **íberos** en el este y el sur y por pueblos **celtas** en el interior y el noroeste, con **Tartessos** como la civilización más antigua de la que hablan las fuentes. Por la costa llegaron **fenicios**, **griegos** y **cartagineses** a comerciar: **Cádiz**, fundada por fenicios, se considera la ciudad más antigua de Europa occidental.":
    "Die Halbinsel war im Osten und Süden von **Iberern** und im Inneren und Nordwesten von **keltischen** Völkern besiedelt, mit **Tartessos** als der ältesten Kultur, von der die Quellen berichten. Über die Küste kamen **Phönizier**, **Griechen** und **Karthager** zum Handel: **Cádiz**, von Phöniziern gegründet, gilt als die älteste Stadt Westeuropas.",
  "Hispania": "Hispania",
  "Los romanos desembarcaron en **Ampurias en el 218 antes de Cristo**, durante la segunda guerra púnica, y tardaron **dos siglos** en dominar el territorio: la resistencia del norte no cedió hasta las **guerras cántabras**, hacia el 19 antes de Cristo.":
    "Die Römer landeten **218 vor Christus in Empúries**, während des Zweiten Punischen Krieges, und brauchten **zwei Jahrhunderte**, um das Land zu beherrschen: der Widerstand des Nordens gab erst mit den **Kantabrischen Kriegen** um 19 vor Christus nach.",
  "De Roma quedan la **lengua** —del latín salen el castellano, el gallego y el catalán—, el **derecho**, las **ciudades** y las obras que aún se usan: el **acueducto de Segovia**, el teatro de **Mérida**, las murallas de Lugo. Hispania dio además al imperio tres emperadores —**Trajano**, **Adriano** y **Teodosio**— y al pensamiento a **Séneca**.":
    "Von Rom bleiben die **Sprache** — aus dem Lateinischen gehen Kastilisch, Galicisch und Katalanisch hervor —, das **Recht**, die **Städte** und die Bauwerke, die noch benutzt werden: das **Aquädukt von Segovia**, das Theater von **Mérida**, die Mauern von Lugo. Hispania gab dem Reich außerdem drei Kaiser — **Trajan**, **Hadrian** und **Theodosius** — und dem Denken **Seneca**.",
  "¿Qué emperadores romanos nacieron en Hispania?": "Welche römischen Kaiser wurden in Hispania geboren?",
  "Augusto y Nerón": "Augustus und Nero",
  "Trajano y Adriano": "Trajan und Hadrian",
  "César y Calígula": "Caesar und Caligula",
  "Constantino y Justiniano": "Konstantin und Justinian",
  "Trajano y Adriano nacieron en Itálica, cerca de la actual Sevilla, y Teodosio en la actual Segovia. Hispania no fue solo una provincia: llegó a dar emperadores al imperio.":
    "Trajan und Hadrian wurden in Italica beim heutigen Sevilla geboren und Theodosius im heutigen Segovia. Hispania war nicht nur eine Provinz: es gab dem Reich Kaiser.",
  "Los visigodos": "Die Westgoten",
  "Con el imperio en descomposición entraron **suevos, vándalos y alanos** en el **409**, y tras ellos los **visigodos**, que acabaron formando un reino con capital en **Toledo**. Su momento decisivo llegó en el **589**, cuando el rey **Recaredo** abandonó el arrianismo y se convirtió al **catolicismo** en el III Concilio de Toledo: religión y monarquía quedaron unidas, y así seguirían durante siglos.":
    "Als das Reich zerfiel, kamen **409** Sueben, Vandalen und Alanen und nach ihnen die **Westgoten**, die schließlich ein Reich mit der Hauptstadt **Toledo** bildeten. Sein entscheidender Augenblick kam **589**, als König **Rekkared** den Arianismus aufgab und im III. Konzil von Toledo zum **Katholizismus** übertrat: Religion und Monarchie waren fortan verbunden, und das blieben sie jahrhundertelang.",
  "711 y al-Ándalus": "711 und al-Andalus",
  "En el **711** un ejército musulmán cruzó el Estrecho y derrotó al rey visigodo Rodrigo en la batalla de **Guadalete**. En pocos años dominó casi toda la Península, a la que llamó **al-Ándalus**.":
    "**711** überquerte ein muslimisches Heer die Meerenge und schlug den westgotischen König Roderich in der Schlacht am **Guadalete**. In wenigen Jahren beherrschte es fast die ganze Halbinsel, die es **al-Andalus** nannte.",
  "El momento de mayor esplendor fue el **Califato de Córdoba**, proclamado por **Abderramán III** en el **929**. Córdoba llegó a ser la ciudad más poblada de Europa occidental, con bibliotecas, baños y una mezquita que aún se levanta. En el **1031** el califato se deshizo en los **reinos de taifas**, y la Península se fragmentó todavía más.":
    "Die größte Blüte war das **Kalifat von Córdoba**, das **Abd ar-Rahman III.** **929** ausrief. Córdoba wurde die bevölkerungsreichste Stadt Westeuropas, mit Bibliotheken, Bädern und einer Moschee, die noch heute steht. **1031** zerfiel das Kalifat in die **Taifa-Königreiche**, und die Halbinsel zersplitterte weiter.",
  "La Mezquita de Córdoba": "Die Moschee von Córdoba",
  "Ampliada durante dos siglos y convertida en catedral tras la conquista. El bosque de columnas sigue en pie.":
    "Über zwei Jahrhunderte erweitert und nach der Eroberung in eine Kathedrale verwandelt. Der Wald aus Säulen steht weiterhin.",
  "La Alhambra": "Die Alhambra",
  "Palacio y fortaleza del reino nazarí de Granada, el último de al-Ándalus, construido sobre todo en el siglo XIV.":
    "Palast und Festung des nasridischen Königreichs Granada, des letzten von al-Andalus, vor allem im 14. Jahrhundert erbaut.",
  "La Escuela de Toledo": "Die Schule von Toledo",
  "Traductores cristianos, musulmanes y judíos vertieron al latín obras griegas y árabes que Europa había perdido.":
    "Christliche, muslimische und jüdische Übersetzer brachten griechische und arabische Werke ins Lateinische, die Europa verloren hatte.",
  "El Camino de Santiago": "Der Jakobsweg",
  "Desde el siglo IX peregrinos de toda Europa cruzan el norte peninsular. Sigue haciéndose hoy.":
    "Seit dem 9. Jahrhundert durchqueren Pilger aus ganz Europa den Norden der Halbinsel. Er wird bis heute gegangen.",
  "¿En qué año cruzaron el Estrecho los ejércitos musulmanes?":
    "In welchem Jahr überquerten die muslimischen Heere die Meerenge?",
  "En el 409": "409",
  "En el 589": "589",
  "En el 711": "711",
  "En el 1031": "1031",
  "El 711, con la derrota del rey visigodo Rodrigo en Guadalete. El 589 es la conversión de Recaredo y el 1031 el fin del Califato de Córdoba.":
    "711, mit der Niederlage des westgotischen Königs Roderich am Guadalete. 589 ist der Übertritt Rekkareds und 1031 das Ende des Kalifats von Córdoba.",
  "Los reinos del norte": "Die Königreiche des Nordens",
  "En la franja cantábrica se formó el reino de **Asturias**, cuyo origen la tradición sitúa en **Covadonga**, y de él salieron **León** y **Castilla**. Al este surgieron **Navarra**, **Aragón** y los **condados catalanes**, unidos a Aragón en el siglo XII. Del oeste leonés nació **Portugal**.":
    "Am kantabrischen Streifen bildete sich das Königreich **Asturien**, dessen Ursprung die Überlieferung nach **Covadonga** legt, und aus ihm gingen **León** und **Kastilien** hervor. Im Osten entstanden **Navarra**, **Aragón** und die **katalanischen Grafschaften**, die sich im 12. Jahrhundert mit Aragón verbanden. Aus dem leonesischen Westen entstand **Portugal**.",
  "El avance hacia el sur fue lento y desigual, con siglos de treguas, pactos y matrimonios además de batallas. **Toledo** cayó en **1085**, la victoria de **Las Navas de Tolosa** en **1212** abrió Andalucía, **Sevilla** en **1248**. Solo quedó el **reino nazarí de Granada**, que resistiría dos siglos y medio más.":
    "Der Vorstoß nach Süden war langsam und ungleichmäßig, mit Jahrhunderten von Waffenruhen, Verträgen und Heiraten neben den Schlachten. **Toledo** fiel **1085**, der Sieg bei **Las Navas de Tolosa** **1212** öffnete Andalusien, **Sevilla** folgte **1248**. Übrig blieb allein das **nasridische Königreich Granada**, das noch zweieinhalb Jahrhunderte standhalten sollte.",
  "¿Qué ciudad fue la capital del Califato?": "Welche Stadt war die Hauptstadt des Kalifats?",
  "Toledo": "Toledo",
  "Córdoba": "Córdoba",
  "Sevilla": "Sevilla",
  "Córdoba, desde el 929. Toledo había sido la capital visigoda y Granada fue la sede del último reino nazarí, dos siglos y medio después de que el califato desapareciera.":
    "Córdoba, ab 929. Toledo war die westgotische Hauptstadt gewesen, und Granada war der Sitz des letzten nasridischen Königreichs, zweieinhalb Jahrhunderte nach dem Ende des Kalifats.",
  "Ocho siglos no son ocho siglos de guerra continua. Hubo largos periodos de tregua, alianzas cruzadas entre reyes cristianos y musulmanes, y un intercambio constante de libros, cultivos y palabras: buena parte del vocabulario español de la agricultura y la ciencia viene del árabe.":
    "Acht Jahrhunderte sind nicht acht Jahrhunderte ununterbrochenen Krieges. Es gab lange Zeiten der Waffenruhe, wechselnde Bündnisse zwischen christlichen und muslimischen Königen und einen ständigen Austausch von Büchern, Pflanzen und Wörtern: ein guter Teil des spanischen Wortschatzes für Landwirtschaft und Wissenschaft kommt aus dem Arabischen.",
  // es-reyes-catolicos
  "Por qué importa: en un solo año, 1492, España termina una guerra de siglos, expulsa a una parte de su población y llega a un continente que no sabía que existía. Casi todo lo que viene después arranca de ahí.":
    "Warum das wichtig ist: in einem einzigen Jahr, 1492, beendet Spanien einen jahrhundertelangen Krieg, vertreibt einen Teil seiner Bevölkerung und erreicht einen Kontinent, von dem es nicht wusste, dass es ihn gibt. Fast alles Folgende nimmt dort seinen Anfang.",
  "Una unión de personas, no de reinos": "Eine Verbindung von Personen, nicht von Reichen",
  "**Isabel de Castilla** y **Fernando de Aragón** se casaron en **1469**. Lo que unieron fue una **corona**, no un Estado: cada reino conservó sus leyes, sus cortes, su moneda y sus aduanas. España nació como una **unión dinástica**, y la unificación jurídica no llegaría hasta el siglo XVIII.":
    "**Isabella von Kastilien** und **Ferdinand von Aragón** heirateten **1469**. Was sie verbanden, war eine **Krone**, kein Staat: jedes Reich behielt seine Gesetze, seine Cortes, seine Münze und seine Zollgrenzen. Spanien entstand als **dynastische Union**, und die rechtliche Vereinheitlichung kam erst im 18. Jahrhundert.",
  "1492": "1492",
  "La toma de Granada": "Die Einnahme Granadas",
  "El 2 de enero cae el último reino nazarí, y con él termina la presencia política musulmana en la Península.":
    "Am 2. Januar fällt das letzte nasridische Königreich, und mit ihm endet die politische Anwesenheit des Islam auf der Halbinsel.",
  "La expulsión de los judíos": "Die Vertreibung der Juden",
  "El decreto de marzo obliga a convertirse o marchar. Los sefardíes conservaron durante siglos su lengua, y hoy tienen un plazo reducido para pedir la nacionalidad.":
    "Das Dekret vom März zwingt zur Bekehrung oder zum Weggang. Die Sephardinnen und Sepharden bewahrten ihre Sprache jahrhundertelang und haben heute eine verkürzte Frist, um die Staatsangehörigkeit zu beantragen.",
  "La llegada a América": "Die Ankunft in Amerika",
  "El 12 de octubre Colón alcanza una isla del Caribe. Es la fecha de la actual Fiesta Nacional.":
    "Am 12. Oktober erreicht Kolumbus eine Insel der Karibik. Es ist das Datum des heutigen Nationalfeiertags.",
  "La Gramática de Nebrija": "Die Grammatik von Nebrija",
  "La primera gramática de una lengua romance. Se publicó ese mismo año, y no por casualidad.":
    "Die erste Grammatik einer romanischen Sprache. Sie erschien im selben Jahr, und das nicht zufällig.",
  "En **1512** se incorporó **Navarra**, con lo que la Península quedó bajo una sola corona salvo Portugal. La empresa americana convirtió a Castilla en cabeza de un imperio en pocas décadas.":
    "**1512** kam **Navarra** hinzu, womit die Halbinsel bis auf Portugal unter einer einzigen Krone stand. Das amerikanische Unternehmen machte Kastilien in wenigen Jahrzehnten zum Kopf eines Weltreichs.",
  "¿Qué tres hechos coinciden en el año 1492?": "Welche drei Ereignisse fallen in das Jahr 1492?",
  "La toma de Granada, la expulsión de los judíos y la llegada a América":
    "Die Einnahme Granadas, die Vertreibung der Juden und die Ankunft in Amerika",
  "La unión de Castilla y Aragón, la conquista de Navarra y la de Portugal":
    "Die Vereinigung von Kastilien und Aragón, die Eroberung Navarras und die Portugals",
  "La llegada de los Borbones, Utrecht y los Decretos de Nueva Planta":
    "Die Ankunft der Bourbonen, Utrecht und die Dekrete der Neuen Ordnung",
  "La fundación de Madrid, la de Sevilla y la de Cádiz":
    "Die Gründung von Madrid, von Sevilla und von Cádiz",
  "Los tres ocurren en 1492, junto con la publicación de la primera gramática castellana. Navarra se incorporó en 1512 y Portugal solo estuvo unido a la corona entre 1580 y 1640.":
    "Alle drei fallen in das Jahr 1492, zusammen mit dem Erscheinen der ersten kastilischen Grammatik. Navarra kam 1512 hinzu, und Portugal war nur zwischen 1580 und 1640 mit der Krone verbunden.",
  "Los Austrias": "Die Habsburger",
  "**Carlos I** heredó en **1516** un conjunto sin precedentes: Castilla, Aragón, los territorios italianos, Flandes, Austria y América. Como **Carlos V** fue también emperador del Sacro Imperio. Su hijo **Felipe II** fijó la capital en **Madrid** en **1561**, construyó **El Escorial** y sumó **Portugal** en **1580**, en una unión que duraría hasta **1640**.":
    "**Karl I.** erbte **1516** ein beispielloses Gebilde: Kastilien, Aragón, die italienischen Gebiete, Flandern, Österreich und Amerika. Als **Karl V.** war er zugleich Kaiser des Heiligen Römischen Reiches. Sein Sohn **Philipp II.** machte **1561 Madrid** zur Hauptstadt, baute den **Escorial** und fügte **1580 Portugal** hinzu, in einer Verbindung, die bis **1640** dauern sollte.",
  "De aquella extensión viene la frase del imperio **donde nunca se ponía el sol**. También vinieron guerras interminables, tres bancarrotas y una economía que dependía de la plata americana más que de su propia producción.":
    "Von jener Ausdehnung stammt der Satz vom Reich, **in dem die Sonne nie unterging**. Von ihr kamen auch endlose Kriege, drei Staatsbankrotte und eine Wirtschaft, die mehr vom amerikanischen Silber abhing als von der eigenen Erzeugung.",
  "El Siglo de Oro": "Das Goldene Zeitalter",
  "Mientras el poder político se desgastaba, la cultura vivió su mayor momento. **Cervantes** publicó el **Quijote** en **1605**, considerado la primera novela moderna; escribieron **Lope de Vega**, **Calderón**, **Quevedo** y **Góngora**; pintaron **El Greco**, **Velázquez** y **Murillo**. **Las Meninas**, de 1656, sigue en el **Museo del Prado**.":
    "Während sich die politische Macht abnutzte, erlebte die Kultur ihre größte Zeit. **Cervantes** veröffentlichte **1605** den **Don Quijote**, der als erster moderner Roman gilt; es schrieben **Lope de Vega**, **Calderón**, **Quevedo** und **Góngora**; es malten **El Greco**, **Velázquez** und **Murillo**. **Las Meninas** von 1656 hängt weiterhin im **Prado**.",
  "¿Quién escribió el Quijote?": "Wer schrieb den Don Quijote?",
  "Lope de Vega": "Lope de Vega",
  "Miguel de Cervantes": "Miguel de Cervantes",
  "Francisco de Quevedo": "Francisco de Quevedo",
  "Pedro Calderón de la Barca": "Pedro Calderón de la Barca",
  "Cervantes publicó la primera parte en 1605 y la segunda en 1615. Se considera la primera novela moderna, y el 23 de abril, fecha de su muerte, es el Día del Libro.":
    "Cervantes veröffentlichte den ersten Teil 1605 und den zweiten 1615. Der Roman gilt als der erste moderne, und der 23. April, sein Todestag, ist der Tag des Buches.",
  "Los Borbones": "Die Bourbonen",
  "La muerte sin descendencia del último Austria abrió en **1700** la **Guerra de Sucesión**, una guerra europea peleada también dentro de España. La ganó **Felipe V**, el primer **Borbón**, y el **Tratado de Utrecht** de **1713** repartió los despojos: España perdió sus territorios europeos y **Gibraltar**, que sigue siendo británico.":
    "Der kinderlose Tod des letzten Habsburgers eröffnete **1700** den **Spanischen Erbfolgekrieg**, einen europäischen Krieg, der auch in Spanien selbst ausgetragen wurde. Ihn gewann **Philipp V.**, der erste **Bourbone**, und der **Friede von Utrecht** von **1713** verteilte die Beute: Spanien verlor seine europäischen Gebiete und **Gibraltar**, das britisch geblieben ist.",
  "Felipe V impuso los **Decretos de Nueva Planta**, que suprimieron las instituciones propias de la Corona de Aragón y extendieron el modelo castellano. La unión dinástica de 1469 se convirtió entonces, dos siglos y medio después, en un Estado unificado.":
    "Philipp V. setzte die **Dekrete der Neuen Ordnung** durch, die die eigenen Einrichtungen der Krone Aragón beseitigten und das kastilische Modell ausdehnten. Die dynastische Union von 1469 wurde damit, zweieinhalb Jahrhunderte später, zu einem einheitlichen Staat.",
  "¿Qué dinastía llegó al trono tras la Guerra de Sucesión?":
    "Welche Dynastie kam nach dem Erbfolgekrieg auf den Thron?",
  "Los Trastámara": "Die Trastámara",
  "Los Saboya": "Die Savoyer",
  "Los Borbones, con Felipe V, y siguen reinando hoy. Los Trastámara fueron la dinastía de los Reyes Católicos y los Saboya solo dieron un rey, Amadeo I, en el siglo XIX.":
    "Die Bourbonen, mit Philipp V., und sie regieren bis heute. Die Trastámara waren die Dynastie der Katholischen Könige, und die Savoyer stellten mit Amadeus I. im 19. Jahrhundert nur einen König.",
  "La unión de 1469 fue **dinástica**. Castilla y Aragón mantuvieron leyes, cortes y aduanas propias durante dos siglos y medio, y quien las suprimió fue un Borbón en el siglo XVIII, no los Reyes Católicos.":
    "Die Verbindung von 1469 war **dynastisch**. Kastilien und Aragón behielten zweieinhalb Jahrhunderte lang eigene Gesetze, Cortes und Zollgrenzen, und wer sie beseitigte, war im 18. Jahrhundert ein Bourbone, nicht die Katholischen Könige.",
  // es-siglo-xix
  "Por qué importa: en cien años España pierde un imperio, estrena su primera constitución, se pelea consigo misma tres veces y prueba una república que dura once meses. La inestabilidad del XIX explica la del XX.":
    "Warum das wichtig ist: in hundert Jahren verliert Spanien ein Weltreich, bekommt seine erste Verfassung, führt dreimal Krieg gegen sich selbst und versucht eine Republik, die elf Monate hält. Die Unbeständigkeit des 19. Jahrhunderts erklärt die des 20.",
  "1808": "1808",
  "Napoleón entró en España con la excusa de atravesarla hacia Portugal y acabó colocando en el trono a su hermano **José I**. El **2 de mayo de 1808** el pueblo de Madrid se levantó, y con él el resto del país: empezó la **Guerra de la Independencia**, seis años de guerra irregular que dieron al mundo la palabra **guerrilla**.":
    "Napoleon zog unter dem Vorwand, auf dem Weg nach Portugal zu sein, in Spanien ein und setzte am Ende seinen Bruder **Joseph I.** auf den Thron. Am **2. Mai 1808** erhob sich das Volk von Madrid, und mit ihm der Rest des Landes: es begann der **Unabhängigkeitskrieg**, sechs Jahre irregulären Krieges, die der Welt das Wort **Guerilla** gaben.",
  "La Pepa": "La Pepa",
  "Mientras el país estaba ocupado, unas Cortes reunidas en **Cádiz** —la ciudad que resistía— aprobaron el **19 de marzo de 1812** la primera **Constitución** española. Como ese día es San José, se la conoce como **La Pepa**.":
    "Während das Land besetzt war, beschlossen Cortes, die sich in **Cádiz** versammelt hatten — der Stadt, die standhielt —, am **19. März 1812** die erste spanische **Verfassung**. Weil dieser Tag der Josefstag ist, heißt sie **La Pepa**.",
  "Proclamaba la **soberanía nacional**, la división de poderes y la libertad de imprenta. Duró poco: **Fernando VII** volvió en **1814**, la derogó y restauró el absolutismo. Ese vaivén entre texto liberal y vuelta atrás se repetiría durante todo el siglo.":
    "Sie verkündete die **nationale Souveränität**, die Gewaltenteilung und die Pressefreiheit. Sie hielt nicht lange: **Ferdinand VII.** kehrte **1814** zurück, hob sie auf und stellte den Absolutismus wieder her. Dieses Hin und Her zwischen liberalem Text und Rückschritt sollte sich das ganze Jahrhundert hindurch wiederholen.",
  "¿Cómo se conoce popularmente la Constitución de 1812?": "Wie heißt die Verfassung von 1812 im Volksmund?",
  "La Gloriosa": "La Gloriosa",
  "La Nanita": "La Nanita",
  "La Cadista": "La Cadista",
  "Se aprobó el 19 de marzo, día de San José, y de ahí el apodo. La Gloriosa es en cambio el nombre de la revolución de 1868.":
    "Sie wurde am 19. März beschlossen, dem Josefstag, und daher der Beiname. La Gloriosa ist dagegen der Name der Revolution von 1868.",
  // es-siglo-xix
  "El fin del imperio americano": "Das Ende des amerikanischen Reiches",
  "El vacío de poder de 1808 fue el detonante que las colonias esperaban. Entre **1810 y 1824** los territorios continentales de América se independizaron uno tras otro, y la batalla de **Ayacucho**, en 1824, cerró el proceso. Quedaron solo **Cuba**, **Puerto Rico** y **Filipinas**.":
    "Das Machtvakuum von 1808 war der Auslöser, auf den die Kolonien gewartet hatten. Zwischen **1810 und 1824** wurden die Festlandsgebiete Amerikas eines nach dem anderen unabhängig, und die Schlacht von **Ayacucho** schloss den Vorgang 1824 ab. Es blieben allein **Kuba**, **Puerto Rico** und die **Philippinen**.",
  "Un siglo de conflictos": "Ein Jahrhundert der Konflikte",
  "Las guerras carlistas": "Die Karlistenkriege",
  "Tres guerras civiles desde 1833 entre los partidarios de Isabel II y los del pretendiente Carlos. Enfrentaron dos ideas de país.":
    "Drei Bürgerkriege ab 1833 zwischen den Anhängern Isabellas II. und denen des Thronanwärters Karl. Sie stellten zwei Vorstellungen vom Land gegeneinander.",
  "El Sexenio Democrático": "Das Demokratische Sexennium",
  "De 1868 a 1874, tras la revolución llamada la Gloriosa. Incluyó un rey importado, Amadeo de Saboya, que abdicó a los dos años.":
    "Von 1868 bis 1874, nach der Revolution, die La Gloriosa hieß. Es umfasste einen importierten König, Amadeus von Savoyen, der nach zwei Jahren abdankte.",
  "La Primera República": "Die Erste Republik",
  "Proclamada en 1873, duró once meses y tuvo cuatro presidentes. Terminó con un golpe militar.":
    "1873 ausgerufen, dauerte sie elf Monate und hatte vier Präsidenten. Sie endete mit einem Militärputsch.",
  "La Restauración": "Die Restauration",
  "Desde 1875, con Alfonso XII. Cánovas diseñó un turno pactado entre dos partidos, sostenido por el caciquismo en el campo.":
    "Ab 1875, mit Alfons XII. Cánovas entwarf einen abgesprochenen Wechsel zwischen zwei Parteien, auf dem Land gestützt auf die Herrschaft örtlicher Machthaber.",
  "¿Cuánto duró la Primera República española?": "Wie lange dauerte die Erste Spanische Republik?",
  "Once meses": "Elf Monate",
  "Tres años": "Drei Jahre",
  "Ocho años": "Acht Jahre",
  "Veinte años": "Zwanzig Jahre",
  "Proclamada en febrero de 1873 y terminada por un golpe a comienzos de 1874, con cuatro presidentes en ese tiempo. La Segunda República, de 1931, duró ocho años.":
    "Im Februar 1873 ausgerufen und Anfang 1874 durch einen Putsch beendet, mit vier Präsidenten in dieser Zeit. Die Zweite Republik von 1931 dauerte acht Jahre.",
  "El Desastre": "Die Katastrophe",
  "En **1898**, tras una guerra breve con **Estados Unidos**, España perdió **Cuba**, **Puerto Rico** y **Filipinas**. Se lo llamó simplemente **el Desastre**, y el golpe fue más moral que militar: el país descubrió de golpe que ya no era una potencia.":
    "**1898** verlor Spanien nach einem kurzen Krieg mit den **Vereinigten Staaten** **Kuba**, **Puerto Rico** und die **Philippinen**. Man nannte es schlicht **die Katastrophe**, und der Schlag war mehr ein moralischer als ein militärischer: das Land entdeckte mit einem Mal, dass es keine Macht mehr war.",
  "De esa conmoción salió la **Generación del 98**, un grupo de escritores —Unamuno, Baroja, Azorín, Machado— que se preguntó qué era España y qué debía hacer consigo misma. La pregunta atravesaría todo el siglo siguiente.":
    "Aus dieser Erschütterung entstand die **Generation von 98**, eine Gruppe von Schriftstellern — Unamuno, Baroja, Azorín, Machado —, die fragte, was Spanien sei und was es mit sich anfangen solle. Die Frage sollte das ganze folgende Jahrhundert durchziehen.",
  "Mientras tanto, **Cataluña** y el **País Vasco** se industrializaban: el textil catalán y la siderurgia vasca crearon las primeras grandes concentraciones obreras, y con ellas el movimiento sindical. El **PSOE** se había fundado en **1879**.":
    "Unterdessen industrialisierten sich **Katalonien** und das **Baskenland**: die katalanische Textilindustrie und die baskische Stahlindustrie schufen die ersten großen Arbeiterballungen und mit ihnen die Gewerkschaftsbewegung. Die **PSOE** war **1879** gegründet worden.",
  "¿Qué territorios perdió España en 1898?": "Welche Gebiete verlor Spanien 1898?",
  "México, Perú y Colombia": "Mexiko, Peru und Kolumbien",
  "Cuba, Puerto Rico y Filipinas": "Kuba, Puerto Rico und die Philippinen",
  "Gibraltar y el Sáhara": "Gibraltar und die Westsahara",
  "Flandes y los territorios italianos": "Flandern und die italienischen Gebiete",
  "Las últimas posesiones de ultramar, tras una guerra breve con Estados Unidos. La América continental se había independizado setenta años antes, y Gibraltar se perdió en 1713.":
    "Die letzten überseeischen Besitzungen, nach einem kurzen Krieg mit den Vereinigten Staaten. Das amerikanische Festland war siebzig Jahre zuvor unabhängig geworden, und Gibraltar ging 1713 verloren.",
  "La Constitución de 1812 y la de 1978 se citan a veces juntas y no se parecen en nada salvo en el nombre. Entre ambas hubo otras cinco, más varios proyectos que no llegaron a regir.":
    "Die Verfassung von 1812 und die von 1978 werden manchmal in einem Atemzug genannt und ähneln einander in nichts außer im Namen. Zwischen beiden lagen fünf weitere, dazu mehrere Entwürfe, die nie in Kraft traten.",
  // es-republica-guerra
  "Por qué importa: son los cuarenta y cinco años que la Constitución de 1978 tiene detrás. Casi cada decisión de aquel texto —el consenso, la rigidez, la censura constructiva— es una respuesta a algo que ocurrió aquí.":
    "Warum das wichtig ist: es sind die fünfundvierzig Jahre, die hinter der Verfassung von 1978 liegen. Fast jede Entscheidung jenes Textes — der Konsens, die Starrheit, das konstruktive Misstrauen — ist eine Antwort auf etwas, das hier geschah.",
  "El 14 de abril": "Der 14. April",
  "Tras la dictadura de **Primo de Rivera**, entre 1923 y 1930, las **elecciones municipales** del 12 de abril de 1931 se leyeron como un plebiscito sobre la monarquía. Las ciudades votaron republicano; **Alfonso XIII** salió de España y el **14 de abril de 1931** se proclamó la **Segunda República**.":
    "Nach der Diktatur **Primo de Riveras** zwischen 1923 und 1930 wurden die **Kommunalwahlen** vom 12. April 1931 als Volksentscheid über die Monarchie gelesen. Die Städte wählten republikanisch; **Alfons XIII.** verließ Spanien, und am **14. April 1931** wurde die **Zweite Republik** ausgerufen.",
  "La **Constitución de 1931** fue de las más avanzadas de su tiempo: Estado laico, **divorcio**, y sobre todo el **voto femenino**, defendido en las Cortes por **Clara Campoamor** contra buena parte de su propio grupo. Las mujeres votaron por primera vez en **1933**. Se aprobaron además los primeros **estatutos de autonomía**, el de Cataluña en 1932.":
    "Die **Verfassung von 1931** gehörte zu den fortschrittlichsten ihrer Zeit: weltlicher Staat, **Scheidung** und vor allem das **Frauenwahlrecht**, in den Cortes von **Clara Campoamor** gegen einen guten Teil ihrer eigenen Fraktion verteidigt. Die Frauen wählten **1933** zum ersten Mal. Beschlossen wurden außerdem die ersten **Autonomiestatute**, das katalanische 1932.",
  "¿Qué día se proclamó la Segunda República?": "An welchem Tag wurde die Zweite Republik ausgerufen?",
  "El 12 de abril de 1931": "Am 12. April 1931",
  "El 14 de abril de 1931": "Am 14. April 1931",
  "El 18 de julio de 1936": "Am 18. Juli 1936",
  "El 1 de abril de 1939": "Am 1. April 1939",
  "El 12 de abril fueron las municipales y el 14 la proclamación. El 18 de julio de 1936 comienza la guerra y el 1 de abril de 1939 termina.":
    "Am 12. April waren die Kommunalwahlen und am 14. die Ausrufung. Am 18. Juli 1936 beginnt der Krieg, und am 1. April 1939 endet er.",
  "La guerra": "Der Krieg",
  "El **17 y 18 de julio de 1936** una parte del ejército se sublevó contra el Gobierno de la República. El golpe triunfó en unas zonas y fracasó en otras, y ese fracaso parcial fue precisamente lo que convirtió una sublevación en una **guerra civil** de casi tres años.":
    "Am **17. und 18. Juli 1936** erhob sich ein Teil des Heeres gegen die Regierung der Republik. Der Putsch gelang in einigen Gegenden und scheiterte in anderen, und gerade dieses teilweise Scheitern machte aus einem Aufstand einen fast dreijährigen **Bürgerkrieg**.",
  "Fue también un ensayo de la guerra europea que venía: Alemania e Italia apoyaron al bando sublevado y la Unión Soviética al republicano, mientras las democracias se mantenían en la no intervención. El bombardeo de **Guernica** en **1937** dio a Picasso el motivo de su cuadro más conocido, hoy en el **Museo Reina Sofía**.":
    "Er war auch eine Probe für den kommenden europäischen Krieg: Deutschland und Italien unterstützten die Aufständischen und die Sowjetunion die Republik, während die Demokratien bei der Nichteinmischung blieben. Die Bombardierung von **Gernika** **1937** gab Picasso das Motiv seines bekanntesten Bildes, das heute im **Museo Reina Sofía** hängt.",
  "La guerra terminó el **1 de abril de 1939**. Dejó cientos de miles de muertos y un **exilio** de medio millón de personas, entre ellas buena parte de los científicos, escritores y maestros del país.":
    "Der Krieg endete am **1. April 1939**. Er hinterließ Hunderttausende Tote und ein **Exil** von einer halben Million Menschen, darunter einen guten Teil der Wissenschaftler, Schriftsteller und Lehrer des Landes.",
  "¿Cuándo terminó la Guerra Civil española?": "Wann endete der Spanische Bürgerkrieg?",
  "En 1936": "1936",
  "En 1937": "1937",
  "En 1939": "1939",
  "En 1945": "1945",
  "El 1 de abril de 1939, cinco meses antes de que empezara la Segunda Guerra Mundial. El bombardeo de Guernica fue en 1937.":
    "Am 1. April 1939, fünf Monate bevor der Zweite Weltkrieg begann. Die Bombardierung von Gernika war 1937.",
  "La dictadura": "Die Diktatur",
  "**Francisco Franco** gobernó desde **1939 hasta 1975**. Se suprimieron los partidos y los sindicatos libres, se implantó la **censura**, se persiguió a los vencidos y las lenguas distintas del castellano quedaron fuera de la escuela y de la vida pública.":
    "**Francisco Franco** regierte von **1939 bis 1975**. Parteien und freie Gewerkschaften wurden beseitigt, die **Zensur** eingeführt, die Besiegten verfolgt, und die anderen Sprachen als das Kastilische blieben aus Schule und Öffentlichkeit ausgeschlossen.",
  "La autarquía": "Die Autarkie",
  "Los años cuarenta: aislamiento internacional, cartillas de racionamiento y hambre. Se los llamó los años del hambre.":
    "Die vierziger Jahre: internationale Isolierung, Lebensmittelkarten und Hunger. Man nannte sie die Jahre des Hungers.",
  "1953 y 1955": "1953 und 1955",
  "Los acuerdos con Estados Unidos y el concordato con la Santa Sede rompen el aislamiento; en 1955 España ingresa en la ONU.":
    "Die Abkommen mit den Vereinigten Staaten und das Konkordat mit dem Heiligen Stuhl brechen die Isolierung; 1955 tritt Spanien den Vereinten Nationen bei.",
  "El desarrollismo": "Die Entwicklungsjahre",
  "En los sesenta llegan la industria, el turismo de sol y playa y las divisas de dos millones de emigrantes en Europa.":
    "In den sechziger Jahren kommen die Industrie, der Bade- und Sonnentourismus und die Devisen von zwei Millionen Auswanderern in Europa.",
  "1973": "1973",
  "El almirante Carrero Blanco, sucesor previsto en la presidencia, muere en un atentado de ETA. El plan de continuidad se rompe.":
    "Admiral Carrero Blanco, der vorgesehene Nachfolger im Regierungsvorsitz, stirbt bei einem Anschlag der ETA. Der Plan der Fortsetzung zerbricht.",
  "En **1969** Franco designó sucesor a título de rey a **Juan Carlos de Borbón**, nieto de Alfonso XIII. Franco murió el **20 de noviembre de 1975**, y lo que ocurrió después no estaba escrito en ninguna parte.":
    "**1969** bestimmte Franco **Juan Carlos de Borbón**, den Enkel Alfons' XIII., zum Nachfolger im Rang eines Königs. Franco starb am **20. November 1975**, und was danach geschah, stand nirgends geschrieben.",
  "¿Quién defendió el voto femenino en las Cortes republicanas?":
    "Wer verteidigte in den Cortes der Republik das Frauenwahlrecht?",
  "Victoria Kent": "Victoria Kent",
  "Clara Campoamor": "Clara Campoamor",
  "Dolores Ibárruri": "Dolores Ibárruri",
  "María Zambrano": "María Zambrano",
  "Clara Campoamor lo defendió y lo sacó adelante, en contra de buena parte de su propio grupo. Victoria Kent, también diputada, se opuso entonces por temor al voto conservador de las mujeres.":
    "Clara Campoamor verteidigte es und brachte es durch, gegen einen guten Teil ihrer eigenen Fraktion. Victoria Kent, ebenfalls Abgeordnete, war damals dagegen, aus Sorge vor einer konservativen Frauenstimme.",
  "La Segunda República duró **ocho años** y solo los tres últimos fueron de guerra. No son lo mismo, aunque se nombren muchas veces de un tirón.":
    "Die Zweite Republik dauerte **acht Jahre**, und nur die letzten drei waren Kriegsjahre. Das ist nicht dasselbe, auch wenn man beides oft in einem Zug nennt.",
  // es-transicion
  "Por qué importa: en tres años España pasó de una dictadura a una democracia sin romper la legalidad anterior y sin una nueva guerra. Cómo se hizo eso es la explicación de casi todo el sistema descrito en el capítulo dos.":
    "Warum das wichtig ist: in drei Jahren ging Spanien von einer Diktatur zu einer Demokratie über, ohne die vorherige Rechtsordnung zu brechen und ohne einen neuen Krieg. Wie das gemacht wurde, erklärt fast das ganze System aus Kapitel zwei.",
  "De la ley a la ley": "Vom Gesetz zum Gesetz",
  "**Juan Carlos I** fue proclamado rey el **22 de noviembre de 1975**, dos días después de la muerte de Franco, dentro de las reglas del régimen. En julio de **1976** nombró presidente del Gobierno a **Adolfo Suárez**, procedente del propio aparato franquista, lo que casi nadie interpretó entonces como una buena noticia.":
    "**Juan Carlos I.** wurde am **22. November 1975** zum König ausgerufen, zwei Tage nach Francos Tod, innerhalb der Regeln des Regimes. Im Juli **1976** ernannte er **Adolfo Suárez** zum Regierungspräsidenten, der aus dem franquistischen Apparat selbst kam, was damals fast niemand als gute Nachricht las.",
  "Suárez llevó a las Cortes del régimen la **Ley para la Reforma Política**, que en la práctica las disolvía y abría elecciones libres. Las Cortes la aprobaron y el pueblo la ratificó en referéndum en **diciembre de 1976**. De ahí la fórmula con que se resume la Transición: se fue **de la ley a la ley**, sin ruptura formal.":
    "Suárez brachte den Cortes des Regimes das **Gesetz zur politischen Reform**, das sie in der Sache auflöste und freie Wahlen eröffnete. Die Cortes beschlossen es, und das Volk bestätigte es im **Dezember 1976** in einem Referendum. Daher die Formel, mit der man die Transición zusammenfasst: man ging **vom Gesetz zum Gesetz**, ohne förmlichen Bruch.",
  "En abril de **1977**, un **Sábado Santo**, se legalizó el **Partido Comunista**, la decisión más arriesgada del periodo. El **15 de junio de 1977** se celebraron las **primeras elecciones libres** desde 1936.":
    "Im April **1977**, an einem **Karsamstag**, wurde die **Kommunistische Partei** zugelassen, die riskanteste Entscheidung der Zeit. Am **15. Juni 1977** fanden die **ersten freien Wahlen** seit 1936 statt.",
  "¿Quién fue el presidente del Gobierno que dirigió la Transición?":
    "Wer war der Regierungspräsident, der die Transición führte?",
  "Leopoldo Calvo-Sotelo": "Leopoldo Calvo-Sotelo",
  "Adolfo Suárez": "Adolfo Suárez",
  "Felipe González": "Felipe González",
  "Manuel Fraga": "Manuel Fraga",
  "Adolfo Suárez, nombrado en 1976 y ganador de las elecciones de 1977 y 1979. Calvo-Sotelo le sucedió en 1981 y Felipe González ganó en 1982.":
    "Adolfo Suárez, 1976 ernannt und Sieger der Wahlen von 1977 und 1979. Calvo-Sotelo folgte ihm 1981, und Felipe González gewann 1982.",
  "Los años difíciles": "Die schweren Jahre",
  "En **octubre de 1977** los partidos firmaron los **Pactos de la Moncloa**, un acuerdo económico y social que permitió afrontar la inflación y el paro sin que el sistema saltara por los aires. Al año siguiente se aprobó la **Constitución**.":
    "Im **Oktober 1977** unterzeichneten die Parteien die **Pakte von Moncloa**, eine wirtschafts- und sozialpolitische Vereinbarung, die es erlaubte, Inflation und Arbeitslosigkeit anzugehen, ohne dass das System auseinanderflog. Im Jahr darauf wurde die **Verfassung** beschlossen.",
  "El momento más peligroso llegó el **23 de febrero de 1981**: un grupo de guardias civiles asaltó el Congreso durante la votación de investidura y secuestró al Gobierno y a los diputados. El golpe fracasó esa misma noche. Fue el último intento de volver atrás por la fuerza.":
    "Der gefährlichste Augenblick kam am **23. Februar 1981**: eine Gruppe von Guardias Civiles stürmte während der Investiturabstimmung den Kongress und nahm Regierung und Abgeordnete als Geiseln. Der Putsch scheiterte noch in derselben Nacht. Es war der letzte Versuch, mit Gewalt zurückzugehen.",
  "¿Qué ocurrió el 23 de febrero de 1981?": "Was geschah am 23. Februar 1981?",
  "Se aprobó la Constitución": "Die Verfassung wurde beschlossen",
  "Un intento de golpe de Estado en el Congreso": "Ein Putschversuch im Kongress",
  "España entró en la Comunidad Económica Europea":
    "Spanien trat der Europäischen Wirtschaftsgemeinschaft bei",
  "Se celebraron las primeras elecciones libres": "Die ersten freien Wahlen fanden statt",
  "El asalto al Congreso durante una votación de investidura, conocido desde entonces como el 23-F. Fracasó esa misma noche y fue el último intento de volver atrás por la fuerza.":
    "Der Sturm auf den Kongress während einer Investiturabstimmung, seither als 23-F bekannt. Er scheiterte noch in derselben Nacht und war der letzte Versuch, mit Gewalt zurückzugehen.",
  "La normalidad": "Die Normalität",
  "1982": "1982",
  "El PSOE gana con mayoría absoluta y gobierna hasta 1996. La alternancia demuestra que el sistema funciona.":
    "Die PSOE gewinnt mit absoluter Mehrheit und regiert bis 1996. Der Machtwechsel zeigt, dass das System funktioniert.",
  "1986": "1986",
  "España entra en la Comunidad Económica Europea y ratifica en referéndum su permanencia en la OTAN.":
    "Spanien tritt der Europäischen Wirtschaftsgemeinschaft bei und bestätigt in einem Referendum seinen Verbleib in der NATO.",
  "1992": "1992",
  "Juegos Olímpicos de Barcelona, Exposición Universal de Sevilla y el primer tren de alta velocidad. El año en que el país se enseña al mundo.":
    "Olympische Spiele in Barcelona, Weltausstellung in Sevilla und der erste Hochgeschwindigkeitszug. Das Jahr, in dem sich das Land der Welt zeigt.",
  "2002": "2002",
  "El euro sustituye a la peseta en los bolsillos, tras tres años de existir solo en las cuentas.":
    "Der Euro ersetzt die Pesete in den Taschen, nachdem er drei Jahre lang nur auf den Konten bestanden hatte.",
  "El **11 de marzo de 2004** una serie de bombas en trenes de cercanías de Madrid causó ciento noventa y tres muertos: el mayor atentado de la historia de España. **ETA**, que había matado a más de ochocientas personas desde los años sesenta, anunció el fin de su actividad armada en 2011 y su disolución en 2018.":
    "Am **11. März 2004** töteten Bomben in Vorortzügen von Madrid einhundertdreiundneunzig Menschen: der schwerste Anschlag der spanischen Geschichte. Die **ETA**, die seit den sechziger Jahren mehr als achthundert Menschen getötet hatte, erklärte 2011 das Ende ihrer bewaffneten Tätigkeit und 2018 ihre Auflösung.",
  "En **2014** **Juan Carlos I abdicó** y fue proclamado **Felipe VI**. El sistema autonómico, que la Constitución dejó abierto, se completó en los años ochenta y noventa hasta las diecisiete comunidades y las dos ciudades autónomas de hoy.":
    "**2014 dankte Juan Carlos I. ab**, und **Felipe VI.** wurde ausgerufen. Das Autonomiesystem, das die Verfassung offen gelassen hatte, wurde in den achtziger und neunziger Jahren bis zu den heutigen siebzehn Gemeinschaften und zwei autonomen Städten vervollständigt.",
  "¿En qué año entró España en la Comunidad Económica Europea?":
    "In welchem Jahr trat Spanien der Europäischen Wirtschaftsgemeinschaft bei?",
  "En 1978": "1978",
  "En 1982": "1982",
  "En 1986": "1986",
  "En 1992": "1992",
  "El 1 de enero de 1986, junto con Portugal. Ese mismo año se celebró el referéndum sobre la permanencia en la OTAN.":
    "Am 1. Januar 1986, zusammen mit Portugal. Im selben Jahr fand das Referendum über den Verbleib in der NATO statt.",
  "La Transición no fue una ruptura sino una **reforma pactada**: las instituciones del régimen aprobaron su propia disolución. Esa elección explica tanto la estabilidad posterior como los debates que siguen abiertos sobre lo que quedó sin resolver.":
    "Die Transición war kein Bruch, sondern eine **ausgehandelte Reform**: die Einrichtungen des Regimes beschlossen ihre eigene Auflösung. Diese Entscheidung erklärt ebenso die spätere Beständigkeit wie die Debatten, die über das Ungelöste weiter offen sind.",
  // es-autonomias
  "Por qué importa: la Constitución no dibujó un mapa. Reconoció un derecho y dejó que el mapa se hiciera solo, y el resultado es uno de los Estados más descentralizados de Europa sin ser formalmente federal.":
    "Warum das wichtig ist: die Verfassung hat keine Karte gezeichnet. Sie hat ein Recht anerkannt und die Karte sich selbst entstehen lassen, und das Ergebnis ist einer der am stärksten dezentralisierten Staaten Europas, ohne förmlich ein Bundesstaat zu sein.",
  "Un modelo abierto": "Ein offenes Modell",
  "El **título VIII** no enumera comunidades: establece **cómo** pueden constituirse. Las provincias limítrofes con características históricas, culturales y económicas comunes podían acceder al autogobierno, y de ese procedimiento salieron **diecisiete comunidades autónomas** y, desde **1995**, las **dos ciudades autónomas** de **Ceuta** y **Melilla**.":
    "**Titel VIII** zählt keine Gemeinschaften auf: er legt fest, **wie** sie sich bilden können. Benachbarte Provinzen mit gemeinsamen historischen, kulturellen und wirtschaftlichen Merkmalen konnten zur Selbstverwaltung gelangen, und aus diesem Verfahren gingen **siebzehn autonome Gemeinschaften** hervor und seit **1995** die **zwei autonomen Städte** **Ceuta** und **Melilla**.",
  "Hubo **dos vías**. La del **artículo 151**, más rápida y con más competencias desde el principio, la siguieron **Cataluña**, el **País Vasco**, **Galicia** y **Andalucía**. La del **artículo 143**, más lenta, la recorrieron las demás. Con los años las diferencias se fueron igualando en buena medida.":
    "Es gab **zwei Wege**. Den des **Artikels 151**, schneller und mit mehr Zuständigkeiten von Anfang an, gingen **Katalonien**, das **Baskenland**, **Galicien** und **Andalusien**. Den des **Artikels 143**, langsamer, gingen die übrigen. Über die Jahre glichen sich die Unterschiede weitgehend an.",
  "El estatuto": "Das Statut",
  "Cada comunidad tiene un **Estatuto de Autonomía**, que la Constitución llama su **norma institucional básica**. No es una ley cualquiera: se aprueba como **ley orgánica** de las Cortes Generales, de modo que forma parte a la vez del ordenamiento autonómico y del estatal.":
    "Jede Gemeinschaft hat ein **Autonomiestatut**, das die Verfassung ihre **grundlegende institutionelle Norm** nennt. Es ist kein gewöhnliches Gesetz: es wird als **Organgesetz** der Cortes Generales beschlossen, sodass es zugleich zur Rechtsordnung der Gemeinschaft und zu der des Staates gehört.",
  "Asamblea legislativa": "Gesetzgebende Versammlung",
  "El parlamento de la comunidad, elegido por sus ciudadanos. Aprueba las leyes autonómicas y el presupuesto.":
    "Das Parlament der Gemeinschaft, von ihren Bürgerinnen und Bürgern gewählt. Es beschließt die Gesetze der Gemeinschaft und den Haushalt.",
  "Consejo de Gobierno": "Regierungsrat",
  "El ejecutivo, con su presidente al frente, investido por la asamblea igual que en el Estado.":
    "Die Exekutive, mit ihrem Präsidenten an der Spitze, von der Versammlung eingesetzt wie im Staat.",
  "Tribunal Superior de Justicia": "Obergericht",
  "Culmina la organización judicial en el territorio, sin ser una instancia por encima del Tribunal Supremo.":
    "Es schließt die Gerichtsorganisation des Gebiets ab, ohne eine dem Obersten Gerichtshof übergeordnete Instanz zu sein.",
  "Delegado del Gobierno": "Regierungsbeauftragter",
  "Representa a la Administración del Estado en la comunidad. No es un cargo autonómico: lo nombra el Gobierno central.":
    "Er vertritt die Verwaltung des Staates in der Gemeinschaft. Es ist kein Amt der Gemeinschaft: ernannt wird er von der Zentralregierung.",
  "¿Cuántas comunidades autónomas tiene España?": "Wie viele autonome Gemeinschaften hat Spanien?",
  "Diecisiete": "Siebzehn",
  "Diecinueve": "Neunzehn",
  "Cincuenta": "Fünfzig",
  "Diecisiete comunidades, más las ciudades autónomas de Ceuta y Melilla desde 1995. Cincuenta es el número de provincias, que es otra división.":
    "Siebzehn Gemeinschaften, dazu seit 1995 die autonomen Städte Ceuta und Melilla. Fünfzig ist die Zahl der Provinzen, die eine andere Gliederung sind.",
  "Quién hace qué": "Wer was macht",
  "El **artículo 149** enumera las materias **exclusivas del Estado**: relaciones internacionales, defensa, administración de justicia, moneda, legislación mercantil, penal y laboral, y la regulación básica de muchas otras. El **artículo 148** enumera las que las comunidades **pueden asumir**: urbanismo, agricultura, turismo, sanidad e higiene, cultura, y por esa vía se llega a la sanidad y la educación que hoy gestionan.":
    "**Artikel 149** zählt die **ausschließlichen Materien des Staates** auf: internationale Beziehungen, Verteidigung, Rechtspflege, Währung, Handels-, Straf- und Arbeitsrecht und die Grundregelung vieler weiterer. **Artikel 148** zählt auf, was die Gemeinschaften **übernehmen können**: Stadtplanung, Landwirtschaft, Tourismus, Gesundheit und Hygiene, Kultur — und auf diesem Weg kommt man zu Gesundheit und Bildung, die sie heute verwalten.",
  "La **financiación** sigue dos regímenes. La mayoría está en el **régimen común**, con una parte de los impuestos cedida y un fondo de reparto. El **País Vasco** y **Navarra** tienen **régimen foral** —el **concierto** y el **convenio**— por el que recaudan sus propios impuestos y pagan al Estado una cantidad por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "Die **Finanzierung** folgt zwei Ordnungen. Die meisten stehen in der **allgemeinen Ordnung**, mit einem abgetretenen Steueranteil und einem Ausgleichsfonds. Das **Baskenland** und **Navarra** haben eine **foralistische Ordnung** — das **concierto** und das **convenio** —, nach der sie ihre eigenen Steuern erheben und dem Staat einen Betrag für die gemeinsamen Aufgaben zahlen. Es ist eine historische Ausnahme, anerkannt in der ersten Zusatzbestimmung.",
  "¿Qué comunidades tienen régimen foral de financiación?":
    "Welche Gemeinschaften haben eine foralistische Finanzordnung?",
  "Cataluña y el País Vasco": "Katalonien und das Baskenland",
  "El País Vasco y Navarra": "Das Baskenland und Navarra",
  "Galicia y Navarra": "Galicien und Navarra",
  "Ninguna: el sistema es igual para todas": "Keine: das System ist für alle gleich",
  "El concierto vasco y el convenio navarro: recaudan sus propios impuestos y pagan al Estado por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "Das baskische concierto und das navarrische convenio: sie erheben ihre eigenen Steuern und zahlen dem Staat für die gemeinsamen Aufgaben. Es ist eine historische Ausnahme, anerkannt in der ersten Zusatzbestimmung.",
  "Los límites": "Die Grenzen",
  "La Constitución garantiza la **solidaridad** entre territorios y prohíbe que las diferencias entre estatutos impliquen **privilegios económicos o sociales**. Para corregir desequilibrios existe el **Fondo de Compensación Interterritorial**.":
    "Die Verfassung gewährleistet die **Solidarität** zwischen den Gebieten und verbietet, dass Unterschiede zwischen den Statuten **wirtschaftliche oder soziale Vorrechte** begründen. Zum Ausgleich von Ungleichgewichten gibt es den **Interterritorialen Ausgleichsfonds**.",
  "Y hay un último recurso: el **artículo 155**. Si una comunidad **incumple gravemente** sus obligaciones constitucionales o atenta contra el interés general de España, el Gobierno puede requerirla y, si no atiende el requerimiento, adoptar medidas con la **aprobación del Senado por mayoría absoluta**. Se aplicó por primera vez en 2017.":
    "Und es gibt ein letztes Mittel: **Artikel 155**. Verletzt eine Gemeinschaft ihre Verfassungspflichten **schwerwiegend** oder handelt sie gegen das allgemeine Interesse Spaniens, kann die Regierung sie auffordern und, wenn sie der Aufforderung nicht nachkommt, mit **Zustimmung des Senats mit absoluter Mehrheit** Maßnahmen ergreifen. Angewandt wurde er zum ersten Mal 2017.",
  "¿Qué es un Estatuto de Autonomía?": "Was ist ein Autonomiestatut?",
  "Un reglamento del Gobierno autonómico": "Eine Verordnung der Regierung der Gemeinschaft",
  "La norma institucional básica de la comunidad, aprobada como ley orgánica":
    "Die grundlegende institutionelle Norm der Gemeinschaft, als Organgesetz beschlossen",
  "Un acuerdo entre comunidades vecinas": "Eine Vereinbarung zwischen benachbarten Gemeinschaften",
  "La constitución propia de cada comunidad": "Die eigene Verfassung jeder Gemeinschaft",
  "Es a la vez norma autonómica y ley orgánica estatal, y por eso su reforma exige el acuerdo de la comunidad y de las Cortes Generales. Constitución solo hay una.":
    "Es ist zugleich Norm der Gemeinschaft und staatliches Organgesetz, und deshalb verlangt seine Änderung das Einvernehmen der Gemeinschaft und der Cortes Generales. Eine Verfassung gibt es nur eine.",
  "**Provincia** y **comunidad autónoma** no son lo mismo. Hay **cincuenta provincias** y diecisiete comunidades: siete de ellas son **uniprovinciales**, como Madrid, Murcia o Asturias, y en esos casos la comunidad absorbió las funciones de la diputación.":
    "**Provinz** und **autonome Gemeinschaft** sind nicht dasselbe. Es gibt **fünfzig Provinzen** und siebzehn Gemeinschaften: sieben von ihnen bestehen aus **einer einzigen Provinz**, wie Madrid, Murcia oder Asturien, und dort hat die Gemeinschaft die Aufgaben der Provinzverwaltung übernommen.",
  // es-territorio
  "Por qué importa: España es el país más montañoso de Europa después de Suiza, y eso explica su clima, su reparto de población y por qué durante siglos fue tan difícil de gobernar desde un solo sitio.":
    "Warum das wichtig ist: Spanien ist nach der Schweiz das gebirgigste Land Europas, und das erklärt sein Klima, die Verteilung seiner Bevölkerung und warum es jahrhundertelang so schwer von einer Stelle aus zu regieren war.",
  "Una meseta rodeada de sierras": "Eine Hochebene, umgeben von Gebirgen",
  "El territorio ocupa unos **505.000 kilómetros cuadrados**, lo que hace de España el **segundo país más extenso de la Unión Europea** tras Francia, con algo menos de **cincuenta millones** de habitantes.":
    "Das Staatsgebiet umfasst rund **505 000 Quadratkilometer**, was Spanien nach Frankreich zum **zweitgrößten Land der Europäischen Union** macht, mit knapp **fünfzig Millionen** Einwohnern.",
  "En el centro está la **Meseta Central**, una llanura elevada a más de seiscientos metros y partida en dos por el **Sistema Central**. La rodean cordilleras por casi todos lados, y esa altitud media —de las más altas de Europa— es la razón de que el interior tenga inviernos duros pese a la latitud.":
    "In der Mitte liegt die **Meseta**, eine über sechshundert Meter hoch gelegene Ebene, vom **Zentralsystem** in zwei Teile geschnitten. Fast von allen Seiten umgeben sie Gebirgsketten, und diese mittlere Höhe — eine der höchsten Europas — ist der Grund dafür, dass das Landesinnere trotz der Breitenlage harte Winter hat.",
  "Los Pirineos": "Die Pyrenäen",
  "Frontera con Francia y Andorra, de mar a mar. Aíslan la Península del resto del continente.":
    "Die Grenze zu Frankreich und Andorra, von Meer zu Meer. Sie schneiden die Halbinsel vom übrigen Kontinent ab.",
  "La Cordillera Cantábrica": "Das Kantabrische Gebirge",
  "Cierra el norte y separa la España húmeda de la seca. Los Picos de Europa son su tramo más alto.":
    "Es schließt den Norden ab und trennt das feuchte vom trockenen Spanien. Die Picos de Europa sind sein höchster Abschnitt.",
  "Los Sistemas Béticos": "Die Betischen Ketten",
  "En el sur, con Sierra Nevada y el Mulhacén, de 3.479 metros: el pico más alto de la Península.":
    "Im Süden, mit der Sierra Nevada und dem Mulhacén, 3479 Meter: dem höchsten Gipfel der Halbinsel.",
  "El Teide": "Der Teide",
  "En Tenerife, 3.715 metros. Es el punto más alto de España, y está en el Atlántico, no en la Península.":
    "Auf Teneriffa, 3715 Meter. Er ist der höchste Punkt Spaniens und liegt im Atlantik, nicht auf der Halbinsel.",
  "¿Cuál es el pico más alto de España?": "Welcher ist der höchste Gipfel Spaniens?",
  "El Mulhacén": "Der Mulhacén",
  "El Aneto": "Der Aneto",
  "El Naranjo de Bulnes": "Der Naranjo de Bulnes",
  "El Teide, en Tenerife, con 3.715 metros. El Mulhacén, en Sierra Nevada, es el más alto de la Península con 3.479, y el Aneto el más alto de los Pirineos.":
    "Der Teide auf Teneriffa, mit 3715 Metern. Der Mulhacén in der Sierra Nevada ist mit 3479 der höchste der Halbinsel, und der Aneto der höchste der Pyrenäen.",
  "Los ríos": "Die Flüsse",
  "Los ríos se reparten en tres **vertientes**. La **cantábrica** tiene ríos cortos y caudalosos. La **atlántica** recoge los grandes: el **Tajo**, el más largo de la Península, que desemboca en Lisboa; el **Duero**; el **Guadiana**; y el **Guadalquivir**, el único navegable, hasta Sevilla. La **mediterránea** es la más seca salvo por el **Ebro**, el de mayor caudal de España.":
    "Die Flüsse verteilen sich auf drei **Abdachungen**. Die **kantabrische** hat kurze, wasserreiche Flüsse. Die **atlantische** sammelt die großen: den **Tajo**, den längsten der Halbinsel, der bei Lissabon mündet; den **Duero**; den **Guadiana**; und den **Guadalquivir**, den einzigen schiffbaren, bis Sevilla. Die **mediterrane** ist die trockenste, abgesehen vom **Ebro**, dem wasserreichsten Fluss Spaniens.",
  "Que los grandes ríos vayan al Atlántico y desemboquen dos de ellos en Portugal tiene consecuencias prácticas: el agua es un asunto compartido con el país vecino, y el sureste peninsular, el más seco de Europa continental, depende de trasvases y desaladoras.":
    "Dass die großen Flüsse zum Atlantik gehen und zwei von ihnen in Portugal münden, hat praktische Folgen: das Wasser ist eine mit dem Nachbarland geteilte Angelegenheit, und der Südosten der Halbinsel, die trockenste Gegend des europäischen Festlands, hängt von Überleitungen und Entsalzungsanlagen ab.",
  "¿Cuál es el río más largo de la Península Ibérica?":
    "Welcher ist der längste Fluss der Iberischen Halbinsel?",
  "El Ebro": "Der Ebro",
  "El Tajo": "Der Tajo",
  "El Duero": "Der Duero",
  "El Guadalquivir": "Der Guadalquivir",
  "El Tajo, que desemboca en Lisboa. El Ebro es el de mayor caudal y el Guadalquivir el único navegable, hasta Sevilla: tres ríos y tres primeros puestos distintos.":
    "Der Tajo, der bei Lissabon mündet. Der Ebro führt das meiste Wasser, und der Guadalquivir ist als einziger schiffbar, bis Sevilla: drei Flüsse und drei verschiedene erste Plätze.",
  "Las islas y África": "Die Inseln und Afrika",
  "Las **Islas Baleares** están en el Mediterráneo; las **Canarias**, en el Atlántico, frente a la costa africana y a unos mil quinientos kilómetros de la Península. Son de origen **volcánico**, y el volcán sigue activo: la erupción de La Palma de 2021 lo recordó.":
    "Die **Balearen** liegen im Mittelmeer; die **Kanaren** im Atlantik, vor der afrikanischen Küste und rund tausendfünfhundert Kilometer von der Halbinsel entfernt. Sie sind **vulkanischen** Ursprungs, und der Vulkan ist weiter tätig: der Ausbruch auf La Palma 2021 hat daran erinnert.",
  "**Ceuta** y **Melilla** están en el norte de África y son las **únicas fronteras terrestres** de la Unión Europea con el continente africano. España limita además con **Portugal**, **Francia**, **Andorra** y el territorio británico de **Gibraltar**.":
    "**Ceuta** und **Melilla** liegen in Nordafrika und sind die **einzigen Landgrenzen** der Europäischen Union zum afrikanischen Kontinent. Spanien grenzt außerdem an **Portugal**, **Frankreich**, **Andorra** und das britische Gebiet **Gibraltar**.",
  "Los climas": "Die Klimazonen",
  "El clima **mediterráneo** domina la mayor parte, con veranos secos y calurosos. El norte y el noroeste tienen clima **oceánico**, húmedo y templado: es la llamada España verde. El interior conserva el mediterráneo pero **continentalizado**, con más frío y más calor. El sureste es **semiárido** —Almería tiene el único desierto de Europa continental— y las **Canarias** son **subtropicales**, con temperaturas suaves todo el año.":
    "Das **mediterrane** Klima herrscht auf dem größten Teil, mit trockenen, heißen Sommern. Der Norden und der Nordwesten haben ein **ozeanisches**, feuchtes und mildes Klima: es ist das sogenannte grüne Spanien. Das Landesinnere behält das mediterrane, aber **kontinental getönt**, mit mehr Kälte und mehr Hitze. Der Südosten ist **halbtrocken** — Almería hat die einzige Wüste des europäischen Festlands — und die **Kanaren** sind **subtropisch**, mit milden Temperaturen das ganze Jahr.",
  "¿Qué tipo de clima tienen las Islas Canarias?": "Welches Klima haben die Kanarischen Inseln?",
  "Oceánico": "Ozeanisch",
  "Continental": "Kontinental",
  "Subtropical": "Subtropisch",
  "Semiárido": "Halbtrocken",
  "Subtropical, con temperaturas suaves durante todo el año por su latitud y por la corriente marina. El oceánico corresponde al norte peninsular y el semiárido al sureste.":
    "Subtropisch, mit milden Temperaturen das ganze Jahr über, wegen ihrer Breitenlage und der Meeresströmung. Das ozeanische gehört zum Norden der Halbinsel und das halbtrockene zum Südosten.",
  "Las Canarias están a unos **mil quinientos kilómetros** de la Península y tienen **una hora menos** que el resto del país. Es la única parte de España en otro huso horario.":
    "Die Kanaren liegen rund **tausendfünfhundert Kilometer** von der Halbinsel entfernt und haben **eine Stunde weniger** als das übrige Land. Es ist der einzige Teil Spaniens in einer anderen Zeitzone.",
  // es-lenguas
  "Por qué importa: en España se habla castellano en todas partes y otras cuatro lenguas son oficiales en su territorio. No es una curiosidad regional: está en el artículo 3 y organiza escuelas, administraciones y medios enteros.":
    "Warum das wichtig ist: in Spanien wird überall Kastilisch gesprochen, und vier weitere Sprachen sind in ihrem Gebiet Amtssprachen. Das ist keine regionale Merkwürdigkeit: es steht in Artikel 3 und ordnet ganze Schulen, Verwaltungen und Medien.",
  "Lo que dice el artículo 3": "Was Artikel 3 sagt",
  "Tiene tres apartados y conviene leerlos juntos. El primero: el **castellano** es la lengua española oficial del Estado, y todos los españoles tienen el **deber de conocerla** y el **derecho a usarla**. El segundo: las **demás lenguas españolas** serán también oficiales en sus comunidades **de acuerdo con sus estatutos**. El tercero: la riqueza de las modalidades lingüísticas es un **patrimonio cultural** objeto de especial respeto y protección.":
    "Er hat drei Absätze, und man liest sie am besten zusammen. Der erste: das **Kastilische** ist die amtliche spanische Sprache des Staates, und alle Spanierinnen und Spanier haben die **Pflicht, es zu kennen**, und das **Recht, es zu gebrauchen**. Der zweite: die **übrigen spanischen Sprachen** sind in ihren Gemeinschaften ebenfalls amtlich, **nach Maßgabe ihrer Statute**. Der dritte: der Reichtum der sprachlichen Formen ist ein **Kulturgut**, das besonderer Achtung und besonderen Schutzes bedarf.",
  "El deber de conocer se predica **solo del castellano**, y esa asimetría es deliberada. La cooficialidad, en cambio, no la decide el Estado en abstracto: la remite a cada estatuto.":
    "Die Pflicht zu kennen gilt **allein für das Kastilische**, und diese Ungleichheit ist gewollt. Die Mitamtlichkeit entscheidet der Staat dagegen nicht allgemein: er verweist sie an jedes Statut.",
  "Catalán": "Katalanisch",
  "Oficial en Cataluña y en las Illes Balears, y en la Comunidad Valenciana con la denominación de valenciano que fija su estatuto.":
    "Amtlich in Katalonien und auf den Balearen und in der Valencianischen Gemeinschaft unter der Bezeichnung Valencianisch, die ihr Statut festlegt.",
  "Gallego": "Galicisch",
  "Oficial en Galicia. Comparte origen con el portugués: ambos vienen del galaicoportugués medieval.":
    "Amtlich in Galicien. Es teilt seinen Ursprung mit dem Portugiesischen: beide gehen auf das mittelalterliche Galicisch-Portugiesische zurück.",
  "Euskera": "Baskisch",
  "Oficial en el País Vasco y en la zona vascófona de Navarra, donde el régimen lingüístico varía por comarcas.":
    "Amtlich im Baskenland und in der baskischsprachigen Zone Navarras, wo die Sprachregelung von Bezirk zu Bezirk wechselt.",
  "Aranés": "Aranesisch",
  "Una variedad del occitano, oficial en toda Cataluña desde 2006 y propia del Valle de Arán, donde lo habla unos pocos miles de personas.":
    "Eine Spielart des Okzitanischen, seit 2006 in ganz Katalonien amtlich und eigen dem Aran-Tal, wo es einige Tausend Menschen sprechen.",
  "¿En qué valle se habla el aranés?": "In welchem Tal wird Aranesisch gesprochen?",
  "En el Valle de Arán": "Im Aran-Tal",
  "En el Valle del Roncal": "Im Roncal-Tal",
  "En el Valle de Benasque": "Im Benasque-Tal",
  "En el Valle de Ansó": "Im Ansó-Tal",
  "En el Valle de Arán, en el Pirineo de Lérida, y es una variedad del occitano. Es la lengua oficial con menos hablantes de España, unos pocos miles.":
    "Im Aran-Tal, in den Pyrenäen von Lleida, und es ist eine Spielart des Okzitanischen. Es ist die Amtssprache Spaniens mit den wenigsten Sprechern, einigen Tausend.",
  "El euskera, aparte": "Das Baskische, für sich",
  "El castellano, el catalán y el gallego vienen del **latín**, como el portugués, el francés o el italiano. El **euskera no**: es una lengua **anterior a la llegada de Roma**, sin parentesco demostrado con ninguna lengua viva. Sobrevivió al latín en un rincón del continente donde todas las demás lenguas prerromanas desaparecieron.":
    "Kastilisch, Katalanisch und Galicisch kommen aus dem **Lateinischen**, wie das Portugiesische, das Französische oder das Italienische. Das **Baskische nicht**: es ist eine Sprache, die **älter ist als die Ankunft Roms**, ohne nachgewiesene Verwandtschaft zu irgendeiner lebenden Sprache. Es überlebte das Lateinische in einem Winkel des Kontinents, in dem alle anderen vorrömischen Sprachen verschwanden.",
  "No tuvo un estándar escrito unificado hasta el siglo XX: el **euskera batua**, fijado desde los años sesenta, es lo que se enseña hoy en la escuela, sobre los distintos dialectos históricos.":
    "Eine einheitliche Schriftnorm hatte es bis ins 20. Jahrhundert nicht: das **Euskara batua**, seit den sechziger Jahren festgelegt, ist das, was heute in der Schule gelehrt wird, über den verschiedenen historischen Mundarten.",
  "¿Cuál de estas lenguas NO procede del latín?":
    "Welche dieser Sprachen stammt NICHT aus dem Lateinischen?",
  "El catalán": "Katalanisch",
  "El gallego": "Galicisch",
  "El euskera": "Baskisch",
  "El aranés": "Aranesisch",
  "El euskera es anterior a Roma y no tiene parentesco conocido con ninguna lengua viva. Las otras tres son romances, igual que el castellano.":
    "Das Baskische ist älter als Rom und hat keine bekannte Verwandtschaft zu einer lebenden Sprache. Die anderen drei sind romanisch, ebenso wie das Kastilische.",
  "Lo que se protege sin ser oficial": "Was geschützt wird, ohne amtlich zu sein",
  "El tercer apartado del artículo 3 cubre hablas que **no son cooficiales** pero sí objeto de protección: el **asturiano**, llamado también bable, el **aragonés** en el Pirineo, el **leonés**, la **fala** extremeña o el **caló**. Sus estatutos y sus leyes autonómicas les dan grados distintos de reconocimiento, siempre por debajo de la oficialidad.":
    "Der dritte Absatz des Artikels 3 erfasst Sprachformen, die **nicht mitamtlich** sind und doch geschützt werden: das **Asturische**, auch Bable genannt, das **Aragonesische** in den Pyrenäen, das **Leonesische**, die extremadurische **Fala** oder das **Caló**. Ihre Statute und ihre Regionalgesetze geben ihnen unterschiedliche Grade der Anerkennung, stets unterhalb der Amtlichkeit.",
  "El español fuera de España": "Das Spanische außerhalb Spaniens",
  "El español lo hablan alrededor de **seiscientos millones** de personas y es la **segunda lengua materna del mundo** por número de hablantes, después del chino mandarín. La mayoría de ellos no vive en España: el país que más hispanohablantes tiene es **México**.":
    "Spanisch sprechen rund **sechshundert Millionen** Menschen, und es ist nach der Zahl der Sprecher die **zweithäufigste Muttersprache der Welt**, nach dem Hochchinesischen. Die meisten von ihnen leben nicht in Spanien: das Land mit den meisten Spanischsprechenden ist **Mexiko**.",
  "Por eso la norma no se decide en Madrid a solas. La **Real Academia Española** trabaja con las **veintidós academias** de América y Filipinas en la **Asociación de Academias de la Lengua Española**, y los diccionarios y gramáticas se publican en común. Es lo que se llama **política panhispánica**. La difusión de la lengua fuera corresponde al **Instituto Cervantes**, que es además quien administra las pruebas para la nacionalidad.":
    "Deshalb wird die Norm nicht in Madrid allein entschieden. Die **Real Academia Española** arbeitet mit den **zweiundzwanzig Akademien** Amerikas und der Philippinen im **Verband der Akademien der spanischen Sprache** zusammen, und Wörterbücher und Grammatiken erscheinen gemeinsam. Man nennt das **panhispanische Sprachpolitik**. Für die Verbreitung der Sprache nach außen ist das **Instituto Cervantes** zuständig, das zugleich die Prüfungen für die Staatsangehörigkeit abnimmt.",
  "¿Qué establece el artículo 3 respecto al castellano?":
    "Was bestimmt Artikel 3 hinsichtlich des Kastilischen?",
  "Solo el derecho a usarlo": "Nur das Recht, es zu gebrauchen",
  "El deber de conocerlo y el derecho a usarlo":
    "Die Pflicht, es zu kennen, und das Recht, es zu gebrauchen",
  "El deber de conocerlo, sin más": "Die Pflicht, es zu kennen, und sonst nichts",
  "Que su uso es voluntario en las comunidades con lengua propia":
    "Dass sein Gebrauch in den Gemeinschaften mit eigener Sprache freiwillig ist",
  "Deber de conocer y derecho a usar, y solo respecto del castellano. Para las demás lenguas oficiales la Constitución remite a los estatutos, sin imponer un deber equivalente.":
    "Pflicht zu kennen und Recht zu gebrauchen, und das allein für das Kastilische. Für die übrigen Amtssprachen verweist die Verfassung auf die Statute, ohne eine entsprechende Pflicht aufzuerlegen.",
  "**Español** y **castellano** designan la misma lengua. La Constitución emplea castellano, precisamente porque las otras lenguas de España también son españolas; en América y en el uso internacional predomina español.":
    "**Spanisch** und **Kastilisch** bezeichnen dieselbe Sprache. Die Verfassung gebraucht Kastilisch, gerade weil die anderen Sprachen Spaniens ebenfalls spanische Sprachen sind; in Amerika und im internationalen Gebrauch überwiegt Spanisch.",
  // es-economia-europa
  "Por qué importa: en cuarenta años España pasó de pedir la entrada en Europa a ser una de sus mayores economías. Y arrastra desde entonces un problema que no ha resuelto ningún gobierno: el paro.":
    "Warum das wichtig ist: in vierzig Jahren ging Spanien vom Antrag auf Aufnahme in Europa zu einer seiner größten Volkswirtschaften. Und es schleppt seither ein Problem mit sich, das keine Regierung gelöst hat: die Arbeitslosigkeit.",
  "De qué vive el país": "Wovon das Land lebt",
  "Los **servicios** son con diferencia el sector mayor, y dentro de ellos el **turismo**: España está año tras año entre los primeros destinos del mundo por número de visitantes, con la costa, las islas y las ciudades históricas como principales reclamos.":
    "Die **Dienstleistungen** sind mit Abstand der größte Bereich, und in ihnen der **Tourismus**: Spanien steht Jahr für Jahr unter den ersten Reisezielen der Welt nach Besucherzahl, mit der Küste, den Inseln und den historischen Städten als wichtigsten Anziehungspunkten.",
  "Aceite de oliva": "Olivenöl",
  "España es el primer productor mundial, muy por delante del segundo. Jaén sola produce más que países enteros.":
    "Spanien ist der größte Erzeuger der Welt, weit vor dem zweiten. Jaén allein erzeugt mehr als ganze Länder.",
  "Frutas y hortalizas": "Obst und Gemüse",
  "El invernadero de Almería abastece a buena parte de Europa en invierno, y los cítricos valencianos tienen mercado propio.":
    "Die Gewächshäuser von Almería versorgen im Winter einen guten Teil Europas, und die valencianischen Zitrusfrüchte haben einen eigenen Markt.",
  "Automóvil": "Automobil",
  "Uno de los mayores fabricantes de Europa, aunque sin marcas propias: las plantas son de grupos extranjeros.":
    "Einer der größten Hersteller Europas, allerdings ohne eigene Marken: die Werke gehören ausländischen Konzernen.",
  "Renovables": "Erneuerbare Energien",
  "La eólica y la solar tienen un peso creciente en la generación eléctrica, favorecidas por el viento del interior y las horas de sol.":
    "Wind- und Sonnenenergie haben ein wachsendes Gewicht in der Stromerzeugung, begünstigt durch den Wind des Landesinneren und die Sonnenstunden.",
  "¿De qué producto es España el primer productor mundial?":
    "Von welchem Erzeugnis ist Spanien der größte Produzent der Welt?",
  "Del vino": "Von Wein",
  "Del aceite de oliva": "Von Olivenöl",
  "Del arroz": "Von Reis",
  "Del azúcar": "Von Zucker",
  "Del aceite de oliva, con diferencia sobre el segundo. En vino está entre los primeros del mundo por superficie de viñedo, pero no encabeza la producción todos los años.":
    "Von Olivenöl, mit Abstand vor dem zweiten. Beim Wein gehört es nach Rebfläche zu den ersten der Welt, führt die Erzeugung aber nicht in jedem Jahr an.",
  "Los problemas de fondo": "Die tiefer liegenden Probleme",
  "El **paro** es el más persistente. La tasa española ha estado sistemáticamente por encima de la media europea durante décadas, con dos rasgos añadidos: el **desempleo juvenil**, que en las crisis ha llegado a duplicar la tasa general, y la **temporalidad**, la proporción de contratos de duración limitada.":
    "Die **Arbeitslosigkeit** ist das hartnäckigste. Die spanische Quote lag jahrzehntelang durchgängig über dem europäischen Mittel, mit zwei zusätzlichen Zügen: der **Jugendarbeitslosigkeit**, die in Krisen die allgemeine Quote verdoppelt hat, und der **Befristung**, dem Anteil zeitlich begrenzter Verträge.",
  "El segundo es **territorial**. Buena parte del interior se ha ido despoblando durante generaciones, y a ese fenómeno se lo llama desde hace unos años la **España vaciada**: provincias enteras con menos de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "Das zweite ist **territorial**. Ein guter Teil des Landesinneren entvölkert sich seit Generationen, und dieses Phänomen nennt man seit einigen Jahren das **entleerte Spanien**: ganze Provinzen mit weniger als zehn Einwohnern je Quadratkilometer, während sich das Wachstum an der Küste und in den großen Städten ballt.",
  "El tercero es **demográfico**: la natalidad es de las más bajas de Europa y la esperanza de vida de las más altas del mundo, una combinación que tensiona el sistema de pensiones a largo plazo.":
    "Das dritte ist **demografisch**: die Geburtenrate gehört zu den niedrigsten Europas und die Lebenserwartung zu den höchsten der Welt, eine Verbindung, die das Rentensystem auf lange Sicht unter Druck setzt.",
  "¿Qué se conoce como la España vaciada?": "Was nennt man das entleerte Spanien?",
  "Las ciudades que perdieron población en la crisis de 2008":
    "Die Städte, die in der Krise von 2008 Einwohner verloren",
  "Las zonas del interior que llevan generaciones despoblándose":
    "Die Gegenden des Landesinneren, die sich seit Generationen entvölkern",
  "Los pueblos abandonados tras la Guerra Civil": "Die nach dem Bürgerkrieg verlassenen Dörfer",
  "Las comarcas sin cobertura de internet": "Die Landkreise ohne Internetversorgung",
  "Provincias enteras del interior con densidades por debajo de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "Ganze Provinzen des Landesinneren mit Dichten unter zehn Einwohnern je Quadratkilometer, während sich das Wachstum an der Küste und in den großen Städten ballt.",
  "España en Europa": "Spanien in Europa",
  "La entrada en la **Comunidad Económica Europea** el **1 de enero de 1986**, junto con Portugal, fue el mayor cambio económico del periodo democrático. Los **fondos estructurales y de cohesión** financiaron carreteras, depuradoras, universidades y trenes, y el mercado único reorientó el comercio exterior hacia Europa.":
    "Der Beitritt zur **Europäischen Wirtschaftsgemeinschaft** am **1. Januar 1986**, gemeinsam mit Portugal, war die größte wirtschaftliche Veränderung der demokratischen Zeit. Die **Struktur- und Kohäsionsfonds** finanzierten Straßen, Kläranlagen, Universitäten und Züge, und der Binnenmarkt richtete den Außenhandel auf Europa aus.",
  "España forma parte del **euro** desde su creación, del espacio **Schengen**, y está en la **OTAN** desde **1982**, confirmada por el referéndum de 1986. En la **ONU** entró en **1955**.":
    "Spanien gehört seit seiner Entstehung zum **Euro**, zum **Schengen-Raum** und seit **1982** zur **NATO**, bestätigt durch das Referendum von 1986. Den **Vereinten Nationen** trat es **1955** bei.",
  "El vínculo iberoamericano": "Die iberoamerikanische Verbindung",
  "Con América Latina el vínculo es lingüístico y también institucional: las **Cumbres Iberoamericanas** reúnen periódicamente a los jefes de Estado y de Gobierno, y existen organismos comunes en educación y cultura. Ese vínculo se refleja también en la ley: los nacionales de países iberoamericanos pueden pedir la nacionalidad tras **dos años** de residencia en lugar de diez.":
    "Mit Lateinamerika ist die Verbindung sprachlich und auch institutionell: die **Iberoamerikanischen Gipfeltreffen** bringen regelmäßig die Staats- und Regierungschefs zusammen, und es gibt gemeinsame Einrichtungen in Bildung und Kultur. Diese Verbindung spiegelt sich auch im Recht: Staatsangehörige iberoamerikanischer Länder können die Staatsangehörigkeit nach **zwei Jahren** Aufenthalt beantragen statt nach zehn.",
  "Y el flujo se ha invertido. El país del que salieron millones de emigrantes en el siglo XX cuenta hoy con varios millones de **residentes extranjeros**, procedentes sobre todo de América Latina, Europa del Este, Marruecos y la propia Unión Europea.":
    "Und der Strom hat sich umgekehrt. Das Land, aus dem im 20. Jahrhundert Millionen auswanderten, zählt heute mehrere Millionen **ausländische Einwohner**, vor allem aus Lateinamerika, Osteuropa, Marokko und der Europäischen Union selbst.",
  "¿En qué año entró España en la OTAN?": "In welchem Jahr trat Spanien der NATO bei?",
  "En 1975": "1975",
  "En 1982, y la permanencia se confirmó en el referéndum de 1986, el mismo año de la entrada en la Comunidad Económica Europea. Son dos hechos distintos que suelen juntarse.":
    "1982, und der Verbleib wurde im Referendum von 1986 bestätigt, im selben Jahr wie der Beitritt zur Europäischen Wirtschaftsgemeinschaft. Es sind zwei verschiedene Vorgänge, die meist zusammengeworfen werden.",
  "La entrada en la CEE **no** se sometió a referéndum: fue un tratado ratificado por las Cortes. Lo que se votó en 1986 fue la **permanencia en la OTAN**, y esa consulta sí fue un referéndum.":
    "Der Beitritt zur EWG wurde **nicht** einem Referendum unterworfen: er war ein von den Cortes ratifizierter Vertrag. Abgestimmt wurde 1986 über den **Verbleib in der NATO**, und diese Befragung war ein Referendum.",
  // es-trabajo
  "Por qué importa: la nómina española tiene dos cifras muy distintas arriba y abajo, y entender qué pasa entre una y otra explica cómo se financian la sanidad, el paro y las pensiones.":
    "Warum das wichtig ist: die spanische Lohnabrechnung hat oben und unten zwei sehr verschiedene Zahlen, und zu verstehen, was dazwischen geschieht, erklärt, wie Gesundheit, Arbeitslosengeld und Renten finanziert werden.",
  "Lo que dice la Constitución": "Was die Verfassung sagt",
  "El **artículo 35** reconoce el **deber y el derecho** al trabajo, a la libre elección de profesión y a una remuneración suficiente. El **artículo 28** garantiza la **libertad sindical** y el **derecho de huelga**; el **37**, la **negociación colectiva**; y el **41** obliga a mantener un régimen público de **Seguridad Social** para todos los ciudadanos.":
    "**Artikel 35** erkennt die **Pflicht und das Recht** auf Arbeit an, auf die freie Wahl des Berufs und auf eine ausreichende Vergütung. **Artikel 28** gewährleistet die **Gewerkschaftsfreiheit** und das **Streikrecht**; **Artikel 37** die **Tarifverhandlung**; und **Artikel 41** verpflichtet dazu, ein öffentliches System der **sozialen Sicherheit** für alle Bürgerinnen und Bürger zu unterhalten.",
  "La norma que lo desarrolla es el **Estatuto de los Trabajadores**, y por debajo de él están los **convenios colectivos**, que pueden ser de sector o de empresa y mejorar siempre lo que la ley fija como mínimo.":
    "Die Norm, die das ausgestaltet, ist das **Arbeitnehmerstatut**, und unter ihm stehen die **Tarifverträge**, die für eine Branche oder ein Unternehmen gelten können und stets über das hinausgehen dürfen, was das Gesetz als Mindestmaß festlegt.",
  "El salario mínimo": "Der Mindestlohn",
  "España **sí tiene un salario mínimo legal**: el **salario mínimo interprofesional**, que el **Gobierno fija cada año** por real decreto, previa consulta a sindicatos y organizaciones empresariales. Se expresa por día, por mes y por año, y se refiere a la jornada completa.":
    "Spanien **hat einen gesetzlichen Mindestlohn**: den **branchenübergreifenden Mindestlohn**, den die **Regierung jedes Jahr** durch königliches Dekret festsetzt, nach Anhörung der Gewerkschaften und der Arbeitgeberverbände. Er wird je Tag, je Monat und je Jahr angegeben und bezieht sich auf die volle Arbeitszeit.",
  "Es una diferencia real con otros países del sur de Europa, donde los mínimos solo existen dentro de los convenios. Aquí el convenio puede subir el suelo, nunca bajarlo.":
    "Das ist ein wirklicher Unterschied zu anderen Ländern Südeuropas, wo die Mindestsätze nur in den Tarifverträgen bestehen. Hier kann der Tarifvertrag den Boden anheben, nie senken.",
  "¿Quién fija el salario mínimo en España?": "Wer setzt in Spanien den Mindestlohn fest?",
  "Cada convenio colectivo, sector por sector": "Jeder Tarifvertrag, Branche für Branche",
  "El Gobierno, cada año, por real decreto": "Die Regierung, jedes Jahr, durch königliches Dekret",
  "No existe salario mínimo legal": "Einen gesetzlichen Mindestlohn gibt es nicht",
  "El salario mínimo interprofesional lo fija el Gobierno previa consulta a sindicatos y empresarios. Los convenios pueden mejorarlo pero nunca quedar por debajo.":
    "Den branchenübergreifenden Mindestlohn setzt die Regierung nach Anhörung von Gewerkschaften und Arbeitgebern fest. Die Tarifverträge dürfen ihn verbessern, aber nie unterschreiten.",
  "El contrato y la jornada": "Der Vertrag und die Arbeitszeit",
  "Indefinido": "Unbefristet",
  "Sin fecha de fin. Es la forma de referencia desde la reforma de 2021, que restringió el uso del contrato temporal.":
    "Ohne Enddatum. Seit der Reform von 2021, die den Gebrauch des befristeten Vertrags einschränkte, ist er die Bezugsform.",
  "Temporal": "Befristet",
  "Solo por causas tasadas: circunstancias de la producción o sustitución de una persona con derecho a reserva del puesto.":
    "Nur aus bestimmten Gründen: Umstände der Produktion oder Vertretung einer Person, deren Stelle freizuhalten ist.",
  "Fijo discontinuo": "Unbefristet mit Unterbrechungen",
  "Indefinido pero para trabajos estacionales o intermitentes. Se llama a la persona cada temporada.":
    "Unbefristet, aber für saisonale oder unterbrochene Arbeiten. Die Person wird jede Saison gerufen.",
  "Autónomo": "Selbstständig",
  "No es un contrato sino un régimen: se factura, y se pagan por cuenta propia impuestos y cotización.":
    "Kein Vertrag, sondern eine Ordnung: man stellt Rechnungen und zahlt Steuern und Beiträge auf eigene Rechnung.",
  "La **jornada máxima** es de **cuarenta horas semanales** de promedio en cómputo anual, y las **vacaciones** mínimas son de **treinta días naturales** al año, que no pueden sustituirse por dinero. Las horas extraordinarias tienen tope legal.":
    "Die **Höchstarbeitszeit** beträgt im Jahresdurchschnitt **vierzig Wochenstunden**, und der Mindesturlaub liegt bei **dreißig Kalendertagen** im Jahr, die nicht durch Geld ersetzt werden dürfen. Für Überstunden gibt es eine gesetzliche Obergrenze.",
  "¿Cuántos días de vacaciones al año garantiza como mínimo la ley?":
    "Wie viele Urlaubstage im Jahr sichert das Gesetz mindestens zu?",
  "Veintiuno naturales": "Einundzwanzig Kalendertage",
  "Veintidós hábiles o treinta naturales": "Zweiundzwanzig Werktage oder dreißig Kalendertage",
  "Cuarenta y cinco naturales": "Fünfundvierzig Kalendertage",
  "Los que fije cada empresa": "So viele, wie jedes Unternehmen festlegt",
  "Treinta días naturales, que equivalen a los veintidós hábiles con que suelen contarse. No pueden cambiarse por dinero: el descanso es obligatorio.":
    "Dreißig Kalendertage, was den zweiundzwanzig Werktagen entspricht, mit denen man meist rechnet. Sie lassen sich nicht gegen Geld tauschen: die Erholung ist verpflichtend.",
  "La nómina": "Die Lohnabrechnung",
  "Entre el **bruto** y el **neto** hay dos descuentos. Las **cotizaciones a la Seguridad Social**, que la persona paga en parte y la empresa en parte mucho mayor, y la **retención del IRPF**, un adelanto del impuesto sobre la renta que se ajusta al año siguiente en la **declaración**.":
    "Zwischen **brutto** und **netto** stehen zwei Abzüge. Die **Beiträge zur Sozialversicherung**, die die Person zum Teil und das Unternehmen zu einem viel größeren Teil zahlt, und der **Einbehalt der Einkommensteuer**, eine Vorauszahlung, die im folgenden Jahr in der **Steuererklärung** ausgeglichen wird.",
  "Son habituales **dos pagas extraordinarias**, en junio y en diciembre, que muchos convenios permiten **prorratear** en las doce mensualidades. Al terminar un contrato se recibe el **finiquito**, con lo pendiente de vacaciones y pagas, y en algunos despidos una **indemnización** aparte.":
    "Üblich sind **zwei Sonderzahlungen**, im Juni und im Dezember, die viele Tarifverträge auf die zwölf Monatsgehälter **umlegen** lassen. Am Ende eines Vertrags erhält man die **Schlussabrechnung**, mit dem noch offenen Urlaub und den Sonderzahlungen, und bei manchen Kündigungen zusätzlich eine **Abfindung**.",
  "La Seguridad Social": "Die Sozialversicherung",
  "Todo trabajador tiene un **número de afiliación** que le acompaña toda la vida. Hay dos grandes regímenes: el **general**, para quien trabaja por cuenta ajena, y el **RETA**, el régimen especial de **trabajadores autónomos**, para quien lo hace por cuenta propia.":
    "Jede beschäftigte Person hat eine **Versicherungsnummer**, die sie ihr Leben lang begleitet. Es gibt zwei große Ordnungen: die **allgemeine**, für abhängig Beschäftigte, und die **RETA**, die Sonderordnung der **Selbstständigen**, für alle, die auf eigene Rechnung arbeiten.",
  "De ahí salen las prestaciones: **desempleo** —que gestiona el **SEPE** y exige haber cotizado un mínimo—, **incapacidad temporal**, **nacimiento y cuidado de menor**, y la **jubilación**. El documento que resume todo lo cotizado se llama **vida laboral** y puede pedirse en cualquier momento.":
    "Daraus fließen die Leistungen: **Arbeitslosengeld** — vom **SEPE** verwaltet und an eine Mindestbeitragszeit gebunden —, **vorübergehende Arbeitsunfähigkeit**, **Geburt und Betreuung eines Kindes** und die **Rente**. Das Dokument, das alle eingezahlten Zeiten zusammenfasst, heißt **Erwerbsleben** und kann jederzeit angefordert werden.",
  "¿Qué es el RETA?": "Was ist die RETA?",
  "El registro de contratos temporales": "Das Register der befristeten Verträge",
  "El régimen especial de trabajadores autónomos": "Die Sonderordnung der selbstständig Erwerbstätigen",
  "La retención del IRPF en la nómina": "Der Einbehalt der Einkommensteuer in der Lohnabrechnung",
  "El fondo de garantía salarial": "Der Lohngarantiefonds",
  "Es el régimen de la Seguridad Social para quien trabaja por cuenta propia, frente al régimen general de quien lo hace por cuenta ajena.":
    "Es ist die Ordnung der Sozialversicherung für alle, die auf eigene Rechnung arbeiten, im Unterschied zur allgemeinen Ordnung der abhängig Beschäftigten.",
  "**Finiquito** e **indemnización** no son lo mismo. El finiquito se cobra siempre al terminar y liquida lo pendiente; la indemnización solo corresponde en determinados despidos, y se suma al finiquito.":
    "**Schlussabrechnung** und **Abfindung** sind nicht dasselbe. Die Schlussabrechnung erhält man immer am Ende und sie gleicht das Offene aus; eine Abfindung steht nur bei bestimmten Kündigungen zu und kommt zur Schlussabrechnung hinzu.",
  // es-sanidad-educacion
  "Por qué importa: los dos servicios que más se usan viviendo en un país. Los dos son públicos y universales, y los dos los gestionan las comunidades, no el Estado: eso explica que no funcionen igual en todas partes.":
    "Warum das wichtig ist: die beiden Dienste, die man beim Leben in einem Land am meisten braucht. Beide sind öffentlich und für alle da, und beide verwalten die Gemeinschaften und nicht der Staat: das erklärt, warum sie nicht überall gleich funktionieren.",
  "El Sistema Nacional de Salud": "Das Nationale Gesundheitssystem",
  "El **artículo 43** reconoce el derecho a la protección de la salud. El **Sistema Nacional de Salud** es **universal** y se financia con **impuestos**, no con un seguro: no hay primas ni cuotas mensuales. La gestión corresponde a las **comunidades autónomas**, y el Estado fija las bases y coordina.":
    "**Artikel 43** erkennt das Recht auf Gesundheitsschutz an. Das **Nationale Gesundheitssystem** ist **allgemein** und wird aus **Steuern** finanziert, nicht aus einer Versicherung: es gibt keine Prämien und keine Monatsbeiträge. Die Verwaltung liegt bei den **autonomen Gemeinschaften**, und der Staat setzt die Grundlagen und koordiniert.",
  "La puerta de entrada es el **centro de salud** y el **médico de familia**, que atiende, receta y **deriva** al especialista. A urgencias se puede acudir directamente, y para las emergencias hay un número único en toda España y en toda Europa: el **112**.":
    "Die Eingangstür ist das **Gesundheitszentrum** und die **Hausärztin**, die behandelt, verschreibt und zur Fachärztin **überweist**. In die Notaufnahme kann man unmittelbar gehen, und für Notfälle gibt es in ganz Spanien und in ganz Europa eine einzige Nummer: die **112**.",
  "La tarjeta sanitaria": "Die Gesundheitskarte",
  "Individual y emitida por la comunidad. Es lo que identifica a la persona ante el sistema; cambia si se cambia de comunidad.":
    "Persönlich und von der Gemeinschaft ausgestellt. Sie weist die Person gegenüber dem System aus; sie wechselt, wenn man die Gemeinschaft wechselt.",
  "La receta electrónica": "Das elektronische Rezept",
  "El médico prescribe en el sistema y la farmacia lee la tarjeta. Ya casi no se usa el papel.":
    "Die Ärztin verschreibt im System, und die Apotheke liest die Karte. Papier wird kaum noch benutzt.",
  "El copago farmacéutico": "Die Arzneimittelzuzahlung",
  "Una parte del precio del medicamento a cargo del paciente, en porcentaje según la renta. Los pensionistas tienen topes mensuales.":
    "Ein Teil des Arzneimittelpreises geht zulasten der Patientin, als Prozentsatz nach Einkommen. Für Rentner gibt es monatliche Obergrenzen.",
  "Las farmacias": "Die Apotheken",
  "Establecimientos privados con licencia y horarios regulados. Siempre hay una de guardia abierta en cada zona.":
    "Private Betriebe mit Konzession und geregelten Öffnungszeiten. In jedem Gebiet hat immer eine Notdienst.",
  "¿Qué número se marca en España para una emergencia?":
    "Welche Nummer wählt man in Spanien in einem Notfall?",
  "El 091": "Die 091",
  "El 112": "Die 112",
  "El 061": "Die 061",
  "El 080": "Die 080",
  "El 112 es el número único de emergencias en toda España y en toda la Unión Europea, y coordina policía, bomberos y ambulancias. Los otros son teléfonos de servicios concretos.":
    "Die 112 ist die einheitliche Notrufnummer in ganz Spanien und in der ganzen Europäischen Union und koordiniert Polizei, Feuerwehr und Rettungsdienst. Die anderen sind Nummern einzelner Dienste.",
  "La escuela": "Die Schule",
  "El **artículo 27** reconoce el derecho a la educación y declara la enseñanza básica **obligatoria y gratuita**. La obligatoriedad va de los **seis a los dieciséis años**, y también aquí gestionan las comunidades sobre unas bases estatales comunes.":
    "**Artikel 27** erkennt das Recht auf Bildung an und erklärt den Grundschulunterricht für **verpflichtend und unentgeltlich**. Die Pflicht reicht von **sechs bis sechzehn Jahren**, und auch hier verwalten die Gemeinschaften auf gemeinsamen staatlichen Grundlagen.",
  "Infantil · 0 a 6": "Vorschule · 0 bis 6",
  "No obligatoria. El segundo ciclo, de tres a seis años, es gratuito y lo cursa la práctica totalidad de los niños.":
    "Nicht verpflichtend. Der zweite Abschnitt, von drei bis sechs Jahren, ist unentgeltlich, und ihn besuchen praktisch alle Kinder.",
  "Primaria · 6 a 12": "Grundschule · 6 bis 12",
  "Seis cursos, obligatoria. Es lo que en la conversación se sigue llamando el colegio.":
    "Sechs Jahrgänge, verpflichtend. Es ist das, was man im Gespräch weiterhin colegio nennt.",
  "ESO · 12 a 16": "ESO · 12 bis 16",
  "Cuatro cursos de Educación Secundaria Obligatoria. Al superarla se obtiene el título de Graduado en ESO.":
    "Vier Jahrgänge der verpflichtenden Sekundarstufe. Wer sie besteht, erhält den Abschluss Graduado en ESO.",
  "Bachillerato o FP · 16 a 18": "Bachillerato oder Berufsbildung · 16 bis 18",
  "Dos años de Bachillerato, o Formación Profesional de grado medio. Ninguna de las dos es obligatoria.":
    "Zwei Jahre Bachillerato oder eine berufliche Ausbildung der mittleren Stufe. Keines von beiden ist verpflichtend.",
  "Para entrar en la universidad hay que superar el Bachillerato y una prueba de acceso, conocida durante décadas como **selectividad** y hoy con siglas que han ido cambiando. La universidad se organiza en **grado**, de cuatro años en la mayoría de las carreras, **máster** y **doctorado**.":
    "Für die Universität muss man das Bachillerato bestehen und eine Zugangsprüfung ablegen, die jahrzehntelang **selectividad** hieß und heute wechselnde Kürzel trägt. Die Universität gliedert sich in **Grado**, in den meisten Fächern vier Jahre, **Máster** und **Doktorat**.",
  "¿Qué título se obtiene al terminar la enseñanza obligatoria?":
    "Welchen Abschluss erhält man am Ende der Schulpflicht?",
  "El Bachillerato": "Das Bachillerato",
  "El Graduado en ESO": "Den Graduado en ESO",
  "El certificado de escolaridad": "Eine Schulbesuchsbescheinigung",
  "El grado universitario": "Einen Hochschulabschluss",
  "El título de Graduado en Educación Secundaria Obligatoria, a los dieciséis años. El Bachillerato son dos cursos posteriores y no es obligatorio.":
    "Den Abschluss Graduado en Educación Secundaria Obligatoria, mit sechzehn Jahren. Das Bachillerato sind zwei spätere Jahrgänge und nicht verpflichtend.",
  "Tres tipos de centro": "Drei Arten von Schulen",
  "Los centros son **públicos**, **privados** o **concertados**. El **concertado** es la figura característica de España: un centro de titularidad **privada** —a menudo religiosa— sostenido con **fondos públicos** mediante un concierto, que a cambio no puede cobrar por la enseñanza en las etapas concertadas. Escolariza a una parte grande del alumnado, sobre todo en las ciudades.":
    "Die Schulen sind **öffentlich**, **privat** oder **concertado**. Die **concertada** ist die für Spanien kennzeichnende Form: eine Schule in **privater** Trägerschaft — oft kirchlich —, die über eine Vereinbarung mit **öffentlichen Mitteln** getragen wird und dafür in den vereinbarten Stufen kein Schulgeld für den Unterricht verlangen darf. Sie beschult einen großen Teil der Schülerschaft, vor allem in den Städten.",
  "Las calificaciones van de **cero a diez**, y se aprueba a partir del **cinco**. En la universidad la escala es la misma, con la mención de **matrícula de honor** para las mejores notas.":
    "Die Noten reichen von **null bis zehn**, und bestanden ist ab **fünf**. An der Universität gilt dieselbe Skala, mit der Auszeichnung **matrícula de honor** für die besten Noten.",
  "¿Qué es un centro concertado?": "Was ist eine escuela concertada?",
  "Un centro público con horario ampliado": "Eine öffentliche Schule mit verlängerten Zeiten",
  "Un centro privado sostenido con fondos públicos":
    "Eine private Schule, die mit öffentlichen Mitteln getragen wird",
  "Un centro que solo imparte Formación Profesional": "Eine Schule, die nur berufliche Bildung anbietet",
  "Un centro para alumnos con necesidades especiales": "Eine Schule für Kinder mit besonderem Förderbedarf",
  "De titularidad privada y financiación pública mediante concierto, y por eso no puede cobrar por la enseñanza en las etapas concertadas. Es una figura característica del sistema español.":
    "In privater Trägerschaft und mit öffentlicher Finanzierung über eine Vereinbarung, und deshalb darf sie in den vereinbarten Stufen kein Schulgeld für den Unterricht verlangen. Es ist eine kennzeichnende Form des spanischen Systems.",
  "La **tarjeta sanitaria** la emite la comunidad autónoma, no el Estado: al mudarse de comunidad hay que **cambiar de tarjeta y de médico**. La atención está garantizada en toda España, pero el trámite es autonómico.":
    "Die **Gesundheitskarte** stellt die autonome Gemeinschaft aus, nicht der Staat: beim Umzug in eine andere Gemeinschaft muss man **Karte und Ärztin wechseln**. Die Versorgung ist in ganz Spanien gesichert, das Verfahren aber liegt bei der Gemeinschaft.",
  // es-vivir-en-espana
  "Por qué importa: esta es la lección práctica. Ninguna de las pruebas que aquí se mencionan versa sobre historia, y este curso no prepara para ninguna de ellas: sirven para saber qué pide el Estado, y a quién.":
    "Warum das wichtig ist: das ist die praktische Lektion. Keine der hier genannten Prüfungen handelt von Geschichte, und dieser Kurs bereitet auf keine von ihnen vor: sie sind dazu da, zu wissen, was der Staat verlangt und von wem.",
  "El padrón, primero": "Zuerst die Meldung",
  "El **empadronamiento** es la inscripción en el **padrón municipal** del ayuntamiento donde se vive. Es el trámite del que dependen casi todos los demás: la **tarjeta sanitaria**, la **escolarización** de los hijos, las ayudas municipales y, para los ciudadanos de la Unión, el voto en las **municipales**.":
    "Das **empadronamiento** ist die Eintragung in das **Melderegister** der Gemeinde, in der man lebt. Von diesem Schritt hängen fast alle anderen ab: die **Gesundheitskarte**, die **Einschulung** der Kinder, die kommunalen Hilfen und, für Unionsbürgerinnen, die Stimme bei den **Kommunalwahlen**.",
  "Tiene una particularidad que conviene conocer: el padrón registra **dónde vive** una persona, no su situación administrativa, y puede empadronarse **con independencia** de ella. El certificado de empadronamiento acredita además el tiempo de residencia, que es lo que después cuentan otros expedientes.":
    "Es hat eine Besonderheit, die man kennen sollte: das Melderegister erfasst, **wo** jemand wohnt, nicht seine aufenthaltsrechtliche Lage, und man kann sich **unabhängig** davon melden. Die Meldebescheinigung weist außerdem die Aufenthaltsdauer nach, und genau die zählen spätere Verfahren.",
  "Los documentos": "Die Dokumente",
  "DNI": "DNI",
  "El documento nacional de identidad de los españoles, obligatorio desde los catorce años.":
    "Der Personalausweis der Spanierinnen und Spanier, ab vierzehn Jahren verpflichtend.",
  "NIE": "NIE",
  "El número de identidad de extranjero. No es una tarjeta sino un número, y hace falta para trabajar, abrir una cuenta o firmar un contrato.":
    "Die Ausländeridentifikationsnummer. Sie ist keine Karte, sondern eine Nummer, und man braucht sie, um zu arbeiten, ein Konto zu eröffnen oder einen Vertrag zu unterschreiben.",
  "TIE": "TIE",
  "La tarjeta de identidad de extranjero: el documento físico que acredita la autorización de residencia y lleva el NIE.":
    "Der Ausländerausweis: das physische Dokument, das die Aufenthaltserlaubnis nachweist und die NIE trägt.",
  "Número de la Seguridad Social": "Sozialversicherungsnummer",
  "Necesario para ser dado de alta en un empleo. Es distinto del NIE y no lo sustituye.":
    "Nötig, um in einem Arbeitsverhältnis angemeldet zu werden. Sie ist etwas anderes als die NIE und ersetzt sie nicht.",
  "Los ciudadanos de la **Unión Europea** no necesitan permiso de residencia: se inscriben en el Registro Central de Extranjeros y obtienen un **certificado de registro**, que es un trámite más ligero.":
    "Bürgerinnen und Bürger der **Europäischen Union** brauchen keine Aufenthaltserlaubnis: sie tragen sich in das Zentrale Ausländerregister ein und erhalten eine **Registrierungsbescheinigung**, ein leichteres Verfahren.",
  "¿Qué es el empadronamiento?": "Was ist das empadronamiento?",
  "La inscripción en el padrón municipal del lugar donde se vive":
    "Die Eintragung in das Melderegister des Wohnorts",
  "El permiso de residencia": "Die Aufenthaltserlaubnis",
  "El alta en la Seguridad Social": "Die Anmeldung bei der Sozialversicherung",
  "La declaración anual de la renta": "Die jährliche Steuererklärung",
  "Es un registro del ayuntamiento sobre quién vive en el municipio. De él dependen la tarjeta sanitaria, la escolarización y el certificado que acredita el tiempo de residencia.":
    "Es ist ein Register der Gemeinde darüber, wer im Ort lebt. Von ihm hängen die Gesundheitskarte, die Einschulung und die Bescheinigung ab, die die Aufenthaltsdauer nachweist.",
  "La residencia": "Der Aufenthalt",
  "Las autorizaciones de residencia y trabajo son **temporales** al principio y se renuevan. Existen además figuras de **arraigo** —social, laboral, familiar o para la formación— pensadas para quien lleva ya tiempo en el país y acredita vínculos.":
    "Die Aufenthalts- und Arbeitserlaubnisse sind anfangs **befristet** und werden verlängert. Daneben gibt es die Formen des **arraigo** — sozial, beruflich, familiär oder zur Ausbildung —, gedacht für Menschen, die schon länger im Land sind und Bindungen nachweisen.",
  "Tras **cinco años** de residencia legal y continuada puede solicitarse la **residencia de larga duración**, que autoriza a residir y trabajar de forma indefinida en las mismas condiciones que los españoles, salvo en lo que la ley reserva a la nacionalidad, como el voto en las generales.":
    "Nach **fünf Jahren** rechtmäßigen und ununterbrochenen Aufenthalts kann man die **Daueraufenthaltserlaubnis** beantragen, die zum unbefristeten Aufenthalt und zur Arbeit unter denselben Bedingungen wie Spanierinnen berechtigt, außer in dem, was das Gesetz der Staatsangehörigkeit vorbehält, etwa die Stimme bei den Parlamentswahlen.",
  "¿Cuántos años de residencia legal se exigen para la residencia de larga duración?":
    "Wie viele Jahre rechtmäßigen Aufenthalts verlangt die Daueraufenthaltserlaubnis?",
  "Tres": "Drei",
  "Cinco años, y autoriza a residir y trabajar indefinidamente. Diez es el plazo general para pedir la nacionalidad, que es un paso distinto y posterior.":
    "Fünf Jahre, und sie berechtigt zu unbefristetem Aufenthalt und zur Arbeit. Zehn ist die allgemeine Frist für den Antrag auf die Staatsangehörigkeit, ein anderer und späterer Schritt.",
  "Los trámites de cada día": "Die Wege des Alltags",
  "Buena parte de la Administración se hace ya por internet, y para ello hace falta una **identidad digital**: el sistema **Cl@ve** o un **certificado digital**. Con ellos se pide cita en la Seguridad Social, se descarga la vida laboral, se presenta la declaración de la renta o se consulta un expediente.":
    "Ein guter Teil der Verwaltung läuft inzwischen über das Internet, und dafür braucht es eine **digitale Identität**: das System **Cl@ve** oder ein **digitales Zertifikat**. Damit bucht man Termine bei der Sozialversicherung, lädt das Erwerbsleben herunter, gibt die Steuererklärung ab oder sieht eine Akte ein.",
  "La **declaración de la renta** se presenta cada año ante la **Agencia Tributaria**, normalmente entre abril y junio, y regulariza lo que ya se fue reteniendo en la nómina: puede salir a pagar o a devolver.":
    "Die **Steuererklärung** gibt man jedes Jahr bei der **Steuerbehörde** ab, meist zwischen April und Juni, und sie gleicht aus, was schon vom Lohn einbehalten wurde: es kann eine Nachzahlung oder eine Erstattung herauskommen.",
  "La nacionalidad": "Die Staatsangehörigkeit",
  "El expediente se tramita ante el **Ministerio de Justicia**. Además del plazo de residencia que corresponda, se exigen **buena conducta cívica** y acreditar la **integración** con las dos pruebas del **Instituto Cervantes**: el **DELE A2** de lengua —del que están exentos los nacionales de países hispanohablantes— y la **CCSE**, de conocimientos constitucionales y socioculturales.":
    "Das Verfahren läuft beim **Justizministerium**. Neben der jeweiligen Aufenthaltsfrist verlangt werden **gutes staatsbürgerliches Verhalten** und der Nachweis der **Integration** durch die zwei Prüfungen des **Instituto Cervantes**: das Sprachzeugnis **DELE A2** — von dem Staatsangehörige spanischsprachiger Länder befreit sind — und die **CCSE** über verfassungsrechtliche und soziokulturelle Kenntnisse.",
  "Concedida la nacionalidad, se cierra con un acto formal: **jurar o prometer fidelidad al Rey y obediencia a la Constitución y a las leyes**, y la inscripción en el Registro Civil.":
    "Ist die Staatsangehörigkeit erteilt, schließt ein förmlicher Akt sie ab: **dem König Treue und der Verfassung und den Gesetzen Gehorsam zu schwören oder zu geloben**, und die Eintragung im Personenstandsregister.",
  "¿Qué número identifica a un extranjero en España para trabajar o firmar un contrato?":
    "Welche Nummer weist eine ausländische Person in Spanien aus, um zu arbeiten oder einen Vertrag zu unterschreiben?",
  "El DNI": "Der DNI",
  "El NIE": "Die NIE",
  "El número de la Seguridad Social": "Die Sozialversicherungsnummer",
  "El número de pasaporte": "Die Passnummer",
  "El número de identidad de extranjero. La TIE es la tarjeta física que lo lleva impreso, y el número de la Seguridad Social es otro distinto, necesario además para el alta laboral.":
    "Die Ausländeridentifikationsnummer. Die TIE ist die physische Karte, auf der sie steht, und die Sozialversicherungsnummer ist eine andere, zusätzlich nötig für die Anmeldung im Arbeitsverhältnis.",
  "**Residencia** y **nacionalidad** son dos cosas distintas y dos expedientes distintos. La residencia de larga duración se pide a los cinco años ante Extranjería; la nacionalidad, con el plazo que corresponda, ante el Ministerio de Justicia.":
    "**Aufenthalt** und **Staatsangehörigkeit** sind zwei verschiedene Dinge und zwei verschiedene Verfahren. Die Daueraufenthaltserlaubnis beantragt man nach fünf Jahren bei der Ausländerbehörde; die Staatsangehörigkeit, mit der jeweiligen Frist, beim Justizministerium.",
  // es-vida-cotidiana
  "Por qué se cierra aquí: los horarios españoles desconciertan a casi todo el que llega, y las reglas de trato no están escritas en ninguna parte. Ninguna de estas cosas es obligatoria; todas son reales.":
    "Warum hier geschlossen wird: die spanischen Tageszeiten verwirren fast jeden, der ankommt, und die Umgangsregeln stehen nirgends geschrieben. Keine dieser Sachen ist verpflichtend; alle sind wirklich.",
  "El reloj": "Die Uhr",
  "España come y cena **más tarde** que casi toda Europa: la **comida** entre las dos y las tres, la **cena** a partir de las nueve, más tarde en verano y en el sur. El desayuno es ligero —café con leche y una tostada— y a media mañana mucha gente hace un segundo desayuno, el **almuerzo**.":
    "Spanien isst zu Mittag und zu Abend **später** als fast ganz Europa: das **Mittagessen** zwischen zwei und drei, das **Abendessen** ab neun, im Sommer und im Süden später. Das Frühstück ist leicht — Milchkaffee und ein Toast —, und am späten Vormittag nehmen viele ein zweites Frühstück, das **almuerzo**.",
  "Una parte de la explicación está en el huso horario: España peninsular usa la hora de Europa central pese a estar a la longitud de Londres, de modo que el sol se pone más tarde de lo que marca el reloj. La otra parte es costumbre heredada.":
    "Ein Teil der Erklärung liegt in der Zeitzone: das Festlandsspanien benutzt die mitteleuropäische Zeit, obwohl es auf der Länge von London liegt, sodass die Sonne später untergeht, als die Uhr anzeigt. Der andere Teil ist ererbte Gewohnheit.",
  "Muchos comercios pequeños y oficinas cierran a mediodía y reabren por la tarde: es la **jornada partida**, más común cuanto más pequeño es el municipio. La **siesta** existe, pero como costumbre de fin de semana o de verano más que como práctica diaria.":
    "Viele kleine Geschäfte und Büros schließen mittags und öffnen am Nachmittag wieder: das ist die **geteilte Arbeitszeit**, umso häufiger, je kleiner der Ort ist. Die **Siesta** gibt es, aber eher als Gewohnheit am Wochenende oder im Sommer denn als tägliche Übung.",
  "¿A qué hora se cena habitualmente en España?":
    "Um welche Zeit isst man in Spanien üblicherweise zu Abend?",
  "Entre las siete y las ocho": "Zwischen sieben und acht",
  "A partir de las nueve": "Ab neun",
  "Entre las seis y las siete": "Zwischen sechs und sieben",
  "Después de medianoche": "Nach Mitternacht",
  "A partir de las nueve, y más tarde en verano y en el sur. La comida principal del día es la del mediodía, entre las dos y las tres.":
    "Ab neun, und im Sommer und im Süden später. Die Hauptmahlzeit des Tages ist die mittägliche, zwischen zwei und drei.",
  "La mesa": "Der Tisch",
  "El **menú del día** es una institución: en la mayoría de los restaurantes, al mediodía y entre semana, se ofrece primer plato, segundo, pan, bebida y postre o café a **precio fijo**. Nació de una norma de los años sesenta pensada para el turismo y se quedó como costumbre.":
    "Das **menú del día** ist eine Einrichtung: in den meisten Gaststätten gibt es mittags und werktags einen ersten Gang, einen zweiten, Brot, Getränk und Nachtisch oder Kaffee zum **Festpreis**. Es entstand aus einer Vorschrift der sechziger Jahre, die für den Tourismus gedacht war, und blieb als Gewohnheit.",
  "Fuera de las comidas está el **tapeo**: ir de bar en bar tomando algo pequeño con la bebida. En algunas ciudades la tapa se sirve **incluida** con la consumición y en otras se paga aparte. Y después de comer viene la **sobremesa**, el rato de conversación con la mesa ya recogida, que puede durar más que la comida.":
    "Außerhalb der Mahlzeiten gibt es das **tapeo**: von Bar zu Bar gehen und zum Getränk eine Kleinigkeit nehmen. In manchen Städten kommt die Tapa mit dem Getränk **inbegriffen**, in anderen zahlt man sie getrennt. Und nach dem Essen folgt die **sobremesa**, die Zeit des Gesprächs bei schon abgeräumtem Tisch, die länger dauern kann als die Mahlzeit.",
  "¿Qué es el menú del día?": "Was ist das menú del día?",
  "La carta completa del restaurante": "Die vollständige Speisekarte der Gaststätte",
  "Una comida completa a precio fijo, al mediodía y entre semana":
    "Ein vollständiges Essen zum Festpreis, mittags und werktags",
  "El plato recomendado por el cocinero": "Das vom Koch empfohlene Gericht",
  "Un servicio reservado a los turistas": "Ein Angebot, das Touristen vorbehalten ist",
  "Primer plato, segundo, pan, bebida y postre o café por un precio único. Nació de una norma de los años sesenta y se quedó como costumbre del país.":
    "Erster Gang, zweiter Gang, Brot, Getränk und Nachtisch oder Kaffee zu einem einzigen Preis. Es entstand aus einer Vorschrift der sechziger Jahre und blieb als Gewohnheit des Landes.",
  "El trato": "Der Umgang",
  "El **tuteo** está mucho más extendido en España que en otros países de lengua española. Se tutea a compañeros de trabajo, a camareros, a dependientes y con frecuencia a desconocidos de edad parecida. El **usted** se reserva para personas mayores, para contextos muy formales y para dirigirse a alguien de quien se quiere marcar distancia o respeto especial.":
    "Das **Duzen** ist in Spanien viel weiter verbreitet als in anderen spanischsprachigen Ländern. Man duzt Arbeitskollegen, Bedienungen, Verkäuferinnen und häufig auch Unbekannte ähnlichen Alters. Das **usted** bleibt älteren Menschen vorbehalten, sehr förmlichen Zusammenhängen und dem Umgang mit jemandem, dem gegenüber man Abstand oder besonderen Respekt zeigen will.",
  "El saludo habitual entre conocidos, y en presentaciones informales, son **dos besos** en la mejilla, empezando por la izquierda de quien saluda. Entre hombres suele ser un apretón de manos o un abrazo. En contextos profesionales la mano es lo normal.":
    "Der übliche Gruß unter Bekannten und bei zwanglosen Vorstellungen sind **zwei Küsse** auf die Wange, beginnend links von der grüßenden Person. Unter Männern ist es meist ein Händedruck oder eine Umarmung. Im beruflichen Umfeld ist die Hand das Übliche.",
  "¿Cómo se saluda habitualmente entre conocidos en una situación informal?":
    "Wie grüßt man unter Bekannten in einer zwanglosen Situation üblicherweise?",
  "Con una inclinación": "Mit einer Verbeugung",
  "Con dos besos en la mejilla": "Mit zwei Küssen auf die Wange",
  "Sin contacto físico": "Ohne Körperkontakt",
  "Con tres besos": "Mit drei Küssen",
  "Dos besos, empezando por la izquierda de quien saluda. Entre hombres es más común el apretón de manos o el abrazo, y en el trabajo la mano es lo habitual.":
    "Zwei Küsse, beginnend links von der grüßenden Person. Unter Männern ist der Händedruck oder die Umarmung häufiger, und bei der Arbeit ist die Hand das Übliche.",
  "La calle y la casa": "Die Straße und das Haus",
  "La vida social ocurre mucho **fuera de casa**: en el bar del barrio, en la terraza, en la plaza. Es una consecuencia práctica del clima y de las viviendas, en su mayoría **pisos** en edificios y no casas individuales. La **propiedad** está muy extendida: la proporción de hogares en vivienda propia es de las más altas de Europa, aunque el alquiler crece entre los jóvenes.":
    "Das gesellige Leben findet viel **außer Haus** statt: in der Bar des Viertels, auf der Terrasse, auf der Plaza. Es ist eine praktische Folge des Klimas und der Wohnungen, die überwiegend **Etagenwohnungen** in Häusern sind und keine Einzelhäuser. Das **Eigentum** ist weit verbreitet: der Anteil der Haushalte in der eigenen Wohnung gehört zu den höchsten Europas, auch wenn die Miete unter jungen Menschen zunimmt.",
  "La familia sigue siendo muy cercana en el trato y en la práctica, y los jóvenes se **independizan tarde**, más que en casi toda Europa, por razones sobre todo económicas.":
    "Die Familie bleibt im Umgang und in der Praxis sehr nah, und junge Menschen **ziehen spät aus**, später als fast überall in Europa, vor allem aus wirtschaftlichen Gründen.",
  "El deporte": "Der Sport",
  "El **fútbol** ocupa la conversación de agosto a mayo, con **LaLiga** y el partido entre los dos grandes clubes que se llama simplemente **el clásico**. La selección se conoce como **la Roja**. Después vienen el **baloncesto**, el **ciclismo** con la **Vuelta a España** cada septiembre, el **tenis** y el **motociclismo**, disciplinas en las que el país lleva décadas dando campeones.":
    "Der **Fußball** füllt von August bis Mai die Gespräche, mit **LaLiga** und dem Spiel zwischen den beiden großen Vereinen, das man schlicht **el clásico** nennt. Die Nationalmannschaft heißt **la Roja**. Danach kommen der **Basketball**, der **Radsport** mit der **Vuelta a España** jeden September, das **Tennis** und der **Motorradsport**, Disziplinen, in denen das Land seit Jahrzehnten Meister hervorbringt.",
  "Los horarios están cambiando, y en las grandes ciudades muchos comercios ya no cierran a mediodía. Estas costumbres describen una tendencia general, no una regla que valga en todas partes ni para todo el mundo.":
    "Die Zeiten ändern sich, und in den großen Städten schließen viele Geschäfte mittags nicht mehr. Diese Gepflogenheiten beschreiben eine allgemeine Neigung, keine Regel, die überall und für alle gilt.",
};
