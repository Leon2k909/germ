/**
 * Russian for the Leben in Deutschland course cards, headings and questions.
 *
 * The first course a Russian reader can open with help. Russian became a
 * complete interface language in v1.2.1073 — every string of the app itself,
 * every card note — and the country courses were the one place where the
 * switch beside a card still had nothing to offer: the tables existed for
 * German, English, Polish and French, and Russian was not among them.
 *
 * Keyed on the GERMAN source text exactly as it appears in
 * lebenInDeutschlandCourse.ts. A missing key is not an error — the card shows
 * the original and says there is no translation — but a key that matches
 * nothing is, because it fails silently: the card renders, the tap works, and
 * the reader is told a translated card has no translation. Every key here was
 * extracted from the built module and paired back, never retyped: one wrong
 * character — a straight quote for a typographic one, ss for ß — and the
 * lookup misses without a sound. check-ru-country-translations catches that.
 *
 * The line between what is translated and what is not runs where Russian
 * itself draws it. An institution Russian has a name for gets that name —
 * Бундестаг, Бундесрат, Основной закон. What stays German is what a reader
 * will meet printed on a form or a doorplate and nowhere else: das
 * Bürgeramt, die Anmeldung, die Steuernummer, das Jobcenter. Those lead in
 * German, and a Russian gloss follows once.
 */
