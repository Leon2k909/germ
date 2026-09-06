/**
 * German for the Zhizn v Rossii course cards and headings.
 *
 * Keyed on the RUSSIAN source text exactly as it appears in
 * zhiznVRossiiCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — which is why this is filled in
 * chapter by chapter rather than all at once. check-ru-translations fails on
 * a key that matches nothing in the course, because a typo there is silent
 * otherwise: the card renders, the tap works, and the reader is told there is
 * no translation for a card that was in fact translated.
 *
 * THIS TABLE ALSO COVERS THE QUIZZES, which the three older ones do not. For
 * an English or French course a reader can usually still work through the
 * question; in front of Cyrillic they cannot, and a lesson that ends in three
 * untranslated questions is not readable. localiseLesson already translates
 * quiz text, so this needed nothing new — only the entries.
 *
 * WHAT STAYS RUSSIAN. Proper names in their German conventional form:
 * Duma, Kreml, Rubel, Föderationsrat. Where a term is the answer the exam
 * wants and has no German equivalent — ЕГЭ, ОМС, ЗАТО, МРОТ — the German
 * gives the meaning and keeps the abbreviation beside it, so the reader
 * learns the word they will actually meet. Quoted Russian names of things,
 * like the payment system or a ship, stay in quotation marks as they are.
 */
