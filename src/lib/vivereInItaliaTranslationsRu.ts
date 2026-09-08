/**
 * Russian for the Vivere in Italia course cards, headings and questions.
 *
 * Keyed on the ITALIAN source text exactly as it appears in
 * vivereInItaliaCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * is, because it fails silently: the card renders, the tap works, and the
 * reader is told a translated card has no translation. Every key here was
 * extracted from the built module and paired back, never retyped: one wrong
 * character — a plain o for the ordinal º, an apostrophe for a typographic
 * one — and the lookup misses without a sound.
 * check-ru-country-translations catches that.
 *
 * The line between what is translated and what is not runs where Russian
 * itself draws it. An institution Russian has a name for gets that name —
 * Сенат, Палата депутатов, Конституционный суд. What stays Italian is what a
 * reader will meet printed on a form or a doorplate and nowhere else: the
 * codice fiscale, a permesso di soggiorno, the tessera sanitaria, the
 * anagrafe, the questura, the ASL, INPS. Those lead in Italian, and a Russian
 * gloss follows once.
 */
export const VIVERE_IN_ITALIA_RU: Record<string, string> = {
  "Storia, ordinamento e vita quotidiana — come funziona il paese.":
    "История, устройство власти и повседневная жизнь — как страна работает.",
  "Simboli nazionali": "Народные символы",
  "Simboli e principi fondamentali": "Символы и основные начала",
  "Perché si comincia da qui: i simboli si incontrano tutti i giorni — sul municipio, sul passaporto, sulla maglia della nazionale — e sono quindi la porta più facile per entrare in tutto il resto.":
    "Почему начинают отсюда: символы встречаются каждый день — на здании городской управы, на паспорте, на майке сборной, — и потому это самая лёгкая дверь во всё остальное.",
  "La bandiera": "Знамя",
  "Il **tricolore** ha tre bande verticali di uguali dimensioni: **verde** dalla parte dell'asta, **bianco** al centro, **rosso** al battente. Lo descrive l'**articolo 12** della Costituzione, l'ultimo dei principi fondamentali — il che dice già qualcosa: la bandiera non è un dettaglio decorativo, sta fra le cose che fondano la Repubblica.":
    "**Трёхцветное знамя** имеет три отвесные полосы одной ширины: **зелёная** у древка, **белая** посередине, **красная** с вольного края. Его описывает **статья 12** Конституции, последняя из основных начал, — и это уже кое-что говорит: знамя не украшение, оно стоит среди того, на чём Республика основана.",
  "Nacque a **Reggio Emilia il 7 gennaio 1797**, quando la Repubblica Cispadana lo adottò come proprio vessillo. È la bandiera nazionale più antica d'Europa dopo quelle di Danimarca e Paesi Bassi, e il 7 gennaio si celebra la **Festa del Tricolore**.":
    "Оно родилось в **Реджо-Эмилии 7 января 1797 года**, когда Циспаданская республика приняла его своим стягом. Это старейшее народное знамя Европы после датского и нидерландского, и 7 января отмечают **Праздник трёхцветного знамени**.",
  "Ai colori non è assegnato per legge alcun significato. Le spiegazioni che si sentono — il verde delle pianure, il bianco delle nevi alpine, il rosso del sangue versato — sono letture affettive nate dopo, non una regola scritta da qualche parte.":
    "Никакого смысла закон цветам не назначает. Толкования, которые слышишь, — зелень равнин, белизна альпийских снегов, краснота пролитой крови — сердечные догадки, родившиеся позже, а не правило, где-то записанное.",
  "L'emblema": "Герб",
  "L'Italia non ha uno stemma di famiglia regnante: ha un **emblema**, scelto per concorso pubblico e in vigore dal **5 maggio 1948**. Lo disegnò Paolo Paschetto. Non è uno scudo, ed è la differenza che conta: non discende da una dinastia, è stato inventato da una repubblica appena nata per rappresentarsi.":
    "У Италии нет герба правящего дома: у неё есть **эмблема**, выбранная на открытом состязании и действующая с **5 мая 1948 года**. Нарисовал её Паоло Паскетто. Это не щит, и в этом вся разница: она не досталась от династии, её придумала едва родившаяся республика, чтобы себя обозначить.",
  "La stella": "Звезда",
  "La stella d'Italia, il simbolo più antico del paese: accompagna l'immagine dell'Italia da prima dell'Unità.":
    "Звезда Италии, древнейший знак страны: она сопровождает облик Италии ещё до объединения.",
  "La ruota dentata": "Зубчатое колесо",
  "L'ingranaggio richiama il lavoro, su cui l'articolo 1 fonda la Repubblica.":
    "Шестерня напоминает о труде, на котором статья 1 основывает Республику.",
  "L'olivo e la quercia": "Олива и дуб",
  "L'olivo per la pace, la quercia per la forza e la dignità. Sono due alberi che crescono in tutta la penisola.":
    "Олива — за мир, дуб — за силу и достоинство. Оба дерева растут по всему полуострову.",
  "Da quale parte della bandiera si trova il verde?": "С какой стороны знамени зелёный цвет?",
  "Al centro": "Посередине",
  "Dalla parte dell'asta": "У древка",
  "Dalla parte del battente": "С вольного края",
  "Cambia a seconda della regione": "Это меняется от области к области",
  "Verde all'asta, bianco al centro, rosso al battente. L'ordine non è libero: è fissato dall'articolo 12 della Costituzione, e una bandiera con i colori invertiti è semplicemente sbagliata.":
    "Зелёный у древка, белый посередине, красный с вольного края. Порядок не вольный: он закреплён статьёй 12 Конституции, и знамя с перевёрнутыми цветами попросту неверно.",
  "L'inno": "Гимн",
  "L'inno nazionale si chiama ufficialmente **Il Canto degli Italiani**, ma tutti lo conoscono come **Inno di Mameli** oppure dal suo primo verso, **Fratelli d'Italia**. Il testo è di **Goffredo Mameli**, che lo scrisse nel **1847** a vent'anni; la musica è di **Michele Novaro**. Mameli morì due anni dopo, a ventun anni, difendendo la Repubblica Romana.":
    "Народный гимн по-настоящему зовётся **«Песнью итальянцев»**, но все знают его как **«Гимн Мамели»** или по первой строке — **«Братья Италии»**. Слова написал **Гоффредо Мамели**, в **1847 году**, двадцати лет от роду; музыку — **Микеле Новаро**. Мамели умер двумя годами позже, двадцати одного года, защищая Римскую республику.",
  "Curiosamente l'inno è stato per settant'anni un inno di fatto: adottato in via provvisoria nel **1946**, è diventato inno ufficiale per legge soltanto il **4 dicembre 2017**. In Italia le cose provvisorie durano.":
    "Любопытно, что семьдесят лет гимн был гимном лишь на деле: принятый временно в **1946 году**, он стал гимном по закону только **4 декабря 2017 года**. В Италии временное держится долго.",
  "Chi scrisse il testo dell'inno nazionale?": "Кто написал слова народного гимна?",
  "Michele Novaro": "Микеле Новаро",
  "Giuseppe Verdi": "Джузеппе Верди",
  "Goffredo Mameli": "Гоффредо Мамели",
  "Giuseppe Mazzini": "Джузеппе Мадзини",
  "Il testo è di Goffredo Mameli, la musica di Michele Novaro: per questo si dice Inno di Mameli e non Inno di Novaro. Verdi non c'entra, anche se il coro del Nabucco viene spesso proposto come alternativa.":
    "Слова — Гоффредо Мамели, музыка — Микеле Новаро: потому и говорят «Гимн Мамели», а не «Гимн Новаро». Верди тут ни при чём, хотя хор из «Набукко» часто предлагают взамен.",
  "Le date della Repubblica": "Даты Республики",
  "2 giugno": "2 июня",
  "Festa della Repubblica. Ricorda il referendum del 2 e 3 giugno 1946, con cui gli italiani scelsero la repubblica al posto della monarchia.":
    "Праздник Республики. Он напоминает о референдуме 2 и 3 июня 1946 года, на котором итальянцы выбрали республику вместо монархии.",
  "25 aprile": "25 апреля",
  "Anniversario della Liberazione, la fine dell'occupazione nazifascista nel 1945.":
    "Годовщина Освобождения, конца нацистско-фашистской оккупации в 1945 году.",
  "4 novembre": "4 ноября",
  "Giorno dell'Unità nazionale e Festa delle Forze armate: l'armistizio del 1918. Non è più giorno festivo dal 1977 e si celebra la prima domenica di novembre.":
    "День народного единства и Праздник вооружённых сил: перемирие 1918 года. С 1977 года это уже не выходной, и отмечают его в первое воскресенье ноября.",
  "Il **2 giugno** è la festa nazionale vera e propria. A Roma si svolgono la deposizione della corona all'Altare della Patria e la parata lungo via dei Fori Imperiali, con il sorvolo delle Frecce Tricolori che lasciano nel cielo le tre bande.":
    "**2 июня** — настоящий народный праздник. В Риме к Алтарю Отечества возлагают венок, а по улице Императорских форумов идёт шествие войск, и над ним пролетают «Трёхцветные стрелы», оставляя в небе три полосы.",
  "Che cosa si ricorda il 2 giugno?": "О чём напоминает 2 июня?",
  "La proclamazione del Regno d'Italia nel 1861":
    "О провозглашении Итальянского королевства в 1861 году",
  "Il referendum del 1946 e la nascita della Repubblica":
    "О референдуме 1946 года и рождении Республики",
  "L'entrata in vigore della Costituzione": "О вступлении Конституции в силу",
  "La fine della Seconda guerra mondiale": "О конце Второй мировой войны",
  "Il 2 giugno 1946 gli italiani votarono per la repubblica contro la monarchia, e nello stesso giorno elessero l'Assemblea costituente. Il Regno era stato proclamato l'11 marzo 1861, la Costituzione entrò in vigore il 1º gennaio 1948: tre date diverse che è facile confondere.":
    "2 июня 1946 года итальянцы проголосовали за республику против монархии и в тот же день избрали Учредительное собрание. Королевство было провозглашено 11 марта 1861 года, Конституция вступила в силу 1 января 1948-го: три разные даты, которые легко спутать.",
  "Da non confondere: il **7 gennaio** è la Festa del Tricolore, cioè della bandiera; il **2 giugno** è la Festa della Repubblica. Solo la seconda è giorno festivo.":
    "Не путать: **7 января** — Праздник трёхцветного знамени, то есть знамени; **2 июня** — Праздник Республики. Выходной только второй.",
  "La Costituzione e i principi fondamentali": "Конституция и основные начала",
  "Perché conta: quasi tutto quello che verrà dopo — il Parlamento, le regioni, i diritti, perfino la bandiera — è scritto in un unico testo del 1947. Chi lo conosce a grandi linee ha già la mappa del resto del corso.":
    "Почему это важно: почти всё, что будет дальше — парламент, области, права, даже знамя, — записано в одном тексте 1947 года. Кто знает его в общих чертах, у того уже есть карта всего остального курса.",
  "Come è nata": "Как она родилась",
  "Il **2 giugno 1946**, nello stesso giorno del referendum, gli italiani elessero l'**Assemblea costituente**. Fu la prima consultazione a suffragio davvero universale della storia italiana: **votarono per la prima volta le donne**. L'Assemblea lavorò un anno e mezzo e approvò il testo il **22 dicembre 1947**.":
    "**2 июня 1946 года**, в один день с референдумом, итальянцы избрали **Учредительное собрание**. Это было первое в итальянской истории голосование, поистине всеобщее: **впервые голосовали женщины**. Собрание работало полтора года и приняло текст **22 декабря 1947 года**.",
  "La Costituzione fu promulgata il **27 dicembre 1947** dal capo provvisorio dello Stato **Enrico De Nicola** ed entrò in vigore il **1º gennaio 1948**. Fu scritta da un'assemblea in cui sedevano insieme democratici cristiani, comunisti, socialisti, liberali e azionisti: è un testo di compromesso, e si vede.":
    "Конституцию обнародовал **27 декабря 1947 года** временный глава государства **Энрико Де Никола**, а в силу она вступила **1 января 1948 года**. Писало её собрание, где вместе сидели христианские демократы, коммунисты, социалисты, либералы и члены Партии действия: это текст уступок, и это видно.",
  "Quando è entrata in vigore la Costituzione?": "Когда Конституция вступила в силу?",
  "Il 2 giugno 1946": "2 июня 1946 года",
  "Il 22 dicembre 1947": "22 декабря 1947 года",
  "Il 1º gennaio 1948": "1 января 1948 года",
  "Il 25 aprile 1945": "25 апреля 1945 года",
  "Approvata il 22 dicembre 1947, promulgata il 27 dicembre, entrata in vigore il 1º gennaio 1948. Le tre date sono vicine ma distinte: approvazione, firma, efficacia.":
    "Принята 22 декабря 1947 года, обнародована 27 декабря, вступила в силу 1 января 1948-го. Три даты рядом, но они разные: принятие, подпись, действие.",
  "Come è fatta": "Как она устроена",
  "Il testo ha **139 articoli** più diciotto disposizioni transitorie e finali, ed è diviso in tre parti disuguali.":
    "В тексте **139 статей** и ещё восемнадцать переходных и заключительных положений, а разделён он на три неравные части.",
  "Principi fondamentali": "Основные начала",
  "Articoli 1–12. Dodici articoli che dicono che cosa è la Repubblica prima di dire come funziona.":
    "Статьи 1–12. Двенадцать статей, которые говорят, что такое Республика, прежде чем сказать, как она работает.",
  "Parte I · Diritti e doveri dei cittadini": "Часть I · Права и обязанности граждан",
  "Articoli 13–54. Le libertà, la famiglia, la salute, la scuola, il lavoro, il voto, le tasse.":
    "Статьи 13–54. Свободы, семья, здоровье, школа, работа, голос, налоги.",
  "Parte II · Ordinamento della Repubblica": "Часть II · Устройство Республики",
  "Articoli 55–139. Parlamento, Governo, Presidente, magistratura, regioni. È il capitolo 2 di questo corso.":
    "Статьи 55–139. Парламент, правительство, президент, судейское сословие, области. Это вторая глава нашего курса.",
  "I primi articoli": "Первые статьи",
  "L'**articolo 1** stabilisce che l'Italia è una Repubblica democratica **fondata sul lavoro** e che la sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione. Quella formula sul lavoro fu il compromesso trovato fra chi voleva una repubblica dei lavoratori e chi voleva una formula più generale.":
    "**Статья 1** устанавливает, что Италия есть народовластная Республика, **основанная на труде**, и что верховная власть принадлежит народу, который вершит её в тех видах и в тех пределах, какие положены Конституцией. Слова о труде были уступкой между теми, кто хотел республику работников, и теми, кто хотел речь пообщее.",
  "L'**articolo 3** enuncia due uguaglianze, non una. La prima è **formale**: tutti sono uguali davanti alla legge senza distinzione di sesso, razza, lingua, religione, opinioni politiche, condizioni personali e sociali. La seconda è **sostanziale**: è compito della Repubblica rimuovere gli ostacoli che di fatto impediscono quell'uguaglianza. Il secondo comma è quello che giustifica le politiche sociali.":
    "**Статья 3** называет два равенства, а не одно. Первое **на бумаге**: все равны перед законом без различия пола, племени, языка, веры, убеждений о государственных делах, личного и общественного положения. Второе **на деле**: Республика обязана убирать препятствия, которые этому равенству на самом деле мешают. Второй пункт и есть то, чем оправданы все меры общественной помощи.",
  "L'**articolo 11** contiene il verbo più discusso del testo: l'Italia **ripudia** la guerra come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali. Lo stesso articolo consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: su questa frase poggia l'adesione italiana all'Unione europea.":
    "В **статье 11** стоит самый спорный глагол всего текста: Италия **отвергает** войну как средство посягательства на свободу других народов и как способ разрешения споров между странами. Та же статья допускает ограничения верховной власти, нужные для порядка, который обеспечивает мир: на этой строке и держится вступление Италии в Европейский союз.",
  "Quanti sono gli articoli dei principi fondamentali?": "Сколько статей в основных началах?",
  "Sette": "Семь",
  "Dodici": "Двенадцать",
  "Ventuno": "Двадцать одна",
  "Centotrentanove": "Сто тридцать девять",
  "I principi fondamentali sono gli articoli da 1 a 12, prima ancora della Parte I. Centotrentanove è il totale degli articoli della Costituzione.":
    "Основные начала — это статьи с 1 по 12, ещё до части I. Сто тридцать девять — это всего статей в Конституции.",
  "Una costituzione rigida": "Жёсткая конституция",
  "La Costituzione non si cambia con una legge ordinaria. L'**articolo 138** impone una procedura aggravata: ciascuna Camera deve approvare due volte, a distanza di almeno tre mesi, e nella seconda votazione serve la maggioranza assoluta. Se non si raggiungono i due terzi, cinquecentomila elettori, cinque consigli regionali o un quinto dei parlamentari possono chiedere un **referendum confermativo**.":
    "Конституцию не меняют обычным законом. **Статья 138** предписывает утяжелённый порядок: каждая палата должна принять перемену дважды, с промежутком не менее трёх месяцев, и при втором голосовании нужно полное большинство. Если двух третей не набрано, пятьсот тысяч избирателей, пять областных советов или пятая часть членов парламента могут потребовать **подтверждающего референдума**.",
  "L'**articolo 139** mette un limite ancora più netto: la **forma repubblicana non può essere oggetto di revisione costituzionale**. Non esiste procedura, per quanto aggravata, che possa riportare la monarchia.":
    "**Статья 139** ставит предел ещё более резкий: **республиканский образ правления пересмотру не подлежит**. Никакого порядка, сколь угодно утяжелённого, которым можно было бы вернуть монархию, не существует.",
  "Che cosa non può essere modificato in nessun modo?": "Что нельзя изменить никаким образом?",
  "Il numero dei parlamentari": "Число членов парламента",
  "La forma repubblicana": "Республиканский образ правления",
  "La durata del mandato presidenziale": "Срок полномочий президента",
  "L'articolo 139 sottrae la forma repubblicana a qualsiasi revisione. Tutto il resto — parlamentari, mandato, perfino l'articolo 12 sulla bandiera — è modificabile con la procedura dell'articolo 138.":
    "Статья 139 изымает республиканский образ правления из всякого пересмотра. Всё остальное — число членов парламента, срок полномочий, даже статья 12 о знамени — изменимо порядком статьи 138.",
  "Il referendum dell'articolo 138 è **confermativo** e non ha quorum: vale qualunque sia l'affluenza. È cosa diversa dal referendum **abrogativo** dell'articolo 75, che invece è valido solo se vota la maggioranza degli aventi diritto.":
    "Референдум статьи 138 **подтверждающий**, и порога явки у него нет: он в силе, сколько бы народу ни пришло. Это не то же, что **отменяющий** референдум статьи 75, который в силе, только если проголосовало большинство имеющих право.",
  "Diritti e doveri dei cittadini": "Права и обязанности граждан",
  "Perché conta: la Parte I non elenca soltanto quello che si può fare. Elenca anche quattro doveri, e sono quelli che trasformano un abitante in un cittadino.":
    "Почему это важно: часть I перечисляет не только то, что можно делать. Она перечисляет и четыре обязанности, и именно они превращают жителя в гражданина.",
  "Quattro gruppi di rapporti": "Четыре круга отношений",
  "La Parte I va dall'articolo 13 al 54 ed è divisa in quattro titoli, ognuno dei quali guarda la persona da un lato diverso: **rapporti civili**, **etico-sociali**, **economici** e **politici**.":
    "Часть I идёт со статьи 13 по 54 и разделена на четыре раздела, каждый из которых смотрит на человека с иной стороны: отношения **гражданские**, **нравственно-общественные**, **хозяйственные** и **государственные**.",
  "Civili · 13–28": "Гражданские · 13–28",
  "Libertà personale, domicilio, corrispondenza, circolazione, riunione, associazione, religione, pensiero, difesa in giudizio.":
    "Личная свобода, жилище, переписка, передвижение, собрания, объединения, вера, мысль, защита в суде.",
  "Etico-sociali · 29–34": "Нравственно-общественные · 29–34",
  "Famiglia, salute, scuola. Qui stanno il diritto alle cure e l'istruzione obbligatoria.":
    "Семья, здоровье, школа. Тут стоят право на лечение и обязательное обучение.",
  "Economici · 35–47": "Хозяйственные · 35–47",
  "Lavoro, retribuzione, sindacati, sciopero, impresa, proprietà, risparmio.":
    "Труд, плата за труд, союзы работников, забастовка, предприятие, собственность, сбережения.",
  "Politici · 48–54": "Государственные · 48–54",
  "Voto, partiti, petizioni, accesso agli uffici pubblici, difesa della patria, tributi, fedeltà alla Repubblica.":
    "Голос, партии, прошения, доступ к казённым должностям, оборона отечества, подати, верность Республике.",
  "Le libertà": "Свободы",
  "L'**articolo 13** dichiara inviolabile la libertà personale: nessuna detenzione o perquisizione se non per atto motivato dell'autorità giudiziaria. Se in casi eccezionali interviene la polizia, deve avvisare il giudice entro quarantotto ore, e il giudice ha altre quarantotto ore per convalidare. Passate le novantasei ore senza convalida, il provvedimento perde ogni effetto.":
    "**Статья 13** объявляет личную свободу неприкосновенной: ни задержания, ни обыска иначе как по обоснованному постановлению судебной власти. Если в исключительных случаях вмешивается полиция, она обязана известить судью в течение сорока восьми часов, а у судьи есть ещё сорок восемь часов, чтобы это утвердить. Пройдут девяносто шесть часов без утверждения — и мера теряет всякую силу.",
  "L'**articolo 21** garantisce a tutti il diritto di manifestare liberamente il proprio pensiero con la parola, lo scritto e ogni altro mezzo di diffusione. La stampa non può essere soggetta ad autorizzazioni o censure: è una frase scritta da chi aveva appena vissuto vent'anni di giornali autorizzati.":
    "**Статья 21** ручается каждому за право свободно высказывать свою мысль словом, письмом и любым иным способом распространения. Печать не может быть подчинена разрешениям или цензуре: эту строку написали люди, только что прожившие двадцать лет при разрешённых газетах.",
  "Entro quanto tempo l'autorità giudiziaria deve essere avvisata di un fermo di polizia?":
    "В какой срок судебную власть надо известить о полицейском задержании?",
  "Entro ventiquattro ore": "В течение двадцати четырёх часов",
  "Entro quarantotto ore": "В течение сорока восьми часов",
  "Entro una settimana": "В течение недели",
  "Non è previsto alcun termine": "Никакого срока не положено",
  "Quarantotto ore per l'avviso al giudice e altre quarantotto per la convalida. Se il termine passa senza convalida, il provvedimento è revocato e resta privo di effetto: il tempo qui non è una formalità, è la garanzia.":
    "Сорок восемь часов на извещение судьи и ещё сорок восемь на утверждение. Если срок прошёл без утверждения, мера отменяется и остаётся без силы: время здесь не условность, а порука.",
  "La pena e il processo": "Наказание и суд",
  "L'**articolo 27** contiene tre regole che stanno insieme: la responsabilità penale è **personale**, l'imputato **non è considerato colpevole** fino alla condanna definitiva, e le pene devono tendere alla **rieducazione** del condannato. Lo stesso articolo chiude con quattro parole: non è ammessa la pena di morte.":
    "В **статье 27** три правила, которые держатся вместе: уголовная ответственность **личная**, обвиняемый **не считается виновным** до окончательного приговора, а наказание должно вести к **исправлению** осуждённого. Та же статья кончается четырьмя словами: смертная казнь не допускается.",
  "L'**articolo 24** garantisce a tutti il diritto di agire in giudizio e la difesa in ogni stato del procedimento; ai non abbienti lo Stato assicura i mezzi per agire e difendersi, ed è da qui che nasce il **patrocinio a spese dello Stato**.":
    "**Статья 24** ручается каждому за право обратиться в суд и за защиту на любой ступени дела; неимущим государство обеспечивает средства, чтобы обратиться и защититься, и отсюда родилась **защита за счёт казны**.",
  "I doveri": "Обязанности",
  "Il **voto** (articolo 48) è definito insieme diritto e **dovere civico**: non è sanzionato, ma la Costituzione lo chiama con quel nome di proposito. L'**articolo 52** definisce la difesa della patria un sacro dovere. L'**articolo 54** chiede a tutti fedeltà alla Repubblica e, a chi ricopre funzioni pubbliche, di adempierle con disciplina e onore.":
    "**Голос** (статья 48) назван разом и правом, и **гражданским долгом**: наказания за него нет, но Конституция зовёт его так намеренно. **Статья 52** называет оборону отечества священным долгом. **Статья 54** требует от всех верности Республике, а от занимающих казённые должности — исполнять их с порядком и честью.",
  "L'**articolo 53** è il dovere che si incontra ogni anno: tutti concorrono alle spese pubbliche **in ragione della propria capacità contributiva**, e il sistema tributario è informato a criteri di **progressività**. Chi guadagna di più non paga solo di più: paga una quota maggiore. È il principio su cui poggiano gli scaglioni dell'IRPEF.":
    "**Статья 53** — та обязанность, с которой встречаешься каждый год: все участвуют в общественных расходах **по своей платёжной силе**, а податное устройство построено на **возрастании доли**. Кто зарабатывает больше, не просто платит больше: он платит бóльшую долю. На этом начале и стоят ступени IRPEF.",
  "Che cosa significa che il sistema tributario è progressivo?":
    "Что значит, что податное устройство возрастающее?",
  "Che le tasse aumentano ogni anno": "Что налоги растут каждый год",
  "Che chi ha un reddito più alto paga una quota proporzionalmente maggiore":
    "Что у кого доход выше, тот платит соразмерно бóльшую долю",
  "Che tutti pagano la stessa percentuale": "Что все платят одну и ту же долю",
  "Che si paga a rate": "Что платят по частям",
  "Progressività significa che l'aliquota cresce con il reddito, non solo l'importo. Una tassa uguale in percentuale per tutti sarebbe proporzionale, non progressiva: l'articolo 53 chiede espressamente la seconda.":
    "Возрастание значит, что с доходом растёт сама доля, а не только сумма. Налог, равный в долях для всех, был бы соразмерным, а не возрастающим: статья 53 прямо требует второго.",
  "Come definisce il voto la Costituzione?": "Как Конституция называет голосование?",
  "Solo un diritto": "Только правом",
  "Un diritto e un dovere civico": "Правом и гражданским долгом",
  "Un obbligo sanzionabile con una multa": "Обязанностью, за которую штрафуют",
  "Una facoltà riservata a chi paga le tasse":
    "Возможностью, положенной только тем, кто платит налоги",
  "L'articolo 48 usa entrambe le parole: il voto è un diritto e il suo esercizio è un dovere civico. Dovere civico però non vuol dire obbligo sanzionato — chi non vota non paga nulla.":
    "Статья 48 берёт оба слова: голос — это право, а пользование им — гражданский долг. Но гражданский долг не значит наказуемой обязанности: кто не голосует, не платит ничего.",
  "Molte di queste garanzie valgono per **tutti**, non solo per i cittadini: l'articolo 13 dice nessuno, l'articolo 21 dice tutti. I diritti riservati ai cittadini sono soprattutto quelli politici — il voto, l'accesso ai pubblici uffici.":
    "Многие из этих порук действуют для **всех**, а не только для граждан: статья 13 говорит «никто», статья 21 говорит «все». За гражданами оставлены прежде всего права государственные — голос, доступ к казённым должностям.",
  "La lingua italiana e le minoranze linguistiche": "Итальянский язык и языковые меньшинства",
  "Perché conta: l'Italia è unita da centosessant'anni, ma la sua unità linguistica è molto più recente — ed è ancora incompleta, per legge e di proposito.":
    "Почему это важно: Италия едина сто шестьдесят лет, но её языковое единство куда моложе — и до сих пор неполно, по закону и намеренно.",
  "Una lingua giovane": "Молодой язык",
  "L'italiano standard non nasce da un parlato ma da una **lingua scritta**: il fiorentino letterario del Trecento di **Dante, Petrarca e Boccaccio**, scelto nel Cinquecento come modello per tutta la penisola. Per secoli è stata la lingua della scrittura mentre si parlava altro.":
    "Общий итальянский родился не из живой речи, а из **письменного языка**: из книжного флорентийского четырнадцатого века, языка **Данте, Петрарки и Боккаччо**, выбранного в шестнадцатом веке образцом для всего полуострова. Веками это был язык письма, а говорили на другом.",
  "Alla proclamazione del Regno, nel 1861, chi sapeva usare l'italiano era una piccola minoranza: la stima più citata, quella del linguista **Tullio De Mauro**, parla di poco più del due per cento della popolazione, e altri studiosi arrivano a percentuali più alte, comunque lontane dalla maggioranza. A unificare la lingua sono stati la scuola dell'obbligo, la leva militare, l'emigrazione interna e — negli anni Cinquanta e Sessanta — la televisione.":
    "При провозглашении королевства в 1861 году владевшие итальянским были малым меньшинством: чаще всего приводят оценку языковеда **Туллио Де Мауро** — немногим более двух долей из ста, а другие учёные дают числа повыше, всё равно далёкие от большинства. Язык свели воедино обязательная школа, воинский набор, переселение внутри страны и — в пятидесятые и шестидесятые годы — телевидение.",
  "L'**Accademia della Crusca**, fondata a Firenze nel **1583**, è la più antica accademia linguistica del mondo ancora attiva. Il suo nome viene dall'immagine della farina separata dalla crusca: separare le parole buone dalle altre.":
    "**Академия делла Круска**, основанная во Флоренции в **1583 году**, — старейшая языковая академия мира из ныне действующих. Имя её идёт от образа муки, отделённой от отрубей: отделить добрые слова от прочих.",
  "Da quale parlata deriva l'italiano standard?": "Из какой речи вышел общий итальянский?",
  "Dal romano dell'epoca imperiale": "Из римского времён империи",
  "Dal fiorentino letterario del Trecento": "Из книжного флорентийского четырнадцатого века",
  "Dal milanese dell'Ottocento": "Из миланского девятнадцатого века",
  "Dal napoletano del Seicento": "Из неаполитанского семнадцатого века",
  "Il modello è il fiorentino di Dante, Petrarca e Boccaccio, adottato come lingua scritta comune nel Cinquecento. Il latino è l'antenato di tutte le parlate italiane, non il modello dell'italiano moderno.":
    "Образец — флорентийский Данте, Петрарки и Боккаччо, принятый общим письменным языком в шестнадцатом веке. Латынь — предок всех итальянских наречий, а не образец нынешнего итальянского.",
  "Dialetti o lingue?": "Наречия или языки?",
  "Quelli che in Italia si chiamano **dialetti** in genere non sono varianti dell'italiano: sono lingue romanze sorelle, discese dal latino per conto proprio. Il napoletano, il siciliano, il veneto o il piemontese non derivano dall'italiano più di quanto lo spagnolo derivi dal francese.":
    "То, что в Италии зовут **наречиями**, обыкновенно не разновидности итальянского: это романские языки-сёстры, сошедшие от латыни своим путём. Неаполитанский, сицилийский, венетский или пьемонтский происходят от итальянского не больше, чем испанский от французского.",
  "Il dialetto non è scomparso. Secondo le rilevazioni ISTAT una quota consistente della popolazione lo usa ancora, soprattutto in famiglia e fra amici, spesso alternandolo all'italiano nella stessa conversazione.":
    "Наречие не исчезло. По подсчётам ISTAT немалая доля населения им ещё пользуется, прежде всего в семье и среди друзей, часто чередуя его с итальянским в одном и том же разговоре.",
  "Le minoranze riconosciute": "Признанные меньшинства",
  "L'**articolo 6** della Costituzione impegna la Repubblica a tutelare con apposite norme le minoranze linguistiche. La **legge 482 del 1999** ha dato attuazione a quell'articolo dopo cinquant'anni, riconoscendo **dodici** minoranze storiche.":
    "**Статья 6** Конституции обязывает Республику особыми нормами оберегать языковые меньшинства. **Закон 482 от 1999 года** ввёл эту статью в действие через пятьдесят лет, признав **двенадцать** исторических меньшинств.",
  "Le dodici": "Эти двенадцать",
  "Albanesi, catalane, germaniche, greche, slovene, croate, e le popolazioni parlanti francese, franco-provenzale, friulano, ladino, occitano e sardo.":
    "Албанское, каталонское, германские, греческое, словенское, хорватское, а также люди, говорящие по-французски, по-франкопровансальски, по-фриульски, по-ладински, по-окситански и по-сардински.",
  "Alto Adige · Südtirol": "Альто-Адидже · Южный Тироль",
  "Il tedesco è equiparato all'italiano: atti bilingui, scuole separate per gruppo linguistico, e la proporzionale etnica per i posti pubblici.":
    "Немецкий уравнен с итальянским: бумаги на двух языках, отдельные школы для каждой языковой общины и раздел казённых мест по долям народностей.",
  "Valle d'Aosta": "Валле-д'Аоста",
  "Il francese è equiparato all'italiano fin dallo statuto speciale del 1948; nelle valli walser si parlano anche varietà germaniche.":
    "Французский уравнен с итальянским ещё с особого устава 1948 года; в вальзерских долинах говорят и на германских наречиях.",
  "Friuli Venezia Giulia": "Фриули-Венеция-Джулия",
  "Tutela dello sloveno nelle province di Trieste, Gorizia e Udine, e del friulano, parlato da alcune centinaia di migliaia di persone.":
    "Охрана словенского в провинциях Триест, Гориция и Удине, и фриульского, на котором говорят несколько сотен тысяч человек.",
  "Quale legge dà attuazione all'articolo 6 sulle minoranze linguistiche?":
    "Какой закон вводит в действие статью 6 о языковых меньшинствах?",
  "La legge 482 del 1999": "Закон 482 от 1999 года",
  "La legge 194 del 1978": "Закон 194 от 1978 года",
  "La legge 300 del 1970": "Закон 300 от 1970 года",
  "La legge 91 del 1992": "Закон 91 от 1992 года",
  "La legge 15 dicembre 1999, n. 482, riconosce dodici minoranze linguistiche storiche. La 300 del 1970 è lo Statuto dei lavoratori e la 91 del 1992 riguarda la cittadinanza: numeri facili da scambiare.":
    "Закон от 15 декабря 1999 года № 482 признаёт двенадцать исторических языковых меньшинств. Закон 300 от 1970 года — Устав работников, а 91 от 1992-го — о гражданстве: числа, которые легко перепутать.",
  "In quale regione il francese è equiparato all'italiano?":
    "В какой области французский уравнен с итальянским?",
  "In Piemonte": "В Пьемонте",
  "In Liguria": "В Лигурии",
  "In Valle d'Aosta": "В Валле-д'Аосте",
  "In Trentino-Alto Adige": "В Трентино — Альто-Адидже",
  "La Valle d'Aosta è bilingue italiano-francese per statuto speciale. In Trentino-Alto Adige la seconda lingua è il tedesco, e in Piemonte si parlano occitano e franco-provenzale, tutelati ma non equiparati.":
    "Валле-д'Аоста двуязычна, итальянско-французская, по особому уставу. В Трентино — Альто-Адидже второй язык немецкий, а в Пьемонте говорят по-окситански и по-франкопровансальски: эти языки оберегают, но не уравнивают.",
  "L'italiano non è dichiarato lingua ufficiale nei principi fondamentali della Costituzione. Lo si ricava dallo statuto del Trentino-Alto Adige e dalla legge 482, che lo chiama lingua ufficiale della Repubblica: una di quelle cose che sembrano ovvie e non sono scritte dove ci si aspetta.":
    "Итальянский не объявлен государственным языком в основных началах Конституции. Это выводят из устава Трентино — Альто-Адидже и из закона 482, который зовёт его государственным языком Республики: одна из тех вещей, что кажутся очевидными и не записаны там, где их ждёшь.",
  "Feste civili e religiose": "Праздники гражданские и церковные",
  "Perché conta: il calendario racconta un paese meglio di molti manuali. In Italia le feste nazionali sono dodici, e una tredicesima cambia da città a città.":
    "Почему это важно: месяцеслов рассказывает о стране лучше многих учебников. Народных праздников в Италии двенадцать, а тринадцатый в каждом городе свой.",
  "I giorni festivi": "Нерабочие дни",
  "Sono festivi per legge dodici giorni all'anno, più il patrono locale. Quattro sono civili, gli altri religiosi — l'equilibrio di un paese che è stato a lungo cattolico e ha scritto una costituzione laica.":
    "По закону в году двенадцать нерабочих дней, да ещё день местного покровителя. Четыре из них гражданские, остальные церковные — равновесие страны, которая долго была католической и написала светскую конституцию.",
  "Feste civili": "Гражданские праздники",
  "25 aprile, Liberazione · 1º maggio, festa dei lavoratori · 2 giugno, Repubblica. La quarta è il 1º gennaio, che è civile ma senza contenuto politico.":
    "25 апреля — Освобождение · 1 мая — праздник трудящихся · 2 июня — Республика. Четвёртый — 1 января, гражданский, но без государственного смысла.",
  "Feste religiose fisse": "Неподвижные церковные праздники",
  "6 gennaio Epifania · 15 agosto Assunzione · 1º novembre Ognissanti · 8 dicembre Immacolata · 25 dicembre Natale · 26 dicembre Santo Stefano.":
    "6 января — Богоявление · 15 августа — Успение · 1 ноября — Всех Святых · 8 декабря — Непорочное зачатие · 25 декабря — Рождество · 26 декабря — святого Стефана.",
  "Feste mobili": "Подвижные праздники",
  "La Pasqua e il Lunedì dell'Angelo, che tutti chiamano Pasquetta. La data dipende dal primo plenilunio di primavera.":
    "Пасха и Ангельский понедельник, который все зовут Паскветтой. Дата зависит от первого весеннего полнолуния.",
  "Il patrono": "Покровитель",
  "Ogni comune ha il suo giorno festivo: sant'Ambrogio a Milano il 7 dicembre, san Gennaro a Napoli il 19 settembre, santi Pietro e Paolo a Roma il 29 giugno.":
    "У каждой коммуны свой нерабочий день: святой Амвросий в Милане 7 декабря, святой Януарий в Неаполе 19 сентября, святые Пётр и Павел в Риме 29 июня.",
  "Quale di queste è una festa civile e non religiosa?":
    "Какой из этих праздников гражданский, а не церковный?",
  "L'Epifania": "Богоявление",
  "Il 25 aprile": "25 апреля",
  "Il 15 agosto": "15 августа",
  "L'8 dicembre": "8 декабря",
  "Il 25 aprile è l'anniversario della Liberazione, una data storica. Epifania, Assunzione e Immacolata sono ricorrenze religiose entrate nel calendario civile.":
    "25 апреля — годовщина Освобождения, дата историческая. Богоявление, Успение и Непорочное зачатие — церковные дни, вошедшие в гражданский месяцеслов.",
  "Ferragosto": "Феррагосто",
  "Il **15 agosto** la Chiesa celebra l'Assunzione, ma il nome della festa è più antico: **Ferragosto** viene dalle *feriae Augusti*, il riposo istituito dall'imperatore **Augusto nel 18 avanti Cristo** alla fine dei lavori agricoli. È la festa in cui l'Italia si ferma davvero: nelle settimane intorno chiudono uffici, negozi e interi quartieri delle città.":
    "**15 августа** Церковь празднует Успение, но имя праздника древнее: **Феррагосто** идёт от *feriae Augusti*, отдыха, установленного императором **Августом в 18 году до Рождества Христова** по окончании полевых работ. Это праздник, когда Италия и вправду останавливается: в недели вокруг него закрываются конторы, лавки и целые городские кварталы.",
  "I giorni della memoria": "Дни памяти",
  "Alcune ricorrenze non sono festive ma sono istituite per legge, e nelle scuole si osservano.":
    "Иные дни не нерабочие, но установлены законом, и в школах их соблюдают.",
  "27 gennaio": "27 января",
  "Giorno della Memoria, per le vittime della Shoah, delle leggi razziali e della deportazione. È la data della liberazione di Auschwitz.":
    "День памяти жертв Шоа, расовых законов и высылок. Это день освобождения Освенцима.",
  "10 febbraio": "10 февраля",
  "Giorno del Ricordo, per le vittime delle foibe e per l'esodo giuliano-dalmata.":
    "День поминовения жертв фойб и исхода жителей Юлийской Крайны и Далмации.",
  "9 maggio": "9 мая",
  "Giorno della memoria delle vittime del terrorismo, nell'anniversario del ritrovamento del corpo di Aldo Moro nel 1978.":
    "День памяти жертв терроризма, в годовщину того дня 1978 года, когда нашли тело Альдо Моро.",
  "Da dove viene il nome Ferragosto?": "Откуда идёт имя Феррагосто?",
  "Dal ferro battuto nelle fiere estive": "От кованого железа на летних ярмарках",
  "Dalle feriae Augusti, il riposo istituito dall'imperatore Augusto":
    "От feriae Augusti, отдыха, установленного императором Августом",
  "Dall'Assunzione di Maria": "От Успения Марии",
  "Dalla fiera del bestiame di agosto": "От августовской скотской ярмарки",
  "Il nome viene dalle feriae Augusti del 18 avanti Cristo, quindi da una festa romana precedente di secoli alla ricorrenza cristiana che poi si è sovrapposta alla stessa data.":
    "Имя идёт от feriae Augusti 18 года до Рождества Христова, то есть от римского праздника, на века более раннего, чем христианский день, который потом лёг на ту же дату.",
  "Le feste che non sono nel calendario": "Праздники, которых нет в месяцеслове",
  "Accanto alle date ufficiali ci sono ricorrenze che scandiscono l'anno senza essere festive: il **Carnevale**, che a Venezia e a Viareggio dura settimane; la **Befana** del 6 gennaio, che porta i doni ai bambini e riempie le calze di carbone di zucchero; il **palio** o la **sagra** di paese, che in molti comuni è l'evento più partecipato dell'anno.":
    "Рядом с положенными датами есть дни, которые размечают год, не будучи нерабочими: **карнавал**, что в Венеции и Виареджо длится неделями; **Бефана** 6 января, которая приносит детям подарки и набивает чулки сахарным углём; деревенские **палио** или **сагра**, во многих коммунах самое многолюдное событие года.",
  "Che cosa si ricorda il 27 gennaio?": "О чём напоминает 27 января?",
  "L'esodo giuliano-dalmata": "Об исходе жителей Юлийской Крайны и Далмации",
  "Le vittime della Shoah": "О жертвах Шоа",
  "Le vittime del terrorismo": "О жертвах терроризма",
  "La fine della Prima guerra mondiale": "О конце Первой мировой войны",
  "Il Giorno della Memoria cade il 27 gennaio, anniversario della liberazione di Auschwitz. Il Giorno del Ricordo, dedicato alle foibe e all'esodo, è il 10 febbraio: due date vicine e distinte.":
    "День памяти приходится на 27 января, годовщину освобождения Освенцима. День поминовения, отданный фойбам и исходу, — это 10 февраля: две даты рядом, но разные.",
  "Il patrono è giorno festivo **solo nel proprio comune**. Un ufficio milanese chiude il 7 dicembre; lo stesso giorno a Roma si lavora normalmente.":
    "День покровителя — нерабочий **только в своей коммуне**. Миланская контора 7 декабря закрыта; в тот же день в Риме работают как обычно.",
  "Il Parlamento": "Парламент",
  "L'ordinamento della Repubblica": "Устройство Республики",
  "Perché conta: in Italia le due camere hanno gli stessi identici poteri. È una scelta rara in Europa, e spiega da sola perché qui fare una legge richieda più tempo che altrove.":
    "Почему это важно: в Италии у двух палат совершенно одинаковая власть. В Европе такой выбор редок, и одним этим объясняется, почему здесь на закон уходит больше времени, чем где-либо.",
  "Due camere, gli stessi poteri": "Две палаты, одна и та же власть",
  "Il Parlamento è formato dalla **Camera dei deputati** e dal **Senato della Repubblica**. Il sistema si chiama **bicameralismo paritario** — spesso detto perfetto: le due camere fanno esattamente le stesse cose. Entrambe votano la fiducia al governo, entrambe devono approvare ogni legge, e nel medesimo testo.":
    "Парламент составляют **Палата депутатов** и **Сенат Республики**. Такое устройство зовут **равноправным двухпалатным**, а часто и совершенным: обе палаты делают ровно одно и то же. Обе выражают правительству доверие, обе должны принять всякий закон, и в одном и том же тексте.",
  "Se una camera modifica anche una virgola, il testo torna all'altra. L'andirivieni si chiama **navetta** e può durare a lungo. Nessun altro grande paese europeo funziona così: in Germania il Bundesrat interviene solo su certe materie, in Francia l'ultima parola spetta all'Assemblea nazionale.":
    "Если одна палата переставит хоть запятую, текст возвращается к другой. Это хождение туда-сюда зовут **челноком**, и длиться оно может долго. Ни одна другая большая страна Европы так не устроена: в Германии бундесрат вмешивается лишь в отдельные предметы, во Франции последнее слово за Национальным собранием.",
  "Camera dei deputati": "Палата депутатов",
  "400 deputati, a Palazzo Montecitorio. Si può essere eletti a partire da 25 anni.":
    "400 депутатов, во дворце Монтечиторио. Избранным можно стать с 25 лет.",
  "Senato della Repubblica": "Сенат Республики",
  "200 senatori elettivi, a Palazzo Madama. Per essere eletti servono 40 anni.":
    "200 избираемых сенаторов, во дворце Мадама. Чтобы быть избранным, нужно 40 лет.",
  "Senatori a vita": "Пожизненные сенаторы",
  "Gli ex Presidenti della Repubblica lo sono di diritto. Il Presidente in carica può nominarne fino a cinque per altissimi meriti.":
    "Бывшие президенты Республики становятся ими по праву. Действующий президент может назначить до пяти за наивысшие заслуги.",
  "Cinque anni": "Пять лет",
  "Tanto dura la legislatura, salvo scioglimento anticipato — che in Italia è tutt'altro che raro.":
    "Столько длится созыв, если только его не распустят раньше срока, — а в Италии это далеко не редкость.",
  "I numeri sono cambiati di recente: fino al 2022 i deputati erano **630** e i senatori elettivi **315**. Il taglio a 400 e 200 è stato deciso da una legge costituzionale confermata dal **referendum del 2020** e si è applicato dalle elezioni successive.":
    "Числа переменились недавно: до 2022 года депутатов было **630**, а избираемых сенаторов **315**. Урезание до 400 и 200 решил конституционный закон, подтверждённый **референдумом 2020 года**, и оно применяется с последующих выборов.",
  "Quanti deputati siedono oggi alla Camera?": "Сколько депутатов сидит сегодня в Палате?",
  "200": "200",
  "315": "315",
  "400": "400",
  "630": "630",
  "Quattrocento dal 2022, dopo il referendum del 2020. Seicentotrenta era il numero precedente, e duecento è quello dei senatori elettivi.":
    "Четыреста с 2022 года, после референдума 2020-го. Шестьсот тридцать было прежним числом, а двести — это избираемые сенаторы.",
  "Chi vota e chi può essere eletto": "Кто голосует и кого можно избрать",
  "Per entrambe le camere si vota a **diciotto anni**. Non è sempre stato così: fino alla legge costituzionale del **2021** il Senato si eleggeva solo dai venticinque anni in su, e per quasi settant'anni i giovani hanno avuto in mano una scheda sola su due.":
    "В обе палаты голосуют с **восемнадцати лет**. Так было не всегда: до конституционного закона **2021 года** Сенат избирали только с двадцати пяти, и почти семьдесят лет у молодых в руках был один бюллетень из двух.",
  "Che cosa significa bicameralismo paritario?":
    "Что значит равноправное двухпалатное устройство?",
  "Che le due camere hanno gli stessi poteri": "Что у двух палат одна и та же власть",
  "Che le due camere hanno lo stesso numero di membri":
    "Что в двух палатах одинаковое число членов",
  "Che le due camere si riuniscono sempre insieme": "Что две палаты всегда сходятся вместе",
  "Che ogni regione elegge lo stesso numero di parlamentari":
    "Что каждая область избирает одинаковое число членов парламента",
  "Paritario si riferisce ai poteri, non ai numeri: Camera e Senato hanno funzioni identiche pur avendo quattrocento membri l'una e duecento l'altro.":
    "Равноправие тут о власти, а не о числах: у Палаты и Сената одни и те же дела, хотя в одной четыреста членов, а в другом двести.",
  "Il referendum abrogativo": "Отменяющий референдум",
  "L'**articolo 75** consente a **cinquecentomila elettori** o a **cinque consigli regionali** di chiedere l'abrogazione di una legge. Il voto è valido solo se partecipa la **maggioranza degli aventi diritto**: sotto quella soglia il risultato non conta, quale che sia. Restano fuori le leggi tributarie e di bilancio, l'amnistia e l'indulto, e la ratifica dei trattati internazionali.":
    "**Статья 75** позволяет **пятистам тысячам избирателей** или **пяти областным советам** потребовать отмены закона. Голосование в силе, только если пришло **большинство имеющих право**: ниже этого порога итог не считается, каким бы он ни был. Вне этого остаются законы о податях и о казне, амнистия и помилование, а также утверждение договоров с другими странами.",
  "Alcuni referendum hanno cambiato il paese più di molte legislature: il **divorzio** nel 1974 e l'**aborto** nel 1981, in entrambi i casi con la conferma delle leggi che si voleva cancellare, e il **nucleare** nel 1987 e di nuovo nel 2011.":
    "Иные референдумы переменили страну сильнее многих созывов: о **разводе** в 1974 году и об **аборте** в 1981-м — в обоих случаях подтвердили те законы, которые хотели стереть, — и об **атомной силе** в 1987-м и снова в 2011-м.",
  "Chi è senatore a vita di diritto, senza bisogno di nomina?":
    "Кто становится пожизненным сенатором по праву, без назначения?",
  "Gli ex Presidenti del Consiglio": "Бывшие председатели Совета министров",
  "Gli ex Presidenti della Repubblica": "Бывшие президенты Республики",
  "I presidenti delle regioni a statuto speciale": "Главы областей с особым уставом",
  "I giudici della Corte costituzionale a fine mandato":
    "Судьи Конституционного суда по окончании срока",
  "Gli ex capi dello Stato lo diventano automaticamente. Gli altri senatori a vita sono nominati dal Presidente in carica, non più di cinque, per meriti nel campo sociale, scientifico, artistico o letterario.":
    "Бывшие главы государства становятся ими сами собой. Остальных пожизненных сенаторов назначает действующий президент, не более пяти, за заслуги в делах общественных, научных, художественных или словесных.",
  "Il quorum del cinquanta per cento riguarda il referendum **abrogativo**. Quello **confermativo** su una legge costituzionale non ne ha: due strumenti che portano lo stesso nome e funzionano in modo opposto.":
    "Порог в половину имеющих право касается **отменяющего** референдума. У **подтверждающего**, о конституционном законе, порога нет: два орудия под одним именем, работающие наоборот.",
  "Il Governo": "Правительство",
  "Perché conta: chi guida il governo in Italia non è eletto da nessuno con quel nome sulla scheda, e non può licenziare i propri ministri. Due fatti che spiegano molta della politica italiana.":
    "Почему это важно: того, кто ведёт правительство Италии, никто не избирает под этим именем в бюллетене, и он не может уволить своих министров. Два обстоятельства, которыми объясняется многое в итальянских делах.",
  "Come nasce un governo": "Как рождается правительство",
  "Il Governo è formato dal **Presidente del Consiglio dei ministri** e dai **ministri**, che insieme compongono il **Consiglio dei ministri**. La sede è **Palazzo Chigi**.":
    "Правительство составляют **председатель Совета министров** и **министры**, которые вместе и образуют **Совет министров**. Место его — **дворец Киджи**.",
  "L'**articolo 92** stabilisce il percorso: il Presidente della Repubblica nomina il Presidente del Consiglio e, **su proposta di quest'ultimo**, i ministri. Prima di nominare, il capo dello Stato svolge le **consultazioni**: riceve i gruppi parlamentari per capire chi possa avere una maggioranza.":
    "**Статья 92** задаёт путь: президент Республики назначает председателя Совета министров и, **по предложению последнего**, министров. Прежде чем назначать, глава государства ведёт **опрос**: принимает парламентские собрания, чтобы понять, у кого может быть большинство.",
  "Entro **dieci giorni** dalla formazione il governo si presenta alle camere per la **fiducia** (articolo 94). Serve quella di entrambe: un governo che l'ottiene alla Camera e la perde al Senato non esiste.":
    "В течение **десяти дней** после составления правительство является в палаты за **доверием** (статья 94). Нужно доверие обеих: правительства, которое получило его в Палате и потеряло в Сенате, не существует.",
  "Chi nomina il Presidente del Consiglio?": "Кто назначает председателя Совета министров?",
  "Gli elettori, con il voto alle politiche": "Избиратели, голосуя на общегосударственных выборах",
  "Il Presidente della Repubblica": "Президент Республики",
  "La Camera dei deputati": "Палата депутатов",
  "Il partito che ha preso più voti": "Партия, набравшая больше всех голосов",
  "Lo nomina il capo dello Stato, dopo le consultazioni. Il nome del candidato può comparire sui manifesti elettorali, ma sulla scheda si votano i partiti e i loro candidati, non il capo del governo.":
    "Его назначает глава государства, после опроса. Имя ставленника может стоять на предвыборных плакатах, но в бюллетене голосуют за партии и их кандидатов, а не за главу правительства.",
  "Un primo fra pari": "Первый среди равных",
  "Il Presidente del Consiglio **dirige la politica generale del governo** e ne è responsabile, ma **non può revocare un ministro**. È una differenza netta rispetto al cancelliere tedesco o al primo ministro britannico: un ministro che non si dimette resta al suo posto, e l'unica via è la crisi dell'intero governo.":
    "Председатель Совета министров **ведёт общую линию правительства** и отвечает за неё, но **отставить министра не может**. Это резкое отличие от немецкого канцлера или британского премьер-министра: министр, который не уходит сам, остаётся на своём месте, и единственный выход — обрушить всё правительство.",
  "Da qui la brevità dei governi italiani: dal 1946 se ne sono succeduti a un ritmo che dà una durata media di poco più di un anno. La continuità l'hanno garantita l'amministrazione e — spesso — gli stessi ministri, che cambiavano governo senza cambiare scrivania.":
    "Отсюда и краткость итальянских правительств: с 1946 года они сменялись так часто, что средний их век — немногим больше года. Непрерывность держали ведомства и — нередко — те же самые министры, которые меняли правительство, не меняя стола.",
  "Quando il governo fa le leggi": "Когда законы пишет правительство",
  "Decreto legge · art. 77": "Указ, имеющий силу закона · ст. 77",
  "In casi straordinari di necessità e urgenza. Entra in vigore subito, ma decade dall'inizio se il Parlamento non lo converte in legge entro sessanta giorni.":
    "В чрезвычайных случаях нужды и спешки. Вступает в силу сразу, но отпадает с самого начала, если парламент за шестьдесят дней не обратит его в закон.",
  "Decreto legislativo · art. 76": "Указ по поручению · ст. 76",
  "Il Parlamento delega il governo a scrivere una normativa, fissando principi, criteri e un termine. Serve per i testi lunghi e tecnici, come i codici.":
    "Парламент поручает правительству написать свод правил, задав начала, мерила и срок. Годится для длинных и мудрёных текстов вроде кодексов.",
  "Regolamento": "Правила",
  "Norme di dettaglio che attuano una legge. Non hanno forza di legge e non possono contraddirla.":
    "Подробные нормы, вводящие закон в действие. Силы закона они не имеют и противоречить ему не могут.",
  "Che cosa succede a un decreto legge non convertito entro sessanta giorni?":
    "Что бывает с указом, не обращённым в закон за шестьдесят дней?",
  "Diventa definitivo automaticamente": "Он сам собой становится окончательным",
  "Decade, e perde effetto fin dall'inizio": "Он отпадает и теряет силу с самого начала",
  "Resta in vigore altri sessanta giorni": "Он остаётся в силе ещё шестьдесят дней",
  "Passa alla Corte costituzionale": "Он переходит в Конституционный суд",
  "Decade retroattivamente: è come se non fosse mai esistito, e il Parlamento deve semmai regolare i rapporti sorti nel frattempo. Sessanta giorni è un termine severo, ed è per questo che i decreti si accumulano a fine scadenza.":
    "Он отпадает задним числом: словно его никогда и не было, а парламенту остаётся, если надо, уладить то, что за это время успело сложиться. Шестьдесят дней — срок строгий, и потому указы копятся к его концу.",
  "Come cade": "Как оно падает",
  "La **mozione di sfiducia** deve essere firmata da almeno un decimo dei componenti della camera e non può essere discussa prima di **tre giorni** dalla presentazione: il tempo serve a raffreddare gli animi. Nella pratica, però, i governi italiani cadono quasi sempre per **dimissioni**, non per un voto: un partito esce dalla maggioranza e il Presidente del Consiglio sale al Quirinale.":
    "**Предложение о недоверии** должно быть подписано не менее чем десятой частью членов палаты и не может обсуждаться раньше чем через **три дня** после внесения: время дано, чтобы страсти остыли. На деле, однако, итальянские правительства почти всегда падают из-за **отставки**, а не из-за голосования: партия выходит из большинства, и председатель Совета министров едет на Квиринал.",
  "Il Presidente del Consiglio può revocare un ministro?":
    "Может ли председатель Совета министров отставить министра?",
  "Sì, in qualsiasi momento": "Да, в любой час",
  "Sì, con l'accordo del Consiglio dei ministri": "Да, с согласия Совета министров",
  "No: può proporne la nomina, non la revoca":
    "Нет: он может предложить назначение, но не отставку",
  "Solo con l'autorizzazione del Parlamento": "Только с разрешения парламента",
  "L'articolo 92 gli dà il potere di proporre i ministri al Presidente della Repubblica, non quello di rimuoverli. Un ministro che rifiuta di dimettersi si toglie solo aprendo una crisi di governo.":
    "Статья 92 даёт ему власть предлагать министров президенту Республики, но не убирать их. Министра, который отказывается уйти, снимают только тем, что обрушивают правительство.",
  "Presidente della Repubblica e Presidente del Consiglio sono due cariche diverse e si confondono di continuo. Il primo sta al **Quirinale** e dura sette anni; il secondo sta a **Palazzo Chigi** e dura quanto la sua maggioranza.":
    "Президент Республики и председатель Совета министров — две разные должности, и их без конца путают. Первый сидит на **Квиринале** и держится семь лет; второй сидит во **дворце Киджи** и держится столько, сколько его большинство.",
  "Perché conta: sulla carta il capo dello Stato è una figura di garanzia che firma. Nei momenti di crisi è la persona che decide chi prova a governare — e in Italia le crisi non sono rare.":
    "Почему это важно: на бумаге глава государства — лицо-порука, которое ставит подпись. В час потрясения это человек, решающий, кто попробует править, — а потрясения в Италии не редкость.",
  "Come si elegge": "Как его избирают",
  "Il Presidente è eletto dal **Parlamento in seduta comune**, cioè deputati e senatori insieme, con l'aggiunta di **cinquantotto delegati regionali**: tre per ogni regione, uno solo per la Valle d'Aosta, che è troppo piccola per tre.":
    "Президента избирает **парламент на общем заседании**, то есть депутаты и сенаторы вместе, с прибавкой **пятидесяти восьми областных выборщиков**: по три от каждой области и только один от Валле-д'Аосты, слишком малой для трёх.",
  "Nei primi tre scrutini serve la maggioranza dei **due terzi**; dal quarto basta la **maggioranza assoluta**. Il voto è segreto, e la segretezza produce i **franchi tiratori**: parlamentari che votano contro le indicazioni del proprio gruppo senza che nessuno sappia chi siano. Alcune elezioni hanno richiesto oltre venti scrutini.":
    "В первых трёх турах нужно большинство в **две трети**; с четвёртого довольно **полного большинства**. Голосование тайное, а тайна рождает **вольных стрелков**: членов парламента, голосующих против воли своего собрания так, что никто не знает, кого винить. Иные выборы потребовали более двадцати туров.",
  "Sette anni": "Семь лет",
  "Il mandato è più lungo della legislatura di proposito: il Presidente non deve dipendere dal Parlamento che lo ha eletto.":
    "Срок нарочно длиннее созыва: президент не должен зависеть от того парламента, который его избрал.",
  "Cinquant'anni": "Пятьдесят лет",
  "L'età minima. Servono anche la cittadinanza italiana e il godimento dei diritti civili e politici.":
    "Наименьший возраст. Нужны ещё итальянское гражданство и пользование гражданскими и государственными правами.",
  "Il Quirinale": "Квиринал",
  "La residenza ufficiale, un palazzo che è stato dei papi e poi dei re prima di essere della Repubblica.":
    "Положенное обиталище — дворец, что был папским, потом королевским, а уже потом стал республиканским.",
  "Quanto dura il mandato del Presidente della Repubblica?":
    "Каков срок полномочий президента Республики?",
  "Quattro anni": "Четыре года",
  "Nove anni": "Девять лет",
  "Sette anni, due più della legislatura. Cinque è la durata delle camere e nove quella dei giudici costituzionali.":
    "Семь лет, на два больше созыва. Пять — это срок палат, а девять — срок конституционных судей.",
  "Che cosa può fare": "Что он может",
  "**Promulga le leggi**, e prima di firmarle può **rinviarle una volta** alle camere con un messaggio motivato. Se il Parlamento riapprova lo stesso testo, deve promulgarlo: il rinvio è un freno, non un veto.":
    "**Обнародует законы**, а прежде чем подписать, может **один раз вернуть** их палатам с обоснованным посланием. Если парламент примет тот же текст снова, обнародовать придётся: возврат — это тормоз, а не запрет.",
  "**Scioglie le camere**, sentiti i loro presidenti, e non può farlo negli ultimi sei mesi del proprio mandato — il cosiddetto **semestre bianco**, pensato perché non usi lo scioglimento per farsi rieleggere. **Nomina** il Presidente del Consiglio e cinque giudici costituzionali, **presiede** il Consiglio superiore della magistratura e il Consiglio supremo di difesa, **comanda** le forze armate, **concede la grazia** e **ratifica** i trattati.":
    "**Распускает палаты**, выслушав их председателей, и не может этого делать в последние шесть месяцев своего срока — это так называемое **белое полугодие**, задуманное, чтобы он не пускал роспуск на своё переизбрание. **Назначает** председателя Совета министров и пятерых конституционных судей, **возглавляет** Высший совет судейского сословия и Верховный совет обороны, **начальствует** над вооружёнными силами, **милует** и **утверждает** договоры.",
  "Quante volte il Presidente può rinviare una legge alle camere?":
    "Сколько раз президент может вернуть закон палатам?",
  "Nessuna: deve promulgare quello che riceve": "Ни разу: он обязан обнародовать то, что получил",
  "Una sola volta": "Только один раз",
  "Due volte": "Два раза",
  "Tutte le volte che ritiene necessario": "Столько раз, сколько сочтёт нужным",
  "Un solo rinvio, con messaggio motivato. Se le camere riapprovano il medesimo testo, la promulgazione diventa un atto dovuto: il Presidente frena, non blocca.":
    "Один возврат, с обоснованным посланием. Если палаты примут тот же текст снова, обнародование становится обязанностью: президент тормозит, а не преграждает.",
  "Di che cosa risponde": "За что он отвечает",
  "Il Presidente **non è responsabile** degli atti compiuti nell'esercizio delle sue funzioni, con due eccezioni: **alto tradimento** e **attentato alla Costituzione**, per i quali lo mette in stato d'accusa il Parlamento in seduta comune e lo giudica la Corte costituzionale integrata da sedici membri esterni.":
    "Президент **не несёт ответственности** за то, что делает при исполнении своих обязанностей, с двумя исключениями: **государственная измена** и **посягательство на Конституцию**; по ним обвинение выдвигает парламент на общем заседании, а судит Конституционный суд, пополненный шестнадцатью сторонними членами.",
  "Ogni suo atto richiede la **controfirma** del ministro proponente, che se ne assume la responsabilità (articolo 89). È il meccanismo che tiene insieme un capo dello Stato irresponsabile e un sistema in cui qualcuno deve pur rispondere.":
    "Всякий его акт требует **скрепы** министра, который его предложил и который берёт на себя ответственность (статья 89). Это тот приём, которым держатся вместе не отвечающий ни за что глава государства и порядок, где отвечать кто-то всё же должен.",
  "Il mandato non prevede limiti di rielezione, ma per sessantasette anni nessuno è stato rieletto. È successo due volte in tempi recenti, entrambe in una crisi in cui il Parlamento non trovava un altro nome.":
    "Пределов переизбранию срок не ставит, но шестьдесят семь лет никого не переизбирали. Это случилось дважды в недавнее время, и оба раза в такое смятение, когда парламент не находил другого имени.",
  "Che cos'è il semestre bianco?": "Что такое белое полугодие?",
  "I primi sei mesi di mandato, in cui il Presidente non firma leggi":
    "Первые шесть месяцев срока, когда президент не подписывает законов",
  "Gli ultimi sei mesi di mandato, in cui non può sciogliere le camere":
    "Последние шесть месяцев срока, когда он не может распустить палаты",
  "Il periodo fra lo scioglimento e le elezioni": "Время между роспуском и выборами",
  "La pausa estiva dei lavori parlamentari": "Летний перерыв в работе парламента",
  "Gli ultimi sei mesi. La regola esiste perché un Presidente in scadenza non possa sciogliere il Parlamento e farsene eleggere uno più favorevole alla propria rielezione.":
    "Последние шесть месяцев. Правило есть затем, чтобы президент на исходе срока не мог распустить парламент и получить другой, посговорчивее к его переизбранию.",
  "Il Presidente non governa. Non decide le tasse, non presenta il bilancio, non guida la politica estera: sceglie chi ci prova, e controlla che si resti dentro la Costituzione.":
    "Президент не правит. Он не решает о налогах, не вносит роспись казны, не ведёт дела с другими странами: он выбирает того, кто попробует, и следит, чтобы не выходили за Конституцию.",
  "La giustizia e la Corte costituzionale": "Правосудие и Конституционный суд",
  "Perché conta: in Italia i giudici non sono nominati dal potere politico e i pubblici ministeri non scelgono quali reati perseguire. Sono due scelte precise, e sono anche due dei temi più discussi del paese.":
    "Почему это важно: в Италии судей не назначает государственная власть, а обвинители не выбирают, какие преступления преследовать. Это два обдуманных решения и два самых спорных предмета в стране.",
  "Un ordine autonomo": "Самостоятельное сословие",
  "L'**articolo 104** definisce la magistratura un **ordine autonomo e indipendente da ogni altro potere**. Non si dice potere ma ordine, e la differenza è voluta: i giudici non rappresentano nessuno e non rispondono a un elettorato.":
    "**Статья 104** называет судейство **сословием самостоятельным и независимым от всякой иной власти**. Сказано не «власть», а «сословие», и разница эта нарочная: судьи никого не представляют и ни перед какими избирателями не отвечают.",
  "L'**articolo 101** completa il quadro: i giudici sono **soggetti soltanto alla legge**. Si entra in magistratura per **concorso**, non per nomina, e la carriera è gestita dal **Consiglio superiore della magistratura**, presieduto dal Presidente della Repubblica.":
    "**Статья 101** довершает картину: судьи **подчинены только закону**. В судейство входят **по состязанию**, а не по назначению, а движением по службе ведает **Высший совет судейского сословия**, во главе которого стоит президент Республики.",
  "L'**articolo 112** impone al pubblico ministero l'**obbligatorietà dell'azione penale**: ricevuta una notizia di reato deve procedere. In teoria toglie ogni discrezionalità politica; in pratica, con più fascicoli che magistrati, la scelta si sposta sulle priorità.":
    "**Статья 112** возлагает на обвинителя **обязательность уголовного преследования**: получив весть о преступлении, он обязан начать дело. В замысле это отнимает всякую свободу выбора по государственным соображениям; на деле, когда дел больше, чем судейских, выбор перемещается на очерёдность.",
  "Come si diventa magistrato in Italia?": "Как в Италии становятся судейским?",
  "Per nomina del ministro della Giustizia": "По назначению министра правосудия",
  "Per elezione popolare": "Всенародным избранием",
  "Per concorso pubblico": "По открытому состязанию",
  "Per designazione del Parlamento": "По указанию парламента",
  "Per concorso. È la scelta che tiene la carriera fuori dalle mani della politica, e la ragione per cui il CSM, non il ministro, decide trasferimenti e promozioni.":
    "По состязанию. Это и держит службу вне рук государственных дельцов, и потому переводами и повышениями ведает CSM, а не министр.",
  "Tre gradi di giudizio": "Три ступени суда",
  "Primo grado": "Первая ступень",
  "Giudice di pace, tribunale o corte d'assise secondo la materia e la gravità. Qui si accertano i fatti.":
    "Мировой судья, трибунал или суд присяжных, смотря по предмету и по тяжести. Здесь устанавливают, что было.",
  "Appello": "Обжалование",
  "La corte d'appello riesamina il caso, fatti compresi. Può ribaltare la decisione.":
    "Суд обжалования разбирает дело заново, вместе с обстоятельствами. Он может перевернуть решение.",
  "Cassazione": "Кассация",
  "La Corte suprema non rivede i fatti: controlla che la legge sia stata applicata correttamente. È il giudizio di legittimità.":
    "Верховный суд не пересматривает обстоятельств: он проверяет, верно ли применён закон. Это суд о законности.",
  "Finché la Cassazione non ha deciso, la sentenza non è **definitiva** — in italiano si dice passata in giudicato — e l'imputato resta non colpevole a norma dell'articolo 27. La lunghezza dei processi civili e penali è da decenni il problema più segnalato all'Italia dalle istituzioni europee.":
    "Пока кассация не решила, приговор не **окончателен** — по-итальянски говорят, что он не вступил в законную силу, — и обвиняемый остаётся невиновным по статье 27. Долгота дел, гражданских и уголовных, десятилетиями остаётся тем, на что европейские учреждения указывают Италии чаще всего.",
  "Che cosa esamina la Corte di cassazione?": "Что разбирает кассационный суд?",
  "I fatti, una terza volta": "Обстоятельства, в третий раз",
  "La corretta applicazione della legge": "Правильность применения закона",
  "Solo le sentenze di condanna": "Только обвинительные приговоры",
  "La legittimità costituzionale delle leggi": "Соответствие законов Конституции",
  "La Cassazione giudica la legittimità, non il merito: non stabilisce se il fatto sia avvenuto, ma se il diritto sia stato applicato bene. La legittimità costituzionale delle leggi spetta invece alla Corte costituzionale.":
    "Кассация судит о законности, а не о существе дела: она устанавливает не то, было ли событие, а то, верно ли применено право. А соответствие законов Конституции — дело Конституционного суда.",
  "La Corte costituzionale": "Конституционный суд",
  "È un organo a sé, che non fa parte della magistratura ordinaria. Ha **quindici giudici**, nominati in tre modi diversi perché nessun potere possa comporla da solo: **cinque** dal Presidente della Repubblica, **cinque** dal Parlamento in seduta comune, **cinque** dalle supreme magistrature.":
    "Это отдельное учреждение, в обычное судейство не входящее. В нём **пятнадцать судей**, поставленных тремя разными путями, чтобы никакая власть не могла составить его в одиночку: **пятерых** ставит президент Республики, **пятерых** — парламент на общем заседании, **пятерых** — высшие судебные места.",
  "Durano **nove anni** e **non sono rieleggibili**: un mandato lungo e senza rinnovo mette il giudice al riparo da chi lo ha nominato. La sede è **Palazzo della Consulta**, e per questo la Corte si chiama spesso semplicemente la Consulta.":
    "Служат они **девять лет** и **переизбранию не подлежат**: долгий срок без продления укрывает судью от того, кто его поставил. Место его — **дворец Консульта**, и потому суд часто зовут попросту Консультой.",
  "Giudica sulla **legittimità costituzionale** delle leggi, sui **conflitti di attribuzione** fra poteri dello Stato e fra Stato e regioni, sulle **accuse** contro il Presidente della Repubblica, e sull'**ammissibilità dei referendum** abrogativi. Una legge dichiarata incostituzionale cessa di avere efficacia dal giorno dopo la pubblicazione della sentenza.":
    "Он судит о **соответствии законов Конституции**, о **спорах о ведении** между властями государства и между государством и областями, об **обвинениях** против президента Республики и о **допустимости отменяющих референдумов**. Закон, объявленный противоречащим Конституции, теряет силу со дня, следующего за оглашением решения.",
  "Come sono scelti i quindici giudici della Corte costituzionale?":
    "Как выбирают пятнадцать судей Конституционного суда?",
  "Tutti dal Parlamento in seduta comune": "Всех ставит парламент на общем заседании",
  "Cinque dal Presidente, cinque dal Parlamento, cinque dalle supreme magistrature":
    "Пятерых — президент, пятерых — парламент, пятерых — высшие судебные места",
  "Tutti dal Presidente della Repubblica": "Всех ставит президент Республики",
  "Per concorso, come i magistrati ordinari": "По состязанию, как обычных судейских",
  "Tre origini diverse, cinque ciascuna, perché nessun potere possa formare la Corte da solo. Il mandato di nove anni non rinnovabile completa la garanzia.":
    "Три разных источника, по пять от каждого, чтобы никакая власть не могла составить суд в одиночку. Девятилетний срок без продления довершает поруку.",
  "Corte costituzionale e Corte di cassazione sono due organi distinti. La prima giudica le **leggi**, la seconda le **sentenze**. Che stiano entrambe a Roma e comincino con la stessa parola non aiuta.":
    "Конституционный суд и кассационный суд — два разных учреждения. Первый судит **законы**, второй — **приговоры**. То, что оба сидят в Риме и начинаются с одного слова, делу не помогает.",
  "Regioni, province e comuni": "Области, провинции и коммуны",
  "Perché conta: l'articolo che elenca gli enti della Repubblica comincia dal comune e finisce con lo Stato. L'ordine non è casuale, ed è la chiave per capire il rapporto fra centro e territorio.":
    "Почему это важно: статья, перечисляющая составные части Республики, начинается с коммуны и кончается государством. Порядок этот не случаен, и в нём ключ к тому, как связаны средоточие и земли.",
  "Dal basso verso l'alto": "Снизу вверх",
  "L'**articolo 114** dice che la Repubblica è costituita dai **comuni**, dalle **province**, dalle **città metropolitane**, dalle **regioni** e dallo **Stato**. Elencare lo Stato per ultimo, dopo il comune, fu una scelta della riforma del **Titolo V** nel **2001**: i territori non sono articolazioni dello Stato, sono elementi della Repubblica al pari suo.":
    "**Статья 114** говорит, что Республику составляют **коммуны**, **провинции**, **большие города**, **области** и **государство**. Поставить государство последним, после коммуны, решила перемена **раздела V** в **2001 году**: земли не части государства, они составляют Республику наравне с ним.",
  "La riforma ha anche ribaltato il criterio delle competenze. Prima le regioni potevano legiferare solo nelle materie elencate; oggi l'elenco è quello delle materie **esclusive dello Stato** — difesa, moneta, giustizia, immigrazione — e delle materie **concorrenti**, mentre tutto ciò che non è elencato spetta alle **regioni**.":
    "Та же перемена перевернула и мерило ведения. Прежде области могли издавать законы только по перечисленным предметам; ныне перечислены предметы **исключительно государственные** — оборона, деньги, правосудие, переселение — и предметы **совместные**, а всё, чего в перечне нет, отходит **областям**.",
  "Venti regioni, cinque diverse dalle altre":
    "Двадцать областей, из них пять непохожих на прочие",
  "Le regioni sono **venti**, e **cinque** hanno uno **statuto speciale** approvato con legge costituzionale. Non è un privilegio arbitrario: ciascuna ha una ragione storica precisa.":
    "Областей **двадцать**, и у **пяти** есть **особый устав**, принятый конституционным законом. Это не произвольное преимущество: у каждой своя вполне определённая историческая причина.",
  "Sicilia e Sardegna": "Сицилия и Сардиния",
  "Isole, con un movimento autonomista forte nell'immediato dopoguerra. La Sicilia ottenne lo statuto nel 1946, prima ancora della Costituzione.":
    "Острова, где сразу после войны было сильное движение за самостоятельность. Сицилия получила устав в 1946 году, ещё до Конституции.",
  "Trentino-Alto Adige": "Трентино — Альто-Адидже",
  "La minoranza di lingua tedesca. Le competenze vere stanno nelle due province autonome di Trento e Bolzano più che nella regione.":
    "Меньшинство немецкого языка. Настоящее ведение лежит скорее на двух самостоятельных провинциях, Тренто и Больцано, чем на самой области.",
  "Il confine orientale, conteso fino agli anni Cinquanta, e le minoranze slovena e friulana.":
    "Восточная граница, спорная до пятидесятых годов, и словенское с фриульским меньшинства.",
  "La minoranza francofona, in una regione così piccola da avere un solo consiglio che fa anche da provincia.":
    "Франкоязычное меньшинство, в области настолько малой, что один её совет служит и провинциальным.",
  "Quante regioni italiane hanno uno statuto speciale?":
    "У скольких итальянских областей особый устав?",
  "Tre": "У трёх",
  "Cinque": "У пяти",
  "Otto": "У восьми",
  "Venti: ogni regione ha il proprio statuto": "У двадцати: у каждой области свой устав",
  "Cinque: Sicilia, Sardegna, Trentino-Alto Adige, Friuli Venezia Giulia e Valle d'Aosta. Le altre quindici hanno statuti ordinari, che non sono leggi costituzionali.":
    "У пяти: Сицилия, Сардиния, Трентино — Альто-Адидже, Фриули-Венеция-Джулия и Валле-д'Аоста. У остальных пятнадцати уставы обычные, и это не конституционные законы.",
  "Chi governa una regione": "Кто правит областью",
  "Ogni regione ha un **Consiglio regionale**, che fa le leggi, una **Giunta**, che governa, e un **Presidente della Regione**, eletto direttamente dai cittadini nella quasi totalità dei casi. Lo si sente chiamare **governatore**: è un uso giornalistico, non un titolo che esista nella Costituzione.":
    "У каждой области есть **областной совет**, который издаёт законы, **управа**, которая правит, и **глава области**, почти всегда избираемый гражданами напрямую. Его зовут **губернатором**: это газетное словцо, а не звание, которое было бы в Конституции.",
  "La regola che tiene insieme il sistema è chiamata dagli addetti ai lavori *simul stabunt, simul cadent*: se il Presidente cade, cade con lui l'intero consiglio e si torna al voto. Serve a evitare che una regione resti senza guida per anni.":
    "Правило, на котором всё держится, знающие люди зовут *simul stabunt, simul cadent*: падёт глава области — падёт с ним и весь совет, и снова к выборам. Оно не даёт области годами остаться без вожатого.",
  "Comuni e città metropolitane": "Коммуны и большие города",
  "I comuni sono circa **ottomila**, dalle metropoli ai paesi di poche decine di abitanti. Il **sindaco** è eletto **direttamente** dai cittadini insieme al consiglio comunale, e nei comuni sopra i quindicimila abitanti si vota su due turni con ballottaggio. Il municipio è dove si fa quasi tutto ciò che riguarda la vita quotidiana: residenza, carta d'identità, stato civile, scuole dell'infanzia, rifiuti, urbanistica.":
    "Коммун около **восьми тысяч**, от огромных городов до деревень в несколько десятков жителей. **Синдако**, городской голова, избирается **напрямую** гражданами вместе с коммунальным советом, а в коммунах свыше пятнадцати тысяч жителей голосуют в два тура. Городская управа — то место, где делается почти всё повседневное: прописка, carta d'identità, записи гражданского состояния, детские сады, мусор, застройка.",
  "Le **città metropolitane** sono **quattordici** e dal 2015 hanno sostituito le province nei territori dei grandi capoluoghi. Il sindaco del comune capoluogo ne è anche sindaco metropolitano.":
    "**Больших городов** — **четырнадцать**, и с 2015 года они заменили провинции на землях крупных главных городов. Синдако главного города бывает при этом и синдако большого города.",
  "Chi elegge il sindaco di un comune italiano?": "Кто избирает синдако итальянской коммуны?",
  "Il consiglio comunale, fra i propri membri": "Коммунальный совет, из своих же членов",
  "I cittadini, con voto diretto": "Граждане, прямым голосованием",
  "Il prefetto, che rappresenta il governo": "Префект, который представляет правительство",
  "Il presidente della regione": "Глава области",
  "Direttamente i cittadini, dal 1993. Prima lo eleggeva il consiglio comunale, e i sindaci cambiavano ogni volta che cambiavano gli equilibri fra i partiti in aula.":
    "Напрямую граждане, с 1993 года. Прежде его избирал коммунальный совет, и синдако менялись всякий раз, когда в зале менялось равновесие между партиями.",
  "In quale ordine l'articolo 114 elenca gli enti della Repubblica?":
    "В каком порядке статья 114 перечисляет составные части Республики?",
  "Dallo Stato al comune": "От государства к коммуне",
  "Dal comune allo Stato": "От коммуны к государству",
  "In ordine alfabetico": "По азбуке",
  "Per numero di abitanti": "По числу жителей",
  "Comuni, province, città metropolitane, regioni, Stato. L'ordine fu invertito dalla riforma del 2001 per dire che i territori non discendono dallo Stato ma stanno accanto ad esso.":
    "Коммуны, провинции, большие города, области, государство. Порядок перевернула перемена 2001 года, чтобы сказать: земли не происходят от государства, они стоят рядом с ним.",
  "Il **prefetto** non è un organo della regione né del comune: rappresenta il **governo** in ogni provincia e dipende dal Ministero dell'interno. È lui che riceve le domande di cittadinanza e firma gli accordi di integrazione.":
    "**Префект** не орган ни области, ни коммуны: он представляет **правительство** в каждой провинции и подчинён министерству внутренних дел. Именно он принимает прошения о гражданстве и подписывает уговоры о вживании в общество.",
  "Da Roma ai Comuni": "От Рима к городам-коммунам",
  "Storia d'Italia": "История Италии",
  "Perché si comincia da qui: fra la caduta dell'impero e l'Unità passano quasi quattordici secoli in cui l'Italia non è uno Stato. Chi non tiene presente quel vuoto non capisce né i campanili né le cento cucine.":
    "Почему начинают отсюда: между падением империи и объединением проходит почти четырнадцать веков, в которые Италия не была государством. Кто не держит в уме эту пустоту, не поймёт ни колоколен, ни ста разных кухонь.",
  "Che cosa lascia Roma": "Что оставил Рим",
  "La tradizione data la fondazione di Roma al **753 avanti Cristo**, la repubblica al **509** e l'impero al **27 avanti Cristo**, quando Ottaviano riceve il titolo di Augusto. L'impero d'Occidente finisce nel **476**, con la deposizione di Romolo Augustolo.":
    "Предание относит основание Рима к **753 году до Рождества Христова**, республику — к **509-му**, а империю — к **27 году до Рождества Христова**, когда Октавиан получает звание Августа. Западная империя кончается в **476 году**, низложением Ромула Августула.",
  "Ciò che resta non è un territorio ma un'eredità: la **lingua latina**, da cui discendono l'italiano e le altre lingue romanze; il **diritto romano**, che è ancora l'ossatura del codice civile; le **strade**, molte delle quali ricalcate dalle statali di oggi; e l'idea stessa di città come luogo di cittadinanza.":
    "Осталась не земля, а наследство: **латинский язык**, от которого пошли итальянский и другие романские языки; **римское право**, до сих пор остов гражданского кодекса; **дороги**, по многим из которых проложены нынешние государственные шоссе; и само понятие города как места гражданства.",
  "In quale anno finisce l'Impero romano d'Occidente?":
    "В каком году кончается Западная Римская империя?",
  "Nel 27 avanti Cristo": "В 27 году до Рождества Христова",
  "Nel 313": "В 313 году",
  "Nel 476": "В 476 году",
  "Nel 1453": "В 1453 году",
  "Il 476 è la deposizione di Romolo Augustolo. Il 1453 è la caduta di Costantinopoli, cioè la fine dell'impero d'Oriente, quasi mille anni più tardi.":
    "476-й — это низложение Ромула Августула. 1453-й — падение Константинополя, то есть конец Восточной империи, почти тысячу лет спустя.",
  "Un mosaico di poteri": "Пёстрая мозаика властей",
  "Dopo il 476 la penisola non torna unita per quasi quattordici secoli. Arrivano i **Longobardi** nel **568**, che si insediano al centro e al nord; i **Franchi** di Carlo Magno li sconfiggono nel **774**; nel frattempo nasce lo **Stato della Chiesa**, che taglia l'Italia a metà e resterà lì fino al 1870.":
    "После 476 года полуостров не собирается воедино почти четырнадцать веков. В **568 году** приходят **лангобарды** и садятся в середине и на севере; **франки** Карла Великого разбивают их в **774-м**; тем временем рождается **Церковное государство**, которое режет Италию надвое и простоит до 1870 года.",
  "Il Sud normanno": "Норманнский Юг",
  "Nel 1130 i Normanni fondano il Regno di Sicilia, il primo Stato accentrato d'Europa, con Palermo capitale multilingue di arabi, greci, latini ed ebrei.":
    "В 1130 году норманны основывают Сицилийское королевство, первое в Европе государство со средоточием власти, а Палермо становится многоязычной столицей арабов, греков, латинян и евреев.",
  "I Comuni del Nord": "Города-коммуны Севера",
  "Le città padane si governano da sé attraverso consoli e assemblee, e comprano o strappano l'autonomia all'imperatore.":
    "Города Паданской равнины правят собой сами через консулов и сходы и выкупают или вырывают у императора свою самостоятельность.",
  "Lo Stato della Chiesa": "Церковное государство",
  "Il papa è anche sovrano temporale su una fascia che va dal Lazio alla Romagna. La divisione fra Nord e Sud passa di lì.":
    "Папа ещё и мирской государь над полосой земли от Лацио до Романьи. Разделение Севера и Юга проходит как раз тут.",
  "Le Repubbliche marinare": "Морские республики",
  "Amalfi, Pisa, Genova e Venezia costruiscono flotte, colonie e banche, e portano in Italia la contabilità e la lettera di cambio.":
    "Амальфи, Пиза, Генуя и Венеция строят флоты, поселения на чужих берегах и банки и приносят в Италию счетоводство и переводный вексель.",
  "Legnano e la pace di Costanza": "Леньяно и Констанцский мир",
  "Nel **1176** i Comuni riuniti nella **Lega Lombarda** sconfiggono a **Legnano** l'imperatore Federico Barbarossa. La **pace di Costanza** del **1183** riconosce alle città il diritto di eleggere i propri magistrati e di amministrarsi.":
    "В **1176 году** города, сошедшиеся в **Ломбардский союз**, разбивают при **Леньяно** императора Фридриха Барбароссу. **Констанцский мир** **1183 года** признаёт за городами право избирать своих правителей и управляться самим.",
  "È un fatto senza paragoni nell'Europa del tempo: decine di città indipendenti, ciascuna con leggi, monete e milizie proprie, nel raggio di poche decine di chilometri. Da lì viene il **campanilismo**, che non è un difetto caratteriale ma il residuo di secoli in cui il campanile accanto era davvero un altro Stato.":
    "В тогдашней Европе этому нет равных: десятки независимых городов, у каждого свои законы, деньги и ополчение, и всё это в нескольких десятках километров друг от друга. Отсюда и **колокольная спесь**, которая вовсе не изъян нрава, а осадок веков, когда соседняя колокольня и вправду была другим государством.",
  "Che cosa riconosce ai Comuni la pace di Costanza del 1183?":
    "Что признаёт за городами-коммунами Констанцский мир 1183 года?",
  "Il diritto di governarsi da sé, eleggendo i propri magistrati":
    "Право править собой самим, избирая своих правителей",
  "L'esenzione da ogni tassa imperiale per sempre":
    "Освобождение от всякой имперской подати навсегда",
  "Il diritto di battere moneta d'oro": "Право чеканить золотую монету",
  "L'unione in un solo regno del Nord": "Соединение в одно северное королевство",
  "Dopo Legnano l'imperatore riconosce l'autogoverno cittadino. Le città restano formalmente dentro l'impero, ma amministrano sé stesse: è il compromesso che rende possibile l'età dei Comuni.":
    "После Леньяно император признаёт городское самоуправление. На бумаге города остаются в империи, но управляются сами: эта уступка и делает возможным век коммун.",
  "Dai Comuni alle Signorie": "От коммун к синьориям",
  "Nel Trecento le lotte fra fazioni logorano le istituzioni comunali, e in una città dopo l'altra un uomo o una famiglia prende il potere in modo stabile: nascono le **Signorie**, che nel secolo successivo diventano **Principati** riconosciuti. I Visconti e poi gli Sforza a Milano, i Medici a Firenze, gli Este a Ferrara, i Gonzaga a Mantova.":
    "В четырнадцатом веке распри между сторонами изнашивают коммунальные учреждения, и в одном городе за другим человек или семья прочно берут власть: рождаются **синьории**, которые в следующем веке становятся признанными **княжествами**. Висконти, а затем Сфорца в Милане, Медичи во Флоренции, Эсте в Ферраре, Гонзага в Мантуе.",
  "Venezia fa eccezione e resta una repubblica per oltre mille anni, fino al 1797: la **Serenissima**, governata da un doge eletto e da un consiglio di patrizi.":
    "Венеция — исключение: она остаётся республикой более тысячи лет, до 1797 года. Это **Светлейшая**, которой правят избираемый дож и совет знати.",
  "Quale città mantiene un ordinamento repubblicano fino al 1797?":
    "Какой город сохраняет республиканское устройство до 1797 года?",
  "Milano": "Милан",
  "Firenze": "Флоренция",
  "Venezia": "Венеция",
  "Napoli": "Неаполь",
  "La Repubblica di Venezia dura oltre mille anni e finisce solo con l'arrivo di Napoleone. Milano e Firenze passano invece a signorie ereditarie, e Napoli è un regno fin dal Medioevo.":
    "Венецианская республика длится больше тысячи лет и кончается только с приходом Наполеона. Милан и Флоренция переходят к наследственным синьориям, а Неаполь — королевство ещё со Средних веков.",
  "Medioevo non significa immobilità. Fra il 1100 e il 1300 l'Italia inventa la banca moderna, la partita doppia, l'università come corporazione — Bologna, 1088 — e la lettera di cambio: strumenti che l'Europa userà per secoli.":
    "Средние века не значат неподвижности. Между 1100 и 1300 годами Италия изобретает нынешний банк, двойную запись, университет как товарищество — Болонья, 1088 год — и переводный вексель: орудия, которыми Европа будет пользоваться веками.",
  "Il Rinascimento e gli Stati italiani": "Возрождение и итальянские государства",
  "Perché conta: nello stesso mezzo secolo l'Italia raggiunge il vertice della propria influenza culturale e perde ogni indipendenza politica. Le due cose accadono insieme, e non per caso.":
    "Почему это важно: в одно и то же полстолетия Италия достигает вершины своего влияния в делах ума и теряет всякую самостоятельность в делах государственных. Одно случается вместе с другим, и не случайно.",
  "Cinque Stati in equilibrio": "Пять государств в равновесии",
  "La **pace di Lodi**, nel **1454**, chiude decenni di guerre fra le potenze della penisola e fissa un equilibrio fra cinque Stati: il **Ducato di Milano**, la **Repubblica di Venezia**, la **Repubblica di Firenze**, lo **Stato della Chiesa** e il **Regno di Napoli**.":
    "**Лодийский мир** **1454 года** кончает десятилетия войн между силами полуострова и устанавливает равновесие между пятью государствами: **Миланским герцогством**, **Венецианской республикой**, **Флорентийской республикой**, **Церковным государством** и **Неаполитанским королевством**.",
  "Nessuno è abbastanza forte da prevalere, e per quarant'anni la diplomazia sostituisce la guerra. È in questo intervallo che nascono le **ambasciate permanenti**, un'invenzione italiana che l'Europa adotterà per intero.":
    "Никто не силён настолько, чтобы взять верх, и сорок лет переговоры заменяют войну. Как раз в этот промежуток рождаются **постоянные посольства**, итальянская выдумка, которую Европа переймёт целиком.",
  "Firenze e i Medici": "Флоренция и Медичи",
  "I **Medici** sono banchieri prima che signori, e governano Firenze senza cariche formali: comprano consenso, sposano alleanze e finanziano artisti. **Lorenzo il Magnifico** tiene in piedi l'equilibrio di Lodi con la sola abilità politica, e muore nel **1492**.":
    "**Медичи** прежде банкиры, чем синьоры, и правят Флоренцией без всяких должностей: покупают согласие, роднятся ради союзов и содержат художников. **Лоренцо Великолепный** держит лодийское равновесие одной лишь ловкостью в делах и умирает в **1492 году**.",
  "Le arti": "Искусства",
  "Leonardo, Michelangelo, Raffaello, Brunelleschi, Botticelli: in tre generazioni una penisola di pochi milioni di abitanti produce una parte enorme dell'arte europea.":
    "Леонардо, Микеланджело, Рафаэль, Брунеллески, Боттичелли: за три поколения полуостров в несколько миллионов жителей даёт огромную долю всего европейского искусства.",
  "Il pensiero politico": "Мысль о государстве",
  "Machiavelli scrive Il Principe nel 1513, osservando il potere per come funziona invece che per come dovrebbe essere.":
    "Макиавелли пишет «Государя» в 1513 году, глядя на власть такой, какая она есть, а не такой, какой ей надлежит быть.",
  "La scienza": "Наука",
  "Galileo fonda il metodo sperimentale, e nel 1633 è processato per aver sostenuto che la Terra gira intorno al Sole.":
    "Галилей закладывает опытный способ познания, а в 1633 году его судят за утверждение, что Земля вращается вокруг Солнца.",
  "Quali sono i cinque Stati dell'equilibrio fissato dalla pace di Lodi?":
    "Каковы пять государств равновесия, установленного Лодийским миром?",
  "Milano, Venezia, Firenze, Stato della Chiesa e Regno di Napoli":
    "Милан, Венеция, Флоренция, Церковное государство и Неаполитанское королевство",
  "Milano, Torino, Genova, Firenze e Roma": "Милан, Турин, Генуя, Флоренция и Рим",
  "Venezia, Genova, Pisa, Amalfi e Napoli": "Венеция, Генуя, Пиза, Амальфи и Неаполь",
  "Piemonte, Lombardia, Toscana, Lazio e Sicilia": "Пьемонт, Ломбардия, Тоскана, Лацио и Сицилия",
  "Sono i cinque grandi del Quattrocento italiano. Genova, Pisa e Amalfi erano repubbliche marinare di due secoli prima, e le regioni moderne non esistevano ancora.":
    "Это пять великих итальянского пятнадцатого века. Генуя, Пиза и Амальфи были морскими республиками двумя веками раньше, а нынешних областей ещё не было.",
  "Il crollo": "Обвал",
  "Nel **1494** **Carlo VIII** di Francia scende in Italia con un esercito che nessuno Stato italiano può fermare da solo. Comincia il ciclo delle **guerre d'Italia**, che dura fino alla pace di **Cateau-Cambrésis** nel **1559** e si combatte quasi interamente sul suolo italiano fra eserciti stranieri.":
    "В **1494 году** **Карл VIII** французский спускается в Италию с войском, которого ни одно итальянское государство не остановит в одиночку. Начинается череда **Итальянских войн**, длящаяся до мира в **Като-Камбрези** в **1559 году**; ведут её на итальянской земле почти сплошь чужие войска.",
  "Nel **1527** i lanzichenecchi imperiali saccheggiano Roma: il **sacco di Roma** è la data che gli storici prendono per la fine del Rinascimento come stagione fiduciosa. Alla fine delle guerre la penisola è in mano alla **Spagna**, che vi resterà per un secolo e mezzo, e dopo di essa all'**Austria**.":
    "В **1527 году** имперские ландскнехты грабят Рим: **разграбление Рима** — та дата, которую историки берут за конец Возрождения как поры надежд. К концу войн полуостров в руках **Испании**, которая останется там полтора века, а после неё — **Австрии**.",
  "Che cosa comincia con la discesa di Carlo VIII nel 1494?":
    "Что начинается с приходом Карла VIII в 1494 году?",
  "L'unificazione della penisola": "Объединение полуострова",
  "Le guerre d'Italia, combattute in casa da eserciti stranieri":
    "Итальянские войны, которые чужие войска ведут в её доме",
  "La costruzione dello Stato della Chiesa": "Устроение Церковного государства",
  "La nascita delle repubbliche marinare": "Рождение морских республик",
  "L'equilibrio di Lodi si rivela fragile davanti a uno Stato nazionale che può schierare un esercito grande. Da lì al 1559 l'Italia è il campo su cui Francia e Spagna decidono chi comanda in Europa.":
    "Лодийское равновесие оказывается хрупким перед единой державой, способной выставить большое войско. С этого времени и до 1559 года Италия — то поле, на котором Франция и Испания решают, кто в Европе главный.",
  "Due secoli in ombra": "Два века в тени",
  "Il Sei e il Settecento sono i secoli in cui il baricentro europeo si sposta sull'Atlantico e le città italiane, vissute di commercio mediterraneo, perdono peso. Restano però primati culturali che si esportano: il **melodramma**, nato a Firenze intorno al 1600 e diventato la forma teatrale d'Europa; e la **musica strumentale** di Vivaldi, Corelli e Scarlatti.":
    "Семнадцатый и восемнадцатый век — те столетия, когда средоточие Европы смещается к Атлантике, а итальянские города, жившие средиземной торговлей, теряют вес. Но остаются первенства в делах ума, и они расходятся по свету: **опера**, родившаяся во Флоренции около 1600 года и ставшая театральной формой всей Европы, и **музыка для инструментов** Вивальди, Корелли и Скарлатти.",
  "Nel Settecento l'Italia diventa la meta obbligata del **Grand Tour**: i giovani aristocratici europei vengono a vedere le rovine e le collezioni. È il momento in cui si costruisce l'immagine dell'Italia come paese dell'arte — un'immagine che vale ancora, e che il turismo di oggi eredita direttamente.":
    "В восемнадцатом веке Италия становится непременной целью **Большого путешествия**: молодые европейские дворяне едут смотреть руины и собрания. Тогда и складывается облик Италии как страны искусства — облик, который держится доныне и который нынешние поездки наследуют напрямую.",
  "Che cos'era il Grand Tour?": "Что такое было Большое путешествие?",
  "Un giro in carrozza fra le corti italiane per motivi diplomatici":
    "Объезд в карете по итальянским дворам ради посольских дел",
  "Il viaggio di formazione che portava i giovani europei a vedere l'arte italiana":
    "Учебная поездка, которая везла молодых европейцев смотреть итальянское искусство",
  "Una gara ciclistica dell'Ottocento": "Состязание велосипедистов девятнадцатого века",
  "Il percorso delle Repubbliche marinare verso l'Oriente": "Путь морских республик на Восток",
  "Fra Sei e Ottocento il viaggio in Italia era considerato parte dell'educazione di un giovane colto europeo. Da quella pratica nasce buona parte dell'immagine internazionale del paese.":
    "С семнадцатого по девятнадцатый век поездку в Италию считали частью воспитания образованного европейского юноши. Из этого обычая и вышла бóльшая часть того, каким страну видят в мире.",
  "Rinascimento non è un periodo politico ma culturale, e i due calendari non coincidono: quando l'arte italiana è al suo apice, l'indipendenza politica è già finita.":
    "Возрождение — пора не государственная, а умственная, и два эти счёта времени не совпадают: когда итальянское искусство на вершине, самостоятельности в делах государственных уже нет.",
  "Il Risorgimento e l'Unità": "Рисорджименто и объединение",
  "Perché conta: l'Italia unita ha poco più di centosessant'anni, meno della Germania di poco e molto meno di Francia o Spagna. È un paese antico e uno Stato giovane, e quasi tutte le sue tensioni nascono da questa differenza.":
    "Почему это важно: единой Италии немногим больше ста шестидесяти лет, чуть меньше, чем Германии, и много меньше, чем Франции или Испании. Это древняя страна и молодое государство, и почти все её напряжения родятся из этой разницы.",
  "Napoleone e la Restaurazione": "Наполеон и восстановление старого порядка",
  "Nel **1796** Napoleone entra in Italia e riorganizza la penisola in repubbliche satelliti. È allora che nasce il **tricolore**, ed è allora che per la prima volta da secoli si parla di un'Italia come entità politica possibile.":
    "В **1796 году** Наполеон входит в Италию и перестраивает полуостров в подвластные ему республики. Тогда рождается **трёхцветное знамя**, и тогда впервые за века об Италии говорят как о возможном государстве.",
  "Il **congresso di Vienna**, nel **1815**, rimette ogni cosa al suo posto: l'Austria in Lombardia e Veneto, i Borbone a Napoli, il papa a Roma, i Savoia in Piemonte. Ma l'idea è ormai in circolazione, e le società segrete come la **Carboneria** la fanno viaggiare.":
    "**Венский конгресс** **1815 года** ставит всё на прежние места: Австрию в Ломбардии и Венето, Бурбонов в Неаполе, папу в Риме, Савойский дом в Пьемонте. Но мысль уже пущена, и тайные общества вроде **карбонариев** разносят её дальше.",
  "Mazzini": "Мадзини",
  "Fonda la Giovine Italia nel 1831. Vuole una repubblica unitaria fatta dal popolo, e passa la vita in esilio.":
    "Основывает «Молодую Италию» в 1831 году. Хочет единой республики, сделанной народом, и проводит жизнь в изгнании.",
  "Cavour": "Кавур",
  "Primo ministro del Piemonte. Punta su diplomazia, ferrovie e alleanze internazionali più che sulle insurrezioni.":
    "Первый министр Пьемонта. Он делает ставку на переговоры, железные дороги и союзы с другими державами больше, чем на восстания.",
  "Garibaldi": "Гарибальди",
  "Il combattente. Nel 1860 conquista il Regno delle Due Sicilie con mille volontari e lo consegna al re.":
    "Боец. В 1860 году он берёт Королевство обеих Сицилий с тысячей добровольцев и отдаёт его королю.",
  "Vittorio Emanuele II": "Виктор Эммануил II",
  "Re di Sardegna e poi primo re d'Italia. Mantiene il numero dinastico piemontese, il che dice molto su come nacque il nuovo Stato.":
    "Король Сардинии, а затем первый король Италии. Он сохраняет пьемонтский родовой счёт, и это многое говорит о том, как родилось новое государство.",
  "Il 1848 e lo Statuto": "1848 год и Устав",
  "Il **1848** è l'anno delle rivoluzioni in tutta Europa. A Milano ci sono le **cinque giornate**, a Venezia si proclama una repubblica, a Roma un'altra. Quasi tutto viene represso, ma resta una cosa: il **4 marzo 1848** Carlo Alberto concede lo **Statuto albertino**, la costituzione del Regno di Sardegna.":
    "**1848-й** — год восстаний по всей Европе. В Милане — **пять дней**, в Венеции провозглашают республику, в Риме другую. Почти всё подавлено, но одно остаётся: **4 марта 1848 года** Карл Альберт жалует **Альбертинский устав**, конституцию Сардинского королевства.",
  "Lo Statuto sarà la costituzione dell'Italia unita fino al 1948. Era **flessibile**, cioè modificabile con legge ordinaria: è la ragione per cui il fascismo poté svuotarlo senza mai violarlo formalmente, e la ragione per cui i costituenti del 1947 vollero una costituzione **rigida**.":
    "Этот Устав будет конституцией единой Италии до 1948 года. Он был **гибким**, то есть изменяемым обычным законом: потому фашизм и смог выхолостить его, ни разу на бумаге не нарушив, и потому же составители 1947 года захотели конституцию **жёсткую**.",
  "Perché lo Statuto albertino non impedì l'ascesa del fascismo?":
    "Почему Альбертинский устав не помешал восхождению фашизма?",
  "Perché non prevedeva un parlamento": "Потому что не предусматривал парламента",
  "Perché era flessibile e modificabile con legge ordinaria":
    "Потому что был гибким и изменяемым обычным законом",
  "Perché era stato sospeso nel 1915": "Потому что был приостановлен в 1915 году",
  "Perché non valeva nel Sud": "Потому что не действовал на Юге",
  "Bastavano leggi ordinarie per cambiarne l'impianto, e il regime procedette così, senza mai abrogarlo. Da qui la scelta del 1947: una costituzione rigida, con procedura aggravata e un nucleo immodificabile.":
    "Чтобы изменить его устройство, хватало обычных законов, и власть так и делала, ни разу его не отменив. Отсюда и выбор 1947 года: жёсткая конституция, с утяжелённым порядком перемены и с неизменяемым ядром.",
  "Dieci anni decisivi": "Десять решающих лет",
  "Nel **1859** la seconda guerra d'indipendenza, combattuta con la Francia, porta al Piemonte la Lombardia. Nel **1860** i plebisciti annettono Emilia e Toscana, mentre **Garibaldi** sbarca a Marsala con i **Mille** e in pochi mesi conquista il Sud, che consegna al re a Teano.":
    "В **1859 году** вторая война за независимость, которую ведут вместе с Францией, приносит Пьемонту Ломбардию. В **1860-м** всенародные опросы присоединяют Эмилию и Тоскану, а **Гарибальди** высаживается в Марсале с **Тысячей** и за несколько месяцев берёт Юг, который отдаёт королю в Теано.",
  "Il **17 marzo 1861** il primo Parlamento italiano proclama il **Regno d'Italia**. Mancano ancora il **Veneto**, che arriva nel **1866**, e **Roma**, presa il **20 settembre 1870** attraverso la breccia di Porta Pia. La capitale si sposta tre volte: Torino, Firenze, Roma.":
    "**17 марта 1861 года** первый итальянский парламент провозглашает **Итальянское королевство**. Недостаёт ещё **Венето**, которое придёт в **1866-м**, и **Рима**, взятого **20 сентября 1870 года** через пролом у ворот Пиа. Столица переезжает трижды: Турин, Флоренция, Рим.",
  "Quale territorio entra nel Regno d'Italia per ultimo fra questi?":
    "Какая из этих земель входит в Итальянское королевство последней?",
  "La Lombardia": "Ломбардия",
  "La Toscana": "Тоскана",
  "Il Veneto": "Венето",
  "Roma": "Рим",
  "Lombardia nel 1859, Toscana nel 1860, Veneto nel 1866, Roma nel 1870. Trento e Trieste arriveranno solo dopo la Prima guerra mondiale.":
    "Ломбардия в 1859 году, Тоскана в 1860-м, Венето в 1866-м, Рим в 1870-м. Тренто и Триест придут только после Первой мировой войны.",
  "Uno Stato senza cittadini": "Государство без граждан",
  "Al momento dell'Unità votava una piccolissima parte della popolazione, l'analfabetismo superava il settanta per cento e l'italiano era parlato da una minoranza. La frase più citata sul periodo — fatta l'Italia, restano da fare gli italiani — è attribuita a Massimo d'Azeglio, e la paternità è discussa; ma coglie il problema.":
    "При объединении голосовала совсем малая часть населения, неграмотных было больше семидесяти долей из ста, а по-итальянски говорило меньшинство. Самые приводимые слова той поры — Италия сделана, осталось сделать итальянцев — приписывают Массимо д'Адзельо, и об их отцовстве спорят; но суть они схватывают.",
  "Nel Sud l'annessione porta tasse nuove, leva obbligatoria e una repressione durissima del **brigantaggio**, un fenomeno insieme criminale e di rivolta sociale. Da lì nasce la **questione meridionale**, e da lì comincia l'**emigrazione**: fra il 1861 e il 1970 lasciano il paese circa **ventisei milioni** di persone.":
    "На Юге присоединение приносит новые налоги, обязательный воинский набор и жесточайшее подавление **разбоя**, который был разом и преступным промыслом, и мятежом обездоленных. Отсюда рождается **южный вопрос**, и отсюда же начинается **уход за море**: между 1861 и 1970 годами страну покидают около **двадцати шести миллионов** человек.",
  "Che cos'è la questione meridionale?": "Что такое южный вопрос?",
  "La disputa sui confini fra Regno d'Italia e Regno delle Due Sicilie":
    "Спор о границах между Итальянским королевством и Королевством обеих Сицилий",
  "Il divario economico e sociale fra Sud e Nord aperto dopo l'Unità":
    "Разрыв в достатке и в жизни между Югом и Севером, открывшийся после объединения",
  "Il dibattito sulla capitale da assegnare al nuovo Stato":
    "Спор о том, какой город сделать столицей нового государства",
  "La controversia sulla lingua da adottare nelle scuole del Sud":
    "Спор о том, какой язык принять в школах Юга",
  "L'unificazione applicò al Mezzogiorno leggi, tasse e tariffe pensate per il Nord, e il divario che ne seguì non si è mai chiuso. È il tema su cui l'Italia discute ininterrottamente da centosessant'anni.":
    "Объединение наложило на Юг законы, налоги и пошлины, придуманные для Севера, и разрыв, который из этого вышел, так и не закрылся. Об этом Италия спорит без перерыва сто шестьдесят лет.",
  "Il Regno d'Italia comincia con **Vittorio Emanuele II**, non primo: il re conservò il numero che aveva come sovrano di Sardegna. Un dettaglio che dice come l'Unità fu vissuta al Sud — un'annessione al Piemonte più che una fondazione comune.":
    "Итальянское королевство начинается с **Виктора Эммануила II**, а не первого: король сохранил тот счёт, который имел как государь Сардинии. Мелочь, говорящая о том, как объединение пережили на Юге, — как присоединение к Пьемонту, а не как общее основание.",
  "Le guerre mondiali e il fascismo": "Мировые войны и фашизм",
  "Perché conta: fra il 1915 e il 1945 l'Italia entra in due guerre mondiali, perde una monarchia, sperimenta una dittatura e si ritrova occupata e divisa in due. Tutto ciò che viene dopo è una risposta a questo trentennio.":
    "Почему это важно: между 1915 и 1945 годами Италия входит в две мировые войны, теряет монархию, узнаёт единовластие и оказывается занятой чужими войсками и разрезанной надвое. Всё, что идёт после, есть ответ на это тридцатилетие.",
  "La Grande guerra": "Великая война",
  "L'Italia entra in guerra nel **1915**, dopo aver firmato in segreto il **patto di Londra** con Francia, Gran Bretagna e Russia, e nonostante fosse alleata degli imperi centrali. Il paese si spacca fra interventisti e neutralisti, e la decisione viene presa dal governo e dal re più che dal Parlamento.":
    "Италия входит в войну в **1915 году**, тайно подписав **Лондонский договор** с Францией, Великобританией и Россией, хотя была в союзе с центральными империями. Страна раскалывается на тех, кто за вступление, и тех, кто за невмешательство, а решают правительство и король скорее, чем парламент.",
  "Seguono tre anni e mezzo di guerra di trincea sull'Isonzo e sul Carso, la rotta di **Caporetto** nel **1917**, e la vittoria di **Vittorio Veneto** nel **1918**. I morti italiani sono circa **seicentomila**.":
    "Дальше три с половиной года окопной войны на Изонцо и на Карсте, разгром при **Капоретто** в **1917 году** и победа при **Витторио-Венето** в **1918-м**. Итальянцев погибло около **шестисот тысяч**.",
  "Alla conferenza di pace l'Italia ottiene Trento, Trieste, l'Alto Adige e l'Istria, ma non tutto ciò che il patto di Londra prometteva. Nasce la formula della **vittoria mutilata**, che alimenta il risentimento su cui il fascismo costruirà il proprio consenso.":
    "На мирных переговорах Италия получает Тренто, Триест, Альто-Адидже и Истрию, но не всё, что обещал Лондонский договор. Рождается выражение **изувеченная победа**, питающее ту обиду, на которой фашизм построит своё согласие с народом.",
  "Che cosa indica l'espressione vittoria mutilata?":
    "Что означает выражение «изувеченная победа»?",
  "La sconfitta di Caporetto": "Поражение при Капоретто",
  "Il senso che l'Italia avesse vinto ottenendo meno del promesso":
    "Чувство, что Италия победила, а получила меньше обещанного",
  "Le perdite militari della Grande guerra": "Военные потери Великой войны",
  "La divisione del paese nel 1943": "Разделение страны в 1943 году",
  "L'Italia ottenne meno di quanto il patto di Londra le avesse riconosciuto, e su questo scarto si costruì un risentimento che i movimenti nazionalisti usarono a piene mani.":
    "Италия получила меньше, чем признавал за ней Лондонский договор, и на этом разрыве выросла обида, которой движения народников воспользовались сполна.",
  "La presa del potere": "Захват власти",
  "Nel **1919** nascono i **Fasci italiani di combattimento**. In un paese scosso da scioperi, occupazioni di fabbriche e violenza politica, le squadre fasciste si presentano come forza d'ordine e vengono tollerate da industriali, proprietari terrieri e apparati dello Stato.":
    "В **1919 году** рождаются **Итальянские боевые союзы**. В стране, сотрясаемой забастовками, захватами заводов и насилием ради государственных целей, фашистские отряды выставляют себя силой порядка, и промышленники, землевладельцы и государственные ведомства их терпят.",
  "Il **28 ottobre 1922** le squadre convergono su Roma. **Vittorio Emanuele III** rifiuta di firmare lo stato d'assedio che l'esercito avrebbe eseguito senza difficoltà, e il 30 ottobre incarica **Mussolini** di formare il governo. Il passaggio avviene formalmente dentro le regole dello Statuto: è così che finisce l'Italia liberale.":
    "**28 октября 1922 года** отряды сходятся на Рим. **Виктор Эммануил III** отказывается подписать осадное положение, которое войско исполнило бы без труда, и 30 октября поручает **Муссолини** составить правительство. На бумаге всё происходит по правилам Устава: так и кончается либеральная Италия.",
  "Che cosa fece Vittorio Emanuele III il 28 ottobre 1922?":
    "Что сделал Виктор Эммануил III 28 октября 1922 года?",
  "Firmò lo stato d'assedio e fece fermare le squadre":
    "Подписал осадное положение и велел остановить отряды",
  "Rifiutò lo stato d'assedio e incaricò Mussolini di formare il governo":
    "Отказался от осадного положения и поручил Муссолини составить правительство",
  "Abdicò a favore del figlio": "Отрёкся в пользу сына",
  "Sciolse il Parlamento e indisse elezioni": "Распустил парламент и назначил выборы",
  "L'esercito avrebbe potuto fermare la marcia senza difficoltà. La firma non arrivò, e due giorni dopo Mussolini ricevette l'incarico: una scelta del re, non un colpo di Stato riuscito con la forza.":
    "Войско могло остановить поход без труда. Подписи не последовало, а через два дня Муссолини получил поручение: это выбор короля, а не удавшийся силой переворот.",
  "Il regime": "Единовластие",
  "1924 · Matteotti": "1924 · Маттеотти",
  "Il deputato socialista Giacomo Matteotti denuncia i brogli elettorali e viene rapito e ucciso. È la crisi che il regime supera assumendosi ogni responsabilità.":
    "Депутат-социалист Джакомо Маттеотти обличает подлоги на выборах, и его похищают и убивают. Это то потрясение, которое власть переживает, взяв всю ответственность на себя.",
  "1925–26 · Le leggi fascistissime": "1925–26 · Сверхфашистские законы",
  "Sciolti i partiti, soppressa la stampa libera, istituito il Tribunale speciale. Lo Stato liberale finisce senza che lo Statuto sia mai abrogato.":
    "Партии распущены, свободная печать задушена, учреждён особый суд. Либеральное государство кончается, а Устав так и не отменён.",
  "1929 · I Patti Lateranensi": "1929 · Латеранские соглашения",
  "Con la Santa Sede si chiude la questione romana aperta nel 1870. Nasce lo Stato della Città del Vaticano.":
    "Со Святым престолом закрывается римский вопрос, открытый в 1870 году. Рождается государство Град Ватикан.",
  "1938 · Le leggi razziali": "1938 · Расовые законы",
  "Gli ebrei italiani sono esclusi da scuole, professioni e vita pubblica. È il preludio alle deportazioni che seguiranno dal 1943.":
    "Итальянских евреев изгоняют из школ, из ремёсел и из общественной жизни. Это предвестие высылок, которые пойдут с 1943 года.",
  "Nel **1935** l'invasione dell'**Etiopia** porta le sanzioni della Società delle Nazioni e spinge l'Italia verso la Germania. L'**asse Roma-Berlino** è del 1936, il **patto d'acciaio** del 1939.":
    "В **1935 году** вторжение в **Эфиопию** навлекает кары Лиги Наций и толкает Италию к Германии. **Ось Рим — Берлин** — это 1936 год, **Стальной пакт** — 1939-й.",
  "La seconda guerra e la rottura": "Вторая война и разрыв",
  "L'Italia entra in guerra il **10 giugno 1940**, impreparata. Dopo tre anni di sconfitte, il **25 luglio 1943** il Gran consiglio del fascismo mette Mussolini in minoranza e il re lo fa arrestare. L'**8 settembre 1943** viene annunciato l'**armistizio** con gli Alleati.":
    "Италия входит в войну **10 июня 1940 года**, не готовая. После трёх лет поражений **25 июля 1943 года** Большой фашистский совет оставляет Муссолини в меньшинстве, и король велит его схватить. **8 сентября 1943 года** объявляют **перемирие** с союзниками.",
  "Il re e il governo lasciano Roma senza dare ordini chiari all'esercito, che si dissolve. I tedeschi occupano il centro-nord e vi installano la **Repubblica sociale italiana**. Il paese è tagliato in due, con un fronte che risale lentamente la penisola per venti mesi: è **guerra civile** oltre che guerra di liberazione.":
    "Король и правительство покидают Рим, не отдав войску ясных приказов, и оно рассыпается. Немцы занимают середину и север и ставят там **Итальянскую социальную республику**. Страна разрезана надвое, и рубеж боёв двадцать месяцев медленно ползёт вверх по полуострову: это **междоусобная война** сверх войны освободительной.",
  "Che cosa accade l'8 settembre 1943?": "Что происходит 8 сентября 1943 года?",
  "Mussolini viene arrestato": "Муссолини хватают",
  "Viene annunciato l'armistizio con gli Alleati": "Объявляют перемирие с союзниками",
  "L'Italia entra in guerra": "Италия входит в войну",
  "Le città del Nord insorgono": "Города Севера восстают",
  "L'arresto di Mussolini è del 25 luglio, l'entrata in guerra del 10 giugno 1940 e l'insurrezione del 25 aprile 1945. L'8 settembre è l'annuncio dell'armistizio, seguito dal collasso dell'esercito e dall'occupazione tedesca.":
    "Муссолини схватили 25 июля, в войну вошли 10 июня 1940 года, восстание было 25 апреля 1945-го. 8 сентября — это объявление перемирия, за которым последовали развал войска и немецкое занятие страны.",
  "Fra il settembre 1943 e l'aprile 1945 esistono due Italie: il Regno del Sud, cobelligerante degli Alleati, e la Repubblica sociale al Nord, sotto controllo tedesco. Molte date di questo periodo valgono per una sola metà del paese.":
    "Между сентябрём 1943 года и апрелем 1945-го существуют две Италии: Королевство Юга, воюющее на стороне союзников, и Социальная республика на Севере, под немецкой рукой. Многие даты этой поры годятся лишь для одной половины страны.",
  "Resistenza, Repubblica e dopoguerra": "Сопротивление, Республика и послевоенные годы",
  "Perché conta: la Costituzione non nasce a tavolino. Nasce da chi ha combattuto una guerra civile e ha poi dovuto scrivere insieme le regole di un paese in macerie. Quasi ogni articolo porta il segno di quell'esperienza.":
    "Почему это важно: Конституция родилась не за письменным столом. Её родили те, кто вёл междоусобную войну, а потом должен был вместе написать правила для страны в развалинах. Почти всякая статья несёт след того опыта.",
  "La Resistenza": "Сопротивление",
  "Dopo l'8 settembre 1943 si organizzano le formazioni partigiane, coordinate dal **Comitato di liberazione nazionale**, in cui siedono insieme comunisti, socialisti, democratici cristiani, liberali e azionisti: forze che si combatteranno per i decenni successivi ma che in quel momento scrivono insieme.":
    "После 8 сентября 1943 года складываются партизанские отряды, которых сводит воедино **Комитет народного освобождения**, где вместе сидят коммунисты, социалисты, христианские демократы, либералы и члены Партии действия: силы, которые будут воевать друг с другом десятилетиями, а в тот час пишут вместе.",
  "Il **25 aprile 1945** il Comitato per l'alta Italia proclama l'insurrezione generale, e Milano e Torino sono liberate prima dell'arrivo degli Alleati. La data è oggi festa nazionale: ricorda la Resistenza, non la firma della resa.":
    "**25 апреля 1945 года** Комитет Верхней Италии провозглашает всеобщее восстание, и Милан с Турином освобождены ещё до прихода союзников. Ныне это народный праздник: он напоминает о Сопротивлении, а не о подписании сдачи.",
  "Che cosa proclama il Comitato di liberazione nazionale il 25 aprile 1945?":
    "Что провозглашает Комитет народного освобождения 25 апреля 1945 года?",
  "La nascita della Repubblica": "Рождение Республики",
  "L'insurrezione generale nelle città del Nord": "Всеобщее восстание в городах Севера",
  "L'armistizio con gli Alleati": "Перемирие с союзниками",
  "L'insurrezione. La Repubblica nasce dal referendum del 2 giugno 1946 e la Costituzione entra in vigore il 1º gennaio 1948: tre date diverse, spesso confuse fra loro.":
    "Восстание. Республика рождается из референдума 2 июня 1946 года, а Конституция вступает в силу 1 января 1948-го: три разные даты, которые часто путают.",
  "Dalla monarchia alla Repubblica": "От монархии к Республике",
  "Il **2 giugno 1946** gli italiani votano su due schede: la forma dello Stato e l'Assemblea costituente. La **repubblica** prevale con circa il cinquantaquattro per cento, con un Nord largamente repubblicano e un Sud in maggioranza monarchico. **Umberto II** lascia il paese, e la monarchia sabauda finisce dopo ottantacinque anni.":
    "**2 июня 1946 года** итальянцы голосуют по двум бюллетеням: об образе правления и об Учредительном собрании. **Республика** берёт верх примерно пятьюдесятью четырьмя долями из ста, причём Север по большей части за республику, а Юг в большинстве за монархию. **Умберто II** покидает страну, и Савойская монархия кончается через восемьдесят пять лет.",
  "L'Assemblea lavora un anno e mezzo e il **1º gennaio 1948** la Costituzione entra in vigore. Il **18 aprile 1948** si tengono le prime elezioni politiche repubblicane, in un clima segnato dall'inizio della guerra fredda.":
    "Собрание работает полтора года, и **1 января 1948 года** Конституция вступает в силу. **18 апреля 1948 года** проходят первые республиканские общегосударственные выборы, в пору, отмеченную началом холодной войны.",
  "Il miracolo economico": "Хозяйственное чудо",
  "Con il **piano Marshall** e la ricostruzione, fra il **1958 e il 1963** l'Italia cresce a ritmi che nessun altro paese europeo tocca nello stesso periodo, a parte la Germania. È il **boom economico**: da paese prevalentemente agricolo a potenza industriale in una generazione.":
    "С **планом Маршалла** и восстановлением, между **1958 и 1963 годами**, Италия растёт так быстро, как ни одна другая страна Европы в те же годы, кроме Германии. Это **хозяйственный взлёт**: из страны по преимуществу земледельческой в промышленную державу за одно поколение.",
  "La migrazione interna": "Переселение внутри страны",
  "Milioni di persone lasciano il Sud e il Nordest per le fabbriche del triangolo industriale fra Torino, Milano e Genova.":
    "Миллионы людей покидают Юг и северо-восток ради заводов промышленного треугольника между Турином, Миланом и Генуей.",
  "Gli oggetti": "Вещи",
  "La Fiat 500, la Vespa, il frigorifero, il televisore. Il consumo di massa arriva insieme all'unificazione linguistica.":
    "Fiat 500, «Веспа», холодильник, телевизор. Всеобщее потребление приходит вместе с языковым единством.",
  "L'Europa": "Европа",
  "Nel 1957 l'Italia firma a Roma i trattati che istituiscono la Comunità economica europea: non vi aderisce, la fonda.":
    "В 1957 году Италия подписывает в Риме договоры, учреждающие Европейское экономическое сообщество: она не вступает в него, она его основывает.",
  "Che cosa fu il boom economico italiano?": "Что такое был итальянский хозяйственный взлёт?",
  "La ripresa dopo la crisi petrolifera del 1973": "Подъём после нефтяного потрясения 1973 года",
  "La crescita fra il 1958 e il 1963 che rese l'Italia un paese industriale":
    "Рост между 1958 и 1963 годами, сделавший Италию промышленной страной",
  "L'espansione coloniale degli anni Trenta": "Захват заморских земель в тридцатые годы",
  "L'aumento delle esportazioni dopo l'ingresso nell'euro":
    "Рост вывоза товаров после перехода на евро",
  "In pochi anni l'Italia passò da economia in larga parte agricola a potenza industriale, con una migrazione interna di milioni di persone. La crisi petrolifera del 1973 chiude piuttosto quella stagione.":
    "За несколько лет Италия перешла от хозяйства по большей части земледельческого к промышленной державе, и внутри страны переселились миллионы. А нефтяное потрясение 1973 года ту пору скорее закрывает.",
  "Gli anni difficili": "Тяжёлые годы",
  "Dalla fine degli anni Sessanta il paese attraversa una lunga stagione di violenza politica, chiamata **anni di piombo**: stragi con matrice neofascista, terrorismo di sinistra, apparati dello Stato deviati. Nel **1978** le **Brigate rosse** rapiscono **Aldo Moro**, uccidendo i cinque uomini della scorta, e lo assassinano dopo cinquantacinque giorni. Nel **1980** una bomba alla stazione di **Bologna** uccide ottantacinque persone.":
    "С конца шестидесятых годов страна проходит долгую пору насилия ради государственных целей, которую зовут **свинцовыми годами**: побоища неофашистского замеса, терроризм слева, сбившиеся с пути ведомства государства. В **1978 году** **Красные бригады** похищают **Альдо Моро**, убив пятерых охранявших его, и через пятьдесят пять дней убивают его самого. В **1980-м** бомба на вокзале **Болоньи** убивает восемьдесят пять человек.",
  "All'inizio degli anni Novanta l'inchiesta **Mani pulite** porta alla luce un sistema diffuso di finanziamento illecito dei partiti. Fra il **1992** e il **1994** i partiti che avevano governato dal dopoguerra si dissolvono quasi tutti: è la fine di quella che si chiama **Prima Repubblica**. Nello stesso 1992 le stragi di Capaci e via d'Amelio uccidono i giudici **Falcone** e **Borsellino**.":
    "В начале девяностых расследование **«Чистые руки»** выводит на свет широко разошедшийся порядок незаконного содержания партий. Между **1992** и **1994 годами** партии, правившие с послевоенных лет, почти все распадаются: это конец того, что зовут **Первой Республикой**. В том же 1992 году взрывы в Капачи и на улице д'Амелио убивают судей **Фальконе** и **Борселлино**.",
  "Che cosa fu Mani pulite?": "Что такое было расследование «Чистые руки»?",
  "Una riforma della pubblica amministrazione": "Перестройка казённых ведомств",
  "L'inchiesta sul finanziamento illecito dei partiti che portò alla fine della Prima Repubblica":
    "Расследование о незаконном содержании партий, приведшее к концу Первой Республики",
  "Un movimento studentesco degli anni Settanta": "Студенческое движение семидесятых годов",
  "Il piano di risanamento dei conti per entrare nell'euro":
    "Замысел оздоровления казны ради перехода на евро",
  "L'inchiesta milanese aperta nel 1992 rivelò un sistema di tangenti che coinvolgeva quasi tutti i partiti di governo. In due anni il quadro politico nato nel dopoguerra si dissolse.":
    "Миланское расследование, начатое в 1992 году, вскрыло порядок взяток, в который были втянуты почти все правящие партии. За два года всё государственное устроение, родившееся после войны, распалось.",
  "Prima e Seconda Repubblica non sono categorie giuridiche: la Costituzione è sempre la stessa dal 1948. Indicano due stagioni del sistema dei partiti, separate dal biennio 1992-94.":
    "Первая и Вторая Республика — не понятия права: Конституция с 1948 года всё та же. Они означают две поры в жизни партий, разделённые двухлетием 1992–94 годов.",
  "Il territorio": "Земля",
  "Territorio, economia e l'Italia nel mondo": "Земля, хозяйство и Италия в мире",
  "Perché conta: l'Italia è lunga milleduecento chilometri e larga in certi punti meno di cinquanta. Quasi tutto ciò che la riguarda — il clima, le cucine, i dialetti, perfino la politica — comincia da questa forma.":
    "Почему это важно: Италия тянется на тысячу двести километров, а местами её ширина меньше пятидесяти. Почти всё, что её касается, — погода, кухни, наречия, даже государственные дела, — начинается с этой формы.",
  "Una penisola e due catene": "Полуостров и две горные гряды",
  "Il paese misura circa **trecentomila chilometri quadrati** e conta poco meno di **sessanta milioni** di abitanti. Le **Alpi** ne chiudono il lato settentrionale e segnano il confine con Francia, Svizzera, Austria e Slovenia; gli **Appennini** lo percorrono per intero dal Nord alla Calabria, e proseguono in Sicilia.":
    "Страна занимает около **трёхсот тысяч квадратных километров**, и жителей в ней немногим меньше **шестидесяти миллионов**. **Альпы** замыкают её с севера и отмечают границу с Францией, Швейцарией, Австрией и Словенией; **Апеннины** проходят её всю, с севера до Калабрии, и тянутся дальше в Сицилию.",
  "Fra le due catene sta la **pianura padana**, l'unica grande pianura del paese e il suo motore agricolo e industriale. Il resto è in gran parte collina: la pianura copre poco più di un quinto del territorio, e questa scarsità spiega perché in Italia si costruisca in verticale sulle colline e si coltivi a terrazze.":
    "Между двумя грядами лежит **Паданская равнина**, единственная большая равнина страны и её земледельческий и промышленный двигатель. Остальное по большей части холмы: равнина занимает немногим более пятой части земли, и этой скудостью объясняется, почему в Италии строят вверх по склонам и возделывают уступами.",
  "Il Po": "По",
  "Il fiume più lungo, circa 650 chilometri dal Monviso all'Adriatico. Attraversa la pianura che porta il suo nome.":
    "Самая длинная река, около 650 километров от Монвизо до Адриатики. Она пересекает равнину, носящую её имя.",
  "Il lago di Garda": "Озеро Гарда",
  "Il più grande dei laghi italiani, diviso fra tre regioni: Lombardia, Veneto e Trentino.":
    "Самое большое из итальянских озёр, поделённое между тремя областями: Ломбардией, Венето и Трентино.",
  "La Sicilia": "Сицилия",
  "La più grande isola del Mediterraneo. La Sardegna è la seconda.":
    "Самый большой остров Средиземного моря. Сардиния — второй.",
  "Le coste": "Берега",
  "Circa settemilacinquecento chilometri: nessun punto della penisola è lontanissimo dal mare.":
    "Около семи с половиной тысяч километров: ни одна точка полуострова не лежит очень далеко от моря.",
  "Qual è il fiume più lungo d'Italia?": "Какая река в Италии самая длинная?",
  "Il Tevere": "Тибр",
  "L'Adige": "Адидже",
  "L'Arno": "Арно",
  "Il Po, circa seicentocinquanta chilometri. L'Adige è il secondo, il Tevere il terzo: entrambi sono più corti di metà.":
    "По, около шестисот пятидесяти километров. Адидже вторая, Тибр третий: обе короче её вдвое.",
  "Una terra che si muove": "Земля, которая движется",
  "L'Italia si trova sulla linea di contatto fra la placca africana e quella euroasiatica, e questo la rende **sismica** quasi ovunque tranne che in Sardegna. I terremoti distruttivi ricorrono: il Belice, il Friuli, l'Irpinia, l'Umbria, L'Aquila, il Centro Italia. Ogni volta si riapre la stessa discussione sull'edilizia antisismica.":
    "Италия лежит на линии, где сходятся африканская и евразийская плиты, и потому она **трясётся** почти везде, кроме Сардинии. Разрушительные землетрясения возвращаются: Беличе, Фриули, Ирпиния, Умбрия, Аквила, середина Италии. И всякий раз заново начинается тот же спор о постройке домов, стойких к тряске.",
  "Gli stessi movimenti danno all'Italia i suoi **vulcani attivi**: l'**Etna**, il maggiore d'Europa, che erutta più volte l'anno; il **Vesuvio**, che nel **79 dopo Cristo** seppellì Pompei ed Ercolano e che sovrasta un'area densamente abitata; lo **Stromboli**, in attività quasi continua; e i **Campi Flegrei**, una vasta caldera a ovest di Napoli.":
    "Те же движения дают Италии её **действующие вулканы**: **Этну**, самую большую в Европе, извергающуюся по нескольку раз в год; **Везувий**, который в **79 году от Рождества Христова** погрёб Помпеи и Геркуланум и который висит над густо населённой округой; **Стромболи**, почти не затихающий; и **Флегрейские поля**, обширную котловину к западу от Неаполя.",
  "Qual è il lago più grande d'Italia?": "Какое озеро в Италии самое большое?",
  "Il lago di Como": "Озеро Комо",
  "Il lago Maggiore": "Озеро Маджоре",
  "Il lago Trasimeno": "Тразименское озеро",
  "Il Garda, diviso fra Lombardia, Veneto e Trentino. Maggiore e Como sono più piccoli, e il Trasimeno, il maggiore dell'Italia centrale, è molto più piccolo di tutti e tre.":
    "Гарда, поделённое между Ломбардией, Венето и Трентино. Маджоре и Комо меньше, а Тразименское, самое большое в средней Италии, много меньше всех трёх.",
  "Il clima, al plurale": "Погода, во множественном числе",
  "Con questa lunghezza il clima non può essere uno solo. Le Alpi hanno inverni alpini e nevi permanenti; la pianura padana ha estati afose e nebbie invernali; le coste e le isole hanno il clima mediterraneo, con estati secche e inverni miti. Fra Bolzano e Lampedusa corrono più di dieci gradi di temperatura media annua.":
    "При такой длине погода не может быть одна. В Альпах зимы горные и снега, что не сходят; на Паданской равнине лето душное, а зимой туманы; на берегах и островах погода средиземная, с сухим летом и мягкой зимой. Между Больцано и Лампедузой разница средней годовой теплоты больше десяти градусов.",
  "Due Stati dentro": "Два государства внутри",
  "Nel territorio italiano si trovano due Stati indipendenti, entrambi **enclave**, cioè completamente circondati: la **Repubblica di San Marino**, sull'Appennino romagnolo, che si dice la più antica repubblica ancora esistente; e lo **Stato della Città del Vaticano**, nato con i Patti Lateranensi del 1929, il più piccolo Stato del mondo.":
    "На итальянской земле лежат два независимых государства, оба **вкраплённые**, то есть окружённые со всех сторон: **Республика Сан-Марино**, в романьольских Апеннинах, которую называют старейшей из ныне живущих республик, и **государство Град Ватикан**, родившееся из Латеранских соглашений 1929 года, самое малое государство мира.",
  "Quali due Stati indipendenti si trovano dentro il territorio italiano?":
    "Какие два независимых государства лежат внутри итальянской земли?",
  "Monaco e Andorra": "Монако и Андорра",
  "San Marino e la Città del Vaticano": "Сан-Марино и Град Ватикан",
  "Malta e San Marino": "Мальта и Сан-Марино",
  "Il Liechtenstein e la Città del Vaticano": "Лихтенштейн и Град Ватикан",
  "San Marino e il Vaticano sono enclave, cioè circondati per intero dall'Italia. Monaco confina con la Francia, Andorra sta fra Francia e Spagna, e Malta e il Liechtenstein non confinano affatto con l'Italia.":
    "Сан-Марино и Ватикан вкраплены, то есть со всех сторон окружены Италией. Монако граничит с Францией, Андорра лежит между Францией и Испанией, а Мальта и Лихтенштейн с Италией не граничат вовсе.",
  "Il **Monte Bianco**, 4.808 metri, è la vetta più alta della catena alpina; la sovranità della cima è oggetto di una controversia mai risolta con la Francia. Le carte dei due paesi non coincidono.":
    "**Монблан**, 4808 метров, — высочайшая вершина альпийской гряды; о том, чья эта вершина, с Францией идёт нерешённый спор. Карты двух стран не совпадают.",
  "Le città e il patrimonio": "Города и наследие",
  "Perché conta: l'Italia non ha una sola grande città che concentri tutto, come Parigi o Londra. Ne ha molte, ciascuna con una storia da capitale, e questo cambia il modo in cui il paese funziona.":
    "Почему это важно: в Италии нет одного большого города, где сходилось бы всё, как в Париже или Лондоне. Их много, и у каждого столичная история, а от этого меняется весь склад жизни страны.",
  "Molte capitali mancate": "Много несостоявшихся столиц",
  "**Roma** è la più popolosa, con circa due milioni e mezzo di abitanti nel comune. Seguono **Milano**, **Napoli**, **Torino** e **Palermo**. Nessuna però assorbe il paese: Milano è il centro economico e finanziario, Torino quello industriale storico, Napoli la capitale del Mezzogiorno, Firenze e Venezia due città d'arte con un peso mondiale sproporzionato alla loro dimensione.":
    "**Рим** самый многолюдный: в его коммуне около двух с половиной миллионов жителей. За ним идут **Милан**, **Неаполь**, **Турин** и **Палермо**. Но ни один не вбирает в себя страну: Милан — средоточие денег и торговли, Турин — старое средоточие промышленности, Неаполь — столица Юга, а Флоренция и Венеция — два города искусства, чей вес в мире несоразмерен их величине.",
  "La ragione è nei quattordici secoli senza uno Stato unico: ogni città è stata capitale di qualcosa, e ne ha conservato il palazzo, il teatro, l'università e l'orgoglio.":
    "Причина — в четырнадцати веках без единого государства: всякий город был чему-нибудь столицей и сохранил от этого дворец, театр, университет и гордость.",
  "Qual è la città italiana più popolosa?": "Какой итальянский город самый многолюдный?",
  "Torino": "Турин",
  "Roma, con circa due milioni e mezzo di abitanti nel comune. Milano è la seconda per popolazione comunale, pur avendo un'area metropolitana che per alcuni conteggi la avvicina.":
    "Рим, около двух с половиной миллионов жителей в коммуне. Милан второй по числу жителей коммуны, хотя его округа при иных подсчётах подходит к Риму близко.",
  "Il primato del patrimonio": "Первенство по наследию",
  "L'Italia è il **primo paese al mondo per numero di siti iscritti nella lista del patrimonio mondiale dell'UNESCO**, davanti alla Cina. Non si tratta soltanto di monumenti isolati: interi **centri storici** sono iscritti come un unico sito — Roma, Firenze, Venezia con la sua laguna, Napoli, Siena, Urbino, Ferrara.":
    "Италия — **первая страна мира по числу мест, внесённых в список всемирного наследия ЮНЕСКО**, впереди Китая. Речь не только об отдельных памятниках: целые **старые части городов** внесены как одно место — Рим, Флоренция, Венеция с её лагуной, Неаполь, Сиена, Урбино, Феррара.",
  "Pompei ed Ercolano": "Помпеи и Геркуланум",
  "Sepolte dall'eruzione del Vesuvio nel 79 dopo Cristo e riscoperte nel Settecento: due città romane conservate come nessun'altra al mondo.":
    "Погребены извержением Везувия в 79 году от Рождества Христова и вновь открыты в восемнадцатом веке: два римских города, сохранившихся как ни один другой в мире.",
  "La Valle dei Templi": "Долина храмов",
  "Ad Agrigento, in Sicilia: templi greci del quinto secolo avanti Cristo, in un'isola che fu Magna Grecia prima che Roma.":
    "В Агридженто, на Сицилии: греческие храмы пятого века до Рождества Христова, на острове, который был Великой Грецией раньше, чем Римом.",
  "Le Dolomiti": "Доломитовые Альпы",
  "Iscritte come patrimonio naturale, non culturale: la lista comprende anche paesaggi.":
    "Внесены как наследие природное, а не рукотворное: в список входят и виды земли.",
  "I borghi": "Городки",
  "Migliaia di piccoli centri storici non iscritti in nessuna lista compongono un patrimonio diffuso che nessun catalogo riesce a contenere.":
    "Тысячи маленьких старинных городков, не внесённых ни в какой список, составляют рассеянное повсюду наследие, которого не вместит никакая опись.",
  "Quale sito archeologico fu sepolto dall'eruzione del 79 dopo Cristo?":
    "Какое древнее место погребло извержение 79 года от Рождества Христова?",
  "Pompei": "Помпеи",
  "Ostia antica": "Древняя Остия",
  "Paestum": "Пестум",
  "Pompei, insieme a Ercolano e Stabia. La Valle dei Templi è greca e in Sicilia, Paestum è greca in Campania e Ostia era il porto di Roma, abbandonato lentamente e non sepolto.":
    "Помпеи, вместе с Геркуланумом и Стабиями. Долина храмов греческая и на Сицилии, Пестум греческий в Кампании, а Остия была портом Рима, который медленно опустел, а не был погребён.",
  "Il turismo e i suoi problemi": "Приезжие и беды от них",
  "Il turismo è una delle principali voci dell'economia italiana e uno dei motivi per cui il paese è fra le prime destinazioni al mondo. Ma la concentrazione crea difficoltà proprie: **Venezia** e **Firenze** vedono i residenti diminuire mentre gli affitti brevi crescono, e in alcune giornate i visitatori superano gli abitanti.":
    "Приезжие — одна из главных статей итальянского хозяйства и одна из причин, по которым страна стоит среди первых мест мира, куда едут. Но такая скученность рождает свои беды: в **Венеции** и **Флоренции** коренных жителей становится меньше, а сдачи жилья на несколько дней — больше, и в иные дни приезжих больше, чем живущих.",
  "All'estremo opposto ci sono le **aree interne**: paesi appenninici che si spopolano, dove restano case vuote e servizi in chiusura. È il rovescio esatto della stessa medaglia, e le due cose sono spesso a poche decine di chilometri l'una dall'altra.":
    "На другом краю — **глубинные земли**: апеннинские деревни, которые пустеют, где остаются брошенные дома и закрывающиеся службы. Это ровно оборотная сторона той же медали, и от одного до другого часто несколько десятков километров.",
  "Quale paese ha il maggior numero di siti nella lista del patrimonio mondiale UNESCO?":
    "У какой страны больше всего мест в списке всемирного наследия ЮНЕСКО?",
  "La Francia": "У Франции",
  "La Spagna": "У Испании",
  "L'Italia": "У Италии",
  "La Grecia": "У Греции",
  "L'Italia, davanti alla Cina. Il primato si spiega anche con la struttura del paese: molte città sono state capitali, e ciascuna ha conservato un centro storico intero.":
    "У Италии, впереди Китая. Первенство это объясняется и складом страны: многие города были столицами, и каждый сохранил целую старую часть.",
  "Un sito UNESCO non è sempre un edificio. Possono esserlo un intero centro storico, un paesaggio agricolo, una catena montuosa — e anche pratiche immateriali, come l'arte del pizzaiuolo napoletano.":
    "Место в списке ЮНЕСКО не всегда здание. Им может быть целая старая часть города, возделанная земля, горная гряда — и даже неосязаемое умение, как искусство неаполитанского пиццайоло.",
  "L'economia": "Хозяйство",
  "Perché conta: l'economia italiana non si capisce guardando le grandi aziende, perché non è fatta di quelle. È fatta di migliaia di imprese piccole che, messe insieme per territorio, funzionano come una grande.":
    "Почему это важно: итальянское хозяйство не понять, глядя на большие предприятия, потому что не из них оно сложено. Оно сложено из тысяч малых, которые, собравшись на одной земле, работают как одно большое.",
  "I distretti industriali": "Промысловые округа",
  "Un **distretto industriale** è un territorio in cui molte piccole e medie imprese fanno tutte la stessa cosa, o parti diverse della stessa cosa, e si passano il lavoro. Non è un'invenzione a tavolino: è cresciuto dove c'era già un mestiere, spesso da botteghe artigiane.":
    "**Промысловый округ** — это земля, где много малых и средних предприятий делают одно и то же или разные части одного и того же и передают работу друг другу. Это не выдумка за письменным столом: он вырос там, где ремесло уже было, часто из ремесленных мастерских.",
  "Occhiali": "Очки",
  "Nel Bellunese, in Veneto: una valle alpina che produce una quota rilevante degli occhiali del mondo.":
    "В окрестностях Беллуно, в Венето: альпийская долина, дающая заметную долю всех очков мира.",
  "Ceramica": "Гончарное дело",
  "A Sassuolo, in Emilia: piastrelle esportate ovunque, da un distretto nato attorno all'argilla locale.":
    "В Сассуоло, в Эмилии: плитка расходится повсюду из округа, выросшего вокруг местной глины.",
  "Calzature": "Обувь",
  "Nelle Marche e in Veneto, dove la scarpa si fa in filiera fra decine di piccole imprese vicine.":
    "В Марке и Венето, где башмак делают цепочкой через десятки соседних малых предприятий.",
  "Meccanica": "Машины",
  "Lungo la via Emilia: macchine per il packaging, motori, automazione. È il settore che esporta di più.":
    "Вдоль Эмилиевой дороги: машины для упаковки, двигатели, самодействующие устройства. Это то дело, которое вывозит больше всех.",
  "Le esportazioni si riassumono spesso nelle **quattro A**: **abbigliamento**, **arredamento**, **automazione** e **alimentare**. Insieme al turismo, sono ciò per cui il paese è conosciuto sui mercati.":
    "Вывоз часто сводят к **четырём A**: **abbigliamento** — одежда, **arredamento** — обстановка, **automazione** — самодействующие устройства и **alimentare** — съестное. Вместе с приезжими это то, чем страна известна на рынках.",
  "Che cos'è un distretto industriale?": "Что такое промысловый округ?",
  "Una zona franca esente da imposte": "Полоса земли, свободная от податей",
  "Un territorio in cui molte piccole e medie imprese lavorano nello stesso settore e si passano il lavoro":
    "Земля, где много малых и средних предприятий заняты одним делом и передают работу друг другу",
  "Un quartiere riservato agli stabilimenti in una grande città":
    "Квартал большого города, отведённый под заводы",
  "Un consorzio pubblico che finanzia le imprese":
    "Казённое товарищество, которое даёт предприятиям деньги",
  "È una concentrazione territoriale di imprese specializzate, cresciuta di solito da un mestiere già presente. Sostituisce con la vicinanza ciò che altrove fa la dimensione aziendale.":
    "Это скопление на одной земле предприятий одного умения, выросшее обыкновенно из уже бывшего там ремесла. Соседством оно заменяет то, что в других местах даёт величина предприятия.",
  "Due velocità": "Две скорости",
  "Il **divario fra Nord e Sud** è la questione economica più antica del paese e non si è mai chiusa. Il reddito per abitante nel Mezzogiorno è nettamente inferiore a quello del Centro-Nord, la disoccupazione è più alta e l'occupazione femminile molto più bassa.":
    "**Разрыв между Севером и Югом** — самый давний хозяйственный вопрос страны, и он так и не закрылся. Доход на жителя на Юге заметно ниже, чем в середине и на севере, безработных больше, а работающих женщин много меньше.",
  "Su tutto pesa poi l'**economia sommersa**, cioè il lavoro e il fatturato che non risultano da nessuna parte: una quota stimata in più di un decimo del prodotto interno lordo, con punte assai maggiori in alcuni settori e in alcune aree.":
    "Надо всем висит ещё **скрытое хозяйство**, то есть работа и выручка, которые нигде не показаны: доля его, по оценкам, больше десятой части всего, что страна производит, а в иных промыслах и в иных краях много больше.",
  "Quali sono le quattro A dell'export italiano?": "Каковы четыре A итальянского вывоза?",
  "Agricoltura, artigianato, acciaio e auto": "Земледелие, ремесло, сталь и машины",
  "Abbigliamento, arredamento, automazione e alimentare":
    "Одежда, обстановка, самодействующие устройства и съестное",
  "Arte, artigianato, agricoltura e automobili":
    "Искусство, ремесло, земледелие и самоходные повозки",
  "Alimentare, acciaio, aeronautica e arredamento":
    "Съестное, сталь, воздухоплавание и обстановка",
  "Abbigliamento, arredamento, automazione e alimentare: la formula riassume ciò per cui l'Italia è conosciuta sui mercati esteri, insieme al turismo.":
    "Abbigliamento, arredamento, automazione, alimentare — одежда, обстановка, самодействующие устройства и съестное: эта присказка сводит воедино то, чем Италия известна на чужих рынках, вместе с приезжими.",
  "I nodi aperti": "Неразвязанные узлы",
  "L'Italia ha un **debito pubblico** fra i più alti d'Europa in rapporto al prodotto, eredità di decenni di spesa a deficit soprattutto negli anni Ottanta. Serve un avanzo primario costante solo per non farlo crescere, il che riduce lo spazio per investire.":
    "У Италии **казённый долг** из самых высоких в Европе по отношению ко всему, что страна производит, — наследство десятилетий трат сверх доходов, прежде всего в восьмидесятые годы. Чтобы он хотя бы не рос, нужен постоянный первичный излишек, а это сужает простор для вложений.",
  "Il secondo nodo è **demografico**: la natalità è fra le più basse del mondo e la popolazione invecchia. Il terzo è la partenza dei giovani: molti laureati lasciano il paese, e l'Italia forma persone che poi lavorano altrove.":
    "Второй узел — **людской**: рождаемость из самых низких в мире, а население стареет. Третий — уход молодых: многие с высшим образованием покидают страну, и Италия готовит людей, которые потом работают в других местах.",
  "Che cosa indica l'espressione economia sommersa?":
    "Что означает выражение «скрытое хозяйство»?",
  "L'economia delle regioni costiere": "Хозяйство прибрежных областей",
  "Il lavoro e il fatturato che non risultano ufficialmente":
    "Работа и выручка, которые нигде не показаны",
  "Il settore delle imprese pubbliche": "Круг казённых предприятий",
  "Il commercio con i paesi extraeuropei": "Торговля со странами вне Европы",
  "È la parte di attività economica non dichiarata: lavoro senza contratto, ricavi non fatturati. In Italia è stimata sopra un decimo del prodotto interno lordo, con punte molto più alte in alcuni settori.":
    "Это та часть хозяйственной жизни, о которой не заявляют: работа без договора, доходы без счетов. В Италии её оценивают выше десятой части всего, что страна производит, а в иных промыслах и много выше.",
  "Piccola impresa non significa impresa arretrata. Molte aziende italiane con poche decine di dipendenti sono leader mondiali nella loro nicchia: fanno una cosa sola, e la fanno meglio di chiunque altro.":
    "Малое предприятие не значит отсталое. Многие итальянские предприятия с несколькими десятками работников первые в мире в своём узком деле: они делают что-то одно и делают это лучше всех.",
  "L'Italia in Europa e nel mondo": "Италия в Европе и в мире",
  "Perché conta: l'Italia non ha aderito all'Europa comunitaria, l'ha fondata. E il paese che oggi riceve chi arriva dal mare è lo stesso da cui, per un secolo, sono partiti in ventisei milioni.":
    "Почему это важно: Италия не вступила в объединённую Европу, она её основала. А страна, которая ныне принимает приходящих с моря, — та же самая, из которой век подряд уходили двадцать шесть миллионов.",
  "Fra i fondatori": "Среди основателей",
  "L'**articolo 11** della Costituzione consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: è la base giuridica di tutto ciò che segue.":
    "**Статья 11** Конституции допускает ограничения верховной власти, нужные для порядка, который обеспечивает мир: это правовое основание всего, что идёт дальше.",
  "1949 · NATO": "1949 · НАТО",
  "L'Italia è fra i dodici paesi che firmano il trattato dell'Atlantico del Nord.":
    "Италия среди двенадцати стран, подписавших Североатлантический договор.",
  "1951 · CECA": "1951 · CECA",
  "Con la Comunità europea del carbone e dell'acciaio comincia l'integrazione. L'Italia è fra i sei fondatori.":
    "С Европейского объединения угля и стали начинается срастание Европы. Италия среди шести основателей.",
  "1957 · Trattati di Roma": "1957 · Римские договоры",
  "Nascono la CEE e l'Euratom, firmate in Campidoglio. La sede della firma non è un dettaglio.":
    "Рождаются ЕЭС и Евратом, подписанные на Капитолии. Место подписания тут не мелочь.",
  "1955 · ONU": "1955 · ООН",
  "L'ammissione arriva dieci anni dopo la fondazione, sbloccata insieme a quella di altri paesi rimasti fuori per la guerra fredda.":
    "Приём приходит через десять лет после основания, вместе с приёмом других стран, остававшихся за порогом из-за холодной войны.",
  "L'**euro** sostituisce la lira come moneta di conto nel **1999** e come contante il **1º gennaio 2002**. L'Italia fa parte dello **spazio Schengen**, del **G7** e del **G20**, e l'**italiano** è una delle lingue ufficiali dell'Unione europea.":
    "**Евро** сменяет лиру как счётные деньги в **1999 году**, а как наличные — **1 января 2002 года**. Италия входит в **шенгенское пространство**, в **G7** и в **G20**, а **итальянский** — один из государственных языков Европейского союза.",
  "In quale anno l'Italia entra nella NATO?": "В каком году Италия вступает в НАТО?",
  "Nel 1946": "В 1946 году",
  "Nel 1949": "В 1949 году",
  "Nel 1955": "В 1955 году",
  "Nel 1957": "В 1957 году",
  "Nel 1949, fra i dodici firmatari originari. Il 1955 è l'ammissione all'ONU e il 1957 la firma dei Trattati di Roma: tre date vicine e distinte.":
    "В 1949 году, среди двенадцати первых подписавших. 1955-й — приём в ООН, а 1957-й — подписание Римских договоров: три даты рядом, но разные.",
  "Roma capitale dell'alimentazione mondiale": "Рим — мировая столица дела о пропитании",
  "Tre agenzie delle Nazioni Unite che si occupano di cibo e agricoltura hanno sede a Roma: la **FAO**, l'**IFAD** e il **Programma alimentare mondiale**. È una concentrazione che nessun'altra città al mondo ha, e fa di Roma la capitale internazionale di quel tema.":
    "Три учреждения Объединённых Наций, ведающих пищей и земледелием, сидят в Риме: **FAO**, **IFAD** и **Всемирная продовольственная программа**. Такого скопления нет ни в одном другом городе мира, и оно делает Рим мировой столицей этого дела.",
  "Quali agenzie delle Nazioni Unite hanno sede a Roma?":
    "Какие учреждения Объединённых Наций сидят в Риме?",
  "Quelle che si occupano di alimentazione e agricoltura": "Те, что ведают пищей и земледелием",
  "Quelle che si occupano di salute": "Те, что ведают здоровьем",
  "Quelle che si occupano di istruzione e cultura": "Те, что ведают образованием и культурой",
  "Quelle che si occupano di lavoro": "Те, что ведают трудом",
  "FAO, IFAD e Programma alimentare mondiale. La salute sta a Ginevra con l'OMS, la cultura a Parigi con l'UNESCO e il lavoro a Ginevra con l'OIL.":
    "FAO, IFAD и Всемирная продовольственная программа. Здоровье — в Женеве, во Всемирной организации здравоохранения, культура — в Париже, в ЮНЕСКО, а труд — в Женеве, в Международной организации труда.",
  "Un paese che è partito e che riceve": "Страна, которая уходила и которая принимает",
  "Fra il 1861 e il 1970 lasciarono l'Italia circa **ventisei milioni** di persone, verso le Americhe prima e verso l'Europa del Nord poi. In molti paesi esistono comunità di origine italiana grandi quanto una regione, e la lingua italiana è parlata fuori dai confini più che dentro certi confini storici.":
    "Между 1861 и 1970 годами Италию покинули около **двадцати шести миллионов** человек: сперва в Америки, потом в северную Европу. Во многих странах есть общины итальянского корня величиной с целую область, и по-итальянски за границами говорят больше, чем внутри иных исторических рубежей.",
  "Dagli anni Ottanta il movimento si è invertito: oggi risiedono in Italia circa **cinque milioni** di cittadini stranieri, la comunità più numerosa delle quali è quella romena. La posizione al centro del Mediterraneo fa dell'Italia una delle frontiere esterne dell'Unione, con tutto ciò che ne consegue nel dibattito pubblico.":
    "С восьмидесятых годов движение повернуло вспять: ныне в Италии живёт около **пяти миллионов** иностранных граждан, и самая многочисленная община — румынская. Положение в середине Средиземного моря делает Италию одной из внешних границ Союза, со всем, что из этого следует в общественных спорах.",
  "Quanti cittadini stranieri risiedono oggi in Italia, all'incirca?":
    "Сколько примерно иностранных граждан живёт сегодня в Италии?",
  "Circa mezzo milione": "Около полумиллиона",
  "Circa due milioni": "Около двух миллионов",
  "Circa cinque milioni": "Около пяти миллионов",
  "Circa dieci milioni": "Около десяти миллионов",
  "Circa cinque milioni, poco meno di un decimo della popolazione. La comunità più numerosa è quella romena. Il movimento si è invertito negli anni Ottanta: fino ad allora l'Italia era un paese da cui si partiva.":
    "Около пяти миллионов, чуть меньше десятой части населения. Самая многочисленная община — румынская. Движение повернуло вспять в восьмидесятые годы: до того Италия была страной, из которой уходили.",
  "Aderire e fondare non sono la stessa cosa. L'Italia è fra i sei paesi che hanno creato la CECA nel 1951 e la CEE nel 1957: non è entrata in un'Europa già esistente, l'ha costruita.":
    "Вступить и основать — не одно и то же. Италия среди шести стран, создавших CECA в 1951 году и ЕЭС в 1957-м: она не вошла в уже существующую Европу, она её построила.",
  "Lavoro, contratti e sindacati": "Работа, договоры и союзы работников",
  "Società e vita quotidiana": "Общество и повседневная жизнь",
  "Perché conta: la Costituzione mette il lavoro nel primo articolo, e il diritto del lavoro italiano ha alcune particolarità che sorprendono chi arriva da altri paesi — a cominciare dal fatto che il salario minimo non lo fissa la legge.":
    "Почему это важно: Конституция ставит труд в первую же статью, а у итальянского трудового права есть особенности, которые удивляют приехавших из других стран, — начиная с того, что наименьшее жалованье не назначает закон.",
  "Che cosa dice la Costituzione": "Что говорит Конституция",
  "L'**articolo 1** fonda la Repubblica sul lavoro; l'**articolo 4** riconosce a tutti il diritto al lavoro e impegna la Repubblica a renderlo effettivo. L'**articolo 36** stabilisce che la retribuzione deve essere **proporzionata** alla quantità e qualità del lavoro e comunque **sufficiente** ad assicurare un'esistenza libera e dignitosa.":
    "**Статья 1** основывает Республику на труде; **статья 4** признаёт за всеми право на труд и обязывает Республику сделать его действительным. **Статья 36** устанавливает, что плата должна быть **соразмерна** количеству и качеству работы и во всяком случае **достаточна**, чтобы обеспечить жизнь свободную и достойную.",
  "L'**articolo 37** garantisce alla donna lavoratrice gli stessi diritti e la stessa retribuzione dell'uomo. L'**articolo 39** riconosce la libertà sindacale e l'**articolo 40** il diritto di sciopero.":
    "**Статья 37** ручается работающей женщине за те же права и ту же плату, что и мужчине. **Статья 39** признаёт свободу союзов работников, а **статья 40** — право на забастовку.",
  "Il contratto collettivo": "Общий договор",
  "In Italia le condizioni minime non sono fissate azienda per azienda ma **settore per settore**, attraverso il **contratto collettivo nazionale di lavoro**, il CCNL, firmato dalle organizzazioni dei datori e dai sindacati. Esistono centinaia di CCNL: metalmeccanici, commercio, edilizia, scuola, sanità privata.":
    "В Италии наименьшие условия задают не от предприятия к предприятию, а **от промысла к промыслу**, через **общегосударственный трудовой договор по отрасли**, CCNL, подписанный товариществами хозяев и союзами работников. Таких CCNL сотни: у металлистов, в торговле, в строительстве, в школе, в частном здравоохранении.",
  "Da qui una conseguenza che spesso sorprende: **l'Italia non ha un salario minimo fissato per legge**. I minimi stanno nei contratti collettivi, e chi lavora in un settore senza contratto applicato può trovarsi senza quella protezione. Il tema è oggetto di discussione da anni.":
    "Отсюда следствие, которое часто удивляет: **в Италии нет наименьшего жалованья, назначенного законом**. Наименьшие ставки стоят в общих договорах, и тот, кто работает в промысле, где договор не применяется, может остаться без этой защиты. Об этом спорят уже годы.",
  "Chi fissa in Italia le retribuzioni minime?":
    "Кто назначает в Италии наименьшую плату за труд?",
  "Una legge nazionale sul salario minimo": "Общегосударственный закон о наименьшем жалованье",
  "I contratti collettivi nazionali, settore per settore":
    "Общегосударственные общие договоры, от промысла к промыслу",
  "Ogni singola azienda": "Каждое отдельное предприятие",
  "Le regioni, con proprie leggi": "Области, своими законами",
  "Non esiste un salario minimo di legge: i minimi stanno nei CCNL firmati per ciascun settore. È una delle particolarità del sistema italiano rispetto a gran parte d'Europa.":
    "Наименьшего жалованья по закону не существует: наименьшие ставки стоят в CCNL, подписанных для каждого промысла. Это одна из особенностей итальянского порядка на фоне большей части Европы.",
  "Le forme del contratto": "Виды договора",
  "Tempo indeterminato": "Договор без срока",
  "Senza scadenza. Resta la forma di riferimento, e il licenziamento richiede una giusta causa o un giustificato motivo.":
    "Без конечного срока. Он остаётся образцовым видом договора, а для увольнения нужна справедливая причина или обоснованный повод.",
  "Tempo determinato": "Договор со сроком",
  "Con una scadenza e limiti di durata e di rinnovo, per evitare che diventi permanente sotto altro nome.":
    "С конечным сроком и с пределами продолжительности и продления, чтобы он не стал постоянным под другим именем.",
  "Apprendistato": "Ученичество",
  "Unisce lavoro e formazione, per i giovani. Prevede contributi ridotti per il datore.":
    "Соединяет работу и обучение, для молодых. Взносы с хозяина при нём меньше.",
  "Partita IVA": "Partita IVA — свой счёт у налоговой",
  "Lavoro autonomo: si fattura invece di ricevere una busta paga, e si versano da soli imposte e contributi.":
    "Работа на себя: вместо расчётного листка выставляешь счета, а налоги и взносы платишь сам.",
  "La busta paga": "Расчётный листок",
  "Fra **lordo** e **netto** corre una differenza notevole: dallo stipendio lordo si sottraggono i contributi previdenziali versati all'**INPS** e l'imposta sul reddito, l'**IRPEF**, che è progressiva a scaglioni come vuole l'articolo 53.":
    "Между **начисленным** и **выданным на руки** разница немалая: из начисленного жалованья вычитают взносы на обеспечение, идущие в **INPS**, и подоходный налог **IRPEF**, который берут ступенями, по возрастающей доле, как того требует статья 53.",
  "Due voci sono tipicamente italiane. La **tredicesima** è una mensilità aggiuntiva pagata a dicembre, e in alcuni settori esiste anche una **quattordicesima** a giugno. Il **TFR**, trattamento di fine rapporto, è una somma accantonata ogni mese e liquidata quando il rapporto finisce, per qualunque motivo finisca.":
    "Две статьи чисто итальянские. **Тринадцатая** — это ещё одно месячное жалованье, выплачиваемое в декабре, а в иных промыслах есть и **четырнадцатая**, в июне. **TFR**, выплата по окончании службы, — это сумма, откладываемая каждый месяц и выдаваемая, когда работа кончается, по какой бы причине она ни кончилась.",
  "Che cos'è la tredicesima?": "Что такое тринадцатая?",
  "Un'imposta aggiuntiva di fine anno": "Добавочный налог в конце года",
  "Una mensilità in più, corrisposta a dicembre":
    "Ещё одно месячное жалованье, выдаваемое в декабре",
  "Il contributo versato all'INPS": "Взнос, идущий в INPS",
  "Il numero massimo di ore settimanali di straordinario":
    "Наибольшее число сверхурочных часов в неделю",
  "Una mensilità aggiuntiva pagata a dicembre. In alcuni settori esiste anche una quattordicesima, di solito a giugno: entrambe sono previste dai contratti collettivi.":
    "Ещё одно месячное жалованье, выплачиваемое в декабре. В иных промыслах есть и четырнадцатая, обыкновенно в июне: обе положены по общим договорам.",
  "I sindacati e le tutele": "Союзы работников и защита",
  "Le tre confederazioni storiche sono **CGIL**, **CISL** e **UIL**, nate dalla scissione del sindacato unitario del dopoguerra lungo linee politiche. Lo **Statuto dei lavoratori** del **1970** ha portato le libertà costituzionali dentro i luoghi di lavoro e vietato il licenziamento senza giusta causa nelle imprese maggiori.":
    "Три исторических объединения — **CGIL**, **CISL** и **UIL**, родившиеся из раскола послевоенного единого союза по расхождению во взглядах на государство. **Устав работников** **1970 года** внёс конституционные свободы внутрь мест работы и запретил на больших предприятиях увольнение без справедливой причины.",
  "Due enti pubblici accompagnano ogni rapporto di lavoro: l'**INPS**, che incassa i contributi e paga pensioni e indennità, e l'**INAIL**, che assicura contro gli infortuni e le malattie professionali. Le **ferie** minime sono quattro settimane l'anno, e almeno due vanno godute nell'anno di maturazione.":
    "Всякую работу сопровождают два казённых учреждения: **INPS**, который собирает взносы и платит пенсии и пособия, и **INAIL**, который страхует от увечий и от болезней, нажитых на работе. Наименьший **отпуск** — четыре недели в год, и по крайней мере две из них надо отгулять в тот же год, в который они набежали.",
  "Che cos'è il TFR?": "Что такое TFR?",
  "Un fondo pensione obbligatorio gestito dai sindacati":
    "Обязательный пенсионный запас, которым ведают союзы работников",
  "Una somma accantonata ogni mese e liquidata alla fine del rapporto di lavoro":
    "Сумма, откладываемая каждый месяц и выдаваемая по окончании работы",
  "Il contributo per la formazione professionale": "Взнос на обучение ремеслу",
  "Un premio legato ai risultati aziendali": "Награда за то, как шли дела у предприятия",
  "Il trattamento di fine rapporto matura ogni mese e viene pagato alla cessazione, qualunque ne sia il motivo: dimissioni, licenziamento o pensione. È una particolarità italiana.":
    "Выплата по окончании службы набегает каждый месяц и выдаётся при уходе, какова бы ни была причина: сам ушёл, уволили или вышел на пенсию. Это итальянская особенность.",
  "Assunzione a tempo indeterminato non significa impossibilità di licenziare. Significa che serve una **giusta causa** o un **giustificato motivo**, e che senza di essi il licenziamento è impugnabile.":
    "Приём на работу без срока не значит, что уволить нельзя. Это значит, что нужна **справедливая причина** или **обоснованный повод**, а без них увольнение можно оспорить.",
  "Sanità e scuola": "Здравоохранение и школа",
  "Perché conta: sono i due servizi che si incontrano per primi vivendo in un paese. In Italia entrambi sono pubblici e universali sulla carta, e in entrambi le regioni contano moltissimo.":
    "Почему это важно: это те две службы, с которыми встречаешься первыми, живя в стране. В Италии обе казённые и на бумаге доступны всем, и в обеих области значат очень много.",
  "Il Servizio sanitario nazionale": "Народная служба здравоохранения",
  "Il **Servizio sanitario nazionale** nasce nel **1978** e sostituisce il vecchio sistema delle casse mutue legate alla categoria professionale. Poggia su tre principi: **universalità** — vale per tutti i residenti — **uguaglianza** e **globalità** della copertura. È finanziato dalla **fiscalità generale**, cioè dalle tasse, non da un premio assicurativo.":
    "**Народная служба здравоохранения** рождается в **1978 году** и заменяет старый порядок взаимных касс, привязанных к ремеслу. Она стоит на трёх началах: **всеобщность** — она для всех живущих в стране, — **равенство** и **полнота** покрытия. Живёт она на **общие подати**, то есть на налоги, а не на страховой взнос.",
  "La gestione però è **regionale**. Ogni regione organizza le proprie aziende sanitarie e i propri ospedali, e da qui nascono differenze reali di attesa, qualità e organizzazione, con una **mobilità sanitaria** che porta molti pazienti del Sud a curarsi al Nord.":
    "А ведают ею **области**. Каждая область устраивает свои лечебные учреждения и свои больницы, и отсюда рождается настоящая разница в очередях, в качестве и в порядке, и **переезд ради лечения**, который везёт многих больных с Юга лечиться на Север.",
  "Il medico di base": "Основной врач",
  "Si sceglie fra quelli disponibili nella propria zona ed è il primo riferimento: visita, prescrive e indirizza allo specialista.":
    "Его выбирают из тех, кто есть в своей округе, и он первый, к кому идут: осматривает, выписывает и направляет к врачу узкого дела.",
  "La tessera sanitaria": "Tessera sanitaria — лечебная карточка",
  "Dà accesso alle prestazioni e riporta il codice fiscale. Sul retro è anche tessera europea di assicurazione malattia.":
    "Она открывает доступ к лечению и несёт на себе codice fiscale. На обороте она же европейская карточка медицинского страхования.",
  "Il ticket": "Ticket — доплата больного",
  "Una quota a carico del paziente per visite ed esami, con esenzioni per reddito, età e patologia. Il pronto soccorso urgente non si paga.":
    "Доля, которую больной платит сам за приёмы и обследования, с освобождением по доходу, возрасту и болезни. За неотложную помощь не платят.",
  "I codici di priorità": "Знаки очерёдности",
  "Al pronto soccorso non si è ricevuti in ordine di arrivo ma di gravità: chi arriva dopo può passare prima.":
    "В неотложной помощи принимают не в порядке прихода, а по тяжести: пришедший позже может пройти раньше.",
  "In quale anno nasce il Servizio sanitario nazionale?":
    "В каком году рождается Народная служба здравоохранения?",
  "Nel 1948": "В 1948 году",
  "Nel 1970": "В 1970 году",
  "Nel 1978": "В 1978 году",
  "Nel 2001": "В 2001 году",
  "Nel 1978, sostituendo le casse mutue legate alla categoria professionale. Prima di allora la copertura dipendeva dal mestiere che si faceva.":
    "В 1978 году, взамен взаимных касс, привязанных к ремеслу. До того покрытие зависело от того, чем человек занимался.",
  "La scuola": "Школа",
  "L'istruzione è **obbligatoria dai sei ai sedici anni** e l'articolo 34 la dichiara gratuita per almeno otto anni. Il percorso comincia prima, con la scuola dell'infanzia dai tre anni, che non è obbligatoria ma è frequentata dalla grande maggioranza dei bambini.":
    "Обучение **обязательно с шести до шестнадцати лет**, а статья 34 объявляет его бесплатным по крайней мере восемь лет. Путь начинается раньше, с детского сада с трёх лет, который не обязателен, но который посещает подавляющее большинство детей.",
  "Primaria": "Начальная",
  "Cinque anni, dai sei agli undici. È quella che tutti chiamano ancora scuola elementare.":
    "Пять лет, с шести до одиннадцати. Это то, что все до сих пор зовут элементарной школой.",
  "Secondaria di primo grado": "Средняя школа первой ступени",
  "Tre anni, dagli undici ai quattordici: le medie. Si chiude con un esame.":
    "Три года, с одиннадцати до четырнадцати: те самые «средние». В конце экзамен.",
  "Secondaria di secondo grado": "Средняя школа второй ступени",
  "Cinque anni. Si sceglie fra liceo, istituto tecnico e istituto professionale, e la scelta si fa a tredici anni.":
    "Пять лет. Выбирают между лицеем, техническим училищем и ремесленным, и выбор делают в тринадцать лет.",
  "Università": "Университет",
  "Laurea triennale e poi magistrale biennale, oppure corsi a ciclo unico per medicina, giurisprudenza e architettura.":
    "Трёхлетняя степень, а затем двухлетняя высшая, либо сплошной курс для врачебного дела, права и зодчества.",
  "L'esame che chiude la secondaria superiore si chiama ufficialmente **esame di Stato** e tutti lo chiamano **maturità**. Dà accesso all'università e si valuta in **centesimi**, con il sessanta come minimo per la promozione.":
    "Экзамен, которым кончается старшая средняя школа, по-настоящему зовётся **государственным экзаменом**, а все зовут его **зрелостью**. Он открывает дорогу в университет и оценивается **по сотне**, где шестьдесят — наименьшее для сдачи.",
  "Fino a quale età l'istruzione è obbligatoria in Italia?":
    "До какого возраста обучение в Италии обязательно?",
  "Fino ai quattordici anni": "До четырнадцати лет",
  "Fino ai sedici anni": "До шестнадцати лет",
  "Fino ai diciotto anni": "До восемнадцати лет",
  "Fino al conseguimento del diploma": "До получения свидетельства",
  "Dai sei ai sedici anni. Il diploma della secondaria superiore si ottiene a diciannove, ma l'obbligo finisce prima: si può assolvere l'ultimo tratto anche in un percorso di formazione professionale.":
    "С шести до шестнадцати лет. Свидетельство старшей средней школы получают в девятнадцать, но обязанность кончается раньше: последний её отрезок можно пройти и в обучении ремеслу.",
  "I voti": "Отметки",
  "Le scale cambiano a ogni livello, e questo confonde chi arriva da fuori. Alla primaria e alle medie si usano i **decimi**, con il sei come sufficienza. Alla maturità si usano i **centesimi**, con il sessanta. All'università si usano i **trentesimi**, con il diciotto come minimo e la possibilità della **lode**. La laurea si valuta in **centodecimi**, e il massimo è centodieci e lode.":
    "Мерка меняется на каждой ступени, и это сбивает приезжих с толку. В начальной и в средней считают **по десятке**, где шесть — уже достаточно. На зрелости считают **по сотне**, где достаточно шестьдесят. В университете считают **по тридцатке**, где восемнадцать — наименьшее, и возможна **похвала**. Степень оценивают **по стодесятке**, и высшее — сто десять с похвалой.",
  "Su quale scala si valutano gli esami universitari in Italia?":
    "По какой мерке оценивают в Италии университетские экзамены?",
  "In decimi": "По десятке",
  "In trentesimi": "По тридцатке",
  "In centesimi": "По сотне",
  "In centodecimi": "По стодесятке",
  "In trentesimi, con diciotto come voto minimo e la lode oltre il trenta. I centodecimi si usano per il voto finale di laurea e i centesimi per la maturità.":
    "По тридцатке, где восемнадцать — наименьшая отметка, а сверх тридцати идёт похвала. По стодесятке считают итоговую отметку за степень, а по сотне — зрелость.",
  "Il **liceo** non è la scuola superiore in generale: è uno dei tre indirizzi, accanto all'istituto tecnico e a quello professionale. Tutti e tre danno un diploma che apre all'università.":
    "**Лицей** — это не старшая школа вообще: это одно из трёх направлений, рядом с техническим и ремесленным училищем. Все три дают свидетельство, открывающее дорогу в университет.",
  "Vivere in Italia": "Жить в Италии",
  "Perché conta: questa è la lezione pratica. Nessuna delle prove qui descritte riguarda la storia o le istituzioni — e questo corso non prepara a nessuna di esse. Servono a sapere che cosa lo Stato chiede, e a chi.":
    "Почему это важно: это лекция о деле. Ни одно из описанных здесь испытаний не касается истории или устройства власти, и этот курс ни к одному из них не готовит. Они нужны, чтобы знать, чего государство требует и с кого.",
  "Il codice fiscale, prima di tutto": "Codice fiscale прежде всего",
  "Il **codice fiscale** è una sigla di sedici caratteri ricavata da nome, cognome, data e luogo di nascita. Non è una tessera: è un identificativo, e serve praticamente per ogni cosa — aprire un conto, firmare un contratto d'affitto, iscriversi al servizio sanitario, comprare una scheda telefonica.":
    "**Codice fiscale** — это набор из шестнадцати знаков, выведенный из имени, фамилии, дня и места рождения. Это не карточка, а опознавательный знак, и нужен он едва ли не для всего: открыть счёт, подписать договор о найме жилья, записаться в службу здравоохранения, купить телефонную карточку.",
  "Segue la **residenza**, cioè l'iscrizione all'anagrafe del comune in cui si abita davvero. Dalla residenza dipendono la carta d'identità, il medico di base, l'iscrizione a scuola e il diritto di voto alle comunali per i cittadini dell'Unione.":
    "Следом идёт **прописка**, то есть запись в anagrafe той коммуны, где человек и вправду живёт. От прописки зависят carta d'identità, основной врач, запись в школу и право голоса на городских выборах для граждан Союза.",
  "Il permesso di soggiorno": "Permesso di soggiorno — вид на жительство",
  "Chi non è cittadino dell'Unione europea ha bisogno di un **permesso di soggiorno**, che si chiede alla **questura** presentando la domanda tramite gli uffici postali abilitati. La durata e le condizioni dipendono dal motivo: lavoro, studio, famiglia, protezione.":
    "Тому, кто не гражданин Европейского союза, нужен **permesso di soggiorno**, о котором просят **questura**, подавая прошение через уполномоченные почтовые отделения. Срок и условия зависят от причины: работа, учёба, семья, защита.",
  "Per il **permesso di soggiorno UE per soggiornanti di lungo periodo**, che non ha scadenza, si richiedono almeno cinque anni di soggiorno regolare, un reddito e la dimostrazione di conoscere l'italiano al livello **A2** attraverso un test.":
    "Для **permesso di soggiorno UE для долго живущих в стране**, у которого срока нет, требуются не менее пяти лет законного проживания, доход и доказанное знание итальянского на уровне **A2**, подтверждённое испытанием.",
  "A che cosa serve il codice fiscale?": "Для чего нужен codice fiscale?",
  "Solo a pagare le imposte": "Только чтобы платить налоги",
  "A identificare la persona in quasi ogni rapporto con enti e privati":
    "Чтобы опознать человека едва ли не в любом деле с учреждениями и с частными лицами",
  "Ad accedere al pronto soccorso": "Чтобы попасть в неотложную помощь",
  "A votare alle elezioni comunali": "Чтобы голосовать на городских выборах",
  "È l'identificativo di base: serve per il conto in banca, il contratto d'affitto, l'iscrizione al servizio sanitario, il contratto di lavoro. Il nome inganna, perché il suo uso va molto oltre il fisco.":
    "Это основной опознавательный знак: он нужен для счёта в банке, для договора о найме жилья, для записи в службу здравоохранения, для трудового договора. Имя его обманчиво, потому что применяют его далеко за пределами податных дел.",
  "L'accordo di integrazione": "Уговор о вживании в общество",
  "Chi entra per la prima volta e chiede un permesso di almeno un anno firma con lo Stato un **accordo di integrazione**, in vigore dal 2012. Funziona a **crediti**: se ne ricevono sedici all'inizio, e vanno mantenuti o accresciuti nell'arco di **due anni**, prorogabili di uno.":
    "Тот, кто въезжает впервые и просит вид на жительство не меньше чем на год, подписывает с государством **уговор о вживании в общество**, действующий с 2012 года. Он держится на **зачётах**: шестнадцать дают в начале, и их надо сохранить или приумножить за **два года**, которые можно продлить ещё на один.",
  "La formazione civica": "Гражданское обучение",
  "Entro tre mesi dalla firma si partecipa a una sessione sull'ordinamento, sui diritti e doveri e sui servizi. Non è un esame: la partecipazione dà crediti.":
    "В три месяца после подписания надо побывать на занятии об устройстве власти, о правах и обязанностях и о службах. Это не экзамен: за само участие дают зачёты.",
  "Che cosa si verifica alla fine": "Что проверяют в конце",
  "Conoscenza dell'italiano parlato almeno al livello A2, conoscenza sufficiente della cultura civica e della vita civile in Italia.":
    "Знание разговорного итальянского не ниже уровня A2 и достаточное знание гражданских порядков и гражданской жизни Италии.",
  "I crediti si perdono": "Зачёты теряются",
  "Condanne penali definitive e sanzioni gravi li riducono. Azzerarli comporta la revoca del permesso di soggiorno.":
    "Окончательные уголовные приговоры и тяжёлые взыскания их убавляют. Свести их к нулю — значит лишиться permesso di soggiorno.",
  "Chi lo firma alla prefettura": "Где его подписывают",
  "L'accordo si sottoscrive davanti allo sportello unico presso la prefettura, che rappresenta il governo in ogni provincia.":
    "Уговор подписывают в едином окне при префектуре, которая представляет правительство в каждой провинции.",
  "È l'unica prova italiana che tocca la conoscenza del paese, e resta molto lontana da un esame di educazione civica: si verifica una conoscenza sufficiente della vita civile, non un programma di storia e istituzioni.":
    "Это единственное итальянское испытание, которое касается знания страны, и от экзамена по гражданскому воспитанию оно очень далеко: проверяют достаточное знание гражданской жизни, а не пройденный курс истории и устройства власти.",
  "Come funziona l'accordo di integrazione?": "Как устроен уговор о вживании в общество?",
  "Con un esame scritto di storia e istituzioni":
    "Письменным экзаменом по истории и устройству власти",
  "Con un sistema a crediti da mantenere in due anni":
    "Порядком зачётов, которые надо сохранить за два года",
  "Con un colloquio annuale in questura": "Ежегодной беседой в questura",
  "Con il versamento di una cauzione": "Внесением залога",
  "Si ricevono sedici crediti alla firma e si verificano dopo due anni, insieme alla conoscenza dell'italiano a livello A2 e a una conoscenza sufficiente della vita civile. Non c'è un esame di educazione civica.":
    "Шестнадцать зачётов дают при подписании и проверяют через два года, вместе со знанием итальянского на уровне A2 и достаточным знанием гражданской жизни. Экзамена по гражданскому воспитанию нет.",
  "La cittadinanza": "Гражданство",
  "Si può diventare cittadini italiani per **discendenza**, per **matrimonio** o per **residenza**. Per residenza il termine ordinario per chi non è cittadino dell'Unione è di **dieci anni**; è più breve per i cittadini dell'Unione, per i rifugiati e per chi è nato in Italia.":
    "Итальянским гражданином можно стать **по крови**, **по браку** или **по проживанию**. По проживанию обычный срок для тех, кто не гражданин Союза, — **десять лет**; он короче для граждан Союза, для беженцев и для рождённых в Италии.",
  "Dal **2018** la domanda per matrimonio e per residenza richiede un certificato di conoscenza dell'italiano non inferiore al livello **B1** del quadro europeo. È una prova **linguistica**: non verte sulla storia, sulla Costituzione o sulle istituzioni.":
    "С **2018 года** прошение по браку и по проживанию требует свидетельства о знании итальянского не ниже уровня **B1** по европейской мерке. Это испытание **языковое**: оно не об истории, не о Конституции и не об устройстве власти.",
  "Quale livello di italiano è richiesto per la domanda di cittadinanza?":
    "Какой уровень итальянского требуется для прошения о гражданстве?",
  "A1": "A1",
  "A2": "A2",
  "B1": "B1",
  "C1": "C1",
  "B1 per la cittadinanza, dal 2018. Il livello A2 serve invece per il permesso di soggiorno di lungo periodo: due prove diverse, con due soglie diverse, entrambe soltanto linguistiche.":
    "B1 для гражданства, с 2018 года. А уровень A2 нужен для permesso di soggiorno на долгий срок: два разных испытания, с двумя разными порогами, и оба только языковые.",
  "Per i servizi online serve un'identità digitale: **SPID** o la **carta d'identità elettronica**. Senza una delle due non si prenota una visita, non si scarica un certificato e non si consulta il proprio fascicolo previdenziale.":
    "Для дел через сеть нужен цифровой опознавательный знак: **SPID** или **электронная carta d'identità**. Без одного из двух не запишешься к врачу, не скачаешь свидетельства и не заглянешь в своё дело о пенсионных взносах.",
  "La vita di tutti i giorni": "Повседневная жизнь",
  "Perché si chiude qui: le regole non scritte si imparano più lentamente di quelle scritte, e sono quelle che fanno sentire a proprio agio o fuori posto. Nessuna di esse è obbligatoria; tutte sono reali.":
    "Почему кончаем этим: неписаные правила усваиваются медленнее писаных, и как раз от них зависит, чувствуешь ли ты себя своим или чужим. Ни одно из них не обязательно; все они настоящие.",
  "Il caffè e la tavola": "Кофе и стол",
  "Il **caffè** in Italia è l'espresso, e si beve **al banco** in un minuto. Il **cappuccino** è una bevanda della **mattina**: ordinarlo dopo pranzo non è vietato da nessuna legge, ma segnala immediatamente che si viene da fuori. Dopo il pasto si prende il caffè, eventualmente **corretto** con un liquore.":
    "**Кофе** в Италии — это эспрессо, и пьют его **у стойки** за минуту. **Капучино** — питьё **утреннее**: заказать его после обеда никакой закон не запрещает, но это сразу выдаёт приезжего. После еды берут кофе, при желании **поправленный** каплей крепкого.",
  "I pasti hanno orari precisi: colazione leggera e dolce, pranzo fra le tredici e le quattordici, cena dalle venti in poi, più tardi man mano che si scende verso sud. Prima di cena c'è l'**aperitivo**, che a Milano è diventato quasi un pasto.":
    "У еды есть свои часы: завтрак лёгкий и сладкий, обед между часом и двумя, ужин с восьми вечера и позже, и чем южнее, тем позже. Перед ужином бывает **аперитив**, который в Милане стал почти отдельной едой.",
  "In quale momento della giornata si beve tradizionalmente il cappuccino?":
    "В какое время дня по обычаю пьют капучино?",
  "Al mattino": "Утром",
  "Dopo pranzo": "После обеда",
  "Dopo cena": "После ужина",
  "In qualunque momento, indifferentemente": "В любое время, безразлично",
  "Il cappuccino appartiene alla colazione. Dopo il pasto si prende l'espresso: non è una regola scritta, ma è seguita così largamente da funzionare come tale.":
    "Капучино принадлежит завтраку. После еды берут эспрессо: правило это нигде не записано, но соблюдают его так широко, что оно работает как записанное.",
  "Una cucina che non esiste": "Кухня, которой не существует",
  "La **cucina italiana** al singolare è in buona parte un'invenzione dell'estero e dell'emigrazione. In Italia la cucina è **regionale**, spesso cittadina: il ragù non è lo stesso a Bologna e a Napoli, la pizza di Napoli e quella romana sono due prodotti diversi, e ogni valle ha il proprio formaggio.":
    "**Итальянская кухня** в единственном числе по большей части выдумана за границей и в изгнании. В Италии кухня **областная**, а часто и городская: рагу в Болонье и в Неаполе не одно и то же, неаполитанская пицца и римская — две разные вещи, и у каждой долины свой сыр.",
  "Vale anche per l'ordine del pasto: antipasto, **primo** — pasta, riso o zuppa — **secondo** con contorno, poi frutta o dolce. Il primo non è un antipasto e il secondo non si accompagna alla pasta: sono due portate distinte, servite una dopo l'altra.":
    "То же и с порядком еды: закуска, **первое** — паста, рис или суп, — **второе** с гарниром, потом плоды или сладкое. Первое — не закуска, а второе не подают вместе с пастой: это две отдельные перемены, одна за другой.",
  "Casa, famiglia, piazza": "Дом, семья, площадь",
  "I giovani italiani lasciano la casa dei genitori più tardi che in quasi tutta Europa, per ragioni che sono soprattutto economiche: affitti, salari d'ingresso, lavoro instabile. I **nonni** hanno spesso un ruolo quotidiano nella cura dei nipoti, e questo tiene insieme molti bilanci familiari.":
    "Молодые итальянцы уходят из родительского дома позже, чем почти везде в Европе, и причины тут прежде всего денежные: плата за жильё, первое жалованье, шаткая работа. **Дедушки и бабушки** часто изо дня в день нянчат внуков, и на этом держится не один семейный достаток.",
  "La **piazza** resta il luogo dello stare insieme, e la **passeggiata** serale è ancora una pratica diffusa nei centri piccoli e medi. Nel rivolgersi a qualcuno si distingue fra **tu** e **lei**: il lei con gli sconosciuti, con chi è più anziano e in ogni contesto formale, finché non è l'altro a proporre il passaggio al tu.":
    "**Площадь** остаётся местом, где сходятся вместе, а вечерняя **прогулка** и поныне обычна в малых и средних городах. Обращаясь к человеку, различают **tu** и **lei**: на «вы» — с незнакомыми, со старшими и во всяком строгом случае, пока другой сам не предложит перейти на «ты».",
  "Quando si usa il lei rivolgendosi a qualcuno?": "Когда, обращаясь к человеку, говорят «вы»?",
  "Solo negli atti scritti": "Только в письменных бумагах",
  "Con gli sconosciuti, con chi è più anziano e nei contesti formali":
    "С незнакомыми, со старшими и во всяком строгом случае",
  "Sempre, anche in famiglia": "Всегда, даже в семье",
  "Soltanto nel Sud del paese": "Только на Юге страны",
  "Il passaggio al tu di solito lo propone la persona più anziana o di posizione superiore. Dare del tu troppo presto a uno sconosciuto è la scortesia più facile da commettere.":
    "Перейти на «ты» обыкновенно предлагает тот, кто старше или выше по положению. Заговорить с незнакомым на «ты» слишком рано — самая лёгкая невежливость из всех возможных.",
  "Lo sport": "Спорт",
  "Il **calcio** è lo sport nazionale: la **Serie A** riempie le conversazioni da agosto a maggio, e la nazionale, gli **azzurri**, ha vinto quattro campionati del mondo. Il colore azzurro delle maglie non viene dalla bandiera ma dal blu Savoia, e la Repubblica ha scelto di conservarlo.":
    "**Футбол** — народный вид спорта: **Серия A** наполняет разговоры с августа по май, а сборная, **лазурные**, взяла четыре первенства мира. Лазурный цвет майки идёт не от знамени, а от савойской синевы, и Республика решила его сохранить.",
  "Il secondo sport per radicamento è il **ciclismo**, con il **Giro d'Italia** che ogni maggio attraversa il paese. Chi è in testa alla classifica indossa la **maglia rosa**, del colore della carta del giornale che lo organizzò.":
    "Второй по укоренённости — **велосипед**, с **Джиро д'Италия**, которая каждый май пересекает страну. Идущий первым надевает **розовую майку**, цвета бумаги той газеты, которая гонку устроила.",
  "Di che colore è la maglia di chi guida la classifica del Giro d'Italia?":
    "Какого цвета майка у того, кто ведёт в Джиро д'Италия?",
  "Gialla": "Жёлтая",
  "Rosa": "Розовая",
  "Verde": "Зелёная",
  "Azzurra": "Лазурная",
  "Rosa, come la carta del quotidiano sportivo che organizzò la corsa. La maglia gialla appartiene invece al Tour de France, per la stessa ragione: il colore della carta del suo giornale.":
    "Розовая, как бумага той спортивной газеты, которая устроила гонку. А жёлтая майка принадлежит Тур де Франс, и по той же самой причине: цвет бумаги её газеты.",
  "Gli orari": "Часы",
  "Molti negozi e uffici chiudono per la **pausa pranzo**, soprattutto nei centri piccoli e al Sud, e riaprono nel pomeriggio fino a sera. Ad **agosto**, e in particolare intorno a **Ferragosto**, chiudono per ferie negozi, studi professionali e interi quartieri delle grandi città.":
    "Многие лавки и конторы закрываются на **обеденный перерыв**, особенно в малых городах и на Юге, а после полудня открываются снова до вечера. В **августе**, и особенно вокруг **Феррагосто**, уходят в отпуск лавки, конторы вольных ремёсел и целые кварталы больших городов.",
  "Nessuna di queste consuetudini è una regola, e in una città grande molte non valgono più. Ma conoscerle spiega perché una porta è chiusa alle quattordici e trenta, e perché il barista alza un sopracciglio davanti a un cappuccino ordinato alle nove di sera.":
    "Ни один из этих обычаев не правило, и в большом городе многие уже не действуют. Но знать их — значит понимать, почему дверь заперта в половине третьего и почему буфетчик поднимает бровь на капучино, заказанный в девять вечера.",
};
