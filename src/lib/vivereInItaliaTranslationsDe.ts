/**
 * German for the Vivere in Italia course cards, headings and questions.
 *
 * Keyed on the ITALIAN source text exactly as it appears in
 * vivereInItaliaCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but check-it-translations fails
 * on a key that matches nothing in the course, because a typo there is silent
 * otherwise: the card renders, the tap works, and the reader is told there is
 * no translation for a card that was in fact translated.
 *
 * Like the Russian and Polish tables and unlike the three older ones, this
 * covers the QUIZZES as well.
 *
 * WHAT STAYS ITALIAN. Institutions in the German form where one is
 * established — the Camera dei Deputati is the Abgeordnetenkammer, the Corte
 * costituzionale the Verfassungsgericht, the Senato the Senat. Where a word
 * is the answer itself and has no German equivalent — comune, regione a
 * statuto speciale, codice fiscale, ISEE — the German gives the meaning and
 * keeps the Italian word beside it, so the reader learns the term they will
 * actually meet at the counter.
 */
export const VIVERE_IN_ITALIA_DE: Record<string, string> = {
  // ── Course line, chapters and lesson titles ─────────────────────────────
  // The course NAME is absent on purpose: it is an interface string and
  // already goes through the i18n tables.
  "Storia, ordinamento e vita quotidiana — come funziona il paese.":
    "Geschichte, Staatsaufbau und Alltag — wie dieses Land funktioniert.",

  "Simboli e principi fondamentali": "Symbole und Grundprinzipien",
  "L'ordinamento della Repubblica": "Der Aufbau der Republik",
  "Storia d'Italia": "Geschichte Italiens",
  "Territorio, economia e l'Italia nel mondo": "Land, Wirtschaft und Italien in der Welt",
  "Società e vita quotidiana": "Gesellschaft und Alltag",

  "Simboli nazionali": "Nationale Symbole",
  "La Costituzione e i principi fondamentali": "Die Verfassung und die Grundprinzipien",
  "Diritti e doveri dei cittadini": "Rechte und Pflichten der Bürgerinnen und Bürger",
  "La lingua italiana e le minoranze linguistiche":
    "Die italienische Sprache und die Sprachminderheiten",
  "Feste civili e religiose": "Staatliche und kirchliche Feiertage",

  "Il Parlamento": "Das Parlament",
  "Il Governo": "Die Regierung",
  "La giustizia e la Corte costituzionale": "Die Justiz und das Verfassungsgericht",
  "Regioni, province e comuni": "Regionen, Provinzen und Gemeinden",

  "Da Roma ai Comuni": "Von Rom zu den Stadtkommunen",
  "Il Rinascimento e gli Stati italiani": "Die Renaissance und die italienischen Staaten",
  "Il Risorgimento e l'Unità": "Das Risorgimento und die Einigung",
  "Le guerre mondiali e il fascismo": "Die Weltkriege und der Faschismus",
  "Resistenza, Repubblica e dopoguerra": "Widerstand, Republik und Nachkriegszeit",

  "Il territorio": "Das Land",
  "Le città e il patrimonio": "Die Städte und das Erbe",
  "L'economia": "Die Wirtschaft",
  "L'Italia in Europa e nel mondo": "Italien in Europa und in der Welt",

  "Lavoro, contratti e sindacati": "Arbeit, Verträge und Gewerkschaften",
  "Sanità e scuola": "Gesundheit und Schule",
  "Vivere in Italia": "Leben in Italien",
  "La vita di tutti i giorni": "Der Alltag",
  // it-simboli
  "Perché si comincia da qui: i simboli si incontrano tutti i giorni — sul municipio, sul passaporto, sulla maglia della nazionale — e sono quindi la porta più facile per entrare in tutto il resto.":
    "Warum man hier anfängt: Symbole begegnen einem jeden Tag — am Rathaus, im Pass, auf dem Trikot der Nationalmannschaft — und sie sind damit die leichteste Tür in alles Übrige.",
  "La bandiera": "Die Flagge",
  "Il **tricolore** ha tre bande verticali di uguali dimensioni: **verde** dalla parte dell'asta, **bianco** al centro, **rosso** al battente. Lo descrive l'**articolo 12** della Costituzione, l'ultimo dei principi fondamentali — il che dice già qualcosa: la bandiera non è un dettaglio decorativo, sta fra le cose che fondano la Repubblica.":
    "Die **Trikolore** hat drei senkrechte Bahnen gleicher Breite: **Grün** am Mast, **Weiß** in der Mitte, **Rot** an der fliegenden Seite. Beschrieben wird sie in **Artikel 12** der Verfassung, dem letzten der Grundprinzipien — was schon etwas sagt: die Flagge ist kein schmückendes Detail, sie steht unter den Dingen, die die Republik begründen.",
  "Nacque a **Reggio Emilia il 7 gennaio 1797**, quando la Repubblica Cispadana lo adottò come proprio vessillo. È la bandiera nazionale più antica d'Europa dopo quelle di Danimarca e Paesi Bassi, e il 7 gennaio si celebra la **Festa del Tricolore**.":
    "Sie entstand am **7. Januar 1797 in Reggio Emilia**, als die Cispadanische Republik sie zu ihrem Banner machte. Sie ist die älteste Nationalflagge Europas nach denen Dänemarks und der Niederlande, und am 7. Januar wird das **Fest der Trikolore** begangen.",
  "Ai colori non è assegnato per legge alcun significato. Le spiegazioni che si sentono — il verde delle pianure, il bianco delle nevi alpine, il rosso del sangue versato — sono letture affettive nate dopo, non una regola scritta da qualche parte.":
    "Den Farben ist von Gesetzes wegen keine Bedeutung zugewiesen. Die Deutungen, die man hört — das Grün der Ebenen, das Weiß des Alpenschnees, das Rot des vergossenen Blutes —, sind später entstandene Lesarten des Gefühls und keine irgendwo geschriebene Regel.",
  "L'emblema": "Das Emblem",
  "L'Italia non ha uno stemma di famiglia regnante: ha un **emblema**, scelto per concorso pubblico e in vigore dal **5 maggio 1948**. Lo disegnò Paolo Paschetto. Non è uno scudo, ed è la differenza che conta: non discende da una dinastia, è stato inventato da una repubblica appena nata per rappresentarsi.":
    "Italien hat kein Wappen eines Herrscherhauses: es hat ein **Emblem**, in einem öffentlichen Wettbewerb ausgewählt und seit dem **5. Mai 1948** in Kraft. Entworfen hat es Paolo Paschetto. Es ist kein Schild, und das ist der Unterschied, auf den es ankommt: es stammt nicht von einer Dynastie ab, sondern wurde von einer eben gegründeten Republik erfunden, um sich selbst darzustellen.",
  "La stella": "Der Stern",
  "La stella d'Italia, il simbolo più antico del paese: accompagna l'immagine dell'Italia da prima dell'Unità.":
    "Der Stern Italiens, das älteste Zeichen des Landes: er begleitet das Bild Italiens schon vor der Einigung.",
  "La ruota dentata": "Das Zahnrad",
  "L'ingranaggio richiama il lavoro, su cui l'articolo 1 fonda la Repubblica.":
    "Das Getriebe verweist auf die Arbeit, auf die Artikel 1 die Republik gründet.",
  "L'olivo e la quercia": "Ölbaum und Eiche",
  "L'olivo per la pace, la quercia per la forza e la dignità. Sono due alberi che crescono in tutta la penisola.":
    "Der Ölbaum für den Frieden, die Eiche für Kraft und Würde. Es sind zwei Bäume, die auf der ganzen Halbinsel wachsen.",
  "Da quale parte della bandiera si trova il verde?": "Auf welcher Seite der Flagge liegt das Grün?",
  "Al centro": "In der Mitte",
  "Dalla parte dell'asta": "Am Mast",
  "Dalla parte del battente": "An der fliegenden Seite",
  "Cambia a seconda della regione": "Das wechselt je nach Region",
  "Verde all'asta, bianco al centro, rosso al battente. L'ordine non è libero: è fissato dall'articolo 12 della Costituzione, e una bandiera con i colori invertiti è semplicemente sbagliata.":
    "Grün am Mast, Weiß in der Mitte, Rot an der fliegenden Seite. Die Reihenfolge ist nicht frei: sie steht in Artikel 12 der Verfassung, und eine Flagge mit vertauschten Farben ist schlicht falsch.",
  "L'inno": "Die Hymne",
  "L'inno nazionale si chiama ufficialmente **Il Canto degli Italiani**, ma tutti lo conoscono come **Inno di Mameli** oppure dal suo primo verso, **Fratelli d'Italia**. Il testo è di **Goffredo Mameli**, che lo scrisse nel **1847** a vent'anni; la musica è di **Michele Novaro**. Mameli morì due anni dopo, a ventun anni, difendendo la Repubblica Romana.":
    "Die Nationalhymne heißt amtlich **Il Canto degli Italiani**, aber alle kennen sie als **Hymne von Mameli** oder nach ihrer ersten Zeile, **Fratelli d'Italia**. Der Text stammt von **Goffredo Mameli**, der ihn **1847** mit zwanzig Jahren schrieb; die Musik ist von **Michele Novaro**. Mameli starb zwei Jahre später, mit einundzwanzig, bei der Verteidigung der Römischen Republik.",
  "Curiosamente l'inno è stato per settant'anni un inno di fatto: adottato in via provvisoria nel **1946**, è diventato inno ufficiale per legge soltanto il **4 dicembre 2017**. In Italia le cose provvisorie durano.":
    "Kurioserweise war die Hymne siebzig Jahre lang eine Hymne der Praxis: 1946 nur vorläufig angenommen, wurde sie erst am **4. Dezember 2017** durch Gesetz zur offiziellen Hymne. In Italien halten die vorläufigen Dinge lange.",
  "Chi scrisse il testo dell'inno nazionale?": "Wer schrieb den Text der Nationalhymne?",
  "Michele Novaro": "Michele Novaro",
  "Giuseppe Verdi": "Giuseppe Verdi",
  "Goffredo Mameli": "Goffredo Mameli",
  "Giuseppe Mazzini": "Giuseppe Mazzini",
  "Il testo è di Goffredo Mameli, la musica di Michele Novaro: per questo si dice Inno di Mameli e non Inno di Novaro. Verdi non c'entra, anche se il coro del Nabucco viene spesso proposto come alternativa.":
    "Der Text ist von Goffredo Mameli, die Musik von Michele Novaro: deshalb heißt sie Hymne von Mameli und nicht Hymne von Novaro. Verdi hat damit nichts zu tun, auch wenn der Chor aus Nabucco oft als Alternative vorgeschlagen wird.",
  "Le date della Repubblica": "Die Daten der Republik",
  "2 giugno": "2. Juni",
  "Festa della Repubblica. Ricorda il referendum del 2 e 3 giugno 1946, con cui gli italiani scelsero la repubblica al posto della monarchia.":
    "Fest der Republik. Es erinnert an das Referendum vom 2. und 3. Juni 1946, mit dem die Italiener die Republik anstelle der Monarchie wählten.",
  "25 aprile": "25. April",
  "Anniversario della Liberazione, la fine dell'occupazione nazifascista nel 1945.":
    "Jahrestag der Befreiung, des Endes der nationalsozialistisch-faschistischen Besatzung 1945.",
  "4 novembre": "4. November",
  "Giorno dell'Unità nazionale e Festa delle Forze armate: l'armistizio del 1918. Non è più giorno festivo dal 1977 e si celebra la prima domenica di novembre.":
    "Tag der nationalen Einheit und Fest der Streitkräfte: der Waffenstillstand von 1918. Seit 1977 ist er kein Feiertag mehr und wird am ersten Sonntag im November begangen.",
  "Il **2 giugno** è la festa nazionale vera e propria. A Roma si svolgono la deposizione della corona all'Altare della Patria e la parata lungo via dei Fori Imperiali, con il sorvolo delle Frecce Tricolori che lasciano nel cielo le tre bande.":
    "Der **2. Juni** ist der eigentliche Nationalfeiertag. In Rom werden ein Kranz am Altar des Vaterlandes niedergelegt und eine Parade über die Via dei Fori Imperiali abgehalten, mit dem Überflug der Frecce Tricolori, die die drei Bahnen an den Himmel schreiben.",
  "Che cosa si ricorda il 2 giugno?": "Woran erinnert der 2. Juni?",
  "La proclamazione del Regno d'Italia nel 1861": "An die Ausrufung des Königreichs Italien 1861",
  "Il referendum del 1946 e la nascita della Repubblica":
    "An das Referendum von 1946 und die Geburt der Republik",
  "L'entrata in vigore della Costituzione": "An das Inkrafttreten der Verfassung",
  "La fine della Seconda guerra mondiale": "An das Ende des Zweiten Weltkriegs",
  "Il 2 giugno 1946 gli italiani votarono per la repubblica contro la monarchia, e nello stesso giorno elessero l'Assemblea costituente. Il Regno era stato proclamato l'11 marzo 1861, la Costituzione entrò in vigore il 1º gennaio 1948: tre date diverse che è facile confondere.":
    "Am 2. Juni 1946 stimmten die Italiener für die Republik und gegen die Monarchie und wählten am selben Tag die Verfassunggebende Versammlung. Das Königreich war am 11. März 1861 ausgerufen worden, die Verfassung trat am 1. Januar 1948 in Kraft: drei verschiedene Daten, die leicht zu verwechseln sind.",
  "Da non confondere: il **7 gennaio** è la Festa del Tricolore, cioè della bandiera; il **2 giugno** è la Festa della Repubblica. Solo la seconda è giorno festivo.":
    "Nicht verwechseln: der **7. Januar** ist das Fest der Trikolore, also der Flagge; der **2. Juni** ist das Fest der Republik. Nur das zweite ist ein Feiertag.",
  // it-costituzione
  "Perché conta: quasi tutto quello che verrà dopo — il Parlamento, le regioni, i diritti, perfino la bandiera — è scritto in un unico testo del 1947. Chi lo conosce a grandi linee ha già la mappa del resto del corso.":
    "Warum das zählt: fast alles, was danach kommt — das Parlament, die Regionen, die Rechte, sogar die Flagge — steht in einem einzigen Text von 1947. Wer ihn in Umrissen kennt, hat schon die Karte des restlichen Kurses.",
  "Come è nata": "Wie sie entstand",
  "Il **2 giugno 1946**, nello stesso giorno del referendum, gli italiani elessero l'**Assemblea costituente**. Fu la prima consultazione a suffragio davvero universale della storia italiana: **votarono per la prima volta le donne**. L'Assemblea lavorò un anno e mezzo e approvò il testo il **22 dicembre 1947**.":
    "Am **2. Juni 1946**, am selben Tag wie das Referendum, wählten die Italiener die **Verfassunggebende Versammlung**. Es war die erste wirklich allgemeine Wahl der italienischen Geschichte: **zum ersten Mal wählten Frauen**. Die Versammlung arbeitete anderthalb Jahre und beschloss den Text am **22. Dezember 1947**.",
  "La Costituzione fu promulgata il **27 dicembre 1947** dal capo provvisorio dello Stato **Enrico De Nicola** ed entrò in vigore il **1º gennaio 1948**. Fu scritta da un'assemblea in cui sedevano insieme democratici cristiani, comunisti, socialisti, liberali e azionisti: è un testo di compromesso, e si vede.":
    "Die Verfassung wurde am **27. Dezember 1947** vom vorläufigen Staatsoberhaupt **Enrico De Nicola** ausgefertigt und trat am **1. Januar 1948** in Kraft. Geschrieben hat sie eine Versammlung, in der Christdemokraten, Kommunisten, Sozialisten, Liberale und Aktionisten nebeneinander saßen: es ist ein Text des Kompromisses, und man sieht es ihm an.",
  "Quando è entrata in vigore la Costituzione?": "Wann trat die Verfassung in Kraft?",
  "Il 2 giugno 1946": "Am 2. Juni 1946",
  "Il 22 dicembre 1947": "Am 22. Dezember 1947",
  "Il 1º gennaio 1948": "Am 1. Januar 1948",
  "Il 25 aprile 1945": "Am 25. April 1945",
  "Approvata il 22 dicembre 1947, promulgata il 27 dicembre, entrata in vigore il 1º gennaio 1948. Le tre date sono vicine ma distinte: approvazione, firma, efficacia.":
    "Beschlossen am 22. Dezember 1947, ausgefertigt am 27. Dezember, in Kraft getreten am 1. Januar 1948. Die drei Daten liegen nah beieinander und sind doch verschieden: Beschluss, Unterschrift, Wirksamkeit.",
  "Come è fatta": "Wie sie gebaut ist",
  "Il testo ha **139 articoli** più diciotto disposizioni transitorie e finali, ed è diviso in tre parti disuguali.":
    "Der Text hat **139 Artikel** und dazu achtzehn Übergangs- und Schlussbestimmungen und ist in drei ungleiche Teile gegliedert.",
  "Principi fondamentali": "Grundprinzipien",
  "Articoli 1–12. Dodici articoli che dicono che cosa è la Repubblica prima di dire come funziona.":
    "Artikel 1–12. Zwölf Artikel, die sagen, was die Republik ist, bevor sie sagen, wie sie funktioniert.",
  "Parte I · Diritti e doveri dei cittadini": "Teil I · Rechte und Pflichten der Bürgerinnen und Bürger",
  "Articoli 13–54. Le libertà, la famiglia, la salute, la scuola, il lavoro, il voto, le tasse.":
    "Artikel 13–54. Die Freiheiten, die Familie, die Gesundheit, die Schule, die Arbeit, die Wahl, die Steuern.",
  "Parte II · Ordinamento della Repubblica": "Teil II · Der Aufbau der Republik",
  "Articoli 55–139. Parlamento, Governo, Presidente, magistratura, regioni. È il capitolo 2 di questo corso.":
    "Artikel 55–139. Parlament, Regierung, Präsident, Justiz, Regionen. Das ist Kapitel 2 dieses Kurses.",
  "I primi articoli": "Die ersten Artikel",
  "L'**articolo 1** stabilisce che l'Italia è una Repubblica democratica **fondata sul lavoro** e che la sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione. Quella formula sul lavoro fu il compromesso trovato fra chi voleva una repubblica dei lavoratori e chi voleva una formula più generale.":
    "**Artikel 1** bestimmt, dass Italien eine demokratische Republik ist, **gegründet auf die Arbeit**, und dass die Souveränität dem Volk zusteht, das sie in den Formen und Grenzen der Verfassung ausübt. Jene Formel über die Arbeit war der Kompromiss zwischen denen, die eine Republik der Arbeitenden wollten, und denen, die eine allgemeinere Formel vorzogen.",
  "L'**articolo 3** enuncia due uguaglianze, non una. La prima è **formale**: tutti sono uguali davanti alla legge senza distinzione di sesso, razza, lingua, religione, opinioni politiche, condizioni personali e sociali. La seconda è **sostanziale**: è compito della Repubblica rimuovere gli ostacoli che di fatto impediscono quell'uguaglianza. Il secondo comma è quello che giustifica le politiche sociali.":
    "**Artikel 3** spricht zwei Gleichheiten aus, nicht eine. Die erste ist die **formale**: alle sind vor dem Gesetz gleich, ohne Unterschied nach Geschlecht, Rasse, Sprache, Religion, politischer Meinung sowie persönlichen und sozialen Verhältnissen. Die zweite ist die **materielle**: es ist Aufgabe der Republik, die Hindernisse zu beseitigen, die diese Gleichheit tatsächlich verhindern. Der zweite Absatz ist der, der die Sozialpolitik trägt.",
  "L'**articolo 11** contiene il verbo più discusso del testo: l'Italia **ripudia** la guerra come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali. Lo stesso articolo consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: su questa frase poggia l'adesione italiana all'Unione europea.":
    "**Artikel 11** enthält das meistdiskutierte Verb des Textes: Italien **verwirft** den Krieg als Mittel des Angriffs auf die Freiheit anderer Völker und als Weg zur Lösung internationaler Streitigkeiten. Derselbe Artikel lässt die Souveränitätsbeschränkungen zu, die eine Ordnung braucht, welche den Frieden sichert: auf diesem Satz ruht der italienische Beitritt zur Europäischen Union.",
  "Quanti sono gli articoli dei principi fondamentali?": "Wie viele Artikel umfassen die Grundprinzipien?",
  "Sette": "Sieben",
  "Dodici": "Zwölf",
  "Ventuno": "Einundzwanzig",
  "Centotrentanove": "Einhundertneununddreißig",
  "I principi fondamentali sono gli articoli da 1 a 12, prima ancora della Parte I. Centotrentanove è il totale degli articoli della Costituzione.":
    "Die Grundprinzipien sind die Artikel 1 bis 12, noch vor Teil I. Einhundertneununddreißig ist die Gesamtzahl der Artikel der Verfassung.",
  "Una costituzione rigida": "Eine starre Verfassung",
  "La Costituzione non si cambia con una legge ordinaria. L'**articolo 138** impone una procedura aggravata: ciascuna Camera deve approvare due volte, a distanza di almeno tre mesi, e nella seconda votazione serve la maggioranza assoluta. Se non si raggiungono i due terzi, cinquecentomila elettori, cinque consigli regionali o un quinto dei parlamentari possono chiedere un **referendum confermativo**.":
    "Die Verfassung ändert man nicht mit einem gewöhnlichen Gesetz. **Artikel 138** schreibt ein erschwertes Verfahren vor: jede Kammer muss zweimal zustimmen, im Abstand von mindestens drei Monaten, und bei der zweiten Abstimmung braucht es die absolute Mehrheit. Werden keine zwei Drittel erreicht, können fünfhunderttausend Wahlberechtigte, fünf Regionalräte oder ein Fünftel der Abgeordneten ein **bestätigendes Referendum** verlangen.",
  "L'**articolo 139** mette un limite ancora più netto: la **forma repubblicana non può essere oggetto di revisione costituzionale**. Non esiste procedura, per quanto aggravata, che possa riportare la monarchia.":
    "**Artikel 139** setzt eine noch schärfere Grenze: die **republikanische Staatsform kann nicht Gegenstand einer Verfassungsänderung sein**. Es gibt kein Verfahren, so erschwert es auch sei, das die Monarchie zurückbringen könnte.",
  "Che cosa non può essere modificato in nessun modo?": "Was lässt sich auf keine Weise ändern?",
  "Il numero dei parlamentari": "Die Zahl der Parlamentsmitglieder",
  "La forma repubblicana": "Die republikanische Staatsform",
  "La durata del mandato presidenziale": "Die Dauer der Amtszeit des Präsidenten",
  "L'articolo 139 sottrae la forma repubblicana a qualsiasi revisione. Tutto il resto — parlamentari, mandato, perfino l'articolo 12 sulla bandiera — è modificabile con la procedura dell'articolo 138.":
    "Artikel 139 entzieht die republikanische Staatsform jeder Änderung. Alles Übrige — die Abgeordnetenzahl, die Amtszeit, sogar Artikel 12 über die Flagge — lässt sich im Verfahren des Artikels 138 ändern.",
  "Il referendum dell'articolo 138 è **confermativo** e non ha quorum: vale qualunque sia l'affluenza. È cosa diversa dal referendum **abrogativo** dell'articolo 75, che invece è valido solo se vota la maggioranza degli aventi diritto.":
    "Das Referendum des Artikels 138 ist **bestätigend** und kennt kein Quorum: es gilt unabhängig von der Beteiligung. Das ist etwas anderes als das **aufhebende** Referendum des Artikels 75, das nur gültig ist, wenn die Mehrheit der Wahlberechtigten abstimmt.",
  // it-diritti-doveri
  "Perché conta: la Parte I non elenca soltanto quello che si può fare. Elenca anche quattro doveri, e sono quelli che trasformano un abitante in un cittadino.":
    "Warum das zählt: Teil I zählt nicht nur auf, was man tun darf. Er zählt auch vier Pflichten auf, und die sind es, die aus einer Einwohnerin eine Bürgerin machen.",
  "Quattro gruppi di rapporti": "Vier Gruppen von Verhältnissen",
  "La Parte I va dall'articolo 13 al 54 ed è divisa in quattro titoli, ognuno dei quali guarda la persona da un lato diverso: **rapporti civili**, **etico-sociali**, **economici** e **politici**.":
    "Teil I reicht von Artikel 13 bis 54 und ist in vier Titel gegliedert, von denen jeder die Person von einer anderen Seite betrachtet: **bürgerliche**, **ethisch-soziale**, **wirtschaftliche** und **politische** Verhältnisse.",
  "Civili · 13–28": "Bürgerliche · 13–28",
  "Libertà personale, domicilio, corrispondenza, circolazione, riunione, associazione, religione, pensiero, difesa in giudizio.":
    "Persönliche Freiheit, Wohnung, Briefverkehr, Freizügigkeit, Versammlung, Vereinigung, Religion, Meinung, Verteidigung vor Gericht.",
  "Etico-sociali · 29–34": "Ethisch-soziale · 29–34",
  "Famiglia, salute, scuola. Qui stanno il diritto alle cure e l'istruzione obbligatoria.":
    "Familie, Gesundheit, Schule. Hier stehen das Recht auf Behandlung und die Schulpflicht.",
  "Economici · 35–47": "Wirtschaftliche · 35–47",
  "Lavoro, retribuzione, sindacati, sciopero, impresa, proprietà, risparmio.":
    "Arbeit, Entlohnung, Gewerkschaften, Streik, Unternehmen, Eigentum, Sparen.",
  "Politici · 48–54": "Politische · 48–54",
  "Voto, partiti, petizioni, accesso agli uffici pubblici, difesa della patria, tributi, fedeltà alla Repubblica.":
    "Wahl, Parteien, Petitionen, Zugang zu öffentlichen Ämtern, Verteidigung des Vaterlandes, Abgaben, Treue zur Republik.",
  "Le libertà": "Die Freiheiten",
  "L'**articolo 13** dichiara inviolabile la libertà personale: nessuna detenzione o perquisizione se non per atto motivato dell'autorità giudiziaria. Se in casi eccezionali interviene la polizia, deve avvisare il giudice entro quarantotto ore, e il giudice ha altre quarantotto ore per convalidare. Passate le novantasei ore senza convalida, il provvedimento perde ogni effetto.":
    "**Artikel 13** erklärt die persönliche Freiheit für unverletzlich: keine Festnahme und keine Durchsuchung ohne begründete Anordnung der Justizbehörde. Greift in Ausnahmefällen die Polizei ein, muss sie den Richter binnen achtundvierzig Stunden benachrichtigen, und der Richter hat weitere achtundvierzig Stunden zur Bestätigung. Sind sechsundneunzig Stunden ohne Bestätigung vergangen, verliert die Maßnahme jede Wirkung.",
  "L'**articolo 21** garantisce a tutti il diritto di manifestare liberamente il proprio pensiero con la parola, lo scritto e ogni altro mezzo di diffusione. La stampa non può essere soggetta ad autorizzazioni o censure: è una frase scritta da chi aveva appena vissuto vent'anni di giornali autorizzati.":
    "**Artikel 21** sichert jedem das Recht, seine Gedanken frei in Wort, Schrift und jedem anderen Verbreitungsmittel zu äußern. Die Presse darf keiner Genehmigung und keiner Zensur unterworfen werden: ein Satz, geschrieben von Menschen, die eben zwanzig Jahre genehmigter Zeitungen hinter sich hatten.",
  "Entro quanto tempo l'autorità giudiziaria deve essere avvisata di un fermo di polizia?":
    "Binnen welcher Frist muss die Justizbehörde von einer polizeilichen Festnahme unterrichtet werden?",
  "Entro ventiquattro ore": "Binnen vierundzwanzig Stunden",
  "Entro quarantotto ore": "Binnen achtundvierzig Stunden",
  "Entro una settimana": "Binnen einer Woche",
  "Non è previsto alcun termine": "Eine Frist ist nicht vorgesehen",
  "Quarantotto ore per l'avviso al giudice e altre quarantotto per la convalida. Se il termine passa senza convalida, il provvedimento è revocato e resta privo di effetto: il tempo qui non è una formalità, è la garanzia.":
    "Achtundvierzig Stunden für die Meldung an den Richter und weitere achtundvierzig für die Bestätigung. Läuft die Frist ohne Bestätigung ab, wird die Maßnahme aufgehoben und bleibt wirkungslos: die Zeit ist hier keine Formalie, sie ist die Garantie.",
  // it-diritti-doveri
  "La pena e il processo": "Die Strafe und das Verfahren",
  "L'**articolo 27** contiene tre regole che stanno insieme: la responsabilità penale è **personale**, l'imputato **non è considerato colpevole** fino alla condanna definitiva, e le pene devono tendere alla **rieducazione** del condannato. Lo stesso articolo chiude con quattro parole: non è ammessa la pena di morte.":
    "**Artikel 27** enthält drei Regeln, die zusammengehören: die strafrechtliche Verantwortung ist **persönlich**, die angeklagte Person **gilt nicht als schuldig** bis zur rechtskräftigen Verurteilung, und die Strafen müssen auf die **Wiedereingliederung** der verurteilten Person zielen. Derselbe Artikel schließt mit vier Worten: die Todesstrafe ist nicht zulässig.",
  "L'**articolo 24** garantisce a tutti il diritto di agire in giudizio e la difesa in ogni stato del procedimento; ai non abbienti lo Stato assicura i mezzi per agire e difendersi, ed è da qui che nasce il **patrocinio a spese dello Stato**.":
    "**Artikel 24** sichert allen das Recht, vor Gericht zu klagen, und die Verteidigung in jedem Verfahrensstadium; Bedürftigen sichert der Staat die Mittel, um zu klagen und sich zu verteidigen, und daraus entsteht die **Prozesskostenhilfe**.",
  "I doveri": "Die Pflichten",
  "Il **voto** (articolo 48) è definito insieme diritto e **dovere civico**: non è sanzionato, ma la Costituzione lo chiama con quel nome di proposito. L'**articolo 52** definisce la difesa della patria un sacro dovere. L'**articolo 54** chiede a tutti fedeltà alla Repubblica e, a chi ricopre funzioni pubbliche, di adempierle con disciplina e onore.":
    "Die **Wahl** (Artikel 48) ist zugleich als Recht und als **staatsbürgerliche Pflicht** bezeichnet: sanktioniert wird sie nicht, aber die Verfassung nennt sie mit Absicht so. **Artikel 52** nennt die Verteidigung des Vaterlandes eine heilige Pflicht. **Artikel 54** verlangt von allen Treue zur Republik und von denen, die öffentliche Ämter bekleiden, sie mit Disziplin und Ehre auszuüben.",
  "L'**articolo 53** è il dovere che si incontra ogni anno: tutti concorrono alle spese pubbliche **in ragione della propria capacità contributiva**, e il sistema tributario è informato a criteri di **progressività**. Chi guadagna di più non paga solo di più: paga una quota maggiore. È il principio su cui poggiano gli scaglioni dell'IRPEF.":
    "**Artikel 53** ist die Pflicht, der man jedes Jahr begegnet: alle tragen zu den öffentlichen Ausgaben bei, **nach Maßgabe ihrer Leistungsfähigkeit**, und das Steuersystem folgt dem Grundsatz der **Progression**. Wer mehr verdient, zahlt nicht nur mehr: er zahlt einen größeren Anteil. Auf diesem Grundsatz ruhen die Stufen der Einkommensteuer.",
  "Che cosa significa che il sistema tributario è progressivo?":
    "Was bedeutet es, dass das Steuersystem progressiv ist?",
  "Che le tasse aumentano ogni anno": "Dass die Steuern jedes Jahr steigen",
  "Che chi ha un reddito più alto paga una quota proporzionalmente maggiore":
    "Dass ein höheres Einkommen einen verhältnismäßig größeren Anteil zahlt",
  "Che tutti pagano la stessa percentuale": "Dass alle denselben Prozentsatz zahlen",
  "Che si paga a rate": "Dass in Raten gezahlt wird",
  "Progressività significa che l'aliquota cresce con il reddito, non solo l'importo. Una tassa uguale in percentuale per tutti sarebbe proporzionale, non progressiva: l'articolo 53 chiede espressamente la seconda.":
    "Progression heißt, dass der Steuersatz mit dem Einkommen wächst, nicht nur der Betrag. Ein für alle gleicher Prozentsatz wäre proportional, nicht progressiv: Artikel 53 verlangt ausdrücklich das Zweite.",
  "Come definisce il voto la Costituzione?": "Wie bezeichnet die Verfassung die Wahl?",
  "Solo un diritto": "Nur als Recht",
  "Un diritto e un dovere civico": "Als Recht und als staatsbürgerliche Pflicht",
  "Un obbligo sanzionabile con una multa": "Als eine mit Geldbuße bewehrte Pflicht",
  "Una facoltà riservata a chi paga le tasse": "Als ein Vorrecht derer, die Steuern zahlen",
  "L'articolo 48 usa entrambe le parole: il voto è un diritto e il suo esercizio è un dovere civico. Dovere civico però non vuol dire obbligo sanzionato — chi non vota non paga nulla.":
    "Artikel 48 benutzt beide Wörter: die Wahl ist ein Recht, und ihre Ausübung ist eine staatsbürgerliche Pflicht. Staatsbürgerliche Pflicht heißt aber nicht sanktionierte Pflicht — wer nicht wählt, zahlt nichts.",
  "Molte di queste garanzie valgono per **tutti**, non solo per i cittadini: l'articolo 13 dice nessuno, l'articolo 21 dice tutti. I diritti riservati ai cittadini sono soprattutto quelli politici — il voto, l'accesso ai pubblici uffici.":
    "Viele dieser Garantien gelten für **alle**, nicht nur für Staatsangehörige: Artikel 13 sagt niemand, Artikel 21 sagt alle. Den Staatsangehörigen vorbehalten sind vor allem die politischen Rechte — die Wahl, der Zugang zu öffentlichen Ämtern.",
  // it-lingue
  "Perché conta: l'Italia è unita da centosessant'anni, ma la sua unità linguistica è molto più recente — ed è ancora incompleta, per legge e di proposito.":
    "Warum das zählt: Italien ist seit hundertsechzig Jahren geeint, aber seine sprachliche Einheit ist viel jünger — und sie ist immer noch unvollständig, von Gesetzes wegen und mit Absicht.",
  "Una lingua giovane": "Eine junge Sprache",
  "L'italiano standard non nasce da un parlato ma da una **lingua scritta**: il fiorentino letterario del Trecento di **Dante, Petrarca e Boccaccio**, scelto nel Cinquecento come modello per tutta la penisola. Per secoli è stata la lingua della scrittura mentre si parlava altro.":
    "Das Standarditalienische entsteht nicht aus einer gesprochenen Sprache, sondern aus einer **Schriftsprache**: dem literarischen Florentinisch des 14. Jahrhunderts von **Dante, Petrarca und Boccaccio**, das im 16. Jahrhundert zum Vorbild für die ganze Halbinsel gewählt wurde. Jahrhundertelang war es die Sprache des Schreibens, während man anderes sprach.",
  "Alla proclamazione del Regno, nel 1861, chi sapeva usare l'italiano era una piccola minoranza: la stima più citata, quella del linguista **Tullio De Mauro**, parla di poco più del due per cento della popolazione, e altri studiosi arrivano a percentuali più alte, comunque lontane dalla maggioranza. A unificare la lingua sono stati la scuola dell'obbligo, la leva militare, l'emigrazione interna e — negli anni Cinquanta e Sessanta — la televisione.":
    "Bei der Ausrufung des Königreichs 1861 war, wer Italienisch gebrauchen konnte, eine kleine Minderheit: die meistzitierte Schätzung, die des Sprachwissenschaftlers **Tullio De Mauro**, spricht von wenig mehr als zwei Prozent der Bevölkerung, und andere Forschende kommen auf höhere Anteile, die von einer Mehrheit gleichwohl weit entfernt sind. Vereinheitlicht haben die Sprache die Schulpflicht, der Militärdienst, die Binnenwanderung und — in den fünfziger und sechziger Jahren — das Fernsehen.",
  "L'**Accademia della Crusca**, fondata a Firenze nel **1583**, è la più antica accademia linguistica del mondo ancora attiva. Il suo nome viene dall'immagine della farina separata dalla crusca: separare le parole buone dalle altre.":
    "Die **Accademia della Crusca**, 1583 in Florenz gegründet, ist die älteste noch tätige Sprachakademie der Welt. Ihr Name kommt vom Bild des Mehls, das von der Kleie getrennt wird: die guten Wörter von den anderen zu scheiden.",
  "Da quale parlata deriva l'italiano standard?":
    "Aus welcher Sprachform geht das Standarditalienische hervor?",
  "Dal romano dell'epoca imperiale": "Aus dem Römischen der Kaiserzeit",
  "Dal fiorentino letterario del Trecento": "Aus dem literarischen Florentinisch des 14. Jahrhunderts",
  "Dal milanese dell'Ottocento": "Aus dem Mailändischen des 19. Jahrhunderts",
  "Dal napoletano del Seicento": "Aus dem Neapolitanischen des 17. Jahrhunderts",
  "Il modello è il fiorentino di Dante, Petrarca e Boccaccio, adottato come lingua scritta comune nel Cinquecento. Il latino è l'antenato di tutte le parlate italiane, non il modello dell'italiano moderno.":
    "Das Vorbild ist das Florentinisch von Dante, Petrarca und Boccaccio, im 16. Jahrhundert als gemeinsame Schriftsprache angenommen. Das Lateinische ist der Vorfahr aller italienischen Sprachformen, nicht das Vorbild des modernen Italienisch.",
  "Dialetti o lingue?": "Dialekte oder Sprachen?",
  "Quelli che in Italia si chiamano **dialetti** in genere non sono varianti dell'italiano: sono lingue romanze sorelle, discese dal latino per conto proprio. Il napoletano, il siciliano, il veneto o il piemontese non derivano dall'italiano più di quanto lo spagnolo derivi dal francese.":
    "Was in Italien **Dialekte** heißt, sind in der Regel keine Spielarten des Italienischen: es sind romanische Schwestersprachen, die für sich aus dem Lateinischen hervorgegangen sind. Das Neapolitanische, das Sizilianische, das Venezische oder das Piemontesische leiten sich vom Italienischen nicht mehr ab als das Spanische vom Französischen.",
  "Il dialetto non è scomparso. Secondo le rilevazioni ISTAT una quota consistente della popolazione lo usa ancora, soprattutto in famiglia e fra amici, spesso alternandolo all'italiano nella stessa conversazione.":
    "Der Dialekt ist nicht verschwunden. Nach den Erhebungen des Statistikamts gebraucht ihn ein beträchtlicher Teil der Bevölkerung weiterhin, vor allem in der Familie und unter Freunden, oft im Wechsel mit dem Italienischen im selben Gespräch.",
  "Le minoranze riconosciute": "Die anerkannten Minderheiten",
  "L'**articolo 6** della Costituzione impegna la Repubblica a tutelare con apposite norme le minoranze linguistiche. La **legge 482 del 1999** ha dato attuazione a quell'articolo dopo cinquant'anni, riconoscendo **dodici** minoranze storiche.":
    "**Artikel 6** der Verfassung verpflichtet die Republik, die sprachlichen Minderheiten durch eigene Vorschriften zu schützen. Das **Gesetz 482 von 1999** hat diesen Artikel nach fünfzig Jahren umgesetzt und **zwölf** historische Minderheiten anerkannt.",
  "Le dodici": "Die zwölf",
  "Albanesi, catalane, germaniche, greche, slovene, croate, e le popolazioni parlanti francese, franco-provenzale, friulano, ladino, occitano e sardo.":
    "Albanische, katalanische, germanische, griechische, slowenische und kroatische Gemeinschaften sowie die Bevölkerungsgruppen, die Französisch, Frankoprovenzalisch, Friaulisch, Ladinisch, Okzitanisch und Sardisch sprechen.",
  "Alto Adige · Südtirol": "Südtirol · Alto Adige",
  "Il tedesco è equiparato all'italiano: atti bilingui, scuole separate per gruppo linguistico, e la proporzionale etnica per i posti pubblici.":
    "Das Deutsche ist dem Italienischen gleichgestellt: zweisprachige Bescheide, nach Sprachgruppen getrennte Schulen und der ethnische Proporz bei den öffentlichen Stellen.",
  "Valle d'Aosta": "Aostatal",
  "Il francese è equiparato all'italiano fin dallo statuto speciale del 1948; nelle valli walser si parlano anche varietà germaniche.":
    "Das Französische ist dem Italienischen seit dem Sonderstatut von 1948 gleichgestellt; in den Walsertälern werden auch germanische Mundarten gesprochen.",
  "Friuli Venezia Giulia": "Friaul-Julisch Venetien",
  "Tutela dello sloveno nelle province di Trieste, Gorizia e Udine, e del friulano, parlato da alcune centinaia di migliaia di persone.":
    "Schutz des Slowenischen in den Provinzen Triest, Görz und Udine und des Friaulischen, das mehrere Hunderttausend Menschen sprechen.",
  "Quale legge dà attuazione all'articolo 6 sulle minoranze linguistiche?":
    "Welches Gesetz setzt Artikel 6 über die sprachlichen Minderheiten um?",
  "La legge 482 del 1999": "Das Gesetz 482 von 1999",
  "La legge 194 del 1978": "Das Gesetz 194 von 1978",
  "La legge 300 del 1970": "Das Gesetz 300 von 1970",
  "La legge 91 del 1992": "Das Gesetz 91 von 1992",
  "La legge 15 dicembre 1999, n. 482, riconosce dodici minoranze linguistiche storiche. La 300 del 1970 è lo Statuto dei lavoratori e la 91 del 1992 riguarda la cittadinanza: numeri facili da scambiare.":
    "Das Gesetz vom 15. Dezember 1999, Nr. 482, erkennt zwölf historische Sprachminderheiten an. Die 300 von 1970 ist das Arbeitnehmerstatut und die 91 von 1992 betrifft die Staatsangehörigkeit: leicht zu verwechselnde Nummern.",
  "In quale regione il francese è equiparato all'italiano?":
    "In welcher Region ist das Französische dem Italienischen gleichgestellt?",
  "In Piemonte": "Im Piemont",
  "In Liguria": "In Ligurien",
  "In Valle d'Aosta": "Im Aostatal",
  "In Trentino-Alto Adige": "In Trentino-Südtirol",
  "La Valle d'Aosta è bilingue italiano-francese per statuto speciale. In Trentino-Alto Adige la seconda lingua è il tedesco, e in Piemonte si parlano occitano e franco-provenzale, tutelati ma non equiparati.":
    "Das Aostatal ist durch Sonderstatut italienisch-französisch zweisprachig. In Trentino-Südtirol ist die zweite Sprache das Deutsche, und im Piemont spricht man Okzitanisch und Frankoprovenzalisch, geschützt, aber nicht gleichgestellt.",
  "L'italiano non è dichiarato lingua ufficiale nei principi fondamentali della Costituzione. Lo si ricava dallo statuto del Trentino-Alto Adige e dalla legge 482, che lo chiama lingua ufficiale della Repubblica: una di quelle cose che sembrano ovvie e non sono scritte dove ci si aspetta.":
    "Das Italienische wird in den Grundprinzipien der Verfassung nicht zur Amtssprache erklärt. Man leitet es aus dem Statut von Trentino-Südtirol und aus dem Gesetz 482 ab, das es Amtssprache der Republik nennt: eines jener Dinge, die selbstverständlich scheinen und nicht dort stehen, wo man sie erwartet.",
  // it-feste
  "Perché conta: il calendario racconta un paese meglio di molti manuali. In Italia le feste nazionali sono dodici, e una tredicesima cambia da città a città.":
    "Warum das zählt: der Kalender erzählt ein Land besser als viele Handbücher. In Italien gibt es zwölf gesetzliche Feiertage, und ein dreizehnter wechselt von Stadt zu Stadt.",
  "I giorni festivi": "Die Feiertage",
  "Sono festivi per legge dodici giorni all'anno, più il patrono locale. Quattro sono civili, gli altri religiosi — l'equilibrio di un paese che è stato a lungo cattolico e ha scritto una costituzione laica.":
    "Gesetzlich arbeitsfrei sind zwölf Tage im Jahr, dazu der örtliche Schutzpatron. Vier sind weltlich, die übrigen kirchlich — das Gleichgewicht eines Landes, das lange katholisch war und sich eine weltliche Verfassung gegeben hat.",
  "Feste civili": "Weltliche Feiertage",
  "25 aprile, Liberazione · 1º maggio, festa dei lavoratori · 2 giugno, Repubblica. La quarta è il 1º gennaio, che è civile ma senza contenuto politico.":
    "25. April, Befreiung · 1. Mai, Tag der Arbeit · 2. Juni, Republik. Der vierte ist der 1. Januar, weltlich, aber ohne politischen Inhalt.",
  "Feste religiose fisse": "Feste kirchliche Feiertage",
  "6 gennaio Epifania · 15 agosto Assunzione · 1º novembre Ognissanti · 8 dicembre Immacolata · 25 dicembre Natale · 26 dicembre Santo Stefano.":
    "6. Januar Erscheinung des Herrn · 15. August Mariä Himmelfahrt · 1. November Allerheiligen · 8. Dezember Unbefleckte Empfängnis · 25. Dezember Weihnachten · 26. Dezember Stephanstag.",
  "Feste mobili": "Bewegliche Feiertage",
  "La Pasqua e il Lunedì dell'Angelo, che tutti chiamano Pasquetta. La data dipende dal primo plenilunio di primavera.":
    "Ostern und der Ostermontag, den alle Pasquetta nennen. Das Datum hängt vom ersten Frühlingsvollmond ab.",
  "Il patrono": "Der Schutzpatron",
  "Ogni comune ha il suo giorno festivo: sant'Ambrogio a Milano il 7 dicembre, san Gennaro a Napoli il 19 settembre, santi Pietro e Paolo a Roma il 29 giugno.":
    "Jede Gemeinde hat ihren eigenen Feiertag: der heilige Ambrosius in Mailand am 7. Dezember, der heilige Januarius in Neapel am 19. September, die Heiligen Petrus und Paulus in Rom am 29. Juni.",
  "Quale di queste è una festa civile e non religiosa?":
    "Welcher davon ist ein weltlicher und kein kirchlicher Feiertag?",
  "L'Epifania": "Die Erscheinung des Herrn",
  "Il 25 aprile": "Der 25. April",
  "Il 15 agosto": "Der 15. August",
  "L'8 dicembre": "Der 8. Dezember",
  "Il 25 aprile è l'anniversario della Liberazione, una data storica. Epifania, Assunzione e Immacolata sono ricorrenze religiose entrate nel calendario civile.":
    "Der 25. April ist der Jahrestag der Befreiung, ein historisches Datum. Erscheinung des Herrn, Mariä Himmelfahrt und Unbefleckte Empfängnis sind kirchliche Feste, die in den bürgerlichen Kalender eingegangen sind.",
  "Ferragosto": "Ferragosto",
  "Il **15 agosto** la Chiesa celebra l'Assunzione, ma il nome della festa è più antico: **Ferragosto** viene dalle *feriae Augusti*, il riposo istituito dall'imperatore **Augusto nel 18 avanti Cristo** alla fine dei lavori agricoli. È la festa in cui l'Italia si ferma davvero: nelle settimane intorno chiudono uffici, negozi e interi quartieri delle città.":
    "Am **15. August** feiert die Kirche Mariä Himmelfahrt, aber der Name des Festes ist älter: **Ferragosto** kommt von den *feriae Augusti*, der Ruhezeit, die Kaiser **Augustus 18 vor Christus** am Ende der Feldarbeit einführte. Es ist das Fest, an dem Italien wirklich stillsteht: in den Wochen darum schließen Büros, Läden und ganze Stadtviertel.",
  "I giorni della memoria": "Die Gedenktage",
  "Alcune ricorrenze non sono festive ma sono istituite per legge, e nelle scuole si osservano.":
    "Manche Jahrestage sind keine Feiertage, aber gesetzlich eingeführt, und in den Schulen werden sie begangen.",
  "27 gennaio": "27. Januar",
  "Giorno della Memoria, per le vittime della Shoah, delle leggi razziali e della deportazione. È la data della liberazione di Auschwitz.":
    "Tag des Gedenkens, für die Opfer der Schoa, der Rassengesetze und der Deportation. Es ist das Datum der Befreiung von Auschwitz.",
  "10 febbraio": "10. Februar",
  "Giorno del Ricordo, per le vittime delle foibe e per l'esodo giuliano-dalmata.":
    "Tag der Erinnerung, für die Opfer der Foibe-Massaker und für die Vertreibung aus Julisch Venetien und Dalmatien.",
  "9 maggio": "9. Mai",
  "Giorno della memoria delle vittime del terrorismo, nell'anniversario del ritrovamento del corpo di Aldo Moro nel 1978.":
    "Gedenktag für die Opfer des Terrorismus, am Jahrestag des Fundes von Aldo Moros Leichnam 1978.",
  "Da dove viene il nome Ferragosto?": "Woher kommt der Name Ferragosto?",
  "Dal ferro battuto nelle fiere estive": "Vom geschmiedeten Eisen auf den Sommermärkten",
  "Dalle feriae Augusti, il riposo istituito dall'imperatore Augusto":
    "Von den feriae Augusti, der von Kaiser Augustus eingeführten Ruhezeit",
  "Dall'Assunzione di Maria": "Von Mariä Himmelfahrt",
  "Dalla fiera del bestiame di agosto": "Vom Viehmarkt im August",
  "Il nome viene dalle feriae Augusti del 18 avanti Cristo, quindi da una festa romana precedente di secoli alla ricorrenza cristiana che poi si è sovrapposta alla stessa data.":
    "Der Name kommt von den feriae Augusti aus dem Jahr 18 vor Christus, also von einem römischen Fest, das dem christlichen um Jahrhunderte vorausging und sich später mit ihm auf dasselbe Datum legte.",
  "Le feste che non sono nel calendario": "Die Feste, die nicht im Kalender stehen",
  "Accanto alle date ufficiali ci sono ricorrenze che scandiscono l'anno senza essere festive: il **Carnevale**, che a Venezia e a Viareggio dura settimane; la **Befana** del 6 gennaio, che porta i doni ai bambini e riempie le calze di carbone di zucchero; il **palio** o la **sagra** di paese, che in molti comuni è l'evento più partecipato dell'anno.":
    "Neben den amtlichen Daten gibt es Anlässe, die das Jahr gliedern, ohne Feiertage zu sein: der **Karneval**, der in Venedig und Viareggio Wochen dauert; die **Befana** am 6. Januar, die den Kindern die Geschenke bringt und die Strümpfe mit Zuckerkohle füllt; der **Palio** oder das **Dorffest**, das in vielen Gemeinden die bestbesuchte Veranstaltung des Jahres ist.",
  "Che cosa si ricorda il 27 gennaio?": "Woran erinnert der 27. Januar?",
  "L'esodo giuliano-dalmata": "An die Vertreibung aus Julisch Venetien und Dalmatien",
  "Le vittime della Shoah": "An die Opfer der Schoa",
  "Le vittime del terrorismo": "An die Opfer des Terrorismus",
  "La fine della Prima guerra mondiale": "An das Ende des Ersten Weltkriegs",
  "Il Giorno della Memoria cade il 27 gennaio, anniversario della liberazione di Auschwitz. Il Giorno del Ricordo, dedicato alle foibe e all'esodo, è il 10 febbraio: due date vicine e distinte.":
    "Der Tag des Gedenkens fällt auf den 27. Januar, den Jahrestag der Befreiung von Auschwitz. Der Tag der Erinnerung, den Foibe-Massakern und der Vertreibung gewidmet, ist der 10. Februar: zwei nahe und doch verschiedene Daten.",
  "Il patrono è giorno festivo **solo nel proprio comune**. Un ufficio milanese chiude il 7 dicembre; lo stesso giorno a Roma si lavora normalmente.":
    "Der Schutzpatron ist **nur in der eigenen Gemeinde** ein Feiertag. Ein Mailänder Büro schließt am 7. Dezember; in Rom wird am selben Tag normal gearbeitet.",
  // it-parlamento
  "Perché conta: in Italia le due camere hanno gli stessi identici poteri. È una scelta rara in Europa, e spiega da sola perché qui fare una legge richieda più tempo che altrove.":
    "Warum das zählt: in Italien haben die beiden Kammern genau dieselben Befugnisse. Das ist in Europa selten und erklärt für sich allein, warum ein Gesetz hier länger braucht als anderswo.",
  "Due camere, gli stessi poteri": "Zwei Kammern, dieselben Befugnisse",
  "Il Parlamento è formato dalla **Camera dei deputati** e dal **Senato della Repubblica**. Il sistema si chiama **bicameralismo paritario** — spesso detto perfetto: le due camere fanno esattamente le stesse cose. Entrambe votano la fiducia al governo, entrambe devono approvare ogni legge, e nel medesimo testo.":
    "Das Parlament besteht aus der **Abgeordnetenkammer** und dem **Senat der Republik**. Das System heißt **paritätischer Bikameralismus** — oft perfekter genannt: die beiden Kammern tun genau dasselbe. Beide sprechen der Regierung das Vertrauen aus, beide müssen jedes Gesetz beschließen, und zwar im gleichen Wortlaut.",
  "Se una camera modifica anche una virgola, il testo torna all'altra. L'andirivieni si chiama **navetta** e può durare a lungo. Nessun altro grande paese europeo funziona così: in Germania il Bundesrat interviene solo su certe materie, in Francia l'ultima parola spetta all'Assemblea nazionale.":
    "Ändert eine Kammer auch nur ein Komma, geht der Text an die andere zurück. Dieses Hin und Her heißt **navetta** und kann lange dauern. Kein anderes großes europäisches Land arbeitet so: in Deutschland greift der Bundesrat nur bei bestimmten Materien ein, in Frankreich hat die Nationalversammlung das letzte Wort.",
  "Camera dei deputati": "Abgeordnetenkammer",
  "400 deputati, a Palazzo Montecitorio. Si può essere eletti a partire da 25 anni.":
    "400 Abgeordnete, im Palazzo Montecitorio. Wählbar ist man ab 25 Jahren.",
  "Senato della Repubblica": "Senat der Republik",
  "200 senatori elettivi, a Palazzo Madama. Per essere eletti servono 40 anni.":
    "200 gewählte Senatoren, im Palazzo Madama. Für die Wahl braucht es 40 Jahre.",
  "Senatori a vita": "Senatoren auf Lebenszeit",
  "Gli ex Presidenti della Repubblica lo sono di diritto. Il Presidente in carica può nominarne fino a cinque per altissimi meriti.":
    "Die ehemaligen Präsidenten der Republik sind es von Rechts wegen. Der amtierende Präsident kann bis zu fünf weitere für höchste Verdienste ernennen.",
  "Cinque anni": "Fünf Jahre",
  "Tanto dura la legislatura, salvo scioglimento anticipato — che in Italia è tutt'altro che raro.":
    "So lange dauert die Wahlperiode, außer bei vorzeitiger Auflösung — die in Italien alles andere als selten ist.",
  "I numeri sono cambiati di recente: fino al 2022 i deputati erano **630** e i senatori elettivi **315**. Il taglio a 400 e 200 è stato deciso da una legge costituzionale confermata dal **referendum del 2020** e si è applicato dalle elezioni successive.":
    "Die Zahlen haben sich vor Kurzem geändert: bis 2022 waren es **630** Abgeordnete und **315** gewählte Senatoren. Die Kürzung auf 400 und 200 wurde durch ein Verfassungsgesetz beschlossen, das das **Referendum von 2020** bestätigte, und sie gilt seit den folgenden Wahlen.",
  "Quanti deputati siedono oggi alla Camera?": "Wie viele Abgeordnete sitzen heute in der Kammer?",
  "200": "200",
  "315": "315",
  "400": "400",
  "630": "630",
  "Quattrocento dal 2022, dopo il referendum del 2020. Seicentotrenta era il numero precedente, e duecento è quello dei senatori elettivi.":
    "Vierhundert seit 2022, nach dem Referendum von 2020. Sechshundertdreißig war die frühere Zahl, und zweihundert ist die der gewählten Senatoren.",
  "Chi vota e chi può essere eletto": "Wer wählt und wer gewählt werden kann",
  "Per entrambe le camere si vota a **diciotto anni**. Non è sempre stato così: fino alla legge costituzionale del **2021** il Senato si eleggeva solo dai venticinque anni in su, e per quasi settant'anni i giovani hanno avuto in mano una scheda sola su due.":
    "Für beide Kammern wählt man mit **achtzehn Jahren**. Das war nicht immer so: bis zum Verfassungsgesetz von **2021** wurde der Senat erst ab fünfundzwanzig gewählt, und fast siebzig Jahre lang hatten junge Menschen nur einen von zwei Stimmzetteln in der Hand.",
  "Che cosa significa bicameralismo paritario?": "Was bedeutet paritätischer Bikameralismus?",
  "Che le due camere hanno gli stessi poteri": "Dass die beiden Kammern dieselben Befugnisse haben",
  "Che le due camere hanno lo stesso numero di membri":
    "Dass die beiden Kammern gleich viele Mitglieder haben",
  "Che le due camere si riuniscono sempre insieme": "Dass die beiden Kammern immer gemeinsam tagen",
  "Che ogni regione elegge lo stesso numero di parlamentari":
    "Dass jede Region gleich viele Parlamentsmitglieder wählt",
  "Paritario si riferisce ai poteri, non ai numeri: Camera e Senato hanno funzioni identiche pur avendo quattrocento membri l'una e duecento l'altro.":
    "Paritätisch bezieht sich auf die Befugnisse, nicht auf die Zahlen: Kammer und Senat haben identische Aufgaben, obwohl die eine vierhundert und der andere zweihundert Mitglieder hat.",
  "Il referendum abrogativo": "Das aufhebende Referendum",
  "L'**articolo 75** consente a **cinquecentomila elettori** o a **cinque consigli regionali** di chiedere l'abrogazione di una legge. Il voto è valido solo se partecipa la **maggioranza degli aventi diritto**: sotto quella soglia il risultato non conta, quale che sia. Restano fuori le leggi tributarie e di bilancio, l'amnistia e l'indulto, e la ratifica dei trattati internazionali.":
    "**Artikel 75** erlaubt es **fünfhunderttausend Wahlberechtigten** oder **fünf Regionalräten**, die Aufhebung eines Gesetzes zu verlangen. Die Abstimmung ist nur gültig, wenn die **Mehrheit der Wahlberechtigten** teilnimmt: unter dieser Schwelle zählt das Ergebnis nicht, wie immer es ausfällt. Ausgenommen bleiben Steuer- und Haushaltsgesetze, Amnestie und Straferlass sowie die Ratifizierung völkerrechtlicher Verträge.",
  "Alcuni referendum hanno cambiato il paese più di molte legislature: il **divorzio** nel 1974 e l'**aborto** nel 1981, in entrambi i casi con la conferma delle leggi che si voleva cancellare, e il **nucleare** nel 1987 e di nuovo nel 2011.":
    "Manche Referenden haben das Land stärker verändert als viele Legislaturperioden: die **Scheidung** 1974 und der **Schwangerschaftsabbruch** 1981, beide Male mit der Bestätigung der Gesetze, die man streichen wollte, und die **Kernkraft** 1987 und noch einmal 2011.",
  "Chi è senatore a vita di diritto, senza bisogno di nomina?":
    "Wer ist Senator auf Lebenszeit von Rechts wegen, ohne Ernennung?",
  "Gli ex Presidenti del Consiglio": "Die ehemaligen Ministerpräsidenten",
  "Gli ex Presidenti della Repubblica": "Die ehemaligen Präsidenten der Republik",
  "I presidenti delle regioni a statuto speciale": "Die Präsidenten der Regionen mit Sonderstatut",
  "I giudici della Corte costituzionale a fine mandato": "Die Verfassungsrichter am Ende ihrer Amtszeit",
  "Gli ex capi dello Stato lo diventano automaticamente. Gli altri senatori a vita sono nominati dal Presidente in carica, non più di cinque, per meriti nel campo sociale, scientifico, artistico o letterario.":
    "Die früheren Staatsoberhäupter werden es von selbst. Die anderen Senatoren auf Lebenszeit ernennt der amtierende Präsident, höchstens fünf, für Verdienste im sozialen, wissenschaftlichen, künstlerischen oder literarischen Bereich.",
  "Il quorum del cinquanta per cento riguarda il referendum **abrogativo**. Quello **confermativo** su una legge costituzionale non ne ha: due strumenti che portano lo stesso nome e funzionano in modo opposto.":
    "Das Quorum von fünfzig Prozent betrifft das **aufhebende** Referendum. Das **bestätigende** über ein Verfassungsgesetz kennt keines: zwei Instrumente, die denselben Namen tragen und entgegengesetzt funktionieren.",
  // it-governo
  "Perché conta: chi guida il governo in Italia non è eletto da nessuno con quel nome sulla scheda, e non può licenziare i propri ministri. Due fatti che spiegano molta della politica italiana.":
    "Warum das zählt: wer in Italien die Regierung führt, wird von niemandem unter diesem Namen auf dem Stimmzettel gewählt und kann seine eigenen Minister nicht entlassen. Zwei Tatsachen, die viel von der italienischen Politik erklären.",
  "Come nasce un governo": "Wie eine Regierung entsteht",
  "Il Governo è formato dal **Presidente del Consiglio dei ministri** e dai **ministri**, che insieme compongono il **Consiglio dei ministri**. La sede è **Palazzo Chigi**.":
    "Die Regierung besteht aus dem **Präsidenten des Ministerrats** und den **Ministern**, die zusammen den **Ministerrat** bilden. Der Sitz ist der **Palazzo Chigi**.",
  "L'**articolo 92** stabilisce il percorso: il Presidente della Repubblica nomina il Presidente del Consiglio e, **su proposta di quest'ultimo**, i ministri. Prima di nominare, il capo dello Stato svolge le **consultazioni**: riceve i gruppi parlamentari per capire chi possa avere una maggioranza.":
    "**Artikel 92** legt den Weg fest: der Präsident der Republik ernennt den Präsidenten des Ministerrats und, **auf dessen Vorschlag**, die Minister. Vor der Ernennung führt das Staatsoberhaupt die **Konsultationen**: es empfängt die Fraktionen, um zu verstehen, wer eine Mehrheit haben könnte.",
  "Entro **dieci giorni** dalla formazione il governo si presenta alle camere per la **fiducia** (articolo 94). Serve quella di entrambe: un governo che l'ottiene alla Camera e la perde al Senato non esiste.":
    "Binnen **zehn Tagen** nach der Bildung stellt sich die Regierung den Kammern zur **Vertrauensabstimmung** (Artikel 94). Es braucht das Vertrauen beider: eine Regierung, die es in der Kammer bekommt und im Senat verliert, gibt es nicht.",
  "Chi nomina il Presidente del Consiglio?": "Wer ernennt den Präsidenten des Ministerrats?",
  "Gli elettori, con il voto alle politiche": "Die Wählerinnen und Wähler bei der Parlamentswahl",
  "Il Presidente della Repubblica": "Der Präsident der Republik",
  "La Camera dei deputati": "Die Abgeordnetenkammer",
  "Il partito che ha preso più voti": "Die Partei mit den meisten Stimmen",
  "Lo nomina il capo dello Stato, dopo le consultazioni. Il nome del candidato può comparire sui manifesti elettorali, ma sulla scheda si votano i partiti e i loro candidati, non il capo del governo.":
    "Ernannt wird er vom Staatsoberhaupt, nach den Konsultationen. Der Name der Kandidatin kann auf den Wahlplakaten stehen, aber auf dem Stimmzettel wählt man Parteien und ihre Kandidaten, nicht den Regierungschef.",
  "Un primo fra pari": "Ein Erster unter Gleichen",
  "Il Presidente del Consiglio **dirige la politica generale del governo** e ne è responsabile, ma **non può revocare un ministro**. È una differenza netta rispetto al cancelliere tedesco o al primo ministro britannico: un ministro che non si dimette resta al suo posto, e l'unica via è la crisi dell'intero governo.":
    "Der Präsident des Ministerrats **leitet die allgemeine Politik der Regierung** und trägt dafür die Verantwortung, **kann einen Minister aber nicht entlassen**. Das ist ein deutlicher Unterschied zum deutschen Kanzler oder zur britischen Premierministerin: ein Minister, der nicht zurücktritt, bleibt im Amt, und der einzige Weg ist die Krise der ganzen Regierung.",
  "Da qui la brevità dei governi italiani: dal 1946 se ne sono succeduti a un ritmo che dà una durata media di poco più di un anno. La continuità l'hanno garantita l'amministrazione e — spesso — gli stessi ministri, che cambiavano governo senza cambiare scrivania.":
    "Daher die Kürze der italienischen Regierungen: seit 1946 folgten sie einander in einem Takt, der eine durchschnittliche Dauer von wenig mehr als einem Jahr ergibt. Die Beständigkeit sicherten die Verwaltung und — oft — dieselben Minister, die die Regierung wechselten, ohne den Schreibtisch zu wechseln.",
  "Quando il governo fa le leggi": "Wenn die Regierung Gesetze macht",
  "Decreto legge · art. 77": "Gesetzesdekret · Art. 77",
  "In casi straordinari di necessità e urgenza. Entra in vigore subito, ma decade dall'inizio se il Parlamento non lo converte in legge entro sessanta giorni.":
    "In außerordentlichen Fällen von Notwendigkeit und Dringlichkeit. Es tritt sofort in Kraft, verfällt aber von Anfang an, wenn das Parlament es nicht binnen sechzig Tagen in ein Gesetz umwandelt.",
  "Decreto legislativo · art. 76": "Gesetzesvertretende Verordnung · Art. 76",
  "Il Parlamento delega il governo a scrivere una normativa, fissando principi, criteri e un termine. Serve per i testi lunghi e tecnici, come i codici.":
    "Das Parlament ermächtigt die Regierung, eine Regelung zu schreiben, und setzt Grundsätze, Kriterien und eine Frist. Sie dient für lange und technische Texte wie die Gesetzbücher.",
  "Regolamento": "Verordnung",
  "Norme di dettaglio che attuano una legge. Non hanno forza di legge e non possono contraddirla.":
    "Ausführungsvorschriften zu einem Gesetz. Sie haben keine Gesetzeskraft und dürfen ihm nicht widersprechen.",
  "Che cosa succede a un decreto legge non convertito entro sessanta giorni?":
    "Was geschieht mit einem Gesetzesdekret, das nicht binnen sechzig Tagen umgewandelt wird?",
  "Diventa definitivo automaticamente": "Es wird automatisch endgültig",
  "Decade, e perde effetto fin dall'inizio": "Es verfällt und verliert seine Wirkung von Anfang an",
  "Resta in vigore altri sessanta giorni": "Es bleibt weitere sechzig Tage in Kraft",
  "Passa alla Corte costituzionale": "Es geht an das Verfassungsgericht",
  "Decade retroattivamente: è come se non fosse mai esistito, e il Parlamento deve semmai regolare i rapporti sorti nel frattempo. Sessanta giorni è un termine severo, ed è per questo che i decreti si accumulano a fine scadenza.":
    "Es verfällt rückwirkend: es ist, als hätte es nie bestanden, und das Parlament muss allenfalls die inzwischen entstandenen Verhältnisse regeln. Sechzig Tage sind eine strenge Frist, und deshalb häufen sich die Dekrete zum Fristende.",
  "Come cade": "Wie sie fällt",
  "La **mozione di sfiducia** deve essere firmata da almeno un decimo dei componenti della camera e non può essere discussa prima di **tre giorni** dalla presentazione: il tempo serve a raffreddare gli animi. Nella pratica, però, i governi italiani cadono quasi sempre per **dimissioni**, non per un voto: un partito esce dalla maggioranza e il Presidente del Consiglio sale al Quirinale.":
    "Der **Misstrauensantrag** muss von mindestens einem Zehntel der Mitglieder der Kammer unterzeichnet sein und darf frühestens **drei Tage** nach der Einreichung beraten werden: die Zeit soll die Gemüter abkühlen. In der Praxis fallen italienische Regierungen aber fast immer durch **Rücktritt** und nicht durch eine Abstimmung: eine Partei verlässt die Mehrheit, und der Ministerpräsident fährt zum Quirinal hinauf.",
  "Il Presidente del Consiglio può revocare un ministro?":
    "Kann der Präsident des Ministerrats einen Minister entlassen?",
  "Sì, in qualsiasi momento": "Ja, jederzeit",
  "Sì, con l'accordo del Consiglio dei ministri": "Ja, mit dem Einverständnis des Ministerrats",
  "No: può proporne la nomina, non la revoca":
    "Nein: er kann die Ernennung vorschlagen, nicht die Entlassung",
  "Solo con l'autorizzazione del Parlamento": "Nur mit Ermächtigung des Parlaments",
  "L'articolo 92 gli dà il potere di proporre i ministri al Presidente della Repubblica, non quello di rimuoverli. Un ministro che rifiuta di dimettersi si toglie solo aprendo una crisi di governo.":
    "Artikel 92 gibt ihm die Befugnis, dem Präsidenten der Republik die Minister vorzuschlagen, nicht sie abzuberufen. Einen Minister, der den Rücktritt verweigert, wird man nur los, indem man eine Regierungskrise eröffnet.",
  "Presidente della Repubblica e Presidente del Consiglio sono due cariche diverse e si confondono di continuo. Il primo sta al **Quirinale** e dura sette anni; il secondo sta a **Palazzo Chigi** e dura quanto la sua maggioranza.":
    "Präsident der Republik und Präsident des Ministerrats sind zwei verschiedene Ämter und werden fortwährend verwechselt. Der erste sitzt im **Quirinal** und amtiert sieben Jahre; der zweite sitzt im **Palazzo Chigi** und amtiert so lange wie seine Mehrheit.",
  // it-presidente
  "Perché conta: sulla carta il capo dello Stato è una figura di garanzia che firma. Nei momenti di crisi è la persona che decide chi prova a governare — e in Italia le crisi non sono rare.":
    "Warum das zählt: auf dem Papier ist das Staatsoberhaupt eine Figur der Gewähr, die unterschreibt. In Krisenzeiten ist es die Person, die entscheidet, wer eine Regierung versucht — und Krisen sind in Italien nicht selten.",
  "Come si elegge": "Wie er gewählt wird",
  "Il Presidente è eletto dal **Parlamento in seduta comune**, cioè deputati e senatori insieme, con l'aggiunta di **cinquantotto delegati regionali**: tre per ogni regione, uno solo per la Valle d'Aosta, che è troppo piccola per tre.":
    "Der Präsident wird vom **Parlament in gemeinsamer Sitzung** gewählt, also von Abgeordneten und Senatoren zusammen, ergänzt um **achtundfünfzig Regionaldelegierte**: drei je Region, nur einen für das Aostatal, das für drei zu klein ist.",
  "Nei primi tre scrutini serve la maggioranza dei **due terzi**; dal quarto basta la **maggioranza assoluta**. Il voto è segreto, e la segretezza produce i **franchi tiratori**: parlamentari che votano contro le indicazioni del proprio gruppo senza che nessuno sappia chi siano. Alcune elezioni hanno richiesto oltre venti scrutini.":
    "In den ersten drei Wahlgängen braucht es die **Zweidrittelmehrheit**; ab dem vierten genügt die **absolute Mehrheit**. Die Abstimmung ist geheim, und die Geheimhaltung erzeugt die **franchi tiratori**, die Heckenschützen: Abgeordnete, die gegen die Vorgabe der eigenen Fraktion stimmen, ohne dass jemand weiß, wer sie sind. Manche Wahlen haben über zwanzig Wahlgänge gebraucht.",
  "Sette anni": "Sieben Jahre",
  "Il mandato è più lungo della legislatura di proposito: il Presidente non deve dipendere dal Parlamento che lo ha eletto.":
    "Die Amtszeit ist mit Absicht länger als die Wahlperiode: der Präsident soll nicht von dem Parlament abhängen, das ihn gewählt hat.",
  "Cinquant'anni": "Fünfzig Jahre",
  "L'età minima. Servono anche la cittadinanza italiana e il godimento dei diritti civili e politici.":
    "Das Mindestalter. Dazu braucht es die italienische Staatsangehörigkeit und den Besitz der bürgerlichen und politischen Rechte.",
  "Il Quirinale": "Der Quirinal",
  "La residenza ufficiale, un palazzo che è stato dei papi e poi dei re prima di essere della Repubblica.":
    "Der Amtssitz, ein Palast, der den Päpsten und dann den Königen gehörte, bevor er der Republik gehörte.",
  "Quanto dura il mandato del Presidente della Repubblica?":
    "Wie lange dauert die Amtszeit des Präsidenten der Republik?",
  "Quattro anni": "Vier Jahre",
  "Nove anni": "Neun Jahre",
  "Sette anni, due più della legislatura. Cinque è la durata delle camere e nove quella dei giudici costituzionali.":
    "Sieben Jahre, zwei mehr als die Wahlperiode. Fünf ist die Dauer der Kammern und neun die der Verfassungsrichter.",
  "Che cosa può fare": "Was er tun kann",
  "**Promulga le leggi**, e prima di firmarle può **rinviarle una volta** alle camere con un messaggio motivato. Se il Parlamento riapprova lo stesso testo, deve promulgarlo: il rinvio è un freno, non un veto.":
    "Er **fertigt die Gesetze aus** und kann sie vor der Unterschrift **einmal** mit einer begründeten Botschaft an die Kammern **zurückverweisen**. Beschließt das Parlament denselben Text erneut, muss er ihn ausfertigen: die Rückverweisung ist eine Bremse, kein Veto.",
  "**Scioglie le camere**, sentiti i loro presidenti, e non può farlo negli ultimi sei mesi del proprio mandato — il cosiddetto **semestre bianco**, pensato perché non usi lo scioglimento per farsi rieleggere. **Nomina** il Presidente del Consiglio e cinque giudici costituzionali, **presiede** il Consiglio superiore della magistratura e il Consiglio supremo di difesa, **comanda** le forze armate, **concede la grazia** e **ratifica** i trattati.":
    "Er **löst die Kammern auf**, nachdem er ihre Präsidenten gehört hat, und darf das in den letzten sechs Monaten seiner Amtszeit nicht — dem sogenannten **semestre bianco**, gedacht, damit er die Auflösung nicht zur eigenen Wiederwahl nutzt. Er **ernennt** den Präsidenten des Ministerrats und fünf Verfassungsrichter, **führt den Vorsitz** im Obersten Rat der Richterschaft und im Obersten Verteidigungsrat, **befehligt** die Streitkräfte, **begnadigt** und **ratifiziert** die Verträge.",
  // it-presidente
  "Quante volte il Presidente può rinviare una legge alle camere?":
    "Wie oft kann der Präsident ein Gesetz an die Kammern zurückverweisen?",
  "Nessuna: deve promulgare quello che riceve": "Gar nicht: er muss ausfertigen, was er bekommt",
  "Una sola volta": "Ein einziges Mal",
  "Due volte": "Zweimal",
  "Tutte le volte che ritiene necessario": "So oft er es für nötig hält",
  "Un solo rinvio, con messaggio motivato. Se le camere riapprovano il medesimo testo, la promulgazione diventa un atto dovuto: il Presidente frena, non blocca.":
    "Eine einzige Rückverweisung, mit begründeter Botschaft. Beschließen die Kammern denselben Text erneut, wird die Ausfertigung zur Pflicht: der Präsident bremst, er blockiert nicht.",
  "Di che cosa risponde": "Wofür er einsteht",
  "Il Presidente **non è responsabile** degli atti compiuti nell'esercizio delle sue funzioni, con due eccezioni: **alto tradimento** e **attentato alla Costituzione**, per i quali lo mette in stato d'accusa il Parlamento in seduta comune e lo giudica la Corte costituzionale integrata da sedici membri esterni.":
    "Der Präsident **haftet nicht** für die Handlungen in Ausübung seines Amtes, mit zwei Ausnahmen: **Hochverrat** und **Angriff auf die Verfassung**, wofür ihn das Parlament in gemeinsamer Sitzung anklagt und das Verfassungsgericht, ergänzt um sechzehn externe Mitglieder, ihn richtet.",
  "Ogni suo atto richiede la **controfirma** del ministro proponente, che se ne assume la responsabilità (articolo 89). È il meccanismo che tiene insieme un capo dello Stato irresponsabile e un sistema in cui qualcuno deve pur rispondere.":
    "Jeder seiner Akte verlangt die **Gegenzeichnung** des vorschlagenden Ministers, der dafür die Verantwortung übernimmt (Artikel 89). Das ist der Mechanismus, der ein nicht haftendes Staatsoberhaupt und ein System zusammenhält, in dem doch jemand einstehen muss.",
  "Il mandato non prevede limiti di rielezione, ma per sessantasette anni nessuno è stato rieletto. È successo due volte in tempi recenti, entrambe in una crisi in cui il Parlamento non trovava un altro nome.":
    "Die Amtszeit kennt keine Wiederwahlgrenze, aber siebenundsechzig Jahre lang wurde niemand wiedergewählt. In jüngerer Zeit geschah es zweimal, beide Male in einer Krise, in der das Parlament keinen anderen Namen fand.",
  "Che cos'è il semestre bianco?": "Was ist das semestre bianco?",
  "I primi sei mesi di mandato, in cui il Presidente non firma leggi":
    "Die ersten sechs Monate der Amtszeit, in denen der Präsident keine Gesetze unterschreibt",
  "Gli ultimi sei mesi di mandato, in cui non può sciogliere le camere":
    "Die letzten sechs Monate der Amtszeit, in denen er die Kammern nicht auflösen darf",
  "Il periodo fra lo scioglimento e le elezioni": "Die Zeit zwischen Auflösung und Wahl",
  "La pausa estiva dei lavori parlamentari": "Die Sommerpause der parlamentarischen Arbeit",
  "Gli ultimi sei mesi. La regola esiste perché un Presidente in scadenza non possa sciogliere il Parlamento e farsene eleggere uno più favorevole alla propria rielezione.":
    "Die letzten sechs Monate. Die Regel gibt es, damit ein scheidender Präsident nicht das Parlament auflösen und sich ein für seine Wiederwahl günstigeres wählen lassen kann.",
  "Il Presidente non governa. Non decide le tasse, non presenta il bilancio, non guida la politica estera: sceglie chi ci prova, e controlla che si resti dentro la Costituzione.":
    "Der Präsident regiert nicht. Er beschließt keine Steuern, legt keinen Haushalt vor, führt keine Außenpolitik: er wählt aus, wer es versucht, und wacht darüber, dass man innerhalb der Verfassung bleibt.",
  // it-giustizia
  "Perché conta: in Italia i giudici non sono nominati dal potere politico e i pubblici ministeri non scelgono quali reati perseguire. Sono due scelte precise, e sono anche due dei temi più discussi del paese.":
    "Warum das zählt: in Italien werden die Richter nicht von der Politik ernannt, und die Staatsanwälte wählen nicht aus, welche Straftaten sie verfolgen. Das sind zwei bewusste Entscheidungen und zugleich zwei der meistdiskutierten Themen des Landes.",
  "Un ordine autonomo": "Ein eigenständiger Stand",
  "L'**articolo 104** definisce la magistratura un **ordine autonomo e indipendente da ogni altro potere**. Non si dice potere ma ordine, e la differenza è voluta: i giudici non rappresentano nessuno e non rispondono a un elettorato.":
    "**Artikel 104** bezeichnet die Richterschaft als einen **eigenständigen und von jeder anderen Gewalt unabhängigen Stand**. Es heißt nicht Gewalt, sondern Stand, und der Unterschied ist gewollt: Richter vertreten niemanden und stehen keiner Wählerschaft gegenüber.",
  "L'**articolo 101** completa il quadro: i giudici sono **soggetti soltanto alla legge**. Si entra in magistratura per **concorso**, non per nomina, e la carriera è gestita dal **Consiglio superiore della magistratura**, presieduto dal Presidente della Repubblica.":
    "**Artikel 101** vervollständigt das Bild: die Richter sind **allein dem Gesetz unterworfen**. In die Richterschaft kommt man über eine **Auswahlprüfung**, nicht über eine Ernennung, und die Laufbahn verwaltet der **Oberste Rat der Richterschaft**, dem der Präsident der Republik vorsitzt.",
  "L'**articolo 112** impone al pubblico ministero l'**obbligatorietà dell'azione penale**: ricevuta una notizia di reato deve procedere. In teoria toglie ogni discrezionalità politica; in pratica, con più fascicoli che magistrati, la scelta si sposta sulle priorità.":
    "**Artikel 112** verpflichtet die Staatsanwaltschaft zur **Verfolgungspflicht**: liegt eine Anzeige vor, muss sie tätig werden. In der Theorie nimmt das jeden politischen Ermessensspielraum; in der Praxis, bei mehr Akten als Staatsanwälten, verschiebt sich die Wahl auf die Prioritäten.",
  "Come si diventa magistrato in Italia?": "Wie wird man in Italien Richterin oder Staatsanwalt?",
  "Per nomina del ministro della Giustizia": "Durch Ernennung des Justizministers",
  "Per elezione popolare": "Durch Volkswahl",
  "Per concorso pubblico": "Über eine öffentliche Auswahlprüfung",
  "Per designazione del Parlamento": "Durch Benennung des Parlaments",
  "Per concorso. È la scelta che tiene la carriera fuori dalle mani della politica, e la ragione per cui il CSM, non il ministro, decide trasferimenti e promozioni.":
    "Über eine Auswahlprüfung. Das ist die Entscheidung, die die Laufbahn aus den Händen der Politik hält, und der Grund, warum der Oberste Rat und nicht der Minister über Versetzungen und Beförderungen entscheidet.",
  "Tre gradi di giudizio": "Drei Instanzen",
  "Primo grado": "Erste Instanz",
  "Giudice di pace, tribunale o corte d'assise secondo la materia e la gravità. Qui si accertano i fatti.":
    "Friedensrichter, Gericht oder Schwurgericht, je nach Materie und Schwere. Hier werden die Tatsachen festgestellt.",
  "Appello": "Berufung",
  "La corte d'appello riesamina il caso, fatti compresi. Può ribaltare la decisione.":
    "Das Berufungsgericht prüft den Fall erneut, die Tatsachen eingeschlossen. Es kann die Entscheidung umkehren.",
  "Cassazione": "Kassation",
  "La Corte suprema non rivede i fatti: controlla che la legge sia stata applicata correttamente. È il giudizio di legittimità.":
    "Der Oberste Gerichtshof sieht die Tatsachen nicht noch einmal an: er prüft, ob das Gesetz richtig angewandt wurde. Das ist die Rechtmäßigkeitsprüfung.",
  "Finché la Cassazione non ha deciso, la sentenza non è **definitiva** — in italiano si dice passata in giudicato — e l'imputato resta non colpevole a norma dell'articolo 27. La lunghezza dei processi civili e penali è da decenni il problema più segnalato all'Italia dalle istituzioni europee.":
    "Solange die Kassation nicht entschieden hat, ist das Urteil nicht **rechtskräftig** — auf Italienisch heißt es passata in giudicato —, und die angeklagte Person gilt nach Artikel 27 als nicht schuldig. Die Länge der Zivil- und Strafverfahren ist seit Jahrzehnten das, was die europäischen Institutionen Italien am häufigsten vorhalten.",
  "Che cosa esamina la Corte di cassazione?": "Was prüft der Kassationsgerichtshof?",
  "I fatti, una terza volta": "Die Tatsachen, ein drittes Mal",
  "La corretta applicazione della legge": "Die richtige Anwendung des Gesetzes",
  "Solo le sentenze di condanna": "Nur die Schuldsprüche",
  "La legittimità costituzionale delle leggi": "Die Verfassungsmäßigkeit der Gesetze",
  "La Cassazione giudica la legittimità, non il merito: non stabilisce se il fatto sia avvenuto, ma se il diritto sia stato applicato bene. La legittimità costituzionale delle leggi spetta invece alla Corte costituzionale.":
    "Die Kassation entscheidet über die Rechtmäßigkeit, nicht über die Sache: sie stellt nicht fest, ob die Tat geschehen ist, sondern ob das Recht richtig angewandt wurde. Die Verfassungsmäßigkeit der Gesetze prüft dagegen das Verfassungsgericht.",
  "La Corte costituzionale": "Das Verfassungsgericht",
  "È un organo a sé, che non fa parte della magistratura ordinaria. Ha **quindici giudici**, nominati in tre modi diversi perché nessun potere possa comporla da solo: **cinque** dal Presidente della Repubblica, **cinque** dal Parlamento in seduta comune, **cinque** dalle supreme magistrature.":
    "Es ist ein Organ für sich und gehört nicht zur ordentlichen Richterschaft. Es hat **fünfzehn Richter**, auf drei verschiedene Weisen bestellt, damit keine Gewalt es allein besetzen kann: **fünf** durch den Präsidenten der Republik, **fünf** durch das Parlament in gemeinsamer Sitzung, **fünf** durch die obersten Gerichte.",
  "Durano **nove anni** e **non sono rieleggibili**: un mandato lungo e senza rinnovo mette il giudice al riparo da chi lo ha nominato. La sede è **Palazzo della Consulta**, e per questo la Corte si chiama spesso semplicemente la Consulta.":
    "Sie amtieren **neun Jahre** und sind **nicht wiederwählbar**: eine lange Amtszeit ohne Verlängerung schützt die Richterin vor denen, die sie bestellt haben. Der Sitz ist der **Palazzo della Consulta**, und deshalb heißt das Gericht oft schlicht la Consulta.",
  "Giudica sulla **legittimità costituzionale** delle leggi, sui **conflitti di attribuzione** fra poteri dello Stato e fra Stato e regioni, sulle **accuse** contro il Presidente della Repubblica, e sull'**ammissibilità dei referendum** abrogativi. Una legge dichiarata incostituzionale cessa di avere efficacia dal giorno dopo la pubblicazione della sentenza.":
    "Es entscheidet über die **Verfassungsmäßigkeit** der Gesetze, über **Zuständigkeitskonflikte** zwischen den Staatsgewalten und zwischen Staat und Regionen, über die **Anklagen** gegen den Präsidenten der Republik und über die **Zulässigkeit** aufhebender Referenden. Ein für verfassungswidrig erklärtes Gesetz verliert seine Wirkung am Tag nach der Veröffentlichung des Urteils.",
  "Come sono scelti i quindici giudici della Corte costituzionale?":
    "Wie werden die fünfzehn Richter des Verfassungsgerichts bestellt?",
  "Tutti dal Parlamento in seduta comune": "Alle vom Parlament in gemeinsamer Sitzung",
  "Cinque dal Presidente, cinque dal Parlamento, cinque dalle supreme magistrature":
    "Fünf vom Präsidenten, fünf vom Parlament, fünf von den obersten Gerichten",
  "Tutti dal Presidente della Repubblica": "Alle vom Präsidenten der Republik",
  "Per concorso, come i magistrati ordinari": "Über eine Auswahlprüfung, wie die ordentlichen Richter",
  "Tre origini diverse, cinque ciascuna, perché nessun potere possa formare la Corte da solo. Il mandato di nove anni non rinnovabile completa la garanzia.":
    "Drei verschiedene Herkünfte, je fünf, damit keine Gewalt das Gericht allein bilden kann. Die nicht verlängerbare Amtszeit von neun Jahren vervollständigt die Sicherung.",
  "Corte costituzionale e Corte di cassazione sono due organi distinti. La prima giudica le **leggi**, la seconda le **sentenze**. Che stiano entrambe a Roma e comincino con la stessa parola non aiuta.":
    "Verfassungsgericht und Kassationsgerichtshof sind zwei verschiedene Organe. Das erste richtet über **Gesetze**, der zweite über **Urteile**. Dass beide in Rom sitzen und im Italienischen mit demselben Wort beginnen, hilft dabei nicht.",
  // it-regioni
  "Perché conta: l'articolo che elenca gli enti della Repubblica comincia dal comune e finisce con lo Stato. L'ordine non è casuale, ed è la chiave per capire il rapporto fra centro e territorio.":
    "Warum das zählt: der Artikel, der die Körperschaften der Republik aufzählt, beginnt bei der Gemeinde und endet beim Staat. Die Reihenfolge ist kein Zufall, und sie ist der Schlüssel zum Verhältnis zwischen Zentrum und Land.",
  "Dal basso verso l'alto": "Von unten nach oben",
  "L'**articolo 114** dice che la Repubblica è costituita dai **comuni**, dalle **province**, dalle **città metropolitane**, dalle **regioni** e dallo **Stato**. Elencare lo Stato per ultimo, dopo il comune, fu una scelta della riforma del **Titolo V** nel **2001**: i territori non sono articolazioni dello Stato, sono elementi della Repubblica al pari suo.":
    "**Artikel 114** sagt, dass die Republik aus den **Gemeinden**, den **Provinzen**, den **Metropolitanstädten**, den **Regionen** und dem **Staat** besteht. Den Staat zuletzt aufzuzählen, nach der Gemeinde, war eine Entscheidung der Reform des **Titels V** von **2001**: die Gebietskörperschaften sind keine Gliederungen des Staates, sie sind Bestandteile der Republik ebenso wie er.",
  "La riforma ha anche ribaltato il criterio delle competenze. Prima le regioni potevano legiferare solo nelle materie elencate; oggi l'elenco è quello delle materie **esclusive dello Stato** — difesa, moneta, giustizia, immigrazione — e delle materie **concorrenti**, mentre tutto ciò che non è elencato spetta alle **regioni**.":
    "Die Reform hat auch das Zuständigkeitsprinzip umgekehrt. Zuvor durften die Regionen nur in den aufgezählten Materien Gesetze machen; heute ist die Liste die der **ausschließlichen Staatsmaterien** — Verteidigung, Währung, Justiz, Einwanderung — und der **konkurrierenden** Materien, während alles Nichtaufgezählte den **Regionen** zusteht.",
  "Venti regioni, cinque diverse dalle altre": "Zwanzig Regionen, fünf anders als die übrigen",
  "Le regioni sono **venti**, e **cinque** hanno uno **statuto speciale** approvato con legge costituzionale. Non è un privilegio arbitrario: ciascuna ha una ragione storica precisa.":
    "Es gibt **zwanzig** Regionen, und **fünf** haben ein **Sonderstatut**, das mit Verfassungsgesetz beschlossen wurde. Das ist kein willkürliches Vorrecht: jede hat einen bestimmten historischen Grund.",
  "Sicilia e Sardegna": "Sizilien und Sardinien",
  "Isole, con un movimento autonomista forte nell'immediato dopoguerra. La Sicilia ottenne lo statuto nel 1946, prima ancora della Costituzione.":
    "Inseln, mit einer starken Autonomiebewegung unmittelbar nach dem Krieg. Sizilien erhielt sein Statut 1946, noch vor der Verfassung.",
  "Trentino-Alto Adige": "Trentino-Südtirol",
  "La minoranza di lingua tedesca. Le competenze vere stanno nelle due province autonome di Trento e Bolzano più che nella regione.":
    "Die deutschsprachige Minderheit. Die eigentlichen Zuständigkeiten liegen bei den beiden autonomen Provinzen Trient und Bozen, mehr als bei der Region.",
  "Il confine orientale, conteso fino agli anni Cinquanta, e le minoranze slovena e friulana.":
    "Die Ostgrenze, bis in die fünfziger Jahre umstritten, und die slowenische und friaulische Minderheit.",
  "La minoranza francofona, in una regione così piccola da avere un solo consiglio che fa anche da provincia.":
    "Die französischsprachige Minderheit, in einer Region, die so klein ist, dass ein einziger Rat zugleich die Provinz vertritt.",
  "Quante regioni italiane hanno uno statuto speciale?":
    "Wie viele italienische Regionen haben ein Sonderstatut?",
  "Tre": "Drei",
  "Cinque": "Fünf",
  "Otto": "Acht",
  "Venti: ogni regione ha il proprio statuto": "Zwanzig: jede Region hat ihr eigenes Statut",
  "Cinque: Sicilia, Sardegna, Trentino-Alto Adige, Friuli Venezia Giulia e Valle d'Aosta. Le altre quindici hanno statuti ordinari, che non sono leggi costituzionali.":
    "Fünf: Sizilien, Sardinien, Trentino-Südtirol, Friaul-Julisch Venetien und das Aostatal. Die anderen fünfzehn haben gewöhnliche Statute, die keine Verfassungsgesetze sind.",
  "Chi governa una regione": "Wer eine Region regiert",
  "Ogni regione ha un **Consiglio regionale**, che fa le leggi, una **Giunta**, che governa, e un **Presidente della Regione**, eletto direttamente dai cittadini nella quasi totalità dei casi. Lo si sente chiamare **governatore**: è un uso giornalistico, non un titolo che esista nella Costituzione.":
    "Jede Region hat einen **Regionalrat**, der die Gesetze macht, eine **Regionalregierung**, die regiert, und einen **Präsidenten der Region**, der fast überall direkt von den Bürgerinnen und Bürgern gewählt wird. Man hört ihn **Gouverneur** nennen: das ist journalistischer Sprachgebrauch, kein Titel, den die Verfassung kennt.",
  "La regola che tiene insieme il sistema è chiamata dagli addetti ai lavori *simul stabunt, simul cadent*: se il Presidente cade, cade con lui l'intero consiglio e si torna al voto. Serve a evitare che una regione resti senza guida per anni.":
    "Die Regel, die das System zusammenhält, nennen die Fachleute *simul stabunt, simul cadent*: fällt der Präsident, fällt mit ihm der ganze Rat, und es wird neu gewählt. Sie soll verhindern, dass eine Region jahrelang ohne Führung bleibt.",
  "Comuni e città metropolitane": "Gemeinden und Metropolitanstädte",
  "I comuni sono circa **ottomila**, dalle metropoli ai paesi di poche decine di abitanti. Il **sindaco** è eletto **direttamente** dai cittadini insieme al consiglio comunale, e nei comuni sopra i quindicimila abitanti si vota su due turni con ballottaggio. Il municipio è dove si fa quasi tutto ciò che riguarda la vita quotidiana: residenza, carta d'identità, stato civile, scuole dell'infanzia, rifiuti, urbanistica.":
    "Es gibt rund **achttausend** Gemeinden, von den Großstädten bis zu Dörfern mit wenigen Dutzend Einwohnern. Der **Bürgermeister** wird zusammen mit dem Gemeinderat **direkt** gewählt, und in Gemeinden über fünfzehntausend Einwohnern wird in zwei Wahlgängen mit Stichwahl gewählt. Im Rathaus wird fast alles erledigt, was den Alltag betrifft: Meldewesen, Personalausweis, Personenstand, Kindergärten, Abfall, Bauleitplanung.",
  "Le **città metropolitane** sono **quattordici** e dal 2015 hanno sostituito le province nei territori dei grandi capoluoghi. Il sindaco del comune capoluogo ne è anche sindaco metropolitano.":
    "Die **Metropolitanstädte** sind **vierzehn** und haben seit 2015 in den Gebieten der großen Hauptstädte die Provinzen abgelöst. Der Bürgermeister der Kernstadt ist zugleich Metropolitanbürgermeister.",
  "Chi elegge il sindaco di un comune italiano?":
    "Wer wählt den Bürgermeister einer italienischen Gemeinde?",
  "Il consiglio comunale, fra i propri membri": "Der Gemeinderat, aus seiner Mitte",
  "I cittadini, con voto diretto": "Die Bürgerinnen und Bürger, in direkter Wahl",
  "Il prefetto, che rappresenta il governo": "Der Präfekt, der die Regierung vertritt",
  "Il presidente della regione": "Der Präsident der Region",
  "Direttamente i cittadini, dal 1993. Prima lo eleggeva il consiglio comunale, e i sindaci cambiavano ogni volta che cambiavano gli equilibri fra i partiti in aula.":
    "Direkt die Bürgerinnen und Bürger, seit 1993. Zuvor wählte ihn der Gemeinderat, und die Bürgermeister wechselten jedes Mal, wenn sich die Mehrheitsverhältnisse im Saal verschoben.",
  "In quale ordine l'articolo 114 elenca gli enti della Repubblica?":
    "In welcher Reihenfolge zählt Artikel 114 die Körperschaften der Republik auf?",
  "Dallo Stato al comune": "Vom Staat zur Gemeinde",
  "Dal comune allo Stato": "Von der Gemeinde zum Staat",
  "In ordine alfabetico": "In alphabetischer Reihenfolge",
  "Per numero di abitanti": "Nach Einwohnerzahl",
  "Comuni, province, città metropolitane, regioni, Stato. L'ordine fu invertito dalla riforma del 2001 per dire che i territori non discendono dallo Stato ma stanno accanto ad esso.":
    "Gemeinden, Provinzen, Metropolitanstädte, Regionen, Staat. Die Reihenfolge wurde von der Reform des Jahres 2001 umgekehrt, um zu sagen, dass die Gebietskörperschaften nicht vom Staat abstammen, sondern neben ihm stehen.",
  "Il **prefetto** non è un organo della regione né del comune: rappresenta il **governo** in ogni provincia e dipende dal Ministero dell'interno. È lui che riceve le domande di cittadinanza e firma gli accordi di integrazione.":
    "Der **Präfekt** ist weder ein Organ der Region noch der Gemeinde: er vertritt die **Regierung** in jeder Provinz und untersteht dem Innenministerium. Er nimmt die Anträge auf Staatsangehörigkeit entgegen und unterzeichnet die Integrationsvereinbarungen.",
  // it-roma-medioevo
  "Perché si comincia da qui: fra la caduta dell'impero e l'Unità passano quasi quattordici secoli in cui l'Italia non è uno Stato. Chi non tiene presente quel vuoto non capisce né i campanili né le cento cucine.":
    "Warum man hier anfängt: zwischen dem Untergang des Reiches und der Einigung liegen fast vierzehn Jahrhunderte, in denen Italien kein Staat ist. Wer diese Lücke nicht mitdenkt, versteht weder die Kirchtürme noch die hundert Küchen.",
  "Che cosa lascia Roma": "Was Rom hinterlässt",
  "La tradizione data la fondazione di Roma al **753 avanti Cristo**, la repubblica al **509** e l'impero al **27 avanti Cristo**, quando Ottaviano riceve il titolo di Augusto. L'impero d'Occidente finisce nel **476**, con la deposizione di Romolo Augustolo.":
    "Die Überlieferung setzt die Gründung Roms auf **753 vor Christus**, die Republik auf **509** und das Kaiserreich auf **27 vor Christus**, als Octavian den Titel Augustus erhält. Das Weströmische Reich endet **476** mit der Absetzung des Romulus Augustulus.",
  "Ciò che resta non è un territorio ma un'eredità: la **lingua latina**, da cui discendono l'italiano e le altre lingue romanze; il **diritto romano**, che è ancora l'ossatura del codice civile; le **strade**, molte delle quali ricalcate dalle statali di oggi; e l'idea stessa di città come luogo di cittadinanza.":
    "Was bleibt, ist kein Gebiet, sondern ein Erbe: die **lateinische Sprache**, von der das Italienische und die anderen romanischen Sprachen abstammen; das **römische Recht**, das noch immer das Gerüst des Zivilgesetzbuchs ist; die **Straßen**, von denen viele die heutigen Staatsstraßen nachzeichnen; und die Vorstellung von der Stadt als Ort der Bürgerschaft.",
  "In quale anno finisce l'Impero romano d'Occidente?": "In welchem Jahr endet das Weströmische Reich?",
  "Nel 27 avanti Cristo": "27 vor Christus",
  "Nel 313": "313",
  "Nel 476": "476",
  "Nel 1453": "1453",
  "Il 476 è la deposizione di Romolo Augustolo. Il 1453 è la caduta di Costantinopoli, cioè la fine dell'impero d'Oriente, quasi mille anni più tardi.":
    "476 ist die Absetzung des Romulus Augustulus. 1453 ist der Fall Konstantinopels, also das Ende des Oströmischen Reiches, fast tausend Jahre später.",
  "Un mosaico di poteri": "Ein Mosaik von Mächten",
  "Dopo il 476 la penisola non torna unita per quasi quattordici secoli. Arrivano i **Longobardi** nel **568**, che si insediano al centro e al nord; i **Franchi** di Carlo Magno li sconfiggono nel **774**; nel frattempo nasce lo **Stato della Chiesa**, che taglia l'Italia a metà e resterà lì fino al 1870.":
    "Nach 476 ist die Halbinsel für fast vierzehn Jahrhunderte nicht wieder vereint. **568** kommen die **Langobarden**, die sich in der Mitte und im Norden festsetzen; die **Franken** Karls des Großen schlagen sie **774**; inzwischen entsteht der **Kirchenstaat**, der Italien in der Mitte durchschneidet und dort bis 1870 bleiben wird.",
  "Il Sud normanno": "Der normannische Süden",
  "Nel 1130 i Normanni fondano il Regno di Sicilia, il primo Stato accentrato d'Europa, con Palermo capitale multilingue di arabi, greci, latini ed ebrei.":
    "1130 gründen die Normannen das Königreich Sizilien, den ersten zentral verwalteten Staat Europas, mit Palermo als mehrsprachiger Hauptstadt von Arabern, Griechen, Lateinern und Juden.",
  "I Comuni del Nord": "Die Kommunen des Nordens",
  "Le città padane si governano da sé attraverso consoli e assemblee, e comprano o strappano l'autonomia all'imperatore.":
    "Die Städte der Poebene regieren sich über Konsuln und Versammlungen selbst und kaufen oder erkämpfen dem Kaiser die Autonomie ab.",
  "Lo Stato della Chiesa": "Der Kirchenstaat",
  "Il papa è anche sovrano temporale su una fascia che va dal Lazio alla Romagna. La divisione fra Nord e Sud passa di lì.":
    "Der Papst ist auch weltlicher Herrscher über einen Streifen, der vom Latium bis in die Romagna reicht. Die Trennung zwischen Nord und Süd verläuft dort.",
  "Le Repubbliche marinare": "Die Seerepubliken",
  "Amalfi, Pisa, Genova e Venezia costruiscono flotte, colonie e banche, e portano in Italia la contabilità e la lettera di cambio.":
    "Amalfi, Pisa, Genua und Venedig bauen Flotten, Kolonien und Banken auf und bringen die Buchhaltung und den Wechsel nach Italien.",
  "Legnano e la pace di Costanza": "Legnano und der Friede von Konstanz",
  "Nel **1176** i Comuni riuniti nella **Lega Lombarda** sconfiggono a **Legnano** l'imperatore Federico Barbarossa. La **pace di Costanza** del **1183** riconosce alle città il diritto di eleggere i propri magistrati e di amministrarsi.":
    "**1176** schlagen die in der **Lombardischen Liga** verbündeten Kommunen bei **Legnano** Kaiser Friedrich Barbarossa. Der **Friede von Konstanz** von **1183** erkennt den Städten das Recht zu, ihre eigenen Amtsträger zu wählen und sich selbst zu verwalten.",
  "È un fatto senza paragoni nell'Europa del tempo: decine di città indipendenti, ciascuna con leggi, monete e milizie proprie, nel raggio di poche decine di chilometri. Da lì viene il **campanilismo**, che non è un difetto caratteriale ma il residuo di secoli in cui il campanile accanto era davvero un altro Stato.":
    "Das ist im Europa jener Zeit ohne Vergleich: Dutzende unabhängiger Städte, jede mit eigenen Gesetzen, eigener Münze und eigener Miliz, im Umkreis weniger Dutzend Kilometer. Daher kommt der **Campanilismo**, die Kirchturmpolitik, die kein Charakterfehler ist, sondern der Rest von Jahrhunderten, in denen der Kirchturm nebenan wirklich ein anderer Staat war.",
  "Che cosa riconosce ai Comuni la pace di Costanza del 1183?":
    "Was erkennt der Friede von Konstanz von 1183 den Kommunen zu?",
  "Il diritto di governarsi da sé, eleggendo i propri magistrati":
    "Das Recht, sich selbst zu regieren und die eigenen Amtsträger zu wählen",
  "L'esenzione da ogni tassa imperiale per sempre": "Die Befreiung von jeder kaiserlichen Steuer auf immer",
  "Il diritto di battere moneta d'oro": "Das Recht, Goldmünzen zu prägen",
  "L'unione in un solo regno del Nord": "Den Zusammenschluss zu einem einzigen Königreich des Nordens",
  "Dopo Legnano l'imperatore riconosce l'autogoverno cittadino. Le città restano formalmente dentro l'impero, ma amministrano sé stesse: è il compromesso che rende possibile l'età dei Comuni.":
    "Nach Legnano erkennt der Kaiser die städtische Selbstverwaltung an. Die Städte bleiben förmlich im Reich, verwalten sich aber selbst: das ist der Kompromiss, der die Zeit der Kommunen möglich macht.",
  "Dai Comuni alle Signorie": "Von den Kommunen zu den Signorien",
  "Nel Trecento le lotte fra fazioni logorano le istituzioni comunali, e in una città dopo l'altra un uomo o una famiglia prende il potere in modo stabile: nascono le **Signorie**, che nel secolo successivo diventano **Principati** riconosciuti. I Visconti e poi gli Sforza a Milano, i Medici a Firenze, gli Este a Ferrara, i Gonzaga a Mantova.":
    "Im 14. Jahrhundert zermürben die Kämpfe zwischen den Parteiungen die kommunalen Einrichtungen, und in einer Stadt nach der anderen ergreift ein Mann oder eine Familie dauerhaft die Macht: es entstehen die **Signorien**, die im folgenden Jahrhundert zu anerkannten **Fürstentümern** werden. Die Visconti und dann die Sforza in Mailand, die Medici in Florenz, die Este in Ferrara, die Gonzaga in Mantua.",
  "Venezia fa eccezione e resta una repubblica per oltre mille anni, fino al 1797: la **Serenissima**, governata da un doge eletto e da un consiglio di patrizi.":
    "Venedig macht eine Ausnahme und bleibt über tausend Jahre lang eine Republik, bis 1797: die **Serenissima**, regiert von einem gewählten Dogen und einem Rat von Patriziern.",
  "Quale città mantiene un ordinamento repubblicano fino al 1797?":
    "Welche Stadt behält bis 1797 eine republikanische Ordnung?",
  "Milano": "Mailand",
  "Firenze": "Florenz",
  "Venezia": "Venedig",
  "Napoli": "Neapel",
  "La Repubblica di Venezia dura oltre mille anni e finisce solo con l'arrivo di Napoleone. Milano e Firenze passano invece a signorie ereditarie, e Napoli è un regno fin dal Medioevo.":
    "Die Republik Venedig dauert über tausend Jahre und endet erst mit der Ankunft Napoleons. Mailand und Florenz gehen dagegen zu erblichen Signorien über, und Neapel ist schon seit dem Mittelalter ein Königreich.",
  "Medioevo non significa immobilità. Fra il 1100 e il 1300 l'Italia inventa la banca moderna, la partita doppia, l'università come corporazione — Bologna, 1088 — e la lettera di cambio: strumenti che l'Europa userà per secoli.":
    "Mittelalter heißt nicht Stillstand. Zwischen 1100 und 1300 erfindet Italien die moderne Bank, die doppelte Buchführung, die Universität als Körperschaft — Bologna, 1088 — und den Wechsel: Werkzeuge, die Europa jahrhundertelang benutzen wird.",
  // it-rinascimento
  "Perché conta: nello stesso mezzo secolo l'Italia raggiunge il vertice della propria influenza culturale e perde ogni indipendenza politica. Le due cose accadono insieme, e non per caso.":
    "Warum das zählt: in demselben halben Jahrhundert erreicht Italien den Gipfel seines kulturellen Einflusses und verliert jede politische Unabhängigkeit. Beides geschieht zugleich, und nicht zufällig.",
  "Cinque Stati in equilibrio": "Fünf Staaten im Gleichgewicht",
  "La **pace di Lodi**, nel **1454**, chiude decenni di guerre fra le potenze della penisola e fissa un equilibrio fra cinque Stati: il **Ducato di Milano**, la **Repubblica di Venezia**, la **Repubblica di Firenze**, lo **Stato della Chiesa** e il **Regno di Napoli**.":
    "Der **Friede von Lodi** beendet **1454** jahrzehntelange Kriege zwischen den Mächten der Halbinsel und legt ein Gleichgewicht zwischen fünf Staaten fest: dem **Herzogtum Mailand**, der **Republik Venedig**, der **Republik Florenz**, dem **Kirchenstaat** und dem **Königreich Neapel**.",
  "Nessuno è abbastanza forte da prevalere, e per quarant'anni la diplomazia sostituisce la guerra. È in questo intervallo che nascono le **ambasciate permanenti**, un'invenzione italiana che l'Europa adotterà per intero.":
    "Keiner ist stark genug, um sich durchzusetzen, und vierzig Jahre lang tritt die Diplomatie an die Stelle des Krieges. In dieser Zeitspanne entstehen die **ständigen Gesandtschaften**, eine italienische Erfindung, die Europa vollständig übernehmen wird.",
  "Firenze e i Medici": "Florenz und die Medici",
  "I **Medici** sono banchieri prima che signori, e governano Firenze senza cariche formali: comprano consenso, sposano alleanze e finanziano artisti. **Lorenzo il Magnifico** tiene in piedi l'equilibrio di Lodi con la sola abilità politica, e muore nel **1492**.":
    "Die **Medici** sind Bankiers, bevor sie Herren sind, und regieren Florenz ohne förmliche Ämter: sie kaufen Zustimmung, verheiraten Bündnisse und finanzieren Künstler. **Lorenzo il Magnifico** hält das Gleichgewicht von Lodi allein durch politisches Geschick aufrecht und stirbt **1492**.",
  "Le arti": "Die Künste",
  "Leonardo, Michelangelo, Raffaello, Brunelleschi, Botticelli: in tre generazioni una penisola di pochi milioni di abitanti produce una parte enorme dell'arte europea.":
    "Leonardo, Michelangelo, Raffael, Brunelleschi, Botticelli: in drei Generationen bringt eine Halbinsel von wenigen Millionen Einwohnern einen gewaltigen Teil der europäischen Kunst hervor.",
  "Il pensiero politico": "Das politische Denken",
  "Machiavelli scrive Il Principe nel 1513, osservando il potere per come funziona invece che per come dovrebbe essere.":
    "Machiavelli schreibt 1513 den Fürsten und betrachtet die Macht so, wie sie funktioniert, statt so, wie sie sein sollte.",
  "La scienza": "Die Wissenschaft",
  "Galileo fonda il metodo sperimentale, e nel 1633 è processato per aver sostenuto che la Terra gira intorno al Sole.":
    "Galilei begründet die experimentelle Methode und steht 1633 vor Gericht, weil er behauptet hatte, die Erde drehe sich um die Sonne.",
  "Quali sono i cinque Stati dell'equilibrio fissato dalla pace di Lodi?":
    "Welche fünf Staaten bilden das Gleichgewicht des Friedens von Lodi?",
  "Milano, Venezia, Firenze, Stato della Chiesa e Regno di Napoli":
    "Mailand, Venedig, Florenz, Kirchenstaat und Königreich Neapel",
  "Milano, Torino, Genova, Firenze e Roma": "Mailand, Turin, Genua, Florenz und Rom",
  "Venezia, Genova, Pisa, Amalfi e Napoli": "Venedig, Genua, Pisa, Amalfi und Neapel",
  "Piemonte, Lombardia, Toscana, Lazio e Sicilia": "Piemont, Lombardei, Toskana, Latium und Sizilien",
  "Sono i cinque grandi del Quattrocento italiano. Genova, Pisa e Amalfi erano repubbliche marinare di due secoli prima, e le regioni moderne non esistevano ancora.":
    "Es sind die fünf Großen des italienischen 15. Jahrhunderts. Genua, Pisa und Amalfi waren Seerepubliken zwei Jahrhunderte früher, und die heutigen Regionen gab es noch nicht.",
  "Il crollo": "Der Zusammenbruch",
  "Nel **1494** **Carlo VIII** di Francia scende in Italia con un esercito che nessuno Stato italiano può fermare da solo. Comincia il ciclo delle **guerre d'Italia**, che dura fino alla pace di **Cateau-Cambrésis** nel **1559** e si combatte quasi interamente sul suolo italiano fra eserciti stranieri.":
    "**1494** zieht **Karl VIII.** von Frankreich mit einem Heer nach Italien, das kein italienischer Staat allein aufhalten kann. Es beginnt der Zyklus der **Italienischen Kriege**, der bis zum Frieden von **Cateau-Cambrésis** **1559** dauert und fast ganz auf italienischem Boden zwischen fremden Heeren ausgetragen wird.",
  "Nel **1527** i lanzichenecchi imperiali saccheggiano Roma: il **sacco di Roma** è la data che gli storici prendono per la fine del Rinascimento come stagione fiduciosa. Alla fine delle guerre la penisola è in mano alla **Spagna**, che vi resterà per un secolo e mezzo, e dopo di essa all'**Austria**.":
    "**1527** plündern die kaiserlichen Landsknechte Rom: der **Sacco di Roma** ist das Datum, das die Geschichtsschreibung für das Ende der Renaissance als zuversichtlicher Epoche nimmt. Am Ende der Kriege ist die Halbinsel in der Hand **Spaniens**, das anderthalb Jahrhunderte bleiben wird, und danach **Österreichs**.",
  "Che cosa comincia con la discesa di Carlo VIII nel 1494?":
    "Was beginnt mit dem Zug Karls VIII. im Jahr 1494?",
  "L'unificazione della penisola": "Die Einigung der Halbinsel",
  "Le guerre d'Italia, combattute in casa da eserciti stranieri":
    "Die Italienischen Kriege, im eigenen Land von fremden Heeren ausgetragen",
  "La costruzione dello Stato della Chiesa": "Der Aufbau des Kirchenstaates",
  "La nascita delle repubbliche marinare": "Die Entstehung der Seerepubliken",
  "L'equilibrio di Lodi si rivela fragile davanti a uno Stato nazionale che può schierare un esercito grande. Da lì al 1559 l'Italia è il campo su cui Francia e Spagna decidono chi comanda in Europa.":
    "Das Gleichgewicht von Lodi erweist sich als brüchig gegenüber einem Nationalstaat, der ein großes Heer aufstellen kann. Von da bis 1559 ist Italien das Feld, auf dem Frankreich und Spanien entscheiden, wer in Europa befiehlt.",
  "Due secoli in ombra": "Zwei Jahrhunderte im Schatten",
  "Il Sei e il Settecento sono i secoli in cui il baricentro europeo si sposta sull'Atlantico e le città italiane, vissute di commercio mediterraneo, perdono peso. Restano però primati culturali che si esportano: il **melodramma**, nato a Firenze intorno al 1600 e diventato la forma teatrale d'Europa; e la **musica strumentale** di Vivaldi, Corelli e Scarlatti.":
    "Das 17. und das 18. Jahrhundert sind die Zeit, in der sich der europäische Schwerpunkt an den Atlantik verlagert und die italienischen Städte, die vom Mittelmeerhandel lebten, an Gewicht verlieren. Es bleiben aber kulturelle Vorsprünge, die ausgeführt werden: die **Oper**, um 1600 in Florenz entstanden und zur Theaterform Europas geworden; und die **Instrumentalmusik** von Vivaldi, Corelli und Scarlatti.",
  "Nel Settecento l'Italia diventa la meta obbligata del **Grand Tour**: i giovani aristocratici europei vengono a vedere le rovine e le collezioni. È il momento in cui si costruisce l'immagine dell'Italia come paese dell'arte — un'immagine che vale ancora, e che il turismo di oggi eredita direttamente.":
    "Im 18. Jahrhundert wird Italien zum Pflichtziel der **Grand Tour**: die jungen europäischen Adligen kommen, um die Ruinen und die Sammlungen zu sehen. Das ist der Moment, in dem das Bild Italiens als Land der Kunst entsteht — ein Bild, das noch gilt und das der heutige Tourismus unmittelbar erbt.",
  "Che cos'era il Grand Tour?": "Was war die Grand Tour?",
  "Un giro in carrozza fra le corti italiane per motivi diplomatici":
    "Eine Kutschfahrt durch die italienischen Höfe aus diplomatischen Gründen",
  "Il viaggio di formazione che portava i giovani europei a vedere l'arte italiana":
    "Die Bildungsreise, die junge Europäer zur italienischen Kunst führte",
  "Una gara ciclistica dell'Ottocento": "Ein Radrennen des 19. Jahrhunderts",
  "Il percorso delle Repubbliche marinare verso l'Oriente": "Die Route der Seerepubliken in den Orient",
  "Fra Sei e Ottocento il viaggio in Italia era considerato parte dell'educazione di un giovane colto europeo. Da quella pratica nasce buona parte dell'immagine internazionale del paese.":
    "Zwischen dem 17. und dem 19. Jahrhundert galt die Italienreise als Teil der Erziehung eines gebildeten jungen Europäers. Aus dieser Praxis stammt ein guter Teil des internationalen Bildes vom Land.",
  "Rinascimento non è un periodo politico ma culturale, e i due calendari non coincidono: quando l'arte italiana è al suo apice, l'indipendenza politica è già finita.":
    "Renaissance ist kein politischer, sondern ein kultureller Zeitraum, und die beiden Kalender fallen nicht zusammen: als die italienische Kunst auf ihrem Höhepunkt ist, ist die politische Unabhängigkeit schon vorbei.",
  // it-risorgimento
  "Perché conta: l'Italia unita ha poco più di centosessant'anni, meno della Germania di poco e molto meno di Francia o Spagna. È un paese antico e uno Stato giovane, e quasi tutte le sue tensioni nascono da questa differenza.":
    "Warum das zählt: das geeinte Italien ist wenig mehr als hundertsechzig Jahre alt, etwas weniger als Deutschland und viel weniger als Frankreich oder Spanien. Es ist ein altes Land und ein junger Staat, und fast alle seine Spannungen entspringen diesem Unterschied.",
  "Napoleone e la Restaurazione": "Napoleon und die Restauration",
  "Nel **1796** Napoleone entra in Italia e riorganizza la penisola in repubbliche satelliti. È allora che nasce il **tricolore**, ed è allora che per la prima volta da secoli si parla di un'Italia come entità politica possibile.":
    "**1796** rückt Napoleon in Italien ein und ordnet die Halbinsel in Tochterrepubliken. Damals entsteht die **Trikolore**, und damals ist zum ersten Mal seit Jahrhunderten von einem Italien als möglicher politischer Größe die Rede.",
  "Il **congresso di Vienna**, nel **1815**, rimette ogni cosa al suo posto: l'Austria in Lombardia e Veneto, i Borbone a Napoli, il papa a Roma, i Savoia in Piemonte. Ma l'idea è ormai in circolazione, e le società segrete come la **Carboneria** la fanno viaggiare.":
    "Der **Wiener Kongress** stellt **1815** alles an seinen Platz zurück: Österreich in die Lombardei und nach Venetien, die Bourbonen nach Neapel, den Papst nach Rom, die Savoyer ins Piemont. Aber der Gedanke ist im Umlauf, und Geheimgesellschaften wie die **Carboneria** tragen ihn weiter.",
  // it-risorgimento
  "Mazzini": "Mazzini",
  "Fonda la Giovine Italia nel 1831. Vuole una repubblica unitaria fatta dal popolo, e passa la vita in esilio.":
    "Er gründet 1831 das Junge Italien. Er will eine Einheitsrepublik, vom Volk gemacht, und verbringt sein Leben im Exil.",
  "Cavour": "Cavour",
  "Primo ministro del Piemonte. Punta su diplomazia, ferrovie e alleanze internazionali più che sulle insurrezioni.":
    "Ministerpräsident des Piemont. Er setzt auf Diplomatie, Eisenbahnen und internationale Bündnisse mehr als auf Aufstände.",
  "Garibaldi": "Garibaldi",
  "Il combattente. Nel 1860 conquista il Regno delle Due Sicilie con mille volontari e lo consegna al re.":
    "Der Kämpfer. 1860 erobert er das Königreich beider Sizilien mit tausend Freiwilligen und übergibt es dem König.",
  "Vittorio Emanuele II": "Viktor Emanuel II.",
  "Re di Sardegna e poi primo re d'Italia. Mantiene il numero dinastico piemontese, il che dice molto su come nacque il nuovo Stato.":
    "König von Sardinien und dann erster König Italiens. Er behält die piemontesische Zählung bei, was viel darüber sagt, wie der neue Staat entstand.",
  "Il 1848 e lo Statuto": "Das Jahr 1848 und das Statut",
  "Il **1848** è l'anno delle rivoluzioni in tutta Europa. A Milano ci sono le **cinque giornate**, a Venezia si proclama una repubblica, a Roma un'altra. Quasi tutto viene represso, ma resta una cosa: il **4 marzo 1848** Carlo Alberto concede lo **Statuto albertino**, la costituzione del Regno di Sardegna.":
    "**1848** ist das Jahr der Revolutionen in ganz Europa. In Mailand gibt es die **fünf Tage**, in Venedig wird eine Republik ausgerufen, in Rom eine weitere. Fast alles wird niedergeschlagen, aber eines bleibt: am **4. März 1848** gewährt Karl Albert das **Statuto albertino**, die Verfassung des Königreichs Sardinien.",
  "Lo Statuto sarà la costituzione dell'Italia unita fino al 1948. Era **flessibile**, cioè modificabile con legge ordinaria: è la ragione per cui il fascismo poté svuotarlo senza mai violarlo formalmente, e la ragione per cui i costituenti del 1947 vollero una costituzione **rigida**.":
    "Das Statut wird bis 1948 die Verfassung des geeinten Italien sein. Es war **flexibel**, also mit gewöhnlichem Gesetz änderbar: das ist der Grund, warum der Faschismus es aushöhlen konnte, ohne es je förmlich zu verletzen, und der Grund, warum die Verfassungsväter von 1947 eine **starre** Verfassung wollten.",
  "Perché lo Statuto albertino non impedì l'ascesa del fascismo?":
    "Warum verhinderte das Statuto albertino den Aufstieg des Faschismus nicht?",
  "Perché non prevedeva un parlamento": "Weil es kein Parlament vorsah",
  "Perché era flessibile e modificabile con legge ordinaria":
    "Weil es flexibel und mit gewöhnlichem Gesetz änderbar war",
  "Perché era stato sospeso nel 1915": "Weil es 1915 ausgesetzt worden war",
  "Perché non valeva nel Sud": "Weil es im Süden nicht galt",
  "Bastavano leggi ordinarie per cambiarne l'impianto, e il regime procedette così, senza mai abrogarlo. Da qui la scelta del 1947: una costituzione rigida, con procedura aggravata e un nucleo immodificabile.":
    "Gewöhnliche Gesetze genügten, um sein Gefüge zu ändern, und das Regime ging genau so vor, ohne es je aufzuheben. Daher die Entscheidung von 1947: eine starre Verfassung, mit erschwertem Verfahren und einem unveränderlichen Kern.",
  "Dieci anni decisivi": "Zehn entscheidende Jahre",
  "Nel **1859** la seconda guerra d'indipendenza, combattuta con la Francia, porta al Piemonte la Lombardia. Nel **1860** i plebisciti annettono Emilia e Toscana, mentre **Garibaldi** sbarca a Marsala con i **Mille** e in pochi mesi conquista il Sud, che consegna al re a Teano.":
    "**1859** bringt der zweite Unabhängigkeitskrieg, an der Seite Frankreichs geführt, dem Piemont die Lombardei. **1860** gliedern Volksabstimmungen die Emilia und die Toskana an, während **Garibaldi** mit den **Tausend** in Marsala landet und in wenigen Monaten den Süden erobert, den er dem König in Teano übergibt.",
  "Il **17 marzo 1861** il primo Parlamento italiano proclama il **Regno d'Italia**. Mancano ancora il **Veneto**, che arriva nel **1866**, e **Roma**, presa il **20 settembre 1870** attraverso la breccia di Porta Pia. La capitale si sposta tre volte: Torino, Firenze, Roma.":
    "Am **17. März 1861** ruft das erste italienische Parlament das **Königreich Italien** aus. Es fehlen noch **Venetien**, das **1866** dazukommt, und **Rom**, am **20. September 1870** durch die Bresche an der Porta Pia genommen. Die Hauptstadt wechselt dreimal: Turin, Florenz, Rom.",
  "Quale territorio entra nel Regno d'Italia per ultimo fra questi?":
    "Welches dieser Gebiete kam als letztes zum Königreich Italien?",
  "La Lombardia": "Die Lombardei",
  "La Toscana": "Die Toskana",
  "Il Veneto": "Venetien",
  "Roma": "Rom",
  "Lombardia nel 1859, Toscana nel 1860, Veneto nel 1866, Roma nel 1870. Trento e Trieste arriveranno solo dopo la Prima guerra mondiale.":
    "Die Lombardei 1859, die Toskana 1860, Venetien 1866, Rom 1870. Trient und Triest kamen erst nach dem Ersten Weltkrieg dazu.",
  "Uno Stato senza cittadini": "Ein Staat ohne Bürger",
  "Al momento dell'Unità votava una piccolissima parte della popolazione, l'analfabetismo superava il settanta per cento e l'italiano era parlato da una minoranza. La frase più citata sul periodo — fatta l'Italia, restano da fare gli italiani — è attribuita a Massimo d'Azeglio, e la paternità è discussa; ma coglie il problema.":
    "Zum Zeitpunkt der Einigung wählte ein winziger Teil der Bevölkerung, der Analphabetismus lag über siebzig Prozent, und Italienisch sprach eine Minderheit. Der meistzitierte Satz über die Zeit — Italien ist gemacht, nun sind die Italiener zu machen — wird Massimo d'Azeglio zugeschrieben, und die Urheberschaft ist umstritten; das Problem trifft er aber.",
  "Nel Sud l'annessione porta tasse nuove, leva obbligatoria e una repressione durissima del **brigantaggio**, un fenomeno insieme criminale e di rivolta sociale. Da lì nasce la **questione meridionale**, e da lì comincia l'**emigrazione**: fra il 1861 e il 1970 lasciano il paese circa **ventisei milioni** di persone.":
    "Im Süden bringt die Angliederung neue Steuern, die Wehrpflicht und eine sehr harte Niederschlagung des **Brigantentums**, das zugleich Verbrechen und sozialer Aufstand war. Daraus entsteht die **Südfrage**, und von dort beginnt die **Auswanderung**: zwischen 1861 und 1970 verlassen rund **sechsundzwanzig Millionen** Menschen das Land.",
  "Che cos'è la questione meridionale?": "Was ist die Südfrage?",
  "La disputa sui confini fra Regno d'Italia e Regno delle Due Sicilie":
    "Der Grenzstreit zwischen dem Königreich Italien und dem Königreich beider Sizilien",
  "Il divario economico e sociale fra Sud e Nord aperto dopo l'Unità":
    "Das wirtschaftliche und soziale Gefälle zwischen Süden und Norden, das sich nach der Einigung auftat",
  "Il dibattito sulla capitale da assegnare al nuovo Stato":
    "Die Debatte darüber, welche Hauptstadt der neue Staat bekommen sollte",
  "La controversia sulla lingua da adottare nelle scuole del Sud":
    "Der Streit über die Unterrichtssprache in den Schulen des Südens",
  "L'unificazione applicò al Mezzogiorno leggi, tasse e tariffe pensate per il Nord, e il divario che ne seguì non si è mai chiuso. È il tema su cui l'Italia discute ininterrottamente da centosessant'anni.":
    "Die Einigung übertrug auf den Mezzogiorno Gesetze, Steuern und Zölle, die für den Norden gedacht waren, und das daraus entstandene Gefälle hat sich nie geschlossen. Es ist das Thema, über das Italien seit hundertsechzig Jahren ununterbrochen streitet.",
  "Il Regno d'Italia comincia con **Vittorio Emanuele II**, non primo: il re conservò il numero che aveva come sovrano di Sardegna. Un dettaglio che dice come l'Unità fu vissuta al Sud — un'annessione al Piemonte più che una fondazione comune.":
    "Das Königreich Italien beginnt mit **Viktor Emanuel II.**, nicht dem Ersten: der König behielt die Zahl, die er als Herrscher von Sardinien trug. Ein Detail, das sagt, wie die Einigung im Süden erlebt wurde — als Angliederung an das Piemont mehr denn als gemeinsame Gründung.",
  // it-guerre-fascismo
  "Perché conta: fra il 1915 e il 1945 l'Italia entra in due guerre mondiali, perde una monarchia, sperimenta una dittatura e si ritrova occupata e divisa in due. Tutto ciò che viene dopo è una risposta a questo trentennio.":
    "Warum das zählt: zwischen 1915 und 1945 tritt Italien in zwei Weltkriege ein, verliert eine Monarchie, erlebt eine Diktatur und findet sich besetzt und in zwei Teile geteilt wieder. Alles, was danach kommt, ist eine Antwort auf diese dreißig Jahre.",
  "La Grande guerra": "Der Große Krieg",
  "L'Italia entra in guerra nel **1915**, dopo aver firmato in segreto il **patto di Londra** con Francia, Gran Bretagna e Russia, e nonostante fosse alleata degli imperi centrali. Il paese si spacca fra interventisti e neutralisti, e la decisione viene presa dal governo e dal re più che dal Parlamento.":
    "Italien tritt **1915** in den Krieg ein, nachdem es heimlich den **Londoner Vertrag** mit Frankreich, Großbritannien und Russland unterzeichnet hatte, und obwohl es mit den Mittelmächten verbündet war. Das Land spaltet sich in Interventionisten und Neutralisten, und die Entscheidung treffen die Regierung und der König mehr als das Parlament.",
  "Seguono tre anni e mezzo di guerra di trincea sull'Isonzo e sul Carso, la rotta di **Caporetto** nel **1917**, e la vittoria di **Vittorio Veneto** nel **1918**. I morti italiani sono circa **seicentomila**.":
    "Es folgen dreieinhalb Jahre Stellungskrieg am Isonzo und auf dem Karst, die Niederlage von **Karfreit** **1917** und der Sieg von **Vittorio Veneto** **1918**. Die italienischen Toten sind rund **sechshunderttausend**.",
  "Alla conferenza di pace l'Italia ottiene Trento, Trieste, l'Alto Adige e l'Istria, ma non tutto ciò che il patto di Londra prometteva. Nasce la formula della **vittoria mutilata**, che alimenta il risentimento su cui il fascismo costruirà il proprio consenso.":
    "Auf der Friedenskonferenz erhält Italien Trient, Triest, Südtirol und Istrien, aber nicht alles, was der Londoner Vertrag versprochen hatte. Es entsteht die Formel vom **verstümmelten Sieg**, die den Groll nährt, auf dem der Faschismus seine Zustimmung aufbauen wird.",
  "Che cosa indica l'espressione vittoria mutilata?": "Was bezeichnet der Ausdruck verstümmelter Sieg?",
  "La sconfitta di Caporetto": "Die Niederlage von Karfreit",
  "Il senso che l'Italia avesse vinto ottenendo meno del promesso":
    "Das Gefühl, Italien habe gesiegt und weniger erhalten als versprochen",
  "Le perdite militari della Grande guerra": "Die militärischen Verluste des Großen Krieges",
  "La divisione del paese nel 1943": "Die Teilung des Landes 1943",
  "L'Italia ottenne meno di quanto il patto di Londra le avesse riconosciuto, e su questo scarto si costruì un risentimento che i movimenti nazionalisti usarono a piene mani.":
    "Italien erhielt weniger, als der Londoner Vertrag ihm zugesprochen hatte, und auf dieser Lücke baute sich ein Groll auf, den die nationalistischen Bewegungen weidlich nutzten.",
  "La presa del potere": "Die Machtergreifung",
  "Nel **1919** nascono i **Fasci italiani di combattimento**. In un paese scosso da scioperi, occupazioni di fabbriche e violenza politica, le squadre fasciste si presentano come forza d'ordine e vengono tollerate da industriali, proprietari terrieri e apparati dello Stato.":
    "**1919** entstehen die **Fasci italiani di combattimento**. In einem Land, das von Streiks, Fabrikbesetzungen und politischer Gewalt erschüttert ist, treten die faschistischen Trupps als Ordnungsmacht auf und werden von Industriellen, Grundbesitzern und Staatsapparaten geduldet.",
  "Il **28 ottobre 1922** le squadre convergono su Roma. **Vittorio Emanuele III** rifiuta di firmare lo stato d'assedio che l'esercito avrebbe eseguito senza difficoltà, e il 30 ottobre incarica **Mussolini** di formare il governo. Il passaggio avviene formalmente dentro le regole dello Statuto: è così che finisce l'Italia liberale.":
    "Am **28. Oktober 1922** ziehen die Trupps auf Rom zu. **Viktor Emanuel III.** weigert sich, den Belagerungszustand zu unterzeichnen, den das Heer ohne Schwierigkeiten vollzogen hätte, und beauftragt am 30. Oktober **Mussolini** mit der Regierungsbildung. Der Übergang geschieht förmlich innerhalb der Regeln des Statuts: so endet das liberale Italien.",
  "Che cosa fece Vittorio Emanuele III il 28 ottobre 1922?":
    "Was tat Viktor Emanuel III. am 28. Oktober 1922?",
  "Firmò lo stato d'assedio e fece fermare le squadre":
    "Er unterzeichnete den Belagerungszustand und ließ die Trupps aufhalten",
  "Rifiutò lo stato d'assedio e incaricò Mussolini di formare il governo":
    "Er verweigerte den Belagerungszustand und beauftragte Mussolini mit der Regierungsbildung",
  "Abdicò a favore del figlio": "Er dankte zugunsten seines Sohnes ab",
  "Sciolse il Parlamento e indisse elezioni": "Er löste das Parlament auf und setzte Wahlen an",
  "L'esercito avrebbe potuto fermare la marcia senza difficoltà. La firma non arrivò, e due giorni dopo Mussolini ricevette l'incarico: una scelta del re, non un colpo di Stato riuscito con la forza.":
    "Das Heer hätte den Marsch ohne Schwierigkeiten aufhalten können. Die Unterschrift kam nicht, und zwei Tage später erhielt Mussolini den Auftrag: eine Entscheidung des Königs und kein mit Gewalt geglückter Staatsstreich.",
  "Il regime": "Das Regime",
  "1924 · Matteotti": "1924 · Matteotti",
  "Il deputato socialista Giacomo Matteotti denuncia i brogli elettorali e viene rapito e ucciso. È la crisi che il regime supera assumendosi ogni responsabilità.":
    "Der sozialistische Abgeordnete Giacomo Matteotti prangert den Wahlbetrug an und wird entführt und ermordet. Es ist die Krise, die das Regime übersteht, indem es alle Verantwortung auf sich nimmt.",
  "1925–26 · Le leggi fascistissime": "1925–26 · Die faschistischen Ausnahmegesetze",
  "Sciolti i partiti, soppressa la stampa libera, istituito il Tribunale speciale. Lo Stato liberale finisce senza che lo Statuto sia mai abrogato.":
    "Die Parteien aufgelöst, die freie Presse unterdrückt, ein Sondergericht eingerichtet. Der liberale Staat endet, ohne dass das Statut je aufgehoben wird.",
  "1929 · I Patti Lateranensi": "1929 · Die Lateranverträge",
  "Con la Santa Sede si chiude la questione romana aperta nel 1870. Nasce lo Stato della Città del Vaticano.":
    "Mit dem Heiligen Stuhl wird die 1870 aufgeworfene römische Frage geschlossen. Es entsteht der Staat der Vatikanstadt.",
  "1938 · Le leggi razziali": "1938 · Die Rassengesetze",
  "Gli ebrei italiani sono esclusi da scuole, professioni e vita pubblica. È il preludio alle deportazioni che seguiranno dal 1943.":
    "Die italienischen Juden werden aus Schulen, Berufen und dem öffentlichen Leben ausgeschlossen. Es ist das Vorspiel zu den Deportationen, die ab 1943 folgen.",
  "Nel **1935** l'invasione dell'**Etiopia** porta le sanzioni della Società delle Nazioni e spinge l'Italia verso la Germania. L'**asse Roma-Berlino** è del 1936, il **patto d'acciaio** del 1939.":
    "**1935** bringt der Überfall auf **Äthiopien** die Sanktionen des Völkerbunds und treibt Italien zu Deutschland hin. Die **Achse Rom-Berlin** stammt von 1936, der **Stahlpakt** von 1939.",
  "La seconda guerra e la rottura": "Der zweite Krieg und der Bruch",
  "L'Italia entra in guerra il **10 giugno 1940**, impreparata. Dopo tre anni di sconfitte, il **25 luglio 1943** il Gran consiglio del fascismo mette Mussolini in minoranza e il re lo fa arrestare. L'**8 settembre 1943** viene annunciato l'**armistizio** con gli Alleati.":
    "Italien tritt am **10. Juni 1940** unvorbereitet in den Krieg ein. Nach drei Jahren Niederlagen bringt der Große Rat des Faschismus Mussolini am **25. Juli 1943** in die Minderheit, und der König lässt ihn verhaften. Am **8. September 1943** wird der **Waffenstillstand** mit den Alliierten verkündet.",
  "Il re e il governo lasciano Roma senza dare ordini chiari all'esercito, che si dissolve. I tedeschi occupano il centro-nord e vi installano la **Repubblica sociale italiana**. Il paese è tagliato in due, con un fronte che risale lentamente la penisola per venti mesi: è **guerra civile** oltre che guerra di liberazione.":
    "König und Regierung verlassen Rom, ohne dem Heer klare Befehle zu geben, und es löst sich auf. Die Deutschen besetzen Mitte und Norden und richten dort die **Italienische Sozialrepublik** ein. Das Land ist in zwei Teile geschnitten, mit einer Front, die zwanzig Monate lang langsam die Halbinsel hinaufzieht: es ist **Bürgerkrieg** und Befreiungskrieg zugleich.",
  "Che cosa accade l'8 settembre 1943?": "Was geschieht am 8. September 1943?",
  "Mussolini viene arrestato": "Mussolini wird verhaftet",
  "Viene annunciato l'armistizio con gli Alleati": "Der Waffenstillstand mit den Alliierten wird verkündet",
  "L'Italia entra in guerra": "Italien tritt in den Krieg ein",
  "Le città del Nord insorgono": "Die Städte des Nordens erheben sich",
  "L'arresto di Mussolini è del 25 luglio, l'entrata in guerra del 10 giugno 1940 e l'insurrezione del 25 aprile 1945. L'8 settembre è l'annuncio dell'armistizio, seguito dal collasso dell'esercito e dall'occupazione tedesca.":
    "Die Verhaftung Mussolinis ist vom 25. Juli, der Kriegseintritt vom 10. Juni 1940 und der Aufstand vom 25. April 1945. Der 8. September ist die Verkündung des Waffenstillstands, gefolgt vom Zerfall des Heeres und der deutschen Besetzung.",
  "Fra il settembre 1943 e l'aprile 1945 esistono due Italie: il Regno del Sud, cobelligerante degli Alleati, e la Repubblica sociale al Nord, sotto controllo tedesco. Molte date di questo periodo valgono per una sola metà del paese.":
    "Zwischen September 1943 und April 1945 gibt es zwei Italien: das Königreich des Südens, Mitkriegführender der Alliierten, und die Sozialrepublik im Norden, unter deutscher Kontrolle. Viele Daten dieser Zeit gelten nur für eine Hälfte des Landes.",
  // it-resistenza-repubblica
  "Perché conta: la Costituzione non nasce a tavolino. Nasce da chi ha combattuto una guerra civile e ha poi dovuto scrivere insieme le regole di un paese in macerie. Quasi ogni articolo porta il segno di quell'esperienza.":
    "Warum das zählt: die Verfassung entsteht nicht am Schreibtisch. Sie entsteht bei Menschen, die einen Bürgerkrieg geführt hatten und danach gemeinsam die Regeln eines Landes in Trümmern schreiben mussten. Fast jeder Artikel trägt das Zeichen dieser Erfahrung.",
  "La Resistenza": "Die Resistenza",
  "Dopo l'8 settembre 1943 si organizzano le formazioni partigiane, coordinate dal **Comitato di liberazione nazionale**, in cui siedono insieme comunisti, socialisti, democratici cristiani, liberali e azionisti: forze che si combatteranno per i decenni successivi ma che in quel momento scrivono insieme.":
    "Nach dem 8. September 1943 organisieren sich die Partisanenverbände, koordiniert vom **Nationalen Befreiungskomitee**, in dem Kommunisten, Sozialisten, Christdemokraten, Liberale und Aktionisten nebeneinander sitzen: Kräfte, die einander in den folgenden Jahrzehnten bekämpfen werden und die in jenem Augenblick gemeinsam schreiben.",
  "Il **25 aprile 1945** il Comitato per l'alta Italia proclama l'insurrezione generale, e Milano e Torino sono liberate prima dell'arrivo degli Alleati. La data è oggi festa nazionale: ricorda la Resistenza, non la firma della resa.":
    "Am **25. April 1945** ruft das Komitee für Oberitalien den allgemeinen Aufstand aus, und Mailand und Turin werden vor der Ankunft der Alliierten befreit. Das Datum ist heute Nationalfeiertag: es erinnert an die Resistenza, nicht an die Unterzeichnung der Kapitulation.",
  "Che cosa proclama il Comitato di liberazione nazionale il 25 aprile 1945?":
    "Was ruft das Nationale Befreiungskomitee am 25. April 1945 aus?",
  "La nascita della Repubblica": "Die Geburt der Republik",
  "L'insurrezione generale nelle città del Nord": "Den allgemeinen Aufstand in den Städten des Nordens",
  "L'armistizio con gli Alleati": "Den Waffenstillstand mit den Alliierten",
  "L'insurrezione. La Repubblica nasce dal referendum del 2 giugno 1946 e la Costituzione entra in vigore il 1º gennaio 1948: tre date diverse, spesso confuse fra loro.":
    "Den Aufstand. Die Republik entsteht aus dem Referendum vom 2. Juni 1946, und die Verfassung tritt am 1. Januar 1948 in Kraft: drei verschiedene Daten, die oft miteinander verwechselt werden.",
  "Dalla monarchia alla Repubblica": "Von der Monarchie zur Republik",
  "Il **2 giugno 1946** gli italiani votano su due schede: la forma dello Stato e l'Assemblea costituente. La **repubblica** prevale con circa il cinquantaquattro per cento, con un Nord largamente repubblicano e un Sud in maggioranza monarchico. **Umberto II** lascia il paese, e la monarchia sabauda finisce dopo ottantacinque anni.":
    "Am **2. Juni 1946** stimmen die Italiener über zwei Stimmzettel ab: über die Staatsform und über die Verfassunggebende Versammlung. Die **Republik** setzt sich mit rund vierundfünfzig Prozent durch, bei einem weitgehend republikanischen Norden und einem mehrheitlich monarchistischen Süden. **Umberto II.** verlässt das Land, und die Monarchie der Savoyer endet nach fünfundachtzig Jahren.",
  "L'Assemblea lavora un anno e mezzo e il **1º gennaio 1948** la Costituzione entra in vigore. Il **18 aprile 1948** si tengono le prime elezioni politiche repubblicane, in un clima segnato dall'inizio della guerra fredda.":
    "Die Versammlung arbeitet anderthalb Jahre, und am **1. Januar 1948** tritt die Verfassung in Kraft. Am **18. April 1948** finden die ersten republikanischen Parlamentswahlen statt, in einem Klima, das vom beginnenden Kalten Krieg geprägt ist.",
  "Il miracolo economico": "Das Wirtschaftswunder",
  "Con il **piano Marshall** e la ricostruzione, fra il **1958 e il 1963** l'Italia cresce a ritmi che nessun altro paese europeo tocca nello stesso periodo, a parte la Germania. È il **boom economico**: da paese prevalentemente agricolo a potenza industriale in una generazione.":
    "Mit dem **Marshallplan** und dem Wiederaufbau wächst Italien zwischen **1958 und 1963** in einem Tempo, das im selben Zeitraum kein anderes europäisches Land außer Deutschland erreicht. Es ist der **Boom**: von einem überwiegend agrarischen Land zur Industriemacht in einer Generation.",
  "La migrazione interna": "Die Binnenwanderung",
  "Milioni di persone lasciano il Sud e il Nordest per le fabbriche del triangolo industriale fra Torino, Milano e Genova.":
    "Millionen Menschen verlassen den Süden und den Nordosten und gehen in die Fabriken des Industriedreiecks zwischen Turin, Mailand und Genua.",
  "Gli oggetti": "Die Gegenstände",
  "La Fiat 500, la Vespa, il frigorifero, il televisore. Il consumo di massa arriva insieme all'unificazione linguistica.":
    "Der Fiat 500, die Vespa, der Kühlschrank, der Fernseher. Der Massenkonsum kommt gemeinsam mit der sprachlichen Vereinheitlichung.",
  "L'Europa": "Europa",
  "Nel 1957 l'Italia firma a Roma i trattati che istituiscono la Comunità economica europea: non vi aderisce, la fonda.":
    "1957 unterzeichnet Italien in Rom die Verträge, die die Europäische Wirtschaftsgemeinschaft begründen: es tritt ihr nicht bei, es gründet sie.",
  "Che cosa fu il boom economico italiano?": "Was war der italienische Wirtschaftsboom?",
  "La ripresa dopo la crisi petrolifera del 1973": "Die Erholung nach der Ölkrise von 1973",
  "La crescita fra il 1958 e il 1963 che rese l'Italia un paese industriale":
    "Das Wachstum zwischen 1958 und 1963, das Italien zu einem Industrieland machte",
  "L'espansione coloniale degli anni Trenta": "Die koloniale Ausdehnung der dreißiger Jahre",
  "L'aumento delle esportazioni dopo l'ingresso nell'euro":
    "Der Anstieg der Ausfuhren nach dem Eintritt in den Euro",
  "In pochi anni l'Italia passò da economia in larga parte agricola a potenza industriale, con una migrazione interna di milioni di persone. La crisi petrolifera del 1973 chiude piuttosto quella stagione.":
    "In wenigen Jahren ging Italien von einer weitgehend agrarischen Wirtschaft zur Industriemacht über, mit einer Binnenwanderung von Millionen Menschen. Die Ölkrise von 1973 beendet diese Epoche eher.",
  "Gli anni difficili": "Die schweren Jahre",
  "Dalla fine degli anni Sessanta il paese attraversa una lunga stagione di violenza politica, chiamata **anni di piombo**: stragi con matrice neofascista, terrorismo di sinistra, apparati dello Stato deviati. Nel **1978** le **Brigate rosse** rapiscono **Aldo Moro**, uccidendo i cinque uomini della scorta, e lo assassinano dopo cinquantacinque giorni. Nel **1980** una bomba alla stazione di **Bologna** uccide ottantacinque persone.":
    "Ab dem Ende der sechziger Jahre durchlebt das Land eine lange Zeit politischer Gewalt, **anni di piombo** genannt, die bleiernen Jahre: Anschläge neofaschistischer Herkunft, linker Terrorismus, außer Kontrolle geratene Staatsapparate. **1978** entführen die **Roten Brigaden** **Aldo Moro**, töten die fünf Männer seiner Eskorte und ermorden ihn nach fünfundfünfzig Tagen. **1980** tötet eine Bombe im Bahnhof von **Bologna** fünfundachtzig Menschen.",
  "All'inizio degli anni Novanta l'inchiesta **Mani pulite** porta alla luce un sistema diffuso di finanziamento illecito dei partiti. Fra il **1992** e il **1994** i partiti che avevano governato dal dopoguerra si dissolvono quasi tutti: è la fine di quella che si chiama **Prima Repubblica**. Nello stesso 1992 le stragi di Capaci e via d'Amelio uccidono i giudici **Falcone** e **Borsellino**.":
    "Anfang der neunziger Jahre bringt die Ermittlung **Mani pulite** ein weit verbreitetes System der unrechtmäßigen Parteienfinanzierung ans Licht. Zwischen **1992** und **1994** lösen sich fast alle Parteien auf, die seit der Nachkriegszeit regiert hatten: das ist das Ende dessen, was man die **Erste Republik** nennt. Im selben Jahr 1992 töten die Attentate von Capaci und der Via d'Amelio die Richter **Falcone** und **Borsellino**.",
  "Che cosa fu Mani pulite?": "Was war Mani pulite?",
  "Una riforma della pubblica amministrazione": "Eine Reform der öffentlichen Verwaltung",
  "L'inchiesta sul finanziamento illecito dei partiti che portò alla fine della Prima Repubblica":
    "Die Ermittlung zur unrechtmäßigen Parteienfinanzierung, die das Ende der Ersten Republik brachte",
  "Un movimento studentesco degli anni Settanta": "Eine Studentenbewegung der siebziger Jahre",
  "Il piano di risanamento dei conti per entrare nell'euro":
    "Der Sanierungsplan der Staatsfinanzen für den Eintritt in den Euro",
  "L'inchiesta milanese aperta nel 1992 rivelò un sistema di tangenti che coinvolgeva quasi tutti i partiti di governo. In due anni il quadro politico nato nel dopoguerra si dissolse.":
    "Die 1992 in Mailand eröffnete Ermittlung enthüllte ein Schmiergeldsystem, das fast alle Regierungsparteien umfasste. In zwei Jahren löste sich das politische Gefüge der Nachkriegszeit auf.",
  "Prima e Seconda Repubblica non sono categorie giuridiche: la Costituzione è sempre la stessa dal 1948. Indicano due stagioni del sistema dei partiti, separate dal biennio 1992-94.":
    "Erste und Zweite Republik sind keine Rechtsbegriffe: die Verfassung ist seit 1948 immer dieselbe. Sie bezeichnen zwei Epochen des Parteiensystems, getrennt durch die Jahre 1992 bis 1994.",
  // it-territorio
  "Perché conta: l'Italia è lunga milleduecento chilometri e larga in certi punti meno di cinquanta. Quasi tutto ciò che la riguarda — il clima, le cucine, i dialetti, perfino la politica — comincia da questa forma.":
    "Warum das zählt: Italien ist zwölfhundert Kilometer lang und an manchen Stellen weniger als fünfzig breit. Fast alles, was es betrifft — das Klima, die Küchen, die Dialekte, sogar die Politik —, beginnt bei dieser Form.",
  "Una penisola e due catene": "Eine Halbinsel und zwei Gebirgszüge",
  "Il paese misura circa **trecentomila chilometri quadrati** e conta poco meno di **sessanta milioni** di abitanti. Le **Alpi** ne chiudono il lato settentrionale e segnano il confine con Francia, Svizzera, Austria e Slovenia; gli **Appennini** lo percorrono per intero dal Nord alla Calabria, e proseguono in Sicilia.":
    "Das Land misst rund **dreihunderttausend Quadratkilometer** und zählt knapp **sechzig Millionen** Einwohner. Die **Alpen** schließen es nach Norden ab und markieren die Grenze zu Frankreich, der Schweiz, Österreich und Slowenien; der **Apennin** durchzieht es ganz, vom Norden bis nach Kalabrien, und setzt sich in Sizilien fort.",
  "Fra le due catene sta la **pianura padana**, l'unica grande pianura del paese e il suo motore agricolo e industriale. Il resto è in gran parte collina: la pianura copre poco più di un quinto del territorio, e questa scarsità spiega perché in Italia si costruisca in verticale sulle colline e si coltivi a terrazze.":
    "Zwischen den beiden Gebirgen liegt die **Poebene**, die einzige große Ebene des Landes und sein landwirtschaftlicher und industrieller Motor. Der Rest ist größtenteils Hügelland: die Ebene bedeckt wenig mehr als ein Fünftel des Gebiets, und diese Knappheit erklärt, warum man in Italien auf den Hügeln in die Höhe baut und in Terrassen anbaut.",
  "Il Po": "Der Po",
  "Il fiume più lungo, circa 650 chilometri dal Monviso all'Adriatico. Attraversa la pianura che porta il suo nome.":
    "Der längste Fluss, rund 650 Kilometer vom Monviso bis zur Adria. Er durchquert die Ebene, die seinen Namen trägt.",
  "Il lago di Garda": "Der Gardasee",
  "Il più grande dei laghi italiani, diviso fra tre regioni: Lombardia, Veneto e Trentino.":
    "Der größte der italienischen Seen, auf drei Regionen verteilt: Lombardei, Venetien und Trentino.",
  "La Sicilia": "Sizilien",
  "La più grande isola del Mediterraneo. La Sardegna è la seconda.":
    "Die größte Insel des Mittelmeers. Sardinien ist die zweitgrößte.",
  "Le coste": "Die Küsten",
  "Circa settemilacinquecento chilometri: nessun punto della penisola è lontanissimo dal mare.":
    "Rund siebentausendfünfhundert Kilometer: kein Punkt der Halbinsel ist sehr weit vom Meer entfernt.",
  "Qual è il fiume più lungo d'Italia?": "Welcher ist der längste Fluss Italiens?",
  "Il Tevere": "Der Tiber",
  "L'Adige": "Die Etsch",
  "L'Arno": "Der Arno",
  "Il Po, circa seicentocinquanta chilometri. L'Adige è il secondo, il Tevere il terzo: entrambi sono più corti di metà.":
    "Der Po, rund sechshundertfünfzig Kilometer. Die Etsch ist der zweitlängste, der Tiber der drittlängste: beide sind weniger als halb so lang.",
  "Una terra che si muove": "Ein Land, das sich bewegt",
  "L'Italia si trova sulla linea di contatto fra la placca africana e quella euroasiatica, e questo la rende **sismica** quasi ovunque tranne che in Sardegna. I terremoti distruttivi ricorrono: il Belice, il Friuli, l'Irpinia, l'Umbria, L'Aquila, il Centro Italia. Ogni volta si riapre la stessa discussione sull'edilizia antisismica.":
    "Italien liegt auf der Kontaktlinie zwischen der afrikanischen und der eurasischen Platte, und das macht es fast überall **erdbebengefährdet**, außer auf Sardinien. Zerstörerische Beben kehren wieder: das Belice-Tal, Friaul, Irpinien, Umbrien, L'Aquila, Mittelitalien. Jedes Mal beginnt dieselbe Debatte über erdbebensicheres Bauen von Neuem.",
  "Gli stessi movimenti danno all'Italia i suoi **vulcani attivi**: l'**Etna**, il maggiore d'Europa, che erutta più volte l'anno; il **Vesuvio**, che nel **79 dopo Cristo** seppellì Pompei ed Ercolano e che sovrasta un'area densamente abitata; lo **Stromboli**, in attività quasi continua; e i **Campi Flegrei**, una vasta caldera a ovest di Napoli.":
    "Dieselben Bewegungen geben Italien seine **tätigen Vulkane**: den **Ätna**, den größten Europas, der mehrmals im Jahr ausbricht; den **Vesuv**, der **79 nach Christus** Pompeji und Herculaneum verschüttete und über einem dicht besiedelten Gebiet aufragt; den **Stromboli**, fast ununterbrochen tätig; und die **Phlegräischen Felder**, eine weite Caldera westlich von Neapel.",
  "Qual è il lago più grande d'Italia?": "Welcher ist der größte See Italiens?",
  "Il lago di Como": "Der Comer See",
  "Il lago Maggiore": "Der Lago Maggiore",
  "Il lago Trasimeno": "Der Trasimenische See",
  "Il Garda, diviso fra Lombardia, Veneto e Trentino. Maggiore e Como sono più piccoli, e il Trasimeno, il maggiore dell'Italia centrale, è molto più piccolo di tutti e tre.":
    "Der Gardasee, auf Lombardei, Venetien und Trentino verteilt. Lago Maggiore und Comer See sind kleiner, und der Trasimenische See, der größte Mittelitaliens, ist viel kleiner als alle drei.",
  "Il clima, al plurale": "Das Klima, im Plural",
  "Con questa lunghezza il clima non può essere uno solo. Le Alpi hanno inverni alpini e nevi permanenti; la pianura padana ha estati afose e nebbie invernali; le coste e le isole hanno il clima mediterraneo, con estati secche e inverni miti. Fra Bolzano e Lampedusa corrono più di dieci gradi di temperatura media annua.":
    "Bei dieser Länge kann das Klima nicht eines sein. Die Alpen haben alpine Winter und ewigen Schnee; die Poebene hat schwüle Sommer und winterlichen Nebel; die Küsten und die Inseln haben Mittelmeerklima mit trockenen Sommern und milden Wintern. Zwischen Bozen und Lampedusa liegen mehr als zehn Grad Jahresmitteltemperatur.",
  "Due Stati dentro": "Zwei Staaten im Inneren",
  "Nel territorio italiano si trovano due Stati indipendenti, entrambi **enclave**, cioè completamente circondati: la **Repubblica di San Marino**, sull'Appennino romagnolo, che si dice la più antica repubblica ancora esistente; e lo **Stato della Città del Vaticano**, nato con i Patti Lateranensi del 1929, il più piccolo Stato del mondo.":
    "Auf italienischem Gebiet liegen zwei unabhängige Staaten, beide **Enklaven**, also vollständig umschlossen: die **Republik San Marino** im romagnolischen Apennin, die als die älteste noch bestehende Republik gilt; und der **Staat der Vatikanstadt**, mit den Lateranverträgen von 1929 entstanden, der kleinste Staat der Welt.",
  "Quali due Stati indipendenti si trovano dentro il territorio italiano?":
    "Welche zwei unabhängigen Staaten liegen innerhalb des italienischen Staatsgebiets?",
  "Monaco e Andorra": "Monaco und Andorra",
  "San Marino e la Città del Vaticano": "San Marino und die Vatikanstadt",
  "Malta e San Marino": "Malta und San Marino",
  "Il Liechtenstein e la Città del Vaticano": "Liechtenstein und die Vatikanstadt",
  "San Marino e il Vaticano sono enclave, cioè circondati per intero dall'Italia. Monaco confina con la Francia, Andorra sta fra Francia e Spagna, e Malta e il Liechtenstein non confinano affatto con l'Italia.":
    "San Marino und der Vatikan sind Enklaven, also ganz von Italien umschlossen. Monaco grenzt an Frankreich, Andorra liegt zwischen Frankreich und Spanien, und Malta und Liechtenstein grenzen überhaupt nicht an Italien.",
  "Il **Monte Bianco**, 4.808 metri, è la vetta più alta della catena alpina; la sovranità della cima è oggetto di una controversia mai risolta con la Francia. Le carte dei due paesi non coincidono.":
    "Der **Mont Blanc**, 4808 Meter, ist der höchste Gipfel der Alpenkette; die Hoheit über den Gipfel ist Gegenstand eines nie gelösten Streits mit Frankreich. Die Karten der beiden Länder stimmen nicht überein.",
  // it-citta-patrimonio
  "Perché conta: l'Italia non ha una sola grande città che concentri tutto, come Parigi o Londra. Ne ha molte, ciascuna con una storia da capitale, e questo cambia il modo in cui il paese funziona.":
    "Warum das zählt: Italien hat keine einzelne große Stadt, die alles auf sich zieht, wie Paris oder London. Es hat viele, jede mit einer Geschichte als Hauptstadt, und das verändert, wie das Land funktioniert.",
  "Molte capitali mancate": "Viele verhinderte Hauptstädte",
  "**Roma** è la più popolosa, con circa due milioni e mezzo di abitanti nel comune. Seguono **Milano**, **Napoli**, **Torino** e **Palermo**. Nessuna però assorbe il paese: Milano è il centro economico e finanziario, Torino quello industriale storico, Napoli la capitale del Mezzogiorno, Firenze e Venezia due città d'arte con un peso mondiale sproporzionato alla loro dimensione.":
    "**Rom** ist die bevölkerungsreichste, mit rund zweieinhalb Millionen Einwohnern in der Gemeinde. Es folgen **Mailand**, **Neapel**, **Turin** und **Palermo**. Keine aber saugt das Land auf: Mailand ist das wirtschaftliche und finanzielle Zentrum, Turin das historisch industrielle, Neapel die Hauptstadt des Mezzogiorno, Florenz und Venedig zwei Kunststädte mit einem Gewicht in der Welt, das ihrer Größe nicht entspricht.",
  "La ragione è nei quattordici secoli senza uno Stato unico: ogni città è stata capitale di qualcosa, e ne ha conservato il palazzo, il teatro, l'università e l'orgoglio.":
    "Der Grund liegt in den vierzehn Jahrhunderten ohne einen einzigen Staat: jede Stadt war Hauptstadt von irgendetwas und hat davon den Palast, das Theater, die Universität und den Stolz behalten.",
  "Qual è la città italiana più popolosa?": "Welche ist die bevölkerungsreichste Stadt Italiens?",
  "Torino": "Turin",
  "Roma, con circa due milioni e mezzo di abitanti nel comune. Milano è la seconda per popolazione comunale, pur avendo un'area metropolitana che per alcuni conteggi la avvicina.":
    "Rom, mit rund zweieinhalb Millionen Einwohnern in der Gemeinde. Mailand ist die zweite nach Gemeindebevölkerung, auch wenn sein Ballungsraum es in mancher Zählung näher heranrückt.",
  "Il primato del patrimonio": "Der Vorsprung beim Erbe",
  "L'Italia è il **primo paese al mondo per numero di siti iscritti nella lista del patrimonio mondiale dell'UNESCO**, davanti alla Cina. Non si tratta soltanto di monumenti isolati: interi **centri storici** sono iscritti come un unico sito — Roma, Firenze, Venezia con la sua laguna, Napoli, Siena, Urbino, Ferrara.":
    "Italien ist das **Land mit den meisten Stätten auf der Welterbeliste der UNESCO**, vor China. Es geht dabei nicht nur um einzelne Bauwerke: ganze **historische Altstädte** sind als eine einzige Stätte eingetragen — Rom, Florenz, Venedig mit seiner Lagune, Neapel, Siena, Urbino, Ferrara.",
  "Pompei ed Ercolano": "Pompeji und Herculaneum",
  "Sepolte dall'eruzione del Vesuvio nel 79 dopo Cristo e riscoperte nel Settecento: due città romane conservate come nessun'altra al mondo.":
    "79 nach Christus vom Ausbruch des Vesuv verschüttet und im 18. Jahrhundert wiederentdeckt: zwei römische Städte, erhalten wie keine anderen auf der Welt.",
  "La Valle dei Templi": "Das Tal der Tempel",
  "Ad Agrigento, in Sicilia: templi greci del quinto secolo avanti Cristo, in un'isola che fu Magna Grecia prima che Roma.":
    "Bei Agrigent auf Sizilien: griechische Tempel des 5. Jahrhunderts vor Christus, auf einer Insel, die Großgriechenland war, bevor sie Rom war.",
  "Le Dolomiti": "Die Dolomiten",
  "Iscritte come patrimonio naturale, non culturale: la lista comprende anche paesaggi.":
    "Als Naturerbe eingetragen, nicht als Kulturerbe: die Liste umfasst auch Landschaften.",
  "I borghi": "Die Borghi",
  "Migliaia di piccoli centri storici non iscritti in nessuna lista compongono un patrimonio diffuso che nessun catalogo riesce a contenere.":
    "Tausende kleiner historischer Ortskerne, die auf keiner Liste stehen, bilden ein verstreutes Erbe, das kein Verzeichnis fassen kann.",
  "Quale sito archeologico fu sepolto dall'eruzione del 79 dopo Cristo?":
    "Welche archäologische Stätte wurde vom Ausbruch des Jahres 79 nach Christus verschüttet?",
  "Pompei": "Pompeji",
  "Ostia antica": "Ostia antica",
  "Paestum": "Paestum",
  "Pompei, insieme a Ercolano e Stabia. La Valle dei Templi è greca e in Sicilia, Paestum è greca in Campania e Ostia era il porto di Roma, abbandonato lentamente e non sepolto.":
    "Pompeji, zusammen mit Herculaneum und Stabiae. Das Tal der Tempel ist griechisch und liegt auf Sizilien, Paestum ist griechisch und liegt in Kampanien, und Ostia war der Hafen Roms, langsam aufgegeben und nicht verschüttet.",
  "Il turismo e i suoi problemi": "Der Tourismus und seine Nöte",
  "Il turismo è una delle principali voci dell'economia italiana e uno dei motivi per cui il paese è fra le prime destinazioni al mondo. Ma la concentrazione crea difficoltà proprie: **Venezia** e **Firenze** vedono i residenti diminuire mentre gli affitti brevi crescono, e in alcune giornate i visitatori superano gli abitanti.":
    "Der Tourismus ist einer der wichtigsten Posten der italienischen Wirtschaft und einer der Gründe, warum das Land zu den ersten Reisezielen der Welt gehört. Die Ballung schafft aber eigene Schwierigkeiten: in **Venedig** und **Florenz** nehmen die Einwohner ab, während die Kurzzeitvermietungen zunehmen, und an manchen Tagen sind die Besucher zahlreicher als die Bewohner.",
  "All'estremo opposto ci sono le **aree interne**: paesi appenninici che si spopolano, dove restano case vuote e servizi in chiusura. È il rovescio esatto della stessa medaglia, e le due cose sono spesso a poche decine di chilometri l'una dall'altra.":
    "Am entgegengesetzten Ende stehen die **inneren Gebiete**: Apenninorte, die sich entvölkern, wo leere Häuser und schließende Einrichtungen bleiben. Es ist genau die Kehrseite derselben Medaille, und beides liegt oft nur wenige Dutzend Kilometer voneinander entfernt.",
  "Quale paese ha il maggior numero di siti nella lista del patrimonio mondiale UNESCO?":
    "Welches Land hat die meisten Stätten auf der Welterbeliste der UNESCO?",
  "La Francia": "Frankreich",
  "La Spagna": "Spanien",
  "L'Italia": "Italien",
  "La Grecia": "Griechenland",
  "L'Italia, davanti alla Cina. Il primato si spiega anche con la struttura del paese: molte città sono state capitali, e ciascuna ha conservato un centro storico intero.":
    "Italien, vor China. Der Vorsprung erklärt sich auch aus dem Aufbau des Landes: viele Städte waren Hauptstädte, und jede hat eine ganze Altstadt bewahrt.",
  "Un sito UNESCO non è sempre un edificio. Possono esserlo un intero centro storico, un paesaggio agricolo, una catena montuosa — e anche pratiche immateriali, come l'arte del pizzaiuolo napoletano.":
    "Eine UNESCO-Stätte ist nicht immer ein Gebäude. Es können eine ganze Altstadt, eine Agrarlandschaft, ein Gebirgszug sein — und auch immaterielle Praktiken, wie die Kunst des neapolitanischen Pizzabäckers.",
  // it-economia
  "Perché conta: l'economia italiana non si capisce guardando le grandi aziende, perché non è fatta di quelle. È fatta di migliaia di imprese piccole che, messe insieme per territorio, funzionano come una grande.":
    "Warum das zählt: die italienische Wirtschaft versteht man nicht, wenn man auf die großen Unternehmen schaut, denn aus denen besteht sie nicht. Sie besteht aus Tausenden kleiner Betriebe, die, nach Gebieten zusammengenommen, wie ein großer funktionieren.",
  "I distretti industriali": "Die Industriedistrikte",
  "Un **distretto industriale** è un territorio in cui molte piccole e medie imprese fanno tutte la stessa cosa, o parti diverse della stessa cosa, e si passano il lavoro. Non è un'invenzione a tavolino: è cresciuto dove c'era già un mestiere, spesso da botteghe artigiane.":
    "Ein **Industriedistrikt** ist ein Gebiet, in dem viele kleine und mittlere Betriebe alle dasselbe tun oder verschiedene Teile derselben Sache, und sich die Arbeit weiterreichen. Das ist keine Schreibtischerfindung: es ist dort gewachsen, wo bereits ein Handwerk saß, oft aus Handwerksbetrieben.",
  "Occhiali": "Brillen",
  "Nel Bellunese, in Veneto: una valle alpina che produce una quota rilevante degli occhiali del mondo.":
    "Im Gebiet von Belluno in Venetien: ein Alpental, das einen erheblichen Teil der Brillen der Welt herstellt.",
  "Ceramica": "Keramik",
  "A Sassuolo, in Emilia: piastrelle esportate ovunque, da un distretto nato attorno all'argilla locale.":
    "In Sassuolo in der Emilia: Fliesen, überallhin ausgeführt, aus einem Distrikt, der um den örtlichen Ton entstand.",
  "Calzature": "Schuhe",
  "Nelle Marche e in Veneto, dove la scarpa si fa in filiera fra decine di piccole imprese vicine.":
    "In den Marken und in Venetien, wo der Schuh in einer Kette aus Dutzenden benachbarter Kleinbetriebe entsteht.",
  "Meccanica": "Maschinenbau",
  "Lungo la via Emilia: macchine per il packaging, motori, automazione. È il settore che esporta di più.":
    "Entlang der Via Emilia: Verpackungsmaschinen, Motoren, Automatisierung. Es ist der Bereich, der am meisten ausführt.",
  "Le esportazioni si riassumono spesso nelle **quattro A**: **abbigliamento**, **arredamento**, **automazione** e **alimentare**. Insieme al turismo, sono ciò per cui il paese è conosciuto sui mercati.":
    "Die Ausfuhren fasst man oft in den **vier A** zusammen: **abbigliamento** (Bekleidung), **arredamento** (Einrichtung), **automazione** (Automatisierung) und **alimentare** (Lebensmittel). Zusammen mit dem Tourismus sind sie das, wofür das Land auf den Märkten bekannt ist.",
  "Che cos'è un distretto industriale?": "Was ist ein Industriedistrikt?",
  "Una zona franca esente da imposte": "Eine steuerfreie Sonderzone",
  "Un territorio in cui molte piccole e medie imprese lavorano nello stesso settore e si passano il lavoro":
    "Ein Gebiet, in dem viele kleine und mittlere Betriebe derselben Branche arbeiten und sich die Arbeit weiterreichen",
  "Un quartiere riservato agli stabilimenti in una grande città":
    "Ein den Fabriken vorbehaltenes Viertel in einer Großstadt",
  "Un consorzio pubblico che finanzia le imprese": "Ein öffentliches Konsortium, das Unternehmen finanziert",
  "È una concentrazione territoriale di imprese specializzate, cresciuta di solito da un mestiere già presente. Sostituisce con la vicinanza ciò che altrove fa la dimensione aziendale.":
    "Es ist eine räumliche Ballung spezialisierter Betriebe, meist aus einem schon vorhandenen Handwerk gewachsen. Sie ersetzt durch Nähe das, was anderswo die Unternehmensgröße leistet.",
  "Due velocità": "Zwei Geschwindigkeiten",
  "Il **divario fra Nord e Sud** è la questione economica più antica del paese e non si è mai chiusa. Il reddito per abitante nel Mezzogiorno è nettamente inferiore a quello del Centro-Nord, la disoccupazione è più alta e l'occupazione femminile molto più bassa.":
    "Das **Gefälle zwischen Norden und Süden** ist die älteste wirtschaftliche Frage des Landes und hat sich nie geschlossen. Das Einkommen je Einwohner liegt im Mezzogiorno deutlich unter dem des Zentrums und des Nordens, die Arbeitslosigkeit ist höher und die Erwerbstätigkeit von Frauen viel niedriger.",
  "Su tutto pesa poi l'**economia sommersa**, cioè il lavoro e il fatturato che non risultano da nessuna parte: una quota stimata in più di un decimo del prodotto interno lordo, con punte assai maggiori in alcuni settori e in alcune aree.":
    "Über allem lastet außerdem die **Schattenwirtschaft**, also die Arbeit und der Umsatz, die nirgends auftauchen: ein Anteil, der auf mehr als ein Zehntel des Bruttoinlandsprodukts geschätzt wird, mit deutlich höheren Spitzen in einzelnen Branchen und Gegenden.",
  "Quali sono le quattro A dell'export italiano?": "Welches sind die vier A der italienischen Ausfuhr?",
  "Agricoltura, artigianato, acciaio e auto": "Landwirtschaft, Handwerk, Stahl und Autos",
  "Abbigliamento, arredamento, automazione e alimentare":
    "Bekleidung, Einrichtung, Automatisierung und Lebensmittel",
  "Arte, artigianato, agricoltura e automobili": "Kunst, Handwerk, Landwirtschaft und Automobile",
  "Alimentare, acciaio, aeronautica e arredamento": "Lebensmittel, Stahl, Luftfahrt und Einrichtung",
  "Abbigliamento, arredamento, automazione e alimentare: la formula riassume ciò per cui l'Italia è conosciuta sui mercati esteri, insieme al turismo.":
    "Abbigliamento, arredamento, automazione und alimentare: die Formel fasst zusammen, wofür Italien auf den Auslandsmärkten bekannt ist, zusammen mit dem Tourismus.",
  "I nodi aperti": "Die offenen Fragen",
  "L'Italia ha un **debito pubblico** fra i più alti d'Europa in rapporto al prodotto, eredità di decenni di spesa a deficit soprattutto negli anni Ottanta. Serve un avanzo primario costante solo per non farlo crescere, il che riduce lo spazio per investire.":
    "Italien hat eine der höchsten **Staatsverschuldungen** Europas im Verhältnis zur Wirtschaftsleistung, das Erbe von Jahrzehnten defizitärer Ausgaben vor allem in den achtziger Jahren. Es braucht einen dauerhaften Primärüberschuss allein dafür, dass sie nicht weiter wächst, was den Raum für Investitionen verkleinert.",
  "Il secondo nodo è **demografico**: la natalità è fra le più basse del mondo e la popolazione invecchia. Il terzo è la partenza dei giovani: molti laureati lasciano il paese, e l'Italia forma persone che poi lavorano altrove.":
    "Der zweite Knoten ist **demografisch**: die Geburtenrate gehört zu den niedrigsten der Welt, und die Bevölkerung altert. Der dritte ist der Weggang der Jungen: viele Hochschulabsolventinnen verlassen das Land, und Italien bildet Menschen aus, die danach anderswo arbeiten.",
  "Che cosa indica l'espressione economia sommersa?": "Was bezeichnet der Ausdruck Schattenwirtschaft?",
  "L'economia delle regioni costiere": "Die Wirtschaft der Küstenregionen",
  "Il lavoro e il fatturato che non risultano ufficialmente":
    "Die Arbeit und der Umsatz, die amtlich nicht auftauchen",
  "Il settore delle imprese pubbliche": "Den Bereich der öffentlichen Unternehmen",
  "Il commercio con i paesi extraeuropei": "Den Handel mit außereuropäischen Ländern",
  "È la parte di attività economica non dichiarata: lavoro senza contratto, ricavi non fatturati. In Italia è stimata sopra un decimo del prodotto interno lordo, con punte molto più alte in alcuni settori.":
    "Es ist der nicht angemeldete Teil der Wirtschaftstätigkeit: Arbeit ohne Vertrag, Einnahmen ohne Rechnung. In Italien wird er auf über ein Zehntel des Bruttoinlandsprodukts geschätzt, mit sehr viel höheren Spitzen in einzelnen Branchen.",
  "Piccola impresa non significa impresa arretrata. Molte aziende italiane con poche decine di dipendenti sono leader mondiali nella loro nicchia: fanno una cosa sola, e la fanno meglio di chiunque altro.":
    "Kleiner Betrieb heißt nicht rückständiger Betrieb. Viele italienische Unternehmen mit wenigen Dutzend Beschäftigten sind Weltmarktführer in ihrer Nische: sie machen eine einzige Sache, und die besser als alle anderen.",
  // it-europa-mondo
  "Perché conta: l'Italia non ha aderito all'Europa comunitaria, l'ha fondata. E il paese che oggi riceve chi arriva dal mare è lo stesso da cui, per un secolo, sono partiti in ventisei milioni.":
    "Warum das zählt: Italien ist dem gemeinschaftlichen Europa nicht beigetreten, es hat es gegründet. Und das Land, das heute jene aufnimmt, die über das Meer kommen, ist dasselbe, aus dem ein Jahrhundert lang sechsundzwanzig Millionen fortgegangen sind.",
  "Fra i fondatori": "Unter den Gründern",
  "L'**articolo 11** della Costituzione consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: è la base giuridica di tutto ciò che segue.":
    "**Artikel 11** der Verfassung lässt die Souveränitätsbeschränkungen zu, die eine Ordnung braucht, welche den Frieden sichert: er ist die Rechtsgrundlage für alles Folgende.",
  "1949 · NATO": "1949 · NATO",
  "L'Italia è fra i dodici paesi che firmano il trattato dell'Atlantico del Nord.":
    "Italien gehört zu den zwölf Ländern, die den Nordatlantikvertrag unterzeichnen.",
  "1951 · CECA": "1951 · Montanunion",
  "Con la Comunità europea del carbone e dell'acciaio comincia l'integrazione. L'Italia è fra i sei fondatori.":
    "Mit der Europäischen Gemeinschaft für Kohle und Stahl beginnt die Integration. Italien ist einer der sechs Gründer.",
  "1957 · Trattati di Roma": "1957 · Römische Verträge",
  "Nascono la CEE e l'Euratom, firmate in Campidoglio. La sede della firma non è un dettaglio.":
    "Es entstehen die EWG und Euratom, unterzeichnet auf dem Kapitol. Der Ort der Unterschrift ist kein Detail.",
  "1955 · ONU": "1955 · Vereinte Nationen",
  "L'ammissione arriva dieci anni dopo la fondazione, sbloccata insieme a quella di altri paesi rimasti fuori per la guerra fredda.":
    "Die Aufnahme kommt zehn Jahre nach der Gründung, freigegeben zusammen mit der anderer Länder, die der Kalte Krieg draußen gehalten hatte.",
  "L'**euro** sostituisce la lira come moneta di conto nel **1999** e come contante il **1º gennaio 2002**. L'Italia fa parte dello **spazio Schengen**, del **G7** e del **G20**, e l'**italiano** è una delle lingue ufficiali dell'Unione europea.":
    "Der **Euro** ersetzt die Lira **1999** als Buchgeld und am **1. Januar 2002** als Bargeld. Italien gehört zum **Schengen-Raum**, zur **G7** und zur **G20**, und das **Italienische** ist eine der Amtssprachen der Europäischen Union.",
  "In quale anno l'Italia entra nella NATO?": "In welchem Jahr tritt Italien der NATO bei?",
  "Nel 1946": "1946",
  "Nel 1949": "1949",
  "Nel 1955": "1955",
  "Nel 1957": "1957",
  "Nel 1949, fra i dodici firmatari originari. Il 1955 è l'ammissione all'ONU e il 1957 la firma dei Trattati di Roma: tre date vicine e distinte.":
    "1949, als einer der zwölf ursprünglichen Unterzeichner. 1955 ist die Aufnahme in die Vereinten Nationen und 1957 die Unterzeichnung der Römischen Verträge: drei nahe und doch verschiedene Daten.",
  "Roma capitale dell'alimentazione mondiale": "Rom als Welthauptstadt der Ernährung",
  "Tre agenzie delle Nazioni Unite che si occupano di cibo e agricoltura hanno sede a Roma: la **FAO**, l'**IFAD** e il **Programma alimentare mondiale**. È una concentrazione che nessun'altra città al mondo ha, e fa di Roma la capitale internazionale di quel tema.":
    "Drei Organisationen der Vereinten Nationen, die sich mit Ernährung und Landwirtschaft befassen, haben ihren Sitz in Rom: die **FAO**, der **IFAD** und das **Welternährungsprogramm**. Es ist eine Ballung, die keine andere Stadt der Welt hat, und sie macht Rom zur internationalen Hauptstadt dieses Themas.",
  "Quali agenzie delle Nazioni Unite hanno sede a Roma?":
    "Welche Organisationen der Vereinten Nationen haben ihren Sitz in Rom?",
  "Quelle che si occupano di alimentazione e agricoltura":
    "Die, die sich mit Ernährung und Landwirtschaft befassen",
  "Quelle che si occupano di salute": "Die, die sich mit Gesundheit befassen",
  "Quelle che si occupano di istruzione e cultura": "Die, die sich mit Bildung und Kultur befassen",
  "Quelle che si occupano di lavoro": "Die, die sich mit Arbeit befassen",
  "FAO, IFAD e Programma alimentare mondiale. La salute sta a Ginevra con l'OMS, la cultura a Parigi con l'UNESCO e il lavoro a Ginevra con l'OIL.":
    "FAO, IFAD und Welternährungsprogramm. Die Gesundheit sitzt mit der WHO in Genf, die Kultur mit der UNESCO in Paris und die Arbeit mit der ILO in Genf.",
  "Un paese che è partito e che riceve": "Ein Land, das gegangen ist und das aufnimmt",
  "Fra il 1861 e il 1970 lasciarono l'Italia circa **ventisei milioni** di persone, verso le Americhe prima e verso l'Europa del Nord poi. In molti paesi esistono comunità di origine italiana grandi quanto una regione, e la lingua italiana è parlata fuori dai confini più che dentro certi confini storici.":
    "Zwischen 1861 und 1970 verließen rund **sechsundzwanzig Millionen** Menschen Italien, zuerst nach Amerika und später nach Nordeuropa. In vielen Ländern gibt es Gemeinschaften italienischer Herkunft, so groß wie eine Region, und die italienische Sprache wird außerhalb der Grenzen mehr gesprochen als innerhalb mancher historischer Grenzen.",
  "Dagli anni Ottanta il movimento si è invertito: oggi risiedono in Italia circa **cinque milioni** di cittadini stranieri, la comunità più numerosa delle quali è quella romena. La posizione al centro del Mediterraneo fa dell'Italia una delle frontiere esterne dell'Unione, con tutto ciò che ne consegue nel dibattito pubblico.":
    "Seit den achtziger Jahren hat sich die Bewegung umgekehrt: heute leben rund **fünf Millionen** ausländische Staatsangehörige in Italien, die zahlenstärkste Gemeinschaft ist die rumänische. Die Lage in der Mitte des Mittelmeers macht Italien zu einer der Außengrenzen der Union, mit allem, was daraus für die öffentliche Debatte folgt.",
  "Quanti cittadini stranieri risiedono oggi in Italia, all'incirca?":
    "Wie viele ausländische Staatsangehörige leben heute ungefähr in Italien?",
  "Circa mezzo milione": "Rund eine halbe Million",
  "Circa due milioni": "Rund zwei Millionen",
  "Circa cinque milioni": "Rund fünf Millionen",
  "Circa dieci milioni": "Rund zehn Millionen",
  "Circa cinque milioni, poco meno di un decimo della popolazione. La comunità più numerosa è quella romena. Il movimento si è invertito negli anni Ottanta: fino ad allora l'Italia era un paese da cui si partiva.":
    "Rund fünf Millionen, knapp ein Zehntel der Bevölkerung. Die zahlenstärkste Gemeinschaft ist die rumänische. Die Bewegung kehrte sich in den achtziger Jahren um: bis dahin war Italien ein Land, aus dem man fortging.",
  "Aderire e fondare non sono la stessa cosa. L'Italia è fra i sei paesi che hanno creato la CECA nel 1951 e la CEE nel 1957: non è entrata in un'Europa già esistente, l'ha costruita.":
    "Beitreten und gründen sind nicht dasselbe. Italien gehört zu den sechs Ländern, die 1951 die Montanunion und 1957 die EWG geschaffen haben: es ist nicht in ein bestehendes Europa eingetreten, es hat es gebaut.",
  // it-lavoro
  "Perché conta: la Costituzione mette il lavoro nel primo articolo, e il diritto del lavoro italiano ha alcune particolarità che sorprendono chi arriva da altri paesi — a cominciare dal fatto che il salario minimo non lo fissa la legge.":
    "Warum das zählt: die Verfassung stellt die Arbeit in den ersten Artikel, und das italienische Arbeitsrecht hat einige Eigenheiten, die überraschen, wer aus anderen Ländern kommt — angefangen damit, dass den Mindestlohn nicht das Gesetz festsetzt.",
  "Che cosa dice la Costituzione": "Was die Verfassung sagt",
  "L'**articolo 1** fonda la Repubblica sul lavoro; l'**articolo 4** riconosce a tutti il diritto al lavoro e impegna la Repubblica a renderlo effettivo. L'**articolo 36** stabilisce che la retribuzione deve essere **proporzionata** alla quantità e qualità del lavoro e comunque **sufficiente** ad assicurare un'esistenza libera e dignitosa.":
    "**Artikel 1** gründet die Republik auf die Arbeit; **Artikel 4** erkennt allen das Recht auf Arbeit zu und verpflichtet die Republik, es wirksam zu machen. **Artikel 36** bestimmt, dass die Entlohnung der Menge und Güte der Arbeit **angemessen** und jedenfalls **ausreichend** sein muss, um ein freies und würdiges Dasein zu sichern.",
  "L'**articolo 37** garantisce alla donna lavoratrice gli stessi diritti e la stessa retribuzione dell'uomo. L'**articolo 39** riconosce la libertà sindacale e l'**articolo 40** il diritto di sciopero.":
    "**Artikel 37** sichert der arbeitenden Frau dieselben Rechte und dieselbe Entlohnung wie dem Mann. **Artikel 39** erkennt die Gewerkschaftsfreiheit an und **Artikel 40** das Streikrecht.",
  "Il contratto collettivo": "Der Tarifvertrag",
  "In Italia le condizioni minime non sono fissate azienda per azienda ma **settore per settore**, attraverso il **contratto collettivo nazionale di lavoro**, il CCNL, firmato dalle organizzazioni dei datori e dai sindacati. Esistono centinaia di CCNL: metalmeccanici, commercio, edilizia, scuola, sanità privata.":
    "In Italien werden die Mindestbedingungen nicht Betrieb für Betrieb festgelegt, sondern **Branche für Branche**, durch den **nationalen Tarifvertrag**, den CCNL, den die Arbeitgeberverbände und die Gewerkschaften unterzeichnen. Es gibt Hunderte solcher Verträge: Metall, Handel, Bau, Schule, private Gesundheitsversorgung.",
  "Da qui una conseguenza che spesso sorprende: **l'Italia non ha un salario minimo fissato per legge**. I minimi stanno nei contratti collettivi, e chi lavora in un settore senza contratto applicato può trovarsi senza quella protezione. Il tema è oggetto di discussione da anni.":
    "Daraus folgt etwas, das oft überrascht: **Italien hat keinen gesetzlichen Mindestlohn**. Die Mindestsätze stehen in den Tarifverträgen, und wer in einer Branche ohne angewandten Vertrag arbeitet, kann ohne diesen Schutz dastehen. Das Thema wird seit Jahren diskutiert.",
  "Chi fissa in Italia le retribuzioni minime?": "Wer legt in Italien die Mindestlöhne fest?",
  "Una legge nazionale sul salario minimo": "Ein nationales Mindestlohngesetz",
  "I contratti collettivi nazionali, settore per settore":
    "Die nationalen Tarifverträge, Branche für Branche",
  "Ogni singola azienda": "Jeder einzelne Betrieb",
  "Le regioni, con proprie leggi": "Die Regionen, mit eigenen Gesetzen",
  "Non esiste un salario minimo di legge: i minimi stanno nei CCNL firmati per ciascun settore. È una delle particolarità del sistema italiano rispetto a gran parte d'Europa.":
    "Einen gesetzlichen Mindestlohn gibt es nicht: die Mindestsätze stehen in den für jede Branche unterzeichneten Tarifverträgen. Das ist eine der Eigenheiten des italienischen Systems gegenüber dem größten Teil Europas.",
  "Le forme del contratto": "Die Vertragsformen",
  "Tempo indeterminato": "Unbefristet",
  "Senza scadenza. Resta la forma di riferimento, e il licenziamento richiede una giusta causa o un giustificato motivo.":
    "Ohne Ende. Es bleibt die Bezugsform, und die Kündigung verlangt einen wichtigen oder einen sachlichen Grund.",
  "Tempo determinato": "Befristet",
  "Con una scadenza e limiti di durata e di rinnovo, per evitare che diventi permanente sotto altro nome.":
    "Mit einem Ende und Grenzen für Dauer und Verlängerung, damit es nicht unter anderem Namen dauerhaft wird.",
  "Apprendistato": "Ausbildungsvertrag",
  "Unisce lavoro e formazione, per i giovani. Prevede contributi ridotti per il datore.":
    "Er verbindet Arbeit und Ausbildung, für junge Menschen. Er sieht verringerte Beiträge für den Arbeitgeber vor.",
  "Partita IVA": "Umsatzsteuernummer",
  "Lavoro autonomo: si fattura invece di ricevere una busta paga, e si versano da soli imposte e contributi.":
    "Selbstständige Arbeit: man stellt Rechnungen, statt eine Lohnabrechnung zu bekommen, und führt Steuern und Beiträge selbst ab.",
  "La busta paga": "Die Lohnabrechnung",
  "Fra **lordo** e **netto** corre una differenza notevole: dallo stipendio lordo si sottraggono i contributi previdenziali versati all'**INPS** e l'imposta sul reddito, l'**IRPEF**, che è progressiva a scaglioni come vuole l'articolo 53.":
    "Zwischen **brutto** und **netto** liegt ein erheblicher Unterschied: vom Bruttolohn werden die Sozialbeiträge an die Rentenanstalt **INPS** und die Einkommensteuer **IRPEF** abgezogen, die stufenweise progressiv ist, wie Artikel 53 es verlangt.",
  "Due voci sono tipicamente italiane. La **tredicesima** è una mensilità aggiuntiva pagata a dicembre, e in alcuni settori esiste anche una **quattordicesima** a giugno. Il **TFR**, trattamento di fine rapporto, è una somma accantonata ogni mese e liquidata quando il rapporto finisce, per qualunque motivo finisca.":
    "Zwei Posten sind typisch italienisch. Die **tredicesima** ist ein dreizehntes Monatsgehalt, im Dezember gezahlt, und in manchen Branchen gibt es auch eine **quattordicesima** im Juni. Der **TFR**, die Abfindung zum Ende des Arbeitsverhältnisses, ist eine Summe, die Monat für Monat zurückgelegt und beim Ende des Verhältnisses ausgezahlt wird, gleich aus welchem Grund es endet.",
  "Che cos'è la tredicesima?": "Was ist die tredicesima?",
  "Un'imposta aggiuntiva di fine anno": "Eine zusätzliche Steuer zum Jahresende",
  "Una mensilità in più, corrisposta a dicembre": "Ein zusätzliches Monatsgehalt, im Dezember ausgezahlt",
  "Il contributo versato all'INPS": "Der Beitrag an die Rentenanstalt",
  "Il numero massimo di ore settimanali di straordinario": "Die Höchstzahl wöchentlicher Überstunden",
  "Una mensilità aggiuntiva pagata a dicembre. In alcuni settori esiste anche una quattordicesima, di solito a giugno: entrambe sono previste dai contratti collettivi.":
    "Ein zusätzliches Monatsgehalt, im Dezember gezahlt. In manchen Branchen gibt es auch eine quattordicesima, meist im Juni: beide sehen die Tarifverträge vor.",
  "I sindacati e le tutele": "Die Gewerkschaften und die Schutzrechte",
  "Le tre confederazioni storiche sono **CGIL**, **CISL** e **UIL**, nate dalla scissione del sindacato unitario del dopoguerra lungo linee politiche. Lo **Statuto dei lavoratori** del **1970** ha portato le libertà costituzionali dentro i luoghi di lavoro e vietato il licenziamento senza giusta causa nelle imprese maggiori.":
    "Die drei historischen Dachverbände sind **CGIL**, **CISL** und **UIL**, entstanden aus der Spaltung der Einheitsgewerkschaft der Nachkriegszeit entlang politischer Linien. Das **Arbeitnehmerstatut** von **1970** hat die Verfassungsfreiheiten in die Betriebe hineingetragen und die Kündigung ohne wichtigen Grund in den größeren Unternehmen verboten.",
  "Due enti pubblici accompagnano ogni rapporto di lavoro: l'**INPS**, che incassa i contributi e paga pensioni e indennità, e l'**INAIL**, che assicura contro gli infortuni e le malattie professionali. Le **ferie** minime sono quattro settimane l'anno, e almeno due vanno godute nell'anno di maturazione.":
    "Zwei öffentliche Anstalten begleiten jedes Arbeitsverhältnis: die **INPS**, die die Beiträge einzieht und Renten und Leistungen zahlt, und die **INAIL**, die gegen Arbeitsunfälle und Berufskrankheiten versichert. Der **Mindesturlaub** beträgt vier Wochen im Jahr, und mindestens zwei müssen im Jahr des Erwerbs genommen werden.",
  "Che cos'è il TFR?": "Was ist der TFR?",
  "Un fondo pensione obbligatorio gestito dai sindacati":
    "Ein von den Gewerkschaften verwalteter Pflichtpensionsfonds",
  "Una somma accantonata ogni mese e liquidata alla fine del rapporto di lavoro":
    "Eine Summe, die monatlich zurückgelegt und am Ende des Arbeitsverhältnisses ausgezahlt wird",
  "Il contributo per la formazione professionale": "Der Beitrag zur beruflichen Bildung",
  "Un premio legato ai risultati aziendali": "Eine Prämie, die an das Betriebsergebnis geknüpft ist",
  "Il trattamento di fine rapporto matura ogni mese e viene pagato alla cessazione, qualunque ne sia il motivo: dimissioni, licenziamento o pensione. È una particolarità italiana.":
    "Die Abfindung zum Ende des Arbeitsverhältnisses wächst Monat für Monat und wird bei Beendigung gezahlt, aus welchem Grund auch immer: Kündigung durch die Beschäftigte, Kündigung durch den Betrieb oder Rente. Es ist eine italienische Besonderheit.",
  "Assunzione a tempo indeterminato non significa impossibilità di licenziare. Significa che serve una **giusta causa** o un **giustificato motivo**, e che senza di essi il licenziamento è impugnabile.":
    "Unbefristete Einstellung heißt nicht Unkündbarkeit. Sie heißt, dass es einen **wichtigen Grund** oder einen **sachlichen Grund** braucht und dass eine Kündigung ohne sie angefochten werden kann.",
  // it-sanita-scuola
  "Perché conta: sono i due servizi che si incontrano per primi vivendo in un paese. In Italia entrambi sono pubblici e universali sulla carta, e in entrambi le regioni contano moltissimo.":
    "Warum das zählt: es sind die beiden Dienste, denen man beim Leben in einem Land zuerst begegnet. In Italien sind beide öffentlich und dem Anspruch nach für alle da, und in beiden zählen die Regionen sehr viel.",
  "Il Servizio sanitario nazionale": "Der nationale Gesundheitsdienst",
  "Il **Servizio sanitario nazionale** nasce nel **1978** e sostituisce il vecchio sistema delle casse mutue legate alla categoria professionale. Poggia su tre principi: **universalità** — vale per tutti i residenti — **uguaglianza** e **globalità** della copertura. È finanziato dalla **fiscalità generale**, cioè dalle tasse, non da un premio assicurativo.":
    "Der **nationale Gesundheitsdienst** entsteht **1978** und löst das alte System der an den Berufsstand gebundenen Krankenkassen ab. Er ruht auf drei Grundsätzen: **Allgemeinheit** — er gilt für alle Einwohner —, **Gleichheit** und **Vollständigkeit** der Absicherung. Finanziert wird er aus dem **allgemeinen Steueraufkommen**, nicht aus einer Versicherungsprämie.",
  "La gestione però è **regionale**. Ogni regione organizza le proprie aziende sanitarie e i propri ospedali, e da qui nascono differenze reali di attesa, qualità e organizzazione, con una **mobilità sanitaria** che porta molti pazienti del Sud a curarsi al Nord.":
    "Die Verwaltung ist allerdings **regional**. Jede Region ordnet ihre eigenen Gesundheitsbetriebe und Krankenhäuser, und daraus entstehen wirkliche Unterschiede bei Wartezeit, Qualität und Organisation, mit einer **Patientenwanderung**, die viele Kranke aus dem Süden zur Behandlung in den Norden führt.",
  "Il medico di base": "Die Hausärztin",
  "Si sceglie fra quelli disponibili nella propria zona ed è il primo riferimento: visita, prescrive e indirizza allo specialista.":
    "Man wählt sie unter denen, die im eigenen Gebiet verfügbar sind, und sie ist die erste Anlaufstelle: sie untersucht, verschreibt und überweist zur Fachärztin.",
  "La tessera sanitaria": "Die Gesundheitskarte",
  "Dà accesso alle prestazioni e riporta il codice fiscale. Sul retro è anche tessera europea di assicurazione malattia.":
    "Sie gibt Zugang zu den Leistungen und trägt die Steuernummer. Auf der Rückseite ist sie zugleich europäische Krankenversicherungskarte.",
  "Il ticket": "Der Selbstbehalt",
  "Una quota a carico del paziente per visite ed esami, con esenzioni per reddito, età e patologia. Il pronto soccorso urgente non si paga.":
    "Ein Anteil, den die Patientin für Untersuchungen trägt, mit Befreiungen nach Einkommen, Alter und Krankheit. Die dringende Notaufnahme kostet nichts.",
  "I codici di priorità": "Die Dringlichkeitsstufen",
  "Al pronto soccorso non si è ricevuti in ordine di arrivo ma di gravità: chi arriva dopo può passare prima.":
    "In der Notaufnahme wird nicht nach Reihenfolge des Eintreffens behandelt, sondern nach Schwere: wer später kommt, kann früher drankommen.",
  "In quale anno nasce il Servizio sanitario nazionale?":
    "In welchem Jahr entsteht der nationale Gesundheitsdienst?",
  "Nel 1948": "1948",
  "Nel 1970": "1970",
  "Nel 1978": "1978",
  "Nel 2001": "2001",
  "Nel 1978, sostituendo le casse mutue legate alla categoria professionale. Prima di allora la copertura dipendeva dal mestiere che si faceva.":
    "1978, als Ablösung der an den Berufsstand gebundenen Krankenkassen. Vorher hing die Absicherung davon ab, welchen Beruf man ausübte.",
  "La scuola": "Die Schule",
  "L'istruzione è **obbligatoria dai sei ai sedici anni** e l'articolo 34 la dichiara gratuita per almeno otto anni. Il percorso comincia prima, con la scuola dell'infanzia dai tre anni, che non è obbligatoria ma è frequentata dalla grande maggioranza dei bambini.":
    "Die Ausbildung ist **von sechs bis sechzehn Jahren verpflichtend**, und Artikel 34 erklärt sie für mindestens acht Jahre als unentgeltlich. Der Weg beginnt früher, mit dem Kindergarten ab drei Jahren, der nicht verpflichtend ist, den aber die große Mehrheit der Kinder besucht.",
  "Primaria": "Grundschule",
  "Cinque anni, dai sei agli undici. È quella che tutti chiamano ancora scuola elementare.":
    "Fünf Jahre, von sechs bis elf. Es ist die, die alle noch scuola elementare nennen.",
  "Secondaria di primo grado": "Mittelstufe",
  "Tre anni, dagli undici ai quattordici: le medie. Si chiude con un esame.":
    "Drei Jahre, von elf bis vierzehn: die medie. Sie schließt mit einer Prüfung.",
  "Secondaria di secondo grado": "Oberstufe",
  "Cinque anni. Si sceglie fra liceo, istituto tecnico e istituto professionale, e la scelta si fa a tredici anni.":
    "Fünf Jahre. Man wählt zwischen Gymnasium, technischer und beruflicher Oberschule, und die Wahl fällt mit dreizehn.",
  "Università": "Universität",
  "Laurea triennale e poi magistrale biennale, oppure corsi a ciclo unico per medicina, giurisprudenza e architettura.":
    "Ein dreijähriger Bachelor und danach ein zweijähriger Master, oder durchgehende Studiengänge für Medizin, Rechtswissenschaft und Architektur.",
  "L'esame che chiude la secondaria superiore si chiama ufficialmente **esame di Stato** e tutti lo chiamano **maturità**. Dà accesso all'università e si valuta in **centesimi**, con il sessanta come minimo per la promozione.":
    "Die Prüfung, die die Oberstufe abschließt, heißt amtlich **Staatsprüfung** und wird von allen **maturità** genannt. Sie öffnet den Zugang zur Universität und wird in **Hundertsteln** bewertet, mit sechzig als Mindestnote zum Bestehen.",
  "Fino a quale età l'istruzione è obbligatoria in Italia?":
    "Bis zu welchem Alter ist die Ausbildung in Italien verpflichtend?",
  "Fino ai quattordici anni": "Bis vierzehn",
  "Fino ai sedici anni": "Bis sechzehn",
  "Fino ai diciotto anni": "Bis achtzehn",
  "Fino al conseguimento del diploma": "Bis zum Erwerb des Abschlusses",
  "Dai sei ai sedici anni. Il diploma della secondaria superiore si ottiene a diciannove, ma l'obbligo finisce prima: si può assolvere l'ultimo tratto anche in un percorso di formazione professionale.":
    "Von sechs bis sechzehn Jahren. Den Abschluss der Oberstufe erwirbt man mit neunzehn, aber die Pflicht endet früher: das letzte Stück kann man auch in einer beruflichen Ausbildung erfüllen.",
  "I voti": "Die Noten",
  "Le scale cambiano a ogni livello, e questo confonde chi arriva da fuori. Alla primaria e alle medie si usano i **decimi**, con il sei come sufficienza. Alla maturità si usano i **centesimi**, con il sessanta. All'università si usano i **trentesimi**, con il diciotto come minimo e la possibilità della **lode**. La laurea si valuta in **centodecimi**, e il massimo è centodieci e lode.":
    "Die Skalen wechseln auf jeder Stufe, und das verwirrt, wer von außen kommt. In der Grundschule und in der Mittelstufe wird in **Zehnteln** benotet, mit der Sechs als ausreichend. Bei der maturità in **Hundertsteln**, mit der Sechzig. An der Universität in **Dreißigsteln**, mit achtzehn als Mindestnote und der Möglichkeit der **Auszeichnung**. Der Studienabschluss wird in **Hundertzehnteln** bewertet, und das Höchste ist hundertzehn mit Auszeichnung.",
  "Su quale scala si valutano gli esami universitari in Italia?":
    "Auf welcher Skala werden Universitätsprüfungen in Italien bewertet?",
  "In decimi": "In Zehnteln",
  "In trentesimi": "In Dreißigsteln",
  "In centesimi": "In Hundertsteln",
  "In centodecimi": "In Hundertzehnteln",
  "In trentesimi, con diciotto come voto minimo e la lode oltre il trenta. I centodecimi si usano per il voto finale di laurea e i centesimi per la maturità.":
    "In Dreißigsteln, mit achtzehn als Mindestnote und der Auszeichnung oberhalb der dreißig. Die Hundertzehntel gelten für die Abschlussnote des Studiums und die Hundertstel für die maturità.",
  "Il **liceo** non è la scuola superiore in generale: è uno dei tre indirizzi, accanto all'istituto tecnico e a quello professionale. Tutti e tre danno un diploma che apre all'università.":
    "Das **liceo** ist nicht die Oberschule im Allgemeinen: es ist einer der drei Zweige, neben der technischen und der beruflichen Oberschule. Alle drei geben einen Abschluss, der zur Universität führt.",
  // it-vivere-in-italia
  "Perché conta: questa è la lezione pratica. Nessuna delle prove qui descritte riguarda la storia o le istituzioni — e questo corso non prepara a nessuna di esse. Servono a sapere che cosa lo Stato chiede, e a chi.":
    "Warum das zählt: das ist die praktische Lektion. Keine der hier beschriebenen Prüfungen betrifft Geschichte oder Institutionen — und dieser Kurs bereitet auf keine von ihnen vor. Sie sind dazu da, zu wissen, was der Staat verlangt und von wem.",
  "Il codice fiscale, prima di tutto": "Die Steuernummer, vor allem anderen",
  "Il **codice fiscale** è una sigla di sedici caratteri ricavata da nome, cognome, data e luogo di nascita. Non è una tessera: è un identificativo, e serve praticamente per ogni cosa — aprire un conto, firmare un contratto d'affitto, iscriversi al servizio sanitario, comprare una scheda telefonica.":
    "Der **codice fiscale** ist ein Kürzel aus sechzehn Zeichen, gebildet aus Vor- und Nachname, Geburtsdatum und Geburtsort. Es ist keine Karte: es ist eine Kennung, und sie wird praktisch für alles gebraucht — ein Konto eröffnen, einen Mietvertrag unterschreiben, sich beim Gesundheitsdienst anmelden, eine Telefonkarte kaufen.",
  "Segue la **residenza**, cioè l'iscrizione all'anagrafe del comune in cui si abita davvero. Dalla residenza dipendono la carta d'identità, il medico di base, l'iscrizione a scuola e il diritto di voto alle comunali per i cittadini dell'Unione.":
    "Es folgt die **Wohnsitzmeldung**, also die Eintragung im Melderegister der Gemeinde, in der man wirklich lebt. Vom Wohnsitz hängen der Personalausweis, die Hausärztin, die Anmeldung in der Schule und für Unionsbürgerinnen das Wahlrecht bei den Kommunalwahlen ab.",
  "Il permesso di soggiorno": "Der Aufenthaltstitel",
  "Chi non è cittadino dell'Unione europea ha bisogno di un **permesso di soggiorno**, che si chiede alla **questura** presentando la domanda tramite gli uffici postali abilitati. La durata e le condizioni dipendono dal motivo: lavoro, studio, famiglia, protezione.":
    "Wer nicht Bürgerin der Europäischen Union ist, braucht einen **Aufenthaltstitel**, den man bei der **Questura** beantragt, wobei der Antrag über dafür zugelassene Postämter eingereicht wird. Dauer und Bedingungen hängen vom Grund ab: Arbeit, Studium, Familie, Schutz.",
  "Per il **permesso di soggiorno UE per soggiornanti di lungo periodo**, che non ha scadenza, si richiedono almeno cinque anni di soggiorno regolare, un reddito e la dimostrazione di conoscere l'italiano al livello **A2** attraverso un test.":
    "Für den **EU-Aufenthaltstitel für langfristig Aufenthaltsberechtigte**, der nicht abläuft, verlangt man mindestens fünf Jahre rechtmäßigen Aufenthalt, ein Einkommen und den Nachweis von Italienischkenntnissen auf dem Niveau **A2** durch einen Test.",
  "A che cosa serve il codice fiscale?": "Wozu dient der codice fiscale?",
  "Solo a pagare le imposte": "Nur zum Steuerzahlen",
  "A identificare la persona in quasi ogni rapporto con enti e privati":
    "Er weist die Person in fast jedem Verhältnis zu Behörden und Privaten aus",
  "Ad accedere al pronto soccorso": "Zum Zugang zur Notaufnahme",
  "A votare alle elezioni comunali": "Zur Teilnahme an den Kommunalwahlen",
  "È l'identificativo di base: serve per il conto in banca, il contratto d'affitto, l'iscrizione al servizio sanitario, il contratto di lavoro. Il nome inganna, perché il suo uso va molto oltre il fisco.":
    "Er ist die grundlegende Kennung: man braucht ihn für das Bankkonto, den Mietvertrag, die Anmeldung beim Gesundheitsdienst, den Arbeitsvertrag. Der Name täuscht, denn sein Gebrauch reicht weit über die Steuer hinaus.",
  "L'accordo di integrazione": "Die Integrationsvereinbarung",
  "Chi entra per la prima volta e chiede un permesso di almeno un anno firma con lo Stato un **accordo di integrazione**, in vigore dal 2012. Funziona a **crediti**: se ne ricevono sedici all'inizio, e vanno mantenuti o accresciuti nell'arco di **due anni**, prorogabili di uno.":
    "Wer zum ersten Mal einreist und einen Titel von mindestens einem Jahr beantragt, unterzeichnet mit dem Staat eine **Integrationsvereinbarung**, in Kraft seit 2012. Sie funktioniert über **Punkte**: sechzehn erhält man zu Beginn, und sie müssen über **zwei Jahre** gehalten oder vermehrt werden, verlängerbar um ein weiteres.",
  "La formazione civica": "Die staatsbürgerliche Schulung",
  "Entro tre mesi dalla firma si partecipa a una sessione sull'ordinamento, sui diritti e doveri e sui servizi. Non è un esame: la partecipazione dà crediti.":
    "Binnen drei Monaten nach der Unterschrift nimmt man an einer Veranstaltung über die Staatsordnung, über Rechte und Pflichten und über die Dienste teil. Es ist keine Prüfung: die Teilnahme bringt Punkte.",
  "Che cosa si verifica alla fine": "Was am Ende geprüft wird",
  "Conoscenza dell'italiano parlato almeno al livello A2, conoscenza sufficiente della cultura civica e della vita civile in Italia.":
    "Kenntnis des gesprochenen Italienisch mindestens auf dem Niveau A2, ausreichende Kenntnis der staatsbürgerlichen Kultur und des zivilen Lebens in Italien.",
  "I crediti si perdono": "Punkte gehen verloren",
  "Condanne penali definitive e sanzioni gravi li riducono. Azzerarli comporta la revoca del permesso di soggiorno.":
    "Rechtskräftige strafrechtliche Verurteilungen und schwere Sanktionen verringern sie. Wer auf null fällt, verliert den Aufenthaltstitel.",
  "Chi lo firma alla prefettura": "Wer sie in der Präfektur unterschreibt",
  "L'accordo si sottoscrive davanti allo sportello unico presso la prefettura, che rappresenta il governo in ogni provincia.":
    "Die Vereinbarung wird vor der zentralen Anlaufstelle bei der Präfektur unterzeichnet, die die Regierung in jeder Provinz vertritt.",
  "È l'unica prova italiana che tocca la conoscenza del paese, e resta molto lontana da un esame di educazione civica: si verifica una conoscenza sufficiente della vita civile, non un programma di storia e istituzioni.":
    "Es ist die einzige italienische Prüfung, die die Kenntnis des Landes berührt, und sie bleibt von einer Prüfung in Staatsbürgerkunde weit entfernt: geprüft wird eine ausreichende Kenntnis des zivilen Lebens, kein Lehrplan aus Geschichte und Institutionen.",
  "Come funziona l'accordo di integrazione?": "Wie funktioniert die Integrationsvereinbarung?",
  "Con un esame scritto di storia e istituzioni":
    "Mit einer schriftlichen Prüfung über Geschichte und Institutionen",
  "Con un sistema a crediti da mantenere in due anni":
    "Mit einem Punktesystem, das über zwei Jahre zu halten ist",
  "Con un colloquio annuale in questura": "Mit einem jährlichen Gespräch bei der Questura",
  "Con il versamento di una cauzione": "Mit der Hinterlegung einer Kaution",
  "Si ricevono sedici crediti alla firma e si verificano dopo due anni, insieme alla conoscenza dell'italiano a livello A2 e a una conoscenza sufficiente della vita civile. Non c'è un esame di educazione civica.":
    "Man erhält bei der Unterschrift sechzehn Punkte, und nach zwei Jahren wird geprüft, zusammen mit Italienischkenntnissen auf dem Niveau A2 und einer ausreichenden Kenntnis des zivilen Lebens. Eine Prüfung in Staatsbürgerkunde gibt es nicht.",
  "La cittadinanza": "Die Staatsangehörigkeit",
  "Si può diventare cittadini italiani per **discendenza**, per **matrimonio** o per **residenza**. Per residenza il termine ordinario per chi non è cittadino dell'Unione è di **dieci anni**; è più breve per i cittadini dell'Unione, per i rifugiati e per chi è nato in Italia.":
    "Italienische Staatsangehörige kann man durch **Abstammung**, durch **Eheschließung** oder durch **Aufenthalt** werden. Beim Aufenthalt beträgt die gewöhnliche Frist für Nicht-Unionsbürgerinnen **zehn Jahre**; sie ist kürzer für Unionsbürgerinnen, für Flüchtlinge und für in Italien Geborene.",
  "Dal **2018** la domanda per matrimonio e per residenza richiede un certificato di conoscenza dell'italiano non inferiore al livello **B1** del quadro europeo. È una prova **linguistica**: non verte sulla storia, sulla Costituzione o sulle istituzioni.":
    "Seit **2018** verlangt der Antrag bei Eheschließung und Aufenthalt einen Nachweis über Italienischkenntnisse nicht unter dem Niveau **B1** des europäischen Referenzrahmens. Es ist eine **sprachliche** Prüfung: sie handelt nicht von Geschichte, Verfassung oder Institutionen.",
  "Quale livello di italiano è richiesto per la domanda di cittadinanza?":
    "Welches Italienischniveau verlangt der Antrag auf Staatsangehörigkeit?",
  "A1": "A1",
  "A2": "A2",
  "B1": "B1",
  "C1": "C1",
  "B1 per la cittadinanza, dal 2018. Il livello A2 serve invece per il permesso di soggiorno di lungo periodo: due prove diverse, con due soglie diverse, entrambe soltanto linguistiche.":
    "B1 für die Staatsangehörigkeit, seit 2018. Das Niveau A2 gilt dagegen für den langfristigen Aufenthaltstitel: zwei verschiedene Prüfungen mit zwei verschiedenen Schwellen, beide allein sprachlich.",
  "Per i servizi online serve un'identità digitale: **SPID** o la **carta d'identità elettronica**. Senza una delle due non si prenota una visita, non si scarica un certificato e non si consulta il proprio fascicolo previdenziale.":
    "Für die Online-Dienste braucht es eine digitale Identität: **SPID** oder den **elektronischen Personalausweis**. Ohne eine von beiden bucht man keinen Termin, lädt keine Bescheinigung herunter und sieht seine Rentenakte nicht ein.",
  // it-vita-quotidiana
  "Perché si chiude qui: le regole non scritte si imparano più lentamente di quelle scritte, e sono quelle che fanno sentire a proprio agio o fuori posto. Nessuna di esse è obbligatoria; tutte sono reali.":
    "Warum hier geschlossen wird: die ungeschriebenen Regeln lernt man langsamer als die geschriebenen, und sie sind es, die einen sich wohl oder fehl am Platz fühlen lassen. Keine von ihnen ist verpflichtend; alle sind wirklich.",
  "Il caffè e la tavola": "Der Kaffee und der Tisch",
  "Il **caffè** in Italia è l'espresso, e si beve **al banco** in un minuto. Il **cappuccino** è una bevanda della **mattina**: ordinarlo dopo pranzo non è vietato da nessuna legge, ma segnala immediatamente che si viene da fuori. Dopo il pasto si prende il caffè, eventualmente **corretto** con un liquore.":
    "Der **Kaffee** ist in Italien der Espresso, und man trinkt ihn **an der Theke** in einer Minute. Der **Cappuccino** ist ein Getränk des **Vormittags**: ihn nach dem Mittagessen zu bestellen ist durch kein Gesetz verboten, zeigt aber sofort an, dass man von auswärts kommt. Nach dem Essen nimmt man den Espresso, gegebenenfalls **corretto**, mit einem Schuss Schnaps.",
  "I pasti hanno orari precisi: colazione leggera e dolce, pranzo fra le tredici e le quattordici, cena dalle venti in poi, più tardi man mano che si scende verso sud. Prima di cena c'è l'**aperitivo**, che a Milano è diventato quasi un pasto.":
    "Die Mahlzeiten haben feste Zeiten: ein leichtes, süßes Frühstück, das Mittagessen zwischen dreizehn und vierzehn Uhr, das Abendessen ab zwanzig Uhr, je weiter südlich desto später. Vor dem Abendessen steht der **Aperitivo**, der in Mailand fast zu einer Mahlzeit geworden ist.",
  "In quale momento della giornata si beve tradizionalmente il cappuccino?":
    "Zu welcher Tageszeit trinkt man überlieferterweise den Cappuccino?",
  "Al mattino": "Am Vormittag",
  "Dopo pranzo": "Nach dem Mittagessen",
  "Dopo cena": "Nach dem Abendessen",
  "In qualunque momento, indifferentemente": "Zu jeder Zeit, gleichgültig wann",
  "Il cappuccino appartiene alla colazione. Dopo il pasto si prende l'espresso: non è una regola scritta, ma è seguita così largamente da funzionare come tale.":
    "Der Cappuccino gehört zum Frühstück. Nach dem Essen nimmt man den Espresso: es ist keine geschriebene Regel, aber sie wird so breit befolgt, dass sie wie eine wirkt.",
  "Una cucina che non esiste": "Eine Küche, die es nicht gibt",
  "La **cucina italiana** al singolare è in buona parte un'invenzione dell'estero e dell'emigrazione. In Italia la cucina è **regionale**, spesso cittadina: il ragù non è lo stesso a Bologna e a Napoli, la pizza di Napoli e quella romana sono due prodotti diversi, e ogni valle ha il proprio formaggio.":
    "Die **italienische Küche** im Singular ist zu einem guten Teil eine Erfindung des Auslands und der Auswanderung. In Italien ist die Küche **regional**, oft städtisch: das Ragù ist in Bologna und in Neapel nicht dasselbe, die neapolitanische und die römische Pizza sind zwei verschiedene Erzeugnisse, und jedes Tal hat seinen eigenen Käse.",
  "Vale anche per l'ordine del pasto: antipasto, **primo** — pasta, riso o zuppa — **secondo** con contorno, poi frutta o dolce. Il primo non è un antipasto e il secondo non si accompagna alla pasta: sono due portate distinte, servite una dopo l'altra.":
    "Das gilt auch für die Abfolge des Essens: Vorspeise, **primo** — Pasta, Reis oder Suppe —, **secondo** mit Beilage, dann Obst oder Süßes. Das primo ist keine Vorspeise, und das secondo wird nicht zur Pasta gereicht: es sind zwei getrennte Gänge, einer nach dem anderen serviert.",
  "Casa, famiglia, piazza": "Haus, Familie, Piazza",
  "I giovani italiani lasciano la casa dei genitori più tardi che in quasi tutta Europa, per ragioni che sono soprattutto economiche: affitti, salari d'ingresso, lavoro instabile. I **nonni** hanno spesso un ruolo quotidiano nella cura dei nipoti, e questo tiene insieme molti bilanci familiari.":
    "Junge Italienerinnen und Italiener verlassen das Elternhaus später als fast überall in Europa, aus Gründen, die vor allem wirtschaftlich sind: Mieten, Einstiegsgehälter, unsichere Arbeit. Die **Großeltern** haben oft eine tägliche Rolle bei der Betreuung der Enkel, und das hält viele Familienhaushalte zusammen.",
  "La **piazza** resta il luogo dello stare insieme, e la **passeggiata** serale è ancora una pratica diffusa nei centri piccoli e medi. Nel rivolgersi a qualcuno si distingue fra **tu** e **lei**: il lei con gli sconosciuti, con chi è più anziano e in ogni contesto formale, finché non è l'altro a proporre il passaggio al tu.":
    "Die **Piazza** bleibt der Ort des Beisammenseins, und der abendliche **Spaziergang** ist in kleinen und mittleren Orten weiterhin verbreitet. In der Anrede unterscheidet man zwischen **tu** und **lei**: das lei bei Unbekannten, bei Älteren und in jedem förmlichen Zusammenhang, bis die andere Person den Übergang zum tu vorschlägt.",
  "Quando si usa il lei rivolgendosi a qualcuno?": "Wann benutzt man in der Anrede das lei?",
  "Solo negli atti scritti": "Nur in schriftlichen Urkunden",
  "Con gli sconosciuti, con chi è più anziano e nei contesti formali":
    "Bei Unbekannten, bei Älteren und in förmlichen Zusammenhängen",
  "Sempre, anche in famiglia": "Immer, auch in der Familie",
  "Soltanto nel Sud del paese": "Nur im Süden des Landes",
  "Il passaggio al tu di solito lo propone la persona più anziana o di posizione superiore. Dare del tu troppo presto a uno sconosciuto è la scortesia più facile da commettere.":
    "Den Übergang zum tu schlägt meist die ältere oder höherstehende Person vor. Einem Unbekannten zu früh das tu anzubieten ist die am leichtesten begangene Unhöflichkeit.",
  "Lo sport": "Der Sport",
  "Il **calcio** è lo sport nazionale: la **Serie A** riempie le conversazioni da agosto a maggio, e la nazionale, gli **azzurri**, ha vinto quattro campionati del mondo. Il colore azzurro delle maglie non viene dalla bandiera ma dal blu Savoia, e la Repubblica ha scelto di conservarlo.":
    "Der **Fußball** ist der Nationalsport: die **Serie A** füllt von August bis Mai die Gespräche, und die Nationalmannschaft, die **azzurri**, hat vier Weltmeisterschaften gewonnen. Das Himmelblau der Trikots kommt nicht von der Flagge, sondern vom Savoyerblau, und die Republik hat sich entschieden, es zu behalten.",
  "Il secondo sport per radicamento è il **ciclismo**, con il **Giro d'Italia** che ogni maggio attraversa il paese. Chi è in testa alla classifica indossa la **maglia rosa**, del colore della carta del giornale che lo organizzò.":
    "Der zweite Sport nach Verwurzelung ist der **Radsport**, mit dem **Giro d'Italia**, der jeden Mai das Land durchquert. Wer in der Gesamtwertung führt, trägt das **rosa Trikot**, in der Farbe des Papiers der Zeitung, die das Rennen ins Leben rief.",
  "Di che colore è la maglia di chi guida la classifica del Giro d'Italia?":
    "Welche Farbe hat das Trikot dessen, der die Gesamtwertung des Giro d'Italia anführt?",
  "Gialla": "Gelb",
  "Rosa": "Rosa",
  "Verde": "Grün",
  "Azzurra": "Himmelblau",
  "Rosa, come la carta del quotidiano sportivo che organizzò la corsa. La maglia gialla appartiene invece al Tour de France, per la stessa ragione: il colore della carta del suo giornale.":
    "Rosa, wie das Papier der Sportzeitung, die das Rennen ins Leben rief. Das gelbe Trikot gehört dagegen zur Tour de France, aus demselben Grund: der Papierfarbe ihrer Zeitung.",
  "Gli orari": "Die Öffnungszeiten",
  "Molti negozi e uffici chiudono per la **pausa pranzo**, soprattutto nei centri piccoli e al Sud, e riaprono nel pomeriggio fino a sera. Ad **agosto**, e in particolare intorno a **Ferragosto**, chiudono per ferie negozi, studi professionali e interi quartieri delle grandi città.":
    "Viele Geschäfte und Büros schließen zur **Mittagspause**, vor allem in kleinen Orten und im Süden, und öffnen am Nachmittag bis zum Abend wieder. Im **August**, und besonders um **Ferragosto**, machen Geschäfte, Kanzleien und ganze Viertel der großen Städte Betriebsferien.",
  "Nessuna di queste consuetudini è una regola, e in una città grande molte non valgono più. Ma conoscerle spiega perché una porta è chiusa alle quattordici e trenta, e perché il barista alza un sopracciglio davanti a un cappuccino ordinato alle nove di sera.":
    "Keine dieser Gepflogenheiten ist eine Regel, und in einer großen Stadt gelten viele nicht mehr. Aber sie zu kennen erklärt, warum eine Tür um halb drei geschlossen ist und warum der Barmann bei einem um neun Uhr abends bestellten Cappuccino eine Augenbraue hebt.",
};