export const ZHIZN_V_ROSSII_DE: Record<string, string> = {
  // ── Course line, chapters and lesson titles ─────────────────────────────
  // The course NAME is not here: it is an interface string that already goes
  // through the i18n tables, and a second translation of it would fight the
  // first. The tagline underneath it is course text, so it belongs here.
  "История, устройство и повседневная жизнь: как устроена страна.":
    "Geschichte, Staatsaufbau und Alltag: wie dieses Land funktioniert.",

  "Символы и Конституция": "Symbole und Verfassung",
  "Государственное устройство": "Staatsaufbau",
  "История России": "Geschichte Russlands",
  "Территория и природа": "Land und Natur",
  "Народы, языки и культура": "Völker, Sprachen und Kultur",
  "Общество и повседневная жизнь": "Gesellschaft und Alltag",

  "Государственные символы": "Staatliche Symbole",
  "Конституция 1993 года": "Die Verfassung von 1993",
  "Права и свободы человека": "Rechte und Freiheiten des Menschen",
  "Обязанности и гражданство": "Pflichten und Staatsangehörigkeit",
  "Праздники и календарь": "Feiertage und Kalender",

  "Президент": "Der Präsident",
  "Федеральное Собрание": "Die Föderationsversammlung",
  "Правительство": "Die Regierung",
  "Судебная власть": "Die rechtsprechende Gewalt",
  "Выборы и местное самоуправление": "Wahlen und kommunale Selbstverwaltung",

  "Киевская Русь и раздробленность": "Die Kiewer Rus und die Zersplitterung",
  "Ордынское время и возвышение Москвы": "Die Zeit der Horde und der Aufstieg Moskaus",
  "Московское царство": "Das Moskauer Zarentum",
  "Российская империя": "Das Russische Kaiserreich",
  "1917 год и Гражданская война": "Das Jahr 1917 und der Bürgerkrieg",
  "СССР: индустриализация, коллективизация, репрессии":
    "Die Sowjetunion: Industrialisierung, Kollektivierung, Repressionen",
  "Война, послевоенные годы и распад СССР":
    "Krieg, Nachkriegsjahre und das Ende der Sowjetunion",

  "География и часовые пояса": "Geografie und Zeitzonen",
  "Природные зоны, реки и климат": "Vegetationszonen, Flüsse und Klima",
  "Федеративное устройство: субъекты": "Der föderale Aufbau: die Subjekte",
  "Города": "Städte",

  "Народы": "Völker",
  "Языки и религии": "Sprachen und Religionen",
  "Литература и искусство": "Literatur und Kunst",
  "Наука и космос": "Wissenschaft und Raumfahrt",

  "Работа и деньги": "Arbeit und Geld",
  "Здоровье и образование": "Gesundheit und Bildung",
  "Документы и учреждения": "Dokumente und Behörden",
  "Быт и обычаи": "Alltag und Bräuche",
  // ru-simvoly
  "Почему начинаем отсюда: символы встречаются каждый день — на здании администрации, на паспорте, на форме сборной. Через них проще всего войти во всё остальное.":
    "Warum wir hier anfangen: Symbole begegnen dir jeden Tag — am Verwaltungsgebäude, im Pass, auf dem Trikot der Nationalmannschaft. Über sie kommt man am leichtesten in alles Übrige hinein.",
  "Флаг": "Die Flagge",
  "Государственный флаг — прямоугольное полотнище из трёх равных горизонтальных полос: **белой сверху**, **синей посередине** и **красной снизу**. Порядок закреплён **федеральным конституционным законом 2000 года**, а сам триколор появился при **Петре I** — сначала как флаг торговых судов.":
    "Die Staatsflagge ist ein rechteckiges Tuch aus drei gleich breiten waagerechten Streifen: **weiß oben**, **blau in der Mitte** und **rot unten**. Die Reihenfolge ist durch ein **föderales Verfassungsgesetz von 2000** festgelegt; die Trikolore selbst kam unter **Peter I.** auf — zunächst als Flagge der Handelsschiffe.",
  "Значения цветам официально не присвоены. Толкования, которые слышишь чаще всего — белый как чистота, синий как верность, красный как отвага — появились позже и в законе не записаны. **22 августа** отмечается День Государственного флага.":
    "Den Farben ist offiziell keine Bedeutung zugewiesen. Die Deutungen, die man am häufigsten hört — Weiß als Reinheit, Blau als Treue, Rot als Tapferkeit —, kamen später auf und stehen in keinem Gesetz. Am **22. August** wird der Tag der Staatsflagge begangen.",
  "Герб": "Das Wappen",
  "Герб — **двуглавый орёл**, золотой, на красном щите. Над головами — **три короны**, в лапах **скипетр и держава**, на груди — всадник, поражающий копьём дракона. Двуглавый орёл пришёл в русскую геральдику в конце **XV века**, при **Иване III**, а нынешний вид герб получил в **1993 году**.":
    "Das Wappen ist ein **doppelköpfiger Adler**, golden, auf rotem Schild. Über den Köpfen **drei Kronen**, in den Fängen **Zepter und Reichsapfel**, auf der Brust ein Reiter, der mit der Lanze einen Drachen ersticht. Der Doppeladler kam Ende des **15. Jahrhunderts** unter **Iwan III.** in die russische Heraldik; sein heutiges Aussehen erhielt das Wappen **1993**.",
  "Три короны": "Drei Kronen",
  "Сегодня их толкуют как символ суверенитета Российской Федерации и её частей.":
    "Heute deutet man sie als Zeichen der Souveränität der Russischen Föderation und ihrer Teile.",
  "Скипетр и держава": "Zepter und Reichsapfel",
  "Знаки государственной власти и единства страны.": "Zeichen der Staatsgewalt und der Einheit des Landes.",
  "Всадник": "Der Reiter",
  "На груди орла — древний московский герб. Его связывают с Георгием Победоносцем.":
    "Auf der Brust des Adlers steht das alte Moskauer Wappen. Man bringt es mit dem heiligen Georg in Verbindung.",
  "Красный щит": "Der rote Schild",
  "Цвет, на котором орёл изображался ещё в допетровской геральдике.":
    "Die Farbe, auf der der Adler schon in der Heraldik vor Peter I. abgebildet wurde.",
  "В каком порядке идут полосы государственного флага сверху вниз?":
    "In welcher Reihenfolge liegen die Streifen der Staatsflagge von oben nach unten?",
  "Красная, синяя, белая": "Rot, Blau, Weiß",
  "Белая, синяя, красная": "Weiß, Blau, Rot",
  "Синяя, белая, красная": "Blau, Weiß, Rot",
  "Белая, красная, синяя": "Weiß, Rot, Blau",
  "Белая сверху, синяя посередине, красная снизу. Порядок закреплён федеральным конституционным законом, и флаг с переставленными полосами — просто неправильный.":
    "Weiß oben, Blau in der Mitte, Rot unten. Die Reihenfolge ist durch ein föderales Verfassungsgesetz festgelegt, und eine Flagge mit vertauschten Streifen ist schlicht falsch.",
  "Гимн": "Die Hymne",
  "Музыку написал **Александр Александров**: та же мелодия звучала как гимн Советского Союза с **1944 года**. Слова — **Сергея Михалкова**, и он писал их трижды: в 1943, в 1977 и в **2000 году**, когда мелодия вернулась уже к новому государству. Действующий текст начинается словами «Россия — священная наша держава».":
    "Die Musik schrieb **Alexander Alexandrow**: dieselbe Melodie erklang ab **1944** als Hymne der Sowjetunion. Der Text stammt von **Sergei Michalkow**, und er schrieb ihn dreimal — 1943, 1977 und **2000**, als die Melodie schon zu einem neuen Staat zurückkehrte. Der geltende Text beginnt mit den Worten «Russland — unser heiliges Reich».",
  "Между 1990 и 2000 годом гимном была «Патриотическая песня» Глинки — без слов. Текста к ней так и не утвердили, и это одна из причин, по которым вернулись к прежней мелодии.":
    "Zwischen 1990 und 2000 war das «Patriotische Lied» von Glinka die Hymne — ohne Text. Ein Text dazu wurde nie beschlossen, und das ist einer der Gründe, aus denen man zur früheren Melodie zurückkehrte.",
  "Кто написал музыку государственного гимна?": "Wer schrieb die Musik der Staatshymne?",
  "Михаил Глинка": "Michail Glinka",
  "Александр Александров": "Alexander Alexandrow",
  "Сергей Михалков": "Sergei Michalkow",
  "Пётр Чайковский": "Pjotr Tschaikowski",
  "Музыка Александрова, слова Михалкова. Мелодия Глинки была гимном с 1990 по 2000 год, но так и осталась без слов.":
    "Die Musik ist von Alexandrow, der Text von Michalkow. Glinkas Melodie war von 1990 bis 2000 die Hymne, blieb aber ohne Text.",
  "Столица, язык и главная дата": "Hauptstadt, Sprache und das wichtigste Datum",
  "Столица — **Москва**; это записано в **статье 70** Конституции. Государственный язык на всей территории — **русский** (статья 68), при этом республики вправе устанавливать свои государственные языки.":
    "Die Hauptstadt ist **Moskau**; das steht in **Artikel 70** der Verfassung. Staatssprache im ganzen Land ist **Russisch** (Artikel 68), wobei die Republiken eigene Staatssprachen festlegen dürfen.",
  "**12 июня** — **День России**. В этот день в **1990 году** была принята Декларация о государственном суверенитете РСФСР. Праздник несколько раз менял название: сначала он назывался Днём принятия декларации, потом Днём независимости, и лишь с 2002 года — Днём России.":
    "Der **12. Juni** ist der **Tag Russlands**. An diesem Tag wurde **1990** die Erklärung über die staatliche Souveränität der RSFSR angenommen. Der Feiertag hat mehrmals den Namen gewechselt: zuerst hieß er Tag der Annahme der Erklärung, dann Unabhängigkeitstag, und erst seit 2002 Tag Russlands.",
  "Что отмечают 12 июня?": "Was wird am 12. Juni begangen?",
  "День Конституции": "Der Tag der Verfassung",
  "День России": "Der Tag Russlands",
  "День народного единства": "Der Tag der Einheit des Volkes",
  "День Государственного флага": "Der Tag der Staatsflagge",
  "12 июня — День России, в память о Декларации о государственном суверенитете 1990 года. День флага — 22 августа, а День народного единства — 4 ноября.":
    "Der 12. Juni ist der Tag Russlands, zur Erinnerung an die Souveränitätserklärung von 1990. Der Tag der Flagge ist der 22. August, der Tag der Einheit des Volkes der 4. November.",
  "**День России** и **День народного единства** — разные праздники и разные месяцы: 12 июня и 4 ноября. Первый связан с 1990 годом, второй — с событиями 1612 года.":
    "**Der Tag Russlands** und **der Tag der Einheit des Volkes** sind verschiedene Feiertage in verschiedenen Monaten: 12. Juni und 4. November. Der erste hängt mit 1990 zusammen, der zweite mit den Ereignissen von 1612.",
  // ru-konstitutsiya
  "Почему это важно: почти всё, о чём пойдёт речь дальше — президент, парламент, суды, субъекты федерации, языки — записано в одном документе 1993 года. Кто знает его в общих чертах, у того уже есть карта всего курса.":
    "Warum das wichtig ist: fast alles, wovon weiter die Rede sein wird — Präsident, Parlament, Gerichte, Subjekte der Föderation, Sprachen —, steht in einem einzigen Dokument von 1993. Wer es in Umrissen kennt, hat schon die Karte des ganzen Kurses.",
  "Как она появилась": "Wie sie entstand",
  "Конституция принята **всенародным голосованием 12 декабря 1993 года** и вступила в силу со дня официального опубликования — **25 декабря 1993 года**. Она пришла на смену Конституции РСФСР 1978 года, которую к тому времени правили десятки раз.":
    "Die Verfassung wurde in einer **Volksabstimmung am 12. Dezember 1993** angenommen und trat am Tag der amtlichen Veröffentlichung in Kraft — am **25. Dezember 1993**. Sie löste die Verfassung der RSFSR von 1978 ab, die bis dahin dutzendfach geändert worden war.",
  "**12 декабря** — День Конституции. С 2005 года это не выходной день, но дата осталась памятной.":
    "Der **12. Dezember** ist der Tag der Verfassung. Seit 2005 ist er kein arbeitsfreier Tag mehr, das Datum blieb aber ein Gedenktag.",
  "Как она устроена": "Wie sie aufgebaut ist",
  "Текст состоит из **преамбулы** и **двух разделов**. Первый раздел — это **девять глав** и **137 статей**; второй, короткий, содержит заключительные и переходные положения.":
    "Der Text besteht aus einer **Präambel** und **zwei Abschnitten**. Der erste Abschnitt umfasst **neun Kapitel** und **137 Artikel**; der zweite, kurze, enthält die Schluss- und Übergangsbestimmungen.",
  "Глава 1 · Основы конституционного строя": "Kapitel 1 · Grundlagen der Verfassungsordnung",
  "Статьи 1–16. Что такое Россия, где источник власти, разделение властей, светское государство.":
    "Artikel 1–16. Was Russland ist, wo die Quelle der Macht liegt, Gewaltenteilung, weltlicher Staat.",
  "Глава 2 · Права и свободы человека": "Kapitel 2 · Rechte und Freiheiten des Menschen",
  "Статьи 17–64. Самая длинная глава: личные, политические, социальные права и обязанности.":
    "Artikel 17–64. Das längste Kapitel: persönliche, politische und soziale Rechte sowie Pflichten.",
  "Глава 3 · Федеративное устройство": "Kapitel 3 · Föderaler Aufbau",
  "Статьи 65–79. Перечень субъектов, разграничение полномочий, языки.":
    "Artikel 65–79. Das Verzeichnis der Subjekte, die Abgrenzung der Zuständigkeiten, die Sprachen.",
  "Главы 4–8": "Kapitel 4–8",
  "Президент, Федеральное Собрание, Правительство, судебная власть и прокуратура, местное самоуправление.":
    "Präsident, Föderationsversammlung, Regierung, rechtsprechende Gewalt und Staatsanwaltschaft, kommunale Selbstverwaltung.",
  "Когда была принята Конституция Российской Федерации?":
    "Wann wurde die Verfassung der Russischen Föderation angenommen?",
  "12 июня 1990 года": "Am 12. Juni 1990",
  "12 декабря 1993 года": "Am 12. Dezember 1993",
  "25 декабря 1993 года": "Am 25. Dezember 1993",
  "4 ноября 1993 года": "Am 4. November 1993",
  "Принята всенародным голосованием 12 декабря, вступила в силу 25 декабря — со дня опубликования. День Конституции отмечают по первой из этих дат.":
    "Angenommen in der Volksabstimmung am 12. Dezember, in Kraft getreten am 25. Dezember — mit dem Tag der Veröffentlichung. Der Tag der Verfassung richtet sich nach dem ersten dieser beiden Daten.",
  "Первые статьи": "Die ersten Artikel",
  "**Статья 1** определяет Россию как **демократическое федеративное правовое государство с республиканской формой правления**. Четыре характеристики в одном предложении, и каждая имеет продолжение в отдельной главе.":
    "**Artikel 1** bestimmt Russland als **demokratischen föderalen Rechtsstaat mit republikanischer Regierungsform**. Vier Merkmale in einem Satz, und jedes wird in einem eigenen Kapitel fortgeführt.",
  "**Статья 2** называет человека, его права и свободы **высшей ценностью**, а признание и защиту этих прав — обязанностью государства. **Статья 3** говорит, что носителем суверенитета и **единственным источником власти** является **многонациональный народ** Российской Федерации.":
    "**Artikel 2** nennt den Menschen, seine Rechte und Freiheiten den **höchsten Wert** und die Anerkennung und den Schutz dieser Rechte eine Pflicht des Staates. **Artikel 3** sagt, dass Träger der Souveränität und **einzige Quelle der Macht** das **multinationale Volk** der Russischen Föderation ist.",
  "**Статья 10** закрепляет разделение властей на законодательную, исполнительную и судебную. **Статья 13** устанавливает идеологическое многообразие: никакая идеология не может быть государственной или обязательной. **Статья 14** объявляет Россию **светским государством**: религиозные объединения отделены от государства и равны перед законом.":
    "**Artikel 10** verankert die Teilung der Gewalten in gesetzgebende, vollziehende und rechtsprechende. **Artikel 13** legt die weltanschauliche Vielfalt fest: keine Ideologie darf staatlich oder verbindlich sein. **Artikel 14** erklärt Russland zum **weltlichen Staat**: religiöse Vereinigungen sind vom Staat getrennt und vor dem Gesetz gleich.",
  "Сколько статей содержит первый раздел Конституции?":
    "Wie viele Artikel enthält der erste Abschnitt der Verfassung?",
  "Шестьдесят четыре": "Vierundsechzig",
  "Сто тридцать семь": "Einhundertsiebenunddreißig",
  "Сто шестьдесят девять": "Einhundertneunundsechzig",
  "Двести": "Zweihundert",
  "Сто тридцать семь статей в девяти главах. Статья 64 завершает главу о правах и свободах, но не первый раздел целиком.":
    "Einhundertsiebenunddreißig Artikel in neun Kapiteln. Artikel 64 schließt das Kapitel über Rechte und Freiheiten ab, nicht den ganzen ersten Abschnitt.",
  "Что нельзя изменить обычным путём": "Was sich nicht auf gewöhnlichem Weg ändern lässt",
  "Конституция разделяет **поправки** и **пересмотр**. Главы **3–8** изменяются поправками, которые принимаются как федеральный конституционный закон и должны быть одобрены не менее чем **двумя третями субъектов** Федерации.":
    "Die Verfassung unterscheidet **Änderungen** und **Neufassung**. Die Kapitel **3–8** werden durch Änderungen bearbeitet, die als föderales Verfassungsgesetz beschlossen werden und von mindestens **zwei Dritteln der Subjekte** der Föderation gebilligt werden müssen.",
  "А вот главы **1, 2 и 9** — основы строя, права и свободы, и сам порядок изменения — **не могут быть пересмотрены Федеральным Собранием**. Для их изменения статья 135 требует созвать **Конституционное Собрание**, которое либо подтвердит неизменность Конституции, либо разработает новую. Такого собрания никогда не созывали, и закона о нём до сих пор нет.":
    "Die Kapitel **1, 2 und 9** dagegen — Grundlagen der Ordnung, Rechte und Freiheiten, und das Änderungsverfahren selbst — **kann die Föderationsversammlung nicht neu fassen**. Für ihre Änderung verlangt Artikel 135, eine **Verfassunggebende Versammlung** einzuberufen, die entweder die Unveränderlichkeit der Verfassung bestätigt oder eine neue ausarbeitet. Einberufen wurde eine solche Versammlung nie, und ein Gesetz über sie gibt es bis heute nicht.",
  "Крупные изменения вносились в **2008** году — о сроках полномочий, в **2014** — об объединении высших судов, и в **2020** — большим пакетом поправок к главам с третьей по восьмую.":
    "Große Änderungen gab es **2008** — zu den Amtszeiten, **2014** — zur Zusammenlegung der obersten Gerichte, und **2020** — als großes Paket von Änderungen an den Kapiteln drei bis acht.",
  "Какие главы Конституции не может пересмотреть Федеральное Собрание?":
    "Welche Kapitel der Verfassung kann die Föderationsversammlung nicht neu fassen?",
  "Первая, вторая и девятая": "Das erste, das zweite und das neunte",
  "Только первая": "Nur das erste",
  "С третьей по восьмую": "Das dritte bis achte",
  "Никакие: Конституция неизменна": "Keine: die Verfassung ist unveränderlich",
  "Главы 1, 2 и 9 — основы конституционного строя, права и свободы и сам порядок изменения. Для них нужно Конституционное Собрание, которое ни разу не созывалось.":
    "Die Kapitel 1, 2 und 9 — Grundlagen der Verfassungsordnung, Rechte und Freiheiten und das Änderungsverfahren selbst. Dafür braucht es eine Verfassunggebende Versammlung, die noch nie einberufen wurde.",
  "**Поправка** и **пересмотр** — не одно и то же. Поправками меняют главы с третьей по восьмую; пересмотр касается глав 1, 2 и 9 и требует совсем другой процедуры.":
    "**Änderung** und **Neufassung** sind nicht dasselbe. Mit Änderungen werden die Kapitel drei bis acht bearbeitet; die Neufassung betrifft die Kapitel 1, 2 und 9 und verlangt ein ganz anderes Verfahren.",
  // ru-prava
  "Почему это важно: вторая глава — самая длинная в Конституции, и она написана о человеке, а не о гражданине. Большинство её статей начинается со слов «каждый» или «никто», и это различие имеет смысл.":
    "Warum das wichtig ist: das zweite Kapitel ist das längste der Verfassung, und es ist über den Menschen geschrieben, nicht über den Staatsbürger. Die meisten seiner Artikel beginnen mit «jeder» oder «niemand», und dieser Unterschied hat einen Sinn.",
  "Каждый и гражданин": "Jeder und der Staatsbürger",
  "**Статья 17** говорит, что основные права и свободы принадлежат каждому **от рождения** и неотчуждаемы. **Статья 19** закрепляет равенство перед законом и судом независимо от пола, расы, национальности, языка, происхождения, имущественного и должностного положения, места жительства, отношения к религии и убеждений.":
    "**Artikel 17** sagt, dass die Grundrechte und Grundfreiheiten jedem **von Geburt an** zustehen und unveräußerlich sind. **Artikel 19** verankert die Gleichheit vor Gesetz und Gericht unabhängig von Geschlecht, Rasse, Nationalität, Sprache, Herkunft, Vermögens- und Amtsstellung, Wohnort, Verhältnis zur Religion und Überzeugung.",
  "Читая главу, стоит обращать внимание на первое слово статьи. Там, где написано **«каждый»**, право принадлежит и иностранцу; там, где **«граждане Российской Федерации»**, — только гражданам. Так устроены, например, избирательные права и право на доступ к государственной службе.":
    "Beim Lesen des Kapitels lohnt der Blick auf das erste Wort eines Artikels. Wo **«jeder»** steht, gilt das Recht auch für Ausländer; wo **«Bürger der Russischen Föderation»** steht, nur für Staatsbürger. So sind zum Beispiel das Wahlrecht und der Zugang zum Staatsdienst gebaut.",
  "Личные права": "Persönliche Rechte",
  "**Статья 20** закрепляет право на жизнь. Смертная казнь в тексте упомянута как исключительная мера, но фактически не применяется: с середины девяностых действует **мораторий**, подтверждённый решениями Конституционного Суда.":
    "**Artikel 20** verankert das Recht auf Leben. Die Todesstrafe ist im Text als außerordentliche Maßnahme erwähnt, wird tatsächlich aber nicht vollstreckt: seit Mitte der neunziger Jahre gilt ein **Moratorium**, das durch Entscheidungen des Verfassungsgerichts bestätigt wurde.",
  "**Статья 22** гарантирует свободу и личную неприкосновенность: **до судебного решения** человек не может быть задержан на срок **более 48 часов**. **Статья 23** защищает частную жизнь и тайну переписки, **статья 25** объявляет **неприкосновенным жилище**.":
    "**Artikel 22** garantiert Freiheit und persönliche Unversehrtheit: **vor einer gerichtlichen Entscheidung** darf niemand länger als **48 Stunden** festgehalten werden. **Artikel 23** schützt das Privatleben und das Briefgeheimnis, **Artikel 25** erklärt die **Wohnung für unverletzlich**.",
  "На какой срок можно задержать человека до судебного решения?":
    "Wie lange darf jemand vor einer gerichtlichen Entscheidung festgehalten werden?",
  "На 24 часа": "24 Stunden",
  "На 48 часов": "48 Stunden",
  "На 72 часа": "72 Stunden",
  "Срок не установлен": "Eine Frist ist nicht festgelegt",
  "Статья 22 устанавливает предел в 48 часов. По истечении этого срока человек должен быть либо освобождён, либо его задержание должен продлить суд.":
    "Artikel 22 setzt die Grenze bei 48 Stunden. Danach muss die Person entweder freigelassen werden, oder ein Gericht muss die Festhaltung verlängern.",
  "Свобода мысли, слова и веры": "Freiheit des Denkens, des Wortes und des Glaubens",
  "**Статья 28** гарантирует свободу совести и вероисповедания, включая право не исповедовать никакой религии. **Статья 29** закрепляет свободу мысли и слова, право свободно искать, получать и распространять информацию — и содержит короткую и прямую формулу: **цензура запрещается**.":
    "**Artikel 28** garantiert die Gewissens- und Religionsfreiheit einschließlich des Rechts, sich zu keiner Religion zu bekennen. **Artikel 29** verankert die Gedanken- und Meinungsfreiheit sowie das Recht, Informationen frei zu suchen, zu erhalten und zu verbreiten — und enthält eine kurze, gerade Formel: **Zensur ist verboten**.",
  "**Статья 26** даёт каждому право **определять и указывать свою национальность** — и добавляет, что никто не может быть принуждён к её указанию. Там же — право пользоваться родным языком и свободно выбирать язык общения и творчества. Для страны, где живут сотни народов, это не формальность.":
    "**Artikel 26** gibt jedem das Recht, **seine Nationalität selbst zu bestimmen und anzugeben** — und fügt hinzu, dass niemand zu dieser Angabe gezwungen werden darf. Dort steht auch das Recht, die Muttersprache zu gebrauchen und die Sprache des Umgangs und des Schaffens frei zu wählen. Für ein Land, in dem Hunderte Völker leben, ist das keine Formalie.",
  "Что прямо запрещает статья 29 Конституции?": "Was verbietet Artikel 29 der Verfassung ausdrücklich?",
  "Иностранные средства массовой информации": "Ausländische Massenmedien",
  "Цензуру": "Die Zensur",
  "Публичные собрания": "Öffentliche Versammlungen",
  "Анонимные публикации": "Anonyme Veröffentlichungen",
  "Формулировка короткая: цензура запрещается. Та же статья закрепляет свободу мысли и слова и право искать, получать и распространять информацию.":
    "Die Formulierung ist kurz: Zensur ist verboten. Derselbe Artikel verankert die Gedanken- und Meinungsfreiheit und das Recht, Informationen zu suchen, zu erhalten und zu verbreiten.",
  "Социальные права": "Soziale Rechte",
  "Труд · статья 37": "Arbeit · Artikel 37",
  "Труд свободен, принудительный труд запрещён. Отсюда же право на отдых и на оплачиваемый отпуск.":
    "Die Arbeit ist frei, Zwangsarbeit ist verboten. Daher rührt auch das Recht auf Erholung und auf bezahlten Urlaub.",
  "Жилище · статья 40": "Wohnung · Artikel 40",
  // ru-prava
  "Никто не может быть произвольно лишён жилища; малоимущим оно предоставляется бесплатно или за доступную плату.":
    "Niemand darf willkürlich seiner Wohnung beraubt werden; Bedürftigen wird sie unentgeltlich oder gegen eine erschwingliche Miete zur Verfügung gestellt.",
  "Здоровье · статья 41": "Gesundheit · Artikel 41",
  "Медицинская помощь в государственных и муниципальных учреждениях оказывается гражданам бесплатно.":
    "In staatlichen und kommunalen Einrichtungen wird medizinische Hilfe für Bürger unentgeltlich geleistet.",
  "Образование · статья 43": "Bildung · Artikel 43",
  "Дошкольное, основное общее и среднее профессиональное — общедоступны и бесплатны.":
    "Vorschule, allgemeine Grundbildung und berufliche Mittelstufe sind allgemein zugänglich und kostenlos.",
  "Гарантии в суде": "Garantien vor Gericht",
  "**Статья 48** даёт право на квалифицированную юридическую помощь, в предусмотренных законом случаях — бесплатную. **Статья 49** закрепляет **презумпцию невиновности**: обвиняемый считается невиновным, пока вина не доказана вступившим в законную силу приговором суда, и **неустранимые сомнения толкуются в его пользу**.":
    "**Artikel 48** gibt das Recht auf qualifizierten Rechtsbeistand, in den gesetzlich vorgesehenen Fällen unentgeltlich. **Artikel 49** verankert die **Unschuldsvermutung**: der Angeklagte gilt als unschuldig, solange die Schuld nicht durch ein rechtskräftiges Urteil bewiesen ist, und **nicht ausräumbare Zweifel werden zu seinen Gunsten ausgelegt**.",
  "**Статья 51** содержит правило, которое знают даже те, кто никогда не открывал Конституцию: **никто не обязан свидетельствовать против себя самого, своего супруга и близких родственников**.":
    "**Artikel 51** enthält eine Regel, die selbst die kennen, die nie eine Verfassung aufgeschlagen haben: **niemand ist verpflichtet, gegen sich selbst, den Ehepartner oder nahe Angehörige auszusagen**.",
  "Что закрепляет статья 49 Конституции?": "Was verankert Artikel 49 der Verfassung?",
  "Право на жилище": "Das Recht auf Wohnung",
  "Презумпцию невиновности": "Die Unschuldsvermutung",
  "Свободу передвижения": "Die Freizügigkeit",
  "Право на образование": "Das Recht auf Bildung",
  "Обвиняемый считается невиновным, пока его вина не доказана приговором суда, и неустранимые сомнения толкуются в его пользу. Статья 51 добавляет право не свидетельствовать против себя и близких.":
    "Der Angeklagte gilt als unschuldig, solange seine Schuld nicht durch ein Gerichtsurteil bewiesen ist, und nicht ausräumbare Zweifel werden zu seinen Gunsten ausgelegt. Artikel 51 fügt das Recht hinzu, nicht gegen sich und nahe Angehörige auszusagen.",
  "Права, записанные словом **«каждый»**, принадлежат и иностранным гражданам. Только там, где статья говорит **«граждане Российской Федерации»**, речь идёт исключительно о гражданах — прежде всего это избирательные права.":
    "Rechte, die mit dem Wort **«jeder»** geschrieben sind, stehen auch ausländischen Staatsangehörigen zu. Nur wo ein Artikel **«Bürger der Russischen Föderation»** sagt, geht es ausschließlich um Staatsbürger — vor allem beim Wahlrecht.",
  // ru-obyazannosti
  "Почему это важно: Конституция не только раздаёт права. В той же второй главе записаны обязанности, а гражданство — та дверь, через которую человек входит в полный объём и тех и других.":
    "Warum das wichtig ist: die Verfassung verteilt nicht nur Rechte. Im selben zweiten Kapitel stehen auch Pflichten, und die Staatsangehörigkeit ist die Tür, durch die ein Mensch in den vollen Umfang von beidem eintritt.",
  "Обязанности": "Die Pflichten",
  "Их немного, и они разбросаны по главе 2. **Статья 57**: каждый обязан платить законно установленные **налоги и сборы**, причём законы, ухудшающие положение налогоплательщиков, обратной силы не имеют. **Статья 58**: каждый обязан **сохранять природу** и бережно относиться к природным богатствам.":
    "Es sind wenige, und sie liegen verstreut in Kapitel 2. **Artikel 57**: jeder ist verpflichtet, die gesetzlich festgelegten **Steuern und Abgaben** zu zahlen, wobei Gesetze, die die Lage der Steuerpflichtigen verschlechtern, keine Rückwirkung haben. **Artikel 58**: jeder ist verpflichtet, **die Natur zu bewahren** und mit den Naturschätzen sorgsam umzugehen.",
  "**Статья 59** называет защиту Отечества **долгом и обязанностью гражданина**. Военная служба несётся по федеральному закону; если убеждениям или вероисповеданию человека несение военной службы противоречит, он имеет право на **альтернативную гражданскую службу**.":
    "**Artikel 59** nennt die Verteidigung des Vaterlandes **Pflicht und Schuldigkeit des Bürgers**. Der Wehrdienst richtet sich nach einem föderalen Gesetz; widerspricht der Wehrdienst den Überzeugungen oder dem Glauben eines Menschen, hat er das Recht auf einen **zivilen Ersatzdienst**.",
  "Налоги · статья 57": "Steuern · Artikel 57",
  "Обязанность, которая исполняется каждый год и касается всех.":
    "Eine Pflicht, die jedes Jahr erfüllt wird und alle betrifft.",
  "Природа · статья 58": "Natur · Artikel 58",
  "Сохранять природу и бережно относиться к природным богатствам.":
    "Die Natur bewahren und mit den Naturschätzen sorgsam umgehen.",
  "Защита Отечества · статья 59": "Verteidigung des Vaterlandes · Artikel 59",
  "Долг и обязанность гражданина, с правом на альтернативную гражданскую службу.":
    "Pflicht und Schuldigkeit des Bürgers, mit dem Recht auf einen zivilen Ersatzdienst.",
  "Забота о семье · статья 38": "Sorge für die Familie · Artikel 38",
  "Забота о детях — обязанность родителей, а забота о нетрудоспособных родителях — обязанность взрослых детей.":
    "Die Sorge für die Kinder ist Pflicht der Eltern, die Sorge für erwerbsunfähige Eltern Pflicht der erwachsenen Kinder.",
  "К этому добавляются обязанность получить **основное общее образование** (статья 43, причём обеспечивают её родители) и обязанность **заботиться о памятниках истории и культуры** (статья 44).":
    "Dazu kommen die Pflicht, die **allgemeine Grundbildung** zu erwerben (Artikel 43, und dafür sorgen die Eltern), und die Pflicht, **die Denkmäler der Geschichte und Kultur zu pflegen** (Artikel 44).",
  "Какая статья Конституции обязывает платить налоги и сборы?":
    "Welcher Artikel der Verfassung verpflichtet zur Zahlung von Steuern und Abgaben?",
  "Статья 43": "Artikel 43",
  "Статья 57": "Artikel 57",
  "Статья 58": "Artikel 58",
  "Статья 59": "Artikel 59",
  "Статья 57. Статья 58 — о сохранении природы, статья 59 — о защите Отечества, статья 43 — об образовании: четыре обязанности, которые легко перепутать.":
    "Artikel 57. Artikel 58 handelt vom Schutz der Natur, Artikel 59 von der Verteidigung des Vaterlandes, Artikel 43 von der Bildung: vier Pflichten, die leicht zu verwechseln sind.",
  "Гражданство": "Die Staatsangehörigkeit",
  "**Статья 6** говорит, что гражданство России **едино и равно независимо от оснований приобретения**: тот, кто получил его по рождению, и тот, кто был принят в гражданство, имеют одни и те же права. Гражданина нельзя лишить гражданства или права изменить его.":
    "**Artikel 6** sagt, dass die russische Staatsangehörigkeit **einheitlich und gleich ist, unabhängig davon, wie sie erworben wurde**: wer sie durch Geburt hat, und wer eingebürgert wurde, haben dieselben Rechte. Einem Bürger darf die Staatsangehörigkeit nicht entzogen werden, ebenso wenig das Recht, sie zu wechseln.",
  "**Статья 62** допускает **двойное гражданство** — гражданин России может иметь гражданство иностранного государства, и это само по себе не умаляет его прав. Та же статья распространяет на иностранцев и лиц без гражданства права и обязанности граждан, кроме случаев, установленных законом.":
    "**Artikel 62** lässt die **doppelte Staatsangehörigkeit** zu — ein russischer Bürger darf die Staatsangehörigkeit eines anderen Staates besitzen, und das allein schmälert seine Rechte nicht. Derselbe Artikel erstreckt die Rechte und Pflichten der Bürger auf Ausländer und Staatenlose, außer in den gesetzlich bestimmten Fällen.",
  "Как принимают в гражданство": "Wie eingebürgert wird",
  "Порядок установлен **федеральным законом о гражданстве**, принятым в **2023 году** и заменившим закон 2002 года. Гражданство приобретается **по рождению**, **в результате приёма** и по иным основаниям.":
    "Das Verfahren regelt das **föderale Gesetz über die Staatsangehörigkeit**, beschlossen **2023** als Nachfolger des Gesetzes von 2002. Erworben wird sie **durch Geburt**, **durch Aufnahme** und aus weiteren Gründen.",
  "В **общем порядке** заявитель должен постоянно проживать в России **пять лет** со дня получения вида на жительство. Для ряда категорий действует **упрощённый порядок** — в частности для тех, у кого близкие родственники граждане России, для выпускников российских вузов и для носителей русского языка.":
    "Im **allgemeinen Verfahren** muss die antragstellende Person **fünf Jahre** ununterbrochen in Russland leben, gerechnet ab der Aufenthaltserlaubnis. Für eine Reihe von Gruppen gilt ein **vereinfachtes Verfahren** — unter anderem für Menschen mit nahen Angehörigen mit russischer Staatsangehörigkeit, für Absolventen russischer Hochschulen und für Muttersprachler des Russischen.",
  "Помимо срока требуются **владение русским языком**, **знание истории России и основ законодательства**, законный источник средств к существованию и соблюдение российского законодательства. Знание подтверждается **экзаменом** — тем самым, чью форму берёт тренировочный тест этого курса. С 2017 года принятые в гражданство приносят **присягу**.":
    "Neben der Frist verlangt werden **Russischkenntnisse**, **Kenntnis der Geschichte Russlands und der Grundlagen der Gesetzgebung**, eine rechtmäßige Einkommensquelle und die Einhaltung der russischen Gesetze. Die Kenntnisse werden durch eine **Prüfung** nachgewiesen — eben jene, deren Form der Übungstest dieses Kurses nachbildet. Seit 2017 legen Eingebürgerte einen **Eid** ab.",
  "Сколько лет нужно постоянно прожить в России, чтобы обратиться за гражданством в общем порядке?":
    "Wie viele Jahre muss man ununterbrochen in Russland leben, um im allgemeinen Verfahren die Staatsangehörigkeit zu beantragen?",
  "Три года": "Drei Jahre",
  "Пять лет": "Fünf Jahre",
  "Восемь лет": "Acht Jahre",
  "Десять лет": "Zehn Jahre",
  "Пять лет со дня получения вида на жительство. Для ряда категорий — близких родственников граждан, выпускников российских вузов, носителей языка — срок сокращается или снимается.":
    "Fünf Jahre ab der Aufenthaltserlaubnis. Für einige Gruppen — nahe Angehörige von Staatsbürgern, Absolventen russischer Hochschulen, Muttersprachler — verkürzt sich die Frist oder entfällt.",
  "Допускает ли Конституция двойное гражданство?":
    "Lässt die Verfassung die doppelte Staatsangehörigkeit zu?",
  "Нет, оно прямо запрещено": "Nein, sie ist ausdrücklich verboten",
  "Да, статья 62 его допускает": "Ja, Artikel 62 lässt sie zu",
  "Только для граждан государств СНГ": "Nur für Bürger der GUS-Staaten",
  "Только с разрешения суда": "Nur mit Erlaubnis eines Gerichts",
  "Статья 62 допускает гражданство иностранного государства, и само по себе оно не умаляет прав. Отдельные федеральные законы при этом ограничивают доступ к некоторым должностям.":
    "Artikel 62 lässt die Staatsangehörigkeit eines anderen Staates zu, und für sich genommen schmälert sie keine Rechte. Einzelne föderale Gesetze schränken dabei den Zugang zu bestimmten Ämtern ein.",
  "**Паспорт** гражданин получает в **14 лет**, а **совершеннолетие** наступает в **18**. С восемнадцати приходят право голоса и полная дееспособность.":
    "Den **Pass** bekommt ein Bürger mit **14 Jahren**, **volljährig** wird er mit **18**. Mit achtzehn kommen das Wahlrecht und die volle Geschäftsfähigkeit.",
  // ru-prazdniki
  "Почему это важно: календарь рассказывает о стране больше многих учебников. В России он начинается с самых длинных в Европе каникул и включает праздники сразу трёх эпох — имперской, советской и нынешней.":
    "Warum das wichtig ist: der Kalender erzählt über ein Land mehr als manches Lehrbuch. In Russland beginnt er mit den längsten Ferien Europas und enthält Feiertage aus gleich drei Epochen — der kaiserlichen, der sowjetischen und der heutigen.",
  "Нерабочие праздничные дни": "Arbeitsfreie Feiertage",
  "Их перечисляет **статья 112 Трудового кодекса**. Год открывается **новогодними каникулами**: нерабочими считаются **1, 2, 3, 4, 5, 6 и 8 января**, а **7 января** — **Рождество Христово**. Вместе получается непрерывная неделя с лишним — самые длинные государственные каникулы в Европе.":
    "Aufgezählt sind sie in **Artikel 112 des Arbeitsgesetzbuchs**. Das Jahr beginnt mit den **Neujahrsferien**: arbeitsfrei sind der **1., 2., 3., 4., 5., 6. und 8. Januar**, und der **7. Januar** ist **Weihnachten**. Zusammen ergibt das eine gute Woche am Stück — die längsten staatlichen Ferien Europas.",
  "23 февраля": "23. Februar",
  "День защитника Отечества. Ведёт начало от 1918 года; сегодня поздравляют не только военных, но и мужчин вообще.":
    "Tag des Verteidigers des Vaterlandes. Er geht auf das Jahr 1918 zurück; heute gratuliert man nicht nur Soldaten, sondern Männern überhaupt.",
  "8 марта": "8. März",
  "Международный женский день. Нерабочий с 1966 года и один из самых массово отмечаемых.":
    "Internationaler Frauentag. Seit 1966 arbeitsfrei und einer der am breitesten begangenen Tage.",
  "1 мая": "1. Mai",
  "Праздник Весны и Труда. До 1992 года — День международной солидарности трудящихся.":
    "Fest des Frühlings und der Arbeit. Bis 1992 Tag der internationalen Solidarität der Werktätigen.",
  "9 мая": "9. Mai",
  "День Победы. Парад на Красной площади, минута молчания, шествие «Бессмертного полка».":
    "Tag des Sieges. Parade auf dem Roten Platz, Schweigeminute, Zug des «Unsterblichen Regiments».",
  "Завершают список **12 июня** — День России — и **4 ноября**, **День народного единства**. Последний отмечается с **2005 года** и заменил в календаре 7 ноября, годовщину Октябрьской революции. Он посвящён событиям **1612 года**: освобождению Москвы ополчением Минина и Пожарского.":
    "Den Schluss bilden der **12. Juni** — der Tag Russlands — und der **4. November**, der **Tag der Einheit des Volkes**. Letzterer wird seit **2005** begangen und hat im Kalender den 7. November abgelöst, den Jahrestag der Oktoberrevolution. Er ist den Ereignissen von **1612** gewidmet: der Befreiung Moskaus durch das Aufgebot von Minin und Poscharski.",
  "Что отмечают 4 ноября?": "Was wird am 4. November begangen?",
  "Годовщину Октябрьской революции": "Der Jahrestag der Oktoberrevolution",
  "День Победы": "Der Tag des Sieges",
  "День народного единства, с 2005 года. Он посвящён событиям 1612 года и заменил в календаре 7 ноября — годовщину революции 1917 года.":
    "Der Tag der Einheit des Volkes, seit 2005. Er ist den Ereignissen von 1612 gewidmet und hat im Kalender den 7. November abgelöst — den Jahrestag der Revolution von 1917.",
  "Даты, которые не выходные": "Daten, die keine freien Tage sind",
  "Некоторые дни отмечают по всей стране, хотя они и рабочие. **12 апреля** — **День космонавтики**, в память о полёте Гагарина в 1961 году. **1 сентября** — **День знаний**: линейки во дворах школ, первый звонок и цветы учителям. **22 июня** — **День памяти и скорби**, годовщина начала войны в 1941 году, со «Свечой памяти» и приспущенными флагами.":
    "Manche Tage werden im ganzen Land begangen, obwohl gearbeitet wird. Der **12. April** ist der **Tag der Raumfahrt**, zur Erinnerung an Gagarins Flug von 1961. Der **1. September** ist der **Tag des Wissens**: Aufstellung auf dem Schulhof, die erste Glocke und Blumen für die Lehrer. Der **22. Juni** ist der **Tag des Gedenkens und der Trauer**, der Jahrestag des Kriegsbeginns 1941, mit der «Kerze der Erinnerung» und Flaggen auf halbmast.",
  "Два календаря": "Zwei Kalender",
  "В **1918 году** Россия перешла с **юлианского** календаря на **григорианский**, и разница между ними составляла тогда тринадцать дней. Отсюда две особенности, которые до сих пор удивляют приезжих.":
    "**1918** wechselte Russland vom **julianischen** zum **gregorianischen** Kalender, und der Unterschied betrug damals dreizehn Tage. Daher rühren zwei Eigenheiten, die Zugereiste bis heute überraschen.",
  "Первая: **Рождество** Русская православная церковь празднует **7 января**, потому что церковный календарь остался юлианским. Вторая: **14 января** отмечают **старый Новый год** — тот же Новый год по прежнему счёту. Праздник неофициальный, но живой.":
    "Die erste: **Weihnachten** feiert die Russische Orthodoxe Kirche am **7. Januar**, weil der Kirchenkalender julianisch geblieben ist. Die zweite: am **14. Januar** begeht man das **alte Neujahr** — dasselbe Neujahr nach der früheren Zählung. Der Tag ist inoffiziell, aber lebendig.",
  "Почему в России отмечают «старый Новый год» 14 января?":
    "Warum begeht man in Russland am 14. Januar das «alte Neujahr»?",
  "Так решили в 1990-е годы": "So wurde es in den neunziger Jahren beschlossen",
  "Из-за перехода с юлианского календаря на григорианский в 1918 году":
    "Wegen des Wechsels vom julianischen zum gregorianischen Kalender im Jahr 1918",
  "Это праздник северных народов": "Es ist ein Fest der nördlichen Völker",
  "Так отмечали при Петре I": "So wurde es unter Peter I. begangen",
  "Разница между календарями составляла тринадцать дней, и по прежнему счёту год начинался 14 января. По той же причине Рождество приходится на 7 января.":
    "Der Unterschied zwischen den Kalendern betrug dreizehn Tage, und nach der früheren Zählung begann das Jahr am 14. Januar. Aus demselben Grund fällt Weihnachten auf den 7. Januar.",
  "Народные и церковные": "Volkstümliche und kirchliche Feste",
  "Рядом с государственным календарём живёт народный. **Масленица** — неделя перед Великим постом, с блинами и сожжением чучела зимы. **Пасха** — главный православный праздник, с крашеными яйцами и куличами; её дата подвижна. Осенью отмечают **Покров**, а летом — **Ивана Купалу**.":
    "Neben dem staatlichen Kalender lebt ein volkstümlicher. **Masleniza** ist die Woche vor der großen Fastenzeit, mit Blini und dem Verbrennen einer Winterpuppe. **Ostern** ist das wichtigste orthodoxe Fest, mit gefärbten Eiern und Osterbrot; sein Datum ist beweglich. Im Herbst begeht man **Pokrow**, im Sommer die **Iwan-Kupala-Nacht**.",
  "Сколько дней длятся новогодние каникулы по Трудовому кодексу?":
    "Wie lange dauern die Neujahrsferien nach dem Arbeitsgesetzbuch?",
  "С 1 по 3 января": "Vom 1. bis zum 3. Januar",
  "С 1 по 8 января": "Vom 1. bis zum 8. Januar",
  "С 31 декабря по 2 января": "Vom 31. Dezember bis zum 2. Januar",
  "Только 1 января": "Nur der 1. Januar",
  "Нерабочими считаются 1–6 и 8 января, а 7 января — Рождество Христово. Вместе выходит непрерывная неделя с лишним, самые длинные государственные каникулы в Европе.":
    "Arbeitsfrei sind der 1. bis 6. und der 8. Januar, und der 7. Januar ist Weihnachten. Zusammen ergibt das eine gute Woche am Stück, die längsten staatlichen Ferien Europas.",
  "**12 декабря** — День Конституции, но с 2005 года это **рабочий день**. Памятная дата и нерабочий праздник — не одно и то же.":
    "Der **12. Dezember** ist der Tag der Verfassung, seit 2005 aber ein **Arbeitstag**. Ein Gedenktag und ein arbeitsfreier Feiertag sind nicht dasselbe.",
  // ru-prezident
  "Почему начинаем с президента: в российской конструкции он стоит не внутри одной из трёх ветвей власти, а над ними. Понять эту особенность — значит понять остальное устройство.":
    "Warum wir mit dem Präsidenten anfangen: im russischen Aufbau steht er nicht innerhalb einer der drei Gewalten, sondern über ihnen. Wer diese Besonderheit versteht, versteht auch den Rest der Ordnung.",
  "Что говорит глава 4": "Was Kapitel 4 sagt",
  "**Статья 80** называет Президента **главой государства** и **гарантом Конституции**, прав и свобод человека. Он принимает меры по охране суверенитета, обеспечивает согласованное функционирование органов власти и **определяет основные направления внутренней и внешней политики**.":
    "**Artikel 80** nennt den Präsidenten **Staatsoberhaupt** und **Garanten der Verfassung** sowie der Rechte und Freiheiten des Menschen. Er trifft Maßnahmen zum Schutz der Souveränität, sorgt für das abgestimmte Arbeiten der Staatsorgane und **bestimmt die Grundlinien der Innen- und Außenpolitik**.",
  "Обратите внимание на слово «согласованное». Президент не отнесён ни к законодательной, ни к исполнительной, ни к судебной власти: он стоит над разделением, установленным статьёй 10, и связывает ветви между собой.":
    "Achte auf das Wort «abgestimmt». Der Präsident ist weder der gesetzgebenden noch der vollziehenden noch der rechtsprechenden Gewalt zugeordnet: er steht über der Teilung, die Artikel 10 festlegt, und verbindet die Gewalten miteinander.",
  "Как избирается": "Wie er gewählt wird",
  "Президента избирают **граждане России** на основе всеобщего, равного и прямого избирательного права при тайном голосовании — сроком на **шесть лет**. До поправки **2008 года** срок составлял четыре года.":
    "Den Präsidenten wählen die **Bürger Russlands** in allgemeiner, gleicher und unmittelbarer Wahl bei geheimer Stimmabgabe — für **sechs Jahre**. Vor der Änderung von **2008** betrug die Amtszeit vier Jahre.",
  "Не моложе 35 лет": "Mindestens 35 Jahre alt",
  "Возрастной ценз, установленный статьёй 81.": "Die Altersgrenze, die Artikel 81 festlegt.",
  "25 лет проживания": "25 Jahre Aufenthalt",
  "Кандидат должен постоянно проживать в России не менее двадцати пяти лет — требование, добавленное поправками 2020 года.":
    "Wer kandidiert, muss mindestens fünfundzwanzig Jahre ständig in Russland gelebt haben — eine Anforderung, die mit den Änderungen von 2020 hinzukam.",
  "Без иностранного гражданства": "Ohne ausländische Staatsangehörigkeit",
  "И без вида на жительство в другом государстве, в том числе в прошлом. Тоже поправка 2020 года.":
    "Und ohne Aufenthaltstitel in einem anderen Staat, auch nicht in der Vergangenheit. Ebenfalls eine Änderung von 2020.",
  "Не более двух сроков": "Höchstens zwei Amtszeiten",
  "Прежде в тексте стояло «двух сроков подряд»; поправки 2020 года слово «подряд» убрали.":
    "Früher stand im Text «zwei Amtszeiten nacheinander»; die Änderungen von 2020 haben das Wort «nacheinander» gestrichen.",
  "На какой срок избирается Президент Российской Федерации?":
    "Für wie lange wird der Präsident der Russischen Föderation gewählt?",
  "На четыре года": "Für vier Jahre",
  "На пять лет": "Für fünf Jahre",
  "На шесть лет": "Für sechs Jahre",
  "На семь лет": "Für sieben Jahre",
  "Шесть лет — с поправки 2008 года; до неё срок был четырёхлетним. Государственная Дума избирается на пять лет, и эти две цифры часто путают.":
    "Sechs Jahre — seit der Änderung von 2008; davor waren es vier. Die Staatsduma wird für fünf Jahre gewählt, und diese beiden Zahlen werden oft verwechselt.",
  "Что он делает": "Was er tut",
  "Полномочия перечислены в **статье 83**. Президент **назначает Председателя Правительства** после утверждения его кандидатуры Государственной Думой, принимает решение об отставке Правительства, представляет кандидатуры судей высших судов и Генерального прокурора, формирует Совет Безопасности и Администрацию Президента.":
    "Die Befugnisse zählt **Artikel 83** auf. Der Präsident **ernennt den Vorsitzenden der Regierung**, nachdem die Staatsduma die Personalie bestätigt hat, entscheidet über den Rücktritt der Regierung, schlägt die Richter der obersten Gerichte und den Generalstaatsanwalt vor und bildet den Sicherheitsrat und die Präsidialverwaltung.",
  "В законодательном процессе он вносит законопроекты, **подписывает и обнародует** федеральные законы и обладает правом **вето**. Он **Верховный Главнокомандующий**, вводит военное и чрезвычайное положение с последующим утверждением Советом Федерации, решает вопросы гражданства, осуществляет **помилование** и награждает государственными наградами.":
    "Im Gesetzgebungsverfahren bringt er Gesetzentwürfe ein, **unterzeichnet und verkündet** föderale Gesetze und hat ein **Vetorecht**. Er ist **Oberbefehlshaber**, verhängt den Kriegs- und den Ausnahmezustand, die der Föderationsrat anschließend bestätigt, entscheidet über Fragen der Staatsangehörigkeit, übt das **Begnadigungsrecht** aus und verleiht staatliche Auszeichnungen.",
  "Вступая в должность, Президент приносит **присягу** народу — текст записан в **статье 82**. Официальная резиденция — **Московский Кремль**.":
    "Beim Amtsantritt leistet der Präsident dem Volk einen **Eid** — der Wortlaut steht in **Artikel 82**. Der Amtssitz ist der **Moskauer Kreml**.",
  "Каков минимальный возраст кандидата в Президенты?":
    "Wie alt muss ein Präsidentschaftskandidat mindestens sein?",
  "21 год": "21 Jahre",
  "30 лет": "30 Jahre",
  "35 лет": "35 Jahre",
  "40 лет": "40 Jahre",
  "Тридцать пять лет. Двадцать один — возраст для избрания в Государственную Думу, тридцать — для сенатора: три ценза, которые стоит держать порознь.":
    "Fünfunddreißig Jahre. Einundzwanzig ist das Alter für die Wahl in die Staatsduma, dreißig das für einen Senator: drei Grenzen, die man auseinanderhalten sollte.",
  "Если полномочия прекращаются досрочно": "Wenn das Amt vorzeitig endet",
  "**Статья 92** предусматривает три случая: отставка, стойкая неспособность по состоянию здоровья и отрешение от должности. Во всех трёх обязанности временно исполняет **Председатель Правительства**, и выборы должны состояться не позднее трёх месяцев.":
    "**Artikel 92** sieht drei Fälle vor: Rücktritt, dauerhafte gesundheitliche Amtsunfähigkeit und Amtsenthebung. In allen dreien übernimmt vorübergehend der **Vorsitzende der Regierung**, und die Wahl muss binnen drei Monaten stattfinden.",
  "**Отрешение от должности** описано в **статье 93** и устроено намеренно тяжело. Государственная Дума выдвигает обвинение **двумя третями** голосов, Верховный Суд даёт заключение о наличии признаков преступления, Конституционный Суд — о соблюдении порядка, и решение принимает **Совет Федерации двумя третями** в трёхмесячный срок. Ни разу эта процедура не была доведена до конца.":
    "Die **Amtsenthebung** beschreibt **Artikel 93** und ist bewusst schwer gebaut. Die Staatsduma erhebt die Anklage mit **zwei Dritteln** der Stimmen, das Oberste Gericht stellt fest, ob Merkmale einer Straftat vorliegen, das Verfassungsgericht prüft die Einhaltung des Verfahrens, und entschieden wird vom **Föderationsrat mit zwei Dritteln** binnen drei Monaten. Zu Ende geführt wurde dieses Verfahren noch nie.",
  "Кто временно исполняет обязанности Президента при досрочном прекращении полномочий?":
    "Wer nimmt die Aufgaben des Präsidenten wahr, wenn das Amt vorzeitig endet?",
  "Председатель Совета Федерации": "Der Vorsitzende des Föderationsrates",
  "Председатель Правительства": "Der Vorsitzende der Regierung",
  "Председатель Государственной Думы": "Der Vorsitzende der Staatsduma",
  "Председатель Конституционного Суда": "Der Vorsitzende des Verfassungsgerichts",
  "Председатель Правительства, по статье 92, и выборы должны состояться не позднее трёх месяцев. Исполняющий обязанности при этом не вправе распускать Думу и назначать референдум.":
    "Der Vorsitzende der Regierung, nach Artikel 92, und die Wahl muss binnen drei Monaten stattfinden. Wer die Aufgaben vertretungsweise wahrnimmt, darf dabei weder die Duma auflösen noch ein Referendum ansetzen.",
  "**Глава государства** и **глава правительства** в России — разные должности и разные здания: Президент в **Кремле**, Председатель Правительства в **Доме Правительства** на Краснопресненской набережной.":
    "**Staatsoberhaupt** und **Regierungschef** sind in Russland verschiedene Ämter in verschiedenen Häusern: der Präsident im **Kreml**, der Regierungsvorsitzende im **Haus der Regierung** an der Krasnopresnenskaja-Uferstraße.",
  // ru-parlament
  "Почему это важно: у российского парламента две палаты, и они устроены совсем по-разному — одну избирают напрямую, вторую собирают из представителей регионов. Кто это различает, тот перестаёт путать Думу с Советом Федерации.":
    "Warum das wichtig ist: das russische Parlament hat zwei Kammern, und sie sind ganz verschieden gebaut — die eine wird direkt gewählt, die andere aus Vertretern der Regionen zusammengesetzt. Wer das unterscheidet, verwechselt die Duma nicht mehr mit dem Föderationsrat.",
  "Две палаты": "Zwei Kammern",
  "**Статья 94** называет Федеральное Собрание **представительным и законодательным органом** Российской Федерации. Оно состоит из двух палат — **Совета Федерации** и **Государственной Думы**, — которые **заседают раздельно**. Совместно они собираются лишь в особых случаях: для посланий Президента и выступлений глав иностранных государств.":
    "**Artikel 94** nennt die Föderationsversammlung das **vertretende und gesetzgebende Organ** der Russischen Föderation. Sie besteht aus zwei Kammern — dem **Föderationsrat** und der **Staatsduma** —, die **getrennt tagen**. Gemeinsam kommen sie nur in besonderen Fällen zusammen: für die Botschaften des Präsidenten und für Reden ausländischer Staatsoberhäupter.",
  "Государственная Дума": "Die Staatsduma",
  "450 депутатов, избираются на пять лет. Нижняя палата, и именно в неё вносятся законопроекты. Здание — на Охотном Ряду.":
    "450 Abgeordnete, gewählt für fünf Jahre. Die untere Kammer, und genau dort werden Gesetzentwürfe eingebracht. Das Gebäude steht am Ochotny Rjad.",
  "Совет Федерации": "Der Föderationsrat",
  "Верхняя палата, палата регионов. Не избирается целиком и не имеет единого срока полномочий. Здание — на Большой Дмитровке.":
    "Die obere Kammer, die Kammer der Regionen. Sie wird nicht als Ganzes gewählt und hat keine einheitliche Amtsdauer. Das Gebäude steht in der Bolschaja Dmitrowka.",
  "Возраст, с которого можно быть избранным депутатом Государственной Думы.":
    "Das Alter, ab dem man in die Staatsduma gewählt werden kann.",
  "Возраст, с которого можно стать сенатором Российской Федерации.":
    "Das Alter, ab dem man Senator der Russischen Föderation werden kann.",
  "Сколько депутатов в Государственной Думе?": "Wie viele Abgeordnete hat die Staatsduma?",
  "Двести двадцать пять": "Zweihundertfünfundzwanzig",
  "Триста": "Dreihundert",
  "Четыреста пятьдесят": "Vierhundertfünfzig",
  "Шестьсот тридцать": "Sechshundertdreißig",
  "Четыреста пятьдесят. Двести двадцать пять — это половина, которая избирается по одномандатным округам, а другая половина проходит по партийным спискам.":
    "Vierhundertfünfzig. Zweihundertfünfundzwanzig ist die Hälfte, die in Einerwahlkreisen gewählt wird; die andere Hälfte kommt über Parteilisten herein.",
  "Как избирают Думу": "Wie die Duma gewählt wird",
  "Система **смешанная**. **225 депутатов** избираются по **одномандатным округам** — по одному от округа, кто набрал больше голосов. Другие **225** проходят по **партийным спискам** в едином федеральном округе, и здесь действует **пятипроцентный барьер**: партия, не набравшая пяти процентов, мест не получает.":
    "Das System ist **gemischt**. **225 Abgeordnete** werden in **Einerwahlkreisen** gewählt — einer je Wahlkreis, wer die meisten Stimmen hat. Die anderen **225** kommen über **Parteilisten** in einem einheitlichen föderalen Wahlkreis herein, und dort gilt eine **Fünfprozenthürde**: eine Partei unter fünf Prozent erhält keine Sitze.",
  "Срок полномочий Думы — **пять лет**; до поправки 2008 года он составлял четыре года. Президент вправе распустить Думу в двух случаях, прямо названных Конституцией: при трёхкратном отклонении кандидатуры Председателя Правительства и при повторном выражении недоверия Правительству.":
    "Die Amtszeit der Duma beträgt **fünf Jahre**; vor der Änderung von 2008 waren es vier. Der Präsident darf die Duma in zwei Fällen auflösen, die die Verfassung ausdrücklich nennt: wenn sie dreimal die Personalie für den Regierungsvorsitz ablehnt und wenn sie der Regierung ein zweites Mal das Misstrauen ausspricht.",
  "Как складывается Совет Федерации": "Wie sich der Föderationsrat zusammensetzt",
  "В него входят **по два представителя от каждого субъекта** Федерации — один от законодательного органа, другой от исполнительного. К ним добавляются сенаторы, **назначаемые Президентом** (не более тридцати, по поправке 2020 года), а бывшие президенты вправе стать **пожизненными сенаторами**.":
    "Ihm gehören **je zwei Vertreter jedes Subjekts** der Föderation an — einer vom gesetzgebenden Organ, einer von der Exekutive. Dazu kommen Senatoren, die der **Präsident ernennt** (höchstens dreißig, nach der Änderung von 2020), und ehemalige Präsidenten dürfen **Senatoren auf Lebenszeit** werden.",
  "Отсюда важное следствие: Совет Федерации **не избирается целиком и не распускается**. Его состав меняется постепенно, вслед за выборами в регионах, и палата работает непрерывно.":
    "Daraus folgt etwas Wichtiges: der Föderationsrat wird **weder als Ganzes gewählt noch aufgelöst**. Seine Zusammensetzung ändert sich allmählich, im Takt der Wahlen in den Regionen, und die Kammer arbeitet ohne Unterbrechung.",
  "Сколько представителей направляет в Совет Федерации каждый субъект?":
    "Wie viele Vertreter entsendet jedes Subjekt in den Föderationsrat?",
  "Одного": "Einen",
  "Двух": "Zwei",
  "Трёх": "Drei",
  "Число зависит от населения": "Die Zahl hängt von der Bevölkerung ab",
  "Двух: одного от законодательного органа субъекта, другого от исполнительного. Численность населения на это не влияет — в этом и смысл палаты регионов.":
    "Zwei: einen vom gesetzgebenden Organ des Subjekts, einen von der Exekutive. Die Einwohnerzahl spielt dabei keine Rolle — genau darin liegt der Sinn einer Kammer der Regionen.",
  "Как принимается закон": "Wie ein Gesetz zustande kommt",
  "Законопроект вносится **в Государственную Думу**. Дума принимает федеральный закон **большинством голосов**, а федеральный конституционный — **двумя третями**. В течение пяти дней закон передаётся в **Совет Федерации**, у которого есть **четырнадцать дней** на рассмотрение.":
    "Ein Gesetzentwurf wird **in der Staatsduma** eingebracht. Die Duma beschließt ein föderales Gesetz mit **Stimmenmehrheit**, ein föderales Verfassungsgesetz mit **zwei Dritteln**. Binnen fünf Tagen geht das Gesetz an den **Föderationsrat**, der **vierzehn Tage** Zeit zur Beratung hat.",
  "Если Совет Федерации отклоняет закон, палаты создают согласительную комиссию, либо Дума преодолевает отклонение **двумя третями** голосов. Затем закон уходит **Президенту**, который в течение четырнадцати дней подписывает и обнародует его или налагает **вето**. Вето преодолевается **двумя третями голосов обеих палат**.":
    "Lehnt der Föderationsrat das Gesetz ab, bilden die Kammern einen Vermittlungsausschuss, oder die Duma setzt sich mit **zwei Dritteln** der Stimmen über die Ablehnung hinweg. Danach geht das Gesetz an den **Präsidenten**, der es binnen vierzehn Tagen unterzeichnet und verkündet oder ein **Veto** einlegt. Ein Veto wird mit **zwei Dritteln der Stimmen beider Kammern** überstimmt.",
  "**Статья 106** перечисляет законы, которые Совет Федерации обязан рассмотреть непременно: бюджет, налоги и сборы, финансовое и таможенное регулирование, ратификация международных договоров, статус государственной границы, вопросы войны и мира.":
    "**Artikel 106** zählt die Gesetze auf, die der Föderationsrat zwingend beraten muss: Haushalt, Steuern und Abgaben, Finanz- und Zollrecht, Ratifizierung völkerrechtlicher Verträge, Status der Staatsgrenze, Fragen von Krieg und Frieden.",
  "Какой барьер должна преодолеть партия, чтобы получить места по спискам?":
    "Welche Hürde muss eine Partei nehmen, um Listenmandate zu erhalten?",
  "Три процента": "Drei Prozent",
  "Пять процентов": "Fünf Prozent",
  "Семь процентов": "Sieben Prozent",
  "Барьера нет": "Es gibt keine Hürde",
  "Пять процентов голосов в едином федеральном округе. Барьер менялся: в 2007 и 2011 годах он составлял семь процентов, а затем вернулся к пяти.":
    "Fünf Prozent der Stimmen im einheitlichen föderalen Wahlkreis. Die Hürde hat sich geändert: 2007 und 2011 lag sie bei sieben Prozent und kehrte danach auf fünf zurück.",
  "Законопроект вносится **только в Государственную Думу**, никогда напрямую в Совет Федерации. Верхняя палата вступает в дело после того, как закон уже принят нижней.":
    "Ein Gesetzentwurf wird **nur in der Staatsduma** eingebracht, nie unmittelbar im Föderationsrat. Die obere Kammer kommt erst ins Spiel, wenn die untere das Gesetz bereits beschlossen hat.",
  // ru-pravitelstvo
  "Почему это важно: Правительство отвечает за то, что видно каждый день — бюджет, пенсии, дороги, школы. И оно единственный орган, который зависит сразу от двух: и от Президента, и от Думы.":
    "Warum das wichtig ist: die Regierung verantwortet das, was man jeden Tag sieht — Haushalt, Renten, Straßen, Schulen. Und sie ist das einzige Organ, das gleich von zweien abhängt: vom Präsidenten und von der Duma.",
  "Из кого состоит": "Woraus sie besteht",
  "**Статья 110** определяет состав: **Председатель Правительства**, его заместители и **федеральные министры**. Правительство осуществляет **исполнительную власть** Российской Федерации. Его резиденция — **Дом Правительства** на Краснопресненской набережной, в обиходе Белый дом.":
    "**Artikel 110** bestimmt die Zusammensetzung: der **Vorsitzende der Regierung**, seine Stellvertreter und die **föderalen Minister**. Die Regierung übt die **vollziehende Gewalt** der Russischen Föderation aus. Ihr Sitz ist das **Haus der Regierung** an der Krasnopresnenskaja-Uferstraße, im Alltag das Weiße Haus genannt.",
  "Как оно назначается": "Wie sie ernannt wird",
  "**Председателя Правительства назначает Президент** — но только **после утверждения** кандидатуры **Государственной Думой**. До поправок 2020 года формулировка была мягче: Дума давала «согласие».":
    "**Den Vorsitzenden der Regierung ernennt der Präsident** — aber erst **nach der Bestätigung** der Personalie durch die **Staatsduma**. Vor den Änderungen von 2020 war die Formulierung weicher: die Duma erteilte ihre «Zustimmung».",
  "Если Дума **трижды отклонит** представленные кандидатуры, Президент назначает Председателя сам, **распускает Думу** и назначает новые выборы. Эта норма никогда не применялась, но именно она задаёт баланс: у Думы есть право отказать, но у отказа есть цена.":
    "Lehnt die Duma die vorgeschlagenen Personalien **dreimal** ab, ernennt der Präsident den Vorsitzenden selbst, **löst die Duma auf** und setzt Neuwahlen an. Angewandt wurde diese Regel nie, aber sie setzt das Gleichgewicht: die Duma darf ablehnen, doch die Ablehnung hat ihren Preis.",
  "Заместителей и министров, кроме руководителей так называемого силового блока, тоже **утверждает Дума**. Министров обороны, внутренних дел, иностранных дел, юстиции и глав спецслужб назначает **Президент** после консультаций с **Советом Федерации**.":
    "Auch die Stellvertreter und die Minister bestätigt die **Duma** — außer den Leitern des sogenannten Sicherheitsblocks. Die Minister für Verteidigung, Inneres, Äußeres und Justiz sowie die Chefs der Geheimdienste ernennt der **Präsident** nach Beratung mit dem **Föderationsrat**.",
  "Что происходит, если Государственная Дума трижды отклонит кандидатуру Председателя Правительства?":
    "Was geschieht, wenn die Staatsduma die Personalie für den Regierungsvorsitz dreimal ablehnt?",
  "Президент обязан предложить четвёртую кандидатуру":
    "Der Präsident muss eine vierte Personalie vorschlagen",
  "Президент назначает Председателя, распускает Думу и назначает новые выборы":
    "Der Präsident ernennt den Vorsitzenden, löst die Duma auf und setzt Neuwahlen an",
  "Кандидатуру утверждает Совет Федерации": "Die Personalie bestätigt der Föderationsrat",
  "Правительство формируется без председателя": "Die Regierung wird ohne Vorsitzenden gebildet",
  "Это одно из двух оснований роспуска Думы, прямо названных Конституцией. Норма ни разу не применялась, но она задаёт цену отказа.":
    "Das ist einer der beiden Auflösungsgründe, die die Verfassung ausdrücklich nennt. Angewandt wurde die Regel nie, aber sie setzt den Preis einer Ablehnung.",
  "Чем оно занимается": "Womit sie sich befasst",
  "**Статья 114** перечисляет главные направления: разработка и исполнение **федерального бюджета**, единая финансовая, кредитная и денежная политика, единая политика в области **культуры, науки, образования, здравоохранения, социального обеспечения** и экологии, управление федеральной собственностью, **оборона и государственная безопасность**, законность и борьба с преступностью.":
    "**Artikel 114** zählt die Hauptaufgaben auf: Aufstellung und Vollzug des **föderalen Haushalts**, einheitliche Finanz-, Kredit- und Geldpolitik, einheitliche Politik in **Kultur, Wissenschaft, Bildung, Gesundheit, sozialer Sicherung** und Umwelt, Verwaltung des föderalen Eigentums, **Verteidigung und Staatssicherheit**, Rechtmäßigkeit und Kriminalitätsbekämpfung.",
  "Свои решения Правительство оформляет **постановлениями** и **распоряжениями**. Они обязательны на всей территории страны, но не должны противоречить Конституции, федеральным законам и указам Президента — иначе Президент вправе их отменить.":
    "Ihre Entscheidungen fasst die Regierung in **Beschlüssen** und **Verfügungen**. Sie gelten im ganzen Land, dürfen aber der Verfassung, den föderalen Gesetzen und den Erlassen des Präsidenten nicht widersprechen — sonst darf der Präsident sie aufheben.",
  "Какие акты издаёт Правительство Российской Федерации?":
    "Welche Rechtsakte erlässt die Regierung der Russischen Föderation?",
  "Указы и распоряжения": "Erlasse und Verfügungen",
  "Постановления и распоряжения": "Beschlüsse und Verfügungen",
  "Федеральные законы": "Föderale Gesetze",
  "Приказы и инструкции": "Anordnungen und Dienstanweisungen",
  "Постановления и распоряжения. Указы и распоряжения издаёт Президент, а федеральные законы принимает парламент: три разных вида актов и три разных органа.":
    "Beschlüsse und Verfügungen. Erlasse und Verfügungen kommen vom Präsidenten, föderale Gesetze vom Parlament: drei Arten von Rechtsakten und drei verschiedene Organe.",
  "Как оно уходит": "Wie sie aus dem Amt geht",
  "Государственная Дума может выразить Правительству **недоверие**. Если она сделает это **повторно в течение трёх месяцев**, Президент обязан выбрать: объявить об **отставке Правительства** либо **распустить Думу**. Выбор остаётся за ним, и это второе основание роспуска.":
    "Die Staatsduma kann der Regierung das **Misstrauen** aussprechen. Tut sie das **binnen drei Monaten ein zweites Mal**, muss der Präsident wählen: entweder den **Rücktritt der Regierung** erklären oder **die Duma auflösen**. Die Wahl liegt bei ihm, und das ist der zweite Auflösungsgrund.",
  "Правительство может и само поставить перед Думой **вопрос о доверии**. И в любом случае оно **слагает свои полномочия** перед вновь избранным Президентом — независимо от того, как давно было сформировано.":
    "Die Regierung kann der Duma auch selbst die **Vertrauensfrage** stellen. Und in jedem Fall **legt sie ihr Amt nieder**, sobald ein neuer Präsident gewählt ist — gleich wie lange zuvor sie gebildet wurde.",
  "Перед кем Правительство слагает свои полномочия?": "Vor wem legt die Regierung ihr Amt nieder?",
  "Перед вновь избранным Президентом": "Vor dem neu gewählten Präsidenten",
  "Перед вновь избранной Государственной Думой": "Vor der neu gewählten Staatsduma",
  // ru-pravitelstvo
  "Перед Советом Федерации": "Vor dem Föderationsrat",
  "Ни перед кем: оно работает бессрочно": "Vor niemandem: sie arbeitet unbefristet",
  "Перед вновь избранным Президентом, и это происходит после каждых президентских выборов. Смена состава Думы сама по себе отставки Правительства не влечёт.":
    "Vor dem neu gewählten Präsidenten, und das geschieht nach jeder Präsidentenwahl. Ein Wechsel in der Duma allein führt nicht zum Rücktritt der Regierung.",
  "**Указ** — акт Президента, **постановление** — акт Правительства, **федеральный закон** — акт парламента. Три слова, которые в новостях звучат рядом и означают три разные вещи.":
    "Ein **Erlass** ist ein Akt des Präsidenten, ein **Beschluss** ein Akt der Regierung, ein **föderales Gesetz** ein Akt des Parlaments. Drei Wörter, die in den Nachrichten nebeneinander fallen und drei verschiedene Dinge bedeuten.",
  // ru-sud
  "Почему это важно: на вершине стоят два суда, и они не одно и то же. Один судит законы, другой — дела. Их постоянно путают, и различие между ними стоит запомнить сразу.":
    "Warum das wichtig ist: an der Spitze stehen zwei Gerichte, und sie sind nicht dasselbe. Das eine richtet über Gesetze, das andere über Fälle. Sie werden ständig verwechselt, und den Unterschied merkt man sich am besten gleich.",
  "Основные правила": "Die Grundregeln",
  "**Статья 118**: правосудие осуществляется **только судом**, судебная система устанавливается Конституцией и федеральным конституционным законом, а **создание чрезвычайных судов не допускается**. **Статья 120** объявляет судей **независимыми** и подчиняющимися только Конституции и закону; **статьи 121 и 122** добавляют **несменяемость** и **неприкосновенность**.":
    "**Artikel 118**: Recht spricht **allein das Gericht**, das Gerichtssystem wird durch die Verfassung und ein föderales Verfassungsgesetz bestimmt, und **Ausnahmegerichte sind unzulässig**. **Artikel 120** erklärt die Richter für **unabhängig** und nur der Verfassung und dem Gesetz unterworfen; **die Artikel 121 und 122** fügen **Unabsetzbarkeit** und **Unverletzlichkeit** hinzu.",
  "Судьёй может стать гражданин России **не моложе 25 лет**, с высшим юридическим образованием и **стажем работы по юридической профессии не менее пяти лет**. Для высших судов требования выше.":
    "Richter kann ein russischer Staatsbürger **ab 25 Jahren** werden, mit juristischem Hochschulabschluss und **mindestens fünf Jahren Berufserfahrung im juristischen Beruf**. Für die obersten Gerichte liegen die Anforderungen höher.",
  "Лестница судов": "Die Stufen der Gerichte",
  "Мировые судьи": "Friedensrichter",
  "Самые простые дела: мелкие иски, часть уголовных дел. Это суды субъектов Федерации, а не федеральные.":
    "Die einfachsten Sachen: kleine Klagen, ein Teil der Strafsachen. Es sind Gerichte der Subjekte der Föderation, keine föderalen.",
  "Районные суды": "Rayongerichte",
  "Основное звено: большинство дел по первой инстанции рассматривается здесь.":
    "Das Hauptglied: die meisten Verfahren erster Instanz laufen hier.",
  "Суды субъектов": "Gerichte der Subjekte",
  "Областные, краевые, республиканские. Апелляция на районные суды и первая инстанция по тяжким делам.":
    "Gebiets-, Regions- und Republikgerichte. Berufung gegen die Rayongerichte und erste Instanz bei schweren Straftaten.",
  "Кассационные и апелляционные суды": "Kassations- und Berufungsgerichte",
  "Отдельные окружные суды, созданные в 2019 году, чтобы проверка шла не в том же регионе, где выносилось решение.":
    "Eigene Bezirksgerichte, 2019 geschaffen, damit die Überprüfung nicht in derselben Region stattfindet, in der entschieden wurde.",
  "Отдельную ветвь образуют **арбитражные суды**, которые рассматривают экономические споры между организациями и предпринимателями. Обычное дело проходит три инстанции: **первую**, **апелляцию** и **кассацию**.":
    "Einen eigenen Zweig bilden die **Arbitragegerichte**, die wirtschaftliche Streitigkeiten zwischen Unternehmen und Unternehmern verhandeln. Ein gewöhnliches Verfahren durchläuft drei Instanzen: die **erste**, die **Berufung** und die **Kassation**.",
  "Верховный Суд": "Das Oberste Gericht",
  "**Верховный Суд** — высший судебный орган по **гражданским, уголовным, административным** делам и по **экономическим спорам**. Он даёт разъяснения по вопросам судебной практики, и эти разъяснения фактически определяют, как нижестоящие суды будут читать закон.":
    "Das **Oberste Gericht** ist das höchste Gericht für **Zivil-, Straf- und Verwaltungssachen** sowie für **Wirtschaftsstreitigkeiten**. Es gibt Erläuterungen zur Rechtsprechungspraxis, und diese Erläuterungen bestimmen tatsächlich, wie die unteren Gerichte das Gesetz lesen werden.",
  "В **2014 году** Высший Арбитражный Суд был **упразднён**, а его полномочия переданы Верховному Суду. С тех пор высших судов два, а не три.":
    "**2014** wurde das Oberste Arbitragegericht **aufgelöst** und seine Zuständigkeiten dem Obersten Gericht übertragen. Seither gibt es zwei oberste Gerichte statt drei.",
  "Конституционный Суд": "Das Verfassungsgericht",
  "**Конституционный Суд** стоит особняком: он не рассматривает дела граждан по существу, а **проверяет законы на соответствие Конституции**. С поправок **2020 года** в нём **одиннадцать судей**; прежде было девятнадцать. С **2008 года** он находится не в Москве, а в **Санкт-Петербурге**.":
    "Das **Verfassungsgericht** steht für sich: es verhandelt die Sachen der Bürger nicht der Sache nach, sondern **prüft Gesetze auf ihre Vereinbarkeit mit der Verfassung**. Seit den Änderungen von **2020** hat es **elf Richter**; zuvor waren es neunzehn. Seit **2008** sitzt es nicht in Moskau, sondern in **Sankt Petersburg**.",
  "Его полномочия: проверка конституционности законов и иных актов, разрешение споров о компетенции между органами власти, **толкование Конституции**, заключение при отрешении Президента и проверка законопроектов по запросу Президента. Норма, признанная неконституционной, **утрачивает силу**.":
    "Seine Zuständigkeiten: Prüfung der Verfassungsmäßigkeit von Gesetzen und anderen Akten, Entscheidung von Zuständigkeitsstreitigkeiten zwischen Staatsorganen, **Auslegung der Verfassung**, Stellungnahme bei der Amtsenthebung des Präsidenten und Prüfung von Gesetzentwürfen auf Ersuchen des Präsidenten. Eine Norm, die für verfassungswidrig erklärt wird, **verliert ihre Kraft**.",
  "Сколько судей в Конституционном Суде Российской Федерации?":
    "Wie viele Richter hat das Verfassungsgericht der Russischen Föderation?",
  "Девять": "Neun",
  "Одиннадцать": "Elf",
  "Девятнадцать": "Neunzehn",
  "Двадцать один": "Einundzwanzig",
  "Одиннадцать — с поправок 2020 года; прежде судей было девятнадцать. Число сокращали постепенно, не заполняя открывающиеся места.":
    "Elf — seit den Änderungen von 2020; zuvor waren es neunzehn. Die Zahl wurde allmählich verkleinert, indem frei werdende Stellen nicht mehr besetzt wurden.",
  "В каком городе находится Конституционный Суд?": "In welcher Stadt sitzt das Verfassungsgericht?",
  "В Москве": "In Moskau",
  "В Санкт-Петербурге": "In Sankt Petersburg",
  "В Екатеринбурге": "In Jekaterinburg",
  "В Казани": "In Kasan",
  "В Санкт-Петербурге с 2008 года — единственный высший орган власти, работающий не в столице. Верховный Суд переехал туда позже.":
    "Seit 2008 in Sankt Petersburg — das einzige oberste Staatsorgan, das nicht in der Hauptstadt arbeitet. Das Oberste Gericht zog später dorthin.",
  "Прокуратура": "Die Staatsanwaltschaft",
  "**Статья 129** отводит **прокуратуре** отдельное место в той же главе. Это **единая централизованная система** с подчинением нижестоящих прокуроров вышестоящим и **Генеральному прокурору**, которого назначает Совет Федерации по представлению Президента. Прокуратура надзирает за соблюдением законов и поддерживает обвинение в суде, но судом не является.":
    "**Artikel 129** gibt der **Staatsanwaltschaft** einen eigenen Platz im selben Kapitel. Sie ist ein **einheitliches zentralisiertes System**, in dem die unteren Staatsanwälte den höheren und dem **Generalstaatsanwalt** unterstellt sind, den der Föderationsrat auf Vorschlag des Präsidenten ernennt. Die Staatsanwaltschaft wacht über die Einhaltung der Gesetze und vertritt die Anklage vor Gericht, ist aber kein Gericht.",
  "Что произошло с высшими судами в 2014 году?": "Was geschah 2014 mit den obersten Gerichten?",
  "Конституционный Суд переехал в Санкт-Петербург": "Das Verfassungsgericht zog nach Sankt Petersburg um",
  "Высший Арбитражный Суд был упразднён, его полномочия перешли Верховному Суду":
    "Das Oberste Arbitragegericht wurde aufgelöst, seine Zuständigkeiten gingen an das Oberste Gericht",
  "Был создан Верховный Суд": "Das Oberste Gericht wurde geschaffen",
  "Число судей Конституционного Суда сократили до одиннадцати":
    "Die Zahl der Verfassungsrichter wurde auf elf verringert",
  "Переезд Конституционного Суда состоялся в 2008 году, а сокращение до одиннадцати судей — в 2020-м. В 2014 году высших судов стало два вместо трёх.":
    "Der Umzug des Verfassungsgerichts fand 2008 statt, die Verkleinerung auf elf Richter 2020. 2014 wurden aus drei obersten Gerichten zwei.",
  "**Конституционный Суд** судит **законы**, **Верховный Суд** — **дела**. Обратиться в Конституционный Суд с жалобой на приговор нельзя; можно оспорить закон, по которому этот приговор вынесен.":
    "Das **Verfassungsgericht** richtet über **Gesetze**, das **Oberste Gericht** über **Fälle**. Man kann sich mit einer Beschwerde gegen ein Strafurteil nicht an das Verfassungsgericht wenden; anfechten lässt sich das Gesetz, auf dem dieses Urteil beruht.",
  // ru-vybory
  "Почему это важно: голосуют в России в один и тот же день по всей стране, а местное самоуправление по Конституции вообще не входит в государственную власть. Обе особенности стоит знать заранее.":
    "Warum das wichtig ist: gewählt wird in Russland landesweit am selben Tag, und die kommunale Selbstverwaltung gehört nach der Verfassung überhaupt nicht zur Staatsgewalt. Beide Eigenheiten sollte man vorher kennen.",
  "Кто голосует и кого выбирают": "Wer wählt und wer gewählt wird",
  "**Статья 32** даёт гражданам право **избирать и быть избранными**. Активное избирательное право наступает в **18 лет**. Пассивное — то есть право самому баллотироваться — зависит от должности.":
    "**Artikel 32** gibt den Bürgern das Recht, **zu wählen und gewählt zu werden**. Das aktive Wahlrecht beginnt mit **18 Jahren**. Das passive — also das Recht, selbst zu kandidieren — hängt vom Amt ab.",
  "18 лет": "18 Jahre",
  "Депутат представительного органа муниципального образования.":
    "Abgeordneter der Vertretungskörperschaft einer Kommune.",
  "Депутат Государственной Думы.": "Abgeordneter der Staatsduma.",
  "Глава субъекта Федерации, а также сенатор.": "Oberhaupt eines Subjekts der Föderation sowie Senator.",
  "Президент Российской Федерации.": "Präsident der Russischen Föderation.",
  "Та же статья называет два исключения: **не имеют права избирать и быть избранными** граждане, признанные судом **недееспособными**, и содержащиеся в местах лишения свободы **по приговору суда**. Заключение под стражу до приговора права голоса не лишает.":
    "Derselbe Artikel nennt zwei Ausnahmen: **weder wählen noch gewählt werden dürfen** Bürger, die ein Gericht für **geschäftsunfähig** erklärt hat, und wer **aufgrund eines Gerichtsurteils** in Haft ist. Untersuchungshaft vor dem Urteil nimmt das Wahlrecht nicht.",
  "С какого возраста можно быть избранным депутатом Государственной Думы?":
    "Ab welchem Alter kann man in die Staatsduma gewählt werden?",
  "С 18 лет": "Ab 18 Jahren",
  "С 21 года": "Ab 21 Jahren",
  "С 30 лет": "Ab 30 Jahren",
  "С 35 лет": "Ab 35 Jahren",
  "С двадцати одного года. Восемнадцать — для муниципального депутата, тридцать — для сенатора и главы субъекта, тридцать пять — для Президента.":
    "Ab einundzwanzig. Achtzehn gilt für kommunale Abgeordnete, dreißig für Senatoren und Oberhäupter von Subjekten, fünfunddreißig für den Präsidenten.",
  "Единый день голосования": "Der einheitliche Wahltag",
  "Региональные и муниципальные выборы проводятся по всей стране в один и тот же день — **второе воскресенье сентября**. Выборы Президента и Государственной Думы имеют собственные сроки, но и они привязаны к этому дню, когда совпадают по времени.":
    "Regionale und kommunale Wahlen finden im ganzen Land am selben Tag statt — am **zweiten Sonntag im September**. Die Wahlen zum Präsidentenamt und zur Staatsduma haben eigene Fristen, sind aber ebenfalls an diesen Tag gebunden, wenn sie zeitlich zusammenfallen.",
  "Организует выборы система комиссий: **Центральная избирательная комиссия**, комиссии субъектов, территориальные и **участковые** комиссии. На участках работают наблюдатели от кандидатов и партий.":
    "Organisiert werden die Wahlen von einem System von Kommissionen: der **Zentralen Wahlkommission**, den Kommissionen der Subjekte, den territorialen und den **Wahllokalkommissionen**. In den Wahllokalen arbeiten Beobachter der Kandidaten und Parteien.",
  "Партии и референдум": "Parteien und Referendum",
  "**Статья 13** гарантирует **многопартийность**. Порядок создания партий определяет отдельный федеральный закон: он требует определённой численности и наличия **региональных отделений** более чем в половине субъектов Федерации.":
    "**Artikel 13** garantiert die **Mehrparteienordnung**. Wie Parteien gegründet werden, regelt ein eigenes föderales Gesetz: es verlangt eine bestimmte Mitgliederzahl und **Regionalverbände** in mehr als der Hälfte der Subjekte der Föderation.",
  "**Референдум** назван в **статье 3** высшим непосредственным выражением власти народа, наряду со свободными выборами. Его назначает **Президент** в порядке, установленном федеральным конституционным законом. Общероссийский референдум проводился дважды: в 1991 и 1993 годах.":
    "Das **Referendum** nennt **Artikel 3** neben freien Wahlen den höchsten unmittelbaren Ausdruck der Macht des Volkes. Angesetzt wird es vom **Präsidenten** in dem Verfahren, das ein föderales Verfassungsgesetz festlegt. Ein gesamtrussisches Referendum gab es zweimal: 1991 und 1993.",
  "Местное самоуправление": "Die kommunale Selbstverwaltung",
  "**Статья 12** содержит формулировку, удивляющую многих: органы местного самоуправления **не входят в систему органов государственной власти**. Местное самоуправление в пределах своих полномочий **самостоятельно**, и ему посвящена отдельная, восьмая глава Конституции.":
    "**Artikel 12** enthält eine Formulierung, die viele überrascht: die Organe der kommunalen Selbstverwaltung **gehören nicht zum System der Staatsorgane**. Die kommunale Selbstverwaltung ist im Rahmen ihrer Zuständigkeiten **selbstständig**, und ihr ist ein eigenes, das achte Kapitel der Verfassung gewidmet.",
  "Оно осуществляется через **местные референдумы**, **выборы** и выборные органы. Виды муниципальных образований — **городской округ**, **муниципальный округ**, **муниципальный район** и **поселение**.":
    "Ausgeübt wird sie über **kommunale Referenden**, **Wahlen** und gewählte Organe. Die Arten von Kommunen sind der **Stadtkreis**, der **Kommunalkreis**, der **Kommunalbezirk** und die **Siedlung**.",
  "Что решают на местах": "Was vor Ort entschieden wird",
  "Благоустройство, местные дороги, жилищно-коммунальное хозяйство, вывоз мусора, содержание школ и детских садов.":
    "Ortsgestaltung, örtliche Straßen, Wohnungs- und Kommunalwirtschaft, Müllabfuhr, Unterhalt von Schulen und Kindergärten.",
  "Местный бюджет": "Der kommunale Haushalt",
  "Муниципалитеты самостоятельно формируют, утверждают и исполняют собственный бюджет и устанавливают местные налоги.":
    "Die Kommunen stellen ihren eigenen Haushalt selbstständig auf, beschließen und vollziehen ihn und setzen örtliche Steuern fest.",
  "Глава муниципалитета": "Das Oberhaupt der Kommune",
  "Порядок избрания различается: где-то прямые выборы, где-то избрание депутатами из своего состава или по конкурсу.":
    "Das Wahlverfahren ist unterschiedlich: mancherorts wird direkt gewählt, andernorts wählen die Abgeordneten aus ihrer Mitte oder nach einem Auswahlverfahren.",
  "Государственные полномочия": "Staatliche Aufgaben",
  "Их можно передать муниципалитету законом, но только вместе с деньгами на исполнение.":
    "Sie können einer Kommune per Gesetz übertragen werden, aber nur zusammen mit dem Geld für ihre Erfüllung.",
  "Когда проводится единый день голосования?": "Wann findet der einheitliche Wahltag statt?",
  "В первое воскресенье марта": "Am ersten Sonntag im März",
  "Во второе воскресенье сентября": "Am zweiten Sonntag im September",
  "В последнее воскресенье ноября": "Am letzten Sonntag im November",
  "Даты назначаются в каждом регионе отдельно": "Die Termine werden in jeder Region einzeln festgelegt",
  "Второе воскресенье сентября. Единый день был введён, чтобы региональные и местные кампании не шли круглый год вразнобой.":
    "Am zweiten Sonntag im September. Der einheitliche Tag wurde eingeführt, damit regionale und kommunale Wahlkämpfe nicht das ganze Jahr über durcheinanderlaufen.",
  "Входят ли органы местного самоуправления в систему органов государственной власти?":
    "Gehören die Organe der kommunalen Selbstverwaltung zum System der Staatsorgane?",
  "Да, это её нижнее звено": "Ja, sie sind deren unterste Stufe",
  "Нет: статья 12 прямо говорит, что не входят":
    "Nein: Artikel 12 sagt ausdrücklich, dass sie nicht dazugehören",
  "Входят только в городах федерального значения": "Nur in den Städten von föderaler Bedeutung",
  "Входят, если так решит субъект Федерации":
    "Sie gehören dazu, wenn das Subjekt der Föderation es so beschließt",
  "Статья 12 отделяет местное самоуправление от государственной власти и признаёт его самостоятельность в пределах полномочий. Ему посвящена отдельная восьмая глава.":
    "Artikel 12 trennt die kommunale Selbstverwaltung von der Staatsgewalt und erkennt ihre Selbstständigkeit im Rahmen ihrer Zuständigkeiten an. Ihr ist das eigene achte Kapitel gewidmet.",
  "**Уполномоченный по правам человека** — федеральный омбудсмен — назначается **Государственной Думой**, а не Президентом, и работает независимо от органов власти. У большинства субъектов есть свой уполномоченный.":
    "Der **Bevollmächtigte für Menschenrechte** — der föderale Ombudsmann — wird von der **Staatsduma** ernannt, nicht vom Präsidenten, und arbeitet unabhängig von den Staatsorganen. Die meisten Subjekte haben einen eigenen Bevollmächtigten.",
  // ru-kievskaya-rus
  "Почему начинаем отсюда: у русской государственности есть точка отсчёта, и она лежит не в Москве. Первые триста лет центром была не она, и это меняет всю картину.":
    "Warum wir hier anfangen: die russische Staatlichkeit hat einen Anfangspunkt, und er liegt nicht in Moskau. Die ersten dreihundert Jahre lag das Zentrum anderswo, und das ändert das ganze Bild.",
  "Путь из варяг в греки": "Der Weg von den Warägern zu den Griechen",
  "Восточные славяне жили племенными союзами по великим рекам, и через их земли шёл торговый **путь «из варяг в греки»** — от Балтики по Волхову и Днепру к Чёрному морю и Константинополю. Города вырастали там, где стоило держать перевоз и склад: **Новгород**, **Смоленск**, **Киев**.":
    "Die Ostslawen lebten in Stammesverbänden an den großen Flüssen, und durch ihr Land führte der Handelsweg **von den Warägern zu den Griechen** — von der Ostsee über Wolchow und Dnepr zum Schwarzen Meer und nach Konstantinopel. Städte wuchsen dort, wo sich Fähre und Lager lohnten: **Nowgorod**, **Smolensk**, **Kiew**.",
  "«Повесть временных лет» относит к **862 году** призвание **Рюрика** в Новгород, а к **882-му** — поход **Олега**, который взял Киев и соединил два центра. От этой даты и принято считать начало **Киевской Руси**.":
    "Die «Nestorchronik» setzt die Berufung **Rjuriks** nach Nowgorod auf das Jahr **862** und auf **882** den Zug **Olegs**, der Kiew nahm und die beiden Zentren verband. Von diesem Datum an rechnet man den Beginn der **Kiewer Rus**.",
  "988 год": "Das Jahr 988",
  "В **988 году** князь **Владимир** принял христианство и крестил Русь. Решение было и политическим: христианский правитель переставал быть для соседей объектом миссии, а страна получала письменность, календарь и связи со всей византийской и латинской Европой.":
    "**988** nahm Fürst **Wladimir** das Christentum an und ließ die Rus taufen. Die Entscheidung war auch politisch: ein christlicher Herrscher war für die Nachbarn kein Missionsziel mehr, und das Land bekam Schrift, Kalender und Verbindungen in das ganze byzantinische und lateinische Europa.",
  "Письменность принесла **кириллица**, созданная в IX веке **Кириллом и Мефодием** для славянских языков. Богослужение шло не на греческом, а на понятном языке, и это на столетия определило, какой будет книжность на Руси.":
    "Die Schrift brachte die **Kyrillica**, die **Kyrill und Method** im 9. Jahrhundert für die slawischen Sprachen schufen. Der Gottesdienst lief nicht auf Griechisch, sondern in einer verständlichen Sprache, und das bestimmte auf Jahrhunderte, wie das Buchwesen der Rus aussehen würde.",
  "В каком году произошло Крещение Руси?": "In welchem Jahr fand die Taufe der Rus statt?",
  "В 862 году": "Im Jahr 862",
  "В 882 году": "Im Jahr 882",
  "В 988 году": "Im Jahr 988",
  "В 1097 году": "Im Jahr 1097",
  "988 год, при князе Владимире. 862-й — призвание Рюрика по летописи, 882-й — объединение Новгорода и Киева, 1097-й — Любечский съезд.":
    "988, unter Fürst Wladimir. 862 ist die Berufung Rjuriks nach der Chronik, 882 die Vereinigung von Nowgorod und Kiew, 1097 der Fürstentag von Ljubetsch.",
  "Ярослав Мудрый": "Jaroslaw der Weise",
  "При **Ярославе Мудром** (XI век) Киев достиг расцвета. Появился первый письменный свод законов — **«Русская Правда»**, в котором вместо кровной мести устанавливались денежные штрафы. Была построена **София Киевская**, а дочери Ярослава вышли замуж за королей Франции, Норвегии и Венгрии: Русь была частью европейской династической сети.":
    "Unter **Jaroslaw dem Weisen** (11. Jahrhundert) erreichte Kiew seine Blüte. Es entstand die erste schriftliche Gesetzessammlung — die **«Russkaja Prawda»**, in der an die Stelle der Blutrache Geldbußen traten. Die **Sophienkathedrale von Kiew** wurde gebaut, und Jaroslaws Töchter heirateten die Könige von Frankreich, Norwegen und Ungarn: die Rus war Teil des europäischen Dynastienetzes.",
  "Раздробленность": "Die Zersplitterung",
  "В **1097 году** князья съехались в **Любече** и постановили: **каждый держит свою отчину**, то есть земли, унаследованные от отца. Съезд собирали, чтобы прекратить усобицы, а получилось иначе: он закрепил разделение Руси на самостоятельные княжества.":
    "**1097** kamen die Fürsten in **Ljubetsch** zusammen und beschlossen: **jeder hält sein väterliches Erbe**, also das vom Vater geerbte Land. Der Tag war einberufen worden, um die Bruderkriege zu beenden; herausgekommen ist das Gegenteil — er befestigte die Teilung der Rus in selbstständige Fürstentümer.",
  "Новгородская республика": "Die Republik Nowgorod",
  "Князя приглашали и могли изгнать, а решало вече — собрание горожан. Ближе к городской республике, чем к княжеству.":
    "Den Fürsten lud man ein und konnte ihn wieder vertreiben; entschieden wurde in der Wetsche, der Versammlung der Bürger. Näher an einer Stadtrepublik als an einem Fürstentum.",
  "Владимиро-Суздальская земля": "Das Land Wladimir-Susdal",
  "Северо-восток, куда при Андрее Боголюбском сместился центр силы. Из этих земель позже вырастет Москва.":
    "Der Nordosten, wohin sich unter Andrei Bogoljubski das Machtzentrum verschob. Aus diesem Land wird später Moskau erwachsen.",
  "Галицко-Волынская земля": "Das Land Galizien-Wolhynien",
  "Юго-запад, тесно связанный с Польшей и Венгрией.": "Der Südwesten, eng verbunden mit Polen und Ungarn.",
  "Владимир Мономах": "Wladimir Monomach",
  "Последний, кому удалось на время собрать Русь под одной рукой, в начале XII века.":
    "Der Letzte, dem es zu Beginn des 12. Jahrhunderts noch einmal gelang, die Rus für eine Weile in einer Hand zu sammeln.",
  "Как назывался первый письменный свод законов Руси?":
    "Wie hieß die erste schriftliche Gesetzessammlung der Rus?",
  "Судебник": "Sudebnik",
  "Русская Правда": "Russkaja Prawda",
  "Соборное уложение": "Sobornoje Uloschenije",
  "Стоглав": "Stoglaw",
  "«Русская Правда» при Ярославе Мудром. Судебник — свод Ивана III 1497 года, а Соборное уложение — 1649 года: три разных документа из трёх разных эпох.":
    "Die «Russkaja Prawda» unter Jaroslaw dem Weisen. Der Sudebnik ist die Sammlung Iwans III. von 1497, das Sobornoje Uloschenije die von 1649: drei verschiedene Dokumente aus drei verschiedenen Epochen.",
  "Нашествие": "Der Einfall",
  "В **1237–1240 годах** на Русь пришли войска **Батыя**. Рязань, Владимир, десятки городов были взяты и сожжены; в **1240 году** пал **Киев**. Раздробленность, начатая в Любече, не позволила выставить общее войско, и княжества гибли поодиночке.":
    "In den Jahren **1237–1240** kamen die Heere **Batus** in die Rus. Rjasan, Wladimir und Dutzende Städte wurden genommen und niedergebrannt; **1240** fiel **Kiew**. Die in Ljubetsch begonnene Zersplitterung erlaubte kein gemeinsames Heer, und die Fürstentümer gingen einzeln unter.",
  "К этому времени относится и **«Слово о полку Игореве»** — поэма о неудачном походе против половцев, главный памятник литературы домонгольской Руси. Её тема — та же беда: князья не действуют вместе.":
    "In diese Zeit gehört auch das **«Igorlied»** — ein Poem über einen missglückten Zug gegen die Polowzer und das wichtigste literarische Denkmal der vormongolischen Rus. Sein Thema ist dasselbe Unglück: die Fürsten handeln nicht gemeinsam.",
  "Что постановил Любечский съезд князей 1097 года?":
    "Was beschloss der Fürstentag von Ljubetsch im Jahr 1097?",
  "Что каждый князь держит свою отчину": "Dass jeder Fürst sein väterliches Erbe hält",
  "Что Русь переходит к единому наследованию": "Dass die Rus zu einer einheitlichen Erbfolge übergeht",
  "Что столица переносится во Владимир": "Dass die Hauptstadt nach Wladimir verlegt wird",
  "Что вводится единый свод законов": "Dass eine einheitliche Gesetzessammlung eingeführt wird",
  "Съезд собирали ради прекращения усобиц, но он закрепил разделение земель между княжескими линиями. Через сто сорок лет это обернулось невозможностью выставить общее войско.":
    "Der Tag war einberufen worden, um die Bruderkriege zu beenden, befestigte aber die Teilung des Landes zwischen den Fürstenlinien. Hundertvierzig Jahre später hieß das: kein gemeinsames Heer aufstellen zu können.",
  "**Киевская Русь** — общее наследие России, Украины и Беларуси, и историография в каждой из трёх стран расставляет здесь свои акценты. Даты и события при этом одни и те же.":
    "Die **Kiewer Rus** ist das gemeinsame Erbe Russlands, der Ukraine und von Belarus, und die Geschichtsschreibung setzt in jedem der drei Länder eigene Schwerpunkte. Die Daten und Ereignisse sind dabei dieselben.",
  // ru-orda-moskva
  "Почему это важно: за двести сорок лет зависимости центр русских земель окончательно переместился на северо-восток, и незначительный городок стал столицей. Как это вышло — вопрос не случая, а расчёта.":
    "Warum das wichtig ist: in zweihundertvierzig Jahren der Abhängigkeit verschob sich das Zentrum der russischen Länder endgültig nach Nordosten, und aus einer unbedeutenden Kleinstadt wurde die Hauptstadt. Wie das kam, ist keine Frage des Zufalls, sondern des Kalküls.",
  "Как была устроена зависимость": "Wie die Abhängigkeit aussah",
  "Ордынское владычество не означало прямого управления. Князья оставались на местах, но получали от хана **ярлык** — грамоту на право княжить, — и собирали **дань**, которую называли **выходом**. Сначала её собирали ханские сборщики, **баскаки**, потом это право перешло к самим князьям, и здесь начинается история Москвы.":
    "Die Herrschaft der Horde bedeutete keine unmittelbare Verwaltung. Die Fürsten blieben an Ort und Stelle, erhielten aber vom Chan einen **Jarlyk** — eine Urkunde über das Recht zu herrschen — und trieben den **Tribut** ein, den man **Ausgang** nannte. Zuerst sammelten ihn die Beauftragten des Chans, die **Baskaken**, dann ging dieses Recht an die Fürsten selbst über, und hier beginnt die Geschichte Moskaus.",
  "Одновременно с востока давила Орда, а с запада шли другие противники. **Александр Невский** разбил шведов на Неве в **1240 году** и Ливонский орден на льду Чудского озера в **1242-м**, при этом с Ордой он выбрал путь соглашения: воевать на два фронта было нельзя.":
    "Von Osten drückte die Horde, von Westen kamen zugleich andere Gegner. **Alexander Newski** schlug **1240** die Schweden an der Newa und **1242** den Livländischen Orden auf dem Eis des Peipussees; gegenüber der Horde wählte er den Weg der Verständigung: an zwei Fronten zu kämpfen war unmöglich.",
  "Расчёт московских князей": "Das Kalkül der Moskauer Fürsten",
  "**Иван Калита** (1325–1340) добился права **собирать дань** со всех русских земель и отвозить её в Орду. Часть оседала в Москве. Он же добился переноса в Москву **митрополичьей кафедры** — и город стал не только богатым, но и церковным центром.":
    "**Iwan Kalita** (1325–1340) erlangte das Recht, den **Tribut** in allen russischen Ländern **einzusammeln** und in die Horde zu bringen. Ein Teil blieb in Moskau hängen. Er erreichte außerdem, dass der **Sitz des Metropoliten** nach Moskau verlegt wurde — und die Stadt wurde nicht nur reich, sondern auch kirchliches Zentrum.",
  "Дань через свои руки": "Der Tribut durch die eigenen Hände",
  "Право собирать выход давало деньги и власть над соседями, которые платили через Москву.":
    "Das Recht, den Ausgang einzutreiben, brachte Geld und Macht über die Nachbarn, die über Moskau zahlten.",
  "Митрополит в Москве": "Der Metropolit in Moskau",
  "Церковный центр придавал городу вес, которого не давало его положение на карте.":
    "Das kirchliche Zentrum gab der Stadt ein Gewicht, das ihre Lage auf der Karte ihr nicht gab.",
  "Скупка земель": "Zukauf von Land",
  "Московские князья покупали и выменивали села и волости, расширяя владения без войны.":
    "Die Moskauer Fürsten kauften und tauschten Dörfer und Landstriche und vergrößerten ihren Besitz ohne Krieg.",
  "Наследование от отца к сыну": "Erbfolge vom Vater auf den Sohn",
  "В Москве закрепился прямой порядок, тогда как в других землях княжества дробились между братьями.":
    "In Moskau setzte sich die gerade Erbfolge durch, während anderswo die Fürstentümer unter Brüdern zerfielen.",
  "Что такое ярлык в ордынское время?": "Was war ein Jarlyk in der Zeit der Horde?",
  "Дань, которую платили Орде": "Der Tribut, den man an die Horde zahlte",
  "Ханская грамота на право княжить": "Eine Urkunde des Chans über das Recht zu herrschen",
  "Знак отличия ордынского воина": "Ein Abzeichen der Krieger der Horde",
  "Договор между княжествами": "Ein Vertrag zwischen Fürstentümern",
  "Ярлык давал право на княжение, и за него между князьями шла постоянная борьба. Дань называлась выходом, а собирали её сначала баскаки, потом сами князья.":
    "Der Jarlyk gab das Recht zu herrschen, und um ihn stritten die Fürsten unablässig. Der Tribut hieß Ausgang, und eingetrieben wurde er zuerst von den Baskaken, später von den Fürsten selbst.",
  "Куликово поле": "Das Kulikowo-Feld",
  "В **1380 году** войско под началом московского князя **Дмитрия Донского** разбило на **Куликовом поле** армию **Мамая**. Победа не сняла зависимости — через два года Тохтамыш сжёг Москву, — но показала, что Орду можно побеждать, и что собирать общее войско способна именно Москва.":
    "**1380** schlug ein Heer unter dem Moskauer Fürsten **Dmitri Donskoi** auf dem **Kulikowo-Feld** die Truppen **Mamais**. Der Sieg beendete die Abhängigkeit nicht — zwei Jahre später brannte Tochtamysch Moskau nieder —, aber er zeigte, dass die Horde zu schlagen war und dass gerade Moskau ein gemeinsames Heer aufstellen konnte.",
  "В каком году произошла Куликовская битва?":
    "In welchem Jahr fand die Schlacht auf dem Kulikowo-Feld statt?",
  "В 1240 году": "1240",
  "В 1242 году": "1242",
  "В 1380 году": "1380",
  "В 1480 году": "1480",
  "1380 год, Дмитрий Донской против Мамая. 1240 и 1242 — победы Александра Невского на западе, 1480 — стояние на Угре, которым зависимость закончилась.":
    "1380, Dmitri Donskoi gegen Mamai. 1240 und 1242 sind die Siege Alexander Newskis im Westen, 1480 ist das Stehen an der Ugra, mit dem die Abhängigkeit endete.",
  "Иван III": "Iwan III.",
  "**Иван III** (1462–1505) завершил дело. В **1478 году** он присоединил **Новгород**, положив конец его вечевой республике, а в **1480-м** произошло **стояние на реке Угре**: два войска простояли друг против друга и разошлись без сражения. Этой датой принято обозначать **конец ордынской зависимости**.":
    "**Iwan III.** (1462–1505) brachte die Sache zu Ende. **1478** gliederte er **Nowgorod** an und beendete dessen Wetsche-Republik, und **1480** kam es zum **Stehen an der Ugra**: zwei Heere standen einander gegenüber und zogen ohne Schlacht wieder ab. Mit diesem Datum bezeichnet man das **Ende der Abhängigkeit von der Horde**.",
  "При нём же появились **Судебник 1497 года** — единый свод законов для всей страны, — титул **«государь всея Руси»** и **двуглавый орёл** в качестве герба. Тогда же в Москве построили кирпичный Кремль, который стоит и сегодня.":
    "Unter ihm entstanden auch der **Sudebnik von 1497** — eine einheitliche Gesetzessammlung für das ganze Land —, der Titel **«Herrscher der ganzen Rus»** und der **Doppeladler** als Wappen. Damals wurde in Moskau auch der Kreml aus Ziegeln gebaut, der bis heute steht.",
  "К этому времени относится и **Андрей Рублёв** с его «Троицей» — вершина русской иконописи, написанная в начале XV века.":
    "In diese Zeit gehört auch **Andrei Rubljow** mit seiner «Dreifaltigkeit» — der Höhepunkt der russischen Ikonenmalerei, gemalt zu Beginn des 15. Jahrhunderts.",
  "Чем закончилось стояние на реке Угре в 1480 году?": "Wie endete das Stehen an der Ugra im Jahr 1480?",
  "Крупным сражением и разгромом Орды": "Mit einer großen Schlacht und der Niederlage der Horde",
  "Войска разошлись без битвы, и ордынская зависимость закончилась":
    "Die Heere zogen ohne Kampf ab, und die Abhängigkeit von der Horde endete",
  "Москва признала власть хана ещё на сто лет":
    "Moskau erkannte die Macht des Chans für weitere hundert Jahre an",
  "Присоединением Новгорода": "Mit der Angliederung Nowgorods",
  "Сражения не было: войска простояли по берегам и разошлись. Именно этой датой обозначают конец зависимости, а Новгород был присоединён двумя годами раньше.":
    "Eine Schlacht gab es nicht: die Heere standen an den Ufern und zogen wieder ab. Genau mit diesem Datum bezeichnet man das Ende der Abhängigkeit, und Nowgorod war zwei Jahre früher angegliedert worden.",
  "**Куликовская битва** и **стояние на Угре** разделены ровно столетием. Первая была громкой победой, но зависимости не сняла; вторая прошла без боя и стала концом эпохи.":
    "Zwischen der **Schlacht auf dem Kulikowo-Feld** und dem **Stehen an der Ugra** liegt genau ein Jahrhundert. Die erste war ein lauter Sieg, hob die Abhängigkeit aber nicht auf; das zweite verlief ohne Kampf und wurde das Ende einer Epoche.",
  // ru-moskovskoe-tsarstvo
  "Почему это важно: за полтора столетия страна получает царя, теряет династию, едва не исчезает в Смуте и выбирает новую власть собором. Здесь же закрепляется крепостное право, которое продержится двести лет.":
    "Warum das wichtig ist: in anderthalb Jahrhunderten bekommt das Land einen Zaren, verliert seine Dynastie, verschwindet in der Zeit der Wirren beinahe und wählt sich eine neue Macht durch eine Versammlung. Hier verfestigt sich auch die Leibeigenschaft, die zweihundert Jahre halten wird.",
  "Первый царь": "Der erste Zar",
  "В **1547 году** **Иван IV** венчался на царство — до него московские правители звались великими князьями. Начало правления было временем реформ: **Судебник 1550 года**, созыв **земских соборов** — сословных собраний, — упорядочение управления и церковные постановления Стоглавого собора.":
    "**1547** ließ sich **Iwan IV.** zum Zaren krönen — vor ihm hießen die Moskauer Herrscher Großfürsten. Der Beginn der Regierung war eine Zeit der Reformen: der **Sudebnik von 1550**, die Einberufung der **Landesversammlungen** — Versammlungen der Stände —, eine geordnetere Verwaltung und die Kirchenbeschlüsse des Stoglaw-Konzils.",
  "Тогда же расширились границы: в **1552 году** была взята **Казань**, в **1556-м** — **Астрахань**, и Волга целиком стала русской рекой. В 1580-е годы отряд **Ермака** начал присоединение **Сибири** — движение, которое за семьдесят лет доведёт русских землепроходцев до Тихого океана.":
    "Damals dehnten sich auch die Grenzen: **1552** wurde **Kasan** genommen, **1556** **Astrachan**, und die Wolga wurde auf ganzer Länge ein russischer Fluss. In den 1580er Jahren begann die Truppe **Jermaks** die Angliederung **Sibiriens** — eine Bewegung, die die russischen Landfahrer in siebzig Jahren an den Pazifik bringen wird.",
  "Опричнина": "Die Opritschnina",
  "С **1565 по 1572 год** царь разделил государство на **опричнину**, управляемую лично им, и остальную землю. Годы опричнины — это массовые казни, конфискации, разгром Новгорода и разорение центральных уездов. Вместе с затяжной и проигранной **Ливонской войной** это надолго подорвало хозяйство страны.":
    "Von **1565 bis 1572** teilte der Zar den Staat in die **Opritschnina**, die er persönlich verwaltete, und das übrige Land. Die Jahre der Opritschnina bedeuteten Massenhinrichtungen, Enteignungen, die Verwüstung Nowgorods und den Ruin der zentralen Kreise. Zusammen mit dem langen und verlorenen **Livländischen Krieg** untergrub das die Wirtschaft des Landes für lange Zeit.",
  "В **1589 году** в Москве было учреждено **патриаршество**: русская церковь стала полностью самостоятельной.":
    "**1589** wurde in Moskau das **Patriarchat** eingerichtet: die russische Kirche wurde vollständig selbstständig.",
  "Кто первым в русской истории венчался на царство?":
    "Wer ließ sich als Erster in der russischen Geschichte zum Zaren krönen?",
  "Иван IV": "Iwan IV.",
  "Михаил Романов": "Michail Romanow",
  "Пётр I": "Peter I.",
  "Иван IV, в 1547 году. Иван III носил титул государя всея Руси, а Пётр I два века спустя примет титул императора: три ступени одного восхождения.":
    "Iwan IV., im Jahr 1547. Iwan III. trug den Titel Herrscher der ganzen Rus, und Peter I. wird zwei Jahrhunderte später den Kaisertitel annehmen: drei Stufen eines Aufstiegs.",
  "Смутное время": "Die Zeit der Wirren",
  "После смерти сына Ивана IV династия пресеклась, и с **1598 по 1613 год** страна прошла через **Смуту**: борьбу за престол, самозванцев, объявлявших себя чудом спасшимся царевичем, страшный голод начала века и **польско-литовскую интервенцию**. В Москве стоял иноземный гарнизон, и государство фактически перестало существовать.":
    "Nach dem Tod des Sohnes Iwans IV. erlosch die Dynastie, und von **1598 bis 1613** ging das Land durch die **Zeit der Wirren**: Kampf um den Thron, Hochstapler, die sich für den wunderbar geretteten Zarensohn ausgaben, eine furchtbare Hungersnot zu Beginn des Jahrhunderts und die **polnisch-litauische Intervention**. In Moskau stand eine fremde Besatzung, und der Staat hörte faktisch auf zu bestehen.",
  "Выход нашёлся снизу. В Нижнем Новгороде земский староста **Кузьма Минин** собрал средства, а князь **Дмитрий Пожарский** возглавил ополчение. В **1612 году** Москва была освобождена — это событие и лежит в основе **Дня народного единства** 4 ноября.":
    "Der Ausweg kam von unten. In Nischni Nowgorod sammelte der Stadtälteste **Kusma Minin** die Mittel, und Fürst **Dmitri Poscharski** führte das Aufgebot an. **1612** wurde Moskau befreit — dieses Ereignis liegt dem **Tag der Einheit des Volkes** am 4. November zugrunde.",
  "В **1613 году** **Земский собор** избрал царём шестнадцатилетнего **Михаила Романова**. Династия **Романовых** будет править триста четыре года.":
    "**1613** wählte die **Landesversammlung** den sechzehnjährigen **Michail Romanow** zum Zaren. Die Dynastie der **Romanows** wird dreihundertvier Jahre regieren.",
  "Кого Земский собор избрал царём в 1613 году?": "Wen wählte die Landesversammlung 1613 zum Zaren?",
  "Бориса Годунова": "Boris Godunow",
  "Михаила Романова": "Michail Romanow",
  "Дмитрия Пожарского": "Dmitri Poscharski",
  "Владислава, королевича польского": "Wladislaw, den polnischen Königssohn",
  "Михаила Романова, и с него начинается династия, правившая до 1917 года. Пожарский возглавлял ополчение, но на престол не претендовал.":
    "Michail Romanow, und mit ihm beginnt die Dynastie, die bis 1917 regierte. Poscharski führte das Aufgebot an, erhob aber keinen Anspruch auf den Thron.",
  "Век семнадцатый": "Das siebzehnte Jahrhundert",
  "**Соборное уложение 1649 года** — свод законов, действовавший почти двести лет, — окончательно закрепило **крепостное право**: сыск беглых крестьян стал бессрочным, и крестьянин был навсегда прикреплён к земле и владельцу.":
    "Das **Sobornoje Uloschenije von 1649** — eine Gesetzessammlung, die fast zweihundert Jahre galt — befestigte endgültig die **Leibeigenschaft**: die Suche nach entlaufenen Bauern wurde unbefristet, und der Bauer war für immer an Land und Besitzer gebunden.",
  "В середине века патриарх **Никон** провёл церковную реформу, исправив книги и обряды по греческому образцу. Часть верующих её не приняла: произошёл **раскол**, и **старообрядцы** на столетия оказались вне господствующей церкви.":
    "Mitte des Jahrhunderts führte Patriarch **Nikon** eine Kirchenreform durch und berichtigte Bücher und Riten nach griechischem Vorbild. Ein Teil der Gläubigen nahm sie nicht an: es kam zum **Raskol**, der Kirchenspaltung, und die **Altgläubigen** standen für Jahrhunderte außerhalb der herrschenden Kirche.",
  "1649 · Соборное уложение": "1649 · Das Sobornoje Uloschenije",
  // ru-moskovskoe-tsarstvo
  "Бессрочный сыск беглых. Крепостное право приобретает окончательный вид.":
    "Unbefristete Suche nach Entlaufenen. Die Leibeigenschaft nimmt ihre endgültige Form an.",
  "1654 · Переяславская рада": "1654 · Der Rat von Perejaslaw",
  "Войско Запорожское переходит под власть московского царя, и начинается долгая война с Речью Посполитой.":
    "Das Heer der Saporoger Kosaken tritt unter die Herrschaft des Moskauer Zaren, und ein langer Krieg mit Polen-Litauen beginnt.",
  "1648 · До Тихого океана": "1648 · Bis an den Pazifik",
  "Семён Дежнёв проходит проливом между Азией и Америкой. Освоение Сибири занимает меньше века.":
    "Semjon Deschnjow durchfährt die Meerenge zwischen Asien und Amerika. Die Erschließung Sibiriens dauert kein volles Jahrhundert.",
  "Раскол": "Der Raskol",
  "Реформа Никона делит верующих. Старообрядчество сохранится до наших дней.":
    "Nikons Reform spaltet die Gläubigen. Das Altgläubigentum wird bis in unsere Tage bestehen.",
  "Что окончательно закрепило Соборное уложение 1649 года?":
    "Was befestigte das Sobornoje Uloschenije von 1649 endgültig?",
  "Патриаршество": "Das Patriarchat",
  "Крепостное право": "Die Leibeigenschaft",
  "Право созывать земские соборы": "Das Recht, Landesversammlungen einzuberufen",
  "Присоединение Сибири": "Die Angliederung Sibiriens",
  "Сыск беглых крестьян стал бессрочным, и крестьянин оказался прикреплён к земле навсегда. Отменят крепостное право только в 1861 году.":
    "Die Suche nach entlaufenen Bauern wurde unbefristet, und der Bauer war für immer an das Land gebunden. Aufgehoben wird die Leibeigenschaft erst 1861.",
  "**Земский собор** — не парламент. Он собирался нерегулярно, по решению власти, и представлял сословия, а не избирателей. Но именно собор в 1613 году выбрал царя, и этот прецедент остался в памяти.":
    "Die **Landesversammlung** ist kein Parlament. Sie trat unregelmäßig zusammen, auf Beschluss der Obrigkeit, und vertrat Stände, keine Wähler. Aber gerade diese Versammlung wählte 1613 den Zaren, und dieser Präzedenzfall blieb in Erinnerung.",
  // ru-imperiya
  "Почему это важно: за двести лет страна перестраивается сверху дважды — при Петре и при Александре II. Оба раза реформы идут от власти, а не снизу, и оба раза не доводятся до конца.":
    "Warum das wichtig ist: in zweihundert Jahren wird das Land zweimal von oben umgebaut — unter Peter und unter Alexander II. Beide Male gehen die Reformen von der Macht aus, nicht von unten, und beide Male werden sie nicht zu Ende geführt.",
  "**Пётр I** правил с конца XVII века до **1725 года** и перестроил государство целиком. Он создал **регулярную армию и флот**, заменил приказы **коллегиями**, учредил **Сенат**, ввёл **Табель о рангах**, по которой служебное положение зависело от чина, а не от происхождения, и перевёл страну на новый календарь.":
    "**Peter I.** regierte vom Ende des 17. Jahrhunderts bis **1725** und baute den Staat vollständig um. Er schuf ein **stehendes Heer und eine Flotte**, ersetzte die Prikaze durch **Kollegien**, richtete den **Senat** ein, führte die **Rangtabelle** ein, nach der die Stellung im Dienst vom Rang abhing und nicht von der Herkunft, und stellte das Land auf einen neuen Kalender um.",
  "В **1703 году** он основал **Санкт-Петербург** и вскоре перенёс туда столицу — она останется там больше двухсот лет. Долгая **Северная война** со Швецией (1700–1721) с победой под **Полтавой** в 1709 году дала выход к Балтике, и в **1721 году** Россия была провозглашена **империей**.":
    "**1703** gründete er **Sankt Petersburg** und verlegte bald darauf die Hauptstadt dorthin — sie wird über zweihundert Jahre dort bleiben. Der lange **Nordische Krieg** gegen Schweden (1700–1721) mit dem Sieg bei **Poltawa** 1709 brachte den Zugang zur Ostsee, und **1721** wurde Russland zum **Kaiserreich** ausgerufen.",
  "В каком году Россия была провозглашена империей?":
    "In welchem Jahr wurde Russland zum Kaiserreich ausgerufen?",
  "В 1703 году": "1703",
  "В 1709 году": "1709",
  "В 1721 году": "1721",
  "В 1762 году": "1762",
  "1721 год, по окончании Северной войны. 1703-й — основание Петербурга, 1709-й — Полтавская битва: три даты одного царствования.":
    "1721, nach dem Ende des Nordischen Krieges. 1703 ist die Gründung Petersburgs, 1709 die Schlacht bei Poltawa: drei Daten einer Regierungszeit.",
  "Восемнадцатый век": "Das achtzehnte Jahrhundert",
  "После Петра наступила эпоха **дворцовых переворотов**: гвардия несколько раз решала, кто займёт престол. **Екатерина II** (1762–1796) расширила границы на юг и запад: в **1783 году** был присоединён **Крым**, а разделы Речи Посполитой отодвинули границу далеко на запад.":
    "Nach Peter kam die Zeit der **Palastumstürze**: mehrmals entschied die Garde, wer den Thron besteigt. **Katharina II.** (1762–1796) schob die Grenzen nach Süden und Westen: **1783** wurde die **Krim** angegliedert, und die Teilungen Polen-Litauens rückten die Grenze weit nach Westen.",
  "При ней же случилось крупнейшее народное восстание — **пугачёвское** (1773–1775), охватившее Урал и Поволжье. Просвещённые замыслы вроде Уложенной комиссии остались на бумаге, а крепостное право стало жёстче, чем прежде.":
    "Unter ihr kam es auch zum größten Volksaufstand — dem **Pugatschow-Aufstand** (1773–1775), der den Ural und die Wolgaregion erfasste. Aufgeklärte Vorhaben wie die Gesetzgebende Kommission blieben auf dem Papier, und die Leibeigenschaft wurde härter als zuvor.",
  "1812 год": "Das Jahr 1812",
  "В **1812 году** армия Наполеона вошла в Россию. После **Бородинского сражения** русская армия под началом **Кутузова** оставила Москву, которая почти целиком сгорела. Отступление французов зимой обернулось катастрофой: из огромной армии вернулись немногие.":
    "**1812** rückte Napoleons Armee in Russland ein. Nach der **Schlacht bei Borodino** gab das russische Heer unter **Kutusow** Moskau auf, das fast vollständig abbrannte. Der Rückzug der Franzosen im Winter wurde zur Katastrophe: von der riesigen Armee kehrten wenige zurück.",
  "Война получила название **Отечественной**, а поход русской армии в Европу привёл её офицеров в Париж. Вернувшись, часть из них создала тайные общества, и в **1825 году** произошло восстание **декабристов** на Сенатской площади — первое выступление за конституцию в русской истории.":
    "Der Krieg erhielt den Namen **Vaterländischer Krieg**, und der Feldzug des russischen Heeres nach Europa führte seine Offiziere bis nach Paris. Zurückgekehrt gründete ein Teil von ihnen Geheimgesellschaften, und **1825** kam es auf dem Senatsplatz zum Aufstand der **Dekabristen** — dem ersten Auftreten für eine Verfassung in der russischen Geschichte.",
  "Что произошло в 1812 году?": "Was geschah im Jahr 1812?",
  "Восстание декабристов": "Der Aufstand der Dekabristen",
  "Отечественная война против армии Наполеона": "Der Vaterländische Krieg gegen Napoleons Armee",
  "Отмена крепостного права": "Die Aufhebung der Leibeigenschaft",
  "Провозглашение империи": "Die Ausrufung des Kaiserreichs",
  "Вторжение Наполеона, Бородино, пожар Москвы и гибель Великой армии на обратном пути. Восстание декабристов — 1825 год, отмена крепостного права — 1861-й.":
    "Der Einmarsch Napoleons, Borodino, der Brand von Moskau und der Untergang der Großen Armee auf dem Rückweg. Der Dekabristenaufstand war 1825, die Aufhebung der Leibeigenschaft 1861.",
  "Великие реформы": "Die großen Reformen",
  "**19 февраля 1861 года** **Александр II** подписал манифест об **отмене крепостного права**. Двадцать три миллиона человек получили личную свободу — но землю пришлось выкупать, и выкупные платежи легли на крестьян на десятилетия вперёд.":
    "Am **19. Februar 1861** unterzeichnete **Alexander II.** das Manifest über die **Aufhebung der Leibeigenschaft**. Dreiundzwanzig Millionen Menschen erhielten die persönliche Freiheit — das Land aber mussten sie abkaufen, und die Ablösezahlungen lasteten noch Jahrzehnte auf den Bauern.",
  "Земская реформа": "Die Semstwo-Reform",
  "1864 год: выборные органы местного самоуправления, занимавшиеся школами, больницами и дорогами.":
    "1864: gewählte Organe der örtlichen Selbstverwaltung, zuständig für Schulen, Krankenhäuser und Straßen.",
  "Судебная реформа": "Die Justizreform",
  "1864 год: гласный суд, состязательность, адвокатура и суд присяжных.":
    "1864: öffentliche Verhandlung, Parteienstreit, Anwaltschaft und Geschworenengericht.",
  "Военная реформа": "Die Heeresreform",
  "1874 год: всеобщая воинская повинность вместо рекрутских наборов.":
    "1874: allgemeine Wehrpflicht anstelle der Rekrutenaushebungen.",
  "Транссиб": "Die Transsibirische Eisenbahn",
  "Строительство с 1891 года: самая длинная железная дорога в мире связала Москву с Тихим океаном.":
    "Bau ab 1891: die längste Eisenbahn der Welt verband Moskau mit dem Pazifik.",
  "Реформы не сняли напряжения. **Революция 1905 года** заставила власть издать **Манифест 17 октября**, которым были обещаны гражданские свободы и созвана **Государственная дума** — первый в русской истории выборный законодательный орган. **Столыпинская реформа** попыталась создать слой самостоятельных крестьян-собственников, но времени не хватило: в **1914 году** Россия вступила в **Первую мировую войну**.":
    "Die Reformen nahmen die Spannung nicht weg. Die **Revolution von 1905** zwang die Obrigkeit zum **Oktobermanifest**, das bürgerliche Freiheiten versprach und die **Staatsduma** einberief — das erste gewählte gesetzgebende Organ der russischen Geschichte. Die **Stolypinsche Reform** versuchte eine Schicht selbstständiger bäuerlicher Eigentümer zu schaffen, doch die Zeit reichte nicht: **1914** trat Russland in den **Ersten Weltkrieg** ein.",
  "Тот же век дал мировую культуру: **Пушкин**, **Гоголь**, **Толстой**, **Достоевский**, **Чехов** в литературе, **Чайковский**, **Мусоргский**, **Римский-Корсаков** в музыке, **Менделеев** и **Павлов** в науке.":
    "Dasselbe Jahrhundert schenkte der Welt Kultur: **Puschkin**, **Gogol**, **Tolstoi**, **Dostojewski**, **Tschechow** in der Literatur, **Tschaikowski**, **Mussorgski**, **Rimski-Korsakow** in der Musik, **Mendelejew** und **Pawlow** in der Wissenschaft.",
  "В каком году было отменено крепостное право?": "In welchem Jahr wurde die Leibeigenschaft aufgehoben?",
  "В 1825 году": "1825",
  "В 1861 году": "1861",
  "В 1874 году": "1874",
  "В 1905 году": "1905",
  "19 февраля 1861 года, манифест Александра II. Личную свободу получили около двадцати трёх миллионов человек, но землю им пришлось выкупать.":
    "Am 19. Februar 1861, mit dem Manifest Alexanders II. Rund dreiundzwanzig Millionen Menschen erhielten die persönliche Freiheit, das Land aber mussten sie abkaufen.",
  "**Государственная дума** появилась в 1906 году, после революции 1905-го, и была распущена в 1917-м. Нынешняя Дума — не её продолжение: она создана Конституцией 1993 года, хотя имя взято оттуда.":
    "Die **Staatsduma** entstand 1906, nach der Revolution von 1905, und wurde 1917 aufgelöst. Die heutige Duma ist nicht ihre Fortsetzung: sie ist durch die Verfassung von 1993 geschaffen, auch wenn der Name von dort stammt.",
  // ru-1917
  "Почему это важно: в 1917 году революций было две, а не одна, и между ними прошло восемь месяцев. Кто их различает, тот понимает и всё, что было дальше.":
    "Warum das wichtig ist: 1917 gab es zwei Revolutionen, nicht eine, und zwischen ihnen lagen acht Monate. Wer sie unterscheidet, versteht auch alles, was danach kam.",
  "Февраль": "Der Februar",
  // ru-1917
  "К третьему году войны в столице не хватало хлеба, транспорт не справлялся, а доверие к власти было исчерпано. В конце **февраля 1917 года** волнения в Петрограде переросли в восстание, гарнизон перешёл на сторону улицы, и **2 марта Николай II отрёкся от престола**. Монархия, стоявшая триста четыре года, кончилась за неделю.":
    "Im dritten Kriegsjahr fehlte in der Hauptstadt das Brot, der Verkehr kam nicht nach, und das Vertrauen in die Obrigkeit war aufgebraucht. Ende **Februar 1917** wuchsen die Unruhen in Petrograd zum Aufstand, die Garnison ging auf die Seite der Straße über, und **am 2. März dankte Nikolaus II. ab**. Die Monarchie, die dreihundertvier Jahre gestanden hatte, endete in einer Woche.",
  "Установилось **двоевластие**: **Временное правительство**, объявившее себя властью до Учредительного собрания, и **Советы рабочих и солдатских депутатов**, за которыми стояли гарнизон и заводы. Ни одна из сторон не решалась ни выйти из войны, ни разделить землю, а именно этого ждала страна.":
    "Es entstand eine **Doppelherrschaft**: die **Provisorische Regierung**, die sich zur Macht bis zur Konstituierenden Versammlung erklärte, und die **Sowjets der Arbeiter- und Soldatendeputierten**, hinter denen Garnison und Fabriken standen. Keine der beiden Seiten wagte, aus dem Krieg auszutreten oder das Land zu verteilen — und genau darauf wartete das Land.",
  "Что произошло в феврале и марте 1917 года?": "Was geschah im Februar und März 1917?",
  "Большевики взяли власть": "Die Bolschewiki ergriffen die Macht",
  "Николай II отрёкся от престола и установилось двоевластие":
    "Nikolaus II. dankte ab, und es entstand eine Doppelherrschaft",
  "Был подписан Брестский мир": "Der Friede von Brest-Litowsk wurde unterzeichnet",
  "Был образован СССР": "Die Sowjetunion wurde gebildet",
  "Февральская революция закончилась отречением и появлением двух центров власти — Временного правительства и Советов. Большевики придут к власти в октябре, через восемь месяцев.":
    "Die Februarrevolution endete mit der Abdankung und mit zwei Machtzentren — der Provisorischen Regierung und den Sowjets. Die Bolschewiki kommen im Oktober an die Macht, acht Monate später.",
  "Октябрь": "Der Oktober",
  "**25 октября по старому стилю** — 7 ноября по новому — вооружённые отряды заняли ключевые точки Петрограда, и **II съезд Советов** объявил о переходе власти к Советам. Первыми же актами стали **Декрет о мире** и **Декрет о земле**: именно то, чего Временное правительство не сделало.":
    "Am **25. Oktober alten Stils** — dem 7. November neuen Stils — besetzten bewaffnete Abteilungen die Schlüsselstellen Petrograds, und der **II. Sowjetkongress** erklärte den Übergang der Macht an die Sowjets. Die ersten Akte waren das **Dekret über den Frieden** und das **Dekret über den Boden**: genau das, was die Provisorische Regierung nicht getan hatte.",
  "Выборы в **Учредительное собрание** состоялись, но большевики получили меньшинство. Собрание, созванное в **январе 1918 года**, было распущено после первого же заседания. В **марте 1918 года** был подписан **Брестский мир**: Россия вышла из войны ценой огромных территорий. Тогда же столица вернулась в **Москву**.":
    "Die Wahlen zur **Konstituierenden Versammlung** fanden statt, doch die Bolschewiki bekamen eine Minderheit. Die im **Januar 1918** einberufene Versammlung wurde schon nach der ersten Sitzung aufgelöst. Im **März 1918** wurde der **Friede von Brest-Litowsk** unterzeichnet: Russland schied aus dem Krieg aus, um den Preis riesiger Gebiete. Damals kehrte auch die Hauptstadt nach **Moskau** zurück.",
  "Гражданская война": "Der Bürgerkrieg",
  "С **1918 по 1922 год** страна воевала сама с собой. Против **красных** выступили **белые** армии на юге, востоке и северо-западе, действовали крестьянские восстания и войска иностранных держав. В **июле 1918 года** в Екатеринбурге были расстреляны **Николай II и его семья**.":
    "Von **1918 bis 1922** führte das Land Krieg gegen sich selbst. Gegen die **Roten** traten die **weißen** Armeen im Süden, Osten und Nordwesten an, dazu Bauernaufstände und Truppen ausländischer Mächte. Im **Juli 1918** wurden in Jekaterinburg **Nikolaus II. und seine Familie** erschossen.",
  "Военный коммунизм": "Der Kriegskommunismus",
  "Продразвёрстка — принудительное изъятие хлеба у крестьян, запрет торговли, всеобщая трудовая повинность.":
    "Die Prodraswjorstka — die zwangsweise Ablieferung des Getreides der Bauern, dazu Handelsverbot und allgemeine Arbeitspflicht.",
  "Красный и белый террор": "Roter und weißer Terror",
  "Массовые казни велись обеими сторонами. Счёт жертв шёл на сотни тысяч.":
    "Massenhinrichtungen gingen von beiden Seiten aus. Die Zahl der Opfer ging in die Hunderttausende.",
  "Голод 1921–1922 годов": "Die Hungersnot von 1921–1922",
  "Поволжье и юг: неурожай на разорённой войной земле. Погибли миллионы человек.":
    "Wolgaregion und Süden: Missernte auf einem vom Krieg verwüsteten Boden. Millionen Menschen kamen um.",
  "Эмиграция": "Die Emigration",
  "Страну покинули около двух миллионов: офицеры, учёные, писатели, инженеры. Целый слой общества уехал.":
    "Rund zwei Millionen verließen das Land: Offiziere, Wissenschaftler, Schriftsteller, Ingenieure. Eine ganze Gesellschaftsschicht ging fort.",
  "Что такое продразвёрстка?": "Was war die Prodraswjorstka?",
  "Распределение земли между крестьянами": "Die Verteilung des Bodens unter die Bauern",
  "Принудительное изъятие хлеба у крестьян в годы военного коммунизма":
    "Die zwangsweise Ablieferung des Getreides der Bauern in den Jahren des Kriegskommunismus",
  "Система продовольственных карточек в городах": "Ein System von Lebensmittelkarten in den Städten",
  "Налог, введённый Столыпиным": "Eine von Stolypin eingeführte Steuer",
  "Изъятие велось по разнарядке, без учёта того, что оставалось самому хозяйству. Отказ от продразвёрстки и стал первым шагом новой экономической политики.":
    "Abgeliefert wurde nach Vorgabe, ohne Rücksicht darauf, was dem Hof selbst blieb. Die Abkehr von der Prodraswjorstka war der erste Schritt der neuen Wirtschaftspolitik.",
  "НЭП и образование СССР": "Die NEP und die Gründung der Sowjetunion",
  "К **1921 году** хозяйство было разрушено, а крестьянские восстания и мятеж в Кронштадте показали пределы прежней политики. Была объявлена **новая экономическая политика**: продразвёрстку заменили налогом, разрешили торговлю и мелкое частное предпринимательство. Через несколько лет страна вернулась к довоенному уровню производства.":
    "**1921** war die Wirtschaft zerstört, und die Bauernaufstände sowie der Aufstand in Kronstadt zeigten die Grenzen der bisherigen Politik. Die **neue Wirtschaftspolitik** wurde ausgerufen: an die Stelle der Prodraswjorstka trat eine Steuer, Handel und kleines Privatunternehmertum wurden erlaubt. Binnen weniger Jahre erreichte das Land wieder das Produktionsniveau der Vorkriegszeit.",
  "**30 декабря 1922 года** договор об образовании **Союза Советских Социалистических Республик** подписали четыре республики: **РСФСР**, **Украина**, **Белоруссия** и **Закавказская федерация**. Союз просуществует шестьдесят девять лет.":
    "Am **30. Dezember 1922** unterzeichneten vier Republiken den Vertrag über die Gründung der **Union der Sozialistischen Sowjetrepubliken**: die **RSFSR**, die **Ukraine**, **Belorussland** und die **Transkaukasische Föderation**. Die Union wird neunundsechzig Jahre bestehen.",
  "Когда был образован Советский Союз?": "Wann wurde die Sowjetunion gegründet?",
  "7 ноября 1917 года": "Am 7. November 1917",
  "3 марта 1918 года": "Am 3. März 1918",
  "30 декабря 1922 года": "Am 30. Dezember 1922",
  "5 декабря 1936 года": "Am 5. Dezember 1936",
  "30 декабря 1922 года, договором четырёх республик. 1936 год — принятие новой союзной конституции, а не образование Союза.":
    "Am 30. Dezember 1922, durch den Vertrag von vier Republiken. 1936 wurde eine neue Unionsverfassung angenommen, nicht die Union gegründet.",
  "**Февральская** и **Октябрьская** революции — два разных события 1917 года. Первая свергла монархию, вторая сменила пришедшее ей на смену правительство. Между ними восемь месяцев.":
    "Die **Februar-** und die **Oktoberrevolution** sind zwei verschiedene Ereignisse des Jahres 1917. Die erste stürzte die Monarchie, die zweite löste die Regierung ab, die an deren Stelle getreten war. Zwischen ihnen liegen acht Monate.",
  // ru-sssr
  "Почему об этом говорят прямо: за полтора десятилетия страна прошла промышленный рывок и одновременно — голод, лагеря и массовые казни. Это части одной истории, и разделять их значит рассказывать её неверно.":
    "Warum darüber geradeheraus gesprochen wird: in anderthalb Jahrzehnten durchlief das Land einen industriellen Sprung und zugleich Hunger, Lager und Massenerschießungen. Das sind Teile einer Geschichte, und sie zu trennen hieße, sie falsch zu erzählen.",
  "Курс на индустриализацию": "Der Kurs auf Industrialisierung",
  "После смерти Ленина в **1924 году** во внутрипартийной борьбе победил **Сталин**. Новая экономическая политика была свёрнута, и с **1928 года** страна перешла к **пятилетним планам**.":
    "Nach Lenins Tod **1924** setzte sich im innerparteilichen Kampf **Stalin** durch. Die neue Wirtschaftspolitik wurde beendet, und ab **1928** ging das Land zu **Fünfjahrplänen** über.",
  "**Индустриализация** шла с огромной скоростью. Были построены **Магнитогорский** и **Кузнецкий** комбинаты, **Днепрогэс**, тракторные заводы, **Турксиб**. За десятилетие страна из аграрной стала промышленной, а население городов выросло в разы.":
    "Die **Industrialisierung** lief mit gewaltigem Tempo. Es entstanden die Kombinate von **Magnitogorsk** und **Kusnezk**, das Kraftwerk **Dneproges**, Traktorenwerke und die **Turksib**-Bahn. In einem Jahrzehnt wurde aus einem Agrarland ein Industrieland, und die Städte wuchsen um ein Vielfaches.",
  "Средства на это брали внутри страны: у деревни — через закупочные цены и экспорт зерна, у населения — через низкие зарплаты и займы. Оборотной стороной рывка стало то, что описано дальше.":
    "Die Mittel dafür holte man im Inneren: vom Dorf über die Ankaufspreise und den Getreideexport, von der Bevölkerung über niedrige Löhne und Zwangsanleihen. Die Kehrseite dieses Sprungs ist das, was weiter beschrieben wird.",
  "Коллективизация и голод": "Kollektivierung und Hungersnot",
  "С **1929 года** началась **сплошная коллективизация**: крестьянские хозяйства объединялись в колхозы, а зажиточные крестьяне подвергались **раскулачиванию** — конфискации имущества и высылке. Сотни тысяч семей были отправлены в отдалённые районы, многие погибли в дороге и на месте.":
    "Ab **1929** begann die **flächendeckende Kollektivierung**: die bäuerlichen Höfe wurden zu Kolchosen zusammengelegt, und wohlhabende Bauern der **Entkulakisierung** unterworfen — Enteignung und Verbannung. Hunderttausende Familien wurden in entlegene Gegenden gebracht, viele kamen unterwegs oder am Zielort um.",
  "В **1932–1933 годах** зерновые районы охватил **голод**. Он затронул **Украину**, **Поволжье**, **Казахстан**, **Северный Кавказ** и Западную Сибирь. Число погибших исчисляется **миллионами**; точные оценки расходятся, но порядок величины не оспаривается.":
    "In den Jahren **1932–1933** erfasste eine **Hungersnot** die Getreidegebiete. Betroffen waren die **Ukraine**, die **Wolgaregion**, **Kasachstan**, der **Nordkaukasus** und Westsibirien. Die Zahl der Toten geht in die **Millionen**; die genauen Schätzungen gehen auseinander, die Größenordnung ist unbestritten.",
  "С какого года в СССР начались пятилетние планы?":
    "Ab welchem Jahr gab es in der Sowjetunion Fünfjahrpläne?",
  "С 1922 года": "Ab 1922",
  "С 1928 года": "Ab 1928",
  "С 1936 года": "Ab 1936",
  "С 1945 года": "Ab 1945",
  "Первая пятилетка началась в 1928 году, вместе со свёртыванием новой экономической политики. Коллективизация развернётся годом позже.":
    "Der erste Fünfjahrplan begann 1928, zusammen mit dem Ende der neuen Wirtschaftspolitik. Die Kollektivierung setzt ein Jahr später ein.",
  "ГУЛАГ": "Der GULAG",
  "**ГУЛАГ** — Главное управление лагерей — это система **исправительно-трудовых лагерей**, через которую за годы её существования прошли **миллионы человек**. Заключённые строили каналы, добывали золото и никель, валили лес.":
    "**GULAG** — die Hauptverwaltung der Lager — ist das System der **Besserungsarbeitslager**, durch das in den Jahren seines Bestehens **Millionen Menschen** gingen. Häftlinge bauten Kanäle, förderten Gold und Nickel und schlugen Holz.",
  "Беломорканал": "Der Weißmeerkanal",
  "Построен в 1931–1933 годах силами заключённых. Смертность на стройке была крайне высокой.":
    "1931–1933 mit der Arbeit von Häftlingen gebaut. Die Sterblichkeit auf der Baustelle war außerordentlich hoch.",
  "Колыма": "Die Kolyma",
  "Золотые прииски Дальнего Востока. Название стало нарицательным обозначением самых тяжёлых лагерей.":
    "Die Goldgruben des Fernen Ostens. Der Name wurde zum Inbegriff der härtesten Lager.",
  "Норильск": "Norilsk",
  "Город и комбинат за полярным кругом, построенные лагерным трудом.":
    "Stadt und Kombinat jenseits des Polarkreises, errichtet durch Lagerarbeit.",
  "Статья Уголовного кодекса о контрреволюционных преступлениях, по которой были осуждены миллионы.":
    "Der Artikel des Strafgesetzbuchs über konterrevolutionäre Verbrechen, nach dem Millionen verurteilt wurden.",
  "Отдельная страница — **депортации народов**. В годы войны и после неё с мест проживания были насильственно выселены целые народы: поволжские немцы, крымские татары, чеченцы, ингуши, калмыки, балкарцы и другие. Многие погибли в пути или в первые годы на новом месте.":
    "Ein eigenes Kapitel sind die **Deportationen von Völkern**. In den Kriegsjahren und danach wurden ganze Völker gewaltsam aus ihren Wohngebieten ausgesiedelt: die Wolgadeutschen, die Krimtataren, die Tschetschenen, die Inguschen, die Kalmyken, die Balkaren und andere. Viele kamen unterwegs oder in den ersten Jahren am neuen Ort um.",
  "Что такое ГУЛАГ?": "Was war der GULAG?",
  "Орган государственного планирования": "Eine staatliche Planungsbehörde",
  "Система исправительно-трудовых лагерей": "Das System der Besserungsarbeitslager",
  "Название первой пятилетки": "Der Name des ersten Fünfjahrplans",
  // ru-sssr
  "Крупная стройка на Дальнем Востоке": "Eine Großbaustelle im Fernen Osten",
  "Главное управление лагерей. Через его систему прошли миллионы заключённых, чей труд использовался на каналах, приисках и в лесной промышленности.":
    "Die Hauptverwaltung der Lager. Durch ihr System gingen Millionen Häftlinge, deren Arbeit an Kanälen, in Gruben und in der Forstwirtschaft eingesetzt wurde.",
  "Большой террор": "Der Große Terror",
  "Пик репрессий пришёлся на **1937–1938 годы**. Аресты шли по разнарядкам, дела рассматривали внесудебные **«тройки»**, приговоры выносились за минуты. По массовым операциям тех двух лет было расстреляно **несколько сотен тысяч человек**, столько же и более отправлено в лагеря.":
    "Der Höhepunkt der Repressionen lag in den Jahren **1937–1938**. Verhaftet wurde nach Planvorgaben, die Fälle verhandelten außergerichtliche **«Troikas»**, Urteile fielen in Minuten. In den Massenoperationen dieser zwei Jahre wurden **mehrere Hunderttausend Menschen** erschossen, ebenso viele und mehr in Lager gebracht.",
  "Пострадали все слои: партийные работники, командиры Красной армии, инженеры, учёные, священники, крестьяне, рабочие, представители национальных меньшинств. Одним из мест массовых расстрелов под Москвой был **Бутовский полигон**.":
    "Betroffen waren alle Schichten: Parteifunktionäre, Kommandeure der Roten Armee, Ingenieure, Wissenschaftler, Geistliche, Bauern, Arbeiter, Angehörige nationaler Minderheiten. Einer der Orte der Massenerschießungen bei Moskau war das **Butowo-Gelände**.",
  "Формально в **1936 году** была принята конституция, объявленная самой демократической в мире. Расхождение между её текстом и практикой тех же лет — один из самых наглядных примеров того, почему конституция без работающих судов остаётся бумагой.":
    "Förmlich wurde **1936** eine Verfassung angenommen, die als die demokratischste der Welt bezeichnet wurde. Der Abstand zwischen ihrem Text und der Praxis derselben Jahre ist eines der anschaulichsten Beispiele dafür, warum eine Verfassung ohne arbeitende Gerichte Papier bleibt.",
  "Как об этом помнят": "Wie daran erinnert wird",
  "На **XX съезде** партии в **1956 году** прозвучал доклад о культе личности, и началась **реабилитация** — пересмотр дел и восстановление доброго имени осуждённых. Она шла волнами и продолжалась десятилетиями.":
    "Auf dem **XX. Parteitag** **1956** wurde das Referat über den Personenkult gehalten, und die **Rehabilitierung** begann — die Überprüfung der Fälle und die Wiederherstellung des guten Namens der Verurteilten. Sie verlief in Wellen und zog sich über Jahrzehnte.",
  "**30 октября** — **День памяти жертв политических репрессий**. В **2017 году** в Москве была открыта **«Стена скорби»** — государственный памятник жертвам. Работают музеи и мемориальные комплексы на местах бывших лагерей и полигонов.":
    "Der **30. Oktober** ist der **Tag des Gedenkens an die Opfer politischer Repressionen**. **2017** wurde in Moskau die **«Mauer des Leids»** eröffnet — ein staatliches Denkmal für die Opfer. An den Orten früherer Lager und Erschießungsstätten arbeiten Museen und Gedenkstätten.",
  "Когда отмечается День памяти жертв политических репрессий?":
    "Wann wird der Tag des Gedenkens an die Opfer politischer Repressionen begangen?",
  "27 января": "27. Januar",
  "22 июня": "22. Juni",
  "30 октября": "30. Oktober",
  "30 октября. 22 июня — День памяти и скорби, связанный с началом войны, а 9 мая — День Победы: три разные памятные даты.":
    "Der 30. Oktober. Der 22. Juni ist der Tag des Gedenkens und der Trauer, der an den Kriegsbeginn erinnert, der 9. Mai der Tag des Sieges: drei verschiedene Gedenktage.",
  "Оценки числа жертв расходятся между исследователями и продолжают уточняться по мере открытия архивов. Расхождения касаются величин, а не самого факта: массовые репрессии и голод признаны и государством, и историографией.":
    "Die Schätzungen zur Zahl der Opfer gehen zwischen Forschenden auseinander und werden weiter präzisiert, je mehr Archive sich öffnen. Die Abweichungen betreffen die Größen, nicht die Tatsache selbst: die Massenrepressionen und die Hungersnot sind sowohl vom Staat als auch von der Geschichtswissenschaft anerkannt.",
  // ru-voina-i-raspad
  "Почему это важно: война остаётся главным событием в народной памяти, а распад Союза — ближайшей к нам исторической границей. Между ними умещается почти полвека, которое объясняет сегодняшнюю карту.":
    "Warum das wichtig ist: der Krieg bleibt das wichtigste Ereignis im Gedächtnis des Volkes, und der Zerfall der Union ist die uns nächste historische Grenze. Dazwischen liegt fast ein halbes Jahrhundert, das die heutige Karte erklärt.",
  "22 июня 1941 года": "Der 22. Juni 1941",
  "**22 июня 1941 года** Германия напала на Советский Союз. Началась **Великая Отечественная война** — так в России называют часть Второй мировой, шедшую на советско-германском фронте. Первые месяцы обернулись катастрофой: огромные потери, окружения, отступление до Москвы и Волги.":
    "Am **22. Juni 1941** überfiel Deutschland die Sowjetunion. Es begann der **Große Vaterländische Krieg** — so heißt in Russland der Teil des Zweiten Weltkriegs, der an der deutsch-sowjetischen Front geführt wurde. Die ersten Monate wurden zur Katastrophe: gewaltige Verluste, Einkesselungen, Rückzug bis Moskau und an die Wolga.",
  "Блокада Ленинграда": "Die Blockade von Leningrad",
  "С сентября 1941 по январь 1944 года, почти 900 дней. Сотни тысяч жителей погибли, большинство — от голода.":
    "Von September 1941 bis Januar 1944, fast 900 Tage. Hunderttausende Einwohner kamen um, die meisten durch Hunger.",
  "Битва за Москву": "Die Schlacht um Moskau",
  "Зимой 1941–1942 годов немецкое наступление на столицу было остановлено и отброшено.":
    "Im Winter 1941/42 wurde der deutsche Vorstoß auf die Hauptstadt aufgehalten und zurückgeworfen.",
  "Сталинград": "Stalingrad",
  "С лета 1942 по февраль 1943 года. Окружение и капитуляция немецкой армии стали переломом всей войны.":
    "Vom Sommer 1942 bis zum Februar 1943. Einkesselung und Kapitulation der deutschen Armee wurden zur Wende des ganzen Krieges.",
  "Курская дуга": "Der Kursker Bogen",
  "Лето 1943 года, крупнейшее танковое сражение. После него инициатива уже не возвращалась к противнику.":
    "Sommer 1943, die größte Panzerschlacht. Danach kam die Initiative nicht mehr an den Gegner zurück.",
  "Война закончилась **9 мая 1945 года**. Потери Советского Союза оцениваются примерно в **двадцать семь миллионов** человек, большую часть которых составило мирное население. На оккупированной территории проводилось уничтожение еврейского населения — **Холокост**; одним из его самых известных мест стал **Бабий Яр** под Киевом.":
    "Der Krieg endete am **9. Mai 1945**. Die Verluste der Sowjetunion werden auf etwa **siebenundzwanzig Millionen** Menschen geschätzt, mehrheitlich Zivilbevölkerung. Auf dem besetzten Gebiet wurde die jüdische Bevölkerung vernichtet — der **Holocaust**; einer seiner bekanntesten Orte wurde **Babi Jar** bei Kiew.",
  "Когда началась Великая Отечественная война?": "Wann begann der Große Vaterländische Krieg?",
  "1 сентября 1939 года": "Am 1. September 1939",
  "7 ноября 1941 года": "Am 7. November 1941",
  "9 мая 1945 года": "Am 9. Mai 1945",
  "22 июня 1941 года. 1 сентября 1939-го началась Вторая мировая война, а 9 мая 1945-го Великая Отечественная закончилась.":
    "Am 22. Juni 1941. Am 1. September 1939 begann der Zweite Weltkrieg, und am 9. Mai 1945 endete der Große Vaterländische.",
  "После войны": "Nach dem Krieg",
  "Страна восстанавливалась из руин: были разрушены тысячи городов и десятки тысяч сёл. В **1949 году** СССР испытал атомную бомбу, и началось противостояние двух блоков, названное **холодной войной**.":
    "Das Land baute sich aus Trümmern wieder auf: zerstört waren Tausende Städte und Zehntausende Dörfer. **1949** erprobte die Sowjetunion eine Atombombe, und die Gegnerschaft zweier Blöcke begann, die man den **Kalten Krieg** nannte.",
  "После смерти **Сталина в 1953 году** наступила **оттепель**: XX съезд 1956 года, массовая реабилитация, возвращение людей из лагерей, ослабление цензуры. В **1957 году** был запущен первый искусственный спутник Земли, а **12 апреля 1961 года** **Юрий Гагарин** совершил первый полёт человека в космос.":
    "Nach **Stalins Tod 1953** kam das **Tauwetter**: der XX. Parteitag von 1956, die massenhafte Rehabilitierung, die Rückkehr der Menschen aus den Lagern, das Nachlassen der Zensur. **1957** wurde der erste künstliche Erdsatellit gestartet, und am **12. April 1961** unternahm **Juri Gagarin** den ersten Flug eines Menschen in den Weltraum.",
  "**Карибский кризис 1962 года** подвёл мир к грани ядерной войны и закончился взаимными уступками. Затем последовали два десятилетия, которые позже назовут **застоем**: стабильность, рост нефтяных доходов и постепенное отставание экономики. С **1979 по 1989 год** шла война в **Афганистане**.":
    "Die **Kubakrise von 1962** führte die Welt an den Rand eines Atomkriegs und endete mit gegenseitigen Zugeständnissen. Danach folgten zwei Jahrzehnte, die man später **Stagnation** nennen wird: Stabilität, wachsende Öleinnahmen und ein allmähliches Zurückfallen der Wirtschaft. Von **1979 bis 1989** dauerte der Krieg in **Afghanistan**.",
  "Сколько дней продолжалась блокада Ленинграда?": "Wie lange dauerte die Blockade von Leningrad?",
  "Около ста дней": "Etwa hundert Tage",
  "Около трёхсот дней": "Etwa dreihundert Tage",
  "Почти девятьсот дней": "Fast neunhundert Tage",
  "Более трёх лет": "Mehr als drei Jahre",
  "С сентября 1941 по январь 1944 года — почти девятьсот дней. Погибли сотни тысяч жителей, подавляющее большинство от голода.":
    "Von September 1941 bis Januar 1944 — fast neunhundert Tage. Hunderttausende Einwohner kamen um, die weit überwiegende Mehrheit durch Hunger.",
  "Перестройка": "Die Perestroika",
  "В **1985 году** к власти пришёл **Михаил Горбачёв** и объявил **перестройку** и **гласность**. Открылись архивы, вернулись запрещённые книги, началось обсуждение прошлого. В **1986 году** произошла авария на **Чернобыльской АЭС**.":
    "**1985** kam **Michail Gorbatschow** an die Macht und rief **Perestroika** und **Glasnost** aus. Archive öffneten sich, verbotene Bücher kehrten zurück, eine Auseinandersetzung mit der Vergangenheit begann. **1986** ereignete sich der Unfall im **Kernkraftwerk Tschernobyl**.",
  "В **1989 году** прошли первые за десятилетия выборы с несколькими кандидатами, а заседания Съезда народных депутатов транслировались по телевидению. В том же году пала Берлинская стена, и социалистические режимы в Восточной Европе сменились один за другим.":
    "**1989** fanden die ersten Wahlen seit Jahrzehnten mit mehreren Kandidaten statt, und die Sitzungen des Kongresses der Volksdeputierten wurden im Fernsehen übertragen. Im selben Jahr fiel die Berliner Mauer, und die sozialistischen Regime in Osteuropa wechselten eines nach dem anderen.",
  "1991 год": "Das Jahr 1991",
  "**12 июня 1990 года** РСФСР приняла **Декларацию о государственном суверенитете** — дата, ставшая Днём России. **12 июня 1991 года** прошли первые прямые выборы **Президента РСФСР**, на которых победил **Борис Ельцин**.":
    "Am **12. Juni 1990** nahm die RSFSR die **Erklärung über die staatliche Souveränität** an — das Datum, aus dem der Tag Russlands wurde. Am **12. Juni 1991** fand die erste direkte Wahl des **Präsidenten der RSFSR** statt, die **Boris Jelzin** gewann.",
  "В **августе 1991 года** попытка государственного переворота провалилась за три дня, и после неё союзные структуры быстро утратили влияние. **8 декабря** руководители России, Украины и Белоруссии подписали **Беловежские соглашения**, а **25 декабря 1991 года** **Советский Союз прекратил существование**.":
    "Im **August 1991** scheiterte ein Putschversuch nach drei Tagen, und danach verloren die Unionsstrukturen rasch an Einfluss. Am **8. Dezember** unterzeichneten die Führungen Russlands, der Ukraine und Belorusslands die **Vereinbarungen von Beloweschje**, und am **25. Dezember 1991** **hörte die Sowjetunion auf zu bestehen**.",
  "Дальше — тяжёлые девяностые: **либерализация цен**, приватизация, обвал производства, **конституционный кризис 1993 года** и принятая по его итогам **Конституция**, **дефолт 1998 года**. С начала двухтысячных экономика стабилизировалась, а государственные институты приобрели нынешний вид.":
    "Danach kamen die schweren neunziger Jahre: **Preisfreigabe**, Privatisierung, Einbruch der Produktion, die **Verfassungskrise von 1993** und die als ihr Ergebnis angenommene **Verfassung**, der **Staatsbankrott von 1998**. Ab Anfang der zweitausender Jahre stabilisierte sich die Wirtschaft, und die staatlichen Institutionen nahmen ihre heutige Gestalt an.",
  "В каком году прекратил существование Советский Союз?":
    "In welchem Jahr hörte die Sowjetunion auf zu bestehen?",
  "В 1989 году": "1989",
  "В 1990 году": "1990",
  "В 1991 году": "1991",
  "В 1993 году": "1993",
  "25 декабря 1991 года, после Беловежских соглашений 8 декабря. 1993-й — год принятия действующей Конституции.":
    "Am 25. Dezember 1991, nach den Vereinbarungen von Beloweschje vom 8. Dezember. 1993 ist das Jahr, in dem die geltende Verfassung angenommen wurde.",
  "**Вторая мировая** и **Великая Отечественная** — не одно и то же по срокам. Первая шла с 1939 по 1945 год, вторая — с 22 июня 1941 по 9 мая 1945-го, на советско-германском фронте.":
    "**Zweiter Weltkrieg** und **Großer Vaterländischer Krieg** decken nicht dieselben Jahre ab. Der erste dauerte von 1939 bis 1945, der zweite vom 22. Juni 1941 bis zum 9. Mai 1945, an der deutsch-sowjetischen Front.",
  // ru-geografiya
  "Почему это важно: размеры страны меняют самые простые вещи. Когда в Калининграде утро, на Камчатке уже вечер того же дня, и расписание поездов приходится писать по одному времени на всю страну.":
    "Warum das wichtig ist: die Größe des Landes verändert die einfachsten Dinge. Wenn in Kaliningrad Morgen ist, ist auf Kamtschatka schon Abend desselben Tages, und Zugfahrpläne müssen nach einer einzigen Zeit für das ganze Land geschrieben werden.",
  "Самая большая страна": "Das größte Land der Welt",
  "Площадь России — более **семнадцати миллионов квадратных километров**, около **одной восьмой** всей земной суши. Протяжённость с запада на восток — почти **десять тысяч километров**, с севера на юг — около четырёх тысяч.":
    "Die Fläche Russlands beträgt mehr als **siebzehn Millionen Quadratkilometer**, etwa **ein Achtel** des gesamten Festlands der Erde. Von Westen nach Osten misst es fast **zehntausend Kilometer**, von Norden nach Süden rund viertausend.",
  "Страна лежит **в двух частях света**. Условной границей между Европой и Азией считается **Уральский хребет**, и отсюда получается разрыв, который стоит запомнить: около **трёх четвертей территории** находится в Азии, а около **трёх четвертей населения** — в европейской части.":
    "Das Land liegt **in zwei Erdteilen**. Als gedachte Grenze zwischen Europa und Asien gilt der **Ural**, und daraus ergibt sich ein Missverhältnis, das man sich merken sollte: rund **drei Viertel der Fläche** liegen in Asien, aber rund **drei Viertel der Bevölkerung** im europäischen Teil.",
  "Одиннадцать часовых поясов": "Elf Zeitzonen",
  "От **Калининграда** до **Камчатки** и **Чукотки** страна занимает **одиннадцать часовых поясов**. Разница между Москвой и Камчаткой составляет **девять часов**: когда в столице девять утра, там уже вечер.":
    "Von **Kaliningrad** bis **Kamtschatka** und **Tschukotka** umspannt das Land **elf Zeitzonen**. Der Unterschied zwischen Moskau und Kamtschatka beträgt **neun Stunden**: wenn es in der Hauptstadt neun Uhr morgens ist, ist es dort schon Abend.",
  "Число поясов менялось. В **2010 году** их сократили до девяти, а в **2014-м** вернули одиннадцать. Тогда же страна перестала переводить часы: сезонного времени в России больше нет.":
    "Die Zahl der Zonen hat sich verändert. **2010** wurde sie auf neun verringert, **2014** kehrte man zu elf zurück. Damals hörte das Land auch auf, die Uhren umzustellen: eine Sommerzeit gibt es in Russland nicht mehr.",
  "Московское время": "Die Moskauer Zeit",
  "Точка отсчёта для всей страны. Расписания железных дорог долгое время писались только по нему.":
    "Der Bezugspunkt für das ganze Land. Eisenbahnfahrpläne wurden lange ausschließlich nach ihr geschrieben.",
  "Калининград": "Kaliningrad",
  "Самый западный регион, и единственный, где время на час меньше московского.":
    "Die westlichste Region, und die einzige, in der die Zeit eine Stunde hinter der Moskauer liegt.",
  "Камчатка и Чукотка": "Kamtschatka und Tschukotka",
  "Самый восточный край: плюс девять часов к Москве. Новый год здесь встречают первыми в стране.":
    "Der östlichste Rand: neun Stunden vor Moskau. Neujahr wird hier als Erstes im Land begangen.",
  "Без перевода часов": "Ohne Zeitumstellung",
  "С 2014 года сезонного перехода нет. Разница с Европой поэтому меняется дважды в год — за счёт соседей, а не нас.":
    "Seit 2014 gibt es keinen saisonalen Wechsel mehr. Der Abstand zu Europa ändert sich deshalb zweimal im Jahr — durch die Nachbarn, nicht durch uns.",
  "Сколько часовых поясов в России?": "Wie viele Zeitzonen hat Russland?",
  "Семь": "Sieben",
  "Пятнадцать": "Fünfzehn",
  "Одиннадцать. Девять было с 2010 по 2014 год, после чего прежнее число вернули. Разница между Москвой и Камчаткой — девять часов.":
    "Elf. Neun waren es von 2010 bis 2014, danach kehrte die frühere Zahl zurück. Der Unterschied zwischen Moskau und Kamtschatka beträgt neun Stunden.",
  "Соседи": "Die Nachbarn",
  "У России **сухопутные границы с четырнадцатью государствами** — по этому показателю она делит первое место в мире с Китаем. На западе это Норвегия, Финляндия, Эстония, Латвия, Литва, Польша и Белоруссия, на юго-западе Украина, на юге Грузия, Азербайджан и Казахстан, на юго-востоке Китай, Монголия и КНДР.":
    "Russland hat **Landgrenzen zu vierzehn Staaten** — damit teilt es sich den ersten Platz der Welt mit China. Im Westen sind das Norwegen, Finnland, Estland, Lettland, Litauen, Polen und Belorussland, im Südwesten die Ukraine, im Süden Georgien, Aserbaidschan und Kasachstan, im Südosten China, die Mongolei und Nordkorea.",
  "Есть и **морские соседи**: **США** — через Берингов пролив, где между островами Ратманова и Крузенштерна около четырёх километров, — и **Япония**.":
    "Es gibt auch **Seenachbarn**: die **USA** — über die Beringstraße, wo zwischen der Ratmanow- und der Kruzenstern-Insel etwa vier Kilometer liegen — und **Japan**.",
  "**Калининградская область** — **эксклав**: она не имеет сухопутной связи с остальной страной и окружена Польшей, Литвой и Балтийским морем.":
    "Das **Gebiet Kaliningrad** ist eine **Exklave**: es hat keine Landverbindung zum übrigen Land und ist von Polen, Litauen und der Ostsee umgeben.",
  "По какому хребту проходит условная граница между Европой и Азией?":
    "Entlang welchen Gebirges verläuft die gedachte Grenze zwischen Europa und Asien?",
  "По Кавказскому": "Entlang des Kaukasus",
  "По Уральскому": "Entlang des Urals",
  "По Алтайскому": "Entlang des Altai",
  "По Саянам": "Entlang der Sajanen",
  "По Уралу. Отсюда и разрыв: три четверти территории в Азии, три четверти населения — в европейской части.":
    "Entlang des Urals. Daher das Missverhältnis: drei Viertel der Fläche in Asien, drei Viertel der Bevölkerung im europäischen Teil.",
  "Крайние точки": "Die äußersten Punkte",
  "Самая северная материковая точка — **мыс Челюскин** на Таймыре, самая южная — гора **Базардюзю** на Кавказе, самая западная — побережье Балтийского моря в **Калининградской области**, самая восточная — **остров Ратманова** в Беринговом проливе.":
    "Der nördlichste Festlandpunkt ist das **Kap Tscheljuskin** auf Taimyr, der südlichste der Berg **Basardüsü** im Kaukasus, der westlichste die Ostseeküste im **Gebiet Kaliningrad**, der östlichste die **Ratmanow-Insel** in der Beringstraße.",
  "Население страны — около **ста сорока шести миллионов** человек, и распределено оно крайне неравномерно: густо на юго-западе и вдоль Транссиба, почти пусто на севере Сибири и Дальнего Востока.":
    "Die Bevölkerung des Landes beträgt rund **einhundertsechsundvierzig Millionen** Menschen und ist äußerst ungleich verteilt: dicht im Südwesten und entlang der Transsibirischen Eisenbahn, fast leer im Norden Sibiriens und im Fernen Osten.",
  "Какой регион России является эксклавом?": "Welche Region Russlands ist eine Exklave?",
  "Камчатский край": "Die Region Kamtschatka",
  "Калининградская область": "Das Gebiet Kaliningrad",
  "Сахалинская область": "Das Gebiet Sachalin",
  "Республика Крым": "Die Republik Krim",
  "Калининградская область не имеет сухопутной связи с остальной страной. Сахалин и Камчатка отделены морем, но эксклавами не являются.":
    "Das Gebiet Kaliningrad hat keine Landverbindung zum übrigen Land. Sachalin und Kamtschatka sind durch das Meer getrennt, aber keine Exklaven.",
  "Часовой пояс и **административная граница** не всегда совпадают: время устанавливается для каждого субъекта отдельно, и потому линии на карте часовых поясов идут не по меридианам, а по границам регионов.":
    "Zeitzone und **Verwaltungsgrenze** fallen nicht immer zusammen: die Zeit wird für jedes Subjekt einzeln festgelegt, und deshalb verlaufen die Linien auf der Zeitzonenkarte nicht entlang der Längengrade, sondern entlang der Regionsgrenzen.",
  // ru-priroda
  "Почему это важно: страна такой длины пересекает почти все природные зоны Северного полушария. В один и тот же день здесь бывает минус пятьдесят и плюс двадцать пять.":
    "Warum das wichtig ist: ein Land dieser Länge durchquert fast alle Vegetationszonen der Nordhalbkugel. Am selben Tag herrschen hier minus fünfzig und plus fünfundzwanzig Grad.",
  "Зоны с севера на юг": "Die Zonen von Norden nach Süden",
  "Двигаясь с севера на юг, страна проходит **арктические пустыни**, **тундру**, **лесотундру**, **тайгу**, **смешанные и широколиственные леса**, **лесостепь**, **степь** и **полупустыни** у Каспия. Ни одна другая страна не пересекает столько зон подряд.":
    "Von Norden nach Süden durchquert das Land **arktische Wüsten**, **Tundra**, **Waldtundra**, **Taiga**, **Misch- und Laubwälder**, **Waldsteppe**, **Steppe** und **Halbwüsten** am Kaspischen Meer. Kein anderes Land durchquert so viele Zonen hintereinander.",
  "**Тайга** — крупнейший лесной массив планеты. На Россию приходится около **пятой части всех лесов мира**, и по площади леса она занимает первое место. Другая величина того же порядка: **вечная мерзлота** лежит примерно под **двумя третями** территории, и на ней строят на сваях, чтобы тепло здания не растопило грунт.":
    "Die **Taiga** ist das größte Waldgebiet der Erde. Auf Russland entfällt rund **ein Fünftel aller Wälder der Welt**, und nach Waldfläche steht es an erster Stelle. Eine andere Größe derselben Ordnung: der **Dauerfrostboden** liegt unter etwa **zwei Dritteln** der Fläche, und darauf baut man auf Pfählen, damit die Wärme des Gebäudes den Untergrund nicht auftaut.",
  "Какую примерно долю территории России занимает вечная мерзлота?":
    "Welchen Anteil der Fläche Russlands nimmt der Dauerfrostboden etwa ein?",
  "Около одной десятой": "Etwa ein Zehntel",
  "Около трети": "Etwa ein Drittel",
  "Около двух третей": "Etwa zwei Drittel",
  "Почти всю": "Fast die ganze",
  "Около двух третей. Поэтому в Норильске, Якутске и других северных городах дома ставят на сваи: иначе тепло здания растопит грунт под ним.":
    "Etwa zwei Drittel. Deshalb stellt man in Norilsk, Jakutsk und anderen nördlichen Städten die Häuser auf Pfähle: sonst taut die Wärme des Gebäudes den Boden darunter auf.",
  "Горы": "Die Gebirge",
  "Урал": "Der Ural",
  "Невысокий древний хребет, разделяющий Европу и Азию. Богат рудами, и на них выросла уральская промышленность.":
    "Ein niedriges altes Gebirge, das Europa und Asien trennt. Reich an Erzen, und auf ihnen ist die Industrie des Urals gewachsen.",
  "Кавказ": "Der Kaukasus",
  "Самые высокие горы страны. Эльбрус, 5642 метра, — высшая точка России и всей Европы.":
    "Die höchsten Berge des Landes. Der Elbrus, 5642 Meter, ist der höchste Punkt Russlands und ganz Europas.",
  "Алтай и Саяны": "Altai und Sajanen",
  "Горы юга Сибири, с ледниками, степями в долинах и одним из самых чистых воздухов в стране.":
    "Die Gebirge Südsibiriens, mit Gletschern, Steppen in den Tälern und einer der saubersten Luft des Landes.",
  "Камчатка": "Kamtschatka",
  "Действующие вулканы, около трёх десятков. Ключевская Сопка — высочайший действующий вулкан Евразии.":
    "Tätige Vulkane, rund drei Dutzend. Die Kljutschewskaja Sopka ist der höchste tätige Vulkan Eurasiens.",
  "Какая гора является высшей точкой России?": "Welcher Berg ist der höchste Punkt Russlands?",
  "Ключевская Сопка": "Die Kljutschewskaja Sopka",
  "Эльбрус": "Der Elbrus",
  "Белуха": "Die Belucha",
  "Народная": "Die Narodnaja",
  "Эльбрус на Кавказе, 5642 метра, — высшая точка и России, и Европы. Белуха — высшая точка Алтая, Народная — Урала, Ключевская Сопка — вулкан Камчатки.":
    "Der Elbrus im Kaukasus, 5642 Meter, ist der höchste Punkt Russlands und Europas. Die Belucha ist der höchste Punkt des Altai, die Narodnaja der des Urals, die Kljutschewskaja Sopka ein Vulkan auf Kamtschatka.",
  "Реки и озёра": "Flüsse und Seen",
  "Крупнейшие реки текут по Сибири на север: **Обь**, **Енисей**, **Лена**. Енисей — самый полноводный. На Дальнем Востоке течёт **Амур**, по которому частично проходит граница с Китаем.":
    "Die größten Flüsse fließen durch Sibirien nach Norden: **Ob**, **Jenissei**, **Lena**. Der Jenissei führt am meisten Wasser. Im Fernen Osten fließt der **Amur**, an dem die Grenze zu China teilweise verläuft.",
  "В европейской части главная река — **Волга**: около **трёх с половиной тысяч километров**, самая длинная река Европы. Она впадает не в океан, а в **Каспийское море**, замкнутый водоём, крупнейший на планете.":
    "Im europäischen Teil ist die **Wolga** der Hauptfluss: rund **dreieinhalbtausend Kilometer**, der längste Fluss Europas. Sie mündet nicht in einen Ozean, sondern in das **Kaspische Meer**, ein abflussloses Gewässer und das größte der Erde.",
  "**Байкал** — **самое глубокое озеро мира**: **1642 метра**. В нём сосредоточено около **пятой части** мировых запасов поверхностной пресной воды, и он внесён в список Всемирного наследия ЮНЕСКО. **Ладожское озеро** — крупнейшее пресноводное озеро Европы.":
    "Der **Baikal** ist der **tiefste See der Welt**: **1642 Meter**. In ihm liegt etwa **ein Fünftel** der weltweiten Vorräte an oberflächlichem Süßwasser, und er steht auf der Welterbeliste der UNESCO. Der **Ladogasee** ist der größte Süßwassersee Europas.",
  "Какое озеро является самым глубоким в мире?": "Welcher See ist der tiefste der Welt?",
  "Ладожское": "Der Ladogasee",
  "Каспийское": "Das Kaspische Meer",
  "Байкал": "Der Baikal",
  "Онежское": "Der Onegasee",
  "Байкал, 1642 метра, и в нём около пятой части мировой поверхностной пресной воды. Каспий — крупнейший замкнутый водоём, а Ладога — крупнейшее пресное озеро Европы.":
    "Der Baikal, 1642 Meter, und in ihm liegt etwa ein Fünftel des oberflächlichen Süßwassers der Welt. Das Kaspische Meer ist das größte abflusslose Gewässer, die Ladoga der größte Süßwassersee Europas.",
  "Климат": "Das Klima",
  "Преобладает **умеренно континентальный** климат, в Сибири он становится **резко континентальным**: зима очень холодная, лето жаркое, разница между ними доходит до шестидесяти градусов. На Дальнем Востоке климат **муссонный**, с дождливым летом, на побережье Чёрного моря около Сочи — **субтропический**, а на севере **арктический**.":
    "Vorherrschend ist ein **gemäßigt kontinentales** Klima, in Sibirien wird es **stark kontinental**: sehr kalter Winter, heißer Sommer, mit einem Unterschied von bis zu sechzig Grad. Im Fernen Osten ist das Klima **monsunisch**, mit regnerischem Sommer, an der Schwarzmeerküste bei Sotschi **subtropisch** und im Norden **arktisch**.",
  "**Оймякон** и **Верхоянск** в Якутии оспаривают звание **полюса холода** Северного полушария: там фиксировали температуры около минус шестидесяти семи градусов. При этом в тот же январский день в Сочи может быть плюс десять.":
    "**Oimjakon** und **Werchojansk** in Jakutien streiten um den Titel des **Kältepols** der Nordhalbkugel: dort wurden Temperaturen um minus siebenundsechzig Grad gemessen. Am selben Januartag kann es in Sotschi plus zehn haben.",
  "Что охраняют": "Was geschützt wird",
  "В стране работают **заповедники**, **национальные парки** и заказники; первый заповедник, Баргузинский на Байкале, был создан ещё в 1917 году. Редкие виды заносятся в **Красную книгу**. Среди самых известных — **амурский тигр**, **белый медведь**, **зубр** и **дальневосточный леопард**.":
    "Im Land arbeiten **Naturreservate**, **Nationalparks** und Schutzgebiete; das erste Reservat, das Barguzin-Reservat am Baikal, entstand schon 1917. Seltene Arten werden in das **Rote Buch** eingetragen. Zu den bekanntesten gehören der **Amurtiger**, der **Eisbär**, der **Wisent** und der **Amurleopard**.",
  "**Каспийское море** называется морем, но по сути это **озеро** — крупнейший в мире замкнутый водоём, не связанный с океаном. Его правовой статус десятилетиями обсуждался прикаспийскими государствами именно из-за этой двойственности.":
    "Das **Kaspische Meer** heißt Meer, ist aber im Grunde ein **See** — das größte abflusslose Gewässer der Welt, ohne Verbindung zum Ozean. Genau wegen dieser Doppelnatur wurde sein Rechtsstatus jahrzehntelang zwischen den Anrainerstaaten verhandelt.",
  // ru-subekty
  "Почему это важно: Россия — федерация, и её части называются по-разному не случайно. У республики есть то, чего нет у области, и понимание этой разницы объясняет карту.":
    "Warum das wichtig ist: Russland ist eine Föderation, und ihre Teile heißen nicht zufällig verschieden. Eine Republik hat etwas, das ein Gebiet nicht hat, und wer diesen Unterschied versteht, versteht die Karte.",
  "Шесть видов субъектов": "Sechs Arten von Subjekten",
  "**Статья 65** Конституции содержит перечень субъектов Федерации; на сегодня их **восемьдесят девять**. Все они, по **статье 5**, **равноправны** в отношениях с федеральными органами власти, но исторические названия и объём собственных институтов различаются.":
    "**Artikel 65** der Verfassung enthält das Verzeichnis der Subjekte der Föderation; heute sind es **neunundachtzig**. Alle sind nach **Artikel 5** in den Beziehungen zu den föderalen Organen **gleichberechtigt**, doch die historischen Bezeichnungen und der Umfang der eigenen Institutionen sind verschieden.",
  "Республика": "Die Republik",
  "Имеет собственную конституцию и вправе устанавливать свои государственные языки наряду с русским.":
    "Hat eine eigene Verfassung und darf neben dem Russischen eigene Staatssprachen festlegen.",
  "Край и область": "Region und Gebiet",
  "Самые многочисленные виды. Имеют устав, а не конституцию, и одну государственную языковую норму — русскую.":
    "Die häufigsten Arten. Sie haben ein Statut, keine Verfassung, und eine staatliche Sprachnorm — die russische.",
  "Город федерального значения": "Stadt von föderaler Bedeutung",
  "Москва, Санкт-Петербург и Севастополь: города, которые сами являются субъектами Федерации.":
    "Moskau, Sankt Petersburg und Sewastopol: Städte, die selbst Subjekte der Föderation sind.",
  "Автономная область и автономные округа": "Autonomes Gebiet und autonome Kreise",
  "Автономная область одна — Еврейская. Автономные округа выделяются по территориям коренных народов Севера.":
    "Ein autonomes Gebiet gibt es nur, das Jüdische. Die autonomen Kreise sind nach den Siedlungsgebieten der indigenen Völker des Nordens ausgewiesen.",
  "Различие между **конституцией** республики и **уставом** края или области — не только в названии документа. Республики появились там, где исторически жил один из народов страны, и право устанавливать **государственные языки** есть именно у них: татарский в Татарстане, якутский в Якутии, башкирский в Башкортостане.":
    "Der Unterschied zwischen der **Verfassung** einer Republik und dem **Statut** einer Region oder eines Gebiets liegt nicht nur im Namen des Dokuments. Republiken entstanden dort, wo historisch eines der Völker des Landes lebte, und das Recht, **Staatssprachen** festzulegen, haben genau sie: Tatarisch in Tatarstan, Jakutisch in Jakutien, Baschkirisch in Baschkortostan.",
  "Что есть у республики, чего нет у области?": "Was hat eine Republik, das ein Gebiet nicht hat?",
  "Собственная конституция и право устанавливать государственные языки":
    "Eine eigene Verfassung und das Recht, Staatssprachen festzulegen",
  "Право издавать законы": "Das Recht, Gesetze zu erlassen",
  "Собственный бюджет": "Einen eigenen Haushalt",
  "Представительство в Совете Федерации": "Vertretung im Föderationsrat",
  "Законы, бюджет и по два сенатора есть у каждого субъекта. Различают республику именно конституция вместо устава и право на свои государственные языки.":
    "Gesetze, Haushalt und je zwei Senatoren hat jedes Subjekt. Die Republik unterscheiden gerade die Verfassung statt des Statuts und das Recht auf eigene Staatssprachen.",
  "Кто что решает": "Wer was entscheidet",
  "**Статья 71** перечисляет **исключительное ведение Федерации**: оборона и безопасность, внешняя политика, гражданство, денежная эмиссия, уголовное и гражданское законодательство, федеральный бюджет. Здесь субъекты не законодательствуют вовсе.":
    "**Artikel 71** zählt die **ausschließliche Zuständigkeit der Föderation** auf: Verteidigung und Sicherheit, Außenpolitik, Staatsangehörigkeit, Geldausgabe, Straf- und Zivilrecht, föderaler Haushalt. Hier erlassen die Subjekte überhaupt keine Gesetze.",
  "**Статья 72** называет **совместное ведение**: образование, здравоохранение, культура, природопользование, административное и трудовое законодательство. Здесь Федерация задаёт общие рамки, а субъект принимает свои законы внутри них.":
    "**Artikel 72** nennt die **gemeinsame Zuständigkeit**: Bildung, Gesundheit, Kultur, Naturnutzung, Verwaltungs- und Arbeitsrecht. Hier setzt die Föderation den Rahmen, und das Subjekt beschließt darin seine eigenen Gesetze.",
  "А **статья 73** говорит коротко: **вне этих двух списков** субъекты обладают **всей полнотой государственной власти**. Логика та же, что в испанском или немецком федерализме: перечисляется то, что забирает центр, остальное остаётся регионам.":
    "Und **Artikel 73** sagt es kurz: **außerhalb dieser beiden Listen** haben die Subjekte die **volle Staatsgewalt**. Die Logik ist dieselbe wie im spanischen oder deutschen Föderalismus: aufgezählt wird, was das Zentrum an sich zieht, der Rest bleibt bei den Regionen.",
  "Как устроен субъект": "Wie ein Subjekt aufgebaut ist",
  "У каждого есть **законодательное собрание** — оно может называться думой, советом, хуралом, курултаем, — **высшее должностное лицо**, чаще всего **губернатор** или **глава республики**, и своё **правительство**. Есть и свой **верховный, краевой или областной суд**, входящий в общую федеральную судебную систему.":
    "Jedes hat eine **gesetzgebende Versammlung** — sie kann Duma, Rat, Chural oder Kurultai heißen —, ein **höchstes Amt**, meist ein **Gouverneur** oder ein **Republikoberhaupt**, und eine eigene **Regierung**. Dazu ein eigenes **oberstes, Regions- oder Gebietsgericht**, das zum gemeinsamen föderalen Gerichtssystem gehört.",
  "Отдельно стоит запомнить: **федеральные округа** — их восемь, и они появились указом Президента в **2000 году** — **не являются субъектами** Федерации и не упомянуты в Конституции. Это способ организации федеральных органов на местах, а не уровень власти.":
    "Eigens zu merken: die **föderalen Bezirke** — es sind acht, und sie entstanden **2000** durch einen Erlass des Präsidenten — sind **keine Subjekte** der Föderation und in der Verfassung nicht erwähnt. Sie sind eine Form, die föderalen Behörden vor Ort zu ordnen, keine Ebene der Staatsgewalt.",
  "Являются ли федеральные округа субъектами Федерации?":
    "Sind die föderalen Bezirke Subjekte der Föderation?",
  "Да, это самый крупный вид субъекта": "Ja, es ist die größte Art von Subjekt",
  "Нет: они не упомянуты в Конституции и служат для организации федеральных органов":
    "Nein: sie sind in der Verfassung nicht erwähnt und dienen der Ordnung der föderalen Behörden",
  "Да, с 2000 года": "Ja, seit 2000",
  // ru-subekty
  "Только Центральный федеральный округ": "Nur der Zentrale föderale Bezirk",
  "Округа введены указом Президента в 2000 году и в Конституции их нет. Субъекты перечислены в статье 65, и федеральных округов в этом перечне не значится.":
    "Die Bezirke wurden 2000 durch einen Erlass des Präsidenten eingeführt und stehen nicht in der Verfassung. Die Subjekte sind in Artikel 65 aufgezählt, und föderale Bezirke kommen in dieser Liste nicht vor.",
  "Карта не всегда была такой": "Die Karte sah nicht immer so aus",
  "Число субъектов менялось. В **2000-е годы** прошло **укрупнение регионов**: несколько автономных округов объединились с краями и областями, внутри которых находились, и число субъектов сократилось. Каждое такое объединение проходило через **референдум** в обоих регионах.":
    "Die Zahl der Subjekte hat sich verändert. In den **2000er Jahren** kam es zur **Zusammenlegung von Regionen**: mehrere autonome Kreise schlossen sich mit den Regionen und Gebieten zusammen, in denen sie lagen, und die Zahl der Subjekte sank. Jede solche Vereinigung ging durch ein **Referendum** in beiden Regionen.",
  "Сколько видов субъектов Федерации предусматривает Конституция?":
    "Wie viele Arten von Subjekten der Föderation sieht die Verfassung vor?",
  "Три": "Drei",
  "Четыре": "Vier",
  "Шесть": "Sechs",
  "Восемь": "Acht",
  "Республика, край, область, город федерального значения, автономная область и автономный округ. Восемь — это число федеральных округов, которые субъектами не являются.":
    "Republik, Region, Gebiet, Stadt von föderaler Bedeutung, autonomes Gebiet und autonomer Kreis. Acht ist die Zahl der föderalen Bezirke, die keine Subjekte sind.",
  "**Область** и **автономный округ** — разные виды субъектов, и путать их не стоит. Автономные округа выделялись по территориям коренных народов Севера, и некоторые из них до сих пор входят в состав области, оставаясь при этом самостоятельными субъектами.":
    "**Gebiet** und **autonomer Kreis** sind verschiedene Arten von Subjekten und sollten nicht verwechselt werden. Autonome Kreise wurden nach den Siedlungsgebieten der indigenen Völker des Nordens ausgewiesen, und einige gehören bis heute zu einem Gebiet und sind dabei doch selbstständige Subjekte.",
  // ru-goroda
  "Почему это важно: почти все крупные города страны стоят в европейской части или вдоль одной железной дороги. Карта городов — это карта того, где людям было удобно жить и работать.":
    "Warum das wichtig ist: fast alle großen Städte des Landes stehen im europäischen Teil oder entlang einer einzigen Eisenbahnlinie. Die Karte der Städte ist die Karte davon, wo es sich gut leben und arbeiten ließ.",
  "Две столицы": "Zwei Hauptstädte",
  "**Москва** — столица и крупнейший город страны: около **тринадцати миллионов** жителей, самый населённый город Европы. Здесь **Кремль** и **Красная площадь**, внесённые в список ЮНЕСКО, и **метрополитен**, открытый в **1935 году** и знаменитый оформлением станций.":
    "**Moskau** ist Hauptstadt und größte Stadt des Landes: rund **dreizehn Millionen** Einwohner, die bevölkerungsreichste Stadt Europas. Hier stehen der **Kreml** und der **Rote Platz**, beide auf der UNESCO-Liste, und die **Metro**, 1935 eröffnet und für die Gestaltung ihrer Stationen berühmt.",
  "**Санкт-Петербург** — второй по величине, около **пяти с половиной миллионов**. Он был **столицей с 1712 по 1918 год**, и планировка центра сохранилась с тех времён. **Эрмитаж** — один из крупнейших музеев мира; летом сюда едут за **белыми ночами** и разводными мостами.":
    "**Sankt Petersburg** ist die zweitgrößte Stadt, rund **fünfeinhalb Millionen**. Es war **von 1712 bis 1918 Hauptstadt**, und der Grundriss des Zentrums stammt aus jener Zeit. Die **Eremitage** ist eines der größten Museen der Welt; im Sommer kommt man wegen der **Weißen Nächte** und der geöffneten Klappbrücken hierher.",
  "В какие годы столицей был Санкт-Петербург?": "In welchen Jahren war Sankt Petersburg Hauptstadt?",
  "С 1703 по 1917 год": "Von 1703 bis 1917",
  "С 1712 по 1918 год": "Von 1712 bis 1918",
  "С 1721 по 1905 год": "Von 1721 bis 1905",
  "С 1700 по 1800 год": "Von 1700 bis 1800",
  "Город основан в 1703 году, столицей стал в 1712-м, а в 1918-м столица вернулась в Москву из-за близости фронта.":
    "Die Stadt wurde 1703 gegründet, 1712 Hauptstadt, und 1918 kehrte die Hauptstadt wegen der Nähe der Front nach Moskau zurück.",
  "Города-миллионники": "Millionenstädte",
  "Кроме двух столиц в стране около **шестнадцати** городов с населением свыше миллиона. Крупнейшие из них — **Новосибирск**, **Екатеринбург**, **Казань**, **Нижний Новгород**, **Челябинск**, **Самара**, **Уфа**, **Ростов-на-Дону**, **Омск**, **Красноярск**, **Воронеж**, **Пермь**, **Волгоград** и **Краснодар**.":
    "Neben den beiden Hauptstädten hat das Land rund **sechzehn** Städte mit über einer Million Einwohnern. Die größten sind **Nowosibirsk**, **Jekaterinburg**, **Kasan**, **Nischni Nowgorod**, **Tscheljabinsk**, **Samara**, **Ufa**, **Rostow am Don**, **Omsk**, **Krasnojarsk**, **Woronesch**, **Perm**, **Wolgograd** und **Krasnodar**.",
  "Новосибирск": "Nowosibirsk",
  "Третий по населению город страны, выросший вокруг моста Транссиба через Обь. Рядом Академгородок — научный центр.":
    "Die drittgrößte Stadt des Landes, gewachsen um die Transsib-Brücke über den Ob. Nebenan liegt Akademgorodok, ein Wissenschaftszentrum.",
  "Екатеринбург": "Jekaterinburg",
  "Столица Урала и промышленный центр, стоящий почти на границе Европы и Азии.":
    "Die Hauptstadt des Urals und ein Industriezentrum, fast auf der Grenze zwischen Europa und Asien gelegen.",
  "Казань": "Kasan",
  "Столица Татарстана, где кремль с мечетью и православным собором внутри одной стены внесён в список ЮНЕСКО.":
    "Die Hauptstadt Tatarstans, deren Kreml mit Moschee und orthodoxer Kathedrale hinter einer Mauer auf der UNESCO-Liste steht.",
  "Владивосток": "Wladiwostok",
  "Конечная точка Транссиба и главный порт на Тихом океане, в семи часах от Москвы по времени.":
    "Der Endpunkt der Transsib und der wichtigste Hafen am Pazifik, sieben Zeitstunden von Moskau entfernt.",
  "Золотое кольцо": "Der Goldene Ring",
  "**Золотое кольцо** — маршрут по древним городам северо-востока от Москвы, сложившийся как туристический в 1960-е годы. В него входят **Владимир**, **Суздаль**, **Ярославль**, **Кострома**, **Ростов Великий**, **Переславль-Залесский** и **Сергиев Посад**. Это те самые земли, из которых выросло Московское государство, и белокаменные соборы XII века стоят там до сих пор.":
    "Der **Goldene Ring** ist eine Route durch die alten Städte nordöstlich von Moskau, die sich in den 1960er Jahren als Reiseweg herausbildete. Zu ihm gehören **Wladimir**, **Susdal**, **Jaroslawl**, **Kostroma**, **Rostow Weliki**, **Perejaslawl-Salesski** und **Sergijew Possad**. Es sind genau die Länder, aus denen der Moskauer Staat erwuchs, und die weißen Steinkathedralen des 12. Jahrhunderts stehen dort bis heute.",
  "Что такое Золотое кольцо?": "Was ist der Goldene Ring?",
  "Кольцевая автодорога вокруг Москвы": "Der Autobahnring um Moskau",
  "Маршрут по древним городам северо-востока от Москвы":
    "Eine Route durch die alten Städte nordöstlich von Moskau",
  "Название московского метро": "Der Name der Moskauer Metro",
  "Группа городов-миллионников": "Eine Gruppe von Millionenstädten",
  "Владимир, Суздаль, Ярославль, Кострома, Ростов Великий, Переславль-Залесский и Сергиев Посад. Маршрут сложился в 1960-е годы, а сами города — XII века и старше.":
    "Wladimir, Susdal, Jaroslawl, Kostroma, Rostow Weliki, Perejaslawl-Salesski und Sergijew Possad. Die Route bildete sich in den 1960er Jahren heraus, die Städte selbst stammen aus dem 12. Jahrhundert und früher.",
  "**Транссибирская магистраль** — самая длинная железная дорога в мире. От Москвы до **Владивостока** по ней **9288 километров**, и поезд идёт около **шести суток**, пересекая семь часовых поясов.":
    "Die **Transsibirische Eisenbahn** ist die längste Bahnstrecke der Welt. Von Moskau bis **Wladiwostok** sind es **9288 Kilometer**, und der Zug braucht etwa **sechs Tage** und überquert sieben Zeitzonen.",
  "Дорога объясняет карту расселения Сибири: почти все крупные сибирские города — Омск, Новосибирск, Красноярск, Иркутск, Хабаровск — стоят на ней или рядом. К северу от магистрали население редеет очень быстро.":
    "Die Strecke erklärt die Siedlungskarte Sibiriens: fast alle großen sibirischen Städte — Omsk, Nowosibirsk, Krasnojarsk, Irkutsk, Chabarowsk — liegen an ihr oder in ihrer Nähe. Nördlich der Strecke dünnt die Bevölkerung sehr schnell aus.",
  "Особые города": "Besondere Städte",
  "**Города-герои** — звание, присвоенное за оборону в годы войны. В нынешних границах России это **Волгоград**, **Санкт-Петербург**, **Москва**, **Мурманск**, **Смоленск**, **Тула** и **Новороссийск**. Позже появилось звание **города воинской славы**, которое получили несколько десятков городов.":
    "**Heldenstädte** ist ein Titel, der für die Verteidigung in den Kriegsjahren verliehen wurde. In den heutigen Grenzen Russlands sind das **Wolgograd**, **Sankt Petersburg**, **Moskau**, **Murmansk**, **Smolensk**, **Tula** und **Noworossijsk**. Später kam der Titel **Stadt des militärischen Ruhms** hinzu, den mehrere Dutzend Städte erhielten.",
  "Есть и города особого назначения: **наукограды** вроде Дубны и Королёва, построенные вокруг институтов, и **закрытые административно-территориальные образования** — города при предприятиях атомной и оборонной промышленности, въезд в которые ограничен.":
    "Es gibt auch Städte besonderer Bestimmung: **Wissenschaftsstädte** wie Dubna und Koroljow, die um Institute herum gebaut wurden, und **geschlossene administrativ-territoriale Gebilde** — Städte an Betrieben der Atom- und Rüstungsindustrie, deren Zufahrt beschränkt ist.",
  "Сколько примерно идёт поезд от Москвы до Владивостока?":
    "Wie lange fährt ein Zug etwa von Moskau nach Wladiwostok?",
  "Двое суток": "Zwei Tage",
  "Около шести суток": "Etwa sechs Tage",
  "Около двух недель": "Etwa zwei Wochen",
  "Меньше суток": "Weniger als einen Tag",
  "9288 километров и семь часовых поясов. Транссиб — самая длинная железная дорога в мире, и почти все крупные сибирские города стоят на ней.":
    "9288 Kilometer und sieben Zeitzonen. Die Transsib ist die längste Bahnstrecke der Welt, und fast alle großen sibirischen Städte liegen an ihr.",
  "**Наукоград** и **закрытый город** — не одно и то же. В наукоград можно приехать свободно; в ЗАТО въезд ограничен, и на картах советского времени таких городов попросту не было.":
    "Eine **Wissenschaftsstadt** und eine **geschlossene Stadt** sind nicht dasselbe. In eine Wissenschaftsstadt kann man frei fahren; in ein geschlossenes Gebilde ist die Zufahrt beschränkt, und auf den Karten der Sowjetzeit gab es solche Städte schlicht nicht.",
  // ru-narody
  "Почему это важно: Конституция начинается не со слова «государство» и не со слова «нация», а со слов «многонациональный народ». Из этого выражения выведено многое в устройстве страны — от названий республик до права молчать о своём происхождении.":
    "Warum das wichtig ist: die Verfassung beginnt nicht mit dem Wort «Staat» und nicht mit dem Wort «Nation», sondern mit den Worten «multinationales Volk». Aus dieser Wendung ist vieles im Aufbau des Landes abgeleitet — von den Namen der Republiken bis zum Recht, über die eigene Herkunft zu schweigen.",
  "Что говорит преамбула": "Was die Präambel sagt",
  "Основной закон открывается словами: **«Мы, многонациональный народ Российской Федерации…»**. Носитель суверенитета в статье 3 назван так же. Это не украшение текста: страна не описывает себя как государство одного народа, и на этом построена вся её федеративная часть.":
    "Das Grundgesetz beginnt mit den Worten: **«Wir, das multinationale Volk der Russischen Föderation …»**. Den Träger der Souveränität nennt Artikel 3 genauso. Das ist keine Verzierung des Textes: das Land beschreibt sich nicht als Staat eines Volkes, und darauf ist sein ganzer föderaler Teil gebaut.",
  "**Перепись 2021 года** насчитала более **190 народов**. Точное число всякий раз спорно, потому что перепись записывает то, что человек сказал о себе сам: некоторые группы одни считают отдельным народом, другие — частью соседнего. Около **шестнадцати миллионов** человек национальность не указали вовсе — и имели на это полное право.":
    "Die **Volkszählung von 2021** zählte mehr als **190 Völker**. Die genaue Zahl ist jedes Mal strittig, weil die Zählung aufschreibt, was ein Mensch über sich selbst sagt: manche Gruppen gelten den einen als eigenes Volk, den anderen als Teil des Nachbarvolkes. Rund **sechzehn Millionen** Menschen gaben ihre Nationalität gar nicht an — und hatten dazu jedes Recht.",
  "Кого сколько": "Wie viele wovon",
  "**Русские** составляют около **80 %** населения — примерно **105 миллионов** человек. Следующие по численности, по данным той же переписи, — **татары**, **чеченцы**, **башкиры**, **чуваши**, **аварцы** и **армяне**; у первых из них больше миллиона человек, дальше счёт идёт на сотни тысяч.":
    "Die **Russen** stellen rund **80 %** der Bevölkerung — etwa **105 Millionen** Menschen. Es folgen nach derselben Zählung **Tataren**, **Tschetschenen**, **Baschkiren**, **Tschuwaschen**, **Awaren** und **Armenier**; die ersten davon zählen über eine Million Menschen, danach geht es in Hunderttausenden weiter.",
  "География распределена неровно. В большинстве регионов преобладают русские; в республиках Северного Кавказа, в Татарстане, Чувашии, Якутии картина другая. Именно поэтому национальный состав в России — вопрос не общей цифры, а конкретного места.":
    "Die Verteilung ist ungleich. In den meisten Regionen überwiegen die Russen; in den Republiken des Nordkaukasus, in Tatarstan, Tschuwaschien und Jakutien sieht es anders aus. Genau deshalb ist die nationale Zusammensetzung in Russland keine Frage der Gesamtzahl, sondern des konkreten Ortes.",
  "Как Конституция называет носителя суверенитета?": "Wie nennt die Verfassung den Träger der Souveränität?",
  "Русская нация": "Die russische Nation",
  "Многонациональный народ Российской Федерации": "Das multinationale Volk der Russischen Föderation",
  "Граждане и постоянные жители": "Die Bürger und ständigen Einwohner",
  "Совокупность субъектов Федерации": "Die Gesamtheit der Subjekte der Föderation",
  "Этими словами открывается преамбула, и они же стоят в статье 3. Федеративное устройство страны выведено из них.":
    "Mit diesen Worten beginnt die Präambel, und dieselben stehen in Artikel 3. Der föderale Aufbau des Landes ist daraus abgeleitet.",
  "Титульный народ — не всегда большинство": "Das Titularvolk ist nicht immer die Mehrheit",
  "Двадцать четыре республики носят имена народов, но имя республики говорит об истории, а не о нынешней арифметике. В **Карелии** карелов — небольшая доля населения. В **Башкортостане** башкиры составляют около четверти. А в **Чечне**, **Ингушетии**, **Дагестане** и **Туве** титульные народы — уверенное большинство.":
    "Vierundzwanzig Republiken tragen Namen von Völkern, doch der Name einer Republik spricht von Geschichte, nicht von heutiger Arithmetik. In **Karelien** sind die Karelier ein kleiner Teil der Bevölkerung. In **Baschkortostan** stellen die Baschkiren etwa ein Viertel. In **Tschetschenien**, **Inguschetien**, **Dagestan** und **Tuwa** dagegen sind die Titularvölker eine deutliche Mehrheit.",
  "Республика поэтому не «принадлежит» своему народу. Права в ней — у всех жителей одинаково, а особый статус касается языка и культуры, а не гражданства и не собственности.":
    "Eine Republik «gehört» deshalb ihrem Volk nicht. Die Rechte darin haben alle Einwohner gleich, und der besondere Status betrifft Sprache und Kultur, nicht Staatsangehörigkeit und nicht Eigentum.",
  "Коренные малочисленные народы": "Indigene kleine Völker",
  "Отдельная правовая категория. **Статья 69** Конституции гарантирует права **коренных малочисленных народов**; кто именно ими считается, определяет **единый перечень**, утверждённый Правительством, — в нём **сорок семь** народов.":
    "Eine eigene Rechtskategorie. **Artikel 69** der Verfassung garantiert die Rechte der **indigenen kleinen Völker**; wer genau dazu zählt, bestimmt ein **einheitliches Verzeichnis**, das die Regierung bestätigt hat — es umfasst **siebenundvierzig** Völker.",
  "Условия попадания в перечень: народ живёт на землях предков, ведёт **традиционный образ жизни и хозяйство**, осознаёт себя самостоятельной общностью — и насчитывает **менее пятидесяти тысяч** человек. Некоторые из них — несколько сотен человек, а один-два измеряются десятками.":
    "Die Bedingungen für die Aufnahme: das Volk lebt auf dem Land seiner Vorfahren, führt eine **überlieferte Lebens- und Wirtschaftsweise**, versteht sich als eigenständige Gemeinschaft — und zählt **weniger als fünfzigtausend** Menschen. Manche von ihnen sind einige Hundert Menschen, ein oder zwei zählen nach Dutzenden.",
  "Север и Сибирь": "Norden und Sibirien",
  "Ненцы, ханты, манси, эвенки, эвены, чукчи, коряки, нанайцы. Оленеводство, рыболовство и охота — не хобби, а основа хозяйства.":
    "Nenzen, Chanten, Mansen, Ewenken, Ewenen, Tschuktschen, Korjaken, Nanaier. Rentierzucht, Fischfang und Jagd sind kein Hobby, sondern die Grundlage der Wirtschaft.",
  "Дальний Восток": "Der Ferne Osten",
  "Нивхи, удэгейцы, ительмены, алеуты. Многие живут в нескольких сёлах, и язык держится там же, где промысел.":
    "Niwchen, Udehe, Itelmenen, Aleuten. Viele leben in wenigen Dörfern, und die Sprache hält sich dort, wo auch das Handwerk sich hält.",
  "Европейская часть": "Der europäische Teil",
  "Вепсы, саамы, ижорцы, водь. Народы старые, но малочисленные — и потому в том же перечне.":
    "Wepsen, Samen, Ischoren, Woten. Alte Völker, aber kleine — und deshalb im selben Verzeichnis.",
  "Абазины, шапсуги. Небольшие народы Северного Кавказа тоже входят в перечень, хотя их соседи в него не входят.":
    "Abasinen, Schapsugen. Auch kleine Völker des Nordkaukasus stehen im Verzeichnis, obwohl ihre Nachbarn nicht darin stehen.",
  "Что даёт статус: право на **территории традиционного природопользования**, льготы по охоте и рыболовству для собственных нужд, досрочную пенсию, освобождение от призыва при занятии традиционным промыслом. Это не привилегия по происхождению, а компенсация за то, что современное хозяйство землю их промысла сокращает.":
    "Was der Status bringt: das Recht auf **Gebiete überlieferter Naturnutzung**, Vergünstigungen bei Jagd und Fischfang für den eigenen Bedarf, eine vorgezogene Rente, die Befreiung vom Wehrdienst bei Ausübung des überlieferten Handwerks. Das ist kein Vorrecht der Herkunft, sondern ein Ausgleich dafür, dass die moderne Wirtschaft das Land ihres Handwerks kleiner macht.",
  "Какой признак обязателен для коренного малочисленного народа?":
    "Welches Merkmal ist für ein indigenes kleines Volk zwingend?",
  "Собственная республика в составе Федерации": "Eine eigene Republik innerhalb der Föderation",
  "Численность менее пятидесяти тысяч человек и традиционный образ жизни":
    "Weniger als fünfzigtausend Menschen und eine überlieferte Lebensweise",
  "Отдельное гражданство": "Eine eigene Staatsangehörigkeit",
  "Свой государственный язык": "Eine eigene Staatssprache",
  "Перечень утверждает Правительство. Кроме численности учитываются жизнь на землях предков, традиционное хозяйство и самосознание общности.":
    "Das Verzeichnis bestätigt die Regierung. Neben der Zahl zählen das Leben auf dem Land der Vorfahren, die überlieferte Wirtschaft und das Selbstverständnis als Gemeinschaft.",
  "Национальность — дело самого человека": "Die Nationalität ist Sache des Menschen selbst",
  "**Статья 26** формулирует это прямо: каждый вправе определять и указывать свою национальную принадлежность — и **никто не может быть принуждён** к её определению и указанию. Та же статья даёт право пользоваться родным языком и свободно выбирать язык общения, воспитания, обучения и творчества.":
    "**Artikel 26** sagt es geradeheraus: jeder darf seine nationale Zugehörigkeit selbst bestimmen und angeben — und **niemand darf gezwungen werden**, sie zu bestimmen oder anzugeben. Derselbe Artikel gibt das Recht, die Muttersprache zu gebrauchen und die Sprache des Umgangs, der Erziehung, der Ausbildung und des Schaffens frei zu wählen.",
  "У этой нормы есть предыстория. В советских паспортах была графа «национальность», записанная по родителям; в паспорте нынешнего образца её нет. Перепись спрашивает — но ответ добровольный, и шестнадцать миллионов человек им и не воспользовались.":
    "Diese Norm hat eine Vorgeschichte. Im sowjetischen Pass gab es die Rubrik «Nationalität», eingetragen nach den Eltern; im Pass heutiger Form fehlt sie. Die Volkszählung fragt danach — aber die Antwort ist freiwillig, und sechzehn Millionen Menschen haben von ihr keinen Gebrauch gemacht.",
  "Может ли человека обязать указать свою национальность?":
    "Kann jemand gezwungen werden, seine Nationalität anzugeben?",
  "Да, при получении паспорта": "Ja, bei der Ausstellung des Passes",
  "Нет, статья 26 прямо это запрещает": "Nein, Artikel 26 verbietet das ausdrücklich",
  "Да, если он живёт в республике": "Ja, wenn er in einer Republik lebt",
  "Да, во время переписи населения": "Ja, während der Volkszählung",
  "Каждый вправе определять и указывать свою национальную принадлежность — и никто не может быть к этому принуждён. В нынешнем паспорте такой графы нет.":
    "Jeder darf seine nationale Zugehörigkeit selbst bestimmen und angeben — und niemand darf dazu gezwungen werden. Im heutigen Pass gibt es diese Rubrik nicht.",
  "Не путайте **гражданство** и **национальность**. Гражданство в России одно, оно записано в паспорте и одинаково для всех. Национальность — самоопределение человека, нигде не удостоверяется и ни на какие права не влияет.":
    "Verwechsle **Staatsangehörigkeit** und **Nationalität** nicht. Die Staatsangehörigkeit in Russland ist eine, sie steht im Pass und ist für alle gleich. Die Nationalität ist die Selbstbestimmung eines Menschen, wird nirgends beurkundet und wirkt sich auf keine Rechte aus.",
  // ru-yazyki-religii
  "Почему это важно: русский язык связывает страну целиком, но он не единственный, у которого есть правовой статус. А в вопросах веры государство держится в стороне намеренно — и это записано в Конституции отдельной статьёй.":
    "Warum das wichtig ist: die russische Sprache verbindet das ganze Land, aber sie ist nicht die einzige mit einem Rechtsstatus. Und in Glaubensfragen hält sich der Staat bewusst heraus — das steht in einem eigenen Verfassungsartikel.",
  "Государственный язык": "Die Staatssprache",
  "**Статья 68**: государственным языком на всей территории страны является **русский**. На нём ведутся суд, делопроизводство, официальные документы и школьное обучение по государственному стандарту.":
    "**Artikel 68**: Staatssprache im ganzen Land ist **Russisch**. Auf Russisch laufen Gerichte, Aktenführung, amtliche Dokumente und der Schulunterricht nach staatlichem Standard.",
  "**Республики вправе устанавливать свои государственные языки** — они употребляются в органах власти республики наравне с русским. В республиках такой статус получили несколько десятков языков: татарский, башкирский, чувашский, якутский, бурятский, осетинский, чеченский и другие. В Дагестане государственными объявлены языки всех народов республики сразу — их больше десятка.":
    "**Die Republiken dürfen eigene Staatssprachen festlegen** — sie werden in den Organen der Republik gleichrangig neben dem Russischen gebraucht. In den Republiken haben mehrere Dutzend Sprachen diesen Status: Tatarisch, Baschkirisch, Tschuwaschisch, Jakutisch, Burjatisch, Ossetisch, Tschetschenisch und weitere. In Dagestan sind die Sprachen aller Völker der Republik auf einmal zu Staatssprachen erklärt — es sind mehr als ein Dutzend.",
  "Та же статья гарантирует всем народам страны **право сохранять родной язык** и создавать условия для его изучения. Всего языков народов России около **ста пятидесяти**, и часть из них ЮНЕСКО относит к исчезающим.":
    "Derselbe Artikel garantiert allen Völkern des Landes das **Recht, die Muttersprache zu bewahren**, und die Schaffung von Bedingungen, sie zu lernen. Insgesamt gibt es rund **einhundertfünfzig** Sprachen der Völker Russlands, und einen Teil davon führt die UNESCO als bedroht.",
  "Могут ли республики устанавливать собственные государственные языки?":
    "Dürfen die Republiken eigene Staatssprachen festlegen?",
  "Нет, государственный язык только один": "Nein, es gibt nur eine Staatssprache",
  "Да, они употребляются в органах республики наравне с русским":
    "Ja, sie werden in den Organen der Republik gleichrangig neben dem Russischen gebraucht",
  "Да, и русский язык там перестаёт быть государственным":
    "Ja, und Russisch hört dort auf, Staatssprache zu sein",
  "Только с разрешения Государственной Думы на каждый случай":
    "Nur mit Erlaubnis der Staatsduma im Einzelfall",
  "Статья 68. Русский остаётся государственным на всей территории; язык республики добавляется к нему, а не заменяет его.":
    "Artikel 68. Russisch bleibt im ganzen Land Staatssprache; die Sprache der Republik kommt hinzu und ersetzt sie nicht.",
  "Кириллица по закону": "Kyrillica von Gesetzes wegen",
  "Федеральный закон **о языках народов Российской Федерации** требует, чтобы алфавиты государственного языка страны и государственных языков республик строились **на графической основе кириллицы**. Иная основа может быть установлена только федеральным законом.":
    "Das föderale **Gesetz über die Sprachen der Völker der Russischen Föderation** verlangt, dass die Alphabete der Staatssprache des Landes und der Staatssprachen der Republiken **auf der graphischen Grundlage der Kyrillica** aufgebaut sind. Eine andere Grundlage kann nur ein föderales Gesetz festlegen.",
  // ru-yazyki-religii
  "Норма появилась после того, как Татарстан в конце 1990-х решил перевести татарскую письменность на латиницу. Конституционный Суд в **2004 году** признал требование единой графической основы соответствующим Конституции: письменность государственных языков — вопрос общегосударственный, а не только республиканский.":
    "Die Norm entstand, nachdem Tatarstan Ende der 1990er Jahre beschlossen hatte, die tatarische Schrift auf lateinische Buchstaben umzustellen. Das Verfassungsgericht erklärte **2004** die Forderung nach einer einheitlichen graphischen Grundlage für verfassungsgemäß: die Schrift der Staatssprachen ist eine gesamtstaatliche Frage, nicht bloß eine der Republik.",
  "У кириллицы своя история: её принесли в славянские земли **Кирилл и Мефодий** в IX веке, а нынешний облик букв задала **гражданская азбука Петра I** в 1708 году. **24 мая** отмечается День славянской письменности и культуры.":
    "Die Kyrillica hat ihre eigene Geschichte: **Kyrill und Method** brachten sie im 9. Jahrhundert in die slawischen Länder, und die heutige Form der Buchstaben gab ihr die **bürgerliche Schrift Peters I.** im Jahr 1708. Am **24. Mai** wird der Tag der slawischen Schrift und Kultur begangen.",
  "На какой графической основе должны строиться алфавиты государственных языков республик?":
    "Auf welcher graphischen Grundlage müssen die Alphabete der Staatssprachen der Republiken aufgebaut sein?",
  "На основе кириллицы": "Auf der Grundlage der Kyrillica",
  "На основе латиницы": "Auf der Grundlage der lateinischen Schrift",
  "Республика выбирает основу сама": "Die Republik wählt die Grundlage selbst",
  "На основе исторической письменности народа": "Auf der Grundlage der überlieferten Schrift des Volkes",
  "Так требует федеральный закон о языках; Конституционный Суд подтвердил это в 2004 году. Иную основу может установить только федеральный закон.":
    "So verlangt es das föderale Sprachengesetz; das Verfassungsgericht bestätigte es 2004. Eine andere Grundlage kann nur ein föderales Gesetz festlegen.",
  "Светское государство": "Der weltliche Staat",
  "**Статья 14**: Российская Федерация — **светское государство**. Никакая религия не может устанавливаться в качестве государственной или обязательной. Религиозные объединения **отделены от государства и равны перед законом**.":
    "**Artikel 14**: die Russische Föderation ist ein **weltlicher Staat**. Keine Religion darf als staatliche oder verbindliche eingesetzt werden. Religiöse Vereinigungen sind **vom Staat getrennt und vor dem Gesetz gleich**.",
  "**Статья 28** даёт каждому свободу совести и вероисповедания: право исповедовать любую религию или **не исповедовать никакой**, свободно выбирать и менять убеждения и действовать в согласии с ними.":
    "**Artikel 28** gibt jedem die Gewissens- und Religionsfreiheit: das Recht, sich zu einer beliebigen Religion zu bekennen oder **zu keiner**, Überzeugungen frei zu wählen und zu wechseln und ihnen gemäß zu handeln.",
  "Практические следствия простые: в государственной школе нет обязательного богослужения, запись о вере нигде не ведётся, а религиозный праздник становится нерабочим днём только через обычный закон, как любой другой.":
    "Die praktischen Folgen sind einfach: in der staatlichen Schule gibt es keinen verpflichtenden Gottesdienst, über den Glauben wird nirgends Buch geführt, und ein religiöser Feiertag wird nur durch ein gewöhnliches Gesetz zum arbeitsfreien Tag, wie jeder andere auch.",
  "Традиционные религии": "Die überlieferten Religionen",
  "Закон **о свободе совести и о религиозных объединениях 1997 года** в преамбуле признаёт особую роль **православия** в истории страны и выражает уважение к **христианству**, **исламу**, **буддизму**, **иудаизму** и другим религиям, составляющим неотъемлемую часть исторического наследия народов России. Преамбула — не установление государственной религии: сама статья 14 стоит выше.":
    "Das **Gesetz über die Gewissensfreiheit und über religiöse Vereinigungen von 1997** erkennt in seiner Präambel die besondere Rolle der **Orthodoxie** in der Geschichte des Landes an und drückt Achtung vor dem **Christentum**, dem **Islam**, dem **Buddhismus**, dem **Judentum** und anderen Religionen aus, die einen untrennbaren Teil des historischen Erbes der Völker Russlands bilden. Die Präambel setzt keine Staatsreligion ein: Artikel 14 selbst steht höher.",
  "Православие": "Orthodoxie",
  "Крупнейшая конфессия. Русская православная церковь ведёт счёт от крещения 988 года; патриаршество восстановлено в 1917 году.":
    "Die größte Konfession. Die Russische Orthodoxe Kirche rechnet von der Taufe des Jahres 988; das Patriarchat wurde 1917 wiederhergestellt.",
  "Ислам": "Islam",
  "Вторая по числу верующих. Распространён на Северном Кавказе, в Татарстане и Башкортостане; духовные управления действуют в нескольких центрах.":
    "Die zweitgrößte nach der Zahl der Gläubigen. Verbreitet im Nordkaukasus, in Tatarstan und Baschkortostan; geistliche Verwaltungen arbeiten in mehreren Zentren.",
  "Буддизм": "Buddhismus",
  "Традиционен в Калмыкии, Бурятии и Туве. Калмыкия — единственный буддийский регион в Европе.":
    "Überliefert in Kalmückien, Burjatien und Tuwa. Kalmückien ist die einzige buddhistische Region Europas.",
  "Иудаизм": "Judentum",
  "Общины в крупных городах; Еврейская автономная область на Дальнем Востоке носит имя по истории своего образования.":
    "Gemeinden in den großen Städten; das Jüdische autonome Gebiet im Fernen Osten trägt seinen Namen nach der Geschichte seiner Gründung.",
  "В календаре это видно так: **7 января**, Рождество Христово, — нерабочий праздничный день по всей стране. **Ураза-байрам** и **Курбан-байрам** объявлены выходными законами отдельных республик, **Пасха** передвижная и выходным днём не считается, но приходится на воскресенье.":
    "Im Kalender sieht das so aus: der **7. Januar**, Weihnachten, ist im ganzen Land ein arbeitsfreier Feiertag. **Uraza-Bayram** und **Kurban-Bayram** sind durch Gesetze einzelner Republiken zu freien Tagen erklärt, **Ostern** ist beweglich und gilt nicht als freier Tag, fällt aber ohnehin auf einen Sonntag.",
  "Какое место занимает преамбула закона 1997 года рядом со статьёй 14?":
    "Welchen Platz nimmt die Präambel des Gesetzes von 1997 neben Artikel 14 ein?",
  "Она устанавливает православие государственной религией":
    "Sie setzt die Orthodoxie als Staatsreligion ein",
  "Она описывает историческую роль религий, а норму задаёт статья 14":
    "Sie beschreibt die historische Rolle der Religionen, die Norm setzt Artikel 14",
  "Она отменяет действие статьи 14 для четырёх религий":
    "Sie hebt die Wirkung von Artikel 14 für vier Religionen auf",
  "Она даёт перечисленным религиям право на бюджетные средства":
    "Sie gibt den genannten Religionen ein Recht auf Haushaltsmittel",
  "Преамбула говорит об истории и уважении, а не об установлении. Статья 14 стоит выше и запрещает государственную или обязательную религию.":
    "Die Präambel spricht von Geschichte und Achtung, nicht von einer Einsetzung. Artikel 14 steht höher und verbietet eine staatliche oder verbindliche Religion.",
  "Преамбула закона 1997 года иногда цитируется как доказательство того, что православие — государственная религия. Это не так: преамбула описывает историю, а норму устанавливает статья 14 Конституции, и она говорит обратное.":
    "Die Präambel des Gesetzes von 1997 wird manchmal als Beleg dafür zitiert, dass die Orthodoxie Staatsreligion sei. Das stimmt nicht: die Präambel beschreibt Geschichte, die Norm setzt Artikel 14 der Verfassung, und der sagt das Gegenteil.",
  // ru-literatura
  "Почему это важно: имена из этого урока встречаются на карте страны чаще любых других — площади, улицы, станции метро, театры и музеи названы в основном ими. Не узнав их, трудно понять, чем город гордится.":
    "Warum das wichtig ist: die Namen aus dieser Lektion begegnen einem auf der Landkarte häufiger als alle anderen — Plätze, Straßen, Metrostationen, Theater und Museen sind überwiegend nach ihnen benannt. Ohne sie zu kennen, versteht man schwer, worauf eine Stadt stolz ist.",
  "Пушкин и золотой век": "Puschkin und das goldene Zeitalter",
  "**Александр Пушкин** (1799–1837) считается создателем современного русского литературного языка: до него книжный и разговорный язык расходились гораздо сильнее. Его роман в стихах **«Евгений Онегин»**, поэма «Медный всадник» и сказки читаются в школе целиком.":
    "**Alexander Puschkin** (1799–1837) gilt als Schöpfer der modernen russischen Literatursprache: vor ihm gingen Buch- und Umgangssprache weit stärker auseinander. Sein Versroman **«Eugen Onegin»**, das Poem «Der eherne Reiter» und seine Märchen werden in der Schule vollständig gelesen.",
  "**6 июня**, в день его рождения, отмечается Пушкинский день России; с 2011 года это же число — **День русского языка**. ООН включила эту дату в собственный календарь языков.":
    "Am **6. Juni**, seinem Geburtstag, wird der Puschkin-Tag Russlands begangen; seit 2011 ist dasselbe Datum der **Tag der russischen Sprache**. Die UNO hat es in ihren eigenen Sprachenkalender aufgenommen.",
  "Дальше идут **Михаил Лермонтов** («Герой нашего времени»), **Николай Гоголь** («Ревизор», «Мёртвые души»), **Иван Тургенев** («Отцы и дети»). Их называют золотым веком русской литературы, и укладывается он в одно столетие.":
    "Es folgen **Michail Lermontow** («Ein Held unserer Zeit»), **Nikolai Gogol** («Der Revisor», «Die toten Seelen») und **Iwan Turgenew** («Väter und Söhne»). Man nennt sie das goldene Zeitalter der russischen Literatur, und es passt in ein einziges Jahrhundert.",
  "Большой роман": "Der große Roman",
  "**Лев Толстой** (1828–1910) — «Война и мир» и «Анна Каренина»; его усадьба **Ясная Поляна** сохранена как музей. **Фёдор Достоевский** (1821–1881) — «Преступление и наказание», «Идиот», «Братья Карамазовы»; его переводят и ставят на сцене, вероятно, чаще всех русских авторов.":
    "**Lew Tolstoi** (1828–1910) — «Krieg und Frieden» und «Anna Karenina»; sein Gut **Jasnaja Poljana** ist als Museum erhalten. **Fjodor Dostojewski** (1821–1881) — «Schuld und Sühne», «Der Idiot», «Die Brüder Karamasow»; er wird wohl häufiger übersetzt und gespielt als jeder andere russische Autor.",
  "**Антон Чехов** (1860–1904) писал короткие рассказы и четыре пьесы, на которых держится мировой репертуар: «Чайка», «Дядя Ваня», «Три сестры», «Вишнёвый сад». Чайка со шторы Художественного театра — эмблема именно отсюда.":
    "**Anton Tschechow** (1860–1904) schrieb kurze Erzählungen und vier Stücke, die das Welttheater tragen: «Die Möwe», «Onkel Wanja», «Drei Schwestern», «Der Kirschgarten». Die Möwe auf dem Vorhang des Künstlertheaters kommt genau von hier.",
  "Серебряный век и премии": "Das Silberne Zeitalter und die Preise",
  "Начало XX века дало **Александра Блока**, **Анну Ахматову**, **Марину Цветаеву**, **Осипа Мандельштама**, **Бориса Пастернака**, **Владимира Маяковского**, **Сергея Есенина**. Судьбы этого поколения тяжелы: часть погибла в лагерях, часть уехала, часть замолчала на десятилетия.":
    "Der Beginn des 20. Jahrhunderts brachte **Alexander Blok**, **Anna Achmatowa**, **Marina Zwetajewa**, **Ossip Mandelstam**, **Boris Pasternak**, **Wladimir Majakowski** und **Sergei Jessenin** hervor. Die Lebensläufe dieser Generation sind schwer: ein Teil kam in Lagern um, ein Teil ging fort, ein Teil verstummte auf Jahrzehnte.",
  "Нобелевскую премию по литературе получили пятеро: **Иван Бунин** (1933, первым — уже в эмиграции), **Борис Пастернак** (1958, вынужден был отказаться под давлением), **Михаил Шолохов** (1965), **Александр Солженицын** (1970), **Иосиф Бродский** (1987).":
    "Den Nobelpreis für Literatur erhielten fünf: **Iwan Bunin** (1933, als Erster — bereits in der Emigration), **Boris Pasternak** (1958, unter Druck zum Verzicht gezwungen), **Michail Scholochow** (1965), **Alexander Solschenizyn** (1970) und **Joseph Brodsky** (1987).",
  "Кто первым из русских писателей получил Нобелевскую премию по литературе?":
    "Wer erhielt als Erster der russischen Schriftsteller den Nobelpreis für Literatur?",
  "Лев Толстой": "Lew Tolstoi",
  "Иван Бунин": "Iwan Bunin",
  "Михаил Шолохов": "Michail Scholochow",
  "Борис Пастернак": "Boris Pasternak",
  "Бунин получил её в 1933 году, живя уже в эмиграции. Толстой номинировался, но премии так и не получил.":
    "Bunin bekam ihn 1933, als er schon in der Emigration lebte. Tolstoi war nominiert, erhielt den Preis aber nie.",
  "Музыка": "Die Musik",
  "**Михаил Глинка** считается первым русским композитором мирового масштаба; с его опер начинается национальная традиция. Во второй половине XIX века складывается **«Могучая кучка»** — содружество композиторов, куда входили **Балакирев**, **Мусоргский**, **Бородин**, **Римский-Корсаков** и **Кюи**.":
    "**Michail Glinka** gilt als erster russischer Komponist von Weltrang; mit seinen Opern beginnt die nationale Tradition. In der zweiten Hälfte des 19. Jahrhunderts bildet sich das **«Mächtige Häuflein»** — ein Bund von Komponisten, zu dem **Balakirew**, **Mussorgski**, **Borodin**, **Rimski-Korsakow** und **Cui** gehörten.",
  "**Пётр Чайковский** (1840–1893) написал три балета, на которых стоит мировой балетный репертуар: «Лебединое озеро», «Спящая красавица», «Щелкунчик». Дальше — **Сергей Рахманинов**, **Игорь Стравинский**, **Сергей Прокофьев**, **Дмитрий Шостакович**.":
    "**Pjotr Tschaikowski** (1840–1893) schrieb drei Ballette, auf denen das Weltrepertoire des Balletts ruht: «Schwanensee», «Dornröschen», «Der Nussknacker». Danach folgen **Sergei Rachmaninow**, **Igor Strawinsky**, **Sergei Prokofjew** und **Dmitri Schostakowitsch**.",
  "**Седьмая симфония** Шостаковича, названная Ленинградской, была впервые исполнена в осаждённом городе **9 августа 1942 года** — оркестром, который собрали из оставшихся в живых музыкантов.":
    "Die **Siebte Sinfonie** von Schostakowitsch, die Leningrader genannt, wurde am **9. August 1942** in der belagerten Stadt uraufgeführt — von einem Orchester, das man aus den überlebenden Musikern zusammenstellte.",
  "Что такое «Могучая кучка»?": "Was war das «Mächtige Häuflein»?",
  "Литературный кружок начала XX века": "Ein Literaturkreis des frühen 20. Jahrhunderts",
  "Содружество русских композиторов XIX века": "Ein Bund russischer Komponisten des 19. Jahrhunderts",
  "Объединение художников-передвижников": "Ein Zusammenschluss der Wandermaler",
  "Театральная труппа Станиславского": "Die Theatertruppe Stanislawskis",
  "Балакирев, Мусоргский, Бородин, Римский-Корсаков и Кюи. Они добивались национального звучания в опере и симфонии.":
    "Balakirew, Mussorgski, Borodin, Rimski-Korsakow und Cui. Sie suchten einen nationalen Klang in Oper und Sinfonie.",
  "Театр и балет": "Theater und Ballett",
  "**Большой театр** в Москве ведёт счёт с **1776 года**, **Мариинский** в Петербурге — с конца XVIII века. Русский балет стал мировым эталоном после **«Русских сезонов»** Сергея Дягилева, которые с **1909 года** показывали в Париже танцовщиков и декорации, каких там не видели.":
    "Das **Bolschoi-Theater** in Moskau rechnet ab **1776**, das **Mariinski** in Petersburg ab dem Ende des 18. Jahrhunderts. Das russische Ballett wurde zum weltweiten Maßstab nach den **«Russischen Saisons»** Sergei Djagilews, die ab **1909** in Paris Tänzer und Bühnenbilder zeigten, wie man sie dort nicht gesehen hatte.",
  "**Константин Станиславский** и **Владимир Немирович-Данченко** основали в **1898 году** Московский Художественный театр. Их метод работы с актёром — **система Станиславского** — преподаётся в театральных школах по всему миру.":
    "**Konstantin Stanislawski** und **Wladimir Nemirowitsch-Dantschenko** gründeten **1898** das Moskauer Künstlertheater. Ihre Methode der Arbeit mit dem Schauspieler — das **System Stanislawski** — wird an Theaterschulen in aller Welt gelehrt.",
  "Живопись и икона": "Malerei und Ikone",
  "**Третьяковская галерея** в Москве выросла из частного собрания купца Павла Третьякова и открыта для публики с XIX века; **Русский музей** в Петербурге основан в 1895 году. В 1870 году художники объединились в товарищество **передвижников**, чтобы возить выставки по городам, а не показывать их только в столицах.":
    "Die **Tretjakow-Galerie** in Moskau erwuchs aus der Privatsammlung des Kaufmanns Pawel Tretjakow und ist seit dem 19. Jahrhundert öffentlich zugänglich; das **Russische Museum** in Petersburg wurde 1895 gegründet. 1870 schlossen sich Maler zur Genossenschaft der **Wandermaler** zusammen, um Ausstellungen durch die Städte zu führen statt sie nur in den Hauptstädten zu zeigen.",
  "Илья Репин": "Ilja Repin",
  "«Бурлаки на Волге», «Запорожцы». Портретист и главный живописец передвижников.":
    "«Die Wolgatreidler», «Die Saporoger Kosaken». Porträtist und wichtigster Maler der Wandermaler.",
  "Иван Шишкин и Исаак Левитан": "Iwan Schischkin und Isaak Lewitan",
  "Лес и русская равнина. Пейзаж у передвижников был не фоном, а самостоятельным сюжетом.":
    "Der Wald und die russische Ebene. Die Landschaft war bei den Wandermalern nicht Hintergrund, sondern eigenständiges Thema.",
  "Иван Айвазовский": "Iwan Aiwasowski",
  "Море — почти шесть тысяч полотен. Работал в Феодосии и писал воду быстрее, чем большинство пишет эскизы.":
    "Das Meer — fast sechstausend Bilder. Er arbeitete in Feodossija und malte Wasser schneller, als die meisten eine Skizze anlegen.",
  "Андрей Рублёв": "Andrei Rubljow",
  "Иконописец начала XV века. Его «Троица» — самая известная русская икона; иконопись здесь древнее живописи на несколько веков.":
    "Ikonenmaler des frühen 15. Jahrhunderts. Seine «Dreifaltigkeit» ist die bekannteste russische Ikone; die Ikonenmalerei ist hier um mehrere Jahrhunderte älter als die Tafelmalerei.",
  "Кино добавилось в XX веке: **Сергей Эйзенштейн** и его «Броненосец „Потёмкин“» (1925) вошли в учебники монтажа, **Андрей Тарковский** — в число самых изучаемых режиссёров мира, а студия **«Мосфильм»** работает с 1924 года.":
    "Das Kino kam im 20. Jahrhundert hinzu: **Sergei Eisenstein** und sein «Panzerkreuzer Potemkin» (1925) gingen in die Lehrbücher der Montage ein, **Andrei Tarkowski** zählt zu den meistuntersuchten Regisseuren der Welt, und das Studio **«Mosfilm»** arbeitet seit 1924.",
  "Кто написал «Троицу»?": "Wer malte die «Dreifaltigkeit»?",
  "Василий Суриков": "Wassili Surikow",
  "Икона начала XV века и самое известное произведение русской иконописи. Репин, Айвазовский и Суриков работали через четыреста с лишним лет после Рублёва.":
    "Eine Ikone des frühen 15. Jahrhunderts und das bekannteste Werk der russischen Ikonenmalerei. Repin, Aiwasowski und Surikow arbeiteten mehr als vierhundert Jahre nach Rubljow.",
  "**Передвижники** — не стиль живописи, а объединение с уставом и выставочным маршрутом. Их объединяло желание показывать картины по всей стране, а писали они по-разному.":
    "Die **Wandermaler** sind kein Malstil, sondern ein Zusammenschluss mit Satzung und Ausstellungsroute. Sie verband der Wille, Bilder im ganzen Land zu zeigen; gemalt haben sie sehr unterschiedlich.",
  // ru-nauka-kosmos
  "Почему это важно: две даты из этого урока — 4 октября 1957 года и 12 апреля 1961 года — знают везде, и обе относятся к России. Праздник 12 апреля объясняется именно здесь.":
    "Warum das wichtig ist: zwei Daten aus dieser Lektion — der 4. Oktober 1957 und der 12. April 1961 — kennt man überall, und beide gehören zu Russland. Der Feiertag am 12. April erklärt sich genau hier.",
  "С чего начиналась наука": "Womit die Wissenschaft begann",
  "**Академия наук** основана указом **Петра I в 1724 году** в Петербурге и открылась год спустя. Это одно из старейших научных учреждений Европы, и создавалось оно сразу как государственное.":
    "Die **Akademie der Wissenschaften** wurde **1724** durch einen Erlass **Peters I.** in Petersburg gegründet und öffnete ein Jahr später. Sie ist eine der ältesten wissenschaftlichen Einrichtungen Europas und war von Anfang an staatlich angelegt.",
  "**Михаил Ломоносов** (1711–1765) — первый русский учёный мирового уровня: химик, физик, астроном, поэт и историк сразу. По его замыслу в **1755 году** основан **Московский университет**, который носит его имя.":
    "**Michail Lomonossow** (1711–1765) war der erste russische Gelehrte von Weltrang: Chemiker, Physiker, Astronom, Dichter und Historiker in einer Person. Nach seinem Entwurf wurde **1755** die **Moskauer Universität** gegründet, die seinen Namen trägt.",
  "**Дмитрий Менделеев** в **1869 году** сформулировал **периодический закон** и построил таблицу элементов, оставив в ней пустые клетки под ещё не открытые вещества. Когда их нашли, свойства совпали с предсказанными — это и сделало таблицу законом, а не удобным списком.":
    "**Dmitri Mendelejew** formulierte **1869** das **Periodengesetz** und baute die Tafel der Elemente, in der er leere Felder für noch unentdeckte Stoffe ließ. Als man sie fand, stimmten die Eigenschaften mit den vorhergesagten überein — das machte die Tafel zu einem Gesetz statt zu einer bequemen Liste.",
  "**Иван Павлов** получил **Нобелевскую премию в 1904 году** за работы о пищеварении — первым из россиян; **Илья Мечников** — в 1908 году за учение об иммунитете. Позже премии по физике получили **Ландау**, **Басов** и **Прохоров**, **Капица**, **Алфёров**, **Абрикосов** и **Гинзбург**.":
    "**Iwan Pawlow** erhielt **1904** den **Nobelpreis** für seine Arbeiten zur Verdauung — als Erster aus Russland; **Ilja Metschnikow** 1908 für die Lehre von der Immunität. Später bekamen **Landau**, **Bassow** und **Prochorow**, **Kapiza**, **Alfjorow**, **Abrikossow** und **Ginsburg** Preise für Physik.",
  "Спутник": "Der Sputnik",
  "**4 октября 1957 года** с полигона в казахской степи вышел на орбиту **первый искусственный спутник Земли**. Аппарат весил 83 килограмма и передавал повторяющийся сигнал, который ловили радиолюбители по всему миру. С этого дня отсчитывают космическую эру.":
    "Am **4. Oktober 1957** ging von einem Gelände in der kasachischen Steppe der **erste künstliche Erdsatellit** in die Umlaufbahn. Das Gerät wog 83 Kilogramm und sendete ein sich wiederholendes Signal, das Funkamateure in aller Welt auffingen. Von diesem Tag an rechnet man das Weltraumzeitalter.",
  "Через месяц на орбиту отправили собаку **Лайку** — первое живое существо в космосе; вернуть её не могли, техники возвращения ещё не было. В **1960 году** **Белка и Стрелка** слетали и вернулись живыми, и это открыло дорогу человеку.":
    "Einen Monat später schickte man die Hündin **Laika** in die Umlaufbahn — das erste Lebewesen im All; zurückholen konnte man sie nicht, eine Rückkehrtechnik gab es noch nicht. **1960** flogen **Belka und Strelka** und kehrten lebend zurück, und das öffnete dem Menschen den Weg.",
  "Теоретическую основу заложил школьный учитель из Калуги **Константин Циолковский**, опубликовавший расчёт ракетного движения в 1903 году. Практику вёл **Сергей Королёв** — главный конструктор, чьё имя до его смерти в 1966 году держали в тайне.":
    "Die theoretische Grundlage legte ein Schullehrer aus Kaluga, **Konstantin Ziolkowski**, der 1903 die Berechnung des Raketenantriebs veröffentlichte. Die Praxis führte **Sergei Koroljow** — der Chefkonstrukteur, dessen Name bis zu seinem Tod 1966 geheim gehalten wurde.",
  "Что произошло 4 октября 1957 года?": "Was geschah am 4. Oktober 1957?",
  "Первый полёт человека в космос": "Der erste Flug eines Menschen ins All",
  "Запуск первого искусственного спутника Земли": "Der Start des ersten künstlichen Erdsatelliten",
  "Первый выход в открытый космос": "Der erste Ausstieg in den freien Weltraum",
  "Запуск первой орбитальной станции": "Der Start der ersten Raumstation",
  "Аппарат весом 83 килограмма передавал сигнал, который слушал весь мир. С этой даты отсчитывают космическую эру.":
    "Ein Gerät von 83 Kilogramm sendete ein Signal, dem die ganze Welt zuhörte. Von diesem Datum an rechnet man das Weltraumzeitalter.",
  "Гагарин": "Gagarin",
  "**12 апреля 1961 года** **Юрий Гагарин** на корабле **«Восток-1»** сделал **один виток** вокруг Земли и приземлился под Саратовом. Полёт длился **108 минут**. Ему было 27 лет.":
    "Am **12. April 1961** umrundete **Juri Gagarin** an Bord des Schiffs **«Wostok 1»** die Erde **einmal** und landete bei Saratow. Der Flug dauerte **108 Minuten**. Er war 27 Jahre alt.",
  "**12 апреля** — **День космонавтики**, государственный праздник; Генеральная Ассамблея ООН в 2011 году объявила эту дату Международным днём полёта человека в космос.":
    "Der **12. April** ist der **Tag der Raumfahrt**, ein staatlicher Feiertag; die Generalversammlung der UNO erklärte das Datum 2011 zum Internationalen Tag des bemannten Raumflugs.",
  "Дальше сроки сжаты: **1963** — **Валентина Терешкова**, первая женщина в космосе; **1965** — **Алексей Леонов**, первый выход в открытый космос; **1970** — **«Луноход-1»**, первый самоходный аппарат на другом небесном теле; **1971** — **«Салют-1»**, первая орбитальная станция.":
    "Danach ging es Schlag auf Schlag: **1963** **Walentina Tereschkowa**, die erste Frau im All; **1965** **Alexei Leonow**, der erste Ausstieg in den freien Weltraum; **1970** **«Lunochod 1»**, das erste selbstfahrende Gerät auf einem anderen Himmelskörper; **1971** **«Saljut 1»**, die erste Raumstation.",
  "Сколько продолжался полёт Юрия Гагарина?": "Wie lange dauerte der Flug Juri Gagarins?",
  "Около суток": "Etwa einen Tag",
  "108 минут, один виток вокруг Земли": "108 Minuten, eine Erdumrundung",
  "Двенадцать часов": "Zwölf Stunden",
  "Трое суток": "Drei Tage",
  "Корабль «Восток-1», старт 12 апреля 1961 года, посадка под Саратовом. Эта дата стала Днём космонавтики.":
    "Das Schiff «Wostok 1», Start am 12. April 1961, Landung bei Saratow. Aus diesem Datum wurde der Tag der Raumfahrt.",
  "Космос сегодня": "Der Weltraum heute",
  "Станция **«Мир»** работала на орбите с **1986 по 2001 год** — пятнадцать лет вместо расчётных пяти. С **1998 года** Россия участвует в **Международной космической станции**: первый её модуль был запущен именно отсюда, и российский сегмент обслуживает станцию до сих пор.":
    "Die Station **«Mir»** arbeitete von **1986 bis 2001** in der Umlaufbahn — fünfzehn Jahre statt der berechneten fünf. Seit **1998** ist Russland an der **Internationalen Raumstation** beteiligt: ihr erstes Modul wurde genau von hier gestartet, und das russische Segment versorgt die Station bis heute.",
  "Байконур": "Baikonur",
  "Старейший космодром мира, откуда стартовали спутник и Гагарин. Находится в Казахстане и арендуется Россией.":
    "Der älteste Weltraumbahnhof der Welt, von dem Sputnik und Gagarin starteten. Er liegt in Kasachstan und wird von Russland gepachtet.",
  "Плесецк": "Plessezk",
  "Архангельская область. Самый северный действующий космодром; отсюда идут в основном военные и научные запуски.":
    "Gebiet Archangelsk. Der nördlichste in Betrieb befindliche Weltraumbahnhof; von hier gehen überwiegend militärische und wissenschaftliche Starts.",
  "Восточный": "Wostotschny",
  "Амурская область, первый пуск в 2016 году. Строился, чтобы тяжёлые запуски шли с собственной территории.":
    "Gebiet Amur, erster Start 2016. Gebaut, damit schwere Starts vom eigenen Staatsgebiet ausgehen.",
  "Звёздный городок": "Sternenstädtchen",
  "Подмосковье. Центр подготовки космонавтов; сюда приезжают тренироваться экипажи и других стран.":
    "Im Moskauer Umland. Das Ausbildungszentrum der Kosmonauten; auch Besatzungen anderer Länder trainieren hier.",
  "Атом": "Das Atom",
  "Атомным проектом руководил **Игорь Курчатов**. В **1954 году** в **Обнинске** заработала **первая в мире атомная электростанция**, дававшая ток в общую сеть; в **1959 году** вышел в море **атомный ледокол «Ленин»**.":
    "Das Atomprojekt leitete **Igor Kurtschatow**. **1954** ging in **Obninsk** das **weltweit erste Kernkraftwerk** in Betrieb, das Strom in das allgemeine Netz lieferte; **1959** lief der **atomgetriebene Eisbrecher «Lenin»** aus.",
  "Атомный ледокольный флот у России единственный в мире — без него **Северный морской путь** не работал бы круглый год. Обратная сторона той же истории — **чернобыльская авария 1986 года**, после которой требования к безопасности реакторов пересматривались во всём мире.":
    "Russlands atomgetriebene Eisbrecherflotte ist die einzige der Welt — ohne sie wäre der **Nördliche Seeweg** nicht ganzjährig befahrbar. Die Kehrseite derselben Geschichte ist der **Unfall von Tschernobyl 1986**, nach dem die Sicherheitsanforderungen an Reaktoren weltweit überarbeitet wurden.",
  "Где в 1954 году заработала первая в мире атомная электростанция?":
    "Wo ging 1954 das weltweit erste Kernkraftwerk in Betrieb?",
  "В Обнинске": "In Obninsk",
  "В Дубне": "In Dubna",
  "В Сарове": "In Sarow",
  "В Северодвинске": "In Sewerodwinsk",
  "Станция была небольшой, но давала ток в общую сеть — этим и отличалась от опытных реакторов. Через пять лет вышел атомный ледокол «Ленин».":
    "Das Kraftwerk war klein, lieferte aber Strom in das allgemeine Netz — darin unterschied es sich von Versuchsreaktoren. Fünf Jahre später lief der Atomeisbrecher «Lenin» aus.",
  "**Байконур** находится не в России. Космодром остался в Казахстане после распада СССР и работает по договору аренды — поэтому и строился Восточный.":
    "**Baikonur** liegt nicht in Russland. Der Weltraumbahnhof blieb nach dem Zerfall der Sowjetunion in Kasachstan und wird auf Grundlage eines Pachtvertrags betrieben — deshalb wurde Wostotschny gebaut.",
  // ru-rabota
  "Почему это важно: почти всё, что человек знает о новой стране в первый год, он узнаёт через работу и оплату счетов. Правила здесь записаны в одном кодексе, и они одинаковы для гражданина и для иностранца с разрешением на работу.":
    "Warum das wichtig ist: fast alles, was ein Mensch im ersten Jahr über ein neues Land erfährt, erfährt er über die Arbeit und über das Bezahlen von Rechnungen. Die Regeln stehen hier in einem einzigen Gesetzbuch, und sie sind für Staatsbürger und für Ausländer mit Arbeitserlaubnis dieselben.",
  "Трудовой договор": "Der Arbeitsvertrag",
  "Отношения работника и работодателя описывает **Трудовой кодекс**, действующий с **2002 года**. Договор заключается **письменно, в двух экземплярах** — один остаётся у работника. Если человека фактически допустили к работе, договор считается заключённым, даже когда бумагу подписать забыли.":
    "Das Verhältnis von Arbeitnehmer und Arbeitgeber beschreibt das **Arbeitsgesetzbuch**, das seit **2002** gilt. Der Vertrag wird **schriftlich in zwei Ausfertigungen** geschlossen — eine bleibt beim Arbeitnehmer. Wurde jemand tatsächlich zur Arbeit zugelassen, gilt der Vertrag als geschlossen, auch wenn man die Unterschrift vergessen hat.",
  "**Испытательный срок** — не более **трёх месяцев**; для руководителей организаций, их заместителей и главных бухгалтеров он может доходить до шести. На испытании действуют те же правила, что и потом: та же оплата, тот же отпуск, те же взносы.":
    "Die **Probezeit** beträgt höchstens **drei Monate**; für Leiter von Organisationen, ihre Stellvertreter und Hauptbuchhalter kann sie bis zu sechs betragen. Während der Probezeit gelten dieselben Regeln wie danach: dieselbe Bezahlung, derselbe Urlaub, dieselben Beiträge.",
  "**Трудовая книжка** с **2020 года** ведётся в электронном виде. Тем, кто устраивается на работу впервые, бумажную уже не заводят; сведения о стаже хранятся в Социальном фонде и запрашиваются через портал.":
    "Das **Arbeitsbuch** wird seit **2020** elektronisch geführt. Wer zum ersten Mal eine Stelle antritt, bekommt kein Papierbuch mehr; die Angaben zur Beschäftigungszeit liegen beim Sozialfonds und werden über das Portal abgerufen.",
  "Время и отпуск": "Zeit und Urlaub",
  "Нормальная рабочая неделя — **не более 40 часов**. Ежегодный оплачиваемый отпуск — **28 календарных дней**; у некоторых профессий и у работающих на Севере он длиннее. Заработная плата выплачивается **не реже чем каждые полмесяца**, то есть аванс здесь не любезность работодателя, а требование закона.":
    "Die normale Arbeitswoche beträgt **höchstens 40 Stunden**. Der bezahlte Jahresurlaub umfasst **28 Kalendertage**; in einigen Berufen und für Beschäftigte im Norden ist er länger. Der Lohn wird **mindestens alle zwei Wochen** ausgezahlt — der Vorschuss ist hier also keine Freundlichkeit des Arbeitgebers, sondern eine Forderung des Gesetzes.",
  "Ниже **МРОТ** — минимального размера оплаты труда, который устанавливается федеральным законом, — платить нельзя. В регионах может действовать своё, более высокое соглашение.":
    "Unter dem **MROT** — dem gesetzlichen Mindestlohn, den ein föderales Gesetz festlegt — darf nicht gezahlt werden. In den Regionen kann eine eigene, höhere Vereinbarung gelten.",
  "Сколько дней составляет ежегодный оплачиваемый отпуск по общему правилу?":
    "Wie viele Tage bezahlten Jahresurlaub gibt es nach der allgemeinen Regel?",
  "28 календарных дней": "28 Kalendertage",
  "20 рабочих дней": "20 Arbeitstage",
  "14 календарных дней": "14 Kalendertage",
  "Столько, сколько записано в договоре": "So viele, wie im Vertrag stehen",
  "Меньше — нельзя, больше — можно. У работающих на Севере и у ряда профессий отпуск длиннее.":
    "Weniger geht nicht, mehr schon. Für Beschäftigte im Norden und in einer Reihe von Berufen ist der Urlaub länger.",
  "Налоги и взносы": "Steuern und Beiträge",
  "С заработка удерживается **налог на доходы физических лиц**. С **2025 года** он считается по **пятиступенчатой шкале**: базовая ставка **13 %**, а с дохода свыше 2,4 миллиона рублей в год ставка растёт до 15, 18, 20 и 22 процентов на верхних ступенях. Повышенная ставка применяется не ко всему доходу, а только к той части, которая перешла порог.":
    "Vom Verdienst wird die **Einkommensteuer natürlicher Personen** einbehalten. Seit **2025** wird sie nach einer **fünfstufigen Skala** berechnet: der Grundsatz beträgt **13 %**, und ab einem Einkommen über 2,4 Millionen Rubel im Jahr steigt der Satz auf den oberen Stufen auf 15, 18, 20 und 22 Prozent. Der erhöhte Satz gilt nicht für das ganze Einkommen, sondern nur für den Teil, der die Schwelle überschritten hat.",
  "**Страховые взносы** — на пенсию, медицину и социальное страхование — платит **работодатель**, сверх зарплаты и из своих средств. Работник их не перечисляет и в расчётном листке видит только НДФЛ.":
    "Die **Sozialbeiträge** — für Rente, Gesundheit und soziale Sicherung — zahlt der **Arbeitgeber**, zusätzlich zum Lohn und aus eigenen Mitteln. Der Arbeitnehmer führt sie nicht ab und sieht auf der Abrechnung nur die Einkommensteuer.",
  "Кто перечисляет страховые взносы за работника?":
    "Wer führt die Sozialbeiträge für einen Arbeitnehmer ab?",
  "Работник из своей зарплаты": "Der Arbeitnehmer aus seinem Lohn",
  "Работодатель, сверх зарплаты и из своих средств":
    "Der Arbeitgeber, zusätzlich zum Lohn und aus eigenen Mitteln",
  "Работник и работодатель поровну": "Arbeitnehmer und Arbeitgeber je zur Hälfte",
  "Региональный бюджет": "Der Regionalhaushalt",
  "В расчётном листке работник видит удержание НДФЛ, но не взносы: они лежат на работодателе.":
    "Auf der Abrechnung sieht der Arbeitnehmer den Abzug der Einkommensteuer, aber nicht die Beiträge: die liegen beim Arbeitgeber.",
  "Номера, без которых не обойтись": "Nummern, ohne die es nicht geht",
  "СНИЛС": "SNILS",
  "Номер индивидуального лицевого счёта в системе пенсионного страхования. На нём копится стаж, и он нужен почти для любой государственной услуги.":
    "Die Nummer des persönlichen Kontos in der Rentenversicherung. Auf ihr sammelt sich die Beschäftigungszeit, und sie wird für fast jede staatliche Leistung gebraucht.",
  "ИНН": "INN",
  "Идентификационный номер налогоплательщика. Присваивается один раз на всю жизнь и не меняется при переезде или смене фамилии.":
    "Die Steueridentifikationsnummer. Sie wird einmal fürs Leben vergeben und ändert sich weder beim Umzug noch bei einer Namensänderung.",
  "Полис ОМС": "Die Krankenversicherungskarte",
  "Обязательное медицинское страхование. Оформляется страховой организацией и действует по всей стране, а не только там, где выдан.":
    "Die gesetzliche Krankenversicherung. Sie wird von einer Versicherungsorganisation ausgestellt und gilt im ganzen Land, nicht nur dort, wo sie ausgegeben wurde.",
  "Госуслуги": "Das Behördenportal",
  "Портал, через который заказывают справки, записываются к врачу и подают заявления. Подтверждённая учётная запись заменяет очередь.":
    "Das Portal, über das man Bescheinigungen bestellt, Arzttermine bucht und Anträge stellt. Ein bestätigtes Konto ersetzt die Warteschlange.",
  "Пенсия и самозанятость": "Rente und Selbstständigkeit",
  "После реформы **2018 года** пенсионный возраст поднимается постепенно и к **2028 году** составит **65 лет** для мужчин и **60 лет** для женщин. Кроме возраста нужны стаж и пенсионные коэффициенты; у отдельных профессий и у северян сохраняется досрочный выход.":
    "Nach der Reform von **2018** steigt das Rentenalter schrittweise und wird **2028** bei **65 Jahren** für Männer und **60 Jahren** für Frauen liegen. Neben dem Alter braucht es Beschäftigungszeit und Rentenpunkte; in einzelnen Berufen und für Beschäftigte im Norden bleibt der vorgezogene Eintritt bestehen.",
  "Для тех, кто работает на себя, с **2019 года** существует **налог на профессиональный доход**: **4 %** с поступлений от частных лиц и **6 %** от организаций, без отчётности и без кассы, пока доход не превышает 2,4 миллиона рублей в год. Регистрация занимает несколько минут в приложении, и именно поэтому «самозанятых» в стране миллионы.":
    "Für Menschen, die auf eigene Rechnung arbeiten, gibt es seit **2019** die **Steuer auf berufliches Einkommen**: **4 %** auf Einnahmen von Privatpersonen und **6 %** auf solche von Unternehmen, ohne Buchführung und ohne Registrierkasse, solange das Einkommen 2,4 Millionen Rubel im Jahr nicht übersteigt. Die Anmeldung dauert in der App wenige Minuten, und genau deshalb gibt es im Land Millionen «Selbstständige».",
  "Деньги": "Das Geld",
  "Валюта — **рубль**, в нём **100 копеек**; графический знак ₽ утверждён в **2013 году**. Выпуск денег ведёт **Центральный банк**, и защита устойчивости рубля названа его основной функцией прямо в Конституции.":
    "Die Währung ist der **Rubel** mit **100 Kopeken**; das Zeichen ₽ wurde **2013** bestätigt. Das Geld gibt die **Zentralbank** aus, und der Schutz der Stabilität des Rubels ist unmittelbar in der Verfassung als ihre Hauptaufgabe genannt.",
  "Безналичная оплата распространена очень широко — карточкой платят и в маленьком магазине, и на рынке. Национальная платёжная система носит имя **«Мир»**; пенсии и бюджетные выплаты зачисляются именно на такие карты.":
    "Bargeldloses Zahlen ist sehr verbreitet — mit Karte zahlt man im kleinen Laden ebenso wie auf dem Markt. Das nationale Zahlungssystem heißt **«Mir»**; Renten und staatliche Leistungen werden genau auf solche Karten überwiesen.",
  "Что изменилось в налоге на доходы с 2025 года?": "Was hat sich 2025 bei der Einkommensteuer geändert?",
  "Налог отменили для низких доходов": "Die Steuer wurde für niedrige Einkommen abgeschafft",
  "Единую ставку заменила пятиступенчатая шкала":
    "An die Stelle eines einheitlichen Satzes trat eine fünfstufige Skala",
  "Ставку подняли до 22 % для всех": "Der Satz wurde für alle auf 22 % erhöht",
  "Налог стал платить работодатель": "Die Steuer zahlt jetzt der Arbeitgeber",
  "Базовая ставка осталась 13 %. Повышенные ставки применяются только к той части дохода, которая перешла соответствующий порог.":
    "Der Grundsatz blieb bei 13 %. Die erhöhten Sätze gelten nur für den Teil des Einkommens, der die jeweilige Schwelle überschritten hat.",
  "Устная договорённость об оплате «в конверте» не защищает работника ничем: без договора и взносов не идёт стаж, не считается пенсия и не оплачивается больничный. Требование письменного договора — не формальность.":
    "Eine mündliche Absprache über Bezahlung «im Umschlag» schützt den Arbeitnehmer in nichts: ohne Vertrag und Beiträge läuft keine Beschäftigungszeit, zählt keine Rente und wird kein Krankengeld gezahlt. Die Forderung nach einem schriftlichen Vertrag ist keine Formalie.",
  // ru-zdravookhranenie-obrazovanie
  "Почему это важно: две системы, с которыми сталкивается каждая семья. Обе бесплатны в своей основной части, но обе работают по правилам прикрепления и сроков, которых со стороны не видно.":
    "Warum das wichtig ist: zwei Systeme, mit denen jede Familie zu tun hat. Beide sind in ihrem Kern kostenlos, aber beide arbeiten nach Regeln der Zuordnung und der Fristen, die man von außen nicht sieht.",
  "Как устроена медицина": "Wie die Medizin aufgebaut ist",
  "Основа — **обязательное медицинское страхование**. Полис ОМС оформляет страховая медицинская организация, а взносы за работающих платит работодатель, за детей, пенсионеров и безработных — регион. С полисом помощь в государственной поликлинике и больнице бесплатна.":
    "Die Grundlage ist die **gesetzliche Krankenversicherung**. Die Versicherungskarte stellt eine Krankenversicherungsorganisation aus, und die Beiträge zahlt für Beschäftigte der Arbeitgeber, für Kinder, Rentner und Arbeitslose die Region. Mit der Karte ist die Behandlung in staatlichen Ambulanzen und Krankenhäusern kostenlos.",
  "Объём того, что входит в бесплатную помощь, определяет **программа государственных гарантий**, которую Правительство утверждает **каждый год**. Всё, что за её пределами, оказывается платно или по добровольному страхованию.":
    "Was in die kostenlose Versorgung fällt, bestimmt das **Programm der staatlichen Garantien**, das die Regierung **jedes Jahr** beschließt. Alles darüber hinaus wird privat oder über eine Zusatzversicherung bezahlt.",
  "Человек **прикрепляется к поликлинике** — обычно по месту жительства, но выбрать другую можно, не чаще одного раза в год. Врача внутри поликлиники тоже можно выбрать, с согласия самого врача.":
    "Man **schreibt sich bei einer Ambulanz ein** — üblicherweise nach dem Wohnort, doch man darf eine andere wählen, höchstens einmal im Jahr. Auch den Arzt innerhalb der Ambulanz kann man wählen, mit dessen Einverständnis.",
  "Когда срочно": "Wenn es eilt",
  "**Скорая помощь** вызывается по номеру **103**; единый номер экстренных служб — **112**, он работает даже без денег на счету и без сим-карты. При состояниях, угрожающих жизни, помощь оказывается **бесплатно и немедленно, без полиса и без документов** — отказ в таком случае незаконен.":
    "Der **Rettungsdienst** wird unter der **103** gerufen; die einheitliche Notrufnummer ist die **112**, sie funktioniert auch ohne Guthaben und ohne SIM-Karte. Bei lebensbedrohlichen Zuständen wird Hilfe **kostenlos und sofort geleistet, ohne Versicherungskarte und ohne Papiere** — eine Verweigerung wäre in diesem Fall rechtswidrig.",
  "Нужен ли полис, чтобы получить экстренную помощь?":
    "Braucht man eine Versicherungskarte, um Notfallhilfe zu bekommen?",
  "Да, иначе помощь будет платной": "Ja, sonst ist die Hilfe kostenpflichtig",
  "Нет: при угрозе жизни помощь оказывают без полиса и документов":
    "Nein: bei Lebensgefahr wird ohne Karte und ohne Papiere geholfen",
  "Да, но его можно предъявить позже в течение суток":
    "Ja, aber man kann sie binnen eines Tages nachreichen",
  "Нужен полис добровольного страхования": "Man braucht eine private Zusatzversicherung",
  "Скорая помощь вызывается по номеру 103, единый экстренный номер — 112. Отказать в неотложной помощи из-за отсутствия документов нельзя.":
    "Der Rettungsdienst wird unter der 103 gerufen, die einheitliche Notrufnummer ist die 112. Notfallhilfe wegen fehlender Papiere zu verweigern ist nicht zulässig.",
  "Отдельно стоит **диспансеризация** — бесплатное профилактическое обследование по полису ОМС: до сорока лет раз в три года, после сорока — ежегодно. На неё дают оплачиваемый выходной день.":
    "Eigens zu nennen ist die **Vorsorgeuntersuchung** — eine kostenlose Reihenuntersuchung über die Krankenversicherung: bis vierzig alle drei Jahre, ab vierzig jährlich. Dafür gibt es einen bezahlten freien Tag.",
  "Школа": "Die Schule",
  "Школьное обучение занимает **одиннадцать классов**: четыре года начальной школы, пять лет основной и два года старшей. Обязательным Конституция называет **основное общее образование** — то есть девять классов; дальше человек выбирает старшую школу или колледж.":
    "Die Schulzeit umfasst **elf Klassen**: vier Jahre Grundschule, fünf Jahre Mittelstufe und zwei Jahre Oberstufe. Verpflichtend nennt die Verfassung die **allgemeine Grundbildung** — also neun Klassen; danach wählt man Oberstufe oder Berufsschule.",
  "Учебный год начинается **1 сентября**, и это государственный праздник — **День знаний**. Оценки ставятся по **пятибалльной** шкале, где **5** — высшая, а **2** — неудовлетворительно; единицу на практике почти не ставят.":
    "Das Schuljahr beginnt am **1. September**, und das ist ein staatlicher Feiertag — der **Tag des Wissens**. Benotet wird auf einer **fünfstufigen** Skala, auf der **5** die beste Note ist und **2** ungenügend; eine Eins wird in der Praxis fast nie gegeben.",
  "Приём в школу идёт по территориальному принципу: за каждой школой закреплён свой участок, и живущим на нём место гарантировано. Оставшиеся места распределяются между всеми остальными.":
    "Die Aufnahme in die Schule folgt dem Ortsprinzip: jeder Schule ist ein Einzugsgebiet zugeordnet, und wer darin wohnt, hat einen Platz sicher. Die übrigen Plätze werden unter allen anderen verteilt.",
  "Экзамены": "Die Prüfungen",
  "После **девятого** класса сдают **ОГЭ** — основной государственный экзамен. После **одиннадцатого** — **ЕГЭ**, единый государственный экзамен, который с **2009 года** служит одновременно выпускным и вступительным.":
    "Nach der **neunten** Klasse legt man die **OGE** ab — die staatliche Hauptprüfung. Nach der **elften** die **EGE**, die einheitliche Staatsprüfung, die seit **2009** zugleich Abschluss- und Aufnahmeprüfung ist.",
  "Обязательны русский язык и математика; остальные предметы выбирают под будущую специальность. **Результаты ЕГЭ действуют четыре года**, так что поступать можно не сразу после школы.":
    "Verpflichtend sind Russisch und Mathematik; die übrigen Fächer wählt man nach dem angestrebten Studienfach. **Die Ergebnisse der EGE gelten vier Jahre**, man muss sich also nicht sofort nach der Schule bewerben.",
  "Какой экзамен сдают после девятого класса?": "Welche Prüfung legt man nach der neunten Klasse ab?",
  "ОГЭ": "Die OGE",
  "ЕГЭ": "Die EGE",
  "Вступительные экзамены вуза": "Die Aufnahmeprüfung der Hochschule",
  "Никакого": "Gar keine",
  "ЕГЭ сдают после одиннадцатого класса, и он служит и выпускным, и вступительным экзаменом сразу.":
    "Die EGE legt man nach der elften Klasse ab, und sie ist Abschluss- und Aufnahmeprüfung in einem.",
  "После школы": "Nach der Schule",
  "Колледж": "Das Kolleg",
  "Среднее профессиональное образование. Поступают после девятого или одиннадцатого класса, учатся два-четыре года и выходят с профессией.":
    "Die berufliche Mittelstufe. Man tritt nach der neunten oder elften Klasse ein, lernt zwei bis vier Jahre und geht mit einem Beruf heraus.",
  "Бакалавриат и специалитет": "Bakkalaureat und Spezialistenstudium",
  "Первая ступень высшего образования: четыре года у бакалавра, пять-шесть лет у специалиста — например, у врача.":
    "Die erste Stufe der Hochschulbildung: vier Jahre beim Bakkalaureat, fünf bis sechs beim Spezialistenstudium — etwa in der Medizin.",
  "Магистратура": "Das Masterstudium",
  "Ещё два года после бакалавриата. Можно сменить направление, и второе высшее при этом не считается платным по умолчанию.":
    "Noch zwei Jahre nach dem Bakkalaureat. Man kann die Fachrichtung wechseln, und ein zweites Studium gilt dabei nicht ohne Weiteres als kostenpflichtig.",
  "Аспирантура": "Die Aspirantur",
  "Подготовка к научной работе и к защите диссертации. Отсюда выходят кандидаты наук.":
    "Die Vorbereitung auf wissenschaftliche Arbeit und die Verteidigung einer Dissertation. Von hier gehen die Kandidaten der Wissenschaften hervor.",
  "Места в вузах делятся на **бюджетные** — оплаченные государством и распределяемые по конкурсу баллов — и **платные**. Конституция и говорит именно так: высшее образование бесплатно **на конкурсной основе**, то есть не всем, но и не за деньги.":
    "Die Studienplätze teilen sich in **haushaltsfinanzierte** — vom Staat bezahlt und nach Punktzahl vergeben — und **kostenpflichtige**. Die Verfassung sagt es genau so: Hochschulbildung ist **auf Wettbewerbsgrundlage** kostenlos, also nicht für alle, aber auch nicht gegen Geld.",
  "Сколько времени действуют результаты ЕГЭ?": "Wie lange gelten die Ergebnisse der EGE?",
  "Один год": "Ein Jahr",
  "Четыре года": "Vier Jahre",
  "Бессрочно": "Unbefristet",
  "До конца календарного года": "Bis zum Ende des Kalenderjahres",
  "Поэтому поступать можно не сразу после школы: результат остаётся действительным несколько приёмных кампаний подряд.":
    "Deshalb muss man sich nicht sofort nach der Schule bewerben: das Ergebnis bleibt über mehrere Bewerbungsrunden hinweg gültig.",
  "Полис ОМС действует **по всей стране**, а не только в регионе, где выдан. Переехав, менять его не нужно — нужно только прикрепиться к новой поликлинике.":
    "Die Krankenversicherungskarte gilt **im ganzen Land**, nicht nur in der Region, in der sie ausgestellt wurde. Nach einem Umzug muss man sie nicht wechseln — nur sich bei einer neuen Ambulanz einschreiben.",
  // ru-zhizn-v-rossii
  "Почему это важно: почти любое дело здесь начинается с документа, и почти любой документ теперь оформляется в одном из двух мест — в многофункциональном центре или на портале. Знать, куда идти, важнее, чем знать название ведомства.":
    "Warum das wichtig ist: fast jede Angelegenheit beginnt hier mit einem Dokument, und fast jedes Dokument wird inzwischen an einem von zwei Orten ausgestellt — im Bürgeramt oder auf dem Portal. Zu wissen, wohin man geht, ist wichtiger, als den Namen der Behörde zu kennen.",
  "Паспорт": "Der Pass",
  "До четырнадцати лет главный документ ребёнка — **свидетельство о рождении**. Затем выдаётся **паспорт гражданина Российской Федерации**, и его **меняют в 20 и в 45 лет**; после сорока пяти он служит уже без замены. Просроченный паспорт недействителен, и на замену даётся ограниченный срок.":
    "Bis vierzehn ist die **Geburtsurkunde** das wichtigste Dokument eines Kindes. Danach wird der **Pass eines Bürgers der Russischen Föderation** ausgestellt, und er wird **mit 20 und mit 45 Jahren erneuert**; nach fünfundvierzig gilt er ohne Erneuerung. Ein abgelaufener Pass ist ungültig, und für die Erneuerung gilt eine begrenzte Frist.",
  "Для поездок за границу существует отдельный **заграничный паспорт** — обычный на пять лет и биометрический на десять. Внутренний паспорт за пределами страны не действует.":
    "Für Reisen ins Ausland gibt es einen eigenen **Auslandspass** — den gewöhnlichen für fünf Jahre und den biometrischen für zehn. Der Inlandspass gilt außerhalb des Landes nicht.",
  "В каком возрасте меняют паспорт гражданина России?":
    "In welchem Alter wird der russische Inlandspass erneuert?",
  "В 20 и в 45 лет": "Mit 20 und mit 45 Jahren",
  "В 18 и в 40 лет": "Mit 18 und mit 40 Jahren",
  "Каждые десять лет": "Alle zehn Jahre",
  "Паспорт не меняют": "Der Pass wird nicht erneuert",
  "Выдаётся он в 14 лет, а после 45 служит без замены. Просроченный паспорт недействителен.":
    "Ausgestellt wird er mit 14 Jahren, und nach 45 gilt er ohne Erneuerung. Ein abgelaufener Pass ist ungültig.",
  "Регистрация, а не прописка": "Registrierung, nicht Wohnerlaubnis",
  "Советская **прописка**, дававшая разрешение жить в городе, отменена в **1993 году**. Её место занял **регистрационный учёт**, и это принципиально другое: регистрация **уведомляет** государство о месте жительства, а не разрешает его. Конституционный Суд отдельно указывал, что регистрация не может быть условием осуществления прав.":
    "Die sowjetische **Propiska**, die die Erlaubnis gab, in einer Stadt zu wohnen, wurde **1993** abgeschafft. An ihre Stelle trat die **Meldung**, und das ist etwas grundsätzlich anderes: die Meldung **teilt dem Staat den Wohnort mit**, sie erlaubt ihn nicht. Das Verfassungsgericht hat eigens festgestellt, dass die Meldung keine Bedingung für die Ausübung von Rechten sein darf.",
  "Различают два вида. **Регистрация по месту жительства** — постоянная, ставится штампом в паспорт. **Регистрация по месту пребывания** — временная, оформляется, если человек живёт по другому адресу **более 90 дней**, и выдаётся отдельным свидетельством. Одна другую не отменяет.":
    "Man unterscheidet zwei Arten. Die **Meldung am Wohnort** ist dauerhaft und wird als Stempel in den Pass gesetzt. Die **Meldung am Aufenthaltsort** ist vorübergehend, wird nötig, wenn jemand **länger als 90 Tage** unter einer anderen Anschrift lebt, und wird als eigene Bescheinigung ausgestellt. Die eine hebt die andere nicht auf.",
  "Через какой срок проживания по новому адресу нужна регистрация по месту пребывания?":
    "Nach welcher Aufenthaltsdauer unter einer neuen Anschrift ist eine Meldung am Aufenthaltsort nötig?",
  "Более 90 дней": "Nach mehr als 90 Tagen",
  "Более 7 дней": "Nach mehr als 7 Tagen",
  "Более года": "Nach mehr als einem Jahr",
  "Она не требуется вовсе": "Sie ist überhaupt nicht nötig",
  "Постоянная регистрация по месту жительства при этом сохраняется: временная её не отменяет и ставится не штампом, а отдельным свидетельством.":
    "Die dauerhafte Meldung am Wohnort bleibt dabei bestehen: die vorübergehende hebt sie nicht auf und wird nicht als Stempel, sondern als eigene Bescheinigung ausgestellt.",
  "ЗАГС": "Das Standesamt",
  "**Органы записи актов гражданского состояния** регистрируют рождение, брак, расторжение брака, установление отцовства, перемену имени и смерть. Правовые последствия имеет только брак, заключённый там: **венчание в церкви само по себе брака не создаёт**.":
    "Die **Behörden für Personenstandsangelegenheiten** beurkunden Geburt, Eheschließung, Scheidung, Vaterschaftsfeststellung, Namensänderung und Tod. Rechtsfolgen hat nur die dort geschlossene Ehe: **eine kirchliche Trauung allein begründet keine Ehe**.",
  "Брачный возраст — **18 лет**; при уважительных причинах он может быть снижен до шестнадцати, а в отдельных регионах и ниже по региональному закону. Между подачей заявления и регистрацией по общему правилу проходит месяц.":
    "Das Ehealter beträgt **18 Jahre**; aus wichtigem Grund kann es auf sechzehn gesenkt werden, in einzelnen Regionen nach regionalem Gesetz auch darunter. Zwischen Anmeldung und Trauung liegt in der Regel ein Monat.",
  "Какой брак имеет правовые последствия?": "Welche Ehe hat Rechtsfolgen?",
  "Заключённый в органах ЗАГС": "Die vor dem Standesamt geschlossene",
  "Освящённый в церкви": "Die in der Kirche geweihte",
  "Любой, если пара живёт вместе более года": "Jede, wenn das Paar länger als ein Jahr zusammenlebt",
  "Заверенный у нотариуса": "Die von einem Notar beglaubigte",
  // ru-zhizn-v-rossii
  "Венчание можно совершить дополнительно, но само по себе оно брака не создаёт. Совместная жизнь без регистрации тоже не приравнивается к браку.":
    "Eine kirchliche Trauung kann zusätzlich stattfinden, begründet für sich genommen aber keine Ehe. Auch ein Zusammenleben ohne Beurkundung wird einer Ehe nicht gleichgestellt.",
  "Куда идти": "Wohin man geht",
  "МФЦ": "Das Bürgeramt",
  "Многофункциональный центр, вывеска «Мои документы». Одно окно почти для всего: паспорт, регистрация, справки, выписки, пособия.":
    "Das Mehrzweckzentrum, erkennbar am Schild «Meine Dokumente». Ein Schalter für fast alles: Pass, Meldung, Bescheinigungen, Auszüge, Beihilfen.",
  "Портал и приложение. Подтверждённая учётная запись позволяет подать большинство заявлений и записаться на приём, не выходя из дома.":
    "Portal und App. Ein bestätigtes Konto erlaubt es, die meisten Anträge zu stellen und Termine zu buchen, ohne das Haus zu verlassen.",
  "Налоговая": "Die Steuerbehörde",
  "ИНН, декларации, налоговые вычеты — в том числе на лечение, обучение и покупку жилья. Личный кабинет заменяет визит.":
    "Steuernummer, Erklärungen, Steuerabzüge — auch für Behandlung, Ausbildung und Wohnungskauf. Das persönliche Konto ersetzt den Besuch.",
  "Социальный фонд": "Der Sozialfonds",
  "Пенсии, пособия, СНИЛС и сведения о стаже. Образован объединением пенсионного и социального фондов.":
    "Renten, Beihilfen, die Versicherungsnummer und die Angaben zur Beschäftigungszeit. Entstanden aus der Zusammenlegung von Renten- und Sozialfonds.",
  "Экстренные номера и воинский учёт": "Notrufnummern und Wehrerfassung",
  "Единый номер — **112**. Отдельно работают **101** (пожарные и спасатели), **102** (полиция), **103** (скорая помощь) и **104** (аварийная газовая служба). Со 112 можно звонить без денег на счету, без сим-карты и с заблокированного телефона.":
    "Die einheitliche Nummer ist die **112**. Daneben arbeiten die **101** (Feuerwehr und Rettungskräfte), die **102** (Polizei), die **103** (Rettungsdienst) und die **104** (Gasnotdienst). Die 112 lässt sich ohne Guthaben, ohne SIM-Karte und von einem gesperrten Telefon aus anrufen.",
  "Мужчины состоят на **воинском учёте**. Призыв касается возраста **от 18 до 30 лет**; верхняя граница поднята с 27 до 30 с 2024 года. Тем, чьим убеждениям военная служба противоречит, Конституция даёт право на **альтернативную гражданскую службу** — она дольше и проходит обычно в гражданских учреждениях.":
    "Männer stehen in der **Wehrerfassung**. Die Einberufung betrifft das Alter **von 18 bis 30 Jahren**; die obere Grenze wurde 2024 von 27 auf 30 angehoben. Wem der Wehrdienst seinen Überzeugungen widerspricht, dem gibt die Verfassung das Recht auf einen **zivilen Ersatzdienst** — er dauert länger und wird meist in zivilen Einrichtungen geleistet.",
  "Отсутствие регистрации не лишает человека прав — ни на медицинскую помощь, ни на школу для ребёнка, ни на выборы. Но за проживание без неё дольше установленного срока предусмотрен штраф, так что это обязанность, а не разрешение.":
    "Eine fehlende Meldung nimmt niemandem seine Rechte — weder auf ärztliche Hilfe noch auf einen Schulplatz für das Kind noch auf die Wahl. Aber für ein Wohnen ohne sie über die Frist hinaus ist ein Bußgeld vorgesehen; es ist also eine Pflicht, keine Erlaubnis.",
  // ru-byt
  "Почему это важно: правила из этого урока нигде не записаны, но нарушают их заметнее, чем законы. Разуться в прихожей и подарить нечётное число цветов — мелочи, по которым сразу видно, свой человек в доме или чужой.":
    "Warum das wichtig ist: die Regeln dieser Lektion stehen nirgends geschrieben, aber man verstößt gegen sie sichtbarer als gegen Gesetze. Im Flur die Schuhe auszuziehen und eine ungerade Zahl Blumen zu schenken — Kleinigkeiten, an denen man sofort sieht, ob jemand im Haus dazugehört oder fremd ist.",
  "Как обращаться": "Wie man jemanden anspricht",
  "У человека три имени: **имя, отчество и фамилия**. Отчество образуется от имени отца — **Иванович** и **Ивановна**, **Сергеевич** и **Сергеевна**. Обращение по имени и отчеству — уважительное: так говорят с преподавателем, врачом, начальником, с человеком старше себя.":
    "Ein Mensch hat drei Namen: **Vorname, Vatersname und Familienname**. Der Vatersname wird vom Namen des Vaters gebildet — **Iwanowitsch** und **Iwanowna**, **Sergejewitsch** und **Sergejewna**. Die Anrede mit Vor- und Vatersnamen ist die respektvolle: so spricht man mit einer Lehrkraft, einem Arzt, einer vorgesetzten Person, mit jemandem, der älter ist.",
  "Есть **«ты»** и **«вы»**. К незнакомому, к старшему, к должностному лицу — только «вы». Переход на «ты» предлагает старший или тот, кто выше по положению, и предложение это обычно произносят вслух.":
    "Es gibt **«du»** und **«Sie»**. Zu Unbekannten, zu Älteren, zu Amtspersonen — nur «Sie». Den Übergang zum «du» schlägt die ältere oder die höherstehende Person vor, und dieser Vorschlag wird meist ausgesprochen.",
  "Полные имена в быту почти не звучат: **Александр** — Саша, **Мария** — Маша, **Дмитрий** — Дима, **Екатерина** — Катя. Уменьшительное имя не фамильярность, а норма между знакомыми; но с отчеством оно не сочетается.":
    "Vollständige Vornamen hört man im Alltag kaum: **Alexander** wird zu Sascha, **Maria** zu Mascha, **Dmitri** zu Dima, **Jekaterina** zu Katja. Die Koseform ist keine Vertraulichkeit, sondern das Übliche unter Bekannten; mit dem Vatersnamen zusammen steht sie aber nicht.",
  "В гостях": "Zu Gast",
  "В квартире **разуваются в прихожей** — почти без исключений; гостю дают тапочки. Приходить с пустыми руками не принято: приносят торт, конфеты или бутылку к столу.":
    "In einer Wohnung **zieht man im Flur die Schuhe aus** — fast ausnahmslos; dem Gast gibt man Hausschuhe. Mit leeren Händen zu kommen ist nicht üblich: man bringt Kuchen, Konfekt oder eine Flasche für den Tisch mit.",
  "**Цветы дарят нечётным числом** — три, пять, семь. Чётное число несут на похороны, и ошибка эта считается неприятной. Большие букеты считают уже не по одному цветку, но привычка держится крепко.":
    "**Blumen schenkt man in ungerader Zahl** — drei, fünf, sieben. Eine gerade Zahl bringt man zu einer Beerdigung, und dieser Fehler gilt als unangenehm. Bei großen Sträußen zählt man nicht mehr einzeln nach, aber die Gewohnheit hält sich fest.",
  "Через порог не здороваются и не передают вещей — примета старая, но соблюдают её многие. Хозяин сначала зовёт войти, и только потом подают руку.":
    "Über die Türschwelle hinweg grüßt man nicht und reicht keine Dinge — ein alter Aberglaube, an den sich aber viele halten. Der Gastgeber bittet erst herein, und erst danach gibt man die Hand.",
  "Сколько цветов принято дарить?": "Wie viele Blumen schenkt man üblicherweise?",
  "Нечётное число: три, пять, семь": "Eine ungerade Zahl: drei, fünf, sieben",
  "Чётное число": "Eine gerade Zahl",
  "Ровно дюжину": "Genau ein Dutzend",
  "Число значения не имеет": "Die Zahl spielt keine Rolle",
  "Чётное число цветов несут на похороны. Очень большие букеты по одному цветку уже не считают, но правило держится.":
    "Eine gerade Zahl Blumen bringt man zu einer Beerdigung. Bei sehr großen Sträußen zählt man nicht mehr einzeln, aber die Regel hält sich.",
  "За столом": "Bei Tisch",
  "Обед состоит из **первого** — супа, **второго** и **третьего**, то есть напитка. Суп здесь не закуска, а полноценное блюдо: **борщ** со свёклой, **щи** из капусты, **уха** из рыбы, **солянка**.":
    "Ein Mittagessen besteht aus dem **ersten** — der Suppe —, dem **zweiten** und dem **dritten**, also dem Getränk. Suppe ist hier keine Vorspeise, sondern ein vollwertiger Gang: **Borschtsch** mit Roter Bete, **Schtschi** aus Kohl, **Ucha** aus Fisch, **Soljanka**.",
  "Дальше — **пельмени**, **каша**, **картошка**, **блины**, **пироги**. Со **сметаной** едят почти всё, что можно ею заправить. Из напитков — **чай** в любое время дня, **компот**, **квас** и **морс**.":
    "Weiter geht es mit **Pelmeni**, **Kascha**, **Kartoffeln**, **Blini** und **Piroggen**. Mit **Smetana** isst man fast alles, was sich damit anrichten lässt. An Getränken gibt es **Tee** zu jeder Tageszeit, **Kompott**, **Kwas** und **Mors**.",
  "**Солёные огурцы**, квашеная капуста и варенье — заготовки, которые многие семьи делают сами, банками, на всю зиму. Отсюда и погреба на дачах, и балконы, заставленные в сентябре.":
    "**Salzgurken**, Sauerkraut und Eingemachtes sind Vorräte, die viele Familien glasweise selbst für den ganzen Winter einlegen. Daher die Keller auf den Datschen und die im September vollgestellten Balkone.",
  "Дача и баня": "Datscha und Banja",
  "**Дача** — не загородный дом богатых, а массовое явление: участки по **шесть соток** раздавали работникам предприятий в советское время, и на них строили дом своими руками. Летом города заметно пустеют по выходным именно поэтому.":
    "Die **Datscha** ist kein Landhaus der Reichen, sondern eine Massenerscheinung: Parzellen von **sechs Ar** wurden in der Sowjetzeit an die Beschäftigten der Betriebe vergeben, und darauf baute man das Haus mit eigenen Händen. Genau deshalb leeren sich die Städte im Sommer an den Wochenenden merklich.",
  "**Баня** — не только мытьё. Ходят компанией, парятся **веником** из берёзовых или дубовых веток, между заходами пьют чай. Суббота — традиционный банный день.":
    "Die **Banja** ist nicht nur Waschen. Man geht in Gesellschaft hin, schwitzt und schlägt sich mit einem **Wenik** aus Birken- oder Eichenzweigen ab und trinkt zwischen den Gängen Tee. Der Samstag ist der überlieferte Banja-Tag.",
  "Зима и календарь": "Winter und Kalender",
  "**Новый год** — главный семейный праздник года, и по значению он здесь стоит выше Рождества. Ставят **ёлку**, ждут **Деда Мороза** и его внучку **Снегурочку**, под **бой курантов** в полночь провожают старый год. На столе — **оливье**, селёдка под шубой и мандарины; **новогодние каникулы** длятся с 1 по 8 января.":
    "**Neujahr** ist das wichtigste Familienfest des Jahres und steht hier in seiner Bedeutung über Weihnachten. Man stellt einen **Tannenbaum** auf, wartet auf **Väterchen Frost** und seine Enkelin **Snegurotschka** und verabschiedet das alte Jahr um Mitternacht zum **Schlag der Kremlglocken**. Auf dem Tisch stehen **Oliviersalat**, Hering im Pelzmantel und Mandarinen; die **Neujahrsferien** dauern vom 1. bis zum 8. Januar.",
  "Зимой работает **центральное отопление**: тепло идёт в дома из общей котельной, а не от собственного котла в квартире. Отопительный сезон начинают, когда среднесуточная температура **пять дней подряд держится ниже +8 °C** — то есть по погоде, а не по календарю.":
    "Im Winter arbeitet die **Fernwärme**: die Wärme kommt aus einem gemeinsamen Heizwerk in die Häuser, nicht aus einer eigenen Therme in der Wohnung. Die Heizperiode beginnt, wenn die Tagesmitteltemperatur **fünf Tage hintereinander unter +8 °C bleibt** — also nach dem Wetter, nicht nach dem Kalender.",
  "Кто по традиции приходит вместе с Дедом Морозом?":
    "Wer kommt der Überlieferung nach zusammen mit Väterchen Frost?",
  "Снегурочка, его внучка": "Snegurotschka, seine Enkelin",
  "Его жена": "Seine Frau",
  "Никто, он приходит один": "Niemand, er kommt allein",
  "Помощники-эльфы": "Helfende Elfen",
  "Пару Дед Мороз и Снегурочка знают все, и обоих зовут на детские праздники. Подарки кладут под ёлку, а не в чулки.":
    "Das Paar Väterchen Frost und Snegurotschka kennt jeder, und beide lädt man zu Kinderfesten ein. Die Geschenke legt man unter den Baum, nicht in Strümpfe.",
  "По какому признаку начинают отопительный сезон?": "Woran macht man den Beginn der Heizperiode fest?",
  "Когда среднесуточная температура пять дней держится ниже +8 °C":
    "Daran, dass die Tagesmitteltemperatur fünf Tage lang unter +8 °C bleibt",
  "С первого октября по всей стране": "Am ersten Oktober, im ganzen Land",
  "Когда об этом попросят жильцы дома": "Daran, dass die Hausbewohner darum bitten",
  "Когда выпадет снег": "Daran, dass Schnee fällt",
  "Отопление идёт из общей котельной, а не от котла в квартире, поэтому и включают его сразу на весь район — по погоде, а не по календарю.":
    "Die Wärme kommt aus einem gemeinsamen Heizwerk, nicht aus einer Therme in der Wohnung, und deshalb wird sie für ein ganzes Viertel auf einmal angestellt — nach dem Wetter, nicht nach dem Kalender.",
  "Каждый день": "Jeden Tag",
  "Подъезд": "Der Hauseingang",
  "Общий вход в многоквартирный дом, обычно с домофоном. Соседи по подъезду — отдельный круг знакомств, и объявления вешают именно там.":
    "Der gemeinsame Eingang eines Mehrfamilienhauses, meist mit Türsprechanlage. Die Nachbarn im selben Aufgang sind ein eigener Bekanntenkreis, und Aushänge hängen genau dort.",
  "Метро": "Die Metro",
  "Работает в Москве, Санкт-Петербурге, Нижнем Новгороде, Новосибирске, Самаре, Екатеринбурге и Казани. В остальных городах — автобусы, троллейбусы и трамваи.":
    "Sie fährt in Moskau, Sankt Petersburg, Nischni Nowgorod, Nowosibirsk, Samara, Jekaterinburg und Kasan. In den übrigen Städten fahren Busse, Oberleitungsbusse und Straßenbahnen.",
  "Электричка": "Die Elektritschka",
  "Пригородный поезд. Ими ездят на дачу и на работу из области, и расписание знают наизусть.":
    "Der Vorortzug. Mit ihm fährt man zur Datscha und aus dem Umland zur Arbeit, und den Fahrplan kennt man auswendig.",
  "Маршрутка": "Die Marschrutka",
  "Микроавтобус по фиксированному маршруту, останавливающийся по просьбе. Билета нет — платят при входе или при выходе.":
    "Ein Kleinbus auf fester Strecke, der auf Zuruf hält. Ein Ticket gibt es nicht — bezahlt wird beim Einsteigen oder beim Aussteigen.",
  "Тапочки в прихожей и просьба разуться — не проверка гостя на послушание. Улицу зимой посыпают реагентами, и хозяева берегут пол, а не проверяют манеры.":
    "Hausschuhe im Flur und die Bitte, die Schuhe auszuziehen, sind keine Gehorsamsprobe für den Gast. Die Straßen werden im Winter mit Streusalz behandelt, und die Gastgeber schonen den Boden, nicht die Manieren.",
};