export const LEBEN_IN_DEUTSCHLAND_RU: Record<string, string> = {
  "Politik, Geschichte und Gesellschaft — wie das Land funktioniert.":
    "Политика, история и общество — как устроена эта страна.",
  "Grundgesetz und Grundrechte": "Основной закон и основные права",
  "Politik in der Demokratie": "Политика в демократии",
  "Warum diese Lektion zuerst: Ein großer Teil der Fragen prüft nicht Wissen über Deutschland, sondern über die Werte, auf denen es aufgebaut ist. Die stehen alle im Grundgesetz — und zwar gleich am Anfang.":
    "Почему эта лекция стоит первой: большая часть вопросов проверяет не знания о Германии, а ценности, на которых она построена. Все они записаны в Основном законе — причём в самом его начале.",
  "Das Grundgesetz": "Основной закон",
  "Die Verfassung der Bundesrepublik heißt **Grundgesetz**. Sie trat am **23. Mai 1949** in Kraft. Der Name war als Provisorium gedacht: Solange Deutschland geteilt war, wollte man sich das Wort „Verfassung“ für die Wiedervereinigung aufheben. Seit 1990 gilt das Grundgesetz für ganz Deutschland und ist die Verfassung geblieben.":
    "Конституция Федеративной Республики называется **Grundgesetz**, Основной закон. Она вступила в силу **23 мая 1949 года**. Название задумывалось как временное: пока Германия была разделена, слово «конституция» берегли для объединения. С 1990 года Основной закон действует для всей Германии и конституцией так и остался.",
  "Artikel 1: die Menschenwürde": "Статья 1: достоинство человека",
  "Der erste Satz des Grundgesetzes lautet: **„Die Würde des Menschen ist unantastbar.“** Er steht bewusst an erster Stelle — als Antwort auf den Nationalsozialismus, der genau das bestritten hatte.":
    "Первое предложение Основного закона гласит: **«Достоинство человека неприкосновенно.»** Оно намеренно стоит на первом месте — как ответ национал-социализму, который отрицал именно это.",
  "Artikel 1 und der Kern der Grundrechte können nicht abgeschafft werden, auch nicht durch eine Mehrheit im Parlament. Das nennt man die **Ewigkeitsklausel** (Artikel 79 Absatz 3). Genau danach wird gefragt.":
    "Статью 1 и ядро основных прав отменить нельзя, в том числе большинством в парламенте. Это называют **клаузулой вечности** (статья 79, абзац 3). Именно об этом и спрашивают.",
  "Die wichtigsten Grundrechte": "Важнейшие основные права",
  "Menschenwürde (Art. 1)": "Достоинство человека (ст. 1)",
  "Unantastbar. Grundlage für alles Weitere.": "Неприкосновенно. Основа всего остального.",
  "Freie Entfaltung (Art. 2)": "Свободное развитие личности (ст. 2)",
  "Jeder darf leben, wie er möchte, solange er nicht die Rechte anderer verletzt.":
    "Каждый вправе жить так, как хочет, пока не нарушает прав других.",
  "Gleichheit (Art. 3)": "Равенство (ст. 3)",
  "Alle Menschen sind vor dem Gesetz gleich. Niemand darf wegen Geschlecht, Herkunft, Sprache, Glauben oder Behinderung benachteiligt werden.":
    "Все люди равны перед законом. Никого нельзя ставить в худшее положение из-за пола, происхождения, языка, веры или инвалидности.",
  "Glaubensfreiheit (Art. 4)": "Свобода вероисповедания (ст. 4)",
  "Jeder darf glauben, was er will — oder nichts glauben.":
    "Каждый вправе верить во что хочет — или не верить ни во что.",
  "Meinungsfreiheit (Art. 5)": "Свобода выражения мнения (ст. 5)",
  "Meinung äußern, Presse, Rundfunk, Kunst und Wissenschaft sind frei. Eine Zensur findet nicht statt.":
    "Высказывание мнения, печать, радио и телевидение, искусство и наука свободны. Цензуры не существует.",
  "Versammlungsfreiheit (Art. 8)": "Свобода собраний (ст. 8)",
  "Sich friedlich und ohne Waffen versammeln — auch zu Demonstrationen.":
    "Собираться мирно и без оружия — в том числе на демонстрации.",
  "Wo Freiheit endet": "Где свобода кончается",
  "Meinungsfreiheit ist nicht grenzenlos. **Volksverhetzung**, **Beleidigung** und das **Leugnen des Holocaust** sind Straftaten. Auch die Kunstfreiheit hebt Strafgesetze nicht auf.":
    "Свобода мнения не безгранична. **Разжигание ненависти**, **оскорбление** и **отрицание Холокоста** — уголовные преступления. Свобода искусства тоже не отменяет уголовных законов.",
  "Das musst du wissen": "Это нужно знать",
  "Wichtige Namen": "Важные имена",
  "In dieser Lektion geht es um Prinzipien, nicht um Personen — die kommen ab Kapitel 2.":
    "В этой лекции речь о принципах, а не о людях — они появятся начиная со второй главы.",
  "Wichtige Zahlen": "Важные числа",
  "33 Fragen · 60 Minuten · 17 zum Bestehen · 30 bundesweit + 3 zum Bundesland. Grundgesetz seit 23. Mai 1949. Artikel 1 Menschenwürde, Artikel 3 Gleichheit, Artikel 5 Meinungsfreiheit.":
    "33 вопроса · 60 минут · 17 для сдачи · 30 общефедеральных + 3 о своей земле. Основной закон с 23 мая 1949 года. Статья 1 — достоинство человека, статья 3 — равенство, статья 5 — свобода мнения.",
  "Wichtige Begriffe": "Важные понятия",
  "Grundgesetz · Grundrechte · Menschenwürde · Ewigkeitsklausel · Zensurverbot · Volksverhetzung.":
    "Основной закон · основные права · достоинство человека · клаузула вечности · запрет цензуры · разжигание ненависти.",
  "In einem Satz: Das Grundgesetz beginnt mit der Menschenwürde, und dieser Anfang lässt sich nicht wegstimmen — das ist die Lehre aus 1933 bis 1945, in Verfassungsform.":
    "Одним предложением: Основной закон начинается с достоинства человека, и это начало нельзя отменить голосованием — таков урок 1933–1945 годов, переведённый в форму конституции.",
  "Jetzt beantworte diese Fragen": "Теперь ответь на эти вопросы",
  "Wie viele Fragen musst du im Einbürgerungstest richtig beantworten, um zu bestehen?":
    "Сколько вопросов нужно решить правильно в тесте на гражданство, чтобы сдать?",
  "15 von 33": "15 из 33",
  "17 von 33": "17 из 33",
  "20 von 33": "20 из 33",
  "25 von 33": "25 из 33",
  "17 von 33 Fragen genügen. Du hast 60 Minuten Zeit, und wer nicht besteht, darf beliebig oft wiederholen.":
    "Достаточно 17 вопросов из 33. Времени даётся 60 минут, а кто не сдал, может пересдавать сколько угодно раз.",
  "Wie lautet der erste Artikel des Grundgesetzes?": "Как звучит первая статья Основного закона?",
  "Alle Menschen sind vor dem Gesetz gleich.": "Все люди равны перед законом.",
  "Die Würde des Menschen ist unantastbar.": "Достоинство человека неприкосновенно.",
  "Deutschland ist ein demokratischer und sozialer Bundesstaat.":
    "Германия — демократическое и социальное федеративное государство.",
  "Jeder hat das Recht auf freie Meinungsäußerung.":
    "Каждый имеет право свободно выражать своё мнение.",
  "Artikel 1 stellt die Menschenwürde an den Anfang. Die Gleichheit steht in Artikel 3, der Bundesstaat in Artikel 20, die Meinungsfreiheit in Artikel 5.":
    "Статья 1 ставит на первое место достоинство человека. Равенство стоит в статье 3, федеративное государство — в статье 20, свобода мнения — в статье 5.",
  "Was bedeutet die Ewigkeitsklausel im Grundgesetz?":
    "Что означает клаузула вечности в Основном законе?",
  "Das Grundgesetz kann nie geändert werden": "Основной закон нельзя изменить никогда",
  "Die Menschenwürde und der Kern der Grundrechte können nicht abgeschafft werden":
    "Достоинство человека и ядро основных прав отменить нельзя",
  "Gesetze gelten unbefristet": "Законы действуют бессрочно",
  "Der Bundespräsident wird auf Lebenszeit gewählt": "Федерального президента избирают пожизненно",
  "Das Grundgesetz ist änderbar — aber Artikel 1 und der Kern der Grundrechte sind es nicht, auch nicht mit einer Mehrheit im Parlament.":
    "Основной закон изменяем — но статья 1 и ядро основных прав нет, даже большинством в парламенте.",
  "Demokratie und Rechtsstaat": "Демократия и правовое государство",
  "Artikel 20 des Grundgesetzes fasst in einem Satz zusammen, was für ein Staat Deutschland ist: **„Die Bundesrepublik Deutschland ist ein demokratischer und sozialer Bundesstaat.“** Dazu kommt der Rechtsstaat. Diese vier Begriffe werden immer wieder abgefragt.":
    "Статья 20 Основного закона в одном предложении говорит, какое государство Германия: **«Федеративная Республика Германия — демократическое и социальное федеративное государство.»** К этому добавляется правовое государство. Об этих четырёх понятиях спрашивают снова и снова.",
  "Die fünf Staatsprinzipien": "Пять принципов государства",
  "Demokratie": "Демократия",
  "Alle Staatsgewalt geht vom Volke aus. Gewählt wird in freien, gleichen und geheimen Wahlen.":
    "Вся государственная власть исходит от народа. Выбирают на свободных, равных и тайных выборах.",
  "Rechtsstaat": "Правовое государство",
  "Auch der Staat ist an Recht und Gesetz gebunden. Gegen jede Entscheidung des Staates kann man vor Gericht ziehen.":
    "Государство тоже связано правом и законом. Любое его решение можно обжаловать в суде.",
  "Sozialstaat": "Социальное государство",
  "Wer in Not gerät, wird aufgefangen — durch Sozialversicherungen und staatliche Leistungen.":
    "Кто попал в беду, того подхватывают — социальным страхованием и государственными выплатами.",
  "Bundesstaat": "Федеративное государство",
  "Deutschland besteht aus 16 Bundesländern, die eigene Aufgaben und eigene Parlamente haben.":
    "Германия состоит из 16 федеральных земель, у которых есть свои задачи и свои парламенты.",
  "Republik": "Республика",
  "Das Staatsoberhaupt wird gewählt, es gibt keinen König und keinen Kaiser.":
    "Главу государства избирают, короля и императора нет.",
  "Gewaltenteilung": "Разделение властей",
  "Die Staatsgewalt ist auf drei Bereiche verteilt, damit niemand allein bestimmen kann. Das ist die Antwort auf die Diktatur, in der alle Gewalt in einer Hand lag.":
    "Государственная власть разделена на три части, чтобы никто не решал в одиночку. Это ответ диктатуре, в которой вся власть лежала в одной руке.",
  "Legislative": "Законодательная власть",
  "Die gesetzgebende Gewalt: Bundestag und Bundesrat beschließen die Gesetze.":
    "Власть, издающая законы: Бундестаг и Бундесрат принимают законы.",
  "Exekutive": "Исполнительная власть",
  "Die vollziehende Gewalt: Regierung, Ministerien, Behörden und Polizei führen die Gesetze aus.":
    "Власть, исполняющая законы: правительство, министерства, ведомства и полиция приводят их в действие.",
  "Judikative": "Судебная власть",
  "Die rechtsprechende Gewalt: unabhängige Gerichte entscheiden, was im Einzelfall gilt.":
    "Власть, выносящая решения: независимые суды определяют, что действует в отдельном случае.",
  "Beliebte Verwechslung: Der Bundestag gehört zur Legislative, die Bundesregierung zur Exekutive. Der Bundeskanzler sitzt zwar im Bundestag, leitet aber die Regierung — also die Exekutive.":
    "Частая путаница: Бундестаг относится к законодательной власти, федеральное правительство — к исполнительной. Федеральный канцлер хоть и заседает в Бундестаге, но возглавляет правительство, то есть исполнительную власть.",
  "Wehrhafte Demokratie": "Обороноспособная демократия",
  "Deutschland lässt es nicht zu, dass die Demokratie mit demokratischen Mitteln abgeschafft wird. Parteien, die die freiheitliche demokratische Grundordnung beseitigen wollen, können vom **Bundesverfassungsgericht** verboten werden. Nur dieses Gericht darf das — keine Regierung, kein Ministerium.":
    "Германия не допускает, чтобы демократию упразднили демократическими средствами. Партии, которые хотят устранить свободный демократический строй, может запретить **Федеральный конституционный суд**. Только этот суд вправе это сделать — ни правительство, ни министерство.",
  "Bundesverfassungsgericht in Karlsruhe — das einzige Gericht, das Parteien verbieten und Gesetze für verfassungswidrig erklären kann.":
    "Федеральный конституционный суд в Карлсруэ — единственный суд, который может запрещать партии и объявлять законы противоречащими конституции.",
  "Artikel 20 Grundgesetz · 3 Gewalten · 16 Bundesländer · 5 Staatsprinzipien.":
    "Статья 20 Основного закона · 3 ветви власти · 16 федеральных земель · 5 принципов государства.",
  "Volkssouveränität · Gewaltenteilung · Legislative · Exekutive · Judikative · wehrhafte Demokratie · freiheitliche demokratische Grundordnung.":
    "Народный суверенитет · разделение властей · законодательная власть · исполнительная власть · судебная власть · обороноспособная демократия · свободный демократический строй.",
  "In einem Satz: Drei getrennte Gewalten, und ein Gericht, das notfalls auch die Politik stoppt — die Demokratie schützt sich vor sich selbst.":
    "Одним предложением: три разделённые ветви власти и суд, который в крайнем случае останавливает и политику — демократия защищает себя от самой себя.",
  "Welche drei Gewalten teilen sich in Deutschland die Staatsgewalt?":
    "Какие три ветви делят между собой государственную власть в Германии?",
  "Bundestag, Bundesrat und Bundesregierung": "Бундестаг, Бундесрат и федеральное правительство",
  "Legislative, Exekutive und Judikative": "Законодательная, исполнительная и судебная",
  "Bund, Länder und Gemeinden": "Федерация, земли и общины",
  "Regierung, Opposition und Presse": "Правительство, оппозиция и пресса",
  "Gesetzgebung, Vollzug und Rechtsprechung. Bundestag und Bundesrat sind Teil der Legislative, die Regierung Teil der Exekutive.":
    "Издание законов, их исполнение и вынесение решений. Бундестаг и Бундесрат — часть законодательной власти, правительство — часть исполнительной.",
  "Wer darf in Deutschland eine Partei verbieten?": "Кто в Германии вправе запретить партию?",
  "Der Bundeskanzler": "Федеральный канцлер",
  "Das Bundesverfassungsgericht": "Федеральный конституционный суд",
  "Der Bundestag mit Zweidrittelmehrheit": "Бундестаг большинством в две трети",
  "Das Bundesinnenministerium": "Федеральное министерство внутренних дел",
  "Nur das Bundesverfassungsgericht in Karlsruhe. Dass keine Regierung ihre Gegner verbieten kann, ist genau der Punkt.":
    "Только Федеральный конституционный суд в Карлсруэ. В том и смысл, что ни одно правительство не может запретить своих противников.",
  "Was bedeutet „Sozialstaat“?": "Что означает «социальное государство»?",
  "Der Staat sichert Menschen in Notlagen ab": "Государство поддерживает людей, попавших в беду",
  "Alle verdienen gleich viel": "Все зарабатывают одинаково",
  "Der Staat besitzt alle Betriebe": "Государству принадлежат все предприятия",
  "Soziale Netzwerke werden staatlich geprüft": "Социальные сети проверяет государство",
  "Der Sozialstaat fängt auf, wer krank, arbeitslos, alt oder in Not ist — über Sozialversicherungen und staatliche Leistungen.":
    "Социальное государство подхватывает того, кто болен, безработен, стар или в нужде, — через социальное страхование и государственные выплаты.",
  "Bundestag und Gesetzgebung": "Бундестаг и законотворчество",
  "Der **Bundestag** ist das Parlament des Bundes und das einzige Verfassungsorgan, das direkt vom Volk gewählt wird. Er beschließt Gesetze, wählt den Bundeskanzler, beschließt den Haushalt und kontrolliert die Regierung.":
    "**Бундестаг** — парламент федерации и единственный конституционный орган, который избирается народом напрямую. Он принимает законы, избирает федерального канцлера, утверждает бюджет и контролирует правительство.",
  "Die vier Aufgaben": "Четыре задачи",
  "Gesetze": "Законы",
  "Der Bundestag berät und beschließt die Bundesgesetze.":
    "Бундестаг обсуждает и принимает федеральные законы.",
  "Kanzlerwahl": "Выборы канцлера",
  "Er wählt den Bundeskanzler oder die Bundeskanzlerin — auf Vorschlag des Bundespräsidenten.":
    "Он избирает федерального канцлера — по предложению федерального президента.",
  "Haushalt": "Бюджет",
  "Er entscheidet, wofür der Bund Geld ausgibt. Das nennt man das Budgetrecht.":
    "Он решает, на что федерация тратит деньги. Это называют бюджетным правом.",
  "Kontrolle": "Контроль",
  "Er kontrolliert Regierung und Verwaltung, etwa durch Anfragen und Untersuchungsausschüsse.":
    "Он контролирует правительство и управление — например запросами и следственными комиссиями.",
  "Der Bundestag wird **auf vier Jahre** gewählt. Diese Zahl wird gern mit der Amtszeit des Bundespräsidenten (fünf Jahre) verwechselt.":
    "Бундестаг избирается **на четыре года**. Это число охотно путают со сроком полномочий федерального президента (пять лет).",
  "Wie ein Gesetz entsteht": "Как рождается закон",
  "Ein Gesetzentwurf kommt aus der **Bundesregierung**, aus dem **Bundestag** selbst oder aus dem **Bundesrat**. Danach läuft er einen festen Weg:":
    "Законопроект приходит из **федерального правительства**, из самого **Бундестага** или из **Бундесрата**. Дальше он идёт по твёрдо заданному пути:",
  "1. Drei Lesungen": "1. Три чтения",
  "Der Bundestag berät den Entwurf dreimal; dazwischen arbeiten die Fachausschüsse daran.":
    "Бундестаг обсуждает проект трижды; в промежутках над ним работают профильные комитеты.",
  "2. Bundesrat": "2. Бундесрат",
  "Bei Zustimmungsgesetzen muss der Bundesrat zustimmen, bei Einspruchsgesetzen kann er widersprechen.":
    "Законам, требующим согласия, Бундесрат должен дать согласие; законам, допускающим возражение, он может возразить.",
  "3. Unterschrift": "3. Подпись",
  "Der Bundespräsident fertigt das Gesetz aus. Er prüft dabei, ob es verfassungsgemäß zustande gekommen ist.":
    "Федеральный президент оформляет закон. При этом он проверяет, принят ли тот в согласии с конституцией.",
  "4. Verkündung": "4. Обнародование",
  "Erst mit der Veröffentlichung im Bundesgesetzblatt gilt das Gesetz.":
    "Закон начинает действовать только с публикацией в Bundesgesetzblatt, официальном вестнике законов.",
  "Der Bundesrat": "Бундесрат",
  "Im **Bundesrat** sitzen Vertreter der **16 Landesregierungen** — nicht gewählte Abgeordnete, sondern Ministerpräsidenten und Landesminister. Jedes Land hat je nach Einwohnerzahl **drei bis sechs Stimmen**, und ein Land muss seine Stimmen einheitlich abgeben. So reden die Länder bei der Bundesgesetzgebung mit.":
    "В **Бундесрате** сидят представители **16 правительств земель** — не избранные депутаты, а премьер-министры земель и земельные министры. У каждой земли, смотря по числу жителей, **от трёх до шести голосов**, и голоса земля обязана подавать единым блоком. Так земли участвуют в федеральном законотворчестве.",
  "Bundestag (Reichstagsgebäude, Berlin) · Bundesrat · Bundesgesetzblatt · Bundestagspräsident.":
    "Бундестаг (здание Рейхстага, Берлин) · Бундесрат · Bundesgesetzblatt · председатель Бундестага.",
  "4 Jahre Wahlperiode · 3 Lesungen · 16 Länder im Bundesrat · 3 bis 6 Stimmen je Land.":
    "4 года срок полномочий · 3 чтения · 16 земель в Бундесрате · от 3 до 6 голосов у земли.",
  "Budgetrecht · Zustimmungsgesetz · Einspruchsgesetz · Ausfertigung · Untersuchungsausschuss · Fraktion.":
    "Бюджетное право · закон, требующий согласия · закон, допускающий возражение · оформление закона · следственная комиссия · фракция.",
  "In einem Satz: Der Bundestag beschließt, der Bundesrat lässt die Länder mitreden, der Bundespräsident unterschreibt — erst dann steht ein Gesetz.":
    "Одним предложением: Бундестаг принимает, Бундесрат даёт слово землям, федеральный президент подписывает — и только тогда закон стоит.",
  "Für wie viele Jahre wird der Bundestag gewählt?": "На сколько лет избирается Бундестаг?",
  "Drei Jahre": "На три года",
  "Vier Jahre": "На четыре года",
  "Fünf Jahre": "На пять лет",
  "Sechs Jahre": "На шесть лет",
  "Vier Jahre. Fünf Jahre ist die Amtszeit des Bundespräsidenten — genau diese Verwechslung wird gern geprüft.":
    "На четыре года. Пять лет — это срок полномочий федерального президента, и именно эту путаницу охотно проверяют.",
  "Wer sitzt im Bundesrat?": "Кто сидит в Бундесрате?",
  "Direkt gewählte Abgeordnete": "Депутаты, избранные напрямую",
  "Vertreter der 16 Landesregierungen": "Представители 16 правительств земель",
  "Die Bundesminister": "Федеральные министры",
  "Vertreter der Städte und Gemeinden": "Представители городов и общин",
  "Der Bundesrat besteht aus Mitgliedern der Landesregierungen. Dadurch wirken die Länder an der Gesetzgebung des Bundes mit.":
    "Бундесрат состоит из членов правительств земель. Так земли участвуют в законотворчестве федерации.",
  "Ab wann gilt ein beschlossenes Gesetz?": "С какого момента действует принятый закон?",
  "Sofort nach der Abstimmung im Bundestag": "Сразу после голосования в Бундестаге",
  "Nach der Verkündung im Bundesgesetzblatt": "После обнародования в Bundesgesetzblatt",
  "Nach der Zustimmung des Bundesverfassungsgerichts":
    "После согласия Федерального конституционного суда",
  "Nach einer Volksabstimmung": "После всенародного голосования",
  "Erst die Veröffentlichung im Bundesgesetzblatt setzt ein Gesetz in Kraft — nach Abstimmung, gegebenenfalls Bundesrat und Ausfertigung durch den Bundespräsidenten.":
    "В силу закон вводит только публикация в Bundesgesetzblatt — после голосования, при необходимости Бундесрата и оформления федеральным президентом.",
  "Bundesregierung und Bundespräsident": "Федеральное правительство и федеральный президент",
  "Die Regierungsgeschäfte führt der **Bundeskanzler**, das Land nach außen vertritt der **Bundespräsident**. Wer welche Aufgabe hat, ist eine der häufigsten Prüfungsfragen.":
    "Делами правительства ведает **федеральный канцлер**, страну вовне представляет **федеральный президент**. Кто чем занят — один из самых частых вопросов на экзамене.",
  "Gewählt vom Bundestag": "Избирается Бундестагом",
  "Auf Vorschlag des Bundespräsidenten, ohne Aussprache. Das Volk wählt den Kanzler nicht direkt.":
    "По предложению федерального президента, без прений. Народ канцлера напрямую не выбирает.",
  "Richtlinienkompetenz": "Право задавать курс",
  "Der Kanzler bestimmt die Grundlinien der Politik. Innerhalb dieser Linien führt jeder Minister sein Ressort eigenständig.":
    "Канцлер определяет основные линии политики. В их пределах каждый министр ведёт своё ведомство самостоятельно.",
  "Wählt die Minister": "Подбирает министров",
  "Der Kanzler schlägt die Bundesminister vor; der Bundespräsident ernennt sie.":
    "Канцлер предлагает федеральных министров; федеральный президент их назначает.",
  "Regierungschef": "Глава правительства",
  "Kanzler und Minister zusammen bilden die Bundesregierung, auch Kabinett genannt.":
    "Канцлер и министры вместе образуют федеральное правительство, его называют и кабинетом.",
  "Das konstruktive Misstrauensvotum": "Конструктивный вотум недоверия",
  "Der Bundestag kann den Kanzler nur abwählen, indem er **gleichzeitig einen Nachfolger wählt**. Ohne Mehrheit für einen Nachfolger bleibt der Kanzler im Amt.":
    "Бундестаг может сместить канцлера, только **избрав одновременно преемника**. Без большинства за преемника канцлер остаётся в должности.",
  "Warum so kompliziert: In der Weimarer Republik konnten sich Gegner von links und rechts zusammentun, um jede Regierung zu stürzen, ohne sich auf eine neue einigen zu müssen. Das Grundgesetz macht Stürzen ohne Alternative unmöglich.":
    "Почему так сложно: в Веймарской республике противники слева и справа могли сойтись, чтобы свалить любое правительство, не договариваясь о новом. Основной закон сделал свержение без замены невозможным.",
  "Der Bundespräsident": "Федеральный президент",
  "Staatsoberhaupt": "Глава государства",
  "Er vertritt Deutschland nach außen und ist überparteilich.":
    "Он представляет Германию вовне и стоит над партиями.",
  "Gewählt von der Bundesversammlung": "Избирается Федеральным собранием",
  "Nicht vom Volk. Die Bundesversammlung besteht zur Hälfte aus Bundestagsabgeordneten und zur Hälfte aus Vertretern der Länder.":
    "Не народом. Федеральное собрание наполовину состоит из депутатов Бундестага и наполовину из представителей земель.",
  "Eine einmalige Wiederwahl ist möglich, also höchstens zehn Jahre.":
    "Переизбрание возможно один раз, то есть самое большее десять лет.",
  "Unterschreibt Gesetze": "Подписывает законы",
  "Er fertigt Gesetze aus, ernennt Minister und Richter und schlägt den Kanzler zur Wahl vor.":
    "Он оформляет законы, назначает министров и судей и предлагает канцлера к избранию.",
  "Der Bundespräsident **regiert nicht**. Er hat keine Richtlinienkompetenz und führt keine Ministerien. Wer sich merkt „Kanzler regiert, Präsident repräsentiert“, beantwortet die meisten dieser Fragen richtig.":
    "Федеральный президент **не правит**. У него нет права задавать курс, и министерствами он не руководит. Кто запомнит «канцлер правит, президент представляет», ответит на большинство таких вопросов верно.",
  "Bundeskanzler · Bundespräsident · Bundesversammlung · Kabinett · Bundeskanzleramt · Schloss Bellevue.":
    "Федеральный канцлер · федеральный президент · Федеральное собрание · кабинет · Ведомство федерального канцлера · дворец Бельвю.",
  "Bundespräsident: 5 Jahre, einmal wiederwählbar, also maximal 10. Kanzler: keine Amtszeitbegrenzung.":
    "Федеральный президент: 5 лет, переизбрание один раз, то есть самое большее 10. Канцлер: ограничения по сроку нет.",
  "Richtlinienkompetenz · konstruktives Misstrauensvotum · Ressortprinzip · Ausfertigung · überparteilich.":
    "Право задавать курс · конструктивный вотум недоверия · принцип самостоятельности ведомств · оформление закона · надпартийность.",
  "In einem Satz: Der Kanzler bestimmt die Politik und ist nur mit einem Nachfolger abwählbar; der Präsident steht über den Parteien und unterschreibt.":
    "Одним предложением: канцлер определяет политику, и сместить его можно только вместе с преемником; президент стоит над партиями и подписывает.",
  "Wer wählt den Bundeskanzler?": "Кто избирает федерального канцлера?",
  "Das Volk direkt": "Народ напрямую",
  "Der Bundestag": "Бундестаг",
  "Die Bundesversammlung": "Федеральное собрание",
  "Der Bundestag wählt den Kanzler auf Vorschlag des Bundespräsidenten. Die Bundesversammlung wählt den Bundespräsidenten — nicht den Kanzler.":
    "Канцлера избирает Бундестаг по предложению федерального президента. Федеральное собрание избирает федерального президента, а не канцлера.",
  "Wie lange dauert die Amtszeit des Bundespräsidenten?":
    "Сколько длится срок полномочий федерального президента?",
  "Acht Jahre": "Восемь лет",
  "Fünf Jahre, einmal wiederwählbar. Der Bundestag dagegen wird für vier Jahre gewählt.":
    "Пять лет, с одним переизбранием. Бундестаг же избирается на четыре года.",
  "Was ist ein konstruktives Misstrauensvotum?": "Что такое конструктивный вотум недоверия?",
  "Der Bundestag stürzt den Kanzler und wählt zugleich einen Nachfolger":
    "Бундестаг смещает канцлера и одновременно избирает преемника",
  "Das Volk stimmt über den Kanzler ab": "Народ голосует по вопросу о канцлере",
  "Der Bundespräsident entlässt den Kanzler": "Федеральный президент увольняет канцлера",
  "Die Minister treten geschlossen zurück": "Министры уходят в отставку все разом",
  "Abwahl nur mit gleichzeitiger Wahl eines Nachfolgers. Aus Weimar gelernt: Stürzen ohne Alternative soll nicht möglich sein.":
    "Смещение только вместе с избранием преемника. Урок Веймара: свергать, не имея замены, быть не должно.",
  "Wahlen und Parteien": "Выборы и партии",
  "„Alle Staatsgewalt geht vom Volke aus“ — praktisch heißt das: durch Wahlen. Wie in Deutschland gewählt wird, ist ein Prüfungsthema mit festen Vokabeln.":
    "«Вся государственная власть исходит от народа» — на практике это значит: через выборы. То, как в Германии голосуют, — экзаменационная тема с твёрдым набором слов.",
  "Die fünf Wahlgrundsätze": "Пять принципов выборов",
  "Allgemein": "Всеобщие",
  "Alle Staatsbürger ab 18 dürfen wählen, unabhängig von Einkommen, Geschlecht oder Bildung.":
    "Голосовать вправе все граждане с 18 лет, независимо от дохода, пола и образования.",
  "Unmittelbar": "Прямые",
  "Die Stimmen gehen direkt an die Kandidaten, nicht über Wahlmänner.":
    "Голоса идут прямо к кандидатам, а не через выборщиков.",
  "Frei": "Свободные",
  "Niemand darf zur Wahl oder zu einer bestimmten Stimme gezwungen werden.":
    "Никого нельзя принудить ни голосовать, ни отдать голос за определённого кандидата.",
  "Gleich": "Равные",
  "Jede Stimme zählt gleich viel.": "Каждый голос весит одинаково.",
  "Geheim": "Тайные",
  "Niemand darf sehen, was du wählst. Deshalb die Wahlkabine.":
    "Никто не должен видеть, за кого ты голосуешь. Для того и кабина.",
  "Merke die Reihenfolge **allgemein, unmittelbar, frei, gleich, geheim** — sie steht so in Artikel 38 des Grundgesetzes und wird oft im Wortlaut abgefragt.":
    "Запомни порядок: **всеобщие, прямые, свободные, равные, тайные** — именно так они стоят в статье 38 Основного закона, и об этом часто спрашивают дословно.",
  "Erststimme und Zweitstimme": "Первый голос и второй голос",
  "Bei der Bundestagswahl hat man **zwei Stimmen**. Die **Erststimme** wählt eine Person aus dem eigenen Wahlkreis. Die **Zweitstimme** wählt eine Partei — und sie entscheidet darüber, wie stark eine Partei im Bundestag wird. Deshalb ist die Zweitstimme die wichtigere.":
    "На выборах в Бундестаг у избирателя **два голоса**. **Первым голосом** выбирают человека из своего округа. **Вторым голосом** выбирают партию — и именно он решает, насколько сильной партия станет в Бундестаге. Поэтому второй голос важнее.",
  "Die Fünf-Prozent-Hürde": "Пятипроцентный барьер",
  "In den Bundestag zieht nur ein, wer mindestens **fünf Prozent** der Zweitstimmen erreicht (oder mehrere Wahlkreise direkt gewinnt). Das soll verhindern, dass sehr viele Kleinstparteien das Parlament unregierbar machen — auch das eine Lehre aus der Weimarer Republik.":
    "В Бундестаг проходит только тот, кто набрал не меньше **пяти процентов** вторых голосов (или выиграл напрямую несколько округов). Это должно помешать тому, чтобы множество мельчайших партий сделало парламент неуправляемым, — и это тоже урок Веймарской республики.",
  "Wer darf wählen?": "Кто вправе голосовать?",
  "Bundestagswahl": "Выборы в Бундестаг",
  "Deutsche Staatsangehörige ab 18 Jahren.": "Граждане Германии с 18 лет.",
  "Kommunalwahl": "Выборы в общине",
  "In vielen Ländern dürfen auch EU-Bürger mitwählen, die dort wohnen.":
    "Во многих землях голосовать вправе и живущие там граждане ЕС.",
  "Europawahl": "Выборы в Европарламент",
  "EU-Bürger wählen dort, wo sie leben — auch ohne deutschen Pass.":
    "Граждане ЕС голосуют там, где живут, — и без немецкого паспорта.",
  "Nach der Einbürgerung": "После получения гражданства",
  "Mit der deutschen Staatsangehörigkeit kommt das volle Wahlrecht bei allen Wahlen.":
    "С немецким гражданством приходит полное право голоса на всех выборах.",
  "Bundeswahlleiter · Wahlkreis · Wahlkabine · Wahlbenachrichtigung.":
    "Федеральный руководитель выборов · избирательный округ · кабина для голосования · извещение о выборах.",
  "Wahlrecht ab 18 · 2 Stimmen · 5-Prozent-Hürde · alle 4 Jahre.":
    "Право голоса с 18 · 2 голоса · барьер 5 процентов · раз в 4 года.",
  "allgemein, unmittelbar, frei, gleich, geheim · Erststimme · Zweitstimme · Koalition · Opposition · Fraktion.":
    "Всеобщие, прямые, свободные, равные, тайные · первый голос · второй голос · коалиция · оппозиция · фракция.",
  "In einem Satz: Zwei Stimmen, fünf Grundsätze, fünf Prozent — und die Zweitstimme entscheidet über die Machtverhältnisse.":
    "Одним предложением: два голоса, пять принципов, пять процентов — а расстановку сил решает второй голос.",
  "Welche Stimme entscheidet bei der Bundestagswahl über die Stärke einer Partei?":
    "Какой голос на выборах в Бундестаг решает, насколько сильна партия?",
  "Die Erststimme": "Первый голос",
  "Die Zweitstimme": "Второй голос",
  "Beide zu gleichen Teilen": "Оба поровну",
  "Es gibt nur eine Stimme": "Голос всего один",
  "Die Zweitstimme bestimmt, wie viele Sitze eine Partei bekommt. Die Erststimme wählt eine Person im Wahlkreis.":
    "Второй голос определяет, сколько мест получит партия. Первым голосом выбирают человека в округе.",
  "Was bedeutet „geheime Wahl“?": "Что означают «тайные выборы»?",
  "Der Wahltermin wird nicht bekannt gegeben": "Дату выборов не объявляют",
  "Niemand darf erfahren, wie du gewählt hast": "Никто не должен узнать, как ты проголосовал",
  "Die Kandidaten sind unbekannt": "Кандидаты неизвестны",
  "Das Ergebnis bleibt geheim": "Результат остаётся в тайне",
  "Deine Wahlentscheidung ist deine Sache. Deshalb gibt es die Wahlkabine — niemand darf dir hineinschauen.":
    "Твой выбор — твоё дело. Для того и кабина: заглядывать в неё никому не позволено.",
  "Ab welchem Alter darf man in Deutschland den Bundestag wählen?":
    "С какого возраста в Германии можно голосовать на выборах в Бундестаг?",
  "Ab 16 Jahren": "С 16 лет",
  "Ab 18 Jahren": "С 18 лет",
  "Ab 21 Jahren": "С 21 года",
  "Ab 25 Jahren": "С 25 лет",
  "Ab 18. Bei manchen Kommunal- und Landtagswahlen liegt das Alter niedriger, bei der Bundestagswahl bleibt es bei 18.":
    "С 18. На некоторых выборах в общинах и землях возраст ниже, но на выборах в Бундестаг он остаётся 18.",
  "Föderalismus und Bundesländer": "Федерализм и федеральные земли",
  "Deutschland ist ein **Bundesstaat**: Es gibt eine Ebene für das ganze Land — den Bund — und **16 Bundesländer**, die eigene Regierungen, eigene Parlamente und eigene Zuständigkeiten haben. Wer wofür zuständig ist, wird regelmäßig gefragt.":
    "Германия — **федеративное государство**: есть уровень всей страны, федерация, и **16 федеральных земель** со своими правительствами, своими парламентами и своим кругом ведения. О том, кто за что отвечает, спрашивают постоянно.",
  "Wer macht was?": "Кто что делает?",
  "Aufgaben des Bundes": "Задачи федерации",
  "Außenpolitik · Verteidigung und Bundeswehr · Staatsangehörigkeit · Währung · Bundesautobahnen · Luftverkehr · Post und Telekommunikation.":
    "Внешняя политика · оборона и бундесвер · гражданство · валюта · федеральные автобаны · воздушное сообщение · почта и связь.",
  "Aufgaben der Länder": "Задачи земель",
  "Schulen und Hochschulen · Polizei · Kultur · Rundfunk · Kommunalrecht · Bauordnung. Deshalb sieht Schule in Bayern anders aus als in Hamburg.":
    "Школы и вузы · полиция · культура · вещание · право общин · строительные нормы. Поэтому школа в Баварии выглядит иначе, чем в Гамбурге.",
  "**Bildung ist Ländersache** — das ist eine der meistgestellten Fragen überhaupt. Auch die **Polizei** ist grundsätzlich Ländersache; nur die Bundespolizei ist Sache des Bundes.":
    "**Образование — дело земель**, и это один из самых частых вопросов вообще. **Полиция** тоже по общему правилу дело земель; федерации принадлежит только Bundespolizei, федеральная полиция.",
  "Die 16 Bundesländer": "Шестнадцать федеральных земель",
  "Dreizehn Flächenländer und drei **Stadtstaaten**: Berlin, Hamburg und Bremen. Jedes Land hat eine Landesregierung mit einem **Ministerpräsidenten** an der Spitze — in den Stadtstaaten heißt er **Regierender Bürgermeister** (Berlin), **Erster Bürgermeister** (Hamburg) oder **Bürgermeister und Präsident des Senats** (Bremen).":
    "Тринадцать земель обычных и три **города-земли**: Берлин, Гамбург и Бремен. У каждой земли своё правительство во главе с **премьер-министром земли** — в городах-землях он зовётся **правящим бургомистром** (Берлин), **первым бургомистром** (Гамбург) или **бургомистром и председателем сената** (Бремен).",
  "Landtag": "Ландтаг",
  "Das Parlament eines Bundeslandes. In Bayern heißt es Landtag, in Bremen und Hamburg Bürgerschaft, in Berlin Abgeordnetenhaus.":
    "Парламент земли. В Баварии он зовётся ландтагом, в Бремене и Гамбурге — Bürgerschaft, в Берлине — Abgeordnetenhaus.",
  "Landesverfassung": "Конституция земли",
  "Jedes Land hat eine eigene Verfassung. Sie darf dem Grundgesetz nicht widersprechen.":
    "У каждой земли своя конституция. Основному закону она противоречить не может.",
  "Gemeinden": "Общины",
  "Unterhalb der Länder gibt es Städte, Gemeinden und Landkreise mit eigener Selbstverwaltung — Kita, Müll, Bebauungspläne, Bürgerbüro.":
    "Ниже земель стоят города, общины и районы со своим самоуправлением — детский сад, мусор, планы застройки, Bürgerbüro.",
  "Warum überhaupt Föderalismus?": "Зачем вообще федерализм?",
  "Macht wird nicht nur auf drei Gewalten verteilt, sondern zusätzlich auf zwei Ebenen. Das erschwert es, den Staat von einer Stelle aus zu übernehmen — und regionale Unterschiede bleiben erhalten. Historisch knüpft es an die vielen deutschen Einzelstaaten vor 1871 an.":
    "Власть разделена не только на три ветви, но вдобавок на два уровня. Это мешает захватить государство из одной точки — и сохраняет различия между областями. Исторически это продолжает множество немецких государств, существовавших до 1871 года.",
  "Ministerpräsident · Landtag · Bürgerschaft (Hamburg, Bremen) · Abgeordnetenhaus (Berlin) · Landkreis · Gemeinderat.":
    "Премьер-министр земли · ландтаг · Bürgerschaft (Гамбург, Бремен) · Abgeordnetenhaus (Берлин) · район · совет общины.",
  "16 Bundesländer · 13 Flächenländer · 3 Stadtstaaten · 3 Fragen zum eigenen Bundesland im Test.":
    "16 федеральных земель · 13 обычных земель · 3 города-земли · 3 вопроса о своей земле в тесте.",
  "Föderalismus · Bundesstaat · Ländersache · kommunale Selbstverwaltung · Landesverfassung.":
    "Федерализм · федеративное государство · дело земель · самоуправление общин · конституция земли.",
  "In einem Satz: Der Bund macht Außenpolitik und Geld, die Länder machen Schule und Polizei, die Gemeinden machen den Alltag vor der Haustür.":
    "Одним предложением: федерация занимается внешней политикой и деньгами, земли — школой и полицией, общины — повседневностью у порога дома.",
  "Wie viele Bundesländer hat Deutschland?": "Сколько федеральных земель в Германии?",
  "12": "12",
  "14": "14",
  "16": "16",
  "18": "18",
  "16 seit der Wiedervereinigung 1990: die alten elf plus die fünf neuen Länder und das wiedervereinigte Berlin.":
    "16 с момента объединения в 1990 году: прежние одиннадцать плюс пять новых земель и воссоединённый Берлин.",
  "Wer ist in Deutschland für die Schulen zuständig?": "Кто в Германии отвечает за школы?",
  "Der Bund": "Федерация",
  "Die Bundesländer": "Федеральные земли",
  "Die Europäische Union": "Европейский союз",
  "Die Gemeinden allein": "Одни только общины",
  "Bildung ist Ländersache. Deshalb unterscheiden sich Lehrpläne, Schulformen und Ferien von Land zu Land.":
    "Образование — дело земель. Поэтому учебные планы, виды школ и каникулы в каждой земле свои.",
  "Welche drei Bundesländer sind Stadtstaaten?":
    "Какие три федеральные земли являются городами-землями?",
  "Berlin, Hamburg, Bremen": "Берлин, Гамбург, Бремен",
  "Berlin, München, Köln": "Берлин, Мюнхен, Кёльн",
  "Hamburg, Frankfurt, Stuttgart": "Гамбург, Франкфурт, Штутгарт",
  "Bremen, Hannover, Leipzig": "Бремен, Ганновер, Лейпциг",
  "Berlin, Hamburg und Bremen sind zugleich Stadt und Bundesland. München, Köln und Frankfurt sind nur Städte.":
    "Берлин, Гамбург и Бремен — одновременно города и федеральные земли. Мюнхен, Кёльн и Франкфурт — только города.",
  "Rechtssystem und Gerichte": "Правовая система и суды",
  "Im Rechtsstaat ist auch der Staat an das Gesetz gebunden, und **jeder** kann gegen staatliche Entscheidungen klagen. Die Gerichte sind unabhängig: Richter sind nur dem Gesetz unterworfen, niemand darf ihnen sagen, wie sie zu entscheiden haben.":
    "В правовом государстве законом связано и само государство, и **каждый** может обжаловать его решения в суде. Суды независимы: судья подчинён только закону, и никто не вправе указывать ему, как решать.",
  "Die fünf Gerichtszweige": "Пять ветвей судов",
  "Ordentliche Gerichte": "Суды общей юрисдикции",
  "Strafsachen und Streit zwischen Privatpersonen: Amtsgericht, Landgericht, Oberlandesgericht, Bundesgerichtshof.":
    "Уголовные дела и споры между частными лицами: Amtsgericht, Landgericht, Oberlandesgericht, Bundesgerichtshof.",
  "Arbeitsgerichte": "Суды по трудовым спорам",
  "Streit zwischen Arbeitgeber und Arbeitnehmer, etwa bei Kündigungen.":
    "Спор работодателя и работника, например при увольнении.",
  "Verwaltungsgerichte": "Административные суды",
  "Bürger gegen Behörde — Aufenthaltstitel, Baugenehmigung, Bescheide.":
    "Гражданин против ведомства — вид на жительство, разрешение на стройку, решения по заявлениям.",
  "Sozialgerichte": "Социальные суды",
  "Rente, Krankenversicherung, Bürgergeld.": "Пенсия, медицинское страхование, Bürgergeld.",
  "Finanzgerichte": "Финансовые суды",
  "Streit mit dem Finanzamt über Steuern.": "Спор с налоговым ведомством о налогах.",
  "In **Karlsruhe** sitzt das höchste Gericht für Verfassungsfragen. Es kann Gesetze für **verfassungswidrig** erklären, auch wenn Bundestag und Bundesrat sie beschlossen haben. Jede Person kann **Verfassungsbeschwerde** erheben, wenn sie sich in ihren Grundrechten verletzt sieht — nachdem sie den normalen Rechtsweg ausgeschöpft hat.":
    "В **Карлсруэ** сидит высший суд по вопросам конституции. Он может объявить закон **противоречащим конституции**, даже если его приняли Бундестаг и Бундесрат. Любой человек вправе подать **конституционную жалобу**, если считает свои основные права нарушенными, — после того как исчерпал обычный путь по судам.",
  "Grundsätze im Strafverfahren": "Начала уголовного процесса",
  "Unschuldsvermutung": "Презумпция невиновности",
  "Bis zur rechtskräftigen Verurteilung gilt jeder als unschuldig.":
    "До вступившего в силу приговора каждый считается невиновным.",
  "Recht auf Verteidigung": "Право на защиту",
  "Jeder Angeklagte darf einen Anwalt haben; wer ihn nicht bezahlen kann, bekommt Hilfe.":
    "У каждого обвиняемого может быть адвокат; кто не в состоянии его оплатить, получает помощь.",
  "Keine Strafe ohne Gesetz": "Нет наказания без закона",
  "Bestraft werden kann nur, was zur Tatzeit bereits strafbar war.":
    "Наказать можно лишь за то, что было наказуемо уже во время деяния.",
  "Nicht zweimal": "Не дважды",
  "Für dieselbe Tat wird niemand zweimal bestraft.":
    "За одно и то же деяние дважды не наказывают.",
  "Häufige Falle: **Niemand darf sich selbst Recht verschaffen.** Auch wer sicher im Recht ist, holt sich sein Geld nicht selbst zurück, sondern geht zum Gericht. Selbstjustiz ist strafbar.":
    "Частая ловушка: **никто не вправе добывать себе право сам.** Даже тот, кто наверняка прав, не забирает свои деньги собственными руками, а идёт в суд. Самосуд наказуем.",
  "Bundesverfassungsgericht (Karlsruhe) · Bundesgerichtshof · Amtsgericht · Staatsanwaltschaft · Schöffen.":
    "Федеральный конституционный суд (Карлсруэ) · Bundesgerichtshof · Amtsgericht · прокуратура · присяжные заседатели Schöffen.",
  "5 Gerichtszweige · Karlsruhe als Sitz des Verfassungsgerichts.":
    "5 ветвей судов · Карлсруэ как местопребывание конституционного суда.",
  "Unabhängigkeit der Richter · Unschuldsvermutung · Verfassungsbeschwerde · Rechtsweg · Selbstjustiz · rechtskräftig.":
    "Независимость судей · презумпция невиновности · конституционная жалоба · путь по судам · самосуд · вступивший в законную силу.",
  "In einem Satz: Fünf Gerichtszweige für fünf Arten von Streit, ein Verfassungsgericht über allen — und niemand nimmt das Recht in die eigene Hand.":
    "Одним предложением: пять ветвей судов для пяти видов споров, один конституционный суд надо всеми — и никто не берёт право в свои руки.",
  "Wo hat das Bundesverfassungsgericht seinen Sitz?":
    "Где находится Федеральный конституционный суд?",
  "Berlin": "Берлин",
  "Karlsruhe": "Карлсруэ",
  "München": "Мюнхен",
  "Leipzig": "Лейпциг",
  "Karlsruhe. Bewusst nicht in der Hauptstadt — räumliche Distanz zur Politik gehört zur Unabhängigkeit.":
    "Карлсруэ. Намеренно не в столице — расстояние до политики входит в независимость.",
  "Was bedeutet die Unschuldsvermutung?": "Что означает презумпция невиновности?",
  "Wer sich nicht äußert, ist unschuldig": "Кто молчит, тот невиновен",
  "Jeder gilt als unschuldig, bis ein Gericht ihn rechtskräftig verurteilt":
    "Каждый считается невиновным, пока суд не осудит его приговором, вступившим в силу",
  "Der Angeklagte muss seine Unschuld beweisen": "Обвиняемый должен доказать свою невиновность",
  "Bei Zweifeln entscheidet die Polizei": "При сомнениях решает полиция",
  "Beweisen muss die Anklage, nicht der Angeklagte. Bis zum rechtskräftigen Urteil gilt die Unschuldsvermutung.":
    "Доказывать должно обвинение, а не обвиняемый. До вступившего в силу приговора действует презумпция невиновности.",
  "Ein Nachbar schuldet dir Geld und zahlt nicht. Was ist richtig?":
    "Сосед должен тебе деньги и не платит. Как правильно?",
  "Du darfst dir etwas aus seiner Wohnung nehmen": "Можно взять что-нибудь из его квартиры",
  "Du kannst vor Gericht klagen": "Можно подать в суд",
  "Du darfst ihn festhalten, bis er zahlt": "Можно удерживать его, пока не заплатит",
  "Du darfst sein Auto beschädigen": "Можно повредить его машину",
  "Selbstjustiz ist strafbar, auch wenn die Forderung berechtigt ist. Der Weg führt über das Gericht.":
    "Самосуд наказуем, даже если требование обоснованно. Дорога идёт через суд.",
  "Sozialstaat und Sozialversicherung": "Социальное государство и социальное страхование",
  "Deutschland ist ein **Sozialstaat**: Krankheit, Alter, Arbeitslosigkeit oder Pflegebedürftigkeit sollen niemanden ins Bodenlose fallen lassen. Getragen wird das vor allem von den **fünf Sozialversicherungen**.":
    "Германия — **социальное государство**: болезнь, старость, безработица или нужда в уходе не должны сбрасывать человека в пустоту. Держится это прежде всего на **пяти социальных страхованиях**.",
  "Die fünf Säulen": "Пять опор",
  "Krankenversicherung": "Медицинское страхование",
  "Zahlt Arzt, Krankenhaus und Medikamente. Für alle Pflicht — gesetzlich oder privat.":
    "Оплачивает врача, больницу и лекарства. Обязательно для всех — государственное или частное.",
  "Rentenversicherung": "Пенсионное страхование",
  "Zahlt die Rente im Alter sowie Renten bei Erwerbsminderung und für Hinterbliebene.":
    "Платит пенсию по старости, а также пенсии по утрате трудоспособности и по потере кормильца.",
  "Arbeitslosenversicherung": "Страхование на случай безработицы",
  "Zahlt Arbeitslosengeld und finanziert Weiterbildung und Vermittlung.":
    "Платит пособие по безработице и оплачивает переобучение и поиск работы.",
  "Pflegeversicherung": "Страхование на случай нужды в уходе",
  "Hilft, wenn jemand dauerhaft auf Pflege angewiesen ist. Seit 1995 die jüngste Säule.":
    "Помогает, когда человек надолго нуждается в уходе. С 1995 года — самая молодая опора.",
  "Unfallversicherung": "Страхование от несчастных случаев",
  "Bei Arbeitsunfällen und Berufskrankheiten. Sie zahlt allein der Arbeitgeber.":
    "При несчастных случаях на работе и профессиональных болезнях. Платит его один работодатель.",
  "Vier der fünf Versicherungen zahlen Arbeitgeber und Arbeitnehmer **je zur Hälfte**. Die Ausnahme ist die **Unfallversicherung**: Sie trägt der Arbeitgeber allein. Danach wird gern gefragt.":
    "Четыре страхования из пяти работодатель и работник оплачивают **пополам**. Исключение — **страхование от несчастных случаев**: его несёт один работодатель. Об этом охотно спрашивают.",
  "Das Solidarprinzip": "Принцип солидарности",
  "Die Beiträge richten sich nach dem **Einkommen**, die Leistungen nach dem **Bedarf**. Wer viel verdient, zahlt mehr ein, bekommt bei Krankheit aber nicht mehr Behandlung. Gesunde tragen Kranke, Junge tragen Alte — und umgekehrt, wenn sich das Leben dreht.":
    "Взносы считают по **доходу**, а услуги дают по **нужде**. Кто много зарабатывает, платит больше, но лечат его при болезни не лучше. Здоровые несут больных, молодые — старых, и наоборот, когда жизнь поворачивается.",
  "Weitere Hilfen": "Другие виды помощи",
  "Bürgergeld": "Bürgergeld",
  "Grundsicherung für Erwerbsfähige ohne ausreichendes Einkommen.":
    "Базовое обеспечение для трудоспособных, у которых не хватает дохода.",
  "Kindergeld": "Kindergeld, пособие на ребёнка",
  "Monatlich für jedes Kind, unabhängig vom Einkommen der Eltern.":
    "Ежемесячно на каждого ребёнка, независимо от дохода родителей.",
  "Elterngeld": "Elterngeld, родительское пособие",
  "Ersetzt einen Teil des Einkommens, wenn Eltern nach der Geburt zu Hause bleiben.":
    "Возмещает часть дохода, когда родители после рождения ребёнка остаются дома.",
  "Wohngeld": "Wohngeld, доплата на жильё",
  "Zuschuss zur Miete für Haushalte mit geringem Einkommen.":
    "Доплата к квартплате для семей с малым доходом.",
  "Krankenkasse · Deutsche Rentenversicherung · Bundesagentur für Arbeit · Jobcenter · Berufsgenossenschaft.":
    "Krankenkasse · Deutsche Rentenversicherung · Bundesagentur für Arbeit · Jobcenter · Berufsgenossenschaft.",
  "5 Sozialversicherungen · Pflegeversicherung seit 1995 · Beiträge je zur Hälfte, außer bei der Unfallversicherung.":
    "5 социальных страхований · страхование по уходу с 1995 года · взносы пополам, кроме страхования от несчастных случаев.",
  "Solidarprinzip · Sozialversicherung · Bürgergeld · Kindergeld · Elterngeld · Sozialabgaben · Bruttolohn und Nettolohn.":
    "Принцип солидарности · социальное страхование · Bürgergeld · Kindergeld · Elterngeld · социальные отчисления · зарплата брутто и нетто.",
  "In einem Satz: Fünf Versicherungen, nach Einkommen bezahlt und nach Bedarf ausgezahlt — das ist der Sozialstaat im Alltag.":
    "Одним предложением: пять страхований, оплаченных по доходу и выплаченных по нужде, — вот социальное государство в повседневности.",
  "Welche gehört NICHT zu den fünf Sozialversicherungen?":
    "Какое страхование НЕ входит в пятёрку социальных?",
  "Hausratversicherung": "Страхование домашнего имущества",
  "Die Hausratversicherung ist eine private Sache. Die fünf gesetzlichen sind Kranken-, Renten-, Arbeitslosen-, Pflege- und Unfallversicherung.":
    "Страхование домашнего имущества — дело частное. Пять установленных законом: медицинское, пенсионное, на случай безработицы, по уходу и от несчастных случаев.",
  "Wer bezahlt die gesetzliche Unfallversicherung?":
    "Кто оплачивает установленное законом страхование от несчастных случаев?",
  "Arbeitgeber und Arbeitnehmer je zur Hälfte": "Работодатель и работник пополам",
  "Der Arbeitgeber allein": "Один работодатель",
  "Der Arbeitnehmer allein": "Один работник",
  "Der Staat aus Steuermitteln": "Государство из налоговых средств",
  "Die Unfallversicherung ist die Ausnahme: Sie zahlt der Arbeitgeber allein. Bei den anderen vier teilen sich beide Seiten den Beitrag.":
    "Страхование от несчастных случаев — исключение: платит его один работодатель. В остальных четырёх взнос делят обе стороны.",
  "Was besagt das Solidarprinzip?": "О чём говорит принцип солидарности?",
  "Alle zahlen den gleichen Betrag": "Все платят одинаковую сумму",
  "Beiträge richten sich nach dem Einkommen, Leistungen nach dem Bedarf":
    "Взносы считают по доходу, а услуги дают по нужде",
  "Nur wer einzahlt, bekommt Hilfe": "Помощь получает только тот, кто платит взносы",
  "Der Staat zahlt alles aus Steuern": "Государство всё оплачивает из налогов",
  "Wer mehr verdient, zahlt mehr — behandelt wird aber nach Bedarf, nicht nach Beitragshöhe.":
    "Кто больше зарабатывает, больше платит, — но лечат по нужде, а не по величине взноса.",
  "Kaiserreich und Weimarer Republik": "Империя и Веймарская республика",
  "Geschichte und Verantwortung": "История и ответственность",
  "Deutschland als Nationalstaat ist jünger als Frankreich oder England. Bis **1871** bestand es aus vielen Einzelstaaten. Was danach kam — Kaiserreich, erste Demokratie, deren Scheitern — erklärt, warum das Grundgesetz so gebaut ist, wie es gebaut ist.":
    "Германия как национальное государство моложе Франции и Англии. До **1871 года** она состояла из множества отдельных государств. То, что было после — империя, первая демократия, её крушение — объясняет, почему Основной закон построен именно так.",
  "1871: die Reichsgründung": "1871: основание империи",
  "Nach dem Krieg gegen Frankreich schlossen sich die deutschen Staaten zum **Deutschen Kaiserreich** zusammen. Der preußische König wurde deutscher Kaiser, **Otto von Bismarck** der erste Reichskanzler. Es gab ein gewähltes Parlament, den Reichstag, aber die Regierung war ihm nicht verantwortlich — der Kanzler diente dem Kaiser.":
    "После войны с Францией немецкие государства соединились в **Германскую империю**. Прусский король стал германским императором, а **Отто фон Бисмарк** — первым рейхсканцлером. Избираемый парламент, рейхстаг, существовал, но правительство перед ним не отвечало: канцлер служил императору.",
  "Bismarck führte in den 1880er Jahren die ersten Sozialversicherungen der Welt ein — Kranken-, Unfall- und Rentenversicherung. Der deutsche Sozialstaat ist damit älter als die deutsche Demokratie.":
    "В 1880-е годы Бисмарк ввёл первые в мире социальные страхования — медицинское, от несчастных случаев и пенсионное. Немецкое социальное государство тем самым старше немецкой демократии.",
  "1914–1918: der Erste Weltkrieg": "1914–1918: Первая мировая война",
  "Der Krieg endete mit der Niederlage Deutschlands. Am **9. November 1918** dankte der Kaiser ab, die Republik wurde ausgerufen. Der **Versailler Vertrag** von 1919 verpflichtete Deutschland zu hohen Reparationen und Gebietsabtretungen — und belastete die junge Demokratie von Anfang an.":
    "Война кончилась поражением Германии. **9 ноября 1918 года** император отрёкся, республику провозгласили. **Версальский договор** 1919 года обязал Германию к большим репарациям и уступке земель — и лёг грузом на молодую демократию с самого начала.",
  "Die Weimarer Republik 1919–1933": "Веймарская республика, 1919–1933",
  "Die erste Demokratie": "Первая демократия",
  "Die Verfassung wurde 1919 in Weimar beschlossen — daher der Name. Zum ersten Mal durften auch **Frauen wählen**.":
    "Конституцию приняли в 1919 году в Веймаре — отсюда и название. Впервые голосовать смогли и **женщины**.",
  "Krisen ohne Pause": "Кризисы без передышки",
  "Hyperinflation 1923, dann die Weltwirtschaftskrise ab 1929 mit Millionen Arbeitslosen.":
    "Гиперинфляция 1923 года, затем мировой экономический кризис с 1929 года и миллионы безработных.",
  "Zersplittertes Parlament": "Раздробленный парламент",
  "Viele kleine Parteien, ständig wechselnde Regierungen, keine stabilen Mehrheiten.":
    "Много мелких партий, вечно сменяющиеся правительства, никакого устойчивого большинства.",
  "Feinde in der Mitte": "Враги внутри",
  "Extreme von links und rechts lehnten die Demokratie offen ab und stürzten Regierungen, ohne eine neue zu bilden.":
    "Крайние слева и справа открыто отвергали демократию и валили правительства, не создавая нового.",
  "Aus genau diesen Schwächen zog das Grundgesetz seine Konsequenzen: **Fünf-Prozent-Hürde** gegen die Zersplitterung, **konstruktives Misstrauensvotum** gegen das Stürzen ohne Alternative, **Ewigkeitsklausel** und **Parteiverbot** gegen die Feinde der Demokratie.":
    "Именно из этих слабостей Основной закон сделал выводы: **пятипроцентный барьер** против раздробленности, **конструктивный вотум недоверия** против свержения без замены, **клаузула вечности** и **запрет партий** против врагов демократии.",
  "Otto von Bismarck · Kaiser Wilhelm II. · Friedrich Ebert (erster Reichspräsident) · Weimarer Verfassung · Versailler Vertrag.":
    "Отто фон Бисмарк · император Вильгельм II · Фридрих Эберт (первый рейхспрезидент) · Веймарская конституция · Версальский договор.",
  "1871 Reichsgründung · 1914–1918 Erster Weltkrieg · 9. November 1918 Ausrufung der Republik · 1919 Weimarer Verfassung und Frauenwahlrecht · 1923 Hyperinflation · 1929 Weltwirtschaftskrise.":
    "1871 — основание империи · 1914–1918 — Первая мировая война · 9 ноября 1918 — провозглашение республики · 1919 — Веймарская конституция и право голоса для женщин · 1923 — гиперинфляция · 1929 — мировой экономический кризис.",
  "Kaiserreich · Reichstag · Republik · Reparationen · Hyperinflation · Präsidialkabinett.":
    "Империя · рейхстаг · республика · репарации · гиперинфляция · президентский кабинет.",
  "In einem Satz: Die erste deutsche Demokratie hatte keine Mehrheit hinter sich, die sie verteidigt hätte — und das Grundgesetz ist die Antwort auf jede einzelne dieser Schwachstellen.":
    "Одним предложением: за первой немецкой демократией не стояло большинства, готового её защищать, — и Основной закон отвечает на каждое из этих слабых мест по отдельности.",
  "In welchem Jahr wurde das Deutsche Kaiserreich gegründet?":
    "В каком году основали Германскую империю?",
  "1848": "1848",
  "1871": "1871",
  "1888": "1888",
  "1918": "1918",
  "1871, nach dem Krieg gegen Frankreich. Bis dahin bestand Deutschland aus vielen Einzelstaaten.":
    "В 1871 году, после войны с Францией. До того Германия состояла из множества отдельных государств.",
  "Ab wann durften Frauen in Deutschland wählen?":
    "С какого времени женщины в Германии смогли голосовать?",
  "Seit 1871": "С 1871 года",
  "Seit 1919": "С 1919 года",
  "Seit 1949": "С 1949 года",
  "Seit 1969": "С 1969 года",
  "Das Frauenwahlrecht kam mit der Weimarer Republik 1919 — eine der wichtigsten Neuerungen der ersten deutschen Demokratie.":
    "Право голоса для женщин пришло с Веймарской республикой в 1919 году — одно из важнейших новшеств первой немецкой демократии.",
  "Warum heißt die Weimarer Republik so?": "Почему Веймарская республика так называется?",
  "Weimar war die Hauptstadt": "Веймар был столицей",
  "Die Verfassung wurde in Weimar beschlossen": "Конституцию приняли в Веймаре",
  "Der erste Präsident stammte aus Weimar": "Первый президент был родом из Веймара",
  "Das Parlament tagte dauerhaft in Weimar": "Парламент постоянно заседал в Веймаре",
  "Die Nationalversammlung tagte 1919 in Weimar und beschloss dort die Verfassung. Hauptstadt blieb Berlin.":
    "Национальное собрание заседало в 1919 году в Веймаре и приняло там конституцию. Столицей остался Берлин.",
  "Nationalsozialismus 1933–1945": "Национал-социализм, 1933–1945",
  "Am **30. Januar 1933** wurde Adolf Hitler zum Reichskanzler ernannt. Innerhalb weniger Monate war aus der Demokratie eine Diktatur geworden. Wie schnell das ging, gehört zum Pflichtwissen.":
    "**30 января 1933 года** Адольфа Гитлера назначили рейхсканцлером. За считаные месяцы демократия стала диктатурой. То, как быстро это произошло, входит в обязательные знания.",
  "Die Machtübernahme Schritt für Schritt": "Захват власти шаг за шагом",
  "30. Januar 1933": "30 января 1933 года",
  "Hitler wird Reichskanzler — ernannt, nicht durch eine absolute Mehrheit ins Amt gewählt.":
    "Гитлер становится рейхсканцлером — назначенным, а не приведённым в должность абсолютным большинством голосов.",
  "Februar 1933": "Февраль 1933 года",
  "Nach dem Reichstagsbrand werden Grundrechte per Notverordnung außer Kraft gesetzt.":
    "После поджога рейхстага основные права отменяют чрезвычайным указом.",
  "März 1933": "Март 1933 года",
  "Das **Ermächtigungsgesetz** erlaubt der Regierung, Gesetze ohne das Parlament zu erlassen. Die Gewaltenteilung ist damit beseitigt.":
    "**Закон о чрезвычайных полномочиях** разрешает правительству издавать законы без парламента. Разделение властей тем самым устранено.",
  "Sommer 1933": "Лето 1933 года",
  "Alle Parteien außer der NSDAP werden verboten oder lösen sich auf. Gewerkschaften werden zerschlagen.":
    "Все партии, кроме НСДАП, запрещают или они распускаются сами. Профсоюзы разгромлены.",
  "Der Unterschied zur Demokratie in einem Punkt: **eine Partei, keine freien Wahlen, keine unabhängigen Gerichte, keine Meinungsfreiheit.** Wer diese vier Merkmale kennt, erkennt jede Diktaturfrage im Test.":
    "Отличие от демократии в одной строке: **одна партия, никаких свободных выборов, никаких независимых судов, никакой свободы мнения.** Кто знает эти четыре признака, узнает в тесте любой вопрос о диктатуре.",
  "Verfolgung von Anfang an": "Преследования с самого начала",
  "Politische Gegner kamen in **Konzentrationslager**, die schon 1933 eingerichtet wurden. Die **Nürnberger Gesetze** von 1935 nahmen jüdischen Deutschen die Bürgerrechte. In der **Pogromnacht vom 9. November 1938** wurden Synagogen angezündet, Geschäfte zerstört und Menschen ermordet.":
    "Политических противников отправляли в **концентрационные лагеря**, устроенные уже в 1933 году. **Нюрнбергские законы** 1935 года отняли у немцев-евреев гражданские права. В **погромную ночь с 9 ноября 1938 года** жгли синагоги, громили магазины и убивали людей.",
  "Der Zweite Weltkrieg": "Вторая мировая война",
  "Am **1. September 1939** überfiel Deutschland Polen; damit begann der Zweite Weltkrieg. Er endete in Europa mit der bedingungslosen Kapitulation am **8. Mai 1945**. Der Krieg kostete weltweit über 50 Millionen Menschen das Leben und ging von Deutschland aus.":
    "**1 сентября 1939 года** Германия напала на Польшу; с этого началась Вторая мировая война. В Европе она кончилась безоговорочной капитуляцией **8 мая 1945 года**. Война стоила жизни более чем 50 миллионам людей по всему миру и вышла из Германии.",
  "Widerstand": "Сопротивление",
  "Es gab Menschen, die sich wehrten: die Geschwister **Sophie und Hans Scholl** von der Weißen Rose, verhaftet und hingerichtet 1943; **Claus Schenk Graf von Stauffenberg**, dessen Attentat am **20. Juli 1944** scheiterte; Menschen, die Verfolgte versteckten. Sie waren eine Minderheit — aber sie werden geehrt.":
    "Были люди, которые сопротивлялись: брат и сестра **Софи и Ханс Шолль** из «Белой розы», арестованные и казнённые в 1943 году; **Клаус Шенк граф фон Штауффенберг**, чьё покушение **20 июля 1944 года** не удалось; люди, прятавшие преследуемых. Их было меньшинство — но их чтут.",
  "Adolf Hitler · NSDAP · Sophie und Hans Scholl (Weiße Rose) · Claus Schenk Graf von Stauffenberg.":
    "Адольф Гитлер · НСДАП · Софи и Ханс Шолль («Белая роза») · Клаус Шенк граф фон Штауффенберг.",
  "30. Januar 1933 Machtübernahme · März 1933 Ermächtigungsgesetz · 1935 Nürnberger Gesetze · 9. November 1938 Pogromnacht · 1. September 1939 Kriegsbeginn · 20. Juli 1944 Attentat · 8. Mai 1945 Kapitulation.":
    "30 января 1933 — приход к власти · март 1933 — закон о чрезвычайных полномочиях · 1935 — Нюрнбергские законы · 9 ноября 1938 — погромная ночь · 1 сентября 1939 — начало войны · 20 июля 1944 — покушение · 8 мая 1945 — капитуляция.",
  "Diktatur · Ermächtigungsgesetz · Einparteienstaat · Konzentrationslager · Gleichschaltung · Widerstand.":
    "Диктатура · закон о чрезвычайных полномочиях · однопартийное государство · концентрационный лагерь · унификация · сопротивление.",
  "In einem Satz: In weniger als einem halben Jahr wurde eine Demokratie mit ihren eigenen Mitteln abgeschafft — deshalb ist die heutige Demokratie wehrhaft.":
    "Одним предложением: меньше чем за полгода демократию упразднили её же средствами — потому сегодняшняя демократия и умеет обороняться.",
  "Wann begann der Zweite Weltkrieg?": "Когда началась Вторая мировая война?",
  "Am 30. Januar 1933": "30 января 1933 года",
  "Am 9. November 1938": "9 ноября 1938 года",
  "Am 1. September 1939": "1 сентября 1939 года",
  "Am 8. Mai 1945": "8 мая 1945 года",
  "Mit dem deutschen Überfall auf Polen am 1. September 1939. Der 8. Mai 1945 ist das Kriegsende in Europa.":
    "С нападения Германии на Польшу 1 сентября 1939 года. 8 мая 1945 года — конец войны в Европе.",
  "Was geschah in der Nacht vom 9. auf den 10. November 1938?":
    "Что произошло в ночь с 9 на 10 ноября 1938 года?",
  "Die Berliner Mauer fiel": "Пала Берлинская стена",
  "Synagogen wurden angezündet und jüdische Geschäfte zerstört":
    "Жгли синагоги и громили еврейские магазины",
  "Der Zweite Weltkrieg begann": "Началась Вторая мировая война",
  "Das Grundgesetz trat in Kraft": "Вступил в силу Основной закон",
  "Die Pogromnacht. Der Mauerfall fällt auf denselben Kalendertag — den 9. November 1989 — und wird deshalb gern verwechselt.":
    "Погромная ночь. Падение стены приходится на тот же день календаря — 9 ноября 1989 года — и потому эти события охотно путают.",
  "Wer gehörte zur Widerstandsgruppe „Weiße Rose“?":
    "Кто входил в группу сопротивления «Белая роза»?",
  "Sophie und Hans Scholl": "Софи и Ханс Шолль",
  "Konrad Adenauer": "Конрад Аденауэр",
  "Claus Schenk Graf von Stauffenberg": "Клаус Шенк граф фон Штауффенберг",
  "Willy Brandt": "Вилли Брандт",
  "Die Geschwister Scholl verteilten in München Flugblätter gegen das Regime und wurden 1943 hingerichtet. Stauffenberg gehörte zum militärischen Widerstand des 20. Juli 1944.":
    "Брат и сестра Шолль раздавали в Мюнхене листовки против режима и были казнены в 1943 году. Штауффенберг принадлежал к военному сопротивлению 20 июля 1944 года.",
  "Holocaust und Verantwortung": "Холокост и ответственность",
  "Der **Holocaust** — der Massenmord an den europäischen Juden — ist der Kern dessen, was der Test unter „Verantwortung“ prüft. Nicht als Detailwissen, sondern als Verständnis dafür, warum Deutschland heute so handelt, wie es handelt.":
    "**Холокост** — массовое убийство европейских евреев — это ядро того, что тест проверяет под словом «ответственность». Не как знание подробностей, а как понимание того, почему Германия сегодня поступает именно так.",
  "Was geschah": "Что произошло",
  "Der Nationalsozialismus ermordete etwa **sechs Millionen Juden**. Ermordet wurden außerdem Sinti und Roma, Menschen mit Behinderung, politische Gegner, Homosexuelle, Kriegsgefangene und Zwangsarbeiter. Der Mord war staatlich organisiert und industriell betrieben — in Vernichtungslagern wie **Auschwitz**.":
    "Национал-социализм убил около **шести миллионов евреев**. Убиты были также синти и рома, люди с инвалидностью, политические противники, гомосексуалы, военнопленные и подневольные рабочие. Убийство было организовано государством и поставлено на промышленный ход — в лагерях уничтожения, таких как **Освенцим**.",
  "Das **Leugnen des Holocaust** ist in Deutschland eine **Straftat**. Es fällt nicht unter die Meinungsfreiheit. Diese Frage kommt im Test regelmäßig vor.":
    "**Отрицание Холокоста** в Германии — **уголовное преступление**. Под свободу мнения оно не подпадает. Этот вопрос попадается в тесте регулярно.",
  "Wie Deutschland damit umgeht": "Как Германия с этим обходится",
  "Erinnern": "Память",
  "Der **27. Januar** — der Tag der Befreiung von Auschwitz 1945 — ist Gedenktag für die Opfer des Nationalsozialismus.":
    "**27 января** — день освобождения Освенцима в 1945 году — день памяти жертв национал-социализма.",
  "Gedenkstätten": "Мемориалы",
  "Ehemalige Lager wie Dachau, Buchenwald und Bergen-Belsen sind Gedenkstätten. In Berlin steht das Denkmal für die ermordeten Juden Europas.":
    "Бывшие лагеря — Дахау, Бухенвальд, Берген-Бельзен — стали мемориалами. В Берлине стоит памятник убитым евреям Европы.",
  "Entschädigung": "Возмещение",
  "Deutschland zahlt seit Jahrzehnten Entschädigungen an Überlebende und deren Nachkommen.":
    "Германия десятилетиями выплачивает возмещение выжившим и их потомкам.",
  "Israel": "Израиль",
  "Aus dieser Geschichte folgt eine besondere Verantwortung Deutschlands gegenüber Israel und gegenüber jüdischem Leben in Deutschland.":
    "Из этой истории следует особая ответственность Германии перед Израилем и перед еврейской жизнью в самой Германии.",
  "Die Nürnberger Prozesse": "Нюрнбергский процесс",
  "1945 und 1946 stellten die Alliierten führende Nationalsozialisten in **Nürnberg** vor Gericht. Zum ersten Mal wurden Staatsführer persönlich für Kriegsverbrechen und Verbrechen gegen die Menschlichkeit zur Verantwortung gezogen — die Grundlage des heutigen Völkerstrafrechts.":
    "В 1945 и 1946 годах союзники судили руководителей национал-социализма в **Нюрнберге**. Впервые главы государства лично отвечали за военные преступления и преступления против человечности — это основа нынешнего международного уголовного права.",
  "Was daraus für heute folgt": "Что из этого следует сегодня",
  "Antisemitismus, Rassismus und die Verharmlosung des Nationalsozialismus haben in Deutschland keinen Platz — rechtlich nicht und gesellschaftlich nicht. Das Zeigen von NS-Symbolen ist verboten, ebenso die Volksverhetzung.":
    "Антисемитизму, расизму и приуменьшению национал-социализма в Германии места нет — ни по праву, ни в обществе. Показывать нацистскую символику запрещено, разжигать ненависть тоже.",
  "Auschwitz · Nürnberger Prozesse · Anne Frank · Denkmal für die ermordeten Juden Europas · Yad Vashem.":
    "Освенцим · Нюрнбергский процесс · Анна Франк · памятник убитым евреям Европы · Яд ва-Шем.",
  "Etwa 6 Millionen ermordete Juden · 27. Januar Gedenktag · 1945/46 Nürnberger Prozesse.":
    "Около 6 миллионов убитых евреев · 27 января — день памяти · 1945/46 — Нюрнбергский процесс.",
  "Holocaust · Schoah · Antisemitismus · Volksverhetzung · Verbrechen gegen die Menschlichkeit · Erinnerungskultur.":
    "Холокост · Шоа · антисемитизм · разжигание ненависти · преступления против человечности · культура памяти.",
  "In einem Satz: Deutschland leugnet diesen Teil seiner Geschichte nicht, sondern hat ihn zur Grundlage seiner Gegenwart gemacht — im Recht, im Gedenken und in der Außenpolitik.":
    "Одним предложением: Германия не отрицает эту часть своей истории, а сделала её основанием своего настоящего — в праве, в памяти и во внешней политике.",
  "Ist es in Deutschland erlaubt, öffentlich zu behaupten, der Holocaust habe nie stattgefunden?":
    "Позволено ли в Германии публично утверждать, что Холокоста никогда не было?",
  "Ja, das ist Meinungsfreiheit": "Да, это свобода мнения",
  "Nein, das ist eine Straftat": "Нет, это уголовное преступление",
  "Nur in wissenschaftlichen Texten": "Только в научных текстах",
  "Nur mit Genehmigung": "Только с разрешения",
  "Die Leugnung des Holocaust ist strafbar. Die Meinungsfreiheit endet dort, wo Volksverhetzung beginnt.":
    "Отрицание Холокоста наказуемо. Свобода мнения кончается там, где начинается разжигание ненависти.",
  "Woran erinnert der 27. Januar in Deutschland?": "О чём напоминает в Германии 27 января?",
  "An die Gründung der Bundesrepublik": "Об основании Федеративной Республики",
  "An die Opfer des Nationalsozialismus": "О жертвах национал-социализма",
  "An den Mauerfall": "О падении стены",
  "An das Ende des Ersten Weltkriegs": "О конце Первой мировой войны",
  "Am 27. Januar 1945 wurde Auschwitz befreit. Der Tag ist deutschlandweiter Gedenktag für die Opfer des Nationalsozialismus.":
    "27 января 1945 года освободили Освенцим. Этот день — общегерманский день памяти жертв национал-социализма.",
  "Was waren die Nürnberger Prozesse?": "Чем был Нюрнбергский процесс?",
  "Verfahren gegen führende Nationalsozialisten nach dem Krieg":
    "Судом над руководителями национал-социализма после войны",
  "Die Verhandlungen zur Wiedervereinigung": "Переговорами об объединении Германии",
  "Die Gesetze gegen jüdische Deutsche von 1935": "Законами против немцев-евреев 1935 года",
  "Die Verhandlungen über den Versailler Vertrag": "Переговорами о Версальском договоре",
  "1945/46 klagten die Alliierten die Hauptverantwortlichen an. Die Nürnberger *Gesetze* von 1935 sind etwas anderes — hier lohnt genaues Lesen.":
    "В 1945/46 годах союзники предъявили обвинение главным виновным. Нюрнбергские *законы* 1935 года — это другое, и здесь стоит читать внимательно.",
  "Nachkriegszeit und Teilung": "Послевоенное время и раздел",
  "1945 war Deutschland zerstört, besetzt und ohne eigene Regierung. Vier Jahre später standen zwei deutsche Staaten — und die Teilung hielt vierzig Jahre.":
    "В 1945 году Германия лежала разрушенной, занятой войсками и без собственного правительства. Четыре года спустя стояли два немецких государства — и раздел продержался сорок лет.",
  "Die vier Besatzungszonen": "Четыре зоны оккупации",
  "Die Siegermächte teilten Deutschland unter sich auf: **USA**, **Großbritannien**, **Frankreich** und die **Sowjetunion**. Berlin wurde ebenfalls in vier Sektoren geteilt, obwohl die Stadt mitten in der sowjetischen Zone lag.":
    "Державы-победительницы поделили Германию между собой: **США**, **Великобритания**, **Франция** и **Советский Союз**. Берлин тоже разделили на четыре сектора, хотя город лежал посреди советской зоны.",
  "Entnazifizierung": "Денацификация",
  "Nationalsozialisten wurden aus Ämtern entfernt, NS-Organisationen verboten.":
    "Национал-социалистов убирали с должностей, нацистские организации запрещали.",
  "Flucht und Vertreibung": "Бегство и изгнание",
  "Millionen Deutsche kamen aus den ehemaligen Ostgebieten in den Westen und Osten.":
    "Миллионы немцев пришли из бывших восточных земель на запад и на восток.",
  "Trümmerfrauen": "Женщины на развалинах",
  "Frauen räumten die zerstörten Städte auf — ein Bild, das für den Neuanfang steht.":
    "Женщины разбирали разрушенные города — образ, ставший знаком нового начала.",
  "Marshallplan": "План Маршалла",
  "Ab 1948 halfen die USA dem Westen mit Krediten und Waren beim Wiederaufbau.":
    "С 1948 года США помогали западу кредитами и товарами при восстановлении.",
  "Die Berliner Blockade": "Блокада Берлина",
  "1948 sperrte die Sowjetunion alle Land- und Wasserwege nach West-Berlin. Fast ein Jahr lang versorgten die Westalliierten die Stadt aus der Luft — die **Luftbrücke**. Die Flugzeuge, die im Minutentakt landeten, nannten die Berliner **Rosinenbomber**.":
    "В 1948 году Советский Союз перекрыл все сухопутные и водные пути в Западный Берлин. Почти год западные союзники снабжали город по воздуху — это был **воздушный мост**. Самолёты, садившиеся с интервалом в минуту, берлинцы прозвали **изюмными бомбардировщиками**.",
  "1949: zwei Staaten": "1949: два государства",
  "Bundesrepublik Deutschland": "Федеративная Республика Германия",
  "Aus den drei Westzonen. Grundgesetz am **23. Mai 1949**. Hauptstadt Bonn. Erster Bundeskanzler: **Konrad Adenauer**. Marktwirtschaft, Westbindung, freie Wahlen.":
    "Из трёх западных зон. Основной закон **23 мая 1949 года**. Столица Бонн. Первый федеральный канцлер — **Конрад Аденауэр**. Рыночное хозяйство, связь с Западом, свободные выборы.",
  "Deutsche Demokratische Republik": "Германская Демократическая Республика",
  "Aus der sowjetischen Zone, gegründet am **7. Oktober 1949**. Hauptstadt Ost-Berlin. Einparteienherrschaft der SED, Planwirtschaft, Bindung an die Sowjetunion.":
    "Из советской зоны, основана **7 октября 1949 года**. Столица — Восточный Берлин. Однопартийное правление СЕПГ, плановое хозяйство, связь с Советским Союзом.",
  "Zwei Daten aus demselben Jahr, die gern vertauscht werden: **23. Mai 1949** Grundgesetz und Bundesrepublik, **7. Oktober 1949** Gründung der DDR.":
    "Две даты одного года, которые охотно меняют местами: **23 мая 1949 года** — Основной закон и Федеративная Республика, **7 октября 1949 года** — основание ГДР.",
  "Wirtschaftswunder und Gastarbeiter": "Экономическое чудо и приглашённые рабочие",
  "Der Westen erlebte in den 1950er Jahren einen raschen Aufschwung, das **Wirtschaftswunder**. Weil Arbeitskräfte fehlten, wurden ab 1955 Menschen aus Italien, Spanien, Griechenland, der Türkei und weiteren Ländern angeworben — die **Gastarbeiter**. Viele blieben; ihre Familien gehören seit Generationen zu Deutschland.":
    "Запад пережил в 1950-е годы быстрый подъём — **экономическое чудо**. Рабочих рук не хватало, и с 1955 года людей набирали в Италии, Испании, Греции, Турции и других странах — это были **Gastarbeiter**, приглашённые рабочие. Многие остались; их семьи уже поколениями принадлежат Германии.",
  "Konrad Adenauer · Ludwig Erhard · SED · Luftbrücke · Rosinenbomber · Marshallplan.":
    "Конрад Аденауэр · Людвиг Эрхард · СЕПГ · воздушный мост · изюмные бомбардировщики · план Маршалла.",
  "1945 Kriegsende und vier Zonen · 1948/49 Berliner Blockade · 23. Mai 1949 Bundesrepublik · 7. Oktober 1949 DDR · ab 1955 Anwerbung von Gastarbeitern.":
    "1945 — конец войны и четыре зоны · 1948/49 — блокада Берлина · 23 мая 1949 — Федеративная Республика · 7 октября 1949 — ГДР · с 1955 — набор приглашённых рабочих.",
  "Besatzungszone · Entnazifizierung · Luftbrücke · Wirtschaftswunder · Soziale Marktwirtschaft · Planwirtschaft · Kalter Krieg.":
    "Зона оккупации · денацификация · воздушный мост · экономическое чудо · социальное рыночное хозяйство · плановое хозяйство · холодная война.",
  "In einem Satz: Aus vier Besatzungszonen wurden zwei Staaten mit entgegengesetzten Systemen — und Berlin lag als geteilte Stadt mitten im Osten.":
    "Одним предложением: из четырёх зон оккупации вышли два государства с противоположными порядками — а Берлин остался разделённым городом посреди востока.",
  "Welche vier Mächte besetzten Deutschland nach 1945?":
    "Какие четыре державы заняли Германию после 1945 года?",
  "USA, Großbritannien, Frankreich, Sowjetunion": "США, Великобритания, Франция, Советский Союз",
  "USA, Großbritannien, Italien, Sowjetunion": "США, Великобритания, Италия, Советский Союз",
  "USA, Frankreich, Polen, Sowjetunion": "США, Франция, Польша, Советский Союз",
  "Großbritannien, Frankreich, Österreich, Sowjetunion":
    "Великобритания, Франция, Австрия, Советский Союз",
  "Die vier Siegermächte. Aus den drei westlichen Zonen entstand 1949 die Bundesrepublik, aus der sowjetischen die DDR.":
    "Четыре державы-победительницы. Из трёх западных зон в 1949 году возникла Федеративная Республика, из советской — ГДР.",
  "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?":
    "Кто был первым федеральным канцлером Федеративной Республики Германия?",
  "Ludwig Erhard": "Людвиг Эрхард",
  "Helmut Kohl": "Гельмут Коль",
  "Konrad Adenauer, ab 1949. Erhard folgte ihm 1963, Brandt kam 1969, Kohl 1982.":
    "Конрад Аденауэр, с 1949 года. Эрхард сменил его в 1963, Брандт пришёл в 1969, Коль в 1982.",
  "Was war die Berliner Luftbrücke?": "Чем был берлинский воздушный мост?",
  "Eine Brücke über die Spree": "Мостом через Шпрее",
  "Die Versorgung West-Berlins aus der Luft während der Blockade":
    "Снабжением Западного Берлина по воздуху во время блокады",
  "Der Bau des Flughafens Tegel": "Строительством аэропорта Тегель",
  "Eine Fluchtroute über die Mauer": "Путём бегства через стену",
  "1948/49 blockierte die Sowjetunion die Zufahrtswege. Die Westalliierten versorgten die Stadt fast ein Jahr lang per Flugzeug.":
    "В 1948/49 годах Советский Союз перекрыл подъездные пути. Западные союзники почти год снабжали город самолётами.",
  "Leben in der DDR": "Жизнь в ГДР",
  "Die DDR nannte sich demokratisch, war es aber nicht. Woran man das erkennt, ist eine typische Testfrage — und zugleich eine gute Wiederholung dessen, was Demokratie ausmacht.":
    "ГДР называла себя демократической, но не была ею. По каким признакам это видно — типичный вопрос теста и заодно хорошее повторение того, из чего складывается демократия.",
  "Warum die DDR keine Demokratie war": "Почему ГДР не была демократией",
  "Eine Partei bestimmte": "Решала одна партия",
  "Die **SED** hatte den Führungsanspruch. Andere Parteien existierten nur als Beiwerk ohne echte Macht.":
    "**СЕПГ** притязала на руководящую роль. Другие партии существовали лишь как довесок, без настоящей власти.",
  "Keine freien Wahlen": "Никаких свободных выборов",
  "Es gab eine Einheitsliste. Man konnte zustimmen, aber nicht zwischen Alternativen wählen.":
    "Был единый список. Согласиться было можно, а выбирать между вариантами — нет.",
  "Keine Meinungsfreiheit": "Никакой свободы мнения",
  "Presse und Rundfunk waren staatlich gelenkt. Kritik konnte Beruf, Studienplatz oder Freiheit kosten.":
    "Печатью и вещанием управляло государство. Критика могла стоить работы, места в вузе или свободы.",
  "Keine Reisefreiheit": "Никакой свободы поездок",
  "In den Westen zu reisen war für die meisten Bürger nicht möglich.":
    "Поехать на запад большинству граждан было нельзя.",
  "Die Staatssicherheit": "Госбезопасность",
  "Das Ministerium für Staatssicherheit — die **Stasi** — überwachte die eigene Bevölkerung mit Hunderttausenden hauptamtlichen und inoffiziellen Mitarbeitern. Sie las Post, hörte Telefone ab und führte Akten über Millionen Menschen. Diese Akten sind heute einsehbar: Wer will, kann beantragen, die eigene Akte zu lesen.":
    "Министерство государственной безопасности — **Штази** — следило за собственным населением силами сотен тысяч штатных и негласных сотрудников. Оно читало почту, слушало телефоны и вело дела на миллионы людей. Сегодня эти дела открыты: кто хочет, может подать заявление и прочитать своё.",
  "Die Mauer": "Стена",
  "Weil immer mehr Menschen die DDR verließen, wurde am **13. August 1961** die **Berliner Mauer** gebaut und die innerdeutsche Grenze abgeriegelt. An der Grenze galt der Schießbefehl; bei Fluchtversuchen starben Hunderte Menschen.":
    "Из-за того, что ГДР покидало всё больше людей, **13 августа 1961 года** построили **Берлинскую стену** и наглухо закрыли границу между двумя Германиями. На границе действовал приказ стрелять; при попытках бегства погибли сотни людей.",
  "Die Mauer sollte nicht Feinde draußen halten, sondern die eigene Bevölkerung drinnen. Genau das unterscheidet sie von einer normalen Staatsgrenze.":
    "Стена должна была держать не врагов снаружи, а собственное население внутри. Именно этим она и отличается от обычной государственной границы.",
  "Der Aufstand vom 17. Juni 1953": "Восстание 17 июня 1953 года",
  "Arbeiter in Ost-Berlin und vielen anderen Städten streikten gegen höhere Arbeitsnormen; daraus wurde ein Aufstand gegen die Regierung. Sowjetische Panzer schlugen ihn nieder. In der Bundesrepublik war der 17. Juni bis 1990 der Nationalfeiertag.":
    "Рабочие Восточного Берлина и многих других городов забастовали против повышенных норм выработки; из этого выросло восстание против правительства. Советские танки его подавили. В Федеративной Республике 17 июня до 1990 года было государственным праздником.",
  "SED · Stasi (Ministerium für Staatssicherheit) · Walter Ulbricht · Erich Honecker · Volkskammer.":
    "СЕПГ · Штази (министерство государственной безопасности) · Вальтер Ульбрихт · Эрих Хонеккер · Народная палата.",
  "7. Oktober 1949 Gründung · 17. Juni 1953 Aufstand · 13. August 1961 Mauerbau · 9. November 1989 Mauerfall.":
    "7 октября 1949 — основание · 17 июня 1953 — восстание · 13 августа 1961 — постройка стены · 9 ноября 1989 — падение стены.",
  "Einparteienstaat · Planwirtschaft · Einheitsliste · Stasi-Akte · Republikflucht · Schießbefehl.":
    "Однопартийное государство · плановое хозяйство · единый список · дело Штази · бегство из республики · приказ стрелять.",
  "In einem Satz: Eine Partei, gelenkte Wahlen, überwachte Bürger und eine Mauer, die niemanden hinausließ — das ist das Gegenbild zu allem, was in Kapitel 1 steht.":
    "Одним предложением: одна партия, управляемые выборы, поднадзорные граждане и стена, никого не выпускавшая, — это обратная картина всему, что стоит в первой главе.",
  "Wann wurde die Berliner Mauer gebaut?": "Когда построили Берлинскую стену?",
  "1949": "1949",
  "1953": "1953",
  "1961": "1961",
  "1968": "1968",
  "Am 13. August 1961, um die Fluchtbewegung zu stoppen. 1953 war der Aufstand, 1949 die Staatsgründung.":
    "13 августа 1961 года, чтобы остановить бегство людей. В 1953 году было восстание, в 1949 — основание государства.",
  "Was war die Stasi?": "Чем была Штази?",
  "Die Armee der DDR": "Армией ГДР",
  "Der Geheimdienst, der die eigene Bevölkerung überwachte":
    "Тайной службой, следившей за собственным населением",
  "Die Jugendorganisation der SED": "Молодёжной организацией СЕПГ",
  "Die Wirtschaftsbehörde der DDR": "Хозяйственным ведомством ГДР",
  "Das Ministerium für Staatssicherheit überwachte die eigenen Bürger. Die Armee hieß Nationale Volksarmee, die Jugendorganisation FDJ.":
    "Министерство государственной безопасности следило за собственными гражданами. Армия называлась Национальной народной армией, молодёжная организация — ССНМ.",
  "Warum war die DDR keine Demokratie?": "Почему ГДР не была демократией?",
  "Weil es keine Verfassung gab": "Потому что не было конституции",
  "Weil eine Partei herrschte und es keine freien Wahlen gab":
    "Потому что правила одна партия и не было свободных выборов",
  "Weil es kein Parlament gab": "Потому что не было парламента",
  "Weil sie zu klein war": "Потому что она была слишком мала",
  "Eine Verfassung und ein Parlament gab es durchaus. Entscheidend ist: Die SED bestimmte, echte Wahlmöglichkeiten und Meinungsfreiheit fehlten.":
    "И конституция, и парламент как раз были. Решает другое: распоряжалась СЕПГ, а настоящего выбора и свободы мнения не было.",
  "Mauerfall und Wiedervereinigung": "Падение стены и объединение",
  "1989 endete die Teilung — nicht durch Krieg, sondern weil Menschen auf die Straße gingen. Diese Ereignisse und ihre Daten gehören zum sichersten Prüfungswissen überhaupt.":
    "В 1989 году раздел кончился — не войной, а тем, что люди вышли на улицу. Эти события и их даты относятся к самым надёжным знаниям для экзамена.",
  "Die Friedliche Revolution": "Мирная революция",
  "Montagsdemonstrationen": "Понедельничные демонстрации",
  "In **Leipzig** und anderen Städten demonstrierten immer mehr Menschen — friedlich, mit dem Ruf **„Wir sind das Volk“**.":
    "В **Лейпциге** и других городах выходило всё больше людей — мирно, с возгласом **«Мы и есть народ»**.",
  "Ausreisewelle": "Волна отъезда",
  "Über Ungarn und die Prager Botschaft verließen Tausende die DDR, als die Nachbarländer ihre Grenzen öffneten.":
    "Через Венгрию и посольство в Праге тысячи покинули ГДР, когда соседние страны открыли границы.",
  "9. November 1989": "9 ноября 1989 года",
  "Nach einer verwirrenden Pressekonferenz strömten Menschen an die Grenzübergänge. Die **Mauer wurde geöffnet** — ohne einen einzigen Schuss.":
    "После сбивчивой пресс-конференции люди хлынули к пропускным пунктам. **Стену открыли** — без единого выстрела.",
  "März 1990": "Март 1990 года",
  "Die ersten **freien Wahlen** in der Geschichte der DDR.":
    "Первые **свободные выборы** в истории ГДР.",
  "„Wir sind das Volk“ ist wörtlich Artikel 20 des Grundgesetzes: Alle Staatsgewalt geht vom Volke aus. Die Demonstranten beriefen sich auf ein Prinzip, das ihr Staat nur behauptete.":
    "«Мы и есть народ» — это дословно статья 20 Основного закона: вся государственная власть исходит от народа. Демонстранты ссылались на начало, которое их государство лишь провозглашало.",
  "3. Oktober 1990: die Einheit": "3 октября 1990 года: единство",
  "Die DDR trat der Bundesrepublik bei. Aus zwei Staaten wurde einer, aus den **fünf neuen Ländern** — Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt und Thüringen — plus dem wiedervereinigten Berlin wurden die heutigen 16 Bundesländer. Der **3. Oktober** ist seitdem der **Tag der Deutschen Einheit**, der Nationalfeiertag.":
    "ГДР вошла в состав Федеративной Республики. Из двух государств стало одно, а из **пяти новых земель** — Бранденбурга, Мекленбурга-Передней Померании, Саксонии, Саксонии-Анхальт и Тюрингии — вместе с воссоединённым Берлином сложились сегодняшние 16 федеральных земель. **3 октября** с тех пор — **День немецкого единства**, государственный праздник.",
  "Nicht verwechseln: Die **Mauer fiel am 9. November 1989**, die **Wiedervereinigung war am 3. Oktober 1990**. Gefeiert wird der 3. Oktober — der 9. November ist auch das Datum der Pogromnacht 1938 und taugt deshalb nicht als Freudentag.":
    "Не путать: **стена пала 9 ноября 1989 года**, а **объединение состоялось 3 октября 1990 года**. Празднуют 3 октября — 9 ноября это ещё и дата погромной ночи 1938 года, и потому днём радости оно быть не может.",
  "Der Zwei-plus-Vier-Vertrag": "Договор «два плюс четыре»",
  "Die beiden deutschen Staaten und die vier Siegermächte einigten sich 1990 darauf, dass Deutschland die volle Souveränität erhält. Die heutigen Grenzen wurden völkerrechtlich bestätigt. Berlin wurde wieder Hauptstadt; Regierung und Parlament zogen 1999 dorthin.":
    "Два немецких государства и четыре державы-победительницы договорились в 1990 году, что Германия получает полный суверенитет. Нынешние границы подтвердили международным правом. Берлин снова стал столицей; правительство и парламент переехали туда в 1999 году.",
  "Helmut Kohl · Michail Gorbatschow · Leipziger Montagsdemonstrationen · Nikolaikirche · Zwei-plus-Vier-Vertrag.":
    "Гельмут Коль · Михаил Горбачёв · лейпцигские понедельничные демонстрации · церковь святого Николая · договор «два плюс четыре».",
  "9. November 1989 Mauerfall · März 1990 freie Volkskammerwahl · 3. Oktober 1990 Einheit · 5 neue Bundesländer · 1999 Umzug nach Berlin.":
    "9 ноября 1989 — падение стены · март 1990 — свободные выборы в Народную палату · 3 октября 1990 — единство · 5 новых земель · 1999 — переезд в Берлин.",
  "Friedliche Revolution · „Wir sind das Volk“ · Tag der Deutschen Einheit · neue Bundesländer · Souveränität.":
    "Мирная революция · «Мы и есть народ» · День немецкого единства · новые федеральные земли · суверенитет.",
  "In einem Satz: Eine Diktatur endete durch friedliche Demonstrationen — und der Nationalfeiertag erinnert nicht an einen Sieg, sondern an eine Vereinigung.":
    "Одним предложением: диктатура кончилась мирными демонстрациями — и государственный праздник напоминает не о победе, а об объединении.",
  "Welcher Tag ist der deutsche Nationalfeiertag?":
    "Какой день является государственным праздником Германии?",
  "Der 9. November": "9 ноября",
  "Der 3. Oktober": "3 октября",
  "Der 23. Mai": "23 мая",
  "Der 1. Mai": "1 мая",
  "Der 3. Oktober, Tag der Deutschen Einheit. Der 9. November ist der Tag des Mauerfalls — aber auch der Pogromnacht 1938.":
    "3 октября, День немецкого единства. 9 ноября — день падения стены, но и день погромной ночи 1938 года.",
  "Wann fiel die Berliner Mauer?": "Когда пала Берлинская стена?",
  "Am 13. August 1961": "13 августа 1961 года",
  "Am 9. November 1989": "9 ноября 1989 года",
  "Am 3. Oktober 1990": "3 октября 1990 года",
  "Am 23. Mai 1949": "23 мая 1949 года",
  "Am 9. November 1989 wurden die Grenzübergänge geöffnet. Die staatliche Einheit folgte knapp elf Monate später.":
    "9 ноября 1989 года открыли пропускные пункты. Государственное единство пришло без малого одиннадцать месяцев спустя.",
  "Welche Länder kamen 1990 als „neue Bundesländer“ dazu?":
    "Какие земли прибавились в 1990 году как «новые федеральные земли»?",
  "Bayern, Hessen, Saarland, Bremen, Hamburg": "Бавария, Гессен, Саар, Бремен, Гамбург",
  "Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt, Thüringen":
    "Бранденбург, Мекленбург-Передняя Померания, Саксония, Саксония-Анхальт, Тюрингия",
  "Nur Sachsen und Thüringen": "Только Саксония и Тюрингия",
  "Berlin, Brandenburg, Sachsen, Bayern, Hessen": "Берлин, Бранденбург, Саксония, Бавария, Гессен",
  "Diese fünf Länder wurden auf dem Gebiet der DDR wiedergegründet. Zusammen mit dem vereinigten Berlin ergeben sich die heutigen 16 Länder.":
    "Эти пять земель заново образовали на территории ГДР. Вместе с объединённым Берлином получаются сегодняшние 16 земель.",
  "Deutschland in Europa und der Welt": "Германия в Европе и мире",
  "Deutschland ist Teil der **Europäischen Union** — und das ist keine Nebensache, sondern eine direkte Folge der eigenen Geschichte: Wer wirtschaftlich verflochten ist, führt keine Kriege mehr gegeneinander.":
    "Германия — часть **Европейского союза**, и это не мелочь, а прямое следствие собственной истории: кто хозяйственно переплетён, тот больше не воюет друг с другом.",
  "Gründungsidee": "Замысел основателей",
  "Nach dem Zweiten Weltkrieg schlossen sich europäische Staaten zusammen, um Frieden durch Zusammenarbeit zu sichern. Deutschland war von Anfang an dabei.":
    "После Второй мировой войны европейские государства объединились, чтобы обеспечить мир сотрудничеством. Германия была в этом с самого начала.",
  "27 Mitgliedstaaten": "27 государств-членов",
  "So viele sind es seit dem Austritt des Vereinigten Königreichs 2020.":
    "Столько их с выхода Соединённого Королевства в 2020 году.",
  "Der Euro": "Евро",
  "Seit **2002** ist der Euro das Bargeld in Deutschland; er löste die D-Mark ab. Nicht alle EU-Staaten haben den Euro.":
    "С **2002 года** наличными деньгами в Германии служит евро; он сменил немецкую марку. Евро есть не во всех государствах ЕС.",
  "Alle fünf Jahre wählen die Bürger das **Europäische Parlament** direkt.":
    "Раз в пять лет граждане напрямую избирают **Европейский парламент**.",
  "Was die EU im Alltag bedeutet": "Что ЕС значит в повседневности",
  "**Freizügigkeit**: EU-Bürger dürfen in jedem Mitgliedstaat leben und arbeiten. **Offene Grenzen** im Schengen-Raum: Reisen ohne Passkontrolle. **Eine Währung** in weiten Teilen. **Gemeinsame Regeln** für Verbraucherschutz, Produktsicherheit und Datenschutz.":
    "**Свобода передвижения**: гражданин ЕС вправе жить и работать в любом государстве-члене. **Открытые границы** в шенгенской зоне: поездки без паспортного контроля. **Единая валюта** на большей части. **Общие правила** защиты потребителя, безопасности товаров и защиты данных.",
  "Nicht verwechseln: **Europäische Union** (politischer und wirtschaftlicher Zusammenschluss), **Europarat** (Menschenrechte, viel größer) und **NATO** (Verteidigungsbündnis). Deutschland ist in allen dreien, sie sind aber verschiedene Dinge.":
    "Не путать: **Европейский союз** (объединение политическое и хозяйственное), **Совет Европы** (права человека, гораздо шире) и **НАТО** (оборонительный союз). Германия во всех трёх, но это разные вещи.",
  "Deutschland international": "Германия в мире",
  "Vereinte Nationen": "Организация Объединённых Наций",
  "Deutschland ist seit 1973 Mitglied und einer der größten Beitragszahler.":
    "Германия состоит в ней с 1973 года и входит в число крупнейших плательщиков взносов.",
  "NATO": "НАТО",
  "Die Bundesrepublik trat 1955 bei. Die Bundeswehr ist eine Parlamentsarmee: Über Auslandseinsätze entscheidet der Bundestag.":
    "Федеративная Республика вступила в 1955 году. Бундесвер — парламентская армия: о заграничных операциях решает Бундестаг.",
  "Entwicklungszusammenarbeit": "Помощь развитию",
  "Deutschland unterstützt ärmere Länder finanziell und mit Projekten.":
    "Германия поддерживает более бедные страны деньгами и проектами.",
  "Nachbarn": "Соседи",
  "Deutschland grenzt an **neun** Staaten — mehr als jedes andere EU-Land.":
    "Германия граничит с **девятью** государствами — больше, чем любая другая страна ЕС.",
  "Europäische Union · Europäisches Parlament · Europarat · NATO · Vereinte Nationen · Schengen-Raum.":
    "Европейский союз · Европейский парламент · Совет Европы · НАТО · Организация Объединённых Наций · шенгенская зона.",
  "27 EU-Mitgliedstaaten · Euro-Bargeld seit 2002 · Europawahl alle 5 Jahre · 9 Nachbarländer · NATO-Beitritt 1955 · UN-Mitglied seit 1973.":
    "27 государств-членов ЕС · наличные евро с 2002 года · выборы в Европарламент раз в 5 лет · 9 соседних стран · вступление в НАТО в 1955 · член ООН с 1973.",
  "Freizügigkeit · Binnenmarkt · Schengen · Parlamentsarmee · Europäische Integration.":
    "Свобода передвижения · внутренний рынок · Шенген · парламентская армия · европейская интеграция.",
  "In einem Satz: Deutschland hat sich nach 1945 bewusst eingebunden statt abgegrenzt — die EU ist Friedenspolitik mit wirtschaftlichen Mitteln.":
    "Одним предложением: после 1945 года Германия сознательно вплелась в общее, вместо того чтобы отгородиться, — ЕС есть политика мира хозяйственными средствами.",
  "Seit wann gibt es in Deutschland Euro-Bargeld?":
    "С какого времени в Германии есть наличные евро?",
  "Seit 1990": "С 1990 года",
  "Seit 1999": "С 1999 года",
  "Seit 2002": "С 2002 года",
  "Seit 2010": "С 2010 года",
  "Die Scheine und Münzen kamen 2002. Als Buchgeld existierte der Euro schon seit 1999 — im Portemonnaie aber erst 2002.":
    "Купюры и монеты пришли в 2002 году. Как безналичные деньги евро существовал уже с 1999 года — но в кошельке только с 2002.",
  "An wie viele Nachbarländer grenzt Deutschland?":
    "Со сколькими соседними странами граничит Германия?",
  "Sechs": "С шестью",
  "Sieben": "С семью",
  "Neun": "С девятью",
  "Elf": "С одиннадцатью",
  "Neun: Dänemark, Polen, Tschechien, Österreich, Schweiz, Frankreich, Luxemburg, Belgien und die Niederlande.":
    "С девятью: Дания, Польша, Чехия, Австрия, Швейцария, Франция, Люксембург, Бельгия и Нидерланды.",
  "Wer entscheidet über Auslandseinsätze der Bundeswehr?":
    "Кто решает о заграничных операциях бундесвера?",
  "Der Bundeskanzler allein": "Один федеральный канцлер",
  "Die NATO": "НАТО",
  "Die Bundeswehr ist eine Parlamentsarmee: Ohne Zustimmung des Bundestages gibt es keinen Auslandseinsatz.":
    "Бундесвер — парламентская армия: без согласия Бундестага заграничной операции не будет.",
  "Geografie, Städte und Symbole": "География, города и символы",
  "Mensch und Gesellschaft": "Человек и общество",
  "Wo Deutschland liegt, wie groß es ist und woran man es erkennt — Landkarte und Staatssymbole liefern eine Reihe sicherer Punkte im Test.":
    "Где Германия лежит, насколько велика и по чему её узнают — карта и государственные символы дают в тесте несколько надёжных очков.",
  "Die Eckdaten": "Основные данные",
  "Lage": "Положение",
  "In der Mitte Europas, mit **neun Nachbarländern**. Im Norden grenzt es an Nord- und Ostsee.":
    "В середине Европы, с **девятью соседними странами**. На севере выходит к Северному и Балтийскому морям.",
  "Einwohner": "Население",
  "Rund **84 Millionen** — der bevölkerungsreichste Staat der EU.":
    "Около **84 миллионов** — самое населённое государство ЕС.",
  "Hauptstadt": "Столица",
  "**Berlin**, zugleich die größte Stadt mit etwa 3,8 Millionen Einwohnern.":
    "**Берлин**, он же самый большой город, около 3,8 миллиона жителей.",
  "Größte Städte": "Крупнейшие города",
  "Nach Berlin folgen **Hamburg**, **München**, **Köln** und **Frankfurt am Main**.":
    "За Берлином идут **Гамбург**, **Мюнхен**, **Кёльн** и **Франкфурт-на-Майне**.",
  "Landschaft von Nord nach Süd": "Ландшафт с севера на юг",
  "Im Norden das flache **Norddeutsche Tiefland**, in der Mitte die **Mittelgebirge** wie Harz, Schwarzwald und Erzgebirge, im Süden das Alpenvorland und die **Alpen**. Der höchste Berg ist die **Zugspitze** mit 2.962 Metern in Bayern.":
    "На севере плоская **Северо-Германская низменность**, в середине **средневысотные горы** — Гарц, Шварцвальд, Рудные горы, на юге предгорья и **Альпы**. Самая высокая гора — **Цугшпитце**, 2962 метра, в Баварии.",
  "Der Rhein": "Рейн",
  "Der bekannteste Fluss, wichtige Wasserstraße von der Schweiz bis in die Niederlande.":
    "Самая известная река, важный водный путь от Швейцарии до Нидерландов.",
  "Die Elbe": "Эльба",
  "Fließt von Tschechien über Dresden und Hamburg in die Nordsee.":
    "Течёт из Чехии через Дрезден и Гамбург в Северное море.",
  "Die Donau": "Дунай",
  "Der einzige große Fluss, der nach Osten fließt — bis ins Schwarze Meer.":
    "Единственная большая река, текущая на восток — до Чёрного моря.",
  "Bodensee": "Боденское озеро",
  "Der größte See, im Dreiländereck mit Österreich und der Schweiz.":
    "Самое большое озеро, на стыке трёх стран с Австрией и Швейцарией.",
  "Die Staatssymbole": "Государственные символы",
  "Die **Flagge** ist **schwarz-rot-gold**, in dieser Reihenfolge von oben nach unten. Die Farben stehen seit dem 19. Jahrhundert für Einheit und Freiheit. Das Wappentier ist der **Bundesadler**.":
    "**Флаг** — **чёрно-красно-золотой**, именно в таком порядке сверху вниз. Эти цвета с XIX века означают единство и свободу. Геральдический зверь — **федеральный орёл**.",
  "Die Farbe heißt **Gold**, nicht Gelb — und die Reihenfolge ist von oben nach unten schwarz, rot, gold. Beide Details werden abgefragt.":
    "Цвет называется **золотым**, а не жёлтым, — и порядок сверху вниз: чёрный, красный, золотой. Спрашивают об обеих подробностях.",
  "Die Nationalhymne": "Государственный гимн",
  "Gesungen wird die **dritte Strophe** des Liedes der Deutschen von Hoffmann von Fallersleben, die mit **„Einigkeit und Recht und Freiheit“** beginnt. Nur diese Strophe ist Nationalhymne; die erste wird nicht gesungen.":
    "Поют **третью строфу** песни немцев Гофмана фон Фаллерслебена, ту, что начинается словами **«Единство, право и свобода»**. Гимном является только эта строфа; первую не поют.",
  "Berlin · Hamburg · München · Köln · Zugspitze · Rhein · Elbe · Donau · Bodensee · Bundesadler.":
    "Берлин · Гамбург · Мюнхен · Кёльн · Цугшпитце · Рейн · Эльба · Дунай · Боденское озеро · федеральный орёл.",
  "Rund 84 Millionen Einwohner · 16 Bundesländer · 9 Nachbarländer · Zugspitze 2.962 m · 3. Strophe als Hymne.":
    "Около 84 миллионов жителей · 16 федеральных земель · 9 соседних стран · Цугшпитце 2962 м · 3-я строфа как гимн.",
  "schwarz-rot-gold · Bundesadler · Norddeutsches Tiefland · Mittelgebirge · Alpenvorland.":
    "Чёрно-красно-золотой · федеральный орёл · Северо-Германская низменность · средневысотные горы · предгорья Альп.",
  "In einem Satz: Flach im Norden, hoch im Süden, schwarz-rot-gold auf der Flagge und die dritte Strophe in der Hymne.":
    "Одним предложением: плоско на севере, высоко на юге, чёрно-красно-золотое на флаге и третья строфа в гимне.",
  "Welche Farben hat die deutsche Flagge von oben nach unten?":
    "Какие цвета у немецкого флага сверху вниз?",
  "Schwarz, Rot, Gold": "Чёрный, красный, золотой",
  "Gold, Rot, Schwarz": "Золотой, красный, чёрный",
  "Schwarz, Gold, Rot": "Чёрный, золотой, красный",
  "Rot, Schwarz, Gold": "Красный, чёрный, золотой",
  "Schwarz oben, Rot in der Mitte, Gold unten. Die unterste Farbe heißt Gold, nicht Gelb.":
    "Чёрный сверху, красный посередине, золотой снизу. Нижний цвет называется золотым, а не жёлтым.",
  "Welche Strophe des Deutschlandlieds ist die Nationalhymne?":
    "Какая строфа песни немцев является государственным гимном?",
  "Die erste": "Первая",
  "Die zweite": "Вторая",
  "Die dritte": "Третья",
  "Alle drei": "Все три",
  "Die dritte Strophe: „Einigkeit und Recht und Freiheit“. Nur sie wird bei offiziellen Anlässen gesungen.":
    "Третья строфа: «Единство, право и свобода». Только её поют на официальных событиях.",
  "Wie heißt der höchste Berg Deutschlands?": "Как называется самая высокая гора Германии?",
  "Der Brocken": "Броккен",
  "Die Zugspitze": "Цугшпитце",
  "Der Feldberg": "Фельдберг",
  "Der Watzmann": "Ватцман",
  "Die Zugspitze in Bayern, 2.962 Meter. Der Brocken im Harz ist der höchste Berg Norddeutschlands.":
    "Цугшпитце в Баварии, 2962 метра. Броккен в Гарце — самая высокая гора северной Германии.",
  "Religion und Weltanschauung": "Религия и мировоззрение",
  "In Deutschland herrscht **Religionsfreiheit**: Jeder darf glauben, was er möchte, die Religion wechseln oder gar keiner Gemeinschaft angehören. Das steht in Artikel 4 des Grundgesetzes.":
    "В Германии действует **свобода вероисповедания**: каждый вправе верить во что хочет, менять религию или не принадлежать ни к какой общине. Это стоит в статье 4 Основного закона.",
  "Was Religionsfreiheit bedeutet": "Что значит свобода вероисповедания",
  "Frei glauben": "Свободно верить",
  "Jede Religion darf ausgeübt werden, solange dabei keine Gesetze gebrochen werden.":
    "Любую религию можно исповедовать, пока при этом не нарушаются законы.",
  "Frei nicht glauben": "Свободно не верить",
  "Niemand muss einer Religion angehören. Auch der Austritt ist jederzeit möglich.":
    "Никто не обязан принадлежать к религии. Выйти из общины тоже можно в любое время.",
  "Kein Zwang": "Никакого принуждения",
  "Niemand darf zu einem Glauben gedrängt werden — auch nicht in der eigenen Familie.":
    "Никого нельзя подталкивать к вере — в том числе в собственной семье.",
  "Keine Staatsreligion": "Никакой государственной религии",
  "Der Staat ist weltanschaulich neutral und bevorzugt keine Gemeinschaft.":
    "Государство мировоззренчески нейтрально и ни одной общине не отдаёт предпочтения.",
  "Religionsfreiheit hebt keine Gesetze auf. Wenn religiöse Vorstellungen und staatliches Recht in Konflikt geraten — etwa bei Zwangsheirat, Gewalt in der Familie oder der Schulpflicht — gilt das **staatliche Recht**. Danach wird im Test gezielt gefragt.":
    "Свобода вероисповедания не отменяет законов. Если религиозные представления и право государства сталкиваются — например при принудительном браке, насилии в семье или обязанности ходить в школу — действует **право государства**. Об этом в тесте спрашивают прицельно.",
  "Religionen in Deutschland": "Религии в Германии",
  "Die größten Gruppen sind die **katholische** und die **evangelische** Kirche. Etwa die Hälfte der Bevölkerung gehört heute keiner Religionsgemeinschaft an. Der **Islam** ist die größte nichtchristliche Religion; daneben gibt es jüdische Gemeinden, Buddhisten, Hindus und viele weitere.":
    "Самые крупные группы — **католическая** и **евангелическая** церкви. Около половины населения сегодня не принадлежит ни к какой религиозной общине. **Ислам** — крупнейшая нехристианская религия; рядом с ним есть еврейские общины, буддисты, индуисты и многие другие.",
  "Religion im Alltag": "Религия в повседневности",
  "Kirchensteuer": "Церковный налог",
  "Mitglieder der Kirchen zahlen sie über das Finanzamt. Wer austritt, zahlt sie nicht mehr.":
    "Члены церквей платят его через налоговое ведомство. Кто вышел, тот больше не платит.",
  "Religionsunterricht": "Уроки религии",
  "An staatlichen Schulen ein reguläres Fach. Man kann sich abmelden und stattdessen Ethik belegen.":
    "В государственных школах это обычный предмет. От него можно отказаться и взять вместо него этику.",
  "Feiertage": "Праздники",
  "Viele gesetzliche Feiertage sind christlichen Ursprungs — sie gelten für alle, unabhängig vom Glauben.":
    "Многие установленные законом праздники христианского происхождения — и действуют они для всех, независимо от веры.",
  "Kopftuch und Symbole": "Платок и символы",
  "Religiöse Kleidung ist im Alltag grundsätzlich erlaubt. Für bestimmte Staatsämter gibt es Sonderregeln.":
    "Религиозная одежда в повседневности по общему правилу разрешена. Для отдельных государственных должностей есть особые правила.",
  "Artikel 4 Grundgesetz · katholische und evangelische Kirche · Zentralrat der Juden · Ethikunterricht.":
    "Статья 4 Основного закона · католическая и евангелическая церкви · Центральный совет евреев · уроки этики.",
  "Rund die Hälfte ohne Religionszugehörigkeit · zwei große christliche Kirchen · Islam als größte nichtchristliche Religion.":
    "Около половины без религиозной принадлежности · две большие христианские церкви · ислам как крупнейшая нехристианская религия.",
  "Religionsfreiheit · weltanschauliche Neutralität · Kirchensteuer · Kirchenaustritt · Toleranz.":
    "Свобода вероисповедания · мировоззренческая нейтральность · церковный налог · выход из церкви · терпимость.",
  "In einem Satz: Glauben ist frei, Nichtglauben auch — aber kein Glaube steht über dem Gesetz.":
    "Одним предложением: верить свободно, не верить тоже — но никакая вера не стоит выше закона.",
  "Was bedeutet Religionsfreiheit in Deutschland?":
    "Что означает свобода вероисповедания в Германии?",
  "Jeder muss einer Religion angehören": "Каждый обязан принадлежать к какой-нибудь религии",
  "Jeder darf glauben, was er möchte, oder gar nichts glauben":
    "Каждый вправе верить во что хочет или не верить вовсе",
  "Nur christliche Religionen sind erlaubt": "Разрешены только христианские религии",
  "Religion ist Privatsache und in der Öffentlichkeit verboten":
    "Религия — частное дело и на людях запрещена",
  "Artikel 4 schützt beides: den Glauben und die Freiheit, keiner Religion anzugehören.":
    "Статья 4 защищает и то и другое: веру и свободу не принадлежать ни к какой религии.",
  "Eine religiöse Vorschrift widerspricht einem deutschen Gesetz. Was gilt?":
    "Религиозное предписание противоречит немецкому закону. Что действует?",
  "Die religiöse Vorschrift": "Религиозное предписание",
  "Das deutsche Gesetz": "Немецкий закон",
  "Die Entscheidung der Familie": "Решение семьи",
  "Das kommt auf die Religion an": "Это зависит от религии",
  "Das staatliche Recht gilt für alle gleichermaßen. Religionsfreiheit erlaubt den Glauben, nicht den Rechtsbruch.":
    "Право государства действует для всех одинаково. Свобода вероисповедания позволяет верить, а не нарушать право.",
  "Muss ein Kind an staatlichen Schulen am Religionsunterricht teilnehmen?":
    "Обязан ли ребёнок в государственной школе посещать уроки религии?",
  "Ja, das ist Pflicht": "Да, это обязанность",
  "Nein, man kann sich abmelden und meist Ethik belegen":
    "Нет, можно отказаться и обычно взять этику",
  "Nur bei christlichen Familien": "Только в христианских семьях",
  "Nur in der Grundschule": "Только в начальной школе",
  "Religionsunterricht ist ein reguläres Fach, aber niemand ist dazu verpflichtet. Als Alternative gibt es meist Ethik oder Philosophie.":
    "Уроки религии — обычный предмет, но обязанности их посещать нет ни у кого. Вместо них обычно есть этика или философия.",
  "Familie und Zusammenleben": "Семья и совместная жизнь",
  "Wie Menschen in Deutschland zusammenleben, ist rechtlich klar geregelt — und diese Regeln gehören zu den wichtigsten Testinhalten überhaupt, weil sie den Alltag jedes Einzelnen berühren.":
    "То, как люди в Германии живут вместе, урегулировано правом ясно — и эти правила относятся к самому важному в тесте, потому что касаются повседневности каждого.",
  "Gleichberechtigung": "Равноправие",
  "**Männer und Frauen sind gleichberechtigt** (Artikel 3 Grundgesetz). Das gilt im Beruf, im Recht und in der Familie. Eine Frau entscheidet selbst über ihre Arbeit, ihr Geld, ihre Kleidung und ihre Beziehungen — dafür braucht sie niemandes Erlaubnis.":
    "**Мужчины и женщины равноправны** (статья 3 Основного закона). Это действует на работе, в праве и в семье. Женщина сама решает о своей работе, своих деньгах, своей одежде и своих отношениях — ничьего разрешения ей для этого не нужно.",
  "**Gewalt in der Familie ist eine Straftat** — auch zwischen Eheleuten, auch gegenüber Kindern. Die Polizei kann den Gewalttätigen aus der Wohnung weisen. Die Frauenhäuser und das Hilfetelefon helfen rund um die Uhr und vertraulich.":
    "**Насилие в семье — уголовное преступление**, в том числе между супругами и в отношении детей. Полиция может выставить применившего насилие из квартиры. Убежища для женщин и телефон помощи работают круглые сутки и не разглашают обращений.",
  "Ehe und Partnerschaft": "Брак и партнёрство",
  "Freiwillig": "Добровольно",
  "Niemand darf zur Ehe gezwungen werden. **Zwangsheirat ist strafbar.**":
    "Никого нельзя принудить к браку. **Принуждение к браку наказуемо.**",
  "Ab 18": "С 18 лет",
  "Heiraten darf man mit der Volljährigkeit. Kinderehen werden in Deutschland nicht anerkannt.":
    "Вступать в брак можно с наступлением совершеннолетия. Детские браки в Германии не признают.",
  "Nur eine Ehe": "Только один брак",
  "Mehrehe ist verboten. Wer verheiratet ist, kann nicht zusätzlich heiraten.":
    "Многобрачие запрещено. Кто состоит в браке, не может вступить ещё в один.",
  "Gleichgeschlechtlich": "Однополый брак",
  "Seit **2017** dürfen auch gleichgeschlechtliche Paare heiraten.":
    "С **2017 года** вступать в брак могут и однополые пары.",
  "Scheidung": "Развод",
  "Eine Ehe kann geschieden werden; in der Regel nach einem **Trennungsjahr**. Über die Scheidung entscheidet ein **Familiengericht**. Geregelt werden dabei auch Unterhalt und das Sorgerecht für gemeinsame Kinder.":
    "Брак можно расторгнуть; по общему правилу после **года раздельной жизни**. О разводе решает **суд по семейным делам**. При этом улаживают и содержание, и родительские права на общих детей.",
  "Kinder und Eltern": "Дети и родители",
  "Elternrecht und -pflicht": "Право и обязанность родителей",
  "Eltern erziehen ihre Kinder — der Staat greift nur ein, wenn das Kindeswohl gefährdet ist.":
    "Детей воспитывают родители — государство вмешивается только тогда, когда благополучию ребёнка грозит опасность.",
  "Gewaltfreie Erziehung": "Воспитание без насилия",
  "Kinder haben ein **Recht auf gewaltfreie Erziehung**. Körperliche Strafen sind verboten.":
    "У детей есть **право на воспитание без насилия**. Телесные наказания запрещены.",
  "Schulpflicht": "Обязанность ходить в школу",
  "Kinder müssen zur Schule gehen. Das gilt für Mädchen genauso wie für Jungen.":
    "Дети обязаны ходить в школу. Это касается девочек ровно так же, как мальчиков.",
  "Jugendamt": "Ведомство по делам молодёжи",
  "Es hilft Familien in schwierigen Lagen und schützt Kinder vor Vernachlässigung und Gewalt.":
    "Оно помогает семьям в трудном положении и защищает детей от небрежения и насилия.",
  "Vielfalt der Lebensformen": "Разнообразие форм жизни",
  "Familie ist heute vielfältig: Ehepaare mit Kindern, Alleinerziehende, unverheiratete Paare, Patchwork-Familien, gleichgeschlechtliche Paare. Alle diese Formen sind gesellschaftlich anerkannt.":
    "Семья сегодня разная: супруги с детьми, одинокие родители, пары без брака, семьи, собранные из двух прежних, однополые пары. Все эти формы обществом признаны.",
  "Standesamt · Familiengericht · Jugendamt · Frauenhaus · Hilfetelefon Gewalt gegen Frauen.":
    "Standesamt, отдел записи актов · суд по семейным делам · ведомство по делам молодёжи · убежище для женщин · телефон помощи при насилии над женщинами.",
  "Heiraten ab 18 · Trennungsjahr vor der Scheidung · gleichgeschlechtliche Ehe seit 2017 · Artikel 3 Gleichberechtigung.":
    "Брак с 18 лет · год раздельной жизни перед разводом · однополый брак с 2017 года · статья 3 о равноправии.",
  "Gleichberechtigung · Zwangsheirat · gewaltfreie Erziehung · Sorgerecht · Unterhalt · Kindeswohl.":
    "Равноправие · принуждение к браку · воспитание без насилия · родительские права · содержание · благополучие ребёнка.",
  "In einem Satz: Zusammenleben ist frei gestaltbar, aber Zwang und Gewalt sind es nie — und das gilt innerhalb der Familie genau wie außerhalb.":
    "Одним предложением: совместную жизнь можно устраивать свободно, но принуждение и насилие свободой не бывают никогда — и в семье это так же, как вне её.",
  "Ein Mann verbietet seiner Frau, arbeiten zu gehen. Was gilt in Deutschland?":
    "Мужчина запрещает жене ходить на работу. Как это в Германии?",
  "Er darf das als Familienoberhaupt": "Он вправе это сделать как глава семьи",
  "Sie entscheidet selbst, denn Männer und Frauen sind gleichberechtigt":
    "Она решает сама, ведь мужчины и женщины равноправны",
  "Nur mit Zustimmung der Familie": "Только с согласия семьи",
  "Das Standesamt entscheidet": "Решает отдел записи актов",
  "Artikel 3 des Grundgesetzes: gleichberechtigt. Über Arbeit, Geld und Lebensweg entscheidet jede Person selbst.":
    "Статья 3 Основного закона: равноправны. О работе, деньгах и жизненном пути каждый решает сам.",
  "Wie ist körperliche Bestrafung von Kindern in Deutschland geregelt?":
    "Как в Германии урегулировано телесное наказание детей?",
  "Erlaubt, wenn es die Eltern für nötig halten": "Разрешено, если родители считают его нужным",
  "Verboten — Kinder haben ein Recht auf gewaltfreie Erziehung":
    "Запрещено — у детей есть право на воспитание без насилия",
  "Erlaubt bis zum 10. Lebensjahr": "Разрешено до десятилетнего возраста",
  "Nur Lehrern verboten": "Запрещено только учителям",
  "Seit 2000 steht das Recht auf gewaltfreie Erziehung im Gesetz. Schläge sind keine Erziehungsmethode, sondern strafbar.":
    "С 2000 года право на воспитание без насилия стоит в законе. Побои — не способ воспитания, а наказуемое деяние.",
  "Was gilt für die Ehe in Deutschland?": "Что действует для брака в Германии?",
  "Man kann mit mehreren Personen gleichzeitig verheiratet sein":
    "Можно состоять в браке с несколькими людьми одновременно",
  "Die Ehe muss freiwillig geschlossen werden; Zwangsheirat ist strafbar":
    "Брак должен заключаться добровольно; принуждение к браку наказуемо",
  "Die Eltern wählen den Ehepartner aus": "Супруга выбирают родители",
  "Eine Scheidung ist nicht möglich": "Развод невозможен",
  "Freiwilligkeit ist Voraussetzung. Zwangsheirat ist eine Straftat, Mehrehe verboten, und geschieden werden kann jede Ehe.":
    "Добровольность — условие. Принуждение к браку есть преступление, многобрачие запрещено, а расторгнуть можно любой брак.",
  "Bildung und Ausbildung": "Школа и профессиональное обучение",
  "Bildung ist **Ländersache** — deshalb unterscheiden sich Schulformen, Lehrpläne und Ferien von Bundesland zu Bundesland. Gemeinsam ist allen die **Schulpflicht**.":
    "Образование — **дело земель**, и потому виды школ, учебные планы и каникулы в каждой земле свои. Общая для всех — **обязанность ходить в школу**.",
  "Die Schulpflicht": "Обязанность ходить в школу",
  "Alle Kinder müssen zur Schule gehen, in der Regel ab dem sechsten Lebensjahr und für mindestens neun Jahre. Sie gilt für **Mädchen und Jungen gleichermaßen** — auch für den Sport- und Schwimmunterricht. Eltern können sie nicht durch Unterricht zu Hause ersetzen.":
    "Все дети обязаны ходить в школу, по общему правилу с шести лет и не меньше девяти лет. Обязанность эта касается **девочек и мальчиков одинаково** — в том числе уроков физкультуры и плавания. Заменить её домашним обучением родители не могут.",
  "Häufige Testfrage: Ein Vater will seine Tochter nicht am Schwimmunterricht teilnehmen lassen. Die Schulpflicht gilt trotzdem — die Schule sucht nach praktischen Lösungen, aber das Kind bleibt nicht einfach weg.":
    "Частый вопрос теста: отец не хочет пускать дочь на уроки плавания. Обязанность ходить в школу действует всё равно — школа ищет практические решения, но ребёнок просто так не остаётся дома.",
  "Der Weg durch das Schulsystem": "Путь через школьную систему",
  "Kita": "Детский сад",
  "Kein Zwang, aber ein Rechtsanspruch ab dem ersten Geburtstag. Gut für die Sprache.":
    "Не обязанность, но право, возникающее с первого дня рождения. Полезно для языка.",
  "Grundschule": "Начальная школа",
  "Meist vier Jahre, in einigen Ländern sechs.": "Обычно четыре года, в некоторых землях шесть.",
  "Weiterführende Schule": "Средняя школа",
  "Hauptschule, Realschule, Gymnasium oder Gesamtschule — je nach Land unterschiedlich benannt.":
    "Hauptschule, Realschule, Gymnasium или Gesamtschule — в каждой земле называются по-своему.",
  "Abschlüsse": "Аттестаты",
  "Hauptschulabschluss, Mittlere Reife oder **Abitur**. Das Abitur berechtigt zum Studium.":
    "Hauptschulabschluss, Mittlere Reife или **Abitur**. Abitur даёт право поступать в вуз.",
  "Die duale Ausbildung": "Двойное профессиональное обучение",
  "Eine deutsche Besonderheit: Die Berufsausbildung findet an **zwei Orten gleichzeitig** statt — im **Betrieb** und in der **Berufsschule**. Sie dauert meist zwei bis dreieinhalb Jahre, und die Auszubildenden bekommen von Anfang an eine Vergütung. Am Ende steht eine Prüfung vor der Industrie- und Handelskammer oder der Handwerkskammer.":
    "Немецкая особенность: обучение профессии идёт **в двух местах сразу** — на **предприятии** и в **профессиональной школе**. Длится оно обычно от двух до трёх с половиной лет, и ученик с самого начала получает вознаграждение. В конце сдают экзамен в торгово-промышленной или ремесленной палате.",
  "Studium und Weiterbildung": "Учёба в вузе и повышение квалификации",
  "Universität": "Университет",
  "Wissenschaftlich ausgerichtet, mit Promotionsrecht.":
    "Обращён к науке, с правом присуждать докторскую степень.",
  "Fachhochschule": "Специальная высшая школа",
  "Praxisnäher, oft mit Pflichtpraktika in Unternehmen.":
    "Ближе к практике, часто с обязательной практикой на предприятиях.",
  "BAföG": "BAföG",
  "Staatliche Unterstützung für Studierende und Schüler, deren Eltern das Studium nicht finanzieren können.":
    "Государственная поддержка студентам и школьникам, чьи родители не в состоянии оплатить учёбу.",
  "Volkshochschule": "Народный университет",
  "Günstige Kurse für alle — Sprachen, Computer, Integrationskurse, auch der Test „Leben in Deutschland“.":
    "Недорогие курсы для всех — языки, компьютер, интеграционные курсы, а также тест «Жизнь в Германии».",
  "Abschlüsse aus dem Ausland": "Дипломы, полученные за границей",
  "Wer im Ausland einen Beruf gelernt hat, kann seinen Abschluss **anerkennen** lassen. Für viele Berufe — etwa in der Pflege oder im Handwerk — ist das der Schlüssel zum Arbeitsmarkt. Beratungsstellen helfen beim Verfahren.":
    "Кто выучился профессии за границей, может добиться **признания** своего диплома. Для многих занятий — например в уходе за больными или в ремесле — это ключ к рынку труда. В прохождении процедуры помогают консультационные пункты.",
  "Grundschule · Gymnasium · Berufsschule · Industrie- und Handelskammer · Handwerkskammer · Volkshochschule · BAföG.":
    "Начальная школа · гимназия · профессиональная школа · торгово-промышленная палата · ремесленная палата · народный университет · BAföG.",
  "Schulpflicht ab 6 Jahren, mindestens 9 Jahre · duale Ausbildung 2 bis 3,5 Jahre · Kita-Anspruch ab 1 Jahr.":
    "Обязанность ходить в школу с 6 лет, не меньше 9 лет · двойное обучение от 2 до 3,5 лет · право на детский сад с 1 года.",
  "Ländersache · Schulpflicht · duale Ausbildung · Abitur · Mittlere Reife · Anerkennung ausländischer Abschlüsse.":
    "Дело земель · обязанность ходить в школу · двойное обучение · Abitur · Mittlere Reife · признание иностранных дипломов.",
  "In einem Satz: Schule ist Pflicht und Ländersache, und die duale Ausbildung verbindet Betrieb und Berufsschule — ein Modell, um das Deutschland beneidet wird.":
    "Одним предложением: школа обязательна и находится в ведении земель, а двойное обучение связывает предприятие с профессиональной школой — образец, которому Германии завидуют.",
  "Was bedeutet „duale Ausbildung“?": "Что означает «двойное обучение»?",
  "Zwei Berufe gleichzeitig lernen": "Учиться двум профессиям сразу",
  "Ausbildung im Betrieb und in der Berufsschule zugleich":
    "Обучение на предприятии и в профессиональной школе одновременно",
  "Eine Ausbildung mit doppelter Dauer": "Обучение вдвое большей длительности",
  "Ausbildung in zwei Bundesländern": "Обучение в двух федеральных землях",
  "Zwei Lernorte: der Betrieb für die Praxis, die Berufsschule für die Theorie. Bezahlt wird von Anfang an.":
    "Два места учёбы: предприятие для практики, профессиональная школа для теории. Платят с самого начала.",
  "Gilt die Schulpflicht in Deutschland auch für Mädchen?":
    "Действует ли обязанность ходить в школу в Германии и для девочек?",
  "Ja, für alle Kinder gleichermaßen": "Да, для всех детей одинаково",
  "Nein, Eltern entscheiden das": "Нет, это решают родители",
  "Nur bis zur vierten Klasse": "Только до четвёртого класса",
  "Nur für deutsche Staatsangehörige": "Только для граждан Германии",
  "Die Schulpflicht gilt für alle Kinder, unabhängig von Geschlecht, Herkunft oder Religion — einschließlich Sport- und Schwimmunterricht.":
    "Обязанность ходить в школу действует для всех детей, независимо от пола, происхождения и религии, — включая уроки физкультуры и плавания.",
  "Welcher Abschluss berechtigt in der Regel zum Studium an einer Universität?":
    "Какой аттестат по общему правилу даёт право учиться в университете?",
  "Der Hauptschulabschluss": "Hauptschulabschluss",
  "Die Mittlere Reife": "Mittlere Reife",
  "Das Abitur": "Abitur",
  "Der Gesellenbrief": "Свидетельство подмастерья",
  "Das Abitur ist die allgemeine Hochschulreife. Über Fachhochschulreife und berufliche Qualifikationen gibt es weitere Wege.":
    "Abitur — это общая зрелость для высшей школы. Через Fachhochschulreife и профессиональную квалификацию есть и другие пути.",
  "Arbeit und Beruf": "Работа и профессия",
  "Das deutsche Arbeitsrecht schützt Beschäftigte — und wer seine Rechte kennt, gerät seltener in Schwierigkeiten. Im Test geht es um die Grundzüge: Vertrag, Kündigung, Mitbestimmung, Lohn.":
    "Немецкое трудовое право защищает работающих — и кто знает свои права, реже попадает в беду. В тесте речь об основах: договор, увольнение, участие в решениях, оплата.",
  "Der Arbeitsvertrag": "Трудовой договор",
  "Er regelt Aufgaben, Arbeitszeit, Lohn und Urlaub. **Lass dir den Vertrag immer schriftlich geben** und unterschreibe nichts, was du nicht verstanden hast. Schwarzarbeit — Arbeit ohne Anmeldung und ohne Sozialabgaben — ist strafbar und lässt dich ohne jeden Schutz zurück.":
    "Он определяет обязанности, рабочее время, оплату и отпуск. **Всегда бери договор в письменном виде** и не подписывай того, чего не понял. Работа втёмную — без оформления и без социальных отчислений — наказуема и оставляет тебя вовсе без защиты.",
  "Deine wichtigsten Rechte": "Твои важнейшие права",
  "Mindestlohn": "Минимальная оплата",
  "Es gibt einen gesetzlichen Mindestlohn pro Stunde, der regelmäßig angepasst wird. Weniger darf niemand zahlen.":
    "Есть установленная законом минимальная оплата за час, её регулярно пересматривают. Меньше платить не вправе никто.",
  "Urlaub": "Отпуск",
  "Mindestens **20 Tage** im Jahr bei einer Fünf-Tage-Woche. Viele Verträge geben mehr.":
    "Не меньше **20 дней** в году при пятидневной неделе. Многие договоры дают больше.",
  "Lohnfortzahlung": "Сохранение оплаты",
  "Bei Krankheit zahlt der Arbeitgeber bis zu **sechs Wochen** weiter. Danach übernimmt die Krankenkasse.":
    "При болезни работодатель платит дальше до **шести недель**. Потом платит больничная касса.",
  "Kündigungsschutz": "Защита от увольнения",
  "Kündigungen brauchen einen Grund und müssen **schriftlich** erfolgen. Fristen sind einzuhalten.":
    "Увольнению нужно основание, и оформляться оно должно **письменно**. Сроки надо соблюдать.",
  "Wer sich gegen eine Kündigung wehren will, hat nur **drei Wochen** Zeit, um beim Arbeitsgericht Klage zu erheben. Diese Frist ist kurz und wird oft verpasst.":
    "У того, кто хочет оспорить увольнение, есть лишь **три недели** на подачу иска в суд по трудовым спорам. Срок короткий, и его часто пропускают.",
  "Mitbestimmung": "Участие в решениях",
  "Betriebsrat": "Совет предприятия",
  "Von der Belegschaft gewählt. Er redet bei Arbeitszeiten, Einstellungen und Kündigungen mit.":
    "Избирается коллективом. Он участвует в решениях о рабочем времени, приёме на работу и увольнениях.",
  "Gewerkschaften": "Профсоюзы",
  "Sie vertreten Arbeitnehmer und handeln **Tarifverträge** über Löhne und Arbeitszeiten aus.":
    "Они представляют работников и договариваются о **тарифных соглашениях** по оплате и рабочему времени.",
  "Streikrecht": "Право на забастовку",
  "Streiks sind erlaubt, wenn eine Gewerkschaft dazu aufruft. Niemand darf deswegen gekündigt werden.":
    "Забастовки разрешены, если к ним призывает профсоюз. Уволить за это никого нельзя.",
  "Arbeitgeberverbände": "Объединения работодателей",
  "Sie sind die Gegenseite in den Tarifverhandlungen.":
    "Они — вторая сторона в переговорах о тарифных соглашениях.",
  "Vom Brutto zum Netto": "От брутто к нетто",
  "Vom **Bruttolohn** gehen **Lohnsteuer** und **Sozialabgaben** ab; was übrig bleibt, ist das **Netto** auf dem Konto. Die Steuerklasse hängt von der Lebenssituation ab. Einmal im Jahr kann man eine **Steuererklärung** abgeben — häufig gibt es Geld zurück.":
    "С **зарплаты брутто** уходят **подоходный налог** и **социальные отчисления**; что остаётся, приходит на счёт как **нетто**. Налоговый класс зависит от жизненного положения. Раз в год можно подать **налоговую декларацию** — часто деньги возвращают.",
  "Betriebsrat · Gewerkschaft · Arbeitsgericht · Agentur für Arbeit · Finanzamt · Tarifvertrag.":
    "Совет предприятия · профсоюз · суд по трудовым спорам · Agentur für Arbeit · налоговое ведомство · тарифное соглашение.",
  "Mindestens 20 Urlaubstage · 6 Wochen Lohnfortzahlung · 3 Wochen Frist für die Kündigungsschutzklage.":
    "Не меньше 20 дней отпуска · 6 недель сохранения оплаты · 3 недели на иск против увольнения.",
  "Arbeitsvertrag · Mindestlohn · Kündigungsschutz · Schwarzarbeit · brutto und netto · Steuerklasse · Streikrecht.":
    "Трудовой договор · минимальная оплата · защита от увольнения · работа втёмную · брутто и нетто · налоговый класс · право на забастовку.",
  "In einem Satz: Vertrag schriftlich, Kündigung schriftlich, drei Wochen zum Klagen — und ohne Anmeldung gibt es keinen Schutz.":
    "Одним предложением: договор письменно, увольнение письменно, три недели на иск — а без оформления нет никакой защиты.",
  "Wie lange zahlt der Arbeitgeber bei Krankheit den Lohn weiter?":
    "Как долго работодатель платит зарплату при болезни?",
  "Zwei Wochen": "Две недели",
  "Sechs Wochen": "Шесть недель",
  "Drei Monate": "Три месяца",
  "Gar nicht": "Вовсе не платит",
  "Sechs Wochen Lohnfortzahlung. Danach zahlt die Krankenkasse Krankengeld.":
    "Шесть недель сохранения оплаты. Дальше больничная касса платит пособие по болезни.",
  "Was ist ein Betriebsrat?": "Что такое совет предприятия?",
  "Die Geschäftsführung eines Betriebs": "Руководство предприятия",
  "Eine von den Beschäftigten gewählte Vertretung": "Представительство, избранное работниками",
  "Eine Behörde für Betriebsprüfungen": "Ведомство по проверкам предприятий",
  "Der Zusammenschluss mehrerer Firmen": "Объединение нескольких фирм",
  "Die Belegschaft wählt ihn. Er vertritt ihre Interessen gegenüber dem Arbeitgeber und hat bei vielen Entscheidungen ein Mitspracherecht.":
    "Его избирает коллектив. Он представляет интересы работников перед работодателем и во многих решениях имеет право голоса.",
  "Du wurdest gekündigt und hältst das für unrechtmäßig. Wie lange hast du Zeit für eine Klage?":
    "Тебя уволили, и ты считаешь это незаконным. Сколько времени есть на иск?",
  "Drei Wochen": "Три недели",
  "Ein Jahr": "Год",
  "Unbegrenzt": "Без ограничения",
  "Drei Wochen ab Zugang der Kündigung. Danach gilt die Kündigung in aller Regel als wirksam.":
    "Три недели с получения уведомления об увольнении. После этого увольнение по общему правилу считается действительным.",
  "Wohnen und Alltag": "Жильё и повседневность",
  "Der deutsche Alltag hat geschriebene und ungeschriebene Regeln. Die geschriebenen kommen im Test vor; die ungeschriebenen ersparen Ärger mit den Nachbarn.":
    "У немецкой повседневности есть правила писаные и неписаные. Писаные попадаются в тесте; неписаные избавляют от ссор с соседями.",
  "Die Wohnung": "Квартира",
  "Mietvertrag": "Договор найма",
  "Schriftlich. Er regelt Miete, Nebenkosten, Kündigungsfristen und was in der Wohnung erlaubt ist.":
    "В письменном виде. Он определяет плату, дополнительные расходы, сроки расторжения и то, что в квартире позволено.",
  "Kaution": "Залог",
  "Höchstens **drei Monatsmieten**. Du bekommst sie zurück, wenn die Wohnung ordentlich übergeben wird.":
    "Самое большее **три месячные платы**. Их возвращают, если квартиру сдают в порядке.",
  "Nebenkosten": "Дополнительные расходы",
  "Heizung, Wasser, Müll. Einmal im Jahr wird abgerechnet — mit Nachzahlung oder Guthaben.":
    "Отопление, вода, вывоз мусора. Раз в год их рассчитывают — с доплатой или с возвратом.",
  "Mieterschutz": "Защита нанимателя",
  "Der Vermieter darf nicht einfach kündigen und nicht ohne Ankündigung die Wohnung betreten.":
    "Наймодатель не вправе просто так расторгнуть договор и не вправе войти в квартиру без предупреждения.",
  "Innerhalb von zwei Wochen nach dem Umzug musst du dich beim **Einwohnermeldeamt anmelden**. Diese **Meldepflicht** ist eine typische Testfrage — und wer sie versäumt, riskiert ein Bußgeld.":
    "В течение двух недель после переезда нужно **зарегистрироваться в Einwohnermeldeamt**, бюро учёта жителей. Эта **обязанность регистрации** — типичный вопрос теста, и кто её пропустит, рискует штрафом.",
  "Ruhe und Rücksicht": "Тишина и внимание к другим",
  "Zwischen **22 und 6 Uhr** gilt **Nachtruhe**, ebenso meist mittags und den ganzen **Sonntag**. Laute Musik, Bohren oder Waschmaschinen sind dann tabu. **Mülltrennung** ist Pflicht: Papier, Verpackungen, Bioabfall, Restmüll und Glas nach Farben. Auf Flaschen liegt oft **Pfand**, das man im Laden zurückbekommt.":
    "С **22 до 6 часов** действует **ночной покой**, обычно также в обеденное время и всё **воскресенье**. Громкая музыка, сверление и стиральная машина в это время под запретом. **Разделение мусора** обязательно: бумага, упаковка, пищевые отходы, остальной мусор и стекло по цветам. На бутылках часто лежит **залог**, который возвращают в магазине.",
  "Behörden und Papiere": "Ведомства и бумаги",
  "Bürgeramt": "Bürgeramt",
  "An- und Ummeldung, Ausweis, Führungszeugnis.":
    "Регистрация и её изменение, удостоверение личности, справка о судимости.",
  "Ausländerbehörde": "Ведомство по делам иностранцев",
  "Aufenthaltstitel, Verlängerungen, Einbürgerung.":
    "Вид на жительство, его продление, получение гражданства.",
  "Finanzamt": "Налоговое ведомство",
  "Steuer-Identifikationsnummer und Steuererklärung.":
    "Налоговый идентификационный номер и налоговая декларация.",
  "Termine": "Приёмные часы по записи",
  "Fast überall nötig und oft Wochen im Voraus zu buchen. Pünktlichkeit wird erwartet.":
    "Нужны почти везде, и записываться часто приходится за недели вперёд. Приходить вовремя тут ожидают.",
  "Unterwegs": "В дороге",
  "Im Nahverkehr braucht man **vor dem Einsteigen** ein gültiges Ticket; Kontrollen sind unangekündigt und Schwarzfahren kostet. Fahrräder gehören auf den Radweg, nicht auf den Gehweg. Wer Auto fährt, braucht einen in Deutschland gültigen **Führerschein** — ausländische Führerscheine müssen je nach Herkunftsland nach einer Frist umgeschrieben werden.":
    "В городском транспорте действующий билет нужен **до посадки**; проверки бывают без предупреждения, а безбилетный проезд стоит денег. Велосипеду место на велодорожке, а не на тротуаре. Кто садится за руль, тому нужны действительные в Германии **водительские права** — иностранные права, смотря по стране, через определённый срок надо переоформить.",
  "Einwohnermeldeamt · Bürgeramt · Ausländerbehörde · Mieterverein · Verbraucherzentrale.":
    "Einwohnermeldeamt · Bürgeramt · ведомство по делам иностранцев · общество нанимателей жилья · центр защиты потребителей.",
  "Anmeldung innerhalb von 2 Wochen · Kaution höchstens 3 Monatsmieten · Nachtruhe 22 bis 6 Uhr.":
    "Регистрация в течение 2 недель · залог самое большее 3 месячные платы · ночной покой с 22 до 6 часов.",
  "Meldepflicht · Kaution · Nebenkosten · Nachtruhe · Mülltrennung · Pfand · Kündigungsfrist.":
    "Обязанность регистрации · залог · дополнительные расходы · ночной покой · разделение мусора · залог за тару · срок расторжения.",
  "In einem Satz: Anmelden, Müll trennen, nach 22 Uhr leise sein und Termine einhalten — damit ist der deutsche Alltag zur Hälfte gelernt.":
    "Одним предложением: зарегистрироваться, разделять мусор, после 22 часов вести себя тихо и приходить вовремя — и немецкая повседневность выучена наполовину.",
  "Du ziehst in eine neue Wohnung. Was musst du tun?":
    "Ты переезжаешь в новую квартиру. Что нужно сделать?",
  "Nichts, das macht der Vermieter": "Ничего, это делает наймодатель",
  "Dich innerhalb von zwei Wochen beim Einwohnermeldeamt anmelden":
    "В течение двух недель зарегистрироваться в Einwohnermeldeamt",
  "Dich beim Finanzamt anmelden": "Зарегистрироваться в налоговом ведомстве",
  "Die Nachbarn informieren": "Оповестить соседей",
  "Es gilt die Meldepflicht: Anmeldung beim Einwohnermeldeamt oder Bürgeramt innerhalb von zwei Wochen.":
    "Действует обязанность регистрации: заявиться в Einwohnermeldeamt или Bürgeramt в течение двух недель.",
  "Wie hoch darf die Mietkaution höchstens sein?":
    "Каким самое большее может быть залог за квартиру?",
  "Eine Monatsmiete": "Одна месячная плата",
  "Drei Monatsmieten": "Три месячные платы",
  "Sechs Monatsmieten": "Шесть месячных плат",
  "Das ist frei verhandelbar": "Об этом договариваются свободно",
  "Höchstens drei Monatskaltmieten. Mehr darf der Vermieter nicht verlangen.":
    "Самое большее три месячные платы без дополнительных расходов. Больше наймодатель требовать не вправе.",
  "Ab wann gilt in Deutschland üblicherweise die Nachtruhe?":
    "С какого часа в Германии обычно действует ночной покой?",
  "Ab 20 Uhr": "С 20 часов",
  "Ab 22 Uhr": "С 22 часов",
  "Ab 24 Uhr": "С 24 часов",
  "Es gibt keine Nachtruhe": "Ночного покоя нет",
  "In der Regel von 22 bis 6 Uhr. Sonn- und Feiertage sind meist ganztägig Ruhetage.":
    "Как правило с 22 до 6 часов. Воскресенья и праздники обычно тихие целый день.",
  "Gesundheit und Versicherungen": "Здоровье и страхование",
  "In Deutschland ist die **Krankenversicherung Pflicht** — für alle. Wie das System funktioniert und wohin man im Notfall geht, gehört zum Alltagswissen, das der Test abfragt.":
    "В Германии **медицинское страхование обязательно** — для всех. Как это устроено и куда идти в неотложном случае, относится к повседневным знаниям, которые спрашивает тест.",
  "Gesetzlich oder privat": "Государственное или частное",
  "Gesetzliche Krankenversicherung": "Государственное медицинское страхование",
  "Für die meisten Beschäftigten Pflicht. Der Beitrag richtet sich nach dem Einkommen. **Kinder und Ehepartner ohne eigenes Einkommen sind kostenlos mitversichert** — die Familienversicherung.":
    "Для большинства работающих обязательно. Взнос считают по доходу. **Дети и супруг без собственного дохода застрахованы вместе бесплатно** — это семейное страхование.",
  "Private Krankenversicherung": "Частное медицинское страхование",
  "Möglich für Selbstständige, Beamte und Gutverdiener. Der Beitrag richtet sich nach Alter und Gesundheitszustand, nicht nach dem Einkommen. Jede Person zahlt einzeln.":
    "Возможно для работающих на себя, чиновников и людей с высоким доходом. Взнос считают по возрасту и состоянию здоровья, а не по доходу. Каждый платит за себя отдельно.",
  "Die **Familienversicherung** ist eine beliebte Prüfungsfrage: In der gesetzlichen Kasse sind Kinder und nicht erwerbstätige Ehepartner beitragsfrei mitversichert. In der privaten gilt das nicht.":
    "**Семейное страхование** — излюбленный вопрос экзамена: в государственной кассе дети и неработающий супруг застрахованы вместе без взносов. В частной это не так.",
  "Zum Arzt gehen": "Идти к врачу",
  "Hausarzt": "Домашний врач",
  "Die erste Anlaufstelle bei Beschwerden. Er überweist bei Bedarf zum Facharzt.":
    "Первое место, куда обращаются с недомоганием. При надобности он направляет к специалисту.",
  "Gesundheitskarte": "Карта медицинского страхования",
  "Bei jedem Besuch vorzeigen. Ohne sie musst du unter Umständen selbst zahlen.":
    "Показывать при каждом посещении. Без неё, случается, приходится платить самому.",
  "Krankschreibung": "Больничный лист",
  "Wer krank ist, meldet sich sofort beim Arbeitgeber. Ab wann ein Attest nötig ist, steht im Arbeitsvertrag.":
    "Кто заболел, сразу сообщает работодателю. С какого дня нужна справка, стоит в трудовом договоре.",
  "Schweigepflicht": "Врачебная тайна",
  "Ärzte dürfen nichts weitergeben — auch nicht an den Arbeitgeber. Der erfährt nur, dass du krank bist, nicht warum.":
    "Врачи не вправе ничего передавать — в том числе работодателю. Он узнаёт только, что ты болен, а не почему.",
  "Notfälle": "Неотложные случаи",
  "Die **112** ist die Nummer für Notarzt und Feuerwehr, die **110** für die Polizei. Beide sind kostenlos und funktionieren von jedem Telefon. Außerhalb der Sprechzeiten hilft der **ärztliche Bereitschaftsdienst unter 116117**; in die Notaufnahme gehört man bei echten Notfällen.":
    "**112** — номер неотложной помощи и пожарных, **110** — полиции. Оба бесплатны и работают с любого телефона. Вне приёмных часов помогает **дежурная врачебная служба по номеру 116117**; в приёмный покой идут при настоящих неотложных случаях.",
  "**112 Feuerwehr und Notarzt, 110 Polizei.** Diese beiden Nummern gehören zum Pflichtwissen — und wer sie ohne Not wählt, macht sich strafbar.":
    "**112 — пожарные и неотложная помощь, 110 — полиция.** Эти два номера входят в обязательные знания, а кто набирает их без нужды, совершает наказуемое деяние.",
  "Weitere wichtige Versicherungen": "Другие важные страховки",
  "Haftpflicht": "Страхование ответственности",
  "Zahlt Schäden, die du anderen zufügst. Freiwillig, aber dringend zu empfehlen.":
    "Оплачивает вред, который ты причинил другим. Добровольное, но настоятельно советуют.",
  "Hausrat": "Страхование домашнего имущества",
  "Für Schäden am eigenen Besitz durch Feuer, Wasser oder Einbruch.":
    "На случай ущерба собственному имуществу от огня, воды или взлома.",
  "Kfz-Haftpflicht": "Страхование ответственности автовладельца",
  "Für jedes Auto **gesetzlich vorgeschrieben**. Ohne sie darf kein Fahrzeug fahren.":
    "Для каждой машины **предписано законом**. Без него ездить нельзя.",
  "Berufsunfähigkeit": "Страхование утраты профессии",
  "Sichert das Einkommen, wenn man den Beruf aus gesundheitlichen Gründen nicht mehr ausüben kann.":
    "Обеспечивает доход, когда по здоровью работать по своей профессии уже нельзя.",
  "Krankenkasse · Gesundheitskarte · Hausarzt · Notaufnahme · ärztlicher Bereitschaftsdienst.":
    "Больничная касса · карта медицинского страхования · домашний врач · приёмный покой · дежурная врачебная служба.",
  "**112** Notarzt und Feuerwehr · **110** Polizei · **116117** Bereitschaftsdienst · 6 Wochen Lohnfortzahlung.":
    "**112** — неотложная помощь и пожарные · **110** — полиция · **116117** — дежурная служба · 6 недель сохранения оплаты.",
  "Versicherungspflicht · Familienversicherung · Überweisung · Schweigepflicht · Haftpflicht · Kfz-Haftpflicht.":
    "Обязательность страхования · семейное страхование · направление к специалисту · врачебная тайна · страхование ответственности · страхование ответственности автовладельца.",
  "In einem Satz: Versichert ist jeder, der Hausarzt ist die erste Tür, und 112 ist die Nummer, die man nie vergessen darf.":
    "Одним предложением: застрахован каждый, домашний врач — первая дверь, а 112 — номер, который нельзя забывать никогда.",
  "Welche Nummer wählst du in Deutschland bei einem medizinischen Notfall?":
    "Какой номер набирают в Германии при неотложном медицинском случае?",
  "110": "110",
  "112": "112",
  "116117": "116117",
  "115": "115",
  "112 für Notarzt und Feuerwehr, 110 für die Polizei. 116117 ist der ärztliche Bereitschaftsdienst außerhalb der Sprechzeiten.":
    "112 — неотложная помощь и пожарные, 110 — полиция. 116117 — дежурная врачебная служба вне приёмных часов.",
  "Wer ist in der gesetzlichen Krankenversicherung beitragsfrei mitversichert?":
    "Кто в государственном медицинском страховании застрахован вместе и без взносов?",
  "Niemand, jeder zahlt selbst": "Никто, каждый платит сам",
  "Kinder und Ehepartner ohne eigenes Einkommen": "Дети и супруг без собственного дохода",
  "Nur Kinder bis 6 Jahre": "Только дети до 6 лет",
  "Alle Verwandten im selben Haushalt": "Все родственники в том же доме",
  "Die Familienversicherung deckt Kinder und nicht erwerbstätige Ehepartner ohne zusätzlichen Beitrag ab.":
    "Семейное страхование покрывает детей и неработающего супруга без дополнительного взноса.",
  "Darf dein Arzt dem Arbeitgeber sagen, welche Krankheit du hast?":
    "Вправе ли врач сказать работодателю, чем ты болен?",
  "Ja, das ist üblich": "Да, так принято",
  "Nein, es gilt die ärztliche Schweigepflicht": "Нет, действует врачебная тайна",
  "Nur bei längerer Krankheit": "Только при долгой болезни",
  "Nur wenn der Arbeitgeber fragt": "Только если работодатель спросит",
  "Die Diagnose bleibt zwischen dir und dem Arzt. Der Arbeitgeber erfährt nur, dass und wie lange du arbeitsunfähig bist.":
    "Диагноз остаётся между тобой и врачом. Работодатель узнаёт лишь то, что ты нетрудоспособен и как долго.",
  "Kultur, Feste und Medien": "Культура, праздники и средства печати",
  "Zum Schluss das, was Deutschland im Alltag ausmacht: die Feste im Jahreslauf, die Namen, die jeder kennt, und die Rolle der freien Presse.":
    "Напоследок то, из чего складывается Германия в повседневности: праздники в кругу года, имена, которые знает каждый, и роль свободной печати.",
  "Feiertage im Jahreslauf": "Праздники в кругу года",
  "Ostern": "Пасха",
  "Christliches Fest im Frühjahr. Karfreitag und Ostermontag sind bundesweit frei.":
    "Христианский праздник весной. Страстная пятница и пасхальный понедельник — выходные по всей стране.",
  "1. Mai": "1 мая",
  "**Tag der Arbeit** — Feiertag mit Gewerkschaftskundgebungen.":
    "**День труда** — праздник с профсоюзными собраниями.",
  "3. Oktober": "3 октября",
  "**Tag der Deutschen Einheit**, der Nationalfeiertag.":
    "**День немецкого единства**, государственный праздник.",
  "Weihnachten": "Рождество",
  "24. Dezember Heiligabend, 25. und 26. Dezember gesetzliche Feiertage. Davor die Adventszeit mit Weihnachtsmärkten.":
    "24 декабря — сочельник, 25 и 26 декабря — установленные законом праздники. Перед ними адвент с рождественскими ярмарками.",
  "Regional kommen weitere hinzu: **Karneval oder Fasching** vor allem im Rheinland und in Bayern, das **Oktoberfest** in München, **Schützenfeste** im Norden, das **Erntedankfest** im Herbst. Welche Feiertage gelten, entscheidet auch hier das Bundesland.":
    "По областям прибавляются и другие: **карнавал, он же фашинг**, прежде всего в Рейнской области и Баварии, **Октоберфест** в Мюнхене, **праздники стрелковых обществ** на севере, **праздник урожая** осенью. Какие праздники действуют, и здесь решает земля.",
  "Namen, die man kennt": "Имена, которые знают",
  "Musik und Literatur": "Музыка и литература",
  "**Johann Sebastian Bach** und **Ludwig van Beethoven** in der Musik. **Johann Wolfgang von Goethe** und **Friedrich Schiller** in der Literatur; die **Brüder Grimm** sammelten die Märchen.":
    "**Иоганн Себастьян Бах** и **Людвиг ван Бетховен** в музыке. **Иоганн Вольфганг фон Гёте** и **Фридрих Шиллер** в литературе; **братья Гримм** собирали сказки.",
  "Wissenschaft und Technik": "Наука и техника",
  "**Albert Einstein** in der Physik, **Johannes Gutenberg** mit dem Buchdruck, **Konrad Zuse** mit dem ersten Computer, **Carl Benz** mit dem Automobil.":
    "**Альберт Эйнштейн** в физике, **Иоганн Гутенберг** с книгопечатанием, **Конрад Цузе** с первым компьютером, **Карл Бенц** с автомобилем.",
  "Freie Medien": "Свободные средства печати",
  "**Pressefreiheit** steht in Artikel 5 des Grundgesetzes: Medien dürfen die Regierung kritisieren, und **eine Zensur findet nicht statt**. Der **öffentlich-rechtliche Rundfunk** — ARD, ZDF und die Landesrundfunkanstalten — wird über den **Rundfunkbeitrag** jedes Haushalts finanziert, damit er von Staat und Werbekunden unabhängig bleibt.":
    "**Свобода печати** стоит в статье 5 Основного закона: средства печати вправе критиковать правительство, и **цензуры не существует**. **Общественно-правовое вещание** — ARD, ZDF и земельные вещательные учреждения — финансируется **взносом на вещание** с каждого домохозяйства, чтобы оставаться независимым от государства и от рекламодателей.",
  "Die Frage kommt in vielen Varianten: Darf eine Zeitung die Regierung kritisieren? **Ja.** In der Demokratie ist das ihre Aufgabe — genau darin unterscheidet sie sich von der DDR-Presse und der Gleichschaltung ab 1933.":
    "Вопрос приходит во многих видах: вправе ли газета критиковать правительство? **Да.** В демократии это её задача — именно этим она и отличается от печати ГДР и от унификации после 1933 года.",
  "Vereine und Ehrenamt": "Общества и работа на общее благо",
  "Deutschland ist ein Land der **Vereine**: Sport, Musik, Feuerwehr, Naturschutz, Nachbarschaftshilfe. Millionen Menschen engagieren sich **ehrenamtlich**, also unbezahlt. Für Zugezogene ist der Verein oft der einfachste Weg, Menschen kennenzulernen — und Deutsch zu üben.":
    "Германия — страна **обществ**: спорт, музыка, пожарная дружина, охрана природы, помощь соседям. Миллионы людей трудятся в них **на общее благо**, то есть без оплаты. Для приезжего такое общество часто самый простой способ познакомиться с людьми — и поупражняться в немецком.",
  "Sport": "Спорт",
  "**Fußball** ist die beliebteste Sportart; die Bundesliga spielt von August bis Mai, und die Nationalmannschaft wurde viermal Weltmeister — zuletzt **2014**. Populär sind außerdem Handball, Wintersport und Motorsport.":
    "**Футбол** — самый любимый вид спорта; бундеслига играет с августа по май, а сборная четыре раза становилась чемпионом мира — последний раз в **2014 году**. Популярны также гандбол, зимние виды и автоспорт.",
  "Goethe · Schiller · Brüder Grimm · Bach · Beethoven · Einstein · Gutenberg · ARD und ZDF.":
    "Гёте · Шиллер · братья Гримм · Бах · Бетховен · Эйнштейн · Гутенберг · ARD и ZDF.",
  "1. Mai Tag der Arbeit · 3. Oktober Nationalfeiertag · 25. und 26. Dezember Weihnachten · Fußball-Weltmeister zuletzt 2014.":
    "1 мая — День труда · 3 октября — государственный праздник · 25 и 26 декабря — Рождество · чемпион мира по футболу в последний раз в 2014 году.",
  "Pressefreiheit · Zensurverbot · öffentlich-rechtlicher Rundfunk · Rundfunkbeitrag · Ehrenamt · Verein · Karneval.":
    "Свобода печати · запрет цензуры · общественно-правовое вещание · взнос на вещание · труд на общее благо · общество · карнавал.",
  "In einem Satz: Feste sind regional, Medien sind frei, und wer Anschluss sucht, findet ihn im Verein.":
    "Одним предложением: праздники у каждой области свои, средства печати свободны, а кто ищет знакомств, найдёт их в обществе.",
  "Darf eine deutsche Zeitung die Bundesregierung öffentlich kritisieren?":
    "Вправе ли немецкая газета публично критиковать федеральное правительство?",
  "Nein, das ist verboten": "Нет, это запрещено",
  "Ja, denn es gilt die Pressefreiheit": "Да, ведь действует свобода печати",
  "Nur mit Genehmigung des Ministeriums": "Только с разрешения министерства",
  "Nur vor Wahlen": "Только перед выборами",
  "Artikel 5 des Grundgesetzes garantiert Presse- und Meinungsfreiheit. Eine Zensur findet nicht statt.":
    "Статья 5 Основного закона гарантирует свободу печати и мнения. Цензуры не существует.",
  "Was wird am 1. Mai in Deutschland gefeiert?": "Что празднуют в Германии 1 мая?",
  "Der Tag der Deutschen Einheit": "День немецкого единства",
  "Der Tag der Arbeit": "День труда",
  "Das Ende des Zweiten Weltkriegs": "Конец Второй мировой войны",
  "Der Geburtstag des Grundgesetzes": "День рождения Основного закона",
  "Der 1. Mai ist der Tag der Arbeit. Der 3. Oktober ist der Tag der Deutschen Einheit, der 23. Mai der Tag des Grundgesetzes.":
    "1 мая — День труда. 3 октября — День немецкого единства, а 23 мая — день Основного закона.",
  "Wer sammelte die bekannten deutschen Märchen?": "Кто собрал известные немецкие сказки?",
  "Johann Wolfgang von Goethe": "Иоганн Вольфганг фон Гёте",
  "Die Brüder Grimm": "Братья Гримм",
  "Friedrich Schiller": "Фридрих Шиллер",
  "Thomas Mann": "Томас Манн",
  "Jacob und Wilhelm Grimm sammelten im 19. Jahrhundert Märchen wie Hänsel und Gretel und Rotkäppchen.":
    "Якоб и Вильгельм Гримм собирали в XIX веке сказки вроде «Гензеля и Гретель» и «Красной Шапочки».",
};
